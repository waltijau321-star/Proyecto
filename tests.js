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
