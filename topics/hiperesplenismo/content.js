// topics/hiperesplenismo/content.js: Hiperesplenismo.
// Segundo de los 3 temas independientes que reemplazan el ítem combinado "Linfadenopatías,
// hiperesplenismo y síndrome de hiperviscosidad" del temario (ver también topics/linfadenopatias/
// y, próximamente, topics/sindrome-hiperviscosidad/).
//
// Tema de enfoque sindrómico (no una sola entidad biológica): las 4 tarjetas de "enfermedad" son
// las 4 grandes categorías etiológicas del hiperesplenismo, y las 4 complicaciones son las
// consecuencias transversales del síndrome y de su tratamiento definitivo (esplenectomía).
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás debe ser un `export const` de nivel superior, HERMANO de `content`.
//
// IMPORTANTE (ver memoria del proyecto sobre study.js): construir cada pregunta con la respuesta
// correcta en options[0]/correct:0 primero, verificar el conteo, y solo entonces redistribuir
// mecánicamente con un script.

export const meta = {
  id: 'hiperesplenismo',
  titulo: 'Hiperesplenismo',
  subtitulo: 'Módulo 25 · Medicina Interna',
  accent: '#5c6b2d',
  accentDim: '#9aab6f'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const etiologiasHtml = `
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;max-width:560px;margin:0 auto;font-size:10px;line-height:1.5;color:var(--ink);">
  <div style="background:#3d5a7333;border:1px solid #3d5a73;border-radius:8px;padding:8px;"><strong>Hipertensión portal</strong><br>Mecanismo: congestión vascular pasiva crónica<br>Citopenia típica: trombocitopenia predominante</div>
  <div style="background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:8px;padding:8px;"><strong>Enfermedad hematológica primaria</strong><br>Mecanismo: infiltración clonal/hematopoyesis extramedular<br>Citopenia típica: mixta, con frecuencia grave</div>
  <div style="background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:8px;padding:8px;"><strong>Enfermedad infecciosa</strong><br>Mecanismo: hiperplasia reactiva sostenida por antígeno crónico<br>Citopenia típica: pancitopenia en casos avanzados</div>
  <div style="background:#6b4a2e33;border:1px solid #6b4a2e;border-radius:8px;padding:8px;"><strong>Depósito/inflamatoria</strong><br>Mecanismo: acumulación de macrófagos cargados o granulomas<br>Citopenia típica: variable según extensión</div>
</div>`;

const cicloHiperesplenismoHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:520px;margin:0 auto;">
  <div style="background:#5c6b2d33;border:1px solid #5c6b2d;border-radius:8px;padding:7px 14px;font-size:11px;color:var(--ink);text-align:center;">Causa subyacente (hipertensión portal, infiltración, infección, depósito)</div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="background:#3d5a7333;border:1px solid #3d5a73;border-radius:8px;padding:7px 14px;font-size:11px;color:var(--ink);text-align:center;">Esplenomegalia</div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:8px;padding:7px 14px;font-size:10px;color:var(--ink);text-align:center;max-width:460px;">↑ superficie de contacto y tiempo de tránsito de las células sanguíneas por la pulpa esplénica → secuestro y destrucción prematura acelerados</div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:8px;padding:7px 14px;font-size:11px;color:var(--ink);text-align:center;">Citopenia periférica (1 o más líneas)</div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:7px 14px;font-size:10px;color:var(--ink);text-align:center;max-width:460px;">Médula ósea normal o hiperplásica compensadora (a diferencia de una citopenia por falla medular primaria)</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El hiperesplenismo es un síndrome clínico, no una enfermedad en sí mismo, definido clásicamente por la tétrada de Dameshek: esplenomegalia, citopenia periférica de 1 o más líneas celulares, médula ósea normal o hiperplásica compensadora (que descarta una falla medular primaria como causa de la citopenia), y corrección de la citopenia tras esplenectomía. Representa la vía final común de múltiples enfermedades subyacentes muy distintas entre sí (hipertensión portal, infiltración neoplásica, infección crónica, enfermedades de depósito) que comparten el mismo mecanismo: un bazo agrandado que secuestra y destruye células sanguíneas normales a una tasa acelerada.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La causa más frecuente de hiperesplenismo en la práctica clínica general es la hipertensión portal secundaria a cirrosis hepática, dada la alta prevalencia de la enfermedad hepática crónica; a nivel global, las causas infecciosas (particularmente la malaria crónica) representan una proporción considerable en regiones endémicas.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Hiperesplenismo por Hipertensión Portal</strong>: congestión vascular pasiva del bazo secundaria a cirrosis hepática u otra causa de hipertensión portal; la causa más frecuente en la práctica clínica general.</li>
    <li><strong>Hiperesplenismo por Enfermedad Hematológica Primaria</strong>: infiltración esplénica por un proceso mieloproliferativo (mielofibrosis), linfoproliferativo (leucemia linfocítica crónica, linfoma), o hemolítico crónico.</li>
    <li><strong>Hiperesplenismo por Enfermedad Infecciosa</strong>: hiperplasia reactiva esplénica sostenida por una infección crónica (malaria, endocarditis subaguda, tuberculosis, kala-azar/leishmaniasis visceral).</li>
    <li><strong>Hiperesplenismo por Enfermedad de Depósito/Inflamatoria</strong>: infiltración esplénica por depósito de material anómalo (enfermedad de Gaucher) o por un proceso granulomatoso/autoinmune sistémico (sarcoidosis, síndrome de Felty).</li>
  </ul>
</div>
${figBlock('Imagen 2', 'Las 4 categorías etiológicas y su mecanismo distintivo', etiologiasHtml)}
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Cirrosis hepática o cualquier otra causa de hipertensión portal</li>
    <li>Neoplasia hematológica primaria conocida</li>
    <li>Infección crónica no tratada en una región endémica (malaria, leishmaniasis)</li>
    <li>Enfermedad de depósito hereditaria conocida (enfermedad de Gaucher)</li>
    <li>Enfermedad autoinmune sistémica de larga evolución (artritis reumatoide en el síndrome de Felty)</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> El bazo normal ya actúa como un filtro fisiológico que remueve células sanguíneas senescentes o defectuosas de la circulación; en el hiperesplenismo, el agrandamiento esplénico (por cualquiera de las 4 causas descritas) aumenta desproporcionadamente la superficie de contacto y el tiempo de tránsito de las células sanguíneas normales por la pulpa esplénica, acelerando su secuestro y destrucción incluso cuando esas células son funcionalmente normales.${figBlock('Imagen 1', 'Ciclo fisiopatológico del hiperesplenismo', cicloHiperesplenismoHtml)} La médula ósea responde de forma compensadora aumentando su producción (hiperplasia), un hallazgo que distingue esta citopenia de la producida por una falla medular primaria (donde la médula está hipoplásica o infiltrada, no hiperplásica); esta distinción es clínicamente crítica porque orienta el estudio hacia la causa de la esplenomegalia en lugar de hacia un trastorno medular primario. Analogía: un bazo con hiperesplenismo funciona como un control de calidad en una fábrica que, al volverse desproporcionadamente estricto (por estar sobrecargado o alterado), empieza a rechazar productos perfectamente buenos junto con los defectuosos, mientras la línea de producción (la médula ósea) trabaja horas extra intentando compensar el rechazo excesivo.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde el hallazgo incidental de esplenomegalia con citopenia leve y asintomática hasta la citopenia grave sintomática (anemia sintomática, sangrado por trombocitopenia, infecciones recurrentes por leucopenia) que requiere esplenectomía; el enfoque diagnóstico completo, la clasificación por etiología, y las complicaciones tanto del síndrome como de su tratamiento definitivo se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Dameshek W. Hypersplenism. Bull N Y Acad Med. 1955;31(2):113-136.',
  'Chapman J, Goyal A, Azevedo AM. Splenomegaly. StatPearls. Treasure Island (FL): StatPearls Publishing; 2023.',
  'Pozo AL, Godfrey EM, Bowles KM. Splenomegaly: investigation, diagnosis and management. Blood Rev. 2009;23(3):105-111.',
  'Motyckova G, Steensma DP. Why does my patient have lymphadenopathy or splenomegaly? Hematol Oncol Clin North Am. 2012;26(2):395-408.',
  'Bezerra AS, D\'Ippolito G, Faintuch S, et al. Determination of splenomegaly by CT: is there a place for a single measurement? AJR Am J Roentgenol. 2005;184(5):1510-1513.',
  'Motta G, Vianello F, Menin C, et al. Hypersplenism and portal hypertension: a review. Minerva Gastroenterol Dietol. 2000;46(3):203-208.',
  'Lynch RM, Sandhu R. Traumatic splenic injury: a review. Trauma. 2015;17(2):83-92.',
  'Rice HE, Oldham KT, Hillery CA, et al. Clinical and hematologic benefits of partial splenectomy for congenital hemolytic anemias in children. Ann Surg. 2003;237(2):281-288.',
  'Rubin LG, Schaffner W. Clinical practice. Care of the asplenic patient. N Engl J Med. 2014;371(4):349-356.',
  'Kyaw MH, Holmes EM, Toolis F, et al. Evaluation of severe infection and survival after splenectomy. Am J Med. 2006;119(3):276.e1-7.',
  'Boyle S, White RH, Brunson A, Wun T. Splenectomy and the incidence of venous thromboembolism and sepsis in patients with immune thrombocytopenia. Blood. 2013;121(23):4782-4790.',
  'Weledji EP. Benefits and risks of splenectomy. Int J Surg. 2014;12(2):113-119.',
  'Nores M, Phillips EH, Morgenstern L, Hiatt JR. The clinical spectrum of splenic infarction. Am Surg. 1998;64(2):182-188.',
  'Renzulli P, Hostettler A, Schoepfer AM, et al. Systematic review of atraumatic splenic rupture. Br J Surg. 2009;96(10):1114-1121.',
  'Thomsen RW, Schoonen WM, Farkas DK, et al. Risk for hospital contact with infection in patients with splenectomy: a population-based cohort study. Ann Intern Med. 2009;151(8):546-555.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Hiperesplenismo compensado (citopenia leve)',
      tituloB: 'Hiperesplenismo descompensado (citopenia grave sintomática)',
      compensada: 'Esplenomegalia detectada incidentalmente o por sensación de plenitud/molestia en el hipocondrio izquierdo, con citopenia leve (por ejemplo, plaquetas 100,000-150,000/µL) sin síntomas atribuibles directamente a la citopenia.',
      descompensada: 'Citopenia grave sintomática: anemia con fatiga marcada, trombocitopenia con sangrado mucocutáneo o petequial, leucopenia con infecciones recurrentes; en algunos casos, dolor agudo en el hipocondrio izquierdo por infarto o rotura esplénica (ver Complicaciones).'
    },
    laboratorio: [
      { prueba: 'Biometría hemática completa con frotis de sangre periférica', utilidad: 'Documenta el patrón de citopenia (1, 2, o las 3 líneas celulares) y busca hallazgos morfológicos que orienten hacia la causa subyacente (blastos, dacriocitos en mielofibrosis, esferocitos).' },
      { prueba: 'Pruebas de función hepática y estudio de hipertensión portal', utilidad: 'Cuando la sospecha etiológica inicial es hepática, dada la alta frecuencia de la hipertensión portal como causa.' },
      { prueba: 'Frotis de sangre periférica dirigido y serologías infecciosas', utilidad: 'Ante sospecha de causa infecciosa (malaria, leishmaniasis) según el contexto epidemiológico del paciente.' },
      { prueba: 'Aspirado/biopsia de médula ósea', utilidad: 'Confirma que la médula es normal o hiperplásica compensadora (no hipoplásica ni infiltrada), un criterio central de la tétrada diagnóstica, y puede identificar directamente una infiltración neoplásica o por depósito.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios de Hiperesplenismo (tétrada de Dameshek, con calculadora)', interpretacion: 'Sintetiza los 4 elementos clásicos de la definición sindrómica.', cutoff: 'Categórico, ver Escalas' },
      { metodo: 'Ecografía abdominal con Doppler', interpretacion: 'Confirma y mide el tamaño esplénico, y evalúa el sistema venoso portoesplénico en busca de hipertensión portal o trombosis.', cutoff: 'Bazo normal: hasta ~12-13 cm de longitud craneocaudal' }
    ],
    imagen: [
      { modalidad: 'Ecografía abdominal', hallazgos: 'Estudio de primera línea para confirmar y cuantificar la esplenomegalia, y evaluar el sistema portoesplénico.' },
      { modalidad: 'TC de abdomen con contraste', hallazgos: 'Caracteriza mejor la arquitectura esplénica (infiltración focal, infarto), y es útil para el estudio de la causa subyacente y la planeación quirúrgica si se considera esplenectomía.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema es la etiología subyacente del hiperesplenismo (hipertensión portal, enfermedad hematológica primaria, infecciosa, o de depósito/inflamatoria), y dentro de cada una, la gravedad de la citopenia resultante (compensada/asintomática vs. descompensada/sintomática que orienta hacia tratamiento definitivo).',
    escalas: [
      { nombre: 'Criterios de Hiperesplenismo (tétrada de Dameshek)', componentes: 'Esplenomegalia, citopenia periférica, médula compensadora, corrección post-esplenectomía. Calculadora disponible más abajo.', formula: 'Los 4 elementos combinados confirman el síndrome; esplenomegalia + citopenia son suficientes para sospecharlo e iniciar el estudio.', interpretacion: 'Distingue el hiperesplenismo de una citopenia por falla medular primaria (donde la médula NO seria compensadora).' },
      { nombre: 'Grado de esplenomegalia por tamaño', componentes: 'Longitud craneocaudal del bazo medida por imagen.', formula: 'Leve: 13-17 cm. Moderada: 17-22 cm. Masiva: &gt;22 cm (algunos criterios usan &gt;20 cm).', interpretacion: 'El grado de esplenomegalia orienta el riesgo de complicaciones (rotura, infarto) y la dificultad técnica de una eventual esplenectomía.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Hiperesplenismo por Hipertensión Portal',
      color: '#3d5a73',
      definicion: 'La causa más frecuente de hiperesplenismo en la práctica clínica general: congestión vascular pasiva y crónica del bazo secundaria a hipertensión portal, con mayor frecuencia por cirrosis hepática avanzada, aunque también por trombosis de la vena porta o esplénica, o por causas prehepáticas/posthepáticas menos frecuentes de hipertensión portal.',
      fisiopatologia: 'El aumento sostenido de la presión en el sistema venoso portal se transmite retrógradamente a la vena esplénica, produciendo congestión vascular pasiva crónica del bazo con hiperplasia progresiva de la pulpa roja; el bazo congestionado y agrandado retiene y destruye células sanguíneas normales a una tasa acelerada, produciendo la citopenia característica, con frecuencia predominantemente trombocitopenia (por el mayor volumen de reserva esplénica normal de plaquetas, que se amplifica considerablemente en el bazo congestionado).',
      epidemiologia: 'Presente en una proporción considerable de los pacientes con cirrosis hepática avanzada, particularmente con hipertensión portal clínicamente significativa; la trombocitopenia es con frecuencia el primer signo de laboratorio que sugiere hipertensión portal en un paciente con hepatopatía crónica no diagnosticada previamente.',
      factores_riesgo: ['Cirrosis hepática de cualquier etiología', 'Trombosis de la vena porta o esplénica', 'Hipertensión portal no cirrótica (fibrosis portal idiopática, entre otras)', 'Enfermedad hepática avanzada no tratada'],
      clinica: 'Esplenomegalia con frecuencia detectada en el examen abdominal de un paciente con estigmas de hepatopatía crónica; trombocitopenia predominante, con frecuencia leve-moderada, detectada en el laboratorio de rutina; puede coexistir con las manifestaciones propias de la hipertensión portal (varices, ascitis).',
      criterios_dx: 'Esplenomegalia confirmada por imagen en un paciente con evidencia de hipertensión portal (hallazgos ecográficos de hipertensión portal, varices, o cirrosis establecida), con citopenia (particularmente trombocitopenia) proporcional al grado de esplenomegalia.',
      laboratorio: 'Biometría hemática (trombocitopenia predominante), pruebas de función hepática, estudio de la causa de la hepatopatía subyacente.',
      imagen: 'Ecografía abdominal con Doppler para confirmar esplenomegalia y evaluar el sistema portoesplénico (calibre de la vena porta, flujo, presencia de colaterales).',
      complementarios: 'Elastografía hepática o, si está indicado, medición del gradiente de presión venosa hepática para confirmar y cuantificar la hipertensión portal.',
      dx_diferencial: 'Hiperesplenismo por enfermedad hematológica primaria (ver esa tarjeta, particularmente si la citopenia es desproporcionada al grado de hepatopatía), trombosis aislada de la vena esplénica sin cirrosis (hipertensión portal segmentaria izquierda).',
      tx_medico: 'Manejo de la enfermedad hepática de base y de la hipertensión portal según su causa (ver el tema de Cirrosis Hepática para el desarrollo completo); la trombocitopenia leve-moderada aislada por hiperesplenismo con frecuencia no requiere tratamiento específico dirigido al bazo.',
      tx_farmacologico: 'Agonistas del receptor de trombopoyetina considerados en casos seleccionados para elevar el recuento plaquetario antes de un procedimiento invasivo planeado, evitando así una transfusión o una intervención esplénica innecesaria.',
      tx_intervencionista: 'Derivación portosistémica intrahepática transyugular (TIPS) considerada en casos seleccionados de hipertensión portal grave con otras indicaciones asociadas (no únicamente por el hiperesplenismo); esplenectomía reservada para casos de citopenia grave sintomática refractaria, dado el riesgo quirúrgico aumentado en el paciente cirrótico.',
      criterios_uci: 'Descompensación aguda de la hepatopatía de base (ver el tema de Cirrosis Hepática).',
      criterios_tips: 'Hipertensión portal grave con indicaciones asociadas (hemorragia variceal recurrente, ascitis refractaria), evaluado en conjunto con el manejo global de la hepatopatía.',
      criterios_trasplante: 'Trasplante hepático considerado según los criterios estándar de la enfermedad hepática de base (ver el tema de Cirrosis Hepática).',
      seguimiento_hospitalario: 'Vigilancia del recuento plaquetario y de las demás manifestaciones de la hepatopatía de base durante cualquier hospitalización relacionada.',
      seguimiento_ambulatorio: 'Vigilancia periódica de la biometría hemática en el contexto del seguimiento habitual de la hepatopatía crónica de base.',
      pronostico: 'Determinado principalmente por la enfermedad hepática de base más que por el hiperesplenismo en sí, que rara vez requiere tratamiento dirigido independiente salvo citopenia grave sintomática.',
      algoritmo: ['Trombocitopenia incidental en paciente con hepatopatía crónica → sospechar hiperesplenismo por hipertensión portal', 'Ecografía abdominal con Doppler para confirmar esplenomegalia y evaluar el sistema portoesplénico', 'Descartar otra causa de citopenia si la magnitud es desproporcionada al grado de hepatopatía', 'Manejo dirigido a la hepatopatía/hipertensión portal de base', 'Esplenectomía o TIPS reservados para citopenia grave sintomática refractaria o indicaciones asociadas']
    },
    {
      nombre: 'Hiperesplenismo por Enfermedad Hematológica Primaria',
      color: '#7a1f3d',
      definicion: 'Hiperesplenismo secundario a la infiltración directa del bazo por un proceso hematológico primario: mielofibrosis (con frecuencia la causa de la esplenomegalia más masiva de todas las causas de este tema, por hematopoyesis extramedular esplénica), leucemia linfocítica crónica u otro linfoma con afectación esplénica, o un proceso hemolítico crónico grave.',
      fisiopatologia: 'A diferencia de la congestión vascular pasiva de la hipertensión portal, aquí el bazo se agranda por infiltración directa de células clonales (neoplásicas) o, en la mielofibrosis, por hematopoyesis extramedular compensadora que ocurre en el bazo cuando la médula ósea fibrótica pierde su capacidad hematopoyética normal; el bazo infiltrado, además de aumentar su función de secuestro/destrucción como cualquier bazo agrandado, con frecuencia tiene una función hematopoyética activa propia (particularmente en la mielofibrosis), lo que complica considerablemente la interpretación de la citopenia periférica resultante (que refleja tanto secuestro esplénico como la enfermedad hematológica de base).',
      epidemiologia: 'La mielofibrosis produce con frecuencia la esplenomegalia más masiva y sintomática de todas las causas de hiperesplenismo; la leucemia linfocítica crónica y ciertos linfomas también producen esplenomegalia significativa en una proporción relevante de los casos avanzados.',
      factores_riesgo: ['Neoplasia mieloproliferativa conocida (particularmente mielofibrosis)', 'Leucemia linfocítica crónica u otro linfoma de bajo grado conocido', 'Anemia hemolítica crónica grave no controlada', 'Enfermedad hematológica avanzada sin tratamiento sistémico previo'],
      clinica: 'Esplenomegalia con frecuencia masiva y palpable a gran distancia del reborde costal (particularmente en la mielofibrosis), saciedad temprana y dolor abdominal por el efecto de masa, citopenias que pueden ser desproporcionadamente graves y de mecanismo mixto (infiltración + secuestro), síntomas constitucionales de la neoplasia hematológica de base.',
      criterios_dx: 'Esplenomegalia (con frecuencia masiva) en un paciente con neoplasia hematológica conocida o recién diagnosticada mediante el estudio de médula ósea, que muestra infiltración por el proceso clonal correspondiente.',
      laboratorio: 'Biometría hemática con frotis (dacriocitos característicos en mielofibrosis, linfocitosis en leucemia linfocítica crónica), LDH elevada con frecuencia, estudio molecular/citogenético dirigido según la sospecha.',
      imagen: 'Ecografía o TC abdominal para cuantificar el grado de esplenomegalia (con frecuencia masiva en este grupo), PET-TC si hay sospecha de linfoma con afectación esplénica.',
      complementarios: 'Aspirado/biopsia de médula ósea, central para el diagnóstico definitivo y para confirmar el mecanismo de la citopenia (infiltración vs. secuestro esplénico puro).',
      dx_diferencial: 'Hiperesplenismo por hipertensión portal (ver esa tarjeta, particularmente si coexiste hepatopatía), hiperesplenismo por enfermedad infecciosa (ver esa tarjeta si hay contexto epidemiológico compatible).',
      tx_medico: 'Tratamiento dirigido a la neoplasia hematológica de base como medida central (ver los temas específicos de Síndromes Mieloproliferativos, Leucemia Linfocítica Crónica, y Linfomas); la esplenomegalia y la citopenia con frecuencia mejoran parcialmente con el control de la enfermedad de base.',
      tx_farmacologico: 'Específico según la neoplasia de base (inhibidores de JAK2 en mielofibrosis con esplenomegalia sintomática, entre otros; ver los temas correspondientes).',
      tx_intervencionista: 'Esplenectomía considerada en casos de esplenomegalia masiva sintomática refractaria al tratamiento sistémico, particularmente en mielofibrosis, sopesando el riesgo quirúrgico (con frecuencia mayor en este grupo por el tamaño esplénico y la coagulopatía asociada); radioterapia esplénica de baja dosis como alternativa paliativa en pacientes no candidatos a cirugía.',
      criterios_uci: 'Complicaciones agudas de la neoplasia hematológica de base (ver los temas correspondientes).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante alogénico de células madre hematopoyéticas considerado en mielofibrosis de alto riesgo en el paciente elegible (ver el tema de Síndromes Mieloproliferativos).',
      seguimiento_hospitalario: 'Vigilancia perioperatoria estrecha si se realiza esplenectomía, dado el mayor riesgo quirúrgico en este grupo.',
      seguimiento_ambulatorio: 'Seguimiento dirigido por el manejo específico de la neoplasia hematológica de base, con vigilancia seriada del tamaño esplénico y la biometría hemática.',
      pronostico: 'Determinado principalmente por la neoplasia hematológica de base; la esplenomegalia masiva en mielofibrosis es, en sí misma, un factor asociado a peor pronóstico dentro de los sistemas de estratificación de riesgo de esa enfermedad.',
      algoritmo: ['Esplenomegalia masiva + citopenia en paciente con neoplasia hematológica conocida → hiperesplenismo por infiltración', 'Biopsia de médula ósea para confirmar/caracterizar el proceso clonal si no está ya establecido', 'Tratamiento sistémico dirigido a la neoplasia de base como medida central', 'Vigilancia seriada del tamaño esplénico y la citopenia', 'Esplenectomía o radioterapia paliativa solo si es masiva, sintomática, y refractaria al tratamiento sistémico']
    },
    {
      nombre: 'Hiperesplenismo por Enfermedad Infecciosa',
      color: '#8a6a1f',
      definicion: 'Hiperesplenismo secundario a la hiperplasia reactiva sostenida del bazo por una infección crónica: malaria (particularmente el síndrome de esplenomegalia malárica hiperreactiva), endocarditis infecciosa subaguda, tuberculosis diseminada, o leishmaniasis visceral (kala-azar); una causa particularmente relevante en el contexto epidemiológico de regiones endémicas.',
      fisiopatologia: 'La estimulación antigénica crónica y sostenida por el patógeno persistente produce una hiperplasia reactiva progresiva del tejido linfoide y macrofágico esplénico (análoga en principio a la hiperplasia folicular reactiva de un ganglio linfático, pero a escala esplénica y de forma sostenida en el tiempo), que con el tiempo produce esplenomegalia marcada y el secuestro/destrucción acelerado de células sanguíneas característico del hiperesplenismo; en la leishmaniasis visceral, además, el parásito infecta directamente a los macrófagos esplénicos, amplificando aún más la respuesta inflamatoria y la esplenomegalia resultante.',
      epidemiologia: 'La malaria crónica es una causa muy relevante de hiperesplenismo a nivel global en regiones endémicas; la endocarditis subaguda y la tuberculosis diseminada son consideraciones importantes en el paciente con esplenomegalia y fiebre prolongada de origen desconocido; la leishmaniasis visceral es endémica en regiones específicas y produce una de las esplenomegalias más marcadas de causa infecciosa.',
      factores_riesgo: ['Residencia o viaje reciente a una región endémica de malaria o leishmaniasis', 'Valvulopatía cardiaca conocida (riesgo de endocarditis)', 'Exposición epidemiológica a tuberculosis', 'Inmunosupresión de base (mayor riesgo de infección diseminada)'],
      clinica: 'Esplenomegalia con frecuencia marcada, fiebre prolongada o recurrente, síntomas constitucionales (pérdida de peso, sudoración), hallazgos específicos según el patógeno (soplo cardiaco nuevo en endocarditis, hepatoesplenomegalia con pancitopenia marcada en leishmaniasis visceral).',
      criterios_dx: 'Confirmación microbiológica o serológica del patógeno causal (gota gruesa o prueba rápida para malaria, hemocultivos para endocarditis, cultivo/prueba molecular para tuberculosis, serología o aspirado esplénico/medular para leishmaniasis) en un paciente con esplenomegalia y citopenia compatibles.',
      laboratorio: 'Gota gruesa/prueba rápida de malaria si hay exposición epidemiológica, hemocultivos seriados si hay sospecha de endocarditis, estudio de tuberculosis dirigido, serología de leishmaniasis; biometría hemática con frecuencia muestra pancitopenia en los casos más avanzados.',
      imagen: 'Ecocardiograma si hay sospecha de endocarditis; ecografía o TC abdominal para caracterizar la esplenomegalia y descartar abscesos esplénicos asociados.',
      complementarios: 'Aspirado esplénico o de médula ósea para la confirmación parasitológica de leishmaniasis visceral cuando la serología no es concluyente.',
      dx_diferencial: 'Hiperesplenismo por enfermedad hematológica primaria (ver esa tarjeta, particularmente si no hay un contexto epidemiológico o clínico claro de infección), linfoma (que puede simular fiebre prolongada con esplenomegalia).',
      tx_medico: 'Tratamiento antimicrobiano específico y dirigido a la causa confirmada (antipalúdicos, antibioticoterapia prolongada para endocarditis, esquema antituberculoso completo, antiparasitarios específicos para leishmaniasis); la esplenomegalia y la citopenia mejoran con frecuencia de forma sustancial tras el tratamiento eficaz de la infección subyacente.',
      tx_farmacologico: 'Específico según el patógeno confirmado, con esquemas de duración variable y con frecuencia prolongada (particularmente tuberculosis y endocarditis).',
      tx_intervencionista: 'Reemplazo valvular quirúrgico considerado en la endocarditis complicada según sus criterios específicos; esplenectomía rara vez indicada de forma primaria en este grupo, reservada para citopenia grave persistente pese al tratamiento eficaz de la infección.',
      criterios_uci: 'Sepsis grave o choque séptico asociado a la infección subyacente, según su propio contexto.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta al tratamiento antimicrobiano dirigido y de la resolución progresiva de la citopenia.',
      seguimiento_ambulatorio: 'Seguimiento de la resolución de la esplenomegalia y la citopenia tras completar el tratamiento antimicrobiano; vigilancia de recurrencia en regiones endémicas.',
      pronostico: 'Generalmente favorable con el tratamiento antimicrobiano eficaz y oportuno de la infección causal; el retraso diagnóstico en la leishmaniasis visceral no tratada conlleva un pronóstico considerablemente peor.',
      algoritmo: ['Esplenomegalia + fiebre prolongada + contexto epidemiológico compatible → sospechar causa infecciosa', 'Estudio microbiológico/serológico dirigido según la sospecha epidemiológica específica', 'Tratamiento antimicrobiano dirigido a la causa confirmada', 'Vigilancia de la resolución progresiva de la esplenomegalia y la citopenia', 'Esplenectomía reservada para citopenia grave persistente pese a tratamiento eficaz de la infección']
    },
    {
      nombre: 'Hiperesplenismo por Enfermedad de Depósito/Inflamatoria',
      color: '#6b4a2e',
      definicion: 'Hiperesplenismo secundario a la infiltración esplénica por material de depósito anómalo (enfermedad de Gaucher, la causa hereditaria más frecuente de este subgrupo) o por un proceso granulomatoso/autoinmune sistémico (sarcoidosis, síndrome de Felty en la artritis reumatoide de larga evolución).',
      fisiopatologia: 'En la enfermedad de Gaucher, la deficiencia de la enzima glucocerebrosidasa produce acumulación progresiva de glucocerebrósido dentro de los macrófagos, que se acumulan característicamente en el bazo (y el hígado, la médula ósea) como "células de Gaucher", produciendo esplenomegalia marcada y con frecuencia hiperesplenismo grave; en la sarcoidosis, la formación de granulomas no caseificantes puede infiltrar el bazo de forma difusa; en el síndrome de Felty, la combinación de artritis reumatoide de larga evolución, esplenomegalia, y neutropenia refleja un mecanismo autoinmune complejo que incluye tanto secuestro esplénico como destrucción periférica mediada por autoanticuerpos.',
      epidemiologia: 'La enfermedad de Gaucher es infrecuente en la población general, pero es la enfermedad de depósito lisosomal más común entre las que producen hiperesplenismo; el síndrome de Felty ocurre en una minoría de los pacientes con artritis reumatoide de larga evolución, particularmente seropositiva.',
      factores_riesgo: ['Antecedente familiar de enfermedad de Gaucher (herencia autosómica recesiva)', 'Artritis reumatoide seropositiva de larga evolución para el síndrome de Felty', 'Sarcoidosis sistémica conocida con afectación multiorgánica'],
      clinica: 'Esplenomegalia (con frecuencia marcada en la enfermedad de Gaucher), citopenias, y hallazgos sistémicos específicos según la causa (dolor óseo y fracturas patológicas en la enfermedad de Gaucher por infiltración medular; artritis deformante activa en el síndrome de Felty; adenopatías y afectación pulmonar en la sarcoidosis).',
      criterios_dx: 'Confirmación específica según la causa: actividad enzimática de glucocerebrosidasa reducida y/o estudio genético para la enfermedad de Gaucher; artritis reumatoide seropositiva establecida + esplenomegalia + neutropenia para el síndrome de Felty; biopsia con granulomas no caseificantes para sarcoidosis.',
      laboratorio: 'Actividad enzimática de glucocerebrosidasa y quitotriosidasa (marcador de actividad de la enfermedad) en sospecha de Gaucher; factor reumatoide y anticuerpos anti-péptido citrulinado cíclico en sospecha de síndrome de Felty; enzima convertidora de angiotensina considerada en sarcoidosis (marcador inespecífico de apoyo).',
      imagen: 'Ecografía o resonancia magnética abdominal para cuantificar la esplenomegalia y, en Gaucher, evaluar también la afectación ósea asociada.',
      complementarios: 'Biopsia de médula ósea mostrando las células de Gaucher características (macrófagos con aspecto de "papel arrugado") cuando el diagnóstico enzimático no está disponible o es dudoso; biopsia esplénica o de otro órgano accesible para confirmar granulomas no caseificantes en sarcoidosis.',
      dx_diferencial: 'Hiperesplenismo por enfermedad hematológica primaria (ver esa tarjeta, particularmente si hay dudas sobre el mecanismo de la infiltración esplénica), otras causas de neutropenia en el paciente con artritis reumatoide (efecto de fármacos inmunosupresores, distinto del síndrome de Felty propiamente dicho).',
      tx_medico: 'Terapia de reemplazo enzimático o terapia de reducción de sustrato específica para la enfermedad de Gaucher; tratamiento óptimo de la artritis reumatoide de base para el síndrome de Felty, que con frecuencia mejora la neutropenia asociada; tratamiento inmunosupresor dirigido según la extensión de la sarcoidosis.',
      tx_farmacologico: 'Terapia de reemplazo enzimático (imiglucerasa u otras) como pilar del tratamiento moderno de la enfermedad de Gaucher; metotrexato u otro fármaco antirreumático modificador de la enfermedad para el síndrome de Felty; corticoides u otro inmunosupresor para la sarcoidosis sintomática.',
      tx_intervencionista: 'Esplenectomía históricamente usada en la enfermedad de Gaucher grave antes de la disponibilidad de la terapia de reemplazo enzimático, ahora reservada para casos muy seleccionados refractarios; rara vez indicada en el síndrome de Felty o la sarcoidosis salvo citopenia grave refractaria al tratamiento de la enfermedad de base.',
      criterios_uci: 'Infecciones graves asociadas a la neutropenia del síndrome de Felty, u otras complicaciones agudas específicas de la enfermedad de base.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa a estas 3 entidades.',
      seguimiento_hospitalario: 'Vigilancia según la complicación aguda específica que motive la hospitalización.',
      seguimiento_ambulatorio: 'Seguimiento dirigido por el manejo específico de la enfermedad de base (hematología/genética para Gaucher, reumatología para Felty, neumología/reumatología para sarcoidosis), con vigilancia seriada del tamaño esplénico y la biometría hemática.',
      pronostico: 'Ha mejorado sustancialmente en la enfermedad de Gaucher desde la disponibilidad de la terapia de reemplazo enzimático; el síndrome de Felty y la sarcoidosis dependen del control de la enfermedad autoinmune/inflamatoria de base.',
      algoritmo: ['Esplenomegalia + hallazgos sistémicos específicos (óseos en Gaucher, articulares en Felty, pulmonares en sarcoidosis) → sospechar causa de depósito/inflamatoria', 'Estudio dirigido según la sospecha específica (actividad enzimática, serología reumatoide, biopsia con granulomas)', 'Tratamiento específico de la enfermedad de base como medida central', 'Vigilancia seriada del tamaño esplénico y la citopenia', 'Esplenectomía reservada para casos muy seleccionados refractarios al tratamiento específico']
    },
    {
      nombre: 'Rotura esplénica',
      color: '#8c3a34',
      definicion: 'Complicación potencialmente fatal del bazo aumentado de tamaño: rotura traumática (tras un traumatismo abdominal, incluso de baja energía en un bazo ya frágil por el agrandamiento) o espontánea/atraumática (sin antecedente traumático identificable, particularmente en bazos masivamente agrandados por mononucleosis infecciosa, malaria, o neoplasias hematológicas), que produce hemorragia intraabdominal aguda potencialmente masiva.',
      fisiopatologia: 'El bazo normal está protegido por la caja torácica inferior izquierda y su cápsula relativamente resistente; el bazo aumentado de tamaño se extiende más allá de esa protección ósea y, además, su cápsula se vuelve más delgada y friable en relación con el grado de agrandamiento y la causa subyacente (particularmente en la infiltración neoplásica o la congestión vascular marcada), haciéndolo sustancialmente más vulnerable tanto al traumatismo directo como a la rotura espontánea por el simple aumento de la presión intraesplénica o un esfuerzo físico menor.',
      epidemiologia: 'La rotura esplénica traumática es una complicación reconocida de cualquier traumatismo abdominal, con mayor riesgo cuanto mayor es el bazo subyacente; la rotura espontánea es infrecuente en términos absolutos pero se describe característicamente en la mononucleosis infecciosa aguda (particularmente en las primeras 2-3 semanas de la enfermedad, cuando el bazo está más frágil) y en la malaria aguda.',
      factores_riesgo: ['Esplenomegalia marcada de cualquier causa (mayor superficie expuesta y cápsula más frágil)', 'Traumatismo abdominal, incluso de baja energía', 'Mononucleosis infecciosa aguda reciente (particularmente las primeras 2-3 semanas)', 'Malaria aguda', 'Actividad física de contacto o de alto impacto en un paciente con esplenomegalia conocida'],
      clinica: 'Dolor agudo en el hipocondrio izquierdo, con frecuencia irradiado al hombro izquierdo (signo de Kehr, por irritación diafragmática referida); signos de choque hipovolémico (taquicardia, hipotensión, palidez) si la hemorragia es significativa; distensión abdominal progresiva.',
      criterios_dx: 'Sospecha clínica ante dolor abdominal agudo en el hipocondrio izquierdo (con o sin antecedente traumático) en un paciente con esplenomegalia conocida o factores de riesgo identificables, confirmada por TC de abdomen con contraste (en el paciente hemodinámicamente estable) o por evaluación FAST (ecografía dirigida) en el paciente inestable.',
      laboratorio: 'Biometría hemática seriada (caída progresiva de la hemoglobina), tipo y pruebas cruzadas de sangre ante la posibilidad de transfusión urgente.',
      imagen: 'TC de abdomen con contraste en el paciente hemodinámicamente estable, que además permite grado de lesión esplénica para orientar el manejo; ecografía FAST como herramienta rápida al lado de la cama en el paciente inestable que no puede trasladarse a TC.',
      complementarios: 'Evaluación quirúrgica inmediata en todo caso de sospecha de rotura esplénica, independientemente de si finalmente se opta por manejo conservador o quirúrgico.',
      dx_diferencial: 'Infarto esplénico (dolor similar pero sin los signos de choque hipovolémico progresivo, ver esa tarjeta), otras causas de abdomen agudo en el hipocondrio izquierdo (pancreatitis, perforación de víscera hueca).',
      tx_medico: 'Manejo conservador (observación estrecha con biometría hemática seriada, reposo, transfusión si es necesaria) en el paciente hemodinámicamente estable con lesión esplénica de bajo grado, cada vez más preferido sobre la cirugía cuando es factible, dado que preserva la función esplénica y evita el riesgo de sepsis post-esplenectomía a largo plazo.',
      tx_farmacologico: 'Reanimación con líquidos intravenosos y hemoderivados según el grado de pérdida sanguínea estimada.',
      tx_intervencionista: 'Embolización esplénica angiográfica en el paciente con lesión de mayor grado pero hemodinámicamente estable, como alternativa a la cirugía que preserva parcialmente la función esplénica; esplenectomía urgente (o, cuando sea técnicamente posible, esplenectomía parcial) en el paciente hemodinámicamente inestable o con falla del manejo conservador.',
      criterios_uci: 'Choque hemorrágico, inestabilidad hemodinámica que requiere reanimación agresiva y vigilancia estrecha, particularmente en el periodo inmediato tras el diagnóstico o la intervención.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia hemodinámica y de la hemoglobina seriada durante el manejo conservador; vigilancia posoperatoria estándar si se realizó esplenectomía o embolización.',
      seguimiento_ambulatorio: 'Restricción de actividad física de contacto o alto impacto durante varias semanas tras un episodio de rotura esplénica manejada conservadoramente; si se realizó esplenectomía, iniciar el protocolo de profilaxis post-esplenectomía (ver esa tarjeta).',
      pronostico: 'Favorable con reconocimiento y manejo oportunos (conservador o quirúrgico según el grado); el retraso diagnóstico ante un cuadro de choque hemorrágico no reconocido puede ser rápidamente fatal.',
      algoritmo: ['Dolor agudo en hipocondrio izquierdo ± dolor referido a hombro izquierdo en paciente con esplenomegalia o traumatismo → sospechar rotura esplénica', 'Paciente inestable → ecografía FAST inmediata; paciente estable → TC de abdomen con contraste', 'Estable + lesión de bajo grado → manejo conservador con vigilancia estrecha y biometría seriada', 'Lesión de mayor grado pero estable → considerar embolización angiográfica', 'Inestable o falla del manejo conservador → esplenectomía urgente (o parcial si es técnicamente posible)']
    },
    {
      nombre: 'Sepsis fulminante post-esplenectomía (OPSI) y profilaxis vacunal',
      color: '#7a1f3d',
      definicion: 'Infección abrumadora post-esplenectomía (overwhelming post-splenectomy infection, OPSI): una sepsis fulminante, con frecuencia por organismos encapsulados (Streptococcus pneumoniae principalmente, también Haemophilus influenzae tipo b y Neisseria meningitidis), que puede progresar de síntomas leves a choque séptico y muerte en cuestión de horas, un riesgo que persiste de por vida tras la esplenectomía aunque es máximo en los primeros 2-3 años.',
      fisiopatologia: 'El bazo cumple una función inmunológica central e insustituible en la depuración de organismos encapsulados de la circulación (mediante la producción de anticuerpos IgM específicos contra polisacáridos capsulares y la fagocitosis directa por los macrófagos esplénicos de la pulpa roja), además de ser el sitio principal de producción de la fracción properdina del complemento; sin el bazo, estos organismos encapsulados escapan del control inmunológico habitual y pueden proliferar sin control en la circulación, produciendo una bacteriemia masiva y una respuesta inflamatoria sistémica fulminante que puede progresar con una rapidez excepcional en comparación con la sepsis en el paciente con bazo intacto.',
      epidemiologia: 'El riesgo absoluto de OPSI es relativamente bajo en términos porcentuales pero la mortalidad asociada al episodio, una vez establecido, es considerablemente alta; el riesgo es máximo en los primeros 2-3 años tras la esplenectomía pero persiste de por vida, y es mayor en la esplenectomía realizada por una indicación hematológica que por trauma.',
      factores_riesgo: ['Esplenectomía total (mayor riesgo que la parcial)', 'Esplenectomía realizada en la infancia', 'Ausencia de vacunación apropiada previa o posterior a la esplenectomía', 'Los primeros 2-3 años tras el procedimiento (mayor riesgo, aunque persiste indefinidamente)', 'Esplenectomía por indicación hematológica (mayor riesgo que la traumática)'],
      clinica: 'Inicio con frecuencia inespecífico (fiebre, escalofríos, mialgias) que puede progresar en cuestión de horas a choque séptico franco, coagulación intravascular diseminada, e insuficiencia multiorgánica; la rapidez de progresión es la característica distintiva más alarmante de este cuadro.',
      criterios_dx: 'Diagnóstico clínico de sepsis/choque séptico en un paciente esplenectomizado (o asplénico funcional), con hemocultivos con frecuencia positivos para un organismo encapsulado.',
      laboratorio: 'Hemocultivos urgentes antes de iniciar antibióticos si es posible sin retrasar el tratamiento; lactato, biometría hemática, marcadores de disfunción orgánica según el protocolo estándar de sepsis (ver el tema de Sepsis).',
      imagen: 'Dirigida según la búsqueda de un foco infeccioso primario específico si no es evidente clínicamente.',
      complementarios: 'Ninguno específico más allá del protocolo estándar de sepsis grave/choque séptico.',
      dx_diferencial: 'Sepsis de otro origen en el paciente esplenectomizado (el umbral de sospecha y de inicio de antibióticos empíricos debe ser bajo independientemente del foco sospechado, dado el potencial de progresión fulminante).',
      tx_medico: 'Antibióticos empíricos de amplio espectro de inicio INMEDIATO ante cualquier sospecha de infección en el paciente esplenectomizado, sin esperar confirmación microbiológica, dado el riesgo de progresión fulminante en horas; educación explícita al paciente para que busque atención médica urgente ante cualquier fiebre, con un plan de autoadministración de antibióticos de emergencia en el domicilio en casos seleccionados de acceso limitado a atención médica inmediata.',
      tx_farmacologico: 'Antibióticos empíricos de amplio espectro con cobertura para organismos encapsulados (con frecuencia una cefalosporina de tercera generación) de inicio inmediato; ajuste posterior según cultivos.',
      tx_intervencionista: 'Soporte hemodinámico y de órganos según el protocolo estándar de choque séptico (ver el tema de Sepsis).',
      criterios_uci: 'Choque séptico, disfunción orgánica múltiple, progresión rápida del cuadro clínico.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia estrecha dado el potencial de deterioro rápido; manejo según el protocolo estándar de sepsis grave.',
      seguimiento_ambulatorio: 'Vacunación completa contra Streptococcus pneumoniae, Haemophilus influenzae tipo b, y Neisseria meningitidis, idealmente administrada 2 semanas antes de una esplenectomía electiva (o lo antes posible tras una esplenectomía urgente), con refuerzos periódicos según el calendario específico de cada vacuna; profilaxis antibiótica continua considerada en el paciente pediátrico o en el adulto de muy alto riesgo durante los primeros años tras el procedimiento; portar identificación médica (brazalete o tarjeta) que alerte sobre el estado asplénico.',
      pronostico: 'La mortalidad del episodio de OPSI establecido es considerablemente alta pese al tratamiento; la prevención mediante vacunación completa, educación del paciente, y umbral bajo para antibióticos empíricos inmediatos reduce sustancialmente el riesgo absoluto y mejora el desenlace si ocurre.',
      algoritmo: ['Todo paciente programado para esplenectomía electiva → vacunación completa idealmente 2 semanas antes del procedimiento', 'Esplenectomía urgente → vacunar lo antes posible tras la recuperación', 'Educar al paciente: cualquier fiebre en el paciente asplénico es una urgencia médica', 'Fiebre/sospecha de infección en paciente esplenectomizado → antibióticos empíricos de amplio espectro inmediatos, sin esperar cultivos', 'Portar identificación médica de estado asplénico de por vida']
    },
    {
      nombre: 'Trombosis venosa portal/esplénica post-esplenectomía',
      color: '#8a6a1f',
      definicion: 'Complicación trombótica reconocida tras la esplenectomía: trombosis del muñón de la vena esplénica que puede extenderse hacia la vena porta o la vena mesentérica superior, favorecida por la trombocitosis reactiva marcada que ocurre característicamente en las semanas posteriores al procedimiento.',
      fisiopatologia: 'Tras la esplenectomía, el bazo (que normalmente regula y depura un componente considerable del recuento plaquetario circulante) desaparece como sitio de secuestro fisiológico, produciendo una trombocitosis reactiva marcada y con frecuencia considerable en las primeras semanas posoperatorias, que junto con el estado protrombótico local del muñón venoso esplénico recién ligado (estasis, daño endotelial quirúrgico) crea un ambiente particularmente favorable para la formación de trombo local, que puede propagarse hacia el sistema venoso portal.',
      epidemiologia: 'Ocurre en una proporción no despreciable de los pacientes tras esplenectomía, con mayor riesgo en la esplenectomía por indicación hematológica (particularmente mielofibrosis o trastornos mieloproliferativos, donde el estado protrombótico basal ya está aumentado) que en la traumática.',
      factores_riesgo: ['Esplenectomía por indicación hematológica, particularmente neoplasia mieloproliferativa', 'Trombocitosis reactiva marcada posoperatoria', 'Bazo preoperatorio masivamente aumentado de tamaño', 'Trombofilia de base conocida'],
      clinica: 'Con frecuencia asintomática y detectada solo por vigilancia de imagen programada; cuando es sintomática, dolor abdominal posoperatorio persistente o de nueva aparición, fiebre, íleo prolongado; la extensión mesentérica puede producir isquemia intestinal si es extensa.',
      criterios_dx: 'Confirmación por ecografía Doppler o TC/RM con contraste que demuestra el trombo en la vena esplénica, portal, o mesentérica superior.',
      laboratorio: 'Biometría hemática (documentar el grado de trombocitosis reactiva posoperatoria), dímero D de utilidad limitada en el posoperatorio inmediato dado que está elevado de forma inespecífica.',
      imagen: 'Ecografía Doppler abdominal como estudio de vigilancia inicial; TC o RM con contraste para confirmar y caracterizar la extensión del trombo si la ecografía es sugestiva o si hay síntomas.',
      complementarios: 'Vigilancia programada del recuento plaquetario posoperatorio para anticipar el pico de trombocitosis reactiva, que con frecuencia orienta el momento de mayor riesgo trombótico.',
      dx_diferencial: 'Íleo posoperatorio simple sin trombosis (dolor/distensión sin el hallazgo de imagen confirmatorio), absceso subfrénico posoperatorio (otra causa de fiebre/dolor posoperatorio persistente).',
      tx_medico: 'Anticoagulación terapéutica una vez confirmado el trombo, con duración determinada según la extensión y los factores de riesgo asociados; algunos protocolos consideran profilaxis anticoagulante extendida de rutina en el paciente de alto riesgo (esplenectomía hematológica con bazo masivo) incluso antes de confirmar el trombo.',
      tx_farmacologico: 'Anticoagulación con heparina de bajo peso molecular o un anticoagulante oral directo según el contexto clínico y la función renal/hepática del paciente.',
      tx_intervencionista: 'Trombectomía o manejo intervencionista considerado en casos seleccionados de trombosis extensa con isquemia mesentérica asociada.',
      criterios_uci: 'Isquemia mesentérica aguda con compromiso hemodinámico si la trombosis se extiende de forma extensa.',
      criterios_tips: 'No aplica de forma directa, aunque la trombosis portal crónica no tratada puede eventualmente producir hipertensión portal secundaria.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia posoperatoria del recuento plaquetario seriado y umbral bajo de sospecha ante dolor abdominal persistente o fiebre inexplicada tras esplenectomía.',
      seguimiento_ambulatorio: 'Seguimiento de la respuesta a la anticoagulación con imagen de control; vigilancia de la resolución de la trombocitosis reactiva posoperatoria, que habitualmente se normaliza en las semanas siguientes.',
      pronostico: 'Favorable con reconocimiento y anticoagulación oportunos; el retraso diagnóstico en una trombosis extensa con isquemia mesentérica asociada tiene un pronóstico considerablemente más grave.',
      algoritmo: ['Todo paciente posesplenectomía → vigilancia programada del recuento plaquetario (anticipar pico de trombocitosis reactiva)', 'Dolor abdominal persistente, fiebre, o íleo prolongado posoperatorio → ecografía Doppler abdominal', 'Trombo confirmado → TC/RM con contraste para caracterizar extensión', 'Anticoagulación terapéutica según extensión y factores de riesgo', 'Considerar profilaxis extendida de rutina en el paciente de muy alto riesgo (esplenectomía hematológica con bazo masivo)']
    },
    {
      nombre: 'Infarto esplénico',
      color: '#6b4a2e',
      definicion: 'Isquemia y necrosis de una porción o de la totalidad del parénquima esplénico por oclusión de su irrigación arterial, secundaria con mayor frecuencia a un émbolo (cardioembólico o de otro origen) o a una trombosis local, particularmente favorecida por un bazo ya aumentado de tamaño con flujo sanguíneo alterado.',
      fisiopatologia: 'El bazo tiene una circulación terminal relativamente pobre en colaterales dentro de cada segmento vascular, por lo que la oclusión de una rama de la arteria esplénica produce isquemia segmentaria bien delimitada del territorio correspondiente; en el contexto del hiperesplenismo, el flujo sanguíneo alterado dentro de un bazo congestionado o infiltrado, junto con el estado protrombótico asociado a ciertas causas subyacentes (neoplasias mieloproliferativas particularmente), aumenta el riesgo de trombosis local además del mecanismo embólico clásico.',
      epidemiologia: 'Más frecuente en pacientes con una fuente embólica identificable (fibrilación auricular, endocarditis infecciosa) o con un estado protrombótico de base (neoplasias mieloproliferativas, particularmente policitemia vera y trombocitemia esencial); también descrito en la anemia de células falciformes por oclusión microvascular local (autoinfarto esplénico progresivo característico de esa enfermedad).',
      factores_riesgo: ['Fibrilación auricular u otra fuente embólica cardiaca', 'Endocarditis infecciosa (émbolos sépticos)', 'Neoplasia mieloproliferativa con estado protrombótico asociado', 'Anemia de células falciformes (autoinfarto progresivo)', 'Esplenomegalia marcada de cualquier causa (flujo alterado)'],
      clinica: 'Dolor agudo o subagudo en el hipocondrio izquierdo, con frecuencia pleurítico (que empeora con la inspiración profunda) por irritación diafragmática/pleural adyacente, en ocasiones acompañado de fiebre de bajo grado; a diferencia de la rotura esplénica, no produce signos de choque hipovolémico progresivo salvo en el infarto masivo complicado.',
      criterios_dx: 'TC de abdomen con contraste que demuestra el defecto de perfusión característico (área hipodensa en forma de cuña, de base periférica) en el parénquima esplénico.',
      laboratorio: 'LDH con frecuencia elevada (marcador inespecífico de necrosis tisular); biometría hemática y estudio dirigido de la fuente embólica o protrombótica sospechada (ecocardiograma, estudio molecular de neoplasia mieloproliferativa).',
      imagen: `TC de abdomen con contraste como estudio de elección, que demuestra el defecto de perfusión en cuña característico; ecografía menos sensible pero útil como estudio inicial de cribado.${figBlock('Imagen 3', 'Infartos esplénicos en TC de abdomen', '<img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Splenic_infarction.png" alt="TC abdominal mostrando 2 infartos esplénicos grandes (flechas blancas) en forma de cuña, de base periférica, en una paciente con infección por citomegalovirus y mutación heterocigota del Factor V Leiden." style="width:100%;max-width:400px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">')}`,
      complementarios: 'Ecocardiograma si se sospecha una fuente embólica cardiaca; estudio de trombofilia o de neoplasia mieloproliferativa según el contexto clínico si no hay una fuente embólica evidente.',
      dx_diferencial: 'Rotura esplénica (que sí produce signos de choque hipovolémico progresivo, a diferencia del infarto no complicado, ver esa tarjeta), otras causas de dolor pleurítico del hemitórax/hipocondrio izquierdo (neumonía, embolia pulmonar).',
      tx_medico: 'Manejo de soporte con analgesia en el infarto esplénico simple no complicado, que con frecuencia se resuelve espontáneamente con cicatrización del área afectada; identificación y tratamiento de la fuente embólica o el estado protrombótico subyacente para prevenir recurrencia.',
      tx_farmacologico: 'Anticoagulación si se identifica una fuente embólica cardiaca (fibrilación auricular) o un estado protrombótico que la justifique, según el balance riesgo-beneficio individual; analgesia para el manejo sintomático del dolor.',
      tx_intervencionista: 'Rara vez requiere intervención; drenaje percutáneo o esplenectomía reservados para las complicaciones infrecuentes del infarto (absceso esplénico secundario, infarto masivo con compromiso significativo).',
      criterios_uci: 'Complicaciones infrecuentes del infarto masivo o de un absceso esplénico secundario con sepsis asociada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia del dolor y de signos de complicación (fiebre persistente sugestiva de sobreinfección/absceso).',
      seguimiento_ambulatorio: 'Seguimiento de la resolución radiológica del infarto; manejo continuado de la fuente embólica o el estado protrombótico subyacente identificado para prevenir recurrencia.',
      pronostico: 'Generalmente favorable, con resolución espontánea de la mayoría de los infartos esplénicos no complicados; el pronóstico general depende más de la causa embólica/protrombótica subyacente que del infarto esplénico en sí.',
      algoritmo: ['Dolor pleurítico en hipocondrio izquierdo, sin signos de choque hipovolémico progresivo → sospechar infarto esplénico', 'TC de abdomen con contraste para confirmar el defecto de perfusión en cuña característico', 'Buscar la fuente embólica (ecocardiograma) o protrombótica (estudio de neoplasia mieloproliferativa) subyacente', 'Manejo de soporte con analgesia en el infarto simple no complicado', 'Anticoagulación si se confirma una fuente embólica/protrombótica que la justifique']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario del hiperesplenismo se centra en el manejo de las complicaciones agudas (rotura esplénica, sepsis post-esplenectomía) y en la vigilancia perioperatoria cuando se realiza esplenectomía.',
    parametros: ['Estado hemodinámico si hay sospecha de rotura esplénica', 'Recuento plaquetario seriado posoperatorio (vigilancia de trombocitosis reactiva y riesgo trombótico)', 'Signos de infección en el paciente esplenectomizado (umbral bajo de sospecha)'],
    criterios_uci_general: 'Choque hemorrágico por rotura esplénica, choque séptico por OPSI, isquemia mesentérica aguda por extensión de trombosis portal/esplénica.',
    criterios_tips_general: 'No aplica de forma directa a este tema, salvo en el contexto de la hipertensión portal de base que motivó el hiperesplenismo.',
    criterios_trasplante_general: 'Según la enfermedad de base específica (hepática, hematológica); no aplica directamente al hiperesplenismo en sí.',
    prevencion: 'Vacunación completa contra organismos encapsulados antes de una esplenectomía electiva (o lo antes posible tras una urgente), educación del paciente sobre el riesgo de OPSI de por vida, restricción de actividad física de alto impacto en el paciente con esplenomegalia marcada conocida, y vigilancia programada del recuento plaquetario posoperatorio para anticipar el riesgo trombótico.'
  }
};

export const compCites = {
  'Hiperesplenismo por Hipertensión Portal': [2, 5],
  'Hiperesplenismo por Enfermedad Hematológica Primaria': [3, 4],
  'Hiperesplenismo por Enfermedad Infecciosa': [3],
  'Hiperesplenismo por Enfermedad de Depósito/Inflamatoria': [3, 4],
  'Rotura esplénica': [6, 13],
  'Sepsis fulminante post-esplenectomía (OPSI) y profilaxis vacunal': [8, 9, 14],
  'Trombosis venosa portal/esplénica post-esplenectomía': [10, 11],
  'Infarto esplénico': [12]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Criterios de Hiperesplenismo (tétrada de Dameshek)': [0, 1],
  'Grado de esplenomegalia por tamaño': [4]
};
export const escalaCalc = { 'Criterios de Hiperesplenismo (tétrada de Dameshek)': 'hiperesplenismo' };
export const compGroups = [
  { name: 'Hiperesplenismo por etiología', items: ['Hiperesplenismo por Hipertensión Portal', 'Hiperesplenismo por Enfermedad Hematológica Primaria', 'Hiperesplenismo por Enfermedad Infecciosa', 'Hiperesplenismo por Enfermedad de Depósito/Inflamatoria'] },
  { name: 'Complicaciones transversales', items: ['Rotura esplénica', 'Sepsis fulminante post-esplenectomía (OPSI) y profilaxis vacunal', 'Trombosis venosa portal/esplénica post-esplenectomía', 'Infarto esplénico'] }
];
export const complicacionesIntro = 'Las 4 primeras tarjetas organizan el hiperesplenismo por su causa subyacente (hipertensión portal, enfermedad hematológica primaria, infecciosa, o de depósito/inflamatoria); las siguientes 4 son complicaciones transversales, tanto del bazo aumentado de tamaño en sí como de su tratamiento definitivo (esplenectomía).';
export const categories = ['Definición', 'Diagnóstico', 'Clasificación', 'Complicaciones', 'Calculadoras', 'Bibliografía', 'Quiz'];
export const arbol = {
  root: { title: 'HIPERESPLENISMO', color: '#5c6b2d', target: 'definicion' },
  branches: [
    { title: 'Por etiología (enfermedades)', sub: 'Tétrada de Dameshek', color: '#3d5a73', target: 'diagnostico', leaves: [
      { title: 'Por Hipertensión Portal', sub: 'Causa más frecuente', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Por Enfermedad Hematológica Primaria', sub: 'Mielofibrosis, LLC, linfoma', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Por Enfermedad Infecciosa', sub: 'Malaria, endocarditis, TB', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Por Enfermedad de Depósito/Inflamatoria', sub: 'Gaucher, Felty', color: '#6b4a2e', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones transversales', sub: 'Del bazo grande y su tratamiento', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Rotura esplénica', sub: 'Traumática o espontánea', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Sepsis post-esplenectomía (OPSI)', sub: 'Profilaxis vacunal', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Trombosis venosa post-esplenectomía', sub: 'Trombocitosis reactiva', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Infarto esplénico', sub: 'Embólico o trombótico', color: '#6b4a2e', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [0, 3], no_invasivos: [0, 4] };
export const clasificacionCite = [0, 1, 4];
export const seguimientoCite = [9, 11];
