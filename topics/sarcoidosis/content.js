// topics/sarcoidosis/content.js: Sarcoidosis y otras enfermedades granulomatosas.
// Cubre el item "Sarcoidosis y otras enfermedades granulomatosas" del cluster Enfermedad
// respiratoria cronica (bloque III, Neumologia) del temario.
//
// Fuentes principales: guia de la American Thoracic Society de 2020 sobre diagnostico y deteccion
// de la sarcoidosis (la que hay en Bibliografia/); guia de tratamiento de la ERS de 2021;
// declaracion de expertos sobre sarcoidosis cardiaca; y las series clasicas sobre el sindrome de
// Lofgren, el metabolismo del calcio y el uso de metotrexato e infliximab.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// 6 fichas, 4 calculadoras, 4 figuras. Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'sarcoidosis',
  titulo: 'Sarcoidosis',
  subtitulo: 'Módulo 58 · Medicina Interna',
  accent: '#8a4a7a'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const granulomaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8a4a7a;border-radius:8px;padding:5px 9px;background:#8a4a7a12;margin-bottom:6px;">
    <strong style="color:#8a4a7a;">La sarcoidosis es un diagnóstico de TRES PATAS, y ninguna basta por si sola.</strong> <span style="color:var(--ink-dim);">Cuadro clínico y radiológico compatible, granulomas NO caseificantes en la biopsia, y EXCLUSIÓN de otras causas de granulomas. No existe una prueba que la confirme.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #8a4a7a;border-radius:8px;padding:6px 8px;background:#8a4a7a08;">
      <div style="font-weight:700;color:#8a4a7a;text-align:center;margin-bottom:4px;">GRANULOMA SARCOIDEO</div>
      <div style="color:var(--ink-dim);line-height:1.6;">No caseificante, bien delimitado, con escaso infiltrado linfocitario alrededor (granuloma "desnudo"). Se distribuye a lo largo de los <strong style="color:var(--ink);">LINFÁTICOS</strong>: peribroncovascular, subpleural y a lo largo de los septos, lo que explica el patrón radiológico característico.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">LO QUE HAY QUE EXCLUIR ANTES</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">Infección</strong>: tuberculosis y micobacterias no tuberculosas, hongos (tinciones y CULTIVOS obligados en la muestra).<br><strong style="color:var(--ink);">Exposición</strong>: BERILIO, que produce un cuadro indistinguible; polvos inorganicos.<br><strong style="color:var(--ink);">Otras</strong>: linfoma con reacción sarcoidea, granulomatosis con poliangeítis, inmunodeficiencia común variable, reacción a fármacos e inmunoterapia.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Cuando NO hace falta biopsia.</strong> En el <strong>síndrome de LOFGREN</strong> completo (eritema nodoso, adenopatías hiliares bilaterales y artritis de tobillos, con o sin fiebre) la especificidad es tan alta que la biopsia no aporta. Lo mismo ocurre en el <strong>síndrome de Heerfordt</strong> (fiebre uveoparotidea con parálisis facial) y ante adenopatías hiliares bilaterales asintomáticas y simétricas en un paciente por lo demás sano.
    </div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">La enzima convertidora de angiotensina NO diagnóstica.</strong> Tiene sensibilidad y especificidad bajas: sube en otras granulomatosis, en el hipertiroidismo y en la diabetes, y baja con los inhibidores de la enzima convertidora. No sirve para confirmar el diagnóstico ni para seguir la actividad de la enfermedad, y pedirla como prueba de cribado genera más confusión que ayuda.
    </div>
  </div>
</div>`;

const scaddingHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:38px 1fr 96px;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#3f6b52;">0</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Radiografía de tórax <strong style="color:var(--ink);">NORMAL</strong>. La enfermedad puede estar en otros órganos, de modo que un estadio 0 no significa ausencia de sarcoidosis.</div>
      <div style="display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">sin afectación</div>
    </div>
    <div style="display:grid;grid-template-columns:38px 1fr 96px;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#3f6b52;">I</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Adenopatías hiliares BILATERALES</strong> y simétricas, con parénquima limpio. Es el hallazgo más característico y el que más veces se descubre por casualidad.</div>
      <div style="display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">remisión muy frecuente</div>
    </div>
    <div style="display:grid;grid-template-columns:38px 1fr 96px;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8a6a1f;">II</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Adenopatías <strong style="color:var(--ink);">MÁS</strong> infiltrado parenquimatoso, típicamente nodulillos de distribución perilinfatica en campos medios y superiores.</div>
      <div style="display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">remisión frecuente</div>
    </div>
    <div style="display:grid;grid-template-columns:38px 1fr 96px;gap:6px;align-items:stretch;">
      <div style="background:#8c5a2e22;border:1px solid #8c5a2e;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c5a2e;">III</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Infiltrado parenquimatoso <strong style="color:var(--ink);">SIN</strong> adenopatías: las adenopatías ya han regresado y queda la enfermedad del parénquima.</div>
      <div style="display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c5a2e;">remisión poco frecuente</div>
    </div>
    <div style="display:grid;grid-template-columns:38px 1fr 96px;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c3a34;">IV</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">FIBROSIS</strong> establecida, con retracción hiliar, bullas y distorsión de predominio en campos superiores. Es el daño ya consolidado.</div>
      <div style="display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">irreversible</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Como se usa y como NO se usa esta clasificación.</strong> Es una escala <strong>RADIOLÓGICA y pronostica</strong>, no de gravedad ni de actividad, y los estadios NO son fases obligatorias: la enfermedad puede empezar en cualquiera de ellos y no tiene que recorrerlos en orden. Y sobre todo, el estadio NO indica por si solo si hay que tratar: esa decisión depende de los síntomas, de la función pulmonar y de la afectación de órganos de riesgo.
  </div>
</div>`;

const cribadoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3d5a73;border-radius:8px;padding:5px 9px;background:#3d5a7312;margin-bottom:6px;">
    <strong style="color:#3d5a73;">La sarcoidosis puede afectar a CUALQUIER órgano, y los que matan suelen ser silentes.</strong> <span style="color:var(--ink-dim);">Por eso al diagnóstico se hace un cribado sistemático y corto, igual en todos los pacientes, independientemente de lo bien que se encuentren.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1px solid #8c3a34;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#8c3a34;">ELECTROCARDIOGRAMA.</strong> A todos. Un bloqueo auriculoventricular en un adulto joven, una arritmia ventricular o cualquier alteración de la conducción obligan a estudiar el corazón con imagen avanzada. La afectación cardiaca es una de las principales causas de muerte y con frecuencia es la primera manifestación.</div>
    <div style="border:1px solid #3d5a73;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#3d5a73;">EXPLORACIÓN OFTALMOLÓGICA.</strong> A todos, con lámpara de hendidura, aunque el paciente no refiera nada. La uveitis puede ser asintomática al principio y amenazar la visión, y su detección cambia por completo la indicación de tratamiento.</div>
    <div style="border:1px solid #8a6a1f;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#8a6a1f;">CALCIO en sangre y en ORINA.</strong> La hipercalciuria es MÁS frecuente que la hipercalcemia y produce litiasis y nefrocalcinosis de forma silente. Pedir solo el calcio sérico deja escapar la mayoría de los casos.</div>
    <div style="border:1px solid #3f6b52;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#3f6b52;">FUNCIÓN PULMONAR con DLCO.</strong> Espirometría, volúmenes y DLCO como punto de partida. Es lo que permitira después saber si la enfermedad progresa, porque la radiografía cambia despacio y mal.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Y además.</strong> Creatinina y sedimento urinario, perfil hepático, hemograma (citopenias por afectación medular o esplénica) y exploración cutánea completa. La piel es un órgano accesible: una lesión cutánea puede dar el diagnóstico con una biopsia sencilla y evitar una broncoscopia.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">El LUPUS PERNIO no es una lesión cutánea más.</strong> Placas violáceas induradas en nariz, mejillas y orejas: se asocia a enfermedad crónica, a afectación de la via aérea superior y a peor respuesta al tratamiento. Su presencia cambia el pronóstico y suele obligar a escalar más allá del corticoide.
    </div>
  </div>
