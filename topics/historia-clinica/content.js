// topics/historia-clinica/content.js — Semiología 1: Historia Clínica y Anamnesis Dirigida.
// Contenido basado en manuales clásicos de propedéutica y semiología (ver bibliografía).
// Estructura idéntica al contrato del motor, siguiendo topics/_template-semiologia/.
// Sin `arbol`: este tema no usa mapa conceptual.
//
// A propósito, NO todas las entradas de `complicaciones` usan los mismos campos: las de
// "metodología" (Estructura, Antecedentes, Padecimiento actual, Interrogatorio, ALICIA/SOCRATES)
// omiten dx_diferencial porque no aplica (el motor ya oculta cualquier campo vacío — no hace
// falta escribir "No aplica"). Las de "síntomas cardinales" sí usan fisiopatologia (como
// clasificación/mecanismo) además de definicion/clinica/criterios_dx/dx_diferencial, porque ahí
// sí hay mecanismo y diferencial reales. `modalLabels` reetiqueta 2 campos genéricos.
//
// IMPORTANTE: `definicion` se usa TANTO en la tarjeta de la lista (vista previa corta) COMO en
// el modal de detalle — por eso debe quedarse SIEMPRE corta. Cualquier contenido extenso/visual
// (listas grandes, escalas, tablas) va en `figuras` (solo se ve al abrir el detalle) o en
// `algoritmo` (lista numerada, para secuencias de pasos).
//
// Revisión (agosto 2026, a pedido del usuario):
// - Se quitó el texto genérico del motor para la sección "Metodología" ("Historia clínica,
//   laboratorio general, estudios dirigidos, métodos no invasivos e imagen — en ese orden de
//   invasividad creciente", default de engine/study-view.js pensado para temas de ENFERMEDAD, no
//   para este tema) exportando `diagnosticoIntro = ''`. También se quitó la figura
//   'historia-completa-vs-dirigida' (el único elemento visual que vivía junto a esa sección) —
//   si el usuario en realidad se refería a otra imagen que no se localizó en el código, avisar.
// - Se reordenó la secuencia (ficha de identificación → antecedentes heredofamiliares →
//   antecedentes personales NO patológicos → antecedentes personales patológicos → motivo de
//   consulta → padecimiento actual → interrogatorio por aparatos y sistemas → exploración física
//   → resumen) en 3 lugares: el algoritmo de "Estructura de la historia clínica", el texto de
//   "Historia clínica completa" (diagnostico.clinica.compensada), y el orden de `compGroups`.
// - "Antecedentes personales no patológicos" se amplió sustancialmente (vivienda, hacinamiento
//   con definición y criterio, convivencia con animales, hábitos higiénico-dietéticos incluyendo
//   el antecedente de Combe, índice tabáquico, exposición a biomasa, alcohol con tabla de
//   unidades, toxicomanías, exposición ocupacional ampliada).
// - "Antecedentes personales patológicos" ahora especifica, para enfermedades crónicas, fecha de
//   diagnóstico/tratamiento actual/apego; para cirugías, complicaciones; para alergias, el tipo
//   de reacción con tabla de hipersensibilidad de Gell y Coombs; y añade contexto real sobre
//   eventos protrombóticos post-vacuna COVID-19 (con cita).
// - "Interrogatorio por aparatos y sistemas" ganó una tabla-guía con lo esencial a preguntar por
//   cada sistema (figura 'ipas-checklist').
// - "Dolor" y "Fiebre": el campo fisiopatologia se reestructuró con bloques HTML separados
//   ("Mecanismo" vs. "Clasificación") y analogías; en Fiebre además se reordenó `figura` para que
//   el cuadro de temperatura/sitios de medición aparezca primero, y se agregaron los criterios de
//   fiebre de origen desconocido (Petersdorf/Durack).
// - "Tos" ganó una tabla de clasificación (figura 'tos-clasificacion-tabla') y analogías.
// - SOCRATES y Tos: el usuario pidió una imagen decorativa junto a cada uno; los PROMPTS para
//   generarlas (vía tools/generar-figura.py, arte puramente decorativo, sin datos clínicos) se
//   entregaron en el chat, no se insertó código de imagen todavía (el archivo no existe aún).

export const meta = {
  id: 'historia-clinica',
  titulo: 'Historia Clínica y Anamnesis Dirigida',
  subtitulo: 'Semiología 1 · Medicina Interna',
  accent: '#3d5a73',
  accentDim: '#4f7291'
};

export const definicionText = 'La historia clínica es el registro ordenado y sistemático de toda la información relevante sobre la salud de un paciente, obtenida mediante el interrogatorio (anamnesis) y complementada con la exploración física. Es el instrumento diagnóstico más importante de la medicina: se estima que entre el 70 y el 90% de los diagnósticos correctos se alcanzan con una anamnesis bien dirigida, antes de cualquier estudio de laboratorio o imagen. Tiene, además, valor médico-legal y es la base de la relación médico-paciente.';

// Se quita el texto genérico del motor para "Metodología" (pensado para el abordaje diagnóstico
// de una ENFERMEDAD: "historia clínica, laboratorio general, estudios dirigidos, métodos no
// invasivos e imagen, en orden de invasividad creciente") — no aplica a este tema, que ES la
// historia clínica. Las 2 tarjetas de abajo (Historia clínica completa / Anamnesis dirigida) ya
// bastan como introducción visual a la sección.
export const diagnosticoIntro = '';

export const bibliografia = [
  "Bickley LS, Szilagyi PG, Hoffman RM. Bates' Guide to Physical Examination and History Taking. 13th ed. Philadelphia: Wolters Kluwer; 2021.",
  'Argente HA, Álvarez ME. Semiología Médica: Fisiopatología, Semiotecnia y Propedéutica. 2nd ed. Buenos Aires: Editorial Médica Panamericana; 2013.',
  "LeBlond RF, Brown DD, Suneja M, Szot JF. DeGowin's Diagnostic Examination. 10th ed. New York: McGraw-Hill; 2015.",
  'Surós Batlló A, Surós Batlló J. Semiología Médica y Técnica Exploratoria. 8th ed. Barcelona: Elsevier Masson; 2001.',
  'Dinarello CA. Cytokines as endogenous pyrogens. J Infect Dis. 1999;179(Suppl 2):S294-304.',
  'Basbaum AI, Bautista DM, Scherrer G, Julius D. Cellular and molecular mechanisms of pain. Cell. 2009;139(2):267-284.',
  'Parshall MB, Schwartzstein RM, Adams L, et al. An official American Thoracic Society statement: update on the mechanisms, assessment, and management of dyspnea. Am J Respir Crit Care Med. 2012;185(4):435-452.',
  'Canning BJ, Chang AB, Bolser DC, et al. Anatomy and neurophysiology of cough: CHEST guideline and expert panel report. Chest. 2014;146(6):1633-1648.',
  'Dantzer R, O’Connor JC, Freund GG, Johnson RW, Kelley KW. From inflammation to sickness and depression: when the immune system subjugates the brain. Nat Rev Neurosci. 2008;9(1):46-56.',
  'Instituto Nacional de Estadística y Geografía (INEGI). Metodología de índices de hacinamiento y carencias por vivienda. México: INEGI; 2020.',
  'Salvi S, Barnes PJ. Chronic obstructive pulmonary disease in non-smokers. Lancet. 2009;374(9691):733-743.',
  'World Health Organization. Global Status Report on Alcohol and Health 2018. Geneva: WHO; 2018.',
  'Gell PGH, Coombs RRA. Clinical Aspects of Immunology. 1st ed. Oxford: Blackwell Scientific; 1963.',
  'Greinacher A, Thiele T, Warkentin TE, Weisser K, Kyrle PA, Eichinger S. Thrombotic Thrombocytopenia after ChAdOx1 nCov-19 Vaccination. N Engl J Med. 2021;384(22):2092-2101.',
  'LaDou J, Harrison RJ, eds. CURRENT Occupational and Environmental Medicine. 5th ed. New York: McGraw-Hill; 2014.',
  'Petersdorf RG, Beeson PB. Fever of unexplained origin: report on 100 cases. Medicine (Baltimore). 1961;40:1-30.',
  'Durack DT, Street AC. Fever of unknown origin — reexamined and redefined. Curr Clin Top Infect Dis. 1991;11:35-51.'
];

