// topics/policitemia-secundaria/content.js: Policitemia Secundaria / Eritrocitosis Secundaria
// (hipoxia, producción inapropiada de EPO, congénita/hereditaria, relativa/espuria). Estructura
// idéntica al contrato del motor (misma forma que anemia-enfermedad-cronica/anemia-ferropenica).
// Sigue la convención de figuras en línea (figBlock(), numerada "Tabla N"/"Imagen N" con conteo
// continuo por tipo).

export const meta = {
  id: 'policitemia-secundaria',
  titulo: 'Policitemia Secundaria',
  subtitulo: 'Módulo 16 · Medicina Interna',
  accent: '#2e6b6b',
  accentDim: '#5c9c9c'
};

// Reproduce el marcado de .modal-figure (mismo helper que los temas recientes de Hematología)
// para insertar figuras EN LÍNEA justo debajo del párrafo/entrada que las menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const algoritmoJak2EpoHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:520px;margin:0 auto;">
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--ink);text-align:center;">Eritrocitosis confirmada (Hb/Hct, criterios OMS 2016)</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--ink);text-align:center;">Determinar JAK2 (V617F/exón 12) + EPO sérica</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;width:100%;">
    <div style="flex:1;min-width:140px;background:#6b4a2e33;border:1px solid #6b4a2e;border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:var(--ink);text-align:center;"><strong>JAK2 positiva</strong><br>→ Policitemia vera</div>
    <div style="flex:1;min-width:140px;background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:var(--ink);text-align:center;"><strong>JAK2 negativa + EPO baja</strong><br>→ Patrón atípico: descartar PV JAK2 negativa</div>
    <div style="flex:1;min-width:140px;background:#2e6b6b33;border:1px solid #2e6b6b;border-radius:8px;padding:8px 10px;font-size:10.5px;line-height:1.5;color:var(--ink);text-align:center;"><strong>JAK2 negativa + EPO normal/alta</strong><br>→ Eritrocitosis secundaria: buscar causa</div>
  </div>
