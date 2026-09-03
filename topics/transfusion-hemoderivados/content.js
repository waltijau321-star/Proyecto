// topics/transfusion-hemoderivados/content.js: Transfusión de Hemoderivados.
// Tercero de 4 temas independientes que reemplazan el cluster "Hemostasia y trombosis" del
// temario (los otros 3: Trastornos de la Coagulación y Trombofilias, Alteraciones Plaquetarias
// Cuantitativas, ya construidos; Coagulación Intravascular Diseminada, pendiente).
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás debe ser un `export const` de nivel superior, HERMANO de `content`.
//
// IMPORTANTE (ver memoria del proyecto sobre study.js): construir cada pregunta con la respuesta
// correcta en options[0]/correct:0 primero, verificar el conteo, y solo entonces redistribuir
// mecánicamente con un script.
//
// IMPORTANTE (ver memoria del proyecto sobre tarjetas/figuras): el número de tarjetas y de
// figuras de este tema NO sigue ningún default fijo. Aquí, por decisión explícita con el usuario:
// 4 fichas de "hemoderivados" (monografía por producto) + 7 fichas de "reacciones transfusionales"
// (complicaciones reales), porque el contenido de reacciones transfusionales tiene genuinamente
// más de 4 entidades de alto rendimiento; combinar todas las tardías en 1 sola ficha evita diluir
// con fichas de bajo rendimiento individual.

