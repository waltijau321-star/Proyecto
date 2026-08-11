// topics/exploracion-osteoarticular/content.js — Semiología 7: Exploración Osteoarticular y de
// Extremidades. Séptimo tema de Semiología, mismo patrón que los anteriores (ver
// exploracion-cardiovascular/exploracion-piel-faneras para la nota completa de convenciones). El
// cluster del kardex agrupa 3 sub-ítems que en la práctica clínica son 3 sistemas de examen
// distintos sobre la misma región anatómica (articular, venoso, arterial) — se organiza en 4
// grupos en vez de forzarlos en 3, porque el sistema venoso y el arterial tienen técnica y
// hallazgos completamente independientes aunque compartan la extremidad.
//
// Las 5 figuras son TODAS código propio (SVG/HTML con var(--...) de tema) — nada de imágenes
// externas ni asistidas por IA, mismo criterio ya establecido: cada una representa un dato
// clínico exacto (técnica de derrame, patrones articulares, maniobras específicas, las 6 P de
// isquemia, comparación de úlceras), y ese contenido va siempre a mano (ver
// .claude/skills/figura-didactica/SKILL.md).

export const meta = {
  id: 'exploracion-osteoarticular',
  titulo: 'Exploración Osteoarticular y de Extremidades',
  subtitulo: 'Semiología 7 · Medicina Interna',
  accent: '#2e5f6b',
  accentDim: '#5c8e99'
};

export const definicionText = 'La exploración de las extremidades integra 3 sistemas de examen distintos sobre la misma región anatómica: el osteoarticular (inspección y palpación de articulaciones, rango de movimiento, maniobras específicas de estabilidad), el venoso (edema, signos de trombosis venosa profunda, insuficiencia venosa crónica) y el arterial (pulsos, índice tobillo-brazo, signos de isquemia). Cada uno responde preguntas clínicas distintas —¿es la articulación o la estructura periarticular? ¿es el edema de origen sistémico o local? ¿hay compromiso arterial agudo o crónico?— y ninguno sustituye a los otros, aunque coexistan en el mismo miembro explorado.';

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
  'Wells PS, Anderson DR, Rodger M, et al. Value of assessment of pretest probability of deep-vein thrombosis in clinical management. Lancet. 1997;350(9094):1795-1798.',
  'McGee S, Boyko EJ. Physical examination and chronic lower-extremity ischemia: a critical review. Arch Intern Med. 1998;158(12):1357-1364.',
  'Kahn SR. The clinical diagnosis of deep venous thrombosis: integrating incidence, risk factors, and symptoms and signs. Arch Intern Med. 1998;158(21):2315-2323.',
  'Eberhardt RT, Raffetto JD. Chronic venous insufficiency. Circulation. 2014;130(4):333-346.'
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

function derrameRotulianoSVG() {
  return `<svg viewBox="0 0 300 150" role="img" aria-labelledby="der-t der-d" style="width:100%;max-width:320px;display:block;margin:0 auto;">
    <title id="der-t">Choque rotuliano y signo de la oleada</title>
    <desc id="der-d">Dos rodillas esquemáticas vistas de frente: a la izquierda el choque rotuliano, con una mano comprimiendo el receso suprarrotuliano y la otra presionando la rótula hacia el fémur; a la derecha el signo de la oleada, mostrando el líquido "ordeñado" del lado medial al lateral y de vuelta.</desc>
    <ellipse cx="70" cy="75" rx="42" ry="60" fill="none" stroke="var(--line)" stroke-width="1.5"/>
    <circle cx="70" cy="70" r="16" fill="none" stroke="#2e5f6b" stroke-width="2"/>
    <path d="M50,35 Q45,30 40,32" stroke="var(--ink)" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M55,105 L65,118" stroke="var(--ink)" stroke-width="2" fill="none" stroke-linecap="round"/>
    <text x="70" y="140" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Choque rotuliano</text>
    <ellipse cx="225" cy="75" rx="42" ry="60" fill="none" stroke="var(--line)" stroke-width="1.5"/>
    <path d="M195,70 Q210,60 225,70" stroke="#8c3a34" stroke-width="2.5" fill="none" stroke-linecap="round" marker-end="url(#arrow)"/>
    <circle cx="225" cy="70" r="14" fill="none" stroke="#2e5f6b" stroke-width="2"/>
    <text x="225" y="140" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Signo de la oleada</text>
    <defs><marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#8c3a34"/></marker></defs>
  </svg>
  <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:6px 0 0;">Choque rotuliano: detecta derrames moderados-grandes (la rótula "flota" y choca contra el fémur). Oleada: detecta derrames pequeños que el choque rotuliano puede pasar por alto.</p>`;
}

