// topics/ventilacion-mecanica/calculators.js
// 7 herramientas a pie de cama:
// - pbw-vt: peso corporal predicho (formula de ARDSNet) y volumen corriente objetivo 4-8 mL/kg.
// - driving-pressure: presion de distension (meseta menos PEEP) y distensibilidad estatica.
// - rsbi: indice de respiracion rapida y superficial (frecuencia entre volumen corriente en L).
// - pafi-berlin: relacion PaO2/FiO2 y clasificacion de Berlin de la SDRA.
// - rox: indice ROX (SpO2/FiO2 entre la frecuencia) para el fracaso de la canula de alto flujo.
// - poder-mecanico: estimacion simplificada del poder mecanico en ventilacion controlada por
//   volumen (0.098 x frecuencia x Vt(L) x [Ppico - 0.5 x (meseta - PEEP)]); parametro orientador
//   de investigacion, hay varias ecuaciones en la literatura (Gattinoni 2016; Becher 2019).
// - ventilacion-minuto-paco2: ventilacion minuto necesaria para una PaCO2 objetivo (asume
//   produccion de CO2 y espacio muerto constantes).
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

function pbw(sexo, alturaCm) {
  const base = sexo === 'mujer' ? 45.5 : 50;
  return base + 0.91 * (alturaCm - 152.4);
}

