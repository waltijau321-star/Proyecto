// topics/signos-clasicos/content.js — Semiología 9: Signos y Maniobras Clásicas (referencia
// transversal). Noveno y ÚLTIMO cluster del kardex de Semiología, construido a pedido explícito
// del usuario después de haber decidido inicialmente NO construirlo aparte (ver notas de
// exploracion-abdominal/exploracion-neurologica/exploracion-cabeza-cuello: "es un índice de
// signos con epónimo que van a vivir dentro de sus temas de sistema, construirlo aparte
// duplicaría contenido"). Para que este tema aporte valor real y no sea una copia, se resolvió
// así:
//   1. Un ÍNDICE MAESTRO (figura 'indice-maestro-tabla' en la primera tarjeta) que lista TODOS
//      los signos con epónimo de toda la app —los ya construidos a fondo en otros temas Y los
//      nuevos de aquí— con su significado en una línea y el tema donde profundizar. Ese es el
//      verdadero "índice transversal" que pedía el cluster.
//   2. El resto de las tarjetas (13) enseña signos con epónimo REALES y de alto rendimiento que
//      NO están construidos en ningún otro tema — la tétrada periférica de la insuficiencia
//      aórtica (Musset/Duroziez/Traube/Quincke), Courvoisier, Kehr, Chvostek, los DOS "signos de
//      Trousseau" (mismo epónimo, significado completamente distinto — trampa clásica de examen),
//      Lhermitte, Battle/ojos de mapache, Hoover, Gowers, Auspitz, Darier y el signo de Levine —
//      con la misma profundidad fisiopatológica que el resto de Semiología. Cero duplicación.
//
// Las 4 figuras son TODAS código propio (SVG/HTML con var(--...) de tema) — nada de imágenes
// externas ni asistidas por IA, mismo criterio ya establecido en el proyecto.

export const meta = {
  id: 'signos-clasicos',
  titulo: 'Signos y Maniobras Clásicas',
  subtitulo: 'Semiología 9 · Índice transversal · Medicina Interna',
  accent: '#5c3d5c',
  accentDim: '#8f6b8f'
};

export const definicionText = 'Los signos con epónimo son atajos diagnósticos: cada uno condensa, en el nombre de quien lo describió, un mecanismo fisiopatológico específico y un patrón clínico reconocible. Muchos ya están construidos a fondo dentro de su tema de sistema correspondiente (Murphy en Abdominal, Kernig/Brudzinski en Neurológica, Homans en Osteoarticular, Pemberton en Cabeza y Cuello, Nikolsky en Piel y Faneras). Este tema cumple 2 funciones: sirve de índice maestro transversal para ubicar rápidamente cualquiera de ellos, y enseña —con la misma profundidad fisiopatológica del resto de Semiología— un grupo de signos clásicos de alto rendimiento que no vive en ningún otro tema: la tétrada periférica de la insuficiencia aórtica severa, Courvoisier, Kehr, Chvostek, los dos "signos de Trousseau" (una trampa de nomenclatura real y frecuente), Lhermitte, Battle/ojos de mapache, Hoover, Gowers, Auspitz, Darier y Levine.';

export const bibliografia = [
  "Bickley LS, Szilagyi PG, Hoffman RM. Bates' Guide to Physical Examination and History Taking. 13th ed. Philadelphia: Wolters Kluwer; 2021.",
  'Argente HA, Álvarez ME. Semiología Médica: Fisiopatología, Semiotecnia y Propedéutica. 2nd ed. Buenos Aires: Editorial Médica Panamericana; 2013.',
  "LeBlond RF, Brown DD, Suneja M, Szot JF. DeGowin's Diagnostic Examination. 10th ed. New York: McGraw-Hill; 2015.",
  'McGee S. Evidence-Based Physical Diagnosis. 4th ed. Philadelphia: Elsevier; 2018.',
  'Surós Batlló A, Surós Batlló J. Semiología Médica y Técnica Exploratoria. 8th ed. Barcelona: Elsevier Masson; 2001.',
  'Perloff JK. Physical Examination of the Heart and Circulation. Shelton, CT: People’s Medical Publishing House; 2009.',
  "Kang S, Amagai M, Bruckner AL, et al., eds. Fitzpatrick's Dermatology. 9th ed. New York: McGraw-Hill; 2019.",
  'Varki A. Trousseau’s syndrome: multiple definitions and multiple mechanisms. Blood. 2007;110(6):1723-1729.',
  "Campbell WW. DeJong's The Neurologic Examination. 8th ed. Philadelphia: Wolters Kluwer; 2019."
];

