// topics/melanoma/calculators.js - Estadificacion AJCC 8, margen y ganglio centinela,
// estudio de extension y eleccion de la primera linea en enfermedad avanzada.
// Fuentes: Gershenwald JE, et al. CA Cancer J Clin 2017;67(6):472-492 (categorias T, N, M,
// grupos de estadio y supervivencia especifica) y Amaral T, et al. Ann Oncol 2025;36(1):10-30
// (margenes, indicacion de centinela, estudio de extension y primera linea), con la secuencia
// de DREAMSEQ y SECOMBIT segun Marquez-Rodas I, et al. Clin Transl Oncol 2024;26(11):2841-2855.

// --- Categoria T de la AJCC 8: grosor y ulceracion, nada mas ---
function categoriaT(insitu, b, ulc) {
  if (insitu) return 'Tis';
  if (b === null || b === undefined || isNaN(b) || b <= 0) return null;
  if (b <= 1.0) return (b < 0.8 && !ulc) ? 'T1a' : 'T1b';
  if (b <= 2.0) return ulc ? 'T2b' : 'T2a';
  if (b <= 4.0) return ulc ? 'T3b' : 'T3a';
  return ulc ? 'T4b' : 'T4a';
}

// --- Categoria N: numero de ganglios, como se detectaron y enfermedad no ganglionar ---
function categoriaN(nodos, deteccion, noGanglionar) {
  if (nodos === '0' && !noGanglionar) return 'N0';
  if (noGanglionar) {
    if (nodos === '0') return 'N1c';
    if (nodos === '1') return 'N2c';
    return 'N3c';
  }
  const suf = deteccion === 'adheridos' ? 'b' : (deteccion === 'detectado' ? 'b' : 'a');
  if (deteccion === 'adheridos') return 'N3b';
  if (nodos === '1') return 'N1' + suf;
  if (nodos === '2-3') return 'N2' + suf;
  return 'N3' + suf;
}

// --- Grupo de estadio patologico. El estadio III combina T y N, no la N sola ---
function grupoEstadio(T, N, M) {
  if (M && M !== 'M0') return 'IV';
  if (T === 'Tis') return '0';
  if (N === 'N0') {
    if (T === 'T1a' || T === 'T1b') return 'IA';
    if (T === 'T2a') return 'IB';
    if (T === 'T2b' || T === 'T3a') return 'IIA';
    if (T === 'T3b' || T === 'T4a') return 'IIB';
    if (T === 'T4b') return 'IIC';
    return null;
  }
  const bajos = ['T1a', 'T1b', 'T2a'];
  const medios = ['T2b', 'T3a'];
  if (T === 'T4b') return ['N3a', 'N3b', 'N3c'].includes(N) ? 'IIID' : 'IIIC';
  if (T === 'T3b' || T === 'T4a') return 'IIIC';
  if (bajos.includes(T)) {
    if (N === 'N1a' || N === 'N2a') return 'IIIA';
    if (N === 'N1b' || N === 'N1c' || N === 'N2b') return 'IIIB';
    return 'IIIC';
  }
  if (medios.includes(T)) {
    if (['N1a', 'N1b', 'N1c', 'N2a', 'N2b'].includes(N)) return 'IIIB';
    return 'IIIC';
  }
  return null;
}

// Supervivencia especifica de melanoma a 5 y 10 años. Solo las cifras que publica la octava
// edicion: donde el dato es del estadio agrupado (I y II) se dice asi, en vez de inventar el
// del subgrupo.
const SUPERVIVENCIA = {
  '0': { txt: 'Melanoma in situ: no hay riesgo de metástasis mientras no invada.', exacta: false },
  'IA': { txt: '99% a 5 años y 98% a 10 años.', exacta: true },
  'IB': { txt: 'El estadio I agrupado es del 98% a 5 años y del 95% a 10 años.', exacta: false },
  'IIA': { txt: 'El estadio II agrupado es del 90% a 5 años y del 84% a 10 años.', exacta: false },
  'IIB': { txt: 'El estadio II agrupado es del 90% a 5 años y del 84% a 10 años.', exacta: false },
  'IIC': { txt: '82% a 5 años y 75% a 10 años.', exacta: true },
  'IIIA': { txt: '93% a 5 años y 88% a 10 años.', exacta: true },
  'IIIB': { txt: '83% a 5 años y 77% a 10 años.', exacta: true },
  'IIIC': { txt: '69% a 5 años y 60% a 10 años.', exacta: true },
  'IIID': { txt: '32% a 5 años y 24% a 10 años.', exacta: true },
  'IV': { txt: 'Ya no se describe con las tablas de la octava edicion: depende del sitio, de la LDH y sobre todo del tratamiento.', exacta: false }
};

