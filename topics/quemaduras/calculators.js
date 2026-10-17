// topics/quemaduras/calculators.js - Las cuatro cuentas del quemado: superficie (regla de los
// nueves), volumen inicial de liquidos (Parkland segun el ATLS, con la regla de los dieces),
// pronostico (Baux y Baux modificado) y criterios de traslado a un centro de quemados.
// Fuentes: Jeschke MG, et al. Nat Rev Dis Primers 2020;6:11; manual ATLS de 10.a edicion,
// capitulo 9.

export const calculators = [
  {
    key: 'regla-nueves', title: 'Regla de los nueves', accent: '#a0522d',
    subtitle: 'Superficie quemada en el adulto, sin las superficiales',
    incompleteMsg: 'Marca las regiones con quemadura de espesor parcial o total.',
    fields: [
      { type: 'note', text: 'Marca solo las regiones quemadas en su <strong>totalidad</strong> con espesor parcial o total. Para zonas parciales o salpicadas, usa el numero de palmas.' },
      { name: 'cabeza', id: 'que-n1', type: 'checkbox', label: 'Cabeza y cuello (9%)' },
      { name: 'msd', id: 'que-n2', type: 'checkbox', label: 'Miembro superior derecho (9%)' },
      { name: 'msi', id: 'que-n3', type: 'checkbox', label: 'Miembro superior izquierdo (9%)' },
      { name: 'tant', id: 'que-n4', type: 'checkbox', label: 'Tronco anterior (18%)' },
      { name: 'tpost', id: 'que-n5', type: 'checkbox', label: 'Tronco posterior (18%)' },
      { name: 'mid', id: 'que-n6', type: 'checkbox', label: 'Miembro inferior derecho (18%)' },
      { name: 'mii', id: 'que-n7', type: 'checkbox', label: 'Miembro inferior izquierdo (18%)' },
      { name: 'perine', id: 'que-n8', type: 'checkbox', label: 'Perine (1%)' },
      { name: 'palmas', id: 'que-n9', required: false, type: 'number', step: '1', label: 'Palmas del paciente en zonas parciales (1% cada una)', placeholder: 'ej. 0' },
      { name: 'nino', id: 'que-n10', type: 'checkbox', label: 'Es un ni&#241;o' }
    ],
    compute(v) {
      const pesos = { cabeza: 9, msd: 9, msi: 9, tant: 18, tpost: 18, mid: 18, mii: 18, perine: 1 };
      let total = 0;
      for (const k in pesos) if (v[k]) total += pesos[k];
      const palmas = v.palmas === null ? 0 : Math.max(0, Math.round(v.palmas));
      total += palmas;
      if (total === 0) return null;
      const tope = total > 100;
      total = Math.min(100, total);
      const cat = total > 20 ? 'reanimacion' : (total >= 10 ? 'traslado' : 'menor');
      return { total, tope, cat, nino: !!v.nino };
    },
    format(r) {
      let s = `<strong>Superficie quemada estimada: ${r.total}%</strong>`;
      if (r.tope) s += '<br><span style="opacity:.85;">La suma superaba el 100%: revisa que no se cuente dos veces la misma zona.</span>';
      if (r.cat === 'reanimacion') s += '<br><strong>Por encima del 20%:</strong> en general requiere reanimacion con liquidos; y el espesor parcial de mas del 10% ya es criterio de traslado.';
      else if (r.cat === 'traslado') s += '<br><strong>Entre el 10% y el 20%:</strong> el espesor parcial de mas del 10% es criterio de traslado a un centro de quemados.';
      else s += '<br>Por debajo del 10%: puede ser una quemadura menor si no hay zonas especiales, tercer grado, inhalacion u otros criterios.';
      if (r.nino) s += '<br><strong style="color:#8c3a34;">En el ni&#241;o la regla de los nueves es inexacta:</strong> la cabeza es proporcionalmente mayor y las extremidades menores. Usa los diagramas de Lund y Browder.';
      s += '<br><span style="opacity:.75;">Las superficiales (primer grado) no se cuentan. Las estimaciones previas al traslado son a menudo inexactas, incluso por expertos.</span>';
      return s;
    },
    fragment: r => `superficie quemada estimada ${r.total}%`
  },

  {
    key: 'parkland-atls', title: 'Volumen de reanimacion', accent: '#8c2e2e',
    subtitle: 'Formula de Parkland segun el ATLS, titulada por la diuresis',
    incompleteMsg: 'Introduce el peso, la superficie quemada y el tipo de paciente.',
    fields: [
      { name: 'peso', id: 'que-l1', type: 'number', step: '0.1', label: 'Peso (kg)', placeholder: 'ej. 70', row: true },
      { name: 'scq', id: 'que-l2', type: 'number', step: '1', label: '% de superficie de espesor parcial o total', placeholder: 'ej. 30', row: true },
      { name: 'tipo', id: 'que-l3', type: 'select', label: 'Paciente', options: [
        { value: '', label: 'Elegir...' },
        { value: 'adulto', label: 'Adulto, quemadura termica' },
        { value: 'nino', label: 'Ni&#241;o, quemadura termica' },
        { value: 'electrica', label: 'Electrica con orina oscura (mioglobinuria)' }
      ] },
      { name: 'horas', id: 'que-l4', required: false, type: 'number', step: '0.5', label: 'Horas transcurridas desde la quemadura', placeholder: 'ej. 2' },
      { type: 'note', text: 'Las 8 primeras horas se cuentan desde la <strong>quemadura</strong>, no desde la llegada al hospital.' }
    ],
    compute(v) {
      if (v.peso === null || v.scq === null || !v.tipo || v.peso <= 0 || v.scq <= 0) return null;
      const scq = Math.min(100, v.scq);
      const factor = v.tipo === 'nino' ? 3 : (v.tipo === 'electrica' ? 4 : 2);
      const total = factor * v.peso * scq;
      const ocho = total / 2;
      const h = v.horas === null ? 0 : Math.max(0, v.horas);
      const restanOcho = Math.max(0, 8 - h);
      const ritmo1 = restanOcho > 0 ? ocho / restanOcho : null;
      const ritmo2 = (total / 2) / 16;
      let diez = null;
      if (v.tipo !== 'nino' && v.peso >= 40 && v.peso <= 130) {
        const redondeo = Math.round(scq / 10) * 10;
        diez = redondeo * 10 + (v.peso > 80 ? Math.floor((v.peso - 80) / 10) * 100 : 0);
      }
      const diuresis = v.tipo === 'nino' && v.peso < 30 ? `${(v.peso * 1).toFixed(0)} mL/h (1 mL/kg/h)`
        : (v.tipo === 'electrica' ? '100 mL/h hasta que la orina se aclare, luego 0.5 mL/kg/h'
        : `${(v.peso * 0.5).toFixed(0)} mL/h (0.5 mL/kg/h; 30 a 50 mL/h en el adulto)`);
      return {
        factor, total: Math.round(total), ocho: Math.round(ocho), ritmo1: ritmo1 === null ? null : Math.round(ritmo1),
        ritmo2: Math.round(ritmo2), diez, diuresis, tipo: v.tipo, peso: v.peso, scq, pasadas: h >= 8,
        nino30: v.tipo === 'nino' && v.peso < 30, menor20: scq < 20
      };
    },
    format(r) {
      let s = `<strong>Volumen estimado en 24 h: ${r.total} mL de Ringer lactato</strong> (${r.factor} mL x ${r.peso} kg x ${r.scq}%).`;
      if (r.ritmo1 !== null) s += `<br>Primera mitad (${r.ocho} mL) antes de cumplir 8 horas desde la quemadura: <strong>${r.ritmo1} mL/h</strong>.`;
      else s += '<br>Ya han pasado las 8 primeras horas: la segunda mitad se reparte en las 16 siguientes.';
      s += `<br>Segunda mitad en 16 horas: unos ${r.ritmo2} mL/h, sin bajar de golpe: segun la diuresis.`;
      if (r.diez !== null) s += `<br><span style="opacity:.85;">Regla de los dieces para comparar: ${r.diez} mL/h iniciales.</span>`;
      s += `<br><strong>Diuresis objetivo:</strong> ${r.diuresis}.`;
      if (r.nino30) s += '<br><span style="opacity:.85;">En el ni&#241;o de menos de 30 kg, a&#241;adir mantenimiento con dextrosa en Ringer lactato.</span>';
      if (r.tipo === 'electrica') s += '<br><span style="opacity:.85;">Consultar con la unidad de quemados antes de usar bicarbonato o manitol.</span>';
      if (r.menor20) s += '<br><span style="opacity:.85;">Por debajo del 20% muchas quemaduras no necesitan reanimacion formal, salvo electrica, inhalacion o trauma asociado.</span>';
      s += '<br><span style="opacity:.75;">La formula solo fija el ritmo INICIAL: se titula cada hora por la diuresis, sin bolos salvo hipotension. Si se dispara (mas de 1500 mL/h durante 2 h), valorar albumina al 5% o plasma.</span>';
      return s;
    },
    fragment: r => `${r.total} mL en 24 h; ${r.ritmo1 !== null ? r.ritmo1 + ' mL/h hasta las 8 h' : 'segunda mitad en 16 h'}; diuresis ${r.diuresis.split(' (')[0]}`
  },

  {
    key: 'baux', title: 'Puntuacion de Baux', accent: '#5a4a8c',
    subtitle: 'Edad mas superficie, y la inhalacion en la version modificada',
    incompleteMsg: 'Introduce la edad y la superficie quemada.',
    fields: [
      { name: 'edad', id: 'que-b1', type: 'number', step: '1', label: 'Edad (a&#241;os)', placeholder: 'ej. 60', row: true },
      { name: 'scq', id: 'que-b2', type: 'number', step: '1', label: '% de superficie quemada', placeholder: 'ej. 30', row: true },
      { name: 'inhal', id: 'que-b3', type: 'checkbox', label: 'Lesion por inhalacion' }
    ],
    compute(v) {
      if (v.edad === null || v.scq === null) return null;
      const scq = Math.max(0, Math.min(100, v.scq));
      const baux = Math.round(v.edad + scq);
      const mod = baux + (v.inhal ? 17 : 0);
      return { baux, mod, inhal: !!v.inhal };
    },
    format(r) {
      let s = `<strong>Baux: ${r.baux}. Baux modificado: ${r.mod}.</strong>`;
      if (r.inhal) s += '<br>La lesion por inhalacion suma 17 puntos en la version modificada.';
      s += '<br><span style="opacity:.85;">La edad y la superficie contribuyen por igual a la mortalidad prevista, y a mayor puntuacion, peor pronostico. La version modificada es hoy el predictor mas aceptado y se aplica tambien en ni&#241;os.</span>';
      s += '<br><span style="opacity:.75;">Es una estimacion poblacional: no decide por si sola la futilidad, y las preferencias del paciente sobre su calidad de vida deben entrar en la decision.</span>';
      return s;
    },
    fragment: r => `Baux ${r.baux}, modificado ${r.mod}`
  },

  {
    key: 'traslado-quemados', title: 'Traslado a centro de quemados', accent: '#8a5a2e',
    subtitle: 'Criterios de la American Burn Association en el ATLS',
    incompleteMsg: 'Marca los criterios presentes.',
    fields: [
      { name: 'parcial10', id: 'que-t1', type: 'checkbox', label: 'Espesor parcial de mas del 10% de superficie' },
      { name: 'zonas', id: 'que-t2', type: 'checkbox', label: 'Cara, manos, pies, genitales, perine o grandes articulaciones' },
      { name: 'tercero', id: 'que-t3', type: 'checkbox', label: 'Tercer grado (espesor total), a cualquier edad' },
      { name: 'electrica', id: 'que-t4', type: 'checkbox', label: 'Electrica, incluido el rayo' },
      { name: 'quimica', id: 'que-t5', type: 'checkbox', label: 'Quimica' },
      { name: 'inhal', id: 'que-t6', type: 'checkbox', label: 'Lesion por inhalacion' },
      { name: 'comorb', id: 'que-t7', type: 'checkbox', label: 'Enfermedad previa que complica el tratamiento (diabetes, insuficiencia renal)' },
      { name: 'trauma', id: 'que-t8', type: 'checkbox', label: 'Trauma asociado' },
      { name: 'ninoSinMedios', id: 'que-t9', type: 'checkbox', label: 'Ni&#241;o en un hospital sin personal o equipo adecuado' },
      { name: 'social', id: 'que-t10', type: 'checkbox', label: 'Necesidad de apoyo social, emocional o de rehabilitacion' },
      { name: 'traumaPrimero', id: 'que-t11', type: 'checkbox', label: 'El trauma es el mayor riesgo inmediato' },
      { name: 'largo', id: 'que-t12', type: 'checkbox', label: 'Traslado largo, de mas de 2 horas o 100 km por tierra' }
    ],
    compute(v) {
      const lista = [v.parcial10 && 'espesor parcial mayor del 10%', v.zonas && 'zona especial', v.tercero && 'tercer grado',
        v.electrica && 'electrica', v.quimica && 'quimica', v.inhal && 'inhalacion', v.comorb && 'comorbilidad',
        v.trauma && 'trauma asociado', v.ninoSinMedios && 'ni&#241;o sin medios adecuados', v.social && 'necesidad de apoyo'].filter(Boolean);
      if (!lista.length && !v.largo) return null;
      return { lista, inhal: !!v.inhal, traumaPrimero: !!(v.trauma && v.traumaPrimero), largo: !!v.largo };
    },
    format(r) {
      let s = r.lista.length
        ? `<strong style="color:#8c3a34;">Criterio de traslado a un centro de quemados.</strong><br>Presentes: ${r.lista.join(', ')}.`
        : '<strong>No hay criterios de traslado con estos datos.</strong>';
      if (r.traumaPrimero) s += '<br><strong>El trauma manda:</strong> estabilizar primero en un centro de trauma y trasladar despues.';
      if (r.inhal && r.largo) s += '<br><strong style="color:#8c3a34;">Inhalacion y traslado largo: intubar antes de salir.</strong> El estridor puede ser tardio.';
      if (r.largo) s += '<br><span style="opacity:.85;">Por encima de 2 horas o 100 km por tierra, se recomienda el transporte aereo.</span>';
      if (r.lista.length) s += '<br><span style="opacity:.75;">Antes de salir: via aerea, vias venosas largas por el edema, liquidos calculados, sonda vesical, analgesia, profilaxis antitetanica y toda la informacion con el paciente. Como los criterios son amplios, puede acordarse otro plan con el centro de quemados.</span>';
      return s;
    },
    fragment: r => (r.lista.length ? `criterio de traslado: ${r.lista.join(', ')}` : 'sin criterios de traslado')
  }
];