// Reetiqueta TODOS los campos genéricos del motor (pensados para "enfermedad") para que
// encajen con contenido de semiología. Ninguna tarjeta de este tema debe mostrar ya
// "Manifestaciones clínicas" — fue señalado dos veces como fuera de lugar acá.
export const modalLabels = {
  fisiopatologia: 'Clasificación y mecanismo',
  clinica: 'Aplicación práctica',
  criterios_dx: 'Significado clínico',
  algoritmo: 'Secuencia'
};

// Helper para las dos mnemotecnias (ALICIA y SOCRATES): lista vertical con la primera letra
// grande y resaltada.
function letraLista(color, filas) {
  return `<div style="display:flex;flex-direction:column;gap:9px;margin-top:6px;">
    ${filas.map(([letra, resto, desc]) => `<div><span style="font-size:1.5em;font-weight:800;color:${color};line-height:1;">${letra}</span><span style="font-weight:600;">${resto}</span> — ${desc}</div>`).join('')}
  </div>`;
}

// Iconos de tarjeta (24x24, solo trazo — decorativos, la información real ya está en el texto
// de al lado, por eso van con aria-hidden en vez de title/desc propios).
const ICONOS = {
  dolor: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 5 14h5l-1 8 8-12h-5l1-8z"/></svg>',
  fiebre: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 14.5V5a2 2 0 0 0-4 0v9.5a4 4 0 1 0 4 0Z"/><path d="M12 8.5h2"/></svg>',
  disnea: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v6"/><path d="M12 9c-1.2 0-2.2 1-3 3s-1.8 6.5-.8 7.5 2.8-.8 3.8-3.5"/><path d="M12 9c1.2 0 2.2 1 3 3s1.8 6.5.8 7.5-2.8-.8-3.8-3.5"/></svg>',
  tos: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="12" r="5"/><path d="M15.5 9.5c1.8 0 3 1.1 3 2.5s-1.2 2.5-3 2.5"/><path d="M18.5 7c2.8 0 4.5 2.2 4.5 5s-1.7 5-4.5 5"/></svg>',
  astenia: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="7" width="17" height="10" rx="2"/><line x1="21" y1="10" x2="21" y2="14"/><line x1="6" y1="10" x2="6" y2="14"/></svg>'
};

