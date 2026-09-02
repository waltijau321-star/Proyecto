// topics/dislipidemias/calculators.js
// 4 herramientas:
// - panel-lipidico: colesterol LDL calculado por Friedewald y por Sampson-NIH (formula cerrada,
//   valida hasta trigliceridos de 800 mg/dL; Sampson M, et al. JAMA Cardiol. 2020), mas colesterol
//   no-HDL y colesterol remanente. Todo en mg/dL. La formula de Martin-Hopkins usa una tabla de
//   180 factores ajustables y la calcula el laboratorio; no se reproduce aqui.
// - objetivo-cldl: objetivos de colesterol LDL y no-HDL por categoria de riesgo (ESC/EAS, objetivos
//   mantenidos en la actualizacion 2025; ACC/AHA 2026).
// - dlcn-hf: score de la Dutch Lipid Clinic Network para la hipercolesterolemia familiar.
// - descenso-cldl: estimacion del colesterol LDL alcanzado al combinar hipolipemiantes (efecto
//   relativo multiplicativo sobre el cLDL restante; valores aproximados de las guias).
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

function sampsonLDL(tc, hdl, tg) {
  const nonHDL = tc - hdl;
  return (tc / 0.948) - (hdl / 0.971)
    - ((tg / 8.56) + (tg * nonHDL / 2140) - (tg * tg / 16100)) - 9.44;
}

const OBJETIVOS = {
  extremo:  { esc: 'menor de 40', escRed: true,  ahaLdl: 'menor de 55', ahaNoHdl: 'menor de 85',
              ejemplo: 'Eventos cardiovasculares recurrentes pese a tratamiento, o enfermedad polivascular.' },
  muyalto:  { esc: 'menor de 55', escRed: true,  ahaLdl: 'menor de 55', ahaNoHdl: 'menor de 85',
              ejemplo: 'ECV ateroesclerotica establecida, diabetes con dano de organo, o SCORE2 20% o mayor.' },
  alto:     { esc: 'menor de 70', escRed: true,  ahaLdl: 'menor de 70', ahaNoHdl: 'menor de 100',
              ejemplo: 'SCORE2 de 10 a 20%, hipercolesterolemia familiar, diabetes sin dano de organo, ERC moderada.' },
  moderado: { esc: 'menor de 100', escRed: false, ahaLdl: 'menor de 100', ahaNoHdl: 'menor de 130',
              ejemplo: 'SCORE2 de 5 a 10% (o PREVENT de 5 a menos de 10%).' },
  bajo:     { esc: 'menor de 116', escRed: false, ahaLdl: 'estilo de vida', ahaNoHdl: 'estilo de vida',
              ejemplo: 'SCORE2 menor de 5% (o PREVENT menor de 3%).' }
};

