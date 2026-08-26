// protocols/vpo-calc.js
// Calculadoras de Valoración Preoperatoria (VPO), en el contrato declarativo del motor
// (engine/calculators.js). Alimentan la pestaña Escalas de la sección VPO, que monta
// engine/vpo.js.
//
// Fuentes primarias (ver Bibliografia/XV. VPO/ para los PDF originales):
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

/* ===== Puente de anticoagulación (protocolo PAUSE, CHEST 2022) =====
   Los intervalos de DOAC salen de las recomendaciones 22-25 de Douketis 2022: apixabán,
   edoxabán y rivaroxabán 1 día (riesgo hemorrágico bajo-moderado) o 2 días (alto), sin
   depender de la función renal; dabigatrán 1/2/2/4 días según riesgo y TFG ≥ o < 50. La
   recomendación en contra del puente es fuerte en fibrilación auricular y condicional en
   válvula mecánica, ETV y DOAC. */
const AC_VKA = { warfarina: 5, acenocumarol: 3, fenprocumon: 11 };
// CHEST 2022 da un rango para acenocumarol y fenprocumón, no una cifra exacta. El cálculo usa
// el extremo superior (el que deja al paciente seguro), pero se informa el rango: decir
// "11 días" sería más preciso de lo que la fuente sostiene.
const AC_RANGO = { acenocumarol: '2 a 3', fenprocumon: '10 a 12' };
const diasTexto = f => AC_RANGO[f] || null;
const AC_LABEL = {
  warfarina: 'warfarina', acenocumarol: 'acenocumarol', fenprocumon: 'fenprocumón',
  apixaban: 'apixabán', rivaroxaban: 'rivaroxabán', edoxaban: 'edoxabán', dabigatran: 'dabigatrán'
};
const AC_INDIC = {
  fa: { label: 'fibrilación auricular', fuerza: 'recomendación <strong>fuerte</strong> en contra del puente (certeza moderada, ensayo BRIDGE)' },
  valvula: { label: 'válvula cardiaca mecánica', fuerza: 'sugerencia en contra del puente' },
  etv: { label: 'enfermedad tromboembólica venosa como única indicación', fuerza: 'sugerencia en contra del puente' },
  // La recomendación de continuar sin interrumpir es específica de los antagonistas de vitamina
  // K: para un DOAC no existe, así que se declara aparte y se elige según el fármaco. Imprimir
  // la de los AVK junto a un "suspender apixabán" producía una nota que se contradice sola.
  dispositivo: {
    label: 'implante de marcapasos o desfibrilador',
    fuerza: 'recomendación fuerte a favor de <strong>continuar</strong> el antagonista de vitamina K, en vez de interrumpirlo y puentear',
    fuerzaNoVKA: 'sugerencia en contra del puente. La recomendación de continuar sin interrumpir el anticoagulante en el implante de dispositivos se estableció para los antagonistas de vitamina K, no para los anticoagulantes orales directos'
  },
  colonoscopia: { label: 'colonoscopia con polipectomía prevista', fuerza: 'sugerencia en contra del puente durante la interrupción' }
};
function puenteCompute(v) {
  const esVKA = v.farmaco in AC_VKA;
  const alto = v.sangrado === 'alto';
  const indBase = AC_INDIC[v.indicacion] || AC_INDIC.fa;
  // Con un fármaco que no es antagonista de vitamina K se usa el texto alternativo cuando la
  // indicación lo declara, para no citar una recomendación que no aplica a ese fármaco.
  const ind = (!esVKA && indBase.fuerzaNoVKA)
    ? { label: indBase.label, fuerza: indBase.fuerzaNoVKA }
    : indBase;

  // Marcapasos/DAI con antagonista de vitamina K: no se interrumpe.
  if (esVKA && v.indicacion === 'dispositivo') {
    return { farmaco: AC_LABEL[v.farmaco], esVKA, continuar: true, dias: null, puente: false,
      reinicio: 'No aplica: el anticoagulante no se interrumpe.', ind, alto, tfg: v.tfg, diasTexto: null };
  }

  let dias;
  if (esVKA) dias = AC_VKA[v.farmaco];
  else if (v.farmaco === 'dabigatran') {
    if (v.tfg === null || v.tfg === undefined) return null;
    dias = v.tfg >= 50 ? (alto ? 2 : 1) : (alto ? 4 : 2);
  } else dias = alto ? 2 : 1;

  const reinicio = esVKA
    ? 'Reiniciar 12 a 24 horas después de la cirugía, con hemostasia adecuada.'
    : (alto ? 'Reiniciar 48 a 72 horas después de la cirugía.' : 'Reiniciar alrededor de 24 horas después de la cirugía.');
  return { farmaco: AC_LABEL[v.farmaco], esVKA, continuar: false, dias, puente: false, reinicio, ind, alto, tfg: v.tfg, diasTexto: diasTexto(v.farmaco) };
}
const fragPuente = r => r.continuar
  ? `<strong>Continuar ${r.farmaco}</strong> sin interrupción, sin puente con heparina`
  : `<strong>Suspender ${r.farmaco} ${r.diasTexto || r.dias} día${r.dias > 1 ? 's' : ''} antes</strong>, sin puente con heparina`;