// Mini-gráfica de patrón febril (temperatura vs. días). Puramente esquemática (ilustra la FORMA
// del patrón descrito en el texto, no datos de un paciente real) — por eso `fuente` cita el
// texto clásico que describe el patrón, no un dataset.
function patronFiebreSVG(id, valores, label) {
  const w = 200, h = 100, padL = 26, padR = 8, padT = 10, padB = 18;
  const minT = 36, maxT = 40.5;
  const x = i => padL + (i / (valores.length - 1)) * (w - padL - padR);
  const y = t => padT + (1 - (t - minT) / (maxT - minT)) * (h - padT - padB);
  const pts = valores.map((t, i) => `${x(i).toFixed(1)},${y(t).toFixed(1)}`).join(' ');
  return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="${id}-t ${id}-d" style="width:100%;max-width:220px;">
    <title id="${id}-t">Patrón febril ${label}</title>
    <desc id="${id}-d">Curva esquemática de temperatura corporal a lo largo de varios días, mostrando el patrón ${label.toLowerCase()}.</desc>
    <line x1="${padL}" y1="${y(37).toFixed(1)}" x2="${w - padR}" y2="${y(37).toFixed(1)}" stroke="var(--line)" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="${padL - 3}" y="${y(37).toFixed(1)}" text-anchor="end" dominant-baseline="middle" font-size="7" fill="var(--ink-faint)">37°</text>
    <line x1="${padL}" y1="${y(38).toFixed(1)}" x2="${w - padR}" y2="${y(38).toFixed(1)}" stroke="var(--ink-faint)" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="${padL - 3}" y="${y(38).toFixed(1)}" text-anchor="end" dominant-baseline="middle" font-size="7" fill="var(--ink-faint)">38°</text>
    <polyline points="${pts}" fill="none" stroke="#8c3a34" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
    ${valores.map((t, i) => `<circle cx="${x(i).toFixed(1)}" cy="${y(t).toFixed(1)}" r="2" fill="#8c3a34"/>`).join('')}
    <text x="${(padL + (w - padR)) / 2}" y="${h - 4}" text-anchor="middle" font-size="8.5" fill="var(--ink)" font-weight="700">${label}</text>
  </svg>`;
}

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Historia clínica completa',
      tituloB: 'Anamnesis dirigida (urgencia/consulta breve)',
      compensada: 'Documento completo y ordenado: ficha de identificación, antecedentes heredofamiliares, antecedentes personales no patológicos y patológicos, motivo de consulta, padecimiento actual, interrogatorio por aparatos y sistemas, exploración física completa, resumen y lista de problemas. Es el formato estándar de primera vez o de ingreso hospitalario.',
      descompensada: 'Versión abreviada y centrada en el síntoma guía cuando el tiempo o la gravedad del paciente no permiten el interrogatorio completo (urgencias, guardia). Prioriza lo que cambia la conducta inmediata: padecimiento actual, alergias, medicamentos y antecedentes directamente relevantes; el resto se completa después de estabilizar.'
    }
  },
  complicaciones: [
    {
      nombre: 'Estructura de la historia clínica',
      color: '#3d5a73',
      definicion: 'Secuencia estándar de 9 componentes que ordena toda la información clínica, desde los datos generales del paciente hasta el plan diagnóstico-terapéutico.',
      algoritmo: [
        'Ficha de identificación',
        'Antecedentes heredofamiliares',
        'Antecedentes personales no patológicos',
        'Antecedentes personales patológicos',
        'Motivo de consulta',
        'Padecimiento actual',
        'Interrogatorio por aparatos y sistemas',
        'Exploración física',
        'Resumen, lista de problemas y plan diagnóstico-terapéutico'
      ],
      criterios_dx: 'Una historia clínica completa y bien estructurada es la base médico-legal del acto médico y permite reconstruir el razonamiento diagnóstico ante cualquier revisión posterior. Colocar los antecedentes (heredofamiliares y personales) justo después de la ficha de identificación ayuda a interpretar el padecimiento actual con ese contexto ya conocido, en vez de escucharlo "en el vacío". En la práctica el interrogatorio sigue siendo conversacional — se empieza con preguntas abiertas y se dirige progresivamente hacia preguntas cerradas — pero el documento final siempre respeta este orden.'
    },
    {
      nombre: 'Antecedentes personales no patológicos',
      color: '#3d5a73',
      definicion: 'Información sobre el estilo de vida, la vivienda y el contexto social del paciente: dónde y con quién vive, en qué condiciones, su alimentación, hábitos, y su exposición a tabaco, alcohol, otras sustancias y agentes ocupacionales.',
      clinica: 'Se interroga de forma sistemática, no como una pregunta abierta única — cada rubro (vivienda, convivencia, hábitos, tabaco, alcohol, ocupación) tiene preguntas dirigidas propias, porque el paciente rara vez ofrece esta información de manera espontánea.',
      fisiopatologia: `<div style="margin-bottom:14px;">
<strong style="color:#3d5a73;">Vivienda</strong>
<p style="margin:4px 0 0;">Se interroga el tipo de construcción (materiales del piso, techo y paredes: firme/loza vs. tierra/lámina/cartón) y si cuenta con los servicios básicos completos (agua potable intradomiciliaria, drenaje, electricidad, gas). No es un dato decorativo: una vivienda con piso de tierra se asocia a mayor prevalencia de parasitosis intestinal y de infección por <em>Helicobacter pylori</em>; las paredes de adobe o bahareque con grietas son el hábitat típico de la vinchuca (<em>Triatoma</em>), vector de la enfermedad de Chagas en zonas endémicas; y una estufa de leña o gas sin ventilación adecuada expone a intoxicación crónica por monóxido de carbono y a humo de biomasa (ver más abajo).</p>
</div>
<div style="margin-bottom:14px;">
<strong style="color:#3d5a73;">Hacinamiento</strong>
<p style="margin:4px 0 0;">Se define como <strong>más de 2.5 personas por dormitorio</strong> (criterio usado por el INEGI/CONEVAL en México; otros países usan &gt;2 o &gt;3 según la fuente). Se interroga cuántas habitaciones tiene la vivienda, cuántas personas viven ahí y con quiénes (pareja, hijos, otros familiares, personas ajenas a la familia). Tiene dos utilidades clínicas: epidemiológica (facilita la transmisión de enfermedades de contacto estrecho o aéreas — tuberculosis, escabiasis, infecciones respiratorias virales) y social (identifica quién puede convertirse en cuidador principal del paciente, o si el paciente mismo cuida a alguien más en casa — información clave para planear el alta o el apoyo domiciliario).</p>
</div>
<div style="margin-bottom:14px;">
<strong style="color:#3d5a73;">Convivencia con animales</strong>
<p style="margin:4px 0 0;">Qué especie, si conviven dentro de la vivienda, y si tienen esquema de desparasitación/vacunación vigente. Relevante para zoonosis (toxoplasmosis y gatos, rabia y perros/murciélagos, brucelosis y ganado, leptospirosis y roedores/agua contaminada, psitacosis y aves) y para enfermedad alérgica/asmática por sensibilización a epitelio animal.</p>
</div>
<div style="margin-bottom:14px;">
<strong style="color:#3d5a73;">Hábitos higiénico-dietéticos</strong>
<p style="margin:4px 0 0;">Frecuencia de baño y cambio de ropa, procedencia y tratamiento del agua para consumo (potable de red vs. de pozo/pipa sin hervir — riesgo de parasitosis y hepatitis A), y número de comidas al día. Aquí también se interroga el <strong>antecedente de Combe</strong>: contacto conocido, reciente o prolongado, con una persona con tuberculosis pulmonar activa (Combe positivo) o la ausencia de ese contacto (Combe negativo) — un dato epidemiológico clásico que orienta directamente el riesgo de tuberculosis en cualquier paciente con tos crónica o síntomas respiratorios prolongados.</p>
</div>
<div style="margin-bottom:14px;">
<strong style="color:#3d5a73;">Tabaquismo</strong>
<p style="margin:4px 0 0;">Se cuantifica con el <strong>índice tabáquico</strong> (índice paquetes-año): (cigarrillos fumados al día ÷ 20) × años fumando. Un índice ≥10 paquetes-año ya es clínicamente significativo; ≥20 se asocia a mayor riesgo de EPOC y cáncer pulmonar, y determina el umbral para tamizaje con TC de tórax de baja dosis en varias guías internacionales. También se interroga la edad de inicio, si dejó de fumar (y hace cuánto — el riesgo cardiovascular se reduce a la mitad al año de abstinencia) y la exposición pasiva (tabaquismo de segunda mano).</p>
</div>
<div style="margin-bottom:14px;">
<strong style="color:#3d5a73;">Exposición a biomasa</strong>
<p style="margin:4px 0 0;">El humo de leña, carbón o estiércol seco usado para cocinar o calentar la vivienda —típico de estufas abiertas en cocinas mal ventiladas, frecuente en zonas rurales— es una causa reconocida de EPOC en personas que nunca fumaron. Se considera una exposición significativa cuando supera aproximadamente <strong>100 horas-año</strong> (de forma práctica: cocinar diariamente con leña durante varios años). Es una de las causas más subdiagnosticadas de EPOC, sobre todo en mujeres de zonas rurales sin antecedente tabáquico.</p>
</div>
<div style="margin-bottom:14px;">
<strong style="color:#3d5a73;">Alcohol</strong>
<p style="margin:4px 0 0;">Se cuantifica en <strong>unidades estándar de alcohol</strong> (~14 g de etanol puro cada una; ver figura). Se considera consumo de riesgo/elevado: en hombres, &gt;4 unidades en una sola ocasión o &gt;14 unidades por semana; en mujeres, &gt;3 unidades en una ocasión o &gt;7 por semana. También conviene aplicar el cuestionario CAGE (¿ha sentido necesidad de disminuir? ¿le ha molestado que critiquen su consumo? ¿se ha sentido culpable? ¿ha necesitado beber en la mañana para calmar los nervios o la resaca?) — 2 o más respuestas afirmativas sugieren un problema de dependencia.</p>
</div>
<div style="margin-bottom:14px;">
<strong style="color:#3d5a73;">Toxicomanías</strong>
<p style="margin:4px 0 0;">Uso de cualquier sustancia psicoactiva no prescrita (marihuana, cocaína, metanfetaminas, opioides no médicos, inhalables, entre otras): sustancia, vía de consumo, frecuencia y última vez que la usó — dato relevante para el diagnóstico diferencial de múltiples síndromes agudos (dolor torácico, alteración del estado de alerta, arritmias) y para la interacción con tratamientos.</p>
</div>
<div>
<strong style="color:#3d5a73;">Ocupación y exposiciones laborales</strong>
<p style="margin:4px 0 0;">Es uno de los rubros que más se subinterroga, y a menudo el de mayor rendimiento diagnóstico en enfermedad pulmonar y oncológica ocupacional (ver figura). Ejemplos de alto rendimiento clínico: <strong>asbesto</strong> (construcción, aislamiento térmico, minería) — mesotelioma pleural y asbestosis, con una latencia característicamente muy larga (20-40 años desde la exposición); <strong>sílice</strong> (minería, canteros, arenado) — silicosis; <strong>polvo de carbón</strong> (minería del carbón) — neumoconiosis del minero; <strong>algodón</strong> (industria textil) — bisinosis; <strong>berilio</strong> (aeroespacial, electrónica) — beriliosis; <strong>solventes orgánicos y plomo</strong> — hepatotoxicidad, neurotoxicidad y saturnismo; <strong>plaguicidas organofosforados</strong> (trabajo agrícola) — síndrome colinérgico agudo; <strong>radiación ionizante</strong> — mayor riesgo de leucemia y otras neoplasias; personal de salud — riesgo biológico (hepatitis B, VIH, tuberculosis).</p>
</div>`,
      criterios_dx: 'Estos antecedentes explican por qué un paciente desarrolla ciertas enfermedades y con frecuencia son la clave del diagnóstico diferencial epidemiológico: tos crónica en un minero orienta a neumoconiosis, disnea progresiva en una mujer rural sin tabaquismo orienta a EPOC por biomasa, fiebre tras contacto con un enfermo de tuberculosis (Combe positivo) orienta a tuberculosis activa, y una adenopatía en alguien con exposición ocupacional a asbesto obliga a descartar mesotelioma.',
      figura: ['alcohol-unidades-tabla', 'exposicion-ocupacional-tabla']
    },
    {
      nombre: 'Antecedentes personales patológicos',
      color: '#3d5a73',
      definicion: 'Enfermedades crónicas diagnosticadas previamente, cirugías, hospitalizaciones, alergias, antecedentes transfusionales y esquema de vacunación — cada uno con los detalles que cambian el manejo, no solo el nombre del diagnóstico.',
      clinica: 'Se interroga activamente uno por uno — no basta con preguntar "¿tiene alguna enfermedad?", porque el paciente puede omitir por olvido o por no considerarlo relevante. Conviene recorrer un listado mental por sistemas (cardiovascular, endocrino, renal, hepático, respiratorio, oncológico) en vez de dejarlo abierto.',
      fisiopatologia: `<div style="margin-bottom:14px;">
<strong style="color:#3d5a73;">Enfermedades crónicas diagnosticadas</strong>
<p style="margin:4px 0 0;">No basta con el nombre del diagnóstico (hipertensión, diabetes, cardiopatías, enfermedad renal, hepatopatías, neumopatías, neoplasias, enfermedades tiroideas): se documenta también <strong>cuándo</strong> fue diagnosticada (fecha o año aproximado), el <strong>tratamiento actual completo</strong> (fármaco, dosis, frecuencia) y el <strong>apego</strong> al tratamiento (bueno, regular o malo, y por qué si es malo — costo, efectos adversos, olvido, falta de comprensión de la enfermedad). Un apego deficiente cambia por completo el diagnóstico diferencial: una "descompensación" puede ser en realidad el resultado esperable de haber abandonado el tratamiento, no una progresión inexplicada de la enfermedad.</p>
</div>
<div style="margin-bottom:14px;">
<strong style="color:#3d5a73;">Cirugías previas</strong>
<p style="margin:4px 0 0;">Procedimiento, fecha aproximada, y si hubo o no <strong>complicaciones</strong> (sangrado, infección del sitio quirúrgico, reintervención, complicaciones anestésicas). Una cirugía previa complicada puede predecir mayor riesgo en una cirugía futura y orienta hacia adherencias, alergias a materiales o predisposición a ciertas complicaciones.</p>
</div>
<div style="margin-bottom:14px;">
<strong style="color:#3d5a73;">Alergias</strong>
<p style="margin:4px 0 0;">No basta con el nombre del fármaco o alimento: se especifica el <strong>tipo de reacción</strong>, porque cambia radicalmente el riesgo real de una reexposición. Las reacciones de hipersensibilidad se clasifican en 4 tipos (Gell y Coombs, ver figura): Tipo I (inmediata, mediada por IgE — urticaria, angioedema, anafilaxia, en minutos), Tipo II (citotóxica, IgG/IgM contra antígenos de superficie celular — anemia hemolítica inducida por fármacos), Tipo III (por inmunocomplejos — enfermedad del suero, vasculitis) y Tipo IV (mediada por células T, retardada — dermatitis de contacto, exantema morbiliforme por fármacos, días después). Una intolerancia gastrointestinal simple (náusea, diarrea sin otros datos) NO es una alergia verdadera y no debe registrarse como tal.</p>
</div>
<div style="margin-bottom:14px;">
<strong style="color:#3d5a73;">Antecedentes transfusionales</strong>
<p style="margin:4px 0 0;">Número de transfusiones, motivo, y si hubo alguna reacción transfusional.</p>
</div>
<div>
<strong style="color:#3d5a73;">Esquema de vacunación</strong>
<p style="margin:4px 0 0;">Esquema completo según la edad, y vacunas especiales del adulto (influenza anual, neumocócica, herpes zóster, COVID-19). Sobre esta última vale la pena conocer el contexto: las vacunas de vector viral adenoviral (ChAdOx1/AstraZeneca) se asociaron a un síndrome trombótico-trombocitopénico inmune infrecuente (VITT), con una incidencia estimada de aproximadamente 1 caso por cada 100,000 dosis administradas; las vacunas de ARN mensajero (Pfizer, Moderna) no mostraron esa asociación específica a una tasa relevante. El beneficio poblacional de la vacunación superó ampliamente ese riesgo infrecuente, pero es un ejemplo real y bien documentado de por qué preguntar el esquema completo de vacunación —no solo "si está vacunado"— sigue siendo relevante.</p>
</div>`,
      criterios_dx: 'Modifica directamente el diagnóstico diferencial (ej. disnea en un paciente con antecedente de insuficiencia cardiaca orienta distinto que en uno con antecedente de EPOC) y el manejo farmacológico (ajuste de dosis en falla renal/hepática, interacciones, alergias antes de prescribir). El apego real al tratamiento de una enfermedad crónica es, con frecuencia, más determinante para el cuadro actual que el diagnóstico en sí.',
      figura: 'hipersensibilidad-tabla'
    },
    {
      nombre: 'Padecimiento actual (PA): cómo se escribe',
      color: '#3d5a73',
      definicion: 'La narración cronológica, en prosa, del síntoma o motivo de consulta desde su inicio hasta el momento presente — la sección de mayor peso diagnóstico de toda la historia clínica.',
      algoritmo: [
        'Abrir indicando edad, sexo y tiempo total de evolución — "Paciente masculino de 45 años, con cuadro clínico de 3 días de evolución caracterizado por…"',
        'Narrar en orden cronológico estricto, sin saltos hacia atrás y hacia adelante',
        'Incluir los "negativos pertinentes": síntomas que el paciente NO presenta y que ayudan a descartar diagnósticos (ej. "niega fiebre, niega disnea")',
        'Cerrar con el estado actual y el evento puntual que motivó la consulta hoy ("por qué hoy y no antes")'
      ],
      criterios_dx: 'Un PA bien escrito debería, por sí solo, permitir a otro médico que no vio al paciente generar una lista razonable de diagnósticos diferenciales — integra la caracterización semiológica completa del síntoma guía (ver ALICIA/SOCRATES) junto con los síntomas acompañantes y los tratamientos ya intentados. Es el estándar con el que se evalúa la calidad de una historia clínica en la práctica y en el examen.',
      figura: 'pa-timeline'
    },
    {
      nombre: 'Interrogatorio por aparatos y sistemas',
      color: '#3d5a73',
      definicion: 'Revisión sistemática, aparato por aparato, preguntando activamente por síntomas que el paciente no mencionó espontáneamente en el padecimiento actual.',
      clinica: 'Se hace de cabeza a pies o por sistemas (ver figura para el detalle de qué preguntar en cada uno), con preguntas breves y cerradas ("¿ha notado…?").',
      criterios_dx: 'Frecuentemente revela datos que cambian el diagnóstico diferencial — por ejemplo, un paciente que consulta por fatiga y en el interrogatorio dirigido refiere poliuria y polidipsia, orientando a diabetes mellitus no diagnosticada.',
      figura: 'ipas-checklist'
    },
    {
      nombre: 'Semiología del síntoma guía (ALICIA / SOCRATES)',
      color: '#3d5a73',
      definicion: 'Caracterización sistemática y completa del síntoma que motiva la consulta — junto con el padecimiento actual, la pieza de mayor rendimiento diagnóstico de toda la anamnesis.',
      clinica: 'Se apoya en dos mnemotecnias equivalentes. En español, <strong>ALICIA</strong>: Aparición, Localización, Intensidad, Carácter, Irradiación, Atenuantes/agravantes (ver figura). En inglés, <strong>SOCRATES</strong> cubre lo mismo con dos componentes explícitos adicionales: Associations (síntomas acompañantes) y Time course (cronología) (ver figura). Ejemplo aplicado a dolor torácico: inicio súbito vs. progresivo, localización retroesternal vs. costal, irradiación a brazo o mandíbula, calidad opresiva vs. punzante, relación con el esfuerzo o la respiración, síntomas acompañantes como diaforesis o disnea.',
      criterios_dx: 'No todos los síntomas completan las 6-8 características por igual — hay que reconocer cuándo un componente no aplica en vez de forzarlo. Ejemplos: la fiebre no tiene "localización" en el sentido clásico (no se puede señalar un punto); el prurito rara vez tiene irradiación definida; la astenia no tiene carácter ni localización aplicables. Aun así, siempre conviene intentar cada componente antes de descartarlo — cada uno modifica el diagnóstico diferencial y orienta qué estudios pedir primero.',
      figura: ['alicia-list', 'socrates-list']
    },
    {
      nombre: 'Dolor',
      color: '#8c3a34',
      icono: ICONOS.dolor,
      definicion: 'Experiencia sensorial y emocional desagradable asociada a daño tisular real o potencial. Se caracteriza siempre con ALICIA/SOCRATES.',
      fisiopatologia: `<div style="margin-bottom:14px;">
<strong style="color:#8c3a34;">Mecanismo</strong>
<p style="margin:4px 0 0;">Los nociceptores periféricos transducen el estímulo lesivo y lo transmiten por dos tipos de fibra: las <strong>Aδ</strong> (mielinizadas, conducción rápida) generan el "primer dolor" —agudo y bien localizado—; las <strong>C</strong> (amielínicas, conducción lenta) generan el "segundo dolor" —sordo, difuso y persistente—. Ambas hacen sinapsis en el asta dorsal medular, decusan, y ascienden por el tracto espinotalámico lateral hacia el tálamo y la corteza somatosensorial. Es la misma diferencia que hay entre la sensación instantánea y precisa de pisar una tachuela (Aδ) y el ardor sostenido que queda después (C).</p>
<p style="margin:8px 0 0;">Según el territorio de origen, el mecanismo tiene 3 variantes con "personalidad" clínica distinta:</p>
<ul style="margin:6px 0 0;padding-left:18px;">
<li style="margin-bottom:4px;"><strong>Nociceptivo somático</strong> (piel, músculo, hueso, articulaciones): alta densidad de receptores y representación cortical precisa, por lo que el paciente puede señalar el punto exacto con un dedo y el dolor se agrava claramente con el movimiento o la presión local — es, en cierto modo, como tener un mapa de alta resolución (una fotografía nítida) de esa zona del cuerpo.</li>
<li style="margin-bottom:4px;"><strong>Nociceptivo visceral</strong> (vísceras huecas y sólidas): densidad de receptores mucho menor y representación cortical difusa, por lo que el dolor es mal localizado y el paciente típicamente lo señala con toda la mano abierta sobre una región amplia, no con un dedo — como intentar ubicar algo en una fotografía borrosa o fuera de foco.</li>
<li><strong>Neuropático</strong> (lesión del propio sistema nervioso, no del tejido que duele): actividad ectópica de axones dañados, sin que exista ya ningún estímulo lesivo real en el territorio donde se siente — el dolor es quemante, con descargas eléctricas y disestesias. Es como un cable eléctrico pelado que sigue mandando señal aunque nadie lo esté tocando.</li>
</ul>
<p style="margin:8px 0 0;">El <strong>dolor referido</strong> se explica por el mecanismo de convergencia-proyección de Ruch: las neuronas de segundo orden del asta dorsal reciben aferencias viscerales y somáticas del mismo segmento medular, y la corteza interpreta la señal como proveniente del territorio somático, no del visceral real (ver figura) — dicho de otro modo, ambas vías comparten el mismo "cable" hacia el cerebro, que nunca aprendió a distinguir de cuál de los dos extremos vino la señal. La inflamación local sensibiliza los nociceptores (bradicinina, prostaglandinas, sustancia P — sensibilización periférica) y puede amplificar la respuesta a nivel medular (sensibilización central: hiperalgesia, alodinia, es decir, dolor ante un estímulo que normalmente no debería dolerlo). Es, en esencia, como bajar el volumen necesario para que la alarma se dispare: con sensibilización, estímulos cada vez más pequeños bastan para generar dolor.</p>
</div>
<div>
<strong style="color:#8c3a34;">Clasificación</strong>
<p style="margin:4px 0 0;">Por duración: <strong>agudo</strong> (&lt;3 meses, cumple una función protectora clara) o <strong>crónico</strong> (≥3 meses, ya perdió buena parte de su valor de alarma y se convierte en la enfermedad misma).</p>
</div>`,
      clinica: 'Se interroga con ALICIA/SOCRATES completo, prestando especial atención a si el paciente puede señalar el punto exacto con un dedo (más compatible con somático) o solo señala una región amplia con la mano (más compatible con visceral).',
      criterios_dx: 'La localización, la irradiación y la relación con desencadenantes (esfuerzo físico, alimentos, movimiento, respiración) son las variables con mayor rendimiento diagnóstico para orientar el origen del dolor.',
      dx_diferencial: 'Dolor torácico: cardiovascular (isquémico, pericárdico, aórtico), pleuropulmonar, digestivo (esofágico, biliar), musculoesquelético, psicógeno. Dolor abdominal: según cuadrante y órgano subyacente.',
      figura: ['dolor-referido']
    },
    {
      nombre: 'Fiebre',
      color: '#8c3a34',
      icono: ICONOS.fiebre,
      definicion: 'Elevación de la temperatura corporal por encima de 38.0 °C, mediada por pirógenos que reajustan el centro termorregulador hipotalámico (ver figura de rangos).',
      fisiopatologia: `<div style="margin-bottom:14px;">
<strong style="color:#8c3a34;">Mecanismo</strong>
<p style="margin:4px 0 0;">Los pirógenos exógenos (lipopolisacárido bacteriano, toxinas, componentes virales) activan monocitos/macrófagos, que liberan pirógenos endógenos — principalmente IL-1β, IL-6 y TNF-α. Estas citocinas actúan sobre el órgano vascular de la lámina terminal (OVLT), una región del hipotálamo anterior con barrera hematoencefálica fenestrada, e inducen la expresión de COX-2 local, generando prostaglandina E2 (PGE2). La PGE2 se une a receptores EP3 en el núcleo preóptico ventromedial y eleva el punto de ajuste ("set point") termorregulador hipotalámico; el organismo responde generando y conservando calor (vasoconstricción cutánea, escalofríos, conducta de abrigo) hasta alcanzar ese nuevo set point. Es exactamente lo que ocurre al subir el termostato de una casa: el sistema de calefacción no está "descompuesto", simplemente persigue activamente una temperatura objetivo más alta, y no se apaga hasta llegar al número marcado.</p>
<p style="margin:8px 0 0;">Los antipiréticos (AINEs, paracetamol) inhiben la COX y reducen la PGE2, devolviendo el set point a su valor normal. Por eso NO son eficaces en la <strong>hipertermia</strong>, donde el set point nunca cambió: el problema ahí es que el sistema de disipación de calor (sudoración, vasodilatación) falla o es insuficiente frente a una ganancia de calor excesiva (golpe de calor, hipertermia maligna, síndrome neuroléptico maligno, síndrome serotoninérgico). Siguiendo la misma analogía: es como intentar enfriar una casa bajando el número del termostato cuando en realidad el aire acondicionado está apagado — el termostato ya estaba bien puesto, lo que falla es el mecanismo de enfriamiento.</p>
</div>
<div style="margin-bottom:14px;">
<strong style="color:#8c3a34;">Clasificación por patrón</strong>
<p style="margin:4px 0 0;">Continua (oscila &lt;1 °C en 24 h, sin llegar a lo normal), remitente (oscila &gt;1 °C, sin llegar a lo normal), intermitente (llega a lo normal entre picos) y héctica o séptica (picos muy altos alternados con caídas a lo normal, típica de abscesos) (ver figura).</p>
</div>
<div>
<strong style="color:#8c3a34;">Clasificación por duración</strong>
<p style="margin:4px 0 0;">Aguda (&lt;2 semanas) vs. fiebre de origen desconocido (FOD). Los criterios clásicos de Petersdorf para FOD son: temperatura &gt;38.3 °C en varias ocasiones, duración &gt;3 semanas, y ausencia de diagnóstico pese a al menos una semana de estudio hospitalario adecuado (los criterios modernos de Durack y Street ya no exigen la hospitalización, y distinguen subcategorías: FOD clásica, nosocomial, neutropénica y asociada a VIH). Ante una FOD, el diferencial se amplía más allá de lo infeccioso, hacia causas neoplásicas (linfoma, hipernefroma), autoinmunes (arteritis de células gigantes, enfermedad de Still) y farmacológicas.</p>
</div>`,
      clinica: 'El umbral y la fiabilidad de la medición dependen del sitio donde se toma (ver figura); también se interrogan los síntomas acompañantes que orienten el foco (tos, disuria, cefalea, exantema, artralgias).',
      criterios_dx: 'El patrón febril y los síntomas acompañantes orientan el foco infeccioso probable — un patrón héctico con escalofríos intensos, por ejemplo, sugiere colección purulenta (absceso, colangitis, pielonefritis complicada) más que una infección viral simple.',
      dx_diferencial: 'Infecciosa (la más frecuente), neoplásica, autoinmune/inflamatoria, medicamentosa (fiebre por fármacos), tromboembólica.',
      figura: ['fiebre-temperatura', 'fiebre-patrones']
    },
    {
      nombre: 'Disnea',
      color: '#8c3a34',
      icono: ICONOS.disnea,
      definicion: 'Sensación subjetiva de falta de aire o dificultad para respirar, desproporcionada al esfuerzo realizado.',
      fisiopatologia: 'Mecanismo multifactorial e integrador: quimiorreceptores centrales (bulbares, sensibles a pCO2/pH del LCR) y periféricos (cuerpos carotídeos y aórticos, sensibles a pO2), mecanorreceptores pulmonares (receptores de estiramiento y receptores J yuxtacapilares, activados por congestión intersticial) y receptores de la pared torácica envían información aferente al tronco encefálico. La disnea surge por un desacople neuromecánico: discordancia entre el impulso ventilatorio eferente que emite el centro respiratorio y la respuesta mecánica real del sistema respiratorio. Esto explica sus 3 cualidades distintas: sensación de esfuerzo/trabajo respiratorio (enfermedad neuromuscular, obstrucción), opresión torácica (broncoconstricción, vía receptores de estiramiento) y hambre de aire/asfixia (hipercapnia y acidosis, vía quimiorreceptores). Se gradúa con escalas funcionales, la más usada es la mMRC (ver figura). También se caracteriza por su instalación (aguda vs. crónica) y por la posición que la mejora o empeora: ortopnea (empeora acostado), platipnea (empeora sentado/de pie) y trepopnea (empeora en decúbito lateral).',
      clinica: 'Se interroga su relación con el esfuerzo (grado mMRC), su instalación temporal, la posición que la modifica, y los síntomas acompañantes (dolor torácico, tos, edema de miembros inferiores).',
      criterios_dx: 'La ortopnea y la disnea paroxística nocturna orientan fuertemente a insuficiencia cardiaca; la disnea de instalación súbita orienta a tromboembolia pulmonar, neumotórax o edema agudo de pulmón.',
      dx_diferencial: 'Cardiovascular (insuficiencia cardiaca, isquemia), respiratoria (EPOC, asma, neumonía, TEP), anemia, acidosis metabólica, causa psicógena (ansiedad).',
      figura: 'mmrc-scale'
    },
    {
      nombre: 'Tos',
      color: '#8c3a34',
      icono: ICONOS.tos,
      definicion: 'Reflejo de defensa de la vía aérea ante un estímulo mecánico, químico o inflamatorio.',
      fisiopatologia: `<div style="margin-bottom:14px;">
<strong style="color:#8c3a34;">Mecanismo</strong>
<p style="margin:4px 0 0;">El reflejo tusígeno se inicia en receptores de adaptación rápida (RARs) y fibras C sensibles a irritantes mecánicos/químicos, ubicados en laringe, tráquea y bronquios de gran calibre. La señal aferente viaja por el nervio vago hasta el centro de la tos en el bulbo raquídeo, que coordina 3 fases: inspiratoria (inspiración profunda), compresiva (cierre glótico con contracción espiratoria forzada, generando presión intratorácica elevada) y expulsiva (apertura súbita de la glotis con flujo espiratorio explosivo que arrastra secreciones o cuerpos extraños). Es la misma secuencia que disparar un extintor: primero se "carga" (inspiración), luego se "presuriza" (cierre glótico y contracción forzada), y por último se "dispara" (apertura súbita con flujo explosivo).</p>
</div>
<div>
<strong style="color:#8c3a34;">Clasificación</strong>
<p style="margin:4px 0 0;">Por duración y por productividad (ver figura) — dos preguntas simples que, combinadas, ya acotan bastante el diagnóstico diferencial antes de pedir cualquier estudio.</p>
</div>`,
      clinica: 'Se interroga duración, productividad, horario (nocturna vs. diurna), relación con la posición o los alimentos, y síntomas acompañantes.',
      criterios_dx: 'La tos crónica productiva orienta a EPOC o bronquiectasias; la tos seca crónica en un paciente que toma IECA orienta a efecto adverso farmacológico; la hemoptisis siempre amerita descartar neoplasia pulmonar y tuberculosis.',
      dx_diferencial: 'Infecciosa, EPOC/asma, reflujo gastroesofágico, goteo posnasal, efecto adverso de IECA, insuficiencia cardiaca, neoplasia pulmonar.',
      figura: 'tos-clasificacion-tabla'
    },
    {
      nombre: 'Astenia, fatiga y pérdida de peso involuntaria',
      color: '#8c3a34',
      icono: ICONOS.astenia,
      definicion: 'Sensación subjetiva de falta de energía (astenia) o incapacidad de mantener un esfuerzo (fatiga). La pérdida de peso involuntaria significativa es &gt;5% del peso corporal en 6-12 meses, sin dieta intencional.',
      fisiopatologia: 'Se distingue fatiga central (originada en el SNC, mediada por neurotransmisores como la serotonina y por citocinas proinflamatorias — IL-6, TNF-α — que inducen la llamada "conducta de enfermedad" o sickness behavior: el mismo eje inflamatorio que genera la fiebre, lo que explica por qué astenia y fiebre coexisten con frecuencia en procesos infecciosos, neoplásicos y autoinmunes) de fatiga periférica (falla neuromuscular: depleción de ATP/glucógeno, acumulación de metabolitos musculares). Si mejora con el descanso, orienta a una causa fisiológica o funcional; si no mejora con el reposo, orienta a causa orgánica (anemia, hipotiroidismo, neoplasia, enfermedad crónica sistémica).',
      clinica: 'Se interroga la cronología, la relación con el sueño o el reposo, y siempre se acompaña de una búsqueda dirigida de síntomas de alarma como fiebre, sudoración nocturna profusa o sangrado.',
      criterios_dx: 'La combinación de astenia, pérdida de peso involuntaria y sudoración nocturna (los llamados "síntomas B") es una tríada de alarma que obliga a descartar neoplasia, tuberculosis e infección por VIH.',
      dx_diferencial: 'Anemia, hipotiroidismo, depresión, neoplasia, enfermedad crónica sistémica (renal, hepática), infecciones crónicas.'
    }
  ]
};

export const figuras = {
  'alicia-list': {
    titulo: 'ALICIA',
    html: letraLista('#3d5a73', [
      ['A', 'parición', 'inicio: cuándo y cómo comenzó'],
      ['L', 'ocalización', 'dónde exactamente'],
      ['I', 'ntensidad', 'qué tan fuerte, habitualmente escala 0-10'],
      ['C', 'arácter', 'cualidad o tipo (opresivo, punzante, cólico, urente…)'],
      ['I', 'rradiación', 'hacia dónde se extiende'],
      ['A', 'tenuantes y agravantes', 'qué lo mejora o empeora']
    ]),
    fuente: 'Argente-Álvarez, Semiología Médica'
  },
  'socrates-list': {
    titulo: 'SOCRATES',
    html: letraLista('#3d5a73', [
      ['S', 'ite', 'localización'],
      ['O', 'nset', 'inicio: súbito o gradual'],
      ['C', 'haracter', 'calidad: opresivo, punzante, cólico, urente…'],
      ['R', 'adiation', 'irradiación'],
      ['A', 'ssociations', 'síntomas acompañantes'],
      ['T', 'ime course', 'cronología: constante/intermitente, duración'],
      ['E', 'xacerbating/relieving factors', 'factores agravantes y atenuantes'],
      ['S', 'everity', 'intensidad, habitualmente escala 0-10']
    ]),
    fuente: "Bates' Guide to Physical Examination and History Taking"
  },
  'fiebre-temperatura': {
    titulo: 'Temperatura corporal: rangos y sitio de medición',
    html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(72px,1fr));gap:6px;">
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 8px;"><strong>Normal</strong><br>36.5-37.2°C</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 8px;"><strong>Febrícula</strong><br>37.3-38.0°C</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 8px;"><strong>Fiebre</strong><br>&gt;38.0°C</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 8px;"><strong>Hiperpirexia</strong><br>&gt;41.0°C</div>
    </div>
    <div style="font-size:10.5px;color:var(--ink-faint);text-transform:uppercase;letter-spacing:.04em;font-weight:700;margin:12px 0 6px;">Umbral de fiebre según el sitio</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(72px,1fr));gap:6px;">
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 8px;"><strong>Axilar</strong><br>&gt;37.2°C</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 8px;"><strong>Oral</strong><br>&gt;37.5°C</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 8px;"><strong>Rectal</strong><br>&gt;38.0°C</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:6px 8px;"><strong>Timpánico</strong><br>&gt;37.5-38.0°C</div>
    </div>
    <p style="font-size:11.5px;color:var(--ink-faint);margin:8px 0 0;">El axilar es el menos preciso pero el más usado en consulta; el rectal es el más cercano a la temperatura central; el oral se afecta por ingesta reciente de líquidos.</p>`,
    fuente: "Bates' Guide to Physical Examination and History Taking; DeGowin's Diagnostic Examination"
  },
  'mmrc-scale': {
    titulo: 'Escala de disnea mMRC (Modified Medical Research Council)',
    html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:6px;">
      <div style="border:1px solid var(--line);border-radius:8px;padding:7px 9px;"><strong>Grado 0</strong><br>Disnea solo con actividad física intensa.</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:7px 9px;"><strong>Grado 1</strong><br>Al andar rápido en llano o subir una pendiente leve.</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:7px 9px;"><strong>Grado 2</strong><br>Camina más despacio que otros de su edad, o se detiene al caminar en llano.</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:7px 9px;"><strong>Grado 3</strong><br>Se detiene a respirar tras ~100 m o pocos minutos en llano.</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:7px 9px;"><strong>Grado 4</strong><br>Le impide salir de casa, o aparece al vestirse.</div>
    </div>`,
    fuente: 'Bestall et al. 1999; escala usada por GOLD para EPOC'
  },
  'fiebre-patrones': {
    titulo: 'Patrones de fiebre (esquemático)',
    html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;">
      ${patronFiebreSVG('pat-cont', [38.6, 39.0, 38.7, 39.1, 38.5, 38.8], 'Continua')}
      ${patronFiebreSVG('pat-rem', [39.5, 38.2, 39.6, 38.1, 39.4, 38.3], 'Remitente')}
      ${patronFiebreSVG('pat-int', [39.5, 37.0, 39.6, 36.9, 39.3, 37.1], 'Intermitente')}
      ${patronFiebreSVG('pat-hec', [40.2, 36.5, 40.5, 36.3, 40.0, 36.8], 'Héctica/séptica')}
    </div>`,
    fuente: "Forma del patrón descrita en Surós y en DeGowin's Diagnostic Examination (curvas ilustrativas, no datos de un paciente real)"
  },
  'dolor-referido': {
    titulo: 'Mapa de irradiación del dolor visceral (dolor referido)',
    html: `<img src="topics/historia-clinica/assets/dolor-referido-infografia.png" alt="Infografía de dolor referido con vista anterior y posterior del cuerpo. Tabla con 7 patrones clásicos: (1) infarto agudo de miocardio → hombro izquierdo, cara medial del brazo izquierdo hasta 4º y 5º dedos, cuello, mandíbula y región interescapular, por convergencia con aferentes somáticos de C4-T1; (2) colecistitis aguda → hipocondrio derecho, hombro y región escapular derechos, segmentos torácicos T7-T9; (3) pancreatitis aguda → epigastrio con irradiación directa a la región medio-dorsal, T7-T9 (T10 en ocasiones); (4) cólico renal → flanco, fosa ilíaca, ingle y región genital ipsilateral, T10-L2; (5) apendicitis aguda → dolor periumbilical inicial que migra a fosa ilíaca derecha, fibras viscerales T10 y somáticas L1; (6) úlcera péptica perforada → dolor epigástrico que irradia a la espalda, T6-T9; (7) irritación diafragmática/signo de Kehr → hombro ipsilateral, especialmente el izquierdo, vía nervio frénico C3-C5. Incluye diagrama del mecanismo: las fibras aferentes viscerales y somáticas convergen en la misma neurona de segundo orden de la médula espinal, y el cerebro interpreta la señal como proveniente del territorio somático.">`,
    fuente: null
  },
  'pa-timeline': {
    titulo: 'Ejemplo: línea de tiempo de un padecimiento actual',
    html: `<div style="display:flex;gap:14px;">
      <div style="flex:1;border-top:2px solid var(--line);padding-top:10px;position:relative;">
        <div style="width:9px;height:9px;border-radius:50%;background:#3d5a73;position:absolute;top:-5.5px;left:0;"></div>
        <div style="font-size:11px;font-weight:700;color:var(--ink);">Hace 3 días</div>
        <div style="font-size:11.5px;color:var(--ink-dim);margin-top:2px;">Inicio insidioso, dolor retroesternal opresivo leve.</div>
      </div>
      <div style="flex:1;border-top:2px solid var(--line);padding-top:10px;position:relative;">
        <div style="width:9px;height:9px;border-radius:50%;background:#3d5a73;position:absolute;top:-5.5px;left:0;"></div>
        <div style="font-size:11px;font-weight:700;color:var(--ink);">Hoy</div>
        <div style="font-size:11.5px;color:var(--ink-dim);margin-top:2px;">Se intensifica con el esfuerzo, aparece diaforesis.</div>
      </div>
      <div style="flex:1;border-top:2px solid var(--line);padding-top:10px;position:relative;">
        <div style="width:9px;height:9px;border-radius:50%;background:#8c3a34;position:absolute;top:-5.5px;left:0;"></div>
        <div style="font-size:11px;font-weight:700;color:var(--ink);">Ahora</div>
        <div style="font-size:11.5px;color:var(--ink-dim);margin-top:2px;">Acude a urgencias — motivo puntual de la consulta.</div>
      </div>
    </div>
    <div style="margin-top:14px;padding:10px 12px;background:var(--panel);border:1px solid var(--line);border-radius:8px;font-size:12px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Negativos pertinentes incluidos:</strong> "niega disnea, niega palpitaciones, niega dolor con la respiración" — ayuda a orientar entre causa cardiovascular y pleuropulmonar.
    </div>`,
    fuente: 'Adaptado del caso de dolor torácico usado en la autoevaluación de este tema'
  },
  'alcohol-unidades-tabla': {
    titulo: 'Unidades estándar de alcohol por tipo de bebida',
    html: `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Bebida</th>
        <th style="text-align:left;padding:5px 6px;">Volumen de referencia</th>
        <th style="text-align:left;padding:5px 6px;">% alcohol aprox.</th>
        <th style="text-align:left;padding:5px 6px;">Unidades (~14 g etanol c/u)</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;">Cerveza regular</td><td style="padding:5px 6px;">355 mL (1 lata/botella)</td><td style="padding:5px 6px;">~5%</td><td style="padding:5px 6px;">1</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;">Cerveza alta graduación</td><td style="padding:5px 6px;">355 mL</td><td style="padding:5px 6px;">~8-9%</td><td style="padding:5px 6px;">~1.5</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;">Vino</td><td style="padding:5px 6px;">150 mL (1 copa)</td><td style="padding:5px 6px;">~12%</td><td style="padding:5px 6px;">1</td></tr>
        <tr><td style="padding:5px 6px;">Licor destilado (whisky, vodka, tequila)</td><td style="padding:5px 6px;">45 mL (1 caballito)</td><td style="padding:5px 6px;">~40%</td><td style="padding:5px 6px;">1</td></tr>
      </tbody>
    </table>
    </div>
    <p style="font-size:11px;color:var(--ink-faint);margin:8px 0 0;">Consumo de riesgo: hombres &gt;4 unidades/ocasión o &gt;14/semana; mujeres &gt;3 unidades/ocasión o &gt;7/semana.</p>`,
    fuente: 'World Health Organization, Global Status Report on Alcohol and Health 2018'
  },
  'exposicion-ocupacional-tabla': {
    titulo: 'Exposiciones ocupacionales de alto rendimiento diagnóstico',
    html: `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Agente</th>
        <th style="text-align:left;padding:5px 6px;">Ocupación típica</th>
        <th style="text-align:left;padding:5px 6px;">Enfermedad asociada</th>
        <th style="text-align:left;padding:5px 6px;">Dato clave</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;">Asbesto</td><td style="padding:5px 6px;">Construcción, aislamiento, minería</td><td style="padding:5px 6px;">Mesotelioma pleural, asbestosis</td><td style="padding:5px 6px;">Latencia de 20-40 años</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;">Sílice</td><td style="padding:5px 6px;">Minería, canteros, arenado</td><td style="padding:5px 6px;">Silicosis</td><td style="padding:5px 6px;">Fibrosis nodular en lóbulos superiores</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;">Polvo de carbón</td><td style="padding:5px 6px;">Minería del carbón</td><td style="padding:5px 6px;">Neumoconiosis del minero</td><td style="padding:5px 6px;">—</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;">Algodón</td><td style="padding:5px 6px;">Industria textil</td><td style="padding:5px 6px;">Bisinosis</td><td style="padding:5px 6px;">"Opresión torácica del lunes"</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;">Berilio</td><td style="padding:5px 6px;">Aeroespacial, electrónica</td><td style="padding:5px 6px;">Beriliosis</td><td style="padding:5px 6px;">Simula sarcoidosis</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;">Plaguicidas organofosforados</td><td style="padding:5px 6px;">Trabajo agrícola</td><td style="padding:5px 6px;">Síndrome colinérgico agudo</td><td style="padding:5px 6px;">Tratamiento: atropina/pralidoxima</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;">Radiación ionizante</td><td style="padding:5px 6px;">Radiología, minería de uranio</td><td style="padding:5px 6px;">Leucemia, otras neoplasias</td><td style="padding:5px 6px;">—</td></tr>
        <tr><td style="padding:5px 6px;">Plomo</td><td style="padding:5px 6px;">Fundición, baterías, pintura antigua</td><td style="padding:5px 6px;">Saturnismo</td><td style="padding:5px 6px;">Anemia con punteado basófilo</td></tr>
      </tbody>
    </table>
    </div>`,
    fuente: 'LaDou & Harrison, CURRENT Occupational and Environmental Medicine'
  },
  'hipersensibilidad-tabla': {
    titulo: 'Reacciones de hipersensibilidad (Gell y Coombs)',
    html: `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Tipo</th>
        <th style="text-align:left;padding:5px 6px;">Mecanismo</th>
        <th style="text-align:left;padding:5px 6px;">Ejemplo clínico</th>
        <th style="text-align:left;padding:5px 6px;">Tiempo</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>I</strong></td><td style="padding:5px 6px;">IgE, degranulación de mastocitos</td><td style="padding:5px 6px;">Anafilaxia, urticaria, angioedema</td><td style="padding:5px 6px;">Minutos</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>II</strong></td><td style="padding:5px 6px;">IgG/IgM contra antígenos de superficie celular (citotóxica)</td><td style="padding:5px 6px;">Anemia hemolítica inducida por fármacos</td><td style="padding:5px 6px;">Horas-días</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>III</strong></td><td style="padding:5px 6px;">Inmunocomplejos</td><td style="padding:5px 6px;">Enfermedad del suero, vasculitis</td><td style="padding:5px 6px;">Días (1-3 semanas)</td></tr>
        <tr><td style="padding:5px 6px;"><strong>IV</strong></td><td style="padding:5px 6px;">Células T (retardada)</td><td style="padding:5px 6px;">Dermatitis de contacto, exantema morbiliforme por fármacos</td><td style="padding:5px 6px;">Días</td></tr>
      </tbody>
    </table>
    </div>
    <p style="font-size:11px;color:var(--ink-faint);margin:8px 0 0;">Una intolerancia gastrointestinal simple (náusea, diarrea sin otros datos) NO es una alergia verdadera y no debe registrarse como tal.</p>`,
    fuente: 'Gell & Coombs, Clinical Aspects of Immunology, 1963'
  },
  'ipas-checklist': {
    titulo: 'Interrogatorio por aparatos y sistemas: qué preguntar en cada uno',
    html: `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Sistema</th>
        <th style="text-align:left;padding:5px 6px;">Preguntar activamente por</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>General</strong></td><td style="padding:5px 6px;">Fiebre, escalofríos, sudoración nocturna, cambios de peso, astenia, cambios del apetito</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Piel y faneras</strong></td><td style="padding:5px 6px;">Rash, prurito, cambios de color, lesiones nuevas, cambios en lunares, caída de cabello, cambios ungueales</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Cabeza y cuello</strong></td><td style="padding:5px 6px;">Cefalea, masas cervicales, disfagia, odinofagia, cambios de voz</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Ojos</strong></td><td style="padding:5px 6px;">Cambios visuales, dolor ocular, diplopía, uso de lentes</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Oídos, nariz, garganta</strong></td><td style="padding:5px 6px;">Hipoacusia, acúfenos, otalgia, epistaxis, congestión nasal</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Cardiovascular</strong></td><td style="padding:5px 6px;">Dolor torácico, palpitaciones, disnea de esfuerzo, ortopnea, disnea paroxística nocturna, edema de miembros inferiores, síncope</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Respiratorio</strong></td><td style="padding:5px 6px;">Tos, expectoración, hemoptisis, disnea, sibilancias, dolor pleurítico</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Digestivo</strong></td><td style="padding:5px 6px;">Náusea, vómito, dolor abdominal, cambios del hábito intestinal, hematemesis, melena, rectorragia, ictericia</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Genitourinario</strong></td><td style="padding:5px 6px;">Disuria, hematuria, poliuria, nicturia, incontinencia; ciclo menstrual/sangrado anormal (mujeres); disfunción eréctil/síntomas prostáticos (hombres)</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Neurológico</strong></td><td style="padding:5px 6px;">Cefalea, mareo/vértigo, debilidad, parestesias, alteración de la marcha, convulsiones, cambios cognitivos</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Endocrino</strong></td><td style="padding:5px 6px;">Intolerancia al frío/calor, poliuria, polidipsia, cambios de peso inexplicados, hirsutismo</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Hematológico</strong></td><td style="padding:5px 6px;">Sangrados anormales, equimosis fáciles, adenopatías, palidez</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Osteomuscular</strong></td><td style="padding:5px 6px;">Dolor articular, rigidez matutina, edema articular, debilidad muscular, limitación funcional</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Psiquiátrico</strong></td><td style="padding:5px 6px;">Estado de ánimo, ansiedad, alteraciones del sueño, ideación suicida</td></tr>
      </tbody>
    </table>
    </div>`,
    fuente: "Bates' Guide to Physical Examination and History Taking"
  },
  'tos-clasificacion-tabla': {
    titulo: 'Clasificación de la tos',
    html: `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Eje</th>
        <th style="text-align:left;padding:5px 6px;">Categoría</th>
        <th style="text-align:left;padding:5px 6px;">Nota</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Duración</strong></td><td style="padding:5px 6px;">Aguda (&lt;3 semanas)</td><td style="padding:5px 6px;">Casi siempre infecciosa (viral)</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"></td><td style="padding:5px 6px;">Subaguda (3-8 semanas)</td><td style="padding:5px 6px;">Con frecuencia posinfecciosa (hiperreactividad bronquial transitoria)</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"></td><td style="padding:5px 6px;">Crónica (&gt;8 semanas)</td><td style="padding:5px 6px;">Descartar EPOC, asma, reflujo, goteo posnasal, IECA</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Productividad</strong></td><td style="padding:5px 6px;">Seca (no productiva)</td><td style="padding:5px 6px;">Irritativa, IECA, asmática, intersticial</td></tr>
        <tr><td style="padding:5px 6px;"></td><td style="padding:5px 6px;">Productiva</td><td style="padding:5px 6px;">Describir color, cantidad y presencia de sangre del esputo</td></tr>
      </tbody>
    </table>
    </div>`,
    fuente: "Bates' Guide to Physical Examination; Canning et al. Chest 2014"
  }
};

