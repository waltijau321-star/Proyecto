// topics/abdomen-agudo/calculators.js - Cuatro decisiones del abdomen agudo: los criterios de
// Tokio 2018 para colecistitis y colangitis (diagnostico y gravedad), que imagen pedir, y
// cuando no se puede esperar para llamar al cirujano.
// Fuentes: Rogers SO Jr, Kirton OC. N Engl J Med 2024;391:60-67. Yokoe M, et al. y Kiriyama S,
// et al. J Hepatobiliary Pancreat Sci 2018;25:41-54 y 17-30.

// Disfuncion de organo que define el grado III, comun a colecistitis y colangitis en Tokio 2018.
const CAMPOS_GRADO3 = (pref) => [
  { name: 'cv', id: pref + '-g1', type: 'checkbox', label: 'Hipotension con noradrenalina (cualquier dosis) o dopamina de 5 mcg/kg/min o mas' },
  { name: 'neuro', id: pref + '-g2', type: 'checkbox', label: 'Alteracion del nivel de conciencia' },
  { name: 'resp', id: pref + '-g3', type: 'checkbox', label: 'PaO2/FiO2 menor de 300' },
  { name: 'renal', id: pref + '-g4', type: 'checkbox', label: 'Oliguria o creatinina mayor de 2 mg/dL' },
  { name: 'hep', id: pref + '-g5', type: 'checkbox', label: 'INR mayor de 1.5' },
  { name: 'hem', id: pref + '-g6', type: 'checkbox', label: 'Plaquetas por debajo de 100.000' }
];
const organos = v => [v.cv && 'cardiovascular', v.neuro && 'neurologica', v.resp && 'respiratoria',
  v.renal && 'renal', v.hep && 'hepatica', v.hem && 'hematologica'].filter(Boolean);