const fmtPuente = r => `${fragPuente(r)} (${r.continuar ? '' : `riesgo hemorrágico del procedimiento ${r.alto ? 'alto' : 'bajo-moderado'}, `}indicación: ${r.ind.label}). ${r.reinicio} Para esta indicación existe ${r.ind.fuerza}.` +
  `<span style="color:var(--ink-faint);font-size:12px;display:block;margin-top:8px;">El puente con HBPM queda para casos individualizados de riesgo trombótico muy alto, no como conducta por defecto: el puente sistemático multiplica el sangrado mayor sin reducir los eventos tromboembólicos. No medir anti-Xa de rutina (CHEST 2022).</span>`;

/* ===== DASI / MET (capacidad funcional) =====
   Tabla 5 de la guía ACC/AHA 2024, tomada de Hlatky MA, et al. Am J Cardiol.
   1989;64(10):651-654. La conversión a consumo de oxígeno es la del artículo original:
   VO2 pico (mL/kg/min) = 0.43 × DASI + 9.6, y 1 MET = 3.5 mL/kg/min. El umbral de mala
   capacidad funcional son 4 MET (guía 2024, sección 3.2). */
const DASI_ITEMS = [
  { key: 'cuidarse', pts: 2.75, label: '¿Puede cuidar de sí mismo (comer, vestirse, bañarse, usar el sanitario)?' },
  { key: 'caminarCasa', pts: 1.75, label: '¿Puede caminar bajo techo, por ejemplo dentro de su casa?' },
  { key: 'caminarCuadra', pts: 2.75, label: '¿Puede caminar una o dos cuadras en terreno plano?' },
  { key: 'escaleras', pts: 5.5, label: '¿Puede subir un piso de escaleras o caminar cuesta arriba?' },
  { key: 'correr', pts: 8, label: '¿Puede correr una distancia corta?' },
  { key: 'trabajoLigero', pts: 2.7, label: '¿Puede hacer trabajo ligero en casa (sacudir, lavar los platos)?' },
  { key: 'trabajoModerado', pts: 3.5, label: '¿Puede hacer trabajo moderado en casa (aspirar, barrer, cargar el mandado)?' },
  { key: 'trabajoPesado', pts: 8, label: '¿Puede hacer trabajo pesado en casa (tallar pisos, mover muebles)?' },
  { key: 'jardin', pts: 4.5, label: '¿Puede hacer trabajo de jardín (rastrillar, deshierbar, podar el césped)?' },
  { key: 'sexuales', pts: 5.25, label: '¿Puede tener relaciones sexuales?' },
  { key: 'recreativoModerado', pts: 6, label: '¿Puede hacer actividad recreativa moderada (golf, boliche, baile, tenis en dobles)?' },
  { key: 'deporteIntenso', pts: 7.5, label: '¿Puede practicar deportes intensos (natación, tenis individual, básquetbol, esquí)?' }
];
const DASI_MAX = DASI_ITEMS.reduce((s, i) => s + i.pts, 0); // 58.2
// La guía de 2024 define mala capacidad funcional como "menos de 4 MET O un DASI de 34 o
// menos" (nota al pie de la sección 4.3). Los dos criterios no coinciden: 4 MET por la fórmula
// de Hlatky equivalen a un DASI de apenas 10.2, así que hay una franja ancha (DASI de 11 a 34)
// que la fórmula daría por buena y el umbral de la guía por mala. Se informan ambos y, cuando
// discrepan, se dice explícitamente, en vez de elegir uno en silencio.
const DASI_CORTE = 34;
function dasiCompute(v) {
  const total = DASI_ITEMS.reduce((s, i) => s + (v[i.key] ? i.pts : 0), 0);
  const vo2 = 0.43 * total + 9.6;
  const mets = vo2 / 3.5;
  const buenaMet = mets >= 4;
  const buenaDasi = total > DASI_CORTE;
  return { total: Math.round(total * 100) / 100, vo2, mets, buenaMet, buenaDasi,
    buena: buenaMet && buenaDasi, discrepan: buenaMet !== buenaDasi };
}
const fragDasi = r => `<strong>DASI ${r.total} de ${DASI_MAX}</strong> (${r.mets.toFixed(1)} MET estimados), capacidad funcional ${r.buena ? 'conservada' : (r.discrepan ? 'en zona intermedia' : 'reducida')}`;
const fmtDasi = r => `${fragDasi(r)}. VO₂ pico estimado ${r.vo2.toFixed(1)} mL/kg/min. ${
  r.buena
    ? 'Cumple los dos criterios de la guía (4 MET o más y DASI mayor de 34): la ruta perioperatoria permite proceder sin estudios cardiacos adicionales aunque el riesgo calculado sea elevado.'
    : r.discrepan
      ? 'Los dos criterios de la guía discrepan en este paciente: alcanza 4 MET por la fórmula, pero su DASI es de 34 o menos, que la guía también cuenta como mala capacidad funcional. Conviene apoyarse en la evaluación clínica y en la pregunta de los dos pisos de escaleras antes de decidir.'
      : 'No alcanza ninguno de los dos umbrales: la capacidad funcional es mala y la ruta pasa a preguntar si un estudio adicional cambiaría el manejo.'
} <span style="color:var(--ink-faint);font-size:12px;">La guía define mala capacidad funcional como menos de 4 MET o un DASI de 34 o menos. Evaluarla de forma estructurada en cirugía de riesgo elevado es recomendación clase 2a. La pregunta de cabecera equivalente es si el paciente sube dos pisos de escaleras.</span>`;

