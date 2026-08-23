// topics/porfirias/content.js: Porfirias (Porfiria Aguda Intermitente, Otras porfirias hepáticas
// agudas, Porfiria Cutánea Tarda, Protoporfiria Eritropoyética). Estructura idéntica al contrato
// del motor (misma forma que los temas recientes de Hematología). Sigue la convención de figuras
// en línea (figBlock(), numerada "Tabla N"/"Imagen N" con conteo continuo por tipo).

export const meta = {
  id: 'porfirias',
  titulo: 'Porfirias',
  subtitulo: 'Módulo 18 · Medicina Interna',
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

const algoritmoAlaPbgHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:520px;margin:0 auto;">
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--ink);text-align:center;">Cuadro neurovisceral compatible con crisis porfírica</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--ink);text-align:center;">ALA y PBG urinarios (idealmente durante el episodio sintomático)</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;width:100%;">
    <div style="flex:1;min-width:140px;background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:var(--ink);text-align:center;"><strong>PBG elevado</strong> (con o sin ALA elevado)<br>→ Sugestivo de crisis porfírica aguda</div>
    <div style="flex:1;min-width:140px;background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:var(--ink);text-align:center;"><strong>ALA elevado, PBG normal</strong><br>→ Patrón atípico: deficiencia de ALA-deshidratasa o plomo</div>
    <div style="flex:1;min-width:140px;background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Ambos normales</strong><br>→ Poco sugestivo de crisis activa en este momento</div>
  </div>
