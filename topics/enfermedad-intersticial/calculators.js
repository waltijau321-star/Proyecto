// topics/enfermedad-intersticial/calculators.js
// 4 herramientas:
// - patron-restrictivo: confirma la restriccion con la capacidad pulmonar total y la separa en
//   intrinseca o extrinseca con la DLCO y la KCO, incluyendo la caida postural de la FVC.
// - patron-tcar: clasifica la tomografia de alta resolucion en los cuatro patrones de la guia de
//   2022 y dice si hace falta muestra histologica.
// - fibrosis-progresiva: criterios de fibrosis pulmonar progresiva (2 de 3 en el ultimo a&#241;o).
// - gap: indice GAP de mortalidad en la fibrosis pulmonar idiopatica (Ley 2012).
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

function puntosEdadGap(e) {
  if (e > 65) return 2;
  if (e >= 61) return 1;
  return 0;
}
function puntosFvcGap(f) {
  if (f < 50) return 2;
  if (f <= 75) return 1;
  return 0;
}
function puntosDlcoGap(d) {
  if (d <= 35) return 2;
  if (d <= 55) return 1;
  return 0;
}

export const calculators = [
  {
    key: 'patron-restrictivo', title: 'Patron restrictivo: confirmarlo y clasificarlo', accent: '#3d5a73',
    subtitle: 'Capacidad pulmonar total, DLCO y KCO, mas la caida postural de la FVC',
    incompleteMsg: 'Introduce la capacidad pulmonar total, el cociente FEV1/FVC y la DLCO en porcentaje del predicho.',
    fields: [
      { name: 'tlc', id: 'ei-pr-tlc', type: 'number', step: '1', label: 'Capacidad pulmonar total (% del predicho)', placeholder: 'ej. 68', row: 'r1' },
      { name: 'ratio', id: 'ei-pr-ratio', type: 'number', step: '0.01', label: 'Cociente FEV1/FVC posbroncodilatador', placeholder: 'ej. 0.85', row: 'r1' },
      { name: 'dlco', id: 'ei-pr-dlco', type: 'number', step: '1', label: 'DLCO corregida por hemoglobina (% del predicho)', placeholder: 'ej. 45', row: 'r2' },
      { name: 'kco', id: 'ei-pr-kco', type: 'number', step: '1', required: false, label: 'KCO o DLCO por volumen alveolar (% del predicho, opcional)', placeholder: 'ej. 110', row: 'r2' },
      { type: 'note', text: 'La DLCO debe estar CORREGIDA POR HEMOGLOBINA antes de interpretarla: la anemia la baja sin que exista ninguna enfermedad pulmonar, y no corregirla ha generado muchos estudios innecesarios. La KCO es la DLCO dividida por el volumen alveolar y afina la separacion: en la restriccion extrapulmonar el pulmon esta sano pero poco distendido, de modo que transfiere MAS por unidad de volumen.' },
      { name: 'fvcSentado', id: 'ei-pr-fvcs', type: 'number', step: '1', required: false, label: 'FVC en sedestacion (mL o % del predicho, opcional)', placeholder: 'ej. 2400', row: 'r3' },
      { name: 'fvcSupino', id: 'ei-pr-fvcd', type: 'number', step: '1', required: false, label: 'FVC en DECUBITO supino (misma unidad, opcional)', placeholder: 'ej. 1750', row: 'r3' },
      { type: 'note', text: 'La FVC medida sentado y tumbado es la prueba de cabecera de la debilidad diafragmatica y casi nadie la pide. Una caida mayor del 20% al pasar a decubito indica disfuncion diafragmatica significativa y anticipa la hipoventilacion nocturna antes de que la gasometria diurna se altere.' }
    ],
    compute(v) {
      if (v.tlc == null || v.ratio == null || v.dlco == null) return null;
      if (!(v.tlc > 10 && v.tlc <= 200) || !(v.ratio > 0 && v.ratio < 1.2) || !(v.dlco > 0 && v.dlco <= 200)) return { invalido: true };
      if (v.kco != null && !(v.kco > 0 && v.kco <= 300)) return { invalido: true };
      const obstruccion = v.ratio < 0.70;
      const restriccion = v.tlc < 80;
      let patron;
      if (restriccion && obstruccion) patron = 'MIXTO (restrictivo y obstructivo)';
      else if (restriccion) patron = 'RESTRICTIVO';
      else if (obstruccion) patron = 'OBSTRUCTIVO';
      else patron = 'sin restriccion ni obstruccion';
      const dlcoBaja = v.dlco < 80;
      let tipo = null;
      if (restriccion) {
        if (dlcoBaja) tipo = 'INTRINSECA (parenquimatosa)';
        else if (v.kco != null && v.kco >= 100) tipo = 'EXTRAPULMONAR (de la bomba), con KCO alta que lo confirma';
        else tipo = 'EXTRAPULMONAR (de la bomba)';
      }
      let caida = null;
      if (v.fvcSentado != null && v.fvcSupino != null) {
        if (!(v.fvcSentado > 0) || !(v.fvcSupino > 0)) return { invalido: true };
        caida = ((v.fvcSentado - v.fvcSupino) / v.fvcSentado) * 100;
      }
      return { patron, restriccion, obstruccion, tipo, dlcoBaja, caida, tlc: v.tlc, dlco: v.dlco, kco: v.kco == null ? null : v.kco };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: porcentajes del predicho plausibles, cociente FEV1/FVC como decimal y FVC positiva en las dos posiciones.';
      let s = `<strong>Patron ${r.patron}.</strong> Capacidad pulmonar total del ${r.tlc}% del predicho, DLCO del ${r.dlco}%${r.kco !== null ? `, KCO del ${r.kco}%` : ''}. `;
      if (!r.restriccion && !r.obstruccion) {
        s += 'Sin restriccion (la capacidad pulmonar total es del 80% o mas) ni obstruccion. Si la DLCO esta baja de forma aislada, pensar en enfermedad vascular pulmonar, anemia no corregida, enfisema incipiente o EPID muy precoz.';
        return s;
      }
      if (r.obstruccion && !r.restriccion) {
        s += 'Hay obstruccion sin restriccion: el estudio corresponde a EPOC, asma u otra enfermedad de la via aerea, no a este tema. Recordar que la hiperinsuflacion puede elevar la capacidad pulmonar total y enmascarar una restriccion coexistente.';
        return s;
      }
      s += `<strong>Restriccion ${r.tipo}.</strong> `;
      if (r.dlcoBaja) {
        s += 'Una DLCO baja con volumenes bajos indica que el problema esta en el PARENQUIMA: enfermedad intersticial difusa, sarcoidosis, neumoconiosis o EPID por farmacos. Toca tomografia de alta resolucion en inspiracion, espiracion y prono, interrogatorio exhaustivo de exposiciones, panel de autoinmunidad y revision de la medicacion, antes de llevar el caso al comite multidisciplinar.';
      } else {
        s += 'Una DLCO conservada con volumenes bajos indica que el pulmon esta SANO y que el problema esta en la bomba o en la caja: obesidad, derrame, cifoescoliosis, espondilitis, paralisis diafragmatica o enfermedad neuromuscular. ';
        if (r.kco !== null && r.kco >= 100) s += 'La KCO por encima del 100% lo confirma: el pulmon transfiere mas por unidad de volumen porque esta poco distendido. ';
        s += 'Toca exploracion neurologica, presiones respiratorias maximas, FVC en decubito y pulsioximetria nocturna.';
      }
      if (r.obstruccion) s += ' <strong>Hay ademas obstruccion</strong>: valorar la combinacion de enfisema y fibrosis, que da volumenes enga&#241;osamente conservados con DLCO desproporcionadamente baja, o una EPID sobre un obstructivo previo.';
      if (r.caida !== null) {
        s += ` <strong>Caida postural de la FVC del ${r.caida.toFixed(0)}%.</strong> `;
        s += r.caida > 20
          ? 'Por encima del 20%: indica <strong>disfuncion diafragmatica significativa</strong>. Solicitar presiones respiratorias maximas y estudio del sue&#241;o, y valorar ventilacion no invasiva domiciliaria antes de que aparezca la hipercapnia diurna.'
          : 'Por debajo del 20%, dentro de lo esperable. No descarta debilidad leve: si la sospecha persiste, medir las presiones respiratorias maximas.';
      }
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.restriccion ? `restriccion ${r.tipo}` : `patron ${r.patron}`)
  },
  {
    key: 'patron-tcar', title: 'Patron de la tomografia de alta resolucion', accent: '#6b4a7a',
    subtitle: 'Las cuatro categorias de la guia de 2022 y si hace falta biopsia',
    incompleteMsg: 'Selecciona la distribucion predominante y marca los hallazgos presentes.',
    fields: [
      { name: 'distribucion', id: 'ei-tc-dist', type: 'select', label: 'Distribucion predominante', options: [
        { value: '', label: 'Selecciona' },
        { value: 'basal', label: 'Subpleural y basal, heterogenea' },
        { value: 'superior', label: 'Predominio en lobulos superiores o medios' },
        { value: 'peribronco', label: 'Peribroncovascular' },
        { value: 'difusa', label: 'Difusa, sin predominio claro' } ] },
      { type: 'note', text: 'Hallazgos que apoyan el patron de neumonia intersticial usual.' },
      { name: 'panal', id: 'ei-tc-panal', type: 'checkbox', label: 'Panal de abeja: quistes agrupados, de pared gruesa y tama&#241;o similar, en varias capas subpleurales' },
      { name: 'reticulacion', id: 'ei-tc-ret', type: 'checkbox', label: 'Reticulacion subpleural' },
      { name: 'traccion', id: 'ei-tc-trac', type: 'checkbox', label: 'Bronquiectasias o bronquiolectasias de traccion perifericas' },
      { type: 'note', text: 'Hallazgos que apuntan a un DIAGNOSTICO ALTERNATIVO. Cualquiera de ellos, si es prominente, saca el caso del patron de neumonia intersticial usual.' },
      { name: 'vidrio', id: 'ei-tc-vid', type: 'checkbox', label: 'Vidrio deslustrado EXTENSO, mas alla de lo que acompa&#241;a a la fibrosis' },
      { name: 'mosaico', id: 'ei-tc-mos', type: 'checkbox', label: 'Mosaico con atrapamiento aereo en espiracion en tres o mas lobulos' },
      { name: 'quistes', id: 'ei-tc-qui', type: 'checkbox', label: 'Quistes no en panal, nodulos centrolobulillares profusos o consolidacion' },
      { name: 'perilinfatico', id: 'ei-tc-peri', type: 'checkbox', label: 'Nodulos de distribucion perilinfatica o adenopatias hiliares simetricas' },
      { type: 'note', text: 'El patron NO es el diagnostico: es lo que decide si hace falta muestra histologica y hacia donde se dirige el estudio. La lectura de la tomografia y la decision final deben pasar por el COMITE MULTIDISCIPLINAR, que es el patron de referencia del diagnostico de las EPID por encima de cualquier prueba aislada, incluida la biopsia.' }
    ],
    compute(v) {
      if (!v.distribucion) return null;
      const alternativos = [];
      if (v.vidrio) alternativos.push('vidrio deslustrado extenso');
      if (v.mosaico) alternativos.push('mosaico con atrapamiento aereo');
      if (v.quistes) alternativos.push('quistes, nodulos o consolidacion');
      if (v.perilinfatico) alternativos.push('nodulos perilinfaticos o adenopatias');
      if (v.distribucion === 'superior') alternativos.push('predominio en lobulos superiores');
      if (v.distribucion === 'peribronco') alternativos.push('distribucion peribroncovascular');
      const basal = v.distribucion === 'basal';
      let patron, biopsia, orientacion;
      if (alternativos.length) {
        patron = 'DIAGNOSTICO ALTERNATIVO';
        biopsia = 'segun el diagnostico que se sospeche';
        orientacion = 'El estudio se redirige: el mosaico con atrapamiento aereo apunta con fuerza a neumonitis por hipersensibilidad; los nodulos perilinfaticos con adenopatias simetricas, a sarcoidosis o a beriliosis; el vidrio extenso, a neumonia intersticial no especifica, a EPID por farmacos o a infeccion; y la consolidacion, a neumonia organizada.';
      } else if (basal && v.panal) {
        patron = 'NEUMONIA INTERSTICIAL USUAL DEFINITIVA';
        biopsia = 'NO indicada';
        orientacion = 'Con este patron y un contexto clinico compatible, tras excluir exposiciones, autoinmunidad y farmacos, el diagnostico es fibrosis pulmonar idiopatica sin necesidad de muestra histologica. Se evita asi un procedimiento con mortalidad propia.';
      } else if (basal && v.traccion && v.reticulacion) {
        patron = 'NEUMONIA INTERSTICIAL USUAL PROBABLE';
        biopsia = 'se discute caso a caso en el comite';
        orientacion = 'En el varon mayor, fumador y con clinica tipica, muchos grupos ya no biopsian con este patron. En el paciente joven, en la mujer o si hay cualquier dato de autoinmunidad o de exposicion, el rendimiento de la muestra sube y suele merecer la pena.';
      } else {
        patron = 'INDETERMINADA';
        biopsia = 'habitualmente indicada';
        orientacion = 'Fibrosis presente pero sin rasgos suficientes para clasificarla ni para sugerir una alternativa. Suele requerir criobiopsia transbronquial o biopsia quirurgica, siempre decidida en comite y valorando el riesgo del procedimiento frente a lo que va a cambiar el resultado.';
      }
      return { patron, biopsia, orientacion, alternativos, basal, panal: !!v.panal };
    },
    format: r => {
      let s = `<strong>Patron: ${r.patron}.</strong> Biopsia ${r.biopsia}. ${r.orientacion} `;
      if (r.alternativos.length) s += `Hallazgos que sacan el caso del patron de neumonia intersticial usual: ${r.alternativos.join('; ')}. `;
      if (r.panal && !r.basal) s += '<strong>Ojo:</strong> hay panal pero sin distribucion subpleural y basal, lo que obliga a revisar si de verdad es panal o si son quistes de otra causa o enfisema paraseptal, que es el error de lectura mas frecuente de este tema. ';
      s += '<strong>En todos los casos</strong>: interrogatorio exhaustivo de aves, humedades e historia laboral completa, panel de autoinmunidad amplio, revision de todos los farmacos incluidos los suspendidos, y discusion en COMITE MULTIDISCIPLINAR antes de cerrar el diagnostico.';
      return s;
    },
    fragment: r => `TCAR: ${r.patron}, biopsia ${r.biopsia}`
  },
  {
    key: 'fibrosis-progresiva', title: 'Criterios de fibrosis pulmonar progresiva', accent: '#8c3a34',
    subtitle: 'Dos de tres criterios en el ultimo a&#241;o, en una EPID que NO es fibrosis idiopatica',
    incompleteMsg: 'Indica el diagnostico de base y los valores de FVC y DLCO previos y actuales.',
    fields: [
      { name: 'base', id: 'ei-fp-base', type: 'select', label: 'Diagnostico de base', options: [
        { value: '', label: 'Selecciona' },
        { value: 'otra', label: 'EPID fibrosante que NO es fibrosis pulmonar idiopatica' },
        { value: 'fpi', label: 'Fibrosis pulmonar idiopatica' } ] },
      { name: 'fvcPrev', id: 'ei-fp-fvcp', type: 'number', step: '1', label: 'FVC PREVIA (% del predicho)', placeholder: 'ej. 74', row: 'r1' },
      { name: 'fvcAct', id: 'ei-fp-fvca', type: 'number', step: '1', label: 'FVC ACTUAL (% del predicho)', placeholder: 'ej. 67', row: 'r1' },
      { name: 'dlcoPrev', id: 'ei-fp-dlcop', type: 'number', step: '1', label: 'DLCO PREVIA (% del predicho)', placeholder: 'ej. 58', row: 'r2' },
      { name: 'dlcoAct', id: 'ei-fp-dlcoa', type: 'number', step: '1', label: 'DLCO ACTUAL (% del predicho)', placeholder: 'ej. 50', row: 'r2' },
      { name: 'meses', id: 'ei-fp-mes', type: 'number', step: '1', required: false, label: 'Meses transcurridos entre las dos medidas (opcional)', placeholder: 'ej. 10' },
      { name: 'sintomas', id: 'ei-fp-sin', type: 'checkbox', label: 'Empeoramiento de los sintomas respiratorios' },
      { name: 'radiologia', id: 'ei-fp-rad', type: 'checkbox', label: 'Progresion radiologica: mas reticulacion o bronquiectasias de traccion, panal nuevo o mas extenso, o perdida de volumen' },
      { name: 'alternativa', id: 'ei-fp-alt', type: 'checkbox', label: 'Descartadas otras explicaciones del deterioro: infeccion, insuficiencia cardiaca, embolia pulmonar y progresion de la enfermedad de base' },
      { type: 'note', text: 'Los criterios se aplican solo a EPID fibrosantes DISTINTAS de la fibrosis pulmonar idiopatica, porque esta ya se considera progresiva por definicion y se trata con antifibrotico desde el diagnostico. La progresion fisiologica es una caida ABSOLUTA del porcentaje del predicho: de una FVC del 74% a una del 67% son 7 puntos absolutos, no un 9% relativo.' }
    ],
    compute(v) {
      if (!v.base || v.fvcPrev == null || v.fvcAct == null || v.dlcoPrev == null || v.dlcoAct == null) return null;
      const rango = x => x > 0 && x <= 200;
      if (![v.fvcPrev, v.fvcAct, v.dlcoPrev, v.dlcoAct].every(rango)) return { invalido: true };
      if (v.meses != null && !(v.meses > 0 && v.meses <= 120)) return { invalido: true };
      const caidaFvc = v.fvcPrev - v.fvcAct;
      const caidaDlco = v.dlcoPrev - v.dlcoAct;
      const fisiologica = caidaFvc >= 5 || caidaDlco >= 10;
      const criterios = [];
      if (v.sintomas) criterios.push('empeoramiento de los sintomas');
      if (fisiologica) criterios.push(`progresion fisiologica (FVC ${caidaFvc >= 0 ? '-' : '+'}${Math.abs(caidaFvc).toFixed(0)} puntos, DLCO ${caidaDlco >= 0 ? '-' : '+'}${Math.abs(caidaDlco).toFixed(0)} puntos)`);
      if (v.radiologia) criterios.push('progresion radiologica');
      const n = criterios.length;
      const cumple = v.base === 'otra' && n >= 2 && !!v.alternativa;
      return { base: v.base, criterios, n, fisiologica, caidaFvc, caidaDlco, cumple,
        alternativa: !!v.alternativa, meses: v.meses == null ? null : v.meses };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: porcentajes del predicho entre 1 y 200, y meses entre 1 y 120.';
      let s = `<strong>${r.n} de 3 criterios presentes.</strong> `;
      if (r.n) s += `${r.criterios.join('; ')}. `;
      s += `Caida absoluta de la FVC de ${r.caidaFvc.toFixed(0)} puntos (umbral 5) y de la DLCO de ${r.caidaDlco.toFixed(0)} puntos (umbral 10)${r.meses !== null ? `, en ${r.meses} meses` : ''}. `;
      if (r.base === 'fpi') {
        s += '<strong>El paciente tiene fibrosis pulmonar idiopatica</strong>, de modo que estos criterios no se le aplican: se considera progresiva por definicion y lleva antifibrotico desde el diagnostico. Lo que si informan estos datos es la VELOCIDAD de progresion, que es el mejor predictor pronostico y uno de los criterios para incluir en lista de trasplante: una caida de la FVC del 10% o mas, o de la DLCO del 15% o mas, en 6 meses.';
        return s;
      }
      if (r.cumple) {
        s += '<strong style="color:#8c3a34;">Cumple criterios de FIBROSIS PULMONAR PROGRESIVA.</strong> A&#241;adir NINTEDANIB, que redujo la caida de la FVC en este fenotipo con independencia de la enfermedad de base. A diferencia de la fibrosis idiopatica, aqui el inmunosupresor SI tiene papel cuando la enfermedad de base lo justifica, y con frecuencia se combinan las dos estrategias. Reevaluar ademas si persiste una causa corregible (antigeno en la neumonitis por hipersensibilidad, farmaco, exposicion laboral), valorar trasplante en el candidato y llevar el caso de nuevo al comite.';
      } else if (r.n >= 2 && !r.alternativa) {
        s += '<strong style="color:#8a6a1f;">Hay criterios suficientes, pero falta descartar otras explicaciones.</strong> Antes de aceptar la progresion hay que excluir infeccion respiratoria, insuficiencia cardiaca, sobrecarga de volumen, embolia pulmonar, toxicidad de un farmaco nuevo y mala tecnica en las pruebas de funcion. Sin ese paso, el diagnostico no se sostiene.';
      } else {
        s += 'No cumple los criterios de fibrosis pulmonar progresiva con estos datos. Mantener el tratamiento de la enfermedad de base y repetir la funcion pulmonar en 3 a 6 meses: este fenotipo solo se detecta comparando en el tiempo, y por eso las EPID se siguen con espirometria y DLCO seriadas aunque el paciente se encuentre estable.';
      }
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.base === 'fpi' ? 'FPI: criterios no aplicables' : `${r.n}/3 criterios, ${r.cumple ? 'fibrosis progresiva' : 'no cumple'}`)
  },
  {
    key: 'gap', title: 'Indice GAP (fibrosis pulmonar idiopatica)', accent: '#6b4a2e',
    subtitle: 'Sexo, edad y fisiologia: estadio y mortalidad estimada',
    incompleteMsg: 'Introduce sexo, edad, FVC y DLCO en porcentaje del predicho.',
    fields: [
      { name: 'sexo', id: 'ei-gap-sexo', type: 'select', label: 'Sexo', options: [
        { value: '', label: 'Selecciona' },
        { value: 'm', label: 'Mujer (0)' },
        { value: 'h', label: 'Hombre (1)' } ] },
      { name: 'edad', id: 'ei-gap-edad', type: 'number', step: '1', label: 'Edad (a&#241;os)', placeholder: 'ej. 68', row: 'r1' },
      { name: 'fvc', id: 'ei-gap-fvc', type: 'number', step: '1', label: 'FVC (% del predicho)', placeholder: 'ej. 62', row: 'r1' },
      { name: 'dlco', id: 'ei-gap-dlco', type: 'number', step: '1', required: false, label: 'DLCO (% del predicho; dejar vacio si no se pudo realizar)', placeholder: 'ej. 44' },
      { type: 'note', text: 'Puntuacion: sexo (mujer 0, hombre 1). Edad (60 o menos 0, de 61 a 65 un punto, mas de 65 dos puntos). FVC (mas del 75% 0, del 50 al 75% un punto, menos del 50% dos puntos). DLCO (mas del 55% 0, del 36 al 55% un punto, 35% o menos dos puntos, no realizable tres puntos). Total de 0 a 8, en tres estadios. Se desarrollo para la fibrosis pulmonar idiopatica y despues se ha aplicado a otras EPID fibrosantes.' }
    ],
    compute(v) {
      if (!v.sexo || v.edad == null || v.fvc == null) return null;
      if (!(v.edad > 0 && v.edad <= 120) || !(v.fvc > 0 && v.fvc <= 200)) return { invalido: true };
      if (v.dlco != null && !(v.dlco > 0 && v.dlco <= 200)) return { invalido: true };
      const pSexo = v.sexo === 'h' ? 1 : 0;
      const pEdad = puntosEdadGap(v.edad);
      const pFvc = puntosFvcGap(v.fvc);
      const pDlco = v.dlco == null ? 3 : puntosDlcoGap(v.dlco);
      const total = pSexo + pEdad + pFvc + pDlco;
      const estadio = total <= 3 ? 'I' : total <= 5 ? 'II' : 'III';
      const mort1 = estadio === 'I' ? 'en torno al 6%' : estadio === 'II' ? 'en torno al 16%' : 'en torno al 39%';
      const mort3 = estadio === 'I' ? 'en torno al 16%' : estadio === 'II' ? 'en torno al 42%' : 'en torno al 77%';
      return { total, estadio, mort1, mort3, pSexo, pEdad, pFvc, pDlco, sinDlco: v.dlco == null, fvc: v.fvc };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: edad de 1 a 120 a&#241;os y porcentajes del predicho entre 1 y 200.';
      let s = `<strong>GAP ${r.total} de 8 puntos: estadio ${r.estadio}.</strong> Mortalidad estimada al a&#241;o ${r.mort1} y a los 3 a&#241;os ${r.mort3}. Desglose: sexo ${r.pSexo}, edad ${r.pEdad}, FVC ${r.pFvc}, DLCO ${r.pDlco}. `;
      if (r.sinDlco) s += '<strong>La DLCO no se ha introducido</strong> y se ha puntuado como no realizable, que son 3 puntos: si el paciente si puede hacerla, conviene medirla, porque puede bajar el estadio de forma sustancial. ';
      if (r.estadio === 'III') s += 'Estadio de maximo riesgo: asegurar que el paciente ya esta remitido a trasplante, valorar la inclusion en lista y plantear cuidados paliativos en paralelo, no como alternativa. Conviene hablar de objetivos de cuidado antes de la primera exacerbacion aguda, porque en ese momento la ventilacion invasiva rara vez cambia el desenlace.';
      else if (r.estadio === 'II') s += 'Riesgo intermedio: antifibrotico, rehabilitacion respiratoria, oxigeno si procede y seguimiento funcional cada 3 a 6 meses. Si no se ha hecho, remitir a trasplante ahora.';
      else s += 'Riesgo bajo en el momento actual. El indice es una foto, no una prediccion individual: lo que mas informa del pronostico es la VELOCIDAD de caida de la FVC en los siguientes 6 a 12 meses, de modo que la derivacion a trasplante se hace igualmente en el diagnostico y no se aplaza por un estadio favorable.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `GAP ${r.total}: estadio ${r.estadio}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
