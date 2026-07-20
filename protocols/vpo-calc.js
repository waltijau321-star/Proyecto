// protocols/vpo-calc.js
// Calculadoras de Valoración Preoperatoria (VPO), en el contrato declarativo del motor
// (engine/calculators.js). No es un tema de estudio (no tiene mapa conceptual ni quiz);
// se monta como una sección propia del shell, igual que Calendario/Protocolos.
//
// Fuentes primarias (ver carpeta VPO/ para los PDF originales):
//  - ASA Physical Status Classification System. Anesthesiology Open. 2026 (rev. oct 2025).
//  - Gupta PK, et al. Circulation. 2011;124(4):381-387. (Gupta-MICA)
//  - Gupta H, et al. Chest. 2011;140(5):1207-1215. (Gupta, falla respiratoria posoperatoria)
//  - Detsky AS, et al. Arch Intern Med. 1986;146(11):2131-2134.
//  - Lee TH, et al. Circulation. 1999;100(10):1043-1049. (Índice de Lee / RCRI)
//  - Caprini JA. Curr Opin Pulm Med. 2010;16(5):448-452.
//  - Gould MK, et al. Chest. 2012;141(2)(Suppl):e227S-e277S. (CHEST AT9 — VTE no ortopédica)

/* ===== Tipos de cirugía compartidos por los calculadores de Gupta (mismas 21 categorías NSQIP) ===== */
const SURGERY_TYPES = [
  { value: 'hernia', label: 'Hernia (referencia)' },
  { value: 'anorectal', label: 'Anorrectal (ano/recto, abordaje transanal)' },
  { value: 'aortic', label: 'Aórtica' },
  { value: 'bariatric', label: 'Bariátrica' },
  { value: 'brain', label: 'Cerebral (craneotomía)' },
  { value: 'breast', label: 'Mama' },
  { value: 'cardiac', label: 'Cardiaca (no aórtica)' },
  { value: 'ent', label: 'ORL / cabeza y cuello (excepto tiroides)' },
  { value: 'foreguthpb', label: 'Esófago-gástrica / hepatopancreatobiliar' },
  { value: 'gbaas', label: 'Vesícula, apéndice, suprarrenal o bazo' },
  { value: 'intestinal', label: 'Intestino (bajo el duodeno, abordaje abierto)' },
  { value: 'neck', label: 'Cuello (tiroides / paratiroides)' },
  { value: 'obgyn', label: 'Obstétrica / ginecológica' },
  { value: 'orthopedic', label: 'Ortopédica (no vascular de extremidad)' },
  { value: 'otherabdomen', label: 'Otra cirugía abdominal' },
  { value: 'peripheralvascular', label: 'Vascular periférica (no aórtica, no venosa)' },
  { value: 'skin', label: 'Piel' },
  { value: 'spine', label: 'Columna' },
  { value: 'thoracic', label: 'Torácica (no cardiaca, no esofágica)' },
  { value: 'vein', label: 'Venas' },
  { value: 'urology', label: 'Urológica' }
];
const MICA_SURGERY_COEF = {
  hernia: 0, anorectal: -0.16, aortic: 1.60, bariatric: -0.25, brain: 1.40, breast: -1.61,
  cardiac: 1.01, ent: 0.71, foreguthpb: 1.39, gbaas: 0.59, intestinal: 1.14, neck: 0.18,
  obgyn: 0.76, orthopedic: 0.80, otherabdomen: 1.13, peripheralvascular: 0.86, skin: 0.54,
  spine: 0.21, thoracic: 0.40, vein: -1.09, urology: -0.26
};
const PRF_SURGERY_COEF = {
  hernia: 0, anorectal: -1.3530, aortic: 1.0781, bariatric: -1.0112, brain: 0.7336, breast: -2.6462,
  cardiac: 0.2744, ent: 0.1060, foreguthpb: 0.9694, gbaas: -0.5668, intestinal: 0.5737, neck: -0.5271,
  obgyn: -1.2431, orthopedic: -0.8577, otherabdomen: 0.2416, peripheralvascular: -0.2389, skin: -0.3206,
  spine: -0.5220, thoracic: 0.6715, vein: -2.0080, urology: 0.3093
};
const surgeryOptions = () => SURGERY_TYPES.map(s => ({ value: s.value, label: s.label }));
const surgeryLabel = v => (SURGERY_TYPES.find(s => s.value === v) || {}).label || v;

