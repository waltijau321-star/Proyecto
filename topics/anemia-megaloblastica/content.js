// topics/anemia-megaloblastica/content.js: Anemia Megaloblástica (deficiencia de B12 no
// autoinmune, anemia perniciosa, deficiencia de folato, causas no nutricionales). Estructura
// idéntica al contrato del motor (misma forma que anemia-ferropenica/anemia-aplasica/anemias-
// hemoliticas-*). Sigue la convención de figuras en línea (figBlock(), numerada "Tabla N"/
// "Imagen N" con conteo continuo por tipo).

export const meta = {
  id: 'anemia-megaloblastica',
  titulo: 'Anemia Megaloblástica',
  subtitulo: 'Módulo 14 · Medicina Interna',
  accent: '#5c3d8c',
  accentDim: '#8a6ab0'
};

// Reproduce el marcado de .modal-figure (mismo helper que los temas recientes de Hematología)
// para insertar figuras EN LÍNEA justo debajo del párrafo/entrada que las menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const viaB12FolatoHtml = `
<div style="display:flex;flex-direction:column;gap:10px;max-width:600px;margin:0 auto;">
  <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center;">
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:8px 12px;font-size:10.5px;color:var(--ink);text-align:center;">Homocisteína</div>
    <div style="color:var(--ink-dim);">→</div>
    <div style="background:#3f6b5233;border:1px solid #3f6b52;border-radius:6px;padding:8px 12px;font-size:10.5px;color:var(--ink);text-align:center;">Metionina<br><span style="font-size:9px;color:var(--ink-dim);">(requiere FOLATO y B12 juntos)</span></div>
    <div style="color:var(--ink-dim);">→</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:8px 12px;font-size:10.5px;color:var(--ink);text-align:center;">Síntesis de timidina / ADN</div>
  </div>
  <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;justify-content:center;">
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:8px 12px;font-size:10.5px;color:var(--ink);text-align:center;">Metilmalonil-CoA</div>
    <div style="color:var(--ink-dim);">→</div>
    <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:6px;padding:8px 12px;font-size:10.5px;color:var(--ink);text-align:center;">Succinil-CoA<br><span style="font-size:9px;color:var(--ink-dim);">(requiere SOLO B12)</span></div>
    <div style="color:var(--ink-dim);">→</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:8px 12px;font-size:10.5px;color:var(--ink);text-align:center;">Síntesis de mielina</div>
  </div>
</div>
<div class="figure-grade-box">La vía compartida (arriba) explica por qué el folato puede corregir la anemia de una deficiencia de B12 sin corregir el déficit en sí. La vía exclusiva de B12 (abajo) explica por qué solo la deficiencia de B12, nunca la de folato aislada, daña la mielina.</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Las anemias megaloblásticas son anemias macrocíticas producidas por una síntesis defectuosa de ADN en los precursores hematopoyéticos, casi siempre por deficiencia de vitamina B12 (cobalamina) o de folato (ácido fólico), dos cofactores esenciales para la síntesis de timidina y, por tanto, para la replicación celular. El defecto de maduración nuclear (con citoplasma que madura con relativa normalidad) produce la célula "megaloblástica" característica, tanto en la médula ósea (precursores gigantes con cromatina laxa) como en sangre periférica (macroovalocitos, neutrófilos hipersegmentados). A diferencia de la anemia ferropénica, donde el defecto es de síntesis de hemoglobina (célula pequeña, ver ese tema), aquí el defecto es de división celular (célula grande): la médula produce menos células, más grandes, y muchas mueren antes de madurar (eritropoyesis ineficaz, con un patrón de laboratorio que puede simular hemólisis, ver Complicaciones).</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La deficiencia de B12 es más frecuente en el adulto mayor (por gastritis atrófica relacionada con la edad) y en veganos estrictos sin suplementación; la anemia perniciosa (causa autoinmune) tiene una prevalencia de hasta 2-3% en mayores de 60 años, con predominio en descendencia del norte de Europa. La deficiencia de folato es menos frecuente que antes de la fortificación alimentaria obligatoria del trigo/harina en muchos países, y hoy se ve predominantemente en el alcoholismo crónico, la malnutrición, o el aumento de la demanda no cubierta (embarazo, hemólisis crónica).</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Deficiencia de B12 no autoinmune</strong>: dieta insuficiente (vegano estricto sin suplementación), malabsorción estructural (gastrectomía, resección ileal o enfermedad de Crohn ileal, sobrecrecimiento bacteriano, insuficiencia pancreática exocrina), fármacos (metformina, inhibidores de bomba de protones crónicos).</li>
    <li><strong>Anemia perniciosa</strong>: gastritis atrófica autoinmune del cuerpo/fondo gástrico, con destrucción de células parietales mediada por autoanticuerpos anti-célula parietal y anti-factor intrínseco.</li>
    <li><strong>Deficiencia de folato</strong>: dieta insuficiente (alcoholismo crónico, malnutrición), aumento de la demanda (embarazo, hemólisis crónica), malabsorción (enfermedad celíaca), fármacos antagonistas del folato (metotrexato, trimetoprim, fenitoína, sulfasalazina).</li>
    <li><strong>Causas no nutricionales de megaloblastosis</strong>: fármacos antimetabolitos (hidroxiurea, azatioprina, zidovudina, quimioterapia), trastornos congénitos raros del metabolismo de purinas/pirimidinas.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Edad avanzada</li>
    <li>Dieta vegana/vegetariana estricta sin suplementación</li>
    <li>Alcoholismo crónico</li>
    <li>Cirugía gástrica o resección ileal previas, enfermedad de Crohn</li>
    <li>Enfermedad autoinmune concomitante (tiroiditis, vitíligo, diabetes tipo 1)</li>
    <li>Embarazo</li>
    <li>Uso crónico de metformina o inhibidores de bomba de protones</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> La vitamina B12 y el folato son cofactores esenciales en la síntesis de timidina (a través de la conversión de homocisteína a metionina, que regenera tetrahidrofolato disponible para la síntesis de ADN) y, en el caso específico de la B12, también en la conversión de metilmalonil-CoA a succinil-CoA (una vía independiente del folato, cuyo bloqueo eleva el ácido metilmalónico -MMA- y es la base del diferencial de laboratorio central de este tema, ver Escalas).${figBlock('Imagen 1', 'Las 2 vías metabólicas: compartida vs. exclusiva de B12', viaB12FolatoHtml)} Sin timidina suficiente, la síntesis de ADN se retrasa mientras la síntesis de ARN y proteínas citoplasmáticas continúa con normalidad, produciendo un asincronismo madurativo núcleo-citoplasma: células grandes con núcleo inmaduro (cromatina laxa) pero citoplasma relativamente maduro. La apoptosis intramedular de estos precursores anómalos es masiva, produciendo citopenias periféricas pese a una médula hipercelular (eritropoyesis ineficaz, un patrón que puede elevar la LDH y la bilirrubina indirecta lo suficiente como para simular hemólisis, ver Complicaciones). La B12 tiene además una función independiente y no compartida con el folato: es cofactor de la metilmalonil-CoA mutasa, cuyo déficit compromete la síntesis de mielina y explica las manifestaciones neurológicas exclusivas de la deficiencia de B12 (ver Complicaciones), ausentes en la deficiencia aislada de folato. Analogía: el folato y la B12 son 2 obreros que comparten una sola tarea (la línea de síntesis de ADN), por lo que si falta uno, el otro no puede terminar el trabajo solo; pero la B12 tiene además una segunda tarea en solitario (el mantenimiento de la mielina) que nadie más puede cubrir, así que si falta solo la B12, esa segunda tarea queda sin hacer aunque prestemos todo el folato del mundo para la primera.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde el hallazgo incidental de macrocitosis leve asintomática hasta la anemia franca sintomática (fatiga, disnea de esfuerzo, palidez con tinte subictérico) y manifestaciones específicas según la causa (glositis atrófica lisa y dolorosa, "lengua de Hunter"; síntomas neuropsiquiátricos que van de la irritabilidad al deterioro cognitivo franco en la deficiencia de B12).${figBlock('Imagen 2', 'Glositis atrófica ("lengua de Hunter")', `
<img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Image_of_the_tongue_in_a_B12-deficient_patient_without_a_history_of_gastrectomy.webp" alt="Glositis atrófica en un paciente con deficiencia de vitamina B12: eritema y depapilación de la superficie lingual." style="width:100%;max-width:340px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
<p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Eritema y depapilación de la lengua en un paciente con deficiencia de B12, la "lengua de Hunter" clásica. Kim J, Kim MJ, Kho HS, Wikimedia Commons, CC BY 4.0.</p>`)} El diagnóstico definitivo, el estudio etiológico dirigido y el manejo de cada forma se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Green R, Allen LH, Bjørke-Monsen AL, et al. Vitamin B12 deficiency. Nat Rev Dis Primers. 2017;3:17040.',
  'Stabler SP. Vitamin B12 Deficiency. N Engl J Med. 2013;368(2):149-160.',
  'Hunt A, Harrington D, Robinson S. Vitamin B12 deficiency. BMJ. 2014;349:g5226.',
  'Lam JR, Schneider JL, Zhao W, Corley DA. Proton pump inhibitor and histamine-2 receptor antagonist use and vitamin B12 deficiency. JAMA. 2013;310(22):2435-2442.',
  'Toh BH, van Driel IR, Gleeson PA. Pernicious anemia. N Engl J Med. 1997;337(20):1441-1448.',
  'Lahner E, Annibale B. Pernicious anemia: new insights from a gastroenterological point of view. World J Gastroenterol. 2009;15(41):5121-5128.',
  'Vannella L, Lahner E, Annibale B. Risk for gastric neoplasias in patients with chronic atrophic gastritis: a critical reappraisal. World J Gastroenterol. 2012;18(12):1279-1285.',
  'Wickramasinghe SN. Diagnosis of megaloblastic anaemias. Blood Rev. 2006;20(6):299-318.',
  'Devalia V, Hamilton MS, Molloy AM; British Committee for Standards in Haematology. Guidelines for the diagnosis and treatment of cobalamin and folate disorders. Br J Haematol. 2014;166(4):496-513.',
  'Snow CF. Laboratory diagnosis of vitamin B12 and folate deficiency: a guide for the primary care physician. Arch Intern Med. 1999;159(12):1289-1298.',
  'Carmel R. How I treat cobalamin (vitamin B12) deficiency. Blood. 2008;112(6):2214-2221.',
  'Reynolds E. Vitamin B12, folic acid, and the nervous system. Lancet Neurol. 2006;5(11):949-960.',
  'Healton EB, Savage DG, Brust JC, et al. Neurologic aspects of cobalamin deficiency. Medicine (Baltimore). 1991;70(4):229-245.',
  'Dickinson CJ. Does folic acid harm people with vitamin B12 deficiency? QJM. 1995;88(5):357-364.',
  'Andrès E, Serraj K. Optimal management of pernicious anemia. J Blood Med. 2012;3:97-103.',
  'Kaferle J, Strzoda CE. Evaluation of macrocytosis. Am Fam Physician. 2009;79(3):203-208.'
];