/* ===== ARISCAT (complicaciones pulmonares posoperatorias) =====
   Canet J, et al. Anesthesiology. 2010;113(6):1338-1350. */
function ariscatCompute(v) {
  if (v.edad === null || v.edad === undefined) return null;
  const ptsEdad = v.edad <= 50 ? 0 : (v.edad <= 80 ? 3 : 16);
  const total = ptsEdad + (+v.spo2) + (v.infeccion ? 17 : 0) + (v.anemia ? 11 : 0) +
    (+v.incision) + (+v.duracion) + (v.emergencia ? 8 : 0);
  let cat, riesgo;
  if (total < 26) { cat = 'bajo'; riesgo = '1.6%'; }
  else if (total < 45) { cat = 'intermedio'; riesgo = '13.3%'; }
  else { cat = 'alto'; riesgo = '42.1%'; }
  return { total, cat, riesgo, ptsEdad };
}
const fragAriscat = r => `<strong>ARISCAT ${r.total} puntos</strong>, riesgo ${r.cat} de complicación pulmonar posoperatoria (${r.riesgo})`;
const fmtAriscat = r => `${fragAriscat(r)}. Predice el conjunto de insuficiencia respiratoria, infección respiratoria, derrame pleural, atelectasia, neumotórax, broncoespasmo y neumonitis por aspiración. <span style="color:var(--ink-faint);font-size:12px;">Puntos de corte de la cohorte de validación: &lt;26 bajo, 26-44 intermedio, ≥45 alto (Canet 2010).</span>`;