export const compCites = {
  'Estructura de la historia clínica': { definicion: [1, 2], criterios_dx: [2] },
  'Antecedentes personales no patológicos': { definicion: [2, 4], clinica: [2], fisiopatologia: [10, 11, 12, 15], criterios_dx: [11, 15] },
  'Antecedentes personales patológicos': { definicion: [1, 2], clinica: [1], fisiopatologia: [13, 14], criterios_dx: [3, 14] },
  'Padecimiento actual (PA): cómo se escribe': { definicion: [1, 2], criterios_dx: [1, 2, 4] },
  'Interrogatorio por aparatos y sistemas': { definicion: [1, 3], clinica: [1], criterios_dx: [3] },
  'Semiología del síntoma guía (ALICIA / SOCRATES)': { definicion: [1, 4], clinica: [1, 2], criterios_dx: [4] },
  'Dolor': { definicion: [1, 4], fisiopatologia: [1, 2, 6], clinica: [1], criterios_dx: [1] },
  'Fiebre': { definicion: [3], fisiopatologia: [3, 4, 5, 16, 17], clinica: [1, 3], criterios_dx: [3] },
  'Disnea': { definicion: [1], fisiopatologia: [1, 7], clinica: [1, 3], criterios_dx: [1] },
  'Tos': { definicion: [1], fisiopatologia: [1, 3, 8], clinica: [1, 3], criterios_dx: [1] },
  'Astenia, fatiga y pérdida de peso involuntaria': { definicion: [2, 3], fisiopatologia: [2, 9], clinica: [2], criterios_dx: [3] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {};
export const escalaCalc = {};
export const diagCites = { clinica: [1, 2] };
export const clasificacionCite = [];
export const seguimientoCite = [];
export const compGroups = [
  { title: 'Estructura y documentación', items: ['Estructura de la historia clínica'] },
  { title: 'Antecedentes', items: ['Antecedentes personales no patológicos', 'Antecedentes personales patológicos'] },
  { title: 'Motivo de consulta y padecimiento actual', items: ['Padecimiento actual (PA): cómo se escribe'] },
  { title: 'Interrogatorio dirigido', items: ['Interrogatorio por aparatos y sistemas', 'Semiología del síntoma guía (ALICIA / SOCRATES)'] },
  { title: 'Síntomas cardinales frecuentes', items: ['Dolor', 'Fiebre', 'Disnea', 'Tos', 'Astenia, fatiga y pérdida de peso involuntaria'] }
];
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Metodología' },
  { id: 'complicaciones', label: 'Componentes y síntomas cardinales' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
