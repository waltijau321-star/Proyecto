// topics/exploracion-abdominal/content.js — Semiología 4: Exploración Abdominal.
// Cuarto tema de Semiología, mismo patrón que exploracion-cardiovascular/ y
// exploracion-respiratoria/ (ver esos archivos para la nota completa de convenciones). Aquí el
// orden clásico se INVIERTE respecto a los otros dos sistemas: es IAPP (Inspección, Auscultación,
// Percusión, Palpación), no IPPA — la percusión y sobre todo la palpación estimulan mecánicamente
// el intestino y pueden alterar artificialmente los ruidos hidroaéreos si se hacen antes de
// auscultar. Es el punto de confusión más frecuente para un residente que ya automatizó el orden
// IPPA con tórax y pulmón, así que se remarca explícitamente en la primera tarjeta.
//
// 3 de las 5 figuras son código propio (SVG/HTML con var(--...) de tema) — mismo criterio ya
// establecido: cada una representa un dato clínico exacto (puntos dolorosos, tablas de signos),
// y ese contenido va a mano (ver .claude/skills/figura-didactica/SKILL.md). Imagen 1 (regiones
// topográficas) e Imagen 2 (matidez cambiante) son infografías provistas directamente por el
// autor del contenido, mismo patrón que exploracion-cardiovascular/content.js: se usan tal cual,
// sin marcar su origen en ningún texto visible de la app.
//
// Video (revisión agosto 2026, ampliada): `videoBlock()` incrusta 2 videos vía <iframe> — no se
// descarga nada, requiere internet. Video 1 (Stanford Medicine 25): guía completa de exploración
// abdominal quirúrgica, en Secuencia y técnica. Video 2 (OMMinutes, canal más pequeño pero el
// contenido es correcto y específico): demostración de Rovsing/psoas/obturador, en Signos de
// apendicitis — Stanford no tiene un video dedicado a esos 3 signos. No se agregó audio: a
// diferencia de cardiovascular/respiratoria, no se encontró una fuente equivalente con ruidos
// hidroaéreos/soplos vasculares abdominales para enlazar o incrustar.

export const meta = {
  id: 'exploracion-abdominal',
  titulo: 'Exploración Abdominal',
  subtitulo: 'Semiología 4 · Medicina Interna',
  accent: '#7a4a23',
  accentDim: '#a67b4d'
};

export const definicionText = 'La exploración abdominal sigue un orden que invierte el de la exploración torácica: inspección, auscultación, percusión y palpación (IAPP), porque percutir o palpar antes de auscultar estimula mecánicamente el intestino y puede alterar de forma artificial la frecuencia y el carácter de los ruidos hidroaéreos que se busca evaluar. Integra información visual (contorno, cicatrices, red venosa), acústica (ruidos hidroaéreos, soplos vasculares), de percusión (timpanismo, matidez hepática y esplénica, ascitis) y táctil (tono de la pared, visceromegalias, puntos y signos dolorosos específicos), y sigue siendo la herramienta de mayor rendimiento y menor costo para orientar un abdomen agudo, una hepatopatía o una visceromegalia antes de cualquier estudio de imagen.';

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
  'Naylor CD. Physical examination of the liver. JAMA. 1994;271(23):1859-1865.',
  'Wagner JM, McKinney WP, Carpenter JL. Does this patient have appendicitis? JAMA. 1996;276(19):1589-1594.',
  'Cattau EL, Benjamin SB, Knuff TE, Castell DO. The accuracy of the physical examination in the diagnosis of suspected ascites. JAMA. 1982;247(8):1164-1166.',
  "Barkun AN, Camus M, Meagher T, et al. Splenic enlargement and Traube's space: how useful is percussion? Am J Med. 1989;87(5):562-566."
];

// Reetiqueta los 4 campos genéricos del motor para que encajen con contenido semiológico
// (mismo criterio que historia-clinica y exploracion-cardiovascular, ver nota ahí).
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

function abdomenOutline() {
  // Contorno reutilizable: rectángulo redondeado que representa la pared abdominal anterior,
  // de reborde costal (arriba) a pubis (abajo), en el mismo estilo esquemático que el torso de
  // exploracion-cardiovascular/exploracion-respiratoria.
  return 'M45,20 Q40,10 60,10 L200,10 Q220,10 215,20 L222,120 Q226,220 190,270 Q160,290 130,290 Q100,290 70,270 Q34,220 38,120 Z';
}

