// topics/cancer-cutaneo-no-melanoma/calculators.js - Riesgo del carcinoma epidermoide, margen
// quirurgico, forma del sarcoma de Kaposi y manejo cutaneo del paciente inmunodeprimido.
// Fuentes: Queirolo P, et al. ESMO Open 2023;8(6):102037 (basocelular) y 2024;9(5):103005
// (epidermoide), las dos guias GRADE de la Asociacion Italiana de Oncologia Medica; y
// Cesarman E, et al. Nat Rev Dis Primers 2019;5(1):9 (sarcoma de Kaposi).
// Donde la guia da una recomendacion, estas calculadoras devuelven TAMBIEN su fuerza y la calidad
// de la evidencia, porque en este tema las dos cosas se separan mucho y esa separacion es parte
// de lo que hay que aprender.

export const calculators = [
  {
    key: 'riesgo-epidermoide', title: 'Riesgo del carcinoma epidermoide', accent: '#8c5a3a',
    subtitle: 'Seis rasgos del informe; basta uno',
    incompleteMsg: 'Marca los rasgos que figuren en el informe, o ninguno si no hay.',
    fields: [
      { name: 'espesor', id: 'cc-re-esp', type: 'number', step: '0.1', required: false, label: 'Espesor vertical en mm (dejar vacio si no consta)', placeholder: 'ej. 7.5' },
      { name: 'malaDif', id: 'cc-re-dif', type: 'checkbox', label: 'Mala diferenciacion celular' },
      { name: 'recurrente', id: 'cc-re-rec', type: 'checkbox', label: 'Tumor recurrente' },
      { name: 'perineural', id: 'cc-re-pn', type: 'checkbox', label: 'Invasion perineural' },
      { name: 'subcutaneo', id: 'cc-re-sc', type: 'checkbox', label: 'Extension profunda al tejido subcutaneo' },
      { name: 'orejaLabio', id: 'cc-re-ol', type: 'checkbox', label: 'Localizacion en OREJA o LABIO' },
      { name: 'mayor2cm', id: 'cc-re-2cm', type: 'checkbox', label: 'La lesion mide mas de 2 cm' },
      { name: 'inmunodeprimido', id: 'cc-re-inm', type: 'checkbox', label: 'Paciente inmunodeprimido o trasplantado' },
      { type: 'note', text: 'No es una puntuacion: es una lista de seis rasgos, y basta UNO para que el tumor sea de alto riesgo.' }
    ],
    compute(v) {
      const e = (v.espesor === null || v.espesor === undefined || v.espesor === '' || isNaN(v.espesor)) ? null : Number(v.espesor);
      const rasgos = [];
      if (e !== null && e > 6) rasgos.push('espesor de ' + e + ' mm, por encima de 6 mm');
      if (v.malaDif) rasgos.push('mala diferenciacion celular');
      if (v.recurrente) rasgos.push('tumor recurrente');
      if (v.perineural) rasgos.push('invasion perineural');
      if (v.subcutaneo) rasgos.push('extension profunda al subcutaneo');
      if (v.orejaLabio) rasgos.push('localizacion en oreja o labio');
      const alto = rasgos.length > 0;
      const margen = alto ? '6 mm o mas' : (v.mayor2cm ? '6 mm (por superar los 2 cm)' : '4 mm o mas');
      const conducta = alto
        ? [
            'Margen de 6 mm o mas (condicional a favor, opinion de expertos). Las guias europeas piden de 6 a 10 mm',
            'Valorar cirugia de MOHS frente a la exeresis simple (condicional a favor)',
            'Estadificacion instrumental BASAL para buscar metastasis extracutaneas (condicional a favor, calidad muy baja)',
            'Imagen tambien en el SEGUIMIENTO (condicional a favor, calidad muy baja)',
            'Valorar radioterapia ADYUVANTE tras la exeresis (condicional a favor, calidad MODERADA)'
          ]
        : [
            'Margen de 4 mm o mas, que extirpa por completo mas del 95% de las lesiones de menos de 2 cm',
            'Sin indicacion de imagen basal ni de seguimiento radiologico',
            'Sin indicacion de radioterapia adyuvante',
            'Revision periodica de toda la piel y fotoproteccion'
          ];
      const contra = [
        'Ganglio centinela: NO de rutina, tampoco en el de alto riesgo (condicional EN CONTRA, calidad muy baja)',
        'Linfadenectomia profilactica: NO (condicional en contra, opinion de expertos)',
        'Quimiorradioterapia concomitante tras la cirugia: NO como primera opcion (condicional en contra)'
      ];
      return { alto, rasgos, margen, conducta, contra, espesor: e, inmunodeprimido: !!v.inmunodeprimido, mayor2cm: !!v.mayor2cm };
    },
    format(r) {
      let s = r.alto
        ? '<strong style="color:#8c3a34;font-size:14.5px;">Carcinoma epidermoide de ALTO RIESGO.</strong>'
        : '<strong style="color:#3f6b52;font-size:14.5px;">Carcinoma epidermoide de BAJO riesgo.</strong>';
      if (r.rasgos.length) s += `<br><span style="opacity:.9;">Rasgos presentes (${r.rasgos.length} de 6): ${r.rasgos.join(', ')}.</span>`;
      else s += '<br><span style="opacity:.9;">Ninguno de los seis rasgos consta en el informe.</span>';
      s += `<br><strong>Margen quirurgico: ${r.margen}.</strong>`;
      s += '<br><br><strong>Lo que corresponde</strong><br>' + r.conducta.map(x => '&bull; ' + x).join('<br>');
      s += '<br><br><strong style="color:#8c3a34;">Lo que NO se hace</strong><br>' + r.contra.map(x => '&bull; ' + x).join('<br>');
      if (r.inmunodeprimido) s += '<br><br><span style="color:#3d5a73;">Paciente inmunodeprimido: el seguimiento clinico e instrumental puede considerarse opcion primaria (condicional a favor, opinion de expertos), por el riesgo de recidiva cutanea y de nuevas neoplasias cutaneas y extracutaneas que genera la inmunosupresion sostenida. Y recuerda la magnitud del problema: el trasplantado de organo solido tiene de 65 a 250 veces mas riesgo de epidermoide.</span>';
      if (r.espesor === null) s += '<br><span style="opacity:.75;font-size:12.5px;">No has indicado el espesor. Es el rasgo que las guias europeas consideran suficiente por si solo a partir de 6 mm: conviene buscarlo en el informe.</span>';
      return s;
    },
    fragment: r => `epidermoide de ${r.alto ? 'ALTO' : 'bajo'} riesgo (${r.rasgos.length} de 6 rasgos), margen ${r.margen}`
  },

  {
    key: 'margen-queratinocitico', title: 'Margen quirurgico del carcinoma queratinocitico', accent: '#4a6b7a',
    subtitle: 'Basocelular y epidermoide, con la fuerza de cada recomendacion',
    incompleteMsg: 'Elige el tipo de tumor.',
    fields: [
      { name: 'tumor', id: 'cc-mq-t', type: 'select', label: 'Tipo de tumor', options: [
        { value: '', label: 'Elegir...' },
        { value: 'bcc', label: 'Carcinoma basocelular' },
        { value: 'cscc', label: 'Carcinoma epidermoide' }
      ] },
      { name: 'altoRiesgo', id: 'cc-mq-ar', type: 'checkbox', label: 'Alto riesgo (epidermoide: alguno de los seis rasgos)' },
      { name: 'recurrente', id: 'cc-mq-rec', type: 'checkbox', label: 'Tumor recurrente' },
      { name: 'mayor2cm', id: 'cc-mq-2cm', type: 'checkbox', label: 'Mide mas de 2 cm' },
      { name: 'margenPositivo', id: 'cc-mq-mp', type: 'checkbox', label: 'Ya se opero y los margenes salieron POSITIVOS' },
      { name: 'noOperable', id: 'cc-mq-no', type: 'checkbox', label: 'No abordable con cirugia ni radioterapia con intencion curativa razonable' },
      { type: 'note', text: 'Ampliar margenes no es gratis: mas complicaciones, mas cicatriz, mas dolor y mas sangrado.' }
    ],
    compute(v) {
      if (!v.tumor) return null;
      const bcc = v.tumor === 'bcc';
      let margen, fuerza;
      if (bcc) { margen = '3 mm o mas'; fuerza = 'FUERTE a favor, calidad moderada'; }
      else if (v.altoRiesgo) { margen = '6 mm o mas'; fuerza = 'condicional a favor, opinion de expertos (guias europeas: 6 a 10 mm)'; }
      else if (v.mayor2cm) { margen = '6 mm'; fuerza = 'condicional a favor, opinion de expertos'; }
      else { margen = '4 mm o mas'; fuerza = 'condicional a favor, opinion de expertos'; }
      const notas = [];
      if (v.altoRiesgo || v.recurrente) notas.push(bcc
        ? 'Recurrente o de alto riesgo: puede considerarse la cirugia de MOHS frente a la exeresis estandar (condicional a favor, calidad muy baja)'
        : 'Recurrente o de alto riesgo: puede considerarse la tecnica de MOHS frente a la exeresis simple (condicional a favor)');
      if (v.margenPositivo) notas.push(bcc
        ? 'Margenes positivos: REEXERESIS por delante de la radioterapia (condicional EN CONTRA de la radioterapia, calidad muy baja)'
        : 'Margenes positivos: replantear la cirugia; la quimiorradioterapia concomitante NO es primera opcion tras la exeresis (condicional en contra)');
      if (v.noOperable) notas.push(bcc
        ? 'Si no es abordable con cirugia ni radioterapia, es un basocelular LOCALMENTE AVANZADO: inhibidores de la via Hedgehog (FUERTE a favor, aunque la calidad de la evidencia sea MUY BAJA, por ausencia de alternativa)'
        : 'Si es irresecable, puede considerarse quimiorradioterapia concomitante (condicional a favor, calidad muy baja); si es recurrente o metastasico y no candidato a tratamiento curativo, CEMIPLIMAB de primera opcion (FUERTE a favor)');
      const alternativas = bcc
        ? [
            'frente a terapia fotodinamica: FUERTE a favor de la cirugia',
            'frente a crioterapia: FUERTE a favor de la cirugia',
            'frente a radioterapia: FUERTE a favor de la cirugia',
            'frente a imiquimod, 5-fluorouracilo, laser y cauterizacion: condicional a favor de la cirugia',
            'electroquimioterapia: NO como primera opcion, ni con contraindicaciones relativas a cirugia y radioterapia'
          ]
        : [
            'frente a radioterapia: condicional a favor de la cirugia',
            'frente a cauterizacion o crioterapia: condicional a favor de la cirugia',
            'las tecnicas destructivas y los topicos son para el CAMPO de cancerizacion, no para el carcinoma invasivo',
            'y ninguna de ellas permite analizar el margen histologico'
          ];
      return { bcc, margen, fuerza, notas, alternativas, noOperable: !!v.noOperable };
    },
    format(r) {
      let s = `<strong style="color:${r.bcc ? '#4a6b7a' : '#8c5a3a'};font-size:14.5px;">Margen recomendado: ${r.margen}</strong>`;
      s += `<br><span style="opacity:.85;">Fuerza de la recomendacion: ${r.fuerza}.</span>`;
      s += '<br><span style="opacity:.85;">A todo el espesor, y con analisis del margen: es lo unico que la cirugia da y las tecnicas destructivas no.</span>';
      if (r.notas.length) s += '<br><br>' + r.notas.map(n => '&bull; ' + n).join('<br>');
      s += `<br><br><strong>La cirugia frente a las alternativas</strong><br>` + r.alternativas.map(a => '&bull; ' + a).join('<br>');
      if (r.bcc) s += '<br><span style="opacity:.75;font-size:12.5px;">La guia compara la cirugia una por una con cada alternativa, y en los tres casos en los que la recomendacion es FUERTE (fotodinamica, crioterapia y radioterapia) la calidad de la evidencia es solo baja o moderada.</span>';
      return s;
    },
    fragment: r => `${r.bcc ? 'basocelular' : 'epidermoide'} con margen de ${r.margen}`
  },

  {
    key: 'kaposi-forma', title: 'Sarcoma de Kaposi: forma y primer paso', accent: '#7a3a4a',
    subtitle: 'La forma manda sobre la extension',
    incompleteMsg: 'Indica el contexto inmunitario del paciente.',
    fields: [
      { name: 'contexto', id: 'cc-ks-ctx', type: 'select', label: 'Contexto del paciente', options: [
        { value: '', label: 'Elegir...' },
        { value: 'vih', label: 'Infeccion por VIH' },
        { value: 'trasplante', label: 'Receptor de trasplante de organo solido' },
        { value: 'mayor', label: 'Persona de edad media o avanzada, sin inmunodepresion conocida' },
        { value: 'africa', label: 'Procedente del Africa subsahariana, sin VIH' },
        { value: 'hsh', label: 'Hombre que tiene sexo con hombres, sin VIH ni inmunodepresion' }
      ] },
      { name: 'esNino', id: 'cc-ks-nino', type: 'checkbox', label: 'Es un ni&#241;o' },
      { name: 'biopsiado', id: 'cc-ks-bx', type: 'checkbox', label: 'Ya hay confirmacion por biopsia' },
      { name: 'sintomasViscerales', id: 'cc-ks-visc', type: 'checkbox', label: 'Hay sintomas respiratorios o digestivos' },
      { name: 'artReciente', id: 'cc-ks-art', type: 'checkbox', label: 'Inicio el antirretroviral hace menos de 12 semanas' },
      { name: 'avanzado', id: 'cc-ks-av', type: 'checkbox', label: 'Enfermedad extensa o en estadio avanzado' },
      { type: 'note', text: 'El Kaposi no esta en el TNM de la AJCC. Para el asociado al sida se usa la clasificacion ACTG, que es un TIS: tumor, inmunidad y enfermedad sistemica.' }
    ],
    compute(v) {
      if (!v.contexto) return null;
      const c = v.contexto;
      const forma = { vih: 'epidemica (asociada al sida)', trasplante: 'yatrogena', mayor: 'clasica o esporadica', africa: 'endemica', hsh: 'la quinta forma, en hombres sin VIH' }[c];
      let primero, detalle;
      if (c === 'vih') {
        primero = 'Antirretroviral';
        detalle = 'En el Kaposi asociado al sida no tratado previamente y en fase precoz, el tratamiento debe EMPEZAR por el control del VIH, que con frecuencia produce la regresion del Kaposi. El riesgo de Kaposi sube al bajar los CD4 y baja con el antirretroviral.';
      } else if (c === 'trasplante') {
        primero = 'Reducir o modificar la inmunosupresion';
        detalle = 'La enfermedad puede regresar al reducir la inmunosupresion o al cambiar el esquema. El riesgo se correlaciona con el GRADO de inmunosupresion, de modo que es mayor en trasplantes multiorgano y con mayor disparidad HLA. Los inhibidores de mTOR como el sirolimus tienen actividad y son una opcion al replantear el esquema.';
      } else if (c === 'africa' && v.esNino) {
        primero = 'Quimioterapia';
        detalle = 'La forma endemica infantil se presenta con multiples adenopatias y linfedema y tiene una historia natural MUY AGRESIVA, con diseminacion visceral. No es un cuadro indolente.';
      } else {
        primero = 'Tratamiento local';
        detalle = c === 'africa'
          ? 'En el adulto, la forma endemica da lesiones en miembros inferiores parecidas a las de la forma clasica, con curso indolente o localmente invasivo y afectacion visceral ocasional.'
          : 'Curso habitualmente indolente, con pocas lesiones y afectacion visceral y mucosa rara.';
      }
      const avisos = [];
      if (!v.biopsiado) avisos.push('BIOPSIAR antes de tratar: el diagnostico visual aislado tuvo un valor predictivo positivo de solo el 80%, y el error que mas importa es confundirlo con una angiomatosis bacilar, que se cura con antibiotico.');
      avisos.push('Mirar la CAVIDAD ORAL: es con frecuencia la primera localizacion del Kaposi asociado al sida y la que el paciente no se ve.');
      if (!v.sintomasViscerales) avisos.push('NO pedir TC, broncoscopia ni endoscopia sin sintomas que las sugieran: solo el 15% de 469 pacientes tenia lesiones viscerales al diagnostico, y es raro que las haya sin lesiones visibles en piel o mucosas.');
      else avisos.push('Hay sintomas respiratorios o digestivos: ahi si procede estudiar el territorio correspondiente, porque es la situacion que justifica la endoscopia o la imagen.');
      if (c === 'vih' && v.artReciente) avisos.push('ATENCION a las 12 primeras semanas de antirretroviral: es la ventana del sindrome inflamatorio de reconstitucion inmunitaria, en el que el Kaposi empeora o se desenmascara a la vez que la inmunidad se recupera. Su frecuencia va de menos del 10% a casi el 40% segun la definicion. Empeorar ahi NO significa que el tratamiento haya fracasado.');
      if (v.avanzado) avisos.push('En enfermedad avanzada, la quimioterapia mas habitual es la doxorubicina liposomal pegilada o el paclitaxel, aunque rara vez es curativa.');
      if (c === 'vih') avisos.push('Clasificar con el ACTG TIS: tumor, estado inmunitario y enfermedad sistemica. Es la unica estadificacion con uso extendido, y solo para esta forma.');
      return { forma, primero, detalle, avisos, contexto: c };
    },
    format(r) {
      let s = `<strong style="color:#7a3a4a;font-size:14.5px;">Forma ${r.forma}</strong>`;
      s += `<br><strong>Primer paso: ${r.primero}.</strong>`;
      s += `<br><span style="opacity:.9;">${r.detalle}</span>`;
      s += '<br><br>' + r.avisos.map(a => '&bull; ' + a).join('<br>');
      if (r.contexto === 'vih' || r.contexto === 'trasplante') s += '<br><br><span style="color:#3f6b52;">En esta forma, el primer tratamiento NO es oncologico: es devolverle al paciente la inmunidad que ha perdido.</span>';
      s += '<br><span style="opacity:.75;font-size:12.5px;">Fuente de 2019: es un primer completo, pero no recoge los cambios terapeuticos mas recientes.</span>';
      return s;
    },
    fragment: r => `Kaposi de forma ${r.forma}, empezando por ${r.primero.toLowerCase()}`
  },

  {
    key: 'piel-inmunodeprimido', title: 'La piel del paciente inmunodeprimido', accent: '#3d5a73',
    subtitle: 'Lo que corresponde al internista que lleva la inmunosupresion',
    incompleteMsg: 'Indica el tipo de inmunosupresion.',
    fields: [
      { name: 'tipo', id: 'cc-pi-t', type: 'select', label: 'Situacion del paciente', options: [
        { value: '', label: 'Elegir...' },
        { value: 'tos', label: 'Trasplante de organo solido' },
        { value: 'tph', label: 'Trasplante de progenitores hematopoyeticos' },
        { value: 'autoinmune', label: 'Enfermedad autoinmune con inmunosupresion sistemica' },
        { value: 'hemato', label: 'Hemopatia maligna, linfoma o leucemia' },
        { value: 'vih', label: 'Infeccion por VIH' }
      ] },
      { name: 'cancerPrevio', id: 'cc-pi-cp', type: 'checkbox', label: 'Ya ha tenido un cancer cutaneo no melanoma' },
      { name: 'queratosis', id: 'cc-pi-qa', type: 'checkbox', label: 'Tiene multiples queratosis actinicas o campo de cancerizacion' },
      { name: 'braf', id: 'cc-pi-braf', type: 'checkbox', label: 'Recibe un inhibidor de BRAF' },
      { name: 'lesionNueva', id: 'cc-pi-ln', type: 'checkbox', label: 'Hay una lesion nueva o que ha cambiado' },
      { name: 'violacea', id: 'cc-pi-vi', type: 'checkbox', label: 'La lesion es violacea' },
      { type: 'note', text: 'El receptor de trasplante de organo solido tiene de 65 a 250 veces mas riesgo de carcinoma epidermoide que la poblacion general.' }
    ],
    compute(v) {
      if (!v.tipo) return null;
      const acciones = [];
      if (v.tipo === 'tos') acciones.push('Visitas dermatologicas PROGRAMADAS, no a demanda (condicional a favor, opinion de expertos; la guia se refiere sobre todo al receptor de trasplante de organo solido)');
      else acciones.push('Visitas dermatologicas programadas en el inmunodeprimido (condicional a favor, opinion de expertos)');
      acciones.push('Explorar TODA la piel, incluida la cavidad oral');
      acciones.push('Fotoproteccion de por vida y evitar cabinas de bronceado');
      if (v.queratosis || v.cancerPrevio) acciones.push('Valorar QUIMIOPREVENCION (condicional a favor, calidad baja): el beneficio se concentro en los retinoides y en el celecoxib; la nicotinamida y los antioxidantes no mostraron efecto significativo en ese analisis');
      if (v.cancerPrevio) acciones.push('Seguimiento clinico e instrumental si ya hubo un epidermoide (condicional a favor, opinion de expertos), por el riesgo de recidiva y de nuevas neoplasias cutaneas y extracutaneas');
      if (v.braf) acciones.push('Vigilar la aparicion de epidermoides ERUPTIVOS: los inhibidores de BRAF los provocan, por potenciar mutaciones preexistentes en areas fotoexpuestas o por reducir las defensas frente al virus del papiloma humano');
      const urgente = [];
      if (v.lesionNueva) urgente.push('Lesion nueva o cambiante en un inmunodeprimido: umbral BAJO para biopsiar. No esperar a la siguiente revision.');
      if (v.violacea) urgente.push('Lesion VIOLACEA: biopsiar antes de tratar, por el sarcoma de Kaposi, y recordar que el diagnostico visual aislado acierta solo el 80%. La angiomatosis bacilar es el diferencial que no se puede pasar por alto, porque se cura con antibiotico.');
      if (v.violacea && (v.tipo === 'tos' || v.tipo === 'tph')) urgente.push('Si se confirma un Kaposi yatrogeno, la primera medida es REDUCIR o MODIFICAR la inmunosupresion, no la quimioterapia: el tumor puede regresar con eso solo, y el sirolimus tiene actividad.');
      if (v.violacea && v.tipo === 'vih') urgente.push('Si se confirma un Kaposi asociado al sida en fase precoz, empezar por el ANTIRRETROVIRAL, que con frecuencia produce regresion, y vigilar 12 semanas por el sindrome de reconstitucion.');
      const riesgo = v.tipo === 'tos' ? 'de 65 a 250 veces mayor que la poblacion general' : 'claramente aumentado respecto a la poblacion general';
      return { acciones, urgente, riesgo, tipo: v.tipo, violacea: !!v.violacea };
    },
    format(r) {
      let s = `<strong style="color:#3d5a73;">Riesgo de carcinoma epidermoide: ${r.riesgo}.</strong>`;
      s += '<br><span style="opacity:.9;">La inmunosupresion favorece el epidermoide por dos vias: menos vigilancia inmunitaria frente a las celulas tumorales y menos control de la infeccion por virus del papiloma humano.</span>';
      s += '<br><br><strong>Lo que hay que tener montado</strong><br>' + r.acciones.map(a => '&bull; ' + a).join('<br>');
      if (r.urgente.length) s += '<br><br><strong style="color:#8c3a34;">Ahora mismo</strong><br>' + r.urgente.map(u => '&bull; ' + u).join('<br>');
      s += '<br><br><span style="opacity:.75;font-size:12.5px;">Las dos recomendaciones que las guias dedican a este paciente son de organizacion asistencial y no de farmaco, y por eso se olvidan: programar las visitas dermatologicas y seguir al que ya tuvo un epidermoide.</span>';
      return s;
    },
    fragment: r => `paciente inmunodeprimido con riesgo ${r.riesgo.split(' ').slice(0, 4).join(' ')}`
  }
];

