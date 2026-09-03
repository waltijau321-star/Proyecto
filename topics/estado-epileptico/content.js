// topics/estado-epileptico/content.js: Estado Epiléptico y Epilepsia. Segundo tema de
// Neurología (tras Enfermedad Cerebrovascular). Estructura idéntica al contrato del motor (misma
// forma que sepsis/enfermedad-cerebrovascular). Convención de figuras: figBlock()/videoBlock()
// inline, numeración continua por tipo (Tabla N / Imagen N) a lo largo de todo el tema.

export const meta = {
  id: 'estado-epileptico',
  titulo: 'Estado Epiléptico y Epilepsia',
  subtitulo: 'Módulo 5 · Medicina Interna',
  accent: '#5c2d4a',
  accentDim: '#8a5a78'
};

export const definicionText = `<p style="margin:0 0 14px;">La crisis epiléptica es una descarga neuronal excesiva y sincrónica que produce signos o síntomas transitorios, motores, sensitivos, autonómicos o cognitivos. El estado epiléptico es la emergencia neurológica en la que esa crisis se prolonga (5 minutos o más en su forma convulsiva) o se repite sin recuperación completa de la consciencia entre episodios, un punto operacional a partir del cual es poco probable que ceda espontáneamente y debe iniciarse tratamiento sin demora. La epilepsia, en cambio, es una enfermedad crónica definida por la tendencia persistente a generar crisis no provocadas (al menos dos separadas por más de 24 horas, o una crisis con alto riesgo de recurrencia, o un síndrome epiléptico reconocido), distinta de un episodio agudo aislado. Las tres entidades comparten un marco de clasificación común (ILAE) y una premisa clínica central: la semiología del evento (cómo empieza, cómo evoluciona y qué queda después) es la herramienta diagnóstica más valiosa, muchas veces más que cualquier estudio complementario.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La epilepsia afecta a cerca de 50 millones de personas en el mundo (prevalencia 0.5-1%), una de las enfermedades neurológicas crónicas más frecuentes. El estado epiléptico tiene una incidencia de 10-40 casos por 100,000 habitantes al año, con distribución bimodal por edad (pico en la infancia y otro en el adulto mayor) y una mortalidad global de 10-20%, mayor en el estado refractario y en causas estructurales agudas que en la subdosificación de un fármaco antiepiléptico en un paciente ya epiléptico. Tras una primera crisis no provocada, el riesgo de recurrencia a 2 años es de 40-50% en conjunto, variable según los factores de riesgo presentes.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong> El marco de la ILAE clasifica en tres niveles jerárquicos: el tipo de crisis (focal, generalizada, o de inicio desconocido), el tipo de epilepsia (focal, generalizada, combinada, o desconocida), y el síndrome epiléptico específico cuando es reconocible. En cada nivel se busca la etiología, en 6 categorías: estructural, genética, infecciosa, metabólica, inmune, o desconocida, con frecuencia superpuestas en un mismo paciente. El estado epiléptico, por su parte, se clasifica operacionalmente por el tiempo transcurrido (T1 y T2) y por la respuesta al tratamiento escalonado (refractario, superrefractario).</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <p style="margin:6px 0 4px;color:var(--ink-dim);font-size:13.5px;">Modificables:</p>
  <ul style="margin:0 0 8px;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Privación de sueño</li>
    <li>Consumo de alcohol, tanto la intoxicación aguda como la abstinencia</li>
    <li>Abandono o subdosificación del fármaco antiepiléptico en el paciente ya epiléptico: la causa precipitante más frecuente y más prevenible de estado epiléptico</li>
    <li>Fotoestimulación, en los síndromes fotosensibles</li>
  </ul>
  <p style="margin:6px 0 4px;color:var(--ink-dim);font-size:13.5px;">No modificables:</p>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Lesión cerebral estructural previa (ECV, traumatismo craneoencefálico, tumor, malformación del desarrollo cortical)</li>
    <li>Antecedente familiar o predisposición genética</li>
    <li>Infección del sistema nervioso central previa</li>
    <li>Antecedente de crisis febriles complejas en la infancia</li>
    <li>Enfermedad neurodegenerativa</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> La crisis refleja un desequilibrio entre la excitación (glutamatérgica, mediada por receptores NMDA/AMPA) y la inhibición (GABAérgica) de una red neuronal, ya sea por una lesión estructural focal, una canalopatía genética que altera directamente la excitabilidad de membrana, o un insulto agudo (metabólico, tóxico, infeccioso) que reduce transitoriamente el umbral convulsivo. Cuando la crisis se prolonga (estado epiléptico), ese desequilibrio se retroalimenta: los receptores GABA-A sinápticos se internalizan progresivamente mientras se sobreexpresan receptores NMDA, lo que explica por qué las benzodiacepinas pierden eficacia cuanto más tiempo pasa sin tratarla y por qué el estado epiléptico se vuelve progresivamente más resistente.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> La crisis epiléptica se reconoce por su semiología característica (inicio súbito, evolución estereotipada, estado postictal), que difiere sustancialmente según el tipo (focal, generalizada) y se detalla en Diagnóstico. El estado epiléptico añade a esa semiología el criterio de duración o recurrencia sin recuperación; su forma no convulsiva, sin actividad motora evidente, solo se reconoce por electroencefalograma. La epilepsia, en cambio, no es un hallazgo de un único momento sino un patrón a lo largo del tiempo: el mismo tipo de crisis repitiéndose de forma estereotipada en el mismo paciente. El detalle operativo de cada entidad y de sus complicaciones (diagnóstico diferencial específico, dosis, criterios de UCI, algoritmo) se desarrolla como recurso de consulta en la sección Complicaciones.</p>`;

export const bibliografia = [
  'Glauser T, Shinnar S, Gloss D, et al. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults: Report of the Guideline Committee of the American Epilepsy Society. Epilepsy Curr. 2016;16(1):48-61.',
  'Brophy GM, Bell R, Claassen J, et al. Guidelines for the Evaluation and Management of Status Epilepticus. Neurocrit Care. 2012;17(1):3-23.',
  'Trinka E, Cock H, Hesdorffer D, et al. A definition and classification of status epilepticus: Report of the ILAE Task Force on Classification of Status Epilepticus. Epilepsia. 2015;56(10):1515-1523.',
  'Fisher RS, Cross JH, French JA, et al. Operational classification of seizure types by the International League Against Epilepsy: Position Paper of the ILAE Commission for Classification and Terminology. Epilepsia. 2017;58(4):522-530.',
  'Scheffer IE, Berkovic S, Capovilla G, et al. ILAE classification of the epilepsies: Position paper of the ILAE Commission for Classification and Terminology. Epilepsia. 2017;58(4):512-521.',
  'Fisher RS, Acevedo C, Arzimanoglou A, et al. ILAE official report: a practical clinical definition of epilepsy. Epilepsia. 2014;55(4):475-482.',
  'Krumholz A, Wiebe S, Gronseth GS, et al. Evidence-based guideline: Management of an unprovoked first seizure in adults: Report of the Guideline Development Subcommittee of the American Academy of Neurology and the American Epilepsy Society. Neurology. 2015;84(16):1705-1713.',
  'Kapur J, Elm J, Chamberlain JM, et al. Randomized Trial of Three Anticonvulsant Medications for Status Epilepticus (ESETT). N Engl J Med. 2019;381(22):2103-2113.',
  'Rossetti AO, Logroscino G, Milligan TA, Michaelides C, Ruffieux C, Bromfield EB. Status Epilepticus Severity Score (STESS): a tool to orient early treatment strategy. J Neurol. 2008;255(10):1561-1566.',
  'Leitinger M, Trinka E, Gardella E, et al. Diagnostic accuracy of the Salzburg EEG criteria for non-convulsive status epilepticus: a retrospective study. Lancet Neurol. 2016;15(10):1054-1062.',
  'Kwan P, Arzimanoglou A, Berg AT, et al. Definition of drug resistant epilepsy: consensus proposal by the ad hoc Task Force of the ILAE Commission on Therapeutic Strategies. Epilepsia. 2010;51(6):1069-1077.',
  'LaFrance WC Jr, Baker GA, Duncan R, Goldstein LH, Reuber M. Minimum requirements for the diagnosis of psychogenic nonepileptic seizures: a staged approach, a report from the International League Against Epilepsy Nonepileptic Seizures Task Force. Epilepsia. 2013;54(11):2005-2018.',
  'Engel J Jr. Approaches to refractory epilepsy. Ann Indian Acad Neurol. 2014;17(Suppl 1):S12-S17.',
  'Silbergleit R, Durkalski V, Lowenstein D, et al. Intramuscular versus intravenous therapy for prehospital status epilepticus (RAMPART). N Engl J Med. 2012;366(7):591-600.'
];

