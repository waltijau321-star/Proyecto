// topics/coagulacion-intravascular-diseminada/content.js: Coagulación Intravascular Diseminada.
// Cuarto y último de los 4 temas independientes que reemplazan el cluster "Hemostasia y
// trombosis" del temario (los otros 3: Trastornos de la Coagulación y Trombofilias,
// Alteraciones Plaquetarias Cuantitativas, Transfusión de Hemoderivados, ya construidos).
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás debe ser un `export const` de nivel superior, HERMANO de `content`.
//
// IMPORTANTE (ver memoria del proyecto sobre study.js): construir cada pregunta con la respuesta
// correcta en options[0]/correct:0 primero, verificar el conteo, y solo entonces redistribuir
// mecánicamente con un script.
//
// IMPORTANTE (ver memoria del proyecto sobre tarjetas/figuras): el número de tarjetas y de
// figuras de este tema NO sigue ningún default fijo. Aquí, por decisión explícita con el usuario:
// la CID es un síndrome único (no un grupo de enfermedades), así que las 4 primeras fichas son
// por ETIOLOGÍA (mecanismo y manejo difieren considerablemente según la causa) y las 4 siguientes
// son las complicaciones reales del síndrome. 2 figuras SVG dibujadas a mano (no imágenes reales:
// la única foto real de púrpura fulminans con licencia abierta encontrada en Wikimedia Commons
// era de un lactante fallecido hace más de 100 años por sífilis congénita, y el usuario prefirió
// evitar esa sensibilidad y dibujar la figura en su lugar).

