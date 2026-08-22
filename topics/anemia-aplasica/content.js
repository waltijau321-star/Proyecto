// topics/anemia-aplasica/content.js: Anemia Aplásica (adquirida idiopática grave/muy grave, no
// grave, secundaria, y congénita). Estructura idéntica al contrato del motor (misma forma que
// sindromes-mielodisplasicos/sindromes-mieloproliferativos/miocardiopatias). Sigue la convención
// de figuras en línea (figBlock(), numerada "Tabla N"/"Imagen N" con conteo continuo por tipo).

export const meta = {
  id: 'anemia-aplasica',
  titulo: 'Anemia Aplásica',
  subtitulo: 'Módulo 8 · Medicina Interna',
  accent: '#8c4a3d',
  accentDim: '#b87a6a'
};

export const definicionText = `<p style="margin:0 0 14px;">La anemia aplásica (AA) es un síndrome de falla medular caracterizado por pancitopenia periférica con médula ósea hipocelular, sin infiltración por células anormales (blastos, fibrosis, tumor) ni displasia significativa que sugiera un síndrome mielodisplásico. El mecanismo predominante en la forma adquirida es la destrucción inmunomediada de la célula madre hematopoyética por linfocitos T citotóxicos autorreactivos. Se clasifica según su origen en adquirida (idiopática/autoinmune, la más frecuente; o secundaria a fármacos, tóxicos, radiación o infección viral) y congénita (síndromes de falla medular hereditaria, con la anemia de Fanconi como prototipo), una distinción con implicaciones terapéuticas radicalmente distintas: la inmunosupresión es eficaz en la forma adquirida pero inútil —y contraindicada— en la congénita, donde el trasplante o los andrógenos son la única opción.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> Incidencia baja (~2 casos por millón de habitantes al año en países occidentales, hasta 3 veces mayor en Asia oriental), con distribución bimodal por edad: un pico en adultos jóvenes (15-25 años) y un segundo pico en mayores de 60 años.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Adquirida idiopática/autoinmune</strong> (~70-80% de los casos): mecanismo inmunomediado, sin causa identificable.</li>
    <li><strong>Adquirida secundaria</strong>: fármacos (cloranfenicol, sales de oro, ciertos AINE, antitiroideos, algunos antiepilépticos), tóxicos (benceno, insecticidas), radiación ionizante, hepatitis seronegativa post-viral (síndrome de hepatitis-aplasia), VIH.</li>
    <li><strong>Congénita</strong> (síndromes de falla medular hereditaria): anemia de Fanconi (la más frecuente), disqueratosis congénita (telomeropatía), síndrome de Shwachman-Diamond, anemia de Diamond-Blackfan.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Exposición a fármacos/tóxicos idiosincrásicos reconocidos</li>
    <li>Infección viral reciente (hepatitis seronegativa, VIH)</li>
    <li>Antecedente familiar o rasgos fenotípicos de un síndrome congénito reconocido</li>
    <li>Consanguinidad parental (mayor riesgo de las formas congénitas autosómicas recesivas)</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> En la forma adquirida, un desencadenante (infeccioso, farmacológico, o no identificado) expone neoantígenos o altera la célula madre hematopoyética, activando una respuesta oligoclonal de linfocitos T citotóxicos (predominantemente Th1, con producción de interferón-gamma y factor de necrosis tumoral alfa) que destruye la célula madre y sus progenitores, con preservación relativa del estroma medular; esto explica la respuesta a la inmunosupresión. Una proporción de los pacientes tiene, al diagnóstico o durante el seguimiento, una pequeña clona de hemoglobinuria paroxística nocturna (HPN) que escapa a este ataque por carecer de las proteínas ancladas a GPI reconocidas por él, y puede expandirse con el tiempo. En la forma congénita, el mecanismo es un defecto intrínseco (reparación del ADN en Fanconi, mantenimiento telomérico en disqueratosis congénita, biogénesis ribosomal en Shwachman-Diamond/Diamond-Blackfan) que lleva al agotamiento progresivo de la reserva de células madre, sin componente inmunomediado.${figBlock('Imagen 1', 'Dos caminos hacia la médula vacía: adquirida vs. congénita', `
<div style="display:flex;gap:16px;max-width:600px;margin:0 auto;flex-wrap:wrap;justify-content:center;">
  <div style="flex:1;min-width:250px;display:flex;flex-direction:column;align-items:center;gap:5px;">
    <div style="font-size:11px;font-weight:700;color:#8c3a34;text-align:center;">FORMA ADQUIRIDA (inmunomediada)</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Desencadenante (viral, fármaco, o no identificado)</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Linfocitos T citotóxicos activados (Th1: IFN-γ, TNF-α)</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Destrucción de la célula madre hematopoyética</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:#3f6b5233;border:1px solid #3f6b52;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Médula vacía → RESPONDE a inmunosupresión</div>
  </div>
  <div style="flex:1;min-width:250px;display:flex;flex-direction:column;align-items:center;gap:5px;">
    <div style="font-size:11px;font-weight:700;color:#5c6b8c;text-align:center;">FORMA CONGÉNITA (defecto intrínseco)</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Mutación germinal (FANC, TERT/TERC/DKC1, SBDS)</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Defecto de reparación del ADN / mantenimiento telomérico / biogénesis ribosomal</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:#5c6b8c33;border:1px solid #5c6b8c;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Agotamiento progresivo de la célula madre</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Médula vacía → NO responde a inmunosupresión (andrógenos/trasplante)</div>
  </div>
