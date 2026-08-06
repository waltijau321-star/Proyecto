// topics/historia-clinica/content.js — Semiología 1: Historia Clínica y Anamnesis Dirigida.
// Contenido basado en manuales clásicos de propedéutica y semiología (ver bibliografía).
// Estructura idéntica al contrato del motor, siguiendo topics/_template-semiologia/.
// Sin `arbol`: este tema no usa mapa conceptual.
//
// A propósito, NO todas las entradas de `complicaciones` usan los mismos campos: las de
// "metodología" (Estructura, PA, Antecedentes, Interrogatorio, SOCRATES) omiten dx_diferencial
// porque no aplica (el motor ya oculta cualquier campo vacío — no hace falta escribir
// "No aplica"). Las de "síntomas cardinales" sí usan fisiopatologia (como clasificación/
// mecanismo) además de definicion/clinica/criterios_dx/dx_diferencial, porque ahí sí hay
// mecanismo y diferencial reales. `modalLabels` reetiqueta 2 campos genéricos para que el
// texto quede natural en ambos casos.

export const meta = {
  id: 'historia-clinica',
  titulo: 'Historia Clínica y Anamnesis Dirigida',
  subtitulo: 'Semiología 1 · Medicina Interna',
  accent: '#3d5a73',
  accentDim: '#4f7291'
};

export const definicionText = 'La historia clínica es el registro ordenado y sistemático de toda la información relevante sobre la salud de un paciente, obtenida mediante el interrogatorio (anamnesis) y complementada con la exploración física. Es el instrumento diagnóstico más importante de la medicina: se estima que entre el 70 y el 90% de los diagnósticos correctos se alcanzan con una anamnesis bien dirigida, antes de cualquier estudio de laboratorio o imagen. Tiene, además, valor médico-legal y es la base de la relación médico-paciente.';

export const bibliografia = [
  "Bickley LS, Szilagyi PG, Hoffman RM. Bates' Guide to Physical Examination and History Taking. 13th ed. Philadelphia: Wolters Kluwer; 2021.",
  'Argente HA, Álvarez ME. Semiología Médica: Fisiopatología, Semiotecnia y Propedéutica. 2nd ed. Buenos Aires: Editorial Médica Panamericana; 2013.',
  "LeBlond RF, Brown DD, Suneja M, Szot JF. DeGowin's Diagnostic Examination. 10th ed. New York: McGraw-Hill; 2015.",
  'Surós Batlló A, Surós Batlló J. Semiología Médica y Técnica Exploratoria. 8th ed. Barcelona: Elsevier Masson; 2001.'
];

// Reetiqueta 2 campos genéricos del motor para que encajen mejor con contenido de semiología
// (no de enfermedad): "Fisiopatología" → clasificación/mecanismo del síntoma; "Criterios
// diagnósticos" → significado clínico / qué orienta.
export const modalLabels = {
  fisiopatologia: 'Clasificación y mecanismo',
  criterios_dx: 'Significado clínico'
};

const SOCRATES_HTML = `<div style="display:flex;flex-direction:column;gap:9px;margin-top:6px;">
  ${[
    ['S', 'ite', 'localización'],
    ['O', 'nset', 'inicio: súbito o gradual'],
    ['C', 'haracter', 'calidad: opresivo, punzante, cólico, urente…'],
    ['R', 'adiation', 'irradiación'],
    ['A', 'ssociations', 'síntomas acompañantes'],
    ['T', 'ime course', 'cronología: constante/intermitente, duración, evolución'],
    ['E', 'xacerbating/relieving factors', 'factores agravantes y atenuantes'],
    ['S', 'everity', 'intensidad, habitualmente en escala 0-10']
  ].map(([letra, resto, desc]) => `<div><span style="font-size:1.5em;font-weight:800;color:#3d5a73;line-height:1;">${letra}</span><span style="font-weight:600;">${resto}</span> — ${desc}</div>`).join('')}
</div>`;