function seisPIsquemiaSVG() {
  function p(letra, palabra, desc) {
    return `<div style="text-align:center;border:1px solid var(--line);border-radius:8px;padding:8px 4px;">
      <div style="font-size:20px;font-weight:800;color:#8c3a34;">${letra}</div>
      <div style="font-size:10.5px;font-weight:700;color:var(--ink);margin-top:2px;">${palabra}</div>
      <div style="font-size:9.5px;color:var(--ink-faint);margin-top:2px;">${desc}</div>
    </div>`;
  }
  return `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
    ${p('P', 'Pain', 'dolor súbito')}
    ${p('P', 'Pallor', 'palidez')}
    ${p('P', 'Pulselessness', 'ausencia de pulso')}
    ${p('P', 'Paresthesia', 'parestesias — temprano')}
    ${p('P', 'Paralysis', 'parálisis — tardío, irreversible')}
    ${p('P', 'Poiquilotermia', 'frialdad')}
  </div>`;
}

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Exploración de extremidades normal',
      tituloB: 'Hallazgos que obligan a profundizar el estudio',
      compensada: 'Articulaciones sin tumefacción, calor ni eritema, con rango de movimiento activo y pasivo completo e indoloro; sin edema; pulsos periféricos simétricos y de amplitud normal en las 4 extremidades; sin varices, cambios de estasis ni úlceras.',
      descompensada: 'Cualquier articulación tumefacta/caliente/dolorosa (sobre todo monoarticular aguda: descartar séptica/cristales), derrame articular, edema unilateral de inicio agudo, pulsos asimétricos o ausentes, signos de isquemia aguda (las 6 P), o cualquier úlcera de extremidad — cada uno de estos hallazgos, aislado, ya reorienta el diagnóstico diferencial y puede requerir estudio o intervención urgente.'
    }
  },
  complicaciones: [
    {
      nombre: 'Secuencia y técnica de la exploración osteoarticular',
      color: '#3d5a73',
      definicion: 'Examen sistemático de cada articulación: inspección (contorno, tumefacción, deformidad, eritema), palpación (calor, dolor, derrame), y rango de movimiento activo (el paciente mueve la articulación) y pasivo (el examinador la mueve).',
      clinica: 'Se documenta el número de articulaciones afectadas (monoarticular: 1; oligoarticular: 2-4; poliarticular: ≥5), su distribución (simétrica/asimétrica, axial/periférica) y si el compromiso es articular verdadero o periarticular.',
      criterios_dx: 'Una monoartritis AGUDA es una urgencia diagnóstica: siempre descartar primero artritis séptica y artropatía por cristales (gota, pseudogota) antes que cualquier otra causa, por el riesgo de destrucción articular rápida si es séptica.',
      algoritmo: ['Inspección: contorno, tumefacción, deformidad, eritema', 'Palpación: calor, dolor a la presión, derrame', 'Rango de movimiento activo', 'Rango de movimiento pasivo', 'Maniobras específicas si hay sospecha dirigida']
    },
    {
      nombre: 'Inspección y palpación articular: articular vs. periarticular',
      color: '#3d5a73',
      definicion: 'Distinción entre inflamación de la articulación misma (sinovitis verdadera) e inflamación de las estructuras vecinas (bursas, tendones, ligamentos).',
      clinica: 'Signos cardinales de inflamación articular: tumefacción que borra los contornos normales de la articulación (por derrame + hipertrofia sinovial), calor, eritema, dolor e impotencia funcional.',
      fisiopatologia: 'Sinovitis verdadera (articular): dolor con el rango de movimiento activo Y pasivo, en TODAS las direcciones. Periarticular (bursitis, tendinitis): dolor solo con el movimiento ACTIVO, o con una dirección/maniobra específica que estira o comprime la estructura afectada — ej. bursitis subacromial: dolor con la abducción activa entre 60-120° ("arco doloroso"), con el rango pasivo completo relativamente indoloro.',
      criterios_dx: 'Si el dolor aparece igual con el movimiento activo y el pasivo, en todas las direcciones, el origen es articular; si el dolor es direccional o solo con movimiento activo, sospechar una estructura periarticular específica.'
    },
    {
      nombre: 'Derrame articular: choque rotuliano y signo de la oleada',
      color: '#8c3a34',
      definicion: 'Maniobras para detectar líquido libre dentro de la articulación de la rodilla (ver Imagen 1).',
      clinica: 'Choque rotuliano (ballottement patelar): se comprime el receso suprarrotuliano con una mano para desplazar el líquido hacia el espacio retropatelar, y con la otra se presiona bruscamente la rótula contra el fémur. Signo de la oleada (bulge sign): se "ordeña" el líquido desde el lado medial hacia el lateral de la rodilla y luego se presiona el lado lateral, buscando que reaparezca una onda en el lado medial.',
      fisiopatologia: `${figBlock('Imagen 1', 'Choque rotuliano y signo de la oleada', derrameRotulianoSVG())}
El choque rotuliano requiere suficiente líquido para que la rótula "flote" y pueda chocar contra el fémur al presionarla — detecta derrames MODERADOS a GRANDES. Con poco líquido, la rótula no llega a flotar lo suficiente para el ballottement clásico, por lo que el signo de la oleada (más sensible a pequeños volúmenes, al movilizar visualmente el líquido de un lado a otro) detecta derrames PEQUEÑOS que el choque rotuliano puede pasar por alto. Es como la diferencia entre un cubo de hielo grande flotando en un vaso lleno de agua (se nota fácilmente al empujarlo) y una esquirla diminuta de hielo en apenas un dedo de agua (no flota lo suficiente para "chocar" contra nada, pero sigue siendo visible si se remueve el agua de un lado a otro).`,
      criterios_dx: 'Elegir la maniobra según el volumen sospechado: signo de la oleada para derrames sutiles, choque rotuliano para derrames evidentes.'
    },
    {
      nombre: 'Patrones de afectación articular',
      color: '#3d5a73',
      definicion: 'La forma en que se distribuye el compromiso articular es tan diagnóstica como los hallazgos de cada articulación individual (ver Tabla 1).',
      clinica: 'Monoarticular (1 articulación), oligoarticular (2-4), poliarticular (≥5); simétrico vs. asimétrico; axial (columna, sacroilíacas) vs. periférico; aditivo (se suman articulaciones sin resolver las previas) vs. migratorio (una articulación mejora mientras otra se afecta).',
      fisiopatologia: `${figBlock('Tabla 1', 'Patrones de afectación articular', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Patrón</th>
        <th style="text-align:left;padding:5px 6px;">Ejemplos</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Monoarticular agudo</strong></td><td style="padding:5px 6px;">Artritis séptica, gota, pseudogota (descartar primero)</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Poliarticular simétrico</strong></td><td style="padding:5px 6px;">Artritis reumatoide, lupus eritematoso sistémico</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Poliarticular asimétrico</strong></td><td style="padding:5px 6px;">Artritis psoriásica, gota poliarticular crónica</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Axial</strong></td><td style="padding:5px 6px;">Espondiloartropatías (espondilitis anquilosante)</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Migratorio</strong></td><td style="padding:5px 6px;">Fiebre reumática, artritis gonocócica diseminada</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Aditivo</strong></td><td style="padding:5px 6px;">Artritis reumatoide (no resuelve las previas)</td></tr>
      </tbody>
    </table>
    </div>`)}
