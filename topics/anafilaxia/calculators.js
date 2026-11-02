// topics/anafilaxia/calculators.js - Las cuatro decisiones de la anafilaxia: es anafilaxia,
// cuanta adrenalina intramuscular, como preparo la perfusion si no responde, y cuanto observo.
// Fuente: practice parameter de 2020 de la Joint Task Force on Practice Parameters (Shaker MS,
// et al. J Allergy Clin Immunol 2020;145(4):1082-1123, doi:10.1016/j.jaci.2020.01.017).

export const calculators = [
  {
    key: 'criterios-anafilaxia', title: 'Criterios clínicos de anafilaxia', accent: '#8a3a52',
    subtitle: 'Basta con cumplir uno de los tres',
    incompleteMsg: 'Marca al menos un hallazgo o el tipo de exposición.',
    fields: [
      { name: 'exposicion', id: 'ana-c1', type: 'select', label: 'Exposición previa', options: [
        { value: '', label: 'Elegir...' },
        { value: 'ninguna', label: 'Sin alérgeno identificado' },
        { value: 'probable', label: 'Alérgeno PROBABLE para este paciente' },
        { value: 'conocido', label: 'Alérgeno CONOCIDO para este paciente' }
      ] },
      { name: 'piel', id: 'ana-c2', type: 'checkbox', label: 'Piel o mucosas: urticaria generalizada, prurito, rubor, edema de labios, lengua o uvula' },
      { name: 'resp', id: 'ana-c3', type: 'checkbox', label: 'Respiratorio: disnea, sibilancias, estridor, hipoxemia' },
      { name: 'hipo', id: 'ana-c4', type: 'checkbox', label: 'Hipotensión o síntomas de disfunción de órgano (síncope, hipotonía, incontinencia)' },
      { name: 'gi', id: 'ana-c5', type: 'checkbox', label: 'Gastrointestinal persistente: dolor abdominal cólico, vómitos' },
      { name: 'agudo', id: 'ana-c6', type: 'checkbox', label: 'Inicio agudo, en minutos u horas' },
      { type: 'note', text: 'Cumplir los criterios <strong>no es requisito</strong> para administrar adrenalina. Si se sospecha una anafilaxia inminente, se administra.' }
    ],
    compute(v) {
      if (!v.exposicion && !v.piel && !v.resp && !v.hipo && !v.gi) return null;
      const c1 = !!v.agudo && !!v.piel && (!!v.resp || !!v.hipo);
      const dominios = [v.piel, v.resp, v.hipo, v.gi].filter(Boolean).length;
      const c2 = (v.exposicion === 'probable' || v.exposicion === 'conocido') && dominios >= 2;
      const c3 = v.exposicion === 'conocido' && !!v.hipo;
      const cumplidos = [c1 && 'criterio 1', c2 && 'criterio 2', c3 && 'criterio 3'].filter(Boolean);
      const soloPiel = !!v.piel && !v.resp && !v.hipo && !v.gi;
      return { c1, c2, c3, cumplidos, probable: cumplidos.length > 0, dominios, soloPiel, sinAgudo: !v.agudo };
    },
    format(r) {
      let s;
      if (r.probable) {
        s = `<strong style="color:#8c3a34;">Anafilaxia PROBABLE (${r.cumplidos.join(', ')}).</strong> Adrenalina intramuscular en el muslo sin demora.`;
      } else if (r.soloPiel) {
        s = '<strong>No se cumplen criterios: afectación cutánea aislada.</strong> La urticaria aislada tras un alérgeno puede responder a antihistamínicos, pero vigila la aparición de otros dominios.';
      } else {
        s = '<strong>No se cumplen los criterios con estos datos.</strong> Reevalua: la anafilaxia evoluciona en minutos.';
      }
      if (!r.probable && r.sinAgudo && r.dominios >= 2) {
        s += '<br><span style="opacity:.85;">El criterio 1 exige un inicio agudo, en minutos u horas.</span>';
      }
      s += '<br><span style="opacity:.85;">Los criterios tienen una sensibilidad del 95% y una especificidad del 71% en urgencias. Son una ayuda: <strong>no sustituyen el juicio clínico</strong>, y la adrenalina no se limita a quien los cumple.</span>';
      s += '<br><span style="opacity:.75;">Recuerda que pueden faltar la piel (criterios 2 y 3) y la hipotensión (criterios 1 y 2).</span>';
      return s;
    },
    fragment: r => (r.probable ? `anafilaxia probable (${r.cumplidos.join(', ')})` : 'no se cumplen criterios de anafilaxia con estos datos')
  },

  {
    key: 'adrenalina-im', title: 'Adrenalina intramuscular', accent: '#8c2e2e',
    subtitle: '0.01 mg/kg en el muslo, con techo por edad',
    incompleteMsg: 'Introduce el peso y elige adulto o niño.',
    fields: [
      { name: 'peso', id: 'ana-a1', type: 'number', step: '0.1', label: 'Peso (kg)', placeholder: 'ej. 70', row: true },
      { name: 'grupo', id: 'ana-a2', type: 'select', label: 'Paciente', row: true, options: [
        { value: '', label: 'Elegir...' },
        { value: 'adulto', label: 'Adulto' },
        { value: 'nino', label: 'Niño' }
      ] },
      { name: 'dosis', id: 'ana-a3', required: false, type: 'number', step: '1', label: 'Dosis ya administradas en este episodio', placeholder: 'ej. 0' }
    ],
    compute(v) {
      if (v.peso === null || !v.grupo || v.peso <= 0) return null;
      const techo = v.grupo === 'adulto' ? 0.5 : 0.3;
      const calc = 0.01 * v.peso;
      const mg = Math.min(calc, techo);
      const previas = v.dosis === null ? 0 : v.dosis;
      return { mg: Math.round(mg * 100) / 100, mL: Math.round(mg * 100) / 100, techo, topado: calc > techo, previas, grupo: v.grupo };
    },
    format(r) {
      let s = `<strong>${r.mg} mg intramuscular = ${r.mL} mL de la solución de 1 mg/mL (1:1000)</strong>, en la cara anterolateral del MUSLO.`;
      if (r.topado) s += `<br><span style="opacity:.85;">Se aplica el máximo de ${r.techo} mg para ${r.grupo === 'adulto' ? 'el adulto' : 'el niño'}.</span>`;
      s += '<br>Se puede repetir cada <strong>5 a 15 minutos</strong> según la respuesta.';
      if (r.previas >= 1) {
        s += `<br><strong style="color:#8c3a34;">Esta será la dosis número ${r.previas + 1}.</strong> Necesitar más de una es el factor de riesgo de reacción bifásica de más peso (odds ratio 4.82): la guía sugiere observación prolongada.`;
      }
      if (r.previas >= 2) {
        s += '<br><span style="opacity:.85;">Si no hay respuesta pese a dosis repetidas y suero intravenoso, el siguiente paso es la adrenalina en <strong>perfusión</strong> en un entorno monitorizado, no un bolo intravenoso.</span>';
      }
      s += '<br><span style="opacity:.75;">Muslo antes que deltoides y que via subcutánea: en voluntarios alcanza concentraciones más altas y su efecto máximo en unos 10 minutos. No existe contraindicación absoluta para la adrenalina en la anafilaxia.</span>';
      return s;
    },
    fragment: r => `adrenalina ${r.mg} mg intramuscular en el muslo, repetible cada 5 a 15 min`
  },

  {
    key: 'perfusion-adrenalina', title: 'Perfusión de adrenalina', accent: '#3d5a73',
    subtitle: 'Para la anafilaxia que no responde: perfusión, no bolo',
    incompleteMsg: 'Introduce la dosis deseada en mcg/min.',
    fields: [
      { name: 'dosis', id: 'ana-p1', type: 'number', step: '0.5', label: 'Dosis deseada (mcg/min)', placeholder: 'ej. 2', row: true },
      { name: 'prep', id: 'ana-p2', type: 'select', label: 'Preparacion', row: true, options: [
        { value: 'remota', label: '1 mg en 1000 mL de salino (1 mcg/mL)' },
        { value: 'bomba', label: '1 mg en 100 mL de salino (10 mcg/mL)' }
      ] },
      { name: 'imPrevia', id: 'ana-p3', type: 'checkbox', label: 'Ya se ha dado adrenalina intramuscular y suero intravenoso sin respuesta adecuada' },
      { type: 'note', text: 'La preparación de 1 mg en 1000 mL es la que describe la guía para entornos remotos sin bomba. En el hospital, preferiblemente con bomba de infusión y monitorización.' }
    ],
    compute(v) {
      if (v.dosis === null || v.dosis <= 0) return null;
      const conc = v.prep === 'bomba' ? 10 : 1; // mcg/mL
      const mlMin = v.dosis / conc;
      const mlH = mlMin * 60;
      return {
        dosis: v.dosis, conc, mlMin: Math.round(mlMin * 100) / 100, mlH: Math.round(mlH * 10) / 10,
        bajo: v.dosis < 2, alto: v.dosis > 10, imPrevia: !!v.imPrevia
      };
    },
    format(r) {
      let s = `<strong>${r.dosis} mcg/min = ${r.mlH} mL/h</strong> (${r.mlMin} mL/min) con una concentración de ${r.conc} mcg/mL.`;
      s += '<br>Rango descrito por la guía: iniciar a <strong>2 mcg/min</strong> y subir hasta <strong>10 mcg/min</strong>, titulando de forma continua por tensión, frecuencia y oxigenación.';
      if (r.bajo) s += '<br><span style="opacity:.85;">Por debajo del punto de partida que describe la guía (2 mcg/min).</span>';
      if (r.alto) s += '<br><strong style="color:#8c3a34;">Por encima del máximo descrito (10 mcg/min).</strong> A esta altura el paciente debe estar en una unidad de críticos y conviene reevaluar el diagnóstico y el volumen.';
      if (!r.imPrevia) {
        s += '<br><strong style="color:#8c3a34;">La perfusión es para la respuesta INADECUADA a la adrenalina intramuscular y al suero intravenoso.</strong> No es la primera línea.';
      }
      s += '<br><span style="opacity:.75;">La adrenalina intravenosa no se recomienda como primera línea ni siquiera en el hospital, por el riesgo de arritmias e infarto. Monitorización continua del ritmo.</span>';
      return s;
    },
    fragment: r => `adrenalina en perfusión a ${r.dosis} mcg/min = ${r.mlH} mL/h`
  },

  {
    key: 'observacion-bifasica', title: 'Tiempo de observación', accent: '#3f6b52',
    subtitle: 'Cuanto vigilar antes del alta',
    incompleteMsg: 'Indica si los síntomas ya se han resuelto.',
    fields: [
      { name: 'resuelto', id: 'ana-o1', type: 'select', label: 'Situación actual', options: [
        { value: '', label: 'Elegir...' },
        { value: 'no', label: 'Síntomas todavía presentes' },
        { value: 'si', label: 'Resolución completa' }
      ] },
      { name: 'grave', id: 'ana-o2', type: 'checkbox', label: 'La reacción inicial fue grave' },
      { name: 'variasDosis', id: 'ana-o3', type: 'checkbox', label: 'Necesito más de una dosis de adrenalina' },
      { name: 'pulso', id: 'ana-o4', type: 'checkbox', label: 'Presión de pulso amplia' },
      { name: 'desconocido', id: 'ana-o5', type: 'checkbox', label: 'Desencadenante desconocido' },
      { name: 'farmacoNino', id: 'ana-o6', type: 'checkbox', label: 'Niño con un fármaco como desencadenante' },
      { name: 'mortal', id: 'ana-o7', type: 'checkbox', label: 'Comorbilidad cardiovascular, sin acceso a adrenalina o a emergencias, o escasa capacidad de autocuidado' }
    ],
    compute(v) {
      if (!v.resuelto) return null;
      const mayores = [v.grave && 'reacción grave', v.variasDosis && 'más de una dosis de adrenalina'].filter(Boolean);
      const menores = [v.pulso && 'presión de pulso amplia', v.desconocido && 'desencadenante desconocido', v.farmacoNino && 'fármaco en el niño'].filter(Boolean);
      return { activo: v.resuelto === 'no', mayores, menores, mortal: !!v.mortal };
    },
    format(r) {
      if (r.activo) {
        return '<strong>Todavía no se cuenta el tiempo de observación.</strong> Todo paciente queda en observación, en un entorno capaz de tratar la anafilaxia, hasta la resolución COMPLETA de los síntomas. Si persisten, se trata la reacción: no es una bifásica.';
      }
      let s;
      if (r.mayores.length || r.mortal) {
        s = `<strong style="color:#8c3a34;">Observación PROLONGADA: hasta 6 horas o más, incluido el ingreso.</strong>`;
        const motivos = [...r.mayores];
        if (r.mortal) motivos.push('factores de riesgo de anafilaxia mortal');
        s += `<br>Motivo: ${motivos.join(', ')}.`;
      } else if (r.menores.length) {
        s = '<strong>Valorar observación prolongada.</strong>';
        s += `<br>La guía permite considerarla ante: ${r.menores.join(', ')}.`;
      } else {
        s = '<strong>Sin factores de riesgo graves: el alta tras 1 hora asintomático puede ser razonable.</strong>';
        s += '<br><span style="opacity:.85;">El valor predictivo negativo de 1 hora de observación es del 95%.</span>';
      }
      s += '<br><span style="opacity:.85;">Antihistamínicos y corticoides <strong>no</strong> previenen la reacción bifásica y no acortan la observación.</span>';
      s += '<br><span style="opacity:.75;">Al alta, a todos: educación sobre la bifásica y el desencadenante, autoinyector de adrenalina y derivación al alergologo.</span>';
      return s;
    },
    fragment(r) {
      if (r.activo) return 'observación hasta la resolución completa de los síntomas';
      return (r.mayores.length || r.mortal) ? 'observación prolongada, hasta 6 h o ingreso' : (r.menores.length ? 'valorar observación prolongada' : 'alta tras 1 h asintomático puede ser razonable');
    }
  }
];
