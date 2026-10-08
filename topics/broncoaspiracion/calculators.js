// topics/broncoaspiracion/calculators.js - Cuatro decisiones de la aspiracion: es neumonitis o
// neumonia, que antibiotico y con que espectro, que riesgo tiene el paciente critico, y cuando
// reintroducir la dieta tras la extubacion.
// Fuentes: Marik PE. N Engl J Med 2001;344:665-671; guia ATS/IDSA de 2019 de neumonia
// comunitaria (cobertura anaerobia).

export const calculators = [
  {
    key: 'neumonitis-o-neumonia', title: 'Neumonitis o neumonia', accent: '#6b5a2e',
    subtitle: 'La distincion que decide el antibiotico',
    incompleteMsg: 'Marca al menos un rasgo.',
    fields: [
      { type: 'note', text: '<strong>Rasgos de neumonitis quimica</strong>' },
      { name: 'conciencia', id: 'asp-n1', type: 'checkbox', label: 'Conciencia marcadamente disminuida (sobredosis, convulsion, anestesia)' },
      { name: 'presenciada', id: 'asp-n2', type: 'checkbox', label: 'Aspiracion presenciada o contenido gastrico en la orofaringe' },
      { name: 'horas', id: 'asp-n3', type: 'checkbox', label: 'Sintomas en las primeras horas (2 a 5 h)' },
      { name: 'joven', id: 'asp-n4', type: 'checkbox', label: 'Paciente joven sin disfagia previa' },
      { type: 'note', text: '<strong>Rasgos de neumonia por aspiracion</strong>' },
      { name: 'disfagia', id: 'asp-n5', type: 'checkbox', label: 'Disfagia o dismotilidad gastrica conocida' },
      { name: 'anciano', id: 'asp-n6', type: 'checkbox', label: 'Anciano o institucionalizado' },
      { name: 'dias', id: 'asp-n7', type: 'checkbox', label: 'Cuadro de dias, sin aspiracion vista' },
      { name: 'neumonia', id: 'asp-n8', type: 'checkbox', label: 'Fiebre, tos y consolidacion en un segmento declive' }
    ],
    compute(v) {
      const a = ['conciencia', 'presenciada', 'horas', 'joven'].filter(k => v[k]).length;
      const b = ['disfagia', 'anciano', 'dias', 'neumonia'].filter(k => v[k]).length;
      if (!a && !b) return null;
      const cuadro = a > b ? 'neumonitis' : (b > a ? 'neumonia' : 'mixto');
      return { a, b, cuadro };
    },
    format(r) {
      if (r.cuadro === 'neumonitis') {
        return `<strong>Orienta a NEUMONITIS quimica</strong> (${r.a} rasgos frente a ${r.b}).<br>Aspirar la via aerea, intubar si no la protege, soporte respiratorio. <strong>Sin antibiotico profilactico</strong> ni corticoides; reevaluar a las 48 horas.<br><span style="opacity:.75;">La fiebre, la leucocitosis y el infiltrado de las primeras horas pueden ser solo inflamatorios.</span>`;
      }
      if (r.cuadro === 'neumonia') {
        return `<strong>Orienta a NEUMONIA por aspiracion</strong> (${r.b} rasgos frente a ${r.a}).<br><strong>Antibiotico indicado</strong>, con cobertura de gramnegativos segun el lugar de adquisicion; sin anaerobios de rutina salvo absceso, empiema, periodontitis grave o esputo putrido. Valorar la deglucion.<br><span style="opacity:.75;">El diagnostico se infiere: la aspiracion casi nunca se presencia.</span>`;
      }
      return '<strong>Rasgos de ambos cuadros:</strong> se solapan. Trata la lesion quimica con soporte y reevalua a las 48 horas; si el cuadro evoluciona como una neumonia, antibiotico.';
    },
    fragment: r => (r.cuadro === 'mixto' ? 'rasgos mixtos de neumonitis y neumonia' : `orienta a ${r.cuadro === 'neumonitis' ? 'neumonitis quimica' : 'neumonia por aspiracion'}`)
  },

  {
    key: 'antibiotico-aspiracion', title: 'Antibiotico segun el escenario', accent: '#5a4a8c',
    subtitle: 'Cuando hace falta y cuando cubrir anaerobios',
    incompleteMsg: 'Elige el escenario.',
    fields: [
      { name: 'esc', id: 'asp-a1', type: 'select', label: 'Escenario', options: [
        { value: '', label: 'Elegir...' },
        { value: 'neumonitis48', label: 'Neumonitis de menos de 48 horas' },
        { value: 'neumonitisMas', label: 'Neumonitis que no se resuelve en 48 horas' },
        { value: 'comunitaria', label: 'Neumonia por aspiracion comunitaria' },
        { value: 'residencia', label: 'Neumonia por aspiracion en residencia u hospital' }
      ] },
      { name: 'colonizado', id: 'asp-a2', type: 'checkbox', label: 'Obstruccion intestinal, antiacidos o antisecretores, nutricion enteral o gastroparesia' },
      { name: 'anaerobios', id: 'asp-a3', type: 'checkbox', label: 'Absceso, empiema, neumonia necrotizante, periodontitis grave o esputo putrido' },
      { name: 'intubado', id: 'asp-a4', type: 'checkbox', label: 'Paciente intubado' }
    ],
    compute(v) {
      if (!v.esc) return null;
      let decision, espectro = null;
      if (v.esc === 'neumonitis48') {
        if (v.colonizado) { decision = 'Antibiotico empirico de entrada: el estomago esta colonizado y el aspirado no es esteril.'; espectro = 'amplio, con gramnegativos (por ejemplo, cefalosporina de tercera generacion, fluoroquinolona o piperacilina-tazobactam)'; }
        else decision = 'SIN antibiotico, aunque haya fiebre, leucocitosis o infiltrado. Es una lesion quimica y el antibiotico selecciona resistencias.';
      } else if (v.esc === 'neumonitisMas') {
        decision = 'Considerar antibiotico: la neumonitis no se ha resuelto en 48 horas.';
        espectro = 'amplio; los anaerobios no hacen falta de rutina';
      } else if (v.esc === 'comunitaria') {
        decision = 'Antibiotico indicado.';
        espectro = 'neumococo, S. aureus, H. influenzae y enterobacterias (por ejemplo, ceftriaxona o una fluoroquinolona respiratoria)';
      } else {
        decision = 'Antibiotico indicado.';
        espectro = 'gramnegativos incluida Pseudomonas (por ejemplo, piperacilina-tazobactam, ceftazidima o una fluoroquinolona), segun el antibiograma local';
      }
      return { esc: v.esc, decision, espectro, anaerobios: !!v.anaerobios, intubado: !!v.intubado, sinAb: v.esc === 'neumonitis48' && !v.colonizado };
    },
    format(r) {
      let s = `<strong>${r.decision}</strong>`;
      if (r.espectro) s += `<br>Espectro: ${r.espectro}.`;
      if (r.anaerobios && !r.sinAb) s += '<br><strong style="color:#8c3a34;">A&#241;adir cobertura anaerobia</strong> (piperacilina-tazobactam o carbapenem, o asociar clindamicina o metronidazol): hay absceso, empiema, necrosis, periodontitis grave o esputo putrido.';
      else if (!r.sinAb) s += '<br><span style="opacity:.85;">Sin cobertura anaerobia de rutina: la guia ATS/IDSA de 2019 la reserva a la sospecha de absceso o empiema. Penicilina y clindamicina solas son insuficientes para la mayoria.</span>';
      if (r.anaerobios && r.sinAb) s += '<br><span style="opacity:.85;">Si ya hay absceso o empiema no se trata de una neumonitis de pocas horas: reevalua el escenario.</span>';
      if (r.intubado) s += '<br><span style="opacity:.85;">En el intubado, cepillo protegido o lavado broncoalveolar con cultivo cuantitativo para dirigir el tratamiento y suspenderlo si es negativo.</span>';
      s += '<br><span style="opacity:.75;">Los farmacos son ejemplos de la revision; la eleccion final depende del antibiograma local y de la funcion renal.</span>';
      return s;
    },
    fragment: r => (r.sinAb ? 'sin antibiotico de entrada' : `antibiotico${r.anaerobios ? ' con cobertura anaerobia' : ', sin anaerobios de rutina'}`)
  },

  {
    key: 'riesgo-aspiracion-critico', title: 'Riesgo de aspiracion en el critico', accent: '#3d5a73',
    subtitle: 'Factores que la revision describe y medidas',
    incompleteMsg: 'Marca los factores presentes.',
    fields: [
      { name: 'supino', id: 'asp-r1', type: 'checkbox', label: 'Decubito supino' },
      { name: 'gastroparesia', id: 'asp-r2', type: 'checkbox', label: 'Gastroparesia o residuo gastrico alto (quemados, sepsis, trauma, cirugia, choque)' },
      { name: 'sng', id: 'asp-r3', type: 'checkbox', label: 'Sonda nasogastrica' },
      { name: 'enteral', id: 'asp-r4', type: 'checkbox', label: 'Nutricion enteral' },
      { name: 'sedacion', id: 'asp-r5', type: 'checkbox', label: 'Sedacion o conciencia disminuida' },
      { name: 'extubado', id: 'asp-r6', type: 'checkbox', label: 'Extubado en las ultimas 48 horas' },
      { name: 'antisecretor', id: 'asp-r7', type: 'checkbox', label: 'Antiacidos, antagonistas H2 o inhibidores de la bomba de protones' }
    ],
    compute(v) {
      const keys = ['supino', 'gastroparesia', 'sng', 'enteral', 'sedacion', 'extubado', 'antisecretor'];
      const n = keys.filter(k => v[k]).length;
      if (!n) return null;
      const medidas = [];
      if (v.supino) medidas.push('evitar el decubito supino estricto: hasta un 30% de los pacientes en supino tienen reflujo incluso sin sonda');
      if (v.gastroparesia) medidas.push('vigilar el residuo; la sonda pospilorica puede tener ventajas en la gastroparesia');
      if (v.extubado) medidas.push('nada por boca 6 horas tras la extubacion y despues pure y dieta blanda 48 horas');
      if (v.antisecretor || v.enteral || v.gastroparesia) medidas.push('si aspira, el contenido gastrico puede estar colonizado por gramnegativos y el antibiotico de entrada tiene sentido');
      if (v.sng) medidas.push('la sonda no protege de la aspiracion de secreciones orofaringeas');
      return { n, medidas };
    },
    format(r) {
      let s = `<strong>${r.n} factor${r.n === 1 ? '' : 'es'} de riesgo de aspiracion.</strong>`;
      if (r.medidas.length) s += '<ul style="margin:6px 0 0 18px;padding:0;">' + r.medidas.map(m => `<li style="margin:3px 0;">${m.charAt(0).toUpperCase() + m.slice(1)}.</li>`).join('') + '</ul>';
      s += '<span style="opacity:.75;">Ante una desaturacion inexplicada en este paciente, piensa en una aspiracion silente.</span>';
      return s;
    },
    fragment: r => `${r.n} factores de riesgo de aspiracion`
  },

  {
    key: 'dieta-extubacion', title: 'Dieta tras la extubacion', accent: '#3f6b52',
    subtitle: 'La pauta que propone Marik',
    incompleteMsg: 'Introduce las horas desde la extubacion.',
    fields: [
      { name: 'horas', id: 'asp-d1', type: 'number', step: '0.5', label: 'Horas desde la extubacion', placeholder: 'ej. 4', row: true },
      { name: 'duracion', id: 'asp-d2', required: false, type: 'number', step: '1', label: 'Horas que estuvo intubado', placeholder: 'ej. 72', row: true },
      { name: 'traumatica', id: 'asp-d3', type: 'checkbox', label: 'Intubacion traumatica' },
      { name: 'anatomia', id: 'asp-d4', type: 'checkbox', label: 'Alteraciones anatomicas o funcionales de la via aerea superior' },
      { name: 'tos', id: 'asp-d5', type: 'checkbox', label: 'Tos o voz humeda con la ingesta' }
    ],
    compute(v) {
      if (v.horas === null) return null;
      const h = Math.max(0, v.horas);
      let fase;
      if (h < 6) fase = 'ayuno';
      else if (h < 54) fase = 'pure-blanda';
      else fase = 'normal';
      return { h, fase, formal: !!(v.traumatica || v.anatomia || v.tos), dur: v.duracion };
    },
    format(r) {
      let s;
      if (r.fase === 'ayuno') s = `<strong>Nada por boca todavia</strong>: faltan ${Math.ceil(6 - r.h)} horas para cumplir las 6 que propone Marik, por si hubiera que reintubar.`;
      else if (r.fase === 'pure-blanda') s = '<strong>Dieta de pure y despues blanda</strong>, durante al menos 48 horas.';
      else s = '<strong>Puede avanzarse la dieta</strong> si tolera: la disfuncion de la deglucion tras la intubacion suele resolverse en 48 horas.';
      if (r.formal) s += '<br><strong style="color:#8c3a34;">Valoracion formal de la deglucion</strong> antes de avanzar: intubacion traumatica, alteraciones de la via aerea superior o signos de aspiracion con la ingesta.';
      if (r.dur !== null && r.dur >= 24) s += '<br><span style="opacity:.85;">La alteracion del reflejo deglutorio se detecta incluso tras 24 horas de intubacion.</span>';
      s += '<br><span style="opacity:.75;">Tras la extubacion se suman los sedantes residuales, la sonda y la disfuncion laringea: es el momento de mayor riesgo de aspiracion.</span>';
      return s;
    },
    fragment: r => ({ ayuno: 'nada por boca hasta las 6 h', 'pure-blanda': 'pure y dieta blanda 48 h', normal: 'avanzar dieta si tolera' }[r.fase])
  }
];
