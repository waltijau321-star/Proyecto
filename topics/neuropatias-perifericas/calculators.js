// topics/neuropatias-perifericas/calculators.js
// 4 herramientas:
// - patron-neuropatia: la primera decision del tema, que reduce el diferencial y marca la urgencia.
// - estudio-neuropatia: las tres pruebas de mayor rendimiento y las ampliaciones dirigidas.
// - house-brackmann: graduacion de la paralisis facial y decisiones de las primeras 72 horas.
// - ortostatismo: hipotension ortostatica y, sobre todo, si su origen es neurogenico, que se
//   decide mirando el PULSO y no la presion.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

const HB = {
  1: { t: 'Grado I: funcion normal', d: 'Movilidad facial simetrica y completa en todos los territorios.' },
  2: { t: 'Grado II: disfuncion leve', d: 'Debilidad apenas apreciable, cierre ocular completo con MINIMO esfuerzo, simetria normal en reposo.' },
  3: { t: 'Grado III: disfuncion moderada', d: 'Asimetria evidente pero no desfigurante. Cierre ocular completo pero CON esfuerzo. Movimiento de la frente debil o moderado.' },
  4: { t: 'Grado IV: disfuncion moderadamente grave', d: 'Debilidad obvia y asimetria desfigurante. CIERRE OCULAR INCOMPLETO. Sin movimiento de la frente.' },
  5: { t: 'Grado V: disfuncion grave', d: 'Movimiento apenas perceptible. Asimetria en reposo. Cierre ocular incompleto.' },
  6: { t: 'Grado VI: paralisis total', d: 'Ningun movimiento en todo el territorio facial.' }
};

