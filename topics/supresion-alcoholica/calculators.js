// topics/supresion-alcoholica/calculators.js - Cuatro herramientas de la abstinencia alcoholica:
// gravedad actual (CIWA-Ar), riesgo antes de los sintomas (PAWSS), donde tratar, y tiamina y
// electrolitos.
// Fuentes: guia de la ASAM de 2020 (J Addict Med 2020;14(3S Suppl 1):1-72) y validacion de la
// PAWSS (Maldonado JR, et al. Alcohol Alcohol 2015;50(5):509-518).

// Los 10 apartados son opcionales para el motor (required: false): un apartado en blanco cuenta
// como 0, y solo se exige que haya al menos uno relleno (lo comprueba compute).
const item = (name, id, label, max) => ({ name, id, type: 'number', step: '1', label: `${label} (0-${max})`, placeholder: '0', row: true, max, required: false });

export const calculators = [
  {
    key: 'ciwa-ar', title: 'CIWA-Ar', accent: '#6b4a8c',
    subtitle: 'Gravedad actual de la abstinencia: mide, no diagnostica',
    incompleteMsg: 'Rellena al menos un apartado.',
    fields: [
      item('nauseas', 'sup-c1', 'Nauseas y vomitos', 7),
      item('temblor', 'sup-c2', 'Temblor', 7),
      item('sudor', 'sup-c3', 'Sudoracion paroxistica', 7),
      item('ansiedad', 'sup-c4', 'Ansiedad', 7),
      item('agitacion', 'sup-c5', 'Agitacion', 7),
      item('tactil', 'sup-c6', 'Alteraciones tactiles', 7),
      item('auditiva', 'sup-c7', 'Alteraciones auditivas', 7),
      item('visual', 'sup-c8', 'Alteraciones visuales', 7),
      item('cefalea', 'sup-c9', 'Cefalea o pesadez de cabeza', 7),
      item('orientacion', 'sup-c10', 'Orientacion y nivel de conciencia', 4),
      { name: 'delirium', id: 'sup-c11', type: 'checkbox', label: 'El paciente esta confuso o no puede seguir instrucciones' },
      { type: 'note', text: 'Una escala de gravedad <strong>no sirve para diagnosticar</strong> la abstinencia: otras enfermedades elevan la puntuacion.' }
    ],
    compute(v) {
      const claves = ['nauseas', 'temblor', 'sudor', 'ansiedad', 'agitacion', 'tactil', 'auditiva', 'visual', 'cefalea', 'orientacion'];
      if (claves.every(k => v[k] === null)) return null;
      const tope = k => (k === 'orientacion' ? 4 : 7);
      let total = 0, recortados = false;
      for (const k of claves) {
        if (v[k] === null) continue;
        const x = Math.max(0, Math.min(tope(k), Math.round(v[k])));
        if (x !== v[k]) recortados = true;
        total += x;
      }
      const cat = total < 10 ? 'leve' : (total <= 18 ? 'moderada' : 'grave');
      return { total, cat, recortados, delirium: !!v.delirium };
    },
    format(r) {
      if (r.delirium) {
        return `<strong style="color:#8c3a34;">CIWA-Ar de ${r.total}, pero NO es valida en un paciente confuso.</strong> Depende de lo que cuenta el paciente. Para el delirium por supresion, usar CAM-ICU, RASS, Delirium Detection Score o MINDS, y tratar como abstinencia complicada: ingreso, a menudo en criticos, con benzodiacepina intravenosa hasta somnolencia ligera.`;
      }
      const txt = {
        leve: 'Abstinencia LEVE. Si el riesgo de complicacion es minimo, basta con cuidados de soporte o un farmaco (benzodiacepina, carbamazepina o gabapentina). Puede plantearse el manejo ambulatorio.',
        moderada: 'Abstinencia MODERADA. Precisa tratamiento farmacologico: benzodiacepinas de primera linea, carbamazepina o gabapentina como alternativas.',
        grave: 'Abstinencia GRAVE. Benzodiacepina de primera linea con dosis de CARGA inicial, con diazepam o clordiazepoxido como preferidos. Manejo ingresado.'
      };
      let s = `<strong>CIWA-Ar: ${r.total} puntos.</strong><br>${txt[r.cat]}`;
      if (r.recortados) s += '<br><span style="opacity:.85;">Algun apartado estaba fuera de rango y se ajusto (0 a 7, y 0 a 4 en orientacion).</span>';
      s += '<br><span style="opacity:.85;">En el paciente medico o quirurgico, una puntuacion baja se interpreta con confianza y una alta con cautela: fiebre, dolor o ansiedad de otro origen la elevan.</span>';
      s += '<br><span style="opacity:.75;">Reevaluar cada 1 a 4 horas en la moderada o grave; estabilizado (menos de 10 durante 24 h), cada 4 a 8 horas.</span>';
      return s;
    },
    fragment: r => (r.delirium ? 'CIWA-Ar no valida en el delirium' : `CIWA-Ar ${r.total}: abstinencia ${r.cat}`)
  },

  {
    key: 'pawss', title: 'PAWSS', accent: '#5a4a8c',
    subtitle: 'Riesgo de abstinencia complicada en el paciente ingresado',
    incompleteMsg: 'Responde a la pregunta de entrada.',
    fields: [
      { name: 'entrada', id: 'sup-p0', type: 'select', label: 'Consumo de alcohol en los ultimos 30 dias, o alcoholemia positiva al ingreso', options: [
        { value: '', label: 'Elegir...' },
        { value: 'si', label: 'Si' },
        { value: 'no', label: 'No' }
      ] },
      { name: 'intox', id: 'sup-p1', type: 'checkbox', label: 'Se ha intoxicado o emborrachado en los ultimos 30 dias' },
      { name: 'trat', id: 'sup-p2', type: 'checkbox', label: 'Tratamiento previo del trastorno por consumo de alcohol' },
      { name: 'abst', id: 'sup-p3', type: 'checkbox', label: 'Episodios previos de abstinencia' },
      { name: 'lagunas', id: 'sup-p4', type: 'checkbox', label: 'Lagunas de memoria por el alcohol' },
      { name: 'conv', id: 'sup-p5', type: 'checkbox', label: 'Convulsiones previas por abstinencia' },
      { name: 'dt', id: 'sup-p6', type: 'checkbox', label: 'Delirium por supresion previo' },
      { name: 'sedantes', id: 'sup-p7', type: 'checkbox', label: 'Ha combinado alcohol con benzodiacepinas o barbituricos' },
      { name: 'otras', id: 'sup-p8', type: 'checkbox', label: 'Ha combinado alcohol con otras sustancias' },
      { name: 'bal', id: 'sup-p9', type: 'checkbox', label: 'Alcoholemia mayor de 200 mg/dL al llegar' },
      { name: 'autonomica', id: 'sup-p10', type: 'checkbox', label: 'Hiperactividad autonomica: frecuencia mayor de 120, temblor, sudoracion, agitacion o nauseas' }
    ],
    compute(v) {
      if (!v.entrada) return null;
      if (v.entrada === 'no') return { aplica: false };
      const keys = ['intox', 'trat', 'abst', 'lagunas', 'conv', 'dt', 'sedantes', 'otras', 'bal', 'autonomica'];
      const total = keys.filter(k => v[k]).length;
      return { aplica: true, total, alto: total >= 4, previaComplicada: !!(v.conv || v.dt) };
    },
    format(r) {
      if (!r.aplica) return '<strong>La PAWSS no se aplica:</strong> sin consumo en los ultimos 30 dias ni alcoholemia positiva no hay riesgo de abstinencia que estimar. Si la historia no es fiable, reevaluar.';
      let s = r.alto
        ? `<strong style="color:#8c3a34;">PAWSS: ${r.total} puntos. Riesgo ALTO de abstinencia complicada.</strong><br>Tratamiento preventivo con benzodiacepinas aunque los sintomas todavia sean leves, y vigilancia estrecha.`
        : `<strong>PAWSS: ${r.total} puntos. Riesgo bajo de abstinencia complicada.</strong><br>Vigilar con una escala validada; tratar si aparecen sintomas.`;
      if (r.previaComplicada) s += '<br><span style="opacity:.85;">El antecedente de convulsiones o delirium por abstinencia es uno de los factores de riesgo de mas peso que recoge la guia.</span>';
      s += '<br><span style="opacity:.75;">Umbral de 4 puntos. En su validacion prospectiva en pacientes medicos identifico a quienes llegaron a una CIWA-Ar de 15 o mas con una sensibilidad del 93.1% y una especificidad del 99.5%.</span>';
      return s;
    },
    fragment: r => (!r.aplica ? 'PAWSS no aplicable' : `PAWSS ${r.total}: riesgo ${r.alto ? 'alto' : 'bajo'} de abstinencia complicada`)
  },

  {
    key: 'ambito-abstinencia', title: 'Donde tratar la abstinencia', accent: '#8a5a2e',
    subtitle: 'Criterios de la guia para el alta desde urgencias',
    incompleteMsg: 'Elige la gravedad actual.',
    fields: [
      { name: 'grav', id: 'sup-a1', type: 'select', label: 'Gravedad actual', options: [
        { value: '', label: 'Elegir...' },
        { value: 'leve', label: 'Leve (CIWA-Ar menor de 10)' },
        { value: 'moderada', label: 'Moderada (CIWA-Ar 10 a 18)' },
        { value: 'grave', label: 'Grave (CIWA-Ar 19 o mas)' },
        { value: 'complicada', label: 'Complicada: convulsion, delirium o alucinaciones nuevas' }
      ] },
      { name: 'intox', id: 'sup-a2', type: 'checkbox', label: 'Intoxicado ahora (alcohol u otras drogas)' },
      { name: 'historia', id: 'sup-a3', type: 'checkbox', label: 'Antecedente de convulsiones o delirium por abstinencia' },
      { name: 'comorb', id: 'sup-a4', type: 'checkbox', label: 'Comorbilidad medica o psiquiatrica significativa' },
      { name: 'seguimiento', id: 'sup-a5', type: 'checkbox', label: 'Puede acudir a las visitas de seguimiento y tiene apoyo' },
      { name: 'suicidio', id: 'sup-a6', type: 'checkbox', label: 'Riesgo activo de suicidio' },
      { name: 'embarazo', id: 'sup-a7', type: 'checkbox', label: 'Embarazo' }
    ],
    compute(v) {
      if (!v.grav) return null;
      const bloqueos = [
        v.grav === 'grave' && 'abstinencia grave',
        v.grav === 'complicada' && 'abstinencia complicada',
        v.intox && 'intoxicacion actual',
        v.historia && 'antecedente de abstinencia complicada',
        v.comorb && 'comorbilidad significativa',
        !v.seguimiento && 'no puede asegurar el seguimiento',
        v.grav === 'moderada' && (v.historia || v.comorb || v.intox) && 'moderada con factores que la complican'
      ].filter(Boolean);
      const unicos = [...new Set(bloqueos)];
      return { grav: v.grav, ambulatorio: unicos.length === 0 && !v.suicidio, bloqueos: unicos, suicidio: !!v.suicidio, embarazo: !!v.embarazo };
    },
    format(r) {
      let s;
      if (r.suicidio) {
        s = '<strong style="color:#8c3a34;">Riesgo activo de suicidio:</strong> tratamiento en un entorno preparado para ello, a menudo un ingreso psiquiatrico con manejo de la abstinencia.';
      } else if (r.grav === 'complicada') {
        s = '<strong style="color:#8c3a34;">Abstinencia complicada: INGRESO</strong>, con frecuencia en una unidad de criticos.';
      } else if (r.ambulatorio) {
        s = '<strong>Se cumplen los criterios para el manejo AMBULATORIO.</strong> Puede darse una prescripcion corta, de 1 a 2 dias, hasta la siguiente visita, y educar sobre los signos de alarma.';
      } else {
        s = `<strong>No cumple los criterios para el alta ambulatoria.</strong><br>Motivo: ${r.bloqueos.join(', ')}.`;
      }
      if (r.embarazo) s += '<br><span style="opacity:.85;">En la embarazada debe considerarse el ingreso siempre, y ofrecerse con una abstinencia al menos moderada. Consultar con obstetricia.</span>';
      s += '<br><span style="opacity:.75;">Ademas del alta, el episodio es la oportunidad de iniciar el tratamiento del trastorno por consumo de alcohol con una derivacion activa.</span>';
      return s;
    },
    fragment: r => (r.suicidio ? 'riesgo de suicidio: entorno especializado' : (r.grav === 'complicada' ? 'abstinencia complicada: ingreso' : (r.ambulatorio ? 'cumple criterios de manejo ambulatorio' : 'no cumple criterios de alta ambulatoria')))
  },

  {
    key: 'tiamina-electrolitos', title: 'Tiamina y electrolitos', accent: '#3f6b52',
    subtitle: 'Lo que acompa&#241;a a todo tratamiento',
    incompleteMsg: 'Indica el ambito.',
    fields: [
      { name: 'ambito', id: 'sup-t1', type: 'select', label: 'Ambito', options: [
        { value: '', label: 'Elegir...' },
        { value: 'amb', label: 'Ambulatorio' },
        { value: 'planta', label: 'Hospitalizacion' },
        { value: 'uci', label: 'Unidad de criticos' }
      ] },
      { name: 'malnut', id: 'sup-t2', type: 'checkbox', label: 'Mala nutricion o malabsorcion' },
      { name: 'complicada', id: 'sup-t3', type: 'checkbox', label: 'Abstinencia complicada' },
      { name: 'wernicke', id: 'sup-t4', type: 'checkbox', label: 'Signos que imitan o enmascaran una encefalopatia de Wernicke' },
      { name: 'mg', id: 'sup-t5', required: false, type: 'number', step: '0.1', label: 'Magnesio (mg/dL), si se conoce', placeholder: 'ej. 1.5', row: true },
      { name: 'p', id: 'sup-t6', required: false, type: 'number', step: '0.1', label: 'Fosforo (mg/dL), si se conoce', placeholder: 'ej. 2.5', row: true },
      { name: 'arritmia', id: 'sup-t7', type: 'checkbox', label: 'Arritmias, otras alteraciones electroliticas o convulsiones previas por abstinencia' }
    ],
    compute(v) {
      if (!v.ambito) return null;
      const parenteral = !!(v.malnut || v.complicada || v.wernicke || v.ambito === 'uci');
      const hipoMg = v.mg !== null && v.mg < 1.7;
      const darMg = hipoMg || !!v.arritmia;
      let fosforo = null;
      if (v.p !== null) fosforo = v.p < 1 ? 'reponer' : (v.p <= 2 ? 'nutricion' : 'normal');
      return { ambito: v.ambito, parenteral, darMg, hipoMg, fosforo, wernicke: !!v.wernicke };
    },
    format(r) {
      let s = `<strong>Tiamina ${r.parenteral ? '100 mg intravenosa o intramuscular al dia durante 3 a 5 dias' : 'oral, o 100 mg intravenosa o intramuscular al dia durante 3 a 5 dias'}.</strong>`;
      if (r.parenteral) s += '<br><span style="opacity:.85;">Se prefiere la via parenteral por mala nutricion, malabsorcion, abstinencia complicada o ingreso en criticos.</span>';
      if (r.wernicke) s += '<br><strong style="color:#8c3a34;">Hay signos que imitan o enmascaran una encefalopatia de Wernicke: tiamina sin esperar.</strong>';
      s += '<br><span style="opacity:.85;">La glucosa y la tiamina pueden darse en cualquier orden o a la vez.</span>';
      s += r.darMg
        ? `<br><strong>Magnesio:</strong> administrarlo (${r.hipoMg ? 'hipomagnesemia' : 'arritmias, otras alteraciones electroliticas o convulsiones previas'}).`
        : '<br><strong>Magnesio:</strong> sin indicacion con estos datos. No se usa como profilaxis ni tratamiento de la abstinencia en si.';
      if (r.fosforo === 'reponer') s += '<br><strong style="color:#8c3a34;">Fosforo menor de 1 mg/dL: reponer.</strong>';
      else if (r.fosforo === 'nutricion') s += '<br><strong>Fosforo entre 1 y 2 mg/dL:</strong> corregir con una nutricion adecuada.';
      if (r.ambito === 'uci') s += '<br><span style="opacity:.85;">En el paciente critico puede considerarse ademas el folato.</span>';
      return s;
    },
    fragment: r => `tiamina ${r.parenteral ? 'parenteral' : 'oral o parenteral'}${r.darMg ? ', magnesio' : ''}${r.fosforo === 'reponer' ? ', reponer fosforo' : ''}`
  }
];
