// topics/nodulo-cancer-tiroides/content.js: Nodulo Tiroideo, Bocio y Cancer de Tiroides.
// Cubre los items "Bocio difuso y multinodular no toxico", "Nodulo tiroideo" y "Neoplasias del
// tiroides" del cluster Tiroides y paratiroides (bloque VII, Endocrinologia y Metabolismo).
// Cuarto de los cinco temas del eje tiroideo. La parte de "trastornos del metabolismo oseo y
// mineral" que el temario incluye en el mismo item se desarrolla en `metabolismo-oseo-mineral`,
// porque paratiroides y calcio son otra enfermedad.
//
// Fuentes principales: guia de la American Thyroid Association para el nodulo tiroideo y el
// cancer diferenciado; sistema TI-RADS del American College of Radiology; sistema Bethesda para
// la citologia tiroidea; guias de la ATA para el carcinoma medular y para el anaplasico; y los
// ensayos DECISION, SELECT y LIBRETTO en enfermedad avanzada.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 5 formas (nodulo y bocio no toxico, papilar, folicular y oncocitico, medular,
// anaplasico y linfoma) + 3 complicaciones (compresivas, de la tiroidectomia, recurrencia y
// seguimiento). 2 calculadoras, 2 figuras.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'nodulo-cancer-tiroides',
  titulo: 'Nódulo y Cáncer de Tiroides',
  subtitulo: 'Módulo 46 · Medicina Interna',
  accent: '#5b4a86',
  accentDim: '#b3a8cd'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const anatomiaHtml = `
<div style="max-width:640px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;gap:8px;flex-wrap:wrap;">
    <div style="flex:1;min-width:230px;">
      <svg viewBox="0 0 260 250" style="width:100%;height:auto;">
        <!-- traquea -->
        <rect x="112" y="18" width="36" height="214" rx="8" fill="none" stroke="var(--line)" stroke-width="1.6"/>
        <line x1="112" y1="46" x2="148" y2="46" stroke="var(--line)" stroke-width="1"/>
        <line x1="112" y1="66" x2="148" y2="66" stroke="var(--line)" stroke-width="1"/>
        <line x1="112" y1="86" x2="148" y2="86" stroke="var(--line)" stroke-width="1"/>
        <line x1="112" y1="106" x2="148" y2="106" stroke="var(--line)" stroke-width="1"/>
        <line x1="112" y1="126" x2="148" y2="126" stroke="var(--line)" stroke-width="1"/>
        <text x="130" y="14" text-anchor="middle" fill="var(--ink-dim)" font-size="8">Tráquea</text>
        <!-- lobulos tiroideos -->
        <path d="M112 52 C 84 54, 68 74, 70 104 C 72 134, 92 150, 108 142 C 118 136, 116 96, 112 52 Z" fill="#5b4a8630" stroke="#5b4a86" stroke-width="1.5"/>
        <path d="M148 52 C 176 54, 192 74, 190 104 C 188 134, 168 150, 152 142 C 142 136, 144 96, 148 52 Z" fill="#5b4a8630" stroke="#5b4a86" stroke-width="1.5"/>
        <rect x="112" y="92" width="36" height="24" fill="#5b4a8630" stroke="#5b4a86" stroke-width="1.2"/>
        <text x="130" y="108" text-anchor="middle" fill="#5b4a86" font-size="7.5">Istmo</text>
        <text x="58" y="98" text-anchor="end" fill="#5b4a86" font-size="8">Lóbulo</text>
        <text x="58" y="108" text-anchor="end" fill="#5b4a86" font-size="8">izquierdo</text>
        <!-- paratiroides -->
        <circle cx="80" cy="76" r="5" fill="#8a6a1f" stroke="#8a6a1f"/>
        <circle cx="82" cy="126" r="5" fill="#8a6a1f" stroke="#8a6a1f"/>
        <circle cx="180" cy="76" r="5" fill="#8a6a1f" stroke="#8a6a1f"/>
        <circle cx="178" cy="126" r="5" fill="#8a6a1f" stroke="#8a6a1f"/>
        <text x="206" y="70" fill="#8a6a1f" font-size="8">4 paratiroides</text>
        <text x="206" y="80" fill="#8a6a1f" font-size="8">en la cara</text>
        <text x="206" y="90" fill="#8a6a1f" font-size="8">posterior</text>
        <!-- nervio recurrente -->
        <path d="M100 232 C 96 190, 100 150, 104 112 C 106 88, 108 70, 108 52" fill="none" stroke="#8c3a34" stroke-width="1.8" stroke-dasharray="4 2"/>
        <path d="M160 232 C 164 190, 160 150, 156 112 C 154 88, 152 70, 152 52" fill="none" stroke="#8c3a34" stroke-width="1.8" stroke-dasharray="4 2"/>
        <text x="20" y="200" fill="#8c3a34" font-size="8">Nervio laríngeo</text>
        <text x="20" y="210" fill="#8c3a34" font-size="8">recurrente</text>
        <line x1="76" y1="205" x2="98" y2="200" stroke="#8c3a34" stroke-width="1"/>
        <!-- arterias -->
        <path d="M70 62 C 50 58, 40 64, 34 72" fill="none" stroke="#b4552f" stroke-width="1.8"/>
        <path d="M72 138 C 52 144, 42 150, 36 158" fill="none" stroke="#b4552f" stroke-width="1.8"/>
        <text x="10" y="66" fill="#b4552f" font-size="8">A. tiroidea</text>
        <text x="10" y="76" fill="#b4552f" font-size="8">superior</text>
        <text x="10" y="152" fill="#b4552f" font-size="8">A. tiroidea</text>
        <text x="10" y="162" fill="#b4552f" font-size="8">inferior</text>
      </svg>
    </div>
    <div style="flex:1;min-width:250px;display:flex;flex-direction:column;gap:5px;">
      <div style="border:1px solid #8c3a34;border-radius:8px;padding:6px 9px;background:#8c3a3412;">
        <div style="font-weight:700;color:#8c3a34;">El nervio laríngeo recurrente</div>
        <div style="color:var(--ink-dim);">Asciende en el surco traqueoesofagico, muy cerca de la <strong>arteria tiroidea inferior</strong> y del ligamento de Berry, que es donde más se lesiona. Inerva todos los músculos intrínsecos de la laringe salvo el cricotiroideo. Su lesión unilateral produce <strong>disfonia</strong> con voz débil y aspiración; la <strong>bilateral</strong> puede cerrar la glotis y obligar a traqueostomía urgente.</div>
      </div>
      <div style="border:1px solid #b4552f;border-radius:8px;padding:6px 9px;background:#b4552f12;">
        <div style="font-weight:700;color:#b4552f;">La rama externa del laríngeo superior</div>
        <div style="color:var(--ink-dim);">Discurre junto a la <strong>arteria tiroidea superior</strong> e inerva el músculo cricotiroideo, que tensa la cuerda. Su lesión no da disfonia franca sino <strong>pérdida de los tonos agudos y fatiga vocal</strong>: pasa desapercibida salvo en cantantes y profesionales de la voz.</div>
      </div>
      <div style="border:1px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f12;">
        <div style="font-weight:700;color:#8a6a1f;">Las cuatro paratiroides</div>
        <div style="color:var(--ink-dim);">Están en la cara <strong>posterior</strong> de los lóbulos y su irrigación depende casi por completo de la <strong>arteria tiroidea inferior</strong>. Por eso la tiroidectomía total puede dejar hipoparatiroidismo, transitorio en el 20 al 30% de los casos y permanente en el 1 al 3%. Si una glándula queda desvascularizada, se autotrasplanta en el esternocleidomastoideo.</div>
      </div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 9px;background:var(--panel2);color:var(--ink-dim);">
        <strong style="color:var(--accent-fg);">Por que importa esta anatomía:</strong> las dos complicaciones que definen la calidad de una tiroidectomía (disfonia e hipocalcemia) se explican por completo por lo que rodea a la glándula, y por eso el volumen quirúrgico del cirujano es el mejor predictor de ambas.
      </div>
    </div>
  </div>
</div>`;

const noduloHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">1. Siempre<br>una TSH</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Si la TSH esta <strong>SUPRIMIDA</strong>, el camino cambia: se hace <strong>gammagrafía</strong> y, si el nódulo es caliente, es un adenoma tóxico. Un nódulo caliente prácticamente nunca es maligno y <strong>no se punciona</strong>: se trata como hipertiroidismo. Si la TSH es normal o alta, se sigue por ecografía.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">2. Ecografía<br>y TI-RADS</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Se puntuan cinco características: composición, ecogenicidad, forma, margen y focos ecogenicos. La suma da la categoría <strong>TR1 a TR5</strong>, y la conducta depende de la categoría <strong>Y del tamano</strong> a la vez, no de ninguna de las dos por separado (calculadora disponible).</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">3. Punción<br>o vigilancia</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Umbrales de punción: <strong>TR5 a partir de 1 cm</strong>, <strong>TR4 a partir de 1.5 cm</strong> y <strong>TR3 a partir de 2.5 cm</strong>. TR1 y TR2 no se puncionan. Por debajo de esos tamanos, seguimiento ecográfico. Es lo que evita puncionar los millones de nódulos pequenos e irrelevantes que la ecografía detecta.</div>
    </div>
  </div>
  <div style="font-weight:700;color:var(--accent-fg);margin:8px 0 4px;">4. Citología: sistema Bethesda y que hacer con cada categoría</div>
  <div style="display:flex;flex-direction:column;gap:3px;">
    <div style="display:grid;grid-template-columns:118px 90px 1fr;gap:5px;align-items:center;">
      <div style="border:1px solid #6b4a2e;background:#6b4a2e18;border-radius:5px;padding:3px 6px;font-weight:700;color:#6b4a2e;">I. No diagnóstica</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px;text-align:center;color:var(--ink-dim);">5-10%</div>
      <div style="color:var(--ink-dim);">Repetir la punción con guía ecográfica</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 90px 1fr;gap:5px;align-items:center;">
      <div style="border:1px solid #3f6b52;background:#3f6b5218;border-radius:5px;padding:3px 6px;font-weight:700;color:#3f6b52;">II. Benigna</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px;text-align:center;color:var(--ink-dim);">1-4%</div>
      <div style="color:var(--ink-dim);">Seguimiento ecográfico; no hace falta cirugía</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 90px 1fr;gap:5px;align-items:center;">
      <div style="border:1px solid #8a6a1f;background:#8a6a1f18;border-radius:5px;padding:3px 6px;font-weight:700;color:#8a6a1f;">III. Atipia (AUS)</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px;text-align:center;color:var(--ink-dim);">13-30%</div>
      <div style="color:var(--ink-dim);">Repetir punción, <strong>estudio molecular</strong> o lobectomia diagnóstica</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 90px 1fr;gap:5px;align-items:center;">
      <div style="border:1px solid #b4552f;background:#b4552f18;border-radius:5px;padding:3px 6px;font-weight:700;color:#b4552f;">IV. Neoplasia folicular</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px;text-align:center;color:var(--ink-dim);">23-34%</div>
      <div style="color:var(--ink-dim);">Estudio molecular o <strong>lobectomia</strong>: la citología NO puede distinguir adenoma de carcinoma folicular</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 90px 1fr;gap:5px;align-items:center;">
      <div style="border:1px solid #8c3a34;background:#8c3a3418;border-radius:5px;padding:3px 6px;font-weight:700;color:#8c3a34;">V. Sospechosa</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px;text-align:center;color:var(--ink-dim);">67-83%</div>
      <div style="color:var(--ink-dim);">Cirugía (lobectomia o tiroidectomía según extensión)</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 90px 1fr;gap:5px;align-items:center;">
      <div style="border:1px solid #7a1f3d;background:#7a1f3d18;border-radius:5px;padding:3px 6px;font-weight:700;color:#7a1f3d;">VI. Maligna</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px;text-align:center;color:var(--ink-dim);">97-100%</div>
      <div style="color:var(--ink-dim);">Cirugía; extensión según tamano, ganglios y extensión extratiroidea</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">La trampa del folicular:</strong> la punción aspira células, no arquitectura, y el diagnóstico de carcinoma folicular exige demostrar <strong>invasión capsular o vascular</strong>. Por eso una citología de neoplasia folicular no distingue el adenoma benigno del carcinoma, y hace falta la pieza quirúrgica o un panel molecular con valor predictivo negativo alto para evitar operar de más.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El nódulo tiroideo es uno de los hallazgos más frecuentes de la medicina: se palpa en el 5% de la población, se ve por ecografía en más del <strong>50% de los mayores de 60 anos</strong> y solo alrededor del <strong>5 al 10%</strong> es maligno. Todo el tema consiste, por tanto, en un ejercicio de contencion: encontrar el cáncer que importa sin puncionar ni operar a la enorme mayoría que no lo tiene. Y en la otra dirección, reconocer las pocas formas agresivas que exigen actuar en días.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La anatomía explica las complicaciones.</strong></p>