export const calculators = [
  {
    key: 'ajcc8-melanoma', title: 'Estadificación AJCC 8', accent: '#4a3a2e',
    subtitle: 'T por grosor y ulceracion, N por ganglios, M por sitio y LDH',
    incompleteMsg: 'Indica el grosor de Breslow, o marca que es un melanoma in situ.',
    fields: [
      { name: 'insitu', id: 'mel-insitu', type: 'checkbox', label: 'Melanoma IN SITU (Tis): no invade la dermis' },
      { name: 'breslow', id: 'mel-breslow', type: 'number', step: '0.1', required: false, label: 'Grosor de Breslow en mm (dejar vacio si es in situ)', placeholder: 'ej. 1.8', row: 'mt1' },
      { name: 'ulceracion', id: 'mel-ulc', type: 'checkbox', label: 'Ulceracion en el informe de patología', row: 'mt1' },
      { name: 'nodos', id: 'mel-nodos', type: 'select', label: 'Ganglios regionales con tumor', options: [
        { value: '0', label: 'Ninguno' },
        { value: '1', label: 'Uno' },
        { value: '2-3', label: 'Dos o tres' },
        { value: '4+', label: 'Cuatro o más' }
      ], row: 'mn1' },
      { name: 'deteccion', id: 'mel-det', type: 'select', label: 'Como se detectaron', options: [
        { value: 'oculto', label: 'Clínicamente ocultos (centinela)' },
        { value: 'detectado', label: 'Clínicamente detectados' },
        { value: 'adheridos', label: 'Ganglios adheridos entre si' }
      ], row: 'mn1' },
      { name: 'noGanglionar', id: 'mel-nong', type: 'checkbox', label: 'Microsatelites, satelites o metástasis en tránsito' },
      { name: 'metastasis', id: 'mel-m', type: 'select', label: 'Metástasis a distancia', options: [
        { value: 'no', label: 'No hay (M0)' },
        { value: 'a', label: 'Piel, tejido blando, músculo o ganglio no regional (M1a)' },
        { value: 'b', label: 'Pulmón (M1b)' },
        { value: 'c', label: 'Otra víscera, no sistema nervioso central (M1c)' },
        { value: 'd', label: 'Sistema nervioso central (M1d)' }
      ] },
      { name: 'ldh', id: 'mel-ldh', type: 'checkbox', label: 'LDH elevada (añade el descriptor 1 a la M)' },
      { type: 'note', text: 'El corte de 0,8 mm separa T1a de T1b, no T1 de T2. El grosor se informa con UN decimal: 0,75 mm se registra como 0,8 mm y eso cambia la subcategoría.' }
    ],
    compute(v) {
      const b = (v.breslow === null || v.breslow === undefined || v.breslow === '' || isNaN(v.breslow)) ? null : Number(v.breslow);
      const T = categoriaT(v.insitu, b, v.ulceracion);
      if (!T) return null;
      const N = categoriaN(v.nodos || '0', v.deteccion || 'oculto', v.noGanglionar);
      const M = (!v.metastasis || v.metastasis === 'no') ? 'M0' : `M1${v.metastasis}(${v.ldh ? 1 : 0})`;
      const estadio = grupoEstadio(T, N, M);
      const avisos = [];
      if (T === 'Tis' && b) avisos.push('Has marcado in situ y además un grosor: si el tumor invade la dermis, ya no es Tis. El in situ no tiene Breslow.');
      if (T === 'T1b' && b !== null && b < 0.8) avisos.push('Es T1b por la ULCERACION, no por el grosor: un melanoma de menos de 0,8 mm ulcerado sube de subcategoría.');
      if (T === 'T1b' && b !== null && b >= 0.8) avisos.push('Es T1b por el grosor de 0,8 a 1,0 mm, con ulceracion o sin ella.');
      if (v.noGanglionar) avisos.push('La enfermedad no ganglionar (microsatelites, satelites o en tránsito) lleva a una subcategoría "c" y, por si sola, ya es estadio III aunque no haya ningún ganglio afectado.');
      if (v.metastasis === 'd') avisos.push('El sitio manda sobre la LDH y el sistema nervioso central manda sobre los demás sitios: es M1d aunque haya también pulmón o hígado.');
      if (estadio === 'IA' && T === 'T1b') avisos.push('Ojo con la doble lectura del T1b N0: es estadio IA en la agrupación PATOLÓGICA (que exige centinela negativo) y estadio IB en la CLÍNICA.');
      if (estadio === 'IIIA' && (v.nodos === '1' || v.nodos === '2-3') && v.deteccion === 'oculto') avisos.push('Si la carga tumoral del centinela es menor de 1 mm, la adyuvancia NO es tratamiento estándar en este estadio IIIA: los ensayos reclutaron con criterios de la septima edicion.');
      return { T, N, M, estadio, superv: SUPERVIVENCIA[estadio] || null, avisos, breslow: b };
    },
    format(r) {
      let s = `<strong style="font-size:15px;">${r.T} &nbsp;${r.N} &nbsp;${r.M}</strong>`;
      s += `<br><strong style="color:#4a3a2e;">Grupo de estadio patológico: ${r.estadio}</strong>`;
      if (r.superv) s += `<br><span style="opacity:.9;">Supervivencia específica de melanoma: ${r.superv.txt}</span>`;
      if (r.superv && !r.superv.exacta && ['IB', 'IIA', 'IIB'].includes(r.estadio)) s += `<br><span style="opacity:.75;font-size:12.5px;">La octava edicion publica la cifra del estadio agrupado para este subgrupo; se da esa y no una del subgrupo para no inventarla.</span>`;
      if (['IIB', 'IIC'].includes(r.estadio)) s += `<br><span style="color:#8a5a1a;">Desde el estadio IIB: estudio de extensión con ecografía, TC o PET-TC y resonancia cerebral, y se debe CONSIDERAR anti PD-1 adyuvante 12 meses tras la resección completa.</span>`;
      if (r.estadio && r.estadio.startsWith('III')) s += `<br><span style="color:#8a5a2e;">Estadio III: determinación de BRAF obligatoria, estadificación completa para excluir enfermedad a distancia, y valorar neoadyuvancia si el ganglio es clínica o radiologicamente detectable y resecable.</span>`;
      if (r.estadio === 'IV') s += `<br><span style="color:#7a3a6b;">Estadio IV: BRAF V600, PD-L1 y LDH en todos. Primera línea preferida nivolumab con ipilimumab si se puede administrar con seguridad.</span>`;
      if (r.avisos.length) s += `<div style="margin-top:10px;font-size:12.5px;opacity:.9;">${r.avisos.map(a => '&bull; ' + a).join('<br>')}</div>`;
      return s;
    },
    fragment: r => `${r.T} ${r.N} ${r.M}, estadio ${r.estadio}`
  },

  {
    key: 'margen-centinela', title: 'Margen quirúrgico y ganglio centinela', accent: '#3d5a73',
    subtitle: 'Las dos decisiones que salen del grosor',
    incompleteMsg: 'Indica el grosor de Breslow, o marca que es un melanoma in situ.',
    fields: [
      { name: 'insitu', id: 'mel-mc-insitu', type: 'checkbox', label: 'Melanoma IN SITU (Tis)' },
      { name: 'breslow', id: 'mel-mc-b', type: 'number', step: '0.1', required: false, label: 'Grosor de Breslow en mm (dejar vacio si es in situ)', placeholder: 'ej. 0.9', row: 'mc1' },
      { name: 'ulceracion', id: 'mel-mc-ulc', type: 'checkbox', label: 'Ulceracion', row: 'mc1' },
      { name: 'ganglioClinico', id: 'mel-mc-gc', type: 'checkbox', label: 'Ganglios regionales clínica o radiologicamente POSITIVOS' },
      { name: 'mitosis', id: 'mel-mc-mit', type: 'checkbox', label: 'Tres o más mitosis por mm2' },
      { name: 'margenProfundo', id: 'mel-mc-mp', type: 'checkbox', label: 'Margen profundo positivo en la biopsia' },
      { name: 'ptx', id: 'mel-mc-ptx', type: 'checkbox', label: 'El Breslow no se puede medir con fiabilidad (pTx)' },
      { name: 'acral', id: 'mel-mc-ac', type: 'checkbox', label: 'Localización acral o facial, incluido el lentigo maligna' },
      { name: 'iraAdyuvancia', id: 'mel-mc-ady', type: 'checkbox', label: 'Primario grueso que ya va a recibir adyuvancia (T3b, T4a o T4b)' },
      { type: 'note', text: 'Margen: 0,5 cm en el in situ, 1 cm hasta 2 mm, 2 cm por encima de 2 mm, siempre a todo el espesor hasta la fascia.' }
    ],
    compute(v) {
      const b = (v.breslow === null || v.breslow === undefined || v.breslow === '' || isNaN(v.breslow)) ? null : Number(v.breslow);
      if (!v.insitu && b === null) return null;
      const T = categoriaT(v.insitu, b, v.ulceracion);
      if (!T) return null;
      let margen, centinela, grado;
      if (T === 'Tis') { margen = '0,5 cm'; centinela = 'no'; grado = null; }
      else if (b <= 2.0) margen = '1 cm';
      else margen = '2 cm';
      if (T === 'T1a') { centinela = v.mitosis || v.margenProfundo || v.ptx ? 'discutir-excepcion' : 'no-rutina'; grado = 'nivel II, grado E'; }
      else if (T === 'T1b') { centinela = 'discutir'; grado = 'nivel III, grado B'; }
      else if (T !== 'Tis') { centinela = 'indicado'; grado = 'nivel I, grado A'; }
      return { T, breslow: b, margen, centinela, grado, acral: v.acral, ganglioClinico: v.ganglioClinico, omitible: v.iraAdyuvancia && ['T3b', 'T4a', 'T4b'].includes(T) };
    },
    format(r) {
      let s = `<strong style="font-size:15px;">${r.T}</strong> &nbsp;&middot;&nbsp; <strong style="color:#3d5a73;">Margen de ampliación: ${r.margen}</strong>`;
      s += '<br><span style="opacity:.8;">A todo el espesor, con el margen profundo hasta la fascia.</span>';
      const txt = {
        'no': 'Ganglio centinela: <strong>no procede</strong> en el melanoma in situ.',
        'no-rutina': 'Ganglio centinela: <strong>no se recomienda de rutina</strong>.',
        'discutir-excepcion': 'Ganglio centinela: no es de rutina en el pT1a, pero este caso tiene un dato que justifica <strong>discutirlo</strong> (mitosis, margen profundo positivo o Breslow no medible).',
        'discutir': 'Ganglio centinela: hay que <strong>discutirlo con el paciente</strong>.',
        'indicado': 'Ganglio centinela: <strong>indicado</strong>, y a ser posible en el mismo acto que la ampliación de márgenes.'
      }[r.centinela];
      s += `<br>${txt}${r.grado ? ` <span style="opacity:.75;">(${r.grado})</span>` : ''}`;
      if (r.centinela === 'discutir') s += '<br><span style="opacity:.85;">El riesgo de centinela positivo entre 0,8 y 1,0 mm es del 5 al 12%, frente a menos del 5% por debajo de 0,8 mm: ese salto es el motivo de la conversación.</span>';
      if (r.acral) s += '<br><span style="color:#8a5a1a;">Localización acral o facial: se aceptan márgenes reducidos o cirugía micrografica para preservar la función. En el lentigo maligna, el consenso prefiere técnicas con control de margen y no fija un margen de seguridad definitivo.</span>';
      if (r.ganglioClinico) s += '<br><span style="color:#8a5a2e;">Con ganglios clínica o radiologicamente positivos el centinela ya no es la pregunta: el caso es un estadio III y entra en la via de neoadyuvancia o de linfadenectomia discutida en comite.</span>';
      if (r.omitible) s += '<br><span style="opacity:.85;">En un primario grueso que ya va a recibir adyuvancia se puede DISCUTIR omitir el centinela, explicando lo que se pierde: información de estadio y control locorregional.</span>';
      s += '<br><span style="opacity:.75;font-size:12.5px;">Si el centinela sale positivo: NO linfadenectomia completa y NO radioterapia ganglionar. Antes de añadir cualquier tratamiento, estadificación con TC, PET-TC y resonancia cerebral.</span>';
      return s;
    },
    fragment: r => `${r.T}, margen ${r.margen}, centinela ${r.centinela === 'indicado' ? 'indicado' : 'a valorar'}`
  },

  {
    key: 'estudio-extension', title: 'Estudio de extensión y pruebas moleculares', accent: '#8a5a2e',
    subtitle: 'Que se pide y desde que estadio',
    incompleteMsg: 'Elige el estadio.',
    fields: [
      { name: 'estadio', id: 'mel-ee-est', type: 'select', label: 'Estadio', options: [
        { value: '', label: 'Elegir...' },
        { value: 'I', label: 'Estadio I' },
        { value: 'IIA', label: 'Estadio IIA' },
        { value: 'IIB', label: 'Estadio IIB' },
        { value: 'IIC', label: 'Estadio IIC' },
        { value: 'IIIres', label: 'Estadio III resecable' },
        { value: 'IIInores', label: 'Estadio III no resecable' },
        { value: 'IV', label: 'Estadio IV' }
      ] },
      { name: 'centinelaPos', id: 'mel-ee-cp', type: 'checkbox', label: 'Centinela positivo y se plantea tratamiento adicional' },
      { name: 'sintomaNeuro', id: 'mel-ee-neuro', type: 'checkbox', label: 'Síntoma neurológico nuevo: cefalea, crisis, déficit o cambio de conducta' },
      { name: 'sinTejido', id: 'mel-ee-st', type: 'checkbox', label: 'No hay tejido tumoral disponible para el estudio molecular' },
      { type: 'note', text: 'La ESMO recomienda imagen de extensión a partir del estadio IIB. Por debajo no aporta y genera hallazgos incidentales.' }
    ],
    compute(v) {
      if (!v.estadio) return null;
      const e = v.estadio;
      const avanzado = ['IIIres', 'IIInores', 'IV'].includes(e);
      const imagenRutina = ['IIB', 'IIC', 'IIIres', 'IIInores', 'IV'].includes(e) || v.centinelaPos;
      const imagen = [];
      if (imagenRutina) {
        imagen.push('Ecografía de la primera estación ganglionar');
        imagen.push('TC o PET-TC de cuerpo');
        imagen.push('Resonancia magnética cerebral');
      } else {
        imagen.push('Exploración física de todo el cuerpo, con atención al primario, los satelites, las metástasis en tránsito y los ganglios regionales');
        imagen.push('Imagen de seguimiento OPCIONAL en el estadio I y IIA');
      }
      if (v.sintomaNeuro && !imagenRutina) imagen.push('Resonancia cerebral, por el síntoma neurológico y al margen del estadio');
      const molecular = [];
      if (avanzado) {
        molecular.push('BRAF V600: OBLIGATORIO, preferentemente sobre la metástasis');
        molecular.push('PD-L1 por inmunohistoquímica si la enfermedad es no resecable (estadio III no resecable o IV)');
        molecular.push('Opcionales: NRAS y KIT; NF1 si no hay mutación de BRAF ni de NRAS');
      } else if (['IIB', 'IIC'].includes(e)) {
        molecular.push('BRAF V600: se debe CONSIDERAR en el IIB-IIC de alto riesgo');
      } else {
        molecular.push('No se recomienda estudio molecular de rutina en el estadio I ni en el IIA');
      }
      if (v.sinTejido && avanzado) molecular.push('Sin tejido disponible: ADN tumoral circulante como alternativa (nivel III, grado C)');
      const ldh = e === 'IV' ? 'LDH obligatoria: forma parte de la categoría M como descriptor (0) o (1).' : (avanzado ? 'LDH recomendable: es el marcador que condiciona la secuencia si la enfermedad progresa.' : 'LDH no obligatoria en enfermedad localizada; la analítica de seguimiento es opcional.');
      return { estadio: e, imagen, molecular, ldh, imagenRutina, avanzado, sintomaNeuro: v.sintomaNeuro, centinelaPos: v.centinelaPos };
    },
    format(r) {
      let s = `<strong style="color:#8a5a2e;">Estadio ${r.estadio.replace('res', ' resecable').replace('nores', ' no resecable')}</strong>`;
      s += `<br><strong>Imagen</strong><br>${r.imagen.map(i => '&bull; ' + i).join('<br>')}`;
      s += `<br><strong>Estudio molecular</strong><br>${r.molecular.map(i => '&bull; ' + i).join('<br>')}`;
      s += `<br><strong>LDH.</strong> ${r.ldh}`;
      if (r.centinelaPos && !['IIB', 'IIC', 'IIIres', 'IIInores', 'IV'].includes(r.estadio)) s += '<br><span style="color:#8a5a1a;">El centinela positivo obliga a la estadificación completa ANTES de añadir tratamiento, al margen de lo que dijera el estadio del primario.</span>';
      if (r.sintomaNeuro) s += '<br><span style="color:#8c3a34;">Síntoma neurológico nuevo en un paciente con melanoma: resonancia cerebral. El melanoma es uno de los tumores que más metastatiza al sistema nervioso central y la octava edicion le dio categoría propia (M1d).</span>';
      if (!r.imagenRutina) s += '<br><span style="opacity:.75;font-size:12.5px;">Pedir TC o PET-TC en el estadio I o IIA no mejora nada y multiplica los hallazgos incidentales.</span>';
      return s;
    },
    fragment: r => `estudio de extensión de estadio ${r.estadio}${r.imagenRutina ? ' con imagen completa' : ' sin imagen de rutina'}`
  },

  {
    key: 'primera-linea', title: 'Primera línea en enfermedad avanzada', accent: '#7a3a6b',
    subtitle: 'El orden importa más que la lista',
    incompleteMsg: 'Elige el estado de BRAF.',
    fields: [
      { name: 'braf', id: 'mel-pl-braf', type: 'select', label: 'Estado molecular', options: [
        { value: '', label: 'Elegir...' },
        { value: 'v600e', label: 'BRAF V600E' },
        { value: 'v600k', label: 'BRAF V600K' },
        { value: 'nras', label: 'NRAS mutado, BRAF nativo' },
        { value: 'nativo', label: 'BRAF nativo o desconocido' }
      ] },
      { name: 'inmuno', id: 'mel-pl-inm', type: 'select', label: '¿Es candidato a inmunoterapia?', options: [
        { value: 'si', label: 'Si' },
        { value: 'no', label: 'No: contraindicación o no disponible' }
      ], row: 'pl1' },
      { name: 'pdl1', id: 'mel-pl-pdl1', type: 'select', label: 'PD-L1 tumoral', options: [
        { value: 'nd', label: 'No consta' },
        { value: 'menor1', label: 'Menor del 1%' },
        { value: 'mayor1', label: 'Igual o mayor del 1%' }
      ], row: 'pl1' },
      { name: 'urge', id: 'mel-pl-urge', type: 'checkbox', label: 'Enfermedad agresiva o sintomática: hace falta respuesta RÁPIDA' },
      { name: 'ldhAlta', id: 'mel-pl-ldh', type: 'checkbox', label: 'LDH mayor del doble del limite alto de la normalidad' },
      { name: 'higado', id: 'mel-pl-hig', type: 'checkbox', label: 'Metástasis hepáticas' },
      { name: 'cerebro', id: 'mel-pl-cer', type: 'select', label: 'Metástasis cerebrales', options: [
        { value: 'no', label: 'No hay' },
        { value: 'asint', label: 'Si, asintomáticas' },
        { value: 'sint10', label: 'Si, sintomáticas con menos de 10 mg de prednisolona al dia' },
        { value: 'sintmas', label: 'Si, sintomáticas con más de 10 mg de prednisolona al dia' }
      ] },
      { name: 'toxicidadPreocupa', id: 'mel-pl-tox', type: 'checkbox', label: 'La toxicidad preocupa: edad, comorbilidad o antecedente autoinmune' },
      { type: 'note', text: 'El ensayo clínico es la opción preferida en todos los escenarios de esta calculadora (nivel V, grado A).' }
    ],
    compute(v) {
      if (!v.braf) return null;
      const braf = v.braf;
      const dirigidaPosible = braf === 'v600e' || braf === 'v600k';
      const inmuno = (v.inmuno || 'si') === 'si';
      const cerebro = v.cerebro || 'no';
      let principal, motivo;
      const extras = [];
      if (!inmuno) {
        if (dirigidaPosible) {
          principal = 'Inhibidor de BRAF con inhibidor de MEK';
          motivo = 'Sin opción de inmunoterapia y con mutación de BRAF V600: dabrafenib-trametinib, vemurafenib-cobimetinib o encorafenib-binimetinib (nivel I, grado A). La combinación supera al inhibidor de BRAF solo y reduce sus efectos cutáneos y los carcinomas espinocelulares.';
          extras.push('Si el paciente no puede recibir un inhibidor de MEK (cardiopatía, sangrado cerebral reciente, desprendimiento de retina), encorafenib en monoterapia es una opción (nivel II, grado B), no aprobada.');
        } else {
          principal = 'Ensayo clínico, y si no hay, quimioterapia';
          motivo = 'Sin inmunoterapia y sin mutación de BRAF las opciones aprobadas se agotan: el ensayo clínico es la primera elección. La quimioterapia no aporta beneficio en supervivencia.';
          if (braf === 'nras') extras.push('En el melanoma con NRAS mutado, binimetinib en monoterapia puede ofrecerse a quien no se beneficio de un anti PD-1 previo (nivel III, grado C), sin beneficio en supervivencia y sin aprobacion europea.');
        }
      } else if (cerebro === 'asint') {
        principal = 'Nivolumab con ipilimumab, más valoración de radiocirugía estereotáctica';
        motivo = 'Metástasis cerebrales asintomáticas: la combinación de entrada es la preferida (nivel II, grado A), con respuestas intracraneales del 51 al 54%. Todo paciente con afectación del sistema nervioso central debe valorarse para radiocirugía, y es mejor pronto y concurrente que como rescate.';
      } else if (cerebro === 'sint10') {
        principal = dirigidaPosible ? 'Inhibidor de BRAF con inhibidor de MEK, o nivolumab con ipilimumab' : 'Nivolumab con ipilimumab';
        motivo = 'Metástasis cerebrales sintomáticas con menos de 10 mg de prednisolona al dia: las dos vías están recomendadas con nivel III y grado A. Hay que discutir neurocirugía si una lesión accesible explica los síntomas, porque dejar al paciente asintomático abre la puerta a la inmunoterapia combinada.';
      } else if (cerebro === 'sintmas') {
        principal = 'Ensayo clínico; terapia dirigida si hay mutación de BRAF';
        motivo = 'Metástasis cerebrales sintomáticas con MÁS de 10 mg de prednisolona al dia y sin opción de tratamiento local: la eficacia de la inmunoterapia cae en este escenario. Caben el ensayo clínico, la terapia dirigida si hay mutación, nivolumab con ipilimumab, o quimioterapia si no hay mutación.';
      } else if (v.urge && dirigidaPosible) {
        principal = 'Inducción con inhibidor de BRAF y de MEK 8 a 12 semanas, y después inmunoterapia';
        motivo = 'Enfermedad agresiva que necesita respuesta rápida, con mutación de BRAF: la combinación de inmunoterapia tarda en responder. La inducción dirigida corta seguida de ipilimumab con nivolumab (esquema de SECOMBIT brazo C o EBIN brazo B) es la salida (nivel II, grado C).';
        if (v.ldhAlta || v.higado) extras.push('La LDH mayor del doble del limite alto y las metástasis hepáticas son justamente los dos subgrupos en los que el ensayo EBIN encontró beneficio de la inducción dirigida.');
      } else if (v.toxicidadPreocupa) {
        principal = 'Anti PD-1 en monoterapia: nivolumab o pembrolizumab';
        motivo = 'Cuando la toxicidad preocupa, la monoterapia es una primera línea recomendada con nivel I y grado A: los efectos adversos de grado 3-4 fueron del 16,3% con nivolumab solo frente al 55,0% de la combinación.';
        extras.push('Existe una pauta alternativa de nivolumab 3 mg/kg con ipilimumab 1 mg/kg de menor toxicidad, pero el ensayo que la evaluo estaba diseñado para seguridad y no para eficacia, de modo que no se recomienda de forma general.');
        if (v.pdl1 === 'menor1') extras.push('Con PD-L1 menor del 1%, nivolumab con relatlimab es la otra alternativa de menor toxicidad que la combinación con ipilimumab: la mediana de supervivencia libre de progresión fue de 10,1 frente a 4,6 meses con nivolumab solo.');
      } else {
        principal = 'Nivolumab con ipilimumab';
        motivo = 'Es la opción preferida para todos, con mutación de BRAF o sin ella, siempre que se pueda administrar con seguridad los primeros meses (nivel I, grado A). A 10 años de CheckMate 067, la mediana de supervivencia global fue de 71,9 meses con la combinación frente a 36,9 con nivolumab solo.';
        if (dirigidaPosible) extras.push('En DREAMSEQ, empezar por la combinación y reservar dabrafenib-trametinib dio una supervivencia global a 2 años del 71,8% frente al 51,5% de la secuencia inversa: la mitad de los que progresaron con terapia dirigida no llegaron a recibir la inmunoterapia.');
        if (v.pdl1 === 'menor1') extras.push('Con PD-L1 menor del 1% también cabe nivolumab con relatlimab, que es la única situación en la que la agencia europea lo aprobo.');
      }
      if (braf === 'v600k' && dirigidaPosible) extras.push('Aviso del V600K: en adyuvancia NO debe ofrecerse dabrafenib-trametinib por el posible perjuicio sobre la supervivencia global visto en COMBI-AD (nivel II, grado D). Los datos retrospectivos sugieren que el V600K se beneficia más de la inmunoterapia que de la terapia dirigida.');
      if (v.pdl1 === 'nd') extras.push('Conviene informar el PD-L1: no sirve para excluir la respuesta al anti PD-1, pero es lo que condiciona el acceso a nivolumab con relatlimab en Europa.');
      return { principal, motivo, extras, braf, cerebro, inmuno };
    },
    format(r) {
      let s = `<strong style="color:#7a3a6b;font-size:14.5px;">${r.principal}</strong>`;
      s += `<br><span style="opacity:.9;">${r.motivo}</span>`;
      if (r.extras.length) s += `<div style="margin-top:10px;font-size:12.5px;opacity:.9;">${r.extras.map(e => '&bull; ' + e).join('<br>')}</div>`;
      s += '<br><span style="opacity:.75;font-size:12.5px;">En todos los escenarios, el ensayo clínico es la opción preferida cuando existe, y la decisión final se toma en comite considerando el tratamiento neoadyuvante o adyuvante previo y cuando aparecio la recidiva.</span>';
      return s;
    },
    fragment: r => `primera línea: ${r.principal.toLowerCase()}`
  }
];

