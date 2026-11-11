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
  const { syncGet, syncSet, mergeValue, clearLocalData, strategyFor } = await import('./engine/cloud-sync.js');

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

  // El calendario de repaso del banco de preguntas se fusiona como las fichas, elemento por
  // elemento. Como escalar (lo que era antes), practicar en dos dispositivos hacia que el
  // documento de la nube pisara entero el calendario local y se perdiera el avance del dia.
  test('merge: el repaso espaciado del quiz se fusiona por pregunta, no en bloque', () => {
    const local = { aaa: { box: 4, next: 100 }, bbb: { box: 1, next: 0 } };
    const nube = { aaa: { box: 2, next: 50 }, ccc: { box: 3, next: 70 } };
    const m = mergeValue('rm:quiz-srs:neumonia', local, nube);
    assertEqual(m.aaa.box, 4);
    assertEqual(m.bbb.box, 1);
    assertEqual(m.ccc.box, 3);
  });

  test('sesion: al cerrar sesion se borra el progreso local y se conserva "recordar usuario"', () => {
    localStorage.setItem('rm:remember-user', 'true');
    syncSet('rm:quiz-progress', { tema: { correct: 3, incorrect: 1 } });
    syncSet('flashcard-progress:tema', { 0: { box: 4, next: 0 } });
    clearLocalData();
    assertEqual(localStorage.getItem('rm:quiz-progress'), null);
    assertEqual(localStorage.getItem('flashcard-progress:tema'), null);
    assertEqual(localStorage.getItem('rm:remember-user'), 'true');
    // El espejo en memoria tambien tiene que vaciarse: si no, el residente que entra despues
    // en la misma tablet seguiria leyendo lo del anterior aunque localStorage ya este limpio.
    assertEqual(syncGet('rm:quiz-progress', null), null);
    localStorage.removeItem('rm:remember-user');
  });

  localStorage.removeItem('rm:test-scalar');
  localStorage.removeItem('rm:test-obj');

  /* ---------------- Repetición espaciada de preguntas (engine/quiz-srs.js) ---------------- */
  const { updateQuizSRS, dueQuestionIndices, loadQuizSRS, isQuizCompleted, remainingToComplete, questionId, answeredCount, answeredBreakdown } = await import('./engine/quiz-srs.js');
  const T = 'rm-test-topic';
  // Banco de prueba. La segunda pregunta está escrita sin acentos y con entidad HTML a
  // propósito: la mitad de la biblioteca está así, y la corrección ortográfica pendiente no
  // debe borrarle el progreso a nadie.
  const QZ = [
    { q: '¿Cuál es el umbral de CURB-65 para ingresar al paciente?', options: ['a', 'b', 'c', 'd'], correct: 0 },
    { q: 'Que define una APNEA en un estudio de sue&#241;o?', options: ['a', 'b', 'c', 'd'], correct: 1 },
    { q: 'Tercera pregunta del banco de prueba', options: ['a', 'b', 'c', 'd'], correct: 2 },
    { type: 'cascade', vignette: 'Varón de 62 años con disnea de 3 días', steps: [{ q: 'Primer paso del caso', options: ['a', 'b'], correct: 0 }] },
    { q: 'Quinta pregunta del banco de prueba', options: ['a', 'b', 'c', 'd'], correct: 3 }
  ];

  test('quiz-srs: responder bien sube de caja y programa el próximo repaso a futuro', () => {
    syncSet('rm:quiz-srs:' + T, {});
    updateQuizSRS(T, QZ[0], true);
    const entry = loadQuizSRS(T)[questionId(QZ[0])];
    assertEqual(entry.box, 2);
    assert(entry.next > Date.now(), 'el próximo repaso debería quedar en el futuro');
  });

  test('quiz-srs: responder mal reinicia a caja 1 y queda vencida de inmediato', () => {
    syncSet('rm:quiz-srs:' + T, {});
    updateQuizSRS(T, QZ[0], false);
    const entry = loadQuizSRS(T)[questionId(QZ[0])];
    assertEqual(entry.box, 1);
    assert(entry.next <= Date.now(), 'debería estar vencida ahora mismo');
  });

  test('quiz-srs: una pregunta recién acertada no aparece entre las vencidas', () => {
    syncSet('rm:quiz-srs:' + T, {});
    updateQuizSRS(T, QZ[2], true);
    const due = dueQuestionIndices(T, QZ);
    assert(!due.includes(2), 'la pregunta 2 no debería estar vencida justo después de acertarla');
  });

  test('quiz-srs: una pregunta nunca respondida no cuenta como vencida (hay que responderla primero)', () => {
    syncSet('rm:quiz-srs:' + T, {});
    updateQuizSRS(T, QZ[0], false);
    const due = dueQuestionIndices(T, QZ);
    assertEqual(due.length, 1);
    assert(due.includes(0), 'la pregunta 0, fallada, sí debería estar vencida');
  });

  test('quiz-srs: isQuizCompleted exige que cada pregunta se haya respondido al menos una vez', () => {
    syncSet('rm:quiz-srs:' + T, {});
    const tres = QZ.slice(0, 3);
    assertEqual(isQuizCompleted(T, tres), false);
    assertEqual(remainingToComplete(T, tres), 3);
    updateQuizSRS(T, tres[0], true);
    updateQuizSRS(T, tres[1], false);
    assertEqual(isQuizCompleted(T, tres), false);
    assertEqual(remainingToComplete(T, tres), 1);
    updateQuizSRS(T, tres[2], true);
    assertEqual(isQuizCompleted(T, tres), true);
    assertEqual(remainingToComplete(T, tres), 0);
  });

  // La razón de ser del id estable. Con el esquema anterior (clave = posición en el array),
  // insertar una pregunta al principio del banco movía el progreso de TODAS las demás: la caja 5
  // de la pregunta 3 pasaba a ser la de la 4. Los bancos se editan constantemente, así que esto
  // le pasaba a todos los usuarios, en silencio y sin forma de detectarlo desde la app.
  test('quiz-srs: el progreso sigue a la pregunta aunque se inserte otra delante', () => {
    syncSet('rm:quiz-srs:' + T, {});
    updateQuizSRS(T, QZ[2], true);
    updateQuizSRS(T, QZ[2], true); // caja 3
    const nueva = { q: 'Pregunta nueva insertada al principio del banco', options: ['a', 'b', 'c', 'd'], correct: 0 };
    const reordenado = [nueva, ...QZ];
    const store = loadQuizSRS(T, reordenado);
    assertEqual(store[questionId(QZ[2])].box, 3);
    assertEqual(remainingToComplete(T, reordenado), reordenado.length - 1);
    assert(!store[questionId(nueva)], 'la pregunta nueva no debería heredar progreso de nadie');
  });

  test('quiz-srs: el progreso sobrevive a reordenar el banco', () => {
    syncSet('rm:quiz-srs:' + T, {});
    updateQuizSRS(T, QZ[4], true);
    const alReves = [...QZ].reverse();
    const due = dueQuestionIndices(T, alReves);
    assertEqual(remainingToComplete(T, alReves), QZ.length - 1);
    assertEqual(due.length, 0, 'recién acertada, no debería estar vencida en ninguna posición');
  });

  test('quiz-srs: corregir acentos y entidades HTML no borra el progreso de la pregunta', () => {
    const sinAcentos = { q: 'Que define una APNEA en un estudio de sue&#241;o?', options: ['a', 'b', 'c', 'd'], correct: 1 };
    const conAcentos = { q: '¿Qué define una APNEA en un estudio de sueño?', options: ['a', 'b', 'c', 'd'], correct: 1 };
    assertEqual(questionId(sinAcentos), questionId(conAcentos));
  });

  test('quiz-srs: reescribir el enunciado de fondo sí cuenta como pregunta nueva', () => {
    const otra = { q: 'Cuál es el tratamiento inicial de la apnea obstructiva grave?', options: ['a', 'b', 'c', 'd'], correct: 1 };
    assert(questionId(QZ[1]) !== questionId(otra), 'dos enunciados distintos no pueden compartir id');
  });

  test('quiz-srs: dos casos en cascada con la misma viñeta se distinguen por su primer paso', () => {
    const casoA = { type: 'cascade', vignette: 'Varón de 62 años con disnea de 3 días', steps: [{ q: 'Primer paso del caso', options: ['a', 'b'], correct: 0 }] };
    const casoB = { type: 'cascade', vignette: 'Varón de 62 años con disnea de 3 días', steps: [{ q: 'Qué estudio pides primero', options: ['a', 'b'], correct: 0 }] };
    assert(questionId(casoA) !== questionId(casoB), 'misma viñeta pero distinto primer paso: son casos distintos');
  });

  test('quiz-srs: el progreso guardado por índice (formato viejo) se migra a ids', () => {
    // Lo que tiene hoy en la nube cualquier usuario que ya haya practicado.
    const viejo = {};
    viejo['1'] = { box: 4, next: Date.now() + 100000 };
    viejo['9'] = { box: 2, next: Date.now() }; // índice fuera del banco actual: se descarta
    syncSet('rm:quiz-srs:' + T, viejo);
    const store = loadQuizSRS(T, QZ);
    assertEqual(store[questionId(QZ[1])].box, 4);
    assertEqual(Object.keys(store).filter(k => /^\d+$/.test(k)).length, 0);
    assertEqual(remainingToComplete(T, QZ), QZ.length - 1);
  });

  /* ---- answeredCount: el recuento que usa Inicio, que NO tiene el banco delante ----
     Inicio dejo de cargar los 106 temas, asi que no puede llamar a remainingToComplete (que
     necesita el array de preguntas). Cuenta las claves del almacen del tema, y el tope es la
     parte delicada: un id de una pregunta que luego se reescribio se conserva a proposito, asi
     que sin acotar el recuento la portada podria pasar del 100%. */
  test('answeredCount: cuenta las preguntas respondidas sin recibir el banco', () => {
    const store = {};
    for (let i = 0; i < 25; i++) store['id' + i] = { box: 2 };
    syncSet('rm:quiz-srs:' + T, store);
    assertEqual(answeredCount(T, 60), 25);
  });

  test('answeredCount: nunca pasa del tamano del banco, aunque sobren ids viejos', () => {
    const store = {};
    for (let i = 0; i < 99; i++) store['v' + i] = { box: 1 };
    syncSet('rm:quiz-srs:' + T, store);
    assertEqual(answeredCount(T, 36), 36);
  });

  test('answeredCount: cuenta tambien las claves del formato viejo, y vale 0 sin datos', () => {
    syncSet('rm:quiz-srs:' + T, { '7': { box: 3 }, abc: { box: 1 } });
    assertEqual(answeredCount(T, 36), 2);
    assertEqual(answeredCount(T, 0), 0);
    assertEqual(answeredCount('tema-que-no-existe-' + Date.now(), 36), 0);
  });

  /* ---- answeredBreakdown: el desglose que pinta la barra verde/rojo/gris de Inicio ----
     Mide PREGUNTAS DISTINTAS (una vez cada una, por su ultimo resultado), no intentos: los
     intentos de `rm:quiz-progress` incluyen reintentos y pueden pasar del tamano del banco, y
     una barra cuyos trozos no suman el total no dice cuanto llevas. El color sale de la caja de
     Leitner, que solo sube acertando: caja 1 = fallada la ultima vez, caja 2 o mas = acertada. */
  test('answeredBreakdown: la caja 1 es roja, de la 2 en adelante es verde, y el resto es gris', () => {
    syncSet('rm:quiz-srs:' + T, {
      a: { box: 1 }, b: { box: 2 }, c: { box: 5 }, d: { box: 1 }, e: { box: 9 }
    });
    assertEqual(answeredBreakdown(T, 20), { acertadas: 3, falladas: 2, contestadas: 5, pendientes: 15 });
  });

  test('answeredBreakdown: los tres trozos suman siempre el banco, aunque sobren ids viejos', () => {
    const store = {};
    for (let i = 0; i < 60; i++) store['x' + i] = { box: i < 45 ? 3 : 1 };
    syncSet('rm:quiz-srs:' + T, store);
    const d = answeredBreakdown(T, 40);
    assertEqual(d.acertadas + d.falladas + d.pendientes, 40, 'los trozos no suman el banco');
    assertEqual(d.contestadas, 40);
    // El recorte reparte en la misma proporcion (45 de 60 acertadas = 75% de 40).
    assertEqual(d.acertadas, 30);
    assertEqual(d.falladas, 10);
  });

  test('answeredBreakdown: sin datos todo es gris, y un banco vacio no inventa preguntas', () => {
    assertEqual(answeredBreakdown('tema-que-no-existe-' + Date.now(), 12),
      { acertadas: 0, falladas: 0, contestadas: 0, pendientes: 12 });
    assertEqual(answeredBreakdown(T, 0), { acertadas: 0, falladas: 0, contestadas: 0, pendientes: 0 });
  });

  test('answeredBreakdown: una clave del formato viejo (indice) cuenta igual, y sin caja es roja', () => {
    syncSet('rm:quiz-srs:' + T, { '7': { box: 3 }, abc: {} });
    assertEqual(answeredBreakdown(T, 10), { acertadas: 1, falladas: 1, contestadas: 2, pendientes: 8 });
  });

  localStorage.removeItem('rm:quiz-srs:' + T);

  /* ---- La fila de cada bloque del temario (engine/home.js) ----
     Un mismo tema cuelga de varios items del temario (`neumonia` aparece en cinco), asi que el
     progreso tiene que contar cada tema UNA vez o la barra prometeria mas preguntas que las que
     existen; la cobertura de contenido, en cambio, sigue contando items. */
  const homeMod = await import('./engine/home.js');

  test('temario: un tema repetido en varios items cuenta su banco una sola vez', () => {
    const bloque = { title: 'Prueba', clusters: [{ name: 'c1', items: [
      { label: 'Uno', topicId: 'alfa' }, { label: 'Otra vista', topicId: 'alfa' },
      { label: 'Dos', topicId: 'beta' }, 'Sin construir'
    ] }] };
    const porId = {
      alfa: { id: 'alfa', quizCount: 30, acertadas: 10, falladas: 5, contestadas: 15 },
      beta: { id: 'beta', quizCount: 20, acertadas: 2, falladas: 0, contestadas: 2 }
    };
    const cov = homeMod.blockCoverage(bloque, porId);
    assertEqual(cov.preguntas, 50, 'las preguntas del bloque');
    assertEqual(cov.acertadas, 12);
    assertEqual(cov.falladas, 5);
    assertEqual(cov.contestadas, 17);
    // La cobertura de contenido no cambia: sigue siendo items del temario, no temas distintos.
    assertEqual(cov.built, 3);
    assertEqual(cov.total, 4);
  });

  // La fila del temario era un <div onclick>: se abria con el raton y con nada mas, de modo que
  // el temario entero quedaba fuera del teclado y del lector de pantalla (y el boton "Repasar"
  // de dentro si era alcanzable, asi que se podia marcar un tema sin poder abrirlo). Esto vigila
  // que el texto clicable siga siendo un <button> de verdad, y que el boton de repasar conserve
  // los dos atributos de los que depende actualizarlo en su sitio sin volver a montar Inicio.
  test('temario: la fila de un tema construido es un boton, no un div clicable', () => {
    const fila = homeMod.temarioItemRow({ label: 'Prueba', topicId: 'alfa' }, 'Bloque', 'Grupo',
      { alfa: { id: 'alfa', accent: '#123456', quizCount: 10 } });
    assert(/<button[^>]*class="ti-open"/.test(fila), 'el texto del tema tiene que ser un <button>');
    assert(!/<div class="temario-item[^>]*onclick/.test(fila), 'la fila no puede volver a llevar onclick');
    assert(/data-topic="alfa"/.test(fila), 'el boton de repasar necesita data-topic');
    assert(/aria-pressed="false"/.test(fila), 'el boton de repasar necesita aria-pressed');
  });

  test('temario: la fila de un subtema en desarrollo tambien es un boton', () => {
    const fila = homeMod.temarioItemRow('Todavia sin construir', 'Bloque', 'Grupo', {});
    assert(/<button[^>]*class="ti-open"/.test(fila), 'la fila en desarrollo tiene que ser un <button>');
    assert(!/<div class="temario-item[^>]*onclick/.test(fila), 'la fila no puede volver a llevar onclick');
  });

  test('temario: la etiqueta del bloque dice el avance, y el porcentaje va sobre lo contestado', () => {
    assertEqual(homeMod.blockChip({ preguntas: 0, contestadas: 0, acertadas: 0 }), 'Sin preguntas todavía');
    assertEqual(homeMod.blockChip({ preguntas: 50, contestadas: 0, acertadas: 0 }), '0/50 contestadas');
    // "acertadas", no "acierto": el aro de Inicio mide intentos y esto mide preguntas, y dos
    // porcentajes con el mismo nombre en la misma pantalla se leen como el mismo numero.
    assertEqual(homeMod.blockChip({ preguntas: 50, contestadas: 20, acertadas: 15 }), '20/50 contestadas · 75% acertadas');
  });

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

  /* ---------------- Trampa de foco de las capas modales (engine/study-view.js) ---------------- */
  const { capaModalSuperior, focoDelTabulador } = await import('./engine/study-view.js');

  test('capas modales: manda la de arriba, no la primera activa', () => {
    // El caso real: los términos abiertos sobre el login, que sigue activo debajo. Si gana
    // #overlay, el tabulador recorre el formulario de registro que queda tapado.
    assertEqual(capaModalSuperior([
      { id: 'overlay', activa: true },
      { id: 'terms-overlay', activa: true },
      { id: 'img-lightbox', activa: false }
    ]), 'terms-overlay');
    assertEqual(capaModalSuperior([
      { id: 'overlay', activa: true },
      { id: 'terms-overlay', activa: false },
      { id: 'img-lightbox', activa: true }
    ]), 'img-lightbox');
  });

  test('capas modales: sin ninguna activa no hay trampa', () => {
    assertEqual(capaModalSuperior([
      { id: 'overlay', activa: false },
      { id: 'terms-overlay', activa: false }
    ]), null);
    assertEqual(capaModalSuperior([]), null);
  });

  test('foco: con el foco FUERA de la capa, el tabulador vuelve dentro', () => {
    // Este es el defecto que tenía: al cargar la página el foco está en <body>, que no es ni el
    // primero ni el último del recorrido, así que la versión anterior dejaba pasar la tecla y
    // dos pulsaciones bastaban para llegar a la nav de la app, detrás de la puerta de acceso.
    assertEqual(focoDelTabulador(false, false, false, false), 'primero');
    assertEqual(focoDelTabulador(false, false, false, true), 'ultimo');
  });

  test('foco: dentro de la capa solo se envuelve en los dos extremos', () => {
    assertEqual(focoDelTabulador(true, false, true, false), 'primero');
    assertEqual(focoDelTabulador(true, true, false, true), 'ultimo');
    // En medio del recorrido no se toca: el tabulado normal tiene que seguir funcionando.
    assertEqual(focoDelTabulador(true, false, false, false), null);
    assertEqual(focoDelTabulador(true, false, false, true), null);
    // Y en el extremo contrario al sentido de la marcha tampoco.
    assertEqual(focoDelTabulador(true, true, false, false), null);
    assertEqual(focoDelTabulador(true, false, true, true), null);
  });

  /* ---------------- Calculadoras clínicas: Sepsis ---------------- */
  const sepsisCalc = (await import('./topics/sepsis/calculators.js')).calculators;
  const cribado = sepsisCalc.find(c => c.key === 'cribado');
  const sofa2 = sepsisCalc.find(c => c.key === 'sofa2');

  // La SSC 2026 recomienda de forma fuerte NEWS/NEWS2/MEWS/SIRS por encima del qSOFA como cribado
  // único. El caso que motiva esa recomendación es justo este: SIRS lo detecta, el qSOFA no.
  test('cribado de sepsis: SIRS positivo con qSOFA negativo (la discordancia que motiva la SSC 2026)', () => {
    const r = cribado.compute({ temp: 38.5, fc: 110, fr: 24, pas: 130, leucos: 15, paco2: null, bandas: false, mental: false });
    assertEqual(r.sirs, 4, 'los cuatro criterios de SIRS se cumplen');
    assert(r.sirsPos, 'el SIRS debería ser positivo');
    assertEqual(r.q, 1, 'solo suma la frecuencia respiratoria ≥22');
    assert(!r.qPos, 'el qSOFA no debería ser positivo');
    assert(r.discordante, 'las dos escalas discrepan');
  });

  test('cribado de sepsis: qSOFA 2 de 3 con SIRS negativo', () => {
    const r = cribado.compute({ temp: 37, fc: 80, fr: 18, pas: 95, leucos: null, paco2: null, bandas: false, mental: true });
    assertEqual(r.q, 2, 'alteración mental y sistólica ≤100');
    assert(r.qPos, 'el qSOFA debería ser positivo');
    assertEqual(r.sirs, 0, 'ningún criterio de SIRS se cumple');
    assert(r.leucoFalta, 'sin leucocitos ni bandas el SIRS queda sobre 3 criterios');
  });

  test('cribado de sepsis: la PaCO₂ baja cumple el criterio respiratorio del SIRS aunque la FR sea normal', () => {
    const r = cribado.compute({ temp: 37, fc: 80, fr: 16, pas: 130, leucos: 8, paco2: 28, bandas: false, mental: false });
    assertEqual(r.sirs, 1, 'solo suma el criterio respiratorio, por la PaCO₂ <32');
  });

  test('cribado de sepsis: sin las constantes básicas no calcula (retorna null)', () => {
    assertEqual(cribado.compute({ temp: null, fc: 80, fr: 18, pas: 95, leucos: null, paco2: null, bandas: false, mental: false }), null);
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
  const vpoRiesgos = await import('./protocols/vpo-riesgos.js');
  const calcEngine = await import('./engine/calculators.js');
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

  test('VPO Caprini: los factores de la mujer suman, no quedan fuera del puntaje', () => {
    // Faltaba la categoría entera del puntaje original: la paciente que toma un anticonceptivo
    // o acaba de parir salía con menos puntos de los que le corresponden.
    const base = { age: '0', surgery: '0', mobility: '0' };
    assertEqual(vpo('caprini').compute(base).total, 0);
    assertEqual(vpo('caprini').compute({ ...base, anticonceptivos: true }).total, 1);
    assertEqual(vpo('caprini').compute({ ...base, embarazo: true }).total, 1);
    assertEqual(vpo('caprini').compute({ ...base, abortos: true }).total, 1);
    assertEqual(vpo('caprini').compute({ ...base, anticonceptivos: true, embarazo: true, abortos: true }).total, 3);
    const etiquetas = vpo('caprini').fields.filter(f => f.type === 'note').map(f => f.text);
    assert(etiquetas.includes('Solo en mujeres'), 'los tres factores deberían ir bajo su propio encabezado');
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

  test('VPO riesgos: las dos tablas que la seccion pedia de memoria estan completas', () => {
    // El puente pregunta el riesgo hemorragico y la ruta el quirurgico, y ninguno de los dos
    // se definia en ningun sitio: habia que saberselos para poder usar las herramientas.
    const { RIESGO_HEMORRAGICO, RIESGO_QUIRURGICO, tablaRiesgoHTML } = vpoRiesgos;
    [RIESGO_HEMORRAGICO, RIESGO_QUIRURGICO].forEach(t => {
      assert(t.titulo && t.intro && /\d{4}/.test(t.fuente), 'cada tabla dice de donde sale');
      assertEqual(t.niveles.length, 3, 'las dos tablas tienen tres niveles');
      t.niveles.forEach(n => {
        assert(n.label && n.umbral, `el nivel '${n.id}' no dice su umbral`);
        assert(n.ejemplos.length >= 4, `el nivel '${n.id}' tiene muy pocos ejemplos para servir`);
      });
    });
    // El umbral de cada tabla es el que usan las herramientas que la consultan.
    assert(/2 %/.test(RIESGO_HEMORRAGICO.niveles[0].umbral), 'el alto hemorragico es 2 % o mas a 30 dias');
    assert(/1 %/.test(RIESGO_QUIRURGICO.niveles[0].umbral), 'el bajo quirurgico es menos de 1 %');
    // Y la tabla se pinta sin dejar huecos.
    const html = tablaRiesgoHTML(RIESGO_QUIRURGICO);
    assert(!/undefined/.test(html) && /vpo-riesgo-tabla/.test(html));
  });

  test('VPO riesgos: el mismo procedimiento puede ser bajo para el corazon y alto para el sangrado', () => {
    // Es la confusion que las dos tablas curan: la reseccion transuretral de prostata es de
    // riesgo quirurgico bajo y de riesgo hemorragico alto.
    const { RIESGO_HEMORRAGICO, RIESGO_QUIRURGICO } = vpoRiesgos;
    const texto = t => JSON.stringify(t.niveles);
    assert(/transuretral/i.test(texto(RIESGO_HEMORRAGICO)) && /transuretral/i.test(texto(RIESGO_QUIRURGICO)),
      'la reseccion transuretral deberia estar en las dos tablas');
    const nivelCon = (t, re) => t.niveles.find(n => n.ejemplos.some(e => re.test(e))).id;
    assertEqual(nivelCon(RIESGO_HEMORRAGICO, /transuretral/i), 'alto');
    assertEqual(nivelCon(RIESGO_QUIRURGICO, /transuretral/i), 'bajo');
  });

  test('VPO puente: con riesgo hemorragico minimo no se interrumpe el anticoagulante', () => {
    // El tercer nivel de la tabla de la ISTH: dentales menores, cataratas, dermatologicos
    // menores e implante de dispositivos se hacen con el paciente anticoagulado.
    const r = vpo('puenteac').compute({ farmaco: 'warfarina', sangrado: 'minimo', tfg: 60, indicacion: 'fa' });
    assertEqual(r.continuar, true);
    assertEqual(r.dias, null, 'no hay dias que suspender');
    assertEqual(r.puente, false);
    const directo = vpo('puenteac').compute({ farmaco: 'apixaban', sangrado: 'minimo', tfg: 60, indicacion: 'fa' });
    assert(/omitir la dosis del d[i\u00ed]a/.test(directo.reinicio),
      'con un directo cabe omitir la dosis del dia para evitar el pico');
  });

  test('VPO puente: ninguna combinación recomienda puente con heparina', () => {
    ['warfarina', 'acenocumarol', 'apixaban', 'rivaroxaban', 'edoxaban', 'dabigatran'].forEach(f => {
      ['bajo', 'alto', 'minimo'].forEach(s => {
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

  test('VPO: cada escala declara su dominio y en que bloque de la nota cae', () => {
    // El orden de la nota y el reparto entre sus bloques se derivan de aqui. Una escala sin
    // dominio se pinta al final de la rejilla sin encabezado, y una sin bloqueNota saldria en
    // el de riesgo por omision: las dos cosas pasan en silencio, asi que se vigilan.
    const dominios = new Set(vpoModule.DOMINIOS.map(d => d.id));
    assert(dominios.size >= 5, 'deberia haber varios dominios para que agrupar sirva de algo');
    vpoCalc.forEach(c => {
      assert(dominios.has(c.dominio), `'${c.key}' declara el dominio '${c.dominio}', que no existe`);
      assert(['riesgo', 'optimizacion', 'farmacos', 'vigilancia'].includes(c.bloqueNota),
        `'${c.key}' declara el bloque de nota '${c.bloqueNota}'`);
    });
    // Las que deciden una conducta no son estimaciones de riesgo.
    ['puenteac', 'cockcroft', 'endocarditis', 'profilaxisqx'].forEach(k => {
      assertEqual(vpoCalc.find(c => c.key === k).bloqueNota, 'farmacos', `'${k}' es una conducta`);
    });
    // Y lo que se puede mejorar antes de operar va junto: es lo que justifica adelantar la
    // valoracion en vez de hacerla la vispera.
    ['anemia', 'glucemia', 'prehabilitacion'].forEach(k => {
      assertEqual(vpoCalc.find(c => c.key === k).bloqueNota, 'optimizacion', `'${k}' se optimiza antes`);
    });
    assertEqual(vpoCalc.find(c => c.key === 'leeindex').bloqueNota, 'riesgo');
    assertEqual(vpoCalc.find(c => c.key === 'mins').bloqueNota, 'vigilancia',
      'la troponina posoperatoria no es un riesgo estimado ni un farmaco: es lo que hay que vigilar');
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

  test('VPO: las tarjetas de repaso no contradicen la conducta de la herramienta', () => {
    // El test de arriba compara la herramienta con el contenido y el quiz, pero las tarjetas
    // quedaban fuera: decían que la metformina "se suspende el día de la cirugía" (la conducta
    // anterior a la guía de 2024) y que el arGLP-1 diario se omite "el día previo" en vez del
    // mismo día. Una tarjeta de repaso es justo lo que el residente memoriza.
    const tarjetas = temaVpo.study.flashcards || [];
    assert(tarjetas.length, 'el tema debería tener tarjetas');
    const texto = f => f.front + ' ' + f.back;
    const sobre = re => tarjetas.filter(f => re.test(texto(f)));

    const metformina = sobre(/metformina/i);
    assert(metformina.length, 'no hay ninguna tarjeta de metformina');
    assertEqual(vpoFarm.farmacos.find(f => f.id === 'metformina').conducta, 'continuar');
    metformina.forEach(f => assert(!/se suspende el d[ií]a de la cirug/i.test(f.back),
      'una tarjeta sigue diciendo que la metformina se suspende: la guía de 2024 la continúa'));
    // Y la entrada de la herramienta dice que las dos guias vigentes no coinciden.
    assert(/ADA/.test(JSON.stringify(vpoFarm.farmacos.find(f => f.id === 'metformina'))),
      'la metformina deberia mencionar que la ADA de 2026 la suspende el dia del procedimiento');

    sobre(/GLP-1/).forEach(f => assert(!/diaria el d[ií]a previo|diaria la v[ií]spera/i.test(f.back),
      'una tarjeta dice que el arGLP-1 diario se omite la víspera: la ASA dice el mismo día'));

    // El umbral de capacidad funcional se cita en varias tarjetas: todas con la misma pregunta
    // de cabecera que usan la ruta y el quiz.
    sobre(/MET/).forEach(f => assert(!/sube un piso/i.test(f.back),
      'una tarjeta usa "un piso" de escaleras; el resto de la app usa dos pisos para los 4 MET'));
  });


  /* ---------------- Farmacología pediátrica (protocols/pediatria-farmacos.js) ----------------
     Plantilla: el bloque de fármacos de VPO, unas líneas más arriba. Lo que cambia es que aquí
     hay además aritmética (engine/pediatria-dosis.js es puro justamente para poder probarla con
     casos) y una vista DERIVADA (la pestaña por enfermedad), que exige comprobar la integridad
     referencial en los dos sentidos. */
  const pedia = await import('./protocols/pediatria-farmacos.js');
  const pedDosis = await import('./engine/pediatria-dosis.js');
  const pedFarmVista = await import('./engine/pediatria-farmacos.js');
  const pedEnfVista = await import('./engine/pediatria-enfermedades.js');
  const pedVista = await import('./engine/pediatria-vista.js');
  const pedFicha = await import('./engine/pediatria-ficha.js');

  // Trinquete de contenido, igual que ATRIB_TOTAL_MINIMO: el número puede SUBIR con cada bloque
  // y nunca bajar. Si baja a propósito, se baja la marca a mano y se dice por qué en el commit.
  const PEDIA_FARMACOS_MINIMO = 20;
  const PEDIA_LINEAS_MINIMO = 145;
  const PEDIA_CUADROS_MINIMO = 45;
  // Cuadros declarados COMPLETOS: tienen que seguir teniendo al menos un fármaco y todas sus
  // líneas con fuente y página. Un cuadro que entra aquí no vuelve a salir.
  const PEDIA_CUADROS_COMPLETOS = ['otitis-media-aguda', 'neumonia-adquirida-comunidad',
    'fiebre', 'crisis-asmatica', 'anafilaxia', 'sepsis-neonatal-precoz',
    'lactante-febril-sin-foco', 'oftalmia-neonatal', 'conducto-arterioso-persistente', 'crup',
    'herpes-neonatal', 'sepsis-neonatal-tardia', 'infeccion-anaerobios', 'vomito-gastroenteritis',
    'reflujo-gastroesofagico', 'encefalitis-herpetica', 'estado-epileptico',
    'sedacion-ventilacion-mecanica'];

  const todasLasLineas = pedia.farmacos.flatMap(f => (f.dosis || []).map(d => [f, d]));
  // Los intervalos que existen de verdad en las tres fuentes, en horas.
  const INTERVALOS = [1, 2, 3, 4, 6, 8, 12, 18, 20, 24, 30, 36, 42, 48, 72];

  test('Pediatría: cada fármaco tiene los campos obligatorios del contrato', () => {
    pedia.farmacos.forEach(f => {
      ['id', 'grupo', 'farmaco', 'resumen'].forEach(k => {
        assert(f[k] && String(f[k]).trim(), `'${f.id || '(sin id)'}' no tiene '${k}'`);
      });
      assert(Array.isArray(f.presentaciones) && f.presentaciones.length,
        `'${f.id}' no declara presentaciones: sin ellas no se puede pasar de mg a mL`);
      assert(Array.isArray(f.dosis) && f.dosis.length, `'${f.id}' no tiene ninguna linea de dosis`);
    });
  });

  test('Pediatría: los id de fármaco no se repiten', () => {
    const ids = pedia.farmacos.map(f => f.id);
    assertEqual(ids.filter((v, i) => ids.indexOf(v) !== i), [], 'hay id de farmaco repetidos');
  });

  test('Pediatría: cada clase existe y ninguna clase declarada se queda vacía', () => {
    const declaradas = pedia.grupos.map(g => g.id);
    pedia.farmacos.forEach(f => assert(declaradas.includes(f.grupo),
      `'${f.id}' dice ser de la clase '${f.grupo}', que no esta declarada`));
    // En los dos sentidos: una clase sin miembros pinta un acordeon vacio.
    pedia.grupos.forEach(g => assert(pedia.farmacos.some(f => f.grupo === g.id),
      `la clase '${g.id}' no tiene ningun farmaco`));
  });

  test('Pediatría: cada área existe y ninguna área declarada se queda vacía', () => {
    const declaradas = pedia.areas.map(a => a.id);
    pedia.indicaciones.forEach(i => assert(declaradas.includes(i.area),
      `el cuadro '${i.id}' dice ser del area '${i.area}', que no esta declarada`));
    pedia.areas.forEach(a => assert(pedia.indicaciones.some(i => i.area === a.id),
      `el area '${a.id}' no tiene ningun cuadro`));
  });

  test('Pediatría: cada cuadro tiene nombre, área y contexto', () => {
    const ids = pedia.indicaciones.map(i => i.id);
    assertEqual(ids.filter((v, i) => ids.indexOf(v) !== i), [], 'hay id de cuadro repetidos');
    pedia.indicaciones.forEach(i => {
      ['nombre', 'area', 'contexto'].forEach(k => assert(i[k] && String(i[k]).trim(),
        `el cuadro '${i.id}' no tiene '${k}'`));
      // `contexto` es lo que impide que la lista se lea como "estos farmacos tratan esto, elige
      // uno". Una frase de tres palabras no dice a que paciente aplica y a cual no.
      assert(i.contexto.length >= 40, `el contexto de '${i.id}' es demasiado corto para acotar nada`);
    });
  });

  test('Pediatría: cada presentación declara su concentración y la dice en la etiqueta', () => {
    pedia.farmacos.forEach(f => f.presentaciones.forEach(p => {
      assert(p.id && p.etiqueta, `una presentacion de '${f.id}' no tiene id o etiqueta`);
      assert(typeof p.mg === 'number' && p.mg > 0, `la presentacion '${p.id}' de '${f.id}' no declara mg`);
      assert(p.mL === null || (typeof p.mL === 'number' && p.mL > 0),
        `la presentacion '${p.id}' de '${f.id}' tiene un mL que no es ni null ni positivo`);
      // La etiqueta se pinta junto a cada volumen calculado: si no dice la concentracion, el
      // volumen no se puede comprobar contra el frasco.
      assert(p.etiqueta.includes(String(p.mg)),
        `la etiqueta de '${p.id}' (${f.id}) no menciona sus ${p.mg} mg`);
      if (p.mL !== null) assert(/mL/.test(p.etiqueta),
        `la etiqueta de '${p.id}' (${f.id}) es liquida pero no dice mL`);
    }));
  });

  /* ---- Las líneas de dosis ---- */
  test('Pediatría: toda línea declara indicaciones[] como array no vacío', () => {
    todasLasLineas.forEach(([f, d]) => {
      assert(Array.isArray(d.indicaciones) && d.indicaciones.length,
        `una linea de '${f.id}' no declara a que cuadros aplica`);
    });
  });

  test('Pediatría: cada cuadro citado por una línea existe en la taxonomía', () => {
    const ids = new Set(pedia.indicaciones.map(i => i.id));
    todasLasLineas.forEach(([f, d]) => d.indicaciones.forEach(i => assert(ids.has(i),
      `'${f.id}' cita el cuadro '${i}', que no existe`)));
  });

  test('Pediatría: cada cuadro declarado lo cita al menos una línea de dosis', () => {
    // El otro sentido, y es el que hace fiable la vista derivada: un cuadro huerfano es una
    // enfermedad que el residente abre y encuentra vacia.
    pedia.indicaciones.forEach(i => assert(pedEnfVista.farmacosDeCuadro(i.id).length,
      `el cuadro '${i.id}' no tiene ningun farmaco: se abriria vacio`));
  });

  test('Pediatría: cada línea trae una sola forma de dosificar: por peso, fija o en infusión', () => {
    todasLasLineas.forEach(([f, d]) => {
      // Tres formas, y exactamente una por linea: la dosis por kilo, la fija que no se
      // multiplica por el peso, y la infusion continua, que no se mide en masa sino en masa por
      // tiempo. Una linea con dos seria dos indicaciones distintas escritas como una.
      const formas = [!!d.mgkg, !!d.fija, !!d.infusion].filter(Boolean).length;
      assertEqual(formas, 1, `una linea de '${f.id}' declara ${formas} formas de dosificar, y debe declarar 1`);
      if (d.infusion) {
        assert(pedDosis.UNIDADES_INFUSION[d.infusion.unidad],
          `la infusion de '${f.id}' usa la unidad '${d.infusion.unidad}', que no esta declarada`);
      }
      const v = d.mgkg || d.fija || d.infusion;
      const tieneValor = typeof v.valor === 'number';
      const tieneRango = typeof v.min === 'number' && typeof v.max === 'number';
      assert(tieneValor !== tieneRango, `una linea de '${f.id}' no trae ni un valor ni un rango, o trae los dos`);
      if (tieneRango) assert(v.min < v.max, `una linea de '${f.id}' tiene un rango con min >= max`);
    });
  });

  test('Pediatría: toda dosis por peso declara su base, dosis o día', () => {
    todasLasLineas.filter(([, d]) => d.mgkg).forEach(([f, d]) => {
      assert(d.mgkg.por === 'dosis' || d.mgkg.por === 'dia',
        `una linea de '${f.id}' no dice si los mg/kg son por dosis o por dia: es el error de factor 3 o 4 mas repetido de la pediatria`);
    });
  });

  test('Pediatría: toda línea por día declara el intervalo, y el intervalo divide a 24', () => {
    todasLasLineas.forEach(([f, d]) => {
      if (d.mgkg && d.mgkg.por === 'dia') {
        assert(typeof d.cada === 'number', `una linea de '${f.id}' da mg/kg/dia sin intervalo: no se puede repartir`);
      }
      if (typeof d.cada === 'number') {
        // Lista declarada, no formula. Los intervalos neonatales no siguen ninguna regla
        // aritmetica: NeoFax pauta la amikacina del prematuro cada 42, cada 30 y cada 20 h, y la
        // vancomicina cada 18. Una formula que los aceptara aceptaria tambien un 'cada 7'. Al
        // anadir un intervalo nuevo hay que ponerlo aqui, que es justamente el punto.
        assert(INTERVALOS.includes(d.cada),
          `una linea de '${f.id}' tiene un intervalo de ${d.cada} h, que no esta en la lista de intervalos reales`);
        // Y una dosis POR DIA no se puede repartir en un intervalo de mas de 24 h: no hay
        // "total diario" que repartir entre media toma.
        if (d.mgkg && d.mgkg.por === 'dia') assert(d.cada <= 24,
          `una linea de '${f.id}' da mg/kg/dia con un intervalo de ${d.cada} h, que es mas de un dia`);
      }
      // La infusion continua no lleva intervalo ni es dosis unica: es continua, y exigirle
      // cualquiera de las dos cosas seria describirla mal.
      assert(typeof d.cada === 'number' || d.unica === true || !!d.infusion,
        `una linea de '${f.id}' no dice ni cada cuanto, ni que sea dosis unica, ni que sea una infusion`);
      if (d.infusion) assert(typeof d.cada !== 'number',
        `la infusion de '${f.id}' declara un intervalo: una infusion continua no tiene intervalo`);
    });
  });

  test('Pediatría: la vía de cada línea es una de las declaradas', () => {
    todasLasLineas.forEach(([f, d]) => assert(d.via && pedDosis.VIAS[d.via],
      `una linea de '${f.id}' tiene la via '${d.via}', que no esta en VIAS`));
  });

  test('Pediatría: los techos son positivos y el de la toma no supera al del día', () => {
    todasLasLineas.forEach(([f, d]) => {
      ['maxDosis', 'maxDia', 'maxMgkgDosis', 'maxMgkgDia'].forEach(k => {
        if (d[k] !== undefined) assert(typeof d[k] === 'number' && d[k] > 0,
          `'${f.id}' tiene un ${k} que no es un numero positivo`);
      });
      if (typeof d.maxDosis === 'number' && typeof d.maxDia === 'number') {
        assert(d.maxDosis <= d.maxDia, `'${f.id}' tiene un techo por toma mayor que el del dia`);
      }
    });
  });

  test('Pediatría: las franjas son coherentes y ninguna línea mezcla dos ejes', () => {
    todasLasLineas.forEach(([f, d]) => {
      [['edadMin', 'edadMax'], ['egMin', 'egMax'], ['pmaMin', 'pmaMax'],
       ['pesoMin', 'pesoMax'], ['pesoNacMin', 'pesoNacMax']].forEach(([lo, hi]) => {
        if (typeof d[lo] === 'number' && typeof d[hi] === 'number') {
          assert(d[lo] < d[hi], `'${f.id}' tiene una franja con ${lo} >= ${hi}`);
        }
      });
      // Combinar edad gestacional (o posmenstrual) con dias de vida SI esta permitido, y es lo
      // que piden las tablas de NeoFax: "34 semanas o menos Y 7 dias de vida o menos" es una
      // casilla suya. Lo que no puede coexistir son las dos lecturas de "semanas": la
      // gestacional al nacer, que no cambia, y la posmenstrual, que crece cada dia. Una linea
      // que declarara las dos estaria diciendo dos cosas distintas con la misma palabra.
      const tieneEg = typeof d.egMin === 'number' || typeof d.egMax === 'number';
      const tienePma = typeof d.pmaMin === 'number' || typeof d.pmaMax === 'number';
      assert(!(tieneEg && tienePma),
        `'${f.id}' acota a la vez por edad gestacional al nacer y por edad posmenstrual: son dos cosas distintas y la linea no dice cual manda`);
    });
  });

  /* ---- Las fuentes ---- */
  test('Pediatría: cada línea declara evidencia y una fuente con página', () => {
    todasLasLineas.forEach(([f, d]) => {
      assert(pedia.EVIDENCIA[d.evidencia], `una linea de '${f.id}' tiene la evidencia '${d.evidencia}', que no existe`);
      assert(d.fuente && pedia.FUENTES[d.fuente.ref],
        `una linea de '${f.id}' cita una fuente que no esta declarada`);
      assert(Number.isInteger(d.fuente.pagina) && d.fuente.pagina > 0,
        `una linea de '${f.id}' no dice en que pagina se leyo: sin pagina el dato no es comprobable`);
    });
  });

  test('Pediatría: la evidencia concuerda con lo que su fuente puede respaldar', () => {
    todasLasLineas.forEach(([f, d]) => {
      const fuente = pedia.FUENTES[d.fuente.ref];
      assert(fuente.autoridad === d.evidencia,
        `'${f.id}' marca la linea como '${d.evidencia}' citando a ${d.fuente.ref}, cuya autoridad es '${fuente.autoridad}'`);
      if (d.evidencia === 'guia') {
        assert(/\b(19|20)\d{2}\b/.test(fuente.cita),
          `la fuente ${d.fuente.ref} se presenta como guia pero su cita no lleva ano`);
      }
      // Lo mismo que vigila VPO: decir "practica estandar" no es citar una fuente.
      assert(!/pr[áa]ctica\s+est[áa]ndar/i.test(fuente.cita),
        `la cita de ${d.fuente.ref} invoca una "practica estandar" en vez de una fuente`);
    });
  });

  test('Pediatría: ninguna línea ordena el tratamiento sin una guía detrás', () => {
    // La prueba mas importante del bloque. Ninguna de las fuentes de esta seccion es una guia de
    // tratamiento: son manuales de dosificacion, dicen cuanto y no que primero. Marcar una linea
    // como primera eleccion citando un manual le atribuye una recomendacion que no hace, y quien
    // abre un cuadro y lee "primera linea" lo prescribe.
    todasLasLineas.forEach(([f, d]) => {
      if (d.linea === undefined) return;
      assert(d.fuenteLinea && pedia.FUENTES[d.fuenteLinea.ref],
        `'${f.id}' declara un orden de eleccion sin 'fuenteLinea'`);
      const fl = pedia.FUENTES[d.fuenteLinea.ref];
      assert(fl.autoridad === 'guia',
        `'${f.id}' apoya un orden de eleccion en ${d.fuenteLinea.ref}, que no es una guia de tratamiento`);
      assert(/\b(19|20)\d{2}\b/.test(fl.cita),
        `la guia que ordena el tratamiento de '${f.id}' no lleva ano`);
    });
  });

  test('Pediatría: las tablas neonatales por edad posmenstrual no dejan huecos ni se solapan', () => {
    /* Esta prueba nace de un defecto real. Las bandas de NeoFax estan escritas en semanas
       CUMPLIDAS ("29 semanas o menos", "30 a 36"), y la edad posmenstrual se calculaba con
       decimales: un nino de 1.4 kg y 20 dias nacido a las 27 semanas daba 29.86 semanas y no
       caia en ninguna de las dos. La vancomicina no le mostraba ni una linea de dosis, que es
       exactamente el fallo que una tabla de dosificacion no se puede permitir: no avisa, solo
       deja la pantalla vacia.

       Se barre la rejilla entera de cada tabla declarada y se exige UNA linea en cada casilla.
       Ni cero (hueco) ni dos (solape, que en el borde de banda pintaria dos dosis distintas y
       contradictorias para el mismo nino). */
    const TABLAS = [
      ['gentamicina',  'sepsis-neonatal-precoz', 'iv'],
      ['vancomicina',  'sepsis-neonatal-tardia', 'iv'],
      ['metronidazol', 'infeccion-anaerobios',   'iv'],
      ['clindamicina', 'infeccion-anaerobios',   'iv'],
      ['aciclovir',    'herpes-neonatal',        'iv']
    ];
    TABLAS.forEach(([idFarmaco, idCuadro, via]) => {
      const f = pedia.farmacos.find(x => x.id === idFarmaco);
      assert(f, `no existe el farmaco '${idFarmaco}'`);
      const lineas = f.dosis.filter(d => d.via === via && d.indicaciones.includes(idCuadro)
        && (typeof d.pmaMin === 'number' || typeof d.pmaMax === 'number'));
      assert(lineas.length, `'${idFarmaco}' no tiene tabla por edad posmenstrual para '${idCuadro}'`);
      for (let pma = 24; pma <= 46; pma++) {
        for (let dias = 0; dias <= 28; dias++) {
          // El peso va dentro de cualquier banda razonable: aqui lo que se barre es el tiempo.
          const paciente = { pma, edadDias: dias, peso: 2, eg: pma - Math.floor(dias / 7) };
          const aplican = lineas.filter(d => pedDosis.lineaAplica(d, paciente) === true);
          assertEqual(aplican.length, 1,
            `'${idFarmaco}' con ${pma} semanas de edad posmenstrual y ${dias} dias de vida tiene ${aplican.length} lineas, y deberia tener exactamente 1`);
        }
      }
    });
  });

  test('Pediatría: toda dosis que alcanza a un recién nacido cita una fuente neonatal', () => {
    /* La regla mas importante del bloque, y es decision del autor: un paciente de 28 dias o
       menos se dosifica desde NeoFax, o desde el Harriet Lane donde NeoFax no trae monografia.
       El Taketomo es un manual de dosificacion general excelente y trae "Dosificacion neonatal"
       en muchas monografias, pero aqui no vale para el recien nacido.

       Mecanicamente: una linea alcanza al neonato salvo que declare `edadMin` de 29 dias o mas.
       Por eso cada linea que NO es neonatal lleva ese `edadMin: 29` explicito: asi no hay dosis
       que llegue a un recien nacido por descuido, que es justo lo que pasaria si el campo se
       pudiera omitir. */
    todasLasLineas.forEach(([f, d]) => {
      const excluyeNeonato = typeof d.edadMin === 'number' && d.edadMin >= 29;
      if (excluyeNeonato) return;
      const fuente = pedia.FUENTES[d.fuente.ref];
      assert(fuente.neonatal,
        `'${f.id}' tiene una linea que alcanza a un recien nacido citando ${d.fuente.ref}, que no es fuente neonatal: ponle edadMin 29 o resiembra la dosis desde NeoFax`);
    });
  });

  test('Pediatría: el fármaco sin dosis neonatal lo dice, y ninguna de sus líneas alcanza al recién nacido', () => {
    // Cefalexina y dexametasona no tienen monografia neonatal en ninguna de las dos fuentes
    // neonatales. Eso no se resuelve en silencio: el farmaco lo declara y la ficha lo pinta
    // arriba, antes que las dosis.
    pedia.farmacos.forEach(f => {
      const alcanzaAlguna = (f.dosis || []).some(d => !(typeof d.edadMin === 'number' && d.edadMin >= 29));
      if (f.sinNeonatal) {
        assert(!alcanzaAlguna,
          `'${f.id}' dice no tener dosis neonatal pero alguna de sus lineas alcanza al recien nacido`);
        assert(f.sinNeonatal.length >= 40, `el aviso de '${f.id}' no explica donde buscarla`);
      } else {
        assert(alcanzaAlguna,
          `'${f.id}' no tiene ninguna linea para el recien nacido y tampoco declara 'sinNeonatal': di de donde falta la dosis`);
      }
    });
  });

  test('Pediatría: la dosis de carga trae un valor o un rango, y es mayor que la de mantenimiento', () => {
    todasLasLineas.filter(([, d]) => d.carga).forEach(([f, d]) => {
      const c = d.carga;
      const tieneValor = typeof c.valor === 'number';
      const tieneRango = typeof c.min === 'number' && typeof c.max === 'number';
      assert(tieneValor !== tieneRango, `la carga de '${f.id}' no trae ni un valor ni un rango, o trae los dos`);
      const alto = tieneValor ? c.valor : c.max;
      assert(alto > 0, `la carga de '${f.id}' no es positiva`);
      // Una carga que no supera a la de mantenimiento no es una carga: o esta mal escrita, o
      // sobra. Se compara contra el mantenimiento por TOMA, que es lo comparable.
      if (d.mgkg && d.mgkg.por === 'dosis') {
        const mant = typeof d.mgkg.valor === 'number' ? d.mgkg.valor : d.mgkg.max;
        assert(alto >= mant, `la carga de '${f.id}' (${alto}) no supera a su mantenimiento por toma (${mant})`);
      }
    });
  });

  test('Pediatría: toda fuente declarada la cita alguna línea', () => {
    // Una fuente declarada y no usada es una fuente que nadie comprobo.
    const usadas = new Set(todasLasLineas.map(([, d]) => d.fuente.ref));
    Object.keys(pedia.FUENTES).forEach(ref => assert(usadas.has(ref),
      `la fuente '${ref}' esta declarada pero no la cita ninguna linea`));
  });

  /* ---- La aritmética (engine/pediatria-dosis.js, puro) ---- */
  test('Pediatría dosis: redondearVolumen usa el paso de jeringa que corresponde', () => {
    assertEqual(Math.round(pedDosis.redondearVolumen(0.834) * 1000) / 1000, 0.83, 'por debajo de 1 mL, paso de 0.01');
    assertEqual(Math.round(pedDosis.redondearVolumen(7.46) * 100) / 100, 7.5, 'entre 1 y 10 mL, paso de 0.1');
    assertEqual(Math.round(pedDosis.redondearVolumen(12.3) * 100) / 100, 12.5, 'por encima de 10 mL, paso de 0.5');
    assertEqual(pedDosis.redondearVolumen(0), 0);
    assertEqual(pedDosis.redondearVolumen(-3), 0);
    assertEqual(pedDosis.redondearVolumen('hola'), 0);
  });

  test('Pediatría dosis: los mg que se muestran son los que entrega el volumen redondeado', () => {
    // Si se redondea el volumen y no los mg, lo que queda impreso es una contradiccion: pide un
    // volumen que la jeringa no puede medir y afirma unos mg que ese volumen no entrega.
    const amox = pedia.farmacos.find(f => f.id === 'amoxicilina');
    const pres = amox.presentaciones.find(p => p.id === 'susp-250');
    const r = pedDosis.calcularDosis(amox.dosis[0], { peso: 12.4 }, pres);
    const porML = pres.mg / pres.mL;
    assertEqual(Math.round(r.volumen.mg * 1000) / 1000, Math.round(r.volumen.mL * porML * 1000) / 1000,
      'los mg impresos no son los del volumen redondeado');
  });

  test('Pediatría dosis: el tope de adulto se aplica y se puede explicar', () => {
    const aceta = pedia.farmacos.find(f => f.id === 'acetaminofen');
    const r = pedDosis.calcularDosis(aceta.dosis[0], { peso: 70 }, null);
    assertEqual(r.dosis.max, 1000, 'el techo de 1 g por toma no se aplico');
    assertEqual(r.topeMordio, 'dosis');
    assert(Math.abs(r.mgkgReal.max - 1000 / 70) < 1e-9, 'el mg/kg efectivo tras el tope no cuadra');
    assert(r.sinTope && Math.abs(r.sinTope.dosis.max - 15 * 70) < 1e-9,
      'no se conserva lo que habria dado la aritmetica sin topar');
  });

  test('Pediatría dosis: el techo por peso acota donde el absoluto no llega', () => {
    // El prematuro: el techo de NeoFax para el acetaminofen IV de 28 a 32 semanas es de
    // 40 mg/kg/dia, que sobre 1.2 kg son 48 mg. Esta tan lejos de cualquier techo absoluto que,
    // si solo existiera el techo en mg, el recien nacido se quedaria practicamente sin techo.
    const aceta = pedia.farmacos.find(f => f.id === 'acetaminofen');
    const neo = aceta.dosis.find(d => d.maxMgkgDia === 40);
    assert(neo, 'se esperaba la linea neonatal de NeoFax con techo de 40 mg/kg/dia');
    assertEqual(neo.fuente.ref, 'NEOFAX', 'esa linea deberia venir de NeoFax');
    const r = pedDosis.calcularDosis(neo, { peso: 1.2 }, null);
    assert(r.topes.dia !== null && Math.abs(r.topes.dia - 40 * 1.2) < 1e-9,
      'el techo por peso no se convirtio a mg para este nino');
    assertEqual(r.topes.diaDe, 'mgkg');
  });

  test('Pediatría dosis: redondear nunca cruza el techo', () => {
    const linea = { mgkg: { valor: 100, por: 'dosis' }, cada: 6, via: 'oral', maxDosis: 101 };
    const pres = { id: 'x', etiqueta: 'jarabe 100 mg/5 mL', mg: 100, mL: 5 };
    const r = pedDosis.calcularDosis(linea, { peso: 1 }, pres);
    assert(r.volumen.mg <= 101 + 1e-6,
      `el volumen redondeado entrega ${r.volumen.mg} mg y el techo es 101: un techo que se salta al redondear no es un techo`);
  });

  test('Pediatría dosis: sin peso devuelve null y no inventa un número', () => {
    const amox = pedia.farmacos.find(f => f.id === 'amoxicilina');
    assertEqual(pedDosis.calcularDosis(amox.dosis[0], {}, null), null);
    assertEqual(pedDosis.calcularDosis(amox.dosis[0], { peso: null }, null), null);
  });

  test('Pediatría dosis: un peso imposible se rechaza en vez de calcularse', () => {
    const amox = pedia.farmacos.find(f => f.id === 'amoxicilina');
    [0, -5, 0.1, 400, NaN, '70'].forEach(peso => assertEqual(
      pedDosis.calcularDosis(amox.dosis[0], { peso }, null), null, `acepto un peso de ${peso}`));
  });

  test('Pediatría dosis: una dosis fija se resuelve sin peso', () => {
    // Las dos dosis que hay que poner con mas prisa, la del autoinyector de adrenalina por tramos
    // de peso y la de adulto del adolescente, son fijas: exigir ficha para darlas seria absurdo.
    const cef = pedia.farmacos.find(f => f.id === 'ceftriaxona');
    const fija = cef.dosis.find(d => d.fija);
    assert(fija, 'se esperaba una linea de dosis fija en ceftriaxona');
    const r = pedDosis.calcularDosis(fija, {}, null);
    assert(r && r.dosis.max === fija.fija.valor, 'la dosis fija no se resolvio sin peso');
    assertEqual(r.porPeso, false);
  });

  test('Pediatría dosis: un volumen que no se puede medir se avisa y no se imprime', () => {
    const adr = pedia.farmacos.find(f => f.id === 'adrenalina');
    const pres = adr.presentaciones.find(p => p.id === 'amp-1000');
    const r = pedDosis.calcularDosis(adr.dosis[0], { peso: 0.5 }, pres);
    assertEqual(r.volumen, null, 'imprimio un volumen por debajo de la marca mas pequena de la jeringa');
    assert(r.avisos.some(a => /diluir/.test(a)), 'no aviso de que hay que diluir');
  });

  test('Pediatría dosis: lineaAplica responde sin-dato cuando falta la edad, nunca false', () => {
    // Esconder una dosis por un dato que nadie pidio es una dosis que el residente no llego a ver.
    const amox = pedia.farmacos.find(f => f.id === 'amoxicilina');
    const conFranja = amox.dosis.find(d => typeof d.edadMin === 'number');
    assertEqual(pedDosis.lineaAplica(conFranja, {}), 'sin-dato');
    assertEqual(pedDosis.lineaAplica(conFranja, { edadDias: 1 }), false);
    assertEqual(pedDosis.lineaAplica(conFranja, { edadDias: 1000 }), true);
  });

  test('Pediatría dosis: la edad se convierte igual venga en días, meses o años', () => {
    assertEqual(pedDosis.aDias(10, 'd'), 10);
    assert(Math.abs(pedDosis.aDias(3, 'm') - 3 * pedDosis.DIAS_POR_MES) < 1e-9);
    assert(Math.abs(pedDosis.aDias(2, 'a') - 2 * pedDosis.DIAS_POR_ANO) < 1e-9);
    assertEqual(pedDosis.aDias(-1, 'd'), null);
    assertEqual(pedDosis.aDias(3, 'semanas'), null);
    // Tres meses no son tres dias: es la conversion que decide que linea de dosis aplica.
    assert(pedDosis.aDias(3, 'm') > 85 && pedDosis.aDias(3, 'm') < 95);
  });

  test('Pediatría dosis: ninguna línea de ningún fármaco revienta el cálculo', () => {
    const pesos = [3.2, 12.4, 28, 60];
    todasLasLineas.forEach(([f, d]) => {
      f.presentaciones.forEach(p => pesos.forEach(peso => {
        const r = pedDosis.calcularDosis(d, { peso }, p);
        if (!r) return;
        [r.dosis.min, r.dosis.max].forEach(v => assert(isFinite(v) && v > 0,
          `'${f.id}' con ${peso} kg da una dosis que no es un numero positivo`));
        if (typeof d.maxDosis === 'number') assert(r.dosis.max <= d.maxDosis + 1e-6,
          `'${f.id}' con ${peso} kg se pasa de su techo por toma`);
        if (r.volumen) assert(isFinite(r.volumen.mL) && r.volumen.mL > 0,
          `'${f.id}' con ${peso} kg y ${p.id} da un volumen que no es un numero positivo`);
      }));
    });
  });

  test('Pediatría dosis: la infusión convierte bien de dosis a ritmo de bomba', () => {
    /* La formula es la estandar de goteo, la misma que engine/infusion-calc.js dejo verificada
       contra la hoja de calculo del autor:
         por minuto:  mL/h = dosis x peso x 60 / concentracion
         por hora:    mL/h = dosis x peso / concentracion
       Lo que hay que vigilar es la UNIDAD de la concentracion: las presentaciones estan en mg/mL
       y las infusiones de vasoactivos en microgramos, asi que falta un factor de 1000 que, si se
       olvida, da un ritmo mil veces mayor. */
    const mida = pedia.farmacos.find(f => f.id === 'midazolam');
    const uno = mida.presentaciones.find(p => p.id === 'amp-1');   // 1 mg/mL

    // Estado epileptico: 1 mcg/kg/min en un nino de 20 kg con dilucion de 1 mg/mL.
    // 1 x 20 x 60 = 1200 mcg/h, y a 1000 mcg/mL son 1.2 mL/h.
    const est = mida.dosis.find(d => d.infusion && d.infusion.unidad === 'mcg/kg/min');
    const r1 = pedDosis.calcularDosis(est, { peso: 20, edadDias: 2000 }, uno);
    assert(r1 && r1.esInfusion, 'no se resolvio como infusion');
    assertEqual(Math.round(r1.masaHora.min), 1200, 'los mcg/h no cuadran');
    assertEqual(r1.ritmo.min, 1.2, 'el ritmo de bomba no cuadra con la formula de goteo');

    // Sedacion neonatal: 0.02 mg/kg/h en 1.4 kg con 1 mg/mL -> 0.028 mg/h -> 0.03 mL/h.
    const neo = mida.dosis.find(d => d.infusion && d.infusion.unidad === 'mg/kg/h' && d.infusion.min === 0.02);
    const r2 = pedDosis.calcularDosis(neo, { peso: 1.4, eg: 28, edadDias: 5 }, uno);
    assert(Math.abs(r2.masaHora.min - 0.028) < 1e-9, 'los mg/h no cuadran');
    assertEqual(r2.ritmo.min, 0.03, 'el ritmo neonatal no cuadra');
  });

  test('Pediatría dosis: una infusión sin peso no inventa un ritmo', () => {
    const mida = pedia.farmacos.find(f => f.id === 'midazolam');
    const est = mida.dosis.find(d => d.infusion);
    assertEqual(pedDosis.calcularDosis(est, {}, mida.presentaciones[0]), null);
    assertEqual(pedDosis.calcularDosis(est, { peso: 400 }, mida.presentaciones[0]), null);
  });

  test('Pediatría dosis: un ritmo que la bomba no puede programar se avisa y no se imprime', () => {
    // Por debajo de 0.01 mL/h no hay bomba que lo entregue: decirlo es mas util que imprimir un
    // numero que nadie puede poner.
    const linea = { infusion: { valor: 0.02, unidad: 'mg/kg/h' }, via: 'iv' };
    const concentrada = { id: 'x', etiqueta: 'concentrada 50 mg/mL', mg: 50, mL: 1 };
    const r = pedDosis.calcularDosis(linea, { peso: 1 }, concentrada);
    assertEqual(r.ritmo, null, 'imprimio un ritmo que la bomba no puede programar');
    assert(r.avisos.some(a => /bomba|diluid/i.test(a)), 'no aviso de que hay que diluir mas');
  });

  test('Pediatría dosis: redondearRitmo trabaja a la centésima de mL/h', () => {
    // Las bombas neonatales llegan a 0.01 mL/h, y redondear a la decima convertiria 0.028 en
    // cero o en el doble.
    assertEqual(pedDosis.redondearRitmo(0.028), 0.03);
    assertEqual(pedDosis.redondearRitmo(1.234), 1.23);
    assertEqual(pedDosis.redondearRitmo(0), 0);
    assertEqual(pedDosis.redondearRitmo(-1), 0);
  });

  /* ---- El pintado (solo existe al pintar, así que probar los datos no lo cubre) ---- */
  test('Pediatría: la lista encuentra un fármaco por su alias, su clase y su vía', () => {
    const nombres = q => [...pedFarmVista.listaFarmacosPediaHTML(q)
      .matchAll(/class="vpo-drug-name">([^<]+)</g)].map(m => m[1]);
    assert(nombres('amoxi').includes('Amoxicilina'), 'el alias "amoxi" no encuentra la amoxicilina');
    assert(nombres('epinefrina').includes('Adrenalina'), 'el alias "epinefrina" no encuentra la adrenalina');
    assert(nombres('antibiotico').includes('Azitromicina'),
      'buscar "antibiotico" deja fuera a los macrolidos: la palabra tiene que estar en la etiqueta de la clase');
    // La via solo vive en el chip de la fila: si no entra en el pajar, buscarla devuelve cero
    // teniendola delante. Es el mismo defecto que dejo documentado la lista de VPO.
    assert(nombres('nebulizada').includes('Salbutamol'), 'buscar por via no encuentra nada');
    assert(nombres('otitis').includes('Amoxicilina'), 'no se puede buscar por enfermedad desde la pestana de farmacos');
  });

  test('Pediatría: la lista por enfermedad encuentra un cuadro por el fármaco que lo trata', () => {
    const nombres = q => [...pedEnfVista.listaCuadrosPediaHTML(q)
      .matchAll(/class="vpo-drug-name">([^<]+)</g)].map(m => m[1]);
    assert(nombres('ceftriaxona').length, 'buscar un farmaco en la pestana por enfermedad no devuelve sus cuadros');
    assert(nombres('OMA').includes('Otitis media aguda'), 'el alias de un cuadro no lo encuentra');
  });

  test('Pediatría: la ficha nombra la presentación en cada volumen, y repite el peso usado', () => {
    const previo = syncGet('rm:pedia:paciente', {});
    try {
      syncSet('rm:pedia:paciente', { peso: '12.4', edad: '3', edadUnidad: 'a' });
      const amox = pedia.farmacos.find(f => f.id === 'amoxicilina');
      const html = pedVista.lineaHTML(amox.dosis[0], amox);
      const pres = pedVista.presentacionElegida(amox);
      assert(html.includes('Con 12.4 kg'),
        'la linea no repite el peso que uso: es la defensa principal contra el error de factor diez');
      // Ni un mililitro suelto: 5 mL de 125 mg/5 mL y 5 mL de 250 mg/5 mL se ven igual en la jeringa.
      const bloqueVol = (html.match(/<div class="pedia-calc-vol">(.*?)<\/div>/) || [])[1] || '';
      assert(bloqueVol.includes('mL'), 'no se pinto el volumen');
      assert(bloqueVol.includes(pres.etiqueta),
        'hay un volumen en pantalla sin decir de que presentacion sale');
      assert(/al día/.test(html), 'no se imprimen las dos lecturas, por toma y por dia');
    } finally {
      syncSet('rm:pedia:paciente', previo);
    }
  });

  test('Pediatría: sin peso no se pinta ningún número calculado', () => {
    const previo = syncGet('rm:pedia:paciente', {});
    try {
      syncSet('rm:pedia:paciente', {});
      const amox = pedia.farmacos.find(f => f.id === 'amoxicilina');
      const html = pedVista.lineaHTML(amox.dosis[0], amox);
      assert(!/pedia-calc/.test(html), 'pinto un bloque de calculo sin peso en la ficha');
      // Pero el dato crudo sigue estando: la seccion es un libro de consulta antes que una
      // calculadora, y sin peso tiene que seguir siendo util.
      assert(/mg\/kg/.test(html), 'sin peso desaparecio tambien el dato del manual');
    } finally {
      syncSet('rm:pedia:paciente', previo);
    }
  });

  test('Pediatría: la vista por enfermedad no presenta un orden de elección sin fuente', () => {
    // Mientras ninguna linea declare `linea` con su guia, el cuadro tiene que decir en pantalla
    // que lo que muestra no es un orden de eleccion.
    pedia.indicaciones.forEach(i => {
      const hayOrden = pedEnfVista.farmacosDeCuadro(i.id).some(x => x.lineas.some(l => l.linea));
      if (hayOrden) return;
      const html = pedEnfVista.cuadroHTML(i.id).html;
      assert(/No es un orden de elección/.test(html),
        `el cuadro '${i.id}' lista farmacos sin decir que no es un orden de eleccion`);
      // Y el contexto se pinta siempre, encima de la lista: es lo que dice a que paciente aplica.
      const cuadro = pedia.indicaciones.find(x => x.id === i.id);
      assert(html.includes(cuadro.contexto), `el cuadro '${i.id}' no pinta su contexto`);
    });
  });

  test('Pediatría: el peso del niño no se comparte con el de la valoración preoperatoria', () => {
    // Quien valora a un adulto de 70 kg y luego consulta una dosis pediatrica no debe heredar
    // ese peso. Son claves distintas a proposito.
    const previoVpo = syncGet('rm:vpo:paciente', {});
    const previoPed = syncGet('rm:pedia:paciente', {});
    try {
      syncSet('rm:vpo:paciente', { peso: '70' });
      syncSet('rm:pedia:paciente', {});
      assertEqual(pedFicha.pacientePedia().peso, null,
        'el peso de la valoracion preoperatoria se colo en la seccion de pediatria');
    } finally {
      syncSet('rm:vpo:paciente', previoVpo);
      syncSet('rm:pedia:paciente', previoPed);
    }
  });

  /* ---- Trinquete de contenido ---- */
  test('Pediatría: el catálogo no se encoge', () => {
    assert(pedia.farmacos.length >= PEDIA_FARMACOS_MINIMO,
      `hay ${pedia.farmacos.length} farmacos y la marca esta en ${PEDIA_FARMACOS_MINIMO}`);
    assert(todasLasLineas.length >= PEDIA_LINEAS_MINIMO,
      `hay ${todasLasLineas.length} lineas de dosis y la marca esta en ${PEDIA_LINEAS_MINIMO}`);
    assert(pedia.indicaciones.length >= PEDIA_CUADROS_MINIMO,
      `hay ${pedia.indicaciones.length} cuadros y la marca esta en ${PEDIA_CUADROS_MINIMO}`);
  });

  test('Pediatría: los cuadros declarados completos siguen completos', () => {
    PEDIA_CUADROS_COMPLETOS.forEach(id => {
      assert(pedia.indicaciones.some(i => i.id === id), `el cuadro completo '${id}' ya no existe`);
      const encontrados = pedEnfVista.farmacosDeCuadro(id);
      assert(encontrados.length, `el cuadro completo '${id}' se quedo sin farmacos`);
      encontrados.forEach(({ farmaco, lineas }) => lineas.forEach(l => {
        assert(l.fuente && l.fuente.ref && l.fuente.pagina,
          `una linea de '${farmaco.id}' en el cuadro completo '${id}' perdio su fuente`);
      }));
    });
  });

  // Las escalas que VPO enlaza de otros temas se resuelven aquí, fuera del test: el runner es
  // síncrono y una promesa rechazada dentro de un test() pasaría inadvertida.
  const vpoEngineLinks = await import('./engine/vpo.js');
  const generalesApp = (await import('./engine/general-calc.js')).generalCalculators;
  const enlacesVpo = vpoEngineLinks.ESCALAS_DE_TEMAS.filter(e => !e.general).map(e => [e.topicId, e.key]);
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

  test('VPO: ningun otro tema usa campos compartidos, que acabarian en la ficha de VPO', () => {
    // La ficha del paciente de VPO recoge TODO campo compartido que cambie, venga de donde
    // venga. Mientras solo VPO declare `shared`, no hay dato ajeno que se pueda colar; si otro
    // tema empieza a usarlos, hay que filtrar por escala igual que se hace con los resultados.
    Object.entries(temasParaColision).forEach(([id, topic]) => {
      (topic.calculators || []).forEach(c => {
        (c.fields || []).forEach(f => {
          assert(!f.shared, `el tema '${id}' comparte el campo '${f.shared}' en '${c.key}'`);
        });
      });
    });
  });

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

  test('VPO: las escalas generales que enlaza siguen existiendo entre las generales', () => {
    // CHA₂DS₂-VASc vive en engine/general-calc.js, no en un tema: openCalc la resuelve por el
    // camino de las generales. Si se vuelve a quitar de ahí, la tarjeta de VPO no abriría nada.
    vpoEngineLinks.ESCALAS_DE_TEMAS.filter(e => e.general).forEach(e => {
      assert(generalesApp.some(c => c.key === e.key),
        `VPO enlaza la escala general '${e.key}', que ya no está en general-calc.js`);
    });
  });

  test('General CHA₂DS₂-VASc: los dos puntos de la edad y del ictus, y el caso del sexo solo', () => {
    const ch = generalesApp.find(c => c.key === 'chadsvasc');
    assert(ch, 'CHA₂DS₂-VASc debería estar entre las generales');
    assertEqual(ch.compute({}).s, 0);
    assertEqual(ch.compute({ edad75: true }).s, 2, 'la edad de 75 o más vale 2');
    assertEqual(ch.compute({ acv: true }).s, 2, 'el ictus previo vale 2');
    assertEqual(ch.compute({ icc: true, hta: true, dm: true, vascular: true, edad65: true, sexo: true }).s, 6);
    assert(ch.compute({ sexo: true }).soloSexo, 'un punto solo por sexo femenino no indica anticoagular');
    assert(!ch.compute({ hta: true }).soloSexo);
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

  // La seccion VPO es ocho modulos, no uno. Las dos pruebas que siguen son las unicas de todo
  // el archivo que leen el TEXTO de un archivo en vez de importarlo: lo que vigilan es como se
  // importan unos a otros, y eso no se puede observar desde los modulos ya cargados. Se trae
  // aqui, fuera de test(), porque el runner es sincrono.
  const MODULOS_VPO = ['vpo.js', 'vpo-estado.js', 'vpo-ficha.js', 'vpo-escalas.js',
    'vpo-listas.js', 'vpo-ruta.js', 'vpo-farmacos.js', 'vpo-estudios.js', 'vpo-nota.js'];
  const fuenteVpo = {};
  for (const f of MODULOS_VPO) {
    fuenteVpo[f] = await (await fetch('./engine/' + f + '?v=' + Date.now())).text();
  }
  const swFuente = await (await fetch('./sw.js?v=' + Date.now())).text();
  const bloqueSw = nombre => (swFuente.match(new RegExp('const ' + nombre + ' = \\[([\\s\\S]*?)\\];')) || [, ''])[1];
  const listaSw = nombre => [...bloqueSw(nombre).matchAll(/'([^']+)'/g)].map(m => m[1]);
  const SHELL_SW = listaSw('SHELL');
  const CONTENT_SW = listaSw('CONTENT');
  // El registro se importa aqui con otro nombre: la desestructuracion de `registry` vive mas
  // abajo en este mismo archivo y todavia no esta inicializada en este punto.
  const { registry: registroSw } = await import('./topics/registry.js');
  const hermanosDe = f => [...fuenteVpo[f].matchAll(/from '\.\/(vpo[^']*\.js)'/g)].map(m => m[1]);

  test('VPO: los modulos de la seccion estan todos en SHELL del service worker', () => {
    // El service worker precachea SHELL de forma atomica y CONTENT con tolerancia a fallos, asi
    // que un modulo del motor que cayera en CONTENT podria quedarse sin cachear y la seccion se
    // caeria al abrir la app sin red. Al partir vpo.js en ocho, olvidar uno es el fallo facil,
    // y no se nota hasta que alguien esta sin conexion.
    MODULOS_VPO.forEach(f => assert(SHELL_SW.includes(`./engine/${f}`),
      `'engine/${f}' no esta en SHELL de sw.js: offline, la seccion VPO se rompe`));
    // Y que la lista de arriba no se quede corta: cualquier hermano que alguien importe tiene
    // que estar en ella, o esta prueba dejaria de mirarlo.
    MODULOS_VPO.forEach(f => hermanosDe(f).forEach(h => assert(MODULOS_VPO.includes(h),
      `'${f}' importa '${h}', que no esta en la lista de modulos de VPO`)));
  });


  // La sección Pediatría son nueve módulos más su archivo de datos. Igual que con VPO, estas dos
  // pruebas leen el TEXTO de los archivos en vez de importarlos: lo que vigilan es cómo se
  // importan unos a otros, y eso no se observa desde los módulos ya cargados.
  const MODULOS_PEDIA = ['pediatria.js', 'pediatria-acceso.js', 'pediatria-estado.js',
    'pediatria-ficha.js', 'pediatria-dosis.js', 'pediatria-vista.js', 'pediatria-farmacos.js',
    'pediatria-enfermedades.js'];
  const fuentePedia = {};
  for (const f of MODULOS_PEDIA) {
    fuentePedia[f] = await (await fetch('./engine/' + f + '?v=' + Date.now())).text();
  }
  const hermanosPedia = f => [...fuentePedia[f].matchAll(/from '\.\/(pediatria[^']*\.js)'/g)].map(m => m[1]);
  const fuenteIndex = await (await fetch('./index.html?v=' + Date.now())).text();
  const fuenteApp = await (await fetch('./app.js?v=' + Date.now())).text();
  const fuenteAdmin = await (await fetch('./engine/admin.js?v=' + Date.now())).text();
  const pediaEstadoFuente = await (await fetch('./engine/pediatria-estado.js?v=' + Date.now())).text();

  test('Pediatría: los módulos de la sección están todos en SHELL del service worker', () => {
    // SHELL se precachea de forma atómica y CONTENT con tolerancia a fallos: un módulo del motor
    // que cayera en CONTENT podría quedarse sin cachear y la sección se caería al abrir la app
    // sin red. Con nueve archivos, olvidar uno es el fallo fácil, y no se nota hasta que alguien
    // está sin conexión.
    MODULOS_PEDIA.forEach(f => assert(SHELL_SW.includes(`./engine/${f}`),
      `'engine/${f}' no esta en SHELL de sw.js: offline, la seccion Pediatria se rompe`));
    ['./protocols/pediatria-farmacos.js', './engine/listas-marcables.js'].forEach(u => {
      assert(SHELL_SW.includes(u), `${u} no esta en SHELL de sw.js`);
      assert(!CONTENT_SW.includes(u), `${u} no puede estar en CONTENT`);
    });
    // Y que la lista de arriba no se quede corta: cualquier hermano que alguien importe tiene que
    // estar en ella, o esta prueba dejaria de mirarlo.
    MODULOS_PEDIA.forEach(f => hermanosPedia(f).forEach(h => assert(MODULOS_PEDIA.includes(h),
      `'${f}' importa '${h}', que no esta en la lista de modulos de Pediatria`)));
  });

  test('Pediatría: las dependencias entre módulos van en una sola dirección', () => {
    // La regla del area: ninguna pestana importa a otra. Lo que las dos necesitan (la ficha del
    // nino, la aritmetica, el pintado de una linea) vive en modulos que no importan a nadie del
    // area. Cualquier otra arista es un ciclo esperando a pasar, y en modulos ES un ciclo no
    // falla al cargar: falla mas tarde, con un undefined dificil de rastrear.
    const PERMITIDO = {
      'pediatria-dosis.js': [],
      'pediatria-estado.js': [],
      'pediatria-acceso.js': [],
      'pediatria-ficha.js': ['pediatria-dosis.js', 'pediatria-estado.js'],
      'pediatria-vista.js': ['pediatria-dosis.js', 'pediatria-ficha.js'],
      'pediatria-farmacos.js': ['pediatria-dosis.js', 'pediatria-estado.js', 'pediatria-ficha.js', 'pediatria-vista.js'],
      'pediatria-enfermedades.js': ['pediatria-dosis.js', 'pediatria-estado.js', 'pediatria-ficha.js', 'pediatria-vista.js'],
      'pediatria.js': MODULOS_PEDIA.filter(f => f !== 'pediatria.js')
    };
    MODULOS_PEDIA.forEach(f => hermanosPedia(f).forEach(h => assert(PERMITIDO[f].includes(h),
      `'${f}' importa '${h}', que no esta permitido`)));
    // Nadie importa al cascaron: es la puerta de entrada de la seccion, no una pieza mas.
    MODULOS_PEDIA.filter(f => f !== 'pediatria.js').forEach(f => assert(!hermanosPedia(f).includes('pediatria.js'),
      `'${f}' importa el cascaron engine/pediatria.js`));
    // Y las dos pestanas no se conocen entre si.
    assert(!hermanosPedia('pediatria-farmacos.js').includes('pediatria-enfermedades.js')
      && !hermanosPedia('pediatria-enfermedades.js').includes('pediatria-farmacos.js'),
      'las dos pestanas de Pediatria se importan entre si');
  });

  test('Pediatría: la sección está declarada en los cuatro sitios que hacen falta', () => {
    // Una seccion son cuatro declaraciones sueltas, y olvidar una falla de una forma distinta:
    // sin la seccion en index.html el montaje no encuentra donde pintar; sin SECTION_TITLES la
    // cabecera dice "MIOsler"; sin la rama de showSection el boton no hace nada; y sin la
    // etiqueta de admin.js la tabla de uso muestra el id en crudo.
    assert(/id="sec-pediatria"/.test(fuenteIndex), 'falta la seccion sec-pediatria en index.html');
    assert(/id="pedia-root"/.test(fuenteIndex), 'falta el contenedor pedia-root en index.html');
    assert(/data-sec="pediatria"[^>]*id="nav-pediatria"/.test(fuenteIndex),
      'falta el boton del nav, o su data-sec no cuadra con su id');
    assert(/id="nav-pediatria"[^>]*style="display:none;"/.test(fuenteIndex),
      'el boton de Pediatria no nace oculto: lo veria todo el mundo hasta que app.js lo apague');
    assert(/pediatria:\s*\['Pediatría'/.test(fuenteApp), 'falta la entrada en SECTION_TITLES');
    assert(/sec === 'pediatria'/.test(fuenteApp), 'falta la rama de montaje en showSection');
    assert(/pediatria: 'Pediatría'/.test(fuenteAdmin), 'falta la etiqueta en SECTION_LABELS de admin.js');
  });

  test('Pediatría: el buscador global solo ofrece la sección a quien la ve', () => {
    // Una entrada que navega a una seccion cuya pestana esta oculta es un callejon sin salida, y
    // es la unica forma en que esta puerta de entrada se convierte en un error visible.
    assert(/if \(esPediatra\(\)\) pediaSearchEntries\(\)/.test(fuenteApp),
      'las entradas de Pediatria entran en el indice del buscador sin comprobar quien es el usuario');
    // Y el indice deja de ser el mismo para todos, asi que un cambio de sesion tiene que
    // dejarlo sin valor. Ya no se reconstruye ahi: desde que se arma bajo demanda basta con
    // olvidarlo (la promesa guardada y el indice de study-view), y la primera busqueda de la
    // persona nueva lo vuelve a pedir. Lo que no puede pasar es que siga en pie el anterior.
    const reinicio = (fuenteApp.match(/function resetSectionsForNewSession[\s\S]*?\n}/) || [''])[0];
    assert(reinicio.includes('indicePromesa = null') && reinicio.includes('resetGlobalSearch()'),
      'al cambiar de sesion no se olvida el indice: en un dispositivo compartido seguiria el de la persona anterior');
  });

  test('Pediatría: sus dos claves se fusionan como escalares, que es lo correcto para las dos', () => {
    // La seccion guarda solo dos cosas, y en las dos gana el ultimo dispositivo a proposito:
    // 'rm:pedia:tab' es una cadena, y 'rm:pedia:paciente' es un objeto que describe a UN nino.
    // Fusionarlo campo a campo entre dispositivos daria un paciente que no existe, con el peso
    // de uno y la edad de otro, que es justo el dato con el que no se puede jugar aqui.
    assertEqual(strategyFor('rm:pedia:paciente'), 'scalar');
    assertEqual(strategyFor('rm:pedia:tab'), 'scalar');
    // Y no quedan claves de la seccion sin estrategia pensada: si alguien anade una que guarde
    // un mapa acumulativo (unos favoritos, por ejemplo), tiene que declararla en strategyFor o
    // marcar en el telefono borrara lo marcado en la computadora.
    const claves = [...pediaEstadoFuente.matchAll(/'(rm:pedia:[a-z-]+)'/g)].map(m => m[1]);
    assertEqual([...new Set(claves)].sort(), ['rm:pedia:paciente', 'rm:pedia:tab'],
      'aparecio una clave nueva de Pediatria: decide su estrategia de fusion antes de usarla');
  });

  /* ---------------- Camino a la meta (engine/admin-metas.js + engine/precios.js) ----------------
     El panel de dirección del Admin. Se prueba con cohortes inventadas porque es la única forma
     de saber si cuenta bien: los datos reales viven en Firestore y aquí no hay credenciales ni
     debe haberlas. Un panel de dirección que miente es peor que no tenerlo. */
  {
    const metasMod = await import('./engine/admin-metas.js');
    const { MODELO, calcularMetricas, puertas, coberturaTemario, esSuscriptor, metasHTML, resumenPorMoneda } = metasMod;
    const preciosMod = await import('./engine/precios.js');
    const { ANCLA, TIPOS, MONEDAS, PAIS_MONEDA, normalizaPais, monedaDe, paisReconocido,
      precioDe, precioAtractivo, catalogoPrecios } = preciosMod;
    const fuenteOsler = await (await fetch('./Osler.md?v=' + Date.now())).text();
    const UN_DIA = 86400000;
    const AHORA = Date.UTC(2026, 10, 9);
    const hace = d => AHORA - d * UN_DIA;

    const cohorte = [
      // Recién registrada, activa hoy y enganchada.
      { createdAt: hace(2), updatedAt: hace(0.5), 'rm:quiz-progress': { a: { correct: 40, incorrect: 20 } },
        'rm:profile-referral': 'Un companero', 'rm:profile-country': 'Mexico', 'rm:profile-hospital': 'IMSS La Raza' },
      // Veterana que sigue viva: cohorte madura y retenida.
      { createdAt: hace(60), updatedAt: hace(3), 'rm:quiz-progress': { a: { correct: 5, incorrect: 0 } },
        'rm:profile-referral': 'Un companero', 'rm:profile-country': 'mexico ', 'rm:profile-hospital': 'imss la raza ' },
      // Veterana que se fue: cohorte madura, ni retenida ni activa. Sin país declarado.
      { createdAt: hace(90), updatedAt: hace(45), 'rm:quiz-progress': {} },
      // Timestamp de Firestore más latido de la analítica opcional: manda la señal más reciente,
      // o esta usuaria contaría como ida llevando 5 días de uso. Es la única que paga.
      { createdAt: { toMillis: () => hace(40) }, updatedAt: { toMillis: () => hace(30) },
        'rm:usage-stats': { lastActive: hace(5) }, 'rm:suscripcion': 'activa',
        'rm:profile-country': 'México.', 'rm:quiz-progress': { b: { correct: 50 } } },
      // Se registró y no abrió nada: ni activa ni activada, y tampoco dijo de dónde es.
      { createdAt: hace(1) }
    ];
    const m = calcularMetricas(cohorte, AHORA);

    test('metas: el embudo cuenta a cada residente en el peldaño que le toca', () => {
      assertEqual(m.total, 5, 'total');
      assertEqual(m.nuevos7, 2, 'registros de la semana');
      assertEqual(m.nuevos30, 2, 'registros del mes');
      assertEqual(m.activos7, 3, 'activos de la semana');
      assertEqual(m.activos30, 3, 'activos del mes');
      assertEqual(m.activados, 3, 'activados (una pregunta o más)');
      assertEqual(m.enganchados, 2, 'enganchados (' + MODELO.umbralEnganche + ' preguntas o más)');
      assertEqual(m.preguntasTotales, 115, 'preguntas del grupo');
      assertEqual(m.suscriptores, 1, 'suscriptores');
    });

    test('metas: la retención solo se pregunta a quien tuvo tiempo de irse', () => {
      // Tres cuentas pasan de 30 días; dos siguen vivas. Meter en el divisor a las dos cuentas
      // nuevas inflaría la cifra justo cuando más gente se registra, que es cuando más engañaría.
      assertEqual(m.cohorteMadura, 3, 'cohorte madura');
      assertEqual(m.retenidos, 2, 'retenidos');
      assertEqual(m.retencion, 67, 'retención %');
      assertEqual(m.habito, 100, 'hábito % (semana sobre mes)');
      assertEqual(m.pctActivados, 60, 'activación %');
      assertEqual(m.pctEnganchados, 40, 'enganchados %');
    });

    test('metas: el ingreso se suma con el precio de la moneda de cada quien', () => {
      // La suscriptora es de México, así que el ingreso es el precio publicado de casa y no un
      // promedio mundial. Multiplicar suscriptores por "el precio" es justo el error que esconde
      // de dónde sale el dinero cuando cada moneda redondea distinto.
      assertEqual(m.mrr, ANCLA.mensual, 'ingreso mensual');
      assertEqual(m.arpuReal, ANCLA.mensual, 'ingreso por suscriptor');
      // Tres mexicanas a 199 y dos sin país a precio en dólares: el promedio queda por debajo del
      // ancla, y de ese promedio sale cuántas suscripciones hacen falta.
      const usd = precioDe('Narnia').mensualMXN;
      assertEqual(m.arpuHipotetico, Math.round((ANCLA.mensual * 3 + usd * 2) / 5), 'ingreso medio esperado');
      assertEqual(m.suscriptoresParaMeta, Math.ceil(MODELO.metaIngresoMensual / m.arpuHipotetico),
        'suscripciones que hacen falta para la meta');
      // Dos enganchados mexicanos al 25%: (199 + 199) / 4 = 99.5, que redondea a 100.
      assertEqual(m.ingresoProyectado, 100, 'ingreso proyectado');
      // Dos cuentas no dijeron de dónde son: se les cobra en la moneda por defecto, pero se
      // cuentan aparte para que aparezcan en el panel.
      assertEqual(m.sinPais, 2, 'sin país reconocible');
    });

    test('metas: alcance y canal se normalizan antes de contar', () => {
      // 'IMSS La Raza' y 'imss la raza ' son el mismo hospital escrito por dos residentes, y
      // 'Mexico', 'mexico ' y 'México.' son el mismo país: contarlos aparte inventaría mercados.
      assertEqual(m.hospitales, 1, 'hospitales distintos');
      assertEqual(m.paises, 1, 'países distintos');
      assertEqual(m.canales, { 'Un companero': 2 }, 'canales');
    });

    test('metas: sin usuarios no se inventa ningún porcentaje', () => {
      // Dividir entre cero y pintar 0% diría que la activación es mala cuando lo que pasa es que
      // no hay dato. El panel tiene que decir que no sabe.
      const v = calcularMetricas([], AHORA);
      assertEqual(v.total, 0);
      assertEqual(v.pctActivados, null, 'activación');
      assertEqual(v.habito, null, 'hábito');
      assertEqual(v.retencion, null, 'retención');
      assertEqual(v.mrr, 0, 'ingreso');
      assertEqual(v.arpuHipotetico, 0, 'ingreso medio');
      assertEqual(v.suscriptoresParaMeta, null, 'suscripciones para la meta');
    });

    test('metas: una suscripción solo cuenta si está activa', () => {
      // Una prueba gratuita no es dinero, y el campo puede llegar en las dos formas que tomará
      // el día que exista el cobro.
      assert(esSuscriptor({ 'rm:suscripcion': 'activa' }), 'cadena activa');
      assert(esSuscriptor({ 'rm:suscripcion': { estado: 'activa' } }), 'objeto activo');
      assert(!esSuscriptor({ 'rm:suscripcion': { estado: 'prueba' } }), 'una prueba no paga');
      assert(!esSuscriptor({ 'rm:suscripcion': 'cancelada' }), 'cancelada');
      assert(!esSuscriptor({}), 'sin campo');
    });

    test('metas: el mapa de ingreso pone a cada residente en una sola moneda', () => {
      const filas = resumenPorMoneda(cohorte, AHORA);
      const mx = filas.find(f => f.moneda === 'MXN');
      assertEqual(mx.registrados, 3, 'registrados en pesos');
      assertEqual(mx.activos30, 3, 'activos en pesos');
      assertEqual(mx.enganchados, 2, 'enganchados en pesos');
      assertEqual(mx.proyectado, 100, 'ingreso proyectado en pesos');
      assertEqual(mx.paises, 1, 'países distintos que pagan en pesos');
      assertEqual(mx.mensual, ANCLA.mensual, 'el precio de la fila');
      const usd = filas.find(f => f.moneda === 'USD');
      assertEqual(usd.registrados, 2, 'los que no declararon país');
      assertEqual(usd.sinPais, 2, 'y se cuentan como país no reconocido');
      assertEqual(filas.reduce((n, f) => n + f.registrados, 0), cohorte.length,
        'alguien se contó dos veces o se perdió entre monedas');
      // Solo aparecen las monedas que alguien usa.
      assertEqual(resumenPorMoneda([{ createdAt: AHORA, 'rm:profile-country': 'Chile' }], AHORA).map(f => f.moneda),
        ['CLP'], 'se pintan monedas que nadie usa');
    });

    test('metas: la escalera marca una sola puerta como la actual', () => {
      const lista = puertas({ total: 200, pctActivados: 80, habito: 10, retencion: 90, mrr: 0, suscriptoresParaMeta: 300 }, 100);
      assertEqual(lista.map(p => p.estado),
        ['abierta', 'abierta', 'actual', 'abierta', 'abierta', 'pendiente'],
        'una puerta cumplida se pinta abierta aunque la anterior no lo esté, pero la actual es la primera cerrada');
      assertEqual(lista.filter(p => p.estado === 'actual').length, 1, 'puertas actuales');
      assertEqual(lista.map(p => p.n), [1, 2, 3, 4, 5, 6], 'numeración');
      // La última puerta se mide en dinero, no en cabezas.
      assertEqual(lista[5].objetivo, MODELO.metaIngresoMensual, 'la puerta de cobro se mide en MXN al mes');
      // El avance no pasa de 100 aunque la cifra doble la meta: la barra no se sale.
      assertEqual(puertas({ total: 600, pctActivados: 0, habito: 0, retencion: 0, mrr: 0, suscriptoresParaMeta: null })[0].avance, 100);
    });

    test('metas: la cobertura del temario lee las dos formas de bloque', () => {
      // Un bloque puede traer `groups` o `clusters` sueltos, y un ítem puede ser una cadena.
      const arbol = [
        { groups: [{ clusters: [{ items: [{ label: 'a', topicId: 'x' }, { label: 'b', topicId: null }] }] }] },
        { clusters: [{ items: ['item sin tema', { label: 'c', topicId: 'y' }] }] }
      ];
      assertEqual(coberturaTemario(arbol), { totales: 4, construidos: 2, pct: 50 });
      assertEqual(coberturaTemario([]), { totales: 0, construidos: 0, pct: 0 }, 'sin bloques');
    });

    test('metas: el panel se pinta sin huecos ni NaN', () => {
      // La lección de los select que pintaban "undefined": compute() correcto no garantiza que
      // el pintado lo esté. Aquí se mira el HTML, que es lo que ve el autor.
      const html = metasHTML(cohorte, coberturaTemario([{ clusters: [{ items: [{ topicId: 'x' }, 'y'] }] }]), AHORA);
      assert(!/undefined|NaN/.test(html), 'el panel pinta undefined o NaN');
      assert(html.includes('Estudiaron esta semana'), 'falta la estrella polar');
      assert(html.includes('Suscriptores'), 'falta la fila de suscriptores');
      assert(html.includes('Proy./mes') && html.includes('Peso mexicano'), 'falta la lista de precios del mundo');
      MODELO.horizontes.forEach(h => assert(html.includes(h.nombre), 'falta el horizonte ' + h.nombre));
      assert(/meta-puerta--actual/.test(html), 'ninguna puerta queda marcada como la actual');
      assertEqual((html.match(/class="meta-puerta meta-puerta--/g) || []).length, 6, 'puertas pintadas');
    });

    test('metas: los módulos están en SHELL y el Admin los monta sin perder nada de lo que ya había', () => {
      ['./engine/admin-metas.js', './engine/precios.js'].forEach(u => assert(SHELL_SW.includes(u),
        u + ' no esta en SHELL de sw.js: sin red, el Admin se cae al importarlo'));
      assert(/metasHTML\(users, coberturaTemario\(temarioBlocks\)\)/.test(fuenteAdmin),
        'el Admin no monta el panel de metas');
      // El panel se añadió ENCIMA de lo que había. Estas cuatro secciones son las originales y
      // ninguna se sacrifica por la nueva.
      ['Reportes de notas', 'Estadísticas del grupo', 'Uso de la plataforma', 'Usuarios registrados']
        .forEach(h => assert(fuenteAdmin.includes(h), 'desaparecio la seccion "' + h + '" del Admin'));
    });

    test('metas: los números de Osler.md no se separan del código', () => {
      // Osler.md lleva el razonamiento de cada número y el código lleva el número. Si los dos se
      // separan, el documento dirige hacia una meta que el panel ya no mide.
      const esperado = [
        MODELO.metaTraccion + ' registrados',
        MODELO.metaActivacion + '% responde',
        MODELO.metaHabito + '% de los activos del mes',
        MODELO.metaRetencion + '% de la cohorte',
        MODELO.metaCobertura + '% del temario',
        MODELO.metaIngresoMensual.toLocaleString('es-MX') + ' MXN al mes',
        ANCLA.mensual + ' MXN',
        precioDe('Estados Unidos').mensual + ' USD'
      ];
      // Y la tabla de precios de Osler.md se compara fila a fila con la que calcula el código:
      // una moneda mal copiada ahi es un precio que se publica mal.
      const fmt = (v, c) => (v < 20 ? v.toFixed(2) : Math.round(v).toLocaleString('es-MX')) + ' ' + c;
      catalogoPrecios().forEach(c => esperado.push(
        `| ${c.moneda} | ${fmt(c.mensual, c.moneda)} | ${fmt(c.anual, c.moneda)} | ${c.mensualMXN} MXN |`));
      MODELO.horizontes.forEach(h => {
        esperado.push(h.nombre);
        esperado.push(h.mxn.toLocaleString('es-MX') + ' MXN');
      });
      esperado.forEach(t => assert(fuenteOsler.includes(t),
        'Osler.md ya no dice "' + t + '": el documento y el código se separaron'));
    });

    test('precios: el país se normaliza de verdad, que llega de un campo de texto libre', () => {
      // El registro pide el país con un <input type="text">. Sin esto, "México." y "mexico" son
      // dos mercados distintos en la lista de precios.
      assertEqual(normalizaPais('  MÉXICO. '), 'mexico');
      assertEqual(normalizaPais('méjico'), 'mexico');
      assertEqual(normalizaPais('EEUU'), 'estados unidos');
      assertEqual(normalizaPais('Rep. Dominicana'), 'republica dominicana');
      assertEqual(normalizaPais('Perú'), 'peru');
      assertEqual(normalizaPais(''), '');
      assertEqual(normalizaPais(undefined), '');
    });

    test('precios: cada país cobra en su moneda y lo que no se reconoce cae en la de por defecto', () => {
      // Como la tienda por defecto de una app: un país que no está en la tabla no se queda sin
      // precio, se le cobra en dólares, pero el panel lo enseña para que se añada su moneda.
      assertEqual(monedaDe('México'), 'MXN');
      assertEqual(monedaDe('Colombia'), 'COP');
      assertEqual(monedaDe('España'), 'EUR');
      assertEqual(monedaDe('Ecuador'), 'USD', 'dolarizado de derecho');
      assertEqual(monedaDe('Narnia'), 'USD', 'país desconocido');
      assertEqual(monedaDe(''), 'USD', 'sin país');
      assert(paisReconocido('Perú'), 'Perú tiene que estar en la tabla');
      assert(!paisReconocido('Narnia'), 'Narnia no puede estar en la tabla');
      assertEqual(precioDe('Narnia').reconocido, false);
      assertEqual(precioDe('Narnia').moneda, 'USD');
    });

    test('precios: el ancla es el precio de casa y no se recalcula', () => {
      // 199 MXN y 1590 al año se publican, no se convierten de vuelta desde el dólar: pasar por
      // el tipo de cambio dos veces movería el precio de casa cada vez que se actualiza la tabla.
      const mx = precioDe('México');
      assertEqual(mx.moneda, ANCLA.moneda);
      assertEqual(mx.mensual, ANCLA.mensual);
      assertEqual(mx.anual, ANCLA.anual);
      assertEqual(mx.mensualMXN, ANCLA.mensual, 'el equivalente en MXN del ancla es el ancla');
    });

    test('precios: el redondeo deja números atractivos y prefiere el escalón de abajo', () => {
      // 10.76 no es un precio: es el resultado de una división. El escalón de abajo se prefiere
      // mientras no se aleje más de un 8%, así que casi todo el mundo paga un poco menos que la
      // paridad exacta y nadie paga mucho más.
      assertEqual(precioAtractivo(10.76), 9.99, 'dólares');
      assertEqual(precioAtractivo(9.9), 9.99, 'euros: abajo quedaría un 9.2% por debajo, así que sube');
      assertEqual(precioAtractivo(40.35), 39, 'soles');
      assertEqual(precioAtractivo(44116), 43990, 'pesos colombianos');
      assertEqual(precioAtractivo(10222), 10190, 'pesos chilenos');
      // El ancla NO pasa por aquí: 199 caería a 189 por la misma regla, y el precio de casa es
      // un número publicado, no el resultado de un redondeo.
      assertEqual(precioAtractivo(199), 189, 'la regla también se aplicaría al ancla');
      assertEqual(precioAtractivo(0), 0, 'sin valor no hay precio');
      assertEqual(precioAtractivo(-5), 0, 'un precio negativo no existe');
    });

    test('precios: ningún precio del mundo se aleja de la paridad más de lo tolerado', () => {
      // Es la promesa del modelo: el mismo precio en todas partes, cambiando solo la moneda. Si
      // una conversión se saliera, habría un país pagando el doble sin que nadie lo notara.
      const ancla = ANCLA.mensual;
      catalogoPrecios().forEach(c => {
        const desvio = (c.mensualMXN - ancla) / ancla;
        assert(desvio <= 0.08, `${c.moneda} cuesta un ${Math.round(desvio * 100)}% MÁS que el ancla`);
        assert(desvio >= -0.12, `${c.moneda} cuesta un ${Math.round(-desvio * 100)}% MENOS que el ancla`);
      });
    });

    test('precios: la tabla de monedas es coherente consigo misma', () => {
      catalogoPrecios().forEach(c => {
        assert(TIPOS.porUsd[c.moneda] > 0, 'la moneda ' + c.moneda + ' no tiene tipo de cambio');
        assert(c.anual < c.mensual * 12,
          'el anual de ' + c.moneda + ' no sale a cuenta: nadie lo compraría, y el anual es la caja');
        assert(c.mensual > 0 && c.anual > 0, 'precio vacío en ' + c.moneda);
      });
      Object.keys(PAIS_MONEDA).forEach(p => {
        assertEqual(normalizaPais(p), p, 'el país "' + p + '" no está normalizado, así que monedaDe() nunca lo encontrará');
        assert(MONEDAS[PAIS_MONEDA[p]], 'el país "' + p + '" apunta a una moneda que no existe');
      });
      assert(TIPOS.fecha, 'los tipos de cambio necesitan fecha: un número sin fecha envejece sin avisar');
    });
  }

  /* ---------------- Reparto del precache (sw.js: SHELL frente a CONTENT) ---------------- */

  test('sw: SHELL y CONTENT no se solapan y ninguna esta vacia', () => {
    assert(SHELL_SW.length > 0, 'SHELL vacia: el regex de las listas dejo de casar con sw.js');
    assert(CONTENT_SW.length > 0, 'CONTENT vacia: el regex de las listas dejo de casar con sw.js');
    const repetidas = SHELL_SW.filter(u => CONTENT_SW.includes(u));
    assertEqual(repetidas, [], 'hay rutas en las dos listas: se descargarian dos veces');
  });

  test('sw: lo que app.js importa de forma estatica esta en SHELL, no en CONTENT', () => {
    // registry.js y temario-index.js viven bajo topics/ pero no son contenido de un tema: son
    // dependencias estaticas del arranque. Si cayeran en CONTENT (que tolera fallos), un
    // precache incompleto dejaria la app sin portada ni buscador al abrirla sin red.
    ['./topics/registry.js', './topics/temario-index.js'].forEach(u => {
      assert(SHELL_SW.includes(u), `${u} tiene que estar en SHELL`);
      assert(!CONTENT_SW.includes(u), `${u} no puede estar en CONTENT`);
    });
  });

  test('sw: los tres archivos de cada tema del registro estan precacheados', () => {
    // Antes esto lo garantizaba una sola lista. Con el reparto en dos, un tema nuevo puede
    // quedarse fuera de las dos sin que nada chille hasta que alguien lo abre sin conexion.
    const precache = new Set([...SHELL_SW, ...CONTENT_SW]);
    registroSw.forEach(t => ['content.js', 'calculators.js', 'study.js'].forEach(f => {
      assert(precache.has(`./topics/${t.id}/${f}`),
        `topics/${t.id}/${f} no esta ni en SHELL ni en CONTENT de sw.js`);
    }));
  });

  /* ---------------- Notas del tema (engine/texto-seguro.js) ---------------- */

  // El panel de notas es lo primero de la app que pinta texto escrito por OTRA persona: hasta
  // ahora, las 64 asignaciones a innerHTML del motor pintaban contenido del autor. Todo lo que
  // hace seguro ese texto vive en texto-seguro.js, que es puro a proposito para poder probarlo
  // aqui con el runner sincrono.
  const TS = await import('./engine/texto-seguro.js');
  const { ADMIN_EMAILS } = await import('./engine/firebase-config.js');
  const htmlIndex = await (await fetch('./index.html?v=' + Date.now())).text();
  const docIndex = new DOMParser().parseFromString(htmlIndex, 'text/html');
  const cssFuente = await (await fetch('./engine/styles.css?v=' + Date.now())).text();
  const fuenteStudyView = await (await fetch('./engine/study-view.js?v=' + Date.now())).text();
  // En produccion firestore.rules devuelve 404 a proposito (lo excluye .assetsignore), y tests.html
  // tampoco se publica, asi que la prueba de las reglas se salta sola alli y vigila en local, que es
  // donde se corren los tests.
  const respReglas = await fetch('./firestore.rules?v=' + Date.now());
  const reglasFuente = respReglas.ok ? await respReglas.text() : null;

  test('notas: escHtml neutraliza los cinco caracteres peligrosos', () => {
    assertEqual(TS.escHtml('<b>'), '&lt;b&gt;');
    assertEqual(TS.escHtml('a & b'), 'a &amp; b');
    assertEqual(TS.escHtml('"x" \'y\''), '&quot;x&quot; &#39;y&#39;');
    assertEqual(TS.escHtml(null), '');
    assertEqual(TS.escHtml(undefined), '');
  });

  test('notas: un comentario con HTML se ve como texto, no se ejecuta', () => {
    const salida = TS.textoComentarioHTML('<img src=x onerror=alert(1)>');
    assert(salida.indexOf('<img') === -1, 'el <img> llego crudo al HTML: eso es un XSS almacenado');
    assert(salida.indexOf('&lt;img') === 0, 'deberia haber quedado escapado desde el primer caracter');
  });

  test('notas: se enlaza http(s) y ningun otro esquema', () => {
    const conEnlace = TS.textoComentarioHTML('mira https://pubmed.ncbi.nlm.nih.gov/123');
    assert(/<a href="https:\/\/pubmed/.test(conEnlace), 'no convirtio el enlace');
    assert(conEnlace.indexOf('rel="noopener noreferrer nofollow ugc"') !== -1, 'falta el rel de seguridad');
    assert(conEnlace.indexOf('target="_blank"') !== -1, 'falta target _blank');
    assert(TS.textoComentarioHTML('javascript:alert(1)').indexOf('<a') === -1, 'convirtio un javascript: en enlace');
    assert(TS.textoComentarioHTML('data:text/html,hola').indexOf('<a') === -1, 'convirtio un data: en enlace');
  });

  test('notas: la puntuacion final de la frase no entra en el enlace', () => {
    const s = TS.textoComentarioHTML('ver https://x.com.');
    assert(s.indexOf('href="https://x.com"') !== -1, 'el punto quedo dentro del href: ' + s);
    assert(s.endsWith('.'), 'el punto desaparecio del texto: ' + s);
  });

  test('notas: un & dentro de una URL sobrevive escapado en el href', () => {
    // Por esto se trocea el texto CRUDO y se escapa cada trozo, en vez de escapar primero: si no,
    // recortar el texto visible del enlace podria partir una entidad por la mitad.
    const s = TS.textoComentarioHTML('https://x.com/a?b=1&c=2');
    assert(s.indexOf('href="https://x.com/a?b=1&amp;c=2"') !== -1, 'el & del href no quedo escapado: ' + s);
  });

  test('notas: dos enlaces en la misma linea', () => {
    const s = TS.textoComentarioHTML('a https://uno.com b https://dos.com c');
    assertEqual((s.match(/<a /g) || []).length, 2);
  });

  test('notas: los saltos de linea se conservan', () => {
    assertEqual(TS.textoComentarioHTML('uno\ndos'), 'uno<br>dos');
  });

  test('notas: la firma es nombre de pila mas inicial del apellido', () => {
    assertEqual(TS.nombreCorto('Walter', 'Jauregui'), 'Walter J.');
    assertEqual(TS.nombreCorto('  ana ', 'de la cruz'), 'ana D.');
    assertEqual(TS.nombreCorto('Ana', ''), 'Ana');
    assertEqual(TS.nombreCorto('', ''), 'Residente');
    assertEqual(TS.nombreCorto('Angel', 'Ñuño'), 'Angel Ñ.');
    assert(TS.nombreCorto('x'.repeat(80), 'y'.repeat(80)).length <= TS.MAX_FIRMA,
      'la firma pasa del tope que impone firestore.rules y el servidor rechazaria la nota');
  });

  test('notas: validarComentario corta por vacio y por longitud', () => {
    assert(!TS.validarComentario('').ok);
    assert(!TS.validarComentario('   ').ok);
    assert(TS.validarComentario('  hola  ').ok);
    assertEqual(TS.validarComentario('  hola  ').texto, 'hola');
    assert(TS.validarComentario('x'.repeat(TS.MAX_COMENTARIO)).ok, 'el tope exacto deberia pasar');
    assert(!TS.validarComentario('x'.repeat(TS.MAX_COMENTARIO + 1)).ok, 'uno mas que el tope deberia fallar');
  });

  test('notas: tiempoRelativo con un "ahora" fijo', () => {
    const t0 = Date.UTC(2026, 9, 25, 12, 0, 0);
    assertEqual(TS.tiempoRelativo(t0, t0), 'ahora');
    assertEqual(TS.tiempoRelativo(t0 - 5 * 60000, t0), 'hace 5 min');
    assertEqual(TS.tiempoRelativo(t0 - 3 * 3600000, t0), 'hace 3 h');
    assertEqual(TS.tiempoRelativo(t0 - 26 * 3600000, t0), 'ayer');
    // Un reloj del cliente adelantado no debe producir "hace -2 min".
    assertEqual(TS.tiempoRelativo(t0 + 120000, t0), 'ahora');
  });

  test('notas: la burbuja optimista va al final y no se duplica', () => {
    const pendiente = [{ id: 'c' }];
    assertEqual(TS.fusionarComentarios([{ id: 'a' }, { id: 'b' }], pendiente).map(m => m.id), ['a', 'b', 'c']);
    // Firestore entrega el documento recien escrito en un snapshot LOCAL, con createdAt todavia
    // en null, y ordenado ascendente un null va PRIMERO. Sin descartarlo, el usuario veria su
    // propia nota duplicada: una arriba del todo y otra abajo.
    assertEqual(TS.fusionarComentarios([{ id: 'c' }, { id: 'a' }], pendiente).map(m => m.id), ['a', 'c']);
    assertEqual(TS.fusionarComentarios([{ id: 'a' }], []).map(m => m.id), ['a']);
  });

  test('notas: idReporte coincide con el formato que exige firestore.rules', () => {
    assertEqual(TS.idReporte('abc123', 'uid456'), 'abc123_uid456');
  });

  test('acceso: los tres modales declaran que son dialogos', () => {
    // Sin role/aria-modal un lector de pantalla los lee como contenido mas de la pagina. El de
    // terminos importa especialmente: es la unica pieza de la puerta de acceso que la gente
    // TIENE que abrir para registrarse, y se abre DESDE otro modal que sigue activo debajo.
    for (const id of ['modal', 'terms-modal']) {
      const el = docIndex.querySelector('#' + id);
      assert(el, 'no existe #' + id + ' en index.html');
      assertEqual(el.getAttribute('role'), 'dialog');
      assertEqual(el.getAttribute('aria-modal'), 'true');
      // tabindex="-1" es lo que permite meter el foco dentro al abrir.
      assertEqual(el.getAttribute('tabindex'), '-1');
    }
  });

  test('acceso: las capas de la trampa de foco existen y van en orden de apilamiento', () => {
    // La trampa elige la ULTIMA activa de esta lista, asi que el orden es parte del contrato: si
    // alguien renombra un overlay o cambia el orden, el tabulador vuelve a recorrer la capa
    // tapada de detras.
    const esperado = ['overlay', 'terms-overlay', 'img-lightbox'];
    const lista = fuenteStudyView.match(/const CAPAS_MODALES = \[([^\]]*)\]/);
    assert(lista, 'no se encontro CAPAS_MODALES en engine/study-view.js');
    const ids = lista[1].split(',').map(x => x.trim().replace(/^'|'$/g, ''));
    assertEqual(ids.join(','), esperado.join(','));
    for (const id of ids) assert(docIndex.querySelector('#' + id), 'CAPAS_MODALES nombra #' + id + ', que no existe en index.html');
  });

  test('notas: el panel cuelga de <body> y no de .app-shell', () => {
    // No es estetico. .app-section.active conserva un transform para siempre (la animacion
    // section-in usa fill-mode:both), y un transform en un ancestro lo convierte en bloque
    // contenedor de sus descendientes position:fixed. Dentro del shell, el panel se comportaria
    // distinto segun la preferencia de movimiento reducido de cada usuario.
    assert(docIndex.querySelector('#topic-chat'), 'no existe #topic-chat en index.html');
    assert(docIndex.querySelector('body > #topic-chat'), '#topic-chat tiene que colgar directo de <body>');
    assert(!docIndex.querySelector('.app-shell #topic-chat'), '#topic-chat quedo dentro de .app-shell');
    assert(!docIndex.querySelector('.app-shell #chat-fab'), '#chat-fab quedo dentro de .app-shell');
  });

  test('notas: ninguna regla de .app-shell lleva transform', () => {
    // El hueco del panel acoplado se reserva con padding-right en el <body>. Si alguien lo cambia
    // por un transform en el shell, .app-nav (que es position:fixed y vive DENTRO del shell) deja
    // de anclarse al viewport: su bottom:0 pasa a ser el final del documento. Se ve bien en
    // Inicio y se rompe solo en Estudio, al hacer scroll en un tema largo.
    const bloques = cssFuente.match(/\.app-shell\s*\{[^}]*\}/g) || [];
    assert(bloques.length > 0, 'no se encontro ninguna regla .app-shell: cambio el nombre de la clase?');
    bloques.forEach(b => assert(!/transform\s*:/.test(b), 'hay un transform en .app-shell: ' + b));
  });

  test('fecha del examen: sin text-transform capitalize', () => {
    // toLocaleDateString('es') ya devuelve "15 de diciembre de 2026", que es como se escribe en
    // espanol. Un capitalize en la regla lo pintaba "15 De Diciembre De 2026".
    const regla = cssFuente.match(/\.home-exam-date\{[^}]*\}/);
    assert(regla, 'no se encontro la regla .home-exam-date: cambio el nombre de la clase?');
    assert(!/capitalize/.test(regla[0]), 'la fecha del examen no va con capitalize: ' + regla[0]);
  });

  test('notas: los modulos nuevos estan en SHELL y no en CONTENT', () => {
    ['./engine/texto-seguro.js', './engine/topic-chat.js'].forEach(u => {
      assert(SHELL_SW.includes(u), u + ' tiene que estar en SHELL de sw.js');
      assert(!CONTENT_SW.includes(u), u + ' no puede estar en CONTENT');
    });
  });

  test('notas: firestore.rules no se quedo atras de ADMIN_EMAILS', () => {
    // El administrador se identifica por correo en los DOS sitios (no hay custom claims), asi que
    // divergir deja al autor sin poder moderar, o peor, deja la regla vieja permitiendo de mas.
    if (!reglasFuente) return; // 404 en produccion, a proposito
    ADMIN_EMAILS.forEach(correo => assert(reglasFuente.includes(correo),
      'el correo ' + correo + ' esta en ADMIN_EMAILS pero no en firestore.rules'));
    assert(/match \/temaComentarios\//.test(reglasFuente), 'faltan las reglas de temaComentarios');
    assert(/match \/reportes\//.test(reglasFuente), 'faltan las reglas de reportes');
    assert(!/allow read, write: if request\.auth != null/.test(reglasFuente),
      'quedo una regla que deja leer y escribir a cualquier usuario registrado');
  });

  test('VPO: las dependencias entre modulos van en una sola direccion', () => {
    // La regla del area: ninguna pestana importa a otra para repintarla, eso pasa por
    // vpo-estado.js. La nota si LEE datos de las demas, que es su trabajo, y el cascaron
    // importa a todos. Cualquier otra arista es un ciclo esperando a pasar, y en modulos ES
    // un ciclo no falla al cargar: falla mas tarde, con un undefined dificil de rastrear.
    const PERMITIDO = {
      'vpo-estado.js': [],
      'vpo-listas.js': [],
      'vpo-ficha.js': ['vpo-estado.js'],
      'vpo-escalas.js': ['vpo-estado.js'],
      'vpo-ruta.js': ['vpo-estado.js'],
      'vpo-farmacos.js': ['vpo-estado.js', 'vpo-listas.js'],
      'vpo-estudios.js': ['vpo-estado.js', 'vpo-listas.js'],
      'vpo-nota.js': ['vpo-estado.js', 'vpo-ficha.js', 'vpo-ruta.js', 'vpo-farmacos.js', 'vpo-estudios.js'],
      'vpo.js': MODULOS_VPO.filter(f => f !== 'vpo.js')
    };
    MODULOS_VPO.forEach(f => {
      hermanosDe(f).forEach(h => assert(PERMITIDO[f].includes(h),
        `'${f}' importa '${h}', que no esta permitido: las pestanas se repintan por vpo-estado.js`));
    });
    // Nadie importa al cascaron: es la puerta de entrada de la seccion, no una pieza mas.
    MODULOS_VPO.filter(f => f !== 'vpo.js').forEach(f => assert(!hermanosDe(f).includes('vpo.js'),
      `'${f}' importa el cascaron engine/vpo.js`));
  });

  test('VPO nota: cada cosa cae en su seccion, y el puente no es un riesgo estimado', () => {
    // El puente dice que hacer con el anticoagulante y el aclaramiento es el dato que lo
    // decide: se leen con los farmacos. Salian bajo "Riesgo estimado" solo porque se calculan
    // en la pestana de escalas.
    const CLAVES = ['rm:vpo:escalas', 'rm:vpo:paciente', 'rm:vpo:ruta', 'rm:vpo:farmacos', 'rm:vpo:estudios'];
    const previas = CLAVES.map(k => [k, syncGet(k, null)]);
    try {
      syncSet('rm:vpo:ruta', { camino: [], veredicto: null });
      syncSet('rm:vpo:farmacos', {});
      syncSet('rm:vpo:estudios', {});
      syncSet('rm:vpo:paciente', { edad: '72', sexo: 'f', asa: '3' });
      syncSet('rm:vpo:escalas', {
        asa: { titulo: 'ASA', frase: 'ASA III', ts: 1 },
        cockcroft: { titulo: 'Aclaramiento', frase: 'Aclaramiento de creatinina 29 mL/min', ts: 2 },
        puenteac: { titulo: 'Puente', frase: 'Suspender dabigatran 2 dias antes', ts: 3 }
      });
      const caja = document.createElement('div');
      caja.innerHTML = vpoEngine.notaHTML();
      const seccion = titulo => [...caja.querySelectorAll('.vpo-nota-sec')]
        .find(sec => sec.querySelector('h3').textContent === titulo);

      const riesgo = seccion('Riesgo estimado');
      assert(riesgo, 'deberia haber un bloque de riesgo estimado');
      assert(/ASA III/.test(riesgo.textContent), 'la clase ASA si es una estimacion de riesgo');
      assert(!/Suspender dabigatran/.test(riesgo.textContent), 'el puente no es un riesgo estimado');
      assert(!/Aclaramiento/.test(riesgo.textContent), 'el aclaramiento no es un riesgo estimado');

      const farmacos = seccion('Manejo perioperatorio de f\u00e1rmacos');
      assert(farmacos, 'deberia haber un bloque de farmacos aunque no haya ninguno marcado');
      assert(/Aclaramiento de creatinina 29/.test(farmacos.textContent), 'el aclaramiento va con los farmacos');
      assert(/Suspender dabigatran/.test(farmacos.textContent), 'el puente va con los farmacos');

      // La nota acaba en un expediente: cabecera con el paciente y la fecha.
      const cabecera = caja.querySelector('.vpo-nota-paciente');
      assert(cabecera, 'la nota deberia encabezarse con el paciente');
      assert(/Mujer de 72 a\u00f1os/.test(cabecera.textContent), 'falta el paciente en la cabecera');
      assert(/Valoraci\u00f3n del /.test(cabecera.textContent), 'falta la fecha en la cabecera');
      assert(caja.querySelector('.vpo-nota-acciones'), 'la nota deberia ofrecer copiar e imprimir');
    } finally {
      previas.forEach(([k, v]) => { if (v !== null) syncSet(k, v); });
    }
  });

  test('VPO nota: lo que se optimiza antes de operar se lee junto, y antes de los farmacos', () => {
    // La anemia y el control glucemico se decidian entre los farmacos solo porque se corrigen
    // con uno. Lo que tienen en comun con la prehabilitacion es otra cosa: son la razon de
    // adelantar la valoracion en vez de hacerla la vispera.
    const CLAVES = ['rm:vpo:escalas', 'rm:vpo:paciente', 'rm:vpo:ruta', 'rm:vpo:farmacos', 'rm:vpo:estudios'];
    const previas = CLAVES.map(k => [k, syncGet(k, null)]);
    try {
      syncSet('rm:vpo:ruta', { camino: [], veredicto: null });
      syncSet('rm:vpo:farmacos', {});
      syncSet('rm:vpo:estudios', {});
      syncSet('rm:vpo:paciente', {});
      syncSet('rm:vpo:escalas', {
        asa: { titulo: 'ASA', frase: 'ASA III', ts: 1 },
        anemia: { titulo: 'Anemia', frase: 'Anemia de 9.8 g/dL', ts: 2 },
        cockcroft: { titulo: 'Aclaramiento', frase: 'Aclaramiento de creatinina 70 mL/min', ts: 4 },
        prehabilitacion: { titulo: 'Prehabilitaci\u00f3n', frase: 'Prehabilitaci\u00f3n en de 4 a 8 semanas', ts: 3 }
      });
      const caja = document.createElement('div');
      caja.innerHTML = vpoEngine.notaHTML();
      const seccion = titulo => [...caja.querySelectorAll('.vpo-nota-sec')]
        .find(sec => sec.querySelector('h3').textContent === titulo);

      const opt = seccion('Optimizaci\u00f3n preoperatoria');
      assert(opt, 'deberia haber un bloque de optimizacion preoperatoria');
      assert(/Anemia de 9.8/.test(opt.textContent), 'la anemia se corrige antes de operar');
      assert(/Prehabilitaci\u00f3n/.test(opt.textContent), 'y la prehabilitacion es eso mismo');
      assert(!/Anemia de 9.8/.test(seccion('Riesgo estimado').textContent),
        'la anemia no es un riesgo estimado');
      assert(!/Anemia de 9.8/.test(seccion('Manejo perioperatorio de f\u00e1rmacos').textContent),
        'ni una conducta con un farmaco');

      // Y va antes que los farmacos: se optimiza y luego se decide con que se opera.
      const titulos = [...caja.querySelectorAll('.vpo-nota-sec h3')].map(h => h.textContent);
      assert(titulos.indexOf('Optimizaci\u00f3n preoperatoria') < titulos.indexOf('Manejo perioperatorio de f\u00e1rmacos'),
        'la optimizacion va antes que los farmacos');
    } finally {
      previas.forEach(([k, v]) => { if (v !== null) syncSet(k, v); });
    }
  });

  test('VPO nota: imprimir marca el body solo mientras dura la impresion', () => {
    // La impresion se recorta con una clase en <body> (@media print en styles.css). Si la clase
    // se quedara puesta, el resto de la app quedaria invisible al imprimir cualquier otra cosa.
    const original = window.print;
    let claseDurante = null;
    window.print = () => { claseDurante = document.body.className; };
    try {
      vpoEngine.imprimirNota();
      assert(/imprimiendo-nota/.test(claseDurante || ''), 'la clase deberia estar puesta al imprimir');
      assert(!/imprimiendo-nota/.test(document.body.className), 'la clase deberia quitarse al terminar');
    } finally {
      window.print = original;
      document.body.classList.remove('imprimiendo-nota');
    }
  });

  test('VPO nota: el orden de la nota incluye todas las escalas, ninguna se queda fuera', () => {
    // Si se añade una escala a vpo-calc.js y se olvida ORDEN_NOTA, esa escala se calcularía
    // pero jamás aparecería en la nota, y el fallo sería invisible.
    const keys = vpoCalc.map(c => c.key);
    keys.forEach(k => assert(vpoEngine.ORDEN_NOTA.includes(k), `la escala '${k}' no está en ORDEN_NOTA: no saldría en la nota`));
    vpoEngine.ORDEN_NOTA.forEach(k => assert(keys.includes(k), `ORDEN_NOTA cita '${k}', que ya no existe`));
    assertEqual(vpoEngine.ORDEN_NOTA.length, new Set(vpoEngine.ORDEN_NOTA).size, 'ORDEN_NOTA tiene claves repetidas');
    // Y que el orden sea el de los dominios, no el del archivo: la nota se lee por bloques.
    const dominioDe = k => vpoCalc.find(c => c.key === k).dominio;
    const posicion = vpoEngine.ORDEN_NOTA.map(k => vpoModule.DOMINIOS.findIndex(d => d.id === dominioDe(k)));
    posicion.forEach((n, i) => {
      if (i) assert(n >= posicion[i - 1], 'ORDEN_NOTA deberia ir agrupada por dominio clinico');
    });
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

  test('VPO estudios: cada uno declara qué lo dispara, y no todos dicen lo mismo', () => {
    // El chip de la lista mostraba "No de rutina" en los catorce: una columna idéntica en todas
    // las filas no ayuda a decidir si este paciente necesita este estudio.
    const tipos = Object.keys(vpoEst.DISPARADORES);
    vpoEst.estudios.forEach(e => {
      assert(e.disparador && e.disparador.label, `'${e.id}' no dice qué lo dispara`);
      assert(tipos.includes(e.disparador.tipo), `'${e.id}' usa el tipo de disparador '${e.disparador.tipo}'`);
    });
    const distintos = new Set(vpoEst.estudios.map(e => e.disparador.label));
    assert(distintos.size >= 8, 'si casi todos los disparadores coinciden, el chip vuelve a no informar');
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

  /* ---------------- La nota de VPO solo recoge lo que el usuario afirmó ----------------
     El motor de calculadoras avisa de cada resultado, incluido el que calcula solo al abrir la
     escala sobre sus valores por defecto. Sin distinguir ese primer cálculo, abrir una escala
     para mirarla (desde VPO, desde el tema o desde Calc) escribía en la nota de un paciente
     frases que nadie había calculado: "STOP-BANG 0 de 8, riesgo bajo". Se prueba contra el DOM
     real, porque el fallo vivía en el ciclo abrir/recalcular, no en los datos. */
  test('VPO nota: abrir una escala no mete su valor por defecto en la nota del paciente', () => {
    const caja = document.createElement('div');
    caja.innerHTML = '<div id="overlay"><div id="modal"></div></div>';
    document.body.appendChild(caja);
    // tests.html comparte origen con la app: se respeta el borrador del usuario.
    const previas = syncGet('rm:vpo:escalas', {});
    try {
      syncSet('rm:vpo:escalas', {});
      calcEngine.setCalcTopic({ meta: { accent: '#3d5a73' }, calculators: vpoCalc, combinedNote: vpoModule.combinedNote });
      calcEngine.openCalc('stopbang');
      assert(document.getElementById('calc-result-text').innerHTML.includes('STOP-BANG'),
        'la escala debería mostrar su resultado al abrirse');
      assertEqual(Object.keys(syncGet('rm:vpo:escalas', {})), [],
        'solo abrir la escala ya escribió en la nota del paciente');

      // En cuanto el usuario responde algo, el resultado sí es suyo y sí entra en la nota.
      const ronca = document.getElementById('vsb-s');
      ronca.checked = true;
      ronca.dispatchEvent(new Event('change'));
      assertEqual(Object.keys(syncGet('rm:vpo:escalas', {})), ['stopbang'],
        'tras responder un ítem, la escala debería entrar en la nota');

      // Y una escala PEDIDA (el botón Calcular de un paso de la ruta) cuenta desde el primer
      // resultado: el usuario la pidió para este paciente, y puede que no tenga nada que tocar
      // porque la ficha ya le dio todos los campos.
      syncSet('rm:vpo:escalas', {});
      calcEngine.openCalc('apfel', { pedida: true });
      assertEqual(Object.keys(syncGet('rm:vpo:escalas', {})), ['apfel'],
        'una escala pedida desde un paso debería guardarse aunque no se toque nada');
    } finally {
      syncSet('rm:vpo:escalas', previas);
      calcEngine.closeModal();
      caja.remove();
    }
  });

  test('VPO: "Paciente nuevo" tambien descarta los campos compartidos del paciente anterior', () => {
    // Edad, clase ASA, estado funcional y tipo de cirugia se comparten entre escalas y vivian
    // solo en memoria, fuera de lo que borraba nuevoPaciente(): la siguiente escala que se
    // abria llegaba con la edad y el ASA del paciente anterior ya puestos.
    const caja = document.createElement('div');
    caja.innerHTML = '<div id="overlay"><div id="modal"></div></div>';
    document.body.appendChild(caja);
    // nuevoPaciente() borra el borrador entero, y tests.html comparte origen con la app: se
    // guarda todo lo que toca y se restaura al salir.
    const CLAVES = ['rm:vpo:escalas', 'rm:vpo:ruta', 'rm:vpo:farmacos', 'rm:vpo:estudios'];
    const previas = CLAVES.map(k => [k, syncGet(k, null)]);
    try {
      calcEngine.setCalcTopic({ meta: { accent: '#3d5a73' }, calculators: vpoCalc, combinedNote: vpoModule.combinedNote });
      calcEngine.openCalc('guptamica');
      const edad = document.getElementById('vm-age');
      edad.value = '82';
      edad.dispatchEvent(new Event('input'));
      calcEngine.openCalc('ariscat');
      assertEqual(document.getElementById('var-edad').value, '82', 'la edad deberia propagarse entre escalas');

      vpoEngine.nuevoPaciente();
      calcEngine.openCalc('ariscat');
      assertEqual(document.getElementById('var-edad').value, '',
        'tras "Paciente nuevo" la escala sigue abriendo con la edad del paciente anterior');
    } finally {
      previas.forEach(([k, v]) => { if (v !== null) syncSet(k, v); });
      calcEngine.closeModal();
      caja.remove();
    }
  });

  test('VPO Gupta (falla respiratoria): abre con la cirugia marcada como electiva', () => {
    // El modelo resta 0.5739 cuando la cirugia es electiva. Quien abre la escala en una consulta
    // de valoracion esta viendo una cirugia programada: sin la casilla marcada, el riesgo de
    // entrada sale inflado.
    const campo = vpo('guptaprf').fields.find(f => f.name === 'electiva');
    assert(campo.checked === true, 'la casilla de cirugia electiva deberia venir marcada');
    const conElectiva = vpo('guptaprf').compute({ age: 65, asa: '3', func: 'independent', sepsis: 'none', electiva: true, surg: 'hernia' });
    const sinElectiva = vpo('guptaprf').compute({ age: 65, asa: '3', func: 'independent', sepsis: 'none', electiva: false, surg: 'hernia' });
    assert(conElectiva.pct < sinElectiva.pct, 'la cirugia electiva deberia bajar el riesgo calculado');
  });

  test('VPO glucemia: el objetivo perioperatorio es de 100 a 180, ni mas estricto ni mas laxo', () => {
    const gl = vpo('glucemia');
    const caso = glucosa => gl.compute({ glucosa, tratamiento: 'basal' });
    assertEqual(caso(240).alta, true);
    assertEqual(caso(180).alta, false, '180 todavia esta dentro');
    assertEqual(caso(100).baja, false, '100 tambien');
    assertEqual(caso(85).baja, true);
    assert(/100 a 180/.test(gl.format(caso(240))), 'deberia decir cual es el objetivo');
    assert(/m[a\u00e1]s estrict/i.test(gl.format(caso(140))),
      'y que apretar mas no mejora nada y provoca hipoglucemias');
  });

  test('VPO glucemia: no se pospone una cirugia por la HbA1c sola', () => {
    // La ADA lo dice expresamente: retrasar o negar una cirugia necesaria por ese dato
    // aislado no esta recomendado, aunque el objetivo preoperatorio sea menos del 8 %.
    const gl = vpo('glucemia');
    const alta = gl.compute({ glucosa: 150, hba1c: 9.4, tratamiento: 'orales' });
    assertEqual(alta.a1cAlta, true);
    const texto = gl.format(alta);
    assert(/no posponer/i.test(texto), 'deberia decir que no se pospone solo por eso');
    assert(/8 %/.test(texto), 'y cual es el objetivo preoperatorio');
    assertEqual(gl.compute({ glucosa: 150, hba1c: 7.2, tratamiento: 'orales' }).a1cAlta, false);
    assert(!/no posponer/i.test(gl.format(gl.compute({ glucosa: 150, tratamiento: 'orales' }))),
      'sin HbA1c no se dice nada de ella');
  });

  test('VPO glucemia: el plan del dia depende del tratamiento, y la insulina es la unica que queda', () => {
    const gl = vpo('glucemia');
    const plan = tratamiento => gl.format(gl.compute({ glucosa: 150, tratamiento }));
    assert(/\u00fanico hipoglucemiante/.test(plan('orales')), 'los orales se suspenden el dia del procedimiento');
    assert(/SGLT2/.test(plan('orales')), 'y recuerda los dos que no esperan al dia de la cirugia');
    assert(/25 %/.test(plan('basal')), 'la basal se reduce alrededor del 25 %');
    assert(/basal-bolo/.test(plan('bolo')), 'el basal-bolo gana a corregir solo con rapida');
    assert(/antes<\/strong> de entrar|antes de entrar/.test(plan('bomba')),
      'con bomba hay que dejar el plan alternativo montado antes');
  });

  test('VPO prehabilitacion: lo que cabe hacer depende de las semanas que quedan', () => {
    const pre = vpo('prehabilitacion');
    const paciente = { tabaco: true, anemia: true, fragilidad: true, glucemia: true };
    const sobra = pre.compute({ ventana: 'mas8', ...paciente });
    assertEqual(sobra.tarde.length, 0, 'con mas de 8 semanas cabe todo');
    assertEqual(sobra.caben.length, 4);
    const justo = pre.compute({ ventana: 'dos', ...paciente });
    assertEqual(justo.caben.map(m => m.key), ['anemia', 'glucemia'],
      'entre 2 y 4 semanas todavia da tiempo a corregir la anemia, pero no a las 4 del tabaco');
    const tarde = pre.compute({ ventana: 'menos', ...paciente });
    assertEqual(tarde.caben.map(m => m.key), ['glucemia'],
      'con menos de 2 semanas solo queda el control glucemico, que no necesita ventana');
    assertEqual(tarde.tarde.map(m => m.key), ['tabaco', 'anemia', 'fragilidad']);
  });

  test('VPO prehabilitacion: lo que ya no da tiempo no desaparece, se cambia por lo que si cabe', () => {
    // Una herramienta que solo dijera "ya es tarde" no serviria de nada la vispera, que es
    // justo cuando mas se consulta.
    const pre = vpo('prehabilitacion');
    const texto = pre.format(pre.compute({ ventana: 'menos', tabaco: true, anemia: true, fragilidad: true }));
    assert(/ya no da tiempo/i.test(texto), 'deberia separar lo que ya no cabe');
    assert(/carboxihemoglobina/.test(texto), 'y decir que dejar de fumar sigue valiendo la pena');
    assert(/intravenoso/.test(texto), 'que a la anemia ferropenica le queda el hierro intravenoso');
    assert(/geri[a\u00e1]trica/.test(texto), 'y que al fragil le queda la valoracion geriatrica');
    const nadie = pre.format(pre.compute({ ventana: 'mas8' }));
    assert(/Sin objetivos/.test(nadie), 'sin nada marcado no deberia inventarse un programa');
    // Y la linea que va a la nota dice que se va a hacer, no cuantas medidas son: un recuento
    // no se puede leer en un expediente.
    const linea = pre.fragment(pre.compute({ ventana: 'dos', tabaco: true, anemia: true }));
    assert(/da tiempo a corregir la anemia/.test(linea), `la linea de la nota deberia nombrar la medida: ${linea}`);
    assert(/ya no a dejar el tabaco/.test(linea), 'y la que se quedó fuera');
  });

  test('VPO prehabilitacion: se presenta como evidencia emergente, no como recomendacion con clase', () => {
    // La guia de 2024 dice que la evidencia es emergente y que puede asociarse a mejores
    // desenlaces en pacientes seleccionados; no le da una clase. Lo que si tiene clase son sus
    // piezas sueltas, y la herramienta no debe confundir las dos cosas.
    const pre = vpo('prehabilitacion');
    const medidas = k => pre.compute({ ventana: 'mas8', [k]: true }).caben[0];
    assertEqual(medidas('fragilidad').respaldo, 'emergente',
      'el acondicionamiento fisico y el soporte nutricional son la pieza de evidencia emergente');
    ['tabaco', 'anemia', 'glucemia'].forEach(k =>
      assertEqual(medidas(k).respaldo, 'guia', `'${k}' si tiene respaldo de guia`));
    const texto = pre.format(pre.compute({ ventana: 'mas8', fragilidad: true }));
    assert(/evidencia emergente/.test(texto), 'deberia decirlo en el cuerpo');
    assert(!/clase 2a[^.]*prehabilitaci/i.test(texto), 'no deberia atribuirle una clase que no tiene');
  });

  test('VPO anemia: el umbral de la OMS distingue por sexo', () => {
    const an = vpo('anemia');
    const caso = (hb, sexo) => an.compute({ hb, sexo, semanas: 'muchas' });
    assertEqual(caso(12.5, 'm').anemia, true, 'por debajo de 13 el varon tiene anemia');
    assertEqual(caso(12.5, 'f').anemia, false, 'la misma cifra en la mujer no lo es');
    assertEqual(caso(11.9, 'f').anemia, true);
    assertEqual(an.compute({ hb: null, sexo: 'm', semanas: 'muchas' }), null, 'sin hemoglobina no calcula');
  });

  test('VPO anemia: sin ferritina ni saturacion lo primero es pedirlas, no tratar', () => {
    // La ferropenia explica entre el 40 y el 50 % de las anemias quirurgicas, y es la unica
    // que tiene un tratamiento que funciona en el tiempo que queda.
    const an = vpo('anemia');
    const sinEstudio = an.compute({ hb: 10.2, sexo: 'm', semanas: 'muchas' });
    assertEqual(sinEstudio.hayEstudio, false);
    assert(/ferritina y saturaci/i.test(an.format(sinEstudio)), 'deberia pedir el estudio de hierro');
    // Cualquiera de los dos criterios basta.
    assertEqual(an.compute({ hb: 10.2, sexo: 'm', ferritina: 80, semanas: 'muchas' }).ferropenia, true);
    assertEqual(an.compute({ hb: 10.2, sexo: 'm', satTrans: 15, semanas: 'muchas' }).ferropenia, true);
    assertEqual(an.compute({ hb: 10.2, sexo: 'm', ferritina: 300, satTrans: 40, semanas: 'muchas' }).ferropenia, false);
    assert(/otra causa/i.test(an.format(an.compute({ hb: 10.2, sexo: 'm', ferritina: 300, semanas: 'muchas' }))),
      'sin ferropenia hay que buscar la causa, no dar hierro');
  });

  test('VPO anemia: el tiempo que queda decide la via del hierro', () => {
    const an = vpo('anemia');
    const con = semanas => an.format(an.compute({ hb: 10.2, sexo: 'm', ferritina: 40, semanas }));
    assert(/oral o intravenoso/i.test(con('muchas')), 'con mas de 4 semanas cabe el oral');
    const corto = con('pocas');
    assert(/intravenoso/i.test(corto) && /Ganzoni/.test(corto),
      'con menos de 4 semanas, intravenoso y con la formula para dosificarlo');
    // El tranexamico no depende de la anemia sino del sangrado previsto.
    assert(/tranex/i.test(an.format(an.compute({ hb: 15, sexo: 'm', semanas: 'muchas', sangrado: true }))),
      'con sangrado previsto se ofrece aunque no haya anemia');
    assert(!/tranex/i.test(an.format(an.compute({ hb: 15, sexo: 'm', semanas: 'muchas' }))));
  });

  test('VPO troponina posoperatoria: a quien se le mide, y a quien no', () => {
    // Clase 2b en el paciente de riesgo elevado con enfermedad cardiovascular conocida,
    // sintomas, o 65 anos o mas con factores de riesgo. En cirugia de bajo riesgo es clase 3
    // por falta de beneficio, que es el otro error: cribar a todo el mundo.
    const mins = vpo('mins');
    assertEqual(mins.compute({ riesgoCx: 'elevado', perfil: 'cv', troponina: 'pendiente' }).cribar, true);
    assertEqual(mins.compute({ riesgoCx: 'elevado', perfil: 'sintomas', troponina: 'pendiente' }).cribar, true);
    assertEqual(mins.compute({ riesgoCx: 'elevado', perfil: 'edad', troponina: 'pendiente' }).cribar, true);
    assertEqual(mins.compute({ riesgoCx: 'elevado', perfil: 'ninguno', troponina: 'pendiente' }).cribar, false,
      'sin el perfil de la recomendacion no se criba');
    assertEqual(mins.compute({ riesgoCx: 'bajo', perfil: 'cv', troponina: 'pendiente' }).cribar, false,
      'en cirugia de bajo riesgo no se criba aunque el paciente sea cardiopata');
    const bajo = mins.format(mins.compute({ riesgoCx: 'bajo', perfil: 'cv', troponina: 'pendiente' }));
    assert(/clase 3/.test(bajo), 'deberia decir que es una clase 3 por falta de beneficio');
    assert(/24 y 48/.test(mins.format(mins.compute({ riesgoCx: 'elevado', perfil: 'cv', troponina: 'pendiente' }))),
      'y cuando se toman las muestras');
  });

  test('VPO troponina posoperatoria: la elevada sin sintomas es el caso tipico, no el raro', () => {
    // Entre el 80 y el 90 % de los MINS no dan sintomas, y aun asi triplican la mortalidad a
    // 30 dias. Es justo el caso que se pasa por alto si solo se mide a quien se queja.
    const mins = vpo('mins');
    const caso = troponina => mins.format(mins.compute({ riesgoCx: 'elevado', perfil: 'cv', troponina }));
    const silente = caso('silente');
    assert(/80 y el 90/.test(silente), 'deberia decir que es el caso tipico');
    assert(/consulta/.test(silente), 'y que hay que citar para optimizar los factores de riesgo (clase 2a)');
    assert(/embolia pulmonar/.test(silente), 'y que antes hay que descartar las causas no isquemicas');
    const isquemica = caso('isquemica');
    assert(/infarto perioperatorio/.test(isquemica), 'con sintomas ya no es solo vigilancia');
    assert(!/80 y el 90/.test(caso('normal')), 'una troponina normal cierra la vigilancia');
  });

  test('VPO profilaxis quirurgica: el agente sale de la tabla, y hay cirugias que no la llevan', () => {
    // La mitad del valor de la tabla son las cirugias que NO la llevan: la limpia de mano,
    // rodilla o pie, la de cabeza y cuello limpia y la colecistectomia laparoscopica de bajo
    // riesgo. Darla igual solo expone al paciente y selecciona resistencias.
    const pq = vpo('profilaxisqx');
    assertEqual(pq.compute({ cirugia: 'manoPie' }).sinProfilaxis, true);
    assertEqual(pq.compute({ cirugia: 'biliarLapBajo' }).sinProfilaxis, true);
    assertEqual(pq.compute({ cirugia: 'cuelloLimpia' }).sinProfilaxis, true);
    assertEqual(pq.compute({ cirugia: 'ortopedica' }).sinProfilaxis, false);

    const colon = pq.compute({ cirugia: 'colorrectal' });
    assert(/cefazolina/.test(colon.esquema) && /metronidazol/.test(colon.esquema),
      'la colorrectal lleva cefazolina mas metronidazol');
    assert(/clindamicina/.test(pq.compute({ cirugia: 'colorrectal', alergia: true }).esquema),
      'con alergia a betalactamicos cambia el esquema entero');
    assert(/cefoxitina/.test(pq.compute({ cirugia: 'apendice' }).esquema),
      'la apendicectomia no complicada lleva cefoxitina');
  });

  test('VPO profilaxis quirurgica: la redosificacion la marca el agente de vida media mas corta', () => {
    // Cefazolina cada 4 h, cefoxitina cada 2. En un esquema combinado manda el mas corto, que
    // es el que primero deja de cubrir.
    const pq = vpo('profilaxisqx');
    assertEqual(pq.compute({ cirugia: 'ortopedica' }).redosis, 4, 'cefazolina se redosifica a las 4 horas');
    assertEqual(pq.compute({ cirugia: 'apendice' }).redosis, 2, 'cefoxitina, a las 2');
    assertEqual(pq.compute({ cirugia: 'cesarea', alergia: true }).redosis, 6,
      'clindamicina a las 6; la gentamicina en dosis unica no se redosifica');
    assertEqual(pq.compute({ cirugia: 'manoPie' }).redosis, null);
  });

  test('VPO profilaxis quirurgica: el mensaje que importa es suspenderla al terminar', () => {
    // El error frecuente no es olvidar la dosis previa sino prolongarla dias. La OMS lo
    // recomienda en contra con fuerza, y eso es mas reciente que el "menos de 24 horas" de
    // la tabla de 2013.
    const pq = vpo('profilaxisqx');
    const texto = pq.format(pq.compute({ cirugia: 'colorrectal' }));
    assert(/Suspender al terminar/.test(texto), 'deberia decir que se suspende al terminar');
    assert(/60 minutos previos/.test(texto), 'y cuando se da la dosis previa');
    assert(/en revisi\u00f3n/.test(texto), 'y que la tabla de agentes es de 2013 y esta en revision');
    // Con protesis y alergia aparece la vancomicina, que mueve la ventana a 120 minutos.
    const protesis = pq.format(pq.compute({ cirugia: 'ortopedica', alergia: true }));
    assert(/vancomicina/.test(protesis) && /120 minutos/.test(protesis),
      'con material protesico y alergia deberia ofrecer la vancomicina y su ventana');
  });

  test('VPO endocarditis: hay que acertar las dos preguntas, la cardiopatia y el procedimiento', () => {
    // El error frecuente va en los dos sentidos: dar profilaxis a todo portador de protesis
    // ante cualquier procedimiento, y no darla nunca.
    const ei = vpo('endocarditis');
    const caso = (cardiopatia, procedimiento, extra) => ei.compute({ cardiopatia, procedimiento, ...extra });
    assertEqual(caso('ninguna', 'dental').veredicto, 'no', 'sin cardiopatia de riesgo no hay profilaxis');
    assertEqual(caso('protesis', 'dental').veredicto, 'si', 'protesis valvular y procedimiento dental de riesgo: clase 1');
    assertEqual(caso('previa', 'dental').clase, 'clase 1', 'la endocarditis previa es clase 1');
    assertEqual(caso('protesis', 'dentalNo').veredicto, 'no', 'el dental sin manipulacion gingival no la justifica');
    assertEqual(caso('cateterMT', 'dental').veredicto, 'considerar', 'la reparacion por cateter es clase 2a');
    assertEqual(caso('trasplante', 'dental').veredicto, 'puede', 'el trasplante cardiaco es clase 2b');
  });

  test('VPO endocarditis: el procedimiento invasivo no dental ya no es una clase 3', () => {
    // Cambio de la guia de 2023 que contradice lo que mucha gente aprendio: en el paciente de
    // ALTO riesgo puede considerarse (2b), pero sigue sin aplicar al resto.
    const ei = vpo('endocarditis');
    const alto = ei.compute({ cardiopatia: 'protesis', procedimiento: 'invasivo' });
    assertEqual(alto.veredicto, 'puede');
    assertEqual(alto.clase, 'clase 2b');
    assertEqual(ei.compute({ cardiopatia: 'trasplante', procedimiento: 'invasivo' }).veredicto, 'no',
      'el 2b del procedimiento invasivo es solo para el alto riesgo');
    assertEqual(ei.compute({ cardiopatia: 'ninguna', procedimiento: 'invasivo' }).veredicto, 'no');
  });

  test('VPO endocarditis: el implante de material cardiaco lleva profilaxis por si mismo', () => {
    // No es la profilaxis de la endocarditis del paciente de riesgo: es prevenir la infeccion
    // del material que se va a implantar, y por eso aplica tambien al que no tiene cardiopatia.
    const r = vpo('endocarditis').compute({ cardiopatia: 'ninguna', procedimiento: 'cardiaco' });
    assertEqual(r.veredicto, 'si');
    const texto = vpo('endocarditis').format(r);
    assert(/S\. aureus/.test(texto), 'deberia recordar el cribado nasal de S. aureus');
    assert(/2 semanas/.test(texto), 'y eliminar los focos dentales 2 semanas antes');
  });

  test('VPO endocarditis: el regimen cambia con la alergia, y nunca es clindamicina', () => {
    const ei = vpo('endocarditis');
    const texto = extra => ei.format(ei.compute({ cardiopatia: 'protesis', procedimiento: 'dental', ...extra }));
    assert(/amoxicilina 2 g/i.test(texto({})), 'sin alergia, amoxicilina 2 g');
    assert(/cefalexina 2 g/i.test(texto({ alergia: true })), 'con alergia, cefalexina');
    const anafilaxia = texto({ alergia: true, anafilaxia: true });
    assert(!/cefalexina/i.test(anafilaxia), 'con anafilaxia no caben las cefalosporinas');
    assert(/azitromicina|doxiciclina/i.test(anafilaxia), 'quedan los macrolidos o la doxiciclina');
    [{}, { alergia: true }, { alergia: true, anafilaxia: true }].forEach(extra => {
      assert(!/clindamicina (600|300)/i.test(texto(extra)), 'la guia de 2023 retiro la clindamicina');
    });
  });

  test('VPO Cockcroft-Gault: la formula publicada, con el factor 0.85 de la mujer', () => {
    const c = vpo('cockcroft');
    // (140 - 70) x 80 / (72 x 1.2) = 64.8
    assertEqual(c.compute({ edad: 70, sexo: 'm', peso: 80, creatinina: 1.2 }).crcl, 65);
    assertEqual(c.compute({ edad: 70, sexo: 'f', peso: 80, creatinina: 1.2 }).crcl, 55);
    assertEqual(c.compute({ edad: 70, sexo: 'm', peso: null, creatinina: 1.2 }), null, 'sin peso no deberia calcular');
    assertEqual(c.compute({ edad: 70, sexo: 'm', peso: 80, creatinina: 0 }), null, 'una creatinina de 0 no deberia dividir');
  });

  test('VPO Cockcroft-Gault: el umbral que informa es el de 50 que usa el dabigatran', () => {
    const c = vpo('cockcroft');
    const alto = c.format(c.compute({ edad: 50, sexo: 'm', peso: 80, creatinina: 0.9 }));
    const bajo = c.format(c.compute({ edad: 85, sexo: 'f', peso: 50, creatinina: 1.8 }));
    assert(/intervalo corto/.test(alto) && !/intervalo largo/.test(alto),
      'con buen aclaramiento deberia citar el intervalo corto del dabigatran');
    assert(/intervalo largo/.test(bajo) && !/intervalo corto/.test(bajo),
      'con aclaramiento bajo deberia citar el intervalo largo del dabigatran');
  });

  test('VPO ruta: el paso del riesgo lee lo ya calculado contra el umbral de 1 %', () => {
    // El paso pedia un juicio sin apoyo: la guia define elevado como 1 % o mas de riesgo de
    // evento cardiovascular mayor, y el umbral clasico del RCRI es mas de 1 predictor.
    const lectura = ruta.pasos.riesgo.lectura;
    assertEqual(lectura({}), null, 'sin nada calculado no deberia decir nada');
    assertEqual(lectura({ guptamica: { frase: 'x' } }), null, 'una escala guardada sin su valor no se puede leer');

    const alto = lectura({ guptamica: { valor: { pct: 6.36 } } });
    assertEqual(alto.tono, 'elevado');
    assert(/6\.36 %/.test(alto.texto) && /1 %/.test(alto.texto), 'deberia citar el numero y el umbral');

    const bajo = lectura({ guptamica: { valor: { pct: 0.42 } }, leeindex: { valor: { n: 1 } } });
    assertEqual(bajo.tono, 'bajo', 'un RCRI de 1 no supera el umbral de mas de 1');

    const mixto = lectura({ guptamica: { valor: { pct: 1.58 } }, leeindex: { valor: { n: 1 } } });
    assertEqual(mixto.tono, 'mixto', 'si las dos escalas discrepan hay que decirlo');
    assert(/juicio cl\u00ednico/.test(mixto.texto), 'cuando discrepan, la decision es del clinico');

    const dosAltas = lectura({ guptamica: { valor: { pct: 6.36 } }, leeindex: { valor: { n: 3 } } });
    assertEqual(dosAltas.tono, 'elevado');
    assert(/3<\/strong> predictores/.test(dosAltas.texto), 'el plural del RCRI deberia concordar');
    assert(/1<\/strong> predictor,/.test(lectura({ leeindex: { valor: { n: 1 } } }).texto), 'y el singular tambien');
  });

  test('VPO ruta: la herramienta que declara un paso existe de verdad', () => {
    // Cada paso abre la escala o el estudio con el que se contesta. Si alguien renombra una
    // key, el boton deja de abrir nada y no falla en voz alta.
    const keysEscala = new Set(vpoCalc.map(c => c.key));
    const keysEstudio = new Set(vpoEst.estudios.map(e => e.id));
    // Los veredictos las declaran igual que los pasos, asi que se revisan los dos.
    const conHerramientas = [
      ...Object.entries(ruta.pasos).map(([id, p]) => [`paso '${id}'`, p]),
      ...Object.entries(ruta.veredictos).map(([id, v]) => [`veredicto '${id}'`, v])
    ];
    conHerramientas.forEach(([quien, nodo]) => {
      (nodo.herramientas || []).forEach(h => {
        assert(h.label, `el ${quien} declara una herramienta sin etiqueta`);
        if (h.tipo === 'estudio') {
          assert(keysEstudio.has(h.key), `el ${quien} abre el estudio '${h.key}', que no existe`);
        } else {
          assertEqual(h.tipo, 'escala', `el ${quien} usa el tipo '${h.tipo}'`);
          assert(keysEscala.has(h.key), `el ${quien} abre la escala '${h.key}', que no existe`);
        }
      });
    });
  });

  test('VPO ruta: los veredictos que terminan operando ofrecen la vigilancia posoperatoria', () => {
    // Los tres que acaban en quirofano mencionan vigilar, y ahora la escala se abre desde el
    // propio veredicto en vez de quedarse como una frase.
    ['emergencia', 'urgencia', 'procederOptimizado'].forEach(k => {
      const v = ruta.veredictos[k];
      assert((v.herramientas || []).some(h => h.key === 'mins'),
        `el veredicto '${k}' deberia ofrecer la vigilancia de troponina`);
    });
    assert(!(ruta.veredictos.procederBajo.herramientas || []).length,
      'en el de riesgo bajo no se criba: ofrecerla ahi contradiria la clase 3');
    // El veredicto que se llama "con optimizacion" es el unico que ademas abre la herramienta
    // que dice que cabe optimizar: sin ella, "optimizar" es una palabra sin conducta detras.
    assert((ruta.veredictos.procederOptimizado.herramientas || []).some(h => h.key === 'prehabilitacion'),
      'el veredicto de optimizacion deberia abrir la prehabilitacion');
  });

  test('VPO ruta: los pasos que se contestan con una escala la traen a mano', () => {
    // No es decoracion: son los dos pasos que el residente no puede contestar a ojo.
    const herr = id => (ruta.pasos[id].herramientas || []).map(h => h.key);
    assertEqual(herr('riesgo'), ['leeindex', 'guptamica'], 'el paso del riesgo calculado se contesta con Lee y Gupta-MICA');
    assertEqual(herr('funcional'), ['dasi'], 'la capacidad funcional se contesta con el DASI');
    assert(herr('utilidad').includes('biomarcadores'), 'el paso de la utilidad del estudio deberia abrir los biomarcadores');
  });

  test('VPO ruta: el primer paso separa las cuatro categorias de la guia', () => {
    // "Sensible al tiempo" y "electiva" iban juntas, y es la distincion que decide si una
    // cirugia puede adelantarse a los 3 meses de un stent farmacoactivo.
    const primero = ruta.pasos[ruta.PRIMER_PASO];
    const etiquetas = primero.opciones.map(o => o.label);
    assertEqual(etiquetas, ['Emergencia', 'Urgencia', 'Sensible al tiempo', 'Electiva']);
    const texto = JSON.stringify(primero);
    assert(/2 horas/.test(texto) && /2 a 24 horas/.test(texto), 'los umbrales deberian ser los de la Tabla 2 de la guia');
    assert(/3 meses/.test(texto), 'sensible al tiempo se define por poder diferirse hasta 3 meses');
  });

  test('VPO ficha: el resumen del paciente se lee como una frase, corta o larga', () => {
    const r = vpoEngine.resumenPaciente;
    assertEqual(r({}), '', 'sin datos no deberia haber frase');
    assertEqual(r({ edad: '72', sexo: 'f' }), 'Mujer de 72 años');
    assertEqual(r({ edad: '72' }), '72 años');
    assertEqual(r({ sexo: 'm', asa: '3' }), 'Varón, ASA III');
    // La version larga es la que encabeza la nota del expediente.
    const largo = r({ edad: '72', sexo: 'f', peso: '68', creatinina: '2.4', asa: '3', func: 'partial', surg: 'hernia' }, { largo: true });
    assert(/68 kg/.test(largo) && /2\.4 mg\/dL/.test(largo), 'el peso y la creatinina solo salen en la version larga');
    assert(/parcialmente dependiente/.test(largo), 'el estado funcional deberia ir en palabras');
    assert(!/referencia/.test(largo), 'la "(referencia)" es del modelo de Gupta, no del paciente');
    const corto = r({ edad: '72', sexo: 'f', peso: '68', creatinina: '2.4' });
    assert(!/68 kg/.test(corto), 'la cabecera plegada no deberia cargar con todo');
  });

  test('VPO ficha: lo que se escribe una vez llega relleno a todas las escalas', () => {
    // El dato del paciente se escribia tantas veces como escalas lo pidieran. Ahora vive en la
    // ficha, y la creatinina exacta decide sola los umbrales de cada escala, que no coinciden:
    // mas de 2.0 en el indice de Lee, 1.5 o mas en Gupta-MICA.
    const caja = document.createElement('div');
    caja.innerHTML = '<div id="overlay"><div id="modal"></div></div>';
    document.body.appendChild(caja);
    const CLAVES = ['rm:vpo:paciente', 'rm:vpo:escalas', 'rm:vpo:ruta', 'rm:vpo:farmacos', 'rm:vpo:estudios'];
    const previas = CLAVES.map(k => [k, syncGet(k, null)]);
    try {
      vpoEngine.nuevoPaciente();
      calcEngine.setCalcTopic({ meta: { accent: '#3d5a73' }, calculators: vpoCalc, combinedNote: vpoModule.combinedNote });
      [['edad', '72'], ['sexo', 'f'], ['peso', '68'], ['creatinina', '1.8'], ['asa', '4'], ['surg', 'aortic']]
        .forEach(([campo, valor]) => vpoEngine.fichaCampo(campo, valor));

      calcEngine.openCalc('guptamica');
      assertEqual(document.getElementById('vm-age').value, '72', 'la edad no llego a Gupta-MICA');
      assertEqual(document.getElementById('vm-asa').value, '4', 'la clase ASA no llego a Gupta-MICA');
      assertEqual(document.getElementById('vm-surg').value, 'aortic', 'el tipo de cirugia no llego a Gupta-MICA');
      assert(document.getElementById('vm-creat').checked, 'una creatinina de 1.8 supera el umbral de 1.5 de Gupta-MICA');

      calcEngine.openCalc('leeindex');
      assert(!document.getElementById('vl-rf6').checked, 'una creatinina de 1.8 NO supera el umbral de 2.0 del indice de Lee');

      calcEngine.openCalc('cockcroft');
      assertEqual(document.getElementById('vcg-peso').value, '68', 'el peso no llego a Cockcroft-Gault');
      assertEqual(document.getElementById('vcg-sexo').value, 'f', 'el sexo no llego a Cockcroft-Gault');

      // Y al reves: lo que se escribe dentro de una escala se guarda en la ficha.
      const edad = document.getElementById('vcg-edad');
      edad.value = '80';
      edad.dispatchEvent(new Event('input'));
      assertEqual(syncGet('rm:vpo:paciente', {}).edad, '80', 'la edad escrita en una escala no volvio a la ficha');

      // Y "Paciente nuevo" tambien se lleva la ficha.
      vpoEngine.nuevoPaciente();
      assertEqual(syncGet('rm:vpo:paciente', {}), {}, 'la ficha deberia vaciarse con el paciente nuevo');
    } finally {
      previas.forEach(([k, v]) => { if (v !== null) syncSet(k, v); });
      calcEngine.closeModal();
      caja.remove();
    }
  });

  test('VPO: la barra de pestañas se declara como tal y se recorre con el teclado', () => {
    // Eran cinco botones sueltos: quien usa un lector de pantalla no sabía cuántas pestañas
    // hay ni cuál está activa, y con el teclado habia que tabular por las cinco.
    const caja = document.createElement('div');
    document.body.appendChild(caja);
    const previas = [['rm:vpo:tab', syncGet('rm:vpo:tab', null)]];
    try {
      vpoEngine.mountVpo(caja);
      const barra = caja.querySelector('.vpo-tabbar');
      assertEqual(barra.getAttribute('role'), 'tablist', 'la barra deberia declararse como tablist');
      assert(barra.getAttribute('aria-label'), 'un tablist sin nombre no dice de que es');

      const pills = [...barra.querySelectorAll('.pill')];
      assertEqual(pills.length, 5);
      pills.forEach(pz => {
        assertEqual(pz.getAttribute('role'), 'tab', `'${pz.textContent}' no es un tab`);
        assert(pz.hasAttribute('aria-selected'), `'${pz.textContent}' no dice si esta activa`);
        assertEqual(pz.getAttribute('aria-controls'), pz.id.replace('vpo-tab-', 'vpo-pane-'),
          `'${pz.textContent}' no apunta a su panel`);
      });
      // Solo la activa entra en el orden de tabulacion.
      const activas = pills.filter(pz => pz.getAttribute('aria-selected') === 'true');
      assertEqual(activas.length, 1, 'deberia haber exactamente una pestana activa');
      assertEqual(activas[0].tabIndex, 0);
      assertEqual(pills.filter(pz => pz.tabIndex === 0).length, 1, 'el tabindex deberia ser rotatorio');

      // El panel visible se anuncia como panel y los ocultos quedan fuera.
      vpoEngine.showTab('ruta', { scroll: false });
      const panel = caja.querySelector('#vpo-pane-ruta');
      assertEqual(panel.getAttribute('role'), 'tabpanel');
      assertEqual(panel.getAttribute('aria-labelledby'), 'vpo-tab-ruta');
      assertEqual(panel.hidden, false);

      // Teclado: la flecha mueve y activa, Fin va a la ultima y se da la vuelta.
      barra.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
      assertEqual(caja.querySelector('.pill.active').id, 'vpo-tab-escalas', 'la flecha derecha deberia pasar a Escalas');
      barra.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }));
      assertEqual(caja.querySelector('.pill.active').id, 'vpo-tab-nota', 'Fin deberia ir a la ultima');
      barra.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
      assertEqual(caja.querySelector('.pill.active').id, 'vpo-tab-ruta', 'desde la ultima deberia dar la vuelta');
    } finally {
      previas.forEach(([k, v]) => { if (v !== null) syncSet(k, v); });
      caja.remove();
    }
  });

  test('VPO buscador: encuentra por nombre, por alias y por el grupo, como ofrece el campo', () => {
    // El placeholder ofrece buscar "fármaco, hábito o grupo", pero la etiqueta del grupo solo
    // vivía en el encabezado del acordeón: "esteroides" y "anticoagulantes" no devolvían nada.
    const f = q => vpoEngine.listaFarmacosHTML(q);
    assert(f('apixaban').includes('Apixabán'), 'la búsqueda debería ignorar los acentos');
    assert(f('stent').includes('Tiempos de espera tras ICP'), 'no encuentra por alias');
    assert(f('esteroides').includes('Corticoides sistémicos'), 'no encuentra por la etiqueta del grupo');
    assert(f('anticoagulantes').includes('Warfarina'), 'no encuentra el grupo de anticoagulantes');
    assert(f('zzz').includes('vpo-empty'), 'una búsqueda sin resultados debería decirlo');
    assert(vpoEngine.listaEstudiosHTML('cardiaca').includes('Electrocardiograma'),
      'los estudios tampoco encuentran por grupo');
  });

  test('VPO Gupta (falla respiratoria): abre sin estado séptico, que es el paciente programado', () => {
    // El valor preseleccionado es el que lee quien abre la escala para mirarla: si abre en
    // SIRS, el riesgo de entrada está inflado sin que nadie haya dicho que el paciente lo tenga.
    const campo = vpo('guptaprf').fields.find(f => f.name === 'sepsis');
    const porDefecto = campo.options.find(o => o.selected);
    assertEqual(porDefecto.value, 'none', 'la escala no debería abrir con un estado séptico puesto');
  });

  /* ---------------- Pintado de campos de calculadora (engine/calculators.js) ----------------
     El fallo que motiva estas pruebas estaba en el PINTADO, no en los datos: fieldHTML solo leia
     la forma {value, label} de una opcion, de modo que los 18 temas escritos con la forma corta
     {v, t} generaban <option value="undefined">undefined</option> en los 132 campos afectados, y
     compute() recibia la cadena "undefined". Ni compute() ni una prueba sobre los descriptores lo
     detectan: hay que probar el HTML que se genera. */
  const { fieldHTML } = await import('./engine/calculators.js');

  test('fieldHTML: un select en forma {value, label} se pinta con sus valores', () => {
    const html = fieldHTML({ type: 'select', id: 'p1', label: 'Prueba',
      options: [{ value: '2', label: 'Dos' }] });
    assert(html.includes('value="2"'), 'no conserva el value');
    assert(html.includes('>Dos<'), 'no conserva el label');
  });

  test('fieldHTML: una casilla con checked se pinta marcada', () => {
    assert(fieldHTML({ type: 'checkbox', id: 'p3', label: 'Prueba', checked: true }).includes(' checked'),
      'no pinta el atributo checked');
    assert(!fieldHTML({ type: 'checkbox', id: 'p4', label: 'Prueba' }).includes(' checked'),
      'pinta checked en una casilla que no lo pide');
  });

  test('fieldHTML: un select en forma corta {v, t} tambien se pinta (no "undefined")', () => {
    const html = fieldHTML({ type: 'select', id: 'p2', label: 'Prueba',
      options: [{ v: 'alterado', t: 'Confusion nueva' }] });
    assert(!html.includes('undefined'), 'pinta "undefined": la forma corta no se esta leyendo');
    assert(html.includes('value="alterado"'), 'no conserva el value de la forma corta');
    assert(html.includes('>Confusion nueva<'), 'no conserva el label de la forma corta');
  });

  const { registry: reg2, loadTopic: load2 } = await import('./topics/registry.js');
  const selectsQuePintanUndefined = [];
  for (const entry of reg2) {
    const tp = await load2(entry.id);
    (tp.calculators || []).forEach(c => {
      (c.fields || []).forEach(f => {
        if (f.type !== 'select') return;
        if (fieldHTML(f).includes('undefined')) {
          selectsQuePintanUndefined.push(`${entry.id}/${c.key}/${f.name || f.id}`);
        }
      });
    });
  }

  // Ojo: test() no hace await de fn(), asi que esta comprobacion se hace fuera y la prueba solo
  // afirma sobre el resultado ya calculado. Una prueba async aqui pasaria SIEMPRE.
  test('fieldHTML: ningun select de ningun tema registrado pinta "undefined"', () => {
    assertEqual(selectsQuePintanUndefined.length, 0,
      `campos que pintan "undefined": ${selectsQuePintanUndefined.slice(0, 5).join(', ')}`);
  });

  /* ---------------- Integridad de esquema: temas registrados (topics/registry.js) ----------------
     Cada tema nuevo que se agregue a topics/registry.js pasa automáticamente por estas pruebas la
     próxima vez que se abra tests.html — atrapa campos faltantes/vacíos antes de que lleguen al
     usuario, sin necesidad de Node ni un framework de tipos. */
  const { registry, loadTopic } = await import('./topics/registry.js');

  const studyView = await import('./engine/study-view.js');

  /* ---- Buscador bajo demanda ----
     El indice obliga a cargar los 107 temas (243 modulos, 7.3 MB), asi que ya no se arma al
     arrancar sino la primera vez que alguien busca. El riesgo del cambio es silencioso: si nadie
     llama al cargador, el buscador no encuentra nunca nada y no hay error en ninguna consola. */
  test('buscador: la primera busqueda pide el indice, avisa que lo prepara y repinta al llegar', () => {
    const inp = document.createElement('input'); inp.id = 'search-input';
    const box = document.createElement('div'); box.id = 'search-results';
    document.body.append(inp, box);
    try {
      studyView.resetGlobalSearch();
      let pedidos = 0;
      studyView.setGlobalSearchLoader(() => { pedidos++; });
      inp.value = 'sofa';
      window.runSearch('sofa');
      assertEqual(pedidos, 1, 'la primera busqueda tiene que pedir el indice');
      assert(/Preparando/.test(box.innerHTML), 'mientras se arma, la caja tiene que decirlo');
      studyView.setGlobalSearch([{ label: 'SOFA', type: 'Escala', scope: 'Sepsis' }], () => {});
      assert(/SOFA/.test(box.innerHTML), 'al llegar el indice se repinta la busqueda que estaba esperando');
      window.runSearch('sofa');
      assertEqual(pedidos, 1, 'con el indice ya armado no se vuelve a pedir');
    } finally {
      inp.remove(); box.remove();
      studyView.resetGlobalSearch();
      studyView.setGlobalSearchLoader(null);
    }
  });

  test('buscador: olvidar el indice (cambio de sesion) hace que se vuelva a pedir', () => {
    const inp = document.createElement('input'); inp.id = 'search-input';
    const box = document.createElement('div'); box.id = 'search-results';
    document.body.append(inp, box);
    try {
      let pedidos = 0;
      studyView.setGlobalSearchLoader(() => { pedidos++; });
      studyView.setGlobalSearch([{ label: 'SOFA', type: 'Escala', scope: 'Sepsis' }], () => {});
      window.runSearch('sofa');
      assertEqual(pedidos, 0, 'con indice armado no se pide nada');
      studyView.resetGlobalSearch();
      window.runSearch('sofa');
      assertEqual(pedidos, 1, 'tras olvidarlo, la siguiente busqueda lo vuelve a pedir');
    } finally {
      inp.remove(); box.remove();
      studyView.resetGlobalSearch();
      studyView.setGlobalSearchLoader(null);
    }
  });

  for (const entry of registry) {
    const topic = await loadTopic(entry.id);

    test(`esquema[${entry.id}]: carga sin errores y meta.id coincide con el registro`, () => {
      assert(topic, `loadTopic('${entry.id}') devolvió null`);
      assertEqual(topic.meta && topic.meta.id, entry.id);
    });

    // Inicio NO carga los temas: lee `accent` y `preguntas` de la entrada del registro, porque
    // cargar los 106 para leer dos campos costaba 208 peticiones y 7.3 MB antes de pintar. Esa
    // duplicacion solo es sostenible si algo la vigila: aqui se compara con la fuente de verdad,
    // que es el modulo del tema. Si falla al anadir preguntas, lo que hay que corregir es el
    // numero en topics/registry.js, no esta prueba.
    test(`esquema[${entry.id}]: accent y preguntas del registro coinciden con el modulo`, () => {
      assertEqual(entry.accent, topic.meta && topic.meta.accent);
      assert(typeof entry.preguntas === 'number', `preguntas debe ser un numero en el registro, es ${typeof entry.preguntas}`);
      const real = ((topic.study && topic.study.quiz) || []).length;
      assertEqual(entry.preguntas, real);
    });

    // El progreso de repaso se guarda bajo un id derivado del enunciado (ver engine/quiz-srs.js).
    // Dos preguntas de un mismo tema con el mismo id compartirian caja y fecha sin que nada lo
    // delate: responder una marcaria la otra como respondida.
    // El examen simulado (engine/exam-mode.js) mete TODO el banco de cada tema en su mazo y
    // pinta `q.options.map(...)`. Una entrada sin opciones utilizables deja la pantalla del
    // examen en blanco con un TypeError: paso exactamente eso con los casos en cascada, que
    // guardan sus opciones dentro de `steps`, y al ser el 15% del banco el examen de 20
    // preguntas se rompia el 96% de las veces. Esta prueba vigila el contrato que el examen
    // necesita: toda entrada es o una pregunta suelta con opciones, o una cascada cuyo primer
    // paso las tiene.
    test(`esquema[${entry.id}]: toda entrada del banco es utilizable por el examen simulado`, () => {
      const malas = [];
      (topic.study.quiz || []).forEach((q, i) => {
        const usable = (o, c) => Array.isArray(o) && o.length >= 2 && typeof c === 'number' && c >= 0 && c < o.length;
        if (q.type === 'cascade') {
          const paso = (q.steps || [])[0];
          if (!paso || !usable(paso.options, paso.correct)) malas.push(`#${i} cascada sin primer paso utilizable`);
        } else if (!usable(q.options, q.correct)) {
          malas.push(`#${i} sin options/correct utilizables`);
        }
      });
      assert(malas.length === 0, malas.join(' | '));
    });

    test(`esquema[${entry.id}]: ninguna pregunta del banco comparte id de repaso con otra`, () => {
      const vistos = new Map();
      ((topic.study && topic.study.quiz) || []).forEach((q, i) => {
        const id = questionId(q);
        assert(!vistos.has(id), `las preguntas ${vistos.get(id)} y ${i} comparten id de repaso`);
        vistos.set(id, i);
      });
    });
    // Un <option> se pinta leyendo {value,label} o la forma corta {v,t}. Si una opcion no
    // resuelve ninguna de las dos, el desplegable muestra "undefined" y compute() recibe la
    // cadena "undefined" en vez del valor: un fallo mudo que ni compute() ni el tally detectan,
    // porque solo aparece al pintar el campo. Aparecio en 132 campos de 18 temas.
    test(`esquema[${entry.id}]: toda opcion de un select resuelve value y label`, () => {
      (topic.calculators || []).forEach(c => {
        (c.fields || []).forEach(f => {
          if (f.type !== 'select' || !Array.isArray(f.options)) return;
          f.options.forEach((o, i) => {
            const value = o.value !== undefined ? o.value : o.v;
            const label = o.label !== undefined ? o.label : o.t;
            assert(value !== undefined, `${c.key}/${f.name || f.id} opcion ${i}: sin value ni v`);
            assert(label !== undefined, `${c.key}/${f.name || f.id} opcion ${i}: sin label ni t`);
          });
        });
      });
    });

    // El motor (readAll en engine/calculators.js) trata todo campo numerico como OBLIGATORIO salvo
    // que lleve required: false, y si falta uno no llega a llamar a compute(): muestra el
    // incompleteMsg. Un campo pensado como opcional sin esa marca deja la calculadora muda en
    // cuanto el usuario lo deja vacio, aunque compute() sepa manejar el null. Paso en siete
    // calculadoras de seis temas (la de adrenalina de soporte vital respondia "Elige el tipo de
    // ritmo" con el ritmo ya elegido). La etiqueta es el contrato con el usuario: si dice que el
    // campo es opcional, tiene que serlo.
    test(`esquema[${entry.id}]: un numerico que la etiqueta presenta como opcional lleva required: false`, () => {
      const OPCIONAL = /opcional|si se conoce|vac[ií]o|o bien|si no tienes/i;
      const mal = [];
      (topic.calculators || []).forEach(c => (c.fields || []).forEach(f => {
        if (f.type === 'number' && f.required !== false && OPCIONAL.test(f.label || '')) mal.push(`${c.key}/${f.name}`);
      }));
      assert(mal.length === 0, `campos opcionales que el motor exigira: ${mal.join(', ')}`);
    });

    // Los `estigmas` admiten dos formas historicas, { s, p, desc } y { nombre, descripcion }, y el
    // motor solo leia la primera: la seccion de signos clasicos de 14 temas pintaba "undefined" en
    // el nombre y en el porcentaje de cada fila, y el modal del estigma salia entero en
    // "undefined". No lo detectaba ninguna prueba porque los datos estaban bien; lo que estaba mal
    // era el render. Se comprueba sobre la FILA YA RENDERIZADA, no sobre el objeto del tema.
    test(`esquema[${entry.id}]: las filas de estigmas se pintan sin "undefined"`, () => {
      const estigmas = topic.estigmas || [];
      const malas = estigmas
        .map((e, i) => [i, studyView.estigmaRowHTML(e, i)])
        .filter(([, html]) => /undefined/.test(html));
      assert(malas.length === 0,
        `${malas.length} de ${estigmas.length} filas de estigmas pintan "undefined" ` +
        `(¿el tema usa una forma que el motor no normaliza?): ${malas.length ? malas[0][1].slice(0, 160) : ''}`);
      const sinTexto = estigmas.filter(e => !studyView.normalizeEstigma(e).s.trim());
      assert(sinTexto.length === 0, `${sinTexto.length} estigma(s) sin nombre legible`);
      const sinDesc = estigmas.filter(e => !studyView.normalizeEstigma(e).desc.trim());
      assert(sinDesc.length === 0, `${sinDesc.length} estigma(s) sin descripción: el modal saldría vacío`);
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
    // La barra de navegación del tema se construye con `categories.map(c => ...c.id...c.label)`.
    // Escrita como array de cadenas (`['Definición', ...]`), el usuario ve siete botones que dicen
    // "undefined" y no llevan a ninguna parte: pasó en los 14 temas de Hematología.
    test(`esquema[${entry.id}]: categories son objetos {id, label} con id de sección real`, () => {
      const SECCIONES = ['definicion', 'diagnostico', 'clasificacion', 'complicaciones',
        'seguimiento', 'autoevaluacion', 'bibliografia'];
      const cats = topic.categories || [];
      assert(cats.length > 0, 'categories vacío o ausente');
      const malas = cats.filter(c => !c || typeof c !== 'object' || !c.id || !c.label);
      assert(malas.length === 0, `categories con forma incorrecta (¿array de cadenas?): ${JSON.stringify(cats.slice(0, 3))}`);
      const huerfanas = cats.map(c => c.id).filter(id => !SECCIONES.includes(id));
      assert(huerfanas.length === 0,
        `categories apunta a secciones que el motor no genera: ${huerfanas.join(', ')}. ` +
        'Los estigmas y la biopsia se pintan DENTRO de Diagnóstico, no en sección propia.');
    });
    // Las citas se numeran DESDE 1: la bibliografía se pinta con id="bib-1"…"bib-N" y etiqueta
    // [1]…[N]. Un tema escrito desde 0 deja la cita `0` como enlace muerto y corre todas las demás
    // una referencia: el alumno pincha y aterriza en el artículo equivocado. Pasó en 28 temas.
    test(`esquema[${entry.id}]: los índices de cita están en el rango 1..N de la bibliografía`, () => {
      const n = (topic.bibliografia || []).length;
      const fuera = [];
      const revisa = (donde, v) => {
        if (!Array.isArray(v)) return;
        for (const i of v) if (!Number.isInteger(i) || i < 1 || i > n) fuera.push(`${donde}: ${i}`);
      };
      for (const [k, v] of Object.entries(topic.compCites || {})) {
        if (Array.isArray(v)) revisa(`compCites["${k}"]`, v);
        else if (v && typeof v === 'object') for (const [campo, w] of Object.entries(v)) revisa(`compCites["${k}"].${campo}`, w);
      }
      for (const [k, v] of Object.entries(topic.escalaRefs || {})) revisa(`escalaRefs["${k}"]`, v);
      for (const [k, v] of Object.entries(topic.diagCites || {})) revisa(`diagCites.${k}`, v);
      revisa('clasificacionCite', topic.clasificacionCite);
      revisa('seguimientoCite', topic.seguimientoCite);
      assert(fuera.length === 0, `índices fuera de 1..${n} (¿escritos desde 0?): ${fuera.slice(0, 6).join(' | ')}`);
    });
    // `escalaCalc` conecta el botón "Calcular" de la tabla de escalas con una calculadora del tema.
    // Si la clave no existe, el botón no hace nada y el fallo es silencioso.
    // El cuadro de cierre de una cascada interpola `item.explanation`. Sin explicación de caso NI
    // por paso, el alumno termina el caso sin ninguna retroalimentación (y antes de la guarda del
    // motor leía literalmente la palabra "undefined").
    test(`esquema[${entry.id}]: cada cascada deja alguna explicación al terminar`, () => {
      const mudas = (topic.study.quiz || [])
        .filter(q => q.type === 'cascade')
        .filter(q => !q.explanation && !(q.steps || []).some(s => s.explanation))
        .map(q => (q.vignette || '').slice(0, 50));
      assert(mudas.length === 0, `cascada(s) sin explicación de caso ni de paso: ${mudas.join(' | ')}`);
    });
    test(`esquema[${entry.id}]: escalaCalc apunta a calculadoras que existen`, () => {
      const claves = (topic.calculators || []).map(c => c.key);
      const rotas = Object.entries(topic.escalaCalc || {}).filter(([, v]) => !claves.includes(v));
      assert(rotas.length === 0, `escalaCalc sin calculadora: ${rotas.map(([k, v]) => `${k} -> ${v}`).join(' | ')}`);
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

  /* ---------------- Trinquete de atribucion de citas ----------------
     La regla minima (ver .claude/atribucion-citas.md): criterios_dx, laboratorio y
     tx_farmacologico llevan cita en compCites siempre que tengan contenido. Son los tres campos
     donde una afirmacion sin fuente pesa mas junto a la cama del paciente.

     Esto es un TRINQUETE, no una exigencia del 100%: quedan 131 huecos repartidos en 15 temas y
     cerrarlos es trabajo de leer fuentes, no de script. Lo que la prueba garantiza es que el
     trabajo hecho no se desande. Al cerrar un bloque hay que SUBIR estos dos valores; si la
     prueba falla por lo contrario, es que una cita se perdio.

     Por que un trinquete y no un umbral fijo: el apartado 2.6 del informe pedia "21 temas con
     menos de 8 citas", y perseguir ese numero solo producia relleno. `urticaria` llego a citar la
     guia de psoriasis y la de Stevens-Johnson sin que el tema hablara de ninguna de las dos. Una
     cita equivocada es peor que un hueco, asi que la prueba premia atribuir, no acumular. */
  const ATRIB_REGLA = ['criterios_dx', 'laboratorio', 'tx_farmacologico'];

  // Los temas que TODAVIA tienen huecos, con su maximo tolerado. Todo tema que no este aqui debe
  // estar a cero. Al cerrar huecos hay que BAJAR el numero; si una prueba falla por lo contrario,
  // es que una cita se perdio. La lista se vacia sola a medida que avanza el trabajo.
  // El 2/11/2026, de 131 huecos a 111, en dos pasadas el mismo dia.
  //
  // La primera cerro 23 verificando cada cita contra los PDF de Bibliografia/ por RECUENTO de
  // apariciones de los terminos del campo. La segunda releyo los 11 pasajes en los que la cita se
  // habia inferido de que los terminos coincidieran, y **quito 3 que el pasaje no sostenia**: la
  // midodrina de la ascitis refractaria (el ensayo que cita la guia no mostro diferencia, y la
  // recomienda solo en el sindrome hepatorrenal con eficacia baja) y el `laboratorio` de la
  // dopamina y de la dobutamina (en Surviving Sepsis la arritmia es un desenlace de ensayo, no una
  // recomendacion de monitorizar). El detalle de cada una esta en los comentarios de su content.js.
  //
  // De ahi que esta marca bajara de 1964 a 1961, y es la unica razon por la que puede bajar: citas
  // retiradas por equivocadas, no huecos nuevos. El trinquete no sabe distinguirlas, asi que si
  // alguien vuelve a bajarla tiene que escribir aqui por que, con la frase de la fuente que lo
  // justifica. Sin ese motivo escrito, una bajada es una regresion.
  //
  // Una TERCERA pasada el mismo dia subio a 1962: el autor decidio arreglar el TEXTO de la ascitis
  // refractaria en vez de borrar la conducta (la midodrina se queda, con lo que el ensayo encontro
  // y lo que no), y con el campo ajustado a la fuente su cita volvio a ser defendible. De paso, el
  // matiz del tren de cuatro de la guia de bloqueo neuromuscular ("en contra de usarlo solo en
  // infusion continua") se puso en los SEIS sitios del tema que lo mencionan, no solo en los dos
  // que lo citaban: arreglar dos habria dejado el tema contradiciendose.
  // Al cerrar un bloque se aprietan los dos numeros. 2/11/2026, tercera tanda: 23 huecos menos
  // (110 -> 87) con fuentes LEIDAS, no deducidas; `anemia-aplasica` sale de la lista porque queda
  // a cero y pasa a exigirsele cero como a los demas. Lo que no se cerro esta explicado tema por
  // tema en la cabecera de su content.js y en .claude/atribucion-citas.md: casi todo depende de
  // una fuente que no esta en Bibliografia/ ni abierta en PMC.
  const ATRIB_PENDIENTES = {
    'sepsis': 1, 'valoracion-preoperatoria': 1, 'anemia-ferropenica': 1,
    'miocardiopatias': 3, 'anemia-megaloblastica': 3, 'anemia-enfermedad-cronica': 3,
    'debilidad-adquirida-uci': 2, 'eccemas': 3, 'sindromes-mielodisplasicos': 5,
    'anemias-hemoliticas-hereditarias': 6, 'sindromes-mieloproliferativos': 8,
    'anemias-hemoliticas-adquiridas': 12, 'vasopresores-sedantes': 14,
    'cirrosis-hepatica': 22
  };
  // 3/11/2026: +33 al nacer `endocarditis-infecciosa` (modulo 121), que entra a cero huecos. Sus
  // 11 fichas llevan los tres campos de la regla minima citados contra la ESC 2023, que es un
  // documento unico que cubre diagnostico, microbiologia, antibioticos, cirugia y seguimiento.
  const ATRIB_TOTAL_MINIMO = 2021;

  const atribPorTema = {};
  let atribTotal = 0, atribCampos = 0;
  const atribFueraDeRango = [], atribInertes = [];
  for (const entry of registry) {
    const topic = await loadTopic(entry.id);
    if (!topic) continue;
    const nFuentes = (topic.bibliografia || []).length;
    const cc = topic.compCites || {};
    let campos = 0, citados = 0;
    const huecos = [];
    ((topic.content && topic.content.complicaciones) || []).forEach(c => {
      const citas = cc[c.nombre] || {};
      ATRIB_REGLA.forEach(k => {
        const v = c[k];
        const tiene = v && (!Array.isArray(v) || v.length) && !/^no aplica\.?$/i.test(String(v).trim());
        const cit = citas[k];
        const citada = Array.isArray(cit) && cit.length;
        if (!tiene) {
          // Una cita para un campo que la ficha no tiene es dato muerto: el motor la ignora y
          // confunde a quien edite la ficha despues.
          if (citada) atribInertes.push(entry.id + ' / ' + c.nombre + ' / ' + k);
          return;
        }
        campos++;
        if (citada) {
          citados++;
          cit.forEach(i => {
            if (!(i >= 1 && i <= nFuentes)) atribFueraDeRango.push(entry.id + ' / ' + c.nombre + ' / ' + k + ' -> ' + i);
          });
        } else {
          huecos.push(c.nombre + ' / ' + k);
        }
      });
    });
    atribPorTema[entry.id] = { campos, citados, huecos };
    atribTotal += citados;
    atribCampos += campos;
  }

  test('citas: ningun indice de compCites apunta fuera de la bibliografia de su tema', () => {
    assert(atribFueraDeRango.length === 0, atribFueraDeRango.slice(0, 10).join(' | '));
  });

  test('citas: ninguna cita cuelga de un campo que la ficha no tiene', () => {
    assert(atribInertes.length === 0, atribInertes.slice(0, 10).join(' | '));
  });

  test('citas: el total de campos atribuidos de la regla minima no ha bajado', () => {
    assert(atribTotal >= ATRIB_TOTAL_MINIMO,
      'atribuidos ' + atribTotal + ' de ' + atribCampos + ', por debajo de la marca ' +
      ATRIB_TOTAL_MINIMO + '. Si el descenso es deliberado hay que bajar la marca a mano y decir por que.');
  });

  test('citas: ningun tema de ATRIB_PENDIENTES ha empeorado', () => {
    const peor = Object.keys(ATRIB_PENDIENTES)
      .map(id => ({ id, h: (atribPorTema[id] || { huecos: [] }).huecos.length, max: ATRIB_PENDIENTES[id] }))
      .filter(x => x.h > x.max)
      .map(x => x.id + ': ' + x.h + ' huecos, tolerados ' + x.max);
    assert(peor.length === 0, peor.join(' | '));
  });

  for (const entry of registry) {
    if (entry.id in ATRIB_PENDIENTES) continue;
    test('citas[' + entry.id + ']: sin huecos en la regla minima', () => {
      const r = atribPorTema[entry.id];
      assert(r, 'el tema no se pudo cargar');
      assert(r.huecos.length === 0, 'huecos: ' + r.huecos.slice(0, 5).join(' | '));
    });
  }

  /* ---------------- Tildes ----------------
     Los temas se escribieron en dos estilos: unos con las vocales acentuadas y otros sin una sola
     ("Neumonia", "segun", "sindrome", "mas"). En el DOM no rompía nada, porque todo se pinta con
     `innerHTML`, pero el residente leía "infeccion" en un tema e "infección" en el siguiente. El
     2/11/2026 se acentuaron 83 184 palabras de texto visible en 193 archivos de `topics/`.

     Esta prueba fija lo conseguido con una lista de palabras que NO son palabra española sin su
     tilde, así que encontrarlas solo puede significar que un tema nuevo (o una edición) volvió al
     estilo viejo. Mira los VALORES de texto del tema ya cargado, no el archivo, de modo que no
     puede confundir un nombre de propiedad (`definicion:`, `clinica:`) con prosa.

     Tres cosas quedan fuera a propósito:
       - `bibliografia` y `fuente`, que son datos de cita donde los apellidos y los títulos van tal
         como se publicaron ("Guillain-Barre syndrome. Lancet", "Martin ML", "Alvarez RD"): ponerles
         tilde falsifica la referencia;
       - las cadenas de una sola palabra, que son identificadores que el motor compara
         (`dificultad: 'facil'` contra el `<option value="facil">` del examen simulado);
       - los plurales de las agudas en -on. El plural de `lesión` es `lesiones` SIN tilde, igual que
         `infecciones` y `funciones`, porque la palabra pasa a llana acabada en -s. Darlos por malos
         sería el error contrario, y más difícil de ver.

     La lista solo admite dos clases de palabra, y la distinción importa porque de lo contrario la
     prueba daría por malas frases correctas:
       - las que sin tilde no son palabra española en ningún contexto (`sindrome`, `infeccion`,
         `segun`, `asi`, `dificil`);
       - las que sin tilde solo serían primera persona del singular (`diagnostico`, `pronostico`,
         `numero`, `critico`, `medico`), voz que este corpus no usa: 4 "yo" y 1 "considero" en 8,6
         millones de caracteres de texto visible.
     Quedan FUERA las terceras personas, que sí aparecen en impersonal y van sin tilde con razón:
     `se diagnostica`, `se practica`, `se formula`, `se calcula`. Y `mas` está dentro aun sabiendo
     que el `mas` adversativo (= pero) iría sin tilde: es literario y no aparece, pero si algún día
     alguien lo escribe, lo que hay que hacer es sacar `mas` de esta lista, no ponerle tilde.

     El límite de palabra se escribe a mano porque `\b` de JavaScript es ASCII: con `\basi\b` la
     prueba encontraba "asi" dentro de "asiático", ya que para `\b` la á no es letra. */
  const TILDE_OBLIGATORIA = [
    'sindrome', 'sindromes', 'infeccion', 'cronico', 'cronica', 'cronicos', 'cronicas', 'segun',
    'despues', 'ademas', 'tambien', 'asi', 'dias', 'farmaco', 'farmacos', 'funcion', 'presion',
    'lesion', 'sintoma', 'sintomas', 'diagnostico', 'diagnosticos', 'pronostico',
    'clinico', 'clinica', 'clinicos', 'clinicas', 'critico', 'medico',
    'indice', 'oxigeno', 'musculo', 'celula', 'celulas', 'estan', 'mas',
    'definicion', 'clasificacion', 'valoracion', 'exploracion', 'evolucion', 'puncion', 'nodulo',
    'ventriculo', 'glandula', 'dificil', 'facil', 'util', 'torax', 'pulmon', 'cancer', 'deficit',
    'patron', 'varon', 'comun', 'ningun', 'algun', 'numero', 'estimulo', 'deposito', 'titulo'
  ];
  const LETRA = 'A-Za-zÁÉÍÓÚÜÑáéíóúüñ';
  const RX_TILDE = new RegExp(
    `(?<![${LETRA}])(?:${TILDE_OBLIGATORIA.join('|')})(?![${LETRA}])`, 'i');
  const CAMPOS_DE_CITA = new Set(['bibliografia', 'fuente']);

  function textosVisiblesDe(valor, clave, salida) {
    if (typeof valor === 'string') {
      if (CAMPOS_DE_CITA.has(clave)) return;
      const limpio = valor.replace(/<[^>]*>/g, ' ');
      if (/\s/.test(limpio.trim())) salida.push(limpio);
      return;
    }
    if (Array.isArray(valor)) { valor.forEach(v => textosVisiblesDe(v, clave, salida)); return; }
    if (valor && typeof valor === 'object') {
      for (const k of Object.keys(valor)) textosVisiblesDe(valor[k], k, salida);
    }
  }

  for (const entry of registry) {
    const topic = await loadTopic(entry.id);
    test(`tildes[${entry.id}]: ninguna palabra que exige tilde aparece sin ella`, () => {
      const textos = [];
      textosVisiblesDe(topic, null, textos);
      const malos = [];
      for (const t of textos) {
        const m = RX_TILDE.exec(t);
        if (!m) continue;
        const i = m.index;
        malos.push(`"${m[0]}" en …${t.slice(Math.max(0, i - 30), i + 35).trim()}…`);
        if (malos.length >= 3) break;
      }
      assert(malos.length === 0, malos.join(' | '));
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
    const REVISADOS = new Set(['endocarditis-infecciosa', 'nefropatia-diabetica-hipertensiva', 'glomerulopatias-sindromes-glomerulares', 'sodio-potasio-acido-base', 'enfermedad-renal-cronica', 'valoracion-preoperatoria', 'embolia-grasa',
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
      'enfermedad-arterial-periferica', 'hipertension-arterial', 'dislipidemias',
      'ventilacion-mecanica', 'diabetes-mellitus',
      'cetoacidosis-estado-hiperosmolar', 'obesidad',
      'sindrome-cardiovascular-renal-metabolico', 'osteoporosis',
      'hipotiroidismo', 'hipertiroidismo-tiroiditis', 'urgencias-tiroideas',
      'nodulo-cancer-tiroides', 'metabolismo-oseo-mineral',
      'epoc',
      'asma',
      'neumonia',
      'insuficiencia-respiratoria-sdra',
      'patologia-pleural',
      'enfermedad-intersticial',
      'hipertension-pulmonar',
      'nodulo-cancer-pulmon',
      'apnea-sueno',
      'tuberculosis',
      'sarcoidosis',
      'bronquiectasias',
      'bronquitis-aguda',
      'deterioro-cognitivo-demencias',
      'neuropatias-perifericas',
      'guillain-barre-miastenia',
      'ela-miopatias',
      'meningoencefalitis-infecciosa',
      'encefalitis-autoinmune',
      'vertigo-sindrome-vestibular',
      'disfuncion-organica-multiple',
      'estado-de-choque',
      'lesion-renal-aguda',
      'soporte-nutricional-critico',
      'debilidad-adquirida-uci',
      'psoriasis',
      'urticaria',
      'eccemas',
      'farmacodermias',
      'ampollosas',
      'soporte-vital-avanzado',
      'anafilaxia',
      'abdomen-agudo',
      'supresion-alcoholica',
      'quemaduras',
      'ahogamiento',
      'broncoaspiracion',
      'melanoma',
      'eritemas-reactivos',
      'cancer-cutaneo-no-melanoma',
      'manifestaciones-cutaneas-sistemicas']);
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
