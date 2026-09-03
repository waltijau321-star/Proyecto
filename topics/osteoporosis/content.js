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
  subtitulo: 'Modulo 42 · Medicina Interna',
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
      <div style="color:var(--ink-dim);">El osteoblasto produce <strong>RANKL</strong>, que al unirse al receptor <strong>RANK</strong> del precursor osteoclastico lo activa y lo hace madurar. La <strong>osteoprotegerina</strong>, tambien de origen osteoblastico, es el senuelo que secuestra RANKL y frena la resorcion. El estrogeno mantiene alta la osteoprotegerina: al perderse en la menopausia, RANKL queda libre y la resorcion se dispara.</div>
      <div style="margin-top:5px;padding:4px 7px;border:1px solid #8c3a34;border-radius:6px;background:var(--panel2);"><strong style="color:#8c3a34;">Aqui actuan los antirresortivos:</strong> el <strong>denosumab</strong> es un anticuerpo contra RANKL (hace de osteoprotegerina artificial) y los <strong>bisfosfonatos</strong> se fijan a la hidroxiapatita y envenenan al osteoclasto que la resorbe.</div>
    </div>
    <div style="flex:1;min-width:250px;border:1px solid #3f6b52;border-radius:8px;padding:7px 10px;background:#3f6b5210;">
      <div style="font-weight:700;color:#3f6b52;margin-bottom:3px;">Osteoblasto: forma hueso</div>
      <div style="color:var(--ink-dim);">La via <strong>Wnt</strong> impulsa la diferenciacion y la actividad del osteoblasto. El osteocito, atrapado en la matriz, la frena secretando <strong>esclerostina</strong>: es el freno fisiologico de la formacion osea. La <strong>parathormona</strong> administrada de forma intermitente, al contrario que la elevada de forma continua, estimula la formacion.</div>
      <div style="margin-top:5px;padding:4px 7px;border:1px solid #3f6b52;border-radius:6px;background:var(--panel2);"><strong style="color:#3f6b52;">Aqui actuan los anabolicos:</strong> la <strong>teriparatida</strong> y la <strong>abaloparatida</strong> imitan el pulso de parathormona, y el <strong>romosozumab</strong> bloquea la esclerostina (quita el freno) y ademas reduce algo la resorcion.</div>
    </div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">Todo el arsenal terapeutico se entiende desde este esquema: o se frena al osteoclasto (antirresortivos) o se estimula al osteoblasto (anabolicos). Y explica tambien el fenomeno de rebote del denosumab: al retirarlo, el RANKL acumulado queda de golpe sin bloqueo y la resorcion se dispara.</div>
</div>`;

const dxaHtml = `
<div style="max-width:600px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:6px;">
    <div style="flex:1;min-width:250px;border:1px solid #3d5a73;border-radius:8px;padding:7px 10px;background:#3d5a7310;">
      <div style="font-weight:700;color:#3d5a73;">Puntuacion T</div>
      <div style="color:var(--ink-dim);margin-top:2px;">Compara con el <strong>adulto joven sano</strong> del mismo sexo. Es la que define la osteoporosis por densitometria. Se usa en <strong>mujeres posmenopausicas y varones de 50 anos o mas</strong>.</div>
    </div>
    <div style="flex:1;min-width:250px;border:1px solid #6b3a5a;border-radius:8px;padding:7px 10px;background:#6b3a5a10;">
      <div style="font-weight:700;color:#6b3a5a;">Puntuacion Z</div>
      <div style="color:var(--ink-dim);margin-top:2px;">Compara con la <strong>poblacion de la misma edad y sexo</strong>. Se usa en <strong>mujeres premenopausicas, varones menores de 50 anos y ninos</strong>. Un valor de -2.0 o menor se informa como "por debajo del rango esperado para la edad" y <strong>obliga a buscar causa secundaria</strong>.</div>
    </div>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:6px;padding:4px 7px;font-weight:700;color:#3f6b52;text-align:center;">T de -1.0 o mayor</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:4px 8px;color:var(--ink-dim);">Densidad mineral osea normal</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:6px;padding:4px 7px;font-weight:700;color:#8a6a1f;text-align:center;">T entre -1.0 y -2.5</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:4px 8px;color:var(--ink-dim);">Masa osea baja (osteopenia). Aqui es donde el FRAX decide: se trata si el riesgo a 10 anos es de 3% o mas para cadera, o de 20% o mas para fractura mayor</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:6px;padding:4px 7px;font-weight:700;color:#8c3a34;text-align:center;">T de -2.5 o menor</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:4px 8px;color:var(--ink-dim);">Osteoporosis. Indicacion de tratamiento farmacologico sin necesidad de calcular el FRAX</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;">
      <div style="background:#7a1f3d22;border:1px solid #7a1f3d;border-radius:6px;padding:4px 7px;font-weight:700;color:#7a1f3d;text-align:center;">Fractura por fragilidad</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:4px 8px;color:var(--ink-dim);">Una fractura de <strong>cadera o vertebra</strong> por traumatismo menor diagnostica osteoporosis <strong>con independencia de la densitometria</strong>, incluso con T normal</div>
    </div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">Se miden columna lumbar (L1-L4), cuello femoral y cadera total, y se usa <strong>el peor de los tres</strong>. El radio al 33% se reserva para cuando los otros no son valorables (hiperparatiroidismo, obesidad extrema, protesis). Cuidado con la columna del anciano: la artrosis, las calcificaciones aorticas y las fracturas vertebrales previas <strong>sobreestiman</strong> la densidad y hacen parecer normal un hueso que no lo es.</div>
</div>`;

const escalonHtml = `
<div style="max-width:620px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="border:1px solid #7a6a55;background:#7a6a5518;border-radius:8px;padding:6px 10px;margin-bottom:6px;"><strong style="color:#7a6a55;">Base en todos.</strong> Calcio 1000 a 1200 mg/dia (de preferencia con la dieta) y vitamina D 800 a 1000 UI/dia; ejercicio de carga y de fuerza; prevencion de caidas; abandono del tabaco y moderacion del alcohol; y correccion de las causas secundarias.</div>
  <div style="display:flex;gap:8px;flex-wrap:wrap;">
    <div style="flex:1;min-width:250px;border:1px solid #3d5a73;border-radius:8px;padding:7px 10px;">
      <div style="font-weight:700;color:#3d5a73;margin-bottom:3px;">Riesgo alto: empezar por antirresortivo</div>
      <ul style="margin:0;padding-left:15px;line-height:1.55;color:var(--ink-dim);">
        <li><strong>Bisfosfonato</strong> de primera linea: alendronato o risedronato orales, o acido zoledronico intravenoso anual. Contraindicados con filtrado glomerular por debajo de 30 a 35.</li>
        <li><strong>Denosumab</strong> si hay enfermedad renal o intolerancia digestiva: 60 mg subcutaneos cada 6 meses, sin ajuste por funcion renal.</li>
      </ul>
    </div>
    <div style="flex:1;min-width:250px;border:1px solid #8c3a34;border-radius:8px;padding:7px 10px;">
      <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">Riesgo muy alto: empezar por anabolico</div>
      <ul style="margin:0;padding-left:15px;line-height:1.55;color:var(--ink-dim);">
        <li><strong>Teriparatida</strong> o <strong>abaloparatida</strong> subcutaneas diarias, hasta 2 anos.</li>
        <li><strong>Romosozumab</strong> 210 mg subcutaneos al mes durante 12 meses. <strong>No usar si ha habido infarto o ictus en el ano previo</strong> (aviso del estudio ARCH).</li>
        <li>Riesgo muy alto: fractura vertebral o de cadera reciente, fracturas multiples, T muy bajo, o fractura mientras se recibia tratamiento.</li>
      </ul>
    </div>
  </div>
  <div style="border:1px solid #3f6b52;background:#3f6b5218;border-radius:8px;padding:6px 10px;margin-top:6px;"><strong style="color:#3f6b52;">La secuencia importa, y se hace mal a menudo.</strong> El <strong>anabolico primero y el antirresortivo despues</strong> gana mas densidad que el orden inverso: empezar por un antirresortivo embota la respuesta al anabolico posterior. Y <strong>todo anabolico debe ir seguido de un antirresortivo</strong>, porque lo ganado se pierde en meses si no se consolida.</div>
  <div style="border:1px solid #8a6a1f;background:#8a6a1f18;border-radius:8px;padding:6px 10px;margin-top:5px;"><strong style="color:#8a6a1f;">Vacaciones terapeuticas: solo para bisfosfonatos.</strong> Tras 5 anos de bisfosfonato oral o 3 de intravenoso, si el riesgo ya no es alto, se puede pausar 2 a 3 anos con reevaluacion periodica. <strong>NUNCA se aplica al denosumab</strong>: suspenderlo sin pasar a un bisfosfonato provoca un rebote con fracturas vertebrales multiples.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La osteoporosis es una enfermedad esqueletica caracterizada por una <strong>masa osea baja y un deterioro de la microarquitectura</strong> del hueso, que aumentan su fragilidad y el riesgo de fractura. Es una enfermedad silente hasta que se rompe algo: su unica manifestacion clinica es la fractura, y por eso el objetivo del diagnostico y del tratamiento es prevenirla, no normalizar un numero.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El hueso se renueva toda la vida.</strong></p>
