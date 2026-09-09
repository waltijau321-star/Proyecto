// topics/ela-miopatias/calculators.js
// 4 herramientas:
// - patron-debilidad: localiza la debilidad en musculo, nervio, motoneurona o union, que es el
//   paso que ordena todo el resto del estudio.
// - alsfrs-r: escala funcional de la ELA, con las cuatro subescalas y la velocidad de progresion.
// - soporte-ela: cuando ofrecer ventilacion no invasiva y cuando colocar la gastrostomia, que en
//   la ELA es una decision de MOMENTO y no solo de indicacion.
// - ck-elevada: separa la rabdomiolisis de la elevacion asintomatica y ordena cada una.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

const ALSFRS_ITEMS = [
  ['lenguaje', 'Lenguaje', ['0 · Perdida del habla util', '1 · Solo comunicacion no verbal', '2 · Inteligible repitiendo', '3 · Alteracion perceptible', '4 · Normal']],
  ['salivacion', 'Salivacion', ['0 · Babeo constante marcado', '1 · Babeo, precisa pa&#241;uelo', '2 · Exceso moderado, algo de babeo', '3 · Exceso leve, babeo nocturno', '4 · Normal']],
  ['deglucion', 'Deglucion', ['0 · Nutricion solo por sonda', '1 · Necesita sonda complementaria', '2 · Cambios en la consistencia', '3 · Se atraganta alguna vez', '4 · Normal']],
  ['escritura', 'Escritura', ['0 · No sostiene el boligrafo', '1 · No escribe pero sujeta el boligrafo', '2 · No todas las palabras legibles', '3 · Lenta, todo legible', '4 · Normal']],
  ['cubiertos', 'Cortar alimentos y usar cubiertos', ['0 · Necesita que le den de comer', '1 · Necesita ayuda para todo', '2 · Puede pero lento y torpe', '3 · Torpe y lento pero sin ayuda', '4 · Normal']],
  ['vestido', 'Vestido e higiene', ['0 · Dependencia total', '1 · Necesita ayuda de otro', '2 · Ayuda intermitente o metodos alternativos', '3 · Independiente con esfuerzo', '4 · Normal']],
  ['cama', 'Girarse en la cama', ['0 · No puede en absoluto', '1 · Inicia el giro pero no lo completa', '2 · Puede pero con gran dificultad', '3 · Lento y torpe pero sin ayuda', '4 · Normal']],
  ['caminar', 'Caminar', ['0 · No hay movimiento util de las piernas', '1 · Solo movimiento sin marcha', '2 · Camina con ayuda', '3 · Dificultad incipiente', '4 · Normal']],
  ['escaleras', 'Subir escaleras', ['0 · No puede subir', '1 · Necesita ayuda de otra persona', '2 · Inestable o se fatiga', '3 · Lento', '4 · Normal']],
  ['disnea', 'Disnea', ['0 · Dificultad importante en reposo', '1 · Disnea en reposo o al hablar', '2 · Disnea al comer o al vestirse', '3 · Disnea al caminar', '4 · No tiene']],
  ['ortopnea', 'Ortopnea', ['0 · No puede dormir', '1 · Necesita mas de dos almohadas', '2 · Necesita dos almohadas', '3 · Alguna dificultad nocturna', '4 · No tiene']],
  ['respiratoria', 'Insuficiencia respiratoria', ['0 · Ventilacion invasiva', '1 · Ventilacion no invasiva continua', '2 · Ventilacion no invasiva nocturna', '3 · Uso intermitente de soporte', '4 · No precisa soporte']]
];

const camposAlsfrs = ALSFRS_ITEMS.map(([name, label, opts], i) => ({
  name, id: 'em-als-' + name, type: 'select', label,
  options: opts.map((t, k) => ({ v: String(k), t })),
  row: 'a' + Math.floor(i / 2)
}));

