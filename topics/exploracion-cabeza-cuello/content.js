// topics/exploracion-cabeza-cuello/content.js — Semiología 8: Exploración de Cabeza, Cuello y
// Ganglios. Octavo y ÚLTIMO tema construido de Semiología (el 9º cluster del kardex, "Signos y
// maniobras clásicas — referencia transversal", queda deliberadamente sin construir como tema
// propio: es un índice de signos con epónimo que ya viven dentro de sus temas de sistema —
// Murphy en Abdominal, Homans en Osteoarticular, Kernig/Brudzinski en Neurológica — construirlo
// aparte duplicaría contenido). Mismo patrón que los anteriores (ver
// exploracion-cardiovascular/exploracion-osteoarticular para la nota completa de convenciones).
//
// La ingurgitación yugular (3er sub-ítem del kardex de este cluster) se cubre aquí solo en su
// lugar dentro del examen cervical general — la técnica completa, las ondas del pulso venoso y
// sus anomalías YA están construidas a fondo en topics/exploracion-cardiovascular/content.js, y
// repetirlas aquí duplicaría contenido sin aportar nada nuevo.
//
// Las 4 figuras son TODAS código propio (SVG/HTML con var(--...) de tema) — nada de imágenes
// externas ni asistidas por IA, mismo criterio ya establecido: cada una representa un dato
// clínico exacto (cadenas ganglionares, comparación de adenopatías, drenaje del ganglio de
// Virchow, masas cervicales, clasificación de bocio), y ese contenido va siempre a mano (ver
// .claude/skills/figura-didactica/SKILL.md).

export const meta = {
  id: 'exploracion-cabeza-cuello',
  titulo: 'Exploración de Cabeza, Cuello y Ganglios',
  subtitulo: 'Semiología 8 · Medicina Interna',
  accent: '#6b4a2e',
  accentDim: '#9c7a5c'
};

export const definicionText = 'La exploración cervical integra 3 estructuras anatómicamente vecinas pero funcionalmente independientes: la glándula tiroides (inspección y palpación, en busca de bocio o nódulos), las cadenas ganglionares linfáticas (cuya localización orienta directamente el sitio de drenaje afectado) y las estructuras vasculares del cuello (arterias carótidas, venas yugulares). A esto se suman las masas cervicales congénitas más frecuentes (quiste tirogloso, quiste branquial), distinguibles por su localización y su comportamiento con maniobras dinámicas simples. Es, además, uno de los pocos exámenes físicos capaces de sugerir una neoplasia interna oculta a distancia —el ganglio de Virchow es el ejemplo clásico— antes de cualquier estudio de imagen.';

export const bibliografia = [
  "Bickley LS, Szilagyi PG, Hoffman RM. Bates' Guide to Physical Examination and History Taking. 13th ed. Philadelphia: Wolters Kluwer; 2021.",
  'Argente HA, Álvarez ME. Semiología Médica: Fisiopatología, Semiotecnia y Propedéutica. 2nd ed. Buenos Aires: Editorial Médica Panamericana; 2013.',
  "LeBlond RF, Brown DD, Suneja M, Szot JF. DeGowin's Diagnostic Examination. 10th ed. New York: McGraw-Hill; 2015.",
  'McGee S. Evidence-Based Physical Diagnosis. 4th ed. Philadelphia: Elsevier; 2018.',
  'Surós Batlló A, Surós Batlló J. Semiología Médica y Técnica Exploratoria. 8th ed. Barcelona: Elsevier Masson; 2001.',
  'Pemberton HS. Sign of submerged goitre. Lancet. 1946;2(6432):509.',
  'Haynes J, Arnold KR, Aguirre-Oskins C, Chandra S. Evaluation of neck masses in adults. Am Fam Physician. 2015;91(10):698-706.',
  'Netter FH. Atlas of Human Anatomy. 8th ed. Philadelphia: Elsevier; 2022.'
];