export const meta = {
  id: 'transfusion-hemoderivados',
  titulo: 'Transfusión de Hemoderivados',
  subtitulo: 'Módulo 29 · Medicina Interna',
  accent: '#1f5c73',
  accentDim: '#5c93a3'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const traliTacoHtml = `
<div style="display:flex;flex-direction:column;gap:10px;max-width:600px;margin:0 auto;font-size:10.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:110px 1fr 1fr;gap:6px;align-items:stretch;">
    <div></div>
    <div style="text-align:center;font-weight:700;color:#8c3a34;">TRALI</div>
    <div style="text-align:center;font-weight:700;color:#3d5a73;">TACO</div>

    <div style="font-weight:600;color:var(--ink-dim);display:flex;align-items:center;">Mecanismo</div>
    <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:8px;padding:6px 8px;">Inmunológico: anticuerpos anti-HLA/anti-neutrófilo del donante activan neutrófilos del receptor en la microvasculatura pulmonar</div>
    <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:8px;padding:6px 8px;">Hidrostático: volumen infundido excede la capacidad cardiaca de manejarlo (sobrecarga de precarga)</div>

    <div style="font-weight:600;color:var(--ink-dim);display:flex;align-items:center;">Inicio</div>
    <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:8px;padding:6px 8px;">Dentro de las 6 horas de la transfusión</div>
    <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:8px;padding:6px 8px;">Durante o hasta 6-12 horas después</div>

    <div style="font-weight:600;color:var(--ink-dim);display:flex;align-items:center;">Presión arterial</div>
    <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:8px;padding:6px 8px;">Hipotensión frecuente</div>
    <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:8px;padding:6px 8px;">Hipertensión frecuente</div>

    <div style="font-weight:600;color:var(--ink-dim);display:flex;align-items:center;">BNP</div>
    <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:8px;padding:6px 8px;">No elevado (o elevación mínima)</div>
    <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:8px;padding:6px 8px;">Elevado sobre el basal</div>

    <div style="font-weight:600;color:var(--ink-dim);display:flex;align-items:center;">Respuesta a diuréticos</div>
    <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:8px;padding:6px 8px;">Ninguna o mínima</div>
    <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:8px;padding:6px 8px;">Mejoría clínica clara</div>
  </div>
  <div style="text-align:center;color:var(--ink-dim);">Ambas se presentan como disnea + hipoxemia + infiltrados bilaterales en la Rx de tórax durante o después de transfundir: la clave para distinguirlas es la presión arterial, el BNP y la respuesta a diuréticos.</div>
</div>`;

const aboCompatHtml = `
<div style="display:flex;flex-direction:column;gap:8px;max-width:480px;margin:0 auto;font-size:11px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:90px 1fr;gap:6px;align-items:center;">
    <div style="font-weight:700;text-align:center;">Receptor</div>
    <div style="font-weight:700;">Puede recibir eritrocitos de</div>

    <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:8px;padding:6px;text-align:center;font-weight:700;">O</div>
    <div style="background:#3d3d3d18;border:1px solid var(--line);border-radius:8px;padding:6px 10px;">Solo O (receptor universal de plasma, donante universal de eritrocitos)</div>

    <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:8px;padding:6px;text-align:center;font-weight:700;">A</div>
    <div style="background:#3d3d3d18;border:1px solid var(--line);border-radius:8px;padding:6px 10px;">A u O</div>

    <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:8px;padding:6px;text-align:center;font-weight:700;">B</div>
    <div style="background:#3d3d3d18;border:1px solid var(--line);border-radius:8px;padding:6px 10px;">B u O</div>

    <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:8px;padding:6px;text-align:center;font-weight:700;">AB</div>
    <div style="background:#3d3d3d18;border:1px solid var(--line);border-radius:8px;padding:6px 10px;">A, B, AB u O (receptor universal de eritrocitos)</div>
  </div>
  <div style="color:var(--ink-dim);text-align:center;">Para plasma la lógica se invierte: AB es el donante universal de plasma (no tiene anti-A ni anti-B) y O solo puede recibir plasma de O. El factor Rh se suma de forma independiente: Rh-negativo solo recibe Rh-negativo salvo urgencia vital sin tiempo para tipificar.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La transfusión de hemoderivados es la reposición terapéutica de un componente específico de la sangre (eritrocitos, plasma, plaquetas, o factores concentrados como el crioprecipitado) en lugar de sangre total, permitiendo tratar la deficiencia real del paciente sin exponerlo a los componentes que no necesita. Cada hemoderivado tiene una indicación, un umbral, y una dosis específicos; la decisión de transfundir no es solo "sí o no" sino "cuál, cuánto, y a partir de qué umbral".</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Principio general.</strong> La medicina transfusional moderna favorece una estrategia restrictiva sobre una liberal para el concentrado eritrocitario en la mayoría de los pacientes estables (los ensayos TRICC y TRISS mostraron desenlaces al menos equivalentes, y en algunos subgrupos mejores, con umbrales más bajos), reservando umbrales más altos para escenarios específicos como la cardiopatía isquémica activa o el sangrado activo con inestabilidad hemodinámica.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Los 4 hemoderivados de uso rutinario.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Concentrado eritrocitario (paquete globular)</strong>: repone la capacidad de transporte de oxígeno; indicado según umbral de hemoglobina y contexto clínico.</li>
    <li><strong>Plasma fresco congelado</strong>: repone múltiples factores de coagulación simultáneamente; indicado en déficit combinado con sangrado activo o procedimiento invasivo inminente.</li>
    <li><strong>Concentrado plaquetario</strong>: repone plaquetas funcionales; indicado según umbral de recuento y contexto (profiláctico vs. sangrado activo).</li>
    <li><strong>Crioprecipitado</strong>: fracción rica en fibrinógeno, factor VIII, factor de von Willebrand, factor XIII, y fibronectina; indicado específicamente en hipofibrinogenemia.</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Compatibilidad.</strong> Toda transfusión de eritrocitos requiere compatibilidad de grupo ABO y factor Rh (idealmente confirmada por pruebas cruzadas); el plasma y las plaquetas también consideran la compatibilidad ABO aunque con márgenes más flexibles que los eritrocitos.${figBlock('Imagen 1', 'Compatibilidad ABO donante-receptor', aboCompatHtml)} Analogía: transfundir sangre incompatible es como conectar 2 sistemas de tuberías con líquidos que reaccionan entre sí al mezclarse; el sistema ABO define cuáles combinaciones son seguras y cuáles desencadenan una reacción destructiva inmediata.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama de seguridad.</strong> Toda transfusión conlleva un riesgo, aunque bajo, de una reacción adversa, desde febril leve hasta hemolítica aguda potencialmente fatal; el reconocimiento temprano de una reacción transfusional y la distinción entre sus distintos tipos (desarrollados en Complicaciones) son esenciales dado que el manejo inicial difiere sustancialmente entre ellas.</p>`;

export const bibliografia = [
  'Carson JL, Stanworth SJ, Dennis JA, et al. Transfusion thresholds for guiding red blood cell transfusion. Cochrane Database Syst Rev. 2021;12(12):CD002042.',
  'Hébert PC, Wells G, Blajchman MA, et al. A multicenter, randomized, controlled clinical trial of transfusion requirements in critical care (TRICC). N Engl J Med. 1999;340(6):409-417.',
  'Holst LB, Haase N, Wetterslev J, et al. Lower versus higher hemoglobin threshold for transfusion in septic shock (TRISS). N Engl J Med. 2014;371(15):1381-1391.',
  'Delaney M, Wendel S, Bercovitz RS, et al. Transfusion reactions: prevention, diagnosis, and treatment. Lancet. 2016;388(10061):2825-2836.',
  'AABB. Standards for Blood Banks and Transfusion Services. 33rd ed. Bethesda, MD: AABB; 2022.',
  'Kleinman S, Grossman B, Kopko P. A national survey of transfusion-related acute lung injury risk reduction policies. Transfusion. 2010;50(6):1312-1321.',
  'Semple JW, Rebetz J, Kapur R. Transfusion-associated circulatory overload and transfusion-related acute lung injury. Blood. 2019;133(17):1840-1853.',
  'Kaufman RM, Djulbegovic B, Gernsheimer T, et al. Platelet transfusion: a clinical practice guideline from the AABB. Ann Intern Med. 2015;162(3):205-213.',
  'Roback JD, Caldwell S, Carson J, et al. Evidence-based practice guidelines for plasma transfusion. Transfusion. 2010;50(6):1227-1239.',
  'Nascimento B, Goodnough LT, Levy JH. Cryoprecipitate therapy. Br J Anaesth. 2014;113(6):922-934.',
  'Vamvakas EC, Blajchman MA. Transfusion-related mortality: the ongoing risks of allogeneic blood transfusion. Blood. 2009;113(15):3406-3417.',
  'Silliman CC, Fung YL, Ball JB, Khan SY. Transfusion-related acute lung injury (TRALI): current concepts and misconceptions. Blood Rev. 2009;23(6):245-255.',
  'Goel R, Tobian AAR, Shaz BH. Noninfectious transfusion-associated adverse events and their mitigation strategies. Blood. 2019;133(17):1831-1839.',
  'Panch SR, Montemayor-Garcia C, Klein HG. Hemolytic transfusion reactions. N Engl J Med. 2019;381(2):150-162.',
  'Stroncek DF, Rebulla P. Platelets. Lancet. 2007;370(9585):427-438.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Transfusión sin complicaciones',
      tituloB: 'Reacción transfusional en curso',
      compensada: 'El hemoderivado se administra según indicación y umbral establecidos, sin signos de reacción adversa: sin fiebre, sin disnea de nueva aparición, sin cambios en la presión arterial fuera del contexto clínico basal.',
      descompensada: 'Aparición durante o poco después de la transfusión de fiebre, escalofríos, disnea, dolor lumbar/torácico, hipotensión o hipertensión de nueva aparición, o cualquier signo de urticaria/anafilaxia: obliga a detener la transfusión de inmediato y evaluar el tipo de reacción (ver Complicaciones).'
    },
    laboratorio: [
      { prueba: 'Grupo ABO y factor Rh, prueba cruzada (crossmatch)', utilidad: 'Confirma la compatibilidad antes de cualquier transfusión de eritrocitos; reduce drásticamente el riesgo de reacción hemolítica aguda por incompatibilidad.' },
      { prueba: 'Detección de anticuerpos irregulares (escrutinio de anticuerpos)', utilidad: 'Identifica aloanticuerpos previos del receptor contra antígenos eritrocitarios distintos del sistema ABO, relevante en pacientes politransfundidos.' },
      { prueba: 'Prueba de antiglobulina directa (Coombs directo)', utilidad: 'Se solicita ante sospecha de reacción hemolítica (aguda o tardía) para confirmar la destrucción inmunomediada de los eritrocitos transfundidos.' },
      { prueba: 'Hemoglobina/hematocrito, recuento plaquetario, fibrinógeno, TP/TTPa', utilidad: 'Documentan el déficit específico antes de decidir cuál hemoderivado transfundir y confirman la respuesta esperada después.' }
    ],
    no_invasivos: [],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'Infiltrados bilaterales de nueva aparición durante o después de la transfusión orientan a TRALI o TACO (ver Complicaciones e Imagen 2 para el diferencial completo).' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema no es de gravedad sino de tipo de decisión: qué hemoderivado transfundir (según el déficit documentado) y a partir de qué umbral, frente a cómo reconocer y clasificar una reacción transfusional cuando ocurre.',
    escalas: [
      { nombre: 'Umbral transfusional de eritrocitos (estrategia restrictiva)', componentes: 'Hemoglobina + contexto clínico. Calculadora disponible más abajo.', formula: 'Hb &lt;7 g/dL (paciente estable); Hb &lt;8 g/dL (cardiopatía isquémica o cirugía ortopédica/cardiaca); Hb &lt;10 g/dL o guiado por síntomas (sangrado activo con inestabilidad hemodinámica)', interpretacion: 'La estrategia restrictiva (umbrales más bajos) es al menos equivalente, y evita la exposición innecesaria a hemoderivados, comparada con la estrategia liberal en la mayoría de los pacientes estables.' },
      { nombre: 'Umbral de transfusión plaquetaria', componentes: 'Recuento plaquetario + contexto', formula: '&lt;10,000/µL (profiláctico, paciente estable); &lt;20,000/µL (fiebre o factor de consumo adicional); &lt;50,000/µL (procedimiento invasivo o sangrado activo); &lt;100,000/µL (cirugía de sistema nervioso central u oftálmica)', interpretacion: 'El umbral se eleva progresivamente según el riesgo de sangrado del contexto específico, no según un único punto de corte universal.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Concentrado eritrocitario (paquete globular)',
      color: '#7a1f3d',
      definicion: 'Hemoderivado que repone la capacidad de transporte de oxígeno de la sangre; el hemoderivado transfundido con mayor frecuencia en la práctica clínica.',
      fisiopatologia: 'Cada unidad de concentrado eritrocitario aumenta la hemoglobina circulante aproximadamente 1 g/dL (o el hematocrito ~3%) en un adulto promedio sin sangrado activo continuo; la decisión de transfundir integra el nivel de hemoglobina con la tolerancia clínica del paciente a la anemia (reserva cardiopulmonar, síntomas), dado que un mismo nivel de hemoglobina puede ser bien tolerado en un paciente y sintomático en otro.',
      epidemiologia: 'Indicación más frecuente: anemia sintomática o por debajo del umbral establecido, en el contexto de cirugía, sangrado agudo, o enfermedad crónica con anemia significativa.',
      factores_riesgo: ['Anemia por debajo del umbral establecido según el contexto clínico', 'Sangrado activo con inestabilidad hemodinámica', 'Cardiopatía isquémica activa con anemia (umbral más alto que en el paciente estable sin esa comorbilidad)'],
      clinica: 'Mejoría de los síntomas de anemia (fatiga, disnea de esfuerzo, taquicardia compensatoria) tras la transfusión; el objetivo es la mejoría clínica, no simplemente alcanzar un número de hemoglobina.',
      laboratorio: 'Hemoglobina/hematocrito pre y postransfusión (habitualmente reevaluados tras cada unidad); grupo ABO/Rh y prueba cruzada obligatorios antes de cada transfusión.',
      complementarios: 'Irradiación del hemoderivado en el paciente inmunocomprometido (previene la enfermedad de injerto contra huésped asociada a transfusión, ver esa complicación); leucorreducción rutinaria en la mayoría de los centros (reduce reacciones febriles no hemolíticas y aloinmunización).',
      tx_medico: 'Transfusión según el umbral de hemoglobina apropiado al contexto clínico (calculadora más abajo): Hb &lt;7 g/dL en el paciente estable, &lt;8 g/dL en cardiopatía isquémica o cirugía ortopédica/cardiaca mayor, o guiado por síntomas y estabilidad hemodinámica en el sangrado activo.',
      tx_farmacologico: 'No aplica (es el hemoderivado en sí, no un fármaco); cada unidad se administra habitualmente en 1-4 horas (más lento en el paciente con riesgo de sobrecarga de volumen, ver TACO en Complicaciones).',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'Sangrado activo masivo con inestabilidad hemodinámica que requiere transfusión urgente y activación potencial de un protocolo de transfusión masiva.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluación clínica y de hemoglobina tras cada unidad transfundida; vigilancia activa de signos de una reacción transfusional durante y después de la infusión (ver Complicaciones).',
      algoritmo: ['Confirmar el umbral apropiado según el contexto clínico antes de transfundir', 'Grupo ABO/Rh y prueba cruzada obligatorios', 'Reevaluar hemoglobina y síntomas tras cada unidad, no transfundir por número solo', 'Vigilar activamente signos de reacción transfusional durante la infusión']
    },
    {
      nombre: 'Plasma fresco congelado',
      color: '#8a6a1f',
      definicion: 'Hemoderivado que contiene todos los factores de coagulación en concentración plasmática normal; indicado cuando existe un déficit combinado de múltiples factores con sangrado activo o un procedimiento invasivo inminente.',
      fisiopatologia: 'A diferencia del crioprecipitado (que concentra solo algunos factores específicos), el plasma fresco congelado repone la totalidad de los factores de coagulación de forma simultánea pero en concentración relativamente diluida, por lo que se requiere un volumen considerable para lograr una corrección clínicamente significativa del déficit.',
      epidemiologia: 'Indicación más frecuente: coagulopatía por enfermedad hepática avanzada con sangrado activo, deficiencia de múltiples factores en el contexto de transfusión masiva, o reversión urgente de un antagonista de la vitamina K cuando no está disponible el concentrado de complejo protrombínico.',
      factores_riesgo: ['TP/INR o TTPa prolongados con sangrado activo o procedimiento invasivo inminente', 'Coagulopatía dilucional en el contexto de transfusión masiva', 'Déficit de un factor específico sin concentrado disponible para ese factor'],
      clinica: 'Corrección del sangrado atribuible al déficit de factores de coagulación; no está indicado únicamente para corregir un TP/INR anormal en un paciente sin sangrado activo ni procedimiento invasivo planeado.',
      laboratorio: 'TP/INR y TTPa pre y postransfusión; fibrinógeno (si está muy reducido, el crioprecipitado es más eficiente, ver esa tarjeta).',
      complementarios: 'Compatibilidad ABO considerada (aunque con márgenes más flexibles que los eritrocitos, dado que lo relevante es evitar anticuerpos anti-A/anti-B del donante contra los eritrocitos del receptor).',
      tx_medico: 'Sangrado activo o procedimiento invasivo inminente con coagulopatía documentada por déficit de múltiples factores (TP/INR o TTPa prolongados); componente estándar de un protocolo de transfusión masiva.',
      tx_farmacologico: 'Dosis habitual: 10-15 mL/kg, reevaluando TP/TTPa tras la infusión; el efecto es transitorio dado que los factores transfundidos tienen una vida media limitada, por lo que puede requerirse redosificación mientras persista la causa del déficit.',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'Coagulopatía grave con sangrado activo que no responde a la corrección inicial, particularmente en el contexto de transfusión masiva.',
      criterios_tips: 'Considerado específicamente en la coagulopatía de la enfermedad hepática avanzada con sangrado activo (ver el tema de Trastornos de la Coagulación y Trombofilias).',
      seguimiento_hospitalario: 'Reevaluación de TP/TTPa y del sangrado clínico tras la infusión; vigilancia de sobrecarga de volumen dado el volumen relativamente grande requerido (ver TACO en Complicaciones).',
      algoritmo: ['No transfundir solo para corregir un número (TP/INR) sin sangrado activo ni procedimiento inminente', 'Dosis 10-15 mL/kg, reevaluar TP/TTPa después', 'Si el fibrinógeno está muy bajo, preferir crioprecipitado (más eficiente en volumen)', 'Vigilar sobrecarga de volumen por el volumen relativamente grande requerido']
    },
    {
      nombre: 'Concentrado plaquetario',
      color: '#3f6b52',
      definicion: 'Hemoderivado que repone plaquetas funcionales; indicado según el recuento plaquetario y el contexto clínico (profiláctico en el paciente estable vs. terapéutico ante sangrado activo o procedimiento invasivo).',
      fisiopatologia: 'Las plaquetas transfundidas participan en la hemostasia primaria (adhesión, activación, y agregación en el sitio de lesión vascular) de forma inmediata tras la infusión; a diferencia de los eritrocitos, tienen una vida útil de almacenamiento corta y se conservan a temperatura ambiente con agitación continua, lo que las hace más susceptibles a contaminación bacteriana que otros hemoderivados (ver esa complicación).',
      epidemiologia: 'Indicación más frecuente: trombocitopenia por quimioterapia/falla medular por debajo del umbral profiláctico, o trombocitopenia con sangrado activo o procedimiento invasivo planeado de cualquier causa.',
      factores_riesgo: ['Recuento plaquetario por debajo del umbral apropiado al contexto (ver Clasificación → Escalas)', 'Disfunción plaquetaria cualitativa con sangrado activo pese a recuento numérico adecuado (ej. tras antiagregantes, en uremia)', 'Procedimiento invasivo o quirúrgico planeado en un paciente trombocitopénico'],
      clinica: 'Reducción del sangrado activo atribuible a trombocitopenia o disfunción plaquetaria; en el uso profiláctico, prevención del sangrado espontáneo esperado por debajo del umbral crítico.',
      laboratorio: 'Recuento plaquetario pre y postransfusión (el incremento esperado por unidad de aféresis en un adulto es de aproximadamente 30,000-60,000/µL en ausencia de refractariedad).',
      complementarios: 'Refractariedad plaquetaria (incremento postransfusión menor al esperado en transfusiones repetidas) sugiere aloinmunización contra antígenos HLA o plaquetarios específicos, particularmente en el paciente politransfundido (ver Hiperesplenismo y Alteraciones Plaquetarias Cuantitativas para causas no inmunes de refractariedad).',
      tx_medico: 'Transfusión según el umbral apropiado al contexto (calculadora en Clasificación → Escalas): profiláctico por debajo de 10,000/µL en el paciente estable, umbrales progresivamente más altos según fiebre, procedimiento invasivo planeado, o sangrado activo.',
      tx_farmacologico: 'Una unidad de aféresis (equivalente a 4-6 unidades de donante único combinadas) es la dosis habitual en el adulto; reevaluar el recuento 1 hora después de la infusión para confirmar la respuesta esperada.',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'Sangrado activo grave por trombocitopenia que no responde a la transfusión inicial, particularmente si coexiste refractariedad plaquetaria documentada.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Recuento plaquetario postransfusión (habitualmente a la hora) para confirmar la respuesta; vigilancia de fiebre durante la infusión (mayor riesgo de contaminación bacteriana que otros hemoderivados, ver esa complicación).',
      algoritmo: ['Confirmar el umbral apropiado según el contexto clínico específico', 'Una unidad de aféresis como dosis habitual en el adulto', 'Reevaluar recuento a la hora; incremento menor al esperado → sospechar refractariedad', 'Vigilar fiebre durante la infusión por el mayor riesgo de contaminación bacteriana']
    },
    {
      nombre: 'Crioprecipitado',
      color: '#3d5a73',
      definicion: 'Fracción del plasma rica en fibrinógeno, factor VIII, factor de von Willebrand, factor XIII, y fibronectina; indicado específicamente cuando el fibrinógeno está críticamente bajo, de forma más eficiente en volumen que el plasma fresco congelado.',
      fisiopatologia: 'Se obtiene al descongelar lentamente el plasma fresco congelado y recolectar el precipitado insoluble en frío resultante, que concentra selectivamente estas proteínas en un volumen considerablemente menor que el plasma original; esto lo hace la opción más eficiente cuando el objetivo específico es corregir la hipofibrinogenemia, dado que reponer la misma cantidad de fibrinógeno con plasma fresco congelado requeriría un volumen mucho mayor.',
      epidemiologia: 'Indicación más frecuente: hipofibrinogenemia con sangrado activo en el contexto de transfusión masiva, coagulación intravascular diseminada (ver ese tema), o enfermedad hepática avanzada con fibrinógeno críticamente bajo.',
      factores_riesgo: ['Fibrinógeno &lt;100-150 mg/dL con sangrado activo o procedimiento invasivo inminente', 'Deficiencia de factor XIII documentada', 'Enfermedad de von Willebrand con sangrado grave cuando no está disponible un concentrado específico del factor de von Willebrand'],
      clinica: 'Corrección del sangrado atribuible a hipofibrinogenemia; el fibrinógeno es con frecuencia el primer factor en agotarse de forma clínicamente significativa en el sangrado masivo, por lo que su reposición temprana es prioritaria en ese contexto.',
      laboratorio: 'Fibrinógeno sérico pre y postransfusión (cada unidad de crioprecipitado aumenta el fibrinógeno aproximadamente 5-10 mg/dL en un adulto; se administran habitualmente en pools de 10 unidades).',
      complementarios: 'Componente estándar de los protocolos de transfusión masiva junto con concentrado eritrocitario y plasma fresco congelado en proporciones definidas institucionalmente.',
      tx_medico: 'Fibrinógeno &lt;100-150 mg/dL con sangrado activo o procedimiento invasivo inminente; deficiencia de factor XIII; enfermedad de von Willebrand grave sin concentrado específico disponible.',
      tx_farmacologico: 'Dosis habitual: pool de 10 unidades en el adulto, reevaluando el fibrinógeno tras la infusión; puede repetirse según la respuesta y la persistencia del sangrado o el consumo continuo.',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'Hipofibrinogenemia grave con sangrado activo que no responde a la reposición inicial, particularmente en el contexto de coagulación intravascular diseminada o transfusión masiva.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Fibrinógeno seriado durante el sangrado activo o la transfusión masiva; reevaluación de la respuesta clínica tras cada pool administrado.',
      algoritmo: ['Fibrinógeno &lt;100-150 mg/dL con sangrado activo → crioprecipitado, no plasma fresco congelado (más eficiente en volumen)', 'Dosis habitual: pool de 10 unidades', 'Reevaluar fibrinógeno tras la infusión; repetir según respuesta', 'Priorizar su reposición temprana en el sangrado masivo, dado que el fibrinógeno se agota primero']
    },
    {
      nombre: 'Reacción hemolítica aguda',
      color: '#8c3a34',
      definicion: 'Destrucción inmunomediada aguda de los eritrocitos transfundidos, con mayor frecuencia por incompatibilidad ABO (habitualmente por un error de identificación del paciente o de la unidad, no por una falla de laboratorio); la reacción transfusional potencialmente más grave y de instauración más rápida.',
      fisiopatologia: 'Los anticuerpos anti-A o anti-B preformados del receptor (naturalmente presentes desde la infancia, sin exposición previa necesaria) reconocen los antígenos ABO incompatibles en la superficie de los eritrocitos transfundidos y activan el complemento por la vía clásica, produciendo hemólisis intravascular masiva e inmediata con liberación de hemoglobina libre, activación de la cascada de coagulación (riesgo de coagulación intravascular diseminada secundaria), y liberación de citocinas inflamatorias que contribuyen al colapso hemodinámico.',
      epidemiologia: 'Infrecuente en la práctica moderna gracias a la verificación sistemática de identidad del paciente y la unidad antes de transfundir, pero sigue siendo prevenible en casi todos los casos reportados, dado que la causa habitual es un error humano de identificación, no una falla del sistema de tipificación en sí.',
      factores_riesgo: ['Error de identificación del paciente o de la unidad de sangre en cualquier paso del proceso', 'Omisión de la verificación de identidad al pie de la cama inmediatamente antes de iniciar la transfusión', 'Situación de urgencia con presión de tiempo que favorece un error de verificación'],
      clinica: 'Fiebre y escalofríos de inicio súbito, dolor lumbar o en el sitio de infusión, hipotensión, taquicardia, hemoglobinuria (orina oscura), y en casos graves colapso hemodinámico y coagulación intravascular diseminada; los síntomas aparecen característicamente dentro de los primeros minutos de iniciada la transfusión.',
      criterios_dx: 'Aparición de los síntomas descritos durante o inmediatamente después de iniciar la transfusión, confirmada por prueba de antiglobulina directa positiva, haptoglobina reducida, bilirrubina indirecta y deshidrogenasa láctica elevadas, y repetición del tipo ABO/Rh del paciente y de la unidad para identificar el error.',
      laboratorio: 'Prueba de antiglobulina directa (Coombs directo), haptoglobina, bilirrubina indirecta, deshidrogenasa láctica, hemoglobina libre en plasma/orina, repetición del grupo ABO/Rh del paciente y de la unidad transfundida.',
      complementarios: 'Notificación inmediata al banco de sangre para investigar el error de identificación y prevenir su recurrencia; devolución de la unidad y de una muestra postransfusional del paciente para el estudio.',
      dx_diferencial: 'Reacción febril no hemolítica (fiebre sin los demás signos de hemólisis aguda, ver esa tarjeta), reacción alérgica/anafiláctica (predominio de urticaria/broncoespasmo sin hemólisis, ver esa tarjeta), contaminación bacteriana (fiebre con frecuencia más alta y evolución hacia sepsis franca, ver esa tarjeta).',
      tx_medico: 'Detener la transfusión INMEDIATAMENTE ante la sospecha (antes de confirmar el diagnóstico), mantener el acceso venoso con solución salina, y dar soporte hemodinámico y renal según la gravedad.',
      tx_farmacologico: 'Reanimación con líquidos intravenosos para mantener la perfusión renal y prevenir la lesión renal aguda por la hemoglobina libre; vasopresores si hay compromiso hemodinámico persistente pese a líquidos; manejo de la coagulación intravascular diseminada secundaria si se desarrolla (ver ese tema).',
      tx_intervencionista: 'No aplica de forma directa; el soporte es de cuidados críticos según la gravedad del cuadro.',
      criterios_uci: 'Colapso hemodinámico, lesión renal aguda, coagulación intravascular diseminada secundaria: indicaciones para manejo en cuidados críticos.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia estrecha de la función renal (riesgo de lesión renal aguda por hemoglobina libre) y de la coagulación durante las horas siguientes al evento.',
      algoritmo: ['Fiebre, dolor lumbar, hipotensión al inicio de una transfusión → detener la transfusión de inmediato, ANTES de confirmar el diagnóstico', 'Mantener acceso venoso con solución salina, notificar al banco de sangre', 'Repetir tipo ABO/Rh del paciente y la unidad para identificar el error', 'Reanimación con líquidos para proteger la función renal', 'Vigilar desarrollo de coagulación intravascular diseminada secundaria']
    },
    {
      nombre: 'Reacción febril no hemolítica',
      color: '#8a6a1f',
      definicion: 'La reacción transfusional más frecuente de todas: fiebre y escalofríos durante o poco después de la transfusión, sin evidencia de hemólisis, atribuida a citocinas acumuladas durante el almacenamiento del hemoderivado o a anticuerpos del receptor contra antígenos leucocitarios del donante.',
      fisiopatologia: 'Dos mecanismos contribuyen: la acumulación de citocinas proinflamatorias (interleucina-1, interleucina-6, factor de necrosis tumoral) liberadas por los leucocitos residuales del donante durante el almacenamiento del hemoderivado, y la presencia de anticuerpos anti-HLA o antileucocitarios preformados en el receptor (por embarazo o transfusión previa) que reaccionan contra antígenos leucocitarios residuales del donante; la leucorreducción del hemoderivado (estándar en la mayoría de los centros) reduce sustancialmente la incidencia de ambos mecanismos.',
      epidemiologia: 'La reacción transfusional más frecuente de todas; su incidencia ha disminuido considerablemente desde la adopción generalizada de la leucorreducción universal de los hemoderivados.',
      factores_riesgo: ['Transfusiones previas múltiples (mayor probabilidad de anticuerpos anti-HLA/antileucocitarios preformados)', 'Embarazo previo (aloinmunización leucocitaria)', 'Uso de un hemoderivado no leucorreducido'],
      clinica: 'Fiebre (habitualmente elevación ≥1°C sobre el basal) y escalofríos durante o dentro de las primeras horas de la transfusión, sin hipotensión significativa, sin dolor lumbar, sin hemoglobinuria: el paciente se ve considerablemente menos comprometido que en una reacción hemolítica aguda.',
      criterios_dx: 'Diagnóstico de exclusión: fiebre aislada durante o después de la transfusión, tras descartar activamente hemólisis (Coombs directo negativo, haptoglobina normal), contaminación bacteriana, y otras causas de fiebre transfusional más graves.',
      laboratorio: 'Se solicitan los mismos estudios que ante sospecha de reacción hemolítica (Coombs directo, haptoglobina) para descartarla activamente, dado que ambas pueden presentarse inicialmente solo con fiebre.',
      complementarios: 'Hemocultivo de la unidad y del paciente si hay cualquier duda sobre contaminación bacteriana concomitante, particularmente si la fiebre es alta o hay otros signos de sepsis.',
      dx_diferencial: 'Reacción hemolítica aguda (siempre debe descartarse activamente antes de atribuir la fiebre a esta causa, ver esa tarjeta), contaminación bacteriana (fiebre habitualmente más alta con progresión a sepsis franca, ver esa tarjeta).',
      tx_medico: 'Detener temporalmente la transfusión mientras se descartan activamente las causas más graves de fiebre transfusional (hemolítica, séptica); una vez descartadas, puede reanudarse la transfusión a menor velocidad si es clínicamente necesario.',
      tx_farmacologico: 'Antipiréticos (paracetamol) para el confort del paciente; premedicación con antipiréticos considerada en el paciente con reacciones febriles recurrentes documentadas antes de transfusiones futuras.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica de forma directa a esta reacción en sí, salvo que se identifique una causa más grave concomitante.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la resolución de la fiebre y de que no aparezcan signos adicionales que sugieran una reacción más grave subyacente.',
      algoritmo: ['Fiebre aislada durante la transfusión → detener temporalmente y descartar activamente hemólisis y contaminación bacteriana', 'Coombs directo negativo + haptoglobina normal + sin otros signos de alarma → reacción febril no hemolítica confirmada por exclusión', 'Antipiréticos, reanudar transfusión a menor velocidad si es necesario', 'Considerar premedicación en pacientes con reacciones recurrentes documentadas']
    },
    {
      nombre: 'Reacción alérgica y anafiláctica',
      color: '#7a4363',
      definicion: 'Espectro de reacciones de hipersensibilidad a proteínas plasmáticas del donante, desde urticaria leve autolimitada hasta anafilaxia grave; la forma más grave se asocia clásicamente a la deficiencia de IgA en el receptor con anticuerpos anti-IgA preformados.',
      fisiopatologia: 'En la reacción alérgica leve-moderada (la más frecuente), el receptor reacciona a proteínas plasmáticas solubles del donante mediante un mecanismo de hipersensibilidad tipo I mediado por IgE, produciendo urticaria y prurito; en la forma anafiláctica grave, el receptor con deficiencia congénita de IgA y anticuerpos anti-IgA preformados reacciona de forma explosiva a la IgA presente en el plasma del donante, activando mastocitos de forma masiva y produciendo broncoespasmo, angioedema, e hipotensión potencialmente fatal en minutos.',
      epidemiologia: 'La reacción alérgica leve (urticaria) es relativamente frecuente; la anafilaxia grave por deficiencia de IgA es infrecuente pero clínicamente crítica de reconocer, dado que requiere hemoderivados especialmente procesados (lavados) para futuras transfusiones.',
      factores_riesgo: ['Antecedente personal de alergia o reacción transfusional alérgica previa', 'Deficiencia congénita de IgA conocida (particularmente relevante para el riesgo de anafilaxia grave)', 'Transfusión de un hemoderivado con alto contenido de plasma (plasma fresco congelado, plaquetas) más que eritrocitos lavados'],
      clinica: 'Forma leve: urticaria y prurito aislados, sin compromiso respiratorio ni hemodinámico. Forma grave (anafilaxia): broncoespasmo, estridor, angioedema, hipotensión, de inicio súbito durante la transfusión.',
      criterios_dx: 'Diagnóstico clínico según la presentación; en la anafilaxia grave recurrente o de inicio muy temprano en la infusión, investigar deficiencia de IgA con anticuerpos anti-IgA en el receptor.',
      laboratorio: 'Nivel de IgA sérica y anticuerpos anti-IgA en el paciente con anafilaxia grave o recurrente, para confirmar la deficiencia y planear hemoderivados especiales a futuro.',
      complementarios: 'No hay hallazgos de hemólisis (Coombs directo negativo, haptoglobina normal) a diferencia de la reacción hemolítica aguda, lo que ayuda a distinguirlas cuando la presentación inicial es ambigua.',
      dx_diferencial: 'Reacción hemolítica aguda (hipotensión con hemólisis documentada, sin el predominio de urticaria/broncoespasmo, ver esa tarjeta), TRALI (predominio respiratorio con infiltrados pulmonares bilaterales, sin urticaria típica, ver esa tarjeta).',
      tx_medico: 'Forma leve: puede continuarse o reanudarse la transfusión a menor velocidad tras controlar los síntomas con antihistamínicos, sin necesidad de suspenderla definitivamente. Forma grave (anafilaxia): detener la transfusión de inmediato y tratar como cualquier anafilaxia.',
      tx_farmacologico: 'Forma leve: antihistamínicos (difenhidramina). Forma grave: adrenalina intramuscular de inmediato (fármaco de elección en anafilaxia de cualquier causa), con soporte de vía aérea y hemodinámico según la gravedad.',
      tx_intervencionista: 'No aplica de forma directa, salvo el manejo estándar de vía aérea en la anafilaxia grave con compromiso respiratorio significativo.',
      criterios_uci: 'Anafilaxia grave con compromiso de vía aérea o hemodinámico significativo.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la resolución completa de los síntomas; en la forma grave, observación prolongada por el riesgo de reacción bifásica, como en cualquier anafilaxia.',
      algoritmo: ['Urticaria aislada sin compromiso respiratorio/hemodinámico → antihistamínicos, puede continuarse la transfusión a menor velocidad', 'Broncoespasmo, angioedema, o hipotensión → detener la transfusión de inmediato y tratar como anafilaxia (adrenalina IM de primera línea)', 'Anafilaxia grave recurrente o muy temprana → investigar deficiencia de IgA', 'Deficiencia de IgA confirmada → planear hemoderivados lavados para transfusiones futuras']
    },
    {
      nombre: 'TRALI (lesión pulmonar aguda relacionada a transfusión)',
      color: '#3d5a73',
      definicion: 'Insuficiencia respiratoria aguda de mecanismo inmunológico que aparece dentro de las 6 horas de una transfusión, con infiltrados pulmonares bilaterales de nueva aparición sin evidencia de sobrecarga de volumen; una de las causas más importantes de mortalidad relacionada a transfusión.',
      fisiopatologia: `Anticuerpos anti-HLA o antineutrófilo presentes en el plasma del donante (con mayor frecuencia en donantes mujeres multíparas, sensibilizadas por embarazos previos) reconocen antígenos en los neutrófilos del receptor, activándolos dentro de la microvasculatura pulmonar; los neutrófilos activados liberan mediadores que aumentan la permeabilidad capilar pulmonar, produciendo edema pulmonar no cardiogénico (a diferencia de TACO, que es hidrostático, ver la comparación en Imagen 2 y la tarjeta de TACO).${figBlock('Imagen 2', 'TRALI vs. TACO: el diferencial clásico', traliTacoHtml)}`,
      epidemiologia: 'Una de las principales causas de mortalidad relacionada a transfusión; su incidencia ha disminuido con las políticas de reducción de riesgo (preferir plasma de donantes hombres o mujeres no sensibilizadas para reducir la carga de anticuerpos anti-HLA transfundidos).',
      factores_riesgo: ['Transfusión de plasma o plaquetas de un donante mujer multípara (mayor probabilidad de anticuerpos anti-HLA/antineutrófilo)', 'Paciente crítico con un "segundo golpe" inflamatorio de base (sepsis, cirugía mayor reciente) que predispone a la activación neutrofílica pulmonar', 'Transfusión de múltiples hemoderivados en un periodo corto'],
      clinica: 'Disnea aguda, hipoxemia, y en ocasiones fiebre e hipotensión, de inicio dentro de las 6 horas de la transfusión; a diferencia de TACO, la presión arterial tiende a la hipotensión, no a la hipertensión (ver Imagen 2).',
      criterios_dx: 'Insuficiencia respiratoria aguda con infiltrados bilaterales de nueva aparición en la radiografía de tórax, dentro de las 6 horas de la transfusión, sin evidencia de sobrecarga de volumen (BNP no elevado o mínimamente elevado, sin respuesta significativa a diuréticos) y sin otra causa alternativa que explique el cuadro (ver el diferencial completo con TACO en Imagen 2).',
      laboratorio: 'Péptido natriurético cerebral (BNP), habitualmente no elevado o con elevación mínima (a diferencia de TACO); investigación retrospectiva de anticuerpos anti-HLA/antineutrófilo en el donante implicado, coordinada con el banco de sangre.',
      imagen: 'Radiografía de tórax con infiltrados bilaterales de nueva aparición, indistinguible por sí sola de TACO o del síndrome de dificultad respiratoria aguda de otra causa; la distinción se apoya en el contexto clínico, la presión arterial, el BNP, y la respuesta a diuréticos.',
      complementarios: 'Notificación al banco de sangre para identificar y potencialmente retirar al donante implicado de futuras donaciones de componentes ricos en plasma.',
      dx_diferencial: 'TACO (hipertensión, BNP elevado, buena respuesta a diuréticos, ver esa tarjeta y la comparación en Imagen 2), síndrome de dificultad respiratoria aguda de otra causa no transfusional.',
      tx_medico: 'Soporte respiratorio (oxígeno suplementario o ventilación mecánica según la gravedad); a diferencia de TACO, los diuréticos NO son eficaces (no es un problema de exceso de volumen) y pueden ser incluso perjudiciales si empeoran la hipotensión.',
      tx_farmacologico: 'No hay tratamiento farmacológico específico; el manejo es de soporte respiratorio y hemodinámico según la gravedad del cuadro.',
      tx_intervencionista: 'Ventilación mecánica invasiva en la insuficiencia respiratoria grave que no responde a soporte no invasivo.',
      criterios_uci: 'Hipoxemia grave que requiere soporte respiratorio avanzado, inestabilidad hemodinámica concomitante.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia respiratoria estrecha; la mayoría de los casos se resuelven dentro de las 48-96 horas con soporte adecuado, aunque la mortalidad no es despreciable en los casos graves.',
      algoritmo: ['Disnea + hipoxemia + infiltrados bilaterales dentro de las 6 horas de transfundir → sospechar TRALI', 'Distinguir de TACO por presión arterial, BNP, y respuesta a diuréticos (Imagen 2)', 'Soporte respiratorio según la gravedad; los diuréticos NO son eficaces (a diferencia de TACO)', 'Notificar al banco de sangre para investigar y potencialmente retirar al donante implicado']
    },
    {
      nombre: 'TACO (sobrecarga circulatoria asociada a transfusión)',
      color: '#3f6b52',
      definicion: 'Edema pulmonar cardiogénico (hidrostático) producido por el volumen de la transfusión excediendo la capacidad del sistema cardiovascular del receptor de manejarlo, particularmente en pacientes con reserva cardiaca o renal limitada; probablemente la causa más subdiagnosticada de morbimortalidad relacionada a transfusión.',
      fisiopatologia: 'El volumen infundido, sumado al volumen circulante ya presente, excede la capacidad del corazón de manejar la precarga adicional, elevando la presión hidrostática capilar pulmonar y produciendo trasudación de líquido hacia el espacio alveolar (edema pulmonar cardiogénico clásico), un mecanismo puramente hemodinámico y de volumen, sin participación inmunológica (a diferencia de TRALI, ver la comparación en Imagen 2).',
      epidemiologia: 'Probablemente subreconocida y subreportada en la práctica clínica (con frecuencia atribuida erróneamente solo a "sobrecarga de líquidos" sin registrarse formalmente como reacción transfusional); particularmente frecuente en el paciente de edad avanzada, con insuficiencia cardiaca de base, o con enfermedad renal crónica.',
      factores_riesgo: ['Edad avanzada', 'Insuficiencia cardiaca o disfunción ventricular de base', 'Enfermedad renal crónica con capacidad limitada de excretar el volumen adicional', 'Velocidad de infusión rápida o transfusión de múltiples unidades en un periodo corto'],
      clinica: 'Disnea aguda, ortopnea, hipertensión de nueva aparición (a diferencia de TRALI), taquicardia, y con frecuencia estertores bibasales a la auscultación, de inicio durante o hasta 6-12 horas después de la transfusión.',
      criterios_dx: 'Insuficiencia respiratoria aguda con infiltrados bilaterales durante o después de la transfusión, con evidencia de sobrecarga de volumen (BNP elevado sobre el basal, hipertensión, respuesta clínica clara a diuréticos), distinguiéndolo de TRALI (ver Imagen 2 para el diferencial completo).',
      laboratorio: 'BNP elevado sobre el basal del paciente (el hallazgo más útil para distinguirlo de TRALI).',
      imagen: 'Radiografía de tórax con infiltrados bilaterales y con frecuencia signos de redistribución vascular/cardiomegalia, más sugestivos de edema cardiogénico que en TRALI.',
      complementarios: 'Balance de líquidos acumulado durante la hospitalización, particularmente relevante en el paciente con múltiples transfusiones o líquidos intravenosos concurrentes.',
      dx_diferencial: 'TRALI (hipotensión, BNP no elevado, sin respuesta a diuréticos, ver esa tarjeta y la comparación en Imagen 2), edema pulmonar cardiogénico de otra causa no transfusional en el paciente con insuficiencia cardiaca de base.',
      tx_medico: 'Diuréticos (a diferencia de TRALI, son eficaces y producen mejoría clínica clara), oxígeno suplementario según necesidad, y reducir la velocidad de infusión de transfusiones futuras en el paciente identificado como de alto riesgo.',
      tx_farmacologico: 'Furosemida u otro diurético de asa intravenoso; en el paciente de alto riesgo conocido (insuficiencia cardiaca, enfermedad renal crónica), premedicación con diurético antes de transfusiones futuras y reducción de la velocidad de infusión.',
      tx_intervencionista: 'No aplica de forma directa, salvo el soporte respiratorio estándar en el edema pulmonar grave.',
      criterios_uci: 'Insuficiencia respiratoria grave que requiere soporte ventilatorio, particularmente en el paciente con reserva cardiopulmonar muy limitada de base.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta a diuréticos y de la resolución del cuadro; identificación del paciente como de alto riesgo para ajustar la velocidad de transfusiones futuras.',
      algoritmo: ['Disnea + hipertensión + infiltrados bilaterales durante o después de transfundir → sospechar TACO', 'Distinguir de TRALI por presión arterial, BNP, y respuesta a diuréticos (Imagen 2)', 'Diuréticos: eficaces y con mejoría clínica clara (a diferencia de TRALI)', 'En el paciente de alto riesgo conocido, reducir la velocidad de infusión de transfusiones futuras']
    },
    {
      nombre: 'Contaminación bacteriana',
      color: '#6b4a2e',
      definicion: 'Sepsis transfusional por contaminación bacteriana del hemoderivado, con mayor riesgo en el concentrado plaquetario dado que se almacena a temperatura ambiente con agitación continua (a diferencia de los eritrocitos, refrigerados), condiciones que favorecen la proliferación bacteriana si ocurre una contaminación inicial.',
      fisiopatologia: 'La contaminación ocurre habitualmente durante la flebotomía del donante (por flora cutánea del sitio de punción no completamente eliminada pese a la asepsia estándar) o, con menor frecuencia, por bacteriemia asintomática no detectada en el donante en el momento de la donación; una vez contaminado, el hemoderivado almacenado a temperatura ambiente (plaquetas) permite la proliferación bacteriana activa durante el periodo de almacenamiento, de forma que la carga bacteriana infundida al receptor puede ser considerable para el momento de la transfusión.',
      epidemiologia: 'El concentrado plaquetario tiene un riesgo de contaminación bacteriana sustancialmente mayor que el concentrado eritrocitario, precisamente por su almacenamiento a temperatura ambiente; las estrategias de detección bacteriana pretransfusional del concentrado plaquetario han reducido, pero no eliminado, este riesgo.',
      factores_riesgo: ['Transfusión de concentrado plaquetario (mayor riesgo que eritrocitos por almacenamiento a temperatura ambiente)', 'Unidad próxima al límite de su periodo de almacenamiento permitido', 'Ausencia de estrategias de detección bacteriana pretransfusional en la institución'],
      clinica: 'Fiebre alta de inicio rápido (con frecuencia más alta que en la reacción febril no hemolítica), escalofríos intensos, hipotensión, y progresión hacia choque séptico franco si no se reconoce y trata con prontitud.',
      criterios_dx: 'Hemocultivos positivos concordantes del paciente y de la unidad transfundida (o del segmento remanente de la bolsa conservado para este propósito), en un paciente con fiebre alta y deterioro clínico rápido durante o después de la transfusión.',
      laboratorio: 'Hemocultivos del paciente y de la unidad/segmento remanente de la bolsa; lactato y marcadores de sepsis según la gravedad del cuadro.',
      complementarios: 'Notificación inmediata al banco de sangre para investigar la fuente de contaminación y evaluar otros hemocomponentes derivados de la misma donación.',
      dx_diferencial: 'Reacción febril no hemolítica (fiebre habitualmente menos intensa, sin progresión a choque séptico, ver esa tarjeta), reacción hemolítica aguda (predominio de hemólisis con Coombs directo positivo, no de cultivo positivo, ver esa tarjeta).',
      tx_medico: 'Detener la transfusión de inmediato ante fiebre alta con deterioro clínico rápido, obtener hemocultivos del paciente y de la unidad, e iniciar antibióticos empíricos de amplio espectro sin demora mientras se completa el estudio, dado el riesgo de progresión rápida a choque séptico.',
      tx_farmacologico: 'Antibióticos empíricos de amplio espectro de inicio inmediato (ajustados posteriormente según el resultado del cultivo), reanimación con líquidos y vasopresores según la gravedad del choque séptico.',
      tx_intervencionista: 'No aplica de forma directa; el manejo es de cuidados críticos según la gravedad del choque séptico.',
      criterios_uci: 'Choque séptico establecido, indicación estándar de manejo en cuidados críticos con reanimación dirigida por objetivos.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia hemodinámica estrecha y respuesta a antibióticos y reanimación según el protocolo estándar de sepsis/choque séptico (ver ese tema).',
      algoritmo: ['Fiebre alta + deterioro clínico rápido durante/después de transfundir (particularmente plaquetas) → sospechar contaminación bacteriana', 'Detener la transfusión, hemocultivos del paciente y de la unidad/segmento remanente', 'Antibióticos empíricos de amplio espectro sin demora', 'Manejar como choque séptico si progresa (ver ese tema)', 'Notificar al banco de sangre para investigar la fuente y otros hemocomponentes relacionados']
    },
    {
      nombre: 'Reacciones tardías (hemolítica tardía, aloinmunización, EICH-AT, sobrecarga de hierro)',
      color: '#8c6b2d',
      definicion: 'Grupo de complicaciones que aparecen días a años después de la transfusión, de menor frecuencia individual que las reacciones agudas pero clínicamente relevantes en el paciente politransfundido: reacción hemolítica tardía, aloinmunización frente a antígenos eritrocitarios/plaquetarios, enfermedad de injerto contra huésped asociada a transfusión (EICH-AT), y sobrecarga de hierro por transfusión crónica.',
      fisiopatologia: 'La reacción hemolítica tardía ocurre cuando el receptor, previamente sensibilizado por embarazo o transfusión previa a un antígeno eritrocitario menor (no ABO) sin anticuerpos detectables al momento de la prueba cruzada, monta una respuesta anamnésica de anticuerpos días después de una nueva exposición al mismo antígeno, produciendo hemólisis extravascular más gradual que la reacción aguda; la aloinmunización es el proceso de sensibilización en sí, que puede complicar transfusiones futuras y, en la mujer en edad fértil, un embarazo posterior (enfermedad hemolítica del recién nacido); la EICH-AT ocurre cuando linfocitos T viables del donante (presentes en un hemoderivado no irradiado) proliferan en un receptor gravemente inmunocomprometido incapaz de rechazarlos, atacando la piel, el tubo digestivo, y la médula ósea del receptor, con mortalidad muy alta; la sobrecarga de hierro (hemosiderosis transfusional) resulta de la acumulación progresiva del hierro contenido en cada unidad de eritrocitos transfundida en el paciente con transfusiones crónicas repetidas (ej. talasemia mayor, síndromes mielodisplásicos dependientes de transfusión), depositándose en el corazón, el hígado, y las glándulas endocrinas.',
      epidemiologia: 'La aloinmunización y la reacción hemolítica tardía son relativamente más frecuentes en el paciente politransfundido crónico (ej. drepanocitosis); la EICH-AT es infrecuente pero casi uniformemente fatal cuando ocurre; la sobrecarga de hierro es prácticamente universal en el paciente con dependencia transfusional crónica no quelado.',
      factores_riesgo: ['Transfusiones previas múltiples (aloinmunización, reacción hemolítica tardía)', 'Inmunocompromiso grave (celular) sin uso de hemoderivados irradiados (EICH-AT)', 'Dependencia transfusional crónica sin terapia quelante de hierro concomitante (sobrecarga de hierro)', 'Embarazo en una mujer previamente aloinmunizada (riesgo para el feto en gestaciones posteriores)'],
      clinica: 'Reacción hemolítica tardía: anemia inexplicada y/o ictericia leve días después de una transfusión, con frecuencia sin fiebre significativa. EICH-AT: fiebre, exantema cutáneo, diarrea, y pancitopenia semanas después de la transfusión en el paciente gravemente inmunocomprometido. Sobrecarga de hierro: disfunción cardiaca (miocardiopatía), hepatopatía, y endocrinopatías (diabetes, hipogonadismo) de instauración insidiosa tras años de transfusión crónica.',
      criterios_dx: 'Reacción hemolítica tardía: Coombs directo positivo con caída inesperada de hemoglobina días después de una transfusión. EICH-AT: biopsia de piel/tubo digestivo con hallazgos característicos en el contexto clínico apropiado. Sobrecarga de hierro: ferritina sérica elevada progresivamente, confirmada por resonancia magnética cuantitativa de hierro hepático/cardiaco en el paciente con transfusión crónica.',
      laboratorio: 'Coombs directo, haptoglobina, bilirrubina (reacción hemolítica tardía); ferritina sérica seriada y resonancia magnética cuantitativa de hierro (sobrecarga de hierro); biopsia dirigida (EICH-AT).',
      complementarios: 'Fenotipo eritrocitario extendido en el paciente politransfundido crónico para anticipar y minimizar futuras aloinmunizaciones seleccionando unidades compatibles con antígenos menores relevantes.',
      dx_diferencial: 'Reacción hemolítica aguda (instauración en minutos-horas, no días, ver esa tarjeta), otras causas de anemia, exantema, o disfunción orgánica no relacionadas con transfusión en el paciente politransfundido crónico.',
      tx_medico: 'Reacción hemolítica tardía: habitualmente autolimitada, con soporte según la gravedad de la anemia. EICH-AT: sin tratamiento eficaz establecido una vez instaurada (por eso la prevención con irradiación es la estrategia central). Sobrecarga de hierro: terapia quelante de hierro (deferoxamina, deferasirox) iniciada de forma proactiva según la ferritina y la carga transfusional acumulada, no reactiva tras la aparición de daño orgánico.',
      tx_farmacologico: 'Quelantes de hierro (deferoxamina parenteral o deferasirox oral) en la sobrecarga de hierro por transfusión crónica; no hay tratamiento farmacológico específico eficaz para la EICH-AT establecida.',
      tx_intervencionista: 'Irradiación gamma o por rayos X de los hemoderivados celulares (eritrocitos, plaquetas) ANTES de transfundirlos al paciente en riesgo de EICH-AT (inmunocompromiso celular grave, trasplante de progenitores hematopoyéticos, transfusión intrauterina o de un donante familiar): la medida preventiva central, dado que no existe tratamiento eficaz una vez establecida.',
      criterios_uci: 'EICH-AT establecida con falla multiorgánica; sobrecarga de hierro con miocardiopatía descompensada grave.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma característica a estas complicaciones tardías (se manifiestan típicamente tras el alta).',
      seguimiento_ambulatorio: 'Fenotipo eritrocitario extendido y tarjeta de alerta de aloanticuerpos conocidos en el paciente politransfundido; ferritina seriada y ajuste de la terapia quelante en el paciente con dependencia transfusional crónica; identificación proactiva del paciente en riesgo de EICH-AT para indicar irradiación de rutina en todas sus transfusiones futuras.',
      pronostico: 'La reacción hemolítica tardía es habitualmente autolimitada; la EICH-AT tiene una mortalidad muy alta una vez establecida, lo que subraya la importancia de la prevención; la sobrecarga de hierro es prevenible y tratable con quelación proactiva e iniciada oportunamente.',
      algoritmo: ['Anemia/ictericia inexplicada días después de una transfusión en paciente politransfundido → sospechar reacción hemolítica tardía (Coombs directo)', 'Paciente con inmunocompromiso celular grave que requiere transfusión → indicar hemoderivados irradiados para prevenir EICH-AT (no hay tratamiento eficaz una vez establecida)', 'Dependencia transfusional crónica → vigilar ferritina seriada e iniciar quelación proactiva, no esperar a que aparezca daño orgánico', 'Documentar y comunicar cualquier aloanticuerpo identificado para transfusiones futuras del paciente']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de este tema se centra en la vigilancia activa durante y después de cada transfusión para el reconocimiento temprano de una reacción, y en la reevaluación de la respuesta esperada a cada hemoderivado.',
    parametros: ['Signos vitales antes, durante (a los 15 minutos), y al finalizar cada unidad transfundida', 'Hemoglobina, recuento plaquetario, fibrinógeno, o TP/TTPa postransfusión según el hemoderivado indicado', 'Vigilancia activa de fiebre, disnea, hipotensión/hipertensión, o urticaria durante toda la infusión'],
    criterios_uci_general: 'Cualquier reacción hemolítica aguda, anafilaxia grave, TRALI o TACO con insuficiencia respiratoria significativa, contaminación bacteriana con choque séptico, o sangrado masivo activo que requiera transfusión masiva.',
    criterios_tips_general: 'No aplica de forma directa a este tema; ver los temas de la enfermedad de base cuando corresponda (ej. Cirrosis Hepática, Trastornos de la Coagulación y Trombofilias).',
    criterios_trasplante_general: 'No aplica de forma directa a este tema.',
    prevencion: 'Verificación de identidad del paciente y de la unidad al pie de la cama inmediatamente antes de iniciar cada transfusión (previene la práctica totalidad de las reacciones hemolíticas agudas); leucorreducción universal (reduce reacciones febriles no hemolíticas y aloinmunización); irradiación en el paciente en riesgo de EICH-AT; uso del umbral transfusional apropiado al contexto clínico para evitar la exposición innecesaria a hemoderivados.'
  }
};

export const compCites = {
  'Concentrado eritrocitario (paquete globular)': [1, 2, 3],
  'Plasma fresco congelado': [9],
  'Concentrado plaquetario': [8, 15],
  'Crioprecipitado': [10],
  'Reacción hemolítica aguda': [4, 14],
  'Reacción febril no hemolítica': [13],
  'Reacción alérgica y anafiláctica': [4],
  'TRALI (lesión pulmonar aguda relacionada a transfusión)': [6, 12, 13],
  'TACO (sobrecarga circulatoria asociada a transfusión)': [7, 13],
  'Contaminación bacteriana': [4],
  'Reacciones tardías (hemolítica tardía, aloinmunización, EICH-AT, sobrecarga de hierro)': [11, 14]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Umbral transfusional de eritrocitos (estrategia restrictiva)': [1, 2, 3],
  'Umbral de transfusión plaquetaria': [8]
};
export const escalaCalc = { 'Umbral transfusional de eritrocitos (estrategia restrictiva)': 'umbral-eritrocitos' };
export const compGroups = [
  { name: 'Hemoderivados (qué transfundir, cuándo, cuánto)', items: ['Concentrado eritrocitario (paquete globular)', 'Plasma fresco congelado', 'Concentrado plaquetario', 'Crioprecipitado'] },
  { name: 'Reacciones transfusionales (complicaciones)', items: ['Reacción hemolítica aguda', 'Reacción febril no hemolítica', 'Reacción alérgica y anafiláctica', 'TRALI (lesión pulmonar aguda relacionada a transfusión)', 'TACO (sobrecarga circulatoria asociada a transfusión)', 'Contaminación bacteriana', 'Reacciones tardías (hemolítica tardía, aloinmunización, EICH-AT, sobrecarga de hierro)'] }
];
export const complicacionesIntro = 'Las primeras 4 tarjetas son monografías por hemoderivado (qué es, cuándo transfundirlo, cuánto): concentrado eritrocitario, plasma fresco congelado, concentrado plaquetario, y crioprecipitado. Las siguientes 7 son las reacciones transfusionales reales: 6 agudas (hemolítica, febril no hemolítica, alérgica/anafiláctica, TRALI, TACO, contaminación bacteriana) y 1 ficha combinada de reacciones tardías (hemolítica tardía, aloinmunización, EICH-AT, sobrecarga de hierro), agrupadas para no diluir con fichas de menor rendimiento individual.';
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
  root: { title: 'TRANSFUSIÓN DE HEMODERIVADOS', color: '#1f5c73', target: 'definicion' },
  branches: [
    { title: 'Hemoderivados', sub: 'Qué transfundir, cuándo, cuánto', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Concentrado eritrocitario', sub: 'Transporte de oxígeno', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Plasma fresco congelado', sub: 'Múltiples factores', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Concentrado plaquetario', sub: 'Hemostasia primaria', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Crioprecipitado', sub: 'Fibrinógeno, VIII, vWF, XIII', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'Reacciones agudas', sub: 'Minutos a horas', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Hemolítica aguda', sub: 'Incompatibilidad ABO', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Febril no hemolítica', sub: 'La más frecuente', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Alérgica/anafiláctica', sub: 'IgA, urticaria a anafilaxia', color: '#7a4363', target: 'complicaciones' },
      { title: 'TRALI', sub: 'Inmunológica, hipotensión', color: '#3d5a73', target: 'complicaciones' },
      { title: 'TACO', sub: 'Hidrostática, hipertensión', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Contaminación bacteriana', sub: 'Más riesgo en plaquetas', color: '#6b4a2e', target: 'complicaciones' }
    ] },
    { title: 'Reacciones tardías', sub: 'Días a años', color: '#8c6b2d', target: 'complicaciones', leaves: [
      { title: 'Hemolítica tardía, aloinmunización, EICH-AT, hierro', sub: 'Ficha combinada', color: '#8c6b2d', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [4, 14] };
export const clasificacionCite = [1, 2, 3];
export const seguimientoCite = [5];
