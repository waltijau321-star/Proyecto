// topics/exploracion-piel-faneras/content.js — Semiología 6: Exploración de Piel y Faneras.
// Sexto tema de Semiología, mismo patrón que los anteriores (ver exploracion-cardiovascular/
// exploracion-neurologica para la nota completa de convenciones). El cluster del kardex es más
// chico (3 sub-ítems: lesiones elementales, ABCDE del melanoma, uñas y cabello) que los de
// sistemas orgánicos, pero se mantiene la misma profundidad "de especialista" acordada: cada
// hallazgo semiológico se explica por su mecanismo, no solo se nombra.
//
// De las 7 figuras (tras la revisión de agosto 2026), 1 sigue siendo código propio (SVG/HTML con
// var(--...) de tema: comparación de neoplasias, Tabla 2). Las otras 6 (lesiones primarias,
// lesiones secundarias, patrones de distribución, ABCDE, hallazgos ungueales, patrones de
// alopecia) son infografías provistas directamente por el autor del contenido, mismo patrón que
// exploracion-cardiovascular/content.js: se usan tal cual, sin marcar su origen en ningún texto
// visible de la app. Dos notas de precisión agregadas al integrar estas imágenes: (1) la Imagen 2
// de lesiones secundarias no incluye "fisura" ni "excoriación", que siguen mencionadas en texto
// para no perderlas; (2) la Tabla 3 de hallazgos ungueales llama "signo de Lindsay" a un hallazgo
// que en nomenclatura clásica corresponde a las uñas de Terry — se agregó una nota aclaratoria en
// el propio texto de la tarjeta en vez de corregir la imagen.
//
// Video (revisión agosto 2026, ampliada): `videoBlock()` incrusta 2 videos vía <iframe> — no se
// descarga nada, requiere internet. Video 1 (Stanford Medicine 25): abordaje de la exploración
// dermatológica, en Secuencia y técnica. Video 2 (Med Education): signo de Nikolsky positivo en
// un paciente real con pénfigo, en Lesiones de contenido líquido — Stanford no cubre este signo.
// No se agregó audio: la exploración dermatológica no tiene componente auscultatorio.

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

// Embebe un video de YouTube (canal oficial Stanford Medicine 25) dentro de un figBlock — no se
// descarga ningún archivo, solo se reproduce desde YouTube (requiere internet, a diferencia del
// resto del contenido de la app).
function videoBlock(label, titulo, youtubeId, fuente) {
  return figBlock(label, titulo, `<div style="width:100%;max-width:480px;aspect-ratio:16/9;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);overflow:hidden;">
    <iframe src="https://www.youtube.com/embed/${youtubeId}" title="${titulo}" style="width:100%;height:100%;border:0;display:block;" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" loading="lazy"></iframe>
  </div>
  <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">${fuente}</p>`);
}

