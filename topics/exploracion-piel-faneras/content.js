// topics/exploracion-piel-faneras/content.js — Semiología 6: Exploración de Piel y Faneras.
// Sexto tema de Semiología, mismo patrón que los anteriores (ver exploracion-cardiovascular/
// exploracion-neurologica para la nota completa de convenciones). El cluster del kardex es más
// chico (3 sub-ítems: lesiones elementales, ABCDE del melanoma, uñas y cabello) que los de
// sistemas orgánicos, pero se mantiene la misma profundidad "de especialista" acordada: cada
// hallazgo semiológico se explica por su mecanismo, no solo se nombra.
//
// Las 6 figuras son TODAS código propio (SVG/HTML con var(--...) de tema) — nada de imágenes
// externas ni asistidas por IA, mismo criterio ya establecido: cada una representa un dato
// clínico exacto (morfología de lesiones, profundidad erosión/úlcera, patrones de distribución,
// ABCDE, comparación de neoplasias, hallazgos ungueales), y ese contenido va siempre a mano (ver
// .claude/skills/figura-didactica/SKILL.md).

export const meta = {
  id: 'exploracion-piel-faneras',
  titulo: 'Exploración de Piel y Faneras',
  subtitulo: 'Semiología 6 · Medicina Interna',
  accent: '#8a6a1f',
  accentDim: '#c2a35a'
};

export const definicionText = 'La exploración de piel y faneras evalúa, con inspección y palpación sistemáticas de toda la superficie cutánea (incluyendo mucosas, cuero cabelludo, uñas y pliegues), la morfología de las lesiones elementales (primarias y secundarias), su patrón de distribución y configuración, y las estructuras anexas (uñas y cabello). No es solo un examen "de superficie": la piel es frecuentemente el primer órgano donde se manifiestan enfermedades sistémicas (hepatopatía, cardiopatía, endocrinopatía, enfermedad autoinmune, neoplasia interna), y reconocer el patrón semiológico correcto —más que memorizar nombres de lesiones aisladas— permite localizar el mecanismo subyacente y distinguir un hallazgo benigno de uno que amerita biopsia urgente.';

// Se omite el texto genérico del motor para "Abordaje Diagnóstico" ("Historia clínica,
// laboratorio general, estudios dirigidos, métodos no invasivos e imagen, en orden de
// invasividad creciente") — pensado para el abordaje diagnóstico de una ENFERMEDAD, no aplica
// a un tema de técnica de exploración física (mismo criterio ya usado en historia-clinica/).
export const diagnosticoIntro = '';

