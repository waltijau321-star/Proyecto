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
  titulo: 'Nodulo y Cancer de Tiroides',
  subtitulo: 'Modulo 46 · Medicina Interna',
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
        <text x="130" y="14" text-anchor="middle" fill="var(--ink-dim)" font-size="8">Traquea</text>
        <!-- lobulos tiroideos -->
        <path d="M112 52 C 84 54, 68 74, 70 104 C 72 134, 92 150, 108 142 C 118 136, 116 96, 112 52 Z" fill="#5b4a8630" stroke="#5b4a86" stroke-width="1.5"/>
        <path d="M148 52 C 176 54, 192 74, 190 104 C 188 134, 168 150, 152 142 C 142 136, 144 96, 148 52 Z" fill="#5b4a8630" stroke="#5b4a86" stroke-width="1.5"/>
        <rect x="112" y="92" width="36" height="24" fill="#5b4a8630" stroke="#5b4a86" stroke-width="1.2"/>
        <text x="130" y="108" text-anchor="middle" fill="#5b4a86" font-size="7.5">Istmo</text>
        <text x="58" y="98" text-anchor="end" fill="#5b4a86" font-size="8">Lobulo</text>
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
        <text x="20" y="200" fill="#8c3a34" font-size="8">Nervio laringeo</text>
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
        <div style="font-weight:700;color:#8c3a34;">El nervio laringeo recurrente</div>
        <div style="color:var(--ink-dim);">Asciende en el surco traqueoesofagico, muy cerca de la <strong>arteria tiroidea inferior</strong> y del ligamento de Berry, que es donde mas se lesiona. Inerva todos los musculos intrinsecos de la laringe salvo el cricotiroideo. Su lesion unilateral produce <strong>disfonia</strong> con voz debil y aspiracion; la <strong>bilateral</strong> puede cerrar la glotis y obligar a traqueostomia urgente.</div>
      </div>
      <div style="border:1px solid #b4552f;border-radius:8px;padding:6px 9px;background:#b4552f12;">
        <div style="font-weight:700;color:#b4552f;">La rama externa del laringeo superior</div>
        <div style="color:var(--ink-dim);">Discurre junto a la <strong>arteria tiroidea superior</strong> e inerva el musculo cricotiroideo, que tensa la cuerda. Su lesion no da disfonia franca sino <strong>perdida de los tonos agudos y fatiga vocal</strong>: pasa desapercibida salvo en cantantes y profesionales de la voz.</div>
      </div>
      <div style="border:1px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f12;">
        <div style="font-weight:700;color:#8a6a1f;">Las cuatro paratiroides</div>
        <div style="color:var(--ink-dim);">Estan en la cara <strong>posterior</strong> de los lobulos y su irrigacion depende casi por completo de la <strong>arteria tiroidea inferior</strong>. Por eso la tiroidectomia total puede dejar hipoparatiroidismo, transitorio en el 20 al 30% de los casos y permanente en el 1 al 3%. Si una glandula queda desvascularizada, se autotrasplanta en el esternocleidomastoideo.</div>
      </div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 9px;background:var(--panel2);color:var(--ink-dim);">
        <strong style="color:var(--accent-fg);">Por que importa esta anatomia:</strong> las dos complicaciones que definen la calidad de una tiroidectomia (disfonia e hipocalcemia) se explican por completo por lo que rodea a la glandula, y por eso el volumen quirurgico del cirujano es el mejor predictor de ambas.
      </div>
    </div>
  </div>
