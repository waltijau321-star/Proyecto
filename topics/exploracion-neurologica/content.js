// topics/exploracion-neurologica/content.js — Semiología 5: Exploración Neurológica.
// Quinto tema de Semiología, mismo patrón que los anteriores (ver exploracion-cardiovascular/
// exploracion-abdominal para la nota completa de convenciones). Es el cluster más grande del
// kardex (7 sub-ítems), así que aquí SÍ se usa el bloque `clasificacion` del motor (como en un
// tema de enfermedad) para la Escala de Coma de Glasgow — es una escala de exploración validada,
// justo el caso de uso que contempla topics/_template-semiologia/content.js.
//
// Las 6 figuras (5 en complicaciones + 1 en clasificacion) son TODAS código propio (SVG/HTML con
// var(--...) de tema) — nada de imágenes externas ni asistidas por IA, mismo criterio ya
// establecido: cada una representa un dato clínico exacto (dermatomas, asimetría facial,
// maniobras meníngeas, tablas de marcha/UMN-LMN/Glasgow), y ese contenido va siempre a mano (ver
// .claude/skills/figura-didactica/SKILL.md).

export const meta = {
  id: 'exploracion-neurologica',
  titulo: 'Exploración Neurológica',
  subtitulo: 'Semiología 5 · Medicina Interna',
  accent: '#4a3d73',
  accentDim: '#7b6ba6'
};

export const definicionText = 'La exploración neurológica evalúa, en orden, el estado mental y el nivel de conciencia, los 12 pares craneales, el sistema motor (fuerza, tono, reflejos), el sistema sensitivo, la coordinación, la marcha y, cuando hay sospecha clínica, los signos meníngeos y los reflejos patológicos de liberación piramidal. A diferencia de otros sistemas, aquí la secuencia se adapta al motivo de consulta: ante alteración del estado de conciencia, este se valora primero y de forma prioritaria (con la Escala de Coma de Glasgow) antes de continuar con el resto. Bien ejecutada, permite localizar una lesión dentro del sistema nervioso central o periférico —muchas veces con precisión anatómica— antes de cualquier estudio de neuroimagen.';

export const bibliografia = [
  "Bickley LS, Szilagyi PG, Hoffman RM. Bates' Guide to Physical Examination and History Taking. 13th ed. Philadelphia: Wolters Kluwer; 2021.",
  'Argente HA, Álvarez ME. Semiología Médica: Fisiopatología, Semiotecnia y Propedéutica. 2nd ed. Buenos Aires: Editorial Médica Panamericana; 2013.',
  "LeBlond RF, Brown DD, Suneja M, Szot JF. DeGowin's Diagnostic Examination. 10th ed. New York: McGraw-Hill; 2015.",
  'McGee S. Evidence-Based Physical Diagnosis. 4th ed. Philadelphia: Elsevier; 2018.',
  'Surós Batlló A, Surós Batlló J. Semiología Médica y Técnica Exploratoria. 8th ed. Barcelona: Elsevier Masson; 2001.',
  'Teasdale G, Jennett B. Assessment of coma and impaired consciousness: a practical scale. Lancet. 1974;2(7872):81-84.',
  "Thomas KE, Hasbun R, Jekel J, Quagliarello VJ. The diagnostic accuracy of Kernig's sign, Brudzinski's sign, and nuchal rigidity in adults with suspected meningitis. Clin Infect Dis. 2002;35(1):46-52.",
  "Ropper AH, Samuels MA, Klein JP. Adams and Victor's Principles of Neurology. 11th ed. New York: McGraw-Hill; 2019.",
  "Campbell WW. DeJong's The Neurologic Examination. 8th ed. Philadelphia: Wolters Kluwer; 2019."
];

// Reetiqueta los 4 campos genéricos del motor para que encajen con contenido semiológico
// (mismo criterio que los temas de Semiología anteriores).
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
// el orden de aparición al recorrer `complicaciones` de arriba a abajo. La tabla de la Escala de
// Coma de Glasgow (figurasClasificacion, sección "Escalas de exploración") vive en una sección
// distinta y ya aparece pegada a su escala — queda fuera de este conteo.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

// ---------------------------------------------------------------------------------------------
// Helpers de figuras (SVG a mano, theme-aware vía var(--...) salvo colores clínicos ya
// establecidos en el proyecto: #3f6b52 = normal/reassuring, #8c3a34 = patológico/alarma).
// ---------------------------------------------------------------------------------------------

