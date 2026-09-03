// topics/sindrome-aortico-agudo/content.js: Síndrome Aórtico Agudo.
// Cubre el ítem "Aneurisma y disección aórtica" del bloque II (Sistema Cardiovascular) del
// temario, a petición explícita del usuario (pausa temporal del plan de 11 temas de Neurología,
// que continúa pendiente).
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás debe ser un `export const` de nivel superior, HERMANO de `content`.
//
// IMPORTANTE (ver memoria del proyecto sobre study.js): construir cada pregunta con la respuesta
// correcta en options[0]/correct:0 primero, verificar el conteo, y solo entonces redistribuir
// mecánicamente con un script.
//
// IMPORTANTE (ver memoria del proyecto sobre tarjetas/figuras/calculadoras): 4 fichas de entidad
// (disección aórtica, hematoma intramural, úlcera penetrante, aneurisma no roto como sustrato
// crónico) + 4 fichas de complicaciones (rotura, taponamiento, malperfusión, insuficiencia
// aórtica aguda), por decisión explícita del usuario, cubriendo todo el espectro del ítem del
// temario "Aneurisma y disección aórtica" bajo el marco moderno de "síndrome aórtico agudo".
// Calculadora: ADD-RS (Aortic Dissection Detection Risk Score). 2 figuras SVG (clasificación
// Stanford/De Bakey, malperfusión por rama aórtica).