function puntosDolorosSVG() {
  return `<svg viewBox="0 0 260 300" role="img" aria-labelledby="pd-t pd-d" style="width:100%;max-width:260px;display:block;margin:0 auto;">
    <title id="pd-t">Punto cístico (Murphy) y punto de McBurney</title>
    <desc id="pd-d">Contorno abdominal con dos puntos marcados: el punto cístico en la intersección del reborde costal derecho con el borde lateral del músculo recto, y el punto de McBurney en la unión del tercio externo con los dos tercios internos de la línea entre la espina iliaca anterosuperior derecha y el ombligo.</desc>
    <path d="${abdomenOutline()}" transform="translate(4,0)" fill="none" stroke="var(--line)" stroke-width="1.5"/>
    <line x1="110" y1="12" x2="110" y2="288" stroke="var(--line)" stroke-width="1" stroke-dasharray="2,3"/>
    <circle cx="132" cy="150" r="3" fill="var(--ink-faint)"/>
    <circle cx="80" cy="60" r="7" fill="#8c3a34"/>
    <text x="80" y="64" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="700">M</text>
    <line x1="132" y1="150" x2="90" y2="235" stroke="var(--ink-faint)" stroke-width="1" stroke-dasharray="2,2"/>
    <circle cx="103" cy="207" r="7" fill="#8c3a34"/>
    <text x="103" y="211" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="700">Mc</text>
    <circle cx="90" cy="235" r="2.5" fill="var(--ink-faint)"/>
    <text x="86" y="248" text-anchor="middle" font-size="7.5" fill="var(--ink-faint)">EIAS</text>
  </svg>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:6px;margin-top:8px;font-size:11.5px;">
    <div><strong style="color:#8c3a34;">M — Punto cístico (Murphy)</strong><br>Intersección del reborde costal derecho con el borde lateral del recto abdominal.</div>
    <div><strong style="color:#8c3a34;">Mc — Punto de McBurney</strong><br>Tercio externo de la línea EIAS derecha–ombligo (línea punteada).</div>
  </div>`;
}


