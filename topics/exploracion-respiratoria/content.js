// topics/exploracion-respiratoria/content.js — Semiología 3: Exploración Respiratoria.
// Tercer tema de Semiología, mismo patrón que exploracion-cardiovascular/ (ver ese archivo para
// la nota completa de convenciones). Aquí la estructura por región/técnica coincide de forma
// natural con el orden clásico IPPA (Inspección, Palpación, Percusión, Auscultación), así que se
// usa tal cual como esqueleto de compGroups.
//
// 3 de las 5 figuras son código propio (SVG/HTML con var(--...) de tema) — mismo criterio ya
// establecido: cada una representa un dato clínico exacto (ruidos normales, tabla de ruidos
// agregados, tabla de síndromes), y ese contenido va a mano (ver .claude/skills/
// figura-didactica/SKILL.md). Imagen 1 (topografía/auscultación) e Imagen 2 (patrones
// respiratorios patológicos) son infografías provistas directamente por el autor del contenido,
// mismo patrón que la Imagen 1 de exploracion-cardiovascular/content.js: se usan tal cual, sin
// marcar su origen en ningún texto visible de la app.
//
// Audio y video (revisión agosto 2026, ampliada): mismo criterio que
// exploracion-cardiovascular/content.js (ver esa nota completa). No se descargó audio: sin
// fuente con licencia libre que cubra el set completo de ruidos respiratorios, se enlaza (no se
// aloja) a Practical Clinical Skills — link externo, requiere internet. `videoBlock()` incrusta
// 7 videos vía <iframe>: 2 de Stanford Medicine 25 (percusión, estigmas de EPOC) más 5 grabaciones
// reales de ruidos pulmonares específicos (Medzcool, AMBOSS, Eko Health con forma de onda) que
// Stanford no cubre — mismo criterio de "otra fuente si aporta valor real" ya usado en
// exploracion-cardiovascular/content.js.

export const meta = {
  id: 'exploracion-respiratoria',
  titulo: 'Exploración Respiratoria',
  subtitulo: 'Semiología 3 · Medicina Interna',
  accent: '#2f6b5e',
  accentDim: '#4f9384'
};

export const definicionText = 'La exploración respiratoria sigue el orden clásico de la propedéutica torácica: inspección, palpación, percusión y auscultación (IPPA) — a diferencia de la exploración cardiovascular, aquí la percusión SÍ mantiene vigencia clínica plena porque delimita con precisión el aire, el líquido y la consolidación dentro del tórax. Cada uno de los 4 pasos aporta información distinta y ninguno sustituye a los demás: la inspección detecta el patrón y el trabajo respiratorio antes de tocar al paciente, la palpación confirma la simetría de la expansión y la transmisión de las vibraciones vocales, la percusión distingue aire/consolidación/líquido, y la auscultación integra todo lo anterior con el sonido del flujo aéreo. Bien ejecutada, permite reconocer a la cabecera los 4 grandes síndromes pleuropulmonares (consolidación, derrame, atelectasia, hiperinsuflación/neumotórax) antes de cualquier radiografía.';

// Se omite el texto genérico del motor para "Abordaje Diagnóstico" ("Historia clínica,
// laboratorio general, estudios dirigidos, métodos no invasivos e imagen, en orden de
// invasividad creciente") — pensado para el abordaje diagnóstico de una ENFERMEDAD, no aplica
// a un tema de técnica de exploración física (mismo criterio ya usado en historia-clinica/).
export const diagnosticoIntro = '';

export const bibliografia = [
  "Bickley LS, Szilagyi PG, Hoffman RM. Bates' Guide to Physical Examination and History Taking. 13th ed. Philadelphia: Wolters Kluwer; 2021.",
  'Argente HA, Álvarez ME. Semiología Médica: Fisiopatología, Semiotecnia y Propedéutica. 2nd ed. Buenos Aires: Editorial Médica Panamericana; 2013.',
  "LeBlond RF, Brown DD, Suneja M, Szot JF. DeGowin's Diagnostic Examination. 10th ed. New York: McGraw-Hill; 2015.",
  'McGee S. Evidence-Based Physical Diagnosis. 4th ed. Philadelphia: Elsevier; 2018.',
  'Surós Batlló A, Surós Batlló J. Semiología Médica y Técnica Exploratoria. 8th ed. Barcelona: Elsevier Masson; 2001.',
  'Loudon R, Murphy RL Jr. Lung sounds. Am Rev Respir Dis. 1984;130(4):663-673.',
  'Sarkar M, Madabhavi I, Niranjan N, Dogra M. Auscultation of the respiratory system. Ann Thorac Med. 2015;10(3):158-168.',
  'Piirilä P, Sovijärvi AR. Crackles: recording, analysis and clinical significance. Eur Respir J. 1995;8(12):2139-2148.'
];

export const modalLabels = {
  itemName: 'Punto de exploración',
  fisiopatologia: 'Mecanismo y clasificación',
  clinica: 'Técnica y hallazgos',
  criterios_dx: 'Significado clínico',
  algoritmo: 'Secuencia'
};

// Reproduce el marcado visual de .modal-figure que arma oneFiguraHTML() en engine/study-view.js,
// para poder insertar una tabla/imagen EN LÍNEA justo debajo del párrafo que la menciona, en vez
// de dejar que el motor la adjunte al final del modal vía `c.figura`. Numeración continua por
// TEMA completo (no por tarjeta): Tabla y Imagen son contadores independientes que avanzan según
// el orden de aparición al recorrer `complicaciones` de arriba a abajo.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