</div>`;

const tratarHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">NO TRATAR (observar)</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Paciente <strong style="color:var(--ink);">ASINTOMÁTICO</strong> con función pulmonar conservada y sin afectación de órgano de riesgo, sobre todo en estadios I y II. La remisión espontánea es frecuente, y el tratamiento con corticoides tiene una toxicidad que no compensa cuando no hay nada que ganar. Se vigila con función pulmonar y clínica.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">TRATAR SIEMPRE (órgano de riesgo)</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">CORAZÓN</strong> (bloqueo, arritmia, disfunción), <strong style="color:var(--ink);">SISTEMA NERVIOSO</strong>, <strong style="color:var(--ink);">OJO</strong> con amenaza visual, <strong style="color:var(--ink);">HIPERCALCEMIA</strong> significativa y afectación renal. Aquí no se espera a ver si remite sola, porque el daño que se establece no se recupera.</div>
    </div>
  </div>
  <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 9px;background:#8a6a1f10;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Y la zona intermedia, que es donde esta la mayoría.</strong> Se trata al paciente con <strong>síntomas que limitan su vida</strong> (disnea, tos, fatiga incapacitante) o con <strong>deterioro funcional documentado</strong> en pruebas seriadas. La clave es tener un basal y comparar: sin función pulmonar previa no se puede saber si esto progresa, y la radiografía responde tarde y mal.
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:86px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a4a7a22;border:1px solid #8a4a7a;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a4a7a;">1.a línea</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">CORTICOIDES</strong> orales, con descenso progresivo y tratamiento prolongado de meses. Profilaxis de osteoporosis y vigilancia de glucemia, presión y peso desde el primer dia.</div>
    </div>
    <div style="display:grid;grid-template-columns:86px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">2.a línea</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">METOTREXATO</strong> como ahorrador de corticoide, que es el más usado; azatioprina y micofenolato como alternativas. Se añaden cuando no se puede bajar el corticoide o su toxicidad es inaceptable.</div>
    </div>
    <div style="display:grid;grid-template-columns:86px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">3.a línea</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">ANTAGONISTAS DEL FACTOR DE NECROSIS TUMORAL</strong>, sobre todo infliximab, en la enfermedad refractaria y en formas graves como el lupus pernio o la neurosarcoidosis. Antes de iniciarlos, cribado obligatorio de tuberculosis latente.</div>
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La sarcoidosis es una enfermedad inflamatoria sistémica de causa desconocida, caracterizada por la formación de <strong>granulomas no caseificantes</strong> en los órganos afectados. Puede afectar a cualquiera de ellos, pero en la práctica el tórax esta implicado en la gran mayoría de los casos. Tiene dos rasgos que la hacen difícil: no existe una prueba que la confirme, de modo que el diagnóstico es de exclusión razonada, y su curso es tan variable que va desde la remisión espontánea completa hasta la fibrosis o la muerte súbita.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: un diagnóstico de tres patas.</strong></p>
<p style="margin:0 0 12px;">Hacen falta un <strong>cuadro clínico y radiológico compatible</strong>, <strong>granulomas no caseificantes</strong> en la biopsia y, sobre todo, la <strong>exclusión de otras causas</strong> de granuloma: infección (tuberculosis y hongos, que obligan a mandar la muestra también a cultivo), exposición al berilio, linfoma, vasculitis y fármacos. La enzima convertidora de angiotensina no forma parte de esto: no confirma, no descarta y no sirve para seguir la enfermedad. Y hay situaciones en las que la clínica es tan característica que la biopsia no aporta nada.</p>
${figBlock('Figura 1', 'Las tres patas del diagnóstico y lo que hay que excluir', granulomaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: los estadios radiológicos, y para que sirven.</strong></p>
<p style="margin:0 0 12px;">La clasificación radiológica clásica ordena la afectación torácica en cinco estadios y aporta información <strong>pronostica</strong>: cuanto más bajo, más probable es la remisión espontánea. Pero conviene tener claras sus dos limitaciones, porque son fuente constante de errores: los estadios <strong>no son fases obligatorias</strong> que la enfermedad recorra en orden, y el estadio <strong>no indica por si solo si hay que tratar</strong>.</p>
${figBlock('Figura 2', 'Estadios radiológicos y probabilidad de remisión espontánea', scaddingHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: el cribado de órganos que se hace a todos.</strong></p>
<p style="margin:0 0 12px;">Como la enfermedad puede afectar a cualquier órgano y los que más comprometen el pronóstico suelen ser silentes, al diagnóstico se hace un cribado corto e igual para todos: <strong>electrocardiograma</strong>, <strong>exploración oftalmológica</strong> con lámpara de hendidura, <strong>calcio en sangre y en orina</strong> y <strong>función pulmonar con DLCO</strong>, más analítica básica y exploración cutánea. No depende de lo bien que se encuentre el paciente.</p>
${figBlock('Figura 3', 'Lo que se pide al diagnóstico en todos los pacientes', cribadoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: a quien se trata.</strong></p>
<p style="margin:0 0 12px;">Es la decisión central del tema y no depende del estadio radiológico sino de tres cosas: si hay <strong>síntomas que limiten la vida del paciente</strong>, si hay <strong>deterioro funcional documentado</strong>, y si hay afectación de un <strong>órgano de riesgo</strong> (corazón, sistema nervioso, ojo con amenaza visual, riñón o hipercalcemia). Al paciente asintomático con función conservada se le observa, porque la remisión espontánea es frecuente y el corticoide no es inocuo.</p>
${figBlock('Figura 4', 'Observar, tratar siempre, y los escalones terapéuticos', tratarHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No usar la enzima convertidora de angiotensina para diagnosticar ni para seguir la enfermedad. No diagnosticar sarcoidosis sin haber mandado la muestra a cultivo de micobacterias y hongos. No preguntar por exposición al berilio solo cuando el caso no encaja, sino de entrada. No tratar a un paciente asintomático con función conservada solo porque la radiografía impresione. No dejar de hacer electrocardiograma y exploración oftalmológica a todos. No pedir solo calcio sérico y olvidar el urinario. No suplementar vitamina D de forma rutinaria en estos pacientes. No usar la radiografía como medida de respuesta al tratamiento cuando lo que hay que seguir es la función pulmonar. Y no iniciar un antagonista del factor de necrosis tumoral sin haber cribado antes la tuberculosis latente.</p>`;