export const bibliografia = [
  "Bickley LS, Szilagyi PG, Hoffman RM. Bates' Guide to Physical Examination and History Taking. 13th ed. Philadelphia: Wolters Kluwer; 2021.",
  'Argente HA, Álvarez ME. Semiología Médica: Fisiopatología, Semiotecnia y Propedéutica. 2nd ed. Buenos Aires: Editorial Médica Panamericana; 2013.',
  "LeBlond RF, Brown DD, Suneja M, Szot JF. DeGowin's Diagnostic Examination. 10th ed. New York: McGraw-Hill; 2015.",
  'McGee S. Evidence-Based Physical Diagnosis. 4th ed. Philadelphia: Elsevier; 2018.',
  'Surós Batlló A, Surós Batlló J. Semiología Médica y Técnica Exploratoria. 8th ed. Barcelona: Elsevier Masson; 2001.',
  'Friedman RJ, Rigel DS, Kopf AW. Early detection of malignant melanoma: the role of physician examination and self-examination of the skin. CA Cancer J Clin. 1985;35(3):130-151.',
  'Abbasi NR, Shaw HM, Rigel DS, et al. Early diagnosis of cutaneous melanoma: revisiting the ABCD criteria. JAMA. 2004;292(22):2771-2776.',
  "Kang S, Amagai M, Bruckner AL, et al., eds. Fitzpatrick's Dermatology. 9th ed. New York: McGraw-Hill; 2019.",
  "James WD, Elston DM, Treat JR, Rosenbach MA, Neuhaus IM. Andrews' Diseases of the Skin: Clinical Dermatology. 13th ed. Philadelphia: Elsevier; 2020."
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

function erosionUlceraSVG() {
  return `<svg viewBox="0 0 280 140" role="img" aria-labelledby="eu-t eu-d" style="width:100%;max-width:300px;display:block;margin:0 auto;">
    <title id="eu-t">Profundidad de la erosión y la úlcera</title>
    <desc id="eu-d">Corte transversal esquemático de la piel con 3 capas (epidermis, dermis, hipodermis); una flecha corta marca la erosión, limitada a la epidermis, y una flecha larga marca la úlcera, que alcanza la dermis.</desc>
    <rect x="20" y="20" width="240" height="18" fill="none" stroke="var(--line)" stroke-width="1.25"/>
    <text x="265" y="32" font-size="9" fill="var(--ink-faint)">epidermis</text>
    <rect x="20" y="38" width="240" height="55" fill="none" stroke="var(--line)" stroke-width="1.25"/>
    <text x="265" y="68" font-size="9" fill="var(--ink-faint)">dermis</text>
    <rect x="20" y="93" width="240" height="30" fill="none" stroke="var(--line)" stroke-width="1.25"/>
    <text x="265" y="110" font-size="9" fill="var(--ink-faint)">hipodermis</text>
    <path d="M75,10 L75,38" stroke="#3d5a73" stroke-width="3"/>
    <text x="75" y="8" text-anchor="middle" font-size="9.5" font-weight="700" fill="#3d5a73">Erosión</text>
    <path d="M170,10 L170,80" stroke="#8c3a34" stroke-width="3"/>
    <text x="170" y="8" text-anchor="middle" font-size="9.5" font-weight="700" fill="#8c3a34">Úlcera</text>
  </svg>
  <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:6px 0 0;">La erosión respeta la membrana basal (cura sin cicatriz); la úlcera alcanza la dermis (cura con cicatriz).</p>
  <div style="overflow-x:auto;margin-top:8px;">
  <table style="width:100%;border-collapse:collapse;font-size:11px;">
    <thead><tr style="border-bottom:1px solid var(--line);"><th style="text-align:left;padding:4px 5px;">Otras lesiones secundarias</th><th style="text-align:left;padding:4px 5px;">Descripción</th></tr></thead>
    <tbody>
      <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Escama</strong></td><td style="padding:4px 5px;">Acúmulo visible de estrato córneo que se desprende</td></tr>
      <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Costra</strong></td><td style="padding:4px 5px;">Suero, sangre o pus deshidratados sobre la superficie</td></tr>
      <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Fisura</strong></td><td style="padding:4px 5px;">Hendidura lineal estrecha y profunda</td></tr>
      <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Atrofia</strong></td><td style="padding:4px 5px;">Adelgazamiento de la piel, con pérdida de sus marcas normales</td></tr>
      <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Cicatriz</strong></td><td style="padding:4px 5px;">Reemplazo por tejido fibroso tras una lesión que alcanzó la dermis</td></tr>
      <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Liquenificación</strong></td><td style="padding:4px 5px;">Engrosamiento con acentuación de los pliegues cutáneos, por rascado crónico</td></tr>
      <tr><td style="padding:4px 5px;"><strong>Excoriación</strong></td><td style="padding:4px 5px;">Erosión lineal autoinducida por rascado</td></tr>
    </tbody>
  </table>
  </div>`;
}

function patronesDistribucionSVG() {
  function icon(cx, label, shape) {
    return `<div style="text-align:center;">
      <svg viewBox="0 0 70 70" style="width:64px;height:64px;">${shape}</svg>
      <div style="font-size:10px;font-weight:700;color:var(--ink);margin-top:2px;">${label}</div>
    </div>`;
  }
  const lineal = `<circle cx="12" cy="55" r="4" fill="#8a6a1f"/><circle cx="26" cy="42" r="4" fill="#8a6a1f"/><circle cx="40" cy="30" r="4" fill="#8a6a1f"/><circle cx="54" cy="18" r="4" fill="#8a6a1f"/>`;
  const anular = `<circle cx="35" cy="35" r="22" fill="none" stroke="#8a6a1f" stroke-width="6"/>`;
  const arciforme = `<path d="M13,45 A25,25 0 0,1 57,45" fill="none" stroke="#8a6a1f" stroke-width="6" stroke-linecap="round"/>`;
  const diana = `<circle cx="35" cy="35" r="24" fill="none" stroke="#8c3a34" stroke-width="5"/><circle cx="35" cy="35" r="15" fill="none" stroke="var(--line)" stroke-width="5"/><circle cx="35" cy="35" r="6" fill="#8c3a34"/>`;
  const herpetiforme = `<circle cx="25" cy="25" r="5" fill="#8a6a1f"/><circle cx="40" cy="22" r="5" fill="#8a6a1f"/><circle cx="30" cy="38" r="5" fill="#8a6a1f"/><circle cx="45" cy="40" r="5" fill="#8a6a1f"/><circle cx="35" cy="52" r="5" fill="#8a6a1f"/>`;
  const dermatoma = `<path d="M35,8 Q22,20 22,40 Q22,58 35,66 Q48,58 48,40 Q48,20 35,8 Z" fill="none" stroke="var(--line)" stroke-width="1.5"/><path d="M35,14 Q26,24 26,40 Q26,54 35,60" fill="none" stroke="#8c3a34" stroke-width="5" stroke-linecap="round"/>`;
  return `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center;">
    ${icon(0, 'Lineal', lineal)}
    ${icon(0, 'Anular', anular)}
    ${icon(0, 'Arciforme', arciforme)}
    ${icon(0, 'En diana', diana)}
    ${icon(0, 'Agrupado/herpetiforme', herpetiforme)}
    ${icon(0, 'En dermatoma', dermatoma)}
  </div>`;
}

function abcdeMelanomaSVG() {
  return `<svg viewBox="0 0 280 140" role="img" aria-labelledby="abcde-t abcde-d" style="width:100%;max-width:300px;display:block;margin:0 auto;">
    <title id="abcde-t">Nevo benigno vs. lesión sospechosa (ABCDE)</title>
    <desc id="abcde-d">Comparación de dos lesiones pigmentadas: a la izquierda un nevo benigno, redondo, simétrico, de borde regular y color uniforme; a la derecha una lesión sospechosa, asimétrica, de bordes irregulares y color heterogéneo.</desc>
    <circle cx="65" cy="65" r="32" fill="#5c4a33" opacity="0.75"/>
    <text x="65" y="118" text-anchor="middle" font-size="10.5" font-weight="700" fill="#3f6b52">Benigno</text>
    <text x="65" y="130" text-anchor="middle" font-size="8.5" fill="var(--ink-faint)">simétrico, borde regular, color uniforme</text>
    <path d="M195,32 Q225,28 232,50 Q240,62 228,72 Q238,85 220,92 Q225,105 205,102 Q190,112 178,98 Q160,100 165,80 Q152,70 165,58 Q160,42 180,40 Q182,28 195,32 Z" fill="#5c4a33" opacity="0.55"/>
    <path d="M200,45 Q215,50 210,65 Q222,68 212,80 Q205,90 195,85 Q185,92 182,78 Q172,72 182,62 Q178,50 190,50 Q192,42 200,45 Z" fill="#2e2418" opacity="0.85"/>
    <text x="205" y="118" text-anchor="middle" font-size="10.5" font-weight="700" fill="#8c3a34">Sospechoso</text>
    <text x="205" y="130" text-anchor="middle" font-size="8.5" fill="var(--ink-faint)">asimétrico, borde irregular, color heterogéneo</text>
  </svg>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:6px;margin-top:10px;font-size:11px;">
    <div><strong style="color:#8c3a34;">A</strong> — Asimetría</div>
    <div><strong style="color:#8c3a34;">B</strong> — Bordes irregulares</div>
    <div><strong style="color:#8c3a34;">C</strong> — Color heterogéneo</div>
    <div><strong style="color:#8c3a34;">D</strong> — Diámetro &gt;6 mm</div>
    <div><strong style="color:#8c3a34;">E</strong> — Evolución (cambio)</div>
  </div>`;
}

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Exploración cutánea normal',
      tituloB: 'Hallazgos que obligan a profundizar el estudio',
      compensada: 'Piel de coloración uniforme, sin lesiones elementales primarias ni secundarias, con textura, temperatura y turgencia normales; uñas lisas y rosadas sin surcos ni hemorragias; cabello y cuero cabelludo con densidad y distribución normales, sin parches de alopecia.',
      descompensada: 'Cualquier lesión elemental nueva o cambiante (sobre todo pigmentada con criterios ABCDE), patrón de distribución sugestivo (dermatoma, anular, en diana), signo de Nikolsky positivo, hallazgos ungueales de enfermedad sistémica (acropaquia, líneas de Muehrcke, hemorragias en astilla) o alopecia de inicio súbito — cada uno de estos hallazgos, aislado, ya orienta a un mecanismo específico y puede justificar biopsia o estudio sistémico dirigido.'
    }
  },
  complicaciones: [
    {
      nombre: 'Secuencia y técnica de la exploración dermatológica',
      color: '#3d5a73',
      definicion: 'Examen sistemático de toda la superficie cutánea, incluyendo mucosas, cuero cabelludo, uñas y pliegues, con buena iluminación (idealmente natural o tangencial) y palpación.',
      clinica: 'Inspección general primero a distancia (distribución, patrón), luego de cerca lesión por lesión; la palpación evalúa textura, temperatura, movilidad sobre planos profundos y consistencia. Instrumentos de apoyo: dermatoscopio (magnifica y polariza la luz, revela patrones subsuperficiales), lupa, luz de Wood (fluorescencia, útil en infecciones fúngicas del cuero cabelludo y trastornos pigmentarios).',
      fisiopatologia: 'La vitropresión (diascopia): presionar un vidrio transparente sobre una lesión roja distingue su origen. Si blanquea: es de origen VASCULAR (eritema, la sangre está dentro de los vasos y se desplaza con la presión). Si NO blanquea: es PÚRPURA (la sangre ya está extravasada fuera de los vasos, en el tejido, y no puede desplazarse). Es la misma diferencia que hay entre apretar un globo lleno de agua (el líquido se desplaza hacia otro lado y el globo se "vacía" localmente bajo el dedo) y apretar un moretón (la sangre ya se derramó dentro del tejido y no se mueve a ningún lado, por más que se presione).',
      criterios_dx: 'Una lesión roja que no blanquea con la vitropresión es púrpura hasta demostrar lo contrario, y obliga a descartar un trastorno de la coagulación o una vasculitis, no simplemente "un eritema".',
      algoritmo: ['Inspección general a distancia: distribución y patrón', 'Inspección de cerca: morfología de cada lesión', 'Palpación: textura, temperatura, consistencia, movilidad', 'Vitropresión si hay lesiones rojas o purpúricas', 'Dermatoscopio si hay una lesión pigmentada sospechosa']
    },
    {
      nombre: 'Lesiones primarias planas: mácula y mancha',
      color: '#3d5a73',
      definicion: 'Cambios de coloración de la piel, NO palpables (sin relieve ni depresión), que se distinguen únicamente por el tamaño (ver Tabla 1).',
      clinica: `${figBlock('Tabla 1', 'Lesiones elementales primarias', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Lesión</th>
        <th style="text-align:left;padding:5px 6px;">Tamaño</th>
        <th style="text-align:left;padding:5px 6px;">Palpable</th>
        <th style="text-align:left;padding:5px 6px;">Descripción</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Mácula</strong></td><td style="padding:5px 6px;">&lt;1 cm</td><td style="padding:5px 6px;">No</td><td style="padding:5px 6px;">Cambio de color plano</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Mancha</strong></td><td style="padding:5px 6px;">&gt;1 cm</td><td style="padding:5px 6px;">No</td><td style="padding:5px 6px;">Cambio de color plano</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Pápula</strong></td><td style="padding:5px 6px;">&lt;1 cm</td><td style="padding:5px 6px;">Sí</td><td style="padding:5px 6px;">Sólida, elevada, bien delimitada</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Placa</strong></td><td style="padding:5px 6px;">&gt;1 cm</td><td style="padding:5px 6px;">Sí</td><td style="padding:5px 6px;">Elevación superficial, mayor diámetro que profundidad</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Nódulo</strong></td><td style="padding:5px 6px;">&gt;1 cm</td><td style="padding:5px 6px;">Sí</td><td style="padding:5px 6px;">Sólido, en dermis profunda/hipodermis</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Roncha/habón</strong></td><td style="padding:5px 6px;">Variable</td><td style="padding:5px 6px;">Sí</td><td style="padding:5px 6px;">Edema dérmico transitorio (&lt;24 h), pruriginoso</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Vesícula</strong></td><td style="padding:5px 6px;">&lt;1 cm</td><td style="padding:5px 6px;">Sí</td><td style="padding:5px 6px;">Contenido líquido claro</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Ampolla</strong></td><td style="padding:5px 6px;">&gt;1 cm</td><td style="padding:5px 6px;">Sí</td><td style="padding:5px 6px;">Contenido líquido claro</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Pústula</strong></td><td style="padding:5px 6px;">Variable</td><td style="padding:5px 6px;">Sí</td><td style="padding:5px 6px;">Contenido purulento</td></tr>
      </tbody>
    </table>
    </div>`)}
