// topics/anemia-enfermedad-cronica/content.js: Anemia de la Enfermedad Crónica / Anemia de la
// Inflamación (AEC clásica, enfermedad renal crónica, combinada con ferropenia, paciente
// crítico/hospitalizado). Estructura idéntica al contrato del motor (misma forma que
// anemia-ferropenica/anemia-megaloblastica/anemia-aplasica). Sigue la convención de figuras en
// línea (figBlock(), numerada "Tabla N"/"Imagen N" con conteo continuo por tipo).

export const meta = {
  id: 'anemia-enfermedad-cronica',
  titulo: 'Anemia de la Enfermedad Crónica',
  subtitulo: 'Módulo 15 · Medicina Interna',
  accent: '#4a5c73',
  accentDim: '#7a8ca3'
};

// Reproduce el marcado de .modal-figure (mismo helper que los temas recientes de Hematología)
// para insertar figuras EN LÍNEA justo debajo del párrafo/entrada que las menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const hepcidinaHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:460px;margin:0 auto;">
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11.5px;font-weight:600;color:var(--ink);text-align:center;">Inflamación sistémica (infección, autoinmune, neoplasia)</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓ interleucina-6</div>
  <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:8px;padding:8px 16px;font-size:11.5px;font-weight:600;color:var(--ink);text-align:center;">Hepcidina hepática ↑</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓ degrada</div>
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11.5px;font-weight:600;color:var(--ink);text-align:center;">Ferroportina (exportador de hierro celular)</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="background:#966b3533;border:1px solid #966b35;border-radius:8px;padding:10px 16px;font-size:11.5px;font-weight:600;color:var(--ink);text-align:center;">Hierro atrapado en macrófagos/enterocitos<br><span style="font-weight:400;font-size:10px;">depósitos NORMALES o ALTOS, pero inaccesibles</span></div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:8px 16px;font-size:11.5px;font-weight:600;color:var(--ink);text-align:center;">Eritropoyesis sin hierro disponible → anemia</div>
</div>
<div class="figure-grade-box">A diferencia de la ferropenia verdadera (depósitos vacíos, ver ese tema), en la AEC los depósitos de hierro están conservados o aumentados; el problema es el ACCESO a ese hierro, bloqueado por la hepcidina.</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La anemia de la enfermedad crónica (también llamada anemia de la inflamación) es la segunda causa más frecuente de anemia en el mundo, después de la ferropénica, y la más frecuente en el paciente hospitalizado. Es una anemia normocítica-normocrómica (o, con menor frecuencia, discretamente microcítica) mediada por la respuesta inflamatoria sistémica ante una infección crónica, una enfermedad autoinmune/inflamatoria, una neoplasia, o la enfermedad renal crónica; a diferencia de la anemia ferropénica, aquí los depósitos de hierro corporal están conservados o incluso aumentados, pero secuestrados y funcionalmente inaccesibles para la eritropoyesis (por eso también se le llama "ferropenia funcional"). El reto clínico central de este tema es distinguir la AEC pura de la coexistencia con una ferropenia verdadera (ver la tarjeta de anemia combinada), dado que el manejo es radicalmente distinto.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> Es la anemia más frecuente en el paciente hospitalizado y en el paciente con enfermedad crónica de cualquier tipo (autoinmune, infecciosa, neoplásica, renal); su prevalencia aumenta con la edad y con el número y la gravedad de las comorbilidades activas.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>AEC clásica</strong>: infección crónica (tuberculosis, endocarditis, osteomielitis, VIH), enfermedad autoinmune/inflamatoria (artritis reumatoide, lupus eritematoso sistémico, enfermedad inflamatoria intestinal), neoplasia activa (sólida o hematológica).</li>
    <li><strong>Anemia de la enfermedad renal crónica</strong>: deficiencia relativa de eritropoyetina (el riñón enfermo no aumenta su producción proporcionalmente a la anemia) superpuesta a un componente inflamatorio crónico compartido con la AEC clásica.</li>
    <li><strong>Anemia combinada con ferropenia verdadera</strong>: coexistencia de AEC con un déficit absoluto de hierro corporal (pérdida sanguínea crónica, aporte insuficiente), el escenario diagnóstico más desafiante de este tema.</li>
    <li><strong>Anemia del paciente crítico/hospitalizado</strong>: variante aguda y acelerada del mismo mecanismo inflamatorio, agravada por flebotomía diagnóstica repetida y la supresión directa de la eritropoyesis por citocinas inflamatorias agudas.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Enfermedad autoinmune/inflamatoria crónica activa</li>
    <li>Infección crónica no controlada</li>
    <li>Neoplasia activa</li>
    <li>Enfermedad renal crónica, particularmente estadios avanzados</li>
    <li>Hospitalización prolongada con flebotomía diagnóstica frecuente</li>
    <li>Edad avanzada con múltiples comorbilidades</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> La inflamación sistémica, a través de citocinas proinflamatorias (particularmente interleucina-6), estimula la producción hepática de hepcidina, la hormona reguladora central del metabolismo del hierro (ver el tema de Anemia Ferropénica para su rol en sentido opuesto).${figBlock('Imagen 1', 'El eje hepcidina-ferroportina en la AEC', hepcidinaHtml)} La hepcidina elevada degrada la ferroportina (el único exportador conocido de hierro celular), atrapando el hierro dentro de los macrófagos del sistema reticuloendotelial y de los enterocitos, y bloqueando tanto la absorción intestinal como la liberación del hierro ya almacenado hacia la eritropoyesis. Las mismas citocinas inflamatorias (interleucina-1, factor de necrosis tumoral alfa, interferón gamma) suprimen directamente la proliferación de los progenitores eritroides, reducen la producción y la sensibilidad renal a la eritropoyetina, y acortan discretamente la supervivencia del eritrocito maduro. En la enfermedad renal crónica, a este mecanismo inflamatorio se suma una deficiencia relativa verdadera de eritropoyetina, dado que el riñón enfermo no logra aumentar su producción de forma proporcional al grado de anemia. Analogía: en la ferropenia verdadera, la "bodega" de hierro del cuerpo está vacía; en la AEC, la bodega está llena, pero alguien puso un candado en la puerta (la hepcidina) que no deja sacar nada de adentro. Por eso dar más hierro a un paciente con AEC pura es como llevar más mercancía a una bodega que ya está llena y cerrada con candado: no resuelve el problema, porque el problema nunca fue la cantidad de hierro disponible, sino el acceso a él.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Con frecuencia, los síntomas de la anemia (fatiga, disnea de esfuerzo) se superponen y quedan opacados por los síntomas de la enfermedad de base, que domina el cuadro clínico; la anemia suele ser leve-moderada (Hb rara vez &lt;8 g/dL en la AEC pura, sin otra causa concomitante) y de instalación gradual, a diferencia de otras causas de anemia de esta sección; el diagnóstico definitivo, el estudio dirigido para distinguirla de otras causas, y el manejo de cada forma se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Weiss G, Ganz T, Goodnough LT. Anemia of inflammation. Blood. 2019;133(1):40-50.',
  'Weiss G, Goodnough LT. Anemia of chronic disease. N Engl J Med. 2005;352(10):1011-1023.',
  'Nemeth E, Ganz T. Anemia of inflammation. Hematol Oncol Clin North Am. 2014;28(4):671-681.',
  'Ganz T. Anemia of Inflammation. N Engl J Med. 2019;381(12):1148-1157.',
  'Cullis JO, Fitzsimons EJ, Griffiths WJ, et al. Investigation and management of a raised serum ferritin. Br J Haematol. 2018;181(3):331-340.',
  'Punnonen K, Irjala K, Rajamäki A. Serum transferrin receptor and its ratio to serum ferritin in the diagnosis of iron deficiency. Blood. 1997;89(3):1052-1057.',
  'Thomas C, Thomas L. Biochemical markers and hematologic indices in the diagnosis of functional iron deficiency. Clin Chem. 2002;48(7):1066-1076.',
  'KDIGO Anemia Work Group. KDIGO Clinical Practice Guideline for Anemia in Chronic Kidney Disease. Kidney Int Suppl. 2012;2(4):279-335.',
  'Babitt JL, Lin HY. Mechanisms of anemia in CKD. J Am Soc Nephrol. 2012;23(10):1631-1634.',
  'Pfeffer MA, Burdmann EA, Chen CY, et al. A trial of darbepoetin alfa in type 2 diabetes and chronic kidney disease (TREAT). N Engl J Med. 2009;361(21):2019-2032.',
  'Bohlius J, Bohlke K, Castelli R, et al. Management of cancer-associated anemia with erythropoiesis-stimulating agents: ASCO/ASH guideline update. J Clin Oncol. 2019;37(15):1336-1351.',
  'Vaupel P, Mayer A. Erythropoietin resistance in cancer patients treated with erythropoiesis-stimulating agents. Oncologist. 2013;18(2):216-225.',
  'Corwin HL, Gettinger A, Pearl RG, et al. Efficacy of recombinant human erythropoietin in critically ill patients (CRIT trial). JAMA. 2002;288(22):2827-2835.',
  'Vincent JL, Baron JF, Reinhart K, et al. Anemia and blood transfusion in critically ill patients (ABC study). JAMA. 2002;288(12):1499-1507.',
  'Camaschella C. Iron-Deficiency Anemia. N Engl J Med. 2015;372(19):1832-1843.',
  'Auerbach M, Deloughery T. Single-dose intravenous iron for iron deficiency: a new paradigm. Hematology Am Soc Hematol Educ Program. 2016;2016(1):57-66.'
];

