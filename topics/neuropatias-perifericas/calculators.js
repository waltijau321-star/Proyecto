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
  1: { t: 'Grado I: función normal', d: 'Movilidad facial simétrica y completa en todos los territorios.' },
  2: { t: 'Grado II: disfunción leve', d: 'Debilidad apenas apreciable, cierre ocular completo con MÍNIMO esfuerzo, simetría normal en reposo.' },
  3: { t: 'Grado III: disfunción moderada', d: 'Asimetría evidente pero no desfigurante. Cierre ocular completo pero CON esfuerzo. Movimiento de la frente débil o moderado.' },
  4: { t: 'Grado IV: disfunción moderadamente grave', d: 'Debilidad obvia y asimetría desfigurante. CIERRE OCULAR INCOMPLETO. Sin movimiento de la frente.' },
  5: { t: 'Grado V: disfunción grave', d: 'Movimiento apenas perceptible. Asimetría en reposo. Cierre ocular incompleto.' },
  6: { t: 'Grado VI: parálisis total', d: 'Ningún movimiento en todo el territorio facial.' }
};

export const calculators = [
  {
    key: 'patron-neuropatia', title: 'Patrón de la neuropatía', accent: '#2e6b6b',
    subtitle: 'La primera decisión: reduce el diferencial y marca la urgencia',
    incompleteMsg: 'Responde a las preguntas sobre simetría, distribución y tiempo de evolución.',
    fields: [
      { name: 'simetria', id: 'np-pa-si', type: 'select', label: 'Distribución del déficit', options: [
        { v: 'simetrica', t: 'Simétrica, empieza en los pies y asciende (en calcetín)' },
        { v: 'unnervio', t: 'Limitada al territorio de UN nervio concreto' },
        { v: 'asimetrica', t: 'Varios nervios, de forma asimétrica y sucesiva' },
        { v: 'proximal', t: 'Proximal Y distal, con arreflexia difusa' }
      ] },
      { name: 'semanas', id: 'np-pa-se', type: 'number', step: '0.5', label: 'Semanas de evolución', placeholder: 'ej. 12', row: 'r1' },
      { name: 'fibra', id: 'np-pa-fi', type: 'select', label: 'Predominio de síntomas', row: 'r1', options: [
        { v: 'gruesa', t: 'Acorchamiento, inestabilidad y arreflexia (fibra gruesa)' },
        { v: 'fina', t: 'Dolor quemante y alodinia, con fuerza y reflejos normales (fibra fina)' },
        { v: 'mixto', t: 'Ambos tipos de síntomas' }
      ] },
      { name: 'sistemicos', id: 'np-pa-sis', type: 'checkbox', label: 'Síntomas sistémicos: fiebre, pérdida de peso, artralgias o lesiones cutáneas', row: 'r2' },
      { name: 'cavos', id: 'np-pa-ca', type: 'checkbox', label: 'Pies cavos, dedos en martillo o antecedente familiar de neuropatía', row: 'r2' },
      { type: 'note', text: 'Definir el patrón antes de pedir ninguna prueba etiológica es lo que convierte un diferencial inabarcable en uno corto. La razón es anatómica: lo metabólico y lo tóxico daña primero las fibras más largas, lo vascular produce infartos en puntos aleatorios, y lo inmunitario ataca raíces y troncos por igual.' }
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
      if (r.invalido) return 'Revisa el valor: las semanas de evolución deben estar entre 0 y 2000.';
      let s = '';
      if (r.p === 'asimetrica') {
        s += '<strong style="color:#8c3a34;">MONONEURITIS MÚLTIPLE. Es el único patrón URGENTE del tema.</strong> Varios nervios afectados de forma sucesiva y asimétrica significa infartos del tronco nervioso por inflamación de los vasa nervorum: es una VASCULITIS hasta que se demuestre lo contrario. ';
        s += 'Corresponde estudio SIN DEMORA: velocidad de sedimentación, proteína C reactiva, ANCA, factor reumatoide, crioglobulinas, complemento, anticuerpos antinucleares, serologías de hepatitis B y C, y VIH. Si la sospecha es alta, no se espera a la biopsia para iniciar corticoides e inmunosupresor, porque cada dia de retraso son axones que no se recuperan. ';
        if (r.sistemicos) s += '<br><strong style="color:#8c3a34;">Además hay síntomas sistémicos</strong>, lo que refuerza mucho la sospecha de vasculitis sistémica y obliga a buscar afectación de otros órganos: riñón, pulmón y piel.';
        else s += '<br>La ausencia de síntomas sistémicos no descarta nada: existe la vasculitis NO sistémica limitada al nervio periférico, cuyo diagnóstico se apoya en la biopsia de nervio sural.';
        return s;
      }
      if (r.p === 'unnervio') {
        s += '<strong style="color:#3d5a73;">MONONEUROPATIA.</strong> Casi siempre por atrapamiento o compresión en un punto anatómico estrecho: mediano en el túnel carpiano, cubital en el codo, radial en la canaladura humeral, peroneo en la cabeza del perone. ';
        s += 'Corresponde localizar la lesión con electroneurograma y, si esta disponible, con ecografía de nervio. Tratamiento conservador con ferula y modificación de la actividad, y cirugía si hay déficit motor, atrofia o fracaso del tratamiento conservador. ';
        s += '<br><strong style="color:#8a6a1f;">Dos comprobaciones que se olvidan</strong>: buscar una causa que aumente la susceptibilidad del nervio (diabetes, hipotiroidismo, embarazo, acromegalia, amiloidosis) y, si aparecen más nervios después, replantear el diagnóstico hacia una mononeuritis múltiple.';
        return s;
      }
      if (r.p === 'proximal') {
        s += '<strong style="color:#8a6a1f;">POLIRADICULONEUROPATIA</strong>: la afectación proximal y distal con arreflexia difusa rompe el patrón dependiente de la longitud y apunta a raíces y troncos nerviosos. ';
        if (r.agudo) s += `Con ${r.semanas} semanas de evolución, es un <strong style="color:#8c3a34;">SÍNDROME DE GUILLAIN-BARRÉ</strong> mientras no se demuestre lo contrario: hay que vigilar la función respiratoria y la deglución desde el primer momento e ingresar al paciente.`;
        else if (r.cronico) s += `Con ${r.semanas} semanas, la progresión supera las 8 semanas y corresponde a una <strong>forma inflamatoria CRÓNICA</strong>, que es TRATABLE con corticoides, inmunoglobulinas o plasmaféresis. Hay que confirmar los criterios de desmielinización en el electroneurograma y pedir inmunofijación en suero, que es obligada.`;
        else s += `Con ${r.semanas} semanas esta en la zona intermedia entre la forma aguda y la crónica. Hay que vigilar la evolución: si sigue progresando más allá de las 8 semanas, se comporta como forma crónica.`;
        return s;
      }
      s += `<strong style="color:#3f6b52;">POLINEUROPATÍA DISTAL SIMÉTRICA</strong>, el patrón más frecuente y dependiente de la longitud del axon. Diferencial: diabetes y prediabetes, alcohol, déficit de vitamina B12, uremia, hipotiroidismo, fármacos y tóxicos, paraproteinemia y las formas hereditarias. `;
      s += 'Estudio: glucemia con SOBRECARGA ORAL, vitamina B12 con ácido metilmalónico e inmunofijación en suero. Y revisar la lista completa de fármacos y tóxicos, incluido el óxido nitroso inhalado en pacientes jóvenes.';
      if (r.fibraFina) {
        s += '<br><strong style="color:#6b4a8c;">Con predominio de dolor quemante y fuerza y reflejos normales, hay que pensar en NEUROPATÍA DE FIBRA FINA.</strong> El electroneurograma explora la fibra gruesa y por eso saldra NORMAL, lo que no descarta nada. La confirmación es la biopsia cutánea con densidad de fibras intraepidérmicas, y la causa más frecuente que se pasa por alto es la PREDIABETES, que solo aparece con sobrecarga oral de glucosa.';
      }
      if (r.cavos) {
        s += '<br><strong style="color:#8a6a1f;">Pies cavos, dedos en martillo o antecedente familiar</strong>: la deformidad indica que el proceso lleva años, desde el desarrollo. Apunta a una NEUROPATÍA HEREDITARIA, y pedir el estudio genético dirigido ahorra un estudio etiológico largo e inútil.';
      }
      return s;
    },
    fragment: r => {
      if (r.invalido) return 'valor no valido';
      const m = { simetrica: 'polineuropatía distal simétrica', unnervio: 'mononeuropatia (atrapamiento)', asimetrica: 'mononeuritis múltiple: URGENTE, descartar vasculitis', proximal: 'poliradiculoneuropatia' };
      return m[r.p] + (r.p === 'proximal' ? (r.agudo ? ': aguda, tipo Guillain-Barré' : (r.cronico ? ': crónica' : '')) : '');
    }
  },

  {
    key: 'estudio-neuropatia', title: 'Estudio etiológico de la polineuropatía', accent: '#3f6b52',
    subtitle: 'Tres pruebas concentran el rendimiento; el resto va dirigido',
    incompleteMsg: 'Marca lo que ya se ha hecho y las pistas clínicas presentes.',
    fields: [
      { name: 'glucemia', id: 'np-es-gl', type: 'checkbox', label: 'Hecho: glucemia en ayunas y hemoglobina glucosilada', row: 'r1' },
      { name: 'sobrecarga', id: 'np-es-so', type: 'checkbox', label: 'Hecha: SOBRECARGA ORAL de glucosa', row: 'r1' },
      { name: 'b12', id: 'np-es-b12', type: 'checkbox', label: 'Hecha: vitamina B12 (con ácido metilmalónico si estaba baja-normal)', row: 'r2' },
      { name: 'inmuno', id: 'np-es-in', type: 'checkbox', label: 'Hecha: electroforesis con INMUNOFIJACIÓN en suero', row: 'r2' },
      { name: 'farmacos', id: 'np-es-fa', type: 'checkbox', label: 'Hecha: revisión completa de fármacos, alcohol y tóxicos', row: 'r3' },
      { name: 'enmg', id: 'np-es-en', type: 'checkbox', label: 'Hecho: electroneurograma y electromiograma', row: 'r3' },
      { name: 'mielopatia', id: 'np-es-mi', type: 'checkbox', label: 'Hay mielopatía asociada, cirugía bariátrica previa o suplementos de zinc', row: 'r4' },
      { name: 'familiar', id: 'np-es-fam', type: 'checkbox', label: 'Antecedente familiar, pies cavos o dedos en martillo', row: 'r4' },
      { name: 'seca', id: 'np-es-sec', type: 'checkbox', label: 'Sequedad de boca y de ojos, o artralgias' },
      { type: 'note', text: 'Pedir un panel amplio de entrada encuentra hallazgos irrelevantes y no aumenta el rendimiento diagnóstico. La glucemia, la vitamina B12 y la inmunofijación en suero son las tres que si lo hacen en la polineuropatía distal simétrica, y la sobrecarga oral añade valor porque detecta la prediabetes.' }
    ],
    compute(v) {
      const faltan = [];
      if (!v.glucemia) faltan.push('glucemia en ayunas y hemoglobina glucosilada');
      if (!v.b12) faltan.push('VITAMINA B12, con ácido metilmalónico si queda baja-normal');
      if (!v.inmuno) faltan.push('electroforesis con INMUNOFIJACIÓN en suero');
      const dirigido = [];
      if (v.glucemia && !v.sobrecarga) dirigido.push('SOBRECARGA ORAL de glucosa: detecta la prediabetes, que se asocia a neuropatía y que la glucemia y la hemoglobina glucosilada normales pueden pasar por alto');
      if (v.mielopatia) dirigido.push('COBRE y ceruloplasmina, más vitamina E: el déficit de cobre da mieloneuropatia y es una causa tratable que se olvida tras cirugía bariátrica o con suplementos de zinc');
      if (v.familiar) dirigido.push('ESTUDIO GENÉTICO de neuropatía hereditaria: el antecedente familiar y la deformidad del pie hacen innecesario buena parte del resto del estudio');
      if (v.seca) dirigido.push('anticuerpos anti-Ro y anti-La y valoración de síndrome de Sjogren, causa frecuente de neuropatía de fibra fina y de ganglionopatia');
      return { faltan, dirigido, completo: faltan.length === 0, farmacos: !!v.farmacos, enmg: !!v.enmg };
    },
    format: r => {
      let s = '';
      if (r.completo) {
        s += '<strong style="color:#3f6b52;">Las tres pruebas de mayor rendimiento están hechas.</strong> Glucemia, vitamina B12 e inmunofijación en suero concentran casi todo el rendimiento diagnóstico en la polineuropatía distal simétrica. ';
      } else {
        s += `<strong style="color:#8c3a34;">Faltan pruebas del nucleo del estudio</strong>: ${r.faltan.join('; ')}. La inmunofijación es la que más se olvida y es más sensible que la electroforesis sola: busca una gammapatía monoclonal que puede ser la causa y que abre un estudio hematológico propio. `;
      }
      if (!r.farmacos) {
        s += '<br><strong style="color:#8c3a34;">Falta la revisión de FÁRMACOS y TÓXICOS</strong>, que no cuesta nada y explica muchos casos: quimioterapicos, amiodarona, metronidazol y nitrofurantoína prolongados, linezolid, isoniazida sin piridoxina, alcohol, plomo, arsénico y el ÓXIDO NITROSO inhalado con fines recreativos, que produce un cuadro por déficit funcional de B12 en jóvenes y que solo aparece si se pregunta.';
      }
      if (!r.enmg) {
        s += '<br><strong style="color:#8a6a1f;">Falta el electroneurograma</strong>, que separa lo AXONAL (la gran mayoría, de origen tóxico, metabólico o carencial) de lo DESMIELINIZANTE (mucho menos frecuente pero potencialmente tratable con inmunoterapia). Esa distinción cambia el pronóstico y el tratamiento. Recordar que sale NORMAL en la neuropatía de fibra fina.';
      }
      if (r.dirigido.length) {
        s += `<br><strong style="color:#8a6a1f;">Ampliaciones que sugieren las pistas presentes:</strong><br>${r.dirigido.map(x => '&nbsp;· ' + x).join('<br>')}`;
      } else if (r.completo) {
        s += '<br>Sin pistas que orienten hacia una ampliación concreta. Si el estudio completo resulta negativo, una parte de las polineuropatías se queda como criptogénica, y esa es una conclusion legitima siempre que el nucleo del estudio se haya hecho.';
      }
      return s;
    },
    fragment: r => {
      const base = r.completo
        ? 'nucleo del estudio completo'
        : (r.faltan.length > 1 ? `faltan ${r.faltan.length} pruebas del nucleo` : 'falta 1 prueba del nucleo');
      const amp = r.dirigido.length > 1 ? `, ${r.dirigido.length} ampliaciones sugeridas` : (r.dirigido.length === 1 ? ', 1 ampliación sugerida' : '');
      return base + amp;
    }
  },

  {
    key: 'house-brackmann', title: 'Parálisis facial: grado y manejo', accent: '#8a6a1f',
    subtitle: 'Primero la frente, después el grado y las primeras 72 horas',
    incompleteMsg: 'Indica si la frente esta afectada, el grado de House-Brackmann y las horas de evolución.',
    fields: [
      { name: 'frente', id: 'np-hb-fr', type: 'select', label: 'La FRENTE del lado afectado', options: [
        { v: 'afectada', t: 'Esta afectada: no arruga la frente' },
        { v: 'conservada', t: 'Esta conservada: arruga la frente con normalidad' }
      ] },
      { name: 'grado', id: 'np-hb-gr', type: 'select', label: 'Grado de House-Brackmann', row: 'r1', options: [
        { v: '2', t: 'II · Debilidad leve, cierre ocular completo sin esfuerzo' },
        { v: '3', t: 'III · Asimetría evidente, cierre ocular completo CON esfuerzo' },
        { v: '4', t: 'IV · Asimetría desfigurante, cierre ocular INCOMPLETO' },
        { v: '5', t: 'V · Movimiento apenas perceptible' },
        { v: '6', t: 'VI · Parálisis total' }
      ] },
      { name: 'horas', id: 'np-hb-ho', type: 'number', step: '1', label: 'Horas desde el inicio', placeholder: 'ej. 30', row: 'r1' },
      { name: 'vesiculas', id: 'np-hb-ve', type: 'checkbox', label: 'Vesiculas en el pabellon auricular o en el conducto', row: 'r2' },
      { name: 'bilateral', id: 'np-hb-bi', type: 'checkbox', label: 'Es bilateral, recurrente o hay otros pares craneales afectados', row: 'r2' },
      { name: 'lenta', id: 'np-hb-le', type: 'checkbox', label: 'Se instauro de forma progresiva en más de 3 semanas' },
      { type: 'note', text: 'La escala de House-Brackmann va de I (normal) a VI (parálisis total). Lo que decide el manejo inmediato no es tanto el grado como dos cosas: si la frente esta afectada, que separa lo periférico de lo central, y si el ojo cierra, que determina el riesgo de úlcera corneal.' }
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
      if (r.invalido) return 'Revisa el valor: las horas de evolución deben estar entre 0 y 10000.';
      if (r.central) {
        return '<strong style="color:#8c3a34;">La frente esta CONSERVADA: esto es una parálisis facial CENTRAL, no periférica.</strong> La musculatura de la frente recibe inervación de ambos hemisferios, de modo que una lesión supranuclear la respeta y solo cae la mitad inferior de la cara. <strong>Es un ICTUS hasta que se demuestre lo contrario</strong>: se maneja como código ictus, con neuroimagen urgente y valoración de tratamiento de reperfusión según el tiempo de evolución. Ni corticoide ni antiviral: ese no es el problema. Es la comprobacion de dos segundos que más cambia el destino del paciente en este tema.';
      }
      let s = `<strong style="color:#8a6a1f;">Parálisis facial PERIFÉRICA. ${r.datos.t}.</strong> ${r.datos.d} `;
      s += '<br><strong>1. Corticoide: </strong>';
      if (r.dentro72) s += `con ${r.horas} horas de evolución se esta DENTRO de la ventana de 72 horas. Corticoide oral cuanto antes, que es la intervención con mejor respaldo y la que más mejora la probabilidad de recuperación completa.`;
      else s += `con ${r.horas} horas ya se ha superado la ventana óptima de 72 horas, donde el beneficio esta mejor demostrado. Aun así, en la práctica se suele pautar si el paciente consulta poco después, valorando el balance individual. Lo que no cambia es el resto del manejo.`;
      s += '<br><strong>2. Protección ocular: </strong>';
      if (!r.cierraOjo) s += '<strong style="color:#8c3a34;">el ojo NO cierra por completo en este grado, y ahi esta la única secuela realmente grave del cuadro.</strong> Lágrimas artificiales frecuentes durante el dia, pomada lubricante y OCLUSIÓN del ojo por la noche, más gafas de sol en el exterior. Sin cierre palpebral, la cornea se deseca y se úlcera. Es lo que más se olvida al alta.';
      else s += 'el ojo cierra en este grado, pero conviene pautar lágrimas artificiales igualmente y advertir al paciente de que consulte si nota sequedad, dolor o enrojecimiento ocular.';
      if (r.vesiculas) {
        s += '<br><strong style="color:#8c3a34;">3. Hay VESICULAS: es un síndrome de RAMSAY HUNT</strong>, por reactivación del virus varicela-zóster en el ganglio geniculado. Recupera peor que la parálisis de Bell, y aquí el ANTIVIRAL si esta claramente indicado junto con el corticoide. Explorar también la audición y el equilibrio, porque puede asociar afectación del octavo par.';
      } else {
        s += '<br><strong>3.</strong> Sin vesiculas en el pabellon ni en el conducto. Conviene mirar el conducto con otoscopio y no solo el pabellon, porque las vesiculas pueden estar solo dentro y cambian el tratamiento.';
      }
      if (r.atipica) {
        s += '<br><strong style="color:#8c3a34;">Y hay datos que hacen que esto NO se comporte como una parálisis de Bell';
        if (r.bilateral) s += ' (bilateral, recurrente o con otros pares afectados)';
        if (r.lenta) s += ' (instauración progresiva en más de 3 semanas, cuando la de Bell alcanza su máximo en 72 horas)';
        s += '.</strong> Corresponde neuroimagen y estudio dirigido: síndrome de Guillain-Barré, enfermedad de Lyme, sarcoidosis, VIH, linfoma, tumor de parótida o del angulo pontocerebeloso.';
      }
      s += '<br><span style="opacity:.75;">Revisión a las 2 o 3 semanas y a los 3 meses. Si NO ha empezado a mejorar a los 3 o 4 meses, hay que replantear el diagnóstico y pedir imagen.</span>';
      return s;
    },
    fragment: r => {
      if (r.invalido) return 'valor no valido';
      if (r.central) return 'parálisis CENTRAL: manejar como ictus';
      return `periférica, grado ${r.g}${r.cierraOjo ? '' : ' (el ojo no cierra)'}${r.vesiculas ? ', Ramsay Hunt' : ''}`;
    }
  },

  {
    key: 'ortostatismo', title: 'Hipotensión ortostática y su origen', accent: '#3d5a73',
    subtitle: 'El dato no esta en la presión, esta en el pulso',
    incompleteMsg: 'Introduce la presión arterial y la frecuencia cardiaca en decúbito y a los 3 minutos de pie.',
    fields: [
      { name: 'pasD', id: 'np-or-pasd', type: 'number', step: '1', label: 'Presión sistólica EN DECÚBITO (mmHg)', placeholder: 'ej. 138', row: 'r1' },
      { name: 'padD', id: 'np-or-padd', type: 'number', step: '1', label: 'Presión diastólica en decúbito (mmHg)', placeholder: 'ej. 78', row: 'r1' },
      { name: 'fcD', id: 'np-or-fcd', type: 'number', step: '1', label: 'Frecuencia cardiaca en decúbito (lpm)', placeholder: 'ej. 68', row: 'r2' },
      { name: 'pasP', id: 'np-or-pasp', type: 'number', step: '1', label: 'Presión sistólica DE PIE a los 3 minutos (mmHg)', placeholder: 'ej. 106', row: 'r2' },
      { name: 'padP', id: 'np-or-padp', type: 'number', step: '1', label: 'Presión diastólica de pie (mmHg)', placeholder: 'ej. 66', row: 'r3' },
      { name: 'fcP', id: 'np-or-fcp', type: 'number', step: '1', label: 'Frecuencia cardiaca de pie (lpm)', placeholder: 'ej. 74', row: 'r3' },
      { name: 'farmacos', id: 'np-or-fa', type: 'checkbox', label: 'Toma antihipertensivos, diuréticos, alfabloqueantes, antidepresivos o agonistas dopaminérgicos' },
      { type: 'note', text: 'La medición se hace tras 5 minutos en decúbito y a los 3 minutos de bipedestación ACTIVA. Lo que separa la hipotensión ortostática neurogénica de la que no lo es no es la magnitud de la caída sino la respuesta del PULSO: si el reflejo simpático esta intacto, la frecuencia cardiaca sube para compensar; si esta dañado, no lo hace.' }
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
      if (r.invalido) return 'Revisa los valores: sistólica de 40 a 300, diastólica de 20 a 200 y frecuencia cardiaca de 20 a 250.';
      let s = `<strong>Caída de ${r.dPas} mmHg en la sistólica y de ${r.dPad} en la diastólica, con un aumento de ${r.dFc} latidos por minuto.</strong> `;
      if (!r.ho) {
        s += '<span style="color:#3f6b52;">NO se cumple criterio de hipotensión ortostática</span>, que exige una caída de 20 mmHg o más en la sistólica o de 10 o más en la diastólica a los 3 minutos. ';
        if (r.pots) {
          s += `<br><strong style="color:#3d5a73;">Pero la frecuencia cardiaca ha subido ${r.dFc} latidos SIN caída tensional que cumpla criterio.</strong> Eso apunta a un SÍNDROME DE TAQUICARDIA POSTURAL, que es una entidad distinta: exige un aumento de 30 latidos o más en los 10 primeros minutos de bipedestación y síntomas de al menos 3 meses. Antes de etiquetarlo hay que descartar deshidratación, anemia, hipertiroidismo, feocromocitoma, fármacos y desacondicionamiento. El tratamiento es sal, líquidos, medias de compresión y EJERCICIO PROGRESIVO, no reposo, que empeora el cuadro.`;
        } else {
          s += 'Si el paciente tiene síntomas ortostáticos claros, conviene repetir la medición en otro momento del dia, preferentemente por la MAÑANA y en ayunas, o tras una comida, que es cuando la hipotensión postprandial se hace evidente.';
        }
        return s;
      }
      s += '<strong style="color:#8c3a34;">Cumple criterio de HIPOTENSIÓN ORTOSTÁTICA.</strong> ';
      if (r.cociente != null) {
        s += `<br>Cociente entre el aumento de la frecuencia y la caída de la sistólica: <strong>${r.cociente.toFixed(2)}</strong> latidos por cada mmHg. `;
        if (r.neurogenica) {
          s += '<strong style="color:#8c3a34;">Por debajo de 0.5: apunta a origen NEUROGENICO.</strong> El arco reflejo simpático no esta compensando la caída, lo que orienta a fallo autonómico: enfermedad de Parkinson y otras sinucleinopatias, atrofia multisistémica, fallo autonómico puro, neuropatía diabética o amiloidotica. Corresponde valoración neurológica y búsqueda de otros signos disautonomicos.';
        } else {
          s += '<strong style="color:#3f6b52;">Por encima de 0.5: el reflejo esta compensando</strong>, lo que apunta a una causa NO neurogénica: hipovolemia, hemorragia, anemia, insuficiencia suprarrenal o, muy a menudo, un fármaco. Buscar esa causa rinde mucho más que iniciar un tratamiento sintomático.';
        }
      }
      if (r.farmacos) {
        s += '<br><strong style="color:#8a6a1f;">El paciente toma fármacos que pueden producirla.</strong> Antes de añadir nada, hay que REVISAR Y AJUSTAR esa medicación: es la causa más frecuente y la más fácil de corregir, y anteponer midodrina o fludrocortisona a esa revisión es un error habitual.';
      }
      s += '<br><strong>Manejo, y en este orden:</strong> retirar o ajustar los fármacos implicados; aumentar sal y agua; medias de compresión hasta la cintura; ELEVAR EL CABECERO de la cama por la noche, que reduce la natriuresis nocturna y mejora la hipotensión de la mañana; levantarse en dos tiempos; y maniobras de contrapresion. Solo si eso no basta, midodrina o fludrocortisona.';
      if (r.pasD >= 140) {
        s += `<br><strong style="color:#8c3a34;">Ojo: la sistólica en decúbito es de ${r.pasD} mmHg.</strong> La combinación de hipertensión acostado con hipotensión de pie es característica del fallo autonómico y es un problema terapéutico real, porque los fármacos que corrigen una empeoran la otra. Por eso no se administran en las horas previas a acostarse y se eleva el cabecero.`;
      }
      return s;
    },
    fragment: r => {
      if (r.invalido) return 'valores no validos';
      if (!r.ho) return r.pots ? `sin hipotensión ortostática, aumento de ${r.dFc} lpm: valorar taquicardia postural` : 'sin criterio de hipotensión ortostática';
      return `hipotensión ortostática, origen ${r.neurogenica ? 'neurogenico' : 'no neurogenico'}`;
    }
  }
];
