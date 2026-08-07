// topics/exploracion-cardiovascular/content.js — Semiología 2: Exploración Cardiovascular.
// Segundo tema de Semiología, siguiendo el patrón de topics/historia-clinica/ (ver
// topics/_template-semiologia/) pero con estructura propia: aquí sí tiene sentido agrupar por
// región anatómica y técnica (Metodología → Precordio → Pulsos → PVY → Auscultación) en vez de
// por "componentes documentales" como en Historia Clínica.
//
// Mismo criterio que historia-clinica: NO todas las tarjetas usan los mismos campos.
// `fisiopatologia` aquí se usa como "mecanismo o clasificación" (de hallazgos normales Y
// patológicos), `criterios_dx` como significado clínico, `algoritmo` como secuencia de pasos de
// una maniobra. `modalLabels` reetiqueta los 4 campos genéricos del motor para semiología.
//
// Las 5 figuras son TODAS código propio (SVG/HTML con var(--...) de tema) — nada de imágenes
// externas ni asistidas por IA: cada una representa un dato clínico exacto (ubicación anatómica
// de un foco, morfología de una onda de pulso, tabla de soplos), y ese tipo de contenido va
// siempre a mano según el criterio ya usado en el proyecto (ver .claude/skills/figura-didactica/
// SKILL.md — la generación por IA se reserva para arte puramente decorativo, nunca para algo que
// afirme un hecho clínico).

export const meta = {
  id: 'exploracion-cardiovascular',
  titulo: 'Exploración Cardiovascular',
  subtitulo: 'Semiología 2 · Medicina Interna',
  accent: '#9c2b3e',
  accentDim: '#c14f61'
};

export const definicionText = 'La exploración cardiovascular es la evaluación sistemática del sistema circulatorio mediante inspección, palpación y auscultación (la percusión cardiaca cayó en desuso con la difusión del ecocardiograma). Sigue un orden fijo — precordio, pulsos arteriales periféricos, presión venosa yugular y, al final, auscultación en varias posiciones — porque cada maniobra acentúa hallazgos distintos y omitir una posición es la causa más frecuente de pasar por alto un hallazgo real (ej. un soplo diastólico que solo se ausculta sentado e inclinado hacia adelante). Bien ejecutada, sigue teniendo un rendimiento diagnóstico comparable al de muchos estudios de gabinete para valvulopatías, insuficiencia cardiaca y arritmias, y orienta qué estudio complementario (ecocardiograma, ECG, Holter) pedir primero y con qué prioridad.';

export const bibliografia = [
  "Bickley LS, Szilagyi PG, Hoffman RM. Bates' Guide to Physical Examination and History Taking. 13th ed. Philadelphia: Wolters Kluwer; 2021.",
  'Argente HA, Álvarez ME. Semiología Médica: Fisiopatología, Semiotecnia y Propedéutica. 2nd ed. Buenos Aires: Editorial Médica Panamericana; 2013.',
  "LeBlond RF, Brown DD, Suneja M, Szot JF. DeGowin's Diagnostic Examination. 10th ed. New York: McGraw-Hill; 2015.",
  'McGee S. Evidence-Based Physical Diagnosis. 4th ed. Philadelphia: Elsevier; 2018.',
  'Perloff JK. Physical Examination of the Heart and Circulation. Shelton, CT: People’s Medical Publishing House; 2009.',
  'Constant J. Bedside Cardiology. 5th ed. Philadelphia: Lippincott Williams & Wilkins; 1999.',
  'Cook DJ, Simel DL. Does this patient have abnormal central venous pressure? JAMA. 1996;275(8):630-634.',
  'Etchells E, Bell C, Robb K. Does this patient have an abnormal systolic murmur? JAMA. 1997;277(7):564-571.'
];

// Reetiqueta los 4 campos genéricos del motor para que encajen con contenido semiológico
// (mismo criterio que historia-clinica/content.js, ver nota ahí).
export const modalLabels = {
  fisiopatologia: 'Mecanismo y clasificación',
  clinica: 'Técnica y hallazgos',
  criterios_dx: 'Significado clínico',
  algoritmo: 'Secuencia'
};

// ---------------------------------------------------------------------------------------------
// Helpers de figuras (SVG a mano, theme-aware vía var(--...) salvo colores clínicos ya
// establecidos en el proyecto: #3f6b52 = normal/reassuring, #8c3a34 = patológico/alarma).
// ---------------------------------------------------------------------------------------------

// Pequeña onda de pulso (una tarjeta de la grilla "pulsos-contornos"): recibe una lista de
// puntos [x,y] en un viewBox 140x78 y dibuja el contorno; el color codifica normal (verde) vs.
// patológico (rojo), igual que el resto de la app.
function pulsoSVG(id, titulo, puntos, color, nota) {
  const pts = puntos.map(p => p.join(',')).join(' ');
  return `<div style="border:1px solid var(--line);border-radius:8px;padding:8px 10px;">
    <svg viewBox="0 0 140 78" role="img" aria-labelledby="${id}-t ${id}-d" style="width:100%;max-width:180px;display:block;margin:0 auto;">
      <title id="${id}-t">Contorno del pulso: ${titulo}</title>
      <desc id="${id}-d">Esquema de la forma de onda del pulso arterial en ${titulo}, no un trazo de un paciente real.</desc>
      <line x1="8" y1="65" x2="132" y2="65" stroke="var(--line)" stroke-width="1"/>
      <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>
    <div style="font-size:11.5px;font-weight:700;color:var(--ink);text-align:center;margin-top:4px;">${titulo}</div>
    <div style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin-top:1px;">${nota}</div>
  </div>`;
}

