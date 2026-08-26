// topics/esclerosis-multiple/content.js: Esclerosis Múltiple y Enfermedades Desmielinizantes.
// Cierra el clúster "Trastornos paroxísticos y del movimiento" de Neurología (junto con
// Trastornos del Movimiento), cubriendo el ítem "Esclerosis múltiple y otras enfermedades
// desmielinizantes" del temario.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás debe ser un `export const` de nivel superior, HERMANO de `content`.
//
// IMPORTANTE (ver memoria del proyecto sobre categories): debe ser un array de objetos
// {id, label} con id en {definicion, diagnostico, clasificacion, complicaciones, seguimiento,
// autoevaluacion, bibliografia}, NUNCA strings sueltos (bug encontrado y corregido en los 5
// temas anteriores de esta sesión: study-view.js arma la barra de navegación superior con
// c.id/c.label y un string suelto produce "undefined" en cada botón).
//
// IMPORTANTE (ver memoria del proyecto sobre study.js): construir cada pregunta con la respuesta
// correcta en options[0]/correct:0 primero, verificar el conteo, y solo entonces redistribuir
// mecánicamente con un script.
//
// Estructura confirmada por el usuario: 4 fichas de entidad (EM remitente-recurrente, EM
// progresiva, NMOSD, ADEM) + 4 fichas de complicación (brote agudo, neuritis óptica,
// espasticidad/disfunción vesical-intestinal, progresión de discapacidad y deterioro cognitivo).
// Calculadora: criterios de McDonald 2017. 1 figura SVG: localización típica de lesiones en RM.