function logit100(L) { const e = Math.exp(L); return (100 * e / (1 + e)); }
// Deriva el rango/umbral de edad de otras escalas a partir de la edad exacta (compartida vía
// shared:'age'). Estos campos solo RECIBEN la edad (sharedOut:null): un rango de Caprini o un
// checkbox de Detsky no representan una edad exacta, así que no deben sobrescribirla.
function ageToCapriniPts(v) {
  const age = parseFloat(v);
  if (isNaN(age)) return null;
  if (age <= 40) return '0';
  if (age <= 60) return '1';
  if (age <= 74) return '2';
  return '3';
}
function ageAtLeast70(v) {
  const age = parseFloat(v);
  return isNaN(age) ? null : age >= 70;
}

/* ===== ASA ===== */
const ASA_DEF = {
  I: 'paciente sano, sin comorbilidades.',
  II: 'enfermedad sistémica leve, sin limitación funcional sustancial (p. ej. tabaquismo activo, embarazo no complicado, obesidad 30-40, HTA o DM bien controladas, EPOC leve).',
  III: 'enfermedad sistémica grave con limitación funcional sustancial (p. ej. EPOC, obesidad mórbida ≥40, hepatitis activa, cirrosis compensada, IAM/ACV/AIT/stent >3 meses, disfunción cognitiva significativa).',
  IV: 'enfermedad sistémica grave que constituye una amenaza constante para la vida (p. ej. IAM/ACV/AIT/stent <3 meses, isquemia cardiaca en curso o disfunción valvular grave, choque, sepsis, CID, cirrosis descompensada, SDRA).',
  V: 'paciente moribundo del que no se espera que sobreviva sin la cirugía (p. ej. aneurisma roto, trauma masivo, hemorragia intracraneal con efecto de masa, isquemia intestinal con falla multiorgánica).',
  VI: 'paciente donante de órganos con muerte cerebral declarada.'
};
const fragAsa = r => `<strong>ASA ${r.clase}${r.e ? 'E' : ''}</strong>`;
const fmtAsa = r => `Estado físico ${fragAsa(r)} — ${ASA_DEF[r.clase]}${r.e ? ' Cirugía de emergencia: el retraso del tratamiento significaría un aumento significativo de la amenaza a la vida o a una parte del cuerpo.' : ''}`;
// Conversión entre la clase ASA en números romanos (I-VI, usada por la calculadora ASA) y el
// valor numérico 1-5 que piden Gupta Score y Gupta-MICA (sus modelos NSQIP no incluyen ASA VI,
// donante de órganos, por lo que esa clase no tiene equivalente y no se propaga).
const ASA_ROMAN_TO_NUM = { I: '1', II: '2', III: '3', IV: '4', V: '5', VI: null };
const ASA_NUM_TO_ROMAN = { '1': 'I', '2': 'II', '3': 'III', '4': 'IV', '5': 'V' };

/* ===== Gupta — falla respiratoria posoperatoria (PRF) ===== */
const PRF_FUNC = { independent: 0, partial: 0.7678, total: 1.4046 };
const PRF_ASA = { '1': -3.5265, '2': -2.0008, '3': -0.6201, '4': 0.2441, '5': 0 };
const PRF_SEPSIS = { none: -0.7840, sirs: 0, sepsis: 0.2752, shock: 0.9035 };
const SEPSIS_LABEL = { none: 'sin SIRS/sepsis', sirs: 'SIRS', sepsis: 'sepsis', shock: 'choque séptico' };
const fragGuptaPrf = r => `<strong>Gupta (falla respiratoria posoperatoria) ${r.pct.toFixed(2)}%</strong> de riesgo de ventilación mecánica &gt;48 h o intubación no planeada ≤30 días tras la cirugía`;
const fmtGuptaPrf = r => `${fragGuptaPrf(r)} (cirugía ${surgeryLabel(r.surg)}, ASA ${r.asa}, estado funcional ${r.funcLabel}, ${SEPSIS_LABEL[r.sepsis]}${r.electiva ? ', electiva' : ', urgente/emergencia'}). Incidencia promedio en la cohorte NSQIP: 3.1%.`;

