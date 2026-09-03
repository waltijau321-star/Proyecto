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
  titulo: 'Sindrome Cardiovascular-Renal-Metabolico',
  subtitulo: 'Modulo 41 · Medicina Interna',
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
  pronostico: 'Que se gana aqui',
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
  tx_farmacologico: 'Farmacos y dosis',
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
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;">Sin factores de riesgo CKM: peso y cintura normales, glucemia, presion y lipidos normales, sin enfermedad renal ni cardiovascular</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong>Prevencion primordial.</strong> Mantener el estado: alimentacion, actividad fisica, sueno y no fumar. Cribado cada 3 a 5 anos</div>
    </div>
    <div style="display:grid;grid-template-columns:64px 1fr 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5f7a4a22;border:1px solid #5f7a4a;border-radius:6px;padding:5px;text-align:center;font-weight:700;color:#5f7a4a;">1</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;">Exceso o disfuncion de la adiposidad: sobrepeso u obesidad, adiposidad abdominal, o prediabetes, <strong>sin</strong> otros factores metabolicos ni enfermedad renal</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong>Actuar sobre la adiposidad.</strong> Estilo de vida estructurado; perdida del 5% o mas; valorar farmaco para el peso. Aqui la regresion de estadio es mas facil</div>
    </div>
    <div style="display:grid;grid-template-columns:64px 1fr 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:6px;padding:5px;text-align:center;font-weight:700;color:#8a6a1f;">2</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;">Factores de riesgo metabolicos o enfermedad renal: diabetes, hipertension, hipertrigliceridemia, sindrome metabolico, o enfermedad renal cronica de cualquier grado</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong>Tratar cada factor y proteger organo.</strong> Inhibidor de SGLT2, agonista de GLP-1, finerenona, IECA o ARA y estatina segun el perfil. Cribado anual completo</div>
    </div>
    <div style="display:grid;grid-template-columns:64px 1fr 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:6px;padding:5px;text-align:center;font-weight:700;color:#8c3a34;">3</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;">Enfermedad cardiovascular <strong>subclinica</strong>: calcio coronario positivo, peptidos natriureticos elevados o alteraciones ecocardiograficas; o equivalentes de riesgo alto (ERC de muy alto riesgo, riesgo predicho alto)</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong>Intensificar antes del evento.</strong> Objetivos mas estrictos de lipidos y de presion; farmacos con beneficio cardiorrenal probado aunque el control metabolico sea bueno</div>
    </div>
    <div style="display:grid;grid-template-columns:64px 1fr 1fr;gap:6px;align-items:stretch;">
      <div style="background:#7a1f3d22;border:1px solid #7a1f3d;border-radius:6px;padding:5px;text-align:center;font-weight:700;color:#7a1f3d;">4</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;">Enfermedad cardiovascular <strong>clinica</strong>: cardiopatia isquemica, insuficiencia cardiaca, ictus, enfermedad arterial periferica o fibrilacion auricular. <strong>4a</strong> sin fallo renal, <strong>4b</strong> con fallo renal</div>
      <div style="border:1px solid var(--line);border-radius:6px;padding:5px 8px;color:var(--ink-dim);"><strong>Tratamiento dirigido por guias</strong> de cada enfermedad, sin abandonar el control de los ejes metabolico y renal, que siguen determinando el pronostico</div>
    </div>
  </div>
  <div style="color:var(--ink-dim);margin-top:5px;">La progresion <strong>no es inevitable y los estadios pueden retroceder</strong>: perder peso, remitir la diabetes o revertir la albuminuria devuelven al paciente a un estadio anterior. Los determinantes sociales de la salud atraviesan todos los estadios y forman parte del marco, no son un anadido.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El sindrome cardiovascular-renal-metabolico (CKM, por sus siglas en ingles) es el trastorno sistemico que resulta de la interaccion entre la <strong>adiposidad disfuncional</strong>, las <strong>alteraciones metabolicas</strong> (diabetes, hipertension, dislipidemia), la <strong>enfermedad renal cronica</strong> y la <strong>enfermedad cardiovascular</strong>. La American Heart Association lo formalizo en 2023 para dar nombre a algo que se veia todos los dias en la consulta: estas enfermedades no son cuatro problemas independientes que coinciden, sino un continuo con mecanismos compartidos.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Por que hacia falta un marco comun.</strong></p>
<p style="margin:0 0 12px;">Tratados por separado, cada eje se optimiza sin mirar a los otros: el internista ajusta la glucemia, el nefrologo la albuminuria y el cardiologo la insuficiencia cardiaca, con guias distintas y objetivos distintos. El marco CKM cambia dos cosas practicas. La primera es que <strong>identifica el riesgo antes</strong>: la adiposidad disfuncional ya es un estadio, no un factor de riesgo difuso. La segunda es que reconoce que hoy existen <strong>farmacos que actuan sobre los tres ejes a la vez</strong> (inhibidores de SGLT2, agonistas del receptor de GLP-1, finerenona), de modo que la pregunta ya no es solo cuanto baja la HbA1c, sino que organo se protege.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Los mecanismos que comparten.</strong></p>
<p style="margin:0 0 12px;">El tejido adiposo disfuncional, sobre todo el visceral y el ectopico, libera acidos grasos libres y adipoquinas proinflamatorias y produce resistencia a la insulina. Sobre ese sustrato se activan la inflamacion cronica de bajo grado, el estres oxidativo, el sistema renina-angiotensina-aldosterona y el sistema nervioso simpatico. El resultado es simultaneo en tres territorios: disfuncion endotelial y aterosclerosis en el arbol arterial, hiperfiltracion glomerular y albuminuria en el rinon, y remodelado con fibrosis y disfuncion diastolica en el miocardio. Cada organo danado empeora a los otros: la enfermedad renal acelera la cardiovascular, y la insuficiencia cardiaca reduce la perfusion renal.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Los cinco estadios.</strong></p>
${figBlock('Figura 1', 'Estadios 0 a 4 del sindrome cardiovascular-renal-metabolico', estadiosHtml)}
<p style="margin:0 0 12px;">La estadificacion es la herramienta practica del marco: sitúa al paciente en el continuo y dice que hacer (calculadora disponible). Dos ideas importan mas que la clasificacion en si. La primera es que <strong>los estadios pueden retroceder</strong>: no es una escalera de un solo sentido, y perder peso, remitir la diabetes o revertir la albuminuria devuelven al paciente a un estadio anterior con mejor pronostico. La segunda es que los <strong>determinantes sociales de la salud</strong> (acceso a alimentos, a atencion sanitaria y a medicamentos, entorno, educacion) forman parte explicita del marco: condicionan tanto la progresion como la respuesta al tratamiento, y ignorarlos hace que el plan terapeutico fracase por motivos que no estan en la analitica.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se estima el riesgo.</strong></p>
<p style="margin:0 0 12px;">La AHA propone las ecuaciones <strong>PREVENT</strong> (2024), que estiman el riesgo de enfermedad cardiovascular total, ateroesclerotica e insuficiencia cardiaca a 10 y a 30 anos en adultos de 30 a 79 anos. Sustituyen a las Pooled Cohort Equations, incorporan el filtrado glomerular y permiten anadir el cociente albumina/creatinina, la HbA1c y un indice de privacion social. La estimacion a 30 anos es especialmente util en el paciente joven, en el que el riesgo a 10 anos siempre parece bajo y hace perder decadas de prevencion.</p>