Mácula: &lt;1 cm de diámetro. Mancha (o mácula grande): &gt;1 cm. Ambas pueden ser de origen vascular (eritema), pigmentario (hiper o hipopigmentación) o purpúrico (extravasación de sangre).`,
      criterios_dx: 'Distinguir el origen —vascular, pigmentario o purpúrico— mediante vitropresión es clínicamente más relevante que el tamaño exacto de la lesión.'
    },
    {
      nombre: 'Lesiones primarias sólidas: pápula, placa, nódulo y roncha',
      color: '#3d5a73',
      definicion: 'Lesiones PALPABLES, elevadas, de contenido sólido, que se distinguen por tamaño y profundidad.',
      clinica: 'Pápula: &lt;1 cm, elevada, bien delimitada. Placa: pápulas confluentes o lesión &gt;1 cm, predominantemente superficial (mayor diámetro que profundidad). Nódulo: lesión sólida &gt;1 cm que compromete la dermis profunda o la hipodermis (se palpa más profundo de lo que se ve). Roncha/habón: pápula o placa edematosa, transitoria, eritematosa, muy pruriginosa.',
      fisiopatologia: 'La roncha es edema transitorio de la dermis superficial por degranulación de mastocitos y liberación de histamina, que aumenta la permeabilidad vascular; cada roncha individual dura típicamente menos de 24 horas y se resuelve sin dejar marca. Si una lesión "en roncha" persiste más de 24 horas en el mismo sitio (se puede documentar marcando su contorno con tinta), debe sospecharse vasculitis urticarial, no urticaria simple.',
      criterios_dx: 'La duración de cada lesión INDIVIDUAL (no la del brote completo) diferencia la urticaria (cada roncha &lt;24 h) de la vasculitis urticarial (lesiones fijas &gt;24 h, que pueden dejar hiperpigmentación residual o púrpura) — esta última amerita biopsia.'
    },
    {
      nombre: 'Lesiones primarias de contenido líquido: vesícula, ampolla y pústula',
      color: '#8c3a34',
      definicion: 'Lesiones elevadas con contenido líquido, que se distinguen por tamaño y tipo de contenido.',
      clinica: 'Vesícula: &lt;1 cm, líquido claro. Ampolla (bulla): &gt;1 cm, líquido claro. Pústula: contenido purulento, de cualquier tamaño.',
      fisiopatologia: 'El plano anatómico donde se forma la ampolla determina su fragilidad y el signo de Nikolsky. Ampollas INTRAEPIDÉRMICAS (por acantólisis: pérdida de adhesión entre queratinocitos mediada por autoanticuerpos anti-desmogleína): flácidas, se rompen con facilidad, Nikolsky POSITIVO (la fricción sobre piel perilesional de aspecto sano genera una ampolla nueva) — pénfigo vulgar, síndrome de piel escaldada estafilocócica, necrólisis epidérmica tóxica/Stevens-Johnson. Ampollas SUBEPIDÉRMICAS (separación en la unión dermoepidérmica, por autoanticuerpos contra hemidesmosomas): tensas, más resistentes, Nikolsky NEGATIVO — penfigoide ampolloso. Es la diferencia entre despegar solo la capa de pintura superficial de una pared (se desprende en escamas frágiles con cualquier roce, como la ampolla intraepidérmica) y despegar el papel tapiz completo, pegado firmemente hasta la pared misma (se necesita jalar con fuerza para que ceda de una sola pieza tensa, como la ampolla subepidérmica).',
      criterios_dx: 'Un signo de Nikolsky positivo en un paciente con ampollas y erosiones extensas es una urgencia dermatológica: sugiere un proceso con separación intraepidérmica que compromete la barrera cutánea de forma extensa, con alto riesgo de infección y pérdida de líquidos.',
      dx_diferencial: 'Ampollas flácidas con Nikolsky positivo (pénfigo, SJS/TEN, piel escaldada estafilocócica) vs. ampollas tensas con Nikolsky negativo (penfigoide ampolloso) — esta distinción cambia por completo el manejo y el pronóstico.'
    },
    {
      nombre: 'Lesiones secundarias por pérdida de sustancia: erosión y úlcera',
      color: '#3d5a73',
      definicion: 'Pérdida de continuidad de la piel, clasificada según la profundidad alcanzada (ver Imagen 1).',
      clinica: 'Erosión: pérdida limitada a la epidermis, hasta la membrana basal — superficie húmeda, no sangra con facilidad. Úlcera: pérdida que alcanza la dermis o planos más profundos — puede sangrar, con bordes (elevados, socavados) y fondo (limpio, necrótico, fibrinoso) definibles.',
      fisiopatologia: `${figBlock('Imagen 1', 'Profundidad de la erosión y la úlcera', erosionUlceraSVG())}
