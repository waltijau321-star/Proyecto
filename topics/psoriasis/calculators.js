// topics/psoriasis/calculators.js - PASI, gravedad y criterio de sistemico, respuesta y cribado
// de artritis psoriasica. Metas segun la guia latinoamericana SOLAPSO (Valenzuela F, et al.
// An Bras Dermatol 2026;101(5):501449, doi:10.1016/j.abd.2026.501449).

const AREA = [
  { value: '0', label: '0 &middot; Nada' },
  { value: '1', label: '1 &middot; Menos del 10%' },
  { value: '2', label: '2 &middot; 10 a 29%' },
  { value: '3', label: '3 &middot; 30 a 49%' },
  { value: '4', label: '4 &middot; 50 a 69%' },
  { value: '5', label: '5 &middot; 70 a 89%' },
  { value: '6', label: '6 &middot; 90 a 100%' }
];

const areaSel = (label, id, name, row) => ({
  name, id, type: 'select', numeric: true, label, row, options: AREA
});

const num04 = (label, id, name, row) => ({
  name, id, type: 'number', step: '1', label, placeholder: '0 a 4', row
});

// Peso de cada region en el PASI: cabeza 0.1, tronco 0.3, superiores 0.2, inferiores 0.4.
const REGIONES = [
  { k: 'cab', nombre: 'cabeza y cuello', peso: 0.1 },
  { k: 'tro', nombre: 'tronco', peso: 0.3 },
  { k: 'sup', nombre: 'miembros superiores', peso: 0.2 },
  { k: 'inf', nombre: 'miembros inferiores', peso: 0.4 }
];