function focosAuscultacionSVG() {
  return `<svg viewBox="0 0 260 300" role="img" aria-labelledby="foco-t foco-d" style="width:100%;max-width:260px;display:block;margin:0 auto;">
    <title id="foco-t">Focos de auscultación cardiaca</title>
    <desc id="foco-d">Torso esquemático visto de frente, con los 5 focos de auscultación marcados: aórtico en 2º espacio intercostal derecho, pulmonar en 2º espacio intercostal izquierdo, foco de Erb en 3er espacio intercostal izquierdo, tricuspídeo en 4º-5º espacio intercostal izquierdo junto al esternón, y mitral en 5º espacio intercostal línea medioclavicular izquierda.</desc>
    <path d="M65,40 Q45,18 95,14 L165,14 Q215,18 195,40 L206,120 Q212,210 185,280 Q165,308 130,308 Q95,308 75,280 Q48,210 54,120 Z" fill="none" stroke="var(--line)" stroke-width="1.5"/>
    <line x1="130" y1="20" x2="130" y2="300" stroke="var(--line)" stroke-width="1" stroke-dasharray="2,3"/>
    <text x="60" y="30" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink-faint)">DER.</text>
    <text x="200" y="30" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink-faint)">IZQ.</text>
    <circle cx="100" cy="65" r="6" fill="#9c2b3e"/>
    <text x="100" y="68" text-anchor="middle" font-size="8" fill="#fff" font-weight="700">1</text>
    <circle cx="160" cy="65" r="6" fill="#9c2b3e"/>
    <text x="160" y="68" text-anchor="middle" font-size="8" fill="#fff" font-weight="700">2</text>
    <circle cx="163" cy="92" r="6" fill="#9c2b3e"/>
    <text x="163" y="95" text-anchor="middle" font-size="8" fill="#fff" font-weight="700">3</text>
    <circle cx="150" cy="140" r="6" fill="#9c2b3e"/>
    <text x="150" y="143" text-anchor="middle" font-size="8" fill="#fff" font-weight="700">4</text>
    <circle cx="182" cy="178" r="6" fill="#9c2b3e"/>
    <text x="182" y="181" text-anchor="middle" font-size="8" fill="#fff" font-weight="700">5</text>
  </svg>
  <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:6px 0 0;">Vista anterior, paciente de frente al explorador (por eso el lado derecho del paciente queda a la izquierda del dibujo).</p>`;
}

