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
  subtitulo: 'Modulo 58 · Medicina Interna',
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
    <strong style="color:#8a4a7a;">La sarcoidosis es un diagnostico de TRES PATAS, y ninguna basta por si sola.</strong> <span style="color:var(--ink-dim);">Cuadro clinico y radiologico compatible, granulomas NO caseificantes en la biopsia, y EXCLUSION de otras causas de granulomas. No existe una prueba que la confirme.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #8a4a7a;border-radius:8px;padding:6px 8px;background:#8a4a7a08;">
      <div style="font-weight:700;color:#8a4a7a;text-align:center;margin-bottom:4px;">GRANULOMA SARCOIDEO</div>
      <div style="color:var(--ink-dim);line-height:1.6;">No caseificante, bien delimitado, con escaso infiltrado linfocitario alrededor (granuloma "desnudo"). Se distribuye a lo largo de los <strong style="color:var(--ink);">LINFATICOS</strong>: peribroncovascular, subpleural y a lo largo de los septos, lo que explica el patron radiologico caracteristico.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">LO QUE HAY QUE EXCLUIR ANTES</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">Infeccion</strong>: tuberculosis y micobacterias no tuberculosas, hongos (tinciones y CULTIVOS obligados en la muestra).<br><strong style="color:var(--ink);">Exposicion</strong>: BERILIO, que produce un cuadro indistinguible; polvos inorganicos.<br><strong style="color:var(--ink);">Otras</strong>: linfoma con reaccion sarcoidea, granulomatosis con poliangeitis, inmunodeficiencia comun variable, reaccion a farmacos e inmunoterapia.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Cuando NO hace falta biopsia.</strong> En el <strong>sindrome de LOFGREN</strong> completo (eritema nodoso, adenopatias hiliares bilaterales y artritis de tobillos, con o sin fiebre) la especificidad es tan alta que la biopsia no aporta. Lo mismo ocurre en el <strong>sindrome de Heerfordt</strong> (fiebre uveoparotidea con paralisis facial) y ante adenopatias hiliares bilaterales asintomaticas y simetricas en un paciente por lo demas sano.
    </div>
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">La enzima convertidora de angiotensina NO diagnostica.</strong> Tiene sensibilidad y especificidad bajas: sube en otras granulomatosis, en el hipertiroidismo y en la diabetes, y baja con los inhibidores de la enzima convertidora. No sirve para confirmar el diagnostico ni para seguir la actividad de la enfermedad, y pedirla como prueba de cribado genera mas confusion que ayuda.
    </div>
  </div>
</div>`;

const scaddingHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:38px 1fr 96px;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#3f6b52;">0</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Radiografia de torax <strong style="color:var(--ink);">NORMAL</strong>. La enfermedad puede estar en otros organos, de modo que un estadio 0 no significa ausencia de sarcoidosis.</div>
      <div style="display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">sin afectacion</div>
    </div>
    <div style="display:grid;grid-template-columns:38px 1fr 96px;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#3f6b52;">I</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Adenopatias hiliares BILATERALES</strong> y simetricas, con parenquima limpio. Es el hallazgo mas caracteristico y el que mas veces se descubre por casualidad.</div>
      <div style="display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">remision muy frecuente</div>
    </div>
    <div style="display:grid;grid-template-columns:38px 1fr 96px;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8a6a1f;">II</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Adenopatias <strong style="color:var(--ink);">MAS</strong> infiltrado parenquimatoso, tipicamente nodulillos de distribucion perilinfatica en campos medios y superiores.</div>
      <div style="display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">remision frecuente</div>
    </div>
    <div style="display:grid;grid-template-columns:38px 1fr 96px;gap:6px;align-items:stretch;">
      <div style="background:#8c5a2e22;border:1px solid #8c5a2e;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c5a2e;">III</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Infiltrado parenquimatoso <strong style="color:var(--ink);">SIN</strong> adenopatias: las adenopatias ya han regresado y queda la enfermedad del parenquima.</div>
      <div style="display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c5a2e;">remision poco frecuente</div>
    </div>
    <div style="display:grid;grid-template-columns:38px 1fr 96px;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c3a34;">IV</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">FIBROSIS</strong> establecida, con retraccion hiliar, bullas y distorsion de predominio en campos superiores. Es el da&#241;o ya consolidado.</div>
      <div style="display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">irreversible</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Como se usa y como NO se usa esta clasificacion.</strong> Es una escala <strong>RADIOLOGICA y pronostica</strong>, no de gravedad ni de actividad, y los estadios NO son fases obligatorias: la enfermedad puede empezar en cualquiera de ellos y no tiene que recorrerlos en orden. Y sobre todo, el estadio NO indica por si solo si hay que tratar: esa decision depende de los sintomas, de la funcion pulmonar y de la afectacion de organos de riesgo.
  </div>
</div>`;

const cribadoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3d5a73;border-radius:8px;padding:5px 9px;background:#3d5a7312;margin-bottom:6px;">
    <strong style="color:#3d5a73;">La sarcoidosis puede afectar a CUALQUIER organo, y los que matan suelen ser silentes.</strong> <span style="color:var(--ink-dim);">Por eso al diagnostico se hace un cribado sistematico y corto, igual en todos los pacientes, independientemente de lo bien que se encuentren.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1px solid #8c3a34;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#8c3a34;">ELECTROCARDIOGRAMA.</strong> A todos. Un bloqueo auriculoventricular en un adulto joven, una arritmia ventricular o cualquier alteracion de la conduccion obligan a estudiar el corazon con imagen avanzada. La afectacion cardiaca es una de las principales causas de muerte y con frecuencia es la primera manifestacion.</div>
    <div style="border:1px solid #3d5a73;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#3d5a73;">EXPLORACION OFTALMOLOGICA.</strong> A todos, con lampara de hendidura, aunque el paciente no refiera nada. La uveitis puede ser asintomatica al principio y amenazar la vision, y su deteccion cambia por completo la indicacion de tratamiento.</div>
    <div style="border:1px solid #8a6a1f;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#8a6a1f;">CALCIO en sangre y en ORINA.</strong> La hipercalciuria es MAS frecuente que la hipercalcemia y produce litiasis y nefrocalcinosis de forma silente. Pedir solo el calcio serico deja escapar la mayoria de los casos.</div>
    <div style="border:1px solid #3f6b52;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#3f6b52;">FUNCION PULMONAR con DLCO.</strong> Espirometria, volumenes y DLCO como punto de partida. Es lo que permitira despues saber si la enfermedad progresa, porque la radiografia cambia despacio y mal.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Y ademas.</strong> Creatinina y sedimento urinario, perfil hepatico, hemograma (citopenias por afectacion medular o esplenica) y exploracion cutanea completa. La piel es un organo accesible: una lesion cutanea puede dar el diagnostico con una biopsia sencilla y evitar una broncoscopia.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">El LUPUS PERNIO no es una lesion cutanea mas.</strong> Placas violaceas induradas en nariz, mejillas y orejas: se asocia a enfermedad cronica, a afectacion de la via aerea superior y a peor respuesta al tratamiento. Su presencia cambia el pronostico y suele obligar a escalar mas alla del corticoide.
    </div>
  </div>