/* ===== Gupta-MICA (infarto o paro cardiaco perioperatorio) ===== */
const MICA_FUNC = { independent: 0, partial: 0.65, total: 1.03 };
const MICA_ASA = { '1': -5.17, '2': -3.29, '3': -1.92, '4': -0.95, '5': 0 };
const fragGuptaMica = r => `<strong>Gupta-MICA ${r.pct.toFixed(2)}%</strong> de riesgo de infarto de miocardio o paro cardiaco intra/posoperatorio (≤30 días)`;
const fmtGuptaMica = r => `${fragGuptaMica(r)} (cirugía ${surgeryLabel(r.surg)}, ASA ${r.asa}, ${r.age} años, ${r.creat ? 'creatinina ≥1.5 mg/dL' : 'creatinina normal'}, estado funcional ${r.funcLabel}). Incidencia promedio en la cohorte NSQIP: 0.65%.`;

/* ===== Detsky (índice multifactorial modificado) ===== */
const fragDetsky = r => `<strong>Detsky ${r.score} puntos</strong> — Clase ${r.cls} (riesgo cardiovascular aproximado ${r.risk})`;
const fmtDetsky = r => `${fragDetsky(r)}. <span style="color:var(--ink-faint);font-size:12px;">Clases y riesgos aproximados de fuente secundaria; el artículo original (Detsky 1986) usa un nomograma de razón de verosimilitud específico por procedimiento y centro, no porcentajes fijos por clase.</span>`;

/* ===== Índice de Lee (Revised Cardiac Risk Index) ===== */
const LEE_RISK = ['0.4%', '0.9%', '7%', '11%'];
const LEE_CLASS = ['I', 'II', 'III', 'IV'];
const fragLee = r => `<strong>Índice de Lee grupo ${r.cls}</strong> — probabilidad de complicación cardiovascular mayor (IAM, edema pulmonar, fibrilación ventricular o bloqueo cardiaco completo) ${r.risk}`;
const fmtLee = r => `${fragLee(r)} (${r.n} de 6 predictores presentes; cohorte de validación, Lee 1999).`;

