// topics/metabolismo-oseo-mineral/content.js: Trastornos del Metabolismo Oseo y Mineral.
// Cubre la parte de "trastornos del metabolismo oseo y mineral" del item "Nodulo tiroideo y
// trastornos del metabolismo oseo y mineral" del cluster Tiroides y PARATIROIDES (bloque VII,
// Endocrinologia y Metabolismo). Ultimo de los cinco temas del eje tiroideo, y el que cierra el
// cluster: el temario junta el nodulo con el metabolismo mineral en un solo item, pero son
// enfermedades distintas y aqui se separan. La osteoporosis tiene tema propio (`osteoporosis`),
// porque es una enfermedad del hueso con calcemia normal.
//
// Fuentes principales: quinto taller internacional sobre hiperparatiroidismo primario; segundo
// taller internacional sobre hipoparatiroidismo; consenso europeo de la ESE sobre trastornos
// paratiroideos; guia KDIGO sobre el trastorno mineral y oseo de la enfermedad renal cronica;
// guias de la Endocrine Society y del Reino Unido para la enfermedad de Paget; y el consenso
// global sobre raquitismo nutricional.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 6 formas (hiperparatiroidismo primario, hipercalcemia de la malignidad,
// hipoparatiroidismo, hiperparatiroidismo secundario y terciario, osteomalacia, enfermedad de
// Paget) + 2 complicaciones (crisis hipercalcemica, sindrome de hueso hambriento).
// 2 calculadoras, 1 figura.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'metabolismo-oseo-mineral',
  titulo: 'Metabolismo Oseo y Mineral',
  subtitulo: 'Modulo 47 · Medicina Interna',
  accent: '#2f7a6b',
  accentDim: '#9fc7bf'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const ejeCalcioHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="font-weight:700;color:var(--accent-fg);margin-bottom:4px;">El circuito: tres organos y dos hormonas</div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:7px;">
    <div style="flex:1;min-width:150px;border:1px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f12;">
      <div style="font-weight:700;color:#8a6a1f;">Paratiroides</div>
      <div style="color:var(--ink-dim);">El <strong>receptor sensor de calcio</strong> mide el calcio ionico y frena la secrecion de PTH cuando sube. Si el calcio baja, la PTH se libera en minutos: es el termostato del sistema.</div>
    </div>
    <div style="flex:1;min-width:150px;border:1px solid #8c3a34;border-radius:8px;padding:6px 9px;background:#8c3a3412;">
      <div style="font-weight:700;color:#8c3a34;">Hueso</div>
      <div style="color:var(--ink-dim);">La PTH activa de forma indirecta al osteoclasto y <strong>libera calcio y fosforo</strong>. El efecto es rapido y es el que sostiene la calcemia a corto plazo.</div>
    </div>
    <div style="flex:1;min-width:150px;border:1px solid #3d5a73;border-radius:8px;padding:6px 9px;background:#3d5a7312;">
      <div style="font-weight:700;color:#3d5a73;">Rinon</div>
      <div style="color:var(--ink-dim);">La PTH <strong>reabsorbe calcio</strong>, <strong>elimina fosforo</strong> (por eso el fosforo baja en el hiperparatiroidismo primario) y activa la <strong>1-alfa-hidroxilasa</strong>, que convierte la 25-hidroxivitamina D en calcitriol.</div>
    </div>
    <div style="flex:1;min-width:150px;border:1px solid #3f6b52;border-radius:8px;padding:6px 9px;background:#3f6b5212;">
      <div style="font-weight:700;color:#3f6b52;">Intestino</div>
      <div style="color:var(--ink-dim);">El <strong>calcitriol</strong> aumenta la absorcion de calcio Y de fosforo. Es el brazo lento del sistema y la razon de que el deficit de vitamina D suba la PTH sin bajar necesariamente el calcio.</div>
    </div>
  </div>
  <div style="font-weight:700;color:var(--accent-fg);margin:8px 0 4px;">El mapa que resuelve casi todo: PTH frente a calcio</div>
  <div style="display:grid;grid-template-columns:80px 1fr 1fr;gap:5px;">
    <div></div>
    <div style="text-align:center;font-weight:700;color:#8c3a34;border:1px solid #8c3a34;border-radius:6px;padding:3px;background:#8c3a3418;">CALCIO ALTO</div>
    <div style="text-align:center;font-weight:700;color:#4a6fa5;border:1px solid #4a6fa5;border-radius:6px;padding:3px;background:#4a6fa518;">CALCIO BAJO</div>

    <div style="display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;border:1px solid #8a6a1f;border-radius:6px;padding:3px;background:#8a6a1f18;">PTH alta o normal-alta</div>
    <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:var(--ink);">Hiperparatiroidismo PRIMARIO</strong> (fosforo bajo, calciuria normal o alta).<br><strong style="color:var(--ink);">Terciario</strong> si hay enfermedad renal cronica de larga evolucion.<br><strong style="color:var(--ink);">Hipercalcemia hipocalciurica familiar</strong> si la <strong>calciuria es BAJA</strong>: es el gran imitador y NO se opera.<br>Tambien: litio, tiazidas.</div>
    <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:var(--ink);">La paratiroides responde bien: el problema esta fuera.</strong><br>Deficit de vitamina D, malabsorcion, enfermedad renal cronica (hiperparatiroidismo SECUNDARIO), pancreatitis aguda, pseudohipoparatiroidismo (resistencia a la PTH), hiperfosfatemia aguda.</div>

    <div style="display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;border:1px solid #5b4a86;border-radius:6px;padding:3px;background:#5b4a8618;">PTH baja o suprimida</div>
    <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:var(--ink);">Hipercalcemia independiente de la PTH.</strong><br><strong>Malignidad</strong> (PTHrP, metastasis liticas, mieloma), que es la causa mas frecuente en el hospital.<br>Exceso de vitamina D o de calcitriol (granulomatosis, linfoma), tirotoxicosis, inmovilizacion, sindrome de leche y alcalinos, intoxicacion por vitamina A.</div>
    <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:var(--ink);">HIPOPARATIROIDISMO.</strong><br>Posquirurgico (la causa mas frecuente con diferencia), autoinmune, infiltrativo, sindrome de DiGeorge.<br><strong style="color:#8c3a34;">Y siempre: HIPOMAGNESEMIA</strong>, que bloquea la secrecion y la accion de la PTH y hace la hipocalcemia refractaria hasta que se corrige.</div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid var(--line);border-radius:8px;background:var(--panel2);color:var(--ink-dim);">
    <strong style="color:var(--accent-fg);">Tres reglas para leer el mapa.</strong> Primera: hay que <strong>corregir el calcio por la albumina</strong> (o medir calcio ionico) antes de nada, porque una hipoalbuminemia hace parecer baja una calcemia normal. Segunda: lo que importa no es si la PTH esta dentro del rango, sino si es <strong>apropiada para ese calcio</strong>: una PTH "normal" con calcio alto es inapropiada y significa hiperparatiroidismo. Y tercera: el <strong>fosforo</strong> desempata; baja en el hiperparatiroidismo primario y alta en el hipoparatiroidismo y en la enfermedad renal.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El calcio del plasma se mantiene dentro de un margen estrechisimo porque de el dependen la excitabilidad de la membrana, la contraccion muscular y la coagulacion. Tres organos y dos hormonas sostienen ese equilibrio, y casi todas las enfermedades del tema se entienden como el fallo de una pieza concreta del circuito. La buena noticia es que <strong>dos determinaciones, calcio y PTH, resuelven la mayor parte del diagnostico</strong>, siempre que se sepan leer juntas.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El circuito y el mapa que lo resume.</strong></p>
