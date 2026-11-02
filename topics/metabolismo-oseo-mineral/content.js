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
  titulo: 'Metabolismo Óseo y Mineral',
  subtitulo: 'Módulo 47 · Medicina Interna',
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
  <div style="font-weight:700;color:var(--accent-fg);margin-bottom:4px;">El circuito: tres órganos y dos hormonas</div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:7px;">
    <div style="flex:1;min-width:150px;border:1px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f12;">
      <div style="font-weight:700;color:#8a6a1f;">Paratiroides</div>
      <div style="color:var(--ink-dim);">El <strong>receptor sensor de calcio</strong> mide el calcio iónico y frena la secreción de PTH cuando sube. Si el calcio baja, la PTH se libera en minutos: es el termostato del sistema.</div>
    </div>
    <div style="flex:1;min-width:150px;border:1px solid #8c3a34;border-radius:8px;padding:6px 9px;background:#8c3a3412;">
      <div style="font-weight:700;color:#8c3a34;">Hueso</div>
      <div style="color:var(--ink-dim);">La PTH activa de forma indirecta al osteoclasto y <strong>libera calcio y fósforo</strong>. El efecto es rápido y es el que sostiene la calcemia a corto plazo.</div>
    </div>
    <div style="flex:1;min-width:150px;border:1px solid #3d5a73;border-radius:8px;padding:6px 9px;background:#3d5a7312;">
      <div style="font-weight:700;color:#3d5a73;">Rinon</div>
      <div style="color:var(--ink-dim);">La PTH <strong>reabsorbe calcio</strong>, <strong>elimina fósforo</strong> (por eso el fósforo baja en el hiperparatiroidismo primario) y activa la <strong>1-alfa-hidroxilasa</strong>, que convierte la 25-hidroxivitamina D en calcitriol.</div>
    </div>
    <div style="flex:1;min-width:150px;border:1px solid #3f6b52;border-radius:8px;padding:6px 9px;background:#3f6b5212;">
      <div style="font-weight:700;color:#3f6b52;">Intestino</div>
      <div style="color:var(--ink-dim);">El <strong>calcitriol</strong> aumenta la absorción de calcio Y de fósforo. Es el brazo lento del sistema y la razón de que el déficit de vitamina D suba la PTH sin bajar necesariamente el calcio.</div>
    </div>
  </div>
  <div style="font-weight:700;color:var(--accent-fg);margin:8px 0 4px;">El mapa que resuelve casi todo: PTH frente a calcio</div>
  <div style="display:grid;grid-template-columns:80px 1fr 1fr;gap:5px;">
    <div></div>
    <div style="text-align:center;font-weight:700;color:#8c3a34;border:1px solid #8c3a34;border-radius:6px;padding:3px;background:#8c3a3418;">CALCIO ALTO</div>
    <div style="text-align:center;font-weight:700;color:#4a6fa5;border:1px solid #4a6fa5;border-radius:6px;padding:3px;background:#4a6fa518;">CALCIO BAJO</div>

    <div style="display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;border:1px solid #8a6a1f;border-radius:6px;padding:3px;background:#8a6a1f18;">PTH alta o normal-alta</div>
    <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:var(--ink);">Hiperparatiroidismo PRIMARIO</strong> (fósforo bajo, calciuria normal o alta).<br><strong style="color:var(--ink);">Terciario</strong> si hay enfermedad renal crónica de larga evolución.<br><strong style="color:var(--ink);">Hipercalcemia hipocalciurica familiar</strong> si la <strong>calciuria es BAJA</strong>: es el gran imitador y NO se opera.<br>También: litio, tiazidas.</div>
    <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:var(--ink);">La paratiroides responde bien: el problema esta fuera.</strong><br>Déficit de vitamina D, malabsorción, enfermedad renal crónica (hiperparatiroidismo SECUNDARIO), pancreatitis aguda, pseudohipoparatiroidismo (resistencia a la PTH), hiperfosfatemia aguda.</div>

    <div style="display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;border:1px solid #5b4a86;border-radius:6px;padding:3px;background:#5b4a8618;">PTH baja o suprimida</div>
    <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:var(--ink);">Hipercalcemia independiente de la PTH.</strong><br><strong>Malignidad</strong> (PTHrP, metástasis líticas, mieloma), que es la causa más frecuente en el hospital.<br>Exceso de vitamina D o de calcitriol (granulomatosis, linfoma), tirotoxicosis, inmovilización, síndrome de leche y alcalinos, intoxicación por vitamina A.</div>
    <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:var(--ink);">HIPOPARATIROIDISMO.</strong><br>Posquirúrgico (la causa más frecuente con diferencia), autoinmune, infiltrativo, síndrome de DiGeorge.<br><strong style="color:#8c3a34;">Y siempre: HIPOMAGNESEMIA</strong>, que bloquea la secreción y la acción de la PTH y hace la hipocalcemia refractaria hasta que se corrige.</div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid var(--line);border-radius:8px;background:var(--panel2);color:var(--ink-dim);">
    <strong style="color:var(--accent-fg);">Tres reglas para leer el mapa.</strong> Primera: hay que <strong>corregir el calcio por la albúmina</strong> (o medir calcio iónico) antes de nada, porque una hipoalbuminemia hace parecer baja una calcemia normal. Segunda: lo que importa no es si la PTH esta dentro del rango, sino si es <strong>apropiada para ese calcio</strong>: una PTH "normal" con calcio alto es inapropiada y significa hiperparatiroidismo. Y tercera: el <strong>fósforo</strong> desempata; baja en el hiperparatiroidismo primario y alta en el hipoparatiroidismo y en la enfermedad renal.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El calcio del plasma se mantiene dentro de un margen estrechisimo porque de el dependen la excitabilidad de la membrana, la contracción muscular y la coagulación. Tres órganos y dos hormonas sostienen ese equilibrio, y casi todas las enfermedades del tema se entienden como el fallo de una pieza concreta del circuito. La buena noticia es que <strong>dos determinaciones, calcio y PTH, resuelven la mayor parte del diagnóstico</strong>, siempre que se sepan leer juntas.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El circuito y el mapa que lo resume.</strong></p>