// Embebe un video de YouTube (canal oficial Stanford Medicine 25, exploración física con
// pacientes reales) dentro de un figBlock — no se descarga ningún archivo, solo se reproduce
// desde YouTube (requiere conexión a internet, a diferencia del resto del contenido de la app).
function videoBlock(label, titulo, youtubeId, fuente) {
  return figBlock(label, titulo, `<div style="width:100%;max-width:480px;aspect-ratio:16/9;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);overflow:hidden;">
    <iframe src="https://www.youtube.com/embed/${youtubeId}" title="${titulo}" style="width:100%;height:100%;border:0;display:block;" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" loading="lazy"></iframe>
  </div>
  <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">${fuente}</p>`);
}

// ---------------------------------------------------------------------------------------------
// Helpers de figuras (mismo criterio que exploracion-cardiovascular/content.js).
// ---------------------------------------------------------------------------------------------

function respPatronSVG(id, titulo, puntos, color, nota) {
  const pts = puntos.map(p => p.join(',')).join(' ');
  return `<div style="border:1px solid var(--line);border-radius:8px;padding:8px 10px;">
    <svg viewBox="0 0 180 70" role="img" aria-labelledby="${id}-t ${id}-d" style="width:100%;max-width:210px;display:block;margin:0 auto;">
      <title id="${id}-t">Patrón respiratorio: ${titulo}</title>
      <desc id="${id}-d">Curva esquemática de la profundidad respiratoria a lo largo del tiempo en el patrón ${titulo}, no un trazo de un paciente real.</desc>
      <line x1="8" y1="35" x2="172" y2="35" stroke="var(--line)" stroke-width="1" stroke-dasharray="2,2"/>
      <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>
    <div style="font-size:11.5px;font-weight:700;color:var(--ink);text-align:center;margin-top:4px;">${titulo}</div>
    <div style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin-top:1px;">${nota}</div>
  </div>`;
}

