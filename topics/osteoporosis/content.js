// topics/osteoporosis/content.js: Osteoporosis.
// Cubre el item "Osteoporosis" del cluster Metabolismo (bloque VII, Endocrinologia y Metabolismo)
// del temario. Con este tema queda cerrado el cluster Metabolismo (dislipidemias, obesidad,
// sindrome cardiovascular-renal-metabolico y osteoporosis).
//
// Fuentes principales: guia de la Bone Health and Osteoporosis Foundation; guias de practica
// clinica de la Endocrine Society y de la AACE para la osteoporosis posmenopausica y del varon;
// guia del American College of Rheumatology para la osteoporosis inducida por glucocorticoides;
// posicionamientos de la ISCD sobre densitometria; y los ensayos FREEDOM, ARCH y FRAME.
//
// NOTA sobre FRAX: sus coeficientes no son publicos y su calibracion es especifica de cada pais,
// asi que NO se reproduce. La calculadora de densitometria acepta el resultado de FRAX
// introducido a mano desde la herramienta oficial. Mismo criterio que con Martin-Hopkins en
// `dislipidemias` y con PREVENT en `sindrome-cardiovascular-renal-metabolico`.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 3 formas (posmenopausica, del varon, secundaria incluida la inducida por
// glucocorticoides) + 3 complicaciones (fractura por fragilidad; osteonecrosis mandibular y
// fractura femoral atipica; rebote tras suspender denosumab). 2 calculadoras, 3 figuras.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'osteoporosis',
  titulo: 'Osteoporosis',
  subtitulo: 'Módulo 42 · Medicina Interna',
  accent: '#7a6a55',
  accentDim: '#bfb5a3'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const remodeladoHtml = `
<div style="max-width:620px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;gap:8px;flex-wrap:wrap;">
    <div style="flex:1;min-width:250px;border:1px solid #8c3a34;border-radius:8px;padding:7px 10px;background:#8c3a3410;">
      <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">Osteoclasto: resorbe hueso</div>
      <div style="color:var(--ink-dim);">El osteoblasto produce <strong>RANKL</strong>, que al unirse al receptor <strong>RANK</strong> del precursor osteoclastico lo activa y lo hace madurar. La <strong>osteoprotegerina</strong>, también de origen osteoblastico, es el senuelo que secuestra RANKL y frena la resorción. El estrogeno mantiene alta la osteoprotegerina: al perderse en la menopausia, RANKL queda libre y la resorción se dispara.</div>
      <div style="margin-top:5px;padding:4px 7px;border:1px solid #8c3a34;border-radius:6px;background:var(--panel2);"><strong style="color:#8c3a34;">Aquí actuan los antirresortivos:</strong> el <strong>denosumab</strong> es un anticuerpo contra RANKL (hace de osteoprotegerina artificial) y los <strong>bisfosfonatos</strong> se fijan a la hidroxiapatita y envenenan al osteoclasto que la resorbe.</div>
    </div>
    <div style="flex:1;min-width:250px;border:1px solid #3f6b52;border-radius:8px;padding:7px 10px;background:#3f6b5210;">
      <div style="font-weight:700;color:#3f6b52;margin-bottom:3px;">Osteoblasto: forma hueso</div>
      <div style="color:var(--ink-dim);">La via <strong>Wnt</strong> impulsa la diferenciación y la actividad del osteoblasto. El osteocito, atrapado en la matriz, la frena secretando <strong>esclerostina</strong>: es el freno fisiológico de la formación ósea. La <strong>parathormona</strong> administrada de forma intermitente, al contrario que la elevada de forma continua, estimula la formación.</div>
      <div style="margin-top:5px;padding:4px 7px;border:1px solid #3f6b52;border-radius:6px;background:var(--panel2);"><strong style="color:#3f6b52;">Aquí actuan los anabólicos:</strong> la <strong>teriparatida</strong> y la <strong>abaloparatida</strong> imitan el pulso de parathormona, y el <strong>romosozumab</strong> bloquea la esclerostina (quita el freno) y además reduce algo la resorción.</div>
    </div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">Todo el arsenal terapéutico se entiende desde este esquema: o se frena al osteoclasto (antirresortivos) o se estimula al osteoblasto (anabólicos). Y explica también el fenómeno de rebote del denosumab: al retirarlo, el RANKL acumulado queda de golpe sin bloqueo y la resorción se dispara.</div>
</div>`;

const dxaHtml = `
<div style="max-width:600px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:6px;">
    <div style="flex:1;min-width:250px;border:1px solid #3d5a73;border-radius:8px;padding:7px 10px;background:#3d5a7310;">
      <div style="font-weight:700;color:#3d5a73;">Puntuación T</div>
      <div style="color:var(--ink-dim);margin-top:2px;">Compara con el <strong>adulto joven sano</strong> del mismo sexo. Es la que define la osteoporosis por densitometría. Se usa en <strong>mujeres posmenopáusicas y varones de 50 anos o más</strong>.</div>
    </div>
    <div style="flex:1;min-width:250px;border:1px solid #6b3a5a;border-radius:8px;padding:7px 10px;background:#6b3a5a10;">
      <div style="font-weight:700;color:#6b3a5a;">Puntuación Z</div>
      <div style="color:var(--ink-dim);margin-top:2px;">Compara con la <strong>población de la misma edad y sexo</strong>. Se usa en <strong>mujeres premenopausicas, varones menores de 50 anos y ninos</strong>. Un valor de -2.0 o menor se informa como "por debajo del rango esperado para la edad" y <strong>obliga a buscar causa secundaria</strong>.</div>
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:6px;padding:4px 7px;font-weight:700;color:#3f6b52;text-align:center;">T de -1.0 o mayor</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:4px 8px;color:var(--ink-dim);">Densidad mineral ósea normal</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:6px;padding:4px 7px;font-weight:700;color:#8a6a1f;text-align:center;">T entre -1.0 y -2.5</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:4px 8px;color:var(--ink-dim);">Masa ósea baja (osteopenia). Aquí es donde el FRAX decide: se trata si el riesgo a 10 anos es de 3% o más para cadera, o de 20% o más para fractura mayor</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:6px;padding:4px 7px;font-weight:700;color:#8c3a34;text-align:center;">T de -2.5 o menor</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:4px 8px;color:var(--ink-dim);">Osteoporosis. Indicación de tratamiento farmacológico sin necesidad de calcular el FRAX</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;">
      <div style="background:#7a1f3d22;border:1px solid #7a1f3d;border-radius:6px;padding:4px 7px;font-weight:700;color:#7a1f3d;text-align:center;">Fractura por fragilidad</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:4px 8px;color:var(--ink-dim);">Una fractura de <strong>cadera o vértebra</strong> por traumatismo menor diagnóstica osteoporosis <strong>con independencia de la densitometría</strong>, incluso con T normal</div>
    </div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">Se miden columna lumbar (L1-L4), cuello femoral y cadera total, y se usa <strong>el peor de los tres</strong>. El radio al 33% se reserva para cuando los otros no son valorables (hiperparatiroidismo, obesidad extrema, prótesis). Cuidado con la columna del anciano: la artrosis, las calcificaciones aórticas y las fracturas vertebrales previas <strong>sobreestiman</strong> la densidad y hacen parecer normal un hueso que no lo es.</div>
</div>`;