export const meta = {
  id: 'coagulacion-intravascular-diseminada',
  titulo: 'Coagulación Intravascular Diseminada',
  subtitulo: 'Módulo 30 · Medicina Interna',
  accent: '#8c1f3d',
  accentDim: '#c46b8a'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const paradojaHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:480px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:8px;padding:7px 14px;text-align:center;">Exposición masiva de factor tisular (sepsis, trauma, líquido amniótico, células tumorales)</div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:8px;padding:7px 14px;text-align:center;">Generación sistémica y descontrolada de trombina</div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="background:#3d5a7333;border:1px solid #3d5a73;border-radius:8px;padding:7px 14px;text-align:center;">Depósito de fibrina en la microvasculatura de todo el cuerpo (microtrombos)</div>
  <div style="color:var(--ink-dim);">↓ simultáneamente ↓</div>
  <div style="display:flex;gap:10px;justify-content:center;width:100%;flex-wrap:wrap;">
    <div style="flex:1;min-width:170px;background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:8px;padding:8px;text-align:center;">
      <strong>Consumo</strong><br>de plaquetas y factores de coagulación
    </div>
    <div style="flex:1;min-width:170px;background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:8px;text-align:center;">
      <strong>Hiperfibrinólisis secundaria</strong><br>activada para disolver los microtrombos
    </div>
  </div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="background:#6b4a2e33;border:1px solid #6b4a2e;border-radius:8px;padding:7px 14px;text-align:center;font-weight:600;">La paradoja: trombosis microvascular (isquemia de órganos) Y hemorragia (por consumo/hiperfibrinólisis) AL MISMO TIEMPO</div>
</div>`;

const purpuraFulminansHtml = `
<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" style="max-width:280px;width:100%;">
  <ellipse cx="160" cy="110" rx="140" ry="95" fill="none" stroke="var(--line)" stroke-width="2"/>
  <text x="160" y="20" text-anchor="middle" font-size="11" fill="var(--ink-dim)">Piel de una extremidad (esquema)</text>
  <g stroke="var(--accent-fg)" stroke-width="1">
    <path d="M90 70 L100 85 L88 95 L102 105 L85 115 L98 125" fill="var(--accent-fg)" opacity="0.75"/>
    <path d="M170 60 L182 72 L172 82 L188 92 L172 100 L184 112" fill="var(--accent-fg)" opacity="0.75"/>
    <path d="M130 130 L145 140 L132 152 L148 160 L128 170" fill="var(--accent-fg)" opacity="0.75"/>
    <path d="M220 90 L232 100 L220 110 L236 120" fill="var(--accent-fg)" opacity="0.75"/>
  </g>
  <circle cx="95" cy="95" r="18" fill="#3d3d3d" opacity="0.55"/>
  <circle cx="178" cy="82" r="16" fill="#3d3d3d" opacity="0.55"/>
  <circle cx="140" cy="150" r="15" fill="#3d3d3d" opacity="0.55"/>
  <text x="160" y="205" text-anchor="middle" font-size="10" fill="var(--ink-dim)">Púrpura estrellada (irregular, de bordes geográficos) con centro necrótico grisáceo/negro</text>
</svg>`;

export const definicionText = `<p style="margin:0 0 14px;">La coagulación intravascular diseminada (CID) es un síndrome adquirido, nunca una enfermedad primaria: se desencadena siempre por una enfermedad subyacente que expone el sistema de coagulación a una activación sistémica y descontrolada, con consumo de plaquetas y factores de coagulación más allá de la capacidad del organismo de reponerlos. El resultado es la paradoja central del síndrome: trombosis microvascular generalizada (con isquemia y disfunción de múltiples órganos) y hemorragia simultánea (por el consumo de plaquetas/factores y la hiperfibrinólisis secundaria activada para disolver los microtrombos).${figBlock('Imagen 1', 'La paradoja de la CID: trombosis y hemorragia simultáneas', paradojaHtml)}</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Las 4 causas principales.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Sepsis</strong>: la causa más frecuente de CID en la práctica clínica, particularmente por gramnegativos (endotoxina) aunque también por grampositivos y otros patógenos.</li>
    <li><strong>Obstétrica</strong>: abruptio placentae, embolia de líquido amniótico, óbito fetal retenido: la placenta y el líquido amniótico son ricos en factor tisular.</li>
    <li><strong>Neoplasia</strong>: la leucemia promielocítica aguda (LPA) produce una CID hiperfibrinolítica particularmente grave; los adenocarcinomas mucosecretores producen característicamente una forma crónica, de bajo grado y predominio trombótico.</li>
    <li><strong>Trauma</strong>: la coagulopatía inducida por trauma tiene una fase hiperfibrinolítica temprana distintiva, agravada por la tríada de hipotermia, acidosis, y coagulopatía dilucional.</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">2 formas clínicas.</strong> CID aguda/descompensada: instauración rápida (horas a días), predominio hemorrágico, típica de sepsis fulminante, trauma mayor, o complicaciones obstétricas agudas. CID crónica/compensada: instauración lenta (semanas a meses), predominio trombótico con sangrado mínimo o ausente, típica de neoplasia sólida de bajo grado (el hígado y la médula ósea logran compensar parcialmente el consumo mediante mayor síntesis).</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Diagnóstico.</strong> No existe una prueba única confirmatoria: el diagnóstico se establece combinando la enfermedad subyacente compatible con una constelación de hallazgos de laboratorio (trombocitopenia, prolongación de TP, fibrinógeno bajo, y marcadores de fibrina elevados como el dímero D), formalizada en el score ISTH de CID manifiesta (calculadora más abajo). El desarrollo completo del estudio diagnóstico, la clasificación por etiología, y las complicaciones específicas se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Levi M, Toh CH, Thachil J, Watson HG. Guidelines for the diagnosis and management of disseminated intravascular coagulation. Br J Haematol. 2009;145(1):24-33.',
  'Taylor FB Jr, Toh CH, Hoots WK, Wada H, Levi M. Towards definition, clinical and laboratory criteria, and a scoring system for disseminated intravascular coagulation. Thromb Haemost. 2001;86(5):1327-1330.',
  'Levi M, Scully M. How I treat disseminated intravascular coagulation. Blood. 2018;131(8):845-854.',
  'Wada H, Thachil J, Di Nisio M, et al. Guidance for diagnosis and treatment of DIC from harmonization of the recommendations from three guidelines. J Thromb Haemost. 2013;11(4):761-767.',
  'Erez O, Mastrolia SA, Thachil J. Disseminated intravascular coagulation in pregnancy: insights in pathophysiology, diagnosis and management. Am J Obstet Gynecol. 2015;213(4):452-463.',
  'Sanz MA, Fenaux P, Tallman MS, et al. Management of acute promyelocytic leukemia: updated recommendations from an expert panel of the European LeukemiaNet. Blood. 2019;133(15):1630-1643.',
  'Moore HB, Moore EE, Neal MD, et al. Trauma-Induced Coagulopathy: A 2020 Update. Semin Thromb Hemost. 2020;46(2):96-103.',
  'Squizzato A, Hunt BJ, Kinasewitz GT, et al. Supportive management strategies for disseminated intravascular coagulation: an international consensus. Thromb Haemost. 2016;115(5):896-904.',
  'Gando S, Levi M, Toh CH. Disseminated intravascular coagulation. Nat Rev Dis Primers. 2016;2:16037.',
  'Thomas L, Chan MY. Purpura fulminans: a review. Blood Coagul Fibrinolysis. 2021;32(7):461-468.',
  'Vincent JL, Levi M, Hunt BJ. Prevention and management of thrombosis and hemorrhage in patients with sepsis. Curr Opin Crit Care. 2018;24(6):492-499.',
  'Rosenberg AS, Adamski J, Puig M, et al. Adrenal Hemorrhage and Waterhouse-Friderichsen Syndrome. J Emerg Med. 2018;55(6):816-819.',
  'Toh CH, Alhamdi Y, Abrams ST. Current Pathological and Laboratory Considerations in the Diagnosis of Disseminated Intravascular Coagulation. Ann Lab Med. 2016;36(6):505-512.',
  'Iba T, Levy JH, Warkentin TE, et al. Diagnosis and management of sepsis-induced coagulopathy and disseminated intravascular coagulation. J Thromb Haemost. 2019;17(11):1989-1994.',
  'Franchini M, Lippi G, Manzato F. Recent acquisitions in the pathophysiology, diagnosis and treatment of disseminated intravascular coagulation. Thromb J. 2006;4:4.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'CID crónica/compensada',
      tituloB: 'CID aguda/descompensada',
      compensada: 'Instauración lenta (semanas a meses), predominio trombótico con sangrado mínimo o ausente; el hígado y la médula ósea compensan parcialmente el consumo mediante mayor síntesis. Típica de neoplasia sólida de bajo grado.',
      descompensada: 'Instauración rápida (horas a días), predominio hemorrágico con sangrado difuso en múltiples sitios (venopunciones, mucosas, sitios quirúrgicos), colapso hemodinámico, y disfunción multiorgánica por microtrombosis simultánea. Típica de sepsis fulminante, trauma mayor, o complicación obstétrica aguda.'
    },
    laboratorio: [
      { prueba: 'Recuento plaquetario', utilidad: 'Trombocitopenia progresiva por consumo; uno de los 4 componentes del score ISTH.' },
      { prueba: 'Tiempo de protrombina (TP/INR) y TTPa', utilidad: 'Prolongados por el consumo de múltiples factores de coagulación; el TP es el componente temporal usado en el score ISTH.' },
      { prueba: 'Fibrinógeno sérico', utilidad: 'Reducido por consumo; puede estar inicialmente normal o incluso elevado (reactante de fase aguda) en etapas tempranas, por lo que un valor normal no descarta CID temprana.' },
      { prueba: 'Dímero D u otros marcadores relacionados con fibrina (PDF)', utilidad: 'Marcadamente elevados por la degradación activa de fibrina; componente central del score ISTH, aunque poco específico (elevado en muchas otras condiciones).' },
      { prueba: 'Frotis de sangre periférica', utilidad: 'Esquistocitos (fragmentación eritrocitaria) por el paso de eritrocitos a través de la microvasculatura ocluida por fibrina, apoyando el diagnóstico y el diagnóstico diferencial con otras microangiopatías trombóticas.' }
    ],
    no_invasivos: [
      { metodo: 'Score ISTH de CID manifiesta (calculadora)', interpretacion: 'Combina plaquetas, marcador de fibrina, prolongación del TP, y fibrinógeno en un puntaje que orienta el diagnóstico.', cutoff: '≥5 compatible con CID manifiesta; &lt;5 sugestivo de CID no manifiesta, repetir en 1-2 días si la sospecha clínica persiste' }
    ],
    imagen: []
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema es doble: por forma clínica (aguda/descompensada de predominio hemorrágico vs. crónica/compensada de predominio trombótico) y por etiología subyacente (sepsis, obstétrica, neoplasia, trauma), que determinan tanto la presentación como el manejo específico.',
    escalas: [
      { nombre: 'Score ISTH de CID manifiesta (overt DIC)', componentes: 'Recuento plaquetario, marcador relacionado con fibrina (dímero D/PDF), prolongación del TP, fibrinógeno. Calculadora disponible más abajo.', formula: 'Suma de puntos por componente, rango 0-8', interpretacion: '≥5 puntos: compatible con CID manifiesta. &lt;5 puntos: sugestivo de CID no manifiesta (repetir en 1-2 días si la sospecha clínica persiste).' }
    ]
  },
  complicaciones: [
    {
      nombre: 'CID asociada a sepsis',
      color: '#8c3a34',
      definicion: 'La causa más frecuente de coagulación intravascular diseminada en la práctica clínica: la respuesta inflamatoria sistémica a la infección activa masivamente la coagulación a través de la expresión de factor tisular en monocitos y células endoteliales activadas.',
      fisiopatologia: 'Las citocinas proinflamatorias (factor de necrosis tumoral, interleucina-6) inducidas por la infección activan la expresión de factor tisular en monocitos y el endotelio vascular, iniciando la generación sistémica de trombina; simultáneamente, la sepsis suprime los mecanismos anticoagulantes fisiológicos (proteína C, antitrombina, inhibidor de la vía del factor tisular) y deteriora la fibrinólisis normal, creando un estado marcadamente procoagulante que favorece el depósito extenso de fibrina en la microvasculatura, particularmente en órganos con circulación vulnerable como el riñón y el pulmón.',
      epidemiologia: 'La sepsis, particularmente por gramnegativos (endotoxina como principal desencadenante), es la causa más frecuente de CID en el paciente hospitalizado, aunque también ocurre con grampositivos y otros patógenos (incluida la meningococcemia, asociada característicamente a púrpura fulminans, ver esa complicación).',
      factores_riesgo: ['Sepsis o choque séptico establecido, particularmente por gramnegativos', 'Gravedad de la disfunción orgánica de base (mayor puntaje SOFA se asocia a mayor riesgo)', 'Retraso en el control de la fuente infecciosa y en el inicio de antibióticos apropiados'],
      clinica: 'Predomina la disfunción orgánica por microtrombosis (lesión renal aguda, disfunción hepática, síndrome de dificultad respiratoria aguda) sobre el sangrado franco en las etapas iniciales, aunque el sangrado se vuelve prominente conforme progresa el consumo de plaquetas y factores.',
      criterios_dx: 'Score ISTH de CID manifiesta ≥5 en un paciente con sepsis o choque séptico confirmado o fuertemente sospechado, sin otra causa alternativa que explique la coagulopatía.',
      laboratorio: 'Score ISTH completo (plaquetas, dímero D/PDF, TP, fibrinógeno); lactato y marcadores de disfunción orgánica según el protocolo de sepsis (ver ese tema).',
      imagen: 'Dirigida según el foco infeccioso sospechado; no específica para el diagnóstico de la CID en sí.',
      complementarios: 'Hemocultivos y cultivos dirigidos según el foco sospechado, previos al inicio de antibióticos cuando sea posible sin retrasar el tratamiento.',
      dx_diferencial: 'Trombocitopenia inducida por fármacos u otras causas no relacionadas con CID en el paciente séptico (ver el tema de Alteraciones Plaquetarias Cuantitativas), microangiopatía trombótica primaria (púrpura trombocitopénica trombótica, síndrome hemolítico urémico) que puede coexistir o simular CID en el paciente crítico.',
      tx_medico: 'Tratamiento agresivo y temprano de la sepsis de base (control de la fuente infecciosa, antibióticos apropiados sin demora, reanimación hemodinámica según el protocolo de sepsis, ver ese tema): el tratamiento de la causa subyacente es la piedra angular del manejo de la CID de cualquier etiología, no existe un tratamiento específico que revierta la CID sin resolver la causa.',
      tx_farmacologico: 'Transfusión de hemoderivados dirigida según el sangrado activo y los valores de laboratorio (plaquetas, plasma fresco congelado, crioprecipitado si el fibrinógeno está críticamente bajo, ver el tema de Transfusión de Hemoderivados), reservada para el paciente con sangrado activo o riesgo alto de sangrado antes de un procedimiento invasivo, no para corregir un número de laboratorio aislado sin sangrado.',
      tx_intervencionista: 'No aplica de forma directa; el manejo es médico dirigido a la causa de base y el soporte transfusional según necesidad.',
      criterios_uci: 'Choque séptico con CID establecida, disfunción multiorgánica, o sangrado activo grave: indicación estándar de manejo en cuidados críticos.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluación seriada del score ISTH y de los parámetros de laboratorio (plaquetas, TP, fibrinógeno, dímero D) mientras se trata la sepsis de base, dado que la mejoría de la CID sigue típicamente a la mejoría de la infección subyacente.',
      algoritmo: ['Sepsis o choque séptico + coagulopatía → calcular score ISTH', 'El tratamiento de la sepsis de base es la piedra angular del manejo, no existe tratamiento específico que revierta la CID por sí sola', 'Transfusión de hemoderivados dirigida solo ante sangrado activo o riesgo alto antes de un procedimiento, no por un número aislado', 'Reevaluar el score ISTH seriadamente conforme se trata la infección']
    },
    {
      nombre: 'CID obstétrica',
      color: '#7a4363',
      definicion: 'CID desencadenada por complicaciones obstétricas agudas (abruptio placentae, embolia de líquido amniótico, óbito fetal retenido), dado que la placenta y el líquido amniótico son extraordinariamente ricos en factor tisular, capaz de desencadenar una activación masiva y súbita de la coagulación.',
      fisiopatologia: 'En el abruptio placentae y la embolia de líquido amniótico, la exposición súbita y masiva de factor tisular placentario o del líquido amniótico a la circulación materna desencadena una generación explosiva de trombina, produciendo una CID de instauración muy rápida y con frecuencia grave; en el óbito fetal retenido, la liberación gradual y sostenida de factor tisular desde el tejido fetal/placentario en degeneración produce, en cambio, una forma de instauración más lenta si el producto no se evacúa oportunamente.',
      epidemiologia: 'La embolia de líquido amniótico es infrecuente pero con una de las mortalidades más altas entre las causas de CID; el abruptio placentae es una causa relativamente más frecuente de CID obstétrica aguda.',
      factores_riesgo: ['Abruptio placentae, particularmente si es extenso o con hemorragia retroplacentaria significativa', 'Óbito fetal retenido sin evacuación oportuna del producto', 'Preeclampsia grave/síndrome HELLP concomitante', 'Antecedente de trombofilia materna de base (ver el tema de Trastornos de la Coagulación y Trombofilias)'],
      clinica: 'Hemorragia obstétrica masiva de instauración súbita, con frecuencia acompañada de colapso cardiovascular abrupto en la embolia de líquido amniótico (que además cursa con insuficiencia respiratoria aguda por el componente embólico pulmonar concomitante).',
      criterios_dx: 'Score ISTH de CID manifiesta ≥5 en el contexto de una complicación obstétrica compatible, con frecuencia evidente por la magnitud y la instauración súbita del sangrado.',
      laboratorio: 'Score ISTH completo; fibrinógeno seriado con particular atención dado que puede caer con extrema rapidez en la CID obstétrica aguda, siendo con frecuencia el hallazgo de laboratorio más temprano y sensible en este contexto específico.',
      imagen: 'Ecografía obstétrica para confirmar el abruptio placentae o el óbito fetal cuando el diagnóstico clínico no es evidente.',
      complementarios: 'Evaluación obstétrica y del bienestar fetal inmediata y coordinada con el equipo de obstetricia/medicina materno-fetal.',
      dx_diferencial: 'Preeclampsia grave/síndrome HELLP sin CID franca establecida, atonía uterina como causa aislada de hemorragia posparto sin coagulopatía de consumo subyacente.',
      tx_medico: 'Manejo obstétrico definitivo urgente de la causa (evacuación uterina en el óbito fetal, resolución del embarazo según indicación obstétrica en el abruptio o la embolia de líquido amniótico), coordinado estrechamente con reanimación hemodinámica y soporte transfusional agresivo.',
      tx_farmacologico: 'Protocolo de transfusión masiva con reposición agresiva de concentrado eritrocitario, plasma fresco congelado, plaquetas, y crioprecipitado (particularmente relevante dado que el fibrinógeno cae con rapidez extrema en este contexto, ver el tema de Transfusión de Hemoderivados); ácido tranexámico considerado como adyuvante en la hemorragia obstétrica según el protocolo institucional.',
      tx_intervencionista: 'Manejo intervencionista del sangrado obstétrico refractario según el protocolo estándar (taponamiento uterino, embolización arterial, o histerectomía de emergencia en casos extremos), coordinado con el equipo de obstetricia.',
      criterios_uci: 'Colapso hemodinámico, embolia de líquido amniótico con compromiso respiratorio y cardiovascular combinado, hemorragia masiva con requerimiento de transfusión masiva.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia estrecha de fibrinógeno seriado y de la respuesta al soporte transfusional durante el manejo agudo; vigilancia hemodinámica y respiratoria continua en la embolia de líquido amniótico dado su curso potencialmente fulminante.',
      algoritmo: ['Hemorragia obstétrica súbita y masiva → sospechar CID obstétrica, calcular score ISTH', 'Fibrinógeno seriado: cae con rapidez extrema en este contexto, vigilar de cerca', 'Manejo obstétrico definitivo urgente de la causa, coordinado con reanimación agresiva', 'Protocolo de transfusión masiva con reposición temprana de fibrinógeno (crioprecipitado)']
    },
    {
      nombre: 'CID asociada a neoplasia',
      color: '#8a6a1f',
      definicion: 'CID de 2 patrones clínicos claramente distintos según el tipo de neoplasia: una forma aguda, hiperfibrinolítica, y particularmente grave asociada a la leucemia promielocítica aguda (LPA); y una forma crónica, de bajo grado, y de predominio trombótico asociada a adenocarcinomas mucosecretores (particularmente páncreas, estómago, pulmón) y otras neoplasias sólidas avanzadas.',
      fisiopatologia: 'En la LPA, los promielocitos leucémicos expresan de forma característica tanto factor tisular como activador tisular del plasminógeno en niveles anormalmente altos, produciendo una activación simultánea y desproporcionada tanto de la coagulación como de la fibrinólisis, lo que explica la hiperfibrinólisis particularmente grave y el riesgo hemorrágico extremo de esta forma, especialmente al inicio de la quimioterapia de inducción (cuando la lisis de los promielocitos libera aún más contenido procoagulante); en los adenocarcinomas mucosecretores, la mucina tumoral y otros factores procoagulantes liberados de forma sostenida mantienen una activación crónica y de bajo grado de la coagulación, suficientemente compensada por el hígado y la médula ósea para mantener recuentos y niveles de factores relativamente preservados, pero con un estado protrombótico clínicamente significativo (síndrome de Trousseau, tromboflebitis migratoria).',
      epidemiologia: 'La CID está presente en una proporción considerable de los pacientes con LPA al momento del diagnóstico, siendo la hemorragia (particularmente intracraneal) una causa importante de mortalidad temprana en esta leucemia si no se reconoce y trata con prontitud; la CID crónica de neoplasia sólida es considerablemente más frecuente en términos absolutos, dado que muchos más pacientes tienen adenocarcinomas mucosecretores que LPA.',
      factores_riesgo: ['Diagnóstico de leucemia promielocítica aguda, particularmente al inicio de la quimioterapia de inducción', 'Adenocarcinoma mucosecretor avanzado (páncreas, estómago, pulmón, colon)', 'Recuento leucocitario muy elevado al diagnóstico de LPA (mayor carga de promielocitos procoagulantes)'],
      clinica: 'LPA: hemorragia grave de instauración rápida, con la hemorragia intracraneal como la manifestación más temida; puede empeorar transitoriamente al iniciar el ácido all-trans retinoico o la quimioterapia por la lisis celular. Neoplasia sólida crónica: trombosis venosa migratoria y recurrente (síndrome de Trousseau) con sangrado mínimo o ausente; hallazgo con frecuencia incidental en el laboratorio de rutina.',
      criterios_dx: 'LPA: score ISTH marcadamente elevado con fibrinógeno críticamente bajo y dímero D muy elevado, confirmado por el estudio citogenético/molecular característico de la LPA (translocación PML-RARA). Neoplasia sólida: score ISTH con frecuencia por debajo de 5 (forma no manifiesta/compensada) pese a trombosis clínica recurrente, en el contexto de una neoplasia conocida o recién diagnosticada.',
      laboratorio: 'Score ISTH completo; en la LPA, fibrinógeno particularmente bajo y marcadores de fibrinólisis (dímero D, PDF) desproporcionadamente elevados respecto al grado de trombocitopenia.',
      imagen: 'Dirigida según el sitio de trombosis o sangrado sospechado; estudio de extensión oncológica según la neoplasia de base identificada.',
      complementarios: 'Estudio citogenético/molecular urgente (PML-RARA) ante sospecha de LPA, dado que el inicio del ácido all-trans retinoico no debe esperar la confirmación completa si la sospecha clínica y morfológica es alta (ver el tema de Leucemia Aguda).',
      dx_diferencial: 'Otras causas de CID en el paciente oncológico (sepsis concomitante, particularmente en el paciente neutropénico), trombocitopenia por quimioterapia sin CID verdadera sobreañadida.',
      tx_medico: 'LPA: inicio urgente de ácido all-trans retinoico ante la sospecha clínica/morfológica, sin esperar la confirmación citogenética completa, dado que revierte rápidamente la coagulopatía asociada (ver el tema de Leucemia Aguda). Neoplasia sólida crónica: anticoagulación para la trombosis establecida y tratamiento de la neoplasia de base.',
      tx_farmacologico: 'LPA: ácido all-trans retinoico + soporte transfusional agresivo (plaquetas, crioprecipitado para mantener fibrinógeno &gt;100-150 mg/dL, plasma fresco congelado) durante la inducción, dado el riesgo hemorrágico extremo en ese periodo. Neoplasia sólida: heparina de bajo peso molecular preferida sobre antagonistas de la vitamina K para la trombosis asociada a cáncer.',
      tx_intervencionista: 'No aplica de forma directa, salvo el manejo estándar de un evento trombótico o hemorrágico mayor según su localización.',
      criterios_uci: 'Hemorragia intracraneal u otra hemorragia grave en la LPA, particularmente durante la inducción.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia diaria de fibrinógeno, plaquetas, y parámetros de coagulación durante la inducción de la LPA hasta la resolución de la coagulopatía (típicamente en los primeros días tras iniciar el ácido all-trans retinoico).',
      algoritmo: ['Leucemia aguda con sospecha morfológica de LPA + coagulopatía → iniciar ácido all-trans retinoico sin esperar confirmación citogenética completa', 'Mantener fibrinógeno &gt;100-150 mg/dL con crioprecipitado durante toda la inducción', 'Neoplasia sólida con trombosis migratoria recurrente y score ISTH bajo → CID crónica compensada, anticoagular con heparina de bajo peso molecular']
    },
    {
      nombre: 'CID traumática',
      color: '#3d5a73',
      definicion: 'CID desencadenada por trauma mayor, con una fase hiperfibrinolítica temprana distintiva (coagulopatía inducida por trauma) que la distingue de otras etiologías, agravada por la tríada clásica de hipotermia, acidosis, y coagulopatía dilucional por reanimación con líquidos.',
      fisiopatologia: 'El daño tisular masivo y la hipoperfusión sistémica del trauma mayor activan simultáneamente la vía de la proteína C (que, al activarse de forma excesiva, no solo inhibe la coagulación sino que también consume el inhibidor del activador del plasminógeno, desinhibiendo la fibrinólisis) y liberan factor tisular del tejido dañado, produciendo una coagulopatía temprana caracterizada por hiperfibrinólisis marcada, incluso antes de que la reanimación con líquidos contribuya a la dilución de factores; la tríada de hipotermia (deteriora la función enzimática de la cascada de coagulación), acidosis (deteriora la actividad de los factores de coagulación), y coagulopatía dilucional (por la reanimación con grandes volúmenes de cristaloide) agrava progresivamente el cuadro si no se corrige activamente.',
      epidemiologia: 'La coagulopatía inducida por trauma está presente en una proporción considerable de los pacientes con trauma mayor al ingreso hospitalario, y se asocia a mayor mortalidad cuando está presente, independientemente de la gravedad de la lesión anatómica en sí.',
      factores_riesgo: ['Trauma mayor con hipoperfusión sistémica significativa (shock hemorrágico)', 'Lesión cerebral traumática (libera una cantidad particularmente alta de factor tisular del tejido cerebral dañado)', 'Reanimación con grandes volúmenes de cristaloide sin hemoderivados tempranos (agrava la dilución)', 'Hipotermia no corregida durante la reanimación inicial'],
      clinica: 'Sangrado difuso microvascular no quirúrgico (rezumante, no atribuible a un vaso identificable) que se suma a la hemorragia del sitio de la lesión anatómica, particularmente evidente cuando el sangrado persiste pese a un control quirúrgico técnicamente adecuado del sitio lesionado.',
      criterios_dx: 'Score ISTH de CID manifiesta y/o evidencia de hiperfibrinólisis en tromboelastografía/tromboelastometría (cuando esté disponible) en el paciente con trauma mayor y coagulopatía temprana.',
      laboratorio: 'Score ISTH completo; tromboelastografía o tromboelastometría (cuando esté disponible) para caracterizar el patrón específico (hiperfibrinolítico vs. hipocoagulable) y guiar la reposición dirigida por objetivos; gasometría y temperatura central para monitorizar la tríada letal.',
      imagen: 'Dirigida según la lesión traumática sospechada; no específica para el diagnóstico de la coagulopatía en sí.',
      complementarios: 'Ácido tranexámico administrado idealmente dentro de las primeras 3 horas del trauma, dado el beneficio demostrado en mortalidad cuando se administra tempranamente en el trauma mayor con hemorragia significativa.',
      dx_diferencial: 'Sangrado quirúrgico de un vaso identificable no relacionado con coagulopatía sistémica (requiere control quirúrgico/intervencionista directo, no solo corrección de la coagulopatía), coagulopatía preexistente por anticoagulación crónica del paciente antes del trauma.',
      tx_medico: 'Control temprano de la hemorragia (quirúrgico o intervencionista según el sitio), corrección activa y simultánea de la tríada letal (calentamiento activo, corrección de la acidosis mediante perfusión adecuada, minimizar la dilución con reanimación hemostática temprana), y reposición de hemoderivados en proporción equilibrada según el protocolo de transfusión masiva.',
      tx_farmacologico: 'Ácido tranexámico temprano (idealmente &lt;3 horas del trauma); protocolo de transfusión masiva con proporción equilibrada de concentrado eritrocitario, plasma fresco congelado, y plaquetas (ver el tema de Transfusión de Hemoderivados), evitando la reanimación excesiva con cristaloide que agrava la dilución.',
      tx_intervencionista: 'Control quirúrgico o por radiología intervencionista de la fuente de sangrado anatómica según el sitio de la lesión, en paralelo a la corrección de la coagulopatía sistémica.',
      criterios_uci: 'Trauma mayor con coagulopatía establecida y requerimiento de transfusión masiva, indicación estándar de manejo en cuidados críticos.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia seriada de temperatura, gasometría, y parámetros de coagulación (incluyendo tromboelastografía si está disponible) durante la reanimación activa hasta la corrección de la tríada letal.',
      algoritmo: ['Trauma mayor + sangrado microvascular difuso no quirúrgico → sospechar coagulopatía inducida por trauma', 'Ácido tranexámico temprano, idealmente dentro de las primeras 3 horas', 'Corregir activa y simultáneamente hipotermia, acidosis, y dilución (tríada letal)', 'Protocolo de transfusión masiva con proporción equilibrada de hemoderivados, minimizando el cristaloide excesivo']
    },
    {
      nombre: 'Hemorragia grave multiorgánica',
      color: '#7a1f3d',
      definicion: 'La complicación hemorrágica de la CID: sangrado difuso simultáneo en múltiples sitios (mucosas, sitios de venopunción, heridas quirúrgicas, tracto gastrointestinal, sistema nervioso central) por el consumo de plaquetas y factores de coagulación combinado con la hiperfibrinólisis secundaria, característica de la forma aguda/descompensada del síndrome.',
      fisiopatologia: 'El consumo sostenido de plaquetas y factores de coagulación por el depósito continuo de fibrina en la microvasculatura, combinado con la activación secundaria de la fibrinólisis (que degrada tanto la fibrina de los microtrombos como el fibrinógeno circulante disponible), eventualmente supera la capacidad de síntesis hepática y medular de reponer estos componentes, produciendo un estado de hipocoagulabilidad sistémica sobrepuesto al estado protrombótico inicial: el paciente sangra precisamente porque ha "gastado" su capacidad de coagular en la formación de microtrombos diseminados.',
      epidemiologia: 'Manifestación dominante de la forma aguda/descompensada de la CID, particularmente en la CID obstétrica, traumática, y la asociada a leucemia promielocítica aguda; menos prominente en la forma crónica/compensada de la neoplasia sólida.',
      factores_riesgo: ['Fibrinógeno críticamente bajo (&lt;100 mg/dL)', 'Trombocitopenia grave concomitante (&lt;50,000/µL)', 'Procedimiento invasivo o cirugía reciente en el contexto de CID activa no controlada', 'Hiperfibrinólisis marcada (particularmente en la LPA y el trauma mayor)'],
      clinica: 'Sangrado simultáneo en múltiples sitios no relacionados anatómicamente entre sí (un patrón que por sí solo sugiere una coagulopatía sistémica más que una fuente anatómica localizada): petequias y equimosis difusas, sangrado de sitios de venopunción y catéteres, hemorragia gastrointestinal, y en los casos más graves hemorragia intracraneal.',
      criterios_dx: 'Sangrado clínico en múltiples sitios simultáneos en un paciente con score ISTH ≥5 y una enfermedad desencadenante identificada.',
      laboratorio: 'Fibrinógeno, recuento plaquetario, TP/TTPa, y dímero D seriados para guiar la intensidad del soporte transfusional necesario.',
      imagen: 'Dirigida según el sitio de sangrado sospechado (tomografía craneal si hay sospecha de hemorragia intracraneal, endoscopia si hay sospecha de hemorragia digestiva).',
      complementarios: 'No hay un estudio complementario único adicional más allá de los ya descritos; el diagnóstico y la vigilancia se basan en la combinación de clínica y laboratorio seriado.',
      dx_diferencial: 'Sangrado localizado de una fuente anatómica única (requiere control directo de esa fuente, no solo soporte transfusional sistémico), otras coagulopatías de consumo no relacionadas con CID (microangiopatías trombóticas primarias).',
      tx_medico: 'Tratamiento urgente y prioritario de la enfermedad desencadenante (ver las 4 etiologías) combinado con soporte transfusional agresivo dirigido por el sangrado activo y los valores de laboratorio.',
      tx_farmacologico: 'Crioprecipitado para mantener fibrinógeno &gt;100-150 mg/dL, concentrado plaquetario para mantener el recuento por encima del umbral apropiado al contexto de sangrado activo, plasma fresco congelado para el déficit combinado de factores (ver el tema de Transfusión de Hemoderivados); los antifibrinolíticos (ácido tranexámico) se consideran con precaución y de forma individualizada, dado que pueden agravar la trombosis microvascular en un síndrome que ya cursa con depósito extenso de fibrina, salvo en contextos específicos con beneficio demostrado (trauma temprano, hemorragia obstétrica).',
      tx_intervencionista: 'Control intervencionista o quirúrgico dirigido de un sitio de sangrado anatómico específico cuando esté identificado, en paralelo al soporte transfusional sistémico.',
      criterios_uci: 'Sangrado activo grave con compromiso hemodinámico, hemorragia intracraneal, o requerimiento de transfusión masiva.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia clínica de nuevos sitios de sangrado y reevaluación de laboratorio (fibrinógeno, plaquetas, TP) cada pocas horas durante el episodio agudo, espaciando conforme se estabiliza y se controla la enfermedad de base.',
      algoritmo: ['Sangrado en múltiples sitios simultáneos no relacionados anatómicamente → sospechar coagulopatía sistémica, calcular score ISTH', 'Priorizar el tratamiento urgente de la enfermedad desencadenante', 'Soporte transfusional dirigido: crioprecipitado si fibrinógeno bajo, plaquetas si trombocitopenia con sangrado, plasma fresco congelado si déficit combinado', 'Antifibrinolíticos con precaución individualizada, no de rutina en toda CID']
    },
    {
      nombre: 'Púrpura fulminans y disfunción multiorgánica por microtrombosis',
      color: '#3f6b52',
      definicion: 'El extremo trombótico de la CID: depósito extenso de microtrombos de fibrina en la microvasculatura cutánea (produciendo púrpura fulminans, lesiones purpúricas estrelladas de bordes geográficos que progresan a necrosis) y en la microvasculatura de órganos internos (produciendo disfunción multiorgánica por isquemia), incluye el síndrome de Waterhouse-Friderichsen (hemorragia suprarrenal bilateral) como su manifestación endocrina característica en el contexto de meningococcemia fulminante.',
      fisiopatologia: `El depósito extenso y no controlado de fibrina dentro de la microvasculatura ocluye progresivamente el flujo capilar y arteriolar, produciendo isquemia tisular que se manifiesta clínicamente según el órgano afectado: en la piel, la oclusión de la microvasculatura dérmica produce las lesiones purpúricas estrelladas características que progresan rápidamente a necrosis franca si no se revierte el proceso subyacente;${figBlock('Imagen 2', 'Púrpura fulminans: lesiones estrelladas de bordes geográficos', purpuraFulminansHtml)} en el riñón, la microtrombosis glomerular y de la microvasculatura peritubular produce lesión renal aguda; en el pulmón, contribuye al desarrollo o empeoramiento del síndrome de dificultad respiratoria aguda; en las glándulas suprarrenales, particularmente en la meningococcemia fulminante, la hemorragia bilateral masiva (secundaria a la combinación de microtrombosis vascular y la hemorragia consecuente dentro de la glándula) produce insuficiencia suprarrenal aguda (síndrome de Waterhouse-Friderichsen), agravando dramáticamente el choque ya presente por la sepsis de base.`,
      epidemiologia: 'La púrpura fulminans clásica se asocia con mayor frecuencia a la meningococcemia fulminante, aunque puede ocurrir con cualquier sepsis grave con CID asociada; el síndrome de Waterhouse-Friderichsen es infrecuente en términos absolutos pero se asocia a una mortalidad muy alta cuando ocurre, particularmente en niños con meningococcemia fulminante.',
      factores_riesgo: ['Meningococcemia fulminante (el contexto clásico de púrpura fulminans y Waterhouse-Friderichsen)', 'CID grave no controlada con retraso en el tratamiento de la enfermedad desencadenante', 'Choque séptico con hipoperfusión periférica marcada, que agrava la isquemia tisular ya presente por la microtrombosis'],
      clinica: 'Púrpura fulminans: lesiones cutáneas purpúricas de aparición súbita, inicialmente eritematosas y dolorosas, que progresan rápidamente (horas) a un centro necrótico grisáceo-negro con bordes geográficos irregulares, características en extremidades. Disfunción multiorgánica: lesión renal aguda, hipoxemia progresiva, alteración del estado mental. Waterhouse-Friderichsen: choque refractario a líquidos y vasopresores desproporcionado a la sepsis de base, con frecuencia con hiponatremia e hiperkalemia asociadas (insuficiencia suprarrenal aguda).',
      criterios_dx: 'Púrpura fulminans: diagnóstico clínico por la apariencia característica de las lesiones en el contexto de sepsis grave con CID. Waterhouse-Friderichsen: sospecha clínica ante choque refractario desproporcionado con insuficiencia suprarrenal bioquímica (cortisol basal inapropiadamente bajo para el grado de estrés fisiológico), confirmado por imagen (tomografía o resonancia suprarrenal mostrando hemorragia bilateral) cuando el paciente está lo suficientemente estable para el estudio.',
      laboratorio: 'Score ISTH; función renal seriada; cortisol basal si se sospecha Waterhouse-Friderichsen; electrolitos (hiponatremia, hiperkalemia sugieren insuficiencia suprarrenal asociada).',
      imagen: 'Tomografía o resonancia magnética de glándulas suprarrenales si se sospecha Waterhouse-Friderichsen y el paciente lo permite; no hay estudio de imagen específico para la púrpura fulminans cutánea en sí (diagnóstico clínico).',
      complementarios: 'Hemocultivos urgentes ante sospecha de meningococcemia; interconsulta con dermatología/cirugía plástica para la evaluación y eventual manejo de la necrosis cutánea extensa.',
      dx_diferencial: 'Vasculitis necrotizante primaria (sin el contexto de sepsis grave ni coagulopatía sistémica), otras causas de necrosis cutánea (necrosis por warfarina en deficiencia de proteína C, ver el tema de Trastornos de la Coagulación y Trombofilias).',
      tx_medico: 'Tratamiento urgente y agresivo de la sepsis de base (particularmente antibióticos empíricos inmediatos ante sospecha de meningococcemia, sin esperar confirmación microbiológica), soporte hemodinámico intensivo, e hidrocortisona de reemplazo si se confirma o se sospecha fuertemente insuficiencia suprarrenal aguda concomitante.',
      tx_farmacologico: 'Antibióticos empíricos de amplio espectro inmediatos (penicilina o ceftriaxona si se sospecha meningococo específicamente); hidrocortisona en dosis de estrés si hay choque refractario sugestivo de insuficiencia suprarrenal concomitante; soporte transfusional según necesidad para la coagulopatía sistémica de base.',
      tx_intervencionista: 'Desbridamiento quirúrgico o, en casos extremos, amputación de tejido necrótico extenso e irreversible en la púrpura fulminans establecida, una vez controlada la enfermedad sistémica de base.',
      criterios_uci: 'Choque séptico con púrpura fulminans o sospecha de Waterhouse-Friderichsen, indicación absoluta de manejo en cuidados críticos.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia estrecha de la extensión de las lesiones cutáneas y de la función renal/respiratoria; vigilancia hemodinámica continua ante sospecha de insuficiencia suprarrenal concomitante.',
      algoritmo: ['Sepsis grave + lesiones purpúricas estrelladas de aparición súbita → sospechar púrpura fulminans, tratar la sepsis de base sin demora', 'Choque refractario a líquidos y vasopresores desproporcionado → sospechar Waterhouse-Friderichsen, considerar hidrocortisona de estrés', 'Antibióticos empíricos inmediatos ante sospecha de meningococcemia, sin esperar confirmación microbiológica', 'Desbridamiento quirúrgico diferido hasta controlar la enfermedad sistémica de base']
    },
    {
      nombre: 'Síndrome de Waterhouse-Friderichsen',
      color: '#6b4a2e',
      definicion: 'Hemorragia suprarrenal bilateral masiva con insuficiencia suprarrenal aguda consecuente, la manifestación endocrina característica de la CID grave por meningococcemia fulminante (aunque descrita también con otras sepsis graves), agravando dramáticamente el choque ya presente.',
      fisiopatologia: 'La combinación de microtrombosis extensa de la vasculatura suprarrenal (particularmente vulnerable por su rica vascularización y su patrón vascular sinusoidal de baja presión) y la hemorragia consecuente dentro de la glándula, en el contexto de la CID grave asociada a meningococcemia fulminante, destruye funcionalmente ambas glándulas suprarrenales, eliminando la producción de cortisol precisamente en el momento de mayor demanda fisiológica (choque séptico establecido), lo que agrava dramáticamente la inestabilidad hemodinámica ya presente por un mecanismo adicional independiente del choque séptico en sí.',
      epidemiologia: 'Infrecuente en términos absolutos, pero descrita clásicamente y de forma desproporcionada en niños y adultos jóvenes con meningococcemia fulminante; se asocia a una de las mortalidades más altas entre las complicaciones de la CID cuando no se reconoce y trata con prontitud.',
      factores_riesgo: ['Meningococcemia fulminante (el contexto clásico descrito)', 'CID grave concomitante con púrpura fulminans (frecuentemente coexisten en el mismo paciente)', 'Retraso en el reconocimiento del choque refractario como potencialmente relacionado con insuficiencia suprarrenal, en lugar de atribuirlo exclusivamente a la sepsis'],
      clinica: 'Choque refractario a líquidos intravenosos y dosis crecientes de vasopresores, desproporcionado a la gravedad aparente de la sepsis de base, con frecuencia acompañado de hiponatremia e hiperkalemia (patrón bioquímico de insuficiencia suprarrenal), en un paciente con meningococcemia fulminante y púrpura fulminans concomitante.',
      criterios_dx: 'Sospecha clínica fuerte ante choque refractario desproporcionado en el contexto apropiado; cortisol basal inapropiadamente bajo para el grado de estrés fisiológico apoya el diagnóstico; confirmación por tomografía o resonancia suprarrenal mostrando hemorragia bilateral cuando el paciente está lo suficientemente estable para el estudio, aunque el diagnóstico con frecuencia es presuntivo y el tratamiento no debe esperar la confirmación por imagen.',
      laboratorio: 'Cortisol basal (idealmente antes de iniciar corticoides, aunque no debe retrasar el tratamiento empírico si la sospecha es alta), electrolitos (hiponatremia, hiperkalemia), función renal.',
      imagen: 'Tomografía computarizada o resonancia magnética de glándulas suprarrenales mostrando hemorragia bilateral, confirmatoria pero no siempre factible de obtener de forma oportuna en el paciente críticamente inestable.',
      complementarios: 'Hemocultivos y, cuando esté indicado, cultivo/PCR de líquido cefalorraquídeo para confirmar meningococcemia.',
      dx_diferencial: 'Choque séptico refractario sin insuficiencia suprarrenal asociada (respuesta esperada a la escalada estándar de vasopresores, sin el patrón bioquímico de insuficiencia suprarrenal), insuficiencia suprarrenal relativa del paciente crítico de otra causa.',
      tx_medico: 'Hidrocortisona de reemplazo en dosis de estrés iniciada empíricamente ante sospecha clínica fuerte, sin esperar la confirmación completa por imagen o el resultado del cortisol basal, dado el beneficio potencial y el riesgo relativamente bajo de una dosis de estrés a corto plazo; tratamiento simultáneo y agresivo de la meningococcemia/sepsis de base y de la CID asociada.',
      tx_farmacologico: 'Hidrocortisona intravenosa en dosis de estrés; antibióticos empíricos inmediatos para la meningococcemia (penicilina o ceftriaxona); soporte vasopresor agresivo, que con frecuencia mejora notablemente tras iniciar la hidrocortisona si el mecanismo subyacente es efectivamente insuficiencia suprarrenal.',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'Choque refractario con sospecha de Waterhouse-Friderichsen, indicación absoluta de manejo en cuidados críticos con soporte vasopresor y hormonal intensivo.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia hemodinámica estrecha de la respuesta a la hidrocortisona y al soporte vasopresor; vigilancia de electrolitos seriados durante la fase aguda.',
      algoritmo: ['Meningococcemia fulminante + choque refractario desproporcionado → sospechar Waterhouse-Friderichsen', 'Iniciar hidrocortisona de estrés empíricamente, sin esperar confirmación completa por imagen', 'Antibióticos empíricos inmediatos para la meningococcemia (no retrasar por el estudio endocrino)', 'Vigilar mejoría del soporte vasopresor tras iniciar hidrocortisona, apoya el diagnóstico retrospectivamente']
    },
    {
      nombre: 'Isquemia digital y de extremidades por microtrombosis',
      color: '#966b35',
      definicion: 'Isquemia y, en los casos avanzados, gangrena de dedos y extremidades por la oclusión microvascular extensa característica de la CID, particularmente prominente cuando la microtrombosis se combina con vasoconstricción periférica compensatoria (uso de vasopresores en dosis altas en el choque séptico concomitante).',
      fisiopatologia: 'La oclusión progresiva de la microvasculatura arteriolar y capilar distal por el depósito de fibrina, combinada con frecuencia con la vasoconstricción periférica intensa que acompaña al uso de vasopresores en dosis altas para sostener la presión arterial en el choque séptico concomitante, compromete el flujo sanguíneo a las porciones más distales de las extremidades (dedos de manos y pies, y en casos extremos porciones más proximales), produciendo isquemia progresiva que, si no se revierte, evoluciona a gangrena seca establecida.',
      epidemiologia: 'Complicación reconocida de la CID grave asociada a choque séptico con requerimiento de vasopresores en dosis altas y prolongadas; su incidencia ha aumentado relativamente conforme mejora la supervivencia del choque séptico grave, dado que más pacientes sobreviven el episodio agudo pero desarrollan esta secuela isquémica.',
      factores_riesgo: ['CID grave concomitante con choque séptico', 'Uso de vasopresores en dosis altas y prolongadas (particularmente múltiples agentes combinados)', 'Enfermedad vascular periférica preexistente que reduce la reserva circulatoria distal de base', 'Hipoperfusión periférica marcada y prolongada durante el episodio de choque'],
      clinica: 'Cianosis o palidez progresiva de dedos de manos y/o pies, inicialmente reversible con la mejoría hemodinámica pero evolucionando a isquemia fija y, en los casos más graves, gangrena seca demarcada de las porciones distales afectadas en los días siguientes al episodio agudo.',
      criterios_dx: 'Diagnóstico clínico por la apariencia y evolución característica en un paciente con antecedente de CID grave y choque séptico con vasopresores en dosis altas; se documenta y clasifica la extensión mediante examen clínico seriado.',
      laboratorio: 'No específico para esta complicación en sí; refleja la gravedad de la CID y del choque de base ya documentados.',
      imagen: 'Estudio Doppler de las extremidades afectadas para evaluar la perfusión residual y orientar el momento y la extensión de una eventual amputación, si la isquemia progresa a gangrena establecida.',
      complementarios: 'Interconsulta temprana con cirugía vascular o plástica para la evaluación seriada y el manejo oportuno de la demarcación de la gangrena, si se establece.',
      dx_diferencial: 'Isquemia arterial aguda por embolia o trombosis de un vaso mayor identificable (mecanismo distinto, requiere manejo intervencionista/quirúrgico dirigido a ese vaso), vasoespasmo inducido por vasopresores sin CID franca subyacente.',
      tx_medico: 'Optimización hemodinámica para minimizar la duración y la dosis de vasopresores necesarios en cuanto sea clínicamente seguro, control de la CID de base según su etiología (ver las 4 etiologías principales), y protección cuidadosa de las extremidades afectadas durante la fase aguda para evitar lesión adicional.',
      tx_farmacologico: 'No hay tratamiento farmacológico específico dirigido a revertir la isquemia digital establecida una vez presente; el manejo se centra en optimizar la perfusión sistémica y controlar la CID de base.',
      tx_intervencionista: 'Amputación diferida hasta la demarcación completa de la línea de gangrena establecida (evitar la amputación temprana/precipitada antes de que la extensión real del daño isquémico esté claramente delimitada), coordinada con cirugía vascular o plástica.',
      criterios_uci: 'No aplica de forma directa a esta complicación en sí; refleja la gravedad del choque y la CID de base ya manejados en cuidados críticos.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia clínica seriada de la extensión y la demarcación de las lesiones isquémicas; interconsulta temprana con cirugía vascular/plástica para planificar el momento óptimo de una eventual amputación.',
      seguimiento_ambulatorio: 'Seguimiento de rehabilitación y adaptación funcional tras una eventual amputación; vigilancia de cicatrización en las extremidades con isquemia parcial que no progresó a gangrena franca.',
      pronostico: 'Variable según la extensión de la isquemia; los casos leves con isquemia reversible tras la mejoría hemodinámica tienen buen pronóstico funcional, mientras que los casos con gangrena establecida requieren amputación con el impacto funcional consecuente.',
      algoritmo: ['CID grave + choque séptico con vasopresores en dosis altas + cianosis/palidez digital progresiva → sospechar isquemia por microtrombosis', 'Optimizar hemodinámica para minimizar dosis/duración de vasopresores en cuanto sea seguro', 'Interconsulta temprana con cirugía vascular/plástica para vigilancia seriada', 'Diferir amputación hasta la demarcación completa de la línea de gangrena, evitar intervención precipitada']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de este tema se centra en la reevaluación seriada del score ISTH y de los parámetros de laboratorio mientras se trata la enfermedad desencadenante, dado que no existe un tratamiento específico que revierta la CID sin resolver su causa.',
    parametros: ['Score ISTH seriado (plaquetas, dímero D/PDF, TP, fibrinógeno)', 'Sangrado clínico en nuevos sitios', 'Signos de disfunción orgánica por microtrombosis (función renal, oxigenación, estado mental, perfusión distal)', 'Respuesta hemodinámica y control de la enfermedad desencadenante'],
    criterios_uci_general: 'CID manifiesta (score ISTH ≥5) con sangrado activo grave, disfunción multiorgánica, o inestabilidad hemodinámica de cualquier etiología subyacente.',
    criterios_tips_general: 'No aplica de forma directa a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa a este tema.',
    prevencion: 'Reconocimiento y tratamiento temprano de la enfermedad desencadenante (control de la fuente séptica, manejo obstétrico oportuno, inicio urgente de ácido all-trans retinoico ante sospecha de LPA, ácido tranexámico temprano en el trauma mayor) es la medida preventiva más eficaz, dado que previene la progresión hacia una CID plenamente manifiesta en muchos casos.'
  }
};