export const calculators = [
  {
    key: 'patron-neuropatia', title: 'Patron de la neuropatia', accent: '#2e6b6b',
    subtitle: 'La primera decision: reduce el diferencial y marca la urgencia',
    incompleteMsg: 'Responde a las preguntas sobre simetria, distribucion y tiempo de evolucion.',
    fields: [
      { name: 'simetria', id: 'np-pa-si', type: 'select', label: 'Distribucion del deficit', options: [
        { v: 'simetrica', t: 'Simetrica, empieza en los pies y asciende (en calcetin)' },
        { v: 'unnervio', t: 'Limitada al territorio de UN nervio concreto' },
        { v: 'asimetrica', t: 'Varios nervios, de forma asimetrica y sucesiva' },
        { v: 'proximal', t: 'Proximal Y distal, con arreflexia difusa' }
      ] },
      { name: 'semanas', id: 'np-pa-se', type: 'number', step: '0.5', label: 'Semanas de evolucion', placeholder: 'ej. 12', row: 'r1' },
      { name: 'fibra', id: 'np-pa-fi', type: 'select', label: 'Predominio de sintomas', row: 'r1', options: [
        { v: 'gruesa', t: 'Acorchamiento, inestabilidad y arreflexia (fibra gruesa)' },
        { v: 'fina', t: 'Dolor quemante y alodinia, con fuerza y reflejos normales (fibra fina)' },
        { v: 'mixto', t: 'Ambos tipos de sintomas' }
      ] },
      { name: 'sistemicos', id: 'np-pa-sis', type: 'checkbox', label: 'Sintomas sistemicos: fiebre, perdida de peso, artralgias o lesiones cutaneas', row: 'r2' },
      { name: 'cavos', id: 'np-pa-ca', type: 'checkbox', label: 'Pies cavos, dedos en martillo o antecedente familiar de neuropatia', row: 'r2' },
      { type: 'note', text: 'Definir el patron antes de pedir ninguna prueba etiologica es lo que convierte un diferencial inabarcable en uno corto. La razon es anatomica: lo metabolico y lo toxico da&#241;a primero las fibras mas largas, lo vascular produce infartos en puntos aleatorios, y lo inmunitario ataca raices y troncos por igual.' }
    ],
    compute(v) {
      if (v.semanas == null) return null;
      if (!(v.semanas >= 0 && v.semanas <= 2000)) return { invalido: true };
      const p = v.simetria || 'simetrica';
      const agudo = v.semanas < 4;
      const cronico = v.semanas > 8;
      const fibraFina = v.fibra === 'fina';
      return { p, semanas: v.semanas, agudo, cronico, fibraFina, sistemicos: !!v.sistemicos, cavos: !!v.cavos };
    },
    format: r => {
      if (r.invalido) return 'Revisa el valor: las semanas de evolucion deben estar entre 0 y 2000.';
      let s = '';
      if (r.p === 'asimetrica') {
        s += '<strong style="color:#8c3a34;">MONONEURITIS MULTIPLE. Es el unico patron URGENTE del tema.</strong> Varios nervios afectados de forma sucesiva y asimetrica significa infartos del tronco nervioso por inflamacion de los vasa nervorum: es una VASCULITIS hasta que se demuestre lo contrario. ';
        s += 'Corresponde estudio SIN DEMORA: velocidad de sedimentacion, proteina C reactiva, ANCA, factor reumatoide, crioglobulinas, complemento, anticuerpos antinucleares, serologias de hepatitis B y C, y VIH. Si la sospecha es alta, no se espera a la biopsia para iniciar corticoides e inmunosupresor, porque cada dia de retraso son axones que no se recuperan. ';
        if (r.sistemicos) s += '<br><strong style="color:#8c3a34;">Ademas hay sintomas sistemicos</strong>, lo que refuerza mucho la sospecha de vasculitis sistemica y obliga a buscar afectacion de otros organos: ri&#241;on, pulmon y piel.';
        else s += '<br>La ausencia de sintomas sistemicos no descarta nada: existe la vasculitis NO sistemica limitada al nervio periferico, cuyo diagnostico se apoya en la biopsia de nervio sural.';
        return s;
      }
      if (r.p === 'unnervio') {
        s += '<strong style="color:#3d5a73;">MONONEUROPATIA.</strong> Casi siempre por atrapamiento o compresion en un punto anatomico estrecho: mediano en el tunel carpiano, cubital en el codo, radial en la canaladura humeral, peroneo en la cabeza del perone. ';
        s += 'Corresponde localizar la lesion con electroneurograma y, si esta disponible, con ecografia de nervio. Tratamiento conservador con ferula y modificacion de la actividad, y cirugia si hay deficit motor, atrofia o fracaso del tratamiento conservador. ';
        s += '<br><strong style="color:#8a6a1f;">Dos comprobaciones que se olvidan</strong>: buscar una causa que aumente la susceptibilidad del nervio (diabetes, hipotiroidismo, embarazo, acromegalia, amiloidosis) y, si aparecen mas nervios despues, replantear el diagnostico hacia una mononeuritis multiple.';
        return s;
      }
      if (r.p === 'proximal') {
        s += '<strong style="color:#8a6a1f;">POLIRADICULONEUROPATIA</strong>: la afectacion proximal y distal con arreflexia difusa rompe el patron dependiente de la longitud y apunta a raices y troncos nerviosos. ';
        if (r.agudo) s += `Con ${r.semanas} semanas de evolucion, es un <strong style="color:#8c3a34;">SINDROME DE GUILLAIN-BARRE</strong> mientras no se demuestre lo contrario: hay que vigilar la funcion respiratoria y la deglucion desde el primer momento e ingresar al paciente.`;
        else if (r.cronico) s += `Con ${r.semanas} semanas, la progresion supera las 8 semanas y corresponde a una <strong>forma inflamatoria CRONICA</strong>, que es TRATABLE con corticoides, inmunoglobulinas o plasmaferesis. Hay que confirmar los criterios de desmielinizacion en el electroneurograma y pedir inmunofijacion en suero, que es obligada.`;
        else s += `Con ${r.semanas} semanas esta en la zona intermedia entre la forma aguda y la cronica. Hay que vigilar la evolucion: si sigue progresando mas alla de las 8 semanas, se comporta como forma cronica.`;
        return s;
      }
      s += `<strong style="color:#3f6b52;">POLINEUROPATIA DISTAL SIMETRICA</strong>, el patron mas frecuente y dependiente de la longitud del axon. Diferencial: diabetes y prediabetes, alcohol, deficit de vitamina B12, uremia, hipotiroidismo, farmacos y toxicos, paraproteinemia y las formas hereditarias. `;
      s += 'Estudio: glucemia con SOBRECARGA ORAL, vitamina B12 con acido metilmalonico e inmunofijacion en suero. Y revisar la lista completa de farmacos y toxicos, incluido el oxido nitroso inhalado en pacientes jovenes.';
      if (r.fibraFina) {
        s += '<br><strong style="color:#6b4a8c;">Con predominio de dolor quemante y fuerza y reflejos normales, hay que pensar en NEUROPATIA DE FIBRA FINA.</strong> El electroneurograma explora la fibra gruesa y por eso saldra NORMAL, lo que no descarta nada. La confirmacion es la biopsia cutanea con densidad de fibras intraepidermicas, y la causa mas frecuente que se pasa por alto es la PREDIABETES, que solo aparece con sobrecarga oral de glucosa.';
      }
      if (r.cavos) {
        s += '<br><strong style="color:#8a6a1f;">Pies cavos, dedos en martillo o antecedente familiar</strong>: la deformidad indica que el proceso lleva a&#241;os, desde el desarrollo. Apunta a una NEUROPATIA HEREDITARIA, y pedir el estudio genetico dirigido ahorra un estudio etiologico largo e inutil.';
      }
      return s;
    },
    fragment: r => {
      if (r.invalido) return 'valor no valido';
      const m = { simetrica: 'polineuropatia distal simetrica', unnervio: 'mononeuropatia (atrapamiento)', asimetrica: 'mononeuritis multiple: URGENTE, descartar vasculitis', proximal: 'poliradiculoneuropatia' };
      return m[r.p] + (r.p === 'proximal' ? (r.agudo ? ': aguda, tipo Guillain-Barre' : (r.cronico ? ': cronica' : '')) : '');
    }
  },

  {
    key: 'estudio-neuropatia', title: 'Estudio etiologico de la polineuropatia', accent: '#3f6b52',
    subtitle: 'Tres pruebas concentran el rendimiento; el resto va dirigido',
    incompleteMsg: 'Marca lo que ya se ha hecho y las pistas clinicas presentes.',
    fields: [
      { name: 'glucemia', id: 'np-es-gl', type: 'checkbox', label: 'Hecho: glucemia en ayunas y hemoglobina glucosilada', row: 'r1' },
      { name: 'sobrecarga', id: 'np-es-so', type: 'checkbox', label: 'Hecha: SOBRECARGA ORAL de glucosa', row: 'r1' },
      { name: 'b12', id: 'np-es-b12', type: 'checkbox', label: 'Hecha: vitamina B12 (con acido metilmalonico si estaba baja-normal)', row: 'r2' },
      { name: 'inmuno', id: 'np-es-in', type: 'checkbox', label: 'Hecha: electroforesis con INMUNOFIJACION en suero', row: 'r2' },
      { name: 'farmacos', id: 'np-es-fa', type: 'checkbox', label: 'Hecha: revision completa de farmacos, alcohol y toxicos', row: 'r3' },
      { name: 'enmg', id: 'np-es-en', type: 'checkbox', label: 'Hecho: electroneurograma y electromiograma', row: 'r3' },
      { name: 'mielopatia', id: 'np-es-mi', type: 'checkbox', label: 'Hay mielopatia asociada, cirugia bariatrica previa o suplementos de zinc', row: 'r4' },
      { name: 'familiar', id: 'np-es-fam', type: 'checkbox', label: 'Antecedente familiar, pies cavos o dedos en martillo', row: 'r4' },
      { name: 'seca', id: 'np-es-sec', type: 'checkbox', label: 'Sequedad de boca y de ojos, o artralgias' },
      { type: 'note', text: 'Pedir un panel amplio de entrada encuentra hallazgos irrelevantes y no aumenta el rendimiento diagnostico. La glucemia, la vitamina B12 y la inmunofijacion en suero son las tres que si lo hacen en la polineuropatia distal simetrica, y la sobrecarga oral a&#241;ade valor porque detecta la prediabetes.' }
    ],
    compute(v) {
      const faltan = [];
      if (!v.glucemia) faltan.push('glucemia en ayunas y hemoglobina glucosilada');
      if (!v.b12) faltan.push('VITAMINA B12, con acido metilmalonico si queda baja-normal');
      if (!v.inmuno) faltan.push('electroforesis con INMUNOFIJACION en suero');
      const dirigido = [];
      if (v.glucemia && !v.sobrecarga) dirigido.push('SOBRECARGA ORAL de glucosa: detecta la prediabetes, que se asocia a neuropatia y que la glucemia y la hemoglobina glucosilada normales pueden pasar por alto');
      if (v.mielopatia) dirigido.push('COBRE y ceruloplasmina, mas vitamina E: el deficit de cobre da mieloneuropatia y es una causa tratable que se olvida tras cirugia bariatrica o con suplementos de zinc');
      if (v.familiar) dirigido.push('ESTUDIO GENETICO de neuropatia hereditaria: el antecedente familiar y la deformidad del pie hacen innecesario buena parte del resto del estudio');
      if (v.seca) dirigido.push('anticuerpos anti-Ro y anti-La y valoracion de sindrome de Sjogren, causa frecuente de neuropatia de fibra fina y de ganglionopatia');
      return { faltan, dirigido, completo: faltan.length === 0, farmacos: !!v.farmacos, enmg: !!v.enmg };
    },
    format: r => {
      let s = '';
      if (r.completo) {
        s += '<strong style="color:#3f6b52;">Las tres pruebas de mayor rendimiento estan hechas.</strong> Glucemia, vitamina B12 e inmunofijacion en suero concentran casi todo el rendimiento diagnostico en la polineuropatia distal simetrica. ';
      } else {
        s += `<strong style="color:#8c3a34;">Faltan pruebas del nucleo del estudio</strong>: ${r.faltan.join('; ')}. La inmunofijacion es la que mas se olvida y es mas sensible que la electroforesis sola: busca una gammapatia monoclonal que puede ser la causa y que abre un estudio hematologico propio. `;
      }
      if (!r.farmacos) {
        s += '<br><strong style="color:#8c3a34;">Falta la revision de FARMACOS y TOXICOS</strong>, que no cuesta nada y explica muchos casos: quimioterapicos, amiodarona, metronidazol y nitrofurantoina prolongados, linezolid, isoniazida sin piridoxina, alcohol, plomo, arsenico y el OXIDO NITROSO inhalado con fines recreativos, que produce un cuadro por deficit funcional de B12 en jovenes y que solo aparece si se pregunta.';
      }
      if (!r.enmg) {
        s += '<br><strong style="color:#8a6a1f;">Falta el electroneurograma</strong>, que separa lo AXONAL (la gran mayoria, de origen toxico, metabolico o carencial) de lo DESMIELINIZANTE (mucho menos frecuente pero potencialmente tratable con inmunoterapia). Esa distincion cambia el pronostico y el tratamiento. Recordar que sale NORMAL en la neuropatia de fibra fina.';
      }
      if (r.dirigido.length) {
        s += `<br><strong style="color:#8a6a1f;">Ampliaciones que sugieren las pistas presentes:</strong><br>${r.dirigido.map(x => '&nbsp;· ' + x).join('<br>')}`;
      } else if (r.completo) {
        s += '<br>Sin pistas que orienten hacia una ampliacion concreta. Si el estudio completo resulta negativo, una parte de las polineuropatias se queda como criptogenica, y esa es una conclusion legitima siempre que el nucleo del estudio se haya hecho.';
      }
      return s;
    },
    fragment: r => {
      const base = r.completo
        ? 'nucleo del estudio completo'
        : (r.faltan.length > 1 ? `faltan ${r.faltan.length} pruebas del nucleo` : 'falta 1 prueba del nucleo');
      const amp = r.dirigido.length > 1 ? `, ${r.dirigido.length} ampliaciones sugeridas` : (r.dirigido.length === 1 ? ', 1 ampliacion sugerida' : '');
      return base + amp;
    }
  },

  {
    key: 'house-brackmann', title: 'Paralisis facial: grado y manejo', accent: '#8a6a1f',
    subtitle: 'Primero la frente, despues el grado y las primeras 72 horas',
    incompleteMsg: 'Indica si la frente esta afectada, el grado de House-Brackmann y las horas de evolucion.',
    fields: [
      { name: 'frente', id: 'np-hb-fr', type: 'select', label: 'La FRENTE del lado afectado', options: [
        { v: 'afectada', t: 'Esta afectada: no arruga la frente' },
        { v: 'conservada', t: 'Esta conservada: arruga la frente con normalidad' }
      ] },
      { name: 'grado', id: 'np-hb-gr', type: 'select', label: 'Grado de House-Brackmann', row: 'r1', options: [
        { v: '2', t: 'II · Debilidad leve, cierre ocular completo sin esfuerzo' },
        { v: '3', t: 'III · Asimetria evidente, cierre ocular completo CON esfuerzo' },
        { v: '4', t: 'IV · Asimetria desfigurante, cierre ocular INCOMPLETO' },
        { v: '5', t: 'V · Movimiento apenas perceptible' },
        { v: '6', t: 'VI · Paralisis total' }
      ] },
      { name: 'horas', id: 'np-hb-ho', type: 'number', step: '1', label: 'Horas desde el inicio', placeholder: 'ej. 30', row: 'r1' },
      { name: 'vesiculas', id: 'np-hb-ve', type: 'checkbox', label: 'Vesiculas en el pabellon auricular o en el conducto', row: 'r2' },
      { name: 'bilateral', id: 'np-hb-bi', type: 'checkbox', label: 'Es bilateral, recurrente o hay otros pares craneales afectados', row: 'r2' },
      { name: 'lenta', id: 'np-hb-le', type: 'checkbox', label: 'Se instauro de forma progresiva en mas de 3 semanas' },
      { type: 'note', text: 'La escala de House-Brackmann va de I (normal) a VI (paralisis total). Lo que decide el manejo inmediato no es tanto el grado como dos cosas: si la frente esta afectada, que separa lo periferico de lo central, y si el ojo cierra, que determina el riesgo de ulcera corneal.' }
    ],
    compute(v) {
      if (v.horas == null) return null;
      if (!(v.horas >= 0 && v.horas <= 10000)) return { invalido: true };
      const central = v.frente === 'conservada';
      const g = parseInt(v.grado || '3', 10);
      const cierraOjo = g <= 3;
      const dentro72 = v.horas <= 72;
      const atipica = !!(v.bilateral || v.lenta);
      return { central, g, datos: HB[g], cierraOjo, dentro72, horas: v.horas, vesiculas: !!v.vesiculas, atipica, bilateral: !!v.bilateral, lenta: !!v.lenta };
    },
    format: r => {
      if (r.invalido) return 'Revisa el valor: las horas de evolucion deben estar entre 0 y 10000.';
      if (r.central) {
        return '<strong style="color:#8c3a34;">La frente esta CONSERVADA: esto es una paralisis facial CENTRAL, no periferica.</strong> La musculatura de la frente recibe inervacion de ambos hemisferios, de modo que una lesion supranuclear la respeta y solo cae la mitad inferior de la cara. <strong>Es un ICTUS hasta que se demuestre lo contrario</strong>: se maneja como codigo ictus, con neuroimagen urgente y valoracion de tratamiento de reperfusion segun el tiempo de evolucion. Ni corticoide ni antiviral: ese no es el problema. Es la comprobacion de dos segundos que mas cambia el destino del paciente en este tema.';
      }
      let s = `<strong style="color:#8a6a1f;">Paralisis facial PERIFERICA. ${r.datos.t}.</strong> ${r.datos.d} `;
      s += '<br><strong>1. Corticoide: </strong>';
      if (r.dentro72) s += `con ${r.horas} horas de evolucion se esta DENTRO de la ventana de 72 horas. Corticoide oral cuanto antes, que es la intervencion con mejor respaldo y la que mas mejora la probabilidad de recuperacion completa.`;
      else s += `con ${r.horas} horas ya se ha superado la ventana optima de 72 horas, donde el beneficio esta mejor demostrado. Aun asi, en la practica se suele pautar si el paciente consulta poco despues, valorando el balance individual. Lo que no cambia es el resto del manejo.`;
      s += '<br><strong>2. Proteccion ocular: </strong>';
      if (!r.cierraOjo) s += '<strong style="color:#8c3a34;">el ojo NO cierra por completo en este grado, y ahi esta la unica secuela realmente grave del cuadro.</strong> Lagrimas artificiales frecuentes durante el dia, pomada lubricante y OCLUSION del ojo por la noche, mas gafas de sol en el exterior. Sin cierre palpebral, la cornea se deseca y se ulcera. Es lo que mas se olvida al alta.';
      else s += 'el ojo cierra en este grado, pero conviene pautar lagrimas artificiales igualmente y advertir al paciente de que consulte si nota sequedad, dolor o enrojecimiento ocular.';
      if (r.vesiculas) {
        s += '<br><strong style="color:#8c3a34;">3. Hay VESICULAS: es un sindrome de RAMSAY HUNT</strong>, por reactivacion del virus varicela-zoster en el ganglio geniculado. Recupera peor que la paralisis de Bell, y aqui el ANTIVIRAL si esta claramente indicado junto con el corticoide. Explorar tambien la audicion y el equilibrio, porque puede asociar afectacion del octavo par.';
      } else {
        s += '<br><strong>3.</strong> Sin vesiculas en el pabellon ni en el conducto. Conviene mirar el conducto con otoscopio y no solo el pabellon, porque las vesiculas pueden estar solo dentro y cambian el tratamiento.';
      }
      if (r.atipica) {
        s += '<br><strong style="color:#8c3a34;">Y hay datos que hacen que esto NO se comporte como una paralisis de Bell';
        if (r.bilateral) s += ' (bilateral, recurrente o con otros pares afectados)';
        if (r.lenta) s += ' (instauracion progresiva en mas de 3 semanas, cuando la de Bell alcanza su maximo en 72 horas)';
        s += '.</strong> Corresponde neuroimagen y estudio dirigido: sindrome de Guillain-Barre, enfermedad de Lyme, sarcoidosis, VIH, linfoma, tumor de parotida o del angulo pontocerebeloso.';
      }
      s += '<br><span style="opacity:.75;">Revision a las 2 o 3 semanas y a los 3 meses. Si NO ha empezado a mejorar a los 3 o 4 meses, hay que replantear el diagnostico y pedir imagen.</span>';
      return s;
    },
    fragment: r => {
      if (r.invalido) return 'valor no valido';
      if (r.central) return 'paralisis CENTRAL: manejar como ictus';
      return `periferica, grado ${r.g}${r.cierraOjo ? '' : ' (el ojo no cierra)'}${r.vesiculas ? ', Ramsay Hunt' : ''}`;
    }
  },

  {
    key: 'ortostatismo', title: 'Hipotension ortostatica y su origen', accent: '#3d5a73',
    subtitle: 'El dato no esta en la presion, esta en el pulso',
    incompleteMsg: 'Introduce la presion arterial y la frecuencia cardiaca en decubito y a los 3 minutos de pie.',
    fields: [
      { name: 'pasD', id: 'np-or-pasd', type: 'number', step: '1', label: 'Presion sistolica EN DECUBITO (mmHg)', placeholder: 'ej. 138', row: 'r1' },
      { name: 'padD', id: 'np-or-padd', type: 'number', step: '1', label: 'Presion diastolica en decubito (mmHg)', placeholder: 'ej. 78', row: 'r1' },
      { name: 'fcD', id: 'np-or-fcd', type: 'number', step: '1', label: 'Frecuencia cardiaca en decubito (lpm)', placeholder: 'ej. 68', row: 'r2' },
      { name: 'pasP', id: 'np-or-pasp', type: 'number', step: '1', label: 'Presion sistolica DE PIE a los 3 minutos (mmHg)', placeholder: 'ej. 106', row: 'r2' },
      { name: 'padP', id: 'np-or-padp', type: 'number', step: '1', label: 'Presion diastolica de pie (mmHg)', placeholder: 'ej. 66', row: 'r3' },
      { name: 'fcP', id: 'np-or-fcp', type: 'number', step: '1', label: 'Frecuencia cardiaca de pie (lpm)', placeholder: 'ej. 74', row: 'r3' },
      { name: 'farmacos', id: 'np-or-fa', type: 'checkbox', label: 'Toma antihipertensivos, diureticos, alfabloqueantes, antidepresivos o agonistas dopaminergicos' },
      { type: 'note', text: 'La medicion se hace tras 5 minutos en decubito y a los 3 minutos de bipedestacion ACTIVA. Lo que separa la hipotension ortostatica neurogenica de la que no lo es no es la magnitud de la caida sino la respuesta del PULSO: si el reflejo simpatico esta intacto, la frecuencia cardiaca sube para compensar; si esta da&#241;ado, no lo hace.' }
    ],
    compute(v) {
      const req = ['pasD', 'padD', 'fcD', 'pasP', 'padP', 'fcP'];
      if (req.some(k => v[k] == null)) return null;
      if ([v.pasD, v.pasP].some(x => !(x > 40 && x < 300))) return { invalido: true };
      if ([v.padD, v.padP].some(x => !(x > 20 && x < 200))) return { invalido: true };
      if ([v.fcD, v.fcP].some(x => !(x > 20 && x < 250))) return { invalido: true };
      const dPas = v.pasD - v.pasP;
      const dPad = v.padD - v.padP;
      const dFc = v.fcP - v.fcD;
      const ho = dPas >= 20 || dPad >= 10;
      const cociente = dPas > 0 ? dFc / dPas : null;
      const neurogenica = ho && cociente != null && cociente < 0.5;
      const pots = !ho && dFc >= 30;
      return { dPas, dPad, dFc, ho, cociente, neurogenica, pots, farmacos: !!v.farmacos, pasD: v.pasD };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: sistolica de 40 a 300, diastolica de 20 a 200 y frecuencia cardiaca de 20 a 250.';
      let s = `<strong>Caida de ${r.dPas} mmHg en la sistolica y de ${r.dPad} en la diastolica, con un aumento de ${r.dFc} latidos por minuto.</strong> `;
      if (!r.ho) {
        s += '<span style="color:#3f6b52;">NO se cumple criterio de hipotension ortostatica</span>, que exige una caida de 20 mmHg o mas en la sistolica o de 10 o mas en la diastolica a los 3 minutos. ';
        if (r.pots) {
          s += `<br><strong style="color:#3d5a73;">Pero la frecuencia cardiaca ha subido ${r.dFc} latidos SIN caida tensional que cumpla criterio.</strong> Eso apunta a un SINDROME DE TAQUICARDIA POSTURAL, que es una entidad distinta: exige un aumento de 30 latidos o mas en los 10 primeros minutos de bipedestacion y sintomas de al menos 3 meses. Antes de etiquetarlo hay que descartar deshidratacion, anemia, hipertiroidismo, feocromocitoma, farmacos y desacondicionamiento. El tratamiento es sal, liquidos, medias de compresion y EJERCICIO PROGRESIVO, no reposo, que empeora el cuadro.`;
        } else {
          s += 'Si el paciente tiene sintomas ortostaticos claros, conviene repetir la medicion en otro momento del dia, preferentemente por la MA&#209;ANA y en ayunas, o tras una comida, que es cuando la hipotension postprandial se hace evidente.';
        }
        return s;
      }
      s += '<strong style="color:#8c3a34;">Cumple criterio de HIPOTENSION ORTOSTATICA.</strong> ';
      if (r.cociente != null) {
        s += `<br>Cociente entre el aumento de la frecuencia y la caida de la sistolica: <strong>${r.cociente.toFixed(2)}</strong> latidos por cada mmHg. `;
        if (r.neurogenica) {
          s += '<strong style="color:#8c3a34;">Por debajo de 0.5: apunta a origen NEUROGENICO.</strong> El arco reflejo simpatico no esta compensando la caida, lo que orienta a fallo autonomico: enfermedad de Parkinson y otras sinucleinopatias, atrofia multisistemica, fallo autonomico puro, neuropatia diabetica o amiloidotica. Corresponde valoracion neurologica y busqueda de otros signos disautonomicos.';
        } else {
          s += '<strong style="color:#3f6b52;">Por encima de 0.5: el reflejo esta compensando</strong>, lo que apunta a una causa NO neurogenica: hipovolemia, hemorragia, anemia, insuficiencia suprarrenal o, muy a menudo, un farmaco. Buscar esa causa rinde mucho mas que iniciar un tratamiento sintomatico.';
        }
      }
      if (r.farmacos) {
        s += '<br><strong style="color:#8a6a1f;">El paciente toma farmacos que pueden producirla.</strong> Antes de a&#241;adir nada, hay que REVISAR Y AJUSTAR esa medicacion: es la causa mas frecuente y la mas facil de corregir, y anteponer midodrina o fludrocortisona a esa revision es un error habitual.';
      }
      s += '<br><strong>Manejo, y en este orden:</strong> retirar o ajustar los farmacos implicados; aumentar sal y agua; medias de compresion hasta la cintura; ELEVAR EL CABECERO de la cama por la noche, que reduce la natriuresis nocturna y mejora la hipotension de la ma&#241;ana; levantarse en dos tiempos; y maniobras de contrapresion. Solo si eso no basta, midodrina o fludrocortisona.';
      if (r.pasD >= 140) {
        s += `<br><strong style="color:#8c3a34;">Ojo: la sistolica en decubito es de ${r.pasD} mmHg.</strong> La combinacion de hipertension acostado con hipotension de pie es caracteristica del fallo autonomico y es un problema terapeutico real, porque los farmacos que corrigen una empeoran la otra. Por eso no se administran en las horas previas a acostarse y se eleva el cabecero.`;
      }
      return s;
    },
    fragment: r => {
      if (r.invalido) return 'valores no validos';
      if (!r.ho) return r.pots ? `sin hipotension ortostatica, aumento de ${r.dFc} lpm: valorar taquicardia postural` : 'sin criterio de hipotension ortostatica';
      return `hipotension ortostatica, origen ${r.neurogenica ? 'neurogenico' : 'no neurogenico'}`;
    }
  }
];
