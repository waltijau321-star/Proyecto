// topics/alteraciones-serie-blanca/content.js: Alteraciones de la Serie Blanca (leucocitosis
// reactiva/neutrofilia, neutropenia, eosinofilia, linfocitosis y monocitosis reactivas).
// Estructura idéntica al contrato del motor (misma forma que los temas recientes de Hematología).
// Sigue la convención de figuras en línea (figBlock(), numerada "Tabla N"/"Imagen N" con conteo
// continuo por tipo).
//
// Nota de alcance: este tema cubre las anomalías CUANTITATIVAS BENIGNAS/REACTIVAS de la serie
// blanca. Las neoplasias hematológicas propiamente dichas (leucemias agudas y crónicas, incluida
// la leucemia mieloide crónica) tienen su propio tema en el bloque "Neoplasias hematológicas"; aquí
// se referencian solo como diagnóstico diferencial.

export const meta = {
  id: 'alteraciones-serie-blanca',
  titulo: 'Alteraciones de la Serie Blanca',
  subtitulo: 'Módulo 17 · Medicina Interna',
  accent: '#3d6b8c',
  accentDim: '#7ba3c2'
};

// Reproduce el marcado de .modal-figure (mismo helper que los temas recientes de Hematología)
// para insertar figuras EN LÍNEA justo debajo del párrafo/entrada que las menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const desviacionIzquierdaHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:10px;max-width:520px;margin:0 auto;">
  <div style="display:flex;gap:4px;align-items:flex-end;width:100%;justify-content:center;">
    <div style="text-align:center;font-size:9.5px;color:var(--ink-dim);">
      <div style="width:44px;height:28px;background:var(--panel2);border:1px solid var(--line);border-radius:6px;margin:0 auto 4px;"></div>
      Mieloblasto
    </div>
    <div style="text-align:center;font-size:9.5px;color:var(--ink-dim);">
      <div style="width:44px;height:28px;background:var(--panel2);border:1px solid var(--line);border-radius:6px;margin:0 auto 4px;"></div>
      Promielocito
    </div>
    <div style="text-align:center;font-size:9.5px;color:var(--ink-dim);">
      <div style="width:44px;height:28px;background:var(--panel2);border:1px solid var(--line);border-radius:6px;margin:0 auto 4px;"></div>
      Mielocito
    </div>
    <div style="text-align:center;font-size:9.5px;color:var(--ink-dim);">
      <div style="width:44px;height:28px;background:var(--panel2);border:1px solid var(--line);border-radius:6px;margin:0 auto 4px;"></div>
      Metamielocito
    </div>
    <div style="text-align:center;font-size:9.5px;font-weight:700;color:var(--ink);">
      <div style="width:44px;height:28px;background:#8c6b2d33;border:1px solid #8c6b2d;border-radius:6px;margin:0 auto 4px;"></div>
      Banda
    </div>
    <div style="text-align:center;font-size:9.5px;font-weight:700;color:var(--ink);">
      <div style="width:44px;height:28px;background:#3f6b5233;border:1px solid #3f6b52;border-radius:6px;margin:0 auto 4px;"></div>
      Segmentado
    </div>
  </div>
  <div style="width:100%;height:1px;background:var(--line);"></div>
  <div style="font-size:10.5px;color:var(--ink-dim);text-align:center;line-height:1.6;">← Formas inmaduras (infrecuentes en sangre periférica normal) &nbsp;|&nbsp; Formas maduras (predominan normalmente) →<br>
  <strong style="color:var(--ink);">"Desviación a la izquierda"</strong>: aumento de bandas y formas inmaduras en sangre periférica, típico de la liberación medular acelerada de una infección/inflamación aguda.</div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Las alteraciones de la serie blanca son anomalías cuantitativas (por encima o por debajo del rango normal) de una o varias líneas de leucocitos circulantes: neutrófilos, eosinófilos, linfocitos o monocitos. La gran mayoría son reactivas (secundarias a infección, inflamación, estrés fisiológico, fármacos o alergia) y se resuelven al tratar la causa de base; el reto clínico central es reconocer los patrones que, en cambio, sugieren un proceso hematológico neoplásico subyacente (leucemia aguda, leucemia mieloide crónica, síndrome hipereosinofílico neoplásico) que requiere un estudio y manejo completamente distintos (ver el tema de Neoplasias hematológicas para el desarrollo completo de las leucemias).</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La leucocitosis reactiva (predominantemente neutrofilia) es, con diferencia, el hallazgo más frecuente de todo este tema, dado que acompaña a la inmensa mayoría de los procesos infecciosos e inflamatorios agudos. La neutropenia inducida por fármacos (particularmente quimioterapia, pero también numerosos fármacos de uso común) y la eosinofilia reactiva (alérgica, farmacológica, parasitaria) son también hallazgos frecuentes en la práctica clínica general.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Leucocitosis reactiva y neutrofilia</strong>: infección bacteriana, inflamación aguda, estrés fisiológico (cirugía, trauma, esfuerzo), corticoides, tabaquismo, reacción leucemoide.</li>
    <li><strong>Neutropenia</strong>: quimioterapia y otros fármacos mielosupresores, infección viral, neutropenia autoinmune, neutropenia congénita/cíclica, hiperesplenismo, infiltración medular.</li>
    <li><strong>Eosinofilia</strong>: alergia/atopia, fármacos, infección parasitaria, enfermedad autoinmune/vasculitis, síndrome hipereosinofílico (reactivo o neoplásico).</li>
    <li><strong>Linfocitosis y monocitosis reactivas</strong>: infección viral (linfocitosis), tuberculosis y recuperación de neutropenia (monocitosis), estrés agudo.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Infección aguda bacteriana, viral o parasitaria</li>
    <li>Uso de quimioterapia u otros fármacos mielosupresores</li>
    <li>Enfermedad autoinmune o alérgica de base</li>
    <li>Esplenectomía o hiperesplenismo</li>
    <li>Antecedente de radioterapia o exposición a tóxicos medulares</li>
    <li>Antecedente familiar de neutropenia congénita/cíclica</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> La médula ósea produce y libera leucocitos de forma regulada según la demanda periférica: un estímulo inflamatorio o infeccioso agudo acelera la liberación de neutrófilos desde el compartimento de reserva medular, incluyendo formas menos maduras (bandas) que normalmente permanecen en la médula, produciendo el patrón conocido como "desviación a la izquierda".${figBlock('Imagen 1', 'Desviación a la izquierda', desviacionIzquierdaHtml)} La neutropenia, por el contrario, refleja una producción medular insuficiente (mielosupresión farmacológica, infiltración, aplasia), una destrucción/consumo periférico acelerado (autoinmune, hiperesplenismo), o una redistribución transitoria (algunas infecciones virales). La eosinofilia refleja la activación de una respuesta inmune tipo 2 (alérgica o antiparasitaria) o, con menor frecuencia, una proliferación clonal autónoma. Analogía: la médula ósea funciona como un almacén de una fábrica con trabajadores en distintos niveles de entrenamiento; ante una emergencia (infección), el almacén envía a trabajadores recién entrenados (bandas) además de los ya expertos (segmentados) para cubrir la demanda, lo que explica la "desviación a la izquierda"; en la neutropenia, en cambio, es como si la fábrica misma hubiera reducido su producción o sus trabajadores estuvieran siendo despedidos más rápido de lo que se contratan.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde el hallazgo asintomático en una biometría hemática de rutina hasta la fiebre y el compromiso séptico grave de la neutropenia febril, o las manifestaciones de daño de órgano de un síndrome hipereosinofílico no reconocido; el diagnóstico diferencial (reactivo vs. neoplásico), la evaluación de la severidad, y el manejo de cada patrón se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Riley LK, Rupert J. Evaluation of Patients with Leukocytosis. Am Fam Physician. 2015;92(11):1004-1011.',
  'Newburger PE, Dale DC. Evaluation and management of patients with isolated neutropenia. Semin Hematol. 2013;50(3):198-206.',
  'Dale DC. How I manage children with neutropenia. Br J Haematol. 2017;178(3):351-363.',
  'Klastersky J, de Naurois J, Rolston K, et al. Management of febrile neutropaenia: ESMO Clinical Practice Guidelines. Ann Oncol. 2016;27(suppl 5):v111-v118.',
  'Freifeld AG, Bow EJ, Sepkowitz KA, et al. Clinical Practice Guideline for the Use of Antimicrobial Agents in Neutropenic Patients: 2010 Update by IDSA. Clin Infect Dis. 2011;52(4):e56-e93.',
  'Valent P, Klion AD, Roufosse F, et al. Proposed refined diagnostic criteria and classification of eosinophil disorders and related syndromes. Allergy. 2023;78(1):47-59.',
  'Shomali W, Gotlib J. World Health Organization and International Consensus Classification of eosinophilic disorders. Am J Hematol. 2022;97(1):129-148.',
  'Klion AD. How I treat hypereosinophilic syndromes. Blood. 2015;126(9):1069-1077.',
  'Chusid MJ. Eosinophilia: A Clinical Perspective. Pediatr Clin North Am. 2018;65(3):607-617.',
  'Abramson N, Melton B. Leukocytosis: basics of clinical assessment. Am Fam Physician. 2000;62(9):2053-2060.',
  'Chakraborty S, Kubica M, Tseng LH, et al. Leukemoid reaction and its distinction from chronic myeloid leukemia. Blood Rev. 2015.',
  'Arber DA, Orazi A, Hasserjian RP, et al. International Consensus Classification of Myeloid Neoplasms and Acute Leukemias. Blood. 2022;140(11):1200-1228.',
  'Boxer LA. How to approach neutropenia. Hematology Am Soc Hematol Educ Program. 2012;2012:174-182.',
  'Andrès E, Zulfiqar AA, Serraj K, et al. Idiosyncratic Drug-Induced Neutropenia and Agranulocytosis. J Clin Med. 2019;8(9):1351.',
  'Sicre de Fontbrune F, Moignet A, Beaupain B, et al. Severe chronic primary neutropenia in adults. Blood. 2015;126(15):1643-1650.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Alteración leve/asintomática',
      tituloB: 'Alteración grave/sintomática',
      compensada: 'Hallazgo incidental en una biometría hemática de rutina, sin síntomas atribuibles directamente a la alteración leucocitaria en sí; predominan los síntomas de la causa de base (infección leve, alergia) si están presentes.',
      descompensada: 'Fiebre con neutropenia grave (ver Complicaciones), síntomas de daño de órgano en el síndrome hipereosinofílico (cardiaco, pulmonar, cutáneo, neurológico), esplenomegalia marcada o síntomas constitucionales (fiebre, sudoración nocturna, pérdida de peso) que sugieren un proceso neoplásico subyacente en lugar de una causa reactiva.'
    },
    laboratorio: [
      { prueba: 'Biometría hemática con fórmula leucocitaria (diferencial)', utilidad: 'Cuantifica cada línea (neutrófilos, eosinófilos, linfocitos, monocitos, basófilos) por separado; el patrón de la alteración orienta la línea de estudio.' },
      { prueba: 'Frotis de sangre periférica', utilidad: 'Esencial para caracterizar morfología: desviación a la izquierda reactiva vs. blastos (sugiere leucemia aguda), granulación tóxica/cuerpos de Döhle (infección bacteriana), atipia linfocitaria (viral).' },
      { prueba: 'Marcadores inflamatorios (VSG, PCR, procalcitonina)', utilidad: 'Apoyan (sin confirmar por sí solos) una causa infecciosa/inflamatoria reactiva de la leucocitosis.' },
      { prueba: 'Conteo Absoluto de Neutrófilos (con calculadora)', utilidad: 'Clasifica la severidad de la neutropenia (leve/moderada/grave/agranulocitosis, ver Escalas) y determina el riesgo de complicación infecciosa.' },
      { prueba: 'Estudio molecular BCR-ABL1 / cariotipo', utilidad: 'Ante sospecha de leucemia mieloide crónica como diagnóstico diferencial de una neutrofilia marcada con desviación a la izquierda extrema (ver Complicaciones).' }
    ],
    no_invasivos: [
      { metodo: 'Revisión estructurada de fármacos activos', interpretacion: 'Causa frecuente y con frecuencia subreconocida de neutropenia y de eosinofilia; debe revisarse sistemáticamente antes de avanzar a estudios invasivos.', cutoff: 'N/A' },
      { metodo: 'Estudio de infección parasitaria (coproparasitoscópico, serologías dirigidas)', interpretacion: 'Ante eosinofilia sin causa alérgica/farmacológica evidente, particularmente con antecedente de viaje o residencia en zona endémica.', cutoff: 'N/A' },
      { metodo: 'Citometría de flujo de sangre periférica', interpretacion: 'Ante sospecha de un proceso linfoproliferativo o de blastos circulantes identificados en el frotis.', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'Ecografía abdominal', hallazgos: 'Esplenomegalia, que orienta hacia un proceso neoplásico subyacente (leucemia mieloide crónica, síndrome linfoproliferativo) más que hacia una causa puramente reactiva.' },
      { modalidad: 'TC de tórax/abdomen', hallazgos: 'Búsqueda de un foco infeccioso oculto, adenopatías, o masa neoplásica cuando el estudio inicial no identifica una causa reactiva evidente.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema es reactivo vs. neoplásico: el frotis de sangre periférica (buscando blastos u otras formas anómalas), la magnitud y persistencia de la alteración, la presencia de esplenomegalia o síntomas constitucionales, y el conteo absoluto de neutrófilos (con calculadora) orientan esta distinción y la severidad en cada línea celular.',
    escalas: [
      { nombre: 'Conteo Absoluto de Neutrófilos (RAN)', componentes: 'Leucocitos totales, % neutrófilos segmentados, % bandas. Calculadora disponible más abajo.', formula: 'RAN = leucocitos totales x (%neutrófilos + %bandas) / 100.', interpretacion: 'Normal ≥1500 células/µL. Neutropenia leve 1000-1499. Moderada 500-999. Grave 100-499. Agranulocitosis &lt;100 células/µL (ver Complicaciones, neutropenia febril).' },
      { nombre: 'Criterios de neutropenia febril', componentes: 'RAN, temperatura corporal.', formula: 'Categórico (ver la tarjeta correspondiente en Complicaciones).', interpretacion: 'RAN &lt;500 células/µL (o &lt;1000 con descenso esperado a &lt;500) más un episodio de fiebre ≥38.3°C único o ≥38.0°C sostenido ≥1 hora; es una urgencia médica.' },
      { nombre: 'Severidad de la eosinofilia', componentes: 'Conteo absoluto de eosinófilos (células/µL).', formula: 'Categórico.', interpretacion: 'Leve 500-1500. Moderada 1500-5000. Grave &gt;5000 células/µL (ver la tarjeta de síndrome hipereosinofílico en Complicaciones si es persistente con daño de órgano).' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Leucocitosis reactiva y neutrofilia',
      color: '#3d6b8c',
      definicion: 'Elevación del recuento de neutrófilos por encima del rango normal en respuesta a un estímulo identificable (infección, inflamación, estrés fisiológico, fármacos), sin un proceso hematológico neoplásico subyacente; el hallazgo más frecuente de todo este tema.',
      fisiopatologia: 'Un estímulo inflamatorio o infeccioso agudo libera citocinas (IL-6, IL-8, factor estimulante de colonias de granulocitos) que aceleran la liberación de neutrófilos desde el compartimento de reserva medular hacia la circulación, incluyendo formas menos maduras (desviación a la izquierda, ver Imagen 1 en Definición); el estrés fisiológico agudo (cirugía, trauma, esfuerzo extremo, convulsión) y los corticoides producen neutrofilia adicionalmente por desmarginación de neutrófilos adheridos al endotelio vascular y por retraso de su apoptosis, sin verdadero aumento de la producción medular. En casos marcados, particularmente en sepsis grave o en la recuperación de una agranulocitosis, puede observarse una "reacción leucemoide": leucocitosis muy marcada (con frecuencia &gt;50,000/µL) con desviación a la izquierda importante, que morfológicamente puede simular una leucemia mieloide crónica (ver esa tarjeta en Complicaciones).',
      epidemiologia: 'La causa más frecuente de leucocitosis en la práctica clínica general es la infección bacteriana aguda; el uso de corticoides sistémicos es también una causa muy prevalente y con frecuencia subreconocida.',
      factores_riesgo: ['Infección bacteriana aguda', 'Uso de corticoides sistémicos', 'Cirugía o trauma reciente', 'Tabaquismo activo', 'Estrés fisiológico agudo (convulsión, esfuerzo extremo)'],
      clinica: 'Con frecuencia asintomática en cuanto a la leucocitosis en sí, detectada incidentalmente; predominan los síntomas de la causa de base (fiebre y foco infeccioso identificable, dolor posquirúrgico).',
      criterios_dx: 'Leucocitosis con predominio neutrofílico, con o sin desviación a la izquierda, en el contexto de un estímulo identificable, sin blastos ni otras formas anómalas en el frotis de sangre periférica.',
      laboratorio: 'Biometría hemática con neutrofilia; frotis de sangre periférica sin blastos, con granulación tóxica y cuerpos de Döhle si la causa es infecciosa bacteriana; marcadores inflamatorios (VSG, PCR) con frecuencia elevados.',
      imagen: 'Dirigida a buscar el foco infeccioso o inflamatorio sospechado según la clínica; no indicada de rutina si la causa reactiva es evidente.',
      complementarios: 'Cultivos dirigidos según el foco infeccioso sospechado.',
      dx_diferencial: 'Reacción leucemoide extrema simulando leucemia mieloide crónica (ver esa tarjeta), leucemia mieloide crónica genuina (BCR-ABL1 positiva), policitemia vera con leucocitosis asociada (ver el tema de Síndromes Mieloproliferativos).',
      tx_medico: 'Tratamiento de la causa de base identificada (antibiótico dirigido en la infección bacteriana, ajuste de la dosis de corticoide si es la causa); la leucocitosis en sí no requiere tratamiento dirigido.',
      tx_farmacologico: 'Ninguno específico dirigido a reducir el recuento leucocitario en sí; el manejo es el de la causa de base.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Según la gravedad de la causa de base (por ejemplo, sepsis con criterios de choque séptico, ver el tema de Sepsis).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la biometría hemática mientras se trata la causa de base; la leucocitosis reactiva debería normalizarse con la resolución del estímulo.',
      seguimiento_ambulatorio: 'Repetir la biometría hemática si la leucocitosis persiste más allá de lo esperado tras resolver la causa aparente, para reconsiderar el diagnóstico diferencial.',
      pronostico: 'Excelente en cuanto a la leucocitosis en sí, que se resuelve con el tratamiento de la causa de base; el pronóstico global depende enteramente de esa causa.',
      algoritmo: ['Leucocitosis neutrofílica → buscar un estímulo identificable (infección, corticoide, estrés fisiológico)', 'Frotis de sangre periférica para descartar blastos u otras formas anómalas', 'Causa identificada y frotis sin blastos → manejo de la causa de base', 'Leucocitosis extrema (&gt;50,000/µL) o persistente sin causa clara → descartar reacción leucemoide/LMC (ver esa tarjeta)']
    },
    {
      nombre: 'Neutropenia',
      color: '#8c3a34',
      definicion: 'Reducción del conteo absoluto de neutrófilos (RAN, con calculadora) por debajo de 1500 células/µL, con un espectro de severidad desde leve hasta la agranulocitosis; su causa más frecuente en la práctica clínica es farmacológica (quimioterapia y numerosos otros fármacos).',
      fisiopatologia: 'La neutropenia se produce por 3 mecanismos generales: producción medular insuficiente (mielosupresión farmacológica, incluida la quimioterapia citotóxica; infiltración medular por un proceso neoplásico; aplasia medular, ver el tema de Anemia Aplásica; deficiencia nutricional grave de B12/folato, ver el tema de Anemia Megaloblástica), destrucción o consumo periférico acelerado (neutropenia autoinmune con anticuerpos antineutrófilo, hiperesplenismo con secuestro esplénico), o redistribución transitoria (margen ación aumentada durante algunas infecciones virales agudas, sin verdadera reducción de la producción). La neutropenia farmacológica idiosincrásica (no dosis-dependiente, a diferencia de la quimioterapia) puede ocurrir con numerosos fármacos de uso común (antitiroideos, algunos antibióticos, clozapina, entre otros) por un mecanismo con frecuencia inmunomediado.',
      epidemiologia: 'La neutropenia inducida por quimioterapia es, con diferencia, la causa más frecuente en el paciente oncológico; en la población general, los fármacos no oncológicos y las infecciones virales son causas frecuentes de neutropenia transitoria.',
      factores_riesgo: ['Quimioterapia citotóxica reciente', 'Uso de fármacos con potencial mielosupresor o idiosincrásico (antitiroideos, clozapina, algunos antibióticos)', 'Infección viral aguda', 'Enfermedad autoinmune de base', 'Hiperesplenismo', 'Antecedente familiar de neutropenia congénita/cíclica'],
      clinica: 'Con frecuencia asintomática si es leve-moderada, detectada incidentalmente; el riesgo clínicamente relevante es el de infección, que se vuelve crítico en la neutropenia grave con fiebre (ver la tarjeta de neutropenia febril en Complicaciones).',
      criterios_dx: 'RAN &lt;1500 células/µL (calculadora), clasificado por severidad (ver Escalas); revisión sistemática de fármacos activos y del contexto clínico (infección viral reciente, enfermedad autoinmune) antes de avanzar a estudio medular.',
      laboratorio: 'Biometría hemática con RAN calculado; revisión de otras líneas celulares (¿neutropenia aislada o pancitopenia, que sugiere un proceso medular más amplio, ver el tema de Anemia Aplásica?); anticuerpos antineutrófilo si se sospecha causa autoinmune.',
      imagen: 'No indicada de rutina; ecografía abdominal si se sospecha hiperesplenismo como causa.',
      complementarios: 'Aspirado/biopsia de médula ósea reservada para la neutropenia grave persistente sin causa identificable, o ante sospecha de infiltración medular o de un síndrome mielodisplásico (ver ese tema).',
      dx_diferencial: 'Pancitopenia por anemia aplásica o infiltración medular (ver esos temas), neutropenia congénita/cíclica (inicio en la infancia, patrón periódico), pseudoneutropenia por error de laboratorio (repetir el conteo si el hallazgo es inesperado).',
      tx_medico: 'Suspensión del fármaco causal identificable si el beneficio-riesgo lo permite; manejo de soporte según la severidad y la presencia de fiebre (ver la tarjeta de neutropenia febril).',
      tx_farmacologico: 'Factor estimulante de colonias de granulocitos (G-CSF) considerado en la neutropenia grave, particularmente la inducida por quimioterapia con alto riesgo de neutropenia febril, según protocolos oncológicos específicos.',
      tx_intervencionista: 'No aplica de forma directa a la neutropenia en sí (salvo el manejo del episodio de neutropenia febril si ocurre, ver esa tarjeta).',
      criterios_uci: 'Neutropenia febril con inestabilidad hemodinámica o signos de sepsis grave (ver esa tarjeta y el tema de Sepsis).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante alogénico de células madre hematopoyéticas considerado en formas graves y refractarias de neutropenia congénita seleccionadas, evaluado caso por caso.',
      seguimiento_hospitalario: 'Vigilancia estrecha de la biometría hemática y de signos de infección en la neutropenia grave.',
      seguimiento_ambulatorio: 'Reevaluación de la biometría hemática tras la suspensión del fármaco causal o la resolución de la causa identificada; educación al paciente sobre signos de alarma de infección si la neutropenia es persistente.',
      pronostico: 'Favorable con la corrección de la causa identificable; el riesgo principal es el de infección durante el periodo de neutropenia grave, particularmente si se asocia a fiebre (ver esa tarjeta).',
      algoritmo: ['RAN calculado (calculadora) → clasificar severidad', 'Revisar sistemáticamente fármacos activos y contexto clínico (infección viral, enfermedad autoinmune)', 'Neutropenia leve-moderada sin fiebre → vigilancia y manejo de la causa identificada', 'Neutropenia grave con fiebre → manejo urgente de neutropenia febril (ver esa tarjeta)', 'Neutropenia grave persistente sin causa clara → considerar aspirado/biopsia de médula ósea']
    },
    {
      nombre: 'Eosinofilia',
      color: '#8c6b2d',
      definicion: 'Elevación del conteo absoluto de eosinófilos por encima de 500 células/µL, clasificada por severidad (ver Escalas); la inmensa mayoría de los casos son reactivos (alérgicos, farmacológicos, o parasitarios), con un subgrupo persistente y grave que puede representar un síndrome hipereosinofílico (ver esa tarjeta en Complicaciones).',
      fisiopatologia: 'La eosinofilia refleja, en la mayoría de los casos, la activación de una respuesta inmune tipo 2 (mediada por linfocitos Th2 e interleucina-5) en respuesta a un alérgeno, un fármaco, o un parásito, que estimula la producción y supervivencia de eosinófilos en la médula ósea. En la enfermedad autoinmune y las vasculitis (particularmente la granulomatosis eosinofílica con poliangeítis), la eosinofilia forma parte de un proceso inflamatorio sistémico más amplio. En una minoría de los casos, la eosinofilia es clonal/neoplásica (por ejemplo, por un reordenamiento de PDGFRA), un mecanismo enteramente distinto de las causas reactivas, con implicaciones terapéuticas específicas (ver la tarjeta de síndrome hipereosinofílico).',
      epidemiologia: 'La causa más frecuente en la práctica clínica general es la alergia/atopia y la reacción farmacológica; la causa parasitaria es particularmente relevante en el paciente con antecedente de viaje o residencia en zona endémica.',
      factores_riesgo: ['Antecedente de atopia (asma, rinitis alérgica, dermatitis atópica)', 'Uso reciente de un fármaco nuevo', 'Viaje o residencia en zona endémica de parasitosis', 'Enfermedad autoinmune o vasculitis de base'],
      clinica: 'Con frecuencia asintomática en cuanto a la eosinofilia en sí; síntomas de la causa de base (síntomas respiratorios/cutáneos en la alergia, síntomas gastrointestinales en la parasitosis); síntomas de daño de órgano (cardiaco, pulmonar, cutáneo, neurológico) si la eosinofilia es grave y persistente, que sugiere un síndrome hipereosinofílico (ver esa tarjeta).',
      criterios_dx: 'Conteo absoluto de eosinófilos &gt;500 células/µL, clasificado por severidad (ver Escalas); búsqueda sistemática de la causa (fármacos, atopia, parasitosis, enfermedad autoinmune) antes de considerar un síndrome hipereosinofílico.',
      laboratorio: `Biometría hemática con conteo absoluto de eosinófilos; IgE total si se sospecha causa alérgica; serologías parasitarias dirigidas según el antecedente epidemiológico.${figBlock('Imagen 2', 'Eosinófilo en frotis de sangre periférica', `
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eosinophil_blood_smear.JPG/960px-Eosinophil_blood_smear.JPG" alt="Eosinófilo visto al microscopio en un frotis de sangre periférica, con sus gránulos citoplasmáticos característicos." style="width:100%;max-width:340px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
`)}`,
      imagen: 'No indicada de rutina en la eosinofilia leve reactiva; TC de tórax si hay síntomas respiratorios o sospecha de afectación pulmonar.',
      complementarios: 'Coproparasitoscópico seriado si hay sospecha de parasitosis; revisión estructurada de fármacos de inicio reciente.',
      dx_diferencial: 'Síndrome hipereosinofílico (eosinofilia grave persistente con daño de órgano, ver esa tarjeta), leucemia eosinofílica crónica (clonal, con reordenamiento de PDGFRA/PDGFRB/FGFR1), granulomatosis eosinofílica con poliangeítis (síndrome de Churg-Strauss).',
      tx_medico: 'Tratamiento de la causa identificada (suspensión del fármaco causal, tratamiento antiparasitario dirigido, manejo de la enfermedad alérgica de base); la eosinofilia reactiva leve-moderada no requiere tratamiento dirigido a los eosinófilos en sí.',
      tx_farmacologico: 'Corticoides sistémicos considerados en la eosinofilia grave sintomática mientras se completa el estudio de la causa, particularmente si hay sospecha de daño de órgano incipiente.',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'Según la gravedad del daño de órgano si progresa a síndrome hipereosinofílico (ver esa tarjeta).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a la eosinofilia reactiva.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico salvo por daño de órgano asociado.',
      seguimiento_ambulatorio: 'Reevaluación del conteo de eosinófilos tras el tratamiento de la causa identificada; vigilancia activa si la eosinofilia es persistente pese al tratamiento aparentemente dirigido, para reconsiderar un síndrome hipereosinofílico.',
      pronostico: 'Excelente en la eosinofilia reactiva leve-moderada con causa identificada y tratada; requiere vigilancia activa si es grave, persistente, o sin causa clara identificable.',
      algoritmo: ['Eosinofilia confirmada → clasificar severidad (calculadora/Escalas)', 'Revisar fármacos de inicio reciente y antecedente de atopia/viaje', 'Causa identificada → tratar la causa de base', 'Eosinofilia grave (&gt;5000/µL) o persistente sin causa clara → evaluar daño de órgano y descartar síndrome hipereosinofílico (ver esa tarjeta)']
    },
    {
      nombre: 'Linfocitosis y monocitosis reactivas',
      color: '#5c3d8c',
      definicion: 'Elevación reactiva del conteo absoluto de linfocitos o de monocitos, característicamente asociada a infección viral (linfocitosis) o a tuberculosis y a la fase de recuperación de una neutropenia (monocitosis); a diferenciar de la linfocitosis clonal de un síndrome linfoproliferativo crónico (ver el tema de Neoplasias hematológicas).',
      fisiopatologia: 'La linfocitosis reactiva refleja la expansión policlonal de linfocitos T y B en respuesta a una infección viral aguda (particularmente el virus de Epstein-Barr, causante de la mononucleosis infecciosa, con linfocitos atípicos característicos en el frotis) o, con menor frecuencia, a la tos ferina en el paciente pediátrico. La monocitosis reactiva ocurre en infecciones crónicas como la tuberculosis (por estimulación sostenida del sistema mononuclear-fagocítico), en enfermedades autoinmunes activas, y de forma característica durante la fase de recuperación medular tras un episodio de neutropenia (los monocitos, junto con formas inmaduras de neutrófilos, suelen ser de las primeras líneas en recuperarse).',
      epidemiologia: 'La linfocitosis reactiva por infección viral es un hallazgo frecuente, particularmente en el adulto joven con mononucleosis infecciosa; la monocitosis de recuperación es un hallazgo esperado y tranquilizador tras un episodio de neutropenia farmacológica.',
      factores_riesgo: ['Infección viral aguda (particularmente virus de Epstein-Barr, citomegalovirus)', 'Tuberculosis activa', 'Recuperación reciente de un episodio de neutropenia', 'Enfermedad autoinmune activa'],
      clinica: 'Síntomas de la causa de base (fiebre, faringitis y adenopatías en la mononucleosis infecciosa; síntomas constitucionales en la tuberculosis); la linfocitosis/monocitosis en sí rara vez produce síntomas propios.',
      criterios_dx: 'Linfocitosis o monocitosis en el contexto clínico e infeccioso apropiado, con morfología reactiva (linfocitos atípicos en la mononucleosis) en el frotis de sangre periférica, sin las características de un proceso linfoproliferativo clonal.',
      laboratorio: 'Biometría hemática con diferencial; frotis de sangre periférica (linfocitos atípicos de aspecto reactivo, no la morfología monótona de un síndrome linfoproliferativo crónico); serología para virus de Epstein-Barr/citomegalovirus si hay sospecha clínica.',
      imagen: 'No indicada de rutina; radiografía de tórax si hay sospecha de tuberculosis activa.',
      complementarios: 'Citometría de flujo reservada para el caso dudoso, donde se necesita distinguir una linfocitosis reactiva policlonal de una linfocitosis clonal (ver el tema de Neoplasias hematológicas).',
      dx_diferencial: 'Leucemia linfocítica crónica u otro síndrome linfoproliferativo (linfocitosis clonal persistente, con frecuencia en el adulto mayor, sin el contexto infeccioso agudo típico de la linfocitosis reactiva, ver el tema de Neoplasias hematológicas).',
      tx_medico: 'Tratamiento de la causa de base identificada (manejo de soporte en la mononucleosis infecciosa viral, tratamiento antituberculoso dirigido); la linfocitosis/monocitosis reactiva en sí no requiere tratamiento dirigido.',
      tx_farmacologico: 'Ninguno específico dirigido al recuento celular en sí.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica de forma directa a esta entidad en sí (salvo por la gravedad de la causa de base).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico.',
      seguimiento_ambulatorio: 'Reevaluación de la biometría hemática tras la resolución de la causa infecciosa identificada; si la linfocitosis persiste más allá de lo esperado, reconsiderar un proceso linfoproliferativo clonal.',
      pronostico: 'Excelente, dado que es un hallazgo reactivo transitorio que se resuelve con la causa de base.',
      algoritmo: ['Linfocitosis o monocitosis → buscar contexto infeccioso agudo apropiado (viral, tuberculosis)', 'Frotis de sangre periférica: morfología reactiva vs. clonal monótona', 'Contexto agudo y morfología reactiva → manejo de la causa de base, sin más estudio', 'Persistencia más allá de lo esperado o morfología dudosa → citometría de flujo, descartar proceso linfoproliferativo clonal']
    },
    {
      nombre: 'Diferencial reacción leucemoide vs. leucemia mieloide crónica',
      color: '#6b4a2e',
      definicion: 'Complicación diagnóstica en la que una leucocitosis neutrofílica extrema con desviación a la izquierda marcada (reacción leucemoide, ver esa tarjeta) debe distinguirse de la leucemia mieloide crónica genuina, dado que ambas pueden compartir un cuadro morfológico similar en el frotis de sangre periférica pero difieren radicalmente en mecanismo, pronóstico y manejo.',
      fisiopatologia: 'La reacción leucemoide es un fenómeno reactivo, con leucocitosis marcada (con frecuencia &gt;50,000/µL) y desviación a la izquierda, pero sin la mutación clonal BCR-ABL1 característica de la leucemia mieloide crónica; ocurre típicamente en el contexto de sepsis grave, un estímulo infeccioso intenso, o la recuperación de una agranulocitosis. La leucemia mieloide crónica, por el contrario, es producida por la translocación t(9;22) (cromosoma Filadelfia) que genera el gen de fusión BCR-ABL1, una tirosina cinasa constitutivamente activa que produce una proliferación mieloide clonal autónoma, independiente de cualquier estímulo reactivo, con un espectro característico de todas las etapas de maduración mieloide en sangre periférica (a diferencia de la reacción leucemoide, que predomina en bandas y segmentados).',
      epidemiologia: 'La distinción es clínicamente relevante particularmente en el paciente crítico con sepsis grave y leucocitosis extrema, un escenario en el que ambas entidades pueden considerarse inicialmente.',
      factores_riesgo: ['Leucocitosis extrema (&gt;50,000/µL) sin un estímulo reactivo claramente identificable', 'Esplenomegalia asociada (más característica de leucemia mieloide crónica que de la reacción leucemoide)', 'Ausencia de un foco infeccioso o inflamatorio evidente que explique la magnitud de la leucocitosis'],
      clinica: 'Ambas entidades pueden presentarse con leucocitosis marcada; la esplenomegalia, los síntomas constitucionales (pérdida de peso, sudoración nocturna), y la ausencia de un foco infeccioso claro orientan hacia leucemia mieloide crónica y no hacia una reacción leucemoide reactiva.',
      criterios_dx: 'La fosfatasa alcalina leucocitaria (históricamente) y, en la práctica actual, el estudio molecular de BCR-ABL1 (por PCR o cariotipo con FISH) son las pruebas definitivas: positivo confirma leucemia mieloide crónica, negativo en el contexto de un estímulo reactivo identificable apoya la reacción leucemoide.',
      laboratorio: 'Biometría hemática con leucocitosis extrema; frotis de sangre periférica (el espectro completo de maduración mieloide, incluida basofilia, orienta hacia leucemia mieloide crónica); BCR-ABL1 por PCR o cariotipo con FISH.',
      imagen: 'Ecografía abdominal si hay sospecha de esplenomegalia.',
      complementarios: 'Aspirado/biopsia de médula ósea con cariotipo si el estudio molecular inicial es dudoso o si se confirma leucemia mieloide crónica, para completar la estadificación (ver el tema de Neoplasias hematológicas).',
      dx_diferencial: 'Leucocitosis reactiva/neutrofilia de menor magnitud (ver esa tarjeta), otras neoplasias mieloproliferativas (ver el tema de Síndromes Mieloproliferativos).',
      tx_medico: 'Tratamiento de la causa de base identificada si se confirma reacción leucemoide (el mismo manejo que la leucocitosis reactiva); referencia a hematología para manejo específico con inhibidores de tirosina cinasa si se confirma leucemia mieloide crónica (ver el tema de Neoplasias hematológicas).',
      tx_farmacologico: 'Ninguno específico si es reacción leucemoide; inhibidores de tirosina cinasa (imatinib y similares) si se confirma leucemia mieloide crónica, un tratamiento altamente eficaz que ha transformado el pronóstico de esta enfermedad.',
      tx_intervencionista: 'No aplica de forma directa a la distinción diagnóstica en sí.',
      criterios_uci: 'Según la gravedad de la causa de base (sepsis grave) si corresponde a reacción leucemoide.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'El trasplante alogénico de células madre hematopoyéticas es una consideración en la leucemia mieloide crónica refractaria a inhibidores de tirosina cinasa o en fase acelerada/blástica (ver ese tema).',
      seguimiento_hospitalario: 'Vigilancia de la biometría hemática mientras se completa el estudio diferencial.',
      seguimiento_ambulatorio: 'Seguimiento según el diagnóstico final establecido, con implicaciones pronósticas y de tratamiento completamente distintas entre ambas entidades.',
      pronostico: 'La reacción leucemoide se resuelve completamente con el tratamiento de la causa de base; la leucemia mieloide crónica, no tratada, progresa a fase acelerada y blástica, aunque con el tratamiento moderno con inhibidores de tirosina cinasa el pronóstico a largo plazo es actualmente excelente.',
      algoritmo: ['Leucocitosis neutrofílica extrema (&gt;50,000/µL) → buscar un estímulo reactivo claramente identificable', 'Frotis de sangre periférica: predominio de bandas/segmentados (reactivo) vs. espectro completo de maduración con basofilia (sugiere LMC)', 'Estudio molecular BCR-ABL1 si hay duda diagnóstica o esplenomegalia asociada', 'BCR-ABL1 negativo + causa reactiva identificada → reacción leucemoide, tratar la causa', 'BCR-ABL1 positivo → leucemia mieloide crónica, referir a hematología (ver ese tema)']
    },
    {
      nombre: 'Neutropenia febril',
      color: '#7a1f3d',
      definicion: 'Urgencia médica definida por la combinación de neutropenia grave (RAN &lt;500 células/µL, o &lt;1000 con descenso esperado a &lt;500) y fiebre (≥38.3°C único o ≥38.0°C sostenido durante al menos 1 hora), reflejando un riesgo elevado de infección grave con capacidad de respuesta inmune reducida; desarrollada aquí desde la perspectiva de la neutropenia como línea celular (ver el tema de Oncología general para el manejo completo en el contexto específico del paciente oncológico).',
      fisiopatologia: 'La neutropenia grave elimina la primera línea de defensa celular contra la infección bacteriana y fúngica; en este contexto, un foco infeccioso que en un paciente inmunocompetente produciría una respuesta inflamatoria localizada y contenida puede progresar rápidamente a bacteriemia y sepsis grave, dado que no hay suficientes neutrófilos para contener la infección en el sitio inicial; con frecuencia no se identifica un foco clínico evidente al momento de la presentación, precisamente porque la respuesta inflamatoria normal (que depende de los neutrófilos) está atenuada.',
      epidemiologia: 'Ocurre predominantemente en el paciente oncológico tras quimioterapia mielosupresora; la mortalidad no tratada es elevada, por lo que se maneja siempre como una urgencia médica que requiere antibioticoterapia empírica inmediata.',
      factores_riesgo: ['RAN &lt;500 células/µL', 'Quimioterapia citotóxica reciente', 'Mucositis asociada a quimioterapia (rompe la barrera mucosa, facilitando la translocación bacteriana)', 'Catéter venoso central', 'Hospitalización prolongada'],
      clinica: 'Fiebre con frecuencia como único signo, dado que los signos inflamatorios localizados habituales (eritema, induración, formación de pus) pueden estar atenuados o ausentes por la falta de neutrófilos; puede progresar rápidamente a signos de sepsis grave o choque séptico si no se trata con prontitud (ver el tema de Sepsis).',
      criterios_dx: 'RAN &lt;500 células/µL (o &lt;1000 con descenso esperado, calculadora) más fiebre según el criterio de temperatura especificado en la definición; es un diagnóstico clínico-laboratorial que exige manejo inmediato sin esperar la identificación de un foco.',
      laboratorio: 'Biometría hemática con RAN; hemocultivos (al menos 2 sets, incluidos de cada lumen si hay catéter venoso central) antes de iniciar antibiótico; química sanguínea y pruebas de función renal/hepática basales; lactato si hay signos de inestabilidad.',
      imagen: 'Radiografía de tórax si hay síntomas respiratorios; estudio de imagen dirigido según cualquier síntoma localizador presente, aunque con frecuencia no hay uno identificable.',
      complementarios: 'Urocultivo y cualquier otro cultivo dirigido según sospecha clínica (por ejemplo, de un catéter venoso central).',
      dx_diferencial: 'Fiebre por otra causa no infecciosa (reacción transfusional, fiebre por fármacos) en el paciente neutropénico, que debe considerarse solo después de haber tratado empíricamente como infección hasta demostrar lo contrario, dado el riesgo de un retraso terapéutico potencialmente fatal.',
      tx_medico: 'Inicio inmediato (idealmente dentro de la primera hora) de antibioticoterapia empírica de amplio espectro con cobertura antipseudomónica, sin esperar los resultados de cultivos; reevaluación y ajuste según la evolución clínica y los resultados microbiológicos.',
      tx_farmacologico: 'Un betalactámico antipseudomónico (cefepima, piperacilina-tazobactam, o un carbapenémico) como pilar empírico inicial; ampliación de cobertura (vancomicina, antifúngico) según factores de riesgo específicos y la evolución clínica; factor estimulante de colonias de granulocitos considerado como adyuvante en casos seleccionados de alto riesgo.',
      tx_intervencionista: 'Retiro del catéter venoso central si se confirma o hay alta sospecha de infección asociada a catéter no controlada con antibiótico.',
      criterios_uci: 'Signos de sepsis grave o choque séptico (ver el tema de Sepsis), inestabilidad hemodinámica, o falla respiratoria asociada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a este episodio en sí.',
      seguimiento_hospitalario: 'Vigilancia estrecha de signos vitales y de la biometría hemática seriada hasta la recuperación del RAN por encima de 500 células/µL y la resolución de la fiebre.',
      seguimiento_ambulatorio: 'Manejo ambulatorio con antibiótico oral considerado únicamente en el paciente de bajo riesgo cuidadosamente seleccionado (según escalas de riesgo validadas), con seguimiento estrecho garantizado.',
      pronostico: 'Favorable con el tratamiento antibiótico empírico inmediato; la mortalidad aumenta marcadamente con cualquier retraso en el inicio del antibiótico, de ahí su manejo como urgencia médica.',
      algoritmo: ['RAN &lt;500 (o &lt;1000 con descenso esperado) + fiebre → neutropenia febril, urgencia médica', 'Hemocultivos (2 sets) + estudio dirigido según síntomas, SIN retrasar el antibiótico', 'Antibiótico empírico de amplio espectro antipseudomónico dentro de la primera hora', 'Reevaluar y ajustar según cultivos y evolución clínica', 'Signos de sepsis grave/choque → manejo en UCI (ver el tema de Sepsis)']
    },
    {
      nombre: 'Síndrome hipereosinofílico',
      color: '#966b35',
      definicion: 'Eosinofilia grave (&gt;1500 células/µL) persistente (documentada en al menos 2 ocasiones separadas por al menos 4 semanas, o con evidencia inmediata de daño de órgano) sin una causa reactiva secundaria identificable que la explique, asociada a daño de órgano atribuible a la infiltración/activación eosinofílica tisular; puede ser reactivo (variante linfocítica) o neoplásico/clonal (mutación de PDGFRA, entre otras).',
      fisiopatologia: 'Los eosinófilos activados liberan proteínas catiónicas tóxicas (proteína básica mayor, proteína catiónica eosinofílica) que dañan directamente el tejido donde se infiltran; el corazón es particularmente vulnerable (fibrosis endomiocárdica, trombos murales, insuficiencia cardiaca restrictiva), pero también puede afectarse el pulmón (infiltrados, fibrosis), la piel (dermatitis, urticaria), el sistema nervioso (neuropatía periférica, encefalopatía), y el tracto gastrointestinal. En la variante clonal/neoplásica (leucemia eosinofílica crónica), un reordenamiento genético (más frecuentemente de PDGFRA) produce una tirosina cinasa constitutivamente activa que impulsa una proliferación eosinofílica autónoma; en la variante linfocítica (reactiva), una población clonal de linfocitos T produce citocinas (particularmente interleucina-5) que estimulan la eosinofilia de forma secundaria, sin que los eosinófilos en sí sean clonales.',
      epidemiologia: 'Poco frecuente; debe considerarse en toda eosinofilia grave persistente (&gt;1500 células/µL) sin causa reactiva identificable tras un estudio inicial completo (fármacos, alergia, parasitosis, enfermedad autoinmune).',
      factores_riesgo: ['Eosinofilia grave persistente sin causa reactiva identificable', 'Síntomas o signos de daño de órgano de nueva aparición (cardiaco, pulmonar, cutáneo, neurológico) en un paciente con eosinofilia conocida', 'Ausencia de mejoría de la eosinofilia pese al tratamiento aparentemente dirigido a una causa reactiva sospechada'],
      clinica: 'Síntomas de daño de órgano según el sistema afectado: disnea y signos de insuficiencia cardiaca (afectación cardiaca, la manifestación más temida), tos y disnea (afectación pulmonar), lesiones cutáneas pruriginosas, síntomas neurológicos periféricos o centrales; síntomas constitucionales (fatiga, fiebre) con frecuencia presentes.',
      criterios_dx: 'Eosinofilia &gt;1500 células/µL persistente (≥4 semanas o con daño de órgano inmediato documentado), sin causa reactiva secundaria identificable, con evidencia clínica o de laboratorio de daño de órgano atribuible a los eosinófilos.',
      laboratorio: 'Conteo absoluto de eosinófilos seriado; troponina y péptido natriurético si hay sospecha de afectación cardiaca; estudio molecular dirigido a reordenamientos de PDGFRA/PDGFRB/FGFR1 para distinguir la variante clonal/neoplásica.',
      imagen: 'Ecocardiograma (buscando fibrosis endomiocárdica, trombos murales, disfunción diastólica) en todo paciente con sospecha de síndrome hipereosinofílico, dado que la afectación cardiaca puede ser inicialmente asintomática; TC de tórax si hay síntomas respiratorios; resonancia magnética cardiaca si el ecocardiograma es dudoso.',
      complementarios: 'Aspirado/biopsia de médula ósea con estudio molecular dirigido si se sospecha la variante clonal/neoplásica; biopsia del tejido afectado (piel, otro órgano) si aporta al diagnóstico diferencial.',
      dx_diferencial: 'Eosinofilia reactiva de causa identificable (ver esa tarjeta), leucemia eosinofílica crónica genuina (clonal, con reordenamiento identificado), granulomatosis eosinofílica con poliangeítis (vasculitis asociada, con afectación de senos paranasales y asma característicos).',
      tx_medico: 'Inicio urgente de tratamiento dirigido a reducir la eosinofilia si hay daño de órgano documentado o inminente, sin esperar a completar el estudio etiológico exhaustivo, dado el riesgo de daño de órgano irreversible (particularmente cardiaco).',
      tx_farmacologico: 'Corticoides sistémicos como tratamiento inicial de primera línea en la variante reactiva/linfocítica; un inhibidor de tirosina cinasa (imatinib) es altamente eficaz y de elección si se confirma la variante clonal con reordenamiento de PDGFRA; anticuerpos monoclonales anti-interleucina-5 (mepolizumab) considerados en casos refractarios.',
      tx_intervencionista: 'Manejo especializado de la insuficiencia cardiaca restrictiva o de los trombos murales si hay afectación cardiaca establecida (anticoagulación, manejo de insuficiencia cardiaca según el tema correspondiente).',
      criterios_uci: 'Insuficiencia cardiaca aguda descompensada, compromiso neurológico agudo, o cualquier daño de órgano con inestabilidad asociada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante alogénico de células madre hematopoyéticas considerado en casos seleccionados de leucemia eosinofílica crónica refractaria al tratamiento dirigido.',
      seguimiento_hospitalario: 'Vigilancia estrecha de la función cardiaca y del conteo de eosinófilos durante el tratamiento inicial.',
      seguimiento_ambulatorio: 'Seguimiento cardiológico y hematológico a largo plazo, dado el riesgo de daño de órgano progresivo si el control de la eosinofilia no es sostenido.',
      pronostico: 'Depende fundamentalmente de la presencia y extensión del daño de órgano al momento del diagnóstico, particularmente cardiaco; el pronóstico ha mejorado notablemente en la variante con reordenamiento de PDGFRA gracias a la alta eficacia del imatinib.',
      algoritmo: ['Eosinofilia &gt;1500/µL persistente sin causa reactiva identificable → sospechar síndrome hipereosinofílico', 'Ecocardiograma en TODO paciente con sospecha, dado que la afectación cardiaca puede ser asintomática', 'Estudio molecular dirigido (PDGFRA/PDGFRB/FGFR1) para distinguir variante clonal de reactiva/linfocítica', 'Daño de órgano documentado o inminente → iniciar tratamiento urgente sin esperar el estudio etiológico completo', 'Reordenamiento de PDGFRA confirmado → imatinib de elección']
    },
    {
      nombre: 'Enfoque diagnóstico del hemograma anormal',
      color: '#5c6b8c',
      definicion: 'Complicación diagnóstica transversal: establecer de forma sistemática cuándo una alteración de la serie blanca requiere solo observación/tratamiento de la causa de base y cuándo justifica avanzar a estudios de mayor complejidad (frotis dirigido, citometría de flujo, estudio molecular, aspirado/biopsia de médula ósea), evitando tanto el estudio insuficiente de un proceso neoplásico como el estudio excesivo de un hallazgo reactivo benigno.',
      fisiopatologia: 'El hemograma automatizado (el "diferencial" generado por el contador celular) es un cribado inicial útil pero limitado: no distingue por sí solo formas morfológicamente anómalas (blastos, linfocitos atípicos, formas displásicas) de las formas maduras normales dentro de la misma categoría numérica; el frotis de sangre periférica examinado por un observador experimentado sigue siendo la herramienta central para esta distinción, y determina si el estudio debe detenerse ahí (patrón reactivo claro) o avanzar a citometría de flujo (para caracterizar una población clonal sospechada), estudio molecular dirigido (BCR-ABL1, JAK2, reordenamientos de PDGFRA según la sospecha clínica), o aspirado/biopsia de médula ósea (el estudio de referencia cuando el diagnóstico permanece incierto tras los pasos anteriores).',
      epidemiologia: 'Un enfoque sistemático es particularmente relevante dado que la inmensa mayoría de las alteraciones de la serie blanca encontradas en la práctica clínica general son reactivas y benignas, mientras que una minoría representa el primer hallazgo de un proceso hematológico neoplásico que se beneficia enormemente de un diagnóstico oportuno.',
      factores_riesgo: ['Alteración de la serie blanca sin un contexto clínico reactivo claramente identificable', 'Persistencia de la alteración más allá del tiempo esperado tras resolver la causa aparente', 'Alteración de más de una línea celular simultáneamente (sugiere un proceso medular más amplio)', 'Síntomas constitucionales o esplenomegalia asociados'],
      clinica: 'No es una entidad clínica en sí misma, sino el proceso de razonamiento diagnóstico aplicado ante cualquier alteración de la serie blanca de este tema.',
      criterios_dx: 'No aplica un criterio único; el enfoque combina la magnitud y persistencia de la alteración, el contexto clínico, la morfología en el frotis, y estudios dirigidos escalonados según el nivel de sospecha de un proceso neoplásico subyacente.',
      laboratorio: 'Frotis de sangre periférica como primer paso diferenciador en toda alteración sin causa reactiva evidente; estudios de segunda línea (citometría de flujo, estudio molecular) reservados según los hallazgos del frotis y el contexto clínico, no solicitados de rutina en toda alteración leve.',
      imagen: 'Ecografía abdominal si hay sospecha de esplenomegalia, un hallazgo que siempre debe elevar la sospecha de un proceso neoplásico subyacente.',
      complementarios: 'Aspirado/biopsia de médula ósea reservada como estudio de tercera línea cuando el diagnóstico permanece incierto tras el frotis y los estudios dirigidos de segunda línea.',
      dx_diferencial: 'No aplica (es el proceso diagnóstico en sí, no una entidad).',
      tx_medico: 'No corresponde tratamiento a este "diagnóstico"; su valor es guiar cuándo detener el estudio (patrón reactivo claro con causa identificada) y cuándo escalarlo.',
      tx_farmacologico: 'No aplica.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica de forma directa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma directa a este enfoque en sí.',
      seguimiento_ambulatorio: 'Repetir la biometría hemática con diferencial en un plazo razonable ante cualquier alteración leve sin causa clara, antes de avanzar a estudios más invasivos, salvo que existan datos de alarma que justifiquen un estudio más urgente.',
      pronostico: 'No aplica (es un enfoque diagnóstico, no una entidad con pronóstico propio); su correcta aplicación mejora el pronóstico de las 2 categorías de error que busca evitar (el proceso neoplásico no detectado a tiempo, y el estudio invasivo innecesario de un hallazgo benigno).',
      algoritmo: ['Alteración de la serie blanca detectada → ¿hay un contexto clínico reactivo claro?', 'Sí, contexto claro y magnitud proporcional → tratar la causa de base, repetir biometría de control', 'No, o magnitud desproporcionada/persistente → frotis de sangre periférica dirigido', 'Frotis con hallazgos anómalos (blastos, atipia, formas clonales sospechadas) → citometría de flujo/estudio molecular dirigido', 'Diagnóstico aún incierto tras lo anterior → aspirado/biopsia de médula ósea']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de las alteraciones de la serie blanca se centra en 2 escenarios principales: la vigilancia de la respuesta al tratamiento de la causa de base identificada, y el manejo urgente de la neutropenia febril cuando ocurre.',
    parametros: ['Biometría hemática con diferencial seriada', 'Temperatura corporal (vigilancia estrecha en el paciente neutropénico)', 'Signos de infección localizada o sistémica', 'Evolución clínica de la causa de base identificada'],
    criterios_uci_general: 'Neutropenia febril con signos de sepsis grave o choque séptico; daño de órgano agudo grave en el síndrome hipereosinofílico (particularmente cardiaco).',
    criterios_tips_general: 'No aplica de forma directa a este tema.',
    criterios_trasplante_general: 'Trasplante alogénico de células madre hematopoyéticas considerado en casos seleccionados y refractarios de neutropenia congénita grave, leucemia mieloide crónica avanzada, o leucemia eosinofílica crónica (ver los temas correspondientes para el desarrollo completo).',
    prevencion: 'Revisión sistemática de fármacos con potencial mielosupresor o de causar eosinofilia antes de prescribirlos cuando existan alternativas; educación al paciente oncológico bajo quimioterapia sobre signos de alarma de neutropenia febril; vacunación al día para reducir el riesgo de infecciones que producen alteraciones reactivas marcadas.'
  }
};

export const compCites = {
  'Leucocitosis reactiva y neutrofilia': [1, 10],
  'Neutropenia': [2, 3, 13, 14],
  'Eosinofilia': [6, 7, 9],
  'Linfocitosis y monocitosis reactivas': [1],
  'Diferencial reacción leucemoide vs. leucemia mieloide crónica': [11, 12],
  'Neutropenia febril': [4, 5],
  'Síndrome hipereosinofílico': [6, 7, 8],
  'Enfoque diagnóstico del hemograma anormal': [1, 12]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Conteo Absoluto de Neutrófilos (RAN)': [2, 3],
  'Criterios de neutropenia febril': [4, 5],
  'Severidad de la eosinofilia': [6, 9]
};
export const escalaCalc = { 'Conteo Absoluto de Neutrófilos (RAN)': 'ran' };
export const compGroups = [
  { name: 'Alteraciones de la serie blanca por línea celular (enfermedades)', items: ['Leucocitosis reactiva y neutrofilia', 'Neutropenia', 'Eosinofilia', 'Linfocitosis y monocitosis reactivas'] },
  { name: 'Complicaciones transversales (cualquier forma)', items: ['Diferencial reacción leucemoide vs. leucemia mieloide crónica', 'Neutropenia febril', 'Síndrome hipereosinofílico', 'Enfoque diagnóstico del hemograma anormal'] }
];
export const complicacionesIntro = 'Las 4 primeras tarjetas cubren las alteraciones cuantitativas benignas/reactivas de cada línea celular de la serie blanca; las siguientes 4 son complicaciones transversales que pueden surgir con cualquiera de ellas, desde la distinción con un proceso neoplásico hasta la urgencia de la neutropenia febril.';
export const categories = ['Definición', 'Diagnóstico', 'Clasificación', 'Complicaciones', 'Calculadoras', 'Bibliografía', 'Quiz'];
export const arbol = {
  root: { title: 'ALTERACIONES DE LA SERIE BLANCA', color: '#3d6b8c', target: 'definicion' },
  branches: [
    { title: 'Por línea celular', sub: 'Alteraciones cuantitativas reactivas', color: '#3d6b8c', target: 'diagnostico', leaves: [
      { title: 'Leucocitosis reactiva y neutrofilia', sub: 'Neutrofilia', color: '#3d6b8c', target: 'complicaciones' },
      { title: 'Neutropenia', sub: 'Neutrófilos bajos', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Eosinofilia', sub: 'Eosinófilos elevados', color: '#8c6b2d', target: 'complicaciones' },
      { title: 'Linfocitosis y monocitosis reactivas', sub: 'Otras líneas', color: '#5c6b8c', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones transversales', sub: 'Urgencias y diagnóstico diferencial', color: '#7a1f3d', target: 'complicaciones', leaves: [
      { title: 'Diferencial reacción leucemoide vs. LMC', sub: 'Reactiva vs. neoplásica', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Neutropenia febril', sub: 'Urgencia oncológica', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Síndrome hipereosinofílico', sub: 'Daño de órgano', color: '#8c6b2d', target: 'complicaciones' },
      { title: 'Enfoque diagnóstico del hemograma anormal', sub: 'Abordaje general', color: '#3f6b52', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2], no_invasivos: [9] };
export const clasificacionCite = [2, 6];
export const seguimientoCite = [4, 5];
