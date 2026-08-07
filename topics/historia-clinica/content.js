// topics/historia-clinica/content.js — Semiología 1: Historia Clínica y Anamnesis Dirigida.
// Contenido basado en manuales clásicos de propedéutica y semiología (ver bibliografía).
// Estructura idéntica al contrato del motor, siguiendo topics/_template-semiologia/.
// Sin `arbol`: este tema no usa mapa conceptual.
//
// A propósito, NO todas las entradas de `complicaciones` usan los mismos campos: las de
// "metodología" (Estructura, PA, Antecedentes, Interrogatorio, ALICIA/SOCRATES) omiten
// dx_diferencial porque no aplica (el motor ya oculta cualquier campo vacío — no hace falta
// escribir "No aplica"). Las de "síntomas cardinales" sí usan fisiopatologia (como
// clasificación/mecanismo) además de definicion/clinica/criterios_dx/dx_diferencial, porque ahí
// sí hay mecanismo y diferencial reales. `modalLabels` reetiqueta 2 campos genéricos.
//
// IMPORTANTE: `definicion` se usa TANTO en la tarjeta de la lista (vista previa corta) COMO en
// el modal de detalle — por eso debe quedarse SIEMPRE corta. Cualquier contenido extenso/visual
// (listas grandes, escalas, tablas) va en `figuras` (solo se ve al abrir el detalle) o en
// `algoritmo` (lista numerada, para secuencias de pasos).

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