export const compCites = {
  'CID asociada a sepsis': [1, 2, 8],
  'CID obstétrica': [5, 8],
  'CID asociada a neoplasia': [6, 3],
  'CID traumática': [7, 8],
  'Hemorragia grave multiorgánica': [1, 3, 8],
  'Púrpura fulminans y disfunción multiorgánica por microtrombosis': [10, 9],
  'Síndrome de Waterhouse-Friderichsen': [12, 10],
  'Isquemia digital y de extremidades por microtrombosis': [11, 3]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = { 'Score ISTH de CID manifiesta (overt DIC)': [2, 4] };
export const escalaCalc = { 'Score ISTH de CID manifiesta (overt DIC)': 'isth-cid' };
export const compGroups = [
  { name: 'Etiologías principales', items: ['CID asociada a sepsis', 'CID obstétrica', 'CID asociada a neoplasia', 'CID traumática'] },
  { name: 'Complicaciones del síndrome', items: ['Hemorragia grave multiorgánica', 'Púrpura fulminans y disfunción multiorgánica por microtrombosis', 'Síndrome de Waterhouse-Friderichsen', 'Isquemia digital y de extremidades por microtrombosis'] }
];
export const complicacionesIntro = 'La CID es un síndrome único, no un grupo de enfermedades: las primeras 4 fichas son sus 4 etiologías principales (sepsis, obstétrica, neoplasia, trauma), cuyo mecanismo y manejo específico difieren considerablemente entre sí. Las siguientes 4 son las complicaciones reales del síndrome ya establecido: hemorragia multiorgánica, púrpura fulminans/disfunción multiorgánica por microtrombosis, síndrome de Waterhouse-Friderichsen (su manifestación endocrina característica), e isquemia digital/de extremidades.';
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'clasificacion', label: 'Clasificación' },
  { id: 'complicaciones', label: 'Complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
export const arbol = {
  root: { title: 'COAGULACIÓN INTRAVASCULAR DISEMINADA', color: '#8c1f3d', target: 'definicion' },
  branches: [
    { title: 'Etiologías principales', sub: 'Mecanismo y manejo distintos', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'CID asociada a sepsis', sub: 'La causa más frecuente', color: '#8c3a34', target: 'complicaciones' },
      { title: 'CID obstétrica', sub: 'Abruptio, embolia de líquido amniótico', color: '#7a4363', target: 'complicaciones' },
      { title: 'CID asociada a neoplasia', sub: 'LPA hiperfibrinolítica / adenocarcinoma crónico', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'CID traumática', sub: 'Fase hiperfibrinolítica temprana', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones del síndrome', sub: 'Hemorrágicas y trombóticas', color: '#6b4a2e', target: 'complicaciones', leaves: [
      { title: 'Hemorragia grave multiorgánica', sub: 'Sangrado en múltiples sitios', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Púrpura fulminans', sub: 'Disfunción multiorgánica por microtrombosis', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Waterhouse-Friderichsen', sub: 'Hemorragia suprarrenal bilateral', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Isquemia digital/de extremidades', sub: 'Microtrombosis + vasopresores', color: '#966b35', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [2, 4, 14], no_invasivos: [2, 4] };
export const clasificacionCite = [2, 4];
export const seguimientoCite = [1, 9];