/* ===== Caprini (TEV) — organizado por categoría clínica, al estilo MDCalc ===== */
// Factores binarios (Sí/No), agrupados por categoría igual que en MDCalc; cada uno suma
// pts si está marcado.
const CAPRINI_RECENT = [ // Evento reciente (<1 mes)
  { key: 'majorSurgery1m', pts: 1, label: 'Cirugía mayor' },
  { key: 'chf1m', pts: 1, label: 'Insuficiencia cardiaca congestiva' },
  { key: 'sepsis1m', pts: 1, label: 'Sepsis' },
  { key: 'pneumonia1m', pts: 1, label: 'Neumonía' },
  { key: 'yeso', pts: 2, label: 'Inmovilización con férula o yeso' },
  { key: 'fractura', pts: 5, label: 'Fractura de cadera, pelvis o pierna' },
  { key: 'acv', pts: 5, label: 'ACV' },
  { key: 'trauma', pts: 5, label: 'Politraumatismo' },
  { key: 'lme', pts: 5, label: 'Lesión medular aguda con parálisis' }
];
const CAPRINI_VENOSO = [ // Enfermedad venosa o trastorno de coagulación
  { key: 'varices', pts: 1, label: 'Venas varicosas' },
  { key: 'piernashinch', pts: 1, label: 'Piernas hinchadas actualmente' },
  { key: 'accesovenoso', pts: 2, label: 'Acceso venoso central actual' },
  { key: 'tvptep', pts: 3, label: 'Historia de TVP/TEP' },
  { key: 'histfam', pts: 3, label: 'Historia familiar de trombosis' },
  { key: 'factorv', pts: 3, label: 'Factor V Leiden positivo' },
  { key: 'protrombina', pts: 3, label: 'Mutación de protrombina G20210A positiva' },
  { key: 'homocisteina', pts: 3, label: 'Homocisteína sérica elevada' },
  { key: 'lupico', pts: 3, label: 'Anticoagulante lúpico positivo' },
  { key: 'anticardiolipina', pts: 3, label: 'Anticuerpos anticardiolipina elevados' },
  { key: 'hit', pts: 3, label: 'Trombocitopenia inducida por heparina (HIT)' },
  { key: 'otratrombofilia', pts: 3, label: 'Otra trombofilia congénita o adquirida' }
];
const CAPRINI_HISTORIA = [ // Historia presente o pasada
  { key: 'eii', pts: 1, label: 'Enfermedad inflamatoria intestinal' },
  { key: 'imc25', pts: 1, label: 'IMC &gt; 25 kg/m²' },
  { key: 'iam', pts: 1, label: 'Infarto de miocardio agudo' },
  { key: 'epoc', pts: 1, label: 'EPOC' }
];
const ptsSpan = n => ` <span style="color:var(--ink-faint);font-size:12px;">(+${n} pt${n > 1 ? 's' : ''})</span>`;
const checkboxField = it => ({ name: it.key, id: 'vc-' + it.key, type: 'checkbox', label: it.label + ptsSpan(it.pts) });
function capriniFields() {
  return [
    { name: 'age', id: 'vc-age', type: 'select', label: 'Edad', shared: 'age',
      sharedOut: () => null, sharedIn: ageToCapriniPts, options: [
      { value: '0', label: '≤40 años (+0)', selected: true }, { value: '1', label: '41-60 años (+1)' },
      { value: '2', label: '61-74 años (+2)' }, { value: '3', label: '≥75 años (+3)' }
    ] },
    { name: 'surgery', id: 'vc-surgery', type: 'select', label: 'Tipo de cirugía', options: [
      { value: '0', label: 'Ninguna (+0)', selected: true }, { value: '1', label: 'Menor, &lt;45 min (+1)' },
      { value: '2', label: 'Mayor &gt;45 min, laparoscópica &gt;45 min, o artroscópica (+2)' },
      { value: '5', label: 'Artroplastia electiva de miembro inferior (+5)' }
    ] },
    { type: 'note', text: 'Evento reciente (&lt;1 mes)' },
    ...CAPRINI_RECENT.map(checkboxField),
    { type: 'note', text: 'Enfermedad venosa o trastorno de coagulación' },
    ...CAPRINI_VENOSO.map(checkboxField),
    { name: 'mobility', id: 'vc-mobility', type: 'select', label: 'Movilidad', options: [
      { value: '0', label: 'Normal, fuera de cama (+0)', selected: true },
      { value: '1', label: 'Paciente médico actualmente en reposo en cama (+1)' },
      { value: '2', label: 'Confinado a cama &gt;72 horas (+2)' }
    ] },
    { type: 'note', text: 'Historia presente o pasada' },
    ...CAPRINI_HISTORIA.map(checkboxField),
    checkboxField({ key: 'malignancy', pts: 2, label: 'Neoplasia maligna presente o previa' }),
    checkboxField({ key: 'otherRisk', pts: 1, label: 'Otros factores de riesgo no listados' })
  ];
}
function capriniCompute(v) {
  let total = (+v.age) + (+v.surgery) + (+v.mobility);
  [...CAPRINI_RECENT, ...CAPRINI_VENOSO, ...CAPRINI_HISTORIA].forEach(it => { if (v[it.key]) total += it.pts; });
  if (v.malignancy) total += 2;
  if (v.otherRisk) total += 1;
  let cat, rec;
  if (total === 0) {
    cat = 'el más bajo'; rec = 'deambulación temprana y frecuente sola, o profilaxis mecánica (CNI o medias de compresión) durante la hospitalización.';
  } else if (total <= 4) {
    cat = 'bajo-moderado'; rec = 'profilaxis mecánica con CNI ± medias de compresión durante la hospitalización.';
  } else if (total <= 6) {
    cat = 'alto'; rec = 'CNI y considerar heparina a dosis bajas o HBPM, por 7-10 días en total.';
  } else if (total <= 8) {
    cat = 'alto'; rec = 'CNI más heparina a dosis bajas o HBPM, por 7-10 días en total.';
  } else {
    cat = 'el más alto'; rec = 'CNI más heparina a dosis bajas o HBPM, por 30 días en total.';
  }
  return { total, cat, rec };
}
const fragCaprini = r => `<strong>Caprini ${r.total} puntos</strong> — riesgo de TEV ${r.cat}`;
const fmtCaprini = r => `${fragCaprini(r)}. Se recomienda ${r.rec} <span style="color:var(--ink-faint);font-size:12px;">El umbral de "riesgo muy alto" varía por especialidad (≥5 cirugía general, ≥9-10 la mayoría de otros grupos, ≥10 artroplastia, ≥12 fractura de cadera); valorar siempre el riesgo de sangrado antes de indicar profilaxis farmacológica (Caprini 2005; MDCalc).</span>`;