// Reetiqueta los 4 campos genéricos del motor para que encajen con contenido semiológico
// (mismo criterio que los demás temas de Semiología).
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
// el orden de aparición al recorrer `complicaciones` de arriba a abajo.
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

function cadenasGanglionaresSVG() {
  return `<svg viewBox="0 0 220 260" role="img" aria-labelledby="cad-t cad-d" style="width:100%;max-width:220px;display:block;margin:0 auto;">
    <title id="cad-t">Cadenas ganglionares cervicales</title>
    <desc id="cad-d">Silueta de cabeza y cuello vista de perfil, con 8 puntos numerados marcando las cadenas ganglionares: preauricular, postauricular, occipital, submentoniano, submandibular, cervical anterior, cervical posterior y supraclavicular.</desc>
    <path d="M120,15 Q155,15 158,55 Q160,75 150,90 L150,105 Q170,110 175,140 L180,230 L60,230 L65,150 Q68,120 90,108 L88,90 Q78,75 80,55 Q83,15 120,15 Z" fill="none" stroke="var(--line)" stroke-width="1.5"/>
    <circle cx="150" cy="60" r="6" fill="#6b4a2e"/><text x="150" y="63" text-anchor="middle" font-size="7.5" fill="#fff" font-weight="700">1</text>
    <circle cx="158" cy="82" r="6" fill="#6b4a2e"/><text x="158" y="85" text-anchor="middle" font-size="7.5" fill="#fff" font-weight="700">2</text>
    <circle cx="140" cy="30" r="6" fill="#6b4a2e"/><text x="140" y="33" text-anchor="middle" font-size="7.5" fill="#fff" font-weight="700">3</text>
    <circle cx="112" cy="95" r="6" fill="#6b4a2e"/><text x="112" y="98" text-anchor="middle" font-size="7.5" fill="#fff" font-weight="700">4</text>
    <circle cx="95" cy="105" r="6" fill="#6b4a2e"/><text x="95" y="108" text-anchor="middle" font-size="7.5" fill="#fff" font-weight="700">5</text>
    <circle cx="110" cy="150" r="6" fill="#6b4a2e"/><text x="110" y="153" text-anchor="middle" font-size="7.5" fill="#fff" font-weight="700">6</text>
    <circle cx="150" cy="160" r="6" fill="#6b4a2e"/><text x="150" y="163" text-anchor="middle" font-size="7.5" fill="#fff" font-weight="700">7</text>
    <circle cx="130" cy="215" r="6" fill="#6b4a2e"/><text x="130" y="218" text-anchor="middle" font-size="7.5" fill="#fff" font-weight="700">8</text>
  </svg>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:4px;margin-top:8px;font-size:10.5px;">
    <div><strong style="color:#6b4a2e;">1</strong> Preauricular</div>
    <div><strong style="color:#6b4a2e;">2</strong> Postauricular</div>
    <div><strong style="color:#6b4a2e;">3</strong> Occipital</div>
    <div><strong style="color:#6b4a2e;">4</strong> Submentoniano</div>
    <div><strong style="color:#6b4a2e;">5</strong> Submandibular</div>
    <div><strong style="color:#6b4a2e;">6</strong> Cervical anterior</div>
    <div><strong style="color:#6b4a2e;">7</strong> Cervical posterior</div>
    <div><strong style="color:#6b4a2e;">8</strong> Supraclavicular</div>
  </div>`;
}