function pvyOndasSVG() {
  return `<svg viewBox="0 0 300 165" role="img" aria-labelledby="pvy-t pvy-d" style="width:100%;max-width:340px;display:block;margin:0 auto;">
    <title id="pvy-t">Correlación entre el ECG y las ondas del pulso venoso yugular</title>
    <desc id="pvy-d">Esquema de un ciclo cardiaco: arriba un trazo simplificado de ECG con ondas P, QRS y T; abajo la curva del pulso venoso yugular con sus componentes a, c, x, v y y, alineados temporalmente con el ECG mediante líneas guía punteadas.</desc>
    <polyline points="20,30 44,30 48,22 52,30 60,30 63,34 67,8 71,38 75,30 160,30 175,19 190,30 280,30" fill="none" stroke="var(--ink-faint)" stroke-width="1.5" stroke-linejoin="round"/>
    <text x="48" y="14" text-anchor="middle" font-size="8" fill="var(--ink-faint)">P</text>
    <text x="67" y="6" text-anchor="middle" font-size="8" fill="var(--ink-faint)">QRS</text>
    <text x="175" y="13" text-anchor="middle" font-size="8" fill="var(--ink-faint)">T</text>
    <line x1="20" y1="45" x2="280" y2="45" stroke="var(--line)" stroke-width="0.75"/>
    <line x1="50" y1="45" x2="50" y2="130" stroke="var(--line)" stroke-width="1" stroke-dasharray="2,2"/>
    <line x1="185" y1="45" x2="185" y2="130" stroke="var(--line)" stroke-width="1" stroke-dasharray="2,2"/>
    <polyline points="20,95 50,63 75,88 95,78 125,100 145,118 170,90 195,66 210,85 230,122 255,100 280,63" fill="none" stroke="#9c2b3e" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
    <text x="50" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#9c2b3e">a</text>
    <text x="95" y="70" text-anchor="middle" font-size="10" font-weight="800" fill="#9c2b3e">c</text>
    <text x="140" y="132" text-anchor="middle" font-size="10" font-weight="800" fill="#9c2b3e">x</text>
    <text x="195" y="58" text-anchor="middle" font-size="11" font-weight="800" fill="#9c2b3e">v</text>
    <text x="228" y="136" text-anchor="middle" font-size="10" font-weight="800" fill="#9c2b3e">y</text>
    <text x="280" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#9c2b3e">a</text>
  </svg>
  <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:6px 0 0;">La onda a coincide con la P (contracción auricular); la c con el inicio del QRS (abombamiento tricuspídeo en la sístole isovolumétrica); la v se completa hacia el final de la T (llenado auricular pasivo antes de que abra la tricúspide).</p>`;
}

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Exploración cardiovascular normal',
      tituloB: 'Hallazgos que obligan a profundizar el estudio',
      compensada: 'Choque de la punta en el 5º espacio intercostal, línea medioclavicular, breve y de baja amplitud; sin frémitos ni levantamientos; pulsos simétricos, de amplitud y contorno normales; presión venosa yugular ≤8-9 cmH2O con ondas a y v normales; R1 y R2 normales con desdoblamiento fisiológico de R2 en inspiración; sin extratonos ni soplos.',
      descompensada: 'Choque de la punta desplazado/sostenido/difuso, frémito o levantamiento palpable, asimetría de pulsos o contorno anormal (parvus et tardus, celer et magnus, alternante, paradójico, bisferiens), presión venosa yugular elevada u ondas anómalas (onda a cañón, onda v gigante, signo de Kussmaul), desdoblamiento fijo o paradójico de R2, presencia de R3/R4/clics/chasquido de apertura, o cualquier soplo — cada uno de estos hallazgos, tomado de forma aislada, ya justifica un ecocardiograma y/o ECG dirigido.'
    }
  },
  complicaciones: [
    {
      nombre: 'Secuencia y técnica de la exploración cardiovascular',
      color: '#3d5a73',
      definicion: 'Orden sistemático de la exploración cardiovascular — inspección, palpación y auscultación (la percusión cardiaca cayó en desuso) — con el paciente en distintas posiciones que acentúan hallazgos específicos.',
      clinica: 'Con el tórax descubierto y buena iluminación tangencial: inspección general (facies, coloración, disnea, distensión venosa) → inspección y palpación del precordio → palpación de pulsos periféricos → valoración de la presión venosa yugular → auscultación. La auscultación se hace en 3 posiciones, no solo en decúbito supino: decúbito lateral izquierdo (posición de Pachón, acerca el ápex a la pared torácica y acentúa R3, R4 y el retumbo de la estenosis mitral) y sentado, inclinado hacia adelante, en espiración sostenida (acentúa el soplo diastólico de insuficiencia aórtica).',
      fisiopatologia: 'El estetoscopio tiene dos componentes con propiedades acústicas distintas: el diafragma (membrana rígida) filtra frecuencias bajas y transmite mejor los sonidos agudos — R1, R2, el soplo de insuficiencia aórtica, el frote pericárdico; la campana (aplicada con presión leve, sin comprimir la piel) transmite mejor las frecuencias graves — R3, R4, el retumbo diastólico de la estenosis mitral. Aplicar la campana con demasiada presión la convierte funcionalmente en un diafragma (la piel estirada actúa como membrana) y hace desaparecer justo los sonidos graves que se buscaban.',
      criterios_dx: 'El error más frecuente de un examinador inexperto es auscultar solo en decúbito supino y con diafragma, perdiendo R3/R4/estenosis mitral (requieren campana y decúbito lateral izquierdo) y la insuficiencia aórtica (requiere sedestación inclinada hacia adelante).',
      algoritmo: ['Inspección general y del precordio', 'Palpación del precordio (choque de la punta, frémitos, levantamientos)', 'Palpación de pulsos arteriales periféricos', 'Valoración de la presión venosa yugular', 'Auscultación en decúbito supino (diafragma, los 5 focos)', 'Auscultación en decúbito lateral izquierdo con campana (posición de Pachón)', 'Auscultación sentado, inclinado hacia adelante, en espiración sostenida']
    },
    {
      nombre: 'Focos de auscultación cardiaca',
      color: '#3d5a73',
      definicion: 'Los 5 puntos torácicos estandarizados donde cada ruido y soplo se ausculta con mayor intensidad, correspondientes (aunque no exactamente) a la proyección de cada válvula sobre la pared torácica.',
      clinica: 'Aórtico: 2º espacio intercostal (EIC) derecho, borde esternal. Pulmonar: 2º EIC izquierdo, borde esternal. Erb (aórtico accesorio): 3er EIC izquierdo, borde esternal — punto de convergencia donde suelen auscultarse mejor tanto el soplo aórtico irradiado como el de insuficiencia aórtica. Tricuspídeo: 4º-5º EIC, borde esternal izquierdo. Mitral (ápex): 5º EIC, línea medioclavicular izquierda (ver figura).',
      fisiopatologia: 'Ningún foco está exactamente sobre la válvula anatómica correspondiente: el sonido se transmite mejor en la dirección del chorro de flujo turbulento que lo origina, no por simple proximidad. Por eso el soplo aórtico se ausculta mejor en el 2º EIC derecho (dirección del chorro sistólico hacia la aorta ascendente) y no directamente sobre la válvula aórtica, que anatómicamente se proyecta más central y baja, cerca del 3er espacio intercostal izquierdo.',
      criterios_dx: 'Explorar los 5 focos de forma sistemática — y no solo el ápex — es indispensable: un soplo puede ser inaudible en un foco y máximo en el contiguo (ej. la insuficiencia aórtica, casi silente en el foco aórtico clásico y clara en el foco de Erb).',
      figura: 'focos-auscultacion'
    },
    {
      nombre: 'Choque de la punta (impulso apical)',
      color: '#3d5a73',
      definicion: 'Impulso palpable generado por el contacto del ventrículo izquierdo con la pared torácica durante la contracción isovolumétrica y la eyección temprana; es el único movimiento precordial normalmente visible/palpable.',
      clinica: 'Se palpa con la yema de los dedos (o primero con el talón de la mano para localizarlo) en decúbito supino y, si no se localiza, en decúbito lateral izquierdo (lo desplaza levemente pero facilita su detección). Normal: 5º EIC, línea medioclavicular, diámetro ≤2-3 cm, duración breve (menos de dos tercios de la sístole) y baja amplitud — un "golpeteo" suave, no sostenido.',
      fisiopatologia: 'Un choque de la punta anormal se altera en 3 dimensiones, cada una con significado distinto. Desplazado lateral e inferiormente (más allá de la línea medioclavicular o del 6º EIC) y difuso (diámetro &gt;3 cm): dilatación del ventrículo izquierdo por sobrecarga de volumen (insuficiencia mitral o aórtica crónicas, miocardiopatía dilatada). Sostenido y de alta amplitud pero SIN desplazarse (impulso "en cúpula" que dura toda la sístole): hipertrofia concéntrica por sobrecarga de presión (estenosis aórtica, hipertensión arterial de larga evolución) — el ventrículo se hipertrofia hacia la luz sin dilatarse, por eso no se desplaza. Doble impulso sistólico palpable: miocardiopatía hipertrófica obstructiva, donde el segundo componente corresponde a una contracción tardía contra la obstrucción dinámica del tracto de salida.',
      criterios_dx: 'La localización, el diámetro y la duración del choque de la punta permiten distinguir en la cabecera, antes de cualquier ecocardiograma, entre sobrecarga de volumen (desplazado y difuso) y sobrecarga de presión (sostenido, no desplazado).',
      dx_diferencial: 'Choque de la punta impalpable: obesidad, enfisema/tórax en tonel, derrame pericárdico, dextrocardia (buscarlo entonces en el hemitórax derecho).'
    },
    {
      nombre: 'Levantamientos, frémitos y otras pulsaciones precordiales',
      color: '#8c3a34',
      definicion: 'Movimientos o vibraciones palpables sobre el precordio distintos del choque de la punta normal — siempre patológicos cuando están presentes.',
      fisiopatologia: 'Levantamiento paraesternal izquierdo ("heave" ventricular derecho): impulso sostenido y difuso a lo largo del borde esternal izquierdo, palpado con el talón de la mano — refleja hipertrofia o sobrecarga del ventrículo derecho (hipertensión pulmonar, estenosis pulmonar, comunicación interauricular con hiperflujo). Frémito (thrill): vibración palpable equivalente a un soplo muy intenso (habitualmente grado ≥4/6) transmitido a la pared torácica, palpado con el talón de la mano en el foco donde el soplo correspondiente es más intenso; su presencia siempre indica organicidad, nunca ocurre con un soplo inocente/funcional. Pulsaciones epigástricas: pueden corresponder a un ventrículo derecho hipertrófico transmitido hacia abajo, o a la aorta abdominal (normal en personas delgadas; sugiere aneurisma si es expansiva y no solo transmitida).',
      criterios_dx: 'Un frémito palpable siempre corresponde a cardiopatía estructural significativa y localiza directamente el sitio de generación del soplo antes incluso de auscultarlo.',
      dx_diferencial: 'Levantamiento paraesternal: hipertensión pulmonar, estenosis pulmonar, comunicación interauricular. Frémito sistólico en foco aórtico: estenosis aórtica severa. Frémito sistólico en borde esternal izquierdo bajo: comunicación interventricular.'
    },
    {
      nombre: 'Técnica y características del pulso arterial normal',
      color: '#3d5a73',
      definicion: 'Onda de presión generada por la eyección ventricular izquierda, palpable en las arterias periféricas; su análisis sistemático evalúa frecuencia, ritmo, amplitud, contorno y simetría.',
      clinica: 'Se palpa preferentemente en la arteria radial (o la carotídea para valorar mejor el contorno de la onda, más fiel al pulso central/aórtico que la radial). Se evalúan 5 características en cada exploración; el resultado de cada una orienta a hallazgos y causas distintas (ver algoritmo).',
      algoritmo: ['Frecuencia — comparar siempre con la auscultación cardiaca simultánea; un "déficit de pulso" (frecuencia auscultada mayor que la palpada) indica que no todos los latidos generan onda palpable, típico de fibrilación auricular o extrasistolia frecuente', 'Ritmo — regular vs. irregular', 'Amplitud — intensidad del pulso, graduada de 0 a 4+', 'Contorno — velocidad de ascenso y descenso de la onda, presencia de doble pico', 'Simetría — comparar ambos lados, y pulsos centrales vs. periféricos'],
      criterios_dx: 'El contorno del pulso (más que la simple amplitud) es la característica de mayor rendimiento diagnóstico y se valora mejor en la arteria carótida, donde la onda se transmite con menos distorsión que en la radial.'
    },
    {
      nombre: 'Alteraciones del pulso arterial',
      color: '#8c3a34',
      definicion: 'Variantes patológicas del contorno o del comportamiento del pulso arterial, cada una con un mecanismo hemodinámico específico y una asociación clínica característica (ver figura).',
      fisiopatologia: 'Pulsus parvus et tardus: amplitud baja y ascenso lento/retardado con pico tardío y en meseta — la obstrucción fija al tracto de salida (estenosis aórtica severa) enlentece y aplana la eyección. Pulsus celer et magnus (pulso de Corrigan o "en martillo de agua"): ascenso muy rápido a un pico alto seguido de colapso también rápido — refleja una presión de pulso amplia por fuga diastólica (insuficiencia aórtica severa: el ventrículo eyecta un volumen grande con rapidez y la sangre refluye de inmediato hacia el ventrículo en diástole) u otros estados de gasto alto/presión de pulso amplia (persistencia del conducto arterioso, fístula arteriovenosa, anemia severa, tirotoxicosis). Pulsus alternans: ritmo regular con amplitud que alterna latido a latido (fuerte-débil-fuerte) — indica disfunción sistólica del ventrículo izquierdo severa, por variación latido a latido en el manejo del calcio miofibrilar de un miocardio que no se recupera por completo entre contracciones. Pulsus paradoxus: caída inspiratoria exagerada (&gt;10 mmHg) de la presión arterial sistólica — normalmente la inspiración produce una caída fisiológica pequeña (&lt;10 mmHg); cuando el pericardio pierde distensibilidad (taponamiento cardiaco, pericarditis constrictiva) el aumento inspiratorio del retorno venoso al ventrículo derecho abomba el tabique interventricular hacia la cavidad izquierda ("interdependencia ventricular"), reduciendo el llenado y el volumen latido del ventrículo izquierdo; también aparece en asma/EPOC severos por las grandes oscilaciones de presión intratorácica. Pulsus bisferiens: dos picos sistólicos palpables en un mismo ciclo — se ve en la insuficiencia aórtica severa (pura o combinada con estenosis) y en la miocardiopatía hipertrófica obstructiva, donde una eyección inicial rápida es seguida de una caída mesosistólica por la obstrucción dinámica y un segundo pico.',
      criterios_dx: 'Parvus et tardus → estenosis aórtica severa. Celer et magnus/Corrigan → insuficiencia aórtica severa u otro estado de presión de pulso amplia. Alternans → falla sistólica severa del ventrículo izquierdo. Paradójico → taponamiento cardiaco, pericarditis constrictiva, o asma/EPOC severos. Bisferiens → insuficiencia aórtica severa o miocardiopatía hipertrófica obstructiva.',
      dx_diferencial: 'Presión de pulso amplia (celer et magnus) sin insuficiencia aórtica: anemia severa, tirotoxicosis, fístula arteriovenosa, persistencia del conducto arterioso, rigidez arterial del anciano.',
      figura: 'pulsos-contornos'
    },
    {
      nombre: 'Técnica y ondas normales del pulso venoso yugular',
      color: '#3d5a73',
      definicion: 'Reflejo visual, no palpable, de los cambios de presión en la aurícula derecha a lo largo del ciclo cardiaco, observado en la vena yugular interna derecha.',
      clinica: 'Paciente en decúbito supino con el tronco elevado 30-45°, cabeza girada levemente hacia el lado contrario, buena iluminación tangencial. Se identifica el punto más alto de la pulsación visible en la yugular interna (o la externa si la interna no es visible) y se mide la distancia vertical desde ese punto hasta el ángulo esternal de Louis, sumando ~5 cm (distancia estimada del ángulo esternal a la aurícula derecha) para aproximar la presión venosa central en cmH2O. Diferenciar el pulso venoso del carotídeo (ambos visibles en el cuello) es clave: el venoso tiene doble o triple ondulación por latido, NO es palpable, se colapsa con presión suave de un dedo, disminuye con la inspiración y varía con la posición; el carotídeo es de onda única, sí es palpable, no se colapsa con presión leve y no varía con la posición.',
      fisiopatologia: 'La onda a corresponde a la contracción auricular derecha (precede a R1, coincide con la P del ECG). La onda c refleja el abombamiento de la válvula tricúspide hacia la aurícula durante la contracción isovolumétrica del ventrículo (rara vez visible a la cabecera). El descenso x es la caída de presión por relajación auricular y el desplazamiento hacia abajo del anillo tricuspídeo durante la sístole ventricular. La onda v es el llenado pasivo de la aurícula derecha contra una válvula tricúspide todavía cerrada, y alcanza su pico hacia el final de la sístole. El descenso y es el vaciamiento rápido de la aurícula derecha en cuanto se abre la tricúspide, al inicio de la diástole (ver figura).',
      criterios_dx: 'PVY normal ≤8-9 cmH2O (o ≤3-4 cm por arriba del ángulo esternal); una PVY elevada es uno de los hallazgos de mayor rendimiento diagnóstico en la exploración física para insuficiencia cardiaca descompensada.',
      figura: 'pvy-ondas'
    },
    {
      nombre: 'Anomalías de la PVY y reflujo hepatoyugular',
      color: '#8c3a34',
      definicion: 'Alteraciones de la altura o de la morfología del pulso venoso yugular, cada una reflejando un mecanismo específico de disfunción de cavidades derechas o del pericardio.',
      fisiopatologia: 'Onda a "cañón": onda a gigante e irregular, generada cuando la aurícula se contrae contra una válvula tricúspide cerrada por disociación auriculoventricular (bloqueo AV completo, taquicardia ventricular con conducción retrógrada bloqueada); si la disociación es de razón fija, los cañones son regulares y predecibles. Ausencia de onda a: fibrilación auricular (no hay contracción auricular organizada que generarla). Onda a prominente (no cañón): estenosis tricuspídea, o hipertensión pulmonar/estenosis pulmonar (la aurícula se contrae contra resistencia aumentada). Onda v gigante ("onda cv", que borra el descenso x): insuficiencia tricuspídea severa — el flujo regurgitante sistólico entra directamente a la aurícula derecha. Descenso y rápido y profundo (signo de Friedreich): pericarditis constrictiva, insuficiencia tricuspídea severa, miocardiopatía restrictiva — la aurícula se vacía con rapidez al abrir la tricúspide pero el llenado ventricular se detiene en seco por la rigidez pericárdica/miocárdica. Descenso y lento o abolido: taponamiento cardiaco (el llenado diastólico está limitado durante todo el ciclo por la presión pericárdica elevada, no solo al final). Signo de Kussmaul: elevación paradójica (o falta de caída) de la PVY con la inspiración — un corazón derecho rígido o con presión de llenado ya elevada no puede acomodar el incremento inspiratorio normal del retorno venoso; se ve en pericarditis constrictiva, falla derecha severa y miocardiopatía restrictiva.',
      criterios_dx: 'Cada morfología anómala de la PVY apunta a un mecanismo distinto: cañones → disociación AV; ausencia de a → fibrilación auricular; v gigante → insuficiencia tricuspídea severa; descenso y rápido + Kussmaul → constricción pericárdica; descenso y lento → taponamiento.',
      algoritmo: ['Paciente en decúbito a 30-45°, respirando normalmente por la boca (evitar maniobra de Valsalva involuntaria)', 'Aplicar presión firme y sostenida (~10 segundos) sobre el hipocondrio derecho/hígado', 'Observar el nivel de la PVY durante toda la compresión', 'Positivo (reflujo hepatoyugular): elevación sostenida ≥3-4 cm que persiste mientras dura la compresión — no solo un ascenso transitorio de 1-2 latidos, que puede verse incluso en personas sanas']
    },
    {
      nombre: 'Ruidos cardiacos normales: R1, R2 y sus desdoblamientos',
      color: '#3d5a73',
      definicion: 'R1 marca el inicio de la sístole (cierre mitral y tricuspídeo) y R2 marca su final (cierre aórtico y pulmonar); ambos pueden desdoblarse en sus dos componentes, fisiológica o patológicamente.',
      clinica: 'R1: cierre mitral (M1) ligeramente antes que el tricuspídeo (T1); más intenso en el foco mitral. R2: cierre aórtico (A2) antes que el pulmonar (P2); más intenso en la base. El desdoblamiento de R2 se explora comparando inspiración y espiración en el foco pulmonar.',
      fisiopatologia: 'Desdoblamiento fisiológico de R2: durante la inspiración, la presión intratorácica negativa aumenta el retorno venoso al ventrículo derecho (prolonga su eyección y retrasa P2) y a la vez reduce transitoriamente la precarga izquierda (acorta la eyección del ventrículo izquierdo y adelanta A2) — el resultado neto es que el desdoblamiento se ensancha en inspiración y se estrecha (o desaparece) en espiración. Desdoblamiento fijo (no varía con la respiración): comunicación interauricular — el cortocircuito izquierda-derecha iguala las presiones/volúmenes de ambas aurículas durante todo el ciclo respiratorio. Desdoblamiento amplio: bloqueo de rama derecha (retrasa la despolarización y contracción del ventrículo derecho, retrasando P2), estenosis pulmonar, o insuficiencia mitral severa (A2 adelantado por vaciamiento rápido del ventrículo izquierdo). Desdoblamiento paradójico (invertido): P2 precede a A2 por retraso de la eyección ventricular izquierda — bloqueo de rama izquierda o estenosis aórtica severa; aquí el desdoblamiento se estrecha con la inspiración (justo lo opuesto al fisiológico), de ahí el nombre.',
      criterios_dx: 'Un desdoblamiento fijo de R2 en un paciente joven obliga a descartar comunicación interauricular; un desdoblamiento paradójico obliga a buscar bloqueo de rama izquierda o estenosis aórtica severa.'
    },
    {
      nombre: 'Extratonos: R3, R4, clics y chasquido de apertura',
      color: '#8c3a34',
      definicion: 'Ruidos cardiacos adicionales a R1/R2, cada uno generado en un momento específico del ciclo y con un mecanismo mecánico propio; casi siempre patológicos en el adulto mayor de 40 años.',
      fisiopatologia: 'R3 (galope ventricular): ruido grave, poco después de R2, por la desaceleración brusca del flujo sanguíneo al final de la fase de llenado rápido diastólico — se asocia a sobrecarga de volumen (insuficiencia cardiaca, insuficiencia mitral) o a un llenado vigoroso normal en jóvenes, embarazadas y estados de gasto alto (R3 "fisiológico", que desaparece con la maniobra de sentarse). R4 (galope auricular): ruido grave justo antes de R1, generado por la contracción auricular que impulsa sangre hacia un ventrículo rígido y poco distensible (hipertrofia ventricular izquierda, isquemia aguda, miocardiopatía restrictiva) — desaparece en fibrilación auricular porque requiere una contracción auricular coordinada. Clic de eyección: ruido agudo, temprano en la sístole, por la apertura brusca en cúpula de una válvula semilunar anómala (válvula aórtica bicúspide) o por la distensión súbita de un gran vaso dilatado (dilatación de la raíz aórtica o del tronco pulmonar). Clic mesosistólico: típico del prolapso de la válvula mitral, por la tensión súbita de una valva mitral redundante y sus cuerdas al prolapsar hacia la aurícula. Chasquido de apertura: ruido agudo en la diástole temprana, propio de la estenosis mitral, por el frenado brusco de una valva mitral estenótica pero todavía móvil al abrirse; el intervalo R2-chasquido se acorta cuanto más severa es la estenosis (mayor presión auricular izquierda).',
      criterios_dx: 'R3 en un adulto &gt;40 años es virtualmente diagnóstico de disfunción ventricular o sobrecarga de volumen. R4 indica un ventrículo no distensible y desaparece si el paciente entra en fibrilación auricular. Un chasquido de apertura con intervalo corto tras R2 sugiere estenosis mitral severa.',
      dx_diferencial: 'R3 fisiológico (joven, embarazada, gasto alto) vs. R3 patológico (falla ventricular, sobrecarga de volumen) — se distinguen por el contexto clínico, no por el sonido en sí.'
    },
    {
      nombre: 'Soplos: mecanismo y clasificación semiológica',
      color: '#8c3a34',
      definicion: 'Sonidos prolongados generados por flujo sanguíneo turbulento — a través de una válvula estrecha, insuficiente, o una comunicación anormal — audibles entre los ruidos cardiacos normales.',
      fisiopatologia: 'El flujo laminar normal es silencioso; se vuelve turbulento (y por tanto audible) cuando aumenta la velocidad del flujo a través de un orificio relativamente estrecho respecto al volumen que lo atraviesa, sea por estenosis valvular (orificio anatómicamente estrecho), insuficiencia valvular (regurgitación a través de una válvula que no cierra bien) o una comunicación anormal entre cavidades (comunicación interventricular). Se clasifican por: tiempo en el ciclo — sistólico, diastólico o continuo (abarca sístole y diástole sin interrupción, como en la persistencia del conducto arterioso); morfología — creciente-decreciente/"en diamante" (eyectivo, ej. estenosis aórtica), en meseta/holosistólico (regurgitante, ej. insuficiencia mitral) o decreciente (ej. insuficiencia aórtica); intensidad — escala de Levine de 1 a 6 (1: apenas audible; 4: se acompaña de frémito; 6: audible sin estetoscopio); tono y calidad — agudo/soplante (alta presión, ej. insuficiencia aórtica) vs. grave/retumbante (baja presión, ej. estenosis mitral); y foco de máxima intensidad con su patrón de irradiación (ver figura). Los soplos inocentes/funcionales (frecuentes en niños y estados de gasto alto) son siempre sistólicos, suaves (grado ≤2/6), sin frémito, sin síntomas ni alteración de R2 asociada.',
      criterios_dx: 'Cualquier soplo diastólico, cualquier soplo sistólico ≥3/6, holosistólico, con frémito asociado, con irradiación amplia, o que se acompañe de un R2 anormal, se considera orgánico y amerita ecocardiograma.',
      dx_diferencial: 'Soplo inocente/funcional (sistólico, suave, sin frémito, sin síntomas) vs. soplo orgánico (ver criterios arriba). Ver figura para el mapeo de los soplos orgánicos más frecuentes por tiempo, foco e irradiación.',
      figura: 'soplos-tabla'
    },
    {
      nombre: 'Maniobras dinámicas que modifican los soplos',
      color: '#8c3a34',
      definicion: 'Maniobras fisiológicas que cambian la precarga, la poscarga o el retorno venoso de forma predecible, usadas a la cabecera del paciente para distinguir entre soplos que se parecen entre sí.',
      fisiopatologia: 'Valsalva (fase de esfuerzo): reduce el retorno venoso y la precarga — disminuye la mayoría de los soplos, pero AUMENTA el de la miocardiopatía hipertrófica obstructiva (un ventrículo con menos volumen agrava la obstrucción dinámica del tracto de salida) y adelanta/prolonga el clic-soplo del prolapso mitral. Handgrip (ejercicio isométrico sostenido): aumenta la resistencia vascular sistémica (poscarga) — aumenta los soplos regurgitantes hacia una cámara de baja presión (insuficiencia mitral, insuficiencia aórtica, comunicación interventricular) y disminuye relativamente los de estenosis aórtica y de miocardiopatía hipertrófica. Posición en cuclillas: aumenta a la vez precarga y poscarga — aumenta estenosis aórtica, insuficiencia mitral y comunicación interventricular; disminuye miocardiopatía hipertrófica obstructiva y retrasa/acorta el clic-soplo del prolapso mitral. Bipedestación súbita: efecto opuesto a las cuclillas (cae la precarga) — aumenta miocardiopatía hipertrófica obstructiva y prolapso mitral (el clic se adelanta), disminuye la mayoría de los demás. Respiración: la inspiración aumenta el retorno venoso al corazón derecho y por tanto aumenta los soplos del lado derecho (signo de Carvallo, clásicamente descrito para la insuficiencia tricuspídea); la espiración acentúa relativamente los soplos izquierdos.',
      criterios_dx: 'La distinción clásica entre el soplo de la estenosis aórtica y el de la miocardiopatía hipertrófica obstructiva (ambos sistólicos eyectivos, en el mismo rango de focos) se resuelve con Valsalva y cuclillas: ambas maniobras mueven los dos soplos en direcciones OPUESTAS. El signo de Carvallo (soplo que aumenta con la inspiración) localiza un soplo regurgitante al lado derecho del corazón.',
      figura: 'maniobras-dinamicas'
    }
  ]
};

