// topics/embolia-grasa/content.js: Embolia Grasa (Síndrome de Embolismo Graso).
// No tiene ítem propio en el temario; se asoció a "Politraumatismo" (bloque IV, Medicina
// Crítica, clúster Emergencias traumáticas y ambientales), dado que es una complicación clásica
// de fracturas de huesos largos/cirugía ortopédica, por decisión explícita del usuario.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás debe ser un `export const` de nivel superior, HERMANO de `content`.
//
// IMPORTANTE (ver memoria del proyecto sobre study.js): construir cada pregunta con la respuesta
// correcta en options[0]/correct:0 primero, verificar el conteo, y solo entonces redistribuir
// mecánicamente con un script.
//
// IMPORTANTE (ver memoria del proyecto sobre tarjetas/figuras/calculadoras): es un síndrome
// único, no una familia de enfermedades, así que NO se fuerza la estructura habitual 4+4: 2
// fichas de entidad por causa (postraumática/ortopédica, la amplia mayoría de casos; no
// traumática) + 3 fichas de complicaciones por sistema (insuficiencia respiratoria/SDRA,
// disfunción neurológica, púrpura petequial y hallazgos hematológicos), por decisión explícita
// del usuario. Calculadora: criterios de Gurd y Wilson. 2 figuras SVG (2 teorías
// fisiopatológicas, distribución de la púrpura petequial).