const FIEBRE_RANGOS_HTML = `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;margin-top:8px;">
  <div style="border:1px solid var(--line);border-radius:8px;padding:8px 10px;"><strong>Normal</strong><br>36.5-37.2 °C</div>
  <div style="border:1px solid var(--line);border-radius:8px;padding:8px 10px;"><strong>Febrícula</strong><br>37.3-38.0 °C</div>
  <div style="border:1px solid var(--line);border-radius:8px;padding:8px 10px;"><strong>Fiebre</strong><br>&gt;38.0 °C</div>
  <div style="border:1px solid var(--line);border-radius:8px;padding:8px 10px;"><strong>Hiperpirexia</strong><br>&gt;41.0 °C</div>
</div>`;

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Historia clínica completa',
      tituloB: 'Anamnesis dirigida (urgencia/consulta breve)',
      compensada: 'Documento completo y ordenado: ficha de identificación, motivo de consulta, padecimiento actual, antecedentes heredofamiliares, antecedentes personales patológicos y no patológicos, interrogatorio por aparatos y sistemas, exploración física completa, resumen y lista de problemas. Es el formato estándar de primera vez o de ingreso hospitalario.',
      descompensada: 'Versión abreviada y centrada en el síntoma guía cuando el tiempo o la gravedad del paciente no permiten el interrogatorio completo (urgencias, guardia). Prioriza lo que cambia la conducta inmediata: padecimiento actual, alergias, medicamentos y antecedentes directamente relevantes; el resto se completa después de estabilizar.'
    }
  },
  complicaciones: [
    {
      nombre: 'Estructura de la historia clínica',
      color: '#3d5a73',
      definicion: 'Secuencia estándar: (1) ficha de identificación, (2) motivo de consulta, (3) padecimiento actual, (4) antecedentes heredofamiliares, (5) antecedentes personales patológicos, (6) antecedentes personales no patológicos, (7) interrogatorio por aparatos y sistemas, (8) exploración física, (9) resumen, lista de problemas y plan diagnóstico-terapéutico.',
      clinica: 'Se documenta siempre en este orden para no omitir información, aunque en la práctica el interrogatorio es conversacional: se empieza con preguntas abiertas ("¿qué lo trae a consulta?") y se dirige progresivamente hacia preguntas cerradas y específicas.',
      criterios_dx: 'Una historia clínica completa y bien estructurada es la base médico-legal del acto médico y permite reconstruir el razonamiento diagnóstico ante cualquier revisión posterior.'
    },
    {
      nombre: 'Padecimiento actual (PA): cómo se escribe',
      color: '#3d5a73',
      definicion: 'El padecimiento actual (PA) es la narración cronológica, en prosa, del síntoma o motivo de consulta desde su inicio hasta el momento presente. Es la sección de mayor peso diagnóstico de toda la historia clínica: integra la caracterización semiológica completa del síntoma guía (ver SOCRATES) junto con los síntomas acompañantes, los tratamientos ya intentados y su respuesta, y el motivo concreto por el que el paciente busca atención hoy.',
      clinica: 'Técnica de redacción: (1) se abre indicando edad, sexo y tiempo total de evolución — "Paciente masculino de 45 años, con cuadro clínico de 3 días de evolución caracterizado por…"; (2) se narra en orden cronológico estricto, sin saltos hacia atrás y hacia adelante; (3) se incluyen los "negativos pertinentes" — síntomas que el paciente NO presenta y que ayudan a descartar diagnósticos (ej. "niega fiebre, niega disnea"); (4) se cierra con el estado actual y el evento puntual que motivó la consulta en este momento particular ("por qué hoy y no antes").',
      criterios_dx: 'Un PA bien escrito debería, por sí solo, permitir a otro médico que no vio al paciente generar una lista razonable de diagnósticos diferenciales. Es el estándar con el que se evalúa la calidad de una historia clínica en la práctica y en el examen.'
    },
    {
      nombre: 'Antecedentes personales patológicos',
      color: '#3d5a73',
      definicion: 'Enfermedades crónicas diagnosticadas previamente (hipertensión, diabetes, cardiopatías, enfermedad renal, hepatopatías, neumopatías, neoplasias, enfermedades tiroideas), cirugías previas (con fecha y motivo), hospitalizaciones previas, alergias (medicamentosas y no medicamentosas, especificando el tipo de reacción), antecedentes transfusionales y esquema de vacunación.',
      clinica: 'Se interroga activamente uno por uno — no basta con preguntar "¿tiene alguna enfermedad?", porque el paciente puede omitir por olvido o por no considerarlo relevante. Conviene recorrer un listado mental por sistemas (cardiovascular, endocrino, renal, hepático, respiratorio, oncológico) en vez de dejarlo abierto.',
      criterios_dx: 'Modifica directamente el diagnóstico diferencial (ej. disnea en un paciente con antecedente de insuficiencia cardiaca orienta distinto que en uno con antecedente de EPOC) y el manejo farmacológico (ajuste de dosis en falla renal/hepática, interacciones, alergias antes de prescribir).'
    },
    {
      nombre: 'Antecedentes personales no patológicos',
      color: '#3d5a73',
      definicion: 'Información sobre el estilo de vida y el contexto social del paciente: ocupación actual y previa (exposiciones laborales), lugar de residencia y tipo de vivienda (hacinamiento, exposición a humo de leña/biomasa, zona endémica), alimentación, actividad física, tabaquismo (índice tabáquico), consumo de alcohol (cantidad y frecuencia), uso de otras sustancias, esquema de sueño, y red de apoyo familiar/social.',
      clinica: 'La ocupación es particularmente reveladora y suele subinterrogarse: exposición a asbesto o sílice (mesotelioma, silicosis), trabajo agrícola (organofosforados, zoonosis), personal de salud (riesgo biológico), trabajo con animales (brucelosis, otras zoonosis), exposición solar prolongada (cáncer de piel). También conviene precisar con quién vive el paciente y quién puede apoyar su cuidado.',
      criterios_dx: 'Estos antecedentes explican por qué un paciente desarrolla ciertas enfermedades y orientan el diagnóstico diferencial epidemiológico — por ejemplo, tos crónica en un minero orienta a neumoconiosis, y fiebre tras un viaje reciente a zona endémica orienta a dengue o paludismo.'
    },
    {
      nombre: 'Interrogatorio por aparatos y sistemas',
      color: '#3d5a73',
      definicion: 'Revisión sistemática, aparato por aparato (cardiovascular, respiratorio, digestivo, genitourinario, neurológico, endocrino, hematológico, osteomuscular, piel y faneras), preguntando activamente por síntomas que el paciente no mencionó espontáneamente en el padecimiento actual.',
      clinica: 'Se hace de cabeza a pies o por sistemas, con preguntas breves y cerradas ("¿ha notado…?"); su objetivo es detectar comorbilidades o síntomas asociados que el paciente no relacionó con su motivo de consulta.',
      criterios_dx: 'Frecuentemente revela datos que cambian el diagnóstico diferencial — por ejemplo, un paciente que consulta por fatiga y en el interrogatorio dirigido refiere poliuria y polidipsia, orientando a diabetes mellitus no diagnosticada.'
    },
    {
      nombre: 'Semiología del síntoma guía (SOCRATES)',
      color: '#3d5a73',
      definicion: SOCRATES_HTML,
      clinica: 'Ejemplo aplicado a dolor torácico: inicio súbito vs. progresivo; localización retroesternal vs. costal; irradiación a brazo o mandíbula; calidad opresiva vs. punzante; relación con el esfuerzo o la respiración; síntomas acompañantes como diaforesis, disnea o náusea; intensidad referida por el paciente.',
      criterios_dx: 'Cada componente de SOCRATES modifica de forma directa el diagnóstico diferencial y orienta qué estudios complementarios se solicitan primero — es la herramienta que convierte un síntoma inespecífico en una hipótesis diagnóstica concreta.'
    },
    {
      nombre: 'Dolor',
      color: '#8c3a34',
      definicion: 'Experiencia sensorial y emocional desagradable asociada a daño tisular real o potencial. Se caracteriza siempre con SOCRATES.',
      fisiopatologia: 'Por mecanismo: nociceptivo somático (piel, músculo, hueso — agudo, bien localizado, se agrava con el movimiento/palpación) o visceral (vísceras huecas/sólidas — difuso, mal localizado, sordo, puede referirse a un dermatoma distante que comparte inervación aferente, ej. vesícula biliar → escápula derecha, isquemia miocárdica → brazo izquierdo/mandíbula); o neuropático (lesión del propio sistema nervioso — quemante, con disestesias). Por duración: agudo (&lt;3 meses) o crónico.',
      clinica: 'Se interroga con SOCRATES completo, prestando especial atención a si el paciente puede señalar el punto exacto con un dedo (más compatible con somático) o solo señala una región amplia con la mano (más compatible con visceral).',
      criterios_dx: 'La localización, la irradiación y la relación con desencadenantes (esfuerzo físico, alimentos, movimiento, respiración) son las variables con mayor rendimiento diagnóstico para orientar el origen del dolor.',
      dx_diferencial: 'Dolor torácico: cardiovascular (isquémico, pericárdico, aórtico), pleuropulmonar, digestivo (esofágico, biliar), musculoesquelético, psicógeno. Dolor abdominal: según cuadrante y órgano subyacente.'
    },
    {
      nombre: 'Fiebre',
      color: '#8c3a34',
      definicion: 'Elevación de la temperatura corporal central mediada por pirógenos que reajustan el centro termorregulador hipotalámico. Se diferencia de la hipertermia, en la que falla la disipación de calor sin que el centro termorregulador se reajuste (ej. golpe de calor).' + FIEBRE_RANGOS_HTML,
      fisiopatologia: 'Por patrón: continua (oscila &lt;1 °C en 24 h, sin llegar a lo normal), remitente (oscila &gt;1 °C, sin llegar a lo normal), intermitente (llega a lo normal entre picos) y héctica o séptica (picos muy altos alternados con caídas a lo normal, típica de abscesos). Por duración: aguda (&lt;2 semanas) vs. fiebre de origen desconocido (&gt;3 semanas sin diagnóstico pese a estudio adecuado).',
      clinica: 'Se interroga el patrón, el tiempo de evolución, y los síntomas acompañantes que orienten el foco (tos, disuria, cefalea, exantema, artralgias).',
      criterios_dx: 'El patrón febril y los síntomas acompañantes orientan el foco infeccioso probable; la fiebre de origen desconocido obliga a ampliar el diferencial más allá de lo infeccioso, hacia causas neoplásicas, autoinmunes y farmacológicas.',
      dx_diferencial: 'Infecciosa (la más frecuente), neoplásica, autoinmune/inflamatoria, medicamentosa (fiebre por fármacos), tromboembólica.'
    },
    {
      nombre: 'Disnea',
      color: '#8c3a34',
      definicion: 'Sensación subjetiva de falta de aire o dificultad para respirar, desproporcionada al esfuerzo realizado.',
      fisiopatologia: 'Se gradúa con escalas funcionales, la más usada es la mMRC (Modified Medical Research Council) — ver figura. También se caracteriza por su instalación (aguda vs. crónica) y por la posición que la mejora o empeora: ortopnea (empeora acostado), platipnea (empeora sentado/de pie) y trepopnea (empeora en decúbito lateral).',
      clinica: 'Se interroga su relación con el esfuerzo (grado mMRC), su instalación temporal, la posición que la modifica, y los síntomas acompañantes (dolor torácico, tos, edema de miembros inferiores).',
      criterios_dx: 'La ortopnea y la disnea paroxística nocturna orientan fuertemente a insuficiencia cardiaca; la disnea de instalación súbita orienta a tromboembolia pulmonar, neumotórax o edema agudo de pulmón.',
      dx_diferencial: 'Cardiovascular (insuficiencia cardiaca, isquemia), respiratoria (EPOC, asma, neumonía, TEP), anemia, acidosis metabólica, causa psicógena (ansiedad).',
      figura: 'mmrc-scale'
    },
    {
      nombre: 'Tos',
      color: '#8c3a34',
      definicion: 'Reflejo de defensa de la vía aérea ante un estímulo mecánico, químico o inflamatorio.',
      fisiopatologia: 'Por duración: aguda (&lt;3 semanas), subaguda (3-8 semanas) o crónica (&gt;8 semanas). Por productividad: seca o productiva — en este caso se describen las características del esputo (color, cantidad, presencia de sangre).',
      clinica: 'Se interroga duración, productividad, horario (nocturna vs. diurna), relación con la posición o los alimentos, y síntomas acompañantes.',
      criterios_dx: 'La tos crónica productiva orienta a EPOC o bronquiectasias; la tos seca crónica en un paciente que toma IECA orienta a efecto adverso farmacológico; la hemoptisis siempre amerita descartar neoplasia pulmonar y tuberculosis.',
      dx_diferencial: 'Infecciosa, EPOC/asma, reflujo gastroesofágico, goteo posnasal, efecto adverso de IECA, insuficiencia cardiaca, neoplasia pulmonar.'
    },
    {
      nombre: 'Astenia, fatiga y pérdida de peso involuntaria',
      color: '#8c3a34',
      definicion: 'La astenia es la sensación subjetiva de falta de energía o cansancio; la fatiga es la incapacidad de mantener un esfuerzo físico o mental. La pérdida de peso involuntaria clínicamente significativa se define como una pérdida mayor al 5% del peso corporal en 6 a 12 meses, sin dieta intencional.',
      fisiopatologia: 'Si mejora con el descanso, orienta a una causa fisiológica o funcional; si no mejora con el reposo, orienta a causa orgánica (anemia, hipotiroidismo, neoplasia, enfermedad crónica sistémica).',
      clinica: 'Se interroga la cronología, la relación con el sueño o el reposo, y siempre se acompaña de una búsqueda dirigida de síntomas de alarma como fiebre, sudoración nocturna profusa o sangrado.',
      criterios_dx: 'La combinación de astenia, pérdida de peso involuntaria y sudoración nocturna (los llamados "síntomas B") es una tríada de alarma que obliga a descartar neoplasia, tuberculosis e infección por VIH.',
      dx_diferencial: 'Anemia, hipotiroidismo, depresión, neoplasia, enfermedad crónica sistémica (renal, hepática), infecciones crónicas.'
    }
  ]
};