export const figuras = {
  'focos-auscultacion': {
    titulo: 'Focos de auscultación cardiaca',
    html: `${focosAuscultacionSVG()}
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:6px;margin-top:10px;font-size:11.5px;">
      <div><strong style="color:#9c2b3e;">1 — Aórtico</strong><br>2º EIC derecho, borde esternal</div>
      <div><strong style="color:#9c2b3e;">2 — Pulmonar</strong><br>2º EIC izquierdo, borde esternal</div>
      <div><strong style="color:#9c2b3e;">3 — Erb</strong><br>3er EIC izquierdo, borde esternal</div>
      <div><strong style="color:#9c2b3e;">4 — Tricuspídeo</strong><br>4º-5º EIC izquierdo, borde esternal</div>
      <div><strong style="color:#9c2b3e;">5 — Mitral (ápex)</strong><br>5º EIC, línea medioclavicular izquierda</div>
    </div>`,
    fuente: "Bates' Guide to Physical Examination and History Taking; Perloff, Physical Examination of the Heart and Circulation"
  },
  'pvy-ondas': {
    titulo: 'Ondas del pulso venoso yugular y su correlación con el ECG',
    html: pvyOndasSVG(),
    fuente: "Constant, Bedside Cardiology; Perloff, Physical Examination of the Heart and Circulation (curva esquemática, no un trazo real de un paciente)"
  },
  'pulsos-contornos': {
    titulo: 'Contorno del pulso arterial: normal y sus alteraciones',
    html: `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;">
      ${pulsoSVG('p-norm', 'Normal', [[10,65],[30,64],[42,22],[52,32],[60,30],[75,48],[95,58],[115,63],[130,65]], '#3f6b52', 'ascenso rápido, muesca dicrota')}
      ${pulsoSVG('p-pt', 'Parvus et tardus', [[10,65],[35,63],[55,42],[70,38],[85,38],[100,45],[115,58],[130,65]], '#8c3a34', 'estenosis aórtica severa')}
      ${pulsoSVG('p-cm', 'Celer et magnus', [[10,65],[22,64],[32,12],[40,18],[50,45],[65,60],[80,64],[100,65],[130,65]], '#8c3a34', 'insuficiencia aórtica severa')}
      ${pulsoSVG('p-bis', 'Bisferiens', [[10,65],[25,63],[35,25],[45,35],[55,28],[65,40],[80,52],[100,60],[120,64],[130,65]], '#8c3a34', 'insuficiencia aórtica / MCH obstructiva')}
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-top:10px;">
      ${pulsoSVG('p-alt', 'Alternante', [[10,65],[30,20],[50,65],[70,65],[90,45],[110,65],[130,65],[150,20],[170,65],[190,65],[210,45],[230,65]], '#8c3a34', 'falla sistólica del VI severa').replace('max-width:180px', 'max-width:100%').replace('viewBox="0 0 140 78"', 'viewBox="0 0 240 78"')}
      ${pulsoSVG('p-par', 'Paradójico (con la respiración)', [[10,65],[30,18],[50,65],[70,65],[90,50],[110,65],[130,65],[150,55],[170,65],[190,65],[210,20],[230,65]], '#8c3a34', 'taponamiento / constricción / asma-EPOC severos').replace('max-width:180px', 'max-width:100%').replace('viewBox="0 0 140 78"', 'viewBox="0 0 240 78"')}
    </div>
    <p style="font-size:11px;color:var(--ink-faint);margin:8px 0 0;">Curvas esquemáticas (forma del contorno descrita en los textos clásicos de semiología, no trazos de un paciente real). En el pulso paradójico, los latidos más bajos representan la inspiración.</p>`,
    fuente: "Perloff, Physical Examination of the Heart and Circulation; Constant, Bedside Cardiology"
  },
  'soplos-tabla': {
    titulo: 'Soplos orgánicos más frecuentes',
    html: `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Soplo</th>
        <th style="text-align:left;padding:5px 6px;">Tiempo / forma</th>
        <th style="text-align:left;padding:5px 6px;">Foco</th>
        <th style="text-align:left;padding:5px 6px;">Irradiación / dato clave</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Estenosis aórtica</strong></td><td style="padding:5px 6px;">Sistólico, creciente-decreciente ("en diamante")</td><td style="padding:5px 6px;">Aórtico</td><td style="padding:5px 6px;">Irradia a carótidas; pulso parvus et tardus; R2 disminuido/abolido si es severa</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Insuficiencia mitral</strong></td><td style="padding:5px 6px;">Sistólico, holosistólico (en meseta)</td><td style="padding:5px 6px;">Mitral</td><td style="padding:5px 6px;">Irradia a la axila</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Insuficiencia tricuspídea</strong></td><td style="padding:5px 6px;">Sistólico, holosistólico</td><td style="padding:5px 6px;">Tricuspídeo</td><td style="padding:5px 6px;">Aumenta con la inspiración (signo de Carvallo); onda v gigante en la PVY</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>MCH obstructiva</strong></td><td style="padding:5px 6px;">Sistólico, eyectivo</td><td style="padding:5px 6px;">Borde esternal izquierdo bajo/ápex</td><td style="padding:5px 6px;">Aumenta con Valsalva/bipedestación, disminuye con cuclillas/handgrip</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Comunicación interventricular</strong></td><td style="padding:5px 6px;">Sistólico, holosistólico, intenso</td><td style="padding:5px 6px;">Borde esternal izquierdo bajo</td><td style="padding:5px 6px;">Frecuente frémito asociado</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Insuficiencia aórtica</strong></td><td style="padding:5px 6px;">Diastólico temprano, decreciente, agudo</td><td style="padding:5px 6px;">Erb / borde esternal izquierdo</td><td style="padding:5px 6px;">Mejor sentado e inclinado hacia adelante, en espiración; pulso celer et magnus</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Estenosis mitral</strong></td><td style="padding:5px 6px;">Diastólico, retumbante, grave, con refuerzo presistólico</td><td style="padding:5px 6px;">Mitral (campana, decúbito lateral izquierdo)</td><td style="padding:5px 6px;">Precedido de chasquido de apertura</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Persistencia del conducto arterioso</strong></td><td style="padding:5px 6px;">Continuo ("en maquinaria")</td><td style="padding:5px 6px;">Infraclavicular izquierdo</td><td style="padding:5px 6px;">Abarca R1-R2 sin interrupción</td></tr>
      </tbody>
    </table>
    </div>`,
    fuente: "McGee, Evidence-Based Physical Diagnosis; Etchells et al. JAMA 1997; Bates' Guide to Physical Examination"
  },
  'maniobras-dinamicas': {
    titulo: 'Efecto de las maniobras dinámicas sobre los soplos',
    html: `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Maniobra</th>
        <th style="text-align:left;padding:5px 6px;">Efecto hemodinámico</th>
        <th style="text-align:left;padding:5px 6px;">Aumenta</th>
        <th style="text-align:left;padding:5px 6px;">Disminuye</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Valsalva (esfuerzo)</strong></td><td style="padding:5px 6px;">↓ precarga</td><td style="padding:5px 6px;">MCH obstructiva</td><td style="padding:5px 6px;">La mayoría de los demás soplos</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Handgrip</strong></td><td style="padding:5px 6px;">↑ poscarga</td><td style="padding:5px 6px;">Insuficiencia mitral, aórtica, CIV</td><td style="padding:5px 6px;">Estenosis aórtica, MCH obstructiva</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Cuclillas</strong></td><td style="padding:5px 6px;">↑ precarga y poscarga</td><td style="padding:5px 6px;">Estenosis aórtica, insuficiencia mitral, CIV</td><td style="padding:5px 6px;">MCH obstructiva, prolapso mitral</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Bipedestación súbita</strong></td><td style="padding:5px 6px;">↓ precarga</td><td style="padding:5px 6px;">MCH obstructiva, prolapso mitral</td><td style="padding:5px 6px;">La mayoría de los demás soplos</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Inspiración</strong></td><td style="padding:5px 6px;">↑ retorno venoso derecho</td><td style="padding:5px 6px;">Soplos del lado derecho (signo de Carvallo)</td><td style="padding:5px 6px;">Soplos del lado izquierdo (relativo)</td></tr>
      </tbody>
    </table>
    </div>`,
    fuente: 'Bates’ Guide to Physical Examination; McGee, Evidence-Based Physical Diagnosis'
  }
};