// ---------------------------------------------------------------------------------------------
// Helpers de figuras (SVG a mano, theme-aware vía var(--...) salvo colores clínicos ya
// establecidos en el proyecto: #3f6b52 = normal/reassuring, #8c3a34 = patológico/alarma).
// ---------------------------------------------------------------------------------------------

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
      clinica: `Inspección general primero a distancia (distribución, patrón), luego de cerca lesión por lesión; la palpación evalúa textura, temperatura, movilidad sobre planos profundos y consistencia. Instrumentos de apoyo: dermatoscopio (magnifica y polariza la luz, revela patrones subsuperficiales), lupa, luz de Wood (fluorescencia, útil en infecciones fúngicas del cuero cabelludo y trastornos pigmentarios).${videoBlock('Video 1', 'Abordaje de la exploración dermatológica', 'qI4E9JDs2Tw', 'Stanford Medicine 25 (YouTube)')}`,
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
Mácula: &lt;1 cm de diámetro. Mancha (o mácula grande): &gt;1 cm. Ambas pueden ser de origen vascular (eritema), pigmentario (hiper o hipopigmentación) o purpúrico (extravasación de sangre).
${figBlock('Imagen 1', 'Lesiones elementales primarias (ejemplos clínicos)', `<img src="topics/exploracion-piel-faneras/assets/lesiones-primarias.png" alt="Infografía de lesiones elementales primarias, alteraciones morfológicas básicas de la piel y mucosas que aparecen en piel sana, con ejemplo clínico fotográfico de cada una. Mácula: lesión plana, circunscrita, de color diferente al de la piel normal, sin elevación ni cambio de textura, no palpable, menor a 1 cm de diámetro, puede ser hiperpigmentada, hipopigmentada o eritematosa; ejemplo efélides (pecas). Pápula: lesión sólida, elevada, menor a 1 cm de diámetro, palpable, de consistencia sólida, puede ser del color de la piel, rosada o eritematosa; ejemplo picadura de insecto. Placa: lesión sólida, elevada, mayor a 1 cm de diámetro, puede ser plana o irregular, elevada y palpable, puede ser eritematosa, violácea, hiperpigmentada; ejemplo psoriasis en placa. Vesícula: lesión elevada, de contenido líquido claro, menor a 1 cm de diámetro, contiene líquido seroso, delicada, puede romperse fácilmente; ejemplo herpes simple. Ampolla: lesión elevada, de contenido líquido claro, mayor a 1 cm de diámetro, contiene líquido seroso, tensa, puede romperse dejando erosión; ejemplo quemadura de segundo grado. Pústula: lesión elevada, de contenido purulento (pus), menor a 1 cm de diámetro, contiene pus, rodeada de halo eritematoso; ejemplo acné pustuloso. Nódulo: lesión sólida, elevada, mayor a 1 cm, que se origina en dermis profunda o tejido subcutáneo, profunda, de consistencia firme, puede ser dolorosa; ejemplo nódulo reumatoide.">`)}`,
      criterios_dx: 'Distinguir el origen —vascular, pigmentario o purpúrico— mediante vitropresión es clínicamente más relevante que el tamaño exacto de la lesión.'
    },
    {
      nombre: 'Lesiones primarias sólidas: pápula, placa, nódulo y roncha',
      color: '#3d5a73',
      definicion: 'Lesiones PALPABLES, elevadas, de contenido sólido, que se distinguen por tamaño y profundidad.',
      clinica: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Pápula</strong>: &lt;1 cm, elevada, bien delimitada.</li>
  <li><strong>Placa</strong>: pápulas confluentes o lesión &gt;1 cm, predominantemente superficial (mayor diámetro que profundidad).</li>
  <li><strong>Nódulo</strong>: lesión sólida &gt;1 cm que compromete la dermis profunda o la hipodermis (se palpa más profundo de lo que se ve).</li>
  <li><strong>Roncha/habón</strong>: pápula o placa edematosa, transitoria, eritematosa, muy pruriginosa.</li>
</ul>`,
      fisiopatologia: 'La roncha es edema transitorio de la dermis superficial por degranulación de mastocitos y liberación de histamina, que aumenta la permeabilidad vascular; cada roncha individual dura típicamente menos de 24 horas y se resuelve sin dejar marca. Si una lesión "en roncha" persiste más de 24 horas en el mismo sitio (se puede documentar marcando su contorno con tinta), debe sospecharse vasculitis urticarial, no urticaria simple.',
      criterios_dx: 'La duración de cada lesión INDIVIDUAL (no la del brote completo) diferencia la urticaria (cada roncha &lt;24 h) de la vasculitis urticarial (lesiones fijas &gt;24 h, que pueden dejar hiperpigmentación residual o púrpura) — esta última amerita biopsia.'
    },
    {
      nombre: 'Lesiones primarias de contenido líquido: vesícula, ampolla y pústula',
      color: '#8c3a34',
      definicion: 'Lesiones elevadas con contenido líquido, que se distinguen por tamaño y tipo de contenido.',
      clinica: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Vesícula</strong>: &lt;1 cm, líquido claro.</li>
  <li><strong>Ampolla</strong> (bulla): &gt;1 cm, líquido claro.</li>
  <li><strong>Pústula</strong>: contenido purulento, de cualquier tamaño.</li>
</ul>`,
      fisiopatologia: `<p style="margin:0;">El plano anatómico donde se forma la ampolla determina su fragilidad y el signo de Nikolsky:</p>
<ul style="margin:8px 0 0;padding-left:18px;">
  <li><strong>Ampollas INTRAEPIDÉRMICAS</strong> (por acantólisis: pérdida de adhesión entre queratinocitos mediada por autoanticuerpos anti-desmogleína): flácidas, se rompen con facilidad, Nikolsky POSITIVO (la fricción sobre piel perilesional de aspecto sano genera una ampolla nueva) — pénfigo vulgar, síndrome de piel escaldada estafilocócica, necrólisis epidérmica tóxica/Stevens-Johnson.</li>
  <li><strong>Ampollas SUBEPIDÉRMICAS</strong> (separación en la unión dermoepidérmica, por autoanticuerpos contra hemidesmosomas): tensas, más resistentes, Nikolsky NEGATIVO — penfigoide ampolloso.</li>
</ul>
<p style="margin:8px 0 0;">Es la diferencia entre despegar solo la capa de pintura superficial de una pared (se desprende en escamas frágiles con cualquier roce, como la ampolla intraepidérmica) y despegar el papel tapiz completo, pegado firmemente hasta la pared misma (se necesita jalar con fuerza para que ceda de una sola pieza tensa, como la ampolla subepidérmica).</p>
${videoBlock('Video 2', 'Signo de Nikolsky positivo — paciente real con pénfigo', '6e7toezdqZw', 'Med Education (YouTube)')}`,
      criterios_dx: 'Un signo de Nikolsky positivo en un paciente con ampollas y erosiones extensas es una urgencia dermatológica: sugiere un proceso con separación intraepidérmica que compromete la barrera cutánea de forma extensa, con alto riesgo de infección y pérdida de líquidos.',
      dx_diferencial: 'Ampollas flácidas con Nikolsky positivo (pénfigo, SJS/TEN, piel escaldada estafilocócica) vs. ampollas tensas con Nikolsky negativo (penfigoide ampolloso) — esta distinción cambia por completo el manejo y el pronóstico.'
    },
    {
      nombre: 'Lesiones secundarias por pérdida de sustancia: erosión y úlcera',
      color: '#3d5a73',
      definicion: 'Pérdida de continuidad de la piel, clasificada según la profundidad alcanzada (ver Imagen 2).',
      clinica: 'Erosión: pérdida limitada a la epidermis, hasta la membrana basal — superficie húmeda, no sangra con facilidad. Úlcera: pérdida que alcanza la dermis o planos más profundos — puede sangrar, con bordes (elevados, socavados) y fondo (limpio, necrótico, fibrinoso) definibles.',
      fisiopatologia: `${figBlock('Imagen 2', 'Lesiones elementales secundarias', `<img src="topics/exploracion-piel-faneras/assets/lesiones-secundarias.png" alt="Infografía de lesiones elementales secundarias, que resultan de la evolución de las lesiones primarias por cambios, pérdida de sustancia o reparación. Escama: acumulación de células muertas en la superficie de la piel que se desprenden en láminas delgadas; secas, de color blanco, grisáceo o amarillento, se desprenden fácilmente; ejemplo psoriasis. Costra: secado de exudados (suero, sangre o pus) sobre la superficie de la piel; puede ser serosa, hemática o purulenta, amarillenta, melicérica, parduzca o negruzca; ejemplo impétigo (costra melicérica). Erosión: pérdida de sustancia que afecta la epidermis, sin comprometer la dermis; superficial, exudativa, eritematosa, dolorosa al contacto; ejemplo erosión por régimen tópico. Úlcera: pérdida de sustancia que afecta epidermis y dermis, puede alcanzar tejidos más profundos; profunda, con bordes definidos, lecho variable (fibrinoso, necrótico), cicatriza dejando cicatriz; ejemplo úlcera venosa. Atrofia: disminución del grosor de la piel por pérdida de epidermis, dermis o anexos; piel fina, arrugada, translúcida, puede ser localizada o generalizada; ejemplo atrofia por corticoides. Cicatriz: tejido fibroso que reemplaza la piel normal tras la cicatrización de una lesión; puede ser plana, atrófica o hipertrófica, color blanquecino o violáceo, permanente; ejemplo cicatriz quirúrgica. Liquenificación: engrosamiento de la piel con acentuación de los pliegues, secundario a rascado crónico o fricción; piel engrosada, áspera, con aumento de pliegues, hiperpigmentada; ejemplo liquen simple crónico.">`)}
<p style="margin:8px 0 0;">La profundidad determina el desenlace cicatricial: la erosión, al respetar la membrana basal y las estructuras anexiales de la dermis, cura SIN cicatriz; la úlcera, al destruir la dermis, cura CON cicatriz (reemplazo por tejido de granulación y colágeno desorganizado). Otras 2 lesiones secundarias de uso frecuente, no incluidas en la Imagen 2: <strong>fisura</strong> (hendidura lineal estrecha y profunda) y <strong>excoriación</strong> (erosión lineal autoinducida por rascado).</p>`,
      criterios_dx: 'Predecir si una lesión cicatrizará o no según su profundidad permite anticipar el pronóstico estético y funcional antes de iniciar cualquier tratamiento.'
    },
    {
      nombre: 'Patrones de distribución y configuración',
      color: '#3d5a73',
      definicion: 'La forma en que se agrupan o distribuyen las lesiones en la superficie corporal, un dato tan diagnóstico como la morfología de cada lesión individual (ver Imagen 3).',
      clinica: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Lineal</strong>: a lo largo de una línea.</li>
  <li><strong>Anular</strong>: en anillo, con aclaramiento central.</li>
  <li><strong>Arciforme</strong>: en arco, anillo incompleto.</li>
  <li><strong>En diana/target</strong>: 3 zonas concéntricas de color distinto.</li>
  <li><strong>Agrupado/herpetiforme</strong>: racimo de lesiones muy próximas.</li>
  <li><strong>En dermatoma</strong>: banda que sigue la distribución de una raíz nerviosa.</li>
</ul>`,
      fisiopatologia: `${figBlock('Imagen 3', 'Patrones de distribución y configuración', `<img src="topics/exploracion-piel-faneras/assets/patrones-distribucion.png" alt="Infografía de patrones de distribución y configuración, que guían el diagnóstico orientando la localización y morfología de las lesiones en la piel. 1) Localización: afectación de un área específica del cuerpo; ejemplos cara (lupus eritematoso discoide), cuero cabelludo (psoriasis), región flexural (dermatitis atópica). 2) Simetría: lesiones distribuidas de manera similar en ambos lados del cuerpo; ejemplos psoriasis en codos y rodillas, exantema medicamentoso, vitíligo. 3) Distribución lineal: lesiones alineadas en trayecto recto; ejemplos dermatitis por contacto (látex), líneas de Blaschko (liquen estriado), excoriaciones. 4) Distribución dermatómica: lesiones que siguen el territorio de un dermatoma (radicular); ejemplos herpes zóster, radiculopatías con alteraciones cutáneas. 5) Distribución centrífuga: las lesiones se inician en el centro y se extienden hacia la periferia; ejemplos tiña corporal, eritema multiforme (lesiones en diana), pitiriasis rosada (placa heraldo). 6) Distribución centrípeta: las lesiones se inician en la periferia y tienden a confluir hacia el centro; ejemplos granuloma anular, urticaria anular, eritema anular centrípeto. 7) Configuración agrupada: lesiones agrupadas en racimos o placas confluentes; ejemplos herpes simple (vesículas agrupadas), molusco contagioso, acné (pápulas/pústulas agrupadas).">`)}
<ul style="margin:0;padding-left:18px;">
  <li><strong>En dermatoma</strong> → herpes zóster, por reactivación del virus varicela-zóster latente en un ganglio de la raíz dorsal, que viaja por el nervio sensitivo hasta la piel que inerva.</li>
  <li><strong>Anular</strong> → tiña (borde activo descamativo con aclaramiento central por resolución centrífuga), granuloma anular, eritema migrans de la enfermedad de Lyme.</li>
  <li><strong>En diana</strong> → eritema multiforme.</li>
  <li><strong>Agrupado/herpetiforme</strong> → herpes simple, dermatitis herpetiforme.</li>
  <li><strong>Lineal</strong> → dermatitis de contacto por planta (el alérgeno se deposita en la línea de contacto) o fenómeno de Koebner.</li>
</ul>`,
      criterios_dx: 'El fenómeno de Koebner (lesiones nuevas de la misma enfermedad de base, exactamente en sitios de trauma cutáneo previo: rasguño, cicatriz quirúrgica) es característico de psoriasis, liquen plano y vitíligo, y su presencia apoya activamente esos diagnósticos.'
    },
    {
      nombre: 'Regla ABCDE del melanoma',
      color: '#8c3a34',
      definicion: 'Criterios clínicos para diferenciar un nevo melanocítico benigno de una lesión sospechosa de melanoma, complementados por el "signo del patito feo" y la dermatoscopia (ver Imagen 4).',
      clinica: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Asimetría</strong>: una mitad no es igual a la otra.</li>
  <li><strong>Bordes irregulares</strong>: festoneados, mal definidos.</li>
  <li><strong>Color heterogéneo</strong>: múltiples tonos en la misma lesión.</li>
  <li><strong>Diámetro</strong> &gt;6 mm: aproximadamente el tamaño de un borrador de lápiz.</li>
  <li><strong>Evolución</strong>: cualquier cambio de tamaño, forma, color o síntoma —sangrado, prurito— en semanas o meses.</li>
</ul>`,
      fisiopatologia: `${figBlock('Imagen 4', 'Nevo benigno vs. lesión sospechosa (ABCDE)', `<img src="topics/exploracion-piel-faneras/assets/abcde-melanoma.png" alt="Infografía comparativa nevo benigno vs. lesión sospechosa según los criterios ABCDE. A — Asimetría: nevo benigno simétrico, forma redonda u ovalada; lesión sospechosa asimétrica, las mitades son diferentes. B — Bordes: nevo benigno con bordes regulares, bien definidos y uniformes; lesión sospechosa con bordes irregulares, dentados, mal definidos. C — Color: nevo benigno de color uniforme, un solo tono de marrón; lesión sospechosa de color variable, con varios tonos (marrón, negro, rojizo, azul, blanco). D — Diámetro: nevo benigno generalmente menor de 6 mm; lesión sospechosa mayor o igual a 6 mm. E — Evolución: nevo benigno estable en el tiempo, no cambia de tamaño, forma, color ni síntomas a lo largo de meses; lesión sospechosa cambia de tamaño, forma, color o presenta síntomas (prurito, sangrado). Regla general: si una lesión cumple uno o más criterios de alarma (ABCDE), considerarla sospechosa y referir para evaluación dermatológica.">`)}
El "signo del patito feo" complementa al ABCDE: una lesión pigmentada que se ve clínicamente distinta de los demás nevos de ese paciente es sospechosa AUNQUE cumpla pocos criterios ABCDE aislados, porque la mayoría de los nevos de una persona tienden a parecerse entre sí ("firma nevomelanocítica" propia de cada individuo).`,
      criterios_dx: 'El criterio E (evolución) es el de mayor sensibilidad individual: un melanoma temprano puede no cumplir aún claramente A, B, C o D, pero SIEMPRE está cambiando en el tiempo.',
      dx_diferencial: 'Un nevo melanocítico común es simétrico, de borde regular, de un solo tono de color, generalmente &lt;6 mm, y estable en el tiempo — el incumplimiento de cualquiera de estos 5 criterios amerita evaluación dermatológica dirigida (dermatoscopia, biopsia).'
    },
    {
      nombre: 'Diferenciación clínica: carcinoma basocelular, espinocelular y melanoma',
      color: '#8c3a34',
      definicion: 'Las 3 neoplasias cutáneas malignas más frecuentes, con presentaciones clínicas y riesgo de metástasis muy distintos (ver Tabla 2).',
      clinica: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Carcinoma basocelular</strong>: pápula o placa perlada/translúcida, con telangiectasias superficiales y borde enrollado ("en rodete"), crecimiento lento, con frecuencia ulcerada en el centro (úlcera "roedora").</li>
  <li><strong>Carcinoma espinocelular</strong>: placa o nódulo hiperqueratósico, a menudo ulcerado, de base indurada, puede originarse de una queratosis actínica preexistente.</li>
</ul>`,
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
      fisiopatologia: `${figBlock('Tabla 3', 'Hallazgos ungueales y su significado sistémico', `<img src="topics/exploracion-piel-faneras/assets/hallazgos-ungueales.png" alt="Infografía de hallazgos ungueales y su significado sistémico. 1) Uñas en palo de reloj (acropaquia): aumento de la curvatura longitudinal, hipocratismo digital, ángulo de Lovibond mayor a 180°; indica hipoxia crónica con vasodilatación e hiperplasia del lecho ungueal; asociada a enfermedad pulmonar crónica, cáncer de pulmón, cardiopatías congénitas cianóticas, cirrosis hepática, enfermedad inflamatoria intestinal. 2) Líneas de Beau: surcos transversales depresibles que atraviesan la uña, reflejan interrupción temporal del crecimiento; indica interrupción temporal de la matriz ungueal por enfermedad sistémica o evento grave; asociada a fiebre alta, sepsis, quimioterapia, desnutrición severa, infarto agudo de miocardio. 3) Uñas en cuchara (coiloniquia): uña adelgazada y cóncava en sentido transversal, bordes elevados; asociada a deficiencia de hierro o alteraciones en el metabolismo del hierro; anemia ferropénica (causa más común), síndrome de Plummer-Vinson, hemocromatosis. 4) Líneas de Mee (leuconiquia transversal): bandas blancas transversales bien delimitadas, no desaparecen con la presión; indica arresto temporal severo del crecimiento de la matriz; asociada a intoxicación por arsénico, insuficiencia renal crónica, desnutrición severa, quimioterapia. 5) Signo de Lindsay: banda blanca proximal (blanqueamiento) con zona distal rosada o marrón; indica enfermedad hepática crónica con hipoalbuminemia y alteraciones vasculares; asociada a cirrosis hepática (marcado en casos avanzados), hepatitis crónica. 6) Uñas amarillas (yellow nail syndrome): uñas engrosadas, amarillas, de crecimiento lento, a menudo con linfedema y derrame pleural; indica disfunción linfática sistémica; asociada a síndrome de uñas amarillas, linfedema, EPOC, sinusitis crónica. 7) Hemorragias en astilla: líneas rojas o marrones longitudinales en el lecho ungueal, no blanquean con la presión; indica microhemorragias por daño vascular o fenómenos embólicos; asociada a endocarditis infecciosa (más común), vasculitis, traumatismos, conectivopatías.">`)}
<p style="margin:8px 0 0;">La infografía llama "signo de Lindsay" al hallazgo de banda blanca proximal con banda distal rosada asociado a hepatopatía/hipoalbuminemia — vale aclarar que en la nomenclatura clásica ese cuadro corresponde más precisamente a las <strong>uñas de Terry</strong> (2/3 proximales blancos, banda distal rosada/marrón estrecha; cirrosis, insuficiencia cardiaca o renal). El término "Lindsay" o "half-and-half nails" se reserva más específicamente para la uremia/insuficiencia renal crónica (banda proximal blanca, banda distal roja/marrón, en proporción aproximadamente 1:1). Ambos hallazgos se parecen y con frecuencia se confunden entre sí.</p>
<ul style="margin:8px 0 0;padding-left:18px;">
  <li><strong>Acropaquia</strong> (dedos en palillo de tambor): pérdida del ángulo normal (&gt;180°) con abombamiento de la falange distal; se explora con el signo de Schamroth (al juntar dorso con dorso las falanges distales de dedos opuestos, normalmente se forma un rombo entre las uñas — en la acropaquia ese rombo desaparece). Mecanismo: en enfermedad pulmonar o cardiopatía con cortocircuito derecha-izquierda, megacariocitos y agregados plaquetarios que normalmente se fragmentan en el filtro capilar pulmonar escapan intactos a la circulación sistémica y se depositan en los lechos ungueales, liberando PDGF y VEGF que inducen hiperplasia del tejido conectivo subungueal. Es como un colador de cocina que normalmente detiene y desmenuza los grumos grandes antes de que pasen: si el colador está dañado o hay un "atajo" que lo evita (la enfermedad pulmonar o el cortocircuito), esos grumos intactos llegan enteros más adelante y ahí se acumulan, liberando su contenido en el lugar equivocado.</li>
  <li><strong>Línea de Beau</strong>: surco transversal por interrupción temporal y sincrónica del crecimiento ungueal durante una enfermedad sistémica grave; la distancia desde la cutícula permite estimar cuándo ocurrió el evento (la uña crece ≈0.1 mm/día).</li>
  <li><strong>Coiloniquia</strong> (uña en cuchara): anemia ferropénica severa.</li>
  <li><strong>Líneas de Mee</strong> (leuconiquia transversal, bandas blancas bien delimitadas que NO desaparecen con la presión): arresto temporal severo de la matriz ungueal — intoxicación por arsénico clásicamente, aunque también insuficiencia renal crónica, desnutrición severa, quimioterapia.</li>
  <li><strong>Líneas de Muehrcke</strong> (pares de líneas blancas transversales que NO se mueven con el crecimiento, porque reflejan un cambio del lecho vascular subyacente, no de la placa ungueal): hipoalbuminemia.</li>
  <li><strong>Uñas de Terry</strong>: dos tercios proximales blancos con banda distal rosada/marrón estrecha — cirrosis, insuficiencia cardiaca, insuficiencia renal (también en el envejecimiento normal).</li>
  <li><strong>Uñas amarillas</strong> (yellow nail syndrome): uñas engrosadas, amarillas, de crecimiento lento, con frecuencia acompañadas de linfedema y derrame pleural — disfunción linfática sistémica.</li>
  <li><strong>Hemorragias en astilla</strong>: pequeñas líneas hemorrágicas longitudinales subungueales — microembolismos sépticos en endocarditis infecciosa, aunque inespecíficas (también por trauma local).</li>
</ul>`,
      criterios_dx: 'La distinción entre leuconiquia verdadera (se mueve con el crecimiento de la uña) y líneas de Muehrcke (fijas, no se mueven) es clave: solo las líneas de Muehrcke son un marcador confiable de hipoalbuminemia.',
      dx_diferencial: 'Pitting ungueal (pequeñas depresiones puntiformes): psoriasis, alopecia areata.'
    },
    {
      nombre: 'Exploración de cabello y cuero cabelludo: patrones de alopecia',
      color: '#8c3a34',
      definicion: 'Inspección de la densidad, distribución y calidad del pelo, y del cuero cabelludo subyacente (presencia o ausencia de orificios foliculares visibles).',
      clinica: `La distinción más importante es entre alopecia CICATRICIAL (folículos destruidos, sin orificios foliculares visibles, pérdida permanente) y NO cicatricial (folículos preservados, pérdida potencialmente reversible) (ver Imagen 5).${figBlock('Imagen 5', 'Patrones de alopecia', `<img src="topics/exploracion-piel-faneras/assets/patrones-alopecia.png" alt="Infografía de patrones de alopecia. 1) Androgenética (masculina): recesión de entradas y adelgazamiento en vértice (coronilla), patrón en U que progresa a M, evolución lenta y progresiva, no hay inflamación ni cicatriz, antecedente familiar frecuente, miniaturización de folículos; causa: sensibilidad androgénica (dihidrotestosterona). 2) Androgenética (femenina): disminución difusa del volumen en la parte superior (vértice) con ensanchamiento de la raya central, línea frontal generalmente conservada, patrón difuso no en parches, progresión lenta, asociada a cambios hormonales (menopausia, posparto). 3) Alopecia areata: pérdida de cabello en parches redondos u ovalados, bien delimitados, de piel lisa y sin descamación, inicio súbito o rápido, puede afectar barba/cejas/pestañas, uñas con hoyuelos/puntilleo, curso impredecible; causa autoinmune, estrés como factor desencadenante. 4) Efluvio telógeno: pérdida difusa del cabello en todo el cuero cabelludo, sin áreas bien definidas, se nota al peinar o lavar, inicio 2-3 meses después del factor desencadenante, cabello tirable positivo, reversible al tratar la causa; causas: estrés físico o emocional, fiebre, cirugía, parto, deficiencias, fármacos. 5) Alopecia frontal fibrosante: recesión simétrica de la línea frontal y de las sienes con pérdida de las cejas (tercio lateral), puede haber prurito o ardor, proceso inflamatorio y cicatricial, progresión lenta pero irreversible, afecta principalmente a mujeres posmenopáusicas; causa desconocida (posible autoinmune), asociada a liquen plano. 6) Alopecia cicatricial (en placas): áreas de pérdida de cabello con piel atrófica, brillante, blanquecina y sin folículos visibles, pérdida permanente, puede estar precedida de inflamación/sequedad/dolor/prurito, no hay reaparición del cabello; causas: lupus eritematoso discoide, liquen plano pilar, foliculitis decalvante, quemaduras/radiación.">`)}`,
      fisiopatologia: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Alopecia androgenética</strong>: patrón (bitemporal/coronilla en hombres, difusa en la línea de partición en mujeres), por miniaturización progresiva del folículo mediada por dihidrotestosterona en folículos genéticamente susceptibles — no cicatricial.</li>
  <li><strong>Alopecia areata</strong>: parches bien delimitados, redondos u ovales, de aparición súbita; en el borde activo se observan "pelos en signo de exclamación" (más delgados hacia la raíz que hacia la punta) — enfermedad autoinmune que ataca el folículo en fase anágena, no cicatricial.</li>
  <li><strong>Efluvio telógeno</strong>: caída difusa y aguda, típicamente 2-3 meses DESPUÉS de un estrés fisiológico significativo (parto, cirugía mayor, fiebre alta, pérdida de peso severa), por el paso sincrónico y masivo de folículos de la fase anágena (crecimiento) a la telógena (reposo/caída) — prueba del tirón difusamente positiva.</li>
  <li><strong>Alopecia frontal fibrosante</strong>: recesión simétrica de la línea de implantación frontal y de las sienes, con frecuente pérdida asociada del tercio lateral de las cejas; variante clínica del liquen planopilar (proceso inflamatorio linfocitario que destruye el folículo) — cicatricial e irreversible, predomina en mujeres posmenopáusicas.</li>
  <li><strong>Tricotilomanía</strong>: parches irregulares, de bordes geográficos, con pelos de longitud variable (rotos, no arrancados de raíz) por arrancamiento compulsivo, SIN inflamación del cuero cabelludo.</li>
</ul>`,
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
