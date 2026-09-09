// topics/sepsis/content.js — Módulo 2: Sepsis / Choque séptico.
// Contenido educativo basado en Sepsis-3 (Singer 2016) y en la Surviving Sepsis Campaign 2026
// (Prescott et al.), publicada simultáneamente en Intensive Care Medicine y Critical Care Medicine.
// Estructura idéntica al contrato del motor (misma forma que cirrosis-hepatica).

export const meta = {
  id: 'sepsis',
  titulo: 'Sepsis / Choque séptico',
  subtitulo: 'Módulo 2 · Medicina Interna',
  accent: '#8c3a34',
  accentDim: '#a5514a'
};

export const definicionText = 'La sepsis es una disfunción orgánica potencialmente mortal causada por una respuesta desregulada del huésped a la infección (definición Sepsis-3). Operacionalmente se identifica por un incremento agudo ≥2 puntos en la escala SOFA respecto al basal en el contexto de infección sospechada o confirmada. El choque séptico es un subconjunto de sepsis con anormalidades circulatorias, celulares y metabólicas profundas, definido por la necesidad de vasopresores para mantener una PAM ≥65 mmHg y un lactato sérico >2 mmol/L pese a una reanimación con volumen adecuada; esta combinación conlleva una mortalidad hospitalaria superior al 40%. La SSC 2026 añade un lenguaje de probabilidad diagnóstica que atraviesa toda la guía (sepsis definida, probable, posible e improbable) y que no es retórico: de él depende con qué urgencia se administra el antibiótico.';

export const bibliografia = [
  'Singer M, Deutschman CS, Seymour CW, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016;315(8):801-810.',
  'Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Intensive Care Med. 2026. doi:10.1007/s00134-026-08361-1. Publicación simultánea en Crit Care Med, doi:10.1097/CCM.0000000000007075.',
  'Seymour CW, Liu VX, Iwashyna TJ, et al. Assessment of Clinical Criteria for Sepsis (qSOFA). JAMA. 2016;315(8):762-774.',
  'Vincent JL, Moreno R, Takala J, et al. The SOFA (Sepsis-related Organ Failure Assessment) score. Intensive Care Med. 1996;22(7):707-710.',
  'Ranzani OT, Singer M, Salluh JIF, et al. Development and Validation of the Sequential Organ Failure Assessment (SOFA)-2 Score. JAMA. 2025;334(23):2090-2103.',
  'ARDS Definition Task Force. Acute respiratory distress syndrome: the Berlin Definition. JAMA. 2012;307(23):2526-2533.',
  'KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney Int Suppl. 2012;2(1):1-138.'
];

// Reproduce el marcado visual de .modal-figure que arma oneFiguraHTML() en engine/study-view.js,
// para poder insertar una tabla EN LÍNEA justo debajo del párrafo que la menciona (aquí,
// tx_farmacologico) en vez de dejar que el motor la adjunte donde cae `figuraHTML(c.figura)` por
// defecto — justo tras criterios_dx, bloque `diagnóstico`, lejos de la dosis a la que se refiere,
// que vive en el bloque `tratamiento`, más abajo en el modal.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

