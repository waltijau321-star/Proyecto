// topics/leucemia-aguda/content.js: Leucemia Aguda (Leucemia Mieloide Aguda, Leucemia
// Promielocítica Aguda, Leucemia Linfoblástica Aguda, Leucemia Aguda Secundaria/Relacionada a
// Tratamiento). Estructura idéntica al contrato del motor (misma forma que los temas recientes de
// Hematología). Sigue la convención de figuras en línea (figBlock(), numerada "Tabla N"/"Imagen N"
// con conteo continuo por tipo).
//
// Nota de alcance: este tema cubre las leucemias AGUDAS. Las leucemias crónicas (leucemia
// linfocítica crónica) tienen su propio tema pendiente en el bloque "Neoplasias hematológicas";
// la leucemia mieloide crónica ya está cubierta en el tema de Síndromes Mieloproliferativos.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás (compCites, estigmas, biopsia, escalaRefs, escalaCalc, compGroups, complicacionesIntro,
// categories, arbol, diagCites, clasificacionCite, seguimientoCite) debe ser un `export const`
// de nivel superior, HERMANO de `content`, no anidado dentro de él.

export const meta = {
  id: 'leucemia-aguda',
  titulo: 'Leucemia Aguda',
  subtitulo: 'Módulo 20 · Medicina Interna',
  accent: '#8c3a34',
  accentDim: '#c17a76'
};

// Reproduce el marcado de .modal-figure (mismo helper que los temas recientes de Hematología)
// para insertar figuras EN LÍNEA justo debajo del párrafo/entrada que las menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const tlsRiesgoHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:520px;margin:0 auto;">
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--ink);text-align:center;">Carga tumoral + función renal basal + LDH/ácido úrico basales</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;width:100%;">
    <div style="flex:1;min-width:140px;background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Riesgo bajo</strong><br>→ Hidratación + vigilancia</div>
    <div style="flex:1;min-width:140px;background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Riesgo intermedio</strong><br>→ Hidratación + alopurinol profiláctico</div>
    <div style="flex:1;min-width:140px;background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:var(--ink);text-align:center;"><strong>Riesgo alto</strong><br>→ Hidratación + rasburicasa</div>
  </div>