</div>`;

const hifEpoHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:460px;margin:0 auto;">
  <div style="background:var(--panel2);border:1px solid var(--line);border-radius:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--ink);text-align:center;">Hipoxia tisular renal (real o funcional)</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="background:#3d5a7333;border:1px solid #3d5a73;border-radius:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--ink);text-align:center;">Estabilización del factor inducible por hipoxia (HIF)</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="background:#966b3533;border:1px solid #966b35;border-radius:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--ink);text-align:center;">Transcripción del gen de eritropoyetina (EPO)</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--ink);text-align:center;">Proliferación y supervivencia de progenitores eritroides</div>
  <div style="color:var(--ink-dim);font-size:16px;">↓</div>
  <div style="background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:8px 16px;font-size:11px;font-weight:600;color:var(--ink);text-align:center;">Masa eritrocitaria ↑ (eritrocitosis)</div>
</div>
<div class="figure-grade-box">Esta vía se activa de forma FISIOLÓGICA y regulada en la eritrocitosis por hipoxia real, y de forma DESREGULADA (autónoma o farmacológica) en la producción inapropiada de EPO y en las formas congénitas; en la policitemia vera, en cambio, la proliferación eritroide es independiente de esta vía (ver Complicaciones).</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La policitemia secundaria (o eritrocitosis secundaria) es un aumento de la masa eritrocitaria (reflejado por hemoglobina/hematocrito elevados) producido por un mecanismo reactivo o no clonal, casi siempre mediado por eritropoyetina (EPO) elevada de forma apropiada (respuesta fisiológica a hipoxia tisular real) o inapropiada (producción autónoma no regulada por el oxígeno, o estimulación externa); a diferencia de la policitemia vera (ver el tema de Síndromes Mieloproliferativos), aquí NO hay una mutación clonal de la célula madre hematopoyética (JAK2 negativa), y la elevación es habitualmente aislada a la serie roja, sin la leucocitosis, trombocitosis ni esplenomegalia características de la policitemia vera. El reto diagnóstico central de este tema es distinguir la eritrocitosis secundaria verdadera (masa eritrocitaria real aumentada) de la eritrocitosis relativa/espuria (hemoconcentración por volumen plasmático reducido, sin verdadero aumento de la masa eritrocitaria) y de la policitemia vera (ver la tarjeta correspondiente).</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La causa más frecuente de eritrocitosis secundaria en la práctica clínica es la enfermedad pulmonar crónica hipoxemiante y la apnea obstructiva del sueño; el tabaquismo activo (por carboxihemoglobina y por hipoxia tisular funcional) es también una causa muy prevalente, con frecuencia subestimada. Las causas por producción inapropiada de EPO (tumores, postrasplante renal, andrógenos exógenos) y las formas congénitas son considerablemente menos frecuentes.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Hipoxia con EPO apropiadamente elevada</strong>: enfermedad pulmonar obstructiva crónica con hipoxemia crónica, apnea obstructiva del sueño, cardiopatía congénita cianótica, tabaquismo activo (carboxihemoglobina), residencia en gran altitud.</li>
    <li><strong>Producción inapropiada de EPO</strong>: tumores productores de EPO (carcinoma de células renales, hepatocarcinoma, hemangioblastoma cerebeloso, leiomioma uterino, feocromocitoma), eritrocitosis postrasplante renal, andrógenos/esteroides anabólicos exógenos.</li>
    <li><strong>Eritrocitosis congénita/hereditaria</strong>: mutaciones del receptor de eritropoyetina (EPOR), mutaciones del gen VHL (policitemia de Chuvash), variantes de hemoglobina de alta afinidad por el oxígeno, deficiencia de 2,3-bisfosfoglicerato mutasa.</li>
    <li><strong>Eritrocitosis relativa/espuria</strong> (síndrome de Gaisböck): hemoconcentración por reducción del volumen plasmático, SIN un verdadero aumento de la masa eritrocitaria.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Enfermedad pulmonar crónica</li>
    <li>Apnea obstructiva del sueño no diagnosticada/tratada</li>
    <li>Tabaquismo activo</li>
    <li>Residencia en gran altitud</li>
    <li>Cardiopatía congénita cianótica</li>
    <li>Uso de andrógenos/esteroides anabólicos exógenos</li>
    <li>Obesidad y uso de diuréticos (para la forma relativa/espuria)</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> En condiciones normales, la hipoxia tisular renal estabiliza el factor inducible por hipoxia (HIF), que activa la transcripción del gen de la eritropoyetina; la EPO producida estimula la proliferación y supervivencia de los progenitores eritroides en la médula ósea, aumentando la masa eritrocitaria hasta que la mejor oxigenación tisular resultante retroalimenta negativamente la producción de EPO.${figBlock('Imagen 1', 'La vía HIF-EPO', hifEpoHtml)} En las formas de hipoxia con EPO apropiadamente elevada, este mecanismo fisiológico funciona de forma correcta ante una hipoxia tisular real; el aumento de la masa eritrocitaria es, en cierto sentido, una respuesta adaptativa (aunque con consecuencias hemodinámicas adversas si es excesiva, ver Complicaciones). En las formas de producción inapropiada de EPO, la hormona se produce de forma autónoma (por un tumor) o por un estímulo externo (andrógenos) sin relación con el estado real de oxigenación tisular. En las formas congénitas, un defecto genético altera directamente la vía de señalización de la EPO, la regulación de la respuesta a hipoxia, o la afinidad de la hemoglobina por el oxígeno. Analogía: en la eritrocitosis secundaria por hipoxia real, el cuerpo es como una fábrica que legítimamente necesita más camiones (eritrocitos) porque la carretera real está congestionada (hipoxia tisular); en la producción inapropiada de EPO, es como si alguien mandara órdenes falsas de "fabricar más camiones" sin que exista ninguna congestión real en la carretera.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde el hallazgo incidental de hemoglobina/hematocrito elevados en un laboratorio de rutina hasta síntomas de hiperviscosidad (cefalea, mareo, acúfenos, visión borrosa, plétora facial) y manifestaciones de la enfermedad de base (disnea en la enfermedad pulmonar, somnolencia diurna en la apnea del sueño, cianosis en la cardiopatía congénita); el diagnóstico definitivo, la distinción de la policitemia vera y de la eritrocitosis relativa, y el manejo de cada forma se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Gordeuk VR, Key NS, Prchal JT. Re-evaluation of hematocrit as a determinant of thrombotic risk in erythrocytosis. Haematologica. 2019;104(4):653-658.',
  'McMullin MF. The classification and diagnosis of erythrocytosis. Int J Lab Hematol. 2008;30(6):447-459.',
  'Mithoowani S, Laureano M, Crowther MA, Hillis CM. Investigation and management of erythrocytosis. CMAJ. 2020;192(32):E913-E918.',
  'Patnaik MM, Tefferi A. The complete evaluation of erythrocytosis: congenital and acquired. Leukemia. 2009;23(5):834-844.',
  'McMullin MF, Mead AJ, Ali S, et al. A guideline for the diagnosis and management of polycythaemia vera. Br J Haematol. 2019;184(2):176-191.',
  'Arber DA, Orazi A, Hasserjian RP, et al. International Consensus Classification of Myeloid Neoplasms and Acute Leukemias. Blood. 2022;140(11):1200-1228.',
  'Percy MJ, Furlow PW, Lucas GS, et al. A gain-of-function mutation in the HIF2A gene in familial erythrocytosis. N Engl J Med. 2008;358(2):162-168.',
  'Ang SO, Chen H, Hirota K, et al. Disruption of oxygen homeostasis underlies congenital Chuvash polycythemia. Nat Genet. 2002;32(4):614-621.',
  'Bento C, Percy MJ, Gardie B, et al. Genetic basis of congenital erythrocytosis: mutation update and online databases. Hum Mutat. 2014;35(1):15-26.',
  'Kaelin WG, Ratcliffe PJ. Oxygen sensing by metazoans: the central role of the HIF hydroxylase pathway. Mol Cell. 2008;30(4):393-402.',
  'Vlahakos DV, Marathias KP, Madias NE. The role of the renin-angiotensin system in the regulation of erythropoiesis. Am J Kidney Dis. 2010;56(3):558-565.',
  'Gaston RS, Julian BA, Curtis JJ. Posttransplant erythrocytosis: an enigma revisited. Am J Kidney Dis. 1994;24(1):1-11.',
  'Ohlander SJ, Varghese B, Pastuszak AW. Erythrocytosis Following Testosterone Therapy. Sex Med Rev. 2018;6(1):77-85.',
  'Randi ML, Bertozzi I, Cosi E, et al. Idiopathic erythrocytosis: a study of a large cohort with a long follow-up. Ann Hematol. 2016;95(2):233-237.',
  'Smith JR, Landaw SA. Smokers\' polycythemia. N Engl J Med. 1978;298(1):6-10.',
  'Weinreb NJ, Shih CF. Spurious polycythemia. Semin Hematol. 1975;12(4):397-407.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Eritrocitosis leve compensada',
      tituloB: 'Eritrocitosis sintomática / hiperviscosidad',
      compensada: 'Hemoglobina/hematocrito elevados con frecuencia como hallazgo incidental en un laboratorio de rutina, sin síntomas atribuibles directamente a la eritrocitosis en sí; pueden predominar los síntomas de la enfermedad de base (disnea, somnolencia diurna) sin que se haya reconocido aún la eritrocitosis asociada.',
      descompensada: 'Cefalea, mareo, acúfenos, visión borrosa transitoria, plétora facial (síntomas de hiperviscosidad, más marcados cuanto mayor es el hematocrito); eventos trombóticos venosos o arteriales como manifestación inicial en algunos casos (ver Complicaciones); cianosis, dedos en palillo de tambor si hay cardiopatía congénita cianótica o enfermedad pulmonar avanzada de base.'
    },
    laboratorio: [
      { prueba: 'Biometría hemática con hemoglobina/hematocrito', utilidad: 'Criterios de eritrocitosis (OMS 2016, umbral compartido con la policitemia vera, ver Escalas): hemoglobina &gt;16.5 g/dL en varones o &gt;16 g/dL en mujeres, o hematocrito &gt;49%/48% respectivamente.' },
      { prueba: 'Gasometría arterial con saturación de oxígeno', utilidad: 'Hipoxemia (SaO2 &lt;92%) apoya una causa hipóxica; una saturación normal no descarta hipoxia tisular funcional (por ejemplo, carboxihemoglobina elevada en el tabaquismo, o una hemoglobina de alta afinidad).' },
      { prueba: 'Nivel de carboxihemoglobina', utilidad: 'En todo fumador activo o con sospecha de exposición ocupacional/ambiental a monóxido de carbono.' },
      { prueba: 'Nivel de eritropoyetina sérica (con calculadora combinada con JAK2, ver Escalas)', utilidad: 'Baja/indetectable en la policitemia vera (por retroalimentación negativa de la masa eritrocitaria ya expandida de forma autónoma); normal o elevada en la eritrocitosis secundaria.' },
      { prueba: 'Mutación JAK2 V617F (y del exón 12 si es negativa con alta sospecha clínica)', utilidad: 'Negativa por definición en la eritrocitosis secundaria y en la relativa/espuria; su positividad confirma policitemia vera (ver Complicaciones y el tema de Síndromes Mieloproliferativos).' }
    ],
    no_invasivos: [
      { metodo: 'Herramienta JAK2 + EPO (con calculadora)', interpretacion: 'Orienta el diagnóstico diferencial central de este tema entre eritrocitosis secundaria y policitemia vera.', cutoff: 'Categórico, ver Escalas' },
      { metodo: 'Polisomnografía', interpretacion: 'Si hay sospecha clínica de apnea obstructiva del sueño (somnolencia diurna, ronquido, pausas respiratorias observadas).', cutoff: 'N/A' },
      { metodo: 'Volumen plasmático/masa eritrocitaria por dilución isotópica', interpretacion: 'Estándar de referencia histórico para confirmar una eritrocitosis verdadera y distinguirla de la relativa/espuria; hoy de disponibilidad limitada, reservado a casos dudosos.', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'TC de tórax / ecocardiograma', hallazgos: 'Si hay sospecha de enfermedad pulmonar crónica o cardiopatía congénita cianótica no caracterizada.' },
      { modalidad: 'Ecografía o TC abdominal/renal', hallazgos: 'Si se sospecha un tumor productor de eritropoyetina (particularmente carcinoma de células renales) como causa de EPO inapropiadamente elevada sin causa hipóxica evidente.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La herramienta JAK2 + EPO (con calculadora) es el eje diagnóstico central de este tema, dado que separa la policitemia vera (JAK2 positiva) de la eritrocitosis secundaria (JAK2 negativa, EPO normal/alta) con una sola combinación de 2 datos de laboratorio.${figBlock('Imagen 2', 'Algoritmo JAK2 + EPO', algoritmoJak2EpoHtml)}`,
    escalas: [
      { nombre: 'Herramienta JAK2 + EPO', componentes: 'Mutación JAK2 (V617F o exón 12), nivel de eritropoyetina sérica. Calculadora disponible más abajo.', formula: 'Interpretación categórica combinada de ambos datos.', interpretacion: 'JAK2 positiva → policitemia vera, independientemente de la EPO. JAK2 negativa + EPO normal/alta → eritrocitosis secundaria. JAK2 negativa + EPO baja → patrón atípico, descartar policitemia vera JAK2 negativa (exón 12).' },
      { nombre: 'Criterios OMS 2016 de eritrocitosis', componentes: 'Hemoglobina, hematocrito.', formula: 'Hemoglobina &gt;16.5 g/dL (varón) / &gt;16 g/dL (mujer), o hematocrito &gt;49%/48% respectivamente.', interpretacion: 'Confirma eritrocitosis (umbral compartido con los criterios diagnósticos de policitemia vera), pero no distingue por sí solo la causa; requiere la herramienta JAK2 + EPO para el diferencial.' },
      { nombre: 'Eritrocitosis verdadera vs. relativa/espuria', componentes: 'Masa eritrocitaria, volumen plasmático (dilución isotópica en el caso dudoso).', formula: 'Categórico.', interpretacion: 'En la eritrocitosis relativa/espuria (síndrome de Gaisböck), la masa eritrocitaria es normal pero el volumen plasmático está reducido, dando una elevación falsa del hematocrito sin una verdadera eritrocitosis (ver esa tarjeta en Complicaciones).' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Eritrocitosis por hipoxia',
      color: '#3d5a73',
      definicion: 'Eritrocitosis secundaria producida por una elevación apropiada de eritropoyetina en respuesta a hipoxia tisular real (o funcional), la causa más frecuente de eritrocitosis secundaria en la práctica clínica; incluye la enfermedad pulmonar crónica hipoxemiante, la apnea obstructiva del sueño, la cardiopatía congénita cianótica, el tabaquismo activo, y la residencia en gran altitud.',
      fisiopatologia: 'La hipoxia tisular renal estabiliza el factor inducible por hipoxia (HIF), que activa la transcripción del gen de la eritropoyetina en las células peritubulares renales; la EPO producida estimula la proliferación y supervivencia de los progenitores eritroides, aumentando la masa eritrocitaria como mecanismo adaptativo para mejorar el transporte de oxígeno. En la enfermedad pulmonar crónica y la apnea obstructiva del sueño, la hipoxemia intermitente o sostenida activa este mecanismo de forma directa; en la cardiopatía congénita cianótica, el cortocircuito derecha-izquierda mezcla sangre desoxigenada con la circulación sistémica; en el tabaquismo activo, el monóxido de carbono se une a la hemoglobina con mucha mayor afinidad que el oxígeno (formando carboxihemoglobina), reduciendo la liberación tisular de oxígeno pese a una saturación de oxígeno arterial medida que puede parecer engañosamente normal (el oxímetro de pulso no distingue carboxihemoglobina de oxihemoglobina); en la gran altitud, la menor presión parcial de oxígeno ambiental reduce la saturación arterial de forma directa.',
      epidemiologia: 'La causa más frecuente de eritrocitosis secundaria en la práctica clínica; el tabaquismo activo y la apnea obstructiva del sueño no diagnosticada son causas particularmente prevalentes y con frecuencia subreconocidas como causa de una eritrocitosis ya documentada.',
      factores_riesgo: ['Enfermedad pulmonar obstructiva crónica con hipoxemia crónica', 'Apnea obstructiva del sueño no diagnosticada o no tratada', 'Tabaquismo activo', 'Cardiopatía congénita cianótica no corregida', 'Residencia en gran altitud'],
      clinica: `Síntomas de la enfermedad de base (disnea en la enfermedad pulmonar, somnolencia diurna y ronquido en la apnea del sueño, cianosis y dedos en palillo de tambor en la cardiopatía cianótica) junto con los síntomas de hiperviscosidad si el hematocrito es marcadamente elevado (cefalea, mareo, acúfenos, plétora facial).${figBlock('Imagen 3', 'Acropaquia (dedos en palillo de tambor)', `
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Dedos_con_acropaquia.jpg/960px-Dedos_con_acropaquia.jpg" alt="Acropaquia (dedos en palillo de tambor): ensanchamiento e hipertrofia de las falanges distales, un hallazgo asociado a la hipoxia crónica de la cardiopatía congénita cianótica y la enfermedad pulmonar avanzada." style="width:100%;max-width:380px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">
`)}`,
      criterios_dx: 'Eritrocitosis (criterios OMS 2016, ver Escalas) con EPO sérica normal o elevada, JAK2 negativa, y evidencia de hipoxemia real o funcional (saturación de oxígeno baja, carboxihemoglobina elevada, o diagnóstico establecido de la causa hipóxica de base).',
      laboratorio: 'EPO sérica normal-elevada; JAK2 V617F negativa; gasometría arterial con hipoxemia (o saturación normal con carboxihemoglobina elevada en el fumador); biometría hemática con eritrocitosis aislada, sin leucocitosis ni trombocitosis significativas (a diferencia de la policitemia vera, ver esa tarjeta).',
      imagen: 'TC de tórax o pruebas de función pulmonar si hay sospecha de enfermedad pulmonar crónica no caracterizada; ecocardiograma si hay sospecha de cardiopatía congénita cianótica.',
      complementarios: 'Polisomnografía si hay sospecha clínica de apnea obstructiva del sueño; nivel de carboxihemoglobina en todo fumador activo.',
      dx_diferencial: 'Policitemia vera (JAK2 positiva, con frecuencia leucocitosis/trombocitosis/esplenomegalia asociadas, EPO baja, ver esa tarjeta), eritrocitosis relativa/espuria (masa eritrocitaria normal, ver esa tarjeta), producción inapropiada de EPO sin hipoxia real (ver esa tarjeta).',
      tx_medico: 'Tratamiento dirigido y óptimo de la causa hipóxica de base (oxigenoterapia suplementaria en la enfermedad pulmonar crónica hipoxemiante, presión positiva continua en la vía aérea -CPAP- en la apnea obstructiva del sueño, cese tabáquico, corrección quirúrgica de la cardiopatía congénita cianótica cuando es factible), la medida más eficaz y la que corrige el mecanismo subyacente.',
      tx_farmacologico: 'Ninguno específico dirigido a la eritrocitosis en sí; el tratamiento es el de la causa hipóxica de base.',
      tx_intervencionista: 'Flebotomía terapéutica considerada con cautela y de forma individualizada en la eritrocitosis hipóxica sintomática grave, pero con matices importantes respecto a la policitemia vera (ver la tarjeta de riesgos de la flebotomía indiscriminada), dado que reducir el hematocrito en una eritrocitosis que es, en cierto grado, adaptativa a la hipoxia real puede empeorar el transporte de oxígeno tisular si se realiza sin cautela.',
      criterios_uci: 'Síntomas de hiperviscosidad grave con compromiso neurológico, evento trombótico mayor con inestabilidad.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa a la eritrocitosis en sí.',
      seguimiento_hospitalario: 'Vigilancia del hematocrito durante el tratamiento de la causa hipóxica de base.',
      seguimiento_ambulatorio: 'Reevaluación periódica de la biometría hemática conforme se trata la causa de base (la eritrocitosis debería mejorar con la corrección de la hipoxemia); vigilancia de cese tabáquico sostenido si esa fue la causa identificada.',
      pronostico: 'Favorable en cuanto a la eritrocitosis en sí, que mejora con la corrección de la causa hipóxica de base cuando es posible; el pronóstico global depende del curso de la enfermedad de base (pulmonar, cardiaca).',
      algoritmo: ['Eritrocitosis + EPO normal-elevada + JAK2 negativa → sospechar causa hipóxica', 'Gasometría arterial + carboxihemoglobina (si fumador) para documentar hipoxemia real o funcional', 'Polisomnografía si hay sospecha de apnea obstructiva del sueño', 'Tratamiento dirigido de la causa hipóxica de base como medida central', 'Flebotomía terapéutica solo con cautela e individualizada en la eritrocitosis sintomática grave']
    },
    {
      nombre: 'Producción inapropiada de eritropoyetina',
      color: '#8c3a34',
      definicion: 'Eritrocitosis secundaria producida por una elevación de eritropoyetina no relacionada con hipoxia tisular real, por producción autónoma (tumores productores de EPO), pérdida de la regulación fisiológica normal (eritrocitosis postrasplante renal), o estimulación externa de la eritropoyesis (andrógenos/esteroides anabólicos exógenos).',
      fisiopatologia: 'Los tumores productores de EPO (carcinoma de células renales, hepatocarcinoma, hemangioblastoma cerebeloso, leiomioma uterino, feocromocitoma) sintetizan y liberan eritropoyetina de forma autónoma, sin relación con el estado real de oxigenación tisular, con frecuencia por activación anómala de la misma vía de respuesta a hipoxia (HIF) que normalmente regula la producción renal fisiológica de EPO, pero de forma desregulada dentro del tumor. La eritrocitosis postrasplante renal se atribuye a una producción de EPO por el riñón trasplantado que ya no está sujeta a la regulación fisiológica normal del riñón nativo enfermo, junto con un posible componente de activación del sistema renina-angiotensina. Los andrógenos/esteroides anabólicos exógenos estimulan directamente la proliferación de los progenitores eritroides en la médula ósea y, en menor medida, aumentan la producción de EPO, produciendo eritrocitosis como efecto adverso reconocido, particularmente con la terapia de reemplazo de testosterona.',
      epidemiologia: 'Los tumores productores de EPO son una causa poco frecuente pero clínicamente relevante de eritrocitosis, particularmente el carcinoma de células renales; la eritrocitosis postrasplante renal ocurre en una proporción minoritaria pero no despreciable de los receptores; la eritrocitosis por terapia de reemplazo de testosterona es un efecto adverso reconocido y frecuente.',
      factores_riesgo: ['Masa renal, hepática o de otro órgano no caracterizada', 'Trasplante renal previo', 'Uso de andrógenos/esteroides anabólicos exógenos, incluida la terapia de reemplazo de testosterona', 'Antecedente familiar de enfermedad de von Hippel-Lindau'],
      clinica: 'Con frecuencia asintomática en cuanto a la eritrocitosis en sí, detectada de forma incidental; síntomas de la causa de base si están presentes (dolor lumbar/hematuria en el carcinoma de células renales, síntomas neurológicos en el hemangioblastoma cerebeloso).',
      criterios_dx: 'Eritrocitosis con EPO sérica elevada, JAK2 negativa, sin evidencia de hipoxemia real o funcional que explique la elevación de EPO, en el contexto de un factor de riesgo identificado.',
      laboratorio: 'EPO sérica elevada (con frecuencia más marcadamente que en la eritrocitosis hipóxica); JAK2 V617F negativa; gasometría arterial normal, sin hipoxemia que explique la elevación de EPO.',
      imagen: 'Ecografía o TC abdominal/renal dirigida a buscar un tumor productor de EPO cuando no hay una causa hipóxica ni farmacológica evidente; RM cerebral si hay sospecha de hemangioblastoma cerebeloso.',
      complementarios: 'Revisión estructurada de fármacos activos (andrógenos, esteroides anabólicos) y del antecedente de trasplante renal antes de iniciar el estudio de imagen dirigido a buscar un tumor productor de EPO.',
      dx_diferencial: 'Eritrocitosis por hipoxia real (EPO elevada pero con hipoxemia documentada, ver esa tarjeta), policitemia vera (JAK2 positiva, EPO baja, ver esa tarjeta), eritrocitosis congénita (VHL con EPO elevada de forma hereditaria, sin masa tumoral identificable, ver esa tarjeta).',
      tx_medico: 'Suspensión del andrógeno/esteroide anabólico causal si es identificable y el beneficio-riesgo lo permite; en la eritrocitosis postrasplante renal, un inhibidor de la enzima convertidora de angiotensina o un antagonista del receptor de angiotensina II ha demostrado reducir eficazmente el hematocrito en varios estudios.',
      tx_farmacologico: 'Igual que lo anterior; no existe un fármaco dirigido específicamente a "bloquear" la EPO en sí en la práctica clínica habitual.',
      tx_intervencionista: 'Resección quirúrgica del tumor productor de EPO identificado, cuando es factible, como tratamiento definitivo y curativo de la eritrocitosis asociada.',
      criterios_uci: 'Igual que la forma hipóxica, según la gravedad de los síntomas de hiperviscosidad o de un evento trombótico asociado.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a la eritrocitosis en sí (aunque puede coexistir con el manejo de la enfermedad renal que motivó un trasplante previo, en el caso de la eritrocitosis postrasplante).',
      seguimiento_hospitalario: 'Vigilancia del hematocrito durante el estudio dirigido a la causa.',
      seguimiento_ambulatorio: 'Reevaluación del hematocrito tras la suspensión del andrógeno causal, el ajuste con inhibidor de la enzima convertidora de angiotensina en la forma postrasplante, o la resección del tumor identificado.',
      pronostico: 'Favorable con la corrección de la causa identificable; el pronóstico del tumor productor de EPO en sí depende de su naturaleza y estadio, no de la eritrocitosis asociada.',
      algoritmo: ['Eritrocitosis + EPO elevada + JAK2 negativa + sin hipoxemia documentada → sospechar producción inapropiada de EPO', 'Revisar fármacos activos (andrógenos) y antecedente de trasplante renal', 'Sin causa farmacológica/postrasplante → estudio de imagen dirigido a buscar un tumor productor de EPO', 'Suspender el fármaco causal si es identificable', 'Tumor identificado → resección quirúrgica cuando es factible']
    },
    {
      nombre: 'Eritrocitosis congénita/hereditaria',
      color: '#5c6b8c',
      definicion: 'Eritrocitosis secundaria producida por un defecto genético hereditario que altera directamente la vía de señalización de la eritropoyetina, la regulación de la respuesta a hipoxia, o la afinidad de la hemoglobina por el oxígeno; un grupo heterogéneo y poco frecuente de causas, que debe sospecharse particularmente ante una eritrocitosis de inicio temprano con antecedente familiar positivo.',
      fisiopatologia: 'Las mutaciones de ganancia de función del receptor de eritropoyetina (EPOR) producen una señalización constitutiva o exagerada del receptor ante la EPO circulante, con niveles de EPO sérica característicamente bajos-normales pese a la eritrocitosis. Las mutaciones del gen VHL (que codifica un componente de la vía de degradación del factor inducible por hipoxia) impiden la degradación normal del HIF incluso en condiciones de oxigenación tisular adecuada, produciendo una activación inapropiada y sostenida de la transcripción del gen de la eritropoyetina (el prototipo es la policitemia de Chuvash). Las variantes de hemoglobina de alta afinidad por el oxígeno desplazan la curva de disociación de la hemoglobina hacia la izquierda, de modo que la hemoglobina "retiene" el oxígeno con mayor fuerza y lo libera menos eficientemente a los tejidos pese a una saturación arterial de oxígeno normal o incluso alta, generando una hipoxia tisular funcional que estimula la producción de EPO de forma fisiológicamente "correcta" pero clínicamente engañosa.',
      epidemiologia: 'Colectivamente poco frecuentes; deben sospecharse particularmente en la eritrocitosis de inicio en la infancia o en el adulto joven, con antecedente familiar positivo, y tras haber excluido razonablemente las causas hipóxicas adquiridas y la policitemia vera.',
      factores_riesgo: ['Antecedente familiar de eritrocitosis o de policitemia sin diagnóstico claro', 'Inicio de la eritrocitosis en la infancia o en el adulto joven', 'Ascendencia de poblaciones donde se ha descrito una mutación fundadora reconocida (por ejemplo, la región de Chuvashia, Rusia), aunque hoy reconocida en múltiples poblaciones'],
      clinica: 'Con frecuencia asintomática o con síntomas leves de hiperviscosidad; en la policitemia de Chuvash, se ha descrito además un fenotipo vascular particular (venas varicosas, hemangiomas, riesgo trombótico y hemorrágico que puede coexistir de forma aparentemente paradójica).',
      criterios_dx: 'Eritrocitosis de inicio temprano con antecedente familiar positivo, EPO sérica baja-normal (EPOR) o elevada (VHL), JAK2 negativa, tras excluir razonablemente las causas hipóxicas adquiridas, la producción inapropiada de EPO por un tumor, y la policitemia vera; confirmación por estudio genético dirigido cuando está disponible.',
      laboratorio: 'EPO sérica baja-normal (mutación de EPOR) o elevada (mutación de VHL); JAK2 V617F negativa; estudio genético dirigido a EPOR, VHL, o secuenciación de la hemoglobina si se sospecha una variante de alta afinidad.',
      imagen: 'Ninguno diagnóstico obligatorio de rutina, salvo el dirigido a buscar manifestaciones asociadas reconocidas de un síndrome específico.',
      complementarios: 'Asesoría genética familiar y tamizaje en familiares de primer grado cuando se confirma una mutación causal específica.',
      dx_diferencial: 'Policitemia vera (JAK2 positiva, ver esa tarjeta), eritrocitosis por hipoxia real o producción inapropiada de EPO adquiridas (ver esas tarjetas), eritrocitosis idiopática (cuando el estudio completo, incluido el genético disponible, no identifica una causa).',
      tx_medico: 'No existe tratamiento dirigido al defecto genético en sí; el manejo se centra en el control de los síntomas de hiperviscosidad y del riesgo trombovascular asociado.',
      tx_farmacologico: 'Ninguno específico dirigido a corregir el defecto genético; manejo de soporte según los síntomas.',
      tx_intervencionista: 'Flebotomía terapéutica considerada con cautela en el paciente sintomático, con las mismas precauciones que en la eritrocitosis hipóxica (ver la tarjeta de riesgos de la flebotomía indiscriminada), dado que el objetivo de hematocrito óptimo en estas formas congénitas no está tan bien establecido como en la policitemia vera.',
      criterios_uci: 'Igual que las demás formas, según la gravedad de los síntomas de hiperviscosidad o de un evento trombótico/hemorrágico asociado.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia del hematocrito y de síntomas de hiperviscosidad.',
      seguimiento_ambulatorio: 'Seguimiento hematológico a largo plazo, dado el carácter congénito y permanente del defecto; asesoría genética familiar.',
      pronostico: 'Variable según el defecto genético específico; en general, un curso más benigno en cuanto al riesgo de transformación neoplásica que la policitemia vera (al no ser una neoplasia clonal), aunque con un riesgo trombovascular que debe vigilarse activamente.',
      algoritmo: ['Eritrocitosis de inicio temprano + antecedente familiar positivo → sospechar causa congénita', 'Excluir razonablemente causas hipóxicas adquiridas, producción inapropiada de EPO por tumor, y policitemia vera (JAK2)', 'EPO baja-normal → considerar mutación de EPOR', 'EPO elevada sin causa hipóxica ni tumoral → considerar mutación de VHL o hemoglobina de alta afinidad', 'Estudio genético dirigido y asesoría familiar si se confirma una mutación causal']
    },
    {
      nombre: 'Eritrocitosis relativa/espuria',
      color: '#966b35',
      definicion: 'Elevación aparente del hematocrito por reducción del volumen plasmático circulante (hemoconcentración), SIN un verdadero aumento de la masa eritrocitaria corporal total; también llamada síndrome de Gaisböck en su descripción clásica asociada a hipertensión arterial, obesidad y tabaquismo; una entidad fundamentalmente distinta de las 3 tarjetas anteriores de esta sección, que sí representan un aumento real de la masa eritrocitaria.',
      fisiopatologia: 'Cualquier causa de reducción del volumen plasmático circulante (deshidratación aguda o crónica, uso de diuréticos, quemaduras extensas, tercer espacio) eleva el hematocrito medido sin que exista ningún cambio en el número absoluto de eritrocitos corporales; en el síndrome de Gaisböck clásico, la combinación de obesidad, hipertensión arterial y tabaquismo se asocia a una reducción crónica y leve-moderada del volumen plasmático de mecanismo multifactorial, sin una verdadera eritrocitosis subyacente en la mayoría de los casos, aunque un subgrupo de estos pacientes puede tener además cierto grado de eritrocitosis verdadera leve superpuesta (por ejemplo, relacionada con apnea obstructiva del sueño no reconocida, frecuente en este mismo perfil de paciente).',
      epidemiologia: 'Frecuente en la práctica clínica general, particularmente en el varón de edad media con obesidad, hipertensión arterial y tabaquismo activo, el perfil clásicamente descrito; con frecuencia se superpone o se confunde con la eritrocitosis verdadera leve de causas hipóxicas.',
      factores_riesgo: ['Obesidad', 'Hipertensión arterial', 'Tabaquismo activo', 'Uso de diuréticos', 'Deshidratación aguda o crónica'],
      clinica: 'Con frecuencia asintomática en cuanto al hematocrito elevado en sí; los síntomas presentes, si los hay, corresponden a las comorbilidades asociadas (hipertensión arterial, síntomas de apnea obstructiva del sueño no reconocida, que debe buscarse activamente en este perfil de paciente).',
      criterios_dx: 'Hematocrito elevado con masa eritrocitaria total normal (documentada por dilución isotópica cuando está disponible, o inferida clínicamente por la ausencia de otros datos de eritrocitosis verdadera tras un estudio completo) y volumen plasmático reducido, en el contexto de los factores de riesgo típicos.',
      laboratorio: 'EPO sérica habitualmente normal; JAK2 negativa; el hematocrito elevado no se acompaña de otros datos de eritrocitosis verdadera.',
      imagen: 'Ninguno diagnóstico obligatorio; dirigido a investigar activamente una apnea obstructiva del sueño no reconocida (polisomnografía) dado el perfil de paciente compartido.',
      complementarios: 'Medición de la masa eritrocitaria y el volumen plasmático por dilución isotópica en el caso dudoso persistente tras el estudio clínico y de laboratorio inicial.',
      dx_diferencial: 'Eritrocitosis verdadera leve de cualquier causa de esta sección (particularmente la hipóxica por apnea obstructiva del sueño no reconocida, que comparte el mismo perfil de paciente y debe buscarse activamente antes de asumir que el hematocrito elevado es puramente relativo).',
      tx_medico: 'Corrección de los factores contribuyentes identificables (pérdida de peso, cese tabáquico, control de la hipertensión arterial, ajuste del uso de diuréticos si son la causa), sin que exista un tratamiento específico dirigido al hematocrito elevado en sí.',
      tx_farmacologico: 'Ninguno específico dirigido al hematocrito; manejo de las comorbilidades asociadas según su propio criterio clínico.',
      tx_intervencionista: 'La flebotomía terapéutica NO está indicada en la eritrocitosis relativa/espuria pura, dado que no hay una verdadera masa eritrocitaria excesiva que reducir, y el procedimiento no corrige el mecanismo ni aporta beneficio comprobado en esta entidad.',
      criterios_uci: 'No aplica de forma directa a esta entidad en sí.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir manejo hospitalario específico.',
      seguimiento_ambulatorio: 'Reevaluación del hematocrito tras la corrección de los factores contribuyentes identificados; vigilancia activa de apnea obstructiva del sueño no reconocida en este perfil de paciente.',
      pronostico: 'Favorable en cuanto al hematocrito en sí, que no representa una verdadera eritrocitosis; el pronóstico depende de las comorbilidades cardiovasculares asociadas, que sí requieren manejo activo por su propio riesgo cardiovascular independiente.',
      algoritmo: ['Hematocrito elevado + perfil de obesidad/hipertensión/tabaquismo/diuréticos → sospechar eritrocitosis relativa/espuria', 'Buscar activamente apnea obstructiva del sueño no reconocida antes de asumir que es puramente relativa', 'Caso dudoso persistente → medición de masa eritrocitaria/volumen plasmático por dilución isotópica', 'Corregir los factores contribuyentes (peso, tabaquismo, hipertensión, diuréticos)', 'NO indicar flebotomía terapéutica en esta entidad, dado que no hay verdadera masa eritrocitaria excesiva']
    },
    {
      nombre: 'Diferencial con policitemia vera',
      color: '#6b4a2e',
      definicion: 'Complicación diagnóstica central de este tema: distinguir la eritrocitosis secundaria (reactiva, no clonal) de la policitemia vera (neoplasia mieloproliferativa clonal, ver el tema de Síndromes Mieloproliferativos), dado que ambas comparten la elevación del hematocrito como hallazgo común pero difieren radicalmente en mecanismo, pronóstico, riesgo de transformación, y manejo.',
      fisiopatologia: 'La policitemia vera es producida por una mutación clonal adquirida (JAK2 V617F en la gran mayoría de los casos, o del exón 12 en una minoría) que activa de forma constitutiva la vía de señalización JAK-STAT independiente de eritropoyetina, produciendo proliferación eritroide autónoma que retroalimenta negativamente y suprime la producción fisiológica de EPO (de ahí su nivel característicamente bajo). En la eritrocitosis secundaria, por el contrario, la proliferación eritroide es enteramente dependiente de EPO (elevada de forma apropiada o inapropiada según la causa, ver las 4 tarjetas de enfermedad de esta sección), sin ninguna mutación clonal de la célula madre hematopoyética.',
      epidemiologia: 'La distinción es clínicamente relevante en la práctica diaria, dado que ambas entidades pueden presentarse con un hematocrito similar al momento del hallazgo inicial, pero con implicaciones pronósticas y terapéuticas completamente distintas.',
      factores_riesgo: ['Eritrocitosis sin una causa hipóxica o farmacológica evidente al estudio inicial', 'Ausencia de determinación de JAK2 y EPO sérica antes de asumir una causa secundaria o iniciar tratamiento', 'Presencia de leucocitosis, trombocitosis o esplenomegalia asociadas (que orientan hacia policitemia vera, no hacia eritrocitosis secundaria pura)'],
      clinica: 'Ambas entidades pueden compartir síntomas de hiperviscosidad; la presencia de prurito acuagénico (tras el baño, muy específico de la policitemia vera), esplenomegalia, o eritromelalgia orienta fuertemente hacia policitemia vera y no hacia eritrocitosis secundaria (ver el tema de Síndromes Mieloproliferativos).',
      criterios_dx: 'JAK2 V617F (o del exón 12) positiva confirma policitemia vera, independientemente del nivel de EPO. JAK2 negativa con EPO sérica normal o elevada apoya fuertemente una eritrocitosis secundaria (ver la herramienta JAK2 + EPO en Escalas, con calculadora). JAK2 negativa con EPO baja es un patrón menos común que requiere descartar policitemia vera JAK2 negativa (considerar secuenciación del exón 12) antes de concluir eritrocitosis secundaria.',
      laboratorio: 'JAK2 V617F y, si es negativa con alta sospecha clínica, secuenciación del exón 12; EPO sérica; biometría hemática completa (la leucocitosis y trombocitosis asociadas son mucho más sugestivas de policitemia vera que de eritrocitosis secundaria pura).',
      imagen: 'Ecografía abdominal si hay sospecha de esplenomegalia, un hallazgo que orienta hacia policitemia vera.',
      complementarios: 'Biopsia de médula ósea reservada para el caso dudoso persistente tras el estudio de JAK2/EPO, mostrando hipercelularidad/panmielosis en la policitemia vera frente a una médula normal o con hiperplasia eritroide aislada en la eritrocitosis secundaria.',
      dx_diferencial: 'Este es, en sí mismo, el diagnóstico diferencial central; ver el tema de Síndromes Mieloproliferativos para el desarrollo completo de la policitemia vera.',
      tx_medico: 'Determinar JAK2 y EPO sérica en TODO paciente con eritrocitosis antes de asumir una causa secundaria o iniciar cualquier tratamiento dirigido, la medida diagnóstica central para evitar un manejo erróneo.',
      tx_farmacologico: 'Según el diagnóstico final establecido: manejo dirigido de la causa secundaria si corresponde (ver las 4 tarjetas de enfermedad de esta sección), o el manejo específico de la policitemia vera (citorreducción, aspirina, flebotomía con objetivo de hematocrito &lt;45%, ver el tema de Síndromes Mieloproliferativos) si se confirma esa entidad.',
      tx_intervencionista: 'Según el diagnóstico final establecido, con matices muy distintos entre ambas entidades respecto a la flebotomía terapéutica (ver la tarjeta de riesgos de la flebotomía indiscriminada).',
      criterios_uci: 'Según la gravedad de los síntomas de hiperviscosidad o de un evento trombótico asociado, independientemente de la causa final.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a la eritrocitosis secundaria; el trasplante alogénico es una consideración solo en la policitemia vera evolucionada a mielofibrosis secundaria (ver ese tema).',
      seguimiento_hospitalario: 'Vigilancia del hematocrito mientras se completa el estudio diferencial.',
      seguimiento_ambulatorio: 'Seguimiento según el diagnóstico final establecido, con implicaciones pronósticas y de vigilancia completamente distintas entre ambas entidades.',
      pronostico: 'La eritrocitosis secundaria, al no ser una neoplasia clonal, no tiene el riesgo de transformación a mielofibrosis o leucemia mieloide aguda característico de la policitemia vera; su pronóstico depende enteramente de la causa de base y del control del riesgo trombótico asociado a la hiperviscosidad.',
      algoritmo: ['Eritrocitosis confirmada (criterios OMS 2016) → determinar JAK2 y EPO sérica SIEMPRE antes de asumir la causa', 'JAK2 positiva → policitemia vera, manejar según ese tema', 'JAK2 negativa + EPO normal/alta → eritrocitosis secundaria, buscar la causa entre las 4 tarjetas de enfermedad de esta sección', 'JAK2 negativa + EPO baja → patrón atípico, descartar policitemia vera JAK2 negativa (exón 12) antes de concluir causa secundaria', 'Leucocitosis/trombocitosis/esplenomegalia asociadas → orientan fuertemente hacia policitemia vera']
    },
    {
      nombre: 'Trombosis venosa y arterial',
      color: '#7a1f3d',
      definicion: 'Complicación reconocida de cualquier forma de eritrocitosis con hematocrito marcadamente elevado (verdadera, no relativa/espuria), producida por el aumento de la viscosidad sanguínea asociado a la elevación de la masa eritrocitaria; el riesgo, aunque presente, es generalmente menor que en la policitemia vera (que añade el riesgo protrombótico intrínseco del clon mieloproliferativo, la trombocitosis y la leucocitosis asociadas, ver esa tarjeta).',
      fisiopatologia: 'El aumento del hematocrito eleva la viscosidad sanguínea de forma no lineal (el efecto sobre la viscosidad se acelera marcadamente por encima de ciertos umbrales de hematocrito), reduciendo el flujo sanguíneo microvascular y favoreciendo la estasis y la formación de trombos, tanto en la circulación venosa como en la arterial; a diferencia de la policitemia vera, en la eritrocitosis secundaria pura no hay el componente adicional de activación plaquetaria y leucocitaria intrínseca al clon mieloproliferativo, por lo que el riesgo trombótico absoluto es generalmente menor a un grado equivalente de hematocrito, aunque sigue siendo clínicamente relevante.',
      epidemiologia: 'El riesgo aumenta de forma proporcional al grado de elevación del hematocrito; particularmente relevante en el paciente con eritrocitosis grave y factores de riesgo cardiovascular adicionales concomitantes.',
      factores_riesgo: ['Hematocrito muy elevado', 'Tabaquismo activo (factor de riesgo trombótico independiente, además de causa frecuente de la eritrocitosis misma)', 'Inmovilización prolongada', 'Factores de riesgo trombótico adicionales (trombofilia, cirugía reciente, antecedente trombótico previo)'],
      clinica: 'Evento trombótico venoso (trombosis venosa profunda, tromboembolia pulmonar) o arterial (evento cerebrovascular isquémico, infarto agudo de miocardio, isquemia arterial periférica); síntomas premonitorios de hiperviscosidad (cefalea, mareo, acúfenos) pueden preceder al evento trombótico franco en algunos casos.',
      criterios_dx: 'Confirmación por el estudio de imagen dirigido según el sitio de trombosis sospechado, en el contexto de una eritrocitosis verdadera documentada.',
      laboratorio: 'Hematocrito al momento del evento; dímero D (de utilidad limitada como único criterio); estudio de trombofilia si hay factores adicionales que lo justifiquen.',
      imagen: 'Angio-TC, Doppler venoso, o el estudio dirigido específico según el sitio de trombosis sospechado.',
      complementarios: 'Reevaluación del diagnóstico diferencial completo (eritrocitosis secundaria vs. policitemia vera, ver esa tarjeta) tras un evento trombótico en un paciente con eritrocitosis, dado que puede ser la primera manifestación de cualquiera de las 2 entidades.',
      dx_diferencial: 'Trombosis de otra causa no relacionada con la eritrocitosis (debe considerarse el contexto clínico completo).',
      tx_medico: 'Manejo estándar del evento trombótico específico según su sitio y gravedad, en paralelo con el tratamiento dirigido de la causa de la eritrocitosis de base.',
      tx_farmacologico: 'Anticoagulación según el manejo estándar del evento trombótico venoso confirmado; antiagregación considerada en el evento arterial según su contexto clínico específico; tratamiento dirigido de la causa de la eritrocitosis de base como medida preventiva a mediano plazo.',
      tx_intervencionista: 'Según el manejo estándar del evento trombótico específico (trombólisis o trombectomía en casos seleccionados según el sitio y la gravedad).',
      criterios_uci: 'Evento trombótico mayor con compromiso hemodinámico o neurológico significativo.',
      criterios_tips: 'No aplica de forma directa, salvo trombosis venosa esplácnica extensa con hipertensión portal significativa (escenario más característico de la policitemia vera que de la eritrocitosis secundaria pura, ver ese tema).',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia del hematocrito y de la respuesta al tratamiento del evento trombótico.',
      seguimiento_ambulatorio: 'Anticoagulación según el protocolo estándar de la trombosis confirmada; control activo de los factores de riesgo trombótico adicionales identificados.',
      pronostico: 'Depende del sitio y la magnitud del evento trombótico, manejado según su protocolo estándar; el control de la causa de base de la eritrocitosis reduce el riesgo de recurrencia a mediano-largo plazo.',
      algoritmo: ['Evento trombótico venoso o arterial en un paciente con eritrocitosis conocida o nueva → confirmar por imagen dirigida', 'Reevaluar el diagnóstico diferencial completo (JAK2/EPO) si no se había hecho previamente', 'Anticoagulación/antiagregación según el manejo estándar del evento trombótico específico', 'Tratamiento dirigido de la causa de la eritrocitosis de base como medida preventiva', 'Control activo de factores de riesgo trombótico adicionales identificados']
    },
    {
      nombre: 'Riesgos de la flebotomía terapéutica indiscriminada',
      color: '#5c3d5c',
      definicion: 'Complicación yatrógena en la que se indica flebotomía terapéutica (extracción periódica de sangre para reducir el hematocrito, el pilar de manejo establecido en la policitemia vera) de forma indiscriminada en la eritrocitosis secundaria sin considerar que el mecanismo, el objetivo de hematocrito, y el balance riesgo-beneficio son diferentes entre ambas entidades.',
      fisiopatologia: 'En la eritrocitosis por hipoxia real, el aumento del hematocrito es, en cierto grado, una respuesta adaptativa al déficit de oxigenación tisular; reducir el hematocrito mediante flebotomía sin corregir primero (o en paralelo) la hipoxia de base puede, en teoría, reducir la capacidad de transporte de oxígeno de la sangre sin mejorar la oxigenación tisular real, empeorando potencialmente el equilibrio fisiológico que el propio organismo había establecido como compensación. Además, la flebotomía repetida, independientemente de la causa de la eritrocitosis, produce depleción progresiva de los depósitos de hierro, pudiendo inducir una ferropenia iatrogénica superpuesta.',
      epidemiologia: 'Riesgo reconocido cuando se extrapola el manejo estandarizado de la policitemia vera (donde la flebotomía con objetivo de hematocrito &lt;45% tiene beneficio demostrado en la reducción de eventos trombóticos) a la eritrocitosis secundaria sin ese mismo nivel de evidencia específica, particularmente en la forma hipóxica.',
      factores_riesgo: ['Indicación de flebotomía terapéutica sin haber establecido primero el diagnóstico diferencial completo (JAK2/EPO)', 'Extrapolación directa del objetivo de hematocrito de la policitemia vera a la eritrocitosis secundaria sin ese mismo respaldo de evidencia', 'Flebotomías repetidas sin vigilancia del estado de hierro concomitante'],
      clinica: 'Empeoramiento paradójico de los síntomas relacionados con la hipoxia de base (disnea, fatiga) si se reduce el hematocrito de forma agresiva en la eritrocitosis hipóxica sin corregir primero la causa; síntomas de ferropenia inducida por flebotomías repetidas si no se vigila el estado de hierro (ver el tema de Anemia Ferropénica).',
      criterios_dx: 'Clínico, en el contexto temporal de flebotomías terapéuticas repetidas indicadas sin un diagnóstico diferencial completo previo o sin vigilancia del estado de hierro.',
      laboratorio: 'Perfil de hierro de control en el paciente con flebotomías repetidas, particularmente si aparecen síntomas de ferropenia; gasometría arterial de control si se sospecha empeoramiento de la oxigenación tisular tras la reducción del hematocrito.',
      imagen: 'No aplica de forma directa.',
      complementarios: 'Revisión retrospectiva de la indicación original de la flebotomía, confirmando que se haya establecido el diagnóstico diferencial completo (JAK2/EPO) antes de haberla iniciado.',
      dx_diferencial: 'Policitemia vera genuina donde la flebotomía sí está firmemente indicada con el objetivo de hematocrito &lt;45% (ver ese tema), progresión de la enfermedad hipóxica de base no relacionada con la flebotomía en sí.',
      tx_medico: 'Establecer el diagnóstico diferencial completo (JAK2, EPO) ANTES de indicar flebotomía terapéutica de rutina en cualquier eritrocitosis; individualizar la decisión en la eritrocitosis secundaria según los síntomas de hiperviscosidad presentes, sin extrapolar automáticamente el objetivo de hematocrito de la policitemia vera.',
      tx_farmacologico: 'Reposición de hierro si se documenta ferropenia inducida por flebotomías repetidas, una vez descartada razonablemente cualquier otra causa de ferropenia concomitante (ver el tema de Anemia Ferropénica).',
      tx_intervencionista: 'Espaciar o suspender las flebotomías si se reconoce que fueron indicadas sin justificación adecuada, o ajustar su frecuencia según la respuesta clínica real y no solo según un objetivo numérico extrapolado de otra entidad.',
      criterios_uci: 'No aplica de forma directa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma directa.',
      seguimiento_ambulatorio: 'Vigilancia del perfil de hierro y de los síntomas relacionados con la hipoxia de base en todo paciente bajo flebotomía terapéutica repetida por eritrocitosis secundaria.',
      pronostico: 'Enteramente prevenible con el diagnóstico diferencial completo y la individualización de la indicación de flebotomía antes de iniciarla de forma rutinaria.',
      algoritmo: ['Eritrocitosis + indicación de flebotomía terapéutica → confirmar primero el diagnóstico diferencial completo (JAK2/EPO)', 'Eritrocitosis secundaria confirmada → individualizar la decisión según síntomas de hiperviscosidad, sin extrapolar automáticamente el objetivo de la policitemia vera', 'Vigilar el perfil de hierro en toda flebotomía repetida', 'Ferropenia inducida documentada → reponer hierro tras descartar otras causas', 'Empeoramiento de síntomas hipóxicos tras flebotomía → reconsiderar la indicación y espaciar/suspender']
    },
    {
      nombre: 'Retraso diagnóstico de una causa tratable',
      color: '#8a6a1f',
      definicion: 'Complicación diagnóstica en la que se atribuye la eritrocitosis a una causa aparente sin investigar activamente todas las posibilidades relevantes, con el riesgo de retrasar el diagnóstico de una causa genuinamente tratable, particularmente un tumor productor de eritropoyetina, una apnea obstructiva del sueño no reconocida, o una cardiopatía congénita cianótica susceptible de corrección.',
      fisiopatologia: 'El sesgo clínico de atribuir la eritrocitosis a la causa más evidente o más frecuente (por ejemplo, el tabaquismo en un paciente fumador) sin completar el estudio diferencial puede pasar por alto una segunda causa concomitante o una causa alternativa genuinamente distinta y tratable; esto es particularmente relevante dado que varias de las causas de esta sección (apnea obstructiva del sueño, tumores productores de EPO, cardiopatía congénita cianótica) tienen tratamientos específicos y potencialmente muy eficaces que no se instauran si el diagnóstico correcto no se establece.',
      epidemiologia: 'Riesgo reconocido particularmente en el paciente fumador (donde la eritrocitosis se atribuye con frecuencia exclusivamente al tabaquismo sin investigar otras causas concomitantes) y en el paciente obeso con perfil de eritrocitosis relativa/espuria (donde una apnea obstructiva del sueño verdadera y tratable puede coexistir sin ser reconocida).',
      factores_riesgo: ['Eritrocitosis atribuida a la causa más evidente sin completar el estudio diferencial', 'Ausencia de polisomnografía en el paciente con perfil de riesgo de apnea obstructiva del sueño', 'Ausencia de estudio de imagen dirigido cuando no hay una causa hipóxica o farmacológica clara', 'Tabaquismo activo como atribución automática sin considerar causas concomitantes'],
      clinica: 'El cuadro es el de la causa oculta no reconocida (por ejemplo, síntomas de un tumor productor de EPO en etapa avanzada, o de una apnea obstructiva del sueño no tratada con sus propias consecuencias cardiovasculares), enmascarado por la atribución inicial a una causa aparente distinta.',
      criterios_dx: 'Reconocimiento retrospectivo o prospectivo de una causa concomitante o alternativa de la eritrocitosis, genuinamente distinta de la inicialmente atribuida, tras un estudio dirigido que debió haberse realizado desde el inicio.',
      laboratorio: 'EPO sérica y JAK2 de rutina en toda eritrocitosis nueva, independientemente de que exista una causa aparente evidente (por ejemplo, tabaquismo), dado que no excluye una causa concomitante.',
      imagen: 'Polisomnografía y/o estudio de imagen dirigido (torácico, abdominal) según la sospecha clínica, incluso cuando ya existe una causa aparente que "explicaría" la eritrocitosis de forma superficial.',
      complementarios: 'Revisión estructurada y sistemática de todas las causas posibles de esta sección antes de cerrar el estudio diagnóstico con una sola causa atribuida sin confirmación completa.',
      dx_diferencial: 'Causa única genuinamente suficiente, sin ninguna causa concomitante adicional (el estudio dirigido completo resulta negativo para otras causas y la eritrocitosis se correlaciona apropiadamente con la causa ya identificada).',
      tx_medico: 'Mantener un umbral bajo para completar el estudio diferencial completo (JAK2, EPO, polisomnografía si hay perfil de riesgo, estudio de imagen dirigido si no hay causa hipóxica ni farmacológica clara) en toda eritrocitosis nueva, incluso en presencia de una causa aparente evidente como el tabaquismo.',
      tx_farmacologico: 'Tratamiento dirigido de la causa concomitante identificada, según corresponda.',
      tx_intervencionista: 'Según la causa concomitante identificada (por ejemplo, resección de un tumor productor de EPO, corrección de una cardiopatía congénita cianótica).',
      criterios_uci: 'No aplica de forma directa, salvo la propia de la causa concomitante identificada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma directa.',
      seguimiento_ambulatorio: 'Reevaluación periódica si la eritrocitosis persiste o cambia de patrón pese al tratamiento de la causa inicialmente identificada, con umbral bajo para reiniciar el estudio dirigido.',
      pronostico: 'Enteramente prevenible con un estudio dirigido sistemático desde el inicio; el retraso diagnóstico de una causa tratable, particularmente un tumor productor de EPO o una apnea obstructiva del sueño no tratada, puede tener consecuencias significativas sobre el pronóstico de esa causa concomitante.',
      algoritmo: ['Eritrocitosis con una causa aparente evidente (por ejemplo, tabaquismo) → NO cerrar el estudio sin descartar otras causas', 'JAK2 y EPO de rutina en toda eritrocitosis nueva', 'Polisomnografía si hay perfil de riesgo de apnea obstructiva del sueño', 'Estudio de imagen dirigido si no hay causa hipóxica ni farmacológica clara', 'Persistencia o cambio de patrón pese al tratamiento de la causa inicial → reiniciar el estudio dirigido']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La confirmación del diferencial JAK2 + EPO y la distinción de la eritrocitosis relativa/espuria son comunes a las 4 formas de esta sección, con matices específicos de cada una detallados en su propia tarjeta.',
    parametros: [
      'Biometría hemática con hemoglobina/hematocrito y JAK2 + EPO al ingreso en la eritrocitosis sintomática que requiere manejo hospitalario.',
      'Gasometría arterial con carboxihemoglobina si hay sospecha de causa hipóxica o tabaquismo activo.',
      'Vigilancia del perfil de hierro en todo paciente bajo flebotomía terapéutica repetida.',
      'Umbral bajo para reestudiar (polisomnografía, imagen dirigida) ante una eritrocitosis sin causa evidente o que cambia de patrón.'
    ],
    criterios_uci_general: 'Síntomas de hiperviscosidad grave con compromiso neurológico, evento trombótico mayor con inestabilidad hemodinámica.',
    criterios_tips_general: 'Síndrome de Budd-Chiari con hipertensión portal refractaria (escenario más característico de la policitemia vera que de la eritrocitosis secundaria pura, ver ese tema).',
    criterios_trasplante_general: 'No aplica a ninguna de las 4 formas de esta sección.',
    prevencion: 'Determinar JAK2 y EPO sérica en toda eritrocitosis nueva antes de asumir una causa o iniciar tratamiento, individualizar la indicación de flebotomía terapéutica sin extrapolar automáticamente el objetivo de la policitemia vera, y mantener un umbral bajo para investigar causas tratables (apnea del sueño, tumores productores de EPO) incluso cuando existe una causa aparente evidente.'
  }
};