export const content = {
  definicion: {
    conceptual: 'Disfunción orgánica por respuesta desregulada del huésped a la infección (Sepsis-3).',
    operacional: 'Infección sospechada/confirmada + incremento agudo ≥2 puntos en SOFA.'
  },
  diagnostico: {
    clinica: {
      tituloA: 'Sepsis',
      tituloB: 'Choque séptico',
      compensada: 'Sepsis: foco infeccioso con disfunción orgánica (SOFA ≥2). Fiebre o hipotermia, taquicardia, taquipnea, alteración del estado mental, oliguria. Para el tamizaje intrahospitalario la SSC 2026 recomienda de forma fuerte NEWS, NEWS2, MEWS o SIRS por encima del qSOFA; un qSOFA positivo sigue siendo una alerta útil de deterioro, pero su sensibilidad es demasiado baja para usarlo como herramienta única de cribado.',
      descompensada: 'Choque séptico: hipotensión que requiere vasopresores para PAM ≥65 mmHg más lactato >2 mmol/L pese a reanimación adecuada. Signos de hipoperfusión: piel moteada, relleno capilar prolongado, acidosis láctica.'
    },
    laboratorio: [
      { prueba: 'Lactato sérico', utilidad: 'Marcador de hipoperfusión; >2 mmol/L orienta a choque, guía la reanimación (repetir en 2-4 h).' },
      { prueba: 'Biometría hemática', utilidad: 'Leucocitosis/leucopenia, desviación a la izquierda, trombocitopenia (sugiere gravedad/CID).' },
      { prueba: 'Función renal y electrolitos', utilidad: 'Detecta lesión renal aguda y trastornos ácido-base.' },
      { prueba: 'Hemocultivos (2 sets)', utilidad: 'Antes de antibióticos si no retrasa >45 min; identifican el patógeno y guían la desescalada.' },
      { prueba: 'Procalcitonina', utilidad: 'Apoya (no define) el origen bacteriano; útil para acortar la duración antibiótica.' },
      { prueba: 'Gasometría arterial', utilidad: 'Evalúa oxigenación, acidosis metabólica y brecha aniónica.' }
    ],
    no_invasivos: [
      { metodo: 'NEWS2 (o NEWS, MEWS, SIRS)', interpretacion: 'Herramienta de cribado recomendada en el paciente hospitalizado (recomendación fuerte, certeza moderada; SSC 2026), por su mayor sensibilidad frente al qSOFA.', cutoff: 'NEWS2 ≥5' },
      { metodo: 'SOFA', interpretacion: 'Cuantifica disfunción de 6 órganos; el aumento agudo ≥2 respecto al basal define sepsis. Es criterio diagnóstico, no de tamizaje.', cutoff: 'Δ ≥2' },
      { metodo: 'qSOFA', interpretacion: 'Ya no se recomienda como herramienta única de cribado por su baja sensibilidad; un qSOFA positivo sí obliga a pensar en sepsis y a buscar disfunción orgánica.', cutoff: '≥2 de 3' }
    ],
    imagen: [
      { modalidad: 'Radiografía / TC de tórax', hallazgos: 'Foco neumónico, derrame, SDRA.' },
      { modalidad: 'Ecografía / TC abdominal', hallazgos: 'Foco abdominal: colecciones, colangitis, isquemia; guía el control del foco.' },
      { modalidad: 'Ecografía a pie de cama (POCUS)', hallazgos: 'Evalúa volemia, función cardiaca y respuesta a fluidos.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central es sepsis (disfunción orgánica) frente a choque séptico (vasopresores + lactato >2 mmol/L pese a reanimación). Conviene no mezclar tres cosas distintas: las escalas de alerta temprana (NEWS2, MEWS, SIRS) sirven para CRIBAR, el SOFA para DIAGNOSTICAR la disfunción orgánica y el lactato junto con los criterios de choque para graduar la GRAVEDAD.',
    escalas: [
      { nombre: 'NEWS2', componentes: 'FR, SpO₂, oxigenoterapia, PAS, FC, nivel de conciencia y temperatura', formula: '0-3 por parámetro (0-20)', interpretacion: 'Herramienta de cribado preferida en el hospital (SSC 2026, recomendación fuerte). ≥5 riesgo medio; ≥7 riesgo alto; un solo parámetro en 3 ya obliga a valorar.' },
      { nombre: 'SIRS', componentes: 'Temperatura >38 o <36 °C, FC >90/min, FR >20/min o PaCO₂ <32 mmHg, leucocitos >12.000 o <4.000/µL o >10% bandas', formula: '1 punto c/u (0-4)', interpretacion: 'Dejó de formar parte de la definición de sepsis en 2016, pero la SSC 2026 lo mantiene como alternativa válida de cribado por su sensibilidad. ≥2 positivo.' },
      { nombre: 'qSOFA', componentes: 'FR ≥22/min, alteración mental (Glasgow <15), PAS ≤100 mmHg', formula: '1 punto c/u (0-3)', interpretacion: '≥2 se asocia a mayor mortalidad, pero su sensibilidad para detectar sepsis es baja: la SSC 2026 recomienda no usarlo como cribado único. Sigue siendo un marcador útil de deterioro.' },
      { nombre: 'SOFA', componentes: 'Respiratorio, coagulación, hígado, cardiovascular, SNC, renal', formula: '0-4 por sistema (0-24)', interpretacion: 'Aumento agudo ≥2 puntos = disfunción orgánica por sepsis; a mayor puntaje, mayor mortalidad. Versión clásica (Vincent 1996).' },
      { nombre: 'SOFA-2', componentes: 'Mismos 6 sistemas, umbrales y variables actualizados (incluye dispositivos/fármacos contemporáneos)', formula: '0-4 por sistema (0-24)', interpretacion: 'Cada punto se asocia a un incremento de la mortalidad en UCI (OR 1.38/punto). Validada en >3 millones de pacientes de 9 países (Ranzani et al. 2025).' },
      { nombre: 'Criterios de choque séptico', componentes: 'Vasopresores para PAM ≥65 + lactato >2 mmol/L', formula: 'Ambos presentes', interpretacion: 'Mortalidad hospitalaria >40%.' },
      { nombre: 'Lactato', componentes: 'Lactato sérico', formula: 'mmol/L', interpretacion: '>2 hipoperfusión; >4 gravedad marcada. El aclaramiento guía la reanimación.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Choque séptico',
      color: '#8c3a34',
      definicion: 'Sepsis con hipotensión que requiere vasopresores para PAM ≥65 mmHg y lactato >2 mmol/L pese a reanimación adecuada.',
      fisiopatologia: 'Vasodilatación por mediadores inflamatorios (NO, prostaglandinas), disfunción endotelial, fuga capilar, hipovolemia relativa y depresión miocárdica, con hipoperfusión tisular y metabolismo anaerobio.',
      epidemiologia: 'Subconjunto más grave de la sepsis; mortalidad hospitalaria >40%.',
      factores_riesgo: ['Edad avanzada', 'Inmunosupresión', 'Retraso en antibióticos', 'Foco no controlado', 'Comorbilidad cardiovascular'],
      clinica: 'Hipotensión persistente, piel moteada, relleno capilar prolongado, oliguria, alteración del estado mental, acidosis láctica.',
      criterios_dx: 'Vasopresores para PAM ≥65 mmHg + lactato >2 mmol/L tras reanimación con volumen (Sepsis-3).',
      laboratorio: 'Lactato elevado, acidosis metabólica, disfunción orgánica múltiple.',
      imagen: 'Dirigida al foco; POCUS para valorar volemia y función cardiaca.',
      complementarios: 'Monitorización hemodinámica; tiempo de llenado capilar como parámetro adicional para guiar la reanimación (SSC 2026, evidencia de certeza baja).',
      dx_diferencial: 'Choque cardiogénico, hipovolémico, obstructivo, anafiláctico.',
      tx_medico: 'Cristaloides ≥30 mL/kg IV en las primeras 3h si hay hipoperfusión inducida por sepsis, calculados con el peso real (o ajustado/ideal si el IMC supera 30); se prefieren cristaloides balanceados sobre el salino al 0.9% (SSC 2026, condicional), salvo en el traumatismo craneoencefálico, donde se sugiere salino al 0.9%; cristaloides solos antes que cristaloides con albúmina; iniciar vasopresor si la hipotensión persiste tras el bolo de líquidos (en choque inestable, considerar líquidos y vasopresor de forma simultánea). Meta de PAM inicial 65 mmHg (60-65 mmHg en ≥65 años, SSC 2026); control del foco idealmente dentro de las primeras 6h del diagnóstico.',
      tx_farmacologico: `Noradrenalina periférica de primera línea (no retrasar por falta de acceso central); si hay disfunción cardiaca concomitante, noradrenalina o adrenalina son opciones de primera línea (SSC 2026) — noradrenalina preferida si taquiarritmia, adrenalina si bradiarritmia. Si persiste hipotensión con dosis crecientes de noradrenalina (equivalente ≈0.3 mcg/kg/min), añadir vasopresina; si aun así la PAM es inadecuada, añadir adrenalina (ver Tabla 1). Hidrocortisona 200 mg IV/día en dosis fraccionadas: la SSC 2026 la sugiere en el choque séptico sin exigir que sea refractario (recomendación condicional, certeza baja), y no hay beneficio adicional por encima de 260 mg/día equivalentes. Antibióticos de amplio espectro inmediatos (dentro de la primera hora); considerar antibiótico prehospitalario si el traslado al hospital se prevé >60 min.${figBlock('Tabla 1', 'Dosis de vasopresores en choque séptico', `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Fármaco</th><th>Dosis</th><th>Rol</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Noradrenalina</td><td>0.05-0.5 mcg/kg/min IV, titulada; puede iniciarse por vía periférica</td><td>Primera línea</td></tr>
            <tr><td class="figure-org">Vasopresina</td><td>0.03 U/min (dosis fija)</td><td>Añadir con noradrenalina en dosis crecientes (equivalente ≈0.3 mcg/kg/min)</td></tr>
            <tr><td class="figure-org">Adrenalina</td><td>Titular según respuesta</td><td>Añadir si PAM inadecuada pese a noradrenalina + vasopresina; o alternativa de primera línea si hay disfunción cardiaca (preferir si bradiarritmia; noradrenalina si taquiarritmia)</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Meta de PAM: 65 mmHg (60-65 mmHg en ≥65 años). La hidrocortisona 200 mg/día se sugiere en el choque séptico, no solo en el refractario (SSC 2026, condicional).</div>`)}`,
      tx_intervencionista: 'Control del foco: drenaje de colecciones, desbridamiento, retiro de catéteres infectados — idealmente dentro de las primeras 6h del diagnóstico (SSC 2026).',
      criterios_uci: 'Necesidad de vasopresores, ventilación o monitorización invasiva; se sugiere ingreso a UCI dentro de las primeras 6h.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluar perfusión (lactato, diuresis, relleno capilar) y desescalar antibióticos con cultivos.',
      seguimiento_ambulatorio: 'Vigilancia de secuelas post-UCI (síndrome post-cuidados intensivos), rehabilitación.',
      pronostico: 'Mortalidad >40%; peor con retraso antibiótico y falla multiorgánica.',
      algoritmo: ['Reconocer hipotensión/lactato elevado', 'Cristaloides ≥30 mL/kg en 3h', 'Antibiótico de amplio espectro (<1h) + hemocultivos previos', 'Vasopresor (noradrenalina periférica) si persiste hipotensión tras el bolo, con meta de PAM 65 (60-65 en ≥65 años)', 'Añadir vasopresina y después adrenalina si escalan las dosis', 'Considerar hidrocortisona 200 mg/día', 'Control del foco (<6h)', 'Reevaluar perfusión y desescalar']
    },
    {
      nombre: 'Síndrome de dificultad respiratoria aguda (SDRA)',
      color: '#3d5a73',
      definicion: 'Edema pulmonar no cardiogénico con hipoxemia aguda e infiltrados bilaterales, según la definición de Berlín.',
      fisiopatologia: 'Daño alveolo-capilar difuso, aumento de permeabilidad, edema rico en proteínas y colapso alveolar que altera el intercambio gaseoso.',
      epidemiologia: 'Complicación pulmonar frecuente de la sepsis, sobre todo de origen pulmonar.',
      factores_riesgo: ['Neumonía', 'Aspiración', 'Sepsis grave', 'Transfusiones múltiples'],
      clinica: 'Disnea, taquipnea, hipoxemia refractaria, crepitantes bilaterales.',
      criterios_dx: 'Berlín: inicio ≤1 semana, infiltrados bilaterales, no explicado por falla cardiaca, PaO₂/FiO₂ ≤300 con PEEP ≥5.',
      laboratorio: 'Hipoxemia en gasometría; relación PaO₂/FiO₂ para gradar (leve/moderado/grave).',
      imagen: 'Infiltrados alveolares bilaterales en Rx/TC de tórax.',
      complementarios: 'Ecocardiograma para excluir origen cardiogénico.',
      dx_diferencial: 'Edema cardiogénico, hemorragia alveolar, neumonía bilateral.',
      tx_medico: 'Ventilación protectora: Vt 6 mL/kg peso ideal, presión meseta <30 cmH₂O, PEEP adecuada; posición prona si PaO₂/FiO₂ <150.',
      tx_farmacologico: 'Manejo conservador de fluidos; bloqueo neuromuscular en casos graves seleccionados.',
      tx_intervencionista: 'ECMO venovenoso en SDRA grave refractario en centros especializados.',
      criterios_uci: 'Todo SDRA moderado-grave requiere UCI y ventilación mecánica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ajuste diario del ventilador; metas de oxigenación y destete.',
      seguimiento_ambulatorio: 'Rehabilitación pulmonar; vigilancia de fibrosis residual.',
      pronostico: 'Mortalidad 30-45% según gravedad.',
      algoritmo: ['Confirmar criterios de Berlín', 'Ventilación protectora (Vt 6 mL/kg)', 'Titular PEEP y FiO₂', 'Prona si PaO₂/FiO₂ <150', 'Considerar ECMO si refractario']
    },
    {
      nombre: 'Lesión renal aguda asociada a sepsis',
      color: '#3f6b52',
      definicion: 'Descenso agudo de la función renal en el contexto de sepsis, definido por criterios KDIGO.',
      fisiopatologia: 'Hipoperfusión, inflamación, microtrombosis y disfunción tubular, no solo necrosis tubular isquémica clásica.',
      epidemiologia: 'La sepsis es la causa más frecuente de LRA en pacientes críticos.',
      factores_riesgo: ['Choque', 'Nefrotóxicos', 'ERC previa', 'Edad avanzada'],
      clinica: 'Oliguria, retención de azoados, sobrecarga de volumen.',
      criterios_dx: 'KDIGO: aumento de creatinina ≥0.3 mg/dL en 48 h, o ≥1.5× basal en 7 días, o diuresis <0.5 mL/kg/h por 6 h.',
      laboratorio: 'Creatinina y urea elevadas, hiperkalemia, acidosis metabólica.',
      imagen: 'Ecografía renal para excluir obstrucción.',
      complementarios: 'Análisis de orina y electrolitos urinarios.',
      dx_diferencial: 'LRA prerrenal, obstructiva, glomerular, nefrotoxicidad.',
      tx_medico: 'Optimizar perfusión renal (PAM adecuada), evitar nefrotóxicos, ajustar dosis de fármacos.',
      tx_farmacologico: 'No usar diuréticos para prevenir/tratar la LRA; manejo de hiperkalemia y acidosis.',
      tx_intervencionista: 'Terapia de reemplazo renal si hiperkalemia refractaria, acidosis grave, sobrecarga o uremia sintomática.',
      criterios_uci: 'LRA con indicación de TRR o inestabilidad hemodinámica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Balance hídrico, electrolitos y creatinina seriados.',
      seguimiento_ambulatorio: 'Vigilancia de progresión a ERC tras el alta.',
      pronostico: 'Aumenta la mortalidad; riesgo de enfermedad renal crónica residual.',
      algoritmo: ['Estadificar por KDIGO', 'Optimizar PAM y volemia', 'Retirar nefrotóxicos', 'Tratar hiperkalemia/acidosis', 'TRR si indicación absoluta']
    },
    {
      nombre: 'Coagulación intravascular diseminada (CID)',
      color: '#7a4363',
      definicion: 'Activación sistémica de la coagulación con consumo de factores y plaquetas, trombosis microvascular y sangrado.',
      fisiopatologia: 'La inflamación activa el factor tisular, genera trombina, deposita fibrina en la microcirculación y consume plaquetas y factores.',
      epidemiologia: 'Complica la sepsis grave; marcador de mal pronóstico.',
      factores_riesgo: ['Sepsis grave', 'Choque', 'Falla multiorgánica'],
      clinica: 'Sangrado en sitios de punción, petequias, trombosis, isquemia distal.',
      criterios_dx: 'Score ISTH: plaquetas, dímero D/PDF, TP prolongado y fibrinógeno; ≥5 puntos sugiere CID manifiesta.',
      laboratorio: 'Trombocitopenia, dímero D elevado, TP/TTPa prolongados, fibrinógeno bajo.',
      imagen: 'Según complicaciones trombóticas/hemorrágicas.',
      complementarios: 'Seguimiento seriado del score ISTH.',
      dx_diferencial: 'Púrpura trombocitopénica trombótica, insuficiencia hepática, HIT.',
      tx_medico: 'Tratar la causa subyacente (la clave es controlar la sepsis).',
      tx_farmacologico: 'Transfundir plaquetas/plasma/crioprecipitado solo si hay sangrado o procedimiento; considerar anticoagulación si predomina la trombosis.',
      tx_intervencionista: 'Según complicaciones (p. ej. manejo de isquemia).',
      criterios_uci: 'CID con sangrado grave o falla multiorgánica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Monitorizar plaquetas, coagulación y fibrinógeno.',
      seguimiento_ambulatorio: 'Según secuelas; habitualmente se resuelve con el control de la sepsis.',
      pronostico: 'Empeora la mortalidad de la sepsis.',
      algoritmo: ['Calcular score ISTH', 'Controlar la sepsis (causa)', 'Transfundir solo si sangrado/procedimiento', 'Vigilancia seriada de coagulación']
    },
    {
      nombre: 'Encefalopatía asociada a sepsis',
      color: '#966b35',
      definicion: 'Disfunción cerebral difusa por la respuesta séptica, sin infección directa del SNC.',
      fisiopatologia: 'Neuroinflamación, disfunción de la barrera hematoencefálica, alteración de neurotransmisores e hipoperfusión.',
      epidemiologia: 'Una de las manifestaciones más frecuentes de disfunción orgánica en sepsis.',
      factores_riesgo: ['Edad avanzada', 'Choque', 'Falla renal/hepática', 'Fármacos sedantes'],
      clinica: 'Desde delirium hasta coma; fluctuante, sin focalidad.',
      criterios_dx: 'Diagnóstico de exclusión: alteración mental en sepsis tras descartar otras causas (metabólicas, estructurales, meningitis).',
      laboratorio: 'Para excluir causas metabólicas (glucosa, sodio, amonio, función renal/hepática).',
      imagen: 'TC/RM para excluir causa estructural; suele ser normal.',
      complementarios: 'EEG si se sospechan crisis no convulsivas.',
      dx_diferencial: 'Meningitis/encefalitis, ACV, encefalopatía metabólica o farmacológica.',
      tx_medico: 'Tratar la sepsis, corregir factores metabólicos, minimizar sedación, medidas anti-delirium.',
      tx_farmacologico: 'Evitar benzodiacepinas si es posible; tratar el dolor y las crisis si las hay.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Deterioro del sensorio con riesgo de vía aérea.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Evaluación neurológica seriada y del delirium (CAM-ICU).',
      seguimiento_ambulatorio: 'Vigilancia de deterioro cognitivo a largo plazo.',
      pronostico: 'Asociada a mayor mortalidad y deterioro cognitivo residual.',
      algoritmo: ['Descartar causas estructurales/metabólicas', 'Controlar la sepsis', 'Minimizar sedación', 'Prevención/tratamiento del delirium']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La reevaluación frecuente de la perfusión y la respuesta al tratamiento es la base del manejo de la sepsis.',
    parametros: [
      'Perfusión: lactato seriado, relleno capilar, diuresis horaria.',
      'Hemodinamia: PAM ≥65 mmHg, dosis de vasopresores, parámetros dinámicos de fluidos.',
      'Antibióticos: desescalar según cultivos; evaluar duración (procalcitonina).',
      'Control del foco: confirmar que se logró (drenaje/cirugía).',
      'Función orgánica: SOFA diario, función renal, oxigenación.',
      'Fiebre: la SSC 2026 sugiere no tratarla con antipiréticos ni con enfriamiento externo para mejorar el pronóstico; sí para el confort o si hay otra indicación.'
    ],
    criterios_uci_general: 'Necesidad de vasopresores, ventilación mecánica, TRR o monitorización invasiva.',
    criterios_tips_general: 'No aplica en sepsis.',
    criterios_trasplante_general: 'No aplica en sepsis.',
    prevencion: 'Prevención de infecciones nosocomiales, retiro oportuno de dispositivos, profilaxis de TVP y de úlceras de estrés según indicación, y programas de reconocimiento precoz de sepsis.'
  }
};

// Presentación específica del tema
export const compCites = {
  'Choque séptico': { definicion: [1], criterios_dx: [1], tx_farmacologico: [2] },
  'Síndrome de dificultad respiratoria aguda (SDRA)': { criterios_dx: [6] },
  'Lesión renal aguda asociada a sepsis': { criterios_dx: [7] },
  'Coagulación intravascular diseminada (CID)': {},
  'Encefalopatía asociada a sepsis': {}
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = { 'NEWS2': [2], 'SIRS': [2], 'qSOFA': [2, 3], 'SOFA': [4], 'SOFA-2': [5], 'Criterios de choque séptico': [1], 'Lactato': [2] };
export const escalaCalc = { 'SIRS': 'cribado', 'qSOFA': 'cribado', 'SOFA': 'sofa', 'SOFA-2': 'sofa2', 'Lactato': 'lactato' };
export const compGroups = [
  { title: 'Circulatorias', items: ['Choque séptico'] },
  { title: 'Respiratorias', items: ['Síndrome de dificultad respiratoria aguda (SDRA)'] },
  { title: 'Renales y hematológicas', items: ['Lesión renal aguda asociada a sepsis', 'Coagulación intravascular diseminada (CID)'] },
  { title: 'Neurológicas', items: ['Encefalopatía asociada a sepsis'] }
];
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
  root: { title: 'SEPSIS', color: '#8c3a34', target: 'definicion' },
  branches: [
    { title: 'Sepsis', sub: 'Disfunción orgánica · SOFA ≥2', color: '#3f6b52', target: 'diagnostico' },
    { title: 'Choque séptico', sub: 'Vasopresores + lactato >2', color: '#8c3a34', target: 'diagnostico', leaves: [
      { title: 'Foco pulmonar', sub: 'Neumonía · la causa más común', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Foco abdominal', sub: 'Peritonitis, colangitis', color: '#966b35', target: 'complicaciones' },
      { title: 'Foco urinario', sub: 'Pielonefritis, urosepsis', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Piel y partes blandas', sub: 'Celulitis, fascitis', color: '#7a4363', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [2], no_invasivos: [2, 3, 4] };
export const clasificacionCite = [1];
export const seguimientoCite = [2];
export const figurasClasificacion = ['cribado-ssc2026', 'sofa2-tabla', 'antibiotico-tiempos'];
export const figurasDefinicion = ['terminologia-sepsis'];

export const figuras = {
  'terminologia-sepsis': {
    titulo: 'Tabla 3. Lenguaje de probabilidad diagnóstica de la SSC 2026',
    fuente: 'Surviving Sepsis Campaign 2026 (Prescott HC, et al. Intensive Care Med 2026, doi:10.1007/s00134-026-08361-1).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Término</th><th>Qué quiere decir</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Sepsis definida</td><td>La sepsis está confirmada por la historia, la exploración y las pruebas. Un diagnóstico alternativo es muy improbable.</td></tr>
            <tr><td class="figure-org">Sepsis probable</td><td>Sospecha alta. La sepsis es el diagnóstico más probable; la alternativa lo es menos.</td></tr>
            <tr><td class="figure-org">Sepsis posible</td><td>Sospecha moderada. La sepsis es un diagnóstico posible, pero una alternativa también es probable.</td></tr>
            <tr><td class="figure-org">Sepsis improbable</td><td>Sospecha baja. La valoración clínica no encaja con sepsis, o hay una alternativa más probable.</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Esta gradación decide el tiempo objetivo de antibiótico. Sepsis probable o definida, antibiótico inmediato (&lt;1 h); sepsis posible sin choque, evaluación rápida y hasta 3 h; baja probabilidad de infección sin choque, se difiere el antibiótico y se vigila de cerca. En el choque séptico el antibiótico es inmediato en los cuatro escenarios de sospecha.</div>`
  },
  'cribado-ssc2026': {
    titulo: 'Cribado de sepsis: qué cambió en la SSC 2026',
    fuente: 'Surviving Sepsis Campaign 2026 (Prescott HC, et al. Intensive Care Med 2026, doi:10.1007/s00134-026-08361-1).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Escenario</th><th>Recomendación</th><th>Fuerza</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Paciente agudo en el hospital</td><td>Usar NEWS, NEWS2, MEWS o SIRS <strong>por encima del qSOFA</strong> como herramienta única de cribado</td><td><span class="figure-tag fail">Fuerte</span></td></tr>
            <tr><td class="figure-org">Traslado en ambulancia o aeronave</td><td>Usar alguna herramienta estandarizada de cribado antes que no usar ninguna; la guía no elige cuál</td><td><span class="figure-tag dys">Condicional</span></td></tr>
            <tr><td class="figure-org">Hospital o sistema de salud</td><td>Programa de mejora del desempeño con cribado de pacientes de alto riesgo, procedimientos normalizados y estrategias de calidad</td><td><span class="figure-tag fail">Fuerte</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">El motivo del cambio es la sensibilidad. En una cohorte de 221.429 registros prehospitalarios el NEWS2 alcanzó una sensibilidad del 73.1% frente al 23.1% del qSOFA. La guía de 2021 ya recomendaba <em>en contra</em> del qSOFA como cribado único; la de 2026 da el paso siguiente y dice cuáles usar en su lugar. <strong>Ninguna de estas escalas diagnostica sepsis</strong>: detectan deterioro, y su valor depende del sistema que responde cuando la puntuación sube.</div>`
  },
  'sofa2-tabla': {
    titulo: 'Tabla 2 — Escala SOFA-2 completa',
    fuente: 'Ranzani OT, et al. Development and Validation of the SOFA-2 Score. JAMA. 2025;334(23):2090-2103.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Sistema</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Cerebro</td><td>GCS 15</td><td>GCS 13-14 o fármaco para delirium</td><td>GCS 9-12</td><td>GCS 6-8</td><td>GCS 3-5</td></tr>
            <tr><td class="figure-org">Respiratorio</td><td>PaO₂/FiO₂ &gt;300</td><td>≤300</td><td>≤225</td><td>≤150 + soporte avanzado*</td><td>≤75 + soporte avanzado*, o ECMO</td></tr>
            <tr><td class="figure-org">Cardiovascular</td><td>PAM ≥70, sin vasopresor</td><td>PAM &lt;70, sin vasopresor</td><td>Vasopresor dosis baja (≤0.2 mcg/kg/min)</td><td>Dosis media (&gt;0.2-0.4)</td><td>Dosis alta (&gt;0.4) o soporte mecánico</td></tr>
            <tr><td class="figure-org">Hígado</td><td>Bilirrubina ≤1.2 mg/dL</td><td>≤3.0</td><td>≤6.0</td><td>≤12.0</td><td>&gt;12.0</td></tr>
            <tr><td class="figure-org">Riñón</td><td>Creatinina ≤1.2 mg/dL</td><td>≤2.0, o diuresis &lt;0.5 mL/kg/h 6-12h</td><td>≤3.5, o &lt;0.5 mL/kg/h ≥12h</td><td>&gt;3.5, o &lt;0.3 mL/kg/h ≥24h</td><td>En TRR o cumple criterios</td></tr>
            <tr><td class="figure-org">Hemostasia</td><td>Plaquetas &gt;150×10³/µL</td><td>≤150</td><td>≤100</td><td>≤80</td><td>≤50</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Puntaje total = suma de los 6 sistemas (0-24). *Soporte ventilatorio avanzado: cánula de alto flujo, CPAP, BiPAP, VNI, ventilación mecánica invasiva o domiciliaria. Cada punto se asocia a mayor mortalidad en UCI (OR 1.38/punto).</div>`
  },
  'antibiotico-tiempos': {
    titulo: 'Tiempos objetivo de antibiótico según escenario clínico',
    fuente: 'Surviving Sepsis Campaign 2026 (Prescott HC, et al. Intensive Care Med 2026, doi:10.1007/s00134-026-08361-1).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Escenario clínico</th><th>Conducta</th><th>Tiempo objetivo</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Choque séptico (posible, probable o definido)</td><td>Antimicrobiano inmediato</td><td><span class="figure-tag fail">&lt;1 hora</span></td></tr>
            <tr><td class="figure-org">Sepsis probable o definida, sin choque</td><td>Antimicrobiano inmediato</td><td><span class="figure-tag fail">&lt;1 hora</span></td></tr>
            <tr><td class="figure-org">Sepsis posible, sin choque</td><td>Evaluación rápida de causa infecciosa vs. no infecciosa; tratar si persiste sospecha</td><td><span class="figure-tag dys">&lt;3 horas</span></td></tr>
            <tr><td class="figure-org">Baja probabilidad de infección, sin choque</td><td>Diferir antibiótico; monitorización estrecha</td><td>—</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Los hemocultivos se obtienen antes del antibiótico, pero sin retrasar su inicio. Considerar antibiótico prehospitalario si el traslado al hospital se prevé &gt;60 min en choque séptico.</div>`
  }
};