export const calculators = [
  {
    key: 'tokio-colecistitis', title: 'Colecistitis: criterios de Tokio', accent: '#3f6b52',
    subtitle: 'Diagnostico y grado de gravedad (Tokio 2018)',
    incompleteMsg: 'Marca al menos un hallazgo local o sistemico.',
    fields: [
      { type: 'note', text: '<strong>A. Signos locales</strong>' },
      { name: 'murphy', id: 'abd-c1', type: 'checkbox', label: 'Signo de Murphy' },
      { name: 'hcd', id: 'abd-c2', type: 'checkbox', label: 'Masa, dolor o defensa en hipocondrio derecho' },
      { type: 'note', text: '<strong>B. Signos sistemicos</strong>' },
      { name: 'fiebre', id: 'abd-c3', type: 'checkbox', label: 'Fiebre' },
      { name: 'pcr', id: 'abd-c4', type: 'checkbox', label: 'Proteina C reactiva elevada' },
      { name: 'leuco', id: 'abd-c5', type: 'checkbox', label: 'Leucocitosis' },
      { type: 'note', text: '<strong>C. Imagen</strong>' },
      { name: 'imagen', id: 'abd-c6', type: 'checkbox', label: 'Imagen caracteristica de colecistitis aguda' },
      { type: 'note', text: '<strong>Gravedad</strong>' },
      ...CAMPOS_GRADO3('abd-c'),
      { name: 'l18', id: 'abd-c7', type: 'checkbox', label: 'Leucocitos por encima de 18.000' },
      { name: 'masa', id: 'abd-c8', type: 'checkbox', label: 'Masa dolorosa palpable en hipocondrio derecho' },
      { name: 'h72', id: 'abd-c9', type: 'checkbox', label: 'Mas de 72 horas de evolucion' },
      { name: 'local', id: 'abd-c10', type: 'checkbox', label: 'Inflamacion local marcada: gangrena, absceso, peritonitis biliar o enfisematosa' }
    ],
    compute(v) {
      const A = !!(v.murphy || v.hcd), B = !!(v.fiebre || v.pcr || v.leuco), C = !!v.imagen;
      if (!A && !B) return null;
      const dx = A && B && C ? 'definitivo' : (A && B ? 'sospecha' : 'no');
      const org = organos(v);
      const g2 = [v.l18 && 'leucocitos por encima de 18.000', v.masa && 'masa dolorosa palpable', v.h72 && 'mas de 72 horas', v.local && 'inflamacion local marcada'].filter(Boolean);
      const grado = org.length ? 3 : (g2.length ? 2 : 1);
      return { A, B, C, dx, org, g2, grado };
    },
    format(r) {
      let s;
      if (r.dx === 'definitivo') s = '<strong>Colecistitis aguda: diagnostico DEFINITIVO</strong> (signo local, signo sistemico e imagen).';
      else if (r.dx === 'sospecha') s = '<strong>Colecistitis aguda: diagnostico de SOSPECHA</strong> (signo local mas sistemico). Falta la imagen para el definitivo.';
      else s = `<strong>No se cumplen los criterios.</strong> Falta ${!r.A ? 'un signo local (A)' : 'un signo sistemico (B)'}.`;
      if (r.dx !== 'no') {
        if (r.grado === 3) s += `<br><strong style="color:#8c3a34;">Grado III (grave):</strong> disfuncion ${r.org.join(', ')}.`;
        else if (r.grado === 2) s += `<br><strong>Grado II (moderado):</strong> ${r.g2.join(', ')}.`;
        else s += '<br><strong>Grado I (leve):</strong> sin criterios de grado II ni III.';
      }
      if (!r.A) s += '<br><span style="opacity:.85;">El signo de Murphy tuvo una sensibilidad del 20.5% y una especificidad del 87.5%: su ausencia no descarta la colecistitis.</span>';
      s += '<br><span style="opacity:.75;">La gravedad se reevalua: un grado I puede progresar.</span>';
      return s;
    },
    fragment: r => (r.dx === 'no' ? 'no se cumplen los criterios de Tokio de colecistitis' : `colecistitis, diagnostico ${r.dx === 'definitivo' ? 'definitivo' : 'de sospecha'}, grado ${r.grado}`)
  },

  {
    key: 'tokio-colangitis', title: 'Colangitis: criterios de Tokio', accent: '#2f5f6b',
    subtitle: 'Diagnostico y grado de gravedad (Tokio 2018)',
    incompleteMsg: 'Marca al menos un dato de inflamacion, colestasis o imagen.',
    fields: [
      { type: 'note', text: '<strong>A. Inflamacion sistemica</strong>' },
      { name: 'fiebre', id: 'abd-k1', type: 'checkbox', label: 'Fiebre o escalofrios' },
      { name: 'infl', id: 'abd-k2', type: 'checkbox', label: 'Analitica inflamatoria (leucocitos alterados, proteina C reactiva elevada)' },
      { type: 'note', text: '<strong>B. Colestasis</strong>' },
      { name: 'ictericia', id: 'abd-k3', type: 'checkbox', label: 'Ictericia' },
      { name: 'phep', id: 'abd-k4', type: 'checkbox', label: 'Pruebas hepaticas alteradas (fosfatasa alcalina, GGT, transaminasas)' },
      { type: 'note', text: '<strong>C. Imagen</strong>' },
      { name: 'dilat', id: 'abd-k5', type: 'checkbox', label: 'Dilatacion de la via biliar' },
      { name: 'causa', id: 'abd-k6', type: 'checkbox', label: 'Causa visible: litiasis, estenosis, protesis' },
      { type: 'note', text: '<strong>Gravedad</strong>' },
      ...CAMPOS_GRADO3('abd-k'),
      { name: 'leuco', id: 'abd-k7', type: 'checkbox', label: 'Leucocitos por encima de 12.000 o por debajo de 4.000' },
      { name: 'f39', id: 'abd-k8', type: 'checkbox', label: 'Fiebre de 39 grados o mas' },
      { name: 'edad', id: 'abd-k9', type: 'checkbox', label: 'Edad de 75 a&#241;os o mas' },
      { name: 'bili', id: 'abd-k10', type: 'checkbox', label: 'Bilirrubina total de 5 mg/dL o mas' },
      { name: 'alb', id: 'abd-k11', type: 'checkbox', label: 'Hipoalbuminemia (menos de 0.7 veces el limite inferior normal)' }
    ],
    compute(v) {
      const A = !!(v.fiebre || v.infl), B = !!(v.ictericia || v.phep), C = !!(v.dilat || v.causa);
      if (!A && !B && !C) return null;
      const dx = A && B && C ? 'definitivo' : (A && (B || C) ? 'sospecha' : 'no');
      const org = organos(v);
      const g2 = [v.leuco && 'leucocitos alterados', v.f39 && 'fiebre de 39 o mas', v.edad && 'edad de 75 o mas', v.bili && 'bilirrubina de 5 o mas', v.alb && 'hipoalbuminemia'].filter(Boolean);
      const grado = org.length ? 3 : (g2.length >= 2 ? 2 : 1);
      const charcot = !!(v.fiebre && v.ictericia);
      return { A, B, C, dx, org, g2, grado, charcot };
    },
    format(r) {
      let s;
      if (r.dx === 'definitivo') s = '<strong>Colangitis aguda: diagnostico DEFINITIVO</strong> (inflamacion sistemica, colestasis e imagen).';
      else if (r.dx === 'sospecha') s = '<strong>Colangitis aguda: diagnostico de SOSPECHA.</strong>';
      else s = `<strong>No se cumplen los criterios.</strong> ${!r.A ? 'Hace falta inflamacion sistemica (A).' : 'Hace falta colestasis (B) o imagen (C).'}`;
      if (r.dx !== 'no') {
        if (r.grado === 3) s += `<br><strong style="color:#8c3a34;">Grado III (grave):</strong> disfuncion ${r.org.join(', ')}.`;
        else if (r.grado === 2) s += `<br><strong>Grado II (moderado):</strong> ${r.g2.join(', ')}.`;
        else s += `<br><strong>Grado I (leve)</strong>${r.g2.length === 1 ? ': un solo criterio de grado II, y hacen falta dos' : ''}.`;
        s += '<br>En todos los grados: antibiotico, y drenaje biliar precoz o tratamiento de la causa si no responde al tratamiento inicial.';
      }
      if (!r.charcot) s += '<br><span style="opacity:.85;">La triada de Charcot solo aparecio en el 21% al 26% de los pacientes en series recientes: que falte no descarta la colangitis.</span>';
      return s;
    },
    fragment: r => (r.dx === 'no' ? 'no se cumplen los criterios de Tokio de colangitis' : `colangitis, diagnostico ${r.dx === 'definitivo' ? 'definitivo' : 'de sospecha'}, grado ${r.grado}`)
  },

  {
    key: 'imagen-abdomen', title: 'Que imagen pedir', accent: '#3d5a73',
    subtitle: 'Segun el paciente y la sospecha',
    incompleteMsg: 'Indica si hay posibilidad de embarazo.',
    fields: [
      { name: 'embarazo', id: 'abd-i1', type: 'select', label: 'Embarazo', options: [
        { value: '', label: 'Elegir...' },
        { value: 'no', label: 'No hay posibilidad de embarazo' },
        { value: 'posible', label: 'Mujer que puede estar embarazada' },
        { value: 'si', label: 'Embarazo confirmado' }
      ] },
      { name: 'peritonitis', id: 'abd-i2', type: 'checkbox', label: 'Signos francos de peritonitis' },
      { name: 'biliar', id: 'abd-i3', type: 'checkbox', label: 'Sospecha de patologia biliar aguda' },
      { name: 'apendice', id: 'abd-i4', type: 'checkbox', label: 'Sospecha de apendicitis' },
      { name: 'contraste', id: 'abd-i5', type: 'checkbox', label: 'Hay dudas sobre el contraste intravenoso (alergia o funcion renal)' },
      { name: 'mayor', id: 'abd-i6', type: 'checkbox', label: 'Paciente mayor, inmunodeprimido o con alteracion del estado mental' }
    ],
    compute(v) {
      if (!v.embarazo) return null;
      let principal, extra = [];
      if (v.embarazo === 'si') {
        principal = 'ECOGRAFIA como primera prueba. Evitar la radiacion ionizante siempre que sea posible.';
        extra.push('La ecografia pelvica o transvaginal es la mejor para la patologia ginecologica (absceso tuboovarico, quiste complicado, ectopico roto).');
      } else if (v.embarazo === 'posible') {
        principal = 'Prueba de embarazo antes de decidir. Ecografia pelvica o transvaginal para el dolor pelvico; resonancia o tomografia con contraste si hacen falta.';
      } else if (v.biliar || v.apendice) {
        principal = 'ECOGRAFIA, que es la preferida para la patologia biliar aguda y la apendicitis en la practica actual. Tomografia con contraste si no aclara o hay complicaciones.';
      } else {
        principal = 'TOMOGRAFIA de abdomen y pelvis con contraste INTRAVENOSO, la tecnica principal en el adulto no gestante.';
      }
      if (v.peritonitis) extra.unshift('Peritonitis franca: una radiografia simple puede mostrar aire libre de inmediato, y la llamada al cirujano no espera a ninguna imagen.');
      if (v.contraste && v.embarazo === 'no') extra.push('Retirar el contraste tiene un coste: la tomografia sin contraste es aproximadamente un 30% menos exacta. La nefropatia por contraste es poco frecuente. Decision informada de riesgo y beneficio.');
      if (v.mayor && v.embarazo === 'no') extra.push('En el mayor, el inmunodeprimido o con alteracion mental la tomografia con contraste tiene un beneficio particular: la exploracion no es fiable.');
      return { principal, extra };
    },
    format(r) {
      let s = `<strong>${r.principal}</strong>`;
      r.extra.forEach(e => { s += `<br><span style="opacity:.85;">${e}</span>`; });
      s += '<br><span style="opacity:.75;">El contraste oral no es un componente estandar. Y no esperar al informe definitivo para llamar al cirujano: 2 horas o mas de espera se asocian a mas complicaciones y muertes.</span>';
      return s;
    },
    fragment: r => r.principal.split('.')[0].toLowerCase()
  },

  {
    key: 'consulta-quirurgica', title: 'Cuando llamar al cirujano', accent: '#8c2e2e',
    subtitle: 'Lo que no permite esperar',
    incompleteMsg: 'Marca los datos presentes.',
    fields: [
      { name: 'peritonitis', id: 'abd-q1', type: 'checkbox', label: 'Signos de peritonitis' },
      { name: 'inestable', id: 'abd-q2', type: 'checkbox', label: 'Inestabilidad hemodinamica o sepsis' },
      { name: 'mecanismo', id: 'abd-q3', type: 'checkbox', label: 'Sospecha de obstruccion, hemorragia, isquemia o perforacion' },
      { name: 'imagen', id: 'abd-q4', type: 'checkbox', label: 'Aire libre, isquemia o inflamacion en la imagen' },
      { name: 'mayor', id: 'abd-q5', type: 'checkbox', label: 'Paciente mayor' },
      { name: 'mental', id: 'abd-q6', type: 'checkbox', label: 'Alteracion del estado mental' },
      { name: 'inmuno', id: 'abd-q7', type: 'checkbox', label: 'Glucocorticoides u otros inmunosupresores' },
      { name: 'incongruente', id: 'abd-q8', type: 'checkbox', label: 'Los sintomas no encajan con el diagnostico de trabajo' },
      { name: 'esperando', id: 'abd-q9', type: 'checkbox', label: 'Se esta esperando el informe de la tomografia para avisar' }
    ],
    compute(v) {
      const mayores = [v.peritonitis && 'peritonitis', v.inestable && 'inestabilidad o sepsis', v.mecanismo && 'sospecha de mecanismo quirurgico', v.imagen && 'hallazgo quirurgico en la imagen'].filter(Boolean);
      const paciente = [v.mayor && 'edad avanzada', v.mental && 'alteracion mental', v.inmuno && 'inmunosupresion'].filter(Boolean);
      if (!mayores.length && !paciente.length && !v.incongruente && !v.esperando) return null;
      return { mayores, paciente, incongruente: !!v.incongruente, esperando: !!v.esperando };
    },
    format(r) {
      let s;
      if (r.mayores.length) {
        s = `<strong style="color:#8c3a34;">Consulta quirurgica YA, en paralelo al resto del estudio.</strong><br>Motivo: ${r.mayores.join(', ')}.`;
      } else if (r.paciente.length) {
        s = `<strong>Umbral bajo para la consulta y para la tomografia con contraste.</strong><br>La exploracion no es fiable por: ${r.paciente.join(', ')}.`;
      } else {
        s = '<strong>Reevaluar antes de seguir.</strong>';
      }
      if (r.incongruente) s += '<br><strong>Si los sintomas no encajan con el diagnostico sospechado, hay que reevaluar y considerar otras posibilidades.</strong> Vigila el anclaje y la confirmacion.';
      if (r.esperando) s += '<br><strong style="color:#8c3a34;">No esperes al informe:</strong> una espera de 2 horas o mas al informe definitivo se asocia a mas complicaciones sistemicas y muertes por el retraso en la consulta y el control del foco.';
      s += '<br><span style="opacity:.75;">La consulta quirurgica precoz se ha asociado de forma constante a menos complicaciones y muertes.</span>';
      return s;
    },
    fragment: r => (r.mayores.length ? 'consulta quirurgica inmediata' : (r.paciente.length ? 'umbral bajo para imagen y consulta' : 'reevaluar el diagnostico de trabajo'))
  }
];