function dermatomasSVG() {
  return `<svg viewBox="0 0 220 320" role="img" aria-labelledby="derm-t derm-d" style="width:100%;max-width:220px;display:block;margin:0 auto;">
    <title id="derm-t">Dermatomas de referencia clínica</title>
    <desc id="derm-d">Silueta corporal esquemática de frente, con bandas horizontales marcando los dermatomas de referencia clínica más usados: C4 en el hombro, T4 en la línea intermamilar, T10 en el ombligo, L1 en la región inguinal, y L4-S1 en la pierna.</desc>
    <path d="M110,8 a18,18 0 1,0 0.1,0 Z" fill="none" stroke="var(--line)" stroke-width="1.5"/>
    <path d="M75,45 Q110,32 145,45 L155,110 Q158,180 145,230 L140,300 L118,300 L112,190 L108,190 L102,300 L80,300 L75,230 Q62,180 65,110 Z" fill="none" stroke="var(--line)" stroke-width="1.5"/>
    <line x1="66" y1="60" x2="154" y2="60" stroke="#4a3d73" stroke-width="1.5"/>
    <text x="160" y="63" font-size="9" font-weight="700" fill="#4a3d73">C4</text>
    <line x1="63" y1="108" x2="157" y2="108" stroke="#4a3d73" stroke-width="1.5"/>
    <text x="160" y="111" font-size="9" font-weight="700" fill="#4a3d73">T4</text>
    <text x="110" y="105" text-anchor="middle" font-size="7.5" fill="var(--ink-faint)">línea intermamilar</text>
    <line x1="63" y1="165" x2="157" y2="165" stroke="#4a3d73" stroke-width="1.5"/>
    <text x="160" y="168" font-size="9" font-weight="700" fill="#4a3d73">T10</text>
    <text x="110" y="162" text-anchor="middle" font-size="7.5" fill="var(--ink-faint)">ombligo</text>
    <line x1="67" y1="215" x2="153" y2="215" stroke="#4a3d73" stroke-width="1.5"/>
    <text x="156" y="218" font-size="9" font-weight="700" fill="#4a3d73">L1</text>
    <text x="110" y="212" text-anchor="middle" font-size="7.5" fill="var(--ink-faint)">región inguinal</text>
    <line x1="66" y1="295" x2="118" y2="295" stroke="#4a3d73" stroke-width="1.5"/>
    <text x="30" y="298" font-size="9" font-weight="700" fill="#4a3d73">L4-S1</text>
  </svg>
  <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:6px 0 0;">Vista anterior. Landmarks de mayor uso clínico: C4 (hombro), T4 (línea intermamilar), T10 (ombligo), L1 (inguinal), L4-S1 (pierna) — no todos los dermatomas, solo los de referencia rápida a la cabecera.</p>`;
}