${figBlock('Figura 1', 'Remodelado oseo y donde actua cada farmaco', remodeladoHtml)}
<p style="margin:0 0 12px;">El hueso esta en remodelado continuo: el osteoclasto resorbe y el osteoblasto forma, en unidades acopladas. Hasta los 30 anos aproximadamente se acumula el <strong>pico de masa osea</strong>, determinado en gran parte por la genetica pero tambien por la nutricion y la actividad fisica de la infancia y la adolescencia; despues se pierde de forma lenta y constante. En la mujer, la caida de estrogenos de la menopausia acelera bruscamente esa perdida durante unos anos, porque el estrogeno mantenia alta la osteoprotegerina que frenaba al osteoclasto. Entender el eje RANK-RANKL-osteoprotegerina y el freno de la esclerostina es lo que hace comprensibles el denosumab y el romosozumab.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se diagnostica: no solo con la densitometria.</strong></p>
${figBlock('Figura 2', 'Interpretacion de la densitometria y umbrales de diagnostico', dxaHtml)}
<p style="margin:0 0 12px;">Hay <strong>dos caminos al diagnostico</strong> y conviene tenerlos claros porque el segundo se olvida. El primero es densitometrico: una puntuacion T de -2.5 o menor en columna lumbar, cuello femoral o cadera total. El segundo es <strong>clinico</strong>: una fractura por fragilidad de cadera o de vertebra (por un traumatismo de baja energia, como una caida desde la propia altura) diagnostica osteoporosis <strong>aunque la densitometria sea normal</strong>. Y en la zona intermedia de masa osea baja, la decision de tratar la toma el <strong>FRAX</strong>, que estima el riesgo de fractura a 10 anos e integra factores que la densitometria no ve.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">A quien se le hace densitometria.</strong></p>
<p style="margin:0 0 12px;">A todas las <strong>mujeres a partir de los 65 anos</strong> y a los <strong>varones a partir de los 70</strong>; a las mujeres posmenopausicas y a los varones de 50 a 69 anos con factores de riesgo; y a <strong>cualquier persona de 50 anos o mas que sufra una fractura por fragilidad</strong>. Tambien ante el hallazgo de una fractura vertebral en una radiografia pedida por otro motivo, ante el inicio previsto de glucocorticoides prolongados, y ante cualquier enfermedad o farmaco que se sepa que dana el hueso.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Siempre hay que buscar causas secundarias.</strong></p>
<p style="margin:0 0 12px;">Antes de etiquetar una osteoporosis como primaria hay que descartar lo que se puede corregir. El estudio minimo incluye calcio, fosforo, fosfatasa alcalina, creatinina con filtrado glomerular, <strong>25-hidroxivitamina D</strong>, hormona paratiroidea, TSH, proteinograma con inmunofijacion y calcio en orina de 24 horas; en el varon se anade la testosterona. La causa secundaria mas frecuente con diferencia es el <strong>tratamiento con glucocorticoides</strong>, y la obligacion de buscar causas es tanto mayor cuanto mas joven es el paciente o mas baja la puntuacion Z.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El tratamiento y el orden en que se da.</strong></p>
${figBlock('Figura 3', 'Escalonamiento terapeutico y la secuencia anabolico-antirresortivo', escalonHtml)}
<p style="margin:0 0 12px;">Sobre una base de calcio, vitamina D, ejercicio de carga y de fuerza y prevencion de caidas, el tratamiento farmacologico se elige por el nivel de riesgo. Dos reglas concentran la mayor parte de los errores que se cometen en la practica: la <strong>secuencia</strong> (el anabolico rinde mas si va primero, y siempre debe consolidarse despues con un antirresortivo) y el <strong>denosumab</strong> (nunca se suspende sin pasar a un bisfosfonato, porque el rebote produce fracturas vertebrales multiples).</p>