export const figuras = {
  'mmrc-scale': {
    titulo: 'Escala de disnea mMRC (Modified Medical Research Council)',
    html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px;">
      <div style="border:1px solid var(--line);border-radius:8px;padding:10px;"><strong>Grado 0</strong><br>Disnea solo ante actividad física intensa.</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:10px;"><strong>Grado 1</strong><br>Al andar rápido en llano o subir una pendiente leve.</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:10px;"><strong>Grado 2</strong><br>Camina más despacio que otras personas de su edad, o debe detenerse a respirar caminando a su paso en llano.</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:10px;"><strong>Grado 3</strong><br>Se detiene a respirar tras caminar ~100 m o pocos minutos en llano.</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:10px;"><strong>Grado 4</strong><br>Le impide salir de casa, o aparece al vestirse/desvestirse.</div>
    </div>`,
    fuente: 'Bestall et al. 1999; escala usada por GOLD para EPOC'
  }
};

export const compCites = {
  'Estructura de la historia clínica': { definicion: [1, 2], clinica: [1], criterios_dx: [2] },
  'Padecimiento actual (PA): cómo se escribe': { definicion: [1, 2], clinica: [1, 4], criterios_dx: [2] },
  'Antecedentes personales patológicos': { definicion: [1, 2], clinica: [1], criterios_dx: [3] },
  'Antecedentes personales no patológicos': { definicion: [2, 4], clinica: [2], criterios_dx: [2, 3] },
  'Interrogatorio por aparatos y sistemas': { definicion: [1, 3], clinica: [1], criterios_dx: [3] },
  'Semiología del síntoma guía (SOCRATES)': { definicion: [1, 4], clinica: [1], criterios_dx: [4] },
  'Dolor': { definicion: [1, 4], fisiopatologia: [1, 2], clinica: [1], criterios_dx: [1] },
  'Fiebre': { definicion: [3], fisiopatologia: [3, 4], clinica: [1, 3], criterios_dx: [3] },
  'Disnea': { definicion: [1], fisiopatologia: [1], clinica: [1, 3], criterios_dx: [1] },
  'Tos': { definicion: [1], fisiopatologia: [1, 3], clinica: [1, 3], criterios_dx: [1] },
  'Astenia, fatiga y pérdida de peso involuntaria': { definicion: [2, 3], fisiopatologia: [2], clinica: [2], criterios_dx: [3] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {};
export const escalaCalc = {};
export const diagCites = { clinica: [1, 2] };
export const clasificacionCite = [];
export const seguimientoCite = [];
export const compGroups = [
  { title: 'Estructura y documentación', items: ['Estructura de la historia clínica', 'Padecimiento actual (PA): cómo se escribe'] },
  { title: 'Antecedentes', items: ['Antecedentes personales patológicos', 'Antecedentes personales no patológicos'] },
  { title: 'Interrogatorio dirigido', items: ['Interrogatorio por aparatos y sistemas', 'Semiología del síntoma guía (SOCRATES)'] },
  { title: 'Síntomas cardinales frecuentes', items: ['Dolor', 'Fiebre', 'Disnea', 'Tos', 'Astenia, fatiga y pérdida de peso involuntaria'] }
];
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Metodología' },
  { id: 'complicaciones', label: 'Componentes y síntomas cardinales' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