${figBlock('Figura 1', 'Eje calcio-PTH-vitamina D y el mapa de PTH frente a calcio', ejeCalcioHtml)}
<p style="margin:0 0 12px;">La paratiroides mide el calcio ionico con el <strong>receptor sensor de calcio</strong> y ajusta la PTH en minutos. La PTH actua en el hueso (libera calcio y fosforo), en el rinon (reabsorbe calcio, elimina fosforo y activa la 1-alfa-hidroxilasa) y, a traves del <strong>calcitriol</strong>, en el intestino (absorbe calcio y fosforo). De ahi salen las dos huellas analiticas que mas ayudan: en el <strong>hiperparatiroidismo primario</strong> el calcio sube y el <strong>fosforo baja</strong>, mientras que en el <strong>hipoparatiroidismo</strong> el calcio baja y el fosforo sube.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Antes de interpretar nada: corregir el calcio.</strong></p>
<p style="margin:0 0 12px;">Cerca de la mitad del calcio plasmatico circula unido a la albumina y no es biologicamente activo. Una hipoalbuminemia, tan frecuente en el paciente hospitalizado, hace parecer baja una calcemia normal. Se corrige sumando <strong>0.8 mg/dL por cada gramo de albumina por debajo de 4 g/dL</strong>, o se mide directamente el <strong>calcio ionico</strong>, que es lo mas fiable en el critico y ante alteraciones del pH (la alcalosis aumenta la union a la albumina y baja el calcio ionico sin cambiar el total: eso es lo que produce la tetania de la hiperventilacion). La calculadora del tema hace esa correccion y clasifica la gravedad.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La pregunta clave no es si la PTH es normal, sino si es apropiada.</strong></p>
<p style="margin:0 0 12px;">Ese es el error conceptual mas repetido del tema. Con una calcemia alta, la PTH deberia estar <strong>suprimida</strong>: si esta dentro del rango normal, es <strong>inapropiadamente normal</strong> y significa hiperparatiroidismo. Al reves, con una calcemia baja la PTH deberia estar alta: si es normal o baja, hay hipoparatiroidismo. Y una PTH alta con calcio bajo no es una enfermedad de la paratiroides sino su respuesta correcta a un problema de fuera, casi siempre <strong>deficit de vitamina D o enfermedad renal cronica</strong>.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Las dos hipercalcemias que hay que separar primero.</strong></p>
<p style="margin:0 0 12px;">Mas del <strong>90%</strong> de las hipercalcemias son hiperparatiroidismo primario o malignidad, y se distinguen por la PTH. El <strong>hiperparatiroidismo primario</strong> es el paciente ambulatorio con hipercalcemia leve y cronica, a menudo hallada por casualidad. La <strong>hipercalcemia de la malignidad</strong> es el paciente hospitalizado, con hipercalcemia mas alta y de instauracion rapida, PTH suprimida y un cancer casi siempre ya conocido. Y hay un tercer diagnostico que no se puede olvidar porque su tratamiento es <strong>no hacer nada</strong>: la <strong>hipercalcemia hipocalciurica familiar</strong>, que imita al hiperparatiroidismo primario pero cursa con calciuria baja y no mejora con paratiroidectomia.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La hipocalcemia y su trampa.</strong></p>
<p style="margin:0 0 12px;">La causa mas frecuente de hipoparatiroidismo es la <strong>cirugia cervical</strong>. Sus manifestaciones son de irritabilidad neuromuscular: parestesias peribucales y en los dedos, calambres, signos de <strong>Chvostek</strong> y de <strong>Trousseau</strong>, y en casos graves tetania, laringoespasmo, convulsiones y QT largo. Y hay una regla que ahorra muchas horas de frustracion: ante una hipocalcemia que no responde al calcio y al calcitriol, hay que medir y corregir el <strong>magnesio</strong>, porque su deficit bloquea a la vez la secrecion y la accion de la PTH.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Las tres enfermedades oseas del tema, y en que se diferencian.</strong></p>
<p style="margin:0 0 12px;">Conviene tenerlas separadas porque se confunden. La <strong>osteoporosis</strong> es hueso normal en cantidad insuficiente, con calcio, fosforo y fosfatasa alcalina normales (tiene tema propio). La <strong>osteomalacia</strong> es hueso mal mineralizado por deficit de vitamina D o de fosforo, con <strong>fosfatasa alcalina alta</strong>, calcio y fosforo bajos, PTH alta y dolor oseo difuso con debilidad proximal. Y la <strong>enfermedad de Paget</strong> es hueso remodelado de forma caotica en zonas concretas, con fosfatasa alcalina muy alta pero <strong>calcio, fosforo y PTH normales</strong>, y a menudo asintomatica.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No interpretar una calcemia sin corregirla por la albumina. No operar una hipercalcemia sin haber medido la <strong>calciuria</strong>, porque la hipercalcemia hipocalciurica familiar se opera sin beneficio. No dar calcio intravenoso en la hipercalcemia por malignidad sin hidratar antes. No usar diureticos de asa como tratamiento de rutina de la hipercalcemia: solo tienen sentido si hay sobrecarga de volumen. No perseguir una PTH normal en la enfermedad renal cronica avanzada, donde cierto grado de elevacion es adaptativo. Y no olvidar el magnesio ante una hipocalcemia que no responde.</p>`;

export const bibliografia = [
  'Bilezikian JP, Khan AA, Silverberg SJ, et al. Evaluation and management of primary hyperparathyroidism: summary statement and guidelines from the Fifth International Workshop. J Bone Miner Res. 2022;37(11):2293-2314.',
  'Bilezikian JP, Bandeira L, Khan A, Cusano NE. Hyperparathyroidism. Lancet. 2018;391(10116):168-178.',
  'Walker MD, Silverberg SJ. Primary hyperparathyroidism. Nat Rev Endocrinol. 2018;14(2):115-125.',
  'Bollerslev J, Rejnmark L, Zahn A, et al. European Expert Consensus on practical management of specific aspects of parathyroid disorders in adults and in pregnancy. Eur J Endocrinol. 2022;186(2):R33-R63.',
  'Khan AA, Bilezikian JP, Brandi ML, et al. Evaluation and management of hypoparathyroidism: summary statement and guidelines from the Second International Workshop. J Bone Miner Res. 2022;37(12):2568-2585.',
  'Brandi ML, Bilezikian JP, Shoback D, et al. Management of hypoparathyroidism: summary statement and guidelines. J Clin Endocrinol Metab. 2016;101(6):2273-2283.',
  'Stewart AF. Clinical practice. Hypercalcemia associated with cancer. N Engl J Med. 2005;352(4):373-379.',
  'Zagzag J, Hu MI, Fisher SB, Perrier ND. Hypercalcemia and cancer: differential diagnosis and treatment. CA Cancer J Clin. 2018;68(5):377-386.',
  'Cooper MS, Gittoes NJ. Diagnosis and management of hypocalcaemia. BMJ. 2008;336(7656):1298-1302.',
  'Christensen SE, Nissen PH, Vestergaard P, Mosekilde L. Familial hypocalciuric hypercalcaemia: a review. Curr Opin Endocrinol Diabetes Obes. 2011;18(6):359-370.',
  'Ketteler M, Block GA, Evenepoel P, et al. Executive summary of the 2017 KDIGO Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD) guideline update. Kidney Int. 2017;92(1):26-36.',
  'Uday S, Hogler W. Nutritional rickets and osteomalacia in the twenty-first century. Curr Osteoporos Rep. 2017;15(4):293-302.',
  'Munns CF, Shaw N, Kiely M, et al. Global consensus recommendations on prevention and management of nutritional rickets. J Clin Endocrinol Metab. 2016;101(2):394-415.',
  'Ralston SH, Corral-Gudino L, Cooper C, et al. Diagnosis and management of Paget disease of bone in adults: a clinical guideline. J Bone Miner Res. 2019;34(4):579-604.',
  'Singer FR, Bone HG 3rd, Hosking DJ, et al. Paget disease of bone: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2014;99(12):4408-4422.',
  'Witteveen JE, van Thiel S, Romijn JA, Hamdy NA. Hungry bone syndrome: still a challenge in the post-operative management of primary hyperparathyroidism. Eur J Endocrinol. 2013;168(3):R45-R53.',
  'Holick MF. Vitamin D deficiency. N Engl J Med. 2007;357(3):266-281.',
  'Demay MB, Pittas AG, Bikle DD, et al. Vitamin D for the prevention of disease: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2024;109(8):1907-1947.',
  'Wilhelm SM, Wang TS, Ruan DT, et al. The American Association of Endocrine Surgeons guidelines for definitive management of primary hyperparathyroidism. JAMA Surg. 2016;151(10):959-968.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Hipercalcemia',
      tituloB: 'Hipocalcemia y enfermedad osea metabolica',
      compensada: 'La hipercalcemia leve y cronica suele ser ASINTOMATICA y se descubre en una analitica de rutina. Cuando da sintomas, se resumen en la regla clasica de huesos, piedras, quejidos abdominales y tonos psiquicos: dolor oseo, litiasis renal y nefrocalcinosis, estrenimiento, nauseas, epigastralgia y pancreatitis, y astenia, depresion, dificultad de concentracion e irritabilidad. Ademas, poliuria y polidipsia por diabetes insipida nefrogenica, y acortamiento del QT.',
      descompensada: 'HIPOCALCEMIA: irritabilidad neuromuscular con parestesias peribucales y en los dedos, calambres, signo de Chvostek (contraccion facial al percutir el nervio facial) y signo de Trousseau (espasmo carpopedal al inflar el manguito por encima de la sistolica 3 minutos, mas especifico), y en casos graves tetania, laringoespasmo, broncoespasmo, convulsiones, QT largo e insuficiencia cardiaca. OSTEOMALACIA: dolor oseo difuso, debilidad proximal con marcha de pato y fracturas por insuficiencia. PAGET: dolor oseo local, deformidad, aumento de temperatura sobre el hueso e hipoacusia si afecta al craneo.'
    },
    laboratorio: [
      { prueba: 'Calcio total con albumina, o calcio ionico (calculadora disponible)', utilidad: 'PRIMER paso siempre. Cerca de la mitad del calcio circula unido a la albumina: se corrige sumando 0.8 mg/dL por cada gramo de albumina por debajo de 4 g/dL. El calcio ionico es preferible en el critico y ante alteraciones del pH o de las proteinas.' },
      { prueba: 'Hormona paratiroidea intacta (calculadora disponible)', utilidad: 'Segunda determinacion imprescindible, interpretada SIEMPRE junto al calcio. Lo relevante no es si esta dentro del rango sino si es apropiada: una PTH normal con calcio alto es inapropiada y significa hiperparatiroidismo.' },
      { prueba: 'Fosforo', utilidad: 'Desempata. Bajo en el hiperparatiroidismo primario y en la osteomalacia por perdida renal; alto en el hipoparatiroidismo, en la enfermedad renal cronica y en la hiperfosfatemia aguda por lisis tumoral o rabdomiolisis.' },
      { prueba: 'Magnesio', utilidad: 'Obligado en TODA hipocalcemia. Su deficit bloquea a la vez la secrecion y la accion de la PTH, y hace la hipocalcemia refractaria mientras no se corrija. Causas frecuentes: alcoholismo, diureticos, inhibidores de la bomba de protones, diarrea y cisplatino.' },
      { prueba: '25-hidroxivitamina D', utilidad: 'Marca el deposito corporal de vitamina D. Su deficit es la causa mas frecuente de hiperparatiroidismo secundario y hay que corregirlo antes de interpretar una PTH alta o de plantear cirugia paratiroidea.' },
      { prueba: 'Calcio en orina de 24 horas y excrecion fraccional de calcio', utilidad: 'CLAVE para no operar por error. Una calciuria baja con excrecion fraccional de calcio por debajo de 0.01 sugiere hipercalcemia hipocalciurica familiar, que imita al hiperparatiroidismo primario y NO se beneficia de la paratiroidectomia.' },
      { prueba: 'Fosfatasa alcalina', utilidad: 'Normal en la osteoporosis; alta en la osteomalacia y MUY alta en la enfermedad de Paget, donde es el marcador de actividad y de respuesta al tratamiento. Conviene comprobar su origen oseo con la fraccion osea o con la gamma-glutamil transferasa.' },
      { prueba: 'Creatinina con filtrado glomerular estimado', utilidad: 'Define el hiperparatiroidismo secundario de la enfermedad renal, condiciona el criterio quirurgico en el primario (filtrado por debajo de 60) y determina la seguridad de los bisfosfonatos en la hipercalcemia.' },
      { prueba: 'Peptido relacionado con la PTH (PTHrP), proteinograma y calcitriol', utilidad: 'En la hipercalcemia con PTH suprimida: PTHrP alto indica hipercalcemia humoral maligna; el proteinograma con cadenas ligeras descarta mieloma; y un calcitriol alto orienta a granulomatosis o linfoma.' }
    ],
    no_invasivos: [
      { metodo: 'Electrocardiograma', interpretacion: 'La hipercalcemia acorta el QT y puede producir bradiarritmias; la hipocalcemia lo alarga y predispone a torsion de puntas. Es una herramienta rapida de gravedad a pie de cama.', cutoff: 'Sin umbrales fijos; el QT corregido guia la urgencia' },
      { metodo: 'Signos de Chvostek y de Trousseau', interpretacion: 'Chvostek: contraccion de la musculatura facial al percutir sobre el nervio facial por delante del pabellon auricular; poco especifico, positivo hasta en el 10% de las personas sanas. Trousseau: espasmo carpopedal al inflar el manguito por encima de la sistolica durante 3 minutos; mas especifico.', cutoff: 'Signos clinicos, sin umbral numerico' },
      { metodo: 'Densitometria osea con radio distal al 33%', interpretacion: 'En el hiperparatiroidismo primario, la PTH afecta sobre todo al hueso CORTICAL, de modo que el radio al 33% es el sitio mas informativo y no debe omitirse. Es uno de los criterios quirurgicos.', cutoff: 'Puntuacion T de -2.5 o menor en cualquier sitio: criterio de cirugia' },
      { metodo: 'Gammagrafia con sestamibi y ecografia cervical', interpretacion: 'Sirven para LOCALIZAR el adenoma antes de la cirugia, NO para diagnosticar: el diagnostico de hiperparatiroidismo primario es bioquimico. Una localizacion positiva permite la paratiroidectomia minimamente invasiva.', cutoff: 'Su negatividad no descarta el diagnostico ni contraindica la cirugia' },
      { metodo: 'Excrecion fraccional de calcio', interpretacion: 'Se calcula con calcio y creatinina en suero y en orina. Separa el hiperparatiroidismo primario de la hipercalcemia hipocalciurica familiar, que es el error diagnostico mas costoso del tema.', cutoff: 'Por debajo de 0.01 sugiere hipercalcemia hipocalciurica familiar; por encima de 0.02 apoya hiperparatiroidismo primario' }
    ],
    imagen: [
      { modalidad: 'Radiografia simple', hallazgos: 'En la osteomalacia, las zonas de Looser o pseudofracturas (bandas radiolucentes perpendiculares a la cortical en pelvis, femur proximal, escapula y costillas). En el Paget, engrosamiento cortical, patron trabecular grosero, aumento de tamano del hueso y deformidad. En el hiperparatiroidismo avanzado, resorcion subperiostica de las falanges y craneo en sal y pimienta.' },
      { modalidad: 'Gammagrafia osea con difosfonatos', hallazgos: 'Prueba de eleccion para definir la EXTENSION de la enfermedad de Paget: muestra la captacion intensa de las lesiones activas y detecta focos asintomaticos. No sirve para valorar la actividad, que se sigue con la fosfatasa alcalina.' },
      { modalidad: 'Ecografia renal o tomografia sin contraste', hallazgos: 'Busca litiasis y nefrocalcinosis en el hiperparatiroidismo primario, que son criterio quirurgico aunque el paciente este asintomatico.' },
      { modalidad: 'Tomografia de cuatro dimensiones y sestamibi con tomografia de emision', hallazgos: 'Localizacion de adenomas paratiroideos ectopicos o en la reintervencion. Utiles cuando la ecografia y el sestamibi convencionales son discordantes o negativos.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `El tema se ordena en dos ejes. El primero es la <strong>direccion del calcio</strong> (hipercalcemia frente a hipocalcemia) cruzada con la <strong>PTH</strong>, lo que genera los cuatro cuadrantes que resuelven casi todo el diagnostico. El segundo es la <strong>gravedad</strong> y la velocidad de instauracion, que determinan la urgencia: una hipercalcemia de 13 mg/dL instaurada en dias es mucho mas peligrosa que una de 11.5 mg/dL de anos de evolucion. A ellos se anade la clasificacion de las enfermedades oseas metabolicas por su patron bioquimico.`,
    escalas: [
      { nombre: 'Correccion del calcio por la albumina (calculadora disponible)', componentes: 'Calcio total medido y albumina serica.', formula: 'Calcio corregido = calcio medido + 0.8 x (4.0 menos albumina en g/dL).', interpretacion: 'Imprescindible antes de interpretar cualquier calcemia. En el critico, en alteraciones del pH o con proteinas muy alteradas, se prefiere medir directamente el calcio ionico, que es el biologicamente activo.' },
      { nombre: 'Gravedad de la hipercalcemia', componentes: 'Calcio corregido y velocidad de instauracion.', formula: 'Clasificacion por rangos de calcio corregido.', interpretacion: 'Leve por debajo de 12 mg/dL (a menudo asintomatica, manejo ambulatorio); moderada de 12 a 14 (sintomas segun la velocidad); grave por encima de 14 (urgencia, hidratacion intensa y bisfosfonato o denosumab). La VELOCIDAD pesa tanto como la cifra.' },
      { nombre: 'Mapa de PTH frente a calcio (calculadora disponible)', componentes: 'Calcio corregido y PTH intacta, con fosforo, 25-hidroxivitamina D y calciuria como desempate.', formula: 'Cuatro cuadrantes segun la direccion de cada uno.', interpretacion: 'Calcio alto con PTH alta o inapropiadamente normal: hiperparatiroidismo primario o terciario, o hipercalcemia hipocalciurica familiar si la calciuria es baja. Calcio alto con PTH suprimida: malignidad y otras causas independientes de la PTH. Calcio bajo con PTH alta: respuesta apropiada a un problema externo. Calcio bajo con PTH baja o normal: hipoparatiroidismo, y siempre descartar hipomagnesemia.' },
      { nombre: 'Criterios quirurgicos del hiperparatiroidismo primario', componentes: 'Edad, calcemia, funcion renal, calciuria, densitometria, fractura vertebral y litiasis o nefrocalcinosis.', formula: 'Cumplir CUALQUIERA de los criterios indica paratiroidectomia.', interpretacion: 'Calcio mas de 1 mg/dL por encima del limite alto; filtrado glomerular por debajo de 60 mL/min/1.73 m2; litiasis o nefrocalcinosis por imagen, o calciuria superior a 400 mg en 24 horas con riesgo litogeno; puntuacion T de -2.5 o menor o fractura vertebral; y edad menor de 50 anos. Ademas, la cirugia se ofrece a todo paciente sintomatico.' },
      { nombre: 'Patron bioquimico de las enfermedades oseas metabolicas', componentes: 'Calcio, fosforo, fosfatasa alcalina y PTH.', formula: 'Comparacion de los cuatro parametros entre si.', interpretacion: 'OSTEOPOROSIS: todo normal. OSTEOMALACIA: calcio y fosforo bajos o en el limite, fosfatasa alcalina alta y PTH alta. PAGET: fosfatasa alcalina muy alta con calcio, fosforo y PTH NORMALES. HIPERPARATIROIDISMO PRIMARIO: calcio alto, fosforo bajo, PTH alta. Este cuadro de cuatro columnas resuelve la mayor parte de las preguntas del tema.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Hiperparatiroidismo primario',
      color: '#2f7a6b',
      definicion: 'Secrecion autonoma y excesiva de PTH por una o mas glandulas paratiroides, con hipercalcemia y PTH alta o inapropiadamente normal. Es la causa mas frecuente de hipercalcemia en el paciente ambulatorio y la tercera enfermedad endocrina en frecuencia.',
      fisiopatologia: 'En el 80 al 85% de los casos hay un <strong>adenoma unico</strong>, en el 10 al 15% hiperplasia de las cuatro glandulas y en menos del 1% un carcinoma paratiroideo. La glandula pierde la sensibilidad normal del receptor sensor de calcio y sigue secretando PTH pese a la hipercalcemia. El exceso de PTH libera calcio del hueso (con preferencia del hueso cortical), reabsorbe calcio en el rinon pero aumenta la carga filtrada total, y elimina fosforo: de ahi el patron de calcio alto con fosforo bajo. Ver la Figura 1 de Definicion.',
      epidemiologia: 'Prevalencia de 1 a 4 por 1000, con predominio femenino de 3 a 1 y pico tras la menopausia. Su presentacion ha cambiado por completo: en la era del calcio automatizado, la mayoria de los casos son ASINTOMATICOS y se descubren por casualidad, mientras que la forma clasica con osteitis fibrosa quistica es hoy excepcional.',
      factores_riesgo: ['Sexo femenino y edad posmenopausica', 'Radiacion cervical previa', 'Tratamiento prolongado con LITIO', 'Neoplasia endocrina multiple tipo 1 y tipo 2A', 'Sindrome de hiperparatiroidismo con tumor mandibular', 'Deficit cronico de vitamina D o de calcio (estimulo mantenido)', 'Antecedente familiar de hipercalcemia', 'Enfermedad renal cronica de larga evolucion (para la forma terciaria)'],
      clinica: 'Asintomatico en la mayoria. Cuando da sintomas: litiasis renal de repeticion, dolor oseo y fracturas, estrenimiento, epigastralgia, pancreatitis, poliuria y polidipsia, y sintomas neuropsiquiatricos inespecificos (astenia, depresion, dificultad de concentracion) que a menudo solo se reconocen retrospectivamente al mejorar tras la cirugia.',
      criterios_dx: 'BIOQUIMICO: hipercalcemia (calcio corregido o ionico) con PTH elevada o inapropiadamente normal, tras excluir litio y tiazidas y tras medir la CALCIURIA para descartar hipercalcemia hipocalciurica familiar. Existe una forma NORMOCALCEMICA, con calcio normal y PTH alta, que exige haber descartado antes todas las causas de hiperparatiroidismo secundario.',
      laboratorio: 'Calcio corregido o ionico, PTH intacta, fosforo, magnesio, 25-hidroxivitamina D, creatinina con filtrado y calcio en orina de 24 horas con excrecion fraccional de calcio. Corregir el deficit de vitamina D antes de interpretar la PTH.',
      imagen: 'Densitometria de tres sitios INCLUYENDO el radio distal al 33%, porque la PTH afecta sobre todo al hueso cortical. Imagen renal (ecografia o tomografia sin contraste) para buscar litiasis o nefrocalcinosis silentes. Ecografia cervical y sestamibi solo para LOCALIZAR antes de operar.',
      complementarios: 'Radiografia lateral de columna o evaluacion vertebral por densitometria, porque una fractura vertebral silente es criterio quirurgico. Estudio genetico si hay antecedente familiar, edad joven o afectacion multiglandular.',
      dx_diferencial: 'HIPERCALCEMIA HIPOCALCIURICA FAMILIAR (el imitador que no se debe operar), hiperparatiroidismo terciario, hipercalcemia por litio o por tiazidas, hiperparatiroidismo secundario a deficit de vitamina D con calcio en el limite alto, y carcinoma paratiroideo ante calcio muy alto con PTH muy elevada y masa cervical palpable.',
      tx_medico: 'En el paciente que no cumple criterios quirurgicos: hidratacion adecuada, evitar la deshidratacion y la inmovilizacion prolongada, aporte de calcio dietetico NORMAL (restringirlo estimula mas la PTH), correccion del deficit de vitamina D con prudencia y retirada de tiazidas y de litio cuando sea posible. Seguimiento anual con calcio y funcion renal y densitometria cada 1 a 2 anos.',
      tx_farmacologico: 'CINACALCET si hay hipercalcemia sintomatica y el paciente no es candidato a cirugia: baja la calcemia actuando sobre el receptor sensor de calcio, pero NO mejora la densidad osea. Bisfosfonatos o denosumab si el problema dominante es la perdida osea: mejoran la densidad pero no bajan el calcio. Es decir, cada farmaco resuelve una mitad del problema y ninguno sustituye a la cirugia.',
      tx_intervencionista: 'PARATIROIDECTOMIA, que es el unico tratamiento curativo, con tasas de exito superiores al 95% en manos expertas. Criterios: calcio mas de 1 mg/dL por encima del limite alto, filtrado por debajo de 60, litiasis o nefrocalcinosis o calciuria mayor de 400 mg en 24 horas, puntuacion T de -2.5 o menor o fractura vertebral, y edad menor de 50 anos. Tambien a todo paciente sintomatico. Abordaje minimamente invasivo si la localizacion preoperatoria es concordante, con medicion intraoperatoria de PTH.',
      criterios_uci: 'Crisis hipercalcemica con calcio por encima de 14 mg/dL, alteracion del nivel de conciencia o arritmia.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Solo en la crisis hipercalcemica o en el posoperatorio. Tras la paratiroidectomia, vigilar la hipocalcemia y el sindrome de hueso hambriento, que tiene ficha propia.',
      seguimiento_ambulatorio: 'Sin cirugia: calcio y creatinina anuales, densitometria de tres sitios cada 1 a 2 anos y valoracion periodica de la aparicion de criterios quirurgicos. Tras la cirugia: calcio a las 24 horas y a las 2 semanas, y despues control anual; la densidad osea mejora de forma progresiva durante anos.',
      pronostico: 'Excelente tras la cirugia, con normalizacion del calcio, recuperacion de densidad osea y reduccion de la litiasis. Sin cirugia, la mayoria de los casos leves permanece estable durante anos, aunque una proporcion desarrolla criterios quirurgicos con el tiempo.',
      algoritmo: ['Hipercalcemia: corregir por albumina o medir calcio ionico', 'Medir PTH: alta o inapropiadamente normal orienta al primario', 'Excluir litio y tiazidas', 'Medir CALCIURIA y excrecion fraccional de calcio', 'Excrecion fraccional por debajo de 0.01: sospechar hipercalcemia hipocalciurica familiar y NO operar', 'Corregir el deficit de vitamina D antes de decidir', 'Buscar criterios quirurgicos: calcio, filtrado, rinon, hueso y edad', 'Si hay criterios o sintomas: localizar y paratiroidectomia', 'Si no: seguimiento anual con calcio, creatinina y densitometria periodica']
    },
    {
      nombre: 'Hipercalcemia de la malignidad',
      color: '#8c3a34',
      definicion: 'Hipercalcemia con PTH SUPRIMIDA en un paciente con cancer. Es la causa mas frecuente de hipercalcemia en el paciente hospitalizado y un marcador de mal pronostico: su aparicion suele indicar enfermedad avanzada.',
      fisiopatologia: 'Cuatro mecanismos. El mas frecuente, en el 80%, es la <strong>hipercalcemia humoral maligna</strong> por secrecion tumoral de <strong>PTHrP</strong>, que actua sobre el mismo receptor que la PTH y reproduce su efecto (calcio alto, fosforo bajo) pero con la PTH propia suprimida; tipica del carcinoma escamoso de pulmon, del renal, del de mama y del de cabeza y cuello. El segundo es la <strong>osteolisis local</strong> por metastasis o por mieloma, mediada por citocinas y por RANKL. El tercero es la produccion tumoral de <strong>calcitriol</strong>, propia de los linfomas. Y el cuarto, raro, la secrecion ectopica de PTH verdadera.',
      epidemiologia: 'Aparece en el 20 al 30% de los pacientes con cancer a lo largo de su enfermedad. La mediana de supervivencia tras su aparicion es corta, de semanas a pocos meses, aunque ha mejorado con los tratamientos oncologicos actuales.',
      factores_riesgo: ['Carcinoma escamoso de pulmon, de cabeza y cuello y de esofago', 'Cancer de mama con metastasis oseas', 'Mieloma multiple', 'Carcinoma renal', 'Linfomas (mecanismo por calcitriol)', 'Enfermedad avanzada y alta carga tumoral', 'Deshidratacion e inmovilizacion', 'Farmacos que agravan: tiazidas, litio, vitamina D, calcio'],
      clinica: 'Instauracion mas rapida y calcemias mas altas que en el hiperparatiroidismo primario, de modo que casi siempre es sintomatica: nauseas, vomitos, estrenimiento, poliuria con deshidratacion, debilidad, confusion, somnolencia y, en casos graves, coma. La deshidratacion cierra un circulo vicioso porque reduce la excrecion renal de calcio y agrava la hipercalcemia.',
      criterios_dx: 'Hipercalcemia con PTH suprimida en un paciente con cancer conocido o sospechado. PTHrP elevado confirma el mecanismo humoral; calcitriol alto orienta a linfoma o granulomatosis; y un proteinograma con componente monoclonal, a mieloma.',
      laboratorio: 'Calcio corregido o ionico, PTH intacta (suprimida), fosforo, funcion renal, PTHrP, 25-hidroxivitamina D y calcitriol, proteinograma con inmunofijacion y cadenas ligeras libres, y fosfatasa alcalina.',
      imagen: 'Estudio de extension segun el tumor. Serie osea o tomografia por emision de positrones si se sospecha mieloma o metastasis liticas.',
      complementarios: 'Revision de los farmacos que agravan la hipercalcemia. Valoracion de objetivos de tratamiento, porque la hipercalcemia maligna es con frecuencia un punto de inflexion en la trayectoria del paciente.',
      dx_diferencial: 'Hiperparatiroidismo primario coincidente (que no es raro y se distingue por la PTH), inmovilizacion prolongada, hipercalcemia por granulomatosis, sindrome de leche y alcalinos, tirotoxicosis e insuficiencia suprarrenal.',
      tx_medico: 'HIDRATACION con suero salino isotonico, que es la primera medida y la mas importante: restaura el volumen y aumenta la excrecion renal de calcio. Movilizacion precoz. Retirada de los farmacos que agravan. Los diureticos de asa NO son tratamiento de rutina y solo se anaden si aparece sobrecarga de volumen.',
      tx_farmacologico: 'BISFOSFONATO intravenoso (acido zoledronico como eleccion, o pamidronato) tras iniciar la hidratacion: tarda de 2 a 4 dias en hacer efecto, por lo que se administra pronto. DENOSUMAB si hay insuficiencia renal que contraindica el bisfosfonato o si la hipercalcemia es refractaria a el. CALCITONINA como puente en las primeras 24 a 48 horas, porque actua en horas pero pierde eficacia por taquifilaxia. GLUCOCORTICOIDES si el mecanismo es por calcitriol (linfoma, granulomatosis) o en el mieloma.',
      tx_intervencionista: 'Hemodialisis con bano bajo en calcio en la hipercalcemia grave con insuficiencia renal o insuficiencia cardiaca que impide la hidratacion. Tratamiento oncologico del tumor, que es lo unico que resuelve el problema de fondo.',
      criterios_uci: 'Calcio por encima de 14 mg/dL con alteracion del nivel de conciencia, arritmia o insuficiencia renal que exija dialisis.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Calcio, funcion renal y electrolitos seriados. Balance hidrico estricto. Vigilar la hipocalcemia tardia tras el bisfosfonato o el denosumab, sobre todo si hay deficit de vitamina D no corregido.',
      seguimiento_ambulatorio: 'Control de calcio segun la respuesta y la evolucion oncologica. La recidiva es frecuente y suele indicar progresion tumoral.',
      pronostico: 'Malo en terminos oncologicos: su aparicion marca enfermedad avanzada. La hipercalcemia en si se controla en la mayoria de los casos, pero recidiva si el tumor progresa.',
      algoritmo: ['Hipercalcemia con PTH suprimida: pensar en malignidad', 'Medir PTHrP, calcitriol y proteinograma para el mecanismo', 'Iniciar HIDRATACION con salino isotonico de inmediato', 'Retirar farmacos que agravan y movilizar al paciente', 'Anadir bisfosfonato intravenoso pronto (tarda 2 a 4 dias)', 'Calcitonina como puente si hay que bajar el calcio en horas', 'Denosumab si hay insuficiencia renal o refractariedad', 'Glucocorticoide si el mecanismo es por calcitriol o mieloma', 'Diureticos de asa solo si hay sobrecarga de volumen', 'Dialisis en la hipercalcemia grave con fallo renal o cardiaco']
    },
    {
      nombre: 'Hipoparatiroidismo e hipocalcemia',
      color: '#4a6fa5',
      definicion: 'Deficit de PTH con hipocalcemia e hiperfosfatemia. Su causa mas frecuente con diferencia es la CIRUGIA cervical. Es una de las pocas enfermedades endocrinas que todavia se trata sustituyendo el efecto de la hormona y no la hormona misma.',
      fisiopatologia: 'Sin PTH, el rinon deja de reabsorber calcio y de eliminar fosforo, y no activa la 1-alfa-hidroxilasa, de modo que falta calcitriol y cae la absorcion intestinal de calcio. El resultado es hipocalcemia con hiperfosfatemia y calcitriol bajo. Ademas, al faltar el efecto calciurico de la PTH, cualquier intento de normalizar el calcio serico produce HIPERCALCIURIA, que es la razon por la que el objetivo terapeutico es dejar el calcio en el limite bajo y no en el medio del rango.',
      epidemiologia: 'Hipoparatiroidismo posquirurgico permanente en el 1 al 3% de las tiroidectomias totales, mucho mas frecuente el transitorio. Las formas autoinmunes, aisladas o dentro del sindrome poliglandular autoinmune tipo 1, y las geneticas son minoritarias.',
      factores_riesgo: ['Tiroidectomia total, sobre todo con diseccion ganglionar central', 'Paratiroidectomia y cirugia cervical repetida', 'Cirujano de bajo volumen', 'Sindrome poliglandular autoinmune tipo 1', 'Sindrome de DiGeorge (deleccion 22q11)', 'Enfermedades infiltrativas: hemocromatosis, enfermedad de Wilson, metastasis', 'Radioterapia cervical', 'HIPOMAGNESEMIA, que produce un hipoparatiroidismo funcional y reversible'],
      clinica: 'Irritabilidad neuromuscular: parestesias peribucales y en los dedos, calambres, signos de Chvostek y de Trousseau. En casos graves, tetania, laringoespasmo, broncoespasmo, convulsiones, QT largo con riesgo de torsion de puntas e insuficiencia cardiaca. En las formas cronicas: calcificaciones de los ganglios basales, cataratas, piel seca, unas fragiles y alteraciones dentarias.',
      criterios_dx: 'Hipocalcemia con PTH baja o inapropiadamente normal, con fosforo alto y magnesio normal. La normalidad del magnesio es imprescindible para el diagnostico, porque su deficit produce un cuadro identico pero reversible.',
      laboratorio: 'Calcio corregido o ionico, PTH intacta, fosforo, MAGNESIO, 25-hidroxivitamina D, creatinina y calcio en orina de 24 horas para vigilar la hipercalciuria del tratamiento.',
      imagen: 'Tomografia craneal si hay clinica extrapiramidal o convulsiones: busca calcificaciones de los ganglios basales. Ecografia renal periodica en el tratamiento cronico, por el riesgo de nefrocalcinosis y litiasis.',
      complementarios: 'Electrocardiograma con medicion del QT. Valoracion oftalmologica periodica por las cataratas. En las formas no quirurgicas, estudio autoinmune y genetico.',
      dx_diferencial: 'HIPOMAGNESEMIA (la primera a descartar siempre), deficit de vitamina D, enfermedad renal cronica, pseudohipoparatiroidismo (resistencia a la PTH, con PTH ALTA), pancreatitis aguda, sepsis, rabdomiolisis y sindrome de lisis tumoral, alcalosis respiratoria por hiperventilacion y transfusion masiva con citrato.',
      tx_medico: 'Aporte de calcio dietetico. Vigilancia de la calciuria y de la funcion renal. Educacion sobre los sintomas de alarma y el ajuste ante cuadros intercurrentes.',
      tx_farmacologico: 'CALCIO ORAL con CALCITRIOL, que es el pilar del tratamiento cronico: se usa calcitriol y no colecalciferol porque falta la 1-alfa-hidroxilasa renal. El OBJETIVO es un calcio en el LIMITE BAJO del rango normal y asintomatico, no en el medio, para no provocar hipercalciuria y nefrocalcinosis. Se pueden anadir tiazidas, que reducen la calciuria. En la hipocalcemia aguda sintomatica: gluconato calcico intravenoso diluido y en perfusion. La PTH recombinante se reserva a casos de mal control con dosis muy altas de calcio y calcitriol.',
      tx_intervencionista: 'Autotrasplante de tejido paratiroideo criopreservado en casos seleccionados tras cirugia, poco disponible.',
      criterios_uci: 'Tetania grave con laringoespasmo, convulsiones, QT muy prolongado con arritmia o insuficiencia cardiaca por hipocalcemia.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Calcio seriado, monitorizacion del QT y perfusion de calcio si hay sintomas graves. CORREGIR SIEMPRE el magnesio: sin ello, el calcio no responde.',
      seguimiento_ambulatorio: 'Calcio, fosforo, magnesio, creatinina y calcio en orina de 24 horas cada 6 a 12 meses. Ecografia renal periodica. A los 6 a 12 meses de la cirugia se define si el hipoparatiroidismo es permanente.',
      pronostico: 'La mayoria de los casos posquirurgicos es transitoria. El hipoparatiroidismo permanente es controlable pero conlleva una carga terapeutica alta y riesgo acumulado de nefrocalcinosis y de calcificaciones cerebrales.',
      algoritmo: ['Hipocalcemia: corregir por albumina o medir calcio ionico', 'Medir MAGNESIO siempre y corregirlo si esta bajo', 'Medir PTH: baja o inapropiadamente normal indica hipoparatiroidismo', 'PTH alta con calcio bajo: buscar la causa fuera de la paratiroides', 'Sintomas graves o QT largo: gluconato calcico intravenoso diluido', 'Tratamiento cronico con calcio oral y CALCITRIOL', 'Objetivo: calcio en el limite BAJO y paciente asintomatico', 'Vigilar calciuria y funcion renal; anadir tiazida si hay hipercalciuria', 'Reevaluar a los 6 a 12 meses antes de etiquetar de permanente']
    },
    {
      nombre: 'Hiperparatiroidismo secundario y terciario',
      color: '#8a6a1f',
      definicion: 'Elevacion de la PTH como RESPUESTA a un estimulo cronico (secundario), que con el tiempo puede volverse autonoma e hipercalcemica (terciario). El escenario dominante es la enfermedad renal cronica, y el otro es el deficit de vitamina D.',
      fisiopatologia: 'En la enfermedad renal cronica confluyen tres estimulos: la RETENCION DE FOSFORO, el descenso del calcitriol por perdida de 1-alfa-hidroxilasa y la elevacion del factor de crecimiento fibroblastico 23. La paratiroides se hipertrofia para mantener el calcio y acaba desarrollando areas nodulares con menos receptores sensores de calcio y de vitamina D: llegado ese punto, la secrecion se hace autonoma y aparece hipercalcemia, que es el hiperparatiroidismo TERCIARIO. En el deficit de vitamina D el mecanismo es mas simple: baja la absorcion intestinal de calcio y la PTH sube para compensar, con calcemia normal o baja.',
      epidemiologia: 'Practicamente universal en la enfermedad renal cronica avanzada y en dialisis. El deficit de vitamina D afecta a una proporcion muy alta de la poblacion general, sobre todo en el anciano institucionalizado y en latitudes altas.',
      factores_riesgo: ['Enfermedad renal cronica en estadios avanzados y dialisis', 'Deficit de vitamina D por baja exposicion solar o baja ingesta', 'Malabsorcion: celiaquia, cirugia bariatrica, insuficiencia pancreatica', 'Edad avanzada e institucionalizacion', 'Obesidad (secuestro de vitamina D en el tejido adiposo)', 'Farmacos: anticonvulsivantes, glucocorticoides, colestiramina', 'Piel oscura y uso sistematico de fotoproteccion', 'Hipercalciuria idiopatica'],
      clinica: 'El secundario suele ser asintomatico y detectarse por analitica. En la enfermedad renal avanzada aparecen dolor oseo, prurito, debilidad, calcificaciones vasculares y, en casos extremos, calcifilaxis. El terciario se manifiesta por la hipercalcemia y sus sintomas.',
      criterios_dx: 'SECUNDARIO: PTH elevada con calcio normal o bajo y una causa identificable (filtrado glomerular reducido, 25-hidroxivitamina D baja, malabsorcion). TERCIARIO: PTH elevada con HIPERCALCEMIA en un paciente con enfermedad renal cronica de larga evolucion, a menudo tras el trasplante renal.',
      laboratorio: 'Calcio, fosforo, PTH, 25-hidroxivitamina D, fosfatasa alcalina, creatinina con filtrado y bicarbonato. En la enfermedad renal, seguimiento de la tendencia mas que de valores aislados.',
      imagen: 'Radiografia si se sospecha osteitis fibrosa. Valoracion de calcificaciones vasculares. Ecografia y sestamibi si se plantea paratiroidectomia en el terciario.',
      complementarios: 'Valoracion nefrologica conjunta. Revision de la dieta y de los quelantes del fosforo.',
      dx_diferencial: 'Hiperparatiroidismo primario normocalcemico (que exige haber descartado todas las causas de secundario), hiperparatiroidismo primario coincidente con enfermedad renal, y pseudohipoparatiroidismo.',
      tx_medico: 'Corregir la causa. En el deficit de vitamina D, reposicion con colecalciferol hasta alcanzar 25-hidroxivitamina D de 30 ng/mL o mas, con aporte adecuado de calcio dietetico. En la enfermedad renal cronica: control del fosforo con dieta y quelantes, preferentemente no calcicos, y correccion de la acidosis metabolica.',
      tx_farmacologico: 'En la enfermedad renal cronica: quelantes del fosforo, analogos de la vitamina D (calcitriol, paricalcitol) y CALCIMIMETICOS (cinacalcet, etelcalcetida) segun el nivel de PTH, calcio y fosforo. Objetivo: no normalizar la PTH, porque cierto grado de elevacion es ADAPTATIVO y una supresion excesiva produce enfermedad osea adinamica; se busca mantenerla en un rango de 2 a 9 veces el limite alto en dialisis.',
      tx_intervencionista: 'PARATIROIDECTOMIA en el hiperparatiroidismo terciario con hipercalcemia persistente, en el secundario grave refractario al tratamiento medico, y ante calcifilaxis o prurito incoercible. Habitualmente subtotal o total con autotrasplante.',
      criterios_uci: 'Calcifilaxis con sepsis, o crisis hipercalcemica en el terciario.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Control de calcio, fosforo y PTH. Tras la paratiroidectomia, riesgo alto de sindrome de hueso hambriento, que tiene ficha propia.',
      seguimiento_ambulatorio: 'Seguimiento conjunto con nefrologia. En el deficit de vitamina D corregido, la PTH suele normalizarse en meses; si no lo hace, replantear un hiperparatiroidismo primario normocalcemico.',
      pronostico: 'El secundario por deficit de vitamina D es reversible. El de la enfermedad renal cronica es progresivo y contribuye a la morbilidad cardiovascular por calcificaciones vasculares.',
      algoritmo: ['PTH alta con calcio normal o bajo: pensar en secundario', 'Medir 25-hidroxivitamina D y filtrado glomerular', 'Corregir el deficit de vitamina D y reevaluar en meses', 'En la enfermedad renal, controlar el fosforo con dieta y quelantes', 'Anadir analogos de vitamina D o calcimimeticos segun PTH, calcio y fosforo', 'No perseguir una PTH normal: la supresion excesiva da hueso adinamico', 'Si aparece HIPERCALCEMIA con PTH alta: hiperparatiroidismo terciario', 'Terciario persistente o secundario refractario: paratiroidectomia', 'Vigilar el hueso hambriento tras la cirugia']
    },
    {
      nombre: 'Osteomalacia y raquitismo del adulto',
      color: '#6b4a2e',
      definicion: 'Defecto de MINERALIZACION del hueso ya formado, por deficit de vitamina D, de calcio o de fosforo. Se distingue de la osteoporosis en que alli hay poco hueso normal y aqui hay hueso normal en cantidad pero mal mineralizado, blando y doloroso.',
      fisiopatologia: 'Sin calcitriol suficiente, la absorcion intestinal de calcio cae, la PTH sube para mantener la calcemia y elimina fosforo por el rinon. Con calcio y fosforo bajos, la matriz osteoide que el osteoblasto sigue produciendo no puede mineralizarse y se acumula: eso es la osteomalacia. En las formas por perdida renal de fosforo (raquitismo hipofosfatemico, osteomalacia oncogenica por exceso de factor de crecimiento fibroblastico 23) el mecanismo es la hipofosfatemia mantenida con vitamina D normal.',
      epidemiologia: 'Poco frecuente como enfermedad establecida en paises con alimentos fortificados, pero el deficit de vitamina D subyacente es muy prevalente. Es mas frecuente en ancianos institucionalizados, en personas con piel oscura y baja exposicion solar, y tras cirugia bariatrica.',
      factores_riesgo: ['Deficit grave y prolongado de vitamina D', 'Baja exposicion solar, institucionalizacion y vestimenta cubriente', 'Malabsorcion: celiaquia, cirugia bariatrica, insuficiencia pancreatica, colestasis', 'Enfermedad renal cronica y acidosis tubular renal', 'Anticonvulsivantes (fenitoina, fenobarbital) y antirretrovirales (tenofovir)', 'Tumores mesenquimales productores de factor de crecimiento fibroblastico 23', 'Intoxicacion por aluminio y por bisfosfonatos a dosis muy altas (raro)', 'Raquitismo hipofosfatemico ligado al X en la forma hereditaria'],
      clinica: 'Dolor oseo DIFUSO y sordo, sobre todo en pelvis, columna y costillas, que empeora con la carga y con la presion. Debilidad muscular PROXIMAL con dificultad para levantarse de una silla y marcha de pato. Fracturas por insuficiencia. En el nino, deformidades por afectacion del cartilago de crecimiento (raquitismo).',
      criterios_dx: 'Patron bioquimico: FOSFATASA ALCALINA ALTA con calcio y fosforo bajos o en el limite bajo, PTH alta y 25-hidroxivitamina D baja. Las zonas de Looser en la radiografia son muy sugestivas. La biopsia osea con doble marcaje de tetraciclinas es el patron de referencia pero casi nunca se necesita.',
      laboratorio: 'Calcio, fosforo, fosfatasa alcalina, PTH, 25-hidroxivitamina D, creatinina, magnesio y gasometria venosa. Fosfaturia y reabsorcion tubular de fosforo si se sospecha perdida renal. Factor de crecimiento fibroblastico 23 si se sospecha osteomalacia oncogenica.',
      imagen: 'Radiografia simple: zonas de Looser o pseudofracturas, bandas radiolucentes perpendiculares a la cortical en pelvis, femur proximal, escapula y costillas. Densitometria con densidad baja, que puede confundirse con osteoporosis. Gammagrafia osea con captacion en las pseudofracturas.',
      complementarios: 'Cribado de celiaquia y valoracion de malabsorcion. En la sospecha de osteomalacia oncogenica, imagen funcional para localizar un tumor mesenquimal a menudo diminuto.',
      dx_diferencial: 'OSTEOPOROSIS (donde calcio, fosforo y fosfatasa alcalina son normales), enfermedad de Paget, mieloma multiple, metastasis oseas, polimialgia reumatica y fibromialgia (por el dolor difuso y la debilidad), y miopatia de otra causa.',
      tx_medico: 'Corregir la causa: dieta, exposicion solar razonable, tratamiento de la malabsorcion y retirada de los farmacos implicados.',
      tx_farmacologico: 'REPOSICION de vitamina D a dosis de carga y despues de mantenimiento, con aporte adecuado de calcio. La respuesta es tipicamente espectacular: el dolor y la debilidad mejoran en semanas y la fosfatasa alcalina se normaliza en meses. En la malabsorcion hacen falta dosis mucho mayores o calcidiol. En las formas hipofosfatemicas, fosforo oral con calcitriol, y burosumab (anticuerpo contra el factor de crecimiento fibroblastico 23) en el raquitismo hipofosfatemico ligado al X y en la osteomalacia oncogenica no resecable.',
      tx_intervencionista: 'Reseccion del tumor mesenquimal en la osteomalacia oncogenica, que es curativa. Tratamiento quirurgico de las fracturas cuando proceda.',
      criterios_uci: 'No aplica salvo hipocalcemia grave con tetania.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la hipocalcemia al iniciar la reposicion en casos graves, por el consumo de calcio que produce la mineralizacion acelerada (un fenomeno analogo al hueso hambriento).',
      seguimiento_ambulatorio: 'Calcio, fosforo, fosfatasa alcalina y 25-hidroxivitamina D a los 3 y 6 meses. La fosfatasa alcalina es el mejor marcador de respuesta. Densitometria al ano, que suele mejorar de forma llamativa.',
      pronostico: 'Excelente cuando la causa es carencial: reversible por completo con reposicion. Las formas por perdida renal de fosforo requieren tratamiento cronico.',
      algoritmo: ['Dolor oseo difuso con debilidad proximal: sospechar osteomalacia', 'Pedir calcio, fosforo, fosfatasa alcalina, PTH y 25-hidroxivitamina D', 'Fosfatasa alcalina alta con PTH alta y vitamina D baja apoya el diagnostico', 'Buscar zonas de Looser en la radiografia', 'Investigar malabsorcion y revisar farmacos', 'Si la vitamina D es normal, medir fosfaturia y pensar en perdida renal', 'Reponer vitamina D con calcio y vigilar la respuesta clinica', 'Seguir la fosfatasa alcalina como marcador de respuesta', 'Sospechar osteomalacia oncogenica si no hay causa carencial']
    },
    {
      nombre: 'Enfermedad de Paget osea',
      color: '#5b4a86',
      definicion: 'Trastorno focal del remodelado oseo con osteoclastos gigantes hiperactivos y una reparacion desordenada posterior. Produce hueso aumentado de tamano pero estructuralmente debil, en una o varias localizaciones concretas, con calcio, fosforo y PTH NORMALES.',
      fisiopatologia: 'El proceso ocurre en tres fases: una LITICA inicial con resorcion intensa por osteoclastos anomalos y multinucleados; una MIXTA con formacion osea acelerada y desordenada; y una ESCLEROTICA final con hueso denso pero de arquitectura caotica, mas grande y mas fragil. Hay predisposicion genetica (mutaciones de SQSTM1 en una proporcion importante de los casos familiares) y se ha propuesto un desencadenante virico, no demostrado. La hipervascularizacion del hueso pagetico explica el aumento de temperatura local y, en la enfermedad extensa, la insuficiencia cardiaca de alto gasto.',
      epidemiologia: 'Afecta al 1 al 3% de los mayores de 55 anos en poblaciones de origen europeo, con predominio masculino leve. Su incidencia ha DISMINUIDO de forma marcada en las ultimas decadas por razones no aclaradas. Es rara en Asia y en Africa.',
      factores_riesgo: ['Edad mayor de 55 anos', 'Origen europeo, sobre todo britanico', 'Antecedente familiar (hasta el 15 al 30% de los casos)', 'Mutaciones del gen SQSTM1', 'Sexo masculino', 'Exposicion ambiental no aclarada (hipotesis virica no demostrada)'],
      clinica: 'ASINTOMATICA en la mayoria: se descubre por una fosfatasa alcalina alta o por una radiografia pedida por otro motivo. Cuando da sintomas: dolor oseo local y constante que no cede con el reposo, deformidad (tibia en sable, aumento del perimetro craneal), aumento de temperatura sobre el hueso afectado, hipoacusia si afecta al hueso temporal, fracturas, artrosis secundaria de la articulacion vecina y, en la enfermedad extensa, insuficiencia cardiaca de alto gasto. Los huesos mas afectados son pelvis, femur, columna lumbar, craneo y tibia.',
      criterios_dx: 'FOSFATASA ALCALINA elevada con calcio, fosforo y PTH NORMALES, junto con hallazgos radiologicos caracteristicos. La gammagrafia osea define la extension.',
      laboratorio: 'Fosfatasa alcalina total (marcador de actividad y de respuesta), calcio, fosforo, PTH y 25-hidroxivitamina D, que debe corregirse antes de tratar con bisfosfonatos. Comprobar el origen oseo de la fosfatasa alcalina.',
      imagen: 'Radiografia simple: engrosamiento cortical, patron trabecular grosero, aumento de TAMANO del hueso (que no ocurre en las metastasis y es muy caracteristico), lesiones liticas en llama en huesos largos y osteoporosis circunscrita en el craneo. GAMMAGRAFIA osea para definir la extension y detectar focos asintomaticos.',
      complementarios: 'Audiometria si hay afectacion craneal. Valoracion neurologica si hay afectacion vertebral o de la base del craneo.',
      dx_diferencial: 'Metastasis oseas blasticas (que NO aumentan el tamano del hueso), osteomalacia, hiperparatiroidismo, displasia fibrosa, mieloma y osteomielitis cronica.',
      tx_medico: 'Analgesia y fisioterapia. Aporte adecuado de calcio y vitamina D ANTES de iniciar un bisfosfonato, para evitar la hipocalcemia. La enfermedad asintomatica con fosfatasa alcalina poco elevada y en localizaciones sin riesgo puede solo vigilarse.',
      tx_farmacologico: 'ACIDO ZOLEDRONICO en dosis unica intravenosa, que es el tratamiento de eleccion: normaliza la fosfatasa alcalina en la mayoria de los pacientes y produce remisiones muy prolongadas. Alternativas orales: risedronato o alendronato. La indicacion principal es el DOLOR oseo pagetico; tambien se trata la enfermedad activa en localizaciones de riesgo (craneo, columna, huesos largos de carga, articulaciones vecinas) y antes de una cirugia sobre hueso pagetico, para reducir el sangrado.',
      tx_intervencionista: 'Cirugia ortopedica para fracturas, artroplastia por artrosis secundaria, osteotomia correctora de deformidades y descompresion neuroquirurgica en la afectacion de la base del craneo o vertebral.',
      criterios_uci: 'Excepcional: insuficiencia cardiaca de alto gasto en enfermedad muy extensa.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar hipocalcemia tras el acido zoledronico, sobre todo si el deficit de vitamina D no se corrigio. Reaccion de fase aguda en las 24 a 72 horas siguientes a la infusion, que se maneja con paracetamol.',
      seguimiento_ambulatorio: 'Fosfatasa alcalina a los 3 a 6 meses y despues anual: su nueva elevacion indica recidiva de actividad. Un dolor NUEVO y creciente en un hueso pagetico, sobre todo con masa de partes blandas, obliga a descartar transformacion sarcomatosa.',
      pronostico: 'Bueno: la mayoria queda asintomatica y la respuesta al acido zoledronico es duradera. La complicacion temida es el OSTEOSARCOMA sobre hueso pagetico, que ocurre en menos del 1% pero tiene muy mal pronostico.',
      algoritmo: ['Fosfatasa alcalina alta con calcio, fosforo y PTH normales: sospechar Paget', 'Confirmar el origen oseo de la fosfatasa alcalina', 'Radiografia de la zona sintomatica y gammagrafia osea para la extension', 'Corregir el deficit de vitamina D antes de tratar', 'Tratar si hay dolor pagetico o localizacion de riesgo', 'Acido zoledronico en dosis unica intravenosa como eleccion', 'Vigilar hipocalcemia y reaccion de fase aguda tras la infusion', 'Seguir la fosfatasa alcalina a los 3 a 6 meses y despues anual', 'Dolor nuevo y creciente con masa de partes blandas: descartar sarcoma']
    },
    {
      nombre: 'Crisis hipercalcemica',
      color: '#7a1f3d',
      definicion: 'Hipercalcemia grave, habitualmente por encima de 14 mg/dL de calcio corregido, con deterioro del nivel de conciencia, deshidratacion e insuficiencia renal. Es una urgencia metabolica y la unica situacion del tema que se trata antes de tener el diagnostico etiologico.',
      fisiopatologia: 'La hipercalcemia produce diabetes insipida nefrogenica al interferir con la accion de la vasopresina en el tubulo colector: el paciente orina y se deshidrata. La deshidratacion reduce el filtrado glomerular y con el la excrecion renal de calcio, lo que eleva aun mas la calcemia. Ese circulo vicioso es la razon de que la HIDRATACION sea la primera medida y no un simple soporte, y explica por que un paciente puede pasar de una hipercalcemia estable de meses a una crisis en pocos dias tras una gastroenteritis o un ingreso con reposo en cama.',
      epidemiologia: 'La causa mas frecuente en el hospital es la malignidad; en el ambulatorio, un hiperparatiroidismo primario descompensado por deshidratacion, inmovilizacion o farmacos. Mortalidad significativa si el diagnostico se retrasa.',
      factores_riesgo: ['Cancer con metastasis oseas o secrecion de PTHrP', 'Hiperparatiroidismo primario no tratado', 'Deshidratacion por cualquier causa', 'Inmovilizacion prolongada y reposo en cama', 'Tiazidas, litio, vitamina D o calcio en dosis altas', 'Insuficiencia renal previa', 'Sindrome de leche y alcalinos', 'Enfermedad granulomatosa activa'],
      clinica: 'Nauseas, vomitos, estrenimiento o ileo, poliuria con deshidratacion intensa, debilidad, confusion, somnolencia, estupor y coma. En el electrocardiograma, QT corto, bradicardia y en casos extremos bloqueo o asistolia. Puede haber pancreatitis y dolor abdominal que confunden con un abdomen agudo.',
      criterios_dx: 'Calcio corregido por encima de 14 mg/dL, o cifras menores con sintomas neurologicos, en un paciente con deshidratacion e insuficiencia renal. Se extrae PTH en la primera muestra, pero el tratamiento no espera al resultado.',
      laboratorio: 'Calcio corregido y ionico, PTH intacta, fosforo, magnesio, funcion renal, electrolitos, gasometria, PTHrP y proteinograma segun sospecha. Electrocardiograma.',
      imagen: 'Estudio dirigido a la causa una vez estabilizado el paciente: imagen oncologica, ecografia cervical, serie osea o tomografia por emision de positrones.',
      complementarios: 'Balance hidrico estricto, sondaje vesical si es preciso y monitorizacion cardiaca en la hipercalcemia grave.',
      dx_diferencial: 'Encefalopatia de otra causa, sepsis, deshidratacion por otro motivo, insuficiencia suprarrenal, uremia y abdomen agudo quirurgico.',
      tx_medico: 'HIDRATACION con suero salino isotonico como primera medida, a un ritmo de 200 a 300 mL por hora ajustado a la funcion cardiaca y renal, con objetivo de diuresis adecuada. Movilizacion precoz. Retirada de tiazidas, litio, calcio y vitamina D. Los diureticos de asa NO son tratamiento de rutina: solo se anaden si aparece sobrecarga de volumen tras hidratar.',
      tx_farmacologico: 'CALCITONINA subcutanea o intramuscular como puente: actua en 4 a 6 horas pero pierde eficacia por taquifilaxia a las 48 horas. BISFOSFONATO intravenoso (acido zoledronico) administrado pronto pese a que tarda 2 a 4 dias en hacer efecto, ajustado o evitado en la insuficiencia renal grave. DENOSUMAB si hay insuficiencia renal o refractariedad al bisfosfonato. GLUCOCORTICOIDES si el mecanismo es por calcitriol (linfoma, granulomatosis) o en el mieloma. Cinacalcet en el hiperparatiroidismo primario o el carcinoma paratiroideo.',
      tx_intervencionista: 'HEMODIALISIS con bano bajo en calcio si hay insuficiencia renal grave, insuficiencia cardiaca que impide la hidratacion o hipercalcemia refractaria con sintomas neurologicos. Paratiroidectomia urgente en la crisis por hiperparatiroidismo primario grave, una vez estabilizado.',
      criterios_uci: 'Alteracion del nivel de conciencia, arritmia, insuficiencia renal que exija dialisis o necesidad de monitorizacion estrecha durante la hidratacion intensa.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Calcio, funcion renal, electrolitos y balance hidrico seriados. Vigilar la HIPOCALCEMIA tardia por el bisfosfonato o el denosumab, sobre todo con deficit de vitamina D no corregido.',
      seguimiento_ambulatorio: 'Tratamiento definitivo de la causa: paratiroidectomia en el hiperparatiroidismo primario, tratamiento oncologico en la malignidad. Educacion sobre hidratacion y sobre los farmacos que hay que evitar.',
      pronostico: 'La hipercalcemia se controla en la mayoria de los casos. El pronostico global depende por completo de la causa: excelente en el hiperparatiroidismo primario operado, malo en la malignidad avanzada.',
      algoritmo: ['Calcio corregido por encima de 14, o menor con sintomas neurologicos', 'Extraer PTH en la primera muestra pero NO esperar el resultado', 'HIDRATAR con salino isotonico de inmediato', 'Retirar tiazidas, litio, calcio y vitamina D; movilizar al paciente', 'Calcitonina si hay que bajar el calcio en horas', 'Bisfosfonato intravenoso pronto, ajustado a la funcion renal', 'Denosumab si hay insuficiencia renal o refractariedad', 'Glucocorticoide si el mecanismo es por calcitriol o mieloma', 'Diureticos de asa solo si hay sobrecarga de volumen', 'Dialisis si hay fallo renal, fallo cardiaco o refractariedad']
    },
    {
      nombre: 'Sindrome de hueso hambriento',
      color: '#3f6b52',
      definicion: 'Hipocalcemia grave y prolongada que aparece tras corregir de forma brusca un hiperparatiroidismo de larga evolucion, por captacion masiva de calcio, fosforo y magnesio por un hueso que llevaba anos siendo desmineralizado. Es una complicacion previsible y por eso evitable en su gravedad.',
      fisiopatologia: 'Durante anos, el exceso de PTH ha mantenido un remodelado acelerado con predominio de la resorcion. Al retirar bruscamente ese estimulo (paratiroidectomia, o correccion de la causa en el secundario), la formacion osea queda sin oposicion y el hueso se comporta como un sumidero: capta calcio, fosforo y magnesio del plasma a gran velocidad. El resultado es hipocalcemia con HIPOFOSFATEMIA e hipomagnesemia, y ese fosforo bajo es lo que lo distingue del hipoparatiroidismo posquirurgico, donde el fosforo esta ALTO.',
      epidemiologia: 'Aparece en el 4 al 13% de las paratiroidectomias por hiperparatiroidismo primario y en una proporcion mucho mayor, hasta el 20 al 70%, tras paratiroidectomia por hiperparatiroidismo secundario en dialisis. Es mas frecuente y mas grave cuanto mayores eran la PTH, la fosfatasa alcalina y la afectacion osea previas.',
      factores_riesgo: ['PTH preoperatoria muy elevada', 'FOSFATASA ALCALINA preoperatoria alta (el mejor predictor)', 'Enfermedad osea evidente: osteitis fibrosa, fracturas, dolor oseo', 'Adenoma paratiroideo de gran tamano', 'Edad avanzada', 'Hiperparatiroidismo secundario en dialisis', 'Deficit de vitamina D no corregido antes de la cirugia', 'Calcemia preoperatoria muy elevada'],
      clinica: 'Hipocalcemia sintomatica desde las primeras 24 a 72 horas y prolongada durante dias o semanas: parestesias, calambres, signos de Chvostek y de Trousseau, y en casos graves tetania, convulsiones y QT largo. A diferencia del hipoparatiroidismo posquirurgico, requiere dosis muy altas de calcio y se prolonga mucho mas.',
      criterios_dx: 'Hipocalcemia posoperatoria con FOSFORO BAJO y magnesio bajo, con PTH normal o alta (la glandula restante funciona). El fosforo bajo es la clave que lo separa del hipoparatiroidismo posquirurgico, donde esta alto.',
      laboratorio: 'Calcio corregido o ionico, fosforo, MAGNESIO, PTH, fosfatasa alcalina y funcion renal, con controles seriados frecuentes en los primeros dias.',
      imagen: 'No indicada de forma especifica. La imagen preoperatoria de afectacion osea ayuda a anticipar el riesgo.',
      complementarios: 'Medicion de fosfatasa alcalina y PTH PREOPERATORIAS para estratificar el riesgo y preparar al paciente. Electrocardiograma con vigilancia del QT.',
      dx_diferencial: 'HIPOPARATIROIDISMO POSQUIRURGICO (fosforo ALTO, PTH baja), hipomagnesemia aislada, hipocalcemia por deficit de vitamina D no corregido y alcalosis respiratoria por hiperventilacion en el paciente ansioso.',
      tx_medico: 'PREVENCION: corregir el deficit de vitamina D antes de la cirugia y anticipar el riesgo en el paciente con fosfatasa alcalina alta. Monitorizacion estrecha de calcio en el posoperatorio inmediato.',
      tx_farmacologico: 'CALCIO en dosis altas, oral e intravenoso segun la gravedad, junto con CALCITRIOL, que aumenta la absorcion intestinal y es imprescindible. CORREGIR EL MAGNESIO, sin lo cual el calcio no responde. Puede requerir dosis muy superiores a las habituales y mantenerse durante semanas o meses hasta que el hueso se remineraliza.',
      tx_intervencionista: 'Ninguno especifico.',
      criterios_uci: 'Tetania grave, convulsiones, laringoespasmo o arritmia por QT largo.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Calcio cada 6 a 12 horas en las primeras 48 a 72 horas, con fosforo y magnesio diarios. Monitorizacion del QT. El alta se demora hasta estabilizar la calcemia con tratamiento oral.',
      seguimiento_ambulatorio: 'Descenso progresivo y lento de las dosis de calcio y calcitriol, con controles frecuentes: retirarlos demasiado pronto produce recaidas. La duracion es de semanas a meses.',
      pronostico: 'Se resuelve por completo cuando el hueso se remineraliza, y su reconocimiento precoz evita complicaciones. La confusion con el hipoparatiroidismo posquirurgico lleva a tratamientos innecesariamente prolongados o a alta prematura.',
      algoritmo: ['Estratificar el riesgo antes de operar con PTH y fosfatasa alcalina', 'Corregir el deficit de vitamina D antes de la cirugia', 'Calcio seriado cada 6 a 12 horas tras la paratiroidectomia', 'Hipocalcemia con FOSFORO BAJO: hueso hambriento', 'Hipocalcemia con fosforo ALTO y PTH baja: hipoparatiroidismo', 'Calcio en dosis altas junto con calcitriol', 'Corregir siempre el magnesio', 'Monitorizar el QT y mantener el tratamiento semanas o meses', 'Retirar las dosis de forma progresiva con controles frecuentes']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'De todo este tema, lo que de verdad llega al hospital son dos situaciones: la hipercalcemia grave, que casi siempre es maligna, y la hipocalcemia posoperatoria, que casi siempre es de cirugia cervical. Ambas se resuelven con unas pocas reglas, y la mayor parte de los errores viene de saltarse el primer paso: corregir el calcio y mirar la PTH y el fosforo juntos.',
    parametros: ['Corregir SIEMPRE el calcio por la albumina, o medir calcio ionico en el critico', 'Interpretar la PTH junto al calcio: lo que importa es si es apropiada, no si esta en rango', 'El fosforo desempata: bajo en el hiperparatiroidismo primario, alto en el hipoparatiroidismo', 'Ante toda hipocalcemia, medir y corregir el MAGNESIO', 'Hipercalcemia grave: HIDRATAR con salino isotonico antes que nada', 'Bisfosfonato intravenoso pronto, sabiendo que tarda 2 a 4 dias; calcitonina como puente', 'Diureticos de asa solo si hay sobrecarga de volumen, nunca de rutina', 'Retirar tiazidas, litio, calcio y vitamina D, y movilizar al paciente', 'Tras paratiroidectomia, distinguir hueso hambriento (fosforo BAJO) de hipoparatiroidismo (fosforo ALTO)', 'Antes de operar una hipercalcemia, haber medido la CALCIURIA para no operar una hipercalcemia hipocalciurica familiar'],
    criterios_uci_general: 'Crisis hipercalcemica con alteracion del nivel de conciencia, arritmia o insuficiencia renal que exija dialisis; tetania grave con laringoespasmo o convulsiones; y QT muy prolongado con arritmia ventricular.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'El hiperparatiroidismo TERCIARIO es un problema clasico del postrasplante renal: la paratiroides autonoma persiste tras recuperarse la funcion renal y produce hipercalcemia que puede danar el injerto, por lo que a menudo requiere paratiroidectomia.',
    prevencion: 'Primaria: aporte adecuado de calcio y de vitamina D a lo largo de la vida, con atencion especial al anciano institucionalizado, a la persona con piel oscura y baja exposicion solar y al paciente con malabsorcion o cirugia bariatrica. Secundaria: medir calcio corregido en toda analitica general, que es como se detecta la mayoria de los hiperparatiroidismos primarios; control del fosforo en la enfermedad renal cronica para frenar el hiperparatiroidismo secundario; y correccion del deficit de vitamina D antes de cualquier cirugia paratiroidea o de un bisfosfonato potente. Terciaria: prevencion de la deshidratacion y de la inmovilizacion en el paciente con hipercalcemia conocida, que son los desencadenantes habituales de la crisis.'
  }
};

export const compCites = {
  'Hiperparatiroidismo primario': [1, 2, 3, 19],
  'Hipercalcemia de la malignidad': [7, 8],
  'Hipoparatiroidismo e hipocalcemia': [5, 6, 9],
  'Hiperparatiroidismo secundario y terciario': [11, 4],
  'Osteomalacia y raquitismo del adulto': [12, 13, 17],
  'Enfermedad de Paget osea': [14, 15],
  'Crisis hipercalcemica': [7, 8, 1],
  'Sindrome de hueso hambriento': [16, 1]
};
export const estigmasTitulo = 'Signos clinicos del calcio alterado, en orden de utilidad';
export const estigmas = [
  { s: 'Signo de Trousseau', p: 'Muy especifico', photo: null, desc: 'Espasmo carpopedal (flexion de la muneca y de las metacarpofalangicas con extension de los dedos y aduccion del pulgar) al inflar el manguito de presion por encima de la sistolica durante 3 minutos. Es mas especifico que el de Chvostek y su positividad apoya con fuerza la hipocalcemia.' },
  { s: 'Signo de Chvostek', p: 'Poco especifico', photo: null, desc: 'Contraccion de la musculatura facial ipsilateral al percutir sobre el nervio facial por delante del pabellon auricular. Es positivo hasta en el 10% de las personas sanas y negativo en cerca de un tercio de los hipocalcemicos, de modo que su valor aislado es limitado.' },
  { s: 'Parestesias peribucales y en los pulpejos', p: 'Precoz', photo: null, desc: 'Suele ser el primer sintoma de la hipocalcemia posquirurgica y aparece antes que los signos exploratorios. Su aparicion en las primeras 24 horas tras una tiroidectomia obliga a medir calcio de inmediato.' },
  { s: 'QT largo en el electrocardiograma', p: 'Marcador de gravedad', photo: null, desc: 'La hipocalcemia alarga el segmento ST y con el el QT, con riesgo de torsion de puntas. Es una herramienta rapida de gravedad a pie de cama y obliga a monitorizacion si es marcado.' },
  { s: 'Poliuria y polidipsia con deshidratacion', p: 'Frecuente en hipercalcemia', photo: null, desc: 'La hipercalcemia interfiere con la accion de la vasopresina en el tubulo colector y produce una diabetes insipida nefrogenica. La deshidratacion resultante reduce la excrecion renal de calcio y cierra el circulo vicioso que lleva a la crisis.' },
  { s: 'Confusion, somnolencia y estupor', p: 'Marcador de gravedad', photo: null, desc: 'Los tonos psiquicos de la regla clasica. En la hipercalcemia grave marcan la indicacion de tratamiento urgente y de ingreso, y su presencia justifica tratar aunque la cifra de calcio no llegue a 14 mg/dL.' },
  { s: 'Litiasis renal de repeticion', p: '~20% del hiperparatiroidismo', photo: null, desc: 'Una de las piedras de la regla clasica y criterio quirurgico del hiperparatiroidismo primario aunque sea asintomatica. Justifica pedir imagen renal a todo paciente con hipercalcemia y PTH alta.' },
  { s: 'Dolor oseo difuso con debilidad proximal', p: 'Osteomalacia', photo: null, desc: 'La combinacion de dolor oseo sordo que empeora con la carga y dificultad para levantarse de una silla o subir escaleras es muy sugestiva. Se confunde con frecuencia con polimialgia reumatica o fibromialgia, y se aclara con una fosfatasa alcalina alta y una vitamina D baja.' },
  { s: 'Aumento del perimetro craneal e hipoacusia', p: 'Paget craneal', photo: null, desc: 'El paciente refiere que le aprieta el sombrero. La hipoacusia por afectacion del hueso temporal es la complicacion neurologica mas frecuente del Paget craneal y justifica la audiometria.' },
  { s: 'Hueso caliente a la palpacion', p: 'Paget activo', photo: null, desc: 'El hueso pagetico esta hipervascularizado y su temperatura local es mayor que la del hueso vecino. En la enfermedad muy extensa, ese aumento del flujo puede llegar a producir insuficiencia cardiaca de alto gasto.' },
  { s: 'Tibia en sable y deformidad de huesos largos', p: 'Paget avanzado', photo: null, desc: 'El hueso pagetico es mas grande pero estructuralmente debil, y se deforma con la carga. El aumento de TAMANO del hueso es lo que lo distingue de una metastasis blastica en la radiografia.' },
  { s: 'Marcha de pato', p: 'Osteomalacia y raquitismo', photo: null, desc: 'Marcha de base ancha y balanceo lateral por debilidad de la musculatura pelvica. Es un signo de miopatia proximal, no de dolor articular, y mejora de forma llamativa a las pocas semanas de reponer la vitamina D.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Correccion del calcio por la albumina (calculadora disponible)': [9],
  'Gravedad de la hipercalcemia': [7, 8],
  'Mapa de PTH frente a calcio (calculadora disponible)': [1, 9],
  'Criterios quirurgicos del hiperparatiroidismo primario': [1, 19],
  'Patron bioquimico de las enfermedades oseas metabolicas': [12, 14]
};
export const escalaCalc = {
  'Correccion del calcio por la albumina (calculadora disponible)': 'calcio-corregido',
  'Gravedad de la hipercalcemia': 'calcio-corregido',
  'Mapa de PTH frente a calcio (calculadora disponible)': 'pth-calcio'
};
export const compGroups = [
  { name: 'Trastornos del calcio y de la paratiroides', items: ['Hiperparatiroidismo primario', 'Hipercalcemia de la malignidad', 'Hipoparatiroidismo e hipocalcemia', 'Hiperparatiroidismo secundario y terciario'] },
  { name: 'Enfermedades oseas metabolicas', items: ['Osteomalacia y raquitismo del adulto', 'Enfermedad de Paget osea'] },
  { name: 'Complicaciones agudas', items: ['Crisis hipercalcemica', 'Sindrome de hueso hambriento'] }
];
export const complicacionesIntro = 'Las cuatro primeras fichas son los trastornos del calcio ordenados por el mapa de la Figura 1: las dos hipercalcemias que suman mas del 90% de los casos (hiperparatiroidismo primario y malignidad, que separa la PTH), el hipoparatiroidismo, y el hiperparatiroidismo secundario y terciario, que es la respuesta de la paratiroides a un problema de fuera. Las dos siguientes son las enfermedades oseas metabolicas que se confunden entre si y con la osteoporosis, y que se separan con cuatro analiticas. Las dos ultimas son las complicaciones agudas: la crisis hipercalcemica, que se trata antes de saber la causa, y el sindrome de hueso hambriento, que se distingue del hipoparatiroidismo posquirurgico por el fosforo.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Clasificaciones' },
  { id: 'complicaciones', label: 'Trastornos y complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'CALCIO Y PTH', color: '#2f7a6b', target: 'definicion' },
  branches: [
    { title: 'CALCIO ALTO', sub: 'La PTH separa las dos causas', color: '#8c3a34', target: 'diagnostico', leaves: [
      { title: 'PTH alta o normal', sub: 'Hiperparatiroidismo primario', color: '#2f7a6b', target: 'complicaciones' },
      { title: 'PTH suprimida', sub: 'Malignidad', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Calciuria BAJA', sub: 'Hipocalciurica familiar: no operar', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Calcio mayor de 14', sub: 'Crisis: hidratar primero', color: '#7a1f3d', target: 'complicaciones' }
    ] },
    { title: 'CALCIO BAJO', sub: 'Mirar la PTH y el magnesio', color: '#4a6fa5', target: 'diagnostico', leaves: [
      { title: 'PTH baja o normal', sub: 'Hipoparatiroidismo', color: '#4a6fa5', target: 'complicaciones' },
      { title: 'PTH alta', sub: 'Vitamina D o rinon', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Magnesio bajo', sub: 'Hipocalcemia refractaria', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Fosforo BAJO tras cirugia', sub: 'Hueso hambriento', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'HUESO', sub: 'Cuatro analiticas los separan', color: '#6b4a2e', target: 'clasificacion', leaves: [
      { title: 'Todo normal', sub: 'Osteoporosis', color: '#7a6a55', target: 'clasificacion' },
      { title: 'Fosfatasa alta, PTH alta', sub: 'Osteomalacia', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Fosfatasa muy alta, resto normal', sub: 'Paget', color: '#5b4a86', target: 'complicaciones' },
      { title: 'Calcio alto, fosforo bajo', sub: 'Hiperparatiroidismo', color: '#2f7a6b', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 9], no_invasivos: [1, 10], imagen: [14, 12] };
export const clasificacionCite = [1, 9, 14];
export const seguimientoCite = [1, 8];
