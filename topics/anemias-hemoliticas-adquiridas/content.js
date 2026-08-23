// topics/anemias-hemoliticas-adquiridas/content.js: Anemias Hemolíticas Adquiridas (AHAI caliente,
// AHAI fría, PTT, SHU típico/atípico, HPN). Estructura idéntica al contrato del motor (misma forma
// que anemia-aplasica/anemias-hemoliticas-hereditarias). Sigue la convención de figuras en línea
// (figBlock(), numerada "Tabla N"/"Imagen N" con conteo continuo por tipo).

export const meta = {
  id: 'anemias-hemoliticas-adquiridas',
  titulo: 'Anemias Hemolíticas Adquiridas',
  subtitulo: 'Módulo 12 · Medicina Interna',
  accent: '#6b2d4a',
  accentDim: '#9c5a78'
};

// Reproduce el marcado de .modal-figure (mismo helper que SMD/NMP/miocardiopatías/AA/AHH) para
// insertar figuras EN LÍNEA justo debajo del párrafo/entrada que las menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const imagen1Html = `
<div style="display:flex;gap:16px;max-width:620px;margin:0 auto;flex-wrap:wrap;justify-content:center;">
  <div style="flex:1;min-width:260px;display:flex;flex-direction:column;align-items:center;gap:5px;">
    <div style="font-size:11px;font-weight:700;color:#8c3a34;text-align:center;">AHAI CALIENTE (IgG, 37°C)</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">IgG se une al eritrocito a temperatura corporal</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Macrófagos esplénicos (receptores Fc-γ) fagocitan membrana/eritrocito</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Esferocitos + hemólisis EXTRAVASCULAR esplénica</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:#3f6b5233;border:1px solid #3f6b52;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Coombs directa: IgG positivo (± C3d)</div>
  </div>
  <div style="flex:1;min-width:260px;display:flex;flex-direction:column;align-items:center;gap:5px;">
    <div style="font-size:11px;font-weight:700;color:#3d5a73;text-align:center;">AHAI FRÍA (IgM, &lt;37°C)</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">IgM se une al eritrocito en la circulación acra fría</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Fija complemento de forma muy eficiente (estructura pentamérica)</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:#3d5a7333;border:1px solid #3d5a73;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Hemólisis INTRAVASCULAR (C5b-9) + hepática (Kupffer, receptor C3b)</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:#3f6b5233;border:1px solid #3f6b52;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Coombs directa: SOLO C3d positivo (el IgM se disocia en frío)</div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Las anemias hemolíticas adquiridas son un grupo heterogéneo de trastornos en los que un eritrocito estructural y funcionalmente normal es destruido de forma prematura por un mecanismo extrínseco (inmunológico, mecánico o clonal), a diferencia de las anemias hemolíticas hereditarias, donde el defecto es intrínseco al propio eritrocito (ver ese tema). Comprende 3 grandes categorías con mecanismos y tratamientos radicalmente distintos: la anemia hemolítica autoinmune (AHAI) caliente (mediada por IgG, destrucción extravascular esplénica) y fría (mediada por IgM/complemento, destrucción predominantemente hepática e intravascular); la microangiopatía trombótica (destrucción mecánica por fragmentación en una microvasculatura ocluida por microtrombos, con la púrpura trombocitopénica trombótica -PTT- y el síndrome hemolítico urémico -SHU- como sus 2 formas principales); y la hemoglobinuria paroxística nocturna (HPN), una neoplasia clonal adquirida de la célula madre hematopoyética que produce eritrocitos anormalmente sensibles a la lisis mediada por complemento. La prueba de antiglobulina directa (Coombs directa) es el primer paso diagnóstico obligado: separa las causas inmunomediadas (Coombs positiva) de las no inmunomediadas (Coombs negativa: microangiopatía, HPN).</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La AHAI caliente tiene una incidencia de ~1-3 casos por 100,000 habitantes al año y es la forma más frecuente de AHAI (~70-80%); la AHAI fría es más rara, con predominio en mayores de 50 años (enfermedad por crioaglutininas idiopática) o en jóvenes tras una infección (Mycoplasma, virus de Epstein-Barr, forma aguda transitoria). La PTT tiene una incidencia de ~2-6 casos por millón de habitantes al año, con predominio femenino marcado y pico entre 30-50 años; el SHU típico predomina en niños tras diarrea por E. coli productor de toxina Shiga. La HPN es rara (~1-10 casos por millón), y puede presentarse a cualquier edad.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>AHAI caliente</strong>: primaria/idiopática (~50%) o secundaria (lupus eritematoso sistémico, síndrome de Evans -asociación con púrpura trombocitopénica inmune-, leucemia linfocítica crónica, linfoma, fármacos como metildopa/penicilinas/cefalosporinas).</li>
    <li><strong>AHAI fría</strong>: enfermedad por crioaglutininas (idiopática/clonal B de bajo grado, o secundaria a linfoma linfoplasmocítico/Waldenström), forma aguda postinfecciosa (Mycoplasma pneumoniae -anti-I-, mononucleosis por virus de Epstein-Barr -anti-i-), hemoglobinuria paroxística a frigore (anticuerpo de Donath-Landsteiner, IgG bifásico, clásicamente postviral en niños).</li>
    <li><strong>Microangiopatía trombótica</strong>: PTT (deficiencia adquirida autoinmune de ADAMTS13, o congénita -síndrome de Upshaw-Schulman, más rara), SHU típico (toxina Shiga de E. coli enterohemorrágico), SHU atípico (desregulación del complemento por mutaciones de reguladores como factor H/I/MCP o autoanticuerpos anti-factor H).</li>
    <li><strong>Hemoglobinuria paroxística nocturna</strong>: mutación somática adquirida de PIGA en una célula madre hematopoyética, con pérdida de proteínas ancladas a GPI (CD55, CD59) que normalmente inhiben el complemento.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Enfermedad autoinmune sistémica de base (lupus eritematoso sistémico, síndrome de Evans)</li>
    <li>Neoplasia linfoproliferativa (leucemia linfocítica crónica, linfoma linfoplasmocítico)</li>
    <li>Fármacos específicos (metildopa, penicilinas, cefalosporinas)</li>
    <li>Infección reciente (Mycoplasma, virus de Epstein-Barr, gastroenteritis por E. coli enterohemorrágico)</li>
    <li>Embarazo/puerperio (desencadenante de PTT y de trombosis en HPN)</li>
    <li>Antecedente de anemia aplásica (mayor probabilidad de clona de HPN, ver ese tema)</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> En la AHAI caliente, autoanticuerpos IgG se unen a antígenos de membrana eritrocitaria a 37°C y son reconocidos por receptores Fc de macrófagos esplénicos, que fagocitan porciones de membrana (generando esferocitos) o el eritrocito completo (hemólisis extravascular). En la AHAI fría, autoanticuerpos IgM (o IgG bifásico en la hemoglobinuria a frigore) se unen a antígenos eritrocitarios a temperaturas bajas, fijan complemento de forma muy eficiente, y producen tanto hemólisis intravascular directa (complejo de ataque de membrana C5b-9) como extravascular hepática (receptores para C3b en células de Kupffer).${figBlock('Imagen 1', 'Coombs directa: caliente vs. fría', imagen1Html)} En la microangiopatía trombótica, la formación de microtrombos (plaquetarios en la PTT por multímeros ultragrandes de factor de von Willebrand no clivados por ADAMTS13 deficiente; de fibrina/plaquetas por daño endotelial en el SHU) ocluye parcialmente la microvasculatura, fragmentando mecánicamente a los eritrocitos que la atraviesan (esquistocitos) y consumiendo plaquetas. En la HPN, la ausencia de CD55 (inhibidor de la convertasa C3) y CD59 (inhibidor del complejo de ataque de membrana) en la superficie del eritrocito clonal permite la activación descontrolada del complemento y la lisis intravascular directa, además de un estado protrombótico marcado por mecanismos independientes de la hemólisis (activación plaquetaria, consumo de óxido nítrico por la hemoglobina libre).</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde hemólisis leve compensada (fatiga, ictericia leve) hasta hemólisis fulminante con choque, insuficiencia renal aguda y trombosis en sitios atípicos; el patrón de hemólisis (predominio extravascular con esplenomegalia e hiperbilirrubinemia vs. predominio intravascular con hemoglobinuria/hemoglobinemia) y los hallazgos del frotis (esferocitos vs. aglutinación vs. esquistocitos) orientan rápidamente hacia el mecanismo subyacente, detallado en Diagnóstico y en cada tarjeta de Complicaciones.</p>`;

export const bibliografia = [
  'Zanella A, Barcellini W. Treatment of autoimmune hemolytic anemias. Haematologica. 2014;99(10):1547-1554.',
  'Barcellini W, Fattizzo B. How I treat warm autoimmune hemolytic anemia. Blood. 2021;137(10):1283-1294.',
  'Berentsen S, Barcellini W. Autoimmune Hemolytic Anemias. N Engl J Med. 2021;385(15):1407-1419.',
  'Berentsen S, Röth A, Randen U, et al. Cold agglutinin disease: current challenges and future prospects. J Blood Med. 2019;10:93-103.',
  'Röth A, Berentsen S, Barcellini W, et al. Sutimlimab in cold agglutinin disease. N Engl J Med. 2021;384(14):1323-1334.',
  'George JN, Nester CM. Syndromes of thrombotic microangiopathy. N Engl J Med. 2014;371(7):654-666.',
  'Bendapudi PK, Hurwitz S, Fry A, et al. Derivation and external validation of the PLASMIC score. Lancet Haematol. 2017;4(4):e157-e164.',
  'Scully M, Hunt BJ, Benjamin S, et al. Guidelines on the diagnosis and management of thrombotic thrombocytopenic purpura. Br J Haematol. 2012;158(3):323-335.',
  'Zheng XL, Vesely SK, Cataland SR, et al. ISTH guidelines for the diagnosis and treatment of TTP. J Thromb Haemost. 2020;18(10):2496-2502.',
  'Loirat C, Fakhouri F, Ariceta G, et al. An international consensus approach to the management of atypical hemolytic uremic syndrome in children. Pediatr Nephrol. 2016;31(1):15-39.',
  'Fakhouri F, Zuber J, Frémeaux-Bacchi V, Loirat C. Haemolytic uraemic syndrome. Lancet. 2017;390(10095):681-696.',
  'Legendre CM, Licht C, Muus P, et al. Terminal complement inhibitor eculizumab in atypical hemolytic-uremic syndrome. N Engl J Med. 2013;368(23):2169-2181.',
  'Brodsky RA. Paroxysmal nocturnal hemoglobinuria. Blood. 2014;124(18):2804-2811.',
  'Hillmen P, Muus P, Röth A, et al. Long-term safety and efficacy of eculizumab in paroxysmal nocturnal haemoglobinuria. Br J Haematol. 2013;162(1):62-73.',
  'Kulasekararaj AG, Hill A, Rottinghaus ST, et al. Ravulizumab (ALXN1210) vs eculizumab in paroxysmal nocturnal hemoglobinuria. Blood. 2019;133(6):540-549.',
  'Garratty G. Immune hemolytic anemia associated with drug therapy. Blood Rev. 2010;24(4-5):143-150.'
];

const imagen2Svg = `
<svg viewBox="0 0 560 260" role="img" aria-labelledby="mat-title mat-desc" style="width:100%;max-width:480px;display:block;margin:0 auto;">
  <title id="mat-title">Cómo se forma un esquistocito</title>
  <desc id="mat-desc">Comparación esquemática de un microvaso normal, con un eritrocito intacto atravesándolo, frente a un microvaso parcialmente ocluido por microtrombos plaquetarios/de fibrina, donde el eritrocito se fragmenta mecánicamente en esquistocitos al pasar.</desc>
  <line x1="280" y1="10" x2="280" y2="250" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
  <text x="140" y="24" text-anchor="middle" fill="var(--accent-fg)" font-size="12.5" font-weight="700">MICROVASO NORMAL</text>
  <text x="420" y="24" text-anchor="middle" fill="var(--accent-fg)" font-size="12.5" font-weight="700">MICROVASO CON MICROTROMBOS</text>
  <g>
    <rect x="30" y="70" width="220" height="70" rx="10" fill="var(--panel)" stroke="var(--ink)" stroke-width="2.5"/>
    <ellipse cx="90" cy="105" rx="18" ry="11" fill="#8c3a34" stroke="var(--ink)" stroke-width="1"/>
    <ellipse cx="150" cy="105" rx="18" ry="11" fill="#8c3a34" stroke="var(--ink)" stroke-width="1"/>
    <ellipse cx="210" cy="105" rx="18" ry="11" fill="#8c3a34" stroke="var(--ink)" stroke-width="1"/>
    <path d="M100 105 L140 105" stroke="var(--ink-dim)" stroke-width="1.5" marker-end="url(#arr1)"/>
    <text x="140" y="168" text-anchor="middle" fill="var(--ink-dim)" font-size="10">Eritrocito intacto atraviesa</text>
    <text x="140" y="181" text-anchor="middle" fill="var(--ink-dim)" font-size="10">la luz sin obstáculo</text>
  </g>
  <g transform="translate(280,0)">
    <rect x="30" y="70" width="220" height="70" rx="10" fill="var(--panel)" stroke="var(--ink)" stroke-width="2.5"/>
    <ellipse cx="80" cy="105" rx="16" ry="10" fill="#8c3a34" stroke="var(--ink)" stroke-width="1"/>
    <g stroke="#5c3d5c" stroke-width="2" opacity="0.85">
      <line x1="125" y1="80" x2="150" y2="130"/>
      <line x1="140" y1="78" x2="118" y2="132"/>
      <line x1="155" y1="82" x2="132" y2="128"/>
      <line x1="148" y1="76" x2="165" y2="134"/>
      <circle cx="135" cy="90" r="4" fill="#5c3d5c"/>
      <circle cx="150" cy="105" r="4" fill="#5c3d5c"/>
      <circle cx="130" cy="118" r="4" fill="#5c3d5c"/>
      <circle cx="158" cy="118" r="4" fill="#5c3d5c"/>
    </g>
    <path d="M195 96 L210 96 L200 108 Z" fill="#8c3a34" stroke="var(--ink)" stroke-width="1"/>
    <path d="M205 112 L222 118 L212 128 L198 122 Z" fill="#8c3a34" stroke="var(--ink)" stroke-width="1"/>
    <text x="140" y="168" text-anchor="middle" fill="var(--ink-dim)" font-size="10">La malla de fibrina/plaquetas</text>
    <text x="140" y="181" text-anchor="middle" fill="var(--ink-dim)" font-size="10">fragmenta al eritrocito → esquistocitos</text>
  </g>
  <defs>
    <marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--ink-dim)"/></marker>
  </defs>
