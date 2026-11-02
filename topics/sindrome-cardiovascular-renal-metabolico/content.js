// topics/sindrome-cardiovascular-renal-metabolico/content.js
// Cubre el item "Sindrome cardiovascular-renal-metabolico (CKM)" del cluster Metabolismo
// (bloque VII) del temario. Es el tema que UNE a `obesidad`, `diabetes-mellitus`,
// `hipertension-arterial` y `dislipidemias`: aqui no se repite el detalle de cada enfermedad,
// que vive en su tema, sino el marco que explica por que van juntas y como se estadifica y se
// trata el conjunto.
//
// Fuente principal: Ndumele CE, Rangaswami J, Chow SL, et al. "Cardiovascular-Kidney-Metabolic
// Health: A Presidential Advisory From the American Heart Association". Circulation. 2023.
// Complementada con el aviso cientifico de sindromes CKM y con las ecuaciones PREVENT (Khan,
// Circulation 2024), que son las que la AHA propone para estimar el riesgo en este marco.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura (estilo monografia, como `ventilacion-mecanica`): `modalLabels` global reetiqueta
// los campos genericos porque las fichas son ESTADIOS, no complicaciones. 5 fichas de estadio
// (0 a 4) + 1 ficha transversal de los farmacos que actuan en los tres ejes, esta ultima con
// `c.modalLabels` propio. 1 calculadora, 1 figura. Sin em dash (ver [[feedback-no-em-dash]]).

export const meta = {
  id: 'sindrome-cardiovascular-renal-metabolico',
  titulo: 'Síndrome Cardiovascular-Renal-Metabólico',
  subtitulo: 'Módulo 41 · Medicina Interna',
  accent: '#3d6b8a',
  accentDim: '#9db8c9'
};

export const modalLabels = {
  itemName: 'Estadio',
  definicion: 'Que define este estadio',
  fisiopatologia: 'Que esta ocurriendo',
  epidemiologia: 'A quien afecta',
  factores_riesgo: 'Que hay que buscar',
  clinica: 'Como se detecta',
  criterios_dx: 'Criterios operativos',
  laboratorio: 'Estudios',
  imagen: 'Imagen',
  complementarios: 'Consideraciones',
  dx_diferencial: 'Como se distingue de los estadios vecinos',
  tx_medico: 'Objetivo y medidas',
  tx_farmacologico: 'Farmacos',
  tx_intervencionista: 'Intervenciones',
  criterios_uci: 'Cuando intensificar',
  criterios_tips: 'Consideraciones adicionales',
  seguimiento_hospitalario: 'Periodicidad del cribado',
  seguimiento_ambulatorio: 'Seguimiento',
  pronostico: 'Que se gana aquí',
  algoritmo: 'Puntos clave'
};

