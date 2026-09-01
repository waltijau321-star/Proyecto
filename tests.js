// tests.js — smoke tests sin framework: corren en el navegador real, contra los módulos
// reales de la app (no mocks). Se abren en tests.html. No hay Node/Python en este entorno,
// así que en vez de Jest/Vitest esto es un runner mínimo casero.
//
// Cómo agregar una prueba nueva: llama a test('nombre descriptivo', () => { ...assert...(); }).
// Si la lógica que quieres probar vive en una función interna no exportada, expórtala (como se
// hizo con mergeValue en cloud-sync.js y checkPasswordRules en auth.js) — exportar una función
// pura para poder probarla no cambia su comportamiento en la app real.

const results = [];

function test(name, fn) {
  try {
    fn();
    results.push({ name, pass: true });
  } catch (e) {
    results.push({ name, pass: false, error: e.message });
  }
}

// JSON.stringify normal depende del orden de las llaves; para comparar objetos como valores
// (no como estructuras serializadas) hay que ordenarlas recursivamente antes de comparar.
function stableStringify(v) {
  if (Array.isArray(v)) return '[' + v.map(stableStringify).join(',') + ']';
  if (v && typeof v === 'object') {
    return '{' + Object.keys(v).sort().map(k => JSON.stringify(k) + ':' + stableStringify(v[k])).join(',') + '}';
  }
  return JSON.stringify(v);
}
function assertEqual(actual, expected, msg) {
  const a = stableStringify(actual), e = stableStringify(expected);
  if (a !== e) throw new Error(`${msg ? msg + ': ' : ''}esperado ${e}, obtuve ${a}`);
}
function assert(cond, msg) {
  if (!cond) throw new Error(msg || 'la condición es falsa');
}

