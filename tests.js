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

  test('merge: temas repasados es un OR booleano entre dispositivos', () => {
    const local = { sepsis: true };
    const cloud = { 'cirrosis-hepatica': true };
    assertEqual(mergeValue('rm:topics-reviewed', local, cloud), { sepsis: true, 'cirrosis-hepatica': true });
  });

  test('merge: eventos de calendario se unen sin duplicar por fecha+tipo+etiqueta', () => {
    const local = [{ date: '2026-01-01', type: 'guardia', label: 'A' }];
    const cloud = [{ date: '2026-01-01', type: 'guardia', label: 'A' }, { date: '2026-01-02', type: 'clase', label: 'B' }];
    assertEqual(mergeValue('rm:cal-events', local, cloud).length, 2);
  });

  test('merge: valor escalar prefiere la nube si no está vacía, si no conserva lo local', () => {
    assertEqual(mergeValue('rm:exam-date', '2026-01-01', '2026-02-01'), '2026-02-01');
    assertEqual(mergeValue('rm:exam-date', '2026-01-01', ''), '2026-01-01');
  });

  localStorage.removeItem('rm:test-scalar');
  localStorage.removeItem('rm:test-obj');

  /* ---------------- Repetición espaciada de preguntas (engine/quiz-srs.js) ---------------- */
  const { updateQuizSRS, dueQuestionIndices, loadQuizSRS } = await import('./engine/quiz-srs.js');
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
    assertEqual(due.length, 4);
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