export const combinedNote = {
  title: 'Del informe de patología a la conducta', accent: '#4a3a2e',
  subtitle: 'Encadena las cuatro calculadoras del tema',
  items: ['ajcc8-melanoma', 'margen-centinela', 'estudio-extension', 'primera-linea'],
  build(results, missing) {
    const partes = [];
    const a = results['ajcc8-melanoma'];
    const m = results['margen-centinela'];
    const e = results['estudio-extension'];
    const p = results['primera-linea'];
    if (a) partes.push(`La estadificación es <strong>${a.T} ${a.N} ${a.M}</strong>, es decir un <strong>estadio ${a.estadio}</strong>.`);
    if (m) partes.push(`De ese grosor salen las dos decisiones quirúrgicas: margen de <strong>${m.margen}</strong> y centinela <strong>${m.centinela === 'indicado' ? 'indicado' : (m.centinela === 'no' ? 'no procede' : 'a valorar')}</strong>.`);
    if (e) partes.push(`El estudio de extensión que corresponde ${e.imagenRutina ? 'incluye imagen completa con ecografía, TC o PET-TC y resonancia cerebral' : 'es clínico, sin imagen de rutina'}.`);
    if (p) partes.push(`Si la enfermedad es avanzada, la primera línea que sale de los datos introducidos es <strong>${p.principal.toLowerCase()}</strong>.`);
    let html = partes.join(' ');
    if (!html) html = 'Rellena al menos una de las calculadoras del tema.';
    else html += ' <span style="opacity:.75;">Toda la cadena arranca en una sola cifra del informe: el grosor de Breslow.</span>';
    if (missing.length) html += `<div style="margin-top:10px;color:#b0453d;font-size:12.5px;">Faltan datos en: ${missing.join(', ')}.</div>`;
    return html;
  }
};

export default { calculators, combinedNote };