La profundidad determina el desenlace cicatricial: la erosión, al respetar la membrana basal y las estructuras anexiales de la dermis, cura SIN cicatriz; la úlcera, al destruir la dermis, cura CON cicatriz (reemplazo por tejido de granulación y colágeno desorganizado).`,
      criterios_dx: 'Predecir si una lesión cicatrizará o no según su profundidad permite anticipar el pronóstico estético y funcional antes de iniciar cualquier tratamiento.'
    },
    {
      nombre: 'Patrones de distribución y configuración',
      color: '#3d5a73',
      definicion: 'La forma en que se agrupan o distribuyen las lesiones en la superficie corporal, un dato tan diagnóstico como la morfología de cada lesión individual (ver Imagen 2).',
      clinica: 'Lineal (a lo largo de una línea), anular (en anillo, con aclaramiento central), arciforme (en arco, anillo incompleto), en diana/target (3 zonas concéntricas de color distinto), agrupado/herpetiforme (racimo de lesiones muy próximas), en dermatoma (banda que sigue la distribución de una raíz nerviosa).',
      fisiopatologia: `${figBlock('Imagen 2', 'Patrones de distribución y configuración', patronesDistribucionSVG())}
En dermatoma → herpes zóster, por reactivación del virus varicela-zóster latente en un ganglio de la raíz dorsal, que viaja por el nervio sensitivo hasta la piel que inerva. Anular → tiña (borde activo descamativo con aclaramiento central por resolución centrífuga), granuloma anular, eritema migrans de la enfermedad de Lyme. En diana → eritema multiforme. Agrupado/herpetiforme → herpes simple, dermatitis herpetiforme. Lineal → dermatitis de contacto por planta (el alérgeno se deposita en la línea de contacto) o fenómeno de Koebner.`,
      criterios_dx: 'El fenómeno de Koebner (lesiones nuevas de la misma enfermedad de base, exactamente en sitios de trauma cutáneo previo: rasguño, cicatriz quirúrgica) es característico de psoriasis, liquen plano y vitíligo, y su presencia apoya activamente esos diagnósticos.'
    },
    {
      nombre: 'Regla ABCDE del melanoma',
      color: '#8c3a34',
      definicion: 'Criterios clínicos para diferenciar un nevo melanocítico benigno de una lesión sospechosa de melanoma, complementados por el "signo del patito feo" y la dermatoscopia (ver Imagen 3).',
      clinica: 'Asimetría (una mitad no es igual a la otra), Bordes irregulares (festoneados, mal definidos), Color heterogéneo (múltiples tonos en la misma lesión), Diámetro &gt;6 mm (aproximadamente el tamaño de un borrador de lápiz), Evolución (cualquier cambio de tamaño, forma, color o síntoma —sangrado, prurito— en semanas o meses).',
      fisiopatologia: `${figBlock('Imagen 3', 'Nevo benigno vs. lesión sospechosa (ABCDE)', abcdeMelanomaSVG())}