function sonidoBarSVG(id, titulo, insLen, expLen, gap, color, nota) {
  const x0 = 10, y = 30, h = 16;
  const xExpStart = x0 + insLen + gap;
  return `<div style="border:1px solid var(--line);border-radius:8px;padding:8px 10px;">
    <svg viewBox="0 0 200 55" role="img" aria-labelledby="${id}-t ${id}-d" style="width:100%;max-width:220px;display:block;margin:0 auto;">
      <title id="${id}-t">Ruido respiratorio normal: ${titulo}</title>
      <desc id="${id}-d">Barra esquemática que compara la duración relativa de la inspiración y la espiración en ${titulo}.</desc>
      <rect x="${x0}" y="${y}" width="${insLen}" height="${h}" fill="${color}" rx="2"/>
      <rect x="${xExpStart}" y="${y}" width="${expLen}" height="${h}" fill="${color}" opacity="0.45" rx="2"/>
      <text x="${x0 + insLen / 2}" y="${y - 4}" text-anchor="middle" font-size="8" fill="var(--ink-faint)">insp.</text>
      <text x="${xExpStart + expLen / 2}" y="${y - 4}" text-anchor="middle" font-size="8" fill="var(--ink-faint)">esp.</text>
    </svg>
    <div style="font-size:11.5px;font-weight:700;color:var(--ink);text-align:center;margin-top:2px;">${titulo}</div>
    <div style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin-top:1px;">${nota}</div>
  </div>`;
}

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Exploración respiratoria normal',
      tituloB: 'Hallazgos que obligan a profundizar el estudio',
      compensada: 'Patrón respiratorio regular, 12-20 rpm, sin uso de músculos accesorios; tórax simétrico sin deformidades; expansión torácica simétrica; frémito táctil simétrico y de intensidad normal; resonancia a la percusión en todos los campos; murmullo vesicular presente y simétrico, sin ruidos agregados.',
      descompensada: 'Patrón respiratorio anormal (Cheyne-Stokes, Kussmaul, Biot) o signos de dificultad respiratoria (tiraje, disociación toracoabdominal), asimetría de la expansión torácica, frémito aumentado o abolido, matidez o hiperresonancia focal, murmullo vesicular disminuido/abolido o cualquier ruido agregado (sibilancias, estertores, roce pleural) — cada uno de estos hallazgos, aislado, ya orienta a un síndrome pleuropulmonar concreto y justifica imagen torácica dirigida.'
    }
  },
  complicaciones: [
    {
      nombre: 'Secuencia y técnica general de la exploración respiratoria',
      color: '#3d5a73',
      definicion: 'Orden clásico de la exploración torácica — inspección, palpación, percusión y auscultación (IPPA) — realizado siempre de forma comparativa entre ambos hemitórax.',
      clinica: 'Con el tórax descubierto, buena iluminación, paciente sentado si es posible: inspección general → palpación (expansión y frémito) → percusión → auscultación. Cada maniobra se hace primero en la cara posterior (mayor superficie pulmonar, incluye las bases), luego en la anterior y en ambas axilas, comparando siempre un punto con su espejo contralateral antes de avanzar al siguiente nivel — nunca se recorre todo un hemitórax antes de comparar con el otro.',
      criterios_dx: 'A diferencia de la exploración cardiaca, en la respiratoria la percusión mantiene rendimiento diagnóstico pleno: distingue con precisión aire (hiperresonancia), consolidación (matidez) y líquido (matidez "pétrea") antes de cualquier estudio de imagen.',
      algoritmo: ['Inspección general del patrón respiratorio y del tórax', 'Palpación: expansión torácica y frémito táctil', 'Percusión comparativa de ambos hemitórax, de vértices a bases', 'Auscultación comparativa de ambos hemitórax, de vértices a bases', 'Si hay hallazgo focal: pruebas de transmisión de la voz (broncofonía, pectoriloquia áfona, egofonía) sobre esa zona']
    },
    {
      nombre: 'Topografía torácica y puntos de comparación',
      color: '#3d5a73',
      definicion: 'Líneas y referencias topográficas de la pared torácica que estandarizan dónde y cómo describir cada hallazgo, y el patrón sistemático ("en escalera") para compararlo entre ambos lados.',
      clinica: `Líneas verticales de referencia: medioesternal, medioclavicular, axilares (anterior, media, posterior), escapular y paravertebral. La cara posterior concentra la mayor superficie pulmonar (incluye ambas bases) y suele explorarse primero; se recorre en 3 niveles — vértices/región interescapular alta, campos medios, bases — comparando siempre el punto con su espejo antes de bajar de nivel (ver Imagen 1).${figBlock('Imagen 1', 'Topografía torácica y patrón de comparación', `<img src="topics/exploracion-respiratoria/assets/auscultacion-pulmonar-topografia.png" alt="Infografía de auscultación pulmonar sistemática, comparativa y por niveles. Líneas verticales de referencia sobre torso visto de espalda y de frente: medioesternal (borde del esternón), medioclavicular (punto medio de la clavícula), axilar anterior (por delante del pliegue axilar anterior), axilar media (por el pliegue axilar medio, a nivel del húmero), axilar posterior (por detrás del pliegue axilar posterior), escapular o espinal (borde medial de la escápula), paravertebral (paralela a la columna, a 2-3 cm de los procesos espinosos). Exploración por 3 niveles: 1) vértices/región interescapular alta, desde la región supraespinosa hasta T2-T3 aproximadamente; 2) campos medios, desde T2-T3 hasta T6-T8 aproximadamente; 3) bases pulmonares, desde T8 hasta la base, incluyendo ambas bases. Cómo explorar: pedir al paciente que respire por la boca de manera tranquila y profunda, escuchar cada punto de 2 a 3 ciclos respiratorios completos, comparar siempre con el punto homólogo del lado contrario antes de descender.">`)}`,
      criterios_dx: 'Describir un hallazgo sin referencia topográfica ("se escucha algo raro a la derecha") no es útil clínicamente ni permite dar seguimiento; siempre se documenta con línea, espacio intercostal y cara (anterior/posterior/axilar).'
    },
    {
      nombre: 'Patrón respiratorio, frecuencia y signos de dificultad respiratoria',
      color: '#8c3a34',
      definicion: 'Ritmo, profundidad y frecuencia de la respiración, junto con los signos visibles de trabajo respiratorio aumentado.',
      fisiopatologia: `<p style="margin:0;">Antes de los patrones patológicos, 3 términos describen solo frecuencia/amplitud sin alterar el ritmo: <strong>eupnea</strong> (patrón normal, 12-20 rpm), <strong>taquipnea</strong> (&gt;20 rpm) y <strong>bradipnea</strong> (&lt;12 rpm) — ver Imagen 2. Los patrones realmente patológicos alteran además el ritmo o la regularidad:</p>
<ul style="margin:8px 0 0;padding-left:18px;">
  <li><strong>Cheyne-Stokes</strong>: ciclos crescendo-decrescendo de profundidad separados por apnea, por un retraso ("delay") en la retroalimentación de los quimiorreceptores centrales al CO2 arterial — típico de insuficiencia cardiaca (tiempo de circulación prolongado) o daño cerebral bilateral. Es el mismo problema que regular la temperatura de una regadera con un termostato muy lejano al grifo: la señal tarda en llegar, así que la persona sobrecorrige en cada dirección (demasiado caliente, luego demasiado fría) en vez de estabilizarse, generando el patrón oscilante.</li>
  <li><strong>Kussmaul</strong>: respiración profunda, rápida y sostenida, sin pausas — mecanismo compensador para eliminar CO2 y elevar el pH ante una acidosis metabólica severa (cetoacidosis diabética, acidosis láctica).</li>
  <li><strong>Respiración atáxica</strong> (de Biot): completamente irregular en ritmo y profundidad, con pausas impredecibles — lesión del centro respiratorio bulbar, signo de mal pronóstico.</li>
  <li><strong>Respiración apnéustica</strong>: pausa inspiratoria prolongada antes de la espiración — lesión pontina.</li>
</ul>
${figBlock('Imagen 2', 'Patrones respiratorios patológicos', `<img src="topics/exploracion-respiratoria/assets/patrones-respiratorios-patologicos.png" alt="Infografía de patrones respiratorios patológicos: curvas esquemáticas de profundidad respiratoria vs. tiempo para 8 patrones. Eupnea (respiración normal): ritmo y profundidad normales, frecuencia 12-20 rpm en reposo, ritmo regular, amplitud normal. Taquipnea: aumento de la frecuencia respiratoria con amplitud normal, frecuencia mayor a 20 rpm; ejemplos: fiebre, ansiedad, hipoxia, sepsis. Bradipnea: disminución de la frecuencia respiratoria con amplitud normal, frecuencia menor a 12 rpm; ejemplos: aumento de la presión intracraneal, hipotiroidismo, fármacos. Kussmaul: respiración profunda, rápida y regular, sin pausas; ejemplo: acidosis metabólica (cetoacidosis diabética, insuficiencia renal). Cheyne-Stokes: ciclos de aumento progresivo de la amplitud y luego disminución hasta apnea, que se repiten, patrón cíclico con pausas de apnea entre ciclos; ejemplos: insuficiencia cardiaca avanzada, daño neurológico. Biot: respiraciones irregulares con pausas de apnea abruptas e impredecibles; ejemplos: meningitis, hemorragia intracraneal, lesión medular alta. Apnéustico: inspiración prolongada en meseta seguida de espiración breve; ejemplo: lesión del puente (por encima del centro neumotáxico). Atáxico: respiración totalmente irregular e impredecible, sin patrón definido, muy irregular, sin patrón ni periodicidad, pronóstico grave; ejemplo: lesión bulbar grave.">`)}
<p style="margin:8px 0 0;"><strong>Uso de músculos accesorios</strong> (esternocleidomastoideo, escalenos) y <strong>tiraje</strong> (intercostal, supraclavicular, subcostal): reflejan una presión pleural negativa exagerada necesaria para vencer una resistencia de la vía aérea aumentada o una distensibilidad pulmonar disminuida. <strong>Disociación toracoabdominal</strong> (movimiento paradójico del abdomen hacia adentro en inspiración): signo de fatiga/claudicación diafragmática inminente — indica falla respiratoria inminente, no solo dificultad.</p>`,
      criterios_dx: 'La disociación toracoabdominal es uno de los signos físicos de mayor valor para anticipar la necesidad de ventilación mecánica, antes de que caigan los gases arteriales.',
      dx_diferencial: 'Cheyne-Stokes: insuficiencia cardiaca, daño cerebral bilateral, altitud. Kussmaul: acidosis metabólica. Atáxica/apnéustica: lesión de tronco encefálico.'
    },
    {
      nombre: 'Morfología del tórax',
      color: '#8c3a34',
      definicion: 'Forma y simetría de la caja torácica; sus deformidades reflejan enfermedad pulmonar crónica, esquelética o traumática subyacente.',
      fisiopatologia: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Tórax en tonel</strong> (enfisematoso): aumento del diámetro anteroposterior con horizontalización de las costillas, por atrapamiento aéreo crónico que hiperinsufla el tórax de forma sostenida (EPOC/enfisema).</li>
  <li><strong>Pectus excavatum</strong>: hundimiento esternal, congénito, rara vez compromete la función pulmonar salvo que sea severo.</li>
  <li><strong>Pectus carinatum</strong>: protrusión esternal ("en quilla"), también congénito.</li>
  <li><strong>Cifoescoliosis</strong>: restringe la caja torácica de forma asimétrica, puede generar patrón restrictivo e hipertensión pulmonar si es severa.</li>
  <li><strong>Tórax paralítico</strong>: aplanamiento de los campos superiores, secuela clásica de tuberculosis apical crónica.</li>
  <li><strong>Tórax inestable</strong> (flail chest): fracturas costales múltiples en 2 o más puntos por costilla, que aíslan un segmento de la pared torácica del resto de la caja; ese segmento se mueve de forma paradójica — hacia adentro durante la inspiración y hacia afuera durante la espiración — porque ya no está mecánicamente acoplado a los cambios de presión intrapleural generados por el resto del tórax.</li>
</ul>
${videoBlock('Video 1', 'Estigmas de la EPOC', 'f5ydW0hnMcg', 'Stanford Medicine 25 (YouTube) — paciente real')}`,
      criterios_dx: 'El tórax inestable con respiración paradójica es una urgencia: compromete gravemente la ventilación efectiva y suele acompañarse de contusión pulmonar subyacente.',
      dx_diferencial: 'Tórax en tonel: EPOC/enfisema. Cifoescoliosis severa: enfermedad pulmonar restrictiva. Tórax paralítico: secuela de TB apical.'
    },
    {
      nombre: 'Expansión torácica',
      color: '#3d5a73',
      definicion: 'Amplitud y simetría del movimiento de la pared torácica durante la inspiración profunda, evaluada por palpación bimanual.',
      clinica: 'Se colocan ambas manos sobre la espalda (o el tórax anterior) con los pulgares aproximados en la línea media, dejando un pliegue cutáneo laxo entre ellos, y se pide al paciente inspirar profundamente; se observa si los pulgares se separan de forma simétrica y en qué magnitud (normal ~3-5 cm). Se repite en la cara anterior y en las bases posteriores.',
      criterios_dx: 'Expansión disminuida o abolida de un solo lado orienta a: derrame pleural, neumotórax, consolidación extensa, atelectasia, o dolor pleurítico que limita voluntariamente el movimiento (splinting) del lado afectado; expansión simétricamente disminuida en ambos lados orienta a enfermedad restrictiva bilateral o parálisis diafragmática bilateral.',
      dx_diferencial: 'Asimetría unilateral: derrame, neumotórax, consolidación, atelectasia, parálisis frénica unilateral. Disminución simétrica bilateral: enfermedad restrictiva, obesidad severa, cifoescoliosis.'
    },
    {
      nombre: 'Frémito táctil (vocal)',
      color: '#3d5a73',
      definicion: 'Vibraciones palpables en la pared torácica generadas por la fonación, transmitidas desde las cuerdas vocales a través del árbol bronquial y el parénquima pulmonar.',
      clinica: 'Se palpa con el borde cubital de la mano (o la palma completa) mientras el paciente repite una palabra con muchas consonantes graves ("treinta y tres", "33"), comparando simétricamente punto por punto.',
      fisiopatologia: `<p style="margin:0;">El tejido consolidado (denso, homogéneo, lleno de exudado en vez de aire) transmite las vibraciones mejor que el parénquima aireado normal — el mismo principio por el que un sólido transmite el sonido mejor que un gas.</p>
<ul style="margin:8px 0 0;padding-left:18px;">
  <li><strong>AUMENTA</strong> sobre una consolidación.</li>
  <li><strong>DISMINUIDO o ABOLIDO</strong> cuando algo se interpone entre el pulmón y la pared torácica (líquido pleural, que amortigua; aire pleural en el neumotórax, que no transmite) o cuando disminuye la cantidad de tejido pulmonar aireado transmisor (atelectasia obstructiva completa — la vía aérea ocluida ya ni siquiera deja llegar la vibración generada en la laringe; enfisema, por menor densidad tisular).</li>
</ul>`,
      criterios_dx: 'El frémito aumentado localiza consolidación con alta especificidad; el frémito abolido en un hemitórax obliga a diferenciar entre derrame masivo, neumotórax y atelectasia obstructiva completa — la percusión y la auscultación del mismo punto resuelven cuál de las tres es.',
      dx_diferencial: 'Aumentado: consolidación (neumonía). Disminuido/abolido: derrame pleural, neumotórax, atelectasia obstructiva, enfisema, obesidad/pared torácica gruesa.'
    },
    {
      nombre: 'Técnica y sonidos de percusión',
      color: '#3d5a73',
      definicion: 'Maniobra que genera un sonido audible y palpable al golpear la pared torácica, cuya calidad depende de la proporción de aire, líquido o tejido sólido subyacente.',
      clinica: 'Percusión dígito-digital: el dedo medio de la mano no dominante (plexímetro) se aplica firme y plano sobre el espacio intercostal, paralelo a las costillas; se golpea su falange distal con la punta del dedo medio de la mano dominante, con un movimiento seco de muñeca (no de todo el brazo), comparando siempre puntos simétricos.',
      fisiopatologia: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Resonancia</strong>: sonido normal del pulmón aireado.</li>
  <li><strong>Hiperresonancia/timpanismo</strong>: exceso de aire con menos tejido que lo amortigüe — neumotórax, enfisema bulloso, crisis asmática severa con atrapamiento aéreo agudo.</li>
  <li><strong>Matidez</strong>: ausencia de aire bajo el punto percutido — consolidación (matidez franca pero "elástica") o, de forma aún más marcada ("pétrea", sin ningún componente resonante), derrame pleural.</li>
  <li><strong>Submatidez</strong>: grado intermedio, típico de colapso parcial o derrame de poco volumen.</li>
</ul>
<p style="margin:8px 0 0;">Es el mismo fenómeno que golpear con los nudillos una caja de cartón vacía (resonante, "hueca"), la misma caja llena de arena (mate) o un tambor (hiperresonante, timpánico) — el sonido no depende de la caja en sí, sino de lo que hay adentro.</p>
${videoBlock('Video 2', 'Percusión del tórax', '48nzLXnEHvg', 'Stanford Medicine 25 (YouTube)')}`,
      criterios_dx: 'La matidez pétrea (a diferencia de la matidez elástica de la consolidación) es prácticamente diagnóstica de líquido pleural; combinarla con el frémito y la auscultación del mismo punto permite reconocer el síndrome de derrame sin necesidad de imagen.'
    },
    {
      nombre: 'Excursión diafragmática y signos percutorios especiales',
      color: '#8c3a34',
      definicion: 'Desplazamiento del límite inferior de matidez hepática/esplénica entre la inspiración y la espiración máximas, y otros signos percutorios que orientan a patología pleural específica.',
      clinica: 'Se percute la línea escapular de arriba hacia abajo hasta identificar el límite de matidez en espiración máxima sostenida, se marca, y se repite en inspiración máxima sostenida; la diferencia normal es de 3-5 cm.',
      fisiopatologia: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Excursión diafragmática disminuida</strong>: EPOC/enfisema (diafragma ya aplanado y en desventaja mecánica), parálisis o paresia frénica unilateral, derrame pleural voluminoso.</li>
  <li><strong>Signo de Skoda</strong>: una franja de timpanismo por ENCIMA del nivel superior de un derrame pleural, por compresión pasiva del parénquima pulmonar adyacente sin llenarse de líquido.</li>
  <li><strong>Línea de Damoiseau-Ellis</strong>: el límite superior de la matidez en un derrame pleural no es horizontal sino una curva cóncava hacia arriba y medial, más alta en la línea axilar que en la columna o el esternón — refleja la distribución del líquido por gravedad y la resistencia relativa del pulmón a colapsarse por completo en su porción medial. Es como llenar de agua una tina que tiene una esponja fija pegada a una de sus paredes: el agua sube más alto lejos de la esponja (línea axilar) porque ahí no hay nada que le "gane" espacio, mientras que junto a la esponja (línea medial, cerca del mediastino) el nivel queda más bajo porque parte del volumen ya está ocupado.</li>
</ul>`,
      criterios_dx: 'La curva de Damoiseau-Ellis distingue a la percusión un derrame pleural libre de una consolidación (cuyo límite superior de matidez sí es horizontal).',
      dx_diferencial: 'Excursión diafragmática abolida unilateral: parálisis frénica, derrame masivo, elevación diafragmática por patología subdiafragmática.'
    },
    {
      nombre: 'Ruidos respiratorios normales',
      color: '#3d5a73',
      definicion: 'Sonidos generados por el flujo de aire turbulento en la vía aérea durante el ciclo respiratorio, cuyo timbre y relación inspiración:espiración cambian según el sitio donde se ausculten.',
      fisiopatologia: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Murmullo vesicular</strong>: suave, de tono grave, se ausculta en la mayor parte de ambos campos pulmonares; la inspiración se escucha más larga e intensa que la espiración (casi inaudible). Se genera por turbulencia en los bronquios de mediano calibre, pero el parénquima alveolar circundante actúa como un filtro que atenúa selectivamente las frecuencias altas — de ahí su timbre suave.</li>
  <li><strong>Respiración bronquial</strong> (tubárica): más ruda, hueca, de tono agudo; la espiración es tan larga o más larga que la inspiración, con una pausa audible entre ambas. Se genera por turbulencia directa en la vía aérea grande (tráquea, bronquios principales), SIN el filtro alveolar, por lo que normalmente solo se ausculta sobre la tráquea y el manubrio esternal.</li>
  <li><strong>Respiración broncovesicular</strong>: timbre e I:E intermedios, normal sobre el 1er-2do espacio intercostal anterior y la región interescapular alta posterior, donde los bronquios de mayor calibre se aproximan a la pared torácica (ver Imagen 3).</li>
</ul>
<p style="margin:8px 0 0;">Es la misma diferencia que hay entre escuchar una voz a través de una puerta cerrada, amortiguada y sin los agudos (vesicular, filtrada por el alvéolo) y escucharla directamente, sin ningún obstáculo de por medio (bronquial, sin filtro).</p>
${figBlock('Imagen 3', 'Ruidos respiratorios normales: relación inspiración:espiración', `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;">
      ${sonidoBarSVG('rn-ves', 'Vesicular', 90, 30, 8, '#3f6b52', 'suave, grave — la mayor parte de ambos campos')}
      ${sonidoBarSVG('rn-bv', 'Broncovesicular', 60, 55, 8, '#3d5a73', 'intermedio — 1º-2º EIC anterior y región interescapular')}
      ${sonidoBarSVG('rn-br', 'Bronquial (tubárico)', 40, 75, 14, '#8c3a34', 'ruda, hueca, con pausa — normal solo sobre la tráquea')}
    </div>
    <p style="font-size:11px;color:var(--ink-faint);margin:8px 0 0;">Barras esquemáticas (duración relativa de inspiración vs. espiración descrita en los textos clásicos, no un trazo real). Un ruido bronquial fuera de la tráquea = soplo tubárico = signo de consolidación.</p>`)}
<p style="margin:10px 0 0;"><a class="stigma-photo-link secondary" href="https://www.practicalclinicalskills.com/lung-sounds-audio" target="_blank" rel="noopener noreferrer">Escuchar vesicular, broncovesicular y bronquial (audio, Practical Clinical Skills) ↗</a></p>
${videoBlock('Video 3', 'Murmullo vesicular — grabación real', 'VtnMRG0ORLs', 'Medzcool (YouTube)')}
${videoBlock('Video 4', 'Respiración bronquial — grabación real', 'WfkWMfE9VTY', 'Medzcool (YouTube)')}`,
      criterios_dx: 'Auscultar un ruido de tipo bronquial en un sitio donde debería ser vesicular ("soplo tubárico") es un signo mayor de consolidación: el tejido consolidado, sin aire alveolar que lo filtre, transmite el sonido bronquial generado en la vía aérea grande directamente hasta la pared torácica — el mismo mecanismo que explica el frémito aumentado en el mismo contexto.'
    },
    {
      nombre: 'Ruidos agregados continuos: sibilancias y roncus',
      color: '#8c3a34',
      definicion: 'Sonidos musicales, prolongados y superpuestos al murmullo vesicular normal, generados por flujo de aire turbulento a través de una vía aérea estrechada.',
      fisiopatologia: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Sibilancias</strong>: agudas, musicales, por el paso de aire a alta velocidad a través de vías aéreas de pequeño-mediano calibre estrechadas de forma difusa (broncoespasmo, edema de la mucosa, tapones de moco) — más audibles en la espiración porque la vía aérea se estrecha dinámicamente al espirar (la presión pleural positiva comprime bronquios ya de por sí obstruidos).</li>
  <li><strong>Roncus</strong>: más graves, similares a un ronquido, por vibración de secreciones en vías aéreas de mayor calibre — a diferencia de las sibilancias, suelen cambiar de tono o desaparecer transitoriamente después de toser, porque la tos moviliza las secreciones que los generan.</li>
</ul>
<p style="margin:10px 0 0;"><a class="stigma-photo-link secondary" href="https://www.practicalclinicalskills.com/lung-sounds-audio" target="_blank" rel="noopener noreferrer">Escuchar sibilancias y roncus (audio, Practical Clinical Skills) ↗</a></p>
${videoBlock('Video 5', 'Sibilancia espiratoria — grabación real', 'T4qNgi4Vrvo', 'Medzcool (YouTube)')}`,
      criterios_dx: 'Sibilancias difusas en ambos campos → obstrucción de vía aérea generalizada (asma, EPOC exacerbado). Sibilancia localizada, fija, que no cambia con la tos → sospecha de obstrucción endobronquial focal (cuerpo extraño, tumor endobronquial) hasta demostrar lo contrario.',
      dx_diferencial: 'Asma, EPOC exacerbado, bronquitis, edema pulmonar cardiogénico en fase temprana ("asma cardial"), obstrucción endobronquial focal.'
    },
    {
      nombre: 'Ruidos agregados discontinuos: estertores y roce pleural',
      color: '#8c3a34',
      definicion: 'Sonidos breves, no musicales, "crepitantes" (estertores/crackles), y el roce áspero generado por la fricción de las hojas pleurales inflamadas.',
      fisiopatologia: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Estertores finos</strong> (tipo "velcro"): se generan por la apertura súbita y en cascada de pequeñas vías aéreas y alvéolos previamente colapsados, típicamente al final de la inspiración; no cambian con la tos. Característicos de fibrosis pulmonar (bibasales, persistentes) y de las fases tempranas de edema pulmonar o neumonía.</li>
  <li><strong>Estertores gruesos</strong>: por el paso de aire a través de secreciones en vías aéreas de mayor calibre; SÍ se modifican o desaparecen con la tos (a diferencia de los finos) — típicos de bronquiectasias, EPOC con abundantes secreciones, o edema pulmonar avanzado.</li>
  <li><strong>Roce pleural</strong>: sonido áspero, descrito como "cuero nuevo" o "pisar sobre nieve", por la fricción de las hojas pleurales inflamadas que han perdido su lubricación normal; se ausculta tanto en inspiración como en espiración, no se modifica con la tos, y característicamente DESAPARECE si se acumula suficiente derrame pleural entre ambas hojas (que deja de haber fricción directa).</li>
</ul>
<p style="margin:8px 0 0;">La Tabla 1 resume la clasificación y el mecanismo de cada ruido agregado.</p>
${figBlock('Tabla 1', 'Ruidos agregados: clasificación y mecanismo', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Ruido</th>
        <th style="text-align:left;padding:5px 6px;">Tipo</th>
        <th style="text-align:left;padding:5px 6px;">Mecanismo</th>
        <th style="text-align:left;padding:5px 6px;">¿Cambia con la tos?</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Sibilancias</strong></td><td style="padding:5px 6px;">Continuo, agudo, musical</td><td style="padding:5px 6px;">Flujo turbulento en vía aérea pequeña estrechada (broncoespasmo/edema/moco)</td><td style="padding:5px 6px;">No</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Roncus</strong></td><td style="padding:5px 6px;">Continuo, grave, "ronquido"</td><td style="padding:5px 6px;">Secreciones en vía aérea de mayor calibre</td><td style="padding:5px 6px;">Sí, suele cambiar/desaparecer</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Estertores finos ("velcro")</strong></td><td style="padding:5px 6px;">Discontinuo, fin de inspiración</td><td style="padding:5px 6px;">Apertura súbita de vía aérea/alvéolos colapsados</td><td style="padding:5px 6px;">No</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Estertores gruesos</strong></td><td style="padding:5px 6px;">Discontinuo, ambas fases</td><td style="padding:5px 6px;">Paso de aire por secreciones en vía aérea grande</td><td style="padding:5px 6px;">Sí</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Roce pleural</strong></td><td style="padding:5px 6px;">Áspero, "cuero nuevo"</td><td style="padding:5px 6px;">Fricción de hojas pleurales inflamadas</td><td style="padding:5px 6px;">No (desaparece si aparece derrame)</td></tr>
      </tbody>
    </table>
    </div>`)}
