// topics/anemias-hemoliticas-hereditarias/content.js: Anemias Hemolíticas Hereditarias
// (esferocitosis hereditaria, eliptocitosis hereditaria, deficiencia de G6PD, deficiencia de
// piruvato cinasa). Estructura idéntica al contrato del motor (misma forma que
// anemia-aplasica/sindromes-mielodisplasicos/miocardiopatias). Sigue la convención de figuras en
// línea (figBlock(), numerada "Tabla N"/"Imagen N" con conteo continuo por tipo).

export const meta = {
  id: 'anemias-hemoliticas-hereditarias',
  titulo: 'Anemias Hemolíticas Hereditarias',
  subtitulo: 'Módulo 9 · Medicina Interna',
  accent: '#5c4a7a',
  accentDim: '#8a7ab0'
};

export const definicionText = `<p style="margin:0 0 14px;">Las anemias hemolíticas hereditarias son un grupo de trastornos genéticos que producen destrucción prematura de los eritrocitos por defectos intrínsecos de la membrana eritrocitaria (membranopatías: esferocitosis hereditaria, eliptocitosis hereditaria) o de las enzimas del metabolismo eritrocitario (enzimopatías: deficiencia de glucosa-6-fosfato deshidrogenasa —G6PD—, deficiencia de piruvato cinasa), a diferencia de las anemias hemolíticas adquiridas (autoinmunes, microangiopáticas), de mecanismo extrínseco al eritrocito. Comparten el patrón bioquímico común de la hemólisis (reticulocitosis compensadora, hiperbilirrubinemia indirecta, LDH elevada, haptoglobina baja) pero con mecanismos moleculares y patrones clínicos distintivos que determinan el estudio dirigido y el tratamiento específico.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La esferocitosis hereditaria es la membranopatía más frecuente (~1:2,000-5,000 en población de ascendencia norteuropea, la anemia hemolítica hereditaria más común en ese grupo). La deficiencia de G6PD es la enzimopatía eritrocitaria más frecuente en el mundo (~400 millones de personas afectadas), con mayor prevalencia en regiones históricamente endémicas de malaria (África, Mediterráneo, Medio Oriente, Sudeste Asiático) por la ventaja selectiva heterocigota frente al paludismo. La deficiencia de piruvato cinasa es mucho menos frecuente, pero es la enzimopatía de la vía glucolítica más común causante de anemia hemolítica crónica no esferocítica.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Esferocitosis hereditaria</strong>: mutaciones en genes de proteínas del citoesqueleto de membrana (ankirina, banda 3, espectrina alfa/beta, proteína 4.2); herencia autosómica dominante en ~75% de los casos, autosómica recesiva o de novo en el resto.</li>
    <li><strong>Eliptocitosis hereditaria</strong>: mutaciones en espectrina o proteína 4.1, herencia autosómica dominante; la piropoiquilocitosis hereditaria (forma homocigota/doble heterocigota) es un fenotipo neonatal grave.</li>
    <li><strong>Deficiencia de G6PD</strong>: herencia recesiva ligada al X (predomina clínicamente en varones), con múltiples variantes alélicas de distinto grado de deficiencia enzimática.</li>
    <li><strong>Deficiencia de piruvato cinasa</strong>: herencia autosómica recesiva.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Antecedente familiar (todas son hereditarias, con distinto patrón de herencia)</li>
    <li>Ascendencia de regiones históricamente endémicas de malaria (deficiencia de G6PD)</li>
    <li>Ascendencia norteuropea (esferocitosis hereditaria)</li>
    <li>Consanguinidad parental (mayor riesgo en las formas autosómicas recesivas)</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> En las membranopatías, el defecto del citoesqueleto desestabiliza la bicapa lipídica, con pérdida progresiva de superficie de membrana durante el tránsito esplénico repetido; el eritrocito pierde su forma bicóncava normal (esferocito o eliptocito) y su deformabilidad, quedando atrapado y destruido en el bazo (hemólisis predominantemente extravascular). En las enzimopatías, el defecto compromete el metabolismo energético/redox del eritrocito: en la deficiencia de G6PD, la vía de las pentosas fosfato no genera suficiente NADPH para mantener el glutatión reducido, dejando al eritrocito vulnerable al estrés oxidativo (fármacos oxidantes, infección, habas); en la deficiencia de piruvato cinasa, el bloqueo de la vía glucolítica reduce la producción de ATP necesaria para mantener la integridad de membrana y el gradiente iónico. En ambos grupos, el resultado final es la eliminación prematura del eritrocito por el sistema reticuloendotelial (predominantemente esplénico), con reticulocitosis compensadora, hiperbilirrubinemia indirecta y riesgo de colelitiasis pigmentaria a largo plazo.${figBlock('Imagen 2', 'Membranopatía vs. enzimopatía: dos caminos a la hemólisis prematura', `
<div style="display:flex;gap:16px;max-width:600px;margin:0 auto;flex-wrap:wrap;justify-content:center;">
  <div style="flex:1;min-width:250px;display:flex;flex-direction:column;align-items:center;gap:5px;">
    <div style="font-size:11px;font-weight:700;color:#8c3a34;text-align:center;">MEMBRANOPATÍAS (esferocitosis, eliptocitosis)</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Defecto del citoesqueleto (ankirina, banda 3, espectrina, proteína 4.1)</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Pérdida de superficie de membrana y deformabilidad</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Eritrocito atrapado y destruido en el bazo</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:#3f6b5233;border:1px solid #3f6b52;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Hemólisis EXTRAVASCULAR crónica</div>
  </div>
  <div style="flex:1;min-width:250px;display:flex;flex-direction:column;align-items:center;gap:5px;">
    <div style="font-size:11px;font-weight:700;color:#5c6b8c;text-align:center;">ENZIMOPATÍAS (G6PD, piruvato cinasa)</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Defecto enzimático (vía de pentosas fosfato o glucólisis)</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:var(--panel2);border:1px solid var(--line);border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Falla del metabolismo redox (G6PD) o energético/ATP (piruvato cinasa)</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:#5c6b8c33;border:1px solid #5c6b8c;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Daño oxidativo agudo (G6PD) o rigidez de membrana (piruvato cinasa)</div>
    <div style="color:var(--ink-dim);">↓</div>
    <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:6px;padding:6px 10px;font-size:10px;color:var(--ink);text-align:center;">Hemólisis intravascular EPISÓDICA (G6PD) o extravascular crónica (piruvato cinasa)</div>
  </div>