const perfilComparativoTable = `
  <div class="table-wrap">
    <table>
      <thead><tr><th>Parámetro</th><th>AEC pura</th><th>Ferropenia verdadera</th><th>Combinada (AEC + ferropenia)</th></tr></thead>
      <tbody>
        <tr><td class="figure-org">Ferritina</td><td>Normal o alta</td><td>Baja</td><td>Normal/baja (variable, poco confiable)</td></tr>
        <tr><td class="figure-org">Hierro sérico</td><td>Bajo</td><td>Bajo</td><td>Bajo</td></tr>
        <tr><td class="figure-org">TIBC</td><td>Baja o normal</td><td>Alta</td><td>Normal o alta</td></tr>
        <tr><td class="figure-org">Saturación de transferrina</td><td>Baja-normal</td><td>Muy baja (&lt;15%)</td><td>Baja</td></tr>
        <tr><td class="figure-org">Receptor soluble de transferrina (sTfR)</td><td>Normal</td><td>Alto</td><td>Alto</td></tr>
        <tr><td class="figure-org">Índice sTfR/log ferritina</td><td>&lt;1</td><td>&gt;2</td><td>1-2 (indeterminado)</td></tr>
      </tbody>
    </table>
  </div>
  <div class="figure-grade-box">La ferritina, el marcador más útil en la ferropenia aislada, pierde fiabilidad en la AEC por su elevación como reactante de fase aguda; el índice sTfR/log ferritina (ver Escalas) es el dato que mejor resuelve la ambigüedad.</div>`;

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Anemia leve compensada (enfermedad de base estable)',
      tituloB: 'Anemia moderada-grave / enfermedad de base descompensada',
      compensada: 'Fatiga leve, con frecuencia atribuida a la enfermedad de base y no reconocida como anemia hasta el hallazgo incidental en un laboratorio de rutina; hemoglobina rara vez &lt;10-11 g/dL en la AEC pura sin otra causa concomitante.',
      descompensada: 'Fatiga marcada, disnea de esfuerzo, palidez, que pueden ser difíciles de distinguir de la descompensación de la enfermedad de base misma; una hemoglobina desproporcionadamente baja para el contexto clínico, o que empeora pese a controlar la enfermedad de base, obliga a buscar activamente una causa concomitante (ver la tarjeta de anemia combinada y la de enmascaramiento de causa tratable).'
    },
    laboratorio: [
      { prueba: 'Biometría hemática con índices eritrocitarios', utilidad: 'Anemia normocítica-normocrómica (o discretamente microcítica en casos de larga evolución), reticulocitos bajos o inapropiadamente normales.' },
      { prueba: 'Perfil de hierro completo (ferritina, hierro sérico, TIBC, saturación de transferrina)', utilidad: `Ferritina normal o elevada (reactante de fase aguda), hierro sérico bajo, TIBC baja o normal (a diferencia de la ferropenia verdadera, donde la TIBC está elevada), saturación de transferrina baja-normal.${figBlock('Tabla 1', 'Perfil de hierro: AEC vs. ferropenia vs. combinada', perfilComparativoTable)}` },
      { prueba: 'Receptor soluble de transferrina (sTfR) e índice sTfR/log ferritina (con calculadora, ver Escalas)', utilidad: 'Distingue la AEC pura de la coexistencia con ferropenia verdadera cuando la ferritina es ambigua por su condición de reactante de fase aguda.' },
      { prueba: 'Proteína C reactiva y velocidad de sedimentación globular', utilidad: 'Marcadores inespecíficos de actividad inflamatoria que apoyan el contexto, sin ser diagnósticos por sí solos.' }
    ],
    no_invasivos: [
      { metodo: 'Índice sTfR/log ferritina (con calculadora)', interpretacion: '&lt;1 → AEC pura. &gt;2 → ferropenia verdadera (con o sin AEC). 1-2 → zona indeterminada, sugestiva de anemia combinada.', cutoff: 'sTfR (mg/L) / log₁₀(ferritina, ng/mL)' },
      { metodo: 'Nivel de eritropoyetina sérica', interpretacion: 'Útil particularmente en la enfermedad renal crónica para documentar una respuesta inapropiadamente baja para el grado de anemia.', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'Ninguno diagnóstico obligatorio de rutina', hallazgos: 'Dirigido a la enfermedad de base sospechada (por ejemplo, estudio de imagen de un foco infeccioso o neoplásico no caracterizado).' },
      { modalidad: 'Endoscopia digestiva alta y colonoscopia', hallazgos: 'Si hay sospecha de una fuente de pérdida sanguínea concomitante no explicada solo por la AEC (ver la tarjeta de enmascaramiento de causa tratable).' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `El índice sTfR/log ferritina (con calculadora) es el eje diagnóstico central para distinguir la AEC pura de la coexistencia con ferropenia verdadera, particularmente cuando la ferritina por sí sola es ambigua por su condición de reactante de fase aguda.${figBlock('Imagen 2', 'Algoritmo diagnóstico: anemia en la enfermedad crónica', `
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:520px;margin:0 auto;">
      <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--ink);text-align:center;">Anemia + enfermedad crónica de base</div>
      <div style="color:var(--ink-dim);">↓</div>
      <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--ink);text-align:center;">Perfil de hierro completo → índice sTfR/log ferritina</div>
      <div style="color:var(--ink-dim);">↓</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;width:100%;">
        <div style="flex:1;min-width:140px;display:flex;flex-direction:column;align-items:center;gap:5px;">
          <div style="background:#3d5a7333;border:1px solid #3d5a73;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;width:100%;">Índice &lt;1</div>
          <div style="color:var(--ink-dim);font-size:11px;">↓</div>
          <div style="background:#3d5a7333;border:1px solid #3d5a73;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;width:100%;"><strong>AEC pura</strong><br>NO dar hierro</div>
        </div>
        <div style="flex:1;min-width:140px;display:flex;flex-direction:column;align-items:center;gap:5px;">
          <div style="background:#966b3533;border:1px solid #966b35;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;width:100%;">Índice 1-2</div>
          <div style="color:var(--ink-dim);font-size:11px;">↓</div>
          <div style="background:#966b3533;border:1px solid #966b35;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;width:100%;"><strong>Combinada</strong><br>Investigar causa + SÍ dar hierro</div>
        </div>
        <div style="flex:1;min-width:140px;display:flex;flex-direction:column;align-items:center;gap:5px;">
          <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;width:100%;">Índice &gt;2</div>
          <div style="color:var(--ink-dim);font-size:11px;">↓</div>
          <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;width:100%;"><strong>Ferropenia verdadera</strong><br>Investigar pérdida + SÍ dar hierro</div>
        </div>
      </div>
    </div>
    <div class="figure-grade-box">Un solo número (el índice sTfR/log ferritina) separa las 3 conductas terapéuticas radicalmente distintas de esta sección: no dar hierro, investigar y dar hierro, o solo dar hierro.</div>`)}`,
    escalas: [
      { nombre: 'Índice sTfR/log ferritina', componentes: 'Receptor soluble de transferrina (sTfR) sérico, ferritina sérica. Calculadora disponible más abajo.', formula: 'sTfR (mg/L) / log₁₀(ferritina, ng/mL).', interpretacion: '&lt;1: AEC pura, sin ferropenia. &gt;2: ferropenia verdadera (con o sin AEC concomitante). 1-2: zona indeterminada, sugestiva de anemia combinada (ver Tabla 1 en Diagnóstico).' },
      { nombre: 'Perfil de hierro comparativo (AEC vs. ferropenia vs. combinada)', componentes: 'Ferritina, hierro sérico, TIBC, saturación de transferrina, sTfR.', formula: 'Interpretación categórica combinada, ver Tabla 1 en Diagnóstico.', interpretacion: 'La TIBC (baja-normal en AEC, alta en ferropenia verdadera) y la saturación de transferrina son, junto al índice sTfR/log ferritina, los datos más útiles para distinguir las 3 categorías.' },
      { nombre: 'Criterios KDIGO de anemia en enfermedad renal crónica', componentes: 'Tasa de filtración glomerular estimada, hemoglobina, perfil de hierro.', formula: 'Umbrales categóricos de la guía KDIGO para el estudio y el tratamiento dirigido.', interpretacion: 'Guía cuándo investigar y tratar la anemia en la enfermedad renal crónica, y recomienda corregir la ferropenia concomitante antes o junto con cualquier agente estimulante de la eritropoyesis (ver esa tarjeta en Complicaciones).' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Anemia de la enfermedad crónica clásica',
      color: '#3d5a73',
      definicion: 'Anemia normocítica-normocrómica leve-moderada mediada por la respuesta inflamatoria sistémica ante una infección crónica, una enfermedad autoinmune/inflamatoria activa, o una neoplasia, sin deficiencia absoluta de hierro corporal ni causa hemolítica o carencial concomitante; la forma "pura" de esta sección, sin el componente renal, combinado o agudo de las otras 3 tarjetas.',
      fisiopatologia: 'La inflamación sistémica activa, mediada principalmente por interleucina-6, estimula la producción hepática de hepcidina; la hepcidina elevada degrada la ferroportina y atrapa el hierro dentro de los macrófagos del sistema reticuloendotelial, bloqueando su liberación hacia la eritropoyesis pese a depósitos corporales totales normales o aumentados. Las citocinas inflamatorias (interleucina-1, factor de necrosis tumoral alfa, interferón gamma) suprimen además directamente la proliferación de los progenitores eritroides en la médula ósea, reducen la producción y la sensibilidad renal a la eritropoyetina, y acortan discretamente la supervivencia del eritrocito maduro por activación del sistema reticuloendotelial.',
      epidemiologia: 'La segunda causa más frecuente de anemia en el mundo, después de la ferropénica; ocurre en una proporción relevante de los pacientes con artritis reumatoide, lupus eritematoso sistémico, enfermedad inflamatoria intestinal activa, infecciones crónicas (tuberculosis, endocarditis, osteomielitis, VIH no controlado) o neoplasia activa de cualquier tipo.',
      factores_riesgo: ['Enfermedad autoinmune/inflamatoria crónica activa (artritis reumatoide, lupus, enfermedad inflamatoria intestinal)', 'Infección crónica no controlada (tuberculosis, endocarditis, osteomielitis, VIH)', 'Neoplasia activa, sólida o hematológica', 'Mayor duración y actividad de la enfermedad de base'],
      clinica: 'Con frecuencia asintomática o con síntomas indistinguibles de los de la enfermedad de base (fatiga, disminución de la capacidad funcional); la anemia se detecta habitualmente de forma incidental en un laboratorio de control de la enfermedad crónica conocida.',
      criterios_dx: 'Anemia normocítica-normocrómica leve-moderada, con ferritina normal o elevada, hierro sérico bajo, TIBC baja-normal (a diferencia de la ferropenia verdadera), en el contexto de una enfermedad inflamatoria/infecciosa/neoplásica activa identificada, tras excluir razonablemente otras causas concomitantes.',
      laboratorio: 'Ferritina normal/elevada, hierro sérico bajo, TIBC baja-normal, saturación de transferrina baja-normal; índice sTfR/log ferritina &lt;1 (ver Escalas); proteína C reactiva y velocidad de sedimentación elevadas, reflejando la actividad inflamatoria de la enfermedad de base.',
      imagen: 'Ninguno diagnóstico obligatorio de rutina; dirigido a caracterizar o vigilar la enfermedad de base identificada.',
      complementarios: 'Marcadores de actividad específicos de la enfermedad de base (por ejemplo, DAS28 en artritis reumatoide, actividad endoscópica en enfermedad inflamatoria intestinal), dado que el grado de anemia con frecuencia se correlaciona con el grado de actividad inflamatoria.',
      dx_diferencial: 'Anemia ferropénica verdadera (ferritina baja, TIBC elevada, índice sTfR/log ferritina &gt;2, ver el tema de Anemia Ferropénica), anemia combinada (índice sTfR/log ferritina indeterminado 1-2, ver esa tarjeta), anemia megaloblástica concomitante (VCM elevado, ver ese tema).',
      tx_medico: 'Tratamiento dirigido y óptimo de la enfermedad de base (control de la actividad inflamatoria, erradicación de la infección, tratamiento oncológico), la medida más eficaz para corregir la anemia, dado que su mecanismo depende directamente de la inflamación activa.',
      tx_farmacologico: 'NO indicar hierro (oral ni intravenoso) en la AEC pura sin ferropenia verdadera concomitante, dado que el hierro ya está presente en los depósitos y su administración no corrige el mecanismo (bloqueo por hepcidina) ni mejora la anemia, con el riesgo adicional de sobrecarga de hierro (ver Complicaciones); agentes estimulantes de la eritropoyesis considerados en casos seleccionados con anemia sintomática significativa y enfermedad de base que no puede controlarse rápidamente (particularmente en el contexto oncológico, con las precauciones de esa indicación, ver Complicaciones).',
      tx_intervencionista: 'Transfusión de concentrado eritrocitario reservada para la anemia sintomática grave, no como manejo de rutina de la AEC leve-moderada.',
      criterios_uci: 'Anemia sintomática grave con inestabilidad hemodinámica, habitualmente en el contexto de una descompensación aguda de la enfermedad de base.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la hemoglobina en paralelo con los marcadores de actividad de la enfermedad de base.',
      seguimiento_ambulatorio: 'Reevaluación periódica de la hemoglobina junto con el control de la enfermedad de base; la anemia debería mejorar en paralelo con el control adecuado de la actividad inflamatoria/infecciosa/neoplásica.',
      pronostico: 'Favorable en cuanto a la anemia en sí, que tiende a mejorar o resolverse con el control adecuado de la enfermedad de base; el pronóstico global depende, en última instancia, del curso de esa enfermedad de base, no de la anemia por sí misma.',
      algoritmo: ['Anemia normocítica-normocrómica leve-moderada + enfermedad inflamatoria/infecciosa/neoplásica activa → sospechar AEC', 'Perfil de hierro: ferritina normal/alta, TIBC baja-normal → apoya AEC sobre ferropenia verdadera', 'Índice sTfR/log ferritina &lt;1 si hay duda diagnóstica', 'Tratamiento dirigido y óptimo de la enfermedad de base como medida central', 'NO indicar hierro sin ferropenia verdadera confirmada']
    },
    {
      nombre: 'Anemia de la enfermedad renal crónica',
      color: '#6b4a2e',
      definicion: 'Anemia que combina el mecanismo inflamatorio de la AEC clásica con una deficiencia relativa verdadera de eritropoyetina, propia de la enfermedad renal crónica, particularmente en sus estadios avanzados; una de las causas más frecuentes y mejor caracterizadas de anemia crónica en la práctica de medicina interna.',
      fisiopatologia: 'El riñón enfermo pierde progresivamente la capacidad de las células peritubulares productoras de eritropoyetina para aumentar su producción de forma proporcional al grado de anemia (a diferencia del riñón sano, donde la hipoxia tisular estimula un aumento marcado y apropiado de la eritropoyetina); a este déficit relativo de eritropoyetina se suma el mismo mecanismo inflamatorio mediado por hepcidina de la AEC clásica (la enfermedad renal crónica es, en sí misma, un estado proinflamatorio de bajo grado, y la hepcidina además se acumula por la reducción de su aclaramiento renal). El resultado es una anemia de mecanismo doble, más profunda y más difícil de corregir solo con el manejo de la enfermedad de base que la AEC clásica sin componente renal.',
      epidemiologia: 'La prevalencia de anemia aumenta progresivamente con el deterioro de la tasa de filtración glomerular, siendo casi universal en la enfermedad renal crónica estadio 5/diálisis si no se trata de forma dirigida.',
      factores_riesgo: ['Tasa de filtración glomerular reducida, particularmente estadios 4-5', 'Diabetes mellitus como causa de la enfermedad renal crónica (asociada a anemia más temprana y más grave)', 'Inflamación sistémica superpuesta (infección, enfermedad autoinmune concomitante)', 'Deficiencia de hierro concomitante no corregida (ver la tarjeta de anemia combinada)'],
      clinica: 'Igual que el cuadro general de AEC (fatiga, disnea de esfuerzo), con frecuencia superpuesto a los síntomas de la enfermedad renal crónica misma; la anemia puede ser más profunda que en la AEC clásica sin componente renal, particularmente en estadios avanzados no tratados.',
      criterios_dx: 'Anemia normocítica-normocrómica en el contexto de una tasa de filtración glomerular reducida (habitualmente &lt;60 mL/min/1.73m² de forma sostenida), tras excluir razonablemente otras causas concomitantes (ferropenia verdadera, deficiencia de B12/folato, pérdida sanguínea activa).',
      laboratorio: 'Perfil de hierro similar al de la AEC clásica; nivel de eritropoyetina sérica inapropiadamente bajo o normal-bajo para el grado de anemia (un hallazgo de interpretación clínica más que un umbral diagnóstico estricto); función renal (creatinina, tasa de filtración glomerular estimada) documentando el grado de enfermedad renal crónica.',
      imagen: 'Ecografía renal si no se ha caracterizado previamente la enfermedad renal crónica de base.',
      complementarios: 'Perfil de hierro completo y estudio de ferropenia concomitante de rutina antes de iniciar cualquier agente estimulante de la eritropoyesis, dado que la ferropenia no corregida reduce marcadamente la eficacia de estos agentes.',
      dx_diferencial: 'AEC clásica sin componente renal significativo (tasa de filtración glomerular conservada), anemia combinada con ferropenia verdadera superpuesta (índice sTfR/log ferritina indeterminado o alto, ver esa tarjeta).',
      tx_medico: 'Corrección de la ferropenia concomitante (frecuente en la enfermedad renal crónica, por pérdidas ocultas y menor absorción intestinal) ANTES o junto con el inicio de un agente estimulante de la eritropoyesis, dado que mejora sustancialmente su eficacia.',
      tx_farmacologico: 'Agentes estimulantes de la eritropoyesis (epoetina, darbepoetina) como tratamiento dirigido de elección cuando la anemia es sintomática y el componente de deficiencia de eritropoyetina es relevante, con un objetivo de hemoglobina moderado (no normalización completa, dado el riesgo cardiovascular asociado a objetivos más altos, ver Complicaciones); hierro intravenoso frecuentemente necesario como complemento, dado que la ferropenia funcional/absoluta es común en este contexto.',
      tx_intervencionista: 'Transfusión de concentrado eritrocitario reservada para la anemia sintomática grave o cuando los agentes estimulantes de la eritropoyesis están contraindicados o no son eficaces.',
      criterios_uci: 'Igual que la AEC clásica, según la gravedad de la descompensación asociada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'El trasplante renal, cuando está indicado por la enfermedad renal de base, corrige de forma sustancial y sostenida esta forma de anemia al restaurar la producción endógena de eritropoyetina.',
      seguimiento_hospitalario: 'Vigilancia de la hemoglobina y del perfil de hierro durante el ajuste de dosis de cualquier agente estimulante de la eritropoyesis iniciado.',
      seguimiento_ambulatorio: 'Vigilancia periódica de la hemoglobina y el perfil de hierro según el esquema de manejo de la enfermedad renal crónica; ajuste de la dosis del agente estimulante de la eritropoyesis según la respuesta, evitando objetivos de hemoglobina demasiado altos.',
      pronostico: 'La anemia mejora de forma sustancial con el tratamiento dirigido (hierro más agente estimulante de la eritropoyesis según el caso); el trasplante renal exitoso, cuando es una opción, ofrece la corrección más completa y sostenida.',
      algoritmo: ['Anemia normocítica-normocrómica + tasa de filtración glomerular reducida sostenida → sospechar anemia de la enfermedad renal crónica', 'Corregir la ferropenia concomitante (frecuente en este contexto) antes o junto con cualquier tratamiento dirigido', 'Anemia sintomática con componente relevante de déficit de eritropoyetina → agente estimulante de la eritropoyesis, objetivo de hemoglobina moderado', 'Hierro intravenoso frecuentemente necesario como complemento', 'Trasplante renal, cuando es una opción, corrige la anemia de forma más completa y sostenida']
    },
    {
      nombre: 'Anemia combinada con ferropenia verdadera',
      color: '#966b35',
      definicion: 'Coexistencia de anemia de la enfermedad crónica con un déficit absoluto de hierro corporal (por pérdida sanguínea crónica, aporte insuficiente, o malabsorción, ver el tema de Anemia Ferropénica), el escenario diagnóstico más desafiante de esta sección, dado que los marcadores de laboratorio de ambas entidades se superponen y pueden enmascararse mutuamente.',
      fisiopatologia: 'En esta forma combinada, los 2 mecanismos coexisten y se potencian: el componente inflamatorio (hepcidina elevada) secuestra el hierro disponible, mientras que el componente carencial verdadero reduce además el hierro corporal total; la ferritina, el marcador de depósito habitualmente más útil para diagnosticar ferropenia, pierde utilidad en este contexto porque su elevación como reactante de fase aguda por la inflamación puede enmascarar un depósito de hierro corporal total realmente bajo, dando una falsa impresión de depósitos adecuados.',
      epidemiologia: 'Frecuente en el paciente con enfermedad inflamatoria intestinal (donde la inflamación de la mucosa produce tanto el componente de AEC como pérdida sanguínea digestiva directa), en la enfermedad renal crónica (ver esa tarjeta), y en cualquier paciente con enfermedad crónica de base que además tiene una fuente de pérdida sanguínea concomitante (por ejemplo, menorragia, uso de AINE) no reconocida.',
      factores_riesgo: ['Enfermedad inflamatoria intestinal activa (mecanismo combinado directo)', 'Pérdida sanguínea crónica concomitante no reconocida (digestiva, ginecológica)', 'Enfermedad renal crónica con ferropenia superpuesta', 'Dieta insuficiente en hierro superpuesta a una enfermedad crónica inflamatoria de base'],
      clinica: 'Igual que el cuadro general de AEC, con frecuencia una anemia más profunda que la esperada solo por el grado de actividad de la enfermedad crónica de base, un dato que debe hacer sospechar activamente esta forma combinada.',
      criterios_dx: 'Anemia desproporcionadamente profunda para el grado de actividad de la enfermedad crónica de base, con un índice sTfR/log ferritina en la zona indeterminada (1-2) o francamente elevado (&gt;2) pese a una ferritina no claramente baja (ver Escalas), en el contexto de un factor de riesgo identificado para pérdida sanguínea o aporte insuficiente concomitantes.',
      laboratorio: 'Ferritina variable (normal, límite baja, o incluso elevada pese a ferropenia verdadera subyacente, por el efecto de reactante de fase aguda); índice sTfR/log ferritina indeterminado o elevado (ver Escalas), el dato de laboratorio más útil para sospechar esta forma combinada cuando la ferritina por sí sola es ambigua.',
      imagen: 'Estudio dirigido a identificar la fuente de pérdida sanguínea concomitante sospechada (endoscopia digestiva, evaluación ginecológica, según el contexto clínico), igual que en la anemia ferropénica pura (ver ese tema).',
      complementarios: 'Interconsulta con el especialista tratante de la enfermedad crónica de base para investigar activamente una fuente de pérdida sanguínea concomitante no reconocida.',
      dx_diferencial: 'AEC pura sin componente carencial (índice sTfR/log ferritina &lt;1, ver esa tarjeta), ferropenia verdadera pura sin AEC significativa (ferritina claramente baja, TIBC elevada, sin enfermedad inflamatoria/infecciosa/neoplásica activa relevante, ver el tema de Anemia Ferropénica).',
      tx_medico: 'Investigación activa y tratamiento de la fuente de pérdida sanguínea o del aporte insuficiente identificados, en paralelo con el manejo de la enfermedad crónica de base.',
      tx_farmacologico: 'Reposición de hierro (oral si la vía es tolerada y no hay malabsorción significativa; intravenosa si la inflamación activa reduce marcadamente la absorción intestinal, un escenario frecuente en esta forma combinada), a diferencia de la AEC pura donde el hierro está contraindicado; el hierro intravenoso con frecuencia es la vía preferida en la enfermedad inflamatoria intestinal activa, dado que el hierro oral puede exacerbar los síntomas digestivos y su absorción está reducida por la inflamación de la mucosa.',
      tx_intervencionista: 'Tratamiento endoscópico o quirúrgico dirigido a la fuente de sangrado identificada, igual que en la ferropenia verdadera pura.',
      criterios_uci: 'Igual que la AEC clásica, según la gravedad de la anemia y de la enfermedad de base.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta a la reposición de hierro en paralelo con el control de la enfermedad de base.',
      seguimiento_ambulatorio: 'Reevaluación del perfil de hierro y la hemoglobina a las 4-8 semanas de la reposición; vigilancia de recurrencia si la fuente de pérdida sanguínea no fue completamente corregible.',
      pronostico: 'Favorable si se identifica y corrige la fuente de pérdida sanguínea o el aporte insuficiente concomitantes, además de controlar la enfermedad de base; la anemia persiste si solo se trata uno de los 2 componentes.',
      algoritmo: ['Anemia desproporcionadamente profunda para la actividad de la enfermedad crónica de base → sospechar forma combinada', 'Índice sTfR/log ferritina indeterminado o elevado pese a ferritina no claramente baja → apoya el componente carencial verdadero', 'Investigar activamente una fuente de pérdida sanguínea o aporte insuficiente concomitantes', 'Reposición de hierro (oral o IV según tolerancia/absorción) en paralelo con el manejo de la enfermedad de base', 'A diferencia de la AEC pura, aquí SÍ está indicado reponer hierro']
    },
    {
      nombre: 'Anemia del paciente crítico/hospitalizado',
      color: '#7a1f3d',
      definicion: 'Variante aguda y acelerada del mecanismo inflamatorio de la AEC, característica del paciente hospitalizado, particularmente en la unidad de cuidados intensivos, agravada por la flebotomía diagnóstica repetida y la supresión directa y aguda de la eritropoyesis por la respuesta inflamatoria sistémica de la enfermedad crítica.',
      fisiopatologia: 'La respuesta inflamatoria sistémica aguda del paciente crítico (sepsis, trauma mayor, cirugía extensa, quemaduras) produce una elevación muy marcada y rápida de hepcidina (más pronunciada y de instalación más rápida que en la AEC crónica clásica), bloqueando la disponibilidad de hierro para la eritropoyesis en un plazo de días, no de semanas; a esto se suma la supresión directa de la eritropoyesis por las citocinas inflamatorias agudas, una respuesta inapropiadamente baja de eritropoyetina para el grado de anemia, y la pérdida sanguínea acumulada por la flebotomía diagnóstica repetida (con frecuencia varias decenas de mililitros por día en el paciente con monitorización de laboratorio intensiva), un componente iatrogénico reconocido y en gran medida prevenible.',
      epidemiologia: 'La anemia es prácticamente universal en el paciente de cuidados intensivos con estancia prolongada, y es un contribuyente reconocido y frecuente a la necesidad transfusional en este contexto.',
      factores_riesgo: ['Enfermedad crítica con respuesta inflamatoria sistémica aguda (sepsis, trauma mayor, cirugía extensa)', 'Flebotomía diagnóstica repetida y frecuente', 'Estancia prolongada en la unidad de cuidados intensivos', 'Insuficiencia renal aguda superpuesta (componente adicional de déficit de eritropoyetina)'],
      clinica: 'Con frecuencia asintomática en el contexto de la enfermedad crítica de base (los síntomas de esta dominan el cuadro); reconocida principalmente por el hallazgo de laboratorio y por la necesidad transfusional creciente durante la estancia hospitalaria.',
      criterios_dx: 'Anemia normocítica-normocrómica de instalación aguda o subaguda durante una hospitalización por enfermedad crítica, con caída progresiva de la hemoglobina no explicada completamente por sangrado activo evidente ni por hemodilución por reanimación con líquidos.',
      laboratorio: 'Perfil de hierro similar al de la AEC clásica, con frecuencia con una elevación de hepcidina y ferritina más marcada y de instalación más rápida; reticulocitos bajos o inapropiadamente normales para el grado de anemia.',
      imagen: 'Dirigido a descartar una fuente de sangrado activo no reconocido si la caída de hemoglobina es más rápida o profunda de lo esperado solo por este mecanismo.',
      complementarios: 'Cuantificación acumulada del volumen de sangre extraído por flebotomía diagnóstica durante la estancia, un dato con frecuencia subestimado y clínicamente relevante para explicar la magnitud de la anemia.',
      dx_diferencial: 'Sangrado activo no reconocido (que requiere descartarse activamente antes de atribuir toda la caída de hemoglobina a este mecanismo), hemólisis aguda de otra causa (haptoglobina, LDH, bilirrubina, frotis), otras citopenias asociadas a fármacos del paciente crítico.',
      tx_medico: 'Minimizar el volumen y la frecuencia de la flebotomía diagnóstica a lo estrictamente necesario (uso de tubos de volumen reducido, agrupar solicitudes de laboratorio cuando sea clínicamente razonable), la medida preventiva más simple y de mayor impacto acumulado en este contexto.',
      tx_farmacologico: 'El uso rutinario de agentes estimulantes de la eritropoyesis en el paciente crítico general NO ha demostrado un beneficio consistente en mortalidad y se asocia a mayor riesgo trombótico (ver Complicaciones), por lo que no se recomienda de forma sistemática fuera de indicaciones específicas ya establecidas (por ejemplo, enfermedad renal crónica de base); el hierro intravenoso se reserva para la ferropenia verdadera documentada concomitante, no para la AEC aguda pura del paciente crítico.',
      tx_intervencionista: 'Transfusión de concentrado eritrocitario con un umbral restrictivo (habitualmente Hb &lt;7 g/dL en el paciente crítico hemodinámicamente estable sin cardiopatía isquémica activa), dado que los umbrales liberales no han demostrado beneficio y se asocian a mayores riesgos asociados a la transfusión.',
      criterios_uci: 'Ya en UCI por definición de esta tarjeta; criterio de transfusión urgente si hay inestabilidad hemodinámica atribuible a la anemia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia diaria de la hemoglobina en el paciente crítico, con revisión activa de la necesidad real de cada estudio de laboratorio solicitado para minimizar la flebotomía acumulada.',
      seguimiento_ambulatorio: 'Reevaluación de la hemoglobina tras el alta hospitalaria; la anemia de la enfermedad crítica tiende a mejorar gradualmente conforme se resuelve la respuesta inflamatoria aguda, salvo que persista una causa crónica de base.',
      pronostico: 'Con frecuencia se resuelve gradualmente tras la resolución de la enfermedad crítica aguda; contribuye de forma reconocida a la necesidad transfusional y a la estancia hospitalaria prolongada mientras persiste.',
      algoritmo: ['Caída progresiva de hemoglobina durante una hospitalización por enfermedad crítica, sin sangrado activo evidente → sospechar este mecanismo', 'Descartar activamente sangrado no reconocido y hemólisis de otra causa', 'Minimizar la flebotomía diagnóstica a lo estrictamente necesario', 'Transfusión con umbral restrictivo (Hb &lt;7 g/dL) si es necesaria', 'No usar agentes estimulantes de la eritropoyesis de rutina en el paciente crítico general']
    },
    {
      nombre: 'Ferropenia funcional / sobretratamiento con hierro en AEC pura',
      color: '#8c3a34',
      definicion: 'Complicación diagnóstico-terapéutica en la que se administra hierro (oral o intravenoso) a un paciente con AEC pura sin ferropenia verdadera concomitante, con base en una interpretación errónea del perfil de hierro (particularmente una ferritina "límite" mal interpretada como baja pese a su elevación esperada como reactante de fase aguda), sin beneficio hematológico y con riesgos innecesarios.',
      fisiopatologia: 'En la AEC pura, el hierro corporal total es normal o está incluso aumentado, pero funcionalmente secuestrado por la hepcidina elevada; administrar más hierro no corrige ese bloqueo (el mecanismo del problema no es la cantidad de hierro disponible, sino su acceso), por lo que no mejora la anemia de forma significativa. El hierro administrado sin necesidad real se acumula en los depósitos ya replecionados, con el riesgo teórico adicional de que el hierro libre no utilizado favorezca el crecimiento de microorganismos patógenos (varios de los cuales requieren hierro para su proliferación) en el paciente con infección crónica activa como causa de la AEC, un mecanismo biológicamente plausible aunque con evidencia clínica de magnitud variable según el contexto.',
      epidemiologia: 'Riesgo reconocido cuando se interpreta el perfil de hierro sin considerar el contexto inflamatorio, particularmente con una ferritina en el rango límite-bajo que en realidad representa depósitos adecuados o incluso aumentados dado el efecto de reactante de fase aguda.',
      factores_riesgo: ['Interpretación de una ferritina límite como "baja" sin considerar su elevación esperada como reactante de fase aguda', 'No solicitar el índice sTfR/log ferritina cuando la ferritina es ambigua', 'Indicación de hierro empírico sin estudio de hierro completo previo, basada solo en la presencia de anemia y enfermedad crónica'],
      clinica: 'Sin manifestaciones clínicas propias directas; el problema es la falta de respuesta hematológica al hierro administrado sin indicación real, y potencialmente la acumulación de depósitos de hierro ya normales/aumentados.',
      criterios_dx: 'Ausencia de respuesta hematológica significativa tras un ensayo adecuado de hierro (oral o intravenoso) en un paciente cuyo perfil de hierro, reinterpretado en el contexto inflamatorio, es compatible con AEC pura (índice sTfR/log ferritina &lt;1, ver Escalas).',
      laboratorio: 'Ferritina normal/elevada pese al hierro administrado (sin la elevación adicional marcada esperada de una repleción real de depósitos previamente bajos), índice sTfR/log ferritina &lt;1 confirmando la ausencia de ferropenia verdadera de base.',
      imagen: 'No aplica de forma directa.',
      complementarios: 'Revisión retrospectiva del perfil de hierro completo (no solo la ferritina aislada) antes de haber indicado el hierro, para identificar el punto de la interpretación errónea.',
      dx_diferencial: 'Ferropenia verdadera con respuesta subóptima al hierro por mala adherencia o malabsorción no reconocida (ver el tema de Anemia Ferropénica), anemia combinada con un componente carencial real que sí justificaba la reposición (ver esa tarjeta).',
      tx_medico: 'Suspender el hierro sin indicación real una vez reconocido el error, y reorientar el manejo hacia el control de la enfermedad de base.',
      tx_farmacologico: 'Ninguno específico; la medida es dejar de administrar hierro innecesario, no un tratamiento adicional.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma directa.',
      seguimiento_ambulatorio: 'Documentación clara en el expediente de que el perfil de hierro corresponde a AEC pura, para evitar reindicaciones futuras de hierro sin justificación.',
      pronostico: 'Sin consecuencias hematológicas mayores en la mayoría de los casos de sobretratamiento reconocido y corregido a tiempo; el riesgo teórico de favorecer una infección activa mediante hierro no utilizado respalda evitar esta práctica de forma sistemática.',
      algoritmo: ['Anemia + enfermedad crónica + perfil de hierro ambiguo → calcular el índice sTfR/log ferritina antes de indicar hierro', 'Índice &lt;1 → AEC pura, NO indicar hierro', 'Si ya se indicó hierro sin respuesta hematológica → reinterpretar el perfil de hierro en el contexto inflamatorio', 'Suspender el hierro innecesario una vez confirmada la ausencia de ferropenia verdadera', 'Reorientar el manejo hacia el control de la enfermedad de base']
    },
    {
      nombre: 'Riesgos de los agentes estimulantes de la eritropoyesis',
      color: '#5c3d5c',
      definicion: 'Complicación del tratamiento con agentes estimulantes de la eritropoyesis (epoetina, darbepoetina), indicados en la anemia de la enfermedad renal crónica y, en casos seleccionados, en la anemia asociada a cáncer; incluye mayor riesgo trombótico, posible efecto sobre la progresión tumoral en el paciente oncológico activo, e hipertensión arterial.',
      fisiopatologia: 'Los agentes estimulantes de la eritropoyesis, al elevar la hemoglobina y el hematocrito, aumentan la viscosidad sanguínea y activan directamente receptores de eritropoyetina presentes en plaquetas y células endoteliales, incrementando el riesgo de eventos trombóticos venosos y arteriales, particularmente cuando el objetivo de hemoglobina es más alto de lo recomendado. En el paciente oncológico, receptores de eritropoyetina expresados en algunas líneas celulares tumorales han generado la preocupación teórica y, en algunos ensayos clínicos, la señal observada de un posible efecto estimulante sobre la progresión tumoral y una menor supervivencia global cuando estos agentes se usan con un objetivo de normalización completa de la hemoglobina en vez de un umbral sintomático moderado.',
      epidemiologia: 'El riesgo trombótico es mayor con objetivos de hemoglobina más altos, tanto en la enfermedad renal crónica (demostrado en varios ensayos clínicos aleatorizados) como en el contexto oncológico; la señal de progresión tumoral se ha observado predominantemente en ensayos con objetivos de hemoglobina cercanos a la normalización completa, no con el uso dirigido a un umbral sintomático más conservador.',
      factores_riesgo: ['Objetivo de hemoglobina demasiado alto (normalización completa en vez de un umbral moderado)', 'Antecedente de evento trombótico previo', 'Neoplasia activa no controlada (para el riesgo de progresión tumoral)', 'Hipertensión arterial mal controlada de base'],
      clinica: 'Evento trombótico venoso o arterial (trombosis venosa profunda, tromboembolia pulmonar, eventos cardiovasculares), empeoramiento o aparición de hipertensión arterial de difícil control, progresión tumoral más rápida de lo esperado en el paciente oncológico bajo tratamiento con estos agentes con objetivo agresivo de hemoglobina.',
      criterios_dx: 'Clínico, en el contexto temporal de tratamiento con un agente estimulante de la eritropoyesis, particularmente con un objetivo de hemoglobina alto.',
      laboratorio: 'Hemoglobina/hematocrito de control seriados para verificar que no se supere el objetivo recomendado; estudio dirigido según el evento clínico sospechado (dímero D, angio-TC según el sitio de trombosis sospechado).',
      imagen: 'Dirigida al sitio de trombosis sospechado (Doppler venoso, angio-TC de tórax) si hay sospecha clínica de un evento trombótico.',
      complementarios: 'Revisión del objetivo de hemoglobina establecido y de la dosis acumulada del agente estimulante de la eritropoyesis utilizado.',
      dx_diferencial: 'Trombosis de otra causa no relacionada con el agente estimulante de la eritropoyesis (debe considerarse el contexto clínico completo, no atribuir automáticamente todo evento trombótico al fármaco), progresión tumoral por la historia natural de la neoplasia sin relación causal con el tratamiento.',
      tx_medico: 'Mantener un objetivo de hemoglobina moderado (habitualmente 10-11.5 g/dL, evitando la normalización completa) como la medida preventiva central, tanto en la enfermedad renal crónica como en el contexto oncológico.',
      tx_farmacologico: 'Suspender o reducir la dosis del agente estimulante de la eritropoyesis si se supera el objetivo de hemoglobina recomendado o si ocurre un evento trombótico atribuible; anticoagulación según el manejo estándar del evento trombótico confirmado.',
      tx_intervencionista: 'Según el manejo estándar del evento trombótico específico (por ejemplo, trombólisis o trombectomía en casos seleccionados de tromboembolia mayor).',
      criterios_uci: 'Evento trombótico mayor con compromiso hemodinámico o respiratorio (tromboembolia pulmonar masiva, evento cardiovascular agudo).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la hemoglobina para no superar el objetivo recomendado durante el ajuste de dosis.',
      seguimiento_ambulatorio: 'Vigilancia periódica de la hemoglobina y de la presión arterial en todo paciente bajo tratamiento con un agente estimulante de la eritropoyesis.',
      pronostico: 'El riesgo es en gran medida prevenible manteniendo un objetivo de hemoglobina moderado y evitando la normalización completa; una vez ocurrido un evento trombótico, el pronóstico depende del sitio y la magnitud del evento, manejado según su protocolo estándar.',
      algoritmo: ['Indicación de un agente estimulante de la eritropoyesis → establecer objetivo de hemoglobina moderado desde el inicio (10-11.5 g/dL)', 'Vigilancia periódica de hemoglobina, presión arterial, y síntomas sugestivos de trombosis', 'Hemoglobina que supera el objetivo → reducir dosis o suspender temporalmente', 'Evento trombótico atribuible → suspender el agente y manejar el evento según su protocolo estándar', 'En el paciente oncológico activo, usar el umbral sintomático más conservador posible']
    },
    {
      nombre: 'Sobrecarga de hierro transfusional',
      color: '#8a6a1f',
      definicion: 'Complicación tardía de la dependencia transfusional crónica, reconocida en el paciente con AEC de curso prolongado (particularmente enfermedad renal crónica avanzada o enfermedad inflamatoria crónica grave) que no responde adecuadamente al tratamiento dirigido de la enfermedad de base ni a los agentes estimulantes de la eritropoyesis y requiere transfusiones repetidas a largo plazo; comparte el mismo mecanismo y manejo que en otras anemias crónicas transfusión-dependientes (ver los temas de Anemia Aplásica y Anemias Hemolíticas Hereditarias para el desarrollo completo de esta entidad).',
      fisiopatologia: 'Cada unidad de concentrado eritrocitario aporta hierro que el organismo no tiene un mecanismo fisiológico eficiente para excretar activamente; con transfusiones repetidas a largo plazo, el hierro se acumula progresivamente en el sistema reticuloendotelial y, al superar su capacidad de almacenamiento, en el parénquima de órganos vulnerables (hígado, corazón, glándulas endocrinas), agravado en el contexto específico de la AEC por la disponibilidad ya reducida de mecanismos de utilización del hierro (dado el bloqueo funcional por hepcidina), lo que puede favorecer una acumulación relativa incluso más marcada en los depósitos del sistema reticuloendotelial.',
      epidemiologia: 'El riesgo es proporcional al número acumulado de unidades transfundidas a lo largo del tiempo; relevante sobre todo en el paciente con AEC de curso muy prolongado y respuesta limitada al tratamiento dirigido de la enfermedad de base y a los agentes estimulantes de la eritropoyesis.',
      factores_riesgo: ['Dependencia transfusional crónica (más de 10-20 unidades acumuladas, umbral orientativo)', 'Enfermedad de base de curso muy prolongado sin buen control', 'Respuesta limitada o contraindicación a los agentes estimulantes de la eritropoyesis', 'Ausencia de vigilancia sistemática de ferritina en el paciente con transfusiones repetidas'],
      clinica: 'Con frecuencia asintomática hasta fases avanzadas; fatiga, hiperpigmentación cutánea, hepatomegalia, disfunción endocrina (diabetes, hipogonadismo, hipotiroidismo), miocardiopatía restrictiva/dilatada por depósito cardiaco de hierro en fases avanzadas no vigiladas.',
      criterios_dx: 'Ferritina sérica elevada de forma sostenida en el contexto de transfusiones repetidas (con la salvedad de que la ferritina ya está fisiológicamente elevada por la inflamación de base en la AEC, lo que obliga a interpretar su tendencia y magnitud con cautela adicional en este contexto específico), con cuantificación no invasiva de la carga de hierro hepática y cardiaca por RM (T2*) cuando hay duda diagnóstica genuina.',
      laboratorio: 'Ferritina sérica seriada (interpretada con cautela por su elevación basal esperada en la AEC), saturación de transferrina.',
      imagen: 'RM hepática y cardiaca con secuencia T2* para cuantificar de forma no invasiva la carga de hierro en cada órgano cuando la interpretación de la ferritina es dudosa por el contexto inflamatorio de base.',
      complementarios: 'Evaluación endocrina dirigida si hay sospecha clínica de disfunción endocrina asociada.',
      dx_diferencial: 'Elevación de ferritina exclusivamente por la actividad inflamatoria de la enfermedad de base, sin verdadera sobrecarga de hierro corporal (RM T2* normal pese a ferritina elevada).',
      tx_medico: 'Vigilancia sistemática de ferritina (interpretada en el contexto de la actividad inflamatoria de base) en todo paciente con transfusiones repetidas por AEC de curso prolongado.',
      tx_farmacologico: 'Quelantes de hierro (deferasirox oral, deferoxamina parenteral, deferiprona) una vez confirmada la sobrecarga real por RM T2*, ajustados según la carga de hierro cuantificada y la tolerancia individual.',
      tx_intervencionista: 'Ninguno específico más allá de la quelación farmacológica; optimizar el tratamiento dirigido de la enfermedad de base y, cuando sea aplicable, los agentes estimulantes de la eritropoyesis, es la medida más eficaz para reducir la necesidad transfusional futura.',
      criterios_uci: 'No aplica de forma directa, salvo miocardiopatía por sobrecarga de hierro con descompensación grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico salvo complicación de órgano establecida.',
      seguimiento_ambulatorio: 'Ferritina (interpretada con cautela) y RM T2* seriadas según la sospecha clínica; ajuste de la dosis de quelante según respuesta y tolerancia.',
      pronostico: 'Con vigilancia adecuada (considerando la limitación interpretativa de la ferritina en este contexto específico) y quelación oportuna cuando está indicada, el daño de órgano es en gran medida prevenible.',
      algoritmo: ['Transfusiones repetidas por AEC de curso prolongado → vigilancia de ferritina, interpretada con cautela por su elevación basal esperada', 'Duda diagnóstica genuina de sobrecarga real → RM hepática/cardiaca T2*', 'Sobrecarga confirmada → iniciar quelación de hierro', 'Optimizar el tratamiento dirigido de la enfermedad de base para reducir la necesidad transfusional futura', 'Vigilancia endocrina y cardiaca periódica si la sobrecarga es de larga evolución']
    },
    {
      nombre: 'Enmascaramiento de una causa tratable oculta',
      color: '#2e5f6b',
      definicion: 'Complicación diagnóstica en la que se atribuye toda la anemia a la enfermedad crónica de base sin investigar activamente una causa concomitante tratable y potencialmente más relevante (pérdida sanguínea digestiva oculta, deficiencia real de B12/folato, u otra causa de anemia independiente), con el riesgo de retrasar un diagnóstico oportuno, incluyendo el de una neoplasia gastrointestinal subyacente.',
      fisiopatologia: 'La AEC es, por definición, un diagnóstico que requiere excluir razonablemente otras causas antes de establecerse con confianza; el sesgo clínico de atribuir cualquier anemia en un paciente con enfermedad crónica conocida exclusivamente a ese contexto, sin el estudio dirigido correspondiente, puede pasar por alto una causa concomitante genuinamente independiente y tratable, particularmente cuando la anemia es más profunda o de instalación más rápida de lo esperado solo por la actividad de la enfermedad de base.',
      epidemiologia: 'Riesgo reconocido particularmente en el paciente de edad avanzada con múltiples comorbilidades crónicas, donde la anemia se atribuye con frecuencia y sin más estudio a "la edad" o a "la enfermedad crónica", retrasando el diagnóstico de causas tratables, incluida una neoplasia gastrointestinal oculta.',
      factores_riesgo: ['Anemia atribuida sin estudio dirigido solo por la presencia de una enfermedad crónica conocida', 'Anemia desproporcionadamente profunda o de instalación más rápida de lo esperado para la actividad de la enfermedad de base', 'Edad avanzada con múltiples comorbilidades (mayor riesgo de atribución automática e insuficientemente investigada)', 'Ausencia de reevaluación del perfil de hierro/B12/folato pese a cambios en el patrón de la anemia'],
      clinica: 'El cuadro es el de la causa oculta no reconocida (por ejemplo, síntomas de una neoplasia gastrointestinal en etapa temprana, o de una deficiencia de B12 con manifestaciones neurológicas incipientes, ver esos temas), enmascarado por la atribución inicial exclusiva a la enfermedad crónica conocida.',
      criterios_dx: 'Reconocimiento retrospectivo o prospectivo de una causa concomitante de anemia genuinamente distinta a la AEC, tras un estudio dirigido que debió haberse realizado desde el inicio.',
      laboratorio: 'Perfil de hierro completo con índice sTfR/log ferritina, niveles de B12 y folato, y cualquier otro estudio dirigido según la sospecha clínica, realizados de forma sistemática ante cualquier anemia nueva o que cambia de patrón, incluso en el paciente con enfermedad crónica conocida.',
      imagen: 'Endoscopia digestiva alta y colonoscopia en el adulto con anemia desproporcionada o de instalación rápida sin causa alternativa clara, igual criterio que en la anemia ferropénica pura (ver ese tema), particularmente en el paciente de edad avanzada.',
      complementarios: 'Revisión estructurada y sistemática de todo el perfil hematológico (no solo el perfil de hierro) ante cualquier cambio en el patrón de una anemia previamente atribuida a enfermedad crónica.',
      dx_diferencial: 'AEC genuinamente pura sin causa concomitante (el estudio dirigido resulta negativo y la anemia se correlaciona apropiadamente con la actividad de la enfermedad de base).',
      tx_medico: 'Mantener un umbral bajo para el estudio dirigido completo (perfil de hierro con índice sTfR/log ferritina, B12, folato, y consideración de estudio endoscópico según el contexto) ante cualquier anemia nueva o que cambia de patrón, incluso en presencia de una enfermedad crónica conocida que "explicaría" la anemia de forma aparente.',
      tx_farmacologico: 'Tratamiento dirigido de la causa concomitante identificada, según corresponda (hierro si hay ferropenia verdadera, B12/folato si hay deficiencia confirmada, ver esos temas).',
      tx_intervencionista: 'Según la causa concomitante identificada (por ejemplo, tratamiento endoscópico de una fuente de sangrado digestivo).',
      criterios_uci: 'No aplica de forma directa, salvo la propia de la causa concomitante identificada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma directa.',
      seguimiento_ambulatorio: 'Reevaluación periódica del patrón de la anemia en el paciente con enfermedad crónica conocida, con umbral bajo para reiniciar el estudio dirigido si el patrón cambia.',
      pronostico: 'Enteramente prevenible con un estudio dirigido sistemático desde el inicio; el retraso diagnóstico de una causa tratable, particularmente una neoplasia gastrointestinal oculta, puede tener consecuencias significativas sobre el pronóstico de esa causa concomitante.',
      algoritmo: ['Anemia en un paciente con enfermedad crónica conocida → NO atribuir automáticamente sin estudio dirigido', 'Perfil de hierro completo + índice sTfR/log ferritina + B12/folato de rutina', 'Anemia desproporcionada, de instalación rápida, o que cambia de patrón → estudio dirigido adicional (endoscopia según el contexto)', 'Causa concomitante identificada → tratamiento dirigido específico, en paralelo con el manejo de la enfermedad de base', 'Mantener umbral bajo para reestudiar si el patrón de la anemia cambia con el tiempo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La distinción entre AEC pura y ferropenia verdadera (mediante el índice sTfR/log ferritina) y la búsqueda activa de una causa concomitante tratable son comunes a las 4 formas de esta sección, con matices específicos de cada una detallados en su propia tarjeta.',
    parametros: [
      'Perfil de hierro completo con índice sTfR/log ferritina al ingreso en la anemia atribuida a enfermedad crónica que requiere manejo hospitalario.',
      'Minimización activa de la flebotomía diagnóstica en el paciente crítico/hospitalizado.',
      'Vigilancia de hemoglobina y presión arterial en todo paciente bajo tratamiento con agentes estimulantes de la eritropoyesis.',
      'Umbral bajo para reestudiar (B12, folato, endoscopia) ante una anemia desproporcionada o que cambia de patrón.'
    ],
    criterios_uci_general: 'Anemia sintomática grave con inestabilidad hemodinámica, evento trombótico mayor asociado a agentes estimulantes de la eritropoyesis con compromiso hemodinámico o respiratorio.',
    criterios_tips_general: 'No aplica a ninguna de las 4 formas de esta sección.',
    criterios_trasplante_general: 'El trasplante renal, cuando está indicado por la enfermedad renal de base, corrige de forma sustancial y sostenida la anemia asociada a la enfermedad renal crónica (ver esa tarjeta).',
    prevencion: 'Calcular el índice sTfR/log ferritina antes de indicar hierro ante cualquier ambigüedad del perfil de hierro, mantener un objetivo de hemoglobina moderado con agentes estimulantes de la eritropoyesis, minimizar la flebotomía diagnóstica en el paciente hospitalizado, y mantener un umbral bajo para investigar una causa concomitante tratable en toda anemia atribuida a enfermedad crónica.'
  }
};

export const compCites = {
  'Anemia de la enfermedad crónica clásica': { fisiopatologia: [1, 3] },
  'Anemia de la enfermedad renal crónica': { fisiopatologia: [8, 9], tx_farmacologico: [10] },
  'Anemia combinada con ferropenia verdadera': { fisiopatologia: [6, 7] },
  'Anemia del paciente crítico/hospitalizado': { fisiopatologia: [13], tx_intervencionista: [14] },
  'Riesgos de los agentes estimulantes de la eritropoyesis': { fisiopatologia: [11, 12] },
  'Ferropenia funcional / sobretratamiento con hierro en AEC pura': { fisiopatologia: [1] },
  'Enmascaramiento de una causa tratable oculta': { epidemiologia: [15] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Índice sTfR/log ferritina': [6, 7],
  'Perfil de hierro comparativo (AEC vs. ferropenia vs. combinada)': [7],
  'Criterios KDIGO de anemia en enfermedad renal crónica': [8]
};
export const escalaCalc = { 'Índice sTfR/log ferritina': 'stfrferritina' };
export const compGroups = [
  { title: 'AEC por contexto clínico (enfermedades)', items: ['Anemia de la enfermedad crónica clásica', 'Anemia de la enfermedad renal crónica', 'Anemia combinada con ferropenia verdadera', 'Anemia del paciente crítico/hospitalizado'] },
  { title: 'Complicaciones transversales (cualquier forma)', items: ['Ferropenia funcional / sobretratamiento con hierro en AEC pura', 'Riesgos de los agentes estimulantes de la eritropoyesis', 'Sobrecarga de hierro transfusional', 'Enmascaramiento de una causa tratable oculta'] }
];
export const complicacionesIntro = 'El panorama general (epidemiología, etiología, factores de riesgo, fisiopatología) ya se cubrió en Definición. Estas tarjetas son el recurso de consulta con el detalle operativo de cada entidad: diagnóstico diferencial específico, dosis, criterios de UCI/trasplante y el algoritmo paso a paso. El grupo "(enfermedades)" son las 4 formas de AEC según su contexto clínico; el grupo "Complicaciones transversales" son eventos que pueden surgir sobre cualquiera de ellas, no diagnósticos independientes.';
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
  root: { title: 'ANEMIA DE LA ENFERMEDAD CRÓNICA', color: '#4a5c73', target: 'definicion' },
  branches: [
    { title: 'Mecanismo inflamatorio', sub: 'Hepcidina ↑, índice sTfR/log ferritina <1', color: '#3d5a73', target: 'diagnostico', leaves: [
      { title: 'AEC clásica', sub: 'Infección, autoinmune, neoplasia', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Enfermedad renal crónica', sub: '+ déficit de EPO', color: '#6b4a2e', target: 'complicaciones' }
    ] },
    { title: 'Con componente carencial/agudo', sub: 'Índice sTfR/log ferritina 1-2 o agudo', color: '#966b35', target: 'diagnostico', leaves: [
      { title: 'Combinada con ferropenia', sub: 'SÍ requiere hierro', color: '#966b35', target: 'complicaciones' },
      { title: 'Paciente crítico', sub: 'Flebotomía + hepcidina aguda', color: '#7a1f3d', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1], no_invasivos: [6] };
export const clasificacionCite = [6];
export const seguimientoCite = [8, 11];