<p style="margin:10px 0 0;"><a class="stigma-photo-link secondary" href="https://www.practicalclinicalskills.com/lung-sounds-audio" target="_blank" rel="noopener noreferrer">Escuchar estertores finos, gruesos y roce pleural (audio, Practical Clinical Skills) ↗</a></p>
${videoBlock('Video 6', 'Estertores gruesos — grabación real', 'hr6xn702-QU', 'AMBOSS (YouTube)')}
${videoBlock('Video 7', 'Estertores (crepitantes) — grabación real con forma de onda', 'kwltwuAPn1o', 'Eko Health (YouTube) — estetoscopio digital')}`,
      criterios_dx: 'Estertores finos que NO cambian con la tos → orientan a fibrosis intersticial o edema pulmonar temprano. Estertores gruesos que SÍ cambian con la tos → orientan a secreciones en vía aérea grande. Un roce pleural que desaparece en la evolución de un cuadro con dolor pleurítico sugiere que se está formando un derrame.',
      dx_diferencial: 'Estertores finos bibasales persistentes: fibrosis pulmonar. Estertores finos que aparecen y evolucionan: edema pulmonar, neumonía temprana. Estertores gruesos: bronquiectasias, EPOC con secreciones. Roce pleural: pleuritis (infecciosa, autoinmune, urémica, postinfarto).'
    },
    {
      nombre: 'Transmisión de la voz: broncofonía, pectoriloquia áfona y egofonía',
      color: '#8c3a34',
      definicion: 'Pruebas de auscultación de la voz que exploran el mismo fenómeno físico que el frémito táctil, pero con el oído en vez de la mano.',
      clinica: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Broncofonía</strong>: se pide al paciente decir "33" en voz normal mientras se ausculta; positiva cuando las palabras se escuchan anormalmente claras e intensas.</li>
  <li><strong>Pectoriloquia áfona</strong>: se pide al paciente susurrar "33"; positiva cuando incluso la voz susurrada se transmite con una claridad excepcional, distinguiéndose las sílabas.</li>
  <li><strong>Egofonía</strong>: se pide al paciente decir una "e" sostenida; positiva cuando se ausculta como una "a" nasal y cambiada de timbre ("voz de cabra").</li>
</ul>`,
      fisiopatologia: 'Las tres comparten el mismo mecanismo que el frémito aumentado: el tejido consolidado transmite mejor las vibraciones sonoras que el parénquima aireado normal, que normalmente filtra y atenúa las frecuencias altas de la voz. La egofonía tiene un matiz adicional: se ausculta característicamente en el límite superior de un derrame pleural, donde el pulmón subyacente está comprimido pero no completamente consolidado — esa combinación filtra selectivamente ciertas frecuencias y cambia el timbre percibido de la "e" a una "a".',
      criterios_dx: `Las tres pruebas son positivas sobre consolidación y negativas sobre pulmón normal o derrame franco (donde el líquido, a diferencia del tejido sólido, amortigua la transmisión); la egofonía específicamente marca el borde superior de un derrame. La Tabla 2 compara los hallazgos de expansión, frémito, percusión, auscultación y posición traqueal en los 4 grandes síndromes pleuropulmonares descritos a lo largo de este tema.${figBlock('Tabla 2', 'Los 4 grandes síndromes pleuropulmonares: hallazgos comparados', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Síndrome</th>
        <th style="text-align:left;padding:5px 6px;">Expansión</th>
        <th style="text-align:left;padding:5px 6px;">Frémito</th>
        <th style="text-align:left;padding:5px 6px;">Percusión</th>
        <th style="text-align:left;padding:5px 6px;">Auscultación</th>
        <th style="text-align:left;padding:5px 6px;">Tráquea</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Consolidación</strong></td><td style="padding:5px 6px;">↓ local</td><td style="padding:5px 6px;">↑</td><td style="padding:5px 6px;">Matidez elástica</td><td style="padding:5px 6px;">Soplo tubárico, broncofonía/pectoriloquia áfona +</td><td style="padding:5px 6px;">Centrada</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Derrame pleural</strong></td><td style="padding:5px 6px;">↓↓ local</td><td style="padding:5px 6px;">Abolido</td><td style="padding:5px 6px;">Matidez pétrea (Damoiseau-Ellis)</td><td style="padding:5px 6px;">Murmullo abolido; egofonía en el borde superior</td><td style="padding:5px 6px;">Desviada al lado sano si es masivo</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Neumotórax</strong></td><td style="padding:5px 6px;">↓ local</td><td style="padding:5px 6px;">Abolido</td><td style="padding:5px 6px;">Hiperresonancia/timpanismo</td><td style="padding:5px 6px;">Murmullo abolido</td><td style="padding:5px 6px;">Desviada al lado sano si es a tensión</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Atelectasia (obstructiva)</strong></td><td style="padding:5px 6px;">↓ local</td><td style="padding:5px 6px;">Abolido</td><td style="padding:5px 6px;">Matidez</td><td style="padding:5px 6px;">Murmullo abolido</td><td style="padding:5px 6px;">Desviada HACIA el lado enfermo</td></tr>
      </tbody>
    </table>
    </div>
    <p style="font-size:11px;color:var(--ink-faint);margin:8px 0 0;">La desviación traqueal es el dato que más ayuda a distinguir derrame/neumotórax (empujan la tráquea al lado sano) de la atelectasia (la tráquea es atraída hacia el lado colapsado, por pérdida de volumen).</p>`)}`,
      dx_diferencial: 'Positivas: consolidación (neumonía), y egofonía en el límite superior de un derrame. Negativas/abolidas: derrame franco, neumotórax, atelectasia obstructiva completa — igual que el frémito.'
    }
  ]
};

export const compCites = {
  'Secuencia y técnica general de la exploración respiratoria': { definicion: [1, 2], clinica: [1, 3], criterios_dx: [1] },
  'Topografía torácica y puntos de comparación': { definicion: [1, 5], clinica: [1] },
  'Patrón respiratorio, frecuencia y signos de dificultad respiratoria': { definicion: [1, 4], fisiopatologia: [1, 3, 4], criterios_dx: [4] },
  'Morfología del tórax': { definicion: [1, 5], fisiopatologia: [1, 3] },
  'Expansión torácica': { definicion: [1, 5], clinica: [1] },
  'Frémito táctil (vocal)': { definicion: [1, 5], fisiopatologia: [1, 3] },
  'Técnica y sonidos de percusión': { definicion: [1, 5], clinica: [1], fisiopatologia: [1, 3] },
  'Excursión diafragmática y signos percutorios especiales': { clinica: [1], fisiopatologia: [3, 5] },
  'Ruidos respiratorios normales': { definicion: [1, 6, 7], fisiopatologia: [6, 7] },
  'Ruidos agregados continuos: sibilancias y roncus': { definicion: [1, 6], fisiopatologia: [6, 7] },
  'Ruidos agregados discontinuos: estertores y roce pleural': { definicion: [1, 8], fisiopatologia: [6, 8] },
  'Transmisión de la voz: broncofonía, pectoriloquia áfona y egofonía': { definicion: [1, 5], fisiopatologia: [1, 3] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {};
export const escalaCalc = {};
export const diagCites = { clinica: [1, 3] };
export const clasificacionCite = [];
export const seguimientoCite = [];
export const compGroups = [
  { title: 'Metodología general', items: ['Secuencia y técnica general de la exploración respiratoria', 'Topografía torácica y puntos de comparación'] },
  { title: 'Inspección', items: ['Patrón respiratorio, frecuencia y signos de dificultad respiratoria', 'Morfología del tórax'] },
  { title: 'Palpación', items: ['Expansión torácica', 'Frémito táctil (vocal)'] },
  { title: 'Percusión', items: ['Técnica y sonidos de percusión', 'Excursión diafragmática y signos percutorios especiales'] },
  { title: 'Auscultación', items: ['Ruidos respiratorios normales', 'Ruidos agregados continuos: sibilancias y roncus', 'Ruidos agregados discontinuos: estertores y roce pleural', 'Transmisión de la voz: broncofonía, pectoriloquia áfona y egofonía'] }
];
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Técnica general' },
  { id: 'complicaciones', label: 'Maniobras y hallazgos' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