export const meta = {
  id: 'embolia-grasa',
  titulo: 'Embolia Grasa',
  subtitulo: 'Módulo 35 · Medicina Interna',
  accent: '#6b4a2e',
  accentDim: '#a3855e'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const teoriasHtml = '<img src="topics/embolia-grasa/assets/teorias-fisiopatologicas.png" alt="Infografía de las 2 teorías fisiopatológicas complementarias de la embolia grasa: la teoría mecánica (fractura de hueso largo → liberación de grasa medular → paso de glóbulos grasos a la circulación venosa → émbolos en capilares pulmonares → obstrucción microvascular, con hipoxemia, alteración neurológica y petequias como consecuencias) y la teoría bioquímica (trauma/estrés/catecolaminas → hidrólisis de triglicéridos → liberación de ácidos grasos libres → toxicidad endotelial y daño alveolar → lesión inflamatoria pulmonar y sistémica, con SDRA, fiebre y trombocitopenia como consecuencias); ambas convergen en el compromiso respiratorio, neurológico y cutáneo del síndrome." style="width:100%;max-width:420px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">';

const purpuraHtml = '<img src="topics/embolia-grasa/assets/distribucion-purpura-petequial.png" alt="Infografía de la distribución característica de la púrpura petequial en el síndrome de embolia grasa: predomina por encima del tórax, en conjuntivas, cuello, región supraclavicular, hombros, axilas, tórax superior y, opcionalmente, mucosa oral; explicada por microémbolos grasos en la microcirculación, fragilidad capilar y daño endotelial, con distribución en zonas declives/superiores del tronco." style="width:100%;max-width:340px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">';

export const definicionText = `<p style="margin:0 0 14px;">La embolia grasa es un síndrome clínico producido por la entrada de glóbulos grasos a la circulación venosa, con embolización pulmonar y, en los casos graves, sistémica, produciendo la tríada clásica de insuficiencia respiratoria, disfunción neurológica, y púrpura petequial, típicamente 24-72 horas después del evento desencadenante (un intervalo libre de síntomas que distingue a la embolia grasa de la embolia pulmonar trombótica clásica, de inicio inmediato).</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Las 2 causas principales.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Embolia grasa postraumática/ortopédica</strong>: la amplia mayoría de los casos, por fractura de huesos largos (particularmente el fémur), pelvis, o cirugía ortopédica que instrumenta la cavidad medular (clavo intramedular, artroplastia).</li>
    <li><strong>Embolia grasa no traumática</strong>: considerablemente menos frecuente, asociada a pancreatitis aguda, necrosis de médula ósea (particularmente en la crisis vasooclusiva de la anemia falciforme), liposucción, y uso prolongado de corticoides en dosis altas.</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología dual.</strong>${figBlock('Imagen 1', 'Las 2 teorías fisiopatológicas complementarias', teoriasHtml)} La teoría mecánica (émbolos grasos directos) y la bioquímica (toxicidad endotelial de los ácidos grasos libres) no son excluyentes, sino complementarias: explican por qué el síndrome clínico se instaura y progresa en el curso de 24-72 horas, en lugar de manifestarse de inmediato como la embolia pulmonar trombótica.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama diagnóstico y de manejo.</strong> El diagnóstico es clínico (criterios de Gurd y Wilson, calculadora más abajo), dado que no existe una prueba confirmatoria única; el manejo es fundamentalmente de soporte, con la prevención (estabilización temprana de fracturas) como la intervención más eficaz. El desarrollo completo de las 3 manifestaciones/complicaciones por sistema se detalla en Complicaciones.</p>`;

export const bibliografia = [
  'Gurd AR, Wilson RI. The fat embolism syndrome. J Bone Joint Surg Br. 1974;56-B(3):408-416.',
  'Kwiatt ME, Seamon MJ. Fat embolism syndrome. Int J Crit Illn Inj Sci. 2013;3(1):64-68.',
  'Akhtar S. Fat embolism. Anesthesiol Clin. 2009;27(3):533-550.',
  'Bulger EM, Smith DG, Maier RV, Jurkovich GJ. Fat embolism syndrome. A 10-year review. Arch Surg. 1997;132(4):435-439.',
  'Mellor A, Soni N. Fat embolism. Anaesthesia. 2001;56(2):145-154.',
  'Georgopoulos D, Bouros D. Fat embolism syndrome: clinical examination is still the preferable diagnostic method. Chest. 2003;123(4):982-983.',
  'Tzioupis CC, Giannoudis PV. Fat embolism syndrome: what have we learned over the years? Trauma. 2011;13(3):259-281.',
  'Godeau B, Schaeffer A, Bachir D, et al. Bone marrow necrosis and fat embolism syndrome in sickle cell disease: a review. Am J Med. 1996;101(3):267-273.',
  'Vichinsky EP, Neumayr LD, Earles AN, et al. Causes and outcomes of the acute chest syndrome in sickle cell disease. N Engl J Med. 2000;342(25):1855-1865.',
  'Habashi NM, Andrews PL, Scalea TM. Therapeutic aspects of fat embolism syndrome. Injury. 2006;37 Suppl 4:S68-73.',
  'Fabian TC. Unraveling the fat embolism syndrome. N Engl J Med. 1993;329(13):961-963.',
  'Peltier LF. Fat embolism. A perspective. Clin Orthop Relat Res. 1988;(232):263-270.',
  'Scully RE. Fat embolism syndrome: a review. Am J Pathol. 1956;32(3):621-630.',
  'Meyer N, Pennington WT, Dewitt D, Schmeling GJ. Isolated cerebral fat emboli syndrome in multiply injured patients: a review of three cases and the literature. J Trauma. 2007;63(6):1395-1398.',
  'Weisz GM. Fat embolism. Curr Probl Surg. 1974;11(4):1-51.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Embolia grasa subclínica',
      tituloB: 'Síndrome de embolismo graso establecido',
      compensada: 'Presencia de fractura de hueso largo o cirugía ortopédica reciente con hipoxemia leve o taquicardia aislada, sin cumplir aún criterios diagnósticos completos; puede representar embolización grasa subclínica que no progresa al síndrome franco.',
      descompensada: 'Tríada clásica establecida: insuficiencia respiratoria hipoxémica, disfunción neurológica (confusión, agitación, o coma), y púrpura petequial, típicamente 24-72 horas después del evento desencadenante.'
    },
    laboratorio: [
      { prueba: 'Biometría hemática seriada', utilidad: 'Trombocitopenia (caída &gt;20% del basal) y anemia (caída de hemoglobina) son criterios menores de Gurd y Wilson.' },
      { prueba: 'Velocidad de sedimentación globular', utilidad: 'Elevación como criterio menor de apoyo diagnóstico.' },
      { prueba: 'Búsqueda de macroglóbulos de grasa en sangre/orina', utilidad: 'Criterio menor histórico; de utilidad limitada en la práctica actual por su baja sensibilidad y especificidad.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios de Gurd y Wilson (calculadora)', interpretacion: 'Combina criterios mayores y menores para establecer el diagnóstico clínico, dado que no existe una prueba confirmatoria única.', cutoff: '≥2 criterios mayores, o 1 criterio mayor + ≥4 criterios menores' },
      { metodo: 'Examen de fondo de ojo', interpretacion: 'Puede mostrar émbolos grasos retinianos o petequias retinianas (criterio menor); apoya el diagnóstico cuando está presente.' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'Infiltrados pulmonares bilaterales difusos ("tormenta de nieve"), inespecíficos pero de apoyo diagnóstico cuando se combinan con el cuadro clínico compatible.' },
      { modalidad: 'Resonancia magnética cerebral (secuencias de difusión)', hallazgos: 'Patrón característico de múltiples focos puntiformes de restricción a la difusión ("en cielo estrellado"), particularmente útil cuando la disfunción neurológica es el hallazgo predominante y el diagnóstico es incierto.' },
      { modalidad: 'Tomografía computarizada de tórax', hallazgos: 'Puede mostrar opacidades en vidrio esmerilado difusas; se solicita principalmente para descartar tromboembolia pulmonar clásica como diagnóstico alternativo o concomitante.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema es entre la causa desencadenante (postraumática/ortopédica, la amplia mayoría, vs. no traumática) y la gravedad de la presentación clínica (subclínica vs. síndrome establecido con la tríada completa), que determina la intensidad del soporte requerido.',
    escalas: [
      { nombre: 'Criterios de Gurd y Wilson', componentes: 'Criterios mayores (púrpura petequial, síntomas respiratorios con infiltrados bilaterales, signos cerebrales sin relación con traumatismo craneal) y menores (taquicardia, fiebre, cambios retinianos, ictericia, cambios renales, trombocitopenia, anemia, VSG elevada, macroglobulinemia grasa). Calculadora disponible más abajo.', formula: '≥2 criterios mayores, o 1 criterio mayor + ≥4 criterios menores', interpretacion: 'El criterio diagnóstico clásico más utilizado, pese a no existir una prueba confirmatoria única para el síndrome.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Embolia grasa postraumática/ortopédica',
      color: '#6b4a2e',
      definicion: 'La causa más frecuente del síndrome de embolismo graso con considerable diferencia: fractura de huesos largos (particularmente el fémur), fractura pelviana, o cirugía ortopédica que instrumenta directamente la cavidad medular (clavo intramedular, artroplastia de cadera o rodilla).',
      fisiopatologia: 'La fractura de un hueso largo o la instrumentación quirúrgica de la cavidad medular (con el consecuente aumento agudo de la presión intramedular durante el fresado o la introducción del implante) expone directamente los sinusoides venosos medulares, ricos en grasa, permitiendo que glóbulos grasos entren a la circulación venosa sistémica; el riesgo aumenta considerablemente con el número de fracturas de huesos largos (politraumatismo con múltiples fracturas) y con ciertas técnicas quirúrgicas de mayor presión intramedular.',
      epidemiologia: 'Ocurre en una proporción considerable de las fracturas aisladas de huesos largos, con un riesgo marcadamente mayor en el politraumatismo con múltiples fracturas de huesos largos; el síndrome clínico franco (que cumple criterios de Gurd y Wilson) es menos frecuente que la embolización grasa subclínica detectable solo por métodos de laboratorio sensibles.',
      factores_riesgo: ['Fractura de huesos largos, particularmente el fémur', 'Fractura pelviana', 'Múltiples fracturas de huesos largos concomitantes (politraumatismo)', 'Cirugía ortopédica con instrumentación de la cavidad medular (clavo intramedular, artroplastia)', 'Fijación quirúrgica tardía de la fractura (mayor tiempo de exposición al riesgo de embolización)'],
      clinica: 'Intervalo libre de síntomas característico de 24-72 horas tras el traumatismo o la cirugía, seguido de la tríada clásica: disnea e hipoxemia progresiva, confusión o alteración del estado de alerta, y púrpura petequial (ver esas complicaciones para el desarrollo completo).',
      criterios_dx: 'Criterios de Gurd y Wilson (≥2 mayores, o 1 mayor + ≥4 menores) en el contexto temporal apropiado tras una fractura de hueso largo o cirugía ortopédica reciente.',
      laboratorio: 'Biometría hemática seriada (trombocitopenia, anemia), VSG.',
      imagen: 'Radiografía de tórax (infiltrados bilaterales) y, si predomina la disfunción neurológica, resonancia magnética cerebral con secuencias de difusión (patrón "en cielo estrellado").',
      complementarios: 'Descartar activamente tromboembolia pulmonar clásica como diagnóstico alternativo o concomitante, dado que ambas entidades pueden coexistir en el paciente con fractura de hueso largo y son clínicamente distintas por el intervalo temporal (inmediato en la TEP clásica vs. 24-72h en la embolia grasa).',
      dx_diferencial: 'Tromboembolia pulmonar clásica (inicio inmediato, sin el intervalo libre característico, sin la tríada de disfunción neurológica y púrpura petequial), síndrome de dificultad respiratoria aguda de otra causa concomitante en el paciente politraumatizado.',
      tx_medico: 'Soporte respiratorio (oxígeno suplementario, ventilación mecánica invasiva o no invasiva según la gravedad de la hipoxemia), soporte hemodinámico, y manejo de la disfunción neurológica de soporte; no existe un tratamiento específico que revierta el proceso una vez establecido.',
      tx_farmacologico: 'No hay tratamiento farmacológico específico establecido con evidencia sólida; los corticoides en dosis altas se han estudiado como posible profilaxis en el paciente de alto riesgo (múltiples fracturas de huesos largos) pero su uso rutinario no está claramente respaldado y sigue siendo controvertido.',
      tx_intervencionista: 'Estabilización quirúrgica temprana de la fractura (dentro de las primeras 24 horas cuando el estado del paciente lo permite), la medida más consistentemente asociada a menor incidencia del síndrome.',
      criterios_uci: 'Insuficiencia respiratoria que requiere soporte ventilatorio, disfunción neurológica significativa, o inestabilidad hemodinámica asociada.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia respiratoria y neurológica seriada durante las primeras 72 horas tras la fractura o cirugía ortopédica, la ventana de mayor riesgo de instauración del síndrome.',
      seguimiento_ambulatorio: 'Seguimiento de la recuperación funcional respiratoria y neurológica tras el alta, dado que la mayoría de los déficits son reversibles con el tiempo.',
      pronostico: 'Favorable en la mayoría de los casos con soporte adecuado, dado que tanto la disfunción respiratoria como la neurológica tienden a resolverse completamente en días a semanas; la mortalidad es baja mientras el soporte de cuidados críticos esté disponible oportunamente.',
      algoritmo: ['Fractura de hueso largo o cirugía ortopédica reciente + intervalo libre de 24-72h + tríada clásica → aplicar criterios de Gurd y Wilson', 'Descartar activamente tromboembolia pulmonar clásica concomitante', 'Soporte respiratorio y hemodinámico según la gravedad, sin tratamiento específico establecido', 'Estabilización quirúrgica temprana de la fractura (&lt;24h) como la medida preventiva más eficaz', 'Vigilancia estrecha durante las primeras 72 horas, la ventana de mayor riesgo']
    },
    {
      nombre: 'Embolia grasa no traumática',
      color: '#8a6a1f',
      definicion: 'Forma considerablemente menos frecuente del síndrome, sin relación con fractura ósea ni cirugía ortopédica, asociada a pancreatitis aguda grave, necrosis de médula ósea (particularmente en la crisis vasooclusiva de la anemia falciforme), liposucción, y uso prolongado de corticoides en dosis altas.',
      fisiopatologia: 'El mecanismo varía según la causa específica: en la pancreatitis aguda grave, la lipasa pancreática circulante hidroliza triglicéridos plasmáticos liberando ácidos grasos libres tóxicos directamente en la circulación (predominio del mecanismo bioquímico); en la crisis vasooclusiva de la anemia falciforme, la oclusión vascular produce necrosis isquémica de la médula ósea, liberando grasa medular necrótica hacia la circulación venosa (mecanismo mecánico similar al traumático, pero sin fractura); en la liposucción, la grasa subcutánea aspirada/manipulada puede entrar directamente a la circulación venosa local.',
      epidemiologia: 'Infrecuente en comparación con la forma postraumática; la asociación con la crisis vasooclusiva de la anemia falciforme (necrosis de médula ósea con embolización grasa) es una causa reconocida de deterioro clínico agudo grave en ese contexto específico, con una mortalidad considerablemente más alta que la forma postraumática cuando ocurre en este grupo de pacientes.',
      factores_riesgo: ['Pancreatitis aguda grave', 'Anemia falciforme con crisis vasooclusiva grave (necrosis de médula ósea)', 'Liposucción, particularmente de grandes volúmenes', 'Uso prolongado de corticoides en dosis altas', 'Esteatosis hepática grave (asociación infrecuente descrita)'],
      clinica: 'Tríada clásica similar a la forma postraumática (disnea/hipoxemia, disfunción neurológica, púrpura petequial), pero sin el antecedente de fractura o cirugía ortopédica; en la anemia falciforme, con frecuencia se superpone al cuadro ya grave de la crisis vasooclusiva o el síndrome torácico agudo, dificultando el reconocimiento oportuno.',
      criterios_dx: 'Criterios de Gurd y Wilson aplicados en el contexto clínico apropiado (pancreatitis grave, crisis vasooclusiva de anemia falciforme, liposucción reciente), sin el antecedente traumático/ortopédico característico de la forma más frecuente.',
      laboratorio: 'Los mismos criterios de laboratorio que la forma postraumática (biometría hemática seriada, VSG); en la anemia falciforme, estudios adicionales dirigidos a la crisis de base (deshidrogenasa láctica, bilirrubina, reticulocitos).',
      imagen: 'Los mismos estudios que la forma postraumática (radiografía de tórax, resonancia magnética cerebral con difusión si predomina la disfunción neurológica).',
      complementarios: 'En la anemia falciforme, evaluación conjunta con hematología dado el solapamiento frecuente con el síndrome torácico agudo y la crisis vasooclusiva de base.',
      dx_diferencial: 'Síndrome torácico agudo de la anemia falciforme sin embolización grasa sobreañadida (puede ser indistinguible clínicamente sin alto índice de sospecha), síndrome de dificultad respiratoria aguda por la causa de base (pancreatitis grave) sin componente de embolia grasa.',
      tx_medico: 'Manejo de soporte idéntico en principio al de la forma postraumática (soporte respiratorio, hemodinámico, neurológico), combinado con el tratamiento específico y agresivo de la causa de base (manejo de la pancreatitis grave, transfusión/exanguinotransfusión en la crisis vasooclusiva grave de anemia falciforme según el protocolo específico de ese tema).',
      tx_farmacologico: 'No hay tratamiento farmacológico específico establecido para la embolia grasa en sí; el tratamiento se dirige a la causa de base según la etiología identificada.',
      tx_intervencionista: 'No aplica de forma directa a la embolia grasa en sí; el manejo intervencionista, si está indicado, se dirige a la causa de base.',
      criterios_uci: 'Insuficiencia respiratoria que requiere soporte ventilatorio, disfunción neurológica significativa, o la gravedad de la causa de base (pancreatitis grave, crisis vasooclusiva grave) ya justifica manejo en cuidados críticos independientemente de la embolia grasa sobreañadida.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia respiratoria y neurológica seriada, coordinada con el manejo específico de la causa de base.',
      seguimiento_ambulatorio: 'Seguimiento de la recuperación funcional respiratoria y neurológica; en la anemia falciforme, optimización del manejo preventivo de crisis vasooclusivas futuras coordinado con hematología.',
      pronostico: 'Variable según la causa de base; la forma asociada a necrosis de médula ósea en la anemia falciforme tiene una mortalidad considerablemente más alta que la forma postraumática, reflejando tanto la gravedad del mecanismo (necrosis medular extensa) como la fragilidad clínica de base del paciente durante una crisis vasooclusiva grave.',
      algoritmo: ['Tríada clásica sin antecedente traumático/ortopédico → buscar activamente pancreatitis grave, crisis vasooclusiva de anemia falciforme, liposucción reciente, o corticoides en dosis altas', 'Aplicar criterios de Gurd y Wilson en el contexto clínico identificado', 'Soporte respiratorio/hemodinámico/neurológico igual que en la forma postraumática', 'Tratar agresivamente la causa de base concomitante', 'En anemia falciforme, coordinar con hematología dado el solapamiento frecuente con el síndrome torácico agudo']
    },
    {
      nombre: 'Insuficiencia respiratoria y síndrome de dificultad respiratoria aguda',
      color: '#8c3a34',
      definicion: 'La manifestación más frecuente y con frecuencia la primera en aparecer del síndrome de embolismo graso: hipoxemia progresiva por embolización pulmonar directa de grasa combinada con la lesión endotelial capilar mediada por ácidos grasos libres, que puede progresar hasta un cuadro indistinguible del síndrome de dificultad respiratoria aguda de otra causa.',
      fisiopatologia: 'Los émbolos grasos que alcanzan la circulación pulmonar producen obstrucción mecánica directa de la microvasculatura, mientras que los ácidos grasos libres liberados localmente (por acción de lipasas pulmonares sobre la grasa embolizada) producen lesión endotelial capilar difusa con aumento de la permeabilidad vascular, edema pulmonar no cardiogénico, y activación de la cascada inflamatoria local; la combinación de ambos mecanismos explica tanto la hipoxemia temprana (por el componente mecánico) como el empeoramiento progresivo en las horas siguientes (por el componente inflamatorio/bioquímico que continúa evolucionando).',
      epidemiologia: 'Presente en la práctica totalidad de los casos del síndrome establecido; el grado de compromiso respiratorio varía desde hipoxemia leve autolimitada hasta insuficiencia respiratoria grave que requiere ventilación mecánica.',
      factores_riesgo: ['Mayor carga de grasa embolizada (fracturas múltiples de huesos largos, cirugía ortopédica de alta presión intramedular)', 'Retraso en la estabilización de la fractura', 'Reserva pulmonar de base limitada (enfermedad pulmonar preexistente)'],
      clinica: 'Disnea progresiva, taquipnea, hipoxemia que puede requerir oxígeno suplementario en aumento progresivo o ventilación mecánica en los casos graves; los hallazgos auscultatorios son con frecuencia inespecíficos (estertores difusos) en las etapas iniciales.',
      criterios_dx: 'Hipoxemia con infiltrados pulmonares bilaterales en la radiografía o tomografía de tórax, en el contexto temporal apropiado (24-72h tras fractura/cirugía o causa no traumática identificada), como criterio mayor de Gurd y Wilson.',
      laboratorio: 'Gasometría arterial seriada para cuantificar la gravedad y la evolución de la hipoxemia.',
      imagen: 'Radiografía de tórax con el patrón difuso bilateral característico ("tormenta de nieve"); tomografía de tórax si se requiere mayor caracterización o para descartar tromboembolia pulmonar concomitante.',
      complementarios: 'No hay un estudio complementario único adicional más allá de los ya descritos.',
      dx_diferencial: 'Síndrome de dificultad respiratoria aguda de otra causa (sepsis, aspiración, transfusión masiva) en el paciente politraumatizado con múltiples factores de riesgo concurrentes, tromboembolia pulmonar clásica concomitante.',
      tx_medico: 'Soporte respiratorio escalonado según la gravedad: oxígeno suplementario, ventilación no invasiva, o ventilación mecánica invasiva con estrategia protectora pulmonar (volúmenes corrientes bajos) si progresa a un cuadro compatible con síndrome de dificultad respiratoria aguda establecido.',
      tx_farmacologico: 'No hay tratamiento farmacológico específico dirigido al componente respiratorio de la embolia grasa en sí, más allá del soporte respiratorio estándar.',
      tx_intervencionista: 'Ventilación mecánica invasiva con estrategia protectora pulmonar en la insuficiencia respiratoria grave.',
      criterios_uci: 'Cualquier requerimiento de ventilación mecánica invasiva o no invasiva, o hipoxemia progresiva pese a oxígeno suplementario en dosis crecientes.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Gasometría arterial y parámetros ventilatorios seriados durante la fase aguda.',
      seguimiento_ambulatorio: 'Seguimiento de la función pulmonar tras el alta si hubo compromiso respiratorio significativo, dado que la recuperación completa es la norma en la mayoría de los sobrevivientes.',
      pronostico: 'Favorable en la mayoría de los casos, con resolución completa de la función pulmonar en días a semanas; el subgrupo que progresa a síndrome de dificultad respiratoria aguda establecido tiene un curso más prolongado pero generalmente recuperable con soporte adecuado.',
      algoritmo: ['Hipoxemia progresiva + infiltrados bilaterales en el contexto temporal apropiado → criterio mayor de Gurd y Wilson', 'Gasometría arterial seriada para cuantificar la gravedad', 'Soporte respiratorio escalonado según la gravedad (oxígeno → VNI → VMI)', 'Estrategia protectora pulmonar si progresa a SDRA establecido', 'Descartar tromboembolia pulmonar concomitante activamente']
    },
    {
      nombre: 'Disfunción neurológica',
      color: '#3d5a73',
      definicion: 'Alteración aguda del estado de alerta (desde confusión leve hasta coma) producida por la embolización grasa cerebral difusa, característicamente sin un déficit neurológico focal claro (a diferencia del embolismo cerebral trombótico clásico), y con frecuencia completamente reversible.',
      fisiopatologia: 'Los émbolos grasos que atraviesan la circulación pulmonar (o que acceden directamente a la circulación sistémica a través de un shunt derecha-izquierda, como un foramen oval permeable) alcanzan la microcirculación cerebral de forma difusa y multifocal, produciendo microinfartos puntiformes diseminados por toda la sustancia blanca y gris (más que un territorio vascular único), lo que explica el patrón de disfunción global (confusión, agitación, alteración del estado de alerta) en lugar de un déficit focal como el de un evento cerebrovascular embólico trombótico clásico; el componente bioquímico (toxicidad de ácidos grasos libres sobre el endotelio cerebral) contribuye adicionalmente al edema y la disfunción difusa.',
      epidemiologia: 'Ocurre en una proporción considerable de los casos del síndrome establecido, con un espectro de gravedad amplio, desde confusión leve transitoria hasta coma profundo en los casos más graves.',
      factores_riesgo: ['Mayor carga de grasa embolizada', 'Presencia de un shunt derecha-izquierda (foramen oval permeable), que permite el paso directo de émbolos grasos a la circulación sistémica/cerebral sin el filtro pulmonar', 'Hipoxemia concomitante significativa (agrava la disfunción neurológica por un mecanismo adicional)'],
      clinica: 'Espectro desde confusión leve, agitación, o irritabilidad, hasta estupor o coma en los casos graves; característicamente sin un déficit focal claro (a diferencia de un evento cerebrovascular embólico clásico), aunque pueden ocurrir convulsiones en una minoría de los casos.',
      criterios_dx: 'Signos cerebrales (alteración del estado de alerta o confusión) desproporcionados a la hipoxemia presente y sin relación con un traumatismo craneoencefálico concomitante, como criterio mayor de Gurd y Wilson.',
      laboratorio: 'No específico para el diagnóstico de esta complicación en sí.',
      imagen: 'Resonancia magnética cerebral con secuencias de difusión mostrando el patrón característico de múltiples focos puntiformes de restricción difusos ("en cielo estrellado"), particularmente útil cuando el diagnóstico es incierto o hay sospecha de un evento cerebrovascular focal alternativo que descartar.',
      complementarios: 'Electroencefalograma si hay sospecha de actividad convulsiva subclínica en el paciente con alteración persistente del estado de alerta sin otra explicación.',
      dx_diferencial: 'Traumatismo craneoencefálico concomitante en el paciente politraumatizado (debe descartarse activamente, ver ese tema), evento cerebrovascular embólico focal clásico (déficit focal correspondiente a un territorio vascular único, a diferencia del patrón difuso de la embolia grasa), encefalopatía metabólica por otra causa concurrente (hipoxemia grave, alteración electrolítica, sepsis).',
      tx_medico: 'Manejo de soporte (protección de la vía aérea si el estado de alerta está gravemente comprometido, manejo de convulsiones si ocurren según el protocolo estándar) mientras se espera la resolución espontánea, que ocurre en la gran mayoría de los casos.',
      tx_farmacologico: 'No hay tratamiento farmacológico específico que revierta la disfunción neurológica de la embolia grasa; el manejo es exclusivamente de soporte y, si ocurren convulsiones, con anticonvulsivantes estándar.',
      tx_intervencionista: 'Protección avanzada de la vía aérea (intubación) si el estado de alerta está gravemente comprometido y no puede proteger la vía aérea por sí mismo.',
      criterios_uci: 'Alteración significativa del estado de alerta que compromete la protección de la vía aérea, o convulsiones que requieren manejo activo.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Examen neurológico seriado para documentar la trayectoria de mejoría esperada; descartar activamente causas alternativas si no hay mejoría progresiva en el curso esperado.',
      seguimiento_ambulatorio: 'Seguimiento neurológico si persiste algún déficit cognitivo sutil tras el alta, aunque la recuperación neurológica completa es la norma en la gran mayoría de los sobrevivientes.',
      pronostico: 'Favorable en la gran mayoría de los casos, con recuperación neurológica completa en días a semanas; el déficit neurológico permanente es infrecuente cuando el paciente sobrevive al episodio agudo.',
      algoritmo: ['Confusión/alteración del estado de alerta sin déficit focal claro, sin TCE concomitante → sospechar disfunción neurológica por embolia grasa', 'RM con difusión ("en cielo estrellado") si el diagnóstico es incierto o hay sospecha de evento focal alternativo', 'Descartar activamente TCE concomitante y encefalopatía metabólica alternativa', 'Manejo de soporte, protección de vía aérea si el compromiso es grave', 'Esperar resolución espontánea progresiva en días a semanas, la trayectoria esperada']
    },
    {
      nombre: 'Púrpura petequial y hallazgos hematológicos',
      color: '#7a4363',
      definicion: `El hallazgo más específico (aunque no siempre presente) del síndrome de embolismo graso: erupción petequial no palpable, característicamente distribuida en la conjuntiva, los párpados, el cuello, las axilas, y el tórax superior, típicamente transitoria (24-48 horas) y con frecuencia acompañada de hallazgos hematológicos de laboratorio (trombocitopenia, anemia).${figBlock('Imagen 2', 'Distribución característica de la púrpura petequial', purpuraHtml)}`,
      fisiopatologia: 'Los émbolos grasos que alcanzan la circulación sistémica (a través del pulmón o de un shunt derecha-izquierda) ocluyen capilares dérmicos superficiales, particularmente en las regiones de piel fina y bien vascularizada (conjuntiva, párpados, pliegues cutáneos de axilas y cuello), produciendo microhemorragias petequiales por la combinación de oclusión mecánica capilar y el consumo/disfunción plaquetaria local asociado a la lesión endotelial mediada por ácidos grasos libres; la trombocitopenia sistémica refleja el consumo plaquetario generalizado en el proceso de embolización difusa.',
      epidemiologia: 'Presente en una proporción variable pero considerablemente menor de los casos del síndrome establecido en comparación con el compromiso respiratorio (presente en la práctica totalidad) o neurológico, lo que explica por qué NO es un hallazgo obligatorio para el diagnóstico pese a ser el más específico cuando está presente; con frecuencia transitorio y fácil de pasar por alto si no se busca activamente en la ventana de 24-48 horas en que aparece.',
      factores_riesgo: ['Mayor carga de grasa embolizada', 'Trombocitopenia de base o coagulopatía concomitante (puede exagerar la manifestación petequial)'],
      clinica: 'Petequias no palpables, no confluentes, que aparecen característicamente en la conjuntiva, los párpados, el pliegue axilar, el cuello, y la parte superior del tórax; típicamente aparecen 24-36 horas tras el evento desencadenante y se resuelven espontáneamente en 24-48 horas adicionales sin dejar secuela.',
      criterios_dx: 'Presencia de la erupción petequial característica en la distribución típica, como criterio mayor de Gurd y Wilson; la trombocitopenia (caída &gt;20% del recuento basal) y la anemia (caída de la hemoglobina) son criterios menores de apoyo.',
      laboratorio: 'Biometría hemática seriada para documentar la trombocitopenia y la anemia como criterios menores de apoyo diagnóstico.',
      imagen: 'No aplica; diagnóstico exclusivamente clínico por inspección directa de la piel y las mucosas.',
      complementarios: 'Examen de fondo de ojo, que puede revelar petequias o émbolos grasos retinianos (criterio menor de Gurd y Wilson) en el mismo espectro de manifestaciones microvasculares.',
      dx_diferencial: 'Púrpura trombocitopénica por otra causa (coagulación intravascular diseminada, trombocitopenia inducida por fármacos, ver esos temas), vasculitis de otra causa (distribución y características morfológicas distintas, no limitada a la ventana temporal característica de la embolia grasa).',
      tx_medico: 'No requiere tratamiento específico dirigido a la erupción petequial en sí, dado que se resuelve espontáneamente; el manejo se centra en el soporte de las manifestaciones respiratorias y neurológicas concomitantes, más relevantes clínicamente.',
      tx_farmacologico: 'No aplica de forma directa a esta manifestación en sí.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica de forma directa a esta manifestación en sí; depende de la gravedad de las complicaciones respiratoria y neurológica concomitantes.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Documentar la presencia y la distribución de la erupción petequial en la evaluación clínica inicial, dado que es un hallazgo transitorio que puede resolverse antes de que el paciente sea evaluado si no se busca activamente y con prontitud.',
      seguimiento_ambulatorio: 'No requiere seguimiento específico, dado que se resuelve completamente sin secuela.',
      pronostico: 'Excelente para esta manifestación en sí, con resolución espontánea completa en 24-48 horas sin dejar ninguna secuela cutánea.',
      algoritmo: ['Buscar activamente petequias en conjuntiva, párpados, axilas, cuello, y tórax superior en el paciente con sospecha de embolia grasa, dentro de la ventana de 24-48h en que aparecen', 'Documentar trombocitopenia y anemia seriadas como criterios menores de apoyo', 'Examen de fondo de ojo para buscar petequias/émbolos retinianos', 'No requiere tratamiento específico, se resuelve espontáneamente', 'Su ausencia NO descarta el síndrome, dado que es menos constante que el compromiso respiratorio']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de este tema se centra en la vigilancia respiratoria y neurológica seriada durante la ventana de mayor riesgo (24-72 horas tras el evento desencadenante), dado que no existe un tratamiento específico que revierta el proceso una vez establecido.',
    parametros: ['Gasometría arterial y parámetros ventilatorios seriados', 'Examen neurológico seriado (estado de alerta, orientación)', 'Búsqueda activa de petequias en la distribución característica dentro de la ventana de 24-48h', 'Biometría hemática seriada (trombocitopenia, anemia)'],
    criterios_uci_general: 'Insuficiencia respiratoria que requiere soporte ventilatorio, disfunción neurológica significativa que compromete la protección de la vía aérea, o inestabilidad hemodinámica asociada.',
    criterios_tips_general: 'No aplica de forma directa a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa a este tema.',
    prevencion: 'Estabilización quirúrgica temprana (idealmente dentro de las primeras 24 horas) de las fracturas de huesos largos, la medida preventiva más consistentemente asociada a una menor incidencia del síndrome; en el paciente con anemia falciforme, el manejo oportuno y agresivo de la crisis vasooclusiva grave para prevenir la necrosis extensa de médula ósea.'
  }
};

export const compCites = {
  'Embolia grasa postraumática/ortopédica': [0, 3, 10],
  'Embolia grasa no traumática': [7, 8],
  'Insuficiencia respiratoria y síndrome de dificultad respiratoria aguda': [1, 4],
  'Disfunción neurológica': [13, 5],
  'Púrpura petequial y hallazgos hematológicos': [0, 12]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = { 'Criterios de Gurd y Wilson': [0] };
export const escalaCalc = { 'Criterios de Gurd y Wilson': 'gurd-wilson' };
export const compGroups = [
  { name: 'Causas', items: ['Embolia grasa postraumática/ortopédica', 'Embolia grasa no traumática'] },
  { name: 'Manifestaciones y complicaciones', items: ['Insuficiencia respiratoria y síndrome de dificultad respiratoria aguda', 'Disfunción neurológica', 'Púrpura petequial y hallazgos hematológicos'] }
];
export const complicacionesIntro = 'Las primeras 2 fichas son las 2 causas del síndrome: postraumática/ortopédica (la amplia mayoría de los casos) y no traumática (pancreatitis, anemia falciforme, liposucción, corticoides). Las siguientes 3 son las manifestaciones/complicaciones por sistema que conforman la tríada clásica: insuficiencia respiratoria (la más constante), disfunción neurológica, y púrpura petequial (la más específica pero menos constante).';
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
  root: { title: 'EMBOLIA GRASA', color: '#6b4a2e', target: 'definicion' },
  branches: [
    { title: 'Causas', sub: 'Postraumática vs. no traumática', color: '#8a6a1f', target: 'complicaciones', leaves: [
      { title: 'Postraumática/ortopédica', sub: 'La amplia mayoría de los casos', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'No traumática', sub: 'Pancreatitis, anemia falciforme, liposucción', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'Tríada clásica', sub: 'Manifestaciones por sistema', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Insuficiencia respiratoria/SDRA', sub: 'La más constante', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Disfunción neurológica', sub: 'Sin déficit focal, reversible', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Púrpura petequial', sub: 'La más específica, 24-48h', color: '#7a4363', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { no_invasivos: [0] };
export const clasificacionCite = [0];
export const seguimientoCite = [10];