</div>`;

const tratarHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">NO TRATAR (observar)</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Paciente <strong style="color:var(--ink);">ASINTOMATICO</strong> con funcion pulmonar conservada y sin afectacion de organo de riesgo, sobre todo en estadios I y II. La remision espontanea es frecuente, y el tratamiento con corticoides tiene una toxicidad que no compensa cuando no hay nada que ganar. Se vigila con funcion pulmonar y clinica.</div>
    </div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">TRATAR SIEMPRE (organo de riesgo)</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">CORAZON</strong> (bloqueo, arritmia, disfuncion), <strong style="color:var(--ink);">SISTEMA NERVIOSO</strong>, <strong style="color:var(--ink);">OJO</strong> con amenaza visual, <strong style="color:var(--ink);">HIPERCALCEMIA</strong> significativa y afectacion renal. Aqui no se espera a ver si remite sola, porque el da&#241;o que se establece no se recupera.</div>
    </div>
  </div>
  <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 9px;background:#8a6a1f10;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Y la zona intermedia, que es donde esta la mayoria.</strong> Se trata al paciente con <strong>sintomas que limitan su vida</strong> (disnea, tos, fatiga incapacitante) o con <strong>deterioro funcional documentado</strong> en pruebas seriadas. La clave es tener un basal y comparar: sin funcion pulmonar previa no se puede saber si esto progresa, y la radiografia responde tarde y mal.
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:86px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a4a7a22;border:1px solid #8a4a7a;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a4a7a;">1.a linea</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">CORTICOIDES</strong> orales, con descenso progresivo y tratamiento prolongado de meses. Profilaxis de osteoporosis y vigilancia de glucemia, presion y peso desde el primer dia.</div>
    </div>
    <div style="display:grid;grid-template-columns:86px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">2.a linea</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">METOTREXATO</strong> como ahorrador de corticoide, que es el mas usado; azatioprina y micofenolato como alternativas. Se a&#241;aden cuando no se puede bajar el corticoide o su toxicidad es inaceptable.</div>
    </div>
    <div style="display:grid;grid-template-columns:86px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">3.a linea</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">ANTAGONISTAS DEL FACTOR DE NECROSIS TUMORAL</strong>, sobre todo infliximab, en la enfermedad refractaria y en formas graves como el lupus pernio o la neurosarcoidosis. Antes de iniciarlos, cribado obligatorio de tuberculosis latente.</div>
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La sarcoidosis es una enfermedad inflamatoria sistemica de causa desconocida, caracterizada por la formacion de <strong>granulomas no caseificantes</strong> en los organos afectados. Puede afectar a cualquiera de ellos, pero en la practica el torax esta implicado en la gran mayoria de los casos. Tiene dos rasgos que la hacen dificil: no existe una prueba que la confirme, de modo que el diagnostico es de exclusion razonada, y su curso es tan variable que va desde la remision espontanea completa hasta la fibrosis o la muerte subita.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: un diagnostico de tres patas.</strong></p>
<p style="margin:0 0 12px;">Hacen falta un <strong>cuadro clinico y radiologico compatible</strong>, <strong>granulomas no caseificantes</strong> en la biopsia y, sobre todo, la <strong>exclusion de otras causas</strong> de granuloma: infeccion (tuberculosis y hongos, que obligan a mandar la muestra tambien a cultivo), exposicion al berilio, linfoma, vasculitis y farmacos. La enzima convertidora de angiotensina no forma parte de esto: no confirma, no descarta y no sirve para seguir la enfermedad. Y hay situaciones en las que la clinica es tan caracteristica que la biopsia no aporta nada.</p>
${figBlock('Figura 1', 'Las tres patas del diagnostico y lo que hay que excluir', granulomaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: los estadios radiologicos, y para que sirven.</strong></p>
<p style="margin:0 0 12px;">La clasificacion radiologica clasica ordena la afectacion toracica en cinco estadios y aporta informacion <strong>pronostica</strong>: cuanto mas bajo, mas probable es la remision espontanea. Pero conviene tener claras sus dos limitaciones, porque son fuente constante de errores: los estadios <strong>no son fases obligatorias</strong> que la enfermedad recorra en orden, y el estadio <strong>no indica por si solo si hay que tratar</strong>.</p>
${figBlock('Figura 2', 'Estadios radiologicos y probabilidad de remision espontanea', scaddingHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: el cribado de organos que se hace a todos.</strong></p>
<p style="margin:0 0 12px;">Como la enfermedad puede afectar a cualquier organo y los que mas comprometen el pronostico suelen ser silentes, al diagnostico se hace un cribado corto e igual para todos: <strong>electrocardiograma</strong>, <strong>exploracion oftalmologica</strong> con lampara de hendidura, <strong>calcio en sangre y en orina</strong> y <strong>funcion pulmonar con DLCO</strong>, mas analitica basica y exploracion cutanea. No depende de lo bien que se encuentre el paciente.</p>
${figBlock('Figura 3', 'Lo que se pide al diagnostico en todos los pacientes', cribadoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: a quien se trata.</strong></p>
<p style="margin:0 0 12px;">Es la decision central del tema y no depende del estadio radiologico sino de tres cosas: si hay <strong>sintomas que limiten la vida del paciente</strong>, si hay <strong>deterioro funcional documentado</strong>, y si hay afectacion de un <strong>organo de riesgo</strong> (corazon, sistema nervioso, ojo con amenaza visual, ri&#241;on o hipercalcemia). Al paciente asintomatico con funcion conservada se le observa, porque la remision espontanea es frecuente y el corticoide no es inocuo.</p>
${figBlock('Figura 4', 'Observar, tratar siempre, y los escalones terapeuticos', tratarHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No usar la enzima convertidora de angiotensina para diagnosticar ni para seguir la enfermedad. No diagnosticar sarcoidosis sin haber mandado la muestra a cultivo de micobacterias y hongos. No preguntar por exposicion al berilio solo cuando el caso no encaja, sino de entrada. No tratar a un paciente asintomatico con funcion conservada solo porque la radiografia impresione. No dejar de hacer electrocardiograma y exploracion oftalmologica a todos. No pedir solo calcio serico y olvidar el urinario. No suplementar vitamina D de forma rutinaria en estos pacientes. No usar la radiografia como medida de respuesta al tratamiento cuando lo que hay que seguir es la funcion pulmonar. Y no iniciar un antagonista del factor de necrosis tumoral sin haber cribado antes la tuberculosis latente.</p>`;

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
      tituloA: 'Presentacion toracica y general',
      tituloB: 'Presentaciones que cambian el pronostico',
      compensada: 'Muchos pacientes estan ASINTOMATICOS y se descubren por una radiografia pedida por otro motivo, que muestra adenopatias hiliares bilaterales y simetricas. Cuando hay sintomas, los mas frecuentes son tos seca persistente, disnea de esfuerzo y molestia toracica mal definida, junto con un sindrome general de fatiga, febricula y perdida de peso. La FATIGA es uno de los sintomas que mas limitan la vida de estos pacientes y uno de los que peor se correlacionan con la afectacion medible de organos, lo que hace que con frecuencia se infravalore.',
      descompensada: 'Las presentaciones que obligan a actuar sin demora: sincope, palpitaciones o bloqueo auriculoventricular en un adulto joven, que apuntan a afectacion CARDIACA; deficit neurologico, paralisis de pares craneales o meningitis linfocitaria cronica, que apuntan a NEUROSARCOIDOSIS; dolor ocular, ojo rojo o perdida de vision por uveitis; hipercalcemia sintomatica con deshidratacion y deterioro renal; e insuficiencia respiratoria en la enfermedad fibrotica avanzada, a veces con hipertension pulmonar asociada.'
    },
    laboratorio: [
      { prueba: 'Calcio serico y calcio en orina de 24 horas', utilidad: 'Los macrofagos del granuloma producen 1,25-dihidroxivitamina D de forma no regulada, lo que aumenta la absorcion intestinal de calcio. La HIPERCALCIURIA es bastante mas frecuente que la hipercalcemia y produce litiasis y nefrocalcinosis de forma silente, de modo que pedir solo el calcio serico deja escapar la mayoria de los casos.' },
      { prueba: 'Creatinina y sedimento urinario', utilidad: 'La afectacion renal puede ser por nefrocalcinosis, por litiasis o por nefritis intersticial granulomatosa. Es una de las indicaciones claras de tratamiento y con frecuencia se detecta solo si se busca, porque hasta fases avanzadas no da sintomas.' },
      { prueba: 'Perfil hepatico', utilidad: 'La afectacion hepatica es frecuente en las biopsias pero suele ser asintomatica. Un patron colestasico con fosfatasa alcalina elevada es lo tipico. Solo se trata si es progresiva o sintomatica, de modo que su hallazgo no obliga por si mismo a dar corticoides.' },
      { prueba: 'Hemograma', utilidad: 'Linfopenia (muy caracteristica y a menudo pasada por alto), anemia y trombopenia por afectacion medular o por hiperesplenismo. La linfopenia refleja el secuestro de linfocitos en los granulomas y no una inmunodeficiencia primaria, aunque conviene descartar la inmunodeficiencia comun variable en el diferencial.' },
      { prueba: 'Enzima convertidora de angiotensina', utilidad: 'NO sirve para diagnosticar ni para seguir la enfermedad: sensibilidad y especificidad bajas, sube en otras granulomatosis, en el hipertiroidismo y en la diabetes, y baja con los inhibidores de la enzima convertidora. Su uso como prueba de cribado genera mas confusion que ayuda.' },
      { prueba: '25-hidroxivitamina D y 1,25-dihidroxivitamina D', utilidad: 'El patron caracteristico es 25-hidroxivitamina D baja o normal con 1,25-dihidroxivitamina D ELEVADA y parathormona suprimida. Es importante porque explica por que NO hay que suplementar vitamina D de forma rutinaria en estos pacientes: puede precipitar hipercalcemia.' },
      { prueba: 'Interferon gamma o tuberculina', utilidad: 'Antes de iniciar corticoides a dosis altas y, sobre todo, antes de un antagonista del factor de necrosis tumoral. La anergia cutanea es frecuente en la sarcoidosis activa, de modo que un resultado negativo hay que interpretarlo con cautela.' },
      { prueba: 'Peptido natriuretico y troponina', utilidad: 'Apoyan la sospecha de afectacion cardiaca en el paciente con sintomas o con electrocardiograma alterado. Su normalidad no la descarta, porque la sarcoidosis cardiaca puede ser parcheada y manifestarse solo como trastorno de la conduccion.' }
    ],
    no_invasivos: [
      { metodo: 'Estadio radiologico de Scadding (calculadora disponible)', interpretacion: 'Cinco estadios segun la radiografia de torax. Aporta informacion pronostica sobre la remision espontanea, pero NO es una escala de gravedad ni de actividad, y los estadios no son fases obligatorias.', cutoff: '0 normal; I adenopatias; II adenopatias mas infiltrado; III infiltrado sin adenopatias; IV fibrosis' },
      { metodo: 'Decision de tratar (calculadora disponible)', interpretacion: 'Combina sintomas, funcion pulmonar y afectacion de organos de riesgo. El estadio radiologico por si solo no decide.', cutoff: 'Organo de riesgo afectado, sintomas limitantes o deterioro funcional documentado' },
      { metodo: 'Valoracion de la hipercalcemia (calculadora disponible)', interpretacion: 'Patron caracteristico de hipercalcemia mediada por 1,25-dihidroxivitamina D con parathormona suprimida, distinto del hiperparatiroidismo y de la hipercalcemia tumoral.', cutoff: 'Calcio corregido elevado con parathormona suprimida y 1,25-dihidroxivitamina D alta' },
      { metodo: 'Sospecha de afectacion cardiaca (calculadora disponible)', interpretacion: 'Reune los datos que obligan a pasar a imagen avanzada del corazon. La afectacion cardiaca es una de las principales causas de muerte y con frecuencia es silente hasta el primer evento.', cutoff: 'Sincope, palpitaciones, bloqueo auriculoventricular, arritmia ventricular o alteracion ecocardiografica sin explicacion' },
      { metodo: 'Funcion pulmonar completa con DLCO', interpretacion: 'Patron habitualmente RESTRICTIVO con descenso de la DLCO, aunque puede haber obstruccion por afectacion endobronquial. Es el parametro que mejor sigue la evolucion, muy por delante de la radiografia.', cutoff: 'Descenso de la capacidad vital forzada del 10% o de la DLCO del 15% respecto al basal: deterioro significativo' },
      { metodo: 'Prueba de la marcha de 6 minutos', interpretacion: 'Util para objetivar la limitacion funcional y detectar desaturacion de esfuerzo, sobre todo en la enfermedad fibrotica y ante sospecha de hipertension pulmonar asociada.', cutoff: 'Desaturacion por debajo del 88% durante la prueba: valorar hipertension pulmonar y oxigenoterapia' },
      { metodo: 'Electrocardiograma', interpretacion: 'Se hace a TODOS al diagnostico. Un bloqueo auriculoventricular en un adulto joven, un bloqueo de rama derecha de nueva aparicion o una arritmia ventricular obligan a estudiar el corazon con imagen avanzada.', cutoff: 'Cualquier alteracion de la conduccion o arritmia ventricular sin otra explicacion' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'Adenopatias hiliares BILATERALES y SIMETRICAS, con o sin adenopatias paratraqueales derechas, y con o sin infiltrado parenquimatoso. La bilateralidad y la simetria son lo que la separa del linfoma y de la tuberculosis, que tienden a ser asimetricos. En fases avanzadas, fibrosis con retraccion hiliar de predominio en campos superiores.' },
      { modalidad: 'Tomografia de alta resolucion', hallazgos: 'Micronodulos de distribucion PERILINFATICA (peribroncovascular, subpleural y septal) de predominio en campos medios y superiores, adenopatias que pueden calcificarse en cascara de huevo, y en fases avanzadas bandas fibrosas, distorsion y bronquiectasias por traccion. La distribucion perilinfatica es muy caracteristica y ayuda mucho en el diferencial.' },
      { modalidad: 'Resonancia cardiaca con contraste', hallazgos: 'Realce tardio de gadolinio de distribucion parcheada, con frecuencia en el tabique basal y en la pared lateral, sin seguir un territorio coronario. Es la prueba de eleccion ante sospecha de afectacion cardiaca, y el patron de realce tiene ademas valor pronostico.' },
      { modalidad: 'Tomografia por emision de positrones con fluorodesoxiglucosa', hallazgos: 'Identifica inflamacion ACTIVA, ayuda a elegir el sitio de biopsia mas rentable, valora la afectacion cardiaca (con preparacion dietetica especifica para suprimir la captacion miocardica fisiologica) y permite seguir la respuesta al tratamiento en casos seleccionados.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La sarcoidosis se clasifica por <strong>extension radiologica toracica</strong> con los estadios de Scadding, que informan del pronostico pero no de la gravedad; por <strong>organos afectados</strong>, que es lo que determina la indicacion de tratar; y por <strong>curso evolutivo</strong> en formas agudas de buen pronostico (sindrome de Lofgren) y formas cronicas o progresivas. Ninguna de las tres clasificaciones basta por si sola: la decision clinica sale de cruzar el estadio con la afectacion de organos y con la funcion.`,
    escalas: [
      { nombre: 'Estadios radiologicos de Scadding (calculadora disponible)', componentes: 'Presencia de adenopatias hiliares e infiltrado parenquimatoso en la radiografia de torax.', formula: 'Estadio 0: normal. I: adenopatias hiliares bilaterales. II: adenopatias mas infiltrado. III: infiltrado sin adenopatias. IV: fibrosis.', interpretacion: 'La probabilidad de remision espontanea cae a medida que sube el estadio, y en el IV el da&#241;o es irreversible. Pero NO es una escala de gravedad ni de actividad, los estadios no son fases obligatorias, y por si solos no indican si hay que tratar.' },
      { nombre: 'Indicacion de tratamiento (calculadora disponible)', componentes: 'Sintomas y su repercusion, funcion pulmonar y su evolucion, y afectacion de organos de riesgo.', formula: 'Se trata si hay afectacion cardiaca, neurologica, ocular con amenaza visual, renal o hipercalcemia significativa; o si hay sintomas limitantes o deterioro funcional documentado.', interpretacion: 'Al paciente asintomatico con funcion conservada y sin organo de riesgo se le OBSERVA: la remision espontanea es frecuente y el corticoide tiene una toxicidad que no compensa cuando no hay nada que ganar.' },
      { nombre: 'Patron de la hipercalcemia (calculadora disponible)', componentes: 'Calcio corregido por albumina, parathormona, 25-hidroxivitamina D y 1,25-dihidroxivitamina D, y calcio en orina de 24 horas.', formula: 'Hipercalcemia con parathormona SUPRIMIDA y 1,25-dihidroxivitamina D elevada, por produccion extrarrenal no regulada en los macrofagos del granuloma.', interpretacion: 'Distingue el mecanismo del hiperparatiroidismo primario (parathormona alta) y de la hipercalcemia tumoral. Implica no suplementar vitamina D, evitar la exposicion solar intensa y tratar con corticoides, que cortan la produccion en el granuloma.' },
      { nombre: 'Sospecha de sarcoidosis cardiaca (calculadora disponible)', componentes: 'Sintomas cardiacos, hallazgos del electrocardiograma, del Holter y del ecocardiograma.', formula: 'Cualquier dato de alarma (sincope, palpitaciones sostenidas, bloqueo auriculoventricular, arritmia ventricular o alteracion segmentaria sin explicacion) obliga a pasar a resonancia cardiaca o a tomografia por emision de positrones.', interpretacion: 'La afectacion cardiaca es una de las principales causas de muerte en la sarcoidosis y suele ser silente hasta el primer evento. Un electrocardiograma normal reduce la probabilidad pero no la descarta si hay sintomas.' },
      { nombre: 'Criterios de sindrome de Lofgren', componentes: 'Eritema nodoso, adenopatias hiliares bilaterales y artritis o periartritis de tobillos, con o sin fiebre.', formula: 'La triada completa tiene una especificidad tan alta que permite diagnosticar sin biopsia.', interpretacion: 'Es la forma de MEJOR pronostico: la mayoria remite de forma espontanea en meses. El tratamiento suele limitarse a antiinflamatorios no esteroideos y reposo, y solo se usan corticoides si los sintomas son muy limitantes.' },
      { nombre: 'Deterioro funcional significativo', componentes: 'Capacidad vital forzada y DLCO seriadas, comparadas con el basal del paciente.', formula: 'Descenso de la capacidad vital forzada del 10% o mas, o de la DLCO del 15% o mas, respecto al valor previo.', interpretacion: 'Es uno de los criterios que activan el tratamiento en la zona intermedia. Exige tener un basal, y por eso la funcion pulmonar completa forma parte del cribado inicial de todos los pacientes.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Sarcoidosis: sospecha, diagnostico y estadios',
      color: '#8a4a7a',
      definicion: 'Enfermedad inflamatoria sistemica de causa desconocida caracterizada por granulomas no caseificantes, con afectacion toracica en la gran mayoria de los casos.',
      fisiopatologia: 'Se acepta que un antigeno todavia no identificado, en un huesped geneticamente predispuesto, desencadena una respuesta inmunitaria mediada por linfocitos T colaboradores de tipo 1. Esos linfocitos, junto con macrofagos activados, forman granulomas que se distribuyen a lo largo de los LINFATICOS, lo que explica el patron perilinfatico de la tomografia y las adenopatias hiliares. Los granulomas pueden resolverse por completo, que es lo que ocurre en la mayoria, o evolucionar a fibrosis. Los macrofagos activados expresan ademas 1-alfa-hidroxilasa y producen 1,25-dihidroxivitamina D de forma no regulada, lo que explica las alteraciones del calcio.',
      epidemiologia: 'Afecta sobre todo a adultos jovenes y de mediana edad, con un segundo pico en mujeres de mas edad. La incidencia y la gravedad varian mucho entre poblaciones: en algunos grupos la enfermedad es mas frecuente, mas grave y mas cronica. Una parte importante de los casos se descubre por casualidad en una radiografia.',
      factores_riesgo: ['Predisposicion genetica y agregacion familiar', 'Determinados alelos del sistema mayor de histocompatibilidad', 'Exposiciones ocupacionales a polvos inorganicos y silice', 'Exposicion al polvo del derrumbe de edificios en trabajadores de rescate', 'Edad entre la tercera y la quinta decada', 'Sexo femenino para el segundo pico de incidencia', 'Determinados origenes geograficos y etnicos', 'Tratamiento con interferon', 'Inmunoterapia antitumoral, que puede producir reaccion sarcoidea', 'Ausencia de tabaquismo, que de forma llamativa se asocia a menor riesgo'],
      clinica: 'Asintomatica en una proporcion importante. Cuando hay sintomas: tos seca, disnea de esfuerzo, molestia toracica, y un sindrome general con FATIGA, febricula y perdida de peso. La fatiga es de los sintomas que mas limitan y de los que peor se correlacionan con lo medible.',
      criterios_dx: 'Las tres patas: cuadro clinico y radiologico compatible, granulomas NO caseificantes y EXCLUSION de otras causas. En el sindrome de Lofgren completo y en el de Heerfordt la biopsia no es necesaria. Ver las Figuras 1 y 2 de Definicion.',
      laboratorio: 'Calcio serico y urinario, creatinina y sedimento, perfil hepatico, hemograma (linfopenia caracteristica). La enzima convertidora de angiotensina NO es una prueba diagnostica y su uso rutinario induce a error.',
      imagen: 'Radiografia de torax para el estadio. Tomografia de alta resolucion con micronodulos de distribucion PERILINFATICA de predominio en campos medios y superiores. Tomografia por emision de positrones para elegir el sitio de biopsia mas rentable o valorar actividad.',
      complementarios: 'ECOBRONCOSCOPIA CON PUNCION de las adenopatias mediastinicas, que tiene mayor rendimiento que la biopsia transbronquial y es hoy la tecnica de eleccion. Si hay lesion cutanea accesible, biopsiarla primero: es mas sencilla y evita una broncoscopia. La muestra debe ir SIEMPRE tambien a cultivo de micobacterias y hongos.',
      dx_diferencial: 'Tuberculosis y micobacteriosis, micosis, beriliosis cronica (indistinguible histologicamente, se separa por la anamnesis laboral y una prueba de proliferacion linfocitaria), linfoma, neumonitis por hipersensibilidad, granulomatosis con poliangeitis, inmunodeficiencia comun variable, reaccion sarcoidea a un tumor y granulomatosis por farmacos o por inmunoterapia.',
      tx_medico: 'Informacion sobre el curso, que en la mayoria es favorable, y sobre la posibilidad de remision espontanea. Manejo de la FATIGA, que a menudo no responde a los corticoides y mejora mas con ejercicio y rehabilitacion que con escalar el tratamiento. Vacunacion segun la inmunosupresion prevista.',
      tx_farmacologico: 'Se detalla en la ficha de tratamiento. La regla es que el diagnostico no obliga a tratar.',
      tx_intervencionista: 'Broncoscopia diagnostica con puncion ganglionar. Mediastinoscopia en los casos no concluyentes.',
      criterios_uci: 'Poco frecuente al diagnostico. Arritmias graves por afectacion cardiaca, insuficiencia respiratoria en la enfermedad fibrotica avanzada e hipercalcemia grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante pulmonar en la enfermedad fibrotica terminal, y cardiaco en la afectacion cardiaca con insuficiencia refractaria.',
      seguimiento_hospitalario: 'Completar el cribado de organos antes del alta: electrocardiograma, exploracion oftalmologica, calcio serico y urinario, funcion renal y funcion pulmonar. Es la ventana en que mejor se hace y la que mas a menudo se pierde.',
      seguimiento_ambulatorio: 'Control clinico y funcional periodico durante al menos 3 a&#241;os en el paciente no tratado, porque la mayoria de las recaidas ocurren en ese periodo. Espaciar despues si hay remision mantenida.',
      pronostico: 'La mayoria remite de forma espontanea o con tratamiento. Una minoria evoluciona a enfermedad cronica o fibrotica. La mortalidad se concentra en la afectacion cardiaca, en la fibrosis avanzada con hipertension pulmonar y en la neurosarcoidosis.',
      algoritmo: ['Sospecharla ante adenopatias hiliares bilaterales y simetricas', 'Buscar afectacion de otros organos en la anamnesis y la exploracion', 'Preguntar de entrada por exposicion al BERILIO y a polvos inorganicos', 'Elegir el sitio de biopsia mas accesible: piel antes que bronquio', 'Enviar la muestra tambien a CULTIVO de micobacterias y hongos', 'Confirmar granulomas NO caseificantes y excluir otras causas', 'No usar la enzima convertidora de angiotensina para diagnosticar', 'Asignar el estadio radiologico por su valor pronostico', 'Hacer el cribado de organos a TODOS: electrocardiograma, ojos, calcio y funcion pulmonar', 'Decidir tratamiento por sintomas, funcion y organo de riesgo, no por el estadio']
    },
    {
      nombre: 'Afectacion pulmonar y decision de tratar',
      color: '#3f6b52',
      definicion: 'Compromiso del parenquima pulmonar y de la via aerea por la enfermedad granulomatosa, y decision terapeutica que se toma a partir de sintomas, funcion y organos de riesgo.',
      fisiopatologia: 'Los granulomas se disponen a lo largo de los linfaticos peribroncovasculares, subpleurales y septales. La inflamacion granulomatosa puede resolverse sin secuela o evolucionar a fibrosis, con bronquiectasias por traccion y distorsion arquitectural de predominio en campos superiores. La afectacion endobronquial explica que algunos pacientes tengan un patron obstructivo en lugar del restrictivo esperable, y que la tos sea a veces el sintoma dominante. En la enfermedad fibrotica avanzada puede a&#241;adirse hipertension pulmonar, que empeora mucho el pronostico.',
      epidemiologia: 'El pulmon esta afectado en la gran mayoria de los casos. Una proporcion importante de los pacientes nunca necesita tratamiento porque remite de forma espontanea, y ese dato es la razon de fondo por la que no se trata a todo el que se diagnostica.',
      factores_riesgo: ['Estadio radiologico III o IV al diagnostico', 'Ausencia de sindrome de Lofgren', 'Lupus pernio', 'Afectacion de multiples organos', 'Enfermedad sintomatica al diagnostico', 'Descenso progresivo de la capacidad vital forzada o de la DLCO', 'Hipertension pulmonar asociada', 'Determinados origenes etnicos con formas mas cronicas', 'Necesidad de corticoides desde el inicio', 'Retraso diagnostico'],
      clinica: 'Tos seca persistente, disnea de esfuerzo progresiva y molestia toracica. La exploracion suele ser sorprendentemente normal, incluso con afectacion radiologica extensa, y las crepitantes son mucho menos frecuentes que en otras enfermedades intersticiales, lo que confunde y retrasa la sospecha.',
      criterios_dx: 'No aplica como entidad separada. Lo relevante aqui es la decision de TRATAR, que combina sintomas, funcion pulmonar y afectacion de organos de riesgo, y que NO se toma por el estadio radiologico. Ver la Figura 4 de Definicion.',
      laboratorio: 'Basal antes de iniciar inmunosupresion: hemograma, funcion hepatica y renal. Cribado de tuberculosis latente antes de un antagonista del factor de necrosis tumoral. Control de glucemia con corticoides.',
      imagen: 'Tomografia de alta resolucion basal. La radiografia responde tarde y mal al tratamiento y NO debe usarse como medida principal de respuesta: para eso esta la funcion pulmonar.',
      complementarios: 'FUNCION PULMONAR COMPLETA con DLCO al diagnostico y de forma seriada, que es el parametro que mejor sigue la enfermedad. Prueba de la marcha de 6 minutos. Ecocardiograma si se sospecha hipertension pulmonar asociada.',
      dx_diferencial: 'Otras enfermedades intersticiales, sobre todo la neumonitis por hipersensibilidad cronica y la silicosis, que comparten distribucion en campos superiores. Linfangitis carcinomatosa y linfoma en el patron perilinfatico.',
      tx_medico: 'Rehabilitacion respiratoria, que mejora la disnea y la fatiga. Deshabituacion tabaquica. Tratamiento de la tos, que puede ser muy limitante. Oxigenoterapia si hay insuficiencia respiratoria.',
      tx_farmacologico: 'CORTICOIDES orales como primera linea, con descenso progresivo y duracion de meses, junto con profilaxis de osteoporosis y vigilancia metabolica. METOTREXATO como ahorrador de corticoide de segunda linea, con azatioprina y micofenolato como alternativas. ANTAGONISTAS DEL FACTOR DE NECROSIS TUMORAL, sobre todo infliximab, en la enfermedad refractaria, previo cribado de tuberculosis latente.',
      tx_intervencionista: 'Trasplante pulmonar en la enfermedad fibrotica terminal. Broncoscopia intervencionista si hay estenosis endobronquial sintomatica.',
      criterios_uci: 'Insuficiencia respiratoria aguda sobre enfermedad fibrotica, con mal pronostico. Infeccion oportunista en el paciente inmunosuprimido.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Enfermedad fibrotica avanzada con insuficiencia respiratoria, deterioro funcional progresivo o hipertension pulmonar significativa. La remision precoz a la unidad de trasplante es determinante.',
      seguimiento_hospitalario: 'Ante empeoramiento en un paciente tratado, descartar infeccion antes de asumir progresion de la enfermedad y subir la inmunosupresion.',
      seguimiento_ambulatorio: 'Funcion pulmonar cada 3 a 6 meses mientras haya actividad, y despues mas espaciada. Vigilancia de la toxicidad del tratamiento. Intento de retirada del corticoide cuando la enfermedad esta estable.',
      pronostico: 'Bueno en la mayoria. Peor en el estadio IV, en presencia de hipertension pulmonar y en las formas cronicas que requieren inmunosupresion prolongada.',
      algoritmo: ['Obtener funcion pulmonar completa con DLCO como BASAL', 'Valorar si hay sintomas que limiten la vida del paciente', 'Comprobar si hay deterioro funcional documentado frente al basal', 'Comprobar si hay afectacion de organo de riesgo', 'Si no hay nada de eso, OBSERVAR y reevaluar', 'Si hay indicacion, iniciar corticoides con pauta descendente', 'A&#241;adir profilaxis de osteoporosis y vigilancia metabolica', 'A&#241;adir metotrexato si no se puede bajar el corticoide', 'Escalar a antagonista del factor de necrosis tumoral en la refractaria', 'Seguir la respuesta con FUNCION PULMONAR, no con la radiografia']
    },
    {
      nombre: 'Sarcoidosis cardiaca',
      color: '#8c3a34',
      definicion: 'Infiltracion granulomatosa del miocardio y del sistema de conduccion, que es una de las principales causas de muerte en la sarcoidosis y con frecuencia permanece silente hasta el primer evento.',
      fisiopatologia: 'Los granulomas infiltran el miocardio de forma PARCHEADA, con predileccion por el tabique interventricular basal y la pared lateral. Esa distribucion explica su clinica: al afectar al tabique da&#241;a el sistema de conduccion y produce bloqueos, y al dejar cicatrices en medio de miocardio sano crea el sustrato de reentrada de las taquicardias ventriculares. La infiltracion extensa produce ademas disfuncion ventricular. La naturaleza parcheada es tambien la razon de que la biopsia endomiocardica tenga un rendimiento bajo: puede pasar entre las lesiones.',
      epidemiologia: 'La afectacion clinica es menos frecuente que la que se encuentra en las series de autopsia o con imagen avanzada, lo que significa que hay mucha enfermedad silente. Puede ser la primera y unica manifestacion de la sarcoidosis, de modo que hay que pensar en ella ante un bloqueo o una arritmia sin explicacion en un adulto joven.',
      factores_riesgo: ['Sarcoidosis sistemica conocida', 'Edad joven con bloqueo auriculoventricular sin explicacion', 'Taquicardia ventricular sin cardiopatia conocida', 'Miocardiopatia dilatada sin causa identificada', 'Origen etnico con mayor prevalencia de formas graves', 'Afectacion multiorganica', 'Sexo masculino en algunas series', 'Retraso en el cribado cardiaco al diagnostico', 'Ausencia de electrocardiograma inicial', 'Sincope atribuido a causa vasovagal sin estudio'],
      clinica: 'SINCOPE, palpitaciones, presincope, disnea e insuficiencia cardiaca. Puede debutar como muerte subita, que es lo que hace que el cribado sistematico con electrocardiograma sea tan importante. Un sincope en un paciente con sarcoidosis nunca debe atribuirse a causa vasovagal sin estudio cardiaco.',
      criterios_dx: 'Confirmacion histologica en el miocardio, o sarcoidosis extracardiaca demostrada JUNTO CON criterios clinicos y de imagen compatibles, que es la via habitual porque la biopsia endomiocardica rinde poco. Ver la Figura 3 de Definicion.',
      laboratorio: 'Peptido natriuretico y troponina, que apoyan pero cuya normalidad no descarta. Electrolitos y funcion renal en el manejo de la insuficiencia cardiaca.',
      imagen: 'RESONANCIA CARDIACA con realce tardio de gadolinio en distribucion parcheada que no sigue territorio coronario, tipicamente en tabique basal y pared lateral. TOMOGRAFIA POR EMISION DE POSITRONES con preparacion dietetica especifica para suprimir la captacion miocardica fisiologica, que valora la inflamacion ACTIVA y la respuesta al tratamiento. Ecocardiograma como primera aproximacion, aunque puede ser normal.',
      complementarios: 'Electrocardiograma a todos al diagnostico. HOLTER si hay sintomas o alteraciones electrocardiograficas. Estudio electrofisiologico en casos seleccionados. Biopsia endomiocardica solo si se necesita confirmacion histologica y no hay otro organo accesible, sabiendo que su rendimiento es bajo.',
      dx_diferencial: 'Miocarditis de otras causas, miocardiopatia arritmogenica del ventriculo derecho (que comparte arritmias ventriculares y realce), enfermedad de Chagas, amiloidosis, miocardiopatia dilatada idiopatica y cardiopatia isquemica.',
      tx_medico: 'Tratamiento de la insuficiencia cardiaca segun las guias. Evitar farmacos que empeoren la conduccion si hay bloqueo. Coordinacion estrecha con cardiologia y con la unidad de arritmias desde el primer momento.',
      tx_farmacologico: 'CORTICOIDES, que son el tratamiento de la inflamacion activa y pueden mejorar la conduccion y la funcion ventricular si se inician antes de que se establezca la fibrosis. Metotrexato como ahorrador. Antiarritmicos segun el caso. Es una indicacion clara de tratar, sin esperar a ver la evolucion.',
      tx_intervencionista: 'MARCAPASOS ante bloqueo avanzado. DESFIBRILADOR IMPLANTABLE con indicacion mas amplia que en otras miocardiopatias, porque el riesgo de arritmia ventricular es alto incluso con funcion sistolica conservada. Ablacion de taquicardia ventricular. Trasplante cardiaco en la insuficiencia refractaria.',
      criterios_uci: 'Bloqueo auriculoventricular completo, taquicardia ventricular sostenida, tormenta arritmica e insuficiencia cardiaca aguda.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante cardiaco en la insuficiencia cardiaca refractaria o en la tormenta arritmica no controlable, con buenos resultados en series seleccionadas.',
      seguimiento_hospitalario: 'Monitorizacion electrocardiografica continua ante bloqueo o arritmia. Decision conjunta con arritmias sobre dispositivo antes del alta: no dar de alta a un paciente con bloqueo avanzado esperando que el corticoide lo resuelva.',
      seguimiento_ambulatorio: 'Seguimiento conjunto con cardiologia. Imagen de control para valorar la respuesta al tratamiento. Vigilancia de arritmias con Holter periodico.',
      pronostico: 'Es el determinante principal de mortalidad en la sarcoidosis junto con la fibrosis avanzada. Mejora con el tratamiento precoz de la inflamacion activa y con el uso adecuado de dispositivos, y empeora cuando ya hay fibrosis extensa establecida.',
      algoritmo: ['Hacer electrocardiograma a TODO paciente con sarcoidosis', 'Sospecharla ante bloqueo o arritmia ventricular en un adulto joven', 'No atribuir un sincope a causa vasovagal sin estudio cardiaco', 'Hacer ecocardiograma como primera aproximacion', 'Pasar a RESONANCIA CARDIACA con realce tardio', 'Valorar tomografia por emision de positrones para la inflamacion activa', 'Iniciar corticoides sin esperar: es indicacion clara de tratar', 'Valorar marcapasos si hay bloqueo avanzado', 'Valorar desfibrilador con indicacion mas amplia de lo habitual', 'Seguimiento conjunto con cardiologia y arritmias']
    },
    {
      nombre: 'Neurosarcoidosis y afectacion ocular',
      color: '#3d5a73',
      definicion: 'Afectacion del sistema nervioso central o periferico y del ojo por la enfermedad granulomatosa, dos localizaciones que comparten una caracteristica: el da&#241;o que se establece con frecuencia no se recupera.',
      fisiopatologia: 'En el sistema nervioso, los granulomas afectan sobre todo a las leptomeninges de la base del craneo, lo que explica la predileccion por los pares craneales y por el eje hipotalamo-hipofisario. Pueden ademas formar masas parenquimatosas, infiltrar la medula o producir neuropatia periferica y de fibra fina. En el ojo, la inflamacion granulomatosa de la uvea produce una uveitis que puede ser anterior, intermedia, posterior o panuveitis, y cuyo riesgo principal es el da&#241;o estructural irreversible si se retrasa el tratamiento.',
      epidemiologia: 'La afectacion neurologica clinica es poco frecuente pero grave, y en una parte importante de los casos es la forma de presentacion de la enfermedad. La afectacion ocular es bastante mas frecuente y puede ser asintomatica al inicio, lo que justifica la exploracion oftalmologica sistematica al diagnostico.',
      factores_riesgo: ['Sarcoidosis sistemica conocida', 'Afectacion multiorganica', 'Formas cronicas y lupus pernio', 'Origen etnico con formas mas graves', 'Retraso en la exploracion oftalmologica inicial', 'Sintomas neurologicos atribuidos a otra causa', 'Diabetes insipida no estudiada', 'Paralisis facial considerada idiopatica', 'Uveitis recurrente sin estudio sistemico', 'Retraso en el inicio del tratamiento'],
      clinica: 'NEUROLOGICA: paralisis de pares craneales, sobre todo la FACIAL, que es la manifestacion mas frecuente; meningitis linfocitaria cronica; lesiones parenquimatosas con focalidad o crisis; mielopatia; y afectacion hipotalamo-hipofisaria con diabetes insipida o hipopituitarismo. OCULAR: ojo rojo, dolor, fotofobia y vision borrosa en la uveitis anterior; moscas volantes y perdida de vision en la posterior; y sequedad ocular por afectacion de la glandula lagrimal.',
      criterios_dx: 'Cuadro compatible con sarcoidosis sistemica demostrada, tras excluir otras causas. La confirmacion histologica del sistema nervioso rara vez es posible, de modo que la mayoria de los diagnosticos son probables o posibles segun criterios de consenso.',
      laboratorio: 'Liquido cefalorraquideo con pleocitosis linfocitaria, proteinas elevadas y a veces glucosa baja, un patron que se solapa con el de la tuberculosis y obliga a descartarla. Estudio hormonal hipofisario si hay sospecha de afectacion del eje.',
      imagen: 'RESONANCIA con contraste, que muestra realce leptomeningeo de predominio BASAL, lesiones parenquimatosas, engrosamiento de pares craneales o afectacion del tallo hipofisario. Tomografia por emision de positrones para buscar un organo accesible que permita confirmar la enfermedad sistemica.',
      complementarios: 'EXPLORACION OFTALMOLOGICA con lampara de hendidura a todos los pacientes al diagnostico, con independencia de los sintomas. Electromiograma en la neuropatia periferica. Estudio de fibra fina si hay dolor neuropatico sin hallazgos en el electromiograma.',
      dx_diferencial: 'Esclerosis multiple, tuberculosis meningea (que comparte el realce basal y el patron del liquido), linfoma del sistema nervioso central, meningitis cronicas de otras causas, enfermedad relacionada con inmunoglobulina G4, vasculitis y enfermedad de Behcet en la uveitis.',
      tx_medico: 'Es una indicacion CLARA de tratar, sin esperar a ver la evolucion, porque el da&#241;o establecido no se recupera. Coordinacion con neurologia y con oftalmologia desde el primer momento.',
      tx_farmacologico: 'CORTICOIDES a dosis altas como primera linea, con frecuencia intravenosos al inicio en la afectacion grave. METOTREXATO, azatioprina o micofenolato como ahorradores, que aqui se a&#241;aden pronto porque el tratamiento va a ser prolongado. INFLIXIMAB en la enfermedad refractaria, con buenos resultados en la neurosarcoidosis. En la uveitis, corticoides topicos o perioculares ademas del tratamiento sistemico.',
      tx_intervencionista: 'Derivacion ventricular en la hidrocefalia. Cirugia rara vez, salvo para biopsia o para descompresion.',
      criterios_uci: 'Meningitis con deterioro del nivel de conciencia, hidrocefalia aguda, mielopatia con compromiso respiratorio y crisis de dificil control.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Descartar tuberculosis antes de iniciar dosis altas de corticoide o un antagonista del factor de necrosis tumoral, sobre todo cuando el patron del liquido cefalorraquideo es compatible con ambas enfermedades.',
      seguimiento_ambulatorio: 'Seguimiento prolongado y conjunto. Las recaidas al bajar el tratamiento son frecuentes, de modo que el descenso debe ser lento y guiado por la clinica y la imagen.',
      pronostico: 'La paralisis facial aislada tiene buen pronostico y suele recuperarse. Las formas parenquimatosas, la mielopatia y la afectacion hipofisaria son mas cronicas y dejan secuelas con mas frecuencia. En el ojo, el pronostico depende sobre todo de la precocidad del tratamiento.',
      algoritmo: ['Hacer exploracion oftalmologica a TODOS al diagnostico', 'Sospechar neurosarcoidosis ante paralisis facial o de otros pares', 'Estudiar toda diabetes insipida o hipopituitarismo sin explicacion', 'Hacer resonancia con contraste buscando realce BASAL', 'Analizar el liquido cefalorraquideo y DESCARTAR tuberculosis', 'Buscar un organo accesible para confirmar la enfermedad sistemica', 'Tratar sin demora: el da&#241;o establecido no se recupera', 'Iniciar corticoides a dosis altas, intravenosos si es grave', 'A&#241;adir pronto un ahorrador de corticoide', 'Escalar a infliximab en la enfermedad refractaria']
    },
    {
      nombre: 'Hipercalcemia, hipercalciuria y afectacion renal',
      color: '#8a6a1f',
      definicion: 'Alteraciones del metabolismo del calcio producidas por la sintesis no regulada de 1,25-dihidroxivitamina D en los macrofagos del granuloma, y da&#241;o renal derivado de ellas o de la propia infiltracion granulomatosa.',
      fisiopatologia: 'Los macrofagos activados del granuloma expresan 1-alfa-hidroxilasa y convierten la 25-hidroxivitamina D en 1,25-dihidroxivitamina D, pero a diferencia del ri&#241;on lo hacen SIN el control de la parathormona ni del calcio. El resultado es un exceso de vitamina D activa que aumenta la absorcion intestinal de calcio y la resorcion osea. El organismo responde suprimiendo la parathormona, y el exceso de calcio se elimina por la orina: por eso la hipercalciuria aparece antes y es mas frecuente que la hipercalcemia, y por eso produce litiasis y nefrocalcinosis de forma silente.',
      epidemiologia: 'La hipercalciuria es bastante mas frecuente que la hipercalcemia. La afectacion renal clinicamente relevante es poco comun, pero la nefrocalcinosis y la litiasis de repeticion pueden producir insuficiencia renal cronica en pacientes que nunca tuvieron un calcio serico alto.',
      factores_riesgo: ['Enfermedad activa y extensa', 'Exposicion solar intensa', 'Suplementos de vitamina D o de calcio', 'Deshidratacion', 'Inmovilizacion prolongada', 'Diureticos tiazidicos, que reducen la excrecion de calcio', 'Insuficiencia renal previa', 'Antecedente de litiasis', 'Ingesta elevada de calcio en la dieta', 'Falta de medicion del calcio urinario en el cribado inicial'],
      clinica: 'La hipercalciuria es ASINTOMATICA hasta que aparece un colico o se detecta nefrocalcinosis. La hipercalcemia produce poliuria, polidipsia, estre&#241;imiento, nauseas, debilidad, confusion y deterioro de la funcion renal por deshidratacion. Su instauracion suele ser lenta, lo que hace que se tolere mejor de lo esperable para la cifra y que pase desapercibida.',
      criterios_dx: 'Hipercalcemia o hipercalciuria con parathormona SUPRIMIDA y 1,25-dihidroxivitamina D elevada. Ese patron distingue el mecanismo del hiperparatiroidismo primario y de la hipercalcemia tumoral.',
      laboratorio: 'Calcio corregido por albumina, fosforo, parathormona, 25-hidroxivitamina D, 1,25-dihidroxivitamina D, calcio en orina de 24 horas, creatinina y sedimento urinario.',
      imagen: 'Ecografia renal para buscar litiasis y nefrocalcinosis, que son hallazgos frecuentes y silentes en estos pacientes.',
      complementarios: 'Biopsia renal si hay deterioro de la funcion sin explicacion, que puede mostrar nefritis intersticial granulomatosa. Es una indicacion clara de tratamiento sistemico.',
      dx_diferencial: 'Hiperparatiroidismo primario (parathormona ELEVADA), hipercalcemia tumoral por peptido relacionado con la parathormona, mieloma, intoxicacion por vitamina D, otras enfermedades granulomatosas que comparten el mismo mecanismo (tuberculosis, linfoma, micosis) e hipercalcemia por inmovilizacion.',
      tx_medico: 'HIDRATACION abundante. Evitar la exposicion solar intensa y RETIRAR los suplementos de vitamina D y de calcio, que en estos pacientes pueden precipitar el cuadro. Dieta baja en calcio en la hipercalciuria. Evitar diureticos tiazidicos.',
      tx_farmacologico: 'CORTICOIDES, que son el tratamiento de eleccion porque cortan la produccion de 1,25-dihidroxivitamina D en el granuloma y suelen normalizar el calcio en semanas. Hidroxicloroquina o ketoconazol como alternativas ahorradoras en casos seleccionados. Bisfosfonatos en la hipercalcemia grave con componente de resorcion osea, aunque no atacan el mecanismo principal.',
      tx_intervencionista: 'Manejo urologico de la litiasis. Dialisis en la hipercalcemia grave con insuficiencia renal, que es excepcional.',
      criterios_uci: 'Hipercalcemia grave con alteracion del nivel de conciencia, arritmias o insuficiencia renal aguda.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante renal en la insuficiencia renal terminal, con riesgo de recidiva de la nefritis granulomatosa en el injerto.',
      seguimiento_hospitalario: 'Hidratacion y corticoides como base del tratamiento. Vigilar la funcion renal y el nivel de conciencia. Revisar y retirar toda la medicacion que aporte calcio o vitamina D.',
      seguimiento_ambulatorio: 'Control periodico de calcio serico Y urinario, funcion renal y ecografia renal segun hallazgos. Advertir al paciente de que no tome suplementos de vitamina D por su cuenta, que es una recomendacion frecuente en otros contextos.',
      pronostico: 'Bueno con tratamiento. La afectacion renal establecida por nefrocalcinosis o por litiasis de repeticion puede dejar insuficiencia renal cronica, y es justamente la que se previene midiendo el calcio urinario en el cribado inicial.',
      algoritmo: ['Medir calcio serico Y urinario en el cribado inicial de todos', 'Ante hipercalcemia, medir parathormona y vitamina D activa', 'Confirmar el patron: parathormona SUPRIMIDA y 1,25-dihidroxivitamina D alta', 'Descartar hiperparatiroidismo y causa tumoral', 'Hidratar de forma abundante', 'Retirar suplementos de vitamina D y de calcio', 'Evitar la exposicion solar intensa y las tiazidas', 'Iniciar CORTICOIDES, que cortan la produccion en el granuloma', 'Hacer ecografia renal buscando litiasis y nefrocalcinosis', 'Vigilar la funcion renal y repetir el calcio urinario en el seguimiento']
    },
    {
      nombre: 'Formas de buen pronostico y otras granulomatosis',
      color: '#5a6b2e',
      definicion: 'Presentaciones agudas de curso favorable, sobre todo el sindrome de Lofgren, y el conjunto de enfermedades granulomatosas que hay que descartar antes de diagnosticar una sarcoidosis.',
      fisiopatologia: 'El sindrome de Lofgren corresponde a una respuesta inmunitaria intensa y autolimitada, asociada a determinados alelos del sistema mayor de histocompatibilidad, que en la mayoria de los casos se resuelve por completo. Es un ejemplo de que una respuesta inflamatoria vigorosa puede predecir mejor pronostico y no peor. Las demas granulomatosis comparten la histologia pero no la causa: la beriliosis cronica reproduce el cuadro por sensibilizacion a un metal, la infeccion produce granulomas como forma de contener un microorganismo, y el linfoma puede rodearse de granulomas sin que la sarcoidosis exista.',
      epidemiologia: 'El sindrome de Lofgren es una forma de presentacion frecuente en algunas poblaciones y es la de mejor pronostico: la mayoria remite de forma espontanea en meses. El sindrome de Heerfordt es raro pero muy caracteristico.',
      factores_riesgo: ['Determinados alelos del sistema mayor de histocompatibilidad para el sindrome de Lofgren', 'Origen geografico, con mayor frecuencia en poblaciones del norte de Europa', 'Sexo femenino para el eritema nodoso', 'Exposicion ocupacional al berilio para la beriliosis cronica', 'Trabajo en aeroespacial, electronica, odontologia o reciclaje de metales', 'Inmunodeficiencia comun variable', 'Tratamiento con interferon o con inmunoterapia antitumoral', 'Antecedente de neoplasia para la reaccion sarcoidea', 'Exposicion a micobacterias u hongos endemicos', 'Antecedente familiar de sarcoidosis'],
      clinica: 'SINDROME DE LOFGREN: eritema nodoso en cara anterior de las piernas, adenopatias hiliares bilaterales y artritis o periartritis de tobillos, con o sin fiebre. SINDROME DE HEERFORDT: fiebre, uveitis, aumento parotideo y paralisis facial. Ambos son cuadros agudos, llamativos y de buen pronostico.',
      criterios_dx: 'En el sindrome de Lofgren completo la especificidad es tan alta que NO hace falta biopsia. En el resto de las situaciones, el diagnostico de sarcoidosis exige haber excluido activamente las demas granulomatosis. Ver la Figura 1 de Definicion.',
      laboratorio: 'El habitual de la sarcoidosis. Ante sospecha de beriliosis, prueba de proliferacion linfocitaria frente al berilio, que es lo unico que la separa de la sarcoidosis. Estudio de inmunoglobulinas si se sospecha inmunodeficiencia comun variable.',
      imagen: 'Radiografia y tomografia toracicas. En la beriliosis cronica los hallazgos son practicamente indistinguibles de los de la sarcoidosis, de modo que la clave esta en la anamnesis laboral y no en la imagen.',
      complementarios: 'ANAMNESIS OCUPACIONAL detallada en todos: berilio, silice, polvos metalicos y polvos organicos. Cultivo de micobacterias y hongos en toda muestra histologica. Revision de farmacos, incluida la inmunoterapia antitumoral.',
      dx_diferencial: 'Beriliosis cronica, tuberculosis y micobacteriosis, micosis, granulomatosis con poliangeitis, inmunodeficiencia comun variable, reaccion sarcoidea a un tumor o a inmunoterapia, enfermedad de Crohn, cirrosis biliar primaria y granulomatosis por talco en el usuario de drogas por via parenteral.',
      tx_medico: 'En el sindrome de Lofgren, reposo relativo, medias de compresion para el eritema nodoso y explicacion de que se espera la resolucion espontanea, que es la informacion mas util que se le puede dar al paciente.',
      tx_farmacologico: 'ANTIINFLAMATORIOS NO ESTEROIDEOS como primera opcion en el sindrome de Lofgren, y colchicina como alternativa. Corticoides a dosis bajas o moderadas solo si los sintomas son muy limitantes o no responden. Iniciar corticoides prolongados en un cuadro que iba a remitir solo es un sobretratamiento frecuente.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Rara vez requiere ingreso. Si ingresa por fiebre y artritis, evitar tratar el cuadro como una infeccion o como una vasculitis antes de reconocer el patron.',
      seguimiento_ambulatorio: 'Control clinico y radiologico hasta la resolucion. Si a los 2 a&#241;os persiste actividad, el cuadro ha dejado de comportarse como un Lofgren tipico y hay que reevaluarlo.',
      pronostico: 'Excelente en el sindrome de Lofgren, con remision espontanea en la mayoria y baja tasa de recidiva. En las demas granulomatosis, el pronostico es el de la enfermedad de base, y por eso equivocar el diagnostico tiene consecuencias reales: un linfoma o una tuberculosis tratados como sarcoidosis con corticoides empeoran.',
      algoritmo: ['Reconocer la triada del sindrome de Lofgren y NO biopsiar', 'Explicar al paciente que se espera resolucion espontanea', 'Tratar con antiinflamatorios no esteroideos, no con corticoides prolongados', 'En el resto de los casos, hacer anamnesis OCUPACIONAL detallada', 'Preguntar de forma explicita por exposicion al BERILIO', 'Enviar toda muestra a cultivo de micobacterias y hongos', 'Revisar farmacos, incluida la inmunoterapia antitumoral', 'Descartar linfoma con reaccion sarcoidea', 'Descartar inmunodeficiencia comun variable si hay infecciones de repeticion', 'Reevaluar el diagnostico si el curso no encaja con lo esperado']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La sarcoidosis se equivoca en dos direcciones: se trata a quien no lo necesitaba y se deja sin cribar a quien tenia una afectacion silente que iba a decidir su pronostico. Lo que sigue es la lista que evita las dos.',
    parametros: ['Enviar SIEMPRE la muestra histologica tambien a cultivo de micobacterias y hongos', 'Preguntar de entrada por exposicion al BERILIO y a polvos inorganicos', 'No usar la enzima convertidora de angiotensina para diagnosticar ni para seguir', 'Hacer ELECTROCARDIOGRAMA a todos al diagnostico', 'Hacer EXPLORACION OFTALMOLOGICA a todos, aunque no refieran sintomas', 'Pedir calcio serico Y urinario, no solo el serico', 'Obtener funcion pulmonar con DLCO como basal para poder comparar despues', 'No tratar al paciente asintomatico con funcion conservada y sin organo de riesgo', 'Tratar sin demora la afectacion cardiaca, neurologica, ocular grave y renal', 'No suplementar vitamina D de forma rutinaria en estos pacientes', 'Seguir la respuesta con FUNCION PULMONAR, no con la radiografia', 'Cribar tuberculosis latente antes de un antagonista del factor de necrosis tumoral'],
    criterios_uci_general: 'Bloqueo auriculoventricular completo, taquicardia ventricular sostenida o tormenta arritmica por afectacion cardiaca; insuficiencia respiratoria aguda sobre enfermedad fibrotica; meningitis con deterioro del nivel de conciencia o hidrocefalia aguda; e hipercalcemia grave con alteracion del nivel de conciencia o insuficiencia renal.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'Trasplante pulmonar en la enfermedad fibrotica terminal con insuficiencia respiratoria, deterioro progresivo o hipertension pulmonar; trasplante cardiaco en la afectacion cardiaca con insuficiencia refractaria o tormenta arritmica; y trasplante renal en la insuficiencia renal terminal, con riesgo de recidiva en el injerto.',
    prevencion: 'No hay prevencion primaria posible porque la causa se desconoce, con la excepcion de las granulomatosis por exposicion: el control de la exposicion al BERILIO previene una enfermedad clinicamente indistinguible de la sarcoidosis. La prevencion secundaria es el cribado de organos al diagnostico, que detecta afectacion silente en corazon, ojo y ri&#241;on antes de que produzca da&#241;o irreversible. Y la terciaria consiste en evitar tanto el infratratamiento de los organos de riesgo como el sobretratamiento del paciente asintomatico, y en manejar la toxicidad del corticoide con profilaxis osea y vigilancia metabolica desde el primer dia.'
  }
};

export const compCites = {
  'Sarcoidosis: sospecha, diagnostico y estadios': [1, 5, 13, 16],
  'Afectacion pulmonar y decision de tratar': [2, 7, 8, 15],
  'Sarcoidosis cardiaca': [3, 12],
  'Neurosarcoidosis y afectacion ocular': [11, 4],
  'Hipercalcemia, hipercalciuria y afectacion renal': [9],
  'Formas de buen pronostico y otras granulomatosis': [10, 14, 6]
};
export const estigmasTitulo = 'Signos y pistas que orientan hacia una sarcoidosis';
export const estigmas = [
  { s: 'Adenopatias hiliares BILATERALES y simetricas', p: 'El hallazgo mas caracteristico', photo: null, desc: 'La bilateralidad y la simetria son lo que la separa del linfoma y de la tuberculosis, que tienden a ser asimetricos. Con frecuencia se descubre por casualidad en una radiografia pedida por otro motivo, en un paciente que se encuentra bien.' },
  { s: 'Eritema nodoso con artritis de tobillos', p: 'Sindrome de Lofgren', photo: null, desc: 'Nodulos subcutaneos dolorosos en la cara anterior de las piernas junto con adenopatias hiliares y periartritis de tobillos. La triada es tan especifica que permite diagnosticar sin biopsia, y anuncia la forma de mejor pronostico.' },
  { s: 'Fiebre uveoparotidea con paralisis facial', p: 'Sindrome de Heerfordt', photo: null, desc: 'Raro pero muy caracteristico: fiebre, uveitis, aumento de las parotidas y paralisis del nervio facial. Como el sindrome de Lofgren, su especificidad hace innecesaria la biopsia cuando esta completo.' },
  { s: 'Micronodulos de distribucion perilinfatica', p: 'Patron tipico en la tomografia', photo: null, desc: 'Nodulillos a lo largo de los haces broncovasculares, la pleura y los septos, de predominio en campos medios y superiores. Esa distribucion sigue el recorrido de los linfaticos y es uno de los datos que mas orientan.' },
  { s: 'Adenopatias calcificadas en cascara de huevo', p: 'Enfermedad de larga evolucion', photo: null, desc: 'Calcificacion periferica de los ganglios hiliares. Aparece en la sarcoidosis cronica y tambien en la silicosis, de modo que obliga a repasar la anamnesis ocupacional antes de darla por sarcoidea.' },
  { s: 'Lupus pernio', p: 'Marcador de mal pronostico', photo: null, desc: 'Placas violaceas induradas en nariz, mejillas y orejas. No es una lesion cutanea mas: se asocia a enfermedad cronica, a afectacion de la via aerea superior y a peor respuesta al tratamiento, y suele obligar a escalar mas alla del corticoide.' },
  { s: 'Linfopenia sin otra explicacion', p: 'Muy frecuente y poco valorada', photo: null, desc: 'Refleja el secuestro de linfocitos en los granulomas y no una inmunodeficiencia primaria. Su hallazgo en un paciente con adenopatias hiliares es una pista mas, aunque obliga a considerar la inmunodeficiencia comun variable en el diferencial.' },
  { s: 'Bloqueo auriculoventricular en un adulto joven', p: 'Sospecha de afectacion cardiaca', photo: null, desc: 'Un trastorno de la conduccion sin explicacion en alguien joven obliga a pensar en sarcoidosis cardiaca y a pasar a resonancia o tomografia por emision de positrones. Puede ser la primera y unica manifestacion de la enfermedad.' },
  { s: 'Paralisis facial periferica', p: 'La neurosarcoidosis mas frecuente', photo: null, desc: 'Es la manifestacion neurologica mas comun y suele recuperarse bien. Una paralisis facial etiquetada de idiopatica en un paciente con adenopatias hiliares o uveitis merece una segunda mirada.' },
  { s: 'Uveitis asintomatica en la lampara de hendidura', p: 'Por eso se explora a todos', photo: null, desc: 'La inflamacion ocular puede no dar sintomas al principio y amenazar la vision. Su deteccion cambia la indicacion de tratamiento, y ese es el motivo de que la exploracion oftalmologica forme parte del cribado inicial de todos los pacientes.' },
  { s: 'Hipercalciuria sin hipercalcemia', p: 'Mas frecuente de lo que parece', photo: null, desc: 'Aparece antes que la hipercalcemia y produce litiasis y nefrocalcinosis de forma silente. Pedir solo el calcio serico deja escapar la mayoria de los casos, y por eso el calcio urinario entra en el cribado inicial.' },
  { s: 'Realce cardiaco parcheado sin territorio coronario', p: 'Sarcoidosis cardiaca', photo: null, desc: 'En la resonancia, realce tardio de gadolinio en el tabique basal y la pared lateral que no respeta el reparto de las arterias coronarias. Ese patron es lo que distingue la infiltracion granulomatosa de una cicatriz isquemica.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Estadios radiologicos de Scadding (calculadora disponible)': [1, 5],
  'Indicacion de tratamiento (calculadora disponible)': [2],
  'Patron de la hipercalcemia (calculadora disponible)': [9],
  'Sospecha de sarcoidosis cardiaca (calculadora disponible)': [3, 12],
  'Criterios de sindrome de Lofgren': [10],
  'Deterioro funcional significativo': [2, 15]
};
export const escalaCalc = {
  'Estadios radiologicos de Scadding (calculadora disponible)': 'estadio-scadding',
  'Indicacion de tratamiento (calculadora disponible)': 'tratar-sarcoidosis',
  'Patron de la hipercalcemia (calculadora disponible)': 'hipercalcemia-sarcoidosis',
  'Sospecha de sarcoidosis cardiaca (calculadora disponible)': 'sospecha-cardiaca'
};
export const compGroups = [
  { name: 'El diagnostico y el pulmon', items: ['Sarcoidosis: sospecha, diagnostico y estadios', 'Afectacion pulmonar y decision de tratar'] },
  { name: 'Los organos de riesgo', items: ['Sarcoidosis cardiaca', 'Neurosarcoidosis y afectacion ocular', 'Hipercalcemia, hipercalciuria y afectacion renal'] },
  { name: 'Lo que no es sarcoidosis', items: ['Formas de buen pronostico y otras granulomatosis'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son el nucleo del tema: como se llega al diagnostico y, sobre todo, a quien se trata, que es la decision que mas se equivoca en las dos direcciones. Las tres siguientes son los organos que deciden el pronostico y que hay que buscar de forma activa porque suelen ser silentes: el corazon, el sistema nervioso y el ojo, y el ri&#241;on a traves del metabolismo del calcio. La ultima recoge las formas que se resuelven solas y, sobre todo, las enfermedades que producen los mismos granulomas y que hay que haber descartado antes de poner esta etiqueta.';
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
      { title: 'Granuloma no caseificante', sub: 'Distribucion perilinfatica', color: '#8a4a7a', target: 'diagnostico' },
      { title: 'Excluir infeccion', sub: 'Cultivo en toda muestra', color: '#5a6b2e', target: 'complicaciones' },
      { title: 'Preguntar por el berilio', sub: 'Cuadro indistinguible', color: '#8c5a2e', target: 'complicaciones' },
      { title: 'La ECA no diagnostica', sub: 'Ni sirve para seguir', color: '#8c3a34', target: 'diagnostico' }
    ] },
    { title: 'CRIBAR ORGANOS', sub: 'A todos, al diagnostico', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Electrocardiograma', sub: 'El corazon es lo que mata', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Lampara de hendidura', sub: 'La uveitis puede ser muda', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Calcio en sangre Y orina', sub: 'La hipercalciuria va antes', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Funcion pulmonar con DLCO', sub: 'El basal para comparar', color: '#3f6b52', target: 'diagnostico' }
    ] },
    { title: 'TRATAR O NO', sub: 'No lo decide el estadio', color: '#3f6b52', target: 'clasificacion', leaves: [
      { title: 'Organo de riesgo', sub: 'Tratar sin esperar', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Sintomas o deterioro', sub: 'Documentado, no impresion', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Asintomatico', sub: 'Observar: remite con frecuencia', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Corticoide y ahorrador', sub: 'Metotrexato, luego anti-TNF', color: '#8a4a7a', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 9, 16], no_invasivos: [1, 2, 3], imagen: [1, 12] };
export const clasificacionCite = [1, 2, 3, 10];
export const seguimientoCite = [1, 2, 15];