</div>`;

const bloqueoMaduracionHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:520px;margin:0 auto;">
  <div style="display:flex;gap:4px;align-items:center;width:100%;justify-content:center;">
    <div style="text-align:center;font-size:9.5px;color:var(--ink);font-weight:700;">
      <div style="width:40px;height:26px;background:#8c3a3466;border:1px solid #8c3a34;border-radius:6px;margin:0 auto 4px;"></div>
      Célula madre
    </div>
    <div style="color:var(--ink-dim);">→</div>
    <div style="text-align:center;font-size:9.5px;color:var(--ink);font-weight:700;">
      <div style="width:40px;height:26px;background:#8c3a3466;border:1px solid #8c3a34;border-radius:6px;margin:0 auto 4px;"></div>
      Blasto
    </div>
    <div style="color:#8c3a34;font-weight:700;">✕</div>
    <div style="text-align:center;font-size:9.5px;color:var(--ink-dim);">
      <div style="width:40px;height:26px;background:var(--panel2);border:1px dashed var(--line);border-radius:6px;margin:0 auto 4px;"></div>
      Célula madura
    </div>
  </div>
  <div style="width:100%;height:1px;background:var(--line);"></div>
  <div style="font-size:10.5px;color:var(--ink-dim);text-align:center;line-height:1.6;"><strong style="color:var(--ink);">Bloqueo de maduración:</strong> los blastos proliferan sin lograr diferenciarse a células maduras funcionales, acumulándose en la médula ósea y desplazando la hematopoyesis normal (anemia, neutropenia, trombocitopenia).</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La leucemia aguda es una neoplasia clonal de células progenitoras hematopoyéticas (mieloides o linfoides) caracterizada por un bloqueo de la maduración: los blastos proliferan de forma descontrolada sin diferenciarse a células maduras funcionales, acumulándose en la médula ósea y la sangre periférica y desplazando la hematopoyesis normal, lo que produce la tríada característica de anemia, neutropenia (con el riesgo infeccioso asociado) y trombocitopenia (con el riesgo hemorrágico asociado). Se distingue por linaje en leucemia mieloide aguda (LMA) y leucemia linfoblástica aguda (LLA), cada una con subtipos específicos según hallazgos citogenéticos y moleculares que determinan el pronóstico y guían el tratamiento.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La LMA es la leucemia aguda más frecuente en el adulto, con una incidencia que aumenta marcadamente con la edad; la LLA es la leucemia más frecuente en la infancia, pero también ocurre en el adulto (con peor pronóstico relativo que la forma pediátrica). La leucemia promielocítica aguda (LPA), un subtipo específico de LMA, representa una minoría de los casos de LMA pero es clínicamente crítica por su presentación con coagulopatía grave.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Leucemia Mieloide Aguda (LMA)</strong>: la más frecuente en el adulto; clasificada por la OMS/ICC según anomalías citogenéticas y moleculares recurrentes, que determinan el pronóstico.</li>
    <li><strong>Leucemia Promielocítica Aguda (LPA)</strong>: subtipo de LMA definido por la translocación t(15;17) (gen de fusión PML-RARA), con coagulopatía característica y manejo urgente distinto (ATRA).</li>
    <li><strong>Leucemia Linfoblástica Aguda (LLA)</strong>: la leucemia más frecuente en la infancia; también ocurre en el adulto, clasificada por linaje (B o T) y por anomalías citogenéticas/moleculares.</li>
    <li><strong>Leucemia Aguda Secundaria/Relacionada a Tratamiento</strong>: surge tras quimioterapia o radioterapia previas, o evoluciona de un síndrome mielodisplásico de base (ver ese tema); pronóstico considerablemente peor que la forma de novo.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Edad avanzada (particularmente para LMA)</li>
    <li>Síndrome mielodisplásico o neoplasia mieloproliferativa previa (ver esos temas)</li>
    <li>Quimioterapia o radioterapia previas (alquilantes, inhibidores de topoisomerasa II)</li>
    <li>Exposición ocupacional a benceno u otros tóxicos hematológicos</li>
    <li>Síndromes genéticos predisponentes (síndrome de Down, anemia de Fanconi, entre otros)</li>
    <li>Antecedente familiar de leucemia o de un síndrome de predisposición hereditaria</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> Una o más mutaciones somáticas adquiridas en una célula progenitora hematopoyética alteran simultáneamente 2 procesos: la proliferación (aumentada, con expansión clonal del blasto mutado) y la diferenciación (bloqueada, impidiendo que el blasto madure a una célula funcional).${figBlock('Imagen 1', 'Bloqueo de maduración', bloqueoMaduracionHtml)} Los blastos acumulados infiltran la médula ósea, desplazando físicamente a los precursores hematopoyéticos normales de las 3 líneas (eritroide, mieloide/granulocítica, megacariocítica), lo que produce la citopenia característica de cada línea; en las formas con recuento leucocitario muy elevado, los blastos circulantes en sangre periférica pueden además ocluir la microcirculación (leucostasis, ver Complicaciones) e infiltrar tejidos extramedulares. El patrón específico de mutaciones (citogenéticas y moleculares) determina tanto el subtipo específico de leucemia como su pronóstico y su respuesta esperada al tratamiento, de ahí la importancia central de la caracterización citogenética/molecular completa al diagnóstico.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde el hallazgo incidental de citopenias leves hasta la presentación aguda grave con fatiga marcada por anemia, fiebre/infección por neutropenia, sangrado por trombocitopenia (o coagulopatía específica en la LPA), y síntomas de leucostasis o de infiltración extramedular en los casos con hiperleucocitosis; el diagnóstico por biometría, frotis, y caracterización citogenética/molecular completa, la clasificación por subtipo y riesgo, y el manejo de cada complicación se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Döhner H, Wei AH, Appelbaum FR, et al. Diagnosis and management of AML in adults: 2022 ELN recommendations. Blood. 2022;140(12):1345-1377.',
  'Short NJ, Rytting ME, Cortes JE. Acute myeloid leukaemia. Lancet. 2018;392(10147):593-606.',
  'Sanz MA, Fenaux P, Tallman MS, et al. Management of acute promyelocytic leukemia: updated recommendations. Blood. 2019;133(15):1630-1643.',
  'Sanz MA, Lo Coco F, Martín G, et al. Definition of relapse risk and role of nonanthracycline drugs for consolidation in patients with acute promyelocytic leukemia. Blood. 2000;96(4):1247-1253.',
  'Terwilliger T, Abdul-Hay M. Acute lymphoblastic leukemia: a comprehensive review and 2017 update. Blood Cancer J. 2017;7(6):e577.',
  'Hunger SP, Mullighan CG. Acute Lymphoblastic Leukemia in Children. N Engl J Med. 2015;373(16):1541-1552.',
  'Arber DA, Orazi A, Hasserjian RP, et al. International Consensus Classification of Myeloid Neoplasms and Acute Leukemias. Blood. 2022;140(11):1200-1228.',
  'Leone G, Pagano L, Voso MT. Therapy-related leukemias: susceptibility, prevention and treatment. Leuk Lymphoma. 2001;41(3-4):255-276.',
  'Cairo MS, Bishop M. Tumour lysis syndrome: new therapeutic strategies and classification. Br J Haematol. 2004;127(1):3-11.',
  'Howard SC, Jones DP, Pui CH. The tumor lysis syndrome. N Engl J Med. 2011;364(19):1844-1854.',
  'Breccia M, Latagliata R, Cannella L, et al. Early hemorrhagic death before starting therapy in acute promyelocytic leukemia: association with high WBC count, late diagnosis and low complete remission rate. Leukemia. 2010;24(1):1-9.',
  'Röllig C, Ehninger G. How I treat hyperleukocytosis in acute myeloid leukemia. Blood. 2015;125(21):3246-3252.',
  'Ganzel C, Becker J, Mintz PD, et al. Hyperleukocytosis, leukostasis and leukapheresis: practice management. Blood Rev. 2012;26(3):117-122.',
  'Faderl S, Kantarjian HM, Talpaz M, Estrov Z. Clinical significance of cytogenetic abnormalities in adult acute lymphoblastic leukemia. Blood. 1998;91(11):3995-4019.',
  'Pui CH, Howard SC. Current management and challenges of malignant disease in the CNS in paediatric leukaemia. Lancet Oncol. 2008;9(3):257-268.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Hallazgo incidental/presentación subaguda',
      tituloB: 'Presentación aguda grave/emergencia',
      compensada: 'Citopenias leves detectadas incidentalmente en una biometría hemática de rutina, o síntomas inespecíficos subagudos (fatiga progresiva, palidez, infecciones leves recurrentes, equimosis fáciles) que llevan a solicitar el estudio hematológico.',
      descompensada: 'Fiebre/infección grave por neutropenia profunda, sangrado activo (mucocutáneo, o hemorragia mayor particularmente en la LPA por coagulopatía, ver Complicaciones), síntomas de leucostasis (disnea, alteración del estado mental) en la hiperleucocitosis, o síntomas de infiltración extramedular (cefalea/síntomas neurológicos por afectación del sistema nervioso central, masa palpable por cloroma, ver Complicaciones).'
    },
    laboratorio: [
      { prueba: 'Biometría hemática con diferencial', utilidad: 'Citopenias de una o más líneas (anemia, neutropenia, trombocitopenia); el recuento leucocitario total puede estar disminuido, normal, o marcadamente elevado según el subtipo y la carga tumoral.' },
      { prueba: 'Frotis de sangre periférica', utilidad: 'Presencia de blastos circulantes, con frecuencia el primer hallazgo que despierta la sospecha; bastones de Auer (patognomónicos de origen mieloide) orientan hacia LMA sobre LLA.' },
      { prueba: 'Aspirado/biopsia de médula ósea con inmunofenotipo por citometría de flujo', utilidad: 'Confirma el diagnóstico (≥20% de blastos, con excepciones definidas por anomalías citogenéticas específicas) y establece el linaje (mieloide vs. linfoide) y el inmunofenotipo específico.' },
      { prueba: 'Cariotipo y estudio molecular dirigido', utilidad: 'Identifica anomalías citogenéticas y moleculares recurrentes que determinan el subtipo específico, el pronóstico, y en ocasiones la terapia dirigida disponible (por ejemplo, PML-RARA en la LPA).' },
      { prueba: 'Perfil metabólico con ácido úrico, potasio, fósforo, calcio, LDH', utilidad: 'Cribado basal de síndrome de lisis tumoral (ver Complicaciones), particularmente relevante antes de iniciar quimioterapia en la enfermedad de alta carga tumoral.' }
    ],
    no_invasivos: [
      { metodo: 'Índice de riesgo de Sanz (con calculadora)', interpretacion: 'En la leucemia promielocítica aguda, estratifica el riesgo de recaída y de muerte temprana según leucocitos y plaquetas al diagnóstico.', cutoff: 'Categórico, ver Escalas' },
      { metodo: 'Perfil de coagulación (TP, TTP, fibrinógeno, dímero D)', interpretacion: 'Cribado de coagulopatía/CID, con particular relevancia e intensidad en la sospecha de leucemia promielocítica aguda (ver Complicaciones).', cutoff: 'N/A' },
      { metodo: 'Punción lumbar con citología del líquido cefalorraquídeo', interpretacion: 'Cribado de infiltración del sistema nervioso central, sistemático en la LLA y considerado en la LMA según el contexto clínico.', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'Radiografía o TC de tórax', hallazgos: 'Cribado de un foco infeccioso en el paciente neutropénico febril, o de una masa mediastínica en la LLA de linaje T.' },
      { modalidad: 'Resonancia magnética dirigida', hallazgos: 'Ante sospecha de infiltración extramedular focal (cloroma/sarcoma mieloide, afectación testicular u orbitaria, ver Complicaciones).' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema es por linaje (mieloide en LMA/LPA vs. linfoide en LLA) y por el riesgo citogenético/molecular específico dentro de cada linaje, que determinan tanto el pronóstico como la intensidad y el tipo de tratamiento; la presencia de complicaciones agudas al diagnóstico (coagulopatía, leucostasis, síndrome de lisis tumoral) exige manejo urgente independientemente del subtipo específico.',
    escalas: [
      { nombre: 'Índice de riesgo de Sanz (LPA)', componentes: 'Leucocitos y plaquetas al diagnóstico. Calculadora disponible más abajo.', formula: 'Bajo riesgo: leucocitos ≤10,000/µL y plaquetas &gt;40,000/µL. Riesgo intermedio: leucocitos ≤10,000/µL y plaquetas ≤40,000/µL. Alto riesgo: leucocitos &gt;10,000/µL.', interpretacion: 'Estratifica el riesgo de recaída y de muerte temprana (particularmente hemorrágica) en la leucemia promielocítica aguda, orientando la intensidad del tratamiento de inducción.' },
      { nombre: 'Clasificación de riesgo citogenético/molecular ELN (LMA)', componentes: 'Cariotipo y mutaciones moleculares recurrentes (FLT3-ITD, NPM1, CEBPA, entre otras).', formula: 'Categórico (favorable/intermedio/adverso).', interpretacion: 'El grupo de riesgo determina la elección entre quimioterapia de consolidación estándar y trasplante alogénico de células madre hematopoyéticas en primera remisión.' },
      { nombre: 'Clasificación de riesgo de síndrome de lisis tumoral', componentes: 'Recuento leucocitario, carga tumoral, función renal basal, ácido úrico/LDH basales.', formula: 'Categórico (bajo/intermedio/alto riesgo).', interpretacion: 'Orienta la intensidad de la profilaxis (hidratación, alopurinol vs. rasburicasa) antes de iniciar quimioterapia (ver la tarjeta de síndrome de lisis tumoral en Complicaciones).' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Leucemia Mieloide Aguda',
      color: '#8c3a34',
      definicion: 'La leucemia aguda más frecuente en el adulto, producida por la transformación clonal de un progenitor mieloide con bloqueo de la diferenciación; clasificada por la OMS/ICC según anomalías citogenéticas y moleculares recurrentes que determinan el grupo de riesgo pronóstico.',
      fisiopatologia: 'Mutaciones somáticas adquiridas (por ejemplo, en FLT3, NPM1, CEBPA, o reordenamientos como t(8;21) o inv(16), entre muchas otras) alteran la proliferación y diferenciación del progenitor mieloide, produciendo la acumulación de mieloblastos en la médula ósea; los bastones de Auer (agregados de gránulos primarios visibles al microscopio) son un hallazgo morfológico patognomónico de origen mieloide cuando están presentes, aunque su ausencia no descarta LMA. El grupo de riesgo citogenético/molecular (favorable, intermedio, adverso según la clasificación ELN) predice tanto la probabilidad de remisión completa con quimioterapia de inducción estándar como el riesgo de recaída, siendo el determinante central de si se recomienda trasplante alogénico de células madre hematopoyéticas en primera remisión.',
      epidemiologia: 'La leucemia aguda más frecuente en el adulto, con una incidencia que aumenta marcadamente con la edad; la mediana de edad al diagnóstico es considerablemente mayor que en la LLA.',
      factores_riesgo: ['Edad avanzada', 'Síndrome mielodisplásico o neoplasia mieloproliferativa previa', 'Quimioterapia o radioterapia previas', 'Exposición ocupacional a benceno', 'Síndromes genéticos predisponentes'],
      clinica: 'Fatiga y palidez por anemia, fiebre/infecciones recurrentes por neutropenia, equimosis/sangrado mucocutáneo por trombocitopenia; hipertrofia gingival e infiltración cutánea (leucemia cutis) más características de los subtipos monocíticos; síntomas de leucostasis en la enfermedad con hiperleucocitosis marcada (ver esa tarjeta en Complicaciones).',
      criterios_dx: '≥20% de blastos mieloides en médula ósea o sangre periférica (o cualquier porcentaje con ciertas anomalías citogenéticas definitorias específicas), con inmunofenotipo compatible por citometría de flujo y confirmación del linaje mieloide.',
      laboratorio: 'Biometría hemática con citopenias y con frecuencia blastos circulantes; aspirado de médula ósea con inmunofenotipo; cariotipo y panel molecular dirigido (FLT3, NPM1, CEBPA, entre otros) para la estratificación de riesgo ELN.',
      imagen: 'No indicada de rutina para el diagnóstico; dirigida según complicaciones específicas (ver esa sección).',
      complementarios: 'Perfil metabólico con ácido úrico y LDH para cribado de síndrome de lisis tumoral antes de iniciar tratamiento; tipificación HLA temprana si se anticipa la necesidad de trasplante alogénico según el grupo de riesgo.',
      dx_diferencial: 'Leucemia promielocítica aguda (subtipo específico con manejo urgente distinto, ver esa tarjeta), síndrome mielodisplásico con exceso de blastos (por debajo del umbral diagnóstico de leucemia aguda), reacción leucemoide (ver el tema de Alteraciones de la Serie Blanca).',
      tx_medico: 'Quimioterapia de inducción intensiva (esquema "7+3": citarabina más una antraciclina, el estándar histórico) para lograr la remisión completa, seguida de terapia de consolidación (quimioterapia adicional o trasplante alogénico) según el grupo de riesgo citogenético/molecular.',
      tx_farmacologico: 'Citarabina y antraciclina como pilar de la inducción estándar; terapias dirigidas añadidas según el perfil molecular específico (por ejemplo, inhibidores de FLT3 en la enfermedad con mutación de FLT3); esquemas de menor intensidad (agentes hipometilantes) considerados en el paciente de edad avanzada o con comorbilidades que no tolera la inducción intensiva.',
      tx_intervencionista: 'Trasplante alogénico de células madre hematopoyéticas en primera remisión completa para el grupo de riesgo intermedio/adverso con donante disponible, la medida con mayor potencial curativo en ese contexto.',
      criterios_uci: 'Neutropenia febril con sepsis grave, leucostasis grave con compromiso respiratorio o neurológico, hemorragia mayor.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante alogénico de células madre hematopoyéticas en primera remisión completa según el grupo de riesgo ELN, o en la recaída con quimiosensibilidad demostrada.',
      seguimiento_hospitalario: 'Vigilancia estrecha durante la fase de aplasia posquimioterapia (neutropenia profunda esperada), con manejo agresivo de cualquier fiebre (ver el tema de Alteraciones de la Serie Blanca, tarjeta de neutropenia febril) y transfusión de soporte según necesidad.',
      seguimiento_ambulatorio: 'Vigilancia de la respuesta molecular/citogenética durante el seguimiento; evaluación periódica para recaída; seguimiento a largo plazo de las complicaciones tardías del trasplante en el paciente trasplantado.',
      pronostico: 'Altamente variable según el grupo de riesgo citogenético/molecular y la edad del paciente al diagnóstico; el grupo de riesgo favorable tiene una probabilidad considerable de curación con quimioterapia sola, mientras que el grupo adverso tiene un pronóstico reservado incluso con trasplante.',
      algoritmo: ['Citopenias + blastos circulantes → biometría, frotis, aspirado de médula ósea con inmunofenotipo', 'Confirmado el linaje mieloide → cariotipo y panel molecular para estratificación de riesgo ELN', 'Cribado de síndrome de lisis tumoral antes de iniciar quimioterapia', 'Inducción intensiva (7+3) para lograr remisión completa', 'Consolidación según grupo de riesgo: quimioterapia adicional (favorable) vs. trasplante alogénico (intermedio/adverso)']
    },
    {
      nombre: 'Leucemia Promielocítica Aguda',
      color: '#7a1f3d',
      definicion: 'Subtipo específico de LMA definido por la translocación t(15;17), que produce el gen de fusión PML-RARA; se distingue del resto de las LMA por su presentación característica con coagulopatía grave (con frecuencia manifiesta ya al diagnóstico) y por responder de forma dramática a la diferenciación inducida farmacológicamente con ácido holo-transretinoico (ATRA), un mecanismo terapéutico único entre las leucemias agudas.',
      fisiopatologia: 'La proteína de fusión PML-RARA bloquea la diferenciación normal de los promielocitos al reclutar correpresores transcripcionales que silencian genes necesarios para la maduración granulocítica; el ATRA (un derivado de la vitamina A) se une al dominio del receptor de ácido retinoico de la proteína de fusión, revirtiendo este bloqueo y induciendo la diferenciación terminal de los promielocitos leucémicos hacia granulocitos maduros, un mecanismo de "terapia de diferenciación" único en oncología. Los promielocitos leucémicos contienen gránulos ricos en factor tisular y otras sustancias procoagulantes, y su lisis (espontánea o inducida por quimioterapia) libera estas sustancias a la circulación, produciendo una coagulopatía de consumo grave (coagulación intravascular diseminada) con riesgo hemorrágico mayor, particularmente intracraneal, que puede ser fatal en las primeras horas/días si no se reconoce y trata de inmediato.',
      epidemiologia: 'Representa una minoría de los casos de LMA pero es desproporcionadamente relevante clínicamente por el riesgo de muerte hemorrágica temprana si el diagnóstico y el ATRA se retrasan; la mediana de edad al diagnóstico es menor que la de la LMA en general.',
      factores_riesgo: ['Los mismos factores de riesgo generales de LMA', 'Ninguna asociación etiológica específica adicional bien establecida más allá de la translocación t(15;17) en sí'],
      clinica: 'Manifestaciones hemorrágicas mucocutáneas o mayores (incluida hemorragia intracraneal, la causa más temida de muerte temprana) con frecuencia ya presentes al diagnóstico, reflejando la coagulopatía característica; síntomas generales de leucemia aguda (fatiga, infecciones); el síndrome de diferenciación (ver Complicaciones de este tema, dentro de la tarjeta de coagulopatía/complicaciones específicas) puede desarrollarse tras iniciar el tratamiento con ATRA.',
      criterios_dx: 'Translocación t(15;17) (gen de fusión PML-RARA) confirmada por citogenética, FISH, o PCR; la sospecha morfológica (promielocitos anómalos con múltiples bastones de Auer, "faggot cells") en el frotis/aspirado debe motivar el inicio EMPÍRICO de ATRA sin esperar la confirmación molecular, dada la urgencia del riesgo hemorrágico.',
      laboratorio: 'Perfil de coagulación (TP, TTP, fibrinógeno bajo, dímero D elevado) mostrando coagulopatía de consumo; biometría hemática con blastos/promielocitos anómalos; confirmación molecular de PML-RARA.',
      imagen: 'TC/RM cerebral urgente si hay sospecha de hemorragia intracraneal dado el cuadro neurológico o la gravedad de la coagulopatía.',
      complementarios: 'Índice de riesgo de Sanz (calculadora) para estratificar el riesgo de recaída/muerte temprana según leucocitos y plaquetas al diagnóstico.',
      dx_diferencial: 'Otras LMA sin la translocación característica (ver esa tarjeta), otras causas de coagulación intravascular diseminada (sepsis grave, ver el tema de Sepsis).',
      tx_medico: 'Inicio EMPÍRICO e inmediato de ATRA ante la sospecha morfológica, sin esperar la confirmación molecular, dado el riesgo de muerte hemorrágica temprana con cualquier retraso; manejo agresivo y proactivo de la coagulopatía en paralelo (ver la tarjeta de coagulopatía/CID en Complicaciones).',
      tx_farmacologico: 'ATRA más trióxido de arsénico (esquema libre de quimioterapia convencional, el estándar actual en el riesgo bajo-intermedio, con tasas de curación muy elevadas) o ATRA más quimioterapia con antraciclina (particularmente en el riesgo alto según Sanz, ver la calculadora); transfusión agresiva de plaquetas y de crioprecipitado/plasma fresco congelado para mantener parámetros de coagulación seguros durante la inducción.',
      tx_intervencionista: 'No aplica de forma directa (el trasplante se reserva para la recaída, no para la primera línea, dado el excelente pronóstico con ATRA/trióxido de arsénico en la mayoría de los casos).',
      criterios_uci: 'Hemorragia mayor (particularmente intracraneal), síndrome de diferenciación grave con compromiso respiratorio (ver la tarjeta de coagulopatía/complicaciones específicas), inestabilidad hemodinámica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante autólogo o alogénico considerado únicamente en la recaída, no en la primera línea de tratamiento.',
      seguimiento_hospitalario: 'Vigilancia estrecha del perfil de coagulación y de signos de sangrado durante la inducción; vigilancia de signos de síndrome de diferenciación (fiebre, disnea, infiltrados pulmonares, edema) tras iniciar ATRA/trióxido de arsénico.',
      seguimiento_ambulatorio: 'Vigilancia molecular seriada de PML-RARA durante el seguimiento (marcador de enfermedad residual mínima altamente sensible en este subtipo); la mayoría de los pacientes alcanza curación sostenida con el tratamiento moderno.',
      pronostico: 'Excelente con el diagnóstico y tratamiento oportunos (de las leucemias agudas con mejor pronóstico global), pero con un riesgo desproporcionadamente alto de muerte temprana por hemorragia si el ATRA se retrasa; el reconocimiento clínico rápido es, por tanto, determinante del desenlace más que en cualquier otra leucemia aguda.',
      algoritmo: ['Sospecha morfológica de LPA (promielocitos anómalos, bastones de Auer múltiples) → iniciar ATRA de inmediato, SIN esperar confirmación molecular', 'Confirmar t(15;17)/PML-RARA por citogenética, FISH o PCR en paralelo', 'Manejo agresivo simultáneo de la coagulopatía (ver esa tarjeta)', 'Calcular índice de riesgo de Sanz (calculadora) para definir intensidad del tratamiento', 'ATRA + trióxido de arsénico (riesgo bajo-intermedio) o ATRA + antraciclina (riesgo alto)']
    },
    {
      nombre: 'Leucemia Linfoblástica Aguda',
      color: '#5c3d8c',
      definicion: 'La leucemia más frecuente en la infancia, producida por la transformación clonal de un progenitor linfoide (de linaje B, la mayoría, o T); también ocurre en el adulto, con un pronóstico relativo considerablemente peor que la forma pediátrica, en parte por diferencias biológicas y en parte por menor tolerancia a los protocolos intensivos pediátricos.',
      fisiopatologia: 'Mutaciones somáticas adquiridas y reordenamientos cromosómicos específicos (por ejemplo, el cromosoma Filadelfia, t(9;22)/BCR-ABL1, presente en una proporción de casos particularmente en el adulto, con implicaciones terapéuticas específicas dado que responde a inhibidores de tirosina cinasa) bloquean la diferenciación de un progenitor linfoide B o T, produciendo la acumulación de linfoblastos. A diferencia de la LMA, los linfoblastos con frecuencia infiltran tejidos extramedulares con mayor propensión (sistema nervioso central, testículo, ver Complicaciones), lo que justifica el cribado y la profilaxis sistemática dirigida a estos sitios como parte estándar del tratamiento, algo distintivo de este tipo de leucemia aguda.',
      epidemiologia: 'La leucemia más frecuente en la infancia (pico de incidencia entre los 2 y 5 años); en el adulto es considerablemente menos frecuente que la LMA, pero con un segundo pico de incidencia en la edad avanzada.',
      factores_riesgo: ['Edad pediátrica (particularmente 2-5 años) para el pico de incidencia principal', 'Síndromes genéticos predisponentes (síndrome de Down, entre otros)', 'Exposición prenatal o posnatal a radiación ionizante', 'Edad avanzada para el segundo pico de incidencia en el adulto'],
      clinica: 'Fatiga y palidez por anemia, fiebre/infecciones por neutropenia, sangrado por trombocitopenia; dolor óseo/articular (particularmente en el niño, por infiltración medular); linfadenopatía y hepatoesplenomegalia más prominentes que en la LMA; masa mediastínica anterior en la LLA de linaje T (con riesgo de síndrome de vena cava superior); síntomas de infiltración del sistema nervioso central (cefalea, síntomas de pares craneales) en un subgrupo.',
      criterios_dx: '≥20% de linfoblastos en médula ósea (o cualquier porcentaje con ciertas anomalías citogenéticas definitorias específicas), con inmunofenotipo por citometría de flujo confirmando el linaje B o T y el estadio de diferenciación.',
      laboratorio: 'Biometría hemática con citopenias y con frecuencia blastos circulantes; aspirado de médula ósea con inmunofenotipo; cariotipo y estudio molecular dirigido, incluyendo la búsqueda sistemática de BCR-ABL1 (cromosoma Filadelfia) dado que altera el tratamiento si está presente.',
      imagen: 'TC de tórax si hay sospecha de masa mediastínica (linaje T); RM cerebral si hay síntomas neurológicos focales que sugieran una masa en lugar de infiltración leptomeníngea difusa.',
      complementarios: 'Punción lumbar sistemática con citología del líquido cefalorraquídeo al diagnóstico (cribado de infiltración del sistema nervioso central), un componente estándar del estudio inicial de la LLA a diferencia de la LMA.',
      dx_diferencial: 'LMA (distinguible por inmunofenotipo y morfología), linfoma linfoblástico (la misma entidad biológica con predominio de masa tumoral sobre infiltración medular, según el grado de afectación medular al diagnóstico), mononucleosis infecciosa con linfocitosis atípica marcada (ver el tema de Alteraciones de la Serie Blanca).',
      tx_medico: 'Quimioterapia multiagente intensiva y prolongada (inducción, consolidación, y mantenimiento durante 2 años o más), con profilaxis del sistema nervioso central sistemática (quimioterapia intratecal, con o sin radioterapia craneal en casos seleccionados) como componente estándar del tratamiento.',
      tx_farmacologico: 'Esquemas multiagente (vincristina, corticoide, antraciclina, asparaginasa, entre otros según el protocolo); inhibidores de tirosina cinasa añadidos si se confirma BCR-ABL1 positivo; inmunoterapia (anticuerpos biespecíficos, terapia de células CAR-T) considerada en la enfermedad refractaria o en recaída, un área de rápido desarrollo terapéutico.',
      tx_intervencionista: 'Trasplante alogénico de células madre hematopoyéticas considerado en el paciente de alto riesgo o en la recaída, particularmente en el adulto donde el pronóstico con quimioterapia sola es menos favorable que en el niño.',
      criterios_uci: 'Síndrome de vena cava superior por masa mediastínica con compromiso respiratorio, neutropenia febril con sepsis grave, síndrome de lisis tumoral grave (particularmente relevante en esta enfermedad dada su alta sensibilidad inicial a la quimioterapia, ver esa tarjeta).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante alogénico de células madre hematopoyéticas en el paciente de alto riesgo (incluida la enfermedad BCR-ABL1 positiva con respuesta subóptima) o en recaída.',
      seguimiento_hospitalario: 'Vigilancia estrecha durante la inducción por el alto riesgo de síndrome de lisis tumoral dada la alta quimiosensibilidad inicial; manejo de la neutropenia febril según protocolo estándar.',
      seguimiento_ambulatorio: 'Fase de mantenimiento prolongada (2 años o más) con vigilancia periódica de la enfermedad residual mínima por citometría de flujo o técnicas moleculares, el marcador pronóstico más importante de la respuesta al tratamiento.',
      pronostico: 'Excelente en el niño con los protocolos modernos (tasas de curación superiores al 85-90% en muchos grupos de riesgo); considerablemente menos favorable en el adulto, aunque ha mejorado con la adopción de protocolos de intensidad pediátrica y las nuevas inmunoterapias.',
      algoritmo: ['Citopenias + blastos circulantes en un niño o adulto joven → sospechar LLA, aspirado de médula ósea con inmunofenotipo', 'Confirmado el linaje linfoide → cariotipo/molecular, incluyendo búsqueda sistemática de BCR-ABL1', 'Punción lumbar sistemática para cribado de infiltración del sistema nervioso central', 'Quimioterapia multiagente intensiva con profilaxis del sistema nervioso central desde el inicio', 'BCR-ABL1 positivo → añadir inhibidor de tirosina cinasa al esquema']
    },
    {
      nombre: 'Leucemia Aguda Secundaria/Relacionada a Tratamiento',
      color: '#6b4a2e',
      definicion: 'Leucemia aguda (predominantemente mieloide) que surge tras exposición previa a quimioterapia o radioterapia por otra neoplasia, o que evoluciona a partir de un síndrome mielodisplásico o una neoplasia mieloproliferativa de base preexistente; se distingue de la leucemia aguda de novo por un perfil citogenético/molecular de peor pronóstico y una respuesta considerablemente menor a la quimioterapia estándar.',
      fisiopatologia: 'Dos mecanismos principales producen esta categoría: la exposición previa a agentes alquilantes produce típicamente una leucemia de latencia larga (5-7 años) con anomalías citogenéticas complejas o pérdida de material de los cromosomas 5/7; la exposición a inhibidores de topoisomerasa II produce típicamente una leucemia de latencia corta (1-3 años) con reordenamientos específicos del gen KMT2A (antes conocido como MLL); alternativamente, un síndrome mielodisplásico o una neoplasia mieloproliferativa de base pueden evolucionar clonalmente hacia una leucemia aguda franca (transformación blástica) por la adquisición progresiva de mutaciones adicionales sobre el clon ya alterado de base.',
      epidemiologia: 'Representa una proporción minoritaria pero clínicamente relevante del total de LMA; el riesgo aumenta con la intensidad y el tipo de tratamiento oncológico previo recibido, y es una consideración de vigilancia a largo plazo en el sobreviviente de cáncer tratado con quimioterapia/radioterapia.',
      factores_riesgo: ['Quimioterapia previa con agentes alquilantes o inhibidores de topoisomerasa II', 'Radioterapia previa', 'Síndrome mielodisplásico o neoplasia mieloproliferativa de base preexistente (ver esos temas)', 'Predisposición genética germinal subyacente en un subgrupo de casos'],
      clinica: 'Similar a la LMA de novo (citopenias, fatiga, infecciones, sangrado), pero en el contexto específico de un antecedente oncológico previo tratado, o de un diagnóstico preexistente de síndrome mielodisplásico/neoplasia mieloproliferativa que empeora clínicamente (aumento de blastos, citopenias más profundas, nuevos síntomas constitucionales).',
      criterios_dx: '≥20% de blastos mieloides en médula ósea o sangre periférica, en el contexto de un antecedente de quimioterapia/radioterapia previa o de un síndrome mielodisplásico/neoplasia mieloproliferativa de base documentados, con el perfil citogenético/molecular característico (anomalías complejas, del cromosoma 5/7, o reordenamiento de KMT2A según el mecanismo).',
      laboratorio: 'Biometría hemática con citopenias, con frecuencia más profundas que en la LMA de novo; aspirado de médula ósea con inmunofenotipo; cariotipo (frecuentemente complejo o de alto riesgo) y estudio molecular dirigido.',
      imagen: 'No indicada de rutina para el diagnóstico; según complicaciones específicas.',
      complementarios: 'Revisión sistemática y detallada del antecedente oncológico previo (tipo de neoplasia, esquema de quimioterapia/radioterapia recibido, tiempo de latencia) para orientar el mecanismo probable y el pronóstico esperado.',
      dx_diferencial: 'LMA de novo (mejor pronóstico relativo, sin el antecedente característico), progresión/recaída de la neoplasia original tratada previamente (debe distinguirse mediante el estudio histopatológico e inmunofenotípico específico de la nueva neoplasia).',
      tx_medico: 'Quimioterapia de inducción según tolerancia del paciente (con frecuencia menor que en la LMA de novo por comorbilidades acumuladas del tratamiento oncológico previo); evaluación temprana para trasplante alogénico dado el peor pronóstico con quimioterapia sola.',
      tx_farmacologico: 'Esquemas de inducción estándar si el paciente tolera la intensidad completa; esquemas de menor intensidad (agentes hipometilantes) en el paciente con comorbilidades significativas que no tolera la inducción intensiva.',
      tx_intervencionista: 'Trasplante alogénico de células madre hematopoyéticas considerado tempranamente dado el perfil de peor pronóstico, en el paciente candidato con un donante disponible.',
      criterios_uci: 'Igual que la LMA de novo, según la gravedad de las complicaciones agudas presentes.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante alogénico de células madre hematopoyéticas considerado tempranamente en la mayoría de los pacientes candidatos, dado el pronóstico generalmente peor que la LMA de novo con quimioterapia sola.',
      seguimiento_hospitalario: 'Igual que la LMA de novo, con particular atención a las comorbilidades acumuladas del tratamiento oncológico previo que pueden limitar la tolerancia al tratamiento intensivo.',
      seguimiento_ambulatorio: 'Seguimiento hematológico y oncológico coordinado, dado el antecedente de la neoplasia original tratada previamente; vigilancia a largo plazo tras el trasplante si se realiza.',
      pronostico: 'Considerablemente peor que la LMA de novo, tanto por el perfil citogenético/molecular de mayor riesgo como por la menor tolerancia del paciente a la quimioterapia intensiva dado el tratamiento oncológico previo ya recibido.',
      algoritmo: ['Citopenias/blastos en un paciente con antecedente de quimioterapia/radioterapia previa o SMD/NMP de base → sospechar leucemia aguda secundaria', 'Aspirado de médula ósea con inmunofenotipo, cariotipo y estudio molecular dirigido', 'Revisar sistemáticamente el antecedente oncológico previo (tipo, esquema, latencia)', 'Evaluar tolerancia del paciente a la inducción intensiva vs. esquemas de menor intensidad', 'Evaluación temprana para trasplante alogénico dado el peor pronóstico relativo']
    },
    {
      nombre: 'Síndrome de lisis tumoral',
      color: '#8a6a1f',
      definicion: 'Urgencia oncológica producida por la liberación masiva y rápida del contenido intracelular de células tumorales que mueren (espontáneamente o, con mayor frecuencia, tras iniciar quimioterapia), superando la capacidad excretora renal y produciendo un trastorno metabólico agudo grave: hiperpotasemia, hiperfosfatemia, hipocalcemia secundaria, e hiperuricemia, con riesgo de arritmia cardiaca fatal y de lesión renal aguda.',
      fisiopatologia: 'Las células leucémicas, particularmente en la enfermedad de alta carga tumoral (hiperleucocitosis marcada) y alta quimiosensibilidad (característica de la LLA y de algunos subtipos de LMA), liberan grandes cantidades de potasio, fósforo, y ácidos nucleicos (metabolizados a ácido úrico) al morir rápidamente; el fósforo liberado se une al calcio circulante, produciendo hipocalcemia secundaria sintomática; el ácido úrico y el fosfato de calcio pueden precipitar en los túbulos renales, produciendo lesión renal aguda que a su vez empeora la capacidad de excretar el exceso de potasio y fósforo, generando un círculo vicioso metabólico.',
      epidemiologia: 'El riesgo es particularmente elevado en la leucemia de alta carga tumoral (hiperleucocitosis) y alta quimiosensibilidad, siendo la LLA (y, en menor medida, la LMA con hiperleucocitosis) las de mayor riesgo entre las leucemias agudas; ocurre característicamente en las primeras 24-72 horas tras iniciar la quimioterapia, aunque puede ocurrir espontáneamente antes de cualquier tratamiento en la enfermedad de muy alta carga tumoral.',
      factores_riesgo: ['Hiperleucocitosis/alta carga tumoral al diagnóstico', 'Alta quimiosensibilidad esperada del subtipo específico (particularmente LLA)', 'LDH marcadamente elevada al diagnóstico (marcador indirecto de la carga tumoral)', 'Función renal basal ya comprometida', 'Deshidratación al momento de iniciar la quimioterapia'],
      clinica: 'Náusea, vómito, y letargo por las alteraciones metabólicas; calambres musculares y tetania por la hipocalcemia; arritmia cardiaca (la manifestación más temida, por la hiperpotasemia) que puede ser súbita y fatal; oliguria/anuria si progresa a lesión renal aguda.',
      criterios_dx: 'Criterios de Cairo-Bishop: síndrome de lisis tumoral de laboratorio (2 o más alteraciones metabólicas: hiperuricemia, hiperpotasemia, hiperfosfatemia, hipocalcemia dentro de un rango temporal definido) con o sin síndrome de lisis tumoral clínico (el de laboratorio más lesión renal aguda, arritmia cardiaca, o convulsión).',
      laboratorio: 'Potasio, fósforo, calcio, ácido úrico, creatinina, y LDH seriados, particularmente en las primeras 24-72 horas tras iniciar quimioterapia en la enfermedad de alto riesgo (calculadora de riesgo, ver Escalas).',
      imagen: 'No indicada de rutina para el diagnóstico; ecografía renal si hay sospecha de obstrucción como contribuyente adicional a la lesión renal aguda.',
      complementarios: 'Electrocardiograma de vigilancia en el paciente de alto riesgo o con hiperpotasemia documentada, dado el riesgo de arritmia fatal.',
      dx_diferencial: 'Lesión renal aguda de otra causa (deshidratación, nefrotoxicidad farmacológica) en el paciente oncológico, que puede coexistir y contribuir al cuadro.',
      tx_medico: `Profilaxis proactiva en todo paciente de riesgo intermedio-alto ANTES de iniciar la quimioterapia: hidratación intravenosa agresiva y agentes hipouricemiantes; una vez establecido el síndrome, manejo urgente de las alteraciones electrolíticas específicas y vigilancia de la función renal.${figBlock('Imagen 2', 'Estratificación de riesgo de síndrome de lisis tumoral', tlsRiesgoHtml)}`,
      tx_farmacologico: 'Alopurinol como profilaxis estándar en el riesgo intermedio; rasburicasa (urato oxidasa recombinante) en el riesgo alto o en el síndrome ya establecido con hiperuricemia significativa, considerablemente más eficaz y rápida que el alopurinol para reducir el ácido úrico ya formado; manejo estándar de la hiperpotasemia aguda (insulina/glucosa, gluconato de calcio si hay cambios electrocardiográficos) si se desarrolla.',
      tx_intervencionista: 'Terapia de reemplazo renal urgente (hemodiálisis) en la lesión renal aguda grave con hiperpotasemia refractaria al manejo médico, sobrecarga de volumen, o acidosis grave.',
      criterios_uci: 'Arritmia cardiaca por hiperpotasemia grave, lesión renal aguda que requiere terapia de reemplazo renal urgente, convulsiones por las alteraciones metabólicas.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a este episodio en sí.',
      seguimiento_hospitalario: 'Vigilancia electrolítica y de la función renal seriada estrecha durante las primeras 72 horas de la quimioterapia de inducción en el paciente de riesgo intermedio-alto, con electrocardiograma de vigilancia si hay hiperpotasemia.',
      seguimiento_ambulatorio: 'No suele requerir seguimiento ambulatorio específico una vez resuelto el episodio agudo, salvo por cualquier secuela renal residual.',
      pronostico: 'Excelente con la profilaxis proactiva adecuada en el paciente identificado como de riesgo antes de iniciar la quimioterapia; potencialmente fatal (por arritmia) si no se reconoce y trata oportunamente en la enfermedad de alto riesgo.',
      algoritmo: ['Clasificar riesgo de síndrome de lisis tumoral ANTES de iniciar quimioterapia (carga tumoral, función renal basal, LDH)', 'Riesgo intermedio → hidratación agresiva + alopurinol profiláctico', 'Riesgo alto → hidratación agresiva + rasburicasa', 'Vigilancia electrolítica y de función renal seriada en las primeras 72 horas', 'Alteraciones establecidas → manejo urgente específico, considerar terapia de reemplazo renal si es grave']
    },
    {
      nombre: 'Coagulopatía y CID',
      color: '#7a1f3d',
      definicion: 'Trastorno agudo de la coagulación, particularmente característico y grave en la leucemia promielocítica aguda (donde puede estar presente ya al diagnóstico), pero que puede ocurrir en cualquier leucemia aguda en el contexto de sepsis grave concomitante; representa la principal causa de muerte temprana en la LPA si no se reconoce y maneja de inmediato.',
      fisiopatologia: 'En la leucemia promielocítica aguda, los gránulos de los promielocitos leucémicos contienen factor tisular y otras sustancias procoagulantes en concentración elevada; su liberación (espontánea, y particularmente al iniciar quimioterapia citotóxica que lisa masivamente las células) activa la cascada de coagulación de forma generalizada, consumiendo factores de coagulación y plaquetas (coagulación intravascular diseminada), con el consiguiente riesgo hemorrágico grave pese al estado procoagulante subyacente; adicionalmente, un componente de hiperfibrinólisis (activación excesiva del sistema fibrinolítico) contribuye a la fragilidad del coágulo formado, agravando el riesgo de sangrado. El síndrome de diferenciación (una complicación distinta pero relacionada, que ocurre tras iniciar ATRA/trióxido de arsénico en la LPA) produce fiebre, disnea, infiltrados pulmonares, derrames, y edema por un mecanismo de liberación de citocinas asociado a la diferenciación masiva y sincrónica de los promielocitos.',
      epidemiologia: 'Prácticamente universal en algún grado en la leucemia promielocítica aguda al momento del diagnóstico; la hemorragia intracraneal secundaria a esta coagulopatía es la causa más frecuente de muerte en los primeros días tras el diagnóstico de LPA, antes de que el ATRA tenga tiempo de revertir el proceso subyacente.',
      factores_riesgo: ['Diagnóstico de leucemia promielocítica aguda (el factor de riesgo dominante)', 'Recuento leucocitario elevado al diagnóstico (mayor riesgo según el índice de Sanz, ver la calculadora)', 'Retraso en el inicio de ATRA tras la sospecha diagnóstica', 'Sepsis grave concomitante en cualquier leucemia aguda (coagulopatía de consumo por un mecanismo distinto)'],
      clinica: 'Sangrado mucocutáneo (petequias, equimosis, gingivorragia, epistaxis) hasta hemorragia mayor (particularmente intracraneal, la manifestación más temida); tras iniciar ATRA/trióxido de arsénico, vigilar la aparición de síndrome de diferenciación: fiebre, disnea progresiva, infiltrados pulmonares nuevos, derrame pleural/pericárdico, edema periférico, e hipotensión.',
      criterios_dx: 'Coagulopatía: TP y TTP prolongados, fibrinógeno bajo, dímero D marcadamente elevado, trombocitopenia, en el contexto clínico apropiado (particularmente LPA sospechada o confirmada). Síndrome de diferenciación: diagnóstico clínico basado en la combinación de síntomas típicos tras iniciar la terapia de diferenciación, sin un marcador de laboratorio específico.',
      laboratorio: 'Perfil de coagulación completo (TP, TTP, fibrinógeno, dímero D) seriado durante la inducción; biometría hemática con plaquetas seriadas.',
      imagen: 'TC/RM cerebral urgente ante cualquier síntoma neurológico nuevo, dado el riesgo de hemorragia intracraneal; radiografía o TC de tórax si hay sospecha de síndrome de diferenciación (infiltrados, derrame).',
      complementarios: 'Vigilancia clínica y de laboratorio diaria (o más frecuente) durante toda la fase de inducción en la LPA, dado que la coagulopatía puede evolucionar rápidamente.',
      dx_diferencial: 'Coagulación intravascular diseminada por sepsis grave (mecanismo distinto pero manejo de soporte similar, ver el tema de Sepsis), trombocitopenia aislada por quimioterapia sin coagulopatía de consumo verdadera.',
      tx_medico: 'Transfusión agresiva y proactiva de soporte hemostático durante toda la inducción en la LPA (no solo reactiva ante sangrado activo), manteniendo objetivos específicos de plaquetas y fibrinógeno; inicio inmediato de ATRA (ver la tarjeta de leucemia promielocítica aguda), que revierte el mecanismo subyacente de la coagulopatía al inducir la diferenciación de los promielocitos.',
      tx_farmacologico: 'Transfusión de plaquetas para mantener un recuento objetivo más alto de lo habitual durante la inducción de la LPA; crioprecipitado o plasma fresco congelado para mantener el fibrinógeno por encima de un umbral seguro; corticoides sistémicos (dexametasona) ante la sospecha de síndrome de diferenciación, iniciados de inmediato sin esperar confirmación adicional dado el riesgo de progresión rápida.',
      tx_intervencionista: 'No aplica de forma directa más allá del soporte transfusional intensivo; soporte ventilatorio si el síndrome de diferenciación progresa a insuficiencia respiratoria.',
      criterios_uci: 'Hemorragia mayor (particularmente intracraneal), síndrome de diferenciación grave con compromiso respiratorio o hemodinámico, coagulopatía refractaria al soporte transfusional intensivo.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a esta complicación en sí.',
      seguimiento_hospitalario: 'Vigilancia diaria (o más frecuente) del perfil de coagulación y de plaquetas durante toda la inducción en la LPA; vigilancia clínica activa de signos de síndrome de diferenciación tras iniciar ATRA/trióxido de arsénico.',
      seguimiento_ambulatorio: 'No suele requerir seguimiento ambulatorio específico una vez resuelta la coagulopatía tras lograr la remisión.',
      pronostico: 'Determinante central del pronóstico temprano en la LPA: el reconocimiento y manejo oportunos (ATRA inmediato más soporte transfusional agresivo) han reducido dramáticamente la mortalidad por esta causa, que sigue siendo, sin embargo, la principal causa de muerte temprana cuando el diagnóstico o el tratamiento se retrasan.',
      algoritmo: ['LPA sospechada o confirmada → asumir coagulopatía presente hasta demostrar lo contrario', 'Perfil de coagulación seriado + soporte transfusional PROACTIVO (plaquetas, fibrinógeno) durante toda la inducción', 'ATRA inmediato, el tratamiento que revierte el mecanismo subyacente', 'Vigilar activamente signos de síndrome de diferenciación tras iniciar ATRA/trióxido de arsénico', 'Síndrome de diferenciación sospechado → corticoide (dexametasona) de inmediato, sin esperar confirmación adicional']
    },
    {
      nombre: 'Leucostasis e hiperleucocitosis',
      color: '#3d5a73',
      definicion: 'Urgencia oncológica producida por un recuento leucocitario extremadamente elevado (con frecuencia &gt;100,000/µL, aunque el umbral clínico varía según el subtipo) en el que los blastos circulantes, mecánicamente rígidos y numerosos, ocluyen la microcirculación de órganos vitales (particularmente pulmón y sistema nervioso central), produciendo isquemia tisular local independientemente del grado de anemia.',
      fisiopatologia: 'Los blastos leucémicos son mecánicamente menos deformables que los leucocitos maduros normales y, en cantidad extrema, aumentan la viscosidad sanguínea y ocluyen físicamente los capilares pulmonares y cerebrales; adicionalmente, los blastos pueden interactuar con el endotelio vascular local y liberar citocinas que dañan directamente la pared vascular, contribuyendo a la isquemia y a la hemorragia local (un fenómeno distinto pero superpuesto a la coagulopatía sistémica de la tarjeta anterior). El riesgo de leucostasis clínicamente significativa depende tanto del recuento absoluto de blastos como del subtipo específico (los blastos monocíticos, más grandes y menos deformables, confieren mayor riesgo a un recuento equivalente que los blastos linfoblásticos, más pequeños).',
      epidemiologia: 'El riesgo aumenta marcadamente con el recuento leucocitario, siendo clínicamente relevante característicamente por encima de 100,000/µL en la LMA (umbral menor en los subtipos monocíticos) y por encima de umbrales considerablemente más altos en la LLA, dado que los linfoblastos son mecánicamente menos obstructivos que los mieloblastos a un recuento equivalente.',
      factores_riesgo: ['Recuento leucocitario extremadamente elevado al diagnóstico', 'Subtipo monocítico de LMA (mayor riesgo a un recuento equivalente)', 'Anemia concomitante (aumenta la viscosidad relativa)', 'Deshidratación'],
      clinica: 'Síntomas respiratorios (disnea, hipoxemia, infiltrados pulmonares) por leucostasis pulmonar; síntomas neurológicos (cefalea, alteración del estado de conciencia, síntomas focales, hasta hemorragia intracraneal) por leucostasis del sistema nervioso central; puede coexistir con síndrome de lisis tumoral dado que ambas complicaciones comparten el mismo factor de riesgo de alta carga tumoral.',
      criterios_dx: 'Clínico, en un paciente con hiperleucocitosis marcada y síntomas respiratorios o neurológicos compatibles, sin otra causa que los explique mejor; no existe un umbral de leucocitos único y absoluto que defina la leucostasis, dado que depende también del subtipo específico.',
      laboratorio: 'Biometría hemática con el recuento leucocitario extremo; gasometría arterial si hay síntomas respiratorios (con la advertencia de que un recuento leucocitario extremo puede producir una falsa hipoxemia in vitro por consumo de oxígeno de los leucocitos en la muestra, un artefacto de laboratorio a tener en cuenta).',
      imagen: 'Radiografía o TC de tórax si hay síntomas respiratorios (infiltrados difusos); TC/RM cerebral urgente si hay síntomas neurológicos, para descartar hemorragia asociada.',
      complementarios: 'Cribado simultáneo de síndrome de lisis tumoral (ver esa tarjeta), dado que comparte el mismo factor de riesgo de alta carga tumoral y con frecuencia coexiste.',
      dx_diferencial: 'Infección pulmonar concomitante (puede coexistir con leucostasis y ser difícil de distinguir clínicamente sin estudio dirigido), evento cerebrovascular de otra causa, edema pulmonar por sobrecarga de volumen.',
      tx_medico: 'Inicio urgente de citorreducción para reducir rápidamente el recuento leucocitario, en paralelo con el inicio de la quimioterapia definitiva; evitar la transfusión de concentrados eritrocitarios no urgente en el paciente con leucostasis activa (dado que aumenta la viscosidad sanguínea y puede empeorar agudamente el cuadro) salvo que exista una indicación vital que la haga inevitable.',
      tx_farmacologico: 'Hidroxiurea como citorreductor de acción relativamente rápida mientras se organiza la quimioterapia definitiva; quimioterapia de inducción definitiva iniciada sin demora una vez estabilizado el cuadro agudo, con profilaxis simultánea de síndrome de lisis tumoral dado el riesgo compartido.',
      tx_intervencionista: 'Leucaféresis (aféresis terapéutica para reducir mecánicamente el recuento leucocitario) considerada en la leucostasis grave sintomática como medida puente urgente mientras la citorreducción farmacológica y la quimioterapia definitiva hacen efecto, particularmente en la LMA (de utilidad más limitada y con indicación menos clara en la LPA, donde puede agravar la coagulopatía).',
      criterios_uci: 'Leucostasis con compromiso respiratorio o neurológico significativo, hemorragia intracraneal asociada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a este episodio en sí.',
      seguimiento_hospitalario: 'Vigilancia estrecha del recuento leucocitario seriado y de la respuesta clínica a la citorreducción; vigilancia respiratoria y neurológica activa hasta la resolución del cuadro agudo.',
      seguimiento_ambulatorio: 'No suele requerir seguimiento ambulatorio específico una vez resuelto el episodio agudo y lograda la reducción del recuento leucocitario con la quimioterapia definitiva.',
      pronostico: 'Potencialmente fatal si no se reconoce y trata con prontitud (particularmente por hemorragia intracraneal asociada); favorable con la citorreducción urgente y el inicio oportuno de la quimioterapia definitiva.',
      algoritmo: ['Hiperleucocitosis marcada + síntomas respiratorios o neurológicos → sospechar leucostasis, urgencia', 'Citorreducción urgente (hidroxiurea) en paralelo con preparación de la quimioterapia definitiva', 'Evitar transfusión eritrocitaria no urgente mientras la leucostasis esté activa', 'Considerar leucaféresis en la leucostasis grave sintomática (particularmente en LMA, no en LPA)', 'Cribado simultáneo y profilaxis de síndrome de lisis tumoral dado el riesgo compartido']
    },
    {
      nombre: 'Infiltración extramedular',
      color: '#6b4a2e',
      definicion: 'Presencia de células leucémicas en sitios fuera de la médula ósea y la sangre periférica: el sistema nervioso central (particularmente sistemático de cribar en la LLA), el testículo (un santuario farmacológico reconocido, particularmente en la LLA pediátrica), y el cloroma o sarcoma mieloide (una masa tumoral sólida de blastos mieloides, particularmente en la LMA), cada uno con implicaciones diagnósticas y terapéuticas específicas.',
      fisiopatologia: 'Ciertos sitios anatómicos (sistema nervioso central, testículo) actúan como "santuarios farmacológicos" donde la penetración de la quimioterapia sistémica convencional es limitada (por la barrera hematoencefálica en el caso del sistema nervioso central, y por una barrera hematotesticular análoga), permitiendo que las células leucémicas persistan y proliferen localmente pese a una respuesta sistémica adecuada en la médula ósea y la sangre; esto justifica la necesidad de tratamiento dirigido específico a estos sitios (quimioterapia intratecal para el sistema nervioso central) independientemente de la respuesta sistémica. El cloroma (sarcoma mieloide) representa una masa tumoral sólida de blastos mieloides que puede preceder, coincidir con, o representar la primera manifestación de una recaída de LMA, con localizaciones variables (piel, tejidos blandos, hueso, órbita, entre otras).',
      epidemiologia: 'La infiltración del sistema nervioso central es más frecuente y clínicamente más relevante en la LLA que en la LMA, de ahí el cribado sistemático con punción lumbar al diagnóstico en toda LLA; la afectación testicular es una consideración particularmente relevante en la LLA pediátrica masculina; el cloroma es una manifestación poco frecuente pero reconocida, más característica de ciertos subtipos de LMA.',
      factores_riesgo: ['LLA (mayor riesgo de infiltración del sistema nervioso central y testicular que la LMA)', 'Ciertos subtipos moleculares de LMA con mayor propensión al cloroma', 'Hiperleucocitosis al diagnóstico (factor de riesgo compartido con la infiltración del sistema nervioso central)', 'Sexo masculino (para la afectación testicular específicamente)'],
      clinica: 'Sistema nervioso central: cefalea, náusea/vómito, síntomas de pares craneales, o puede ser asintomática y detectarse solo por citología del líquido cefalorraquídeo de cribado. Testículo: aumento de volumen testicular indoloro o poco doloroso, con frecuencia unilateral. Cloroma: masa palpable de crecimiento variable, con localización dependiente del sitio afectado (piel con frecuencia violácea, tejidos blandos, hueso, órbita con proptosis si es ese el sitio).',
      criterios_dx: 'Sistema nervioso central: blastos identificados en la citología del líquido cefalorraquídeo obtenido por punción lumbar. Testículo: hallazgo clínico de aumento de volumen, confirmado por biopsia si hay duda diagnóstica. Cloroma: biopsia de la masa con inmunohistoquímica confirmando el origen mieloide de las células infiltrantes.',
      laboratorio: 'Citología del líquido cefalorraquídeo (celularidad, presencia de blastos) para la afectación del sistema nervioso central; el resto del estudio de laboratorio sigue el de la leucemia aguda de base.',
      imagen: 'RM cerebral/espinal si hay síntomas neurológicos focales que sugieran una masa en lugar de infiltración leptomeníngea difusa; ecografía testicular si hay sospecha clínica de afectación testicular; RM o TC dirigida a la localización sospechada de cloroma.',
      complementarios: 'Biopsia de la masa sospechosa de cloroma con estudio inmunohistoquímico, dado que puede confundirse morfológicamente con otras neoplasias si no se considera el diagnóstico.',
      dx_diferencial: 'Otras causas de síntomas neurológicos, masa testicular, o masa de tejidos blandos en el paciente con leucemia aguda conocida, que deben considerarse si la presentación es atípica.',
      tx_medico: 'Quimioterapia intratecal (metotrexato, citarabina, o ambos) para la infiltración del sistema nervioso central, como profilaxis sistemática en la LLA o como tratamiento dirigido si ya hay infiltración documentada; irradiación testicular dirigida si hay afectación testicular confirmada, además de la quimioterapia sistémica.',
      tx_farmacologico: 'Quimioterapia intratecal según el esquema específico del protocolo; la quimioterapia sistémica de la leucemia de base sigue siendo necesaria en paralelo, dado que la infiltración extramedular refleja la misma enfermedad subyacente.',
      tx_intervencionista: 'Radioterapia craneal en casos seleccionados de infiltración del sistema nervioso central de alto riesgo o refractaria a la quimioterapia intratecal; irradiación testicular dirigida en la afectación testicular confirmada; resección quirúrgica del cloroma considerada en casos seleccionados según la localización y el contexto clínico, aunque la quimioterapia sistémica sigue siendo la base del tratamiento.',
      criterios_uci: 'No aplica de forma directa a esta complicación en sí, salvo por compromiso neurológico grave asociado a una masa del sistema nervioso central.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La infiltración extramedular activa al momento de considerar un trasplante alogénico debe tratarse y controlarse antes de proceder, dado que representa enfermedad activa.',
      seguimiento_hospitalario: 'Vigilancia neurológica si hay afectación del sistema nervioso central; seguimiento de la respuesta de la masa (cloroma) a la quimioterapia sistémica.',
      seguimiento_ambulatorio: 'Punciones lumbares seriadas con quimioterapia intratecal según el calendario del protocolo en la LLA; vigilancia testicular clínica seriada en el paciente con antecedente de afectación testicular.',
      pronostico: 'La infiltración del sistema nervioso central o testicular no reconocida y tratada adecuadamente es una causa reconocida de recaída pese a la remisión medular/sistémica aparente, de ahí la importancia del cribado y la profilaxis sistemáticos; el cloroma, cuando ocurre como manifestación de recaída, tiene implicaciones pronósticas similares a la recaída medular.',
      algoritmo: ['LLA diagnosticada → punción lumbar sistemática de cribado + profilaxis intratecal desde el inicio del tratamiento', 'Síntomas neurológicos en cualquier leucemia aguda → RM cerebral/espinal + punción lumbar dirigida', 'Aumento testicular en LLA pediátrica masculina → evaluación clínica/ecográfica dirigida', 'Masa sólida sospechosa en paciente con leucemia aguda conocida o nueva → biopsia con inmunohistoquímica (descartar cloroma)', 'Infiltración confirmada → tratamiento dirigido al sitio (intratecal, irradiación) MÁS quimioterapia sistémica de la enfermedad de base']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de la leucemia aguda se centra en el manejo de las complicaciones agudas al diagnóstico y durante la inducción (síndrome de lisis tumoral, coagulopatía en la LPA, leucostasis) y en el soporte durante la fase de aplasia posquimioterapia.',
    parametros: ['Perfil metabólico (potasio, fósforo, calcio, ácido úrico, creatinina) seriado durante la inducción', 'Perfil de coagulación seriado en la LPA', 'Recuento leucocitario seriado en la hiperleucocitosis', 'Signos vitales y estado neurológico'],
    criterios_uci_general: 'Síndrome de lisis tumoral grave con arritmia o lesión renal aguda, hemorragia mayor (particularmente intracraneal) en la coagulopatía de la LPA, leucostasis con compromiso respiratorio o neurológico, neutropenia febril con sepsis grave.',
    criterios_tips_general: 'No aplica de forma directa a este tema.',
    criterios_trasplante_general: 'Trasplante alogénico de células madre hematopoyéticas en primera remisión completa según el grupo de riesgo citogenético/molecular (LMA, leucemia secundaria) o en el paciente de alto riesgo/recaída (LLA); ver las tarjetas correspondientes para el desarrollo completo.',
    prevencion: 'Cribado y profilaxis proactiva de síndrome de lisis tumoral antes de iniciar quimioterapia en la enfermedad de alto riesgo; inicio empírico inmediato de ATRA ante sospecha morfológica de LPA sin esperar confirmación molecular; profilaxis sistemática del sistema nervioso central en la LLA desde el inicio del tratamiento; vigilancia proactiva (no solo reactiva) durante toda la fase de inducción de la LPA dado el riesgo de coagulopatía.'
  }
};

export const compCites = {
  'Leucemia Mieloide Aguda': [1, 2],
  'Leucemia Promielocítica Aguda': [3, 4, 11],
  'Leucemia Linfoblástica Aguda': [5, 6, 14],
  'Leucemia Aguda Secundaria/Relacionada a Tratamiento': [7, 8],
  'Síndrome de lisis tumoral': [9, 10],
  'Coagulopatía y CID': [3, 11],
  'Leucostasis e hiperleucocitosis': [12, 13],
  'Infiltración extramedular': [6, 15]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Índice de riesgo de Sanz (LPA)': [3, 4],
  'Clasificación de riesgo citogenético/molecular ELN (LMA)': [1],
  'Clasificación de riesgo de síndrome de lisis tumoral': [9, 10]
};
export const escalaCalc = { 'Índice de riesgo de Sanz (LPA)': 'sanz' };
export const compGroups = [
  { name: 'Leucemia aguda por tipo (enfermedades)', items: ['Leucemia Mieloide Aguda', 'Leucemia Promielocítica Aguda', 'Leucemia Linfoblástica Aguda', 'Leucemia Aguda Secundaria/Relacionada a Tratamiento'] },
  { name: 'Complicaciones transversales', items: ['Síndrome de lisis tumoral', 'Coagulopatía y CID', 'Leucostasis e hiperleucocitosis', 'Infiltración extramedular'] }
];
export const complicacionesIntro = 'Las 4 primeras tarjetas cubren los tipos principales de leucemia aguda; las siguientes 4 son complicaciones transversales que pueden surgir sobre cualquiera de ellas al diagnóstico o durante la inducción, desde urgencias metabólicas hasta la infiltración de sitios extramedulares.';
export const categories = ['Definición', 'Diagnóstico', 'Clasificación', 'Complicaciones', 'Calculadoras', 'Bibliografía', 'Quiz'];
export const arbol = {
  root: { label: 'LEUCEMIA AGUDA', color: '#8c3a34' },
  branches: [
    { label: 'Linaje mieloide', color: '#8c3a34', leaves: ['Leucemia Mieloide Aguda', 'Leucemia Promielocítica Aguda'] },
    { label: 'Linaje linfoide', color: '#5c3d8c', leaves: ['Leucemia Linfoblástica Aguda'] },
    { label: 'Secundaria', color: '#6b4a2e', leaves: ['Relacionada a tratamiento', 'Evolución de SMD/NMP'] }
  ]
};
export const diagCites = { laboratorio: [1, 7], no_invasivos: [3, 9] };
export const clasificacionCite = [1, 3];
export const seguimientoCite = [1, 3];