export const calculators = [
  {
    key: 'pbw-vt', title: 'Peso predicho y volumen corriente objetivo', accent: '#2e6b7a',
    subtitle: 'Peso corporal predicho (ARDSNet) y Vt de 4 a 8 mL/kg',
    incompleteMsg: 'Selecciona el sexo e introduce la talla en centimetros.',
    fields: [
      { name: 'sexo', id: 'vm-pbw-sexo', type: 'select', label: 'Sexo', options: [
        { value: '', label: 'Selecciona' }, { value: 'varon', label: 'Varon' }, { value: 'mujer', label: 'Mujer' } ], row: 'r1' },
      { name: 'altura', id: 'vm-pbw-alt', type: 'number', label: 'Talla (cm)', placeholder: 'ej. 170', row: 'r1' },
      { type: 'note', text: 'Peso corporal predicho: varon 50 + 0.91 x (talla en cm menos 152.4); mujer 45.5 + 0.91 x (talla en cm menos 152.4). El volumen corriente se calcula sobre el peso predicho, no sobre el real. Objetivo protector 6 mL/kg (reducir a 4 si la presion meseta pasa de 30 o la presion de distension de 15).' }
    ],
    compute(v) {
      if (!v.sexo || v.altura == null) return null;
      if (!(v.altura > 100 && v.altura < 230)) return { fueraRango: true };
      const p = pbw(v.sexo, v.altura);
      return { pbw: p, vt4: p * 4, vt6: p * 6, vt8: p * 8 };
    },
    format: r => {
      if (r.fueraRango) return 'Introduce una talla plausible (100 a 230 cm).';
      return `<strong>Peso corporal predicho ${r.pbw.toFixed(0)} kg</strong>. Volumen corriente objetivo: ${r.vt6.toFixed(0)} mL (6 mL/kg); rango protector ${r.vt4.toFixed(0)} a ${r.vt8.toFixed(0)} mL (4 a 8 mL/kg).`;
    },
    fragment: r => r.fueraRango ? 'PBW fuera de rango' : `PBW ${r.pbw.toFixed(0)} kg, Vt objetivo ${r.vt6.toFixed(0)} mL`
  },
  {
    key: 'driving-pressure', title: 'Presion de distension y distensibilidad', accent: '#8a6a1f',
    subtitle: 'Presion de distension (meseta menos PEEP) y compliance estatica',
    incompleteMsg: 'Introduce la presion meseta, la PEEP total y el volumen corriente.',
    fields: [
      { name: 'pplat', id: 'vm-dp-pplat', type: 'number', step: '0.5', label: 'Presion meseta (cmH2O)', placeholder: 'ej. 26', row: 'r1' },
      { name: 'peep', id: 'vm-dp-peep', type: 'number', step: '0.5', label: 'PEEP total (cmH2O)', placeholder: 'ej. 10', row: 'r1' },
      { name: 'vt', id: 'vm-dp-vt', type: 'number', label: 'Volumen corriente (mL)', placeholder: 'ej. 420' },
      { type: 'note', text: 'La presion meseta se mide con una pausa inspiratoria (sin flujo). Usar la PEEP total (la fijada mas el auto-PEEP medido con pausa espiratoria). Objetivos: meseta menor de 30 cmH2O y presion de distension menor de 15 cmH2O (idealmente 13 o menos).' }
    ],
    compute(v) {
      if ([v.pplat, v.peep, v.vt].some(x => x == null)) return null;
      const dp = v.pplat - v.peep;
      if (!(dp > 0) || !(v.vt > 0)) return { invalido: true };
      const cstat = v.vt / dp;
      return { dp, cstat, pplat: v.pplat };
    },
    format: r => {
      if (r.invalido) return 'La presion meseta debe ser mayor que la PEEP y el volumen corriente positivo.';
      const dpTxt = r.dp < 15 ? 'dentro del objetivo' : r.dp < 19 ? 'algo elevada' : 'elevada, riesgo de lesion';
      const platTxt = r.pplat <= 30 ? 'meseta dentro del objetivo' : 'meseta por encima de 30, reducir el volumen corriente';
      return `<strong>Presion de distension ${r.dp.toFixed(1)} cmH2O</strong> (${dpTxt}); ${platTxt}. Distensibilidad estatica ${r.cstat.toFixed(0)} mL/cmH2O (normal 50 a 100; menor de 30 indica pulmon muy rigido).`;
    },
    fragment: r => r.invalido ? 'presion de distension no valida' : `presion de distension ${r.dp.toFixed(1)}, compliance ${r.cstat.toFixed(0)} mL/cmH2O`
  },
  {
    key: 'rsbi', title: 'Indice de respiracion rapida y superficial', accent: '#3f6b52',
    subtitle: 'Frecuencia respiratoria entre volumen corriente (predictor del destete)',
    incompleteMsg: 'Introduce la frecuencia respiratoria y el volumen corriente durante la prueba.',
    fields: [
      { name: 'fr', id: 'vm-rsbi-fr', type: 'number', label: 'Frecuencia respiratoria (por minuto)', placeholder: 'ej. 24', row: 'r1' },
      { name: 'vt', id: 'vm-rsbi-vt', type: 'number', label: 'Volumen corriente (mL)', placeholder: 'ej. 340', row: 'r1' },
      { type: 'note', text: 'Se mide durante la prueba de respiracion espontanea (soporte de presion bajo o tubo en T). Es un dato de apoyo, no un criterio unico para extubar.' }
    ],
    compute(v) {
      if (v.fr == null || v.vt == null) return null;
      if (!(v.vt > 0) || !(v.fr > 0)) return { invalido: true };
      const rsbi = v.fr / (v.vt / 1000);
      return { rsbi };
    },
    format: r => {
      if (r.invalido) return 'La frecuencia y el volumen corriente deben ser positivos.';
      const txt = r.rsbi < 105 ? 'predice exito de la prueba de respiracion espontanea' : 'predice fracaso; buscar y corregir la causa antes de reintentar';
      return `<strong>Indice de respiracion rapida y superficial ${r.rsbi.toFixed(0)} por minuto y litro</strong>: ${txt}.`;
    },
    fragment: r => r.invalido ? 'indice no valido' : `indice de respiracion rapida y superficial ${r.rsbi.toFixed(0)}`
  },
  {
    key: 'pafi-berlin', title: 'Relacion PaO2/FiO2 y clasificacion de Berlin', accent: '#8c3a34',
    subtitle: 'Gravedad de la hipoxemia y de la SDRA',
    incompleteMsg: 'Introduce la PaO2 (mmHg) y la FiO2 (%).',
    fields: [
      { name: 'pao2', id: 'vm-pf-pao2', type: 'number', label: 'PaO2 (mmHg)', placeholder: 'ej. 80', row: 'r1' },
      { name: 'fio2', id: 'vm-pf-fio2', type: 'number', label: 'FiO2 (%)', placeholder: 'ej. 60', row: 'r1' },
      { name: 'peep', id: 'vm-pf-peep', type: 'number', step: '0.5', required: false, label: 'Opcional: PEEP o CPAP (cmH2O)', placeholder: 'para el criterio de SDRA' },
      { type: 'note', text: 'La clasificacion de Berlin de la SDRA exige PEEP o CPAP de al menos 5 cmH2O, inicio en una semana, opacidades bilaterales y edema no explicado solo por causa cardiaca.' }
    ],
    compute(v) {
      if (v.pao2 == null || v.fio2 == null) return null;
      if (!(v.pao2 > 0) || !(v.fio2 >= 21 && v.fio2 <= 100)) return { invalido: true };
      const pf = v.pao2 / (v.fio2 / 100);
      let cat;
      if (pf > 300) cat = 'sin SDRA por la relacion PaO2/FiO2';
      else if (pf > 200) cat = 'rango de SDRA leve';
      else if (pf > 100) cat = 'rango de SDRA moderada';
      else cat = 'rango de SDRA grave';
      const peepOk = v.peep != null ? v.peep >= 5 : null;
      return { pf, cat, peepOk };
    },
    format: r => {
      if (r.invalido) return 'PaO2 positiva y FiO2 entre 21 y 100%.';
      let s = `<strong>PaO2/FiO2 ${r.pf.toFixed(0)} mmHg</strong>: ${r.cat}.`;
      if (r.peepOk === false) s += ' Con PEEP menor de 5 no se cumple el criterio de SDRA de Berlin.';
      if (r.pf <= 150) s += ' Con PaO2/FiO2 de 150 o menos: indicacion de decubito prono al menos 16 horas.';
      return s;
    },
    fragment: r => r.invalido ? 'PaO2/FiO2 no valida' : `PaO2/FiO2 ${r.pf.toFixed(0)} (${r.cat})`
  },
  {
    key: 'rox', title: 'Indice ROX (canula nasal de alto flujo)', accent: '#3d5a73',
    subtitle: 'SpO2/FiO2 entre la frecuencia respiratoria (fracaso de la canula de alto flujo)',
    incompleteMsg: 'Introduce la SpO2 (%), la FiO2 (%) y la frecuencia respiratoria.',
    fields: [
      { name: 'spo2', id: 'vm-rox-spo2', type: 'number', label: 'SpO2 (%)', placeholder: 'ej. 94', row: 'r1' },
      { name: 'fio2', id: 'vm-rox-fio2', type: 'number', label: 'FiO2 (%)', placeholder: 'ej. 50', row: 'r1' },
      { name: 'fr', id: 'vm-rox-fr', type: 'number', label: 'Frecuencia respiratoria (por minuto)', placeholder: 'ej. 26' },
      { type: 'note', text: 'Valorar a las 2, 6 y 12 horas de iniciar la canula de alto flujo (el periodo de mayor riesgo de fracaso). Es un dato de apoyo, no sustituye la evaluacion clinica.' }
    ],
    compute(v) {
      if ([v.spo2, v.fio2, v.fr].some(x => x == null)) return null;
      if (!(v.spo2 > 0 && v.spo2 <= 100) || !(v.fio2 >= 21 && v.fio2 <= 100) || !(v.fr > 0)) return { invalido: true };
      const rox = (v.spo2 / (v.fio2 / 100)) / v.fr;
      let cat;
      if (rox >= 4.88) cat = 'bajo riesgo de fracaso: continuar y destetar';
      else if (rox >= 3.85) cat = 'zona intermedia: reevaluar en 1 a 2 horas';
      else cat = 'alto riesgo de fracaso: considerar intubacion sin demora';
      return { rox, cat };
    },
    format: r => {
      if (r.invalido) return 'SpO2 y FiO2 en porcentaje validos y frecuencia positiva.';
      return `<strong>Indice ROX ${r.rox.toFixed(2)}</strong>: ${r.cat}.`;
    },
    fragment: r => r.invalido ? 'indice ROX no valido' : `indice ROX ${r.rox.toFixed(2)}`
  },
  {
    key: 'poder-mecanico', title: 'Poder mecanico (estimacion simplificada)', accent: '#6b3a5a',
    subtitle: 'Energia por minuto en ventilacion controlada por volumen',
    incompleteMsg: 'Introduce la frecuencia, el volumen corriente, la presion pico, la meseta y la PEEP.',
    fields: [
      { name: 'fr', id: 'vm-mp-fr', type: 'number', label: 'Frecuencia respiratoria (por minuto)', placeholder: 'ej. 24', row: 'r1' },
      { name: 'vt', id: 'vm-mp-vt', type: 'number', label: 'Volumen corriente (mL)', placeholder: 'ej. 420', row: 'r1' },
      { name: 'ppico', id: 'vm-mp-ppico', type: 'number', step: '0.5', label: 'Presion pico (cmH2O)', placeholder: 'ej. 30', row: 'r2' },
      { name: 'pplat', id: 'vm-mp-pplat', type: 'number', step: '0.5', label: 'Presion meseta (cmH2O)', placeholder: 'ej. 24', row: 'r2' },
      { name: 'peep', id: 'vm-mp-peep', type: 'number', step: '0.5', label: 'PEEP total (cmH2O)', placeholder: 'ej. 10' },
      { type: 'note', text: 'Formula simplificada para ventilacion controlada por volumen con flujo constante: 0.098 x frecuencia x volumen corriente (L) x [presion pico menos la mitad de (meseta menos PEEP)]. Es un parametro orientador de investigacion; hay varias ecuaciones y umbrales en la literatura. Se han descrito peores resultados por encima de 17 a 20 J/min.' }
    ],
    compute(v) {
      if ([v.fr, v.vt, v.ppico, v.pplat, v.peep].some(x => x == null)) return null;
      const dp = v.pplat - v.peep;
      if (!(v.vt > 0) || !(v.fr > 0) || !(dp > 0) || !(v.ppico >= v.pplat)) return { invalido: true };
      const mp = 0.098 * v.fr * (v.vt / 1000) * (v.ppico - 0.5 * dp);
      return { mp };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: presion pico mayor o igual que la meseta, meseta mayor que la PEEP, volumen y frecuencia positivos.';
      const txt = r.mp < 17 ? 'por debajo del rango asociado a peores resultados' : 'en un rango asociado a peores resultados: reducir el volumen corriente, la frecuencia, la presion de distension o la PEEP no necesaria';
      return `<strong>Poder mecanico aproximado ${r.mp.toFixed(1)} J/min</strong>: ${txt}. Interpretar junto con la meseta y la presion de distension.`;
    },
    fragment: r => r.invalido ? 'poder mecanico no valido' : `poder mecanico aprox. ${r.mp.toFixed(1)} J/min`
  },
  {
    key: 'ventilacion-minuto-paco2', title: 'Ventilacion minuto para una PaCO2 objetivo', accent: '#3f6b52',
    subtitle: 'Ajuste de la frecuencia para alcanzar una PaCO2 diana',
    incompleteMsg: 'Introduce la frecuencia y el volumen corriente actuales y la PaCO2 actual y objetivo.',
    fields: [
      { name: 'fr', id: 'vm-vm-fr', type: 'number', label: 'Frecuencia respiratoria actual (por minuto)', placeholder: 'ej. 20', row: 'r1' },
      { name: 'vt', id: 'vm-vm-vt', type: 'number', label: 'Volumen corriente actual (mL)', placeholder: 'ej. 420', row: 'r1' },
      { name: 'paco2', id: 'vm-vm-paco2', type: 'number', label: 'PaCO2 actual (mmHg)', placeholder: 'ej. 60', row: 'r2' },
      { name: 'objetivo', id: 'vm-vm-obj', type: 'number', label: 'PaCO2 objetivo (mmHg)', placeholder: 'ej. 45', row: 'r2' },
      { type: 'note', text: 'Asume produccion de CO2 y espacio muerto constantes. Si el objetivo exige una frecuencia muy alta en el paciente obstructivo, priorizar evitar el auto-PEEP y aceptar hipercapnia permisiva.' }
    ],
    compute(v) {
      if ([v.fr, v.vt, v.paco2, v.objetivo].some(x => x == null)) return null;
      if (!(v.fr > 0) || !(v.vt > 0) || !(v.paco2 > 0) || !(v.objetivo > 0)) return { invalido: true };
      const veActual = v.fr * (v.vt / 1000);
      const veObjetivo = veActual * (v.paco2 / v.objetivo);
      const frSugerida = v.fr * (v.paco2 / v.objetivo);
      return { veActual, veObjetivo, frSugerida };
    },
    format: r => {
      if (r.invalido) return 'Todos los valores deben ser positivos.';
      return `<strong>Ventilacion minuto objetivo ${r.veObjetivo.toFixed(1)} L/min</strong> (actual ${r.veActual.toFixed(1)} L/min). Manteniendo el volumen corriente, la frecuencia estimada seria ${r.frSugerida.toFixed(0)} por minuto. Reevaluar con una gasometria de control.`;
    },
    fragment: r => r.invalido ? 'ajuste no valido' : `ventilacion minuto objetivo ${r.veObjetivo.toFixed(1)} L/min (frecuencia aprox. ${r.frSugerida.toFixed(0)})`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