// Reetiqueta los 4 campos genéricos del motor para que encajen con contenido semiológico
// (mismo criterio que los demás temas de Semiología).
export const modalLabels = {
  itemName: 'Signo',
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

function battleMapacheSVG() {
  return `<svg viewBox="0 0 200 220" role="img" aria-labelledby="bm-t bm-d" style="width:100%;max-width:200px;display:block;margin:0 auto;">
    <title id="bm-t">Signo de Battle y ojos de mapache</title>
    <desc id="bm-d">Silueta de cabeza vista de frente, con dos zonas marcadas: equimosis periorbitaria bilateral (ojos de mapache) alrededor de ambos ojos, y equimosis retroauricular (signo de Battle) detrás de cada oreja.</desc>
    <ellipse cx="100" cy="110" rx="65" ry="85" fill="none" stroke="var(--line)" stroke-width="1.5"/>
    <ellipse cx="72" cy="95" rx="18" ry="12" fill="#8c3a34" opacity="0.35"/>
    <ellipse cx="128" cy="95" rx="18" ry="12" fill="#8c3a34" opacity="0.35"/>
    <circle cx="72" cy="95" r="4" fill="var(--ink)"/>
    <circle cx="128" cy="95" r="4" fill="var(--ink)"/>
    <text x="100" y="60" text-anchor="middle" font-size="9.5" font-weight="700" fill="#8c3a34">Ojos de mapache</text>
    <ellipse cx="35" cy="115" rx="10" ry="16" fill="#8c3a34" opacity="0.35"/>
    <ellipse cx="165" cy="115" rx="10" ry="16" fill="#8c3a34" opacity="0.35"/>
    <text x="100" y="205" text-anchor="middle" font-size="9.5" font-weight="700" fill="#8c3a34">Signo de Battle (retroauricular)</text>
  </svg>
  <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:6px 0 0;">Ambos son signos TARDÍOS (1-3 días tras el traumatismo) de fractura de la base del cráneo.</p>`;
}

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Sin hallazgos de estos signos clásicos',
      tituloB: 'Presencia de alguno de estos signos',
      compensada: 'Ausencia de los signos periféricos de insuficiencia aórtica severa, vesícula no palpable, sin espasmo carpal inducido, sin dolor referido a hombros, sin equimosis periauricular/periorbitaria, sin movimiento paradójico costal, capaz de levantarse del suelo sin apoyo manual progresivo, sin sangrado puntiforme al desprender escamas ni habones al friccionar lesiones cutáneas.',
      descompensada: 'Cada uno de los signos de esta tarjeta, tomado de forma aislada, ya orienta a un mecanismo fisiopatológico específico y con frecuencia a una urgencia (ruptura esplénica, fractura de base de cráneo, hipocalcemia sintomática, neoplasia oculta) que amerita estudio dirigido inmediato.'
    }
  },
  complicaciones: [
    {
      nombre: 'Índice maestro de signos con epónimo',
      color: '#3d5a73',
      definicion: 'Tabla de referencia rápida con TODOS los signos con epónimo relevantes de Medicina Interna: los ya construidos a fondo en su tema de sistema correspondiente, y los nuevos que se desarrollan en las tarjetas siguientes de este mismo tema (ver Tabla 1).',
      clinica: `Úsala para ubicar en segundos dónde profundizar cualquier signo con nombre propio que aparezca en un caso clínico o una pregunta de examen.${figBlock('Tabla 1', 'Índice maestro de signos con epónimo', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:4px 5px;">Signo</th>
        <th style="text-align:left;padding:4px 5px;">Significado breve</th>
        <th style="text-align:left;padding:4px 5px;">Profundizar en</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Murphy</td><td style="padding:4px 5px;">Colecistitis aguda</td><td style="padding:4px 5px;">Exploración Abdominal</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">McBurney</td><td style="padding:4px 5px;">Punto apendicular</td><td style="padding:4px 5px;">Exploración Abdominal</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Rovsing</td><td style="padding:4px 5px;">Apendicitis (irritación a distancia)</td><td style="padding:4px 5px;">Exploración Abdominal</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Blumberg</td><td style="padding:4px 5px;">Irritación peritoneal (rebote)</td><td style="padding:4px 5px;">Exploración Abdominal</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Psoas / obturador</td><td style="padding:4px 5px;">Apendicitis retrocecal/pélvica</td><td style="padding:4px 5px;">Exploración Abdominal</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Cullen / Grey Turner</td><td style="padding:4px 5px;">Hemorragia retroperitoneal (pancreatitis)</td><td style="padding:4px 5px;">Exploración Abdominal</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Courvoisier</strong></td><td style="padding:4px 5px;">Obstrucción biliar neoplásica</td><td style="padding:4px 5px;">Aquí</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Kehr</strong></td><td style="padding:4px 5px;">Ruptura esplénica (dolor referido al hombro)</td><td style="padding:4px 5px;">Aquí</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Kernig / Brudzinski</td><td style="padding:4px 5px;">Irritación meníngea</td><td style="padding:4px 5px;">Exploración Neurológica</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Babinski / Hoffmann</td><td style="padding:4px 5px;">Liberación piramidal</td><td style="padding:4px 5px;">Exploración Neurológica</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Romberg</td><td style="padding:4px 5px;">Ataxia sensitiva vs. cerebelosa</td><td style="padding:4px 5px;">Exploración Neurológica</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Argyll-Robertson</td><td style="padding:4px 5px;">Neurosífilis</td><td style="padding:4px 5px;">Exploración Neurológica</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Horner</td><td style="padding:4px 5px;">Vía oculosimpática (ptosis/miosis/anhidrosis)</td><td style="padding:4px 5px;">Exploración Neurológica</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Lhermitte</strong></td><td style="padding:4px 5px;">Desmielinización cervical</td><td style="padding:4px 5px;">Aquí</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Battle / ojos de mapache</strong></td><td style="padding:4px 5px;">Fractura de base de cráneo</td><td style="padding:4px 5px;">Aquí</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Kussmaul</td><td style="padding:4px 5px;">Pericarditis constrictiva/taponamiento</td><td style="padding:4px 5px;">Exploración Cardiovascular</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Carvallo</td><td style="padding:4px 5px;">Soplo del lado derecho del corazón</td><td style="padding:4px 5px;">Exploración Cardiovascular</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Musset / Duroziez / Traube / Quincke</strong></td><td style="padding:4px 5px;">Insuficiencia aórtica severa</td><td style="padding:4px 5px;">Aquí</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Levine</strong></td><td style="padding:4px 5px;">Dolor isquémico visceral</td><td style="padding:4px 5px;">Aquí</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Homans / Pratt</td><td style="padding:4px 5px;">Trombosis venosa profunda</td><td style="padding:4px 5px;">Exploración Osteoarticular</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Buerger</td><td style="padding:4px 5px;">Isquemia arterial periférica</td><td style="padding:4px 5px;">Exploración Osteoarticular</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Stemmer</td><td style="padding:4px 5px;">Linfedema</td><td style="padding:4px 5px;">Exploración Osteoarticular</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Pemberton</td><td style="padding:4px 5px;">Bocio con extensión retroesternal</td><td style="padding:4px 5px;">Exploración Cabeza y Cuello</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Troisier (ganglio de Virchow)</td><td style="padding:4px 5px;">Neoplasia abdominal metastásica</td><td style="padding:4px 5px;">Exploración Cabeza y Cuello</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Nikolsky</td><td style="padding:4px 5px;">Fragilidad epidérmica intraepidérmica</td><td style="padding:4px 5px;">Exploración de Piel y Faneras</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;">Koebner</td><td style="padding:4px 5px;">Lesión nueva en sitio de trauma cutáneo</td><td style="padding:4px 5px;">Exploración de Piel y Faneras</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Chvostek / Trousseau (tetania)</strong></td><td style="padding:4px 5px;">Hipocalcemia</td><td style="padding:4px 5px;">Aquí</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Trousseau (tromboflebitis migratoria)</strong></td><td style="padding:4px 5px;">Neoplasia oculta (páncreas)</td><td style="padding:4px 5px;">Aquí</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Hoover</strong></td><td style="padding:4px 5px;">EPOC avanzado</td><td style="padding:4px 5px;">Aquí</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:4px 5px;"><strong>Gowers</strong></td><td style="padding:4px 5px;">Miopatía proximal (Duchenne)</td><td style="padding:4px 5px;">Aquí</td></tr>
        <tr><td style="padding:4px 5px;"><strong>Auspitz / Darier</strong></td><td style="padding:4px 5px;">Psoriasis / mastocitosis</td><td style="padding:4px 5px;">Aquí</td></tr>
      </tbody>
    </table>
    </div>`)}`
    },
    {
      nombre: 'Tétrada periférica de la insuficiencia aórtica severa: Musset, Duroziez, Traube y Quincke',
      color: '#8c3a34',
      definicion: 'Conjunto de signos periféricos clásicos, generados todos por el mismo mecanismo, hoy de valor más histórico/de examen que de utilidad diagnóstica de primera línea (el ecocardiograma los reemplazó) (ver Tabla 2).',
      clinica: 'Signo de Musset: cabeceo rítmico y sincrónico con cada latido cardiaco, sin que el examinador toque al paciente. Signo de Duroziez: al comprimir progresivamente la arteria femoral con el estetoscopio, se ausculta un soplo tanto con la compresión proximal (sistólico, normal) como con la compresión distal (diastólico, anormal). Signo de Traube ("pistol shot"): ruido sistólico y diastólico intenso y seco sobre la arteria femoral, SIN necesidad de comprimirla. Signo de Quincke: pulsación capilar visible (alternancia de palidez y rubor) en el lecho ungueal al presionar suavemente la punta de la uña, o en el borde labial con transiluminación.',
      fisiopatologia: `${figBlock('Tabla 2', 'Tétrada periférica de la insuficiencia aórtica severa', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;">Signo</th>
        <th style="text-align:left;padding:5px 6px;">Técnica</th>
        <th style="text-align:left;padding:5px 6px;">Hallazgo</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Musset</strong></td><td style="padding:5px 6px;">Observar la cabeza sin tocar al paciente</td><td style="padding:5px 6px;">Cabeceo sincrónico con cada latido</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Duroziez</strong></td><td style="padding:5px 6px;">Comprimir la arteria femoral proximal y distal con el estetoscopio</td><td style="padding:5px 6px;">Soplo sistólico Y diastólico</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Traube</strong></td><td style="padding:5px 6px;">Auscultar la femoral sin comprimirla</td><td style="padding:5px 6px;">Ruido "en pistoletazo" sistólico-diastólico</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Quincke</strong></td><td style="padding:5px 6px;">Presionar suavemente la punta de la uña o transiluminar el labio</td><td style="padding:5px 6px;">Pulsación capilar visible (palidez-rubor alternantes)</td></tr>
      </tbody>
    </table>
    </div>`)}
Los 4 comparten el mismo origen: la fuga diastólica masiva a través de la válvula aórtica insuficiente genera una presión de pulso muy amplia (sistólica alta, diastólica muy baja) que se transmite exageradamente a la periferia — el mismo mecanismo detrás del pulso celer et magnus/de Corrigan ya visto en Exploración Cardiovascular.`,
      criterios_dx: 'Su baja sensibilidad y especificidad comparadas con los hallazgos centrales (soplo diastólico, pulso celer et magnus) y el ecocardiograma les da hoy un valor más de reconocimiento clásico que de utilidad diagnóstica de primera línea.'
    },
    {
      nombre: 'Signo de Levine',
      color: '#3d5a73',
      definicion: 'Gesto característico en el que el paciente, al describir su dolor torácico, cierra el puño y lo coloca sobre el esternón, en vez de señalar con un dedo un punto específico.',
      clinica: 'Se observa espontáneamente durante el interrogatorio, sin que el examinador lo solicite ni lo sugiera.',
      fisiopatologia: 'Refleja el carácter visceral y mal localizado del dolor isquémico miocárdico —a diferencia del dolor somático de pared torácica, bien localizado, que el paciente sí señala con un dedo—: la inervación visceral cardiaca converge sobre dermatomas somáticos amplios (T1-T4) sin una representación cortical puntual, de ahí la descripción difusa "en puño".',
      criterios_dx: 'Apoya la sospecha de dolor isquémico verdadero, aunque no reemplaza al electrocardiograma ni a los biomarcadores.',
      dx_diferencial: 'Un paciente que señala el dolor con un dedo, en un punto preciso y reproducible a la palpación, sugiere más un origen musculoesquelético/de pared torácica que isquémico.'
    },
    {
      nombre: 'Signo de Courvoisier',
      color: '#8c3a34',
      definicion: 'Vesícula biliar palpable, aumentada de tamaño, NO dolorosa, en un paciente con ictericia.',
      fisiopatologia: 'La "ley de Courvoisier" establece que este hallazgo rara vez se debe a litiasis biliar: una vesícula crónicamente inflamada por cálculos suele estar fibrótica, engrosada y NO distensible, por lo que no llega a palparse aunque la vía biliar esté obstruida. Una vesícula distendida e indolora, en cambio, sugiere una obstrucción biliar extrínseca de instauración gradual —clásicamente un carcinoma de la cabeza del páncreas— sobre una vesícula previamente sana y capaz de distenderse. Es la diferencia entre intentar inflar un globo viejo que ya se ha inflado y desinflado muchas veces, endurecido y con la goma reseca (no se estira, por más presión que reciba) y un globo nuevo, elástico, que se distiende con facilidad ante la misma presión.',
      criterios_dx: 'Vesícula palpable + ictericia + ausencia de dolor obliga a descartar una neoplasia periampular/pancreática antes que colelitiasis.',
      dx_diferencial: 'Vesícula palpable Y dolorosa (Murphy positivo) con ictericia sugiere coledocolitiasis con colangitis, no neoplasia.'
    },
    {
      nombre: 'Signo de Kehr',
      color: '#8c3a34',
      definicion: 'Dolor referido en el hombro IZQUIERDO, exacerbado en decúbito o con la maniobra de Trendelenburg, en el contexto de irritación peritoneal del cuadrante superior izquierdo.',
      fisiopatologia: 'La sangre o el contenido irritante en contacto con la superficie inferior del diafragma estimula las fibras sensitivas del nervio frénico (C3-C5), que comparte raíz cervical con el dermatoma del hombro — el cerebro interpreta la señal como proveniente del hombro (dolor referido) en vez de reconocer su origen diafragmático/subfrénico real. Es como dos interruptores de luz distintos conectados al mismo circuito eléctrico: si uno de ellos se daña y manda una señal errática, esa señal puede terminar "encendiendo" la luz equivocada, la del otro interruptor que comparte el mismo cableado, en vez de la que realmente falló.',
      criterios_dx: 'En un paciente con traumatismo abdominal cerrado, el signo de Kehr obliga a descartar ruptura esplénica con hemoperitoneo, incluso sin hallazgos abdominales floridos.',
      dx_diferencial: 'Dolor referido al hombro DERECHO por irritación subdiafragmática derecha (ej. absceso subfrénico, patología biliar) sigue el mismo mecanismo frénico, del lado contrario.'
    },
    {
      nombre: 'Signo de Chvostek',
      color: '#8c3a34',
      definicion: 'Contracción de los músculos faciales ipsilaterales (comisura labial, ala nasal, párpado) al percutir suavemente el nervio facial por delante del trago, a nivel del arco cigomático.',
      fisiopatologia: 'Refleja hiperexcitabilidad neuromuscular por hipocalcemia: el calcio extracelular estabiliza el umbral de despolarización de la membrana neuronal; su disminución reduce ese umbral, facilitando la despolarización espontánea o provocada del nervio facial ante un estímulo mecánico leve que normalmente no generaría respuesta.',
      criterios_dx: 'Tiene sensibilidad limitada (puede ser positivo hasta en 10-25% de personas normocalcémicas) y no debe usarse de forma aislada para diagnosticar hipocalcemia.',
      dx_diferencial: 'El signo de Trousseau de la tetania (ver tarjeta siguiente) es más sensible y específico que el Chvostek para hipocalcemia.'
    },
    {
      nombre: 'Signo de Trousseau de la tetania',
      color: '#8c3a34',
      definicion: 'Espasmo carpal (flexión de la muñeca y las metacarpofalángicas, extensión de las interfalángicas, aducción del pulgar — "mano de partero") inducido por isquemia del antebrazo.',
      clinica: 'Se infla un manguito de presión arterial por encima de la presión sistólica durante 3 minutos.',
      fisiopatologia: 'La isquemia local reduce aún más el calcio ionizado disponible a nivel de la membrana nerviosa periférica, desenmascarando o exacerbando la hiperexcitabilidad neuromuscular de la hipocalcemia subyacente.',
      criterios_dx: 'Más sensible y específico que el signo de Chvostek para hipocalcemia clínicamente relevante.'
    },
    {
      nombre: 'Signo de Trousseau de tromboflebitis migratoria (¡mismo nombre, significado distinto!)',
      color: '#8c3a34',
      definicion: 'Episodios recurrentes y migratorios de tromboflebitis superficial, en sitios variables e inusuales (con frecuencia sin relación con venas varicosas), que aparecen y desaparecen de forma sucesiva (ver Tabla 3).',
      fisiopatologia: `${figBlock('Tabla 3', '"Signo de Trousseau": dos entidades distintas, mismo nombre', `<div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
      <thead><tr style="border-bottom:1px solid var(--line);">
        <th style="text-align:left;padding:5px 6px;"></th>
        <th style="text-align:left;padding:5px 6px;">Trousseau de la tetania</th>
        <th style="text-align:left;padding:5px 6px;">Trousseau de tromboflebitis migratoria</th>
      </tr></thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Significa</strong></td><td style="padding:5px 6px;">Hipocalcemia</td><td style="padding:5px 6px;">Neoplasia oculta (clásicamente pancreática)</td></tr>
        <tr style="border-bottom:1px solid var(--line);"><td style="padding:5px 6px;"><strong>Hallazgo</strong></td><td style="padding:5px 6px;">Espasmo carpal con isquemia por manguito</td><td style="padding:5px 6px;">Tromboflebitis superficial recurrente y migratoria</td></tr>
        <tr><td style="padding:5px 6px;"><strong>Mecanismo</strong></td><td style="padding:5px 6px;">Hiperexcitabilidad neuromuscular por hipocalcemia</td><td style="padding:5px 6px;">Hipercoagulabilidad paraneoplásica</td></tr>
      </tbody>
    </table>
    </div>`)}
Fenómeno paraneoplásico por un estado de hipercoagulabilidad sistémica inducido por la neoplasia (liberación de factor tisular y mucinas procoagulantes por las células tumorales), clásicamente asociado al adenocarcinoma de páncreas, aunque descrito también en otras neoplasias.`,
      criterios_dx: 'Una tromboflebitis superficial migratoria e inexplicada, sobre todo sin factores de riesgo venoso habituales, obliga a descartar una neoplasia oculta.',
      dx_diferencial: 'ADVERTENCIA de nomenclatura: este es un signo COMPLETAMENTE DISTINTO al signo de Trousseau de la tetania hipocalcémica. Ambos llevan el nombre de Armand Trousseau, quien los describió por separado — y, dato histórico real, él mismo desarrolló después un cáncer de páncreas y reconoció en sí mismo el signo de tromboflebitis migratoria que había descrito. Confundir ambos "Trousseau" es un error frecuente y potencialmente grave.'
    },
    {
      nombre: 'Signo de Lhermitte',
      color: '#8c3a34',
      definicion: 'Sensación breve, similar a una descarga eléctrica, que desciende por la columna vertebral (y a veces hacia las extremidades), provocada por la flexión pasiva o activa del cuello.',
      fisiopatologia: 'Refleja hipersensibilidad mecánica de axones desmielinizados en los cordones posteriores de la médula cervical: el estiramiento mecánico de fibras desmielinizadas genera una descarga ectópica que se percibe como una sensación eléctrica. Es como un cable telefónico viejo, con la funda protectora agrietada y el cobre casi expuesto: mientras está quieto no da problema, pero al doblarlo o estirarlo genera chisporroteos y ruido de estática que un cable nuevo, bien aislado, nunca produciría. Clásicamente descrito en esclerosis múltiple, pero también en cualquier causa de mielopatía cervical compresiva (espondilosis cervical severa, tumor medular).',
      criterios_dx: 'Un signo de Lhermitte positivo localiza la lesión a nivel de los cordones posteriores cervicales, orientando el estudio de imagen (resonancia magnética) hacia esa región.'
    },
    {
      nombre: 'Signos de fractura de base de cráneo: Battle y ojos de mapache',
      color: '#8c3a34',
      definicion: 'Dos signos de equimosis en localizaciones específicas, indicativos de fractura de la base del cráneo (ver Imagen 1).',
      clinica: 'Signo de Battle: equimosis retroauricular, sobre la apófisis mastoides. Ojos de mapache: equimosis periorbitaria bilateral.',
      fisiopatologia: `${figBlock('Imagen 1', 'Signo de Battle y ojos de mapache', battleMapacheSVG())}
La sangre proveniente de una fractura de la fosa craneal media/posterior (Battle) o anterior (ojos de mapache) se extravasa y diseca a través de los planos fasciales hasta acumularse en el tejido subcutáneo laxo de esas regiones específicas, siguiendo el camino de menor resistencia anatómica — por eso aparecen en sitios predecibles y no aleatorios.`,
      criterios_dx: 'Ambos son signos TARDÍOS (aparecen 1-3 días después del traumatismo, no inmediatamente), por lo que su ausencia en la evaluación inicial NO descarta una fractura de base de cráneo.'
    },
    {
      nombre: 'Signo de Hoover',
      color: '#8c3a34',
      definicion: 'Movimiento paradójico HACIA ADENTRO del reborde costal inferior lateral durante la inspiración, en vez de expandirse hacia afuera como es normal.',
      fisiopatologia: 'En la hiperinsuflación pulmonar severa (EPOC avanzado), el diafragma se aplana crónicamente y pierde su curvatura normal; al contraerse un diafragma ya aplanado, en vez de descender y expandir la caja torácica hacia afuera, tracciona el reborde costal inferior hacia ADENTRO y hacia arriba — un movimiento mecánicamente invertido respecto al normal.',
      criterios_dx: 'Indica hiperinsuflación severa con diafragma muy aplanado, y se correlaciona con mayor limitación funcional en la EPOC.'
    },
    {
      nombre: 'Signo de Gowers',
      color: '#8c3a34',
      definicion: 'Maniobra que el paciente utiliza para incorporarse desde el suelo hasta la posición de pie, "trepando" sobre su propio cuerpo con las manos (apoyándose primero en las rodillas y subiendo progresivamente las manos por los muslos) en vez de levantarse directamente.',
      fisiopatologia: 'Refleja debilidad severa de la musculatura de la cintura pélvica y los muslos (glúteos, cuádriceps), insuficiente para extender caderas y rodillas contra la gravedad sin la ayuda mecánica adicional de "trepar" con los brazos. Clásicamente descrito en la distrofia muscular de Duchenne, aunque presente en cualquier miopatía proximal severa.',
      criterios_dx: 'Un signo de Gowers positivo en un niño pequeño (típicamente varón, por la herencia ligada al X de la distrofia de Duchenne) es una señal de alarma que amerita evaluación neuromuscular dirigida (creatina cinasa, estudio genético).'
    },
    {
      nombre: 'Signo de Auspitz',
      color: '#8c3a34',
      definicion: 'Sangrado puntiforme y difuso que aparece al desprender mecánicamente una escama de una placa de psoriasis.',
      fisiopatologia: 'En la psoriasis, la hiperproliferación epidérmica acorta drásticamente el tiempo de recambio celular, generando una epidermis delgada sobre papilas dérmicas alargadas y muy vascularizadas que se acercan anormalmente a la superficie; al desprender la escama, estos capilares superficiales se rompen con facilidad.',
      criterios_dx: 'Aunque clásico y de alto valor didáctico, no es indispensable para el diagnóstico de psoriasis (habitualmente clínico, por la morfología típica de las placas) y rara vez se provoca deliberadamente en la práctica actual.'
    },
    {
      nombre: 'Signo de Darier',
      color: '#8c3a34',
      definicion: 'Aparición de una roncha/habón eritematoso y pruriginoso al friccionar o rascar suavemente una lesión cutánea de mastocitosis.',
      fisiopatologia: 'La fricción mecánica provoca la degranulación de los mastocitos anormalmente acumulados en la lesión, liberando histamina y otros mediadores que generan la roncha localizada de forma inmediata — un equivalente mecánico del dermografismo, pero limitado a la lesión mastocítica.',
      criterios_dx: 'Un signo de Darier positivo es prácticamente diagnóstico de mastocitosis cutánea (urticaria pigmentosa) y evita la necesidad de biopsia en la mayoría de los casos.'
    }
  ]
};