export const bibliografia = [
  'Crouser ED, Maier LA, Wilson KC, et al. Diagnosis and detection of sarcoidosis: an official American Thoracic Society clinical practice guideline. Am J Respir Crit Care Med. 2020;201(8):e26-e51.',
  'Baughman RP, Valeyre D, Korsten P, et al. ERS clinical practice guidelines on treatment of sarcoidosis. Eur Respir J. 2021;58(6):2004079.',
  'Birnie DH, Sauer WH, Bogun F, et al. HRS expert consensus statement on the diagnosis and management of arrhythmias associated with cardiac sarcoidosis. Heart Rhythm. 2014;11(7):1305-1323.',
  'Judson MA. The clinical features of sarcoidosis: a comprehensive review. Clin Rev Allergy Immunol. 2015;49(1):63-78.',
  'Grunewald J, Grutters JC, Arkema EV, et al. Sarcoidosis. Nat Rev Dis Primers. 2019;5(1):45.',
  'Baughman RP, Teirstein AS, Judson MA, et al. Clinical characteristics of patients in a case control study of sarcoidosis. Am J Respir Crit Care Med. 2001;164(10):1885-1889.',
  'Vorselaars ADM, Crommelin HA, Deneer VHM, et al. Effectiveness of infliximab in refractory FDG PET-positive sarcoidosis. Eur Respir J. 2015;46(1):175-185.',
  'Baughman RP, Winget DB, Lower EE. Methotrexate is steroid sparing in acute sarcoidosis: results of a double blind, randomized trial. Sarcoidosis Vasc Diffuse Lung Dis. 2000;17(1):60-66.',
  'Sharma OP. Vitamin D, calcium, and sarcoidosis. Chest. 1996;109(2):535-539.',
  'Mana J, Gomez-Vaquero C, Montero A, et al. Lofgren syndrome revisited: a study of 186 patients. Am J Med. 1999;107(3):240-245.',
  'Stern BJ, Royal W, Gelfand JM, et al. Definition and consensus diagnostic criteria for neurosarcoidosis. JAMA Neurol. 2018;75(12):1546-1553.',
  'Kouranos V, Sharma R. Cardiac sarcoidosis: state-of-the-art review. Heart. 2021;107(19):1591-1599.',
  'Gupta D, Dadhwal DS, Agarwal R, et al. Endobronchial ultrasound-guided transbronchial needle aspiration versus conventional transbronchial needle aspiration in the diagnosis of sarcoidosis. Chest. 2014;146(3):547-556.',
  'Balmes JR, Abraham JL, Dweik RA, et al. An official American Thoracic Society statement: diagnosis and management of beryllium sensitivity and chronic beryllium disease. Am J Respir Crit Care Med. 2014;190(10):e34-e59.',
  'Drent M, Crouser ED, Grunewald J. Challenges of sarcoidosis and its management. N Engl J Med. 2021;385(11):1018-1032.',
  'Ramos-Casals M, Retamozo S, Siso-Almirall A, et al. Clinically-useful serum biomarkers for diagnosis and prognosis of sarcoidosis. Expert Rev Clin Immunol. 2019;15(4):391-405.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Presentación torácica y general',
      tituloB: 'Presentaciones que cambian el pronóstico',
      compensada: 'Muchos pacientes están ASINTOMÁTICOS y se descubren por una radiografía pedida por otro motivo, que muestra adenopatías hiliares bilaterales y simétricas. Cuando hay síntomas, los más frecuentes son tos seca persistente, disnea de esfuerzo y molestia torácica mal definida, junto con un síndrome general de fatiga, febrícula y pérdida de peso. La FATIGA es uno de los síntomas que más limitan la vida de estos pacientes y uno de los que peor se correlacionan con la afectación medible de órganos, lo que hace que con frecuencia se infravalore.',
      descompensada: 'Las presentaciones que obligan a actuar sin demora: síncope, palpitaciones o bloqueo auriculoventricular en un adulto joven, que apuntan a afectación CARDIACA; déficit neurológico, parálisis de pares craneales o meningitis linfocitaria crónica, que apuntan a NEUROSARCOIDOSIS; dolor ocular, ojo rojo o pérdida de visión por uveitis; hipercalcemia sintomática con deshidratación y deterioro renal; e insuficiencia respiratoria en la enfermedad fibrótica avanzada, a veces con hipertensión pulmonar asociada.'
    },
    laboratorio: [
      { prueba: 'Calcio sérico y calcio en orina de 24 horas', utilidad: 'Los macrófagos del granuloma producen 1,25-dihidroxivitamina D de forma no regulada, lo que aumenta la absorción intestinal de calcio. La HIPERCALCIURIA es bastante más frecuente que la hipercalcemia y produce litiasis y nefrocalcinosis de forma silente, de modo que pedir solo el calcio sérico deja escapar la mayoría de los casos.' },
      { prueba: 'Creatinina y sedimento urinario', utilidad: 'La afectación renal puede ser por nefrocalcinosis, por litiasis o por nefritis intersticial granulomatosa. Es una de las indicaciones claras de tratamiento y con frecuencia se detecta solo si se busca, porque hasta fases avanzadas no da síntomas.' },
      { prueba: 'Perfil hepático', utilidad: 'La afectación hepática es frecuente en las biopsias pero suele ser asintomática. Un patrón colestásico con fosfatasa alcalina elevada es lo típico. Solo se trata si es progresiva o sintomática, de modo que su hallazgo no obliga por sí mismo a dar corticoides.' },
      { prueba: 'Hemograma', utilidad: 'Linfopenia (muy característica y a menudo pasada por alto), anemia y trombopenia por afectación medular o por hiperesplenismo. La linfopenia refleja el secuestro de linfocitos en los granulomas y no una inmunodeficiencia primaria, aunque conviene descartar la inmunodeficiencia común variable en el diferencial.' },
      { prueba: 'Enzima convertidora de angiotensina', utilidad: 'NO sirve para diagnosticar ni para seguir la enfermedad: sensibilidad y especificidad bajas, sube en otras granulomatosis, en el hipertiroidismo y en la diabetes, y baja con los inhibidores de la enzima convertidora. Su uso como prueba de cribado genera más confusión que ayuda.' },
      { prueba: '25-hidroxivitamina D y 1,25-dihidroxivitamina D', utilidad: 'El patrón característico es 25-hidroxivitamina D baja o normal con 1,25-dihidroxivitamina D ELEVADA y parathormona suprimida. Es importante porque explica por que NO hay que suplementar vitamina D de forma rutinaria en estos pacientes: puede precipitar hipercalcemia.' },
      { prueba: 'Interferón gamma o tuberculina', utilidad: 'Antes de iniciar corticoides a dosis altas y, sobre todo, antes de un antagonista del factor de necrosis tumoral. La anergia cutánea es frecuente en la sarcoidosis activa, de modo que un resultado negativo hay que interpretarlo con cautela.' },
      { prueba: 'Péptido natriurético y troponina', utilidad: 'Apoyan la sospecha de afectación cardiaca en el paciente con síntomas o con electrocardiograma alterado. Su normalidad no la descarta, porque la sarcoidosis cardiaca puede ser parcheada y manifestarse solo como trastorno de la conducción.' }
    ],
    no_invasivos: [
      { metodo: 'Estadio radiológico de Scadding (calculadora disponible)', interpretacion: 'Cinco estadios según la radiografía de tórax. Aporta información pronostica sobre la remisión espontánea, pero NO es una escala de gravedad ni de actividad, y los estadios no son fases obligatorias.', cutoff: '0 normal; I adenopatías; II adenopatías más infiltrado; III infiltrado sin adenopatías; IV fibrosis' },
      { metodo: 'Decisión de tratar (calculadora disponible)', interpretacion: 'Combina síntomas, función pulmonar y afectación de órganos de riesgo. El estadio radiológico por si solo no decide.', cutoff: 'Órgano de riesgo afectado, síntomas limitantes o deterioro funcional documentado' },
      { metodo: 'Valoración de la hipercalcemia (calculadora disponible)', interpretacion: 'Patrón característico de hipercalcemia mediada por 1,25-dihidroxivitamina D con parathormona suprimida, distinto del hiperparatiroidismo y de la hipercalcemia tumoral.', cutoff: 'Calcio corregido elevado con parathormona suprimida y 1,25-dihidroxivitamina D alta' },
      { metodo: 'Sospecha de afectación cardiaca (calculadora disponible)', interpretacion: 'Reúne los datos que obligan a pasar a imagen avanzada del corazón. La afectación cardiaca es una de las principales causas de muerte y con frecuencia es silente hasta el primer evento.', cutoff: 'Síncope, palpitaciones, bloqueo auriculoventricular, arritmia ventricular o alteración ecocardiográfica sin explicación' },
      { metodo: 'Función pulmonar completa con DLCO', interpretacion: 'Patrón habitualmente RESTRICTIVO con descenso de la DLCO, aunque puede haber obstrucción por afectación endobronquial. Es el parámetro que mejor sigue la evolución, muy por delante de la radiografía.', cutoff: 'Descenso de la capacidad vital forzada del 10% o de la DLCO del 15% respecto al basal: deterioro significativo' },
      { metodo: 'Prueba de la marcha de 6 minutos', interpretacion: 'Útil para objetivar la limitación funcional y detectar desaturación de esfuerzo, sobre todo en la enfermedad fibrótica y ante sospecha de hipertensión pulmonar asociada.', cutoff: 'Desaturación por debajo del 88% durante la prueba: valorar hipertensión pulmonar y oxigenoterapia' },
      { metodo: 'Electrocardiograma', interpretacion: 'Se hace a TODOS al diagnóstico. Un bloqueo auriculoventricular en un adulto joven, un bloqueo de rama derecha de nueva aparición o una arritmia ventricular obligan a estudiar el corazón con imagen avanzada.', cutoff: 'Cualquier alteración de la conducción o arritmia ventricular sin otra explicación' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'Adenopatías hiliares BILATERALES y SIMÉTRICAS, con o sin adenopatías paratraqueales derechas, y con o sin infiltrado parenquimatoso. La bilateralidad y la simetría son lo que la separa del linfoma y de la tuberculosis, que tienden a ser asimétricos. En fases avanzadas, fibrosis con retracción hiliar de predominio en campos superiores.' },
      { modalidad: 'Tomografía de alta resolución', hallazgos: 'Micronodulos de distribución PERILINFATICA (peribroncovascular, subpleural y septal) de predominio en campos medios y superiores, adenopatías que pueden calcificarse en cascara de huevo, y en fases avanzadas bandas fibrosas, distorsión y bronquiectasias por tracción. La distribución perilinfatica es muy característica y ayuda mucho en el diferencial.' },
      { modalidad: 'Resonancia cardiaca con contraste', hallazgos: 'Realce tardío de gadolinio de distribución parcheada, con frecuencia en el tabique basal y en la pared lateral, sin seguir un territorio coronario. Es la prueba de elección ante sospecha de afectación cardiaca, y el patrón de realce tiene además valor pronóstico.' },
      { modalidad: 'Tomografía por emision de positrones con fluorodesoxiglucosa', hallazgos: 'Identifica inflamación ACTIVA, ayuda a elegir el sitio de biopsia más rentable, valora la afectación cardiaca (con preparación dietética específica para suprimir la captación miocárdica fisiológica) y permite seguir la respuesta al tratamiento en casos seleccionados.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La sarcoidosis se clasifica por <strong>extensión radiológica torácica</strong> con los estadios de Scadding, que informan del pronóstico pero no de la gravedad; por <strong>órganos afectados</strong>, que es lo que determina la indicación de tratar; y por <strong>curso evolutivo</strong> en formas agudas de buen pronóstico (síndrome de Lofgren) y formas crónicas o progresivas. Ninguna de las tres clasificaciones basta por si sola: la decisión clínica sale de cruzar el estadio con la afectación de órganos y con la función.`,
    escalas: [
      { nombre: 'Estadios radiológicos de Scadding (calculadora disponible)', componentes: 'Presencia de adenopatías hiliares e infiltrado parenquimatoso en la radiografía de tórax.', formula: 'Estadio 0: normal. I: adenopatías hiliares bilaterales. II: adenopatías más infiltrado. III: infiltrado sin adenopatías. IV: fibrosis.', interpretacion: 'La probabilidad de remisión espontánea cae a medida que sube el estadio, y en el IV el daño es irreversible. Pero NO es una escala de gravedad ni de actividad, los estadios no son fases obligatorias, y por si solos no indican si hay que tratar.' },
      { nombre: 'Indicación de tratamiento (calculadora disponible)', componentes: 'Síntomas y su repercusión, función pulmonar y su evolución, y afectación de órganos de riesgo.', formula: 'Se trata si hay afectación cardiaca, neurológica, ocular con amenaza visual, renal o hipercalcemia significativa; o si hay síntomas limitantes o deterioro funcional documentado.', interpretacion: 'Al paciente asintomático con función conservada y sin órgano de riesgo se le OBSERVA: la remisión espontánea es frecuente y el corticoide tiene una toxicidad que no compensa cuando no hay nada que ganar.' },
      { nombre: 'Patrón de la hipercalcemia (calculadora disponible)', componentes: 'Calcio corregido por albúmina, parathormona, 25-hidroxivitamina D y 1,25-dihidroxivitamina D, y calcio en orina de 24 horas.', formula: 'Hipercalcemia con parathormona SUPRIMIDA y 1,25-dihidroxivitamina D elevada, por producción extrarrenal no regulada en los macrófagos del granuloma.', interpretacion: 'Distingue el mecanismo del hiperparatiroidismo primario (parathormona alta) y de la hipercalcemia tumoral. Implica no suplementar vitamina D, evitar la exposición solar intensa y tratar con corticoides, que cortan la producción en el granuloma.' },
      { nombre: 'Sospecha de sarcoidosis cardiaca (calculadora disponible)', componentes: 'Síntomas cardiacos, hallazgos del electrocardiograma, del Holter y del ecocardiograma.', formula: 'Cualquier dato de alarma (síncope, palpitaciones sostenidas, bloqueo auriculoventricular, arritmia ventricular o alteración segmentaria sin explicación) obliga a pasar a resonancia cardiaca o a tomografía por emision de positrones.', interpretacion: 'La afectación cardiaca es una de las principales causas de muerte en la sarcoidosis y suele ser silente hasta el primer evento. Un electrocardiograma normal reduce la probabilidad pero no la descarta si hay síntomas.' },
      { nombre: 'Criterios de síndrome de Lofgren', componentes: 'Eritema nodoso, adenopatías hiliares bilaterales y artritis o periartritis de tobillos, con o sin fiebre.', formula: 'La triada completa tiene una especificidad tan alta que permite diagnosticar sin biopsia.', interpretacion: 'Es la forma de MEJOR pronóstico: la mayoría remite de forma espontánea en meses. El tratamiento suele limitarse a antiinflamatorios no esteroideos y reposo, y solo se usan corticoides si los síntomas son muy limitantes.' },
      { nombre: 'Deterioro funcional significativo', componentes: 'Capacidad vital forzada y DLCO seriadas, comparadas con el basal del paciente.', formula: 'Descenso de la capacidad vital forzada del 10% o más, o de la DLCO del 15% o más, respecto al valor previo.', interpretacion: 'Es uno de los criterios que activan el tratamiento en la zona intermedia. Exige tener un basal, y por eso la función pulmonar completa forma parte del cribado inicial de todos los pacientes.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Sarcoidosis: sospecha, diagnóstico y estadios',
      color: '#8a4a7a',
      definicion: 'Enfermedad inflamatoria sistémica de causa desconocida caracterizada por granulomas no caseificantes, con afectación torácica en la gran mayoría de los casos.',
      fisiopatologia: 'Se acepta que un antígeno todavía no identificado, en un huésped genéticamente predispuesto, desencadena una respuesta inmunitaria mediada por linfocitos T colaboradores de tipo 1. Esos linfocitos, junto con macrófagos activados, forman granulomas que se distribuyen a lo largo de los LINFÁTICOS, lo que explica el patrón perilinfatico de la tomografía y las adenopatías hiliares. Los granulomas pueden resolverse por completo, que es lo que ocurre en la mayoría, o evolucionar a fibrosis. Los macrófagos activados expresan además 1-alfa-hidroxilasa y producen 1,25-dihidroxivitamina D de forma no regulada, lo que explica las alteraciones del calcio.',
      epidemiologia: 'Afecta sobre todo a adultos jóvenes y de mediana edad, con un segundo pico en mujeres de más edad. La incidencia y la gravedad varian mucho entre poblaciones: en algunos grupos la enfermedad es más frecuente, más grave y más crónica. Una parte importante de los casos se descubre por casualidad en una radiografía.',
      factores_riesgo: ['Predisposición genética y agregación familiar', 'Determinados alelos del sistema mayor de histocompatibilidad', 'Exposiciones ocupacionales a polvos inorganicos y sílice', 'Exposición al polvo del derrumbe de edificios en trabajadores de rescate', 'Edad entre la tercera y la quinta década', 'Sexo femenino para el segundo pico de incidencia', 'Determinados orígenes geográficos y etnicos', 'Tratamiento con interferón', 'Inmunoterapia antitumoral, que puede producir reacción sarcoidea', 'Ausencia de tabaquismo, que de forma llamativa se asocia a menor riesgo'],
      clinica: 'Asintomática en una proporción importante. Cuando hay síntomas: tos seca, disnea de esfuerzo, molestia torácica, y un síndrome general con FATIGA, febrícula y pérdida de peso. La fatiga es de los síntomas que más limitan y de los que peor se correlacionan con lo medible.',
      criterios_dx: 'Las tres patas: cuadro clínico y radiológico compatible, granulomas NO caseificantes y EXCLUSIÓN de otras causas. En el síndrome de Lofgren completo y en el de Heerfordt la biopsia no es necesaria. Ver las Figuras 1 y 2 de Definición.',
      laboratorio: 'Calcio sérico y urinario, creatinina y sedimento, perfil hepático, hemograma (linfopenia característica). La enzima convertidora de angiotensina NO es una prueba diagnóstica y su uso rutinario induce a error.',
      imagen: 'Radiografía de tórax para el estadio. Tomografía de alta resolución con micronodulos de distribución PERILINFATICA de predominio en campos medios y superiores. Tomografía por emision de positrones para elegir el sitio de biopsia más rentable o valorar actividad.',
      complementarios: 'ECOBRONCOSCOPIA CON PUNCIÓN de las adenopatías mediastínicas, que tiene mayor rendimiento que la biopsia transbronquial y es hoy la técnica de elección. Si hay lesión cutánea accesible, biopsiarla primero: es más sencilla y evita una broncoscopia. La muestra debe ir SIEMPRE también a cultivo de micobacterias y hongos.',
      dx_diferencial: 'Tuberculosis y micobacteriosis, micosis, beriliosis crónica (indistinguible histológicamente, se separa por la anamnesis laboral y una prueba de proliferación linfocitaria), linfoma, neumonitis por hipersensibilidad, granulomatosis con poliangeítis, inmunodeficiencia común variable, reacción sarcoidea a un tumor y granulomatosis por fármacos o por inmunoterapia.',
      tx_medico: 'Información sobre el curso, que en la mayoría es favorable, y sobre la posibilidad de remisión espontánea. Manejo de la FATIGA, que a menudo no responde a los corticoides y mejora más con ejercicio y rehabilitación que con escalar el tratamiento. Vacunación según la inmunosupresión prevista.',
      tx_farmacologico: 'Se detalla en la ficha de tratamiento. La regla es que el diagnóstico no obliga a tratar.',
      tx_intervencionista: 'Broncoscopia diagnóstica con punción ganglionar. Mediastinoscopia en los casos no concluyentes.',
      criterios_uci: 'Poco frecuente al diagnóstico. Arritmias graves por afectación cardiaca, insuficiencia respiratoria en la enfermedad fibrótica avanzada e hipercalcemia grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante pulmonar en la enfermedad fibrótica terminal, y cardiaco en la afectación cardiaca con insuficiencia refractaria.',
      seguimiento_hospitalario: 'Completar el cribado de órganos antes del alta: electrocardiograma, exploración oftalmológica, calcio sérico y urinario, función renal y función pulmonar. Es la ventana en que mejor se hace y la que más a menudo se pierde.',
      seguimiento_ambulatorio: 'Control clínico y funcional periódico durante al menos 3 años en el paciente no tratado, porque la mayoría de las recaídas ocurren en ese periodo. Espaciar después si hay remisión mantenida.',
      pronostico: 'La mayoría remite de forma espontánea o con tratamiento. Una minoría evoluciona a enfermedad crónica o fibrótica. La mortalidad se concentra en la afectación cardiaca, en la fibrosis avanzada con hipertensión pulmonar y en la neurosarcoidosis.',
      algoritmo: ['Sospecharla ante adenopatías hiliares bilaterales y simétricas', 'Buscar afectación de otros órganos en la anamnesis y la exploración', 'Preguntar de entrada por exposición al BERILIO y a polvos inorganicos', 'Elegir el sitio de biopsia más accesible: piel antes que bronquio', 'Enviar la muestra también a CULTIVO de micobacterias y hongos', 'Confirmar granulomas NO caseificantes y excluir otras causas', 'No usar la enzima convertidora de angiotensina para diagnosticar', 'Asignar el estadio radiológico por su valor pronóstico', 'Hacer el cribado de órganos a TODOS: electrocardiograma, ojos, calcio y función pulmonar', 'Decidir tratamiento por síntomas, función y órgano de riesgo, no por el estadio']
    },
    {
      nombre: 'Afectación pulmonar y decisión de tratar',
      color: '#3f6b52',
      definicion: 'Compromiso del parénquima pulmonar y de la via aérea por la enfermedad granulomatosa, y decisión terapéutica que se toma a partir de síntomas, función y órganos de riesgo.',
      fisiopatologia: 'Los granulomas se disponen a lo largo de los linfáticos peribroncovasculares, subpleurales y septales. La inflamación granulomatosa puede resolverse sin secuela o evolucionar a fibrosis, con bronquiectasias por tracción y distorsión arquitectural de predominio en campos superiores. La afectación endobronquial explica que algunos pacientes tengan un patrón obstructivo en lugar del restrictivo esperable, y que la tos sea a veces el síntoma dominante. En la enfermedad fibrótica avanzada puede añadirse hipertensión pulmonar, que empeora mucho el pronóstico.',
      epidemiologia: 'El pulmón esta afectado en la gran mayoría de los casos. Una proporción importante de los pacientes nunca necesita tratamiento porque remite de forma espontánea, y ese dato es la razón de fondo por la que no se trata a todo el que se diagnostica.',
      factores_riesgo: ['Estadio radiológico III o IV al diagnóstico', 'Ausencia de síndrome de Lofgren', 'Lupus pernio', 'Afectación de múltiples órganos', 'Enfermedad sintomática al diagnóstico', 'Descenso progresivo de la capacidad vital forzada o de la DLCO', 'Hipertensión pulmonar asociada', 'Determinados orígenes etnicos con formas más crónicas', 'Necesidad de corticoides desde el inicio', 'Retraso diagnóstico'],
      clinica: 'Tos seca persistente, disnea de esfuerzo progresiva y molestia torácica. La exploración suele ser sorprendentemente normal, incluso con afectación radiológica extensa, y las crepitantes son mucho menos frecuentes que en otras enfermedades intersticiales, lo que confunde y retrasa la sospecha.',
      criterios_dx: 'No aplica como entidad separada. Lo relevante aquí es la decisión de TRATAR, que combina síntomas, función pulmonar y afectación de órganos de riesgo, y que NO se toma por el estadio radiológico. Ver la Figura 4 de Definición.',
      laboratorio: 'Basal antes de iniciar inmunosupresión: hemograma, función hepática y renal. Cribado de tuberculosis latente antes de un antagonista del factor de necrosis tumoral. Control de glucemia con corticoides.',
      imagen: 'Tomografía de alta resolución basal. La radiografía responde tarde y mal al tratamiento y NO debe usarse como medida principal de respuesta: para eso esta la función pulmonar.',
      complementarios: 'FUNCIÓN PULMONAR COMPLETA con DLCO al diagnóstico y de forma seriada, que es el parámetro que mejor sigue la enfermedad. Prueba de la marcha de 6 minutos. Ecocardiograma si se sospecha hipertensión pulmonar asociada.',
      dx_diferencial: 'Otras enfermedades intersticiales, sobre todo la neumonitis por hipersensibilidad crónica y la silicosis, que comparten distribución en campos superiores. Linfangitis carcinomatosa y linfoma en el patrón perilinfatico.',
      tx_medico: 'Rehabilitación respiratoria, que mejora la disnea y la fatiga. Deshabituacion tabaquica. Tratamiento de la tos, que puede ser muy limitante. Oxigenoterapia si hay insuficiencia respiratoria.',
      tx_farmacologico: 'CORTICOIDES orales como primera línea, con descenso progresivo y duración de meses, junto con profilaxis de osteoporosis y vigilancia metabólica. METOTREXATO como ahorrador de corticoide de segunda línea, con azatioprina y micofenolato como alternativas. ANTAGONISTAS DEL FACTOR DE NECROSIS TUMORAL, sobre todo infliximab, en la enfermedad refractaria, previo cribado de tuberculosis latente.',
      tx_intervencionista: 'Trasplante pulmonar en la enfermedad fibrótica terminal. Broncoscopia intervencionista si hay estenosis endobronquial sintomática.',
      criterios_uci: 'Insuficiencia respiratoria aguda sobre enfermedad fibrótica, con mal pronóstico. Infección oportunista en el paciente inmunosuprimido.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Enfermedad fibrótica avanzada con insuficiencia respiratoria, deterioro funcional progresivo o hipertensión pulmonar significativa. La remisión precoz a la unidad de trasplante es determinante.',
      seguimiento_hospitalario: 'Ante empeoramiento en un paciente tratado, descartar infección antes de asumir progresión de la enfermedad y subir la inmunosupresión.',
      seguimiento_ambulatorio: 'Función pulmonar cada 3 a 6 meses mientras haya actividad, y después más espaciada. Vigilancia de la toxicidad del tratamiento. Intento de retirada del corticoide cuando la enfermedad esta estable.',
      pronostico: 'Bueno en la mayoría. Peor en el estadio IV, en presencia de hipertensión pulmonar y en las formas crónicas que requieren inmunosupresión prolongada.',
      algoritmo: ['Obtener función pulmonar completa con DLCO como BASAL', 'Valorar si hay síntomas que limiten la vida del paciente', 'Comprobar si hay deterioro funcional documentado frente al basal', 'Comprobar si hay afectación de órgano de riesgo', 'Si no hay nada de eso, OBSERVAR y reevaluar', 'Si hay indicación, iniciar corticoides con pauta descendente', 'Añadir profilaxis de osteoporosis y vigilancia metabólica', 'Añadir metotrexato si no se puede bajar el corticoide', 'Escalar a antagonista del factor de necrosis tumoral en la refractaria', 'Seguir la respuesta con FUNCIÓN PULMONAR, no con la radiografía']
    },
    {
      nombre: 'Sarcoidosis cardiaca',
      color: '#8c3a34',
      definicion: 'Infiltración granulomatosa del miocardio y del sistema de conducción, que es una de las principales causas de muerte en la sarcoidosis y con frecuencia permanece silente hasta el primer evento.',
      fisiopatologia: 'Los granulomas infiltran el miocardio de forma PARCHEADA, con predilección por el tabique interventricular basal y la pared lateral. Esa distribución explica su clínica: al afectar al tabique daña el sistema de conducción y produce bloqueos, y al dejar cicatrices en medio de miocardio sano crea el sustrato de reentrada de las taquicardias ventriculares. La infiltración extensa produce además disfunción ventricular. La naturaleza parcheada es también la razón de que la biopsia endomiocárdica tenga un rendimiento bajo: puede pasar entre las lesiones.',
      epidemiologia: 'La afectación clínica es menos frecuente que la que se encuentra en las series de autopsia o con imagen avanzada, lo que significa que hay mucha enfermedad silente. Puede ser la primera y única manifestación de la sarcoidosis, de modo que hay que pensar en ella ante un bloqueo o una arritmia sin explicación en un adulto joven.',
      factores_riesgo: ['Sarcoidosis sistémica conocida', 'Edad joven con bloqueo auriculoventricular sin explicación', 'Taquicardia ventricular sin cardiopatía conocida', 'Miocardiopatía dilatada sin causa identificada', 'Origen etnico con mayor prevalencia de formas graves', 'Afectación multiorgánica', 'Sexo masculino en algunas series', 'Retraso en el cribado cardiaco al diagnóstico', 'Ausencia de electrocardiograma inicial', 'Síncope atribuido a causa vasovagal sin estudio'],
      clinica: 'SÍNCOPE, palpitaciones, presíncope, disnea e insuficiencia cardiaca. Puede debutar como muerte súbita, que es lo que hace que el cribado sistemático con electrocardiograma sea tan importante. Un síncope en un paciente con sarcoidosis nunca debe atribuirse a causa vasovagal sin estudio cardiaco.',
      criterios_dx: 'Confirmación histológica en el miocardio, o sarcoidosis extracardiaca demostrada JUNTO CON criterios clínicos y de imagen compatibles, que es la via habitual porque la biopsia endomiocárdica rinde poco. Ver la Figura 3 de Definición.',
      laboratorio: 'Péptido natriurético y troponina, que apoyan pero cuya normalidad no descarta. Electrolitos y función renal en el manejo de la insuficiencia cardiaca.',
      imagen: 'RESONANCIA CARDIACA con realce tardío de gadolinio en distribución parcheada que no sigue territorio coronario, típicamente en tabique basal y pared lateral. TOMOGRAFÍA POR EMISION DE POSITRONES con preparación dietética específica para suprimir la captación miocárdica fisiológica, que valora la inflamación ACTIVA y la respuesta al tratamiento. Ecocardiograma como primera aproximación, aunque puede ser normal.',
      complementarios: 'Electrocardiograma a todos al diagnóstico. HOLTER si hay síntomas o alteraciones electrocardiográficas. Estudio electrofisiológico en casos seleccionados. Biopsia endomiocárdica solo si se necesita confirmación histológica y no hay otro órgano accesible, sabiendo que su rendimiento es bajo.',
      dx_diferencial: 'Miocarditis de otras causas, miocardiopatía arritmogénica del ventrículo derecho (que comparte arritmias ventriculares y realce), enfermedad de Chagas, amiloidosis, miocardiopatía dilatada idiopática y cardiopatía isquémica.',
      tx_medico: 'Tratamiento de la insuficiencia cardiaca según las guías. Evitar fármacos que empeoren la conducción si hay bloqueo. Coordinación estrecha con cardiología y con la unidad de arritmias desde el primer momento.',
      tx_farmacologico: 'CORTICOIDES, que son el tratamiento de la inflamación activa y pueden mejorar la conducción y la función ventricular si se inician antes de que se establezca la fibrosis. Metotrexato como ahorrador. Antiarrítmicos según el caso. Es una indicación clara de tratar, sin esperar a ver la evolución.',
      tx_intervencionista: 'MARCAPASOS ante bloqueo avanzado. DESFIBRILADOR IMPLANTABLE con indicación más amplia que en otras miocardiopatías, porque el riesgo de arritmia ventricular es alto incluso con función sistólica conservada. Ablación de taquicardia ventricular. Trasplante cardiaco en la insuficiencia refractaria.',
      criterios_uci: 'Bloqueo auriculoventricular completo, taquicardia ventricular sostenida, tormenta arrítmica e insuficiencia cardiaca aguda.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante cardiaco en la insuficiencia cardiaca refractaria o en la tormenta arrítmica no controlable, con buenos resultados en series seleccionadas.',
      seguimiento_hospitalario: 'Monitorización electrocardiográfica continua ante bloqueo o arritmia. Decisión conjunta con arritmias sobre dispositivo antes del alta: no dar de alta a un paciente con bloqueo avanzado esperando que el corticoide lo resuelva.',
      seguimiento_ambulatorio: 'Seguimiento conjunto con cardiología. Imagen de control para valorar la respuesta al tratamiento. Vigilancia de arritmias con Holter periódico.',
      pronostico: 'Es el determinante principal de mortalidad en la sarcoidosis junto con la fibrosis avanzada. Mejora con el tratamiento precoz de la inflamación activa y con el uso adecuado de dispositivos, y empeora cuando ya hay fibrosis extensa establecida.',
      algoritmo: ['Hacer electrocardiograma a TODO paciente con sarcoidosis', 'Sospecharla ante bloqueo o arritmia ventricular en un adulto joven', 'No atribuir un síncope a causa vasovagal sin estudio cardiaco', 'Hacer ecocardiograma como primera aproximación', 'Pasar a RESONANCIA CARDIACA con realce tardío', 'Valorar tomografía por emision de positrones para la inflamación activa', 'Iniciar corticoides sin esperar: es indicación clara de tratar', 'Valorar marcapasos si hay bloqueo avanzado', 'Valorar desfibrilador con indicación más amplia de lo habitual', 'Seguimiento conjunto con cardiología y arritmias']
    },
    {
      nombre: 'Neurosarcoidosis y afectación ocular',
      color: '#3d5a73',
      definicion: 'Afectación del sistema nervioso central o periférico y del ojo por la enfermedad granulomatosa, dos localizaciones que comparten una característica: el daño que se establece con frecuencia no se recupera.',
      fisiopatologia: 'En el sistema nervioso, los granulomas afectan sobre todo a las leptomeninges de la base del cráneo, lo que explica la predilección por los pares craneales y por el eje hipotálamo-hipofisario. Pueden además formar masas parenquimatosas, infiltrar la medula o producir neuropatía periférica y de fibra fina. En el ojo, la inflamación granulomatosa de la uvea produce una uveitis que puede ser anterior, intermedia, posterior o panuveitis, y cuyo riesgo principal es el daño estructural irreversible si se retrasa el tratamiento.',
      epidemiologia: 'La afectación neurológica clínica es poco frecuente pero grave, y en una parte importante de los casos es la forma de presentación de la enfermedad. La afectación ocular es bastante más frecuente y puede ser asintomática al inicio, lo que justifica la exploración oftalmológica sistemática al diagnóstico.',
      factores_riesgo: ['Sarcoidosis sistémica conocida', 'Afectación multiorgánica', 'Formas crónicas y lupus pernio', 'Origen etnico con formas más graves', 'Retraso en la exploración oftalmológica inicial', 'Síntomas neurológicos atribuidos a otra causa', 'Diabetes insípida no estudiada', 'Parálisis facial considerada idiopática', 'Uveitis recurrente sin estudio sistémico', 'Retraso en el inicio del tratamiento'],
      clinica: 'NEUROLÓGICA: parálisis de pares craneales, sobre todo la FACIAL, que es la manifestación más frecuente; meningitis linfocitaria crónica; lesiones parenquimatosas con focalidad o crisis; mielopatía; y afectación hipotálamo-hipofisaria con diabetes insípida o hipopituitarismo. OCULAR: ojo rojo, dolor, fotofobia y visión borrosa en la uveitis anterior; moscas volantes y pérdida de visión en la posterior; y sequedad ocular por afectación de la glándula lagrimal.',
      criterios_dx: 'Cuadro compatible con sarcoidosis sistémica demostrada, tras excluir otras causas. La confirmación histológica del sistema nervioso rara vez es posible, de modo que la mayoría de los diagnósticos son probables o posibles según criterios de consenso.',
      laboratorio: 'Líquido cefalorraquídeo con pleocitosis linfocitaria, proteínas elevadas y a veces glucosa baja, un patrón que se solapa con el de la tuberculosis y obliga a descartarla. Estudio hormonal hipofisario si hay sospecha de afectación del eje.',
      imagen: 'RESONANCIA con contraste, que muestra realce leptomeningeo de predominio BASAL, lesiones parenquimatosas, engrosamiento de pares craneales o afectación del tallo hipofisario. Tomografía por emision de positrones para buscar un órgano accesible que permita confirmar la enfermedad sistémica.',
      complementarios: 'EXPLORACIÓN OFTALMOLÓGICA con lámpara de hendidura a todos los pacientes al diagnóstico, con independencia de los síntomas. Electromiograma en la neuropatía periférica. Estudio de fibra fina si hay dolor neuropático sin hallazgos en el electromiograma.',
      dx_diferencial: 'Esclerosis múltiple, tuberculosis meníngea (que comparte el realce basal y el patrón del líquido), linfoma del sistema nervioso central, meningitis crónicas de otras causas, enfermedad relacionada con inmunoglobulina G4, vasculitis y enfermedad de Behcet en la uveitis.',
      tx_medico: 'Es una indicación CLARA de tratar, sin esperar a ver la evolución, porque el daño establecido no se recupera. Coordinación con neurología y con oftalmologia desde el primer momento.',
      tx_farmacologico: 'CORTICOIDES a dosis altas como primera línea, con frecuencia intravenosos al inicio en la afectación grave. METOTREXATO, azatioprina o micofenolato como ahorradores, que aquí se añaden pronto porque el tratamiento va a ser prolongado. INFLIXIMAB en la enfermedad refractaria, con buenos resultados en la neurosarcoidosis. En la uveitis, corticoides tópicos o perioculares además del tratamiento sistémico.',
      tx_intervencionista: 'Derivación ventricular en la hidrocefalia. Cirugía rara vez, salvo para biopsia o para descompresión.',
      criterios_uci: 'Meningitis con deterioro del nivel de conciencia, hidrocefalia aguda, mielopatía con compromiso respiratorio y crisis de difícil control.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Descartar tuberculosis antes de iniciar dosis altas de corticoide o un antagonista del factor de necrosis tumoral, sobre todo cuando el patrón del líquido cefalorraquídeo es compatible con ambas enfermedades.',
      seguimiento_ambulatorio: 'Seguimiento prolongado y conjunto. Las recaídas al bajar el tratamiento son frecuentes, de modo que el descenso debe ser lento y guiado por la clínica y la imagen.',
      pronostico: 'La parálisis facial aislada tiene buen pronóstico y suele recuperarse. Las formas parenquimatosas, la mielopatía y la afectación hipofisaria son más crónicas y dejan secuelas con más frecuencia. En el ojo, el pronóstico depende sobre todo de la precocidad del tratamiento.',
      algoritmo: ['Hacer exploración oftalmológica a TODOS al diagnóstico', 'Sospechar neurosarcoidosis ante parálisis facial o de otros pares', 'Estudiar toda diabetes insípida o hipopituitarismo sin explicación', 'Hacer resonancia con contraste buscando realce BASAL', 'Analizar el líquido cefalorraquídeo y DESCARTAR tuberculosis', 'Buscar un órgano accesible para confirmar la enfermedad sistémica', 'Tratar sin demora: el daño establecido no se recupera', 'Iniciar corticoides a dosis altas, intravenosos si es grave', 'Añadir pronto un ahorrador de corticoide', 'Escalar a infliximab en la enfermedad refractaria']
    },
    {
      nombre: 'Hipercalcemia, hipercalciuria y afectación renal',
      color: '#8a6a1f',
      definicion: 'Alteraciones del metabolismo del calcio producidas por la síntesis no regulada de 1,25-dihidroxivitamina D en los macrófagos del granuloma, y daño renal derivado de ellas o de la propia infiltración granulomatosa.',
      fisiopatologia: 'Los macrófagos activados del granuloma expresan 1-alfa-hidroxilasa y convierten la 25-hidroxivitamina D en 1,25-dihidroxivitamina D, pero a diferencia del riñón lo hacen SIN el control de la parathormona ni del calcio. El resultado es un exceso de vitamina D activa que aumenta la absorción intestinal de calcio y la resorción ósea. El organismo responde suprimiendo la parathormona, y el exceso de calcio se elimina por la orina: por eso la hipercalciuria aparece antes y es más frecuente que la hipercalcemia, y por eso produce litiasis y nefrocalcinosis de forma silente.',
      epidemiologia: 'La hipercalciuria es bastante más frecuente que la hipercalcemia. La afectación renal clínicamente relevante es poco común, pero la nefrocalcinosis y la litiasis de repetición pueden producir insuficiencia renal crónica en pacientes que nunca tuvieron un calcio sérico alto.',
      factores_riesgo: ['Enfermedad activa y extensa', 'Exposición solar intensa', 'Suplementos de vitamina D o de calcio', 'Deshidratacion', 'Inmovilización prolongada', 'Diuréticos tiazídicos, que reducen la excreción de calcio', 'Insuficiencia renal previa', 'Antecedente de litiasis', 'Ingesta elevada de calcio en la dieta', 'Falta de medición del calcio urinario en el cribado inicial'],
      clinica: 'La hipercalciuria es ASINTOMÁTICA hasta que aparece un cólico o se detecta nefrocalcinosis. La hipercalcemia produce poliuria, polidipsia, estreñimiento, náuseas, debilidad, confusión y deterioro de la función renal por deshidratación. Su instauración suele ser lenta, lo que hace que se tolere mejor de lo esperable para la cifra y que pase desapercibida.',
      criterios_dx: 'Hipercalcemia o hipercalciuria con parathormona SUPRIMIDA y 1,25-dihidroxivitamina D elevada. Ese patrón distingue el mecanismo del hiperparatiroidismo primario y de la hipercalcemia tumoral.',
      laboratorio: 'Calcio corregido por albúmina, fósforo, parathormona, 25-hidroxivitamina D, 1,25-dihidroxivitamina D, calcio en orina de 24 horas, creatinina y sedimento urinario.',
      imagen: 'Ecografía renal para buscar litiasis y nefrocalcinosis, que son hallazgos frecuentes y silentes en estos pacientes.',
      complementarios: 'Biopsia renal si hay deterioro de la función sin explicación, que puede mostrar nefritis intersticial granulomatosa. Es una indicación clara de tratamiento sistémico.',
      dx_diferencial: 'Hiperparatiroidismo primario (parathormona ELEVADA), hipercalcemia tumoral por péptido relacionado con la parathormona, mieloma, intoxicación por vitamina D, otras enfermedades granulomatosas que comparten el mismo mecanismo (tuberculosis, linfoma, micosis) e hipercalcemia por inmovilización.',
      tx_medico: 'HIDRATACIÓN abundante. Evitar la exposición solar intensa y RETIRAR los suplementos de vitamina D y de calcio, que en estos pacientes pueden precipitar el cuadro. Dieta baja en calcio en la hipercalciuria. Evitar diuréticos tiazídicos.',
      tx_farmacologico: 'CORTICOIDES, que son el tratamiento de elección porque cortan la producción de 1,25-dihidroxivitamina D en el granuloma y suelen normalizar el calcio en semanas. Hidroxicloroquina o ketoconazol como alternativas ahorradoras en casos seleccionados. Bisfosfonatos en la hipercalcemia grave con componente de resorción ósea, aunque no atacan el mecanismo principal.',
      tx_intervencionista: 'Manejo urológico de la litiasis. Diálisis en la hipercalcemia grave con insuficiencia renal, que es excepcional.',
      criterios_uci: 'Hipercalcemia grave con alteración del nivel de conciencia, arritmias o insuficiencia renal aguda.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante renal en la insuficiencia renal terminal, con riesgo de recidiva de la nefritis granulomatosa en el injerto.',
      seguimiento_hospitalario: 'Hidratación y corticoides como base del tratamiento. Vigilar la función renal y el nivel de conciencia. Revisar y retirar toda la medicación que aporte calcio o vitamina D.',
      seguimiento_ambulatorio: 'Control periódico de calcio sérico Y urinario, función renal y ecografía renal según hallazgos. Advertir al paciente de que no tome suplementos de vitamina D por su cuenta, que es una recomendación frecuente en otros contextos.',
      pronostico: 'Bueno con tratamiento. La afectación renal establecida por nefrocalcinosis o por litiasis de repetición puede dejar insuficiencia renal crónica, y es justamente la que se previene midiendo el calcio urinario en el cribado inicial.',
      algoritmo: ['Medir calcio sérico Y urinario en el cribado inicial de todos', 'Ante hipercalcemia, medir parathormona y vitamina D activa', 'Confirmar el patrón: parathormona SUPRIMIDA y 1,25-dihidroxivitamina D alta', 'Descartar hiperparatiroidismo y causa tumoral', 'Hidratar de forma abundante', 'Retirar suplementos de vitamina D y de calcio', 'Evitar la exposición solar intensa y las tiazidas', 'Iniciar CORTICOIDES, que cortan la producción en el granuloma', 'Hacer ecografía renal buscando litiasis y nefrocalcinosis', 'Vigilar la función renal y repetir el calcio urinario en el seguimiento']
    },
    {
      nombre: 'Formas de buen pronóstico y otras granulomatosis',
      color: '#5a6b2e',
      definicion: 'Presentaciones agudas de curso favorable, sobre todo el síndrome de Lofgren, y el conjunto de enfermedades granulomatosas que hay que descartar antes de diagnosticar una sarcoidosis.',
      fisiopatologia: 'El síndrome de Lofgren corresponde a una respuesta inmunitaria intensa y autolimitada, asociada a determinados alelos del sistema mayor de histocompatibilidad, que en la mayoría de los casos se resuelve por completo. Es un ejemplo de que una respuesta inflamatoria vigorosa puede predecir mejor pronóstico y no peor. Las demás granulomatosis comparten la histología pero no la causa: la beriliosis crónica reproduce el cuadro por sensibilización a un metal, la infección produce granulomas como forma de contener un microorganismo, y el linfoma puede rodearse de granulomas sin que la sarcoidosis exista.',
      epidemiologia: 'El síndrome de Lofgren es una forma de presentación frecuente en algunas poblaciones y es la de mejor pronóstico: la mayoría remite de forma espontánea en meses. El síndrome de Heerfordt es raro pero muy característico.',
      factores_riesgo: ['Determinados alelos del sistema mayor de histocompatibilidad para el síndrome de Lofgren', 'Origen geografico, con mayor frecuencia en poblaciones del norte de Europa', 'Sexo femenino para el eritema nodoso', 'Exposición ocupacional al berilio para la beriliosis crónica', 'Trabajo en aeroespacial, electrónica, odontologia o reciclaje de metales', 'Inmunodeficiencia común variable', 'Tratamiento con interferón o con inmunoterapia antitumoral', 'Antecedente de neoplasia para la reacción sarcoidea', 'Exposición a micobacterias u hongos endémicos', 'Antecedente familiar de sarcoidosis'],
      clinica: 'SÍNDROME DE LOFGREN: eritema nodoso en cara anterior de las piernas, adenopatías hiliares bilaterales y artritis o periartritis de tobillos, con o sin fiebre. SÍNDROME DE HEERFORDT: fiebre, uveitis, aumento parotideo y parálisis facial. Ambos son cuadros agudos, llamativos y de buen pronóstico.',
      criterios_dx: 'En el síndrome de Lofgren completo la especificidad es tan alta que NO hace falta biopsia. En el resto de las situaciones, el diagnóstico de sarcoidosis exige haber excluido activamente las demás granulomatosis. Ver la Figura 1 de Definición.',
      laboratorio: 'El habitual de la sarcoidosis. Ante sospecha de beriliosis, prueba de proliferación linfocitaria frente al berilio, que es lo único que la separa de la sarcoidosis. Estudio de inmunoglobulinas si se sospecha inmunodeficiencia común variable.',
      imagen: 'Radiografía y tomografía torácicas. En la beriliosis crónica los hallazgos son prácticamente indistinguibles de los de la sarcoidosis, de modo que la clave esta en la anamnesis laboral y no en la imagen.',
      complementarios: 'ANAMNESIS OCUPACIONAL detallada en todos: berilio, sílice, polvos metálicos y polvos orgánicos. Cultivo de micobacterias y hongos en toda muestra histológica. Revisión de fármacos, incluida la inmunoterapia antitumoral.',
      dx_diferencial: 'Beriliosis crónica, tuberculosis y micobacteriosis, micosis, granulomatosis con poliangeítis, inmunodeficiencia común variable, reacción sarcoidea a un tumor o a inmunoterapia, enfermedad de Crohn, cirrosis biliar primaria y granulomatosis por talco en el usuario de drogas por via parenteral.',
      tx_medico: 'En el síndrome de Lofgren, reposo relativo, medias de compresión para el eritema nodoso y explicación de que se espera la resolución espontánea, que es la información más útil que se le puede dar al paciente.',
      tx_farmacologico: 'ANTIINFLAMATORIOS NO ESTEROIDEOS como primera opción en el síndrome de Lofgren, y colchicina como alternativa. Corticoides a dosis bajas o moderadas solo si los síntomas son muy limitantes o no responden. Iniciar corticoides prolongados en un cuadro que iba a remitir solo es un sobretratamiento frecuente.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Rara vez requiere ingreso. Si ingresa por fiebre y artritis, evitar tratar el cuadro como una infección o como una vasculitis antes de reconocer el patrón.',
      seguimiento_ambulatorio: 'Control clínico y radiológico hasta la resolución. Si a los 2 años persiste actividad, el cuadro ha dejado de comportarse como un Lofgren típico y hay que reevaluarlo.',
      pronostico: 'Excelente en el síndrome de Lofgren, con remisión espontánea en la mayoría y baja tasa de recidiva. En las demás granulomatosis, el pronóstico es el de la enfermedad de base, y por eso equivocar el diagnóstico tiene consecuencias reales: un linfoma o una tuberculosis tratados como sarcoidosis con corticoides empeoran.',
      algoritmo: ['Reconocer la triada del síndrome de Lofgren y NO biopsiar', 'Explicar al paciente que se espera resolución espontánea', 'Tratar con antiinflamatorios no esteroideos, no con corticoides prolongados', 'En el resto de los casos, hacer anamnesis OCUPACIONAL detallada', 'Preguntar de forma explícita por exposición al BERILIO', 'Enviar toda muestra a cultivo de micobacterias y hongos', 'Revisar fármacos, incluida la inmunoterapia antitumoral', 'Descartar linfoma con reacción sarcoidea', 'Descartar inmunodeficiencia común variable si hay infecciones de repetición', 'Reevaluar el diagnóstico si el curso no encaja con lo esperado']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La sarcoidosis se equivoca en dos direcciones: se trata a quien no lo necesitaba y se deja sin cribar a quien tenia una afectación silente que iba a decidir su pronóstico. Lo que sigue es la lista que evita las dos.',
    parametros: ['Enviar SIEMPRE la muestra histológica también a cultivo de micobacterias y hongos', 'Preguntar de entrada por exposición al BERILIO y a polvos inorganicos', 'No usar la enzima convertidora de angiotensina para diagnosticar ni para seguir', 'Hacer ELECTROCARDIOGRAMA a todos al diagnóstico', 'Hacer EXPLORACIÓN OFTALMOLÓGICA a todos, aunque no refieran síntomas', 'Pedir calcio sérico Y urinario, no solo el sérico', 'Obtener función pulmonar con DLCO como basal para poder comparar después', 'No tratar al paciente asintomático con función conservada y sin órgano de riesgo', 'Tratar sin demora la afectación cardiaca, neurológica, ocular grave y renal', 'No suplementar vitamina D de forma rutinaria en estos pacientes', 'Seguir la respuesta con FUNCIÓN PULMONAR, no con la radiografía', 'Cribar tuberculosis latente antes de un antagonista del factor de necrosis tumoral'],
    criterios_uci_general: 'Bloqueo auriculoventricular completo, taquicardia ventricular sostenida o tormenta arrítmica por afectación cardiaca; insuficiencia respiratoria aguda sobre enfermedad fibrótica; meningitis con deterioro del nivel de conciencia o hidrocefalia aguda; e hipercalcemia grave con alteración del nivel de conciencia o insuficiencia renal.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'Trasplante pulmonar en la enfermedad fibrótica terminal con insuficiencia respiratoria, deterioro progresivo o hipertensión pulmonar; trasplante cardiaco en la afectación cardiaca con insuficiencia refractaria o tormenta arrítmica; y trasplante renal en la insuficiencia renal terminal, con riesgo de recidiva en el injerto.',
    prevencion: 'No hay prevención primaria posible porque la causa se desconoce, con la excepción de las granulomatosis por exposición: el control de la exposición al BERILIO previene una enfermedad clínicamente indistinguible de la sarcoidosis. La prevención secundaria es el cribado de órganos al diagnóstico, que detecta afectación silente en corazón, ojo y riñón antes de que produzca daño irreversible. Y la terciaria consiste en evitar tanto el infratratamiento de los órganos de riesgo como el sobretratamiento del paciente asintomático, y en manejar la toxicidad del corticoide con profilaxis ósea y vigilancia metabólica desde el primer dia.'
  }
};

// Las citas de cada ficha estaban en forma PLANA (un array por ficha). El motor normaliza esa
// forma anclandola SOLO al campo `definicion` (ver openModal en engine/study-view.js), de modo
// que criterios_dx, laboratorio y tx_farmacologico no pintaban ninguna cita aunque las fuentes
// de la ficha si estuvieran declaradas. Convertido a la forma por campo el 2/11/2026: se reparten
// a esos tres campos las fuentes que la ficha ya declaraba, y `definicion` queda igual para que
// lo que ya se veia no cambie. La precision es de FICHA, no de campo: afinar cual de las fuentes
// sostiene cada campo es una pasada posterior (ver .claude/atribucion-citas.md).
export const compCites = {
  'Sarcoidosis: sospecha, diagnóstico y estadios': { definicion: [1, 5, 13, 16], criterios_dx: [1, 5, 13, 16], laboratorio: [1, 5, 13, 16], tx_farmacologico: [1, 5, 13, 16] },
  'Afectación pulmonar y decisión de tratar': { definicion: [2, 7, 8, 15], criterios_dx: [2, 7, 8, 15], laboratorio: [2, 7, 8, 15], tx_farmacologico: [2, 7, 8, 15] },
  'Sarcoidosis cardiaca': { definicion: [3, 12], criterios_dx: [3, 12], laboratorio: [3, 12], tx_farmacologico: [3, 12] },
  'Neurosarcoidosis y afectación ocular': { definicion: [11, 4], criterios_dx: [11, 4], laboratorio: [11, 4], tx_farmacologico: [11, 4] },
  'Hipercalcemia, hipercalciuria y afectación renal': { definicion: [9], criterios_dx: [9], laboratorio: [9], tx_farmacologico: [9] },
  'Formas de buen pronóstico y otras granulomatosis': { definicion: [10, 14, 6], criterios_dx: [10, 14, 6], laboratorio: [10, 14, 6], tx_farmacologico: [10, 14, 6] }
};
export const estigmasTitulo = 'Signos y pistas que orientan hacia una sarcoidosis';
export const estigmas = [
  { s: 'Adenopatías hiliares BILATERALES y simétricas', p: 'El hallazgo más característico', photo: null, desc: 'La bilateralidad y la simetría son lo que la separa del linfoma y de la tuberculosis, que tienden a ser asimétricos. Con frecuencia se descubre por casualidad en una radiografía pedida por otro motivo, en un paciente que se encuentra bien.' },
  { s: 'Eritema nodoso con artritis de tobillos', p: 'Síndrome de Lofgren', photo: null, desc: 'Nódulos subcutáneos dolorosos en la cara anterior de las piernas junto con adenopatías hiliares y periartritis de tobillos. La triada es tan específica que permite diagnosticar sin biopsia, y anuncia la forma de mejor pronóstico.' },
  { s: 'Fiebre uveoparotidea con parálisis facial', p: 'Síndrome de Heerfordt', photo: null, desc: 'Raro pero muy característico: fiebre, uveitis, aumento de las parótidas y parálisis del nervio facial. Como el síndrome de Lofgren, su especificidad hace innecesaria la biopsia cuando esta completo.' },
  { s: 'Micronodulos de distribución perilinfatica', p: 'Patrón típico en la tomografía', photo: null, desc: 'Nodulillos a lo largo de los haces broncovasculares, la pleura y los septos, de predominio en campos medios y superiores. Esa distribución sigue el recorrido de los linfáticos y es uno de los datos que más orientan.' },
  { s: 'Adenopatías calcificadas en cascara de huevo', p: 'Enfermedad de larga evolución', photo: null, desc: 'Calcificación periférica de los ganglios hiliares. Aparece en la sarcoidosis crónica y también en la silicosis, de modo que obliga a repasar la anamnesis ocupacional antes de darla por sarcoidea.' },
  { s: 'Lupus pernio', p: 'Marcador de mal pronóstico', photo: null, desc: 'Placas violáceas induradas en nariz, mejillas y orejas. No es una lesión cutánea más: se asocia a enfermedad crónica, a afectación de la via aérea superior y a peor respuesta al tratamiento, y suele obligar a escalar más allá del corticoide.' },
  { s: 'Linfopenia sin otra explicación', p: 'Muy frecuente y poco valorada', photo: null, desc: 'Refleja el secuestro de linfocitos en los granulomas y no una inmunodeficiencia primaria. Su hallazgo en un paciente con adenopatías hiliares es una pista más, aunque obliga a considerar la inmunodeficiencia común variable en el diferencial.' },
  { s: 'Bloqueo auriculoventricular en un adulto joven', p: 'Sospecha de afectación cardiaca', photo: null, desc: 'Un trastorno de la conducción sin explicación en alguien joven obliga a pensar en sarcoidosis cardiaca y a pasar a resonancia o tomografía por emision de positrones. Puede ser la primera y única manifestación de la enfermedad.' },
  { s: 'Parálisis facial periférica', p: 'La neurosarcoidosis más frecuente', photo: null, desc: 'Es la manifestación neurológica más común y suele recuperarse bien. Una parálisis facial etiquetada de idiopática en un paciente con adenopatías hiliares o uveitis merece una segunda mirada.' },
  { s: 'Uveitis asintomática en la lámpara de hendidura', p: 'Por eso se explora a todos', photo: null, desc: 'La inflamación ocular puede no dar síntomas al principio y amenazar la visión. Su detección cambia la indicación de tratamiento, y ese es el motivo de que la exploración oftalmológica forme parte del cribado inicial de todos los pacientes.' },
  { s: 'Hipercalciuria sin hipercalcemia', p: 'Más frecuente de lo que parece', photo: null, desc: 'Aparece antes que la hipercalcemia y produce litiasis y nefrocalcinosis de forma silente. Pedir solo el calcio sérico deja escapar la mayoría de los casos, y por eso el calcio urinario entra en el cribado inicial.' },
  { s: 'Realce cardiaco parcheado sin territorio coronario', p: 'Sarcoidosis cardiaca', photo: null, desc: 'En la resonancia, realce tardío de gadolinio en el tabique basal y la pared lateral que no respeta el reparto de las arterias coronarias. Ese patrón es lo que distingue la infiltración granulomatosa de una cicatriz isquémica.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Estadios radiológicos de Scadding (calculadora disponible)': [1, 5],
  'Indicación de tratamiento (calculadora disponible)': [2],
  'Patrón de la hipercalcemia (calculadora disponible)': [9],
  'Sospecha de sarcoidosis cardiaca (calculadora disponible)': [3, 12],
  'Criterios de síndrome de Lofgren': [10],
  'Deterioro funcional significativo': [2, 15]
};
export const escalaCalc = {
  'Estadios radiológicos de Scadding (calculadora disponible)': 'estadio-scadding',
  'Indicación de tratamiento (calculadora disponible)': 'tratar-sarcoidosis',
  'Patrón de la hipercalcemia (calculadora disponible)': 'hipercalcemia-sarcoidosis',
  'Sospecha de sarcoidosis cardiaca (calculadora disponible)': 'sospecha-cardiaca'
};
export const compGroups = [
  { name: 'El diagnóstico y el pulmón', items: ['Sarcoidosis: sospecha, diagnóstico y estadios', 'Afectación pulmonar y decisión de tratar'] },
  { name: 'Los órganos de riesgo', items: ['Sarcoidosis cardiaca', 'Neurosarcoidosis y afectación ocular', 'Hipercalcemia, hipercalciuria y afectación renal'] },
  { name: 'Lo que no es sarcoidosis', items: ['Formas de buen pronóstico y otras granulomatosis'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son el nucleo del tema: como se llega al diagnóstico y, sobre todo, a quien se trata, que es la decisión que más se equivoca en las dos direcciones. Las tres siguientes son los órganos que deciden el pronóstico y que hay que buscar de forma activa porque suelen ser silentes: el corazón, el sistema nervioso y el ojo, y el riñón a través del metabolismo del calcio. La última recoge las formas que se resuelven solas y, sobre todo, las enfermedades que producen los mismos granulomas y que hay que haber descartado antes de poner esta etiqueta.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Formas y complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'SARCOIDOSIS', color: '#8a4a7a', target: 'definicion' },
  branches: [
    { title: 'DIAGNOSTICAR', sub: 'Tres patas, ninguna basta sola', color: '#8a4a7a', target: 'complicaciones', leaves: [
      { title: 'Granuloma no caseificante', sub: 'Distribución perilinfatica', color: '#8a4a7a', target: 'diagnostico' },
      { title: 'Excluir infección', sub: 'Cultivo en toda muestra', color: '#5a6b2e', target: 'complicaciones' },
      { title: 'Preguntar por el berilio', sub: 'Cuadro indistinguible', color: '#8c5a2e', target: 'complicaciones' },
      { title: 'La ECA no diagnóstica', sub: 'Ni sirve para seguir', color: '#8c3a34', target: 'diagnostico' }
    ] },
    { title: 'CRIBAR ÓRGANOS', sub: 'A todos, al diagnóstico', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Electrocardiograma', sub: 'El corazón es lo que mata', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Lámpara de hendidura', sub: 'La uveitis puede ser muda', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Calcio en sangre Y orina', sub: 'La hipercalciuria va antes', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Función pulmonar con DLCO', sub: 'El basal para comparar', color: '#3f6b52', target: 'diagnostico' }
    ] },
    { title: 'TRATAR O NO', sub: 'No lo decide el estadio', color: '#3f6b52', target: 'clasificacion', leaves: [
      { title: 'Órgano de riesgo', sub: 'Tratar sin esperar', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Síntomas o deterioro', sub: 'Documentado, no impresión', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Asintomatico', sub: 'Observar: remite con frecuencia', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Corticoide y ahorrador', sub: 'Metotrexato, luego anti-TNF', color: '#8a4a7a', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 9, 16], no_invasivos: [1, 2, 3], imagen: [1, 12] };
export const clasificacionCite = [1, 2, 3, 10];
export const seguimientoCite = [1, 2, 15];