export const compCites = {
  'Eritrocitosis por hipoxia': { epidemiologia: [1, 15] },
  'Producción inapropiada de eritropoyetina': { fisiopatologia: [11, 13] },
  'Eritrocitosis congénita/hereditaria': { fisiopatologia: [7, 8, 9] },
  'Eritrocitosis relativa/espuria': { fisiopatologia: [16] },
  'Diferencial con policitemia vera': { fisiopatologia: [5, 6] },
  'Trombosis venosa y arterial': { fisiopatologia: [1] },
  'Riesgos de la flebotomía terapéutica indiscriminada': { epidemiologia: [1] },
  'Retraso diagnóstico de una causa tratable': { epidemiologia: [3] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Herramienta JAK2 + EPO': [5, 2],
  'Criterios OMS 2016 de eritrocitosis': [5],
  'Eritrocitosis verdadera vs. relativa/espuria': [16]
};
export const escalaCalc = { 'Herramienta JAK2 + EPO': 'jak2epo' };
export const compGroups = [
  { title: 'Policitemia secundaria por mecanismo (enfermedades)', items: ['Eritrocitosis por hipoxia', 'Producción inapropiada de eritropoyetina', 'Eritrocitosis congénita/hereditaria', 'Eritrocitosis relativa/espuria'] },
  { title: 'Complicaciones transversales (cualquier forma)', items: ['Diferencial con policitemia vera', 'Trombosis venosa y arterial', 'Riesgos de la flebotomía terapéutica indiscriminada', 'Retraso diagnóstico de una causa tratable'] }
];
export const complicacionesIntro = 'El panorama general (epidemiología, etiología, factores de riesgo, fisiopatología) ya se cubrió en Definición. Estas tarjetas son el recurso de consulta con el detalle operativo de cada entidad: diagnóstico diferencial específico, dosis, criterios de UCI/trasplante y el algoritmo paso a paso. El grupo "(enfermedades)" son las 4 formas de policitemia secundaria según su mecanismo; el grupo "Complicaciones transversales" son eventos que pueden surgir sobre cualquiera de ellas, no diagnósticos independientes.';
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
  root: { title: 'POLICITEMIA SECUNDARIA', color: '#2e6b6b', target: 'definicion' },
  branches: [
    { title: 'EPO elevada', sub: 'Apropiada o inapropiada', color: '#3d5a73', target: 'diagnostico', leaves: [
      { title: 'Hipoxia', sub: 'EPOC, apnea del sueño, tabaquismo', color: '#3d5a73', target: 'complicaciones' },
      { title: 'EPO inapropiada', sub: 'Tumor, postrasplante, andrógenos', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'Otros mecanismos', sub: 'Genético o sin verdadera eritrocitosis', color: '#5c6b8c', target: 'diagnostico', leaves: [
      { title: 'Congénita', sub: 'EPOR, VHL/Chuvash, Hb alta afinidad', color: '#5c6b8c', target: 'complicaciones' },
      { title: 'Relativa/espuria', sub: 'NO es policitemia verdadera', color: '#966b35', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [2], no_invasivos: [5] };
export const clasificacionCite = [5];
export const seguimientoCite = [3, 5];