${figBlock('Figura 1', 'Anatomía tiroidea: recurrente, laríngeo superior y paratiroides', anatomiaHtml)}
<p style="margin:0 0 12px;">Las dos complicaciones que definen la calidad de una tiroidectomía son la <strong>disfonia</strong> y la <strong>hipocalcemia</strong>, y ambas se explican por lo que rodea a la glándula: el nervio laríngeo recurrente asciende pegado a la arteria tiroidea inferior y al ligamento de Berry, y las cuatro paratiroides dependen de esa misma arteria para su irrigación. De ahi que el <strong>volumen quirúrgico del cirujano</strong> sea el mejor predictor conocido de ambas complicaciones, y que la decisión de operar o no tenga siempre un coste que hay que poner en la balanza.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se estudia un nódulo.</strong></p>
${figBlock('Figura 2', 'Del nódulo a la conducta: TSH, TI-RADS, punción y Bethesda', noduloHtml)}
<p style="margin:0 0 12px;">Solo hay tres pasos. Primero, <strong>una TSH</strong>: si esta suprimida el camino se desvia hacia la gammagrafía, porque un nódulo caliente casi nunca es maligno y no se punciona. Segundo, <strong>una ecografía con puntuación TI-RADS</strong>, que combina composición, ecogenicidad, forma, margen y focos ecogenicos. Y tercero, la decisión de puncionar, que depende de la <strong>categoría y del tamano a la vez</strong>: TR5 desde 1 cm, TR4 desde 1.5 cm y TR3 desde 2.5 cm (calculadora disponible). Los signos ecográficos que más pesan son el nódulo <strong>más alto que ancho</strong>, el <strong>margen irregular o con extensión extratiroidea</strong> y los <strong>microcalcios puntiformes</strong>.</p>
<p style="margin:0 0 12px;">La citología se informa con el sistema <strong>Bethesda</strong> en seis categorías, cada una con su riesgo de malignidad y su conducta. La categoría que más problemas da es la <strong>IV, neoplasia folicular</strong>, porque la punción obtiene células y no arquitectura, y el diagnóstico de carcinoma folicular exige demostrar invasión de la capsula o de los vasos. De ahi que muchos pacientes acaben en una lobectomia diagnóstica, y de ahi el interés de los <strong>paneles moleculares</strong> con valor predictivo negativo alto, que permiten evitar cirugías innecesarias en las categorías indeterminadas.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Los cinco canceres del tiroides, y por que se parecen tan poco entre si.</strong></p>
<p style="margin:0 0 12px;">El <strong>papilar</strong> es el 85% de los casos: deriva del epitelio folicular, se disemina por via <strong>linfática</strong>, capta yodo y tiene una supervivencia a 10 anos superior al 95%. El <strong>folicular</strong> y el <strong>oncocitico</strong> se diseminan por via <strong>hematógena</strong> a hueso y pulmón, y el oncocitico capta yodo mal. El <strong>medular</strong> no viene del epitelio folicular sino de las <strong>células C parafoliculares</strong>: produce calcitonina, no capta yodo, no responde a la supresión de TSH y en una cuarta parte de los casos es hereditario dentro de un síndrome MEN2, lo que obliga a estudiar el gen <strong>RET</strong> en todos los casos. Y el <strong>anaplasico</strong> es una de las neoplasias más agresivas de la medicina, con supervivencia mediana de meses.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El giro de la última década: menos es más.</strong></p>
<p style="margin:0 0 12px;">La incidencia del cáncer de tiroides se multiplico por tres en treinta anos sin que aumentara la mortalidad: casi todo ese incremento fue <strong>sobrediagnostico</strong> de microcarcinomas papilares detectados por ecografías pedidas por otro motivo. La respuesta ha sido desescalar en tres frentes. Se han elevado los umbrales de punción. Se ha ampliado la <strong>lobectomia</strong> frente a la tiroidectomía total en tumores de 1 a 4 cm sin extensión ni ganglios. Y se ha restringido el <strong>yodo radiactivo</strong>, que ya no se administra de forma sistemática al riesgo bajo. Además, la variante folicular encapsulada no invasora se reclasifico como <strong>NIFTP</strong>, es decir, dejo de llamarse carcinoma. En paralelo, en microcarcinomas papilares seleccionados se ofrece <strong>vigilancia activa</strong> en lugar de cirugía.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No puncionar un nódulo <strong>caliente</strong>. No puncionar por debajo de los umbrales de tamano de su categoría TI-RADS. No pedir <strong>tiroglobulina</strong> como marcador diagnóstico en un nódulo, porque no distingue benigno de maligno: solo sirve en el seguimiento del carcinoma diferenciado ya operado. No usar levotiroxina supresora para "encoger" un bocio nodular benigno, práctica abandonada por ineficaz y por sus efectos sobre corazón y hueso. Y no demorar el estudio ante una masa cervical de crecimiento <strong>rápido</strong> con disfonia: el anaplasico se mide en semanas.</p>`;

export const bibliografia = [
  'Haugen BR, Alexander EK, Bible KC, et al. 2015 American Thyroid Association management guidelines for adult patients with thyroid nodules and differentiated thyroid cancer. Thyroid. 2016;26(1):1-133.',
  'Tessler FN, Middleton WD, Grant EG, et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): white paper of the ACR TI-RADS committee. J Am Coll Radiol. 2017;14(5):587-595.',
  'Cibas ES, Ali SZ. The 2017 Bethesda System for Reporting Thyroid Cytopathology. Thyroid. 2017;27(11):1341-1346.',
  'Ali SZ, Baloch ZW, Cochand-Priollet B, Schmitt FC, Vielh P, VanderLaan PA. The 2023 Bethesda System for Reporting Thyroid Cytopathology. Thyroid. 2023;33(9):1039-1044.',
  'Durante C, Grani G, Lamartina L, Filetti S, Mandel SJ, Cooper DS. The diagnosis and management of thyroid nodules: a review. JAMA. 2018;319(9):914-924.',
  'Wells SA Jr, Asa SL, Dralle H, et al. Revised American Thyroid Association guidelines for the management of medullary thyroid carcinoma. Thyroid. 2015;25(6):567-610.',
  'Bible KC, Kebebew E, Brierley J, et al. 2021 American Thyroid Association guidelines for management of patients with anaplastic thyroid cancer. Thyroid. 2021;31(3):337-386.',
  'Nikiforov YE, Seethala RR, Tallini G, et al. Nomenclature revision for encapsulated follicular variant of papillary thyroid carcinoma: a paradigm shift to reduce overtreatment of indolent tumors. JAMA Oncol. 2016;2(8):1023-1029.',
  'Tuttle RM, Tala H, Shah J, et al. Estimating risk of recurrence in differentiated thyroid cancer after total thyroidectomy and radioactive iodine remnant ablation. Thyroid. 2010;20(12):1341-1349.',
  'Ito Y, Miyauchi A, Kihara M, Higashiyama T, Kobayashi K, Miyoshi A. Patient age is significantly related to the progression of papillary microcarcinoma of the thyroid under observation. Thyroid. 2014;24(1):27-34.',
  'Brito JP, Ito Y, Miyauchi A, Tuttle RM. A clinical framework to facilitate risk stratification when considering an active surveillance alternative to immediate biopsy and surgery in papillary microcarcinoma. Thyroid. 2016;26(1):144-149.',
  'Brose MS, Nutting CM, Jarzab B, et al. Sorafenib in radioactive iodine-refractory, locally advanced or metastatic differentiated thyroid cancer (DECISION). Lancet. 2014;384(9940):319-328.',
  'Schlumberger M, Tahara M, Wirth LJ, et al. Lenvatinib versus placebo in radioiodine-refractory thyroid cancer (SELECT). N Engl J Med. 2015;372(7):621-630.',
  'Wirth LJ, Sherman E, Robinson B, et al. Efficacy of selpercatinib in RET-altered thyroid cancers (LIBRETTO-001). N Engl J Med. 2020;383(9):825-835.',
  'Subbiah V, Kreitman RJ, Wainberg ZA, et al. Dabrafenib and trametinib treatment in patients with locally advanced or metastatic BRAF V600E-mutant anaplastic thyroid cancer. J Clin Oncol. 2018;36(1):7-13.',
  'Gharib H, Papini E, Garber JR, et al. American Association of Clinical Endocrinologists, American College of Endocrinology and Associazione Medici Endocrinologi medical guidelines for clinical practice for the diagnosis and management of thyroid nodules: 2016 update. Endocr Pract. 2016;22(5):622-639.',
  'Davies L, Welch HG. Current thyroid cancer trends in the United States. JAMA Otolaryngol Head Neck Surg. 2014;140(4):317-322.',
  'Perros P, Boelaert K, Colley S, et al. Guidelines for the management of thyroid cancer. Clin Endocrinol (Oxf). 2014;81(Suppl 1):1-122.',
  'Filetti S, Durante C, Hartl D, et al. Thyroid cancer: ESMO clinical practice guidelines for diagnosis, treatment and follow-up. Ann Oncol. 2019;30(12):1856-1883.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Nódulo o bocio de bajo riesgo',
      tituloB: 'Signos de alarma y enfermedad avanzada',
      compensada: 'Habitualmente asintomático y descubierto de forma casual, en una exploración de rutina o en una imagen pedida por otro motivo (incidentaloma tiroideo). Cuando se palpa, es un nódulo único o múltiple, móvil con la deglución, indoloro y de consistencia elástica. El bocio multinodular no tóxico puede producir molestia local o sensación de presión cervical sin repercusión funcional.',
      descompensada: 'Signos que obligan a acelerar el estudio: crecimiento RÁPIDO en semanas o meses, consistencia dura y fijación a planos profundos, DISFONIA por parálisis de cuerda vocal, disfagia, disnea o estridor, adenopatías cervicales duras y síndrome de vena cava superior en el bocio subesternal. En el anaplasico, una masa cervical que crece de forma visible en semanas con compromiso de la via aérea. La disfonia en un paciente con nódulo es cáncer hasta que se demuestre lo contrario.'
    },
    laboratorio: [
      { prueba: 'TSH', utilidad: 'PRIMERA prueba ante todo nódulo, y la que decide el camino. Si esta suprimida, se hace gammagrafía: un nódulo caliente prácticamente nunca es maligno y no se punciona. Si es normal o alta, se sigue por ecografía y punción según TI-RADS y tamano.' },
      { prueba: 'Calcitonina', utilidad: 'Marcador del carcinoma medular. Su cribado sistemático en todo nódulo es discutido y varia entre guías, pero se pide ante antecedente familiar de medular o de MEN2, diarrea o rubefaccion inexplicadas, o citología sospechosa de medular. Valores muy altos son prácticamente diagnósticos.' },
      { prueba: 'Antígeno carcinoembrionario', utilidad: 'Complementa a la calcitonina en el carcinoma medular. Su elevación con calcitonina que no sube en paralelo sugiere desdiferenciacion y peor pronóstico. En el seguimiento, el tiempo de duplicación de ambos marcadores es el mejor predictor de progresión.' },
      { prueba: 'Tiroglobulina', utilidad: 'NO sirve como marcador diagnóstico en un nódulo: no distingue benigno de maligno. Su papel es el SEGUIMIENTO del carcinoma diferenciado ya operado, donde se interpreta junto con los anticuerpos antitiroglobulina y con el grado de estimulación de la TSH.' },
      { prueba: 'Anticuerpos antitiroglobulina', utilidad: 'Se piden SIEMPRE con la tiroglobulina: si son positivos, falsean su medición a la baja y la hacen no interpretable. En ese caso se usa la tendencia del propio título de anticuerpos como marcador indirecto de enfermedad residual.' },
      { prueba: 'Calcio, fósforo y hormona paratiroidea', utilidad: 'Antes de la tiroidectomía como referencia, y después para detectar el hipoparatiroidismo posquirúrgico. Una hormona paratiroidea baja en las primeras horas tras la cirugía predice la hipocalcemia sintomática y permite anticiparse.' },
      { prueba: 'Estudio genético del gen RET', utilidad: 'Obligado en TODO carcinoma medular, porque hasta una cuarta parte es hereditario dentro de un MEN2 aunque no haya antecedente familiar. Un resultado positivo obliga a cribar a los familiares y a descartar feocromocitoma e hiperparatiroidismo.' },
      { prueba: 'Paneles moleculares en citología indeterminada', utilidad: 'Se aplican a las categorías Bethesda III y IV. Su valor esta sobre todo en un valor predictivo NEGATIVO alto, que permite evitar la lobectomia diagnóstica en muchos pacientes. Las alteraciones más informativas son BRAF V600E, RAS, RET/PTC y las fusiones de NTRK.' }
    ],
    no_invasivos: [
      { metodo: 'Ecografía cervical con TI-RADS (calculadora disponible)', interpretacion: 'Puntúa composición, ecogenicidad, forma, margen y focos ecogenicos, y clasifica de TR1 a TR5. Los signos que más pesan son el nódulo más alto que ancho, el margen irregular o con extensión extratiroidea y los microcalcios puntiformes. Debe incluir siempre el estudio de las cadenas ganglionares cervicales.', cutoff: 'Punción: TR5 desde 1 cm, TR4 desde 1.5 cm, TR3 desde 2.5 cm. TR1 y TR2 no se puncionan' },
      { metodo: 'Punción aspirativa con aguja fina guiada por ecografía (Bethesda)', interpretacion: 'Prueba de referencia. Seis categorías: I no diagnóstica, II benigna, III atipia de significado indeterminado, IV neoplasia folicular, V sospechosa de malignidad, VI maligna, con riesgos de malignidad ascendentes.', cutoff: 'Riesgo aproximado de malignidad: II 1-4%, III 13-30%, IV 23-34%, V 67-83%, VI 97-100%' },
      { metodo: 'Gammagrafía tiroidea', interpretacion: 'SOLO si la TSH esta suprimida. Un nódulo caliente (hiperfuncionante) prácticamente nunca es maligno y se maneja como hipertiroidismo. Un nódulo frío no aporta información adicional sobre malignidad respecto de la ecografía.', cutoff: 'Contraindicada en embarazo y lactancia' },
      { metodo: 'Laringoscopia', interpretacion: 'Valoración de la movilidad de las cuerdas vocales ANTES de una tiroidectomía, y obligada si hay disfonia o cirugía cervical previa. Documenta una parálisis preexistente y establece el punto de partida medicolegal y clínico.', cutoff: 'Parálisis de cuerda vocal preoperatoria: sospecha alta de invasión del recurrente' },
      { metodo: 'Elastografía y otras técnicas complementarias', interpretacion: 'Anaden información sobre la rigidez del nódulo, pero no sustituyen al TI-RADS ni cambian los umbrales de punción. Su papel es marginal en la práctica habitual.', cutoff: 'Sin umbrales establecidos de forma universal' }
    ],
    imagen: [
      { modalidad: 'Tomografía cervicotoracica', hallazgos: 'Ante bocio subesternal, sospecha de compresión o invasión, o enfermedad avanzada. Delimita la extensión retroesternal, el desplazamiento y la compresión traqueal y la invasión de estructuras vecinas. Ojo: el contraste yodado retrasa varias semanas el uso de yodo radiactivo.' },
      { modalidad: 'Gammagrafía de cuerpo entero con yodo radiactivo', hallazgos: 'Tras la tiroidectomía y la ablación, localiza restos y metástasis captantes. Su rendimiento depende de la estimulación adecuada de la TSH, sea por supresión de la levotiroxina o con TSH recombinante humana.' },
      { modalidad: 'Tomografía por emision de positrones con fluorodesoxiglucosa', hallazgos: 'Indicada en el carcinoma diferenciado con tiroglobulina elevada y rastreo con yodo negativo, situación que sugiere desdiferenciacion. La captación intensa se asocia a peor pronóstico y a refractariedad al yodo.' },
      { modalidad: 'Resonancia magnética cervical', hallazgos: 'Alternativa a la tomografía cuando se quiere evitar el contraste yodado, sobre todo si esta previsto administrar yodo radiactivo a corto plazo. Buena para valorar invasión de partes blandas.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `El tema se clasifica en tres planos distintos que conviene no mezclar. El <strong>ecográfico</strong> (TI-RADS) decide a quien se punciona. El <strong>citologico</strong> (Bethesda) decide a quien se opera. Y el <strong>histológico y de riesgo</strong> (tipo tumoral, estadificación TNM y riesgo de recurrencia de la ATA) decide la extensión de la cirugía, la indicación de yodo radiactivo, el objetivo de TSH y la intensidad del seguimiento. Una peculiaridad importante: en el carcinoma diferenciado, la estadificación TNM predice la MORTALIDAD y usa la edad como variable, mientras que la clasificación de riesgo de la ATA predice la RECURRENCIA, que es lo que se maneja en la práctica diaria.`,
    escalas: [
      { nombre: 'TI-RADS del American College of Radiology (calculadora disponible)', componentes: 'Composición, ecogenicidad, forma, margen y focos ecogenicos. Los cuatro primeros se puntuan eligiendo una opción; los focos ecogenicos suman entre si.', formula: 'Suma de puntos: 0 es TR1, 2 es TR2, 3 es TR3, de 4 a 6 es TR4 y 7 o más es TR5.', interpretacion: 'La conducta depende de la categoría Y del tamano: punción en TR5 desde 1 cm, TR4 desde 1.5 cm y TR3 desde 2.5 cm; seguimiento por debajo de esos umbrales; TR1 y TR2 no requieren punción.' },
      { nombre: 'Sistema Bethesda para la citología tiroidea', componentes: 'Seis categorías citologicas con su riesgo de malignidad asociado.', formula: 'Clasificación descriptiva, no puntuación.', interpretacion: 'I no diagnóstica (repetir); II benigna (seguimiento); III atipia (repetir, molecular o lobectomia); IV neoplasia folicular (molecular o lobectomia, porque la citología NO distingue adenoma de carcinoma); V sospechosa (cirugía); VI maligna (cirugía).' },
      { nombre: 'Estadificación TNM del carcinoma diferenciado', componentes: 'Tamano tumoral, extensión extratiroidea, ganglios, metástasis y EDAD del paciente.', formula: 'En el carcinoma diferenciado, el punto de corte de edad es 55 anos; por debajo, solo se puede ser estadio I o II.', interpretacion: 'Predice la MORTALIDAD, no la recurrencia. Es la única neoplasia sólida en la que la edad forma parte de la estadificación, y refleja el excelente pronóstico del paciente joven incluso con metástasis a distancia.' },
      { nombre: 'Riesgo de recurrencia de la ATA (calculadora disponible)', componentes: 'Extensión extratiroidea, resto tumoral, invasión vascular, histología agresiva, número y tamano de los ganglios afectados, metástasis a distancia y tiroglobulina posquirúrgica.', formula: 'Clasificación en riesgo bajo, intermedio y alto.', interpretacion: 'Predice la RECURRENCIA y es la que gobierna la práctica: determina si se administra yodo radiactivo, cual es el objetivo de TSH y con que intensidad se sigue al paciente.' },
      { nombre: 'Respuesta al tratamiento (estratificación dinámica)', componentes: 'Tiroglobulina, anticuerpos antitiroglobulina, ecografía cervical e imagen funcional durante el seguimiento.', formula: 'Cuatro categorías: excelente, bioquímica incompleta, estructural incompleta e indeterminada.', interpretacion: 'Reclasifica al paciente con el tiempo y ha desplazado en gran medida al riesgo inicial: una respuesta excelente permite relajar el objetivo de TSH a 0.5 a 2.0 mUI/L y espaciar los controles aunque el riesgo inicial fuera intermedio.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Nódulo tiroideo y bocio multinodular no tóxico',
      color: '#5b4a86',
      definicion: 'Lesión focal delimitada dentro de la glándula (nódulo) o aumento global con múltiples nódulos y función normal (bocio multinodular no tóxico). Es el escenario más frecuente del tema y en el que más dano hace el exceso de intervención.',
      fisiopatologia: 'La glándula responde a estímulos proliferativos heterogéneos (déficit de yodo, factores de crecimiento locales, mutaciones somáticas) con un crecimiento policlonal desigual: unos folículos proliferan, otros degeneran y forman quistes o hemorragias, y otros calcifican. El resultado es una glándula nodular, asimétrica y de crecimiento lento durante décadas, que con el tiempo puede desarrollar autonomia funcional.',
      epidemiologia: 'Nódulos palpables en el 5% de la población, visibles por ecografía en más del 50% de los mayores de 60 anos, con predominio femenino. Solo el 5 al 10% son malignos, y la proporción no aumenta con el número de nódulos: en un bocio multinodular el riesgo global es similar al de un nódulo único.',
      factores_riesgo: ['Edad avanzada y sexo femenino (para tener nódulos)', 'Déficit de yodo', 'Antecedente familiar de bocio', 'Radiación cervical en la infancia (para malignidad)', 'Antecedente familiar de cáncer de tiroides o síndromes hereditarios', 'Sexo masculino y edades extremas (aumentan el riesgo de que un nódulo sea maligno)', 'Crecimiento rápido, disfonia, fijación o adenopatías', 'Obesidad y síndrome metabólico (asociación débil)'],
      clinica: 'Habitualmente asintomático. Cuando el bocio crece, sensación de presión cervical, molestia con el cuello de la camisa o tos seca. El dolor brusco sugiere hemorragia intranodular, no malignidad. Los síntomas compresivos verdaderos son tardíos y se desarrollan en su propia ficha.',
      criterios_dx: 'Ecográfico. Todo nódulo requiere TSH y ecografía con categoría TI-RADS; la punción se indica según categoría y tamano. Un nódulo caliente en la gammagrafía no se punciona.',
      laboratorio: 'TSH. Calcitonina si hay antecedente familiar de carcinoma medular o de MEN2, o citología compatible. NO se pide tiroglobulina como marcador diagnóstico.',
      imagen: 'Ecografía cervical con TI-RADS y estudio de cadenas ganglionares. Gammagrafía solo si la TSH esta suprimida. Tomografía o resonancia solo ante bocio grande, subesternal o con sospecha de compresión.',
      complementarios: 'Punción aspirativa guiada por ecografía con informe Bethesda cuando esta indicada. Paneles moleculares en las categorías III y IV para evitar cirugías innecesarias.',
      dx_diferencial: 'Quiste coloide simple, hemorragia intranodular, tiroiditis de Hashimoto con pseudonodulos, adenoma tóxico, paratiroides aumentada, quiste del conducto tirogloso, adenopatía y, en el nódulo único de crecimiento rápido, carcinoma.',
      tx_medico: 'La inmensa mayoría de los nódulos benignos solo requiere SEGUIMIENTO ecográfico, con intervalos que dependen de la categoría TI-RADS y del tamano. Asegurar un aporte adecuado de yodo. NO se usa levotiroxina supresora para reducir el bocio: es poco eficaz y tiene coste cardiaco y óseo.',
      tx_farmacologico: 'Ninguno específico en el nódulo benigno con función normal. Si aparece autonomia funcional, se trata como hipertiroidismo (ver el tema de hipertiroidismo y tiroiditis).',
      tx_intervencionista: 'Cirugía si hay síntomas compresivos, crecimiento significativo, bocio subesternal o citología sospechosa o maligna. Alternativas percutáneas en nódulos benignos sintomáticos seleccionados: ablación por radiofrecuencia, láser o etanol para los quisticos, que evitan la cirugía y sus complicaciones.',
      criterios_uci: 'No aplica salvo compromiso agudo de la via aérea.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir ingreso. Ante hemorragia intranodular con dolor y crecimiento brusco, observación y analgesia; rara vez hace falta drenaje.',
      seguimiento_ambulatorio: 'Nódulo benigno por citología: ecografía a los 12 a 24 meses y después espaciando. Nódulo no puncionado por tamano: control según categoría (TR5 anual, TR4 a los 1 a 2 anos, TR3 a los 2 a 3 anos). Repuncionar solo si crece de forma significativa o cambian sus características.',
      pronostico: 'Excelente. La mayoría de los nódulos permanece estable o crece muy despacio, y una citología benigna tiene un riesgo de falso negativo del 1 al 4%.',
      algoritmo: ['Ante todo nódulo: pedir TSH', 'TSH suprimida: gammagrafía; si es caliente, NO puncionar y tratar como hipertiroidismo', 'TSH normal o alta: ecografía con TI-RADS y valoración ganglionar', 'Aplicar los umbrales de punción por categoría y tamano', 'Informar la citología con el sistema Bethesda', 'Bethesda II: seguimiento ecográfico', 'Bethesda III o IV: repetir punción, panel molecular o lobectomia', 'Bethesda V o VI: cirugía', 'Nódulos no puncionados: seguimiento ecográfico según categoría']
    },
    {
      nombre: 'Carcinoma papilar de tiroides',
      color: '#3d5a73',
      definicion: 'Carcinoma derivado del epitelio folicular con rasgos nucleares característicos. Es el 85% de los canceres de tiroides, se disemina por via linfática y tiene un pronóstico excelente, con supervivencia a 10 anos superior al 95%.',
      fisiopatologia: 'Se origina por activación constitutiva de la via MAPK, sobre todo por la mutación <strong>BRAF V600E</strong> (presente en cerca del 60% de los casos) o por reordenamientos RET/PTC, más frecuentes tras exposición a radiación. La célula tumoral conserva el cotransportador sodio-yoduro, de modo que capta yodo, y conserva el receptor de TSH, de modo que responde a la supresión de la TSH: esas dos propiedades son la base de todo su tratamiento.',
      epidemiologia: 'Incidencia multiplicada por tres en tres décadas sin aumento de la mortalidad, atribuible en su mayor parte a sobrediagnostico de microcarcinomas. Predominio femenino de 3 a 1 y pico entre los 30 y los 50 anos. Los ganglios cervicales están afectados al diagnóstico en el 30 al 50% de los casos y ello apenas modifica la supervivencia.',
      factores_riesgo: ['Radiación cervical, sobre todo en la infancia (el factor mejor establecido)', 'Antecedente familiar de cáncer de tiroides', 'Síndromes hereditarios: poliposis adenomatosa familiar, Cowden, complejo de Carney', 'Tiroiditis de Hashimoto (asociación discutida)', 'Sexo femenino para la incidencia, masculino para el peor pronóstico', 'Exposición a yodo radiactivo ambiental (accidentes nucleares)', 'Obesidad', 'Déficit o exceso marcado de yodo'],
      clinica: 'Habitualmente un nódulo asintomático descubierto de forma casual. Cuando da síntomas: adenopatía cervical (que puede ser la primera manifestación), disfonia por invasión del recurrente, fijación a planos profundos o disfagia. Las metástasis a distancia al diagnóstico son raras, menos del 5%.',
      criterios_dx: 'Citologico (Bethesda V o VI) y confirmado en la pieza quirúrgica por los rasgos nucleares característicos: núcleos agrandados con aclaramiento en vidrio esmerilado, hendiduras nucleares y pseudoinclusiones, con o sin cuerpos de psamoma.',
      laboratorio: 'TSH y, tras la cirugía, tiroglobulina con anticuerpos antitiroglobulina para el seguimiento. Calcio y hormona paratiroidea posquirúrgicos.',
      imagen: 'Ecografía cervical con mapeo ganglionar preoperatorio, imprescindible para planificar la cirugía. Tomografía o resonancia si hay sospecha de invasión. Rastreo con yodo radiactivo tras la ablación cuando esta indicada.',
      complementarios: 'Laringoscopia preoperatoria. Estudio molecular en citologías indeterminadas. La variante folicular encapsulada no invasora se reclasifico como NIFTP y ya NO se considera carcinoma.',
      dx_diferencial: 'NIFTP, adenoma folicular, tiroiditis de Hashimoto con cambios nucleares reactivos, carcinoma folicular, metástasis de otro origen y linfoma.',
      tx_medico: 'Supresión de la TSH con levotiroxina, ajustada al riesgo: TSH por debajo de 0.1 mUI/L en el riesgo alto, de 0.1 a 0.5 en el intermedio y de 0.5 a 2.0 en el bajo con respuesta excelente. Vigilar los efectos de la supresión mantenida sobre el corazón y el hueso.',
      tx_farmacologico: 'Yodo radiactivo tras la tiroidectomía total en el riesgo alto y de forma selectiva en el intermedio; NO de forma sistemática en el riesgo bajo. En la enfermedad avanzada refractaria al yodo: inhibidores multicinasa (lenvatinib, sorafenib) y, si hay diana, terapias dirigidas (selpercatinib o pralsetinib en alteraciones de RET, larotrectinib o entrectinib en fusiones de NTRK, dabrafenib con trametinib en BRAF V600E).',
      tx_intervencionista: 'LOBECTOMIA en tumores de 1 a 4 cm sin extensión extratiroidea ni ganglios, lo que evita el hipotiroidismo definitivo y reduce las complicaciones. Tiroidectomía total si el tumor mide más de 4 cm, hay extensión extratiroidea, ganglios o metástasis, o antecedente de radiación. Disección ganglionar central o lateral según afectación demostrada, no profiláctica de rutina. En microcarcinomas seleccionados, VIGILANCIA ACTIVA como alternativa a la cirugía.',
      criterios_uci: 'Solo por complicaciones quirúrgicas: hematoma cervical compresivo o parálisis recurrencial bilateral.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Tras la tiroidectomía: vigilancia de hematoma cervical en las primeras horas, calcio seriado e inicio de levotiroxina. Valorar la voz antes del alta.',
      seguimiento_ambulatorio: 'Tiroglobulina con anticuerpos y ecografía cervical a los 6 a 12 meses y después según la respuesta al tratamiento. La estratificación dinámica permite relajar el objetivo de TSH y espaciar controles si la respuesta es excelente.',
      pronostico: 'Excelente: supervivencia a 10 anos superior al 95%. Empeoran el pronóstico la edad mayor de 55 anos, la extensión extratiroidea macroscópica, las metástasis a distancia y las variantes agresivas (células altas, hobnail, columnar).',
      algoritmo: ['Citología Bethesda V o VI: planificar cirugía', 'Mapeo ganglionar ecográfico y laringoscopia preoperatorios', 'Menos de 1 cm sin factores de riesgo: valorar vigilancia activa', 'De 1 a 4 cm sin extensión ni ganglios: lobectomia', 'Más de 4 cm, extensión, ganglios o metástasis: tiroidectomía total', 'Disección ganglionar solo si hay afectación demostrada', 'Clasificar el riesgo de recurrencia de la ATA con la pieza quirúrgica', 'Yodo radiactivo en riesgo alto y de forma selectiva en el intermedio', 'Fijar el objetivo de TSH según riesgo y reclasificar por la respuesta']
    },
    {
      nombre: 'Carcinoma folicular y oncocitico (de células de Hurthle)',
      color: '#b4552f',
      definicion: 'Carcinomas del epitelio folicular sin los rasgos nucleares del papilar, definidos por la INVASIÓN de la capsula o de los vasos. Se diseminan por via hematógena a hueso y pulmón, a diferencia del papilar, que lo hace por via linfática.',
      fisiopatologia: 'Se asocian a mutaciones de la familia RAS y a la fusión PAX8-PPARG. La célula conserva parte de la capacidad de captar yodo, aunque menos que el papilar, y el <strong>oncocitico</strong> (antes llamado de células de Hurthle) la capta francamente mal, lo que limita el papel del yodo radiactivo y hace más importante la cirugía completa. El diagnóstico exige arquitectura, no solo citología: por eso la punción no puede distinguir el adenoma folicular benigno del carcinoma.',
      epidemiologia: 'El folicular supone el 10 al 15% de los canceres de tiroides y el oncocitico alrededor del 3 al 5%. Son más frecuentes en zonas con déficit de yodo y en pacientes de mayor edad que el papilar. Las metástasis a distancia al diagnóstico son más frecuentes que en el papilar.',
      factores_riesgo: ['Déficit de yodo', 'Edad avanzada', 'Sexo femenino para la incidencia', 'Radiación previa (menos asociado que en el papilar)', 'Bocio nodular de larga evolución', 'Síndrome de Cowden (mutación de PTEN)', 'Tamano tumoral mayor de 4 cm'],
      clinica: 'Nódulo solitario de crecimiento lento, con frecuencia mayor que el papilar al diagnóstico. Rara vez adenopatías. Puede debutar por una METÁSTASIS: fractura patológica, dolor óseo o un nódulo pulmonar, y en ocasiones por una metástasis funcionante que produce tirotoxicosis.',
      criterios_dx: 'HISTOLÓGICO, en la pieza quirúrgica: invasión capsular o vascular. La citología solo puede informar de neoplasia folicular (Bethesda IV), que no distingue benigno de maligno.',
      laboratorio: 'TSH. Tras la cirugía, tiroglobulina con anticuerpos antitiroglobulina. Calcio y hormona paratiroidea posquirúrgicos.',
      imagen: 'Ecografía cervical. Ante sospecha de metástasis, tomografía torácica y estudio óseo. Rastreo con yodo radiactivo tras la ablación, con la limitación de la escasa captación del oncocitico. Tomografía por emision de positrones si la tiroglobulina esta alta con rastreo negativo.',
      complementarios: 'Paneles moleculares en la citología indeterminada, sobre todo por su valor predictivo negativo, que permite evitar lobectomias diagnosticas.',
      dx_diferencial: 'Adenoma folicular (la distinción clave y solo posible con la pieza), NIFTP, variante folicular del papilar, carcinoma poco diferenciado y metástasis tiroidea de un carcinoma renal de células claras.',
      tx_medico: 'Supresión de la TSH con levotiroxina según riesgo, igual que en el papilar.',
      tx_farmacologico: 'Yodo radiactivo, más frecuentemente indicado que en el papilar por la mayor tendencia a la diseminación hematógena, pero de eficacia limitada en el oncocitico. En enfermedad avanzada refractaria: lenvatinib o sorafenib, y terapias dirigidas si hay diana molecular.',
      tx_intervencionista: 'Lobectomia diagnóstica cuando la citología es de neoplasia folicular; si la histología confirma carcinoma con criterios de riesgo, se completa la tiroidectomía. En el oncocitico se tiende a la tiroidectomía total más a menudo, porque el yodo radiactivo no sirve de rescate. Metastasectomia o radioterapia externa en metástasis óseas sintomáticas.',
      criterios_uci: 'Solo por complicaciones quirúrgicas.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Igual que en el papilar: hematoma cervical, calcio seriado y valoración de la voz.',
      seguimiento_ambulatorio: 'Tiroglobulina, ecografía cervical y, dada la diseminación hematógena, mayor atención a la imagen torácica y ósea que en el papilar.',
      pronostico: 'Peor que el papilar pero aun bueno en las formas mínimamente invasoras: supervivencia a 10 anos del 70 al 85%, y claramente peor en el oncocitico y en las formas con invasión vascular extensa.',
      algoritmo: ['Citología Bethesda IV: panel molecular o lobectomia diagnóstica', 'La citología NO puede diagnosticar carcinoma folicular', 'Histología: buscar invasión capsular o vascular', 'Invasión mínima sin factores de riesgo: puede bastar la lobectomia', 'Invasión vascular extensa o tumor grande: completar tiroidectomía', 'Oncocitico: mayor tendencia a tiroidectomía total por la mala captación de yodo', 'Buscar metástasis hematógenas en hueso y pulmón', 'Yodo radiactivo según riesgo, sabiendo su limitación en el oncocitico', 'Seguimiento con tiroglobulina e imagen torácica y ósea']
    },
    {
      nombre: 'Carcinoma medular de tiroides y MEN2',
      color: '#3f6b52',
      definicion: 'Carcinoma derivado de las células C parafoliculares, que producen calcitonina. NO deriva del epitelio folicular, de modo que no capta yodo, no responde a la supresión de TSH y no se sigue con tiroglobulina: es un tumor neuroendocrino que casualmente vive en el tiroides.',
      fisiopatologia: 'Se debe a mutaciones activadoras del protooncogen <strong>RET</strong>, somáticas en las formas esporádicas y germinales en las hereditarias. Las formas hereditarias se integran en el <strong>MEN2A</strong> (medular, feocromocitoma e hiperparatiroidismo), el <strong>MEN2B</strong> (medular, feocromocitoma, neuromas mucosos, ganglioneuromatosis intestinal y habito marfanoide, sin hiperparatiroidismo y de comportamiento mucho más agresivo) y el medular familiar aislado. La secreción de calcitonina y de péptidos relacionados explica la diarrea y la rubefaccion de las formas avanzadas.',
      epidemiologia: 'Del 1 al 5% de los canceres de tiroides. Alrededor del 75% es esporádico y el 25% hereditario, pero hasta una cuarta parte de los aparentemente esporádicos tiene una mutación germinal, lo que obliga a estudiar RET en TODOS los casos. La supervivencia a 10 anos oscila entre el 40 y el 80% según el estadio.',
      factores_riesgo: ['Mutación germinal de RET (MEN2A, MEN2B, medular familiar)', 'Antecedente familiar de carcinoma medular o de feocromocitoma', 'Antecedente familiar de hiperparatiroidismo primario', 'Habito marfanoide con neuromas mucosos (sugiere MEN2B)', 'Diagnóstico en edad joven', 'Enfermedad de Hirschsprung en la familia (variantes de RET)'],
      clinica: 'Nódulo tiroideo con adenopatías cervicales, que están presentes al diagnóstico en más de la mitad de los casos. En enfermedad avanzada: DIARREA crónica secretora y rubefaccion, por los péptidos secretados. En el MEN2B, aspecto marfanoide con neuromas en lengua y labios y ganglioneuromatosis intestinal, reconocibles desde la infancia.',
      criterios_dx: 'Calcitonina elevada (valores muy altos son prácticamente diagnósticos), citología compatible con confirmación inmunohistoquímica (calcitonina y antígeno carcinoembrionario positivos, tiroglobulina negativa) y estudio genético de RET en todos los casos.',
      laboratorio: 'Calcitonina y antígeno carcinoembrionario basales y para el seguimiento. Estudio de RET. ANTES de operar hay que descartar FEOCROMOCITOMA con metanefrinas en plasma u orina, y medir calcio y hormona paratiroidea para descartar hiperparatiroidismo.',
      imagen: 'Ecografía cervical con mapeo ganglionar. Ante calcitonina muy elevada, tomografía cervicotoracica y abdominal y resonancia hepática, porque las metástasis hepáticas pueden ser miliares y pasar desapercibidas.',
      complementarios: 'Consejo genético y cribado familiar obligados si RET es positivo. En portadores, tiroidectomía profiláctica cuya edad depende del riesgo de la variante concreta.',
      dx_diferencial: 'Carcinoma papilar y folicular, tumor neuroendocrino metastásico, paraganglioma, linfoma tiroideo y elevaciones de calcitonina no tumorales (insuficiencia renal, inhibidores de la bomba de protones, hiperparatiroidismo, tabaquismo, hiperplasia de células C).',
      tx_medico: 'La levotiroxina se da como SUSTITUCIÓN, no como supresión: el tumor no expresa receptor de TSH y suprimirla no aporta nada y si conlleva riesgo. Tratamiento sintomático de la diarrea secretora.',
      tx_farmacologico: 'El yodo radiactivo NO tiene ningún papel. En enfermedad progresiva o metastásica: inhibidores selectivos de RET (selpercatinib, pralsetinib), que han desplazado a los multicinasa clásicos (vandetanib, cabozantinib) por mejor eficacia y tolerancia. En formas con RET no alterado, valorar cabozantinib.',
      tx_intervencionista: 'TIROIDECTOMÍA TOTAL con disección del compartimento central, y lateral según afectación, en todos los casos: no cabe la lobectomia. Antes de la cirugía hay que descartar y, si existe, operar PRIMERO el feocromocitoma. Tiroidectomía profiláctica en portadores de mutación de RET, a una edad que depende del riesgo de la variante.',
      criterios_uci: 'Crisis hipertensiva por feocromocitoma no diagnosticado durante la cirugía, que es precisamente lo que se evita cribando antes.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de hipoparatiroidismo y de lesión recurrencial, como en toda tiroidectomía total, con la particularidad de que la disección ganglionar amplia aumenta el riesgo de ambas.',
      seguimiento_ambulatorio: 'Calcitonina y antígeno carcinoembrionario seriados: su TIEMPO DE DUPLICACIÓN es el mejor predictor de progresión y de supervivencia. Ecografía cervical. Cribado periódico de feocromocitoma e hiperparatiroidismo en los portadores de mutación.',
      pronostico: 'Depende del estadio y de la normalización de la calcitonina tras la cirugía. Supervivencia a 10 anos del 40 al 80%. El MEN2B tiene el peor pronóstico y aparece a edades más tempranas.',
      algoritmo: ['Calcitonina elevada o citología compatible: sospechar medular', 'Estudiar RET en TODOS los casos, haya o no antecedente familiar', 'Descartar feocromocitoma con metanefrinas ANTES de operar', 'Medir calcio y hormona paratiroidea para descartar hiperparatiroidismo', 'Si hay feocromocitoma, operarlo primero', 'Tiroidectomía total con disección central, y lateral según afectación', 'Levotiroxina como sustitución, no como supresión', 'No usar yodo radiactivo: no capta', 'Seguimiento con calcitonina y antígeno carcinoembrionario y su tiempo de duplicación', 'Consejo genético y cribado familiar si RET es positivo']
    },
    {
      nombre: 'Carcinoma anaplasico y linfoma tiroideo',
      color: '#8c3a34',
      definicion: 'Las dos formas de masa tiroidea de crecimiento rápido. El carcinoma anaplasico es una de las neoplasias más agresivas de la medicina, con supervivencia mediana de 4 a 6 meses; el linfoma tiroideo, en cambio, tiene un aspecto igual de alarmante pero es potencialmente curable, y por eso distinguirlos es urgente.',
      fisiopatologia: 'El anaplasico surge con frecuencia por desdiferenciacion de un carcinoma diferenciado preexistente, con acumulación de alteraciones de TP53, TERT y de la via PI3K sobre una base de BRAF o RAS. Pierde por completo la diferenciación: no capta yodo, no produce tiroglobulina y no responde a la TSH. El linfoma tiroideo es casi siempre un linfoma B difuso de células grandes o un MALT que asienta sobre una tiroiditis de Hashimoto de larga evolución, que aporta el sustrato linfoide.',
      epidemiologia: 'El anaplasico supone del 1 al 2% de los canceres de tiroides pero una proporción desproporcionada de sus muertes; aparece por encima de los 60 anos. El linfoma tiroideo es del 1 al 5%, con predominio femenino y edad avanzada, y casi siempre sobre Hashimoto.',
      factores_riesgo: ['Edad avanzada (ambos)', 'Bocio de larga evolución y carcinoma diferenciado previo (anaplasico)', 'Zonas con déficit de yodo (anaplasico)', 'Tiroiditis de Hashimoto de larga evolución (linfoma, riesgo multiplicado por 60 a 80)', 'Radiación previa', 'Inmunosupresión (linfoma)'],
      clinica: 'Masa cervical de crecimiento RÁPIDO, en semanas, dura, fija y a menudo dolorosa, con disfonia, disfagia, estridor y síndrome de vena cava superior. En el anaplasico hay con frecuencia metástasis pulmonares al diagnóstico. El linfoma puede acompanarse de síntomas B (fiebre, sudoración nocturna, pérdida de peso) y crece igual de rápido.',
      criterios_dx: 'BIOPSIA URGENTE, con aguja gruesa o quirúrgica: la punción con aguja fina suele ser insuficiente para ambos. La inmunohistoquímica los separa y determina el tratamiento, que es radicalmente distinto. En el anaplasico se determinan BRAF V600E y otras dianas de inmediato, porque cambian el tratamiento en días.',
      laboratorio: 'Hemograma, bioquímica, lactato deshidrogenasa (útil en el linfoma) y perfil tiroideo. Anticuerpos antitiroperoxidasa, con frecuencia positivos en el linfoma por la Hashimoto subyacente.',
      imagen: 'Tomografía cervicotoracica urgente para valorar la via aérea y la extensión. Tomografía por emision de positrones para estadificar en ambos.',
      complementarios: 'Valoración urgente de la VIA AÉREA por otorrinolaringología. En el anaplasico, discusión precoz de objetivos de tratamiento y de cuidados paliativos, que forma parte del manejo desde el primer dia.',
      dx_diferencial: 'Entre ellos dos (la distinción más importante y urgente), carcinoma diferenciado con transformación, sarcoma, metástasis tiroideas, tiroiditis de Riedel y tiroiditis supurativa aguda.',
      tx_medico: 'Anaplasico: valoración de la via aérea, control de síntomas y decisión compartida sobre la intensidad del tratamiento. Linfoma: no requiere cirugía y el tratamiento es oncohematologico.',
      tx_farmacologico: 'ANAPLASICO: si hay BRAF V600E, dabrafenib con trametinib, que ha cambiado el pronóstico de ese subgrupo y puede permitir una cirugía posterior; inmunoterapia y terapias dirigidas según el perfil molecular. LINFOMA: quimioterapia tipo R-CHOP con o sin radioterapia, con tasas de curación altas en estadios localizados.',
      tx_intervencionista: 'Anaplasico: cirugía solo si la resección completa es factible, algo infrecuente al diagnóstico; radioterapia externa con o sin quimioterapia. Traqueostomía solo tras valorar el pronóstico global y los deseos del paciente. Linfoma: la cirugía NO es el tratamiento, salvo biopsia diagnóstica.',
      criterios_uci: 'Compromiso agudo de la via aérea. La decisión de intubar o traqueostomizar en el anaplasico debe tomarse con el pronóstico y los deseos del paciente sobre la mesa.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Monitorización de la via aérea. Coordinación urgente entre endocrinologia, otorrinolaringología, oncología, hematología y cuidados paliativos.',
      seguimiento_ambulatorio: 'En el linfoma, seguimiento oncohematologico habitual y vigilancia del hipotiroidismo por la Hashimoto de base. En el anaplasico, seguimiento estrecho con enfoque paliativo salvo respuesta a terapia dirigida.',
      pronostico: 'Anaplasico: supervivencia mediana de 4 a 6 meses; se considera estadio IV por definición en cualquier extensión. Linfoma: potencialmente curable, con supervivencia superior al 80% en estadios localizados.',
      algoritmo: ['Masa cervical de crecimiento rápido con disfonia: urgencia diagnóstica', 'Biopsia con aguja gruesa o quirúrgica, NO solo punción fina', 'Valoración urgente de la via aérea', 'Tomografía cervicotoracica y estadificación', 'Inmunohistoquímica para separar anaplasico de linfoma', 'Anaplasico: determinar BRAF V600E de inmediato', 'BRAF positivo: dabrafenib con trametinib', 'Linfoma: quimioterapia con o sin radioterapia, sin cirugía', 'Discutir objetivos de tratamiento desde el primer dia en el anaplasico']
    },
    {
      nombre: 'Complicaciones compresivas del bocio y bocio subesternal',
      color: '#8a6a1f',
      definicion: 'Consecuencias mecánicas del crecimiento tiroideo sobre tráquea, esófago, nervios y vasos del operculo torácico. Aparecen sobre todo en bocios de larga evolución y con extensión retroesternal, donde el espacio es inextensible.',
      fisiopatologia: 'En el cuello, la glándula crece hacia fuera y tarda mucho en comprimir. Cuando la extensión es retroesternal, en cambio, el crecimiento ocurre dentro de un anillo osteomuscular rígido: la tráquea se desplaza y se estrecha, el esófago se comprime y las venas del operculo se obstruyen. Un episodio de hemorragia intranodular puede descompensar de forma brusca un bocio previamente tolerado.',
      epidemiologia: 'El bocio subesternal supone del 5 al 15% de los bocios operados. Los síntomas compresivos verdaderos son mucho menos frecuentes de lo que sugieren las quejas cervicales inespecíficas, y no siempre se correlacionan con el tamano.',
      factores_riesgo: ['Bocio multinodular de larga evolución', 'Extensión retroesternal', 'Edad avanzada', 'Sexo femenino', 'Déficit de yodo', 'Hemorragia intranodular previa', 'Cuello corto y operculo estrecho', 'Cirugía tiroidea previa con recidiva'],
      clinica: 'Disnea, sobre todo de decúbito, tos seca, estridor, disfagia a sólidos, sensación de ahogo al levantar los brazos y disfonia. El SIGNO DE PEMBERTON es característico: al elevar ambos brazos sobre la cabeza durante un minuto aparecen congestión facial, cianosis e ingurgitación yugular, por obstrucción del operculo torácico.',
      criterios_dx: 'Clínico con confirmación por imagen. La tomografía cervicotoracica define la extensión retroesternal, el grado de estenosis traqueal y su desplazamiento. Las pruebas de función respiratoria con curva flujo-volumen muestran un patrón de obstrucción extratoracica variable o fija.',
      laboratorio: 'TSH para descartar autonomia funcional. Gasometría si hay disnea significativa.',
      imagen: 'TOMOGRAFÍA cervicotoracica, que es la prueba clave. Resonancia si se quiere evitar el contraste yodado. Radiografía de tórax como aproximación inicial: desviación traqueal y ensanchamiento mediastínico superior.',
      complementarios: 'Espirometría con curva flujo-volumen. Laringoscopia para valorar la movilidad de las cuerdas antes de operar. Esofagograma si predomina la disfagia.',
      dx_diferencial: 'Masa mediastínica de otro origen (timoma, linfoma, teratoma), aneurisma de aorta, tumor esofágico, enfermedad pulmonar obstructiva (que explica mejor la disnea en muchos pacientes) y disfunción de cuerdas vocales.',
      tx_medico: 'No hay tratamiento médico eficaz. La levotiroxina supresora NO reduce el bocio de forma significativa y se ha abandonado. Si el paciente no es candidato a cirugía, se optimiza el tratamiento respiratorio de base.',
      tx_farmacologico: 'Ninguno específico. Corticoides en pauta corta solo como medida puente ante edema agudo o inflamación asociada.',
      tx_intervencionista: 'CIRUGÍA, que es el tratamiento de elección: tiroidectomía total, casi siempre por via cervical incluso en el bocio subesternal, y solo excepcionalmente con esternotomia. El YODO RADIACTIVO es una alternativa en el paciente no candidato a cirugía: reduce el volumen un 30 al 50% en 12 a 18 meses, con el aviso de un posible edema transitorio inicial que puede empeorar la compresión.',
      criterios_uci: 'Compromiso agudo de la via aérea por hemorragia intranodular o por edema tras un procedimiento.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Tras la cirugía de un bocio grande, vigilar traqueomalacia, que es rara pero puede requerir reintubacion. Vigilancia estándar de hematoma cervical y de hipocalcemia.',
      seguimiento_ambulatorio: 'Sustitución con levotiroxina tras la tiroidectomía total y control de calcio. Si se optó por yodo radiactivo, control de volumen y de función tiroidea, porque el hipotiroidismo posterior es frecuente.',
      pronostico: 'Excelente tras la cirugía, con resolución de los síntomas compresivos en la mayoría. La recidiva tras tiroidectomía total es rara.',
      algoritmo: ['Síntomas compresivos o bocio grande: tomografía cervicotoracica', 'Buscar el signo de Pemberton en la exploración', 'Espirometría con curva flujo-volumen', 'Laringoscopia preoperatoria', 'Valorar si los síntomas se explican de verdad por el bocio', 'Cirugía como tratamiento de elección si hay compresión demostrada', 'Casi siempre abordaje cervical, rara vez esternotomia', 'Yodo radiactivo si no es candidato a cirugía, avisando del edema inicial', 'Sustitución hormonal y control de calcio tras la cirugía']
    },
    {
      nombre: 'Complicaciones de la tiroidectomía',
      color: '#7a1f3d',
      definicion: 'Efectos adversos de la cirugía tiroidea, dominados por el hipoparatiroidismo y la lesión del nervio laríngeo recurrente. Su frecuencia depende sobre todo de la experiencia del cirujano y de la extensión de la resección, y son la razón principal para no operar de más.',
      fisiopatologia: 'Las paratiroides dependen casi por completo de la arteria tiroidea inferior: su desvascularizacion o su extirpacion inadvertida producen hipoparatiroidismo con hipocalcemia. El nervio laríngeo recurrente asciende pegado a esa misma arteria y al ligamento de Berry, donde es más vulnerable. La rama externa del laríngeo superior discurre junto a la arteria tiroidea superior y su lesión pasa desapercibida salvo en profesionales de la voz. El hematoma cervical, aunque raro, es la complicación más temida por su rapidez. Ver la Figura 1 de Definición.',
      epidemiologia: 'Hipoparatiroidismo transitorio en el 20 al 30% de las tiroidectomías totales y permanente en el 1 al 3%. Lesión recurrencial transitoria en el 3 al 5% y permanente en el 1 al 2%. Hematoma cervical con necesidad de reintervención en el 0.3 al 1%. Todas las cifras empeoran de forma marcada con cirujanos de bajo volumen.',
      factores_riesgo: ['Cirujano de bajo volumen anual (el factor más importante)', 'Tiroidectomía total frente a lobectomia', 'Disección ganglionar central', 'Reintervención sobre un lecho ya operado', 'Bocio grande, subesternal o con tiroiditis', 'Enfermedad de Graves por la hipervascularización', 'Cáncer con invasión local', 'Déficit de vitamina D preoperatorio no corregido'],
      clinica: 'HIPOCALCEMIA: parestesias peribucales y en los dedos, calambres, signos de Chvostek y de Trousseau, y en casos graves tetania, laringoespasmo, convulsiones y QT largo. LESIÓN RECURRENCIAL unilateral: disfonia con voz débil y aspiración con líquidos; BILATERAL: estridor y obstrucción de la via aérea que puede exigir traqueostomía. HEMATOMA CERVICAL: tumefacción cervical rápida con dificultad respiratoria, que es una urgencia de minutos.',
      criterios_dx: 'Calcio corregido por albúmina o calcio iónico y hormona paratiroidea posquirúrgicos. Laringoscopia para documentar la movilidad de las cuerdas. El hematoma compresivo es un diagnóstico clínico que no espera pruebas.',
      laboratorio: 'Calcio, albúmina, magnesio, fósforo y hormona paratiroidea. Una hormona paratiroidea baja medida en las primeras horas tras la cirugía predice la hipocalcemia sintomática y permite iniciar el suplemento antes de que aparezcan síntomas.',
      imagen: 'No indicada para el hematoma, que se maneja de forma clínica. Laringoscopia para la voz.',
      complementarios: 'Electrocardiograma si la hipocalcemia es grave (QT largo). Valoración foniatrica en la disfonia persistente.',
      dx_diferencial: 'Hipocalcemia por hipomagnesemia (frecuente y que hace la hipocalcemia refractaria si no se corrige), síndrome de hueso hambriento tras cirugía de hiperparatiroidismo concomitante, disfonia por intubación o por edema laríngeo, y seroma frente a hematoma.',
      tx_medico: 'Vigilancia del cuello en las primeras horas. Corregir el déficit de vitamina D ANTES de la cirugía, que reduce la hipocalcemia posoperatoria. Valoración de la voz antes del alta.',
      tx_farmacologico: 'Hipocalcemia: calcio oral con calcitriol, y calcio intravenoso si hay síntomas graves o tetania. CORREGIR SIEMPRE EL MAGNESIO, porque su déficit hace la hipocalcemia refractaria. En el hipoparatiroidismo permanente, calcio y calcitriol de por vida, con hormona paratiroidea recombinante en casos seleccionados de mal control.',
      tx_intervencionista: 'HEMATOMA CERVICAL COMPRESIVO: apertura INMEDIATA de la herida a pie de cama, sin esperar a quirófano ni a pruebas de imagen; es una urgencia de minutos. Parálisis recurrencial bilateral: intubación o traqueostomía. En la disfonia persistente, procedimientos de medializacion de la cuerda.',
      criterios_uci: 'Hematoma compresivo, parálisis recurrencial bilateral, tetania grave con laringoespasmo o convulsiones.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Calcio seriado en las primeras 24 a 48 horas y hormona paratiroidea precoz. Observación del cuello. Valoración de la voz. Inicio de levotiroxina tras tiroidectomía total.',
      seguimiento_ambulatorio: 'Ajuste de calcio y calcitriol con controles hasta la estabilización. Laringoscopia de control en la disfonia persistente: la mayoría de las lesiones transitorias se recupera en 6 meses. Si a los 6 a 12 meses persiste el hipoparatiroidismo, se considera permanente.',
      pronostico: 'La mayoría de las complicaciones son transitorias. Las permanentes son poco frecuentes en manos expertas, y su prevención es el argumento principal para desescalar la cirugía en el cáncer de bajo riesgo.',
      algoritmo: ['Corregir el déficit de vitamina D antes de operar', 'Laringoscopia preoperatoria para documentar la voz', 'Vigilar el cuello en las primeras horas del posoperatorio', 'Hematoma compresivo: abrir la herida de inmediato a pie de cama', 'Medir hormona paratiroidea precoz y calcio seriado', 'Hipocalcemia: calcio oral con calcitriol; intravenoso si es grave', 'Corregir siempre el magnesio en la hipocalcemia refractaria', 'Valorar la voz antes del alta y hacer laringoscopia si hay disfonia', 'Reevaluar a los 6 a 12 meses antes de etiquetar de permanente']
    },
    {
      nombre: 'Recurrencia y seguimiento del carcinoma diferenciado',
      color: '#6b4a2e',
      definicion: 'Vigilancia después del tratamiento inicial y manejo de la enfermedad persistente o recurrente. Es donde vive la mayor parte de la práctica clínica del cáncer de tiroides, porque el tumor recidiva mucho más de lo que mata.',
      fisiopatologia: 'La célula del carcinoma diferenciado conserva dos propiedades que sostienen todo el seguimiento: produce <strong>tiroglobulina</strong>, que sirve de marcador cuando ya no queda tiroides normal, y expresa el cotransportador sodio-yoduro, que permite detectarla y tratarla con yodo radiactivo. La pérdida progresiva de esta segunda propiedad define la enfermedad <strong>refractaria al yodo</strong>, que tiene peor pronóstico y obliga a cambiar de estrategia.',
      epidemiologia: 'La recurrencia estructural aparece en el 5% del riesgo bajo, el 20% del intermedio y más del 40% del alto. La mayoría son ganglionares cervicales y muchas se manejan con vigilancia o cirugía dirigida, sin repercusión sobre la supervivencia.',
      factores_riesgo: ['Riesgo alto o intermedio de la ATA al diagnóstico', 'Extensión extratiroidea y resección incompleta', 'Número, tamano y extensión extracapsular de los ganglios afectados', 'Invasión vascular extensa', 'Histología agresiva y desdiferenciacion', 'Tiroglobulina posquirúrgica elevada', 'Metástasis a distancia', 'Enfermedad refractaria al yodo radiactivo'],
      clinica: 'Habitualmente asintomática y detectada por elevación de la tiroglobulina o por ecografía. Cuando da síntomas: adenopatía cervical palpable, disfonia por invasión del recurrente, o síntomas de metástasis pulmonar u ósea.',
      criterios_dx: 'Ecografía cervical con punción de los ganglios sospechosos, midiendo TIROGLOBULINA EN EL LAVADO DE LA AGUJA, que es más sensible que la citología sola. Tiroglobulina sérica creciente. Imagen funcional si la tiroglobulina es alta con ecografía normal.',
      laboratorio: 'Tiroglobulina SIEMPRE con anticuerpos antitiroglobulina en la misma muestra: si los anticuerpos son positivos, la tiroglobulina se falsea a la baja y no es interpretable, y se usa la tendencia del título de anticuerpos como marcador indirecto. TSH para comprobar el grado de supresión.',
      imagen: 'Ecografía cervical, que es la prueba más rentable. Rastreo con yodo radiactivo con estimulación adecuada de la TSH. Tomografía por emision de positrones si la tiroglobulina es alta con rastreo negativo, situación que sugiere desdiferenciacion.',
      complementarios: 'Reclasificacion según la RESPUESTA AL TRATAMIENTO (excelente, bioquímica incompleta, estructural incompleta o indeterminada), que ha desplazado en gran medida al riesgo inicial para guiar la intensidad del seguimiento y el objetivo de TSH.',
      dx_diferencial: 'Resto tiroideo residual benigno, ganglios reactivos, granuloma de sutura, tejido tiroideo ectópico, elevación de tiroglobulina por TSH alta sin enfermedad, e interferencia analítica por anticuerpos.',
      tx_medico: 'Ajuste del objetivo de TSH según riesgo y respuesta: por debajo de 0.1 mUI/L en la enfermedad estructural persistente, de 0.1 a 0.5 en la bioquímica incompleta o la respuesta indeterminada, y de 0.5 a 2.0 en la respuesta excelente. Vigilar el coste cardiaco y óseo de la supresión mantenida.',
      tx_farmacologico: 'Yodo radiactivo en la enfermedad captante. En la enfermedad progresiva y refractaria al yodo: lenvatinib o sorafenib como inhibidores multicinasa, y terapias dirigidas si hay diana molecular (selpercatinib o pralsetinib en RET, larotrectinib o entrectinib en fusiones de NTRK, dabrafenib con trametinib en BRAF V600E). No toda enfermedad metastásica requiere tratamiento inmediato: la estable y asintomática se puede vigilar.',
      tx_intervencionista: 'Cirugía de rescate en la recurrencia cervical resecable, que es el tratamiento de elección. Ablación percutánea o radioterapia estereotáctica en lesiones seleccionadas. Radioterapia externa en enfermedad local irresecable y en metástasis óseas sintomáticas.',
      criterios_uci: 'Excepcional: compromiso de via aérea por recurrencia local avanzada.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Solo en el contexto de una cirugía de rescate o de complicaciones de la enfermedad avanzada.',
      seguimiento_ambulatorio: 'Tiroglobulina con anticuerpos y ecografía cervical a los 6 a 12 meses del tratamiento inicial, y después con intervalos que dependen de la respuesta: anual o más espaciado en la respuesta excelente, más estrecho en las demás.',
      pronostico: 'La mayoría de las recurrencias son cervicales y no comprometen la supervivencia. El pronóstico empeora de forma clara en la enfermedad refractaria al yodo y en la que capta glucosa de forma intensa en la tomografía por emision de positrones.',
      algoritmo: ['Clasificar el riesgo de recurrencia de la ATA con la pieza quirúrgica', 'Fijar el objetivo de TSH según ese riesgo', 'Tiroglobulina con anticuerpos y ecografía a los 6 a 12 meses', 'Si los anticuerpos son positivos, la tiroglobulina no es interpretable', 'Reclasificar según la respuesta al tratamiento', 'Respuesta excelente: relajar el objetivo de TSH y espaciar controles', 'Ganglio sospechoso: punción con tiroglobulina en el lavado de la aguja', 'Tiroglobulina alta con rastreo negativo: tomografía por emision de positrones', 'Recurrencia cervical resecable: cirugía de rescate', 'Enfermedad refractaria y progresiva: inhibidores multicinasa o terapia dirigida']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El nódulo tiroideo es una enfermedad ambulatoria: al hospital llegan sus extremos. Por un lado, las complicaciones de la cirugía, que se juegan en las primeras 24 horas. Por otro, las dos urgencias oncológicas del tema: la masa de crecimiento rápido con compromiso de via aérea y el bocio que descompensa. Las tres se manejan mejor si se recuerda que el reloj es distinto en cada una.',
    parametros: ['Ante masa cervical de crecimiento rápido con disfonia: biopsia con aguja gruesa y valoración urgente de la via aérea, sin demora', 'Distinguir anaplasico de linfoma es urgente, porque el tratamiento es radicalmente distinto', 'En el anaplasico, determinar BRAF V600E de inmediato: cambia el tratamiento en días', 'Tras tiroidectomía, vigilar el cuello en las primeras horas: el hematoma compresivo es una urgencia de minutos', 'Hematoma compresivo: abrir la herida a pie de cama, sin esperar a quirófano ni a imagen', 'Medir hormona paratiroidea precoz y calcio seriado tras la tiroidectomía total', 'Corregir el magnesio siempre en la hipocalcemia refractaria', 'Valorar la voz antes del alta y hacer laringoscopia ante disfonia', 'Antes de operar un carcinoma medular, descartar feocromocitoma con metanefrinas', 'Evitar contraste yodado si esta previsto yodo radiactivo a corto plazo'],
    criterios_uci_general: 'Compromiso agudo de la via aérea (anaplasico, linfoma, hematoma cervical, parálisis recurrencial bilateral, bocio con hemorragia intranodular), tetania grave con laringoespasmo, y crisis hipertensiva por feocromocitoma no diagnosticado durante una cirugía por carcinoma medular.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa. Interesa como cribado del receptor y del donante ante un nódulo tiroideo detectado durante el estudio pretrasplante.',
    prevencion: 'Primaria: yodacion adecuada de la sal, que reduce el bocio nodular y desplaza el patrón histológico del cáncer hacia formas más favorables, y evitar la radiación cervical innecesaria en la infancia. Secundaria: cribado genético de RET en familiares de todo carcinoma medular, con tiroidectomía profiláctica en portadores; y NO cribado poblacional con ecografía tiroidea, que es la causa principal del sobrediagnostico. Terciaria: desescalar la cirugía y el yodo radiactivo en el riesgo bajo, y evitar la supresión excesiva de TSH mantenida por su coste cardiaco y óseo.'
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
  'Nódulo tiroideo y bocio multinodular no tóxico': { definicion: [1, 2, 5, 16], criterios_dx: [1, 2, 5, 16], laboratorio: [1, 2, 5, 16], tx_farmacologico: [1, 2, 5, 16] },
  'Carcinoma papilar de tiroides': { definicion: [1, 8, 11, 17], criterios_dx: [1, 8, 11, 17], laboratorio: [1, 8, 11, 17], tx_farmacologico: [1, 8, 11, 17] },
  'Carcinoma folicular y oncocitico (de células de Hurthle)': { definicion: [1, 19], criterios_dx: [1, 19], laboratorio: [1, 19], tx_farmacologico: [1, 19] },
  'Carcinoma medular de tiroides y MEN2': { definicion: [6, 14], criterios_dx: [6, 14], laboratorio: [6, 14], tx_farmacologico: [6, 14] },
  'Carcinoma anaplasico y linfoma tiroideo': { definicion: [7, 15], criterios_dx: [7, 15], laboratorio: [7, 15], tx_farmacologico: [7, 15] },
  'Complicaciones compresivas del bocio y bocio subesternal': { definicion: [16, 18], criterios_dx: [16, 18], laboratorio: [16, 18], tx_farmacologico: [16, 18] },
  'Complicaciones de la tiroidectomía': { definicion: [1, 18], criterios_dx: [1, 18], laboratorio: [1, 18], tx_farmacologico: [1, 18] },
  'Recurrencia y seguimiento del carcinoma diferenciado': { definicion: [1, 9, 13], criterios_dx: [1, 9], laboratorio: [1, 9], tx_farmacologico: [1, 9, 13] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'TI-RADS del American College of Radiology (calculadora disponible)': [2],
  'Sistema Bethesda para la citología tiroidea': [3, 4],
  'Estadificación TNM del carcinoma diferenciado': [1, 19],
  'Riesgo de recurrencia de la ATA (calculadora disponible)': [1, 9],
  'Respuesta al tratamiento (estratificación dinámica)': [1]
};
export const escalaCalc = {
  'TI-RADS del American College of Radiology (calculadora disponible)': 'ti-rads',
  'Riesgo de recurrencia de la ATA (calculadora disponible)': 'riesgo-recurrencia-ata',
  'Respuesta al tratamiento (estratificación dinámica)': 'riesgo-recurrencia-ata'
};
export const compGroups = [
  { name: 'Nódulo y tipos de cáncer', items: ['Nódulo tiroideo y bocio multinodular no tóxico', 'Carcinoma papilar de tiroides', 'Carcinoma folicular y oncocitico (de células de Hurthle)', 'Carcinoma medular de tiroides y MEN2', 'Carcinoma anaplasico y linfoma tiroideo'] },
  { name: 'Complicaciones y seguimiento', items: ['Complicaciones compresivas del bocio y bocio subesternal', 'Complicaciones de la tiroidectomía', 'Recurrencia y seguimiento del carcinoma diferenciado'] }
];
export const complicacionesIntro = 'Las cinco primeras fichas van de lo más frecuente a lo más grave: el nódulo y el bocio no tóxico, que son casi todo lo que se ve y donde más dano hace intervenir de más; los tres canceres del epitelio folicular; el medular, que no viene del epitelio folicular y por eso no capta yodo, no responde a la TSH y obliga a estudiar el gen RET; y el anaplasico junto al linfoma, las dos masas de crecimiento rápido cuya distinción es urgente porque una es de las neoplasias más letales y la otra es curable. Las tres últimas son las complicaciones: las compresivas del bocio, las de la cirugía (que son el argumento principal para no operar de más) y la recurrencia, que es donde vive la mayor parte de la práctica clínica.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Clasificaciones' },
  { id: 'complicaciones', label: 'Formas y complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'NÓDULO TIROIDEO', color: '#5b4a86', target: 'definicion' },
  branches: [
    { title: 'Como se estudia', sub: 'TSH, ecografía y punción', color: '#3d5a73', target: 'diagnostico', leaves: [
      { title: 'TSH suprimida', sub: 'Gammagrafía: caliente no se punciona', color: '#b4552f', target: 'diagnostico' },
      { title: 'TI-RADS y tamano', sub: 'TR5 desde 1 cm, TR4 desde 1.5', color: '#5b4a86', target: 'clasificacion' },
      { title: 'Bethesda', sub: 'Seis categorías, seis conductas', color: '#3f6b52', target: 'clasificacion' },
      { title: 'Bethesda IV', sub: 'La citología no distingue folicular', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'Los cinco canceres', sub: 'Se parecen muy poco entre si', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Papilar', sub: '85%, linfático, capta yodo', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Folicular y oncocitico', sub: 'Hematogeno a hueso y pulmón', color: '#b4552f', target: 'complicaciones' },
      { title: 'Medular', sub: 'Células C, calcitonina, gen RET', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Anaplasico y linfoma', sub: 'Masa de crecimiento rápido', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'Menos es más', sub: 'La desescalada de la última década', color: '#6b4a2e', target: 'definicion', leaves: [
      { title: 'Umbrales de punción altos', sub: 'No puncionar todo lo que se ve', color: '#5b4a86', target: 'clasificacion' },
      { title: 'Lobectomia', sub: 'De 1 a 4 cm sin extensión', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Yodo radiactivo selectivo', sub: 'No sistemático en riesgo bajo', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Vigilancia activa', sub: 'Microcarcinoma seleccionado', color: '#3f6b52', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 6], no_invasivos: [2, 3, 1], imagen: [1, 19] };
export const clasificacionCite = [2, 3, 1];
export const seguimientoCite = [1, 7];
