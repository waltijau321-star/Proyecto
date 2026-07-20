// topics/cirrosis-hepatica/calculators.js
// 10 calculadoras de Cirrosis en el contrato declarativo del motor (engine/calculators.js).
// Lógica de cálculo migrada SIN cambios desde el prototipo validado — no alterar fórmulas.

/* ===== Helpers de fragmento/nota (compartidos por descriptores y nota combinada) ===== */
const fragChildPugh = r => `<strong>Child-Pugh ${r.cls}</strong> (${r.sum} puntos, esperanza de vida aproximada ${r.esperanza})`;
const fmtChildPugh  = r => `Insuficiencia hepática crónica, ${fragChildPugh(r)}.`;

const fragMeldNa = r => `<strong>MELD-Na ${r.meldna} puntos</strong> (mortalidad aproximada ${r.mort} a 90 días)`;
const fmtMeldNa  = r => `Insuficiencia hepática crónica descompensada, ${fragMeldNa(r)}.`;

const fragFibrosis = r => `<strong>FIB-4 ${r.fib4.toFixed(2)}</strong> / <strong>APRI ${r.apri.toFixed(2)}</strong> puntos — ${r.stage}`;
const fmtFibrosis  = r => `${fragFibrosis(r)}.`;

const fragClifAclfShort = r => r.grade > 0 ? `CLIF-C ACLF ${r.score} puntos` : `CLIF-OF ${r.clifof} puntos (sin criterios de ACLF)`;
const fmtClifAclf = r => {
  if (r.grade === 0) {
    return `Sin criterios de ACLF por falla orgánica definida (Moreau 2013). CLIF-OF ${r.clifof} puntos. Considerar CLIF-C AD para descompensación aguda simple.`;
  }
  return `Insuficiencia hepática aguda sobre crónica <strong>grado ${r.grade}</strong> (${r.failCount} ${r.failCount === 1 ? 'sistema afectado' : 'sistemas afectados'}), <strong>CLIF-C ACLF ${r.score} puntos</strong> (mortalidad aproximada ${r.mort} a 28 días).`;
};

const fmtMaddrey = r => {
  if (r.severity === 'grave') {
    return `Hepatitis alcohólica <strong>grave</strong> — Maddrey (mDF) <strong>${r.df.toFixed(1)} puntos</strong> (≥32; mortalidad aproximada a 28 días sin tratamiento 30-50%). Considerar corticoterapia y reevaluar respuesta con score de Lille al día 7.`;
  }
  return `Hepatitis alcohólica <strong>leve-moderada</strong> — Maddrey (mDF) <strong>${r.df.toFixed(1)} puntos</strong> (&lt;32). Manejo de soporte; corticoterapia generalmente no indicada.`;
};

const fmtBaveno5 = r => `Regla del 5 (Baveno VII): <strong>${r.status}</strong> — ${r.detail}.`;

const fragClifAd = r => `<strong>CLIF-C AD ${r.score} puntos</strong> (riesgo pronóstico ${r.risk})`;
const fmtClifAd  = r => `Descompensación aguda sin falla orgánica — ${fragClifAd(r)}. <span style="color:var(--ink-faint);font-size:12px;">Fórmula aproximada (Jalan 2015); validar con la fuente original antes de uso clínico definitivo.</span>`;

const fmtWestHaven = v => {
  let txt = `Encefalopatía hepática tipo ${v.tipo}, West Haven grado ${v.grado}, ${v.curso}`;
  txt += v.precip ? ` precipitada por ${v.precip}.` : '.';
  return txt;
};

const fmtRucam = r => `Causalidad de hepatotoxicidad medicamentosa (RUCAM): <strong>${r.score} puntos</strong> — categoría <strong>${r.cat}</strong>.`;