Poliarticular simétrico: artritis reumatoide, lupus eritematoso sistémico. Poliarticular asimétrico: artritis psoriásica, gota poliarticular crónica. Axial: espondiloartropatías (espondilitis anquilosante). Migratorio: fiebre reumática, artritis gonocócica diseminada, algunas artritis virales — cada articulación se resuelve antes de que la siguiente se inflame. Aditivo: típico de la artritis reumatoide, donde las articulaciones se van sumando sin resolución de las previas.`,
      criterios_dx: 'El patrón migratorio (a diferencia del aditivo) es una pista diagnóstica específica que orienta a fiebre reumática o artritis gonocócica antes de cualquier estudio serológico.'
    },
    {
      nombre: 'Maniobras articulares específicas frecuentes',
      color: '#8c3a34',
      definicion: 'Pruebas dirigidas para estructuras concretas cuando la sospecha clínica es focal (ver Tabla 2).',
      clinica: 'Lachman: rodilla en 20-30° de flexión, se tracciona la tibia hacia adelante sobre el fémur fijo. McMurray: flexión máxima de rodilla con rotación tibial y extensión progresiva. Tinel: percusión sobre el nervio mediano en la muñeca. Phalen: flexión palmar sostenida de ambas muñecas. Finkelstein: desviación cubital de la muñeca con el pulgar flexionado dentro del puño.',
      fisiopatologia: `${figBlock('Tabla 2', 'Maniobras articulares específicas', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Maniobra</th>
        <th style="text-align:left;padding:5px 6px;">Técnica</th>
        <th style="text-align:left;padding:5px 6px;">Estructura evaluada</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Lachman</strong></td><td style="padding:5px 6px;">Rodilla a 20-30°, traccionar la tibia hacia adelante</td><td style="padding:5px 6px;">Ligamento cruzado anterior</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>McMurray</strong></td><td style="padding:5px 6px;">Flexión máxima + rotación tibial + extensión progresiva</td><td style="padding:5px 6px;">Menisco (medial/lateral según rotación)</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Tinel</strong></td><td style="padding:5px 6px;">Percusión sobre el nervio mediano en la muñeca</td><td style="padding:5px 6px;">Nervio mediano (túnel del carpo)</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Phalen</strong></td><td style="padding:5px 6px;">Flexión palmar sostenida de ambas muñecas</td><td style="padding:5px 6px;">Nervio mediano (túnel del carpo)</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Finkelstein</strong></td><td style="padding:5px 6px;">Desviación cubital con el pulgar dentro del puño</td><td style="padding:5px 6px;">Tendones del 1er compartimento extensor (De Quervain)</td></tr>
      </tbody>
    </table>
    </div>`)}
Lachman evalúa la integridad del ligamento cruzado anterior (LCA) y es más sensible que el cajón anterior clásico (a 90° de flexión), porque a 20-30° los isquiotibiales interfieren menos con el desplazamiento tibial. McMurray (un "clic" o resalte doloroso con la maniobra) sugiere lesión meniscal: rotación externa localiza el menisco medial, rotación interna el lateral. Tinel y Phalen reproducen parestesias en el territorio del nervio mediano por compresión dentro del túnel del carpo (síndrome del túnel carpiano). Finkelstein reproduce dolor en la tabaquera anatómica/estiloides radial por tenosinovitis de los tendones abductor largo y extensor corto del pulgar (tenosinovitis de De Quervain).`,
      criterios_dx: 'Cada maniobra localiza una estructura anatómica específica: Lachman → LCA, McMurray → menisco, Tinel/Phalen → nervio mediano, Finkelstein → tendones del primer compartimento extensor de la muñeca.'
    },
    {
      nombre: 'Edema de miembros inferiores: mecanismo y clasificación',
      color: '#3d5a73',
      definicion: 'Acumulación anormal de líquido en el espacio intersticial, clasificada por la presencia de fóvea y por la lateralidad.',
      clinica: 'Con fóvea (godet positivo): la presión sostenida deja una depresión que persiste varios segundos. Sin fóvea: la piel no se deprime, o se recupera de inmediato.',
      fisiopatologia: 'El edema CON fóvea refleja líquido intersticial libre, que se desplaza fácilmente bajo presión — aumento de la presión hidrostática (insuficiencia cardiaca, insuficiencia venosa, sobrecarga de volumen) o disminución de la presión oncótica (hipoalbuminemia). El edema SIN fóvea refleja un intersticio con proteínas de alto peso molecular que fijan el líquido — linfedema (acumulación de proteínas que no pueden drenarse sin un sistema linfático funcional, con fibrosis progresiva) o mixedema (depósito de glucosaminoglicanos hidrofílicos en el hipotiroidismo severo). Es la diferencia entre presionar una esponja empapada en agua (el líquido se desplaza libremente y deja una marca que tarda en rellenarse: con fóvea) y presionar un gelatina firme (el "líquido" está atrapado dentro de una red que no lo deja escurrir, así que la superficie recupera su forma casi de inmediato: sin fóvea).',
      criterios_dx: 'Edema UNILATERAL sugiere causa local (trombosis venosa profunda, insuficiencia venosa unilateral, obstrucción linfática/venosa focal, celulitis); edema BILATERAL sugiere causa sistémica (insuficiencia cardiaca, hepatopatía, hipoalbuminemia, insuficiencia venosa bilateral).',
      dx_diferencial: 'El signo de Stemmer (imposibilidad de pellizcar un pliegue de piel en la base del segundo dedo del pie) es específico de linfedema y lo distingue de otras causas de edema.'
    },
    {
      nombre: 'Trombosis venosa profunda: signos clínicos y sus limitaciones',
      color: '#8c3a34',
      definicion: 'Hallazgos físicos buscados ante sospecha de trombosis venosa profunda (TVP) de miembros inferiores.',
      clinica: 'Signo de Homans: dolor en la pantorrilla con la dorsiflexión pasiva del pie. Signo de Pratt: dolor a la palpación del trayecto venoso profundo. Otros: edema unilateral, calor local, dolor espontáneo.',
      fisiopatologia: 'Tanto el signo de Homans como el de Pratt tienen baja sensibilidad y especificidad para TVP (hallazgo comparable al de Kernig/Brudzinski en meningitis: su ausencia NO descarta el diagnóstico). El Homans además tiene el riesgo teórico de desprender un trombo con la maniobra, por lo que su uso rutinario está en desuso en la práctica actual.',
      criterios_dx: 'La escala de Wells (criterios clínicos ponderados: cáncer activo, inmovilización/parálisis, encamamiento reciente o cirugía mayor, dolor localizado en trayecto venoso profundo, edema de toda la pierna, edema unilateral de pantorrilla &gt;3 cm, edema con fóvea unilateral, venas colaterales superficiales no varicosas, y un diagnóstico alternativo tan o más probable —que resta 2 puntos—) estratifica el riesgo pretest y guía la necesidad de dímero D o ecografía Doppler, en vez de depender de un signo físico aislado.',
      dx_diferencial: 'Un signo de Homans negativo NO descarta TVP — la decisión de estudiar se basa en la probabilidad pretest (Wells), no en la negatividad de un solo signo.'
    },
    {
      nombre: 'Insuficiencia venosa crónica',
      color: '#8c3a34',
      definicion: 'Incompetencia de las válvulas venosas de miembros inferiores (primaria/varicosa o secundaria a TVP previa, síndrome postrombótico) que permite el reflujo retrógrado de sangre.',
      clinica: 'Progresión típica: varices (venas superficiales dilatadas y tortuosas) → edema vespertino que mejora con la elevación → dermatitis por estasis (eccema, hiperpigmentación ocre) → lipodermatoesclerosis (induración fibrótica, deformidad "en botella de champán invertida" del tercio distal de la pierna) → úlcera venosa.',
      fisiopatologia: 'La incompetencia valvular eleva crónicamente la presión venosa ambulatoria; la hiperpigmentación ocre se debe al depósito de hemosiderina de eritrocitos extravasados por la hipertensión venosa capilar crónica.',
      criterios_dx: 'La úlcera venosa característica se localiza en la región maleolar medial ("gaiter area"/zona de las polainas), con bordes irregulares y poco profundos, poco dolorosa, rodeada de cambios de estasis.',
      dx_diferencial: 'Ver Tabla 3 (tarjeta "Úlceras venosas vs. arteriales", más abajo) para la comparación completa.'
    },
    {
      nombre: 'Exploración arterial periférica: pulsos e índice tobillo-brazo',
      color: '#3d5a73',
      definicion: 'Palpación sistemática de los pulsos arteriales de la extremidad y medición del índice tobillo-brazo (ITB).',
      clinica: 'Se palpan y gradúan (0: ausente, 1+: disminuido, 2+: normal) los pulsos femoral, poplíteo, tibial posterior y pedio, comparando ambos lados. El ITB es el cociente entre la presión sistólica más alta obtenida con Doppler en el tobillo (tibial posterior o pedio) y la presión sistólica más alta de los brazos (braquial).',
      fisiopatologia: 'ITB normal: 1.0-1.4. Enfermedad arterial periférica: ≤0.9. Un ITB &gt;1.4 sugiere arterias no compresibles por calcificación (típico en diabetes de larga evolución o enfermedad renal terminal), donde el índice deja de ser confiable y se requieren pruebas alternativas (índice dedo-brazo, ondas de volumen de pulso). Es la diferencia entre apretar una manguera de jardín flexible (se aplana con facilidad, y la presión necesaria refleja bien lo que hay adentro) y apretar un tubo de PVC rígido y calcificado (no se aplana casi nada sin importar cuánta presión se aplique, así que el número obtenido ya no dice nada confiable sobre el flujo real).',
      criterios_dx: 'Un ITB anormalmente alto (&gt;1.4) NO significa ausencia de enfermedad — puede enmascarar una enfermedad arterial periférica significativa en arterias no compresibles, y obliga a un estudio alternativo.'
    },
    {
      nombre: 'Isquemia arterial aguda: las 6 P',
      color: '#8c3a34',
      definicion: 'Síndrome clínico de oclusión arterial aguda de una extremidad, reconocido por 6 hallazgos cardinales (ver Imagen 2).',
      clinica: `Pain (dolor súbito), Pallor (palidez), Pulselessness (ausencia de pulso), Paresthesia (parestesias), Paralysis (parálisis), Poiquilotermia (frialdad).${figBlock('Imagen 2', 'Las 6 P de la isquemia arterial aguda', seisPIsquemiaSVG())}`,
      fisiopatologia: 'La parestesia es un signo TEMPRANO (las fibras nerviosas son muy sensibles a la isquemia, se afectan antes que el músculo); la parálisis es un signo TARDÍO que indica isquemia ya avanzada, con daño muscular establecido y menor probabilidad de recuperación completa incluso con revascularización.',
      criterios_dx: 'La aparición de parálisis (a diferencia de la parestesia aislada) marca la transición a isquemia con daño tisular ya establecido — es indicación de revascularización EMERGENTE, no solo urgente.',
      algoritmo: ['Evaluar dolor, color y temperatura de la extremidad', 'Palpar pulsos distales (ausentes en la isquemia aguda completa)', 'Evaluar sensibilidad (parestesia = signo temprano)', 'Evaluar función motora (parálisis = signo tardío, urgencia máxima)', 'Signo de Buerger si el cuadro es menos agudo: elevar la pierna 45-60° por 1 minuto (palidece) y luego dejarla colgar (rubor tardío intenso)']
    },
    {
      nombre: 'Úlceras venosas vs. arteriales: diferenciación clínica',
      color: '#8c3a34',
      definicion: 'Comparación de las características clave que distinguen el origen de una úlcera de extremidad inferior (ver Tabla 3).',
      clinica: 'Localización, dolor, bordes, pulsos y piel circundante difieren de forma característica entre ambos tipos.',
      fisiopatologia: `${figBlock('Tabla 3', 'Úlceras venosas vs. arteriales', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Característica</th>
        <th style="text-align:left;padding:5px 6px;">Úlcera venosa</th>
        <th style="text-align:left;padding:5px 6px;">Úlcera arterial</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Localización</strong></td><td style="padding:5px 6px;">Maleolar medial ("gaiter area")</td><td style="padding:5px 6px;">Distal: dedos, talón, cabezas metatarsianas</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Dolor</strong></td><td style="padding:5px 6px;">Leve-moderado, mejora con elevación</td><td style="padding:5px 6px;">Intenso, EMPEORA con elevación, mejora al colgar la pierna</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Bordes</strong></td><td style="padding:5px 6px;">Irregulares, poco profundos</td><td style="padding:5px 6px;">"En sacabocados", bien delimitados, profundos</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Pulsos</strong></td><td style="padding:5px 6px;">Presentes</td><td style="padding:5px 6px;">Disminuidos o ausentes</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Piel circundante</strong></td><td style="padding:5px 6px;">Hiperpigmentación ocre, dermatitis por estasis</td><td style="padding:5px 6px;">Fría, brillante, sin vello, atrófica</td></tr>
      </tbody>
    </table>
    </div>`)}