const escalonHtml = `
<div style="max-width:620px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="border:1px solid #7a6a55;background:#7a6a5518;border-radius:8px;padding:6px 10px;margin-bottom:6px;"><strong style="color:#7a6a55;">Base en todos.</strong> Calcio 1000 a 1200 mg/dia (de preferencia con la dieta) y vitamina D 800 a 1000 UI/dia; ejercicio de carga y de fuerza; prevención de caídas; abandono del tabaco y moderacion del alcohol; y corrección de las causas secundarias.</div>
  <div style="display:flex;gap:8px;flex-wrap:wrap;">
    <div style="flex:1;min-width:250px;border:1px solid #3d5a73;border-radius:8px;padding:7px 10px;">
      <div style="font-weight:700;color:#3d5a73;margin-bottom:3px;">Riesgo alto: empezar por antirresortivo</div>
      <ul style="margin:0;padding-left:15px;line-height:1.55;color:var(--ink-dim);">
        <li><strong>Bisfosfonato</strong> de primera línea: alendronato o risedronato orales, o ácido zoledrónico intravenoso anual. Contraindicados con filtrado glomerular por debajo de 30 a 35.</li>
        <li><strong>Denosumab</strong> si hay enfermedad renal o intolerancia digestiva: 60 mg subcutáneos cada 6 meses, sin ajuste por función renal.</li>
      </ul>
    </div>
    <div style="flex:1;min-width:250px;border:1px solid #8c3a34;border-radius:8px;padding:7px 10px;">
      <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">Riesgo muy alto: empezar por anabólico</div>
      <ul style="margin:0;padding-left:15px;line-height:1.55;color:var(--ink-dim);">
        <li><strong>Teriparatida</strong> o <strong>abaloparatida</strong> subcutáneas diarias, hasta 2 anos.</li>
        <li><strong>Romosozumab</strong> 210 mg subcutáneos al mes durante 12 meses. <strong>No usar si ha habido infarto o ictus en el ano previo</strong> (aviso del estudio ARCH).</li>
        <li>Riesgo muy alto: fractura vertebral o de cadera reciente, fracturas múltiples, T muy bajo, o fractura mientras se recibia tratamiento.</li>
      </ul>
    </div>
  </div>
  <div style="border:1px solid #3f6b52;background:#3f6b5218;border-radius:8px;padding:6px 10px;margin-top:6px;"><strong style="color:#3f6b52;">La secuencia importa, y se hace mal a menudo.</strong> El <strong>anabólico primero y el antirresortivo después</strong> gana más densidad que el orden inverso: empezar por un antirresortivo embota la respuesta al anabólico posterior. Y <strong>todo anabólico debe ir seguido de un antirresortivo</strong>, porque lo ganado se pierde en meses si no se consolida.</div>
  <div style="border:1px solid #8a6a1f;background:#8a6a1f18;border-radius:8px;padding:6px 10px;margin-top:5px;"><strong style="color:#8a6a1f;">Vacaciones terapéuticas: solo para bisfosfonatos.</strong> Tras 5 anos de bisfosfonato oral o 3 de intravenoso, si el riesgo ya no es alto, se puede pausar 2 a 3 anos con reevaluación periódica. <strong>NUNCA se aplica al denosumab</strong>: suspenderlo sin pasar a un bisfosfonato provoca un rebote con fracturas vertebrales múltiples.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La osteoporosis es una enfermedad esquelética caracterizada por una <strong>masa ósea baja y un deterioro de la microarquitectura</strong> del hueso, que aumentan su fragilidad y el riesgo de fractura. Es una enfermedad silente hasta que se rompe algo: su única manifestación clínica es la fractura, y por eso el objetivo del diagnóstico y del tratamiento es prevenirla, no normalizar un número.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El hueso se renueva toda la vida.</strong></p>
${figBlock('Figura 1', 'Remodelado óseo y donde actúa cada fármaco', remodeladoHtml)}
<p style="margin:0 0 12px;">El hueso esta en remodelado continuo: el osteoclasto resorbe y el osteoblasto forma, en unidades acopladas. Hasta los 30 anos aproximadamente se acumula el <strong>pico de masa ósea</strong>, determinado en gran parte por la genética pero también por la nutrición y la actividad física de la infancia y la adolescencia; después se pierde de forma lenta y constante. En la mujer, la caída de estrógenos de la menopausia acelera bruscamente esa pérdida durante unos anos, porque el estrogeno mantenia alta la osteoprotegerina que frenaba al osteoclasto. Entender el eje RANK-RANKL-osteoprotegerina y el freno de la esclerostina es lo que hace comprensibles el denosumab y el romosozumab.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se diagnostica: no solo con la densitometría.</strong></p>
${figBlock('Figura 2', 'Interpretación de la densitometría y umbrales de diagnóstico', dxaHtml)}
<p style="margin:0 0 12px;">Hay <strong>dos caminos al diagnóstico</strong> y conviene tenerlos claros porque el segundo se olvida. El primero es densitometrico: una puntuación T de -2.5 o menor en columna lumbar, cuello femoral o cadera total. El segundo es <strong>clínico</strong>: una fractura por fragilidad de cadera o de vértebra (por un traumatismo de baja energía, como una caída desde la propia altura) diagnóstica osteoporosis <strong>aunque la densitometría sea normal</strong>. Y en la zona intermedia de masa ósea baja, la decisión de tratar la toma el <strong>FRAX</strong>, que estima el riesgo de fractura a 10 anos e integra factores que la densitometría no ve.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">A quien se le hace densitometría.</strong></p>
<p style="margin:0 0 12px;">A todas las <strong>mujeres a partir de los 65 anos</strong> y a los <strong>varones a partir de los 70</strong>; a las mujeres posmenopáusicas y a los varones de 50 a 69 anos con factores de riesgo; y a <strong>cualquier persona de 50 anos o más que sufra una fractura por fragilidad</strong>. También ante el hallazgo de una fractura vertebral en una radiografía pedida por otro motivo, ante el inicio previsto de glucocorticoides prolongados, y ante cualquier enfermedad o fármaco que se sepa que dana el hueso.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Siempre hay que buscar causas secundarias.</strong></p>
<p style="margin:0 0 12px;">Antes de etiquetar una osteoporosis como primaria hay que descartar lo que se puede corregir. El estudio mínimo incluye calcio, fósforo, fosfatasa alcalina, creatinina con filtrado glomerular, <strong>25-hidroxivitamina D</strong>, hormona paratiroidea, TSH, proteinograma con inmunofijación y calcio en orina de 24 horas; en el varón se anade la testosterona. La causa secundaria más frecuente con diferencia es el <strong>tratamiento con glucocorticoides</strong>, y la obligacion de buscar causas es tanto mayor cuanto más joven es el paciente o más baja la puntuación Z.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El tratamiento y el orden en que se da.</strong></p>
${figBlock('Figura 3', 'Escalonamiento terapéutico y la secuencia anabólico-antirresortivo', escalonHtml)}
<p style="margin:0 0 12px;">Sobre una base de calcio, vitamina D, ejercicio de carga y de fuerza y prevención de caídas, el tratamiento farmacológico se elige por el nivel de riesgo. Dos reglas concentran la mayor parte de los errores que se cometen en la práctica: la <strong>secuencia</strong> (el anabólico rinde más si va primero, y siempre debe consolidarse después con un antirresortivo) y el <strong>denosumab</strong> (nunca se suspende sin pasar a un bisfosfonato, porque el rebote produce fracturas vertebrales múltiples).</p>

<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> Las fichas de este tema son las tres formas de la enfermedad (posmenopáusica, del varón y secundaria, incluida la inducida por glucocorticoides) y tres complicaciones: la fractura por fragilidad, que es la manifestación misma de la enfermedad; las complicaciones raras del tratamiento antirresortivo (osteonecrosis mandibular y fractura femoral atípica), que se temen mucho más de lo que su frecuencia justifica; y el rebote tras suspender el denosumab, que es infrecuente pero evitable y grave.</p>`;

