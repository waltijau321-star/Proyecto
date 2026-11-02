// topics/broncoaspiracion/calculators.js - Cuatro decisiones de la aspiracion: es neumonitis o
// neumonia, que antibiotico y con que espectro, que riesgo tiene el paciente critico, y cuando
// reintroducir la dieta tras la extubacion.
// Fuentes: Marik PE. N Engl J Med 2001;344:665-671; guia ATS/IDSA de 2019 de neumonia
// comunitaria (cobertura anaerobia).

export const calculators = [
  {
    key: 'neumonitis-o-neumonia', title: 'Neumonitis o neumonía', accent: '#6b5a2e',
    subtitle: 'La distinción que decide el antibiótico',
    incompleteMsg: 'Marca al menos un rasgo.',
    fields: [
      { type: 'note', text: '<strong>Rasgos de neumonitis química</strong>' },
      { name: 'conciencia', id: 'asp-n1', type: 'checkbox', label: 'Conciencia marcadamente disminuida (sobredosis, convulsión, anestesia)' },
      { name: 'presenciada', id: 'asp-n2', type: 'checkbox', label: 'Aspiración presenciada o contenido gástrico en la orofaringe' },
      { name: 'horas', id: 'asp-n3', type: 'checkbox', label: 'Síntomas en las primeras horas (2 a 5 h)' },
      { name: 'joven', id: 'asp-n4', type: 'checkbox', label: 'Paciente joven sin disfagia previa' },
      { type: 'note', text: '<strong>Rasgos de neumonía por aspiración</strong>' },
      { name: 'disfagia', id: 'asp-n5', type: 'checkbox', label: 'Disfagia o dismotilidad gástrica conocida' },
      { name: 'anciano', id: 'asp-n6', type: 'checkbox', label: 'Anciano o institucionalizado' },
      { name: 'dias', id: 'asp-n7', type: 'checkbox', label: 'Cuadro de días, sin aspiración vista' },
      { name: 'neumonia', id: 'asp-n8', type: 'checkbox', label: 'Fiebre, tos y consolidación en un segmento declive' }
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
        return `<strong>Orienta a NEUMONITIS química</strong> (${r.a} rasgos frente a ${r.b}).<br>Aspirar la via aérea, intubar si no la protege, soporte respiratorio. <strong>Sin antibiótico profiláctico</strong> ni corticoides; reevaluar a las 48 horas.<br><span style="opacity:.75;">La fiebre, la leucocitosis y el infiltrado de las primeras horas pueden ser solo inflamatorios.</span>`;
      }
      if (r.cuadro === 'neumonia') {
        return `<strong>Orienta a NEUMONÍA por aspiración</strong> (${r.b} rasgos frente a ${r.a}).<br><strong>Antibiótico indicado</strong>, con cobertura de gramnegativos según el lugar de adquisición; sin anaerobios de rutina salvo absceso, empiema, periodontitis grave o esputo putrido. Valorar la deglución.<br><span style="opacity:.75;">El diagnóstico se infiere: la aspiración casi nunca se presencia.</span>`;
      }
      return '<strong>Rasgos de ambos cuadros:</strong> se solapan. Trata la lesión química con soporte y reevalua a las 48 horas; si el cuadro evoluciona como una neumonía, antibiótico.';
    },
    fragment: r => (r.cuadro === 'mixto' ? 'rasgos mixtos de neumonitis y neumonía' : `orienta a ${r.cuadro === 'neumonitis' ? 'neumonitis química' : 'neumonía por aspiración'}`)
  },

  {
    key: 'antibiotico-aspiracion', title: 'Antibiótico según el escenario', accent: '#5a4a8c',
    subtitle: 'Cuando hace falta y cuando cubrir anaerobios',
    incompleteMsg: 'Elige el escenario.',
    fields: [
      { name: 'esc', id: 'asp-a1', type: 'select', label: 'Escenario', options: [
        { value: '', label: 'Elegir...' },
        { value: 'neumonitis48', label: 'Neumonitis de menos de 48 horas' },
        { value: 'neumonitisMas', label: 'Neumonitis que no se resuelve en 48 horas' },
        { value: 'comunitaria', label: 'Neumonía por aspiración comunitaria' },
        { value: 'residencia', label: 'Neumonía por aspiración en residencia u hospital' }
      ] },
      { name: 'colonizado', id: 'asp-a2', type: 'checkbox', label: 'Obstrucción intestinal, antiácidos o antisecretores, nutrición enteral o gastroparesia' },
      { name: 'anaerobios', id: 'asp-a3', type: 'checkbox', label: 'Absceso, empiema, neumonía necrotizante, periodontitis grave o esputo putrido' },
      { name: 'intubado', id: 'asp-a4', type: 'checkbox', label: 'Paciente intubado' }
    ],
    compute(v) {
      if (!v.esc) return null;
      let decision, espectro = null;
      if (v.esc === 'neumonitis48') {
        if (v.colonizado) { decision = 'Antibiótico empírico de entrada: el estómago esta colonizado y el aspirado no es estéril.'; espectro = 'amplio, con gramnegativos (por ejemplo, cefalosporina de tercera generación, fluoroquinolona o piperacilina-tazobactam)'; }
        else decision = 'SIN antibiótico, aunque haya fiebre, leucocitosis o infiltrado. Es una lesión química y el antibiótico selecciona resistencias.';
      } else if (v.esc === 'neumonitisMas') {
        decision = 'Considerar antibiótico: la neumonitis no se ha resuelto en 48 horas.';
        espectro = 'amplio; los anaerobios no hacen falta de rutina';
      } else if (v.esc === 'comunitaria') {
        decision = 'Antibiótico indicado.';
        espectro = 'neumococo, S. aureus, H. influenzae y enterobacterias (por ejemplo, ceftriaxona o una fluoroquinolona respiratoria)';
      } else {
        decision = 'Antibiótico indicado.';
        espectro = 'gramnegativos incluida Pseudomonas (por ejemplo, piperacilina-tazobactam, ceftazidima o una fluoroquinolona), según el antibiograma local';
      }
      return { esc: v.esc, decision, espectro, anaerobios: !!v.anaerobios, intubado: !!v.intubado, sinAb: v.esc === 'neumonitis48' && !v.colonizado };
    },
    format(r) {
      let s = `<strong>${r.decision}</strong>`;
      if (r.espectro) s += `<br>Espectro: ${r.espectro}.`;
      if (r.anaerobios && !r.sinAb) s += '<br><strong style="color:#8c3a34;">Añadir cobertura anaerobia</strong> (piperacilina-tazobactam o carbapenem, o asociar clindamicina o metronidazol): hay absceso, empiema, necrosis, periodontitis grave o esputo putrido.';
      else if (!r.sinAb) s += '<br><span style="opacity:.85;">Sin cobertura anaerobia de rutina: la guía ATS/IDSA de 2019 la reserva a la sospecha de absceso o empiema. Penicilina y clindamicina solas son insuficientes para la mayoría.</span>';
      if (r.anaerobios && r.sinAb) s += '<br><span style="opacity:.85;">Si ya hay absceso o empiema no se trata de una neumonitis de pocas horas: reevalua el escenario.</span>';
      if (r.intubado) s += '<br><span style="opacity:.85;">En el intubado, cepillo protegido o lavado broncoalveolar con cultivo cuantitativo para dirigir el tratamiento y suspenderlo si es negativo.</span>';
      s += '<br><span style="opacity:.75;">Los fármacos son ejemplos de la revisión; la elección final depende del antibiograma local y de la función renal.</span>';
      return s;
    },
    fragment: r => (r.sinAb ? 'sin antibiótico de entrada' : `antibiótico${r.anaerobios ? ' con cobertura anaerobia' : ', sin anaerobios de rutina'}`)
  },

  {
    key: 'riesgo-aspiracion-critico', title: 'Riesgo de aspiración en el crítico', accent: '#3d5a73',
    subtitle: 'Factores que la revisión describe y medidas',
    incompleteMsg: 'Marca los factores presentes.',
    fields: [
      { name: 'supino', id: 'asp-r1', type: 'checkbox', label: 'Decúbito supino' },
      { name: 'gastroparesia', id: 'asp-r2', type: 'checkbox', label: 'Gastroparesia o residuo gástrico alto (quemados, sepsis, trauma, cirugía, choque)' },
      { name: 'sng', id: 'asp-r3', type: 'checkbox', label: 'Sonda nasogástrica' },
      { name: 'enteral', id: 'asp-r4', type: 'checkbox', label: 'Nutrición enteral' },
      { name: 'sedacion', id: 'asp-r5', type: 'checkbox', label: 'Sedación o conciencia disminuida' },
      { name: 'extubado', id: 'asp-r6', type: 'checkbox', label: 'Extubado en las últimas 48 horas' },
      { name: 'antisecretor', id: 'asp-r7', type: 'checkbox', label: 'Antiácidos, antagonistas H2 o inhibidores de la bomba de protones' }
    ],
    compute(v) {
      const keys = ['supino', 'gastroparesia', 'sng', 'enteral', 'sedacion', 'extubado', 'antisecretor'];
      const n = keys.filter(k => v[k]).length;
      if (!n) return null;
      const medidas = [];
      if (v.supino) medidas.push('evitar el decúbito supino estricto: hasta un 30% de los pacientes en supino tienen reflujo incluso sin sonda');
      if (v.gastroparesia) medidas.push('vigilar el residuo; la sonda pospilorica puede tener ventajas en la gastroparesia');
      if (v.extubado) medidas.push('nada por boca 6 horas tras la extubación y después pure y dieta blanda 48 horas');
      if (v.antisecretor || v.enteral || v.gastroparesia) medidas.push('si aspira, el contenido gástrico puede estar colonizado por gramnegativos y el antibiótico de entrada tiene sentido');
      if (v.sng) medidas.push('la sonda no protege de la aspiración de secreciones orofaringeas');
      return { n, medidas };
    },
    format(r) {
      let s = `<strong>${r.n} factor${r.n === 1 ? '' : 'es'} de riesgo de aspiración.</strong>`;
      if (r.medidas.length) s += '<ul style="margin:6px 0 0 18px;padding:0;">' + r.medidas.map(m => `<li style="margin:3px 0;">${m.charAt(0).toUpperCase() + m.slice(1)}.</li>`).join('') + '</ul>';
      s += '<span style="opacity:.75;">Ante una desaturación inexplicada en este paciente, piensa en una aspiración silente.</span>';
      return s;
    },
    fragment: r => `${r.n} factores de riesgo de aspiración`
  },

  {
    key: 'dieta-extubacion', title: 'Dieta tras la extubación', accent: '#3f6b52',
    subtitle: 'La pauta que propone Marik',
    incompleteMsg: 'Introduce las horas desde la extubación.',
    fields: [
      { name: 'horas', id: 'asp-d1', type: 'number', step: '0.5', label: 'Horas desde la extubación', placeholder: 'ej. 4', row: true },
      { name: 'duracion', id: 'asp-d2', required: false, type: 'number', step: '1', label: 'Horas que estuvo intubado', placeholder: 'ej. 72', row: true },
      { name: 'traumatica', id: 'asp-d3', type: 'checkbox', label: 'Intubación traumática' },
      { name: 'anatomia', id: 'asp-d4', type: 'checkbox', label: 'Alteraciones anatómicas o funcionales de la via aérea superior' },
      { name: 'tos', id: 'asp-d5', type: 'checkbox', label: 'Tos o voz húmeda con la ingesta' }
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
      if (r.fase === 'ayuno') s = `<strong>Nada por boca todavía</strong>: faltan ${Math.ceil(6 - r.h)} horas para cumplir las 6 que propone Marik, por si hubiera que reintubar.`;
      else if (r.fase === 'pure-blanda') s = '<strong>Dieta de pure y después blanda</strong>, durante al menos 48 horas.';
      else s = '<strong>Puede avanzarse la dieta</strong> si tolera: la disfunción de la deglución tras la intubación suele resolverse en 48 horas.';
      if (r.formal) s += '<br><strong style="color:#8c3a34;">Valoración formal de la deglución</strong> antes de avanzar: intubación traumática, alteraciones de la via aérea superior o signos de aspiración con la ingesta.';
      if (r.dur !== null && r.dur >= 24) s += '<br><span style="opacity:.85;">La alteración del reflejo deglutorio se detecta incluso tras 24 horas de intubación.</span>';
      s += '<br><span style="opacity:.75;">Tras la extubación se suman los sedantes residuales, la sonda y la disfunción laringea: es el momento de mayor riesgo de aspiración.</span>';
      return s;
    },
    fragment: r => ({ ayuno: 'nada por boca hasta las 6 h', 'pure-blanda': 'pure y dieta blanda 48 h', normal: 'avanzar dieta si tolera' }[r.fase])
  }
];
