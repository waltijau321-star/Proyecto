// topics/coagulacion-trombofilias/content.js: Trastornos de la Coagulación y Trombofilias.
// Primero de 4 temas independientes que reemplazan el cluster "Hemostasia y trombosis" del
// temario (los otros 3: Alteraciones Plaquetarias Cuantitativas, Transfusión de Hemoderivados,
// Coagulación Intravascular Diseminada, se construirán por separado).
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás debe ser un `export const` de nivel superior, HERMANO de `content`.
//
// IMPORTANTE (ver memoria del proyecto sobre study.js): construir cada pregunta con la respuesta
// correcta en options[0]/correct:0 primero, verificar el conteo, y solo entonces redistribuir
// mecánicamente con un script.
//
// IMPORTANTE (ver memoria del proyecto sobre tarjetas/figuras): el número de tarjetas y de
// figuras de este tema NO sigue ningún default fijo: se decidió con el usuario según el
// contenido real (4 entidades + 4 complicaciones aquí, por decisión explícita, no por costumbre).

export const meta = {
  id: 'coagulacion-trombofilias',
  titulo: 'Trastornos de la Coagulación y Trombofilias',
  subtitulo: 'Módulo 27 · Medicina Interna',
  accent: '#5c3d73',
  accentDim: '#9373a3'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const articulacionDianaHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:6px;max-width:440px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:8px;padding:7px 14px;text-align:center;">Hemartrosis en una articulación</div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="background:#6b4a2e33;border:1px solid #6b4a2e;border-radius:8px;padding:7px 14px;text-align:center;">Hemoglobina/hierro liberados dañan el cartílago y desencadenan sinovitis</div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:8px;padding:7px 14px;text-align:center;">Sinovial inflamada, engrosada, y más vascularizada</div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:8px;padding:7px 14px;text-align:center;">Mayor riesgo de un nuevo sangrado en esa misma articulación ("diana")</div>
  <div style="color:var(--ink-dim);">↻ el ciclo se repite y empeora con cada episodio ↻</div>
  <div style="background:#3d3d3d33;border:1px solid #6b4a2e;border-radius:8px;padding:7px 14px;text-align:center;margin-top:4px;">Sin profilaxis: destrucción articular irreversible (artropatía hemofílica)</div>
</div>`;

const cascadaHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:8px;max-width:560px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="display:flex;gap:10px;justify-content:center;width:100%;flex-wrap:wrap;">
    <div style="flex:1;min-width:170px;background:#3d5a7333;border:1px solid #3d5a73;border-radius:8px;padding:8px;text-align:center;">
      <strong>Vía intrínseca</strong><br>XII → XI → <strong>IX</strong> + <strong>VIII</strong><br>
      <span style="color:var(--ink-dim);">TTPa la evalúa</span>
    </div>
    <div style="flex:1;min-width:170px;background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:8px;padding:8px;text-align:center;">
      <strong>Vía extrínseca</strong><br>Factor tisular + VII<br>
      <span style="color:var(--ink-dim);">TP/INR la evalúa</span>
    </div>
  </div>
  <div style="color:var(--ink-dim);">↓ ambas convergen ↓</div>
  <div style="background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:8px;padding:8px 14px;text-align:center;max-width:400px;">
    <strong>Vía común</strong><br>X → protrombina (II) → trombina → fibrinógeno → fibrina
  </div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="display:flex;gap:10px;justify-content:center;width:100%;flex-wrap:wrap;">
    <div style="flex:1;min-width:170px;background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:8px;text-align:center;">
      <strong>Factor de von Willebrand</strong><br>Adhesión plaquetaria + transportador del factor VIII
    </div>
    <div style="flex:1;min-width:170px;background:#6b4a2e33;border:1px solid #6b4a2e;border-radius:8px;padding:8px;text-align:center;">
      <strong>Inhibidores fisiológicos</strong><br>Proteína C, proteína S, antitrombina<br>
      <span style="color:var(--ink-dim);">su déficit = trombofilia</span>
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Los trastornos de la coagulación y las trombofilias representan los 2 extremos opuestos de la misma vía fisiológica: un déficit de un factor de coagulación (o de su función) produce sangrado excesivo, mientras que un déficit de un inhibidor fisiológico de la coagulación (o una ganancia de función procoagulante) produce trombosis excesiva. Este tema cubre ambos extremos porque comparten la misma vía subyacente y con frecuencia se estudian con las mismas pruebas de laboratorio (tiempo de protrombina, tiempo de tromboplastina parcial activada, y estudios específicos de factores).</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La enfermedad de von Willebrand es el trastorno hemorrágico hereditario más frecuente en la población general; la hemofilia A es considerablemente más frecuente que la hemofilia B. Entre las trombofilias, la mutación del Factor V Leiden es la trombofilia hereditaria más frecuente en población caucásica, aunque su penetrancia clínica (riesgo real de trombosis) es baja en la mayoría de los portadores heterocigotos.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Hemofilia A y B</strong>: deficiencia hereditaria ligada al X del factor VIII (hemofilia A) o del factor IX (hemofilia B); produce sangrado, particularmente hemartrosis recurrente.</li>
    <li><strong>Enfermedad de von Willebrand</strong>: deficiencia o disfunción hereditaria del factor de von Willebrand, el trastorno hemorrágico hereditario más frecuente; produce sangrado predominantemente mucocutáneo.</li>
    <li><strong>Coagulopatía adquirida</strong>: déficit adquirido de factores de coagulación por enfermedad hepática, deficiencia de vitamina K, o desarrollo de un inhibidor adquirido (autoanticuerpo) contra un factor, particularmente el factor VIII.</li>
    <li><strong>Trombofilias hereditarias y adquiridas</strong>: estados de hipercoagulabilidad por deficiencia de un inhibidor fisiológico (proteína C, proteína S, antitrombina), una mutación de ganancia de función (Factor V Leiden, protrombina G20210A), o un mecanismo autoinmune adquirido (síndrome antifosfolípido).</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Antecedente familiar de sangrado excesivo o de trombosis a edad temprana o en localización atípica</li>
    <li>Sexo masculino (hemofilia, herencia ligada al X)</li>
    <li>Enfermedad hepática avanzada o malabsorción (coagulopatía adquirida)</li>
    <li>Embarazo, uso de estrógenos, cirugía mayor, inmovilización prolongada (factores desencadenantes de trombosis en el paciente con trombofilia de base)</li>
    <li>Enfermedad autoinmune sistémica conocida, particularmente lupus eritematoso sistémico (síndrome antifosfolípido asociado)</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> La coagulación normal depende de un equilibrio dinámico entre factores procoagulantes (que forman el coágulo de fibrina a través de las vías intrínseca y extrínseca, que convergen en una vía común) y factores anticoagulantes fisiológicos (proteína C, proteína S, antitrombina) que limitan ese proceso a la zona de lesión vascular y lo terminan una vez cumplido su propósito.${figBlock('Imagen 1', 'La cascada de coagulación y sus reguladores', cascadaHtml)} Un déficit de cualquier factor procoagulante (VIII, IX, o del factor de von Willebrand, que además actúa como transportador estabilizador del factor VIII circulante) desplaza el equilibrio hacia el sangrado; un déficit de cualquier inhibidor fisiológico, o una mutación que hace a un factor procoagulante resistente a su inactivación normal (como el Factor V Leiden, resistente a la proteína C activada), desplaza el equilibrio hacia la trombosis. Analogía: el sistema de coagulación funciona como los frenos y el acelerador de un mismo vehículo; un trastorno hemorrágico es como un vehículo con acelerador débil (le cuesta arrancar el coágulo cuando lo necesita), mientras que una trombofilia es como un vehículo con frenos débiles (no logra detener el coágulo una vez que empieza, y sigue avanzando más de lo que debería): ambos son fallas del mismo sistema de control, solo que en direcciones opuestas.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde el sangrado leve ocasional hasta la hemartrosis recurrente incapacitante de la hemofilia grave no tratada, y desde el hallazgo incidental de una trombofilia asintomática hasta la trombosis venosa profunda o la pérdida fetal recurrente; el enfoque diagnóstico completo, la clasificación por entidad y gravedad, y las complicaciones específicas se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Srivastava A, Santagostino E, Dougall A, et al. WFH Guidelines for the Management of Hemophilia, 3rd edition. Haemophilia. 2020;26 Suppl 6:1-158.',
  'Leebeek FWG, Eikenboom JCJ. Von Willebrand’s Disease. N Engl J Med. 2016;375(21):2067-2080.',
  'Rodeghiero F, Tosetto A, Abshire T, et al. ISTH/SSC bleeding assessment tool: a standardized questionnaire and a proposal for a new bleeding score for inherited bleeding disorders. J Thromb Haemost. 2010;8(9):2063-2065.',
  'Franchini M, Mannucci PM. Acquired haemophilia A: a 2013 update. Thromb Haemost. 2013;110(6):1114-1120.',
  'Tripodi A, Mannucci PM. The coagulopathy of chronic liver disease. N Engl J Med. 2011;365(2):147-156.',
  'Middeldorp S. Inherited thrombophilia: a double-edged sword. Hematology Am Soc Hematol Educ Program. 2016;2016(1):1-9.',
  'Connors JM. Thrombophilia Testing and Venous Thrombosis. N Engl J Med. 2017;377(23):2298-2309.',
  'Miyakis S, Lockshin MD, Atsumi T, et al. International consensus statement on an update of the classification criteria for definite antiphospholipid syndrome (APS). J Thromb Haemost. 2006;4(2):295-306.',
  'Garcia D, Erkan D. Diagnosis and Management of the Antiphospholipid Syndrome. N Engl J Med. 2018;378(21):2010-2021.',
  'Franchini M, Lippi G. Factor V Leiden and hemophilia. Thromb Res. 2010;125(2):119-123.',
  'Blanchette VS, Key NS, Ljung LR, et al. Definitions in hemophilia: communication from the SSC of the ISTH. J Thromb Haemost. 2014;12(11):1935-1939.',
  'Konkle BA, Huston H, Nakaya Fletcher S. Hemophilia A. GeneReviews. Seattle (WA): University of Washington; 2000 (updated 2023).',
  'Bates SM, Greer IA, Middeldorp S, et al. VTE, thrombophilia, antithrombotic therapy, and pregnancy: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines. Chest. 2012;141(2 Suppl):e691S-e736S.',
  'Kadir RA, Kingman CE, Chi C, et al. Quality of life during menstruation in patients with inherited bleeding disorders. Haemophilia. 2010;16(5):832-839.',
  'Kitchens CS, Kessler CM, Konkle BA. Consultative Hemostasis and Thrombosis. 4th ed. Elsevier; 2019.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Trastorno hemorrágico leve',
      tituloB: 'Trastorno hemorrágico grave o trombofilia sintomática',
      compensada: 'Sangrado leve ocasional (equimosis fáciles, epistaxis breve autolimitada) sin impacto funcional; en la trombofilia, hallazgo incidental de laboratorio o antecedente familiar sin evento trombótico propio.',
      descompensada: 'Sangrado espontáneo recurrente (hemartrosis, hematomas musculares profundos, sangrado mucocutáneo significativo) que requiere tratamiento sustitutivo; o, en la trombofilia, trombosis venosa o arterial establecida, particularmente si es a edad temprana, recurrente, o en localización atípica.'
    },
    laboratorio: [
      { prueba: 'Tiempo de protrombina (TP/INR) y tiempo de tromboplastina parcial activada (TTPa)', utilidad: 'Cribado inicial que localiza el defecto a la vía extrínseca (TP prolongado), intrínseca (TTPa prolongado), o común (ambos prolongados).' },
      { prueba: 'Niveles específicos de factor VIII, factor IX, y factor de von Willebrand (antígeno y actividad)', utilidad: 'Confirman y cuantifican la deficiencia específica cuando el cribado inicial sugiere un trastorno hemorrágico.' },
      { prueba: 'Estudio de mezcla (mixing study)', utilidad: 'Distingue una deficiencia de factor verdadera (el TTPa se corrige al mezclar con plasma normal) de un inhibidor adquirido (no se corrige, o se corrige y luego se prolonga de nuevo tras incubación).' },
      { prueba: 'Panel de trombofilia (proteína C, proteína S, antitrombina, Factor V Leiden, protrombina G20210A, anticuerpos antifosfolípido)', utilidad: 'Ante trombosis a edad temprana, recurrente, en localización atípica, o con antecedente familiar significativo.' }
    ],
    no_invasivos: [
      { metodo: 'ISTH-BAT (Bleeding Assessment Tool, con calculadora)', interpretacion: 'Cuestionario estandarizado que orienta cuándo un paciente con sospecha de sangrado leve amerita estudio formal.', cutoff: 'Categórico, ver Escalas' }
    ],
    imagen: [
      { modalidad: 'Ecografía articular', hallazgos: 'Evalúa el daño articular acumulado por hemartrosis recurrente en la hemofilia (sinovitis, derrame, cambios degenerativos tempranos).' },
      { modalidad: 'Ecografía Doppler venosa o angio-TC', hallazgos: 'Confirma un evento trombótico agudo sospechado en el paciente con trombofilia.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema es la dirección del desequilibrio: hacia el sangrado (déficit de un factor procoagulante o del factor de von Willebrand) o hacia la trombosis (déficit de un inhibidor fisiológico o ganancia de función procoagulante); dentro de cada dirección, la gravedad clínica (leve/asintomática vs. grave/sintomática) determina el manejo.',
    escalas: [
      { nombre: 'ISTH-BAT (Bleeding Assessment Tool)', componentes: 'Presencia de sangrado en 10 dominios clínicos, ajustado por sexo. Calculadora disponible más abajo.', formula: '≥4 dominios positivos en hombres, ≥6 en mujeres, se considera anormal.', interpretacion: 'Un score anormal orienta hacia el estudio formal de un trastorno hemorrágico (von Willebrand, hemofilia leve, disfunción plaquetaria); un score normal hace improbable un trastorno hemorrágico significativo.' },
      { nombre: 'Clasificación de gravedad de la hemofilia', componentes: 'Nivel de actividad del factor deficiente (VIII o IX) en plasma.', formula: 'Grave: &lt;1% de actividad normal. Moderada: 1-5%. Leve: &gt;5-40%.', interpretacion: 'La gravedad determina la frecuencia de sangrado espontáneo y la necesidad de profilaxis regular con factor.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Hemofilia A y B',
      color: '#7a1f3d',
      definicion: 'Deficiencia hereditaria ligada al cromosoma X del factor VIII (hemofilia A, considerablemente más frecuente) o del factor IX (hemofilia B), produciendo sangrado prolongado tras traumatismo o cirugía y, en las formas graves, sangrado espontáneo, particularmente hemartrosis recurrente.',
      fisiopatologia: 'La deficiencia del factor VIII o IX interrumpe la vía intrínseca de la coagulación en el paso de activación del factor X, impidiendo la generación adecuada y sostenida de trombina necesaria para estabilizar el coágulo inicial (formado por la adhesión plaquetaria, que permanece intacta); el coágulo plaquetario inicial se forma con normalidad pero es frágil y se disuelve prematuramente sin el refuerzo de fibrina estable, explicando por qué el sangrado en la hemofilia es característicamente tardío y profundo (hemartrosis, hematomas musculares) más que inmediato y superficial.',
      epidemiologia: 'La hemofilia A es considerablemente más frecuente que la hemofilia B; ambas son trastornos ligados al X, por lo que afectan casi exclusivamente a varones (las mujeres portadoras son habitualmente asintomáticas o tienen sangrado leve, aunque una minoría con inactivación desfavorable del X puede tener sangrado significativo).',
      factores_riesgo: ['Sexo masculino con antecedente familiar materno de hemofilia', 'Mutación de novo (hasta una proporción relevante de los casos, sin antecedente familiar previo)', 'Nivel de actividad del factor muy bajo (mayor riesgo de sangrado espontáneo)'],
      clinica: 'Hemartrosis recurrente (particularmente rodillas, codos, tobillos), hematomas musculares profundos, sangrado prolongado tras procedimientos dentales o cirugía, en casos graves hemorragia intracraneal espontánea (complicación potencialmente fatal).',
      criterios_dx: 'Actividad plasmática del factor VIII o IX marcadamente reducida, con TTPa prolongado y TP normal (localizando el defecto a la vía intrínseca), en un paciente (habitualmente varón) con historia clínica compatible.',
      laboratorio: 'TTPa prolongado con TP normal; niveles específicos de factor VIII y factor IX para confirmar y cuantificar la deficiencia; estudio de mezcla si hay duda diagnóstica con un inhibidor adquirido.',
      imagen: 'Ecografía o resonancia magnética articular para evaluar el daño articular acumulado por hemartrosis recurrente (artropatía hemofílica, ver Complicaciones).',
      complementarios: 'Estudio genético para identificar la mutación específica, útil para consejería genética familiar y para predecir el riesgo de desarrollar un inhibidor.',
      dx_diferencial: 'Enfermedad de von Willebrand (sangrado predominantemente mucocutáneo, no hemartrosis, ver esa tarjeta), coagulopatía adquirida con inhibidor contra el factor VIII (habitualmente en un paciente sin antecedente personal ni familiar previo de sangrado, ver esa tarjeta).',
      tx_medico: 'Tratamiento sustitutivo con concentrado del factor deficiente (VIII o IX) ante un episodio de sangrado agudo, o de forma profiláctica regular en la hemofilia grave para prevenir el sangrado espontáneo y la artropatía crónica resultante.',
      tx_farmacologico: 'Concentrado de factor VIII o IX (derivado de plasma o recombinante); emicizumab (anticuerpo biespecífico que imita la función del factor VIII) como alternativa profiláctica moderna en hemofilia A, particularmente útil en el paciente con inhibidor; desmopresina considerada en hemofilia A leve seleccionada (libera reservas endógenas de factor VIII).',
      tx_intervencionista: 'Manejo ortopédico (sinovectomía, artroplastia) en la artropatía hemofílica avanzada establecida (ver esa complicación).',
      criterios_uci: 'Hemorragia intracraneal, sangrado retroperitoneal o de otra localización con compromiso hemodinámico.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta al tratamiento sustitutivo durante un episodio de sangrado agudo o un procedimiento invasivo planeado.',
      seguimiento_ambulatorio: 'Seguimiento en un centro especializado de hemofilia con profilaxis regular programada según la gravedad; vigilancia periódica de la aparición de un inhibidor (ver Complicaciones).',
      pronostico: 'Ha mejorado sustancialmente con la profilaxis regular moderna, que previene en gran medida la artropatía hemofílica crónica característica de generaciones previas sin acceso a tratamiento profiláctico regular.',
      algoritmo: ['TTPa prolongado + TP normal + historia de sangrado (habitualmente varón) → sospechar hemofilia A o B', 'Niveles específicos de factor VIII y IX para confirmar y clasificar la gravedad', 'Sangrado agudo → tratamiento sustitutivo urgente con el factor deficiente', 'Hemofilia grave → considerar profilaxis regular programada (factor o emicizumab)', 'Vigilancia periódica de desarrollo de inhibidor durante el tratamiento sustitutivo']
    },
    {
      nombre: 'Enfermedad de von Willebrand',
      color: '#3d5a73',
      definicion: 'El trastorno hemorrágico hereditario más frecuente en la población general: deficiencia cuantitativa (tipos 1 y 3) o disfunción cualitativa (tipo 2) del factor de von Willebrand, produciendo sangrado predominantemente mucocutáneo por adhesión plaquetaria defectuosa, y en las formas más graves también un componente similar a la hemofilia por transporte deficiente del factor VIII.',
      fisiopatologia: 'El factor de von Willebrand cumple 2 funciones distintas: media la adhesión inicial de las plaquetas al subendotelio expuesto tras una lesión vascular (mediante su unión a la glucoproteína Ib plaquetaria), y actúa como proteína transportadora y estabilizadora del factor VIII circulante, protegiéndolo de la degradación proteolítica prematura; su deficiencia o disfunción altera predominantemente la primera función (produciendo el patrón de sangrado mucocutáneo típico de un defecto de la hemostasia primaria), y en las formas más graves (tipo 3) también reduce secundariamente el factor VIII circulante disponible por falta de su transportador, añadiendo un componente de sangrado más profundo similar al de la hemofilia.',
      epidemiologia: 'El tipo 1 (deficiencia cuantitativa parcial) es considerablemente el más frecuente de los 3 tipos; el tipo 3 (deficiencia cuantitativa casi completa) es infrecuente pero el de mayor gravedad clínica.',
      factores_riesgo: ['Antecedente familiar de sangrado mucocutáneo, herencia habitualmente autosómica dominante (tipos 1 y 2) o recesiva (tipo 3)', 'Grupo sanguíneo O (niveles basales de factor de von Willebrand fisiológicamente más bajos que otros grupos sanguíneos)'],
      clinica: 'Epistaxis recurrente, gingivorragia, equimosis fáciles, menorragia (con frecuencia el síntoma que lleva al diagnóstico en mujeres), sangrado prolongado tras procedimientos dentales o quirúrgicos; la hemartrosis es infrecuente, a diferencia de la hemofilia.',
      criterios_dx: 'Niveles reducidos de antígeno del factor de von Willebrand y/o de su actividad funcional (cofactor de ristocetina), en un paciente con historia clínica de sangrado mucocutáneo compatible (con frecuencia apoyada por un score ISTH-BAT anormal, calculadora).',
      laboratorio: 'Antígeno del factor de von Willebrand, actividad del cofactor de ristocetina (o ensayos funcionales más modernos), factor VIII (puede estar secundariamente reducido), estudio de multímeros para subclasificar el tipo 2 cuando esté indicado.',
      imagen: 'No indicada de rutina para el diagnóstico en sí.',
      complementarios: 'Estudio genético dirigido en casos seleccionados, particularmente para distinguir subtipos del tipo 2 con implicaciones terapéuticas distintas.',
      dx_diferencial: 'Hemofilia A leve (patrón de sangrado más profundo, no predominantemente mucocutáneo, ver esa tarjeta), trastorno de función plaquetaria primario (estudio de agregación plaquetaria distingue), deficiencia de otros factores.',
      tx_medico: 'Desmopresina como primera línea en el tipo 1 (y en algunos casos seleccionados de tipo 2), que libera las reservas endógenas de factor de von Willebrand del endotelio; concentrado de factor de von Willebrand/factor VIII en el tipo 3, el tipo 2 no respondedor a desmopresina, o el sangrado grave de cualquier tipo.',
      tx_farmacologico: 'Desmopresina (intranasal o intravenosa) para el sangrado leve-moderado en pacientes respondedores; concentrado de factor de von Willebrand/factor VIII para el sangrado grave o los no respondedores; antifibrinolíticos (ácido tranexámico) como adyuvante útil, particularmente para el sangrado mucoso y la menorragia.',
      tx_intervencionista: 'No aplica de forma directa salvo el manejo del sangrado agudo grave según el sitio.',
      criterios_uci: 'Sangrado grave con compromiso hemodinámico, infrecuente pero posible particularmente en el tipo 3.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta al tratamiento durante un episodio de sangrado agudo o un procedimiento invasivo planeado, con profilaxis perioperatoria adecuada según el tipo y la gravedad.',
      seguimiento_ambulatorio: 'Seguimiento en un centro especializado; manejo ginecológico coordinado en la mujer con menorragia significativa.',
      pronostico: 'Generalmente favorable con el manejo apropiado, particularmente en los tipos 1 y 2; el tipo 3 tiene un curso más similar a la hemofilia grave.',
      algoritmo: ['Sangrado mucocutáneo recurrente + score ISTH-BAT anormal (calculadora) → sospechar enfermedad de von Willebrand', 'Antígeno y actividad funcional del factor de von Willebrand + factor VIII', 'Estudio de multímeros si se sospecha un subtipo 2 específico', 'Desmopresina como primera línea si el paciente es respondedor conocido', 'Concentrado de factor de von Willebrand/VIII para sangrado grave, tipo 3, o no respondedores a desmopresina']
    },
    {
      nombre: 'Coagulopatía adquirida',
      color: '#8a6a1f',
      definicion: 'Déficit adquirido (no hereditario) de la función coagulante normal, por 3 mecanismos principales: enfermedad hepática avanzada (menor síntesis de factores de coagulación), deficiencia de vitamina K (necesaria para la activación de los factores II, VII, IX, y X), o el desarrollo de un autoanticuerpo (inhibidor) contra un factor de coagulación, con mayor frecuencia el factor VIII (hemofilia A adquirida).',
      fisiopatologia: 'En la enfermedad hepática avanzada, la síntesis reducida de la mayoría de los factores de coagulación (excepto el factor VIII, de síntesis extrahepática) se acompaña paradójicamente de una síntesis igualmente reducida de los inhibidores fisiológicos (proteína C, proteína S, antitrombina), por lo que el estado hemostático resultante está en un equilibrio precario y "re-balanceado" más que en un déficit puro hacia el sangrado, aunque clínicamente predomina el riesgo hemorrágico particularmente ante un procedimiento invasivo o una complicación asociada (ver el tema de Cirrosis Hepática); en la deficiencia de vitamina K, la ausencia del cofactor necesario para la gamma-carboxilación postraduccional de los factores II, VII, IX, y X impide su activación funcional pese a que la síntesis de la proteína en sí no está alterada; en la hemofilia A adquirida, un autoanticuerpo (con frecuencia sin ninguna enfermedad autoinmune de base identificable, aunque puede asociarse a neoplasias, embarazo posparto, o enfermedades autoinmunes) neutraliza directamente la función del factor VIII circulante, produciendo un cuadro clínico similar a la hemofilia congénita grave pero de inicio súbito en un paciente sin antecedente previo.',
      epidemiologia: 'La coagulopatía de la enfermedad hepática es extremadamente frecuente en el paciente con cirrosis avanzada; la hemofilia A adquirida es infrecuente pero clínicamente relevante dado que con frecuencia se presenta con sangrado grave e inesperado en un paciente (típicamente de edad avanzada) sin ningún antecedente hemorrágico previo.',
      factores_riesgo: ['Enfermedad hepática crónica avanzada', 'Malabsorción, malnutrición, o uso prolongado de antibióticos de amplio espectro (deficiencia de vitamina K)', 'Anticoagulación con antagonistas de la vitamina K (warfarina) sin monitorización adecuada', 'Edad avanzada, embarazo posparto, neoplasia de base, o enfermedad autoinmune (hemofilia A adquirida)'],
      clinica: 'Sangrado variable según la causa: equimosis y sangrado mucocutáneo en la coagulopatía hepática leve-moderada, hematomas extensos y sangrado de tejidos blandos característicamente grave y de inicio súbito en la hemofilia A adquirida (a diferencia del patrón predominantemente articular de la hemofilia congénita).',
      criterios_dx: 'TP y/o TTPa prolongados según el mecanismo, con estudio de mezcla que NO corrige el TTPa (o corrige inicialmente y se prolonga de nuevo tras incubación) cuando la causa es un inhibidor adquirido, distinguiéndolo de una deficiencia de factor verdadera (que sí corrige).',
      laboratorio: 'TP/INR y TTPa; pruebas de función hepática si se sospecha causa hepática; niveles de factor VIII marcadamente reducidos con título de inhibidor (unidades Bethesda) si se confirma un anticuerpo; corrección con vitamina K parenteral como prueba diagnóstica/terapéutica si se sospecha esa deficiencia.',
      imagen: 'No específica para el diagnóstico; dirigida según la causa de base sospechada.',
      complementarios: 'Estudio de mezcla (mixing study) como la prueba central para distinguir deficiencia de factor de inhibidor adquirido.',
      dx_diferencial: 'Hemofilia congénita (antecedente personal/familiar previo de sangrado, ausente en la forma adquirida, ver esa tarjeta), coagulación intravascular diseminada (consumo simultáneo de factores y plaquetas con fibrinógeno bajo y dímero D marcadamente elevado, un patrón distinto).',
      tx_medico: 'Tratamiento dirigido a la causa: vitamina K parenteral (deficiencia de vitamina K), manejo de la hepatopatía de base y plasma fresco congelado/complejo protrombínico ante sangrado activo (coagulopatía hepática), inmunosupresión (corticoides ± ciclofosfamida o rituximab) para erradicar el autoanticuerpo (hemofilia A adquirida).',
      tx_farmacologico: 'Vitamina K parenteral; plasma fresco congelado o concentrado de complejo protrombínico para reversión urgente; agentes bypass (factor VII activado recombinante, concentrado de complejo protrombínico activado) para el sangrado agudo en la hemofilia A adquirida, dado que el concentrado de factor VIII estándar es ineficaz mientras el inhibidor esté presente; inmunosupresión para la erradicación del inhibidor a mediano plazo.',
      tx_intervencionista: 'No aplica de forma directa salvo el manejo del sangrado agudo grave según el sitio.',
      criterios_uci: 'Sangrado grave con compromiso hemodinámico, particularmente en la hemofilia A adquirida de presentación aguda.',
      criterios_tips: 'Considerado en el contexto de la hepatopatía de base con hipertensión portal asociada, no por la coagulopatía en sí.',
      criterios_trasplante: 'Según la enfermedad hepática de base (ver el tema de Cirrosis Hepática); no aplica directamente a la hemofilia A adquirida.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta al tratamiento dirigido y de la resolución del sangrado activo.',
      seguimiento_ambulatorio: 'Vigilancia seriada del título de inhibidor durante la inmunosupresión en la hemofilia A adquirida hasta su erradicación completa; manejo continuado de la causa de base en las otras formas.',
      pronostico: 'Variable según la causa: la deficiencia de vitamina K se corrige rápidamente con el tratamiento; la coagulopatía hepática sigue el curso de la enfermedad de base; la hemofilia A adquirida tiene una mortalidad no despreciable asociada al episodio de sangrado inicial si no se reconoce con prontitud, pero responde bien a la inmunosupresión en la mayoría de los casos.',
      algoritmo: ['TP/TTPa prolongados en paciente sin antecedente hemorrágico previo → sospechar causa adquirida', 'Estudio de mezcla: corrige → deficiencia de factor (vitamina K, hepatopatía); no corrige → inhibidor adquirido', 'Vitamina K parenteral como prueba diagnóstica/terapéutica si se sospecha esa deficiencia', 'Hemofilia A adquirida confirmada → agentes bypass para el sangrado agudo + inmunosupresión para erradicar el inhibidor', 'Vigilancia seriada del título de inhibidor hasta su erradicación completa']
    },
    {
      nombre: 'Trombofilias hereditarias y adquiridas',
      color: '#3f6b52',
      definicion: 'Estados de hipercoagulabilidad que aumentan el riesgo de trombosis venosa (con mayor frecuencia) o arterial, por deficiencia de un inhibidor fisiológico de la coagulación (proteína C, proteína S, antitrombina), una mutación de ganancia de función procoagulante (Factor V Leiden, protrombina G20210A), o un mecanismo autoinmune adquirido (síndrome antifosfolípido).',
      fisiopatologia: 'La proteína C activada (con su cofactor proteína S) normalmente inactiva proteolíticamente a los factores Va y VIIIa, limitando la amplificación de la cascada de coagulación; el Factor V Leiden es una variante del factor V resistente a esta inactivación (resistencia a la proteína C activada), por lo que la coagulación continúa amplificándose sin el freno normal; la mutación de protrombina G20210A aumenta los niveles circulantes de protrombina, aumentando directamente el sustrato disponible para la generación de trombina; la deficiencia de antitrombina elimina un inhibidor directo de la trombina y del factor Xa; en el síndrome antifosfolípido, autoanticuerpos (anticoagulante lúpico, anticuerpos anticardiolipina, anti-beta2-glicoproteína I) interfieren con múltiples puntos regulatorios de la coagulación y activan directamente el endotelio y las plaquetas, produciendo un estado protrombótico tanto venoso como arterial, además de un riesgo obstétrico específico (pérdida fetal recurrente, preeclampsia) por trombosis de la microvasculatura placentaria.',
      epidemiologia: 'El Factor V Leiden es la trombofilia hereditaria más frecuente en población caucásica, aunque su penetrancia clínica (riesgo real de trombosis en un portador heterocigoto) es baja en la mayoría de los casos; las deficiencias de proteína C, proteína S, y antitrombina son considerablemente menos frecuentes pero confieren un riesgo trombótico proporcionalmente mayor por evento.',
      factores_riesgo: ['Antecedente familiar de trombosis venosa a edad temprana o en múltiples familiares', 'Trombosis en localización atípica (senos venosos cerebrales, venas esplácnicas)', 'Pérdida fetal recurrente inexplicada u otra complicación obstétrica específica', 'Enfermedad autoinmune sistémica de base, particularmente lupus eritematoso sistémico', 'Factores desencadenantes adicionales (cirugía mayor, inmovilización, embarazo, estrógenos) que precipitan el evento trombótico sobre la trombofilia de base'],
      clinica: 'Trombosis venosa profunda de miembros inferiores (la manifestación más frecuente), embolia pulmonar, trombosis en localización atípica (senos venosos cerebrales, venas esplácnicas/portal), eventos arteriales (particularmente en el síndrome antifosfolípido); manifestaciones obstétricas específicas del síndrome antifosfolípido (pérdida fetal recurrente, preeclampsia grave, restricción del crecimiento intrauterino).',
      criterios_dx: 'Confirmación de laboratorio del defecto específico (niveles de proteína C/S/antitrombina, estudio molecular de Factor V Leiden y protrombina G20210A, o anticuerpos antifosfolípido persistentemente positivos en 2 determinaciones separadas por al menos 12 semanas para el síndrome antifosfolípido) en un paciente con trombosis compatible o antecedente obstétrico específico.',
      laboratorio: 'Panel de trombofilia completo (idealmente fuera del episodio trombótico agudo y sin anticoagulación activa, que puede alterar algunos resultados); anticuerpos antifosfolípido con confirmación a las 12 semanas si son positivos inicialmente.',
      imagen: 'Ecografía Doppler venosa o angio-TC para confirmar el evento trombótico agudo sospechado.',
      complementarios: 'Asesoría genética familiar en las trombofilias hereditarias confirmadas, particularmente relevante para la planificación de anticoncepción/embarazo en mujeres portadoras.',
      dx_diferencial: 'Causas secundarias de trombosis sin trombofilia hereditaria/adquirida de base (neoplasia oculta, particularmente ante trombosis venosa no provocada en el adulto mayor; síndromes mieloproliferativos, ver ese tema), trombosis puramente provocada por un factor de riesgo transitorio sin trombofilia subyacente.',
      tx_medico: 'Anticoagulación terapéutica estándar ante un evento trombótico agudo, con duración extendida (potencialmente indefinida) en la trombofilia de alto riesgo con trombosis no provocada o recurrente; profilaxis anticoagulante en situaciones de alto riesgo transitorio adicional (cirugía mayor, embarazo) en el portador asintomático conocido.',
      tx_farmacologico: 'Heparina de bajo peso molecular o anticoagulantes orales directos para el tratamiento agudo y de mantenimiento en la mayoría de las trombofilias; antagonistas de la vitamina K (warfarina) preferidos sobre los anticoagulantes orales directos específicamente en el síndrome antifosfolípido de alto riesgo (triple positividad), dado el riesgo de falla terapéutica reconocido con los anticoagulantes orales directos en ese subgrupo específico; ácido acetilsalicílico en dosis bajas junto con heparina de bajo peso molecular profiláctica durante el embarazo en la mujer con síndrome antifosfolípido y antecedente obstétrico específico.',
      tx_intervencionista: 'No aplica de forma directa, salvo el manejo intervencionista estándar de un evento trombótico agudo mayor según su localización.',
      criterios_uci: 'Embolia pulmonar masiva con compromiso hemodinámico, trombosis extensa de senos venosos cerebrales con compromiso neurológico.',
      criterios_tips: 'Considerado en el contexto específico de trombosis extensa de la vena porta con hipertensión portal significativa asociada.',
      criterios_trasplante: 'No aplica de forma directa.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta a la anticoagulación durante el manejo agudo del evento trombótico.',
      seguimiento_ambulatorio: 'Seguimiento hematológico continuado con decisión individualizada sobre la duración de la anticoagulación según el tipo de trombofilia, el número de eventos, y si fueron provocados o no; manejo obstétrico especializado coordinado en la mujer con síndrome antifosfolípido y deseo de embarazo.',
      pronostico: 'Favorable con la anticoagulación apropiada y sostenida cuando está indicada; el riesgo de recurrencia varía considerablemente según el tipo específico de trombofilia y si el evento inicial fue provocado o no.',
      algoritmo: ['Trombosis a edad temprana, recurrente, en localización atípica, o antecedente obstétrico específico → sospechar trombofilia', 'Panel de trombofilia completo (idealmente fuera del episodio agudo y sin anticoagulación activa)', 'Anticoagulación terapéutica estándar del evento agudo mientras se completa el estudio', 'Confirmar síndrome antifosfolípido con 2 determinaciones separadas por 12 semanas antes de establecer el diagnóstico definitivo', 'Decidir duración de la anticoagulación (extendida vs. definida) según el tipo de trombofilia y si el evento fue provocado']
    },
    {
      nombre: 'Hemartrosis y artropatía hemofílica',
      color: '#6b4a2e',
      definicion: 'Complicación característica y acumulativa de la hemofilia no tratada o insuficientemente profilactizada: el sangrado articular recurrente (con mayor frecuencia rodillas, codos, y tobillos) produce, con el tiempo, un daño articular progresivo e irreversible (artropatía hemofílica) por la exposición repetida de la sinovial y el cartílago a la sangre intraarticular.',
      fisiopatologia: `La hemoglobina y los productos de degradación del hierro liberados dentro de la articulación tras cada episodio de hemartrosis son directamente tóxicos para el cartílago articular y desencadenan una respuesta inflamatoria sinovial crónica (sinovitis hemofílica); la sinovial inflamada y engrosada se vuelve, a su vez, más vascularizada y frágil, aumentando paradójicamente el riesgo de un nuevo episodio de sangrado en esa misma articulación, un ciclo autoperpetuante ("articulación diana") que progresa con cada episodio adicional hacia la destrucción articular irreversible si no se interrumpe con profilaxis adecuada.${figBlock('Imagen 2', 'El ciclo de la articulación diana', articulacionDianaHtml)}`,
      epidemiologia: 'Fue la complicación crónica dominante y prácticamente inevitable de la hemofilia grave en generaciones sin acceso a tratamiento profiláctico regular; su incidencia y gravedad se han reducido sustancialmente en las poblaciones con acceso a profilaxis moderna desde la infancia.',
      factores_riesgo: ['Hemofilia grave sin profilaxis regular o con profilaxis iniciada tardíamente', 'Episodios de hemartrosis no tratados oportunamente con factor sustitutivo', 'Presencia de un inhibidor del factor (mayor dificultad para controlar el sangrado agudo, ver esa tarjeta)', 'Actividad física de alto impacto sin la cobertura profiláctica adecuada'],
      clinica: 'Episodio agudo: dolor, tumefacción, calor, y limitación funcional de la articulación afectada, con frecuencia precedido por una sensación premonitoria característica que el paciente aprende a reconocer. Forma crónica establecida: deformidad articular fija, contractura, atrofia muscular circundante, y limitación funcional permanente.',
      criterios_dx: 'Diagnóstico clínico del episodio agudo en un paciente con hemofilia conocida; la artropatía crónica se documenta y gradúa mediante estudio de imagen articular seriado.',
      laboratorio: 'No específico para esta complicación en sí; el diagnóstico de hemofilia de base ya está establecido en el paciente que la presenta.',
      imagen: 'Ecografía articular como herramienta de cabecera para el episodio agudo (confirma la presencia de derrame hemático y orienta el tratamiento); resonancia magnética como estándar para documentar el daño articular estructural acumulado; radiografía simple útil en la enfermedad ya avanzada.',
      complementarios: 'Escalas específicas de puntuación articular (por imagen y por examen físico) usadas en centros especializados de hemofilia para el seguimiento longitudinal del daño articular.',
      dx_diferencial: 'Artritis séptica (fiebre y afectación sistémica más marcadas, requiere descarte activo dado que puede coexistir), otras causas de monoartritis aguda.',
      tx_medico: 'Tratamiento sustitutivo urgente con el factor deficiente ante cualquier episodio agudo de hemartrosis, sin demora, dado que el tratamiento temprano reduce tanto el daño articular agudo como el riesgo de convertirse en una articulación diana recurrente; reposo articular breve y rehabilitación temprana tras controlar el episodio agudo.',
      tx_farmacologico: 'Concentrado del factor deficiente (o emicizumab de mantenimiento si ya está en ese esquema) para el episodio agudo; analgesia evitando antiinflamatorios no esteroideos (riesgo hemorrágico adicional) y ácido acetilsalicílico.',
      tx_intervencionista: 'Sinovectomía (química, radioisotópica, o quirúrgica) en la sinovitis hemofílica crónica recurrente refractaria a la profilaxis intensificada; artroplastia total en la artropatía terminal establecida con dolor y limitación funcional significativos.',
      criterios_uci: 'No aplica de forma directa a esta complicación en sí.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta al tratamiento sustitutivo durante el episodio agudo.',
      seguimiento_ambulatorio: 'Fisioterapia y rehabilitación estructurada para preservar la función articular y prevenir la atrofia muscular circundante; vigilancia por imagen seriada del daño articular acumulado en centros especializados de hemofilia.',
      pronostico: 'La profilaxis regular iniciada tempranamente en la infancia previene en gran medida el desarrollo de artropatía hemofílica significativa; el daño ya establecido en el paciente con profilaxis tardía o ausente es en gran medida irreversible, aunque la artroplastia mejora sustancialmente la función en la enfermedad terminal.',
      algoritmo: ['Dolor/tumefacción articular aguda en paciente con hemofilia conocida → tratamiento sustitutivo urgente sin demora', 'Ecografía articular de cabecera para confirmar el derrame hemático', 'Reposo breve + rehabilitación temprana tras controlar el episodio agudo', 'Vigilancia de "articulación diana" (episodios recurrentes en la misma articulación) → intensificar profilaxis', 'Artropatía terminal establecida → evaluar sinovectomía o artroplastia']
    },
    {
      nombre: 'Inhibidores del factor',
      color: '#8c3a34',
      definicion: 'Desarrollo de un autoanticuerpo neutralizante contra el factor de coagulación sustitutivo administrado (con mayor frecuencia el factor VIII), la complicación más temida del tratamiento sustitutivo de la hemofilia congénita, dado que hace ineficaz el tratamiento estándar y complica sustancialmente el manejo tanto del sangrado agudo como de la profilaxis a largo plazo.',
      fisiopatologia: 'El sistema inmune del paciente con hemofilia congénita grave (que nunca ha estado expuesto a una proteína funcional completa, dado que su propio factor está genéticamente ausente o gravemente truncado) reconoce al factor sustitutivo exógeno administrado como una proteína extraña y monta una respuesta de anticuerpos neutralizantes contra él, con mayor riesgo en las primeras exposiciones al tratamiento (particularmente en la infancia); el anticuerpo neutraliza la función del factor administrado, haciendo ineficaz el tratamiento sustitutivo estándar sin importar la dosis, y obliga a recurrir a estrategias terapéuticas alternativas.',
      epidemiologia: 'Ocurre en una proporción considerable de los pacientes con hemofilia A grave a lo largo de su tratamiento (considerablemente menos frecuente en hemofilia B), con mayor riesgo en las primeras exposiciones acumuladas de tratamiento durante la infancia.',
      factores_riesgo: ['Hemofilia grave (mayor riesgo que la forma leve/moderada)', 'Mutación genética específica asociada a mayor riesgo inmunológico (grandes deleciones, mutaciones sin sentido)', 'Antecedente familiar de inhibidor en otro miembro con hemofilia', 'Exposición intensiva al factor en un contexto inflamatorio (cirugía, sangrado grave) durante las primeras exposiciones'],
      clinica: 'Sangrado que no responde al tratamiento sustitutivo estándar pese a dosis adecuadas, en un paciente con hemofilia congénita conocida; el cuadro clínico del episodio de sangrado en sí no difiere del de la hemofilia sin inhibidor, pero la falta de respuesta terapéutica es la clave diagnóstica.',
      criterios_dx: 'Título de inhibidor cuantificado en unidades Bethesda, mediante el ensayo de Bethesda (o su modificación Nijmegen), en un paciente con falta de respuesta clínica esperada al tratamiento sustitutivo o con un TTPa que no corrige adecuadamente tras la administración de factor.',
      laboratorio: 'Ensayo de Bethesda/Nijmegen para cuantificar el título de inhibidor; vigilancia periódica programada en todo paciente con hemofilia grave, particularmente durante las primeras exposiciones al tratamiento.',
      imagen: 'No específica para esta complicación en sí.',
      complementarios: 'Clasificación del inhibidor como de bajo título (&lt;5 unidades Bethesda) o alto título (≥5 unidades Bethesda), que orienta la estrategia terapéutica específica.',
      dx_diferencial: 'Dosificación insuficiente o subterapéutica del factor sustitutivo (causa más simple de falta de respuesta, debe descartarse antes de asumir un inhibidor), farmacocinética individual alterada del factor administrado.',
      tx_medico: 'Agentes bypass (concentrado de complejo protrombínico activado, o factor VII activado recombinante) para el manejo del sangrado agudo en el paciente con inhibidor de alto título, dado que el factor sustitutivo estándar es ineficaz; inducción de inmunotolerancia (exposición repetida y programada a dosis altas de factor) como estrategia a mediano-largo plazo para erradicar el inhibidor en muchos pacientes.',
      tx_farmacologico: 'Emicizumab como profilaxis de mantenimiento particularmente útil en el paciente con inhibidor, dado que no depende del factor VIII para su mecanismo de acción y por tanto no es neutralizado por el anticuerpo; agentes bypass para el sangrado agudo.',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'Sangrado grave con compromiso hemodinámico que no responde al tratamiento sustitutivo estándar.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia estrecha de la respuesta a los agentes bypass durante un episodio de sangrado agudo, dado que su eficacia es menos predecible que la del factor sustitutivo estándar.',
      seguimiento_ambulatorio: 'Vigilancia seriada del título de inhibidor durante la inducción de inmunotolerancia hasta su erradicación completa o hasta confirmar su persistencia a largo plazo.',
      pronostico: 'La inducción de inmunotolerancia logra erradicar el inhibidor en una proporción considerable de los pacientes, particularmente cuando se inicia tempranamente; el paciente con inhibidor persistente de alto título requiere manejo especializado a largo plazo con agentes bypass y/o emicizumab.',
      algoritmo: ['Sangrado sin respuesta a dosis adecuadas de factor sustitutivo en hemofilia conocida → sospechar inhibidor', 'Ensayo de Bethesda/Nijmegen para confirmar y cuantificar el título', 'Sangrado agudo → agentes bypass (no el factor deficiente estándar)', 'Inducción de inmunotolerancia programada como estrategia de erradicación a mediano-largo plazo', 'Considerar emicizumab como profilaxis de mantenimiento mientras persista el inhibidor']
    },
    {
      nombre: 'Trombosis venosa/arterial por trombofilia',
      color: '#3d5a73',
      definicion: 'La manifestación clínica central de cualquier trombofilia: un evento trombótico venoso (con mayor frecuencia trombosis venosa profunda de miembros inferiores y embolia pulmonar) o, con menor frecuencia salvo en el síndrome antifosfolípido, arterial, ocurriendo característicamente a edad temprana, de forma recurrente, o en una localización anatómica atípica que por sí sola ya sugiere una trombofilia subyacente.',
      fisiopatologia: 'El evento trombótico ocurre cuando el desequilibrio hemostático de base (por deficiencia de un inhibidor fisiológico o una ganancia de función procoagulante) se combina con un factor precipitante adicional (inmovilización, cirugía, embarazo, estrógenos) que, en un paciente sin trombofilia de base, sería insuficiente por sí solo para producir trombosis; la localización atípica (senos venosos cerebrales, venas esplácnicas/portal/hepáticas) es particularmente sugestiva de trombofilia subyacente (o de un síndrome mieloproliferativo no diagnosticado, ver ese tema) precisamente porque esas localizaciones rara vez trombosan por factores de riesgo comunes aislados.',
      epidemiologia: 'La trombosis venosa profunda de miembros inferiores y la embolia pulmonar son las manifestaciones más frecuentes de cualquier trombofilia; los eventos arteriales son considerablemente más característicos del síndrome antifosfolípido que de las trombofilias hereditarias clásicas.',
      factores_riesgo: ['Trombofilia hereditaria o adquirida de base ya establecida', 'Factor precipitante adicional concurrente (cirugía mayor, inmovilización prolongada, embarazo, uso de estrógenos)', 'Evento trombótico previo (el factor de riesgo aislado más fuerte para un nuevo evento)', 'Neoplasia activa concomitante (estado protrombótico adicional independiente)'],
      clinica: 'Trombosis venosa profunda: dolor, edema, y eritema unilateral de la extremidad afectada. Embolia pulmonar: disnea súbita, dolor torácico pleurítico, taquicardia. Trombosis de senos venosos cerebrales: cefalea progresiva, síntomas neurológicos focales, convulsiones. Trombosis venosa esplácnica: dolor abdominal, con frecuencia hallazgo incidental en un estudio de imagen.',
      criterios_dx: 'Confirmación por imagen del evento trombótico (ecografía Doppler venosa, angio-TC pulmonar, venografía por TC/RM cerebral según el sitio sospechado) en un paciente con las características clínicas descritas que orientan hacia una trombofilia subyacente.',
      laboratorio: 'Dímero D como cribado inicial de baja especificidad pero alta sensibilidad; panel de trombofilia completo diferido idealmente hasta después del episodio agudo y sin anticoagulación activa (ver la tarjeta de Trombofilias hereditarias y adquiridas para el desarrollo completo del estudio).',
      imagen: 'Ecografía Doppler venosa para trombosis de miembros; angio-TC pulmonar para embolia pulmonar; venografía por TC o RM para trombosis de senos venosos cerebrales o venas esplácnicas.',
      complementarios: 'Búsqueda activa de una neoplasia oculta en el adulto mayor con trombosis venosa no provocada sin otra explicación evidente, dado que puede preceder al diagnóstico de cáncer.',
      dx_diferencial: 'Trombosis puramente provocada por un factor de riesgo transitorio sin trombofilia subyacente (localización típica, primer episodio, factor precipitante claro), trombosis secundaria a un síndrome mieloproliferativo no diagnosticado (particularmente ante trombosis esplácnica, ver ese tema).',
      tx_medico: 'Anticoagulación terapéutica inmediata ante la confirmación del evento trombótico agudo, con la elección del agente y la duración determinadas por la localización, la gravedad, y el tipo de trombofilia subyacente identificada o sospechada.',
      tx_farmacologico: 'Heparina de bajo peso molecular de inicio inmediato, transicionando a un anticoagulante oral directo o antagonista de la vitamina K para el tratamiento de mantenimiento según el contexto específico (ver la tarjeta de Trombofilias para las consideraciones particulares del síndrome antifosfolípido de alto riesgo).',
      tx_intervencionista: 'Trombectomía o trombólisis dirigida por catéter considerada en casos seleccionados de trombosis extensa con compromiso significativo (embolia pulmonar masiva con inestabilidad hemodinámica, trombosis iliofemoral extensa).',
      criterios_uci: 'Embolia pulmonar masiva con compromiso hemodinámico, trombosis de senos venosos cerebrales con compromiso neurológico significativo.',
      criterios_tips: 'Considerado en el contexto específico de trombosis venosa esplácnica extensa con hipertensión portal significativa asociada.',
      criterios_trasplante: 'No aplica de forma directa.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta a la anticoagulación y de la estabilidad hemodinámica/neurológica durante el manejo agudo.',
      seguimiento_ambulatorio: 'Decisión individualizada sobre la duración de la anticoagulación (definida vs. extendida/indefinida) según el tipo de trombofilia confirmada y si el evento fue provocado o no provocado.',
      pronostico: 'Favorable con reconocimiento y anticoagulación oportunos; el riesgo de recurrencia a largo plazo depende sustancialmente del tipo específico de trombofilia identificada y de la decisión sobre la duración de la anticoagulación.',
      algoritmo: ['Trombosis venosa/arterial a edad temprana, recurrente, o en localización atípica → sospechar trombofilia subyacente', 'Confirmar el evento por imagen dirigida según el sitio sospechado', 'Anticoagulación terapéutica inmediata sin esperar el resultado del estudio de trombofilia', 'Completar el panel de trombofilia diferido tras el episodio agudo', 'Decidir duración de la anticoagulación según el tipo de trombofilia y si el evento fue provocado']
    },
    {
      nombre: 'Complicaciones obstétricas de trombofilia',
      color: '#8c6b2d',
      definicion: 'Espectro de complicaciones obstétricas asociadas a una trombofilia subyacente, particularmente bien caracterizado en el síndrome antifosfolípido: pérdida fetal recurrente, preeclampsia grave de inicio temprano, restricción del crecimiento intrauterino, y parto pretérmino por insuficiencia placentaria, reflejando el efecto protrombótico de la trombofilia sobre la microvasculatura placentaria.',
      fisiopatologia: 'La placenta depende de un flujo microvascular adecuado y sostenido a través de las arterias espirales uterinas para sostener el desarrollo fetal normal; en la trombofilia (particularmente el síndrome antifosfolípido, donde los autoanticuerpos activan directamente el endotelio y las plaquetas, aunque también descrito con las trombofilias hereditarias clásicas), la microtrombosis placentaria progresiva compromete ese flujo, produciendo insuficiencia placentaria que se manifiesta clínicamente como restricción del crecimiento intrauterino, preeclampsia de inicio temprano, o pérdida fetal, particularmente en el segundo o tercer trimestre (un patrón temporal que distingue esta causa de las pérdidas tempranas del primer trimestre, con frecuencia de causa cromosómica y no relacionadas con trombofilia).',
      epidemiologia: 'El síndrome antifosfolípido es la trombofilia adquirida más fuertemente asociada a morbilidad obstétrica recurrente; las trombofilias hereditarias clásicas tienen una asociación menos consistente y de menor magnitud con la pérdida fetal, particularmente la de origen temprano.',
      factores_riesgo: ['Síndrome antifosfolípido confirmado, particularmente con triple positividad de anticuerpos (mayor riesgo obstétrico)', 'Antecedente obstétrico previo específico (pérdida fetal en el segundo/tercer trimestre, preeclampsia grave de inicio temprano, restricción de crecimiento intrauterino grave)', 'Trombofilia hereditaria de alto riesgo concomitante'],
      clinica: 'Pérdida fetal recurrente (particularmente ≥1 pérdida después de la semana 10 de gestación con morfología fetal normal, o ≥3 pérdidas tempranas consecutivas inexplicadas), preeclampsia grave de inicio antes de la semana 34, restricción del crecimiento intrauterino grave, parto pretérmino por insuficiencia placentaria documentada.',
      criterios_dx: 'Cumplimiento de los criterios obstétricos específicos de clasificación del síndrome antifosfolípido, combinados con la confirmación serológica persistente del anticuerpo correspondiente (ver la tarjeta de Trombofilias para el desarrollo completo de los criterios diagnósticos).',
      laboratorio: 'Anticuerpos antifosfolípido (anticoagulante lúpico, anticardiolipina, anti-beta2-glicoproteína I) con confirmación a las 12 semanas si son inicialmente positivos; estudio de trombofilia hereditaria si el síndrome antifosfolípido resulta negativo y la sospecha clínica persiste.',
      imagen: 'Ecografía obstétrica seriada con Doppler de arterias uterinas/umbilicales para vigilar el crecimiento fetal y detectar signos tempranos de insuficiencia placentaria en el embarazo de alto riesgo ya identificado.',
      complementarios: 'Evaluación histopatológica de la placenta tras la pérdida fetal en casos seleccionados, que puede mostrar hallazgos de microtrombosis o infarto placentario apoyando el mecanismo trombofílico.',
      dx_diferencial: 'Causas cromosómicas de pérdida fetal (particularmente en pérdidas tempranas del primer trimestre, mecanismo distinto no relacionado con trombofilia), otras causas de preeclampsia o restricción de crecimiento sin trombofilia de base identificable.',
      tx_medico: 'Ácido acetilsalicílico en dosis bajas iniciado antes o al inicio del embarazo, combinado con heparina de bajo peso molecular profiláctica durante toda la gestación, en la mujer con síndrome antifosfolípido y antecedente obstétrico específico, dado que este esquema combinado mejora sustancialmente el desenlace del embarazo comparado con el ácido acetilsalicílico solo.',
      tx_farmacologico: 'Ácido acetilsalicílico en dosis bajas + heparina de bajo peso molecular profiláctica como esquema estándar durante el embarazo en la mujer con síndrome antifosfolípido obstétrico; los antagonistas de la vitamina K están contraindicados durante el embarazo por teratogenicidad, y los anticoagulantes orales directos tampoco se usan en el embarazo.',
      tx_intervencionista: 'No aplica de forma directa.',
      criterios_uci: 'Preeclampsia grave con complicaciones sistémicas asociadas (síndrome HELLP, eclampsia), manejado según el protocolo obstétrico estándar de esas complicaciones.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia obstétrica estándar de cualquier complicación aguda del embarazo de alto riesgo (preeclampsia grave, restricción de crecimiento con compromiso del bienestar fetal).',
      seguimiento_ambulatorio: 'Seguimiento obstétrico especializado de alto riesgo con vigilancia ecográfica seriada del crecimiento fetal y el flujo Doppler durante toda la gestación; continuación de la anticoagulación profiláctica en el puerperio inmediato, dado que el riesgo trombótico materno persiste elevado en ese periodo.',
      pronostico: 'El esquema combinado de ácido acetilsalicílico y heparina de bajo peso molecular mejora sustancialmente la tasa de nacido vivo en la mujer con síndrome antifosfolípido y antecedente obstétrico específico, comparado con el manejo sin profilaxis dirigida.',
      algoritmo: ['Pérdida fetal recurrente, preeclampsia grave temprana, o restricción de crecimiento grave inexplicada → estudiar síndrome antifosfolípido', 'Confirmar anticuerpos antifosfolípido con determinación repetida a las 12 semanas', 'Embarazo futuro planificado → iniciar ácido acetilsalicílico en dosis bajas antes o al inicio de la gestación', 'Añadir heparina de bajo peso molecular profiláctica durante toda la gestación', 'Vigilancia ecográfica Doppler seriada del crecimiento fetal y continuación de profilaxis en el puerperio inmediato']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de este tema se centra en el manejo del sangrado agudo grave (hemofilia, coagulopatía adquirida) o del evento trombótico agudo (trombofilia), y en la preparación perioperatoria del paciente con un trastorno conocido.',
    parametros: ['Respuesta al tratamiento sustitutivo o anticoagulante seriada', 'Signos de sangrado activo o de progresión de un evento trombótico', 'Título de inhibidor seriado si aplica (hemofilia A adquirida)'],
    criterios_uci_general: 'Sangrado grave con compromiso hemodinámico, hemorragia intracraneal, embolia pulmonar masiva o trombosis extensa con compromiso hemodinámico o neurológico.',
    criterios_tips_general: 'Considerado en el contexto específico de trombosis venosa esplácnica extensa con hipertensión portal significativa asociada.',
    criterios_trasplante_general: 'No aplica de forma directa a este tema; ver los temas específicos de la enfermedad de base cuando corresponda (Cirrosis Hepática).',
    prevencion: 'Profilaxis regular con factor en la hemofilia grave para prevenir la artropatía hemofílica crónica; profilaxis anticoagulante en el portador conocido de trombofilia ante un factor de riesgo transitorio adicional (cirugía, embarazo); manejo obstétrico especializado en la mujer con síndrome antifosfolípido; vigilancia periódica del desarrollo de inhibidores durante el tratamiento sustitutivo con factor.'
  }
};

export const compCites = {
  'Hemofilia A y B': [1, 11, 12],
  'Enfermedad de von Willebrand': [2, 3],
  'Coagulopatía adquirida': [4, 5],
  'Trombofilias hereditarias y adquiridas': [6, 7, 8, 9, 10],
  'Hemartrosis y artropatía hemofílica': [1, 11],
  'Inhibidores del factor': [1, 4],
  'Trombosis venosa/arterial por trombofilia': [6, 7],
  'Complicaciones obstétricas de trombofilia': [8, 9, 13]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'ISTH-BAT (Bleeding Assessment Tool)': [3],
  'Clasificación de gravedad de la hemofilia': [1, 11]
};
export const escalaCalc = { 'ISTH-BAT (Bleeding Assessment Tool)': 'isth-bat' };
export const compGroups = [
  { name: 'Entidades por dirección del desequilibrio (enfermedades)', items: ['Hemofilia A y B', 'Enfermedad de von Willebrand', 'Coagulopatía adquirida', 'Trombofilias hereditarias y adquiridas'] },
  { name: 'Complicaciones transversales', items: ['Hemartrosis y artropatía hemofílica', 'Inhibidores del factor', 'Trombosis venosa/arterial por trombofilia', 'Complicaciones obstétricas de trombofilia'] }
];
export const complicacionesIntro = 'Las 4 primeras tarjetas representan las 2 direcciones opuestas del mismo desequilibrio: hacia el sangrado (hemofilia, enfermedad de von Willebrand, coagulopatía adquirida) o hacia la trombosis (trombofilias hereditarias y adquiridas); las siguientes 4 son complicaciones transversales específicas, 2 del lado hemorrágico (hemartrosis/artropatía, inhibidores del factor) y 2 del lado trombótico (eventos trombóticos, complicaciones obstétricas).';
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
  root: { title: 'COAGULACIÓN Y TROMBOFILIAS', color: '#5c3d73', target: 'definicion' },
  branches: [
    { title: 'Hacia el sangrado', sub: 'Déficit de factor procoagulante', color: '#7a1f3d', target: 'diagnostico', leaves: [
      { title: 'Hemofilia A y B', sub: 'Factor VIII o IX', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Enfermedad de von Willebrand', sub: 'Sangrado mucocutáneo', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Coagulopatía adquirida', sub: 'Hepática, vitamina K, inhibidor', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'Hacia la trombosis', sub: 'Déficit de inhibidor fisiológico', color: '#3f6b52', target: 'diagnostico', leaves: [
      { title: 'Trombofilias hereditarias y adquiridas', sub: 'Factor V Leiden, proteína C/S, SAF', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones transversales', sub: '2 hemorrágicas + 2 trombóticas', color: '#6b4a2e', target: 'complicaciones', leaves: [
      { title: 'Hemartrosis y artropatía hemofílica', sub: 'Articulación diana', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Inhibidores del factor', sub: 'Anticuerpo anti-VIII/IX', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Trombosis venosa/arterial por trombofilia', sub: 'TVP, TEP, atípica', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Complicaciones obstétricas de trombofilia', sub: 'Pérdida fetal, preeclampsia', color: '#8c6b2d', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 3], no_invasivos: [3] };
export const clasificacionCite = [3, 1];
export const seguimientoCite = [1, 6];