function virchowSVG() {
  return `<svg viewBox="0 0 220 220" role="img" aria-labelledby="vir-t vir-d" style="width:100%;max-width:220px;display:block;margin:0 auto;">
    <title id="vir-t">Drenaje linfático del ganglio de Virchow</title>
    <desc id="vir-d">Esquema del torso con el estómago marcado en el abdomen y una línea punteada que representa el conducto torácico ascendiendo hasta desembocar en la unión yugulo-subclavia izquierda, donde se marca el ganglio de Virchow.</desc>
    <path d="M60,20 Q40,15 45,40 L40,190 Q40,205 60,205 L160,205 Q180,205 180,190 L175,40 Q180,15 160,20 Z" fill="none" stroke="var(--line)" stroke-width="1.5"/>
    <ellipse cx="95" cy="150" rx="28" ry="20" fill="none" stroke="var(--ink-faint)" stroke-width="1.25"/>
    <text x="95" y="154" text-anchor="middle" font-size="9" fill="var(--ink-faint)">estómago</text>
    <path d="M110,140 Q140,100 140,60 Q140,40 155,28" fill="none" stroke="#8c3a34" stroke-width="2" stroke-dasharray="3,3" stroke-linecap="round"/>
    <circle cx="155" cy="28" r="7" fill="#8c3a34"/>
    <text x="155" y="15" text-anchor="middle" font-size="8.5" font-weight="700" fill="#8c3a34">Virchow</text>
  </svg>
  <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:6px 0 0;">El conducto torácico drena la linfa abdominal hacia la unión de las venas yugular interna y subclavia izquierdas — por eso una neoplasia abdominal puede manifestarse primero como una adenopatía supraclavicular izquierda.</p>`;
}

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Exploración cervical normal',
      tituloB: 'Hallazgos que obligan a profundizar el estudio',
      compensada: 'Tiroides no visible, apenas palpable o no palpable, de superficie lisa, sin nódulos ni dolor, que se eleva simétricamente con la deglución; sin adenopatías palpables en ninguna cadena; sin masas cervicales; sin soplo carotídeo; presión venosa yugular normal.',
      descompensada: 'Bocio visible o con nódulos palpables, signo de Pemberton positivo, cualquier adenopatía dura/fija/indolora (sobre todo supraclavicular), una masa cervical de comportamiento dinámico atípico, un soplo carotídeo, o una presión venosa yugular elevada — cada uno de estos hallazgos, aislado, ya orienta a un diagnóstico específico y puede justificar estudio dirigido (ecografía tiroidea, biopsia ganglionar, Doppler carotídeo).'
    }
  },
  complicaciones: [
    {
      nombre: 'Secuencia y técnica de la exploración cervical',
      color: '#3d5a73',
      definicion: 'Examen sistemático del cuello, integrando la exploración tiroidea, ganglionar y vascular sobre los mismos puntos de referencia anatómicos.',
      clinica: 'Landmarks clave: cartílago tiroides ("nuez de Adán"), cartílago cricoides, istmo tiroideo (justo debajo del cricoides), triángulos cervicales anterior (delimitado por la línea media, el borde inferior de la mandíbula y el borde anterior del esternocleidomastoideo) y posterior (entre el borde posterior del esternocleidomastoideo, el trapecio y la clavícula).',
      criterios_dx: 'Ubicar cualquier masa o adenopatía en relación con estos landmarks (línea media vs. lateral, anterior vs. posterior al ECM) es el primer paso para generar un diagnóstico diferencial anatómico antes de la palpación detallada.',
      algoritmo: ['Inspección general: simetría, masas visibles, cicatrices', 'Palpación tiroidea (técnica anterior o posterior)', 'Palpación sistemática de todas las cadenas ganglionares', 'Auscultación carotídea y evaluación de la presión venosa yugular', 'Palpación de otras masas cervicales si se identifican en la inspección']
    },
    {
      nombre: 'Inspección tiroidea',
      color: '#3d5a73',
      definicion: 'Observación de la región tiroidea con el cuello en extensión leve y buena iluminación tangencial, antes y durante la deglución.',
      clinica: 'Se pide al paciente tragar (con un sorbo de agua si es necesario) mientras se observa la región infrahioidea: la glándula tiroides normal apenas se insinúa o no es visible; un aumento de tamaño (bocio) se hace evidente como una elevación simétrica o asimétrica durante la deglución.',
      fisiopatologia: 'La tiroides está fijada a la tráquea por la fascia pretraqueal, por lo que se ELEVA con la deglución —a diferencia de otras masas cervicales no tiroideas, que permanecen fijas durante esta maniobra—; esta propiedad dinámica es la base para distinguir clínicamente el origen tiroideo de una masa cervical.',
      criterios_dx: 'Cualquier masa cervical que se mueva con la deglución es de origen tiroideo (o firmemente adherida a la tráquea) hasta demostrar lo contrario.'
    },
    {
      nombre: 'Palpación tiroidea',
      color: '#3d5a73',
      definicion: 'Palpación bimanual de la glándula, con el examinador de pie por detrás (técnica posterior de Crile) o de frente (técnica anterior de Lahey) al paciente.',
      clinica: 'Se evalúan tamaño, simetría, consistencia, superficie (lisa vs. nodular), movilidad, dolor y presencia de frémito. Se ausculta la glándula si se palpa aumentada de tamaño, buscando un soplo tiroideo continuo.',
      fisiopatologia: 'Un soplo/frémito tiroideo refleja hipervascularización glandular por hiperfunción difusa (enfermedad de Graves), donde el flujo sanguíneo tiroideo aumenta varias veces respecto al normal, generando turbulencia audible/palpable — hallazgo que no se espera en un bocio nodular no hiperfuncionante ni en la tiroiditis.',
      criterios_dx: 'Un frémito o soplo tiroideo palpable/audible, en el contexto clínico adecuado (taquicardia, pérdida de peso, temblor), apoya fuertemente el diagnóstico de enfermedad de Graves sobre otras causas de bocio.'
    },
    {
      nombre: 'Bocio y signo de Pemberton',
      color: '#8c3a34',
      definicion: 'Bocio: aumento de tamaño de la glándula tiroides, clasificado por su extensión (grados de la OMS, ver Tabla 1) y por su patrón (difuso vs. nodular).',
      clinica: 'Bocio difuso: toda la glándula aumentada de forma uniforme (enfermedad de Graves, tiroiditis de Hashimoto). Bocio nodular: uno (uninodular) o varios (multinodular) nódulos palpables dentro de la glándula.',
      fisiopatologia: `${figBlock('Tabla 1', 'Clasificación del bocio (OMS)', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Grado</th>
        <th style="text-align:left;padding:5px 6px;">Descripción</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>0</strong></td><td style="padding:5px 6px;">No palpable ni visible</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>I</strong></td><td style="padding:5px 6px;">Palpable, pero no visible con el cuello en posición normal</td></tr>
        <tr><td style="padding:5px 6px;"><strong>II</strong></td><td style="padding:5px 6px;">Visible con el cuello en posición normal</td></tr>
      </tbody>
    </table>
    </div>`)}