<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> Las fichas de este tema son las tres formas de la enfermedad (posmenopausica, del varon y secundaria, incluida la inducida por glucocorticoides) y tres complicaciones: la fractura por fragilidad, que es la manifestacion misma de la enfermedad; las complicaciones raras del tratamiento antirresortivo (osteonecrosis mandibular y fractura femoral atipica), que se temen mucho mas de lo que su frecuencia justifica; y el rebote tras suspender el denosumab, que es infrecuente pero evitable y grave.</p>`;

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
      compensada: 'Asintomatica por completo. No duele, no se palpa y no da signos: se detecta unicamente por cribado densitometrico o al calcular el riesgo en una persona con factores. La perdida de talla progresiva (mas de 4 cm respecto de la talla maxima referida, o mas de 2 cm en mediciones sucesivas) y la cifosis dorsal creciente son las unicas pistas exploratorias, y ya sugieren fracturas vertebrales que han pasado desapercibidas.',
      descompensada: 'La fractura por fragilidad es la manifestacion de la enfermedad. La vertebral es la mas frecuente y hasta dos tercios son <strong>asintomaticas</strong>, descubiertas en una radiografia pedida por otro motivo; cuando duelen, producen dolor dorsal o lumbar agudo tras un esfuerzo minimo. La de cadera es la mas grave: dolor inguinal con impotencia funcional y acortamiento con rotacion externa, y conlleva una mortalidad al ano del 20 al 30%. Tambien son tipicas la de muneca (Colles) y la de humero proximal.'
    },
    laboratorio: [
      { prueba: 'Calcio, fosforo, fosfatasa alcalina y albumina', utilidad: 'Cribado basico del metabolismo oseo. Un calcio alto orienta a hiperparatiroidismo primario o a neoplasia; una fosfatasa alcalina elevada, a osteomalacia, enfermedad de Paget o metastasis.' },
      { prueba: '25-hidroxivitamina D', utilidad: 'Su deficit es muy prevalente y hay que corregirlo antes de iniciar un antirresortivo potente, sobre todo el acido zoledronico o el denosumab, para no provocar una hipocalcemia grave. Objetivo habitual de 30 ng/mL o mas.' },
      { prueba: 'Hormona paratiroidea', utilidad: 'Distingue el hiperparatiroidismo primario (con calcio alto) del secundario por deficit de vitamina D o por enfermedad renal (con calcio normal o bajo).' },
      { prueba: 'Creatinina con filtrado glomerular estimado', utilidad: 'Condiciona la eleccion: los bisfosfonatos estan contraindicados por debajo de 30 a 35 mL/min/1.73 m2, mientras que el denosumab no requiere ajuste, aunque con mayor riesgo de hipocalcemia en la enfermedad renal avanzada.' },
      { prueba: 'TSH', utilidad: 'El hipertiroidismo, incluido el subclinico y el yatrogeno por exceso de levotiroxina, acelera la perdida osea y es una causa secundaria corregible que se pasa por alto con frecuencia.' },
      { prueba: 'Proteinograma con inmunofijacion y cadenas ligeras libres', utilidad: 'Descarta el mieloma multiple, que puede debutar como fracturas vertebrales por fragilidad y cuyo tratamiento no tiene nada que ver con el de la osteoporosis.' },
      { prueba: 'Calcio en orina de 24 horas', utilidad: 'Una hipercalciuria sugiere perdida renal de calcio o hipercalciuria idiopatica; una hipocalciuria orienta a malabsorcion (celiaquia) o a deficit de vitamina D no corregido.' },
      { prueba: 'Testosterona total matutina en el varon', utilidad: 'El hipogonadismo es la causa secundaria mas frecuente de osteoporosis en el varon, y con frecuencia es yatrogeno (terapia de deprivacion androgenica en el cancer de prostata).' }
    ],
    no_invasivos: [
      { metodo: 'Densitometria osea de doble energia (DXA) (calculadora disponible)', interpretacion: 'Mide la densidad mineral osea en columna lumbar, cuello femoral y cadera total. Se usa la puntuacion T en mujeres posmenopausicas y varones de 50 anos o mas, y la puntuacion Z en premenopausicas, varones menores de 50 y ninos.', cutoff: 'T de -1.0 o mayor normal; entre -1.0 y -2.5 masa osea baja; -2.5 o menor osteoporosis. Z de -2.0 o menor: por debajo del rango esperado para la edad, obliga a buscar causa secundaria' },
      { metodo: 'FRAX (herramienta oficial en linea)', interpretacion: 'Estima la probabilidad a 10 anos de fractura mayor osteoporotica y de cadera a partir de factores clinicos, con o sin la densidad del cuello femoral. Sus coeficientes no son publicos y su calibracion es por pais, por lo que se usa la herramienta oficial y su resultado se introduce a mano en la calculadora de este tema.', cutoff: 'Umbrales habituales de tratamiento en masa osea baja: 3% o mas para cadera, o 20% o mas para fractura mayor osteoporotica' },
      { metodo: 'Trabecular bone score (TBS)', interpretacion: 'Analiza la textura de la imagen de columna lumbar y aporta informacion sobre la microarquitectura que la densidad no captura; ajusta el FRAX y es especialmente util en la diabetes tipo 2, donde la densidad sobreestima la resistencia osea.', cutoff: 'Valores bajos indican microarquitectura degradada con densidad aparentemente conservada' },
      { metodo: 'Medicion de la talla y valoracion del riesgo de caidas', interpretacion: 'La perdida de talla sugiere fracturas vertebrales silentes. La valoracion de caidas (marcha, equilibrio, vision, farmacos sedantes, ortostatismo) es tan determinante del riesgo de fractura como la propia densidad osea.', cutoff: 'Perdida de mas de 4 cm respecto de la talla maxima, o de mas de 2 cm entre mediciones: indicar imagen vertebral' },
      { metodo: 'Marcadores de remodelado oseo (CTX y P1NP)', interpretacion: 'No sirven para el diagnostico. Se usan para valorar la adherencia y la respuesta precoz al tratamiento (el CTX cae con los antirresortivos y el P1NP sube con los anabolicos) y en el seguimiento tras suspender el denosumab.', cutoff: 'Sin umbrales diagnosticos; se interpreta el cambio respecto del basal' }
    ],
    imagen: [
      { modalidad: 'Radiografia lateral de columna dorsal y lumbar, o evaluacion vertebral por DXA', hallazgos: 'Detecta las fracturas vertebrales, que en dos tercios de los casos son asintomaticas y que por si solas ya indican tratamiento. Se pide ante perdida de talla, cifosis, dolor dorsal o uso de glucocorticoides.' },
      { modalidad: 'Radiografia simple del hueso doloroso', hallazgos: 'Primera prueba ante sospecha de fractura. En la fractura de cadera puede ser normal al inicio: si la sospecha clinica es alta, se completa con resonancia o tomografia.' },
      { modalidad: 'Resonancia magnetica', hallazgos: 'Diferencia la fractura vertebral aguda de la antigua (edema en la aguda) y la fractura osteoporotica de la patologica por tumor o infeccion; detecta la fractura de cadera oculta.' },
      { modalidad: 'Radiografia de femur bilateral', hallazgos: 'Ante dolor en muslo o ingle en un paciente con antirresortivo prolongado: busca la fractura femoral atipica, que es subtrocanterica o diafisaria, transversa y bilateral en cerca de un tercio de los casos.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La osteoporosis se clasifica por su <strong>origen</strong> (primaria posmenopausica o senil, frente a secundaria a una enfermedad o a un farmaco), por su <strong>gravedad densitometrica</strong> (puntuacion T, con la categoria de osteoporosis establecida o grave cuando ya hay fractura) y, sobre todo, por el <strong>nivel de riesgo de fractura</strong>, que es lo que determina si se trata, con que y en que orden. Esa estratificacion en riesgo alto frente a muy alto es la decision clinica central del tema.`,
    escalas: [
      { nombre: 'Criterios densitometricos de la OMS (calculadora disponible)', componentes: 'Puntuacion T en columna lumbar, cuello femoral o cadera total.', formula: 'Numero de desviaciones estandar respecto del adulto joven sano del mismo sexo; se toma el peor de los tres sitios.', interpretacion: 'T de -1.0 o mayor: normal. Entre -1.0 y -2.5: masa osea baja (osteopenia). De -2.5 o menor: osteoporosis. Osteoporosis establecida o grave si ademas hay una fractura por fragilidad.' },
      { nombre: 'Puntuacion Z y sospecha de causa secundaria', componentes: 'Puntuacion Z, comparada con la poblacion de la misma edad y sexo.', formula: 'Se usa en mujeres premenopausicas, varones menores de 50 anos y ninos.', interpretacion: 'Un valor de -2.0 o menor se informa como por debajo del rango esperado para la edad y obliga a un estudio de causas secundarias. En estos grupos no se usa el termino osteoporosis basandose solo en la densitometria.' },
      { nombre: 'FRAX y umbrales de tratamiento', componentes: 'Edad, sexo, indice de masa corporal, fractura previa, fractura de cadera en los padres, tabaquismo, glucocorticoides, artritis reumatoide, osteoporosis secundaria y alcohol; con o sin densidad del cuello femoral.', formula: 'Probabilidad a 10 anos de fractura mayor osteoporotica y de fractura de cadera. Se calcula con la herramienta oficial, especifica de cada pais.', interpretacion: 'En masa osea baja, umbrales habituales de tratamiento: 3% o mas para cadera, o 20% o mas para fractura mayor. Con T de -2.5 o menor, o con fractura de cadera o vertebra, se trata sin necesidad de calcularlo.' },
      { nombre: 'Estratificacion en riesgo alto frente a muy alto', componentes: 'Antecedente y recencia de la fractura, numero de fracturas, puntuacion T y fractura durante el tratamiento.', formula: 'Clasificacion clinica que determina si se empieza por un antirresortivo o por un anabolico.', interpretacion: 'Riesgo muy alto: fractura vertebral o de cadera reciente (sobre todo en los 12 a 24 meses previos), fracturas multiples, puntuacion T muy baja, o fractura sufrida mientras se recibia tratamiento. En ese caso se empieza por un anabolico y se consolida despues con un antirresortivo.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Osteoporosis posmenopausica',
      color: '#7a6a55',
      definicion: 'Forma mas frecuente de osteoporosis primaria: perdida acelerada de masa osea que sigue a la caida de estrogenos de la menopausia, sobre la que despues se superpone la perdida senil ligada a la edad. Afecta de forma preferente al hueso trabecular, de ahi el predominio de las fracturas vertebrales y de muneca en los primeros anos.',
      fisiopatologia: 'El estrogeno mantiene alta la produccion osteoblastica de osteoprotegerina, el senuelo que secuestra RANKL e impide que active al osteoclasto. Al perderse en la menopausia, RANKL queda libre, la resorcion se acelera y el remodelado se desacopla: se resorbe mas de lo que se forma. La perdida es rapida en los primeros 5 a 10 anos posmenopausicos y despues se enlentece hasta el ritmo de la perdida senil. Ver la Figura 1 de Definicion.',
      epidemiologia: 'Alrededor de una de cada tres mujeres mayores de 50 anos sufrira una fractura por fragilidad a lo largo de su vida. La prevalencia aumenta con la edad y la enfermedad esta muy infradiagnosticada e infratratada, incluso despues de una fractura.',
      factores_riesgo: ['Edad avanzada y menopausia precoz o quirurgica', 'Antecedente personal de fractura por fragilidad', 'Fractura de cadera en los padres', 'Indice de masa corporal bajo y perdida de peso', 'Tabaquismo y consumo de alcohol de 3 o mas unidades al dia', 'Glucocorticoides y otros farmacos que danan el hueso', 'Inmovilidad y sarcopenia', 'Ingesta insuficiente de calcio y deficit de vitamina D', 'Origen etnico y antecedente familiar'],
      clinica: 'Silente hasta la fractura. La perdida de talla y la cifosis dorsal progresiva son las unicas pistas exploratorias y sugieren fracturas vertebrales ya establecidas, la mayoria de ellas asintomaticas.',
      criterios_dx: 'Puntuacion T de -2.5 o menor en columna lumbar, cuello femoral o cadera total; o una fractura por fragilidad de cadera o vertebra con independencia de la densitometria; o masa osea baja con un FRAX por encima de los umbrales de tratamiento. Siempre tras descartar causas secundarias.',
      laboratorio: 'Panel de causas secundarias: calcio, fosforo, fosfatasa alcalina, creatinina con filtrado, 25-hidroxivitamina D, hormona paratiroidea, TSH, proteinograma con inmunofijacion y calcio en orina de 24 horas.',
      imagen: 'Densitometria y, ante perdida de talla, cifosis o dolor dorsal, imagen vertebral por radiografia lateral o evaluacion vertebral por DXA.',
      complementarios: 'Valoracion del riesgo de caidas (marcha, equilibrio, vision, ortostatismo, farmacos sedantes), que determina el riesgo de fractura tanto como la densidad osea; y revision odontologica antes de iniciar un antirresortivo potente.',
      dx_diferencial: 'Osteomalacia (fosfatasa alcalina alta, vitamina D muy baja, dolor oseo difuso), mieloma multiple, metastasis oseas, hiperparatiroidismo primario, enfermedad de Paget y osteogenesis imperfecta leve del adulto.',
      tx_medico: 'Base en todas: calcio de 1000 a 1200 mg al dia de preferencia con la dieta, y vitamina D de 800 a 1000 UI al dia (calculadora disponible); ejercicio de carga y de fuerza con trabajo de equilibrio; prevencion de caidas; abandono del tabaco y moderacion del alcohol; y correccion de las causas secundarias antes de iniciar el farmaco.',
      tx_farmacologico: `Riesgo alto: bisfosfonato de primera linea (alendronato o risedronato orales, o acido zoledronico intravenoso anual), o denosumab si hay enfermedad renal o intolerancia digestiva. Riesgo muy alto (fractura vertebral o de cadera reciente, fracturas multiples, T muy bajo, o fractura durante el tratamiento): empezar por un <strong>anabolico</strong> (teriparatida, abaloparatida o romosozumab) y consolidar despues con un antirresortivo. El romosozumab no se usa si ha habido infarto o ictus en el ano previo. Ver la Figura 3 de Definicion.`,
      tx_intervencionista: 'Vertebroplastia o cifoplastia solo en casos seleccionados de fractura vertebral con dolor refractario al tratamiento conservador; su beneficio es discutido y no previene nuevas fracturas.',
      criterios_uci: 'No aplica a la osteoporosis en si; la fractura de cadera puede requerir cuidados intermedios en el anciano fragil con comorbilidad.',
      criterios_tips: 'La adherencia es el talon de Aquiles: mas de la mitad de las pacientes abandona el bisfosfonato oral en el primer ano, lo que hace preferibles las pautas anual o semestral en muchas de ellas.',
      seguimiento_hospitalario: 'Ante un ingreso por fractura por fragilidad, no dar el alta sin diagnostico de osteoporosis, estudio de causas secundarias iniciado y tratamiento pautado o citado: es la oportunidad que mas se pierde.',
      seguimiento_ambulatorio: 'Densitometria de control a los 1 a 2 anos de iniciar o cambiar el tratamiento y despues cada 2 anos; medicion anual de la talla; revision de la adherencia en cada visita. Valorar vacaciones terapeuticas tras 5 anos de bisfosfonato oral o 3 de intravenoso si el riesgo ya no es alto, nunca con denosumab.',
      pronostico: 'El tratamiento reduce el riesgo de fractura vertebral entre un 40 y un 70% y el de cadera alrededor de un 40% con los farmacos mas potentes. El pronostico lo empeoran la falta de adherencia y, sobre todo, no tratar despues de una primera fractura.',
      algoritmo: ['Cribar con densitometria a las mujeres desde los 65 anos, antes si hay factores de riesgo, y a cualquier persona de 50 o mas con fractura por fragilidad', 'Diagnosticar por T de -2.5 o menor, por fractura de cadera o vertebra, o por FRAX por encima del umbral en masa osea baja', 'Descartar causas secundarias con el panel minimo y corregir el deficit de vitamina D antes de iniciar el antirresortivo', 'Riesgo alto: bisfosfonato (o denosumab si hay enfermedad renal). Riesgo muy alto: anabolico primero y antirresortivo despues', 'Densitometria de control a los 1 a 2 anos, vigilar la adherencia y valorar vacaciones terapeuticas solo con bisfosfonatos']
    },
    {
      nombre: 'Osteoporosis del varon',
      color: '#3d5a73',
      definicion: 'Osteoporosis en el hombre, infradiagnosticada e infratratada pese a que las fracturas que produce tienen peor pronostico que en la mujer. A diferencia de la posmenopausica, en el varon una proporcion mucho mayor de los casos (hasta la mitad o mas) es <strong>secundaria</strong>, por lo que la busqueda de causas no es opcional.',
      fisiopatologia: 'El varon alcanza un pico de masa osea mayor y no tiene un equivalente de la caida brusca de estrogenos, de modo que su perdida es mas gradual y sus fracturas ocurren mas tarde. Cuando aparece osteoporosis antes de tiempo suele haber una causa: hipogonadismo (que reduce tambien los estrogenos derivados de la aromatizacion, que son los que mas importan para el hueso masculino), alcohol, glucocorticoides o una enfermedad sistemica.',
      epidemiologia: 'Uno de cada cinco varones mayores de 50 anos sufrira una fractura por fragilidad. La mortalidad al ano tras una fractura de cadera es mayor en el varon que en la mujer, y aun asi se le hace densitometria y se le trata con mucha menor frecuencia.',
      factores_riesgo: ['Hipogonadismo, incluida la terapia de deprivacion androgenica en el cancer de prostata', 'Consumo excesivo de alcohol', 'Tabaquismo', 'Glucocorticoides y otros farmacos que danan el hueso', 'Enfermedad pulmonar obstructiva cronica', 'Enfermedad renal cronica y hepatopatia', 'Antecedente de fractura por fragilidad', 'Hipercalciuria y nefrolitiasis de repeticion', 'Edad avanzada y bajo indice de masa corporal'],
      clinica: 'Igual que en la mujer: silente hasta la fractura, con perdida de talla y cifosis como pistas. Puede haber sintomas de la causa secundaria (hipogonadismo con disminucion de la libido y de la masa muscular, sintomas de hepatopatia o de malabsorcion).',
      criterios_dx: 'En varones de 50 anos o mas se usa la puntuacion T con los mismos umbrales que en la mujer; en menores de 50 se usa la puntuacion Z y no se etiqueta de osteoporosis solo por la densitometria. Una fractura por fragilidad de cadera o vertebra diagnostica la enfermedad con independencia de la densidad.',
      laboratorio: 'El panel general mas, de forma obligada, <strong>testosterona total matutina</strong> (repetida si esta baja, con LH y FSH para localizar el nivel del fallo), y con umbral bajo para solicitar serologia de celiaquia, ferritina con indice de saturacion (hemocromatosis) y cortisol libre urinario.',
      imagen: 'Densitometria e imagen vertebral con los mismos criterios que en la mujer; radiografia dirigida ante dolor oseo.',
      complementarios: 'Valoracion del riesgo de caidas y revision de la medicacion. En el varon en terapia de deprivacion androgenica, densitometria basal y tratamiento preventivo desde el inicio.',
      dx_diferencial: 'Mieloma multiple y metastasis oseas (mas frecuentes como causa de fractura vertebral en el varon), osteomalacia, hemocromatosis, hiperparatiroidismo primario y mastocitosis sistemica.',
      tx_medico: 'La misma base que en la mujer, con enfasis en corregir la causa secundaria: abstinencia de alcohol, tratamiento del hipogonadismo cuando esta indicado, y control de la enfermedad de base.',
      tx_farmacologico: 'Los bisfosfonatos, el denosumab, la teriparatida y la abaloparatida han demostrado aumentar la densidad y reducir fracturas en el varon, con la misma logica de estratificacion por riesgo que en la mujer. La testosterona no es un tratamiento de la osteoporosis: se indica por el hipogonadismo en si, y si el riesgo de fractura es alto se anade un farmaco especifico.',
      tx_intervencionista: 'Igual que en la mujer; la fractura de cadera exige cirugia precoz, idealmente en las primeras 24 a 48 horas.',
      criterios_uci: 'No aplica de forma directa.',
      criterios_tips: 'Que la osteoporosis se perciba como una enfermedad de mujeres es la principal razon de su infradiagnostico en el varon: conviene pedir densitometria tras cualquier fractura por fragilidad, tambien en ellos.',
      seguimiento_hospitalario: 'Igual que en la mujer: no dar el alta tras una fractura por fragilidad sin diagnostico, estudio de causas secundarias y tratamiento pautado.',
      seguimiento_ambulatorio: 'Densitometria de control a los 1 a 2 anos, seguimiento de la causa secundaria, y en el paciente en deprivacion androgenica, vigilancia densitometrica periodica durante todo el tratamiento oncologico.',
      pronostico: 'Peor que en la mujer a igualdad de fractura, sobre todo tras la fractura de cadera. El tratamiento es igual de eficaz, de modo que la brecha pronostica se debe en gran parte a que se diagnostica y se trata menos.',
      algoritmo: ['Cribar con densitometria a los varones desde los 70 anos, y desde los 50 si hay factores de riesgo o una fractura por fragilidad', 'Buscar causa secundaria de forma sistematica: hasta la mitad de los casos la tienen. Testosterona matutina obligada', 'Diagnosticar con puntuacion T en 50 anos o mas, y con puntuacion Z en menores de 50', 'Tratar con la misma estratificacion por riesgo que en la mujer; la testosterona no sustituye al farmaco especifico', 'En terapia de deprivacion androgenica, densitometria basal y tratamiento preventivo desde el inicio']
    },
    {
      nombre: 'Osteoporosis secundaria e inducida por glucocorticoides',
      color: '#8a6a1f',
      definicion: 'Perdida de masa osea atribuible a una enfermedad o a un farmaco. La causa mas frecuente con diferencia es el <strong>tratamiento con glucocorticoides</strong>, que tiene guia propia porque su riesgo aparece pronto, con dosis bajas y de forma desproporcionada a la perdida de densidad que se mide.',
      fisiopatologia: 'Los glucocorticoides actuan en las dos direcciones: reducen la formacion (apoptosis de osteoblastos y osteocitos, menor senal Wnt) y aumentan de forma transitoria la resorcion, ademas de disminuir la absorcion intestinal de calcio, aumentar su perdida renal y producir hipogonadismo y miopatia que favorece las caidas. Por eso el riesgo de fractura sube en los primeros 3 a 6 meses, antes de que la densitometria se altere de forma llamativa. Otras causas actuan por sus propios mecanismos: hipogonadismo, exceso de hormona tiroidea, malabsorcion, inflamacion cronica o perdida renal de calcio.',
      epidemiologia: 'La osteoporosis inducida por glucocorticoides es la causa mas frecuente de osteoporosis secundaria y de osteoporosis en pacientes jovenes. Hasta un 30 al 50% de los tratados de forma prolongada sufrira una fractura.',
      factores_riesgo: ['Glucocorticoides: el riesgo empieza con dosis bajas (equivalente a 2.5 a 5 mg de prednisona) y desde los primeros meses', 'Hipogonadismo de cualquier causa, incluidas las terapias de deprivacion hormonal', 'Hipertiroidismo, incluido el subclinico y el yatrogeno por exceso de levotiroxina', 'Hiperparatiroidismo primario y sindrome de Cushing', 'Malabsorcion: celiaquia, enfermedad inflamatoria intestinal, cirugia bariatrica', 'Enfermedad renal cronica y trasplante de organo solido', 'Artritis reumatoide y otras enfermedades inflamatorias cronicas', 'Farmacos: inhibidores de aromatasa, antiandrogenos, anticonvulsivantes, inhibidores de la calcineurina, heparina prolongada', 'Mieloma multiple y mastocitosis sistemica'],
      clinica: 'La de la enfermedad de base mas la fractura cuando ocurre. En la inducida por glucocorticoides es caracteristico que las fracturas vertebrales aparezcan con densidades que en una osteoporosis posmenopausica no las habrian producido: la calidad del hueso esta mas danada que su cantidad.',
      criterios_dx: 'Densitometria con los criterios habituales, pero interpretada con umbrales mas exigentes en el paciente con glucocorticoides. En premenopausicas y varones menores de 50 se usa la puntuacion Z, y un valor de -2.0 o menor obliga a estudio. La busqueda de causas es obligada ante osteoporosis en el joven, puntuacion Z baja, fracturas desproporcionadas o mala respuesta al tratamiento.',
      laboratorio: 'Panel amplio segun la sospecha: calcio, fosforo, fosfatasa alcalina, funcion renal, 25-hidroxivitamina D, hormona paratiroidea, TSH, proteinograma con inmunofijacion, calcio en orina de 24 horas, testosterona en el varon, serologia de celiaquia, ferritina con indice de saturacion, triptasa y cortisol libre urinario o supresion con dexametasona.',
      imagen: 'Densitometria e imagen vertebral con umbral bajo, ya que las fracturas vertebrales asintomaticas son especialmente frecuentes con glucocorticoides.',
      complementarios: 'Revision farmacologica estructurada para reducir la dosis de glucocorticoide a la minima eficaz y buscar alternativas ahorradoras; y tratamiento de la enfermedad de base.',
      dx_diferencial: 'Osteomalacia, mieloma, metastasis, osteogenesis imperfecta leve y osteoporosis idiopatica del adulto joven cuando el estudio de causas resulta negativo.',
      tx_medico: 'Corregir la causa siempre que se pueda: reducir el glucocorticoide a la dosis minima eficaz, tratar el hipertiroidismo o el hiperparatiroidismo, corregir la malabsorcion, tratar el hipogonadismo. Asegurar calcio y vitamina D en todos, con especial atencion en el paciente con glucocorticoides.',
      tx_farmacologico: 'En la osteoporosis inducida por glucocorticoides se trata de forma precoz y con umbrales mas bajos: se inicia tratamiento en todo paciente con riesgo moderado o alto que vaya a recibir glucocorticoides durante 3 meses o mas. Los bisfosfonatos son de primera linea por eficacia y coste; la teriparatida ha demostrado ser superior a los bisfosfonatos en este escenario concreto y se prefiere en el riesgo alto; el denosumab es una alternativa. En el resto de causas secundarias, el tratamiento especifico sigue la misma estratificacion por riesgo que la osteoporosis primaria.',
      tx_intervencionista: 'La correspondiente a la causa (paratiroidectomia en el hiperparatiroidismo primario con criterios quirurgicos) y a la fractura si se produce.',
      criterios_uci: 'No aplica de forma directa.',
      criterios_tips: 'La ventana de intervencion en el paciente que va a recibir glucocorticoides es <strong>antes</strong> de que empiece a perder hueso: esperar a la densitometria alterada es llegar tarde.',
      seguimiento_hospitalario: 'Al pautar glucocorticoides prolongados durante un ingreso, dejar indicados el calcio, la vitamina D y, si procede, el tratamiento especifico, y solicitar la densitometria basal.',
      seguimiento_ambulatorio: 'Densitometria basal al iniciar glucocorticoides prolongados y control a los 12 meses; reevaluar el riesgo cada vez que cambie la dosis; y mantener el tratamiento mientras dure la exposicion.',
      pronostico: 'Con la causa corregida y el tratamiento adecuado, buena parte de la perdida es recuperable, sobre todo la inducida por glucocorticoides tras su retirada. El riesgo de fractura por glucocorticoides desciende con rapidez al suspenderlos.',
      algoritmo: ['Buscar causa secundaria de forma sistematica: obligatorio en el joven, con puntuacion Z de -2.0 o menor, o ante fracturas desproporcionadas', 'Panel minimo mas pruebas dirigidas segun la sospecha; en el varon, testosterona matutina', 'Con glucocorticoides previstos 3 meses o mas: calcio y vitamina D en todos, y tratamiento especifico si el riesgo es moderado o alto', 'Bisfosfonato de primera linea; teriparatida preferida en el riesgo alto por glucocorticoides; denosumab como alternativa', 'Corregir la causa (reducir el esteroide, tratar el hipertiroidismo o la malabsorcion) y mantener el tratamiento mientras dure la exposicion']
    },
    {
      nombre: 'Fractura por fragilidad',
      color: '#7a1f3d',
      definicion: 'Complicacion que define a la osteoporosis (ver las fichas de las tres formas): fractura producida por un traumatismo de baja energia, tipicamente una caida desde la propia altura o menos. Las localizaciones caracteristicas son la vertebra, la cadera, la muneca (Colles), el humero proximal y la pelvis.',
      fisiopatologia: 'La perdida de masa osea y el deterioro de la microarquitectura reducen la resistencia del hueso por debajo de la carga que soporta en un traumatismo trivial. No se re-explica aqui el mecanismo de la perdida osea, descrito en las fichas correspondientes; lo especifico es que <strong>una fractura genera las siguientes</strong>: tras una fractura vertebral, el riesgo de otra en el ano siguiente se multiplica varias veces (fenomeno de cascada).',
      epidemiologia: 'Una de cada tres mujeres y uno de cada cinco varones mayores de 50 anos sufrira una. La de cadera es la mas grave: mortalidad del 20 al 30% al ano, y de los supervivientes, una proporcion importante no recupera la independencia previa. Hasta dos tercios de las vertebrales son asintomaticas.',
      factores_riesgo: ['Fractura por fragilidad previa, sobre todo en los 12 a 24 meses anteriores', 'Densidad mineral osea baja', 'Edad avanzada', 'Riesgo alto de caidas: alteracion de la marcha o el equilibrio, deficit visual, ortostatismo, sarcopenia', 'Farmacos sedantes, hipnoticos, antidepresivos y antihipertensivos que producen ortostatismo', 'Glucocorticoides', 'Bajo indice de masa corporal', 'Barreras del entorno domestico y vida sedentaria'],
      clinica: 'Vertebral: dolor dorsal o lumbar agudo tras un esfuerzo minimo, o hallazgo casual en una radiografia; con el tiempo, perdida de talla y cifosis con repercusion respiratoria y digestiva. Cadera: dolor inguinal con impotencia funcional y acortamiento con rotacion externa. Muneca y humero: dolor y deformidad tras una caida sobre la mano extendida.',
      criterios_dx: 'Fractura demostrada por imagen en el contexto de un traumatismo de baja energia. La fractura de cadera o de vertebra, por si sola, <strong>diagnostica osteoporosis con independencia de la densitometria</strong>, incluso con puntuacion T normal.',
      laboratorio: 'Panel de causas secundarias, que en el paciente que ya se ha fracturado deja de ser opcional; y el preoperatorio correspondiente si va a cirugia.',
      imagen: 'Radiografia simple del hueso doloroso; resonancia si la de cadera es normal pero la sospecha es alta (fractura oculta) o para distinguir la fractura vertebral aguda de la antigua y descartar una fractura patologica.',
      complementarios: 'Valoracion geriatrica integral en el anciano con fractura de cadera; y sobre todo, inclusion en un <strong>servicio de coordinacion de fracturas</strong>, que es la intervencion que mas ha demostrado reducir la segunda fractura.',
      dx_diferencial: 'Fractura patologica por metastasis o mieloma (sospechar ante dolor de reposo, sintomas sistemicos, afectacion de pediculos o de vertebras por encima de T4), osteomalacia con fracturas de estres, y fractura femoral atipica en el paciente con antirresortivo prolongado.',
      tx_medico: 'Analgesia adecuada, movilizacion precoz y rehabilitacion; prevencion de caidas y revision de los farmacos que las favorecen; y, de forma indispensable, <strong>iniciar o intensificar el tratamiento de la osteoporosis</strong>, porque una fractura reciente coloca al paciente en riesgo muy alto.',
      tx_farmacologico: 'La fractura reciente de cadera o vertebra define riesgo muy alto: se prefiere empezar por un <strong>anabolico</strong> (teriparatida, abaloparatida o romosozumab) y consolidar despues con un antirresortivo. El acido zoledronico tras una fractura de cadera reduce nuevas fracturas y la mortalidad, y se administra a partir de las 2 semanas de la cirugia.',
      tx_intervencionista: 'Cirugia precoz de la fractura de cadera, idealmente en las primeras 24 a 48 horas, que mejora la supervivencia y la funcion. Vertebroplastia o cifoplastia solo en dolor vertebral refractario seleccionado.',
      criterios_uci: 'No la fractura en si, sino sus complicaciones: embolia grasa, tromboembolia, delirium grave, o descompensacion de la comorbilidad en el anciano fragil.',
      criterios_tips: 'La <strong>brecha de tratamiento</strong> tras la fractura es el mayor fracaso del manejo de esta enfermedad: la mayoria de los pacientes que se fractura sale del hospital sin diagnostico ni tratamiento de osteoporosis.',
      seguimiento_hospitalario: 'Cirugia precoz, profilaxis antitrombotica, prevencion y manejo del delirium, movilizacion desde el primer dia, y no dar el alta sin diagnostico de osteoporosis, estudio iniciado y tratamiento pautado o citado.',
      seguimiento_ambulatorio: 'Rehabilitacion y programa de prevencion de caidas; seguimiento en un circuito de coordinacion de fracturas; densitometria y control del tratamiento; y valoracion de la fragilidad y de la situacion funcional y social.',
      pronostico: 'La fractura de cadera tiene una mortalidad del 20 al 30% al ano y deja secuelas funcionales frecuentes. El tratamiento tras la fractura reduce de forma significativa la incidencia de nuevas fracturas y, con acido zoledronico tras fractura de cadera, tambien la mortalidad.',
      algoritmo: ['Fractura por traumatismo de baja energia: es una fractura por fragilidad hasta que se demuestre lo contrario', 'La de cadera o vertebra diagnostica osteoporosis aunque la densitometria sea normal', 'Descartar fractura patologica (metastasis, mieloma) si el cuadro es atipico', 'Cirugia precoz en la de cadera; analgesia, movilizacion y rehabilitacion en todas', 'No dar el alta sin diagnostico, estudio de causas secundarias y tratamiento: la fractura reciente define riesgo muy alto']
    },
    {
      nombre: 'Osteonecrosis mandibular y fractura femoral atipica',
      color: '#6b4a2e',
      definicion: 'Las dos complicaciones raras del tratamiento antirresortivo prolongado (ver las fichas de las formas de osteoporosis). La osteonecrosis de los maxilares es la exposicion de hueso necrotico en la cavidad oral que persiste mas de 8 semanas en un paciente tratado con antirresortivos o antiangiogenicos y sin radioterapia previa de la zona. La fractura femoral atipica es una fractura subtrocanterica o diafisaria transversa, por sobresupresion del remodelado.',
      fisiopatologia: 'La supresion mantenida del remodelado impide reparar el microdano acumulado. En el maxilar, sometido a carga masticatoria continua y expuesto a la flora oral a traves del periodonto, esa incapacidad de reparacion se manifiesta como necrosis tras una extraccion o una infeccion. En el femur, el microdano no reparado progresa hasta una fractura de estres que termina completandose con un traumatismo minimo o sin el.',
      epidemiologia: 'Ambas son <strong>muy raras a las dosis de la osteoporosis</strong>. La osteonecrosis mandibular ocurre en el orden de 1 por cada 10.000 a 100.000 pacientes-ano, frente a un 1 a 15% con las dosis oncologicas altas. La fractura atipica tiene una incidencia baja que aumenta con la duracion del tratamiento y disminuye con rapidez al suspenderlo. El beneficio de prevenir fracturas supera con mucho a estos riesgos, pero el temor a ellos es una causa mayor de infratratamiento.',
      factores_riesgo: ['Duracion prolongada del antirresortivo (mas de 5 anos, y sobre todo mas de 8 a 10)', 'Dosis oncologicas de bisfosfonato o de denosumab', 'Extraccion dental u otra cirugia dentoalveolar, y mala higiene oral (osteonecrosis)', 'Protesis dentales mal ajustadas, periodontitis y diabetes', 'Glucocorticoides, antiangiogenicos y tabaquismo', 'Ascendencia asiatica y femur curvo (fractura atipica)', 'Dolor prodromico en muslo o ingle sin fractura evidente'],
      clinica: 'Osteonecrosis: dolor, exposicion de hueso, supuracion, fistula, movilidad dentaria o parestesia del nervio dentario inferior. Fractura femoral atipica: <strong>dolor prodromico en muslo o ingle durante semanas o meses</strong>, sordo y de caracter mecanico, que precede a la fractura completa; es bilateral en cerca de un tercio de los casos, por lo que hay que estudiar tambien el femur contralateral.',
      criterios_dx: 'Osteonecrosis: hueso expuesto o fistula que sondea a hueso, persistente mas de 8 semanas, con antecedente de antirresortivo y sin radioterapia local. Fractura atipica: localizacion subtrocanterica o diafisaria, trazo transverso u oblicuo corto, sin conminucion, con engrosamiento cortical localizado y fractura de la cortical lateral.',
      laboratorio: 'Sin marcador diagnostico. Calcio, vitamina D y funcion renal en el manejo general; marcadores de remodelado muy suprimidos pueden apoyar la sospecha de sobresupresion, pero no la confirman.',
      imagen: 'Osteonecrosis: ortopantomografia y tomografia de macizo facial para delimitar la extension. Fractura atipica: <strong>radiografia de los dos femures</strong> ante dolor de muslo en tratado prolongado; si es normal y la sospecha persiste, resonancia o gammagrafia para detectar la fractura de estres.',
      complementarios: 'Valoracion odontologica <strong>antes</strong> de iniciar un antirresortivo, con resolucion de los focos infecciosos y de las extracciones necesarias; y educacion sobre la higiene oral durante el tratamiento.',
      dx_diferencial: 'Osteonecrosis: osteomielitis maxilar, alveolitis, periodontitis avanzada, tumor. Fractura atipica: fractura osteoporotica tipica del femur proximal (que es intertrocanterica o de cuello, no diafisaria transversa) y fractura patologica por metastasis.',
      tx_medico: 'Osteonecrosis: enjuagues antisepticos, antibiotico si hay infeccion, analgesia y manejo conservador en los estadios iniciales, con desbridamiento minimo; se evita la cirugia agresiva. Fractura atipica: suspender el antirresortivo, descarga del miembro y valoracion ortopedica.',
      tx_farmacologico: 'Suspender o aplazar el antirresortivo mientras se resuelve, sopesando el riesgo de fractura que reaparece al hacerlo, y muy en particular el rebote si se trata de denosumab (ver esa ficha). La teriparatida se ha usado para favorecer la consolidacion tanto en la osteonecrosis como en la fractura atipica.',
      tx_intervencionista: 'Osteonecrosis: desbridamiento o reseccion en los estadios avanzados, por cirugia maxilofacial. Fractura atipica: enclavado intramedular profilactico si hay fractura incompleta con dolor, y osteosintesis si es completa; la consolidacion es lenta.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'La proporcion es lo que hay que transmitir al paciente: por cada caso de osteonecrosis o de fractura atipica se previenen decenas o cientos de fracturas por fragilidad. Interrumpir un tratamiento eficaz por este temor causa mas dano que el que evita.',
      seguimiento_hospitalario: 'Ante una fractura femoral en un paciente con antirresortivo prolongado, revisar el trazo y la localizacion y radiografiar el femur contralateral antes del alta.',
      seguimiento_ambulatorio: 'Preguntar de forma activa por dolor en muslo o ingle en cada visita del paciente con tratamiento prolongado, y por problemas dentales; y reevaluar periodicamente si sigue siendo necesario mantener el antirresortivo.',
      pronostico: 'La mayoria de las osteonecrosis en estadios iniciales se controla con manejo conservador. La fractura atipica consolida de forma lenta y puede requerir cirugia, pero su incidencia cae con rapidez tras suspender el farmaco.',
      algoritmo: ['Valoracion odontologica y resolucion de focos infecciosos ANTES de iniciar un antirresortivo potente', 'Dolor en muslo o ingle en tratado prolongado: radiografiar LOS DOS femures; resonancia si son normales y persiste la sospecha', 'Osteonecrosis: manejo conservador en estadios iniciales, antibiotico si hay infeccion, evitar cirugia agresiva', 'Suspender o aplazar el antirresortivo, teniendo en cuenta el rebote si es denosumab', 'Transmitir la proporcion real del riesgo: el temor a estas complicaciones causa mas infratratamiento que dano evitan']
    },
    {
      nombre: 'Rebote tras suspender el denosumab',
      color: '#8c3a34',
      definicion: 'Complicacion del tratamiento con denosumab (ver las fichas de las formas de osteoporosis): al suspenderlo sin pasar a otro antirresortivo, la resorcion osea rebota por encima del nivel basal y se produce una perdida rapida de la densidad ganada, con riesgo de <strong>fracturas vertebrales multiples</strong> en los meses siguientes. Es infrecuente, grave y por completo evitable.',
      fisiopatologia: 'El denosumab bloquea RANKL de forma reversible y no se deposita en el hueso, a diferencia del bisfosfonato. Durante el tratamiento se acumulan precursores osteoclasticos y aumenta el RANKL disponible; cuando el farmaco se elimina (su efecto dura unos 6 meses), toda esa maquinaria se activa de golpe y la resorcion se dispara muy por encima de lo normal. La densidad ganada se pierde en 12 a 24 meses.',
      epidemiologia: 'El fenomeno de perdida de densidad al suspenderlo es constante; las fracturas vertebrales multiples ocurren en una minoria, pero se concentran en quienes ya tenian fracturas vertebrales previas y en los que llevaban mas tiempo de tratamiento.',
      factores_riesgo: ['Suspension del denosumab sin transicion a otro antirresortivo', 'Retraso de la dosis mas alla de los 7 meses desde la anterior', 'Fracturas vertebrales previas', 'Mayor duracion del tratamiento y mayor ganancia de densidad durante el', 'Perdida del seguimiento o problemas de acceso al farmaco', 'Interrupcion por un procedimiento dental o una cirugia sin plan de sustitucion'],
      clinica: 'Dolor dorsal o lumbar agudo, a menudo en varios niveles a la vez, entre los 6 y los 24 meses de la ultima dosis, con perdida de talla. Puede debutar directamente como fracturas vertebrales multiples en cascada.',
      criterios_dx: 'Fracturas vertebrales nuevas, con frecuencia multiples, en un paciente que suspendio el denosumab. La sospecha es fundamentalmente cronologica: cualquier dolor vertebral agudo en los 6 a 24 meses posteriores a la ultima dosis obliga a imagen vertebral.',
      laboratorio: 'Marcadores de remodelado (CTX) muy elevados apoyan el diagnostico y sirven para vigilar la eficacia de la transicion; calcio, vitamina D y funcion renal.',
      imagen: 'Radiografia lateral de columna dorsal y lumbar o evaluacion vertebral por DXA ante cualquier dolor vertebral en ese periodo; resonancia para datar las fracturas si hay duda.',
      complementarios: 'Sistema de recordatorio y de citas que garantice que la dosis se administra cada 6 meses sin demora: la mayoria de los casos empieza como un simple retraso administrativo.',
      dx_diferencial: 'Fracturas vertebrales por progresion natural de la osteoporosis, fractura patologica por mieloma o metastasis, y espondilodiscitis.',
      tx_medico: 'La clave es la <strong>prevencion</strong>: no suspender nunca el denosumab sin un plan. Si hay que suspenderlo, se pauta un bisfosfonato al llegar el momento de la dosis que se omite. Educar al paciente en que este farmaco, a diferencia de los bisfosfonatos, no admite pausas ni retrasos.',
      tx_farmacologico: 'Transicion obligada a un bisfosfonato: acido zoledronico intravenoso 6 meses despues de la ultima dosis de denosumab, o alendronato, con control de los marcadores de remodelado a los 3 a 6 meses y una segunda dosis de zoledronico si vuelven a elevarse. Si ya se han producido las fracturas, tratar la osteoporosis como riesgo muy alto.',
      tx_intervencionista: 'El de las fracturas vertebrales si producen dolor refractario; en general se manejan de forma conservadora.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'Este es probablemente el error evitable mas frecuente y mas grave del tratamiento de la osteoporosis: <strong>al denosumab no se le hacen vacaciones terapeuticas</strong>. La regla de las vacaciones vale solo para los bisfosfonatos.',
      seguimiento_hospitalario: 'Si un paciente en denosumab ingresa por cualquier motivo, comprobar la fecha de la ultima dosis y asegurar que la siguiente no se retrasara por el ingreso.',
      seguimiento_ambulatorio: 'Cita programada cada 6 meses con margen estrecho; comprobar la administracion efectiva y no solo la prescripcion; y si se decide suspender, dejar pautado el bisfosfonato de transicion en el mismo acto en que se toma la decision.',
      pronostico: 'Excelente si se previene: la transicion a un bisfosfonato evita en gran medida la perdida y las fracturas. Malo si ocurre: las fracturas vertebrales multiples producen dolor, deformidad y perdida funcional importantes.',
      algoritmo: ['Al denosumab NO se le hacen vacaciones terapeuticas: la regla vale solo para los bisfosfonatos', 'Administrar cada 6 meses sin retrasos; un retraso de mas de 7 meses ya es riesgo', 'Si hay que suspenderlo, pautar un bisfosfonato en el momento en que tocaba la dosis omitida (zoledronico o alendronato)', 'Controlar los marcadores de remodelado a los 3 a 6 meses de la transicion y repetir el zoledronico si vuelven a subir', 'Dolor vertebral agudo entre los 6 y 24 meses de la ultima dosis: imagen vertebral urgente']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La osteoporosis es una enfermedad ambulatoria que llega al hospital de una sola forma: como fractura. Y es ahi donde se produce el mayor fallo asistencial del tema, la llamada brecha de tratamiento: la mayoria de los pacientes que ingresa por una fractura por fragilidad recibe el alta sin que nadie haya escrito la palabra osteoporosis en su informe.',
    parametros: ['Ante toda fractura por traumatismo de baja energia en una persona de 50 anos o mas: registrar el diagnostico de osteoporosis en el informe', 'Iniciar el estudio de causas secundarias durante el ingreso: calcio, fosforo, fosfatasa alcalina, funcion renal, 25-hidroxivitamina D, hormona paratiroidea, TSH, proteinograma y, en el varon, testosterona', 'Corregir el deficit de vitamina D antes de administrar un antirresortivo potente, para evitar la hipocalcemia', 'Cirugia precoz de la fractura de cadera, idealmente en las primeras 24 a 48 horas', 'Acido zoledronico a partir de las 2 semanas de la cirugia de cadera: reduce nuevas fracturas y la mortalidad', 'Considerar que la fractura reciente define riesgo muy alto: valorar iniciar por un anabolico y consolidar despues', 'Comprobar en todo ingresado si esta en tratamiento con denosumab y asegurar que la dosis semestral no se retrasa', 'Movilizacion precoz, prevencion y manejo del delirium, profilaxis antitrombotica y valoracion geriatrica integral en el anciano', 'Revisar los farmacos que favorecen las caidas (sedantes, hipnoticos, antihipertensivos con ortostatismo) y ajustarlos', 'Derivar a un servicio de coordinacion de fracturas o dejar cita concreta: es la intervencion que mas reduce la segunda fractura'],
    criterios_uci_general: 'No la osteoporosis, sino las complicaciones de la fractura: embolia grasa, tromboembolia pulmonar, delirium grave o descompensacion de la comorbilidad en el anciano fragil.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa. La osteoporosis postrasplante es una complicacion frecuente del trasplante de organo solido, por los glucocorticoides y los inhibidores de la calcineurina, y exige densitometria basal y tratamiento preventivo.',
    prevencion: 'Primaria a lo largo de toda la vida: alcanzar un buen pico de masa osea en la infancia y la adolescencia con nutricion adecuada, calcio, vitamina D y actividad fisica de impacto; y despues mantenerlo con ejercicio de carga y de fuerza, no fumar y moderar el alcohol. Secundaria: cribado densitometrico en mujeres desde los 65 anos y varones desde los 70, antes con factores de riesgo, y en toda persona de 50 o mas con una fractura por fragilidad; deteccion y correccion de causas secundarias; y prevencion de caidas, que reduce fracturas de forma independiente de la densidad osea. Terciaria: tras la primera fractura, tratamiento farmacologico y seguimiento estructurado, porque el momento de mayor riesgo de una segunda fractura son los 12 a 24 meses siguientes a la primera.'
  }
};

