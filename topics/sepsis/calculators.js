// topics/sepsis/calculators.js — cribado (SIRS y qSOFA), SOFA, SOFA-2 y aclaramiento de lactato.
// Cribado: la Surviving Sepsis Campaign 2026 recomienda de forma FUERTE usar NEWS, NEWS2, MEWS o
// SIRS por encima del qSOFA como herramienta única de tamizaje (Prescott HC, et al. Intensive Care
// Med 2026, doi:10.1007/s00134-026-08361-1). El NEWS2 completo se calcula en el módulo de
// disfunción orgánica múltiple; aquí se contrastan SIRS y qSOFA con las mismas constantes.
// Contrato declarativo del motor (engine/calculators.js).
// SOFA-2: Ranzani OT, Singer M, Salluh JIF, et al. Development and Validation of the
// Sequential Organ Failure Assessment (SOFA)-2 Score. JAMA. 2025;334(23):2090-2103.

const sel = (label, opts) => ({ type: 'select', numeric: true, label, options: opts });

export const calculators = [
  {
    key: 'cribado', title: 'Cribado de sepsis: SIRS y qSOFA', accent: '#8c3a34',
    subtitle: 'Las dos escalas con las mismas constantes, y cuál prefiere la SSC 2026',
    incompleteMsg: 'Introduce al menos temperatura, frecuencia cardíaca, frecuencia respiratoria y sistólica.',
    fields: [
      { name: 'temp', id: 'cr-t', type: 'number', step: '0.1', label: 'Temperatura (°C)', placeholder: 'ej. 38.6', row: 'a' },
      { name: 'fc', id: 'cr-fc', type: 'number', step: '1', label: 'Frecuencia cardíaca (lpm)', placeholder: 'ej. 112', row: 'a' },
      { name: 'fr', id: 'cr-fr', type: 'number', step: '1', label: 'Frecuencia respiratoria (por min)', placeholder: 'ej. 26', row: 'b' },
      { name: 'pas', id: 'cr-pas', type: 'number', step: '1', label: 'Presión arterial sistólica (mmHg)', placeholder: 'ej. 96', row: 'b' },
      { name: 'leucos', id: 'cr-leu', type: 'number', step: '0.1', required: false, label: 'Leucocitos (×10³/µL, opcional)', placeholder: 'ej. 15.2', row: 'c' },
      { name: 'paco2', id: 'cr-pco', type: 'number', step: '1', required: false, label: 'PaCO₂ (mmHg, opcional)', placeholder: 'ej. 30', row: 'c' },
      { name: 'bandas', id: 'cr-ban', type: 'checkbox', label: 'Más del 10% de bandas en el diferencial' },
      { name: 'mental', id: 'cr-men', type: 'checkbox', label: 'Alteración del estado mental (Glasgow <15)' },
      { type: 'note', text: 'SIRS (≥2 de 4): temperatura >38 o <36 °C, FC >90, FR >20 o PaCO₂ <32, leucocitos >12.000 o <4.000/µL o >10% bandas. qSOFA (≥2 de 3): FR ≥22, alteración mental, sistólica ≤100 mmHg. Ninguna de las dos diagnostica sepsis: el diagnóstico sigue siendo un aumento agudo ≥2 puntos en el SOFA con infección.' }
    ],
    compute(v) {
      if (v.temp === null || v.fc === null || v.fr === null || v.pas === null) return null;
      const leucoDato = v.leucos !== null && v.leucos !== undefined;
      const pacoDato = v.paco2 !== null && v.paco2 !== undefined;
      const crit = [
        ['temperatura', v.temp > 38 || v.temp < 36],
        ['frecuencia cardíaca', v.fc > 90],
        ['frecuencia respiratoria o PaCO₂', v.fr > 20 || (pacoDato && v.paco2 < 32)],
        ['leucocitos o bandas', (leucoDato && (v.leucos > 12 || v.leucos < 4)) || !!v.bandas]
      ];
      const sirs = crit.filter(c => c[1]).length;
      const qCrit = [
        ['frecuencia respiratoria ≥22', v.fr >= 22],
        ['alteración mental', !!v.mental],
        ['sistólica ≤100', v.pas <= 100]
      ];
      const q = qCrit.filter(c => c[1]).length;
      return {
        sirs, sirsPos: sirs >= 2, q, qPos: q >= 2,
        sirsItems: crit.filter(c => c[1]).map(c => c[0]),
        qItems: qCrit.filter(c => c[1]).map(c => c[0]),
        leucoFalta: !leucoDato && !v.bandas,
        discordante: (sirs >= 2) !== (q >= 2)
      };
    },
    format(r) {
      let s = `<strong>SIRS ${r.sirs} / 4${r.sirsPos ? ', positivo' : ''}. qSOFA ${r.q} / 3${r.qPos ? ', positivo' : ''}.</strong>`;
      if (r.sirsItems.length) s += `<br><span style="opacity:.8;">SIRS suma por: ${r.sirsItems.join(', ')}.</span>`;
      if (r.qItems.length) s += `<br><span style="opacity:.8;">qSOFA suma por: ${r.qItems.join(', ')}.</span>`;
      if (r.leucoFalta) s += '<br><span style="opacity:.75;">Sin leucocitos ni recuento de bandas, el SIRS se calcula sobre 3 criterios y puede quedar infravalorado.</span>';
      if (r.discordante) {
        s += '<br><strong style="color:#3d5a73;">Las dos escalas discrepan.</strong> La SSC 2026 recomienda de forma fuerte (certeza moderada) usar NEWS, NEWS2, MEWS o SIRS por encima del qSOFA como herramienta única de cribado, precisamente porque la sensibilidad del qSOFA es baja: en una cohorte prehospitalaria de 221.429 registros detectó el 23.1% de los casos frente al 73.1% del NEWS2. Ante la discrepancia, pesa más el positivo.';
      } else if (r.qPos) {
        s += '<br><strong style="color:#8c3a34;">qSOFA positivo</strong> en un paciente con infección se asocia a peor pronóstico. No sirve como cribado único, pero sí obliga a buscar disfunción orgánica y a tratar sin demora.';
      } else if (r.sirsPos) {
        s += '<br><span style="opacity:.85;">SIRS positivo es sensible y poco específico: se cumple en muchísimos cuadros no infecciosos. Sirve para abrir la puerta, no para cerrarla.</span>';
      }
      s += '<br><span style="opacity:.75;">Si la sospecha de sepsis es probable o definida, el antibiótico va en la primera hora aunque el cribado sea negativo. Una puntuación baja en un paciente que impresiona mal no descarta nada.</span>';
      return s;
    },
    fragment: r => `SIRS ${r.sirs}/4 ${r.sirsPos ? 'positivo' : 'negativo'}, qSOFA ${r.q}/3 ${r.qPos ? 'positivo' : 'negativo'}`
  },
  {
    key: 'sofa', title: 'SOFA (clásico, 1996)', accent: '#3d5a73',
    subtitle: 'Disfunción orgánica secuencial (0-24) · Vincent 1996',
    incompleteMsg: 'Selecciona cada sistema.',
    fields: [
      { name: 'resp', id: 'so-resp', ...sel('Respiratorio (PaO₂/FiO₂)', [
        { value: '0', label: '≥400 (0)' }, { value: '1', label: '<400 (1)' }, { value: '2', label: '<300 (2)' }, { value: '3', label: '<200 con soporte ventilatorio (3)' }, { value: '4', label: '<100 con soporte ventilatorio (4)' }]) },
      { name: 'coag', id: 'so-coag', ...sel('Coagulación (plaquetas ×10³/µL)', [
        { value: '0', label: '≥150 (0)' }, { value: '1', label: '<150 (1)' }, { value: '2', label: '<100 (2)' }, { value: '3', label: '<50 (3)' }, { value: '4', label: '<20 (4)' }]) },
      { name: 'higado', id: 'so-hig', ...sel('Hígado (bilirrubina mg/dL)', [
        { value: '0', label: '<1.2 (0)' }, { value: '1', label: '1.2-1.9 (1)' }, { value: '2', label: '2.0-5.9 (2)' }, { value: '3', label: '6.0-11.9 (3)' }, { value: '4', label: '≥12 (4)' }]) },
      { name: 'cardio', id: 'so-card', ...sel('Cardiovascular', [
        { value: '0', label: 'PAM ≥70 mmHg (0)' }, { value: '1', label: 'PAM <70 mmHg (1)' }, { value: '2', label: 'Dopamina ≤5 o dobutamina (2)' }, { value: '3', label: 'Dopamina >5 o noradrenalina ≤0.1 (3)' }, { value: '4', label: 'Dopamina >15 o noradrenalina >0.1 (4)' }]) },
      { name: 'snc', id: 'so-snc', ...sel('SNC (Glasgow)', [
        { value: '0', label: '15 (0)' }, { value: '1', label: '13-14 (1)' }, { value: '2', label: '10-12 (2)' }, { value: '3', label: '6-9 (3)' }, { value: '4', label: '<6 (4)' }]) },
      { name: 'renal', id: 'so-ren', ...sel('Renal (creatinina mg/dL)', [
        { value: '0', label: '<1.2 (0)' }, { value: '1', label: '1.2-1.9 (1)' }, { value: '2', label: '2.0-3.4 (2)' }, { value: '3', label: '3.5-4.9 (3)' }, { value: '4', label: '≥5.0 (4)' }]) }
    ],
    compute(v) {
      const s = v.resp + v.coag + v.higado + v.cardio + v.snc + v.renal;
      let mort;
      if (s <= 6) mort = '<10%'; else if (s <= 9) mort = '15-20%'; else if (s <= 12) mort = '40-50%'; else if (s <= 14) mort = '50-60%'; else mort = '>80%';
      return { s, mort };
    },
    format: r => `<strong>SOFA ${r.s} / 24</strong> puntos (mortalidad hospitalaria aproximada ${r.mort}). Un aumento agudo ≥2 respecto al basal define disfunción orgánica por sepsis.`,
    fragment: r => `SOFA ${r.s}/24`
  },
  {
    key: 'sofa2', title: 'SOFA-2 (2025)', accent: '#5c4a73',
    subtitle: 'Versión actualizada y validada (Ranzani et al., JAMA 2025) · 0-24',
    incompleteMsg: 'Selecciona cada sistema.',
    fields: [
      { name: 'brain', id: 's2-brain', ...sel('Cerebro (Glasgow)', [
        { value: '0', label: 'GCS 15 (0)' },
        { value: '1', label: 'GCS 13-14, o localiza al dolor, o requiere fármacos para delirium (1)' },
        { value: '2', label: 'GCS 9-12, o retirada al dolor (2)' },
        { value: '3', label: 'GCS 6-8, o flexión al dolor (3)' },
        { value: '4', label: 'GCS 3-5, o extensión/sin respuesta al dolor, o mioclono generalizado (4)' }
      ]) },
      { name: 'resp', id: 's2-resp', ...sel('Respiratorio (PaO₂/FiO₂)', [
        { value: '0', label: '>300 mmHg (0)' },
        { value: '1', label: '≤300 mmHg (1)' },
        { value: '2', label: '≤225 mmHg (2)' },
        { value: '3', label: '≤150 mmHg CON soporte ventilatorio avanzado* (3)' },
        { value: '4', label: '≤75 mmHg CON soporte ventilatorio avanzado*, o ECMO (4)' }
      ]) },
      { name: 'cardio', id: 's2-cardio', ...sel('Cardiovascular', [
        { value: '0', label: 'PAM ≥70 mmHg, sin vasopresor/inotrópico (0)' },
        { value: '1', label: 'PAM <70 mmHg, sin vasopresor/inotrópico (1)' },
        { value: '2', label: 'Vasopresor dosis baja (noradrenalina+adrenalina ≤0.2 mcg/kg/min), o cualquier dosis de otro vasopresor/inotrópico (2)' },
        { value: '3', label: 'Vasopresor dosis media (>0.2-0.4 mcg/kg/min), o dosis baja + otro vasopresor/inotrópico (3)' },
        { value: '4', label: 'Vasopresor dosis alta (>0.4 mcg/kg/min), o dosis media + otro vasopresor/inotrópico, o soporte mecánico (ECMO-VA, balón de contrapulsación, dispositivo de asistencia ventricular) (4)' }
      ]) },
      { name: 'liver', id: 's2-liver', type: 'number', step: '0.1', label: 'Hígado — bilirrubina total (mg/dL)', placeholder: 'ej. 2.5' },
      { name: 'kidney', id: 's2-kidney', ...sel('Riñón', [
        { value: '0', label: 'Creatinina ≤1.20 mg/dL (0)' },
        { value: '1', label: 'Creatinina ≤2.0 mg/dL, o diuresis <0.5 mL/kg/h por 6-12h (1)' },
        { value: '2', label: 'Creatinina ≤3.50 mg/dL, o diuresis <0.5 mL/kg/h por ≥12h (2)' },
        { value: '3', label: 'Creatinina >3.50 mg/dL, o diuresis <0.3 mL/kg/h por ≥24h, o anuria ≥12h (3)' },
        { value: '4', label: 'En terapia de reemplazo renal, o cumple criterios para iniciarla (4)' }
      ]) },
      { name: 'plt', id: 's2-plt', type: 'number', label: 'Hemostasia — plaquetas (×10³/µL)', placeholder: 'ej. 120' },
      { type: 'note', text: '*Soporte ventilatorio avanzado: cánula de alto flujo, CPAP, BiPAP, VNI, ventilación mecánica invasiva o domiciliaria. Sin este soporte, el puntaje respiratorio máximo es 2 (salvo que el soporte no esté disponible o esté limitado por un techo terapéutico). Fuente: Ranzani et al., JAMA 2025;334(23):2090-2103.' }
    ],
    compute(v) {
      if (v.liver === null || v.plt === null) return null;
      const liverPts = v.liver <= 1.20 ? 0 : v.liver <= 3.0 ? 1 : v.liver <= 6.0 ? 2 : v.liver <= 12.0 ? 3 : 4;
      const pltPts = v.plt > 150 ? 0 : v.plt > 100 ? 1 : v.plt > 80 ? 2 : v.plt > 50 ? 3 : 4;
      const s = v.brain + v.resp + v.cardio + liverPts + v.kidney + pltPts;
      return { s, liverPts, pltPts };
    },
    format: r => `<strong>SOFA-2 ${r.s} / 24</strong> puntos. Cada incremento de 1 punto se asocia a un aumento de la mortalidad en UCI (OR 1.38 por punto; Ranzani et al., JAMA 2025). No usar de forma intercambiable con el SOFA clásico: los puntos de corte y variables incluidas difieren, sobre todo en los sistemas respiratorio, cardiovascular y renal.`,
    fragment: r => `SOFA-2 ${r.s}/24`
  },
  {
    key: 'lactato', title: 'Aclaramiento de lactato', accent: '#3f6b52',
    subtitle: 'Respuesta a la reanimación',
    incompleteMsg: 'Ingresa el lactato inicial.',
    fields: [
      { name: 'inicial', id: 'la-ini', type: 'number', step: '0.1', label: 'Lactato inicial (mmol/L)', placeholder: 'ej. 4.2', row: 'a' },
      { name: 'control', id: 'la-ctrl', type: 'number', step: '0.1', required: false, label: 'Lactato de control (mmol/L, opcional)', placeholder: 'ej. 2.5', row: 'a' },
      { type: 'note', text: 'Meta: aclaramiento ≥10% o normalización. El lactato >2 mmol/L sugiere hipoperfusión; >4 mmol/L, gravedad marcada.' }
    ],
    compute(v) {
      const ini = v.inicial;
      if (v.control === null || v.control === undefined) {
        const sev = ini > 4 ? 'gravedad marcada' : ini > 2 ? 'hipoperfusión' : 'dentro de límites';
        return { ini, sev, clear: null };
      }
      const clear = Math.round(((ini - v.control) / ini) * 100);
      return { ini, control: v.control, clear };
    },
    format(r) {
      if (r.clear === null) return `Lactato inicial <strong>${r.ini} mmol/L</strong> — ${r.sev}. Repetir en 2-4 h para calcular el aclaramiento.`;
      const ok = r.clear >= 10;
      return `Aclaramiento de lactato <strong>${r.clear}%</strong> (de ${r.ini} a ${r.control} mmol/L) — ${ok ? 'adecuado (≥10%): buena respuesta a la reanimación' : 'insuficiente (<10%): reevaluar perfusión y reanimación'}.`;
    },
    fragment: r => r.clear === null ? `lactato ${r.ini} mmol/L` : `aclaramiento de lactato ${r.clear}%`
  }
];