export const bibliografia = [
  'LeBoff MS, Greenspan SL, Insogna KL, et al. The clinician guide to prevention and treatment of osteoporosis (Bone Health and Osteoporosis Foundation). Osteoporos Int. 2022;33(10):2049-2102.',
  'Shoback D, Rosen CJ, Black DM, et al. Pharmacological management of osteoporosis in postmenopausal women: an Endocrine Society guideline update. J Clin Endocrinol Metab. 2020;105(3):587-594.',
  'Eastell R, Rosen CJ, Black DM, et al. Pharmacological management of osteoporosis in postmenopausal women: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2019;104(5):1595-1622.',
  'Watts NB, Adler RA, Bilezikian JP, et al. Osteoporosis in men: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2012;97(6):1802-1822.',
  'Humphrey MB, Russell L, Danila MI, et al. 2022 American College of Rheumatology guideline for the prevention and treatment of glucocorticoid-induced osteoporosis. Arthritis Rheumatol. 2023;75(12):2088-2102.',
  'Camacho PM, Petak SM, Binkley N, et al. American Association of Clinical Endocrinologists and American College of Endocrinology clinical practice guidelines for the diagnosis and treatment of postmenopausal osteoporosis: 2020 update. Endocr Pract. 2020;26(Suppl 1):1-46.',
  'Kanis JA, Johnell O, Oden A, Johansson H, McCloskey E. FRAX and the assessment of fracture probability in men and women from the UK. Osteoporos Int. 2008;19(4):385-397.',
  'Cummings SR, San Martin J, McClung MR, et al. Denosumab for prevention of fractures in postmenopausal women with osteoporosis (FREEDOM). N Engl J Med. 2009;361(8):756-765.',
  'Cosman F, Crittenden DB, Adachi JD, et al. Romosozumab treatment in postmenopausal women with osteoporosis (FRAME). N Engl J Med. 2016;375(16):1532-1543.',
  'Saag KG, Petersen J, Brandi ML, et al. Romosozumab or alendronate for fracture prevention in women with osteoporosis (ARCH). N Engl J Med. 2017;377(15):1417-1427.',
  'Neer RM, Arnaud CD, Zanchetta JR, et al. Effect of parathyroid hormone (1-34) on fractures and bone mineral density in postmenopausal women with osteoporosis. N Engl J Med. 2001;344(19):1434-1441.',
  'Leder BZ, Tsai JN, Uihlein AV, et al. Denosumab and teriparatide transitions in postmenopausal osteoporosis (the DATA-Switch study). Lancet. 2015;386(9999):1147-1155.',
  'Cummings SR, Ferrari S, Eastell R, et al. Vertebral fractures after discontinuation of denosumab: a post hoc analysis of the randomized placebo-controlled FREEDOM trial and its extension. J Bone Miner Res. 2018;33(2):190-198.',
  'Tsourdi E, Zillikens MC, Meier C, et al. Fracture risk and management of discontinuation of denosumab therapy: a systematic review and position statement by ECTS. J Clin Endocrinol Metab. 2021;106(1):264-281.',
  'Black DM, Schwartz AV, Ensrud KE, et al. Effects of continuing or stopping alendronate after 5 years of treatment (FLEX). JAMA. 2006;296(24):2927-2938.',
  'Adler RA, El-Hajj Fuleihan G, Bauer DC, et al. Managing osteoporosis in patients on long-term bisphosphonate treatment: report of a task force of the ASBMR. J Bone Miner Res. 2016;31(1):16-35.',
  'Ruggiero SL, Dodson TB, Aghaloo T, et al. American Association of Oral and Maxillofacial Surgeons position paper on medication-related osteonecrosis of the jaw: 2022 update. J Oral Maxillofac Surg. 2022;80(5):920-943.',
  'Shane E, Burr D, Abrahamsen B, et al. Atypical subtrochanteric and diaphyseal femoral fractures: second report of a task force of the ASBMR. J Bone Miner Res. 2014;29(1):1-23.',
  'Compston JE, McClung MR, Leslie WD. Osteoporosis. Lancet. 2019;393(10169):364-376.',
  'Bouxsein ML, Eastell R, Lui LY, et al. Change in bone density and reduction in fracture risk: a meta-regression of published trials. J Bone Miner Res. 2019;34(4):632-642.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Osteoporosis silente (antes de la fractura)',
      tituloB: 'Osteoporosis con fractura por fragilidad',
      compensada: 'Asintomática por completo. No duele, no se palpa y no da signos: se detecta únicamente por cribado densitometrico o al calcular el riesgo en una persona con factores. La pérdida de talla progresiva (más de 4 cm respecto de la talla máxima referida, o más de 2 cm en mediciones sucesivas) y la cifosis dorsal creciente son las únicas pistas exploratorias, y ya sugieren fracturas vertebrales que han pasado desapercibidas.',
      descompensada: 'La fractura por fragilidad es la manifestación de la enfermedad. La vertebral es la más frecuente y hasta dos tercios son <strong>asintomáticas</strong>, descubiertas en una radiografía pedida por otro motivo; cuando duelen, producen dolor dorsal o lumbar agudo tras un esfuerzo mínimo. La de cadera es la más grave: dolor inguinal con impotencia funcional y acortamiento con rotación externa, y conlleva una mortalidad al ano del 20 al 30%. También son típicas la de muneca (Colles) y la de humero proximal.'
    },
    laboratorio: [
      { prueba: 'Calcio, fósforo, fosfatasa alcalina y albúmina', utilidad: 'Cribado básico del metabolismo óseo. Un calcio alto orienta a hiperparatiroidismo primario o a neoplasia; una fosfatasa alcalina elevada, a osteomalacia, enfermedad de Paget o metástasis.' },
      { prueba: '25-hidroxivitamina D', utilidad: 'Su déficit es muy prevalente y hay que corregirlo antes de iniciar un antirresortivo potente, sobre todo el ácido zoledrónico o el denosumab, para no provocar una hipocalcemia grave. Objetivo habitual de 30 ng/mL o más.' },
      { prueba: 'Hormona paratiroidea', utilidad: 'Distingue el hiperparatiroidismo primario (con calcio alto) del secundario por déficit de vitamina D o por enfermedad renal (con calcio normal o bajo).' },
      { prueba: 'Creatinina con filtrado glomerular estimado', utilidad: 'Condiciona la elección: los bisfosfonatos están contraindicados por debajo de 30 a 35 mL/min/1.73 m2, mientras que el denosumab no requiere ajuste, aunque con mayor riesgo de hipocalcemia en la enfermedad renal avanzada.' },
      { prueba: 'TSH', utilidad: 'El hipertiroidismo, incluido el subclínico y el yatrogeno por exceso de levotiroxina, acelera la pérdida ósea y es una causa secundaria corregible que se pasa por alto con frecuencia.' },
      { prueba: 'Proteinograma con inmunofijación y cadenas ligeras libres', utilidad: 'Descarta el mieloma múltiple, que puede debutar como fracturas vertebrales por fragilidad y cuyo tratamiento no tiene nada que ver con el de la osteoporosis.' },
      { prueba: 'Calcio en orina de 24 horas', utilidad: 'Una hipercalciuria sugiere pérdida renal de calcio o hipercalciuria idiopática; una hipocalciuria orienta a malabsorción (celiaquía) o a déficit de vitamina D no corregido.' },
      { prueba: 'Testosterona total matutina en el varón', utilidad: 'El hipogonadismo es la causa secundaria más frecuente de osteoporosis en el varón, y con frecuencia es yatrogeno (terapia de deprivación androgenica en el cáncer de próstata).' }
    ],
    no_invasivos: [
      { metodo: 'Densitometría ósea de doble energía (DXA) (calculadora disponible)', interpretacion: 'Mide la densidad mineral ósea en columna lumbar, cuello femoral y cadera total. Se usa la puntuación T en mujeres posmenopáusicas y varones de 50 anos o más, y la puntuación Z en premenopausicas, varones menores de 50 y ninos.', cutoff: 'T de -1.0 o mayor normal; entre -1.0 y -2.5 masa ósea baja; -2.5 o menor osteoporosis. Z de -2.0 o menor: por debajo del rango esperado para la edad, obliga a buscar causa secundaria' },
      { metodo: 'FRAX (herramienta oficial en línea)', interpretacion: 'Estima la probabilidad a 10 anos de fractura mayor osteoporotica y de cadera a partir de factores clínicos, con o sin la densidad del cuello femoral. Sus coeficientes no son publicos y su calibración es por pais, por lo que se usa la herramienta oficial y su resultado se introduce a mano en la calculadora de este tema.', cutoff: 'Umbrales habituales de tratamiento en masa ósea baja: 3% o más para cadera, o 20% o más para fractura mayor osteoporotica' },
      { metodo: 'Trabecular bone score (TBS)', interpretacion: 'Analiza la textura de la imagen de columna lumbar y aporta información sobre la microarquitectura que la densidad no captura; ajusta el FRAX y es especialmente útil en la diabetes tipo 2, donde la densidad sobreestima la resistencia ósea.', cutoff: 'Valores bajos indican microarquitectura degradada con densidad aparentemente conservada' },
      { metodo: 'Medición de la talla y valoración del riesgo de caídas', interpretacion: 'La pérdida de talla sugiere fracturas vertebrales silentes. La valoración de caídas (marcha, equilibrio, visión, fármacos sedantes, ortostatismo) es tan determinante del riesgo de fractura como la propia densidad ósea.', cutoff: 'Pérdida de más de 4 cm respecto de la talla máxima, o de más de 2 cm entre mediciones: indicar imagen vertebral' },
      { metodo: 'Marcadores de remodelado óseo (CTX y P1NP)', interpretacion: 'No sirven para el diagnóstico. Se usan para valorar la adherencia y la respuesta precoz al tratamiento (el CTX cae con los antirresortivos y el P1NP sube con los anabólicos) y en el seguimiento tras suspender el denosumab.', cutoff: 'Sin umbrales diagnósticos; se interpreta el cambio respecto del basal' }
    ],
    imagen: [
      { modalidad: 'Radiografía lateral de columna dorsal y lumbar, o evaluación vertebral por DXA', hallazgos: 'Detecta las fracturas vertebrales, que en dos tercios de los casos son asintomáticas y que por si solas ya indican tratamiento. Se pide ante pérdida de talla, cifosis, dolor dorsal o uso de glucocorticoides.' },
      { modalidad: 'Radiografía simple del hueso doloroso', hallazgos: 'Primera prueba ante sospecha de fractura. En la fractura de cadera puede ser normal al inicio: si la sospecha clínica es alta, se completa con resonancia o tomografía.' },
      { modalidad: 'Resonancia magnética', hallazgos: 'Diferencia la fractura vertebral aguda de la antigua (edema en la aguda) y la fractura osteoporotica de la patológica por tumor o infección; detecta la fractura de cadera oculta.' },
      { modalidad: 'Radiografía de fémur bilateral', hallazgos: 'Ante dolor en muslo o ingle en un paciente con antirresortivo prolongado: busca la fractura femoral atípica, que es subtrocanterica o diafisaria, transversa y bilateral en cerca de un tercio de los casos.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La osteoporosis se clasifica por su <strong>origen</strong> (primaria posmenopáusica o senil, frente a secundaria a una enfermedad o a un fármaco), por su <strong>gravedad densitometrica</strong> (puntuación T, con la categoría de osteoporosis establecida o grave cuando ya hay fractura) y, sobre todo, por el <strong>nivel de riesgo de fractura</strong>, que es lo que determina si se trata, con que y en que orden. Esa estratificación en riesgo alto frente a muy alto es la decisión clínica central del tema.`,
    escalas: [
      { nombre: 'Criterios densitometricos de la OMS (calculadora disponible)', componentes: 'Puntuación T en columna lumbar, cuello femoral o cadera total.', formula: 'Número de desviaciones estándar respecto del adulto joven sano del mismo sexo; se toma el peor de los tres sitios.', interpretacion: 'T de -1.0 o mayor: normal. Entre -1.0 y -2.5: masa ósea baja (osteopenia). De -2.5 o menor: osteoporosis. Osteoporosis establecida o grave si además hay una fractura por fragilidad.' },
      { nombre: 'Puntuación Z y sospecha de causa secundaria', componentes: 'Puntuación Z, comparada con la población de la misma edad y sexo.', formula: 'Se usa en mujeres premenopausicas, varones menores de 50 anos y ninos.', interpretacion: 'Un valor de -2.0 o menor se informa como por debajo del rango esperado para la edad y obliga a un estudio de causas secundarias. En estos grupos no se usa el termino osteoporosis basándose solo en la densitometría.' },
      { nombre: 'FRAX y umbrales de tratamiento', componentes: 'Edad, sexo, índice de masa corporal, fractura previa, fractura de cadera en los padres, tabaquismo, glucocorticoides, artritis reumatoide, osteoporosis secundaria y alcohol; con o sin densidad del cuello femoral.', formula: 'Probabilidad a 10 anos de fractura mayor osteoporotica y de fractura de cadera. Se calcula con la herramienta oficial, específica de cada pais.', interpretacion: 'En masa ósea baja, umbrales habituales de tratamiento: 3% o más para cadera, o 20% o más para fractura mayor. Con T de -2.5 o menor, o con fractura de cadera o vértebra, se trata sin necesidad de calcularlo.' },
      { nombre: 'Estratificación en riesgo alto frente a muy alto', componentes: 'Antecedente y recencia de la fractura, número de fracturas, puntuación T y fractura durante el tratamiento.', formula: 'Clasificación clínica que determina si se empieza por un antirresortivo o por un anabólico.', interpretacion: 'Riesgo muy alto: fractura vertebral o de cadera reciente (sobre todo en los 12 a 24 meses previos), fracturas múltiples, puntuación T muy baja, o fractura sufrida mientras se recibia tratamiento. En ese caso se empieza por un anabólico y se consolida después con un antirresortivo.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Osteoporosis posmenopáusica',
      color: '#7a6a55',
      definicion: 'Forma más frecuente de osteoporosis primaria: pérdida acelerada de masa ósea que sigue a la caída de estrógenos de la menopausia, sobre la que después se superpone la pérdida senil ligada a la edad. Afecta de forma preferente al hueso trabecular, de ahi el predominio de las fracturas vertebrales y de muneca en los primeros anos.',
      fisiopatologia: 'El estrogeno mantiene alta la producción osteoblástica de osteoprotegerina, el senuelo que secuestra RANKL e impide que active al osteoclasto. Al perderse en la menopausia, RANKL queda libre, la resorción se acelera y el remodelado se desacopla: se resorbe más de lo que se forma. La pérdida es rápida en los primeros 5 a 10 anos posmenopausicos y después se enlentece hasta el ritmo de la pérdida senil. Ver la Figura 1 de Definición.',
      epidemiologia: 'Alrededor de una de cada tres mujeres mayores de 50 anos sufrira una fractura por fragilidad a lo largo de su vida. La prevalencia aumenta con la edad y la enfermedad esta muy infradiagnosticada e infratratada, incluso después de una fractura.',
      factores_riesgo: ['Edad avanzada y menopausia precoz o quirúrgica', 'Antecedente personal de fractura por fragilidad', 'Fractura de cadera en los padres', 'Índice de masa corporal bajo y pérdida de peso', 'Tabaquismo y consumo de alcohol de 3 o más unidades al dia', 'Glucocorticoides y otros fármacos que danan el hueso', 'Inmovilidad y sarcopenia', 'Ingesta insuficiente de calcio y déficit de vitamina D', 'Origen etnico y antecedente familiar'],
      clinica: 'Silente hasta la fractura. La pérdida de talla y la cifosis dorsal progresiva son las únicas pistas exploratorias y sugieren fracturas vertebrales ya establecidas, la mayoría de ellas asintomáticas.',
      criterios_dx: 'Puntuación T de -2.5 o menor en columna lumbar, cuello femoral o cadera total; o una fractura por fragilidad de cadera o vértebra con independencia de la densitometría; o masa ósea baja con un FRAX por encima de los umbrales de tratamiento. Siempre tras descartar causas secundarias.',
      laboratorio: 'Panel de causas secundarias: calcio, fósforo, fosfatasa alcalina, creatinina con filtrado, 25-hidroxivitamina D, hormona paratiroidea, TSH, proteinograma con inmunofijación y calcio en orina de 24 horas.',
      imagen: 'Densitometría y, ante pérdida de talla, cifosis o dolor dorsal, imagen vertebral por radiografía lateral o evaluación vertebral por DXA.',
      complementarios: 'Valoración del riesgo de caídas (marcha, equilibrio, visión, ortostatismo, fármacos sedantes), que determina el riesgo de fractura tanto como la densidad ósea; y revisión odontologica antes de iniciar un antirresortivo potente.',
      dx_diferencial: 'Osteomalacia (fosfatasa alcalina alta, vitamina D muy baja, dolor óseo difuso), mieloma múltiple, metástasis óseas, hiperparatiroidismo primario, enfermedad de Paget y osteogenesis imperfecta leve del adulto.',
      tx_medico: 'Base en todas: calcio de 1000 a 1200 mg al dia de preferencia con la dieta, y vitamina D de 800 a 1000 UI al dia (calculadora disponible); ejercicio de carga y de fuerza con trabajo de equilibrio; prevención de caídas; abandono del tabaco y moderacion del alcohol; y corrección de las causas secundarias antes de iniciar el fármaco.',
      tx_farmacologico: `Riesgo alto: bisfosfonato de primera línea (alendronato o risedronato orales, o ácido zoledrónico intravenoso anual), o denosumab si hay enfermedad renal o intolerancia digestiva. Riesgo muy alto (fractura vertebral o de cadera reciente, fracturas múltiples, T muy bajo, o fractura durante el tratamiento): empezar por un <strong>anabólico</strong> (teriparatida, abaloparatida o romosozumab) y consolidar después con un antirresortivo. El romosozumab no se usa si ha habido infarto o ictus en el ano previo. Ver la Figura 3 de Definición.`,
      tx_intervencionista: 'Vertebroplastia o cifoplastia solo en casos seleccionados de fractura vertebral con dolor refractario al tratamiento conservador; su beneficio es discutido y no previene nuevas fracturas.',
      criterios_uci: 'No aplica a la osteoporosis en si; la fractura de cadera puede requerir cuidados intermedios en el anciano frágil con comorbilidad.',
      criterios_tips: 'La adherencia es el talón de Aquiles: más de la mitad de las pacientes abandona el bisfosfonato oral en el primer ano, lo que hace preferibles las pautas anual o semestral en muchas de ellas.',
      seguimiento_hospitalario: 'Ante un ingreso por fractura por fragilidad, no dar el alta sin diagnóstico de osteoporosis, estudio de causas secundarias iniciado y tratamiento pautado o citado: es la oportunidad que más se pierde.',
      seguimiento_ambulatorio: 'Densitometría de control a los 1 a 2 anos de iniciar o cambiar el tratamiento y después cada 2 anos; medición anual de la talla; revisión de la adherencia en cada visita. Valorar vacaciones terapéuticas tras 5 anos de bisfosfonato oral o 3 de intravenoso si el riesgo ya no es alto, nunca con denosumab.',
      pronostico: 'El tratamiento reduce el riesgo de fractura vertebral entre un 40 y un 70% y el de cadera alrededor de un 40% con los fármacos más potentes. El pronóstico lo empeoran la falta de adherencia y, sobre todo, no tratar después de una primera fractura.',
      algoritmo: ['Cribar con densitometría a las mujeres desde los 65 anos, antes si hay factores de riesgo, y a cualquier persona de 50 o más con fractura por fragilidad', 'Diagnosticar por T de -2.5 o menor, por fractura de cadera o vértebra, o por FRAX por encima del umbral en masa ósea baja', 'Descartar causas secundarias con el panel mínimo y corregir el déficit de vitamina D antes de iniciar el antirresortivo', 'Riesgo alto: bisfosfonato (o denosumab si hay enfermedad renal). Riesgo muy alto: anabólico primero y antirresortivo después', 'Densitometría de control a los 1 a 2 anos, vigilar la adherencia y valorar vacaciones terapéuticas solo con bisfosfonatos']
    },
    {
      nombre: 'Osteoporosis del varón',
      color: '#3d5a73',
      definicion: 'Osteoporosis en el hombre, infradiagnosticada e infratratada pese a que las fracturas que produce tienen peor pronóstico que en la mujer. A diferencia de la posmenopáusica, en el varón una proporción mucho mayor de los casos (hasta la mitad o más) es <strong>secundaria</strong>, por lo que la búsqueda de causas no es opcional.',
      fisiopatologia: 'El varón alcanza un pico de masa ósea mayor y no tiene un equivalente de la caída brusca de estrógenos, de modo que su pérdida es más gradual y sus fracturas ocurren más tarde. Cuando aparece osteoporosis antes de tiempo suele haber una causa: hipogonadismo (que reduce también los estrógenos derivados de la aromatización, que son los que más importan para el hueso masculino), alcohol, glucocorticoides o una enfermedad sistémica.',
      epidemiologia: 'Uno de cada cinco varones mayores de 50 anos sufrira una fractura por fragilidad. La mortalidad al ano tras una fractura de cadera es mayor en el varón que en la mujer, y aun así se le hace densitometría y se le trata con mucha menor frecuencia.',
      factores_riesgo: ['Hipogonadismo, incluida la terapia de deprivación androgenica en el cáncer de próstata', 'Consumo excesivo de alcohol', 'Tabaquismo', 'Glucocorticoides y otros fármacos que danan el hueso', 'Enfermedad pulmonar obstructiva crónica', 'Enfermedad renal crónica y hepatopatía', 'Antecedente de fractura por fragilidad', 'Hipercalciuria y nefrolitiasis de repetición', 'Edad avanzada y bajo índice de masa corporal'],
      clinica: 'Igual que en la mujer: silente hasta la fractura, con pérdida de talla y cifosis como pistas. Puede haber síntomas de la causa secundaria (hipogonadismo con disminución de la libido y de la masa muscular, síntomas de hepatopatía o de malabsorción).',
      criterios_dx: 'En varones de 50 anos o más se usa la puntuación T con los mismos umbrales que en la mujer; en menores de 50 se usa la puntuación Z y no se etiqueta de osteoporosis solo por la densitometría. Una fractura por fragilidad de cadera o vértebra diagnóstica la enfermedad con independencia de la densidad.',
      laboratorio: 'El panel general más, de forma obligada, <strong>testosterona total matutina</strong> (repetida si esta baja, con LH y FSH para localizar el nivel del fallo), y con umbral bajo para solicitar serología de celiaquía, ferritina con índice de saturación (hemocromatosis) y cortisol libre urinario.',
      imagen: 'Densitometría e imagen vertebral con los mismos criterios que en la mujer; radiografía dirigida ante dolor óseo.',
      complementarios: 'Valoración del riesgo de caídas y revisión de la medicación. En el varón en terapia de deprivación androgenica, densitometría basal y tratamiento preventivo desde el inicio.',
      dx_diferencial: 'Mieloma múltiple y metástasis óseas (más frecuentes como causa de fractura vertebral en el varón), osteomalacia, hemocromatosis, hiperparatiroidismo primario y mastocitosis sistémica.',
      tx_medico: 'La misma base que en la mujer, con énfasis en corregir la causa secundaria: abstinencia de alcohol, tratamiento del hipogonadismo cuando esta indicado, y control de la enfermedad de base.',
      tx_farmacologico: 'Los bisfosfonatos, el denosumab, la teriparatida y la abaloparatida han demostrado aumentar la densidad y reducir fracturas en el varón, con la misma lógica de estratificación por riesgo que en la mujer. La testosterona no es un tratamiento de la osteoporosis: se indica por el hipogonadismo en si, y si el riesgo de fractura es alto se anade un fármaco específico.',
      tx_intervencionista: 'Igual que en la mujer; la fractura de cadera exige cirugía precoz, idealmente en las primeras 24 a 48 horas.',
      criterios_uci: 'No aplica de forma directa.',
      criterios_tips: 'Que la osteoporosis se perciba como una enfermedad de mujeres es la principal razón de su infradiagnostico en el varón: conviene pedir densitometría tras cualquier fractura por fragilidad, también en ellos.',
      seguimiento_hospitalario: 'Igual que en la mujer: no dar el alta tras una fractura por fragilidad sin diagnóstico, estudio de causas secundarias y tratamiento pautado.',
      seguimiento_ambulatorio: 'Densitometría de control a los 1 a 2 anos, seguimiento de la causa secundaria, y en el paciente en deprivación androgenica, vigilancia densitometrica periódica durante todo el tratamiento oncológico.',
      pronostico: 'Peor que en la mujer a igualdad de fractura, sobre todo tras la fractura de cadera. El tratamiento es igual de eficaz, de modo que la brecha pronostica se debe en gran parte a que se diagnostica y se trata menos.',
      algoritmo: ['Cribar con densitometría a los varones desde los 70 anos, y desde los 50 si hay factores de riesgo o una fractura por fragilidad', 'Buscar causa secundaria de forma sistemática: hasta la mitad de los casos la tienen. Testosterona matutina obligada', 'Diagnosticar con puntuación T en 50 anos o más, y con puntuación Z en menores de 50', 'Tratar con la misma estratificación por riesgo que en la mujer; la testosterona no sustituye al fármaco específico', 'En terapia de deprivación androgenica, densitometría basal y tratamiento preventivo desde el inicio']
    },
    {
      nombre: 'Osteoporosis secundaria e inducida por glucocorticoides',
      color: '#8a6a1f',
      definicion: 'Pérdida de masa ósea atribuible a una enfermedad o a un fármaco. La causa más frecuente con diferencia es el <strong>tratamiento con glucocorticoides</strong>, que tiene guía propia porque su riesgo aparece pronto, con dosis bajas y de forma desproporcionada a la pérdida de densidad que se mide.',
      fisiopatologia: 'Los glucocorticoides actuan en las dos direcciones: reducen la formación (apoptosis de osteoblastos y osteocitos, menor senal Wnt) y aumentan de forma transitoria la resorción, además de disminuir la absorción intestinal de calcio, aumentar su pérdida renal y producir hipogonadismo y miopatía que favorece las caídas. Por eso el riesgo de fractura sube en los primeros 3 a 6 meses, antes de que la densitometría se altere de forma llamativa. Otras causas actuan por sus propios mecanismos: hipogonadismo, exceso de hormona tiroidea, malabsorción, inflamación crónica o pérdida renal de calcio.',
      epidemiologia: 'La osteoporosis inducida por glucocorticoides es la causa más frecuente de osteoporosis secundaria y de osteoporosis en pacientes jóvenes. Hasta un 30 al 50% de los tratados de forma prolongada sufrira una fractura.',
      factores_riesgo: ['Glucocorticoides: el riesgo empieza con dosis bajas (equivalente a 2.5 a 5 mg de prednisona) y desde los primeros meses', 'Hipogonadismo de cualquier causa, incluidas las terapias de deprivación hormonal', 'Hipertiroidismo, incluido el subclínico y el yatrogeno por exceso de levotiroxina', 'Hiperparatiroidismo primario y síndrome de Cushing', 'Malabsorción: celiaquía, enfermedad inflamatoria intestinal, cirugía bariátrica', 'Enfermedad renal crónica y trasplante de órgano sólido', 'Artritis reumatoide y otras enfermedades inflamatorias crónicas', 'Fármacos: inhibidores de aromatasa, antiandrogenos, anticonvulsivantes, inhibidores de la calcineurina, heparina prolongada', 'Mieloma múltiple y mastocitosis sistémica'],
      clinica: 'La de la enfermedad de base más la fractura cuando ocurre. En la inducida por glucocorticoides es característico que las fracturas vertebrales aparezcan con densidades que en una osteoporosis posmenopáusica no las habrian producido: la calidad del hueso esta más danada que su cantidad.',
      criterios_dx: 'Densitometría con los criterios habituales, pero interpretada con umbrales más exigentes en el paciente con glucocorticoides. En premenopausicas y varones menores de 50 se usa la puntuación Z, y un valor de -2.0 o menor obliga a estudio. La búsqueda de causas es obligada ante osteoporosis en el joven, puntuación Z baja, fracturas desproporcionadas o mala respuesta al tratamiento.',
      laboratorio: 'Panel amplio según la sospecha: calcio, fósforo, fosfatasa alcalina, función renal, 25-hidroxivitamina D, hormona paratiroidea, TSH, proteinograma con inmunofijación, calcio en orina de 24 horas, testosterona en el varón, serología de celiaquía, ferritina con índice de saturación, triptasa y cortisol libre urinario o supresión con dexametasona.',
      imagen: 'Densitometría e imagen vertebral con umbral bajo, ya que las fracturas vertebrales asintomáticas son especialmente frecuentes con glucocorticoides.',
      complementarios: 'Revisión farmacológica estructurada para reducir la dosis de glucocorticoide a la mínima eficaz y buscar alternativas ahorradoras; y tratamiento de la enfermedad de base.',
      dx_diferencial: 'Osteomalacia, mieloma, metástasis, osteogenesis imperfecta leve y osteoporosis idiopática del adulto joven cuando el estudio de causas resulta negativo.',
      tx_medico: 'Corregir la causa siempre que se pueda: reducir el glucocorticoide a la dosis mínima eficaz, tratar el hipertiroidismo o el hiperparatiroidismo, corregir la malabsorción, tratar el hipogonadismo. Asegurar calcio y vitamina D en todos, con especial atención en el paciente con glucocorticoides.',
      tx_farmacologico: 'En la osteoporosis inducida por glucocorticoides se trata de forma precoz y con umbrales más bajos: se inicia tratamiento en todo paciente con riesgo moderado o alto que vaya a recibir glucocorticoides durante 3 meses o más. Los bisfosfonatos son de primera línea por eficacia y coste; la teriparatida ha demostrado ser superior a los bisfosfonatos en este escenario concreto y se prefiere en el riesgo alto; el denosumab es una alternativa. En el resto de causas secundarias, el tratamiento específico sigue la misma estratificación por riesgo que la osteoporosis primaria.',
      tx_intervencionista: 'La correspondiente a la causa (paratiroidectomia en el hiperparatiroidismo primario con criterios quirúrgicos) y a la fractura si se produce.',
      criterios_uci: 'No aplica de forma directa.',
      criterios_tips: 'La ventana de intervención en el paciente que va a recibir glucocorticoides es <strong>antes</strong> de que empiece a perder hueso: esperar a la densitometría alterada es llegar tarde.',
      seguimiento_hospitalario: 'Al pautar glucocorticoides prolongados durante un ingreso, dejar indicados el calcio, la vitamina D y, si procede, el tratamiento específico, y solicitar la densitometría basal.',
      seguimiento_ambulatorio: 'Densitometría basal al iniciar glucocorticoides prolongados y control a los 12 meses; reevaluar el riesgo cada vez que cambie la dosis; y mantener el tratamiento mientras dure la exposición.',
      pronostico: 'Con la causa corregida y el tratamiento adecuado, buena parte de la pérdida es recuperable, sobre todo la inducida por glucocorticoides tras su retirada. El riesgo de fractura por glucocorticoides desciende con rapidez al suspenderlos.',
      algoritmo: ['Buscar causa secundaria de forma sistemática: obligatorio en el joven, con puntuación Z de -2.0 o menor, o ante fracturas desproporcionadas', 'Panel mínimo más pruebas dirigidas según la sospecha; en el varón, testosterona matutina', 'Con glucocorticoides previstos 3 meses o más: calcio y vitamina D en todos, y tratamiento específico si el riesgo es moderado o alto', 'Bisfosfonato de primera línea; teriparatida preferida en el riesgo alto por glucocorticoides; denosumab como alternativa', 'Corregir la causa (reducir el esteroide, tratar el hipertiroidismo o la malabsorción) y mantener el tratamiento mientras dure la exposición']
    },
    {
      nombre: 'Fractura por fragilidad',
      color: '#7a1f3d',
      definicion: 'Complicación que define a la osteoporosis (ver las fichas de las tres formas): fractura producida por un traumatismo de baja energía, típicamente una caída desde la propia altura o menos. Las localizaciones características son la vértebra, la cadera, la muneca (Colles), el humero proximal y la pelvis.',
      fisiopatologia: 'La pérdida de masa ósea y el deterioro de la microarquitectura reducen la resistencia del hueso por debajo de la carga que soporta en un traumatismo trivial. No se re-explica aquí el mecanismo de la pérdida ósea, descrito en las fichas correspondientes; lo específico es que <strong>una fractura genera las siguientes</strong>: tras una fractura vertebral, el riesgo de otra en el ano siguiente se multiplica varias veces (fenómeno de cascada).',
      epidemiologia: 'Una de cada tres mujeres y uno de cada cinco varones mayores de 50 anos sufrira una. La de cadera es la más grave: mortalidad del 20 al 30% al ano, y de los supervivientes, una proporción importante no recupera la independencia previa. Hasta dos tercios de las vertebrales son asintomáticas.',
      factores_riesgo: ['Fractura por fragilidad previa, sobre todo en los 12 a 24 meses anteriores', 'Densidad mineral ósea baja', 'Edad avanzada', 'Riesgo alto de caídas: alteración de la marcha o el equilibrio, déficit visual, ortostatismo, sarcopenia', 'Fármacos sedantes, hipnóticos, antidepresivos y antihipertensivos que producen ortostatismo', 'Glucocorticoides', 'Bajo índice de masa corporal', 'Barreras del entorno domestico y vida sedentaria'],
      clinica: 'Vertebral: dolor dorsal o lumbar agudo tras un esfuerzo mínimo, o hallazgo casual en una radiografía; con el tiempo, pérdida de talla y cifosis con repercusión respiratoria y digestiva. Cadera: dolor inguinal con impotencia funcional y acortamiento con rotación externa. Muneca y humero: dolor y deformidad tras una caída sobre la mano extendida.',
      criterios_dx: 'Fractura demostrada por imagen en el contexto de un traumatismo de baja energía. La fractura de cadera o de vértebra, por si sola, <strong>diagnóstica osteoporosis con independencia de la densitometría</strong>, incluso con puntuación T normal.',
      laboratorio: 'Panel de causas secundarias, que en el paciente que ya se ha fracturado deja de ser opcional; y el preoperatorio correspondiente si va a cirugía.',
      imagen: 'Radiografía simple del hueso doloroso; resonancia si la de cadera es normal pero la sospecha es alta (fractura oculta) o para distinguir la fractura vertebral aguda de la antigua y descartar una fractura patológica.',
      complementarios: 'Valoración geriátrica integral en el anciano con fractura de cadera; y sobre todo, inclusion en un <strong>servicio de coordinación de fracturas</strong>, que es la intervención que más ha demostrado reducir la segunda fractura.',
      dx_diferencial: 'Fractura patológica por metástasis o mieloma (sospechar ante dolor de reposo, síntomas sistémicos, afectación de pediculos o de vértebras por encima de T4), osteomalacia con fracturas de estrés, y fractura femoral atípica en el paciente con antirresortivo prolongado.',
      tx_medico: 'Analgesia adecuada, movilización precoz y rehabilitación; prevención de caídas y revisión de los fármacos que las favorecen; y, de forma indispensable, <strong>iniciar o intensificar el tratamiento de la osteoporosis</strong>, porque una fractura reciente coloca al paciente en riesgo muy alto.',
      tx_farmacologico: 'La fractura reciente de cadera o vértebra define riesgo muy alto: se prefiere empezar por un <strong>anabólico</strong> (teriparatida, abaloparatida o romosozumab) y consolidar después con un antirresortivo. El ácido zoledrónico tras una fractura de cadera reduce nuevas fracturas y la mortalidad, y se administra a partir de las 2 semanas de la cirugía.',
      tx_intervencionista: 'Cirugía precoz de la fractura de cadera, idealmente en las primeras 24 a 48 horas, que mejora la supervivencia y la función. Vertebroplastia o cifoplastia solo en dolor vertebral refractario seleccionado.',
      criterios_uci: 'No la fractura en si, sino sus complicaciones: embolia grasa, tromboembolia, delirium grave, o descompensación de la comorbilidad en el anciano frágil.',
      criterios_tips: 'La <strong>brecha de tratamiento</strong> tras la fractura es el mayor fracaso del manejo de esta enfermedad: la mayoría de los pacientes que se fractura sale del hospital sin diagnóstico ni tratamiento de osteoporosis.',
      seguimiento_hospitalario: 'Cirugía precoz, profilaxis antitrombótica, prevención y manejo del delirium, movilización desde el primer dia, y no dar el alta sin diagnóstico de osteoporosis, estudio iniciado y tratamiento pautado o citado.',
      seguimiento_ambulatorio: 'Rehabilitación y programa de prevención de caídas; seguimiento en un circuito de coordinación de fracturas; densitometría y control del tratamiento; y valoración de la fragilidad y de la situación funcional y social.',
      pronostico: 'La fractura de cadera tiene una mortalidad del 20 al 30% al ano y deja secuelas funcionales frecuentes. El tratamiento tras la fractura reduce de forma significativa la incidencia de nuevas fracturas y, con ácido zoledrónico tras fractura de cadera, también la mortalidad.',
      algoritmo: ['Fractura por traumatismo de baja energía: es una fractura por fragilidad hasta que se demuestre lo contrario', 'La de cadera o vértebra diagnóstica osteoporosis aunque la densitometría sea normal', 'Descartar fractura patológica (metástasis, mieloma) si el cuadro es atípico', 'Cirugía precoz en la de cadera; analgesia, movilización y rehabilitación en todas', 'No dar el alta sin diagnóstico, estudio de causas secundarias y tratamiento: la fractura reciente define riesgo muy alto']
    },
    {
      nombre: 'Osteonecrosis mandibular y fractura femoral atípica',
      color: '#6b4a2e',
      definicion: 'Las dos complicaciones raras del tratamiento antirresortivo prolongado (ver las fichas de las formas de osteoporosis). La osteonecrosis de los maxilares es la exposición de hueso necrótico en la cavidad oral que persiste más de 8 semanas en un paciente tratado con antirresortivos o antiangiogénicos y sin radioterapia previa de la zona. La fractura femoral atípica es una fractura subtrocanterica o diafisaria transversa, por sobresupresion del remodelado.',
      fisiopatologia: 'La supresión mantenida del remodelado impide reparar el microdano acumulado. En el maxilar, sometido a carga masticatoria continua y expuesto a la flora oral a través del periodonto, esa incapacidad de reparación se manifiesta como necrosis tras una extracción o una infección. En el fémur, el microdano no reparado progresa hasta una fractura de estrés que termina completandose con un traumatismo mínimo o sin el.',
      epidemiologia: 'Ambas son <strong>muy raras a las dosis de la osteoporosis</strong>. La osteonecrosis mandibular ocurre en el orden de 1 por cada 10.000 a 100.000 pacientes-ano, frente a un 1 a 15% con las dosis oncológicas altas. La fractura atípica tiene una incidencia baja que aumenta con la duración del tratamiento y disminuye con rapidez al suspenderlo. El beneficio de prevenir fracturas supera con mucho a estos riesgos, pero el temor a ellos es una causa mayor de infratratamiento.',
      factores_riesgo: ['Duración prolongada del antirresortivo (más de 5 anos, y sobre todo más de 8 a 10)', 'Dosis oncológicas de bisfosfonato o de denosumab', 'Extracción dental u otra cirugía dentoalveolar, y mala higiene oral (osteonecrosis)', 'Prótesis dentales mal ajustadas, periodontitis y diabetes', 'Glucocorticoides, antiangiogénicos y tabaquismo', 'Ascendencia asiática y fémur curvo (fractura atípica)', 'Dolor prodrómico en muslo o ingle sin fractura evidente'],
      clinica: 'Osteonecrosis: dolor, exposición de hueso, supuracion, fístula, movilidad dentaria o parestesia del nervio dentario inferior. Fractura femoral atípica: <strong>dolor prodrómico en muslo o ingle durante semanas o meses</strong>, sordo y de carácter mecánico, que precede a la fractura completa; es bilateral en cerca de un tercio de los casos, por lo que hay que estudiar también el fémur contralateral.',
      criterios_dx: 'Osteonecrosis: hueso expuesto o fístula que sondea a hueso, persistente más de 8 semanas, con antecedente de antirresortivo y sin radioterapia local. Fractura atípica: localización subtrocanterica o diafisaria, trazo transverso u oblicuo corto, sin conminucion, con engrosamiento cortical localizado y fractura de la cortical lateral.',
      laboratorio: 'Sin marcador diagnóstico. Calcio, vitamina D y función renal en el manejo general; marcadores de remodelado muy suprimidos pueden apoyar la sospecha de sobresupresion, pero no la confirman.',
      imagen: 'Osteonecrosis: ortopantomografia y tomografía de macizo facial para delimitar la extensión. Fractura atípica: <strong>radiografía de los dos femures</strong> ante dolor de muslo en tratado prolongado; si es normal y la sospecha persiste, resonancia o gammagrafía para detectar la fractura de estrés.',
      complementarios: 'Valoración odontologica <strong>antes</strong> de iniciar un antirresortivo, con resolución de los focos infecciosos y de las extracciones necesarias; y educación sobre la higiene oral durante el tratamiento.',
      dx_diferencial: 'Osteonecrosis: osteomielitis maxilar, alveolitis, periodontitis avanzada, tumor. Fractura atípica: fractura osteoporotica típica del fémur proximal (que es intertrocanterica o de cuello, no diafisaria transversa) y fractura patológica por metástasis.',
      tx_medico: 'Osteonecrosis: enjuagues antisepticos, antibiótico si hay infección, analgesia y manejo conservador en los estadios iniciales, con desbridamiento mínimo; se evita la cirugía agresiva. Fractura atípica: suspender el antirresortivo, descarga del miembro y valoración ortopédica.',
      tx_farmacologico: 'Suspender o aplazar el antirresortivo mientras se resuelve, sopesando el riesgo de fractura que reaparece al hacerlo, y muy en particular el rebote si se trata de denosumab (ver esa ficha). La teriparatida se ha usado para favorecer la consolidación tanto en la osteonecrosis como en la fractura atípica.',
      tx_intervencionista: 'Osteonecrosis: desbridamiento o resección en los estadios avanzados, por cirugía maxilofacial. Fractura atípica: enclavado intramedular profiláctico si hay fractura incompleta con dolor, y osteosintesis si es completa; la consolidación es lenta.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'La proporción es lo que hay que transmitir al paciente: por cada caso de osteonecrosis o de fractura atípica se previenen decenas o cientos de fracturas por fragilidad. Interrumpir un tratamiento eficaz por este temor causa más dano que el que evita.',
      seguimiento_hospitalario: 'Ante una fractura femoral en un paciente con antirresortivo prolongado, revisar el trazo y la localización y radiografiar el fémur contralateral antes del alta.',
      seguimiento_ambulatorio: 'Preguntar de forma activa por dolor en muslo o ingle en cada visita del paciente con tratamiento prolongado, y por problemas dentales; y reevaluar periódicamente si sigue siendo necesario mantener el antirresortivo.',
      pronostico: 'La mayoría de las osteonecrosis en estadios iniciales se controla con manejo conservador. La fractura atípica consolida de forma lenta y puede requerir cirugía, pero su incidencia cae con rapidez tras suspender el fármaco.',
      algoritmo: ['Valoración odontologica y resolución de focos infecciosos ANTES de iniciar un antirresortivo potente', 'Dolor en muslo o ingle en tratado prolongado: radiografiar LOS DOS femures; resonancia si son normales y persiste la sospecha', 'Osteonecrosis: manejo conservador en estadios iniciales, antibiótico si hay infección, evitar cirugía agresiva', 'Suspender o aplazar el antirresortivo, teniendo en cuenta el rebote si es denosumab', 'Transmitir la proporción real del riesgo: el temor a estas complicaciones causa más infratratamiento que dano evitan']
    },
    {
      nombre: 'Rebote tras suspender el denosumab',
      color: '#8c3a34',
      definicion: 'Complicación del tratamiento con denosumab (ver las fichas de las formas de osteoporosis): al suspenderlo sin pasar a otro antirresortivo, la resorción ósea rebota por encima del nivel basal y se produce una pérdida rápida de la densidad ganada, con riesgo de <strong>fracturas vertebrales múltiples</strong> en los meses siguientes. Es infrecuente, grave y por completo evitable.',
      fisiopatologia: 'El denosumab bloquea RANKL de forma reversible y no se deposita en el hueso, a diferencia del bisfosfonato. Durante el tratamiento se acumulan precursores osteoclasticos y aumenta el RANKL disponible; cuando el fármaco se elimina (su efecto dura unos 6 meses), toda esa maquinaria se activa de golpe y la resorción se dispara muy por encima de lo normal. La densidad ganada se pierde en 12 a 24 meses.',
      epidemiologia: 'El fenómeno de pérdida de densidad al suspenderlo es constante; las fracturas vertebrales múltiples ocurren en una minoría, pero se concentran en quienes ya tenian fracturas vertebrales previas y en los que llevaban más tiempo de tratamiento.',
      factores_riesgo: ['Suspensión del denosumab sin transición a otro antirresortivo', 'Retraso de la dosis más allá de los 7 meses desde la anterior', 'Fracturas vertebrales previas', 'Mayor duración del tratamiento y mayor ganancia de densidad durante el', 'Pérdida del seguimiento o problemas de acceso al fármaco', 'Interrupción por un procedimiento dental o una cirugía sin plan de sustitución'],
      clinica: 'Dolor dorsal o lumbar agudo, a menudo en varios niveles a la vez, entre los 6 y los 24 meses de la última dosis, con pérdida de talla. Puede debutar directamente como fracturas vertebrales múltiples en cascada.',
      criterios_dx: 'Fracturas vertebrales nuevas, con frecuencia múltiples, en un paciente que suspendió el denosumab. La sospecha es fundamentalmente cronológica: cualquier dolor vertebral agudo en los 6 a 24 meses posteriores a la última dosis obliga a imagen vertebral.',
      laboratorio: 'Marcadores de remodelado (CTX) muy elevados apoyan el diagnóstico y sirven para vigilar la eficacia de la transición; calcio, vitamina D y función renal.',
      imagen: 'Radiografía lateral de columna dorsal y lumbar o evaluación vertebral por DXA ante cualquier dolor vertebral en ese periodo; resonancia para datar las fracturas si hay duda.',
      complementarios: 'Sistema de recordatorio y de citas que garantice que la dosis se administra cada 6 meses sin demora: la mayoría de los casos empieza como un simple retraso administrativo.',
      dx_diferencial: 'Fracturas vertebrales por progresión natural de la osteoporosis, fractura patológica por mieloma o metástasis, y espondilodiscitis.',
      tx_medico: 'La clave es la <strong>prevención</strong>: no suspender nunca el denosumab sin un plan. Si hay que suspenderlo, se pauta un bisfosfonato al llegar el momento de la dosis que se omite. Educar al paciente en que este fármaco, a diferencia de los bisfosfonatos, no admite pausas ni retrasos.',
      tx_farmacologico: 'Transición obligada a un bisfosfonato: ácido zoledrónico intravenoso 6 meses después de la última dosis de denosumab, o alendronato, con control de los marcadores de remodelado a los 3 a 6 meses y una segunda dosis de zoledrónico si vuelven a elevarse. Si ya se han producido las fracturas, tratar la osteoporosis como riesgo muy alto.',
      tx_intervencionista: 'El de las fracturas vertebrales si producen dolor refractario; en general se manejan de forma conservadora.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'Este es probablemente el error evitable más frecuente y más grave del tratamiento de la osteoporosis: <strong>al denosumab no se le hacen vacaciones terapéuticas</strong>. La regla de las vacaciones vale solo para los bisfosfonatos.',
      seguimiento_hospitalario: 'Si un paciente en denosumab ingresa por cualquier motivo, comprobar la fecha de la última dosis y asegurar que la siguiente no se retrasara por el ingreso.',
      seguimiento_ambulatorio: 'Cita programada cada 6 meses con margen estrecho; comprobar la administración efectiva y no solo la prescripcion; y si se decide suspender, dejar pautado el bisfosfonato de transición en el mismo acto en que se toma la decisión.',
      pronostico: 'Excelente si se previene: la transición a un bisfosfonato evita en gran medida la pérdida y las fracturas. Malo si ocurre: las fracturas vertebrales múltiples producen dolor, deformidad y pérdida funcional importantes.',
      algoritmo: ['Al denosumab NO se le hacen vacaciones terapéuticas: la regla vale solo para los bisfosfonatos', 'Administrar cada 6 meses sin retrasos; un retraso de más de 7 meses ya es riesgo', 'Si hay que suspenderlo, pautar un bisfosfonato en el momento en que tocaba la dosis omitida (zoledrónico o alendronato)', 'Controlar los marcadores de remodelado a los 3 a 6 meses de la transición y repetir el zoledrónico si vuelven a subir', 'Dolor vertebral agudo entre los 6 y 24 meses de la última dosis: imagen vertebral urgente']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La osteoporosis es una enfermedad ambulatoria que llega al hospital de una sola forma: como fractura. Y es ahi donde se produce el mayor fallo asistencial del tema, la llamada brecha de tratamiento: la mayoría de los pacientes que ingresa por una fractura por fragilidad recibe el alta sin que nadie haya escrito la palabra osteoporosis en su informe.',
    parametros: ['Ante toda fractura por traumatismo de baja energía en una persona de 50 anos o más: registrar el diagnóstico de osteoporosis en el informe', 'Iniciar el estudio de causas secundarias durante el ingreso: calcio, fósforo, fosfatasa alcalina, función renal, 25-hidroxivitamina D, hormona paratiroidea, TSH, proteinograma y, en el varón, testosterona', 'Corregir el déficit de vitamina D antes de administrar un antirresortivo potente, para evitar la hipocalcemia', 'Cirugía precoz de la fractura de cadera, idealmente en las primeras 24 a 48 horas', 'Ácido zoledrónico a partir de las 2 semanas de la cirugía de cadera: reduce nuevas fracturas y la mortalidad', 'Considerar que la fractura reciente define riesgo muy alto: valorar iniciar por un anabólico y consolidar después', 'Comprobar en todo ingresado si esta en tratamiento con denosumab y asegurar que la dosis semestral no se retrasa', 'Movilización precoz, prevención y manejo del delirium, profilaxis antitrombótica y valoración geriátrica integral en el anciano', 'Revisar los fármacos que favorecen las caídas (sedantes, hipnóticos, antihipertensivos con ortostatismo) y ajustarlos', 'Derivar a un servicio de coordinación de fracturas o dejar cita concreta: es la intervención que más reduce la segunda fractura'],
    criterios_uci_general: 'No la osteoporosis, sino las complicaciones de la fractura: embolia grasa, tromboembolia pulmonar, delirium grave o descompensación de la comorbilidad en el anciano frágil.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa. La osteoporosis postrasplante es una complicación frecuente del trasplante de órgano sólido, por los glucocorticoides y los inhibidores de la calcineurina, y exige densitometría basal y tratamiento preventivo.',
    prevencion: 'Primaria a lo largo de toda la vida: alcanzar un buen pico de masa ósea en la infancia y la adolescencia con nutrición adecuada, calcio, vitamina D y actividad física de impacto; y después mantenerlo con ejercicio de carga y de fuerza, no fumar y moderar el alcohol. Secundaria: cribado densitometrico en mujeres desde los 65 anos y varones desde los 70, antes con factores de riesgo, y en toda persona de 50 o más con una fractura por fragilidad; detección y corrección de causas secundarias; y prevención de caídas, que reduce fracturas de forma independiente de la densidad ósea. Terciaria: tras la primera fractura, tratamiento farmacológico y seguimiento estructurado, porque el momento de mayor riesgo de una segunda fractura son los 12 a 24 meses siguientes a la primera.'
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
  'Osteoporosis posmenopáusica': { definicion: [1, 2, 3, 6], criterios_dx: [1, 2, 3, 6], laboratorio: [1, 2, 3, 6], tx_farmacologico: [1, 2, 3, 6] },
  'Osteoporosis del varón': { definicion: [4, 1], criterios_dx: [4, 1], laboratorio: [4, 1], tx_farmacologico: [4, 1] },
  'Osteoporosis secundaria e inducida por glucocorticoides': { definicion: [5, 1], criterios_dx: [5, 1], laboratorio: [5, 1], tx_farmacologico: [5, 1] },
  'Fractura por fragilidad': { definicion: [1, 19], criterios_dx: [1, 19], laboratorio: [1, 19], tx_farmacologico: [1, 19] },
  'Osteonecrosis mandibular y fractura femoral atípica': { definicion: [17, 18], criterios_dx: [17, 18], laboratorio: [17, 18], tx_farmacologico: [17, 18] },
  'Rebote tras suspender el denosumab': { definicion: [13, 14, 8], criterios_dx: [13, 14, 8], laboratorio: [13, 14, 8], tx_farmacologico: [13, 14, 8] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Criterios densitometricos de la OMS (calculadora disponible)': [1],
  'Puntuación Z y sospecha de causa secundaria': [1],
  'FRAX y umbrales de tratamiento': [7, 1],
  'Estratificación en riesgo alto frente a muy alto': [6, 2]
};
export const escalaCalc = {
  'Criterios densitometricos de la OMS (calculadora disponible)': 'densitometria-osteoporosis',
  'FRAX y umbrales de tratamiento': 'densitometria-osteoporosis'
};
export const compGroups = [
  { name: 'Formas de osteoporosis', items: ['Osteoporosis posmenopáusica', 'Osteoporosis del varón', 'Osteoporosis secundaria e inducida por glucocorticoides'] },
  { name: 'Complicaciones', items: ['Fractura por fragilidad', 'Osteonecrosis mandibular y fractura femoral atípica', 'Rebote tras suspender el denosumab'] }
];
export const complicacionesIntro = 'Las tres primeras fichas son las formas de la enfermedad: la posmenopáusica, que es la más frecuente; la del varón, infradiagnosticada y con causa secundaria en la mitad de los casos; y la secundaria, cuya causa más frecuente con diferencia es el tratamiento con glucocorticoides. Las tres últimas son complicaciones: la fractura por fragilidad, que es la manifestación misma de la enfermedad; las complicaciones raras del antirresortivo prolongado, mucho más temidas de lo que su frecuencia justifica; y el rebote tras suspender el denosumab, infrecuente pero grave y por completo evitable.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Clasificación y riesgo' },
  { id: 'complicaciones', label: 'Formas y complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'OSTEOPOROSIS', color: '#7a6a55', target: 'definicion' },
  branches: [
    { title: 'Como se diagnostica', sub: 'Dos caminos, no uno', color: '#3d5a73', target: 'diagnostico', leaves: [
      { title: 'Densitometria', sub: 'T de -2.5 o menor', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Fractura por fragilidad', sub: 'Cadera o vértebra, con T normal', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'FRAX en masa ósea baja', sub: '3% cadera o 20% mayor', color: '#8a6a1f', target: 'clasificacion' }
    ] },
    { title: 'Formas', sub: 'Buscar siempre causa secundaria', color: '#7a6a55', target: 'complicaciones', leaves: [
      { title: 'Posmenopausica', sub: 'La más frecuente', color: '#7a6a55', target: 'complicaciones' },
      { title: 'Del varón', sub: 'Secundaria en la mitad de los casos', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Por glucocorticoides', sub: 'La secundaria más frecuente', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'Tratamiento y sus trampas', sub: 'El orden y el denosumab', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Antirresortivos', sub: 'Bisfosfonatos y denosumab', color: '#8c3a34', target: 'definicion' },
      { title: 'Anabolicos', sub: 'Teriparatida y romosozumab', color: '#3f6b52', target: 'definicion' },
      { title: 'Complicaciones raras', sub: 'Osteonecrosis y fractura atípica', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Rebote del denosumab', sub: 'Nunca sin bisfosfonato después', color: '#8c3a34', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1], no_invasivos: [1, 7], imagen: [1, 18] };
export const clasificacionCite = [1, 7, 6];
export const seguimientoCite = [1, 19];
