// topics/hipertension-arterial/calculators.js
// 3 herramientas:
// - score2: riesgo cardiovascular a 10 anos. Usa SCORE2 (40-69 anos) o SCORE2-OP (70-89) segun la
//   edad, con los coeficientes publicados (SCORE2 working group, Eur Heart J. 2021;42(25):2439-2454
//   y 2455-2467). Implementacion verificada contra los ejemplos del articulo original: varon de 50
//   anos, fumador, PAS 140, colesterol total 5.5 mmol/L y HDL 1.3 mmol/L -> 5.9% en region de bajo
//   riesgo y 14.0% en region de muy alto riesgo; mujer con el mismo perfil -> 4.2% y 13.7%.
//   No aplicar en diabetes (usar SCORE2-Diabetes), enfermedad cardiovascular establecida,
//   enfermedad renal cronica moderada-grave o hipercolesterolemia familiar: ya son de riesgo alto.
// - arr: cociente aldosterona/renina para el cribado del hiperaldosteronismo primario
//   (Endocrine Society, J Clin Endocrinol Metab. 2016;101(5):1889-1916).
// - clasificacion-pa: clasifica la PA de consultorio (ESC 2024 y ACC/AHA 2025) y, si se dan
//   cifras fuera de consultorio, deduce el fenotipo (bata blanca, enmascarada, sostenida).
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

const MGDL_A_MMOL_COL = 0.02586; // colesterol: mg/dL -> mmol/L

const S2 = {
  male:   { b: { age: 0.3742, smk: 0.6012, sbp: 0.2777, dm: 0.6457, tc: 0.1458, hdl: -0.2698, age_smk: -0.0755, age_sbp: -0.0255, age_tc: -0.0281, age_hdl: 0.0426, age_dm: -0.0983 }, s0: 0.9605,
            scale: { bajo: [-0.5699, 0.7476], moderado: [-0.1565, 0.8009], alto: [0.3207, 0.9360], muyalto: [0.5836, 0.8294] } },
  female: { b: { age: 0.4648, smk: 0.7744, sbp: 0.3131, dm: 0.8096, tc: 0.1002, hdl: -0.2606, age_smk: -0.1088, age_sbp: -0.0277, age_tc: -0.0226, age_hdl: 0.0613, age_dm: -0.1272 }, s0: 0.9776,
            scale: { bajo: [-0.7380, 0.7019], moderado: [-0.3143, 0.7701], alto: [0.5710, 0.9369], muyalto: [0.9412, 0.8329] } }
};
const S2OP = {
  male:   { b: { age: 0.0634, dm: 0.4245, smk: 0.3524, sbp: 0.0094, tc: 0.0850, hdl: -0.3564, age_dm: -0.0174, age_smk: -0.0247, age_sbp: -0.0005, age_tc: 0.0073, age_hdl: 0.0091 }, s0: 0.7576, mean: -0.0929,
            scale: { bajo: [-0.34, 1.19], moderado: [0.01, 1.25], alto: [0.08, 1.15], muyalto: [0.05, 0.70] } },
  female: { b: { age: 0.0789, dm: 0.6010, smk: 0.4921, sbp: 0.0102, tc: 0.0605, hdl: -0.3040, age_dm: -0.0107, age_smk: -0.0255, age_sbp: -0.0004, age_tc: -0.0009, age_hdl: 0.0154 }, s0: 0.8082, mean: -0.229,
            scale: { bajo: [-0.52, 1.01], moderado: [-0.10, 1.10], alto: [0.38, 1.09], muyalto: [0.38, 0.69] } }
};

function recalibra(risk0, scale1, scale2) {
  return 1 - Math.exp(-Math.exp(scale1 + scale2 * Math.log(-Math.log(1 - risk0))));
}