// Reproduce el marcado de .modal-figure (mismo helper que ya usan sepsis/enfermedad-cerebrovascular)
// para insertar tablas/diagramas EN LÍNEA justo debajo del párrafo que los menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Crisis epiléptica',
      tituloB: 'Estado epiléptico',
      compensada: 'Descarga neuronal excesiva y sincrónica que se manifiesta con signos y síntomas transitorios: motores (tónicos, clónicos, mioclónicos), sensitivos, autonómicos o cognitivos, con o sin alteración del estado de consciencia. La semiología (cómo empieza, cómo evoluciona, qué queda después) es la herramienta diagnóstica más valiosa: interrogar siempre el inicio (focal frente a generalizado desde el comienzo), la duración, la presencia de aura, la mordedura lateral de la lengua, la relajación de esfínteres, y sobre todo el estado postictal (confusión, somnolencia, parálisis de Todd), que orienta con fuerza hacia una crisis epiléptica verdadera frente a sus imitadores (síncope, crisis psicógena, migraña con aura, amnesia global transitoria).',
      descompensada: 'Se define, en su forma convulsiva, como una crisis que dura 5 minutos o más, o crisis repetidas sin recuperación completa de la consciencia entre ellas (definición operacional T1, el punto en que debe iniciarse tratamiento porque es poco probable que ceda espontáneamente); a partir de los 30 minutos (T2) aumenta el riesgo de lesión neuronal permanente. El estado epiléptico no convulsivo, mucho más difícil de reconocer, se manifiesta como alteración del estado de consciencia sin actividad motora evidente y solo se confirma con electroencefalograma.'
    },
    laboratorio: [
      { prueba: 'Glucosa capilar inmediata', utilidad: 'Descarta hipoglucemia como causa corregible de crisis; se realiza antes que cualquier otro estudio.' },
      { prueba: 'Electrolitos (sodio, calcio, magnesio), función renal/hepática', utilidad: 'Identifica causas metabólicas de crisis provocadas.' },
      { prueba: 'Nivel sérico del FAE habitual', utilidad: 'En el paciente con epilepsia ya conocida, identifica subdosificación o incumplimiento como precipitante del episodio.' },
      { prueba: 'Panel toxicológico en orina/sangre', utilidad: 'Intoxicación o abstinencia (alcohol, benzodiacepinas) como causa de la crisis.' },
      { prueba: 'Prueba de embarazo', utilidad: 'En mujeres en edad reproductiva, modifica el estudio etiológico y la elección de fármacos.' },
      { prueba: 'Punción lumbar', utilidad: 'Si hay fiebre o sospecha de infección del sistema nervioso central, tras descartar contraindicaciones con imagen si aplica.' }
    ],
    no_invasivos: [
      { metodo: 'Electroencefalograma (EEG)', interpretacion: 'Estándar para clasificar el tipo de crisis, diagnosticar el estado epiléptico no convulsivo, y guiar el manejo del estado refractario mediante EEG continuo en UCI.', cutoff: 'N/A' },
      { metodo: 'STESS', interpretacion: 'Predice el pronóstico al ingreso del estado epiléptico.', cutoff: '0-6' },
      { metodo: 'Criterios de Salzburg', interpretacion: 'Criterios EEG estandarizados para el diagnóstico del estado epiléptico no convulsivo.', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'TC simple de cráneo', hallazgos: 'Descarta causa estructural aguda (hemorragia, tumor, ECV) en toda primera crisis o estado epiléptico sin causa clara identificada; no debe retrasar el inicio del tratamiento farmacológico.' },
      { modalidad: 'RM cerebral con protocolo de epilepsia', hallazgos: 'Mayor sensibilidad para causas estructurales sutiles (esclerosis mesial temporal, malformaciones del desarrollo cortical, tumores de bajo grado); estudio de elección ambulatorio tras una primera crisis ya estabilizada.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La clasificación de las crisis y las epilepsias sigue el marco operacional de la ILAE (2017), que distingue tipo de crisis, tipo de epilepsia y, cuando es posible, síndrome epiléptico específico; en cada nivel se busca además la etiología (estructural, genética, infecciosa, metabólica, inmune o desconocida). La gravedad y el pronóstico del estado epiléptico se cuantifican aparte con la escala STESS.',
    escalas: [
      { nombre: 'Clasificación ILAE de crisis (2017)', componentes: 'Inicio focal frente a generalizado frente a desconocido; dentro de focal, con o sin alteración de consciencia, motora o no motora; dentro de generalizada, motora (tónico-clónica, tónica, clónica, mioclónica, atónica) o no motora (ausencias).', formula: 'Taxonomía sin puntaje numérico', interpretacion: `Orienta el estudio etiológico y la elección del fármaco antiepiléptico (FAE): algunos fármacos empeoran las crisis generalizadas mioclónicas o las ausencias (p. ej. carbamazepina), por lo que clasificar correctamente el tipo de crisis condiciona directamente el tratamiento.${figBlock('Tabla 1', 'Clasificación ILAE 2017 de los tipos de crisis', `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Nivel</th><th>Subtipos</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Inicio focal</td><td>Con consciencia preservada o con alteración de la consciencia; motora (automatismos, atónica, clónica, espasmos, hipercinética, mioclónica, tónica) o no motora (autonómica, de detención conductual, cognitiva, emocional, sensitiva); puede evolucionar a bilateral tónico-clónica.</td></tr>
            <tr><td class="figure-org">Inicio generalizado</td><td>Motora (tónico-clónica, clónica, tónica, mioclónica, mioclónico-tónico-clónica, mioclónico-atónica, atónica, espasmos epilépticos) o no motora/ausencia (típica, atípica, mioclónica, mioclonía palpebral).</td></tr>
            <tr><td class="figure-org">Inicio desconocido</td><td>Motora (tónico-clónica, espasmos epilépticos) o no motora (detención conductual); categoría reclasificable si se obtiene más información.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Marco operacional de la ILAE (Fisher et al. 2017): el nivel de inicio (focal/generalizado/desconocido) es la primera bifurcación y la de mayor relevancia terapéutica inmediata.</div>`)}` },
      { nombre: 'Clasificación ILAE de las epilepsias (2017)', componentes: 'Tipo de epilepsia (focal, generalizada, combinada focal y generalizada, o desconocida) más síndrome epiléptico específico si es reconocible, más etiología en 6 categorías.', formula: 'Marco jerárquico de 3 niveles', interpretacion: `Guía el pronóstico y la elección terapéutica; los síndromes electroclínicos reconocibles (p. ej. epilepsia mioclónica juvenil) tienen tratamiento e implicaciones pronósticas específicas.${figBlock('Tabla 2', 'Marco de clasificación de las epilepsias (ILAE 2017)', `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Nivel</th><th>Contenido</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">1. Tipo de crisis</td><td>Focal, generalizada, o de inicio desconocido (Tabla 1).</td></tr>
            <tr><td class="figure-org">2. Tipo de epilepsia</td><td>Focal, generalizada, combinada focal y generalizada, o desconocida.</td></tr>
            <tr><td class="figure-org">3. Síndrome epiléptico</td><td>Cuando es reconocible (p. ej. epilepsia mioclónica juvenil, síndrome de West, síndrome de Lennox-Gastaut); orienta pronóstico y tratamiento específico.</td></tr>
            <tr><td class="figure-org">Etiología (en cada nivel)</td><td>Estructural, genética, infecciosa, metabólica, inmune, o desconocida; con frecuencia se superponen más de una categoría en un mismo paciente.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">El diagnóstico se construye de forma jerárquica: no siempre se llega al nivel 3 (síndrome), pero siempre debe intentarse identificar la etiología, ya que puede cambiar el tratamiento (p. ej. dieta cetogénica en deficiencia de GLUT1, cirugía en una lesión estructural focal).</div>`)}` },
      { nombre: 'STESS', componentes: 'Nivel de consciencia, peor tipo de crisis, edad, antecedente de crisis previas.', formula: 'Suma de 4 componentes, 0-6', interpretacion: `Un puntaje ≥3 predice mal pronóstico (muerte o no retorno al estado neurológico basal); ≤2 predice buen pronóstico.${figBlock('Tabla 3', 'Componentes de la escala STESS', `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Componente</th><th>Puntos</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Consciencia: alerta o somnoliento/confuso</td><td>0</td></tr>
            <tr><td class="figure-org">Consciencia: estuporoso o comatoso</td><td>1</td></tr>
            <tr><td class="figure-org">Peor crisis: parcial simple, parcial compleja, ausencia o mioclónica</td><td>0</td></tr>
            <tr><td class="figure-org">Peor crisis: generalizada convulsiva</td><td>1</td></tr>
            <tr><td class="figure-org">Peor crisis: no convulsiva en coma</td><td>2</td></tr>
            <tr><td class="figure-org">Edad &lt;65 años</td><td>0</td></tr>
            <tr><td class="figure-org">Edad ≥65 años</td><td>2</td></tr>
            <tr><td class="figure-org">Antecedente de crisis previas conocido</td><td>0</td></tr>
            <tr><td class="figure-org">Sin antecedente o desconocido</td><td>1</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Rossetti et al. 2008. Puntaje total 0-6; ≥3 se asocia a mal pronóstico funcional y mayor mortalidad.</div>`)}` },
      { nombre: 'Criterios de Salzburg', componentes: 'Descargas epileptiformes generalizadas ≥2.5 Hz sostenidas, o patrones rítmicos/periódicos con criterios electrográficos o clínicos adicionales.', formula: 'Algoritmo diagnóstico por EEG, sin puntaje simple', interpretacion: 'Estandariza el diagnóstico electroencefalográfico del estado epiléptico no convulsivo, reduciendo la variabilidad interobservador que antes dificultaba este diagnóstico.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Estado epiléptico convulsivo',
      color: '#8c3a34',
      definicion: 'Emergencia neurológica definida por una crisis convulsiva de 5 minutos o más de duración, o crisis repetidas sin recuperación completa de la consciencia entre ellas; representa el punto en el que la probabilidad de resolución espontánea es baja y el riesgo de lesión neuronal aumenta con cada minuto adicional sin tratamiento.',
      fisiopatologia: 'La actividad epiléptica sostenida agota progresivamente los mecanismos inhibitorios GABAérgicos (internalización de receptores GABA-A) mientras se favorecen mecanismos excitatorios (mayor expresión de receptores NMDA), lo que explica por qué las benzodiacepinas pierden eficacia cuanto más se retrasa su administración y por qué el estado epiléptico se vuelve progresivamente más resistente al tratamiento con el paso del tiempo.',
      epidemiologia: 'Incidencia de 10-40 casos por 100,000 habitantes al año; mortalidad global 10-20%, mayor en el estado epiléptico refractario y en causas estructurales agudas (ECV, anoxia) que en la subdosificación de FAE en un paciente ya epiléptico.',
      factores_riesgo: ['Epilepsia conocida con abandono o subdosificación del FAE', 'ECV agudo', 'Traumatismo craneoencefálico', 'Infección del sistema nervioso central', 'Alteraciones metabólicas graves', 'Abstinencia alcohólica o de benzodiacepinas', 'Intoxicación por fármacos proconvulsivantes'],
      clinica: 'Actividad motora tónico-clónica generalizada sostenida o repetida sin recuperación de la consciencia; con el paso del tiempo la actividad motora puede volverse más sutil (mioclonías focales, desviación ocular) mientras la actividad eléctrica cerebral persiste, un fenómeno conocido como estado epiléptico "sutil" o en transición hacia el no convulsivo.',
      criterios_dx: 'Operacional (ILAE 2015): T1 (5 minutos) marca el punto en que se define el estado epiléptico y debe iniciarse tratamiento; T2 (30 minutos) marca el punto a partir del cual aumenta el riesgo de lesión neuronal a largo plazo.',
      laboratorio: 'Glucosa capilar inmediata, electrolitos (sodio, calcio, magnesio), función renal/hepática, nivel sérico del FAE si aplica, panel toxicológico, gasometría (acidosis láctica por la actividad muscular sostenida).',
      imagen: 'TC simple de cráneo urgente si no hay causa clara identificada (primer episodio, cambio en el patrón habitual, fiebre, trauma); no debe retrasar el inicio del tratamiento farmacológico.',
      complementarios: 'EEG continuo tan pronto como sea posible, especialmente si la actividad motora cede pero la consciencia no se recupera, para descartar la transición a un estado no convulsivo.',
      dx_diferencial: 'Estado no epiléptico psicógeno, mioclonías postanóxicas, temblor o rigidez por síndrome serotoninérgico o síndrome neuroléptico maligno, distonía aguda.',
      tx_medico: 'Vía aérea, oxigenación, acceso IV, monitorización continua de signos vitales; medir glucosa capilar y corregir hipoglucemia de inmediato (tiamina IV antes de la glucosa si hay sospecha de desnutrición o alcoholismo, para prevenir la encefalopatía de Wernicke).',
      tx_farmacologico: `Manejo estrictamente escalonado por tiempo. Primera línea (0-5 min): lorazepam 0.1 mg/kg IV (máximo 4 mg por dosis, puede repetirse una vez), o diazepam 0.15-0.2 mg/kg IV si no hay lorazepam disponible; midazolam intramuscular 10 mg (≥40 kg) o 5 mg (13-40 kg) si no hay acceso IV, tan eficaz como el lorazepam IV y más rápido en la práctica por el tiempo que toma canalizar una vena (RAMPART). Segunda línea si persiste a los 20 minutos: fosfenitoína 20 mg equivalentes de fenitoína/kg IV, ácido valproico 40 mg/kg IV, o levetiracetam 60 mg/kg IV (máximo 4500 mg); el ensayo ESETT demostró eficacia similar entre los tres, por lo que la elección se individualiza según la comorbilidad (evitar ácido valproico en hepatopatía o embarazo, evitar fenitoína si hay arritmia o hipotensión).${figBlock('Imagen 1', 'Manejo escalonado del estado epiléptico convulsivo por tiempo', `
      <div style="display:flex;flex-direction:column;gap:10px;max-width:480px;margin:0 auto;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="min-width:82px;font-size:11.5px;font-weight:600;color:var(--ink);">0 – 5 min (T1)</div>
          <div style="flex:1;background:#3f6b5233;border:1px solid #3f6b52;border-radius:6px;padding:6px 10px;font-size:11.5px;color:var(--ink);">Primera línea: benzodiacepina (lorazepam IV, o midazolam IM si no hay acceso)</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="min-width:82px;font-size:11.5px;font-weight:600;color:var(--ink);">5 – 20 min</div>
          <div style="flex:1;background:#3d5a7333;border:1px solid #3d5a73;border-radius:6px;padding:6px 10px;font-size:11.5px;color:var(--ink);">Persiste: repetir benzodiacepina una vez; preparar segunda línea</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="min-width:82px;font-size:11.5px;font-weight:600;color:var(--ink);">20 – 40 min (T2)</div>
          <div style="flex:1;background:#966b3533;border:1px solid #966b35;border-radius:6px;padding:6px 10px;font-size:11.5px;color:var(--ink);">Segunda línea IV: fosfenitoína, ácido valproico o levetiracetam (eficacia similar, ESETT)</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="min-width:82px;font-size:11.5px;font-weight:600;color:var(--ink);">&gt; 40 min</div>
          <div style="flex:1;background:#8c3a3433;border:1px solid #8c3a34;border-radius:6px;padding:6px 10px;font-size:11.5px;color:var(--ink);">Refractario: anestesia general (midazolam, propofol o pentobarbital en infusión), intubación, EEG continuo</div>
        </div>
      </div>
      <div class="figure-grade-box">A partir de T2 (30 min) aumenta el riesgo de lesión neuronal permanente; el estudio etiológico se hace en paralelo al tratamiento, nunca después.</div>`)} Si persiste a los 40 minutos (refractario): anestesia general con midazolam, propofol o pentobarbital en infusión continua, con intubación y EEG continuo, titulando a supresión de brotes o cese electrográfico.`,
      tx_intervencionista: 'No aplica de forma directa, salvo tratamiento de la causa estructural subyacente si la hay (p. ej. evacuación de un hematoma).',
      criterios_uci: 'Todo estado epiléptico que no cede con la primera línea, todo paciente que requiere segunda línea o anestésicos, y todo paciente que requiere intubación.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'EEG continuo durante la infusión de anestésicos y en el destete, vigilancia de complicaciones sistémicas (rabdomiólisis, acidosis, hipertermia, aspiración), estudio etiológico completo en paralelo. Si no responde a la benzodiacepina más la segunda línea, reclasificar como estado epiléptico refractario (ver la tarjeta correspondiente) e iniciar anestesia general sin demora.',
      seguimiento_ambulatorio: 'Ajuste del FAE de mantenimiento, educación sobre adherencia si la causa fue subdosificación, seguimiento en clínica de epilepsia.',
      pronostico: 'Determinado principalmente por la causa subyacente y la edad, más que por la duración del estado en sí; el STESS calculado al ingreso ayuda a estratificar el riesgo.',
      algoritmo: ['Crisis ≥5 minutos → tratar como estado epiléptico, no esperar más', 'Glucosa capilar + vía aérea/oxigenación + acceso IV', 'Benzodiacepina (lorazepam IV o midazolam IM si no hay acceso)', 'Persiste a los 20 min → segunda línea (fosfenitoína, ácido valproico o levetiracetam IV)', 'Persiste a los 40 min → anestesia general (midazolam/propofol/pentobarbital) + intubación + EEG continuo', 'Estudio etiológico en paralelo, nunca después']
    },
    {
      nombre: 'Estado epiléptico no convulsivo',
      color: '#7a4363',
      definicion: 'Estado epiléptico sin actividad motora convulsiva evidente, manifestado como alteración del estado de consciencia (desde confusión leve hasta coma) atribuible a actividad epileptiforme continua, diagnosticable solo mediante electroencefalograma.',
      fisiopatologia: 'Comparte el mecanismo de agotamiento inhibitorio GABAérgico del estado convulsivo, pero la actividad eléctrica permanece más localizada o menos propagada a las vías motoras, por lo que la manifestación clínica es predominantemente cognitiva o conductual en vez de motora.',
      epidemiologia: 'Se identifica hasta en 20-48% de los pacientes en coma sin causa clara sometidos a EEG continuo en UCI, y es una causa subdiagnosticada de "encefalopatía de origen desconocido".',
      factores_riesgo: ['Estado epiléptico convulsivo tratado de forma incompleta (transición al no convulsivo)', 'Lesión cerebral aguda (ECV, hemorragia, TCE, anoxia)', 'Sepsis y encefalopatías metabólicas graves', 'Epilepsia conocida con deterioro cognitivo desproporcionado al esperado'],
      clinica: 'Espectro amplio: desde confusión sutil, lenguaje incoherente o automatismos motores mínimos (parpadeo, movimientos faciales), hasta coma profundo sin otra causa identificada; la clave clínica es un deterioro del estado mental que no se explica completamente por la causa de base.',
      criterios_dx: 'Criterios de Salzburg (EEG): descargas epileptiformes generalizadas ≥2.5 Hz sostenidas, o patrones rítmicos/periódicos con criterios adicionales (evolución espacial o temporal, o mejoría clínica y electrográfica tras un FAE IV de prueba).',
      laboratorio: 'El mismo panel metabólico que cualquier crisis, para descartar y tratar causas concomitantes que perpetúan el cuadro.',
      imagen: 'TC o RM según la sospecha etiológica; puede ser normal.',
      complementarios: 'EEG continuo obligatorio para el diagnóstico y para guiar la respuesta al tratamiento; una prueba terapéutica con benzodiacepina IV de acción corta, con mejoría clínica y electrográfica simultánea, apoya con fuerza el diagnóstico.',
      dx_diferencial: 'Encefalopatía metabólica o tóxica, encefalitis, estado postictal prolongado, catatonia, trastorno psiquiátrico primario.',
      tx_medico: 'Corregir los factores metabólicos concomitantes de forma simultánea al tratamiento antiepiléptico, ya que rara vez son mutuamente excluyentes.',
      tx_farmacologico: 'Manejo escalonado similar al convulsivo, pero con un umbral más alto para escalar a anestesia general: benzodiacepina IV inicial, seguida de un FAE de segunda línea IV si persiste; la decisión de usar anestésicos en el estado no convulsivo se individualiza, ya que el riesgo de sedación profunda y ventilación mecánica prolongada debe sopesarse contra el beneficio, especialmente cuando no hay coma asociado.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'El EEG continuo generalmente requiere monitorización en UCI o en una unidad de cuidados intermedios con capacidad de neuromonitoreo.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'EEG continuo seriado para confirmar la resolución electrográfica, no solo la mejoría clínica, ya que ambas pueden disociarse. Sin respuesta al escalamiento farmacológico, reclasificar como estado epiléptico refractario o superrefractario (ver la tarjeta correspondiente).',
      seguimiento_ambulatorio: 'FAE de mantenimiento y seguimiento neurológico según la etiología identificada.',
      pronostico: 'Peor que el estado convulsivo cuando se asocia a coma, en gran parte reflejo de la gravedad de la lesión cerebral subyacente más que del estado no convulsivo en sí mismo.',
      algoritmo: ['Alteración del estado mental inexplicada, sobre todo tras un estado convulsivo tratado o en el paciente crítico → sospechar estado no convulsivo', 'EEG urgente (criterios de Salzburg)', 'Corregir factores metabólicos concomitantes', 'Benzodiacepina IV ± FAE de segunda línea', 'Individualizar el escalamiento a anestesia general según el contexto clínico', 'EEG de control para confirmar la resolución electrográfica']
    },
    {
      nombre: 'Estado epiléptico refractario y superrefractario',
      color: '#5c2d4a',
      definicion: 'Complicación evolutiva del estado epiléptico (convulsivo o no convulsivo, ver las tarjetas correspondientes) cuando no responde al tratamiento escalonado: el refractario es aquel que persiste pese a haber recibido una benzodiacepina adecuada más un fármaco antiepiléptico de segunda línea; el superrefractario es aquel que continúa o recurre 24 horas o más después del inicio de la anestesia general, incluidos los casos que recurren al reducir o suspender la anestesia.',
      fisiopatologia: 'Representa el extremo del espectro de farmacorresistencia ya descrito para el estado epiléptico en general (internalización de receptores GABA-A, sobreexpresión de receptores NMDA); en el superrefractario se suman cambios plásticos más profundos que perpetúan la excitabilidad incluso bajo anestesia profunda.',
      epidemiologia: 'El estado refractario ocurre en 23-43% de los episodios de estado epiléptico; el superrefractario en aproximadamente 15% de los que llegan a requerir anestesia general.',
      factores_riesgo: ['Retraso en el inicio del tratamiento de primera línea', 'Causa estructural aguda grave (encefalitis, anoxia)', 'Edad joven en algunas series (encefalitis autoinmune)', 'Ausencia de epilepsia previa conocida'],
      clinica: 'Persistencia de crisis clínicas o electrográficas pese al tratamiento escalonado adecuado; en el superrefractario, recurrencia de la actividad epiléptica al intentar reducir la anestesia tras 24 horas o más de tratamiento.',
      criterios_dx: 'Definición operacional por fallo terapéutico secuencial: benzodiacepina más segunda línea sin respuesta define el refractario; persistencia o recurrencia de 24 horas o más bajo anestesia general define el superrefractario.',
      laboratorio: 'Ampliar el estudio etiológico de forma exhaustiva: panel autoinmune y paraneoplásico (anticuerpos anti-NMDA-R, anti-LGI1, entre otros) ante la ausencia de causa estructural o metabólica clara, dado que la encefalitis autoinmune es una causa relevante de estado superrefractario en jóvenes previamente sanos.',
      imagen: 'RM cerebral con contraste, buscando hallazgos sugestivos de encefalitis límbica; considerar PET cerebral en casos seleccionados sin diagnóstico claro.',
      complementarios: 'Punción lumbar con estudio de encefalitis autoinmune y panel infeccioso; EEG continuo obligatorio durante toda la anestesia y el destete.',
      dx_diferencial: 'Encefalitis autoinmune o infecciosa no tratada, causa estructural no identificada, dosificación subóptima de los fármacos ya administrados (verificar las dosis reales antes de escalar).',
      tx_medico: 'Soporte multiorgánico completo en UCI (ventilación mecánica, soporte hemodinámico, nutrición), vigilancia estrecha de las complicaciones de la sedación profunda prolongada (íleo, infecciones nosocomiales, trombosis).',
      tx_farmacologico: 'Continuar y optimizar la infusión anestésica (midazolam, propofol o pentobarbital) con meta de supresión de brotes o silencio eléctrico en el EEG; agregar FAE orales o enterales adicionales como terapia de base para facilitar el destete futuro; considerar inmunoterapia empírica (esteroides, inmunoglobulina IV o plasmaféresis) si hay sospecha razonable de encefalitis autoinmune, incluso antes de tener resultados de anticuerpos.',
      tx_intervencionista: 'Terapias de rescate en casos seleccionados y en centros especializados: dieta cetogénica de inicio rápido, estimulación magnética transcraneal, o cirugía de resección en casos con un foco epiléptico claramente identificado.',
      criterios_uci: 'Por definición, todo caso requiere UCI con capacidad de ventilación mecánica y EEG continuo.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Destete muy gradual de la anestesia con EEG continuo, reintroducción escalonada de estímulos, vigilancia de recurrencia.',
      seguimiento_ambulatorio: 'Rehabilitación neurológica intensiva; el pronóstico funcional depende en gran medida de la causa subyacente y la duración total del estado.',
      pronostico: 'Mortalidad más alta que el estado epiléptico no refractario (hasta 30-50% en el superrefractario según la serie y la causa); la encefalitis autoinmune tratada de forma oportuna tiene mejor pronóstico relativo que otras causas estructurales graves.',
      algoritmo: ['Estado epiléptico sin respuesta a benzodiacepina más segunda línea → refractario, iniciar anestesia general', 'Persiste o recurre 24 horas o más bajo anestesia → superrefractario', 'Ampliar el estudio etiológico (autoinmune, infeccioso, RM con contraste)', 'Optimizar la infusión anestésica a meta de supresión de brotes', 'Inmunoterapia empírica si hay sospecha razonable de encefalitis autoinmune', 'Destete gradual con EEG continuo']
    },
    {
      nombre: 'Primera crisis epiléptica no provocada',
      color: '#966b35',
      definicion: 'Primer episodio de crisis epiléptica sin un factor precipitante agudo identificable, a diferencia de la crisis provocada o sintomática aguda, secundaria a un insulto agudo como hipoglucemia, abstinencia o trauma reciente.',
      fisiopatologia: 'Refleja la presencia de un umbral epileptogénico anormal, ya sea por una lesión estructural preexistente, una canalopatía o predisposición genética, o un proceso subyacente aún no identificado; una sola crisis no provocada no equivale automáticamente al diagnóstico de epilepsia.',
      epidemiologia: 'El riesgo de recurrencia a 2 años tras una primera crisis no provocada es de aproximadamente 40-50% en conjunto, pero varía ampliamente según los factores de riesgo presentes.',
      factores_riesgo: ['Anomalía epileptiforme en el EEG', 'Lesión estructural relevante en la neuroimagen', 'Examen neurológico anormal', 'Crisis de inicio nocturno', 'Antecedente familiar de epilepsia'],
      clinica: 'Evento único, con semiología variable según el foco de origen; el interrogatorio del testigo es fundamental para reconstruir el inicio (focal frente a generalizado) y el estado postictal.',
      criterios_dx: 'Diagnóstico clínico basado en la semiología del evento, con estudio complementario dirigido a identificar una causa estructural o electroencefalográfica que modifique el riesgo de recurrencia.',
      laboratorio: 'Panel metabólico completo para excluir causa provocada (glucosa, electrolitos, función renal/hepática, tóxicos).',
      imagen: 'RM cerebral con protocolo de epilepsia (cortes finos en el hipocampo) como estudio de elección ambulatorio; TC simple urgente solo si hay signos de alarma (fiebre, focalidad persistente, trauma, inmunosupresión).',
      complementarios: 'EEG, idealmente dentro de las primeras 24-48 horas (aumenta el rendimiento diagnóstico), para buscar actividad epileptiforme que eleve el riesgo de recurrencia.',
      dx_diferencial: 'Síncope convulsivo, crisis psicógena no epiléptica, migraña con aura, amnesia global transitoria, trastorno del movimiento paroxístico no epiléptico.',
      tx_medico: 'Educación sobre factores precipitantes a evitar (privación de sueño, alcohol, fotoestimulación si aplica) y sobre seguridad (restricciones de conducción según la normativa local, precauciones al nadar o bañarse).',
      tx_farmacologico: 'No se recomienda iniciar un FAE de rutina tras una primera crisis no provocada de bajo riesgo, ya que el tratamiento inmediato reduce el riesgo de recurrencia a corto plazo pero no mejora el pronóstico a largo plazo (remisión a 3 años); sí se considera iniciar un FAE si hay factores de alto riesgo de recurrencia (EEG epileptiforme, lesión estructural, examen anormal), discutido con el paciente sopesando riesgos y beneficios.',
      tx_intervencionista: 'No aplica en este punto.',
      criterios_uci: 'No aplica salvo complicación asociada (estado epiléptico, causa estructural que requiera manejo neurocrítico).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir hospitalización salvo por la causa subyacente o si no hay recuperación completa del estado basal.',
      seguimiento_ambulatorio: 'Seguimiento en clínica de neurología o epilepsia, EEG y/o RM diferidos si no se realizaron de forma aguda, reevaluación del riesgo de recurrencia.',
      pronostico: 'La mayoría de los pacientes de bajo riesgo no vuelve a presentar crisis; la presencia de factores de alto riesgo aumenta la probabilidad de recurrencia hasta 65-70% a 2 años.',
      algoritmo: ['Primera crisis → descartar causa provocada aguda (metabólica, tóxica, estructural aguda)', 'EEG dentro de 24-48 horas si es posible', 'RM cerebral con protocolo de epilepsia', 'Estratificar el riesgo de recurrencia según EEG, imagen y examen', 'Bajo riesgo → observación, educación, sin FAE de rutina', 'Alto riesgo → discutir el inicio de FAE de forma individualizada']
    },
    {
      nombre: 'Crisis focales',
      color: '#3d5a73',
      definicion: 'Crisis que se originan dentro de redes neuronales limitadas a un hemisferio cerebral, con o sin propagación posterior a ambos hemisferios (crisis focal a bilateral tónico-clónica, término que reemplaza al antiguo "secundariamente generalizada").',
      fisiopatologia: 'La descarga se origina en un foco cortical, lesional o no lesional, y se propaga a través de las conexiones anatómicas locales antes de eventualmente reclutar, en algunos casos, redes talamocorticales bilaterales.',
      epidemiologia: 'Representan el tipo de crisis más frecuente en la epilepsia del adulto, especialmente las de origen temporal (la esclerosis mesial temporal es la causa estructural más común de epilepsia focal farmacorresistente).',
      factores_riesgo: ['Lesión estructural focal (esclerosis mesial temporal, malformación del desarrollo cortical, tumor de bajo grado, cicatriz postraumática o postquirúrgica)', 'Antecedente de crisis febriles complejas en la infancia (asociado a la esclerosis mesial temporal)'],
      clinica: 'Según el grado de afectación de la consciencia: focal con consciencia preservada (síntomas motores, sensitivos, autonómicos o psíquicos aislados, antes llamada "parcial simple") o focal con alteración de la consciencia (con automatismos como el chupeteo o la manipulación de objetos, antes llamada "parcial compleja"); el aura, cuando está presente, corresponde en realidad al inicio mismo de una crisis focal con consciencia preservada.',
      criterios_dx: 'Semiología clínica compatible más, cuando es posible, correlato electroencefalográfico focal; la RM identifica el sustrato estructural en una proporción relevante de los casos.',
      laboratorio: 'No aplica de forma directa salvo el estudio etiológico general.',
      imagen: 'RM cerebral con protocolo de epilepsia, la modalidad más rentable para identificar el sustrato estructural focal.',
      complementarios: 'EEG interictal e idealmente ictal (video-EEG) para la localización precisa del foco, especialmente si se considera el manejo quirúrgico.',
      dx_diferencial: 'Crisis psicógena no epiléptica, migraña con aura, ataque isquémico transitorio (aunque este último produce típicamente síntomas negativos, no positivos como los de la crisis).',
      tx_medico: 'Educación y control de factores precipitantes, igual que en cualquier crisis.',
      tx_farmacologico: 'FAE de amplio uso en crisis focales: lamotrigina, levetiracetam, carbamazepina u oxcarbazepina, lacosamida; la elección se individualiza por el perfil de efectos adversos, la comorbilidad y las interacciones, no por una mayor eficacia demostrada de uno sobre otro en primera línea.',
      tx_intervencionista: 'Cirugía de epilepsia (resección del foco) en casos farmacorresistentes con foco bien localizado, la intervención con mayor probabilidad de lograr control completo de crisis en la epilepsia focal lesional.',
      criterios_uci: 'No aplica salvo evolución a estado epiléptico.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma directa salvo ingreso por evaluación prequirúrgica con video-EEG.',
      seguimiento_ambulatorio: 'Control periódico en clínica de epilepsia, ajuste del FAE, vigilancia de efectos adversos e interacciones farmacológicas.',
      pronostico: 'Variable según la etiología; las causas estructurales bien definidas (esclerosis mesial temporal) tienen alta tasa de farmacorresistencia pero también alta tasa de éxito con cirugía.',
      algoritmo: ['Crisis con semiología focal → EEG interictal, considerar video-EEG', 'RM con protocolo de epilepsia', 'Identificar el foco estructural si existe', 'FAE de primera línea individualizado', 'Farmacorresistencia con foco localizado → evaluar cirugía de epilepsia']
    },
    {
      nombre: 'Crisis generalizadas',
      color: '#3f6b52',
      definicion: 'Crisis que se originan y comprometen rápidamente redes neuronales distribuidas bilateralmente desde el inicio, con pérdida de la consciencia como regla, excepto en las mioclónicas puras.',
      fisiopatologia: 'Se atribuyen a hiperexcitabilidad de las redes talamocorticales generalizadas, con una base genética o canalopática demostrable en muchos de los síndromes generalizados idiopáticos, actualmente denominados epilepsias generalizadas genéticas.',
      epidemiologia: 'Las epilepsias generalizadas genéticas representan hasta 15-20% de todas las epilepsias, con inicio típico en la infancia o adolescencia, aunque el diagnóstico puede hacerse por primera vez en la edad adulta.',
      factores_riesgo: ['Antecedente familiar de epilepsia generalizada genética', 'Privación de sueño y fotoestimulación como precipitantes típicos', 'Consumo de alcohol'],
      clinica: 'Tónico-clónica (pérdida súbita de consciencia, fase tónica seguida de clónica, con mordedura lateral de lengua y relajación de esfínteres frecuentes, y confusión postictal prolongada); ausencias (interrupción breve y súbita de la actividad, sin aura ni confusión postictal, típica de la infancia); mioclónicas (sacudidas breves, bilaterales, sin pérdida de consciencia, frecuentes al despertar); atónicas (pérdida súbita del tono postural, con riesgo de caídas y lesión).',
      criterios_dx: `Semiología característica más EEG con descargas generalizadas de punta-onda (típicamente 3 Hz en las ausencias, polipunta-onda en las mioclónicas).${figBlock('Imagen 2', 'EEG: descargas generalizadas de punta-onda a 3 Hz (crisis de ausencia)', `
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spike-waves.png" alt="EEG con descargas generalizadas de punta-onda a 3 Hz, bilaterales y sincrónicas en todos los canales, características de una crisis de ausencia" style="width:100%; max-width:520px; display:block; margin:0 auto; border-radius:6px;">
        <p style="font-size:12px; color:var(--ink-dim); text-align:center; margin-top:6px;">Trazado bilateral y sincrónico en todos los canales, sin lateralización, la firma electroencefalográfica de una crisis generalizada. Autor: Der Lange, Wikimedia Commons, CC BY-SA 2.0.</p>
      `)}`,
      laboratorio: 'No aplica de forma directa.',
      imagen: 'RM cerebral generalmente normal en las epilepsias generalizadas genéticas, a diferencia de las focales, aunque suele solicitarse para excluir causa estructural, especialmente si el debut es en la edad adulta.',
      complementarios: 'EEG con maniobras de activación (hiperventilación, fotoestimulación, privación de sueño), que aumenta significativamente el rendimiento diagnóstico en las epilepsias generalizadas genéticas.',
      dx_diferencial: 'Síncope convulsivo, crisis psicógena no epiléptica; para las ausencias, desconexión atencional o ensoñación diurna.',
      tx_medico: 'Evitar los precipitantes característicos (privación de sueño, alcohol, fotoestimulación).',
      tx_farmacologico: 'El ácido valproico es el FAE de mayor eficacia demostrada en las epilepsias generalizadas genéticas, pero se evita en mujeres en edad reproductiva por su teratogenicidad, prefiriendo lamotrigina o levetiracetam en ese contexto; la carbamazepina y otros bloqueadores de canales de sodio pueden empeorar las ausencias y las mioclonías, por lo que deben evitarse si predominan estos tipos de crisis.',
      tx_intervencionista: 'No aplica típicamente, ya que la cirugía resectiva no es el tratamiento de las epilepsias generalizadas, que no tienen un foco único; la estimulación del nervio vago es una opción paliativa en casos farmacorresistentes seleccionados.',
      criterios_uci: 'No aplica salvo evolución a estado epiléptico.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma directa.',
      seguimiento_ambulatorio: 'Control periódico en clínica de epilepsia; muchas epilepsias generalizadas genéticas requieren tratamiento de por vida, a diferencia de algunos síndromes de la infancia que remiten en la adolescencia.',
      pronostico: 'Generalmente bueno con el FAE apropiado; la elección correcta del fármaco según el tipo específico de crisis es determinante, ya que el fármaco equivocado puede empeorar el control.',
      algoritmo: ['Crisis con semiología generalizada desde el inicio → EEG con maniobras de activación', 'Identificar el subtipo específico (tónico-clónica, ausencia, mioclónica, atónica)', 'RM para excluir causa estructural si el contexto lo amerita', 'FAE de amplio espectro (ácido valproico, lamotrigina, levetiracetam), evitando bloqueadores de sodio si predominan ausencias o mioclonías', 'Evitar el ácido valproico en mujeres en edad reproductiva por su teratogenicidad']
    },
    {
      nombre: 'Crisis psicógenas no epilépticas (pseudocrisis)',
      color: '#6b4a2e',
      definicion: 'Eventos paroxísticos que se asemejan clínicamente a crisis epilépticas pero no se acompañan de la descarga eléctrica cortical anormal característica; se consideran un trastorno neurológico funcional, no una simulación consciente.',
      fisiopatologia: 'Se enmarcan dentro de los trastornos neurológicos funcionales, con un modelo fisiopatológico que involucra alteración del procesamiento de la atención y de la integración sensoriomotora, frecuentemente, aunque no siempre, en el contexto de trauma psicológico o trastornos de ansiedad o disociativos previos.',
      epidemiologia: 'Representan hasta 20-30% de los pacientes referidos a centros especializados de epilepsia por crisis "farmacorresistentes"; la coexistencia de epilepsia verdadera y crisis psicógenas en el mismo paciente ocurre hasta en 10-30% de los casos, lo que complica el diagnóstico.',
      factores_riesgo: ['Antecedente de trauma psicológico, incluido el abuso físico o sexual', 'Trastornos de ansiedad, depresión o disociativos previos', 'Sexo femenino', 'Antecedente de otros trastornos funcionales (dolor crónico, fatiga crónica)'],
      clinica: `Duración típicamente más prolongada que la crisis epiléptica generalizada, con frecuencia varios minutos; movimientos asincrónicos y fluctuantes de las extremidades, movimiento pélvico, llanto ictal, ojos cerrados con resistencia a la apertura pasiva, ausencia de cianosis franca, y ausencia de confusión postictal significativa pese a la aparente intensidad del evento.${figBlock('Tabla 4', 'Crisis epiléptica frente a crisis psicógena no epiléptica: diferenciadores clínicos', `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Característica</th><th>Crisis epiléptica</th><th>Crisis psicógena no epiléptica</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Duración</td><td>Habitualmente &lt;2 minutos</td><td>Con frecuencia &gt;2 minutos, a veces prolongada</td></tr>
            <tr><td class="figure-org">Movimientos</td><td>Estereotipados, sincrónicos, evolución característica</td><td>Asincrónicos, fluctuantes, movimiento pélvico, "lucha" (out-of-phase)</td></tr>
            <tr><td class="figure-org">Ojos</td><td>Habitualmente abiertos</td><td>Con frecuencia cerrados, con resistencia a la apertura pasiva</td></tr>
            <tr><td class="figure-org">Cianosis</td><td>Frecuente en la fase tónica</td><td>Infrecuente</td></tr>
            <tr><td class="figure-org">Confusión postictal</td><td>Presente, a veces prolongada</td><td>Ausente o mínima pese a la aparente intensidad</td></tr>
            <tr><td class="figure-org">Llanto ictal</td><td>Infrecuente</td><td>Puede estar presente</td></tr>
            <tr><td class="figure-org">Correlato EEG</td><td>Presente durante el evento</td><td>Ausente durante el evento típico</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Ningún signo aislado es absoluto; el video-EEG con captura de un evento típico del paciente sigue siendo el estándar de oro diagnóstico.</div>`)}`,
      criterios_dx: 'Video-EEG, el estándar de oro: ausencia de correlato electroencefalográfico durante el evento clínico típico del paciente; el diagnóstico se establece por niveles de certeza crecientes (posible, probable, clínicamente establecido, documentado) según la calidad de la evidencia clínica y electroencefalográfica disponible.',
      laboratorio: 'La prolactina sérica elevada 10-20 minutos después del evento apoya una crisis epiléptica generalizada verdadera, aunque con sensibilidad limitada, mientras que un valor normal no la descarta ni confirma una crisis psicógena por sí solo.',
      imagen: 'Generalmente normal; no descarta ni confirma el diagnóstico.',
      complementarios: 'Evaluación psiquiátrica o psicológica una vez comunicado el diagnóstico, idealmente de forma integrada con el equipo de neurología para facilitar la aceptación.',
      dx_diferencial: 'Epilepsia verdadera, incluida la coexistencia de ambas entidades, síncope convulsivo, trastornos del movimiento paroxísticos.',
      tx_medico: 'La comunicación del diagnóstico es en sí misma una intervención terapéutica: explicar que el trastorno es real, no simulado ni "imaginario", y que existe un tratamiento eficaz (terapia cognitivo-conductual) mejora la aceptación y el pronóstico.',
      tx_farmacologico: 'No hay un FAE indicado para las crisis psicógenas puras; si coexiste epilepsia verdadera, se mantiene el tratamiento antiepiléptico solo para esa causa, evitando la escalada innecesaria de FAE dirigida a eventos que no son epilépticos.',
      tx_intervencionista: 'No aplica; el tratamiento de elección es la terapia cognitivo-conductual específica para crisis psicógenas, con abordaje multidisciplinario (neurología, psiquiatría, psicología).',
      criterios_uci: 'No aplica, salvo lesión física asociada al evento que requiera manejo por separado.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Idealmente el diagnóstico se hace durante el ingreso con monitorización de video-EEG programada, con comunicación conjunta del resultado por neurología y psiquiatría o psicología.',
      seguimiento_ambulatorio: 'Terapia cognitivo-conductual especializada, seguimiento psiquiátrico si hay comorbilidad, reevaluación neurológica periódica sobre todo si coexiste epilepsia verdadera.',
      pronostico: 'Variable; el diagnóstico temprano y la comunicación adecuada mejoran significativamente el pronóstico, mientras que el retraso diagnóstico se asocia a mayor uso de recursos de salud y peor calidad de vida.',
      algoritmo: ['Crisis "farmacorresistente" con semiología atípica → sospechar crisis psicógena', 'Video-EEG para captar un evento típico', 'Sin correlato eléctrico → diagnóstico según el nivel de certeza de la ILAE', 'Comunicación del diagnóstico de forma clara y no estigmatizante', 'Derivar a terapia cognitivo-conductual especializada', 'Mantener el FAE solo si coexiste epilepsia verdadera documentada']
    },
    {
      nombre: 'Epilepsia: diagnóstico y clasificación',
      color: '#2d5f6b',
      definicion: 'Enfermedad cerebral definida operacionalmente por la ILAE (2014) mediante cualquiera de tres criterios: al menos dos crisis no provocadas o reflejas separadas por más de 24 horas; una crisis no provocada junto con una probabilidad de recurrencia similar al riesgo general de recurrencia tras dos crisis no provocadas (al menos 60%) en los siguientes 10 años; o el diagnóstico de un síndrome epiléptico específico.',
      fisiopatologia: 'Representa un estado persistente de predisposición a generar crisis epilépticas, con un sustrato que puede ser estructural, genético, infeccioso, metabólico, inmune o de causa desconocida (las 6 categorías etiológicas del marco ILAE 2017), a menudo superpuestas.',
      epidemiologia: 'Afecta a cerca de 50 millones de personas en el mundo, con una prevalencia de 0.5-1%; hasta dos tercios logran control completo de crisis con FAE apropiados, mientras que el resto desarrolla epilepsia farmacorresistente.',
      factores_riesgo: ['Lesión cerebral estructural previa (ECV, TCE, tumor, malformación del desarrollo cortical)', 'Antecedente familiar o predisposición genética', 'Infección del sistema nervioso central previa', 'Antecedente de crisis febriles complejas en la infancia', 'Enfermedad neurodegenerativa'],
      clinica: 'Recurrencia de crisis con semiología estereotipada para cada paciente, ya que el mismo tipo de crisis suele repetirse con características similares; el impacto funcional abarca desde ninguna limitación hasta discapacidad significativa, incluyendo comorbilidad cognitiva, psiquiátrica (depresión, ansiedad) y social (estigma, restricciones laborales o de conducción).',
      criterios_dx: 'Cumplimiento de al menos uno de los tres criterios operacionales de la ILAE 2014 (dos crisis no provocadas, una crisis con alto riesgo de recurrencia, o un síndrome epiléptico reconocido).',
      laboratorio: 'Dirigido a la etiología sospechada (metabólica, autoinmune, genética según el contexto clínico).',
      imagen: 'RM cerebral con protocolo de epilepsia en todo paciente con epilepsia focal o de inicio en la edad adulta, para identificar un sustrato estructural tratable.',
      complementarios: 'EEG (interictal, con activación, o video-EEG según el caso) para clasificar el tipo de crisis y, cuando es posible, el síndrome epiléptico específico; estudio genético dirigido en encefalopatías epilépticas de inicio temprano o fenotipos sindrómicos reconocibles.',
      dx_diferencial: 'Síncope recurrente, crisis psicógenas no epilépticas, trastornos del movimiento paroxísticos, migraña con aura recurrente.',
      tx_medico: 'Educación sobre desencadenantes, seguridad (conducción, natación, trabajo en altura según la normativa local), y planificación reproductiva en mujeres en edad fértil (elección de un FAE con menor riesgo teratogénico, ácido fólico suplementario).',
      tx_farmacologico: 'Monoterapia con el FAE de primera línea apropiado según el tipo de crisis o síndrome como estrategia inicial, titulando a la dosis mínima eficaz; si falla, cambiar a un segundo FAE en monoterapia antes de considerar la combinación; el objetivo terapéutico es la ausencia completa de crisis sin efectos adversos limitantes, no solo la reducción de su frecuencia.',
      tx_intervencionista: 'Cirugía de epilepsia, estimulación del nervio vago, o dieta cetogénica en casos farmacorresistentes bien seleccionados (ver la tarjeta específica de epilepsia farmacorresistente).',
      criterios_uci: 'No aplica salvo estado epiléptico asociado.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma directa fuera del contexto de crisis agudas o de la evaluación prequirúrgica.',
      seguimiento_ambulatorio: 'Control periódico en clínica de epilepsia con ajuste del FAE, vigilancia de efectos adversos, niveles séricos cuando estén indicados (no de rutina en todos los FAE), y reevaluación periódica de la necesidad de tratamiento a largo plazo. Si fallan 2 FAE apropiados, reclasificar como epilepsia farmacorresistente (ver la tarjeta correspondiente) y referir a evaluación prequirúrgica.',
      pronostico: 'Hasta 70% logra remisión con el tratamiento adecuado; los predictores de mal pronóstico incluyen causa estructural identificable, inicio en la infancia con encefalopatía epiléptica, y falta de respuesta a los dos primeros FAE ensayados de forma adecuada.',
      algoritmo: ['2 o más crisis no provocadas, o 1 crisis de alto riesgo de recurrencia, o síndrome reconocido → diagnóstico de epilepsia', 'Clasificar el tipo de crisis y el tipo de epilepsia (marco ILAE 2017)', 'Buscar la etiología (estructural, genética, infecciosa, metabólica, inmune, desconocida)', 'Monoterapia con FAE de primera línea según el tipo de crisis', 'Falla → segundo FAE en monoterapia antes de combinar', 'Farmacorresistencia (fallo de 2 FAE adecuados) → reevaluar el diagnóstico y considerar terapias no farmacológicas']
    },
    {
      nombre: 'Epilepsia farmacorresistente',
      color: '#5c4a73',
      definicion: 'Complicación evolutiva de la epilepsia (ver la tarjeta correspondiente): fallo para lograr la ausencia sostenida de crisis pese al ensayo adecuado (dosis correcta, tiempo suficiente, tolerado) de dos esquemas de fármacos antiepilépticos, en monoterapia o combinación, apropiadamente seleccionados y utilizados (definición de consenso de la ILAE).',
      fisiopatologia: 'Los mecanismos propuestos incluyen la hipótesis del transportador (sobreexpresión de glicoproteína P y otros transportadores de eflujo que reducen la concentración del fármaco en el tejido epileptogénico) y la hipótesis del blanco farmacológico (alteración de los propios canales o receptores que son el blanco de los FAE, reduciendo su sensibilidad).',
      epidemiologia: 'Afecta a cerca de 30% de los pacientes con epilepsia; la probabilidad de lograr control completo cae drásticamente después del segundo FAE fallido, de aproximadamente 50% tras el primer fármaco a menos de 5% tras el cuarto o quinto intento farmacológico secuencial.',
      factores_riesgo: ['Causa estructural identificable, especialmente la esclerosis mesial temporal y las malformaciones del desarrollo cortical', 'Inicio temprano en la infancia', 'Alta frecuencia de crisis antes del tratamiento', 'Estado epiléptico como forma de presentación', 'Comorbilidad cognitiva o del neurodesarrollo'],
      clinica: 'Crisis persistentes pese al tratamiento farmacológico adecuado, con un impacto acumulado en la calidad de vida, la cognición y el riesgo de muerte súbita inesperada en epilepsia (SUDEP) proporcional a la frecuencia de crisis, especialmente las tónico-clónicas generalizadas no controladas.',
      criterios_dx: 'Cumplimiento de la definición de consenso de la ILAE (fallo de 2 FAE apropiados, adecuadamente dosificados y tolerados) tras confirmar que el diagnóstico de epilepsia y la clasificación del tipo de crisis son correctos, descartando la pseudorresistencia por diagnóstico erróneo, FAE mal elegido para el tipo de crisis, o mala adherencia.',
      laboratorio: 'Niveles séricos del FAE para confirmar la adherencia y descartar la subdosificación como causa de la aparente farmacorresistencia.',
      imagen: 'RM cerebral de alta resolución con protocolo de epilepsia, si no se había realizado ya, reevaluada por un radiólogo con experiencia en epilepsia, ya que hasta un tercio de las lesiones epileptogénicas sutiles se identifican solo en una segunda lectura dirigida.',
      complementarios: 'Evaluación prequirúrgica con video-EEG prolongado para localizar el foco, neuropsicología, y en casos seleccionados electrodos intracraneales, como parte del estudio para determinar la candidatura a cirugía.',
      dx_diferencial: 'Pseudorresistencia (adherencia deficiente, FAE inapropiado para el tipo de crisis, diagnóstico erróneo de epilepsia cuando en realidad son crisis psicógenas no epilépticas).',
      tx_medico: 'Reconfirmar el diagnóstico y la adherencia antes de escalar el tratamiento; optimizar el manejo de comorbilidades que reducen el umbral convulsivo (privación de sueño, apnea obstructiva del sueño no tratada, consumo de alcohol).',
      tx_farmacologico: 'Ensayo de combinaciones racionales de FAE con mecanismos de acción complementarios, evitando combinar fármacos con el mismo mecanismo y perfil de efectos adversos superpuesto; los FAE de tercera generación (lacosamida, perampanel, brivaracetam, entre otros) son opciones adicionales en combinación cuando fallan los de primera y segunda línea.',
      tx_intervencionista: 'Cirugía resectiva en candidatos con foco bien localizado, con mayor probabilidad de libertad de crisis; estimulación del nervio vago o neuroestimulación intracraneal responsiva en quienes no son candidatos a resección; dieta cetogénica, con mayor evidencia en niños pero también usada en adultos seleccionados.',
      criterios_uci: 'No aplica salvo estado epiléptico asociado.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Evaluación prequirúrgica programada con monitorización de video-EEG en una unidad especializada.',
      seguimiento_ambulatorio: 'Seguimiento en clínica de epilepsia farmacorresistente o prequirúrgica, con reevaluación periódica de la candidatura a terapias no farmacológicas si la situación clínica cambia.',
      pronostico: 'La cirugía de epilepsia en candidatos bien seleccionados logra libertad de crisis en 60-70% a largo plazo, muy superior a la probabilidad de éxito de seguir ensayando FAE adicionales; el riesgo de SUDEP es significativamente mayor en la epilepsia farmacorresistente no controlada que en la epilepsia bien controlada.',
      algoritmo: ['Fallo de 2 FAE apropiados → confirmar el diagnóstico correcto y la adherencia (descartar pseudorresistencia)', 'Niveles séricos del FAE si hay duda de adherencia', 'RM de alta resolución revisada por un radiólogo con experiencia en epilepsia', 'Referir a evaluación prequirúrgica con video-EEG', 'Foco bien localizado → cirugía resectiva', 'No candidato a resección → neuroestimulación o dieta cetogénica']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La vigilancia neurológica seriada, el reconocimiento temprano de la transición hacia formas no convulsivas o refractarias, y la corrección simultánea de factores precipitantes son la base del manejo de todo estado epiléptico, independientemente de su causa.',
    parametros: [
      'Estado neurológico: escala de Glasgow y examen neurológico seriado; sospechar transición a estado no convulsivo si la actividad motora cesa pero la consciencia no se recupera.',
      'EEG: continuo durante la infusión de anestésicos y en el destete del estado refractario o superrefractario; también indicado si hay alta sospecha de crisis no convulsivas persistentes.',
      'Temperatura: la hipertermia es frecuente por la actividad muscular sostenida y debe corregirse activamente.',
      'Función renal: vigilar rabdomiólisis (creatina cinasa) y su repercusión renal tras un estado epiléptico convulsivo prolongado.',
      'Vía aérea y ventilación: reevaluar la necesidad continuada de soporte ventilatorio conforme se destetan los anestésicos.',
      'Niveles séricos del FAE de mantenimiento: ajustar según respuesta clínica y tolerancia, no de forma rutinaria en todos los fármacos.'
    ],
    criterios_uci_general: 'Todo estado epiléptico que requiere fármacos de segunda línea o anestésicos, todo paciente intubado, y toda sospecha de estado no convulsivo que requiera EEG continuo.',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'No aplica.',
    prevencion: 'Educación estructurada sobre adherencia al FAE (la causa precipitante más frecuente y más prevenible de estado epiléptico en el paciente con epilepsia ya conocida), identificación y manejo de comorbilidades que reducen el umbral convulsivo (privación de sueño, consumo de alcohol, apnea obstructiva del sueño), y seguimiento estructurado en clínica de epilepsia tras cualquier episodio agudo.'
  }
};

export const compCites = {
  'Estado epiléptico convulsivo': { criterios_dx: [3], tx_farmacologico: [1, 8, 14] },
  'Estado epiléptico no convulsivo': { criterios_dx: [10] },
  'Estado epiléptico refractario y superrefractario': { definicion: [2] },
  'Primera crisis epiléptica no provocada': { epidemiologia: [7], tx_farmacologico: [7] },
  'Crisis focales': { definicion: [4] },
  'Crisis generalizadas': { definicion: [4] },
  'Crisis psicógenas no epilépticas (pseudocrisis)': { criterios_dx: [12] },
  'Epilepsia: diagnóstico y clasificación': { definicion: [6], fisiopatologia: [5] },
  'Epilepsia farmacorresistente': { definicion: [11], pronostico: [13] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Clasificación ILAE de crisis (2017)': [4],
  'Clasificación ILAE de las epilepsias (2017)': [5],
  'STESS': [9],
  'Criterios de Salzburg': [10]
};
export const escalaCalc = { 'STESS': 'stess' };
export const compGroups = [
  { title: 'Crisis epilépticas (enfermedades)', items: ['Primera crisis epiléptica no provocada', 'Crisis focales', 'Crisis generalizadas', 'Crisis psicógenas no epilépticas (pseudocrisis)'] },
  { title: 'Estado epiléptico (enfermedades)', items: ['Estado epiléptico convulsivo', 'Estado epiléptico no convulsivo'] },
  { title: 'Complicación del estado epiléptico', items: ['Estado epiléptico refractario y superrefractario'] },
  { title: 'Epilepsia (enfermedad)', items: ['Epilepsia: diagnóstico y clasificación'] },
  { title: 'Complicación de la epilepsia', items: ['Epilepsia farmacorresistente'] }
];
export const complicacionesIntro = 'El panorama general (epidemiología, etiología, factores de riesgo, fisiopatología) ya se cubrió en Definición. Estas tarjetas son el recurso de consulta con el detalle operativo de cada entidad: diagnóstico diferencial específico, dosis, criterios de UCI y el algoritmo paso a paso. Los grupos "(enfermedades)" son las entidades principales; los grupos "Complicación de..." son una evolución o desenlace posible de esa enfermedad ya diagnosticada, no un diagnóstico independiente.';
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
  root: { title: 'ESTADO EPILÉPTICO Y EPILEPSIA', color: '#5c2d4a', target: 'definicion' },
  branches: [
    { title: 'Estado epiléptico', sub: 'Crisis ≥5 min o sin recuperación', color: '#8c3a34', target: 'diagnostico', leaves: [
      { title: 'Convulsivo', sub: 'Benzodiacepina → 2ª línea → anestesia', color: '#8c3a34', target: 'complicaciones' },
      { title: 'No convulsivo', sub: 'Solo se confirma con EEG', color: '#7a4363', target: 'complicaciones' }
    ] },
    { title: 'Epilepsia', sub: '≥2 crisis no provocadas', color: '#2d5f6b', target: 'diagnostico', leaves: [
      { title: 'Crisis focales/generalizadas', sub: 'Clasificación ILAE 2017', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Farmacorresistente', sub: 'Fallo de 2 FAE adecuados', color: '#5c4a73', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { no_invasivos: [9, 10] };
export const clasificacionCite = [4, 5];
export const seguimientoCite = [1, 2];