function paralisisFacialSVG() {
  function cara(id, titulo, frenteOk, ladoCaido) {
    const cejaIzq = frenteOk ? 'M20,28 Q30,20 40,28' : 'M20,30 Q30,29 40,30';
    const cejaDer = frenteOk ? 'M60,28 Q70,20 80,28' : (ladoCaido === 'der' ? 'M60,32 Q70,33 80,32' : 'M60,28 Q70,20 80,28');
    const cejaIzqFinal = (ladoCaido === 'izq' && !frenteOk) ? 'M20,31 Q30,32 40,31' : cejaIzq;
    const boca = ladoCaido === 'der' ? 'M28,72 Q50,80 68,66' : ladoCaido === 'izq' ? 'M32,66 Q50,80 72,72' : 'M28,70 Q50,80 72,70';
    return `<div style="text-align:center;">
    <svg viewBox="0 0 100 100" role="img" aria-labelledby="${id}-t" style="width:100%;max-width:150px;">
      <title id="${id}-t">${titulo}</title>
      <circle cx="50" cy="50" r="42" fill="none" stroke="var(--line)" stroke-width="1.5"/>
      <path d="${cejaIzqFinal}" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>
      <path d="${cejaDer}" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>
      <circle cx="30" cy="42" r="3" fill="var(--ink)"/>
      <circle cx="70" cy="42" r="3" fill="var(--ink)"/>
      <path d="${boca}" fill="none" stroke="#8c3a34" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
    <div style="font-size:11px;font-weight:700;color:var(--ink);margin-top:2px;">${titulo}</div>
    </div>`;
  }
  return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
    ${cara('pf-c', 'Parálisis central (izquierda respetada)', true, 'der')}
    ${cara('pf-p', 'Parálisis periférica (toda la hemicara)', false, 'der')}
  </div>
  <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Central: frente simétrica (inervación bilateral de la porción superior del núcleo facial), solo cae la mitad inferior. Periférica: cae toda la hemicara, incluida la frente (no puede elevar la ceja ni cerrar el ojo de ese lado).</p>`;
}

function signosMeningeosSVG() {
  return `<svg viewBox="0 0 300 140" role="img" aria-labelledby="men-t men-d" style="width:100%;max-width:320px;display:block;margin:0 auto;">
    <title id="men-t">Maniobras de Kernig y Brudzinski</title>
    <desc id="men-d">Dos figuras esquemáticas de un paciente en decúbito supino: a la izquierda la maniobra de Kernig (cadera flexionada a 90 grados, intento de extender la rodilla); a la derecha la maniobra de Brudzinski (flexión pasiva del cuello con flexión refleja de caderas y rodillas).</desc>
    <line x1="10" y1="120" x2="140" y2="120" stroke="var(--line)" stroke-width="1"/>
    <circle cx="30" cy="95" r="9" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
    <path d="M39,100 L70,110 L70,120" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>
    <path d="M70,120 L100,95" fill="none" stroke="#8c3a34" stroke-width="2" stroke-linecap="round"/>
    <path d="M100,95 L128,100" fill="none" stroke="#8c3a34" stroke-width="2" stroke-linecap="round"/>
    <path d="M110,88 A10,10 0 0,1 100,95" fill="none" stroke="var(--ink-faint)" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="70" y="135" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Kernig</text>
    <line x1="160" y1="120" x2="290" y2="120" stroke="var(--line)" stroke-width="1"/>
    <circle cx="180" cy="103" r="9" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
    <path d="M175,111 Q160,108 152,100" fill="none" stroke="#8c3a34" stroke-width="2" stroke-linecap="round"/>
    <path d="M188,110 L215,120" fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round"/>
    <path d="M215,120 L235,102 L255,110" fill="none" stroke="#8c3a34" stroke-width="2" stroke-linecap="round"/>
    <path d="M215,120 L228,110" fill="none" stroke="#8c3a34" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    <text x="220" y="135" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Brudzinski</text>
  </svg>
  <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:6px 0 0;">Kernig: dolor/resistencia al extender la rodilla con la cadera flexionada a 90°. Brudzinski: la flexión pasiva del cuello provoca flexión refleja e involuntaria de caderas y rodillas (líneas rojas).</p>`;
}

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Exploración neurológica normal',
      tituloB: 'Hallazgos que obligan a profundizar el estudio',
      compensada: 'Alerta, orientado en las 3 esferas, lenguaje fluente y comprensible; pupilas isocóricas y reactivas, movimientos oculares completos, cara simétrica; fuerza 5/5 en las 4 extremidades, tono normal, reflejos osteotendinosos simétricos (2+); sensibilidad conservada en todas las modalidades; coordinación normal (dedo-nariz, Romberg negativo); marcha normal; sin signos meníngeos ni reflejos patológicos.',
      descompensada: 'Cualquier alteración del nivel de conciencia o del contenido mental, asimetría pupilar o facial, déficit de fuerza o sensibilidad focal, reflejos asimétricos o clono, alteración de la coordinación o de la marcha, o cualquier signo meníngeo o patológico (Babinski, Kernig, Brudzinski) — cada uno de estos hallazgos, aislado, ya orienta a una localización anatómica específica dentro del sistema nervioso y puede justificar neuroimagen urgente.'
    }
  },
  // `clasificacion` va al mismo nivel que `diagnostico` (no anidado dentro), porque
  // buildClasificacion() en engine/study-view.js lee `topic.content.clasificacion` directamente
  // — anidado bajo `diagnostico` (como estaba antes) el motor nunca encontraba `D.clasificacion`
  // y la sección "Escalas de exploración" (con la Escala de Coma de Glasgow) quedaba invisible,
  // pese a estar completamente escrita. Bug encontrado y corregido en esta revisión.
  clasificacion: {
    compensada_descompensada: 'La Escala de Coma de Glasgow (ECG) cuantifica el nivel de conciencia mediante 3 componentes evaluados por separado —apertura ocular, respuesta verbal y respuesta motora— y es la única escala de exploración física de uso universal en este tema. Se reporta siempre desglosada (ej. "O2V2M4 = 8") y no solo como suma total, porque el mismo puntaje total puede corresponder a combinaciones clínicamente distintas.',
    escalas: [
      { nombre: 'Escala de Coma de Glasgow (ECG)', componentes: 'Apertura ocular (4) + Respuesta verbal (5) + Respuesta motora (6)', formula: 'Suma de los 3 componentes (mínimo 3, máximo 15)', interpretacion: '13-15: leve. 9-12: moderado. ≤8: severo — indicación clásica de manejo avanzado de la vía aérea ("8 = intuba").' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Secuencia y estructura de la exploración neurológica',
      color: '#3d5a73',
      definicion: 'Orden sistemático de la exploración neurológica: estado mental y nivel de conciencia, pares craneales, sistema motor (fuerza, tono, reflejos), sistema sensitivo, coordinación, marcha, y —si hay sospecha clínica— signos meníngeos y reflejos patológicos.',
      clinica: 'A diferencia de los demás sistemas, este orden se adapta al motivo de consulta: ante alteración aguda del estado de conciencia, el nivel de conciencia se valora primero y de inmediato (Escala de Coma de Glasgow), antes de continuar con el resto de la exploración.',
      criterios_dx: 'Documentar el nivel de conciencia ANTES de cualquier sedación o intervención es indispensable — es el dato basal contra el que se compararán todas las reevaluaciones posteriores.',
      algoritmo: ['Estado mental y nivel de conciencia', 'Pares craneales', 'Sistema motor: fuerza, tono, reflejos', 'Sistema sensitivo', 'Coordinación', 'Marcha', 'Signos meníngeos y reflejos patológicos (si hay sospecha clínica)']
    },
    {
      nombre: 'Estado mental: orientación, atención y lenguaje',
      color: '#3d5a73',
      definicion: 'Evaluación de las funciones corticales superiores: orientación en persona, tiempo y espacio; atención (repetición de dígitos, deletrear una palabra al revés); lenguaje (fluencia, comprensión, repetición, denominación).',
      clinica: 'Normal: orientado en las 3 esferas, atento, lenguaje fluente, comprende órdenes y repite frases sin dificultad. Patológico: desorientación (típicamente se pierde primero el tiempo, luego el espacio, y por último la persona), inatención, o cualquier patrón de afasia.',
      fisiopatologia: 'Las afasias se localizan por el patrón de 3 funciones —fluencia, comprensión, repetición— más que por el vocabulario perdido: afasia de Broca (no fluente, esforzada, comprensión relativamente conservada, repetición alterada; lesión frontal inferior, área de Broca) vs. afasia de Wernicke (fluente pero con parafasias y contenido vacío, comprensión alterada, repetición alterada; lesión temporal posterior, área de Wernicke) vs. afasia de conducción (fluente, comprensión conservada, pero repetición desproporcionadamente alterada; lesión del fascículo arcuato, que conecta ambas áreas).',
      criterios_dx: 'La repetición es la función que mejor distingue estos tres patrones: alterada en Broca y Wernicke (ambas afectan las áreas del circuito perisilviano), pero DESPROPORCIONADAMENTE alterada respecto a la fluencia y comprensión en la afasia de conducción.',
      dx_diferencial: 'Afasia (trastorno del lenguaje en sí) vs. disartria (trastorno de la articulación motora del habla, con lenguaje interno y comprensión intactos) — son entidades distintas que se confunden con frecuencia.'
    },
    {
      nombre: 'Pares craneales I-IV y VI: olfatorio, óptico y oculomotores',
      color: '#3d5a73',
      definicion: 'I (olfatorio): olfato con cada narina por separado. II (óptico): agudeza visual, campos visuales por confrontación, fondo de ojo, reflejo fotomotor y consensual. III, IV, VI (oculomotor, troclear, abducens): movimientos oculares en las 6 posiciones cardinales, tamaño y simetría pupilar, ptosis palpebral.',
      clinica: 'Normal: pupilas isocóricas, redondas, reactivas a la luz de forma directa y consensual; movimientos oculares completos y conjugados, sin nistagmo ni diplopía; sin ptosis.',
      fisiopatologia: 'Pupila de Argyll-Robertson: reacciona a la acomodación pero NO a la luz (descrita clásicamente como "prostitute pupil" en inglés — se acomoda pero no reacciona), clásica de neurosífilis, por lesión pretectal que respeta la vía de la acomodación. Pupila tónica de Adie: dilatada, reacción lenta y sostenida a la luz, con hiporreflexia osteotendinosa asociada. Parálisis del III par con pupila afectada (midriática, arreactiva) y ptosis, con el ojo desviado "abajo y afuera": sugiere causa COMPRESIVA (ej. aneurisma de la arteria comunicante posterior) — urgencia neuroquirúrgica. Parálisis del III par con pupila RESPETADA (reactiva): sugiere causa ISQUÉMICA/microvascular (ej. diabetes), porque las fibras pupilomotoras parasimpáticas viajan en la periferia del nervio y se afectan primero por compresión externa, mientras que la isquemia del vasa nervorum daña preferentemente el centro del nervio. Es como un cable eléctrico grueso con varios hilos internos: un pellizco externo (compresión) aplasta primero los hilos de la superficie, mientras que un problema de suministro (isquemia) afecta primero a los hilos del centro, que dependen de una irrigación más precaria.',
      criterios_dx: 'La afectación o no de la pupila en una parálisis del III par es el dato clínico más urgente de interpretar: pupila afectada obliga a descartar compresión aneurismática con neuroimagen urgente; pupila respetada orienta a causa microvascular, con seguimiento menos urgente.',
      dx_diferencial: 'Síndrome de Horner (ptosis + miosis + anhidrosis facial ipsilateral, por lesión de la vía oculosimpática de 3 neuronas) vs. parálisis del III par (ptosis + midriasis, no miosis) — la dirección del cambio pupilar (miosis vs. midriasis) distingue ambos síndromes con ptosis.'
    },
    {
      nombre: 'Par craneal V (trigémino) y VII (facial): parálisis facial central vs. periférica',
      color: '#8c3a34',
      definicion: 'V (trigémino): sensibilidad facial en sus 3 ramas (oftálmica, maxilar, mandibular) y fuerza de los músculos de la masticación; reflejo corneal. VII (facial): fuerza de los músculos de expresión facial (elevar cejas, cerrar los ojos con fuerza, sonreír, inflar mejillas) y gusto de los dos tercios anteriores de la lengua (ver Imagen 1).',
      fisiopatologia: `${figBlock('Imagen 1', 'Parálisis facial central vs. periférica', paralisisFacialSVG())}
El núcleo facial recibe inervación cortical BILATERAL para la porción que controla la musculatura de la frente, pero solo inervación cortical CONTRALATERAL para la porción que controla la musculatura inferior de la cara. Por eso una lesión CENTRAL (vía corticonuclear, por encima del núcleo del facial) respeta la frente —el paciente sí puede arrugarla y cerrar el ojo de ese lado— y solo cae la mitad inferior de la cara contralateral a la lesión. Una lesión PERIFÉRICA (del núcleo o del nervio facial mismo, ej. parálisis de Bell) compromete TODA la hemicara ipsilateral, incluida la frente, porque interrumpe la vía final común para ambas porciones del núcleo. Es como una lámpara del techo conectada a dos interruptores distintos (uno de cada lado de la casa) para la mitad superior, pero con un solo interruptor para la mitad inferior: dañar uno de los dos interruptores de arriba no la apaga (el otro la sigue alimentando), pero dañar el único interruptor de abajo, o el cable principal que llega a la lámpara completa, sí la apaga entera.`,
      criterios_dx: 'Preservación de la capacidad de arrugar la frente y cerrar el ojo con fuerza en el lado "paralizado" = lesión central (buscar un evento cerebrovascular). Compromiso de toda la hemicara incluida la frente = lesión periférica (Bell, herpes zóster ótico/síndrome de Ramsay Hunt, otitis, tumor del ángulo pontocerebeloso).',
      dx_diferencial: 'Parálisis facial periférica bilateral: considerar síndrome de Guillain-Barré, sarcoidosis, enfermedad de Lyme.'
    },
    {
      nombre: 'Pares craneales VIII-XII: vestibulococlear, bulbares y espinal',
      color: '#3d5a73',
      definicion: 'VIII (vestibulococlear): audición (pruebas de Rinne y Weber con diapasón), equilibrio. IX, X (glosofaríngeo, vago): reflejo nauseoso, elevación simétrica del paladar, voz y deglución. XI (espinal accesorio): fuerza del esternocleidomastoideo y trapecio. XII (hipogloso): motilidad de la lengua.',
      clinica: 'Prueba de Weber (diapasón en la línea media del cráneo): normalmente se percibe igual en ambos oídos. Prueba de Rinne (diapasón en la apófisis mastoides, luego frente al conducto auditivo): normalmente la conducción aérea dura más que la ósea (Rinne positivo).',
      fisiopatologia: 'Hipoacusia conductiva (oído externo/medio): Weber lateraliza AL oído afectado (el hueso transmite mejor sin la competencia del ruido ambiental que ya no llega por esa vía aérea bloqueada), Rinne negativo en ese oído (conducción ósea &gt; aérea). Hipoacusia neurosensorial (coclear/nervio VIII): Weber lateraliza AL oído SANO, Rinne sigue siendo positivo en ambos oídos (aunque con menor percepción global en el afectado). Lesión del XII par (hipogloso) periférica: al protruir la lengua, se desvía HACIA el lado de la lesión (el geniogloso sano del lado contrario empuja la lengua hacia el lado débil).',
      criterios_dx: 'La combinación Weber + Rinne permite clasificar una hipoacusia como conductiva o neurosensorial sin necesidad de audiometría inmediata.',
      algoritmo: ['Weber: diapasón vibrando en la línea media del cráneo — preguntar en qué oído se escucha más fuerte', 'Rinne: diapasón en la mastoides hasta que deje de percibirse, luego frente al conducto auditivo — preguntar si se sigue escuchando (Rinne positivo = conducción aérea > ósea, normal)']
    },
    {
      nombre: 'Fuerza muscular',
      color: '#3d5a73',
      definicion: 'Evaluación de la fuerza en los principales grupos musculares de las 4 extremidades, contra resistencia, graduada con la escala del Medical Research Council (MRC) de 0 a 5.',
      clinica: 'Escala MRC: 0 = sin contracción visible. 1 = contracción visible sin movimiento. 2 = movimiento activo sin vencer la gravedad. 3 = movimiento activo que vence la gravedad. 4 = movimiento activo contra resistencia, pero vencible. 5 = fuerza normal.',
      fisiopatologia: 'El patrón de distribución de la debilidad, más que el grado aislado, localiza la lesión: patrón piramidal (lesión de la vía corticoespinal/neurona motora superior) predomina en los músculos extensores de los miembros superiores y en los flexores de los miembros inferiores. Patrón periférico (neurona motora inferior) sigue una distribución radicular (un dermatoma/miotoma) o troncular (el territorio de un nervio periférico específico), no el patrón piramidal.',
      criterios_dx: 'Una debilidad de distribución piramidal en un hemicuerpo completo (cara, brazo, pierna del mismo lado) localiza la lesión por encima de la decusación piramidal bulbar, típicamente en la cápsula interna o la corteza motora contralateral.'
    },
    {
      nombre: 'Tono muscular',
      color: '#3d5a73',
      definicion: 'Resistencia involuntaria al movimiento pasivo de una articulación, evaluada con el paciente relajado.',
      fisiopatologia: 'Espasticidad: aumento del tono DEPENDIENTE de la velocidad del movimiento pasivo (mayor resistencia cuanto más rápido se mueve la articulación), con el característico "signo de la navaja" (resistencia inicial que cede bruscamente) — refleja lesión de la vía corticoespinal (neurona motora superior). Rigidez: aumento del tono INDEPENDIENTE de la velocidad, constante durante todo el arco de movimiento, en "rueda dentada" (con temblor superpuesto, típico de Parkinson) o "en tubo de plomo" (sin temblor) — refleja disfunción de los ganglios basales (sistema extrapiramidal). La diferencia se siente igual que la que hay entre abrir una navaja de resorte (cede de golpe tras un instante de resistencia, sin importar qué tan rápido se empuje: espasticidad) y girar una manija con trinquete o "rueda dentada" (una serie de pequeños clics parejos y constantes durante todo el recorrido, sin importar la velocidad: rigidez). Hipotonía/flacidez: tono disminuido — lesión de neurona motora inferior (nervio periférico, raíz, asta anterior) o lesión cerebelosa/de shock medular agudo.',
      criterios_dx: 'Distinguir espasticidad (dependiente de velocidad, signo de la navaja) de rigidez (independiente de velocidad, en rueda dentada o en tubo de plomo) diferencia una lesión piramidal de una extrapiramidal antes de cualquier estudio de imagen.',
      dx_diferencial: 'Hipotonía aguda con arreflexia en las 4 extremidades: considerar shock medular (fase aguda de una lesión medular, antes de que aparezca la espasticidad esperada) o síndrome de Guillain-Barré.'
    },
    {
      nombre: 'Reflejos osteotendinosos',
      color: '#3d5a73',
      definicion: 'Respuesta motora refleja a la percusión brusca de un tendón con el martillo de reflejos (bicipital, tricipital, estilorradial, patelar, aquíleo), graduada de 0 a 4+.',
      clinica: 'Escala: 0 = ausente. 1+ = hipoactivo. 2+ = normal. 3+ = hiperactivo, sin clono. 4+ = hiperactivo con clono (contracciones rítmicas repetidas al estirar bruscamente el tendón y mantener la presión).',
      fisiopatologia: 'Reflejos hiperactivos y simétricos con clono sostenido: lesión de neurona motora superior (interrupción de la inhibición corticoespinal descendente sobre el arco reflejo segmentario). Reflejos disminuidos o ausentes: lesión de neurona motora inferior en cualquier punto del arco reflejo (raíz, plexo, nervio periférico) o, transitoriamente, en la fase aguda de una lesión de neurona motora superior (shock medular/diasquisis).',
      criterios_dx: 'Clono sostenido (≥ varias sacudidas rítmicas que no se agotan) es siempre patológico y confirma una lesión de neurona motora superior; unas pocas sacudidas que se agotan rápido pueden verse en personas ansiosas sanas.',
      algoritmo: ['Paciente relajado, tendón en tensión moderada', 'Percusión breve y directa sobre el tendón', 'Comparar siempre con el lado contrario', 'Si está abolido, reforzar con la maniobra de Jendrassik (traccionar las manos entrelazadas) mientras se percute']
    },
    {
      nombre: 'Sensibilidad: dermatomas y vías sensitivas',
      color: '#3d5a73',
      definicion: 'Evaluación de la sensibilidad superficial (táctil, dolorosa, térmica) y profunda (vibratoria con diapasón, posicional/propioceptiva) por dermatomas (ver Imagen 2).',
      fisiopatologia: `${figBlock('Imagen 2', 'Dermatomas de referencia clínica', dermatomasSVG())}
Dos vías anatómicamente distintas conducen la sensibilidad, lo que explica los patrones de pérdida disociada: la vía espinotalámica (dolor, temperatura) decusa de inmediato, a nivel medular, 1-2 segmentos por encima de su entrada; los cordones posteriores (vibración, posición/propiocepción) ascienden ipsilaterales sin decusar hasta el bulbo raquídeo. Síndrome de Brown-Séquard (hemisección medular): pérdida motora y de sensibilidad vibratoria/posicional IPSILATERAL a la lesión (los cordones posteriores aún no habían decusado), con pérdida de dolor y temperatura CONTRALATERAL (la vía espinotalámica ya había decusado antes de ser lesionada). Siringomielia: pérdida SUSPENDIDA y bilateral de dolor y temperatura en un nivel específico (afecta las fibras espinotalámicas que decusan justo en la comisura anterior, donde se forma la cavidad siringomiélica), con preservación de la sensibilidad vibratoria/posicional y del tacto fino (cordones posteriores, anatómicamente alejados de la comisura anterior).`,
      criterios_dx: 'Un patrón de pérdida sensitiva disociada (dolor/temperatura afectados, vibración/posición conservados, o viceversa) localiza la lesión a nivel medular con alta precisión, sin necesidad de neuroimagen para sospechar el diagnóstico.',
      dx_diferencial: 'Pérdida sensitiva en "guante y calceta" (distal, simétrica, en las 4 extremidades): polineuropatía periférica, no lesión medular.'
    },
    {
      nombre: 'Coordinación: pruebas cerebelosas y Romberg',
      color: '#3d5a73',
      definicion: 'Dedo-nariz y talón-rodilla (coordinación apendicular), diadococinesia (movimientos alternantes rápidos), Romberg (equilibrio con ojos cerrados, pies juntos).',
      clinica: 'Normal: movimientos dedo-nariz y talón-rodilla precisos y suaves, diadococinesia rítmica, Romberg negativo (se mantiene estable con los ojos cerrados).',
      fisiopatologia: 'Ataxia cerebelosa: dismetría (el dedo sobrepasa o no alcanza el blanco), disdiadococinesia, temblor de intención; el Romberg es negativo o solo levemente inestable, PORQUE la inestabilidad ya está presente incluso con los ojos abiertos (el problema no es la propiocepción, sino la coordinación cerebelosa en sí). Ataxia sensitiva (por pérdida de propiocepción, ej. degeneración combinada subaguda, tabes dorsal): Romberg POSITIVO (la inestabilidad aparece o empeora marcadamente al cerrar los ojos), porque el paciente compensaba la falta de propiocepción con la visión, y al eliminarla se pierde también esa compensación.',
      criterios_dx: 'El Romberg no evalúa "todo el cerebelo": es específicamente una prueba de propiocepción/columna posterior — un Romberg negativo en un paciente con ataxia franca orienta a causa cerebelosa, no sensitiva.',
      dx_diferencial: 'Ataxia cerebelosa (Romberg negativo, dismetría, disartria escandida asociada) vs. ataxia sensitiva (Romberg positivo, arreflexia asociada si es polineuropática) vs. ataxia vestibular (Romberg positivo, con desviación lateral consistente y nistagmo asociado).'
    },
    {
      nombre: 'Marcha y equilibrio',
      color: '#3d5a73',
      definicion: 'Observación de la marcha espontánea, en tándem (talón-punta) y, si es posible, de puntillas y talones, integrando fuerza, tono, coordinación y sensibilidad propioceptiva en una sola tarea (ver Tabla 1).',
      criterios_dx: `El patrón específico de la marcha patológica suele ser suficiente, sin más maniobras, para localizar el nivel de la lesión (piramidal, extrapiramidal, cerebelosa, sensitiva/cordones posteriores, de nervio periférico, o muscular).${figBlock('Tabla 1', 'Tipos de marcha patológica', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Marcha</th>
        <th style="text-align:left;padding:5px 6px;">Descripción</th>
        <th style="text-align:left;padding:5px 6px;">Causa</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Hemiparética ("en segador")</strong></td><td style="padding:5px 6px;">Pierna rígida en extensión, circunducción hacia afuera; brazo flexionado, pegado al cuerpo</td><td style="padding:5px 6px;">Lesión piramidal unilateral (ECV)</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Parkinsoniana</strong></td><td style="padding:5px 6px;">Pasos cortos, festinante, postura flexionada, braceo disminuido</td><td style="padding:5px 6px;">Enfermedad de Parkinson, parkinsonismo</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Atáxica cerebelosa</strong></td><td style="padding:5px 6px;">Base amplia, inestable, irregular; Romberg negativo</td><td style="padding:5px 6px;">Lesión cerebelosa</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Atáxica sensitiva (tabética)</strong></td><td style="padding:5px 6px;">Golpea el talón con fuerza, mira al piso; empeora al cerrar los ojos (Romberg positivo)</td><td style="padding:5px 6px;">Pérdida propioceptiva (cordones posteriores)</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Steppage</strong></td><td style="padding:5px 6px;">Pie caído, se eleva exageradamente la rodilla para no arrastrar el pie</td><td style="padding:5px 6px;">Debilidad de dorsiflexores (nervio peroneo, polineuropatía)</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Miopática (anadeante)</strong></td><td style="padding:5px 6px;">"De pato", basculación pélvica lateral por debilidad de glúteos medios</td><td style="padding:5px 6px;">Miopatías proximales</td></tr>
      </tbody>
    </table>
    </div>`)}`
    },
    {
      nombre: 'Signos meníngeos',
      color: '#8c3a34',
      definicion: 'Maniobras que buscan reproducir dolor por irritación de las meninges inflamadas al estirar las raíces nerviosas o las estructuras meníngeas circundantes (ver Imagen 3).',
      clinica: 'Rigidez de nuca: resistencia involuntaria a la flexión pasiva del cuello. Signo de Kernig: con la cadera flexionada a 90°, se intenta extender pasivamente la rodilla — positivo si genera dolor o resistencia. Signo de Brudzinski: la flexión pasiva del cuello provoca flexión refleja e involuntaria de caderas y rodillas.',
      fisiopatologia: `${figBlock('Imagen 3', 'Maniobras de Kernig y Brudzinski', signosMeningeosSVG())}
Ambas maniobras estiran las raíces lumbosacras (Kernig, indirectamente vía el nervio ciático) o generan un mecanismo reflejo protector (Brudzinski) cuando las meninges inflamadas irritan las raíces nerviosas al ser traccionadas por el movimiento.`,
      criterios_dx: 'La sensibilidad de Kernig y Brudzinski para meningitis es baja (estudios de validación muestran sensibilidad de apenas 5-10% en series de adultos con meningitis confirmada por cultivo), por lo que su AUSENCIA no descarta meningitis — la decisión de realizar punción lumbar debe basarse en el cuadro clínico global, no en la negatividad aislada de estos signos.',
      dx_diferencial: 'Rigidez de nuca por patología cervical mecánica/artrósica (limita TODOS los movimientos del cuello, no solo la flexión) vs. rigidez de nuca meníngea (limita predominantemente la flexión, con relativa preservación de la rotación lateral).'
    },
    {
      nombre: 'Reflejo de Babinski y otros signos de liberación piramidal',
      color: '#8c3a34',
      definicion: 'Signo de Babinski: se estimula el borde lateral de la planta del pie, de talón a la base de los dedos; respuesta patológica = extensión (dorsiflexión) del hallux con apertura en abanico de los demás dedos.',
      clinica: 'Normal en el adulto: flexión plantar de todos los dedos (respuesta "flexora" o "Babinski negativo"). Patológico: extensión del hallux con abanico de los otros dedos ("Babinski positivo"), fisiológico solo hasta los 2 años de edad (inmadurez de la mielinización corticoespinal).',
      fisiopatologia: `El Babinski positivo es un signo de liberación piramidal: la lesión de la vía corticoespinal desinhibe un reflejo de retirada primitivo (flexor plantar de origen espinal) que normalmente está suprimido por la vía corticoespinal madura. El signo de Hoffmann (flexión brusca de la falange distal del dedo medio, positiva si genera flexión-aducción refleja del pulgar) es su equivalente funcional en el miembro superior. La Tabla 2 resume el patrón completo de hallazgos que distingue una lesión de neurona motora superior de una inferior.${figBlock('Tabla 2', 'Neurona motora superior vs. inferior: patrón de hallazgos', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Característica</th>
        <th style="text-align:left;padding:5px 6px;">Neurona motora superior</th>
        <th style="text-align:left;padding:5px 6px;">Neurona motora inferior</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Tono</strong></td><td style="padding:5px 6px;">Aumentado (espasticidad, "en navaja")</td><td style="padding:5px 6px;">Disminuido (flacidez)</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Reflejos osteotendinosos</strong></td><td style="padding:5px 6px;">Hiperactivos, clono</td><td style="padding:5px 6px;">Disminuidos o ausentes</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Babinski</strong></td><td style="padding:5px 6px;">Positivo (extensor)</td><td style="padding:5px 6px;">Negativo (flexor)</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Atrofia</strong></td><td style="padding:5px 6px;">Mínima, tardía (por desuso)</td><td style="padding:5px 6px;">Marcada y temprana</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Fasciculaciones</strong></td><td style="padding:5px 6px;">Ausentes</td><td style="padding:5px 6px;">Frecuentes</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Distribución</strong></td><td style="padding:5px 6px;">Patrón piramidal (regional/hemicorporal)</td><td style="padding:5px 6px;">Radicular o troncular (miotoma/nervio específico)</td></tr>
      </tbody>
    </table>
    </div>`)}`,
      criterios_dx: 'Babinski positivo, en un adulto, siempre indica lesión de neurona motora superior en algún punto de la vía corticoespinal (desde la corteza hasta la médula) — nunca es un hallazgo normal fuera de la primera infancia.',
      dx_diferencial: 'Retirada voluntaria/de defensa por cosquillas (movimiento rápido, inconsistente, con retirada de toda la pierna) vs. Babinski verdadero (extensión aislada y reproducible del hallux, con latencia característica).'
    }
  ]
};

