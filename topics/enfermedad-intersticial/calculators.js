// topics/enfermedad-intersticial/calculators.js
// 4 herramientas:
// - patron-restrictivo: confirma la restriccion con la capacidad pulmonar total y la separa en
//   intrinseca o extrinseca con la DLCO y la KCO, incluyendo la caida postural de la FVC.
// - patron-tcar: clasifica la tomografia de alta resolucion en los cuatro patrones de la guia de
//   2022 y dice si hace falta muestra histologica.
// - fibrosis-progresiva: criterios de fibrosis pulmonar progresiva (2 de 3 en el ultimo año).
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
    key: 'patron-restrictivo', title: 'Patrón restrictivo: confirmarlo y clasificarlo', accent: '#3d5a73',
    subtitle: 'Capacidad pulmonar total, DLCO y KCO, más la caída postural de la FVC',
    incompleteMsg: 'Introduce la capacidad pulmonar total, el cociente FEV1/FVC y la DLCO en porcentaje del predicho.',
    fields: [
      { name: 'tlc', id: 'ei-pr-tlc', type: 'number', step: '1', label: 'Capacidad pulmonar total (% del predicho)', placeholder: 'ej. 68', row: 'r1' },
      { name: 'ratio', id: 'ei-pr-ratio', type: 'number', step: '0.01', label: 'Cociente FEV1/FVC posbroncodilatador', placeholder: 'ej. 0.85', row: 'r1' },
      { name: 'dlco', id: 'ei-pr-dlco', type: 'number', step: '1', label: 'DLCO corregida por hemoglobina (% del predicho)', placeholder: 'ej. 45', row: 'r2' },
      { name: 'kco', id: 'ei-pr-kco', type: 'number', step: '1', required: false, label: 'KCO o DLCO por volumen alveolar (% del predicho, opcional)', placeholder: 'ej. 110', row: 'r2' },
      { type: 'note', text: 'La DLCO debe estar CORREGIDA POR HEMOGLOBINA antes de interpretarla: la anemia la baja sin que exista ninguna enfermedad pulmonar, y no corregirla ha generado muchos estudios innecesarios. La KCO es la DLCO dividida por el volumen alveolar y afina la separación: en la restricción extrapulmonar el pulmón esta sano pero poco distendido, de modo que transfiere MÁS por unidad de volumen.' },
      { name: 'fvcSentado', id: 'ei-pr-fvcs', type: 'number', step: '1', required: false, label: 'FVC en sedestación (mL o % del predicho, opcional)', placeholder: 'ej. 2400', row: 'r3' },
      { name: 'fvcSupino', id: 'ei-pr-fvcd', type: 'number', step: '1', required: false, label: 'FVC en DECÚBITO supino (misma unidad, opcional)', placeholder: 'ej. 1750', row: 'r3' },
      { type: 'note', text: 'La FVC medida sentado y tumbado es la prueba de cabecera de la debilidad diafragmática y casi nadie la pide. Una caída mayor del 20% al pasar a decúbito indica disfunción diafragmática significativa y anticipa la hipoventilación nocturna antes de que la gasometría diurna se altere.' }
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
      else patron = 'sin restricción ni obstrucción';
      const dlcoBaja = v.dlco < 80;
      let tipo = null;
      if (restriccion) {
        if (dlcoBaja) tipo = 'INTRÍNSECA (parenquimatosa)';
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
      let s = `<strong>Patrón ${r.patron}.</strong> Capacidad pulmonar total del ${r.tlc}% del predicho, DLCO del ${r.dlco}%${r.kco !== null ? `, KCO del ${r.kco}%` : ''}. `;
      if (!r.restriccion && !r.obstruccion) {
        s += 'Sin restricción (la capacidad pulmonar total es del 80% o más) ni obstrucción. Si la DLCO esta baja de forma aislada, pensar en enfermedad vascular pulmonar, anemia no corregida, enfisema incipiente o EPID muy precoz.';
        return s;
      }
      if (r.obstruccion && !r.restriccion) {
        s += 'Hay obstrucción sin restricción: el estudio corresponde a EPOC, asma u otra enfermedad de la via aérea, no a este tema. Recordar que la hiperinsuflación puede elevar la capacidad pulmonar total y enmascarar una restricción coexistente.';
        return s;
      }
      s += `<strong>Restricción ${r.tipo}.</strong> `;
      if (r.dlcoBaja) {
        s += 'Una DLCO baja con volúmenes bajos indica que el problema esta en el PARÉNQUIMA: enfermedad intersticial difusa, sarcoidosis, neumoconiosis o EPID por fármacos. Toca tomografía de alta resolución en inspiración, espiración y prono, interrogatorio exhaustivo de exposiciones, panel de autoinmunidad y revisión de la medicación, antes de llevar el caso al comite multidisciplinar.';
      } else {
        s += 'Una DLCO conservada con volúmenes bajos indica que el pulmón esta SANO y que el problema esta en la bomba o en la caja: obesidad, derrame, cifoescoliosis, espondilitis, parálisis diafragmática o enfermedad neuromuscular. ';
        if (r.kco !== null && r.kco >= 100) s += 'La KCO por encima del 100% lo confirma: el pulmón transfiere más por unidad de volumen porque esta poco distendido. ';
        s += 'Toca exploración neurológica, presiones respiratorias máximas, FVC en decúbito y pulsioximetría nocturna.';
      }
      if (r.obstruccion) s += ' <strong>Hay además obstrucción</strong>: valorar la combinación de enfisema y fibrosis, que da volúmenes engañosamente conservados con DLCO desproporcionadamente baja, o una EPID sobre un obstructivo previo.';
      if (r.caida !== null) {
        s += ` <strong>Caída postural de la FVC del ${r.caida.toFixed(0)}%.</strong> `;
        s += r.caida > 20
          ? 'Por encima del 20%: indica <strong>disfunción diafragmática significativa</strong>. Solicitar presiones respiratorias máximas y estudio del sueño, y valorar ventilación no invasiva domiciliaria antes de que aparezca la hipercapnia diurna.'
          : 'Por debajo del 20%, dentro de lo esperable. No descarta debilidad leve: si la sospecha persiste, medir las presiones respiratorias máximas.';
      }
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.restriccion ? `restricción ${r.tipo}` : `patrón ${r.patron}`)
  },
  {
    key: 'patron-tcar', title: 'Patrón de la tomografía de alta resolución', accent: '#6b4a7a',
    subtitle: 'Las cuatro categorías de la guía de 2022 y si hace falta biopsia',
    incompleteMsg: 'Selecciona la distribución predominante y marca los hallazgos presentes.',
    fields: [
      { name: 'distribucion', id: 'ei-tc-dist', type: 'select', label: 'Distribución predominante', options: [
        { value: '', label: 'Selecciona' },
        { value: 'basal', label: 'Subpleural y basal, heterogénea' },
        { value: 'superior', label: 'Predominio en lóbulos superiores o medios' },
        { value: 'peribronco', label: 'Peribroncovascular' },
        { value: 'difusa', label: 'Difusa, sin predominio claro' } ] },
      { type: 'note', text: 'Hallazgos que apoyan el patrón de neumonía intersticial usual.' },
      { name: 'panal', id: 'ei-tc-panal', type: 'checkbox', label: 'Panal de abeja: quistes agrupados, de pared gruesa y tamaño similar, en varias capas subpleurales' },
      { name: 'reticulacion', id: 'ei-tc-ret', type: 'checkbox', label: 'Reticulacion subpleural' },
      { name: 'traccion', id: 'ei-tc-trac', type: 'checkbox', label: 'Bronquiectasias o bronquiolectasias de tracción periféricas' },
      { type: 'note', text: 'Hallazgos que apuntan a un DIAGNÓSTICO ALTERNATIVO. Cualquiera de ellos, si es prominente, saca el caso del patrón de neumonía intersticial usual.' },
      { name: 'vidrio', id: 'ei-tc-vid', type: 'checkbox', label: 'Vidrio deslustrado EXTENSO, más allá de lo que acompaña a la fibrosis' },
      { name: 'mosaico', id: 'ei-tc-mos', type: 'checkbox', label: 'Mosaico con atrapamiento aéreo en espiración en tres o más lóbulos' },
      { name: 'quistes', id: 'ei-tc-qui', type: 'checkbox', label: 'Quistes no en panal, nódulos centrolobulillares profusos o consolidación' },
      { name: 'perilinfatico', id: 'ei-tc-peri', type: 'checkbox', label: 'Nódulos de distribución perilinfatica o adenopatías hiliares simétricas' },
      { type: 'note', text: 'El patrón NO es el diagnóstico: es lo que decide si hace falta muestra histológica y hacia donde se dirige el estudio. La lectura de la tomografía y la decisión final deben pasar por el COMITE MULTIDISCIPLINAR, que es el patrón de referencia del diagnóstico de las EPID por encima de cualquier prueba aislada, incluida la biopsia.' }
    ],
    compute(v) {
      if (!v.distribucion) return null;
      const alternativos = [];
      if (v.vidrio) alternativos.push('vidrio deslustrado extenso');
      if (v.mosaico) alternativos.push('mosaico con atrapamiento aéreo');
      if (v.quistes) alternativos.push('quistes, nódulos o consolidación');
      if (v.perilinfatico) alternativos.push('nódulos perilinfaticos o adenopatías');
      if (v.distribucion === 'superior') alternativos.push('predominio en lóbulos superiores');
      if (v.distribucion === 'peribronco') alternativos.push('distribución peribroncovascular');
      const basal = v.distribucion === 'basal';
      let patron, biopsia, orientacion;
      if (alternativos.length) {
        patron = 'DIAGNÓSTICO ALTERNATIVO';
        biopsia = 'según el diagnóstico que se sospeche';
        orientacion = 'El estudio se redirige: el mosaico con atrapamiento aéreo apunta con fuerza a neumonitis por hipersensibilidad; los nódulos perilinfaticos con adenopatías simétricas, a sarcoidosis o a beriliosis; el vidrio extenso, a neumonía intersticial no específica, a EPID por fármacos o a infección; y la consolidación, a neumonía organizada.';
      } else if (basal && v.panal) {
        patron = 'NEUMONÍA INTERSTICIAL USUAL DEFINITIVA';
        biopsia = 'NO indicada';
        orientacion = 'Con este patrón y un contexto clínico compatible, tras excluir exposiciones, autoinmunidad y fármacos, el diagnóstico es fibrosis pulmonar idiopática sin necesidad de muestra histológica. Se evita así un procedimiento con mortalidad propia.';
      } else if (basal && v.traccion && v.reticulacion) {
        patron = 'NEUMONÍA INTERSTICIAL USUAL PROBABLE';
        biopsia = 'se discute caso a caso en el comite';
        orientacion = 'En el varón mayor, fumador y con clínica típica, muchos grupos ya no biopsian con este patrón. En el paciente joven, en la mujer o si hay cualquier dato de autoinmunidad o de exposición, el rendimiento de la muestra sube y suele merecer la pena.';
      } else {
        patron = 'INDETERMINADA';
        biopsia = 'habitualmente indicada';
        orientacion = 'Fibrosis presente pero sin rasgos suficientes para clasificarla ni para sugerir una alternativa. Suele requerir criobiopsia transbronquial o biopsia quirúrgica, siempre decidida en comite y valorando el riesgo del procedimiento frente a lo que va a cambiar el resultado.';
      }
      return { patron, biopsia, orientacion, alternativos, basal, panal: !!v.panal };
    },
    format: r => {
      let s = `<strong>Patrón: ${r.patron}.</strong> Biopsia ${r.biopsia}. ${r.orientacion} `;
      if (r.alternativos.length) s += `Hallazgos que sacan el caso del patrón de neumonía intersticial usual: ${r.alternativos.join('; ')}. `;
      if (r.panal && !r.basal) s += '<strong>Ojo:</strong> hay panal pero sin distribución subpleural y basal, lo que obliga a revisar si de verdad es panal o si son quistes de otra causa o enfisema paraseptal, que es el error de lectura más frecuente de este tema. ';
      s += '<strong>En todos los casos</strong>: interrogatorio exhaustivo de aves, humedades e historia laboral completa, panel de autoinmunidad amplio, revisión de todos los fármacos incluidos los suspendidos, y discusión en COMITE MULTIDISCIPLINAR antes de cerrar el diagnóstico.';
      return s;
    },
    fragment: r => `TCAR: ${r.patron}, biopsia ${r.biopsia}`
  },
  {
    key: 'fibrosis-progresiva', title: 'Criterios de fibrosis pulmonar progresiva', accent: '#8c3a34',
    subtitle: 'Dos de tres criterios en el último año, en una EPID que NO es fibrosis idiopática',
    incompleteMsg: 'Indica el diagnóstico de base y los valores de FVC y DLCO previos y actuales.',
    fields: [
      { name: 'base', id: 'ei-fp-base', type: 'select', label: 'Diagnóstico de base', options: [
        { value: '', label: 'Selecciona' },
        { value: 'otra', label: 'EPID fibrosante que NO es fibrosis pulmonar idiopática' },
        { value: 'fpi', label: 'Fibrosis pulmonar idiopática' } ] },
      { name: 'fvcPrev', id: 'ei-fp-fvcp', type: 'number', step: '1', label: 'FVC PREVIA (% del predicho)', placeholder: 'ej. 74', row: 'r1' },
      { name: 'fvcAct', id: 'ei-fp-fvca', type: 'number', step: '1', label: 'FVC ACTUAL (% del predicho)', placeholder: 'ej. 67', row: 'r1' },
      { name: 'dlcoPrev', id: 'ei-fp-dlcop', type: 'number', step: '1', label: 'DLCO PREVIA (% del predicho)', placeholder: 'ej. 58', row: 'r2' },
      { name: 'dlcoAct', id: 'ei-fp-dlcoa', type: 'number', step: '1', label: 'DLCO ACTUAL (% del predicho)', placeholder: 'ej. 50', row: 'r2' },
      { name: 'meses', id: 'ei-fp-mes', type: 'number', step: '1', required: false, label: 'Meses transcurridos entre las dos medidas (opcional)', placeholder: 'ej. 10' },
      { name: 'sintomas', id: 'ei-fp-sin', type: 'checkbox', label: 'Empeoramiento de los síntomas respiratorios' },
      { name: 'radiologia', id: 'ei-fp-rad', type: 'checkbox', label: 'Progresión radiológica: más reticulacion o bronquiectasias de tracción, panal nuevo o más extenso, o pérdida de volumen' },
      { name: 'alternativa', id: 'ei-fp-alt', type: 'checkbox', label: 'Descartadas otras explicaciones del deterioro: infección, insuficiencia cardiaca, embolia pulmonar y progresión de la enfermedad de base' },
      { type: 'note', text: 'Los criterios se aplican solo a EPID fibrosantes DISTINTAS de la fibrosis pulmonar idiopática, porque esta ya se considera progresiva por definición y se trata con antifibrotico desde el diagnóstico. La progresión fisiológica es una caída ABSOLUTA del porcentaje del predicho: de una FVC del 74% a una del 67% son 7 puntos absolutos, no un 9% relativo.' }
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
      if (v.sintomas) criterios.push('empeoramiento de los síntomas');
      if (fisiologica) criterios.push(`progresión fisiológica (FVC ${caidaFvc >= 0 ? '-' : '+'}${Math.abs(caidaFvc).toFixed(0)} puntos, DLCO ${caidaDlco >= 0 ? '-' : '+'}${Math.abs(caidaDlco).toFixed(0)} puntos)`);
      if (v.radiologia) criterios.push('progresión radiológica');
      const n = criterios.length;
      const cumple = v.base === 'otra' && n >= 2 && !!v.alternativa;
      return { base: v.base, criterios, n, fisiologica, caidaFvc, caidaDlco, cumple,
        alternativa: !!v.alternativa, meses: v.meses == null ? null : v.meses };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: porcentajes del predicho entre 1 y 200, y meses entre 1 y 120.';
      let s = `<strong>${r.n} de 3 criterios presentes.</strong> `;
      if (r.n) s += `${r.criterios.join('; ')}. `;
      s += `Caída absoluta de la FVC de ${r.caidaFvc.toFixed(0)} puntos (umbral 5) y de la DLCO de ${r.caidaDlco.toFixed(0)} puntos (umbral 10)${r.meses !== null ? `, en ${r.meses} meses` : ''}. `;
      if (r.base === 'fpi') {
        s += '<strong>El paciente tiene fibrosis pulmonar idiopática</strong>, de modo que estos criterios no se le aplican: se considera progresiva por definición y lleva antifibrotico desde el diagnóstico. Lo que si informan estos datos es la VELOCIDAD de progresión, que es el mejor predictor pronóstico y uno de los criterios para incluir en lista de trasplante: una caída de la FVC del 10% o más, o de la DLCO del 15% o más, en 6 meses.';
        return s;
      }
      if (r.cumple) {
        s += '<strong style="color:#8c3a34;">Cumple criterios de FIBROSIS PULMONAR PROGRESIVA.</strong> Añadir NINTEDANIB, que redujo la caída de la FVC en este fenotipo con independencia de la enfermedad de base. A diferencia de la fibrosis idiopática, aquí el inmunosupresor SI tiene papel cuando la enfermedad de base lo justifica, y con frecuencia se combinan las dos estrategias. Reevaluar además si persiste una causa corregible (antígeno en la neumonitis por hipersensibilidad, fármaco, exposición laboral), valorar trasplante en el candidato y llevar el caso de nuevo al comite.';
      } else if (r.n >= 2 && !r.alternativa) {
        s += '<strong style="color:#8a6a1f;">Hay criterios suficientes, pero falta descartar otras explicaciones.</strong> Antes de aceptar la progresión hay que excluir infección respiratoria, insuficiencia cardiaca, sobrecarga de volumen, embolia pulmonar, toxicidad de un fármaco nuevo y mala técnica en las pruebas de función. Sin ese paso, el diagnóstico no se sostiene.';
      } else {
        s += 'No cumple los criterios de fibrosis pulmonar progresiva con estos datos. Mantener el tratamiento de la enfermedad de base y repetir la función pulmonar en 3 a 6 meses: este fenotipo solo se detecta comparando en el tiempo, y por eso las EPID se siguen con espirometría y DLCO seriadas aunque el paciente se encuentre estable.';
      }
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.base === 'fpi' ? 'FPI: criterios no aplicables' : `${r.n}/3 criterios, ${r.cumple ? 'fibrosis progresiva' : 'no cumple'}`)
  },
  {
    key: 'gap', title: 'Índice GAP (fibrosis pulmonar idiopática)', accent: '#6b4a2e',
    subtitle: 'Sexo, edad y fisiología: estadio y mortalidad estimada',
    incompleteMsg: 'Introduce sexo, edad, FVC y DLCO en porcentaje del predicho.',
    fields: [
      { name: 'sexo', id: 'ei-gap-sexo', type: 'select', label: 'Sexo', options: [
        { value: '', label: 'Selecciona' },
        { value: 'm', label: 'Mujer (0)' },
        { value: 'h', label: 'Hombre (1)' } ] },
      { name: 'edad', id: 'ei-gap-edad', type: 'number', step: '1', label: 'Edad (años)', placeholder: 'ej. 68', row: 'r1' },
      { name: 'fvc', id: 'ei-gap-fvc', type: 'number', step: '1', label: 'FVC (% del predicho)', placeholder: 'ej. 62', row: 'r1' },
      { name: 'dlco', id: 'ei-gap-dlco', type: 'number', step: '1', required: false, label: 'DLCO (% del predicho; dejar vacio si no se pudo realizar)', placeholder: 'ej. 44' },
      { type: 'note', text: 'Puntuación: sexo (mujer 0, hombre 1). Edad (60 o menos 0, de 61 a 65 un punto, más de 65 dos puntos). FVC (más del 75% 0, del 50 al 75% un punto, menos del 50% dos puntos). DLCO (más del 55% 0, del 36 al 55% un punto, 35% o menos dos puntos, no realizable tres puntos). Total de 0 a 8, en tres estadios. Se desarrollo para la fibrosis pulmonar idiopática y después se ha aplicado a otras EPID fibrosantes.' }
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
      if (r.invalido) return 'Revisa los valores: edad de 1 a 120 años y porcentajes del predicho entre 1 y 200.';
      let s = `<strong>GAP ${r.total} de 8 puntos: estadio ${r.estadio}.</strong> Mortalidad estimada al año ${r.mort1} y a los 3 años ${r.mort3}. Desglose: sexo ${r.pSexo}, edad ${r.pEdad}, FVC ${r.pFvc}, DLCO ${r.pDlco}. `;
      if (r.sinDlco) s += '<strong>La DLCO no se ha introducido</strong> y se ha puntuado como no realizable, que son 3 puntos: si el paciente si puede hacerla, conviene medirla, porque puede bajar el estadio de forma sustancial. ';
      if (r.estadio === 'III') s += 'Estadio de máximo riesgo: asegurar que el paciente ya esta remitido a trasplante, valorar la inclusion en lista y plantear cuidados paliativos en paralelo, no como alternativa. Conviene hablar de objetivos de cuidado antes de la primera exacerbación aguda, porque en ese momento la ventilación invasiva rara vez cambia el desenlace.';
      else if (r.estadio === 'II') s += 'Riesgo intermedio: antifibrotico, rehabilitación respiratoria, oxígeno si procede y seguimiento funcional cada 3 a 6 meses. Si no se ha hecho, remitir a trasplante ahora.';
      else s += 'Riesgo bajo en el momento actual. El índice es una foto, no una predicción individual: lo que más informa del pronóstico es la VELOCIDAD de caída de la FVC en los siguientes 6 a 12 meses, de modo que la derivación a trasplante se hace igualmente en el diagnóstico y no se aplaza por un estadio favorable.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `GAP ${r.total}: estadio ${r.estadio}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