</div>`)}</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Síntomas de las 3 citopenias (fatiga por anemia, infecciones por neutropenia, sangrado por trombocitopenia) de instalación insidiosa o subaguda, sin adenopatías, hepatoesplenomegalia ni dolor óseo significativos —su presencia obliga a reconsiderar el diagnóstico—. En las formas congénitas, buscar activamente rasgos fenotípicos asociados (talla baja, anomalías del pulgar/radio, manchas café con leche en Fanconi; leucoplasia oral, distrofia ungueal, pigmentación reticular en disqueratosis congénita). El diagnóstico definitivo, el manejo específico de cada forma y de sus complicaciones se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Killick SB, Bown N, Cavenagh J, et al. Guidelines for the diagnosis and management of adult aplastic anaemia. Br J Haematol. 2016;172(2):187-207.',
  'Camitta BM, Thomas ED, Nathan DG, et al. Severe aplastic anemia: a prospective study of the effect of early marrow transplantation on acute mortality. Blood. 1976;48(1):63-70.',
  'Bacigalupo A. How I treat acquired aplastic anemia. Blood. 2017;129(11):1428-1436.',
  'Young NS. Aplastic Anemia. N Engl J Med. 2018;379(17):1643-1656.',
  'Scheinberg P, Young NS. How I treat acquired aplastic anemia. Blood. 2012;120(6):1185-1196.',
  'Scheinberg P, Nunez O, Weinstein B, et al. Horse versus rabbit antithymocyte globulin in acquired aplastic anemia. N Engl J Med. 2011;365(5):430-438.',
  'Townsley DM, Scheinberg P, Winkler T, et al. Eltrombopag Added to Standard Immunosuppression for Aplastic Anemia. N Engl J Med. 2017;376(16):1540-1550.',
  'Peffault de Latour R, Kulasekararaj A, Iacobelli S, et al. Eltrombopag Added to Immunosuppression in Severe Aplastic Anemia. N Engl J Med. 2022;386(1):11-23.',
  'Dufour C, Pillon M, Sociè G, et al. Outcome of aplastic anaemia in children. Br J Haematol. 2015;169(4):565-573.',
  'Bacigalupo A, Socié G, Schrezenmeier H, et al. Bone marrow versus peripheral blood as the stem cell source for sibling transplants in acquired aplastic anemia. Haematologica. 2012;97(8):1142-1148.',
  'DeZern AE, Symons HJ, Resar LS, et al. Haploidentical BMT for severe aplastic anemia with intensive GVHD prophylaxis. Blood Adv. 2020;4(8):1770-1779.',
  'Alter BP, Giri N, Savage SA, Rosenberg PS. Cancer risk in Fanconi anemia. Blood. 2018;131(15):1739-1741.',
  'Shimamura A, Alter BP. Pathophysiology and management of inherited bone marrow failure syndromes. Blood Rev. 2010;24(3):101-122.',
  'Dolberg OJ, Levy Y. Idiosyncratic drug-induced aplastic anemia. Isr Med Assoc J. 2014;16(9):587-590.',
  'Brodsky RA. Paroxysmal nocturnal hemoglobinuria. Blood. 2014;124(18):2804-2811.'
];

// Reproduce el marcado de .modal-figure (mismo helper que SMD/NMP/miocardiopatías) para insertar
// tablas EN LÍNEA justo debajo del párrafo que las menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Anemia aplásica no grave (moderada)',
      tituloB: 'Anemia aplásica grave / muy grave',
      compensada: 'Fatiga y disnea de esfuerzo leve-moderada por anemia, equimosis ocasionales, sin infecciones recurrentes significativas ni sangrado mayor. Con frecuencia asintomática o con síntomas leves, detectada de forma incidental en una biometría hemática de rutina; muchos pacientes permanecen estables durante años sin tratamiento específico, solo vigilancia.',
      descompensada: 'Fatiga marcada, infecciones recurrentes o graves por neutropenia profunda (con frecuencia &lt;200/µL en la forma muy grave), sangrado mucocutáneo o mayor por trombocitopenia profunda; instalación subaguda en semanas. Ausencia característica de adenopatías, hepatoesplenomegalia o dolor óseo significativos, cuya presencia obliga a reconsiderar el diagnóstico hacia una neoplasia hematológica infiltrativa.'
    },
    laboratorio: [
      { prueba: 'Biometría hemática con diferencial y reticulocitos', utilidad: 'Documenta pancitopenia sin blastos circulantes; VCM normal o ligeramente elevado; reticulocitos bajos o inapropiadamente normales para el grado de anemia.' },
      { prueba: 'Panel viral (VIH, hepatitis A/B/C, parvovirus B19, virus de Epstein-Barr, citomegalovirus)', utilidad: 'Descarta una causa infecciosa identificable, incluyendo el síndrome de hepatitis-aplasia (hepatitis seronegativa).' },
      { prueba: 'Vitamina B12 y folato', utilidad: 'Excluye causa megaloblástica de pancitopenia.' },
      { prueba: 'Citometría de flujo para clona de hemoglobinuria paroxística nocturna (HPN)', utilidad: 'Presente hasta en 50-70% de los casos al diagnóstico o durante el seguimiento; su presencia predice mayor probabilidad de respuesta a la inmunosupresión y obliga a vigilancia de hemólisis/trombosis si crece (ver Complicaciones).' },
      { prueba: 'Estudio de fragilidad cromosómica (diepoxibutano o mitomicina C)', utilidad: 'Obligatorio en todo paciente menor de 40 años (o con rasgos sugestivos) para descartar anemia de Fanconi antes de cualquier tratamiento, dado que el acondicionamiento pretrasplante estándar es tóxico de forma desproporcionada en Fanconi.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios de gravedad de Camitta', interpretacion: 'Clasifica la enfermedad como no grave, grave o muy grave; determina la urgencia del tratamiento. Ver Escalas.', cutoff: 'Categórico' },
      { metodo: 'Longitud telomérica leucocitaria', interpretacion: 'Apoya el diagnóstico de disqueratosis congénita/telomeropatía cuando se sospecha.', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'Biopsia de médula ósea', hallazgos: `Estudio obligatorio (más informativo que el aspirado): celularidad &lt;25% (o &lt;50% con &lt;30% de células hematopoyéticas), sin fibrosis, sin infiltración blástica, sin displasia significativa; espacios grasos ocupando la mayor parte del espacio medular.${figBlock('Imagen 2', 'Médula ósea normal vs. aplásica', `
      <svg viewBox="0 0 560 300" role="img" aria-labelledby="med-title med-desc" style="width:100%;max-width:480px;display:block;margin:0 auto;">
        <title id="med-title">Médula ósea normal vs. aplásica</title>
        <desc id="med-desc">Comparación esquemática de la celularidad medular: la médula normal muestra una mezcla de precursores de las 3 líneas hematopoyéticas con espacios grasos limitados, mientras que la médula aplásica muestra espacios grasos ocupando la mayor parte del espacio, con escasos precursores hematopoyéticos residuales.</desc>
        <line x1="280" y1="10" x2="280" y2="290" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
        <text x="140" y="24" text-anchor="middle" fill="var(--accent-fg)" font-size="13" font-weight="700">MÉDULA NORMAL</text>
        <text x="420" y="24" text-anchor="middle" fill="var(--accent-fg)" font-size="13" font-weight="700">MÉDULA APLÁSICA</text>
        <g>
          <rect x="20" y="35" width="240" height="215" rx="12" fill="var(--panel)" stroke="var(--ink)" stroke-width="2.5"/>
          <circle cx="45" cy="60" r="14" fill="#8c3a34"/>
          <circle cx="100" cy="60" r="14" fill="#3f6b52"/>
          <circle cx="155" cy="60" r="14" fill="#8c3a34"/>
          <ellipse cx="210" cy="60" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <circle cx="45" cy="115" r="14" fill="#3f6b52"/>
          <circle cx="100" cy="115" r="18" fill="#5c3d5c"/>
          <circle cx="155" cy="115" r="14" fill="#3f6b52"/>
          <circle cx="210" cy="115" r="14" fill="#8c3a34"/>
          <ellipse cx="45" cy="170" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <circle cx="100" cy="170" r="14" fill="#8c3a34"/>
          <circle cx="155" cy="170" r="14" fill="#3f6b52"/>
          <circle cx="210" cy="170" r="14" fill="#8c3a34"/>
          <circle cx="45" cy="225" r="14" fill="#3f6b52"/>
          <ellipse cx="100" cy="225" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <circle cx="155" cy="225" r="14" fill="#8c3a34"/>
          <circle cx="210" cy="225" r="14" fill="#3f6b52"/>
          <text x="140" y="268" text-anchor="middle" fill="var(--ink-dim)" font-size="10">Las 3 líneas presentes,</text>
          <text x="140" y="281" text-anchor="middle" fill="var(--ink-dim)" font-size="10">espacios grasos limitados</text>
        </g>
        <g transform="translate(280,0)">
          <rect x="20" y="35" width="240" height="215" rx="12" fill="var(--panel)" stroke="var(--ink)" stroke-width="2.5"/>
          <ellipse cx="45" cy="60" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <ellipse cx="100" cy="60" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <circle cx="155" cy="60" r="14" fill="#8c3a34"/>
          <ellipse cx="210" cy="60" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <ellipse cx="45" cy="115" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <ellipse cx="100" cy="115" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <ellipse cx="155" cy="115" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <ellipse cx="210" cy="115" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <circle cx="45" cy="170" r="14" fill="#3f6b52"/>
          <ellipse cx="100" cy="170" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <ellipse cx="155" cy="170" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <ellipse cx="210" cy="170" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <ellipse cx="45" cy="225" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <ellipse cx="100" cy="225" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <ellipse cx="155" cy="225" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <ellipse cx="210" cy="225" rx="17" ry="14" fill="var(--panel2)" stroke="var(--line)" stroke-width="1.5"/>
          <text x="140" y="268" text-anchor="middle" fill="var(--ink-dim)" font-size="10">Espacios grasos dominantes,</text>
          <text x="140" y="281" text-anchor="middle" fill="var(--ink-dim)" font-size="10">escasos precursores residuales</text>
        </g>
      </svg>`)}${figBlock('Imagen 3', 'Biopsia de médula ósea hipocelular', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/13256_2010_Article_1435_Fig1_HTML.webp/960px-13256_2010_Article_1435_Fig1_HTML.webp.png" alt="Biopsia de médula ósea hipocelular, mostrando escasa hematopoyesis y abundantes espacios grasos." style="width:100%;max-width:420px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Médula ósea hipocelular con escasa hematopoyesis y numerosos espacios grasos, el hallazgo histológico definitorio de la anemia aplásica. Stibbe KJM, Wildschut HIJ, Lugtenburg PJ, Wikimedia Commons, CC BY 4.0.</p>`)}` },
      { modalidad: 'Cariotipo/FISH de médula ósea', hallazgos: 'Descarta un síndrome mielodisplásico hipoplásico con clonalidad demostrable (ver ese diferencial en el tema de Síndromes Mielodisplásicos) y detecta alteraciones asociadas a Fanconi.' },
      { modalidad: 'Panel genético dirigido (genes de Fanconi, TERT/TERC/DKC1, SBDS)', hallazgos: 'Confirma el síndrome congénito específico sospechado por el estudio de fragilidad cromosómica o el fenotipo clínico.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'Los criterios de gravedad de Camitta, basados en 3 citopenias periféricas y la celularidad medular, son el eje central de la toma de decisiones en la anemia aplásica adquirida: determinan la urgencia del tratamiento y, junto con la edad y la disponibilidad de un donante compatible, la elección entre trasplante alogénico de primera línea e inmunosupresión.',
    escalas: [
      { nombre: 'Criterios de gravedad de Camitta', componentes: 'Celularidad medular, recuento absoluto de neutrófilos (ANC), plaquetas, reticulocitos.', formula: 'Médula hipocelular (&lt;25%) más al menos 2 de 3: ANC &lt;500/µL, plaquetas &lt;20,000/µL, reticulocitos &lt;20,000/µL. Calculadora disponible más abajo.', interpretacion: 'No grave: no cumple los criterios anteriores. Grave: cumple los criterios anteriores. Muy grave: cumple los criterios de "grave" con ANC &lt;200/µL. Grave/muy grave requieren tratamiento urgente (trasplante o inmunosupresión); la forma no grave puede vigilarse si no hay dependencia transfusional.' },
      { nombre: 'Criterios diagnósticos generales (de exclusión)', componentes: 'Pancitopenia periférica más médula ósea hipocelular sin infiltración, fibrosis ni displasia significativa.', formula: 'Diagnóstico de exclusión, sin puntaje numérico.', interpretacion: 'Requiere descartar activamente un síndrome mielodisplásico hipoplásico (clonalidad demostrable), hemoglobinuria paroxística nocturna clásica, y causas congénitas, antes de establecer el diagnóstico de anemia aplásica adquirida.' },
      { nombre: 'Puntuación de riesgo EBMT para trasplante', componentes: 'Edad del receptor, tipo de donante (hermano HLA-idéntico vs. no emparentado/haploidéntico), intervalo entre el diagnóstico y el trasplante.', formula: 'Modelo de riesgo pretrasplante, sin calculadora interactiva en esta versión del tema.', interpretacion: 'Un intervalo más corto entre el diagnóstico y el trasplante, un donante HLA-idéntico y una edad menor se asocian a mejor supervivencia postrasplante; guía la discusión de trasplante de donante alternativo frente a inmunosupresión cuando no hay hermano compatible.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Anemia aplásica adquirida idiopática grave/muy grave',
      color: '#8c3a34',
      definicion: 'Forma más frecuente de anemia aplásica (~70-80% de los casos adquiridos), de mecanismo inmunomediado sin causa identificable, que cumple los criterios de Camitta para enfermedad grave (médula hipocelular más ≥2 de 3: ANC &lt;500/µL, plaquetas &lt;20,000/µL, reticulocitos &lt;20,000/µL) o muy grave (los mismos criterios, con ANC &lt;200/µL).',
      fisiopatologia: 'Un desencadenante no siempre identificado activa una respuesta oligoclonal de linfocitos T citotóxicos CD8+ (predominantemente Th1, con producción de interferón-gamma y factor de necrosis tumoral alfa) dirigida contra la célula madre hematopoyética, produciendo su destrucción y agotamiento progresivo con preservación relativa del estroma medular; esto explica tanto la hipocelularidad medular como la respuesta a la inmunosupresión dirigida contra esos linfocitos T. Una proporción relevante de los pacientes tiene, al diagnóstico o durante el seguimiento, una pequeña clona de hemoglobinuria paroxística nocturna que escapa a este ataque inmunológico (ver Complicaciones).',
      epidemiologia: 'Incidencia baja (~2 casos por millón de habitantes al año en países occidentales, hasta 3 veces mayor en Asia oriental), con distribución bimodal: un pico en adultos jóvenes (15-25 años) y un segundo pico en mayores de 60 años.',
      factores_riesgo: ['Ninguno identificable en la mayoría de los casos (de ahí "idiopática")', 'Posible desencadenante infeccioso no siempre demostrado', 'Ascendencia asiática (mayor incidencia)'],
      clinica: 'Fatiga marcada por anemia, infecciones recurrentes o graves por neutropenia profunda (con frecuencia &lt;200/µL en la forma muy grave), sangrado mucocutáneo o mayor por trombocitopenia profunda; instalación subaguda en semanas. Ausencia característica de adenopatías, hepatoesplenomegalia o dolor óseo significativos, cuya presencia obliga a reconsiderar el diagnóstico.',
      criterios_dx: 'Pancitopenia periférica que cumple criterios de Camitta (grave o muy grave, ver Escalas) más biopsia de médula ósea con celularidad &lt;25% (o &lt;50% con &lt;30% de células hematopoyéticas), sin fibrosis, sin infiltración blástica ni displasia significativa, tras excluir causas secundarias identificables y síndromes congénitos.',
      laboratorio: 'Panel viral negativo; citometría de flujo para clona de hemoglobinuria paroxística nocturna (presente hasta en 50-70% de los casos, con valor pronóstico positivo para la respuesta a inmunosupresión); vitamina B12 y folato normales.',
      imagen: 'Biopsia de médula ósea: espacios grasos ocupando la mayor parte del espacio medular, sin fibrosis ni infiltración; cariotipo/FISH normal (su alteración orienta hacia un síndrome mielodisplásico hipoplásico, ver ese diferencial en el tema de Síndromes Mielodisplásicos).',
      complementarios: 'Tipificación HLA del paciente y de hermanos disponibles de inmediato al diagnóstico, dado que la edad y la disponibilidad de un donante HLA-idéntico determinan la primera línea de tratamiento; estudio de fragilidad cromosómica en todo paciente menor de 40 años para excluir anemia de Fanconi antes de iniciar cualquier tratamiento.',
      dx_diferencial: 'Síndrome mielodisplásico hipoplásico (clonalidad demostrable por cariotipo/NGS, ver el tema de Síndromes Mielodisplásicos), hemoglobinuria paroxística nocturna clásica (hemólisis y trombosis predominantes sobre la falla medular), síndromes de falla medular congénita (ver esa tarjeta), infiltración medular por leucemia aguda hipocelular.',
      tx_medico: 'Soporte transfusional restrictivo, para minimizar la aloinmunización y preservar la elegibilidad a trasplante, con hemoderivados irradiados y leucorreducidos en todo candidato a trasplante; evitar transfusiones de familiares potenciales donantes.',
      tx_farmacologico: 'Globulina antitimocítica (de caballo, superior a la de conejo en estudios comparativos) más ciclosporina, con eltrombopag (agonista del receptor de trombopoyetina) agregado desde el inicio, esquema que ha demostrado mejores tasas de respuesta hematológica completa que la inmunosupresión estándar sola; factor estimulante de colonias de granulocitos como coadyuvante en la neutropenia profunda con infección activa, sin beneficio establecido en supervivencia si se usa de rutina.',
      tx_intervencionista: 'Trasplante alogénico de células madre hematopoyéticas de un hermano HLA-idéntico como tratamiento de primera línea en el paciente joven (típicamente &lt;40 años, umbral que se ha ido flexibilizando); trasplante de donante no emparentado o haploidéntico como alternativa en el paciente sin hermano compatible, especialmente si falla la inmunosupresión.',
      criterios_uci: 'Sepsis neutropénica grave, sangrado mayor con inestabilidad hemodinámica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Enfermedad grave o muy grave (Camitta) en el paciente joven con hermano HLA-idéntico: trasplante de primera línea; en el paciente sin donante compatible o mayor, inmunosupresión primero, con trasplante de donante alternativo si hay falla o recaída.',
      seguimiento_hospitalario: 'Vigilancia estrecha de infecciones durante la neutropenia profunda, monitorización de niveles de ciclosporina, vigilancia de enfermedad del suero por la globulina antitimocítica (ver Complicaciones).',
      seguimiento_ambulatorio: 'Evaluación de respuesta hematológica a los 3-6 meses de la inmunosupresión (tiempo habitual hasta la respuesta), vigilancia periódica de la clona de hemoglobinuria paroxística nocturna y de evolución clonal a síndrome mielodisplásico/leucemia (ver Complicaciones).',
      pronostico: 'Sin tratamiento, la anemia aplásica grave/muy grave tiene una mortalidad elevada en los primeros meses; con trasplante alogénico de hermano HLA-idéntico en el paciente joven, la supervivencia a largo plazo supera el 80-90%; con inmunosupresión, la tasa de respuesta hematológica es de ~60-70%, con riesgo de recaída y de evolución clonal a largo plazo.',
      algoritmo: ['Pancitopenia + médula hipocelular sin infiltración/fibrosis/displasia → excluir causas secundarias y congénitas', 'Cumple criterios de Camitta grave/muy grave → confirma anemia aplásica grave', 'Tipificación HLA inmediata del paciente y hermanos', 'Paciente joven con hermano HLA-idéntico → trasplante alogénico de primera línea', 'Sin donante compatible o mayor → globulina antitimocítica + ciclosporina + eltrombopag', 'Falla a inmunosupresión → trasplante de donante alternativo (no emparentado/haploidéntico)']
    },
    {
      nombre: 'Anemia aplásica no grave',
      color: '#3f6b52',
      definicion: 'Anemia aplásica que no cumple los criterios de Camitta para enfermedad grave o muy grave (ver Escalas): médula hipocelular con pancitopenia presente pero sin alcanzar los umbrales de citopenia grave.',
      fisiopatologia: 'Comparte el mismo mecanismo inmunomediado que la forma grave (ver esa tarjeta) cuando es de origen adquirido idiopático, pero con un grado menor de destrucción de la célula madre hematopoyética, suficiente para mantener una hematopoyesis residual funcional sin dependencia transfusional en muchos casos.',
      epidemiologia: 'Representa una proporción relevante de los diagnósticos de anemia aplásica, con un curso más indolente; una fracción progresa a enfermedad grave con el tiempo, mientras que otra permanece estable durante años.',
      factores_riesgo: ['Los mismos de la forma adquirida idiopática grave', 'Diagnóstico incidental en una biometría hemática de rutina, sin síntomas que motiven estudio activo'],
      clinica: 'Fatiga y disnea de esfuerzo leve-moderada por anemia, equimosis ocasionales; sin infecciones recurrentes significativas ni sangrado mayor. Con frecuencia asintomática o con síntomas leves, detectada de forma incidental.',
      criterios_dx: 'Médula ósea hipocelular con pancitopenia que NO cumple los criterios de Camitta de gravedad (ver Escalas), tras el mismo estudio diagnóstico de exclusión que la forma grave.',
      laboratorio: 'Igual que la forma grave: panel viral, citometría de flujo para HPN, vitamina B12/folato.',
      imagen: 'Biopsia de médula ósea igual que en la forma grave, con hipocelularidad que no alcanza los umbrales más extremos.',
      complementarios: 'Reevaluación periódica de la biometría hemática para detectar progresión a enfermedad grave, que redefiniría la conducta terapéutica.',
      dx_diferencial: 'Igual que la forma grave (SMD hipoplásico, HPN clásica, síndromes congénitos), además de causas leves/transitorias de pancitopenia que deben excluirse antes de etiquetar la enfermedad como "no grave" en vez de investigar más.',
      tx_medico: 'Vigilancia expectante sin tratamiento específico si el paciente no es dependiente de transfusiones y no tiene citopenias sintomáticas; soporte transfusional ocasional guiado por síntomas.',
      tx_farmacologico: 'Inmunosupresión (globulina antitimocítica + ciclosporina) reservada para el paciente con dependencia transfusional o citopenias sintomáticas progresivas, no de rutina en todo paciente no grave; eltrombopag en monoterapia como opción en casos seleccionados de trombocitopenia sintomática sin cumplir criterios de gravedad.',
      tx_intervencionista: 'Trasplante alogénico no indicado de rutina en la forma no grave; reservado para progresión documentada a enfermedad grave.',
      criterios_uci: 'No aplica de forma directa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No indicado salvo progresión a enfermedad grave/muy grave.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico salvo complicación intercurrente.',
      seguimiento_ambulatorio: 'Biometría hemática periódica (cada 3-6 meses) para vigilar progresión; reevaluación de médula ósea si hay cambio clínico significativo.',
      pronostico: 'Más favorable que la forma grave; una proporción de los pacientes permanece estable sin tratamiento durante años, mientras que otra progresa y requiere el algoritmo de la enfermedad grave.',
      algoritmo: ['Pancitopenia leve-moderada + médula hipocelular → aplicar criterios de Camitta', 'No cumple criterios de gravedad → confirma enfermedad no grave', 'Sin dependencia transfusional ni síntomas → vigilancia expectante', 'Dependencia transfusional o progresión → reevaluar con criterios de Camitta', 'Progresa a grave/muy grave → manejar como la forma grave (trasplante o inmunosupresión)']
    },
    {
      nombre: 'Anemia aplásica secundaria',
      color: '#966b35',
      definicion: 'Anemia aplásica adquirida con una causa identificable: fármacos idiosincrásicos (cloranfenicol, sales de oro, ciertos AINE, antitiroideos, algunos antiepilépticos), tóxicos (benceno, insecticidas organofosforados), radiación ionizante, o infección viral (hepatitis seronegativa post-viral, VIH); comparte el mismo espectro de gravedad (Camitta) y el mismo abordaje terapéutico general que la forma idiopática, con la eliminación del agente causal como medida adicional específica.',
      fisiopatologia: 'Mecanismos variables según el agente: toxicidad medular directa dosis-dependiente (radiación, benceno) o reacción idiosincrásica inmunomediada no dosis-dependiente (la mayoría de los fármacos asociados), en la que metabolitos reactivos del fármaco actúan como haptenos que desencadenan una respuesta inmune contra la célula madre hematopoyética, similar en última instancia al mecanismo de la forma idiopática. El síndrome de hepatitis-aplasia (hepatitis seronegativa seguida de aplasia medular semanas después) es un patrón reconocido, predominante en varones jóvenes, con mecanismo inmunomediado postulado pero no completamente esclarecido.',
      epidemiologia: 'Representa una minoría de los casos de anemia aplásica adquirida; el síndrome de hepatitis-aplasia, aunque infrecuente, tiene un curso característicamente más grave que la forma idiopática promedio.',
      factores_riesgo: ['Exposición a fármacos idiosincrásicos reconocidos', 'Exposición ocupacional a benceno/insecticidas', 'Radioterapia previa con campo que incluye médula ósea activa', 'Hepatitis aguda reciente sin virus hepatotropo identificado (síndrome de hepatitis-aplasia)'],
      clinica: 'Igual que la forma idiopática (fatiga, infecciones, sangrado según la profundidad de las citopenias), con el antecedente temporal característico de exposición al agente causal o de la hepatitis previa en el síndrome de hepatitis-aplasia.',
      criterios_dx: 'Igual criterio general (pancitopenia + médula hipocelular sin infiltración/fibrosis/displasia), más la identificación de una exposición causal temporalmente compatible o la documentación de hepatitis seronegativa previa.',
      laboratorio: 'Igual panel que la forma idiopática; historia farmacológica y ocupacional dirigida y detallada, esencial para identificar el agente causal.',
      imagen: 'Igual que la forma idiopática.',
      complementarios: 'Notificación del evento adverso farmacológico si aplica, para prevenir reexposición y contribuir a la farmacovigilancia.',
      dx_diferencial: 'Mielosupresión esperada y reversible por quimioterapia/radioterapia reciente (se distingue por la recuperación espontánea en semanas, a diferencia de la aplasia verdadera persistente), igual diferencial que la forma idiopática por lo demás.',
      tx_medico: 'Suspensión inmediata y definitiva del agente causal identificado; evitar reexposición en el futuro (contraindicación permanente).',
      tx_farmacologico: 'Igual esquema que la forma idiopática (globulina antitimocítica + ciclosporina + eltrombopag) si cumple criterios de gravedad tras suspender el agente causal, dado que la recuperación espontánea completa tras la sola suspensión es infrecuente una vez establecida la aplasia franca.',
      tx_intervencionista: 'Igual que la forma idiopática, según gravedad y disponibilidad de donante.',
      criterios_uci: 'Igual que la forma idiopática.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Igual que la forma idiopática, según gravedad (Camitta) y disponibilidad de donante.',
      seguimiento_hospitalario: 'Igual que la forma idiopática.',
      seguimiento_ambulatorio: 'Igual que la forma idiopática, con documentación permanente en el expediente de la alergia/contraindicación al agente causal identificado.',
      pronostico: 'Similar al de la forma idiopática de gravedad equivalente; el síndrome de hepatitis-aplasia tiene un curso característicamente más grave y una menor tasa de respuesta a inmunosupresión que el promedio.',
      algoritmo: ['Pancitopenia + médula hipocelular + antecedente de exposición a fármaco/tóxico o hepatitis reciente → sospechar forma secundaria', 'Suspender de inmediato el agente causal identificado', 'Aplicar criterios de Camitta igual que en la forma idiopática', 'Grave/muy grave → trasplante o inmunosupresión según edad/donante, igual algoritmo que la forma idiopática', 'Documentar la contraindicación permanente al agente causal']
    },
    {
      nombre: 'Anemia aplásica congénita',
      color: '#5c6b8c',
      definicion: 'Grupo de trastornos genéticos que producen falla medular progresiva por un defecto intrínseco de la célula madre hematopoyética, sin el componente inmunomediado de las formas adquiridas; la anemia de Fanconi (defecto de la reparación del ADN por entrecruzamientos, herencia autosómica recesiva en la mayoría de los subtipos) es el prototipo y la más frecuente, seguida de la disqueratosis congénita (telomeropatía), el síndrome de Shwachman-Diamond (predominio de neutropenia con insuficiencia pancreática exocrina), y la anemia de Diamond-Blackfan (aplasia pura de células rojas congénita, no pancitopenia verdadera).',
      fisiopatologia: 'Cada síndrome tiene un defecto molecular específico que compromete la capacidad de autorrenovación o supervivencia de la célula madre hematopoyética: en la anemia de Fanconi, mutaciones en genes de la vía de reparación del ADN por entrecruzamientos (FANC) generan inestabilidad genómica progresiva; en la disqueratosis congénita, mutaciones en genes del mantenimiento telomérico (TERT, TERC, DKC1, entre otros) producen acortamiento telomérico acelerado y senescencia prematura de la célula madre; en el síndrome de Shwachman-Diamond, mutaciones en SBDS alteran la biogénesis ribosomal. El resultado común es el agotamiento progresivo de la reserva hematopoyética con el tiempo, sin respuesta a la inmunosupresión (que no corrige el defecto intrínseco) y con riesgo aumentado de neoplasias hematológicas y sólidas a largo plazo.',
      epidemiologia: 'Colectivamente poco frecuentes, pero deben sospecharse activamente en todo paciente joven (particularmente &lt;40 años) con anemia aplásica, dado que su prevalencia real está subestimada por presentaciones atenuadas en la edad adulta sin el fenotipo clásico pediátrico completo.',
      factores_riesgo: ['Antecedente familiar de falla medular o de las manifestaciones fenotípicas asociadas', 'Consanguinidad parental (mayor riesgo en herencia autosómica recesiva)', 'Fenotipo característico incompleto o atenuado en el adulto joven, fácil de pasar por alto'],
      clinica: 'Anemia de Fanconi: talla baja, anomalías del pulgar/radio, manchas café con leche, microcefalia, anomalías renales/genitourinarias, aunque hasta 30% de los casos carecen de rasgos fenotípicos evidentes. Disqueratosis congénita: la tríada clásica de leucoplasia oral, distrofia ungueal y pigmentación reticular cutánea, además de fibrosis pulmonar. Shwachman-Diamond: neutropenia predominante, insuficiencia pancreática exocrina con esteatorrea, talla baja. Diamond-Blackfan: anemia macrocítica aislada desde la infancia temprana, anomalías del pulgar en una minoría.',
      criterios_dx: 'Estudio de fragilidad cromosómica con diepoxibutano o mitomicina C (positivo en anemia de Fanconi, con aumento marcado de rupturas cromosómicas), longitud telomérica leucocitaria reducida (disqueratosis congénita), y confirmación por panel genético dirigido según el síndrome sospechado; obligatorio en todo paciente menor de 40 años con anemia aplásica antes de iniciar cualquier tratamiento definitivo.',
      laboratorio: 'Estudio de fragilidad cromosómica y panel genético dirigido como se describió; en Shwachman-Diamond, elastasa fecal baja como marcador de insuficiencia pancreática exocrina.',
      imagen: 'Biopsia de médula ósea igual que en las formas adquiridas; ecografía renal en la anemia de Fanconi para documentar anomalías genitourinarias asociadas.',
      complementarios: 'Tamizaje familiar en cascada (hermanos, especialmente antes de considerarlos como potenciales donantes de trasplante, dado que podrían portar el mismo defecto genético sin manifestación hematológica aún evidente); vigilancia oncológica de por vida (mayor riesgo de leucemia mieloide aguda y de tumores sólidos, particularmente carcinoma escamoso de cabeza/cuello y anogenital en Fanconi y disqueratosis congénita).',
      dx_diferencial: 'Formas adquiridas de anemia aplásica (idiopática y secundaria, ver esas tarjetas), otros síndromes de falla medular hereditaria entre sí (el panel genético dirigido distingue entre ellos).',
      tx_medico: 'Manejo de soporte igual que las formas adquiridas; en Shwachman-Diamond, suplementación enzimática pancreática para la insuficiencia exocrina.',
      tx_farmacologico: 'Andrógenos (danazol u oximetolona) como tratamiento de primera línea no curativo en la anemia de Fanconi sin donante disponible, con respuesta hematológica en una proporción relevante de los casos aunque con toxicidad hepática y virilización a vigilar; la inmunosupresión estándar (globulina antitimocítica/ciclosporina) NO está indicada, porque el defecto es intrínseco a la célula madre y no inmunomediado.',
      tx_intervencionista: 'Trasplante alogénico de células madre hematopoyéticas: única opción curativa de la falla medular (no corrige las manifestaciones no hematológicas ni el riesgo de tumores sólidos), con acondicionamiento de intensidad reducida específicamente adaptado (dosis mucho menores de agentes alquilantes/radiación, dada la hipersensibilidad intrínseca al daño del ADN en Fanconi); los hermanos potenciales donantes deben tamizarse primero para excluir que sean portadores/afectados del mismo síndrome.',
      criterios_uci: 'Igual que las formas adquiridas, según la complicación aguda.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Indicado ante falla medular significativa; el momento óptimo se individualiza porque el trasplante mismo conlleva riesgos específicos (mayor toxicidad con acondicionamiento estándar, riesgo de tumores secundarios) que deben sopesarse frente a la historia natural de la enfermedad de base.',
      seguimiento_hospitalario: 'Vigilancia de toxicidad de andrógenos si se usan (función hepática, lípidos); ajuste especial de dosis de acondicionamiento pretrasplante si aplica.',
      seguimiento_ambulatorio: 'Vigilancia oncológica de por vida (hematológica y de tumores sólidos), seguimiento multidisciplinario de las manifestaciones no hematológicas del síndrome específico, asesoría genética familiar.',
      pronostico: 'Variable según el síndrome específico y la gravedad de la falla medular; el riesgo de evolución a síndrome mielodisplásico/leucemia mieloide aguda y de tumores sólidos a largo plazo es sustancialmente mayor que en las formas adquiridas, incluso tras un trasplante exitoso.',
      algoritmo: ['Anemia aplásica en paciente joven (&lt;40 años) → estudio de fragilidad cromosómica obligatorio antes de cualquier tratamiento', 'Positivo → confirma síndrome de falla medular congénita; panel genético dirigido para el subtipo específico', 'Tamizaje de hermanos potenciales donantes antes de usarlos como donante', 'Sin donante/falla medular no urgente → andrógenos como primera línea no curativa', 'Con donante o falla medular grave → trasplante alogénico con acondicionamiento de intensidad reducida adaptado', 'Vigilancia oncológica de por vida, incluso post-trasplante']
    },
    {
      nombre: 'Infecciones por neutropenia profunda',
      color: '#7a1f3d',
      definicion: 'Complicación transversal que puede ocurrir sobre cualquiera de las 4 formas de anemia aplásica de esta sección (ver cada tarjeta), particularmente en la enfermedad grave/muy grave: infección bacteriana o fúngica invasiva en el contexto de neutropenia profunda y prolongada, la principal causa de mortalidad temprana antes de lograr una respuesta al tratamiento definitivo.',
      fisiopatologia: 'A diferencia de la neutropenia del síndrome mielodisplásico (que añade disfunción cualitativa del clon displásico), en la anemia aplásica la neutropenia es predominantemente cuantitativa, por ausencia casi completa de precursores mieloides en una médula vacía; la profundidad y duración de la neutropenia (semanas a meses hasta la respuesta a inmunosupresión o el injerto postrasplante) son los determinantes principales del riesgo infeccioso.',
      epidemiologia: 'La infección es la principal causa de muerte en las primeras semanas tras el diagnóstico de anemia aplásica grave/muy grave, antes de que la inmunosupresión o el trasplante restablezcan un recuento de neutrófilos protector.',
      factores_riesgo: ['Neutropenia muy profunda y prolongada (&lt;200/µL, forma muy grave)', 'Retraso en el inicio del tratamiento definitivo', 'Mucositis asociada al acondicionamiento pretrasplante', 'Dispositivos invasivos (catéteres venosos centrales)'],
      clinica: 'Fiebre con o sin foco identificable; infección fúngica invasiva (aspergilosis pulmonar particularmente) a considerar activamente si la neutropenia se prolonga más allá de 1-2 semanas pese a antibiótico de amplio espectro.',
      criterios_dx: 'Fiebre (≥38.3°C única o ≥38.0°C sostenida por 1 hora) en un paciente con recuento absoluto de neutrófilos &lt;500/µL.',
      laboratorio: 'Hemocultivos periféricos y de catéter central si aplica, galactomanano sérico seriado si se sospecha aspergilosis, biometría hemática, función renal/hepática.',
      imagen: 'TC de tórax de alta resolución si la fiebre persiste pese a antibiótico de amplio espectro, buscando el signo del halo u otros hallazgos sugestivos de aspergilosis invasiva.',
      complementarios: 'Ninguno adicional específico.',
      dx_diferencial: 'Enfermedad del suero por la globulina antitimocítica (fiebre con artralgias/exantema, sin foco infeccioso, típicamente 1-2 semanas después de iniciada, ver la tarjeta de complicaciones del trasplante/inmunosupresión).',
      tx_medico: 'Precauciones estándar/de neutropenia, evaluación clínica dirigida a foco.',
      tx_farmacologico: 'Antibiótico empírico de amplio espectro con cobertura antipseudomónica dentro de la primera hora; cobertura antifúngica empírica (equinocandina o un azol con actividad frente a mohos) si la fiebre persiste más de 4-7 días pese a antibiótico de amplio espectro, dado el riesgo particularmente alto de infección fúngica invasiva en la neutropenia profunda y prolongada de esta enfermedad; factor estimulante de colonias de granulocitos en la infección grave activa, sin uso rutinario fuera de ese contexto.',
      tx_intervencionista: 'Retiro del catéter venoso central si hay infección asociada al dispositivo no controlada con antibiótico.',
      criterios_uci: 'Sepsis con datos de choque, infección fúngica invasiva con compromiso respiratorio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa; una infección activa no controlada puede retrasar el trasplante planeado.',
      seguimiento_hospitalario: 'Vigilancia de la resolución de la fiebre, reevaluación a las 48-96 horas según cultivos/evolución.',
      seguimiento_ambulatorio: 'Profilaxis antifúngica en pacientes seleccionados de muy alto riesgo durante la fase de neutropenia profunda prolongada.',
      pronostico: 'La infección no controlada durante la fase de neutropenia profunda es la principal causa de muerte temprana; el pronóstico mejora sustancialmente una vez lograda la respuesta hematológica al tratamiento definitivo.',
      algoritmo: ['Fiebre + ANC &lt;500/µL → hemocultivos + antibiótico empírico de amplio espectro dentro de la primera hora', 'Persistencia &gt;4-7 días sin foco → agregar cobertura antifúngica empírica + TC de tórax de alta resolución', 'Galactomanano seriado si se sospecha aspergilosis', 'Datos de choque o compromiso respiratorio → manejo en UCI', 'G-CSF solo en infección grave activa, no de rutina']
    },
    {
      nombre: 'Sangrado por trombocitopenia',
      color: '#5c3d5c',
      definicion: 'Complicación frecuente sobre cualquiera de las 4 formas de esta sección (ver cada tarjeta), particularmente en la enfermedad grave/muy grave: sangrado mucocutáneo o, con menor frecuencia, hemorragia mayor por trombocitopenia profunda.',
      fisiopatologia: 'A diferencia de la trombocitopenia del síndrome mielodisplásico o de las neoplasias mieloproliferativas (que añaden disfunción plaquetaria cualitativa), en la anemia aplásica la trombocitopenia es predominantemente cuantitativa, por ausencia de megacariocitos en una médula vacía; el riesgo hemorrágico se correlaciona de forma más directa con el recuento plaquetario absoluto que en esas otras entidades.',
      epidemiologia: 'El sangrado, junto con la infección, es una de las dos causas principales de morbimortalidad temprana en la anemia aplásica grave/muy grave no tratada.',
      factores_riesgo: ['Trombocitopenia muy profunda (&lt;10,000-20,000/µL)', 'Fiebre/infección activa concomitante', 'Uso de antiagregantes/anticoagulantes por otra indicación'],
      clinica: 'Petequias, equimosis, epistaxis, gingivorragia, menorragia; sangrado mayor (gastrointestinal, intracraneal) con trombocitopenia muy profunda, particularmente si coexiste infección o fiebre.',
      criterios_dx: 'Clínico, con recuento plaquetario confirmatorio mediante biometría hemática.',
      laboratorio: 'Biometría hemática con recuento plaquetario, frotis de sangre periférica (excluir seudotrombocitopenia).',
      imagen: 'TC de cráneo si hay sospecha de sangrado intracraneal.',
      complementarios: 'Ninguno adicional específico.',
      dx_diferencial: 'Coagulopatía concomitante, efecto de antiagregantes/anticoagulantes.',
      tx_medico: 'Evitar antiagregantes/AINE innecesarios; medidas locales de hemostasia para sangrado mucocutáneo menor.',
      tx_farmacologico: 'Ácido tranexámico para sangrado mucocutáneo significativo (particularmente menorragia); eltrombopag, ya parte del esquema estándar de primera línea en la enfermedad grave (ver esa tarjeta), contribuye también a la recuperación plaquetaria más allá de su efecto sobre la respuesta hematológica global.',
      tx_intervencionista: 'Transfusión de concentrado plaquetario ante sangrado activo significativo o antes de un procedimiento invasivo (umbral profiláctico habitual &lt;10,000/µL en ausencia de fiebre/sangrado, más alto si hay fiebre o procedimiento planeado), con hemoderivados irradiados y leucorreducidos en todo candidato a trasplante para minimizar la aloinmunización.',
      criterios_uci: 'Sangrado mayor con inestabilidad hemodinámica, sangrado intracraneal.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de nuevos sitios de sangrado, recuento plaquetario seriado.',
      seguimiento_ambulatorio: 'Educación sobre signos de alarma de sangrado, evitar fármacos que alteren la función plaquetaria salvo indicación imperiosa.',
      pronostico: 'El sangrado mucocutáneo menor es manejable con medidas locales/transfusión; el sangrado mayor es una causa reconocida de mortalidad temprana en la enfermedad no tratada.',
      algoritmo: ['Sangrado mucocutáneo o plaquetas muy bajas → biometría + frotis', 'Sangrado activo significativo o previo a procedimiento → transfusión de plaquetas (irradiadas/leucorreducidas) según umbral', 'Sangrado mucocutáneo persistente (particularmente menorragia) → ácido tranexámico', 'Sangrado mayor/inestabilidad → manejo en UCI', 'Iniciar/continuar tratamiento definitivo (trasplante o inmunosupresión) sin demora, la medida más eficaz a mediano plazo']
    },
    {
      nombre: 'Evolución clonal',
      color: '#6b4a2e',
      definicion: 'Complicación tardía transversal que puede ocurrir sobre cualquiera de las formas adquiridas de esta sección (idiopática y secundaria, ver esas tarjetas), y con mecanismo/vigilancia algo distintos en la forma congénita (ver esa tarjeta): desarrollo de un síndrome mielodisplásico o una leucemia mieloide aguda clonales sobre la médula ya dañada, o expansión progresiva y clínicamente significativa de una clona de hemoglobinuria paroxística nocturna ya presente.',
      fisiopatologia: 'El estrés replicativo sostenido sobre una reserva de células madre hematopoyéticas ya reducida por el ataque inmunomediado (o, en las formas congénitas, por el defecto intrínseco de reparación/mantenimiento) favorece la adquisición de mutaciones somáticas adicionales y la selección clonal, particularmente tras el uso prolongado de factor estimulante de colonias de granulocitos. La expansión de la clona de HPN sigue un mecanismo distinto: al carecer de las proteínas ancladas a GPI reconocidas por el ataque inmunomediado, esa clona tiene una ventaja de supervivencia relativa (no proliferativa intrínseca) sobre la hematopoyesis normal residual, por lo que su proporción puede crecer con el tiempo incluso sin ser en sí misma una neoplasia franca.',
      epidemiologia: 'El riesgo acumulado de evolución a síndrome mielodisplásico/leucemia mieloide aguda tras anemia aplásica adquirida es de aproximadamente 10-15% a 10 años, mayor en la variante con monosomía 7; la expansión de una clona de HPN clínicamente significativa (con hemólisis o trombosis) ocurre en una minoría de los pacientes con clona detectable al diagnóstico.',
      factores_riesgo: ['Mayor tiempo de evolución de la enfermedad', 'Uso prolongado de factor estimulante de colonias de granulocitos', 'Aparición de monosomía 7 u otras alteraciones citogenéticas de alto riesgo', 'Clona de HPN detectable al diagnóstico (para el riesgo específico de expansión sintomática)'],
      clinica: 'Cambio en el patrón de citopenias (nueva macrocitosis marcada, displasia en el frotis, blastos circulantes) sugestivo de evolución a SMD/LMA; hemoglobinuria (orina oscura, característicamente matutina), dolor abdominal, o un nuevo evento trombótico (particularmente en sitios atípicos como la vena porta o los senos venosos cerebrales) si la clona de HPN se expande de forma clínicamente significativa.',
      criterios_dx: 'Reevaluación de médula ósea (morfología, cariotipo, NGS) mostrando displasia significativa, exceso de blastos, o una alteración citogenética clonal nueva, aplicando entonces los criterios diagnósticos del tema de Síndromes Mielodisplásicos; cuantificación seriada por citometría de flujo de alta sensibilidad del tamaño de la clona de HPN, con hemólisis documentada por LDH/haptoglobina/bilirrubina si hay clínica sugestiva.',
      laboratorio: 'Biometría hemática con reevaluación morfológica, cariotipo/NGS de médula ósea; LDH, haptoglobina, bilirrubina indirecta y hemoglobina/hemosiderina urinarias si se sospecha hemólisis por expansión de la clona de HPN.',
      imagen: 'Aspirado/biopsia de médula ósea de reevaluación; angio-TC/RM dirigida si hay sospecha de trombosis en sitio atípico asociada a HPN.',
      complementarios: 'Citometría de flujo de alta sensibilidad para HPN en cada reevaluación periódica, no solo al diagnóstico inicial.',
      dx_diferencial: 'Recuperación hematológica incompleta/lenta tras el tratamiento definitivo (sin criterios de SMD/LMA ni expansión clonal significativa de HPN), que no debe confundirse con una verdadera evolución clonal.',
      tx_medico: 'Reevaluación completa del plan terapéutico según el hallazgo (manejo de SMD/LMA secundarios según el tema correspondiente, o manejo dirigido de la HPN sintomática).',
      tx_farmacologico: 'Manejo del SMD/LMA secundario según su propio algoritmo de riesgo (ver esos temas); inhibidor del complemento (eculizumab o ravulizumab) si la clona de HPN produce hemólisis clínicamente significativa o trombosis, con anticoagulación indefinida si ya hubo un evento trombótico asociado a HPN.',
      tx_intervencionista: 'Trasplante alogénico de células madre hematopoyéticas si se confirma evolución a SMD de alto riesgo o LMA (ver esos temas), o si la HPN se vuelve refractaria/de alto riesgo pese al tratamiento dirigido.',
      criterios_uci: 'Trombosis mayor asociada a HPN, complicaciones agudas del SMD/LMA secundario (ver esos temas).',
      criterios_tips: 'Budd-Chiari asociado a HPN con hipertensión portal refractaria (ver el manejo específico en el tema de Síndromes Mieloproliferativos para la trombosis esplácnica en general).',
      criterios_trasplante: 'Igual que en SMD de alto riesgo/LMA si esa es la evolución documentada; en la HPN pura, el trasplante se reserva para la enfermedad refractaria al inhibidor del complemento con manifestaciones graves.',
      seguimiento_hospitalario: 'Según la complicación específica identificada.',
      seguimiento_ambulatorio: 'Vigilancia de por vida con biometría hemática y citometría de flujo para HPN periódicas, incluso después de una respuesta hematológica completa aparente al tratamiento inicial de la anemia aplásica.',
      pronostico: 'El SMD/LMA secundario a anemia aplásica tiene, en general, un pronóstico reservado, similar o algo peor que el de novo equivalente; la HPN sintomática tratada con inhibidor del complemento tiene un pronóstico favorable en cuanto al control de la hemólisis/trombosis, aunque no corrige la falla medular subyacente si coexiste.',
      algoritmo: ['Anemia aplásica en seguimiento con cambio en el patrón de citopenias o síntomas de hemólisis/trombosis → reevaluar médula ósea + citometría de flujo para HPN', 'Displasia/blastos/citogenética clonal nueva → aplicar criterios y manejo de SMD/LMA', 'Expansión de clona de HPN con hemólisis/trombosis → inhibidor del complemento ± anticoagulación', 'Evolución a alto riesgo → evaluar trasplante alogénico', 'Vigilancia de por vida, incluso tras respuesta hematológica completa inicial']
    },
    {
      nombre: 'Complicaciones del trasplante y de la inmunosupresión',
      color: '#2e5f6b',
      definicion: 'Complicación transversal específica de los dos tratamientos definitivos de la anemia aplásica (ver las tarjetas de enfermedad correspondientes): enfermedad del suero y otras reacciones a la globulina antitimocítica, y enfermedad de injerto contra huésped o rechazo/falla de injerto tras el trasplante alogénico.',
      fisiopatologia: 'La enfermedad del suero es una reacción de hipersensibilidad tipo III (inmunocomplejos) contra las proteínas heterólogas de la globulina antitimocítica, típicamente 1-2 semanas después de iniciada. La enfermedad de injerto contra huésped es mediada por linfocitos T del donante que reconocen antígenos del receptor como extraños; el rechazo/falla de injerto, por el contrario, refleja una reconstitución hematopoyética insuficiente del donante, favorecida por un acondicionamiento de intensidad insuficiente o por sensibilización previa del receptor (particularmente si recibió transfusiones no irradiadas/no leucorreducidas antes del trasplante).',
      epidemiologia: 'La enfermedad del suero ocurre en una proporción relevante de los pacientes que reciben globulina antitimocítica, especialmente con el producto de conejo; el rechazo de injerto es más frecuente en el trasplante de donante no emparentado/haploidéntico que en el de hermano HLA-idéntico, y la enfermedad de injerto contra huésped crónica es una causa relevante de morbilidad tardía en los sobrevivientes a largo plazo.',
      factores_riesgo: ['Uso de globulina antitimocítica de conejo (enfermedad del suero más frecuente que con la de caballo)', 'Donante no emparentado o haploidéntico (mayor riesgo de rechazo de injerto y de EICH)', 'Transfusiones previas no irradiadas/no leucorreducidas (mayor riesgo de sensibilización y rechazo)', 'Acondicionamiento de intensidad reducida (menor toxicidad pero mayor riesgo de rechazo en algunos protocolos)'],
      clinica: 'Enfermedad del suero: fiebre, artralgias, exantema, en ocasiones proteinuria, típicamente 1-2 semanas después de la globulina antitimocítica. Enfermedad de injerto contra huésped aguda: exantema, diarrea, colestasis, en los primeros 100 días postrasplante. Rechazo/falla de injerto: ausencia o pérdida de la reconstitución hematopoyética esperada tras el trasplante, con pancitopenia persistente.',
      criterios_dx: 'Enfermedad del suero: clínico, en el contexto temporal apropiado tras la globulina antitimocítica. Enfermedad de injerto contra huésped: clínico más biopsia del órgano afectado (piel, tubo digestivo, hígado) si hay duda diagnóstica. Rechazo de injerto: quimerismo hematopoyético (porcentaje de células del donante) por PCR/STR seriado, mostrando pérdida progresiva del quimerismo del donante.',
      laboratorio: 'Quimerismo hematopoyético seriado postrasplante; pruebas de función hepática si hay sospecha de EICH hepática o de enfermedad del suero con afección hepática.',
      imagen: 'Ninguno específico salvo dirigido a la complicación (endoscopia con biopsia si hay sospecha de EICH digestiva).',
      complementarios: 'Ninguno adicional específico.',
      dx_diferencial: 'Infección (puede coexistir o mimetizar tanto la enfermedad del suero como la EICH aguda, siempre debe descartarse activamente antes de atribuir fiebre/exantema exclusivamente a estas complicaciones), toxicidad medicamentosa (particularmente de la propia ciclosporina/tacrolimus).',
      tx_medico: 'Premedicación con corticoide/antihistamínico antes de cada dosis de globulina antitimocítica para reducir el riesgo de enfermedad del suero; profilaxis estándar de EICH (ciclosporina/tacrolimus más metotrexato o ciclofosfamida postrasplante, según el protocolo) en todo trasplante alogénico.',
      tx_farmacologico: 'Corticoide sistémico para la enfermedad del suero significativa; corticoide sistémico como primera línea de la EICH aguda, con inmunosupresión de segunda línea (ruxolitinib, entre otros) si es refractaria; reinducción de inmunosupresión o segundo trasplante si hay rechazo de injerto confirmado, según el contexto clínico.',
      tx_intervencionista: 'Infusión de linfocitos del donante o segundo trasplante en el rechazo de injerto confirmado, según la causa y el contexto clínico específico.',
      criterios_uci: 'EICH aguda grave con compromiso multiorgánico, rechazo de injerto con pancitopenia grave complicada por infección/sangrado.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'El rechazo de injerto confirmado es en sí mismo una indicación de reevaluar un segundo procedimiento (infusión de linfocitos del donante o segundo trasplante).',
      seguimiento_hospitalario: 'Vigilancia clínica y de laboratorio dirigida según la complicación, con umbral bajo para biopsia diagnóstica en la sospecha de EICH.',
      seguimiento_ambulatorio: 'Vigilancia de EICH crónica a largo plazo (piel, ojos, boca, pulmón, hígado, tubo digestivo) en los sobrevivientes al trasplante, con manejo multidisciplinario si se establece.',
      pronostico: 'La enfermedad del suero es autolimitada y de buen pronóstico con tratamiento; la EICH aguda grave y el rechazo de injerto son causas relevantes de morbimortalidad postrasplante, con un pronóstico que depende de la gravedad y la respuesta al tratamiento de rescate.',
      algoritmo: ['Fiebre/artralgias/exantema 1-2 semanas tras globulina antitimocítica → sospechar enfermedad del suero, descartar infección primero', 'Exantema/diarrea/colestasis en los primeros 100 días postrasplante → sospechar EICH aguda, biopsia si hay duda', 'Corticoide sistémico como primera línea de EICH aguda o enfermedad del suero significativa', 'Pancitopenia persistente postrasplante → quimerismo hematopoyético seriado', 'Pérdida de quimerismo del donante → confirma rechazo de injerto', 'Rechazo confirmado → infusión de linfocitos del donante o segundo trasplante']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La vigilancia de infecciones y sangrado, el soporte transfusional restrictivo con hemoderivados irradiados/leucorreducidos, y la aplicación temprana de los criterios de Camitta para definir la urgencia del tratamiento son comunes a las 4 formas de esta sección, con matices específicos de cada una detallados en su propia tarjeta.',
    parametros: [
      'Biometría hemática seriada, con especial atención a la profundidad y tendencia del ANC y las plaquetas.',
      'Vigilancia de fiebre/signos de infección con bajo umbral de sospecha, dada la neutropenia predominantemente cuantitativa y con frecuencia muy profunda.',
      'Vigilancia de sangrado mucocutáneo, con umbral transfusional profiláctico definido según fiebre/procedimientos planeados.',
      'Niveles de ciclosporina y vigilancia de enfermedad del suero si el paciente recibe globulina antitimocítica.',
      'Quimerismo hematopoyético seriado en el paciente postrasplante.'
    ],
    criterios_uci_general: 'Sepsis con datos de choque, sangrado mayor con inestabilidad hemodinámica, EICH aguda grave con compromiso multiorgánico.',
    criterios_tips_general: 'No aplica de forma directa, salvo Budd-Chiari asociado a expansión de una clona de HPN con hipertensión portal refractaria.',
    criterios_trasplante_general: 'Trasplante alogénico de células madre hematopoyéticas: única opción curativa de la falla medular; indicado de primera línea en el paciente joven con hermano HLA-idéntico y enfermedad grave/muy grave (adquirida o congénita), y como alternativa tras falla de inmunosupresión o andrógenos en los demás. Los matices específicos por forma se detallan en cada tarjeta.',
    prevencion: 'Uso racional del soporte transfusional (irradiado, leucorreducido, evitando donantes familiares potenciales) para preservar la elegibilidad a trasplante y minimizar la aloinmunización, estudio de fragilidad cromosómica temprano en todo paciente joven para no exponer una forma congénita no reconocida a inmunosupresión ineficaz o a un acondicionamiento estándar tóxico, y vigilancia de por vida de evolución clonal y de complicaciones tardías del tratamiento definitivo.'
  }
};

export const compCites = {
  'Anemia aplásica adquirida idiopática grave/muy grave': { definicion: [2], tx_farmacologico: [6, 7, 8], criterios_trasplante: [10] },
  'Anemia aplásica no grave': { tx_farmacologico: [7] },
  'Anemia aplásica secundaria': { fisiopatologia: [14] },
  'Anemia aplásica congénita': { fisiopatologia: [13], epidemiologia: [12], tx_intervencionista: [11] },
  'Evolución clonal': { tx_farmacologico: [15] },
  'Complicaciones del trasplante y de la inmunosupresión': { epidemiologia: [10] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Criterios de gravedad de Camitta': [2], 'Criterios diagnósticos generales (de exclusión)': [1]
};
export const escalaCalc = { 'Criterios de gravedad de Camitta': 'camitta' };
export const compGroups = [
  { title: 'Anemia aplásica por forma (enfermedades)', items: ['Anemia aplásica adquirida idiopática grave/muy grave', 'Anemia aplásica no grave', 'Anemia aplásica secundaria', 'Anemia aplásica congénita'] },
  { title: 'Complicaciones transversales (cualquier forma)', items: ['Infecciones por neutropenia profunda', 'Sangrado por trombocitopenia', 'Evolución clonal', 'Complicaciones del trasplante y de la inmunosupresión'] }
];
export const complicacionesIntro = 'El panorama general (epidemiología, etiología, factores de riesgo, fisiopatología) ya se cubrió en Definición. Estas tarjetas son el recurso de consulta con el detalle operativo de cada entidad: diagnóstico diferencial específico, dosis, criterios de UCI/trasplante y el algoritmo paso a paso. El grupo "(enfermedades)" son las 4 formas de anemia aplásica; el grupo "Complicaciones transversales" son eventos que pueden surgir sobre cualquiera de ellas, no diagnósticos independientes.';
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
export const arbol = {
  root: { title: 'ANEMIA APLÁSICA', color: '#8c4a3d', target: 'definicion' },
  branches: [
    { title: 'Adquirida', sub: 'Inmunomediada, responde a IST', color: '#8c3a34', target: 'diagnostico', leaves: [
      { title: 'Idiopática grave/muy grave', sub: 'Trasplante o ATG+ciclosporina+eltrombopag', color: '#8c3a34', target: 'complicaciones' },
      { title: 'No grave', sub: 'Vigilancia expectante', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Secundaria', sub: 'Fármacos, tóxicos, hepatitis seronegativa', color: '#966b35', target: 'complicaciones' }
    ] },
    { title: 'Congénita', sub: 'Defecto intrínseco, NO responde a IST', color: '#5c6b8c', target: 'diagnostico', leaves: [
      { title: 'Anemia de Fanconi', sub: 'Fragilidad cromosómica, andrógenos', color: '#5c6b8c', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1], imagen: [1] };
export const clasificacionCite = [2];
export const seguimientoCite = [1, 3];