</svg>`;

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Hemólisis compensada / crónica',
      tituloB: 'Hemólisis descompensada / urgencia hematológica',
      compensada: 'Fatiga, ictericia leve-moderada de instalación subaguda, esplenomegalia palpable con frecuencia en la AHAI caliente (destrucción esplénica del eritrocito recubierto de IgG); acrocianosis/fenómeno de Raynaud desencadenado por el frío en la AHAI fría, con esplenomegalia leve o ausente (destrucción predominantemente hepática). Los síntomas de la enfermedad autoinmune o linfoproliferativa de base (si secundaria) pueden preceder o acompañar al cuadro hemolítico.',
      descompensada: 'Orina oscura (hemoglobinuria, "en Coca-Cola" o "vino de Oporto"), dolor lumbar/en flancos, fiebre, y en los casos graves choque e insuficiencia renal aguda por el efecto tóxico directo de la hemoglobina libre sobre el túbulo renal (ver Complicaciones); en la microangiopatía trombótica se agregan síntomas neurológicos fluctuantes (PTT) o insuficiencia renal aguda predominante (SHU); en la HPN, dolor abdominal/espasmo esofágico y trombosis en sitios atípicos (venas hepáticas/porta, senos venosos cerebrales) son característicos.'
    },
    laboratorio: [
      { prueba: 'Panel de hemólisis general (LDH, haptoglobina, bilirrubina indirecta, reticulocitos)', utilidad: 'Confirma el diagnóstico sindrómico de hemólisis, común a las 5 formas de esta sección; la magnitud de la elevación de LDH y el patrón (haptoglobina indetectable en la hemólisis intravascular) orientan hacia el mecanismo.' },
      { prueba: 'Prueba de antiglobulina directa (Coombs directa), con panel específico IgG/C3d', utilidad: 'Bifurcación diagnóstica central: positiva para IgG (± C3d) en la AHAI caliente, positiva SOLO para C3d en la AHAI fría, negativa en la microangiopatía trombótica y en la HPN (ver Escalas).' },
      { prueba: 'Frotis de sangre periférica', utilidad: `Esferocitos en la AHAI caliente, aglutinación eritrocitaria a temperatura ambiente que se revierte al calentar en la AHAI fría, esquistocitos abundantes con trombocitopenia en la microangiopatía trombótica (PTT/SHU), sin hallazgo morfológico específico en la HPN.${figBlock('Imagen 2', 'Cómo se forma un esquistocito', imagen2Svg)}` },
      { prueba: 'Título de crioaglutininas con especificidad térmica', utilidad: 'Confirma y cuantifica la AHAI fría; una amplitud térmica más cercana a 37°C predice mayor gravedad clínica.' },
      { prueba: 'Actividad de ADAMTS13, con autoanticuerpo inhibidor', utilidad: '&lt;10% confirma PTT de forma definitiva; no gravemente deficiente en el SHU, lo que ayuda a diferenciarlos mientras se espera el resultado (apoyado por el PLASMIC score, ver Escalas).' },
      { prueba: 'Citometría de flujo de alta sensibilidad con FLAER', utilidad: 'Estándar diagnóstico actual de la HPN; cuantifica el tamaño de la clona deficiente en proteínas ancladas a GPI en granulocitos, monocitos y eritrocitos.' }
    ],
    no_invasivos: [
      { metodo: 'PLASMIC score (con calculadora)', interpretacion: 'Estima la probabilidad de deficiencia grave de ADAMTS13 (&lt;10%) antes de tener el resultado del ensayo, permitiendo decidir el inicio urgente de plasmaféresis en la sospecha de PTT sin demora.', cutoff: '0-4: bajo riesgo · 5: riesgo intermedio · 6-7: alto riesgo' },
      { metodo: 'Panel autoinmune (ANA, anti-DNA de doble cadena)', interpretacion: 'Orienta hacia lupus eritematoso sistémico como causa secundaria de AHAI caliente si es positivo.', cutoff: 'N/A' },
      { metodo: 'Serología de Mycoplasma pneumoniae / virus de Epstein-Barr', interpretacion: 'Apoya el diagnóstico de AHAI fría postinfecciosa aguda en un cuadro de instalación reciente en un paciente joven.', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'Ecografía abdominal', hallazgos: 'Esplenomegalia (más marcada en la AHAI caliente que en la fría), colelitiasis pigmentaria en el curso crónico de cualquiera de estas entidades.' },
      { modalidad: 'Angio-TC / angio-RM dirigida', hallazgos: 'Sitio de trombosis sospechado en la HPN (venas hepáticas/porta, senos venosos cerebrales, ver Complicaciones).' },
      { modalidad: 'RM cerebral', hallazgos: 'Ante síntomas neurológicos persistentes en la PTT, sin retrasar nunca el inicio de la plasmaféresis por esperar el estudio de imagen.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'El panel de Coombs directa (IgG vs. C3d vs. negativo) es la primera bifurcación diagnóstica de toda esta sección; el PLASMIC score estratifica el riesgo de deficiencia grave de ADAMTS13 en la microangiopatía trombótica antes de tener el resultado del ensayo (que puede tardar días), permitiendo iniciar plasmaféresis sin demora en el paciente de alto riesgo.',
    escalas: [
      { nombre: 'Panel de Coombs directa (IgG/C3d)', componentes: 'Reactividad frente a antisuero polivalente, y frente a antisueros monoespecíficos anti-IgG y anti-C3d por separado.', formula: 'Categórico: IgG positivo (± C3d) / SOLO C3d positivo / negativo.', interpretacion: 'IgG (± C3d) positivo → AHAI caliente. SOLO C3d positivo → AHAI fría (el IgM se disocia a temperatura ambiente antes de la prueba). Negativo → descarta mecanismo autoinmune; orienta hacia microangiopatía trombótica o HPN.' },
      { nombre: 'PLASMIC score', componentes: 'Plaquetas &lt;30×10⁹/L, datos combinados de hemólisis (reticulocitos &gt;2.5%, haptoglobina indetectable o bilirrubina indirecta &gt;2 mg/dL), ausencia de cáncer activo, ausencia de trasplante previo, VCM &lt;90 fL, INR &lt;1.5, creatinina &lt;2.0 mg/dL (1 punto cada criterio presente). Calculadora disponible más abajo.', formula: '0-7 puntos.', interpretacion: '0-4: bajo riesgo (~0-4% de probabilidad de ADAMTS13 &lt;10%). 5: riesgo intermedio (~5-24%). 6-7: alto riesgo (~62-82%); apoya iniciar plasmaféresis urgente sin esperar el resultado de ADAMTS13.' },
      { nombre: 'Criterios diagnósticos de HPN por citometría de flujo (FLAER)', componentes: 'Proporción de granulocitos y monocitos deficientes en proteínas ancladas a GPI (FLAER negativo), sobre una población de al menos 2 tipos celulares para mayor especificidad.', formula: 'Categórico por tamaño de clona (clínicamente significativo con frecuencia &gt;10% en granulocitos).', interpretacion: 'Clona pequeña (&lt;10%): con frecuencia asintomática, vigilancia periódica. Clona grande con hemólisis/trombosis: enfermedad sintomática, indicación de inhibidor del complemento (ver esa tarjeta en Complicaciones).' },
      { nombre: 'SHU típico vs. atípico: diferencial clave', componentes: 'Pródromo diarreico, coprocultivo/toxina Shiga, estudio genético del complemento, respuesta a eculizumab.', formula: 'Diferencial clínico-analítico, sin puntaje numérico.', interpretacion: 'Típico: pródromo de diarrea sanguinolenta, toxina Shiga positiva, curso habitualmente autolimitado con soporte. Atípico: sin pródromo diarreico característico, mutación/autoanticuerpo del complemento, curso recurrente que requiere inhibidor del complemento dirigido.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Anemia hemolítica autoinmune caliente',
      color: '#8c3a34',
      definicion: 'Anemia hemolítica autoinmune mediada por autoanticuerpos IgG que se unen a antígenos de membrana eritrocitaria a 37°C, produciendo destrucción predominantemente extravascular esplénica; la más frecuente de las AHAI (~70-80% de los casos), primaria/idiopática en aproximadamente la mitad de los casos o secundaria a enfermedad autoinmune sistémica, neoplasia linfoproliferativa o fármacos.',
      fisiopatologia: 'Autoanticuerpos IgG (con o sin fijación de complemento hasta C3b, sin llegar habitualmente a formar el complejo de ataque de membrana completo) se unen a antígenos de membrana eritrocitaria (con frecuencia del sistema Rh) a temperatura corporal. Los macrófagos esplénicos, ricos en receptores Fc-gamma, reconocen la porción Fc del IgG unido y fagocitan porciones de la membrana eritrocitaria (generando esferocitos por pérdida de superficie relativa) o el eritrocito completo, en un proceso de hemólisis extravascular predominantemente esplénica.',
      epidemiologia: 'Incidencia ~1-3 casos por 100,000 habitantes al año, la forma más frecuente de AHAI (~70-80%); puede presentarse a cualquier edad. La forma secundaria a lupus eritematoso sistémico o síndrome de Evans predomina en mujeres jóvenes, mientras que la secundaria a leucemia linfocítica crónica/linfoma predomina en mayores.',
      factores_riesgo: ['Lupus eritematoso sistémico y otras enfermedades autoinmunes sistémicas', 'Leucemia linfocítica crónica y linfoma no Hodgkin (particularmente linfoma linfoplasmocítico)', 'Síndrome de Evans (AHAI + trombocitopenia inmune, con o sin neutropenia inmune)', 'Fármacos (metildopa -clásico-, penicilinas, cefalosporinas)'],
      clinica: 'Fatiga y disnea de esfuerzo de instalación subaguda, ictericia leve-moderada, esplenomegalia palpable con frecuencia; los síntomas de la enfermedad autoinmune o linfoproliferativa de base pueden preceder o acompañar al cuadro hemolítico. La hemólisis grave de instalación rápida puede producir orina oscura y, en casos extremos, compromiso hemodinámico.',
      criterios_dx: 'Anemia hemolítica (LDH elevada, haptoglobina baja, bilirrubina indirecta elevada, reticulocitosis) más prueba de antiglobulina directa positiva para IgG (con o sin C3d), tras excluir otras causas de Coombs positivo.',
      laboratorio: 'Coombs directa positiva para IgG ± C3d (panel específico IgG/C3d, ver Escalas); frotis de sangre periférica con esferocitos; título/especificidad del autoanticuerpo mediante eluido si hay dificultad transfusional (ver Complicaciones).',
      imagen: 'Ecografía abdominal si se sospecha esplenomegalia clínicamente relevante; sin estudio de imagen diagnóstico obligatorio.',
      complementarios: 'Panel autoinmune (ANA, anti-DNA de doble cadena) si hay sospecha de lupus eritematoso sistémico; inmunofenotipo de sangre periférica/TC de estadificación si hay sospecha de leucemia linfocítica crónica/linfoma de base; interrogatorio farmacológico dirigido.',
      dx_diferencial: 'AHAI fría (Coombs directa positiva SOLO para C3d, sin IgG; ver esa tarjeta), microangiopatía trombótica (Coombs directa negativa, esquistocitos en vez de esferocitos, ver esas tarjetas), esferocitosis hereditaria (Coombs directa negativa, antecedente familiar; ver el tema de Anemias Hemolíticas Hereditarias).',
      tx_medico: 'Ácido fólico suplementario dado el recambio eritrocitario acelerado; transfusión de concentrado eritrocitario en la anemia sintomática grave pese a la dificultad de encontrar unidades verdaderamente compatibles (ver Complicaciones), sin retrasar la transfusión ante una anemia sintomática grave por el resultado del estudio inmunohematológico completo.',
      tx_farmacologico: 'Corticoide sistémico (prednisona) como primera línea, con tasas de respuesta inicial elevadas aunque con recaída frecuente al reducir la dosis; rituximab como segunda línea de elección (respuesta sostenida superior a la inmunosupresión clásica en varios ensayos), con azatioprina/micofenolato/ciclosporina como alternativas en la enfermedad refractaria; tratamiento de la enfermedad autoinmune o linfoproliferativa de base si es secundaria.',
      tx_intervencionista: 'Esplenectomía como opción en la enfermedad refractaria a corticoide y rituximab, dado que el bazo es el sitio predominante de destrucción extravascular en esta forma (a diferencia de la fría, donde la esplenectomía es poco eficaz, ver esa tarjeta).',
      criterios_uci: 'Hemólisis fulminante con compromiso hemodinámico, angina hemolítica (isquemia miocárdica secundaria a anemia grave de instalación rápida).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica (no es una enfermedad de la célula madre hematopoyética).',
      seguimiento_hospitalario: 'Vigilancia de la respuesta hematológica a corticoide, coordinación estrecha con el banco de sangre ante dificultad transfusional (ver Complicaciones).',
      seguimiento_ambulatorio: 'Reducción gradual del corticoide guiada por la respuesta hematológica, vigilancia de recaída, estudio y seguimiento de la enfermedad de base si es secundaria.',
      pronostico: 'Favorable en la mayoría de los casos con corticoide y/o rituximab; la enfermedad secundaria a neoplasia linfoproliferativa sigue, en gran medida, el curso de la enfermedad de base.',
      algoritmo: ['Anemia hemolítica + Coombs directa positiva para IgG (±C3d) → confirma AHAI caliente', 'Descartar causa secundaria (lupus, LLC/linfoma, fármacos) con panel autoinmune/inmunofenotipo/historia farmacológica', 'Corticoide sistémico como primera línea', 'Falla o recaída al reducir dosis → rituximab como segunda línea', 'Refractaria a corticoide y rituximab → esplenectomía o inmunosupresión alternativa']
    },
    {
      nombre: 'Anemia hemolítica autoinmune fría',
      color: '#3d5a73',
      definicion: 'Anemia hemolítica autoinmune mediada por autoanticuerpos IgM (enfermedad por crioaglutininas) o, con menor frecuencia, por un IgG bifásico particular (hemoglobinuria paroxística a frigore, anticuerpo de Donath-Landsteiner), que se unen a antígenos eritrocitarios a temperaturas por debajo de la corporal central y fijan complemento de forma eficiente, produciendo hemólisis tanto intravascular como extravascular hepática.',
      fisiopatologia: 'En la enfermedad por crioaglutininas, un autoanticuerpo IgM monoclonal (idiopático/clonal de bajo grado) o policlonal (postinfeccioso) se une a antígenos eritrocitarios (con frecuencia antígeno I) en la circulación periférica/acra, donde la temperatura es menor, y fija complemento de forma muy eficiente por su estructura pentamérica; el complejo de ataque de membrana (C5b-9) produce hemólisis intravascular directa, mientras que los eritrocitos opsonizados con C3b son fagocitados por receptores para C3b en las células de Kupffer hepáticas. En la hemoglobinuria paroxística a frigore, un IgG bifásico (anticuerpo de Donath-Landsteiner, dirigido contra el antígeno P) se une al eritrocito en la periferia fría y fija complemento, pero la hemólisis se completa al recalentar el eritrocito a temperatura corporal central.',
      epidemiologia: 'Más rara que la forma caliente; la enfermedad por crioaglutininas idiopática predomina en mayores de 50 años, mientras que la forma postinfecciosa aguda (Mycoplasma pneumoniae -anti-I-, mononucleosis infecciosa por virus de Epstein-Barr -anti-i-) predomina en niños/adultos jóvenes y es típicamente autolimitada; la hemoglobinuria paroxística a frigore se ve sobre todo en niños tras una infección viral inespecífica.',
      factores_riesgo: ['Edad mayor de 50 años (enfermedad por crioaglutininas idiopática/clonal)', 'Linfoma linfoplasmocítico/macroglobulinemia de Waldenström u otra neoplasia linfoproliferativa B de bajo grado', 'Infección reciente por Mycoplasma pneumoniae o virus de Epstein-Barr', 'Exposición al frío (desencadena o agrava los episodios hemolíticos y la acrocianosis)'],
      clinica: 'Acrocianosis y fenómeno de Raynaud desencadenados por el frío (por aglutinación eritrocitaria en la microcirculación acra, no un fenómeno vasoespástico primario), hemólisis que empeora con la exposición al frío, orina oscura en los episodios de hemólisis intravascular; esplenomegalia leve o ausente. La hemoglobinuria paroxística a frigore se presenta como episodios agudos de hemoglobinuria tras la exposición al frío, con resolución completa entre episodios.',
      criterios_dx: 'Anemia hemolítica más Coombs directa positiva SOLO para C3d (sin IgG) más título de crioaglutininas elevado (habitualmente ≥1:64) con especificidad térmica amplia; la hemoglobinuria paroxística a frigore se confirma con la prueba de Donath-Landsteiner (hemólisis bifásica: fijación del anticuerpo en frío, hemólisis al recalentar).',
      laboratorio: `Coombs directa positiva solo para C3d (panel IgG/C3d, ver Escalas); título de crioaglutininas con determinación de la amplitud térmica; frotis de sangre periférica con aglutinación eritrocitaria visible a temperatura ambiente, que se revierte al calentar la muestra (un artefacto de laboratorio reconocible que puede simular falsamente una pseudo-macrocitosis/pseudo-trombocitopenia si no se identifica).${figBlock('Imagen 3', 'Aglutinación por crioaglutininas: temperatura ambiente vs. 37°C', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Cold_agglutinin_disease_-_macroscopic_agglutination_on_blood_smear.jpg/960px-Cold_agglutinin_disease_-_macroscopic_agglutination_on_blood_smear.jpg" alt="Dos frotis de sangre del mismo paciente con enfermedad por crioaglutininas: a temperatura ambiente (izquierda), con aglutinación eritrocitaria marcada de aspecto granular, y tras incubar a 37°C (derecha), donde la aglutinación se atenúa." style="width:100%;max-width:480px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Frotis del mismo paciente a temperatura ambiente (aglutinación marcada, aspecto granular) y tras incubar a 37°C (aglutinación atenuada), el fundamento visual del artefacto de laboratorio. Spicy, Wikimedia Commons, CC BY-SA 4.0.</p>`)}`,
      imagen: 'Sin estudio de imagen diagnóstico obligatorio; estudios de estadificación (TC, inmunofenotipo de sangre periférica/médula ósea) si se sospecha linfoma linfoplasmocítico de base.',
      complementarios: 'Serología de Mycoplasma pneumoniae y virus de Epstein-Barr si el cuadro es agudo y postinfeccioso; electroforesis de proteínas séricas con inmunofijación si se sospecha una gammapatía monoclonal/linfoma linfoplasmocítico de base en la forma idiopática crónica del adulto mayor.',
      dx_diferencial: 'AHAI caliente (Coombs directa positiva para IgG, esferocitos en vez de aglutinación, ver esa tarjeta), fenómeno de Raynaud primario (sin hemólisis ni Coombs positivo), microangiopatía trombótica (Coombs directa negativa, ver esas tarjetas).',
      tx_medico: 'Evitar activamente la exposición al frío (la medida más simple y eficaz para reducir la frecuencia/gravedad de los episodios), incluyendo evitar líquidos intravenosos o hemoderivados fríos; en la forma postinfecciosa aguda, manejo de soporte con resolución espontánea esperada en semanas.',
      tx_farmacologico: 'Rituximab (en monoterapia o combinado con bendamustina) como tratamiento de elección en la enfermedad por crioaglutininas sintomática crónica; sutimlimab (inhibidor del complemento dirigido a C1s) como opción dirigida más reciente en la enfermedad refractaria; el corticoide y la esplenectomía tienen eficacia limitada en esta forma, a diferencia de la caliente, porque la destrucción es predominantemente hepática (vía Kupffer) y mediada por complemento, no por receptores Fc esplénicos.',
      tx_intervencionista: 'Esplenectomía NO recomendada de rutina, dada su escasa eficacia en esta forma (destrucción predominantemente hepática, no esplénica).',
      criterios_uci: 'Hemólisis fulminante con compromiso hemodinámico (infrecuente).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Medidas de protección térmica activa (calentar líquidos intravenosos y hemoderivados, mantener al paciente abrigado) durante cualquier hospitalización o procedimiento.',
      seguimiento_ambulatorio: 'Vigilancia de evolución a linfoma linfoplasmocítico franco en la forma idiopática crónica, educación sobre evitación del frío.',
      pronostico: 'La forma postinfecciosa aguda es autolimitada, con resolución en semanas; la enfermedad por crioaglutininas idiopática crónica del adulto mayor tiene un curso indolente pero persistente, con buena respuesta a rituximab en la mayoría de los casos.',
      algoritmo: ['Anemia hemolítica + acrocianosis/empeoramiento con el frío → sospechar AHAI fría', 'Coombs directa positiva SOLO para C3d + título de crioaglutininas elevado → confirma enfermedad por crioaglutininas', 'Evitar la exposición al frío como primera medida', 'Sintomática/crónica → rituximab (± bendamustina) como tratamiento de elección', 'Evitar corticoide/esplenectomía como tratamiento principal (eficacia limitada en esta forma)']
    },
    {
      nombre: 'Púrpura trombocitopénica trombótica (PTT)',
      color: '#5c3d5c',
      definicion: 'Microangiopatía trombótica producida por una deficiencia grave (&lt;10%) de la actividad de ADAMTS13, la metaloproteasa que fragmenta los multímeros ultragrandes del factor de von Willebrand; sin ese clivaje, estos multímeros promueven la formación espontánea de microtrombos plaquetarios en la microcirculación. La forma adquirida (autoinmune, por autoanticuerpo inhibidor contra ADAMTS13) es la más frecuente; la forma congénita (síndrome de Upshaw-Schulman) es rara.',
      fisiopatologia: 'La deficiencia grave de ADAMTS13 (autoinmune en la mayoría de los casos adquiridos; genética en el síndrome de Upshaw-Schulman) impide el clivaje fisiológico de los multímeros ultragrandes del factor de von Willebrand liberados por el endotelio. Estos multímeros no clivados se unen a las plaquetas de forma espontánea y forman microtrombos ricos en plaquetas (a diferencia de los microtrombos predominantemente de fibrina de la coagulación intravascular diseminada) que ocluyen parcialmente la microcirculación de múltiples órganos, con predominio característico del sistema nervioso central; los eritrocitos que atraviesan esta microvasculatura parcialmente ocluida se fragmentan mecánicamente (esquistocitos), y el consumo plaquetario en la formación de los microtrombos produce trombocitopenia grave.',
      epidemiologia: 'Incidencia baja (~2-6 casos por millón de habitantes al año), predominio femenino marcado, pico de edad entre 30-50 años; es una urgencia médica con mortalidad cercana al 90% sin tratamiento oportuno, reducida a &lt;10-20% con plasmaféresis iniciada precozmente.',
      factores_riesgo: ['Sexo femenino', 'Embarazo/puerperio (desencadenante reconocido de un episodio)', 'Infección concurrente', 'Enfermedad autoinmune sistémica de base (asociación con lupus eritematoso sistémico)', 'Antecedente de un episodio previo de PTT (riesgo de recaída)'],
      clinica: 'La péntada clásica (anemia hemolítica microangiopática, trombocitopenia, síntomas neurológicos fluctuantes, fiebre, disfunción renal) es infrecuente completa en la presentación actual; la tríada de anemia hemolítica microangiopática + trombocitopenia grave + síntomas neurológicos fluctuantes (cefalea, confusión, convulsiones, déficit focal transitorio) sin otra causa que los explique debe hacer sospechar el diagnóstico de forma urgente, sin esperar el resultado de ADAMTS13 para iniciar tratamiento.',
      criterios_dx: 'Anemia hemolítica microangiopática (esquistocitos abundantes, LDH muy elevada, haptoglobina indetectable) más trombocitopenia grave, con Coombs directa negativa, en ausencia de otra causa evidente de microangiopatía; el PLASMIC score (ver Escalas, con calculadora) estima la probabilidad de deficiencia grave de ADAMTS13 antes de tener el resultado del ensayo, permitiendo decidir el inicio urgente de plasmaféresis; la actividad de ADAMTS13 &lt;10% confirma el diagnóstico de forma definitiva.',
      laboratorio: 'Esquistocitos abundantes (&gt;1% del campo) en el frotis de sangre periférica (ver Imagen 2 en Diagnóstico), LDH muy elevada, haptoglobina indetectable, trombocitopenia grave (con frecuencia &lt;30,000/µL), Coombs directa negativa, actividad de ADAMTS13 &lt;10% (más autoanticuerpo inhibidor positivo en la forma adquirida); tiempos de coagulación (TP, TTPa, fibrinógeno) característicamente normales, a diferencia de la coagulación intravascular diseminada.',
      imagen: 'RM cerebral si hay síntomas neurológicos persistentes, aunque el diagnóstico y el inicio del tratamiento nunca deben retrasarse por estudios de imagen.',
      complementarios: 'PLASMIC score al ingreso (ver Escalas); envío urgente de la muestra para actividad de ADAMTS13 y autoanticuerpo inhibidor antes de iniciar plasmaféresis (la plasmaféresis interfiere con la interpretación posterior del ensayo si se retrasa el envío).',
      dx_diferencial: 'Síndrome hemolítico urémico típico/atípico (predominio de insuficiencia renal aguda sobre los síntomas neurológicos, ADAMTS13 no gravemente deficiente, ver esa tarjeta), coagulación intravascular diseminada (tiempos de coagulación prolongados y fibrinógeno bajo), preeclampsia/síndrome HELLP (contexto de embarazo con hipertensión), hipertensión maligna.',
      tx_medico: 'Ingreso urgente en una unidad con capacidad de plasmaféresis inmediata; transfusión de plaquetas contraindicada salvo sangrado mayor que ponga en riesgo la vida, dado que puede alimentar la formación de más microtrombos y empeorar la isquemia de órgano.',
      tx_farmacologico: 'Corticoide sistémico asociado a la plasmaféresis desde el inicio; caplacizumab (nanocuerpo que bloquea la interacción entre el factor de von Willebrand y las plaquetas) agregado en la fase aguda para reducir el tiempo hasta la normalización plaquetaria y el riesgo de recaída temprana; rituximab en la forma con autoanticuerpo inhibidor confirmado.',
      tx_intervencionista: 'Plasmaféresis (recambio plasmático terapéutico) diaria, iniciada de forma urgente sin esperar la confirmación de ADAMTS13 ante sospecha clínica razonable (apoyada por un PLASMIC score alto), continuada hasta normalización plaquetaria sostenida por al menos 2 días; repone ADAMTS13 funcional y remueve el autoanticuerpo inhibidor y los multímeros ultragrandes de factor de von Willebrand.',
      criterios_uci: 'Síntomas neurológicos graves (convulsiones, coma), isquemia miocárdica, compromiso multiorgánico.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica (no es una enfermedad de la célula madre hematopoyética).',
      seguimiento_hospitalario: 'Recuento plaquetario diario para documentar la respuesta a la plasmaféresis, vigilancia neurológica seriada, actividad de ADAMTS13 de control antes de suspender la plasmaféresis.',
      seguimiento_ambulatorio: 'Vigilancia de recaída (más frecuente en los primeros 30 días tras suspender la plasmaféresis, y en quienes mantienen actividad de ADAMTS13 persistentemente baja), rituximab de mantenimiento en casos seleccionados de alto riesgo de recaída.',
      pronostico: 'Mortalidad cercana al 90% sin tratamiento; con plasmaféresis precoz, la mortalidad se reduce a &lt;10-20%, aunque persiste un riesgo de recaída a mediano-largo plazo.',
      algoritmo: ['Anemia hemolítica microangiopática + trombocitopenia grave + síntomas neurológicos fluctuantes → sospecha urgente de PTT', 'Calcular PLASMIC score mientras se envía la muestra para ADAMTS13 (ver Escalas)', 'PLASMIC alto/sospecha razonable → iniciar plasmaféresis + corticoide de inmediato, sin esperar el resultado de ADAMTS13', 'Agregar caplacizumab en la fase aguda', 'ADAMTS13 &lt;10% confirmado → mantener plasmaféresis hasta normalización plaquetaria sostenida; rituximab si autoanticuerpo inhibidor positivo']
    },
    {
      nombre: 'Síndrome hemolítico urémico (típico y atípico)',
      color: '#6b4a2e',
      definicion: 'Microangiopatía trombótica con predominio de insuficiencia renal aguda sobre los síntomas neurológicos, sin la deficiencia grave de ADAMTS13 característica de la PTT (ver esa tarjeta); el SHU típico es producido por la toxina Shiga de Escherichia coli enterohemorrágico tras un pródromo de diarrea, típicamente en niños; el SHU atípico es producido por desregulación crónica de la vía alterna del complemento, sin el pródromo diarreico característico.',
      fisiopatologia: 'En el SHU típico, la toxina Shiga se une a un receptor específico (globotriaosilceramida, Gb3) en las células endoteliales del glomérulo renal, produciendo daño endotelial directo, activación plaquetaria local y microtrombos predominantemente renales, con fragmentación eritrocitaria mecánica secundaria. En el SHU atípico, una desregulación crónica de la vía alterna del complemento (mutaciones de pérdida de función en los reguladores factor H, factor I, o la proteína cofactor de membrana -MCP/CD46-, o autoanticuerpos adquiridos contra el factor H) permite la activación descontrolada del complemento sobre el endotelio, con el mismo resultado final de daño endotelial y microtrombosis, con frecuencia desencadenada por un evento precipitante (infección, embarazo, cirugía) sobre la predisposición subyacente.',
      epidemiologia: 'El SHU típico predomina en niños pequeños, con brotes epidémicos asociados a alimentos contaminados; el SHU atípico es mucho más raro, puede presentarse a cualquier edad, y tiene un curso recurrente/crónico característico a diferencia del episodio único habitual del SHU típico.',
      factores_riesgo: ['Ingesta de alimentos contaminados con E. coli enterohemorrágico (SHU típico)', 'Mutación germinal de un regulador del complemento o autoanticuerpo anti-factor H (SHU atípico)', 'Embarazo, infección, cirugía o trasplante como evento precipitante sobre la predisposición del complemento (SHU atípico)', 'Edad pediátrica (SHU típico)'],
      clinica: 'SHU típico: pródromo de diarrea, con frecuencia sanguinolenta, 5-10 días antes del inicio de la microangiopatía, seguido de oliguria/anuria, edema e hipertensión. SHU atípico: insuficiencia renal aguda progresiva sin el pródromo diarreico característico, con frecuencia recurrente tras un evento precipitante identificable, y curso más grave que el típico si no se trata de forma dirigida.',
      criterios_dx: 'Anemia hemolítica microangiopática más trombocitopenia más insuficiencia renal aguda predominante, con ADAMTS13 no gravemente deficiente; el SHU típico se confirma con la identificación de la toxina Shiga/E. coli productor de toxina Shiga en heces; el SHU atípico es un diagnóstico de exclusión apoyado por el estudio genético del complemento.',
      laboratorio: `Esquistocitos, LDH elevada, haptoglobina baja, trombocitopenia, creatinina elevada con datos de lesión renal aguda; coprocultivo con determinación de toxina Shiga o PCR específica (SHU típico); estudio genético de los reguladores del complemento y determinación de autoanticuerpo anti-factor H (SHU atípico); actividad de ADAMTS13 no gravemente deficiente en ambas formas.${figBlock('Imagen 4', 'Esquistocitos en el síndrome hemolítico urémico', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Schizocyte_smear_2009-12-22.JPG/960px-Schizocyte_smear_2009-12-22.JPG" alt="Frotis de sangre periférica con esquistocitos (fragmentos eritrocitarios de bordes angulados) en un paciente con síndrome hemolítico urémico." style="width:100%;max-width:420px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Esquistocitos (fragmentos eritrocitarios angulados, señalados con flechas) en el frotis de un paciente con síndrome hemolítico urémico; el mismo hallazgo morfológico se observa en la PTT. Paulo Henrique Orlandi Mourão, Wikimedia Commons, CC BY-SA 3.0.</p>`)}`,
      imagen: 'Ecografía renal para evaluar el tamaño/ecogenicidad renal y descartar otra causa obstructiva de la insuficiencia renal aguda.',
      complementarios: 'PLASMIC score también aplicable inicialmente para ayudar a diferenciar de PTT mientras se espera ADAMTS13; interconsulta con nefrología temprana dado el predominio renal de esta entidad.',
      dx_diferencial: 'PTT (predominio neurológico sobre el renal, ADAMTS13 &lt;10%, ver esa tarjeta), coagulación intravascular diseminada (tiempos de coagulación prolongados), glomerulonefritis rápidamente progresiva de otra causa.',
      tx_medico: 'SHU típico: manejo de soporte (hidratación cuidadosa, manejo de la insuficiencia renal aguda incluyendo diálisis si es necesaria); evitar antibióticos y antiperistálticos durante la fase diarreica prodrómica, dado que se ha asociado a mayor liberación de toxina Shiga y peor desenlace. SHU atípico: soporte renal similar, incluyendo diálisis si es necesaria.',
      tx_farmacologico: 'SHU típico: sin tratamiento dirigido específico más allá del soporte; la plasmaféresis NO ha demostrado beneficio consistente en esta forma, reservada a casos seleccionados con compromiso neurológico grave. SHU atípico: eculizumab (o ravulizumab) como tratamiento dirigido de elección; vacunación contra Neisseria meningitidis obligatoria antes o al inicio del inhibidor del complemento, dado el riesgo aumentado de infección meningocócica.',
      tx_intervencionista: 'Diálisis en la insuficiencia renal aguda grave de cualquiera de las 2 formas; plasmaféresis considerada en casos seleccionados de SHU atípico mientras se confirma el diagnóstico o si no hay disponibilidad inmediata de inhibidor del complemento.',
      criterios_uci: 'Insuficiencia renal aguda grave con inestabilidad hemodinámica, hiperpotasemia grave, sobrecarga de volumen refractaria.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante renal considerado en la enfermedad renal terminal establecida, con riesgo de recurrencia de la microangiopatía en el injerto particularmente alto en el SHU atípico no cubierto por inhibidor del complemento profiláctico.',
      seguimiento_hospitalario: 'Vigilancia de la función renal y la necesidad de diálisis, recuento plaquetario y hemólisis seriados.',
      seguimiento_ambulatorio: 'SHU típico: vigilancia de la función renal a largo plazo. SHU atípico: continuación del inhibidor del complemento a largo plazo en la mayoría de los casos, dado el riesgo de recaída al suspenderlo; asesoría genética familiar.',
      pronostico: 'El SHU típico tiene buen pronóstico global en la mayoría de los niños, con recuperación renal completa en la mayoría, aunque una proporción desarrolla secuelas renales crónicas; el SHU atípico no tratado tiene un curso recurrente con progresión frecuente a enfermedad renal terminal, sustancialmente mejorado con el inhibidor del complemento.',
      algoritmo: ['Anemia hemolítica microangiopática + insuficiencia renal aguda predominante → sospechar SHU', 'ADAMTS13 no gravemente deficiente → descarta PTT, apoya SHU', 'Pródromo de diarrea sanguinolenta + toxina Shiga positiva → SHU típico: manejo de soporte, evitar antibióticos/antiperistálticos', 'Sin pródromo diarreico, estudio genético de complemento → SHU atípico: eculizumab/ravulizumab + vacunación antimeningocócica', 'Insuficiencia renal grave → diálisis según necesidad en ambas formas']
    },
    {
      nombre: 'Hemoglobinuria paroxística nocturna (HPN)',
      color: '#2e5f6b',
      definicion: 'Neoplasia clonal adquirida de la célula madre hematopoyética, producida por una mutación somática del gen PIGA, que resulta en la pérdida de proteínas ancladas a glucosilfosfatidilinositol (GPI) en la superficie de las células sanguíneas derivadas de esa clona, incluyendo los reguladores del complemento CD55 y CD59; esto produce hemólisis intravascular crónica mediada por complemento, un estado protrombótico marcado, y con frecuencia se asocia a un componente de falla medular (ver el tema de Anemia Aplásica).',
      fisiopatologia: 'La mutación somática de PIGA en una célula madre hematopoyética impide la síntesis del anclaje GPI, por lo que las células derivadas de esa clona carecen de todas las proteínas normalmente ancladas por GPI, incluyendo CD55 (inhibidor de la convertasa C3) y CD59 (inhibidor del ensamblaje del complejo de ataque de membrana C5b-9). Sin estos reguladores, el complemento se activa de forma descontrolada sobre la superficie del eritrocito clonal, produciendo lisis intravascular directa continua. El estado protrombótico marcado de la HPN obedece a mecanismos adicionales independientes de la hemólisis en sí: activación plaquetaria directa por el complemento, y consumo de óxido nítrico por la hemoglobina libre liberada durante la hemólisis intravascular (que también contribuye a la disfunción de músculo liso -espasmo esofágico, dolor abdominal, disfunción eréctil-, un patrón reconocido en la HPN). Analogía: CD55 y CD59 funcionan como el gafete de identificación que le muestra al sistema del complemento "esta célula es propia, no la ataques". Al faltar ese gafete (por la mutación de PIGA), el complemento no reconoce a la célula como propia y la trata como si fuera un invasor externo, activando sobre ella el mismo mecanismo de ataque que usaría contra una bacteria; por eso el problema no es que el complemento esté hiperactivo en sí, sino que la célula perdió la credencial que normalmente la protegía de un sistema que de por sí siempre está vigilando.',
      epidemiologia: 'Enfermedad rara (~1-10 casos por millón de habitantes), puede presentarse a cualquier edad con un pico en adultos jóvenes-medios; hasta 50-70% de los pacientes con anemia aplásica tienen una clona de HPN detectable (ver el tema de Anemia Aplásica), reflejando el vínculo fisiopatológico entre ambas entidades.',
      factores_riesgo: ['Antecedente de anemia aplásica (mayor probabilidad de tener una clona de HPN detectable)', 'Ninguno claramente identificable para la mutación somática de PIGA en sí'],
      clinica: 'Hemoglobinuria (orina oscura, clásicamente matutina), fatiga por anemia hemolítica crónica, dolor abdominal y espasmo esofágico (disfagia) por consumo de óxido nítrico, disfunción eréctil, y trombosis en sitios atípicos (síndrome de Budd-Chiari, trombosis de senos venosos cerebrales) que puede ser la manifestación inicial de la enfermedad.',
      criterios_dx: 'Citometría de flujo de alta sensibilidad con FLAER (aerolisina fluorescente, que se une específicamente al anclaje GPI) en sangre periférica, documentando una población de granulocitos y monocitos con deficiencia de proteínas ancladas a GPI (ver Escalas); es el estándar diagnóstico actual, superior a la prueba de Ham históricamente usada.',
      laboratorio: 'LDH muy elevada (marcador de hemólisis intravascular activa, con frecuencia la más elevada entre las anemias hemolíticas de esta sección), haptoglobina indetectable, hemoglobina/hemosiderina en orina, reticulocitosis; citometría de flujo con FLAER cuantificando el tamaño de la clona; Coombs directa negativa.',
      imagen: 'Angio-TC o angio-RM dirigida ante sospecha de trombosis en sitio atípico, que puede ser la manifestación inicial.',
      complementarios: 'Biopsia de médula ósea si coexiste sospecha de falla medular asociada (anemia aplásica, ver ese tema), para caracterizar la celularidad medular junto con el tamaño de la clona de HPN.',
      dx_diferencial: 'Otras causas de hemólisis intravascular con Coombs negativo (microangiopatía trombótica, ver esas tarjetas, aunque la HPN carece de esquistocitos y trombocitopenia marcada características de esas entidades), anemia aplásica sin clona de HPN significativa, deficiencia de G6PD (Coombs negativo, desencadenada por estrés oxidativo específico, ver el tema de Anemias Hemolíticas Hereditarias).',
      tx_medico: 'Suplementación con ácido fólico y hierro según déficit documentado (con precaución, dado que la reposición de hierro puede en ocasiones exacerbar transitoriamente la hemólisis al aumentar el tamaño de la clona funcional); vacunación contra Neisseria meningitidis obligatoria antes de iniciar cualquier inhibidor del complemento.',
      tx_farmacologico: 'Eculizumab o ravulizumab (inhibidores terminales del complemento, dirigidos contra C5) como tratamiento de elección en la enfermedad sintomática (hemólisis significativa, trombosis, o dependencia transfusional); anticoagulación indefinida en todo paciente con un evento trombótico previo asociado a HPN, incluso bajo tratamiento con inhibidor del complemento.',
      tx_intervencionista: 'Trasplante alogénico de células madre hematopoyéticas reservado para la enfermedad refractaria al inhibidor del complemento, la falla medular asociada grave, o la evolución a síndrome mielodisplásico/leucemia mieloide aguda; única opción curativa, con riesgos propios que deben sopesarse frente al buen control sintomático que suele lograrse con el inhibidor del complemento.',
      criterios_uci: 'Trombosis mayor con compromiso hemodinámico/neurológico (Budd-Chiari fulminante, trombosis de seno venoso cerebral con hipertensión intracraneal).',
      criterios_tips: 'Síndrome de Budd-Chiari asociado a HPN con hipertensión portal refractaria al manejo médico/anticoagulación.',
      criterios_trasplante: 'Enfermedad refractaria al inhibidor del complemento, falla medular grave asociada, o evolución clonal a SMD/LMA (ver el tema de Anemia Aplásica).',
      seguimiento_hospitalario: 'Vigilancia de LDH/hemólisis y de nuevos eventos trombóticos, verificación de vacunación antimeningocócica antes de iniciar el inhibidor del complemento.',
      seguimiento_ambulatorio: 'Inhibidor del complemento continuado de forma indefinida en la mayoría de los casos sintomáticos (la suspensión se asocia a hemólisis de rebote grave), vigilancia periódica del tamaño de la clona y de evolución a falla medular/evolución clonal.',
      pronostico: 'Con inhibidor del complemento, el control de la hemólisis y la reducción del riesgo trombótico son sustanciales, con una supervivencia que se aproxima a la de la población general; sin tratamiento dirigido, la trombosis es la principal causa de mortalidad.',
      algoritmo: ['Hemólisis intravascular Coombs-negativa + orina oscura o trombosis en sitio atípico → sospechar HPN', 'Citometría de flujo de alta sensibilidad con FLAER → confirma y cuantifica el tamaño de la clona', 'Vacunación antimeningocócica antes de iniciar tratamiento dirigido', 'Enfermedad sintomática → eculizumab o ravulizumab', 'Evento trombótico previo → anticoagulación indefinida, incluso bajo inhibidor del complemento', 'Refractaria o con falla medular grave asociada → trasplante alogénico']
    },
    {
      nombre: 'Insuficiencia renal aguda por hemólisis masiva',
      color: '#7a1f3d',
      definicion: 'Complicación transversal que puede ocurrir sobre cualquiera de las 5 formas de esta sección (ver cada tarjeta), particularmente prominente en el SHU (donde es la manifestación dominante) y en la hemólisis intravascular masiva de cualquier causa (HPN, AHAI fría grave, PTT): lesión renal aguda producida por el efecto tóxico directo de la hemoglobina libre sobre el túbulo renal, o por microtrombosis glomerular directa en la microangiopatía trombótica.',
      fisiopatologia: 'La hemoglobina libre liberada durante la hemólisis intravascular masiva satura la haptoglobina circulante y es filtrada por el glomérulo; en el túbulo proximal, la hemoglobina filtrada es reabsorbida y metabolizada, generando radicales libres de hierro que producen daño oxidativo tubular directo (necrosis tubular aguda hemoglobinúrica), agravado por la vasoconstricción renal secundaria al consumo de óxido nítrico por la hemoglobina libre. En la microangiopatía trombótica (particularmente el SHU), la microtrombosis glomerular directa produce isquemia renal aguda por un mecanismo mecánico distinto, sin requerir hemólisis intravascular masiva concomitante.',
      epidemiologia: 'Complicación potencialmente grave en la hemólisis intravascular masiva de cualquier causa de esta sección; es la manifestación dominante y casi constante en el SHU, y puede ser la forma de presentación inicial de una crisis hemolítica grave en la HPN o la AHAI fría.',
      factores_riesgo: ['Hemólisis intravascular masiva de instalación rápida', 'Depleción de volumen concomitante', 'Microangiopatía trombótica (SHU particularmente)', 'Acidosis/orina ácida (favorece la precipitación tubular de la hemoglobina)'],
      clinica: 'Oliguria/anuria, orina oscura (hemoglobinuria), edema, hipertensión si hay sobrecarga de volumen asociada; puede progresar a indicación de diálisis urgente en los casos graves.',
      criterios_dx: 'Elevación aguda de creatinina/disminución de la tasa de filtración glomerular estimada en el contexto de hemólisis intravascular documentada o de microangiopatía trombótica activa, sin otra causa evidente de lesión renal aguda.',
      laboratorio: 'Creatinina y nitrógeno ureico seriados, electrolitos (vigilancia de hiperpotasemia), examen general de orina (hemoglobinuria sin hematuria verdadera en el sedimento, un dato que distingue la hemoglobinuria de un sangrado urológico real).',
      imagen: 'Ecografía renal para evaluar tamaño/ecogenicidad y descartar obstrucción como causa alternativa.',
      complementarios: 'Ninguno adicional específico más allá del estudio dirigido a la causa de base (ver cada tarjeta de enfermedad).',
      dx_diferencial: 'Necrosis tubular aguda de otra causa (isquémica, nefrotóxica), glomerulonefritis rápidamente progresiva, obstrucción de la vía urinaria.',
      tx_medico: 'Hidratación intravenosa activa y precoz para mantener un flujo tubular adecuado y minimizar la precipitación de hemoglobina, particularmente en la hemólisis intravascular masiva de instalación aguda; alcalinización urinaria considerada en casos seleccionados de hemoglobinuria masiva.',
      tx_farmacologico: 'Tratamiento dirigido de la causa hemolítica de base (ver cada tarjeta de enfermedad), que es la medida más eficaz para limitar la progresión de la lesión renal.',
      tx_intervencionista: 'Diálisis urgente en la insuficiencia renal aguda grave con hiperpotasemia refractaria, sobrecarga de volumen refractaria, o uremia sintomática.',
      criterios_uci: 'Insuficiencia renal aguda grave con inestabilidad hemodinámica o hiperpotasemia potencialmente letal.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma aguda; trasplante renal considerado a largo plazo si progresa a enfermedad renal terminal (particularmente en el SHU, ver esa tarjeta).',
      seguimiento_hospitalario: 'Balance hídrico estricto, creatinina y electrolitos seriados, vigilancia de la necesidad de diálisis.',
      seguimiento_ambulatorio: 'Vigilancia de la función renal a largo plazo tras el episodio agudo, dado el riesgo de enfermedad renal crónica residual.',
      pronostico: 'Recuperación renal completa en la mayoría de los casos si la causa hemolítica de base se controla de forma oportuna; el SHU y los episodios de hemólisis intravascular masiva no tratados oportunamente tienen mayor riesgo de progresión a enfermedad renal crónica.',
      algoritmo: ['Hemólisis intravascular masiva o microangiopatía trombótica + elevación de creatinina → sospechar lesión renal aguda de esta causa', 'Hidratación intravenosa precoz + tratamiento dirigido de la causa hemolítica de base', 'Vigilancia de hiperpotasemia y sobrecarga de volumen', 'Criterios de diálisis → diálisis urgente', 'Seguimiento de función renal a largo plazo tras el episodio agudo']
    },
    {
      nombre: 'Trombosis',
      color: '#966b35',
      definicion: 'Complicación transversal particularmente prominente en la HPN (donde es la principal causa de mortalidad) y en la PTT/SHU (microtrombosis local), y reconocida también en la AHAI (asociación con síndrome antifosfolípido en el contexto de lupus, o hipercoagulabilidad relativa por la hemólisis crónica misma): evento trombótico venoso o arterial, con frecuencia en sitios atípicos en la HPN.',
      fisiopatologia: 'En la HPN, la trombosis obedece a mecanismos independientes de la hemólisis en sí: activación plaquetaria directa por el complemento sobre plaquetas que también carecen parcialmente de reguladores del complemento anclados a GPI, y consumo de óxido nítrico por la hemoglobina libre circulante, que promueve vasoconstricción y activación endotelial protrombótica; los sitios atípicos característicos (venas hepáticas/porta, senos venosos cerebrales, venas mesentéricas) reflejan un tropismo particular no completamente explicado. En la PTT/SHU, la trombosis es local, mecánica, por los microtrombos plaquetarios/de fibrina de la microangiopatía misma (ver esas tarjetas). En la AHAI, el estado protrombótico es menos marcado que en la HPN, pero relevante particularmente si coexiste síndrome antifosfolípido en el contexto de lupus.',
      epidemiologia: 'La trombosis es la principal causa de mortalidad en la HPN no tratada, con predilección característica por sitios atípicos infrecuentes en la población general; en la PTT/SHU, la microtrombosis local es intrínseca a la definición misma de la enfermedad.',
      factores_riesgo: ['Clona de HPN grande (mayor tamaño de la clona, mayor riesgo trombótico)', 'Hemólisis intravascular activa no controlada', 'Síndrome antifosfolípido concomitante en la AHAI secundaria a lupus', 'Embarazo, cirugía, infección como desencadenantes adicionales'],
      clinica: 'Dolor abdominal agudo con hepatomegalia y ascitis (síndrome de Budd-Chiari), cefalea con datos de hipertensión intracraneal (trombosis de seno venoso cerebral), dolor abdominal con datos de isquemia mesentérica (trombosis de venas mesentéricas); trombosis venosa profunda/tromboembolia pulmonar convencional también posible en cualquiera de las entidades de esta sección.',
      criterios_dx: 'Confirmación por el estudio de imagen dirigido según el sitio sospechado (angio-TC/RM), en el contexto de una de las enfermedades de esta sección, particularmente la HPN.',
      laboratorio: 'Dímero D elevado (inespecífico), LDH y marcadores de hemólisis activa concomitante en la HPN, panel de trombofilia/antifosfolípidos si se sospecha síndrome antifosfolípido asociado.',
      imagen: 'Angio-TC o angio-RM del sitio sospechado (abdomen para Budd-Chiari/trombosis mesentérica, cerebral para trombosis de seno venoso), Doppler venoso de extremidades si se sospecha trombosis venosa profunda convencional.',
      complementarios: 'Cuantificación del tamaño de la clona de HPN por citometría de flujo si no se ha realizado, dado que orienta la urgencia de iniciar inhibidor del complemento además de la anticoagulación.',
      dx_diferencial: 'Trombosis de otra causa no relacionada con la enfermedad hematológica de base (debe considerarse siempre un panel de trombofilia completo si no hay una de las enfermedades de esta sección ya identificada).',
      tx_medico: 'Manejo de soporte según el sitio y la gravedad del evento trombótico (manejo de la hipertensión portal en Budd-Chiari, manejo de la hipertensión intracraneal en trombosis de seno venoso cerebral).',
      tx_farmacologico: 'Anticoagulación sistémica de inmediato ante confirmación del evento trombótico, indefinida en la HPN con antecedente trombótico (incluso bajo inhibidor del complemento); en la HPN, inicio o intensificación del inhibidor del complemento (eculizumab/ravulizumab) simultáneo a la anticoagulación, dado que trata el mecanismo protrombótico subyacente y reduce el riesgo de recurrencia de forma más eficaz que la anticoagulación sola.',
      tx_intervencionista: 'Trombólisis dirigida por catéter o trombectomía mecánica considerada en la trombosis aguda grave con compromiso de órgano; TIPS en el síndrome de Budd-Chiari con hipertensión portal refractaria al manejo médico.',
      criterios_uci: 'Trombosis mayor con compromiso hemodinámico o neurológico grave (Budd-Chiari fulminante, trombosis extensa de seno venoso cerebral con deterioro neurológico).',
      criterios_tips: 'Síndrome de Budd-Chiari con hipertensión portal refractaria a anticoagulación/manejo médico.',
      criterios_trasplante: 'Trasplante hepático considerado en el Budd-Chiari fulminante con falla hepática aguda no controlable con TIPS/manejo médico (escenario infrecuente).',
      seguimiento_hospitalario: 'Vigilancia de progresión/extensión del trombo, ajuste de anticoagulación, inicio expedito del inhibidor del complemento si la causa es HPN.',
      seguimiento_ambulatorio: 'Anticoagulación indefinida en la mayoría de los casos asociados a HPN, continuación del inhibidor del complemento a largo plazo, vigilancia de recurrencia.',
      pronostico: 'La trombosis es la principal causa de mortalidad en la HPN no tratada; con inhibidor del complemento y anticoagulación, el riesgo de recurrencia se reduce sustancialmente, aunque el Budd-Chiari establecido puede dejar secuelas de hipertensión portal.',
      algoritmo: ['Dolor abdominal/cefalea/déficit neurológico en un paciente con una de las enfermedades de esta sección → sospechar trombosis, particularmente en sitio atípico si es HPN', 'Angio-TC/RM dirigida al sitio sospechado', 'Confirmado → anticoagulación sistémica de inmediato', 'Si la causa es HPN → iniciar o intensificar el inhibidor del complemento de forma simultánea', 'Budd-Chiari con hipertensión portal refractaria → TIPS', 'Compromiso hemodinámico/neurológico grave → manejo en UCI']
    },
    {
      nombre: 'Dificultad transfusional (autoanticuerpo eritrocitario)',
      color: '#5c6b8c',
      definicion: 'Complicación transversal particularmente relevante en la AHAI (caliente y fría, ver esas tarjetas): la presencia de autoanticuerpos eritrocitarios interfiere con las pruebas de compatibilidad cruzada convencionales (panaglutinación, un patrón de reacción positiva frente a todos los paneles de eritrocitos de reactivo disponibles), dificultando o retrasando la identificación de unidades de sangre verdaderamente compatibles cuando la transfusión es clínicamente necesaria.',
      fisiopatologia: 'El autoanticuerpo (IgG en la forma caliente, o el componente C3d residual de la fría) reacciona frente a un antígeno de alta frecuencia presente en la mayoría de los eritrocitos de reactivo del panel, produciendo una reacción de panaglutinación que enmascara la posible coexistencia de un aloanticuerpo específico clínicamente significativo (por ejemplo, contra un antígeno del sistema Rh o Kell tras una transfusión o embarazo previos), cuya identificación requiere técnicas especializadas de adsorción del autoanticuerpo antes de poder excluir con confianza un aloanticuerpo subyacente.',
      epidemiologia: 'Ocurre en una proporción relevante de los pacientes con AHAI que requieren transfusión, siendo un motivo frecuente de interconsulta urgente al banco de sangre/medicina transfusional.',
      factores_riesgo: ['AHAI caliente o fría con autoanticuerpo de amplia especificidad', 'Antecedente de transfusiones o embarazos previos (mayor probabilidad de un aloanticuerpo subyacente enmascarado)', 'Necesidad de transfusión urgente por anemia sintomática grave, sin tiempo para el estudio inmunohematológico completo'],
      clinica: 'No tiene manifestaciones clínicas propias; es un hallazgo/problema de laboratorio que condiciona el manejo transfusional del paciente con AHAI que requiere transfusión.',
      criterios_dx: 'Panaglutinación en el panel de compatibilidad cruzada en un paciente con AHAI conocida o recién diagnosticada.',
      laboratorio: 'Eluido del autoanticuerpo de la superficie eritrocitaria seguido de adsorción con eritrocitos de fenotipo conocido, para excluir la coexistencia de un aloanticuerpo clínicamente significativo enmascarado por el autoanticuerpo.',
      imagen: 'No aplica.',
      complementarios: 'Fenotipo eritrocitario extendido del paciente (idealmente antes de cualquier transfusión previa) para facilitar la selección de unidades fenotípicamente compatibles.',
      dx_diferencial: 'Aloanticuerpo verdadero aislado (sin autoanticuerpo de fondo, compatibilidad cruzada positiva pero sin el patrón de panaglutinación característico del autoanticuerpo).',
      tx_medico: 'Comunicación temprana y estrecha con el banco de sangre/medicina transfusional ante la sospecha o el diagnóstico de AHAI, idealmente antes de que se necesite una transfusión urgente.',
      tx_farmacologico: 'No aplica directamente (el tratamiento es el de la AHAI de base, ver esas tarjetas, que reduce la necesidad transfusional al controlar la hemólisis).',
      tx_intervencionista: 'Transfusión de la unidad "menos incompatible" disponible (tras adsorción del autoanticuerpo y exclusión razonable de un aloanticuerpo significativo) cuando la anemia sintomática grave no permite esperar el estudio inmunohematológico completo, sin retrasar una transfusión clínicamente necesaria.',
      criterios_uci: 'No aplica de forma directa (la indicación de UCI depende de la gravedad de la anemia/hemólisis de base, no de la dificultad transfusional en sí).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Documentación clara en el expediente del resultado del estudio de adsorción/eluido para transfusiones futuras.',
      seguimiento_ambulatorio: 'Portar documentación del fenotipo eritrocitario extendido y de cualquier aloanticuerpo identificado, para agilizar transfusiones futuras en otros centros.',
      pronostico: 'Con comunicación oportuna con el banco de sangre y las técnicas de adsorción adecuadas, la gran mayoría de los pacientes con AHAI que requieren transfusión pueden recibirla de forma razonablemente segura, aunque con mayor tiempo de preparación que un paciente sin autoanticuerpo.',
      algoritmo: ['AHAI conocida o recién diagnosticada + necesidad de transfusión → notificar de inmediato al banco de sangre', 'Panaglutinación en el panel de compatibilidad cruzada → confirma interferencia por autoanticuerpo', 'Eluido + adsorción del autoanticuerpo → excluir aloanticuerpo clínicamente significativo enmascarado', 'Anemia sintomática grave sin tiempo de esperar el estudio completo → transfundir la unidad menos incompatible disponible', 'Tratamiento dirigido de la AHAI de base para reducir la necesidad transfusional futura']
    },
    {
      nombre: 'Sobrecarga de hierro transfusional',
      color: '#8a6a1f',
      definicion: 'Complicación tardía de la dependencia transfusional crónica, reconocida en la HPN con hemólisis crónica no controlada y en cualquiera de las entidades de esta sección con curso crónico recurrente que requiera transfusiones repetidas a largo plazo; comparte el mismo mecanismo y manejo que en otras anemias crónicas transfusión-dependientes (ver el tema de Anemias Hemolíticas Hereditarias para el desarrollo completo de esta entidad).',
      fisiopatologia: 'Cada unidad de concentrado eritrocitario aporta hierro que el organismo no tiene un mecanismo fisiológico eficiente para excretar activamente; con transfusiones repetidas a largo plazo, el hierro se acumula progresivamente en el sistema reticuloendotelial y, al superar su capacidad de almacenamiento, en el parénquima de órganos vulnerables (hígado, corazón, glándulas endocrinas), donde el hierro lábil no unido a proteínas de transporte cataliza la formación de radicales libres y produce daño oxidativo tisular progresivo.',
      epidemiologia: 'El riesgo es proporcional al número acumulado de unidades transfundidas a lo largo del tiempo; relevante sobre todo en la HPN con hemólisis crónica mal controlada que requiere soporte transfusional repetido, más que en las formas agudas autolimitadas de esta sección.',
      factores_riesgo: ['Dependencia transfusional crónica (más de 10-20 unidades acumuladas a lo largo del tiempo, umbral orientativo)', 'Hemólisis crónica no controlada de forma dirigida (por ejemplo, HPN sin inhibidor del complemento disponible)', 'Ausencia de vigilancia sistemática de ferritina en el paciente con transfusiones repetidas'],
      clinica: 'Con frecuencia asintomática hasta fases avanzadas; fatiga, hiperpigmentación cutánea, hepatomegalia, disfunción endocrina (diabetes, hipogonadismo, hipotiroidismo), miocardiopatía restrictiva/dilatada por depósito cardiaco de hierro en fases avanzadas no vigiladas.',
      criterios_dx: 'Ferritina sérica elevada de forma sostenida en el contexto de transfusiones repetidas, con cuantificación no invasiva de la carga de hierro hepática y cardiaca por RM (T2*) cuando la ferritina supera el umbral de vigilancia.',
      laboratorio: 'Ferritina sérica seriada, saturación de transferrina.',
      imagen: 'RM hepática y cardiaca con secuencia T2* para cuantificar de forma no invasiva la carga de hierro en cada órgano, el método de referencia actual.',
      complementarios: 'Evaluación endocrina dirigida (glucosa, función tiroidea, gonadotropinas) si hay sospecha clínica de disfunción endocrina asociada.',
      dx_diferencial: 'Hemocromatosis hereditaria (sin antecedente transfusional significativo, de origen genético), enfermedad hepática de otra causa.',
      tx_medico: 'Vigilancia sistemática de ferritina en todo paciente con transfusiones repetidas, con umbral de inicio de quelación definido por el centro.',
      tx_farmacologico: 'Quelantes de hierro (deferasirox oral, deferoxamina parenteral, deferiprona) una vez alcanzado el umbral de tratamiento, ajustados según la carga de hierro cuantificada por RM y la tolerancia individual.',
      tx_intervencionista: 'Ninguno específico más allá de la quelación farmacológica; el control de la causa hemolítica de base (por ejemplo, inhibidor del complemento en la HPN) es la medida más eficaz para reducir la necesidad transfusional futura y, con ella, la progresión de la sobrecarga.',
      criterios_uci: 'No aplica de forma directa, salvo miocardiopatía por sobrecarga de hierro con descompensación grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico salvo complicación de órgano establecida.',
      seguimiento_ambulatorio: 'Ferritina y RM T2* seriadas, ajuste de la dosis de quelante según respuesta y tolerancia, vigilancia endocrina y cardiaca periódica en el paciente con sobrecarga establecida.',
      pronostico: 'Con vigilancia sistemática y quelación oportuna, el daño de órgano por sobrecarga de hierro es en gran medida prevenible; establecida la disfunción de órgano (particularmente cardiaca), el pronóstico es más reservado.',
      algoritmo: ['Transfusiones repetidas acumuladas → vigilancia sistemática de ferritina sérica', 'Ferritina sostenidamente elevada → RM hepática/cardiaca T2* para cuantificar la carga de hierro real', 'Confirmada sobrecarga significativa → iniciar quelación de hierro', 'Vigilancia endocrina y cardiaca periódica si la sobrecarga es de larga evolución', 'Tratamiento dirigido de la causa hemolítica de base para reducir la necesidad transfusional futura']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La confirmación temprana del mecanismo (Coombs directa, ADAMTS13/PLASMIC, FLAER) es común a las 5 formas de esta sección y determina de forma directa la urgencia y el tipo de tratamiento; los matices específicos de cada una se detallan en su propia tarjeta.',
    parametros: [
      'Panel de hemólisis (LDH, haptoglobina, bilirrubina indirecta, reticulocitos) seriado para documentar la respuesta al tratamiento.',
      'Coombs directa con panel IgG/C3d al ingreso en toda sospecha de AHAI.',
      'PLASMIC score y envío urgente de ADAMTS13 en toda sospecha de microangiopatía trombótica, sin retrasar la plasmaféresis si el score es alto.',
      'Función renal y electrolitos seriados, particularmente en el SHU y en la hemólisis intravascular masiva de cualquier causa.',
      'Vigilancia neurológica seriada en la PTT.'
    ],
    criterios_uci_general: 'Hemólisis fulminante con compromiso hemodinámico, síntomas neurológicos graves en la PTT, insuficiencia renal aguda grave con inestabilidad, trombosis mayor con compromiso hemodinámico/neurológico en la HPN.',
    criterios_tips_general: 'Síndrome de Budd-Chiari asociado a HPN con hipertensión portal refractaria al manejo médico/anticoagulación.',
    criterios_trasplante_general: 'No aplica de forma directa a ninguna de las 5 formas de esta sección salvo el trasplante alogénico de células madre hematopoyéticas en la HPN refractaria al inhibidor del complemento o con falla medular grave asociada (ver esa tarjeta), y el trasplante renal en la enfermedad renal terminal del SHU.',
    prevencion: 'Comunicación temprana con el banco de sangre ante toda AHAI que pueda requerir transfusión, envío urgente de ADAMTS13 antes de iniciar plasmaféresis en toda sospecha de PTT, vacunación antimeningocócica antes de todo inhibidor del complemento, y vigilancia sistemática de ferritina en el paciente con transfusiones repetidas.'
  }
};

export const compCites = {
  'Anemia hemolítica autoinmune caliente': { definicion: [2], tx_farmacologico: [2, 3] },
  'Anemia hemolítica autoinmune fría': { fisiopatologia: [4], tx_farmacologico: [4, 5] },
  'Púrpura trombocitopénica trombótica (PTT)': { criterios_dx: [7], tx_intervencionista: [8, 9] },
  'Síndrome hemolítico urémico (típico y atípico)': { fisiopatologia: [11], tx_farmacologico: [10, 12] },
  'Hemoglobinuria paroxística nocturna (HPN)': { fisiopatologia: [13], tx_farmacologico: [14, 15] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Panel de Coombs directa (IgG/C3d)': [3],
  'PLASMIC score': [7],
  'Criterios diagnósticos de HPN por citometría de flujo (FLAER)': [13],
  'SHU típico vs. atípico: diferencial clave': [11]
};
export const escalaCalc = { 'PLASMIC score': 'plasmic' };
export const compGroups = [
  { title: 'Anemias hemolíticas adquiridas por forma (enfermedades)', items: ['Anemia hemolítica autoinmune caliente', 'Anemia hemolítica autoinmune fría', 'Púrpura trombocitopénica trombótica (PTT)', 'Síndrome hemolítico urémico (típico y atípico)', 'Hemoglobinuria paroxística nocturna (HPN)'] },
  { title: 'Complicaciones transversales (cualquier forma)', items: ['Insuficiencia renal aguda por hemólisis masiva', 'Trombosis', 'Dificultad transfusional (autoanticuerpo eritrocitario)', 'Sobrecarga de hierro transfusional'] }
];
export const complicacionesIntro = 'El panorama general (epidemiología, etiología, factores de riesgo, fisiopatología) ya se cubrió en Definición. Estas tarjetas son el recurso de consulta con el detalle operativo de cada entidad: diagnóstico diferencial específico, dosis, criterios de UCI/trasplante y el algoritmo paso a paso. El grupo "(enfermedades)" son las 5 formas de anemia hemolítica adquirida; el grupo "Complicaciones transversales" son eventos que pueden surgir sobre cualquiera de ellas, no diagnósticos independientes.';
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
  root: { title: 'ANEMIAS HEMOLÍTICAS ADQUIRIDAS', color: '#6b2d4a', target: 'definicion' },
  branches: [
    { title: 'Autoinmune (Coombs +)', sub: 'IgG caliente vs. IgM/C3d fría', color: '#8c3a34', target: 'diagnostico', leaves: [
      { title: 'AHAI caliente', sub: 'Extravascular esplénica, corticoide → rituximab', color: '#8c3a34', target: 'complicaciones' },
      { title: 'AHAI fría', sub: 'Intravascular + hepática, rituximab, evitar frío', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'Microangiopatía trombótica (Coombs -)', sub: 'Esquistocitos, mecánica', color: '#5c3d5c', target: 'diagnostico', leaves: [
      { title: 'PTT', sub: 'ADAMTS13 <10%, plasmaféresis urgente', color: '#5c3d5c', target: 'complicaciones' },
      { title: 'SHU típico/atípico', sub: 'Renal predominante, soporte o eculizumab', color: '#6b4a2e', target: 'complicaciones' }
    ] },
    { title: 'Clonal (Coombs -)', sub: 'Célula madre, complemento', color: '#2e5f6b', target: 'diagnostico', leaves: [
      { title: 'HPN', sub: 'FLAER, eculizumab/ravulizumab', color: '#2e5f6b', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [3], imagen: [13] };
export const clasificacionCite = [7];
export const seguimientoCite = [1, 6];