/* ===== Calculadoras ===== */
export const calculators = [
  {
    key: 'childpugh', title: 'Child-Pugh', accent: '#5c4a73',
    subtitle: 'Pronóstico global · gravedad de cirrosis',
    fields: [
      { name: 'bili', id: 'cp-bili', type: 'select', numeric: true, label: 'Bilirrubina total', options: [
        { value: '1', label: '<2 mg/dL (1 pt)' }, { value: '2', label: '2-3 mg/dL (2 pt)' }, { value: '3', label: '>3 mg/dL (3 pt)' }] },
      { name: 'alb', id: 'cp-alb', type: 'select', numeric: true, label: 'Albúmina', options: [
        { value: '1', label: '>3.5 g/dL (1 pt)' }, { value: '2', label: '2.8-3.5 g/dL (2 pt)' }, { value: '3', label: '<2.8 g/dL (3 pt)' }] },
      { name: 'inr', id: 'cp-inr', type: 'select', numeric: true, label: 'INR', options: [
        { value: '1', label: '<1.7 (1 pt)' }, { value: '2', label: '1.7-2.3 (2 pt)' }, { value: '3', label: '>2.3 (3 pt)' }] },
      { name: 'asc', id: 'cp-asc', type: 'select', numeric: true, label: 'Ascitis', options: [
        { value: '1', label: 'Ausente (1 pt)' }, { value: '2', label: 'Leve / controlada con diuréticos (2 pt)' }, { value: '3', label: 'Moderada-severa / refractaria (3 pt)' }] },
      { name: 'he', id: 'cp-he', type: 'select', numeric: true, label: 'Encefalopatía hepática', options: [
        { value: '1', label: 'Ausente (1 pt)' }, { value: '2', label: 'Grado I-II (2 pt)' }, { value: '3', label: 'Grado III-IV (3 pt)' }] }
    ],
    compute(v) {
      const sum = v.bili + v.alb + v.inr + v.asc + v.he;
      let cls, esperanza;
      if (sum <= 6) { cls = 'A'; esperanza = '15-20 años'; }
      else if (sum <= 9) { cls = 'B'; esperanza = '4-14 años'; }
      else { cls = 'C'; esperanza = '1-3 años'; }
      return { sum, cls, esperanza };
    },
    format: fmtChildPugh, fragment: fragChildPugh
  },
  {
    key: 'meldna', title: 'MELD-Na', accent: '#5c4a73',
    subtitle: 'Mortalidad a 90 días · priorización de trasplante',
    incompleteMsg: 'Completa todos los campos.',
    fields: [
      { name: 'bili', id: 'mn-bili', type: 'number', step: '0.1', label: 'Bilirrubina (mg/dL)', placeholder: 'ej. 2.4', row: 'a' },
      { name: 'inr', id: 'mn-inr', type: 'number', step: '0.1', label: 'INR', placeholder: 'ej. 1.6', row: 'a' },
      { name: 'creat', id: 'mn-creat', type: 'number', step: '0.1', label: 'Creatinina (mg/dL)', placeholder: 'ej. 1.1', row: 'b' },
      { name: 'na', id: 'mn-na', type: 'number', step: '1', label: 'Sodio (mEq/L)', placeholder: 'ej. 133', row: 'b' },
      { name: 'dialysis', id: 'mn-dialysis', type: 'checkbox', label: 'Diálisis ≥2 veces en la última semana, o CRRT ≥24h' },
      { type: 'note', text: 'Creatinina acotada 1.0-4.0 mg/dL; sodio acotado 125-137 mEq/L, según convención UNOS/OPTN.' }
    ],
    compute(v) {
      let bili = Math.max(v.bili, 1), inr = Math.max(v.inr, 1);
      let creat = v.dialysis ? 4.0 : v.creat;
      creat = Math.min(Math.max(creat, 1), 4);
      const na = Math.min(Math.max(v.na, 125), 137);
      let meld = 3.78 * Math.log(bili) + 11.2 * Math.log(inr) + 9.57 * Math.log(creat) + 6.43;
      meld = Math.min(Math.max(Math.round(meld), 6), 40);
      let meldna = meld;
      if (meld > 11) { meldna = meld + 1.32 * (137 - na) - (0.033 * meld * (137 - na)); }
      meldna = Math.min(Math.max(Math.round(meldna), 6), 40);
      let mort;
      if (meldna < 10) mort = '~1.9%'; else if (meldna < 20) mort = '~6%'; else if (meldna < 30) mort = '~19.6%'; else if (meldna < 40) mort = '~52.6%'; else mort = '~71.3%';
      return { meld, meldna, mort };
    },
    format: fmtMeldNa, fragment: fragMeldNa
  },
  {
    key: 'clifaclf', title: 'CLIF-C ACLF', accent: '#8c3a34',
    subtitle: 'Falla multiorgánica · mortalidad a 28 días',
    incompleteMsg: 'Completa todos los campos numéricos.',
    fields: [
      { name: 'age', id: 'ac-age', type: 'number', label: 'Edad (años)', placeholder: 'ej. 58', row: 'a' },
      { name: 'wbc', id: 'ac-wbc', type: 'number', step: '0.1', label: 'Leucocitos (×10⁹/L)', placeholder: 'ej. 11.2', row: 'a' },
      { name: 'bili', id: 'ac-bili', type: 'number', step: '0.1', label: 'Bilirrubina (mg/dL)', placeholder: 'ej. 8.5', row: 'b' },
      { name: 'inr', id: 'ac-inr', type: 'number', step: '0.1', label: 'INR', placeholder: 'ej. 2.1', row: 'b' },
      { name: 'creat', id: 'ac-creat', type: 'number', step: '0.1', label: 'Creatinina (mg/dL)', placeholder: 'ej. 1.8', row: 'c' },
      { name: 'brainVal', id: 'ac-brain', type: 'select', label: 'Encefalopatía (West Haven)', row: 'c', options: [
        { value: '0', label: 'Grado 0 / Mínima' }, { value: '12', label: 'Grado I-II' }, { value: '34', label: 'Grado III-IV' }] },
      { name: 'rrt', id: 'ac-rrt', type: 'checkbox', label: 'Terapia de reemplazo renal (TRR)' },
      { name: 'circ', id: 'ac-circ', type: 'select', numeric: true, label: 'Circulación', options: [
        { value: '1', label: 'PAM ≥70 mmHg, sin vasopresores' }, { value: '2', label: 'PAM <70 mmHg, sin vasopresores' }, { value: '3', label: 'Requiere vasopresores' }] },
      { name: 'resp', id: 'ac-resp', type: 'select', numeric: true, label: 'Respiración', options: [
        { value: '1', label: 'PaO₂/FiO₂ >300 (SpO₂/FiO₂ >357)' }, { value: '2', label: 'PaO₂/FiO₂ 201-300 (SpO₂/FiO₂ 215-357)' }, { value: '3', label: 'PaO₂/FiO₂ ≤200 (SpO₂/FiO₂ ≤214)' }] },
      { type: 'note', text: 'Implementación simplificada de los criterios CLIF-OF/Moreau 2013 — sección en afinamiento continuo.' }
    ],
    compute(v) {
      const creat = v.rrt ? 4.0 : v.creat;
      const liverS = v.bili >= 12 ? 3 : (v.bili >= 6 ? 2 : 1);
      const kidneyS = v.rrt || creat >= 3.5 ? 3 : (creat >= 2.0 ? 2 : 1);
      const brainS = v.brainVal === '34' ? 3 : (v.brainVal === '12' ? 2 : 1);
      const coagS = v.inr >= 2.5 ? 3 : (v.inr >= 2.0 ? 2 : 1);
      const circS = v.circ, respS = v.resp;
      const clifof = liverS + kidneyS + brainS + coagS + circS + respS;
      const liverFail = liverS === 3, kidneyFail = kidneyS >= 2, brainFail = brainS === 3, coagFail = coagS === 3, circFail = circS === 3, respFail = respS === 3;
      const failCount = [liverFail, kidneyFail, brainFail, coagFail, circFail, respFail].filter(Boolean).length;
      let grade;
      if (failCount === 0) { grade = 0; }
      else if (failCount === 1) {
        if (kidneyFail) { grade = 1; }
        else {
          const mildRenal = v.creat >= 1.5 && v.creat < 2.0 && !v.rrt;
          const mildHE = v.brainVal === '12';
          grade = (mildRenal || mildHE) ? 1 : 0;
        }
      } else if (failCount === 2) { grade = 2; } else { grade = 3; }
      const score = 10 * (0.33 * clifof + 0.04 * v.age + 0.63 * Math.log(v.wbc) - 2);
      const scoreR = Math.round(Math.max(score, 0));
      let mort;
      if (scoreR < 45) mort = '15-20%'; else if (scoreR <= 64) mort = '40-50%'; else mort = '>75-80%';
      return { clifof, failCount, grade, score: scoreR, mort };
    },
    format: fmtClifAclf, fragment: fragClifAclfShort
  },
  {
    key: 'clifad', title: 'CLIF-C AD', accent: '#8c3a34',
    subtitle: 'Descompensación aguda sin falla orgánica',
    incompleteMsg: 'Completa todos los campos.',
    fields: [
      { name: 'age', id: 'ad-age', type: 'number', label: 'Edad (años)', placeholder: 'ej. 60', row: 'a' },
      { name: 'wbc', id: 'ad-wbc', type: 'number', step: '0.1', label: 'Leucocitos (×10⁹/L)', placeholder: 'ej. 8.5', row: 'a' },
      { name: 'creat', id: 'ad-creat', type: 'number', step: '0.1', label: 'Creatinina (mg/dL)', placeholder: 'ej. 0.9', row: 'b' },
      { name: 'inr', id: 'ad-inr', type: 'number', step: '0.1', label: 'INR', placeholder: 'ej. 1.4', row: 'b' },
      { name: 'na', id: 'ad-na', type: 'number', label: 'Sodio (mEq/L)', placeholder: 'ej. 134' },
      { type: 'note', text: 'Para descompensación aguda SIN falla orgánica (si hay falla orgánica, usar CLIF-C ACLF). Fórmula aproximada, sujeta a validación.' }
    ],
    compute(v) {
      const score = 10 * (0.03 * v.age + 0.66 * Math.log(v.creat) + 1.71 * Math.log(v.inr) + 1.00 * Math.log(v.wbc) - 0.05 * v.na + 8);
      const scoreR = Math.round(score);
      let risk;
      if (scoreR < 45) risk = 'relativamente menor'; else if (scoreR < 60) risk = 'intermedio'; else risk = 'elevado';
      return { score: scoreR, risk };
    },
    format: fmtClifAd, fragment: fragClifAd
  },
  {
    key: 'fibrosis', title: 'FIB-4 / APRI', accent: '#3d5a73',
    subtitle: 'Cribado no invasivo de fibrosis avanzada',
    incompleteMsg: 'Completa edad, plaquetas, AST y ALT.',
    fields: [
      { name: 'age', id: 'fx-age', type: 'number', label: 'Edad (años)', placeholder: 'ej. 54', row: 'a' },
      { name: 'plt', id: 'fx-plt', type: 'number', label: 'Plaquetas (×10⁹/L)', placeholder: 'ej. 145', row: 'a' },
      { name: 'ast', id: 'fx-ast', type: 'number', label: 'AST (U/L)', placeholder: 'ej. 62', row: 'b' },
      { name: 'alt', id: 'fx-alt', type: 'number', label: 'ALT (U/L)', placeholder: 'ej. 48', row: 'b' },
      { name: 'uln', id: 'fx-uln', type: 'number', required: false, label: 'Límite superior normal de AST (opcional, default 40 U/L)', placeholder: '40' }
    ],
    compute(v) {
      if (v.plt === 0 || v.alt === 0) return null;
      const uln = v.uln || 40;
      const fib4 = (v.age * v.ast) / (v.plt * Math.sqrt(v.alt));
      const apri = (v.ast / uln * 100) / v.plt;
      const fib4Cut = v.age > 65 ? 2.0 : 1.3;
      const fib4Adv = fib4 > 2.67, fib4Low = fib4 < fib4Cut;
      const apriAdv = apri > 1.0, apriLow = apri < 0.5;
      let stage;
      if (fib4Adv || apriAdv) stage = 'sugiere fibrosis avanzada / cirrosis (METAVIR F3-F4 aprox.)';
      else if (fib4Low && apriLow) stage = 'fibrosis avanzada improbable (METAVIR F0-F1 aprox.)';
      else stage = 'zona indeterminada — considerar elastografía hepática';
      return { fib4, apri, stage };
    },
    format: fmtFibrosis, fragment: fragFibrosis
  },
  {
    key: 'baveno5', title: 'Regla del 5 (Baveno VII)', accent: '#3f6b52',
    subtitle: 'LSM + plaquetas → hipertensión portal clínicamente significativa',
    incompleteMsg: 'Completa LSM y plaquetas.',
    fields: [
      { name: 'lsm', id: 'b5-lsm', type: 'number', step: '0.1', label: 'Rigidez hepática — LSM (kPa)', placeholder: 'ej. 18', row: 'a' },
      { name: 'plt', id: 'b5-plt', type: 'number', label: 'Plaquetas (×10⁹/L)', placeholder: 'ej. 140', row: 'a' },
      { type: 'note', text: 'LSM ≥25 kPa: HPCS muy probable. LSM <15 kPa + plaquetas ≥150,000: HPCS descartada. Zona intermedia: considerar endoscopia o HVPG.' }
    ],
    compute(v) {
      let status, detail;
      if (v.lsm >= 25) { status = 'HPCS muy probable'; detail = 'no requiere estudios adicionales para confirmar hipertensión portal clínicamente significativa'; }
      else if (v.lsm < 15 && v.plt >= 150) { status = 'HPCS descartada razonablemente'; detail = 'bajo riesgo de varices grandes; se puede diferir la endoscopia de tamizaje'; }
      else { status = 'zona gris'; detail = 'considerar endoscopia o HVPG para definir presencia de HPCS'; }
      return { status, detail };
    },
    format: fmtBaveno5, fragment: fmtBaveno5
  },
  {
    key: 'westhaven', title: 'Encefalopatía Hepática', accent: '#7a4363',
    subtitle: 'Clasificación West Haven · nota clínica',
    fields: [
      { name: 'tipo', id: 'wh-tipo', type: 'select', label: 'Tipo (según causa)', options: [
        { value: 'A', label: 'A — Falla hepática aguda' }, { value: 'B', label: 'B — Bypass portosistémico sin hepatopatía' }, { value: 'C', label: 'C — Cirrosis / hipertensión portal', selected: true }] },
      { name: 'grado', id: 'wh-grado', type: 'select', label: 'Grado (West Haven)', options: [
        { value: '0', label: '0 — Sin alteración' }, { value: 'Mínima', label: 'Mínima — solo detectable en pruebas psicométricas' }, { value: 'I', label: 'I — Euforia/ansiedad leve, atención disminuida' }, { value: 'II', label: 'II — Letargia, desorientación temporal, asterixis' }, { value: 'III', label: 'III — Somnolencia marcada, confusión, desorientación grosera' }, { value: 'IV', label: 'IV — Coma' }] },
      { name: 'curso', id: 'wh-curso', type: 'select', label: 'Curso', options: [
        { value: 'episódica', label: 'Episódica' }, { value: 'recurrente', label: 'Recurrente' }, { value: 'persistente', label: 'Persistente' }] },
      { name: 'precip', id: 'wh-precip', type: 'text', label: 'Factor precipitante (opcional)', placeholder: 'ej. constipación, infección, sangrado' }
    ],
    compute(v) { return v; },
    format: fmtWestHaven, fragment: fmtWestHaven
  },
  {
    key: 'maddrey', title: 'Maddrey', accent: '#966b35',
    subtitle: 'Hepatitis alcohólica · indicación de corticoterapia',
    incompleteMsg: 'Completa PT del paciente, PT control y bilirrubina.',
    fields: [
      { name: 'ptPatient', id: 'md-pt', type: 'number', step: '0.1', label: 'PT del paciente (segundos)', placeholder: 'ej. 22', row: 'a' },
      { name: 'ptControl', id: 'md-ptc', type: 'number', step: '0.1', label: 'PT control (segundos)', placeholder: 'ej. 12', row: 'a' },
      { name: 'bili', id: 'md-bili', type: 'number', step: '0.1', label: 'Bilirrubina total (mg/dL)', placeholder: 'ej. 12' },
      { type: 'note', text: 'mDF = 4.6 × (PT paciente − PT control) + bilirrubina. Punto de corte 32 para hepatitis alcohólica grave.' }
    ],
    compute(v) {
      const df = 4.6 * (v.ptPatient - v.ptControl) + v.bili;
      const severity = df >= 32 ? 'grave' : 'leve-moderada';
      return { df, severity };
    },
    format: fmtMaddrey, fragment: fmtMaddrey
  },
  {
    key: 'rucam', title: 'RUCAM', accent: '#8a7020',
    subtitle: 'Causalidad de hepatotoxicidad por fármacos',
    fields: [
      { name: 'time', id: 'ru-time', type: 'select', numeric: true, label: 'Tiempo hasta el inicio', options: [
        { value: '2', label: 'Sugestivo: 5-90 días del inicio (1-15 si reexposición)' }, { value: '1', label: 'Compatible: <5 o >90 días del inicio' }, { value: '0', label: 'No compatible con el fármaco' }] },
      { name: 'course', id: 'ru-course', type: 'select', numeric: true, label: 'Curso tras suspender el fármaco', options: [
        { value: '3', label: 'Descenso ≥50% en 8 días' }, { value: '2', label: 'Descenso ≥50% en 30 días' }, { value: '0', label: 'Sin dato, fármaco no suspendido, o descenso <50%' }] },
      { name: 'risk', id: 'ru-risk', type: 'select', numeric: true, label: 'Factores de riesgo (alcohol, edad ≥55)', options: [
        { value: '2', label: 'Ambos presentes' }, { value: '1', label: 'Uno presente' }, { value: '0', label: 'Ninguno' }] },
      { name: 'concom', id: 'ru-concom', type: 'select', numeric: true, label: 'Fármacos concomitantes', options: [
        { value: '0', label: 'Ninguno o sin información' }, { value: '-1', label: 'Tiempo compatible, no hepatotóxico conocido' }, { value: '-2', label: 'Hepatotóxico conocido, tiempo compatible' }, { value: '-3', label: 'Con evidencia de su rol (rechallenge positivo)' }] },
      { name: 'exclusion', id: 'ru-exclusion', type: 'select', numeric: true, label: 'Exclusión de otras causas', options: [
        { value: '2', label: 'Todas descartadas (viral, biliar, alcohol, isquemia, otras)' }, { value: '1', label: '4-5 de 6 descartadas' }, { value: '0', label: 'Menos de 4 descartadas' }, { value: '-3', label: 'Causa no farmacológica altamente probable' }] },
      { name: 'info', id: 'ru-info', type: 'select', numeric: true, label: 'Hepatotoxicidad previa conocida del fármaco', options: [
        { value: '2', label: 'Reacción incluida en ficha técnica' }, { value: '1', label: 'Reacción publicada, no en ficha técnica' }, { value: '0', label: 'Desconocida' }] },
      { name: 'rechallenge', id: 'ru-rechallenge', type: 'select', numeric: true, label: 'Respuesta a reexposición', options: [
        { value: '3', label: 'Positiva (fármaco solo, duplica enzimas)' }, { value: '1', label: 'Compatible (con otros fármacos presentes también)' }, { value: '0', label: 'Negativa o no realizada' }] },
      { type: 'note', text: 'Versión simplificada del patrón hepatocelular (Danan &amp; Benichou); para uso medicolegal/publicación usar el formulario RUCAM oficial completo.' }
    ],
    compute(v) {
      const score = v.time + v.course + v.risk + v.concom + v.exclusion + v.info + v.rechallenge;
      let cat;
      if (score <= 0) cat = 'excluida'; else if (score <= 2) cat = 'improbable'; else if (score <= 5) cat = 'posible'; else if (score <= 8) cat = 'probable'; else cat = 'muy probable';
      return { score, cat };
    },
    format: fmtRucam, fragment: fmtRucam
  }
];