export const figuras = {
  'glasgow-detalle-tabla': {
    titulo: 'Escala de Coma de Glasgow: desglose por componente',
    html: `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Apertura ocular (O)</th>
        <th style="text-align:left;padding:5px 6px;">Respuesta verbal (V)</th>
        <th style="text-align:left;padding:5px 6px;">Respuesta motora (M)</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;">4 — Espontánea</td><td style="padding:5px 6px;">5 — Orientada</td><td style="padding:5px 6px;">6 — Obedece órdenes</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;">3 — A la voz</td><td style="padding:5px 6px;">4 — Confusa</td><td style="padding:5px 6px;">5 — Localiza el dolor</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;">2 — Al dolor</td><td style="padding:5px 6px;">3 — Palabras inapropiadas</td><td style="padding:5px 6px;">4 — Retira al dolor</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;">1 — Ausente</td><td style="padding:5px 6px;">2 — Sonidos incomprensibles</td><td style="padding:5px 6px;">3 — Flexión anormal (decorticación)</td></tr>
        <tr><td style="padding:5px 6px;"></td><td style="padding:5px 6px;">1 — Ausente</td><td style="padding:5px 6px;">2 — Extensión anormal (descerebración)</td></tr>
        <tr><td style="padding:5px 6px;"></td><td style="padding:5px 6px;"></td><td style="padding:5px 6px;">1 — Ausente</td></tr>
      </tbody>
    </table>
    </div>`,
    fuente: 'Teasdale, Jennett. Lancet 1974'
  }
};