</div>`;

const rutaHemoHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:5px;max-width:500px;margin:0 auto;">
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:6px 14px;font-size:10.5px;font-weight:600;color:var(--ink);text-align:center;">Glicina + succinil-CoA</div>
  <div style="color:var(--ink-dim);font-size:14px;">↓ <span style="font-size:9px;">ALA-sintasa</span></div>
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:6px 14px;font-size:10.5px;font-weight:600;color:var(--ink);text-align:center;">Ácido delta-aminolevulínico (ALA)</div>
  <div style="color:var(--ink-dim);font-size:14px;">↓ <span style="font-size:9px;">ALA-deshidratasa</span></div>
  <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:8px;padding:6px 14px;font-size:10.5px;font-weight:600;color:var(--ink);text-align:center;">Porfobilinógeno (PBG)</div>
  <div style="color:var(--ink-dim);font-size:14px;">↓ <span style="font-size:9px;">PBG-desaminasa (hidroximetilbilano sintasa)</span></div>
  <div style="background:#6b4a2e33;border:1px solid #6b4a2e;border-radius:8px;padding:6px 14px;font-size:10.5px;font-weight:600;color:var(--ink);text-align:center;">Hidroximetilbilano → uroporfirinógeno III</div>
  <div style="color:var(--ink-dim);font-size:14px;">↓ <span style="font-size:9px;">varias enzimas intermedias</span></div>
  <div style="background:#8c6b2d33;border:1px solid #8c6b2d;border-radius:8px;padding:6px 14px;font-size:10.5px;font-weight:600;color:var(--ink);text-align:center;">Coproporfirinógeno III → protoporfirinógeno IX → protoporfirina IX</div>
  <div style="color:var(--ink-dim);font-size:14px;">↓ <span style="font-size:9px;">ferroquelatasa (+ hierro)</span></div>
  <div style="background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:6px 14px;font-size:10.5px;font-weight:700;color:var(--ink);text-align:center;">HEMO</div>
</div>
<div class="figure-grade-box">Cada porfiria corresponde a la deficiencia parcial de UNA enzima específica de esta vía: el defecto acumula el sustrato inmediatamente anterior a ese paso. Las porfirias hepáticas agudas (deficiencias tempranas en la vía, en el hígado) acumulan ALA y PBG (neurotóxicos); las porfirias cutáneas (deficiencias más tardías, en médula ósea o hígado) acumulan porfirinas fotosensibilizantes.</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Las porfirias son un grupo de enfermedades metabólicas hereditarias (con una excepción adquirida frecuente, la porfiria cutánea tarda esporádica), producidas cada una por la deficiencia parcial de una enzima distinta de la vía de síntesis del hemo. El bloqueo enzimático acumula el sustrato inmediatamente anterior a ese paso, y las manifestaciones clínicas dependen directamente de QUÉ molécula se acumula: la acumulación de ácido delta-aminolevulínico (ALA) y porfobilinógeno (PBG), ambos neurotóxicos, produce las crisis neuroviscerales de las porfirias hepáticas agudas; la acumulación de porfirinas fotosensibilizantes produce las manifestaciones cutáneas de las porfirias cutáneas.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La porfiria cutánea tarda es, con diferencia, la porfiria más frecuente en general; entre las porfirias agudas, la porfiria aguda intermitente es la más frecuente. La penetrancia clínica de las mutaciones causales es baja en la mayoría de las porfirias hereditarias: la mayoría de los portadores de la mutación nunca desarrolla síntomas, y las crisis agudas ocurren característicamente en mujeres jóvenes en edad reproductiva (por la influencia hormonal, ver Fisiopatología general).</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Porfiria Aguda Intermitente</strong>: deficiencia de PBG-desaminasa (hidroximetilbilano sintasa), la porfiria hepática aguda más frecuente, herencia autosómica dominante con penetrancia baja.</li>
    <li><strong>Otras porfirias hepáticas agudas</strong>: coproporfiria hereditaria (deficiencia de coproporfirinógeno oxidasa), porfiria variegata (deficiencia de protoporfirinógeno oxidasa), porfiria por deficiencia de ALA-deshidratasa (muy rara, autosómica recesiva).</li>
    <li><strong>Porfiria Cutánea Tarda</strong>: deficiencia de uroporfirinógeno descarboxilasa; forma esporádica adquirida (la más frecuente, asociada a hierro hepático elevado, alcohol, hepatitis C, VIH, estrógenos) y forma familiar hereditaria.</li>
    <li><strong>Protoporfiria Eritropoyética</strong>: deficiencia de ferroquelatasa (forma clásica) o ganancia de función de ALA-sintasa 2 eritroide (protoporfiria ligada a X), ambas con acumulación de protoporfirina IX de origen predominantemente eritrocitario.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Antecedente familiar de porfiria o de síntomas neuroviscerales/cutáneos sin diagnóstico claro</li>
    <li>Sexo femenino en edad reproductiva (porfirias hepáticas agudas)</li>
    <li>Uso de fármacos porfirinogénicos (ver Complicaciones)</li>
    <li>Ayuno prolongado o dietas muy restrictivas en carbohidratos</li>
    <li>Consumo de alcohol, tabaquismo</li>
    <li>Exceso de hierro hepático, hepatitis C, VIH, uso de estrógenos (porfiria cutánea tarda)</li>
    <li>Infección intercurrente, estrés fisiológico o emocional agudo</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> La vía de síntesis del hemo tiene 8 pasos enzimáticos secuenciales, desde glicina y succinil-CoA hasta el hemo final; la enzima reguladora del primer paso, ALA-sintasa (isoforma hepática, ALAS1), se induce marcadamente ante una demanda hepática aumentada de hemo (por ejemplo, para el metabolismo de fármacos vía citocromo P450) y se suprime por retroalimentación negativa cuando el hemo libre es abundante.${figBlock('Imagen 1', 'La vía de síntesis del hemo', rutaHemoHtml)} En una porfiria hepática aguda, la deficiencia parcial de una enzima intermedia reduce la producción final de hemo; el hígado responde induciendo aún más ALA-sintasa para compensar, lo que paradójicamente acumula todavía más ALA y PBG (los sustratos previos al bloqueo enzimático), precipitando o agravando la crisis. Esto explica por qué los fármacos inductores del citocromo P450, el ayuno, y las hormonas sexuales (que también inducen ALA-sintasa) son gatillos reconocidos de las crisis. Analogía: la vía del hemo es como una línea de ensamblaje con 8 estaciones; si una estación intermedia trabaja más lento (deficiencia enzimática parcial), las piezas semiterminadas se acumulan justo antes de esa estación represada; y si el supervisor de la fábrica (regulación hepática) "acelera la cinta" al inicio de la línea pensando que necesita más producto final, la acumulación en el cuello de botella empeora en lugar de mejorar.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde el portador asintomático de una mutación (la mayoría) hasta la crisis neurovisceral aguda grave con dolor abdominal intenso, síntomas neuropsiquiátricos y compromiso neurológico progresivo (porfirias hepáticas agudas), o desde la fotosensibilidad leve hasta la fragilidad cutánea marcada con ampollas y cicatrización (porfirias cutáneas); el diagnóstico bioquímico dirigido, la clasificación por tipo, y el manejo de cada complicación se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Anderson KE, Bloomer JR, Bonkovsky HL, et al. Recommendations for the diagnosis and treatment of the acute porphyrias. Ann Intern Med. 2005;142(6):439-450.',
  'Balwani M, Wang B, Anderson KE, et al. Acute hepatic porphyrias: Recommendations for evaluation and long-term management. Hepatology. 2017;66(4):1314-1322.',
  'Bissell DM, Anderson KE, Bonkovsky HL. Porphyria. N Engl J Med. 2017;377(9):862-872.',
  'Balwani M. Porphyria: Diagnosis, treatment, and management. Curr Treat Options Neurol. 2018;20(4):12.',
  'Wang B, Bonkovsky HL, Lim JK, Balwani M. AGA Clinical Practice Update on Diagnosis and Management of Acute Hepatic Porphyrias: Expert Review. Gastroenterology. 2023;164(3):484-491.',
  'Puy H, Gouya L, Deybach JC. Porphyrias. Lancet. 2010;375(9718):924-937.',
  'Singal AK. Porphyria cutanea tarda: Recent update. Mol Genet Metab. 2019;128(3):271-281.',
  'Frank J, Poblete-Gutiérrez P. Porphyria cutanea tarda: when skin meets liver. Best Pract Res Clin Gastroenterol. 2010;24(5):735-745.',
  'Balwani M, Bloomer J, Desnick R. Erythropoietic Protoporphyria, Autosomal Recessive. GeneReviews. 2017.',
  'Wensink D, Wagenmakers MAEM, Barman-Aksözen J, et al. Association Between Erythropoietic Protoporphyria and Liver Disease. Hepatol Commun. 2021;5(6):1038-1046.',
  'Bonkovsky HL, Maddukuri VC, Yazici C, et al. Acute porphyrias in the USA: features of 108 subjects from porphyrias consortium. Am J Med. 2014;127(12):1233-1241.',
  'Stein PE, Badminton MN, Rees DC. Update review of the acute porphyrias. Br J Haematol. 2017;176(4):527-538.',
  'Balwani M, Sardh E, Ventura P, et al. Phase 3 Trial of RNAi Therapeutic Givosiran for Acute Intermittent Porphyria. N Engl J Med. 2020;382(24):2289-2301.',
  'Innala E, Andersson C. Screening for hepatocellular carcinoma in acute intermittent porphyria: a 15-year follow-up in northern Sweden. J Intern Med. 2011;269(5):538-545.',
  'Sardh E, Wahlin S, Björnstedt M, et al. High risk of primary liver cancer in a cohort of 179 patients with Acute Hepatic Porphyria. J Inherit Metab Dis. 2013;36(6):1063-1071.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Porfiria latente / manifestación cutánea leve',
      tituloB: 'Crisis porfírica aguda / fotosensibilidad grave',
      compensada: 'Portador asintomático de la mutación (el desenlace más frecuente) o manifestación cutánea leve (fotosensibilidad, fragilidad cutánea leve) sin síntomas neuroviscerales asociados; en la porfiria cutánea tarda esporádica, ampollas y fragilidad cutánea en zonas fotoexpuestas de intensidad variable.',
      descompensada: 'Crisis neurovisceral aguda: dolor abdominal intenso (con frecuencia el síntoma más prominente y de aparición más precoz), náusea, vómito, estreñimiento, taquicardia e hipertensión arterial, síntomas neuropsiquiátricos (ansiedad, agitación, alucinaciones, convulsiones), y debilidad progresiva que puede llegar a la parálisis flácida ascendente con compromiso respiratorio (ver la tarjeta de neuropatía en Complicaciones); en la protoporfiria eritropoyética, dolor cutáneo intenso agudo tras la exposición solar, desproporcionado a los hallazgos visibles en la piel.'
    },
    laboratorio: [
      { prueba: 'ALA y PBG en orina (con calculadora)', utilidad: 'Cribado bioquímico de primera línea ante sospecha de crisis porfírica aguda; idealmente en una muestra tomada durante el episodio sintomático.' },
      { prueba: 'Fraccionamiento de porfirinas en orina, heces y plasma', utilidad: 'Confirma el diagnóstico bioquímico y ayuda a distinguir el tipo específico de porfiria según el patrón de porfirinas acumuladas.' },
      { prueba: 'Protoporfirina eritrocitaria (protoporfirina de zinc y protoporfirina libre)', utilidad: 'Elevada en la protoporfiria eritropoyética; también puede elevarse en la intoxicación por plomo y la ferropenia, que deben considerarse en el diagnóstico diferencial.' },
      { prueba: 'Estudio genético dirigido', utilidad: 'Confirma el diagnóstico molecular específico una vez establecido el patrón bioquímico, y permite el tamizaje de familiares en riesgo.' },
      { prueba: 'Pruebas de función hepática y ferritina', utilidad: 'La ferritina elevada (exceso de hierro hepático) es un factor contribuyente frecuente en la porfiria cutánea tarda esporádica; las pruebas hepáticas orientan sobre el daño hepático asociado.' }
    ],
    no_invasivos: [
      { metodo: 'Herramienta ALA/PBG urinario (con calculadora)', interpretacion: 'Orienta la sospecha de crisis porfírica aguda de forma rápida ante un cuadro neurovisceral compatible.', cutoff: 'Categórico, ver Escalas' },
      { metodo: 'Revisión estructurada de fármacos activos', interpretacion: 'Identificación de fármacos porfirinogénicos como posible gatillo de una crisis aguda o de una exacerbación de la porfiria cutánea tarda.', cutoff: 'N/A' },
      { metodo: 'Examen dermatológico dirigido con lámpara de Wood', interpretacion: 'La fluorescencia rojo-coral de las porfirinas en la orina o en las lesiones cutáneas apoya (sin confirmar por sí sola) el diagnóstico de una porfiria cutánea.', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'Ecografía hepática', hallazgos: 'Cribado de lesiones hepáticas en el paciente con porfiria hepática crónica (particularmente porfiria aguda intermitente de larga evolución), dado el riesgo aumentado de carcinoma hepatocelular (ver Complicaciones).' },
      { modalidad: 'Resonancia magnética cerebral', hallazgos: 'Si hay compromiso neurológico central marcado (convulsiones, síndrome de encefalopatía posterior reversible) durante una crisis aguda grave, para descartar otras causas y documentar hallazgos asociados.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La distinción central de este tema es hepática aguda (neurovisceral, ALA/PBG elevados) vs. cutánea (fotosensibilidad, porfirinas elevadas sin el patrón neurovisceral típico); dentro de cada categoría, la severidad varía desde el portador asintomático hasta la crisis grave con compromiso neurológico o la fotosensibilidad discapacitante.${figBlock('Imagen 2', 'Algoritmo ALA/PBG', algoritmoAlaPbgHtml)}`,
    escalas: [
      { nombre: 'Herramienta ALA/PBG urinario', componentes: 'Ácido delta-aminolevulínico (ALA) urinario, porfobilinógeno (PBG) urinario. Calculadora disponible más abajo.', formula: 'Interpretación categórica combinada de ambos datos.', interpretacion: 'PBG elevado → sugestivo de crisis porfírica aguda. ALA elevado sin PBG → patrón atípico, considerar deficiencia de ALA-deshidratasa o intoxicación por plomo. Ambos normales → poco sugestivo de crisis activa en el momento de la muestra.' },
      { nombre: 'Clasificación por tipo de porfiria', componentes: 'Patrón bioquímico de porfirinas/precursores en orina, heces y plasma; estudio genético confirmatorio.', formula: 'Categórico.', interpretacion: 'El patrón específico de acumulación (ALA/PBG vs. porfirinas, y el tipo predominante de porfirina) distingue las 4 categorías de este tema (ver Complicaciones para el detalle de cada una).' },
      { nombre: 'Gravedad de la crisis aguda', componentes: 'Intensidad del dolor, presencia de síntomas neuropsiquiátricos, hiponatremia, debilidad motora.', formula: 'Categórico.', interpretacion: 'La presencia de debilidad motora progresiva, convulsiones, o hiponatremia grave define una crisis grave que requiere manejo hospitalario intensivo y hemina intravenosa urgente (ver la tarjeta de crisis porfírica aguda en Complicaciones).' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Porfiria Aguda Intermitente',
      color: '#6b3d5c',
      definicion: 'La porfiria hepática aguda más frecuente, producida por la deficiencia parcial de PBG-desaminasa (hidroximetilbilano sintasa); herencia autosómica dominante con penetrancia clínica baja (la mayoría de los portadores nunca desarrolla síntomas), sin manifestaciones cutáneas asociadas (a diferencia de la coproporfiria hereditaria y la porfiria variegata).',
      fisiopatologia: 'La deficiencia parcial de PBG-desaminasa reduce la conversión de porfobilinógeno a hidroximetilbilano; ante un estímulo que induce ALA-sintasa hepática (fármacos porfirinogénicos, ayuno, hormonas sexuales, infección, estrés), se acumulan ALA y PBG por encima del bloqueo enzimático parcial, ambos con toxicidad neuronal directa (se ha propuesto que el ALA en exceso interfiere con la neurotransmisión gabaérgica y produce estrés oxidativo neuronal), produciendo la crisis neurovisceral característica; no hay acumulación significativa de porfirinas fotosensibilizantes, por lo que no hay manifestaciones cutáneas.',
      epidemiologia: 'La porfiria hepática aguda más frecuente; las crisis clínicamente manifiestas ocurren predominantemente en mujeres jóvenes en edad reproductiva, con frecuencia relacionadas con la fase lútea del ciclo menstrual (por la influencia hormonal sobre la inducción de ALA-sintasa).',
      factores_riesgo: ['Sexo femenino en edad reproductiva', 'Uso de fármacos porfirinogénicos', 'Ayuno prolongado o dietas muy restrictivas en carbohidratos', 'Fase lútea del ciclo menstrual/uso de progestágenos', 'Infección intercurrente o estrés fisiológico agudo', 'Consumo de alcohol'],
      clinica: 'Dolor abdominal intenso y difuso (el síntoma más frecuente y con frecuencia el primero en aparecer), náusea, vómito, estreñimiento; taquicardia e hipertensión arterial (por activación simpática); síntomas neuropsiquiátricos (ansiedad, insomnio, agitación, alucinaciones); en crisis graves no tratadas, debilidad motora progresiva que puede llegar a la parálisis (ver la tarjeta de neuropatía en Complicaciones). SIN manifestaciones cutáneas.',
      criterios_dx: 'ALA y PBG urinarios elevados (calculadora) durante el episodio sintomático, en un paciente con el cuadro clínico neurovisceral compatible; confirmación con fraccionamiento de porfirinas (patrón sin acumulación significativa de porfirinas) y estudio genético dirigido a PBG-desaminasa.',
      laboratorio: 'ALA y PBG urinarios marcadamente elevados durante la crisis; sodio sérico (la hiponatremia es una complicación frecuente y de mal pronóstico si es grave, ver Complicaciones); pruebas de función hepática con frecuencia levemente alteradas.',
      imagen: 'No indicada de rutina para el diagnóstico agudo; ecografía hepática de cribado periódico en el paciente con porfiria aguda intermitente recurrente, dado el riesgo aumentado de carcinoma hepatocelular a largo plazo (ver esa tarjeta en Complicaciones).',
      complementarios: 'Estudio genético dirigido a PBG-desaminasa una vez confirmado el patrón bioquímico, permitiendo el tamizaje de familiares en riesgo; revisión estructurada de fármacos activos ante cada episodio.',
      dx_diferencial: 'Abdomen agudo quirúrgico (el dolor abdominal intenso puede simular un abdomen quirúrgico, un error diagnóstico clásico y potencialmente peligroso si se realiza una laparotomía innecesaria), intoxicación por plomo (también eleva ALA), otras porfirias hepáticas agudas (ver esa tarjeta, distinguibles por el patrón completo de porfirinas y el estudio genético).',
      tx_medico: 'Manejo urgente con hemina intravenosa ante una crisis aguda confirmada o de alta sospecha clínica (ver la tarjeta de crisis porfírica aguda en Complicaciones para el desarrollo completo), suspensión de fármacos porfirinogénicos identificados, corrección de la hiponatremia si está presente.',
      tx_farmacologico: 'Hemina intravenosa como tratamiento específico de la crisis aguda; givosirán (terapia de ARN de interferencia dirigida a reducir la producción hepática de ALAS1) considerado en pacientes con crisis recurrentes frecuentes, como profilaxis a largo plazo.',
      tx_intervencionista: 'Trasplante hepático considerado en casos excepcionales de porfiria aguda intermitente muy grave y refractaria a todo el manejo médico disponible, dado que corrige el defecto metabólico al reemplazar el hígado deficiente en la enzima.',
      criterios_uci: 'Debilidad motora progresiva con riesgo de compromiso respiratorio, convulsiones, hiponatremia grave sintomática, inestabilidad autonómica marcada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante hepático en casos excepcionales de crisis recurrentes graves refractarias, evaluado caso por caso.',
      seguimiento_hospitalario: 'Vigilancia de la evolución neurológica (fuerza muscular, función respiratoria), del sodio sérico, y de la respuesta a la hemina intravenosa.',
      seguimiento_ambulatorio: 'Cribado periódico de carcinoma hepatocelular con ecografía hepática en el paciente con enfermedad recurrente de larga evolución (ver esa tarjeta); educación sobre fármacos seguros/inseguros y gatillos evitables; consideración de givosirán en crisis recurrentes frecuentes.',
      pronostico: 'Favorable con el reconocimiento y tratamiento oportuno de la crisis aguda; el riesgo principal a largo plazo es el de carcinoma hepatocelular en la enfermedad recurrente de larga evolución, de ahí la importancia del cribado periódico.',
      algoritmo: ['Dolor abdominal intenso + síntomas neuropsiquiátricos, SIN manifestaciones cutáneas → sospechar porfiria hepática aguda', 'ALA/PBG urinarios (calculadora) durante el episodio sintomático', 'PBG marcadamente elevado → hemina intravenosa urgente + suspender fármacos porfirinogénicos', 'Confirmar tipo específico con fraccionamiento de porfirinas y estudio genético', 'Enfermedad recurrente → cribado periódico de carcinoma hepatocelular + considerar givosirán']
    },
    {
      nombre: 'Otras porfirias hepáticas agudas',
      color: '#5c3d5c',
      definicion: 'Grupo de porfirias hepáticas agudas menos frecuentes que la porfiria aguda intermitente: coproporfiria hereditaria (deficiencia de coproporfirinógeno oxidasa) y porfiria variegata (deficiencia de protoporfirinógeno oxidasa), ambas con manifestaciones neuroviscerales similares a la porfiria aguda intermitente PERO con manifestaciones cutáneas adicionales; y la porfiria por deficiencia de ALA-deshidratasa, extremadamente rara y de herencia autosómica recesiva.',
      fisiopatologia: 'En la coproporfiria hereditaria y la porfiria variegata, el bloqueo enzimático ocurre en un paso más tardío de la vía del hemo que en la porfiria aguda intermitente; esto produce el mismo mecanismo de acumulación de ALA/PBG por inducción compensadora de ALA-sintasa (con la misma neurotoxicidad y crisis neuroviscerales), PERO también acumula las porfirinas intermedias correspondientes (coproporfirina III en la coproporfiria hereditaria, protoporfirina IX y otras en la porfiria variegata), que son fotosensibilizantes y producen manifestaciones cutáneas similares a las de la porfiria cutánea tarda. La porfiria por deficiencia de ALA-deshidratasa bloquea el segundo paso de la vía, acumulando solo ALA (sin PBG elevado, un patrón distintivo), con un cuadro neurovisceral similar pero sin las otras porfirinas asociadas.',
      epidemiologia: 'Colectivamente menos frecuentes que la porfiria aguda intermitente; la porfiria variegata tiene una prevalencia particularmente elevada en la población afrikáner de Sudáfrica por un efecto fundador; la deficiencia de ALA-deshidratasa es extremadamente rara, con muy pocos casos descritos en la literatura mundial.',
      factores_riesgo: ['Los mismos gatillos que la porfiria aguda intermitente (fármacos porfirinogénicos, ayuno, hormonas, estrés/infección)', 'Ascendencia afrikáner sudafricana (porfiria variegata)', 'Exposición ocupacional a plomo (diagnóstico diferencial de la deficiencia de ALA-deshidratasa, no un factor de riesgo genético en sí)'],
      clinica: 'Crisis neuroviscerales idénticas en presentación a la porfiria aguda intermitente (dolor abdominal, síntomas neuropsiquiátricos, debilidad progresiva), PERO con manifestaciones cutáneas de fotosensibilidad adicionales en la coproporfiria hereditaria y la porfiria variegata (ampollas y fragilidad cutánea en zonas fotoexpuestas, similares a la porfiria cutánea tarda), un dato clave que las distingue clínicamente de la porfiria aguda intermitente.',
      criterios_dx: 'ALA y PBG urinarios elevados durante la crisis (igual que la porfiria aguda intermitente), pero con un patrón adicional de porfirinas elevadas en heces (coproporfirina III predominante en la coproporfiria hereditaria; protoporfirina IX predominante en la porfiria variegata) que las distingue; confirmación con estudio genético dirigido a la enzima correspondiente.',
      laboratorio: 'ALA y PBG urinarios elevados durante la crisis; fraccionamiento de porfirinas en heces (elevado, a diferencia de la porfiria aguda intermitente donde es normal o mínimamente elevado) como el dato bioquímico clave diferenciador.',
      imagen: 'Igual que la porfiria aguda intermitente: ecografía hepática de cribado periódico en la enfermedad recurrente.',
      complementarios: 'Estudio genético dirigido a coproporfirinógeno oxidasa o protoporfirinógeno oxidasa según el patrón bioquímico; niveles de plomo en sangre si se sospecha deficiencia de ALA-deshidratasa (para descartar intoxicación por plomo como diagnóstico diferencial más frecuente de ese patrón).',
      dx_diferencial: 'Porfiria aguda intermitente (sin manifestaciones cutáneas, distinguible por el patrón de porfirinas en heces), porfiria cutánea tarda (manifestaciones cutáneas similares pero sin crisis neuroviscerales ni ALA/PBG elevados), intoxicación por plomo (para el patrón de deficiencia de ALA-deshidratasa).',
      tx_medico: 'Idéntico al de la porfiria aguda intermitente durante la crisis aguda (hemina intravenosa, suspensión de fármacos porfirinogénicos); manejo adicional de las lesiones cutáneas (fotoprotección estricta) en la coproporfiria hereditaria y la porfiria variegata.',
      tx_farmacologico: 'Hemina intravenosa para la crisis aguda; givosirán considerado en crisis recurrentes frecuentes, igual que en la porfiria aguda intermitente (aprobado específicamente para las porfirias hepáticas agudas como grupo).',
      tx_intervencionista: 'Trasplante hepático considerado en casos excepcionales muy graves y refractarios, igual que en la porfiria aguda intermitente.',
      criterios_uci: 'Los mismos criterios que la porfiria aguda intermitente durante una crisis grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante hepático en casos excepcionales refractarios.',
      seguimiento_hospitalario: 'Igual que la porfiria aguda intermitente durante una crisis.',
      seguimiento_ambulatorio: 'Cribado periódico de carcinoma hepatocelular en la enfermedad recurrente; fotoprotección estricta y educación sobre el manejo de las lesiones cutáneas en la coproporfiria hereditaria y la porfiria variegata; asesoría genética familiar, particularmente relevante en la porfiria variegata dada su alta prevalencia en ciertas poblaciones.',
      pronostico: 'Similar al de la porfiria aguda intermitente en cuanto a las crisis neuroviscerales; el componente cutáneo agrega morbilidad adicional pero no cambia sustancialmente el pronóstico vital.',
      algoritmo: ['Crisis neurovisceral CON manifestaciones cutáneas de fotosensibilidad → sospechar coproporfiria hereditaria o porfiria variegata en lugar de porfiria aguda intermitente', 'ALA/PBG urinarios elevados durante la crisis + porfirinas en heces elevadas → confirma el patrón de estas porfirias', 'Manejo agudo idéntico a la porfiria aguda intermitente (hemina intravenosa)', 'Estudio genético dirigido según el patrón bioquímico específico', 'Fotoprotección estricta para el componente cutáneo + cribado hepático periódico']
    },
    {
      nombre: 'Porfiria Cutánea Tarda',
      color: '#8c6b2d',
      definicion: 'La porfiria más frecuente en general, producida por la deficiencia de uroporfirinógeno descarboxilasa; existe una forma esporádica adquirida (la más frecuente, con la enzima deficiente solo en el hígado por factores adquiridos) y una forma familiar hereditaria (deficiencia enzimática generalizada, con manifestación clínica que también requiere factores desencadenantes adicionales); SIN crisis neuroviscerales, dado que el bloqueo ocurre en un paso tardío de la vía sin acumulación significativa de ALA/PBG.',
      fisiopatologia: 'La deficiencia de uroporfirinógeno descarboxilasa acumula uroporfirinógeno y porfirinas relacionadas, que se oxidan a sus formas porfirina correspondientes (fotosensibilizantes); estas porfirinas, al absorber luz visible en la piel, generan especies reactivas de oxígeno que dañan las estructuras cutáneas, particularmente a nivel de la unión dermoepidérmica, produciendo la fragilidad cutánea y las ampollas características. En la forma esporádica, el exceso de hierro hepático (por hemocromatosis, alcohol, hepatitis C, o VIH) inhibe directamente la actividad de la enzima ya de por sí parcialmente deficiente por otros factores adquiridos, precipitando la manifestación clínica; los estrógenos (anticonceptivos, terapia hormonal) son otro gatillo reconocido.',
      epidemiologia: 'La porfiria más frecuente en general; la forma esporádica representa la mayoría de los casos, típicamente en adultos con los factores de riesgo adquiridos mencionados (exceso de hierro, alcohol, hepatitis C).',
      factores_riesgo: ['Exceso de hierro hepático (hemocromatosis u otra causa)', 'Consumo de alcohol', 'Infección por hepatitis C', 'Infección por VIH', 'Uso de estrógenos (anticonceptivos orales, terapia hormonal)', 'Tabaquismo', 'Antecedente familiar (forma hereditaria)'],
      clinica: `Fragilidad cutánea marcada y ampollas en zonas fotoexpuestas (dorso de manos, antebrazos, cara), que se rompen fácilmente dejando erosiones de cicatrización lenta; hiperpigmentación e hipertricosis facial; SIN dolor abdominal ni síntomas neuropsiquiátricos, a diferencia de las porfirias hepáticas agudas.${figBlock('Imagen 3', 'Ampolla en porfiria cutánea tarda', `
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Blister_in_porphyria_cutanea_tarda.jpg/960px-Blister_in_porphyria_cutanea_tarda.jpg" alt="Lesión ampollosa en el dorso de la mano de un paciente con porfiria cutánea tarda, en una zona fotoexpuesta." style="width:100%;max-width:320px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
`)}`,
      criterios_dx: 'Elevación de uroporfirina y porfirinas de 7 carboxilos en orina, en un paciente con el cuadro cutáneo compatible; ALA y PBG urinarios normales (a diferencia de las porfirias hepáticas agudas), un dato clave para la distinción.',
      laboratorio: 'Uroporfirina y porfirinas de 7 carboxilos elevadas en orina; ferritina sérica con frecuencia elevada; serología de hepatitis C y VIH como parte del estudio etiológico de la forma esporádica; pruebas de función hepática.',
      imagen: 'No indicada de rutina para el diagnóstico; ecografía hepática si hay sospecha de hepatopatía asociada de otra causa (hemocromatosis, hepatitis C crónica).',
      complementarios: 'Lámpara de Wood sobre la orina (fluorescencia rojo-coral característica) como prueba de cribado rápida a la cabecera; estudio genético dirigido a uroporfirinógeno descarboxilasa si se sospecha la forma hereditaria (por ejemplo, inicio a edad más temprana o antecedente familiar claro).',
      dx_diferencial: 'Otras porfirias hepáticas agudas con componente cutáneo (coproporfiria hereditaria, porfiria variegata, distinguibles por ALA/PBG elevados y el patrón de porfirinas en heces), penfigoide ampolloso u otras dermatosis ampollosas (sin la elevación característica de porfirinas urinarias).',
      tx_medico: 'Corrección de los factores contribuyentes identificables: flebotomías terapéuticas seriadas para reducir el hierro hepático (el tratamiento más eficaz y de primera línea), suspensión de alcohol y de estrógenos si son factores identificados, tratamiento de la hepatitis C si está presente.',
      tx_farmacologico: 'Cloroquina o hidroxicloroquina en dosis bajas como alternativa o complemento a la flebotomía (forman un complejo con las porfirinas hepáticas que facilita su excreción), particularmente útil si la flebotomía está contraindicada (por ejemplo, anemia significativa concomitante).',
      tx_intervencionista: 'Flebotomía terapéutica seriada (ver tx_medico) como el procedimiento central del tratamiento.',
      criterios_uci: 'No aplica de forma directa a esta entidad en sí.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa (salvo por la enfermedad hepática de base concomitante, si progresa independientemente).',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico.',
      seguimiento_ambulatorio: 'Vigilancia de la ferritina sérica y de las lesiones cutáneas durante las flebotomías seriadas; fotoprotección estricta; tratamiento de la hepatitis C si está presente, dado que mejora sustancialmente el curso de la porfiria cutánea tarda asociada.',
      pronostico: 'Favorable con la corrección de los factores contribuyentes y la flebotomía terapéutica, que produce remisión clínica y bioquímica sostenida en la mayoría de los casos.',
      algoritmo: ['Fragilidad cutánea/ampollas en zonas fotoexpuestas, SIN síntomas neuroviscerales → sospechar porfiria cutánea tarda', 'Uroporfirina/porfirinas de 7 carboxilos en orina elevadas + ALA/PBG normales → confirma el diagnóstico', 'Investigar factores contribuyentes: ferritina, serología de hepatitis C/VIH, uso de estrógenos, alcohol', 'Flebotomía terapéutica seriada como tratamiento de primera línea', 'Corrección de los factores contribuyentes identificados (suspender estrógenos/alcohol, tratar hepatitis C)']
    },
    {
      nombre: 'Protoporfiria Eritropoyética',
      color: '#8c3a34',
      definicion: 'Porfiria producida por la deficiencia de ferroquelatasa (forma clásica, autosómica recesiva) o por la ganancia de función de ALA-sintasa 2 eritroide (protoporfiria ligada a X), ambas con acumulación de protoporfirina IX de origen predominantemente en los eritrocitos en desarrollo; se distingue de las demás porfirias de este tema por producir dolor cutáneo agudo intenso y desproporcionado a los hallazgos visibles, en lugar de las ampollas típicas de la porfiria cutánea tarda.',
      fisiopatologia: 'La ferroquelatasa cataliza el último paso de la vía del hemo (inserción de hierro en la protoporfirina IX); su deficiencia (o, en la variante ligada a X, el exceso de producción de protoporfirina IX por ganancia de función de ALAS2 que sobrepasa la capacidad de la ferroquelatasa normal) acumula protoporfirina IX libre, predominantemente de origen eritrocitario (a diferencia de las demás porfirias de este tema, de predominio hepático). La protoporfirina IX circulante se deposita en la piel y, al absorber luz visible (no ultravioleta, a diferencia de otras fotodermatosis), genera especies reactivas de oxígeno que dañan directamente las terminaciones nerviosas cutáneas, produciendo dolor intenso de inicio rápido tras la exposición solar, con edema y eritema pero característicamente SIN las ampollas francas de la porfiria cutánea tarda.',
      epidemiologia: 'Se manifiesta característicamente desde la infancia, a diferencia de las demás porfirias de este tema que típicamente se manifiestan en la vida adulta; el diagnóstico con frecuencia se retrasa años, dado que el dolor intenso sin hallazgos cutáneos visibles marcados puede atribuirse erróneamente a otras causas.',
      factores_riesgo: ['Antecedente familiar de protoporfiria eritropoyética', 'Exposición solar (incluso a través de vidrio, dado que la luz visible relevante lo atraviesa)', 'Deficiencia de hierro concomitante (puede empeorar la acumulación de protoporfirina IX en la variante ligada a X)'],
      clinica: 'Dolor cutáneo intenso, quemante, de inicio rápido (minutos) tras la exposición solar, desproporcionado a los hallazgos visibles en la piel (que pueden mostrar solo edema y eritema leve); a diferencia de la porfiria cutánea tarda, NO produce ampollas francas ni fragilidad cutánea marcada en la mayoría de los casos; con la exposición repetida a lo largo de los años, puede desarrollarse liquenificación cutánea crónica en zonas fotoexpuestas.',
      criterios_dx: 'Protoporfirina eritrocitaria (protoporfirina libre, predominantemente, en la deficiencia de ferroquelatasa; con un componente de zinc-protoporfirina variable) marcadamente elevada, en un paciente con el cuadro clínico de dolor cutáneo agudo fotoinducido característico desde la infancia.',
      laboratorio: 'Protoporfirina eritrocitaria elevada; ALA y PBG urinarios normales (a diferencia de las porfirias hepáticas agudas); perfil de hierro (la ferropenia puede coexistir y modificar el curso, particularmente en la variante ligada a X).',
      imagen: 'Ecografía hepática de cribado si hay sospecha de afectación hepática asociada (ver la tarjeta de complicaciones hepáticas), dado que un subgrupo de pacientes desarrolla depósito hepático de protoporfirina con daño hepático progresivo.',
      complementarios: 'Estudio genético dirigido a ferroquelatasa o a ALAS2 (variante ligada a X) para confirmar el diagnóstico molecular específico; evaluación de la reserva de hierro, dado que su corrección o depleción puede modificar el curso clínico según la variante.',
      dx_diferencial: 'Otras fotodermatosis (urticaria solar, erupción polimorfa lumínica), porfiria cutánea tarda (ampollas francas, sin el dolor agudo desproporcionado característico de esta entidad), otras causas de dolor neuropático de otra localización.',
      tx_medico: 'Fotoprotección estricta (incluida protección frente a luz visible, no solo ultravioleta, dado que la longitud de onda relevante es diferente de la mayoría de los protectores solares convencionales) como pilar central del manejo.',
      tx_farmacologico: 'Afamelanotida (análogo de la hormona estimulante de melanocitos) aprobada específicamente para aumentar la tolerancia a la luz en la protoporfiria eritropoyética, reduciendo la frecuencia e intensidad de los episodios de dolor cutáneo.',
      tx_intervencionista: 'Trasplante hepático considerado en el subgrupo con daño hepático avanzado por depósito de protoporfirina (ver la tarjeta de complicaciones hepáticas); trasplante de médula ósea considerado en casos excepcionales muy graves, dado que corrige el defecto de origen eritrocitario.',
      criterios_uci: 'No aplica de forma directa salvo por la complicación hepática avanzada.',
      criterios_tips: 'No aplica de forma directa a esta entidad en sí, salvo el desarrollo de hipertensión portal en la complicación hepática avanzada.',
      criterios_trasplante: 'Trasplante hepático en el subgrupo con daño hepático progresivo por depósito de protoporfirina; trasplante de médula ósea en casos excepcionales muy graves.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico salvo por la complicación hepática.',
      seguimiento_ambulatorio: 'Vigilancia periódica de la función hepática y de la protoporfirina eritrocitaria, dado el riesgo de daño hepático progresivo en un subgrupo de pacientes; educación sobre fotoprotección estricta desde la infancia.',
      pronostico: 'Favorable en cuanto a la calidad de vida con fotoprotección estricta y, cuando está disponible, afamelanotida; el pronóstico se ensombrece en el subgrupo que desarrolla daño hepático progresivo por depósito de protoporfirina.',
      algoritmo: ['Dolor cutáneo agudo desproporcionado tras exposición solar, desde la infancia, SIN ampollas francas → sospechar protoporfiria eritropoyética', 'Protoporfirina eritrocitaria elevada + ALA/PBG normales → confirma el diagnóstico', 'Fotoprotección estricta (incluida luz visible) como pilar central', 'Afamelanotida si está disponible para reducir la frecuencia/intensidad de episodios', 'Vigilancia hepática periódica por el riesgo de daño hepático progresivo por depósito']
    },
    {
      nombre: 'Crisis porfírica aguda',
      color: '#7a1f3d',
      definicion: 'Urgencia médica que agrupa la presentación clínica aguda de cualquiera de las porfirias hepáticas agudas (porfiria aguda intermitente, coproporfiria hereditaria, porfiria variegata, o deficiencia de ALA-deshidratasa): dolor abdominal intenso, síntomas neuropsiquiátricos, y riesgo de progresión a debilidad motora y compromiso respiratorio si no se reconoce y trata con prontitud.',
      fisiopatologia: 'La acumulación aguda de ALA y PBG por encima de un bloqueo enzimático parcial, precipitada por un gatillo identificable (fármaco porfirinogénico, ayuno, hormonas, infección/estrés) en la mayoría de los casos, produce neurotoxicidad directa que afecta tanto al sistema nervioso autónomo (taquicardia, hipertensión, dolor abdominal por dismotilidad) como al sistema nervioso periférico (la neuropatía motora progresiva, ver esa tarjeta) y central (síntomas neuropsiquiátricos, convulsiones). La hiponatremia, una complicación frecuente y de mal pronóstico si es grave, se produce por un mecanismo multifactorial que incluye secreción inapropiada de hormona antidiurética y pérdidas gastrointestinales por el vómito y la dismotilidad asociados.',
      epidemiologia: 'Ocurre en el subgrupo de portadores de una mutación de porfiria hepática aguda que desarrolla manifestación clínica (una minoría del total de portadores), característicamente en mujeres jóvenes tras la exposición a un gatillo identificable.',
      factores_riesgo: ['Uso de un fármaco porfirinogénico', 'Ayuno prolongado o restricción calórica/de carbohidratos marcada', 'Infección intercurrente', 'Estrés fisiológico o emocional agudo', 'Fase lútea del ciclo menstrual/uso de progestágenos', 'Consumo de alcohol'],
      clinica: 'Dolor abdominal intenso y difuso, con frecuencia el síntoma inicial y más prominente; náusea, vómito, estreñimiento; taquicardia e hipertensión arterial; síntomas neuropsiquiátricos (ansiedad, agitación, alucinaciones, insomnio); en la crisis grave no reconocida a tiempo, debilidad motora progresiva de inicio en las extremidades que puede ascender hasta comprometer la musculatura respiratoria.',
      criterios_dx: 'ALA y PBG urinarios marcadamente elevados (calculadora) en un paciente con el cuadro clínico neurovisceral compatible; el diagnóstico bioquímico durante el episodio agudo no debe retrasar el inicio del tratamiento ante alta sospecha clínica.',
      laboratorio: 'ALA y PBG urinarios; sodio sérico seriado (vigilancia de hiponatremia); pruebas de función hepática y renal basales; magnesio y fósforo si hay debilidad motora marcada (para descartar contribuyentes metabólicos adicionales).',
      imagen: 'No indicada de rutina para el diagnóstico agudo; estudios de imagen abdominal considerados únicamente si el cuadro clínico no es clásico y persiste la duda de un abdomen quirúrgico genuino concomitante.',
      complementarios: 'Electromiografía/estudios de conducción nerviosa si hay debilidad motora progresiva, para documentar la neuropatía axonal característica (ver esa tarjeta).',
      dx_diferencial: 'Abdomen agudo quirúrgico genuino (el error diagnóstico más peligroso en este contexto, dado el riesgo de una laparotomía innecesaria en un paciente que en realidad tiene una crisis porfírica), intoxicación por plomo, síndrome de Guillain-Barré (si predomina la debilidad motora sin el pródromo abdominal característico).',
      tx_medico: 'Hemina intravenosa (o arginato de hemo) tan pronto como se establece la sospecha diagnóstica razonable, sin esperar la confirmación bioquímica completa si la sospecha clínica es alta, dado que reduce la producción de ALA/PBG al suprimir la inducción de ALA-sintasa; suspensión inmediata de cualquier fármaco porfirinogénico identificado; aporte calórico adecuado (glucosa intravenosa como medida puente mientras se organiza la hemina, dado que la glucosa también suprime parcialmente la ALA-sintasa, aunque de forma menos eficaz que la hemina).',
      tx_farmacologico: 'Hemina intravenosa como tratamiento específico de elección; manejo sintomático del dolor (opioides, evitando fármacos porfirinogénicos en la lista de precaución) y de la náusea; corrección cuidadosa de la hiponatremia si está presente, evitando una corrección demasiado rápida.',
      tx_intervencionista: 'No aplica de forma directa a la crisis aguda en sí (salvo soporte ventilatorio si hay compromiso respiratorio por la neuropatía, ver esa tarjeta).',
      criterios_uci: 'Debilidad motora progresiva con amenaza de compromiso respiratorio, convulsiones, hiponatremia grave sintomática, inestabilidad autonómica marcada (arritmias, crisis hipertensiva).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a este episodio en sí (ver la tarjeta de porfiria aguda intermitente para el trasplante hepático en enfermedad recurrente refractaria).',
      seguimiento_hospitalario: 'Vigilancia estrecha de la fuerza muscular y la función respiratoria (espirometría seriada si hay debilidad), del sodio sérico, y de la respuesta clínica a la hemina intravenosa.',
      seguimiento_ambulatorio: 'Educación exhaustiva sobre fármacos porfirinogénicos a evitar, reconocimiento temprano de síntomas de una nueva crisis, y seguimiento hematológico/hepatológico a largo plazo según la porfiria específica identificada.',
      pronostico: 'Favorable con el reconocimiento y tratamiento oportuno con hemina intravenosa; el retraso diagnóstico (particularmente si se realiza una laparotomía innecesaria) empeora significativamente el curso clínico y prolonga la recuperación.',
      algoritmo: ['Dolor abdominal intenso + síntomas neuropsiquiátricos en un paciente con porfiria conocida o sospechada → sospechar crisis porfírica aguda', 'ALA/PBG urinarios (calculadora), SIN retrasar el tratamiento si la sospecha clínica es alta', 'Hemina intravenosa urgente + suspender fármacos porfirinogénicos + aporte calórico adecuado', 'Vigilancia estrecha de fuerza muscular, función respiratoria, y sodio sérico', 'Debilidad progresiva o inestabilidad → manejo en UCI']
    },
    {
      nombre: 'Neuropatía y complicaciones neurológicas',
      color: '#3d5a73',
      definicion: 'Complicación de las porfirias hepáticas agudas no reconocidas o tratadas tardíamente: una neuropatía motora predominantemente axonal, de inicio proximal y con frecuencia asimétrica, que puede progresar hasta la parálisis flácida con compromiso de la musculatura respiratoria si la crisis subyacente no se trata a tiempo.',
      fisiopatologia: 'La neurotoxicidad directa del exceso de ALA (y, en menor medida, PBG) sobre las neuronas motoras periféricas produce una degeneración axonal (a diferencia de una neuropatía desmielinizante); el patrón de afectación con frecuencia comienza en las extremidades proximales y puede ser asimétrico, un dato que ayuda a distinguirla de otras polineuropatías agudas más simétricas y distales. El sistema nervioso autónomo también se ve afectado, contribuyendo a la taquicardia, la hipertensión, y la dismotilidad intestinal características de la crisis aguda; el compromiso del sistema nervioso central (convulsiones, síntomas neuropsiquiátricos) refleja el mismo mecanismo de neurotoxicidad directa además de contribuir la hiponatremia asociada.',
      epidemiologia: 'Ocurre predominantemente en crisis agudas graves no reconocidas o tratadas tardíamente; el retraso diagnóstico (particularmente si se atribuye erróneamente el dolor abdominal a otra causa y se retrasa la hemina intravenosa) es el principal factor de riesgo para su desarrollo.',
      factores_riesgo: ['Retraso diagnóstico o terapéutico de la crisis porfírica aguda subyacente', 'Crisis graves recurrentes', 'Hiponatremia grave concomitante', 'Uso continuado de un fármaco porfirinogénico durante la crisis por diagnóstico no reconocido'],
      clinica: 'Debilidad motora de inicio proximal, con frecuencia asimétrica, que puede progresar de forma ascendente hasta comprometer la musculatura respiratoria y bulbar en los casos graves; puede acompañarse de dolor neuropático; síntomas de disautonomía (taquicardia persistente, hipertensión lábil, íleo); convulsiones y otros síntomas de afectación del sistema nervioso central en los casos más graves.',
      criterios_dx: 'Debilidad motora de nueva aparición en el contexto de una crisis porfírica aguda confirmada o de alta sospecha; electromiografía/estudios de conducción nerviosa que documentan un patrón de neuropatía axonal motora.',
      laboratorio: 'ALA/PBG urinarios (con frecuencia muy elevados en este contexto de crisis grave); sodio sérico (la hiponatremia grave contribuye al riesgo de convulsiones); creatina cinasa si hay sospecha de componente miopático asociado.',
      imagen: 'Resonancia magnética cerebral si hay convulsiones o síntomas neurológicos centrales, para descartar otras causas concomitantes (por ejemplo, síndrome de encefalopatía posterior reversible, descrito en crisis porfíricas graves) y documentar hallazgos asociados.',
      complementarios: 'Electromiografía/estudios de conducción nerviosa seriados para documentar la evolución de la neuropatía; espirometría seriada (capacidad vital forzada) para vigilar el compromiso respiratorio inminente antes de que sea clínicamente evidente.',
      dx_diferencial: 'Síndrome de Guillain-Barré (neuropatía desmielinizante, típicamente ascendente y simétrica desde el inicio, sin el pródromo de dolor abdominal característico), miopatía por otra causa, neuropatía por deficiencia nutricional.',
      tx_medico: 'Tratamiento urgente de la crisis porfírica aguda subyacente con hemina intravenosa (la medida más eficaz para detener la progresión de la neuropatía, aunque la recuperación de la debilidad ya establecida puede ser lenta e incompleta); soporte respiratorio si hay compromiso de la musculatura respiratoria.',
      tx_farmacologico: 'Hemina intravenosa como medida central; manejo del dolor neuropático con analgésicos seguros en porfiria (evitando la lista de fármacos porfirinogénicos); rehabilitación física intensiva durante la recuperación.',
      tx_intervencionista: 'Ventilación mecánica si hay compromiso respiratorio establecido; traqueostomía en casos de ventilación prolongada.',
      criterios_uci: 'Debilidad motora con compromiso de la musculatura respiratoria (capacidad vital forzada en descenso) o bulbar, disautonomía grave con inestabilidad hemodinámica, convulsiones no controladas.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa a esta complicación en sí.',
      seguimiento_hospitalario: 'Espirometría seriada, vigilancia neurológica estrecha de la progresión/regresión de la debilidad, fisioterapia temprana.',
      seguimiento_ambulatorio: 'Rehabilitación física prolongada, dado que la recuperación de la neuropatía axonal puede tomar meses y en ocasiones ser incompleta; seguimiento neurológico a largo plazo.',
      pronostico: 'Variable: la recuperación puede ser completa si el tratamiento con hemina se inicia tempranamente, pero puede dejar secuelas motoras permanentes si el diagnóstico y tratamiento se retrasaron significativamente durante la crisis.',
      algoritmo: ['Debilidad motora de nueva aparición en el contexto de una crisis porfírica → complicación neurológica establecida, urgencia', 'Espirometría seriada para vigilar compromiso respiratorio inminente', 'Hemina intravenosa urgente si no se había iniciado ya, para detener la progresión', 'Soporte respiratorio si hay compromiso de la musculatura respiratoria', 'Rehabilitación física temprana y prolongada durante la recuperación']
    },
    {
      nombre: 'Complicaciones hepáticas a largo plazo',
      color: '#6b4a2e',
      definicion: 'Riesgo aumentado de carcinoma hepatocelular en el paciente con porfiria hepática aguda recurrente de larga evolución (particularmente porfiria aguda intermitente), y riesgo de daño hepático progresivo por depósito de protoporfirina en el subgrupo de pacientes con protoporfiria eritropoyética; complicaciones distintas por mecanismo pero agrupadas aquí por afectar al mismo órgano diana a largo plazo en 2 categorías diferentes de porfirias de este tema.',
      fisiopatologia: 'En la porfiria aguda intermitente (y, en menor medida, las demás porfirias hepáticas agudas) de larga evolución, se ha observado un riesgo significativamente aumentado de carcinoma hepatocelular independiente de los factores de riesgo hepáticos habituales (cirrosis, hepatitis viral), por un mecanismo que se ha propuesto relacionado con la exposición hepática crónica y repetida a niveles elevados de ALA y otros intermediarios potencialmente genotóxicos. En la protoporfiria eritropoyética, la protoporfirina IX en exceso, de predominio eritrocitario pero con captación y excreción hepatobiliar, puede depositarse progresivamente en el hígado en un subgrupo de pacientes, produciendo daño hepatocelular directo que puede progresar a cirrosis y, en casos graves, a falla hepática aguda (la llamada "protoporfiria hepática").',
      epidemiologia: 'El riesgo de carcinoma hepatocelular en la porfiria aguda intermitente de larga evolución está claramente documentado en cohortes de seguimiento a largo plazo, con un riesgo relativo sustancialmente mayor que en la población general; el daño hepático progresivo en la protoporfiria eritropoyética ocurre en una minoría de los pacientes, pero puede ser grave cuando se presenta.',
      factores_riesgo: ['Porfiria aguda intermitente (u otra porfiria hepática aguda) de larga evolución, particularmente con crisis recurrentes', 'Edad avanzada al momento del cribado (el riesgo aumenta con la duración de la enfermedad)', 'Protoporfirina eritrocitaria muy marcadamente elevada en la protoporfiria eritropoyética', 'Enfermedad hepática concomitante de otra causa (potencia el riesgo en ambos contextos)'],
      clinica: 'El carcinoma hepatocelular asociado a porfiria hepática aguda puede ser clínicamente silente hasta etapas avanzadas, de ahí la importancia del cribado periódico; el daño hepático progresivo por protoporfirina puede manifestarse con ictericia, dolor en hipocondrio derecho, y progresar a los signos de falla hepática si no se reconoce.',
      criterios_dx: 'Cribado periódico con ecografía hepática (y alfafetoproteína) en el paciente con porfiria hepática aguda recurrente de larga evolución; en la protoporfiria eritropoyética, vigilancia periódica de pruebas de función hepática y de la protoporfirina eritrocitaria, con biopsia hepática si hay deterioro progresivo no explicado por otra causa.',
      laboratorio: 'Alfafetoproteína como parte del cribado de carcinoma hepatocelular; pruebas de función hepática seriadas en ambos contextos.',
      imagen: 'Ecografía hepática periódica (el estudio de cribado central en ambos contextos); TC o RM hepática dirigida si la ecografía identifica una lesión sospechosa.',
      complementarios: 'Biopsia hepática si hay deterioro progresivo de la función hepática en la protoporfiria eritropoyética sin otra causa que lo explique, para caracterizar el grado de depósito de protoporfirina y de daño hepático.',
      dx_diferencial: 'Carcinoma hepatocelular de otra causa habitual (cirrosis por alcohol, hepatitis viral) que puede coexistir de forma independiente; otras causas de daño hepático progresivo en el paciente con protoporfiria eritropoyética (hepatitis viral concomitante, hepatotoxicidad farmacológica).',
      tx_medico: 'Manejo estándar del carcinoma hepatocelular según su estadio (ver el tema de Cirrosis para el desarrollo del manejo oncológico hepático); en la protoporfiria eritropoyética, optimización del manejo de la porfiria de base (fotoprotección, afamelanotida) mientras se vigila la función hepática.',
      tx_farmacologico: 'Según el manejo oncológico estándar del carcinoma hepatocelular si se confirma; no hay un tratamiento farmacológico específico dirigido a revertir el depósito hepático de protoporfirina más allá de las medidas generales de la porfiria de base.',
      tx_intervencionista: 'Resección quirúrgica, ablación, o quimioembolización del carcinoma hepatocelular según su estadio; trasplante hepático en la protoporfiria eritropoyética con daño hepático avanzado (ver esa tarjeta), en ocasiones combinado con trasplante de médula ósea para corregir el defecto de origen y evitar la recurrencia del depósito en el hígado trasplantado.',
      criterios_uci: 'Según la gravedad de la falla hepática aguda si se desarrolla en la protoporfiria eritropoyética con daño hepático avanzado.',
      criterios_tips: 'Considerado en la hipertensión portal establecida por el daño hepático avanzado en la protoporfiria eritropoyética.',
      criterios_trasplante: 'Trasplante hepático (con o sin trasplante de médula ósea combinado) en la protoporfiria eritropoyética con daño hepático avanzado; el trasplante hepático aislado por carcinoma hepatocelular sigue los criterios oncológicos estándar.',
      seguimiento_hospitalario: 'Según el manejo específico requerido por cada complicación (oncológico o de falla hepática).',
      seguimiento_ambulatorio: 'Cribado periódico continuado con ecografía hepática y alfafetoproteína en la porfiria hepática aguda recurrente; vigilancia periódica de la función hepática y la protoporfirina eritrocitaria en la protoporfiria eritropoyética.',
      pronostico: 'El pronóstico del carcinoma hepatocelular asociado a porfiria hepática aguda depende del estadio al momento del diagnóstico, de ahí el valor del cribado periódico; el daño hepático progresivo por protoporfirina puede ser grave si no se reconoce a tiempo, pero el trasplante (hepático, en ocasiones combinado con médula ósea) ofrece una opción curativa en casos avanzados seleccionados.',
      algoritmo: ['Porfiria hepática aguda recurrente de larga evolución → iniciar cribado periódico de carcinoma hepatocelular (ecografía + alfafetoproteína)', 'Protoporfiria eritropoyética → vigilancia periódica de función hepática y protoporfirina eritrocitaria', 'Lesión hepática sospechosa en cribado → estudio de imagen dirigido y manejo oncológico según estadio', 'Deterioro hepático progresivo en protoporfiria sin otra causa → considerar biopsia hepática', 'Daño hepático avanzado → evaluar trasplante hepático (combinado con médula ósea en protoporfiria eritropoyética)']
    },
    {
      nombre: 'Fotosensibilidad y complicaciones cutáneas',
      color: '#966b35',
      definicion: 'Espectro de manifestaciones cutáneas producidas por el depósito de porfirinas fotosensibilizantes en la piel, con 2 patrones clínicos distintos según el tipo de porfiria: fragilidad cutánea con ampollas de cicatrización lenta (porfiria cutánea tarda, coproporfiria hereditaria, porfiria variegata) o dolor cutáneo agudo sin ampollas francas (protoporfiria eritropoyética), cada uno con manejo e implicaciones pronósticas distintas.',
      fisiopatologia: 'Las porfirinas acumuladas absorben luz en el espectro visible (particularmente en la banda de Soret, alrededor de 400 nm) y, al excitarse, generan especies reactivas de oxígeno que dañan las estructuras cutáneas circundantes. En el patrón de fragilidad cutánea (porfiria cutánea tarda y afines), el daño ocurre predominantemente a nivel de la unión dermoepidérmica, produciendo separación y formación de ampollas subepidérmicas que se rompen con traumatismos menores, dejando erosiones de cicatrización lenta con frecuencia complicadas por milios e hiperpigmentación residual. En el patrón de dolor agudo (protoporfiria eritropoyética), el daño ocurre predominantemente a nivel de las terminaciones nerviosas cutáneas y los vasos superficiales, produciendo dolor intenso y edema sin la separación dermoepidérmica marcada que produce ampollas francas.',
      epidemiologia: 'La fragilidad cutánea con ampollas es el patrón más frecuente en general (por la mayor prevalencia de la porfiria cutánea tarda); el dolor agudo sin ampollas de la protoporfiria eritropoyética es menos frecuente pero particularmente discapacitante por su inicio en la infancia y su impacto en la calidad de vida.',
      factores_riesgo: ['Exposición solar sin fotoprotección adecuada', 'Porfirinas circulantes/tisulares muy elevadas', 'Traumatismo cutáneo menor sobreañadido en el patrón de fragilidad (favorece la formación de ampollas)', 'Falta de reconocimiento del patrón de dolor agudo, que retrasa la fotoprotección efectiva en la protoporfiria eritropoyética'],
      clinica: 'Patrón de fragilidad/ampollas: vesículas y ampollas en zonas fotoexpuestas que se rompen dejando erosiones, con cicatrización lenta, milios, e hiperpigmentación residual. Patrón de dolor agudo: quemazón y dolor intenso de inicio rápido tras la exposición solar, con edema y eritema leve pero sin ampollas francas en la mayoría de los casos.',
      criterios_dx: 'Clínico, apoyado por el patrón bioquímico de porfirinas específico de cada tipo de porfiria (ver las tarjetas de enfermedad correspondientes); la lámpara de Wood sobre la orina o las lesiones puede apoyar la sospecha inicial.',
      laboratorio: 'Según el tipo de porfiria específico identificado (uroporfirina/porfirinas de 7 carboxilos en el patrón de fragilidad; protoporfirina eritrocitaria en el patrón de dolor agudo, ver las tarjetas correspondientes).',
      imagen: 'No aplica de forma directa a esta complicación en sí.',
      complementarios: 'Biopsia cutánea (con estudio de inmunofluorescencia si es necesario) reservada para el caso dudoso donde se necesita distinguir de otras dermatosis ampollosas.',
      dx_diferencial: 'Penfigoide ampolloso u otras dermatosis ampollosas autoinmunes (patrón de fragilidad), urticaria solar o erupción polimorfa lumínica (patrón de dolor agudo, aunque estas típicamente no producen el mismo grado de dolor desproporcionado).',
      tx_medico: 'Fotoprotección estricta como medida común a ambos patrones, adaptada a la longitud de onda relevante en cada caso (luz visible en la protoporfiria eritropoyética, requiriendo protectores solares específicos con óxido de zinc/dióxido de titanio en concentración suficiente, o ropa protectora); tratamiento dirigido de la porfiria de base según el tipo específico (ver las tarjetas correspondientes).',
      tx_farmacologico: 'Según el tipo específico de porfiria de base (flebotomía/cloroquina en el patrón de fragilidad; afamelanotida en el patrón de dolor agudo, ver las tarjetas correspondientes); cuidado local de las erosiones y prevención de infección secundaria en el patrón de fragilidad.',
      tx_intervencionista: 'No aplica de forma directa a esta complicación cutánea en sí, más allá del manejo local de las lesiones.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa a esta complicación cutánea en sí.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico.',
      seguimiento_ambulatorio: 'Seguimiento dermatológico periódico para vigilar la cicatrización y prevenir complicaciones (infección secundaria, cicatrización anómala); reforzar educación sobre fotoprotección adaptada a cada patrón.',
      pronostico: 'Favorable con la fotoprotección estricta y el tratamiento dirigido de la porfiria de base; la calidad de vida puede verse significativamente afectada, particularmente en la protoporfiria eritropoyética de inicio en la infancia, si la fotoprotección no es efectiva o consistente.',
      algoritmo: ['Manifestación cutánea fotoinducida → distinguir patrón de fragilidad/ampollas vs. dolor agudo sin ampollas', 'Estudio bioquímico dirigido según el patrón (uroporfirina/porfirinas de 7 carboxilos vs. protoporfirina eritrocitaria)', 'Fotoprotección estricta adaptada a la longitud de onda relevante en cada patrón', 'Tratamiento dirigido de la porfiria de base específica identificada', 'Seguimiento dermatológico para prevenir complicaciones de la cicatrización']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de las porfirias se centra en el manejo urgente de la crisis porfírica aguda cuando ocurre, y en la vigilancia de sus complicaciones neurológicas y metabólicas más temidas.',
    parametros: ['Fuerza muscular y función respiratoria (espirometría seriada si hay debilidad)', 'Sodio sérico seriado', 'Respuesta clínica a la hemina intravenosa', 'Signos vitales (frecuencia cardiaca, presión arterial) por la disautonomía asociada'],
    criterios_uci_general: 'Debilidad motora con amenaza de compromiso respiratorio, convulsiones, hiponatremia grave sintomática, inestabilidad autonómica marcada.',
    criterios_tips_general: 'Considerado únicamente en la hipertensión portal por daño hepático avanzado en la protoporfiria eritropoyética (ver esa tarjeta).',
    criterios_trasplante_general: 'Trasplante hepático en la porfiria aguda intermitente (u otra porfiria hepática aguda) muy grave y refractaria, y en la protoporfiria eritropoyética con daño hepático avanzado (en ocasiones combinado con trasplante de médula ósea); ver las tarjetas correspondientes para el desarrollo completo.',
    prevencion: 'Revisión sistemática de fármacos porfirinogénicos antes de prescribir cualquier medicamento nuevo en un paciente con porfiria hepática aguda conocida; evitar el ayuno prolongado; fotoprotección estricta y consistente en las porfirias cutáneas desde el momento del diagnóstico; asesoría genética familiar en todas las formas hereditarias.'
  }
};