/* ===== STOP-BANG (apnea obstructiva del sueño) =====
   Chung F, et al. Anesthesiology. 2008;108(5):812-821. */
const STOPBANG_ITEMS = [
  { key: 's', label: '<strong>S</strong>noring: ¿ronca fuerte, más que al hablar o audible desde otra habitación?' },
  { key: 't', label: '<strong>T</strong>ired: ¿se siente cansado, fatigado o somnoliento durante el día?' },
  { key: 'o', label: '<strong>O</strong>bserved: ¿alguien ha observado que deja de respirar mientras duerme?' },
  { key: 'p', label: '<strong>P</strong>ressure: ¿tiene hipertensión arterial o está en tratamiento para ella?' },
  { key: 'b', label: '<strong>B</strong>MI: índice de masa corporal mayor de 35 kg/m²' },
  { key: 'a', label: '<strong>A</strong>ge: edad mayor de 50 años' },
  { key: 'n', label: '<strong>N</strong>eck: circunferencia del cuello mayor de 40 cm' },
  { key: 'g', label: '<strong>G</strong>ender: sexo masculino' }
];
function stopbangCompute(v) {
  const total = STOPBANG_ITEMS.reduce((s, i) => s + (v[i.key] ? 1 : 0), 0);
  let cat;
  if (total <= 2) cat = 'bajo';
  else if (total <= 4) cat = 'intermedio';
  else cat = 'alto';
  return { total, cat };
}
const fragStopbang = r => `<strong>STOP-BANG ${r.total} de 8</strong>, riesgo ${r.cat} de apnea obstructiva del sueño`;
const fmtStopbang = r => `${fragStopbang(r)}. ${r.total >= 5
  ? 'Con 5 puntos o más conviene avisar a anestesiología antes de la cirugía: son pacientes con vía aérea difícil más probable y sensibilidad aumentada a opioides y sedantes.'
  : 'Aun con riesgo bajo o intermedio, mantener precaución con opioides y sedantes si hay síntomas sugestivos.'} <span style="color:var(--ink-faint);font-size:12px;">Es una herramienta de cribado, no diagnóstica: el diagnóstico de apnea del sueño requiere polisomnografía (Chung 2008).</span>`;

/* ===== Apfel (náusea y vómito posoperatorios) =====
   Apfel CC, et al. Anesthesiology. 1999;91(3):693-700. */
const APFEL_RIESGO = ['10%', '21%', '39%', '61%', '79%'];
function apfelCompute(v) {
  const total = ['mujer', 'noFumador', 'antecedente', 'opioides'].reduce((s, k) => s + (v[k] ? 1 : 0), 0);
  return { total, riesgo: APFEL_RIESGO[total] };
}
const fragApfel = r => `<strong>Apfel ${r.total} de 4</strong>, riesgo de náusea y vómito posoperatorios ${r.riesgo}`;
const fmtApfel = r => `${fragApfel(r)}. ${r.total >= 2
  ? 'Con 2 factores o más se recomienda profilaxis antiemética multimodal: la estrategia habitual es un antiemético por cada factor de riesgo presente.'
  : 'Con 0 o 1 factor no suele hacer falta profilaxis de rutina; basta el tratamiento de rescate.'}`;

/* ===== Charlson (carga de comorbilidad) =====
   Charlson ME, et al. J Chronic Dis. 1987;40(5):373-383. La supervivencia estimada a 10 años
   usa la fórmula publicada 0.983^(e^(puntaje × 0.9)). */