Signo de Pemberton: se pide al paciente elevar ambos brazos por encima de la cabeza y mantenerlos así ~1 minuto; es positivo si aparece congestión facial, cianosis, distensión yugular o estridor. Un bocio con extensión retroesternal ya reduce el espacio disponible en el estrecho torácico superior; al elevar los brazos, la clavícula se desplaza hacia arriba y comprime aún más ese espacio ya limitado, obstruyendo el retorno venoso yugular y, en casos severos, comprometiendo la vía aérea. Es como intentar pasar un mueble grande por una puerta que ya estaba ajustada de por sí: si alguien empuja el marco un poco más hacia adentro (los brazos elevados desplazando la clavícula), el paso que ya era estrecho se cierra todavía más y termina bloqueándose por completo.`,
      criterios_dx: 'Un signo de Pemberton positivo obliga a evaluar la extensión retroesternal del bocio (TC de cuello/tórax) antes de cualquier intento de tiroidectomía, por el riesgo de obstrucción de la vía aérea durante la manipulación quirúrgica.'
    },
    {
      nombre: 'Cadenas ganglionares cervicales: anatomía y técnica',
      color: '#3d5a73',
      definicion: 'Sistema organizado de grupos ganglionares que drenan regiones específicas de cabeza y cuello, palpados sistemáticamente de arriba hacia abajo (ver Imagen 1).',
      clinica: 'Preauricular, postauricular (mastoideo), occipital, submentoniano, submandibular, cervical anterior (superficial y profundo, a lo largo del esternocleidomastoideo), cervical posterior (triángulo posterior), supraclavicular.',
      fisiopatologia: `${figBlock('Imagen 1', 'Cadenas ganglionares cervicales', cadenasGanglionaresSVG())}
