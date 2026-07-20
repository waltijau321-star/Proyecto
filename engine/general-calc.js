// engine/general-calc.js
// Calculadoras generales de Medicina Interna, disponibles en todos los temas.
// Lógica migrada del prototipo ResidenteMed.
//
// CURB-65, CKD-EPI, Wells (TVP) y CHA₂DS₂-VASc se quitaron por los momentos (a pedido
// del usuario, 2026-07-18). El código queda abajo comentado para restaurarlas después.

export const generalCalculators = [];

export default generalCalculators;

/*
export const generalCalculators = [
  {
    key: 'curb65', title: 'CURB-65', accent: '#3d5a73',
    subtitle: 'Gravedad de neumonía adquirida en la comunidad',
    fields: [
      { name: 'conf', id: 'cu-conf', type: 'checkbox', label: 'Confusión (nuevo desorientación)' },
      { name: 'urea', id: 'cu-urea', type: 'checkbox', label: 'Urea >7 mmol/L (BUN >19 mg/dL)' },
      { name: 'rr', id: 'cu-rr', type: 'checkbox', label: 'Frecuencia respiratoria ≥30/min' },
      { name: 'bp', id: 'cu-bp', type: 'checkbox', label: 'PAS <90 o PAD ≤60 mmHg' },
      { name: 'age', id: 'cu-age', type: 'checkbox', label: 'Edad ≥65 años' }
    ],
    compute(v) {
      const s = ['conf', 'urea', 'rr', 'bp', 'age'].filter(k => v[k]).length;
      const map = [
        ['bajo', 'manejo ambulatorio posible'],
        ['bajo-moderado', 'considerar hospitalización breve u observación'],
        ['moderado', 'hospitalización recomendada'],
        ['alto', 'hospitalización; valorar UCI'],
        ['muy alto', 'valorar ingreso a UCI'],
        ['crítico', 'ingreso a UCI']
      ];
      const [risk, action] = map[Math.min(s, 5)];
      return { s, risk, action };
    },
    format: r => `Neumonía adquirida en la comunidad, <strong>CURB-65 ${r.s} punto${r.s === 1 ? '' : 's'}</strong> — riesgo ${r.risk}; ${r.action}.`
  },
  {
    key: 'ckdepi', title: 'CKD-EPI 2021', accent: '#3f6b52',
    subtitle: 'Tasa de filtración glomerular estimada (sin raza)',
    incompleteMsg: 'Completa creatinina y edad.',
    fields: [
      { name: 'cr', id: 'ck-cr', type: 'number', step: '0.01', label: 'Creatinina sérica (mg/dL)', placeholder: 'ej. 1.1', row: 'a' },
      { name: 'age', id: 'ck-age', type: 'number', label: 'Edad (años)', placeholder: 'ej. 62', row: 'a' },
      { name: 'sex', id: 'ck-sex', type: 'select', label: 'Sexo', options: [
        { value: 'm', label: 'Masculino' }, { value: 'f', label: 'Femenino' }] },
      { type: 'note', text: 'Ecuación CKD-EPI creatinina 2021 (sin coeficiente de raza).' }
    ],
    compute(v) {
      const cr = v.cr, age = v.age, sex = v.sex;
      const kappa = sex === 'f' ? 0.7 : 0.9;
      const alpha = sex === 'f' ? -0.241 : -0.302;
      const sexF = sex === 'f' ? 1.012 : 1;
      const ratio = cr / kappa;
      let eGFR = 142 * Math.pow(Math.min(ratio, 1), alpha) * Math.pow(Math.max(ratio, 1), -1.200) * Math.pow(0.9938, age) * sexF;
      eGFR = Math.round(eGFR);
      let stage;
      if (eGFR >= 90) stage = 'G1 — normal o alta';
      else if (eGFR >= 60) stage = 'G2 — levemente reducida';
      else if (eGFR >= 45) stage = 'G3a — leve-moderada';
      else if (eGFR >= 30) stage = 'G3b — moderada-grave';
      else if (eGFR >= 15) stage = 'G4 — grave';
      else stage = 'G5 — fallo renal';
      return { eGFR, stage };
    },
    format: r => `TFG estimada (CKD-EPI 2021) <strong>${r.eGFR} mL/min/1.73 m²</strong> — categoría <strong>${r.stage}</strong>.`
  },
  {
    key: 'wells-tvp', title: 'Wells (TVP)', accent: '#5c4a73',
    subtitle: 'Probabilidad clínica de trombosis venosa profunda',
    fields: [
      { name: 'cancer', id: 'we-cancer', type: 'checkbox', label: 'Cáncer activo (tratamiento en 6 meses o paliativo)' },
      { name: 'paralisis', id: 'we-par', type: 'checkbox', label: 'Parálisis, paresia o inmovilización reciente de la pierna' },
      { name: 'encamado', id: 'we-enc', type: 'checkbox', label: 'Encamado ≥3 días o cirugía mayor en 12 semanas' },
      { name: 'dolor', id: 'we-dol', type: 'checkbox', label: 'Dolor localizado en trayecto venoso profundo' },
      { name: 'edema', id: 'we-ede', type: 'checkbox', label: 'Edema de toda la pierna' },
      { name: 'pantorrilla', id: 'we-pan', type: 'checkbox', label: 'Pantorrilla >3 cm respecto a la contralateral' },
      { name: 'fovea', id: 'we-fov', type: 'checkbox', label: 'Edema con fóvea en la pierna sintomática' },
      { name: 'colateral', id: 'we-col', type: 'checkbox', label: 'Venas colaterales superficiales (no varicosas)' },
      { name: 'alterna', id: 'we-alt', type: 'checkbox', label: 'Diagnóstico alternativo tan o más probable que TVP (−2)' }
    ],
    compute(v) {
      let s = ['cancer', 'paralisis', 'encamado', 'dolor', 'edema', 'pantorrilla', 'fovea', 'colateral'].filter(k => v[k]).length;
      if (v.alterna) s -= 2;
      let risk, action;
      if (s <= 0) { risk = 'baja'; action = 'dímero D; si es negativo, descarta TVP'; }
      else if (s <= 2) { risk = 'moderada'; action = 'dímero D de alta sensibilidad o eco-Doppler'; }
      else { risk = 'alta'; action = 'eco-Doppler; considerar anticoagulación empírica'; }
      return { s, risk, action };
    },
    format: r => `Sospecha de TVP — <strong>Wells ${r.s} punto${r.s === 1 ? '' : 's'}</strong>, probabilidad ${r.risk}; ${r.action}.`
  },
  {
    key: 'chadsvasc', title: 'CHA₂DS₂-VASc', accent: '#8c3a34',
    subtitle: 'Riesgo tromboembólico en fibrilación auricular',
    fields: [
      { name: 'icc', id: 'ch-icc', type: 'checkbox', label: 'Insuficiencia cardíaca / disfunción del VI' },
      { name: 'hta', id: 'ch-hta', type: 'checkbox', label: 'Hipertensión arterial' },
      { name: 'edad75', id: 'ch-e75', type: 'checkbox', label: 'Edad ≥75 años (2 puntos)' },
      { name: 'dm', id: 'ch-dm', type: 'checkbox', label: 'Diabetes mellitus' },
      { name: 'acv', id: 'ch-acv', type: 'checkbox', label: 'ACV / AIT / tromboembolismo previo (2 puntos)' },
      { name: 'vascular', id: 'ch-vas', type: 'checkbox', label: 'Enfermedad vascular (IAM, arteriopatía, placa aórtica)' },
      { name: 'edad65', id: 'ch-e65', type: 'checkbox', label: 'Edad 65-74 años' },
      { name: 'sexo', id: 'ch-sex', type: 'checkbox', label: 'Sexo femenino' }
    ],
    compute(v) {
      let s = 0;
      ['icc', 'hta', 'dm', 'vascular', 'edad65', 'sexo'].forEach(k => { if (v[k]) s += 1; });
      if (v.edad75) s += 2;
      if (v.acv) s += 2;
      const rates = [0, 1.3, 2.2, 3.2, 4.0, 6.7, 9.8, 9.6, 6.7, 15.2];
      const rate = rates[Math.min(s, 9)] || '>15';
      let rec;
      if (s === 0) rec = 'sin anticoagulación (riesgo bajo)';
      else if (s === 1 && !v.sexo) rec = 'considerar anticoagulación oral';
      else if (s === 1 && v.sexo) rec = 'generalmente sin anticoagulación (único factor: sexo)';
      else rec = 'anticoagulación oral recomendada';
      return { s, rate, rec };
    },
    format: r => `Fibrilación auricular — <strong>CHA₂DS₂-VASc ${r.s} punto${r.s === 1 ? '' : 's'}</strong> (riesgo de ictus ≈ ${r.rate}%/año); ${r.rec}.`
  }
];
*/