export const calculators = [
  {
    key: 'pasi', title: 'PASI', accent: '#a1442e',
    subtitle: 'Indice de area y gravedad de la psoriasis &middot; 0 a 72',
    incompleteMsg: 'Introduce eritema, induracion y descamacion (0 a 4) en las cuatro regiones.',
    fields: [
      { type: 'note', text: 'En cada region se punt&uacute;an de 0 a 4 el ERITEMA (rojez), la INDURACION (grosor de la placa) y la DESCAMACION, y se elige el porcentaje de esa region que esta afectado. Las regiones NO pesan igual: los miembros inferiores pesan cuatro veces mas que la cabeza.' },

      { type: 'note', text: '<strong>Cabeza y cuello</strong> (peso 0.1)' },
      num04('Eritema', 'ps-cab-e', 'cab_e', 'c1'),
      num04('Induracion', 'ps-cab-i', 'cab_i', 'c1'),
      num04('Descamacion', 'ps-cab-d', 'cab_d', 'c2'),
      areaSel('Superficie de la cabeza afectada', 'ps-cab-a', 'cab_a', 'c2'),

      { type: 'note', text: '<strong>Tronco</strong> (peso 0.3)' },
      num04('Eritema', 'ps-tro-e', 'tro_e', 't1'),
      num04('Induracion', 'ps-tro-i', 'tro_i', 't1'),
      num04('Descamacion', 'ps-tro-d', 'tro_d', 't2'),
      areaSel('Superficie del tronco afectada', 'ps-tro-a', 'tro_a', 't2'),

      { type: 'note', text: '<strong>Miembros superiores</strong> (peso 0.2)' },
      num04('Eritema', 'ps-sup-e', 'sup_e', 's1'),
      num04('Induracion', 'ps-sup-i', 'sup_i', 's1'),
      num04('Descamacion', 'ps-sup-d', 'sup_d', 's2'),
      areaSel('Superficie de los brazos afectada', 'ps-sup-a', 'sup_a', 's2'),

      { type: 'note', text: '<strong>Miembros inferiores</strong> (peso 0.4)' },
      num04('Eritema', 'ps-inf-e', 'inf_e', 'i1'),
      num04('Induracion', 'ps-inf-i', 'inf_i', 'i1'),
      num04('Descamacion', 'ps-inf-d', 'inf_d', 'i2'),
      areaSel('Superficie de las piernas afectada', 'ps-inf-a', 'inf_a', 'i2')
    ],
    compute(v) {
      const partes = [];
      for (const r of REGIONES) {
        const e = v[r.k + '_e'], i = v[r.k + '_i'], d = v[r.k + '_d'], a = v[r.k + '_a'];
        if (e === null || i === null || d === null) return null;
        if ([e, i, d].some(x => x < 0 || x > 4)) return { invalido: true };
        partes.push({ nombre: r.nombre, valor: r.peso * (e + i + d) * a, area: a, suma: e + i + d });
      }
      const total = partes.reduce((s, p) => s + p.valor, 0);
      const mayor = partes.reduce((a, b) => (b.valor > a.valor ? b : a));
      return {
        pasi: Math.round(total * 10) / 10,
        partes,
        mayor,
        sinLesion: partes.every(p => p.area === 0)
      };
    },
    format(r) {
      if (r.invalido) return 'El eritema, la induracion y la descamacion se punt&uacute;an de <strong>0 a 4</strong>. Revisa los valores.';
      if (r.sinLesion) return '<strong>PASI 0.</strong> No hay superficie afectada en ninguna region: la piel esta aclarada.';
      let s = `<strong>PASI ${r.pasi} / 72.</strong>`;
      const meta = r.pasi < 3;
      s += meta
        ? '<br><span style="color:#3f6b52;">Por debajo de 3, que es la meta de PASI absoluto de la SOLAPSO.</span>'
        : '<br><span style="color:#8c3a34;">Por encima de 3, que es la meta de PASI absoluto de la SOLAPSO.</span>';
      s += `<br><span style="opacity:.8;">La region que mas aporta es ${r.mayor.nombre} (${Math.round(r.mayor.valor * 10) / 10} puntos).</span>`;
      s += '<br><span style="opacity:.75;">Dos avisos sobre esta escala. El primero: la meta tiene <strong>dos mitades</strong>, y el PASI es solo una; hace falta ademas un DLQI menor de 5, porque una piel casi limpia con una vida condicionada no es un exito. El segundo: el PASI <strong>infravalora</strong> lo que ocurre en palmas, plantas, u&#241;as y genitales, que son areas de alto impacto donde una superficie peque&#241;a incapacita y justifica tratamiento sistemico igual.</span>';
      return s;
    },
    fragment: r => (r.invalido ? 'valores fuera de rango' : `PASI ${r.pasi}/72`)
  },

  {
    key: 'gravedad-psoriasis', title: 'Gravedad y criterio de sistemico', accent: '#8a5a2e',
    subtitle: 'Superficie, PGA, calidad de vida y areas de alto impacto',
    incompleteMsg: 'Introduce la superficie corporal afectada.',
    fields: [
      { name: 'bsa', id: 'ps-g-bsa', type: 'number', step: '0.5', label: 'Superficie corporal afectada (%)', placeholder: 'ej. 8', row: 'g1' },
      { name: 'pga', id: 'ps-g-pga', type: 'select', numeric: true, label: 'Evaluacion global del medico (PGA)', row: 'g1', options: [
        { value: '0', label: '0 &middot; Aclarado' },
        { value: '1', label: '1 &middot; Casi aclarado' },
        { value: '2', label: '2 &middot; Leve' },
        { value: '3', label: '3 &middot; Moderado' },
        { value: '4', label: '4 &middot; Grave' }
      ] },
      { name: 'dlqi', id: 'ps-g-dlqi', type: 'number', step: '1', required: false, label: 'DLQI (0 a 30, opcional)', placeholder: 'ej. 14' },
      { type: 'note', text: 'Areas de ALTO IMPACTO: una superficie peque&#241;a en cualquiera de ellas basta para justificar tratamiento sistemico, aunque el PASI sea bajo.' },
      { name: 'cuero', id: 'ps-g-cu', type: 'checkbox', label: 'Cuero cabelludo extenso o refractario' },
      { name: 'unas', id: 'ps-g-un', type: 'checkbox', label: 'U&#241;as' },
      { name: 'palmas', id: 'ps-g-pa', type: 'checkbox', label: 'Palmas o plantas' },
      { name: 'pliegues', id: 'ps-g-pl', type: 'checkbox', label: 'Pliegues (psoriasis invertida)' },
      { name: 'genital', id: 'ps-g-ge', type: 'checkbox', label: 'Genitales' }
    ],
    compute(v) {
      if (v.bsa === null) return null;
      if (v.bsa < 0 || v.bsa > 100) return { invalido: true };
      const areas = [
        ['cuero cabelludo', v.cuero], ['u&#241;as', v.unas], ['palmas o plantas', v.palmas],
        ['pliegues', v.pliegues], ['genitales', v.genital]
      ].filter(a => a[1]).map(a => a[0]);
      const dlqiDato = v.dlqi !== null && v.dlqi !== undefined;
      const motivos = [];
      if (v.bsa > 10) motivos.push('superficie mayor del 10%');
      if (v.pga >= 3) motivos.push('PGA de ' + v.pga + ', moderado o grave');
      if (dlqiDato && v.dlqi > 10) motivos.push('DLQI de ' + v.dlqi + ', mayor de 10');
      if (areas.length) motivos.push('area de alto impacto: ' + areas.join(', '));
      return {
        bsa: v.bsa, pga: v.pga, dlqi: dlqiDato ? v.dlqi : null,
        areas, motivos, candidato: motivos.length > 0,
        soloPorArea: motivos.length === 1 && areas.length > 0 && v.bsa <= 10 && v.pga < 3
      };
    },
    format(r) {
      if (r.invalido) return 'La superficie corporal va de <strong>0 a 100%</strong>. Revisa el valor.';
      let s = r.candidato
        ? '<strong style="color:#8c3a34;">Cumple criterio de enfermedad moderada a grave.</strong> Es candidato a tratamiento sistemico.'
        : '<strong style="color:#3f6b52;">Enfermedad leve.</strong> Tratamiento topico, salvo que algo mas lo cambie.';
      if (r.motivos.length) s += `<br><span style="opacity:.85;">Por: ${r.motivos.join('; ')}.</span>`;
      if (r.soloPorArea) {
        s += '<br><strong style="color:#8a5a2e;">Cumple SOLO por la localizacion,</strong> no por la extension. Es justo el caso que se pasa por alto: una superficie peque&#241;a en u&#241;as, palmas, pliegues o genitales incapacita mas que una placa grande en el tronco, y la regla clasica de la superficie mayor del 10% lo dejaria fuera.';
      }
      if (r.dlqi === null) {
        s += '<br><span style="opacity:.75;">Sin DLQI la decision queda coja: la calidad de vida es la mitad de la meta que casi nunca se mide, y hay pacientes con poca piel y mucha vida condicionada.</span>';
      } else if (r.dlqi > 10 && r.bsa <= 3) {
        s += '<br><span style="opacity:.8;">Poca superficie con DLQI alto: merece la pena preguntar por la carga psicologica y por localizaciones que no se exploran de rutina, como los genitales.</span>';
      }
      s += '<br><span style="opacity:.75;">Recuerda que la gravedad no la fija un solo numero: la guia acepta una superficie menor o igual al 1% como alternativa cuando no hay PASI ni PGA disponibles.</span>';
      return s;
    },
    fragment: r => (r.invalido ? 'valores no validos' : `superficie ${r.bsa}%, PGA ${r.pga}${r.candidato ? ', criterio de sistemico' : ', leve'}`)
  },

  {
    key: 'respuesta-psoriasis', title: 'Respuesta al tratamiento', accent: '#5a4a8c',
    subtitle: 'Compara el PASI basal con el actual y lo cruza con la meta',
    incompleteMsg: 'Introduce el PASI basal y el actual.',
    fields: [
      { name: 'basal', id: 'ps-r-b', type: 'number', step: '0.1', label: 'PASI basal (antes de tratar)', placeholder: 'ej. 18.4', row: 'r1' },
      { name: 'actual', id: 'ps-r-a', type: 'number', step: '0.1', label: 'PASI actual', placeholder: 'ej. 4.2', row: 'r1' },
      { name: 'dlqi', id: 'ps-r-d', type: 'number', step: '1', required: false, label: 'DLQI actual (0 a 30, opcional)', placeholder: 'ej. 7' },
      { name: 'altoImpacto', id: 'ps-r-ai', type: 'checkbox', label: 'Persiste afectacion de un area de alto impacto' },
      { type: 'note', text: 'La respuesta se juzga a las <strong>12 a 16 semanas</strong> de cada cambio, que es cuando el tratamiento ya ha tenido tiempo de actuar. Antes de ese plazo, un resultado pobre no significa fracaso.' }
    ],
    compute(v) {
      if (v.basal === null || v.actual === null) return null;
      if (v.basal <= 0 || v.actual < 0 || v.basal > 72 || v.actual > 72) return { invalido: true };
      if (v.actual > v.basal) return { empeora: true, basal: v.basal, actual: v.actual };
      const red = ((v.basal - v.actual) / v.basal) * 100;
      const dlqiDato = v.dlqi !== null && v.dlqi !== undefined;
      const absolutoOk = v.actual < 3;
      const pasi90 = red >= 90;
      const dlqiOk = !dlqiDato || v.dlqi < 5;
      const metaCutanea = absolutoOk || pasi90;
      // Para hablar de respuesta PARCIAL hace falta que la piel haya respondido de verdad: o se
      // alcanza PASI75, o el PASI queda dentro de la banda de 3 a 10 que define la guia. Sin eso
      // es fracaso, aunque el DLQI siga alto. Un PASI que baja de 20 a 15 no es una respuesta
      // parcial por mucho que la calidad de vida acompa&#241;e mal.
      const respuestaCutanea = red >= 75 || v.actual <= 10;
      let veredicto;
      if (metaCutanea && dlqiOk && !v.altoImpacto) veredicto = 'meta';
      else if (respuestaCutanea) veredicto = 'parcial';
      else veredicto = 'fracaso';
      return {
        basal: v.basal, actual: v.actual, red: Math.round(red),
        pasi75: red >= 75, pasi90, pasi100: v.actual === 0,
        absolutoOk, dlqi: dlqiDato ? v.dlqi : null, dlqiOk, altoImpacto: !!v.altoImpacto,
        veredicto
      };
    },
    format(r) {
      if (r.invalido) return 'El PASI va de <strong>0 a 72</strong> y el basal tiene que ser mayor que cero. Revisa los valores.';
      if (r.empeora) return `<strong style="color:#8c3a34;">El PASI ha subido, de ${r.basal} a ${r.actual}.</strong> Antes de considerarlo un fracaso del farmaco, descarta un desencadenante: infeccion, un farmaco nuevo (litio, betabloqueante, antipaludico), retirada de corticoide sistemico o mala adherencia.`;
      let s = `<strong>Reduccion del ${r.red}%</strong> (de ${r.basal} a ${r.actual}).`;
      const hitos = [];
      if (r.pasi100) hitos.push('PASI100');
      else if (r.pasi90) hitos.push('PASI90');
      else if (r.pasi75) hitos.push('PASI75');
      if (r.absolutoOk) hitos.push('PASI absoluto menor de 3');
      if (hitos.length) s += ` Alcanza ${hitos.join(' y ')}.`;
      if (r.veredicto === 'meta') {
        s += '<br><strong style="color:#3f6b52;">Meta alcanzada.</strong> Mantener el tratamiento y seguir midiendo.';
      } else if (r.veredicto === 'parcial') {
        s += '<br><strong style="color:#8a6a1f;">Respuesta PARCIAL.</strong> La SOLAPSO sugiere, antes de cambiar de biologico, a&#241;adir tratamiento topico, a&#241;adir un sistemico como metotrexato o fototerapia, u optimizar el que ya lleva. Cambiar de golpe quema una opcion futura sin necesidad.';
      } else {
        s += '<br><strong style="color:#8c3a34;">Fracaso.</strong> Toca cambiar. Si lo que ha fallado es un anti factor de necrosis tumoral, se cambia a un MECANISMO DISTINTO (anti interleucina 17, 23 o 12/23). Si ha fallado un anti interleucina 17, 23 o 12/23, se puede cambiar dentro de la misma clase o a otro mecanismo.';
      }
      if (r.altoImpacto) {
        s += '<br><span style="opacity:.85;">Persiste un area de alto impacto, y eso por si solo impide dar la meta por alcanzada aunque el PASI acompa&#241;e.</span>';
      }
      if (r.dlqi === null) {
        s += '<br><span style="opacity:.75;">Sin DLQI no se puede afirmar que la meta este alcanzada: la guia exige tambien un DLQI menor de 5.</span>';
      } else if (!r.dlqiOk) {
        s += `<br><span style="opacity:.85;">El DLQI sigue en ${r.dlqi}: la piel ha mejorado pero la vida del paciente todavia no. Eso es respuesta parcial, no exito.</span>`;
      }
      return s;
    },
    fragment(r) {
      if (r.invalido) return 'valores no validos';
      if (r.empeora) return `PASI al alza (${r.basal} a ${r.actual})`;
      return `reduccion del PASI ${r.red}% (${r.veredicto})`;
    }
  },

  {
    key: 'cribado-artritis', title: 'Cribado de artritis psoriasica', accent: '#3d5a73',
    subtitle: 'Cinco preguntas que conviene hacer en cada visita',
    fields: [
      { type: 'note', text: 'Hasta un tercio de los pacientes con psoriasis desarrolla artritis, la piel suele preceder a la articulacion en a&#241;os y el da&#241;o estructural es IRREVERSIBLE. Quien mira la piel esta en la mejor posicion para detectarla a tiempo.' },
      { name: 'dolor', id: 'ps-a-do', type: 'checkbox', label: 'Dolor articular que MEJORA con el movimiento y empeora con el reposo' },
      { name: 'rigidez', id: 'ps-a-ri', type: 'checkbox', label: 'Rigidez matutina de mas de 30 minutos' },
      { name: 'dactilitis', id: 'ps-a-da', type: 'checkbox', label: 'Un dedo entero hinchado alguna vez (dedo en salchicha)' },
      { name: 'entesitis', id: 'ps-a-en', type: 'checkbox', label: 'Dolor en el talon o en la planta al apoyar (entesitis)' },
      { name: 'lumbar', id: 'ps-a-lu', type: 'checkbox', label: 'Dolor lumbar nocturno que mejora al levantarse' },
      { type: 'note', text: 'Y un dato de la exploracion que no es una pregunta pero pesa:' },
      { name: 'unas', id: 'ps-a-un', type: 'checkbox', label: 'Afectacion ungueal (piqueteado, onicolisis, mancha de aceite)' }
    ],
    compute(v) {
      const items = [
        ['dolor inflamatorio', v.dolor], ['rigidez matutina prolongada', v.rigidez],
        ['dactilitis', v.dactilitis], ['entesitis', v.entesitis], ['dolor lumbar inflamatorio', v.lumbar]
      ];
      const positivos = items.filter(i => i[1]).map(i => i[0]);
      return { n: positivos.length, positivos, unas: !!v.unas, derivar: positivos.length >= 3 };
    },
    format(r) {
      let s = `<strong>${r.n} de 5 respuestas positivas.</strong>`;
      if (r.positivos.length) s += `<br><span style="opacity:.85;">Positivas: ${r.positivos.join(', ')}.</span>`;
      if (r.derivar) {
        s += '<br><strong style="color:#8c3a34;">Derivar a reumatologia.</strong> Y hacerlo SIN esperar a la radiografia: la radiografia normal no descarta enfermedad precoz, y el retraso diagnostico de mas de seis meses se asocia a peor funcion a largo plazo.';
      } else if (r.n > 0) {
        s += '<br><span style="color:#8a6a1f;">Cribado no concluyente.</span> Un solo dato positivo ya obliga a explorar las entesis y los dedos, y a repetir la pregunta en la siguiente visita. La artritis puede aparecer en cualquier momento de la evolucion.';
      } else {
        s += '<br><span style="color:#3f6b52;">Cribado negativo hoy.</span> No cierra nada: hay que repetirlo en CADA visita, porque la artritis puede aparecer a&#241;os despues de la piel.';
      }
      if (r.unas) {
        s += '<br><strong style="color:#3d5a73;">Hay afectacion ungueal,</strong> que es el mejor predictor clinico de artritis psoriasica. Con u&#241;a afectada conviene bajar el umbral para derivar aunque el cuestionario no llegue a tres.';
      }
      s += '<br><span style="opacity:.75;">Si se confirma, la eleccion del farmaco para la piel deberia servir tambien para la articulacion. Ojo: la SOLAPSO advierte de forma expresa que NO formulo la artritis como pregunta clinica propia, de modo que orienta pero no sustituye a una guia reumatologica.</span>';
      return s;
    },
    fragment: r => `cribado de artritis ${r.n}/5${r.derivar ? ', derivar' : ''}${r.unas ? ', con afectacion ungueal' : ''}`
  }
];