El dolor arterial EMPEORA con la elevación de la pierna (reduce aún más la perfusión ya comprometida por la insuficiencia arterial) y MEJORA al dejarla colgando (favorece el flujo por gravedad) — el patrón opuesto al de la insuficiencia venosa, donde la elevación mejora el edema y el malestar.`,
      criterios_dx: 'Confundir una úlcera arterial con una venosa y aplicar compresión (tratamiento estándar de la úlcera venosa) puede empeorar significativamente la isquemia de una extremidad con enfermedad arterial no reconocida — de ahí la importancia de medir el ITB antes de indicar terapia compresiva.'
    }
  ]
};

export const compCites = {
  'Secuencia y técnica de la exploración osteoarticular': { definicion: [1, 2], criterios_dx: [1] },
  'Inspección y palpación articular: articular vs. periarticular': { definicion: [1, 3], fisiopatologia: [1, 3] },
  'Derrame articular: choque rotuliano y signo de la oleada': { definicion: [1, 3], fisiopatologia: [1, 3] },
  'Patrones de afectación articular': { definicion: [1, 3], fisiopatologia: [1, 3] },
  'Maniobras articulares específicas frecuentes': { definicion: [1, 3], fisiopatologia: [1, 3] },
  'Edema de miembros inferiores: mecanismo y clasificación': { definicion: [1, 4], fisiopatologia: [4] },
  'Trombosis venosa profunda: signos clínicos y sus limitaciones': { definicion: [1, 4], fisiopatologia: [4, 8], criterios_dx: [6] },
  'Insuficiencia venosa crónica': { definicion: [1, 9], fisiopatologia: [9] },
  'Exploración arterial periférica: pulsos e índice tobillo-brazo': { definicion: [1, 4], fisiopatologia: [4, 7] },
  'Isquemia arterial aguda: las 6 P': { definicion: [1, 4], fisiopatologia: [4, 7] },
  'Úlceras venosas vs. arteriales: diferenciación clínica': { definicion: [1, 9], fisiopatologia: [9] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {};
export const escalaCalc = {};
export const diagCites = { clinica: [1, 3] };
export const clasificacionCite = [];
export const seguimientoCite = [];
export const compGroups = [
  { title: 'Metodología general', items: ['Secuencia y técnica de la exploración osteoarticular'] },
  { title: 'Exploración articular', items: ['Inspección y palpación articular: articular vs. periarticular', 'Derrame articular: choque rotuliano y signo de la oleada', 'Patrones de afectación articular', 'Maniobras articulares específicas frecuentes'] },
  { title: 'Sistema venoso', items: ['Edema de miembros inferiores: mecanismo y clasificación', 'Trombosis venosa profunda: signos clínicos y sus limitaciones', 'Insuficiencia venosa crónica'] },
  { title: 'Sistema arterial', items: ['Exploración arterial periférica: pulsos e índice tobillo-brazo', 'Isquemia arterial aguda: las 6 P', 'Úlceras venosas vs. arteriales: diferenciación clínica'] }
];
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Técnica general' },
  { id: 'complicaciones', label: 'Maniobras y hallazgos' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