El "signo del patito feo" complementa al ABCDE: una lesión pigmentada que se ve clínicamente distinta de los demás nevos de ese paciente es sospechosa AUNQUE cumpla pocos criterios ABCDE aislados, porque la mayoría de los nevos de una persona tienden a parecerse entre sí ("firma nevomelanocítica" propia de cada individuo).`,
      criterios_dx: 'El criterio E (evolución) es el de mayor sensibilidad individual: un melanoma temprano puede no cumplir aún claramente A, B, C o D, pero SIEMPRE está cambiando en el tiempo.',
      dx_diferencial: 'Un nevo melanocítico común es simétrico, de borde regular, de un solo tono de color, generalmente &lt;6 mm, y estable en el tiempo — el incumplimiento de cualquiera de estos 5 criterios amerita evaluación dermatológica dirigida (dermatoscopia, biopsia).'
    },
    {
      nombre: 'Diferenciación clínica: carcinoma basocelular, espinocelular y melanoma',
      color: '#8c3a34',
      definicion: 'Las 3 neoplasias cutáneas malignas más frecuentes, con presentaciones clínicas y riesgo de metástasis muy distintos (ver Tabla 2).',
      clinica: 'Carcinoma basocelular: pápula o placa perlada/translúcida, con telangiectasias superficiales y borde enrollado ("en rodete"), crecimiento lento, con frecuencia ulcerada en el centro (úlcera "roedora"). Carcinoma espinocelular: placa o nódulo hiperqueratósico, a menudo ulcerado, de base indurada, puede originarse de una queratosis actínica preexistente.',
      fisiopatologia: `${figBlock('Tabla 2', 'Carcinoma basocelular, espinocelular y melanoma', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Neoplasia</th>
        <th style="text-align:left;padding:5px 6px;">Presentación clínica</th>
        <th style="text-align:left;padding:5px 6px;">Potencial metastásico</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Basocelular</strong></td><td style="padding:5px 6px;">Perla translúcida, telangiectasias, borde enrollado, ± úlcera central</td><td style="padding:5px 6px;">Bajo (crecimiento local)</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Espinocelular</strong></td><td style="padding:5px 6px;">Placa/nódulo hiperqueratósico, a menudo ulcerado, base indurada</td><td style="padding:5px 6px;">Intermedio (mayor en labio/oreja/inmunosuprimidos)</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Melanoma</strong></td><td style="padding:5px 6px;">Criterios ABCDE positivos</td><td style="padding:5px 6px;">Alto (diseminación linfática y hematógena temprana; subtipo nodular el más agresivo)</td></tr>
      </tbody>
    </table>
    </div>`)}
El carcinoma basocelular rara vez metastatiza (crecimiento predominantemente local e invasivo, pero de bajo potencial metastásico) — el riesgo principal es la destrucción tisular local, no la diseminación. El carcinoma espinocelular tiene mayor potencial metastásico que el basocelular, especialmente en localizaciones de alto riesgo (labio, oreja, genitales) y en pacientes inmunosuprimidos. El melanoma tiene el mayor potencial de diseminación temprana, por vía linfática y hematógena, de los tres; su subtipo nodular es el más agresivo porque carece de una fase de crecimiento radial (horizontal) previa reconocible, invadiendo verticalmente casi desde el inicio.`,
      criterios_dx: 'El subtipo lentiginoso acral de melanoma (palmas, plantas, subungueal) es el más frecuente en personas de piel oscura y con frecuencia se diagnostica tarde porque esas localizaciones no se examinan activamente.',
      dx_diferencial: 'Una "úlcera que no cicatriza" en la cara de un paciente añoso con exposición solar crónica es carcinoma basocelular hasta demostrar lo contrario.'
    },
    {
      nombre: 'Exploración de uñas: hallazgos normales y patológicos',
      color: '#8c3a34',
      definicion: 'Inspección y palpación de las 20 uñas, incluyendo el pliegue proximal, la lúnula y el lecho ungueal (ver Tabla 3).',
      clinica: 'Normal: superficie lisa, ángulo entre el pliegue proximal y la placa ungueal ≤160°, coloración rosada uniforme, sin surcos ni hemorragias.',
      fisiopatologia: `${figBlock('Tabla 3', 'Hallazgos ungueales y su significado sistémico', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Hallazgo</th>
        <th style="text-align:left;padding:5px 6px;">Descripción</th>
        <th style="text-align:left;padding:5px 6px;">Causa</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Acropaquia</strong></td><td style="padding:5px 6px;">Ángulo &gt;180°, signo de Schamroth positivo</td><td style="padding:5px 6px;">Enfermedad pulmonar/cardiopatía con shunt D-I</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Línea de Beau</strong></td><td style="padding:5px 6px;">Surco transversal</td><td style="padding:5px 6px;">Enfermedad sistémica grave, quimioterapia</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Coiloniquia</strong></td><td style="padding:5px 6px;">Uña cóncava, en cuchara</td><td style="padding:5px 6px;">Anemia ferropénica</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Líneas de Muehrcke</strong></td><td style="padding:5px 6px;">Pares de líneas blancas fijas, no se mueven con el crecimiento</td><td style="padding:5px 6px;">Hipoalbuminemia</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Uñas de Terry</strong></td><td style="padding:5px 6px;">2/3 proximales blancos, banda distal rosada/marrón</td><td style="padding:5px 6px;">Cirrosis, insuficiencia cardiaca o renal</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Hemorragias en astilla</strong></td><td style="padding:5px 6px;">Líneas hemorrágicas longitudinales subungueales</td><td style="padding:5px 6px;">Endocarditis infecciosa (microembolismos), trauma</td></tr>
      </tbody>
    </table>
    </div>`)}