export const modalLabels = {
  fisiopatologia: 'Clasificación y mecanismo',
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
      compensada: 'Documento completo y ordenado: ficha de identificación, motivo de consulta, padecimiento actual, antecedentes heredofamiliares, antecedentes personales patológicos y no patológicos, interrogatorio por aparatos y sistemas, exploración física completa, resumen y lista de problemas. Es el formato estándar de primera vez o de ingreso hospitalario.',
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
        'Motivo de consulta',
        'Padecimiento actual',
        'Antecedentes heredofamiliares',
        'Antecedentes personales patológicos',
        'Antecedentes personales no patológicos',
        'Interrogatorio por aparatos y sistemas',
        'Exploración física',
        'Resumen, lista de problemas y plan diagnóstico-terapéutico'
      ],
      criterios_dx: 'Una historia clínica completa y bien estructurada es la base médico-legal del acto médico y permite reconstruir el razonamiento diagnóstico ante cualquier revisión posterior. En la práctica el interrogatorio es conversacional — se empieza con preguntas abiertas y se dirige progresivamente hacia preguntas cerradas — pero el documento final siempre respeta este orden.'
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
      nombre: 'Antecedentes personales patológicos',
      color: '#3d5a73',
      definicion: 'Enfermedades crónicas diagnosticadas previamente (hipertensión, diabetes, cardiopatías, enfermedad renal, hepatopatías, neumopatías, neoplasias, enfermedades tiroideas), cirugías previas (con fecha y motivo), hospitalizaciones previas, alergias (medicamentosas y no medicamentosas, especificando el tipo de reacción), antecedentes transfusionales y esquema de vacunación.',
      clinica: 'Se interroga activamente uno por uno — no basta con preguntar "¿tiene alguna enfermedad?", porque el paciente puede omitir por olvido o por no considerarlo relevante. Conviene recorrer un listado mental por sistemas (cardiovascular, endocrino, renal, hepático, respiratorio, oncológico) en vez de dejarlo abierto.',
      criterios_dx: 'Modifica directamente el diagnóstico diferencial (ej. disnea en un paciente con antecedente de insuficiencia cardiaca orienta distinto que en uno con antecedente de EPOC) y el manejo farmacológico (ajuste de dosis en falla renal/hepática, interacciones, alergias antes de prescribir).'
    },
    {
      nombre: 'Antecedentes personales no patológicos',
      color: '#3d5a73',
      definicion: 'Información sobre el estilo de vida y el contexto social del paciente: ocupación, vivienda, alimentación, actividad física, tabaquismo, alcohol, otras sustancias, sueño y red de apoyo.',
      clinica: 'La ocupación es particularmente reveladora y suele subinterrogarse: exposición a asbesto o sílice (mesotelioma, silicosis), trabajo agrícola (organofosforados, zoonosis), personal de salud (riesgo biológico), trabajo con animales (brucelosis, otras zoonosis), exposición solar prolongada (cáncer de piel). También conviene precisar con quién vive el paciente y quién puede apoyar su cuidado.',
      criterios_dx: 'Estos antecedentes explican por qué un paciente desarrolla ciertas enfermedades y orientan el diagnóstico diferencial epidemiológico — por ejemplo, tos crónica en un minero orienta a neumoconiosis, y fiebre tras un viaje reciente a zona endémica orienta a dengue o paludismo.'
    },
    {
      nombre: 'Interrogatorio por aparatos y sistemas',
      color: '#3d5a73',
      definicion: 'Revisión sistemática, aparato por aparato, preguntando activamente por síntomas que el paciente no mencionó espontáneamente en el padecimiento actual.',
      clinica: 'Se hace de cabeza a pies o por sistemas (cardiovascular, respiratorio, digestivo, genitourinario, neurológico, endocrino, hematológico, osteomuscular, piel y faneras), con preguntas breves y cerradas ("¿ha notado…?").',
      criterios_dx: 'Frecuentemente revela datos que cambian el diagnóstico diferencial — por ejemplo, un paciente que consulta por fatiga y en el interrogatorio dirigido refiere poliuria y polidipsia, orientando a diabetes mellitus no diagnosticada.'
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
      fisiopatologia: 'Por mecanismo: nociceptivo somático (piel, músculo, hueso — agudo, bien localizado, se agrava con el movimiento/palpación) o visceral (vísceras huecas/sólidas — difuso, mal localizado, sordo, puede referirse a un dermatoma distante que comparte inervación aferente, ej. vesícula biliar → escápula derecha, isquemia miocárdica → brazo izquierdo/mandíbula); o neuropático (lesión del propio sistema nervioso — quemante, con disestesias). Por duración: agudo (&lt;3 meses) o crónico.',
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
      fisiopatologia: 'Por patrón: continua (oscila &lt;1 °C en 24 h, sin llegar a lo normal), remitente (oscila &gt;1 °C, sin llegar a lo normal), intermitente (llega a lo normal entre picos) y héctica o séptica (picos muy altos alternados con caídas a lo normal, típica de abscesos). Por duración: aguda (&lt;2 semanas) vs. fiebre de origen desconocido (&gt;3 semanas sin diagnóstico pese a estudio adecuado). Se diferencia de la hipertermia, en la que falla la disipación de calor sin que el centro termorregulador se reajuste (ej. golpe de calor).',
      clinica: 'El umbral y la fiabilidad de la medición dependen del sitio donde se toma (ver figura); también se interrogan los síntomas acompañantes que orienten el foco (tos, disuria, cefalea, exantema, artralgias).',
      criterios_dx: 'El patrón febril y los síntomas acompañantes orientan el foco infeccioso probable; la fiebre de origen desconocido obliga a ampliar el diferencial más allá de lo infeccioso, hacia causas neoplásicas, autoinmunes y farmacológicas.',
      dx_diferencial: 'Infecciosa (la más frecuente), neoplásica, autoinmune/inflamatoria, medicamentosa (fiebre por fármacos), tromboembólica.',
      figura: ['fiebre-patrones', 'fiebre-rangos', 'fiebre-sitios']
    },
    {
      nombre: 'Disnea',
      color: '#8c3a34',
      icono: ICONOS.disnea,
      definicion: 'Sensación subjetiva de falta de aire o dificultad para respirar, desproporcionada al esfuerzo realizado.',
      fisiopatologia: 'Se gradúa con escalas funcionales, la más usada es la mMRC (ver figura). También se caracteriza por su instalación (aguda vs. crónica) y por la posición que la mejora o empeora: ortopnea (empeora acostado), platipnea (empeora sentado/de pie) y trepopnea (empeora en decúbito lateral).',
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
      fisiopatologia: 'Por duración: aguda (&lt;3 semanas), subaguda (3-8 semanas) o crónica (&gt;8 semanas). Por productividad: seca o productiva — en este caso se describen las características del esputo (color, cantidad, presencia de sangre).',
      clinica: 'Se interroga duración, productividad, horario (nocturna vs. diurna), relación con la posición o los alimentos, y síntomas acompañantes.',
      criterios_dx: 'La tos crónica productiva orienta a EPOC o bronquiectasias; la tos seca crónica en un paciente que toma IECA orienta a efecto adverso farmacológico; la hemoptisis siempre amerita descartar neoplasia pulmonar y tuberculosis.',
      dx_diferencial: 'Infecciosa, EPOC/asma, reflujo gastroesofágico, goteo posnasal, efecto adverso de IECA, insuficiencia cardiaca, neoplasia pulmonar.'
    },
    {
      nombre: 'Astenia, fatiga y pérdida de peso involuntaria',
      color: '#8c3a34',
      icono: ICONOS.astenia,
      definicion: 'Sensación subjetiva de falta de energía (astenia) o incapacidad de mantener un esfuerzo (fatiga). La pérdida de peso involuntaria significativa es &gt;5% del peso corporal en 6-12 meses, sin dieta intencional.',
      fisiopatologia: 'Si mejora con el descanso, orienta a una causa fisiológica o funcional; si no mejora con el reposo, orienta a causa orgánica (anemia, hipotiroidismo, neoplasia, enfermedad crónica sistémica).',
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
  'fiebre-rangos': {
    titulo: 'Rangos de temperatura corporal',
    html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;">
      <div style="border:1px solid var(--line);border-radius:8px;padding:8px 10px;"><strong>Normal</strong><br>36.5-37.2 °C</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:8px 10px;"><strong>Febrícula</strong><br>37.3-38.0 °C</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:8px 10px;"><strong>Fiebre</strong><br>&gt;38.0 °C</div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:8px 10px;"><strong>Hiperpirexia</strong><br>&gt;41.0 °C</div>
    </div>`,
    fuente: "DeGowin's Diagnostic Examination"
  },
  'fiebre-sitios': {
    titulo: 'Umbral de fiebre según el sitio de medición',
    html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px;">
      <div style="border:1px solid var(--line);border-radius:8px;padding:10px;"><strong>Axilar</strong><br>&gt;37.2 °C<br><span style="color:var(--ink-faint);font-size:12px;">Menos preciso; el más usado en consulta.</span></div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:10px;"><strong>Oral</strong><br>&gt;37.5 °C<br><span style="color:var(--ink-faint);font-size:12px;">Afectado por ingesta reciente de líquidos.</span></div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:10px;"><strong>Rectal</strong><br>&gt;38.0 °C<br><span style="color:var(--ink-faint);font-size:12px;">El más cercano a la temperatura central.</span></div>
      <div style="border:1px solid var(--line);border-radius:8px;padding:10px;"><strong>Timpánico</strong><br>&gt;37.5-38.0 °C<br><span style="color:var(--ink-faint);font-size:12px;">Variable según técnica de medición.</span></div>
    </div>`,
    fuente: "Bates' Guide to Physical Examination and History Taking"
  },
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
    titulo: 'Dolor referido: dos patrones clásicos',
    html: `<svg viewBox="0 0 220 240" role="img" aria-labelledby="dr-t dr-d" style="width:100%;max-width:200px;display:block;margin:0 auto;">
      <title id="dr-t">Silueta corporal con dos patrones de dolor referido</title>
      <desc id="dr-d">Silueta corporal esquemática: el dolor de origen cardiaco (isquemia) se refiere hacia el brazo izquierdo y la mandíbula; el dolor de la vesícula biliar se refiere hacia la escápula derecha.</desc>
      <circle cx="100" cy="26" r="16" fill="none" stroke="var(--ink-faint)" stroke-width="1.5"/>
      <path d="M72,50 C60,55 55,70 56,90 L52,155 C51,168 65,175 80,175 L120,175 C135,175 149,168 148,155 L144,90 C145,70 140,55 128,50 C118,44 82,44 72,50 Z" fill="none" stroke="var(--ink-faint)" stroke-width="1.5"/>
      <path d="M60,58 C45,75 38,100 40,135" fill="none" stroke="var(--ink-faint)" stroke-width="1.5"/>
      <path d="M140,58 C155,75 162,100 160,135" fill="none" stroke="var(--ink-faint)" stroke-width="1.5"/>
      <path d="M80,175 C78,195 76,215 74,232" fill="none" stroke="var(--ink-faint)" stroke-width="1.5"/>
      <path d="M120,175 C122,195 124,215 126,232" fill="none" stroke="var(--ink-faint)" stroke-width="1.5"/>
      <path d="M92,85 Q65,105 46,135" fill="none" stroke="#8c3a34" stroke-width="1.5" stroke-dasharray="4,3"/>
      <path d="M92,85 Q90,55 96,32" fill="none" stroke="#8c3a34" stroke-width="1.5" stroke-dasharray="4,3"/>
      <path d="M118,108 Q135,80 138,58" fill="none" stroke="#3d5a73" stroke-width="1.5" stroke-dasharray="4,3"/>
      <circle cx="92" cy="85" r="4" fill="#8c3a34"/>
      <circle cx="46" cy="135" r="3" fill="#8c3a34"/>
      <circle cx="96" cy="32" r="3" fill="#8c3a34"/>
      <circle cx="118" cy="108" r="4" fill="#3d5a73"/>
      <circle cx="138" cy="58" r="3" fill="#3d5a73"/>
    </svg>
    <div style="display:flex;flex-direction:column;gap:6px;margin-top:10px;font-size:12px;color:var(--ink-dim);">
      <span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#8c3a34;margin-right:6px;"></span>Corazón (isquemia) → brazo izquierdo y mandíbula</span>
      <span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#3d5a73;margin-right:6px;"></span>Vesícula biliar → escápula derecha</span>
    </div>`,
    fuente: "Patrones clásicos descritos en Bates' Guide to Physical Examination"
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
  'historia-completa-vs-dirigida': {
    titulo: 'Cuándo hacer historia completa vs. anamnesis dirigida',
    html: `<div class="algo-flow">
      <div class="algo-flow-step">¿El paciente está estable y hay tiempo para el interrogatorio completo?</div>
      <div class="algo-flow-branches">
        <div class="algo-flow-branch" style="--bc:#3f6b52">
          <div class="algo-flow-label">Sí — primera vez / consulta programada</div>
          <div class="algo-flow-box">Historia clínica <strong>completa</strong>: los 9 componentes en orden</div>
        </div>
        <div class="algo-flow-branch" style="--bc:#8c3a34">
          <div class="algo-flow-label">No — urgencia, guardia, paciente inestable</div>
          <div class="algo-flow-box">Anamnesis <strong>dirigida</strong>: síntoma guía (ALICIA/SOCRATES), alergias, medicamentos, antecedentes directamente relevantes</div>
          <div class="algo-flow-risks">
            <div class="algo-risk mid">Completar el resto de la historia clínica una vez estabilizado el paciente</div>
          </div>
        </div>
      </div>
    </div>`,
    fuente: 'Adaptado del texto de definición de este tema (ver Metodología, arriba)'
  }
};

export const figurasDefinicion = ['historia-completa-vs-dirigida'];

export const compCites = {
  'Estructura de la historia clínica': { definicion: [1, 2], criterios_dx: [2] },
  'Padecimiento actual (PA): cómo se escribe': { definicion: [1, 2], criterios_dx: [1, 2, 4] },
  'Antecedentes personales patológicos': { definicion: [1, 2], clinica: [1], criterios_dx: [3] },
  'Antecedentes personales no patológicos': { definicion: [2, 4], clinica: [2], criterios_dx: [2, 3] },
  'Interrogatorio por aparatos y sistemas': { definicion: [1, 3], clinica: [1], criterios_dx: [3] },
  'Semiología del síntoma guía (ALICIA / SOCRATES)': { definicion: [1, 4], clinica: [1, 2], criterios_dx: [4] },
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