function score2(sexo, region, edad, fumador, sbp, tcMmol, hdlMmol) {
  const usarOP = edad >= 70;
  const M = usarOP ? S2OP[sexo] : S2[sexo];
  const b = M.b;
  let cage, csbp, ctc, chdl;
  if (usarOP) { cage = edad - 73; csbp = sbp - 150; ctc = tcMmol - 6; chdl = hdlMmol - 1.4; }
  else { cage = (edad - 60) / 5; csbp = (sbp - 120) / 20; ctc = (tcMmol - 6) / 1; chdl = (hdlMmol - 1.3) / 0.5; }
  const smk = fumador ? 1 : 0;
  let x = b.age * cage + b.smk * smk + b.sbp * csbp + b.tc * ctc + b.hdl * chdl
    + b.age_smk * cage * smk + b.age_sbp * cage * csbp + b.age_tc * cage * ctc + b.age_hdl * cage * chdl;
  // diabetes fijada en 0 (no usar SCORE2 en diabetes)
  let risk0;
  if (usarOP) risk0 = 1 - Math.pow(M.s0, Math.exp(x - M.mean));
  else risk0 = 1 - Math.pow(M.s0, Math.exp(x));
  const [s1, s2] = M.scale[region];
  const risk = recalibra(risk0, s1, s2);
  return { pct: risk * 100, modelo: usarOP ? 'SCORE2-OP' : 'SCORE2' };
}

function categoriaRiesgo(edad, pct) {
  let cortes;
  if (edad < 50) cortes = [2.5, 7.5];
  else if (edad < 70) cortes = [5, 10];
  else cortes = [7.5, 15];
  if (pct < cortes[0]) return 'bajo a moderado';
  if (pct < cortes[1]) return 'alto';
  return 'muy alto';
}

