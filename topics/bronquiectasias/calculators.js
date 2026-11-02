// topics/bronquiectasias/calculators.js
// 4 herramientas:
// - bsi: indice de gravedad de bronquiectasias (Chalmers 2014), de 0 a 26 puntos.
// - etiologia-bronquiectasias: comprueba el estudio minimo que se pide a todos y sugiere el
//   estudio dirigido segun las pistas clinicas y la distribucion radiologica.
// - exacerbacion-bronquiectasias: definicion de consenso (3 de 6 sintomas durante 48 horas) y el
//   orden correcto de actuacion, incluidos los 14 dias de antibiotico.
// - pseudomonas-bronquiectasias: separa el primer aislamiento (erradicar) de la colonizacion
//   cronica (suprimir con antibiotico inhalado).
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

function puntosEdadBsi(e) {
  if (e >= 80) return 6;
  if (e >= 70) return 4;
  if (e >= 50) return 2;
  return 0;
}
function puntosFev1Bsi(f) {
  if (f < 30) return 3;
  if (f < 50) return 2;
  if (f <= 80) return 1;
  return 0;
}
function puntosMrcBsi(m) {
  if (m === '5') return 3;
  if (m === '4') return 2;
  return 0;
}

export const calculators = [
  {
    key: 'bsi', title: 'Índice de gravedad de bronquiectasias', accent: '#2e6b8a',
    subtitle: 'Nueve variables que predicen mortalidad, ingresos y exacerbaciones',
    incompleteMsg: 'Introduce la edad, el índice de masa corporal y el FEV1, y completa el resto de campos.',
    fields: [
      { name: 'edad', id: 'br-bsi-e', type: 'number', step: '1', label: 'Edad (años)', placeholder: 'ej. 68', row: 'r1' },
      { name: 'imc', id: 'br-bsi-imc', type: 'number', step: '0.1', label: 'Índice de masa corporal (kg/m2)', placeholder: 'ej. 21', row: 'r1' },
      { name: 'fev1', id: 'br-bsi-f', type: 'number', step: '1', label: 'FEV1 (% del predicho)', placeholder: 'ej. 55', row: 'r2' },
      { name: 'mrc', id: 'br-bsi-mrc', type: 'select', label: 'Disnea (Medical Research Council)', row: 'r2', options: [
        { v: '1', t: '1 · Solo con ejercicio intenso' },
        { v: '2', t: '2 · Al andar deprisa o subir una cuesta' },
        { v: '3', t: '3 · Anda más despacio que otros de su edad' },
        { v: '4', t: '4 · Para tras 100 metros o unos minutos' },
        { v: '5', t: '5 · No sale de casa o se ahoga al vestirse' }
      ] },
      { name: 'ingreso', id: 'br-bsi-ing', type: 'checkbox', label: 'INGRESO hospitalario por bronquiectasias en los últimos 2 años', row: 'r3' },
      { name: 'exac', id: 'br-bsi-ex', type: 'checkbox', label: '3 o más exacerbaciones en los últimos 12 meses', row: 'r3' },
      { name: 'pseudo', id: 'br-bsi-ps', type: 'checkbox', label: 'Colonizacion por Pseudomonas aeruginosa', row: 'r4' },
      { name: 'otros', id: 'br-bsi-ot', type: 'checkbox', label: 'Colonizacion por otros microorganismos', row: 'r4' },
      { name: 'radio', id: 'br-bsi-rx', type: 'checkbox', label: 'Afectación de 3 o más lóbulos, o bronquiectasias quísticas' },
      { type: 'note', text: 'Los dos elementos de mayor peso son el ingreso previo (5 puntos) y la colonizacion por Pseudomonas (3 puntos), lo que refleja que la historia reciente del paciente y su microbiologia pesan más que cualquier cifra aislada. El índice predice mortalidad, ingresos y exacerbaciones, y sirve para priorizar el seguimiento y la intensidad del tratamiento, no para sustituir el juicio clínico.' }
    ],
    compute(v) {
      if (v.edad == null || v.imc == null || v.fev1 == null) return null;
      if (!(v.edad >= 15 && v.edad <= 110)) return { invalido: true };
      if (!(v.imc > 8 && v.imc <= 80)) return { invalido: true };
      if (!(v.fev1 > 0 && v.fev1 <= 160)) return { invalido: true };
      const det = [];
      let p = 0;
      const pe = puntosEdadBsi(v.edad);
      if (pe) { p += pe; det.push(`edad de ${v.edad} años (+${pe})`); }
      if (v.imc < 18.5) { p += 2; det.push('índice de masa corporal por debajo de 18.5 (+2)'); }
      const pf = puntosFev1Bsi(v.fev1);
      if (pf) { p += pf; det.push(`FEV1 del ${v.fev1}% (+${pf})`); }
      if (v.ingreso) { p += 5; det.push('ingreso en los últimos 2 años (+5)'); }
      if (v.exac) { p += 2; det.push('3 o más exacerbaciones en el último año (+2)'); }
      const pm = puntosMrcBsi(v.mrc);
      if (pm) { p += pm; det.push(`disnea de grado ${v.mrc} (+${pm})`); }
      if (v.pseudo) { p += 3; det.push('colonizacion por Pseudomonas (+3)'); }
      if (v.otros) { p += 1; det.push('colonizacion por otros microorganismos (+1)'); }
      if (v.radio) { p += 1; det.push('3 o más lóbulos afectados o forma quística (+1)'); }
      let grav;
      if (p <= 4) grav = 'LEVE';
      else if (p <= 8) grav = 'MODERADA';
      else grav = 'GRAVE';
      return { p, grav, det, pseudo: !!v.pseudo, exac: !!v.exac, imc: v.imc, fev1: v.fev1 };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: edad de 15 a 110 años, índice de masa corporal de 8 a 80 y FEV1 del 1 al 160% del predicho.';
      let s = `<strong>${r.p} de 26 puntos: gravedad ${r.grav}.</strong> `;
      if (r.grav === 'LEVE') s += '<span style="color:#3f6b52;">Mortalidad y riesgo de ingreso bajos.</span> Seguimiento habitual, con el foco en la fisioterapia respiratoria diaria, el ejercicio, las vacunas y el tratamiento de la causa si se identifico.';
      else if (r.grav === 'MODERADA') s += '<span style="color:#8a6a1f;">Riesgo intermedio.</span> Conviene revisar de forma activa lo que se puede optimizar: técnica de fisioterapia, adherencia, estado nutricional, causa no tratada y estudio microbiológico actualizado.';
      else s += '<span style="color:#8c3a34;">Riesgo alto de mortalidad, ingresos y exacerbaciones.</span> Seguimiento estrecho en consulta especializada, revisión completa del tratamiento y valoración de escalada terapéutica. En la enfermedad muy avanzada, valorar la remisión a una unidad de trasplante antes de que sea tarde.';
      if (r.det.length) s += `<br><span style="opacity:.75;">Aportan: ${r.det.join(', ')}.</span>`;
      if (r.exac) s += '<br><strong style="color:#8a6a1f;">Con 3 o más exacerbaciones al año</strong>, esta indicado valorar un MACROLIDO a largo plazo, siempre tras DESCARTAR micobacterias no tuberculosas con cultivos de esputo y comprobar el QT y la audición.';
      if (r.pseudo) s += '<br><strong style="color:#8c3a34;">Con colonizacion por Pseudomonas</strong> y exacerbaciones frecuentes, esta indicado valorar un ANTIBIÓTICO INHALADO a largo plazo, con la primera dosis supervisada por el riesgo de broncoespasmo.';
      if (r.imc < 18.5) s += '<br><strong style="color:#8a6a1f;">El bajo peso puntúa y además es modificable</strong>: la valoración nutricional forma parte del tratamiento y no es un complemento.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `${r.p}/26 puntos, gravedad ${r.grav.toLowerCase()}`
  },

  {
    key: 'etiologia-bronquiectasias', title: 'Estudio etiológico de las bronquiectasias', accent: '#8a6a1f',
    subtitle: 'Lo que se pide a todos, y lo que se pide según las pistas',
    incompleteMsg: 'Marca las pruebas ya realizadas y las pistas clínicas presentes.',
    fields: [
      { name: 'hemo', id: 'br-et-he', type: 'checkbox', label: 'Hecho: hemograma con fórmula', row: 'r1' },
      { name: 'ig', id: 'br-et-ig', type: 'checkbox', label: 'Hecho: inmunoglobulinas séricas (IgG, IgA, IgM)', row: 'r1' },
      { name: 'asper', id: 'br-et-as', type: 'checkbox', label: 'Hecho: estudio de Aspergillus (IgE total, IgE específica, precipitinas)', row: 'r2' },
      { name: 'cultivo', id: 'br-et-cu', type: 'checkbox', label: 'Hecho: cultivo de esputo INCLUYENDO micobacterias', row: 'r2' },
      { name: 'distrib', id: 'br-et-di', type: 'select', label: 'Distribución radiológica predominante', options: [
        { v: 'difusa', t: 'Difusa o sin predominio claro' },
        { v: 'sup', t: 'Lóbulos superiores' },
        { v: 'inf', t: 'Lóbulos inferiores' },
        { v: 'medio', t: 'Lóbulo medio y lingula' },
        { v: 'local', t: 'Una sola zona (localizada)' }
      ] },
      { name: 'joven', id: 'br-et-jo', type: 'checkbox', label: 'Inicio en edad joven, infertilidad masculina, malabsorción o pancreatitis', row: 'r3' },
      { name: 'orl', id: 'br-et-orl', type: 'checkbox', label: 'Otitis media crónica en la infancia, rinosinusitis persistente o situs inversus', row: 'r3' },
      { name: 'reuma', id: 'br-et-re', type: 'checkbox', label: 'Artritis, sequedad de mucosas o enfermedad inflamatoria intestinal', row: 'r4' },
      { name: 'enfisema', id: 'br-et-en', type: 'checkbox', label: 'Enfisema asociado en la tomografía', row: 'r4' },
      { type: 'note', text: 'Buscar la causa cambia el tratamiento en una proporción importante de los pacientes: una inmunodeficiencia se sustituye, una aspergilosis se trata, una fibrosis quística tiene moduladores del CFTR y una micobacteria contraindica el macrolido en monoterapia. Etiquetar unas bronquiectasias de idiopáticas es una conclusion legitima, pero solo después de haber hecho el estudio mínimo.' }
    ],
    compute(v) {
      const faltan = [];
      if (!v.hemo) faltan.push('hemograma con fórmula');
      if (!v.ig) faltan.push('INMUNOGLOBULINAS séricas');
      if (!v.asper) faltan.push('estudio de Aspergillus');
      if (!v.cultivo) faltan.push('cultivo de esputo con MICOBACTERIAS');
      const dirigido = [];
      if (v.joven || v.distrib === 'sup') dirigido.push('cloro en sudor y estudio genético del gen CFTR, por la sospecha de fibrosis quística');
      if (v.orl) dirigido.push('óxido nítrico nasal y estudio de la función ciliar, por la sospecha de discinesia ciliar primaria');
      if (v.reuma) dirigido.push('factor reumatoide, anticuerpos anti-péptido citrulinado y anticuerpos anti-Ro y anti-La');
      if (v.enfisema) dirigido.push('concentración de alfa-1-antitripsina y fenotipo');
      if (v.distrib === 'medio') dirigido.push('cultivos SERIADOS para micobacterias no tuberculosas: la afectación de lóbulo medio y lingula es su patrón característico');
      if (v.distrib === 'inf') dirigido.push('valoración de aspiración y de reflujo gastroesofágico, además de la inmunodeficiencia');
      const broncoscopia = v.distrib === 'local';
      return { faltan, dirigido, broncoscopia, completo: faltan.length === 0, distrib: v.distrib };
    },
    format: r => {
      let s = '';
      if (r.completo) {
        s += '<strong style="color:#3f6b52;">El estudio mínimo esta completo.</strong> Hemograma, inmunoglobulinas, estudio de Aspergillus y cultivo de esputo con micobacterias son las cuatro pruebas que se piden a todos los pacientes. ';
      } else {
        s += `<strong style="color:#8c3a34;">Falta parte del estudio que se pide a TODOS</strong>: ${r.faltan.join('; ')}. Las inmunoglobulinas son la omisión más costosa, porque la inmunodeficiencia común variable es una causa TRATABLE con sustitución que se diagnostica con años de retraso. Y el cultivo de micobacterias no se hace si no se solicita de forma explícita. `;
      }
      if (r.broncoscopia) {
        s += '<br><strong style="color:#8c3a34;">Afectación LOCALIZADA en una sola zona: indicación de BRONCOSCOPIA.</strong> Hay que descartar obstrucción bronquial por cuerpo extraño, tumor endobronquial o estenosis. Es una de las pocas indicaciones claras de broncoscopia en este tema y no debe posponerse.';
      }
      if (r.dirigido.length) {
        s += `<br><strong style="color:#8a6a1f;">Estudio dirigido sugerido por las pistas presentes:</strong><br>${r.dirigido.map(x => '&nbsp;· ' + x).join('<br>')}`;
      } else if (r.completo && !r.broncoscopia) {
        s += 'Sin pistas que orienten hacia un estudio dirigido concreto. Si tras el estudio completo no aparece la causa, la etiqueta de idiopáticas es legitima, y conviene reevaluarla si el curso clínico cambia.';
      }
      s += '<br><span style="opacity:.75;">Y en paralelo, lo que no depende del estudio: fisioterapia respiratoria diaria, vacunación, ejercicio y valoración nutricional.</span>';
      return s;
    },
    fragment: r => (r.completo ? 'estudio mínimo completo' : `faltan ${r.faltan.length} prueba${r.faltan.length > 1 ? 's' : ''} del estudio mínimo`) + (r.broncoscopia ? ' + broncoscopia indicada' : '')
  },

  {
    key: 'exacerbacion-bronquiectasias', title: 'Exacerbación de bronquiectasias', accent: '#8c3a34',
    subtitle: 'Definición de consenso, orden de actuacion y duración del antibiótico',
    incompleteMsg: 'Marca los síntomas que han empeorado e indica si el deterioro lleva 48 horas o más.',
    fields: [
      { name: 'tos', id: 'br-ex-tos', type: 'checkbox', label: 'Aumento de la TOS', row: 'r1' },
      { name: 'volumen', id: 'br-ex-vol', type: 'checkbox', label: 'Aumento del VOLUMEN o cambio de consistencia del esputo', row: 'r1' },
      { name: 'purulencia', id: 'br-ex-pur', type: 'checkbox', label: 'Aumento de la PURULENCIA del esputo', row: 'r2' },
      { name: 'disnea', id: 'br-ex-dis', type: 'checkbox', label: 'Aumento de la DISNEA o peor tolerancia al ejercicio', row: 'r2' },
      { name: 'fatiga', id: 'br-ex-fat', type: 'checkbox', label: 'FATIGA o malestar general', row: 'r3' },
      { name: 'hemoptisis', id: 'br-ex-hem', type: 'checkbox', label: 'HEMOPTISIS nueva o aumentada', row: 'r3' },
      { name: 'duracion', id: 'br-ex-dur', type: 'select', label: 'Duración del deterioro', options: [
        { v: 'si', t: '48 horas o más' },
        { v: 'no', t: 'Menos de 48 horas' }
      ] },
      { name: 'cultivo', id: 'br-ex-cu', type: 'checkbox', label: 'Ya se ha recogido cultivo de esputo (antes de iniciar el antibiótico)', row: 'r4' },
      { name: 'pseudo', id: 'br-ex-ps', type: 'checkbox', label: 'El paciente tiene aislamientos previos de Pseudomonas aeruginosa', row: 'r4' },
      { type: 'note', text: 'La definición de consenso evita tratar como exacerbación cualquier empeoramiento de un dia. La ausencia de fiebre NO descarta una exacerbación, y de hecho es frecuente que falte, lo que hace que se infravalore. La radiografía sirve para descartar neumonía u otra complicación, no para diagnosticar la exacerbación.' }
    ],
    compute(v) {
      const claves = [
        ['tos', 'tos'],
        ['volumen', 'volumen o consistencia del esputo'],
        ['purulencia', 'purulencia del esputo'],
        ['disnea', 'disnea o tolerancia al ejercicio'],
        ['fatiga', 'fatiga o malestar'],
        ['hemoptisis', 'hemoptisis']
      ];
      const presentes = claves.filter(([k]) => v[k]).map(([, t]) => t);
      const sostenido = v.duracion !== 'no';
      const cumple = presentes.length >= 3 && sostenido;
      return { n: presentes.length, presentes, sostenido, cumple, cultivo: !!v.cultivo, pseudo: !!v.pseudo, hemoptisis: !!v.hemoptisis };
    },
    format: r => {
      let s = `<strong>${r.n} de 6 síntomas${r.sostenido ? ', con deterioro de 48 horas o más' : ', pero de menos de 48 horas'}.</strong> `;
      if (!r.cumple) {
        if (r.n < 3 && !r.sostenido) s += '<span style="color:#3f6b52;">NO cumple la definición de exacerbación</span> ni por número de síntomas ni por duración. ';
        else if (r.n < 3) s += '<span style="color:#3f6b52;">NO cumple la definición</span>: hacen falta 3 o más síntomas. ';
        else s += '<span style="color:#8a6a1f;">Cumple el criterio de síntomas pero todavía no el de duración</span>: hacen falta 48 horas de deterioro sostenido. ';
        s += 'Eso no significa no hacer nada: reforzar la fisioterapia respiratoria, revisar la adherencia y reevaluar en 24 a 48 horas. Si el deterioro se mantiene o progresa, se trata como exacerbación.';
        if (r.hemoptisis) s += '<br><strong style="color:#8c3a34;">Hay hemoptisis</strong>, que se valora aparte de la definición: si es amenazante, contactar con radiología intervencionista para embolización de arterias bronquiales.';
        return s;
      }
      s += '<strong style="color:#8c3a34;">CUMPLE la definición de exacerbación</strong> (' + r.presentes.join(', ') + ').';
      s += '<br><strong>1.</strong> ';
      if (r.cultivo) s += '<span style="color:#3f6b52;">Cultivo de esputo ya recogido.</span> Bien: es el gesto que más se salta y el que más cuesta después, porque una vez iniciado el antibiótico el cultivo pierde valor.';
      else s += '<strong style="color:#8c3a34;">RECOGER CULTIVO DE ESPUTO AHORA, antes del antibiótico.</strong> Es el paso que más se omite. Sin el, el paciente se queda sin mapa microbiológico para la próxima exacerbación.';
      s += '<br><strong>2.</strong> Antibiótico dirigido al ÚLTIMO AISLAMIENTO del propio paciente mientras llega el cultivo actual';
      s += r.pseudo ? ', y en este caso <strong style="color:#8c3a34;">cubriendo Pseudomonas desde el inicio</strong> por sus aislamientos previos.' : '. Revisar el histórico de cultivos antes de elegir.';
      s += '<br><strong>3. DURACIÓN: 14 DÍAS</strong>, no 5 ni 7. La biopelicula y la carga bacteriana alta de una via aérea dañada no se resuelven con pautas cortas, y acortarlas deja al paciente recayendo a las pocas semanas.';
      s += '<br><strong>4.</strong> INTENSIFICAR la fisioterapia respiratoria, que en la exacerbación se hace más veces al dia, no menos. Y radiografía de tórax para descartar neumonía u otra complicación.';
      if (r.hemoptisis) s += '<br><strong style="color:#8c3a34;">Con hemoptisis</strong>: valorar su magnitud y, si es amenazante, contactar con radiología intervencionista para embolización de arterias bronquiales.';
      s += '<br><span style="opacity:.75;">Y después: contar esta exacerbación. Si es la tercera del año, cambia el plan crónico y hay que valorar macrolido a largo plazo, siempre tras descartar micobacterias.</span>';
      return s;
    },
    fragment: r => r.cumple ? `exacerbación (${r.n}/6 síntomas): cultivo y 14 días de antibiótico` : `${r.n}/6 síntomas: no cumple la definición`
  },

  {
    key: 'pseudomonas-bronquiectasias', title: 'Pseudomonas: erradicar o suprimir', accent: '#7a2f5c',
    subtitle: 'El primer aislamiento no se maneja igual que la colonizacion crónica',
    incompleteMsg: 'Indica cuantos cultivos positivos hay y como están separados en el tiempo.',
    fields: [
      { name: 'cultivos', id: 'br-ps-cu', type: 'number', step: '1', label: 'Cultivos positivos para Pseudomonas en los últimos 12 meses', placeholder: 'ej. 2', row: 'r1' },
      { name: 'separados', id: 'br-ps-se', type: 'select', label: 'Separación entre los cultivos positivos', row: 'r1', options: [
        { v: 'na', t: 'No procede (solo hay uno)' },
        { v: 'si', t: 'Separados 3 meses o más' },
        { v: 'no', t: 'Separados menos de 3 meses' }
      ] },
      { name: 'erradicacion', id: 'br-ps-er', type: 'select', label: 'Intentos previos de erradicación', options: [
        { v: 'ninguno', t: 'Ninguno' },
        { v: 'fallido', t: 'Se intento y no funciono' },
        { v: 'exito', t: 'Se intento y los cultivos se negativizaron' }
      ] },
      { name: 'exac', id: 'br-ps-ex', type: 'checkbox', label: '3 o más exacerbaciones en el último año', row: 'r2' },
      { name: 'inhalado', id: 'br-ps-in', type: 'checkbox', label: 'Ya recibe antibiótico inhalado a largo plazo', row: 'r2' },
      { type: 'note', text: 'Pseudomonas forma biopelicula sobre el epitelio dañado, una matriz que la protege de los antibióticos y del sistema inmunitario. Por eso, una vez establecida la colonizacion crónica, eliminarla resulta prácticamente imposible y el objetivo pasa a ser suprimir la carga bacteriana. El PRIMER aislamiento es una oportunidad terapéutica que no se repite.' }
    ],
    compute(v) {
      if (v.cultivos == null) return null;
      if (!(v.cultivos >= 0 && v.cultivos <= 50)) return { invalido: true };
      const cronica = v.cultivos >= 2 && v.separados === 'si';
      let estado;
      if (v.cultivos === 0) estado = 'sin-aislamiento';
      else if (v.cultivos === 1) estado = 'primer-aislamiento';
      else if (cronica) estado = 'cronica';
      else estado = 'repetido-no-cronico';
      return { estado, cultivos: v.cultivos, cronica, erradicacion: v.erradicacion, exac: !!v.exac, inhalado: !!v.inhalado };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: el número de cultivos positivos debe estar entre 0 y 50.';
      const cola = '<br><span style="opacity:.75;">Y en cualquier escenario: reforzar el aclaramiento de secreciones, que es lo que más condiciona el éxito de toda estrategia antibiótica, y tratar el reflujo o la rinosinusitis si contribuyen.</span>';
      switch (r.estado) {
        case 'sin-aislamiento':
          return 'Sin aislamientos de Pseudomonas. Mantener el <strong>cultivo de esputo periódico también en fase estable</strong>, no solo en las exacerbaciones: detectar el PRIMER aislamiento a tiempo es lo que permite intentar erradicarla, y esa oportunidad no se repite una vez establecida la biopelicula.' + cola;
        case 'primer-aislamiento':
          return `<strong style="color:#8c3a34;">PRIMER AISLAMIENTO: intentar la ERRADICACIÓN.</strong> Es la situación con más impacto potencial de todo el manejo microbiológico. La pauta habitual es una fluoroquinolona oral con actividad frente a Pseudomonas durante varias semanas, sola o combinada con un antibiótico inhalado, seguida de <strong>cultivos de control</strong> para comprobar si ha funcionado. ${r.erradicacion === 'fallido' ? 'Consta un intento previo fallido: valorar una segunda estrategia con el equipo de referencia antes de darla por crónica.' : ''}` + cola;
        case 'cronica':
          {
            let s = `<strong style="color:#7a2f5c;">COLONIZACION CRÓNICA</strong> (${r.cultivos} cultivos positivos separados 3 meses o más en 12 meses). Aporta 3 puntos en el índice de gravedad y se asocia a más exacerbaciones, peor función pulmonar y mayor mortalidad. El objetivo ya no es erradicar sino SUPRIMIR la carga bacteriana. `;
            if (r.exac && !r.inhalado) s += '<br><strong style="color:#8c3a34;">Con 3 o más exacerbaciones al año y sin antibiótico inhalado: esta indicado iniciarlo</strong> (colistina, tobramicina o gentamicina), con la <strong>PRIMERA DOSIS SUPERVISADA</strong> por el riesgo de broncoespasmo y con broncodilatador previo.';
            else if (r.exac && r.inhalado) s += '<br>Ya recibe antibiótico inhalado y sigue con 3 o más exacerbaciones al año: revisar la ADHERENCIA y la técnica antes de cambiar nada, y después valorar cambio de antibiótico inhalado, añadir un macrolido a largo plazo (tras descartar micobacterias) o remitir a una unidad especializada.';
            else s += '<br>Sin exacerbaciones frecuentes por ahora, la indicación de antibiótico inhalado no esta establecida: se mantiene el aclaramiento, la vacunación y el seguimiento con cultivos, y se reevalua si aumentan las exacerbaciones.';
            s += '<br>En cada exacerbación, <strong>cubrir Pseudomonas desde el inicio</strong> y tratar 14 días.';
            return s + cola;
          }
        default:
          return `<strong style="color:#8a6a1f;">Hay ${r.cultivos} cultivos positivos, pero no cumplen el criterio de colonizacion crónica</strong>, que exige 2 o más separados al menos 3 meses en un periodo de 12. Puede tratarse de una infección persistente en el contexto de una exacerbación o de aislamientos agrupados en el tiempo. Corresponde repetir cultivos separados para definir el estado real, y valorar un intento de erradicación si todavía no se ha hecho ninguno, porque la ventana sigue abierta.` + cola;
      }
    },
    fragment: r => {
      if (r.invalido) return 'valores no validos';
      const m = { 'sin-aislamiento': 'sin aislamientos: cultivos periódicos', 'primer-aislamiento': 'primer aislamiento: intentar erradicar', cronica: 'colonizacion crónica: valorar antibiótico inhalado', 'repetido-no-cronico': 'aislamientos repetidos sin criterio de cronicidad' };
      return m[r.estado];
    }
  }
];