<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> Las fichas de este tema son los <strong>cinco estadios</strong>, cada uno con lo que lo define, como se detecta y que se hace, mas una ficha transversal sobre los farmacos que actuan en los tres ejes. El detalle de cada enfermedad no se repite aqui: la obesidad esta en su tema, y la diabetes, la hipertension y la dislipidemia en los suyos. Este tema es el mapa que los conecta.</p>`;

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
      tituloA: 'Paciente en estadio precoz (0 a 2): asintomatico',
      tituloB: 'Paciente en estadio avanzado (3 a 4): con dano de organo',
      compensada: 'La mayor parte del continuo CKM es asintomatica. El paciente en estadio 1 o 2 se detecta midiendo, no escuchando: peso y cintura, presion arterial, glucemia y HbA1c, perfil lipidico, y filtrado glomerular con cociente albumina/creatinina. La ausencia de sintomas es precisamente lo que permite intervenir cuando el dano todavia es reversible, y es la razon de que el cribado sistematico sea el nucleo del marco.',
      descompensada: 'En los estadios 3 y 4 aparece el dano: disnea de esfuerzo y edemas por insuficiencia cardiaca (con frecuencia con fraccion de eyeccion preservada), angina, claudicacion, palpitaciones por fibrilacion auricular, focalidad neurologica por ictus, y los sintomas de la enfermedad renal avanzada. Con frecuencia el debut es el propio evento, en un paciente que llevaba anos en estadio 2 sin que nadie lo hubiera nombrado.'
    },
    laboratorio: [
      { prueba: 'Glucemia en ayuno y HbA1c', utilidad: 'Distinguen el estadio 1 (prediabetes como marcador de adiposidad disfuncional) del estadio 2 (diabetes establecida). La prediabetes no es un hallazgo menor en este marco: define un estadio.' },
      { prueba: 'Perfil lipidico con colesterol no-HDL y trigliceridos', utilidad: 'La hipertrigliceridemia (135 mg/dL o mas) es uno de los criterios de estadio 2. El colesterol no-HDL refleja mejor la carga aterogenica en el paciente con adiposidad y resistencia a la insulina.' },
      { prueba: 'Creatinina con filtrado glomerular estimado', utilidad: 'Un filtrado por debajo de 60 mL/min/1.73 m2 mantenido define enfermedad renal cronica y, por tanto, estadio 2. Es ademas una variable de las ecuaciones PREVENT.' },
      { prueba: 'Cociente albumina/creatinina en orina', utilidad: 'La prueba mas infrautilizada del marco: detecta dano renal con filtrado normal y sube al paciente a estadio 2. Un cociente de 30 mg/g o mas, confirmado, es criterio; por encima de 300 marca riesgo muy alto.' },
      { prueba: 'Peptidos natriureticos (BNP o NT-proBNP)', utilidad: 'Elevados sin insuficiencia cardiaca clinica identifican enfermedad cardiaca subclinica y colocan al paciente en estadio 3, que es donde mas cambia la conducta.' },
      { prueba: 'Troponina de alta sensibilidad', utilidad: 'Una elevacion cronica leve, sin sindrome coronario agudo, es otro marcador de dano miocardico subclinico util para reclasificar hacia el estadio 3.' },
      { prueba: 'Potasio y bicarbonato', utilidad: 'Necesarios antes y durante el tratamiento con IECA o ARA, inhibidores de SGLT2 y finerenona; el potasio condiciona el inicio y la titulacion de la finerenona.' }
    ],
    no_invasivos: [
      { metodo: 'Estadificacion CKM 0 a 4 (calculadora disponible)', interpretacion: 'Situa al paciente en el continuo a partir de la adiposidad, los factores metabolicos, la funcion renal y la enfermedad cardiovascular subclinica o clinica.', cutoff: 'Estadio 1 desde el exceso o la disfuncion de la adiposidad; estadio 2 con cualquier factor metabolico o enfermedad renal; estadio 3 con enfermedad subclinica; estadio 4 con enfermedad clinica' },
      { metodo: 'Ecuaciones PREVENT (AHA 2024)', interpretacion: 'Estiman el riesgo de enfermedad cardiovascular total, ateroesclerotica e insuficiencia cardiaca a 10 y a 30 anos en adultos de 30 a 79 anos, incorporando el filtrado glomerular y, de forma opcional, la albuminuria, la HbA1c y un indice de privacion social.', cutoff: 'A 10 anos: bajo menor de 5%; intermedio de 5 a menos de 10%; alto 10% o mas. La estimacion a 30 anos es la que orienta en el paciente joven' },
      { metodo: 'Puntuacion de calcio coronario', interpretacion: 'Detecta aterosclerosis subclinica y es una de las vias de entrada al estadio 3 en el paciente sin enfermedad clinica.', cutoff: 'Cero unidades Agatston permite diferir el tratamiento en ausencia de condiciones de alto riesgo; 100 o mas (o percentil 75 o mayor) apoya intensificar' },
      { metodo: 'Presion arterial con medida fuera de consulta', interpretacion: 'La hipertension es criterio de estadio 2, y la confirmacion con automedida domiciliaria o monitorizacion ambulatoria evita clasificar mal por bata blanca (ver el tema de Hipertension Arterial).', cutoff: 'Umbrales de consulta y fuera de consulta segun el tema de Hipertension Arterial' }
    ],
    imagen: [
      { modalidad: 'Ecocardiograma', hallazgos: 'Hipertrofia ventricular izquierda, disfuncion diastolica, dilatacion auricular izquierda y alteracion del strain longitudinal global: todos son marcadores de enfermedad cardiaca subclinica que colocan al paciente en estadio 3.' },
      { modalidad: 'Angio-TC coronaria o ecografia carotidea', hallazgos: 'Placa ateroesclerotica subclinica, que reclasifica el riesgo y apoya el paso a estadio 3.' },
      { modalidad: 'Ecografia renal', hallazgos: 'Valora el tamano y descarta uropatia obstructiva o enfermedad renovascular cuando el deterioro del filtrado no encaja con el perfil metabolico.' },
      { modalidad: 'Elastografia hepatica', hallazgos: 'La enfermedad hepatica esteatosica metabolica acompana con frecuencia al continuo CKM y su estadio de fibrosis anade informacion pronostica (ver el tema de Obesidad).' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La clasificacion del marco CKM es su <strong>estadificacion de 0 a 4</strong>, que ordena en un continuo lo que antes se veia como enfermedades separadas y traduce cada posicion en una conducta concreta (ver la Figura 1 de Definicion y la calculadora). Sobre ella se superponen dos elementos: la <strong>estimacion cuantitativa del riesgo</strong> con las ecuaciones PREVENT, y los <strong>determinantes sociales de la salud</strong>, que el marco incorpora de forma explicita porque modifican tanto la progresion como la viabilidad del tratamiento.`,
    escalas: [
      { nombre: 'Estadios CKM de la AHA (calculadora disponible)', componentes: 'Adiposidad y su distribucion, factores de riesgo metabolicos, funcion renal y albuminuria, y enfermedad cardiovascular subclinica o clinica.', formula: 'Estadio 0 a 4; el estadio 4 se subdivide en 4a (sin fallo renal) y 4b (con fallo renal).', interpretacion: '0 sin factores; 1 exceso o disfuncion de la adiposidad; 2 factores metabolicos o enfermedad renal; 3 enfermedad cardiovascular subclinica o equivalente de riesgo alto; 4 enfermedad cardiovascular clinica. Los estadios pueden retroceder.' },
      { nombre: 'Ecuaciones PREVENT (AHA 2024)', componentes: 'Edad, sexo, colesterol total y HDL, presion arterial sistolica, diabetes, tabaquismo, tratamiento antihipertensivo e hipolipemiante, y filtrado glomerular; de forma opcional, cociente albumina/creatinina, HbA1c e indice de privacion social.', formula: 'Riesgo a 10 y a 30 anos de enfermedad cardiovascular total, ateroesclerotica e insuficiencia cardiaca, en adultos de 30 a 79 anos.', interpretacion: 'Sustituyen a las Pooled Cohort Equations. La estimacion a 30 anos evita infratratar al paciente joven, en el que el riesgo a 10 anos siempre parece bajo.' },
      { nombre: 'Matriz de riesgo renal de KDIGO', componentes: 'Filtrado glomerular (G1 a G5) y albuminuria (A1 menor de 30, A2 de 30 a 300, A3 mayor de 300 mg/g).', formula: 'Matriz filtrado por albuminuria con codigo de color.', interpretacion: 'Define la enfermedad renal cronica que entra como criterio de estadio 2, e identifica la enfermedad renal de muy alto riesgo, que es una de las vias de entrada al estadio 3.' },
      { nombre: 'Criterios de sindrome metabolico', componentes: 'Perimetro de cintura, trigliceridos, colesterol HDL, presion arterial y glucemia en ayuno.', formula: 'Tres o mas de los cinco criterios.', interpretacion: 'Es una de las formas de cumplir el estadio 2. El marco CKM lo integra pero va mas alla, porque anade de forma explicita el eje renal y el cardiovascular subclinico.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Estadio 0: sin factores de riesgo',
      color: '#3f6b52',
      definicion: 'Persona sin ningun factor de riesgo cardiovascular-renal-metabolico: peso y perimetro de cintura normales, glucemia y presion arterial normales, perfil lipidico normal, sin enfermedad renal cronica y sin enfermedad cardiovascular. Es el punto de partida del continuo y el unico estadio en el que el objetivo es no entrar en el siguiente.',
      fisiopatologia: 'No hay todavia adiposidad disfuncional ni resistencia a la insulina, de modo que la cascada compartida (inflamacion, estres oxidativo, activacion del sistema renina-angiotensina-aldosterona y del simpatico) no se ha puesto en marcha. Mantener este estado durante decadas es lo que mas reduce el riesgo acumulado a lo largo de la vida.',
      epidemiologia: 'La proporcion de adultos en estadio 0 disminuye con la edad y es baja en poblaciones con alta prevalencia de obesidad. En Mexico y en buena parte de America Latina la mayoria de los adultos ya ha salido de este estadio.',
      factores_riesgo: ['Antecedente familiar de diabetes, hipertension o enfermedad cardiovascular precoz', 'Entorno alimentario obesogenico e inseguridad alimentaria', 'Sedentarismo y sueno insuficiente', 'Determinantes sociales adversos: acceso limitado a atencion, educacion o alimentos saludables', 'Etnia y ascendencia con mayor riesgo cardiometabolico', 'Antecedentes obstetricos adversos (diabetes gestacional, preeclampsia, parto pretermino)', 'Enfermedades inflamatorias cronicas y tratamientos que favorecen la ganancia de peso'],
      clinica: 'Asintomatico por definicion. Se identifica en la consulta de rutina o en un chequeo, midiendo peso, talla, cintura y presion arterial y solicitando glucemia y perfil lipidico.',
      criterios_dx: 'Ausencia de todos los criterios de estadios superiores: indice de masa corporal y cintura normales, glucemia en ayuno y HbA1c normales, presion arterial normal, perfil lipidico normal, filtrado glomerular normal con cociente albumina/creatinina menor de 30 mg/g, y sin enfermedad cardiovascular conocida.',
      laboratorio: 'Glucemia en ayuno o HbA1c, perfil lipidico, creatinina con filtrado glomerular y, en presencia de factores de riesgo, cociente albumina/creatinina.',
      imagen: 'No indicada en ausencia de factores de riesgo.',
      complementarios: 'Registro de los antecedentes obstetricos adversos y de las enfermedades inflamatorias cronicas, que modifican el riesgo y no aparecen en las calculadoras clasicas.',
      dx_diferencial: 'La frontera con el estadio 1 la marca la adiposidad: basta un perimetro de cintura elevado o una prediabetes para salir del estadio 0, aunque el indice de masa corporal sea normal.',
      tx_medico: 'Prevencion primordial: alimentacion de patron mediterraneo o DASH, actividad fisica de al menos 150 minutos semanales con trabajo de fuerza, sueno suficiente y de calidad, no fumar, consumo de alcohol moderado o nulo, y mantenimiento del peso a lo largo de la vida.',
      tx_farmacologico: 'Ninguno. Prescribir farmacos en este estadio es sobretratamiento.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica. La intensificacion viene definida por el paso al estadio siguiente.',
      criterios_tips: 'Este es el estadio donde las intervenciones de salud publica (entorno alimentario, urbanismo, politicas) tienen mas impacto que cualquier prescripcion individual.',
      seguimiento_hospitalario: 'Cribado de peso, cintura, presion arterial, glucemia y lipidos cada 3 a 5 anos en el adulto sin factores de riesgo, y antes si aparece cualquiera de ellos.',
      seguimiento_ambulatorio: 'Reevaluar en cada contacto los cambios de peso y de habitos, y aprovechar los momentos vitales de riesgo (embarazo, menopausia, cambio de trabajo, abandono del tabaco) para reforzar la prevencion.',
      pronostico: 'Excelente. Mantenerse en estadio 0 hasta edades avanzadas es el mejor predictor de longevidad libre de enfermedad cardiovascular.',
      algoritmo: ['Confirmar la ausencia de todos los criterios de estadios superiores, incluida la cintura y la albuminuria si hay factores de riesgo', 'Prevencion primordial: alimentacion, actividad fisica con trabajo de fuerza, sueno, no fumar y mantenimiento del peso', 'No prescribir farmacos: en este estadio son sobretratamiento', 'Registrar antecedentes obstetricos adversos y enfermedades inflamatorias, que las calculadoras clasicas no recogen', 'Cribado cada 3 a 5 anos y en cada momento vital de riesgo']
    },
    {
      nombre: 'Estadio 1: exceso o disfuncion de la adiposidad',
      color: '#5f7a4a',
      definicion: 'Presencia de sobrepeso u obesidad, de adiposidad abdominal, o de adiposidad disfuncional manifestada como intolerancia a la glucosa o prediabetes, <strong>sin</strong> otros factores de riesgo metabolicos ni enfermedad renal cronica. Es la puerta de entrada al continuo y el estadio donde la regresion es mas alcanzable.',
      fisiopatologia: 'El tejido adiposo desborda su capacidad de almacenamiento seguro y empieza a comportarse de forma disfuncional: libera acidos grasos libres y adipoquinas proinflamatorias, y la grasa se deposita de forma ectopica. Aparece la resistencia a la insulina, que es el primer eslabon de la cascada compartida. Todavia no hay dano de organo. El mecanismo detallado esta en el tema de Obesidad.',
      epidemiologia: 'Es el estadio mas prevalente en poblacion adulta en paises con alta carga de obesidad, y el que mas ha crecido en las ultimas decadas, tambien en adultos jovenes.',
      factores_riesgo: ['Balance energetico positivo mantenido y entorno obesogenico', 'Predisposicion genetica poligenica', 'Sueno insuficiente y trabajo por turnos', 'Farmacos que favorecen la ganancia de peso', 'Sedentarismo con perdida de masa muscular', 'Antecedente de diabetes gestacional o de sindrome de ovario poliquistico', 'Determinantes sociales adversos e inseguridad alimentaria'],
      clinica: 'Asintomatico. Se detecta midiendo el peso, la talla y sobre todo el <strong>perimetro de cintura</strong>, que identifica adiposidad central incluso con indice de masa corporal normal, y solicitando una glucemia o una HbA1c.',
      criterios_dx: 'Indice de masa corporal de 25 o mas (23 o mas en ascendencia asiatica), o perimetro de cintura elevado segun sexo y poblacion, o prediabetes (glucemia en ayuno de 100 a 125 mg/dL, HbA1c de 5.7 a 6.4% o glucosa a las 2 horas de 140 a 199 mg/dL), en ausencia de diabetes, hipertension, dislipidemia establecida y enfermedad renal cronica.',
      laboratorio: 'Glucemia en ayuno y HbA1c, perfil lipidico completo, creatinina con filtrado glomerular y cociente albumina/creatinina para confirmar que no hay criterios de estadio 2.',
      imagen: 'No necesaria de rutina. La composicion corporal o la elastografia hepatica se reservan a situaciones concretas (ver el tema de Obesidad).',
      complementarios: 'Cribado de apnea obstructiva del sueno y de enfermedad hepatica esteatosica metabolica con el indice FIB-4, que acompanan con frecuencia a este estadio y modifican el manejo.',
      dx_diferencial: 'La frontera con el estadio 2 la cruza cualquier factor metabolico establecido (diabetes, hipertension, hipertrigliceridemia, sindrome metabolico) o cualquier grado de enfermedad renal cronica: por eso hay que pedir el cociente albumina/creatinina antes de dejar a un paciente en estadio 1.',
      tx_medico: 'El objetivo es actuar sobre la adiposidad: alimentacion con deficit calorico moderado, actividad fisica con trabajo de fuerza y apoyo conductual estructurado, con una meta inicial de perder al menos un 5% del peso, que ya mejora la glucemia y los lipidos. Es el estadio en el que la regresion a estadio 0 es realista.',
      tx_farmacologico: 'Se valora tratamiento farmacologico de la obesidad segun los umbrales habituales (indice de masa corporal de 30, o de 27 con comorbilidad), priorizando los agonistas del receptor de GLP-1 y la tirzepatida por su magnitud de efecto. La metformina se considera en la prediabetes de alto riesgo (ver el tema de Diabetes Mellitus). No hay indicacion de estatina, IECA ni inhibidor de SGLT2 solo por estar en este estadio.',
      tx_intervencionista: 'Cirugia metabolica si se cumplen los criterios por indice de masa corporal (ver el tema de Obesidad); no la justifica el estadio CKM por si solo.',
      criterios_uci: 'No aplica. La intensificacion la marca la aparicion de cualquier criterio de estadio 2.',
      criterios_tips: 'Es el momento de abordar el sueno, el estres y los determinantes sociales: intervenciones que en estadios avanzados llegan tarde.',
      seguimiento_hospitalario: 'Peso, cintura, presion arterial y glucemia al menos una vez al ano; perfil lipidico y funcion renal con cociente albumina/creatinina cada 1 a 2 anos, o antes si el peso aumenta.',
      seguimiento_ambulatorio: 'Vigilar de forma activa la aparicion de hipertension, diabetes, dislipidemia o albuminuria, que suponen el paso a estadio 2. Reforzar el mantenimiento del peso, que es donde se pierde el resultado.',
      pronostico: 'Bueno si se actua: la perdida de peso mantenida puede devolver al paciente al estadio 0. Sin intervencion, la progresion a estadio 2 es la evolucion habitual en pocos anos.',
      algoritmo: ['Medir peso, talla y perimetro de cintura, y solicitar glucemia o HbA1c: la adiposidad abdominal define el estadio aunque el IMC sea normal', 'Pedir cociente albumina/creatinina y perfil lipidico para confirmar que no hay criterios de estadio 2', 'Objetivo: perder al menos un 5% del peso con alimentacion, actividad fisica con fuerza y apoyo conductual', 'Valorar farmaco para el peso segun los umbrales de la obesidad; metformina en la prediabetes de alto riesgo', 'Cribar apnea del sueno y calcular el FIB-4; vigilar cada ano la aparicion de criterios de estadio 2']
    },
    {
      nombre: 'Estadio 2: factores metabolicos y enfermedad renal',
      color: '#8a6a1f',
      definicion: 'Presencia de uno o mas factores de riesgo metabolicos establecidos (diabetes, hipertension, hipertrigliceridemia de 135 mg/dL o mas, o sindrome metabolico) o de <strong>enfermedad renal cronica de cualquier grado</strong>, sin enfermedad cardiovascular subclinica ni clinica. Es el estadio mas numeroso en la consulta de medicina interna y donde el tratamiento cambia mas el pronostico.',
      fisiopatologia: 'La resistencia a la insulina y la inflamacion cronica ya han producido consecuencias medibles en varios ejes a la vez: hiperglucemia, elevacion de la presion arterial, dislipidemia aterogenica e hiperfiltracion glomerular con albuminuria. El dano de organo esta comenzando pero todavia no se ha manifestado como enfermedad cardiovascular.',
      epidemiologia: 'Concentra a la mayor parte de los pacientes con diabetes tipo 2 y a una proporcion muy alta de los adultos de mediana edad y mayores. La enfermedad renal cronica esta especialmente infradiagnosticada en este estadio porque exige pedir el cociente albumina/creatinina.',
      factores_riesgo: ['Progresion desde el estadio 1 sin intervencion sobre la adiposidad', 'Duracion de la exposicion a los factores metabolicos', 'Episodios de lesion renal aguda', 'Uso de nefrotoxicos y de contraste yodado', 'Tabaquismo', 'Antecedente familiar de enfermedad renal o cardiovascular precoz', 'Determinantes sociales que dificultan la adherencia y el acceso a los farmacos'],
      clinica: 'Habitualmente asintomatico. Los sintomas, cuando aparecen, corresponden a cada enfermedad por separado y suelen ser tardios. La deteccion es analitica y con la medida de la presion arterial.',
      criterios_dx: 'Cualquiera de: diabetes, hipertension, trigliceridos de 135 mg/dL o mas, sindrome metabolico, o enfermedad renal cronica (filtrado glomerular menor de 60 mL/min/1.73 m2 o cociente albumina/creatinina de 30 mg/g o mas, mantenidos), en ausencia de enfermedad cardiovascular subclinica o clinica.',
      laboratorio: 'Anual: HbA1c, perfil lipidico con colesterol no-HDL, creatinina con filtrado glomerular y cociente albumina/creatinina, potasio. Peptidos natriureticos si hay sospecha de enfermedad cardiaca subclinica.',
      imagen: 'Ecocardiograma o puntuacion de calcio coronario cuando la decision terapeutica es incierta o se sospecha dano subclinico: un hallazgo positivo reclasifica al paciente a estadio 3.',
      complementarios: 'Estimacion del riesgo con las ecuaciones PREVENT a 10 y a 30 anos; revision de la adherencia y del acceso real a los farmacos, que en este estadio determina el resultado tanto como la eleccion terapeutica.',
      dx_diferencial: 'La frontera con el estadio 3 la cruza cualquier marcador de enfermedad cardiovascular subclinica (calcio coronario, peptidos natriureticos, alteraciones ecocardiograficas) o el ser un equivalente de riesgo alto: por eso conviene buscarlos de forma activa en el paciente con varios factores.',
      tx_medico: 'Tratar cada factor segun su tema (Diabetes Mellitus, Hipertension Arterial, Dislipidemias, Obesidad) pero con una logica anadida: elegir, cuando sea posible, las opciones que protegen mas de un eje. Presion arterial por debajo de 130/80, estatina segun el riesgo, control glucemico individualizado, abandono del tabaco y estilo de vida.',
      tx_farmacologico: 'Aqui es donde entran los farmacos transversales (ver la ficha correspondiente): <strong>inhibidor de SGLT2</strong> si hay enfermedad renal cronica o diabetes; <strong>agonista del receptor de GLP-1</strong> si hay obesidad o riesgo cardiovascular alto; <strong>finerenona</strong> si persiste la albuminuria pese a IECA o ARA y a inhibidor de SGLT2, con potasio menor de 5 mmol/L; <strong>IECA o ARA</strong> a dosis maxima tolerada si hay albuminuria e hipertension; y estatina.',
      tx_intervencionista: 'No aplica de forma directa; la cirugia metabolica se valora por los criterios de la obesidad y puede producir la remision de la diabetes y la regresion de estadio.',
      criterios_uci: 'Intensificar cuando aparezcan marcadores de enfermedad subclinica, cuando la albuminuria progrese pese al tratamiento, o cuando el riesgo estimado sea alto.',
      criterios_tips: 'La albuminuria es reversible: reducirla es un objetivo terapeutico en si mismo y se asocia a mejor pronostico renal y cardiovascular.',
      seguimiento_hospitalario: 'Cribado anual completo: presion arterial, HbA1c, perfil lipidico, filtrado glomerular y cociente albumina/creatinina. Potasio y funcion renal a las 2 a 4 semanas de iniciar o subir un IECA, un ARA o la finerenona.',
      seguimiento_ambulatorio: 'Revisar en cada visita la adherencia, la tolerancia y el acceso a los farmacos, y reevaluar el estadio: la mejoria de la albuminuria o la remision de la diabetes pueden significar regresion.',
      pronostico: 'Es el estadio con mayor rendimiento del tratamiento. El abordaje multifactorial intensivo reduce de forma marcada los eventos y la mortalidad (estudio Steno-2), y los farmacos cardiorrenales anaden beneficio sobre el control de los factores.',
      algoritmo: ['Confirmar el estadio: diabetes, hipertension, trigliceridos de 135 o mas, sindrome metabolico o enfermedad renal cronica', 'Pedir siempre filtrado glomerular Y cociente albumina/creatinina: la enfermedad renal se pierde si solo se mira la creatinina', 'Buscar de forma activa enfermedad subclinica (peptidos natriureticos, calcio coronario, ecocardiograma) para no infraestadificar', 'Elegir farmacos que protejan mas de un eje: inhibidor de SGLT2, agonista de GLP-1, finerenona, IECA o ARA, y estatina', 'Estimar el riesgo con PREVENT a 10 y 30 anos y revisar adherencia y acceso; reevaluar el estadio, que puede retroceder']
    },
    {
      nombre: 'Estadio 3: enfermedad cardiovascular subclinica',
      color: '#8c3a34',
      definicion: 'Presencia de enfermedad cardiovascular <strong>subclinica</strong> en un paciente con factores CKM: aterosclerosis detectada por imagen (calcio coronario o placa), o dano miocardico subclinico (peptidos natriureticos elevados, troponina cronicamente elevada, alteraciones ecocardiograficas). Se incluyen tambien los <strong>equivalentes de riesgo alto</strong>: la enfermedad renal cronica de muy alto riesgo y un riesgo predicho alto.',
      fisiopatologia: 'El dano que en el estadio 2 era funcional y reversible ya ha dejado huella estructural: placa en la pared arterial, fibrosis e hipertrofia en el miocardio, o reduccion sostenida de la masa nefronal. El paciente sigue asintomatico, pero su trayectoria ya no es la de alguien con factores de riesgo aislados.',
      epidemiologia: 'Es un estadio infrarreconocido porque exige buscarlo: sin peptidos natriureticos, sin calcio coronario y sin ecocardiograma, estos pacientes se manejan como si fueran estadio 2 y se infratratan.',
      factores_riesgo: ['Varios factores metabolicos coexistentes y de larga duracion', 'Albuminuria intensa o filtrado glomerular en descenso', 'Diabetes de larga evolucion', 'Antecedente familiar de enfermedad cardiovascular precoz', 'Tabaquismo activo', 'Lipoproteina(a) elevada (ver el tema de Dislipidemias)', 'Inflamacion cronica persistente'],
      clinica: 'Asintomatico por definicion: si hay sintomas de enfermedad cardiovascular, el paciente esta en estadio 4. Puede haber signos indirectos como la hipertrofia ventricular en el electrocardiograma o un soplo carotideo.',
      criterios_dx: 'Aterosclerosis subclinica por imagen (calcio coronario positivo, placa carotidea o coronaria), o enfermedad cardiaca subclinica (peptidos natriureticos elevados, troponina de alta sensibilidad cronicamente elevada, hipertrofia o disfuncion diastolica en el ecocardiograma), o equivalente de riesgo alto (enfermedad renal cronica de muy alto riesgo por la matriz de KDIGO, o riesgo predicho alto).',
      laboratorio: 'Peptidos natriureticos y troponina de alta sensibilidad como marcadores de entrada al estadio; el resto del panel del estadio 2, con vigilancia mas estrecha del potasio y de la funcion renal por la intensidad del tratamiento.',
      imagen: 'Puntuacion de calcio coronario, ecocardiograma con valoracion de la funcion diastolica y del strain, y ecografia carotidea o angio-TC coronaria segun disponibilidad y contexto.',
      complementarios: 'Reevaluacion del riesgo con PREVENT, y valoracion de si procede derivar a cardiologia o nefrologia para completar el estudio o compartir el seguimiento.',
      dx_diferencial: 'La frontera con el estadio 4 la cruza la aparicion de enfermedad cardiovascular clinica: un evento, un diagnostico de insuficiencia cardiaca sintomatica o una fibrilacion auricular documentada.',
      tx_medico: 'El objetivo cambia: ya no es solo controlar factores, sino <strong>prevenir el primer evento</strong> en un paciente que ya tiene enfermedad. Objetivos mas estrictos de lipidos y de presion arterial, y prioridad absoluta al abandono del tabaco y a la rehabilitacion del estilo de vida.',
      tx_farmacologico: 'Intensificar: estatina de alta intensidad con objetivos de colesterol LDL propios del riesgo alto o muy alto (ver el tema de Dislipidemias), presion arterial por debajo de 130/80, e <strong>inhibidor de SGLT2 y agonista del receptor de GLP-1 con beneficio probado aunque el control metabolico ya sea bueno</strong>, porque su efecto es independiente de la HbA1c. Finerenona si persiste la albuminuria. La antiagregacion en prevencion primaria se individualiza y no es sistematica.',
      tx_intervencionista: 'No indicada por el estadio en si; la revascularizacion corresponde a la enfermedad clinica.',
      criterios_uci: 'Intensificar el seguimiento y el tratamiento; derivar a cardiologia o nefrologia cuando el estudio o la titulacion lo requieran.',
      criterios_tips: 'Es el ultimo estadio en el que se puede hablar de prevencion primaria: reconocerlo es la diferencia entre prevenir el evento y tratarlo.',
      seguimiento_hospitalario: 'Control cada 3 a 6 meses de presion arterial, lipidos, HbA1c, funcion renal y albuminuria, con reevaluacion periodica de los marcadores que definieron el estadio.',
      seguimiento_ambulatorio: 'Seguimiento compartido con cardiologia o nefrologia segun el eje dominante, con objetivos escritos y revision sistematica de la adherencia.',
      pronostico: 'Peor que el del estadio 2 pero muy modificable: es el punto de mayor rendimiento de la intensificacion terapeutica, porque el evento todavia no ha ocurrido.',
      algoritmo: ['Buscar de forma activa enfermedad subclinica en el paciente con varios factores: peptidos natriureticos, troponina, calcio coronario, ecocardiograma', 'Incluir tambien los equivalentes de riesgo alto: enfermedad renal de muy alto riesgo o riesgo predicho alto', 'Intensificar objetivos: colesterol LDL segun riesgo alto o muy alto, presion arterial por debajo de 130/80', 'Anadir inhibidor de SGLT2 y agonista de GLP-1 con beneficio probado aunque el control metabolico sea bueno', 'Compartir el seguimiento con cardiologia o nefrologia; es el ultimo estadio de prevencion primaria']
    },
    {
      nombre: 'Estadio 4: enfermedad cardiovascular clinica',
      color: '#7a1f3d',
      definicion: 'Enfermedad cardiovascular <strong>clinica</strong> en un paciente con factores CKM: cardiopatia isquemica, insuficiencia cardiaca, ictus, enfermedad arterial periferica o fibrilacion auricular. Se subdivide en <strong>4a</strong> (sin fallo renal) y <strong>4b</strong> (con fallo renal, es decir, filtrado glomerular muy bajo o tratamiento renal sustitutivo), porque el fallo renal cambia de forma sustancial el pronostico y las opciones terapeuticas.',
      fisiopatologia: 'El dano acumulado en los tres ejes se ha traducido en enfermedad manifiesta. A partir de aqui los ejes se retroalimentan de forma acelerada: la insuficiencia cardiaca reduce la perfusion renal y la congestion venosa dana el rinon; la enfermedad renal genera sobrecarga, anemia y alteraciones minerales que danan el corazon. Es el sindrome cardiorrenal en su expresion clinica.',
      epidemiologia: 'Concentra la mayor parte de la mortalidad y del gasto sanitario del continuo CKM. La coexistencia de enfermedad renal (estadio 4b) multiplica el riesgo y limita el arsenal terapeutico.',
      factores_riesgo: ['Progresion no controlada desde estadios previos', 'Enfermedad renal cronica avanzada', 'Diabetes de larga evolucion con mal control', 'Edad avanzada y fragilidad', 'Falta de acceso o de adherencia al tratamiento', 'Hospitalizaciones repetidas por descompensacion', 'Anemia y alteraciones del metabolismo mineral en la enfermedad renal'],
      clinica: 'La de cada enfermedad: angina o infarto, disnea y edemas por insuficiencia cardiaca (con frecuencia con fraccion de eyeccion preservada en este perfil de paciente), focalidad neurologica por ictus, claudicacion o isquemia critica, y palpitaciones o embolia por fibrilacion auricular.',
      criterios_dx: 'Diagnostico establecido de cualquiera de esas entidades por sus propios criterios. La subdivision en 4a y 4b depende de la presencia de fallo renal.',
      laboratorio: 'El del estadio 3 mas los parametros propios de cada enfermedad y de la enfermedad renal avanzada: hemograma, potasio, bicarbonato, calcio, fosforo y hormona paratiroidea, peptidos natriureticos seriados.',
      imagen: 'La correspondiente a cada enfermedad: ecocardiograma, coronariografia, imagen cerebral, ecografia Doppler arterial.',
      complementarios: 'Rehabilitacion cardiaca, planificacion anticipada de cuidados en el paciente fragil o con fallo renal avanzado, y coordinacion explicita entre medicina interna, cardiologia y nefrologia para evitar recomendaciones contradictorias.',
      dx_diferencial: 'La distincion clave dentro del estadio es 4a frente a 4b, porque el fallo renal condiciona la eleccion y la dosis de casi todos los farmacos y ensombrece el pronostico.',
      tx_medico: 'Tratamiento dirigido por guias de cada enfermedad, <strong>sin abandonar el control de los ejes metabolico y renal</strong>, que siguen determinando el pronostico. Rehabilitacion, manejo del volumen, y atencion a la fragilidad y a la carga de tratamiento.',
      tx_farmacologico: 'Terapia optima de la enfermedad clinica (los cuatro pilares en la insuficiencia cardiaca, antiagregacion y estatina de alta intensidad en la enfermedad ateroesclerotica, anticoagulacion en la fibrilacion auricular segun el riesgo) mas los farmacos transversales, que aqui tienen indicacion propia: el inhibidor de SGLT2 esta indicado en la insuficiencia cardiaca con cualquier fraccion de eyeccion y en la enfermedad renal cronica, y la finerenona anade beneficio en la insuficiencia cardiaca con fraccion de eyeccion levemente reducida o preservada.',
      tx_intervencionista: 'Revascularizacion coronaria, carotidea o de miembros inferiores, dispositivos y ablacion segun la indicacion de cada enfermedad; tratamiento renal sustitutivo y valoracion de trasplante en el estadio 4b.',
      criterios_uci: 'Los del evento agudo: sindrome coronario, insuficiencia cardiaca descompensada, ictus, isquemia critica o complicaciones de la enfermedad renal avanzada.',
      criterios_tips: 'La polifarmacia y la carga de tratamiento son un problema real en este estadio: conviene revisar de forma periodica que cada farmaco sigue aportando y desprescribir lo que no.',
      seguimiento_hospitalario: 'Aprovechar cada ingreso para optimizar la terapia dirigida por guias antes del alta, comprobar que estan los farmacos con beneficio cardiorrenal, y dejar el plan y las citas por escrito.',
      seguimiento_ambulatorio: 'Seguimiento estrecho y multidisciplinar, con especial atencion a la transicion tras el alta, que es el periodo de mayor riesgo de reingreso.',
      pronostico: 'El peor del continuo, sobre todo en el estadio 4b. Aun asi, el tratamiento optimo y sostenido mejora de forma significativa la supervivencia y la calidad de vida, y la regresion parcial de los ejes metabolico y renal sigue aportando beneficio.',
      algoritmo: ['Confirmar la enfermedad cardiovascular clinica y determinar si hay fallo renal (4a frente a 4b)', 'Aplicar la terapia dirigida por guias de cada enfermedad, sin descuidar los ejes metabolico y renal', 'Asegurar los farmacos con beneficio cardiorrenal: inhibidor de SGLT2 en insuficiencia cardiaca y enfermedad renal; finerenona segun el perfil', 'Coordinar de forma explicita con cardiologia y nefrologia y revisar la polifarmacia y la carga de tratamiento', 'Optimizar antes del alta y vigilar la transicion, que es el periodo de mayor riesgo de reingreso']
    },
    {
      nombre: 'Farmacos que actuan en los tres ejes',
      color: '#3d6b8a',
      modalLabels: LABELS_ESTANDAR,
      definicion: 'Grupo de farmacos que, a diferencia de los tratamientos clasicos dirigidos a un solo factor, reducen eventos en mas de un eje del continuo CKM a la vez: inhibidores de SGLT2, agonistas del receptor de GLP-1 y antagonistas no esteroideos del receptor mineralocorticoide (finerenona). Son la razon practica por la que el marco CKM cambia decisiones y no solo vocabulario.',
      fisiopatologia: 'Actuan sobre mecanismos compartidos y no solo sobre el parametro que miden. Los inhibidores de SGLT2 reducen la reabsorcion tubular de sodio y glucosa, restauran la retroalimentacion tubuloglomerular (baja la hiperfiltracion), producen natriuresis y descongestion, y mejoran el metabolismo energetico miocardico. Los agonistas de GLP-1 reducen el peso y la inflamacion vascular y mejoran la funcion endotelial. La finerenona bloquea la sobreactivacion del receptor mineralocorticoide, que media inflamacion y fibrosis en rinon y corazon, con menos efecto sobre el potasio y el eje hormonal que los esteroideos.',
      epidemiologia: 'La evidencia es amplia y consistente: EMPA-REG, CREDENCE, DAPA-CKD y EMPA-KIDNEY para los inhibidores de SGLT2; LEADER, SELECT y FLOW para los agonistas de GLP-1; FIDELIO, FIGARO y FINEARTS-HF para la finerenona. En conjunto cubren los tres ejes con y sin diabetes.',
      factores_riesgo: ['Inhibidores de SGLT2: cetoacidosis euglucemica (suspender 3 a 4 dias antes de cirugia mayor o ayuno), infecciones genitales micoticas, deplecion de volumen', 'Agonistas de GLP-1: efectos digestivos, contraindicados con antecedente personal o familiar de carcinoma medular de tiroides o MEN2', 'Finerenona: hiperpotasemia, por lo que se inicia solo con potasio menor de 5 mmol/L y se controla a las 4 semanas', 'Combinacion con IECA o ARA: vigilar potasio y funcion renal', 'Descenso inicial del filtrado glomerular con los inhibidores de SGLT2, que es esperable y no obliga a suspender', 'Enfermedad renal avanzada, que limita la dosis o el uso de varios de ellos'],
      clinica: 'Inhibidor de SGLT2: enfermedad renal cronica, insuficiencia cardiaca con cualquier fraccion de eyeccion, y diabetes tipo 2 con riesgo cardiorrenal. Agonista de GLP-1: obesidad, diabetes tipo 2 con enfermedad cardiovascular o riesgo alto, y enfermedad renal diabetica con albuminuria. Finerenona: enfermedad renal cronica con albuminuria en diabetes tipo 2, e insuficiencia cardiaca con fraccion de eyeccion levemente reducida o preservada.',
      criterios_dx: 'La eleccion se guia por el eje dominante y no por la HbA1c: si domina la insuficiencia cardiaca o la enfermedad renal, inhibidor de SGLT2; si domina la obesidad o el riesgo ateroesclerotico, agonista de GLP-1; si persiste la albuminuria pese a IECA o ARA y a inhibidor de SGLT2, finerenona. Con frecuencia se combinan.',
      laboratorio: 'Funcion renal y potasio antes de iniciar y a las 2 a 4 semanas de cada cambio, sobre todo con finerenona e IECA o ARA. HbA1c y peso para valorar la respuesta metabolica, sin olvidar que el beneficio cardiorrenal es independiente de ella.',
      imagen: 'No requerida para su indicacion.',
      complementarios: 'Educacion sobre las reglas de los dias de enfermedad con inhibidores de SGLT2 (suspender ante enfermedad aguda con ayuno) y sobre el escalado lento de los agonistas de GLP-1 para limitar los efectos digestivos.',
      dx_diferencial: 'No sustituyen al tratamiento clasico: la estatina, el IECA o ARA y el control de la presion arterial siguen siendo la base. Son un anadido con beneficio propio, no un reemplazo.',
      tx_medico: 'Estilo de vida y control de los factores clasicos como base, siempre.',
      tx_farmacologico: 'Inhibidores de SGLT2 (empagliflozina, dapagliflozina, canagliflozina): se inician con filtrado glomerular de 20 o mas y se mantienen aunque descienda despues. Agonistas del receptor de GLP-1 (semaglutida, liraglutida, dulaglutida) y tirzepatida: escalado lento. Finerenona: iniciar con potasio menor de 5 mmol/L y titular segun el filtrado y el potasio. En muchos pacientes de estadio 2 o 3 se acaban combinando dos o los tres, junto con IECA o ARA y estatina.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Suspender de forma transitoria el inhibidor de SGLT2 ante enfermedad aguda con ayuno, cirugia mayor o riesgo de deplecion de volumen; suspender la finerenona si el potasio supera 5.5 mmol/L y reevaluar.',
      criterios_tips: 'El descenso inicial del filtrado glomerular al iniciar un inhibidor de SGLT2 o un IECA es hemodinamico y esperable: no es toxicidad y no justifica suspenderlos si es menor del 30% y se estabiliza.',
      seguimiento_hospitalario: 'Revisar en cada ingreso que el paciente con enfermedad renal o insuficiencia cardiaca tiene indicado un inhibidor de SGLT2, y reintroducir los farmacos suspendidos por el proceso agudo antes del alta.',
      seguimiento_ambulatorio: 'Control de potasio y funcion renal tras cada cambio, revision de la tolerancia y del acceso real al farmaco, y no retirar por un descenso esperable del filtrado.',
      pronostico: 'Aportan reducciones consistentes de eventos renales y cardiovasculares que se suman a las del tratamiento clasico, y en varios ensayos tambien de mortalidad.',
      algoritmo: ['Elegir por el eje dominante, no por la HbA1c', 'Insuficiencia cardiaca o enfermedad renal cronica: inhibidor de SGLT2, con filtrado de 20 o mas y manteniendolo aunque baje despues', 'Obesidad o riesgo ateroesclerotico alto: agonista del receptor de GLP-1 con beneficio probado', 'Albuminuria persistente pese a IECA o ARA y a inhibidor de SGLT2, con potasio menor de 5: anadir finerenona', 'Controlar potasio y funcion renal a las 2 a 4 semanas; no suspender por el descenso inicial esperable del filtrado']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El marco CKM no se aplica solo en la consulta. El ingreso hospitalario es donde con mas frecuencia se descubre que un paciente llevaba anos en estadio 2 o 3 sin que nadie lo hubiera nombrado, y es una oportunidad de reclasificar, iniciar los farmacos con beneficio cardiorrenal y dejar un plan que atraviese las tres especialidades.',
    parametros: ['Estadificar al ingreso: peso, talla, cintura, presion arterial, HbA1c, perfil lipidico, filtrado glomerular y cociente albumina/creatinina', 'Pedir el cociente albumina/creatinina si no hay uno reciente: es la prueba que mas cambia el estadio y la que mas se olvida', 'Comprobar que el paciente con insuficiencia cardiaca o enfermedad renal cronica tiene indicado un inhibidor de SGLT2, y prescribirlo antes del alta si no hay contraindicacion', 'Suspender de forma transitoria el inhibidor de SGLT2 ante ayuno, cirugia mayor o enfermedad aguda con riesgo de cetoacidosis euglucemica, y reintroducirlo antes del alta', 'Vigilar potasio y funcion renal con cada cambio de IECA, ARA, inhibidor de SGLT2 o finerenona', 'No retirar farmacos con beneficio cardiorrenal por un descenso hemodinamico y esperable del filtrado glomerular', 'Revisar la polifarmacia y desprescribir lo que ya no aporta, sobre todo en el estadio 4 y en el paciente fragil', 'Registrar en el informe de alta el estadio CKM y un plan explicito por ejes, con las citas correspondientes', 'Valorar los determinantes sociales: acceso a los farmacos, a la consulta y a una alimentacion adecuada, sin lo cual el plan no se cumplira'],
    criterios_uci_general: 'No los determina el marco CKM sino el evento agudo: sindrome coronario, insuficiencia cardiaca descompensada, ictus, isquemia critica, o complicaciones de la enfermedad renal avanzada.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'En el estadio 4b, valoracion de tratamiento renal sustitutivo y de trasplante renal, o de trasplante cardiaco segun el eje dominante. La obesidad grave puede ser una barrera para el trasplante y en esos casos la cirugia metabolica se usa como puente.',
    prevencion: 'El marco CKM es, en esencia, una estrategia de prevencion escalonada. <strong>Primordial</strong> en el estadio 0: mantener el estado con alimentacion, actividad fisica, sueno y no fumar, apoyado en politicas de salud publica. <strong>Primaria</strong> en los estadios 1 a 3: actuar sobre la adiposidad antes de que aparezcan los factores metabolicos, tratar cada factor cuando aparece, y buscar de forma activa la enfermedad subclinica para intensificar antes del primer evento. <strong>Secundaria</strong> en el estadio 4: terapia dirigida por guias sin abandonar los ejes metabolico y renal. En todos los estadios, atender los determinantes sociales de la salud, que el marco reconoce como parte del problema y no como contexto.'
  }
};