async function run() {
  /* ---------------- Sincronización (engine/cloud-sync.js) ---------------- */
  const { syncGet, syncSet, mergeValue } = await import('./engine/cloud-sync.js');

  test('sync: round-trip de un valor escalar', () => {
    syncSet('rm:test-scalar', 'hola');
    assertEqual(syncGet('rm:test-scalar', ''), 'hola');
  });

  test('sync: round-trip de un objeto', () => {
    syncSet('rm:test-obj', { a: 1, b: 2 });
    assertEqual(syncGet('rm:test-obj', {}), { a: 1, b: 2 });
  });

  test('merge: quiz-progress toma el máximo de correctas e incorrectas por tema', () => {
    const local = { sepsis: { correct: 5, incorrect: 2 } };
    const cloud = { sepsis: { correct: 3, incorrect: 4 } };
    assertEqual(mergeValue('rm:quiz-progress', local, cloud), { sepsis: { correct: 5, incorrect: 4 } });
  });

  test('merge: fichas toma la caja más alta (empate: el next más reciente)', () => {
    const local = { 0: { box: 3, next: 1000 } };
    const cloud = { 0: { box: 4, next: 500 } };
    assertEqual(mergeValue('flashcard-progress:sepsis', local, cloud), { 0: { box: 4, next: 500 } });
  });

  test('merge: los fármacos marcados para la nota de VPO se unen entre dispositivos', () => {
    // Acumulativo, no "gana la nube": marcar en el celular y en la computadora debe sumar.
    assertEqual(mergeValue('rm:vpo:farmacos', { apixaban: true }, { isglt2: true }),
      { apixaban: true, isglt2: true });
  });

  test('merge: los estudios marcados para la nota de VPO se unen entre dispositivos', () => {
    assertEqual(mergeValue('rm:vpo:estudios', { ecg: true }, { biomarcadores: true }),
      { ecg: true, biomarcadores: true });
  });

  test('merge: la pestaña activa de VPO es escalar, no un mapa de banderas', () => {
    assertEqual(mergeValue('rm:vpo:tab', 'escalas', 'farmacos'), 'farmacos');
  });

  test('merge: las escalas calculadas de VPO son escalares (foto de un paciente, no un acumulado)', () => {
    const local = { leeindex: { titulo: 'Índice de Lee (RCRI)', frase: 'grupo III', ts: 1 } };
    const nube = { ariscat: { titulo: 'ARISCAT', frase: '40 puntos', ts: 2 } };
    assertEqual(mergeValue('rm:vpo:escalas', local, nube), nube);
  });

  test('merge: la ruta perioperatoria es escalar, no se unen dos caminos distintos', () => {
    // Unir dos recorridos daría ramas contradictorias: gana el último dispositivo, entero.
    const local = { camino: [{ paso: 'urgencia', label: 'Emergencia' }], veredicto: 'emergencia' };
    const nube = { camino: [{ paso: 'urgencia', label: 'Sensible al tiempo o electiva' }], veredicto: null };
    assertEqual(mergeValue('rm:vpo:ruta', local, nube), nube);
  });

  test('merge: temas repasados es un OR booleano entre dispositivos', () => {
    const local = { sepsis: true };
    const cloud = { 'cirrosis-hepatica': true };
    assertEqual(mergeValue('rm:topics-reviewed', local, cloud), { sepsis: true, 'cirrosis-hepatica': true });
  });

  test('merge: valor escalar prefiere la nube si no está vacía, si no conserva lo local', () => {
    assertEqual(mergeValue('rm:exam-date', '2026-01-01', '2026-02-01'), '2026-02-01');
    assertEqual(mergeValue('rm:exam-date', '2026-01-01', ''), '2026-01-01');
  });

  localStorage.removeItem('rm:test-scalar');
  localStorage.removeItem('rm:test-obj');

  /* ---------------- Repetición espaciada de preguntas (engine/quiz-srs.js) ---------------- */
  const { updateQuizSRS, dueQuestionIndices, loadQuizSRS, isQuizCompleted, remainingToComplete } = await import('./engine/quiz-srs.js');
  const T = 'rm-test-topic';

  test('quiz-srs: responder bien sube de caja y programa el próximo repaso a futuro', () => {
    syncSet('rm:quiz-srs:' + T, {});
    updateQuizSRS(T, 0, true);
    const entry = loadQuizSRS(T)[0];
    assertEqual(entry.box, 2);
    assert(entry.next > Date.now(), 'el próximo repaso debería quedar en el futuro');
  });

  test('quiz-srs: responder mal reinicia a caja 1 y queda vencida de inmediato', () => {
    syncSet('rm:quiz-srs:' + T, {});
    updateQuizSRS(T, 0, false);
    const entry = loadQuizSRS(T)[0];
    assertEqual(entry.box, 1);
    assert(entry.next <= Date.now(), 'debería estar vencida ahora mismo');
  });

  test('quiz-srs: una pregunta recién acertada no aparece entre las vencidas', () => {
    syncSet('rm:quiz-srs:' + T, {});
    updateQuizSRS(T, 2, true);
    const due = dueQuestionIndices(T, 5);
    assert(!due.includes(2), 'la pregunta 2 no debería estar vencida justo después de acertarla');
  });

  test('quiz-srs: una pregunta nunca respondida no cuenta como vencida (hay que responderla primero)', () => {
    syncSet('rm:quiz-srs:' + T, {});
    updateQuizSRS(T, 0, false);
    const due = dueQuestionIndices(T, 5);
    assertEqual(due.length, 1);
    assert(due.includes(0), 'la pregunta 0, fallada, sí debería estar vencida');
  });

  test('quiz-srs: isQuizCompleted exige que cada pregunta se haya respondido al menos una vez', () => {
    syncSet('rm:quiz-srs:' + T, {});
    assertEqual(isQuizCompleted(T, 3), false);
    assertEqual(remainingToComplete(T, 3), 3);
    updateQuizSRS(T, 0, true);
    updateQuizSRS(T, 1, false);
    assertEqual(isQuizCompleted(T, 3), false);
    assertEqual(remainingToComplete(T, 3), 1);
    updateQuizSRS(T, 2, true);
    assertEqual(isQuizCompleted(T, 3), true);
    assertEqual(remainingToComplete(T, 3), 0);
  });

  localStorage.removeItem('rm:quiz-srs:' + T);

  /* ---------------- Requisitos de contraseña (engine/auth.js) ---------------- */
  const { checkPasswordRules } = await import('./engine/auth.js');

  test('contraseña: una débil no cumple mayúscula ni número', () => {
    const r = checkPasswordRules('abc');
    assert(!r.upper && !r.number, 'abc no debería cumplir mayúscula ni número');
  });

  test('contraseña: una que cumple todo pasa las 4 reglas', () => {
    const r = checkPasswordRules('Abcdef12');
    assert(r.len && r.upper && r.lower && r.number, 'Abcdef12 debería cumplir los 4 requisitos');
  });

  /* ---------------- Calculadoras clínicas: Sepsis ---------------- */
  const sepsisCalc = (await import('./topics/sepsis/calculators.js')).calculators;
  const qsofa = sepsisCalc.find(c => c.key === 'qsofa');
  const sofa2 = sepsisCalc.find(c => c.key === 'sofa2');

  test('qSOFA: 2 de 3 criterios da alerta positiva', () => {
    assertEqual(qsofa.compute({ fr: true, mental: true, pas: false }), { s: 2, alerta: true });
  });

  test('qSOFA: 0 criterios da alerta negativa', () => {
    assertEqual(qsofa.compute({ fr: false, mental: false, pas: false }), { s: 0, alerta: false });
  });

  test('SOFA-2: todos los sistemas en 0 da puntaje 0', () => {
    assertEqual(sofa2.compute({ brain: 0, resp: 0, cardio: 0, kidney: 0, liver: 0.8, plt: 200 }), { s: 0, liverPts: 0, pltPts: 0 });
  });

  test('SOFA-2: bilirrubina y plaquetas alteradas suman los puntos correctos', () => {
    const r = sofa2.compute({ brain: 1, resp: 1, cardio: 1, kidney: 1, liver: 7.0, plt: 60 });
    assertEqual(r.liverPts, 3);
    assertEqual(r.pltPts, 3);
    assertEqual(r.s, 1 + 1 + 1 + 1 + 3 + 3);
  });

  test('SOFA-2: sin bilirrubina ni plaquetas no calcula (retorna null)', () => {
    assertEqual(sofa2.compute({ brain: 0, resp: 0, cardio: 0, kidney: 0, liver: null, plt: null }), null);
  });

  /* ---------------- Calculadoras clínicas: Cirrosis ---------------- */
  const cirrosisCalc = (await import('./topics/cirrosis-hepatica/calculators.js')).calculators;
  const childPugh = cirrosisCalc.find(c => c.key === 'childpugh');

  test('Child-Pugh: el mínimo (5 puntos) clasifica como A', () => {
    const r = childPugh.compute({ bili: 1, alb: 1, inr: 1, asc: 1, he: 1 });
    assertEqual(r.sum, 5);
    assertEqual(r.cls, 'A');
  });

  test('Child-Pugh: el máximo (15 puntos) clasifica como C', () => {
    const r = childPugh.compute({ bili: 3, alb: 3, inr: 3, asc: 3, he: 3 });
    assertEqual(r.sum, 15);
    assertEqual(r.cls, 'C');
  });

  /* ---------------- Calculadoras clínicas: VPO (protocols/vpo-calc.js) ----------------
     Son las de fórmula más compleja del proyecto (dos regresiones logísticas). Los coeficientes
     están verificados contra la Tabla de Gupta PK, et al. Circulation 2011;124(4):381-387, y los
     porcentajes fijados aquí son los que produce esa fórmula para el caso descrito: si alguien
     toca un coeficiente por accidente, estas pruebas lo atrapan. */
  const vpoModule = await import('./protocols/vpo-calc.js');
  const vpoCalc = vpoModule.calculators;
  const vpo = k => vpoCalc.find(c => c.key === k);

  test('VPO ASA: la clase y el sufijo de emergencia se propagan al resultado', () => {
    assertEqual(vpo('asa').compute({ clase: 'III', emergencia: true }), { clase: 'III', e: true });
  });

  test('VPO Gupta-MICA: varón de 65 años, ASA III, independiente, creatinina normal, hernia', () => {
    // 'hernia' es la categoría de referencia del modelo (coeficiente 0).
    const r = vpo('guptamica').compute({ age: 65, asa: '3', func: 'independent', creat: false, surg: 'hernia' });
    assert(Math.abs(r.pct - 0.2815) < 0.001, `esperaba ≈0.2815%, obtuve ${r.pct}`);
  });

  test('VPO Gupta-MICA: el riesgo sube al empeorar todos los predictores', () => {
    const r = vpo('guptamica').compute({ age: 80, asa: '4', func: 'total', creat: true, surg: 'aortic' });
    assert(Math.abs(r.pct - 20.424) < 0.01, `esperaba ≈20.42%, obtuve ${r.pct}`);
  });

  test('VPO Gupta-MICA: sin edad no calcula (retorna null)', () => {
    assertEqual(vpo('guptamica').compute({ age: null, asa: '3', func: 'independent', creat: false, surg: 'hernia' }), null);
  });

  test('VPO Gupta (falla respiratoria): 65 años, ASA III, independiente, sin sepsis, electiva, hernia', () => {
    const r = vpo('guptaprf').compute({ age: 65, asa: '3', func: 'independent', sepsis: 'none', electiva: true, surg: 'hernia' });
    assert(Math.abs(r.pct - 2.3714) < 0.001, `esperaba ≈2.3714%, obtuve ${r.pct}`);
  });

  test('VPO Gupta (falla respiratoria): sin edad no calcula (retorna null)', () => {
    assertEqual(vpo('guptaprf').compute({ age: null, asa: '3', func: 'independent', sepsis: 'none', electiva: true, surg: 'hernia' }), null);
  });

  test('VPO Lee (RCRI): sin factores de riesgo es clase I con 0.4%', () => {
    assertEqual(vpo('leeindex').compute({}), { n: 0, cls: 'I', risk: '0.4%' });
  });

  test('VPO Lee (RCRI): 3 factores ya son clase IV', () => {
    assertEqual(vpo('leeindex').compute({ rf1: true, rf2: true, rf3: true }), { n: 3, cls: 'IV', risk: '11%' });
  });

  test('VPO Lee (RCRI): con más de 3 factores la clase se mantiene en IV, pero n sigue contando', () => {
    const r = vpo('leeindex').compute({ rf1: true, rf2: true, rf3: true, rf4: true, rf5: true, rf6: true });
    assertEqual(r.n, 6);
    assertEqual(r.cls, 'IV');
    assertEqual(r.risk, '11%');
  });

  test('VPO Detsky: sin factores son 0 puntos, clase I', () => {
    const r = vpo('detsky').compute({ mi: '0', angina: '0', edema: '0' });
    assertEqual(r.score, 0);
    assertEqual(r.cls, 'I');
  });

  test('VPO Detsky: IAM reciente + angina clase IV + emergencia suman 40 puntos, clase III', () => {
    const r = vpo('detsky').compute({ mi: '10', angina: '20', edema: '0', emergency: true });
    assertEqual(r.score, 40);
    assertEqual(r.cls, 'III');
  });

  test('VPO Caprini: sin factores son 0 puntos y la categoría más baja', () => {
    const r = vpo('caprini').compute({ age: '0', surgery: '0', mobility: '0' });
    assertEqual(r.total, 0);
    assertEqual(r.cat, 'el más bajo');
  });

  test('VPO Caprini: ≥75 años + artroplastia + ACV + neoplasia suman 15 puntos (categoría más alta)', () => {
    const r = vpo('caprini').compute({ age: '3', surgery: '5', mobility: '0', acv: true, malignancy: true });
    assertEqual(r.total, 3 + 5 + 5 + 2);
    assertEqual(r.cat, 'el más alto');
    assert(/30 días/.test(r.rec), 'a partir de 9 puntos la profilaxis recomendada es de 30 días');
  });

  test('VPO: la nota combinada declara las 6 escalas de riesgo y las trae expandidas por defecto', () => {
    assertEqual(vpoModule.combinedNote.items, ['asa', 'guptaprf', 'guptamica', 'detsky', 'leeindex', 'caprini']);
    assertEqual(vpoModule.combinedNote.defaultChecked, true);
    // El puente de anticoagulación es una herramienta aparte y a propósito no entra en la nota
    // combinada: no se calcula para todo paciente preoperatorio, solo para el anticoagulado.
    const keys = vpoCalc.map(c => c.key);
    vpoModule.combinedNote.items.forEach(k => assert(keys.includes(k), `la nota combinada referencia '${k}', que no existe entre las calculadoras`));
  });

  test('VPO puente: warfarina se suspende 5 días y acenocumarol 3, sin puente', () => {
    const w = vpo('puenteac').compute({ farmaco: 'warfarina', sangrado: 'bajo', tfg: null, indicacion: 'fa' });
    assertEqual(w.dias, 5);
    assertEqual(w.puente, false);
    assertEqual(vpo('puenteac').compute({ farmaco: 'acenocumarol', sangrado: 'alto', tfg: null, indicacion: 'fa' }).dias, 3);
  });

  test('VPO puente: apixabán, rivaroxabán y edoxabán son 1 día si el sangrado es bajo y 2 si es alto', () => {
    ['apixaban', 'rivaroxaban', 'edoxaban'].forEach(f => {
      assertEqual(vpo('puenteac').compute({ farmaco: f, sangrado: 'bajo', tfg: 90, indicacion: 'fa' }).dias, 1, f);
      assertEqual(vpo('puenteac').compute({ farmaco: f, sangrado: 'alto', tfg: 90, indicacion: 'fa' }).dias, 2, f);
    });
  });

  test('VPO puente: dabigatrán sigue la tabla 1/2/2/4 según riesgo hemorrágico y TFG', () => {
    const d = (sangrado, tfg) => vpo('puenteac').compute({ farmaco: 'dabigatran', sangrado, tfg, indicacion: 'fa' }).dias;
    assertEqual(d('bajo', 60), 1, 'bajo-moderado con TFG ≥50');
    assertEqual(d('bajo', 40), 2, 'bajo-moderado con TFG <50');
    assertEqual(d('alto', 60), 2, 'alto con TFG ≥50');
    assertEqual(d('alto', 40), 4, 'alto con TFG <50');
  });

  test('VPO puente: dabigatrán sin aclaramiento no calcula (retorna null)', () => {
    assertEqual(vpo('puenteac').compute({ farmaco: 'dabigatran', sangrado: 'alto', tfg: null, indicacion: 'fa' }), null);
    // Los demás DOAC sí resuelven sin TFG, porque su intervalo no depende de la función renal.
    assert(vpo('puenteac').compute({ farmaco: 'apixaban', sangrado: 'alto', tfg: null, indicacion: 'fa' }) !== null);
  });

  test('VPO puente: con marcapasos o desfibrilador el antagonista de vitamina K no se interrumpe', () => {
    const r = vpo('puenteac').compute({ farmaco: 'warfarina', sangrado: 'bajo', tfg: null, indicacion: 'dispositivo' });
    assertEqual(r.continuar, true);
    assertEqual(r.dias, null);
    // Un DOAC en el mismo escenario sí se interrumpe: la recomendación de continuar es de los AVK.
    assertEqual(vpo('puenteac').compute({ farmaco: 'apixaban', sangrado: 'bajo', tfg: 90, indicacion: 'dispositivo' }).continuar, false);
  });

  test('VPO puente: ninguna combinación recomienda puente con heparina', () => {
    ['warfarina', 'acenocumarol', 'apixaban', 'rivaroxaban', 'edoxaban', 'dabigatran'].forEach(f => {
      ['bajo', 'alto'].forEach(s => {
        Object.keys({ fa: 1, valvula: 1, etv: 1, dispositivo: 1, colonoscopia: 1 }).forEach(i => {
          const r = vpo('puenteac').compute({ farmaco: f, sangrado: s, tfg: 60, indicacion: i });
          assertEqual(r.puente, false, `${f}/${s}/${i}`);
        });
      });
    });
  });

  test('VPO DASI: marcar las 12 actividades da 58.2 puntos y cerca de 9.9 MET', () => {
    const todo = {};
    ['cuidarse','caminarCasa','caminarCuadra','escaleras','correr','trabajoLigero','trabajoModerado',
     'trabajoPesado','jardin','sexuales','recreativoModerado','deporteIntenso'].forEach(k => { todo[k] = true; });
    const r = vpo('dasi').compute(todo);
    assertEqual(r.total, 58.2);
    assert(Math.abs(r.mets - 9.89) < 0.01, `esperaba ≈9.89 MET, obtuve ${r.mets}`);
    assertEqual(r.buena, true);
  });

  test('VPO DASI: sin ninguna actividad quedan 0 puntos y el piso de 2.74 MET de la fórmula', () => {
    const r = vpo('dasi').compute({});
    assertEqual(r.total, 0);
    // VO2 = 0.43×0 + 9.6 = 9.6; 9.6/3.5 = 2.74 MET. La fórmula tiene un piso, no llega a cero.
    assert(Math.abs(r.mets - 2.74) < 0.01, `esperaba ≈2.74 MET, obtuve ${r.mets}`);
    assertEqual(r.buena, false);
  });

  test('VPO DASI: informa los dos umbrales de la guía, que no coinciden entre sí', () => {
    // La guía define mala capacidad funcional como menos de 4 MET O un DASI de 34 o menos.
    // Por la fórmula, 4 MET equivalen a un DASI de apenas 10.2, así que entre 11 y 34 los dos
    // criterios discrepan. Elegir uno en silencio daría por buena una capacidad que la guía
    // considera mala, así que la calculadora lo dice.
    const bajo = vpo('dasi').compute({ escaleras: true, caminarCuadra: true }); // DASI 8.25
    assertEqual(bajo.buenaMet, false);
    assertEqual(bajo.buenaDasi, false);
    assertEqual(bajo.discrepan, false);
    assertEqual(bajo.buena, false);

    const medio = vpo('dasi').compute({ escaleras: true, correr: true }); // DASI 13.5
    assertEqual(medio.buenaMet, true, 'supera 4 MET por la fórmula');
    assertEqual(medio.buenaDasi, false, 'pero no supera el DASI de 34');
    assertEqual(medio.discrepan, true);
    assertEqual(medio.buena, false, 'con criterios discrepantes no se declara conservada');
    assert(/zona intermedia/.test(vpo('dasi').format(medio)), 'debe avisar de la discrepancia');

    const alto = vpo('dasi').compute({ escaleras: true, correr: true, trabajoPesado: true, jardin: true, sexuales: true, recreativoModerado: true, deporteIntenso: true }); // DASI 44.75
    assertEqual(alto.buenaMet, true);
    assertEqual(alto.buenaDasi, true);
    assertEqual(alto.buena, true);
  });

  test('VPO ARISCAT: los tres estratos caen donde marca la cohorte de validación', () => {
    const r = (edad, extra) => vpo('ariscat').compute(Object.assign({ edad, spo2: 0, incision: 0, duracion: 0 }, extra || {}));
    assertEqual(r(45), { total: 0, cat: 'bajo', riesgo: '1.6%', ptsEdad: 0 });
    // 3 (edad 51-80) + 8 (SpO2 91-95) + 15 (abdominal alta) = 26, justo en el corte intermedio.
    const inter = r(65, { spo2: 8, incision: 15 });
    assertEqual(inter.total, 26);
    assertEqual(inter.cat, 'intermedio');
    const alto = r(85, { spo2: 24, infeccion: true, anemia: true, incision: 24, duracion: 23, emergencia: true });
    assertEqual(alto.total, 16 + 24 + 17 + 11 + 24 + 23 + 8);
    assertEqual(alto.cat, 'alto');
  });

  test('VPO ARISCAT: sin edad no calcula (retorna null)', () => {
    assertEqual(vpo('ariscat').compute({ edad: null, spo2: 0, incision: 0, duracion: 0 }), null);
  });

  test('VPO STOP-BANG: los ocho ítems valen 1 y los cortes son 2 y 4', () => {
    assertEqual(vpo('stopbang').compute({}), { total: 0, cat: 'bajo' });
    assertEqual(vpo('stopbang').compute({ s: 1, t: 1 }).cat, 'bajo');
    assertEqual(vpo('stopbang').compute({ s: 1, t: 1, o: 1 }).cat, 'intermedio');
    assertEqual(vpo('stopbang').compute({ s: 1, t: 1, o: 1, p: 1, b: 1 }).cat, 'alto');
    assertEqual(vpo('stopbang').compute({ s: 1, t: 1, o: 1, p: 1, b: 1, a: 1, n: 1, g: 1 }).total, 8);
  });

  test('VPO Apfel: los cinco riesgos son los publicados (10, 21, 39, 61 y 79%)', () => {
    const esperado = ['10%', '21%', '39%', '61%', '79%'];
    const claves = ['mujer', 'noFumador', 'antecedente', 'opioides'];
    esperado.forEach((riesgo, n) => {
      const v = {};
      claves.slice(0, n).forEach(k => { v[k] = true; });
      assertEqual(vpo('apfel').compute(v), { total: n, riesgo });
    });
  });

  test('VPO Charlson: el ajuste por edad suma 1 punto por década desde los 50', () => {
    const p = edad => vpo('charlson').compute({ edad }).ptsEdad;
    assertEqual(p(40), 0);
    assertEqual(p(49), 0);
    assertEqual(p(50), 1);
    assertEqual(p(65), 2);
    assertEqual(p(75), 3);
    assertEqual(p(85), 4);
    assertEqual(p(99), 4, 'el ajuste por edad se topa en 4');
  });

  test('VPO Charlson: las comorbilidades pesan 1, 2, 3 y 6 según su categoría', () => {
    const c = extra => vpo('charlson').compute(Object.assign({ edad: 40 }, extra)).total;
    assertEqual(c({}), 0);
    assertEqual(c({ iam: true }), 1);
    assertEqual(c({ renal: true }), 2);
    assertEqual(c({ hepatoGrave: true }), 3);
    assertEqual(c({ metastasico: true }), 6);
    assertEqual(c({ sida: true }), 6);
    assertEqual(c({ iam: true, renal: true, hepatoGrave: true, metastasico: true }), 1 + 2 + 3 + 6);
  });

  test('VPO Charlson: un puntaje alto no informa "0%" de supervivencia', () => {
    // La exponencial de la fórmula subdesborda con puntajes altos; mostrar un 0% literal diría
    // más de lo que el índice puede sostener.
    const r = vpo('charlson').compute({ edad: 85, iam: true, icc: true, metastasico: true });
    assert(r.total >= 12, 'el caso de prueba debe dar un puntaje alto');
    const texto = vpo('charlson').format(r);
    assert(/menos de 1%/.test(texto), `esperaba "menos de 1%", obtuve: ${texto.slice(0, 120)}`);
    assert(!/ 0%/.test(texto), 'no debe mostrar 0% literal');
  });

  test('VPO Charlson: sin edad no calcula (retorna null)', () => {
    assertEqual(vpo('charlson').compute({ edad: null }), null);
  });

  test('VPO fragilidad: los 9 grados existen y el corte de riesgo está en 5', () => {
    for (let i = 1; i <= 9; i++) {
      const r = vpo('fragilidad').compute({ grado: String(i) });
      assert(r && r.label, `falta el grado ${i}`);
    }
    assertEqual(vpo('fragilidad').compute({ grado: '4' }).riesgo, 'intermedio');
    assertEqual(vpo('fragilidad').compute({ grado: '6' }).riesgo, 'alto');
    assertEqual(vpo('fragilidad').compute({ grado: '99' }), null, 'un grado fuera de rango no calcula');
  });

  test('VPO delirium: separa predisponentes de precipitantes y sube a alto con 3 predisponentes', () => {
    assertEqual(vpo('delirium').compute({}), { pre: 0, precip: 0, total: 0, cat: 'bajo' });
    // 3 predisponentes bastan para riesgo alto aunque no haya precipitantes: cuanta más carga
    // basal, menor el estímulo que hace falta para desencadenarlo.
    const soloPre = vpo('delirium').compute({ edad70: 1, cognitivo: 1, fragil: 1 });
    assertEqual(soloPre, { pre: 3, precip: 0, total: 3, cat: 'alto' });
    // La misma cuenta repartida entre las dos listas no llega a alto.
    assertEqual(vpo('delirium').compute({ edad70: 1, mayor: 1, dolor: 1 }).cat, 'intermedio');
  });

  test('VPO: todas las escalas comparten el contrato del motor de calculadoras', () => {
    vpoCalc.forEach(c => {
      ['key', 'title', 'accent', 'subtitle'].forEach(k => assert(c[k], `'${c.key || '(sin key)'}' no tiene '${k}'`));
      assert(typeof c.compute === 'function', `'${c.key}' no tiene compute`);
      assert(typeof c.format === 'function', `'${c.key}' no tiene format`);
      assert(Array.isArray(c.fields) && c.fields.length, `'${c.key}' no tiene campos`);
      c.fields.forEach(f => {
        if (f.type === 'note') { assert(f.text, `'${c.key}' tiene una nota vacía`); return; }
        assert(f.name && f.id && f.label, `'${c.key}' tiene un campo incompleto`);
      });
    });
  });

  test('VPO: no hay key ni id de campo repetidos entre escalas', () => {
    const keys = vpoCalc.map(c => c.key);
    assertEqual(keys.length, new Set(keys).size, 'hay keys de calculadora duplicadas');
    // Los id son atributos del DOM: repetirlos entre escalas rompería el autocompletado de
    // campos compartidos, que busca por id.
    const ids = vpoCalc.flatMap(c => c.fields.filter(f => f.id).map(f => f.id));
    const repetidos = ids.filter((v, i) => ids.indexOf(v) !== i);
    assertEqual(repetidos, [], 'hay id de campo duplicados');
  });

  /* ---------------- Manejo perioperatorio de fármacos (protocols/vpo-farmacos.js) ---------------- */
  const vpoFarm = await import('./protocols/vpo-farmacos.js');
  const temaVpo = await (await import('./topics/registry.js')).loadTopic('valoracion-preoperatoria');

  test('VPO fármacos: cada entrada tiene los campos obligatorios del contrato', () => {
    vpoFarm.farmacos.forEach(f => {
      ['id', 'grupo', 'farmaco', 'conducta', 'resumen', 'preop', 'postop', 'fuente'].forEach(k => {
        assert(f[k] && String(f[k]).trim(), `'${f.id || '(sin id)'}' no tiene '${k}'`);
      });
    });
  });

  test('VPO fármacos: los id no se repiten', () => {
    const ids = vpoFarm.farmacos.map(f => f.id);
    assertEqual(ids.length, new Set(ids).size, 'hay id duplicados');
  });

  test('VPO fármacos: cada grupo declarado existe y cada grupo tiene al menos un fármaco', () => {
    const gruposValidos = vpoFarm.grupos.map(g => g.id);
    vpoFarm.farmacos.forEach(f => assert(gruposValidos.includes(f.grupo), `'${f.id}' apunta al grupo inexistente '${f.grupo}'`));
    gruposValidos.forEach(g => assert(vpoFarm.farmacos.some(f => f.grupo === g), `el grupo '${g}' quedó vacío`));
  });

  test('VPO fármacos: cada conducta es una de las declaradas en CONDUCTAS', () => {
    vpoFarm.farmacos.forEach(f => {
      assert(vpoFarm.CONDUCTAS[f.conducta], `'${f.id}' tiene la conducta desconocida '${f.conducta}'`);
    });
  });

  test('VPO fármacos: los datos clave de las guías 2022-2024 están en su entrada', () => {
    const get = id => vpoFarm.farmacos.find(f => f.id === id);
    assert(/3 a 4/.test(get('isglt2').preop), 'iSGLT2 debe suspenderse 3 a 4 días antes');
    assert(/semana/.test(get('arglp1').preop), 'arGLP-1 semanal se suspende una semana antes');
    assertEqual(get('metformina').conducta, 'continuar');
    assertEqual(get('betabloqueadores').conducta, 'continuar');
    assertEqual(get('estatinas').conducta, 'continuar');
    assert(/12 meses/.test(get('tiempos-icp').preop), 'stent farmacoactivo por SCA: diferir ≥12 meses');
    assert(/2 horas/.test(get('ayuno').preop) && /8 horas/.test(get('ayuno').preop), 'ayuno: 2 h líquidos claros, 8 h comida grasa');
  });

  test('VPO fármacos: cada entrada declara si su respaldo es guía o consenso', () => {
    // Decir "práctica estándar" no es citar una fuente. O hay una recomendación formal que se
    // nombra, o se declara que es consenso, para que el lector sepa cuánto peso darle.
    vpoFarm.farmacos.forEach(f => {
      assert(f.evidencia === 'guia' || f.evidencia === 'consenso', `'${f.id}' tiene evidencia '${f.evidencia}'`);
      assert(!/pr[áa]ctica .* est[áa]ndar/i.test(f.fuente), `'${f.id}' sigue citando una "práctica estándar" en vez de una fuente`);
      if (f.evidencia === 'guia') {
        // Año, o bien la marca explícita de documento vivo (las revisiones Cochrane se
        // actualizan y fijarles un año sería inventarlo). Lo que no vale es una fuente vaga.
        assert(/\d{4}/.test(f.fuente) || /revision viva|revisión viva/i.test(f.fuente),
          `'${f.id}' dice ser recomendación de guía pero su fuente no lleva año ni se declara documento vivo`);
      } else {
        assert(/[Cc]onsenso/.test(f.fuente), `'${f.id}' es consenso pero su fuente no lo dice`);
      }
    });
  });

  test('VPO: la herramienta y el tema no se contradicen en los datos que repiten', () => {
    // Los mismos números viven como prosa en protocols/ y en topics/. Si la guía cambia un
    // umbral y solo se actualiza un lado, el residente lee dos cosas distintas.
    const texto = JSON.stringify(vpoFarm.farmacos) + JSON.stringify(temaVpo.content) + JSON.stringify(temaVpo.study.quiz);
    const enTema = JSON.stringify(temaVpo.content) + JSON.stringify(temaVpo.study.quiz);
    const enHerramienta = JSON.stringify(vpoFarm.farmacos);
    [
      ['3 a 4 días', 'suspensión de los inhibidores de SGLT2'],
      ['12 meses', 'espera tras stent farmacoactivo por síndrome coronario agudo'],
      ['5 días', 'suspensión de warfarina y de clopidogrel']
    ].forEach(([dato, que]) => {
      assert(enHerramienta.includes(dato), `la herramienta ya no dice "${dato}" para ${que}`);
      assert(enTema.includes(dato), `el tema ya no dice "${dato}" para ${que}: quedó desincronizado`);
    });
    assert(texto.length > 0);
  });

  // Las escalas que VPO enlaza de otros temas se resuelven aquí, fuera del test: el runner es
  // síncrono y una promesa rechazada dentro de un test() pasaría inadvertida.
  const enlacesVpo = [['cirrosis-hepatica', 'childpugh'], ['cirrosis-hepatica', 'meldna']];
  const registroVpo = await import('./topics/registry.js');
  const temasEnlazados = {};
  for (const [topicId] of enlacesVpo) {
    if (!temasEnlazados[topicId]) temasEnlazados[topicId] = await registroVpo.loadTopic(topicId);
  }
  // Todos los temas menos el propio VPO, para comprobar que no hay keys compartidas.
  const temasParaColision = {};
  for (const t of registroVpo.registry) {
    if (t.id === 'valoracion-preoperatoria') continue;
    const topic = await registroVpo.loadTopic(t.id);
    if (topic) temasParaColision[t.id] = topic;
  }

  test('VPO: ninguna key de VPO colisiona con la de otro tema', () => {
    // La nota de VPO decide qué resultado le pertenece comparando solo la key. Si un tema
    // usara una key genérica como 'charlson' o 'apfel', calcularla desde la sección Calc
    // metería su resultado en la nota de un paciente que nada tiene que ver.
    const vpoKeys = new Set(vpoCalc.map(c => c.key));
    Object.entries(temasParaColision).forEach(([id, topic]) => {
      (topic.calculators || []).forEach(c => {
        assert(!vpoKeys.has(c.key), `el tema '${id}' usa la key '${c.key}', que ya es de VPO`);
      });
    });
  });

  test('VPO: las escalas que VPO enlaza de otros temas siguen existiendo ahí', () => {
    // Se enlazan en vez de duplicarse. Si alguien renombra la key en el tema de origen, el
    // enlace queda muerto y no falla en voz alta: simplemente no abre nada.
    enlacesVpo.forEach(([topicId, key]) => {
      const topic = temasEnlazados[topicId];
      assert(topic, `el tema '${topicId}' no carga`);
      assert((topic.calculators || []).some(c => c.key === key),
        `'${topicId}' ya no tiene la calculadora '${key}' que VPO enlaza`);
    });
  });

  const vpoEngine = await import('./engine/vpo.js');

  test('VPO nota: el orden de la nota incluye todas las escalas, ninguna se queda fuera', () => {
    // Si se añade una escala a vpo-calc.js y se olvida ORDEN_NOTA, esa escala se calcularía
    // pero jamás aparecería en la nota, y el fallo sería invisible.
    const keys = vpoCalc.map(c => c.key);
    keys.forEach(k => assert(vpoEngine.ORDEN_NOTA.includes(k), `la escala '${k}' no está en ORDEN_NOTA: no saldría en la nota`));
    vpoEngine.ORDEN_NOTA.forEach(k => assert(keys.includes(k), `ORDEN_NOTA cita '${k}', que ya no existe`));
    assertEqual(vpoEngine.ORDEN_NOTA.length, new Set(vpoEngine.ORDEN_NOTA).size, 'ORDEN_NOTA tiene claves repetidas');
  });

  /* ---------------- Estudios preoperatorios (protocols/vpo-estudios.js) ---------------- */
  const vpoEst = await import('./protocols/vpo-estudios.js');

  test('VPO estudios: cada entrada tiene los campos obligatorios del contrato', () => {
    vpoEst.estudios.forEach(e => {
      ['id', 'grupo', 'estudio', 'resumen', 'noIndicado', 'fuente'].forEach(k => {
        assert(e[k] && String(e[k]).trim(), `'${e.id || '(sin id)'}' no tiene '${k}'`);
      });
      assert(Array.isArray(e.indicaciones) && e.indicaciones.length, `'${e.id}' no declara indicaciones`);
      // El resumen es lo único que se lee sin abrir el detalle: si es tan largo como el
      // "cuándo no", la lista deja de ser escaneable y vuelve al problema que resolvía.
      assert(e.resumen.length <= 70, `el resumen de '${e.id}' es demasiado largo para la lista (${e.resumen.length})`);
    });
  });

  test('VPO estudios: los id no se repiten y cada grupo existe y tiene contenido', () => {
    const ids = vpoEst.estudios.map(e => e.id);
    assertEqual(ids.length, new Set(ids).size, 'hay id duplicados');
    const grupos = vpoEst.gruposEstudio.map(g => g.id);
    vpoEst.estudios.forEach(e => assert(grupos.includes(e.grupo), `'${e.id}' apunta al grupo inexistente '${e.grupo}'`));
    grupos.forEach(g => assert(vpoEst.estudios.some(e => e.grupo === g), `el grupo '${g}' quedó vacío`));
  });

  test('VPO estudios: ninguno se declara como estudio de rutina', () => {
    // Es la tesis del módulo: no hay estudio preoperatorio que se pida a todo paciente sin más.
    vpoEst.estudios.forEach(e => assertEqual(e.rutina, false, `'${e.id}' se declara de rutina`));
  });

  test('VPO estudios: los "no de rutina" clave de la guía están donde corresponde', () => {
    const get = id => vpoEst.estudios.find(e => e.id === id);
    assert(/bajo riesgo/i.test(get('ecg').noIndicado), 'ECG: no indicado en procedimiento de bajo riesgo');
    assert(/estable/i.test(get('ecocardiograma').noIndicado), 'ecocardiograma: no indicado en paciente estable');
    assert(/capacidad funcional adecuada/i.test(get('estres').noIndicado), 'prueba de estrés: no indicada con capacidad funcional adecuada');
    assert(/sin antecedente hemorr/i.test(get('coagulacion').noIndicado), 'coagulación: no indicada como cribado sin antecedente');
  });

  /* ---------------- Ruta perioperatoria (protocols/vpo-ruta.js) ----------------
     El algoritmo es un grafo declarativo: un destino mal escrito no rompe nada al cargar, solo
     deja al usuario en una pantalla en blanco a mitad de la ruta. Estas pruebas recorren el grafo
     completo para que eso no llegue a producción. */
  const ruta = await import('./protocols/vpo-ruta.js');

  test('VPO ruta: el primer paso existe y cada paso declara al menos dos opciones', () => {
    assert(ruta.pasos[ruta.PRIMER_PASO], `PRIMER_PASO '${ruta.PRIMER_PASO}' no existe`);
    Object.values(ruta.pasos).forEach(p => {
      assert(p.pregunta && p.titulo, `el paso '${p.id}' no tiene título o pregunta`);
      assert(p.opciones && p.opciones.length >= 2, `el paso '${p.id}' tiene menos de 2 opciones`);
    });
  });

  test('VPO ruta: cada id de paso coincide con su clave en el mapa', () => {
    Object.keys(ruta.pasos).forEach(k => assertEqual(ruta.pasos[k].id, k, `la clave '${k}' no coincide con su id`));
  });

  test('VPO ruta: todo destino apunta a un paso o a un veredicto que existe', () => {
    Object.values(ruta.pasos).forEach(p => {
      p.opciones.forEach(o => {
        const d = o.destino || {};
        assert(d.paso || d.veredicto, `'${p.id}' → "${o.label}" no declara destino`);
        assert(!(d.paso && d.veredicto), `'${p.id}' → "${o.label}" declara paso y veredicto a la vez`);
        if (d.paso) assert(ruta.pasos[d.paso], `'${p.id}' → "${o.label}" apunta al paso inexistente '${d.paso}'`);
        if (d.veredicto) assert(ruta.veredictos[d.veredicto], `'${p.id}' → "${o.label}" apunta al veredicto inexistente '${d.veredicto}'`);
      });
    });
  });

  test('VPO ruta: todos los pasos y veredictos son alcanzables desde el primer paso', () => {
    const vistosPaso = new Set([ruta.PRIMER_PASO]);
    const vistosVeredicto = new Set();
    const cola = [ruta.PRIMER_PASO];
    while (cola.length) {
      const p = ruta.pasos[cola.shift()];
      p.opciones.forEach(o => {
        const d = o.destino || {};
        if (d.veredicto) vistosVeredicto.add(d.veredicto);
        if (d.paso && !vistosPaso.has(d.paso)) { vistosPaso.add(d.paso); cola.push(d.paso); }
      });
    }
    Object.keys(ruta.pasos).forEach(k => assert(vistosPaso.has(k), `el paso '${k}' quedó huérfano: no se llega a él`));
    Object.keys(ruta.veredictos).forEach(k => assert(vistosVeredicto.has(k), `el veredicto '${k}' quedó huérfano: ninguna opción lleva a él`));
  });

  test('VPO ruta: el grafo no tiene ciclos, así que toda ruta termina en un veredicto', () => {
    // Recorrido en profundidad marcando la rama activa: si se vuelve a pisar un paso que ya
    // está en la rama, hay un ciclo y el usuario quedaría dando vueltas sin conclusión.
    const enRama = new Set();
    (function visitar(id) {
      assert(!enRama.has(id), `ciclo en la ruta al volver a '${id}'`);
      enRama.add(id);
      ruta.pasos[id].opciones.forEach(o => { if (o.destino.paso) visitar(o.destino.paso); });
      enRama.delete(id);
    })(ruta.PRIMER_PASO);
  });

  test('VPO ruta: cada veredicto tiene tono válido, texto y acciones', () => {
    Object.entries(ruta.veredictos).forEach(([k, v]) => {
      assert(ruta.TONOS[v.tono], `el veredicto '${k}' tiene el tono desconocido '${v.tono}'`);
      assert(v.titulo && v.texto, `el veredicto '${k}' no tiene título o texto`);
      assert(v.acciones && v.acciones.length, `el veredicto '${k}' no propone ninguna acción`);
    });
  });

  test('VPO ruta: la urgencia se resuelve sin pasar por la estratificación de riesgo', () => {
    // Es la propiedad clínica que justifica que la urgencia sea el primer filtro.
    const primero = ruta.pasos[ruta.PRIMER_PASO];
    const salidas = primero.opciones.filter(o => o.destino.veredicto).map(o => o.destino.veredicto);
    assert(salidas.length >= 2, 'emergencia y urgencia deben salir directo a un veredicto');
    salidas.forEach(v => assertEqual(ruta.veredictos[v].tono, 'proceder', `'${v}' debería concluir en proceder`));
  });

  /* ---------------- Integridad de esquema: temas registrados (topics/registry.js) ----------------
     Cada tema nuevo que se agregue a topics/registry.js pasa automáticamente por estas pruebas la
     próxima vez que se abra tests.html — atrapa campos faltantes/vacíos antes de que lleguen al
     usuario, sin necesidad de Node ni un framework de tipos. */
  const { registry, loadTopic } = await import('./topics/registry.js');

  for (const entry of registry) {
    const topic = await loadTopic(entry.id);

    test(`esquema[${entry.id}]: carga sin errores y meta.id coincide con el registro`, () => {
      assert(topic, `loadTopic('${entry.id}') devolvió null`);
      assertEqual(topic.meta && topic.meta.id, entry.id);
    });
    test(`esquema[${entry.id}]: meta.titulo no está vacío`, () => {
      assert(topic.meta && topic.meta.titulo && topic.meta.titulo.trim().length > 0, 'meta.titulo vacío o ausente');
    });
    test(`esquema[${entry.id}]: definicionText no está vacío`, () => {
      assert(topic.definicionText && topic.definicionText.trim().length > 0, 'definicionText vacío o ausente');
    });
    test(`esquema[${entry.id}]: tiene al menos 1 referencia bibliográfica`, () => {
      assert(Array.isArray(topic.bibliografia) && topic.bibliografia.length > 0, 'bibliografia vacía o ausente');
    });
    test(`esquema[${entry.id}]: categories no está vacío`, () => {
      assert(Array.isArray(topic.categories) && topic.categories.length > 0, 'categories vacío o ausente');
    });
    test(`esquema[${entry.id}]: tiene al menos 1 pregunta de quiz`, () => {
      assert(Array.isArray(topic.study.quiz) && topic.study.quiz.length > 0, 'study.quiz vacío o ausente');
    });
    test(`esquema[${entry.id}]: tiene al menos 1 flashcard`, () => {
      assert(Array.isArray(topic.study.flashcards) && topic.study.flashcards.length > 0, 'study.flashcards vacío o ausente');
    });
    test(`esquema[${entry.id}]: cada complicación (si hay) tiene "nombre"`, () => {
      const comps = topic.content.complicaciones || [];
      assert(comps.every(c => c.nombre && c.nombre.trim().length > 0), 'hay una complicación sin "nombre"');
    });
    // study-view.js interpola estos campos directo en las tablas de Diagnóstico y Clasificación.
    // Si a una fila le falta uno, el usuario ve la palabra "undefined" en la celda: pasó con el
    // `cutoff` de 3 filas de no_invasivos, visible en producción hasta que se buscó a mano.
    test(`esquema[${entry.id}]: las filas de las tablas no dejan celdas "undefined"`, () => {
      const d = topic.content.diagnostico || {};
      const cl = topic.content.clasificacion || {};
      const faltan = [];
      const revisar = (filas, campos, etiqueta, nombreDe) => (filas || []).forEach(f => campos
        .filter(k => f[k] === undefined)
        .forEach(k => faltan.push(`${etiqueta} "${nombreDe(f)}" sin ${k}`)));
      revisar(d.laboratorio, ['prueba', 'utilidad'], 'laboratorio', f => f.prueba);
      revisar(d.etiologicos, ['prueba', 'utilidad'], 'etiológicos', f => f.prueba);
      revisar(d.no_invasivos, ['metodo', 'interpretacion', 'cutoff'], 'no invasivos', f => f.metodo);
      revisar(d.imagen, ['modalidad', 'hallazgos'], 'imagen', f => f.modalidad);
      revisar(cl.escalas, ['nombre', 'componentes', 'formula', 'interpretacion'], 'escala', f => f.nombre);
      assert(faltan.length === 0, faltan.join(' | '));
    });
  }

  /* ---------------- Calidad de las opciones del quiz ----------------
     Detecta las 3 "pistas" que permiten acertar sin saber medicina, y que se habían colado de
     forma sistemática en todo el banco (auditoría: un alumno que solo elegía la opción más larga
     acertaba el 72% de 1990 preguntas, contra un 25% de azar):

       1. LONGITUD: la respuesta correcta es la más larga porque acumula calificadores que los
          distractores no tienen.
       2. SOBREDESCRIPCIÓN: la correcta lleva su propia justificación incorporada ("presente en la
          práctica totalidad de los casos"). Ese detalle es material didáctico y va en el
          enunciado o en la explicación, no dentro de la opción.
       3. ABSOLUTISMO: los distractores se rellenan con "nunca / siempre / exclusivamente /
          ninguna", lo que los marca como falsos a ojos de cualquier examinando entrenado.

     OJO (ley de Goodhart): la regla es "misma longitud PORQUE misma especificidad". Rellenar
     distractores con paja hasta igualar el conteo de caracteres pasa esta prueba y empeora el
     contenido. La reescritura es manual, pregunta por pregunta.

     Cómo se usa esta lista: cada tema del registro debe estar en REVISADOS o en PENDIENTES. Un
     tema nuevo que no esté en ninguna de las dos hace fallar la prueba, así que hay que
     clasificarlo a conciencia — y si se escribió bien, va directo a REVISADOS. Conforme se
     corrige un tema se mueve de PENDIENTES a REVISADOS y ya no puede volver a degradarse. */
  {
    const ABSOLUTOS = ['exclusivamente', 'siempre', 'nunca', 'ninguna', 'ningún', 'ninguno',
      'completamente', 'absolutamente', 'todos los casos', 'cualquier caso', 'sin excepción',
      'de forma definitiva'];
    const tieneAbsolutismo = s => {
      const low = s.toLowerCase();
      return ABSOLUTOS.some(a => low.includes(a));
    };
    // El quiz mezcla preguntas sueltas y casos en cascada (con .steps); ambos se evalúan igual.
    const preguntasDe = quiz => (quiz || []).flatMap(q => q.type === 'cascade' ? (q.steps || []) : [q])
      .filter(q => Array.isArray(q.options) && q.options.length === 4 && typeof q.correct === 'number');

    function metricas(quiz) {
      const qs = preguntasDe(quiz);
      if (!qs.length) return null;
      let masLarga = 0, sumaRatio = 0, absSoloDistractores = 0;
      const atipicas = [];
      for (const q of qs) {
        const lens = q.options.map(o => o.length);
        const otras = lens.filter((_, i) => i !== q.correct);
        const mediaOtras = otras.reduce((a, b) => a + b, 0) / otras.length;
        const ratio = lens[q.correct] / mediaOtras;
        sumaRatio += ratio;
        if (lens[q.correct] === Math.max(...lens)) masLarga++;
        // Una sola opción desproporcionada delata la respuesta aunque el promedio del tema salga bien.
        lens.forEach((l, i) => {
          const resto = lens.filter((_, j) => j !== i);
          if (l / (resto.reduce((a, b) => a + b, 0) / resto.length) > 2.0) atipicas.push(q.q);
        });
        if (!tieneAbsolutismo(q.options[q.correct])
            && q.options.some((o, i) => i !== q.correct && tieneAbsolutismo(o))) absSoloDistractores++;
      }
      return {
        n: qs.length,
        pctMasLarga: 100 * masLarga / qs.length,
        ratioMedio: sumaRatio / qs.length,
        pctAbsSoloDistractores: 100 * absSoloDistractores / qs.length,
        atipicas: [...new Set(atipicas)]
      };
    }

    // Temas cuyas opciones cumplen los umbrales. Solo se agregan aquí después de reescribirlos:
    // mover un tema sin corregirlo hace fallar la prueba.
    // 'valoracion-preoperatoria' entra sin reescritura porque la auditoría lo encontró ya en
    // regla (37.5% / 0.98x / 8.3% / 0 atípicas). Sirve de prueba de que los umbrales son
    // alcanzables con contenido clínico real, no un ideal teórico.
    const REVISADOS = new Set(['valoracion-preoperatoria', 'embolia-grasa',
      'anemia-ferropenica', 'anemia-megaloblastica', 'anemia-enfermedad-cronica',
      'anemias-hemoliticas-hereditarias', 'anemias-hemoliticas-adquiridas', 'anemia-aplasica',
      'hemoglobinopatias', 'policitemia-secundaria', 'porfirias',
      'sindromes-mieloproliferativos', 'sindromes-mielodisplasicos', 'leucemia-aguda',
      'leucemia-linfocitica-cronica', 'mieloma-multiple', 'linfomas',
      'alteraciones-plaquetarias-cuantitativas', 'coagulacion-trombofilias',
      'coagulacion-intravascular-diseminada', 'linfadenopatias',
      'alteraciones-serie-blanca', 'hiperesplenismo', 'sindrome-hiperviscosidad',
      'transfusion-hemoderivados', 'cefaleas', 'enfermedad-cerebrovascular',
      'esclerosis-multiple', 'delirium-coma-encefalopatias', 'estado-epileptico',
      'neoplasias-snc-hipertension-intracraneal', 'trastornos-del-movimiento',
      'traumatismo-craneoencefalico', 'sindrome-aortico-agudo',
      'exploracion-abdominal', 'exploracion-cabeza-cuello', 'exploracion-cardiovascular',
      'exploracion-neurologica', 'exploracion-respiratoria', 'exploracion-osteoarticular',
      'exploracion-piel-faneras', 'historia-clinica', 'signos-clasicos',
      'cirrosis-hepatica', 'miocardiopatias', 'sepsis', 'vasopresores-sedantes',
      'enfermedad-arterial-periferica']);
    // Cola de trabajo pendiente de la auditoría: vacía desde agosto de 2026, cuando los 47 temas
    // quedaron revisados. Un tema nuevo debe escribirse cumpliendo los umbrales y entrar en
    // REVISADOS; esta lista ya no puede crecer (COLA_MAXIMA = 0).
    const PENDIENTES = new Set([]);

    /* La explicación de cada pregunta describe la respuesta correcta. Si otra opción se parece
       bastante más a esa explicación que la marcada en `correct`, es señal de que la clave de
       respuesta quedó apuntando a la opción equivocada. Es un heurístico, no una prueba: por eso
       el margen es amplio (6 palabras de contenido). Con margen 6 los 47 temas dan 0 avisos, así
       que cualquier aviso nuevo merece revisarse a mano.
       Encontró 13 de las 23 claves equivocadas que traía `estado-epileptico` de origen. */
    const PALABRAS_VACIAS = new Set(['de', 'la', 'el', 'los', 'las', 'un', 'una', 'unos', 'unas',
      'y', 'o', 'en', 'con', 'por', 'para', 'que', 'se', 'su', 'sus', 'del', 'al', 'es', 'son',
      'como', 'mas', 'menos', 'no', 'si', 'sin', 'sobre', 'entre', 'cuando', 'donde', 'cual',
      'cuales', 'este', 'esta', 'estos', 'estas', 'lo', 'le', 'les', 'ha', 'han', 'hay', 'ser',
      'estan', 'tras', 'ante', 'desde', 'hasta', 'cada', 'tambien', 'pero', 'aunque']);
    const palabrasDe = s => new Set(
      (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
        .match(/[a-z0-9]+/g)?.filter(w => w.length > 3 && !PALABRAS_VACIAS.has(w)) || []);
    const enComun = (a, b) => [...a].filter(w => b.has(w)).length;

    // Cada pregunta se empareja con la explicación que le corresponde: la suya si es suelta, la
    // del caso completo si es un paso de cascada.
    const conExplicacion = quiz => (quiz || []).flatMap(q => q.type === 'cascade'
      ? (q.steps || []).map(s => [s, q.explanation])
      : [[q, q.explanation]])
      .filter(([q, exp]) => exp && Array.isArray(q.options) && q.options.length === 4
        && typeof q.correct === 'number');

    function clavesSospechosas(quiz) {
      const malas = [];
      for (const [q, exp] of conExplicacion(quiz)) {
        const e = palabrasDe(exp);
        if (!e.size) continue;
        const puntos = q.options.map(o => enComun(palabrasDe(o), e));
        const mejor = puntos.indexOf(Math.max(...puntos));
        if (mejor !== q.correct && puntos[mejor] >= puntos[q.correct] + 6) {
          malas.push(`"${q.q.slice(0, 60)}…" marca [${q.correct}] pero la explicación describe [${mejor}]`);
        }
      }
      return malas;
    }

    // Esta comprobación corre sobre TODOS los temas, revisados o no: una clave de respuesta
    // equivocada es un error de contenido que el alumno estudia mal, no una cuestión de estilo.
    for (const entry of registry) {
      const topic = await loadTopic(entry.id);
      test(`quiz[${entry.id}]: la opción marcada como correcta concuerda con la explicación`, () => {
        const malas = clavesSospechosas(topic.study.quiz);
        assert(malas.length === 0, 'posible clave de respuesta equivocada: ' + malas.join(' | '));
      });
    }

    test('quiz: todo tema del registro está clasificado como revisado o pendiente', () => {
      const sinClasificar = registry.map(e => e.id).filter(id => !REVISADOS.has(id) && !PENDIENTES.has(id));
      assert(sinClasificar.length === 0,
        `tema(s) sin clasificar en tests.js: ${sinClasificar.join(', ')}. Si sus preguntas ya cumplen los umbrales agrégalo a REVISADOS; si no, a PENDIENTES.`);
    });

    // Este número solo baja. Cada tema corregido se mueve a REVISADOS y aquí se decrementa;
    // si un tema nuevo llega con preguntas que no cumplen, la cola crece y esta prueba falla.
    const COLA_MAXIMA = 0;
    test('quiz: la cola de temas pendientes de revisar no crece', () => {
      const pendientesReales = registry.map(e => e.id).filter(id => PENDIENTES.has(id));
      assert(pendientesReales.length <= COLA_MAXIMA,
        `la cola creció a ${pendientesReales.length} temas (máximo ${COLA_MAXIMA}). Un tema nuevo debe escribirse cumpliendo los umbrales y entrar en REVISADOS.`);
    });

    for (const entry of registry) {
      if (!REVISADOS.has(entry.id)) continue;
      const topic = await loadTopic(entry.id);
      const m = metricas(topic.study.quiz);

      test(`opciones[${entry.id}]: la correcta no es sistemáticamente la más larga`, () => {
        assert(m, 'sin preguntas evaluables');
        assert(m.pctMasLarga <= 40, `la correcta es la más larga en ${m.pctMasLarga.toFixed(1)}% de ${m.n} preguntas (umbral 40%, azar 25%)`);
      });
      test(`opciones[${entry.id}]: longitud comparable entre las 4 opciones`, () => {
        assert(m.ratioMedio <= 1.15, `la correcta mide ${m.ratioMedio.toFixed(2)}x el promedio de los distractores (umbral 1.15x)`);
        assert(m.atipicas.length === 0, `${m.atipicas.length} pregunta(s) con una opción >2x las otras: "${m.atipicas[0]}"`);
      });
      test(`opciones[${entry.id}]: sin lenguaje absolutista solo en los distractores`, () => {
        assert(m.pctAbsSoloDistractores <= 10, `${m.pctAbsSoloDistractores.toFixed(1)}% de las preguntas marcan los distractores con "nunca/siempre/exclusivamente" (umbral 10%)`);
      });
    }
  }

  /* ---------------- Integridad de enlaces: topicId del temario vs. temas registrados ----------------
     topics/temario-index.js referencia temas construidos con `{ label, topicId }`. Si un topicId
     apunta a un tema que no existe en el registro (typo, tema renombrado/eliminado), el ítem del
     temario queda roto en silencio — esta prueba lo hubiera atrapado en el commit de hoy mismo. */
  {
    const { temarioBlocks } = await import('./topics/temario-index.js');
    const registeredIds = new Set(registry.map(t => t.id));
    const clustersOf = b => b.groups ? b.groups.flatMap(g => g.clusters) : b.clusters;
    const brokenLinks = [];
    for (const b of temarioBlocks) {
      for (const c of clustersOf(b)) {
        for (const it of c.items) {
          if (typeof it !== 'string' && it.topicId && !registeredIds.has(it.topicId)) {
            brokenLinks.push(`"${it.label}" (bloque "${b.title}") → topicId inexistente: ${it.topicId}`);
          }
        }
      }
    }
    test('temario: todos los topicId referenciados existen en topics/registry.js', () => {
      assert(brokenLinks.length === 0, brokenLinks.join(' | '));
    });
  }

  render();
}

function render() {
  const pass = results.filter(r => r.pass).length;
  const fail = results.length - pass;
  const root = document.getElementById('test-results');
  root.innerHTML = `
    <div class="home-progress-stats" style="margin-bottom:20px;">
      <div class="home-stat"><span class="home-stat-n">${results.length}</span><span class="home-stat-l">Pruebas</span></div>
      <div class="home-stat"><span class="home-stat-n" style="color:#2f6f5e;">${pass}</span><span class="home-stat-l">Pasaron</span></div>
      <div class="home-stat"><span class="home-stat-n" style="color:${fail ? '#8c3a34' : 'var(--ink-faint)'};">${fail}</span><span class="home-stat-l">Fallaron</span></div>
    </div>
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th>Prueba</th><th>Resultado</th></tr></thead>
        <tbody>${results.map(r => `<tr><td>${r.name}</td><td style="color:${r.pass ? '#2f6f5e' : '#8c3a34'};font-weight:600;">${r.pass ? 'OK' : 'FALLÓ: ' + r.error}</td></tr>`).join('')}</tbody>
      </table>
    </div>`;
  document.title = `Tests (${pass}/${results.length}): MIOsler`;
}

run().catch(e => {
  document.getElementById('test-results').innerHTML = `<div class="auth-error">Error fatal al correr las pruebas: ${e.message}</div>`;
});
