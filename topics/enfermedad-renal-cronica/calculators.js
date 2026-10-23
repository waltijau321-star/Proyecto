// topics/enfermedad-renal-cronica/calculators.js
// Cuatro herramientas, todas contrastadas contra la KDIGO 2024 que está en Bibliografia/.
// Regla que se siguió al elegirlas: solo se calcula lo que la guía publica como texto. La
// ecuación de riesgo de falla renal (KFRE) y la lista de criterios de derivación viven en
// figuras del PDF y no se reproducen aquí inventando números: se describen en las escalas del
// tema, con sus umbrales de decisión, que sí están en el texto como puntos de práctica.

export const calculators = [
  {
    key: 'estadio-erc', title: 'Categorías G y A, y riesgo de KDIGO', accent: '#35707a',
    subtitle: 'El estadio sale de cruzar filtrado y albuminuria, nunca de uno solo',
    incompleteMsg: 'Introduce el filtrado estimado y el cociente albúmina/creatinina.',
    fields: [
      { name: 'tfg', id: 'erc-e-tfg', type: 'number', step: '0.1', label: 'Filtrado glomerular estimado (mL/min/1.73 m2)', placeholder: 'ej. 38', row: 'r1' },
      { name: 'rac', id: 'erc-e-rac', type: 'number', step: '1', label: 'Cociente albúmina/creatinina (mg/g)', placeholder: 'ej. 450', row: 'r1' },
      { name: 'cronico', id: 'erc-e-cr', type: 'checkbox', label: 'Confirmado durante 3 meses o más' },
      { type: 'note', text: 'G1 y G2 (filtrado de 60 o más) solo son enfermedad renal crónica si hay además un marcador de daño, y la albuminuria es el más frecuente. Por eso un filtrado normal con cociente normal no es enfermedad, y un filtrado normal con albuminuria sí lo es.' }
    ],
    compute(v) {
      if (v.tfg == null || v.rac == null) return null;
      if (!(v.tfg > 0 && v.tfg <= 200)) return { invalido: true };
      if (!(v.rac >= 0 && v.rac <= 30000)) return { invalido: true };
      const g = v.tfg >= 90 ? 'G1' : v.tfg >= 60 ? 'G2' : v.tfg >= 45 ? 'G3a' : v.tfg >= 30 ? 'G3b' : v.tfg >= 15 ? 'G4' : 'G5';
      const a = v.rac < 30 ? 'A1' : v.rac <= 300 ? 'A2' : 'A3';
      // Rejilla de riesgo de KDIGO. Las filas son las categorías G y las columnas A1, A2 y A3.
      const rejilla = {
        G1: ['bajo', 'moderado', 'alto'],
        G2: ['bajo', 'moderado', 'alto'],
        G3a: ['moderado', 'alto', 'muy alto'],
        G3b: ['alto', 'muy alto', 'muy alto'],
        G4: ['muy alto', 'muy alto', 'muy alto'],
        G5: ['muy alto', 'muy alto', 'muy alto']
      };
      const riesgo = rejilla[g][a === 'A1' ? 0 : a === 'A2' ? 1 : 2];
      const esErc = v.tfg < 60 || v.rac >= 30;
      return { g, a, riesgo, esErc, cronico: !!v.cronico, tfg: v.tfg, rac: v.rac };
    },
    format(r) {
      if (r.invalido) return '<span class="cr-warn">Revisa los valores: el filtrado debe estar entre 0 y 200 y el cociente entre 0 y 30000.</span>';
      const color = { bajo: '#2f6f5e', moderado: '#8a7a2f', alto: '#8c5a2f', 'muy alto': '#8c3a34' }[r.riesgo];
      if (!r.esErc) {
        return `Filtrado de ${r.tfg} con cociente de ${r.rac} mg/g: <strong>no cumple criterio de enfermedad renal crónica</strong> por estos dos datos. Haría falta otro marcador de daño (sedimento, alteración electrolítica tubular, anomalía estructural o histológica, o trasplante previo) mantenido 3 meses o más.`;
      }
      const cron = r.cronico
        ? 'Con los 3 meses confirmados, el diagnóstico está hecho.'
        : '<strong>Falta probar la cronicidad</strong>: sin una segunda determinación separada 3 meses, o sin datos que prueben que el daño ya era antiguo, esto puede ser una lesión renal aguda y se maneja de otra forma.';
      const conducta = r.riesgo === 'bajo'
        ? 'Riesgo bajo: control anual y tratamiento de los factores de riesgo.'
        : r.riesgo === 'moderado'
          ? 'Riesgo moderado: intensificar el control de los factores de riesgo y revisar si corresponde algún pilar farmacológico.'
          : r.riesgo === 'alto'
            ? 'Riesgo alto: tratamiento farmacológico que frene la progresión y valorar derivación a nefrología.'
            : 'Riesgo muy alto: tratamiento completo, derivación a nefrología y, si el riesgo de falla renal a 2 años supera el 10%, preparación multidisciplinaria.';
      return `Enfermedad renal crónica <strong>${r.g} ${r.a}</strong>, riesgo <strong style="color:${color};">${r.riesgo}</strong>. ${conducta} ${cron}`;
    }
  },

  {
    key: 'pilares-erc', title: 'Los cuatro pilares que frenan la progresión', accent: '#2f6b5f',
    subtitle: 'Qué corresponde hoy a este paciente, con el grado de cada recomendación',
    incompleteMsg: 'Introduce el filtrado, el cociente y el potasio, y responde si hay diabetes tipo 2.',
    fields: [
      { name: 'tfg', id: 'erc-p-tfg', type: 'number', step: '0.1', label: 'Filtrado glomerular estimado (mL/min/1.73 m2)', placeholder: 'ej. 38', row: 'r1' },
      { name: 'rac', id: 'erc-p-rac', type: 'number', step: '1', label: 'Cociente albúmina/creatinina (mg/g)', placeholder: 'ej. 450', row: 'r1' },
      { name: 'k', id: 'erc-p-k', type: 'number', step: '0.1', label: 'Potasio sérico (mmol/L)', placeholder: 'ej. 4.6', row: 'r2' },
      { name: 'dm', id: 'erc-p-dm', type: 'select', label: 'Diabetes', row: 'r2', options: [
        { v: 'no', t: 'Sin diabetes' },
        { v: 'dm2', t: 'Diabetes tipo 2' },
        { v: 'dm1', t: 'Diabetes tipo 1' }
      ] },
      { name: 'ic', id: 'erc-p-ic', type: 'checkbox', label: 'Insuficiencia cardiaca' },
      { name: 'rasiMax', id: 'erc-p-rm', type: 'checkbox', label: 'Ya recibe bloqueo del SRA a dosis máxima tolerada' },
      { name: 'glucOk', id: 'erc-p-g', type: 'checkbox', label: 'Objetivo glucémico alcanzado con metformina e iSGLT2' },
      { type: 'note', text: 'No combinar nunca inhibidor de la enzima convertidora, antagonista del receptor de angiotensina e inhibidor directo de la renina entre sí (recomendación 1B). Y retirar temporalmente el inhibidor del cotransportador en ayuno prolongado, cirugía o enfermedad crítica, por el riesgo de cetoacidosis euglucémica.' }
    ],
    compute(v) {
      if (v.tfg == null || v.rac == null || v.k == null || !v.dm) return null;
      if (!(v.tfg > 0 && v.tfg <= 200)) return { invalido: true };
      if (!(v.rac >= 0 && v.rac <= 30000)) return { invalido: true };
      if (!(v.k > 1 && v.k < 10)) return { invalido: true };
      const dm = v.dm !== 'no';
      const si = [];
      const no = [];

      // Bloqueo del sistema renina-angiotensina (recomendaciones 3.6.1 a 3.6.3)
      if (v.tfg >= 15) {
        if (v.rac > 300) si.push({ n: 'Bloqueo del SRA (IECA o ARA-II)', g: dm ? '1B' : '1B', por: dm ? 'albuminuria A3 con diabetes' : 'albuminuria A3 sin diabetes' });
        else if (v.rac >= 30) si.push({ n: 'Bloqueo del SRA (IECA o ARA-II)', g: dm ? '1B' : '2C', por: dm ? 'albuminuria A2 con diabetes' : 'albuminuria A2 sin diabetes' });
        else no.push({ n: 'Bloqueo del SRA', por: 'sin albuminuria no hay indicación por este motivo (sí la puede haber por hipertensión)' });
      } else {
        no.push({ n: 'Bloqueo del SRA', por: 'la recomendación se formula para G1 a G4' });
      }

      // Inhibidor del cotransportador sodio-glucosa tipo 2 (recomendaciones 3.7.1 a 3.7.3)
      if (v.tfg >= 20) {
        if (v.dm === 'dm2') si.push({ n: 'Inhibidor del SGLT2', g: '1A', por: 'diabetes tipo 2 con ERC y filtrado de 20 o más' });
        else if (v.rac >= 200 || v.ic) si.push({ n: 'Inhibidor del SGLT2', g: '1A', por: v.ic ? 'insuficiencia cardiaca, con independencia de la albuminuria' : 'cociente de 200 mg/g o más con filtrado de 20 o más' });
        else if (v.tfg <= 45) si.push({ n: 'Inhibidor del SGLT2', g: '2B', por: 'filtrado de 20 a 45 con cociente menor de 200 mg/g' });
        else no.push({ n: 'Inhibidor del SGLT2', por: 'filtrado mayor de 45 con cociente menor de 200 mg/g y sin diabetes tipo 2 ni insuficiencia cardiaca' });
      } else {
        no.push({ n: 'Inhibidor del SGLT2', por: 'filtrado menor de 20: no se inicia, aunque si ya lo tomaba es razonable mantenerlo' });
      }

      // Antagonista no esteroideo del receptor mineralocorticoide (recomendación 3.8.1)
      if (v.dm === 'dm2' && v.tfg > 25 && v.rac > 30 && v.k <= 5.0 && v.rasiMax) {
        si.push({ n: 'Antagonista no esteroideo del receptor mineralocorticoide', g: '2A', por: 'diabetes tipo 2, filtrado mayor de 25, potasio normal y albuminuria persistente pese a dosis máxima de bloqueo del SRA' });
      } else if (v.dm === 'dm2') {
        const falta = [];
        if (!(v.tfg > 25)) falta.push('filtrado mayor de 25');
        if (!(v.rac > 30)) falta.push('albuminuria mayor de 30 mg/g');
        if (!(v.k <= 5.0)) falta.push('potasio normal');
        if (!v.rasiMax) falta.push('dosis máxima tolerada de bloqueo del SRA');
        no.push({ n: 'Antagonista no esteroideo del receptor mineralocorticoide', por: 'falta ' + falta.join(', ') });
      } else {
        no.push({ n: 'Antagonista no esteroideo del receptor mineralocorticoide', por: 'la recomendación se formula para diabetes tipo 2' });
      }

      // Agonista del receptor de GLP-1 (recomendación 3.9.1)
      if (v.dm === 'dm2' && !v.glucOk) si.push({ n: 'Agonista del receptor de GLP-1 de acción prolongada', g: '1B', por: 'diabetes tipo 2 con ERC sin objetivo glucémico alcanzado pese a metformina e iSGLT2, o sin poder usarlos' });
      else if (v.dm === 'dm2') no.push({ n: 'Agonista del receptor de GLP-1', por: 'objetivo glucémico ya alcanzado' });
      else no.push({ n: 'Agonista del receptor de GLP-1', por: 'la recomendación se formula para diabetes tipo 2' });

      return { si, no, k: v.k };
    },
    format(r) {
      if (r.invalido) return '<span class="cr-warn">Revisa los valores: filtrado 0 a 200, cociente 0 a 30000 y potasio entre 1 y 10.</span>';
      const listaSi = r.si.length
        ? `<strong>Corresponde hoy:</strong><ul style="margin:6px 0 0;padding-left:20px;">${r.si.map(x => `<li><strong>${x.n}</strong> (${x.g}) por ${x.por}.</li>`).join('')}</ul>`
        : '<strong>Ninguno de los cuatro pilares tiene indicación con estos datos.</strong>';
      const listaNo = r.no.length
        ? `<div style="margin-top:10px;"><strong>No corresponde, y por qué:</strong><ul style="margin:6px 0 0;padding-left:20px;">${r.no.map(x => `<li>${x.n}: ${x.por}.</li>`).join('')}</ul></div>`
        : '';
      const avisoK = r.k > 5.0
        ? '<div style="margin-top:10px;"><strong>Potasio por encima de 5.0:</strong> la conducta es tratarlo (dieta, acidosis, revisión de fármacos, quelante) para poder mantener el fármaco protector, no suspender el fármaco para normalizar el potasio.</div>'
        : '';
      return listaSi + listaNo + avisoK;
    }
  },

  {
    key: 'respuesta-erc', title: 'Respuesta del filtrado al iniciar el tratamiento', accent: '#2f6b5f',
    subtitle: 'El descenso esperado y el umbral que obliga a investigar',
    incompleteMsg: 'Introduce el filtrado antes de iniciar y el de control.',
    fields: [
      { name: 'basal', id: 'erc-r-b', type: 'number', step: '0.1', label: 'Filtrado antes de iniciar (mL/min/1.73 m2)', placeholder: 'ej. 42', row: 'r1' },
      { name: 'control', id: 'erc-r-c', type: 'number', step: '0.1', label: 'Filtrado de control (mL/min/1.73 m2)', placeholder: 'ej. 35', row: 'r1' },
      { name: 'farmaco', id: 'erc-r-f', type: 'select', label: 'Fármaco iniciado', row: 'r2', options: [
        { v: 'rasi', t: 'Bloqueo del SRA (IECA o ARA-II)' },
        { v: 'sglt2', t: 'Inhibidor del SGLT2' }
      ] },
      { type: 'note', text: 'El control se hace a las 2 a 4 semanas del inicio o de cada cambio de dosis, junto con el potasio. El descenso inicial del filtrado es hemodinámico y es la señal de que el fármaco está reduciendo la presión intraglomerular: es el mecanismo por el que protege.' }
    ],
    compute(v) {
      if (v.basal == null || v.control == null || !v.farmaco) return null;
      if (!(v.basal > 0 && v.basal <= 200)) return { invalido: true };
      if (!(v.control > 0 && v.control <= 200)) return { invalido: true };
      const cambio = ((v.control - v.basal) / v.basal) * 100;
      return { cambio, basal: v.basal, control: v.control, farmaco: v.farmaco };
    },
    format(r) {
      if (r.invalido) return '<span class="cr-warn">Revisa los valores: los dos filtrados deben estar entre 0 y 200.</span>';
      const pct = Math.abs(r.cambio).toFixed(1);
      const nombre = r.farmaco === 'rasi' ? 'el bloqueo del SRA' : 'el inhibidor del SGLT2';
      if (r.cambio >= 0) {
        return `El filtrado no ha bajado (${r.control} frente a ${r.basal}): <strong>sube un ${pct}%</strong>. Mantener ${nombre} y seguir el control habitual junto con el potasio.`;
      }
      if (Math.abs(r.cambio) < 30) {
        return `Descenso del <strong>${pct}%</strong> (de ${r.basal} a ${r.control}): por debajo del 30%, es el <strong>efecto hemodinámico esperado</strong>. Se mantiene ${nombre} y no se baja la dosis por este motivo. Repetir el control y vigilar el potasio.`;
      }
      return `Descenso del <strong>${pct}%</strong> (de ${r.basal} a ${r.control}): alcanza el umbral del <strong>30%</strong> que la guía de 2024 fija para <strong>investigar otra causa</strong>, no para suspender de entrada. Buscar depleción de volumen, antiinflamatorios no esteroideos, obstrucción y estenosis de arteria renal antes de decidir sobre ${nombre}.`;
    }
  },

  {
    key: 'cardio-erc', title: 'Riesgo cardiovascular en la ERC', accent: '#8c3a34',
    subtitle: 'Estatina, aspirina y anticoagulación: por edad y filtrado, no por el colesterol',
    incompleteMsg: 'Introduce la edad y el filtrado estimado.',
    fields: [
      { name: 'edad', id: 'erc-c-e', type: 'number', step: '1', label: 'Edad (años)', placeholder: 'ej. 62', row: 'r1' },
      { name: 'tfg', id: 'erc-c-tfg', type: 'number', step: '0.1', label: 'Filtrado glomerular estimado (mL/min/1.73 m2)', placeholder: 'ej. 38', row: 'r1' },
      { name: 'trs', id: 'erc-c-t', type: 'select', label: 'Situación renal', row: 'r2', options: [
        { v: 'no', t: 'Sin diálisis ni trasplante' },
        { v: 'dialisis', t: 'En diálisis crónica' },
        { v: 'trasplante', t: 'Trasplantado renal' }
      ] },
      { name: 'ecv', id: 'erc-c-ecv', type: 'checkbox', label: 'Enfermedad cardiovascular isquémica establecida' },
      { name: 'dm', id: 'erc-c-dm', type: 'checkbox', label: 'Diabetes' },
      { name: 'fa', id: 'erc-c-fa', type: 'checkbox', label: 'Fibrilación auricular' },
      { type: 'note', text: 'La indicación de estatina en la enfermedad renal crónica depende de la edad y del filtrado, no de la cifra de colesterol, y no exige perseguir un objetivo de LDL. Es la diferencia que más sorprende al aplicar estas recomendaciones.' }
    ],
    compute(v) {
      if (v.edad == null || v.tfg == null || !v.trs) return null;
      if (!(v.edad >= 18 && v.edad <= 120)) return { invalido: true };
      if (!(v.tfg > 0 && v.tfg <= 200)) return { invalido: true };
      let estatina;
      if (v.trs !== 'no') {
        estatina = { texto: 'En diálisis crónica o tras trasplante, estas recomendaciones de inicio no aplican: la decisión sigue las guías específicas de lípidos en esas poblaciones.', grado: null };
      } else if (v.edad >= 50 && v.tfg < 60) {
        estatina = { texto: 'Estatina <strong>o estatina con ezetimiba</strong>: 50 años o más con filtrado menor de 60 (G3a a G5), sin diálisis ni trasplante.', grado: '1A' };
      } else if (v.edad >= 50) {
        estatina = { texto: 'Estatina: 50 años o más con filtrado de 60 o más (G1 a G2).', grado: '1B' };
      } else if (v.ecv || v.dm) {
        estatina = { texto: 'Estatina: 18 a 49 años con ' + (v.ecv ? 'enfermedad coronaria conocida' : 'diabetes') + '.', grado: '2A' };
      } else {
        estatina = { texto: 'De 18 a 49 años sin enfermedad coronaria conocida, diabetes, ictus previo ni riesgo estimado alto: no hay indicación por estos criterios.', grado: null };
      }
      return { estatina, ecv: !!v.ecv, fa: !!v.fa, tfg: v.tfg, edad: v.edad };
    },
    format(r) {
      if (r.invalido) return '<span class="cr-warn">Revisa los valores: edad entre 18 y 120 y filtrado entre 0 y 200.</span>';
      const g = r.estatina.grado ? ` (${r.estatina.grado})` : '';
      let html = `<strong>Hipolipemiante.</strong> ${r.estatina.texto}${g}`;
      html += `<div style="margin-top:10px;"><strong>Antiagregación.</strong> ${r.ecv
        ? 'Aspirina a dosis baja para prevención secundaria, por enfermedad cardiovascular isquémica establecida (1C).'
        : 'Sin enfermedad isquémica establecida no hay indicación de aspirina por estas recomendaciones: la que está respaldada es la prevención secundaria.'}</div>`;
      if (r.fa) {
        const g14 = r.tfg >= 15;
        html += `<div style="margin-top:10px;"><strong>Anticoagulación.</strong> ${g14
          ? 'Anticoagulante oral de acción directa en preferencia a los antagonistas de la vitamina K (1C), con ajuste de dosis por filtrado' + (r.tfg < 30 ? ' y <strong>cautela especial</strong>, porque el filtrado está en G4.' : '.')
          : 'Con filtrado menor de 15 (G5) la recomendación de preferir el anticoagulante directo no aplica: la decisión es individualizada.'}</div>`;
      }
      return html;
    }
  }
];