export const compCites = {
  'Estadio 0: sin factores de riesgo': [1, 19],
  'Estadio 1: exceso o disfuncion de la adiposidad': [1, 2],
  'Estadio 2: factores metabolicos y enfermedad renal': [1, 4, 5, 17],
  'Estadio 3: enfermedad cardiovascular subclinica': [1, 3],
  'Estadio 4: enfermedad cardiovascular clinica': [1, 14],
  'Farmacos que actuan en los tres ejes': [6, 7, 8, 9, 10, 11, 12, 13]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Estadios CKM de la AHA (calculadora disponible)': [1, 2],
  'Ecuaciones PREVENT (AHA 2024)': [3],
  'Matriz de riesgo renal de KDIGO': [4],
  'Criterios de sindrome metabolico': [1]
};
export const escalaCalc = {
  'Estadios CKM de la AHA (calculadora disponible)': 'estadio-ckm'
};
export const compGroups = [
  { name: 'Los cinco estadios', items: ['Estadio 0: sin factores de riesgo', 'Estadio 1: exceso o disfuncion de la adiposidad', 'Estadio 2: factores metabolicos y enfermedad renal', 'Estadio 3: enfermedad cardiovascular subclinica', 'Estadio 4: enfermedad cardiovascular clinica'] },
  { name: 'Tratamiento transversal', items: ['Farmacos que actuan en los tres ejes'] }
];
export const complicacionesIntro = 'Las cinco primeras fichas son los estadios del continuo CKM, de 0 a 4, cada una con lo que la define, como se detecta y que se hace en ella. La ultima es transversal: los farmacos que actuan sobre los tres ejes a la vez (inhibidores de SGLT2, agonistas del receptor de GLP-1 y finerenona), que son la razon practica por la que este marco cambia decisiones. El detalle de cada enfermedad vive en su tema: Obesidad, Diabetes Mellitus, Hipertension Arterial y Dislipidemias.';
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
  root: { title: 'SINDROME CARDIOVASCULAR-RENAL-METABOLICO', color: '#3d6b8a', target: 'definicion' },
  branches: [
    { title: 'Los cinco estadios', sub: 'Un continuo, no cuatro enfermedades', color: '#3d6b8a', target: 'complicaciones', leaves: [
      { title: 'Estadio 0', sub: 'Sin factores; prevencion primordial', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Estadio 1', sub: 'Adiposidad excesiva o disfuncional', color: '#5f7a4a', target: 'complicaciones' },
      { title: 'Estadio 2', sub: 'Factores metabolicos o enfermedad renal', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Estadio 3', sub: 'Enfermedad cardiovascular subclinica', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Estadio 4', sub: 'Enfermedad clinica; 4a y 4b', color: '#7a1f3d', target: 'complicaciones' }
    ] },
    { title: 'Lo que lo hace util', sub: 'Por que no es solo vocabulario', color: '#6b3a5a', target: 'complicaciones', leaves: [
      { title: 'Farmacos de los tres ejes', sub: 'iSGLT2, arGLP1 y finerenona', color: '#3d6b8a', target: 'complicaciones' },
      { title: 'Los estadios retroceden', sub: 'Perder peso o revertir albuminuria', color: '#3f6b52', target: 'definicion' },
      { title: 'Ecuaciones PREVENT', sub: 'Riesgo a 10 y a 30 anos', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Determinantes sociales', sub: 'Parte del marco, no contexto', color: '#6b4a2e', target: 'seguimiento' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 4], no_invasivos: [1, 3], imagen: [2] };
export const clasificacionCite = [1, 3, 4];
export const seguimientoCite = [1, 19];