const CHARLSON_1 = [
  { key: 'iam', label: 'Infarto de miocardio previo' },
  { key: 'icc', label: 'Insuficiencia cardiaca congestiva' },
  { key: 'vascular', label: 'Enfermedad vascular periférica' },
  { key: 'cerebrovascular', label: 'Enfermedad cerebrovascular (ACV o AIT)' },
  { key: 'demencia', label: 'Demencia' },
  { key: 'epoc', label: 'Enfermedad pulmonar crónica' },
  { key: 'conectivopatia', label: 'Enfermedad del tejido conectivo' },
  { key: 'ulcera', label: 'Enfermedad ulcerosa péptica' },
  { key: 'hepatoLeve', label: 'Hepatopatía leve' },
  { key: 'dm', label: 'Diabetes sin daño a órgano blanco' }
];
const CHARLSON_2 = [
  { key: 'hemiplejia', label: 'Hemiplejía' },
  { key: 'renal', label: 'Enfermedad renal moderada o grave' },
  { key: 'dmComplicada', label: 'Diabetes con daño a órgano blanco' },
  { key: 'tumor', label: 'Tumor sólido sin metástasis (diagnosticado en los últimos 5 años)' },
  { key: 'leucemia', label: 'Leucemia' },
  { key: 'linfoma', label: 'Linfoma' }
];
function charlsonCompute(v) {
  if (v.edad === null || v.edad === undefined) return null;
  let total = 0;
  CHARLSON_1.forEach(i => { if (v[i.key]) total += 1; });
  CHARLSON_2.forEach(i => { if (v[i.key]) total += 2; });
  if (v.hepatoGrave) total += 3;
  if (v.metastasico) total += 6;
  if (v.sida) total += 6;
  // Ajuste por edad: +1 punto por cada década a partir de los 50 años.
  const ptsEdad = v.edad < 50 ? 0 : Math.min(Math.floor((v.edad - 40) / 10), 4);
  total += ptsEdad;
  const superv = 100 * Math.pow(0.983, Math.exp(total * 0.9));
  return { total, ptsEdad, superv };
}
// Con puntajes altos la exponencial de la fórmula lleva la supervivencia por debajo de lo que
// el redondeo puede mostrar, y un "0%" literal diría más de lo que el índice puede sostener.
const survTexto = s => (s < 1 ? 'menos de 1%' : s.toFixed(0) + '%');
const fragCharlson = r => `<strong>Charlson ${r.total} puntos</strong> (incluye ${r.ptsEdad} por edad), supervivencia estimada a 10 años ${survTexto(r.superv)}`;
const fmtCharlson = r => `${fragCharlson(r)}. <span style="color:var(--ink-faint);font-size:12px;">La supervivencia procede de la fórmula publicada del índice y refleja la carga de comorbilidad, no el riesgo del procedimiento. En la valoración preoperatoria sirve para dimensionar cuánto beneficio puede esperar el paciente de una cirugía electiva (Charlson 1987).</span>`;

/* ===== Fragilidad clínica =====
   Escala clínica de fragilidad de Rockwood (Rockwood K, et al. CMAJ. 2005;173(5):489-495).
   Las etiquetas están resumidas en español; la escala original y sus descriptores completos
   pertenecen a Dalhousie University y su uso formal requiere permiso. */
const FRAGILIDAD = {
  '1': { label: 'Muy en forma', riesgo: 'bajo' },
  '2': { label: 'En forma', riesgo: 'bajo' },
  '3': { label: 'Se maneja bien', riesgo: 'bajo' },
  '4': { label: 'Fragilidad muy leve', riesgo: 'intermedio' },
  '5': { label: 'Fragilidad leve', riesgo: 'intermedio' },
  '6': { label: 'Fragilidad moderada', riesgo: 'alto' },
  '7': { label: 'Fragilidad grave', riesgo: 'alto' },
  '8': { label: 'Fragilidad muy grave', riesgo: 'muy alto' },
  '9': { label: 'Enfermedad terminal', riesgo: 'muy alto' }
};
function fragilidadCompute(v) {
  const g = FRAGILIDAD[v.grado];
  return g ? { grado: v.grado, label: g.label, riesgo: g.riesgo } : null;
}
const fragFragilidad = r => `<strong>Fragilidad clínica ${r.grado} de 9</strong> (${r.label}), riesgo perioperatorio asociado ${r.riesgo}`;
const fmtFragilidad = r => `${fragFragilidad(r)}. ${+r.grado >= 5
  ? 'A partir del grado 5 la fragilidad predice de forma independiente mortalidad, complicaciones, delirium, estancia prolongada e institucionalización al alta. Conviene una valoración geriátrica integral y una conversación explícita sobre objetivos de la cirugía.'
  : 'Por debajo del grado 5 la fragilidad no añade riesgo perioperatorio sustancial por sí misma.'} <span style="color:var(--ink-faint);font-size:12px;">Se puntúa según la situación basal de dos semanas antes de la enfermedad actual, no según cómo está el paciente hoy en cama.</span>`;