export const calculators = [
  {
    key: 'score2', title: 'SCORE2 y SCORE2-OP', accent: '#8a2f43',
    subtitle: 'Riesgo cardiovascular a 10 anos (ESC), calibrado por region',
    incompleteMsg: 'Completa edad (40 a 89), sexo, PA sistolica, colesterol total y HDL, y la region.',
    fields: [
      { name: 'edad', id: 'hta-s2-edad', type: 'number', label: 'Edad (anos)', placeholder: '40 a 89', row: 'r1' },
      { name: 'sexo', id: 'hta-s2-sexo', type: 'select', label: 'Sexo', options: [
        { value: '', label: 'Selecciona' }, { value: 'male', label: 'Masculino' }, { value: 'female', label: 'Femenino' }], row: 'r1' },
      { name: 'sbp', id: 'hta-s2-sbp', type: 'number', label: 'PA sistolica (mmHg)', placeholder: 'ej. 150', row: 'r2' },
      { name: 'fumador', id: 'hta-s2-fuma', type: 'checkbox', label: 'Fumador actual', row: 'r2' },
      { name: 'coltotal', id: 'hta-s2-ct', type: 'number', label: 'Colesterol total (mg/dL)', placeholder: 'ej. 220', row: 'r3' },
      { name: 'colhdl', id: 'hta-s2-hdl', type: 'number', label: 'Colesterol HDL (mg/dL)', placeholder: 'ej. 45', row: 'r3' },
      { name: 'region', id: 'hta-s2-region', type: 'select', label: 'Region de riesgo', options: [
        { value: '', label: 'Selecciona' },
        { value: 'bajo', label: 'Bajo riesgo' },
        { value: 'moderado', label: 'Riesgo moderado' },
        { value: 'alto', label: 'Riesgo alto' },
        { value: 'muyalto', label: 'Riesgo muy alto' }] },
      { type: 'note', text: 'Region: Mexico y Latinoamerica no tienen una calibracion oficial de la ESC; usar la region moderada o alta como aproximacion y el juicio clinico. No usar en diabetes (SCORE2-Diabetes), enfermedad cardiovascular establecida, enfermedad renal cronica moderada-grave o hipercolesterolemia familiar, que ya son de riesgo alto.' }
    ],
    compute(v) {
      if ([v.edad, v.sbp, v.coltotal, v.colhdl].some(x => x == null)) return null;
      if (!v.sexo || !v.region) return null;
      if (v.edad < 40 || v.edad > 89) return { fueraRango: true };
      if (!(v.coltotal > 0) || !(v.colhdl > 0) || !(v.sbp > 0)) return null;
      const tcMmol = v.coltotal * MGDL_A_MMOL_COL;
      const hdlMmol = v.colhdl * MGDL_A_MMOL_COL;
      const r = score2(v.sexo, v.region, v.edad, !!v.fumador, v.sbp, tcMmol, hdlMmol);
      const cat = categoriaRiesgo(v.edad, r.pct);
      return { pct: r.pct, modelo: r.modelo, cat, edad: v.edad };
    },
    format: r => {
      if (r.fueraRango) return 'SCORE2 y SCORE2-OP solo estan validados entre los 40 y los 89 anos.';
      const impl = r.cat === 'muy alto'
        ? 'Riesgo muy alto: tratamiento farmacologico y objetivo de PA estricto.'
        : r.cat === 'alto'
          ? 'Riesgo alto: iniciar tratamiento farmacologico junto con el estilo de vida.'
          : 'Riesgo bajo a moderado: estilo de vida y farmacos solo si hay hipertension establecida o dano de organo.';
      return `<strong>${r.modelo} ${r.pct.toFixed(1)}% a 10 anos</strong>. Categoria para ${r.edad < 50 ? 'menores de 50 anos' : r.edad < 70 ? '50 a 69 anos' : '70 anos o mas'}: <strong>${r.cat}</strong>. ${impl}`;
    },
    fragment: r => r.fueraRango ? 'SCORE2 fuera de rango de edad' : `${r.modelo} ${r.pct.toFixed(1)}% (riesgo ${r.cat})`
  },
  {
    key: 'arr', title: 'Cociente aldosterona/renina (ARR)', accent: '#3d5a73',
    subtitle: 'Cribado del hiperaldosteronismo primario',
    incompleteMsg: 'Introduce la aldosterona plasmatica, el tipo de renina y su valor.',
    fields: [
      { name: 'aldo', id: 'hta-arr-aldo', type: 'number', label: 'Aldosterona plasmatica (ng/dL)', placeholder: 'ej. 22' },
      { name: 'tipo', id: 'hta-arr-tipo', type: 'select', label: 'Medida de renina', options: [
        { value: '', label: 'Selecciona' },
        { value: 'arp', label: 'Actividad de renina plasmatica (ng/mL/h)' },
        { value: 'crd', label: 'Concentracion de renina directa (mUI/L)' }] },
      { name: 'renina', id: 'hta-arr-renina', type: 'number', step: '0.01', label: 'Valor de renina', placeholder: 'ej. 0.5' },
      { type: 'note', text: 'Condiciones: corregir la hipopotasemia, dieta con sodio libre, muestra matutina tras 2 horas levantado y 5 a 15 minutos sentado. Suspender antes los antagonistas del receptor mineralocorticoide (4 semanas) y, si es posible, betabloqueadores, IECA, ARA-II, diureticos y dihidropiridinas (2 semanas); verapamilo, hidralazina o doxazosina interfieren poco.' }
    ],
    compute(v) {
      if (v.aldo == null || v.renina == null || !v.tipo) return null;
      if (!(v.renina > 0)) return { reninaCero: true, aldo: v.aldo };
      const arr = v.aldo / v.renina;
      const corte = v.tipo === 'arp' ? 30 : 3.7;
      const unidad = v.tipo === 'arp' ? '(ng/dL)/(ng/mL/h)' : '(ng/dL)/(mUI/L)';
      const aldoAlta = v.aldo >= 15;
      let interpret;
      if (arr >= corte && aldoAlta) interpret = 'positivo';
      else if (arr >= corte && !aldoAlta) interpret = 'limitrofe';
      else interpret = 'negativo';
      return { arr, corte, unidad, aldoAlta, interpret, aldo: v.aldo };
    },
    format: r => {
      if (r.reninaCero) return `Renina no medible o cercana a cero: si la aldosterona esta elevada (${r.aldo} ng/dL), el cociente es muy alto y apoya el cribado positivo; confirma con una prueba especifica.`;
      const txt = {
        positivo: `cribado <strong>positivo</strong> (cociente por encima de ${r.corte} con aldosterona 15 ng/dL o mayor). Continuar con una prueba de confirmacion (sobrecarga de sodio, captopril o fludrocortisona).`,
        limitrofe: `cociente elevado pero con aldosterona menor de 15 ng/dL: resultado <strong>limitrofe</strong>. Repetir en condiciones optimas antes de decidir.`,
        negativo: `cribado <strong>negativo</strong> para hiperaldosteronismo primario en estas condiciones.`
      }[r.interpret];
      return `<strong>ARR ${r.arr.toFixed(1)} ${r.unidad}</strong>: ${txt}`;
    },
    fragment: r => r.reninaCero ? 'ARR: renina suprimida' : `ARR ${r.arr.toFixed(1)} (${r.interpret})`
  },
  {
    key: 'clasificacion-pa', title: 'Clasificacion de la presion arterial', accent: '#6b3a5a',
    subtitle: 'Categoria de consultorio y fenotipo con MAPA o AMPA',
    incompleteMsg: 'Introduce al menos la PA sistolica y diastolica de consultorio.',
    fields: [
      { name: 'pasC', id: 'hta-cp-pasc', type: 'number', label: 'PA sistolica de consultorio (mmHg)', placeholder: 'ej. 146', row: 'r1' },
      { name: 'padC', id: 'hta-cp-padc', type: 'number', label: 'PA diastolica de consultorio (mmHg)', placeholder: 'ej. 92', row: 'r1' },
      { name: 'pasF', id: 'hta-cp-pasf', type: 'number', required: false, label: 'Opcional: PA sistolica fuera de consultorio (MAPA diurna o AMPA)', placeholder: 'ej. 132', row: 'r2' },
      { name: 'padF', id: 'hta-cp-padf', type: 'number', required: false, label: 'Opcional: PA diastolica fuera de consultorio', placeholder: 'ej. 84', row: 'r2' },
      { type: 'note', text: 'Umbral fuera de consultorio (MAPA diurna o AMPA): 135/85 mmHg o mayor. MAPA de 24 horas 130/80; MAPA nocturna 120/70.' }
    ],
    compute(v) {
      if (v.pasC == null || v.padC == null) return null;
      const esc = (v.pasC < 120 && v.padC < 70) ? 'no elevada'
        : (v.pasC < 140 && v.padC < 90) ? 'PA elevada'
        : 'hipertension';
      let grado = '';
      if (esc === 'hipertension') {
        grado = (v.pasC >= 180 || v.padC >= 110) ? ' de grado 3'
          : (v.pasC >= 160 || v.padC >= 100) ? ' de grado 2'
          : ' de grado 1';
      }
      const aha = (v.pasC < 120 && v.padC < 80) ? 'normal'
        : (v.pasC < 130 && v.padC < 80) ? 'elevada'
        : (v.pasC < 140 && v.padC < 90) ? 'estadio 1'
        : 'estadio 2';
      const oficinaAlta = v.pasC >= 140 || v.padC >= 90;
      let fenotipo = null;
      if (v.pasF != null && v.padF != null) {
        const fueraAlta = v.pasF >= 135 || v.padF >= 85;
        fenotipo = oficinaAlta
          ? (fueraAlta ? 'HTA sostenida' : 'HTA de bata blanca')
          : (fueraAlta ? 'HTA enmascarada' : 'normotension');
      }
      return { esc, grado, aha, fenotipo };
    },
    format: r => {
      let s = `<strong>ESC 2024: ${r.esc}${r.grado}</strong>. ACC/AHA 2025: ${r.aha}.`;
      if (r.fenotipo) s += ` Fenotipo con la medicion fuera de consultorio: <strong>${r.fenotipo}</strong>.`;
      else s += ' Confirma con MAPA o AMPA antes de diagnosticar y para descartar bata blanca o HTA enmascarada.';
      return s;
    },
    fragment: r => r.fenotipo ? `PA: ${r.esc}${r.grado} (${r.fenotipo})` : `PA de consultorio: ${r.esc}${r.grado}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