export const meta = {
  id: 'esclerosis-multiple',
  titulo: 'Esclerosis Múltiple',
  subtitulo: 'Módulo 36 · Medicina Interna',
  accent: '#2e5c7a',
  accentDim: '#6a95ad'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const lesionesHtml = `
<div style="display:flex;gap:20px;justify-content:center;flex-wrap:wrap;max-width:520px;margin:0 auto;">
  <div style="text-align:center;">
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style="width:160px;height:160px;">
      <circle cx="80" cy="80" r="70" fill="none" stroke="var(--line)" stroke-width="2"/>
      <path d="M60 40 Q80 80 60 120" fill="none" stroke="var(--ink-dim)" stroke-width="2"/>
      <path d="M100 40 Q80 80 100 120" fill="none" stroke="var(--ink-dim)" stroke-width="2"/>
      <ellipse cx="55" cy="55" rx="5" ry="10" fill="#3d6b9e" transform="rotate(-30 55 55)"/>
      <ellipse cx="58" cy="80" rx="5" ry="11" fill="#3d6b9e" transform="rotate(-15 58 80)"/>
      <ellipse cx="55" cy="105" rx="5" ry="10" fill="#3d6b9e" transform="rotate(15 55 105)"/>
      <ellipse cx="105" cy="55" rx="5" ry="10" fill="#3d6b9e" transform="rotate(30 105 55)"/>
      <ellipse cx="102" cy="105" rx="5" ry="10" fill="#3d6b9e" transform="rotate(-15 102 105)"/>
      <circle cx="45" cy="30" r="4" fill="#8c3a34"/>
    </svg>
    <div style="font-weight:700;color:#3d6b9e;">Periventricular</div>
    <div style="color:var(--ink-dim);font-size:10.5px;">Ovoides, perpendiculares a los ventrículos ("dedos de Dawson")</div>
  </div>
  <div style="text-align:center;">
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style="width:160px;height:160px;">
      <path d="M20 100 Q80 20 140 100 Q80 140 20 100 Z" fill="none" stroke="var(--line)" stroke-width="2"/>
      <circle cx="45" cy="70" r="6" fill="#8c3a34"/>
      <circle cx="100" cy="55" r="6" fill="#8c3a34"/>
      <circle cx="115" cy="90" r="6" fill="#8c3a34"/>
    </svg>
    <div style="font-weight:700;color:#8c3a34;">Yuxtacortical</div>
    <div style="color:var(--ink-dim);font-size:10.5px;">En contacto directo con la corteza cerebral</div>
  </div>
  <div style="text-align:center;">
    <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style="width:160px;height:160px;">
      <ellipse cx="80" cy="90" rx="55" ry="45" fill="none" stroke="var(--line)" stroke-width="2"/>
      <ellipse cx="80" cy="130" rx="30" ry="18" fill="none" stroke="var(--line)" stroke-width="2"/>
      <circle cx="65" cy="80" r="6" fill="#5c4a73"/>
      <circle cx="90" cy="130" r="5" fill="#5c4a73"/>
    </svg>
    <div style="font-weight:700;color:#5c4a73;">Infratentorial</div>
    <div style="color:var(--ink-dim);font-size:10.5px;">Tronco encefálico y cerebelo</div>
  </div>
  <div style="text-align:center;">
    <svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" style="width:100px;height:160px;">
      <rect x="35" y="10" width="30" height="140" rx="15" fill="none" stroke="var(--line)" stroke-width="2"/>
      <ellipse cx="50" cy="60" rx="8" ry="14" fill="#3f6b52"/>
      <ellipse cx="50" cy="110" rx="7" ry="12" fill="#3f6b52"/>
    </svg>
    <div style="font-weight:700;color:#3f6b52;">Medular</div>
    <div style="color:var(--ink-dim);font-size:10.5px;">Típicamente corta (&lt;3 cuerpos vertebrales), a diferencia de NMOSD</div>
  </div>
  <div style="flex:1 1 100%;text-align:center;color:var(--ink-dim);font-size:11px;margin-top:4px;">La diseminación en espacio (McDonald 2017) exige ≥1 lesión T2 en ≥2 de estas 4 regiones típicas.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La esclerosis múltiple (EM) es la enfermedad desmielinizante autoinmune más frecuente del sistema nervioso central, caracterizada por episodios de inflamación focal (placas) que producen disfunción neurológica, con un curso predominantemente de brotes y remisiones al inicio que en muchos casos evoluciona hacia progresión independiente de brotes. Bajo el mismo espectro clínico-radiológico conviven otras enfermedades desmielinizantes que es crítico distinguir de la EM, dado que su tratamiento difiere sustancialmente y algunos fármacos usados en EM pueden empeorarlas.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Las 4 entidades de este tema.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>EM remitente-recurrente</strong>: la forma más frecuente al diagnóstico (~85%), brotes con recuperación parcial o completa.</li>
    <li><strong>EM progresiva</strong> (secundaria y primaria): acumulación de discapacidad independiente de brotes.</li>
    <li><strong>Trastorno del espectro de neuromielitis óptica (NMOSD)</strong>: mediado por anticuerpos anti-acuaporina-4, un mimetizador crítico de la EM con tratamiento distinto.</li>
    <li><strong>Encefalomielitis diseminada aguda (ADEM)</strong>: enfermedad monofásica posinfecciosa, con encefalopatía como rasgo distintivo.</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Localización de las lesiones.</strong>${figBlock('Imagen 1', 'Localización típica de las lesiones desmielinizantes en RM', lesionesHtml)} El reconocimiento de este patrón de distribución (periventricular, yuxtacortical, infratentorial, medular) es la base tanto del diagnóstico por imagen como de los criterios de McDonald 2017 (calculadora más abajo).</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama de manejo.</strong> El brote agudo se trata con corticoides en dosis altas; el curso a largo plazo se modifica con terapias modificadoras de la enfermedad (TME), cuya elección depende de la actividad de la enfermedad y, crucialmente, del diagnóstico correcto (una TME de EM puede empeorar el NMOSD). El desarrollo completo de las 4 manifestaciones/complicaciones se detalla en Complicaciones.</p>`;

export const bibliografia = [
  'Thompson AJ, Banwell BL, Barkhof F, et al. Diagnosis of multiple sclerosis: 2017 revisions of the McDonald criteria. Lancet Neurol. 2018;17(2):162-173.',
  'Wingerchuk DM, Banwell B, Bennett JL, et al. International consensus diagnostic criteria for neuromyelitis optica spectrum disorders. Neurology. 2015;85(2):177-189.',
  'Reich DS, Lucchinetti CF, Calabresi PA. Multiple Sclerosis. N Engl J Med. 2018;378(2):169-180.',
  'Lublin FD, Reingold SC, Cohen JA, et al. Defining the clinical course of multiple sclerosis: the 2013 revisions. Neurology. 2014;83(3):278-286.',
  'Rae-Grant A, Day GS, Marrie RA, et al. Practice guideline recommendations summary: Disease-modifying therapies for adults with multiple sclerosis. Neurology. 2018;90(17):777-788.',
  'Montalban X, Hauser SL, Kappos L, et al. Ocrelizumab versus Placebo in Primary Progressive Multiple Sclerosis. N Engl J Med. 2017;376(3):209-220.',
  'Hauser SL, Bar-Or A, Comi G, et al. Ocrelizumab versus Interferon Beta-1a in Relapsing Multiple Sclerosis. N Engl J Med. 2017;376(3):221-234.',
  'Weinshenker BG, O\'Brien PC, Petterson TM, et al. A randomized trial of plasma exchange in acute central nervous system inflammatory demyelinating disease. Ann Neurol. 1999;46(6):878-886.',
  'Sellner J, Boggild M, Clanet M, et al. EFNS guidelines on diagnosis and management of neuromyelitis optica. Eur J Neurol. 2010;17(8):1019-1032.',
  'Pittock SJ, Berthele A, Fujihara K, et al. Eculizumab in Aquaporin-4-Positive Neuromyelitis Optica Spectrum Disorder. N Engl J Med. 2019;381(7):614-625.',
  'Tenembaum S, Chitnis T, Ness J, Hahn JS. Acute disseminated encephalomyelitis. Neurology. 2007;68(16 Suppl 2):S23-36.',
  'Pohl D, Alper G, Van Haren K, et al. Acute disseminated encephalomyelitis: Updates on an inflammatory CNS syndrome. Neurology. 2016;87(9 Suppl 2):S38-45.',
  'Filippi M, Bar-Or A, Piehl F, et al. Multiple sclerosis. Nat Rev Dis Primers. 2018;4:43.',
  'Beck RW, Cleary PA, Anderson MM Jr, et al. A randomized, controlled trial of corticosteroids in the treatment of acute optic neuritis. N Engl J Med. 1992;326(9):581-588.',
  'Bove R, Chitnis T. Sexual disparities in the incidence and course of MS. Clin Immunol. 2013;149(2):201-210.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Síndrome clínico aislado (CIS)',
      tituloB: 'Enfermedad establecida (brotes recurrentes o progresión)',
      compensada: 'Primer episodio de disfunción neurológica compatible con desmielinización (neuritis óptica, mielitis parcial, síndrome de tronco/cerebelo), sin cumplir aún el requisito de diseminación en tiempo; puede o no evolucionar a EM clínicamente definida según los hallazgos adicionales.',
      descompensada: 'Brotes recurrentes con recuperación parcial o completa (EM remitente-recurrente) o acumulación progresiva de discapacidad independiente de brotes (EM progresiva); el diagnóstico ya está establecido por los criterios de McDonald.'
    },
    laboratorio: [
      { prueba: 'LCR: bandas oligoclonales específicas', utilidad: 'Presentes (en LCR pero no en suero) en la mayoría de los casos de EM; apoyan la diseminación en tiempo en los criterios de McDonald. Típicamente AUSENTES en ADEM, un dato diferencial de apoyo.' },
      { prueba: 'AQP4-IgG sérico (ensayo basado en células)', utilidad: 'Positivo en la mayoría de los casos de NMOSD; alta especificidad. Su negatividad no descarta NMOSD (considerar anti-MOG).' },
      { prueba: 'Anti-MOG sérico', utilidad: 'Positivo en un subgrupo de pacientes AQP4-negativos con fenotipo NMOSD-like o ADEM-like, típicamente de mejor pronóstico.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios de McDonald 2017 (calculadora)', interpretacion: 'Combina el número de ataques clínicos, la evidencia objetiva de lesiones, y la diseminación en espacio y tiempo (clínica, RM, o LCR) para establecer el diagnóstico de EM.', cutoff: 'Diseminación en espacio Y en tiempo demostradas' }
    ],
    imagen: [
      { modalidad: 'RM cerebral y medular con contraste', hallazgos: 'Lesiones T2/FLAIR hiperintensas ovoides perpendiculares a los ventrículos ("dedos de Dawson") en localización periventricular, yuxtacortical, infratentorial, y medular; realce con gadolinio en lesiones activas (apoya diseminación en tiempo si coexisten lesiones captantes y no captantes).' },
      { modalidad: 'RM medular (NMOSD)', hallazgos: 'Lesión longitudinalmente extensa (≥3 cuerpos vertebrales), a diferencia de las lesiones cortas típicas de EM.' },
      { modalidad: 'RM cerebral (ADEM)', hallazgos: 'Múltiples lesiones grandes, mal delimitadas, bilaterales pero asimétricas, con afectación de sustancia gris profunda (tálamo, ganglios basales), a diferencia del patrón bien delimitado de EM.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema es entre las 4 entidades (EM remitente-recurrente, EM progresiva, NMOSD, ADEM), que comparten un espectro clínico-radiológico superponible pero difieren en fisiopatología, curso, y sobre todo tratamiento; diferenciarlas correctamente es crítico dado que las terapias de EM pueden empeorar el NMOSD.',
    escalas: [
      { nombre: 'Criterios de McDonald 2017', componentes: 'Número de ataques clínicos, evidencia objetiva de lesiones, diseminación en espacio (RM: ≥1 lesión T2 en ≥2 de 4 regiones típicas), diseminación en tiempo (RM: lesión captante y no captante simultáneas, o nueva lesión en RM de seguimiento; o LCR con bandas oligoclonales específicas). Calculadora disponible más abajo.', formula: 'Diseminación en espacio Y en tiempo (vías clínica, radiológica, o de LCR según el escenario)', interpretacion: 'El criterio diagnóstico vigente para EM, que permite en algunos escenarios establecer el diagnóstico tras un único ataque clínico si el LCR o la RM de seguimiento demuestran diseminación en tiempo.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Brote agudo y su manejo',
      color: '#3d6b9e',
      definicion: 'Episodio de disfunción neurológica de nueva aparición o empeoramiento significativo de un síntoma preexistente, atribuible a nueva actividad inflamatoria desmielinizante, con duración mayor a 24 horas en ausencia de fiebre o infección, seguido característicamente de recuperación parcial o completa.',
      fisiopatologia: 'Una nueva placa inflamatoria activa produce edema y desmielinización focal, bloqueando la conducción axonal en la localización afectada; debe distinguirse del pseudobrote (empeoramiento transitorio de síntomas YA preexistentes por fiebre, infección, o calor ambiental, sin nueva actividad inflamatoria: el fenómeno de Uhthoff), que no requiere tratamiento del brote.',
      epidemiologia: 'La tasa de brotes varía considerablemente entre pacientes y con el uso de terapias modificadoras de la enfermedad, que reducen sustancialmente su frecuencia; la mayoría de los brotes se recupera parcial o completamente en semanas a meses.',
      factores_riesgo: ['Falta de tratamiento con terapia modificadora de la enfermedad o TME de eficacia insuficiente', 'Suspensión abrupta de ciertas TME de alta eficacia (efecto rebote)', 'Infección intercurrente (puede desenmascarar un pseudobrote o, con menor frecuencia, precipitar un brote verdadero)'],
      clinica: 'Variable según la localización de la nueva placa: síntomas visuales (neuritis óptica), motores o sensitivos (mielitis parcial), o de tronco/cerebelo (diplopía, ataxia, vértigo, disartria).',
      criterios_dx: 'Clínico (nuevo déficit o empeoramiento &gt;24h sin fiebre/infección); una nueva lesión captante de contraste en RM apoya el diagnóstico cuando hay duda diagnóstica con un pseudobrote.',
      imagen: 'RM con nueva lesión T2 o captante de gadolinio, si se solicita para confirmar actividad inflamatoria nueva.',
      dx_diferencial: 'Pseudobrote (fenómeno de Uhthoff) por fiebre, infección, o calor ambiental; infección del sistema nervioso central concomitante.',
      tx_medico: 'Corticoides en dosis altas como primera línea para brotes que afectan significativamente la función; plasmaféresis para brotes graves refractarios a corticoides.',
      tx_farmacologico: 'Metilprednisolona 1 g intravenoso diario durante 3-5 días es el régimen estándar de primera línea.',
      tx_intervencionista: 'Plasmaféresis (recambio plasmático) en brotes graves que no responden a corticoides en dosis altas.',
      criterios_uci: 'Disfunción de tronco encefálico grave con compromiso de la vía aérea o la ventilación (infrecuente pero posible en brotes graves de tronco).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Examen neurológico seriado durante el tratamiento del brote; vigilancia de efectos adversos de los corticoides en dosis altas (hiperglucemia, insomnio, cambios del estado de ánimo).',
      seguimiento_ambulatorio: 'Reevaluación de la terapia modificadora de la enfermedad tras un brote significativo, dado que puede indicar actividad inflamatoria insuficientemente controlada.',
      pronostico: 'La mayoría de los brotes se recupera parcial o completamente en semanas a meses; la recuperación incompleta contribuye de forma acumulativa a la discapacidad a largo plazo.',
      algoritmo: ['Nuevo déficit neurológico &gt;24h sin fiebre/infección → distinguir de pseudobrote', 'Corticoides en dosis altas (metilprednisolona IV) como primera línea', 'Plasmaféresis si no hay respuesta a corticoides en brotes graves', 'Vigilar efectos adversos de corticoides durante el tratamiento', 'Reevaluar la TME de mantenimiento tras el brote']
    },
    {
      nombre: 'Neuritis óptica',
      color: '#8c3a34',
      definicion: 'Inflamación desmielinizante del nervio óptico, con frecuencia la manifestación inicial de la esclerosis múltiple (hasta 20-25% de los casos) y también una manifestación clave del trastorno del espectro de neuromielitis óptica y de la enfermedad asociada a anti-MOG.',
      fisiopatologia: 'Desmielinización inflamatoria del nervio óptico con edema focal, produciendo bloqueo de la conducción del impulso visual; la gravedad y el patrón de afectación (unilateral vs. bilateral) ayudan a distinguir la causa subyacente.',
      epidemiologia: 'Ocurre en una proporción considerable de pacientes con EM en algún momento del curso de la enfermedad; en NMOSD tiende a ser más grave y con peor recuperación visual si no se trata agresivamente.',
      factores_riesgo: ['Diagnóstico de EM o NMOSD subyacente', 'Sexo femenino (mayor incidencia general de enfermedades desmielinizantes)'],
      clinica: 'Pérdida visual monocular subaguda (días de evolución), dolor con los movimientos oculares (hallazgo característico que ayuda a distinguirla de otras neuropatías ópticas), discromatopsia (particularmente pérdida de la percepción del color rojo), defecto pupilar aferente relativo (pupila de Marcus Gunn) en el ojo afectado.',
      criterios_dx: 'Clínico, apoyado por el examen oftalmológico (agudeza visual, visión de colores, defecto pupilar aferente); la RM de órbitas confirma el diagnóstico cuando hay duda.',
      imagen: 'RM de órbitas con contraste mostrando realce e hiperintensidad en secuencia T2 del nervio óptico afectado.',
      dx_diferencial: 'Neuritis óptica de NMOSD (típicamente más grave, con frecuencia bilateral, o con peor recuperación visual), neuropatía óptica isquémica anterior (sin dolor, paciente de mayor edad con factores de riesgo vascular), neuropatía óptica compresiva (tumor, de instauración más lenta).',
      tx_medico: 'Corticoides en dosis altas, igual que cualquier brote, aceleran la velocidad de recuperación visual aunque no modifican de forma sustancial el desenlace visual final a largo plazo.',
      tx_farmacologico: 'Metilprednisolona en dosis altas por vía intravenosa.',
      pronostico: 'La mayoría recupera visión funcional en semanas a meses; puede persistir un déficit sutil de la percepción de contraste o del color pese a la recuperación de la agudeza visual medida en la cartilla estándar.',
      algoritmo: ['Pérdida visual monocular subaguda + dolor con movimientos oculares → sospechar neuritis óptica', 'Examen oftalmológico: agudeza, colores, defecto pupilar aferente relativo', 'RM de órbitas si hay duda diagnóstica', 'Corticoides en dosis altas para acelerar la recuperación', 'Distinguir de NMOSD si la afectación es bilateral o inusualmente grave']
    },
    {
      nombre: 'Espasticidad y disfunción vesical/intestinal',
      color: '#5c4a73',
      definicion: 'Síntomas crónicos derivados del daño de las vías corticoespinales (espasticidad) y de las vías autonómicas que coordinan la función vesical e intestinal, que afectan significativamente la calidad de vida de forma independiente de la actividad inflamatoria aguda.',
      fisiopatologia: 'La espasticidad resulta de la desinhibición de las motoneuronas por daño de la vía corticoespinal (patrón de neurona motora superior); la disfunción vesical resulta del daño de las vías que coordinan la contracción del músculo detrusor con la relajación del esfínter, siendo la vejiga hiperrefléxica/espástica (urgencia, incontinencia) el patrón más frecuente en EM.',
      epidemiologia: 'Ambos síntomas son extremadamente frecuentes a lo largo del curso de la enfermedad, y su prevalencia aumenta con la duración de la enfermedad y el grado de discapacidad motora acumulada.',
      factores_riesgo: ['Mayor duración de la enfermedad', 'Mayor discapacidad motora acumulada (compromiso medular extenso)', 'EM progresiva más que remitente-recurrente'],
      clinica: 'Espasticidad con rigidez muscular, espasmos dolorosos, y alteración de la marcha; síntomas vesicales de urgencia, vaciado incompleto, o incontinencia; estreñimiento como el síntoma intestinal más frecuente.',
      criterios_dx: 'Clínico; estudios urodinámicos si la disfunción vesical es compleja, refractaria al tratamiento inicial, o hay sospecha de un patrón mixto (detrusor-esfínter disinérgico).',
      complementarios: 'Medición del residuo posmiccional para evaluar vaciado vesical incompleto y guiar la necesidad de cateterismo intermitente.',
      dx_diferencial: 'Otras causas de disfunción vesical (hiperplasia prostática en el varón, infección urinaria recurrente como causa vs. consecuencia).',
      tx_medico: 'Fisioterapia y rehabilitación dirigida para la espasticidad; manejo escalonado de la disfunción vesical comenzando con medidas conductuales.',
      tx_farmacologico: 'Baclofeno o tizanidina para la espasticidad; anticolinérgicos (o antagonistas beta-3) para la vejiga hiperactiva; toxina botulínica intradetrusora para los casos refractarios a fármacos orales.',
      tx_intervencionista: 'Cateterismo vesical intermitente limpio si hay retención urinaria significativa (residuo posmiccional elevado), con riesgo asociado de infecciones urinarias recurrentes que requiere vigilancia.',
      complicaciones_seguimiento: 'Infecciones urinarias recurrentes asociadas a vaciado incompleto o cateterismo; úlceras por presión asociadas a inmovilidad en la espasticidad grave.',
      pronostico: 'Síntomas crónicos que tienden a empeorar con la progresión de la enfermedad; el manejo sintomático mejora significativamente la calidad de vida aunque no modifica el curso subyacente de la enfermedad.',
      algoritmo: ['Documentar espasticidad y síntomas vesicales/intestinales en cada visita de seguimiento, dado que con frecuencia se subreportan', 'Fisioterapia + baclofeno/tizanidina escalonados para la espasticidad', 'Medidas conductuales → anticolinérgicos → toxina botulínica para la vejiga hiperactiva refractaria', 'Medir residuo posmiccional si hay sospecha de vaciado incompleto', 'Cateterismo intermitente si el residuo es significativo, vigilando infecciones recurrentes']
    },
    {
      nombre: 'Progresión de discapacidad y deterioro cognitivo asociado a EM',
      color: '#3f6b52',
      definicion: 'Acumulación progresiva de discapacidad física y/o deterioro cognitivo a lo largo del curso de la enfermedad, independiente de los brotes agudos, que refleja el componente neurodegenerativo subyacente presente en todas las formas de EM.',
      fisiopatologia: 'Pérdida axonal difusa y atrofia cerebral y medular progresivas producen una disminución gradual de la "reserva" neurológica, de modo que déficits previamente compensados se vuelven clínicamente evidentes con el tiempo, incluso en ausencia de nuevos brotes clínicamente aparentes.',
      epidemiologia: 'Presente en distinto grado en la práctica totalidad de los pacientes con EM de larga evolución; la velocidad de progresión es altamente variable entre individuos y se correlaciona parcialmente con la carga lesional y la atrofia documentadas en RM.',
      factores_riesgo: ['Mayor edad y mayor duración de la enfermedad', 'Actividad inflamatoria subclínica no controlada (nuevas lesiones en RM sin correlato clínico evidente)', 'Retraso en el inicio de terapia modificadora de la enfermedad de alta eficacia'],
      clinica: 'Deterioro cognitivo predominantemente de la velocidad de procesamiento de la información y la memoria de trabajo (más que de la memoria episódica pura, a diferencia de las demencias corticales clásicas); fatiga, uno de los síntomas más incapacitantes y con frecuencia menos reconocidos de la EM; deterioro progresivo de la marcha y el equilibrio.',
      criterios_dx: 'Evaluación neuropsicológica dirigida a la velocidad de procesamiento; documentación seriada de la discapacidad física a lo largo del tiempo para objetivar la trayectoria de progresión.',
      complementarios: 'RM seriada para documentar la actividad inflamatoria subclínica (nuevas lesiones sin correlato clínico) y la atrofia cerebral/medular progresiva.',
      dx_diferencial: 'Depresión (puede simular o agravar tanto la fatiga como el deterioro cognitivo percibido, y es altamente prevalente en EM), efectos adversos de medicación concomitante.',
      tx_medico: 'Rehabilitación cognitiva dirigida y rehabilitación física; optimización de la terapia modificadora de la enfermedad hacia opciones de mayor eficacia si hay evidencia de actividad inflamatoria sobreañadida contribuyendo a la progresión.',
      pronostico: 'Variable; la detección temprana de la actividad inflamatoria subclínica y el inicio oportuno de terapia modificadora de la enfermedad de alta eficacia se asocian a una menor acumulación de discapacidad a largo plazo.',
      algoritmo: ['Evaluar cognición (velocidad de procesamiento) y fatiga activamente en cada seguimiento, dado que se subreportan con frecuencia', 'Descartar depresión concomitante como contribuyente o simulador', 'RM seriada para detectar actividad inflamatoria subclínica', 'Escalar la terapia modificadora de la enfermedad si hay evidencia de actividad no controlada', 'Rehabilitación cognitiva y física dirigidas']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento de la esclerosis múltiple y las enfermedades desmielinizantes es predominantemente ambulatorio; la hospitalización se reserva para brotes graves que requieren tratamiento intravenoso o plasmaféresis, o para la evaluación diagnóstica inicial cuando es compleja.',
    parametros: ['Examen neurológico seriado durante el tratamiento del brote agudo', 'Vigilancia de efectos adversos de corticoides en dosis altas (hiperglucemia, insomnio, cambios del estado de ánimo)', 'RM de control para documentar la respuesta al tratamiento o descartar diagnósticos alternativos si la evolución es atípica'],
    criterios_uci_general: 'Disfunción de tronco encefálico grave con compromiso de la vía aérea o la ventilación, o inestabilidad clínica significativa durante la plasmaféresis.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica a este tema.',
    prevencion: 'Adherencia sostenida a la terapia modificadora de la enfermedad para reducir la tasa de brotes y la acumulación de discapacidad a largo plazo; optimización de los niveles de vitamina D y cese del tabaquismo, ambos factores modificables asociados a mayor actividad de la enfermedad.'
  }
};

export const compCites = {
  'Brote agudo y su manejo': [0, 7],
  'Neuritis óptica': [13, 0],
  'Espasticidad y disfunción vesical/intestinal': [2],
  'Progresión de discapacidad y deterioro cognitivo asociado a EM': [3, 2]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = { 'Criterios de McDonald 2017': [0] };
export const escalaCalc = { 'Criterios de McDonald 2017': 'mcdonald-2017' };
export const compGroups = [
  { name: 'Brote y manifestaciones agudas', items: ['Brote agudo y su manejo', 'Neuritis óptica'] },
  { name: 'Síntomas crónicos y progresión', items: ['Espasticidad y disfunción vesical/intestinal', 'Progresión de discapacidad y deterioro cognitivo asociado a EM'] }
];
export const complicacionesIntro = 'Las primeras 2 fichas son manifestaciones agudas ligadas a un brote (el episodio inflamatorio agudo, y su manifestación más clásica, la neuritis óptica). Las siguientes 2 son síntomas y trayectorias crónicas, independientes de brotes individuales: espasticidad/disfunción vesical-intestinal, y la progresión de discapacidad y deterioro cognitivo que refleja el componente neurodegenerativo de la enfermedad.';
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
  root: { title: 'ESCLEROSIS MÚLTIPLE', color: '#2e5c7a', target: 'definicion' },
  branches: [
    { title: 'Entidades desmielinizantes', sub: 'Espectro clínico-radiológico compartido', color: '#3d6b9e', target: 'complicaciones', leaves: [
      { title: 'EM remitente-recurrente', sub: '~85% al diagnóstico', color: '#2e5c7a', target: 'complicaciones' },
      { title: 'EM progresiva', sub: 'Secundaria y primaria', color: '#5c4a73', target: 'complicaciones' },
      { title: 'NMOSD', sub: 'Anti-acuaporina-4, mimetizador crítico', color: '#8c3a34', target: 'complicaciones' },
      { title: 'ADEM', sub: 'Monofásica, posinfecciosa', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'Manifestaciones', sub: 'Agudas y crónicas', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Brote agudo', sub: 'Corticoides, plasmaféresis', color: '#3d6b9e', target: 'complicaciones' },
      { title: 'Neuritis óptica', sub: 'Manifestación inicial frecuente', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Espasticidad/vejiga', sub: 'Síntomas crónicos', color: '#5c4a73', target: 'complicaciones' },
      { title: 'Progresión/cognición', sub: 'Componente neurodegenerativo', color: '#3f6b52', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { no_invasivos: [0] };
export const clasificacionCite = [0];
export const seguimientoCite = [4];
