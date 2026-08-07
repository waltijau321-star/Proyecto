// topics/exploracion-abdominal/content.js — Semiología 4: Exploración Abdominal.
// Cuarto tema de Semiología, mismo patrón que exploracion-cardiovascular/ y
// exploracion-respiratoria/ (ver esos archivos para la nota completa de convenciones). Aquí el
// orden clásico se INVIERTE respecto a los otros dos sistemas: es IAPP (Inspección, Auscultación,
// Percusión, Palpación), no IPPA — la percusión y sobre todo la palpación estimulan mecánicamente
// el intestino y pueden alterar artificialmente los ruidos hidroaéreos si se hacen antes de
// auscultar. Es el punto de confusión más frecuente para un residente que ya automatizó el orden
// IPPA con tórax y pulmón, así que se remarca explícitamente en la primera tarjeta.
//
// Las 5 figuras son TODAS código propio (SVG/HTML con var(--...) de tema) — nada de imágenes
// externas ni asistidas por IA, mismo criterio ya establecido: cada una representa un dato
// clínico exacto (topografía de regiones, ubicación de puntos dolorosos, técnica de matidez
// cambiante, tablas de signos), y ese contenido va siempre a mano (ver
// .claude/skills/figura-didactica/SKILL.md).

export const meta = {
  id: 'exploracion-abdominal',
  titulo: 'Exploración Abdominal',
  subtitulo: 'Semiología 4 · Medicina Interna',
  accent: '#7a4a23',
  accentDim: '#a67b4d'
};

export const definicionText = 'La exploración abdominal sigue un orden que invierte el de la exploración torácica: inspección, auscultación, percusión y palpación (IAPP), porque percutir o palpar antes de auscultar estimula mecánicamente el intestino y puede alterar de forma artificial la frecuencia y el carácter de los ruidos hidroaéreos que se busca evaluar. Integra información visual (contorno, cicatrices, red venosa), acústica (ruidos hidroaéreos, soplos vasculares), de percusión (timpanismo, matidez hepática y esplénica, ascitis) y táctil (tono de la pared, visceromegalias, puntos y signos dolorosos específicos), y sigue siendo la herramienta de mayor rendimiento y menor costo para orientar un abdomen agudo, una hepatopatía o una visceromegalia antes de cualquier estudio de imagen.';

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
  fisiopatologia: 'Mecanismo y clasificación',
  clinica: 'Técnica y hallazgos',
  criterios_dx: 'Significado clínico',
  algoritmo: 'Secuencia'
};

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