export const calculators = [
  {
    key: 'patron-debilidad', title: 'Localizar la debilidad', accent: '#5c5a2e',
    subtitle: 'Musculo, nervio, motoneurona o union: cuatro datos que los separan',
    incompleteMsg: 'Elige la distribucion de la debilidad, los reflejos y si hay alteracion sensitiva. La creatina cinasa es opcional pero orienta mucho.',
    fields: [
      { name: 'distribucion', id: 'em-pd-d', type: 'select', label: 'Distribucion de la debilidad', row: 'r1', options: [
        { v: 'proximal', t: 'Proximal y simetrica: escaleras, silla, peinarse' },
        { v: 'distal', t: 'Distal: pie caido, torpeza de manos' },
        { v: 'asimetrica', t: 'Asimetrica o focal, con atrofia de un segmento' },
        { v: 'fluctuante', t: 'Fluctuante a lo largo del dia, ocular o bulbar' }
      ] },
      { name: 'sensitivo', id: 'em-pd-s', type: 'select', label: 'Alteracion sensitiva en la exploracion', row: 'r1', options: [
        { v: 'no', t: 'Ausente' },
        { v: 'si', t: 'Presente' }
      ] },
      { name: 'reflejos', id: 'em-pd-r', type: 'select', label: 'Reflejos osteotendinosos', row: 'r2', options: [
        { v: 'normales', t: 'Normales o algo disminuidos' },
        { v: 'abolidos', t: 'Abolidos o muy disminuidos' },
        { v: 'vivos', t: 'Vivos, con clonus o Babinski' }
      ] },
      { name: 'ck', id: 'em-pd-ck', type: 'number', step: '10', required: false, label: 'Creatina cinasa (U/L)', placeholder: 'ej. 900', row: 'r2' },
      { name: 'fasciculaciones', id: 'em-pd-f', type: 'checkbox', label: 'Fasciculaciones visibles en reposo, en extremidades o en la lengua', row: 'r3' },
      { name: 'bulbar', id: 'em-pd-b', type: 'checkbox', label: 'Disartria o disfagia', row: 'r3' },
      { type: 'note', text: 'Cuatro datos localizan el problema antes de pensar en ninguna enfermedad concreta: la DISTRIBUCION, los REFLEJOS, la presencia de ALTERACION SENSITIVA (que es lo que mas delata al nervio) y la CREATINA CINASA. Dos excepciones rompen la regla y conviene tenerlas presentes: la miopatia por cuerpos de inclusion es distal y asimetrica, y la miopatia por corticoides cursa con enzima NORMAL.' }
    ],
    compute(v) {
      if (!v.distribucion || !v.sensitivo || !v.reflejos) return null;
      if (v.ck != null && !(v.ck >= 0 && v.ck <= 300000)) return { invalido: true };
      const ck = v.ck;
      const ckAlta = ck != null && ck >= 600;
      const ckModerada = ck != null && ck >= 200 && ck < 600;
      const ckNormal = ck != null && ck < 200;
      const sens = v.sensitivo === 'si';
      const fasc = !!v.fasciculaciones;
      const bulbar = !!v.bulbar;
      const s = { musculo: 0, nervio: 0, motoneurona: 0, union: 0 };

      if (v.distribucion === 'proximal') { s.musculo += 3; }
      if (v.distribucion === 'distal') { s.nervio += 3; s.motoneurona += 1; }
      if (v.distribucion === 'asimetrica') { s.motoneurona += 3; s.musculo += 1; }
      if (v.distribucion === 'fluctuante') { s.union += 4; }

      if (sens) { s.nervio += 3; s.musculo -= 2; s.motoneurona -= 2; s.union -= 2; }
      else { s.musculo += 1; s.motoneurona += 1; s.union += 1; }

      if (v.reflejos === 'abolidos') { s.nervio += 2; }
      if (v.reflejos === 'vivos') { s.motoneurona += 3; s.nervio -= 2; }
      if (v.reflejos === 'normales') { s.musculo += 1; s.union += 1; }

      if (ckAlta) { s.musculo += 3; s.union -= 1; }
      if (ckModerada) { s.musculo += 1; s.motoneurona += 1; }
      if (ckNormal) { s.union += 1; s.nervio += 1; }

      if (fasc) { s.motoneurona += 3; s.union -= 1; }
      if (bulbar) { s.motoneurona += 1; s.union += 1; }

      const orden = Object.keys(s).sort((a, b) => s[b] - s[a]);
      const top = orden[0];
      const empate = s[orden[1]] === s[top];
      const nombres = {
        musculo: 'MUSCULO', nervio: 'NERVIO PERIFERICO',
        motoneurona: 'MOTONEURONA', union: 'UNION NEUROMUSCULAR'
      };
      const articulos = { musculo: 'al', nervio: 'al', motoneurona: 'a la', union: 'a la' };
      const banderas = [];
      if (fasc && v.reflejos === 'vivos' && !sens) banderas.push('ela');
      if (fasc && v.reflejos !== 'vivos' && !sens) banderas.push('inferiorPuro');
      if (sens) banderas.push('noEla');
      if (v.distribucion === 'asimetrica' && !sens && !fasc && (ckNormal || ckModerada)) banderas.push('inclusion');
      if (v.distribucion === 'proximal' && ckNormal) banderas.push('ckNormal');
      return { top, nombre: nombres[top], art: articulos[top], empate, segundo: nombres[orden[1]], s, banderas, ck, sinCk: ck == null };
    },
    format: r => {
      if (r.invalido) return 'Revisa el valor de la creatina cinasa: se admite de 0 a 300000 U/L.';
      let s = `<strong>El patron apunta ${r.art} ${r.nombre}.</strong> `;
      if (r.top === 'musculo') s += 'Debilidad proximal y simetrica, reflejos conservados hasta fases avanzadas y sin alteracion sensitiva. Toca pedir creatina cinasa, funcion tiroidea e iones, revisar la lista de farmacos y valorar electromiograma, autoanticuerpos de miositis y resonancia muscular.';
      else if (r.top === 'nervio') s += 'La ALTERACION SENSITIVA junto con el patron distal y la arreflexia es lo que mas delata al nervio periferico. Toca estudio de conduccion nerviosa y busqueda de las causas frecuentes: diabetes, alcohol, deficit de vitamina B12, farmacos, disproteinemia y causas inflamatorias.';
      else if (r.top === 'motoneurona') s += 'Toca estudio neurofisiologico en varias regiones y resonancia cervical, que es obligada antes de plantear una enfermedad de motoneurona porque la mielopatia espondilotica imita el cuadro y se OPERA.';
      else s += 'La fluctuacion a lo largo del dia con predominio ocular y bulbar, reflejos normales, sin alteracion sensitiva y con creatina cinasa normal orienta a la union neuromuscular: miastenia gravis o sindrome de Lambert-Eaton. Toca anticuerpos y estimulacion repetitiva.';
      if (r.empate) s += `<br><span style="opacity:.75;">Los datos introducidos no separan bien el ${r.nombre.toLowerCase()} del ${r.segundo.toLowerCase()}. Con un patron mixto, lo que decide es el estudio neurofisiologico.</span>`;
      if (r.sinCk) s += '<br><span style="opacity:.75;">No se ha introducido la creatina cinasa, que es la primera prueba ante una debilidad proximal y una de las que mas orienta.</span>';
      if (r.banderas.includes('ela')) s += '<br><strong style="color:#8c3a34;">Fasciculaciones con reflejos vivos y sin alteracion sensitiva.</strong> Esa combinacion de motoneurona inferior y superior en el mismo paciente no ocurre en ninguna otra enfermedad y es la firma de la esclerosis lateral amiotrofica. Antes de decirlo, resonancia cervical y estudio neurofisiologico en varias regiones.';
      if (r.banderas.includes('inferiorPuro')) s += '<br><strong style="color:#3f6b52;">Patron de motoneurona inferior sin signos superiores.</strong> Aqui hay que buscar de forma activa BLOQUEOS DE CONDUCCION y pedir anticuerpos anti-GM1 e inmunofijacion: la neuropatia motora multifocal responde a inmunoglobulinas y confundirla con una enfermedad de motoneurona es el error mas costoso del tema.';
      if (r.banderas.includes('noEla')) s += '<br><strong style="color:#8a6a1f;">Hay alteracion sensitiva</strong>, y eso descarta en la practica una esclerosis lateral amiotrofica pura. Obliga a buscar mielopatia, neuropatia o una combinacion de procesos.';
      if (r.banderas.includes('inclusion')) s += '<br><strong style="color:#8a6a1f;">Debilidad asimetrica con enzima poco elevada:</strong> pensar en MIOPATIA POR CUERPOS DE INCLUSION si afecta a cuadriceps y a los flexores profundos de los dedos en un mayor de 50 a&#241;os. No responde a la inmunosupresion, de modo que reconocerla evita a&#241;os de tratamiento inutil.';
      if (r.banderas.includes('ckNormal')) s += '<br><span style="opacity:.75;">Debilidad proximal con creatina cinasa normal: una enzima normal NO descarta una miopatia. La miopatia por corticoides y el hipotiroidismo cursan asi, y ambos son tratables.</span>';
      s += '<br><span style="opacity:.75;">Esta herramienta ordena la sospecha inicial. NO sustituye al electromiograma, que es lo que separa de verdad miopatia, neuropatia y enfermedad de motoneurona.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `patron de ${r.nombre.toLowerCase()}`
  },

  {
    key: 'alsfrs-r', title: 'Escala funcional ALSFRS-R', accent: '#8c3a34',
    subtitle: 'Doce items, cuatro subescalas y la velocidad de progresion',
    incompleteMsg: 'Puntua los doce items de 0 a 4. Los meses desde el inicio de los sintomas son opcionales y sirven para estimar la velocidad de progresion.',
    fields: camposAlsfrs.concat([
      { name: 'meses', id: 'em-als-m', type: 'number', step: '0.5', required: false, label: 'Meses desde el inicio de los sintomas (opcional)', placeholder: 'ej. 12' },
      { type: 'note', text: 'Cada item va de 0 (perdida completa) a 4 (normal), con un maximo de 48. Lo que mas informa NO es la puntuacion aislada sino la VELOCIDAD de perdida de puntos, que es uno de los mejores predictores de supervivencia. La subescala respiratoria merece mirarse aparte, porque es la que anticipa las decisiones sobre ventilacion.' }
    ]),
    compute(v) {
      const vals = ALSFRS_ITEMS.map(([name]) => (v[name] == null || v[name] === '' ? null : Number(v[name])));
      if (vals.some(x => x == null || isNaN(x))) return null;
      if (v.meses != null && !(v.meses > 0 && v.meses <= 400)) return { invalido: true };
      const total = vals.reduce((a, b) => a + b, 0);
      const sub = (i, j) => vals.slice(i, j).reduce((a, b) => a + b, 0);
      const bulbar = sub(0, 3);
      const fino = sub(3, 6);
      const grueso = sub(6, 9);
      const resp = sub(9, 12);
      let pendiente = null, ritmo = null;
      if (v.meses != null) {
        pendiente = (48 - total) / v.meses;
        if (pendiente < 0.5) ritmo = 'LENTA';
        else if (pendiente <= 1) ritmo = 'INTERMEDIA';
        else ritmo = 'RAPIDA';
      }
      const dominios = [
        { n: 'bulbar', v: bulbar }, { n: 'motor fino', v: fino },
        { n: 'motor grueso', v: grueso }, { n: 'respiratorio', v: resp }
      ].sort((a, b) => a.v - b.v);
      return { total, bulbar, fino, grueso, resp, pendiente, ritmo, peor: dominios[0], meses: v.meses };
    },
    format: r => {
      if (r.invalido) return 'Revisa los meses desde el inicio: se admite de 0 a 400.';
      let s = `<strong>${r.total} de 48 puntos.</strong> Subescalas sobre 12: bulbar ${r.bulbar}, motor fino ${r.fino}, motor grueso ${r.grueso}, respiratoria ${r.resp}. `;
      if (r.ritmo === 'RAPIDA') s += `<br><strong style="color:#8c3a34;">Progresion RAPIDA</strong>: se pierden ${r.pendiente.toFixed(2)} puntos al mes en ${r.meses} meses de evolucion. Una pendiente por encima de 1 punto al mes se asocia a peor supervivencia y obliga a adelantar TODO: valoracion respiratoria, nutricion, comunicacion y planificacion de decisiones.`;
      else if (r.ritmo === 'INTERMEDIA') s += `<br><strong style="color:#8a6a1f;">Progresion INTERMEDIA</strong>: ${r.pendiente.toFixed(2)} puntos al mes en ${r.meses} meses de evolucion. Hay que seguir midiendo, porque la pendiente puede cambiar y es mas informativa que cualquier valor aislado.`;
      else if (r.ritmo === 'LENTA') s += `<br><span style="color:#3f6b52;">Progresion LENTA</span>: ${r.pendiente.toFixed(2)} puntos al mes en ${r.meses} meses de evolucion. Mejor pronostico relativo, pero no cambia el plan de vigilancia respiratoria ni nutricional.`;
      else s += '<br><span style="opacity:.75;">Sin los meses de evolucion no puede estimarse la velocidad de progresion, que es lo que mas pronostico aporta. Conviene repetir la escala en cada visita y comparar.</span>';
      if (r.resp <= 8) s += '<br><strong style="color:#8c3a34;">La subescala respiratoria esta ya afectada.</strong> Toca medir capacidad vital forzada y presion inspiratoria nasal, hacer oximetria nocturna y OFRECER ventilacion no invasiva, que prolonga la supervivencia y mejora la calidad de vida.';
      if (r.bulbar <= 8) s += '<br><strong style="color:#8a6a1f;">La subescala bulbar esta afectada.</strong> Toca valoracion de la deglucion, plantear la gastrostomia mientras la funcion respiratoria lo permite, y empezar a introducir sistemas de comunicacion ANTES de que se pierda el habla.';
      if (r.peor.v < 12) s += `<br><span style="opacity:.75;">El dominio mas afectado es el ${r.peor.n} (${r.peor.v} de 12).</span>`;
      s += '<br><span style="opacity:.75;">La escala mide funcion, no biologia: no sustituye a las medidas respiratorias ni al peso, que se registran en cada visita.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `ALSFRS-R ${r.total}/48${r.ritmo ? ', progresion ' + r.ritmo.toLowerCase() : ''}`
  },

  {
    key: 'soporte-ela', title: 'Ventilacion y gastrostomia en la ELA', accent: '#3f6b52',
    subtitle: 'Cuando ofrecer soporte respiratorio y cuando colocar la sonda, que es cuestion de momento',
    incompleteMsg: 'Introduce la capacidad vital forzada en porcentaje del valor predicho y responde sobre los sintomas nocturnos y la deglucion.',
    fields: [
      { name: 'cvf', id: 'em-se-cvf', type: 'number', step: '1', label: 'Capacidad vital forzada (% del predicho)', placeholder: 'ej. 62', row: 'r1' },
      { name: 'snip', id: 'em-se-sn', type: 'number', step: '1', required: false, label: 'Presion inspiratoria nasal, valor absoluto (cmH2O)', placeholder: 'ej. 42', row: 'r1' },
      { name: 'sintomas', id: 'em-se-si', type: 'checkbox', label: 'Sintomas de hipoventilacion: ortopnea, cefalea matutina, sue&#241;o no reparador o somnolencia diurna', row: 'r2' },
      { name: 'oximetria', id: 'em-se-ox', type: 'checkbox', label: 'Desaturaciones en la oximetria nocturna o hipercapnia en la gasometria', row: 'r2' },
      { name: 'disfagia', id: 'em-se-df', type: 'select', label: 'Deglucion', row: 'r3', options: [
        { v: 'no', t: 'Sin dificultad' },
        { v: 'leve', t: 'Come mas lento o cambia la consistencia' },
        { v: 'grave', t: 'Se atraganta a menudo o no cubre sus necesidades' }
      ] },
      { name: 'peso', id: 'em-se-pe', type: 'number', step: '0.5', required: false, label: 'Perdida de peso respecto al habitual (%)', placeholder: 'ej. 8', row: 'r3' },
      { name: 'bulbarGrave', id: 'em-se-bg', type: 'checkbox', label: 'Afectacion bulbar grave, con mal manejo de las secreciones' },
      { type: 'note', text: 'La ventilacion no invasiva prolonga la supervivencia y mejora la calidad de vida en la ELA, con un beneficio mucho menor cuando hay afectacion bulbar grave. En la gastrostomia lo determinante no es tanto la indicacion como el MOMENTO: colocada con una capacidad vital forzada por debajo del 50%, el riesgo del procedimiento aumenta de forma marcada.' }
    ],
    compute(v) {
      if (v.cvf == null || !v.disfagia) return null;
      if (!(v.cvf > 0 && v.cvf <= 150)) return { invalido: true };
      if (v.snip != null && !(v.snip >= 0 && v.snip <= 150)) return { invalido: true };
      if (v.peso != null && !(v.peso >= 0 && v.peso <= 80)) return { invalido: true };
      const razones = [];
      if (v.sintomas) razones.push('sintomas de hipoventilacion nocturna');
      if (v.oximetria) razones.push('desaturacion nocturna o hipercapnia');
      if (v.cvf < 50) razones.push(`capacidad vital forzada del ${v.cvf}%`);
      else if (v.cvf < 80 && v.sintomas) razones.push(`capacidad vital forzada del ${v.cvf}% con sintomas`);
      if (v.snip != null && v.snip < 40) razones.push(`presion inspiratoria nasal de ${v.snip} cmH2O`);
      const vni = razones.length > 0;
      const motivoPeg = [];
      if (v.disfagia === 'grave') motivoPeg.push('disfagia con atragantamientos o ingesta insuficiente');
      if (v.disfagia === 'leve') motivoPeg.push('disfagia incipiente');
      if (v.peso != null && v.peso >= 10) motivoPeg.push(`perdida de peso del ${v.peso}%`);
      else if (v.peso != null && v.peso >= 5) motivoPeg.push(`perdida de peso del ${v.peso}%, aun moderada`);
      let ventana;
      if (v.cvf >= 50) ventana = 'abierta';
      else if (v.cvf >= 30) ventana = 'estrecha';
      else ventana = 'cerrada';
      const pegAhora = ventana === 'abierta' && (v.disfagia === 'grave' || (v.peso != null && v.peso >= 10));
      return { vni, razones, ventana, pegAhora, motivoPeg, cvf: v.cvf, snip: v.snip, bulbarGrave: !!v.bulbarGrave, disfagia: v.disfagia, sinSnip: v.snip == null };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: capacidad vital de 1 a 150%, presion nasal de 0 a 150 cmH2O y perdida de peso de 0 a 80%.';
      let s = '';
      if (r.vni) {
        s += `<strong style="color:#8c3a34;">Corresponde OFRECER ventilacion no invasiva</strong>, por ${r.razones.join(', ')}. Prolonga la supervivencia y mejora la calidad de vida, y se ofrece ante SINTOMAS aunque los numeros todavia no lo exijan. `;
      } else {
        s += `<span style="color:#3f6b52;">Por ahora no se cumplen criterios de ventilacion no invasiva</span> con una capacidad vital forzada del ${r.cvf}% y sin sintomas nocturnos. Hay que repetir las medidas cada 2 o 3 meses y preguntar de forma activa por ortopnea, cefalea matutina y sue&#241;o no reparador, porque el paciente no siempre los refiere. `;
      }
      if (r.bulbarGrave) s += '<br><strong style="color:#8a6a1f;">Hay afectacion bulbar grave</strong>, y eso limita mucho la tolerancia y el beneficio de la ventilacion no invasiva. Aqui pesan mas el manejo de las secreciones, la asistencia a la tos y el plan paliativo acordado con el paciente.';
      if (r.ventana === 'abierta') {
        if (r.pegAhora) s += `<br><strong style="color:#8a6a1f;">Momento adecuado para colocar la GASTROSTOMIA</strong>: hay ${r.motivoPeg.join(' y ')} con una capacidad vital forzada del ${r.cvf}%, todavia por encima del 50%. Esta es la ventana, y esperar la estrecha.`;
        else s += `<br><span style="opacity:.75;">La ventana para la gastrostomia sigue ABIERTA (capacidad vital forzada del ${r.cvf}%). Aun no hay indicacion nutricional clara, pero conviene plantear el tema en consulta antes de que haga falta, no cuando el paciente ya no pueda comer.</span>`;
      } else if (r.ventana === 'estrecha') {
        s += `<br><strong style="color:#8c3a34;">La ventana se ha estrechado</strong>: con una capacidad vital forzada del ${r.cvf}%, por debajo del 50%, el riesgo del procedimiento aumenta de forma marcada. Si la nutricion lo exige, hay que hacerlo en un centro con experiencia, valorando la via radiologica y el soporte con ventilacion no invasiva durante el procedimiento.`;
      } else {
        s += `<br><strong style="color:#8c3a34;">Capacidad vital forzada del ${r.cvf}%: la ventana esta practicamente cerrada.</strong> Aqui la decision se toma dentro de un plan paliativo y con el paciente informado del riesgo real, no como un tramite nutricional.`;
      }
      if (r.sinSnip) s += '<br><span style="opacity:.75;">No se ha introducido la presion inspiratoria nasal, util cuando la debilidad facial impide sellar bien la boquilla y falsea la espirometria.</span>';
      s += '<br><span style="opacity:.75;">Y hay dos cosas que no salen en ningun numero: la atencion en una unidad MULTIDISCIPLINAR, que es lo que mas se asocia a mayor supervivencia, y la conversacion sobre voluntades anticipadas, que se abre PRONTO y no cuando el paciente ya no puede comunicarse.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `${r.vni ? 'ofrecer ventilacion' : 'sin criterios de ventilacion'}, ventana de gastrostomia ${r.ventana}`
  },

  {
    key: 'ck-elevada', title: 'Creatina cinasa elevada', accent: '#8c3a5c',
    subtitle: 'Separa la rabdomiolisis de la elevacion asintomatica y ordena cada una',
    incompleteMsg: 'Introduce la creatina cinasa y elige el escenario clinico y el contexto.',
    fields: [
      { name: 'ck', id: 'em-ck-v', type: 'number', step: '10', label: 'Creatina cinasa (U/L)', placeholder: 'ej. 12000', row: 'r1' },
      { name: 'lsn', id: 'em-ck-l', type: 'number', step: '10', required: false, label: 'Limite alto de normalidad del laboratorio (U/L)', placeholder: 'por defecto 200', row: 'r1' },
      { name: 'escenario', id: 'em-ck-e', type: 'select', label: 'Escenario clinico', row: 'r2', options: [
        { v: 'asintomatico', t: 'Hallazgo casual, sin sintomas musculares' },
        { v: 'sintomas', t: 'Mialgias o debilidad' },
        { v: 'orina', t: 'Mialgias con orina oscura' }
      ] },
      { name: 'contexto', id: 'em-ck-c', type: 'select', label: 'Contexto', row: 'r2', options: [
        { v: 'ninguno', t: 'Ninguno identificado' },
        { v: 'ejercicio', t: 'Ejercicio intenso o reciente' },
        { v: 'agresion', t: 'Aplastamiento, inmovilizacion prolongada, convulsiones o golpe de calor' },
        { v: 'farmaco', t: 'Estatina u otro farmaco miotoxico' }
      ] },
      { name: 'creatinina', id: 'em-ck-cr', type: 'number', step: '0.1', required: false, label: 'Creatinina (mg/dL)', placeholder: 'ej. 1.9', row: 'r3' },
      { name: 'potasio', id: 'em-ck-k', type: 'number', step: '0.1', required: false, label: 'Potasio (mEq/L)', placeholder: 'ej. 5.8', row: 'r3' },
      { type: 'note', text: 'El dato que delata una rabdomiolisis en urgencias cuesta muy poco: TIRA REACTIVA POSITIVA PARA SANGRE con un SEDIMENTO SIN HEMATIES, porque lo que se detecta es mioglobina. Y ante una elevacion asintomatica, lo primero no es estudiar sino REPETIR la determinacion tras 7 dias sin ejercicio y revisar la lista de farmacos y la funcion tiroidea.' }
    ],
    compute(v) {
      if (v.ck == null || !v.escenario || !v.contexto) return null;
      if (!(v.ck >= 0 && v.ck <= 500000)) return { invalido: true };
      if (v.lsn != null && !(v.lsn >= 20 && v.lsn <= 1000)) return { invalido: true };
      if (v.creatinina != null && !(v.creatinina >= 0 && v.creatinina <= 25)) return { invalido: true };
      if (v.potasio != null && !(v.potasio >= 1 && v.potasio <= 10)) return { invalido: true };
      const lsn = v.lsn == null ? 200 : v.lsn;
      const x = v.ck / lsn;
      const sintomatico = v.escenario !== 'asintomatico';
      const rabdo = x >= 5 && (sintomatico || v.contexto === 'agresion');
      let riesgoRenal;
      if (v.ck >= 15000) riesgoRenal = 'ALTO';
      else if (v.ck >= 5000) riesgoRenal = 'INTERMEDIO';
      else riesgoRenal = 'BAJO';
      const alertas = [];
      if (v.potasio != null && v.potasio >= 5.5) alertas.push(`potasio de ${v.potasio.toFixed(1)} mEq/L`);
      if (v.creatinina != null && v.creatinina >= 1.5) alertas.push(`creatinina de ${v.creatinina.toFixed(1)} mg/dL`);
      return {
        x, ck: v.ck, lsn, rabdo, riesgoRenal, alertas, sintomatico,
        escenario: v.escenario, contexto: v.contexto,
        lsnPorDefecto: v.lsn == null, sinK: v.potasio == null
      };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: creatina cinasa de 0 a 500000 U/L, limite alto de 20 a 1000, creatinina de 0 a 25 mg/dL y potasio de 1 a 10 mEq/L.';
      let s = `<strong>${r.ck} U/L, es decir ${r.x.toFixed(1)} veces el limite alto de normalidad.</strong> `;
      if (r.rabdo) {
        s += `<strong style="color:#8c3a34;">Cuadro compatible con RABDOMIOLISIS.</strong> El tratamiento es la HIDRATACION intensa y precoz con suero salino para mantener una diuresis abundante, y su retraso es lo que condiciona el fracaso renal. Riesgo renal ${r.riesgoRenal} por la cifra de enzima. `;
        s += '<br><strong style="color:#8c3a34;">Lo que puede matar en las primeras horas es el POTASIO</strong>, no la creatina cinasa: monitorizacion electrocardiografica y controles seriados de potasio, calcio, fosforo y funcion renal.';
        if (r.alertas.length) s += `<br><strong style="color:#8c3a34;">Alteraciones ya presentes:</strong> ${r.alertas.join(' y ')}. Tratamiento inmediato de la hiperpotasemia si procede y valoracion de la necesidad de depuracion extrarrenal.`;
        else if (r.sinK) s += '<br><span style="opacity:.75;">No se ha introducido el potasio, que es la determinacion mas urgente de este cuadro.</span>';
        if (r.contexto === 'agresion') s += '<br><span style="opacity:.75;">Con aplastamiento o inmovilizacion prolongada hay que buscar de forma activa un SINDROME COMPARTIMENTAL, que requiere fasciotomia urgente y se diagnostica explorando, no midiendo enzimas.</span>';
        if (r.contexto === 'farmaco') s += '<br><span style="opacity:.75;">Retirar el farmaco implicado. Con estatinas, revisar ademas las interacciones (fibratos e inhibidores del citocromo) y la funcion renal, que aumenta la exposicion.</span>';
        s += '<br><span style="opacity:.75;">El bicarbonato para alcalinizar la orina y el manitol siguen siendo CONTROVERTIDOS y en ningun caso sustituyen al volumen.</span>';
      } else if (r.escenario === 'asintomatico') {
        if (r.x < 1.5) s += '<span style="color:#3f6b52;">Elevacion minima o dentro de la variabilidad esperable.</span> Antes de estudiar nada, REPETIR tras 7 dias sin ejercicio. Conviene recordar lo que eleva la enzima sin que haya enfermedad: ejercicio reciente, masa muscular, sexo, origen etnico, inyecciones intramusculares y un electromiograma reciente.';
        else s += '<strong>Elevacion asintomatica.</strong> El primer paso NO es estudiar sino REPETIR tras 7 dias sin ejercicio. Si persiste, revisar la lista de farmacos (estatinas, colchicina, hidroxicloroquina, antirretrovirales y alcohol) y pedir HORMONA TIROESTIMULANTE, porque el hipotiroidismo eleva la enzima y se corrige tratando el tiroides.';
        if (r.contexto === 'farmaco') s += '<br><strong style="color:#8a6a1f;">Hay una estatina u otro farmaco miotoxico de por medio.</strong> Si al retirarlo la debilidad PERSISTE y la enzima no baja, hay que pensar en una MIOPATIA NECROTIZANTE INMUNOMEDIADA con anticuerpos anti-HMGCR, que necesita inmunosupresion y no se resuelve solo con la retirada.';
        if (r.contexto === 'ejercicio') s += '<br><span style="opacity:.75;">Con ejercicio reciente, la elevacion puede ser fisiologica y tardar dias en normalizarse. Eso es exactamente lo que hace obligatorio repetir la determinacion en reposo antes de sacar conclusiones.</span>';
        if (r.x >= 5) s += '<br><span style="opacity:.75;">Aun sin sintomas, una elevacion tan marcada y persistente obliga a completar el estudio: exploracion en busca de debilidad proximal, funcion tiroidea, electromiograma y valoracion por neurologia.</span>';
      } else {
        s += '<strong>Hay sintomas musculares con elevacion de la enzima que no alcanza el rango habitual de rabdomiolisis.</strong> Toca revisar farmacos, pedir funcion tiroidea, iones y funcion renal, e hidratar y repetir la determinacion, porque puede estar en fase de ascenso.';
        if (r.escenario === 'orina') s += '<br><strong style="color:#8c3a34;">Con orina oscura, comprobar la tira reactiva y el sedimento:</strong> tira positiva para sangre SIN hematies significa mioglobinuria, y eso obliga a hidratar y a mirar el potasio aunque la cifra de enzima aun no impresione.';
        if (r.alertas.length) s += `<br><strong style="color:#8c3a34;">Hay ademas ${r.alertas.join(' y ')}</strong>, que exige manejo inmediato con independencia del valor de la creatina cinasa.`;
      }
      if (r.lsnPorDefecto) s += '<br><span style="opacity:.75;">Se ha usado 200 U/L como limite alto de normalidad. Cada laboratorio tiene el suyo y conviene introducirlo.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `${r.x.toFixed(1)}x el limite alto, ${r.rabdo ? 'rabdomiolisis con riesgo renal ' + r.riesgoRenal.toLowerCase() : 'sin criterios de rabdomiolisis'}`
  }
];