export const compCites = {
  'Tétrada periférica de la insuficiencia aórtica severa: Musset, Duroziez, Traube y Quincke': { definicion: [1, 6], fisiopatologia: [6] },
  'Signo de Levine': { definicion: [1, 4], fisiopatologia: [1, 4] },
  'Signo de Courvoisier': { definicion: [1, 3], fisiopatologia: [1, 3] },
  'Signo de Kehr': { definicion: [1, 3], fisiopatologia: [1, 3] },
  'Signo de Chvostek': { definicion: [1, 4], fisiopatologia: [1, 4] },
  'Signo de Trousseau de la tetania': { definicion: [1, 4], fisiopatologia: [1, 4] },
  'Signo de Trousseau de tromboflebitis migratoria (¡mismo nombre, significado distinto!)': { definicion: [1, 8], fisiopatologia: [8] },
  'Signo de Lhermitte': { definicion: [1, 9], fisiopatologia: [9] },
  'Signos de fractura de base de cráneo: Battle y ojos de mapache': { definicion: [1, 3], fisiopatologia: [1, 3] },
  'Signo de Hoover': { definicion: [1, 4], fisiopatologia: [1, 4] },
  'Signo de Gowers': { definicion: [1, 9], fisiopatologia: [9] },
  'Signo de Auspitz': { definicion: [1, 7], fisiopatologia: [7] },
  'Signo de Darier': { definicion: [1, 7], fisiopatologia: [7] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {};
export const escalaCalc = {};
export const diagCites = { clinica: [1, 3] };
export const clasificacionCite = [];
export const seguimientoCite = [];
export const compGroups = [
  { title: 'Índice general', items: ['Índice maestro de signos con epónimo'] },
  { title: 'Signos cardiovasculares', items: ['Tétrada periférica de la insuficiencia aórtica severa: Musset, Duroziez, Traube y Quincke', 'Signo de Levine'] },
  { title: 'Signos abdominales y hepatobiliares', items: ['Signo de Courvoisier', 'Signo de Kehr'] },
  { title: 'Signos endocrino-metabólicos y oncológicos', items: ['Signo de Chvostek', 'Signo de Trousseau de la tetania', 'Signo de Trousseau de tromboflebitis migratoria (¡mismo nombre, significado distinto!)'] },
  { title: 'Signos neurológicos y craneales', items: ['Signo de Lhermitte', 'Signos de fractura de base de cráneo: Battle y ojos de mapache'] },
  { title: 'Signos respiratorios, neuromusculares y dermatológicos', items: ['Signo de Hoover', 'Signo de Gowers', 'Signo de Auspitz', 'Signo de Darier'] }
];
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Técnica general' },
  { id: 'complicaciones', label: 'Signos y maniobras' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