export const compCites = {
  'Secuencia y técnica de la exploración cardiovascular': { definicion: [1, 2], clinica: [1, 3], fisiopatologia: [5] },
  'Focos de auscultación cardiaca': { definicion: [1, 5], clinica: [1], fisiopatologia: [5, 6] },
  'Choque de la punta (impulso apical)': { definicion: [1, 5], clinica: [1], fisiopatologia: [5, 6], criterios_dx: [4] },
  'Levantamientos, frémitos y otras pulsaciones precordiales': { definicion: [1, 5], fisiopatologia: [5, 6] },
  'Técnica y características del pulso arterial normal': { definicion: [1, 4], clinica: [1] },
  'Alteraciones del pulso arterial': { definicion: [4, 5], fisiopatologia: [5, 6], criterios_dx: [4] },
  'Técnica y ondas normales del pulso venoso yugular': { definicion: [1, 6], clinica: [1, 7], fisiopatologia: [5, 6], criterios_dx: [7] },
  'Anomalías de la PVY y reflujo hepatoyugular': { fisiopatologia: [5, 6], criterios_dx: [7] },
  'Ruidos cardiacos normales: R1, R2 y sus desdoblamientos': { definicion: [1, 5], fisiopatologia: [5, 6] },
  'Extratonos: R3, R4, clics y chasquido de apertura': { definicion: [1, 5], fisiopatologia: [5, 6] },
  'Soplos: mecanismo y clasificación semiológica': { definicion: [1, 4], fisiopatologia: [4, 5, 6], criterios_dx: [8] },
  'Maniobras dinámicas que modifican los soplos': { fisiopatologia: [4, 5, 6], criterios_dx: [8] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {};
export const escalaCalc = {};
export const diagCites = { clinica: [1, 3] };
export const clasificacionCite = [];
export const seguimientoCite = [];
export const compGroups = [
  { title: 'Metodología general', items: ['Secuencia y técnica de la exploración cardiovascular', 'Focos de auscultación cardiaca'] },
  { title: 'Inspección y palpación del precordio', items: ['Choque de la punta (impulso apical)', 'Levantamientos, frémitos y otras pulsaciones precordiales'] },
  { title: 'Pulsos arteriales periféricos', items: ['Técnica y características del pulso arterial normal', 'Alteraciones del pulso arterial'] },
  { title: 'Presión venosa yugular', items: ['Técnica y ondas normales del pulso venoso yugular', 'Anomalías de la PVY y reflujo hepatoyugular'] },
  { title: 'Auscultación cardiaca', items: ['Ruidos cardiacos normales: R1, R2 y sus desdoblamientos', 'Extratonos: R3, R4, clics y chasquido de apertura', 'Soplos: mecanismo y clasificación semiológica', 'Maniobras dinámicas que modifican los soplos'] }
];
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Técnica general' },
  { id: 'complicaciones', label: 'Maniobras y hallazgos' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
