// topics/cetoacidosis-estado-hiperosmolar/calculators.js
// 4 herramientas de cabecera para la crisis hiperglucemica:
// - anion-gap-cad: anion gap, correccion por albumina (Figge J, et al. Crit Care Med. 1998),
//   cociente delta para detectar trastornos mixtos, y criterios de resolucion de la CAD.
// - osmolalidad-deficit: osmolalidad efectiva y total, sodio corregido por la hiperglucemia
//   (Katz 1.6 y Hillier 2.4) y deficit de agua libre.
// - insulina-iv-cad: decision segun el potasio (la regla de seguridad mas importante), bolo y
//   tasa de infusion, y umbral para anadir dextrosa.
// - transicion-insulina-sc: paso de la infusion intravenosa a la pauta subcutanea, con la regla
//   de solapamiento de 1 a 2 h.
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

const FACTOR_ACT = {
  'varon-adulto': 0.6,
  'mujer-adulta': 0.5,
  'varon-anciano': 0.5,
  'mujer-anciana': 0.45
};

export const calculators = [
  {
    key: 'anion-gap-cad', title: 'Anion gap, cociente delta y resolucion de la CAD', accent: '#9c3d2e',
    subtitle: 'Anion gap corregido por albumina, trastornos mixtos y criterios de resolucion',
    incompleteMsg: 'Introduce el sodio, el cloro y el bicarbonato (mmol/L).',
    fields: [
      { name: 'na', id: 'ce-ag-na', type: 'number', step: '0.1', label: 'Sodio (mmol/L)', placeholder: 'ej. 132', row: 'r1' },
      { name: 'cl', id: 'ce-ag-cl', type: 'number', step: '0.1', label: 'Cloro (mmol/L)', placeholder: 'ej. 96', row: 'r1' },
      { name: 'hco3', id: 'ce-ag-hco3', type: 'number', step: '0.1', label: 'Bicarbonato (mmol/L)', placeholder: 'ej. 10', row: 'r2' },
      { name: 'alb', id: 'ce-ag-alb', type: 'number', step: '0.1', required: false, label: 'Opcional: albumina (g/dL)', placeholder: 'ej. 3.2', row: 'r2' },
      { name: 'glucosa', id: 'ce-ag-glu', type: 'number', required: false, label: 'Opcional: glucosa (mg/dL)', placeholder: 'para los criterios de resolucion', row: 'r3' },
      { name: 'ph', id: 'ce-ag-ph', type: 'number', step: '0.01', required: false, label: 'Opcional: pH venoso', placeholder: 'ej. 7.32', row: 'r3' },
      { name: 'bhb', id: 'ce-ag-bhb', type: 'number', step: '0.1', required: false, label: 'Opcional: beta-hidroxibutirato (mmol/L)', placeholder: 'ej. 0.4' },
      { type: 'note', text: 'Anion gap = sodio menos (cloro mas bicarbonato); normal 8 a 12. Corregido = anion gap + 2.5 x (4.0 menos albumina en g/dL): sin corregir se infraestima la acidosis en el paciente hipoalbuminemico. Cociente delta = (anion gap corregido menos 12) / (24 menos bicarbonato). Resolucion de la CAD: glucosa menor de 200 mg/dL y al menos 2 de (bicarbonato 15 o mayor, pH venoso mayor de 7.30, anion gap 12 o menor); el consenso ADA/EASD 2024 prefiere el beta-hidroxibutirato menor de 0.6 mmol/L.' }
    ],
    compute(v) {
      if ([v.na, v.cl, v.hco3].some(x => x == null)) return null;
      if (!(v.na > 50 && v.na < 200) || !(v.cl > 40 && v.cl < 180) || !(v.hco3 >= 0 && v.hco3 < 60)) return { invalido: true };
      const ag = v.na - v.cl - v.hco3;
      const tieneAlb = v.alb != null && v.alb > 0;
      const agCorr = tieneAlb ? ag + 2.5 * (4.0 - v.alb) : ag;
      let delta = null, deltaTxt = null;
      if (v.hco3 < 24 && agCorr > 12) {
        delta = (agCorr - 12) / (24 - v.hco3);
        if (delta < 0.4) deltaTxt = 'domina una acidosis con anion gap normal (hipercloremica), habitual tras horas de suero salino';
        else if (delta < 0.8) deltaTxt = 'acidosis mixta: con anion gap elevado y con anion gap normal a la vez';
        else if (delta <= 2) deltaTxt = 'acidosis con anion gap elevado pura, lo esperable en la cetoacidosis';
        else deltaTxt = 'anion gap elevado con alcalosis metabolica concurrente (vomitos) o acidosis respiratoria cronica compensada';
      }
      let resol = null;
      if (v.glucosa != null && v.glucosa > 0) {
        const crit = [];
        if (v.hco3 >= 15) crit.push('bicarbonato de 15 o mayor');
        if (v.ph != null && v.ph > 7.30) crit.push('pH venoso mayor de 7.30');
        if (agCorr <= 12) crit.push('anion gap de 12 o menor');
        resol = { glucosaOk: v.glucosa < 200, n: crit.length, crit, resuelta: v.glucosa < 200 && crit.length >= 2 };
      }
      const bhbOk = v.bhb != null && v.bhb >= 0 ? v.bhb < 0.6 : null;
      return { ag, agCorr, tieneAlb, delta, deltaTxt, resol, bhb: v.bhb, bhbOk };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: sodio, cloro y bicarbonato en mmol/L dentro de rangos plausibles.';
      let s = `<strong>Anion gap ${r.ag.toFixed(1)} mmol/L</strong>`;
      s += r.tieneAlb ? `; corregido por albumina <strong>${r.agCorr.toFixed(1)}</strong>.` : ' (sin corregir por albumina).';
      if (r.delta != null) s += ` Cociente delta ${r.delta.toFixed(2)}: ${r.deltaTxt}.`;
      if (r.resol) {
        if (r.resol.resuelta) s += ` <strong>Criterios de resolucion de la CAD cumplidos</strong> (glucosa menor de 200 y ${r.resol.n} de 3: ${r.resol.crit.join(', ')}): se puede pasar a insulina subcutanea si el paciente come, solapando 1 a 2 h antes de parar la infusion.`;
        else if (!r.resol.glucosaOk) s += ` CAD <strong>no resuelta</strong>: la glucosa sigue en 200 mg/dL o mas.`;
        else s += ` CAD <strong>no resuelta</strong>: solo ${r.resol.n} de los 3 criterios (hacen falta 2)${r.resol.crit.length ? ': ' + r.resol.crit.join(', ') : ''}.`;
      }
      if (r.bhbOk === true) s += ` Beta-hidroxibutirato ${r.bhb} mmol/L: por debajo de 0.6, criterio de resolucion preferido en el consenso de 2024.`;
      else if (r.bhbOk === false) s += ` Beta-hidroxibutirato ${r.bhb} mmol/L: aun por encima de 0.6, la cetosis persiste.`;
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `anion gap ${r.agCorr.toFixed(1)}${r.delta != null ? `, cociente delta ${r.delta.toFixed(2)}` : ''}`
  },
  {
    key: 'osmolalidad-deficit', title: 'Osmolalidad efectiva, sodio corregido y deficit de agua', accent: '#6b3a5a',
    subtitle: 'Clasifica el estado hiperosmolar y cuantifica el agua a reponer',
    incompleteMsg: 'Introduce el sodio, la glucosa, el peso y el grupo para el agua corporal total.',
    fields: [
      { name: 'na', id: 'ce-os-na', type: 'number', step: '0.1', label: 'Sodio medido (mmol/L)', placeholder: 'ej. 145', row: 'r1' },
      { name: 'glucosa', id: 'ce-os-glu', type: 'number', label: 'Glucosa (mg/dL)', placeholder: 'ej. 850', row: 'r1' },
      { name: 'bun', id: 'ce-os-bun', type: 'number', required: false, label: 'Opcional: nitrogeno ureico BUN (mg/dL)', placeholder: 'para la osmolalidad total', row: 'r2' },
      { name: 'peso', id: 'ce-os-peso', type: 'number', step: '0.5', label: 'Peso (kg)', placeholder: 'ej. 70', row: 'r2' },
      { name: 'grupo', id: 'ce-os-grupo', type: 'select', label: 'Agua corporal total segun sexo y edad', options: [
        { value: '', label: 'Selecciona' },
        { value: 'varon-adulto', label: 'Varon adulto (0.6 x peso)' },
        { value: 'mujer-adulta', label: 'Mujer adulta (0.5 x peso)' },
        { value: 'varon-anciano', label: 'Varon anciano (0.5 x peso)' },
        { value: 'mujer-anciana', label: 'Mujer anciana (0.45 x peso)' } ] },
      { type: 'note', text: 'Osmolalidad efectiva (tonicidad) = 2 x sodio + glucosa/18; excluye la urea, que atraviesa libremente las membranas y no genera gradiente. Sodio corregido: Katz suma 1.6 y Hillier 2.4 mmol/L por cada 100 mg/dL de glucosa por encima de 100; la de Hillier se ajusta mejor con glucemias muy altas. Deficit de agua libre = agua corporal total x (sodio corregido / 140 menos 1). Corregir la osmolalidad no mas de 3 mOsm/kg/h y el sodio no mas de 10 mmol/L en 24 h.' }
    ],
    compute(v) {
      if ([v.na, v.glucosa, v.peso].some(x => x == null) || !v.grupo) return null;
      if (!(v.na > 80 && v.na < 200) || !(v.glucosa > 0 && v.glucosa < 3000) || !(v.peso > 0 && v.peso < 400)) return { invalido: true };
      const osmEf = 2 * v.na + v.glucosa / 18;
      const osmTotal = v.bun != null && v.bun >= 0 ? osmEf + v.bun / 2.8 : null;
      const exceso = Math.max(0, v.glucosa - 100) / 100;
      const naKatz = v.na + 1.6 * exceso;
      const naHillier = v.na + 2.4 * exceso;
      const act = v.peso * FACTOR_ACT[v.grupo];
      const deficit = naHillier > 140 ? act * (naHillier / 140 - 1) : 0;
      let cat;
      if (osmEf > 320) cat = 'muy elevada: rango clasico del estado hiperosmolar (criterio de la ADA de 2009)';
      else if (osmEf > 300) cat = 'elevada: cumple el umbral del consenso ADA/EASD de 2024 para el estado hiperosmolar';
      else if (osmEf >= 285) cat = 'dentro del rango normal-alto';
      else cat = 'por debajo del rango normal';
      return { osmEf, osmTotal, naKatz, naHillier, act, deficit, cat, horasMin: osmEf > 300 ? (osmEf - 300) / 3 : 0 };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: sodio, glucosa y peso dentro de rangos plausibles.';
      let s = `<strong>Osmolalidad efectiva ${r.osmEf.toFixed(0)} mOsm/kg</strong>: ${r.cat}.`;
      if (r.osmTotal != null) s += ` Osmolalidad total ${r.osmTotal.toFixed(0)} mOsm/kg.`;
      s += ` Sodio corregido por la hiperglucemia: ${r.naKatz.toFixed(1)} mmol/L (Katz) o ${r.naHillier.toFixed(1)} mmol/L (Hillier).`;
      s += ` Agua corporal total ${r.act.toFixed(1)} L; <strong>deficit de agua libre estimado ${r.deficit.toFixed(1)} L</strong>.`;
      if (r.horasMin > 0) s += ` Bajar la osmolalidad a un maximo de 3 mOsm/kg/h supone al menos ${Math.round(r.horasMin)} h solo para llegar a 300 mOsm/kg.`;
      s += ` Elegir el suero por el sodio corregido: si esta normal o alto, salino 0.45%; si esta bajo, salino 0.9%.`;
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `osmolalidad efectiva ${r.osmEf.toFixed(0)} mOsm/kg, deficit de agua ${r.deficit.toFixed(1)} L`
  },
  {
    key: 'insulina-iv-cad', title: 'Insulina intravenosa: potasio, bolo y tasa', accent: '#3f6b52',
    subtitle: 'Regla de seguridad del potasio, dosis inicial y umbral de dextrosa',
    incompleteMsg: 'Introduce el peso, el potasio y la glucosa, y elige el cuadro.',
    fields: [
      { name: 'peso', id: 'ce-in-peso', type: 'number', step: '0.5', label: 'Peso (kg)', placeholder: 'ej. 70', row: 'r1' },
      { name: 'potasio', id: 'ce-in-k', type: 'number', step: '0.1', label: 'Potasio serico (mmol/L)', placeholder: 'ej. 4.1', row: 'r1' },
      { name: 'glucosa', id: 'ce-in-glu', type: 'number', label: 'Glucosa actual (mg/dL)', placeholder: 'ej. 520', row: 'r2' },
      { name: 'cuadro', id: 'ce-in-cuadro', type: 'select', label: 'Cuadro', options: [
        { value: '', label: 'Selecciona' },
        { value: 'cad', label: 'Cetoacidosis diabetica' },
        { value: 'ehh', label: 'Estado hiperosmolar hiperglucemico' } ], row: 'r2' },
      { type: 'note', text: 'Regla de seguridad: con potasio menor de 3.3 mmol/L NO se inicia la insulina hasta reponerlo, porque la insulina lo desplaza al interior de la celula y puede provocar arritmia mortal y paralisis respiratoria. Insulina regular intravenosa: bolo de 0.1 U/kg seguido de 0.1 U/kg/h, o bien 0.14 U/kg/h sin bolo (equivalentes). En el estado hiperosmolar se inicia despues de la reposicion inicial de volumen y a 0.05 a 0.1 U/kg/h. Objetivo de descenso: 50 a 75 mg/dL/h.' }
    ],
    compute(v) {
      if ([v.peso, v.potasio, v.glucosa].some(x => x == null) || !v.cuadro) return null;
      if (!(v.peso > 0 && v.peso < 400) || !(v.potasio > 0 && v.potasio < 12) || !(v.glucosa > 0 && v.glucosa < 3000)) return { invalido: true };
      const ehh = v.cuadro === 'ehh';
      let kAccion, kBloquea = false;
      if (v.potasio < 3.3) { kBloquea = true; kAccion = 'NO iniciar la insulina. Reponer potasio a 10 a 20 mmol/h (hasta 20 a 30 en situacion critica y con monitorizacion) hasta superar 3.3 mmol/L, y solo entonces empezar.'; }
      else if (v.potasio <= 5.2) { kAccion = 'Iniciar la insulina y anadir 20 a 30 mmol de potasio a cada litro de fluido, con objetivo de mantenerlo entre 4 y 5 mmol/L.'; }
      else { kAccion = 'Iniciar la insulina y los fluidos sin reponer potasio todavia; repetir el potasio a las 2 h y empezar a reponerlo cuando baje de 5.2 mmol/L.'; }
      const bolo = 0.1 * v.peso;
      const infusionConBolo = 0.1 * v.peso;
      const infusionSinBolo = 0.14 * v.peso;
      const infusionEhhBaja = 0.05 * v.peso;
      const umbral = ehh ? '250 a 300' : '200 a 250';
      const yaBajo = ehh ? v.glucosa <= 300 : v.glucosa <= 250;
      const objetivoMin = v.glucosa - 75, objetivoMax = v.glucosa - 50;
      return { kAccion, kBloquea, bolo, infusionConBolo, infusionSinBolo, infusionEhhBaja, ehh, umbral, yaBajo, objetivoMin, objetivoMax, glucosa: v.glucosa };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: peso, potasio y glucosa dentro de rangos plausibles.';
      let s = `<strong>Potasio: ${r.kAccion}</strong>`;
      if (r.kBloquea) return s + ' Mientras tanto, iniciar la reposicion de volumen y buscar el precipitante; repetir el potasio en 1 h.';
      if (r.ehh) {
        s += ` Insulina tras la carga inicial de volumen: <strong>${r.infusionEhhBaja.toFixed(1)} a ${r.infusionConBolo.toFixed(1)} U/h</strong> (0.05 a 0.1 U/kg/h), sin bolo.`;
      } else {
        s += ` Insulina regular intravenosa: bolo de <strong>${r.bolo.toFixed(1)} U</strong> seguido de <strong>${r.infusionConBolo.toFixed(1)} U/h</strong>, o bien <strong>${r.infusionSinBolo.toFixed(1)} U/h</strong> sin bolo (equivalentes).`;
      }
      s += ` Objetivo a la hora: glucosa de ${Math.max(0, r.objetivoMin).toFixed(0)} a ${Math.max(0, r.objetivoMax).toFixed(0)} mg/dL (descenso de 50 a 75 mg/dL/h); si no baja al menos un 10%, dar un bolo de rescate de ${r.infusionSinBolo.toFixed(1)} U (0.14 U/kg) y continuar.`;
      if (r.yaBajo) s += ` <strong>La glucosa ya esta en el umbral de dextrosa (${r.umbral} mg/dL) o por debajo:</strong> anadir suero glucosado desde el inicio y reducir la infusion a 0.02 a 0.05 U/kg/h. Con glucemia normal y cetoacidosis, sospechar una cetoacidosis euglucemica por inhibidor de SGLT2.`;
      else s += ` Al llegar a ${r.umbral} mg/dL, anadir dextrosa al 5 o al 10% y bajar la infusion a 0.02 a 0.05 U/kg/h; no suspender la insulina hasta cerrar el anion gap.`;
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.kBloquea ? 'potasio menor de 3.3: reponer antes de la insulina' : `insulina ${r.ehh ? r.infusionEhhBaja.toFixed(1) + ' a ' + r.infusionConBolo.toFixed(1) : r.infusionConBolo.toFixed(1)} U/h`)
  },
  {
    key: 'transicion-insulina-sc', title: 'Transicion de insulina intravenosa a subcutanea', accent: '#3d5a73',
    subtitle: 'Dosis diaria, reparto basal-bolo y regla de solapamiento',
    incompleteMsg: 'Introduce la tasa de infusion estable y el peso.',
    fields: [
      { name: 'tasa', id: 'ce-tr-tasa', type: 'number', step: '0.1', label: 'Tasa de infusion estable de las ultimas 6 h (U/h)', placeholder: 'ej. 2.5', row: 'r1' },
      { name: 'peso', id: 'ce-tr-peso', type: 'number', step: '0.5', label: 'Peso (kg)', placeholder: 'ej. 70', row: 'r1' },
      { name: 'previa', id: 'ce-tr-previa', type: 'select', label: 'Tratamiento previo', options: [
        { value: '', label: 'Selecciona' },
        { value: 'si', label: 'Ya usaba insulina antes del ingreso' },
        { value: 'no', label: 'No usaba insulina (inicio de novo)' } ] },
      { type: 'note', text: 'Solo se hace la transicion con la crisis RESUELTA y el paciente capaz de comer. La insulina regular intravenosa tiene una vida media de unos 7 minutos: la insulina basal subcutanea debe administrarse 1 a 2 horas ANTES de parar la infusion, o la cetosis reaparece. Estimacion a partir de la infusion: tasa por 24 y de eso el 70 al 80%. Alternativa por peso: 0.5 a 0.8 U/kg/dia. Reparto habitual: 50% basal y 50% en bolos con las comidas.' }
    ],
    compute(v) {
      if (v.tasa == null || v.peso == null || !v.previa) return null;
      if (!(v.tasa >= 0 && v.tasa < 50) || !(v.peso > 0 && v.peso < 400)) return { invalido: true };
      const porInfusion = v.tasa * 24 * 0.8;
      const porInfusionBajo = v.tasa * 24 * 0.7;
      const pesoBajo = v.peso * 0.5, pesoAlto = v.peso * 0.8;
      const tdd = porInfusion;
      return { porInfusion, porInfusionBajo, pesoBajo, pesoAlto, tdd, basal: tdd * 0.5, bolo: tdd * 0.5 / 3, previa: v.previa };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: tasa de infusion y peso dentro de rangos plausibles.';
      let s = `<strong>Requerimiento diario estimado ${r.porInfusionBajo.toFixed(0)} a ${r.porInfusion.toFixed(0)} U/dia</strong> a partir de la infusion (70 al 80% de la tasa por 24 h); por peso serian ${r.pesoBajo.toFixed(0)} a ${r.pesoAlto.toFixed(0)} U/dia. `;
      if (r.previa === 'si') s += 'Como ya usaba insulina, lo habitual es <strong>reanudar su pauta previa</strong> y usar estas cifras solo para comprobar que no se queda corta. ';
      else s += `Pauta basal-bolo orientativa: <strong>${r.basal.toFixed(0)} U de basal</strong> y unas <strong>${r.bolo.toFixed(0)} U por comida</strong>. `;
      s += '<strong>Administrar la basal subcutanea 1 a 2 horas antes de parar la infusion intravenosa</strong>, y solo con la crisis resuelta y el paciente comiendo. Anadir una pauta de correccion y revisar la glucemia antes de cada comida y al acostarse.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `dosis diaria estimada ${r.porInfusionBajo.toFixed(0)} a ${r.porInfusion.toFixed(0)} U/dia`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