function regionesAbdominalesSVG() {
  return `<svg viewBox="0 0 260 300" role="img" aria-labelledby="reg-t reg-d" style="width:100%;max-width:260px;display:block;margin:0 auto;">
    <title id="reg-t">Las 9 regiones topográficas del abdomen</title>
    <desc id="reg-d">Contorno abdominal dividido por dos líneas verticales (medioclaviculares) y dos horizontales (subcostal y transtubercular) en 9 regiones: hipocondrio derecho, epigastrio, hipocondrio izquierdo, flanco derecho, región umbilical, flanco izquierdo, fosa iliaca derecha, hipogastrio y fosa iliaca izquierda.</desc>
    <path d="${abdomenOutline()}" transform="translate(4,0)" fill="none" stroke="var(--line)" stroke-width="1.5"/>
    <line x1="110" y1="12" x2="110" y2="288" stroke="var(--line)" stroke-width="1" stroke-dasharray="2,3"/>
    <line x1="42" y1="100" x2="222" y2="100" stroke="#7a4a23" stroke-width="1.25"/>
    <line x1="42" y1="180" x2="222" y2="180" stroke="#7a4a23" stroke-width="1.25"/>
    <line x1="88" y1="12" x2="88" y2="288" stroke="#7a4a23" stroke-width="1.25"/>
    <line x1="176" y1="12" x2="176" y2="288" stroke="#7a4a23" stroke-width="1.25"/>
    <text x="60" y="8" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink-faint)">DER.</text>
    <text x="205" y="8" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink-faint)">IZQ.</text>
    <text x="64" y="60" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Hipocondrio D.</text>
    <text x="64" y="72" text-anchor="middle" font-size="8" fill="var(--ink-faint)">hígado, vesícula</text>
    <text x="132" y="60" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Epigastrio</text>
    <text x="132" y="72" text-anchor="middle" font-size="8" fill="var(--ink-faint)">estómago, páncreas</text>
    <text x="199" y="60" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Hipocondrio I.</text>
    <text x="199" y="72" text-anchor="middle" font-size="8" fill="var(--ink-faint)">bazo</text>
    <text x="64" y="136" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Flanco D.</text>
    <text x="64" y="148" text-anchor="middle" font-size="8" fill="var(--ink-faint)">colon ascendente</text>
    <text x="132" y="136" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Región</text>
    <text x="132" y="148" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">umbilical</text>
    <text x="132" y="160" text-anchor="middle" font-size="8" fill="var(--ink-faint)">delgado, aorta</text>
    <text x="199" y="136" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Flanco I.</text>
    <text x="199" y="148" text-anchor="middle" font-size="8" fill="var(--ink-faint)">colon descendente</text>
    <text x="64" y="215" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Fosa iliaca D.</text>
    <text x="64" y="227" text-anchor="middle" font-size="8" fill="var(--ink-faint)">ciego, apéndice</text>
    <text x="132" y="215" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Hipogastrio</text>
    <text x="132" y="227" text-anchor="middle" font-size="8" fill="var(--ink-faint)">vejiga, útero</text>
    <text x="199" y="215" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Fosa iliaca I.</text>
    <text x="199" y="227" text-anchor="middle" font-size="8" fill="var(--ink-faint)">sigmoides</text>
  </svg>
  <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:6px 0 0;">Vista anterior, paciente de frente al explorador (el lado derecho del paciente queda a la izquierda del dibujo). Líneas verticales: medioclaviculares. Líneas horizontales: subcostal (arriba) y transtubercular/bispinosa (abajo).</p>`;
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

function ascitisTecnicaSVG() {
  return `<svg viewBox="0 0 300 150" role="img" aria-labelledby="asc-t asc-d" style="width:100%;max-width:320px;display:block;margin:0 auto;">
    <title id="asc-t">Matidez cambiante (shifting dullness)</title>
    <desc id="asc-d">Dos paneles esquemáticos vistos en corte transversal: en decúbito supino el gas intestinal flota en el centro (timpanismo) y el líquido libre se acumula en ambos flancos, que quedan mate; al girar al paciente hacia decúbito lateral, el líquido se desplaza por gravedad hacia el nuevo lado declive y el punto que antes era mate se vuelve timpánico.</desc>
    <ellipse cx="70" cy="75" rx="60" ry="55" fill="none" stroke="var(--line)" stroke-width="1.5"/>
    <path d="M18,75 A52,48 0 0,1 40,32 A52,48 0 0,0 40,118 Z" fill="#8c3a34" opacity="0.25"/>
    <path d="M122,75 A52,48 0 0,0 100,32 A52,48 0 0,1 100,118 Z" fill="#8c3a34" opacity="0.25"/>
    <ellipse cx="70" cy="75" rx="22" ry="40" fill="none" stroke="var(--ink-faint)" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="70" y="79" text-anchor="middle" font-size="9" fill="var(--ink)">gas</text>
    <text x="26" y="79" text-anchor="middle" font-size="8" fill="#8c3a34" font-weight="700">mate</text>
    <text x="114" y="79" text-anchor="middle" font-size="8" fill="#8c3a34" font-weight="700">mate</text>
    <circle cx="26" cy="90" r="3" fill="var(--ink)"/>
    <text x="70" y="140" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Decúbito supino</text>
    <path d="M150,75 L172,68 M172,68 L166,63 M172,68 L166,74" stroke="var(--ink-faint)" stroke-width="1.5" fill="none"/>
    <text x="161" y="90" text-anchor="middle" font-size="7.5" fill="var(--ink-faint)">gira</text>
    <ellipse cx="235" cy="75" rx="60" ry="55" fill="none" stroke="var(--line)" stroke-width="1.5"/>
    <path d="M183,75 A52,48 0 0,1 260,26 A52,48 0 0,0 220,120 Z" fill="#8c3a34" opacity="0.25"/>
    <ellipse cx="222" cy="70" rx="26" ry="42" fill="none" stroke="var(--ink-faint)" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="212" y="72" text-anchor="middle" font-size="9" fill="var(--ink)">gas</text>
    <circle cx="191" cy="90" r="3" fill="#3f6b52"/>
    <text x="191" y="106" text-anchor="middle" font-size="8" fill="#3f6b52" font-weight="700">✓ ahora timpánico</text>
    <text x="255" y="79" text-anchor="middle" font-size="8" fill="#8c3a34" font-weight="700">mate</text>
    <text x="235" y="140" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--ink)">Decúbito lateral</text>
  </svg>
  <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:6px 0 0;">Corte transversal esquemático. El punto marcado (•) que era mate en supino se vuelve timpánico al girar al paciente, porque el líquido migró por gravedad al nuevo flanco declive.</p>`;
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
      clinica: 'Paciente en decúbito supino, brazos a los lados (no detrás de la cabeza, eso tensa la pared), piernas ligeramente flexionadas para relajar la musculatura abdominal, abdomen descubierto de apéndice xifoides a sínfisis del pubis, manos e instrumentos tibios, buena iluminación tangencial para resaltar contornos y peristalsis visible.',
      fisiopatologia: 'A diferencia del tórax (IPPA), en el abdomen la percusión y sobre todo la palpación estimulan mecánicamente las asas intestinales y pueden alterar de forma artificial la frecuencia y el carácter de los ruidos hidroaéreos si se realizan antes de auscultar — por eso la auscultación se hace inmediatamente después de la inspección, antes de tocar la pared.',
      criterios_dx: 'Percutir o palpar antes de auscultar invalida la valoración de los ruidos hidroaéreos: puede simular hiperperistaltismo donde no lo hay, o silenciar transitoriamente un abdomen que en realidad estaba hiperactivo.',
      algoritmo: ['Inspección', 'Auscultación (antes de tocar la pared)', 'Percusión', 'Palpación superficial', 'Palpación profunda']
    },
    {
      nombre: 'Regiones y cuadrantes abdominales',
      color: '#3d5a73',
      definicion: 'Dos sistemas de referencia topográfica de uso simultáneo: 4 cuadrantes (rápido, útil para localizar dolor a la cabecera) y 9 regiones (dos líneas medioclaviculares verticales y dos horizontales —subcostal y transtubercular— más precisas para correlacionar con una víscera concreta).',
      clinica: 'Hipocondrio derecho: hígado, vesícula. Epigastrio: estómago, páncreas, duodeno. Hipocondrio izquierdo: bazo. Flancos: colon ascendente/descendente, riñones. Región umbilical: intestino delgado, aorta. Fosas iliacas: ciego/apéndice (derecha), sigmoides (izquierda). Hipogastrio: vejiga, útero (ver figura).',
      criterios_dx: 'Localizar el dolor por región/cuadrante orienta el diagnóstico diferencial inicial antes de cualquier maniobra específica — un dolor en fosa iliaca derecha y uno en hipocondrio derecho comparten poco diagnóstico diferencial pese a estar en el mismo hemiabdomen.',
      figura: 'regiones-abdominales'
    },
    {
      nombre: 'Inspección abdominal',
      color: '#3d5a73',
      definicion: 'Observación sistemática, de pie a la derecha del paciente y también tangencialmente (a nivel de los ojos del examinador con el abdomen), del contorno, la piel, el ombligo y los movimientos de la pared.',
      clinica: 'Normal: contorno plano o levemente convexo y simétrico, piel sin lesiones, ombligo centrado e invertido, sin masas ni peristalsis visibles en la mayoría de los adultos. Patológico: distensión (generalizada o localizada), asimetría, cicatrices, hernias, red venosa colateral, estrías, equimosis periumbilical o en flancos, peristalsis visible, pulsación epigástrica prominente.',
      fisiopatologia: 'Red venosa colateral centrífuga desde el ombligo ("cabeza de medusa"): hipertensión portal con recanalización de la vena umbilical. Equimosis periumbilical (signo de Cullen) o en los flancos (signo de Grey Turner): hemorragia retroperitoneal o intraperitoneal disecando el tejido subcutáneo, clásicamente descritas en la pancreatitis aguda necrohemorrágica, pero inespecíficas (también en embarazo ectópico roto, traumatismo). La distensión generalizada se recuerda con la mnemotecnia de las "6 F": fat (grasa), fluid (líquido/ascitis), flatus (gas), feces (heces), fetus (embarazo), fatal tumor (masa/neoplasia).',
      criterios_dx: 'Cullen y Grey Turner son signos tardíos (24-72 h tras el inicio del sangrado) y poco sensibles: su ausencia no descarta una pancreatitis grave ni una hemorragia retroperitoneal.',
      dx_diferencial: 'Distensión generalizada (ascitis, obstrucción intestinal, íleo, embarazo, obesidad) vs. distensión localizada (masa, visceromegalia, hernia, globo vesical).'
    },
    {
      nombre: 'Auscultación abdominal: ruidos hidroaéreos y soplos vasculares',
      color: '#3d5a73',
      definicion: 'Única maniobra que se realiza ANTES de percutir o palpar, con el diafragma del estetoscopio; los ruidos se transmiten por todo el abdomen, por lo que auscultar en un solo punto (habitualmente periumbilical) suele bastar.',
      clinica: 'Normal: 5-34 ruidos/min, con borborigmos ocasionales. Se requieren hasta 2 minutos continuos de auscultación antes de declarar "silencio abdominal" (ausencia de ruidos) — un tiempo insuficiente es la causa más frecuente de sobrediagnosticar íleo (ver figura).',
      fisiopatologia: 'Ruidos aumentados, de tono agudo, en "ráfagas" coincidiendo con el cólico ("ruidos de lucha"): obstrucción mecánica temprana, el intestino proximal a la obstrucción hiperperistalta contra la resistencia. Ruidos disminuidos o ausentes: íleo paralítico/adinámico (posquirúrgico, peritonitis, hipopotasemia, opioides) donde el músculo liso intestinal pierde su actividad contráctil coordinada, o fase tardía de una obstrucción mecánica ya agotada. Soplo sistólico o sistodiastólico en epigastrio/flancos: estenosis de arteria renal (el componente diastólico sugiere mayor severidad). Soplo sobre el hígado: hepatocarcinoma o hepatitis alcohólica severa. Soplo venoso continuo, "en zumbido", periumbilical: síndrome de Cruveilhier-Baumgarten (hipertensión portal con recanalización de la vena umbilical, coincide con la cabeza de medusa). Roce/fricción hepático o esplénico: perihepatitis o periesplenitis (infarto, absceso).',
      criterios_dx: 'Un soplo abdominal en un paciente con hipertensión arterial resistente al tratamiento obliga a descartar estenosis de arteria renal.',
      dx_diferencial: 'Silencio abdominal verdadero (íleo, peritonitis) vs. auscultación insuficiente (&lt;2 minutos, la causa más frecuente de un falso "abdomen silente").',
      figura: 'ruidos-hidroaereos-tabla'
    },
    {
      nombre: 'Percusión abdominal: timpanismo y matidez hepática/esplénica',
      color: '#3d5a73',
      definicion: 'Percusión indirecta (dedo plexímetro) que mapea el contenido abdominal por diferencias de densidad acústica entre gas, líquido y sólido.',
      clinica: 'Normal: timpanismo predominante (gas intestinal) con matidez hepática en hipocondrio/flanco derecho y matidez esplénica limitada al espacio de Traube. Área de matidez hepática: se percute en línea medioclavicular derecha de arriba abajo (desde resonancia pulmonar hasta matidez = borde superior, ~5º espacio intercostal) y de abajo arriba (desde timpanismo intestinal hasta matidez = borde inferior, en el reborde costal); la distancia entre ambos bordes es normal entre 6 y 12 cm.',
      fisiopatologia: 'Área de matidez hepática aumentada: hepatomegalia real, pero también puede aumentar por un derrame pleural derecho que eleva el borde superior sin que el hígado haya crecido. Área disminuida o ausente (timpanismo sobre el hígado): neumoperitoneo por víscera hueca perforada (signo de Jobert) o interposición de colon entre hígado y pared (síndrome de Chilaiditi). Espacio de Traube (6º espacio intercostal izquierdo, entre la línea axilar anterior y el reborde costal): normalmente timpánico por la cámara de aire gástrica; se vuelve mate con esplenomegalia, pero también con derrame pleural izquierdo, masa gástrica o alimento reciente — baja especificidad, por lo que el signo de Castell (percusión dinámica del último espacio intercostal en línea axilar anterior izquierda, comparando espiración e inspiración profunda) es más útil que la matidez estática de Traube.',
      criterios_dx: 'El signo de Castell positivo (el último espacio intercostal de la línea axilar anterior izquierda, timpánico en espiración, se vuelve mate en inspiración profunda) tiene mejor rendimiento que la percusión estática del espacio de Traube para detectar esplenomegalia.',
      algoritmo: ['Percutir el borde superior de la matidez hepática en línea medioclavicular derecha, de arriba hacia abajo, desde resonancia pulmonar', 'Percutir el borde inferior, de abajo hacia arriba, desde timpanismo intestinal', 'Medir la distancia entre ambos bordes (normal 6-12 cm)', 'Percutir el espacio de Traube y realizar el signo de Castell para el bazo']
    },
    {
      nombre: 'Ascitis: matidez cambiante y oleada ascítica',
      color: '#8c3a34',
      definicion: 'Maniobras de percusión y palpación diseñadas para detectar líquido libre en la cavidad peritoneal (ver figura).',
      clinica: 'Matidez cambiante (shifting dullness): con el paciente en decúbito supino, percutir desde el ombligo hacia el flanco marcando el punto donde el timpanismo cambia a matidez; girar al paciente al decúbito lateral contrario, esperar unos segundos y repercutir el mismo punto — si lo que era mate se vuelve timpánico, la prueba es positiva. Oleada ascítica (fluid wave): un asistente aplica el borde cubital de su mano firmemente sobre la línea media del abdomen (para bloquear la transmisión de la onda a través de la grasa de la pared) mientras el examinador da un golpe seco en un flanco y palpa la transmisión de la onda en el flanco contrario.',
      fisiopatologia: 'En decúbito supino el gas intestinal flota en la región central-anterior (timpanismo periumbilical) mientras el líquido libre se acumula por gravedad en ambos flancos (matidez); al rotar al paciente, el líquido migra al nuevo flanco declive y el punto marcado que era mate se vuelve timpánico. La matidez cambiante requiere un volumen relativamente moderado de líquido libre (aprox. 1500 mL) para detectarse; la oleada ascítica solo es fiable con volúmenes grandes y, sin la mano bloqueadora del asistente, puede dar falsos positivos por transmisión a través de la grasa de la pared en pacientes obesos.',
      criterios_dx: 'La ausencia de matidez cambiante hace poco probable una ascitis clínicamente detectable; su presencia junto con distensión abdominal difusa tiene mejor rendimiento diagnóstico que la oleada ascítica aislada.',
      dx_diferencial: 'Distensión sin matidez cambiante: obesidad, embarazo, meteorismo, o una masa quística gigante (ej. quiste de ovario), que clásicamente da matidez central fija en vez de matidez en ambos flancos.',
      figura: 'ascitis-tecnicas'
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
      fisiopatologia: 'La consistencia y el borde orientan la etiología más que el tamaño solo: borde blando, liso y doloroso (congestión pasiva por insuficiencia cardiaca derecha, hepatitis aguda); borde firme/duro, romo y nodular, indoloro (cirrosis, infiltración neoplásica); pulsatilidad sistólica transmitida al borde hepático, sincrónica con el pulso arterial (no con la respiración): insuficiencia tricuspídea severa, el reflujo sistólico se transmite en retrógrado por las venas suprahepáticas.',
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
      definicion: 'Maniobra para colecistitis aguda: se colocan los dedos bajo el reborde costal derecho, en el punto cístico (intersección del reborde costal derecho con el borde lateral del músculo recto abdominal), y se pide al paciente inspirar profundamente (ver figura).',
      clinica: 'Positivo: interrupción brusca e involuntaria de la inspiración por dolor, cuando la vesícula inflamada desciende con el diafragma y choca contra los dedos del examinador.',
      fisiopatologia: 'Requiere que la vesícula inflamada realmente descienda hasta contactar los dedos — por eso puede ser falsamente negativo en obesidad severa (la vesícula no alcanza a descender lo suficiente) o en el anciano/diabético con respuesta dolorosa atenuada. Existe un equivalente ecográfico (Murphy ecográfico: dolor máximo al comprimir con el transductor directamente sobre la vesícula visualizada), más sensible en esos escenarios.',
      criterios_dx: 'Murphy positivo con vesícula engrosada/litiásica en ecografía es altamente sugestivo de colecistitis aguda; su ausencia no la descarta, sobre todo con respuesta dolorosa atenuada.',
      dx_diferencial: 'Un "falso Murphy" (dolor al palpar sin verdadera interrupción inspiratoria) puede verse en neumonía del lóbulo inferior derecho o pleuritis basal derecha.',
      figura: 'puntos-dolorosos-abdomen'
    },
    {
      nombre: 'Signos de apendicitis: McBurney, Rovsing, psoas y obturador',
      color: '#8c3a34',
      definicion: 'Conjunto de maniobras que buscan irritación peritoneal originada en un apéndice inflamado; su posición anatómica variable (retrocecal, pélvica, subcecal) explica por qué ningún signo aislado es sensible al 100% (ver figura).',
      clinica: 'Punto de McBurney: dolor a la palpación en la unión del tercio externo con los dos tercios internos de la línea entre la espina iliaca anterosuperior y el ombligo — corresponde a la base fija del apéndice. Signo de Rovsing: dolor referido en fosa iliaca derecha al palpar/percutir la fosa iliaca izquierda. Signo del psoas: dolor al extender pasivamente la cadera derecha en decúbito lateral izquierdo, o al flexionarla contra resistencia. Signo del obturador: dolor al rotar internamente la cadera y rodilla derechas flexionadas a 90°.',
      fisiopatologia: 'A diferencia del ciego, que es móvil, la base apendicular tiene posición anatómica relativamente constante, de ahí la utilidad del punto de McBurney. Rovsing se explica por el desplazamiento del gas/contenido intestinal y la tracción indirecta del peritoneo parietal inflamado al comprimir a distancia. El psoas es positivo cuando un apéndice retrocecal contacta el músculo psoas ilíaco y su estiramiento irrita el peritoneo adyacente. El obturador es positivo cuando un apéndice pélvico contacta el músculo obturador interno, irritado por su rotación.',
      criterios_dx: 'Ningún signo aislado tiene sensibilidad suficiente para descartar apendicitis por sí solo; su valor es acumulativo junto con la localización del dolor, la secuencia típica (dolor periumbilical migrando a fosa iliaca derecha) y los signos de irritación peritoneal directa.',
      dx_diferencial: 'Psoas y obturador positivos no son exclusivos de apendicitis: también aparecen en abscesos del psoas de otro origen o en procesos inflamatorios pélvicos (ej. anexitis) que irritan los mismos músculos.',
      figura: 'signos-apendiculares-tabla'
    },
    {
      nombre: 'Signos de irritación peritoneal: Blumberg y defensa involuntaria',
      color: '#8c3a34',
      definicion: 'Hallazgos que indican inflamación del peritoneo parietal más allá de un punto específico.',
      clinica: 'Signo de Blumberg (rebote): se palpa profundamente y de forma sostenida sobre el punto doloroso y luego se retira la mano bruscamente; positivo si el dolor es mayor al retirar la mano que al comprimir. Defensa muscular involuntaria ("vientre en tabla"): contractura refleja generalizada de la pared, que no cede con ninguna maniobra de relajación.',
      fisiopatologia: 'El dolor de rebote no se genera por el estiramiento del peritoneo al retirar la mano, sino por el movimiento súbito de la pared y las vísceras subyacentes, que sacude el peritoneo parietal inflamado — por eso maniobras equivalentes sin tocar directamente el punto doloroso (percusión suave, o pedir al paciente que tosa: "signo de la tos") pueden reproducir el mismo dolor con menos molestia y rendimiento diagnóstico similar. El vientre en tabla generalizado refleja peritonitis difusa, típicamente por perforación de víscera hueca.',
      criterios_dx: 'El signo de la tos y la percusión suave tienen sensibilidad similar al rebote clásico para irritación peritoneal, con menos dolor provocado — preferibles como primera maniobra de tamizaje.',
      dx_diferencial: 'Dolor a la descompresión localizado (irritación peritoneal focal, ej. apendicitis) vs. vientre en tabla generalizado (peritonitis difusa por perforación de víscera hueca — urgencia quirúrgica inmediata).'
    }
  ]
};