export const combinedNote = {
  title: 'Nota combinada', accent: '#8c3a34',
  subtitle: 'Combina el cribado, SOFA/SOFA-2 y lactato en un párrafo',
  items: ['cribado', 'sofa', 'sofa2', 'lactato'],
  build(results, missing) {
    const parts = [];
    if (results.sofa || results.sofa2 || results.cribado) {
      const frags = [];
      if (results.sofa) frags.push(`SOFA ${results.sofa.s}/24 (mortalidad aproximada ${results.sofa.mort})`);
      if (results.sofa2) frags.push(`SOFA-2 ${results.sofa2.s}/24`);
      if (results.cribado) frags.push(`SIRS ${results.cribado.sirs}/4 ${results.cribado.sirsPos ? 'positivo' : 'negativo'}, qSOFA ${results.cribado.q}/3 ${results.cribado.qPos ? 'positivo' : 'negativo'}`);
      parts.push('Sepsis con disfunción orgánica: ' + frags.join(', ') + '.');
    }
    if (results.lactato) {
      parts.push(results.lactato.clear === null
        ? `Lactato inicial ${results.lactato.ini} mmol/L.`
        : `Aclaramiento de lactato ${results.lactato.clear}%.`);
    }
    let html = parts.join(' ');
    if (missing.length) html += `<div style="margin-top:10px;color:#b0453d;font-size:12.5px;">Faltan datos en: ${missing.join(', ')}.</div>`;
    return html || 'Completa las escalas seleccionadas.';
  }
};

export default { calculators, combinedNote };