export const compCites = {
  'Porfiria Aguda Intermitente': [1, 2, 11, 12],
  'Otras porfirias hepáticas agudas': [1, 2, 12],
  'Porfiria Cutánea Tarda': [7, 8],
  'Protoporfiria Eritropoyética': [9, 10],
  'Crisis porfírica aguda': [1, 2, 5, 13],
  'Neuropatía y complicaciones neurológicas': [3, 12],
  'Complicaciones hepáticas a largo plazo': [14, 15, 10],
  'Fotosensibilidad y complicaciones cutáneas': [7, 9]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Herramienta ALA/PBG urinario': [1, 4],
  'Clasificación por tipo de porfiria': [6],
  'Gravedad de la crisis aguda': [2, 5]
};
export const escalaCalc = { 'Herramienta ALA/PBG urinario': 'alapbg' };
export const compGroups = [
  { name: 'Porfirias por tipo (enfermedades)', items: ['Porfiria Aguda Intermitente', 'Otras porfirias hepáticas agudas', 'Porfiria Cutánea Tarda', 'Protoporfiria Eritropoyética'] },
  { name: 'Complicaciones transversales', items: ['Crisis porfírica aguda', 'Neuropatía y complicaciones neurológicas', 'Complicaciones hepáticas a largo plazo', 'Fotosensibilidad y complicaciones cutáneas'] }
];
export const complicacionesIntro = 'Las 4 primeras tarjetas cubren los tipos principales de porfiria según la enzima deficiente; las siguientes 4 son complicaciones transversales que pueden surgir sobre cualquiera de ellas (según corresponda a la categoría hepática aguda o cutánea), desde la urgencia de la crisis aguda hasta el riesgo hepático a largo plazo.';
export const categories = ['Definición', 'Diagnóstico', 'Clasificación', 'Complicaciones', 'Calculadoras', 'Bibliografía', 'Quiz'];
export const arbol = {
  root: { label: 'PORFIRIAS', color: '#6b3d5c' },
  branches: [
    { label: 'Hepáticas agudas', color: '#6b3d5c', leaves: ['Porfiria Aguda Intermitente', 'Coproporfiria hereditaria/Porfiria variegata'] },
    { label: 'Cutáneas', color: '#8c6b2d', leaves: ['Porfiria Cutánea Tarda', 'Protoporfiria Eritropoyética'] }
  ]
};
export const diagCites = { laboratorio: [1, 6], no_invasivos: [1] };
export const clasificacionCite = [6];
export const seguimientoCite = [2, 14];