</div>`;

const noduloHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">1. Siempre<br>una TSH</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Si la TSH esta <strong>SUPRIMIDA</strong>, el camino cambia: se hace <strong>gammagrafia</strong> y, si el nodulo es caliente, es un adenoma toxico. Un nodulo caliente practicamente nunca es maligno y <strong>no se punciona</strong>: se trata como hipertiroidismo. Si la TSH es normal o alta, se sigue por ecografia.</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">2. Ecografia<br>y TI-RADS</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Se puntuan cinco caracteristicas: composicion, ecogenicidad, forma, margen y focos ecogenicos. La suma da la categoria <strong>TR1 a TR5</strong>, y la conducta depende de la categoria <strong>Y del tamano</strong> a la vez, no de ninguna de las dos por separado (calculadora disponible).</div>
    </div>
    <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">3. Puncion<br>o vigilancia</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Umbrales de puncion: <strong>TR5 a partir de 1 cm</strong>, <strong>TR4 a partir de 1.5 cm</strong> y <strong>TR3 a partir de 2.5 cm</strong>. TR1 y TR2 no se puncionan. Por debajo de esos tamanos, seguimiento ecografico. Es lo que evita puncionar los millones de nodulos pequenos e irrelevantes que la ecografia detecta.</div>
    </div>
  </div>
  <div style="font-weight:700;color:var(--accent-fg);margin:8px 0 4px;">4. Citologia: sistema Bethesda y que hacer con cada categoria</div>
  <div style="display:flex;flex-direction:column;gap:3px;">
    <div style="display:grid;grid-template-columns:118px 90px 1fr;gap:5px;align-items:center;">
      <div style="border:1px solid #6b4a2e;background:#6b4a2e18;border-radius:5px;padding:3px 6px;font-weight:700;color:#6b4a2e;">I. No diagnostica</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px;text-align:center;color:var(--ink-dim);">5-10%</div>
      <div style="color:var(--ink-dim);">Repetir la puncion con guia ecografica</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 90px 1fr;gap:5px;align-items:center;">
      <div style="border:1px solid #3f6b52;background:#3f6b5218;border-radius:5px;padding:3px 6px;font-weight:700;color:#3f6b52;">II. Benigna</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px;text-align:center;color:var(--ink-dim);">1-4%</div>
      <div style="color:var(--ink-dim);">Seguimiento ecografico; no hace falta cirugia</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 90px 1fr;gap:5px;align-items:center;">
      <div style="border:1px solid #8a6a1f;background:#8a6a1f18;border-radius:5px;padding:3px 6px;font-weight:700;color:#8a6a1f;">III. Atipia (AUS)</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px;text-align:center;color:var(--ink-dim);">13-30%</div>
      <div style="color:var(--ink-dim);">Repetir puncion, <strong>estudio molecular</strong> o lobectomia diagnostica</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 90px 1fr;gap:5px;align-items:center;">
      <div style="border:1px solid #b4552f;background:#b4552f18;border-radius:5px;padding:3px 6px;font-weight:700;color:#b4552f;">IV. Neoplasia folicular</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px;text-align:center;color:var(--ink-dim);">23-34%</div>
      <div style="color:var(--ink-dim);">Estudio molecular o <strong>lobectomia</strong>: la citologia NO puede distinguir adenoma de carcinoma folicular</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 90px 1fr;gap:5px;align-items:center;">
      <div style="border:1px solid #8c3a34;background:#8c3a3418;border-radius:5px;padding:3px 6px;font-weight:700;color:#8c3a34;">V. Sospechosa</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px;text-align:center;color:var(--ink-dim);">67-83%</div>
      <div style="color:var(--ink-dim);">Cirugia (lobectomia o tiroidectomia segun extension)</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 90px 1fr;gap:5px;align-items:center;">
      <div style="border:1px solid #7a1f3d;background:#7a1f3d18;border-radius:5px;padding:3px 6px;font-weight:700;color:#7a1f3d;">VI. Maligna</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px;text-align:center;color:var(--ink-dim);">97-100%</div>
      <div style="color:var(--ink-dim);">Cirugia; extension segun tamano, ganglios y extension extratiroidea</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">La trampa del folicular:</strong> la puncion aspira celulas, no arquitectura, y el diagnostico de carcinoma folicular exige demostrar <strong>invasion capsular o vascular</strong>. Por eso una citologia de neoplasia folicular no distingue el adenoma benigno del carcinoma, y hace falta la pieza quirurgica o un panel molecular con valor predictivo negativo alto para evitar operar de mas.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El nodulo tiroideo es uno de los hallazgos mas frecuentes de la medicina: se palpa en el 5% de la poblacion, se ve por ecografia en mas del <strong>50% de los mayores de 60 anos</strong> y solo alrededor del <strong>5 al 10%</strong> es maligno. Todo el tema consiste, por tanto, en un ejercicio de contencion: encontrar el cancer que importa sin puncionar ni operar a la enorme mayoria que no lo tiene. Y en la otra direccion, reconocer las pocas formas agresivas que exigen actuar en dias.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La anatomia explica las complicaciones.</strong></p>
${figBlock('Figura 1', 'Anatomia tiroidea: recurrente, laringeo superior y paratiroides', anatomiaHtml)}
<p style="margin:0 0 12px;">Las dos complicaciones que definen la calidad de una tiroidectomia son la <strong>disfonia</strong> y la <strong>hipocalcemia</strong>, y ambas se explican por lo que rodea a la glandula: el nervio laringeo recurrente asciende pegado a la arteria tiroidea inferior y al ligamento de Berry, y las cuatro paratiroides dependen de esa misma arteria para su irrigacion. De ahi que el <strong>volumen quirurgico del cirujano</strong> sea el mejor predictor conocido de ambas complicaciones, y que la decision de operar o no tenga siempre un coste que hay que poner en la balanza.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se estudia un nodulo.</strong></p>
${figBlock('Figura 2', 'Del nodulo a la conducta: TSH, TI-RADS, puncion y Bethesda', noduloHtml)}
<p style="margin:0 0 12px;">Solo hay tres pasos. Primero, <strong>una TSH</strong>: si esta suprimida el camino se desvia hacia la gammagrafia, porque un nodulo caliente casi nunca es maligno y no se punciona. Segundo, <strong>una ecografia con puntuacion TI-RADS</strong>, que combina composicion, ecogenicidad, forma, margen y focos ecogenicos. Y tercero, la decision de puncionar, que depende de la <strong>categoria y del tamano a la vez</strong>: TR5 desde 1 cm, TR4 desde 1.5 cm y TR3 desde 2.5 cm (calculadora disponible). Los signos ecograficos que mas pesan son el nodulo <strong>mas alto que ancho</strong>, el <strong>margen irregular o con extension extratiroidea</strong> y los <strong>microcalcios puntiformes</strong>.</p>
<p style="margin:0 0 12px;">La citologia se informa con el sistema <strong>Bethesda</strong> en seis categorias, cada una con su riesgo de malignidad y su conducta. La categoria que mas problemas da es la <strong>IV, neoplasia folicular</strong>, porque la puncion obtiene celulas y no arquitectura, y el diagnostico de carcinoma folicular exige demostrar invasion de la capsula o de los vasos. De ahi que muchos pacientes acaben en una lobectomia diagnostica, y de ahi el interes de los <strong>paneles moleculares</strong> con valor predictivo negativo alto, que permiten evitar cirugias innecesarias en las categorias indeterminadas.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Los cinco canceres del tiroides, y por que se parecen tan poco entre si.</strong></p>
<p style="margin:0 0 12px;">El <strong>papilar</strong> es el 85% de los casos: deriva del epitelio folicular, se disemina por via <strong>linfatica</strong>, capta yodo y tiene una supervivencia a 10 anos superior al 95%. El <strong>folicular</strong> y el <strong>oncocitico</strong> se diseminan por via <strong>hematogena</strong> a hueso y pulmon, y el oncocitico capta yodo mal. El <strong>medular</strong> no viene del epitelio folicular sino de las <strong>celulas C parafoliculares</strong>: produce calcitonina, no capta yodo, no responde a la supresion de TSH y en una cuarta parte de los casos es hereditario dentro de un sindrome MEN2, lo que obliga a estudiar el gen <strong>RET</strong> en todos los casos. Y el <strong>anaplasico</strong> es una de las neoplasias mas agresivas de la medicina, con supervivencia mediana de meses.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El giro de la ultima decada: menos es mas.</strong></p>
<p style="margin:0 0 12px;">La incidencia del cancer de tiroides se multiplico por tres en treinta anos sin que aumentara la mortalidad: casi todo ese incremento fue <strong>sobrediagnostico</strong> de microcarcinomas papilares detectados por ecografias pedidas por otro motivo. La respuesta ha sido desescalar en tres frentes. Se han elevado los umbrales de puncion. Se ha ampliado la <strong>lobectomia</strong> frente a la tiroidectomia total en tumores de 1 a 4 cm sin extension ni ganglios. Y se ha restringido el <strong>yodo radiactivo</strong>, que ya no se administra de forma sistematica al riesgo bajo. Ademas, la variante folicular encapsulada no invasora se reclasifico como <strong>NIFTP</strong>, es decir, dejo de llamarse carcinoma. En paralelo, en microcarcinomas papilares seleccionados se ofrece <strong>vigilancia activa</strong> en lugar de cirugia.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No puncionar un nodulo <strong>caliente</strong>. No puncionar por debajo de los umbrales de tamano de su categoria TI-RADS. No pedir <strong>tiroglobulina</strong> como marcador diagnostico en un nodulo, porque no distingue benigno de maligno: solo sirve en el seguimiento del carcinoma diferenciado ya operado. No usar levotiroxina supresora para "encoger" un bocio nodular benigno, practica abandonada por ineficaz y por sus efectos sobre corazon y hueso. Y no demorar el estudio ante una masa cervical de crecimiento <strong>rapido</strong> con disfonia: el anaplasico se mide en semanas.</p>`;

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
      tituloA: 'Nodulo o bocio de bajo riesgo',
      tituloB: 'Signos de alarma y enfermedad avanzada',
      compensada: 'Habitualmente asintomatico y descubierto de forma casual, en una exploracion de rutina o en una imagen pedida por otro motivo (incidentaloma tiroideo). Cuando se palpa, es un nodulo unico o multiple, movil con la deglucion, indoloro y de consistencia elastica. El bocio multinodular no toxico puede producir molestia local o sensacion de presion cervical sin repercusion funcional.',
      descompensada: 'Signos que obligan a acelerar el estudio: crecimiento RAPIDO en semanas o meses, consistencia dura y fijacion a planos profundos, DISFONIA por paralisis de cuerda vocal, disfagia, disnea o estridor, adenopatias cervicales duras y sindrome de vena cava superior en el bocio subesternal. En el anaplasico, una masa cervical que crece de forma visible en semanas con compromiso de la via aerea. La disfonia en un paciente con nodulo es cancer hasta que se demuestre lo contrario.'
    },
    laboratorio: [
      { prueba: 'TSH', utilidad: 'PRIMERA prueba ante todo nodulo, y la que decide el camino. Si esta suprimida, se hace gammagrafia: un nodulo caliente practicamente nunca es maligno y no se punciona. Si es normal o alta, se sigue por ecografia y puncion segun TI-RADS y tamano.' },
      { prueba: 'Calcitonina', utilidad: 'Marcador del carcinoma medular. Su cribado sistematico en todo nodulo es discutido y varia entre guias, pero se pide ante antecedente familiar de medular o de MEN2, diarrea o rubefaccion inexplicadas, o citologia sospechosa de medular. Valores muy altos son practicamente diagnosticos.' },
      { prueba: 'Antigeno carcinoembrionario', utilidad: 'Complementa a la calcitonina en el carcinoma medular. Su elevacion con calcitonina que no sube en paralelo sugiere desdiferenciacion y peor pronostico. En el seguimiento, el tiempo de duplicacion de ambos marcadores es el mejor predictor de progresion.' },
      { prueba: 'Tiroglobulina', utilidad: 'NO sirve como marcador diagnostico en un nodulo: no distingue benigno de maligno. Su papel es el SEGUIMIENTO del carcinoma diferenciado ya operado, donde se interpreta junto con los anticuerpos antitiroglobulina y con el grado de estimulacion de la TSH.' },
      { prueba: 'Anticuerpos antitiroglobulina', utilidad: 'Se piden SIEMPRE con la tiroglobulina: si son positivos, falsean su medicion a la baja y la hacen no interpretable. En ese caso se usa la tendencia del propio titulo de anticuerpos como marcador indirecto de enfermedad residual.' },
      { prueba: 'Calcio, fosforo y hormona paratiroidea', utilidad: 'Antes de la tiroidectomia como referencia, y despues para detectar el hipoparatiroidismo posquirurgico. Una hormona paratiroidea baja en las primeras horas tras la cirugia predice la hipocalcemia sintomatica y permite anticiparse.' },
      { prueba: 'Estudio genetico del gen RET', utilidad: 'Obligado en TODO carcinoma medular, porque hasta una cuarta parte es hereditario dentro de un MEN2 aunque no haya antecedente familiar. Un resultado positivo obliga a cribar a los familiares y a descartar feocromocitoma e hiperparatiroidismo.' },
      { prueba: 'Paneles moleculares en citologia indeterminada', utilidad: 'Se aplican a las categorias Bethesda III y IV. Su valor esta sobre todo en un valor predictivo NEGATIVO alto, que permite evitar la lobectomia diagnostica en muchos pacientes. Las alteraciones mas informativas son BRAF V600E, RAS, RET/PTC y las fusiones de NTRK.' }
    ],
    no_invasivos: [
      { metodo: 'Ecografia cervical con TI-RADS (calculadora disponible)', interpretacion: 'Puntua composicion, ecogenicidad, forma, margen y focos ecogenicos, y clasifica de TR1 a TR5. Los signos que mas pesan son el nodulo mas alto que ancho, el margen irregular o con extension extratiroidea y los microcalcios puntiformes. Debe incluir siempre el estudio de las cadenas ganglionares cervicales.', cutoff: 'Puncion: TR5 desde 1 cm, TR4 desde 1.5 cm, TR3 desde 2.5 cm. TR1 y TR2 no se puncionan' },
      { metodo: 'Puncion aspirativa con aguja fina guiada por ecografia (Bethesda)', interpretacion: 'Prueba de referencia. Seis categorias: I no diagnostica, II benigna, III atipia de significado indeterminado, IV neoplasia folicular, V sospechosa de malignidad, VI maligna, con riesgos de malignidad ascendentes.', cutoff: 'Riesgo aproximado de malignidad: II 1-4%, III 13-30%, IV 23-34%, V 67-83%, VI 97-100%' },
      { metodo: 'Gammagrafia tiroidea', interpretacion: 'SOLO si la TSH esta suprimida. Un nodulo caliente (hiperfuncionante) practicamente nunca es maligno y se maneja como hipertiroidismo. Un nodulo frio no aporta informacion adicional sobre malignidad respecto de la ecografia.', cutoff: 'Contraindicada en embarazo y lactancia' },
      { metodo: 'Laringoscopia', interpretacion: 'Valoracion de la movilidad de las cuerdas vocales ANTES de una tiroidectomia, y obligada si hay disfonia o cirugia cervical previa. Documenta una paralisis preexistente y establece el punto de partida medicolegal y clinico.', cutoff: 'Paralisis de cuerda vocal preoperatoria: sospecha alta de invasion del recurrente' },
      { metodo: 'Elastografia y otras tecnicas complementarias', interpretacion: 'Anaden informacion sobre la rigidez del nodulo, pero no sustituyen al TI-RADS ni cambian los umbrales de puncion. Su papel es marginal en la practica habitual.', cutoff: 'Sin umbrales establecidos de forma universal' }
    ],
    imagen: [
      { modalidad: 'Tomografia cervicotoracica', hallazgos: 'Ante bocio subesternal, sospecha de compresion o invasion, o enfermedad avanzada. Delimita la extension retroesternal, el desplazamiento y la compresion traqueal y la invasion de estructuras vecinas. Ojo: el contraste yodado retrasa varias semanas el uso de yodo radiactivo.' },
      { modalidad: 'Gammagrafia de cuerpo entero con yodo radiactivo', hallazgos: 'Tras la tiroidectomia y la ablacion, localiza restos y metastasis captantes. Su rendimiento depende de la estimulacion adecuada de la TSH, sea por supresion de la levotiroxina o con TSH recombinante humana.' },
      { modalidad: 'Tomografia por emision de positrones con fluorodesoxiglucosa', hallazgos: 'Indicada en el carcinoma diferenciado con tiroglobulina elevada y rastreo con yodo negativo, situacion que sugiere desdiferenciacion. La captacion intensa se asocia a peor pronostico y a refractariedad al yodo.' },
      { modalidad: 'Resonancia magnetica cervical', hallazgos: 'Alternativa a la tomografia cuando se quiere evitar el contraste yodado, sobre todo si esta previsto administrar yodo radiactivo a corto plazo. Buena para valorar invasion de partes blandas.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `El tema se clasifica en tres planos distintos que conviene no mezclar. El <strong>ecografico</strong> (TI-RADS) decide a quien se punciona. El <strong>citologico</strong> (Bethesda) decide a quien se opera. Y el <strong>histologico y de riesgo</strong> (tipo tumoral, estadificacion TNM y riesgo de recurrencia de la ATA) decide la extension de la cirugia, la indicacion de yodo radiactivo, el objetivo de TSH y la intensidad del seguimiento. Una peculiaridad importante: en el carcinoma diferenciado, la estadificacion TNM predice la MORTALIDAD y usa la edad como variable, mientras que la clasificacion de riesgo de la ATA predice la RECURRENCIA, que es lo que se maneja en la practica diaria.`,
    escalas: [
      { nombre: 'TI-RADS del American College of Radiology (calculadora disponible)', componentes: 'Composicion, ecogenicidad, forma, margen y focos ecogenicos. Los cuatro primeros se puntuan eligiendo una opcion; los focos ecogenicos suman entre si.', formula: 'Suma de puntos: 0 es TR1, 2 es TR2, 3 es TR3, de 4 a 6 es TR4 y 7 o mas es TR5.', interpretacion: 'La conducta depende de la categoria Y del tamano: puncion en TR5 desde 1 cm, TR4 desde 1.5 cm y TR3 desde 2.5 cm; seguimiento por debajo de esos umbrales; TR1 y TR2 no requieren puncion.' },
      { nombre: 'Sistema Bethesda para la citologia tiroidea', componentes: 'Seis categorias citologicas con su riesgo de malignidad asociado.', formula: 'Clasificacion descriptiva, no puntuacion.', interpretacion: 'I no diagnostica (repetir); II benigna (seguimiento); III atipia (repetir, molecular o lobectomia); IV neoplasia folicular (molecular o lobectomia, porque la citologia NO distingue adenoma de carcinoma); V sospechosa (cirugia); VI maligna (cirugia).' },
      { nombre: 'Estadificacion TNM del carcinoma diferenciado', componentes: 'Tamano tumoral, extension extratiroidea, ganglios, metastasis y EDAD del paciente.', formula: 'En el carcinoma diferenciado, el punto de corte de edad es 55 anos; por debajo, solo se puede ser estadio I o II.', interpretacion: 'Predice la MORTALIDAD, no la recurrencia. Es la unica neoplasia solida en la que la edad forma parte de la estadificacion, y refleja el excelente pronostico del paciente joven incluso con metastasis a distancia.' },
      { nombre: 'Riesgo de recurrencia de la ATA (calculadora disponible)', componentes: 'Extension extratiroidea, resto tumoral, invasion vascular, histologia agresiva, numero y tamano de los ganglios afectados, metastasis a distancia y tiroglobulina posquirurgica.', formula: 'Clasificacion en riesgo bajo, intermedio y alto.', interpretacion: 'Predice la RECURRENCIA y es la que gobierna la practica: determina si se administra yodo radiactivo, cual es el objetivo de TSH y con que intensidad se sigue al paciente.' },
      { nombre: 'Respuesta al tratamiento (estratificacion dinamica)', componentes: 'Tiroglobulina, anticuerpos antitiroglobulina, ecografia cervical e imagen funcional durante el seguimiento.', formula: 'Cuatro categorias: excelente, bioquimica incompleta, estructural incompleta e indeterminada.', interpretacion: 'Reclasifica al paciente con el tiempo y ha desplazado en gran medida al riesgo inicial: una respuesta excelente permite relajar el objetivo de TSH a 0.5 a 2.0 mUI/L y espaciar los controles aunque el riesgo inicial fuera intermedio.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Nodulo tiroideo y bocio multinodular no toxico',
      color: '#5b4a86',
      definicion: 'Lesion focal delimitada dentro de la glandula (nodulo) o aumento global con multiples nodulos y funcion normal (bocio multinodular no toxico). Es el escenario mas frecuente del tema y en el que mas dano hace el exceso de intervencion.',
      fisiopatologia: 'La glandula responde a estimulos proliferativos heterogeneos (deficit de yodo, factores de crecimiento locales, mutaciones somaticas) con un crecimiento policlonal desigual: unos foliculos proliferan, otros degeneran y forman quistes o hemorragias, y otros calcifican. El resultado es una glandula nodular, asimetrica y de crecimiento lento durante decadas, que con el tiempo puede desarrollar autonomia funcional.',
      epidemiologia: 'Nodulos palpables en el 5% de la poblacion, visibles por ecografia en mas del 50% de los mayores de 60 anos, con predominio femenino. Solo el 5 al 10% son malignos, y la proporcion no aumenta con el numero de nodulos: en un bocio multinodular el riesgo global es similar al de un nodulo unico.',
      factores_riesgo: ['Edad avanzada y sexo femenino (para tener nodulos)', 'Deficit de yodo', 'Antecedente familiar de bocio', 'Radiacion cervical en la infancia (para malignidad)', 'Antecedente familiar de cancer de tiroides o sindromes hereditarios', 'Sexo masculino y edades extremas (aumentan el riesgo de que un nodulo sea maligno)', 'Crecimiento rapido, disfonia, fijacion o adenopatias', 'Obesidad y sindrome metabolico (asociacion debil)'],
      clinica: 'Habitualmente asintomatico. Cuando el bocio crece, sensacion de presion cervical, molestia con el cuello de la camisa o tos seca. El dolor brusco sugiere hemorragia intranodular, no malignidad. Los sintomas compresivos verdaderos son tardios y se desarrollan en su propia ficha.',
      criterios_dx: 'Ecografico. Todo nodulo requiere TSH y ecografia con categoria TI-RADS; la puncion se indica segun categoria y tamano. Un nodulo caliente en la gammagrafia no se punciona.',
      laboratorio: 'TSH. Calcitonina si hay antecedente familiar de carcinoma medular o de MEN2, o citologia compatible. NO se pide tiroglobulina como marcador diagnostico.',
      imagen: 'Ecografia cervical con TI-RADS y estudio de cadenas ganglionares. Gammagrafia solo si la TSH esta suprimida. Tomografia o resonancia solo ante bocio grande, subesternal o con sospecha de compresion.',
      complementarios: 'Puncion aspirativa guiada por ecografia con informe Bethesda cuando esta indicada. Paneles moleculares en las categorias III y IV para evitar cirugias innecesarias.',
      dx_diferencial: 'Quiste coloide simple, hemorragia intranodular, tiroiditis de Hashimoto con pseudonodulos, adenoma toxico, paratiroides aumentada, quiste del conducto tirogloso, adenopatia y, en el nodulo unico de crecimiento rapido, carcinoma.',
      tx_medico: 'La inmensa mayoria de los nodulos benignos solo requiere SEGUIMIENTO ecografico, con intervalos que dependen de la categoria TI-RADS y del tamano. Asegurar un aporte adecuado de yodo. NO se usa levotiroxina supresora para reducir el bocio: es poco eficaz y tiene coste cardiaco y oseo.',
      tx_farmacologico: 'Ninguno especifico en el nodulo benigno con funcion normal. Si aparece autonomia funcional, se trata como hipertiroidismo (ver el tema de hipertiroidismo y tiroiditis).',
      tx_intervencionista: 'Cirugia si hay sintomas compresivos, crecimiento significativo, bocio subesternal o citologia sospechosa o maligna. Alternativas percutaneas en nodulos benignos sintomaticos seleccionados: ablacion por radiofrecuencia, laser o etanol para los quisticos, que evitan la cirugia y sus complicaciones.',
      criterios_uci: 'No aplica salvo compromiso agudo de la via aerea.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir ingreso. Ante hemorragia intranodular con dolor y crecimiento brusco, observacion y analgesia; rara vez hace falta drenaje.',
      seguimiento_ambulatorio: 'Nodulo benigno por citologia: ecografia a los 12 a 24 meses y despues espaciando. Nodulo no puncionado por tamano: control segun categoria (TR5 anual, TR4 a los 1 a 2 anos, TR3 a los 2 a 3 anos). Repuncionar solo si crece de forma significativa o cambian sus caracteristicas.',
      pronostico: 'Excelente. La mayoria de los nodulos permanece estable o crece muy despacio, y una citologia benigna tiene un riesgo de falso negativo del 1 al 4%.',
      algoritmo: ['Ante todo nodulo: pedir TSH', 'TSH suprimida: gammagrafia; si es caliente, NO puncionar y tratar como hipertiroidismo', 'TSH normal o alta: ecografia con TI-RADS y valoracion ganglionar', 'Aplicar los umbrales de puncion por categoria y tamano', 'Informar la citologia con el sistema Bethesda', 'Bethesda II: seguimiento ecografico', 'Bethesda III o IV: repetir puncion, panel molecular o lobectomia', 'Bethesda V o VI: cirugia', 'Nodulos no puncionados: seguimiento ecografico segun categoria']
    },
    {
      nombre: 'Carcinoma papilar de tiroides',
      color: '#3d5a73',
      definicion: 'Carcinoma derivado del epitelio folicular con rasgos nucleares caracteristicos. Es el 85% de los canceres de tiroides, se disemina por via linfatica y tiene un pronostico excelente, con supervivencia a 10 anos superior al 95%.',
      fisiopatologia: 'Se origina por activacion constitutiva de la via MAPK, sobre todo por la mutacion <strong>BRAF V600E</strong> (presente en cerca del 60% de los casos) o por reordenamientos RET/PTC, mas frecuentes tras exposicion a radiacion. La celula tumoral conserva el cotransportador sodio-yoduro, de modo que capta yodo, y conserva el receptor de TSH, de modo que responde a la supresion de la TSH: esas dos propiedades son la base de todo su tratamiento.',
      epidemiologia: 'Incidencia multiplicada por tres en tres decadas sin aumento de la mortalidad, atribuible en su mayor parte a sobrediagnostico de microcarcinomas. Predominio femenino de 3 a 1 y pico entre los 30 y los 50 anos. Los ganglios cervicales estan afectados al diagnostico en el 30 al 50% de los casos y ello apenas modifica la supervivencia.',
      factores_riesgo: ['Radiacion cervical, sobre todo en la infancia (el factor mejor establecido)', 'Antecedente familiar de cancer de tiroides', 'Sindromes hereditarios: poliposis adenomatosa familiar, Cowden, complejo de Carney', 'Tiroiditis de Hashimoto (asociacion discutida)', 'Sexo femenino para la incidencia, masculino para el peor pronostico', 'Exposicion a yodo radiactivo ambiental (accidentes nucleares)', 'Obesidad', 'Deficit o exceso marcado de yodo'],
      clinica: 'Habitualmente un nodulo asintomatico descubierto de forma casual. Cuando da sintomas: adenopatia cervical (que puede ser la primera manifestacion), disfonia por invasion del recurrente, fijacion a planos profundos o disfagia. Las metastasis a distancia al diagnostico son raras, menos del 5%.',
      criterios_dx: 'Citologico (Bethesda V o VI) y confirmado en la pieza quirurgica por los rasgos nucleares caracteristicos: nucleos agrandados con aclaramiento en vidrio esmerilado, hendiduras nucleares y pseudoinclusiones, con o sin cuerpos de psamoma.',
      laboratorio: 'TSH y, tras la cirugia, tiroglobulina con anticuerpos antitiroglobulina para el seguimiento. Calcio y hormona paratiroidea posquirurgicos.',
      imagen: 'Ecografia cervical con mapeo ganglionar preoperatorio, imprescindible para planificar la cirugia. Tomografia o resonancia si hay sospecha de invasion. Rastreo con yodo radiactivo tras la ablacion cuando esta indicada.',
      complementarios: 'Laringoscopia preoperatoria. Estudio molecular en citologias indeterminadas. La variante folicular encapsulada no invasora se reclasifico como NIFTP y ya NO se considera carcinoma.',
      dx_diferencial: 'NIFTP, adenoma folicular, tiroiditis de Hashimoto con cambios nucleares reactivos, carcinoma folicular, metastasis de otro origen y linfoma.',
      tx_medico: 'Supresion de la TSH con levotiroxina, ajustada al riesgo: TSH por debajo de 0.1 mUI/L en el riesgo alto, de 0.1 a 0.5 en el intermedio y de 0.5 a 2.0 en el bajo con respuesta excelente. Vigilar los efectos de la supresion mantenida sobre el corazon y el hueso.',
      tx_farmacologico: 'Yodo radiactivo tras la tiroidectomia total en el riesgo alto y de forma selectiva en el intermedio; NO de forma sistematica en el riesgo bajo. En la enfermedad avanzada refractaria al yodo: inhibidores multicinasa (lenvatinib, sorafenib) y, si hay diana, terapias dirigidas (selpercatinib o pralsetinib en alteraciones de RET, larotrectinib o entrectinib en fusiones de NTRK, dabrafenib con trametinib en BRAF V600E).',
      tx_intervencionista: 'LOBECTOMIA en tumores de 1 a 4 cm sin extension extratiroidea ni ganglios, lo que evita el hipotiroidismo definitivo y reduce las complicaciones. Tiroidectomia total si el tumor mide mas de 4 cm, hay extension extratiroidea, ganglios o metastasis, o antecedente de radiacion. Diseccion ganglionar central o lateral segun afectacion demostrada, no profilactica de rutina. En microcarcinomas seleccionados, VIGILANCIA ACTIVA como alternativa a la cirugia.',
      criterios_uci: 'Solo por complicaciones quirurgicas: hematoma cervical compresivo o paralisis recurrencial bilateral.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Tras la tiroidectomia: vigilancia de hematoma cervical en las primeras horas, calcio seriado e inicio de levotiroxina. Valorar la voz antes del alta.',
      seguimiento_ambulatorio: 'Tiroglobulina con anticuerpos y ecografia cervical a los 6 a 12 meses y despues segun la respuesta al tratamiento. La estratificacion dinamica permite relajar el objetivo de TSH y espaciar controles si la respuesta es excelente.',
      pronostico: 'Excelente: supervivencia a 10 anos superior al 95%. Empeoran el pronostico la edad mayor de 55 anos, la extension extratiroidea macroscopica, las metastasis a distancia y las variantes agresivas (celulas altas, hobnail, columnar).',
      algoritmo: ['Citologia Bethesda V o VI: planificar cirugia', 'Mapeo ganglionar ecografico y laringoscopia preoperatorios', 'Menos de 1 cm sin factores de riesgo: valorar vigilancia activa', 'De 1 a 4 cm sin extension ni ganglios: lobectomia', 'Mas de 4 cm, extension, ganglios o metastasis: tiroidectomia total', 'Diseccion ganglionar solo si hay afectacion demostrada', 'Clasificar el riesgo de recurrencia de la ATA con la pieza quirurgica', 'Yodo radiactivo en riesgo alto y de forma selectiva en el intermedio', 'Fijar el objetivo de TSH segun riesgo y reclasificar por la respuesta']
    },
    {
      nombre: 'Carcinoma folicular y oncocitico (de celulas de Hurthle)',
      color: '#b4552f',
      definicion: 'Carcinomas del epitelio folicular sin los rasgos nucleares del papilar, definidos por la INVASION de la capsula o de los vasos. Se diseminan por via hematogena a hueso y pulmon, a diferencia del papilar, que lo hace por via linfatica.',
      fisiopatologia: 'Se asocian a mutaciones de la familia RAS y a la fusion PAX8-PPARG. La celula conserva parte de la capacidad de captar yodo, aunque menos que el papilar, y el <strong>oncocitico</strong> (antes llamado de celulas de Hurthle) la capta francamente mal, lo que limita el papel del yodo radiactivo y hace mas importante la cirugia completa. El diagnostico exige arquitectura, no solo citologia: por eso la puncion no puede distinguir el adenoma folicular benigno del carcinoma.',
      epidemiologia: 'El folicular supone el 10 al 15% de los canceres de tiroides y el oncocitico alrededor del 3 al 5%. Son mas frecuentes en zonas con deficit de yodo y en pacientes de mayor edad que el papilar. Las metastasis a distancia al diagnostico son mas frecuentes que en el papilar.',
      factores_riesgo: ['Deficit de yodo', 'Edad avanzada', 'Sexo femenino para la incidencia', 'Radiacion previa (menos asociado que en el papilar)', 'Bocio nodular de larga evolucion', 'Sindrome de Cowden (mutacion de PTEN)', 'Tamano tumoral mayor de 4 cm'],
      clinica: 'Nodulo solitario de crecimiento lento, con frecuencia mayor que el papilar al diagnostico. Rara vez adenopatias. Puede debutar por una METASTASIS: fractura patologica, dolor oseo o un nodulo pulmonar, y en ocasiones por una metastasis funcionante que produce tirotoxicosis.',
      criterios_dx: 'HISTOLOGICO, en la pieza quirurgica: invasion capsular o vascular. La citologia solo puede informar de neoplasia folicular (Bethesda IV), que no distingue benigno de maligno.',
      laboratorio: 'TSH. Tras la cirugia, tiroglobulina con anticuerpos antitiroglobulina. Calcio y hormona paratiroidea posquirurgicos.',
      imagen: 'Ecografia cervical. Ante sospecha de metastasis, tomografia toracica y estudio oseo. Rastreo con yodo radiactivo tras la ablacion, con la limitacion de la escasa captacion del oncocitico. Tomografia por emision de positrones si la tiroglobulina esta alta con rastreo negativo.',
      complementarios: 'Paneles moleculares en la citologia indeterminada, sobre todo por su valor predictivo negativo, que permite evitar lobectomias diagnosticas.',
      dx_diferencial: 'Adenoma folicular (la distincion clave y solo posible con la pieza), NIFTP, variante folicular del papilar, carcinoma poco diferenciado y metastasis tiroidea de un carcinoma renal de celulas claras.',
      tx_medico: 'Supresion de la TSH con levotiroxina segun riesgo, igual que en el papilar.',
      tx_farmacologico: 'Yodo radiactivo, mas frecuentemente indicado que en el papilar por la mayor tendencia a la diseminacion hematogena, pero de eficacia limitada en el oncocitico. En enfermedad avanzada refractaria: lenvatinib o sorafenib, y terapias dirigidas si hay diana molecular.',
      tx_intervencionista: 'Lobectomia diagnostica cuando la citologia es de neoplasia folicular; si la histologia confirma carcinoma con criterios de riesgo, se completa la tiroidectomia. En el oncocitico se tiende a la tiroidectomia total mas a menudo, porque el yodo radiactivo no sirve de rescate. Metastasectomia o radioterapia externa en metastasis oseas sintomaticas.',
      criterios_uci: 'Solo por complicaciones quirurgicas.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Igual que en el papilar: hematoma cervical, calcio seriado y valoracion de la voz.',
      seguimiento_ambulatorio: 'Tiroglobulina, ecografia cervical y, dada la diseminacion hematogena, mayor atencion a la imagen toracica y osea que en el papilar.',
      pronostico: 'Peor que el papilar pero aun bueno en las formas minimamente invasoras: supervivencia a 10 anos del 70 al 85%, y claramente peor en el oncocitico y en las formas con invasion vascular extensa.',
      algoritmo: ['Citologia Bethesda IV: panel molecular o lobectomia diagnostica', 'La citologia NO puede diagnosticar carcinoma folicular', 'Histologia: buscar invasion capsular o vascular', 'Invasion minima sin factores de riesgo: puede bastar la lobectomia', 'Invasion vascular extensa o tumor grande: completar tiroidectomia', 'Oncocitico: mayor tendencia a tiroidectomia total por la mala captacion de yodo', 'Buscar metastasis hematogenas en hueso y pulmon', 'Yodo radiactivo segun riesgo, sabiendo su limitacion en el oncocitico', 'Seguimiento con tiroglobulina e imagen toracica y osea']
    },
    {
      nombre: 'Carcinoma medular de tiroides y MEN2',
      color: '#3f6b52',
      definicion: 'Carcinoma derivado de las celulas C parafoliculares, que producen calcitonina. NO deriva del epitelio folicular, de modo que no capta yodo, no responde a la supresion de TSH y no se sigue con tiroglobulina: es un tumor neuroendocrino que casualmente vive en el tiroides.',
      fisiopatologia: 'Se debe a mutaciones activadoras del protooncogen <strong>RET</strong>, somaticas en las formas esporadicas y germinales en las hereditarias. Las formas hereditarias se integran en el <strong>MEN2A</strong> (medular, feocromocitoma e hiperparatiroidismo), el <strong>MEN2B</strong> (medular, feocromocitoma, neuromas mucosos, ganglioneuromatosis intestinal y habito marfanoide, sin hiperparatiroidismo y de comportamiento mucho mas agresivo) y el medular familiar aislado. La secrecion de calcitonina y de peptidos relacionados explica la diarrea y la rubefaccion de las formas avanzadas.',
      epidemiologia: 'Del 1 al 5% de los canceres de tiroides. Alrededor del 75% es esporadico y el 25% hereditario, pero hasta una cuarta parte de los aparentemente esporadicos tiene una mutacion germinal, lo que obliga a estudiar RET en TODOS los casos. La supervivencia a 10 anos oscila entre el 40 y el 80% segun el estadio.',
      factores_riesgo: ['Mutacion germinal de RET (MEN2A, MEN2B, medular familiar)', 'Antecedente familiar de carcinoma medular o de feocromocitoma', 'Antecedente familiar de hiperparatiroidismo primario', 'Habito marfanoide con neuromas mucosos (sugiere MEN2B)', 'Diagnostico en edad joven', 'Enfermedad de Hirschsprung en la familia (variantes de RET)'],
      clinica: 'Nodulo tiroideo con adenopatias cervicales, que estan presentes al diagnostico en mas de la mitad de los casos. En enfermedad avanzada: DIARREA cronica secretora y rubefaccion, por los peptidos secretados. En el MEN2B, aspecto marfanoide con neuromas en lengua y labios y ganglioneuromatosis intestinal, reconocibles desde la infancia.',
      criterios_dx: 'Calcitonina elevada (valores muy altos son practicamente diagnosticos), citologia compatible con confirmacion inmunohistoquimica (calcitonina y antigeno carcinoembrionario positivos, tiroglobulina negativa) y estudio genetico de RET en todos los casos.',
      laboratorio: 'Calcitonina y antigeno carcinoembrionario basales y para el seguimiento. Estudio de RET. ANTES de operar hay que descartar FEOCROMOCITOMA con metanefrinas en plasma u orina, y medir calcio y hormona paratiroidea para descartar hiperparatiroidismo.',
      imagen: 'Ecografia cervical con mapeo ganglionar. Ante calcitonina muy elevada, tomografia cervicotoracica y abdominal y resonancia hepatica, porque las metastasis hepaticas pueden ser miliares y pasar desapercibidas.',
      complementarios: 'Consejo genetico y cribado familiar obligados si RET es positivo. En portadores, tiroidectomia profilactica cuya edad depende del riesgo de la variante concreta.',
      dx_diferencial: 'Carcinoma papilar y folicular, tumor neuroendocrino metastasico, paraganglioma, linfoma tiroideo y elevaciones de calcitonina no tumorales (insuficiencia renal, inhibidores de la bomba de protones, hiperparatiroidismo, tabaquismo, hiperplasia de celulas C).',
      tx_medico: 'La levotiroxina se da como SUSTITUCION, no como supresion: el tumor no expresa receptor de TSH y suprimirla no aporta nada y si conlleva riesgo. Tratamiento sintomatico de la diarrea secretora.',
      tx_farmacologico: 'El yodo radiactivo NO tiene ningun papel. En enfermedad progresiva o metastasica: inhibidores selectivos de RET (selpercatinib, pralsetinib), que han desplazado a los multicinasa clasicos (vandetanib, cabozantinib) por mejor eficacia y tolerancia. En formas con RET no alterado, valorar cabozantinib.',
      tx_intervencionista: 'TIROIDECTOMIA TOTAL con diseccion del compartimento central, y lateral segun afectacion, en todos los casos: no cabe la lobectomia. Antes de la cirugia hay que descartar y, si existe, operar PRIMERO el feocromocitoma. Tiroidectomia profilactica en portadores de mutacion de RET, a una edad que depende del riesgo de la variante.',
      criterios_uci: 'Crisis hipertensiva por feocromocitoma no diagnosticado durante la cirugia, que es precisamente lo que se evita cribando antes.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de hipoparatiroidismo y de lesion recurrencial, como en toda tiroidectomia total, con la particularidad de que la diseccion ganglionar amplia aumenta el riesgo de ambas.',
      seguimiento_ambulatorio: 'Calcitonina y antigeno carcinoembrionario seriados: su TIEMPO DE DUPLICACION es el mejor predictor de progresion y de supervivencia. Ecografia cervical. Cribado periodico de feocromocitoma e hiperparatiroidismo en los portadores de mutacion.',
      pronostico: 'Depende del estadio y de la normalizacion de la calcitonina tras la cirugia. Supervivencia a 10 anos del 40 al 80%. El MEN2B tiene el peor pronostico y aparece a edades mas tempranas.',
      algoritmo: ['Calcitonina elevada o citologia compatible: sospechar medular', 'Estudiar RET en TODOS los casos, haya o no antecedente familiar', 'Descartar feocromocitoma con metanefrinas ANTES de operar', 'Medir calcio y hormona paratiroidea para descartar hiperparatiroidismo', 'Si hay feocromocitoma, operarlo primero', 'Tiroidectomia total con diseccion central, y lateral segun afectacion', 'Levotiroxina como sustitucion, no como supresion', 'No usar yodo radiactivo: no capta', 'Seguimiento con calcitonina y antigeno carcinoembrionario y su tiempo de duplicacion', 'Consejo genetico y cribado familiar si RET es positivo']
    },
    {
      nombre: 'Carcinoma anaplasico y linfoma tiroideo',
      color: '#8c3a34',
      definicion: 'Las dos formas de masa tiroidea de crecimiento rapido. El carcinoma anaplasico es una de las neoplasias mas agresivas de la medicina, con supervivencia mediana de 4 a 6 meses; el linfoma tiroideo, en cambio, tiene un aspecto igual de alarmante pero es potencialmente curable, y por eso distinguirlos es urgente.',
      fisiopatologia: 'El anaplasico surge con frecuencia por desdiferenciacion de un carcinoma diferenciado preexistente, con acumulacion de alteraciones de TP53, TERT y de la via PI3K sobre una base de BRAF o RAS. Pierde por completo la diferenciacion: no capta yodo, no produce tiroglobulina y no responde a la TSH. El linfoma tiroideo es casi siempre un linfoma B difuso de celulas grandes o un MALT que asienta sobre una tiroiditis de Hashimoto de larga evolucion, que aporta el sustrato linfoide.',
      epidemiologia: 'El anaplasico supone del 1 al 2% de los canceres de tiroides pero una proporcion desproporcionada de sus muertes; aparece por encima de los 60 anos. El linfoma tiroideo es del 1 al 5%, con predominio femenino y edad avanzada, y casi siempre sobre Hashimoto.',
      factores_riesgo: ['Edad avanzada (ambos)', 'Bocio de larga evolucion y carcinoma diferenciado previo (anaplasico)', 'Zonas con deficit de yodo (anaplasico)', 'Tiroiditis de Hashimoto de larga evolucion (linfoma, riesgo multiplicado por 60 a 80)', 'Radiacion previa', 'Inmunosupresion (linfoma)'],
      clinica: 'Masa cervical de crecimiento RAPIDO, en semanas, dura, fija y a menudo dolorosa, con disfonia, disfagia, estridor y sindrome de vena cava superior. En el anaplasico hay con frecuencia metastasis pulmonares al diagnostico. El linfoma puede acompanarse de sintomas B (fiebre, sudoracion nocturna, perdida de peso) y crece igual de rapido.',
      criterios_dx: 'BIOPSIA URGENTE, con aguja gruesa o quirurgica: la puncion con aguja fina suele ser insuficiente para ambos. La inmunohistoquimica los separa y determina el tratamiento, que es radicalmente distinto. En el anaplasico se determinan BRAF V600E y otras dianas de inmediato, porque cambian el tratamiento en dias.',
      laboratorio: 'Hemograma, bioquimica, lactato deshidrogenasa (util en el linfoma) y perfil tiroideo. Anticuerpos antitiroperoxidasa, con frecuencia positivos en el linfoma por la Hashimoto subyacente.',
      imagen: 'Tomografia cervicotoracica urgente para valorar la via aerea y la extension. Tomografia por emision de positrones para estadificar en ambos.',
      complementarios: 'Valoracion urgente de la VIA AEREA por otorrinolaringologia. En el anaplasico, discusion precoz de objetivos de tratamiento y de cuidados paliativos, que forma parte del manejo desde el primer dia.',
      dx_diferencial: 'Entre ellos dos (la distincion mas importante y urgente), carcinoma diferenciado con transformacion, sarcoma, metastasis tiroideas, tiroiditis de Riedel y tiroiditis supurativa aguda.',
      tx_medico: 'Anaplasico: valoracion de la via aerea, control de sintomas y decision compartida sobre la intensidad del tratamiento. Linfoma: no requiere cirugia y el tratamiento es oncohematologico.',
      tx_farmacologico: 'ANAPLASICO: si hay BRAF V600E, dabrafenib con trametinib, que ha cambiado el pronostico de ese subgrupo y puede permitir una cirugia posterior; inmunoterapia y terapias dirigidas segun el perfil molecular. LINFOMA: quimioterapia tipo R-CHOP con o sin radioterapia, con tasas de curacion altas en estadios localizados.',
      tx_intervencionista: 'Anaplasico: cirugia solo si la reseccion completa es factible, algo infrecuente al diagnostico; radioterapia externa con o sin quimioterapia. Traqueostomia solo tras valorar el pronostico global y los deseos del paciente. Linfoma: la cirugia NO es el tratamiento, salvo biopsia diagnostica.',
      criterios_uci: 'Compromiso agudo de la via aerea. La decision de intubar o traqueostomizar en el anaplasico debe tomarse con el pronostico y los deseos del paciente sobre la mesa.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Monitorizacion de la via aerea. Coordinacion urgente entre endocrinologia, otorrinolaringologia, oncologia, hematologia y cuidados paliativos.',
      seguimiento_ambulatorio: 'En el linfoma, seguimiento oncohematologico habitual y vigilancia del hipotiroidismo por la Hashimoto de base. En el anaplasico, seguimiento estrecho con enfoque paliativo salvo respuesta a terapia dirigida.',
      pronostico: 'Anaplasico: supervivencia mediana de 4 a 6 meses; se considera estadio IV por definicion en cualquier extension. Linfoma: potencialmente curable, con supervivencia superior al 80% en estadios localizados.',
      algoritmo: ['Masa cervical de crecimiento rapido con disfonia: urgencia diagnostica', 'Biopsia con aguja gruesa o quirurgica, NO solo puncion fina', 'Valoracion urgente de la via aerea', 'Tomografia cervicotoracica y estadificacion', 'Inmunohistoquimica para separar anaplasico de linfoma', 'Anaplasico: determinar BRAF V600E de inmediato', 'BRAF positivo: dabrafenib con trametinib', 'Linfoma: quimioterapia con o sin radioterapia, sin cirugia', 'Discutir objetivos de tratamiento desde el primer dia en el anaplasico']
    },
    {
      nombre: 'Complicaciones compresivas del bocio y bocio subesternal',
      color: '#8a6a1f',
      definicion: 'Consecuencias mecanicas del crecimiento tiroideo sobre traquea, esofago, nervios y vasos del operculo toracico. Aparecen sobre todo en bocios de larga evolucion y con extension retroesternal, donde el espacio es inextensible.',
      fisiopatologia: 'En el cuello, la glandula crece hacia fuera y tarda mucho en comprimir. Cuando la extension es retroesternal, en cambio, el crecimiento ocurre dentro de un anillo osteomuscular rigido: la traquea se desplaza y se estrecha, el esofago se comprime y las venas del operculo se obstruyen. Un episodio de hemorragia intranodular puede descompensar de forma brusca un bocio previamente tolerado.',
      epidemiologia: 'El bocio subesternal supone del 5 al 15% de los bocios operados. Los sintomas compresivos verdaderos son mucho menos frecuentes de lo que sugieren las quejas cervicales inespecificas, y no siempre se correlacionan con el tamano.',
      factores_riesgo: ['Bocio multinodular de larga evolucion', 'Extension retroesternal', 'Edad avanzada', 'Sexo femenino', 'Deficit de yodo', 'Hemorragia intranodular previa', 'Cuello corto y operculo estrecho', 'Cirugia tiroidea previa con recidiva'],
      clinica: 'Disnea, sobre todo de decubito, tos seca, estridor, disfagia a solidos, sensacion de ahogo al levantar los brazos y disfonia. El SIGNO DE PEMBERTON es caracteristico: al elevar ambos brazos sobre la cabeza durante un minuto aparecen congestion facial, cianosis e ingurgitacion yugular, por obstruccion del operculo toracico.',
      criterios_dx: 'Clinico con confirmacion por imagen. La tomografia cervicotoracica define la extension retroesternal, el grado de estenosis traqueal y su desplazamiento. Las pruebas de funcion respiratoria con curva flujo-volumen muestran un patron de obstruccion extratoracica variable o fija.',
      laboratorio: 'TSH para descartar autonomia funcional. Gasometria si hay disnea significativa.',
      imagen: 'TOMOGRAFIA cervicotoracica, que es la prueba clave. Resonancia si se quiere evitar el contraste yodado. Radiografia de torax como aproximacion inicial: desviacion traqueal y ensanchamiento mediastinico superior.',
      complementarios: 'Espirometria con curva flujo-volumen. Laringoscopia para valorar la movilidad de las cuerdas antes de operar. Esofagograma si predomina la disfagia.',
      dx_diferencial: 'Masa mediastinica de otro origen (timoma, linfoma, teratoma), aneurisma de aorta, tumor esofagico, enfermedad pulmonar obstructiva (que explica mejor la disnea en muchos pacientes) y disfuncion de cuerdas vocales.',
      tx_medico: 'No hay tratamiento medico eficaz. La levotiroxina supresora NO reduce el bocio de forma significativa y se ha abandonado. Si el paciente no es candidato a cirugia, se optimiza el tratamiento respiratorio de base.',
      tx_farmacologico: 'Ninguno especifico. Corticoides en pauta corta solo como medida puente ante edema agudo o inflamacion asociada.',
      tx_intervencionista: 'CIRUGIA, que es el tratamiento de eleccion: tiroidectomia total, casi siempre por via cervical incluso en el bocio subesternal, y solo excepcionalmente con esternotomia. El YODO RADIACTIVO es una alternativa en el paciente no candidato a cirugia: reduce el volumen un 30 al 50% en 12 a 18 meses, con el aviso de un posible edema transitorio inicial que puede empeorar la compresion.',
      criterios_uci: 'Compromiso agudo de la via aerea por hemorragia intranodular o por edema tras un procedimiento.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Tras la cirugia de un bocio grande, vigilar traqueomalacia, que es rara pero puede requerir reintubacion. Vigilancia estandar de hematoma cervical y de hipocalcemia.',
      seguimiento_ambulatorio: 'Sustitucion con levotiroxina tras la tiroidectomia total y control de calcio. Si se opto por yodo radiactivo, control de volumen y de funcion tiroidea, porque el hipotiroidismo posterior es frecuente.',
      pronostico: 'Excelente tras la cirugia, con resolucion de los sintomas compresivos en la mayoria. La recidiva tras tiroidectomia total es rara.',
      algoritmo: ['Sintomas compresivos o bocio grande: tomografia cervicotoracica', 'Buscar el signo de Pemberton en la exploracion', 'Espirometria con curva flujo-volumen', 'Laringoscopia preoperatoria', 'Valorar si los sintomas se explican de verdad por el bocio', 'Cirugia como tratamiento de eleccion si hay compresion demostrada', 'Casi siempre abordaje cervical, rara vez esternotomia', 'Yodo radiactivo si no es candidato a cirugia, avisando del edema inicial', 'Sustitucion hormonal y control de calcio tras la cirugia']
    },
    {
      nombre: 'Complicaciones de la tiroidectomia',
      color: '#7a1f3d',
      definicion: 'Efectos adversos de la cirugia tiroidea, dominados por el hipoparatiroidismo y la lesion del nervio laringeo recurrente. Su frecuencia depende sobre todo de la experiencia del cirujano y de la extension de la reseccion, y son la razon principal para no operar de mas.',
      fisiopatologia: 'Las paratiroides dependen casi por completo de la arteria tiroidea inferior: su desvascularizacion o su extirpacion inadvertida producen hipoparatiroidismo con hipocalcemia. El nervio laringeo recurrente asciende pegado a esa misma arteria y al ligamento de Berry, donde es mas vulnerable. La rama externa del laringeo superior discurre junto a la arteria tiroidea superior y su lesion pasa desapercibida salvo en profesionales de la voz. El hematoma cervical, aunque raro, es la complicacion mas temida por su rapidez. Ver la Figura 1 de Definicion.',
      epidemiologia: 'Hipoparatiroidismo transitorio en el 20 al 30% de las tiroidectomias totales y permanente en el 1 al 3%. Lesion recurrencial transitoria en el 3 al 5% y permanente en el 1 al 2%. Hematoma cervical con necesidad de reintervencion en el 0.3 al 1%. Todas las cifras empeoran de forma marcada con cirujanos de bajo volumen.',
      factores_riesgo: ['Cirujano de bajo volumen anual (el factor mas importante)', 'Tiroidectomia total frente a lobectomia', 'Diseccion ganglionar central', 'Reintervencion sobre un lecho ya operado', 'Bocio grande, subesternal o con tiroiditis', 'Enfermedad de Graves por la hipervascularizacion', 'Cancer con invasion local', 'Deficit de vitamina D preoperatorio no corregido'],
      clinica: 'HIPOCALCEMIA: parestesias peribucales y en los dedos, calambres, signos de Chvostek y de Trousseau, y en casos graves tetania, laringoespasmo, convulsiones y QT largo. LESION RECURRENCIAL unilateral: disfonia con voz debil y aspiracion con liquidos; BILATERAL: estridor y obstruccion de la via aerea que puede exigir traqueostomia. HEMATOMA CERVICAL: tumefaccion cervical rapida con dificultad respiratoria, que es una urgencia de minutos.',
      criterios_dx: 'Calcio corregido por albumina o calcio ionico y hormona paratiroidea posquirurgicos. Laringoscopia para documentar la movilidad de las cuerdas. El hematoma compresivo es un diagnostico clinico que no espera pruebas.',
      laboratorio: 'Calcio, albumina, magnesio, fosforo y hormona paratiroidea. Una hormona paratiroidea baja medida en las primeras horas tras la cirugia predice la hipocalcemia sintomatica y permite iniciar el suplemento antes de que aparezcan sintomas.',
      imagen: 'No indicada para el hematoma, que se maneja de forma clinica. Laringoscopia para la voz.',
      complementarios: 'Electrocardiograma si la hipocalcemia es grave (QT largo). Valoracion foniatrica en la disfonia persistente.',
      dx_diferencial: 'Hipocalcemia por hipomagnesemia (frecuente y que hace la hipocalcemia refractaria si no se corrige), sindrome de hueso hambriento tras cirugia de hiperparatiroidismo concomitante, disfonia por intubacion o por edema laringeo, y seroma frente a hematoma.',
      tx_medico: 'Vigilancia del cuello en las primeras horas. Corregir el deficit de vitamina D ANTES de la cirugia, que reduce la hipocalcemia posoperatoria. Valoracion de la voz antes del alta.',
      tx_farmacologico: 'Hipocalcemia: calcio oral con calcitriol, y calcio intravenoso si hay sintomas graves o tetania. CORREGIR SIEMPRE EL MAGNESIO, porque su deficit hace la hipocalcemia refractaria. En el hipoparatiroidismo permanente, calcio y calcitriol de por vida, con hormona paratiroidea recombinante en casos seleccionados de mal control.',
      tx_intervencionista: 'HEMATOMA CERVICAL COMPRESIVO: apertura INMEDIATA de la herida a pie de cama, sin esperar a quirofano ni a pruebas de imagen; es una urgencia de minutos. Paralisis recurrencial bilateral: intubacion o traqueostomia. En la disfonia persistente, procedimientos de medializacion de la cuerda.',
      criterios_uci: 'Hematoma compresivo, paralisis recurrencial bilateral, tetania grave con laringoespasmo o convulsiones.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Calcio seriado en las primeras 24 a 48 horas y hormona paratiroidea precoz. Observacion del cuello. Valoracion de la voz. Inicio de levotiroxina tras tiroidectomia total.',
      seguimiento_ambulatorio: 'Ajuste de calcio y calcitriol con controles hasta la estabilizacion. Laringoscopia de control en la disfonia persistente: la mayoria de las lesiones transitorias se recupera en 6 meses. Si a los 6 a 12 meses persiste el hipoparatiroidismo, se considera permanente.',
      pronostico: 'La mayoria de las complicaciones son transitorias. Las permanentes son poco frecuentes en manos expertas, y su prevencion es el argumento principal para desescalar la cirugia en el cancer de bajo riesgo.',
      algoritmo: ['Corregir el deficit de vitamina D antes de operar', 'Laringoscopia preoperatoria para documentar la voz', 'Vigilar el cuello en las primeras horas del posoperatorio', 'Hematoma compresivo: abrir la herida de inmediato a pie de cama', 'Medir hormona paratiroidea precoz y calcio seriado', 'Hipocalcemia: calcio oral con calcitriol; intravenoso si es grave', 'Corregir siempre el magnesio en la hipocalcemia refractaria', 'Valorar la voz antes del alta y hacer laringoscopia si hay disfonia', 'Reevaluar a los 6 a 12 meses antes de etiquetar de permanente']
    },
    {
      nombre: 'Recurrencia y seguimiento del carcinoma diferenciado',
      color: '#6b4a2e',
      definicion: 'Vigilancia despues del tratamiento inicial y manejo de la enfermedad persistente o recurrente. Es donde vive la mayor parte de la practica clinica del cancer de tiroides, porque el tumor recidiva mucho mas de lo que mata.',
      fisiopatologia: 'La celula del carcinoma diferenciado conserva dos propiedades que sostienen todo el seguimiento: produce <strong>tiroglobulina</strong>, que sirve de marcador cuando ya no queda tiroides normal, y expresa el cotransportador sodio-yoduro, que permite detectarla y tratarla con yodo radiactivo. La perdida progresiva de esta segunda propiedad define la enfermedad <strong>refractaria al yodo</strong>, que tiene peor pronostico y obliga a cambiar de estrategia.',
      epidemiologia: 'La recurrencia estructural aparece en el 5% del riesgo bajo, el 20% del intermedio y mas del 40% del alto. La mayoria son ganglionares cervicales y muchas se manejan con vigilancia o cirugia dirigida, sin repercusion sobre la supervivencia.',
      factores_riesgo: ['Riesgo alto o intermedio de la ATA al diagnostico', 'Extension extratiroidea y reseccion incompleta', 'Numero, tamano y extension extracapsular de los ganglios afectados', 'Invasion vascular extensa', 'Histologia agresiva y desdiferenciacion', 'Tiroglobulina posquirurgica elevada', 'Metastasis a distancia', 'Enfermedad refractaria al yodo radiactivo'],
      clinica: 'Habitualmente asintomatica y detectada por elevacion de la tiroglobulina o por ecografia. Cuando da sintomas: adenopatia cervical palpable, disfonia por invasion del recurrente, o sintomas de metastasis pulmonar u osea.',
      criterios_dx: 'Ecografia cervical con puncion de los ganglios sospechosos, midiendo TIROGLOBULINA EN EL LAVADO DE LA AGUJA, que es mas sensible que la citologia sola. Tiroglobulina serica creciente. Imagen funcional si la tiroglobulina es alta con ecografia normal.',
      laboratorio: 'Tiroglobulina SIEMPRE con anticuerpos antitiroglobulina en la misma muestra: si los anticuerpos son positivos, la tiroglobulina se falsea a la baja y no es interpretable, y se usa la tendencia del titulo de anticuerpos como marcador indirecto. TSH para comprobar el grado de supresion.',
      imagen: 'Ecografia cervical, que es la prueba mas rentable. Rastreo con yodo radiactivo con estimulacion adecuada de la TSH. Tomografia por emision de positrones si la tiroglobulina es alta con rastreo negativo, situacion que sugiere desdiferenciacion.',
      complementarios: 'Reclasificacion segun la RESPUESTA AL TRATAMIENTO (excelente, bioquimica incompleta, estructural incompleta o indeterminada), que ha desplazado en gran medida al riesgo inicial para guiar la intensidad del seguimiento y el objetivo de TSH.',
      dx_diferencial: 'Resto tiroideo residual benigno, ganglios reactivos, granuloma de sutura, tejido tiroideo ectopico, elevacion de tiroglobulina por TSH alta sin enfermedad, e interferencia analitica por anticuerpos.',
      tx_medico: 'Ajuste del objetivo de TSH segun riesgo y respuesta: por debajo de 0.1 mUI/L en la enfermedad estructural persistente, de 0.1 a 0.5 en la bioquimica incompleta o la respuesta indeterminada, y de 0.5 a 2.0 en la respuesta excelente. Vigilar el coste cardiaco y oseo de la supresion mantenida.',
      tx_farmacologico: 'Yodo radiactivo en la enfermedad captante. En la enfermedad progresiva y refractaria al yodo: lenvatinib o sorafenib como inhibidores multicinasa, y terapias dirigidas si hay diana molecular (selpercatinib o pralsetinib en RET, larotrectinib o entrectinib en fusiones de NTRK, dabrafenib con trametinib en BRAF V600E). No toda enfermedad metastasica requiere tratamiento inmediato: la estable y asintomatica se puede vigilar.',
      tx_intervencionista: 'Cirugia de rescate en la recurrencia cervical resecable, que es el tratamiento de eleccion. Ablacion percutanea o radioterapia estereotactica en lesiones seleccionadas. Radioterapia externa en enfermedad local irresecable y en metastasis oseas sintomaticas.',
      criterios_uci: 'Excepcional: compromiso de via aerea por recurrencia local avanzada.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Solo en el contexto de una cirugia de rescate o de complicaciones de la enfermedad avanzada.',
      seguimiento_ambulatorio: 'Tiroglobulina con anticuerpos y ecografia cervical a los 6 a 12 meses del tratamiento inicial, y despues con intervalos que dependen de la respuesta: anual o mas espaciado en la respuesta excelente, mas estrecho en las demas.',
      pronostico: 'La mayoria de las recurrencias son cervicales y no comprometen la supervivencia. El pronostico empeora de forma clara en la enfermedad refractaria al yodo y en la que capta glucosa de forma intensa en la tomografia por emision de positrones.',
      algoritmo: ['Clasificar el riesgo de recurrencia de la ATA con la pieza quirurgica', 'Fijar el objetivo de TSH segun ese riesgo', 'Tiroglobulina con anticuerpos y ecografia a los 6 a 12 meses', 'Si los anticuerpos son positivos, la tiroglobulina no es interpretable', 'Reclasificar segun la respuesta al tratamiento', 'Respuesta excelente: relajar el objetivo de TSH y espaciar controles', 'Ganglio sospechoso: puncion con tiroglobulina en el lavado de la aguja', 'Tiroglobulina alta con rastreo negativo: tomografia por emision de positrones', 'Recurrencia cervical resecable: cirugia de rescate', 'Enfermedad refractaria y progresiva: inhibidores multicinasa o terapia dirigida']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El nodulo tiroideo es una enfermedad ambulatoria: al hospital llegan sus extremos. Por un lado, las complicaciones de la cirugia, que se juegan en las primeras 24 horas. Por otro, las dos urgencias oncologicas del tema: la masa de crecimiento rapido con compromiso de via aerea y el bocio que descompensa. Las tres se manejan mejor si se recuerda que el reloj es distinto en cada una.',
    parametros: ['Ante masa cervical de crecimiento rapido con disfonia: biopsia con aguja gruesa y valoracion urgente de la via aerea, sin demora', 'Distinguir anaplasico de linfoma es urgente, porque el tratamiento es radicalmente distinto', 'En el anaplasico, determinar BRAF V600E de inmediato: cambia el tratamiento en dias', 'Tras tiroidectomia, vigilar el cuello en las primeras horas: el hematoma compresivo es una urgencia de minutos', 'Hematoma compresivo: abrir la herida a pie de cama, sin esperar a quirofano ni a imagen', 'Medir hormona paratiroidea precoz y calcio seriado tras la tiroidectomia total', 'Corregir el magnesio siempre en la hipocalcemia refractaria', 'Valorar la voz antes del alta y hacer laringoscopia ante disfonia', 'Antes de operar un carcinoma medular, descartar feocromocitoma con metanefrinas', 'Evitar contraste yodado si esta previsto yodo radiactivo a corto plazo'],
    criterios_uci_general: 'Compromiso agudo de la via aerea (anaplasico, linfoma, hematoma cervical, paralisis recurrencial bilateral, bocio con hemorragia intranodular), tetania grave con laringoespasmo, y crisis hipertensiva por feocromocitoma no diagnosticado durante una cirugia por carcinoma medular.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa. Interesa como cribado del receptor y del donante ante un nodulo tiroideo detectado durante el estudio pretrasplante.',
    prevencion: 'Primaria: yodacion adecuada de la sal, que reduce el bocio nodular y desplaza el patron histologico del cancer hacia formas mas favorables, y evitar la radiacion cervical innecesaria en la infancia. Secundaria: cribado genetico de RET en familiares de todo carcinoma medular, con tiroidectomia profilactica en portadores; y NO cribado poblacional con ecografia tiroidea, que es la causa principal del sobrediagnostico. Terciaria: desescalar la cirugia y el yodo radiactivo en el riesgo bajo, y evitar la supresion excesiva de TSH mantenida por su coste cardiaco y oseo.'
  }
};

export const compCites = {
  'Nodulo tiroideo y bocio multinodular no toxico': [1, 2, 5, 16],
  'Carcinoma papilar de tiroides': [1, 8, 11, 17],
  'Carcinoma folicular y oncocitico (de celulas de Hurthle)': [1, 19],
  'Carcinoma medular de tiroides y MEN2': [6, 14],
  'Carcinoma anaplasico y linfoma tiroideo': [7, 15],
  'Complicaciones compresivas del bocio y bocio subesternal': [16, 18],
  'Complicaciones de la tiroidectomia': [1, 18],
  'Recurrencia y seguimiento del carcinoma diferenciado': [1, 9, 13]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'TI-RADS del American College of Radiology (calculadora disponible)': [2],
  'Sistema Bethesda para la citologia tiroidea': [3, 4],
  'Estadificacion TNM del carcinoma diferenciado': [1, 19],
  'Riesgo de recurrencia de la ATA (calculadora disponible)': [1, 9],
  'Respuesta al tratamiento (estratificacion dinamica)': [1]
};
export const escalaCalc = {
  'TI-RADS del American College of Radiology (calculadora disponible)': 'ti-rads',
  'Riesgo de recurrencia de la ATA (calculadora disponible)': 'riesgo-recurrencia-ata',
  'Respuesta al tratamiento (estratificacion dinamica)': 'riesgo-recurrencia-ata'
};
export const compGroups = [
  { name: 'Nodulo y tipos de cancer', items: ['Nodulo tiroideo y bocio multinodular no toxico', 'Carcinoma papilar de tiroides', 'Carcinoma folicular y oncocitico (de celulas de Hurthle)', 'Carcinoma medular de tiroides y MEN2', 'Carcinoma anaplasico y linfoma tiroideo'] },
  { name: 'Complicaciones y seguimiento', items: ['Complicaciones compresivas del bocio y bocio subesternal', 'Complicaciones de la tiroidectomia', 'Recurrencia y seguimiento del carcinoma diferenciado'] }
];
export const complicacionesIntro = 'Las cinco primeras fichas van de lo mas frecuente a lo mas grave: el nodulo y el bocio no toxico, que son casi todo lo que se ve y donde mas dano hace intervenir de mas; los tres canceres del epitelio folicular; el medular, que no viene del epitelio folicular y por eso no capta yodo, no responde a la TSH y obliga a estudiar el gen RET; y el anaplasico junto al linfoma, las dos masas de crecimiento rapido cuya distincion es urgente porque una es de las neoplasias mas letales y la otra es curable. Las tres ultimas son las complicaciones: las compresivas del bocio, las de la cirugia (que son el argumento principal para no operar de mas) y la recurrencia, que es donde vive la mayor parte de la practica clinica.';
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
  root: { title: 'NODULO TIROIDEO', color: '#5b4a86', target: 'definicion' },
  branches: [
    { title: 'Como se estudia', sub: 'TSH, ecografia y puncion', color: '#3d5a73', target: 'diagnostico', leaves: [
      { title: 'TSH suprimida', sub: 'Gammagrafia: caliente no se punciona', color: '#b4552f', target: 'diagnostico' },
      { title: 'TI-RADS y tamano', sub: 'TR5 desde 1 cm, TR4 desde 1.5', color: '#5b4a86', target: 'clasificacion' },
      { title: 'Bethesda', sub: 'Seis categorias, seis conductas', color: '#3f6b52', target: 'clasificacion' },
      { title: 'Bethesda IV', sub: 'La citologia no distingue folicular', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'Los cinco canceres', sub: 'Se parecen muy poco entre si', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Papilar', sub: '85%, linfatico, capta yodo', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Folicular y oncocitico', sub: 'Hematogeno a hueso y pulmon', color: '#b4552f', target: 'complicaciones' },
      { title: 'Medular', sub: 'Celulas C, calcitonina, gen RET', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Anaplasico y linfoma', sub: 'Masa de crecimiento rapido', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'Menos es mas', sub: 'La desescalada de la ultima decada', color: '#6b4a2e', target: 'definicion', leaves: [
      { title: 'Umbrales de puncion altos', sub: 'No puncionar todo lo que se ve', color: '#5b4a86', target: 'clasificacion' },
      { title: 'Lobectomia', sub: 'De 1 a 4 cm sin extension', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Yodo radiactivo selectivo', sub: 'No sistematico en riesgo bajo', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Vigilancia activa', sub: 'Microcarcinoma seleccionado', color: '#3f6b52', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 6], no_invasivos: [2, 3, 1], imagen: [1, 19] };
export const clasificacionCite = [2, 3, 1];
export const seguimientoCite = [1, 7];