const hipersegmentacionSvg = `
<svg viewBox="0 0 480 220" role="img" aria-labelledby="hs-title hs-desc" style="width:100%;max-width:400px;display:block;margin:0 auto;">
  <title id="hs-title">Neutrófilo normal vs. hipersegmentado</title>
  <desc id="hs-desc">Comparación esquemática de un neutrófilo normal, con núcleo de 3-4 lóbulos, frente a un neutrófilo hipersegmentado característico de la megaloblastosis, con 6 o más lóbulos nucleares.</desc>
  <text x="120" y="24" text-anchor="middle" fill="var(--accent-fg)" font-size="13" font-weight="700">NORMAL (3-4 lóbulos)</text>
  <text x="360" y="24" text-anchor="middle" fill="var(--accent-fg)" font-size="13" font-weight="700">HIPERSEGMENTADO (≥6)</text>
  <g>
    <circle cx="120" cy="130" r="70" fill="var(--panel)" stroke="var(--ink)" stroke-width="2.5"/>
    <circle cx="95" cy="105" r="16" fill="var(--ink)" opacity="0.68"/>
    <circle cx="140" cy="100" r="16" fill="var(--ink)" opacity="0.68"/>
    <circle cx="150" cy="140" r="16" fill="var(--ink)" opacity="0.68"/>
    <circle cx="105" cy="155" r="16" fill="var(--ink)" opacity="0.68"/>
    <line x1="95" y1="105" x2="140" y2="100" stroke="var(--ink)" stroke-width="4" opacity="0.68"/>
    <line x1="140" y1="100" x2="150" y2="140" stroke="var(--ink)" stroke-width="4" opacity="0.68"/>
    <line x1="150" y1="140" x2="105" y2="155" stroke="var(--ink)" stroke-width="4" opacity="0.68"/>
  </g>
  <g transform="translate(240,0)">
    <circle cx="120" cy="130" r="70" fill="var(--panel)" stroke="var(--ink)" stroke-width="2.5"/>
    <circle cx="80" cy="95" r="12" fill="#8c3a34" opacity="0.75"/>
    <circle cx="115" cy="80" r="12" fill="#8c3a34" opacity="0.75"/>
    <circle cx="152" cy="90" r="12" fill="#8c3a34" opacity="0.75"/>
    <circle cx="165" cy="125" r="12" fill="#8c3a34" opacity="0.75"/>
    <circle cx="150" cy="160" r="12" fill="#8c3a34" opacity="0.75"/>
    <circle cx="110" cy="172" r="12" fill="#8c3a34" opacity="0.75"/>
    <line x1="80" y1="95" x2="115" y2="80" stroke="#8c3a34" stroke-width="3" opacity="0.75"/>
    <line x1="115" y1="80" x2="152" y2="90" stroke="#8c3a34" stroke-width="3" opacity="0.75"/>
    <line x1="152" y1="90" x2="165" y2="125" stroke="#8c3a34" stroke-width="3" opacity="0.75"/>
    <line x1="165" y1="125" x2="150" y2="160" stroke="#8c3a34" stroke-width="3" opacity="0.75"/>
    <line x1="150" y1="160" x2="110" y2="172" stroke="#8c3a34" stroke-width="3" opacity="0.75"/>
  </g>
</svg>
<div class="figure-grade-box">≥5% de neutrófilos con 5 lóbulos, o cualquier neutrófilo con 6 o más lóbulos: el hallazgo morfológico más específico de megaloblastosis, y puede preceder a la macrocitosis franca.</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Hypersegmented_neutrophil.png" alt="Frotis de sangre periférica de un paciente con anemia megaloblástica; la flecha señala un neutrófilo hipersegmentado real." style="width:100%;max-width:220px;display:block;margin:10px auto 0;border-radius:var(--radius);border:1px solid var(--line);">
<p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:6px 0 0;">Neutrófilo hipersegmentado (flecha) en un frotis real de anemia megaloblástica. Weisz Carrington P, US Department of Veterans Affairs, dominio público.</p>`;

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Macrocitosis leve / anemia megaloblástica compensada',
      tituloB: 'Anemia megaloblástica sintomática / manifestaciones extrahematológicas',
      compensada: 'Macrocitosis leve, con frecuencia hallazgo incidental en una biometría hemática de rutina; fatiga leve o ausente. Puede haber deficiencia subclínica (niveles séricos límite) sin anemia manifiesta aún.',
      descompensada: 'Fatiga marcada, disnea de esfuerzo, palidez con tinte subictérico (por la hemólisis intramedular, ver Complicaciones); glositis atrófica lisa y dolorosa ("lengua de Hunter"), queilitis angular; en la deficiencia de B12, manifestaciones neurológicas que van de la parestesia simétrica distal y la pérdida de sensibilidad vibratoria/propioceptiva hasta la ataxia y el deterioro cognitivo franco (degeneración combinada subaguda, ver Complicaciones), que pueden preceder a la anemia o presentarse sin ella.'
    },
    laboratorio: [
      { prueba: 'Biometría hemática con índices eritrocitarios', utilidad: 'Anemia macrocítica (VCM elevado, con frecuencia &gt;110 fL cuando es marcada), reticulocitos bajos o inapropiadamente normales (respuesta medular inadecuada pese a la anemia).' },
      { prueba: 'Frotis de sangre periférica', utilidad: `Macroovalocitos y neutrófilos hipersegmentados, el hallazgo morfológico más específico de megaloblastosis.${figBlock('Imagen 3', 'Neutrófilo normal vs. hipersegmentado', hipersegmentacionSvg)}` },
      { prueba: 'Niveles séricos de vitamina B12 y folato', utilidad: 'Primer paso, aunque con limitaciones de sensibilidad/especificidad reconocidas (la B12 sérica puede ser falsamente normal en deficiencia real, y falsamente baja en el embarazo o con anticonceptivos orales sin deficiencia verdadera).' },
      { prueba: 'Ácido metilmalónico (MMA) y homocisteína séricos (con calculadora, ver Escalas)', utilidad: 'Confirman la deficiencia funcional cuando el nivel sérico es ambiguo, y distinguen la deficiencia de B12 de la de folato.' }
    ],
    no_invasivos: [
      { metodo: 'Diferencial B12 vs. folato por MMA/homocisteína (con calculadora)', interpretacion: 'MMA y homocisteína elevados → deficiencia de B12. Solo homocisteína elevada, MMA normal → deficiencia de folato.', cutoff: 'MMA &gt;0.4 µmol/L, homocisteína &gt;15 µmol/L (umbrales orientativos, varían por ensayo)' },
      { metodo: 'Anticuerpos anti-factor intrínseco y anti-célula parietal', interpretacion: 'Confirman anemia perniciosa como causa de la deficiencia de B12 (ver esa tarjeta).', cutoff: 'N/A' },
      { metodo: 'Gastrina sérica', interpretacion: 'Elevada en la anemia perniciosa por la hipoclorhidria/aclorhidria, que retira la inhibición fisiológica de su producción.', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'Endoscopia digestiva alta con biopsia gástrica sistematizada', hallazgos: 'En la anemia perniciosa confirmada o sospechada, para documentar la gastritis atrófica y descartar neoplasia gástrica concomitante (ver Complicaciones).' },
      { modalidad: 'Aspirado/biopsia de médula ósea', hallazgos: 'Rara vez necesaria hoy, reservada para casos diagnósticos dudosos o sospecha de un proceso mielodisplásico concomitante: médula hipercelular con precursores megaloblásticos gigantes y metamielocitos gigantes "en banda".' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'El diferencial MMA/homocisteína (con calculadora) es el eje central para distinguir deficiencia de B12 de deficiencia de folato cuando los niveles séricos son ambiguos; el recuento de lóbulos del neutrófilo (hipersegmentación) es el hallazgo morfológico más específico y suele preceder a la macrocitosis franca.',
    escalas: [
      { nombre: 'Diferencial B12 vs. folato por MMA/homocisteína', componentes: 'Ácido metilmalónico (MMA) sérico, homocisteína sérica. Calculadora disponible más abajo.', formula: 'Interpretación categórica combinada de ambos valores.', interpretacion: 'MMA elevado + homocisteína elevada → deficiencia de B12 (ambas vías bloqueadas). MMA normal + homocisteína elevada → deficiencia de folato (solo la vía de la metionina sintasa está bloqueada). Ambos normales → deficiencia poco probable, reconsiderar el diagnóstico.' },
      { nombre: 'Hipersegmentación neutrofílica', componentes: 'Número de lóbulos nucleares por neutrófilo en el frotis de sangre periférica.', formula: '≥5% de neutrófilos con 5 lóbulos, o cualquier neutrófilo con 6 o más lóbulos.', interpretacion: 'Hallazgo morfológico más específico (aunque no el más sensible) de megaloblastosis; puede preceder a la macrocitosis franca en sangre periférica (ver Imagen 3).' },
      { nombre: 'Niveles séricos de B12 y folato', componentes: 'B12 sérica, folato sérico (y folato eritrocitario si hay duda, un marcador más estable).', formula: 'Umbrales de laboratorio variables por ensayo.', interpretacion: 'Un nivel bajo apoya el diagnóstico, pero un nivel límite/normal NO lo descarta (sensibilidad limitada); confirmar con MMA/homocisteína si hay alta sospecha clínica pese a un nivel sérico normal.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Deficiencia de vitamina B12 no autoinmune',
      color: '#3d5a73',
      definicion: 'Anemia megaloblástica producida por deficiencia de vitamina B12 (cobalamina) de causa no autoinmune: aporte dietético insuficiente, malabsorción estructural (gastrectomía, resección ileal o enfermedad de Crohn ileal), sobrecrecimiento bacteriano del intestino delgado, insuficiencia pancreática exocrina, o interferencia farmacológica con la absorción.',
      fisiopatologia: 'La absorción fisiológica de B12 requiere una cascada de pasos: liberación de la B12 unida a proteínas alimentarias por el ácido gástrico y la pepsina, unión a haptocorrina salival/gástrica, degradación de ese complejo por proteasas pancreáticas en el duodeno, unión al factor intrínseco (producido por las células parietales gástricas), y absorción del complejo B12-factor intrínseco por receptores específicos en el íleon terminal. Cualquier interrupción de esta cascada, salvo la producción de factor intrínseco en sí (que define la anemia perniciosa, ver esa tarjeta), produce deficiencia: la gastrectomía elimina la fuente de ácido/pepsina y factor intrínseco; la resección ileal o la enfermedad de Crohn ileal eliminan el sitio de absorción; el sobrecrecimiento bacteriano consume la B12 luminal antes de que pueda absorberse; la insuficiencia pancreática exocrina impide la liberación de la B12 de la haptocorrina.',
      epidemiologia: 'Relevante en el paciente con antecedente quirúrgico gástrico/ileal, enfermedad de Crohn de larga evolución, o dieta vegana estricta sin suplementación (la B12 se encuentra exclusivamente en productos de origen animal en la dieta natural); el uso crónico de metformina o de inhibidores de bomba de protones es una causa farmacológica cada vez más reconocida, particularmente en el adulto mayor polimedicado.',
      factores_riesgo: ['Dieta vegana estricta sin suplementación', 'Gastrectomía o cirugía bariátrica previa', 'Enfermedad de Crohn ileal o resección ileal previa', 'Uso crónico de metformina o inhibidores de bomba de protones', 'Sobrecrecimiento bacteriano del intestino delgado', 'Insuficiencia pancreática exocrina'],
      clinica: 'Igual que el cuadro general de deficiencia de B12 (fatiga, glositis, manifestaciones neurológicas si es grave y prolongada, ver Complicaciones); interrogar dirigidamente sobre patrón dietético, antecedente quirúrgico gastrointestinal, y fármacos actuales.',
      criterios_dx: 'Anemia macrocítica con B12 sérica baja (o MMA/homocisteína elevados si el nivel sérico es ambiguo, ver Escalas), en un paciente con un factor de riesgo identificado y anticuerpos anti-factor intrínseco/anti-célula parietal negativos (que orientarían hacia anemia perniciosa en su lugar).',
      laboratorio: 'B12 sérica baja; MMA y homocisteína elevados (ambos, a diferencia de la deficiencia aislada de folato); anticuerpos anti-factor intrínseco y anti-célula parietal negativos.',
      imagen: 'Ninguno diagnóstico obligatorio salvo el dirigido a la causa sospechada (por ejemplo, evaluación de la anatomía posquirúrgica si hay sospecha de complicación adicional).',
      complementarios: 'Prueba de aliento con hidrógeno o cultivo de aspirado yeyunal si se sospecha sobrecrecimiento bacteriano del intestino delgado; elastasa fecal si se sospecha insuficiencia pancreática exocrina.',
      dx_diferencial: 'Anemia perniciosa (anticuerpos anti-factor intrínseco/anti-célula parietal positivos, ver esa tarjeta), deficiencia de folato aislada (MMA normal, homocisteína elevada), síndrome mielodisplásico (displasia significativa, alteración citogenética, sin respuesta a la reposición de B12).',
      tx_medico: 'Corrección de la causa de base cuando sea posible (tratamiento del sobrecrecimiento bacteriano, ajuste de fármacos si son la causa identificada).',
      tx_farmacologico: 'B12 intramuscular como primera línea en la deficiencia por malabsorción estructural establecida (gastrectomía, resección ileal), dado que la vía oral es ineficaz cuando la absorción intestinal específica está comprometida; B12 oral en dosis altas (que se absorbe en pequeña proporción por difusión pasiva independiente del factor intrínseco) como alternativa razonable si la causa es dietética pura sin malabsorción verdadera, o si la vía intramuscular no es practicable.',
      tx_intervencionista: 'Ninguno específico más allá del tratamiento de la causa identificada.',
      criterios_uci: 'No aplica de forma directa, salvo manifestación neurológica grave sobreañadida (ver esa complicación).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico.',
      seguimiento_ambulatorio: 'Reevaluación de la biometría hemática y los niveles a las 4-8 semanas (respuesta reticulocitaria esperada en 3-5 días, corrección hematológica completa en 6-8 semanas); B12 de por vida en la malabsorción estructural no corregible.',
      pronostico: 'Favorable con reposición adecuada; la respuesta hematológica es habitualmente completa, aunque las manifestaciones neurológicas ya establecidas pueden ser solo parcialmente reversibles según su duración previa al tratamiento (ver Complicaciones).',
      algoritmo: ['Anemia macrocítica + B12 sérica baja → confirmar deficiencia con MMA/homocisteína si hay duda', 'Anticuerpos anti-factor intrínseco/anti-célula parietal negativos → descarta anemia perniciosa', 'Identificar la causa (dieta, cirugía, fármacos, sobrecrecimiento bacteriano)', 'Malabsorción estructural → B12 intramuscular de por vida', 'Causa dietética/farmacológica corregible → B12 oral en dosis altas o intramuscular hasta corregir la causa']
    },
    {
      nombre: 'Anemia perniciosa',
      color: '#8c3a34',
      definicion: 'Deficiencia de vitamina B12 producida por gastritis atrófica autoinmune del cuerpo/fondo gástrico, con destrucción de las células parietales gástricas (productoras de factor intrínseco y ácido clorhídrico) mediada por autoanticuerpos; la causa autoinmune más frecuente de deficiencia de B12, con implicaciones de vigilancia oncológica propias que la distinguen de las demás causas de esta sección.',
      fisiopatologia: 'Un proceso autoinmune dirigido contra las células parietales gástricas (mediado tanto por autoanticuerpos anti-célula parietal, dirigidos contra la bomba de protones H+/K+-ATPasa, como por autoanticuerpos anti-factor intrínseco, más específicos) produce su destrucción progresiva, con la consiguiente pérdida de la producción de ácido clorhídrico (hipoclorhidria/aclorhidria) y de factor intrínseco. Sin factor intrínseco, la B12 dietética no puede absorberse en el íleon terminal pese a un tracto gastrointestinal estructuralmente indemne. La aclorhidria resultante elimina la inhibición fisiológica de la producción de gastrina por las células G antrales, produciendo hipergastrinemia marcada (ver Diagnóstico), y la gastritis atrófica crónica de larga evolución predispone a metaplasia intestinal y, eventualmente, a neoplasia gástrica (ver Complicaciones).',
      epidemiologia: 'Prevalencia de hasta 2-3% en mayores de 60 años, con predominio en población de ascendencia del norte de Europa y escandinava; asociación reconocida con otras enfermedades autoinmunes (tiroiditis autoinmune, vitíligo, diabetes mellitus tipo 1, enfermedad de Addison), lo que apoya buscar activamente comorbilidad autoinmune en el paciente con anemia perniciosa confirmada.',
      factores_riesgo: ['Edad avanzada', 'Ascendencia del norte de Europa/escandinava', 'Enfermedad autoinmune concomitante (tiroiditis, vitíligo, diabetes tipo 1, enfermedad de Addison)', 'Antecedente familiar de anemia perniciosa u otra enfermedad autoinmune'],
      clinica: 'Igual que el cuadro general de deficiencia de B12 (fatiga, glositis atrófica, manifestaciones neurológicas si es grave y prolongada, ver Complicaciones); buscar activamente signos/síntomas de enfermedad autoinmune concomitante dada la asociación reconocida.',
      criterios_dx: 'Deficiencia de B12 documentada (B12 sérica baja o MMA/homocisteína elevados) más anticuerpos anti-factor intrínseco positivos (altamente específicos aunque de sensibilidad moderada) o anti-célula parietal positivos (más sensibles pero menos específicos); la confirmación histológica por biopsia gástrica documenta la gastritis atrófica del cuerpo/fondo.',
      laboratorio: 'B12 sérica baja, MMA y homocisteína elevados; anticuerpos anti-factor intrínseco y/o anti-célula parietal positivos; gastrina sérica marcadamente elevada; pepsinógeno I bajo con relación pepsinógeno I/II reducida (marcador indirecto de atrofia del cuerpo gástrico).',
      imagen: 'Endoscopia digestiva alta con biopsia gástrica sistematizada (cuerpo, fondo y antro por separado), tanto para confirmar la gastritis atrófica como para descartar neoplasia gástrica concomitante al diagnóstico (ver Complicaciones).',
      complementarios: 'Tamizaje de enfermedad tiroidea autoinmune (TSH, anti-TPO) y de otras endocrinopatías autoinmunes asociadas dada la asociación reconocida.',
      dx_diferencial: 'Deficiencia de B12 no autoinmune (anticuerpos negativos, ver esa tarjeta), gastritis atrófica multifocal asociada a Helicobacter pylori (predomina en antro, no en cuerpo/fondo, sin autoanticuerpos característicos).',
      tx_medico: 'Ninguna medida específica más allá de la reposición de B12 y la vigilancia endoscópica a largo plazo (ver Complicaciones); no existe tratamiento que revierta la gastritis atrófica autoinmune de base.',
      tx_farmacologico: 'B12 intramuscular de por vida como tratamiento de elección (la vía oral en dosis altas es una alternativa razonable en casos seleccionados, aunque la ausencia total de factor intrínseco hace preferible la vía parenteral en la mayoría de los casos).',
      tx_intervencionista: 'Ninguno específico más allá de la vigilancia/tratamiento endoscópico de lesiones gástricas identificadas en la vigilancia (ver Complicaciones).',
      criterios_uci: 'No aplica de forma directa, salvo manifestación neurológica grave sobreañadida.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico.',
      seguimiento_ambulatorio: 'B12 intramuscular de por vida; vigilancia endoscópica periódica dado el riesgo aumentado de adenocarcinoma gástrico y tumor carcinoide gástrico tipo 1 (ver Complicaciones); vigilancia de enfermedad autoinmune concomitante.',
      pronostico: 'Favorable en cuanto al control hematológico con reposición de por vida; el pronóstico a largo plazo depende en parte de la vigilancia oncológica gástrica, dado el riesgo aumentado reconocido.',
      algoritmo: ['Deficiencia de B12 + anticuerpos anti-factor intrínseco o anti-célula parietal positivos → confirma anemia perniciosa', 'Endoscopia digestiva alta con biopsia gástrica sistematizada al diagnóstico', 'B12 intramuscular de por vida', 'Tamizaje de enfermedad autoinmune asociada (tiroides, entre otras)', 'Vigilancia endoscópica periódica de por vida por el riesgo oncológico gástrico']
    },
    {
      nombre: 'Deficiencia de folato',
      color: '#3f6b52',
      definicion: 'Anemia megaloblástica producida por deficiencia de folato (ácido fólico o vitamina B9), por aporte dietético insuficiente, aumento de la demanda, malabsorción, o interferencia farmacológica con su metabolismo; clínicamente indistinguible de la deficiencia de B12 en el patrón hematológico, pero sin las manifestaciones neurológicas exclusivas de esta última.',
      fisiopatologia: 'El folato dietético se absorbe en el yeyuno proximal tras su conversión a monoglutamato; a diferencia de la B12, el organismo tiene reservas hepáticas de folato mucho más limitadas (semanas a pocos meses, frente a años para la B12), por lo que la deficiencia de folato se instala más rápidamente ante un aporte insuficiente o una demanda aumentada. El folato es esencial, junto con la B12, para la regeneración de tetrahidrofolato necesaria para la síntesis de timidina; a diferencia de la B12, el folato NO participa en la vía de la metilmalonil-CoA mutasa, por lo que su deficiencia aislada eleva la homocisteína pero NO el ácido metilmalónico (MMA), la base del diferencial de laboratorio central de este tema (ver Escalas).',
      epidemiologia: 'Menos frecuente que antes de la fortificación alimentaria obligatoria del trigo/harina con ácido fólico en muchos países; hoy se ve predominantemente en el alcoholismo crónico (por aporte dietético insuficiente y por interferencia directa del alcohol con el metabolismo del folato), el embarazo, y el paciente con hemólisis crónica de alto recambio celular.',
      factores_riesgo: ['Alcoholismo crónico', 'Embarazo', 'Hemólisis crónica de cualquier causa (mayor demanda)', 'Enfermedades exfoliativas cutáneas extensas (mayor demanda por el recambio celular acelerado)', 'Malnutrición o dieta con muy bajo consumo de vegetales de hoja verde', 'Uso de fármacos antagonistas del folato (metotrexato, trimetoprim, fenitoína, sulfasalazina)'],
      clinica: 'Igual que el cuadro general de anemia megaloblástica (fatiga, glositis, palidez subictérica), pero SIN manifestaciones neurológicas atribuibles a la deficiencia de folato en sí (su presencia obliga a buscar activamente una deficiencia de B12 concomitante, ver Complicaciones).',
      criterios_dx: 'Anemia macrocítica con folato sérico bajo (o folato eritrocitario bajo si hay duda), homocisteína elevada con MMA normal (distingue de la deficiencia de B12, ver Escalas), y B12 sérica normal.',
      laboratorio: 'Folato sérico bajo (o folato eritrocitario bajo); homocisteína elevada; MMA normal; B12 sérica normal (su alteración obliga a reconsiderar una deficiencia combinada).',
      imagen: 'Ninguno diagnóstico obligatorio salvo el dirigido a la causa sospechada (por ejemplo, estudio de enfermedad celíaca si se sospecha malabsorción como causa).',
      complementarios: 'Serología de enfermedad celíaca si se sospecha malabsorción como causa; revisión de la lista de fármacos activos buscando antagonistas del folato.',
      dx_diferencial: 'Deficiencia de B12 (MMA elevado, posibles manifestaciones neurológicas, ver esas tarjetas), deficiencia combinada de B12 y folato (ambos MMA y homocisteína elevados, folato y B12 séricos ambos bajos).',
      tx_medico: 'Corrección de la causa de base cuando sea posible (abstinencia alcohólica, ajuste de fármacos antagonistas del folato si el beneficio-riesgo lo permite).',
      tx_farmacologico: 'Ácido fólico oral como tratamiento de elección, con buena absorción incluso en la mayoría de los estados de malabsorción leve-moderada (a diferencia de la B12, que requiere con frecuencia la vía parenteral en la malabsorción estructural). NUNCA iniciar ácido fólico empírico sin haber descartado razonablemente una deficiencia de B12 concomitante (ver esa complicación en esta misma sección), dado que puede corregir la anemia mientras permite progresar el daño neurológico de una deficiencia de B12 no reconocida.',
      tx_intervencionista: 'Ninguno específico más allá del tratamiento de la causa identificada.',
      criterios_uci: 'No aplica de forma directa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico.',
      seguimiento_ambulatorio: 'Reevaluación de la biometría hemática a las 4-8 semanas; suplementación continuada mientras persista el factor de riesgo (embarazo, hemólisis crónica) o de forma transitoria (4 meses habitualmente suficientes) si la causa fue un episodio de aporte insuficiente ya corregido.',
      pronostico: 'Favorable con reposición adecuada, con respuesta hematológica habitualmente completa y más rápida que en la deficiencia de B12 dado el menor tiempo requerido para replecionar los depósitos hepáticos, mucho más limitados que los de B12.',
      algoritmo: ['Anemia macrocítica + folato sérico bajo → sospecha inicial de deficiencia de folato', 'Confirmar con homocisteína elevada + MMA normal (ver Escalas) y B12 sérica normal', 'Descartar razonablemente deficiencia de B12 concomitante ANTES de iniciar ácido fólico empírico', 'Corregir la causa de base si es identificable (alcohol, fármacos, malabsorción)', 'Ácido fólico oral hasta corrección hematológica completa']
    },
    {
      nombre: 'Causas no nutricionales de megaloblastosis',
      color: '#5c6b8c',
      definicion: 'Anemia megaloblástica producida por un mecanismo distinto a la deficiencia verdadera de B12 o folato: interferencia farmacológica directa con la síntesis de ADN (fármacos antimetabolitos) o, mucho más raramente, trastornos congénitos del metabolismo de purinas/pirimidinas; comparte el patrón morfológico megaloblástico pero NO responde a la reposición de B12/folato porque los niveles de ambos son normales.',
      fisiopatologia: 'Los fármacos antimetabolitos (hidroxiurea, azatioprina, 6-mercaptopurina, zidovudina, y los agentes de quimioterapia dirigidos a la síntesis de ADN como el metotrexato o la citarabina) interfieren directamente con la síntesis o el metabolismo de las bases nitrogenadas del ADN, produciendo el mismo asincronismo madurativo núcleo-citoplasma que la deficiencia de B12/folato, pero por un mecanismo farmacológico directo e independiente de los niveles de estas vitaminas. Los trastornos congénitos raros (aciduria orótica hereditaria, por deficiencia de la enzima UMP sintasa en la vía de síntesis de pirimidinas) producen el mismo patrón megaloblástico por un defecto enzimático hereditario en la síntesis de novo de nucleótidos.',
      epidemiologia: 'Relevante en el paciente oncológico o con enfermedad autoinmune/inflamatoria en tratamiento con alguno de los fármacos mencionados; los trastornos congénitos son extremadamente raros y se presentan característicamente en la infancia.',
      factores_riesgo: ['Tratamiento con hidroxiurea (enfermedades mieloproliferativas, drepanocitosis)', 'Tratamiento con azatioprina/6-mercaptopurina (enfermedad inflamatoria intestinal, trasplante, enfermedad autoinmune)', 'Tratamiento antirretroviral con zidovudina', 'Quimioterapia con metotrexato o citarabina', 'Antecedente familiar de un trastorno congénito del metabolismo de purinas/pirimidinas (muy raro)'],
      clinica: 'Igual patrón hematológico que la deficiencia verdadera de B12/folato (macrocitosis, citopenias); el contexto farmacológico (fármaco antimetabolito activo) es la clave diagnóstica, más que un hallazgo clínico distintivo propio.',
      criterios_dx: 'Anemia macrocítica con hipersegmentación neutrofílica en el contexto temporal de un fármaco antimetabolito activo, con niveles séricos de B12 y folato NORMALES (a diferencia de las 3 tarjetas anteriores de esta sección) y MMA/homocisteína normales.',
      laboratorio: 'B12 y folato séricos normales; MMA y homocisteína normales; biometría hemática con el patrón megaloblástico habitual.',
      imagen: 'No aplica de forma directa.',
      complementarios: 'Revisión estructurada de la lista completa de fármacos activos y su relación temporal con el inicio de la citopenia.',
      dx_diferencial: 'Deficiencia verdadera de B12 o folato (niveles bajos, MMA/homocisteína alterados según corresponda), síndrome mielodisplásico (displasia significativa, alteración citogenética, sin relación temporal con un fármaco antimetabolito).',
      tx_medico: 'Ajustar o suspender el fármaco causal si el beneficio-riesgo lo permite, en coordinación con el especialista que lo indicó (oncólogo, reumatólogo, gastroenterólogo según el contexto).',
      tx_farmacologico: 'La reposición de B12/folato NO corrige el cuadro si los niveles son normales y el mecanismo es farmacológico directo; el ácido folínico (leucovorina, que no requiere la enzima bloqueada por el metotrexato) es la excepción específica y bien establecida para el "rescate" de la toxicidad por metotrexato en dosis altas.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica de forma directa, salvo toxicidad grave por metotrexato en dosis altas con falla de rescate.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la biometría hemática según el protocolo del fármaco causal.',
      seguimiento_ambulatorio: 'Reevaluación de la biometría hemática tras el ajuste/suspensión del fármaco causal; asesoría genética familiar en el trastorno congénito confirmado.',
      pronostico: 'Favorable con el ajuste o la suspensión del fármaco causal cuando es clínicamente posible; en el trastorno congénito, el manejo es de por vida con manejo dirigido específico.',
      algoritmo: ['Anemia macrocítica con patrón megaloblástico + B12/folato/MMA/homocisteína normales → sospechar causa no nutricional', 'Revisar la lista completa de fármacos activos y su relación temporal', 'Fármaco antimetabolito identificado → ajustar o suspender en coordinación con el especialista indicador', 'Toxicidad grave por metotrexato en dosis altas → ácido folínico (leucovorina) de rescate', 'Sin causa farmacológica identificable en un paciente joven con antecedente familiar → considerar trastorno congénito del metabolismo de purinas/pirimidinas']
    },
    {
      nombre: 'Degeneración combinada subaguda',
      color: '#6b4a2e',
      definicion: 'Complicación neurológica exclusiva de la deficiencia de vitamina B12 (nunca de la deficiencia aislada de folato), producida por desmielinización de los cordones posteriores y las vías corticoespinales laterales de la médula espinal, con afectación variable de los nervios periféricos y, en casos avanzados, del encéfalo.',
      fisiopatologia: 'La B12 es cofactor de la metilmalonil-CoA mutasa, una vía metabólica independiente del folato cuyo bloqueo produce acumulación de metilmalonil-CoA y propionil-CoA; se postula que esto altera la síntesis de ácidos grasos de cadena impar incorporados anómalamente a la mielina, produciendo una mielina estructuralmente defectuosa e inestable. El resultado es una desmielinización progresiva que afecta preferentemente los cordones posteriores (sensibilidad vibratoria y propioceptiva) y las vías corticoespinales laterales (motoras), de ahí el nombre "combinada"; la afectación de nervios periféricos (neuropatía sensitiva simétrica) y, en casos avanzados, del encéfalo (deterioro cognitivo, cambios neuropsiquiátricos) completa el espectro clínico.',
      epidemiologia: 'Puede ocurrir con cualquier causa de deficiencia de B12 de esta sección, con mayor riesgo cuanto más profunda y prolongada sea la deficiencia antes del tratamiento; puede preceder, acompañar, o presentarse sin anemia manifiesta, un punto clave que no debe llevar a descartar la deficiencia de B12 solo porque la biometría hemática es normal.',
      factores_riesgo: ['Deficiencia de B12 profunda y prolongada no reconocida ni tratada', 'Reposición inadecuada o retrasada de la deficiencia de B12', 'Administración de ácido fólico sin haber descartado deficiencia de B12 concomitante (ver esa complicación), que enmascara la anemia mientras el daño neurológico progresa'],
      clinica: 'Parestesias simétricas distales (manos y pies, patrón "en guante y calcetín"), pérdida de la sensibilidad vibratoria y propioceptiva (con marcha atáxica sensitiva, Romberg positivo), debilidad e hiperreflexia con Babinski positivo (por afectación corticoespinal, que puede coexistir paradójicamente con hiporreflexia por la neuropatía periférica concomitante), y en casos avanzados deterioro cognitivo y cambios neuropsiquiátricos (irritabilidad, depresión, hasta psicosis franca en casos extremos, la "locura megaloblástica" descrita clásicamente).',
      criterios_dx: 'Clínico, con hallazgos neurológicos compatibles en el contexto de deficiencia de B12 documentada (sérica baja o MMA/homocisteína elevados), tras excluir otras causas de mielopatía/neuropatía; la RM de columna puede mostrar hiperintensidad en T2 de los cordones posteriores en casos establecidos, aunque no es necesaria para el diagnóstico si el cuadro clínico-analítico es característico.',
      laboratorio: 'B12 sérica baja, MMA y homocisteína elevados (con frecuencia MUY elevados en la forma con manifestación neurológica predominante); la anemia puede ser leve o incluso ausente al momento del diagnóstico neurológico.',
      imagen: 'RM de columna cervical/torácica (hiperintensidad en T2 de los cordones posteriores, el "signo de la V invertida" en el corte axial) en casos dudosos o para documentar la extensión; no obligatoria si el cuadro clínico-analítico ya es característico.',
      complementarios: 'Evaluación neurológica formal con estudio de conducción nerviosa si hay duda sobre el componente de neuropatía periférica concomitante.',
      dx_diferencial: 'Mielopatía compresiva estructural (RM sin compresión medular en la degeneración combinada subaguda), esclerosis múltiple, neurosífilis (tabes dorsal, serología específica), intoxicación por óxido nitroso (inactiva la B12 funcionalmente, produciendo un cuadro clínicamente idéntico pese a niveles séricos de B12 normales).',
      tx_medico: 'Reposición urgente de B12 en cuanto se documenta o se sospecha razonablemente la deficiencia, sin esperar la confirmación completa de todos los estudios si el cuadro neurológico es progresivo, dado que el retraso empeora la probabilidad de recuperación.',
      tx_farmacologico: 'B12 intramuscular en dosis de carga (esquema más intensivo que el de la deficiencia sin manifestación neurológica, con dosis diarias o varias veces por semana en la fase inicial) seguida de mantenimiento de por vida.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica de forma directa, salvo compromiso respiratorio por afectación neurológica extrema (infrecuente).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Evaluación neurológica seriada durante el inicio del tratamiento para documentar la respuesta o la progresión.',
      seguimiento_ambulatorio: 'Seguimiento neurológico a mediano-largo plazo; la recuperación puede ser incompleta, particularmente si el diagnóstico y tratamiento se retrasaron varios meses.',
      pronostico: 'La recuperación es más completa cuanto más precoz es el tratamiento (síntomas de menos de 3-6 meses de evolución tienen mejor pronóstico de reversibilidad); los déficits estructurales establecidos por desmielinización prolongada pueden ser permanentes pese a la corrección hematológica completa.',
      algoritmo: ['Manifestaciones neurológicas sugestivas (parestesias, ataxia sensitiva, deterioro cognitivo) → medir B12/MMA/homocisteína incluso sin anemia evidente', 'Deficiencia de B12 confirmada o sospecha razonable → iniciar reposición urgente sin demora', 'Esquema de carga intramuscular en la fase inicial, seguido de mantenimiento de por vida', 'Evaluación neurológica seriada para documentar respuesta', 'Nunca administrar ácido fólico solo, sin haber tratado también la B12, ante esta sospecha']
    },
    {
      nombre: 'Enmascaramiento hematológico por ácido fólico',
      color: '#966b35',
      definicion: 'Complicación yatrógena en la que la administración de ácido fólico a un paciente con deficiencia de B12 no reconocida corrige parcial o completamente la anemia y la macrocitosis, mientras la deficiencia de B12 subyacente persiste sin tratar y su daño neurológico (degeneración combinada subaguda, ver esa tarjeta) continúa progresando, ahora sin la anemia como señal de alarma.',
      fisiopatologia: 'El folato y la B12 comparten la vía metabólica de síntesis de timidina (a través de la regeneración de tetrahidrofolato), por lo que aportar folato suficiente puede normalizar esa vía específica pese a la deficiencia de B12 persistente. Sin embargo, la función de la B12 en la vía de la metilmalonil-CoA mutasa, esencial para la síntesis normal de mielina, es completamente independiente del folato y no se corrige en absoluto con su reposición; el resultado es una corrección hematológica engañosa que retira la principal pista de laboratorio (la anemia macrocítica) mientras el daño neurológico, silencioso en sus etapas iniciales, continúa avanzando sin ser detectado.',
      epidemiologia: 'Riesgo reconocido siempre que se indica ácido fólico empírico para una anemia macrocítica sin haber descartado razonablemente una deficiencia de B12 concomitante, un escenario más frecuente de lo deseable dado que ambas deficiencias comparten manifestaciones hematológicas indistinguibles sin el estudio de laboratorio dirigido.',
      factores_riesgo: ['Inicio de ácido fólico empírico sin medir B12 sérica ni MMA/homocisteína previamente', 'Deficiencia combinada de B12 y folato no reconocida como tal', 'Fortificación alimentaria o suplementación vitamínica general que incluye ácido fólico sin evaluación dirigida de B12'],
      clinica: 'Normalización o mejoría de la anemia/macrocitosis pese a persistir o incluso progresar las manifestaciones neurológicas de la deficiencia de B12 no tratada (parestesias, ataxia, deterioro cognitivo, ver esa tarjeta), un patrón que debe hacer sospechar activamente este escenario.',
      criterios_dx: 'Documentación retrospectiva o prospectiva de deficiencia de B12 (sérica baja o MMA/homocisteína elevados) en un paciente que recibió o está recibiendo ácido fólico para una anemia macrocítica sin ese estudio previo.',
      laboratorio: 'B12 sérica baja pese a folato sérico normal/alto (por la suplementación ya administrada); MMA elevado (persiste elevado porque el folato no corrige esa vía, un dato clave para reconocer el enmascaramiento incluso con la biometría hemática ya normalizada).',
      imagen: 'RM de columna si ya hay manifestaciones neurológicas establecidas (ver la tarjeta de degeneración combinada subaguda).',
      complementarios: 'Revisión sistemática de todo paciente que reciba o vaya a recibir ácido fólico por anemia macrocítica, confirmando que se haya evaluado la B12 de forma independiente antes o al mismo tiempo.',
      dx_diferencial: 'Deficiencia de folato aislada verdadera, sin deficiencia de B12 concomitante (MMA normal, sin manifestaciones neurológicas, la respuesta al fólico es la esperada y completa sin ningún dato de alarma).',
      tx_medico: 'Medir B12 (o MMA/homocisteína) en todo paciente con anemia macrocítica ANTES o al momento de iniciar ácido fólico, nunca después de una respuesta hematológica aparente, como la medida preventiva central de esta complicación.',
      tx_farmacologico: 'Reposición inmediata de B12 (con el esquema de carga si ya hay manifestaciones neurológicas, ver esa tarjeta) en cuanto se reconoce el enmascaramiento, sin suspender el ácido fólico si también hay deficiencia combinada verdadera.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica de forma directa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma directa.',
      seguimiento_ambulatorio: 'Seguimiento neurológico si ya hubo manifestaciones antes de reconocer el enmascaramiento (ver esa tarjeta).',
      pronostico: 'Enteramente prevenible con el estudio de laboratorio dirigido antes de iniciar ácido fólico; una vez reconocido y corregido con B12, el pronóstico depende del grado de daño neurológico ya acumulado durante el periodo de enmascaramiento.',
      algoritmo: ['Anemia macrocítica → medir B12 (o MMA/homocisteína) SIEMPRE antes o junto con el ácido fólico, nunca después', 'Respuesta hematológica al fólico con manifestaciones neurológicas nuevas o progresivas → sospechar enmascaramiento de deficiencia de B12', 'Confirmar con MMA persistentemente elevado pese a folato normalizado', 'Reposición inmediata de B12', 'Nunca indicar ácido fólico empírico como única intervención ante una anemia macrocítica no estudiada']
    },
    {
      nombre: 'Pseudo-microangiopatía trombótica',
      color: '#5c3d5c',
      definicion: 'Complicación de laboratorio de la anemia megaloblástica grave, en la que la hemólisis intramedular masiva produce un patrón analítico que puede confundirse con una microangiopatía trombótica verdadera (LDH muy elevada, trombocitopenia, esquistocitos ocasionales), con el riesgo de someter al paciente a plasmaféresis innecesaria si no se reconoce la diferencia.',
      fisiopatologia: 'La apoptosis masiva de los precursores eritroides megaloblásticos dentro de la médula ósea (eritropoyesis ineficaz) libera grandes cantidades de LDH y hemoglobina intramedular, produciendo una elevación de LDH y bilirrubina indirecta que puede igualar o superar la observada en una hemólisis intravascular verdadera; la trombocitopenia concomitante (por el mismo mecanismo de apoptosis aplicado a los precursores megacariocíticos) completa un cuadro que recuerda a la PTT (LDH muy elevada + trombocitopenia), aunque el mecanismo (destrucción intramedular de precursores, no fragmentación mecánica de eritrocitos maduros en la microcirculación) es completamente distinto.',
      epidemiologia: 'Reconocida particularmente en la deficiencia de B12 grave y de instalación relativamente rápida; un diagnóstico erróneo de PTT en este contexto puede llevar a plasmaféresis innecesaria, con el retraso correspondiente en el tratamiento correcto y los riesgos propios de un procedimiento invasivo no indicado.',
      factores_riesgo: ['Deficiencia grave de B12 o folato de instalación relativamente rápida', 'LDH marcadamente elevada que hace pensar inicialmente en hemólisis intravascular/microangiopatía', 'No revisar el frotis de sangre periférica en busca de macroovalocitos y neutrófilos hipersegmentados antes de asumir una microangiopatía trombótica'],
      clinica: 'El cuadro es predominantemente el de la anemia megaloblástica grave de base (fatiga marcada, palidez subictérica); a diferencia de la PTT verdadera, no hay los síntomas neurológicos fluctuantes característicos de esa entidad (aunque la deficiencia de B12 puede producir sus propias manifestaciones neurológicas, de mecanismo e instalación distintos, ver esa tarjeta).',
      criterios_dx: 'LDH muy elevada + trombocitopenia + macrocitosis marcada, con AUSENCIA de esquistocitos significativos en el frotis (o esquistocitos ocasionales, no la abundancia característica de una microangiopatía trombótica verdadera) y con macroovalocitos y neutrófilos hipersegmentados presentes (el hallazgo que orienta correctamente hacia el mecanismo megaloblástico).',
      laboratorio: 'LDH muy elevada, haptoglobina baja (por la hemólisis intramedular), trombocitopenia; frotis de sangre periférica clave para la distinción (macroovalocitos e hipersegmentación neutrofílica presentes, esquistocitos ausentes o mínimos); B12/folato bajos, MMA/homocisteína alterados según corresponda.',
      imagen: 'No aplica de forma directa.',
      complementarios: 'Actividad de ADAMTS13 si persiste duda diagnóstica genuina pese a la revisión del frotis (resultado esperado normal o no gravemente deficiente en la pseudo-microangiopatía, a diferencia de la PTT verdadera).',
      dx_diferencial: 'PTT verdadera (esquistocitos abundantes, ADAMTS13 &lt;10%, ver el tema de Anemias Hemolíticas Adquiridas), síndrome hemolítico urémico, coagulación intravascular diseminada (tiempos de coagulación alterados, fibrinógeno bajo).',
      tx_medico: 'Revisión cuidadosa del frotis de sangre periférica por personal con experiencia ANTES de escalar a un manejo de microangiopatía trombótica verdadera (plasmaféresis urgente), dado que el reconocimiento oportuno evita un procedimiento invasivo innecesario.',
      tx_farmacologico: 'Reposición de B12/folato según la causa identificada, el tratamiento correcto y suficiente en la pseudo-microangiopatía; NO requiere plasmaféresis ni ningún tratamiento dirigido a una microangiopatía trombótica verdadera.',
      tx_intervencionista: 'Ninguno; específicamente NO plasmaféresis, dado que esta entidad no la requiere y el procedimiento conlleva riesgos propios injustificados si se indica por error.',
      criterios_uci: 'Igual que la anemia megaloblástica grave de base, según la gravedad de la anemia y la citopenia, no por esta complicación en sí misma.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta hematológica a la reposición de B12/folato (mejoría de la trombocitopenia y la LDH en días, más rápida que la corrección completa de la anemia).',
      seguimiento_ambulatorio: 'Igual que el seguimiento de la causa de deficiencia identificada (ver esa tarjeta).',
      pronostico: 'Excelente una vez reconocido correctamente el mecanismo, con resolución completa de la trombocitopenia y la elevación de LDH tras la reposición vitamínica adecuada, sin necesidad de ninguna intervención adicional.',
      algoritmo: ['LDH muy elevada + trombocitopenia en un paciente con anemia macrocítica → revisar el frotis de sangre periférica antes de asumir microangiopatía trombótica', 'Macroovalocitos + neutrófilos hipersegmentados + esquistocitos ausentes/mínimos → sugiere pseudo-microangiopatía por megaloblastosis', 'ADAMTS13 normal si persiste duda genuina', 'Reposición de B12/folato como tratamiento correcto y suficiente', 'NUNCA indicar plasmaféresis basándose solo en LDH y trombocitopenia sin revisar el frotis']
    },
    {
      nombre: 'Neoplasias gástricas asociadas a anemia perniciosa',
      color: '#7a1f3d',
      definicion: 'Complicación oncológica a largo plazo específica de la anemia perniciosa (ver esa tarjeta), que incluye un riesgo aumentado de adenocarcinoma gástrico y de tumor carcinoide gástrico tipo 1, ambos consecuencia de la gastritis atrófica autoinmune crónica de base.',
      fisiopatologia: 'La gastritis atrófica autoinmune crónica del cuerpo/fondo gástrico produce, con el tiempo, metaplasia intestinal de la mucosa gástrica, un cambio histológico reconocido como lesión precursora de adenocarcinoma gástrico de tipo intestinal. De forma independiente, la aclorhidria crónica elimina la inhibición fisiológica de la producción de gastrina, produciendo hipergastrinemia sostenida que estimula la hiperplasia y, en una proporción de los casos, la transformación neoplásica de las células enterocromafín-like gástricas, dando origen a los tumores carcinoides gástricos tipo 1 (habitualmente múltiples, pequeños, y de comportamiento indolente, a diferencia de los carcinoides gástricos tipo 3 esporádicos, no relacionados con hipergastrinemia y de comportamiento más agresivo).',
      epidemiologia: 'El riesgo de adenocarcinoma gástrico está aumentado de forma reconocida (aunque de magnitud variable entre estudios) en el paciente con anemia perniciosa establecida; los tumores carcinoides gástricos tipo 1 son, en conjunto, la causa más frecuente de tumor carcinoide gástrico y ocurren predominantemente en el contexto de gastritis atrófica autoinmune con hipergastrinemia crónica.',
      factores_riesgo: ['Anemia perniciosa de larga evolución', 'Metaplasia intestinal documentada en la biopsia gástrica', 'Hipergastrinemia marcada y sostenida', 'Antecedente familiar de cáncer gástrico'],
      clinica: 'Con frecuencia asintomática hasta fases avanzadas (de ahí el valor de la vigilancia endoscópica programada, no solo sintomática); síntomas de alarma si aparecen (pérdida de peso, saciedad precoz, dolor abdominal persistente, sangrado digestivo) obligan a evaluación endoscópica inmediata fuera del programa de vigilancia habitual.',
      criterios_dx: 'Confirmación histológica por biopsia endoscópica de cualquier lesión sospechosa identificada en la endoscopia de vigilancia o diagnóstica.',
      laboratorio: 'Gastrina sérica marcadamente elevada (más aún si hay un tumor carcinoide gástrico tipo 1 asociado, que puede exagerar aún más la hipergastrinemia de base).',
      imagen: 'Endoscopia digestiva alta con biopsias sistematizadas y dirigidas a cualquier lesión visible, en el esquema de vigilancia periódica establecido para el paciente con anemia perniciosa confirmada.',
      complementarios: 'Ecoendoscopia si se identifica un tumor carcinoide gástrico, para estadificar la profundidad de invasión y guiar la decisión entre manejo endoscópico y quirúrgico.',
      dx_diferencial: 'Gastritis atrófica multifocal asociada a Helicobacter pylori con su propio riesgo neoplásico (predomina en antro, mecanismo distinto), tumor carcinoide gástrico tipo 3 esporádico (sin hipergastrinemia, comportamiento más agresivo, no relacionado con anemia perniciosa).',
      tx_medico: 'Vigilancia endoscópica periódica programada (el intervalo específico varía según la guía y los hallazgos basales) como la medida central de detección temprana.',
      tx_farmacologico: 'Ninguno específico dirigido a prevenir la transformación neoplásica en sí; el tratamiento es el propio de la neoplasia confirmada según su tipo y estadio.',
      tx_intervencionista: 'Resección endoscópica de los tumores carcinoides gástricos tipo 1 pequeños y de bajo riesgo (la mayoría de los casos); resección quirúrgica reservada para lesiones más grandes, múltiples y recurrentes pese a resección endoscópica repetida, o para el adenocarcinoma gástrico confirmado según su estadio.',
      criterios_uci: 'No aplica de forma directa, salvo complicación aguda de la neoplasia (sangrado mayor, obstrucción).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Según el manejo específico de la neoplasia confirmada.',
      seguimiento_ambulatorio: 'Vigilancia endoscópica de por vida en el paciente con anemia perniciosa, con intervalo ajustado si ya hubo un hallazgo neoplásico previo (vigilancia más estrecha).',
      pronostico: 'El tumor carcinoide gástrico tipo 1 tiene, en general, un comportamiento indolente con excelente pronóstico tras resección endoscópica; el adenocarcinoma gástrico sigue el pronóstico habitual según estadio al diagnóstico, lo que respalda la detección temprana mediante vigilancia programada.',
      algoritmo: ['Anemia perniciosa confirmada → endoscopia digestiva alta con biopsias sistematizadas al diagnóstico', 'Metaplasia intestinal o hipergastrinemia marcada → vigilancia endoscópica periódica programada', 'Lesión sospechosa identificada → biopsia dirigida inmediata', 'Tumor carcinoide gástrico tipo 1 pequeño → resección endoscópica', 'Síntomas de alarma en cualquier momento → evaluación endoscópica inmediata fuera del programa habitual']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La confirmación del diferencial B12 vs. folato (MMA/homocisteína) y la búsqueda activa de manifestaciones neurológicas antes de iniciar cualquier tratamiento son comunes a las 4 formas de esta sección, con matices específicos de cada una detallados en su propia tarjeta.',
    parametros: [
      'Biometría hemática con índices eritrocitarios y frotis de sangre periférica al ingreso en la anemia megaloblástica sintomática.',
      'B12 y folato séricos, con MMA/homocisteína si el resultado es ambiguo, ANTES de iniciar cualquier suplementación empírica.',
      'Evaluación neurológica dirigida en todo paciente con deficiencia de B12, incluso sin anemia manifiesta.',
      'Revisión del frotis de sangre periférica antes de atribuir una LDH muy elevada con trombocitopenia a una microangiopatía trombótica verdadera.'
    ],
    criterios_uci_general: 'Compromiso respiratorio por afectación neurológica extrema (infrecuente), toxicidad grave por metotrexato en dosis altas con falla de rescate.',
    criterios_tips_general: 'No aplica a ninguna de las 4 formas de esta sección.',
    criterios_trasplante_general: 'No aplica a ninguna de las 4 formas de esta sección.',
    prevencion: 'Medir B12 (o MMA/homocisteína) SIEMPRE antes o junto con el ácido fólico ante cualquier anemia macrocítica no estudiada, revisar activamente el frotis de sangre periférica antes de asumir una microangiopatía trombótica verdadera, y establecer vigilancia endoscópica programada de por vida en todo paciente con anemia perniciosa confirmada.'
  }
};

export const compCites = {
  'Deficiencia de vitamina B12 no autoinmune': { fisiopatologia: [1, 4] },
  'Anemia perniciosa': { epidemiologia: [5, 6], fisiopatologia: [5] },
  'Deficiencia de folato': { fisiopatologia: [8] },
  'Causas no nutricionales de megaloblastosis': { tx_farmacologico: [8] },
  'Degeneración combinada subaguda': { fisiopatologia: [12, 13] },
  'Enmascaramiento hematológico por ácido fólico': { fisiopatologia: [14] },
  'Neoplasias gástricas asociadas a anemia perniciosa': { epidemiologia: [7] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Diferencial B12 vs. folato por MMA/homocisteína': [9, 10],
  'Hipersegmentación neutrofílica': [8],
  'Niveles séricos de B12 y folato': [9]
};
export const escalaCalc = { 'Diferencial B12 vs. folato por MMA/homocisteína': 'mmahcy' };
export const compGroups = [
  { title: 'Anemia megaloblástica por etiología (enfermedades)', items: ['Deficiencia de vitamina B12 no autoinmune', 'Anemia perniciosa', 'Deficiencia de folato', 'Causas no nutricionales de megaloblastosis'] },
  { title: 'Complicaciones transversales (cualquier forma)', items: ['Degeneración combinada subaguda', 'Enmascaramiento hematológico por ácido fólico', 'Pseudo-microangiopatía trombótica', 'Neoplasias gástricas asociadas a anemia perniciosa'] }
];
export const complicacionesIntro = 'El panorama general (epidemiología, etiología, factores de riesgo, fisiopatología) ya se cubrió en Definición. Estas tarjetas son el recurso de consulta con el detalle operativo de cada entidad: diagnóstico diferencial específico, dosis, criterios de UCI/trasplante y el algoritmo paso a paso. El grupo "(enfermedades)" son las 4 formas de anemia megaloblástica según su etiología; el grupo "Complicaciones transversales" son eventos que pueden surgir sobre cualquiera de ellas, no diagnósticos independientes.';
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
  root: { title: 'ANEMIA MEGALOBLÁSTICA', color: '#5c3d8c', target: 'definicion' },
  branches: [
    { title: 'Deficiencia de B12', sub: 'MMA + homocisteína elevados', color: '#3d5a73', target: 'diagnostico', leaves: [
      { title: 'No autoinmune', sub: 'Dieta, cirugía, fármacos', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Anemia perniciosa', sub: 'Anti-FI/anti-célula parietal, riesgo gástrico', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'Deficiencia de folato', sub: 'Solo homocisteína elevada', color: '#3f6b52', target: 'diagnostico', leaves: [
      { title: 'Folato', sub: 'Alcohol, embarazo, malabsorción', color: '#3f6b52', target: 'complicaciones' },
      { title: 'No nutricional', sub: 'Fármacos antimetabolitos, MMA/homocisteína normales', color: '#5c6b8c', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [8], no_invasivos: [9] };
export const clasificacionCite = [9];
export const seguimientoCite = [9, 11];