export const meta = {
  id: 'sindrome-aortico-agudo',
  titulo: 'Síndrome Aórtico Agudo',
  subtitulo: 'Módulo 33 · Medicina Interna',
  accent: '#7a1f3d',
  accentDim: '#b3708a'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const clasificacionHtml = `
<div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;max-width:560px;margin:0 auto;font-size:10.5px;color:var(--ink);">
  <div style="flex:1;min-width:200px;text-align:center;">
    <svg viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg" style="width:150px;height:130px;">
      <path d="M 40 110 Q 40 30 80 25 Q 120 30 120 60 L 120 110" fill="none" stroke="var(--line)" stroke-width="10" stroke-linecap="round"/>
      <path d="M 40 110 Q 40 30 80 25 Q 120 30 120 60" fill="none" stroke="#8c3a34" stroke-width="4" stroke-linecap="round"/>
    </svg>
    <div style="font-weight:700;color:#8c3a34;">Stanford A (proximal)</div>
    <div style="color:var(--ink-dim);">Compromete la aorta ascendente (con o sin extensión distal). Emergencia quirúrgica.</div>
  </div>
  <div style="flex:1;min-width:200px;text-align:center;">
    <svg viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg" style="width:150px;height:130px;">
      <path d="M 40 110 Q 40 30 80 25 Q 120 30 120 60 L 120 110" fill="none" stroke="var(--line)" stroke-width="10" stroke-linecap="round"/>
      <path d="M 120 60 L 120 110" fill="none" stroke="#3d5a73" stroke-width="4" stroke-linecap="round"/>
    </svg>
    <div style="font-weight:700;color:#3d5a73;">Stanford B (distal)</div>
    <div style="color:var(--ink-dim);">Compromete solo la aorta descendente, distal a la subclavia izquierda. Manejo médico salvo complicación.</div>
  </div>
  <div style="flex:1 1 100%;text-align:center;color:var(--ink-dim);margin-top:4px;">De Bakey: I = ascendente + arco + descendente (= Stanford A extenso). II = solo ascendente (= Stanford A limitado). III = solo descendente (= Stanford B).</div>
</div>`;

const malperfusionHtml = `
<div style="display:flex;flex-direction:column;gap:6px;max-width:480px;margin:0 auto;font-size:10.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:110px 1fr;gap:6px;align-items:center;">
    <div style="font-weight:700;color:#8a6a1f;text-align:center;">Tronco celiaco / mesentérica superior</div>
    <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:8px;padding:6px 10px;">Isquemia mesentérica: dolor abdominal desproporcionado al examen, acidosis láctica</div>

    <div style="font-weight:700;color:#3f6b52;text-align:center;">Arterias renales</div>
    <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:8px;padding:6px 10px;">Lesión renal aguda, hipertensión renovascular de inicio súbito</div>

    <div style="font-weight:700;color:#3d5a73;text-align:center;">Arterias ilíacas/femorales</div>
    <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:8px;padding:6px 10px;">Isquemia aguda de extremidad: dolor, palidez, ausencia de pulso, frialdad</div>

    <div style="font-weight:700;color:#6b4a2e;text-align:center;">Arterias intercostales/espinales</div>
    <div style="background:#6b4a2e22;border:1px solid #6b4a2e;border-radius:8px;padding:6px 10px;">Isquemia medular: paraplejia súbita, la malperfusión más devastadora y menos reversible</div>
  </div>
  <div style="color:var(--ink-dim);text-align:center;">Cualquier síntoma "a distancia" del tórax en un paciente con dolor torácico agudo debe hacer sospechar disección con malperfusión de rama.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El síndrome aórtico agudo agrupa 3 entidades que comparten una presentación clínica similar y un mismo espectro de riesgo sobre la pared aórtica, sobre el sustrato crónico del aneurisma aórtico: la disección aórtica (la más frecuente y mejor caracterizada), el hematoma intramural aórtico, y la úlcera aórtica penetrante. Las 3 pueden coexistir, evolucionar una hacia otra, y comparten el mismo enfoque de clasificación anatómica (Stanford/De Bakey) que determina si el manejo es quirúrgico urgente o médico.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Los 4 patrones principales.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Disección aórtica</strong>: desgarro de la íntima que permite el paso de sangre hacia la media, creando una falsa luz; la más frecuente y de mayor mortalidad si no se reconoce a tiempo.</li>
    <li><strong>Hematoma intramural aórtico</strong>: sangre dentro de la pared aórtica SIN un desgarro de la íntima identificable, por rotura de los vasa vasorum.</li>
    <li><strong>Úlcera aórtica penetrante</strong>: una placa ateroesclerótica ulcerada que penetra la lámina elástica interna hacia la media, en el paciente ateroesclerótico de mayor edad.</li>
    <li><strong>Aneurisma aórtico (torácico y abdominal, no roto)</strong>: dilatación crónica de la pared que es, en muchos casos, el sustrato sobre el que se desarrolla cualquiera de los 3 patrones agudos anteriores.</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Clasificación anatómica compartida.</strong>${figBlock('Imagen 1', 'Clasificación Stanford / De Bakey', clasificacionHtml)} Esta clasificación por localización, no por el tipo específico de lesión (disección vs. hematoma vs. úlcera), es la que determina el manejo: cualquier compromiso de la aorta ascendente (Stanford A) es una emergencia quirúrgica, mientras que el compromiso exclusivo de la aorta descendente (Stanford B) se maneja médicamente salvo que se complique.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama de complicaciones.</strong> La hipertensión arterial no controlada es el factor de riesgo más frecuente para las 4 entidades; las complicaciones (rotura, taponamiento, malperfusión de órganos, insuficiencia aórtica aguda) son las que determinan la mortalidad temprana y requieren reconocimiento inmediato, desarrolladas en Complicaciones.</p>`;

export const bibliografia = [
  'Isselbacher EM, Preventza O, Hamilton Black J 3rd, et al. 2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease. Circulation. 2022;146(24):e334-e482.',
  'Erbel R, Aboyans V, Boileau C, et al. 2014 ESC Guidelines on the diagnosis and treatment of aortic diseases. Eur Heart J. 2014;35(41):2873-2926.',
  'Rogers AM, Hermann LK, Booher AM, et al. Sensitivity of the aortic dissection detection risk score, a novel guideline-based tool for identification of acute aortic dissection at initial presentation. Circulation. 2011;123(20):2213-2218.',
  'Nienaber CA, Clough RE. Management of acute aortic dissection. Lancet. 2015;385(9970):800-811.',
  'Hiratzka LF, Bakris GL, Beckman JA, et al. 2010 ACCF/AHA/AATS/ACR/ASA/SCA/SCAI/SIR/STS/SVM Guidelines for the diagnosis and management of patients with thoracic aortic disease. Circulation. 2010;121(13):e266-e369.',
  'Vilacosta I, San Román JA, di Bartolomeo R, et al. Acute Aortic Syndrome Revisited: JACC State-of-the-Art Review. J Am Coll Cardiol. 2021;78(21):2106-2125.',
  'Chikwe J, Cavallaro P, Itagaki S, et al. National outcomes in acute aortic dissection: influence of surgeon and institutional volume on operative mortality. Ann Thorac Surg. 2013;95(5):1563-1569.',
  'Chin AS, Fleischmann D. State-of-the-art imaging for acute aortic syndrome. Br J Radiol. 2016;89(1061):20150542.',
  'Grubb KJ, Kron IL. Aortic intramural hematoma and its natural history. Ann Thorac Cardiovasc Surg. 2015;21(4):321-323.',
  'Chao CP, Walker TG, Kalva SP. Natural history and CT appearance of aortic intramural hematoma. Radiographics. 2009;29(3):791-804.',
  'Wortmann M, Böckler D, Geisbüsch P. Perioperative outcomes of endovascular repair for penetrating aortic ulcer. J Endovasc Ther. 2017;24(3):411-417.',
  'Chaikof EL, Dalman RL, Eskandari MK, et al. The Society for Vascular Surgery practice guidelines on the care of patients with an abdominal aortic aneurysm. J Vasc Surg. 2018;67(1):2-77.e2.',
  'LeMaire SA, Russell L. Epidemiology of thoracic aortic dissection. Nat Rev Cardiol. 2011;8(2):103-113.',
  'Sen I, Erben YM, Franco-Mesa C, DeMartino RR. Epidemiology of aortic dissection. Semin Vasc Surg. 2021;34(1):10-17.',
  'Kamman AV, Brunkwall J, Verhoeven EL, et al. Predictors of aortic growth in uncomplicated type B aortic dissection from the Acute Dissection Stanford Type B Evaluation with Radiological and Clinical Outcomes (ADSORB) database. J Vasc Surg. 2017;65(4):964-971.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Síndrome aórtico agudo no complicado',
      tituloB: 'Síndrome aórtico agudo complicado',
      compensada: 'Dolor torácico/dorsal/abdominal agudo característico (desgarrante, de inicio súbito, máxima intensidad desde el inicio) con hemodinamia estable, sin déficit de pulso, sin signos de malperfusión, sin insuficiencia aórtica.',
      descompensada: 'Hipotensión o choque, déficit de pulso o diferencia de presión arterial entre extremidades, déficit neurológico focal (incluyendo paraplejia), signos de taponamiento cardiaco, o soplo diastólico nuevo de insuficiencia aórtica: cualquiera de estos exige manejo quirúrgico/intervencionista urgente.'
    },
    laboratorio: [
      { prueba: 'Dímero D', utilidad: 'Un valor bajo (por debajo del punto de corte estándar) tiene alto valor predictivo negativo para descartar disección aórtica en el paciente de riesgo bajo-intermedio, aunque nunca debe usarse aislado para descartarla en el paciente de alto riesgo por ADD-RS.' },
      { prueba: 'Troponina', utilidad: 'Puede elevarse si la disección compromete un ostium coronario (habitualmente el derecho) produciendo infarto secundario; no descarta disección, orienta a un diagnóstico diferencial que requiere descartarse activamente antes de anticoagular/trombolizar por sospecha de síndrome coronario agudo.' },
      { prueba: 'Creatinina', utilidad: 'Basal antes del contraste yodado de la angio-TC, y seriada si hay sospecha de malperfusión renal.' }
    ],
    no_invasivos: [
      { metodo: 'ADD-RS (Aortic Dissection Detection Risk Score, calculadora)', interpretacion: 'Estratifica la probabilidad pretest de síndrome aórtico agudo combinando condiciones de alto riesgo, características del dolor, y hallazgos de exploración.', cutoff: '0: bajo riesgo (considerar dímero D antes de imagen). 1: riesgo intermedio. ≥2: alto riesgo, imagen urgente sin demora' },
      { metodo: 'Electrocardiograma', interpretacion: 'Descarta o identifica isquemia miocárdica concomitante (por compromiso de un ostium coronario); con frecuencia normal o con cambios inespecíficos, no debe usarse para excluir el diagnóstico.', cutoff: 'Un ECG normal NO descarta el síndrome aórtico agudo' }
    ],
    imagen: [
      { modalidad: 'Angio-tomografía de aorta completa (tórax-abdomen-pelvis)', hallazgos: 'Estudio de elección: identifica el colgajo de la íntima y la falsa luz en la disección, la hiperdensidad en semiluna sin realce en el hematoma intramural, el nicho ulceroso en la úlcera penetrante, y delimita la extensión y las ramas comprometidas en cualquiera de los 3.' },
      { modalidad: 'Ecocardiograma transesofágico', hallazgos: 'Alternativa cuando la TC no está disponible de inmediato o el paciente está demasiado inestable para trasladarse; evalúa también la válvula aórtica y el pericardio (taponamiento) en tiempo real.' },
      { modalidad: 'Radiografía de tórax', hallazgos: 'Ensanchamiento mediastínico sugestivo pero de baja sensibilidad; un hallazgo normal NO descarta el diagnóstico y nunca debe retrasar la angio-TC si la sospecha clínica es alta.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema combina la clasificación anatómica (Stanford A vs. B, que determina manejo quirúrgico vs. médico) con la presencia o ausencia de complicaciones agudas (rotura, taponamiento, malperfusión, insuficiencia aórtica), que determina la urgencia de la intervención independientemente del tipo Stanford.',
    escalas: [
      { nombre: 'ADD-RS (Aortic Dissection Detection Risk Score)', componentes: 'Condiciones de alto riesgo (1 punto), características del dolor de alto riesgo (1 punto), hallazgos de exploración de alto riesgo (1 punto). Calculadora disponible más abajo.', formula: 'Suma 0-3', interpretacion: '0: bajo riesgo. 1: riesgo intermedio. ≥2: alto riesgo, imagen urgente.' },
      { nombre: 'Clasificación Stanford / De Bakey', componentes: 'Localización anatómica del compromiso aórtico (ver Imagen 1).', formula: 'Stanford A = ascendente comprometida; Stanford B = solo descendente. De Bakey I/II/III según extensión.', interpretacion: 'Stanford A: emergencia quirúrgica. Stanford B no complicado: manejo médico.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Disección aórtica',
      color: '#8c3a34',
      definicion: 'Desgarro de la íntima aórtica que permite el paso de sangre hacia la capa media, creando una falsa luz que se propaga longitudinalmente; la entidad más frecuente y mejor caracterizada del síndrome aórtico agudo, y la de mayor mortalidad temprana si no se reconoce y trata a tiempo.',
      fisiopatologia: 'La degeneración de la media aórtica (por hipertensión arterial crónica, envejecimiento, o una enfermedad del tejido conectivo subyacente) debilita la pared, permitiendo que el estrés hemodinámico pulsátil produzca un desgarro de la íntima; la sangre penetra a través de ese desgarro hacia la capa media, disecando el plano entre la íntima/media interna y la media externa/adventicia, creando una falsa luz que se propaga anterógrada (con mayor frecuencia) o retrógradamente, comprometiendo potencialmente cualquier rama aórtica en su trayecto (ver Malperfusión de órganos) y, si se extiende proximalmente, la raíz aórtica y el pericardio (ver Taponamiento cardiaco e Insuficiencia aórtica aguda).',
      epidemiologia: 'La emergencia aórtica más frecuente; la hipertensión arterial no controlada es el factor de riesgo más común, particularmente en varones de edad media a avanzada; en el paciente joven, buscar activamente una enfermedad del tejido conectivo (Marfan, Ehlers-Danlos vascular, Loeys-Dietz) o una válvula aórtica bicúspide.',
      factores_riesgo: ['Hipertensión arterial no controlada (el factor más frecuente)', 'Válvula aórtica bicúspide y coartación aórtica', 'Enfermedad del tejido conectivo (Marfan, Ehlers-Danlos vascular, Loeys-Dietz), particularmente en el paciente joven sin hipertensión', 'Aneurisma aórtico preexistente (ver esa tarjeta)', 'Uso de cocaína o estimulantes, tercer trimestre del embarazo, cirugía cardiaca o cateterismo aórtico previo'],
      clinica: 'Dolor torácico, dorsal, o abdominal de inicio súbito, máxima intensidad desde el comienzo (a diferencia del síndrome coronario agudo, que típicamente es progresivo), descrito como desgarrante o "el peor dolor de mi vida"; puede migrar siguiendo la propagación de la disección (de tórax anterior a espalda a abdomen). Déficit de pulso o diferencia de presión arterial &gt;20 mmHg entre extremidades en la exploración.',
      criterios_dx: 'ADD-RS combinado con angio-TC de aorta completa mostrando el colgajo de la íntima y las 2 luces (verdadera y falsa); el ecocardiograma transesofágico es la alternativa cuando la TC no es factible de inmediato.',
      laboratorio: 'Dímero D (alto valor predictivo negativo si es bajo en el paciente de riesgo bajo-intermedio); troponina si se sospecha compromiso de un ostium coronario.',
      imagen: 'Angio-TC de aorta completa de elección; ecocardiograma transesofágico como alternativa a pie de cama en el paciente inestable.',
      complementarios: 'Estudio genético dirigido si se sospecha una enfermedad del tejido conectivo subyacente, relevante para el paciente y su familia.',
      dx_diferencial: 'Síndrome coronario agudo (dolor progresivo, no súbito desde el inicio; puede coexistir si la disección compromete un ostium coronario), tromboembolia pulmonar, neumotórax a tensión, pericarditis aguda.',
      tx_medico: 'Stanford A: cirugía urgente (reemplazo de la aorta ascendente ± raíz/válvula aórtica) sin demora, dado que la mortalidad aumenta considerablemente con cada hora de retraso. Stanford B no complicado: manejo médico con control estricto de la frecuencia cardiaca y la presión arterial; Stanford B complicado (malperfusión, rotura inminente, o crecimiento rápido): reparación endovascular (TEVAR).',
      tx_farmacologico: 'Betabloqueador intravenoso de acción rápida (esmolol o labetalol) como primera línea para reducir la frecuencia cardiaca y la fuerza de contracción (dP/dt), seguido de un vasodilatador (nitroprusiato) si la presión arterial permanece elevada tras controlar la frecuencia cardiaca (nunca vasodilatador solo, dado que la taquicardia refleja aumentaría el estrés de cizallamiento sobre la pared); objetivo de frecuencia cardiaca &lt;60 lpm y presión arterial sistólica 100-120 mmHg si se tolera.',
      tx_intervencionista: 'Reemplazo quirúrgico de la aorta ascendente urgente en Stanford A; reparación endovascular (TEVAR) en Stanford B complicado o de alto riesgo.',
      criterios_uci: 'Todo síndrome aórtico agudo confirmado requiere manejo en cuidados críticos con monitorización invasiva de la presión arterial durante el control inicial.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Control estricto de frecuencia cardiaca y presión arterial durante toda la hospitalización; vigilancia de nuevos signos de malperfusión o de progresión de la disección.',
      seguimiento_ambulatorio: 'Control estricto de por vida de la presión arterial (objetivo habitualmente más bajo que en la hipertensión esencial no complicada); angio-TC o RM seriada de por vida para vigilar el crecimiento aneurismático de la aorta residual, incluso tras la reparación quirúrgica del segmento inicialmente afectado.',
      pronostico: 'La mortalidad de la disección tipo A no tratada aumenta considerablemente por hora tras el inicio de los síntomas, siendo la cirugía urgente la intervención que más reduce esa mortalidad; el tipo B no complicado tiene un pronóstico considerablemente mejor con manejo médico.',
      algoritmo: ['Dolor torácico/dorsal desgarrante de inicio súbito + déficit de pulso → ADD-RS, angio-TC urgente sin demora', 'Confirmado Stanford A → cirugía urgente sin demora, la mortalidad aumenta por hora', 'Confirmado Stanford B no complicado → betabloqueador IV + vasodilatador, manejo médico', 'Stanford B complicado (malperfusión, rotura inminente) → TEVAR', 'Control estricto de presión arterial de por vida y vigilancia por imagen seriada, incluso tras reparación quirúrgica']
    },
    {
      nombre: 'Hematoma intramural aórtico',
      color: '#3d5a73',
      definicion: 'Sangre dentro de la capa media de la pared aórtica SIN un desgarro de la íntima identificable por imagen, producido por la rotura espontánea de los vasa vasorum que nutren la propia pared aórtica; se comporta clínicamente como una disección y se clasifica y maneja con el mismo esquema Stanford A/B.',
      fisiopatologia: 'A diferencia de la disección clásica (que inicia con un desgarro de la íntima), el hematoma intramural se origina por la rotura de los vasa vasorum dentro de la propia media aórtica, sin comunicación inicial con la luz aórtica verdadera; el hematoma resultante puede seguir 1 de 3 trayectorias: reabsorberse espontáneamente, progresar hacia una disección clásica franca al romper secundariamente hacia la íntima, o progresar hacia rotura de la adventicia externa.',
      epidemiologia: 'Representa una proporción minoritaria pero clínicamente relevante de los síndromes aórticos agudos; ocurre característicamente en el paciente de edad más avanzada con hipertensión arterial crónica, comparado con la disección clásica.',
      factores_riesgo: ['Hipertensión arterial crónica no controlada (el factor más frecuente, con mayor peso relativo que en la disección clásica)', 'Edad avanzada', 'Ateroesclerosis aórtica difusa de base'],
      clinica: 'Clínicamente indistinguible de la disección aórtica clásica: dolor torácico/dorsal de inicio súbito, intenso, desgarrante; la distinción es exclusivamente por imagen.',
      criterios_dx: 'Angio-TC mostrando engrosamiento hiperdenso en semiluna de la pared aórtica (&gt;5-7 mm), SIN realce con contraste y SIN un colgajo de íntima ni doble luz identificable (a diferencia de la disección clásica).',
      laboratorio: 'Igual que en la disección clásica (dímero D, troponina).',
      imagen: 'Angio-TC de elección: hiperdensidad en semiluna de la pared sin realce, distinguiéndolo de la disección clásica (que muestra 2 luces separadas por un colgajo de íntima realzado).',
      complementarios: 'Vigilancia por imagen seriada estrecha (más frecuente que en la disección clásica estable) dado el comportamiento evolutivo variable e impredecible descrito.',
      dx_diferencial: 'Disección aórtica clásica (presencia de colgajo de íntima y doble luz, ausentes aquí), úlcera aórtica penetrante (nicho ulceroso focal en lugar de engrosamiento difuso de la pared).',
      tx_medico: 'El mismo esquema que la disección clásica según la localización: Stanford A (compromiso de la aorta ascendente) tratado quirúrgicamente de forma similarmente urgente en la mayoría de los centros, dado el riesgo de progresión impredecible; Stanford B manejado médicamente con vigilancia estrecha por imagen, dado el riesgo de progresión a disección franca o rotura.',
      tx_farmacologico: 'Control de frecuencia cardiaca y presión arterial idéntico al de la disección clásica (betabloqueador IV primero, luego vasodilatador si es necesario).',
      tx_intervencionista: 'Reemplazo quirúrgico de la aorta ascendente en la forma tipo A en la mayoría de los centros; TEVAR considerado en la forma tipo B con progresión o complicación durante la vigilancia.',
      criterios_uci: 'Manejo en cuidados críticos durante el periodo inicial de control de frecuencia cardiaca y presión arterial, igual que la disección clásica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Angio-TC de control a las 24-72 horas para vigilar la evolución (reabsorción, progresión a disección, o progresión hacia rotura), dado el comportamiento variable descrito.',
      seguimiento_ambulatorio: 'Vigilancia por imagen seriada más frecuente que en la disección clásica ya estabilizada, particularmente en las primeras semanas tras el diagnóstico.',
      pronostico: 'Variable según la trayectoria evolutiva; una proporción se reabsorbe espontáneamente con manejo médico, pero el riesgo de progresión a disección franca o rotura justifica la vigilancia estrecha, particularmente en la forma tipo A.',
      algoritmo: ['Dolor torácico/dorsal agudo + engrosamiento hiperdenso en semiluna sin doble luz en angio-TC → hematoma intramural aórtico', 'Clasificar por localización (Stanford A/B) igual que la disección clásica', 'Tipo A → manejo quirúrgico similar a la disección clásica en la mayoría de los centros', 'Tipo B → manejo médico con vigilancia por imagen estrecha (24-72h inicial)', 'Vigilar progresión a disección franca o rotura, dado el comportamiento evolutivo variable']
    },
    {
      nombre: 'Úlcera aórtica penetrante',
      color: '#8a6a1f',
      definicion: 'Placa ateroesclerótica ulcerada que penetra la lámina elástica interna hacia la capa media de la pared aórtica, ocurriendo característicamente en el paciente de mayor edad con ateroesclerosis aórtica difusa; puede permanecer estable, progresar a hematoma intramural o pseudoaneurisma, o romperse.',
      fisiopatologia: 'Una placa ateroesclerótica que ulcera su superficie erosiona progresivamente a través de la lámina elástica interna, penetrando hacia la capa media; a diferencia de la disección (que se propaga longitudinalmente creando una falsa luz extensa) y del hematoma intramural (difuso), la úlcera penetrante es una lesión focal que puede permanecer estable durante años, progresar localmente hacia un hematoma intramural adyacente o un pseudoaneurisma sacular, o, con menor frecuencia, romperse a través de la adventicia.',
      epidemiologia: 'Ocurre característicamente en el paciente de edad avanzada con ateroesclerosis aórtica difusa y múltiples factores de riesgo cardiovascular; con mayor frecuencia en la aorta descendente (a diferencia de la disección clásica, que afecta con más frecuencia la ascendente).',
      factores_riesgo: ['Ateroesclerosis aórtica difusa (el sustrato necesario)', 'Edad avanzada', 'Tabaquismo, dislipidemia, y otros factores de riesgo cardiovascular tradicionales', 'Hipertensión arterial concomitante'],
      clinica: 'Dolor torácico/dorsal agudo similar a la disección clásica en la lesión sintomática; una proporción considerable es asintomática y se descubre incidentalmente en un estudio de imagen solicitado por otra razón.',
      criterios_dx: 'Angio-TC mostrando un nicho ulceroso focal (colección de contraste que se extiende más allá del contorno luminal normal de la aorta) sobre una placa ateroesclerótica, distinto del engrosamiento difuso del hematoma intramural y de la doble luz extensa de la disección clásica.',
      laboratorio: 'No específico más allá de lo descrito para el síndrome aórtico agudo en general.',
      imagen: 'Angio-TC de elección: nicho ulceroso focal sobre placa ateroesclerótica; puede acompañarse de hematoma intramural adyacente si ha progresado localmente.',
      complementarios: 'Evaluación cardiovascular integral dado el sustrato ateroesclerótico difuso subyacente, que con frecuencia coexiste con enfermedad coronaria y de otros territorios vasculares.',
      dx_diferencial: 'Hematoma intramural aórtico (engrosamiento difuso, no focal), disección aórtica clásica (doble luz extensa con colgajo de íntima), aneurisma sacular de otra causa.',
      tx_medico: 'La lesión asintomática, pequeña, y estable se maneja con vigilancia por imagen y control estricto de los factores de riesgo cardiovascular; la lesión sintomática, de gran tamaño, con hematoma intramural asociado, o de crecimiento documentado se maneja de forma más agresiva.',
      tx_farmacologico: 'Control de la presión arterial y de los factores de riesgo ateroscleróticos (estatinas, antiagregación) como en cualquier enfermedad ateroesclerótica sistémica; control de frecuencia cardiaca y presión arterial similar al de la disección si la lesión es sintomática aguda.',
      tx_intervencionista: 'Reparación endovascular (preferida sobre la cirugía abierta en la mayoría de los casos, dado que el paciente típico tiene múltiples comorbilidades ateroscleróticas) en la lesión sintomática, de gran tamaño, o con progresión documentada.',
      criterios_uci: 'La lesión sintomática aguda o con datos de inestabilidad requiere el mismo nivel de vigilancia en cuidados críticos que la disección aguda.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia clínica y por imagen durante la fase aguda si la lesión es sintomática.',
      seguimiento_ambulatorio: 'Vigilancia por imagen periódica de la lesión estable, junto con manejo agresivo de los factores de riesgo cardiovascular sistémicos dado el sustrato ateroesclerótico difuso.',
      pronostico: 'Favorable en la lesión asintomática y estable con vigilancia adecuada; el riesgo de progresión a complicación aguda (hematoma intramural, pseudoaneurisma, rotura) justifica la vigilancia continuada, particularmente si el paciente desarrolla nuevos síntomas.',
      algoritmo: ['Nicho ulceroso focal sobre placa ateroesclerótica en angio-TC → úlcera aórtica penetrante', 'Asintomática, pequeña, estable → vigilancia por imagen + control agresivo de factores de riesgo ateroscleróticos', 'Sintomática, de gran tamaño, o con progresión → reparación endovascular preferida sobre cirugía abierta', 'Evaluar comorbilidad ateroesclerótica sistémica asociada (coronaria, cerebrovascular, periférica)']
    },
    {
      nombre: 'Aneurisma aórtico (torácico y abdominal, no roto)',
      color: '#3f6b52',
      definicion: 'Dilatación crónica y permanente de la pared aórtica (diámetro ≥1.5 veces el esperado para el segmento y el paciente), el sustrato sobre el que con frecuencia se desarrolla cualquiera de los 3 patrones agudos de este tema; asintomático en la gran mayoría de los casos hasta que se complica.',
      fisiopatologia: 'La degeneración progresiva de la media aórtica (por ateroesclerosis en el aneurisma abdominal típico, o por una enfermedad del tejido conectivo/válvula bicúspide en el aneurisma torácico ascendente típico) debilita la pared, permitiendo su dilatación progresiva bajo el estrés hemodinámico pulsátil sostenido; el riesgo de rotura aumenta de forma no lineal con el diámetro (un aumento relativamente pequeño en diámetro por encima de ciertos umbrales se asocia a un aumento desproporcionado del riesgo de rotura), lo que justifica los umbrales quirúrgicos específicos por diámetro.',
      epidemiologia: 'El aneurisma aórtico abdominal es considerablemente más frecuente que el torácico; predomina en varones de edad avanzada con antecedente de tabaquismo; el tamizaje con ecografía abdominal está recomendado en varones de 65-75 años que hayan fumado alguna vez.',
      factores_riesgo: ['Tabaquismo (el factor de riesgo modificable más fuerte para el aneurisma abdominal)', 'Sexo masculino y edad avanzada', 'Antecedente familiar de aneurisma aórtico', 'Hipertensión arterial y ateroesclerosis sistémica', 'Enfermedad del tejido conectivo o válvula aórtica bicúspide (particularmente relevantes para el aneurisma torácico ascendente, a menudo en pacientes más jóvenes)'],
      clinica: 'Asintomático en la gran mayoría de los casos, descubierto incidentalmente en un estudio de imagen o por tamizaje; cuando es sintomático sin haberse roto, puede producir dolor abdominal o dorsal sordo por el efecto de masa o la distensión de la pared, un hallazgo que obliga a descartar activamente expansión rápida o rotura contenida.',
      criterios_dx: 'Diámetro aórtico ≥1.5 veces el esperado para el segmento (habitualmente ≥3 cm en la aorta abdominal infrarrenal, ≥4-4.5 cm en la aorta torácica ascendente) confirmado por ecografía, angio-TC, o resonancia magnética.',
      laboratorio: 'No específico para el diagnóstico del aneurisma en sí.',
      imagen: 'Ecografía abdominal como herramienta de tamizaje y seguimiento del aneurisma abdominal (económica, sin radiación); angio-TC para la planificación quirúrgica y para el aneurisma torácico (menos accesible a la ecografía).',
      complementarios: 'Estudio genético dirigido si hay sospecha de enfermedad del tejido conectivo, particularmente relevante en el aneurisma torácico ascendente de un paciente joven sin factores de riesgo ateroscleróticos típicos.',
      dx_diferencial: 'Ectasia aórtica leve sin verdadero aneurisma (diámetro por debajo del umbral diagnóstico), otra masa abdominal o retroperitoneal que simule un aneurisma en la exploración física.',
      tx_medico: 'Vigilancia por imagen periódica en el aneurisma pequeño por debajo del umbral quirúrgico (intervalo determinado por el diámetro y la tasa de crecimiento); control estricto de la presión arterial y cese completo del tabaquismo en todos los casos, dado que ambos modifican la tasa de crecimiento.',
      tx_farmacologico: 'Control estricto de la presión arterial (betabloqueadores con frecuencia preferidos, particularmente en la enfermedad del tejido conectivo, por su efecto adicional sobre el estrés de cizallamiento); no existe un tratamiento farmacológico que revierta el aneurisma ya formado.',
      tx_intervencionista: 'Reparación electiva (endovascular o abierta) al alcanzar el umbral de diámetro (habitualmente ≥5.5 cm en varones/≥5.0 cm en mujeres para el aneurisma abdominal; ≥5.5 cm para el aneurisma de aorta ascendente, con umbrales más bajos en la enfermedad del tejido conectivo genéticamente confirmada), o ante crecimiento rápido documentado (&gt;0.5 cm en 6 meses) independientemente del diámetro absoluto.',
      criterios_uci: 'No aplica al aneurisma no complicado en sí; se maneja en cuidados críticos únicamente si se complica (ver Rotura aórtica).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma característica (manejo predominantemente ambulatorio del aneurisma no complicado).',
      seguimiento_ambulatorio: 'Vigilancia por imagen periódica con intervalo determinado por el tamaño (más frecuente conforme el aneurisma se acerca al umbral quirúrgico); tamizaje familiar en primer grado si se confirma una enfermedad del tejido conectivo genética.',
      pronostico: 'Excelente con vigilancia adecuada y reparación electiva oportuna al alcanzar el umbral; el aneurisma que se rompe antes de ser diagnosticado o reparado electivamente tiene una mortalidad considerablemente mayor (ver Rotura aórtica).',
      algoritmo: ['Tamizaje con ecografía abdominal en varones de 65-75 años que hayan fumado alguna vez', 'Diámetro por debajo del umbral quirúrgico → vigilancia por imagen periódica + control estricto de presión arterial y cese de tabaquismo', 'Diámetro ≥5.5 cm (varones)/≥5.0 cm (mujeres) en el abdominal, o ≥5.5 cm en el torácico ascendente → reparación electiva', 'Crecimiento &gt;0.5 cm en 6 meses → reparación independientemente del diámetro absoluto', 'Umbrales más bajos y vigilancia más estrecha si hay enfermedad del tejido conectivo genéticamente confirmada']
    },
    {
      nombre: 'Rotura aórtica',
      color: '#7a1f3d',
      definicion: 'Disrupción completa de todas las capas de la pared aórtica con hemorragia hacia un espacio adyacente (mediastino, espacio retroperitoneal, o cavidad pleural/peritoneal libre), la complicación catastrófica final común de cualquiera de las 4 entidades de este tema; mortalidad muy alta, particularmente si ocurre hacia una cavidad libre no contenida.',
      fisiopatologia: 'Cualquiera de las 4 entidades (disección, hematoma intramural, úlcera penetrante, o aneurisma) puede progresar hasta la disrupción completa de la adventicia (la capa externa que, hasta ese punto, había contenido el proceso), permitiendo la salida masiva de sangre; el desenlace depende críticamente de si la hemorragia queda contenida transitoriamente por estructuras adyacentes (rotura contenida, con una ventana breve para intervención) o se produce hacia una cavidad libre (mediastino, pleura, o peritoneo), donde la exanguinación es habitualmente rápida y con frecuencia fatal antes de poder intervenir.',
      epidemiologia: 'El riesgo aumenta de forma no lineal con el diámetro aórtico en el aneurisma, y está presente en cualquier momento en la disección, el hematoma intramural, o la úlcera penetrante no tratados oportunamente.',
      factores_riesgo: ['Diámetro aneurismático por encima del umbral quirúrgico no reparado', 'Crecimiento rápido documentado', 'Hipertensión arterial no controlada en cualquiera de las 4 entidades', 'Retraso en el diagnóstico o el tratamiento definitivo de cualquiera de las 4 entidades'],
      clinica: 'Dolor agudo intenso (torácico, dorsal, o abdominal según el sitio) seguido de colapso hemodinámico súbito (hipotensión, taquicardia, palidez, alteración del estado de alerta); en la rotura contenida transitoriamente puede haber una fase de relativa estabilidad breve antes del colapso franco.',
      criterios_dx: 'Sospecha clínica por el colapso hemodinámico en el contexto de una de las 4 entidades conocida o sospechada; confirmación por angio-TC urgente si el paciente tolera el traslado, o diagnóstico presuntivo clínico que no debe retrasar la intervención si el paciente está demasiado inestable para el estudio.',
      laboratorio: 'Hemoglobina seriada (puede caer rápidamente), tipo y pruebas cruzadas urgentes para transfusión masiva.',
      imagen: 'Angio-TC urgente si el paciente tolera el traslado; ecografía a pie de cama (FAST/eFAST) o ecocardiograma transtorácico si el paciente está demasiado inestable, para buscar líquido libre o derrame pericárdico mientras se organiza la intervención.',
      complementarios: 'Activación inmediata del protocolo de transfusión masiva y del equipo quirúrgico/intervencionista, en paralelo a cualquier estudio diagnóstico adicional.',
      dx_diferencial: 'Otras causas de colapso hemodinámico súbito en el paciente con dolor agudo (infarto agudo de miocardio con choque cardiogénico, tromboembolia pulmonar masiva), que deben considerarse si el contexto no apunta claramente a una de las 4 entidades de este tema.',
      tx_medico: 'Reanimación con líquidos y hemoderivados dirigida (evitando la reanimación excesiva con cristaloide, que puede aumentar la presión y agravar el sangrado antes del control quirúrgico definitivo) mientras se organiza la intervención quirúrgica/endovascular urgente, la única medida que realmente controla la hemorragia.',
      tx_farmacologico: 'Control de la presión arterial dentro de límites permisivos (hipotensión permisiva) mientras se organiza la intervención definitiva, evitando tanto la hipertensión (que agrava el sangrado) como la hipoperfusión excesiva de órganos.',
      tx_intervencionista: 'Reparación quirúrgica abierta o endovascular urgente sin demora, la única intervención que controla definitivamente la hemorragia; el abordaje específico depende de la localización y de la anatomía del paciente.',
      criterios_uci: 'Indicación absoluta de manejo en cuidados críticos con reanimación agresiva y traslado inmediato a quirófano/sala de intervención.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia hemodinámica y de la función orgánica postoperatoria estrecha, dado el compromiso hemodinámico significativo previo a la reparación.',
      pronostico: 'Muy reservado, particularmente en la rotura hacia una cavidad libre no contenida, donde la mortalidad prehospitalaria es muy alta; la rotura contenida transitoriamente ofrece una ventana breve donde la intervención inmediata puede salvar la vida.',
      algoritmo: ['Dolor agudo intenso + colapso hemodinámico súbito en paciente con aneurisma/disección conocido o sospechado → sospechar rotura', 'Activar protocolo de transfusión masiva y equipo quirúrgico de inmediato, en paralelo a cualquier estudio', 'Angio-TC solo si el paciente tolera el traslado; no retrasar la intervención si está demasiado inestable', 'Hipotensión permisiva mientras se organiza la reparación definitiva', 'Reparación quirúrgica/endovascular urgente: la única medida que controla la hemorragia']
    },
    {
      nombre: 'Taponamiento cardiaco',
      color: '#6b4a2e',
      definicion: 'Compresión aguda del corazón por sangre que se acumula en el espacio pericárdico, complicación característica de la disección tipo A que se extiende retrógradamente hacia la raíz aórtica y rompe hacia el pericardio; una de las causas más frecuentes de muerte súbita en la disección tipo A no reconocida.',
      fisiopatologia: 'La disección tipo A puede extenderse retrógradamente desde la aorta ascendente hacia la raíz aórtica, y desde ahí romper hacia el espacio pericárdico (que rodea la raíz aórtica proximal); la sangre acumulada bajo presión en ese espacio comprime progresivamente las cavidades cardiacas de menor presión (predominantemente la aurícula y el ventrículo derechos), limitando el llenado diastólico y reduciendo críticamente el gasto cardiaco, produciendo el cuadro clásico de la tríada de Beck (hipotensión, ingurgitación yugular, ruidos cardiacos velados) y pulso paradójico.',
      epidemiologia: 'Ocurre en una proporción considerable de las disecciones tipo A, siendo una de las causas más frecuentes de muerte súbita prehospitalaria en esta condición cuando no se reconoce a tiempo.',
      factores_riesgo: ['Disección tipo A con extensión retrógrada hacia la raíz aórtica', 'Retraso en el diagnóstico y tratamiento quirúrgico de la disección tipo A subyacente'],
      clinica: 'Tríada de Beck (hipotensión, ingurgitación yugular, ruidos cardiacos velados/apagados), pulso paradójico (caída &gt;10 mmHg de la presión sistólica con la inspiración), y taquicardia compensatoria; puede progresar rápidamente a actividad eléctrica sin pulso si no se reconoce y trata de inmediato.',
      criterios_dx: 'Ecocardiograma (transtorácico o transesofágico) mostrando derrame pericárdico con signos de compromiso hemodinámico (colapso diastólico del ventrículo derecho, colapso de la aurícula derecha, variación respiratoria exagerada del flujo transvalvular), en el contexto de una disección tipo A conocida o sospechada.',
      laboratorio: 'No específico para el diagnóstico del taponamiento en sí.',
      imagen: 'Ecocardiograma urgente a pie de cama; la angio-TC (si el paciente la tolera) puede mostrar el derrame pericárdico además de caracterizar la disección subyacente.',
      complementarios: 'Ninguno adicional; la confirmación ecocardiográfica es suficiente para proceder a la intervención urgente.',
      dx_diferencial: 'Otras causas de derrame pericárdico con taponamiento no relacionadas con disección (deben considerarse si no hay evidencia de disección aórtica concomitante).',
      tx_medico: 'Reanimación con líquidos como medida temporal puente mientras se organiza la cirugía definitiva de la disección tipo A subyacente; la pericardiocentesis NO es el tratamiento definitivo en este contexto específico y puede ser peligrosa.',
      tx_farmacologico: 'No hay tratamiento farmacológico definitivo; el soporte con líquidos es solo temporal mientras se organiza la cirugía.',
      tx_intervencionista: 'Cirugía urgente de la disección tipo A subyacente como tratamiento definitivo; la pericardiocentesis percutánea se evita como medida aislada de rutina en este contexto específico, dado que el alivio brusco de la presión pericárdica puede precipitar un aumento súbito de la presión arterial y agravar el sangrado activo hacia el pericardio, siendo preferible proceder directamente a cirugía cuando es factible.',
      criterios_uci: 'Indicación absoluta de manejo en cuidados críticos con traslado inmediato a quirófano.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia hemodinámica estrecha en el periodo perioperatorio inmediato de la cirugía de la disección subyacente.',
      pronostico: 'Reservado si no se reconoce y trata de inmediato mediante cirugía definitiva de la disección tipo A subyacente; una de las causas evitables de muerte súbita en la disección tipo A cuando se reconoce a tiempo.',
      algoritmo: ['Disección tipo A conocida + hipotensión + ingurgitación yugular + ruidos velados → sospechar taponamiento por extensión retrógrada', 'Ecocardiograma urgente a pie de cama para confirmar', 'Reanimación con líquidos como puente temporal, NO pericardiocentesis de rutina como tratamiento aislado', 'Cirugía urgente de la disección tipo A subyacente: el único tratamiento definitivo']
    },
    {
      nombre: 'Malperfusión de órganos',
      color: '#8a6a1f',
      definicion: 'Isquemia de un órgano o territorio vascular por oclusión de una rama aórtica comprometida en el plano de disección (por compresión de la falsa luz expandida sobre la verdadera, o por oclusión directa del ostium de la rama), pudiendo afectar el territorio mesentérico, renal, de extremidades, o medular según la rama específica involucrada.',
      fisiopatologia: `El plano de disección, al propagarse a lo largo de la aorta, puede comprometer el origen de cualquier rama aórtica de 2 formas: la falsa luz expandida comprime dinámicamente la verdadera luz reduciendo el flujo a la rama (malperfusión dinámica, que puede fluctuar), o el plano de disección se extiende directamente hacia el ostium de la rama ocluyéndolo de forma fija (malperfusión estática); el territorio afectado determina la manifestación clínica y la urgencia relativa: la malperfusión medular (arterias intercostales/espinales) es la más devastadora y menos reversible una vez establecida, mientras que la mesentérica tiene la ventana terapéutica más estrecha antes del infarto intestinal irreversible.${figBlock('Imagen 2', 'Malperfusión según la rama aórtica comprometida', malperfusionHtml)}`,
      epidemiologia: 'Ocurre en una proporción considerable de las disecciones aórticas agudas, siendo un determinante mayor de la mortalidad y morbilidad independientemente del tipo Stanford, dado que redefine la urgencia del manejo incluso en el tipo B habitualmente manejado médicamente.',
      factores_riesgo: ['Extensión anatómica extensa de la disección (mayor probabilidad de comprometer múltiples ramas)', 'Retraso en el diagnóstico y tratamiento de la disección subyacente', 'Hipotensión concomitante (agrava cualquier malperfusión ya presente por reducción adicional de la presión de perfusión distal)'],
      clinica: 'Mesentérica: dolor abdominal desproporcionado al examen físico, con progresión a acidosis láctica y signos de irritación peritoneal si progresa a infarto. Renal: oliguria, elevación de creatinina, hipertensión de inicio súbito. Extremidades: dolor, palidez, ausencia de pulso, frialdad de la extremidad afectada (los "6 signos P" clásicos de isquemia arterial aguda). Medular: paraplejia o paraparesia de inicio súbito, con frecuencia con nivel sensitivo asociado.',
      criterios_dx: 'Sospecha clínica por los signos descritos en un paciente con disección aórtica conocida o sospechada, confirmada por angio-TC mostrando el compromiso de la rama específica correspondiente (compresión dinámica de la falsa luz u oclusión estática del ostium).',
      laboratorio: 'Lactato sérico (mesentérica), creatinina (renal), creatina-cinasa (extremidad isquémica, marcador de daño muscular).',
      imagen: 'Angio-TC de aorta completa con reconstrucción de las ramas específicas comprometidas, idealmente el mismo estudio que confirma la disección subyacente.',
      complementarios: 'Interconsulta urgente con el servicio correspondiente según el territorio afectado (cirugía vascular/general para mesentérica y extremidades, nefrología para el manejo de la lesión renal, neurología/neurocirugía para la malperfusión medular).',
      dx_diferencial: 'Isquemia de cualquier territorio por causa embólica o trombótica primaria no relacionada con disección (debe considerarse si no hay evidencia clara de disección aórtica concomitante).',
      tx_medico: 'El manejo de la disección subyacente (quirúrgico en Stanford A, o intervencionista dirigido en Stanford B con malperfusión) es la prioridad, dado que corregir el flujo aórtico central con frecuencia restaura el flujo a la rama comprometida sin necesidad de una intervención separada sobre esa rama específica.',
      tx_farmacologico: 'Evitar la hipotensión (que agrava cualquier malperfusión ya presente) durante el control de la presión arterial de la disección subyacente, ajustando los objetivos de presión arterial si hay malperfusión activa documentada.',
      tx_intervencionista: 'Fenestración percutánea o colocación de stent en la rama específica comprometida cuando la corrección del flujo aórtico central por sí sola no resuelve la malperfusión de esa rama en particular; cirugía vascular directa sobre el territorio afectado en casos seleccionados (ej. isquemia de extremidad establecida).',
      criterios_uci: 'Cualquier malperfusión de órgano en el contexto de disección aórtica aguda, indicación absoluta de manejo en cuidados críticos.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia estrecha de la función del órgano afectado (lactato seriado en mesentérica, función renal seriada, examen neurológico/vascular seriado según el territorio) tras la intervención sobre la disección.',
      pronostico: 'La malperfusión medular establecida tiene el pronóstico más reservado de recuperación funcional; la malperfusión mesentérica no revertida oportunamente progresa a infarto intestinal con alta mortalidad; la malperfusión renal y de extremidades tienen, en general, mejor potencial de recuperación si se corrige oportunamente el flujo aórtico central.',
      algoritmo: ['Disección aórtica conocida + síntoma "a distancia" (abdominal, renal, de extremidad, o neurológico) → sospechar malperfusión de rama', 'Angio-TC con reconstrucción de ramas para confirmar el territorio y el mecanismo (dinámico vs. estático)', 'Priorizar la corrección del flujo aórtico central (quirúrgica o endovascular) sobre la rama subyacente', 'Fenestración/stent dirigido a la rama específica si la corrección central no resuelve la malperfusión de esa rama', 'Evitar hipotensión durante el control de presión arterial mientras hay malperfusión activa']
    },
    {
      nombre: 'Insuficiencia aórtica aguda',
      color: '#7a4363',
      definicion: 'Regurgitación aórtica de instauración súbita por disrupción de la geometría normal de la válvula aórtica, complicación característica de la disección tipo A que compromete el anillo valvular o las comisuras; a diferencia de la insuficiencia aórtica crónica (con remodelado compensador del ventrículo izquierdo), el ventrículo izquierdo no dilatado no tolera el volumen regurgitante agudo, produciendo edema pulmonar rápido.',
      fisiopatologia: 'La disección tipo A puede alterar la geometría de la válvula aórtica trivalva de 3 formas: dilatando el anillo aórtico (por la disección misma de la raíz), desprendiendo una comisura de su inserción normal (permitiendo el prolapso de la cúspide correspondiente hacia el ventrículo izquierdo), o produciendo un colgajo de íntima que prolapsa directamente a través del orificio valvular impidiendo su coaptación normal; cualquiera de estos mecanismos produce regurgitación aórtica aguda hacia un ventrículo izquierdo de tamaño y distensibilidad normales (no remodelado, a diferencia de la insuficiencia aórtica crónica), que no tolera el volumen regurgitante súbito y transmite rápidamente la presión elevada hacia la aurícula izquierda y la circulación pulmonar, produciendo edema agudo de pulmón.',
      epidemiologia: 'Ocurre en una proporción considerable de las disecciones tipo A, siendo un hallazgo que debe buscarse activamente mediante auscultación cuidadosa y ecocardiograma en toda disección tipo A.',
      factores_riesgo: ['Disección tipo A que compromete la raíz aórtica, el anillo, o las comisuras valvulares', 'Válvula aórtica bicúspide preexistente (geometría valvular ya alterada de base)', 'Extensión proximal extensa de la disección hacia la raíz'],
      clinica: 'Disnea aguda progresiva por edema pulmonar (a diferencia de la insuficiencia aórtica crónica, que puede ser asintomática durante años), soplo diastólico de regurgitación aórtica de nueva aparición (con frecuencia difícil de auscultar por la taquicardia y el ambiente ruidoso del paciente agudo), presión de pulso amplia si la frecuencia cardiaca lo permite apreciar.',
      criterios_dx: 'Ecocardiograma (transtorácico o transesofágico) mostrando el mecanismo específico de la insuficiencia (prolapso de cúspide, colgajo de íntima transvalvular, o dilatación anular) y su gravedad, en el contexto de una disección tipo A confirmada.',
      laboratorio: 'Péptido natriurético (BNP/NT-proBNP) puede estar elevado reflejando la sobrecarga aguda de presión/volumen ventricular izquierdo, aunque no es específico ni necesario para el diagnóstico.',
      imagen: 'Ecocardiograma urgente (transtorácico como primera aproximación, transesofágico si se requiere mejor caracterización del mecanismo o si ya se está evaluando la disección por esa vía).',
      complementarios: 'Radiografía de tórax mostrando signos de edema pulmonar agudo si está presente clínicamente.',
      dx_diferencial: 'Insuficiencia aórtica crónica descompensada por otra causa (historia más prolongada, ventrículo izquierdo dilatado y remodelado en el ecocardiograma, a diferencia del ventrículo de tamaño normal en la forma aguda), edema pulmonar de otra causa concomitante.',
      tx_medico: 'Cirugía urgente de la disección tipo A subyacente, que en la mayoría de los casos incluye reparación o reemplazo de la válvula aórtica en el mismo procedimiento según el mecanismo específico y la reparabilidad de la válvula nativa; el soporte médico del edema pulmonar es solo un puente temporal mientras se organiza la cirugía.',
      tx_farmacologico: 'Soporte respiratorio y diuréticos con precaución para el edema pulmonar mientras se organiza la cirugía; evitar vasodilatadores que puedan agravar la hipotensión en el contexto de un gasto cardiaco ya comprometido, priorizando siempre el traslado urgente a cirugía sobre el manejo médico prolongado.',
      tx_intervencionista: 'Cirugía urgente de la disección tipo A con reparación (resuspensión de las comisuras cuando la válvula nativa lo permite) o reemplazo valvular aórtico en el mismo procedimiento, según el mecanismo y la reparabilidad de la válvula.',
      criterios_uci: 'Indicación absoluta de manejo en cuidados críticos con soporte respiratorio y traslado inmediato a quirófano.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia ecocardiográfica de la función valvular y ventricular en el periodo postoperatorio inmediato.',
      seguimiento_ambulatorio: 'Seguimiento cardiológico de la función valvular reparada o protésica a largo plazo, junto con el seguimiento habitual de la disección tipo A operada.',
      pronostico: 'Depende fundamentalmente de la reparación quirúrgica oportuna de la disección tipo A subyacente y de la posibilidad de preservar o reemplazar adecuadamente la válvula aórtica en el mismo procedimiento.',
      algoritmo: ['Disección tipo A + disnea aguda/soplo diastólico nuevo → sospechar insuficiencia aórtica aguda', 'Ecocardiograma urgente para caracterizar el mecanismo (prolapso de cúspide, colgajo transvalvular, dilatación anular)', 'Soporte respiratorio/diurético con precaución como puente temporal, sin retrasar la cirugía', 'Cirugía urgente de la disección con reparación o reemplazo valvular en el mismo procedimiento', 'Distinguir de la insuficiencia aórtica crónica descompensada por el ventrículo izquierdo de tamaño normal, no remodelado']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de este tema se centra en el control estricto de frecuencia cardiaca y presión arterial mientras se define y organiza el manejo definitivo (quirúrgico, endovascular, o médico según la entidad y la clasificación Stanford), y en la vigilancia activa de las 4 complicaciones agudas.',
    parametros: ['Frecuencia cardiaca y presión arterial seriadas (objetivo de control estricto)', 'Pulsos periféricos y presión arterial en ambos brazos', 'Diuresis horaria y función renal', 'Examen neurológico seriado (incluyendo función motora de extremidades inferiores)', 'Signos de taponamiento (ingurgitación yugular, pulso paradójico) en la disección tipo A'],
    criterios_uci_general: 'Todo síndrome aórtico agudo confirmado o fuertemente sospechado requiere manejo inicial en cuidados críticos con monitorización invasiva de la presión arterial.',
    criterios_tips_general: 'No aplica de forma directa a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa a este tema.',
    prevencion: 'Control estricto y sostenido de la presión arterial en la población general (el factor de riesgo modificable más importante para las 4 entidades), tamizaje con ecografía abdominal en varones de 65-75 años que hayan fumado alguna vez, y vigilancia por imagen seriada estructurada en el paciente con aneurisma conocido o enfermedad del tejido conectivo, dado que la reparación electiva oportuna previene la gran mayoría de las complicaciones agudas catastróficas de este tema.'
  }
};

export const compCites = {
  'Disección aórtica': [1, 3, 4, 14],
  'Hematoma intramural aórtico': [9, 10],
  'Úlcera aórtica penetrante': [11, 12],
  'Aneurisma aórtico (torácico y abdominal, no roto)': [12, 13, 15],
  'Rotura aórtica': [5, 12],
  'Taponamiento cardiaco': [4, 7],
  'Malperfusión de órganos': [4, 7, 15],
  'Insuficiencia aórtica aguda': [4, 7]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = { 'ADD-RS (Aortic Dissection Detection Risk Score)': [3, 4] };
export const escalaCalc = { 'ADD-RS (Aortic Dissection Detection Risk Score)': 'add-rs' };
export const compGroups = [
  { name: 'Entidades', items: ['Disección aórtica', 'Hematoma intramural aórtico', 'Úlcera aórtica penetrante', 'Aneurisma aórtico (torácico y abdominal, no roto)'] },
  { name: 'Complicaciones', items: ['Rotura aórtica', 'Taponamiento cardiaco', 'Malperfusión de órganos', 'Insuficiencia aórtica aguda'] }
];
export const complicacionesIntro = 'Las primeras 4 fichas son las entidades que forman el espectro del síndrome aórtico agudo: disección (la más frecuente), hematoma intramural (sin desgarro de íntima), úlcera penetrante (sobre placa ateroesclerótica), y el aneurisma no roto como sustrato crónico común. Las siguientes 4 son las complicaciones agudas que determinan la mortalidad: rotura aórtica, taponamiento cardiaco, malperfusión de órganos, e insuficiencia aórtica aguda.';
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'clasificacion', label: 'Clasificación' },
  { id: 'complicaciones', label: 'Complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
export const arbol = {
  root: { title: 'SÍNDROME AÓRTICO AGUDO', color: '#7a1f3d', target: 'definicion' },
  branches: [
    { title: 'Entidades', sub: 'El espectro del síndrome', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Disección aórtica', sub: 'La más frecuente', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Hematoma intramural', sub: 'Sin desgarro de íntima', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Úlcera penetrante', sub: 'Sobre placa ateroesclerótica', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Aneurisma no roto', sub: 'El sustrato crónico', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones', sub: 'Determinan la mortalidad', color: '#6b4a2e', target: 'complicaciones', leaves: [
      { title: 'Rotura aórtica', sub: 'Complicación catastrófica final', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Taponamiento cardiaco', sub: 'Extensión retrógrada tipo A', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Malperfusión de órganos', sub: 'Mesentérica, renal, extremidad, medular', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Insuficiencia aórtica aguda', sub: 'Compromiso de válvula/anillo', color: '#7a4363', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { no_invasivos: [3] };
export const clasificacionCite = [3, 1];
export const seguimientoCite = [1, 5];
