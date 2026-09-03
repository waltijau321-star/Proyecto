// topics/traumatismo-craneoencefalico/content.js: Traumatismo Craneoencefálico.
// Primero de 11 temas independientes que construyen el bloque XII (Neurología) del temario,
// según el plan acordado con el usuario para los 20 ítems pendientes de ese bloque.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás debe ser un `export const` de nivel superior, HERMANO de `content`.
//
// IMPORTANTE (ver memoria del proyecto sobre study.js): construir cada pregunta con la respuesta
// correcta en options[0]/correct:0 primero, verificar el conteo, y solo entonces redistribuir
// mecánicamente con un script.
//
// IMPORTANTE (ver memoria del proyecto sobre tarjetas/figuras/calculadoras): el número de
// tarjetas y de figuras de este tema NO sigue ningún default fijo (aquí, 4+4 por decisión
// explícita, justificado por 4 patrones de lesión realmente distintos por mecanismo/manejo y 4
// complicaciones de alto rendimiento). La Escala de Coma de Glasgow ya existe como escala de
// clasificación (sin calculadora) en topics/exploracion-neurologica/ — no se duplica aquí; en su
// lugar se construye una calculadora real para el Canadian CT Head Rule.

export const meta = {
  id: 'traumatismo-craneoencefalico',
  titulo: 'Traumatismo Craneoencefálico',
  subtitulo: 'Módulo 31 · Medicina Interna',
  accent: '#4a3d73',
  accentDim: '#8a7ab3'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const hematomasHtml = `
<div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;max-width:560px;margin:0 auto;font-size:10.5px;color:var(--ink);">
  <div style="flex:1;min-width:160px;text-align:center;">
    <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" style="width:120px;height:120px;">
      <circle cx="70" cy="70" r="62" fill="none" stroke="var(--line)" stroke-width="3"/>
      <path d="M 100 25 A 62 62 0 0 1 100 115 A 34 50 0 0 0 100 25 Z" fill="#8c3a34" opacity="0.8"/>
    </svg>
    <div style="font-weight:700;color:#8c3a34;">Epidural</div>
    <div style="color:var(--ink-dim);">Lente biconvexa, NO cruza suturas, con frecuencia atraviesa la línea media</div>
  </div>
  <div style="flex:1;min-width:160px;text-align:center;">
    <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" style="width:120px;height:120px;">
      <circle cx="70" cy="70" r="62" fill="none" stroke="var(--line)" stroke-width="3"/>
      <path d="M 102 12 A 62 62 0 0 1 102 128 A 70 70 0 0 0 102 12 Z" fill="#3d5a73" opacity="0.8"/>
    </svg>
    <div style="font-weight:700;color:#3d5a73;">Subdural</div>
    <div style="color:var(--ink-dim);">Semiluna cóncava, SÍ cruza suturas, no cruza la línea media (limitada por la hoz)</div>
  </div>
  <div style="flex:1;min-width:160px;text-align:center;">
    <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" style="width:120px;height:120px;">
      <circle cx="70" cy="70" r="62" fill="none" stroke="var(--line)" stroke-width="3"/>
      <path d="M40 30 Q70 20 100 32" stroke="#8a6a1f" stroke-width="5" fill="none" opacity="0.85"/>
      <path d="M30 55 Q70 45 110 58" stroke="#8a6a1f" stroke-width="5" fill="none" opacity="0.85"/>
      <path d="M25 80 Q70 70 115 82" stroke="#8a6a1f" stroke-width="5" fill="none" opacity="0.85"/>
      <path d="M35 105 Q70 98 105 108" stroke="#8a6a1f" stroke-width="5" fill="none" opacity="0.85"/>
    </svg>
    <div style="font-weight:700;color:#8a6a1f;">Hemorragia subaracnoidea</div>
    <div style="color:var(--ink-dim);">Hiperdensidad que rellena los surcos y cisternas, sin masa focal definida</div>
  </div>
</div>`;

const herniacionHtml = `
<div style="display:flex;flex-direction:column;gap:8px;max-width:480px;margin:0 auto;font-size:10.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:120px 1fr;gap:6px;align-items:center;">
    <div style="font-weight:700;color:#8c3a34;text-align:center;">Uncal (lateral)</div>
    <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:8px;padding:6px 10px;">El uncus del lóbulo temporal comprime el III par craneal → midriasis ipsilateral arreactiva, luego hemiparesia contralateral</div>

    <div style="font-weight:700;color:#3d5a73;text-align:center;">Central (transtentorial)</div>
    <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:8px;padding:6px 10px;">Desplazamiento simétrico descendente del diencéfalo → deterioro rostrocaudal progresivo del estado de alerta, pupilas mióticas que luego se dilatan</div>

    <div style="font-weight:700;color:#6b4a2e;text-align:center;">Amigdalina (tonsilar)</div>
    <div style="background:#6b4a2e22;border:1px solid #6b4a2e;border-radius:8px;padding:6px 10px;">Las amígdalas cerebelosas se impactan en el foramen magno → compresión del bulbo, paro respiratorio súbito, con frecuencia fatal</div>
  </div>
  <div style="color:var(--ink-dim);text-align:center;">La midriasis unilateral arreactiva ("pupila que se dilata") es el signo de alarma clásico que obliga a actuar de inmediato, antes de que progrese a herniación central o amigdalina.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El traumatismo craneoencefálico (TCE) es una de las principales causas de muerte y discapacidad relacionadas con trauma en todos los grupos de edad, con 2 picos característicos de incidencia: adultos jóvenes (colisiones vehiculares, violencia) y adultos mayores (caídas, con frecuencia sobre un cerebro ya atrófico y en el contexto de anticoagulación). La gravedad se clasifica según la Escala de Coma de Glasgow (GCS, ver el tema de Exploración Neurológica para la escala completa): leve (13-15), moderado (9-12), y severo (≤8), una clasificación que determina directamente la vía de manejo inicial.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Lesión primaria vs. secundaria.</strong> La lesión primaria ocurre en el momento del impacto (contusión, laceración, cizallamiento axonal) y es irreversible; la lesión secundaria se desarrolla en las horas y días siguientes por hipoxia, hipotensión, hipertensión intracraneal, o isquemia, y es potencialmente prevenible con un manejo oportuno. Analogía: la lesión primaria es como el daño de un choque de auto en el instante mismo del impacto (ya ocurrió, no se puede deshacer), mientras que la lesión secundaria es como el incendio que puede iniciarse después del choque si no se controla a tiempo: el objetivo de todo el manejo agudo del TCE es apagar ese "incendio" antes de que cause más daño que el impacto original.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Los 4 patrones de lesión intracraneal.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>TCE leve/conmoción cerebral</strong>: el más frecuente, disfunción neurológica transitoria sin lesión estructural visible en la mayoría de los casos.</li>
    <li><strong>Hematoma epidural</strong>: sangrado arterial entre el cráneo y la duramadre, clásicamente con intervalo lúcido; emergencia neuroquirúrgica.</li>
    <li><strong>Hematoma subdural</strong>: sangrado venoso entre la duramadre y la aracnoides, agudo o crónico según el tiempo de evolución.</li>
    <li><strong>Hemorragia subaracnoidea traumática y lesión axonal difusa</strong>: características del TCE moderado-severo por mecanismo de aceleración-desaceleración.</li>
  </ul>
</div>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama de complicaciones.</strong> El manejo agudo se centra en prevenir y tratar la lesión secundaria (particularmente la hipertensión intracraneal y la herniación cerebral, la complicación más temida), mientras que las secuelas a mediano y largo plazo (crisis convulsivas postraumáticas, síndrome poscontusional) requieren seguimiento longitudinal; el desarrollo completo de cada patrón de lesión y sus complicaciones específicas se desarrolla en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Carney N, Totten AM, O\'Reilly C, et al. Guidelines for the Management of Severe Traumatic Brain Injury, 4th Edition. Neurosurgery. 2017;80(1):6-15.',
  'Stiell IG, Wells GA, Vandemheen K, et al. The Canadian CT Head Rule for patients with minor head injury. Lancet. 2001;357(9266):1391-1396.',
  'Haydel MJ, Preston CA, Mills TJ, et al. Indications for computed tomography in patients with minor head injury. N Engl J Med. 2000;343(2):100-105.',
  'Maas AIR, Menon DK, Adelson PD, et al. Traumatic brain injury: integrated approaches to improve prevention, clinical care, and research. Lancet Neurol. 2017;16(12):987-1048.',
  'Bullock MR, Chesnut R, Ghajar J, et al. Surgical management of acute epidural hematomas. Neurosurgery. 2006;58(3 Suppl):S7-15.',
  'Bullock MR, Chesnut R, Ghajar J, et al. Surgical management of acute subdural hematomas. Neurosurgery. 2006;58(3 Suppl):S16-24.',
  'Yang AI, Balser DS, Mikheev A, et al. Chronic subdural hematoma: a review of the current data. J Clin Neurosci. 2012;19(6):903-908.',
  'Temkin NR, Dikmen SS, Wilensky AJ, et al. A randomized, double-blind study of phenytoin for the prevention of post-traumatic seizures. N Engl J Med. 1990;323(8):497-502.',
  'Marion DW, Puccio A, Wisniewski SR, et al. Effect of hyperventilation on extracellular concentrations of glutamate, lactate, pyruvate, and local cerebral blood flow. Crit Care Med. 2002;30(12):2619-2625.',
  'McCrory P, Meeuwisse W, Dvorak J, et al. Consensus statement on concussion in sport. Br J Sports Med. 2017;51(11):838-847.',
  'Reddy S, Iannaccone S, McCrea M. Persistent post-concussive symptoms. Handb Clin Neurol. 2022;189:265-277.',
  'Rickels E, von Wild K, Wenzlaff P. Head injury in Germany: A population-based prospective study on epidemiology, causes, treatment and outcome. Brain Inj. 2010;24(12):1491-1504.',
  'Posti JP, Dickman E, Oestreicher-Kedem Y, et al. Skull base fractures and cerebrospinal fluid leaks. J Neurotrauma. Review 2020.',
  'Rosenfeld JV, Maas AI, Bragge P, et al. Early management of severe traumatic brain injury. Lancet. 2012;380(9847):1088-1098.',
  'Greenberg MS. Handbook of Neurosurgery. 9th ed. Thieme; 2019.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'TCE leve',
      tituloB: 'TCE moderado-severo',
      compensada: 'GCS 13-15, con o sin pérdida transitoria de la conciencia, sin déficit neurológico focal persistente ni signos de alarma; la gran mayoría se resuelve sin lesión estructural identificable.',
      descompensada: 'GCS ≤12, con déficit neurológico focal, deterioro progresivo del estado de alerta, o signos de hipertensión intracraneal/herniación (midriasis unilateral, postura de decorticación/descerebración, tríada de Cushing); requiere manejo neuroquirúrgico y de cuidados críticos inmediato.'
    },
    laboratorio: [
      { prueba: 'Estudios de coagulación (TP/INR, TTPa) y recuento plaquetario', utilidad: 'Identifica coagulopatía o anticoagulación de base que aumenta el riesgo de expansión del hematoma y modifica el umbral para solicitar TC.' },
      { prueba: 'Alcoholemia y tamizaje toxicológico', utilidad: 'La intoxicación puede confundir la evaluación neurológica y alterar la interpretación del GCS.' }
    ],
    no_invasivos: [
      { metodo: 'Escala de Coma de Glasgow (GCS)', interpretacion: 'Clasifica la gravedad del TCE y guía la vía de manejo inicial (ver el tema de Exploración Neurológica para la escala completa).', cutoff: 'Leve 13-15, moderado 9-12, severo ≤8' },
      { metodo: 'Canadian CT Head Rule (calculadora)', interpretacion: 'Regla de decisión que identifica quién realmente necesita TC craneal en el TCE leve, reduciendo estudios innecesarios sin perder lesiones que requieren intervención.', cutoff: 'Cualquier criterio de alto o mediano riesgo presente → TC recomendada' }
    ],
    imagen: [
      { modalidad: 'Tomografía computarizada de cráneo simple', hallazgos: 'Estudio de elección para detectar hemorragia intracraneal aguda, fractura, y desviación de línea media; se solicita según los criterios de la Canadian CT Head Rule en el TCE leve, y de forma inmediata sin criterios de selección en el TCE moderado-severo.' },
      { modalidad: 'Resonancia magnética', hallazgos: 'Mayor sensibilidad para lesión axonal difusa y para el seguimiento de secuelas, aunque no es el estudio inicial en el contexto agudo por su menor disponibilidad y mayor tiempo de adquisición.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema combina 2 ejes: la gravedad por GCS (leve/moderado/severo, que determina la vía de manejo) y el patrón anatómico de la lesión (epidural, subdural, subaracnoidea/axonal difusa, que determina el tipo de intervención específica).',
    escalas: [
      { nombre: 'Escala de Coma de Glasgow (GCS)', componentes: 'Apertura ocular (1-4) + respuesta verbal (1-5) + respuesta motora (1-6), ver el tema de Exploración Neurológica para la escala completa.', formula: 'Suma de los 3 componentes, rango 3-15', interpretacion: 'Leve 13-15, moderado 9-12, severo ≤8.' },
      { nombre: 'Canadian CT Head Rule', componentes: 'Criterios de alto riesgo (necesidad de intervención neuroquirúrgica) y de mediano riesgo (detección de lesión en TC). Calculadora disponible más abajo.', formula: 'Cualquier criterio presente → TC recomendada', interpretacion: 'Aplica solo a TCE leve (GCS 13-15) con pérdida de conciencia, amnesia definida, o desorientación presenciada, dentro de las 24 horas del trauma.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'TCE leve y conmoción cerebral',
      color: '#3f6b52',
      definicion: 'El patrón de lesión más frecuente del TCE: disfunción neurológica transitoria inducida por fuerzas biomecánicas, con GCS 13-15 y, en la gran mayoría de los casos, sin lesión estructural identificable en la TC craneal.',
      fisiopatologia: 'Las fuerzas de aceleración-desaceleración o rotación aplicadas al cerebro producen una disfunción neuronal funcional transitoria (alteración del metabolismo energético neuronal, liberación de neurotransmisores excitatorios, cambios en el flujo sanguíneo cerebral regional) sin el daño estructural macroscópico visible en imagen que caracteriza a los otros patrones de lesión; esta disfunción es la base fisiopatológica tanto de los síntomas agudos como, en una proporción de pacientes, del síndrome poscontusional persistente (ver esa complicación).',
      epidemiologia: 'El patrón de lesión más frecuente del TCE en todos los grupos de edad; la gran mayoría de los pacientes se recupera completamente dentro de días a pocas semanas.',
      factores_riesgo: ['Práctica de deportes de contacto', 'Caídas, particularmente en el adulto mayor y en la primera infancia', 'Colisiones vehiculares a baja velocidad', 'Antecedente de conmoción cerebral previa (mayor riesgo de síntomas prolongados con una nueva conmoción)'],
      clinica: 'Confusión transitoria, amnesia (retrógrada y/o anterógrada), cefalea, mareo, náusea, alteración visual transitoria; puede o no haber pérdida franca de la conciencia (no es un requisito para el diagnóstico).',
      criterios_dx: 'Diagnóstico clínico: mecanismo compatible con GCS 13-15 y los síntomas descritos, sin necesidad de TC craneal en ausencia de criterios de la Canadian CT Head Rule.',
      laboratorio: 'No específico; los estudios de coagulación se solicitan si hay anticoagulación de base, dado que modifican el umbral de imagen.',
      imagen: 'TC craneal solo si se cumple algún criterio de la Canadian CT Head Rule (calculadora); la mayoría de los pacientes con TCE leve verdadero no la requieren.',
      complementarios: 'Herramientas estandarizadas de evaluación de la conmoción (en el contexto deportivo) para documentar la línea basal y guiar el retorno gradual a la actividad.',
      dx_diferencial: 'Hematoma epidural o subdural agudo con presentación inicial engañosamente leve (justifica la vigilancia clínica seriada incluso con TC inicial normal), intoxicación como causa alternativa o concomitante de la alteración del estado mental.',
      tx_medico: 'Observación clínica seriada (en el domicilio con un acompañante confiable, o en observación hospitalaria breve si hay algún factor de riesgo adicional sin llegar a cumplir criterio de TC), reposo relativo inicial seguido de retorno gradual a la actividad física y cognitiva según la tolerancia sintomática.',
      tx_farmacologico: 'Analgesia simple para la cefalea (evitando antiinflamatorios no esteroideos en las primeras 24-48 horas por el riesgo teórico de sangrado); no hay tratamiento farmacológico específico que acelere la recuperación de la conmoción en sí.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica en el TCE leve no complicado; reevaluar si aparece cualquier signo de deterioro neurológico durante la observación.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Instrucciones claras de signos de alarma para regresar de inmediato (cefalea que empeora progresivamente, vómito repetido, somnolencia excesiva, debilidad focal, convulsión) al acompañante que supervisará al paciente.',
      seguimiento_ambulatorio: 'Retorno gradual y escalonado a la actividad cognitiva y física según la tolerancia sintomática; reevaluación si los síntomas persisten más allá de las 2-4 semanas esperadas (ver síndrome poscontusional).',
      pronostico: 'Excelente en la gran mayoría de los casos, con recuperación completa dentro de días a pocas semanas; una proporción minoritaria desarrolla síntomas persistentes (síndrome poscontusional).',
      algoritmo: ['GCS 13-15 con mecanismo compatible → evaluar criterios de la Canadian CT Head Rule antes de decidir TC', 'Sin criterios de alto/mediano riesgo → observación clínica sin TC', 'Instrucciones claras de signos de alarma al acompañante', 'Retorno gradual a la actividad según tolerancia sintomática', 'Reevaluar si los síntomas persisten más allá de 2-4 semanas']
    },
    {
      nombre: 'Hematoma epidural',
      color: '#8c3a34',
      definicion: 'Colección de sangre entre el cráneo y la duramadre, clásicamente de origen arterial (con mayor frecuencia por laceración de la arteria meníngea media asociada a fractura temporal), con el característico intervalo lúcido antes del deterioro neurológico rápido; una verdadera emergencia neuroquirúrgica.',
      fisiopatologia: 'El impacto craneal produce una fractura que lacera la arteria meníngea media (u otro vaso epidural, con menor frecuencia un seno venoso dural), y la sangre arterial se acumula bajo alta presión entre el cráneo y la duramadre (que está firmemente adherida al hueso, por lo que el hematoma tiene una forma biconvexa característica limitada por las líneas de sutura, donde la duramadre está más firmemente fijada); la naturaleza arterial de la hemorragia explica la expansión rápida y el deterioro clínico súbito tras el intervalo lúcido inicial (el periodo breve de recuperación de la conciencia entre el impacto y el deterioro secundario por el crecimiento del hematoma).',
      epidemiologia: 'Más frecuente en adultos jóvenes, dado que requiere una fractura craneal (más frecuente en el hueso temporal más delgado de personas jóvenes con dura menos adherida) sobre un vaso meníngeo; infrecuente en el adulto mayor y en niños muy pequeños por diferencias en la adherencia dural.',
      factores_riesgo: ['Fractura del hueso temporal (localización más frecuente por la arteria meníngea media subyacente)', 'Trauma con impacto directo de alta energía sobre la región temporal', 'Ausencia de atrofia cerebral significativa (a diferencia del hematoma subdural crónico, este patrón no depende de espacio subdural expandido)'],
      clinica: 'Intervalo lúcido característico (aunque presente solo en una minoría de los casos): pérdida breve de la conciencia en el impacto, recuperación aparente, y deterioro neurológico rápido horas después conforme el hematoma se expande; cefalea progresiva, vómito, midriasis ipsilateral (por compresión del III par al herniar, ver esa complicación), y hemiparesia contralateral en la presentación establecida.',
      criterios_dx: 'TC craneal con colección biconvexa (lenticular) hiperdensa que no cruza las suturas craneales, con frecuencia asociada a una fractura craneal adyacente visible.',
      laboratorio: 'No específico; estudios de coagulación si hay anticoagulación de base (modifica el manejo y el umbral de intervención).',
      imagen: 'TC craneal simple de elección: colección biconvexa hiperdensa, habitualmente localizada en la región temporal o temporoparietal, que no cruza las líneas de sutura.',
      complementarios: 'Evaluación neuroquirúrgica urgente en cuanto se identifica el hallazgo, dado que la ventana para la evacuación antes del deterioro neurológico irreversible es limitada.',
      dx_diferencial: 'Hematoma subdural agudo (forma de semiluna, sí cruza suturas, ver esa tarjeta), contusión hemorrágica focal (localización parenquimatosa, no en el espacio epidural).',
      tx_medico: 'Evacuación quirúrgica urgente (craneotomía) en la mayoría de los casos sintomáticos o de tamaño significativo; manejo expectante con vigilancia estrecha por neurocirugía considerado solo en hematomas muy pequeños, asintomáticos, y sin efecto de masa significativo.',
      tx_farmacologico: 'Manejo de la presión intracraneal elevada mientras se organiza la cirugía si hay deterioro (ver hipertensión intracraneal y herniación); reversión urgente de cualquier anticoagulación o coagulopatía de base.',
      tx_intervencionista: 'Craneotomía de evacuación urgente, particularmente ante deterioro del GCS, midriasis, o un hematoma de tamaño/grosor significativo en la TC.',
      criterios_uci: 'Todo paciente con hematoma epidural sintomático, antes y después de la evacuación quirúrgica, requiere manejo en cuidados críticos.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurológica estrecha y seriada incluso en el hematoma pequeño manejado de forma expectante, dado el riesgo de expansión rápida y deterioro súbito.',
      pronostico: 'Excelente si se evacúa antes de que ocurra deterioro neurológico significativo o herniación establecida; el pronóstico empeora sustancialmente si la cirugía se retrasa hasta después de la herniación.',
      algoritmo: ['Colección biconvexa hiperdensa que no cruza suturas en la TC → hematoma epidural, evaluación neuroquirúrgica urgente', 'Buscar activamente el intervalo lúcido en la historia (presente solo en una minoría)', 'Evacuación quirúrgica urgente en la mayoría de los casos sintomáticos', 'Vigilancia estrecha incluso en el manejo expectante de un hematoma pequeño']
    },
    {
      nombre: 'Hematoma subdural (agudo y crónico)',
      color: '#3d5a73',
      definicion: 'Colección de sangre entre la duramadre y la aracnoides, de origen venoso (rotura de las venas puente que cruzan ese espacio), presente en 2 formas de instauración distinta: aguda (tras trauma significativo, sintomática desde el inicio) y crónica (acumulación lenta en el anciano o el paciente anticoagulado, con frecuencia tras un trauma trivial olvidado).',
      fisiopatologia: 'Las venas puente que conectan la superficie cortical con los senos venosos durales cruzan el espacio subdural y son vulnerables a la rotura por fuerzas de aceleración-desaceleración, particularmente cuando el espacio subdural ya está expandido por atrofia cerebral (el anciano) o cuando la fragilidad vascular y la coagulopatía facilitan el sangrado con un trauma mínimo (el paciente anticoagulado); a diferencia del hematoma epidural, la sangre venosa se acumula a menor presión y se extiende libremente por el espacio subdural (no está limitada por las suturas, por lo que adopta la forma característica de semiluna cóncava), aunque sí está limitada en la línea media por la hoz del cerebro.',
      epidemiologia: 'La forma aguda es más frecuente en el trauma significativo de cualquier edad; la forma crónica es característica del adulto mayor (por la atrofia cerebral que expande el espacio subdural potencial) y del paciente anticoagulado, con frecuencia sin un antecedente traumático claro o recordado.',
      factores_riesgo: ['Anticoagulación o antiagregación (particularmente relevante para la forma crónica)', 'Atrofia cerebral (edad avanzada, alcoholismo crónico)', 'Trauma significativo de cualquier tipo (forma aguda) o trauma trivial no recordado (forma crónica)', 'Derivación ventriculoperitoneal previa (el drenaje excesivo de LCR predispone a hematoma subdural)'],
      clinica: 'Forma aguda: deterioro neurológico desde el momento del trauma, con frecuencia sin intervalo lúcido (a diferencia del epidural), cefalea, alteración del estado de alerta, déficit focal. Forma crónica: presentación insidiosa en días a semanas (cefalea progresiva, deterioro cognitivo, cambios de personalidad, marcha inestable) con frecuencia confundida inicialmente con demencia o un evento cerebrovascular menor en el adulto mayor.',
      criterios_dx: 'TC craneal con colección en semiluna (cóncava) que cruza las suturas craneales pero no la línea media; hiperdensa en la forma aguda, progresivamente isodensa y luego hipodensa conforme el hematoma envejece (relevante para no pasar por alto un hematoma subagudo isodenso, sutil en la TC).',
      laboratorio: 'Estudios de coagulación (particularmente relevantes dado que la anticoagulación es un factor de riesgo central, sobre todo en la forma crónica).',
      imagen: 'TC craneal de elección; resonancia magnética útil en el hematoma subagudo isodenso donde la TC puede ser sutil o equívoca.',
      complementarios: 'Evaluación neuroquirúrgica para determinar la necesidad y la vía de drenaje según el tamaño, el efecto de masa, y el estado clínico del paciente.',
      dx_diferencial: 'Hematoma epidural (forma biconvexa, no cruza suturas, ver esa tarjeta), en la forma crónica del adulto mayor: demencia u otras causas de deterioro cognitivo insidioso (ver el tema de Síndrome Demencial y Deterioro Cognitivo), enfermedad cerebrovascular.',
      tx_medico: 'Forma aguda sintomática o con efecto de masa significativo: evacuación quirúrgica urgente. Forma crónica: manejo expectante con vigilancia por imagen si es pequeño y asintomático, o drenaje (con frecuencia mediante trépano, menos invasivo que la craneotomía) si es sintomático o de tamaño significativo.',
      tx_farmacologico: 'Reversión de la anticoagulación o coagulopatía de base en ambas formas; manejo de la presión intracraneal elevada si hay deterioro (ver esa complicación).',
      tx_intervencionista: 'Craneotomía de evacuación en la forma aguda sintomática; drenaje por trépano (burr hole) con frecuencia suficiente en la forma crónica, dado que la sangre ya está licuada y es más fácil de drenar que un coágulo agudo.',
      criterios_uci: 'Hematoma subdural agudo sintomático de cualquier tamaño; hematoma subdural crónico con deterioro neurológico agudo o gran efecto de masa.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurológica seriada; TC de control tras el drenaje para confirmar la resolución y descartar recurrencia (particularmente relevante en la forma crónica, que puede reacumularse).',
      seguimiento_ambulatorio: 'Vigilancia por imagen seriada tras el drenaje de un hematoma subdural crónico por el riesgo de recurrencia; reevaluación de la indicación de reiniciar anticoagulación cuando corresponda, sopesando el riesgo trombótico frente al hemorrágico.',
      pronostico: 'La forma aguda tiene un pronóstico considerablemente peor que la crónica, dado que refleja habitualmente un trauma más significativo con mayor lesión cerebral subyacente asociada; la forma crónica tiene buen pronóstico funcional tras el drenaje oportuno en la mayoría de los pacientes.',
      algoritmo: ['Colección en semiluna que cruza suturas en la TC → hematoma subdural', 'Forma aguda sintomática → evacuación quirúrgica urgente (craneotomía)', 'Forma crónica sintomática → drenaje por trépano, con frecuencia suficiente', 'Revertir anticoagulación/coagulopatía de base en ambas formas', 'Vigilancia por imagen seriada tras el drenaje, particularmente en la forma crónica']
    },
    {
      nombre: 'Hemorragia subaracnoidea traumática y lesión axonal difusa',
      color: '#8a6a1f',
      definicion: 'Los 2 patrones característicos del TCE moderado-severo por mecanismo de aceleración-desaceleración: la hemorragia subaracnoidea traumática (sangrado hacia el espacio subaracnoideo por rotura de vasos corticales pequeños) y la lesión axonal difusa (cizallamiento de axones en la sustancia blanca profunda), con frecuencia coexistentes en el mismo paciente.',
      fisiopatologia: 'Las fuerzas de aceleración-desaceleración rotacional producen 2 tipos de daño simultáneo: la rotura de pequeños vasos corticales superficiales libera sangre hacia el espacio subaracnoideo (hemorragia subaracnoidea traumática, distinta en mecanismo aunque similar en apariencia por TC a la hemorragia subaracnoidea aneurismática espontánea, ver el tema de Enfermedad Cerebrovascular); simultáneamente, las diferencias de densidad e inercia entre la sustancia gris y blanca durante la desaceleración brusca producen cizallamiento mecánico de los axones en la sustancia blanca profunda, el cuerpo calloso, y el tronco encefálico (lesión axonal difusa), un daño microscópico que con frecuencia es desproporcionadamente más grave clínicamente de lo que sugieren los hallazgos, a veces sutiles, en la TC inicial.',
      epidemiologia: 'Característicos del TCE moderado-severo por mecanismos de alta energía (colisiones vehiculares a alta velocidad, caídas de gran altura); la lesión axonal difusa es una de las causas más frecuentes de estado vegetativo persistente tras un TCE grave.',
      factores_riesgo: ['Mecanismo de alta energía con aceleración-desaceleración significativa (colisión vehicular a alta velocidad, caída de gran altura)', 'Ausencia de dispositivos de protección (cinturón de seguridad, casco)', 'GCS bajo desde la presentación inicial (marcador de mayor gravedad de la lesión primaria)'],
      clinica: 'Hemorragia subaracnoidea traumática: cefalea intensa, rigidez de nuca, alteración variable del estado de alerta según la extensión. Lesión axonal difusa: alteración del estado de alerta desproporcionadamente grave y persistente en relación con hallazgos estructurales focales limitados en la TC inicial, con frecuencia progresando a coma prolongado.',
      criterios_dx: 'Hemorragia subaracnoidea traumática: hiperdensidad en los surcos y cisternas en la TC, en el contexto de trauma reciente. Lesión axonal difusa: sospecha clínica por la discordancia entre la gravedad clínica y los hallazgos limitados en la TC inicial, confirmada idealmente por resonancia magnética (secuencias sensibles a susceptibilidad) cuando el paciente se estabiliza lo suficiente para el estudio.',
      laboratorio: 'No específico para ninguno de los 2 patrones en sí.',
      imagen: 'TC craneal inicial (hiperdensidad en cisternas/surcos para la hemorragia subaracnoidea; para la lesión axonal difusa puede mostrar solo petequias hemorrágicas puntiformes en la unión sustancia gris-blanca, o ser normal pese a la gravedad clínica); resonancia magnética con secuencias sensibles a sangre para confirmar y cuantificar la extensión de la lesión axonal difusa una vez estabilizado el paciente.',
      complementarios: 'Monitorización de la presión intracraneal en el TCE severo con TC anormal o con TC normal pero otros factores de riesgo de hipertensión intracraneal (edad &gt;40 años, postura anormal, hipotensión), dado el riesgo elevado de hipertensión intracraneal en ambos patrones.',
      dx_diferencial: 'Hemorragia subaracnoidea aneurismática espontánea (sin antecedente traumático claro, considerar particularmente si el patrón o la distribución no es típica de trauma), otras causas de coma no traumático si el mecanismo traumático no es claro.',
      tx_medico: 'Manejo de cuidados críticos con monitorización neurológica estrecha, prevención activa de la lesión secundaria (mantener presión de perfusión cerebral adecuada, normoxia, normocapnia, normotermia), y monitorización/manejo de la presión intracraneal elevada cuando esté indicado (ver esa complicación).',
      tx_farmacologico: 'No hay tratamiento farmacológico específico que revierta la lesión axonal difusa ya establecida; el manejo es de soporte y prevención de lesión secundaria adicional.',
      tx_intervencionista: 'No quirúrgico de rutina para ninguno de los 2 patrones en sí (a diferencia del hematoma epidural/subdural), salvo el manejo de la hipertensión intracraneal asociada (drenaje ventricular, craniectomía descompresiva en casos seleccionados, ver esa complicación).',
      criterios_uci: 'Indicación estándar de manejo en cuidados críticos con monitorización neurológica continua, dado que ambos patrones son característicos del TCE moderado-severo.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurológica seriada y monitorización de presión intracraneal según indicación; resonancia magnética diferida para cuantificar la extensión real de la lesión axonal difusa una vez estabilizado.',
      pronostico: 'Variable y con frecuencia reservado en la lesión axonal difusa extensa, dado que es una de las causas más frecuentes de estado vegetativo persistente o discapacidad grave tras TCE severo; la hemorragia subaracnoidea traumática aislada, sin otras lesiones asociadas, tiene generalmente mejor pronóstico.',
      algoritmo: ['Mecanismo de alta energía + alteración del estado de alerta desproporcionada a los hallazgos en TC inicial → sospechar lesión axonal difusa', 'Hiperdensidad en surcos/cisternas sin antecedente aneurismático claro + trauma reciente → hemorragia subaracnoidea traumática', 'Manejo de cuidados críticos con prevención activa de lesión secundaria en ambos patrones', 'Resonancia magnética diferida para cuantificar la lesión axonal difusa una vez estabilizado']
    },
    {
      nombre: 'Hipertensión intracraneal y síndromes de herniación',
      color: '#7a1f3d',
      definicion: 'La complicación aguda más temida del TCE: el aumento de la presión intracraneal por encima de la capacidad compensatoria del cráneo (un compartimento rígido de volumen fijo) desplaza el tejido cerebral hacia compartimentos adyacentes (herniación), comprimiendo estructuras vitales con consecuencias potencialmente fatales si no se reconoce y trata de inmediato.',
      fisiopatologia: `El cráneo es un compartimento rígido de volumen fijo que contiene tejido cerebral, sangre, y líquido cefalorraquídeo en equilibrio (doctrina de Monro-Kellie); cuando un proceso expansivo (hematoma, edema cerebral, hidrocefalia) supera la capacidad compensatoria de ese sistema (inicialmente desplazando LCR y sangre venosa), la presión intracraneal se eleva progresivamente, reduciendo la presión de perfusión cerebral (presión de perfusión cerebral = presión arterial media menos presión intracraneal) y produciendo isquemia cerebral secundaria; cuando la presión sigue aumentando, el tejido cerebral se desplaza físicamente hacia compartimentos de menor presión (herniación), comprimiendo estructuras vitales según el patrón específico.${figBlock('Imagen 2', 'Los 3 síndromes de herniación cerebral', herniacionHtml)}`,
      epidemiologia: 'Complicación potencial de cualquier lesión intracraneal con efecto de masa o edema significativo; una de las principales causas de muerte prevenible en el TCE si no se reconoce y trata oportunamente.',
      factores_riesgo: ['Hematoma intracraneal de tamaño significativo no evacuado oportunamente', 'Edema cerebral difuso postraumático', 'Hidrocefalia obstructiva asociada', 'Hipoxia, hipotensión, o hipercapnia concomitantes (agravan el edema y la lesión secundaria)'],
      clinica: 'Cefalea progresiva, vómito, deterioro del estado de alerta; la tríada de Cushing (hipertensión, bradicardia, respiración irregular) es un signo tardío y ominoso de hipertensión intracraneal grave. Herniación uncal: midriasis unilateral arreactiva progresando a hemiparesia contralateral. Herniación central: deterioro rostrocaudal progresivo del estado de alerta con pupilas inicialmente mióticas. Herniación amigdalina: paro respiratorio súbito por compresión del bulbo, con frecuencia fatal.',
      criterios_dx: 'Sospecha clínica por los signos descritos, apoyada por hallazgos de efecto de masa, borramiento de cisternas, o desviación de la línea media en la TC; la monitorización invasiva de la presión intracraneal (catéter intraventricular o intraparenquimatoso) confirma y cuantifica la hipertensión intracraneal en el paciente con TCE severo.',
      laboratorio: 'Gasometría arterial (vigilar y evitar hipercapnia, que vasodilata y empeora la hipertensión intracraneal; e hipocapnia excesiva, que puede producir isquemia por vasoconstricción excesiva).',
      imagen: 'TC craneal urgente ante cualquier deterioro neurológico agudo, buscando un nuevo proceso expansivo o progresión del edema que requiera intervención inmediata.',
      complementarios: 'Monitorización invasiva de la presión intracraneal en el TCE severo con TC anormal, o TC normal con factores de riesgo adicionales, para guiar el manejo dirigido por objetivos de presión de perfusión cerebral.',
      dx_diferencial: 'Deterioro neurológico por causa extracraneal (hipoxia, hipotensión, hipoglucemia) que debe descartarse activamente antes de atribuir el deterioro exclusivamente a hipertensión intracraneal.',
      tx_medico: 'Medidas de primera línea: elevación de la cabecera a 30°, sedoanalgesia adecuada, normalización de la temperatura, evitar hipotensión/hipoxia; medidas de segunda línea ante hipertensión intracraneal refractaria: soluciones hiperosmolares (manitol o solución salina hipertónica), hiperventilación breve y controlada solo como medida temporal de rescate, drenaje de LCR si hay catéter ventricular, y craniectomía descompresiva en casos refractarios seleccionados.',
      tx_farmacologico: 'Manitol o solución salina hipertónica para reducir la presión intracraneal de forma aguda; sedoanalgesia (propofol, fentanilo) para reducir la demanda metabólica cerebral; evitar la hiperventilación profiláctica o prolongada (solo como medida temporal de rescate ante herniación inminente, dado el riesgo de isquemia por vasoconstricción excesiva).',
      tx_intervencionista: 'Evacuación quirúrgica urgente de cualquier lesión con efecto de masa identificada; craniectomía descompresiva en la hipertensión intracraneal refractaria al manejo médico máximo.',
      criterios_uci: 'Indicación absoluta de manejo en cuidados críticos con monitorización neurológica continua ante cualquier signo de hipertensión intracraneal o herniación.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Monitorización continua de la presión intracraneal y la presión de perfusión cerebral cuando esté indicado, con ajuste escalonado del manejo según la respuesta a cada nivel terapéutico.',
      algoritmo: ['Cefalea progresiva + vómito + deterioro del estado de alerta → sospechar hipertensión intracraneal, TC urgente', 'Midriasis unilateral arreactiva → herniación uncal inminente, actuar de inmediato', 'Medidas de primera línea: cabecera elevada, sedoanalgesia, evitar hipoxia/hipotensión', 'Refractario → soluciones hiperosmolares, drenaje de LCR, craniectomía descompresiva', 'Evacuar quirúrgicamente cualquier lesión con efecto de masa identificada sin demora']
    },
    {
      nombre: 'Crisis convulsivas postraumáticas',
      color: '#8c6b2d',
      definicion: 'Crisis epilépticas relacionadas temporalmente con el TCE, clasificadas según el momento de aparición en inmediatas (dentro de las 24 horas), tempranas (día 1 a 7), y tardías (después de 7 días, correspondiendo a epilepsia postraumática verdadera con mayor riesgo de recurrencia).',
      fisiopatologia: 'Las crisis inmediatas y tempranas se relacionan con el efecto irritativo directo de la lesión aguda (sangre, edema, alteración metabólica local) sobre el tejido cortical, sin implicar necesariamente el desarrollo de un foco epileptógeno permanente; las crisis tardías reflejan un proceso de epileptogénesis más establecido (cicatriz gliótica, reorganización de circuitos neuronales) que confiere un riesgo sustancialmente mayor de recurrencia y de evolución hacia epilepsia postraumática crónica.',
      epidemiologia: 'El riesgo de crisis postraumáticas aumenta con la gravedad del TCE, la presencia de hematoma intracraneal, fractura craneal con hundimiento, y lesión penetrante; las crisis tempranas son considerablemente más frecuentes que las tardías, pero son las tardías las que predicen mejor el riesgo de epilepsia postraumática crónica.',
      factores_riesgo: ['TCE severo (GCS bajo)', 'Hematoma intracraneal (particularmente subdural)', 'Fractura craneal con hundimiento', 'Lesión cerebral penetrante', 'Crisis convulsiva ya ocurrida en la fase inmediata o temprana (mayor riesgo de crisis tardías subsecuentes)'],
      clinica: 'Crisis convulsivas de cualquier semiología (focales o generalizadas) en relación temporal con el TCE; las crisis inmediatas y tempranas ocurren en el contexto agudo hospitalario, mientras que las tardías pueden presentarse semanas a meses después del alta.',
      criterios_dx: 'Diagnóstico clínico por la observación directa o el relato compatible de la crisis, en relación temporal con el TCE documentado; electroencefalograma útil para caracterizar el patrón y descartar estado epiléptico no convulsivo en el paciente con alteración persistente del estado de alerta sin causa estructural que lo explique.',
      laboratorio: 'Panel metabólico para descartar causas alternativas o contribuyentes de la crisis (hiponatremia, hipoglucemia) en el paciente con TCE.',
      imagen: 'TC craneal urgente tras cualquier nueva crisis para descartar un proceso expansivo agudo (nuevo sangrado o progresión de una lesión ya conocida) como causa.',
      complementarios: 'Electroencefalograma continuo considerado en el paciente con TCE severo y alteración persistente e inexplicada del estado de alerta, para descartar estado epiléptico no convulsivo.',
      dx_diferencial: 'Postura de decorticación/descerebración por herniación (puede confundirse con actividad convulsiva motora), mioclonías postanóxicas si coexiste un componente hipóxico.',
      tx_medico: 'Profilaxis anticonvulsivante de corta duración (típicamente 7 días) en el TCE severo con factores de riesgo significativos, dado que reduce el riesgo de crisis tempranas (aunque no ha demostrado prevenir la epilepsia postraumática tardía ni mejorar el desenlace funcional a largo plazo); tratamiento estándar de la crisis aguda si ocurre.',
      tx_farmacologico: 'Fenitoína o levetiracetam como profilaxis de corta duración en el paciente de alto riesgo; benzodiacepinas y anticonvulsivantes estándar para el tratamiento de la crisis aguda o el estado epiléptico si ocurre (ver el tema de Estado Epiléptico y Epilepsia).',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'Estado epiléptico postraumático, o cualquier crisis en el contexto de TCE severo ya manejado en cuidados críticos.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Suspender la profilaxis anticonvulsivante tras el periodo de riesgo establecido (habitualmente 7 días) si no ha habido crisis, dado que no reduce el riesgo de epilepsia tardía y sí conlleva efectos adversos.',
      seguimiento_ambulatorio: 'Referencia a neurología si ocurre una crisis tardía (después de 7 días), dado que representa epilepsia postraumática verdadera con indicación de tratamiento anticonvulsivante de mantenimiento a diferencia de las crisis inmediatas/tempranas.',
      pronostico: 'Las crisis inmediatas y tempranas no predicen necesariamente epilepsia crónica; las crisis tardías tienen un riesgo sustancialmente mayor de recurrencia y con frecuencia requieren tratamiento anticonvulsivante prolongado.',
      algoritmo: ['Clasificar la crisis según el momento: inmediata (&lt;24h), temprana (día 1-7), tardía (&gt;7 días)', 'TCE severo con factores de riesgo → considerar profilaxis anticonvulsivante de corta duración (7 días)', 'Nueva crisis → TC urgente para descartar proceso expansivo agudo', 'Crisis tardía → epilepsia postraumática verdadera, referir a neurología para tratamiento de mantenimiento', 'Suspender profilaxis tras el periodo de riesgo si no hubo crisis']
    },
    {
      nombre: 'Fractura de la base del cráneo, fuga de LCR y meningitis postraumática',
      color: '#6b4a2e',
      definicion: 'Espectro de complicaciones asociadas a la fractura de la base del cráneo: los signos clínicos característicos que la delatan (hemotímpano, signo de mapache, signo de Battle), la fuga de líquido cefalorraquídeo (otorrea o rinorrea) cuando la fractura compromete la duramadre adyacente, y el riesgo consecuente de meningitis bacteriana ascendente.',
      fisiopatologia: 'La fractura de la base del cráneo, particularmente cuando atraviesa el hueso temporal (fosa media) o la lámina cribosa/techo etmoidal (fosa anterior), puede desgarrar la duramadre adyacente, estableciendo una comunicación directa entre el espacio subaracnoideo (LCR) y el oído medio (otorrea, a través de la trompa de Eustaquio si la membrana timpánica está íntegra, o directamente si está rota) o la cavidad nasal (rinorrea); esa comunicación anómala representa una vía directa para que bacterias de la flora nasal/ótica asciendan hacia el espacio subaracnoideo, explicando el riesgo elevado y sostenido de meningitis bacteriana mientras la fuga persista.',
      epidemiologia: 'La fractura de la base del cráneo ocurre en una proporción considerable de los TCE significativos; la fuga de LCR clínicamente evidente ocurre en una minoría de esas fracturas, pero el riesgo de meningitis asociado justifica la vigilancia activa en todo paciente con signos de fractura de base de cráneo.',
      factores_riesgo: ['Fractura que atraviesa la fosa anterior (lámina cribosa) o la fosa media (hueso temporal, peñasco)', 'Trauma de alta energía con impacto directo sobre la región frontal o temporal', 'Fuga de LCR persistente más allá de la primera semana (mayor riesgo acumulado de meningitis cuanto más tiempo persiste la comunicación)'],
      clinica: 'Signos de fractura de fosa anterior: equimosis periorbitaria bilateral ("ojos de mapache"), rinorrea clara (puede estar teñida de sangre inicialmente). Signos de fractura de fosa media (peñasco): equimosis retroauricular (signo de Battle, de aparición tardía, días después del trauma), hemotímpano, otorrea clara, y posible lesión del VII u VIII par craneal asociada (parálisis facial, hipoacusia, ver el tema de Neuropatías Periféricas y Parálisis Facial). Meningitis postraumática: fiebre, cefalea, rigidez de nuca, alteración del estado de alerta, con frecuencia días a semanas después del trauma inicial.',
      criterios_dx: 'Sospecha clínica por los signos descritos; la fuga de LCR se confirma mediante la prueba de la beta-2 transferrina en el líquido drenado (marcador específico de LCR, ausente en moco nasal u otras secreciones) cuando hay duda diagnóstica; la TC de hueso temporal/base de cráneo en cortes finos delimita la fractura específica.',
      laboratorio: 'Beta-2 transferrina en el líquido de la fuga para confirmar que es LCR verdadero, cuando la distinción clínica con secreción nasal/ótica habitual no es evidente; hemocultivo y estudio de LCR (si hay punción lumbar indicada, con precaución si hay efecto de masa) ante sospecha de meningitis.',
      imagen: 'TC de cráneo/hueso temporal en cortes finos para delimitar la fractura de la base y su relación con las estructuras durales adyacentes.',
      complementarios: 'No hay un estudio adicional único más allá de los ya descritos.',
      dx_diferencial: 'Rinorrea alérgica o infecciosa habitual (no contiene beta-2 transferrina, a diferencia del LCR verdadero), otitis media aguda no relacionada con fractura (sin el antecedente traumático ni los signos de fractura de base asociados).',
      tx_medico: 'La mayoría de las fugas de LCR postraumáticas cierran espontáneamente con manejo conservador (reposo con la cabecera elevada, evitar maniobras de Valsalva, evitar sonarse la nariz) dentro de la primera semana; la profilaxis antibiótica de rutina en la fuga de LCR NO está recomendada de forma generalizada (no ha demostrado prevenir la meningitis y puede seleccionar organismos resistentes), reservando el antibiótico para el tratamiento de una meningitis ya establecida.',
      tx_farmacologico: 'Antibióticos empíricos de amplio espectro con buena penetración al sistema nervioso central de inmediato si se establece el diagnóstico de meningitis postraumática (no como profilaxis de rutina en la fuga de LCR sin infección activa).',
      tx_intervencionista: 'Reparación quirúrgica del defecto dural si la fuga de LCR persiste más allá de 1-2 semanas pese al manejo conservador, o si hay evidencia de neumoencéfalo a tensión.',
      criterios_uci: 'Meningitis postraumática con compromiso del estado de alerta o inestabilidad hemodinámica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia clínica de la resolución espontánea de la fuga durante la primera semana; vigilancia activa de fiebre u otros signos tempranos de meningitis mientras la fuga persista.',
      seguimiento_ambulatorio: 'Seguimiento por otorrinolaringología/neurocirugía si la fuga persiste, para planificar la reparación quirúrgica; vacunación contra neumococo considerada en la fuga de LCR recurrente o crónica dada la exposición repetida al riesgo de meningitis.',
      pronostico: 'Favorable en la mayoría de las fugas de LCR, que cierran espontáneamente con manejo conservador; la meningitis postraumática establecida tiene un pronóstico más reservado si no se reconoce y trata con prontitud.',
      algoritmo: ['Ojos de mapache o rinorrea clara → sospechar fractura de fosa anterior con posible fuga de LCR', 'Signo de Battle, hemotímpano, u otorrea clara → sospechar fractura de fosa media (peñasco)', 'Manejo conservador inicial (cabecera elevada, evitar Valsalva); NO profilaxis antibiótica de rutina', 'Fuga persistente &gt;1-2 semanas → reparación quirúrgica del defecto dural', 'Fiebre + cefalea + rigidez de nuca en este contexto → tratar meningitis postraumática sin demora']
    },
    {
      nombre: 'Síndrome poscontusional',
      color: '#7a4363',
      definicion: 'Constelación de síntomas físicos, cognitivos, y emocionales que persisten más allá del periodo esperado de recuperación (típicamente más de 2-4 semanas en el adulto) tras un TCE leve/conmoción cerebral, sin lesión estructural identificable que los explique.',
      fisiopatologia: 'El mecanismo exacto no está completamente establecido, pero se propone una combinación de disfunción neurometabólica persistente de bajo grado (alteraciones sutiles y prolongadas del metabolismo energético neuronal iniciadas por la lesión funcional original), factores psicológicos concurrentes (ansiedad, expectativa de síntomas, estrés postraumático), y en algunos casos micropatología estructural no detectable por los estudios de imagen convencionales; la naturaleza multifactorial explica por qué el abordaje terapéutico combina el manejo sintomático dirigido con el apoyo psicológico activo.',
      epidemiologia: 'Ocurre en una proporción minoritaria pero clínicamente relevante de los pacientes con TCE leve, con mayor riesgo en quienes tienen antecedente de conmoción previa, migraña preexistente, o trastornos de ansiedad/depresión de base.',
      factores_riesgo: ['Antecedente de conmoción cerebral previa', 'Migraña o cefalea crónica preexistente', 'Trastorno de ansiedad o depresión de base', 'Mayor gravedad o número de síntomas en la fase aguda de la conmoción', 'Sexo femenino (mayor riesgo reportado en varios estudios, mecanismo no completamente esclarecido)'],
      clinica: 'Cefalea persistente, mareo/inestabilidad, fatiga, alteración del sueño, dificultad de concentración y memoria, irritabilidad, ansiedad o síntomas depresivos, e intolerancia a estímulos sensoriales (luz, ruido); los síntomas persisten más allá del periodo esperado de recuperación de la conmoción aislada.',
      criterios_dx: 'Diagnóstico clínico por la persistencia de 3 o más síntomas característicos más allá de 2-4 semanas (algunos criterios usan hasta 3 meses) tras un TCE leve documentado, en ausencia de una causa estructural u otra explicación alternativa identificada por estudios de imagen si están indicados.',
      laboratorio: 'No específico; dirigido a descartar causas alternativas contribuyentes (anemia, disfunción tiroidea) si los síntomas (fatiga, dificultad de concentración) lo sugieren.',
      imagen: 'No indicada de rutina si ya se descartó lesión estructural aguda inicialmente; considerada si aparecen nuevos signos focales o el curso es atípico.',
      complementarios: 'Evaluación neuropsicológica formal en casos seleccionados con dificultad cognitiva significativa o prolongada, para caracterizar el patrón y guiar la rehabilitación dirigida.',
      dx_diferencial: 'Trastorno de estrés postraumático o depresión mayor de novo (pueden coexistir o simular el cuadro, particularmente tras un trauma con componente emocional significativo), migraña postraumática como diagnóstico predominante si la cefalea es el síntoma dominante.',
      tx_medico: 'Manejo multidisciplinario dirigido a los síntomas predominantes: manejo de la cefalea según su patrón, terapia vestibular si predomina el mareo/inestabilidad, terapia cognitivo-conductual para el componente ansioso/depresivo, y educación activa sobre el curso esperado (la expectativa realista de mejoría reduce la ansiedad asociada y mejora el desenlace).',
      tx_farmacologico: 'Dirigido al síntoma predominante (analgésicos o profilaxis específica para la cefalea según su patrón, ver el tema de Cefaleas); no hay un tratamiento farmacológico único que trate el síndrome poscontusional como entidad global.',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma característica (se presenta y maneja de forma ambulatoria).',
      seguimiento_ambulatorio: 'Seguimiento multidisciplinario (neurología, rehabilitación, salud mental según el perfil sintomático predominante) con reevaluación periódica del progreso; retorno gradual a la actividad laboral/académica según la tolerancia.',
      pronostico: 'La mayoría de los pacientes mejora gradualmente con el manejo dirigido, aunque una proporción minoritaria tiene síntomas prolongados que afectan significativamente la función; el reconocimiento temprano y el manejo activo (en lugar de solo reposo prolongado, que puede prolongar los síntomas) mejoran el desenlace.',
      algoritmo: ['Síntomas persistentes ≥3 tras TCE leve, más allá de 2-4 semanas → sospechar síndrome poscontusional', 'Descartar causas alternativas (estructural, psiquiátrica primaria) según el cuadro', 'Manejo dirigido al síntoma predominante: cefalea, mareo, cognitivo, o anímico', 'Evitar el reposo prolongado excesivo; favorecer el retorno gradual y activo a la actividad', 'Seguimiento multidisciplinario con reevaluación periódica del progreso']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de este tema se centra en la prevención activa de la lesión secundaria y en la vigilancia neurológica seriada, particularmente en el TCE moderado-severo.',
    parametros: ['GCS seriado', 'Tamaño y reactividad pupilar', 'Signos de hipertensión intracraneal (tríada de Cushing, deterioro del estado de alerta)', 'Presión intracraneal y presión de perfusión cerebral si hay monitorización invasiva', 'Nuevos déficits focales'],
    criterios_uci_general: 'TCE moderado-severo (GCS ≤12), cualquier hematoma intracraneal sintomático, signos de hipertensión intracraneal o herniación, y el periodo perioperatorio de cualquier evacuación neuroquirúrgica.',
    criterios_tips_general: 'No aplica de forma directa a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa a este tema.',
    prevencion: 'Prevención activa de la lesión secundaria (evitar hipoxia, hipotensión, hipertermia, e hiper/hipocapnia) en todo paciente con TCE moderado-severo; uso de dispositivos de protección (cinturón de seguridad, casco) como medida de prevención primaria; aplicación sistemática de la Canadian CT Head Rule para evitar tanto la TC innecesaria como la lesión no detectada en el TCE leve.'
  }
};

export const compCites = {
  'TCE leve y conmoción cerebral': [10, 11, 2],
  'Hematoma epidural': [5],
  'Hematoma subdural (agudo y crónico)': [6, 7],
  'Hemorragia subaracnoidea traumática y lesión axonal difusa': [4, 9],
  'Hipertensión intracraneal y síndromes de herniación': [1, 9],
  'Crisis convulsivas postraumáticas': [8],
  'Fractura de la base del cráneo, fuga de LCR y meningitis postraumática': [13],
  'Síndrome poscontusional': [10, 11]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Escala de Coma de Glasgow (GCS)': [],
  'Canadian CT Head Rule': [2]
};
export const escalaCalc = { 'Canadian CT Head Rule': 'canadian-ct-head' };
export const compGroups = [
  { name: 'Patrones de lesión intracraneal', items: ['TCE leve y conmoción cerebral', 'Hematoma epidural', 'Hematoma subdural (agudo y crónico)', 'Hemorragia subaracnoidea traumática y lesión axonal difusa'] },
  { name: 'Complicaciones', items: ['Hipertensión intracraneal y síndromes de herniación', 'Crisis convulsivas postraumáticas', 'Fractura de la base del cráneo, fuga de LCR y meningitis postraumática', 'Síndrome poscontusional'] }
];
export const complicacionesIntro = 'Las primeras 4 tarjetas son los 4 patrones de lesión intracraneal, distintos por mecanismo, apariencia en TC, y manejo: TCE leve/conmoción, hematoma epidural, hematoma subdural (agudo y crónico), y hemorragia subaracnoidea traumática/lesión axonal difusa (TCE moderado-severo). Las siguientes 4 son las complicaciones reales del TCE: hipertensión intracraneal/herniación (la más crítica), crisis convulsivas postraumáticas, fractura de base de cráneo con fuga de LCR y meningitis, y síndrome poscontusional (la secuela crónica más frecuente).';
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
  root: { title: 'TRAUMATISMO CRANEOENCEFÁLICO', color: '#4a3d73', target: 'definicion' },
  branches: [
    { title: 'Patrones de lesión', sub: 'Por mecanismo y apariencia en TC', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'TCE leve y conmoción cerebral', sub: 'El más frecuente', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Hematoma epidural', sub: 'Arterial, lente biconvexa', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Hematoma subdural', sub: 'Venoso, semiluna, agudo y crónico', color: '#3d5a73', target: 'complicaciones' },
      { title: 'HSA traumática y lesión axonal difusa', sub: 'TCE moderado-severo', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones', sub: 'Agudas y crónicas', color: '#6b4a2e', target: 'complicaciones', leaves: [
      { title: 'Hipertensión intracraneal y herniación', sub: 'La más crítica', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Crisis convulsivas postraumáticas', sub: 'Inmediatas, tempranas, tardías', color: '#8c6b2d', target: 'complicaciones' },
      { title: 'Fractura de base de cráneo', sub: 'Fuga de LCR, meningitis', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Síndrome poscontusional', sub: 'Secuela crónica más frecuente', color: '#7a4363', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { no_invasivos: [2] };
export const clasificacionCite = [2];
export const seguimientoCite = [1, 9];