/* ===== Calculadoras ===== */
export const calculators = [
  {
    key: 'asa', title: 'Clasificación ASA', accent: '#5c4a73',
    subtitle: 'Estado físico preanestésico',
    fields: [
      { name: 'clase', id: 'va-clase', type: 'select', label: 'Clasificación ASA', shared: 'asa',
        sharedOut: v => ASA_ROMAN_TO_NUM[v], sharedIn: v => ASA_NUM_TO_ROMAN[v], options: [
        { value: 'I', label: 'I — Paciente sano' },
        { value: 'II', label: 'II — Enfermedad sistémica leve', selected: true },
        { value: 'III', label: 'III — Enfermedad sistémica grave' },
        { value: 'IV', label: 'IV — Amenaza constante para la vida' },
        { value: 'V', label: 'V — Moribundo, no se espera que sobreviva sin cirugía' },
        { value: 'VI', label: 'VI — Donante de órganos con muerte cerebral' }
      ] },
      { name: 'emergencia', id: 'va-emerg', type: 'checkbox', label: 'Cirugía de emergencia (agrega el sufijo E)' }
    ],
    compute(v) { return { clase: v.clase, e: v.emergencia }; },
    format: fmtAsa, fragment: fragAsa
  },
  {
    key: 'guptaprf', title: 'Gupta Score (falla respiratoria)', accent: '#8c3a34',
    subtitle: 'Riesgo de ventilación mecánica &gt;48 h o intubación no planeada',
    incompleteMsg: 'Completa la edad y el resto de los campos.',
    fields: [
      { name: 'age', id: 'vg-age', type: 'number', label: 'Edad (años)', placeholder: 'ej. 65', row: 'a', shared: 'age' },
      { name: 'asa', id: 'vg-asa', type: 'select', numeric: false, label: 'Clase ASA', row: 'a', shared: 'asa', options: [
        { value: '1', label: 'I' }, { value: '2', label: 'II' }, { value: '3', label: 'III', selected: true }, { value: '4', label: 'IV' }, { value: '5', label: 'V' }
      ] },
      { name: 'func', id: 'vg-func', type: 'select', label: 'Estado funcional', row: 'b', shared: 'func', options: [
        { value: 'independent', label: 'Independiente', selected: true },
        { value: 'partial', label: 'Parcialmente dependiente' },
        { value: 'total', label: 'Totalmente dependiente' }
      ] },
      { name: 'sepsis', id: 'vg-sepsis', type: 'select', label: 'Estado séptico preoperatorio', row: 'b', options: [
        { value: 'none', label: 'Ninguno' },
        { value: 'sirs', label: 'SIRS', selected: true },
        { value: 'sepsis', label: 'Sepsis' },
        { value: 'shock', label: 'Choque séptico' }
      ] },
      { name: 'electiva', id: 'vg-electiva', type: 'checkbox', label: 'Cirugía electiva (no urgente/emergencia)' },
      { name: 'surg', id: 'vg-surg', type: 'select', label: 'Tipo de cirugía', shared: 'surg', options: surgeryOptions() }
    ],
    compute(v) {
      if (v.age === null || v.age === undefined) return null;
      const L = -1.7397 + PRF_FUNC[v.func] + PRF_ASA[v.asa] + PRF_SEPSIS[v.sepsis] + (v.electiva ? -0.5739 : 0) + PRF_SURGERY_COEF[v.surg];
      const funcLabel = { independent: 'independiente', partial: 'parcialmente dependiente', total: 'totalmente dependiente' }[v.func];
      return { pct: logit100(L), asa: v.asa, funcLabel, sepsis: v.sepsis, electiva: v.electiva, surg: v.surg };
    },
    format: fmtGuptaPrf, fragment: fragGuptaPrf
  },
  {
    key: 'guptamica', title: 'Gupta-MICA (cardiaco)', accent: '#8c3a34',
    subtitle: 'Riesgo de infarto de miocardio o paro cardiaco perioperatorio',
    incompleteMsg: 'Completa la edad y el resto de los campos.',
    fields: [
      { name: 'age', id: 'vm-age', type: 'number', label: 'Edad (años)', placeholder: 'ej. 65', row: 'a', shared: 'age' },
      { name: 'asa', id: 'vm-asa', type: 'select', label: 'Clase ASA', row: 'a', shared: 'asa', options: [
        { value: '1', label: 'I' }, { value: '2', label: 'II' }, { value: '3', label: 'III', selected: true }, { value: '4', label: 'IV' }, { value: '5', label: 'V' }
      ] },
      { name: 'func', id: 'vm-func', type: 'select', label: 'Estado funcional', row: 'b', shared: 'func', options: [
        { value: 'independent', label: 'Independiente', selected: true },
        { value: 'partial', label: 'Parcialmente dependiente' },
        { value: 'total', label: 'Totalmente dependiente' }
      ] },
      { name: 'creat', id: 'vm-creat', type: 'checkbox', label: 'Creatinina preoperatoria ≥1.5 mg/dL', row: 'b' },
      { name: 'surg', id: 'vm-surg', type: 'select', label: 'Tipo de cirugía', shared: 'surg', options: surgeryOptions() }
    ],
    compute(v) {
      if (v.age === null || v.age === undefined) return null;
      const L = -5.25 + 0.02 * v.age + MICA_ASA[v.asa] + (v.creat ? 0.61 : 0) + MICA_FUNC[v.func] + MICA_SURGERY_COEF[v.surg];
      const funcLabel = { independent: 'independiente', partial: 'parcialmente dependiente', total: 'totalmente dependiente' }[v.func];
      return { pct: logit100(L), asa: v.asa, age: v.age, creat: v.creat, funcLabel, surg: v.surg };
    },
    format: fmtGuptaMica, fragment: fragGuptaMica
  },
  {
    key: 'detsky', title: 'Detsky (índice modificado)', accent: '#3d5a73',
    subtitle: 'Índice multifactorial de riesgo cardiaco',
    fields: [
      { name: 'mi', id: 'vd-mi', type: 'select', label: 'Infarto de miocardio', options: [
        { value: '0', label: 'Ninguno', selected: true }, { value: '10', label: '≤6 meses (10 pt)' }, { value: '5', label: '&gt;6 meses (5 pt)' }
      ] },
      { name: 'angina', id: 'vd-angina', type: 'select', label: 'Angina (Canadian Cardiovascular Society)', options: [
        { value: '0', label: 'Ninguna / clase I-II', selected: true }, { value: '10', label: 'Clase III (10 pt)' }, { value: '20', label: 'Clase IV (20 pt)' }
      ] },
      { name: 'unstable', id: 'vd-unstable', type: 'checkbox', label: 'Angina inestable &lt;3 meses (10 pt)' },
      { name: 'edema', id: 'vd-edema', type: 'select', label: 'Edema pulmonar alveolar', options: [
        { value: '0', label: 'Nunca', selected: true }, { value: '10', label: 'Última semana (10 pt)' }, { value: '5', label: 'Alguna vez, remoto (5 pt)' }
      ] },
      { name: 'as', id: 'vd-as', type: 'checkbox', label: 'Sospecha de estenosis aórtica crítica (20 pt)' },
      { name: 'arrhythmia', id: 'vd-arrhythmia', type: 'checkbox', label: 'Ritmo distinto al sinusal, o sinusal con extrasístoles auriculares en el último ECG (5 pt)' },
      { name: 'pvcs', id: 'vd-pvcs', type: 'checkbox', label: '&gt;5 extrasístoles ventriculares documentadas alguna vez (5 pt)' },
      { name: 'poorstatus', id: 'vd-poorstatus', type: 'checkbox', label: 'Mal estado médico general (5 pt)' },
      { type: 'note', text: 'Mal estado general (criterios de Goldman): PaO₂ &lt;60 mmHg, PaCO₂ &gt;50 mmHg, K⁺ &lt;3.0 mEq/L, HCO₃⁻ &lt;20 mEq/L, BUN &gt;50 mg/dL, creatinina &gt;3 mg/dL, AST anormal, signos de hepatopatía crónica, o postrado en cama por causas no cardiacas.' },
      { name: 'age70', id: 'vd-age70', type: 'checkbox', label: 'Edad ≥ 70 años (5 pt)', shared: 'age', sharedOut: () => null, sharedIn: ageAtLeast70 },
      { name: 'emergency', id: 'vd-emergency', type: 'checkbox', label: 'Cirugía de emergencia (10 pt)' }
    ],
    compute(v) {
      const score = (+v.mi) + (+v.angina) + (v.unstable ? 10 : 0) + (+v.edema) + (v.as ? 20 : 0) +
        (v.arrhythmia ? 5 : 0) + (v.pvcs ? 5 : 0) + (v.poorstatus ? 5 : 0) + (v.age70 ? 5 : 0) + (v.emergency ? 10 : 0);
      let cls, risk;
      if (score <= 15) { cls = 'I'; risk = '≈5-10%'; }
      else if (score <= 30) { cls = 'II'; risk = '≈10-15%'; }
      else { cls = 'III'; risk = '&gt;15% (hasta 30-60% en puntajes muy altos)'; }
      return { score, cls, risk };
    },
    format: fmtDetsky, fragment: fragDetsky
  },
  {
    key: 'leeindex', title: 'Índice de Lee (RCRI)', accent: '#3f6b52',
    subtitle: 'Índice de riesgo cardiaco revisado',
    fields: [
      { name: 'rf1', id: 'vl-rf1', type: 'checkbox', label: 'Cirugía de alto riesgo (intraperitoneal, intratorácica o vascular suprainguinal)' },
      { name: 'rf2', id: 'vl-rf2', type: 'checkbox', label: 'Cardiopatía isquémica (IAM previo, angina actual, uso de nitratos, prueba de esfuerzo positiva u ondas Q patológicas)' },
      { name: 'rf3', id: 'vl-rf3', type: 'checkbox', label: 'Insuficiencia cardiaca congestiva' },
      { name: 'rf4', id: 'vl-rf4', type: 'checkbox', label: 'Enfermedad cerebrovascular (ACV o AIT previos)' },
      { name: 'rf5', id: 'vl-rf5', type: 'checkbox', label: 'Diabetes tratada con insulina' },
      { name: 'rf6', id: 'vl-rf6', type: 'checkbox', label: 'Creatinina sérica preoperatoria &gt;2.0 mg/dL' }
    ],
    compute(v) {
      const n = ['rf1', 'rf2', 'rf3', 'rf4', 'rf5', 'rf6'].reduce((s, k) => s + (v[k] ? 1 : 0), 0);
      const idx = Math.min(n, 3);
      return { n, cls: LEE_CLASS[idx], risk: LEE_RISK[idx] };
    },
    format: fmtLee, fragment: fragLee
  },
  {
    key: 'caprini', title: 'Caprini (riesgo de TEV)', accent: '#966b35',
    subtitle: 'Tromboprofilaxis perioperatoria',
    fields: capriniFields(),
    compute: capriniCompute,
    format: fmtCaprini, fragment: fragCaprini
  }
];