const LABELS_ESTANDAR = {
  itemName: 'Tratamiento transversal',
  definicion: 'Definicion',
  fisiopatologia: 'Por que actuan en los tres ejes',
  epidemiologia: 'Evidencia',
  factores_riesgo: 'Precauciones y contraindicaciones',
  clinica: 'A quien se le indica',
  criterios_dx: 'Como se elige',
  laboratorio: 'Monitorizacion',
  imagen: 'Imagen',
  complementarios: 'Consideraciones',
  dx_diferencial: 'Alternativas',
  tx_medico: 'Medidas de base',
  tx_farmacologico: 'Fármacos y dosis',
  tx_intervencionista: 'Intervenciones',
  criterios_uci: 'Cuando suspender',
  criterios_tips: 'Consideraciones adicionales',
  seguimiento_hospitalario: 'En el ingreso',
  seguimiento_ambulatorio: 'Seguimiento ambulatorio',
  pronostico: 'Beneficio esperable',
  algoritmo: 'Puntos clave'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const estadiosHtml = `
<div style="max-width:640px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="display:grid;grid-template-columns:64px 1fr 1fr;gap:6px;align-items:stretch;">
      <div style="font-weight:700;background:var(--panel2);padding:5px;border-radius:6px;text-align:center;">Estadio</div>
      <div style="font-weight:700;background:var(--panel2);padding:5px 8px;border-radius:6px;">Que lo define</div>
      <div style="font-weight:700;background:var(--panel2);padding:5px 8px;border-radius:6px;">Que se hace</div>
    </div>
    <div style="display:grid;grid-template-columns:64px 1fr 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:6px;padding:5px;text-align:center;font-weight:700;color:#3f6b52;">0</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;">Sin factores de riesgo CKM: peso y cintura normales, glucemia, presión y lípidos normales, sin enfermedad renal ni cardiovascular</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong>Prevención primordial.</strong> Mantener el estado: alimentación, actividad física, sueno y no fumar. Cribado cada 3 a 5 anos</div>
    </div>
    <div style="display:grid;grid-template-columns:64px 1fr 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5f7a4a22;border:1px solid #5f7a4a;border-radius:6px;padding:5px;text-align:center;font-weight:700;color:#5f7a4a;">1</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;">Exceso o disfunción de la adiposidad: sobrepeso u obesidad, adiposidad abdominal, o prediabetes, <strong>sin</strong> otros factores metabólicos ni enfermedad renal</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong>Actuar sobre la adiposidad.</strong> Estilo de vida estructurado; pérdida del 5% o más; valorar fármaco para el peso. Aquí la regresión de estadio es más fácil</div>
    </div>
    <div style="display:grid;grid-template-columns:64px 1fr 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:6px;padding:5px;text-align:center;font-weight:700;color:#8a6a1f;">2</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;">Factores de riesgo metabólicos o enfermedad renal: diabetes, hipertensión, hipertrigliceridemia, síndrome metabólico, o enfermedad renal crónica de cualquier grado</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong>Tratar cada factor y proteger órgano.</strong> Inhibidor de SGLT2, agonista de GLP-1, finerenona, IECA o ARA y estatina según el perfil. Cribado anual completo</div>
    </div>
    <div style="display:grid;grid-template-columns:64px 1fr 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:6px;padding:5px;text-align:center;font-weight:700;color:#8c3a34;">3</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;">Enfermedad cardiovascular <strong>subclínica</strong>: calcio coronario positivo, péptidos natriuréticos elevados o alteraciones ecocardiográficas; o equivalentes de riesgo alto (ERC de muy alto riesgo, riesgo predicho alto)</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong>Intensificar antes del evento.</strong> Objetivos más estrictos de lípidos y de presión; fármacos con beneficio cardiorrenal probado aunque el control metabólico sea bueno</div>
    </div>
    <div style="display:grid;grid-template-columns:64px 1fr 1fr;gap:6px;align-items:stretch;">
      <div style="background:#7a1f3d22;border:1px solid #7a1f3d;border-radius:6px;padding:5px;text-align:center;font-weight:700;color:#7a1f3d;">4</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;">Enfermedad cardiovascular <strong>clínica</strong>: cardiopatía isquémica, insuficiencia cardiaca, ictus, enfermedad arterial periférica o fibrilación auricular. <strong>4a</strong> sin fallo renal, <strong>4b</strong> con fallo renal</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong>Tratamiento dirigido por guías</strong> de cada enfermedad, sin abandonar el control de los ejes metabólico y renal, que siguen determinando el pronóstico</div>
    </div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">La progresión <strong>no es inevitable y los estadios pueden retroceder</strong>: perder peso, remitir la diabetes o revertir la albuminuria devuelven al paciente a un estadio anterior. Los determinantes sociales de la salud atraviesan todos los estadios y forman parte del marco, no son un anadido.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El síndrome cardiovascular-renal-metabólico (CKM, por sus siglas en inglés) es el trastorno sistémico que resulta de la interacción entre la <strong>adiposidad disfuncional</strong>, las <strong>alteraciones metabólicas</strong> (diabetes, hipertensión, dislipidemia), la <strong>enfermedad renal crónica</strong> y la <strong>enfermedad cardiovascular</strong>. La American Heart Association lo formalizo en 2023 para dar nombre a algo que se veia todos los días en la consulta: estas enfermedades no son cuatro problemas independientes que coinciden, sino un continuo con mecanismos compartidos.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Por que hacia falta un marco común.</strong></p>
<p style="margin:0 0 12px;">Tratados por separado, cada eje se optimiza sin mirar a los otros: el internista ajusta la glucemia, el nefrólogo la albuminuria y el cardiologo la insuficiencia cardiaca, con guías distintas y objetivos distintos. El marco CKM cambia dos cosas prácticas. La primera es que <strong>identifica el riesgo antes</strong>: la adiposidad disfuncional ya es un estadio, no un factor de riesgo difuso. La segunda es que reconoce que hoy existen <strong>fármacos que actuan sobre los tres ejes a la vez</strong> (inhibidores de SGLT2, agonistas del receptor de GLP-1, finerenona), de modo que la pregunta ya no es solo cuanto baja la HbA1c, sino que órgano se protege.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Los mecanismos que comparten.</strong></p>
<p style="margin:0 0 12px;">El tejido adiposo disfuncional, sobre todo el visceral y el ectópico, libera ácidos grasos libres y adipoquinas proinflamatorias y produce resistencia a la insulina. Sobre ese sustrato se activan la inflamación crónica de bajo grado, el estrés oxidativo, el sistema renina-angiotensina-aldosterona y el sistema nervioso simpático. El resultado es simultáneo en tres territorios: disfunción endotelial y aterosclerosis en el árbol arterial, hiperfiltración glomerular y albuminuria en el rinon, y remodelado con fibrosis y disfunción diastólica en el miocardio. Cada órgano danado empeora a los otros: la enfermedad renal acelera la cardiovascular, y la insuficiencia cardiaca reduce la perfusión renal.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Los cinco estadios.</strong></p>
${figBlock('Figura 1', 'Estadios 0 a 4 del síndrome cardiovascular-renal-metabólico', estadiosHtml)}
<p style="margin:0 0 12px;">La estadificación es la herramienta práctica del marco: sitúa al paciente en el continuo y dice que hacer (calculadora disponible). Dos ideas importan más que la clasificación en si. La primera es que <strong>los estadios pueden retroceder</strong>: no es una escalera de un solo sentido, y perder peso, remitir la diabetes o revertir la albuminuria devuelven al paciente a un estadio anterior con mejor pronóstico. La segunda es que los <strong>determinantes sociales de la salud</strong> (acceso a alimentos, a atención sanitaria y a medicamentos, entorno, educación) forman parte explícita del marco: condicionan tanto la progresión como la respuesta al tratamiento, y ignorarlos hace que el plan terapéutico fracase por motivos que no están en la analítica.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se estima el riesgo.</strong></p>
<p style="margin:0 0 12px;">La AHA propone las ecuaciones <strong>PREVENT</strong> (2024), que estiman el riesgo de enfermedad cardiovascular total, ateroesclerótica e insuficiencia cardiaca a 10 y a 30 anos en adultos de 30 a 79 anos. Sustituyen a las Pooled Cohort Equations, incorporan el filtrado glomerular y permiten anadir el cociente albúmina/creatinina, la HbA1c y un índice de privación social. La estimación a 30 anos es especialmente útil en el paciente joven, en el que el riesgo a 10 anos siempre parece bajo y hace perder décadas de prevención.</p>

<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> Las fichas de este tema son los <strong>cinco estadios</strong>, cada uno con lo que lo define, como se detecta y que se hace, más una ficha transversal sobre los fármacos que actuan en los tres ejes. El detalle de cada enfermedad no se repite aquí: la obesidad esta en su tema, y la diabetes, la hipertensión y la dislipidemia en los suyos. Este tema es el mapa que los conecta.</p>`;

export const bibliografia = [
  'Ndumele CE, Rangaswami J, Chow SL, et al. Cardiovascular-kidney-metabolic health: a presidential advisory from the American Heart Association. Circulation. 2023;148(20):1606-1635.',
  'Ndumele CE, Neeland IJ, Tuttle KR, et al. A synopsis of the evidence for the science and clinical management of cardiovascular-kidney-metabolic (CKM) syndrome: a scientific statement from the American Heart Association. Circulation. 2023;148(20):1636-1664.',
  'Khan SS, Coresh J, Pencina MJ, et al. Novel prediction equations for absolute risk assessment of total cardiovascular disease incorporating cardiovascular-kidney-metabolic health (PREVENT): a scientific statement from the American Heart Association. Circulation. 2024;149(6):e1091-e1120.',
  'Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney Int. 2024;105(4S):S117-S314.',
  'Kidney Disease: Improving Global Outcomes (KDIGO) Diabetes Work Group. KDIGO 2022 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease. Kidney Int. 2022;102(5S):S1-S127.',
  'Zinman B, Wanner C, Lachin JM, et al. Empagliflozin, cardiovascular outcomes, and mortality in type 2 diabetes (EMPA-REG OUTCOME). N Engl J Med. 2015;373(22):2117-2128.',
  'Perkovic V, Jardine MJ, Neal B, et al. Canagliflozin and renal outcomes in type 2 diabetes and nephropathy (CREDENCE). N Engl J Med. 2019;380(24):2295-2306.',
  'Heerspink HJL, Stefansson BV, Correa-Rotter R, et al. Dapagliflozin in patients with chronic kidney disease (DAPA-CKD). N Engl J Med. 2020;383(15):1436-1446.',
  'The EMPA-KIDNEY Collaborative Group. Empagliflozin in patients with chronic kidney disease. N Engl J Med. 2023;388(2):117-127.',
  'Perkovic V, Tuttle KR, Rossing P, et al. Effects of semaglutide on chronic kidney disease in patients with type 2 diabetes (FLOW). N Engl J Med. 2024;391(2):109-121.',
  'Bakris GL, Agarwal R, Anker SD, et al. Effect of finerenone on chronic kidney disease outcomes in type 2 diabetes (FIDELIO-DKD). N Engl J Med. 2020;383(23):2219-2229.',
  'Pitt B, Filippatos G, Agarwal R, et al. Cardiovascular events with finerenone in kidney disease and type 2 diabetes (FIGARO-DKD). N Engl J Med. 2021;385(24):2252-2263.',
  'Solomon SD, McMurray JJV, Vaduganathan M, et al. Finerenone in heart failure with mildly reduced or preserved ejection fraction (FINEARTS-HF). N Engl J Med. 2024;391(16):1475-1485.',
  'McDonagh TA, Metra M, Adamo M, et al. 2023 Focused Update of the 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2023;44(37):3627-3639.',
  'Lincoff AM, Brown-Frandsen K, Colhoun HM, et al. Semaglutide and cardiovascular outcomes in obesity without diabetes (SELECT). N Engl J Med. 2023;389(24):2221-2232.',
  'Marso SP, Daniels GH, Brown-Frandsen K, et al. Liraglutide and cardiovascular outcomes in type 2 diabetes (LEADER). N Engl J Med. 2016;375(4):311-322.',
  'Gaede P, Lund-Andersen H, Parving HH, Pedersen O. Effect of a multifactorial intervention on mortality in type 2 diabetes (Steno-2). N Engl J Med. 2008;358(6):580-591.',
  'American Diabetes Association Professional Practice Committee for Diabetes. Standards of Care in Diabetes 2026. Diabetes Care. 2026;49(Suppl 1).',
  'Powell-Wiley TM, Baumer Y, Baah FO, et al. Social determinants of cardiovascular disease. Circ Res. 2022;130(5):782-799.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Paciente en estadio precoz (0 a 2): asintomático',
      tituloB: 'Paciente en estadio avanzado (3 a 4): con dano de órgano',
      compensada: 'La mayor parte del continuo CKM es asintomática. El paciente en estadio 1 o 2 se detecta midiendo, no escuchando: peso y cintura, presión arterial, glucemia y HbA1c, perfil lipídico, y filtrado glomerular con cociente albúmina/creatinina. La ausencia de síntomas es precisamente lo que permite intervenir cuando el dano todavía es reversible, y es la razón de que el cribado sistemático sea el nucleo del marco.',
      descompensada: 'En los estadios 3 y 4 aparece el dano: disnea de esfuerzo y edemas por insuficiencia cardiaca (con frecuencia con fracción de eyección preservada), angina, claudicación, palpitaciones por fibrilación auricular, focalidad neurológica por ictus, y los síntomas de la enfermedad renal avanzada. Con frecuencia el debut es el propio evento, en un paciente que llevaba anos en estadio 2 sin que nadie lo hubiera nombrado.'
    },
    laboratorio: [
      { prueba: 'Glucemia en ayuno y HbA1c', utilidad: 'Distinguen el estadio 1 (prediabetes como marcador de adiposidad disfuncional) del estadio 2 (diabetes establecida). La prediabetes no es un hallazgo menor en este marco: define un estadio.' },
      { prueba: 'Perfil lipídico con colesterol no-HDL y triglicéridos', utilidad: 'La hipertrigliceridemia (135 mg/dL o más) es uno de los criterios de estadio 2. El colesterol no-HDL refleja mejor la carga aterogenica en el paciente con adiposidad y resistencia a la insulina.' },
      { prueba: 'Creatinina con filtrado glomerular estimado', utilidad: 'Un filtrado por debajo de 60 mL/min/1.73 m2 mantenido define enfermedad renal crónica y, por tanto, estadio 2. Es además una variable de las ecuaciones PREVENT.' },
      { prueba: 'Cociente albúmina/creatinina en orina', utilidad: 'La prueba más infrautilizada del marco: detecta dano renal con filtrado normal y sube al paciente a estadio 2. Un cociente de 30 mg/g o más, confirmado, es criterio; por encima de 300 marca riesgo muy alto.' },
      { prueba: 'Péptidos natriuréticos (BNP o NT-proBNP)', utilidad: 'Elevados sin insuficiencia cardiaca clínica identifican enfermedad cardiaca subclínica y colocan al paciente en estadio 3, que es donde más cambia la conducta.' },
      { prueba: 'Troponina de alta sensibilidad', utilidad: 'Una elevación crónica leve, sin síndrome coronario agudo, es otro marcador de dano miocárdico subclínico útil para reclasificar hacia el estadio 3.' },
      { prueba: 'Potasio y bicarbonato', utilidad: 'Necesarios antes y durante el tratamiento con IECA o ARA, inhibidores de SGLT2 y finerenona; el potasio condiciona el inicio y la titulación de la finerenona.' }
    ],
    no_invasivos: [
      { metodo: 'Estadificación CKM 0 a 4 (calculadora disponible)', interpretacion: 'Situa al paciente en el continuo a partir de la adiposidad, los factores metabólicos, la función renal y la enfermedad cardiovascular subclínica o clínica.', cutoff: 'Estadio 1 desde el exceso o la disfunción de la adiposidad; estadio 2 con cualquier factor metabólico o enfermedad renal; estadio 3 con enfermedad subclínica; estadio 4 con enfermedad clínica' },
      { metodo: 'Ecuaciones PREVENT (AHA 2024)', interpretacion: 'Estiman el riesgo de enfermedad cardiovascular total, ateroesclerótica e insuficiencia cardiaca a 10 y a 30 anos en adultos de 30 a 79 anos, incorporando el filtrado glomerular y, de forma opcional, la albuminuria, la HbA1c y un índice de privación social.', cutoff: 'A 10 anos: bajo menor de 5%; intermedio de 5 a menos de 10%; alto 10% o más. La estimación a 30 anos es la que orienta en el paciente joven' },
      { metodo: 'Puntuación de calcio coronario', interpretacion: 'Detecta aterosclerosis subclínica y es una de las vías de entrada al estadio 3 en el paciente sin enfermedad clínica.', cutoff: 'Cero unidades Agatston permite diferir el tratamiento en ausencia de condiciones de alto riesgo; 100 o más (o percentil 75 o mayor) apoya intensificar' },
      { metodo: 'Presión arterial con medida fuera de consulta', interpretacion: 'La hipertensión es criterio de estadio 2, y la confirmación con automedida domiciliaria o monitorización ambulatoria evita clasificar mal por bata blanca (ver el tema de Hipertensión Arterial).', cutoff: 'Umbrales de consulta y fuera de consulta según el tema de Hipertensión Arterial' }
    ],
    imagen: [
      { modalidad: 'Ecocardiograma', hallazgos: 'Hipertrofia ventricular izquierda, disfunción diastólica, dilatación auricular izquierda y alteración del strain longitudinal global: todos son marcadores de enfermedad cardiaca subclínica que colocan al paciente en estadio 3.' },
      { modalidad: 'Angio-TC coronaria o ecografía carotídea', hallazgos: 'Placa ateroesclerótica subclínica, que reclasifica el riesgo y apoya el paso a estadio 3.' },
      { modalidad: 'Ecografía renal', hallazgos: 'Valora el tamano y descarta uropatía obstructiva o enfermedad renovascular cuando el deterioro del filtrado no encaja con el perfil metabólico.' },
      { modalidad: 'Elastografía hepática', hallazgos: 'La enfermedad hepática esteatosica metabólica acompana con frecuencia al continuo CKM y su estadio de fibrosis anade información pronostica (ver el tema de Obesidad).' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La clasificación del marco CKM es su <strong>estadificación de 0 a 4</strong>, que ordena en un continuo lo que antes se veia como enfermedades separadas y traduce cada posición en una conducta concreta (ver la Figura 1 de Definición y la calculadora). Sobre ella se superponen dos elementos: la <strong>estimación cuantitativa del riesgo</strong> con las ecuaciones PREVENT, y los <strong>determinantes sociales de la salud</strong>, que el marco incorpora de forma explícita porque modifican tanto la progresión como la viabilidad del tratamiento.`,
    escalas: [
      { nombre: 'Estadios CKM de la AHA (calculadora disponible)', componentes: 'Adiposidad y su distribución, factores de riesgo metabólicos, función renal y albuminuria, y enfermedad cardiovascular subclínica o clínica.', formula: 'Estadio 0 a 4; el estadio 4 se subdivide en 4a (sin fallo renal) y 4b (con fallo renal).', interpretacion: '0 sin factores; 1 exceso o disfunción de la adiposidad; 2 factores metabólicos o enfermedad renal; 3 enfermedad cardiovascular subclínica o equivalente de riesgo alto; 4 enfermedad cardiovascular clínica. Los estadios pueden retroceder.' },
      { nombre: 'Ecuaciones PREVENT (AHA 2024)', componentes: 'Edad, sexo, colesterol total y HDL, presión arterial sistólica, diabetes, tabaquismo, tratamiento antihipertensivo e hipolipemiante, y filtrado glomerular; de forma opcional, cociente albúmina/creatinina, HbA1c e índice de privación social.', formula: 'Riesgo a 10 y a 30 anos de enfermedad cardiovascular total, ateroesclerótica e insuficiencia cardiaca, en adultos de 30 a 79 anos.', interpretacion: 'Sustituyen a las Pooled Cohort Equations. La estimación a 30 anos evita infratratar al paciente joven, en el que el riesgo a 10 anos siempre parece bajo.' },
      { nombre: 'Matriz de riesgo renal de KDIGO', componentes: 'Filtrado glomerular (G1 a G5) y albuminuria (A1 menor de 30, A2 de 30 a 300, A3 mayor de 300 mg/g).', formula: 'Matriz filtrado por albuminuria con código de color.', interpretacion: 'Define la enfermedad renal crónica que entra como criterio de estadio 2, e identifica la enfermedad renal de muy alto riesgo, que es una de las vías de entrada al estadio 3.' },
      { nombre: 'Criterios de síndrome metabólico', componentes: 'Perímetro de cintura, triglicéridos, colesterol HDL, presión arterial y glucemia en ayuno.', formula: 'Tres o más de los cinco criterios.', interpretacion: 'Es una de las formas de cumplir el estadio 2. El marco CKM lo integra pero va más allá, porque anade de forma explícita el eje renal y el cardiovascular subclínico.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Estadio 0: sin factores de riesgo',
      color: '#3f6b52',
      definicion: 'Persona sin ningún factor de riesgo cardiovascular-renal-metabólico: peso y perímetro de cintura normales, glucemia y presión arterial normales, perfil lipídico normal, sin enfermedad renal crónica y sin enfermedad cardiovascular. Es el punto de partida del continuo y el único estadio en el que el objetivo es no entrar en el siguiente.',
      fisiopatologia: 'No hay todavía adiposidad disfuncional ni resistencia a la insulina, de modo que la cascada compartida (inflamación, estrés oxidativo, activación del sistema renina-angiotensina-aldosterona y del simpático) no se ha puesto en marcha. Mantener este estado durante décadas es lo que más reduce el riesgo acumulado a lo largo de la vida.',
      epidemiologia: 'La proporción de adultos en estadio 0 disminuye con la edad y es baja en poblaciones con alta prevalencia de obesidad. En México y en buena parte de America Latina la mayoría de los adultos ya ha salido de este estadio.',
      factores_riesgo: ['Antecedente familiar de diabetes, hipertensión o enfermedad cardiovascular precoz', 'Entorno alimentario obesogenico e inseguridad alimentaria', 'Sedentarismo y sueno insuficiente', 'Determinantes sociales adversos: acceso limitado a atención, educación o alimentos saludables', 'Etnia y ascendencia con mayor riesgo cardiometabolico', 'Antecedentes obstétricos adversos (diabetes gestacional, preeclampsia, parto pretérmino)', 'Enfermedades inflamatorias crónicas y tratamientos que favorecen la ganancia de peso'],
      clinica: 'Asintomático por definición. Se identifica en la consulta de rutina o en un chequeo, midiendo peso, talla, cintura y presión arterial y solicitando glucemia y perfil lipídico.',
      criterios_dx: 'Ausencia de todos los criterios de estadios superiores: índice de masa corporal y cintura normales, glucemia en ayuno y HbA1c normales, presión arterial normal, perfil lipídico normal, filtrado glomerular normal con cociente albúmina/creatinina menor de 30 mg/g, y sin enfermedad cardiovascular conocida.',
      laboratorio: 'Glucemia en ayuno o HbA1c, perfil lipídico, creatinina con filtrado glomerular y, en presencia de factores de riesgo, cociente albúmina/creatinina.',
      imagen: 'No indicada en ausencia de factores de riesgo.',
      complementarios: 'Registro de los antecedentes obstétricos adversos y de las enfermedades inflamatorias crónicas, que modifican el riesgo y no aparecen en las calculadoras clásicas.',
      dx_diferencial: 'La frontera con el estadio 1 la marca la adiposidad: basta un perímetro de cintura elevado o una prediabetes para salir del estadio 0, aunque el índice de masa corporal sea normal.',
      tx_medico: 'Prevención primordial: alimentación de patrón mediterráneo o DASH, actividad física de al menos 150 minutos semanales con trabajo de fuerza, sueno suficiente y de calidad, no fumar, consumo de alcohol moderado o nulo, y mantenimiento del peso a lo largo de la vida.',
      tx_farmacologico: 'Ninguno. Prescribir fármacos en este estadio es sobretratamiento.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica. La intensificación viene definida por el paso al estadio siguiente.',
      criterios_tips: 'Este es el estadio donde las intervenciones de salud publica (entorno alimentario, urbanismo, políticas) tienen más impacto que cualquier prescripcion individual.',
      seguimiento_hospitalario: 'Cribado de peso, cintura, presión arterial, glucemia y lípidos cada 3 a 5 anos en el adulto sin factores de riesgo, y antes si aparece cualquiera de ellos.',
      seguimiento_ambulatorio: 'Reevaluar en cada contacto los cambios de peso y de hábitos, y aprovechar los momentos vitales de riesgo (embarazo, menopausia, cambio de trabajo, abandono del tabaco) para reforzar la prevención.',
      pronostico: 'Excelente. Mantenerse en estadio 0 hasta edades avanzadas es el mejor predictor de longevidad libre de enfermedad cardiovascular.',
      algoritmo: ['Confirmar la ausencia de todos los criterios de estadios superiores, incluida la cintura y la albuminuria si hay factores de riesgo', 'Prevención primordial: alimentación, actividad física con trabajo de fuerza, sueno, no fumar y mantenimiento del peso', 'No prescribir fármacos: en este estadio son sobretratamiento', 'Registrar antecedentes obstétricos adversos y enfermedades inflamatorias, que las calculadoras clásicas no recogen', 'Cribado cada 3 a 5 anos y en cada momento vital de riesgo']
    },
    {
      nombre: 'Estadio 1: exceso o disfunción de la adiposidad',
      color: '#5f7a4a',
      definicion: 'Presencia de sobrepeso u obesidad, de adiposidad abdominal, o de adiposidad disfuncional manifestada como intolerancia a la glucosa o prediabetes, <strong>sin</strong> otros factores de riesgo metabólicos ni enfermedad renal crónica. Es la puerta de entrada al continuo y el estadio donde la regresión es más alcanzable.',
      fisiopatologia: 'El tejido adiposo desborda su capacidad de almacenamiento seguro y empieza a comportarse de forma disfuncional: libera ácidos grasos libres y adipoquinas proinflamatorias, y la grasa se deposita de forma ectópica. Aparece la resistencia a la insulina, que es el primer eslabon de la cascada compartida. Todavía no hay dano de órgano. El mecanismo detallado esta en el tema de Obesidad.',
      epidemiologia: 'Es el estadio más prevalente en población adulta en países con alta carga de obesidad, y el que más ha crecido en las últimas décadas, también en adultos jóvenes.',
      factores_riesgo: ['Balance energético positivo mantenido y entorno obesogenico', 'Predisposición genética poligenica', 'Sueno insuficiente y trabajo por turnos', 'Fármacos que favorecen la ganancia de peso', 'Sedentarismo con pérdida de masa muscular', 'Antecedente de diabetes gestacional o de síndrome de ovario poliquistico', 'Determinantes sociales adversos e inseguridad alimentaria'],
      clinica: 'Asintomático. Se detecta midiendo el peso, la talla y sobre todo el <strong>perímetro de cintura</strong>, que identifica adiposidad central incluso con índice de masa corporal normal, y solicitando una glucemia o una HbA1c.',
      criterios_dx: 'Índice de masa corporal de 25 o más (23 o más en ascendencia asiática), o perímetro de cintura elevado según sexo y población, o prediabetes (glucemia en ayuno de 100 a 125 mg/dL, HbA1c de 5.7 a 6.4% o glucosa a las 2 horas de 140 a 199 mg/dL), en ausencia de diabetes, hipertensión, dislipidemia establecida y enfermedad renal crónica.',
      laboratorio: 'Glucemia en ayuno y HbA1c, perfil lipídico completo, creatinina con filtrado glomerular y cociente albúmina/creatinina para confirmar que no hay criterios de estadio 2.',
      imagen: 'No necesaria de rutina. La composición corporal o la elastografía hepática se reservan a situaciones concretas (ver el tema de Obesidad).',
      complementarios: 'Cribado de apnea obstructiva del sueno y de enfermedad hepática esteatosica metabólica con el índice FIB-4, que acompanan con frecuencia a este estadio y modifican el manejo.',
      dx_diferencial: 'La frontera con el estadio 2 la cruza cualquier factor metabólico establecido (diabetes, hipertensión, hipertrigliceridemia, síndrome metabólico) o cualquier grado de enfermedad renal crónica: por eso hay que pedir el cociente albúmina/creatinina antes de dejar a un paciente en estadio 1.',
      tx_medico: 'El objetivo es actuar sobre la adiposidad: alimentación con déficit calórico moderado, actividad física con trabajo de fuerza y apoyo conductual estructurado, con una meta inicial de perder al menos un 5% del peso, que ya mejora la glucemia y los lípidos. Es el estadio en el que la regresión a estadio 0 es realista.',
      tx_farmacologico: 'Se valora tratamiento farmacológico de la obesidad según los umbrales habituales (índice de masa corporal de 30, o de 27 con comorbilidad), priorizando los agonistas del receptor de GLP-1 y la tirzepatida por su magnitud de efecto. La metformina se considera en la prediabetes de alto riesgo (ver el tema de Diabetes Mellitus). No hay indicación de estatina, IECA ni inhibidor de SGLT2 solo por estar en este estadio.',
      tx_intervencionista: 'Cirugía metabólica si se cumplen los criterios por índice de masa corporal (ver el tema de Obesidad); no la justifica el estadio CKM por si solo.',
      criterios_uci: 'No aplica. La intensificación la marca la aparición de cualquier criterio de estadio 2.',
      criterios_tips: 'Es el momento de abordar el sueno, el estrés y los determinantes sociales: intervenciones que en estadios avanzados llegan tarde.',
      seguimiento_hospitalario: 'Peso, cintura, presión arterial y glucemia al menos una vez al ano; perfil lipídico y función renal con cociente albúmina/creatinina cada 1 a 2 anos, o antes si el peso aumenta.',
      seguimiento_ambulatorio: 'Vigilar de forma activa la aparición de hipertensión, diabetes, dislipidemia o albuminuria, que suponen el paso a estadio 2. Reforzar el mantenimiento del peso, que es donde se pierde el resultado.',
      pronostico: 'Bueno si se actúa: la pérdida de peso mantenida puede devolver al paciente al estadio 0. Sin intervención, la progresión a estadio 2 es la evolución habitual en pocos anos.',
      algoritmo: ['Medir peso, talla y perímetro de cintura, y solicitar glucemia o HbA1c: la adiposidad abdominal define el estadio aunque el IMC sea normal', 'Pedir cociente albúmina/creatinina y perfil lipídico para confirmar que no hay criterios de estadio 2', 'Objetivo: perder al menos un 5% del peso con alimentación, actividad física con fuerza y apoyo conductual', 'Valorar fármaco para el peso según los umbrales de la obesidad; metformina en la prediabetes de alto riesgo', 'Cribar apnea del sueno y calcular el FIB-4; vigilar cada ano la aparición de criterios de estadio 2']
    },
    {
      nombre: 'Estadio 2: factores metabólicos y enfermedad renal',
      color: '#8a6a1f',
      definicion: 'Presencia de uno o más factores de riesgo metabólicos establecidos (diabetes, hipertensión, hipertrigliceridemia de 135 mg/dL o más, o síndrome metabólico) o de <strong>enfermedad renal crónica de cualquier grado</strong>, sin enfermedad cardiovascular subclínica ni clínica. Es el estadio más numeroso en la consulta de medicina interna y donde el tratamiento cambia más el pronóstico.',
      fisiopatologia: 'La resistencia a la insulina y la inflamación crónica ya han producido consecuencias medibles en varios ejes a la vez: hiperglucemia, elevación de la presión arterial, dislipidemia aterogenica e hiperfiltración glomerular con albuminuria. El dano de órgano esta comenzando pero todavía no se ha manifestado como enfermedad cardiovascular.',
      epidemiologia: 'Concentra a la mayor parte de los pacientes con diabetes tipo 2 y a una proporción muy alta de los adultos de mediana edad y mayores. La enfermedad renal crónica esta especialmente infradiagnosticada en este estadio porque exige pedir el cociente albúmina/creatinina.',
      factores_riesgo: ['Progresión desde el estadio 1 sin intervención sobre la adiposidad', 'Duración de la exposición a los factores metabólicos', 'Episodios de lesión renal aguda', 'Uso de nefrotóxicos y de contraste yodado', 'Tabaquismo', 'Antecedente familiar de enfermedad renal o cardiovascular precoz', 'Determinantes sociales que dificultan la adherencia y el acceso a los fármacos'],
      clinica: 'Habitualmente asintomático. Los síntomas, cuando aparecen, corresponden a cada enfermedad por separado y suelen ser tardíos. La detección es analítica y con la medida de la presión arterial.',
      criterios_dx: 'Cualquiera de: diabetes, hipertensión, triglicéridos de 135 mg/dL o más, síndrome metabólico, o enfermedad renal crónica (filtrado glomerular menor de 60 mL/min/1.73 m2 o cociente albúmina/creatinina de 30 mg/g o más, mantenidos), en ausencia de enfermedad cardiovascular subclínica o clínica.',
      laboratorio: 'Anual: HbA1c, perfil lipídico con colesterol no-HDL, creatinina con filtrado glomerular y cociente albúmina/creatinina, potasio. Péptidos natriuréticos si hay sospecha de enfermedad cardiaca subclínica.',
      imagen: 'Ecocardiograma o puntuación de calcio coronario cuando la decisión terapéutica es incierta o se sospecha dano subclínico: un hallazgo positivo reclasifica al paciente a estadio 3.',
      complementarios: 'Estimación del riesgo con las ecuaciones PREVENT a 10 y a 30 anos; revisión de la adherencia y del acceso real a los fármacos, que en este estadio determina el resultado tanto como la elección terapéutica.',
      dx_diferencial: 'La frontera con el estadio 3 la cruza cualquier marcador de enfermedad cardiovascular subclínica (calcio coronario, péptidos natriuréticos, alteraciones ecocardiográficas) o el ser un equivalente de riesgo alto: por eso conviene buscarlos de forma activa en el paciente con varios factores.',
      tx_medico: 'Tratar cada factor según su tema (Diabetes Mellitus, Hipertensión Arterial, Dislipidemias, Obesidad) pero con una lógica anadida: elegir, cuando sea posible, las opciones que protegen más de un eje. Presión arterial por debajo de 130/80, estatina según el riesgo, control glucémico individualizado, abandono del tabaco y estilo de vida.',
      tx_farmacologico: 'Aquí es donde entran los fármacos transversales (ver la ficha correspondiente): <strong>inhibidor de SGLT2</strong> si hay enfermedad renal crónica o diabetes; <strong>agonista del receptor de GLP-1</strong> si hay obesidad o riesgo cardiovascular alto; <strong>finerenona</strong> si persiste la albuminuria pese a IECA o ARA y a inhibidor de SGLT2, con potasio menor de 5 mmol/L; <strong>IECA o ARA</strong> a dosis máxima tolerada si hay albuminuria e hipertensión; y estatina.',
      tx_intervencionista: 'No aplica de forma directa; la cirugía metabólica se valora por los criterios de la obesidad y puede producir la remisión de la diabetes y la regresión de estadio.',
      criterios_uci: 'Intensificar cuando aparezcan marcadores de enfermedad subclínica, cuando la albuminuria progrese pese al tratamiento, o cuando el riesgo estimado sea alto.',
      criterios_tips: 'La albuminuria es reversible: reducirla es un objetivo terapéutico en sí mismo y se asocia a mejor pronóstico renal y cardiovascular.',
      seguimiento_hospitalario: 'Cribado anual completo: presión arterial, HbA1c, perfil lipídico, filtrado glomerular y cociente albúmina/creatinina. Potasio y función renal a las 2 a 4 semanas de iniciar o subir un IECA, un ARA o la finerenona.',
      seguimiento_ambulatorio: 'Revisar en cada visita la adherencia, la tolerancia y el acceso a los fármacos, y reevaluar el estadio: la mejoría de la albuminuria o la remisión de la diabetes pueden significar regresión.',
      pronostico: 'Es el estadio con mayor rendimiento del tratamiento. El abordaje multifactorial intensivo reduce de forma marcada los eventos y la mortalidad (estudio Steno-2), y los fármacos cardiorrenales anaden beneficio sobre el control de los factores.',
      algoritmo: ['Confirmar el estadio: diabetes, hipertensión, triglicéridos de 135 o más, síndrome metabólico o enfermedad renal crónica', 'Pedir siempre filtrado glomerular Y cociente albúmina/creatinina: la enfermedad renal se pierde si solo se mira la creatinina', 'Buscar de forma activa enfermedad subclínica (péptidos natriuréticos, calcio coronario, ecocardiograma) para no infraestadificar', 'Elegir fármacos que protejan más de un eje: inhibidor de SGLT2, agonista de GLP-1, finerenona, IECA o ARA, y estatina', 'Estimar el riesgo con PREVENT a 10 y 30 anos y revisar adherencia y acceso; reevaluar el estadio, que puede retroceder']
    },
    {
      nombre: 'Estadio 3: enfermedad cardiovascular subclínica',
      color: '#8c3a34',
      definicion: 'Presencia de enfermedad cardiovascular <strong>subclínica</strong> en un paciente con factores CKM: aterosclerosis detectada por imagen (calcio coronario o placa), o dano miocárdico subclínico (péptidos natriuréticos elevados, troponina crónicamente elevada, alteraciones ecocardiográficas). Se incluyen también los <strong>equivalentes de riesgo alto</strong>: la enfermedad renal crónica de muy alto riesgo y un riesgo predicho alto.',
      fisiopatologia: 'El dano que en el estadio 2 era funcional y reversible ya ha dejado huella estructural: placa en la pared arterial, fibrosis e hipertrofia en el miocardio, o reducción sostenida de la masa nefronal. El paciente sigue asintomático, pero su trayectoria ya no es la de alguien con factores de riesgo aislados.',
      epidemiologia: 'Es un estadio infrarreconocido porque exige buscarlo: sin péptidos natriuréticos, sin calcio coronario y sin ecocardiograma, estos pacientes se manejan como si fueran estadio 2 y se infratratan.',
      factores_riesgo: ['Varios factores metabólicos coexistentes y de larga duración', 'Albuminuria intensa o filtrado glomerular en descenso', 'Diabetes de larga evolución', 'Antecedente familiar de enfermedad cardiovascular precoz', 'Tabaquismo activo', 'Lipoproteina(a) elevada (ver el tema de Dislipidemias)', 'Inflamación crónica persistente'],
      clinica: 'Asintomático por definición: si hay síntomas de enfermedad cardiovascular, el paciente esta en estadio 4. Puede haber signos indirectos como la hipertrofia ventricular en el electrocardiograma o un soplo carotídeo.',
      criterios_dx: 'Aterosclerosis subclínica por imagen (calcio coronario positivo, placa carotídea o coronaria), o enfermedad cardiaca subclínica (péptidos natriuréticos elevados, troponina de alta sensibilidad crónicamente elevada, hipertrofia o disfunción diastólica en el ecocardiograma), o equivalente de riesgo alto (enfermedad renal crónica de muy alto riesgo por la matriz de KDIGO, o riesgo predicho alto).',
      laboratorio: 'Péptidos natriuréticos y troponina de alta sensibilidad como marcadores de entrada al estadio; el resto del panel del estadio 2, con vigilancia más estrecha del potasio y de la función renal por la intensidad del tratamiento.',
      imagen: 'Puntuación de calcio coronario, ecocardiograma con valoración de la función diastólica y del strain, y ecografía carotídea o angio-TC coronaria según disponibilidad y contexto.',
      complementarios: 'Reevaluación del riesgo con PREVENT, y valoración de si procede derivar a cardiología o nefrología para completar el estudio o compartir el seguimiento.',
      dx_diferencial: 'La frontera con el estadio 4 la cruza la aparición de enfermedad cardiovascular clínica: un evento, un diagnóstico de insuficiencia cardiaca sintomática o una fibrilación auricular documentada.',
      tx_medico: 'El objetivo cambia: ya no es solo controlar factores, sino <strong>prevenir el primer evento</strong> en un paciente que ya tiene enfermedad. Objetivos más estrictos de lípidos y de presión arterial, y prioridad absoluta al abandono del tabaco y a la rehabilitación del estilo de vida.',
      tx_farmacologico: 'Intensificar: estatina de alta intensidad con objetivos de colesterol LDL propios del riesgo alto o muy alto (ver el tema de Dislipidemias), presión arterial por debajo de 130/80, e <strong>inhibidor de SGLT2 y agonista del receptor de GLP-1 con beneficio probado aunque el control metabólico ya sea bueno</strong>, porque su efecto es independiente de la HbA1c. Finerenona si persiste la albuminuria. La antiagregación en prevención primaria se individualiza y no es sistemática.',
      tx_intervencionista: 'No indicada por el estadio en si; la revascularización corresponde a la enfermedad clínica.',
      criterios_uci: 'Intensificar el seguimiento y el tratamiento; derivar a cardiología o nefrología cuando el estudio o la titulación lo requieran.',
      criterios_tips: 'Es el último estadio en el que se puede hablar de prevención primaria: reconocerlo es la diferencia entre prevenir el evento y tratarlo.',
      seguimiento_hospitalario: 'Control cada 3 a 6 meses de presión arterial, lípidos, HbA1c, función renal y albuminuria, con reevaluación periódica de los marcadores que definieron el estadio.',
      seguimiento_ambulatorio: 'Seguimiento compartido con cardiología o nefrología según el eje dominante, con objetivos escritos y revisión sistemática de la adherencia.',
      pronostico: 'Peor que el del estadio 2 pero muy modificable: es el punto de mayor rendimiento de la intensificación terapéutica, porque el evento todavía no ha ocurrido.',
      algoritmo: ['Buscar de forma activa enfermedad subclínica en el paciente con varios factores: péptidos natriuréticos, troponina, calcio coronario, ecocardiograma', 'Incluir también los equivalentes de riesgo alto: enfermedad renal de muy alto riesgo o riesgo predicho alto', 'Intensificar objetivos: colesterol LDL según riesgo alto o muy alto, presión arterial por debajo de 130/80', 'Anadir inhibidor de SGLT2 y agonista de GLP-1 con beneficio probado aunque el control metabólico sea bueno', 'Compartir el seguimiento con cardiología o nefrología; es el último estadio de prevención primaria']
    },
    {
      nombre: 'Estadio 4: enfermedad cardiovascular clínica',
      color: '#7a1f3d',
      definicion: 'Enfermedad cardiovascular <strong>clínica</strong> en un paciente con factores CKM: cardiopatía isquémica, insuficiencia cardiaca, ictus, enfermedad arterial periférica o fibrilación auricular. Se subdivide en <strong>4a</strong> (sin fallo renal) y <strong>4b</strong> (con fallo renal, es decir, filtrado glomerular muy bajo o tratamiento renal sustitutivo), porque el fallo renal cambia de forma sustancial el pronóstico y las opciones terapéuticas.',
      fisiopatologia: 'El dano acumulado en los tres ejes se ha traducido en enfermedad manifiesta. A partir de aquí los ejes se retroalimentan de forma acelerada: la insuficiencia cardiaca reduce la perfusión renal y la congestión venosa dana el rinon; la enfermedad renal genera sobrecarga, anemia y alteraciones minerales que danan el corazón. Es el síndrome cardiorrenal en su expresión clínica.',
      epidemiologia: 'Concentra la mayor parte de la mortalidad y del gasto sanitario del continuo CKM. La coexistencia de enfermedad renal (estadio 4b) multiplica el riesgo y limita el arsenal terapéutico.',
      factores_riesgo: ['Progresión no controlada desde estadios previos', 'Enfermedad renal crónica avanzada', 'Diabetes de larga evolución con mal control', 'Edad avanzada y fragilidad', 'Falta de acceso o de adherencia al tratamiento', 'Hospitalizaciones repetidas por descompensación', 'Anemia y alteraciones del metabolismo mineral en la enfermedad renal'],
      clinica: 'La de cada enfermedad: angina o infarto, disnea y edemas por insuficiencia cardiaca (con frecuencia con fracción de eyección preservada en este perfil de paciente), focalidad neurológica por ictus, claudicación o isquemia crítica, y palpitaciones o embolia por fibrilación auricular.',
      criterios_dx: 'Diagnóstico establecido de cualquiera de esas entidades por sus propios criterios. La subdivision en 4a y 4b depende de la presencia de fallo renal.',
      laboratorio: 'El del estadio 3 más los parámetros propios de cada enfermedad y de la enfermedad renal avanzada: hemograma, potasio, bicarbonato, calcio, fósforo y hormona paratiroidea, péptidos natriuréticos seriados.',
      imagen: 'La correspondiente a cada enfermedad: ecocardiograma, coronariografía, imagen cerebral, ecografía Doppler arterial.',
      complementarios: 'Rehabilitación cardiaca, planificación anticipada de cuidados en el paciente frágil o con fallo renal avanzado, y coordinación explícita entre medicina interna, cardiología y nefrología para evitar recomendaciones contradictorias.',
      dx_diferencial: 'La distinción clave dentro del estadio es 4a frente a 4b, porque el fallo renal condiciona la elección y la dosis de casi todos los fármacos y ensombrece el pronóstico.',
      tx_medico: 'Tratamiento dirigido por guías de cada enfermedad, <strong>sin abandonar el control de los ejes metabólico y renal</strong>, que siguen determinando el pronóstico. Rehabilitación, manejo del volumen, y atención a la fragilidad y a la carga de tratamiento.',
      tx_farmacologico: 'Terapia óptima de la enfermedad clínica (los cuatro pilares en la insuficiencia cardiaca, antiagregación y estatina de alta intensidad en la enfermedad ateroesclerótica, anticoagulación en la fibrilación auricular según el riesgo) más los fármacos transversales, que aquí tienen indicación propia: el inhibidor de SGLT2 esta indicado en la insuficiencia cardiaca con cualquier fracción de eyección y en la enfermedad renal crónica, y la finerenona anade beneficio en la insuficiencia cardiaca con fracción de eyección levemente reducida o preservada.',
      tx_intervencionista: 'Revascularización coronaria, carotídea o de miembros inferiores, dispositivos y ablación según la indicación de cada enfermedad; tratamiento renal sustitutivo y valoración de trasplante en el estadio 4b.',
      criterios_uci: 'Los del evento agudo: síndrome coronario, insuficiencia cardiaca descompensada, ictus, isquemia crítica o complicaciones de la enfermedad renal avanzada.',
      criterios_tips: 'La polifarmacia y la carga de tratamiento son un problema real en este estadio: conviene revisar de forma periódica que cada fármaco sigue aportando y desprescribir lo que no.',
      seguimiento_hospitalario: 'Aprovechar cada ingreso para optimizar la terapia dirigida por guías antes del alta, comprobar que están los fármacos con beneficio cardiorrenal, y dejar el plan y las citas por escrito.',
      seguimiento_ambulatorio: 'Seguimiento estrecho y multidisciplinar, con especial atención a la transición tras el alta, que es el periodo de mayor riesgo de reingreso.',
      pronostico: 'El peor del continuo, sobre todo en el estadio 4b. Aun así, el tratamiento óptimo y sostenido mejora de forma significativa la supervivencia y la calidad de vida, y la regresión parcial de los ejes metabólico y renal sigue aportando beneficio.',
      algoritmo: ['Confirmar la enfermedad cardiovascular clínica y determinar si hay fallo renal (4a frente a 4b)', 'Aplicar la terapia dirigida por guías de cada enfermedad, sin descuidar los ejes metabólico y renal', 'Asegurar los fármacos con beneficio cardiorrenal: inhibidor de SGLT2 en insuficiencia cardiaca y enfermedad renal; finerenona según el perfil', 'Coordinar de forma explícita con cardiología y nefrología y revisar la polifarmacia y la carga de tratamiento', 'Optimizar antes del alta y vigilar la transición, que es el periodo de mayor riesgo de reingreso']
    },
    {
      nombre: 'Fármacos que actuan en los tres ejes',
      color: '#3d6b8a',
      modalLabels: LABELS_ESTANDAR,
      definicion: 'Grupo de fármacos que, a diferencia de los tratamientos clásicos dirigidos a un solo factor, reducen eventos en más de un eje del continuo CKM a la vez: inhibidores de SGLT2, agonistas del receptor de GLP-1 y antagonistas no esteroideos del receptor mineralocorticoide (finerenona). Son la razón práctica por la que el marco CKM cambia decisiones y no solo vocabulario.',
      fisiopatologia: 'Actuan sobre mecanismos compartidos y no solo sobre el parámetro que miden. Los inhibidores de SGLT2 reducen la reabsorción tubular de sodio y glucosa, restauran la retroalimentación tubuloglomerular (baja la hiperfiltración), producen natriuresis y descongestion, y mejoran el metabolismo energético miocárdico. Los agonistas de GLP-1 reducen el peso y la inflamación vascular y mejoran la función endotelial. La finerenona bloquea la sobreactivacion del receptor mineralocorticoide, que media inflamación y fibrosis en rinon y corazón, con menos efecto sobre el potasio y el eje hormonal que los esteroideos.',
      epidemiologia: 'La evidencia es amplia y consistente: EMPA-REG, CREDENCE, DAPA-CKD y EMPA-KIDNEY para los inhibidores de SGLT2; LEADER, SELECT y FLOW para los agonistas de GLP-1; FIDELIO, FIGARO y FINEARTS-HF para la finerenona. En conjunto cubren los tres ejes con y sin diabetes.',
      factores_riesgo: ['Inhibidores de SGLT2: cetoacidosis euglucémica (suspender 3 a 4 días antes de cirugía mayor o ayuno), infecciones genitales micoticas, depleción de volumen', 'Agonistas de GLP-1: efectos digestivos, contraindicados con antecedente personal o familiar de carcinoma medular de tiroides o MEN2', 'Finerenona: hiperpotasemia, por lo que se inicia solo con potasio menor de 5 mmol/L y se controla a las 4 semanas', 'Combinación con IECA o ARA: vigilar potasio y función renal', 'Descenso inicial del filtrado glomerular con los inhibidores de SGLT2, que es esperable y no obliga a suspender', 'Enfermedad renal avanzada, que limita la dosis o el uso de varios de ellos'],
      clinica: 'Inhibidor de SGLT2: enfermedad renal crónica, insuficiencia cardiaca con cualquier fracción de eyección, y diabetes tipo 2 con riesgo cardiorrenal. Agonista de GLP-1: obesidad, diabetes tipo 2 con enfermedad cardiovascular o riesgo alto, y enfermedad renal diabética con albuminuria. Finerenona: enfermedad renal crónica con albuminuria en diabetes tipo 2, e insuficiencia cardiaca con fracción de eyección levemente reducida o preservada.',
      criterios_dx: 'La elección se guía por el eje dominante y no por la HbA1c: si domina la insuficiencia cardiaca o la enfermedad renal, inhibidor de SGLT2; si domina la obesidad o el riesgo ateroesclerótico, agonista de GLP-1; si persiste la albuminuria pese a IECA o ARA y a inhibidor de SGLT2, finerenona. Con frecuencia se combinan.',
      laboratorio: 'Función renal y potasio antes de iniciar y a las 2 a 4 semanas de cada cambio, sobre todo con finerenona e IECA o ARA. HbA1c y peso para valorar la respuesta metabólica, sin olvidar que el beneficio cardiorrenal es independiente de ella.',
      imagen: 'No requerida para su indicación.',
      complementarios: 'Educación sobre las reglas de los días de enfermedad con inhibidores de SGLT2 (suspender ante enfermedad aguda con ayuno) y sobre el escalado lento de los agonistas de GLP-1 para limitar los efectos digestivos.',
      dx_diferencial: 'No sustituyen al tratamiento clásico: la estatina, el IECA o ARA y el control de la presión arterial siguen siendo la base. Son un anadido con beneficio propio, no un reemplazo.',
      tx_medico: 'Estilo de vida y control de los factores clásicos como base, siempre.',
      tx_farmacologico: 'Inhibidores de SGLT2 (empagliflozina, dapagliflozina, canagliflozina): se inician con filtrado glomerular de 20 o más y se mantienen aunque descienda después. Agonistas del receptor de GLP-1 (semaglutida, liraglutida, dulaglutida) y tirzepatida: escalado lento. Finerenona: iniciar con potasio menor de 5 mmol/L y titular según el filtrado y el potasio. En muchos pacientes de estadio 2 o 3 se acaban combinando dos o los tres, junto con IECA o ARA y estatina.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Suspender de forma transitoria el inhibidor de SGLT2 ante enfermedad aguda con ayuno, cirugía mayor o riesgo de depleción de volumen; suspender la finerenona si el potasio supera 5.5 mmol/L y reevaluar.',
      criterios_tips: 'El descenso inicial del filtrado glomerular al iniciar un inhibidor de SGLT2 o un IECA es hemodinámico y esperable: no es toxicidad y no justifica suspenderlos si es menor del 30% y se estabiliza.',
      seguimiento_hospitalario: 'Revisar en cada ingreso que el paciente con enfermedad renal o insuficiencia cardiaca tiene indicado un inhibidor de SGLT2, y reintroducir los fármacos suspendidos por el proceso agudo antes del alta.',
      seguimiento_ambulatorio: 'Control de potasio y función renal tras cada cambio, revisión de la tolerancia y del acceso real al fármaco, y no retirar por un descenso esperable del filtrado.',
      pronostico: 'Aportan reducciones consistentes de eventos renales y cardiovasculares que se suman a las del tratamiento clásico, y en varios ensayos también de mortalidad.',
      algoritmo: ['Elegir por el eje dominante, no por la HbA1c', 'Insuficiencia cardiaca o enfermedad renal crónica: inhibidor de SGLT2, con filtrado de 20 o más y manteniendolo aunque baje después', 'Obesidad o riesgo ateroesclerótico alto: agonista del receptor de GLP-1 con beneficio probado', 'Albuminuria persistente pese a IECA o ARA y a inhibidor de SGLT2, con potasio menor de 5: anadir finerenona', 'Controlar potasio y función renal a las 2 a 4 semanas; no suspender por el descenso inicial esperable del filtrado']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El marco CKM no se aplica solo en la consulta. El ingreso hospitalario es donde con más frecuencia se descubre que un paciente llevaba anos en estadio 2 o 3 sin que nadie lo hubiera nombrado, y es una oportunidad de reclasificar, iniciar los fármacos con beneficio cardiorrenal y dejar un plan que atraviese las tres especialidades.',
    parametros: ['Estadificar al ingreso: peso, talla, cintura, presión arterial, HbA1c, perfil lipídico, filtrado glomerular y cociente albúmina/creatinina', 'Pedir el cociente albúmina/creatinina si no hay uno reciente: es la prueba que más cambia el estadio y la que más se olvida', 'Comprobar que el paciente con insuficiencia cardiaca o enfermedad renal crónica tiene indicado un inhibidor de SGLT2, y prescribirlo antes del alta si no hay contraindicación', 'Suspender de forma transitoria el inhibidor de SGLT2 ante ayuno, cirugía mayor o enfermedad aguda con riesgo de cetoacidosis euglucémica, y reintroducirlo antes del alta', 'Vigilar potasio y función renal con cada cambio de IECA, ARA, inhibidor de SGLT2 o finerenona', 'No retirar fármacos con beneficio cardiorrenal por un descenso hemodinámico y esperable del filtrado glomerular', 'Revisar la polifarmacia y desprescribir lo que ya no aporta, sobre todo en el estadio 4 y en el paciente frágil', 'Registrar en el informe de alta el estadio CKM y un plan explícito por ejes, con las citas correspondientes', 'Valorar los determinantes sociales: acceso a los fármacos, a la consulta y a una alimentación adecuada, sin lo cual el plan no se cumplira'],
    criterios_uci_general: 'No los determina el marco CKM sino el evento agudo: síndrome coronario, insuficiencia cardiaca descompensada, ictus, isquemia crítica, o complicaciones de la enfermedad renal avanzada.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'En el estadio 4b, valoración de tratamiento renal sustitutivo y de trasplante renal, o de trasplante cardiaco según el eje dominante. La obesidad grave puede ser una barrera para el trasplante y en esos casos la cirugía metabólica se usa como puente.',
    prevencion: 'El marco CKM es, en esencia, una estrategia de prevención escalonada. <strong>Primordial</strong> en el estadio 0: mantener el estado con alimentación, actividad física, sueno y no fumar, apoyado en políticas de salud publica. <strong>Primaria</strong> en los estadios 1 a 3: actuar sobre la adiposidad antes de que aparezcan los factores metabólicos, tratar cada factor cuando aparece, y buscar de forma activa la enfermedad subclínica para intensificar antes del primer evento. <strong>Secundaria</strong> en el estadio 4: terapia dirigida por guías sin abandonar los ejes metabólico y renal. En todos los estadios, atender los determinantes sociales de la salud, que el marco reconoce como parte del problema y no como contexto.'
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
  'Estadio 0: sin factores de riesgo': { definicion: [1, 19], criterios_dx: [1, 19], laboratorio: [1, 19], tx_farmacologico: [1, 19] },
  'Estadio 1: exceso o disfunción de la adiposidad': { definicion: [1, 2], criterios_dx: [1, 2], laboratorio: [1, 2], tx_farmacologico: [1, 2] },
  'Estadio 2: factores metabólicos y enfermedad renal': { definicion: [1, 4, 5, 17], criterios_dx: [1, 4, 5, 17], laboratorio: [1, 4, 5, 17], tx_farmacologico: [1, 4, 5, 17] },
  'Estadio 3: enfermedad cardiovascular subclínica': { definicion: [1, 3], criterios_dx: [1, 3], laboratorio: [1, 3], tx_farmacologico: [1, 3] },
  'Estadio 4: enfermedad cardiovascular clínica': { definicion: [1, 14], criterios_dx: [1, 14], laboratorio: [1, 14], tx_farmacologico: [1, 14] },
  'Fármacos que actuan en los tres ejes': { definicion: [6, 7, 8, 9, 10, 11, 12, 13], criterios_dx: [6, 7, 8, 9, 10, 11, 12, 13], laboratorio: [6, 7, 8, 9, 10, 11, 12, 13], tx_farmacologico: [6, 7, 8, 9, 10, 11, 12, 13] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Estadios CKM de la AHA (calculadora disponible)': [1, 2],
  'Ecuaciones PREVENT (AHA 2024)': [3],
  'Matriz de riesgo renal de KDIGO': [4],
  'Criterios de síndrome metabólico': [1]
};
export const escalaCalc = {
  'Estadios CKM de la AHA (calculadora disponible)': 'estadio-ckm'
};
export const compGroups = [
  { name: 'Los cinco estadios', items: ['Estadio 0: sin factores de riesgo', 'Estadio 1: exceso o disfunción de la adiposidad', 'Estadio 2: factores metabólicos y enfermedad renal', 'Estadio 3: enfermedad cardiovascular subclínica', 'Estadio 4: enfermedad cardiovascular clínica'] },
  { name: 'Tratamiento transversal', items: ['Fármacos que actuan en los tres ejes'] }
];
export const complicacionesIntro = 'Las cinco primeras fichas son los estadios del continuo CKM, de 0 a 4, cada una con lo que la define, como se detecta y que se hace en ella. La última es transversal: los fármacos que actuan sobre los tres ejes a la vez (inhibidores de SGLT2, agonistas del receptor de GLP-1 y finerenona), que son la razón práctica por la que este marco cambia decisiones. El detalle de cada enfermedad vive en su tema: Obesidad, Diabetes Mellitus, Hipertensión Arterial y Dislipidemias.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Evaluacion' },
  { id: 'clasificacion', label: 'Estadificacion' },
  { id: 'complicaciones', label: 'Estadios y tratamiento' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'SÍNDROME CARDIOVASCULAR-RENAL-METABÓLICO', color: '#3d6b8a', target: 'definicion' },
  branches: [
    { title: 'Los cinco estadios', sub: 'Un continuo, no cuatro enfermedades', color: '#3d6b8a', target: 'complicaciones', leaves: [
      { title: 'Estadio 0', sub: 'Sin factores; prevención primordial', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Estadio 1', sub: 'Adiposidad excesiva o disfuncional', color: '#5f7a4a', target: 'complicaciones' },
      { title: 'Estadio 2', sub: 'Factores metabólicos o enfermedad renal', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Estadio 3', sub: 'Enfermedad cardiovascular subclínica', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Estadio 4', sub: 'Enfermedad clínica; 4a y 4b', color: '#7a1f3d', target: 'complicaciones' }
    ] },
    { title: 'Lo que lo hace útil', sub: 'Por que no es solo vocabulario', color: '#6b3a5a', target: 'complicaciones', leaves: [
      { title: 'Fármacos de los tres ejes', sub: 'iSGLT2, arGLP1 y finerenona', color: '#3d6b8a', target: 'complicaciones' },
      { title: 'Los estadios retroceden', sub: 'Perder peso o revertir albuminuria', color: '#3f6b52', target: 'definicion' },
      { title: 'Ecuaciones PREVENT', sub: 'Riesgo a 10 y a 30 anos', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Determinantes sociales', sub: 'Parte del marco, no contexto', color: '#6b4a2e', target: 'seguimiento' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 4], no_invasivos: [1, 3], imagen: [2] };
export const clasificacionCite = [1, 3, 4];
export const seguimientoCite = [1, 19];