export const combinedNote = {
  title: 'Del informe a la conducta', accent: '#4a6b7a',
  subtitle: 'Encadena las calculadoras del tema',
  items: ['riesgo-epidermoide', 'margen-queratinocitico', 'kaposi-forma', 'piel-inmunodeprimido'],
  build(results, missing) {
    const partes = [];
    const re = results['riesgo-epidermoide'];
    const mq = results['margen-queratinocitico'];
    const ks = results['kaposi-forma'];
    const pi = results['piel-inmunodeprimido'];
    if (re) partes.push(`El epidermoide es de <strong>${re.alto ? 'alto' : 'bajo'} riesgo</strong> (${re.rasgos.length} de los seis rasgos), con margen de <strong>${re.margen}</strong>.`);
    if (mq) partes.push(`Para el ${mq.bcc ? 'basocelular' : 'epidermoide'}, el margen recomendado es de <strong>${mq.margen}</strong>.`);
    if (ks) partes.push(`El Kaposi es de forma <strong>${ks.forma}</strong>, y el primer paso es <strong>${ks.primero.toLowerCase()}</strong>.`);
    if (pi) partes.push(`En este paciente inmunodeprimido el riesgo de epidermoide es <strong>${pi.riesgo}</strong>.`);
    let html = partes.join(' ');
    if (!html) html = 'Rellena al menos una de las calculadoras del tema.';
    else html += ' <span style="opacity:.75;">Los tres tumores se parecen poco entre si; lo que comparten es el paciente que los tiene.</span>';
    if (missing.length) html += `<div style="margin-top:10px;color:#b0453d;font-size:12.5px;">Faltan datos en: ${missing.join(', ')}.</div>`;
    return html;
  }
};

export default { calculators, combinedNote };