export const combinedNote = {
  title: 'Nota combinada', accent: '#a1442e',
  subtitle: 'Rene el PASI, la gravedad, la respuesta y el cribado de artritis',
  items: ['pasi', 'gravedad-psoriasis', 'respuesta-psoriasis', 'cribado-artritis'],
  build(results, missing) {
    const partes = [];
    if (results.pasi && !results.pasi.invalido) partes.push(`PASI ${results.pasi.pasi}/72`);
    if (results['gravedad-psoriasis'] && !results['gravedad-psoriasis'].invalido) {
      const g = results['gravedad-psoriasis'];
      partes.push(`superficie ${g.bsa}% con PGA ${g.pga}${g.candidato ? ', que cumple criterio de tratamiento sistemico' : ', enfermedad leve'}`);
    }
    if (results['respuesta-psoriasis'] && !results['respuesta-psoriasis'].invalido && !results['respuesta-psoriasis'].empeora) {
      const r = results['respuesta-psoriasis'];
      partes.push(`reduccion del PASI del ${r.red}%, con respuesta clasificada como ${r.veredicto}`);
    }
    if (results['cribado-artritis']) {
      const a = results['cribado-artritis'];
      partes.push(`cribado de artritis ${a.n}/5${a.derivar ? ', que indica derivacion a reumatologia' : ''}`);
    }
    let html = partes.length ? 'Psoriasis: ' + partes.join('; ') + '.' : 'Completa las escalas seleccionadas.';
    if (missing.length) html += `<div style="margin-top:10px;color:#b0453d;font-size:12.5px;">Faltan datos en: ${missing.join(', ')}.</div>`;
    return html;
  }
};

export default { calculators, combinedNote };