Cada cadena drena un territorio anatómico específico, por lo que la localización de una adenopatía orienta directamente el sitio de origen probable: preauricular → conjuntiva/párpados/piel temporal; occipital → cuero cabelludo posterior; submentoniano → labio inferior/piso de la boca; submandibular → cavidad oral/dientes/glándula submandibular; cervical anterior → faringe/laringe/tiroides; supraclavicular → tórax/abdomen (ver ganglio de Virchow).`,
      criterios_dx: 'Examinar sistemáticamente TODAS las cadenas, no solo la región sintomática, porque una adenopatía "silente" en una cadena distante (ej. supraclavicular) puede ser el hallazgo más relevante de toda la exploración.'
    },
    {
      nombre: 'Características semiológicas de una adenopatía: benigna vs. maligna',
      color: '#8c3a34',
      definicion: 'Conjunto de características palpatorias que orientan el origen probable de un ganglio aumentado de tamaño (ver Tabla 2).',
      clinica: 'Se evalúan: tamaño, consistencia, movilidad, dolor, superficie y agrupación (aislada vs. confluente).',
      fisiopatologia: `${figBlock('Tabla 2', 'Adenopatía: reactiva/inflamatoria vs. neoplásica', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Característica</th>
        <th style="text-align:left;padding:5px 6px;">Reactiva/inflamatoria</th>
        <th style="text-align:left;padding:5px 6px;">Neoplásica</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Consistencia</strong></td><td style="padding:5px 6px;">Blanda o elástica</td><td style="padding:5px 6px;">Dura/pétrea (metástasis) o gomosa (linfoma)</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Movilidad</strong></td><td style="padding:5px 6px;">Móvil</td><td style="padding:5px 6px;">Fija a planos profundos o a la piel</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Dolor</strong></td><td style="padding:5px 6px;">Dolorosa</td><td style="padding:5px 6px;">Típicamente indolora</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Superficie</strong></td><td style="padding:5px 6px;">Lisa</td><td style="padding:5px 6px;">Irregular</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Agrupación</strong></td><td style="padding:5px 6px;">Aislada</td><td style="padding:5px 6px;">Con frecuencia confluente ("matted")</td></tr>
      </tbody>
    </table>
    </div>`)}
Reactiva/inflamatoria: consistencia blanda o elástica, móvil (no fija a planos profundos ni a la piel), DOLOROSA a la palpación, superficie lisa, ganglio aislado — refleja hiperplasia folicular benigna en respuesta a un estímulo antigénico local. Neoplásica (metastásica o linfomatosa): consistencia dura/pétrea (metástasis carcinomatosa) o "gomosa" (linfoma), fija a planos profundos o a la piel suprayacente (invasión capsular), típicamente INDOLORA (el crecimiento neoplásico lento no genera la distensión capsular aguda y dolorosa de la inflamación), superficie irregular, con frecuencia confluente ("matted", varios ganglios fusionados entre sí).`,
      criterios_dx: 'La combinación de consistencia pétrea/fija más ausencia de dolor más crecimiento progresivo es la más sugestiva de malignidad y amerita biopsia, independientemente del tamaño absoluto del ganglio.',
      dx_diferencial: 'Adenopatía dolorosa de inicio agudo con signos inflamatorios locales asociados (celulitis, faringitis): causa infecciosa/reactiva. Adenopatía indolora, de crecimiento lento, en un paciente añoso o con factores de riesgo oncológico: descartar malignidad.'
    },
    {
      nombre: 'Ganglio de Virchow y signo de Troisier',
      color: '#8c3a34',
      definicion: 'Adenopatía supraclavicular izquierda, palpable en el ángulo formado por el borde posterior del esternocleidomastoideo y la clavícula (ver Imagen 2).',
      fisiopatologia: `${figBlock('Imagen 2', 'Drenaje linfático del ganglio de Virchow', virchowSVG())}
El conducto torácico —que drena la linfa de la mayor parte del cuerpo, incluido el abdomen— desemboca en la unión de las venas yugular interna y subclavia izquierdas. Una neoplasia abdominal (clásicamente gástrica, aunque también de páncreas, esófago u otras vísceras abdominales/pélvicas) puede diseminarse por esta vía linfática hasta ese punto final de drenaje, generando una adenopatía supraclavicular izquierda palpable incluso antes de que la neoplasia primaria sea evidente. Es como una gran cuenca hidrográfica en la que decenas de arroyos de todo el abdomen y la pelvis terminan confluyendo en un único río principal que desemboca siempre en el mismo punto: basta con vigilar ese punto de desembocadura para detectar señales de lo que ocurre río arriba, sin necesidad de rastrear cada arroyo por separado.`,
      criterios_dx: 'Un ganglio de Virchow palpable (signo de Troisier positivo) obliga a buscar activamente una neoplasia abdominal oculta, clásicamente gástrica, incluso en ausencia de síntomas digestivos.',
      dx_diferencial: 'Una adenopatía supraclavicular DERECHA sugiere con más frecuencia una neoplasia torácica (pulmón, mediastino, esófago) o linfoma, por drenar hacia el conducto linfático derecho, de trayecto más corto (tórax, brazo y cabeza derechos).'
    },
    {
      nombre: 'Masas cervicales de la línea media y laterales: quiste tirogloso vs. quiste branquial',
      color: '#3d5a73',
      definicion: 'Dos malformaciones congénitas frecuentes que se presentan como masas cervicales quísticas, distinguibles por su localización y su comportamiento con maniobras dinámicas.',
      clinica: 'Quiste tirogloso: línea media (o ligeramente paramedial), típicamente a la altura del hueso hioides. Quiste branquial (del segundo arco): lateral, en el borde anterior del esternocleidomastoideo, en la unión del tercio superior con los dos tercios inferiores.',
      fisiopatologia: 'El quiste tirogloso es un remanente del conducto tirogloso (el trayecto embrionario que sigue la tiroides al descender desde la base de la lengua hasta su posición final), por lo que se ELEVA con la protrusión de la LENGUA —a diferencia de la glándula tiroides, que se eleva con la deglución—. El quiste branquial es un remanente del segundo arco branquial embrionario y NO se mueve ni con la deglución ni con la protrusión lingual. Es como 3 títeres distintos: la tiroides está "atada" a la tráquea y baila cuando ella se mueve (deglución); el quiste tirogloso está "atado" a la lengua y baila cuando ella se mueve (protrusión lingual); el quiste branquial no tiene ningún hilo atado a ninguna de las dos, así que se queda quieto pase lo que pase con la tráquea o la lengua.',
      criterios_dx: 'La maniobra dinámica (protrusión lingual vs. deglución vs. ninguna respuesta) permite diferenciar clínicamente estas 3 masas cervicales —quiste tirogloso, tiroides, quiste branquial— antes de cualquier estudio de imagen.'
    },
    {
      nombre: 'Auscultación carotídea: soplo carotídeo',
      color: '#3d5a73',
      definicion: 'Auscultación de las arterias carótidas en busca de un soplo generado por flujo turbulento a través de una estenosis.',
      clinica: 'Se ausculta con el diafragma sobre el trayecto carotídeo, a la altura del ángulo mandibular, pidiendo al paciente que contenga brevemente la respiración (para eliminar los ruidos respiratorios que podrían confundirse con el soplo).',
      fisiopatologia: 'Un soplo carotídeo puede originarse en la propia arteria carótida (estenosis local) o ser transmitido desde un soplo cardiaco (ej. estenosis aórtica) que viaja con el flujo sanguíneo hacia el cuello — por eso siempre debe compararse con la auscultación cardiaca simultánea para distinguir el origen.',
      criterios_dx: 'Un soplo focal, más intenso en el cuello que en el precordio, orienta a estenosis carotídea local; un soplo de igual o mayor intensidad en el precordio orienta a origen cardiaco transmitido.',
      dx_diferencial: 'La AUSENCIA de soplo NO descarta una estenosis carotídea significativa: una estenosis muy severa, casi oclusiva, puede reducir tanto el flujo que deja de generar turbulencia audible — el mismo patrón de baja sensibilidad ya visto con Kernig/Brudzinski (meningitis) y Homans (TVP) en otros temas.'
    },
    {
      nombre: 'Ingurgitación yugular: su lugar en la exploración cervical',
      color: '#3d5a73',
      definicion: 'Valoración visual de la distensión de la vena yugular como parte de la exploración cervical general.',
      clinica: 'Con el paciente a 30-45°, se busca la altura de la columna de pulsación venosa yugular y se diferencia de la pulsación carotídea (múltiple ondulación, no palpable, colapsable con presión suave, varía con la posición y la inspiración).',
      criterios_dx: 'Una presión venosa yugular elevada detectada durante la exploración cervical general es la señal para profundizar con la técnica completa de medición y el análisis de ondas (a, c, x, v, y) y sus anomalías, descrita a fondo en Exploración Cardiovascular — no se repite aquí para evitar duplicar contenido ya construido.'
    }
  ]
};