/* ===== Delirium posoperatorio =====
   No es un puntaje validado: es una lista de factores predisponentes y precipitantes con
   respaldo consistente en la literatura perioperatoria y geriátrica. Se presenta como conteo
   de factores, igual que otras ayudas clínicas no numéricas de la app. */
const DELIRIUM_PRE = [
  { key: 'edad70', label: 'Edad ≥70 años' },
  { key: 'cognitivo', label: 'Deterioro cognitivo o demencia previos' },
  { key: 'delirioPrevio', label: 'Episodio previo de delirium' },
  { key: 'fragil', label: 'Fragilidad o dependencia funcional' },
  { key: 'sensorial', label: 'Déficit visual o auditivo no corregido' },
  { key: 'depresion', label: 'Depresión' },
  { key: 'alcohol', label: 'Consumo de alcohol de riesgo' },
  { key: 'comorbilidad', label: 'Comorbilidad múltiple o polifarmacia' }
];
const DELIRIUM_PRECIP = [
  { key: 'mayor', label: 'Cirugía mayor, cardiaca, vascular o de cadera' },
  { key: 'urgente', label: 'Cirugía urgente o de emergencia' },
  { key: 'anticolinergicos', label: 'Fármacos anticolinérgicos, benzodiacepinas o meperidina' },
  { key: 'dolor', label: 'Dolor mal controlado' },
  { key: 'metabolico', label: 'Alteración hidroelectrolítica, anemia o hipoxemia' },
  { key: 'infeccion', label: 'Infección activa' },
  { key: 'sondas', label: 'Sonda vesical, restricción física o inmovilidad' },
  { key: 'sueno', label: 'Privación de sueño o desorientación ambiental' }
];
function deliriumCompute(v) {
  const pre = DELIRIUM_PRE.reduce((s, i) => s + (v[i.key] ? 1 : 0), 0);
  const precip = DELIRIUM_PRECIP.reduce((s, i) => s + (v[i.key] ? 1 : 0), 0);
  const total = pre + precip;
  let cat;
  if (pre >= 3 || total >= 6) cat = 'alto';
  else if (total >= 3) cat = 'intermedio';
  else cat = 'bajo';
  return { pre, precip, total, cat };
}
const fragDelirium = r => `<strong>Riesgo ${r.cat} de delirium posoperatorio</strong> (${r.pre} factores predisponentes y ${r.precip} precipitantes)`;
const fmtDelirium = r => `${fragDelirium(r)}. ${r.cat === 'bajo'
  ? 'Mantener las medidas no farmacológicas básicas: orientación, movilización temprana, lentes y auxiliar auditivo puestos, higiene del sueño.'
  : 'Indicar un paquete de prevención no farmacológica multicomponente, que es lo único que ha demostrado reducir la incidencia: orientación repetida, movilización temprana, hidratación, control del dolor sin anticolinérgicos ni benzodiacepinas, lentes y auxiliar auditivo, y protección del sueño. Evitar antipsicóticos como profilaxis.'} <span style="color:var(--ink-faint);font-size:12px;">Ayuda clínica basada en factores de riesgo reconocidos; no es un puntaje numérico validado. Cuanto mayor sea la carga predisponente basal, menor es el estímulo precipitante que basta para desencadenar el delirium.</span>`;

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
  },
  {
    key: 'puenteac', title: 'Puente de anticoagulación', accent: '#3d5a73',
    subtitle: 'Cuántos días suspender y si procede puentear',
    incompleteMsg: 'Con dabigatrán hace falta el aclaramiento de creatinina.',
    fields: [
      { name: 'farmaco', id: 'vp-farmaco', type: 'select', label: 'Anticoagulante', options: [
        { value: 'warfarina', label: 'Warfarina', selected: true },
        { value: 'acenocumarol', label: 'Acenocumarol' },
        { value: 'fenprocumon', label: 'Fenprocumón' },
        { value: 'apixaban', label: 'Apixabán' },
        { value: 'rivaroxaban', label: 'Rivaroxabán' },
        { value: 'edoxaban', label: 'Edoxabán' },
        { value: 'dabigatran', label: 'Dabigatrán' }
      ] },
      { name: 'sangrado', id: 'vp-sangrado', type: 'select', label: 'Riesgo hemorrágico del procedimiento', row: 'a', options: [
        { value: 'bajo', label: 'Bajo o moderado', selected: true },
        { value: 'alto', label: 'Alto' }
      ] },
      { name: 'tfg', id: 'vp-tfg', type: 'number', label: 'Aclaramiento de creatinina (mL/min)', placeholder: 'ej. 60', row: 'a', required: false },
      { name: 'indicacion', id: 'vp-indicacion', type: 'select', label: 'Indicación de la anticoagulación', options: [
        { value: 'fa', label: 'Fibrilación auricular', selected: true },
        { value: 'valvula', label: 'Válvula cardiaca mecánica' },
        { value: 'etv', label: 'Enfermedad tromboembólica venosa' },
        { value: 'dispositivo', label: 'Implante de marcapasos o desfibrilador' },
        { value: 'colonoscopia', label: 'Colonoscopia con polipectomía prevista' }
      ] },
      { type: 'note', text: 'El aclaramiento solo cambia el resultado con dabigatrán: es el único DOAC cuyo intervalo depende de la función renal. Los demás usan 1 día si el riesgo hemorrágico es bajo o moderado y 2 si es alto.' }
    ],
    compute: puenteCompute,
    format: fmtPuente, fragment: fragPuente
  },
  {
    key: 'dasi', title: 'DASI / MET', accent: '#3f6b52',
    subtitle: 'Capacidad funcional, el paso 4 de la ruta perioperatoria',
    fields: [
      { type: 'note', text: 'Marca solo las actividades que el paciente <strong>sí</strong> puede hacer. El umbral de mala capacidad funcional son 4 MET.' },
      ...DASI_ITEMS.map(i => ({ name: i.key, id: 'vdasi-' + i.key, type: 'checkbox', label: i.label }))
    ],
    compute: dasiCompute,
    format: fmtDasi, fragment: fragDasi
  },
  {
    key: 'ariscat', title: 'ARISCAT (riesgo pulmonar)', accent: '#8c3a34',
    subtitle: 'Complicaciones pulmonares posoperatorias',
    incompleteMsg: 'Completa la edad y el resto de los campos.',
    fields: [
      { name: 'edad', id: 'var-edad', type: 'number', label: 'Edad (años)', placeholder: 'ej. 65', row: 'a', shared: 'age' },
      { name: 'spo2', id: 'var-spo2', type: 'select', numeric: true, label: 'SpO₂ preoperatoria (aire ambiente)', row: 'a', options: [
        { value: '0', label: '≥96% (+0)', selected: true },
        { value: '8', label: '91-95% (+8)' },
        { value: '24', label: '≤90% (+24)' }
      ] },
      { name: 'infeccion', id: 'var-infeccion', type: 'checkbox', label: 'Infección respiratoria en el último mes (+17)' },
      { name: 'anemia', id: 'var-anemia', type: 'checkbox', label: 'Anemia preoperatoria, hemoglobina ≤10 g/dL (+11)' },
      { name: 'incision', id: 'var-incision', type: 'select', numeric: true, label: 'Incisión quirúrgica', options: [
        { value: '0', label: 'Periférica (+0)', selected: true },
        { value: '15', label: 'Abdominal alta (+15)' },
        { value: '24', label: 'Intratorácica (+24)' }
      ] },
      { name: 'duracion', id: 'var-duracion', type: 'select', numeric: true, label: 'Duración prevista de la cirugía', options: [
        { value: '0', label: 'Menos de 2 horas (+0)', selected: true },
        { value: '16', label: 'De 2 a 3 horas (+16)' },
        { value: '23', label: 'Más de 3 horas (+23)' }
      ] },
      { name: 'emergencia', id: 'var-emergencia', type: 'checkbox', label: 'Procedimiento de emergencia (+8)' }
    ],
    compute: ariscatCompute,
    format: fmtAriscat, fragment: fragAriscat
  },
  {
    key: 'stopbang', title: 'STOP-BANG', accent: '#5c4a73',
    subtitle: 'Cribado de apnea obstructiva del sueño',
    fields: STOPBANG_ITEMS.map(i => ({ name: i.key, id: 'vsb-' + i.key, type: 'checkbox', label: i.label })),
    compute: stopbangCompute,
    format: fmtStopbang, fragment: fragStopbang
  },
  {
    key: 'apfel', title: 'Apfel (náusea y vómito)', accent: '#966b35',
    subtitle: 'Riesgo de náusea y vómito posoperatorios',
    fields: [
      { name: 'mujer', id: 'vap-mujer', type: 'checkbox', label: 'Sexo femenino' },
      { name: 'noFumador', id: 'vap-nofumador', type: 'checkbox', label: 'No fumador' },
      { name: 'antecedente', id: 'vap-antecedente', type: 'checkbox', label: 'Antecedente de náusea o vómito posoperatorios, o de cinetosis' },
      { name: 'opioides', id: 'vap-opioides', type: 'checkbox', label: 'Uso previsto de opioides en el posoperatorio' }
    ],
    compute: apfelCompute,
    format: fmtApfel, fragment: fragApfel
  },
  {
    key: 'fragilidad', title: 'Fragilidad clínica', accent: '#4a5c73',
    subtitle: 'Situación basal previa a la enfermedad actual',
    fields: [
      { name: 'grado', id: 'vfr-grado', type: 'select', label: 'Grado', options: Object.keys(FRAGILIDAD).map(k => ({
        value: k, label: `${k} — ${FRAGILIDAD[k].label}`, selected: k === '3'
      })) },
      { type: 'note', text: 'Se puntúa según cómo estaba el paciente <strong>dos semanas antes</strong> de la enfermedad actual, no según cómo está hoy en cama.' }
    ],
    compute: fragilidadCompute,
    format: fmtFragilidad, fragment: fragFragilidad
  },
  {
    key: 'charlson', title: 'Índice de Charlson', accent: '#7c2d2d',
    subtitle: 'Carga de comorbilidad ajustada por edad',
    incompleteMsg: 'Completa la edad.',
    fields: [
      { name: 'edad', id: 'vch-edad', type: 'number', label: 'Edad (años)', placeholder: 'ej. 65', shared: 'age' },
      { type: 'note', text: 'Un punto cada uno' },
      ...CHARLSON_1.map(i => ({ name: i.key, id: 'vch-' + i.key, type: 'checkbox', label: i.label })),
      { type: 'note', text: 'Dos puntos cada uno' },
      ...CHARLSON_2.map(i => ({ name: i.key, id: 'vch-' + i.key, type: 'checkbox', label: i.label })),
      { type: 'note', text: 'Puntajes mayores' },
      { name: 'hepatoGrave', id: 'vch-hepatograve', type: 'checkbox', label: 'Hepatopatía moderada o grave (+3)' },
      { name: 'metastasico', id: 'vch-metastasico', type: 'checkbox', label: 'Tumor sólido metastásico (+6)' },
      { name: 'sida', id: 'vch-sida', type: 'checkbox', label: 'Sida (+6)' }
    ],
    compute: charlsonCompute,
    format: fmtCharlson, fragment: fragCharlson
  },
  {
    key: 'delirium', title: 'Riesgo de delirium posoperatorio', accent: '#5c4a73',
    subtitle: 'Factores predisponentes y precipitantes',
    fields: [
      { type: 'note', text: 'Factores predisponentes (el terreno del paciente)' },
      ...DELIRIUM_PRE.map(i => ({ name: i.key, id: 'vdel-' + i.key, type: 'checkbox', label: i.label })),
      { type: 'note', text: 'Factores precipitantes (lo que aporta el episodio quirúrgico)' },
      ...DELIRIUM_PRECIP.map(i => ({ name: i.key, id: 'vdel-' + i.key, type: 'checkbox', label: i.label }))
    ],
    compute: deliriumCompute,
    format: fmtDelirium, fragment: fragDelirium
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