Acropaquia (dedos en palillo de tambor): pérdida del ángulo normal (&gt;180°) con abombamiento de la falange distal; se explora con el signo de Schamroth (al juntar dorso con dorso las falanges distales de dedos opuestos, normalmente se forma un rombo entre las uñas — en la acropaquia ese rombo desaparece). Mecanismo: en enfermedad pulmonar o cardiopatía con cortocircuito derecha-izquierda, megacariocitos y agregados plaquetarios que normalmente se fragmentan en el filtro capilar pulmonar escapan intactos a la circulación sistémica y se depositan en los lechos ungueales, liberando PDGF y VEGF que inducen hiperplasia del tejido conectivo subungueal. Es como un colador de cocina que normalmente detiene y desmenuza los grumos grandes antes de que pasen: si el colador está dañado o hay un "atajo" que lo evita (la enfermedad pulmonar o el cortocircuito), esos grumos intactos llegan enteros más adelante y ahí se acumulan, liberando su contenido en el lugar equivocado. Línea de Beau: surco transversal por interrupción temporal y sincrónica del crecimiento ungueal durante una enfermedad sistémica grave; la distancia desde la cutícula permite estimar cuándo ocurrió el evento (la uña crece ≈0.1 mm/día). Coiloniquia (uña en cuchara): anemia ferropénica severa. Líneas de Muehrcke (pares de líneas blancas transversales que NO se mueven con el crecimiento, porque reflejan un cambio del lecho vascular subyacente, no de la placa ungueal): hipoalbuminemia. Uñas de Terry: dos tercios proximales blancos con banda distal rosada/marrón estrecha — cirrosis, insuficiencia cardiaca, insuficiencia renal (también en el envejecimiento normal). Hemorragias en astilla: pequeñas líneas hemorrágicas longitudinales subungueales — microembolismos sépticos en endocarditis infecciosa, aunque inespecíficas (también por trauma local).`,
      criterios_dx: 'La distinción entre leuconiquia verdadera (se mueve con el crecimiento de la uña) y líneas de Muehrcke (fijas, no se mueven) es clave: solo las líneas de Muehrcke son un marcador confiable de hipoalbuminemia.',
      dx_diferencial: 'Pitting ungueal (pequeñas depresiones puntiformes): psoriasis, alopecia areata.'
    },
    {
      nombre: 'Exploración de cabello y cuero cabelludo: patrones de alopecia',
      color: '#8c3a34',
      definicion: 'Inspección de la densidad, distribución y calidad del pelo, y del cuero cabelludo subyacente (presencia o ausencia de orificios foliculares visibles).',
      clinica: 'La distinción más importante es entre alopecia CICATRICIAL (folículos destruidos, sin orificios foliculares visibles, pérdida permanente) y NO cicatricial (folículos preservados, pérdida potencialmente reversible).',
      fisiopatologia: 'Alopecia androgenética: patrón (bitemporal/coronilla en hombres, difusa en la línea de partición en mujeres), por miniaturización progresiva del folículo mediada por dihidrotestosterona en folículos genéticamente susceptibles — no cicatricial. Alopecia areata: parches bien delimitados, redondos u ovales, de aparición súbita; en el borde activo se observan "pelos en signo de exclamación" (más delgados hacia la raíz que hacia la punta) — enfermedad autoinmune que ataca el folículo en fase anágena, no cicatricial. Efluvio telógeno: caída difusa y aguda, típicamente 2-3 meses DESPUÉS de un estrés fisiológico significativo (parto, cirugía mayor, fiebre alta, pérdida de peso severa), por el paso sincrónico y masivo de folículos de la fase anágena (crecimiento) a la telógena (reposo/caída) — prueba del tirón difusamente positiva. Tricotilomanía: parches irregulares, de bordes geográficos, con pelos de longitud variable (rotos, no arrancados de raíz) por arrancamiento compulsivo, SIN inflamación del cuero cabelludo.',
      criterios_dx: 'La presencia o ausencia de orificios foliculares visibles en el cuero cabelludo afectado es la pregunta clínica más importante en cualquier alopecia, porque determina si el proceso es potencialmente reversible (no cicatricial) o permanente (cicatricial), y por tanto la urgencia de la biopsia.',
      dx_diferencial: 'Alopecia areata (parches redondos, pelos en signo de exclamación, sin descamación) vs. tiña de la cabeza (parches con descamación, pelos rotos a ras del cuero cabelludo, posible adenopatía occipital asociada).'
    }
  ]
};

export const compCites = {
  'Secuencia y técnica de la exploración dermatológica': { definicion: [1, 2], fisiopatologia: [1, 4] },
  'Lesiones primarias planas: mácula y mancha': { definicion: [1, 8], clinica: [8, 9] },
  'Lesiones primarias sólidas: pápula, placa, nódulo y roncha': { definicion: [1, 8], fisiopatologia: [8, 9] },
  'Lesiones primarias de contenido líquido: vesícula, ampolla y pústula': { definicion: [1, 8], fisiopatologia: [8, 9] },
  'Lesiones secundarias por pérdida de sustancia: erosión y úlcera': { definicion: [1, 8], fisiopatologia: [8, 9] },
  'Patrones de distribución y configuración': { definicion: [1, 8], fisiopatologia: [8, 9] },
  'Regla ABCDE del melanoma': { definicion: [6, 7], fisiopatologia: [7], criterios_dx: [7] },
  'Diferenciación clínica: carcinoma basocelular, espinocelular y melanoma': { definicion: [8, 9], fisiopatologia: [8, 9] },
  'Exploración de uñas: hallazgos normales y patológicos': { definicion: [1, 3], fisiopatologia: [1, 3, 4] },
  'Exploración de cabello y cuero cabelludo: patrones de alopecia': { definicion: [1, 8], fisiopatologia: [8, 9] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {};
export const escalaCalc = {};
export const diagCites = { clinica: [1, 3] };
export const clasificacionCite = [];
export const seguimientoCite = [];
export const compGroups = [
  { title: 'Metodología general', items: ['Secuencia y técnica de la exploración dermatológica'] },
  { title: 'Lesiones elementales primarias', items: ['Lesiones primarias planas: mácula y mancha', 'Lesiones primarias sólidas: pápula, placa, nódulo y roncha', 'Lesiones primarias de contenido líquido: vesícula, ampolla y pústula'] },
  { title: 'Lesiones elementales secundarias y patrones', items: ['Lesiones secundarias por pérdida de sustancia: erosión y úlcera', 'Patrones de distribución y configuración'] },
  { title: 'Neoplasias cutáneas', items: ['Regla ABCDE del melanoma', 'Diferenciación clínica: carcinoma basocelular, espinocelular y melanoma'] },
  { title: 'Uñas y cabello', items: ['Exploración de uñas: hallazgos normales y patológicos', 'Exploración de cabello y cuero cabelludo: patrones de alopecia'] }
];
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Técnica general' },
  { id: 'complicaciones', label: 'Maniobras y hallazgos' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