export const compCites = {
  'Secuencia y técnica de la exploración cervical': { definicion: [1, 2], clinica: [1, 2] },
  'Inspección tiroidea': { definicion: [1, 3], fisiopatologia: [1, 3] },
  'Palpación tiroidea': { definicion: [1, 3], fisiopatologia: [1, 3] },
  'Bocio y signo de Pemberton': { definicion: [1, 3], fisiopatologia: [6], criterios_dx: [6] },
  'Cadenas ganglionares cervicales: anatomía y técnica': { definicion: [1, 8], fisiopatologia: [1, 8] },
  'Características semiológicas de una adenopatía: benigna vs. maligna': { definicion: [1, 7], fisiopatologia: [1, 7], criterios_dx: [7] },
  'Ganglio de Virchow y signo de Troisier': { definicion: [1, 3], fisiopatologia: [3, 4] },
  'Masas cervicales de la línea media y laterales: quiste tirogloso vs. quiste branquial': { definicion: [1, 7], fisiopatologia: [7] },
  'Auscultación carotídea: soplo carotídeo': { definicion: [1, 4], fisiopatologia: [1, 4] },
  'Ingurgitación yugular: su lugar en la exploración cervical': { definicion: [1, 2] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {};
export const escalaCalc = {};
export const diagCites = { clinica: [1, 3] };
export const clasificacionCite = [];
export const seguimientoCite = [];
export const compGroups = [
  { title: 'Metodología general', items: ['Secuencia y técnica de la exploración cervical'] },
  { title: 'Tiroides', items: ['Inspección tiroidea', 'Palpación tiroidea', 'Bocio y signo de Pemberton'] },
  { title: 'Ganglios linfáticos', items: ['Cadenas ganglionares cervicales: anatomía y técnica', 'Características semiológicas de una adenopatía: benigna vs. maligna', 'Ganglio de Virchow y signo de Troisier'] },
  { title: 'Otras masas y vascular cervical', items: ['Masas cervicales de la línea media y laterales: quiste tirogloso vs. quiste branquial', 'Auscultación carotídea: soplo carotídeo', 'Ingurgitación yugular: su lugar en la exploración cervical'] }
];
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Técnica general' },
  { id: 'complicaciones', label: 'Maniobras y hallazgos' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
