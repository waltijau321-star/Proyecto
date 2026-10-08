// topics/ahogamiento/calculators.js - Cuatro decisiones del ahogamiento: gravedad (grados de
// Szpilman con su mortalidad), cuando cesar el rescate, cuando dar el alta, y la ventilacion
// protectora por peso predicho.
// Fuentes: guias de la Wilderness Medical Society de 2016 (Wilderness Environ Med
// 2016;27:236-251) y guia de SDRA de la ESICM de 2023.

export const calculators = [
  {
    key: 'szpilman', title: 'Grado de Szpilman', accent: '#2f5f7a',
    subtitle: 'Gravedad y mortalidad por la auscultacion y la tension',
    incompleteMsg: 'Elige el hallazgo respiratorio.',
    fields: [
      { name: 'resp', id: 'aho-s1', type: 'select', label: 'Situacion respiratoria', options: [
        { value: '', label: 'Elegir...' },
        { value: 'normal', label: 'Auscultacion normal, sin tos' },
        { value: 'tos', label: 'Auscultacion normal, con tos' },
        { value: 'estertores', label: 'Estertores, poca espuma en la via aerea' },
        { value: 'edema', label: 'Edema agudo de pulmon' },
        { value: 'paradaResp', label: 'Parada respiratoria' },
        { value: 'pcr', label: 'Parada cardiorrespiratoria' }
      ] },
      { name: 'hipo', id: 'aho-s2', type: 'checkbox', label: 'Hipotension (sistolica menor de 90 o media menor de 60)' }
    ],
    compute(v) {
      if (!v.resp) return null;
      let grado;
      if (v.resp === 'pcr') grado = 6;
      else if (v.resp === 'paradaResp') grado = 5;
      else if (v.resp === 'edema') grado = v.hipo ? 4 : 3;
      else if (v.resp === 'estertores') grado = 2;
      else if (v.resp === 'tos') grado = 1;
      else grado = 0;
      const mort = ['0%', '0%', '0.6%', '5.2%', '19%', '44%', '93%'][grado];
      const hipoSinEdema = v.hipo && (v.resp === 'normal' || v.resp === 'tos' || v.resp === 'estertores');
      return { grado, mort, hipoSinEdema };
    },
    format(r) {
      let s = `<strong>Grado ${r.grado}: mortalidad del ${r.mort}.</strong>`;
      if (r.grado <= 1) s += '<br>Asintomatico salvo tos leve, con auscultacion normal: puede liberarse en el lugar; en urgencias, alta tras 4 a 6 horas si no se deteriora.';
      else if (r.grado === 2) s += '<br>Estertores: evacuar a atencion avanzada u observar en el hospital. Oxigeno.';
      else if (r.grado <= 4) s += '<br>Edema agudo de pulmon: oxigeno a la maxima concentracion, soporte ventilatorio y unidad de criticos.';
      else s += '<br><strong style="color:#8c3a34;">Reanimacion con la via aerea por delante:</strong> modelo A-B-C, ventilaciones con presion positiva ademas de compresiones, y desfibrilador si esta disponible sin retrasar la ventilacion.';
      if (r.hipoSinEdema) s += '<br><span style="opacity:.85;">La tabla solo considera la hipotension junto al edema pulmonar; si la hay con este cuadro, trata al paciente como al menos un grado 4 y busca otra causa (hipovolemia, trauma, cardiopatia).</span>';
      s += '<br><span style="opacity:.75;">Datos de casi 42.000 rescates de socorristas en el oceano, recogidos por la guia de la Wilderness Medical Society.</span>';
      return s;
    },
    fragment: r => `Szpilman grado ${r.grado}, mortalidad ${r.mort}`
  },

  {
    key: 'cese-ahogamiento', title: 'Cuando cesar el rescate', accent: '#7a4363',
    subtitle: 'Sumersion, temperatura del agua y duracion de la RCP',
    incompleteMsg: 'Introduce al menos el tiempo de sumersion o la duracion de la RCP.',
    fields: [
      { name: 'sumersion', id: 'aho-c1', required: false, type: 'number', step: '1', label: 'Sumersion conocida (min)', placeholder: 'ej. 20', row: true },
      { name: 'temp', id: 'aho-c2', type: 'select', label: 'Agua', row: true, options: [
        { value: '', label: 'Elegir...' },
        { value: 'templada', label: 'Por encima de 6 grados' },
        { value: 'fria', label: 'Por debajo de 6 grados' }
      ] },
      { name: 'rcp', id: 'aho-c3', required: false, type: 'number', step: '1', label: 'Minutos de RCP continua sin signos de vida', placeholder: 'ej. 15' },
      { name: 'seguridad', id: 'aho-c4', type: 'checkbox', label: 'La seguridad del equipo de rescate esta amenazada' },
      { name: 'nino', id: 'aho-c5', type: 'checkbox', label: 'Ni&#241;o de 6 a&#241;os o menos en agua helada, o se dispone de oxigenacion extracorporea' },
      { type: 'note', text: 'El tiempo de sumersion se cuenta desde la llegada de los servicios de emergencia, porque el total suele desconocerse.' }
    ],
    compute(v) {
      if (v.sumersion === null && v.rcp === null && !v.seguridad) return null;
      const motivos = [];
      if (v.sumersion !== null && v.temp === 'templada' && v.sumersion > 30) motivos.push(`sumersion de ${v.sumersion} min en agua de mas de 6 grados`);
      if (v.sumersion !== null && v.temp === 'fria' && v.sumersion > 90) motivos.push(`sumersion de ${v.sumersion} min en agua de menos de 6 grados`);
      if (v.rcp !== null && v.rcp > 25) motivos.push(`${v.rcp} min de RCP continua`);
      const faltaTemp = v.sumersion !== null && !v.temp;
      const mayor10 = v.sumersion !== null && v.sumersion > 10;
      return { motivos, seguridad: !!v.seguridad, nino: !!v.nino, faltaTemp, mayor10 };
    },
    format(r) {
      let s;
      if (r.seguridad) s = '<strong style="color:#8c3a34;">Cesar el rescate: la seguridad del equipo esta amenazada.</strong> Es la unica condicion que no admite excepciones.';
      else if (r.motivos.length) s = `<strong>Puede ser razonable cesar el rescate y la reanimacion,</strong> segun los recursos: ${r.motivos.join('; ')}.`;
      else s = '<strong>No se alcanzan los umbrales de la guia para cesar:</strong> continuar.';
      if (r.faltaTemp) s += '<br><span style="opacity:.85;">Indica la temperatura del agua: el umbral es de 30 minutos por encima de 6 grados y de 90 minutos por debajo.</span>';
      if (r.mayor10 && !r.seguridad) s += '<br><span style="opacity:.85;">Mas de 10 minutos de sumersion se asocian a mayor mortalidad o a supervivencia con da&#241;o neurologico grave.</span>';
      if (r.nino && r.motivos.length && !r.seguridad) s += '<br><strong>Pero:</strong> hay casos de buena recuperacion neurologica tras sumersiones prolongadas, sobre todo en ni&#241;os de 6 a&#241;os o menos en agua de menos de 6 grados y con oxigenacion extracorporea. Valorar seguir.';
      s += '<br><span style="opacity:.75;">Con recursos y seguridad, la recuperacion del cuerpo puede continuar mas alla del periodo de rescate, sabiendo que la reanimacion sera probablemente inutil.</span>';
      return s;
    },
    fragment: r => (r.seguridad ? 'cesar: seguridad del equipo amenazada' : (r.motivos.length ? 'puede ser razonable cesar el rescate' : 'continuar el rescate'))
  },

  {
    key: 'alta-ahogamiento', title: 'Alta tras el ahogamiento', accent: '#3f6b52',
    subtitle: 'Liberar en el lugar, observar o ingresar',
    incompleteMsg: 'Elige el ambito.',
    fields: [
      { name: 'ambito', id: 'aho-a1', type: 'select', label: 'Donde se decide', options: [
        { value: '', label: 'Elegir...' },
        { value: 'lugar', label: 'En el lugar del rescate' },
        { value: 'urgencias', label: 'En urgencias' }
      ] },
      { name: 'auscNormal', id: 'aho-a2', type: 'checkbox', label: 'Auscultacion pulmonar normal' },
      { name: 'tosLeve', id: 'aho-a3', type: 'checkbox', label: 'Asintomatico o solo tos leve' },
      { name: 'graves', id: 'aho-a4', type: 'checkbox', label: 'Tos intensa, espuma o material espumoso en la via aerea' },
      { name: 'mental', id: 'aho-a5', type: 'checkbox', label: 'Estado mental normal' },
      { name: 'hipo', id: 'aho-a6', type: 'checkbox', label: 'Hipotension' },
      { name: 'horas', id: 'aho-a7', required: false, type: 'number', step: '0.5', label: 'Horas de observacion sin deterioro', placeholder: 'ej. 4' }
    ],
    compute(v) {
      if (!v.ambito) return null;
      const alarma = [!v.auscNormal && 'auscultacion anormal', v.graves && 'tos intensa o espuma', !v.mental && 'estado mental alterado', v.hipo && 'hipotension'].filter(Boolean);
      const h = v.horas === null ? 0 : v.horas;
      return { ambito: v.ambito, alarma, tosLeve: !!v.tosLeve, h };
    },
    format(r) {
      if (r.alarma.length) {
        return `<strong style="color:#8c3a34;">${r.ambito === 'lugar' ? 'Evacuar a atencion avanzada' : 'Ingresar'}</strong>, si el riesgo de la evacuacion no supera el beneficio.<br>Motivo: ${r.alarma.join(', ')}.`;
      }
      let s;
      if (r.ambito === 'lugar') {
        s = r.tosLeve
          ? '<strong>Puede liberarse en el lugar:</strong> asintomatico salvo tos leve y auscultacion normal (mortalidad del 0% en el gran estudio de socorristas).'
          : '<strong>Sintomas leves con estado mental normal:</strong> si la evacuacion es dificil, observar de 4 a 6 horas; cualquier deterioro obliga a evacuar.';
      } else if (r.h >= 4) {
        s = `<strong>Alta razonable</strong> tras ${r.h} horas de observacion con estado mental normal, funcion respiratoria normalizada y sin deterioro.`;
      } else {
        s = `<strong>Completar la observacion de 4 a 6 horas</strong> antes del alta (llevas ${r.h}).`;
      }
      s += '<br><span style="opacity:.75;">En series pediatricas, todo deterioro aparecio en las primeras 4 a 4.5 horas, con un caso a las 7. La radiografia inicial no predice quien empeorara.</span>';
      return s;
    },
    fragment: r => (r.alarma.length ? (r.ambito === 'lugar' ? 'evacuar' : 'ingresar') : (r.ambito === 'lugar' ? 'liberar u observar en el lugar' : (r.h >= 4 ? 'alta razonable' : 'completar 4 a 6 h de observacion')))
  },

  {
    key: 'ventilacion-ahogado', title: 'Ventilacion protectora', accent: '#3d5a73',
    subtitle: 'El pulmon del ahogado se ventila como un SDRA',
    incompleteMsg: 'Introduce el sexo y la talla.',
    fields: [
      { name: 'sexo', id: 'aho-v1', type: 'select', label: 'Sexo', row: true, options: [
        { value: '', label: 'Elegir...' },
        { value: 'h', label: 'Hombre' },
        { value: 'm', label: 'Mujer' }
      ] },
      { name: 'talla', id: 'aho-v2', type: 'number', step: '1', label: 'Talla (cm)', placeholder: 'ej. 170', row: true, max: 210 },
      { name: 'meseta', id: 'aho-v3', required: false, type: 'number', step: '1', label: 'Presion meseta actual (cmH2O), si se conoce', placeholder: 'ej. 26', row: true, max: 45 },
      { name: 'pao2', id: 'aho-v4', required: false, type: 'number', step: '1', label: 'PaO2 actual (mmHg), si se conoce', placeholder: 'ej. 70', row: true, max: 300 }
    ],
    compute(v) {
      if (!v.sexo || v.talla === null || v.talla < 120) return null;
      const ppi = (v.sexo === 'h' ? 50 : 45.5) + 0.91 * (v.talla - 152.4);
      return {
        ppi: Math.round(ppi * 10) / 10, v6: Math.round(ppi * 6), v8: Math.round(ppi * 8),
        meseta: v.meseta, pao2: v.pao2
      };
    },
    format(r) {
      let s = `<strong>Peso predicho: ${r.ppi} kg. Volumen corriente de ${r.v6} a ${r.v8} mL</strong> (6 a 8 mL/kg).`;
      if (r.meseta !== null) {
        s += r.meseta >= 30
          ? `<br><strong style="color:#8c3a34;">Meseta de ${r.meseta}: por encima del objetivo.</strong> Reducir el volumen corriente y ajustar la frecuencia para dejarla por debajo de 30.`
          : `<br>Meseta de ${r.meseta}: dentro del objetivo (menor de 30).`;
      }
      if (r.pao2 !== null) {
        if (r.pao2 < 55) s += `<br><strong>PaO2 de ${r.pao2}: por debajo del objetivo.</strong> Subir PEEP o FiO2.`;
        else if (r.pao2 > 80) s += `<br>PaO2 de ${r.pao2}: por encima del objetivo; puede reducirse la FiO2.`;
        else s += `<br>PaO2 de ${r.pao2}: dentro del objetivo de 55 a 80.`;
      }
      s += '<br><span style="opacity:.75;">La guia aplica al ahogado los protocolos de SDRA porque el patron de lesion es similar. La no invasiva solo en el paciente alerta con sintomas leves o moderados.</span>';
      return s;
    },
    fragment: r => `volumen corriente ${r.v6} a ${r.v8} mL (peso predicho ${r.ppi} kg)`
  }
];