export const figuras = {
  'regiones-abdominales': {
    titulo: 'Las 9 regiones topográficas del abdomen',
    html: regionesAbdominalesSVG(),
    fuente: "Bates' Guide to Physical Examination and History Taking; Argente-Álvarez, Semiología Médica"
  },
  'ruidos-hidroaereos-tabla': {
    titulo: 'Ruidos hidroaéreos y soplos vasculares: hallazgo y significado',
    html: `<div style="overflow-x:auto;">
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
    </div>`,
    fuente: 'Bates’ Guide to Physical Examination; McGee, Evidence-Based Physical Diagnosis'
  },
  'ascitis-tecnicas': {
    titulo: 'Matidez cambiante (shifting dullness)',
    html: ascitisTecnicaSVG(),
    fuente: 'Cattau et al. JAMA 1982; Bates’ Guide to Physical Examination'
  },
  'puntos-dolorosos-abdomen': {
    titulo: 'Punto cístico (Murphy) y punto de McBurney',
    html: puntosDolorosSVG(),
    fuente: "Bates' Guide to Physical Examination; DeGowin's Diagnostic Examination"
  },
  'signos-apendiculares-tabla': {
    titulo: 'Signos de apendicitis: técnica y mecanismo',
    html: `<div style="overflow-x:auto;">
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
    </div>`,
    fuente: 'Wagner et al. JAMA 1996; Bates’ Guide to Physical Examination'
  }
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