export const compCites = {
  'Secuencia y estructura de la exploración neurológica': { definicion: [1, 2], criterios_dx: [6] },
  'Estado mental: orientación, atención y lenguaje': { definicion: [1, 2], fisiopatologia: [8, 9] },
  'Pares craneales I-IV y VI: olfatorio, óptico y oculomotores': { definicion: [1, 3], fisiopatologia: [3, 8, 9] },
  'Par craneal V (trigémino) y VII (facial): parálisis facial central vs. periférica': { definicion: [1, 3], fisiopatologia: [8, 9] },
  'Pares craneales VIII-XII: vestibulococlear, bulbares y espinal': { definicion: [1, 3], fisiopatologia: [3, 4] },
  'Fuerza muscular': { definicion: [1, 4], fisiopatologia: [8, 9] },
  'Tono muscular': { definicion: [1, 4], fisiopatologia: [8, 9] },
  'Reflejos osteotendinosos': { definicion: [1, 4], fisiopatologia: [8, 9] },
  'Sensibilidad: dermatomas y vías sensitivas': { definicion: [1, 9], fisiopatologia: [8, 9] },
  'Coordinación: pruebas cerebelosas y Romberg': { definicion: [1, 4], fisiopatologia: [4, 8] },
  'Marcha y equilibrio': { definicion: [1, 9] },
  'Signos meníngeos': { definicion: [1, 2], criterios_dx: [7] },
  'Reflejo de Babinski y otros signos de liberación piramidal': { definicion: [1, 4], fisiopatologia: [8, 9] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = { 'Escala de Coma de Glasgow (ECG)': [6] };
export const escalaCalc = {};
export const diagCites = { clinica: [1, 3] };
export const clasificacionCite = [6];
export const seguimientoCite = [];
export const figurasClasificacion = 'glasgow-detalle-tabla';
export const compGroups = [
  { title: 'Metodología general', items: ['Secuencia y estructura de la exploración neurológica'] },
  { title: 'Estado mental y nivel de conciencia', items: ['Estado mental: orientación, atención y lenguaje'] },
  { title: 'Pares craneales', items: ['Pares craneales I-IV y VI: olfatorio, óptico y oculomotores', 'Par craneal V (trigémino) y VII (facial): parálisis facial central vs. periférica', 'Pares craneales VIII-XII: vestibulococlear, bulbares y espinal'] },
  { title: 'Sistema motor', items: ['Fuerza muscular', 'Tono muscular', 'Reflejos osteotendinosos'] },
  { title: 'Sensibilidad y coordinación', items: ['Sensibilidad: dermatomas y vías sensitivas', 'Coordinación: pruebas cerebelosas y Romberg'] },
  { title: 'Marcha', items: ['Marcha y equilibrio'] },
  { title: 'Signos meníngeos y reflejos patológicos', items: ['Signos meníngeos', 'Reflejo de Babinski y otros signos de liberación piramidal'] }
];
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Técnica general' },
  { id: 'clasificacion', label: 'Escalas de exploración' },
  { id: 'complicaciones', label: 'Maniobras y hallazgos' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