export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Exploración abdominal normal',
      tituloB: 'Hallazgos que obligan a profundizar el estudio',
      compensada: 'Contorno plano o levemente convexo y simétrico, sin cicatrices ni red venosa visible; ruidos hidroaéreos normoactivos (5-34/min) sin soplos; timpanismo predominante con matidez hepática de 6-12 cm en línea medioclavicular derecha y espacio de Traube timpánico; pared blanda y depresible, sin dolor ni defensa, sin masas ni visceromegalias palpables.',
      descompensada: 'Distensión localizada o generalizada, cicatrices/hernias/red venosa colateral, ruidos aumentados en "ráfagas" o abolidos, soplos vasculares, matidez hepática aumentada/abolida o matidez de Traube presente, matidez cambiante, defensa involuntaria, masas o visceromegalias palpables, o cualquier signo doloroso específico (Murphy, McBurney, Rovsing, psoas, obturador, Blumberg) — cada uno de estos hallazgos, aislado, ya reorienta el diagnóstico diferencial y puede justificar estudios de imagen o valoración quirúrgica urgente.'
    }
  },
  complicaciones: [
    {
      nombre: 'Secuencia y técnica de la exploración abdominal',
      color: '#3d5a73',
      definicion: 'Orden sistemático de la exploración abdominal: Inspección, Auscultación, Percusión y Palpación (IAPP) — el único de los grandes sistemas donde el orden clásico INVIERTE percusión/palpación respecto a auscultación.',
      clinica: `Paciente en decúbito supino, brazos a los lados (no detrás de la cabeza, eso tensa la pared), piernas ligeramente flexionadas para relajar la musculatura abdominal, abdomen descubierto de apéndice xifoides a sínfisis del pubis, manos e instrumentos tibios, buena iluminación tangencial para resaltar contornos y peristalsis visible.${videoBlock('Video 1', 'Exploración abdominal quirúrgica, guía completa', 'vqiVwW9RBRw', 'Stanford Medicine 25 (YouTube)')}`,
      fisiopatologia: 'A diferencia del tórax (IPPA), en el abdomen la percusión y sobre todo la palpación estimulan mecánicamente las asas intestinales y pueden alterar de forma artificial la frecuencia y el carácter de los ruidos hidroaéreos si se realizan antes de auscultar — por eso la auscultación se hace inmediatamente después de la inspección, antes de tocar la pared.',
      criterios_dx: 'Percutir o palpar antes de auscultar invalida la valoración de los ruidos hidroaéreos: puede simular hiperperistaltismo donde no lo hay, o silenciar transitoriamente un abdomen que en realidad estaba hiperactivo.',
      algoritmo: ['Inspección', 'Auscultación (antes de tocar la pared)', 'Percusión', 'Palpación superficial', 'Palpación profunda']
    },
    {
      nombre: 'Regiones y cuadrantes abdominales',
      color: '#3d5a73',
      definicion: 'Dos sistemas de referencia topográfica de uso simultáneo: 4 cuadrantes (rápido, útil para localizar dolor a la cabecera) y 9 regiones (dos líneas medioclaviculares verticales y dos horizontales —subcostal y transtubercular— más precisas para correlacionar con una víscera concreta).',
      clinica: `Hipocondrio derecho: hígado, vesícula. Epigastrio: estómago, páncreas, duodeno. Hipocondrio izquierdo: bazo. Flancos: colon ascendente/descendente, riñones. Región umbilical: intestino delgado, aorta. Fosas iliacas: ciego/apéndice (derecha), sigmoides (izquierda). Hipogastrio: vejiga, útero (ver Imagen 1).${figBlock('Imagen 1', 'Las 9 regiones topográficas del abdomen', `<img src="topics/exploracion-abdominal/assets/regiones-topograficas-abdomen.png" alt="Infografía de las 9 regiones topográficas del abdomen y qué encontramos en cada una. 1) Hipocondrio derecho: hígado (lóbulo derecho), vesícula biliar, flexura hepática del colon, polo superior del riñón derecho, diafragma derecho. 2) Epigastrio: estómago, lóbulo izquierdo del hígado, páncreas (cuerpo), duodeno (porción superior), glándulas suprarrenales, grandes vasos (aorta, vena cava inferior). 3) Hipocondrio izquierdo: bazo, fondo gástrico, cola del páncreas, flexura esplénica del colon, polo superior del riñón izquierdo, diafragma izquierdo. 4) Flanco (lumbar) derecho: colon ascendente, riñón derecho, intestino delgado (asas), músculos de la pared abdominal, tejido graso retroperitoneal. 5) Región umbilical (centro). 6) Flanco (lumbar) izquierdo: colon descendente, riñón izquierdo, intestino delgado (asas), músculos de la pared abdominal, tejido graso retroperitoneal. 7) Fosa iliaca (inguinal) derecha: ciego, apéndice vermiforme, íleon terminal, ovario y trompa derecha (mujer), cordón espermático derecho (hombre). 8) Hipogastrio (púbica): vejiga urinaria, útero (mujer), intestino delgado (asas), colon sigmoides (porción inferior), próstata (hombre). 9) Fosa iliaca (inguinal) izquierda: colon sigmoides, porción distal del colon descendente, ovario y trompa izquierda (mujer), cordón espermático izquierdo (hombre). Las 9 regiones se delimitan con dos líneas verticales medioclaviculares y dos líneas horizontales: subcostal (borde inferior del cartílago costal) y transtubercular (por los tubérculos iliacos).">`)}`,
      criterios_dx: 'Localizar el dolor por región/cuadrante orienta el diagnóstico diferencial inicial antes de cualquier maniobra específica — un dolor en fosa iliaca derecha y uno en hipocondrio derecho comparten poco diagnóstico diferencial pese a estar en el mismo hemiabdomen.'
    },
    {
      nombre: 'Inspección abdominal',
      color: '#3d5a73',
      definicion: 'Observación sistemática, de pie a la derecha del paciente y también tangencialmente (a nivel de los ojos del examinador con el abdomen), del contorno, la piel, el ombligo y los movimientos de la pared.',
      clinica: 'Normal: contorno plano o levemente convexo y simétrico, piel sin lesiones, ombligo centrado e invertido, sin masas ni peristalsis visibles en la mayoría de los adultos. Patológico: distensión (generalizada o localizada), asimetría, cicatrices, hernias, red venosa colateral, estrías, equimosis periumbilical o en flancos, peristalsis visible, pulsación epigástrica prominente.',
      fisiopatologia: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Red venosa colateral</strong> centrífuga desde el ombligo ("cabeza de medusa"): hipertensión portal con recanalización de la vena umbilical.</li>
  <li><strong>Equimosis periumbilical</strong> (signo de Cullen) <strong>o en los flancos</strong> (signo de Grey Turner): hemorragia retroperitoneal o intraperitoneal disecando el tejido subcutáneo, clásicamente descritas en la pancreatitis aguda necrohemorrágica, pero inespecíficas (también en embarazo ectópico roto, traumatismo).</li>
</ul>
<p style="margin:8px 0 0;">La distensión generalizada se recuerda con la mnemotecnia de las <strong>"6 F"</strong>: fat (grasa), fluid (líquido/ascitis), flatus (gas), feces (heces), fetus (embarazo), fatal tumor (masa/neoplasia).</p>`,
      criterios_dx: 'Cullen y Grey Turner son signos tardíos (24-72 h tras el inicio del sangrado) y poco sensibles: su ausencia no descarta una pancreatitis grave ni una hemorragia retroperitoneal.',
      dx_diferencial: 'Distensión generalizada (ascitis, obstrucción intestinal, íleo, embarazo, obesidad) vs. distensión localizada (masa, visceromegalia, hernia, globo vesical).'
    },
    {
      nombre: 'Auscultación abdominal: ruidos hidroaéreos y soplos vasculares',
      color: '#3d5a73',
      definicion: 'Única maniobra que se realiza ANTES de percutir o palpar, con el diafragma del estetoscopio; los ruidos se transmiten por todo el abdomen, por lo que auscultar en un solo punto (habitualmente periumbilical) suele bastar.',
      clinica: `Normal: 5-34 ruidos/min, con borborigmos ocasionales. Se requieren hasta 2 minutos continuos de auscultación antes de declarar "silencio abdominal" (ausencia de ruidos) — un tiempo insuficiente es la causa más frecuente de sobrediagnosticar íleo (ver Tabla 1).${figBlock('Tabla 1', 'Ruidos hidroaéreos y soplos vasculares: hallazgo y significado', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Hallazgo</th>
        <th style="text-align:left;padding:5px 6px;">Descripción</th>
        <th style="text-align:left;padding:5px 6px;">Causa</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Normal</strong></td><td style="padding:5px 6px;">5-34 ruidos/min, borborigmos ocasionales</td><td style="padding:5px 6px;">—</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Aumentados, agudos, en ráfagas</strong></td><td style="padding:5px 6px;">"Ruidos de lucha", coinciden con el cólico</td><td style="padding:5px 6px;">Obstrucción mecánica temprana</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Disminuidos/ausentes</strong></td><td style="padding:5px 6px;">Requiere ≥2 min de auscultación para confirmarlo</td><td style="padding:5px 6px;">Íleo paralítico, peritonitis, hipopotasemia, opioides, obstrucción tardía</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Soplo sistólico/sistodiastólico</strong></td><td style="padding:5px 6px;">Epigastrio o flancos</td><td style="padding:5px 6px;">Estenosis de arteria renal (diastólico = mayor severidad)</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Soplo hepático</strong></td><td style="padding:5px 6px;">Sobre el área de proyección hepática</td><td style="padding:5px 6px;">Hepatocarcinoma, hepatitis alcohólica severa</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Soplo venoso "en zumbido"</strong></td><td style="padding:5px 6px;">Continuo, periumbilical</td><td style="padding:5px 6px;">Síndrome de Cruveilhier-Baumgarten (hipertensión portal)</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Roce/fricción</strong></td><td style="padding:5px 6px;">Hepático o esplénico, con la respiración</td><td style="padding:5px 6px;">Perihepatitis/periesplenitis (infarto, absceso)</td></tr>
      </tbody>
    </table>
    </div>`)}`,
      fisiopatologia: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Ruidos aumentados</strong>, de tono agudo, en "ráfagas" coincidiendo con el cólico ("ruidos de lucha"): obstrucción mecánica temprana, el intestino proximal a la obstrucción hiperperistalta contra la resistencia.</li>
  <li><strong>Ruidos disminuidos o ausentes</strong>: íleo paralítico/adinámico (posquirúrgico, peritonitis, hipopotasemia, opioides) donde el músculo liso intestinal pierde su actividad contráctil coordinada, o fase tardía de una obstrucción mecánica ya agotada.</li>
  <li><strong>Soplo sistólico o sistodiastólico</strong> en epigastrio/flancos: estenosis de arteria renal (el componente diastólico sugiere mayor severidad).</li>
  <li><strong>Soplo sobre el hígado</strong>: hepatocarcinoma o hepatitis alcohólica severa.</li>
  <li><strong>Soplo venoso continuo</strong>, "en zumbido", periumbilical: síndrome de Cruveilhier-Baumgarten (hipertensión portal con recanalización de la vena umbilical, coincide con la cabeza de medusa).</li>
  <li><strong>Roce/fricción</strong> hepático o esplénico: perihepatitis o periesplenitis (infarto, absceso).</li>
</ul>`,
      criterios_dx: 'Un soplo abdominal en un paciente con hipertensión arterial resistente al tratamiento obliga a descartar estenosis de arteria renal.',
      dx_diferencial: 'Silencio abdominal verdadero (íleo, peritonitis) vs. auscultación insuficiente (&lt;2 minutos, la causa más frecuente de un falso "abdomen silente").'
    },
    {
      nombre: 'Percusión abdominal: timpanismo y matidez hepática/esplénica',
      color: '#3d5a73',
      definicion: 'Percusión indirecta (dedo plexímetro) que mapea el contenido abdominal por diferencias de densidad acústica entre gas, líquido y sólido.',
      clinica: 'Normal: timpanismo predominante (gas intestinal) con matidez hepática en hipocondrio/flanco derecho y matidez esplénica limitada al espacio de Traube. Área de matidez hepática: se percute en línea medioclavicular derecha de arriba abajo (desde resonancia pulmonar hasta matidez = borde superior, ~5º espacio intercostal) y de abajo arriba (desde timpanismo intestinal hasta matidez = borde inferior, en el reborde costal); la distancia entre ambos bordes es normal entre 6 y 12 cm.',
      fisiopatologia: `<ul style="margin:0;padding-left:18px;">
  <li><strong>Área de matidez hepática aumentada</strong>: hepatomegalia real, pero también puede aumentar por un derrame pleural derecho que eleva el borde superior sin que el hígado haya crecido.</li>
  <li><strong>Área disminuida o ausente</strong> (timpanismo sobre el hígado): neumoperitoneo por víscera hueca perforada (signo de Jobert) o interposición de colon entre hígado y pared (síndrome de Chilaiditi).</li>
  <li><strong>Espacio de Traube</strong> (6º espacio intercostal izquierdo, entre la línea axilar anterior y el reborde costal): normalmente timpánico por la cámara de aire gástrica; se vuelve mate con esplenomegalia, pero también con derrame pleural izquierdo, masa gástrica o alimento reciente — baja especificidad, por lo que el signo de Castell (percusión dinámica del último espacio intercostal en línea axilar anterior izquierda, comparando espiración e inspiración profunda) es más útil que la matidez estática de Traube.</li>
</ul>`,
      criterios_dx: 'El signo de Castell positivo (el último espacio intercostal de la línea axilar anterior izquierda, timpánico en espiración, se vuelve mate en inspiración profunda) tiene mejor rendimiento que la percusión estática del espacio de Traube para detectar esplenomegalia.',
      algoritmo: ['Percutir el borde superior de la matidez hepática en línea medioclavicular derecha, de arriba hacia abajo, desde resonancia pulmonar', 'Percutir el borde inferior, de abajo hacia arriba, desde timpanismo intestinal', 'Medir la distancia entre ambos bordes (normal 6-12 cm)', 'Percutir el espacio de Traube y realizar el signo de Castell para el bazo']
    },
    {
      nombre: 'Ascitis: matidez cambiante y oleada ascítica',
      color: '#8c3a34',
      definicion: 'Maniobras de percusión y palpación diseñadas para detectar líquido libre en la cavidad peritoneal (ver Imagen 2).',
      clinica: 'Matidez cambiante (shifting dullness): con el paciente en decúbito supino, percutir desde el ombligo hacia el flanco marcando el punto donde el timpanismo cambia a matidez; girar al paciente al decúbito lateral contrario, esperar unos segundos y repercutir el mismo punto — si lo que era mate se vuelve timpánico, la prueba es positiva. Oleada ascítica (fluid wave): un asistente aplica el borde cubital de su mano firmemente sobre la línea media del abdomen (para bloquear la transmisión de la onda a través de la grasa de la pared) mientras el examinador da un golpe seco en un flanco y palpa la transmisión de la onda en el flanco contrario.',
      fisiopatologia: `${figBlock('Imagen 2', 'Matidez cambiante (shifting dullness)', `<img src="topics/exploracion-abdominal/assets/matidez-cambiante.png" alt="Infografía de matidez cambiante (shifting dullness), signo físico que indica presencia de líquido libre intraperitoneal (ascitis). Qué es: en presencia de líquido libre en la cavidad peritoneal, la matidez a la percusión se desplaza según la posición del paciente, mientras que el timpanismo se desplaza al área más declive. Cómo se explora: 1) percutir suavemente la línea media del abdomen desde el apéndice xifoides hacia la sínfisis del pubis para identificar el límite superior de matidez; 2) pedir al paciente que se recueste en decúbito lateral (derecho o izquierdo) durante 2-3 minutos; 3) percutir nuevamente la línea media en la misma forma y comparar el nivel superior de matidez. Interpretación: si el límite superior de la matidez se desplaza 2-3 cm o más hacia la dependencia de la posición, la prueba es positiva, sugestiva de líquido libre intraperitoneal. Por qué ocurre: en decúbito supino el líquido se distribuye en las porciones declives laterales e inferiores (timpanismo anterior, matidez en la porción inferior y lateral); en decúbito lateral el líquido se desplaza hacia el lado dependiente, haciendo que la matidez se eleve en el lado no dependiente (timpanismo en el lado no dependiente, matidez en el lado dependiente). Puntos clave: requiere una cantidad moderada o grande de líquido (aproximadamente ≥1-1.5 L); puede ser negativo en ascitis loculada o en obesidad marcada; es más útil cuando se combina con otros signos de ascitis. Importante: no confundir con matidez fija (masas, embarazo, hepatomegalia) que no cambia con la posición.">`)}
En decúbito supino el gas intestinal flota en la región central-anterior (timpanismo periumbilical) mientras el líquido libre se acumula por gravedad en ambos flancos (matidez); al rotar al paciente, el líquido migra al nuevo flanco declive y el punto marcado que era mate se vuelve timpánico. Es el mismo principio que un vaso de agua con hielo: el hielo (el gas) siempre flota arriba y el agua (el líquido) ocupa la parte de abajo, sin importar cómo se incline el vaso — al girar al paciente, el "arriba" y el "abajo" cambian, y el contenido se redistribuye de inmediato por gravedad. La matidez cambiante requiere un volumen relativamente moderado de líquido libre (aprox. 1500 mL) para detectarse; la oleada ascítica solo es fiable con volúmenes grandes y, sin la mano bloqueadora del asistente, puede dar falsos positivos por transmisión a través de la grasa de la pared en pacientes obesos.`,
      criterios_dx: 'La ausencia de matidez cambiante hace poco probable una ascitis clínicamente detectable; su presencia junto con distensión abdominal difusa tiene mejor rendimiento diagnóstico que la oleada ascítica aislada.',
      dx_diferencial: 'Distensión sin matidez cambiante: obesidad, embarazo, meteorismo, o una masa quística gigante (ej. quiste de ovario), que clásicamente da matidez central fija en vez de matidez en ambos flancos.'
    },
    {
      nombre: 'Palpación superficial y profunda',
      color: '#3d5a73',
      definicion: 'Técnica manual en dos tiempos, con la mano relajada, para evaluar el tono de la pared, la sensibilidad y la presencia de masas.',
      clinica: 'Superficial: presión leve, deslizamiento suave por las 9 regiones, empezando lejos de cualquier zona referida como dolorosa; evalúa tono, sensibilidad superficial y defensa. Profunda: presión mayor, a veces con ambas manos superpuestas (bimanual); evalúa masas, visceromegalias y puntos dolorosos profundos.',
      fisiopatologia: 'Defensa voluntaria: contracción consciente de la pared por temor o ansiedad al examen, que cede si se distrae al paciente o se le pide respirar profundo/flexionar las rodillas. Defensa involuntaria (rigidez, "vientre en tabla"): contracción refleja del músculo por irritación peritoneal real, que NO cede con ninguna maniobra de relajación — es un reflejo visceroparietal, no un acto consciente.',
      criterios_dx: 'Distinguir defensa voluntaria de involuntaria es el paso obligado antes de interpretar cualquier hallazgo doloroso como abdomen agudo quirúrgico.',
      algoritmo: ['Empezar lejos del área referida como dolorosa', 'Palpación superficial en las 9 regiones', 'Palpación profunda, bimanual si es necesario', 'Distinguir defensa voluntaria de involuntaria']
    },
    {
      nombre: 'Palpación hepática y hepatomegalia',
      color: '#8c3a34',
      definicion: 'Técnica bimanual (dedos "en gancho" bajo el reborde costal derecho, o técnica de Chauffard con la mano izquierda reforzando por detrás) para delimitar el borde inferior del hígado durante la inspiración.',
      clinica: 'Se pide al paciente inspirar profundamente mientras se palpa el reborde costal derecho; el borde hepático normal desciende con la inspiración y es liso, firme, indoloro, apenas palpable 1-2 cm bajo el reborde en personas delgadas. Hepatomegalia: el borde desciende &gt;2-3 cm bajo el reborde costal Y el área de matidez percutida también está aumentada — este segundo dato distingue el crecimiento real de un simple desplazamiento hacia abajo.',
      fisiopatologia: `<p style="margin:0;">La consistencia y el borde orientan la etiología más que el tamaño solo:</p>
<ul style="margin:8px 0 0;padding-left:18px;">
  <li><strong>Borde blando, liso y doloroso</strong>: congestión pasiva por insuficiencia cardiaca derecha, hepatitis aguda.</li>
  <li><strong>Borde firme/duro, romo y nodular, indoloro</strong>: cirrosis, infiltración neoplásica.</li>
  <li><strong>Pulsatilidad sistólica</strong> transmitida al borde hepático, sincrónica con el pulso arterial (no con la respiración): insuficiencia tricuspídea severa, el reflujo sistólico se transmite en retrógrado por las venas suprahepáticas.</li>
</ul>`,
      criterios_dx: 'Un hígado pulsátil, sincrónico con el pulso arterial, en un paciente con ingurgitación yugular, sugiere insuficiencia tricuspídea severa.',
      dx_diferencial: 'Hepatomegalia real (área de matidez percutida aumentada) vs. desplazamiento del hígado hacia abajo sin crecimiento verdadero (hiperinsuflación pulmonar/EPOC), donde el área de matidez percutida es normal, solo está más baja.'
    },
    {
      nombre: 'Palpación esplénica y esplenomegalia',
      color: '#8c3a34',
      definicion: 'Técnica bimanual con el paciente en decúbito lateral derecho (técnica de Middleton/Schuster), rodillas flexionadas, mano izquierda del examinador levantando la parrilla costal izquierda por detrás mientras la derecha palpa el reborde costal izquierdo durante la inspiración.',
      clinica: 'El bazo normal NO es palpable, protegido por la parrilla costal. Se vuelve palpable, típicamente por debajo del reborde costal izquierdo en inspiración profunda, solo cuando ha crecido aproximadamente al doble de su tamaño normal.',
      fisiopatologia: 'Para ser palpable, el bazo crece hacia abajo y medialmente desde su eje mayor oblicuo normal (paralelo a la 10ª costilla). Un bazo palpable conserva la muesca esplénica característica en su borde medial y se mueve con la respiración — a diferencia de un riñón izquierdo palpable, que es liso, sin muesca, y con timpanismo de colon interpuesto por delante (a diferencia de la matidez esplénica continua).',
      criterios_dx: 'La muesca palpable y el movimiento con la respiración distinguen la esplenomegalia de otras masas del cuadrante superior izquierdo.',
      dx_diferencial: 'Masa en hipocondrio izquierdo: bazo (muesca, se mueve con la respiración, matidez continua) vs. riñón izquierdo (liso, sin muesca, timpanismo de colon interpuesto, signo del peloteo/ballottement renal positivo).'
    },
    {
      nombre: 'Signo de Murphy',
      color: '#8c3a34',
      definicion: 'Maniobra para colecistitis aguda: se colocan los dedos bajo el reborde costal derecho, en el punto cístico (intersección del reborde costal derecho con el borde lateral del músculo recto abdominal), y se pide al paciente inspirar profundamente (ver Imagen 3).',
      clinica: 'Positivo: interrupción brusca e involuntaria de la inspiración por dolor, cuando la vesícula inflamada desciende con el diafragma y choca contra los dedos del examinador.',
      fisiopatologia: `${figBlock('Imagen 3', 'Punto cístico (Murphy) y punto de McBurney', puntosDolorosSVG())}
Requiere que la vesícula inflamada realmente descienda hasta contactar los dedos — por eso puede ser falsamente negativo en obesidad severa (la vesícula no alcanza a descender lo suficiente) o en el anciano/diabético con respuesta dolorosa atenuada. Existe un equivalente ecográfico (Murphy ecográfico: dolor máximo al comprimir con el transductor directamente sobre la vesícula visualizada), más sensible en esos escenarios.`,
      criterios_dx: 'Murphy positivo con vesícula engrosada/litiásica en ecografía es altamente sugestivo de colecistitis aguda; su ausencia no la descarta, sobre todo con respuesta dolorosa atenuada.',
      dx_diferencial: 'Un "falso Murphy" (dolor al palpar sin verdadera interrupción inspiratoria) puede verse en neumonía del lóbulo inferior derecho o pleuritis basal derecha.'
    },
    {
      nombre: 'Signos de apendicitis: McBurney, Rovsing, psoas y obturador',
      color: '#8c3a34',
      definicion: 'Conjunto de maniobras que buscan irritación peritoneal originada en un apéndice inflamado; su posición anatómica variable (retrocecal, pélvica, subcecal) explica por qué ningún signo aislado es sensible al 100% (ver Tabla 2).',
      clinica: 'Punto de McBurney: dolor a la palpación en la unión del tercio externo con los dos tercios internos de la línea entre la espina iliaca anterosuperior y el ombligo — corresponde a la base fija del apéndice. Signo de Rovsing: dolor referido en fosa iliaca derecha al palpar/percutir la fosa iliaca izquierda. Signo del psoas: dolor al extender pasivamente la cadera derecha en decúbito lateral izquierdo, o al flexionarla contra resistencia. Signo del obturador: dolor al rotar internamente la cadera y rodilla derechas flexionadas a 90°.',
      fisiopatologia: `${figBlock('Tabla 2', 'Signos de apendicitis: técnica y mecanismo', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Signo</th>
        <th style="text-align:left;padding:5px 6px;">Técnica</th>
        <th style="text-align:left;padding:5px 6px;">Positivo</th>
        <th style="text-align:left;padding:5px 6px;">Mecanismo</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>McBurney</strong></td><td style="padding:5px 6px;">Palpar el tercio externo de la línea EIAS-ombligo derecha</td><td style="padding:5px 6px;">Dolor localizado</td><td style="padding:5px 6px;">Coincide con la base fija del apéndice</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Rovsing</strong></td><td style="padding:5px 6px;">Palpar/percutir la fosa iliaca izquierda</td><td style="padding:5px 6px;">Dolor referido en fosa iliaca derecha</td><td style="padding:5px 6px;">Desplazamiento de gas y tracción peritoneal a distancia</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Psoas</strong></td><td style="padding:5px 6px;">Extender la cadera derecha en decúbito lateral izquierdo, o flexionarla contra resistencia</td><td style="padding:5px 6px;">Dolor</td><td style="padding:5px 6px;">Apéndice retrocecal en contacto con el psoas</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Obturador</strong></td><td style="padding:5px 6px;">Rotar internamente cadera y rodilla derechas flexionadas a 90°</td><td style="padding:5px 6px;">Dolor</td><td style="padding:5px 6px;">Apéndice pélvico en contacto con el obturador interno</td></tr>
      </tbody>
    </table>
    </div>`)}
A diferencia del ciego, que es móvil, la base apendicular tiene posición anatómica relativamente constante, de ahí la utilidad del punto de McBurney. Rovsing se explica por el desplazamiento del gas/contenido intestinal y la tracción indirecta del peritoneo parietal inflamado al comprimir a distancia — como tirar de una esquina de una sábana bien estirada: el jalón se siente también en la esquina opuesta, porque toda la tela (aquí, el peritoneo) es una superficie continua. El psoas es positivo cuando un apéndice retrocecal contacta el músculo psoas ilíaco y su estiramiento irrita el peritoneo adyacente. El obturador es positivo cuando un apéndice pélvico contacta el músculo obturador interno, irritado por su rotación.
${videoBlock('Video 2', 'Signos de Rovsing, psoas y obturador', '6LrL4ysi_AE', 'OMMinutes (YouTube)')}`,
      criterios_dx: 'Ningún signo aislado tiene sensibilidad suficiente para descartar apendicitis por sí solo; su valor es acumulativo junto con la localización del dolor, la secuencia típica (dolor periumbilical migrando a fosa iliaca derecha) y los signos de irritación peritoneal directa.',
      dx_diferencial: 'Psoas y obturador positivos no son exclusivos de apendicitis: también aparecen en abscesos del psoas de otro origen o en procesos inflamatorios pélvicos (ej. anexitis) que irritan los mismos músculos.'
    },
    {
      nombre: 'Signos de irritación peritoneal: Blumberg y defensa involuntaria',
      color: '#8c3a34',
      definicion: 'Hallazgos que indican inflamación del peritoneo parietal más allá de un punto específico.',
      clinica: 'Signo de Blumberg (rebote): se palpa profundamente y de forma sostenida sobre el punto doloroso y luego se retira la mano bruscamente; positivo si el dolor es mayor al retirar la mano que al comprimir. Defensa muscular involuntaria ("vientre en tabla"): contractura refleja generalizada de la pared, que no cede con ninguna maniobra de relajación.',
      fisiopatologia: 'El dolor de rebote no se genera por el estiramiento del peritoneo al retirar la mano, sino por el movimiento súbito de la pared y las vísceras subyacentes, que sacude el peritoneo parietal inflamado — por eso maniobras equivalentes sin tocar directamente el punto doloroso (percusión suave, o pedir al paciente que tosa: "signo de la tos") pueden reproducir el mismo dolor con menos molestia y rendimiento diagnóstico similar — es la misma razón por la que un moretón duele más al soltarlo de golpe después de presionarlo que al mantenerlo comprimido: el dolor viene del movimiento brusco del tejido lesionado, no de la presión sostenida en sí. El vientre en tabla generalizado refleja peritonitis difusa, típicamente por perforación de víscera hueca.',
      criterios_dx: 'El signo de la tos y la percusión suave tienen sensibilidad similar al rebote clásico para irritación peritoneal, con menos dolor provocado — preferibles como primera maniobra de tamizaje.',
      dx_diferencial: 'Dolor a la descompresión localizado (irritación peritoneal focal, ej. apendicitis) vs. vientre en tabla generalizado (peritonitis difusa por perforación de víscera hueca — urgencia quirúrgica inmediata).'
    }
  ]
};

export const compCites = {
  'Secuencia y técnica de la exploración abdominal': { definicion: [1, 2], clinica: [1, 3] },
  'Regiones y cuadrantes abdominales': { definicion: [1, 2], clinica: [1, 2] },
  'Inspección abdominal': { definicion: [1, 5], fisiopatologia: [1, 8] },
  'Auscultación abdominal: ruidos hidroaéreos y soplos vasculares': { definicion: [1, 3], fisiopatologia: [1, 3] },
  'Percusión abdominal: timpanismo y matidez hepática/esplénica': { definicion: [1, 6], fisiopatologia: [6, 9], criterios_dx: [9] },
  'Ascitis: matidez cambiante y oleada ascítica': { definicion: [1, 8], fisiopatologia: [8], criterios_dx: [8] },
  'Palpación superficial y profunda': { definicion: [1, 2], fisiopatologia: [1, 4] },
  'Palpación hepática y hepatomegalia': { definicion: [1, 6], fisiopatologia: [6], criterios_dx: [6] },
  'Palpación esplénica y esplenomegalia': { definicion: [1, 9], fisiopatologia: [9], criterios_dx: [9] },
  'Signo de Murphy': { definicion: [1, 3], fisiopatologia: [1, 4], criterios_dx: [4] },
  'Signos de apendicitis: McBurney, Rovsing, psoas y obturador': { definicion: [1, 7], fisiopatologia: [1, 7], criterios_dx: [7] },
  'Signos de irritación peritoneal: Blumberg y defensa involuntaria': { definicion: [1, 4], fisiopatologia: [1, 4] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {};
export const escalaCalc = {};
export const diagCites = { clinica: [1, 3] };
export const clasificacionCite = [];
export const seguimientoCite = [];
export const compGroups = [
  { title: 'Metodología general', items: ['Secuencia y técnica de la exploración abdominal', 'Regiones y cuadrantes abdominales'] },
  { title: 'Inspección', items: ['Inspección abdominal'] },
  { title: 'Auscultación', items: ['Auscultación abdominal: ruidos hidroaéreos y soplos vasculares'] },
  { title: 'Percusión', items: ['Percusión abdominal: timpanismo y matidez hepática/esplénica', 'Ascitis: matidez cambiante y oleada ascítica'] },
  { title: 'Palpación', items: ['Palpación superficial y profunda', 'Palpación hepática y hepatomegalia', 'Palpación esplénica y esplenomegalia'] },
  { title: 'Signos específicos (abdomen agudo)', items: ['Signo de Murphy', 'Signos de apendicitis: McBurney, Rovsing, psoas y obturador', 'Signos de irritación peritoneal: Blumberg y defensa involuntaria'] }
];
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Técnica general' },
  { id: 'complicaciones', label: 'Maniobras y hallazgos' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