/* ===== Nota combinada — composición clínica específica de Cirrosis ===== */
export const combinedNote = {
  title: 'Nota combinada', accent: '#3d6b6b',
  subtitle: 'Combina varias escalas en un solo párrafo clínico',
  items: ['clifaclf', 'clifad', 'childpugh', 'meldna', 'fibrosis', 'westhaven', 'maddrey', 'baveno5', 'rucam'],
  build(results, missing) {
    const sentences = [];
    const hasFamily = ['childpugh', 'meldna', 'fibrosis', 'clifaclf', 'clifad'].some(k => results[k]);
    if (hasFamily) {
      const parts = [];
      let lead;
      if (results.clifaclf && results.clifaclf.grade > 0) {
        const r = results.clifaclf;
        lead = `Insuficiencia hepática aguda sobre crónica grado ${r.grade} (${r.failCount} ${r.failCount === 1 ? 'sistema afectado' : 'sistemas afectados'}), <strong>CLIF-C ACLF ${r.score} puntos</strong> (mortalidad aproximada ${r.mort} a 28 días)`;
      } else if (results.clifad) {
        lead = `Insuficiencia hepática crónica descompensada, ${fragClifAd(results.clifad)}`;
      } else {
        lead = 'Insuficiencia hepática crónica descompensada';
      }
      parts.push(lead);
      if (results.childpugh) parts.push(fragChildPugh(results.childpugh));
      if (results.meldna) parts.push(fragMeldNa(results.meldna));
      if (results.fibrosis) parts.push(fragFibrosis(results.fibrosis));
      if (results.clifaclf && !(results.clifaclf.grade > 0)) parts.push(fragClifAclfShort(results.clifaclf));
      sentences.push(parts.join(', ') + '.');
    }
    if (results.westhaven) sentences.push(fmtWestHaven(results.westhaven));
    if (results.maddrey) sentences.push(fmtMaddrey(results.maddrey));
    if (results.baveno5) sentences.push(fmtBaveno5(results.baveno5));
    if (results.rucam) sentences.push(fmtRucam(results.rucam));

    let html = sentences.join(' ');
    if (missing.length) {
      html += `<div style="margin-top:10px;color:#b0453d;font-size:12.5px;">Faltan datos en: ${missing.join(', ')}.</div>`;
    }
    return html || 'Completa los campos de las escalas seleccionadas.';
  }
};

export default { calculators, combinedNote };
