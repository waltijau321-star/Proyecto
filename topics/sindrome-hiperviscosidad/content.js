// topics/sindrome-hiperviscosidad/content.js: Síndrome de Hiperviscosidad.
// Tercero y último de los 3 temas independientes que reemplazan el ítem combinado
// "Linfadenopatías, hiperesplenismo y síndrome de hiperviscosidad" del temario (ver también
// topics/linfadenopatias/ y topics/hiperesplenismo/).
//
// Tema de enfoque sindrómico (no una sola entidad biológica): las 4 tarjetas de "enfermedad" se
// dividen en 2 grandes mecanismos (hiperviscosidad plasmática por paraproteína, e hiperviscosidad
// celular por exceso de células circulantes), y las 4 complicaciones son las consecuencias
// transversales del daño de órgano por flujo microvascular alterado.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás debe ser un `export const` de nivel superior, HERMANO de `content`.
//
// IMPORTANTE (ver memoria del proyecto sobre study.js): construir cada pregunta con la respuesta
// correcta en options[0]/correct:0 primero, verificar el conteo, y solo entonces redistribuir
// mecánicamente con un script.

export const meta = {
  id: 'sindrome-hiperviscosidad',
  titulo: 'Síndrome de Hiperviscosidad',
  subtitulo: 'Módulo 26 · Medicina Interna',
  accent: '#6b3d5c',
  accentDim: '#a373a3'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const triadaHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:520px;margin:0 auto;">
  <div style="background:#6b3d5c33;border:1px solid #6b3d5c;border-radius:8px;padding:7px 14px;font-size:11px;color:var(--ink);text-align:center;">Flujo microvascular lento (retina, SNC, mucosas)</div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="display:flex;gap:8px;justify-content:center;width:100%;flex-wrap:wrap;">
    <div style="flex:1;min-width:140px;background:#6b4a2e33;border:1px solid #6b4a2e;border-radius:8px;padding:8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Sangrado mucocutáneo</strong><br>Disfunción plaquetaria adquirida</div>
    <div style="flex:1;min-width:140px;background:#3d5a7333;border:1px solid #3d5a73;border-radius:8px;padding:8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Alteración visual</strong><br>Hipoxia retiniana, fondo de ojo "en salchicha"</div>
    <div style="flex:1;min-width:140px;background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:8px;padding:8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Síntomas neurológicos</strong><br>Cefalea, confusión, letargo</div>
  </div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:8px;padding:7px 14px;font-size:10px;color:var(--ink);text-align:center;">2 o más presentes, o fondo de ojo aislado → plasmaféresis urgente (calculadora)</div>
</div>`;

const mecanismosHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:560px;margin:0 auto;">
  <div style="background:#6b3d5c33;border:1px solid #6b3d5c;border-radius:8px;padding:7px 14px;font-size:11px;color:var(--ink);text-align:center;">Viscosidad sanguínea elevada</div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="display:flex;gap:10px;justify-content:center;width:100%;flex-wrap:wrap;">
    <div style="flex:1;min-width:200px;background:#3d5a7333;border:1px solid #3d5a73;border-radius:8px;padding:8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Plasmática</strong><br>Exceso de paraproteína (IgM en Waldenström, IgA/IgG en mieloma) que aumenta la viscosidad del plasma en sí</div>
    <div style="flex:1;min-width:200px;background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:8px;padding:8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Celular</strong><br>Exceso de células circulantes (blastos en leucostasis, masa eritrocitaria en policitemia) que aumenta la fracción celular de la sangre</div>
  </div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:8px;padding:7px 14px;font-size:10px;color:var(--ink);text-align:center;max-width:460px;">Flujo microvascular lento y alterado → hipoxia tisular local → daño de órgano (retina, SNC, corazón) + disfunción plaquetaria adquirida (sangrado)</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El síndrome de hiperviscosidad es un conjunto de manifestaciones clínicas (sangrado mucocutáneo, alteración visual, síntomas neurológicos) producidas por un aumento patológico de la viscosidad de la sangre que enlentece el flujo microvascular normal, produciendo hipoxia tisular local en los órganos particularmente sensibles a un flujo lento (retina, sistema nervioso central) y una disfunción plaquetaria adquirida que favorece el sangrado mucocutáneo. Puede originarse por 2 mecanismos fundamentalmente distintos: el exceso de una proteína plasmática (paraproteína monoclonal, la causa clásica) o el exceso de células circulantes (leucocitos o eritrocitos en cantidad patológica).</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La macroglobulinemia de Waldenström es la causa clásica y más frecuentemente asociada al síndrome de hiperviscosidad sintomático, dado que la IgM (una molécula pentamérica de gran tamaño) tiene un efecto desproporcionado sobre la viscosidad plasmática incluso a concentraciones relativamente moderadas; la hiperviscosidad celular es menos frecuente en términos absolutos pero clínicamente crítica quinta se reconoce, particularmente en la leucemia aguda con hiperleucocitosis extrema.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Hiperviscosidad por Macroglobulinemia de Waldenström</strong>: la causa clásica y más frecuente, por la proteína M de tipo IgM y su tendencia a formar agregados de alto peso molecular.</li>
    <li><strong>Hiperviscosidad por Mieloma Múltiple</strong>: particularmente con proteína M de tipo IgA (que tiende a polimerizar) o niveles muy elevados de IgG.</li>
    <li><strong>Hiperviscosidad Celular por Leucostasis</strong>: hiperleucocitosis extrema (con frecuencia &gt;100,000/µL) en la leucemia aguda, particularmente la leucemia mieloide aguda, por el gran tamaño y rigidez relativa de los blastos mieloides.</li>
    <li><strong>Hiperviscosidad Celular por Eritrocitosis/Policitemia</strong>: aumento marcado de la masa eritrocitaria circulante, particularmente en la policitemia vera, que aumenta directamente la viscosidad de la sangre por la mayor fracción celular (hematocrito).</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Macroglobulinemia de Waldenström o mieloma múltiple conocidos, particularmente con niveles altos de proteína M</li>
    <li>Leucemia aguda con hiperleucocitosis extrema al momento del diagnóstico</li>
    <li>Policitemia vera con hematocrito marcadamente elevado no controlado</li>
    <li>Deshidratación concomitante (agrava cualquier causa de hiperviscosidad al concentrar aún más la sangre)</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> Independientemente del mecanismo causal (plasmático o celular), el resultado final común es un enlentecimiento del flujo sanguíneo a través de la microcirculación, particularmente pronunciado en los lechos vasculares de menor calibre (retina, cerebro) donde el flujo normal ya es relativamente lento y vulnerable; este enlentecimiento produce hipoxia tisular local incluso en ausencia de obstrucción vascular completa, y favorece además una disfunción plaquetaria adquirida (las plaquetas quedan recubiertas por la paraproteína circulante en la hiperviscosidad plasmática, alterando su función normal) que contribuye al sangrado mucocutáneo característico.${figBlock('Imagen 1', 'Mecanismos plasmático y celular de la hiperviscosidad', mecanismosHtml)} Analogía: la circulación normal es como el tráfico fluido de una autopista; la hiperviscosidad es como llenar esa misma autopista con vehículos desproporcionadamente grandes y pegajosos (ya sea muchos autos extra grandes, o un tipo de auto que se adhiere al pavimento), de forma que incluso sin ningún choque que bloquee un carril, el tráfico completo se vuelve lento y congestionado, y las zonas con calles ya estrechas (los capilares de la retina y el cerebro) son las primeras en colapsar.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde el hallazgo incidental de una paraproteína o una leucocitosis/eritrocitosis marcada sin síntomas hasta la tríada clínica clásica de sangrado mucocutáneo, alteración visual, y síntomas neurológicos, que constituye una urgencia médica con indicación de tratamiento inmediato.${figBlock('Imagen 2', 'Tríada clínica clásica y su indicación de tratamiento', triadaHtml)} El enfoque diagnóstico completo, la clasificación por mecanismo causal, y las complicaciones de órgano específicas se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Mehta J, Singhal S. Hyperviscosity syndrome in plasma cell dyscrasias. Semin Thromb Hemost. 2003;29(5):467-471.',
  'Stone MJ, Bogen SA. Evidence-based focused review of management of hyperviscosity syndrome. Blood. 2012;119(10):2205-2208.',
  'Gertz MA. Waldenström macroglobulinemia: 2021 update on diagnosis, risk stratification, and management. Am J Hematol. 2021;96(2):258-269.',
  'Kwaan HC. Hyperviscosity in plasma cell dyscrasias. Clin Hemorheol Microcirc. 2013;55(1):75-83.',
  'Röllig C, Ehninger G. How I treat hyperleukocytosis in acute myeloid leukemia. Blood. 2015;125(21):3246-3252.',
  'Ganzel C, Becker J, Mintz PD, et al. Hyperleukocytosis, leukostasis and leukapheresis: practice management. Blood Rev. 2012;26(3):117-122.',
  'Porcu P, Cripe LD, Ng EW, et al. Hyperleukocytic leukemias and leukostasis: a review of pathophysiology, clinical presentation and management. Leuk Lymphoma. 2000;39(1-2):1-18.',
  'Tefferi A, Barbui T. Polycythemia vera and essential thrombocythemia: 2021 update on diagnosis, risk-stratification and management. Am J Hematol. 2020;95(12):1599-1613.',
  'Mena E, Bhutani M, Morrison C, et al. Hyperviscosity syndrome. Cancer Treat Res. 2019;179:169-181.',
  'Menke MN, Feke GT, McMeel JW, et al. Hyperviscosity-related retinopathy in Waldenström macroglobulinemia. Arch Ophthalmol. 2006;124(11):1601-1606.',
  'Reinhart WH, Lütolf O, Nydegger UR, et al. Plasmapheresis for hyperviscosity syndrome in macroglobulinemia Waldenström and multiple myeloma: influence on blood rheology and the microcirculation. J Lab Clin Med. 1992;119(1):69-76.',
  'Zhang Y, Peng Z, Zhu C, et al. Plasmapheresis in the treatment of hyperviscosity syndrome. Ther Apher Dial. 2021;25(6):679-684.',
  'Facon T, Ardiet C, Depil S, et al. Hyperviscosity syndrome complicating multiple myeloma. Ann Hematol. 1996;72(1):33-36.',
  'Loscalzo J. From clinical observation to mechanism: Raynaud phenomenon and hyperviscosity. N Engl J Med. 2012;367(23):2224-2226.',
  'Marx JA, Chisholm CD. Hematologic emergencies: hyperviscosity syndromes. Emerg Med Clin North Am. 1993;11(2):375-390.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Hiperviscosidad asintomática (hallazgo incidental)',
      tituloB: 'Hiperviscosidad sintomática (urgencia médica)',
      compensada: 'Paraproteína elevada o citosis marcada (leucocitos/hematocrito) detectada incidentalmente en laboratorio de rutina, sin sangrado, sin alteración visual, sin síntomas neurológicos.',
      descompensada: 'Tríada clásica: sangrado mucocutáneo (epistaxis, gingivorragia), alteración visual (visión borrosa, pérdida visual), y síntomas neurológicos (cefalea, mareo, confusión, letargo, en casos graves coma); fondo de ojo con venas retinianas dilatadas y segmentadas ("en salchicha").'
    },
    laboratorio: [
      { prueba: 'Electroforesis de proteínas séricas con inmunofijación', utilidad: 'Identifica y cuantifica la proteína M causal cuando la sospecha es de origen plasmático (Waldenström, mieloma).' },
      { prueba: 'Biometría hemática completa', utilidad: 'Cuantifica la leucocitosis extrema o el hematocrito elevado cuando la sospecha es de origen celular (leucostasis, eritrocitosis/policitemia).' },
      { prueba: 'Viscosidad sérica directa (cuando está disponible)', utilidad: 'Confirma objetivamente la hiperviscosidad, aunque su correlación con la gravedad clínica de los síntomas es imperfecta; los síntomas clínicos guían el tratamiento más que el valor numérico aislado.' },
      { prueba: 'Frotis de sangre periférica', utilidad: 'Caracteriza la morfología de los blastos circulantes en la leucostasis, o confirma la eritrocitosis en la policitemia.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios de Hiperviscosidad Sintomática (con calculadora)', interpretacion: 'Sintetiza la tríada clínica clásica más el hallazgo de fondo de ojo, orientando la indicación de plasmaféresis urgente.', cutoff: 'Categórico, ver Escalas' },
      { metodo: 'Examen de fondo de ojo', interpretacion: 'Venas retinianas dilatadas y segmentadas ("en salchicha"), en ocasiones con hemorragias o papiledema en casos graves; el hallazgo objetivo más específico.', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'Fondo de ojo (examen directo)', hallazgos: 'Hallazgo central en la evaluación de la hiperviscosidad sintomática; venas retinianas dilatadas y segmentadas características.' },
      { modalidad: 'TC/RM cerebral', hallazgos: 'Considerada si hay síntomas neurológicos focales o alteración del estado de conciencia, para descartar hemorragia intracraneal o infarto asociado (ver Complicaciones).' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema es hiperviscosidad asintomática (hallazgo incidental de laboratorio) vs. sintomática (tríada clásica de sangrado, alteración visual, y síntomas neurológicos, con o sin hallazgo de fondo de ojo, calculadora), que determina la indicación de tratamiento urgente; el mecanismo causal (plasmático vs. celular) orienta el tratamiento específico dirigido.',
    escalas: [
      { nombre: 'Criterios de Hiperviscosidad Sintomática', componentes: 'Sangrado mucocutáneo, alteración visual, síntomas neurológicos, hallazgo de fondo de ojo. Calculadora disponible más abajo.', formula: '2 o más criterios presentes, o el hallazgo de fondo de ojo por sí solo, indican plasmaféresis urgente.', interpretacion: 'Orienta la decisión entre vigilancia y tratamiento urgente (plasmaféresis o leucaféresis/flebotomía según el mecanismo causal).' },
      { nombre: 'Umbral de leucocitos para leucostasis', componentes: 'Recuento leucocitario absoluto.', formula: 'Riesgo considerablemente aumentado con leucocitos &gt;100,000/µL, particularmente en leucemia mieloide aguda; el umbral es algo mayor en leucemia linfoblástica aguda, dado que los linfoblastos son de menor tamaño y rigidez relativa que los blastos mieloides.', interpretacion: 'Un umbral orientador, no absoluto: el riesgo de leucostasis depende tanto del recuento como del tipo específico de blasto circulante.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Hiperviscosidad por Macroglobulinemia de Waldenström',
      color: '#3d5a73',
      definicion: 'La causa clásica y más frecuentemente asociada al síndrome de hiperviscosidad sintomático: la macroglobulinemia de Waldenström produce una proteína M de tipo IgM, una molécula pentamérica de gran tamaño con una tendencia particular a formar agregados de alto peso molecular, que aumenta desproporcionadamente la viscosidad plasmática incluso a concentraciones relativamente moderadas en comparación con otros tipos de inmunoglobulina.',
      fisiopatologia: 'La estructura pentamérica de la IgM (5 veces el tamaño de una molécula de IgG monomérica) y su tendencia a la agregación intermolecular producen un efecto sobre la viscosidad plasmática desproporcionadamente mayor por gramo de proteína que cualquier otro tipo de inmunoglobulina, explicando por qué la hiperviscosidad sintomática es considerablemente más frecuente en la macroglobulinemia de Waldenström que en el mieloma múltiple pese a que ambas producen una proteína monoclonal.',
      epidemiologia: 'La hiperviscosidad sintomática ocurre en una proporción considerable de los pacientes con macroglobulinemia de Waldenström a lo largo de su enfermedad, siendo la causa más reconocida y frecuentemente citada de este síndrome en la práctica clínica.',
      factores_riesgo: ['Nivel de proteína M IgM muy elevado', 'Enfermedad de larga evolución sin tratamiento previo', 'Deshidratación concomitante', 'Concentración plasmática de IgM particularmente propensa a la agregación (variable entre pacientes)'],
      clinica: 'Tríada clásica de sangrado mucocutáneo, alteración visual, y síntomas neurológicos; puede acompañarse de otras manifestaciones propias de la macroglobulinemia de Waldenström (adenopatías, hepatoesplenomegalia, síntomas B, neuropatía periférica).',
      criterios_dx: 'Confirmación de la proteína M tipo IgM mediante electroforesis con inmunofijación, en un paciente con la tríada clínica compatible o el hallazgo de fondo de ojo característico (calculadora).',
      laboratorio: 'Electroforesis de proteínas séricas con inmunofijación (proteína M IgM), cuantificación de IgM sérica, biometría hemática (puede haber citopenias asociadas a la infiltración medular de la enfermedad de base).',
      imagen: 'Fondo de ojo como estudio central; TC/RM cerebral si hay síntomas neurológicos focales.',
      complementarios: 'Aspirado/biopsia de médula ósea para confirmar el diagnóstico de macroglobulinemia de Waldenström (infiltración linfoplasmocítica) si aún no está establecido.',
      dx_diferencial: 'Hiperviscosidad por mieloma múltiple (proteína M de otro tipo, ver esa tarjeta), hiperviscosidad celular (leucostasis o eritrocitosis, ver esas tarjetas si hay citosis marcada asociada).',
      tx_medico: 'Plasmaféresis urgente como medida temporal eficaz para reducir agudamente la concentración de IgM circulante, mientras se inicia o intensifica el tratamiento sistémico dirigido al clon linfoplasmocítico subyacente.',
      tx_farmacologico: 'Tratamiento sistémico dirigido al clon subyacente (esquemas basados en rituximab, con frecuencia combinado con otros agentes según el contexto) una vez estabilizado el cuadro agudo con plasmaféresis.',
      tx_intervencionista: 'Plasmaféresis como el procedimiento central para la hiperviscosidad sintomática aguda en este contexto.',
      criterios_uci: 'Hiperviscosidad grave con alteración del estado de conciencia, sangrado mayor asociado, compromiso cardiovascular por sobrecarga de volumen si se transfunde sin cautela (ver Complicaciones).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa a esta complicación en sí.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta a la plasmaféresis (síntomas, viscosidad sérica si está disponible).',
      seguimiento_ambulatorio: 'Vigilancia oftalmológica de seguimiento tras un episodio con afectación retiniana; seguimiento hematológico continuado del clon de base.',
      pronostico: 'La hiperviscosidad sintomática responde con frecuencia rápidamente a la plasmaféresis; el pronóstico a largo plazo depende del control del clon linfoplasmocítico subyacente.',
      algoritmo: ['Sospecha clínica (tríada) en paciente con macroglobulinemia de Waldenström conocida o recién diagnosticada → fondo de ojo + calculadora de criterios', 'Confirmar proteína M IgM por electroforesis con inmunofijación', 'Hiperviscosidad sintomática confirmada → plasmaféresis urgente', 'Iniciar o intensificar tratamiento sistémico dirigido al clon de base', 'Vigilancia de la respuesta clínica y de la recurrencia']
    },
    {
      nombre: 'Hiperviscosidad por Mieloma Múltiple',
      color: '#7a1f3d',
      definicion: 'Hiperviscosidad sintomática en el contexto del mieloma múltiple, considerablemente menos frecuente que en la macroglobulinemia de Waldenström dado que la mayoría de los tipos de proteína M del mieloma (particularmente IgG) tienen un efecto proporcionalmente menor sobre la viscosidad plasmática por gramo de proteína; ocurre con mayor frecuencia relativa en el mieloma de tipo IgA (que tiende a polimerizar) o en niveles muy elevados de IgG.',
      fisiopatologia: 'A diferencia de la IgM pentamérica, la IgG es monomérica y tiene un efecto considerablemente menor sobre la viscosidad plasmática por gramo de proteína; la IgA, aunque también monomérica en su forma más simple, tiene una tendencia mayor a la polimerización (formación de dímeros y oligómeros) que la IgG, lo que explica por qué el mieloma de tipo IgA es el subtipo con mayor riesgo relativo de hiperviscosidad sintomática dentro del mieloma múltiple, aunque considerablemente menor que la macroglobulinemia de Waldenström.',
      epidemiologia: 'La hiperviscosidad sintomática ocurre en una minoría de los pacientes con mieloma múltiple, con mayor frecuencia relativa en el subtipo IgA o en niveles muy elevados de proteína M de cualquier tipo.',
      factores_riesgo: ['Mieloma múltiple de tipo IgA', 'Nivel de proteína M muy elevado, particularmente IgG en concentraciones excepcionalmente altas', 'Deshidratación concomitante', 'Enfermedad de larga evolución sin tratamiento previo'],
      clinica: 'Tríada clásica de sangrado mucocutáneo, alteración visual, y síntomas neurológicos; con frecuencia coexisten las manifestaciones propias del mieloma activo (criterios CRAB, ver el tema de Mieloma Múltiple).',
      criterios_dx: 'Confirmación de la proteína M (particularmente IgA o IgG en concentración muy elevada) mediante electroforesis con inmunofijación, en un paciente con la tríada clínica compatible o el hallazgo de fondo de ojo característico (calculadora).',
      laboratorio: 'Electroforesis de proteínas séricas con inmunofijación, cuantificación de la proteína M, biometría hemática, calcio y función renal (para el estudio concurrente de los criterios CRAB del mieloma de base).',
      imagen: 'Fondo de ojo como estudio central; TC/RM cerebral si hay síntomas neurológicos focales.',
      complementarios: 'Estudio completo del mieloma de base (aspirado/biopsia de médula ósea, citogenética) si el diagnóstico no está aún establecido (ver el tema de Mieloma Múltiple para el desarrollo completo).',
      dx_diferencial: 'Hiperviscosidad por macroglobulinemia de Waldenström (proteína M tipo IgM, considerablemente más frecuente como causa de hiperviscosidad sintomática, ver esa tarjeta), hiperviscosidad celular (ver esas tarjetas si hay citosis marcada asociada).',
      tx_medico: 'Plasmaféresis urgente como medida temporal eficaz, mientras se inicia o intensifica el tratamiento sistémico dirigido al mieloma de base.',
      tx_farmacologico: 'Tratamiento sistémico del mieloma de base (ver el tema de Mieloma Múltiple) tras la estabilización aguda con plasmaféresis.',
      tx_intervencionista: 'Plasmaféresis como el procedimiento central para la hiperviscosidad sintomática aguda en este contexto.',
      criterios_uci: 'Hiperviscosidad grave con alteración del estado de conciencia, complicaciones asociadas del mieloma de base (ver el tema de Mieloma Múltiple).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa a esta complicación en sí, aunque el mieloma de base puede tener indicación de trasplante autólogo (ver el tema de Mieloma Múltiple).',
      seguimiento_hospitalario: 'Vigilancia de la respuesta a la plasmaféresis en paralelo con el manejo agudo del mieloma de base.',
      seguimiento_ambulatorio: 'Vigilancia oftalmológica de seguimiento tras un episodio con afectación retiniana; seguimiento hematológico continuado según el manejo estándar del mieloma múltiple.',
      pronostico: 'La hiperviscosidad sintomática responde con frecuencia rápidamente a la plasmaféresis; el pronóstico a largo plazo depende del control del mieloma de base.',
      algoritmo: ['Sospecha clínica (tríada) en paciente con mieloma múltiple conocido, particularmente tipo IgA → fondo de ojo + calculadora de criterios', 'Confirmar proteína M por electroforesis con inmunofijación', 'Hiperviscosidad sintomática confirmada → plasmaféresis urgente', 'Iniciar o intensificar tratamiento sistémico del mieloma de base', 'Vigilancia de la respuesta clínica y de la recurrencia']
    },
    {
      nombre: 'Hiperviscosidad Celular por Leucostasis',
      color: '#8a6a1f',
      definicion: 'Urgencia oncológica producida por hiperleucocitosis extrema (con frecuencia &gt;100,000/µL) en la leucemia aguda, particularmente la leucemia mieloide aguda, donde el gran tamaño y la rigidez relativa de los blastos mieloides circulantes obstruyen físicamente la microcirculación, un mecanismo de daño de órgano distinto y con frecuencia más agudo y grave que la hiperviscosidad plasmática por paraproteína.',
      fisiopatologia: 'A diferencia de la hiperviscosidad plasmática (donde el aumento de viscosidad es relativamente homogéneo en todo el plasma), la leucostasis ocurre por un mecanismo predominantemente mecánico y de adhesión: los blastos mieloides (particularmente en ciertos subtipos como la leucemia monocítica aguda) son de mayor tamaño, menos deformables, y expresan moléculas de adhesión que favorecen su interacción con el endotelio vascular, produciendo obstrucción física de la microcirculación además del efecto sobre la viscosidad global; esto explica por qué la leucostasis puede producir isquemia tisular focal y hemorragia (particularmente pulmonar y del sistema nervioso central) de forma más aguda y catastrófica que la hiperviscosidad plasmática.',
      epidemiologia: 'Ocurre en una proporción relevante de los pacientes con leucemia mieloide aguda que se presentan con hiperleucocitosis extrema al momento del diagnóstico, siendo una urgencia oncológica reconocida con mortalidad temprana considerable si no se trata con prontitud.',
      factores_riesgo: ['Leucemia mieloide aguda con recuento leucocitario &gt;100,000/µL', 'Subtipos monocíticos de leucemia mieloide aguda (mayor riesgo relativo por las características de adhesión de los monoblastos)', 'Leucemia linfoblástica aguda con hiperleucocitosis extrema (menor riesgo relativo que la mieloide, dado el menor tamaño de los linfoblastos, pero posible con recuentos aún más elevados)'],
      clinica: 'Disnea e hipoxemia (leucostasis pulmonar), síntomas neurológicos focales o alteración del estado de conciencia (leucostasis del sistema nervioso central), en ocasiones prioapismo por leucostasis del cuerpo cavernoso; con frecuencia coexiste con manifestaciones de síndrome de lisis tumoral asociado (ver el tema de Leucemia Aguda).',
      criterios_dx: 'Diagnóstico clínico basado en la combinación de hiperleucocitosis extrema documentada por biometría hemática y síntomas compatibles con obstrucción microvascular (respiratorios, neurológicos), en el contexto de leucemia aguda confirmada o fuertemente sospechada.',
      laboratorio: `Biometría hemática con recuento leucocitario extremo y frotis de sangre periférica confirmando blastos circulantes; gasometría arterial si hay síntomas respiratorios (aunque la saturación de oxígeno medida por pulsioximetría puede ser artificialmente baja por el consumo de oxígeno de los blastos en la muestra, un fenómeno reconocido como pseudohipoxemia).${figBlock('Imagen 3', 'Frotis de sangre en leucemia monocítica aguda', '<img src="https://upload.wikimedia.org/wikipedia/commons/1/12/AML-M5B.jpg" alt="Frotis de sangre periférica de leucemia monocítica aguda (AML-M5B): promonocitos predominantes con citoplasma abundante y núcleos de contornos plegados; el subtipo monocítico tiene mayor riesgo relativo de leucostasis." style="width:100%;max-width:380px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">')}`,
      imagen: 'Radiografía o TC de tórax si hay síntomas respiratorios; TC/RM cerebral si hay síntomas neurológicos focales.',
      complementarios: 'Vigilancia concurrente de síndrome de lisis tumoral (calcio, fósforo, potasio, ácido úrico, función renal), dado que con frecuencia coexiste en este contexto.',
      dx_diferencial: 'Otras causas de disnea/hipoxemia en el paciente con leucemia aguda (neumonía, sobrecarga de volumen), otras causas de síntomas neurológicos agudos (hemorragia intracraneal espontánea por trombocitopenia asociada, que puede coexistir con la leucostasis).',
      tx_medico: 'Citorreducción urgente como medida central: quimioterapia de inducción de inicio inmediato si es factible, o hidroxiurea como medida puente de citorreducción rápida mientras se organiza el tratamiento definitivo; hidratación intravenosa y profilaxis de síndrome de lisis tumoral concurrentes.',
      tx_farmacologico: 'Hidroxiurea para citorreducción rápida como medida puente; quimioterapia de inducción definitiva según el subtipo de leucemia aguda confirmado (ver el tema de Leucemia Aguda); profilaxis de síndrome de lisis tumoral (alopurinol o rasburicasa según el riesgo).',
      tx_intervencionista: 'Leucaféresis urgente considerada en casos seleccionados de leucostasis sintomática grave, particularmente cuando la citorreducción farmacológica no puede iniciarse de inmediato, aunque su beneficio adicional sobre la citorreducción farmacológica urgente por sí sola sigue siendo objeto de debate; evitar la transfusión de concentrado eritrocitario no urgente en el paciente con hiperleucocitosis extrema no controlada, dado que puede aumentar aún más la viscosidad sanguínea global y agravar la leucostasis.',
      criterios_uci: 'Insuficiencia respiratoria aguda por leucostasis pulmonar, alteración del estado de conciencia por leucostasis del sistema nervioso central, síndrome de lisis tumoral grave concurrente.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante alogénico de células madre hematopoyéticas considerado según el subtipo y riesgo de la leucemia aguda de base, una vez controlada la urgencia aguda (ver el tema de Leucemia Aguda).',
      seguimiento_hospitalario: 'Vigilancia respiratoria y neurológica estrecha durante la citorreducción urgente; vigilancia concurrente de síndrome de lisis tumoral.',
      seguimiento_ambulatorio: 'Seguimiento dirigido por el manejo específico de la leucemia aguda de base tras la resolución de la urgencia aguda.',
      pronostico: 'La leucostasis no reconocida o tratada con retraso tiene una mortalidad temprana considerable; el reconocimiento oportuno y la citorreducción urgente mejoran sustancialmente el desenlace inmediato.',
      algoritmo: ['Leucocitos &gt;100,000/µL + síntomas respiratorios/neurológicos → sospechar leucostasis, urgencia oncológica', 'Hidratación intravenosa + profilaxis de síndrome de lisis tumoral de inmediato', 'Citorreducción urgente: hidroxiurea como puente, o quimioterapia de inducción inmediata si es factible', 'Evitar transfusión eritrocitaria no urgente (puede agravar la viscosidad global)', 'Considerar leucaféresis en casos seleccionados de leucostasis grave sin citorreducción farmacológica inmediata disponible']
    },
    {
      nombre: 'Hiperviscosidad Celular por Eritrocitosis/Policitemia',
      color: '#3f6b52',
      definicion: 'Hiperviscosidad producida por un aumento marcado de la masa eritrocitaria circulante, con mayor frecuencia en el contexto de la policitemia vera, donde el hematocrito elevado aumenta directamente la viscosidad de la sangre por la mayor fracción celular, un mecanismo distinto tanto de la hiperviscosidad plasmática (paraproteína) como de la leucostasis (blastos), y asociado característicamente a un mayor riesgo trombótico (más que hemorrágico, a diferencia de las otras causas de este tema).',
      fisiopatologia: 'La relación entre el hematocrito y la viscosidad sanguínea no es lineal sino exponencial: por encima de un hematocrito de aproximadamente 55-60%, incrementos relativamente pequeños adicionales en la masa eritrocitaria producen aumentos desproporcionadamente grandes de la viscosidad sanguínea global, explicando por qué el control estricto del hematocrito es la piedra angular del manejo de la policitemia vera; a diferencia de la hiperviscosidad plasmática o la leucostasis (predominantemente asociadas a sangrado), la hiperviscosidad por eritrocitosis se asocia característicamente a un mayor riesgo trombótico (arterial y venoso), dado que el mecanismo central aquí es el enlentecimiento del flujo por la mayor fracción celular, más que la disfunción plaquetaria adquirida.',
      epidemiologia: 'La eritrocitosis sintomática es una manifestación reconocida de la policitemia vera no controlada, con síntomas relacionados con la viscosidad presentes en una proporción considerable de los pacientes al momento del diagnóstico antes de iniciar tratamiento.',
      factores_riesgo: ['Policitemia vera con hematocrito &gt;55-60% no controlado', 'Deshidratación concomitante (agrava aún más la eritrocitosis relativa)', 'Tabaquismo activo (eritrocitosis secundaria adicional por hipoxia crónica)', 'Ausencia de tratamiento citorreductor o de flebotomía en la policitemia vera conocida'],
      clinica: 'Cefalea, mareo, acúfenos, alteraciones visuales transitorias, eritromelalgia (dolor y eritema urente en manos/pies), prurito acuagénico característico (tras el baño); a diferencia de las otras causas de este tema, predomina el riesgo trombótico (eventos cerebrovasculares isquémicos, trombosis venosa, incluyendo localizaciones atípicas como la trombosis de la vena porta o esplénica) sobre el sangrado.',
      criterios_dx: 'Hematocrito marcadamente elevado documentado por biometría hemática en un paciente con policitemia vera confirmada (o sospechada, con estudio dirigido: mutación JAK2, eritropoyetina sérica) y síntomas compatibles con hiperviscosidad.',
      laboratorio: 'Biometría hemática completa (hematocrito, hemoglobina), estudio de policitemia vera si aún no está establecido (mutación JAK2 V617F, eritropoyetina sérica suprimida), estudio de trombofilia si hay un evento trombótico asociado en localización atípica.',
      imagen: 'Estudio de imagen dirigido según el sitio del evento trombótico sospechado si hay síntomas compatibles (TC/RM cerebral, Doppler de miembros, ecografía abdominal con Doppler para trombosis portal/esplénica).',
      complementarios: 'Estudio de médula ósea para confirmar el diagnóstico de policitemia vera si aún no está establecido (ver el tema de Síndromes Mieloproliferativos).',
      dx_diferencial: 'Eritrocitosis secundaria por otra causa (hipoxia crónica, tabaquismo, producción ectópica de eritropoyetina), hiperviscosidad plasmática o por leucostasis (ver esas tarjetas, mecanismo distinto).',
      tx_medico: 'Flebotomía terapéutica como medida central y de acción más rápida para reducir agudamente el hematocrito y la viscosidad asociada; hidratación intravenosa adecuada (evitando la deshidratación, que agrava la eritrocitosis relativa).',
      tx_farmacologico: 'Tratamiento citorreductor de mantenimiento (hidroxiurea u otro agente según el perfil de riesgo) para el control a largo plazo de la policitemia vera de base; ácido acetilsalicílico en dosis bajas de forma sistemática, dado el riesgo trombótico asociado, salvo contraindicación específica.',
      tx_intervencionista: 'Flebotomía terapéutica seriada como el procedimiento central, tanto en el manejo agudo como en el mantenimiento a largo plazo del hematocrito objetivo.',
      criterios_uci: 'Evento trombótico mayor (accidente cerebrovascular isquémico extenso, trombosis venosa con compromiso significativo) que requiera manejo intensivo.',
      criterios_tips: 'Considerada en el contexto específico de trombosis portal/esplénica con hipertensión portal significativa asociada, evaluado caso por caso.',
      criterios_trasplante: 'No aplica de forma directa a esta complicación en sí.',
      seguimiento_hospitalario: 'Vigilancia del hematocrito seriado durante la flebotomía terapéutica aguda; vigilancia de complicaciones trombóticas.',
      seguimiento_ambulatorio: 'Flebotomías de mantenimiento programadas y tratamiento citorreductor continuado según el manejo estándar de la policitemia vera (ver el tema de Síndromes Mieloproliferativos); vigilancia continuada del hematocrito objetivo.',
      pronostico: 'Favorable con el control adecuado y sostenido del hematocrito mediante flebotomía y/o citorreducción; el riesgo trombótico se reduce sustancialmente con el tratamiento apropiado y mantenido en el tiempo.',
      algoritmo: ['Síntomas de hiperviscosidad (cefalea, mareo, eritromelalgia) en paciente con hematocrito muy elevado → sospechar eritrocitosis sintomática', 'Confirmar/estudiar policitemia vera de base (mutación JAK2, eritropoyetina sérica)', 'Flebotomía terapéutica urgente para reducir agudamente el hematocrito', 'Hidratación intravenosa adecuada, evitando deshidratación adicional', 'Tratamiento citorreductor de mantenimiento + ácido acetilsalicílico en dosis bajas a largo plazo']
    },
    {
      nombre: 'Complicaciones neurológicas',
      color: '#7a1f3d',
      definicion: 'Espectro de complicaciones neurológicas del síndrome de hiperviscosidad, independientemente de su mecanismo causal: desde síntomas inespecíficos leves (cefalea, mareo) hasta accidente cerebrovascular isquémico, hemorragia intracraneal, y encefalopatía con alteración del estado de conciencia, reflejando el efecto directo del flujo microvascular alterado sobre el sistema nervioso central, uno de los órganos más sensibles a este mecanismo de daño.',
      fisiopatologia: 'El sistema nervioso central es particularmente vulnerable al enlentecimiento del flujo microvascular dado su alto requerimiento metabólico y su limitada tolerancia a la hipoxia tisular incluso transitoria; en la hiperviscosidad plasmática y en la eritrocitosis, el mecanismo predominante es la hipoperfusión/isquemia focal por flujo lento (con mayor riesgo trombótico franco en la eritrocitosis); en la hiperviscosidad plasmática, además, la disfunción plaquetaria adquirida asociada aumenta el riesgo de hemorragia intracraneal espontánea, un mecanismo hemorrágico distinto y adicional al isquémico.',
      epidemiologia: 'Las complicaciones neurológicas son una de las manifestaciones más temidas del síndrome de hiperviscosidad dado su potencial de secuela permanente o fatalidad si no se reconocen y tratan con prontitud, particularmente en la leucostasis del sistema nervioso central y en los eventos trombóticos de la eritrocitosis por policitemia vera.',
      factores_riesgo: ['Hiperviscosidad grave no reconocida ni tratada oportunamente', 'Disfunción plaquetaria adquirida concomitante (particularmente en la hiperviscosidad plasmática)', 'Hipertensión arterial no controlada asociada', 'Deshidratación que agrava cualquier causa de hiperviscosidad'],
      clinica: 'Cefalea, mareo, acúfenos como síntomas iniciales inespecíficos; progresión a confusión, letargo, y en casos graves coma; déficit neurológico focal si hay un evento isquémico o hemorrágico establecido.',
      criterios_dx: 'Evaluación neurológica clínica completa; TC/RM cerebral urgente ante cualquier déficit focal o alteración significativa del estado de conciencia para distinguir un mecanismo isquémico de uno hemorrágico, dado que el manejo difiere sustancialmente.',
      laboratorio: 'Biometría hemática y estudio de coagulación (particularmente relevante si se sospecha un componente hemorrágico por disfunción plaquetaria adquirida).',
      imagen: 'TC cerebral simple urgente como primer estudio ante cualquier deterioro neurológico agudo, para distinguir isquemia de hemorragia; RM cerebral en casos seleccionados para mayor caracterización.',
      complementarios: 'Evaluación neurológica especializada urgente ante cualquier déficit focal.',
      dx_diferencial: 'Otras causas de alteración neurológica aguda en el paciente con la neoplasia hematológica de base (metástasis o infiltración del sistema nervioso central, infección del sistema nervioso central en el paciente inmunocomprometido).',
      tx_medico: 'Tratamiento urgente y específico dirigido a la causa de la hiperviscosidad (plasmaféresis, citorreducción, o flebotomía según el mecanismo, ver las tarjetas correspondientes) como la medida central para revertir el mecanismo subyacente; manejo de soporte neurológico estándar según el tipo de evento (isquémico vs. hemorrágico).',
      tx_farmacologico: 'Específico según el evento neurológico confirmado y su mecanismo; anticoagulación o trombolisis contraindicadas o de uso muy cauteloso en el contexto de hiperviscosidad activa con riesgo hemorrágico concomitante, decisión que requiere individualización cuidadosa.',
      tx_intervencionista: 'Plasmaféresis, leucaféresis, o flebotomía urgentes según el mecanismo causal identificado (ver las tarjetas correspondientes); manejo neuroquirúrgico si hay hemorragia intracraneal con indicación de evacuación.',
      criterios_uci: 'Alteración significativa del estado de conciencia, déficit neurológico focal grave, cualquier evento cerebrovascular agudo confirmado.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurológica seriada estrecha durante el tratamiento urgente de la causa subyacente.',
      seguimiento_ambulatorio: 'Rehabilitación neurológica según las secuelas si las hubiera; seguimiento continuado del control de la causa hematológica de base para prevenir recurrencia.',
      pronostico: 'Depende críticamente de la rapidez del reconocimiento y tratamiento; un evento isquémico o hemorrágico ya establecido puede dejar secuela permanente incluso con tratamiento oportuno de la causa subyacente.',
      algoritmo: ['Síntomas neurológicos en paciente con hiperviscosidad conocida o sospechada → evaluación neurológica urgente', 'Déficit focal o alteración de conciencia → TC cerebral simple urgente (distinguir isquemia de hemorragia)', 'Tratamiento urgente dirigido al mecanismo causal de la hiperviscosidad (plasmaféresis/citorreducción/flebotomía)', 'Manejo de soporte neurológico específico según el tipo de evento', 'Vigilancia neurológica seriada estrecha']
    },
    {
      nombre: 'Complicaciones oftalmológicas',
      color: '#3d5a73',
      definicion: 'Espectro de complicaciones oftalmológicas del síndrome de hiperviscosidad: desde el hallazgo característico de fondo de ojo (venas retinianas dilatadas y segmentadas "en salchicha") hasta la pérdida visual significativa por hemorragia retiniana, edema macular, o incluso oclusión de la vena central de la retina en casos graves y prolongados.',
      fisiopatologia: 'La circulación retiniana, con sus vasos de muy pequeño calibre y su alto requerimiento metabólico (segundo solo al cerebro en consumo de oxígeno por unidad de tejido), es particularmente vulnerable al enlentecimiento del flujo por hiperviscosidad; el patrón característico de dilatación y segmentación venosa ("en salchicha") refleja el flujo lento e irregular a través de esos vasos de pequeño calibre, y en casos más graves y prolongados puede progresar a hemorragias retinianas francas, edema macular, o incluso oclusión venosa retiniana franca con pérdida visual permanente si no se trata a tiempo.',
      epidemiologia: 'El hallazgo de fondo de ojo característico está presente en una proporción considerable de los pacientes con hiperviscosidad sintomática franca, siendo uno de los signos objetivos más específicos y reproducibles del síndrome.',
      factores_riesgo: ['Hiperviscosidad grave y prolongada sin tratamiento', 'Hipertensión arterial concomitante (agrava el compromiso vascular retiniano)', 'Retraso en el reconocimiento del síndrome de hiperviscosidad subyacente'],
      clinica: 'Visión borrosa progresiva, escotomas, en casos graves pérdida visual significativa unilateral o bilateral; el examen de fondo de ojo muestra el patrón característico "en salchicha" de las venas retinianas, con o sin hemorragias asociadas.',
      criterios_dx: 'Examen de fondo de ojo (parte de la calculadora de criterios de hiperviscosidad sintomática) que confirma el patrón característico; evaluación oftalmológica formal en casos con pérdida visual significativa o hallazgos atípicos.',
      laboratorio: 'No específico para esta complicación en sí; dirigido al estudio de la causa de la hiperviscosidad de base.',
      imagen: 'Fondo de ojo como el estudio central; tomografía de coherencia óptica considerada en casos seleccionados con edema macular para su caracterización y seguimiento.',
      complementarios: 'Evaluación oftalmológica formal urgente si hay pérdida visual significativa o hallazgos que sugieran oclusión venosa retiniana franca.',
      dx_diferencial: 'Otras causas de venas retinianas dilatadas (insuficiencia cardiaca derecha grave, hipertensión intracraneal con papiledema), otras causas de pérdida visual aguda en el paciente con neoplasia hematológica de base.',
      tx_medico: 'Tratamiento urgente y específico dirigido a la causa de la hiperviscosidad como la medida central para prevenir la progresión del daño retiniano y permitir su recuperación.',
      tx_farmacologico: 'No hay un tratamiento farmacológico oftalmológico específico dirigido al hallazgo en sí; el manejo se centra en corregir la hiperviscosidad subyacente.',
      tx_intervencionista: 'Plasmaféresis, leucaféresis, o flebotomía urgentes según el mecanismo causal identificado (ver las tarjetas correspondientes).',
      criterios_uci: 'No aplica directamente a esta complicación en sí, salvo en el contexto de la urgencia hematológica sistémica asociada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta del hallazgo de fondo de ojo al tratamiento urgente de la causa subyacente.',
      seguimiento_ambulatorio: 'Seguimiento oftalmológico programado tras un episodio con afectación retiniana significativa para documentar la resolución o cualquier secuela residual.',
      pronostico: 'El hallazgo de fondo de ojo con frecuencia mejora rápidamente tras el tratamiento eficaz de la hiperviscosidad subyacente; la pérdida visual ya establecida por oclusión venosa retiniana franca puede dejar secuela permanente si el tratamiento se retrasa considerablemente.',
      algoritmo: ['Sospecha de hiperviscosidad → examen de fondo de ojo sistemático (parte de la calculadora)', 'Patrón característico "en salchicha" confirmado → apoya fuertemente el diagnóstico de hiperviscosidad sintomática', 'Tratamiento urgente dirigido al mecanismo causal de la hiperviscosidad', 'Evaluación oftalmológica formal si hay pérdida visual significativa', 'Seguimiento oftalmológico programado tras la resolución del episodio agudo']
    },
    {
      nombre: 'Complicaciones cardiovasculares',
      color: '#8c3a34',
      definicion: 'Complicaciones cardiovasculares del síndrome de hiperviscosidad, particularmente relevantes en el contexto del manejo agudo: insuficiencia cardiaca por sobrecarga de volumen, especialmente cuando se transfunde concentrado eritrocitario sin la cautela apropiada en un paciente con viscosidad ya elevada, lo que puede agravar paradójicamente la hiperviscosidad y precipitar descompensación cardiovascular aguda.',
      fisiopatologia: 'La transfusión de concentrado eritrocitario en un paciente con hiperviscosidad ya establecida (particularmente por eritrocitosis o leucostasis) aumenta aún más la viscosidad sanguínea global y el volumen circulante total, pudiendo precipitar tanto un empeoramiento agudo de los síntomas de hiperviscosidad (isquemia tisular por flujo aún más lento) como una sobrecarga de volumen que descompensa la función cardiaca, particularmente en el paciente con reserva cardiaca ya limitada por edad avanzada u otra comorbilidad cardiovascular; este es un principio de manejo crítico que distingue el abordaje transfusional en la hiperviscosidad del manejo transfusional estándar de la anemia.',
      epidemiologia: 'Un riesgo reconocido y prevenible en el manejo del paciente con hiperviscosidad, particularmente relevante cuando el equipo tratante no está familiarizado con este principio específico y transfunde concentrado eritrocitario de forma reflexiva ante una anemia concomitante sin considerar el efecto sobre la viscosidad global.',
      factores_riesgo: ['Transfusión de concentrado eritrocitario sin cautela en presencia de hiperviscosidad activa no controlada', 'Reserva cardiaca limitada de base (edad avanzada, cardiopatía estructural conocida)', 'Sobrecarga de volumen por hidratación intravenosa agresiva sin monitorización adecuada en el paciente con compromiso cardiaco de base', 'Eritrocitosis marcada de base (mayor riesgo al añadir volumen adicional)'],
      clinica: 'Disnea progresiva, ortopnea, edema de miembros inferiores, estertores pulmonares a la auscultación; en casos graves, edema pulmonar agudo franco.',
      criterios_dx: 'Diagnóstico clínico de insuficiencia cardiaca aguda descompensada en el contexto temporal apropiado (particularmente tras una transfusión o hidratación agresiva reciente en un paciente con hiperviscosidad de base), apoyado por radiografía de tórax y péptidos natriuréticos si están disponibles.',
      laboratorio: 'Péptido natriurético (NT-proBNP o BNP) como apoyo diagnóstico si está disponible; biometría hemática para reevaluar el grado de anemia/eritrocitosis de base.',
      imagen: 'Radiografía de tórax (congestión pulmonar, cardiomegalia); ecocardiograma si hay duda diagnóstica o para evaluar la función cardiaca de base.',
      complementarios: 'Revisión crítica de la indicación y el ritmo de cualquier transfusión reciente en el paciente con hiperviscosidad conocida.',
      dx_diferencial: 'Otras causas de disnea aguda en el paciente hematológico (leucostasis pulmonar en sí misma, neumonía, tromboembolia pulmonar).',
      tx_medico: 'Manejo estándar de la insuficiencia cardiaca aguda descompensada (diuréticos, oxígeno suplementario según necesidad); en el paciente con anemia sintomática concomitante que requiere transfusión, hacerlo con extrema cautela: volúmenes pequeños, ritmo lento, y considerar plasmaféresis o exanguinotransfusión parcial en lugar de una transfusión simple cuando la hiperviscosidad esté activa.',
      tx_farmacologico: 'Diuréticos de asa para el manejo de la sobrecarga de volumen aguda según el protocolo estándar de insuficiencia cardiaca descompensada.',
      tx_intervencionista: 'No aplica de forma directa más allá del manejo médico estándar de la insuficiencia cardiaca aguda.',
      criterios_uci: 'Edema pulmonar agudo con compromiso respiratorio significativo, inestabilidad hemodinámica asociada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia estrecha del balance de volumen y la función respiratoria durante cualquier transfusión o hidratación en el paciente con hiperviscosidad activa.',
      seguimiento_ambulatorio: 'Educación del equipo tratante y documentación explícita en el expediente sobre la necesidad de cautela transfusional en el paciente con antecedente de hiperviscosidad.',
      pronostico: 'Favorable con reconocimiento oportuno y manejo apropiado; esta complicación es en gran medida prevenible mediante la aplicación cuidadosa del principio de cautela transfusional en el paciente con hiperviscosidad conocida.',
      algoritmo: ['Paciente con hiperviscosidad conocida que requiere transfusión por anemia concomitante → extremar cautela', 'Transfundir en volúmenes pequeños y a ritmo lento, con vigilancia clínica estrecha', 'Considerar plasmaféresis o exanguinotransfusión parcial en lugar de transfusión simple si la hiperviscosidad está activa', 'Disnea/edema tras transfusión o hidratación → sospechar sobrecarga de volumen, radiografía de tórax', 'Manejo estándar de insuficiencia cardiaca aguda descompensada si se confirma']
    },
    {
      nombre: 'Complicaciones hemorrágicas mucocutáneas',
      color: '#6b4a2e',
      definicion: 'Sangrado mucocutáneo (epistaxis, gingivorragia, equimosis, sangrado gastrointestinal ocasional) producido por disfunción plaquetaria adquirida en el contexto de la hiperviscosidad, particularmente la de origen plasmático, uno de los 3 componentes de la tríada clínica clásica y con frecuencia el signo de alarma inicial más notado por el propio paciente.',
      fisiopatologia: 'En la hiperviscosidad plasmática, la paraproteína circulante en exceso recubre la superficie de las plaquetas y interfiere con su función normal de adhesión y agregación, produciendo una disfunción plaquetaria adquirida (cualitativa, no cuantitativa: el recuento plaquetario con frecuencia es normal) que se manifiesta clínicamente como sangrado mucocutáneo pese a un recuento plaquetario numéricamente adecuado; en la leucostasis, un mecanismo adicional de consumo plaquetario y coagulopatía asociada a la lisis de blastos puede contribuir al sangrado; en la eritrocitosis por policitemia vera, en cambio, predomina el riesgo trombótico sobre el hemorrágico (ver esa tarjeta), aunque puede coexistir una disfunción plaquetaria cualitativa adquirida propia de los síndromes mieloproliferativos.',
      epidemiologia: 'El sangrado mucocutáneo es uno de los componentes más frecuentes de la tríada clínica de hiperviscosidad sintomática, particularmente en la hiperviscosidad de origen plasmático (Waldenström, mieloma), y con frecuencia el síntoma que motiva la consulta inicial.',
      factores_riesgo: ['Nivel de paraproteína muy elevado (mayor disfunción plaquetaria adquirida)', 'Trombocitopenia concomitante por infiltración medular de la enfermedad de base', 'Uso concurrente de antiagregantes o anticoagulantes', 'Procedimientos invasivos recientes (mayor riesgo de sangrado en el sitio del procedimiento)'],
      clinica: 'Epistaxis recurrente o prolongada, gingivorragia espontánea o con el cepillado dental, equimosis fáciles, en ocasiones sangrado gastrointestinal o genitourinario; el sangrado mucocutáneo con frecuencia precede o acompaña a los otros componentes de la tríada clásica.',
      criterios_dx: 'Diagnóstico clínico basado en el patrón de sangrado mucocutáneo característico en un paciente con hiperviscosidad conocida o sospechada (parte de la calculadora de criterios); el recuento plaquetario es con frecuencia normal, lo que distingue este mecanismo de una trombocitopenia clásica.',
      laboratorio: 'Biometría hemática con recuento plaquetario (con frecuencia normal o solo levemente reducido, a diferencia de lo que el sangrado clínico podría sugerir); estudio de coagulación estándar si hay sangrado significativo, para descartar un componente coagulopático adicional.',
      imagen: 'No indicada de rutina salvo para localizar y caracterizar un sitio de sangrado específico si es significativo (endoscopia ante sangrado gastrointestinal, por ejemplo).',
      complementarios: 'Estudio de función plaquetaria especializado en casos seleccionados de duda diagnóstica, aunque rara vez necesario dado que el contexto clínico (hiperviscosidad conocida + sangrado con recuento plaquetario normal) suele ser suficientemente característico.',
      dx_diferencial: 'Trombocitopenia verdadera por infiltración medular de la enfermedad de base (recuento plaquetario bajo, mecanismo distinto), coagulopatía asociada a otra causa (enfermedad hepática, coagulación intravascular diseminada en el contexto de leucostasis con lisis tumoral).',
      tx_medico: 'Tratamiento urgente y específico dirigido a la causa de la hiperviscosidad (plasmaféresis particularmente eficaz para revertir la disfunción plaquetaria adquirida al remover la paraproteína circulante) como la medida central; medidas locales de hemostasia para el sangrado activo (taponamiento nasal en epistaxis, por ejemplo).',
      tx_farmacologico: 'Transfusión de plaquetas de utilidad limitada en este contexto específico, dado que el mecanismo es disfuncional (cualitativo) y no cuantitativo, por lo que las plaquetas transfundidas también quedarán disfuncionales mientras persista la paraproteinemia no tratada; ácido tranexámico considerado como medida adyuvante para el sangrado mucocutáneo significativo.',
      tx_intervencionista: 'Plasmaféresis urgente como la medida más eficaz para revertir la disfunción plaquetaria adquirida, dado que remueve directamente la paraproteína causal; medidas locales de hemostasia según el sitio de sangrado.',
      criterios_uci: 'Sangrado mayor con compromiso hemodinámico, infrecuente pero posible en casos graves no tratados oportunamente.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia del sangrado activo y de la respuesta a la plasmaféresis urgente.',
      seguimiento_ambulatorio: 'Vigilancia de la resolución del sangrado mucocutáneo en paralelo con el control de la causa hematológica de base.',
      pronostico: 'Favorable con el tratamiento eficaz de la hiperviscosidad subyacente, que revierte la disfunción plaquetaria adquirida; el sangrado mucocutáneo aislado rara vez es por sí solo una amenaza inmediata a la vida, a diferencia de las complicaciones neurológicas o cardiovasculares del mismo síndrome.',
      algoritmo: ['Sangrado mucocutáneo (epistaxis, gingivorragia) en paciente con paraproteinemia conocida → sospechar disfunción plaquetaria adquirida por hiperviscosidad', 'Biometría hemática: recuento plaquetario con frecuencia normal (distingue de trombocitopenia verdadera)', 'Medidas locales de hemostasia para el sangrado activo', 'Plasmaféresis urgente como medida más eficaz para revertir la disfunción plaquetaria', 'Evitar depender de la transfusión de plaquetas como medida aislada, dado el mecanismo cualitativo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario del síndrome de hiperviscosidad se centra en el manejo urgente de la causa subyacente (plasmaféresis, citorreducción, o flebotomía según el mecanismo) y en la vigilancia estrecha de las complicaciones de órgano, particularmente neurológicas y cardiovasculares.',
    parametros: ['Estado neurológico seriado', 'Balance de volumen, particularmente durante cualquier transfusión o hidratación', 'Respuesta clínica al tratamiento urgente dirigido (plasmaféresis/citorreducción/flebotomía)'],
    criterios_uci_general: 'Alteración significativa del estado de conciencia, evento cerebrovascular agudo confirmado, insuficiencia respiratoria por leucostasis pulmonar, edema pulmonar agudo por sobrecarga de volumen.',
    criterios_tips_general: 'No aplica de forma directa a este tema, salvo en el contexto específico de trombosis portal/esplénica asociada a eritrocitosis con hipertensión portal significativa.',
    criterios_trasplante_general: 'Según la enfermedad hematológica de base específica (ver los temas correspondientes de cada neoplasia); no aplica directamente al síndrome de hiperviscosidad en sí.',
    prevencion: 'Reconocimiento temprano mediante la aplicación sistemática de los criterios de hiperviscosidad sintomática (calculadora) en todo paciente con una neoplasia hematológica predisponente conocida; cautela transfusional extrema en el paciente con hiperviscosidad activa; hidratación adecuada evitando la deshidratación, que agrava cualquier mecanismo de hiperviscosidad; control estricto y mantenido del hematocrito en la policitemia vera conocida.'
  }
};

export const compCites = {
  'Hiperviscosidad por Macroglobulinemia de Waldenström': [1, 3, 11],
  'Hiperviscosidad por Mieloma Múltiple': [1, 13],
  'Hiperviscosidad Celular por Leucostasis': [5, 6, 7],
  'Hiperviscosidad Celular por Eritrocitosis/Policitemia': [8],
  'Complicaciones neurológicas': [2, 14],
  'Complicaciones oftalmológicas': [10],
  'Complicaciones cardiovasculares': [11, 12],
  'Complicaciones hemorrágicas mucocutáneas': [4, 11]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Criterios de Hiperviscosidad Sintomática': [1, 2, 10],
  'Umbral de leucocitos para leucostasis': [5, 7]
};
export const escalaCalc = { 'Criterios de Hiperviscosidad Sintomática': 'hiperviscosidad' };
export const compGroups = [
  { name: 'Hiperviscosidad por mecanismo', items: ['Hiperviscosidad por Macroglobulinemia de Waldenström', 'Hiperviscosidad por Mieloma Múltiple', 'Hiperviscosidad Celular por Leucostasis', 'Hiperviscosidad Celular por Eritrocitosis/Policitemia'] },
  { name: 'Complicaciones de órgano transversales', items: ['Complicaciones neurológicas', 'Complicaciones oftalmológicas', 'Complicaciones cardiovasculares', 'Complicaciones hemorrágicas mucocutáneas'] }
];
export const complicacionesIntro = 'Las 4 primeras tarjetas organizan el síndrome de hiperviscosidad por su mecanismo causal: 2 plasmáticas (paraproteína) y 2 celulares (exceso de leucocitos o eritrocitos); las siguientes 4 son complicaciones de órgano transversales, independientes del mecanismo causal específico.';
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
  root: { title: 'SÍNDROME DE HIPERVISCOSIDAD', color: '#6b3d5c', target: 'definicion' },
  branches: [
    { title: 'Por mecanismo (enfermedades)', sub: '2 plasmáticas + 2 celulares', color: '#3d5a73', target: 'diagnostico', leaves: [
      { title: 'Por Macroglobulinemia de Waldenström', sub: 'IgM, causa clásica', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Por Mieloma Múltiple', sub: 'IgA/IgG', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Celular por Leucostasis', sub: 'Hiperleucocitosis', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Celular por Eritrocitosis/Policitemia', sub: 'Hematocrito elevado', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones de órgano', sub: 'Transversales, independientes del mecanismo', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Neurológicas', sub: 'Ictus, hemorragia, encefalopatía', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Oftalmológicas', sub: 'Fondo de ojo "en salchicha"', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Cardiovasculares', sub: 'Sobrecarga transfusional', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Hemorrágicas mucocutáneas', sub: 'Disfunción plaquetaria', color: '#6b4a2e', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 4], no_invasivos: [1, 10] };
export const clasificacionCite = [1, 2, 7];
export const seguimientoCite = [11, 12];