export const combinedNote = {
  title: 'Nota combinada VPO', accent: '#3d5a73',
  subtitle: 'Combina las 6 escalas en un solo párrafo para el mismo paciente',
  items: ['asa', 'guptaprf', 'guptamica', 'detsky', 'leeindex', 'caprini'],
  defaultChecked: true,
  build(results, missing) {
    const items = [];
    if (results.asa) items.push(fragAsa(results.asa) + (results.asa.e ? ' (emergencia)' : '') + '.');
    if (results.guptaprf) items.push(fragGuptaPrf(results.guptaprf) + '.');
    if (results.guptamica) items.push(fragGuptaMica(results.guptamica) + '.');
    if (results.detsky) items.push(fragDetsky(results.detsky) + '.');
    if (results.leeindex) items.push(fragLee(results.leeindex) + '.');
    if (results.caprini) items.push(fragCaprini(results.caprini) + `. Se recomienda ${results.caprini.rec}`);
    let html = items.length ? `<ul class="cr-list">${items.map(i => `<li>${i}</li>`).join('')}</ul>` : '';
    if (missing.length) {
      html += `<div style="margin-top:10px;color:#b0453d;font-size:12.5px;">Faltan datos en: ${missing.join(', ')}.</div>`;
    }
    return html || 'Completa los campos de las escalas seleccionadas.';
  }
};

export default { calculators, combinedNote };