</div>`)}</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> El espectro va desde el portador asintomático (heterocigoto leve) hasta la anemia hemolítica crónica moderada-grave dependiente de transfusiones; ictericia variable, esplenomegalia (predominantemente en las membranopatías, menos marcada en las enzimopatías), e historia familiar positiva frecuente. El patrón temporal distingue las enzimopatías (hemólisis episódica desencadenada por estrés oxidativo en la deficiencia de G6PD, o crónica de base con exacerbaciones en la de piruvato cinasa) de las membranopatías (hemólisis crónica compensada de base, con crisis intercurrentes). El diagnóstico definitivo, el manejo específico de cada entidad y de sus complicaciones se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Perrotta S, Gallagher PG, Mohandas N. Hereditary spherocytosis. Lancet. 2008;372(9647):1411-1426.',
  'Bolton-Maggs PH, Langer JC, Iolascon A, et al. Guidelines for the diagnosis and management of hereditary spherocytosis. Br J Haematol. 2012;156(1):37-49.',
  'King MJ, Garçon L, Hoyer JD, et al. ICSH guidelines for the laboratory diagnosis of nonimmune hereditary red cell membrane disorders. Int J Lab Hematol. 2015;37(3):304-325.',
  'Da Costa L, Galimand J, Fenneteau O, Mohandas N. Hereditary spherocytosis, elliptocytosis, and other red cell membrane disorders. Blood Rev. 2013;27(4):167-178.',
  'Cappellini MD, Fiorelli G. Glucose-6-phosphate dehydrogenase deficiency. Lancet. 2008;371(9606):64-74.',
  'Luzzatto L, Ally M, Notaro R. Glucose-6-phosphate dehydrogenase deficiency. Blood. 2020;136(11):1225-1240.',
  'Grace RF, Zanella A, Neufeld EJ, et al. Erythrocyte pyruvate kinase deficiency: 2015 status report. Am J Hematol. 2015;90(9):825-830.',
  'Grace RF, Rose C, Layton DM, et al. Safety and Efficacy of Mitapivat in Pyruvate Kinase Deficiency. N Engl J Med. 2019;381(10):933-944.',
  'Iolascon A, Andolfo I, Russo R. Advances in understanding the pathogenesis of red cell membrane disorders. Br J Haematol. 2019;187(1):13-24.',
  'Beutler E. G6PD deficiency. Blood. 1994;84(11):3613-3636.',
  'Brugnara C. Reticulocyte cellular indices: a new approach in the diagnosis of anemias and monitoring of erythropoietic function. Crit Rev Clin Lab Sci. 2000;37(2):93-130.',
  'Young NS, Brown KE. Parvovirus B19. N Engl J Med. 2004;350(6):586-597.',
  'Rice HE, Oldham KT, Hillery CA, et al. Clinical and hematologic benefits of partial splenectomy for congenital hemolytic anemias in children. Ann Surg. 2003;237(2):281-288.',
  'Manciu S, Matei E, Trandafir B. Hereditary Spherocytosis - Diagnosis, Surgical Treatment and Outcomes. A Literature Review. Chirurgia (Bucur). 2017;112(2):110-116.',
  'Vives-Corrons JL, Krishnevskaya E, Aguilar Artola C, et al. Characterization of hereditary red blood cell membranopathies using combined targeted next-generation sequencing and osmotic gradient ektacytometry. Int J Lab Hematol. 2021;43(4):604-613.'
];

// Reproduce el marcado de .modal-figure (mismo helper que SMD/NMP/AA/miocardiopatías) para
// insertar tablas/diagramas EN LÍNEA justo debajo del párrafo que los menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Hemólisis crónica compensada',
      tituloB: 'Hemólisis descompensada / crisis aguda',
      compensada: 'Ictericia leve-moderada fluctuante, fatiga leve, esplenomegalia (más marcada en las membranopatías que en las enzimopatías); antecedente familiar de anemia, ictericia, esplenectomía o colelitiasis a edad temprana. Muchos pacientes con formas leves permanecen sin diagnóstico hasta la edad adulta, identificados de forma incidental o durante el estudio de un familiar afectado.',
      descompensada: 'Anemia sintomática aguda (fatiga marcada, disnea, taquicardia), ictericia franca, orina oscura. En la deficiencia de G6PD, hemólisis aguda intravascular con hemoglobinuria tras exposición a un desencadenante oxidante (fármaco, infección, habas), de instalación típicamente en las 24-72 horas siguientes. En cualquiera de las 4 entidades, una crisis aplásica por parvovirus B19 puede producir un descenso brusco y grave de la hemoglobina por cese transitorio de la producción medular compensadora (ver Complicaciones).'
    },
    laboratorio: [
      { prueba: 'Biometría hemática con diferencial y reticulocitos', utilidad: 'Anemia con reticulocitosis (salvo crisis aplásica concurrente), frecuentemente normocítica o levemente macrocítica por los reticulocitos.' },
      { prueba: 'Frotis de sangre periférica', utilidad: `Esferocitos (esferocitosis hereditaria, aunque también presentes en la anemia hemolítica autoinmune), eliptocitos/ovalocitos (eliptocitosis hereditaria), cuerpos de Heinz y "bite cells" (deficiencia de G6PD durante la crisis oxidativa), equinocitos (piruvato cinasa, hallazgo menos específico).${figBlock('Imagen 1', 'Eritrocito normal vs. esferocito vs. eliptocito', `
      <svg viewBox="0 0 720 260" role="img" aria-labelledby="morf-title morf-desc" style="width:100%;max-width:560px;display:block;margin:0 auto;">
        <title id="morf-title">Eritrocito normal vs. esferocito vs. eliptocito</title>
        <desc id="morf-desc">Comparación morfológica: el eritrocito normal es un disco bicóncavo con palidez central; el esferocito es esférico, sin palidez central, con menor superficie de membrana relativa al volumen; el eliptocito es ovalado/elongado, con palidez central conservada pero deformada.</desc>
        <line x1="240" y1="10" x2="240" y2="250" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
        <line x1="480" y1="10" x2="480" y2="250" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
        <text x="120" y="26" text-anchor="middle" fill="var(--accent-fg)" font-size="13" font-weight="700">NORMAL</text>
        <text x="360" y="26" text-anchor="middle" fill="var(--accent-fg)" font-size="13" font-weight="700">ESFEROCITO</text>
        <text x="600" y="26" text-anchor="middle" fill="var(--accent-fg)" font-size="13" font-weight="700">ELIPTOCITO</text>
        <g>
          <circle cx="120" cy="128" r="68" fill="var(--panel2)" stroke="var(--ink)" stroke-width="2.5"/>
          <ellipse cx="120" cy="128" rx="30" ry="20" fill="var(--panel)" stroke="var(--line)" stroke-width="1.5"/>
          <text x="120" y="222" text-anchor="middle" fill="var(--ink-dim)" font-size="10.5">Bicóncavo, con</text>
          <text x="120" y="235" text-anchor="middle" fill="var(--ink-dim)" font-size="10.5">palidez central</text>
        </g>
        <g transform="translate(240,0)">
          <circle cx="120" cy="128" r="60" fill="#8c3a34" opacity="0.32" stroke="#8c3a34" stroke-width="2.5"/>
          <text x="120" y="222" text-anchor="middle" fill="var(--ink-dim)" font-size="10.5">Esférico, SIN palidez central,</text>
          <text x="120" y="235" text-anchor="middle" fill="var(--ink-dim)" font-size="10.5">menor superficie de membrana</text>
        </g>
        <g transform="translate(480,0)">
          <ellipse cx="120" cy="128" rx="76" ry="42" fill="#966b35" opacity="0.32" stroke="#966b35" stroke-width="2.5"/>
          <ellipse cx="120" cy="128" rx="38" ry="13" fill="var(--panel)" stroke="var(--line)" stroke-width="1.5"/>
          <text x="120" y="222" text-anchor="middle" fill="var(--ink-dim)" font-size="10.5">Elíptico/ovalado,</text>
          <text x="120" y="235" text-anchor="middle" fill="var(--ink-dim)" font-size="10.5">elongado</text>
        </g>
      </svg>`)}` },
      { prueba: 'Panel de hemólisis (bilirrubina indirecta, LDH, haptoglobina)', utilidad: 'Bilirrubina indirecta y LDH elevadas, haptoglobina baja/indetectable; confirma el patrón bioquímico de hemólisis, común a las 4 entidades.' },
      { prueba: 'Prueba de antiglobulina directa (Coombs directa)', utilidad: 'Debe ser NEGATIVA: paso obligado para distinguir de la anemia hemolítica autoinmune (que puede mostrar esferocitos idénticos en el frotis), esencial antes de atribuir el cuadro a una causa hereditaria.' },
      { prueba: 'Índice de producción reticulocitaria (IPR)', utilidad: 'Confirma la respuesta medular apropiada a la hemólisis; ver Escalas.' }
    ],
    no_invasivos: [
      { metodo: 'Clasificación de gravedad de la esferocitosis hereditaria', interpretacion: 'Clasifica en leve, moderada o grave según hemoglobina, reticulocitos y bilirrubina; ver Escalas.', cutoff: 'Categórico' },
      { metodo: 'Índice de producción reticulocitaria (IPR)', interpretacion: 'Un IPR ≥3 apoya una respuesta medular adecuada (hemólisis/pérdida sanguínea); un IPR &lt;2 sugiere una médula hipoproliferativa. Ver Escalas.', cutoff: '≥3 adecuado' }
    ],
    imagen: [
      { modalidad: 'Prueba de fragilidad osmótica', hallazgos: 'Sensibilidad limitada (falsos negativos en formas leves), en gran medida sustituida por pruebas más específicas en los centros con disponibilidad.' },
      { modalidad: 'Citometría de flujo con unión a eosina-5-maleimida (EMA binding test)', hallazgos: 'Prueba de elección actual para esferocitosis hereditaria, con mayor sensibilidad y especificidad que la fragilidad osmótica.' },
      { modalidad: 'Ensayo cuantitativo de actividad enzimática de G6PD', hallazgos: 'Diagnóstico de la deficiencia de G6PD; puede ser falsamente normal durante o inmediatamente después de una crisis hemolítica aguda (los eritrocitos más viejos y deficientes ya se destruyeron, dejando una población de reticulocitos jóvenes con actividad relativamente preservada), por lo que debe repetirse 2-3 meses después si hay alta sospecha con un resultado inicial normal.' },
      { modalidad: 'Ensayo cuantitativo de actividad enzimática de piruvato cinasa', hallazgos: 'Diagnóstico de esa deficiencia.' },
      { modalidad: 'Panel genético dirigido (genes de membrana o enzimáticos según la entidad)', hallazgos: 'Confirma el diagnóstico molecular y permite el estudio familiar/consejo genético.' },
      { modalidad: 'Ecografía abdominal', hallazgos: 'Documenta esplenomegalia y detecta colelitiasis pigmentaria (ver Complicaciones).' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'El índice de producción reticulocitaria (IPR) confirma que la médula ósea responde apropiadamente a la hemólisis, un paso útil en cualquiera de las 4 entidades de esta sección; la clasificación de gravedad de la esferocitosis hereditaria (extrapolable con matices al resto de las membranopatías) estratifica la intensidad del seguimiento y la indicación de esplenectomía.',
    escalas: [
      { nombre: 'Índice de producción reticulocitaria (IPR)', componentes: 'Reticulocitos (%), hematocrito del paciente, hematocrito normal de referencia (~45%), factor de maduración según el grado de anemia.', formula: 'Reticulocitos corregidos (%) = reticulocitos (%) × (Hto paciente / Hto normal). IPR = reticulocitos corregidos / factor de maduración (1.0 si Hto ≥40%, 1.5 si 30-39%, 2.0 si 20-29%, 2.5 si &lt;20%). Calculadora disponible más abajo.', interpretacion: 'IPR ≥3 sugiere una respuesta medular adecuada, consistente con hemólisis o pérdida sanguínea aguda como causa de la anemia; IPR &lt;2 sugiere una médula hipoproliferativa (producción inadecuada), lo que debe hacer reconsiderar el diagnóstico o sospechar una crisis aplásica sobreañadida.' },
      { nombre: 'Clasificación de gravedad de la esferocitosis hereditaria', componentes: 'Hemoglobina, porcentaje de reticulocitos, bilirrubina total.', formula: 'Leve: Hb ≥11 g/dL, reticulocitos 3-6%, bilirrubina 1-2 mg/dL. Moderada: Hb 8-11 g/dL, reticulocitos 6-10%, bilirrubina 2-3 mg/dL. Grave: Hb &lt;8 g/dL, reticulocitos &gt;10%, bilirrubina &gt;3 mg/dL. Calculadora disponible más abajo.', interpretacion: 'La forma leve rara vez requiere esplenectomía; la moderada y grave concentran la mayoría de las indicaciones de esplenectomía y la dependencia transfusional en la forma grave.' },
      { nombre: 'Criterios diagnósticos por entidad', componentes: 'Frotis específico + prueba confirmatoria dirigida (EMA binding, actividad enzimática de G6PD/piruvato cinasa) + Coombs directa negativa + panel genético si hay duda.', formula: 'Diagnóstico de exclusión-confirmación combinado, sin puntaje numérico único.', interpretacion: 'Ningún hallazgo aislado (ni siquiera los esferocitos en el frotis) es diagnóstico por sí solo sin la prueba confirmatoria dirigida y la exclusión de una causa adquirida (Coombs negativa).' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Esferocitosis hereditaria',
      color: '#8c3a34',
      definicion: 'Membranopatía eritrocitaria más frecuente, causada por mutaciones en genes de proteínas del citoesqueleto de membrana (ankirina, banda 3, espectrina alfa/beta, proteína 4.2), que producen eritrocitos esféricos, rígidos y con menor superficie de membrana relativa al volumen, destruidos prematuramente en el bazo.',
      fisiopatologia: 'El defecto del citoesqueleto desestabiliza la unión entre la bicapa lipídica y las proteínas de anclaje subyacentes, favoreciendo la liberación de microvesículas de membrana durante el tránsito repetido por los sinusoides esplénicos; el eritrocito pierde superficie de membrana de forma desproporcionada a su volumen, adoptando la forma esférica característica, con menor deformabilidad y mayor fragilidad osmótica. Estos esferocitos quedan atrapados en los cordones esplénicos (donde el ambiente hipóxico/ácido acentúa aún más la esferocitosis) y son fagocitados por los macrófagos esplénicos, el mecanismo de hemólisis predominantemente extravascular característico de esta entidad.',
      epidemiologia: 'Prevalencia de ~1:2,000-5,000 en población de ascendencia norteuropea, donde es la anemia hemolítica hereditaria más frecuente; herencia autosómica dominante en ~75% de los casos, autosómica recesiva o mutación de novo en el resto (estas últimas con frecuencia de curso más grave).',
      factores_riesgo: ['Antecedente familiar (autosómico dominante en la mayoría)', 'Ascendencia norteuropea', 'Mutación de novo o herencia autosómica recesiva (fenotipo típicamente más grave)'],
      clinica: 'Ictericia fluctuante desde la infancia (con frecuencia la manifestación inicial, incluso como ictericia neonatal prolongada), esplenomegalia palpable en la mayoría de los casos sintomáticos, anemia de gravedad variable; antecedente familiar de esplenectomía o colelitiasis a edad temprana con frecuencia presente.',
      criterios_dx: 'Frotis con esferocitos (microesferocitos sin palidez central) más una prueba confirmatoria (EMA binding test de elección, o fragilidad osmótica si no está disponible), con Coombs directa negativa que excluye la anemia hemolítica autoinmune; panel genético si el resultado es equívoco o se requiere confirmación molecular.',
      laboratorio: 'Hemoglobina corpuscular media (CHCM/MCHC) con frecuencia elevada (&gt;35 g/dL), un dato de apoyo característico aunque no exclusivo; panel de hemólisis positivo (bilirrubina indirecta, LDH elevados, haptoglobina baja).',
      imagen: `Citometría de flujo con EMA binding test (prueba de elección); ecografía abdominal para esplenomegalia y tamizaje de colelitiasis pigmentaria desde la adolescencia.${figBlock('Imagen 3', 'Esferocitos en el frotis de sangre periférica', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Peripheral_blood_smear_stained_with_MGG_from_a_patient_with_hereditary_spherocytosis.png" alt="Frotis de sangre periférica teñido con May-Grünwald-Giemsa de un paciente con esferocitosis hereditaria, mostrando esferocitos típicos: eritrocitos densos, redondeados, sin la palidez central habitual." style="width:100%;max-width:420px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Esferocitos típicos: eritrocitos densos y redondeados, sin la palidez central del eritrocito normal. Vives-Corrons JL, Krishnevskaya E. Rare anemias in adolescents. Acta Biomed. 2021, Wikimedia Commons, CC BY 4.0.</p>`)}`,
      complementarios: 'Aplicar la clasificación de gravedad (leve/moderada/grave, ver Escalas) para guiar el seguimiento y la indicación de esplenectomía.',
      dx_diferencial: 'Anemia hemolítica autoinmune con esferocitos (Coombs directa positiva, sin antecedente familiar típicamente), otras membranopatías (eliptocitosis hereditaria), deficiencia de piruvato cinasa (esferocitos menos prominentes, otros hallazgos en el frotis).',
      tx_medico: 'Suplementación de ácido fólico (1 mg/día) de forma indefinida en todo paciente con hemólisis crónica, para prevenir el agotamiento del folato por el recambio eritropoyético aumentado (ver Complicaciones); soporte transfusional guiado por síntomas en la forma grave.',
      tx_farmacologico: 'No existe tratamiento farmacológico dirigido específico más allá del ácido fólico; el manejo definitivo de la forma moderada-grave es quirúrgico (ver más abajo).',
      tx_intervencionista: 'Esplenectomía (total o parcial) en la forma moderada-grave sintomática o con dependencia transfusional, con resolución sustancial o completa de la anemia y la ictericia en la mayoría de los casos (el defecto de membrana persiste, pero se elimina el sitio principal de destrucción); diferir hasta después de los 5-6 años cuando sea posible, por el riesgo de sepsis fulminante posesplenectomía a menor edad; vacunación contra gérmenes encapsulados (neumococo, meningococo, Haemophilus influenzae tipo b) al menos 2 semanas antes del procedimiento electivo, y profilaxis antibiótica prolongada después.',
      criterios_uci: 'Crisis aplásica grave con inestabilidad hemodinámica, sepsis fulminante posesplenectomía.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica (no es una enfermedad de la célula madre hematopoyética).',
      seguimiento_hospitalario: 'Vigilancia de la crisis aguda que motivó el ingreso (aplásica, hemolítica grave, o quirúrgica perioperatoria de la esplenectomía).',
      seguimiento_ambulatorio: 'Biometría hemática periódica, ecografía abdominal seriada para vigilar colelitiasis, revacunación periódica según el calendario posesplenectomía si se realizó, educación sobre fiebre como urgencia en el paciente esplenectomizado.',
      pronostico: 'Excelente con manejo apropiado; la esplenectomía resuelve o mejora sustancialmente la anemia y la ictericia en la forma moderada-grave, aunque conlleva un riesgo permanente (aunque bajo) de sepsis fulminante por gérmenes encapsulados que exige vacunación y educación del paciente de por vida.',
      algoritmo: ['Ictericia/anemia crónica + antecedente familiar → frotis de sangre periférica', 'Esferocitos presentes → Coombs directa (debe ser negativa)', 'EMA binding test confirmatorio', 'Clasificar gravedad (leve/moderada/grave)', 'Ácido fólico indefinido en todos', 'Moderada/grave sintomática → esplenectomía (diferir a &gt;5-6 años si es posible, vacunación previa)']
    },
    {
      nombre: 'Eliptocitosis hereditaria',
      color: '#966b35',
      definicion: 'Membranopatía eritrocitaria causada por mutaciones en espectrina o proteína 4.1 que debilitan las interacciones horizontales del citoesqueleto de membrana, produciendo eritrocitos ovalados/elípticos; la piropoiquilocitosis hereditaria es la forma homocigota o doble heterocigota, con un fenotipo neonatal grave y poiquilocitosis marcada.',
      fisiopatologia: 'A diferencia de la esferocitosis (pérdida de superficie de membrana), en la eliptocitosis el defecto compromete las interacciones horizontales entre las subunidades de espectrina (o su anclaje a la proteína 4.1), reduciendo la resistencia mecánica de la membrana a las fuerzas de cizallamiento en la microcirculación; el eritrocito se deforma de manera permanente hacia una forma elíptica al perder su capacidad de recuperar la forma bicóncava tras cada paso por la circulación, con hemólisis extravascular esplénica de intensidad variable según la gravedad del defecto subyacente.',
      epidemiologia: 'Menos frecuente que la esferocitosis hereditaria; la mayoría de los portadores heterocigotos son asintomáticos o levemente sintomáticos, mientras que la piropoiquilocitosis hereditaria (homocigota/doble heterocigota) es rara pero clínicamente grave desde el nacimiento.',
      factores_riesgo: ['Antecedente familiar (autosómico dominante en la forma heterocigota típica)', 'Consanguinidad parental o unión de dos portadores (mayor riesgo de piropoiquilocitosis hereditaria en la descendencia)'],
      clinica: 'La mayoría de los portadores heterocigotos son asintomáticos con hallazgo incidental de eliptocitos en el frotis; una minoría tiene hemólisis crónica leve-moderada con esplenomegalia. La piropoiquilocitosis hereditaria se presenta en el periodo neonatal con anemia hemolítica grave, ictericia marcada y poiquilocitosis extrema, con frecuencia requiriendo transfusiones tempranas.',
      criterios_dx: 'Frotis de sangre periférica con ≥25-50% de eliptocitos/ovalocitos (umbral variable según el laboratorio) en el contexto clínico apropiado, con Coombs directa negativa; panel genético dirigido a espectrina/proteína 4.1 si hay duda diagnóstica o para caracterizar la piropoiquilocitosis hereditaria.',
      laboratorio: 'Panel de hemólisis positivo si hay hemólisis clínicamente significativa; en la piropoiquilocitosis hereditaria, fragilidad térmica marcada de los eritrocitos (hemólisis a temperaturas más bajas de lo normal), un hallazgo de laboratorio característico de esa forma grave.',
      imagen: `Frotis de sangre periférica (el estudio central, con la morfología característica); ecografía abdominal si hay esplenomegalia o para tamizaje de colelitiasis en la forma sintomática.${figBlock('Imagen 4', 'Eliptocitos en el frotis de sangre periférica', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Elliptocytosis_and_RBC.jpg/960px-Elliptocytosis_and_RBC.jpg" alt="Frotis de sangre periférica mostrando numerosos eliptocitos: eritrocitos de forma ovalada/elongada." style="width:100%;max-width:420px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Numerosos eliptocitos: eritrocitos de forma ovalada/elongada, característicos de la eliptocitosis hereditaria. Persian Microbiologist, Wikimedia Commons, CC BY-SA 4.0.</p>`)}`,
      complementarios: 'Estudio familiar (frotis de los padres) para distinguir la forma heterocigota típica de una piropoiquilocitosis hereditaria en el neonato con anemia grave.',
      dx_diferencial: 'Ovalocitosis del sudeste asiático (variante distinta de banda 3, habitualmente asintomática, con resistencia relativa a la malaria), esferocitosis hereditaria, otras causas de poiquilocitosis neonatal grave (síndrome hemolítico-urémico, coagulación intravascular diseminada neonatal).',
      tx_medico: 'Igual que la esferocitosis hereditaria: ácido fólico indefinido en la forma con hemólisis crónica significativa; soporte transfusional en la piropoiquilocitosis hereditaria neonatal según necesidad.',
      tx_farmacologico: 'No existe tratamiento farmacológico dirigido específico más allá del ácido fólico.',
      tx_intervencionista: 'Esplenectomía en la forma con hemólisis crónica moderada-grave sintomática o dependencia transfusional, con la misma lógica y precauciones (vacunación previa, diferir la edad si es posible) que en la esferocitosis hereditaria; con frecuencia necesaria de forma más temprana en la piropoiquilocitosis hereditaria grave.',
      criterios_uci: 'Anemia neonatal grave con inestabilidad en la piropoiquilocitosis hereditaria, crisis aplásica grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Igual que la esferocitosis hereditaria; vigilancia neonatal intensiva en la piropoiquilocitosis hereditaria.',
      seguimiento_ambulatorio: 'Igual que la esferocitosis hereditaria (biometría periódica, ecografía para colelitiasis, cuidados posesplenectomía si se realizó).',
      pronostico: 'Excelente en la forma heterocigota típica, con frecuencia asintomática; la piropoiquilocitosis hereditaria tiene un curso más grave en la infancia temprana, con mejoría relativa hacia la adolescencia en muchos casos, cuando la fragilidad térmica característica tiende a atenuarse.',
      algoritmo: ['Eliptocitos en el frotis (≥25-50%) → correlacionar con clínica y antecedente familiar', 'Anemia neonatal grave con poiquilocitosis extrema → sospechar piropoiquilocitosis hereditaria, estudio familiar urgente', 'Coombs directa negativa + panel genético si hay duda', 'Ácido fólico indefinido si hay hemólisis crónica significativa', 'Moderada/grave sintomática → esplenectomía con las mismas precauciones que en esferocitosis hereditaria']
    },
    {
      nombre: 'Deficiencia de glucosa-6-fosfato deshidrogenasa (G6PD)',
      color: '#5c6b8c',
      definicion: 'Enzimopatía eritrocitaria más frecuente en el mundo, causada por mutaciones del gen G6PD (ligado al X) que reducen la actividad de la enzima limitante de la vía de las pentosas fosfato, dejando al eritrocito vulnerable al estrés oxidativo; a diferencia de las membranopatías, cursa característicamente con hemólisis episódica desencadenada por un factor identificable, más que hemólisis crónica de base.',
      fisiopatologia: 'La glucosa-6-fosfato deshidrogenasa cataliza el primer paso de la vía de las pentosas fosfato, generando NADPH, el cofactor necesario para regenerar glutatión reducido, el principal sistema antioxidante intracelular del eritrocito (que carece de núcleo y mitocondrias, y por tanto de otras vías de defensa antioxidante). Con actividad enzimática deficiente, la exposición a un estrés oxidativo (fármacos oxidantes, infección aguda, o el consumo de habas —favismo—) satura la capacidad antioxidante residual, provocando la oxidación de la hemoglobina (formación de cuerpos de Heinz, hemoglobina desnaturalizada precipitada) y del daño de membrana; los eritrocitos con cuerpos de Heinz son "mordidos" por los macrófagos esplénicos (formando las "bite cells" características) o hemolizados directamente en la circulación (hemólisis intravascular aguda).',
      epidemiologia: 'Afecta a ~400 millones de personas en el mundo, con mayor prevalencia en regiones históricamente endémicas de malaria (África subsahariana, cuenca del Mediterráneo, Medio Oriente, Sudeste Asiático), por la ventaja selectiva heterocigota relativa frente al paludismo por Plasmodium falciparum; herencia recesiva ligada al X, por lo que la expresión clínica predomina en varones hemicigotos (las mujeres heterocigotas pueden tener expresión variable por lionización/inactivación del cromosoma X).',
      factores_riesgo: ['Sexo masculino (herencia ligada al X)', 'Ascendencia de una región históricamente endémica de malaria', 'Exposición a fármacos oxidantes (primaquina, dapsona, sulfonamidas, nitrofurantoína, rasburicasa, azul de metileno, entre otros)', 'Consumo de habas (favismo, particularmente en las variantes mediterráneas de mayor deficiencia)', 'Infección aguda intercurrente (desencadenante frecuente e infravalorado)'],
      clinica: 'Entre episodios, la mayoría de los pacientes está asintomática, sin anemia ni esplenomegalia significativas. Durante la crisis hemolítica aguda: ictericia y orina oscura (hemoglobinuria) de instalación típicamente 24-72 horas después de la exposición al desencadenante, fatiga aguda, dolor lumbar o abdominal en la hemólisis intravascular masiva; el favismo puede producir hemólisis particularmente grave y de instalación más rápida (horas) en las variantes mediterráneas.',
      criterios_dx: 'Actividad enzimática de G6PD reducida en un ensayo cuantitativo, en el contexto clínico apropiado (hemólisis episódica tras un desencadenante identificable); considerar la posibilidad de un resultado falsamente normal si se mide durante o inmediatamente después de la crisis aguda (ver Diagnóstico) y repetir 2-3 meses después si la sospecha clínica persiste alta.',
      laboratorio: `Cuerpos de Heinz (visibles con tinciones supravitales) y "bite cells"/células mordidas o excentrocitos en el frotis durante la crisis; panel de hemólisis positivo, con frecuencia predominio de patrón de hemólisis intravascular (haptoglobina más marcadamente indetectable, hemoglobinuria).${figBlock('Imagen 5', 'Excentrocito en la crisis hemolítica por deficiencia de G6PD', `
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Peripheral_blood_smear_stained_with_MGG_of_a_hemolytic_crisis_due_G6PD_de%EF%AC%81ciency.png" alt="Frotis de sangre periférica de una crisis hemolítica por deficiencia de G6PD, mostrando un excentrocito: la hemoglobina desplazada hacia un extremo del citoplasma por el daño oxidativo." style="width:100%;max-width:420px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
      <p style="font-size:10.5px;color:var(--ink-faint);text-align:center;margin:8px 0 0;">Excentrocito: por el estrés oxidativo, la hemoglobina se desplaza hacia un extremo del citoplasma, dejando el resto de la célula pálido; hallazgo del mismo espectro morfológico que las "bite cells". Vives-Corrons JL, Krishnevskaya E. Rare anemias in adolescents. Acta Biomed. 2021, Wikimedia Commons, CC BY 4.0.</p>`)}`,
      imagen: 'Ensayo cuantitativo de actividad enzimática de G6PD (ver Diagnóstico para la advertencia del momento de medición); panel genético dirigido si se requiere caracterizar la variante alélica específica.',
      complementarios: 'Revisión exhaustiva de la lista de medicamentos para identificar el fármaco oxidante desencadenante; documentación permanente en el expediente de los fármacos a evitar de por vida.',
      dx_diferencial: 'Otras causas de hemólisis intravascular aguda (hemólisis mediada por complemento, reacción transfusional hemolítica aguda, hemoglobinuria paroxística nocturna), deficiencia de piruvato cinasa (hemólisis crónica de base más que episódica), anemia hemolítica autoinmune (Coombs directa positiva).',
      tx_medico: 'Suspensión inmediata del agente oxidante desencadenante si es farmacológico; hidratación para proteger la función renal ante hemoglobinuria significativa.',
      tx_farmacologico: 'No existe tratamiento farmacológico dirigido específico para la deficiencia en sí; el ácido fólico se reserva para la forma con hemólisis crónica de base más marcada (menos frecuente que en las membranopatías); evitar de por vida la reexposición al agente identificado y a otros fármacos oxidantes conocidos de la misma clase.',
      tx_intervencionista: 'Transfusión de concentrado eritrocitario en la crisis hemolítica grave con anemia sintomática significativa; la esplenectomía tiene un rol limitado, dado que la hemólisis es predominantemente intravascular (no esplénica) en esta entidad, a diferencia de las membranopatías.',
      criterios_uci: 'Hemólisis intravascular masiva con inestabilidad hemodinámica o lesión renal aguda por hemoglobinuria significativa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la función renal durante la hemoglobinuria significativa, monitorización de la hemoglobina seriada hasta confirmar la resolución de la crisis (la hemólisis en G6PD es característicamente autolimitada una vez eliminados los eritrocitos más viejos/deficientes, incluso sin suspender por completo la exposición en casos leves).',
      seguimiento_ambulatorio: 'Educación exhaustiva sobre los fármacos y alimentos a evitar de por vida (tarjeta o brazalete de alerta médica recomendado), tamizaje familiar en varones de la línea materna dado el patrón de herencia ligado al X.',
      pronostico: 'Excelente entre episodios; la crisis hemolítica aguda es habitualmente autolimitada con manejo de soporte apropiado, y la mortalidad es baja salvo hemólisis masiva no reconocida o tratada tardíamente.',
      algoritmo: ['Ictericia/orina oscura aguda 24-72h tras fármaco oxidante, infección, o habas → sospechar crisis hemolítica por deficiencia de G6PD', 'Frotis: cuerpos de Heinz, bite cells', 'Suspender el desencadenante + hidratación', 'Actividad enzimática de G6PD (interpretar con cautela si es muy temprana tras la crisis)', 'Transfusión si anemia sintomática grave', 'Educación de por vida sobre fármacos/alimentos a evitar + tamizaje familiar']
    },
    {
      nombre: 'Deficiencia de piruvato cinasa',
      color: '#6b4a2e',
      definicion: 'Enzimopatía de herencia autosómica recesiva causada por mutaciones del gen PKLR, que reducen la actividad de la piruvato cinasa, la enzima que cataliza el paso final de la glucólisis; es la causa más frecuente de anemia hemolítica crónica no esferocítica de origen enzimático, con hemólisis crónica de base (a diferencia del patrón predominantemente episódico de la deficiencia de G6PD).',
      fisiopatologia: 'La piruvato cinasa cataliza la conversión de fosfoenolpiruvato a piruvato con generación de ATP, el paso final de la vía glucolítica, la única fuente de energía del eritrocito maduro (que carece de mitocondrias). La deficiencia enzimática reduce la producción de ATP, comprometiendo las bombas iónicas dependientes de energía (particularmente la bomba Na+/K+-ATPasa) que mantienen el volumen y la integridad de la membrana eritrocitaria; el eritrocito se deshidrata progresivamente y se rigidiza, siendo eliminado prematuramente por el bazo (hemólisis predominantemente extravascular, con un componente de hemólisis intramedular/ineficaz también descrito).',
      epidemiologia: 'Mucho menos frecuente que la deficiencia de G6PD o la esferocitosis hereditaria, pero es la enzimopatía de la vía glucolítica más común causante de anemia hemolítica crónica no esferocítica; afecta a ambos sexos por igual (herencia autosómica recesiva).',
      factores_riesgo: ['Antecedente familiar (autosómica recesiva: ambos padres portadores)', 'Consanguinidad parental'],
      clinica: 'Espectro amplio de gravedad, desde hemólisis compensada leve hasta anemia grave dependiente de transfusiones desde la infancia; ictericia neonatal prolongada frecuente, esplenomegalia variable (menos constante que en la esferocitosis hereditaria), fatiga crónica proporcional al grado de anemia. A diferencia de la deficiencia de G6PD, la hemólisis es de base crónica más que estrictamente episódica, aunque puede exacerbarse con infecciones intercurrentes.',
      criterios_dx: 'Actividad enzimática de piruvato cinasa reducida en un ensayo cuantitativo, en el contexto de anemia hemolítica crónica con Coombs directa negativa y sin otra causa identificada; panel genético dirigido a PKLR para confirmación molecular y consejo genético.',
      laboratorio: 'Panel de hemólisis positivo; equinocitos en el frotis (hallazgo de apoyo, menos específico que los esferocitos de la esferocitosis hereditaria); paradójicamente, la curva de disociación de la hemoglobina está desviada a la derecha por el aumento compensador de 2,3-difosfoglicerato, lo que mejora la liberación de oxígeno tisular y explica por qué estos pacientes toleran grados de anemia más profundos de lo esperado con menos síntomas.',
      imagen: 'Ensayo cuantitativo de actividad enzimática de piruvato cinasa; ecografía abdominal para esplenomegalia y tamizaje de colelitiasis.',
      complementarios: 'Aplicar el mismo panel de hemólisis y de exclusión de causas adquiridas que en las membranopatías.',
      dx_diferencial: 'Esferocitosis hereditaria (esferocitos más prominentes), otras enzimopatías glucolíticas menos frecuentes, anemia hemolítica autoinmune (Coombs directa positiva).',
      tx_medico: 'Ácido fólico indefinido, igual que en las membranopatías; soporte transfusional guiado por síntomas —recordando que estos pacientes toleran anemias más profundas que otras causas por el desplazamiento favorable de la curva de disociación de la hemoglobina, por lo que el umbral transfusional se individualiza más por síntomas que por un valor aislado de hemoglobina—.',
      tx_farmacologico: 'Mitapivat (activador alostérico de la piruvato cinasa) como terapia dirigida específica en pacientes seleccionados no dependientes de transfusión regular, con mejoría documentada de la hemoglobina y marcadores de hemólisis; representa el primer tratamiento dirigido al defecto molecular específico de esta entidad.',
      tx_intervencionista: 'Esplenectomía en la forma moderada-grave sintomática o dependiente de transfusión, con la misma lógica y precauciones que en la esferocitosis hereditaria, aunque con una respuesta típicamente menos completa (la hemólisis persiste en mayor grado que en las membranopatías, por el componente de ineficacia eritropoyética intramedular que no depende solo del bazo).',
      criterios_uci: 'Crisis aplásica grave con inestabilidad hemodinámica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa (no es una enfermedad de la célula madre hematopoyética); el trasplante alogénico se ha usado excepcionalmente en casos muy graves refractarios, sin ser el estándar de manejo.',
      seguimiento_hospitalario: 'Igual que las membranopatías, según la complicación aguda que motive el ingreso.',
      seguimiento_ambulatorio: 'Biometría hemática periódica, ecografía abdominal seriada para colelitiasis, evaluación de respuesta si se inicia mitapivat, cuidados posesplenectomía si se realizó.',
      pronostico: 'Variable según el grado de deficiencia enzimática; los pacientes con anemia crónica profunda pero bien tolerada (por el desplazamiento de la curva de disociación de la hemoglobina) pueden tener una calidad de vida mejor de lo que sugeriría la cifra de hemoglobina aislada.',
      algoritmo: ['Anemia hemolítica crónica con Coombs negativa, sin esferocitos prominentes → sospechar enzimopatía', 'Actividad enzimática de piruvato cinasa reducida → confirma el diagnóstico', 'Panel genético (PKLR) para confirmación molecular', 'Ácido fólico indefinido; individualizar transfusión por síntomas, no solo por Hb', 'No dependiente de transfusión regular → considerar mitapivat', 'Moderada/grave sintomática o dependiente de transfusión → esplenectomía']
    },
    {
      nombre: 'Crisis aplásica',
      color: '#7a1f3d',
      definicion: 'Complicación aguda transversal que puede ocurrir sobre cualquiera de las 4 entidades de esta sección (ver cada tarjeta): cese transitorio y grave de la eritropoyesis, típicamente por infección aguda por parvovirus B19, que interrumpe bruscamente la producción reticulocitaria compensadora de la que depende el paciente con hemólisis crónica, produciendo un descenso brusco y potencialmente grave de la hemoglobina.',
      fisiopatologia: 'El parvovirus B19 infecta selectivamente a los precursores eritroides tempranos (a través del receptor P antigen/globósido), causando su lisis directa y el cese temporal de la eritropoyesis durante 7-10 días; en un individuo sano, este cese pasa clínicamente inadvertido porque la vida media eritrocitaria normal (~120 días) amortigua la caída de hemoglobina. En el paciente con hemólisis crónica compensada (vida media eritrocitaria acortada a días-semanas), la dependencia crítica de la producción reticulocitaria continua para mantener la hemoglobina hace que el mismo cese transitorio produzca una caída brusca y grave de la hemoglobina, sin el amortiguamiento protector de la reserva eritrocitaria normal.',
      epidemiologia: 'Puede ocurrir sobre cualquiera de las 4 entidades de esta sección, y es la complicación aguda más temida de las membranopatías y la deficiencia de piruvato cinasa (hemólisis crónica de base); en brotes comunitarios de parvovirus B19 (quinta enfermedad), los pacientes con hemólisis crónica subyacente presentan un riesgo desproporcionado de crisis aplásica sintomática.',
      factores_riesgo: ['Hemólisis crónica de base con vida media eritrocitaria muy acortada (mayor riesgo en las formas más graves)', 'Exposición a un brote comunitario de parvovirus B19', 'Ausencia de inmunidad previa al parvovirus B19'],
      clinica: 'Descenso brusco y sintomático de la hemoglobina (fatiga marcada, disnea, palidez) en un paciente con hemólisis crónica conocida, con frecuencia precedido o acompañado de un pródromo viral inespecífico (fiebre, malestar general); a diferencia de una exacerbación hemolítica, NO hay ictericia acentuada ni reticulocitosis —al contrario, los reticulocitos están característicamente ausentes o muy disminuidos—.',
      criterios_dx: 'Descenso agudo de la hemoglobina con reticulocitopenia marcada (IPR muy bajo, ver Escalas) en un paciente con anemia hemolítica crónica conocida, más serología o PCR positiva para parvovirus B19.',
      laboratorio: 'Reticulocitos absolutos muy bajos o ausentes (a diferencia de la reticulocitosis basal esperada); IgM anti-parvovirus B19 positiva (infección reciente) o PCR de parvovirus B19 positiva, particularmente útil en el paciente inmunocomprometido donde la respuesta serológica puede ser inadecuada.',
      imagen: 'Ninguna específica; el diagnóstico es clínico y serológico/molecular.',
      complementarios: 'Aislamiento de gotitas respiratorias en el paciente hospitalizado hasta confirmar o descartar el diagnóstico, dado el riesgo de transmisión nosocómica, particularmente a embarazadas (riesgo de hidropesía fetal) e inmunocomprometidos en la sala.',
      dx_diferencial: 'Exacerbación hemolítica aguda simple (que sí cursa con reticulocitosis, a diferencia de la crisis aplásica), deficiencia concurrente de folato (crisis megaloblástica, ver esa tarjeta, que también reduce la reticulocitosis pero de forma más gradual), supresión medular por otro fármaco/tóxico concurrente.',
      tx_medico: 'Manejo de soporte; la crisis es autolimitada una vez que se resuelve la infección y se restablece la eritropoyesis (habitualmente 1-2 semanas).',
      tx_farmacologico: 'Ninguno específico dirigido al virus (no existe tratamiento antiviral estándar para el parvovirus B19 en el huésped inmunocompetente); inmunoglobulina intravenosa en el paciente inmunocomprometido con infección persistente/crónica por parvovirus B19.',
      tx_intervencionista: 'Transfusión de concentrado eritrocitario si la anemia es sintomática o la hemoglobina desciende a un nivel que lo amerita, como puente hasta la recuperación de la eritropoyesis endógena.',
      criterios_uci: 'Anemia grave sintomática con inestabilidad hemodinámica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Biometría hemática y recuento de reticulocitos seriados hasta confirmar la recuperación de la producción medular; aislamiento de gotitas mientras dure el riesgo de transmisión.',
      seguimiento_ambulatorio: 'Ninguno específico una vez resuelta la crisis; educación al paciente y la familia sobre reconocer signos de alarma (palidez marcada, fatiga extrema) ante futuros brotes comunitarios de parvovirus B19.',
      pronostico: 'Excelente con soporte transfusional oportuno; la eritropoyesis se restablece espontáneamente en 1-2 semanas en el huésped inmunocompetente, sin secuela permanente.',
      algoritmo: ['Descenso brusco de Hb en paciente con hemólisis crónica conocida, SIN reticulocitosis ni ictericia acentuada → sospechar crisis aplásica', 'Reticulocitos absolutos muy bajos + IgM/PCR de parvovirus B19', 'Aislamiento de gotitas si está hospitalizado', 'Transfusión de soporte según gravedad de la anemia', 'Vigilancia hasta la recuperación espontánea de reticulocitos (1-2 semanas)', 'Inmunoglobulina IV solo si es inmunocomprometido con infección persistente']
    },
    {
      nombre: 'Crisis megaloblástica',
      color: '#5c3d5c',
      definicion: 'Complicación que puede desarrollarse sobre cualquiera de las 4 entidades de esta sección con hemólisis crónica de base (ver cada tarjeta), particularmente la esferocitosis hereditaria y la deficiencia de piruvato cinasa: deficiencia aguda de folato por el consumo acelerado que exige el recambio eritropoyético crónicamente aumentado, con caída sobreañadida de la hemoglobina y macrocitosis marcada.',
      fisiopatologia: 'El recambio eritropoyético compensador crónicamente elevado en la hemólisis crónica consume folato a una tasa varias veces mayor que la normal, agotando las reservas hepáticas (habitualmente suficientes solo para unos meses) si la ingesta o la suplementación no lo compensan; el déficit resultante de folato compromete la síntesis de ADN de los precursores eritroides en división rápida, superponiendo un componente de eritropoyesis ineficaz megaloblástica sobre la hemólisis periférica de base.',
      epidemiologia: 'Prevenible casi por completo con la suplementación profiláctica de ácido fólico, por lo que hoy es infrecuente en el paciente con seguimiento médico regular; sigue ocurriendo en el paciente no diagnosticado previamente o sin adherencia a la suplementación, particularmente durante el embarazo (mayor demanda de folato) o periodos de crecimiento acelerado en la infancia/adolescencia.',
      factores_riesgo: ['Ausencia de suplementación profiláctica con ácido fólico', 'Embarazo (mayor demanda de folato superpuesta a la ya aumentada por la hemólisis crónica)', 'Ingesta dietética inadecuada de folato', 'Crecimiento acelerado en la infancia/adolescencia'],
      clinica: 'Empeoramiento gradual (a diferencia de la instalación brusca de la crisis aplásica) de la anemia con macrocitosis marcada, en un paciente con hemólisis crónica conocida sin suplementación de folato adecuada; puede coexistir con síntomas neurológicos si hay deficiencia concomitante de vitamina B12, aunque esta no es característica de la hemólisis crónica per se.',
      criterios_dx: 'Macrocitosis marcada (VCM desproporcionadamente elevado respecto al basal del paciente) con folato sérico/eritrocitario bajo, en un paciente con hemólisis crónica conocida sin suplementación adecuada.',
      laboratorio: 'Folato sérico y eritrocitario bajos; frotis con macroovalocitos y neutrófilos hipersegmentados (cambios megaloblásticos clásicos, superpuestos a la morfología de base de la entidad hemolítica); homocisteína elevada como marcador adicional de deficiencia de folato.',
      imagen: 'Ninguna específica.',
      complementarios: 'Descartar deficiencia concomitante de vitamina B12, que puede coexistir y tiene manejo e implicaciones neurológicas distintas.',
      dx_diferencial: 'Crisis aplásica por parvovirus B19 (reticulocitopenia marcada en vez de la reticulocitosis relativamente conservada de la crisis megaloblástica pura), deficiencia concomitante de hierro (que atenuaría la macrocitosis esperada, un patrón mixto a reconocer).',
      tx_medico: 'Corrección de la ingesta dietética si es deficiente.',
      tx_farmacologico: 'Ácido fólico a dosis de repleción (1-5 mg/día) hasta la normalización, seguido de la dosis profiláctica de mantenimiento indefinida (1 mg/día) que debería haberse mantenido desde el inicio en todo paciente con hemólisis crónica.',
      tx_intervencionista: 'Transfusión de concentrado eritrocitario solo si la anemia es sintomática grave mientras se corrige el déficit.',
      criterios_uci: 'No aplica de forma directa, salvo anemia grave sintomática con inestabilidad.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta hematológica a la repleción de folato (reticulocitosis apropiada en los días siguientes al inicio).',
      seguimiento_ambulatorio: 'Refuerzo de la adherencia a la suplementación profiláctica de ácido fólico indefinida, la medida que previene esta complicación casi por completo.',
      pronostico: 'Excelente y completamente reversible con la repleción de folato; la prevención con suplementación profiláctica indefinida es altamente eficaz.',
      algoritmo: ['Empeoramiento gradual de la anemia con macrocitosis marcada en hemólisis crónica conocida → sospechar déficit de folato', 'Folato sérico/eritrocitario bajo confirma el diagnóstico', 'Descartar déficit concomitante de B12', 'Iniciar ácido fólico a dosis de repleción', 'Verificar reticulocitosis de respuesta en los días siguientes', 'Reforzar adherencia a la suplementación profiláctica indefinida']
    },
    {
      nombre: 'Colelitiasis pigmentaria',
      color: '#8a6a1f',
      definicion: 'Complicación crónica que puede desarrollarse sobre cualquiera de las 4 entidades de esta sección (ver cada tarjeta) por la hiperbilirrubinemia indirecta sostenida: formación de cálculos biliares de bilirrubinato de calcio (a diferencia de los cálculos de colesterol más frecuentes en la población general), con el riesgo asociado de colecistitis, coledocolitiasis y colangitis.',
      fisiopatologia: 'El recambio crónicamente aumentado del hemo por la hemólisis sostenida eleva la excreción biliar de bilirrubina no conjugada/sus derivados, que se combinan con calcio para precipitar como cálculos de bilirrubinato, típicamente de aspecto negro y friable, distintos de los cálculos de colesterol amarillentos habituales; la prevalencia aumenta acumulativamente con la edad y el grado de hemólisis, siendo relativamente infrecuentes antes de la adolescencia salvo en las formas más graves.',
      epidemiologia: 'La colelitiasis pigmentaria puede desarrollarse ya en la adolescencia en la hemólisis crónica moderada-grave, con una prevalencia acumulada que aumenta sustancialmente con la edad; es una de las indicaciones más frecuentes de intervención quirúrgica electiva en estos pacientes, a menudo combinada con la esplenectomía cuando ambas están indicadas.',
      factores_riesgo: ['Mayor grado e intensidad de la hemólisis crónica', 'Mayor edad/tiempo de evolución de la enfermedad de base', 'Coexistencia de otros factores de riesgo de litiasis biliar (obesidad, sexo femenino, embarazo)'],
      clinica: 'Con frecuencia asintomática, detectada de forma incidental en la ecografía de tamizaje; cuando es sintomática, dolor en hipocondrio derecho tipo cólico biliar, con las mismas complicaciones potenciales que cualquier colelitiasis (colecistitis aguda, coledocolitiasis con ictericia obstructiva sobreañadida a la indirecta de base, colangitis, pancreatitis biliar).',
      criterios_dx: 'Ecografía abdominal con cálculos vesiculares; la distinción con la hiperbilirrubinemia indirecta crónica de base (que por sí sola no eleva la bilirrubina directa) es clave para reconocer una obstrucción biliar sobreañadida si aparece ictericia con un patrón bioquímico mixto/directo nuevo.',
      laboratorio: 'Bilirrubina directa/total y fosfatasa alcalina si se sospecha obstrucción biliar sobreañadida (colecistitis, coledocolitiasis), que se superpone a la hiperbilirrubinemia indirecta crónica basal del paciente.',
      imagen: 'Ecografía abdominal (estudio de elección para colelitiasis); colangiopancreatografía por resonancia magnética o colangiografía si hay sospecha de coledocolitiasis.',
      complementarios: 'Tamizaje ecográfico periódico desde la adolescencia en la hemólisis crónica moderada-grave, incluso sin síntomas.',
      dx_diferencial: 'Cólico biliar por litiasis de colesterol coincidente (menos probable pero posible en el mismo paciente), otras causas de dolor en hipocondrio derecho (hepatitis, absceso hepático, dolor referido pleuropulmonar).',
      tx_medico: 'Manejo del dolor y de la colecistitis aguda con el protocolo estándar (analgesia, antibiótico si hay datos de infección) si se presenta.',
      tx_farmacologico: 'Ninguno específico dirigido a disolver los cálculos de bilirrubinato (a diferencia de algunos cálculos de colesterol, no responden a ácido ursodesoxicólico).',
      tx_intervencionista: 'Colecistectomía (preferentemente laparoscópica) en la colelitiasis sintomática o complicada; con frecuencia se combina en el mismo tiempo quirúrgico con la esplenectomía cuando ambas están indicadas en el mismo paciente, para evitar dos procedimientos separados. La colelitiasis asintomática hallada de forma incidental no requiere colecistectomía profiláctica de rutina por sí sola, salvo que ya se vaya a realizar esplenectomía concurrente por otra indicación.',
      criterios_uci: 'Colangitis aguda grave con sepsis, pancreatitis biliar grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Manejo estándar de la colecistitis aguda/coledocolitiasis si es el motivo de ingreso.',
      seguimiento_ambulatorio: 'Ecografía de tamizaje periódica si no se ha realizado colecistectomía; reevaluación combinada con la indicación de esplenectomía si ambas coexisten.',
      pronostico: 'Excelente tras la colecistectomía en la forma sintomática; el riesgo de recurrencia de cálculos nuevos es bajo tras la colecistectomía (a diferencia de la persistencia del riesgo de formación mientras la vesícula esté presente y la hemólisis continúe).',
      algoritmo: ['Hemólisis crónica moderada-grave → ecografía de tamizaje periódica desde la adolescencia', 'Cálculos asintomáticos → vigilancia, sin colecistectomía profiláctica aislada', 'Cálculos sintomáticos o complicados → colecistectomía laparoscópica', 'Si coexiste indicación de esplenectomía → combinar ambos procedimientos en el mismo tiempo quirúrgico', 'Ictericia nueva con patrón mixto/directo → descartar coledocolitiasis sobreañadida']
    },
    {
      nombre: 'Sobrecarga de hierro transfusional',
      color: '#2e5f6b',
      definicion: 'Complicación crónica que puede desarrollarse sobre cualquiera de las 4 entidades de esta sección en el paciente con dependencia transfusional prolongada (más relevante en las formas graves de esferocitosis hereditaria, piropoiquilocitosis hereditaria y deficiencia de piruvato cinasa que en la deficiencia de G6PD, donde la transfusión regular es infrecuente): depósito progresivo de hierro en órganos por la ausencia de un mecanismo fisiológico de excreción activa del exceso transfusional.',
      fisiopatologia: 'Cada unidad de concentrado eritrocitario aporta ~200-250 mg de hierro; sin una vía de excreción regulada, el hierro en exceso se deposita progresivamente más allá de la capacidad de unión de la transferrina, generando hierro libre no unido a transferrina que promueve daño oxidativo tisular, predominantemente hepático, cardiaco y endocrino. A diferencia del síndrome mielodisplásico (donde la sobrecarga es prácticamente siempre transfusional), en las anemias hemolíticas hereditarias graves existe además cierto grado de absorción intestinal de hierro aumentada de forma compensadora por la eritropoyesis crónicamente estimulada, que puede contribuir de forma modesta incluso en el paciente no transfundido con enfermedad muy activa.',
      epidemiologia: 'Riesgo clínicamente relevante a partir de aproximadamente 10-20 transfusiones acumuladas en el paciente pediátrico/joven con dependencia transfusional desde edad temprana (umbral menor que en el adulto con SMD, por la mayor expectativa de vida disponible para acumular la sobrecarga); infrecuente en la deficiencia de G6PD, donde la transfusión regular rara vez es necesaria.',
      factores_riesgo: ['Dependencia transfusional desde edad temprana (piropoiquilocitosis hereditaria grave, esferocitosis hereditaria grave, deficiencia de piruvato cinasa grave)', 'Retraso en la indicación de esplenectomía cuando está indicada (prolonga la necesidad transfusional)', 'Ausencia de quelación profiláctica'],
      clinica: 'Habitualmente asintomática en fases tempranas (detectada por laboratorio antes que por clínica); en fases avanzadas, disfunción hepática, insuficiencia cardiaca (miocardiopatía restrictiva/dilatada por depósito, ver el tema de Miocardiopatías para el detalle de esa entidad), y endocrinopatías (diabetes, hipogonadismo, retraso puberal en el paciente pediátrico).',
      criterios_dx: 'Ferritina sérica seriada en ascenso (habitualmente &gt;1000 ng/mL como umbral de alerta para iniciar quelación, en el contexto de politransfusión documentada) más confirmación cuantitativa por RM (T2*) si hay duda diagnóstica o para guiar la intensidad de la quelación.',
      laboratorio: 'Ferritina sérica seriada, saturación de transferrina; función hepática.',
      imagen: 'Resonancia magnética con secuencia T2* hepática y cardiaca: cuantifica la concentración de hierro en cada órgano de forma no invasiva y guía la intensidad/objetivo de la quelación, superior a la ferritina sérica aislada (que puede estar falsamente elevada por inflamación concomitante).',
      complementarios: 'Ninguno adicional específico.',
      dx_diferencial: 'Elevación de ferritina por inflamación/infección activa concomitante (reactante de fase aguda), hemocromatosis hereditaria concomitante no relacionada (infrecuente pero posible).',
      tx_medico: 'Reevaluar oportunamente la indicación de esplenectomía en el paciente transfusión-dependiente, dado que reducirla o eliminarla es la medida más eficaz para detener la acumulación adicional de hierro.',
      tx_farmacologico: 'Quelación de hierro con deferasirox oral (agente de elección por conveniencia posológica) o deferoxamina subcutánea/IV (alternativa), iniciada típicamente con ferritina &gt;1000 ng/mL y politransfusión sostenida, con el objetivo de mantener la ferritina por debajo de ese umbral y prevenir/revertir el daño orgánico.',
      tx_intervencionista: 'No aplica de forma directa más allá de la esplenectomía ya descrita como medida que reduce indirectamente el requerimiento transfusional futuro.',
      criterios_uci: 'No aplica de forma directa, salvo descompensación de un órgano ya dañado por la sobrecarga (p. ej. insuficiencia cardiaca aguda).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico salvo por la complicación orgánica ya establecida.',
      seguimiento_ambulatorio: 'Ferritina sérica cada 3 meses durante quelación activa, RM T2* periódica (aproximadamente anual) para reevaluar la carga de hierro y ajustar la dosis del quelante, vigilancia de toxicidad renal/ocular/auditiva del quelante, particularmente relevante en el seguimiento a largo plazo del paciente pediátrico.',
      pronostico: 'Con quelación oportuna, el daño orgánico es prevenible o parcialmente reversible; no tratada, contribuye de forma independiente a la morbimortalidad a largo plazo, particularmente cardiaca y hepática.',
      algoritmo: ['Dependencia transfusional sostenida (≥10-20 unidades acumuladas) → ferritina sérica seriada', 'Ferritina &gt;1000 ng/mL sostenida → confirmar con RM T2* hepática/cardiaca si hay duda', 'Reevaluar indicación de esplenectomía para reducir el requerimiento transfusional futuro', 'Iniciar quelación (deferasirox oral de elección) si persiste la sobrecarga', 'Monitorización trimestral de ferritina + vigilancia de toxicidad del quelante', 'Reevaluación con RM T2* anual para ajustar intensidad']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La vigilancia del grado de hemólisis, la respuesta reticulocitaria y las 3 complicaciones agudas transversales (crisis aplásica, crisis megaloblástica, y la exacerbación de una colelitiasis ya conocida) son comunes a las 4 entidades de esta sección, con matices específicos de cada una detallados en su propia tarjeta.',
    parametros: [
      'Biometría hemática con reticulocitos seriados: distingue una exacerbación hemolítica simple (reticulocitosis conservada) de una crisis aplásica sobreañadida (reticulocitopenia marcada).',
      'Bilirrubina y LDH seriadas como marcadores indirectos de la intensidad de la hemólisis activa.',
      'Vigilancia de fiebre/pródromo viral que pueda anticipar una crisis aplásica por parvovirus B19.',
      'Ferritina sérica periódica si hay politransfusión: prevención de la sobrecarga de hierro antes de que se vuelva sintomática.',
      'Función renal durante cualquier episodio de hemólisis intravascular con hemoglobinuria (particularmente relevante en la deficiencia de G6PD).'
    ],
    criterios_uci_general: 'Anemia grave sintomática con inestabilidad hemodinámica, hemólisis intravascular masiva con lesión renal aguda, sepsis fulminante posesplenectomía, colangitis aguda grave.',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'No aplica de forma directa a ninguna de las 4 entidades de esta sección (no son enfermedades primarias de la célula madre hematopoyética); el trasplante alogénico se ha usado excepcionalmente en la deficiencia de piruvato cinasa muy grave refractaria, sin ser el estándar de manejo.',
    prevencion: 'Suplementación profiláctica indefinida con ácido fólico en toda hemólisis crónica significativa, vacunación completa contra gérmenes encapsulados antes de una esplenectomía electiva (con al menos 2 semanas de anticipación) y revacunación periódica después, educación sobre fármacos/alimentos a evitar de por vida en la deficiencia de G6PD, tamizaje ecográfico periódico de colelitiasis desde la adolescencia en la hemólisis crónica moderada-grave, y uso racional del soporte transfusional para minimizar la sobrecarga de hierro.'
  }
};

export const compCites = {
  'Esferocitosis hereditaria': { definicion: [1], criterios_dx: [2, 3], tx_intervencionista: [2, 13] },
  'Eliptocitosis hereditaria': { fisiopatologia: [4], criterios_dx: [3] },
  'Deficiencia de glucosa-6-fosfato deshidrogenasa (G6PD)': { epidemiologia: [5, 6], criterios_dx: [10] },
  'Deficiencia de piruvato cinasa': { epidemiologia: [7], tx_farmacologico: [8] },
  'Crisis aplásica': { fisiopatologia: [12] },
  'Colelitiasis pigmentaria': { tx_intervencionista: [13] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Índice de producción reticulocitaria (IPR)': [11], 'Clasificación de gravedad de la esferocitosis hereditaria': [2]
};
export const escalaCalc = { 'Índice de producción reticulocitaria (IPR)': 'ipr', 'Clasificación de gravedad de la esferocitosis hereditaria': 'hsgravedad' };
export const compGroups = [
  { title: 'Anemias hemolíticas hereditarias por mecanismo (enfermedades)', items: ['Esferocitosis hereditaria', 'Eliptocitosis hereditaria', 'Deficiencia de glucosa-6-fosfato deshidrogenasa (G6PD)', 'Deficiencia de piruvato cinasa'] },
  { title: 'Complicaciones transversales (cualquier forma)', items: ['Crisis aplásica', 'Crisis megaloblástica', 'Colelitiasis pigmentaria', 'Sobrecarga de hierro transfusional'] }
];
export const complicacionesIntro = 'El panorama general (epidemiología, etiología, factores de riesgo, fisiopatología) ya se cubrió en Definición. Estas tarjetas son el recurso de consulta con el detalle operativo de cada entidad: diagnóstico diferencial específico, dosis, criterios de UCI y el algoritmo paso a paso. El grupo "(enfermedades)" son las 2 membranopatías y las 2 enzimopatías; el grupo "Complicaciones transversales" son eventos que pueden surgir sobre cualquiera de ellas, no diagnósticos independientes.';
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
  root: { title: 'ANEMIAS HEMOLÍTICAS HEREDITARIAS', color: '#5c4a7a', target: 'definicion' },
  branches: [
    { title: 'Membranopatías', sub: 'Defecto del citoesqueleto', color: '#8c3a34', target: 'diagnostico', leaves: [
      { title: 'Esferocitosis hereditaria', sub: 'Esferocitos, EMA binding test', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Eliptocitosis hereditaria', sub: 'Eliptocitos, espectrina/4.1', color: '#966b35', target: 'complicaciones' }
    ] },
    { title: 'Enzimopatías', sub: 'Defecto metabólico/redox', color: '#5c6b8c', target: 'diagnostico', leaves: [
      { title: 'Deficiencia de G6PD', sub: 'Hemólisis episódica, ligada al X', color: '#5c6b8c', target: 'complicaciones' },
      { title: 'Deficiencia de piruvato cinasa', sub: 'Hemólisis crónica, mitapivat', color: '#6b4a2e', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [11], imagen: [3] };
export const clasificacionCite = [2, 11];
export const seguimientoCite = [2];