export const calculators = [
  {
    key: 'panel-lipidico', title: 'Panel lipidico derivado (cLDL, no-HDL y remanente)', accent: '#9a6a2e',
    subtitle: 'Colesterol LDL calculado, colesterol no-HDL y colesterol remanente',
    incompleteMsg: 'Introduce el colesterol total, el HDL y los trigliceridos (mg/dL).',
    fields: [
      { name: 'ct', id: 'dl-pl-ct', type: 'number', label: 'Colesterol total (mg/dL)', placeholder: 'ej. 240', row: 'r1' },
      { name: 'hdl', id: 'dl-pl-hdl', type: 'number', label: 'Colesterol HDL (mg/dL)', placeholder: 'ej. 45', row: 'r1' },
      { name: 'tg', id: 'dl-pl-tg', type: 'number', label: 'Trigliceridos (mg/dL)', placeholder: 'ej. 180' },
      { type: 'note', text: 'Friedewald (colesterol total menos HDL menos trigliceridos entre 5) no es valido con trigliceridos mayores de 400 mg/dL. La formula de Sampson-NIH es valida hasta 800. Con trigliceridos altos, usar el colesterol no-HDL o la ApoB.' }
    ],
    compute(v) {
      if ([v.ct, v.hdl, v.tg].some(x => x == null)) return null;
      if (!(v.ct > 0) || !(v.hdl > 0) || v.tg < 0) return null;
      const noHDL = v.ct - v.hdl;
      const friedewald = v.tg <= 400 ? (v.ct - v.hdl - v.tg / 5) : null;
      const sampson = v.tg <= 800 ? sampsonLDL(v.ct, v.hdl, v.tg) : null;
      const ldlRef = sampson != null ? sampson : friedewald;
      const remanente = ldlRef != null ? noHDL - ldlRef : null;
      return { noHDL, friedewald, sampson, remanente, tgAlto: v.tg > 400 };
    },
    format: r => {
      const f = r.friedewald != null ? `${Math.round(r.friedewald)} mg/dL` : 'no valido (trigliceridos mayores de 400)';
      const s = r.sampson != null ? `${Math.round(r.sampson)} mg/dL` : 'no valido (trigliceridos mayores de 800)';
      const rem = r.remanente != null ? `${Math.round(r.remanente)} mg/dL` : 'no estimable';
      const aviso = r.tgAlto ? ' Con trigliceridos altos, guiarse por el colesterol no-HDL o la ApoB.' : '';
      return `<strong>Colesterol no-HDL ${Math.round(r.noHDL)} mg/dL</strong>. cLDL por Friedewald: ${f}. cLDL por Sampson-NIH: ${s}. Colesterol remanente: ${rem}.${aviso}`;
    },
    fragment: r => `no-HDL ${Math.round(r.noHDL)}, cLDL ${r.sampson != null ? Math.round(r.sampson) : (r.friedewald != null ? Math.round(r.friedewald) : 'NA')} mg/dL`
  },
  {
    key: 'objetivo-cldl', title: 'Objetivo de colesterol LDL por categoria de riesgo', accent: '#8c3a34',
    subtitle: 'Objetivos de cLDL y no-HDL (ESC/EAS y ACC/AHA 2026)',
    incompleteMsg: 'Selecciona la categoria de riesgo cardiovascular.',
    fields: [
      { name: 'cat', id: 'dl-oc-cat', type: 'select', label: 'Categoria de riesgo', options: [
        { value: '', label: 'Selecciona' },
        { value: 'extremo', label: 'Riesgo extremo' },
        { value: 'muyalto', label: 'Riesgo muy alto' },
        { value: 'alto', label: 'Riesgo alto' },
        { value: 'moderado', label: 'Riesgo moderado' },
        { value: 'bajo', label: 'Riesgo bajo' } ] },
      { name: 'ldl', id: 'dl-oc-ldl', type: 'number', required: false, label: 'Opcional: cLDL actual (mg/dL)', placeholder: 'para calcular la reduccion necesaria' },
      { type: 'note', text: 'Los objetivos ESC/EAS de la actualizacion 2025 son los mismos de la guia de 2019. La ACC/AHA 2026 recupera objetivos explicitos de cLDL y de colesterol no-HDL.' }
    ],
    compute(v) {
      if (!v.cat) return null;
      const o = OBJETIVOS[v.cat];
      let brecha = null;
      if (v.ldl != null && v.ldl > 0) {
        const objNum = { extremo: 40, muyalto: 55, alto: 70, moderado: 100, bajo: 116 }[v.cat];
        const redPorObjetivo = 100 * (1 - objNum / v.ldl);
        const redReq = o.escRed ? Math.max(redPorObjetivo, 50) : redPorObjetivo;
        brecha = { objNum, redReq: Math.max(0, redReq) };
      }
      return { cat: v.cat, o, brecha };
    },
    format: r => {
      const nombre = { extremo: 'extremo', muyalto: 'muy alto', alto: 'alto', moderado: 'moderado', bajo: 'bajo' }[r.cat];
      let s = `<strong>Riesgo ${nombre}</strong>. ${r.o.ejemplo} Objetivo de cLDL (ESC/EAS): ${r.o.esc} mg/dL${r.o.escRed ? ' y reduccion de al menos el 50%' : ''}. ACC/AHA 2026: cLDL ${r.o.ahaLdl}${r.o.ahaLdl.startsWith('menor') ? ' mg/dL' : ''} y colesterol no-HDL ${r.o.ahaNoHdl}${r.o.ahaNoHdl.startsWith('menor') ? ' mg/dL' : ''}.`;
      if (r.brecha) {
        s += ` Con un cLDL actual dado, para llegar a menos de ${r.brecha.objNum} mg/dL hace falta una reduccion aproximada del ${Math.round(r.brecha.redReq)}%.`;
      }
      return s;
    },
    fragment: r => `Objetivo cLDL (riesgo ${r.cat}): ${r.o.esc} mg/dL`
  },
  {
    key: 'dlcn-hf', title: 'Score de la Dutch Lipid Clinic Network (hipercolesterolemia familiar)', accent: '#7a1f3d',
    subtitle: 'Probabilidad de hipercolesterolemia familiar',
    incompleteMsg: 'Completa el antecedente familiar, la exploracion, el estudio genetico y el cLDL sin tratamiento.',
    fields: [
      { name: 'fam', id: 'dl-hf-fam', type: 'select', label: 'Antecedente familiar (elige el de mayor puntuacion)', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Ninguno' },
        { value: '1', label: 'Familiar de primer grado con enfermedad coronaria o vascular precoz, o con cLDL alto (1)' },
        { value: '2', label: 'Familiar de primer grado con xantomas tendinosos o arco corneal, o hijo menor de 18 con cLDL alto (2)' } ] },
      { name: 'coronaria', id: 'dl-hf-cor', type: 'checkbox', label: 'El paciente tiene enfermedad coronaria precoz (2 puntos)' },
      { name: 'vascular', id: 'dl-hf-vasc', type: 'checkbox', label: 'El paciente tiene enfermedad cerebrovascular o arterial periferica precoz (1 punto)' },
      { name: 'exam', id: 'dl-hf-exam', type: 'select', label: 'Exploracion fisica (elige la de mayor puntuacion)', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Sin xantomas ni arco corneal (0)' },
        { value: '4', label: 'Arco corneal antes de los 45 anos (4)' },
        { value: '6', label: 'Xantomas tendinosos (6)' } ] },
      { name: 'ldl', id: 'dl-hf-ldl', type: 'number', label: 'cLDL sin tratamiento (mg/dL)', placeholder: 'ej. 260' },
      { name: 'dna', id: 'dl-hf-dna', type: 'select', label: 'Estudio genetico', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'No realizado o sin variante patogena (0)' },
        { value: '8', label: 'Variante funcional en LDLR, APOB o PCSK9 (8)' } ] },
      { type: 'note', text: 'Puntuacion del cLDL: 325 mg/dL o mayor suma 8; 251 a 324 suma 5; 191 a 250 suma 3; 155 a 190 suma 1. Interpretacion: mayor de 8 HF cierta; 6 a 8 HF probable; 3 a 5 HF posible; menor de 3 HF improbable.' }
    ],
    compute(v) {
      if (!v.fam || !v.exam || !v.dna || v.ldl == null) return null;
      if (!(v.ldl > 0)) return null;
      let ldlPts = 0;
      if (v.ldl >= 325) ldlPts = 8;
      else if (v.ldl >= 251) ldlPts = 5;
      else if (v.ldl >= 191) ldlPts = 3;
      else if (v.ldl >= 155) ldlPts = 1;
      const total = (+v.fam) + (v.coronaria ? 2 : 0) + (v.vascular ? 1 : 0) + (+v.exam) + ldlPts + (+v.dna);
      let cat;
      if (total > 8) cat = 'cierta';
      else if (total >= 6) cat = 'probable';
      else if (total >= 3) cat = 'posible';
      else cat = 'improbable';
      return { total, cat, ldlPts };
    },
    format: r => `<strong>DLCN ${r.total} puntos</strong>: hipercolesterolemia familiar <strong>${r.cat}</strong>. ${r.cat === 'cierta' || r.cat === 'probable' ? 'Confirmar con estudio genetico si esta disponible, tratamiento hipolipemiante intensivo y cribado familiar en cascada.' : r.cat === 'posible' ? 'Repetir el perfil sin tratamiento, descartar causas secundarias y valorar estudio genetico.' : 'HF poco probable; estratificar el riesgo y tratar segun la categoria.'}`,
    fragment: r => `DLCN ${r.total} (HF ${r.cat})`
  },
  {
    key: 'descenso-cldl', title: 'cLDL estimado al combinar hipolipemiantes', accent: '#3d5a73',
    subtitle: 'Estimacion aproximada del colesterol LDL alcanzado',
    incompleteMsg: 'Introduce el cLDL basal y elige la intensidad de la estatina.',
    fields: [
      { name: 'basal', id: 'dl-dc-basal', type: 'number', label: 'cLDL basal, sin tratamiento (mg/dL)', placeholder: 'ej. 160' },
      { name: 'estatina', id: 'dl-dc-est', type: 'select', label: 'Estatina', options: [
        { value: '', label: 'Selecciona' },
        { value: 'ninguna', label: 'Ninguna' },
        { value: 'moderada', label: 'Moderada intensidad (reduccion del 35%)' },
        { value: 'alta', label: 'Alta intensidad (reduccion del 50%)' } ] },
      { name: 'ezetimiba', id: 'dl-dc-eze', type: 'checkbox', label: 'Anadir ezetimiba (20% adicional)' },
      { name: 'bempedoico', id: 'dl-dc-bemp', type: 'checkbox', label: 'Anadir acido bempedoico (18% adicional)' },
      { name: 'pcsk9', id: 'dl-dc-pcsk9', type: 'checkbox', label: 'Anadir inhibidor de PCSK9 o inclisiran (55% adicional)' },
      { type: 'note', text: 'Estimacion orientativa: cada farmaco reduce un porcentaje relativo del cLDL restante. La respuesta individual varia; el valor real se comprueba con un perfil de control a las 4 a 12 semanas.' }
    ],
    compute(v) {
      if (v.basal == null || !v.estatina) return null;
      if (!(v.basal > 0)) return null;
      let factor = 1;
      if (v.estatina === 'moderada') factor *= 0.65;
      else if (v.estatina === 'alta') factor *= 0.50;
      if (v.ezetimiba) factor *= 0.80;
      if (v.bempedoico) factor *= 0.82;
      if (v.pcsk9) factor *= 0.45;
      const final = v.basal * factor;
      const red = 100 * (1 - factor);
      return { final, red };
    },
    format: r => `<strong>cLDL estimado ${Math.round(r.final)} mg/dL</strong> (reduccion aproximada del ${Math.round(r.red)}% respecto al basal). Comprueba con un perfil de control a las 4 a 12 semanas y escala si no se alcanza el objetivo.`,
    fragment: r => `cLDL estimado ${Math.round(r.final)} mg/dL (-${Math.round(r.red)}%)`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