export const compCites = {
  'Osteoporosis posmenopausica': [1, 2, 3, 6],
  'Osteoporosis del varon': [4, 1],
  'Osteoporosis secundaria e inducida por glucocorticoides': [5, 1],
  'Fractura por fragilidad': [1, 19],
  'Osteonecrosis mandibular y fractura femoral atipica': [17, 18],
  'Rebote tras suspender el denosumab': [13, 14, 8]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Criterios densitometricos de la OMS (calculadora disponible)': [1],
  'Puntuacion Z y sospecha de causa secundaria': [1],
  'FRAX y umbrales de tratamiento': [7, 1],
  'Estratificacion en riesgo alto frente a muy alto': [6, 2]
};
export const escalaCalc = {
  'Criterios densitometricos de la OMS (calculadora disponible)': 'densitometria-osteoporosis',
  'FRAX y umbrales de tratamiento': 'densitometria-osteoporosis'
};
export const compGroups = [
  { name: 'Formas de osteoporosis', items: ['Osteoporosis posmenopausica', 'Osteoporosis del varon', 'Osteoporosis secundaria e inducida por glucocorticoides'] },
  { name: 'Complicaciones', items: ['Fractura por fragilidad', 'Osteonecrosis mandibular y fractura femoral atipica', 'Rebote tras suspender el denosumab'] }
];
export const complicacionesIntro = 'Las tres primeras fichas son las formas de la enfermedad: la posmenopausica, que es la mas frecuente; la del varon, infradiagnosticada y con causa secundaria en la mitad de los casos; y la secundaria, cuya causa mas frecuente con diferencia es el tratamiento con glucocorticoides. Las tres ultimas son complicaciones: la fractura por fragilidad, que es la manifestacion misma de la enfermedad; las complicaciones raras del antirresortivo prolongado, mucho mas temidas de lo que su frecuencia justifica; y el rebote tras suspender el denosumab, infrecuente pero grave y por completo evitable.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Clasificacion y riesgo' },
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
      { title: 'Fractura por fragilidad', sub: 'Cadera o vertebra, con T normal', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'FRAX en masa osea baja', sub: '3% cadera o 20% mayor', color: '#8a6a1f', target: 'clasificacion' }
    ] },
    { title: 'Formas', sub: 'Buscar siempre causa secundaria', color: '#7a6a55', target: 'complicaciones', leaves: [
      { title: 'Posmenopausica', sub: 'La mas frecuente', color: '#7a6a55', target: 'complicaciones' },
      { title: 'Del varon', sub: 'Secundaria en la mitad de los casos', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Por glucocorticoides', sub: 'La secundaria mas frecuente', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'Tratamiento y sus trampas', sub: 'El orden y el denosumab', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Antirresortivos', sub: 'Bisfosfonatos y denosumab', color: '#8c3a34', target: 'definicion' },
      { title: 'Anabolicos', sub: 'Teriparatida y romosozumab', color: '#3f6b52', target: 'definicion' },
      { title: 'Complicaciones raras', sub: 'Osteonecrosis y fractura atipica', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Rebote del denosumab', sub: 'Nunca sin bisfosfonato despues', color: '#8c3a34', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1], no_invasivos: [1, 7], imagen: [1, 18] };
export const clasificacionCite = [1, 7, 6];
export const seguimientoCite = [1, 19];