${figBlock('Figura 1', 'Eje calcio-PTH-vitamina D y el mapa de PTH frente a calcio', ejeCalcioHtml)}
<p style="margin:0 0 12px;">La paratiroides mide el calcio iónico con el <strong>receptor sensor de calcio</strong> y ajusta la PTH en minutos. La PTH actúa en el hueso (libera calcio y fósforo), en el rinon (reabsorbe calcio, elimina fósforo y activa la 1-alfa-hidroxilasa) y, a través del <strong>calcitriol</strong>, en el intestino (absorbe calcio y fósforo). De ahi salen las dos huellas analíticas que más ayudan: en el <strong>hiperparatiroidismo primario</strong> el calcio sube y el <strong>fósforo baja</strong>, mientras que en el <strong>hipoparatiroidismo</strong> el calcio baja y el fósforo sube.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Antes de interpretar nada: corregir el calcio.</strong></p>
<p style="margin:0 0 12px;">Cerca de la mitad del calcio plasmático circula unido a la albúmina y no es biológicamente activo. Una hipoalbuminemia, tan frecuente en el paciente hospitalizado, hace parecer baja una calcemia normal. Se corrige sumando <strong>0.8 mg/dL por cada gramo de albúmina por debajo de 4 g/dL</strong>, o se mide directamente el <strong>calcio iónico</strong>, que es lo más fiable en el crítico y ante alteraciones del pH (la alcalosis aumenta la unión a la albúmina y baja el calcio iónico sin cambiar el total: eso es lo que produce la tetania de la hiperventilación). La calculadora del tema hace esa corrección y clasifica la gravedad.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La pregunta clave no es si la PTH es normal, sino si es apropiada.</strong></p>
<p style="margin:0 0 12px;">Ese es el error conceptual más repetido del tema. Con una calcemia alta, la PTH debería estar <strong>suprimida</strong>: si esta dentro del rango normal, es <strong>inapropiadamente normal</strong> y significa hiperparatiroidismo. Al revés, con una calcemia baja la PTH debería estar alta: si es normal o baja, hay hipoparatiroidismo. Y una PTH alta con calcio bajo no es una enfermedad de la paratiroides sino su respuesta correcta a un problema de fuera, casi siempre <strong>déficit de vitamina D o enfermedad renal crónica</strong>.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Las dos hipercalcemias que hay que separar primero.</strong></p>
<p style="margin:0 0 12px;">Más del <strong>90%</strong> de las hipercalcemias son hiperparatiroidismo primario o malignidad, y se distinguen por la PTH. El <strong>hiperparatiroidismo primario</strong> es el paciente ambulatorio con hipercalcemia leve y crónica, a menudo hallada por casualidad. La <strong>hipercalcemia de la malignidad</strong> es el paciente hospitalizado, con hipercalcemia más alta y de instauración rápida, PTH suprimida y un cáncer casi siempre ya conocido. Y hay un tercer diagnóstico que no se puede olvidar porque su tratamiento es <strong>no hacer nada</strong>: la <strong>hipercalcemia hipocalciurica familiar</strong>, que imita al hiperparatiroidismo primario pero cursa con calciuria baja y no mejora con paratiroidectomia.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La hipocalcemia y su trampa.</strong></p>
<p style="margin:0 0 12px;">La causa más frecuente de hipoparatiroidismo es la <strong>cirugía cervical</strong>. Sus manifestaciones son de irritabilidad neuromuscular: parestesias peribucales y en los dedos, calambres, signos de <strong>Chvostek</strong> y de <strong>Trousseau</strong>, y en casos graves tetania, laringoespasmo, convulsiones y QT largo. Y hay una regla que ahorra muchas horas de frustracion: ante una hipocalcemia que no responde al calcio y al calcitriol, hay que medir y corregir el <strong>magnesio</strong>, porque su déficit bloquea a la vez la secreción y la acción de la PTH.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Las tres enfermedades óseas del tema, y en que se diferencian.</strong></p>
<p style="margin:0 0 12px;">Conviene tenerlas separadas porque se confunden. La <strong>osteoporosis</strong> es hueso normal en cantidad insuficiente, con calcio, fósforo y fosfatasa alcalina normales (tiene tema propio). La <strong>osteomalacia</strong> es hueso mal mineralizado por déficit de vitamina D o de fósforo, con <strong>fosfatasa alcalina alta</strong>, calcio y fósforo bajos, PTH alta y dolor óseo difuso con debilidad proximal. Y la <strong>enfermedad de Paget</strong> es hueso remodelado de forma caótica en zonas concretas, con fosfatasa alcalina muy alta pero <strong>calcio, fósforo y PTH normales</strong>, y a menudo asintomática.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No interpretar una calcemia sin corregirla por la albúmina. No operar una hipercalcemia sin haber medido la <strong>calciuria</strong>, porque la hipercalcemia hipocalciurica familiar se opera sin beneficio. No dar calcio intravenoso en la hipercalcemia por malignidad sin hidratar antes. No usar diuréticos de asa como tratamiento de rutina de la hipercalcemia: solo tienen sentido si hay sobrecarga de volumen. No perseguir una PTH normal en la enfermedad renal crónica avanzada, donde cierto grado de elevación es adaptativo. Y no olvidar el magnesio ante una hipocalcemia que no responde.</p>`;

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
      tituloB: 'Hipocalcemia y enfermedad ósea metabólica',
      compensada: 'La hipercalcemia leve y crónica suele ser ASINTOMÁTICA y se descubre en una analítica de rutina. Cuando da síntomas, se resumen en la regla clásica de huesos, piedras, quejidos abdominales y tonos psíquicos: dolor óseo, litiasis renal y nefrocalcinosis, estrenimiento, náuseas, epigastralgia y pancreatitis, y astenia, depresión, dificultad de concentración e irritabilidad. Además, poliuria y polidipsia por diabetes insípida nefrogenica, y acortamiento del QT.',
      descompensada: 'HIPOCALCEMIA: irritabilidad neuromuscular con parestesias peribucales y en los dedos, calambres, signo de Chvostek (contracción facial al percutir el nervio facial) y signo de Trousseau (espasmo carpopedal al inflar el manguito por encima de la sistólica 3 minutos, más específico), y en casos graves tetania, laringoespasmo, broncoespasmo, convulsiones, QT largo e insuficiencia cardiaca. OSTEOMALACIA: dolor óseo difuso, debilidad proximal con marcha de pato y fracturas por insuficiencia. PAGET: dolor óseo local, deformidad, aumento de temperatura sobre el hueso e hipoacusia si afecta al cráneo.'
    },
    laboratorio: [
      { prueba: 'Calcio total con albúmina, o calcio iónico (calculadora disponible)', utilidad: 'PRIMER paso siempre. Cerca de la mitad del calcio circula unido a la albúmina: se corrige sumando 0.8 mg/dL por cada gramo de albúmina por debajo de 4 g/dL. El calcio iónico es preferible en el crítico y ante alteraciones del pH o de las proteínas.' },
      { prueba: 'Hormona paratiroidea intacta (calculadora disponible)', utilidad: 'Segunda determinación imprescindible, interpretada SIEMPRE junto al calcio. Lo relevante no es si esta dentro del rango sino si es apropiada: una PTH normal con calcio alto es inapropiada y significa hiperparatiroidismo.' },
      { prueba: 'Fosforo', utilidad: 'Desempata. Bajo en el hiperparatiroidismo primario y en la osteomalacia por pérdida renal; alto en el hipoparatiroidismo, en la enfermedad renal crónica y en la hiperfosfatemia aguda por lisis tumoral o rabdomiólisis.' },
      { prueba: 'Magnesio', utilidad: 'Obligado en TODA hipocalcemia. Su déficit bloquea a la vez la secreción y la acción de la PTH, y hace la hipocalcemia refractaria mientras no se corrija. Causas frecuentes: alcoholismo, diuréticos, inhibidores de la bomba de protones, diarrea y cisplatino.' },
      { prueba: '25-hidroxivitamina D', utilidad: 'Marca el depósito corporal de vitamina D. Su déficit es la causa más frecuente de hiperparatiroidismo secundario y hay que corregirlo antes de interpretar una PTH alta o de plantear cirugía paratiroidea.' },
      { prueba: 'Calcio en orina de 24 horas y excreción fraccional de calcio', utilidad: 'CLAVE para no operar por error. Una calciuria baja con excreción fraccional de calcio por debajo de 0.01 sugiere hipercalcemia hipocalciurica familiar, que imita al hiperparatiroidismo primario y NO se beneficia de la paratiroidectomia.' },
      { prueba: 'Fosfatasa alcalina', utilidad: 'Normal en la osteoporosis; alta en la osteomalacia y MUY alta en la enfermedad de Paget, donde es el marcador de actividad y de respuesta al tratamiento. Conviene comprobar su origen óseo con la fracción ósea o con la gamma-glutamil transferasa.' },
      { prueba: 'Creatinina con filtrado glomerular estimado', utilidad: 'Define el hiperparatiroidismo secundario de la enfermedad renal, condiciona el criterio quirúrgico en el primario (filtrado por debajo de 60) y determina la seguridad de los bisfosfonatos en la hipercalcemia.' },
      { prueba: 'Péptido relacionado con la PTH (PTHrP), proteinograma y calcitriol', utilidad: 'En la hipercalcemia con PTH suprimida: PTHrP alto indica hipercalcemia humoral maligna; el proteinograma con cadenas ligeras descarta mieloma; y un calcitriol alto orienta a granulomatosis o linfoma.' }
    ],
    no_invasivos: [
      { metodo: 'Electrocardiograma', interpretacion: 'La hipercalcemia acorta el QT y puede producir bradiarritmias; la hipocalcemia lo alarga y predispone a torsión de puntas. Es una herramienta rápida de gravedad a pie de cama.', cutoff: 'Sin umbrales fijos; el QT corregido guía la urgencia' },
      { metodo: 'Signos de Chvostek y de Trousseau', interpretacion: 'Chvostek: contracción de la musculatura facial al percutir sobre el nervio facial por delante del pabellon auricular; poco específico, positivo hasta en el 10% de las personas sanas. Trousseau: espasmo carpopedal al inflar el manguito por encima de la sistólica durante 3 minutos; más específico.', cutoff: 'Signos clínicos, sin umbral numérico' },
      { metodo: 'Densitometría ósea con radio distal al 33%', interpretacion: 'En el hiperparatiroidismo primario, la PTH afecta sobre todo al hueso CORTICAL, de modo que el radio al 33% es el sitio más informativo y no debe omitirse. Es uno de los criterios quirúrgicos.', cutoff: 'Puntuación T de -2.5 o menor en cualquier sitio: criterio de cirugía' },
      { metodo: 'Gammagrafía con sestamibi y ecografía cervical', interpretacion: 'Sirven para LOCALIZAR el adenoma antes de la cirugía, NO para diagnosticar: el diagnóstico de hiperparatiroidismo primario es bioquímico. Una localización positiva permite la paratiroidectomia mínimamente invasiva.', cutoff: 'Su negatividad no descarta el diagnóstico ni contraindica la cirugía' },
      { metodo: 'Excreción fraccional de calcio', interpretacion: 'Se calcula con calcio y creatinina en suero y en orina. Separa el hiperparatiroidismo primario de la hipercalcemia hipocalciurica familiar, que es el error diagnóstico más costoso del tema.', cutoff: 'Por debajo de 0.01 sugiere hipercalcemia hipocalciurica familiar; por encima de 0.02 apoya hiperparatiroidismo primario' }
    ],
    imagen: [
      { modalidad: 'Radiografía simple', hallazgos: 'En la osteomalacia, las zonas de Looser o pseudofracturas (bandas radiolucentes perpendiculares a la cortical en pelvis, fémur proximal, escapula y costillas). En el Paget, engrosamiento cortical, patrón trabecular grosero, aumento de tamano del hueso y deformidad. En el hiperparatiroidismo avanzado, resorción subperiostica de las falanges y cráneo en sal y pimienta.' },
      { modalidad: 'Gammagrafía ósea con difosfonatos', hallazgos: 'Prueba de elección para definir la EXTENSIÓN de la enfermedad de Paget: muestra la captación intensa de las lesiones activas y detecta focos asintomáticos. No sirve para valorar la actividad, que se sigue con la fosfatasa alcalina.' },
      { modalidad: 'Ecografía renal o tomografía sin contraste', hallazgos: 'Busca litiasis y nefrocalcinosis en el hiperparatiroidismo primario, que son criterio quirúrgico aunque el paciente este asintomático.' },
      { modalidad: 'Tomografía de cuatro dimensiones y sestamibi con tomografía de emision', hallazgos: 'Localización de adenomas paratiroideos ectópicos o en la reintervención. Útiles cuando la ecografía y el sestamibi convencionales son discordantes o negativos.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `El tema se ordena en dos ejes. El primero es la <strong>dirección del calcio</strong> (hipercalcemia frente a hipocalcemia) cruzada con la <strong>PTH</strong>, lo que genera los cuatro cuadrantes que resuelven casi todo el diagnóstico. El segundo es la <strong>gravedad</strong> y la velocidad de instauración, que determinan la urgencia: una hipercalcemia de 13 mg/dL instaurada en días es mucho más peligrosa que una de 11.5 mg/dL de anos de evolución. A ellos se anade la clasificación de las enfermedades óseas metabólicas por su patrón bioquímico.`,
    escalas: [
      { nombre: 'Corrección del calcio por la albúmina (calculadora disponible)', componentes: 'Calcio total medido y albúmina sérica.', formula: 'Calcio corregido = calcio medido + 0.8 x (4.0 menos albúmina en g/dL).', interpretacion: 'Imprescindible antes de interpretar cualquier calcemia. En el crítico, en alteraciones del pH o con proteínas muy alteradas, se prefiere medir directamente el calcio iónico, que es el biológicamente activo.' },
      { nombre: 'Gravedad de la hipercalcemia', componentes: 'Calcio corregido y velocidad de instauración.', formula: 'Clasificación por rangos de calcio corregido.', interpretacion: 'Leve por debajo de 12 mg/dL (a menudo asintomática, manejo ambulatorio); moderada de 12 a 14 (síntomas según la velocidad); grave por encima de 14 (urgencia, hidratación intensa y bisfosfonato o denosumab). La VELOCIDAD pesa tanto como la cifra.' },
      { nombre: 'Mapa de PTH frente a calcio (calculadora disponible)', componentes: 'Calcio corregido y PTH intacta, con fósforo, 25-hidroxivitamina D y calciuria como desempate.', formula: 'Cuatro cuadrantes según la dirección de cada uno.', interpretacion: 'Calcio alto con PTH alta o inapropiadamente normal: hiperparatiroidismo primario o terciario, o hipercalcemia hipocalciurica familiar si la calciuria es baja. Calcio alto con PTH suprimida: malignidad y otras causas independientes de la PTH. Calcio bajo con PTH alta: respuesta apropiada a un problema externo. Calcio bajo con PTH baja o normal: hipoparatiroidismo, y siempre descartar hipomagnesemia.' },
      { nombre: 'Criterios quirúrgicos del hiperparatiroidismo primario', componentes: 'Edad, calcemia, función renal, calciuria, densitometría, fractura vertebral y litiasis o nefrocalcinosis.', formula: 'Cumplir CUALQUIERA de los criterios indica paratiroidectomia.', interpretacion: 'Calcio más de 1 mg/dL por encima del limite alto; filtrado glomerular por debajo de 60 mL/min/1.73 m2; litiasis o nefrocalcinosis por imagen, o calciuria superior a 400 mg en 24 horas con riesgo litogeno; puntuación T de -2.5 o menor o fractura vertebral; y edad menor de 50 anos. Además, la cirugía se ofrece a todo paciente sintomático.' },
      { nombre: 'Patrón bioquímico de las enfermedades óseas metabólicas', componentes: 'Calcio, fósforo, fosfatasa alcalina y PTH.', formula: 'Comparación de los cuatro parámetros entre si.', interpretacion: 'OSTEOPOROSIS: todo normal. OSTEOMALACIA: calcio y fósforo bajos o en el limite, fosfatasa alcalina alta y PTH alta. PAGET: fosfatasa alcalina muy alta con calcio, fósforo y PTH NORMALES. HIPERPARATIROIDISMO PRIMARIO: calcio alto, fósforo bajo, PTH alta. Este cuadro de cuatro columnas resuelve la mayor parte de las preguntas del tema.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Hiperparatiroidismo primario',
      color: '#2f7a6b',
      definicion: 'Secreción autónoma y excesiva de PTH por una o más glándulas paratiroides, con hipercalcemia y PTH alta o inapropiadamente normal. Es la causa más frecuente de hipercalcemia en el paciente ambulatorio y la tercera enfermedad endocrina en frecuencia.',
      fisiopatologia: 'En el 80 al 85% de los casos hay un <strong>adenoma único</strong>, en el 10 al 15% hiperplasia de las cuatro glándulas y en menos del 1% un carcinoma paratiroideo. La glándula pierde la sensibilidad normal del receptor sensor de calcio y sigue secretando PTH pese a la hipercalcemia. El exceso de PTH libera calcio del hueso (con preferencia del hueso cortical), reabsorbe calcio en el rinon pero aumenta la carga filtrada total, y elimina fósforo: de ahi el patrón de calcio alto con fósforo bajo. Ver la Figura 1 de Definición.',
      epidemiologia: 'Prevalencia de 1 a 4 por 1000, con predominio femenino de 3 a 1 y pico tras la menopausia. Su presentación ha cambiado por completo: en la era del calcio automatizado, la mayoría de los casos son ASINTOMÁTICOS y se descubren por casualidad, mientras que la forma clásica con osteitis fibrosa quística es hoy excepcional.',
      factores_riesgo: ['Sexo femenino y edad posmenopáusica', 'Radiación cervical previa', 'Tratamiento prolongado con LITIO', 'Neoplasia endocrina múltiple tipo 1 y tipo 2A', 'Síndrome de hiperparatiroidismo con tumor mandibular', 'Déficit crónico de vitamina D o de calcio (estímulo mantenido)', 'Antecedente familiar de hipercalcemia', 'Enfermedad renal crónica de larga evolución (para la forma terciaria)'],
      clinica: 'Asintomático en la mayoría. Cuando da síntomas: litiasis renal de repetición, dolor óseo y fracturas, estrenimiento, epigastralgia, pancreatitis, poliuria y polidipsia, y síntomas neuropsiquiátricos inespecíficos (astenia, depresión, dificultad de concentración) que a menudo solo se reconocen retrospectivamente al mejorar tras la cirugía.',
      criterios_dx: 'BIOQUÍMICO: hipercalcemia (calcio corregido o iónico) con PTH elevada o inapropiadamente normal, tras excluir litio y tiazidas y tras medir la CALCIURIA para descartar hipercalcemia hipocalciurica familiar. Existe una forma NORMOCALCEMICA, con calcio normal y PTH alta, que exige haber descartado antes todas las causas de hiperparatiroidismo secundario.',
      laboratorio: 'Calcio corregido o iónico, PTH intacta, fósforo, magnesio, 25-hidroxivitamina D, creatinina con filtrado y calcio en orina de 24 horas con excreción fraccional de calcio. Corregir el déficit de vitamina D antes de interpretar la PTH.',
      imagen: 'Densitometría de tres sitios INCLUYENDO el radio distal al 33%, porque la PTH afecta sobre todo al hueso cortical. Imagen renal (ecografía o tomografía sin contraste) para buscar litiasis o nefrocalcinosis silentes. Ecografía cervical y sestamibi solo para LOCALIZAR antes de operar.',
      complementarios: 'Radiografía lateral de columna o evaluación vertebral por densitometría, porque una fractura vertebral silente es criterio quirúrgico. Estudio genético si hay antecedente familiar, edad joven o afectación multiglandular.',
      dx_diferencial: 'HIPERCALCEMIA HIPOCALCIURICA FAMILIAR (el imitador que no se debe operar), hiperparatiroidismo terciario, hipercalcemia por litio o por tiazidas, hiperparatiroidismo secundario a déficit de vitamina D con calcio en el limite alto, y carcinoma paratiroideo ante calcio muy alto con PTH muy elevada y masa cervical palpable.',
      tx_medico: 'En el paciente que no cumple criterios quirúrgicos: hidratación adecuada, evitar la deshidratación y la inmovilización prolongada, aporte de calcio dietético NORMAL (restringirlo estimula más la PTH), corrección del déficit de vitamina D con prudencia y retirada de tiazidas y de litio cuando sea posible. Seguimiento anual con calcio y función renal y densitometría cada 1 a 2 anos.',
      tx_farmacologico: 'CINACALCET si hay hipercalcemia sintomática y el paciente no es candidato a cirugía: baja la calcemia actuando sobre el receptor sensor de calcio, pero NO mejora la densidad ósea. Bisfosfonatos o denosumab si el problema dominante es la pérdida ósea: mejoran la densidad pero no bajan el calcio. Es decir, cada fármaco resuelve una mitad del problema y ninguno sustituye a la cirugía.',
      tx_intervencionista: 'PARATIROIDECTOMIA, que es el único tratamiento curativo, con tasas de éxito superiores al 95% en manos expertas. Criterios: calcio más de 1 mg/dL por encima del limite alto, filtrado por debajo de 60, litiasis o nefrocalcinosis o calciuria mayor de 400 mg en 24 horas, puntuación T de -2.5 o menor o fractura vertebral, y edad menor de 50 anos. También a todo paciente sintomático. Abordaje mínimamente invasivo si la localización preoperatoria es concordante, con medición intraoperatoria de PTH.',
      criterios_uci: 'Crisis hipercalcemica con calcio por encima de 14 mg/dL, alteración del nivel de conciencia o arritmia.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Solo en la crisis hipercalcemica o en el posoperatorio. Tras la paratiroidectomia, vigilar la hipocalcemia y el síndrome de hueso hambriento, que tiene ficha propia.',
      seguimiento_ambulatorio: 'Sin cirugía: calcio y creatinina anuales, densitometría de tres sitios cada 1 a 2 anos y valoración periódica de la aparición de criterios quirúrgicos. Tras la cirugía: calcio a las 24 horas y a las 2 semanas, y después control anual; la densidad ósea mejora de forma progresiva durante anos.',
      pronostico: 'Excelente tras la cirugía, con normalización del calcio, recuperación de densidad ósea y reducción de la litiasis. Sin cirugía, la mayoría de los casos leves permanece estable durante anos, aunque una proporción desarrolla criterios quirúrgicos con el tiempo.',
      algoritmo: ['Hipercalcemia: corregir por albúmina o medir calcio iónico', 'Medir PTH: alta o inapropiadamente normal orienta al primario', 'Excluir litio y tiazidas', 'Medir CALCIURIA y excreción fraccional de calcio', 'Excreción fraccional por debajo de 0.01: sospechar hipercalcemia hipocalciurica familiar y NO operar', 'Corregir el déficit de vitamina D antes de decidir', 'Buscar criterios quirúrgicos: calcio, filtrado, rinon, hueso y edad', 'Si hay criterios o síntomas: localizar y paratiroidectomia', 'Si no: seguimiento anual con calcio, creatinina y densitometría periódica']
    },
    {
      nombre: 'Hipercalcemia de la malignidad',
      color: '#8c3a34',
      definicion: 'Hipercalcemia con PTH SUPRIMIDA en un paciente con cáncer. Es la causa más frecuente de hipercalcemia en el paciente hospitalizado y un marcador de mal pronóstico: su aparición suele indicar enfermedad avanzada.',
      fisiopatologia: 'Cuatro mecanismos. El más frecuente, en el 80%, es la <strong>hipercalcemia humoral maligna</strong> por secreción tumoral de <strong>PTHrP</strong>, que actúa sobre el mismo receptor que la PTH y reproduce su efecto (calcio alto, fósforo bajo) pero con la PTH propia suprimida; típica del carcinoma escamoso de pulmón, del renal, del de mama y del de cabeza y cuello. El segundo es la <strong>osteolisis local</strong> por metástasis o por mieloma, mediada por citocinas y por RANKL. El tercero es la producción tumoral de <strong>calcitriol</strong>, propia de los linfomas. Y el cuarto, raro, la secreción ectópica de PTH verdadera.',
      epidemiologia: 'Aparece en el 20 al 30% de los pacientes con cáncer a lo largo de su enfermedad. La mediana de supervivencia tras su aparición es corta, de semanas a pocos meses, aunque ha mejorado con los tratamientos oncológicos actuales.',
      factores_riesgo: ['Carcinoma escamoso de pulmón, de cabeza y cuello y de esófago', 'Cáncer de mama con metástasis óseas', 'Mieloma múltiple', 'Carcinoma renal', 'Linfomas (mecanismo por calcitriol)', 'Enfermedad avanzada y alta carga tumoral', 'Deshidratación e inmovilización', 'Fármacos que agravan: tiazidas, litio, vitamina D, calcio'],
      clinica: 'Instauración más rápida y calcemias más altas que en el hiperparatiroidismo primario, de modo que casi siempre es sintomática: náuseas, vómitos, estrenimiento, poliuria con deshidratación, debilidad, confusión, somnolencia y, en casos graves, coma. La deshidratación cierra un círculo vicioso porque reduce la excreción renal de calcio y agrava la hipercalcemia.',
      criterios_dx: 'Hipercalcemia con PTH suprimida en un paciente con cáncer conocido o sospechado. PTHrP elevado confirma el mecanismo humoral; calcitriol alto orienta a linfoma o granulomatosis; y un proteinograma con componente monoclonal, a mieloma.',
      laboratorio: 'Calcio corregido o iónico, PTH intacta (suprimida), fósforo, función renal, PTHrP, 25-hidroxivitamina D y calcitriol, proteinograma con inmunofijación y cadenas ligeras libres, y fosfatasa alcalina.',
      imagen: 'Estudio de extensión según el tumor. Serie ósea o tomografía por emision de positrones si se sospecha mieloma o metástasis líticas.',
      complementarios: 'Revisión de los fármacos que agravan la hipercalcemia. Valoración de objetivos de tratamiento, porque la hipercalcemia maligna es con frecuencia un punto de inflexión en la trayectoria del paciente.',
      dx_diferencial: 'Hiperparatiroidismo primario coincidente (que no es raro y se distingue por la PTH), inmovilización prolongada, hipercalcemia por granulomatosis, síndrome de leche y alcalinos, tirotoxicosis e insuficiencia suprarrenal.',
      tx_medico: 'HIDRATACIÓN con suero salino isotónico, que es la primera medida y la más importante: restaura el volumen y aumenta la excreción renal de calcio. Movilización precoz. Retirada de los fármacos que agravan. Los diuréticos de asa NO son tratamiento de rutina y solo se anaden si aparece sobrecarga de volumen.',
      tx_farmacologico: 'BISFOSFONATO intravenoso (ácido zoledrónico como elección, o pamidronato) tras iniciar la hidratación: tarda de 2 a 4 días en hacer efecto, por lo que se administra pronto. DENOSUMAB si hay insuficiencia renal que contraindica el bisfosfonato o si la hipercalcemia es refractaria a el. CALCITONINA como puente en las primeras 24 a 48 horas, porque actúa en horas pero pierde eficacia por taquifilaxia. GLUCOCORTICOIDES si el mecanismo es por calcitriol (linfoma, granulomatosis) o en el mieloma.',
      tx_intervencionista: 'Hemodiálisis con bano bajo en calcio en la hipercalcemia grave con insuficiencia renal o insuficiencia cardiaca que impide la hidratación. Tratamiento oncológico del tumor, que es lo único que resuelve el problema de fondo.',
      criterios_uci: 'Calcio por encima de 14 mg/dL con alteración del nivel de conciencia, arritmia o insuficiencia renal que exija diálisis.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Calcio, función renal y electrolitos seriados. Balance hídrico estricto. Vigilar la hipocalcemia tardía tras el bisfosfonato o el denosumab, sobre todo si hay déficit de vitamina D no corregido.',
      seguimiento_ambulatorio: 'Control de calcio según la respuesta y la evolución oncológica. La recidiva es frecuente y suele indicar progresión tumoral.',
      pronostico: 'Malo en términos oncológicos: su aparición marca enfermedad avanzada. La hipercalcemia en si se controla en la mayoría de los casos, pero recidiva si el tumor progresa.',
      algoritmo: ['Hipercalcemia con PTH suprimida: pensar en malignidad', 'Medir PTHrP, calcitriol y proteinograma para el mecanismo', 'Iniciar HIDRATACIÓN con salino isotónico de inmediato', 'Retirar fármacos que agravan y movilizar al paciente', 'Anadir bisfosfonato intravenoso pronto (tarda 2 a 4 días)', 'Calcitonina como puente si hay que bajar el calcio en horas', 'Denosumab si hay insuficiencia renal o refractariedad', 'Glucocorticoide si el mecanismo es por calcitriol o mieloma', 'Diuréticos de asa solo si hay sobrecarga de volumen', 'Diálisis en la hipercalcemia grave con fallo renal o cardiaco']
    },
    {
      nombre: 'Hipoparatiroidismo e hipocalcemia',
      color: '#4a6fa5',
      definicion: 'Déficit de PTH con hipocalcemia e hiperfosfatemia. Su causa más frecuente con diferencia es la CIRUGÍA cervical. Es una de las pocas enfermedades endocrinas que todavía se trata sustituyendo el efecto de la hormona y no la hormona misma.',
      fisiopatologia: 'Sin PTH, el rinon deja de reabsorber calcio y de eliminar fósforo, y no activa la 1-alfa-hidroxilasa, de modo que falta calcitriol y cae la absorción intestinal de calcio. El resultado es hipocalcemia con hiperfosfatemia y calcitriol bajo. Además, al faltar el efecto calciurico de la PTH, cualquier intento de normalizar el calcio sérico produce HIPERCALCIURIA, que es la razón por la que el objetivo terapéutico es dejar el calcio en el limite bajo y no en el medio del rango.',
      epidemiologia: 'Hipoparatiroidismo posquirúrgico permanente en el 1 al 3% de las tiroidectomías totales, mucho más frecuente el transitorio. Las formas autoinmunes, aisladas o dentro del síndrome poliglandular autoinmune tipo 1, y las genéticas son minoritarias.',
      factores_riesgo: ['Tiroidectomía total, sobre todo con disección ganglionar central', 'Paratiroidectomia y cirugía cervical repetida', 'Cirujano de bajo volumen', 'Síndrome poliglandular autoinmune tipo 1', 'Síndrome de DiGeorge (deleccion 22q11)', 'Enfermedades infiltrativas: hemocromatosis, enfermedad de Wilson, metástasis', 'Radioterapia cervical', 'HIPOMAGNESEMIA, que produce un hipoparatiroidismo funcional y reversible'],
      clinica: 'Irritabilidad neuromuscular: parestesias peribucales y en los dedos, calambres, signos de Chvostek y de Trousseau. En casos graves, tetania, laringoespasmo, broncoespasmo, convulsiones, QT largo con riesgo de torsión de puntas e insuficiencia cardiaca. En las formas crónicas: calcificaciones de los ganglios basales, cataratas, piel seca, unas frágiles y alteraciones dentarias.',
      criterios_dx: 'Hipocalcemia con PTH baja o inapropiadamente normal, con fósforo alto y magnesio normal. La normalidad del magnesio es imprescindible para el diagnóstico, porque su déficit produce un cuadro idéntico pero reversible.',
      laboratorio: 'Calcio corregido o iónico, PTH intacta, fósforo, MAGNESIO, 25-hidroxivitamina D, creatinina y calcio en orina de 24 horas para vigilar la hipercalciuria del tratamiento.',
      imagen: 'Tomografía craneal si hay clínica extrapiramidal o convulsiones: busca calcificaciones de los ganglios basales. Ecografía renal periódica en el tratamiento crónico, por el riesgo de nefrocalcinosis y litiasis.',
      complementarios: 'Electrocardiograma con medición del QT. Valoración oftalmológica periódica por las cataratas. En las formas no quirúrgicas, estudio autoinmune y genético.',
      dx_diferencial: 'HIPOMAGNESEMIA (la primera a descartar siempre), déficit de vitamina D, enfermedad renal crónica, pseudohipoparatiroidismo (resistencia a la PTH, con PTH ALTA), pancreatitis aguda, sepsis, rabdomiólisis y síndrome de lisis tumoral, alcalosis respiratoria por hiperventilación y transfusión masiva con citrato.',
      tx_medico: 'Aporte de calcio dietético. Vigilancia de la calciuria y de la función renal. Educación sobre los síntomas de alarma y el ajuste ante cuadros intercurrentes.',
      tx_farmacologico: 'CALCIO ORAL con CALCITRIOL, que es el pilar del tratamiento crónico: se usa calcitriol y no colecalciferol porque falta la 1-alfa-hidroxilasa renal. El OBJETIVO es un calcio en el LIMITE BAJO del rango normal y asintomático, no en el medio, para no provocar hipercalciuria y nefrocalcinosis. Se pueden anadir tiazidas, que reducen la calciuria. En la hipocalcemia aguda sintomática: gluconato cálcico intravenoso diluido y en perfusión. La PTH recombinante se reserva a casos de mal control con dosis muy altas de calcio y calcitriol.',
      tx_intervencionista: 'Autotrasplante de tejido paratiroideo criopreservado en casos seleccionados tras cirugía, poco disponible.',
      criterios_uci: 'Tetania grave con laringoespasmo, convulsiones, QT muy prolongado con arritmia o insuficiencia cardiaca por hipocalcemia.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Calcio seriado, monitorización del QT y perfusión de calcio si hay síntomas graves. CORREGIR SIEMPRE el magnesio: sin ello, el calcio no responde.',
      seguimiento_ambulatorio: 'Calcio, fósforo, magnesio, creatinina y calcio en orina de 24 horas cada 6 a 12 meses. Ecografía renal periódica. A los 6 a 12 meses de la cirugía se define si el hipoparatiroidismo es permanente.',
      pronostico: 'La mayoría de los casos posquirúrgicos es transitoria. El hipoparatiroidismo permanente es controlable pero conlleva una carga terapéutica alta y riesgo acumulado de nefrocalcinosis y de calcificaciones cerebrales.',
      algoritmo: ['Hipocalcemia: corregir por albúmina o medir calcio iónico', 'Medir MAGNESIO siempre y corregirlo si esta bajo', 'Medir PTH: baja o inapropiadamente normal indica hipoparatiroidismo', 'PTH alta con calcio bajo: buscar la causa fuera de la paratiroides', 'Síntomas graves o QT largo: gluconato cálcico intravenoso diluido', 'Tratamiento crónico con calcio oral y CALCITRIOL', 'Objetivo: calcio en el limite BAJO y paciente asintomático', 'Vigilar calciuria y función renal; anadir tiazida si hay hipercalciuria', 'Reevaluar a los 6 a 12 meses antes de etiquetar de permanente']
    },
    {
      nombre: 'Hiperparatiroidismo secundario y terciario',
      color: '#8a6a1f',
      definicion: 'Elevación de la PTH como RESPUESTA a un estímulo crónico (secundario), que con el tiempo puede volverse autónoma e hipercalcemica (terciario). El escenario dominante es la enfermedad renal crónica, y el otro es el déficit de vitamina D.',
      fisiopatologia: 'En la enfermedad renal crónica confluyen tres estímulos: la RETENCIÓN DE FÓSFORO, el descenso del calcitriol por pérdida de 1-alfa-hidroxilasa y la elevación del factor de crecimiento fibroblastico 23. La paratiroides se hipertrofia para mantener el calcio y acaba desarrollando áreas nodulares con menos receptores sensores de calcio y de vitamina D: llegado ese punto, la secreción se hace autónoma y aparece hipercalcemia, que es el hiperparatiroidismo TERCIARIO. En el déficit de vitamina D el mecanismo es más simple: baja la absorción intestinal de calcio y la PTH sube para compensar, con calcemia normal o baja.',
      epidemiologia: 'Prácticamente universal en la enfermedad renal crónica avanzada y en diálisis. El déficit de vitamina D afecta a una proporción muy alta de la población general, sobre todo en el anciano institucionalizado y en latitudes altas.',
      factores_riesgo: ['Enfermedad renal crónica en estadios avanzados y diálisis', 'Déficit de vitamina D por baja exposición solar o baja ingesta', 'Malabsorción: celiaquía, cirugía bariátrica, insuficiencia pancreática', 'Edad avanzada e institucionalización', 'Obesidad (secuestro de vitamina D en el tejido adiposo)', 'Fármacos: anticonvulsivantes, glucocorticoides, colestiramina', 'Piel oscura y uso sistemático de fotoprotección', 'Hipercalciuria idiopática'],
      clinica: 'El secundario suele ser asintomático y detectarse por analítica. En la enfermedad renal avanzada aparecen dolor óseo, prurito, debilidad, calcificaciones vasculares y, en casos extremos, calcifilaxis. El terciario se manifiesta por la hipercalcemia y sus síntomas.',
      criterios_dx: 'SECUNDARIO: PTH elevada con calcio normal o bajo y una causa identificable (filtrado glomerular reducido, 25-hidroxivitamina D baja, malabsorción). TERCIARIO: PTH elevada con HIPERCALCEMIA en un paciente con enfermedad renal crónica de larga evolución, a menudo tras el trasplante renal.',
      laboratorio: 'Calcio, fósforo, PTH, 25-hidroxivitamina D, fosfatasa alcalina, creatinina con filtrado y bicarbonato. En la enfermedad renal, seguimiento de la tendencia más que de valores aislados.',
      imagen: 'Radiografía si se sospecha osteitis fibrosa. Valoración de calcificaciones vasculares. Ecografía y sestamibi si se plantea paratiroidectomia en el terciario.',
      complementarios: 'Valoración nefrologica conjunta. Revisión de la dieta y de los quelantes del fósforo.',
      dx_diferencial: 'Hiperparatiroidismo primario normocalcemico (que exige haber descartado todas las causas de secundario), hiperparatiroidismo primario coincidente con enfermedad renal, y pseudohipoparatiroidismo.',
      tx_medico: 'Corregir la causa. En el déficit de vitamina D, reposición con colecalciferol hasta alcanzar 25-hidroxivitamina D de 30 ng/mL o más, con aporte adecuado de calcio dietético. En la enfermedad renal crónica: control del fósforo con dieta y quelantes, preferentemente no cálcicos, y corrección de la acidosis metabólica.',
      tx_farmacologico: 'En la enfermedad renal crónica: quelantes del fósforo, análogos de la vitamina D (calcitriol, paricalcitol) y CALCIMIMETICOS (cinacalcet, etelcalcetida) según el nivel de PTH, calcio y fósforo. Objetivo: no normalizar la PTH, porque cierto grado de elevación es ADAPTATIVO y una supresión excesiva produce enfermedad ósea adinamica; se busca mantenerla en un rango de 2 a 9 veces el limite alto en diálisis.',
      tx_intervencionista: 'PARATIROIDECTOMIA en el hiperparatiroidismo terciario con hipercalcemia persistente, en el secundario grave refractario al tratamiento médico, y ante calcifilaxis o prurito incoercible. Habitualmente subtotal o total con autotrasplante.',
      criterios_uci: 'Calcifilaxis con sepsis, o crisis hipercalcemica en el terciario.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Control de calcio, fósforo y PTH. Tras la paratiroidectomia, riesgo alto de síndrome de hueso hambriento, que tiene ficha propia.',
      seguimiento_ambulatorio: 'Seguimiento conjunto con nefrología. En el déficit de vitamina D corregido, la PTH suele normalizarse en meses; si no lo hace, replantear un hiperparatiroidismo primario normocalcemico.',
      pronostico: 'El secundario por déficit de vitamina D es reversible. El de la enfermedad renal crónica es progresivo y contribuye a la morbilidad cardiovascular por calcificaciones vasculares.',
      algoritmo: ['PTH alta con calcio normal o bajo: pensar en secundario', 'Medir 25-hidroxivitamina D y filtrado glomerular', 'Corregir el déficit de vitamina D y reevaluar en meses', 'En la enfermedad renal, controlar el fósforo con dieta y quelantes', 'Anadir análogos de vitamina D o calcimimeticos según PTH, calcio y fósforo', 'No perseguir una PTH normal: la supresión excesiva da hueso adinámico', 'Si aparece HIPERCALCEMIA con PTH alta: hiperparatiroidismo terciario', 'Terciario persistente o secundario refractario: paratiroidectomia', 'Vigilar el hueso hambriento tras la cirugía']
    },
    {
      nombre: 'Osteomalacia y raquitismo del adulto',
      color: '#6b4a2e',
      definicion: 'Defecto de MINERALIZACION del hueso ya formado, por déficit de vitamina D, de calcio o de fósforo. Se distingue de la osteoporosis en que alli hay poco hueso normal y aquí hay hueso normal en cantidad pero mal mineralizado, blando y doloroso.',
      fisiopatologia: 'Sin calcitriol suficiente, la absorción intestinal de calcio cae, la PTH sube para mantener la calcemia y elimina fósforo por el rinon. Con calcio y fósforo bajos, la matriz osteoide que el osteoblasto sigue produciendo no puede mineralizarse y se acumula: eso es la osteomalacia. En las formas por pérdida renal de fósforo (raquitismo hipofosfatemico, osteomalacia oncogenica por exceso de factor de crecimiento fibroblastico 23) el mecanismo es la hipofosfatemia mantenida con vitamina D normal.',
      epidemiologia: 'Poco frecuente como enfermedad establecida en países con alimentos fortificados, pero el déficit de vitamina D subyacente es muy prevalente. Es más frecuente en ancianos institucionalizados, en personas con piel oscura y baja exposición solar, y tras cirugía bariátrica.',
      factores_riesgo: ['Déficit grave y prolongado de vitamina D', 'Baja exposición solar, institucionalización y vestimenta cubriente', 'Malabsorción: celiaquía, cirugía bariátrica, insuficiencia pancreática, colestasis', 'Enfermedad renal crónica y acidosis tubular renal', 'Anticonvulsivantes (fenitoína, fenobarbital) y antirretrovirales (tenofovir)', 'Tumores mesenquimales productores de factor de crecimiento fibroblastico 23', 'Intoxicación por aluminio y por bisfosfonatos a dosis muy altas (raro)', 'Raquitismo hipofosfatemico ligado al X en la forma hereditaria'],
      clinica: 'Dolor óseo DIFUSO y sordo, sobre todo en pelvis, columna y costillas, que empeora con la carga y con la presión. Debilidad muscular PROXIMAL con dificultad para levantarse de una silla y marcha de pato. Fracturas por insuficiencia. En el nino, deformidades por afectación del cartílago de crecimiento (raquitismo).',
      criterios_dx: 'Patrón bioquímico: FOSFATASA ALCALINA ALTA con calcio y fósforo bajos o en el limite bajo, PTH alta y 25-hidroxivitamina D baja. Las zonas de Looser en la radiografía son muy sugestivas. La biopsia ósea con doble marcaje de tetraciclinas es el patrón de referencia pero casi nunca se necesita.',
      laboratorio: 'Calcio, fósforo, fosfatasa alcalina, PTH, 25-hidroxivitamina D, creatinina, magnesio y gasometría venosa. Fosfaturia y reabsorción tubular de fósforo si se sospecha pérdida renal. Factor de crecimiento fibroblastico 23 si se sospecha osteomalacia oncogenica.',
      imagen: 'Radiografía simple: zonas de Looser o pseudofracturas, bandas radiolucentes perpendiculares a la cortical en pelvis, fémur proximal, escapula y costillas. Densitometría con densidad baja, que puede confundirse con osteoporosis. Gammagrafía ósea con captación en las pseudofracturas.',
      complementarios: 'Cribado de celiaquía y valoración de malabsorción. En la sospecha de osteomalacia oncogenica, imagen funcional para localizar un tumor mesenquimal a menudo diminuto.',
      dx_diferencial: 'OSTEOPOROSIS (donde calcio, fósforo y fosfatasa alcalina son normales), enfermedad de Paget, mieloma múltiple, metástasis óseas, polimialgia reumática y fibromialgia (por el dolor difuso y la debilidad), y miopatía de otra causa.',
      tx_medico: 'Corregir la causa: dieta, exposición solar razonable, tratamiento de la malabsorción y retirada de los fármacos implicados.',
      tx_farmacologico: 'REPOSICIÓN de vitamina D a dosis de carga y después de mantenimiento, con aporte adecuado de calcio. La respuesta es típicamente espectacular: el dolor y la debilidad mejoran en semanas y la fosfatasa alcalina se normaliza en meses. En la malabsorción hacen falta dosis mucho mayores o calcidiol. En las formas hipofosfatémicas, fósforo oral con calcitriol, y burosumab (anticuerpo contra el factor de crecimiento fibroblastico 23) en el raquitismo hipofosfatemico ligado al X y en la osteomalacia oncogenica no resecable.',
      tx_intervencionista: 'Resección del tumor mesenquimal en la osteomalacia oncogenica, que es curativa. Tratamiento quirúrgico de las fracturas cuando proceda.',
      criterios_uci: 'No aplica salvo hipocalcemia grave con tetania.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar la hipocalcemia al iniciar la reposición en casos graves, por el consumo de calcio que produce la mineralizacion acelerada (un fenómeno análogo al hueso hambriento).',
      seguimiento_ambulatorio: 'Calcio, fósforo, fosfatasa alcalina y 25-hidroxivitamina D a los 3 y 6 meses. La fosfatasa alcalina es el mejor marcador de respuesta. Densitometría al ano, que suele mejorar de forma llamativa.',
      pronostico: 'Excelente cuando la causa es carencial: reversible por completo con reposición. Las formas por pérdida renal de fósforo requieren tratamiento crónico.',
      algoritmo: ['Dolor óseo difuso con debilidad proximal: sospechar osteomalacia', 'Pedir calcio, fósforo, fosfatasa alcalina, PTH y 25-hidroxivitamina D', 'Fosfatasa alcalina alta con PTH alta y vitamina D baja apoya el diagnóstico', 'Buscar zonas de Looser en la radiografía', 'Investigar malabsorción y revisar fármacos', 'Si la vitamina D es normal, medir fosfaturia y pensar en pérdida renal', 'Reponer vitamina D con calcio y vigilar la respuesta clínica', 'Seguir la fosfatasa alcalina como marcador de respuesta', 'Sospechar osteomalacia oncogenica si no hay causa carencial']
    },
    {
      nombre: 'Enfermedad de Paget ósea',
      color: '#5b4a86',
      definicion: 'Trastorno focal del remodelado óseo con osteoclastos gigantes hiperactivos y una reparación desordenada posterior. Produce hueso aumentado de tamano pero estructuralmente débil, en una o varias localizaciones concretas, con calcio, fósforo y PTH NORMALES.',
      fisiopatologia: 'El proceso ocurre en tres fases: una LÍTICA inicial con resorción intensa por osteoclastos anómalos y multinucleados; una MIXTA con formación ósea acelerada y desordenada; y una ESCLEROTICA final con hueso denso pero de arquitectura caótica, más grande y más frágil. Hay predisposición genética (mutaciones de SQSTM1 en una proporción importante de los casos familiares) y se ha propuesto un desencadenante virico, no demostrado. La hipervascularización del hueso pagetico explica el aumento de temperatura local y, en la enfermedad extensa, la insuficiencia cardiaca de alto gasto.',
      epidemiologia: 'Afecta al 1 al 3% de los mayores de 55 anos en poblaciones de origen europeo, con predominio masculino leve. Su incidencia ha DISMINUIDO de forma marcada en las últimas décadas por razones no aclaradas. Es rara en Asia y en África.',
      factores_riesgo: ['Edad mayor de 55 anos', 'Origen europeo, sobre todo britanico', 'Antecedente familiar (hasta el 15 al 30% de los casos)', 'Mutaciones del gen SQSTM1', 'Sexo masculino', 'Exposición ambiental no aclarada (hipótesis virica no demostrada)'],
      clinica: 'ASINTOMÁTICA en la mayoría: se descubre por una fosfatasa alcalina alta o por una radiografía pedida por otro motivo. Cuando da síntomas: dolor óseo local y constante que no cede con el reposo, deformidad (tibia en sable, aumento del perímetro craneal), aumento de temperatura sobre el hueso afectado, hipoacusia si afecta al hueso temporal, fracturas, artrosis secundaria de la articulación vecina y, en la enfermedad extensa, insuficiencia cardiaca de alto gasto. Los huesos más afectados son pelvis, fémur, columna lumbar, cráneo y tibia.',
      criterios_dx: 'FOSFATASA ALCALINA elevada con calcio, fósforo y PTH NORMALES, junto con hallazgos radiológicos característicos. La gammagrafía ósea define la extensión.',
      laboratorio: 'Fosfatasa alcalina total (marcador de actividad y de respuesta), calcio, fósforo, PTH y 25-hidroxivitamina D, que debe corregirse antes de tratar con bisfosfonatos. Comprobar el origen óseo de la fosfatasa alcalina.',
      imagen: 'Radiografía simple: engrosamiento cortical, patrón trabecular grosero, aumento de TAMANO del hueso (que no ocurre en las metástasis y es muy característico), lesiones líticas en llama en huesos largos y osteoporosis circunscrita en el cráneo. GAMMAGRAFÍA ósea para definir la extensión y detectar focos asintomáticos.',
      complementarios: 'Audiometría si hay afectación craneal. Valoración neurológica si hay afectación vertebral o de la base del cráneo.',
      dx_diferencial: 'Metástasis óseas blásticas (que NO aumentan el tamano del hueso), osteomalacia, hiperparatiroidismo, displasia fibrosa, mieloma y osteomielitis crónica.',
      tx_medico: 'Analgesia y fisioterapia. Aporte adecuado de calcio y vitamina D ANTES de iniciar un bisfosfonato, para evitar la hipocalcemia. La enfermedad asintomática con fosfatasa alcalina poco elevada y en localizaciones sin riesgo puede solo vigilarse.',
      tx_farmacologico: 'ÁCIDO ZOLEDRÓNICO en dosis única intravenosa, que es el tratamiento de elección: normaliza la fosfatasa alcalina en la mayoría de los pacientes y produce remisiones muy prolongadas. Alternativas orales: risedronato o alendronato. La indicación principal es el DOLOR óseo pagetico; también se trata la enfermedad activa en localizaciones de riesgo (cráneo, columna, huesos largos de carga, articulaciones vecinas) y antes de una cirugía sobre hueso pagetico, para reducir el sangrado.',
      tx_intervencionista: 'Cirugía ortopédica para fracturas, artroplastia por artrosis secundaria, osteotomia correctora de deformidades y descompresión neuroquirúrgica en la afectación de la base del cráneo o vertebral.',
      criterios_uci: 'Excepcional: insuficiencia cardiaca de alto gasto en enfermedad muy extensa.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar hipocalcemia tras el ácido zoledrónico, sobre todo si el déficit de vitamina D no se corrigio. Reacción de fase aguda en las 24 a 72 horas siguientes a la infusión, que se maneja con paracetamol.',
      seguimiento_ambulatorio: 'Fosfatasa alcalina a los 3 a 6 meses y después anual: su nueva elevación indica recidiva de actividad. Un dolor NUEVO y creciente en un hueso pagetico, sobre todo con masa de partes blandas, obliga a descartar transformación sarcomatosa.',
      pronostico: 'Bueno: la mayoría queda asintomática y la respuesta al ácido zoledrónico es duradera. La complicación temida es el OSTEOSARCOMA sobre hueso pagetico, que ocurre en menos del 1% pero tiene muy mal pronóstico.',
      algoritmo: ['Fosfatasa alcalina alta con calcio, fósforo y PTH normales: sospechar Paget', 'Confirmar el origen óseo de la fosfatasa alcalina', 'Radiografía de la zona sintomática y gammagrafía ósea para la extensión', 'Corregir el déficit de vitamina D antes de tratar', 'Tratar si hay dolor pagetico o localización de riesgo', 'Ácido zoledrónico en dosis única intravenosa como elección', 'Vigilar hipocalcemia y reacción de fase aguda tras la infusión', 'Seguir la fosfatasa alcalina a los 3 a 6 meses y después anual', 'Dolor nuevo y creciente con masa de partes blandas: descartar sarcoma']
    },
    {
      nombre: 'Crisis hipercalcemica',
      color: '#7a1f3d',
      definicion: 'Hipercalcemia grave, habitualmente por encima de 14 mg/dL de calcio corregido, con deterioro del nivel de conciencia, deshidratación e insuficiencia renal. Es una urgencia metabólica y la única situación del tema que se trata antes de tener el diagnóstico etiológico.',
      fisiopatologia: 'La hipercalcemia produce diabetes insípida nefrogenica al interferir con la acción de la vasopresina en el tubulo colector: el paciente orina y se deshidrata. La deshidratación reduce el filtrado glomerular y con el la excreción renal de calcio, lo que eleva aun más la calcemia. Ese círculo vicioso es la razón de que la HIDRATACIÓN sea la primera medida y no un simple soporte, y explica por que un paciente puede pasar de una hipercalcemia estable de meses a una crisis en pocos días tras una gastroenteritis o un ingreso con reposo en cama.',
      epidemiologia: 'La causa más frecuente en el hospital es la malignidad; en el ambulatorio, un hiperparatiroidismo primario descompensado por deshidratación, inmovilización o fármacos. Mortalidad significativa si el diagnóstico se retrasa.',
      factores_riesgo: ['Cáncer con metástasis óseas o secreción de PTHrP', 'Hiperparatiroidismo primario no tratado', 'Deshidratación por cualquier causa', 'Inmovilización prolongada y reposo en cama', 'Tiazidas, litio, vitamina D o calcio en dosis altas', 'Insuficiencia renal previa', 'Síndrome de leche y alcalinos', 'Enfermedad granulomatosa activa'],
      clinica: 'Náuseas, vómitos, estrenimiento o íleo, poliuria con deshidratación intensa, debilidad, confusión, somnolencia, estupor y coma. En el electrocardiograma, QT corto, bradicardia y en casos extremos bloqueo o asistolia. Puede haber pancreatitis y dolor abdominal que confunden con un abdomen agudo.',
      criterios_dx: 'Calcio corregido por encima de 14 mg/dL, o cifras menores con síntomas neurológicos, en un paciente con deshidratación e insuficiencia renal. Se extrae PTH en la primera muestra, pero el tratamiento no espera al resultado.',
      laboratorio: 'Calcio corregido y iónico, PTH intacta, fósforo, magnesio, función renal, electrolitos, gasometría, PTHrP y proteinograma según sospecha. Electrocardiograma.',
      imagen: 'Estudio dirigido a la causa una vez estabilizado el paciente: imagen oncológica, ecografía cervical, serie ósea o tomografía por emision de positrones.',
      complementarios: 'Balance hídrico estricto, sondaje vesical si es preciso y monitorización cardiaca en la hipercalcemia grave.',
      dx_diferencial: 'Encefalopatía de otra causa, sepsis, deshidratación por otro motivo, insuficiencia suprarrenal, uremia y abdomen agudo quirúrgico.',
      tx_medico: 'HIDRATACIÓN con suero salino isotónico como primera medida, a un ritmo de 200 a 300 mL por hora ajustado a la función cardiaca y renal, con objetivo de diuresis adecuada. Movilización precoz. Retirada de tiazidas, litio, calcio y vitamina D. Los diuréticos de asa NO son tratamiento de rutina: solo se anaden si aparece sobrecarga de volumen tras hidratar.',
      tx_farmacologico: 'CALCITONINA subcutánea o intramuscular como puente: actúa en 4 a 6 horas pero pierde eficacia por taquifilaxia a las 48 horas. BISFOSFONATO intravenoso (ácido zoledrónico) administrado pronto pese a que tarda 2 a 4 días en hacer efecto, ajustado o evitado en la insuficiencia renal grave. DENOSUMAB si hay insuficiencia renal o refractariedad al bisfosfonato. GLUCOCORTICOIDES si el mecanismo es por calcitriol (linfoma, granulomatosis) o en el mieloma. Cinacalcet en el hiperparatiroidismo primario o el carcinoma paratiroideo.',
      tx_intervencionista: 'HEMODIÁLISIS con bano bajo en calcio si hay insuficiencia renal grave, insuficiencia cardiaca que impide la hidratación o hipercalcemia refractaria con síntomas neurológicos. Paratiroidectomia urgente en la crisis por hiperparatiroidismo primario grave, una vez estabilizado.',
      criterios_uci: 'Alteración del nivel de conciencia, arritmia, insuficiencia renal que exija diálisis o necesidad de monitorización estrecha durante la hidratación intensa.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Calcio, función renal, electrolitos y balance hídrico seriados. Vigilar la HIPOCALCEMIA tardía por el bisfosfonato o el denosumab, sobre todo con déficit de vitamina D no corregido.',
      seguimiento_ambulatorio: 'Tratamiento definitivo de la causa: paratiroidectomia en el hiperparatiroidismo primario, tratamiento oncológico en la malignidad. Educación sobre hidratación y sobre los fármacos que hay que evitar.',
      pronostico: 'La hipercalcemia se controla en la mayoría de los casos. El pronóstico global depende por completo de la causa: excelente en el hiperparatiroidismo primario operado, malo en la malignidad avanzada.',
      algoritmo: ['Calcio corregido por encima de 14, o menor con síntomas neurológicos', 'Extraer PTH en la primera muestra pero NO esperar el resultado', 'HIDRATAR con salino isotónico de inmediato', 'Retirar tiazidas, litio, calcio y vitamina D; movilizar al paciente', 'Calcitonina si hay que bajar el calcio en horas', 'Bisfosfonato intravenoso pronto, ajustado a la función renal', 'Denosumab si hay insuficiencia renal o refractariedad', 'Glucocorticoide si el mecanismo es por calcitriol o mieloma', 'Diuréticos de asa solo si hay sobrecarga de volumen', 'Diálisis si hay fallo renal, fallo cardiaco o refractariedad']
    },
    {
      nombre: 'Síndrome de hueso hambriento',
      color: '#3f6b52',
      definicion: 'Hipocalcemia grave y prolongada que aparece tras corregir de forma brusca un hiperparatiroidismo de larga evolución, por captación masiva de calcio, fósforo y magnesio por un hueso que llevaba anos siendo desmineralizado. Es una complicación previsible y por eso evitable en su gravedad.',
      fisiopatologia: 'Durante anos, el exceso de PTH ha mantenido un remodelado acelerado con predominio de la resorción. Al retirar bruscamente ese estímulo (paratiroidectomia, o corrección de la causa en el secundario), la formación ósea queda sin oposición y el hueso se comporta como un sumidero: capta calcio, fósforo y magnesio del plasma a gran velocidad. El resultado es hipocalcemia con HIPOFOSFATEMIA e hipomagnesemia, y ese fósforo bajo es lo que lo distingue del hipoparatiroidismo posquirúrgico, donde el fósforo esta ALTO.',
      epidemiologia: 'Aparece en el 4 al 13% de las paratiroidectomias por hiperparatiroidismo primario y en una proporción mucho mayor, hasta el 20 al 70%, tras paratiroidectomia por hiperparatiroidismo secundario en diálisis. Es más frecuente y más grave cuanto mayores eran la PTH, la fosfatasa alcalina y la afectación ósea previas.',
      factores_riesgo: ['PTH preoperatoria muy elevada', 'FOSFATASA ALCALINA preoperatoria alta (el mejor predictor)', 'Enfermedad ósea evidente: osteitis fibrosa, fracturas, dolor óseo', 'Adenoma paratiroideo de gran tamano', 'Edad avanzada', 'Hiperparatiroidismo secundario en diálisis', 'Déficit de vitamina D no corregido antes de la cirugía', 'Calcemia preoperatoria muy elevada'],
      clinica: 'Hipocalcemia sintomática desde las primeras 24 a 72 horas y prolongada durante días o semanas: parestesias, calambres, signos de Chvostek y de Trousseau, y en casos graves tetania, convulsiones y QT largo. A diferencia del hipoparatiroidismo posquirúrgico, requiere dosis muy altas de calcio y se prolonga mucho más.',
      criterios_dx: 'Hipocalcemia posoperatoria con FÓSFORO BAJO y magnesio bajo, con PTH normal o alta (la glándula restante funciona). El fósforo bajo es la clave que lo separa del hipoparatiroidismo posquirúrgico, donde esta alto.',
      laboratorio: 'Calcio corregido o iónico, fósforo, MAGNESIO, PTH, fosfatasa alcalina y función renal, con controles seriados frecuentes en los primeros días.',
      imagen: 'No indicada de forma específica. La imagen preoperatoria de afectación ósea ayuda a anticipar el riesgo.',
      complementarios: 'Medición de fosfatasa alcalina y PTH PREOPERATORIAS para estratificar el riesgo y preparar al paciente. Electrocardiograma con vigilancia del QT.',
      dx_diferencial: 'HIPOPARATIROIDISMO POSQUIRÚRGICO (fósforo ALTO, PTH baja), hipomagnesemia aislada, hipocalcemia por déficit de vitamina D no corregido y alcalosis respiratoria por hiperventilación en el paciente ansioso.',
      tx_medico: 'PREVENCIÓN: corregir el déficit de vitamina D antes de la cirugía y anticipar el riesgo en el paciente con fosfatasa alcalina alta. Monitorización estrecha de calcio en el posoperatorio inmediato.',
      tx_farmacologico: 'CALCIO en dosis altas, oral e intravenoso según la gravedad, junto con CALCITRIOL, que aumenta la absorción intestinal y es imprescindible. CORREGIR EL MAGNESIO, sin lo cual el calcio no responde. Puede requerir dosis muy superiores a las habituales y mantenerse durante semanas o meses hasta que el hueso se remineraliza.',
      tx_intervencionista: 'Ninguno específico.',
      criterios_uci: 'Tetania grave, convulsiones, laringoespasmo o arritmia por QT largo.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Calcio cada 6 a 12 horas en las primeras 48 a 72 horas, con fósforo y magnesio diarios. Monitorización del QT. El alta se demora hasta estabilizar la calcemia con tratamiento oral.',
      seguimiento_ambulatorio: 'Descenso progresivo y lento de las dosis de calcio y calcitriol, con controles frecuentes: retirarlos demasiado pronto produce recaídas. La duración es de semanas a meses.',
      pronostico: 'Se resuelve por completo cuando el hueso se remineraliza, y su reconocimiento precoz evita complicaciones. La confusión con el hipoparatiroidismo posquirúrgico lleva a tratamientos innecesariamente prolongados o a alta prematura.',
      algoritmo: ['Estratificar el riesgo antes de operar con PTH y fosfatasa alcalina', 'Corregir el déficit de vitamina D antes de la cirugía', 'Calcio seriado cada 6 a 12 horas tras la paratiroidectomia', 'Hipocalcemia con FÓSFORO BAJO: hueso hambriento', 'Hipocalcemia con fósforo ALTO y PTH baja: hipoparatiroidismo', 'Calcio en dosis altas junto con calcitriol', 'Corregir siempre el magnesio', 'Monitorizar el QT y mantener el tratamiento semanas o meses', 'Retirar las dosis de forma progresiva con controles frecuentes']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'De todo este tema, lo que de verdad llega al hospital son dos situaciones: la hipercalcemia grave, que casi siempre es maligna, y la hipocalcemia posoperatoria, que casi siempre es de cirugía cervical. Ambas se resuelven con unas pocas reglas, y la mayor parte de los errores viene de saltarse el primer paso: corregir el calcio y mirar la PTH y el fósforo juntos.',
    parametros: ['Corregir SIEMPRE el calcio por la albúmina, o medir calcio iónico en el crítico', 'Interpretar la PTH junto al calcio: lo que importa es si es apropiada, no si esta en rango', 'El fósforo desempata: bajo en el hiperparatiroidismo primario, alto en el hipoparatiroidismo', 'Ante toda hipocalcemia, medir y corregir el MAGNESIO', 'Hipercalcemia grave: HIDRATAR con salino isotónico antes que nada', 'Bisfosfonato intravenoso pronto, sabiendo que tarda 2 a 4 días; calcitonina como puente', 'Diuréticos de asa solo si hay sobrecarga de volumen, nunca de rutina', 'Retirar tiazidas, litio, calcio y vitamina D, y movilizar al paciente', 'Tras paratiroidectomia, distinguir hueso hambriento (fósforo BAJO) de hipoparatiroidismo (fósforo ALTO)', 'Antes de operar una hipercalcemia, haber medido la CALCIURIA para no operar una hipercalcemia hipocalciurica familiar'],
    criterios_uci_general: 'Crisis hipercalcemica con alteración del nivel de conciencia, arritmia o insuficiencia renal que exija diálisis; tetania grave con laringoespasmo o convulsiones; y QT muy prolongado con arritmia ventricular.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'El hiperparatiroidismo TERCIARIO es un problema clásico del postrasplante renal: la paratiroides autónoma persiste tras recuperarse la función renal y produce hipercalcemia que puede danar el injerto, por lo que a menudo requiere paratiroidectomia.',
    prevencion: 'Primaria: aporte adecuado de calcio y de vitamina D a lo largo de la vida, con atención especial al anciano institucionalizado, a la persona con piel oscura y baja exposición solar y al paciente con malabsorción o cirugía bariátrica. Secundaria: medir calcio corregido en toda analítica general, que es como se detecta la mayoría de los hiperparatiroidismos primarios; control del fósforo en la enfermedad renal crónica para frenar el hiperparatiroidismo secundario; y corrección del déficit de vitamina D antes de cualquier cirugía paratiroidea o de un bisfosfonato potente. Terciaria: prevención de la deshidratación y de la inmovilización en el paciente con hipercalcemia conocida, que son los desencadenantes habituales de la crisis.'
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
  'Hiperparatiroidismo primario': { definicion: [1, 2, 3, 19], criterios_dx: [1, 2, 3, 19], laboratorio: [1, 2, 3, 19], tx_farmacologico: [1, 2, 3, 19] },
  'Hipercalcemia de la malignidad': { definicion: [7, 8], criterios_dx: [7, 8], laboratorio: [7, 8], tx_farmacologico: [7, 8] },
  'Hipoparatiroidismo e hipocalcemia': { definicion: [5, 6, 9], criterios_dx: [5, 6, 9], laboratorio: [5, 6, 9], tx_farmacologico: [5, 6, 9] },
  'Hiperparatiroidismo secundario y terciario': { definicion: [11, 4], criterios_dx: [11, 4], laboratorio: [11, 4], tx_farmacologico: [11, 4] },
  'Osteomalacia y raquitismo del adulto': { definicion: [12, 13, 17], criterios_dx: [12, 13, 17], laboratorio: [12, 13, 17], tx_farmacologico: [12, 13, 17] },
  'Enfermedad de Paget ósea': { definicion: [14, 15], criterios_dx: [14, 15], laboratorio: [14, 15], tx_farmacologico: [14, 15] },
  'Crisis hipercalcemica': { definicion: [7, 8, 1], criterios_dx: [7, 8, 1], laboratorio: [7, 8, 1], tx_farmacologico: [7, 8, 1] },
  'Síndrome de hueso hambriento': { definicion: [16, 1], criterios_dx: [16, 1], laboratorio: [16, 1], tx_farmacologico: [16, 1] }
};
export const estigmasTitulo = 'Signos clínicos del calcio alterado, en orden de utilidad';
export const estigmas = [
  { s: 'Signo de Trousseau', p: 'Muy específico', photo: null, desc: 'Espasmo carpopedal (flexión de la muneca y de las metacarpofalángicas con extensión de los dedos y aducción del pulgar) al inflar el manguito de presión por encima de la sistólica durante 3 minutos. Es más específico que el de Chvostek y su positividad apoya con fuerza la hipocalcemia.' },
  { s: 'Signo de Chvostek', p: 'Poco específico', photo: null, desc: 'Contracción de la musculatura facial ipsilateral al percutir sobre el nervio facial por delante del pabellon auricular. Es positivo hasta en el 10% de las personas sanas y negativo en cerca de un tercio de los hipocalcemicos, de modo que su valor aislado es limitado.' },
  { s: 'Parestesias peribucales y en los pulpejos', p: 'Precoz', photo: null, desc: 'Suele ser el primer síntoma de la hipocalcemia posquirúrgica y aparece antes que los signos exploratorios. Su aparición en las primeras 24 horas tras una tiroidectomía obliga a medir calcio de inmediato.' },
  { s: 'QT largo en el electrocardiograma', p: 'Marcador de gravedad', photo: null, desc: 'La hipocalcemia alarga el segmento ST y con el el QT, con riesgo de torsión de puntas. Es una herramienta rápida de gravedad a pie de cama y obliga a monitorización si es marcado.' },
  { s: 'Poliuria y polidipsia con deshidratación', p: 'Frecuente en hipercalcemia', photo: null, desc: 'La hipercalcemia interfiere con la acción de la vasopresina en el tubulo colector y produce una diabetes insípida nefrogenica. La deshidratación resultante reduce la excreción renal de calcio y cierra el círculo vicioso que lleva a la crisis.' },
  { s: 'Confusión, somnolencia y estupor', p: 'Marcador de gravedad', photo: null, desc: 'Los tonos psíquicos de la regla clásica. En la hipercalcemia grave marcan la indicación de tratamiento urgente y de ingreso, y su presencia justifica tratar aunque la cifra de calcio no llegue a 14 mg/dL.' },
  { s: 'Litiasis renal de repetición', p: '~20% del hiperparatiroidismo', photo: null, desc: 'Una de las piedras de la regla clásica y criterio quirúrgico del hiperparatiroidismo primario aunque sea asintomática. Justifica pedir imagen renal a todo paciente con hipercalcemia y PTH alta.' },
  { s: 'Dolor óseo difuso con debilidad proximal', p: 'Osteomalacia', photo: null, desc: 'La combinación de dolor óseo sordo que empeora con la carga y dificultad para levantarse de una silla o subir escaleras es muy sugestiva. Se confunde con frecuencia con polimialgia reumática o fibromialgia, y se aclara con una fosfatasa alcalina alta y una vitamina D baja.' },
  { s: 'Aumento del perímetro craneal e hipoacusia', p: 'Paget craneal', photo: null, desc: 'El paciente refiere que le aprieta el sombrero. La hipoacusia por afectación del hueso temporal es la complicación neurológica más frecuente del Paget craneal y justifica la audiometría.' },
  { s: 'Hueso caliente a la palpación', p: 'Paget activo', photo: null, desc: 'El hueso pagetico esta hipervascularizado y su temperatura local es mayor que la del hueso vecino. En la enfermedad muy extensa, ese aumento del flujo puede llegar a producir insuficiencia cardiaca de alto gasto.' },
  { s: 'Tibia en sable y deformidad de huesos largos', p: 'Paget avanzado', photo: null, desc: 'El hueso pagetico es más grande pero estructuralmente débil, y se deforma con la carga. El aumento de TAMANO del hueso es lo que lo distingue de una metástasis blástica en la radiografía.' },
  { s: 'Marcha de pato', p: 'Osteomalacia y raquitismo', photo: null, desc: 'Marcha de base ancha y balanceo lateral por debilidad de la musculatura pélvica. Es un signo de miopatía proximal, no de dolor articular, y mejora de forma llamativa a las pocas semanas de reponer la vitamina D.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Corrección del calcio por la albúmina (calculadora disponible)': [9],
  'Gravedad de la hipercalcemia': [7, 8],
  'Mapa de PTH frente a calcio (calculadora disponible)': [1, 9],
  'Criterios quirúrgicos del hiperparatiroidismo primario': [1, 19],
  'Patrón bioquímico de las enfermedades óseas metabólicas': [12, 14]
};
export const escalaCalc = {
  'Corrección del calcio por la albúmina (calculadora disponible)': 'calcio-corregido',
  'Gravedad de la hipercalcemia': 'calcio-corregido',
  'Mapa de PTH frente a calcio (calculadora disponible)': 'pth-calcio'
};
export const compGroups = [
  { name: 'Trastornos del calcio y de la paratiroides', items: ['Hiperparatiroidismo primario', 'Hipercalcemia de la malignidad', 'Hipoparatiroidismo e hipocalcemia', 'Hiperparatiroidismo secundario y terciario'] },
  { name: 'Enfermedades óseas metabólicas', items: ['Osteomalacia y raquitismo del adulto', 'Enfermedad de Paget ósea'] },
  { name: 'Complicaciones agudas', items: ['Crisis hipercalcemica', 'Síndrome de hueso hambriento'] }
];
export const complicacionesIntro = 'Las cuatro primeras fichas son los trastornos del calcio ordenados por el mapa de la Figura 1: las dos hipercalcemias que suman más del 90% de los casos (hiperparatiroidismo primario y malignidad, que separa la PTH), el hipoparatiroidismo, y el hiperparatiroidismo secundario y terciario, que es la respuesta de la paratiroides a un problema de fuera. Las dos siguientes son las enfermedades óseas metabólicas que se confunden entre si y con la osteoporosis, y que se separan con cuatro analíticas. Las dos últimas son las complicaciones agudas: la crisis hipercalcemica, que se trata antes de saber la causa, y el síndrome de hueso hambriento, que se distingue del hipoparatiroidismo posquirúrgico por el fósforo.';
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
      { title: 'Fósforo BAJO tras cirugía', sub: 'Hueso hambriento', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'HUESO', sub: 'Cuatro analíticas los separan', color: '#6b4a2e', target: 'clasificacion', leaves: [
      { title: 'Todo normal', sub: 'Osteoporosis', color: '#7a6a55', target: 'clasificacion' },
      { title: 'Fosfatasa alta, PTH alta', sub: 'Osteomalacia', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Fosfatasa muy alta, resto normal', sub: 'Paget', color: '#5b4a86', target: 'complicaciones' },
      { title: 'Calcio alto, fósforo bajo', sub: 'Hiperparatiroidismo', color: '#2f7a6b', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 9], no_invasivos: [1, 10], imagen: [14, 12] };
export const clasificacionCite = [1, 9, 14];
export const seguimientoCite = [1, 8];
