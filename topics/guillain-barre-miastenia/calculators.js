// topics/guillain-barre-miastenia/calculators.js
// 4 herramientas:
// - egris: prediccion de insuficiencia respiratoria en el sindrome de Guillain-Barre al ingreso.
// - regla-20-30-40: umbrales de funcion respiratoria a pie de cama en la debilidad neuromuscular,
//   que es lo que decide la intubacion antes de que la gasometria se altere.
// - mg-adl: impacto de la miastenia sobre la vida diaria y seguimiento de la respuesta.
// - crisis-miastenica: separa la crisis miastenica de la colinergica y ordena el manejo.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

const MGADL_ITEMS = [
  ['habla', 'Habla', ['0 · Normal', '1 · Habla nasal intermitente o farfulla', '2 · Habla nasal constante o farfulla', '3 · Difícil de entender']],
  ['masticar', 'Masticacion', ['0 · Normal', '1 · Se fatiga con comida sólida', '2 · Se fatiga con comida blanda', '3 · Necesita sonda']],
  ['tragar', 'Deglucion', ['0 · Normal', '1 · Se atraganta raras veces', '2 · Se atraganta a menudo y cambia la dieta', '3 · Necesita sonda']],
  ['respirar', 'Respiracion', ['0 · Normal', '1 · Disnea con el esfuerzo', '2 · Disnea en reposo', '3 · Necesita ventilación']],
  ['higiene', 'Lavarse los dientes o peinarse', ['0 · Normal', '1 · Esfuerzo extra pero sin descansos', '2 · Necesita descansos', '3 · No puede hacerlo solo']],
  ['silla', 'Levantarse de una silla', ['0 · Normal', '1 · Se apoya levemente con los brazos', '2 · Se apoya con fuerza en los brazos', '3 · No puede levantarse solo']],
  ['diplopia', 'Visión doble', ['0 · No tiene', '1 · Aparece pero no a diario', '2 · Diaria pero no constante', '3 · Constante']],
  ['ptosis', 'Caída del párpado', ['0 · No tiene', '1 · Aparece pero no a diario', '2 · Diaria pero no constante', '3 · Constante']]
];

const camposMgAdl = MGADL_ITEMS.map(([name, label, opts], i) => ({
  name, id: 'gm-adl-' + name, type: 'select', label,
  options: opts.map((t, v) => ({ v: String(v), t })),
  row: 'r' + Math.floor(i / 2)
}));

export const calculators = [
  {
    key: 'egris', title: 'EGRIS: riesgo respiratorio en Guillain-Barré', accent: '#8c3a5c',
    subtitle: 'Tres variables del ingreso que predicen la necesidad de ventilación',
    incompleteMsg: 'Introduce los días hasta el ingreso y la suma de fuerza, y responde sobre la afectación facial o bulbar.',
    fields: [
      { name: 'dias', id: 'gm-eg-d', type: 'number', step: '1', label: 'Días entre el inicio de la debilidad y el ingreso', placeholder: 'ej. 3', row: 'r1' },
      { name: 'bulbar', id: 'gm-eg-b', type: 'select', label: 'Debilidad facial o bulbar al ingreso', row: 'r1', options: [
        { v: 'no', t: 'Ausente' },
        { v: 'si', t: 'Presente' }
      ] },
      { name: 'mrc', id: 'gm-eg-m', type: 'number', step: '1', label: 'Suma de fuerza del Medical Research Council (0 a 60)', placeholder: 'ej. 44' },
      { type: 'note', text: 'La suma del Medical Research Council se obtiene puntuando de 0 a 5 la fuerza de seis grupos musculares en ambos lados (abducción del hombro, flexión del codo, extensión de la muñeca, flexión de la cadera, extensión de la rodilla y dorsiflexión del pie), con un máximo de 60. La escala predice la necesidad de ventilación mecánica y NO sustituye a la vigilancia respiratoria seriada.' }
    ],
    compute(v) {
      if (v.dias == null || v.mrc == null) return null;
      if (!(v.dias >= 0 && v.dias <= 100)) return { invalido: true };
      if (!(v.mrc >= 0 && v.mrc <= 60)) return { invalido: true };
      const det = [];
      let p = 0;
      let pd;
      if (v.dias <= 3) pd = 2; else if (v.dias <= 7) pd = 1; else pd = 0;
      if (pd) { p += pd; det.push(`instauración en ${v.dias} días (+${pd})`); }
      const pb = v.bulbar === 'si' ? 1 : 0;
      if (pb) { p += pb; det.push('debilidad facial o bulbar (+1)'); }
      let pm;
      if (v.mrc <= 20) pm = 4; else if (v.mrc <= 30) pm = 3; else if (v.mrc <= 40) pm = 2; else if (v.mrc <= 50) pm = 1; else pm = 0;
      if (pm) { p += pm; det.push(`suma de fuerza de ${v.mrc} (+${pm})`); }
      let riesgo;
      if (p <= 2) riesgo = 'BAJO';
      else if (p <= 4) riesgo = 'INTERMEDIO';
      else riesgo = 'ALTO';
      return { p, riesgo, det, bulbar: v.bulbar === 'si', mrc: v.mrc, dias: v.dias };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: días de 0 a 100 y suma de fuerza de 0 a 60.';
      let s = `<strong>${r.p} de 7 puntos: riesgo ${r.riesgo}</strong> de necesitar ventilación mecánica. `;
      if (r.riesgo === 'ALTO') s += '<span style="color:#8c3a34;">Riesgo alto.</span> Corresponde ingreso en un área con capacidad de intubación inmediata y vigilancia respiratoria muy estrecha desde el primer momento.';
      else if (r.riesgo === 'INTERMEDIO') s += '<span style="color:#8a6a1f;">Riesgo intermedio.</span> Ingreso en planta con vigilancia respiratoria seriada y umbral bajo para trasladar a una unidad de críticos si la tendencia empeora.';
      else s += '<span style="color:#3f6b52;">Riesgo bajo</span> según la escala. Eso NO autoriza a relajar la vigilancia: la escala predice al ingreso, pero la progresión del síndrome es impredecible y hay que seguir midiendo la capacidad vital.';
      if (r.det.length) s += `<br><span style="opacity:.75;">Aportan: ${r.det.join(', ')}.</span>`;
      if (r.bulbar) s += '<br><strong style="color:#8c3a34;">Hay debilidad facial o bulbar.</strong> Además de puntuar en la escala, tiene valor propio: la incapacidad para manejar las secreciones indica intubación aunque los numeros respiratorios todavía no la cumplan, porque el riesgo aquí es la ASPIRACIÓN y no la fatiga.';
      s += '<br><span style="opacity:.75;">Esta escala NO sustituye a la vigilancia seriada: capacidad vital y presiones máximas cada 4 a 6 horas durante la fase de progresión, valorando la TENDENCIA por encima del valor aislado. Y monitorización electrocardiográfica, porque la disautonomía es la otra causa de muerte.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `EGRIS ${r.p}/7, riesgo ${r.riesgo.toLowerCase()}`
  },

  {
    key: 'regla-20-30-40', title: 'Regla de 20, 30 y 40', accent: '#8c3a34',
    subtitle: 'Cuando intubar en la debilidad neuromuscular, antes de que la gasometría se altere',
    incompleteMsg: 'Introduce la capacidad vital y el peso. Añade las presiones máximas si se han medido.',
    fields: [
      { name: 'cv', id: 'gm-rg-cv', type: 'number', step: '10', label: 'Capacidad vital medida (mL)', placeholder: 'ej. 1500', row: 'r1' },
      { name: 'peso', id: 'gm-rg-p', type: 'number', step: '0.5', label: 'Peso (kg)', placeholder: 'ej. 70', row: 'r1' },
      { name: 'pim', id: 'gm-rg-pim', type: 'number', step: '1', required: false, label: 'Presión inspiratoria máxima, valor absoluto (cmH2O)', placeholder: 'ej. 28', row: 'r2' },
      { name: 'pem', id: 'gm-rg-pem', type: 'number', step: '1', required: false, label: 'Presión espiratoria máxima (cmH2O)', placeholder: 'ej. 35', row: 'r2' },
      { name: 'bulbar', id: 'gm-rg-b', type: 'checkbox', label: 'Debilidad bulbar: no maneja sus propias secreciones o se atraganta', row: 'r3' },
      { name: 'clinica', id: 'gm-rg-c', type: 'checkbox', label: 'Signos de cabecera: no cuenta hasta 20 de corrido, habla entrecortada, usa musculatura accesoria o respiración paradójica', row: 'r3' },
      { name: 'descenso', id: 'gm-rg-de', type: 'checkbox', label: 'La capacidad vital esta descendiendo respecto a la medición previa' },
      { type: 'note', text: 'La gasometría llega TARDE en la debilidad neuromuscular: la hipercapnia aparece cuando el paciente ya esta agotado y a punto de claudicar. Por eso la decisión se toma con la capacidad vital a pie de cama y con los signos clínicos, no esperando a que los gases se alteren. Y la TENDENCIA importa más que cualquier valor aislado.' }
    ],
    compute(v) {
      if (v.cv == null || v.peso == null) return null;
      if (!(v.cv > 50 && v.cv <= 8000)) return { invalido: true };
      if (!(v.peso > 20 && v.peso <= 250)) return { invalido: true };
      if (v.pim != null && !(v.pim >= 0 && v.pim <= 200)) return { invalido: true };
      if (v.pem != null && !(v.pem >= 0 && v.pem <= 250)) return { invalido: true };
      const cvKg = v.cv / v.peso;
      const criterios = [];
      if (cvKg < 20) criterios.push(`capacidad vital de ${cvKg.toFixed(1)} mL/kg (menor de 20)`);
      if (v.pim != null && v.pim < 30) criterios.push(`presión inspiratoria máxima de ${v.pim} cmH2O (menor de 30)`);
      if (v.pem != null && v.pem < 40) criterios.push(`presión espiratoria máxima de ${v.pem} cmH2O (menor de 40)`);
      const bulbar = !!v.bulbar;
      const clinica = !!v.clinica;
      const descenso = !!v.descenso;
      const indicado = criterios.length > 0 || bulbar;
      return { cvKg, criterios, bulbar, clinica, descenso, indicado, faltanPresiones: v.pim == null || v.pem == null };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: capacidad vital de 50 a 8000 mL, peso de 20 a 250 kg y presiones de 0 a 200 cmH2O.';
      let s = `<strong>Capacidad vital de ${r.cvKg.toFixed(1)} mL/kg.</strong> `;
      if (r.bulbar) {
        s += '<strong style="color:#8c3a34;">Hay DEBILIDAD BULBAR: indicación de intubación aunque los numeros no la cumplan.</strong> El riesgo aquí no es la fatiga respiratoria sino la ASPIRACIÓN, y por eso este criterio adelanta la decisión. La ventilación no invasiva no protege la via aérea y no es la respuesta en este escenario. ';
      }
      if (r.criterios.length) {
        s += `<strong style="color:#8c3a34;">Se cumple${r.criterios.length > 1 ? 'n' : ''} ${r.criterios.length} criterio${r.criterios.length > 1 ? 's' : ''} de la regla de 20, 30 y 40</strong>: ${r.criterios.join('; ')}. Corresponde ingreso en unidad de críticos y valorar intubación electiva, que siempre es mejor que la urgente en un paciente que claudica. `;
      } else if (!r.bulbar) {
        s += '<span style="color:#3f6b52;">No se cumple ninguno de los criterios numéricos por ahora.</span> ';
      }
      if (r.clinica) {
        s += '<br><strong style="color:#8c3a34;">Y hay signos clínicos de claudicación</strong>, que valen tanto como los numeros y están siempre disponibles: no contar hasta 20 de corrido, habla entrecortada, uso de musculatura accesoria o respiración paradójica. Con esos signos no se espera a repetir la espirometría.';
      }
      if (r.descenso) {
        s += '<br><strong style="color:#8a6a1f;">La capacidad vital esta DESCENDIENDO.</strong> La tendencia importa más que el valor absoluto: una caída rápida obliga a actuar aunque la cifra actual todavía parezca aceptable. Hay que acortar el intervalo entre mediciones y avisar a la unidad de críticos.';
      }
      if (r.faltanPresiones) {
        s += '<br><span style="opacity:.8;">Falta alguna de las presiones máximas. Conviene medir las tres, porque la capacidad vital sola puede sobreestimar la reserva en el paciente que compensa con la musculatura accesoria.</span>';
      }
      if (!r.indicado) {
        s += '<br>Mantener la vigilancia con mediciones cada 4 a 6 horas durante la fase de progresión, y no espaciarlas porque el paciente parezca estable.';
      }
      s += '<br><span style="opacity:.75;">Y en ningún caso esperar a la gasometría: la hipercapnia es un signo tardío. Si hay que intubar, no usar succinilcolina en estos pacientes por el riesgo de hiperpotasemia grave.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.indicado ? `capacidad vital ${r.cvKg.toFixed(1)} mL/kg: criterios de intubación` : `capacidad vital ${r.cvKg.toFixed(1)} mL/kg: seguir vigilando`)
  },

  {
    key: 'mg-adl', title: 'Escala MG-ADL', accent: '#3d5a73',
    subtitle: 'Impacto de la miastenia sobre la vida diaria y respuesta al tratamiento',
    incompleteMsg: 'Puntúa los ocho ítems de 0 a 3 según como haya estado el paciente en la última semana.',
    fields: [
      { type: 'note', text: 'Se pregunta al paciente por como ha estado en la ÚLTIMA SEMANA, no por como esta en ese momento. Es la escala más usada para seguir la respuesta al tratamiento, y un cambio de 2 puntos o más se considera clínicamente relevante. Conviene recordar que el título de anticuerpos NO sirve para este fin, porque no se correlaciona con la gravedad.' },
      ...camposMgAdl
    ],
    compute(v) {
      const claves = MGADL_ITEMS.map(x => x[0]);
      const vals = claves.map(k => (v[k] == null || v[k] === '' ? null : parseInt(v[k], 10)));
      if (vals.some(x => x == null || isNaN(x))) return null;
      const total = vals.reduce((a, b) => a + b, 0);
      const bulbar = vals[0] + vals[1] + vals[2];
      const respirar = vals[3];
      const ocular = vals[6] + vals[7];
      const generalizada = vals[0] + vals[1] + vals[2] + vals[3] + vals[4] + vals[5];
      let grado;
      if (total === 0) grado = 'SIN SÍNTOMAS';
      else if (total <= 5) grado = 'LEVE';
      else if (total <= 9) grado = 'MODERADO';
      else grado = 'GRAVE';
      return { total, grado, bulbar, respirar, ocular, generalizada, soloOcular: generalizada === 0 && ocular > 0 };
    },
    format: r => {
      let s = `<strong>${r.total} de 24 puntos: impacto ${r.grado}.</strong> `;
      if (r.total === 0) s += '<span style="color:#3f6b52;">El paciente refiere estar sin síntomas.</span> Es el objetivo del tratamiento: la meta no es normalizar los anticuerpos sino que el paciente este asintomático o con síntomas mínimos y sin efectos adversos limitantes.';
      else if (r.grado === 'LEVE') s += '<span style="color:#3f6b52;">Impacto leve.</span> Conviene comprobar si es un buen control estable o si se ha alcanzado a costa de efectos adversos del tratamiento, sobre todo del corticoide.';
      else if (r.grado === 'MODERADO') s += '<span style="color:#8a6a1f;">Impacto moderado.</span> Justifica revisar el tratamiento: adherencia, dosis, y si procede añadir o cambiar de ahorrador. Antes de escalar, descartar un desencadenante como una infección o un fármaco nuevo.';
      else s += '<span style="color:#8c3a34;">Impacto grave.</span> Enfermedad mal controlada: revisar el tratamiento de fondo y valorar escalada terapéutica, incluida la remisión a una unidad con experiencia.';
      if (r.respirar >= 2) {
        s += `<br><strong style="color:#8c3a34;">El ítem de RESPIRACIÓN puntúa ${r.respirar}.</strong> La disnea en reposo referida por el paciente es un dato de alarma que no se puede diluir en la puntuación total: corresponde medir capacidad vital y presiones máximas de inmediato y valorar si esto es ya una crisis en curso.`;
      }
      if (r.bulbar >= 4) {
        s += `<br><strong style="color:#8c3a34;">Predominio BULBAR (${r.bulbar} de 9 puntos entre habla, masticación y deglución).</strong> Es el perfil de mayor riesgo de crisis y de aspiración, y el que más adelanta la decisión de intubar si el cuadro empeora. Conviene valorar formalmente la deglución.`;
      }
      if (r.soloOcular) {
        s += '<br><span style="opacity:.8;">Toda la puntuación procede de los ítems oculares. En la forma puramente ocular hay que vigilar la generalización durante los dos primeros años, que es cuando ocurre en la mayoría de los que generalizan, y recordar que la timectomia no esta indicada en esta forma.</span>';
      }
      s += '<br><span style="opacity:.75;">Un cambio de 2 puntos o más entre visitas se considera clínicamente relevante. Hay que usar siempre el mismo instrumento para poder comparar.</span>';
      return s;
    },
    fragment: r => `MG-ADL ${r.total}/24, impacto ${r.grado.toLowerCase()}`
  },

  {
    key: 'crisis-miastenica', title: 'Crisis miastenica o colinérgica?', accent: '#8a6a1f',
    subtitle: 'Separarlas, y sobre todo no retrasar el soporte respiratorio',
    incompleteMsg: 'Marca los datos presentes. Si no hay ninguno de los muscarínicos, el resultado también es informativo.',
    fields: [
      { name: 'muscarinicos', id: 'gm-cr-mu', type: 'checkbox', label: 'Síntomas muscarínicos: diarrea, cólicos, sudoración, lagrimeo, sialorrea o broncorrea', row: 'r1' },
      { name: 'miosis', id: 'gm-cr-mi', type: 'checkbox', label: 'MIOSIS', row: 'r1' },
      { name: 'fasciculaciones', id: 'gm-cr-fa', type: 'checkbox', label: 'Fasciculaciones musculares', row: 'r2' },
      { name: 'bradicardia', id: 'gm-cr-br', type: 'checkbox', label: 'Bradicardia', row: 'r2' },
      { name: 'dosisAlta', id: 'gm-cr-do', type: 'checkbox', label: 'Ha aumentado la dosis de piridostigmina por su cuenta en los últimos días', row: 'r3' },
      { name: 'desencadenante', id: 'gm-cr-de', type: 'select', label: 'Hay un desencadenante identificable', row: 'r3', options: [
        { v: 'ninguno', t: 'No se ha identificado ninguno' },
        { v: 'infeccion', t: 'Infección intercurrente' },
        { v: 'farmaco', t: 'Fármaco nuevo de la lista de contraindicados' },
        { v: 'cirugia', t: 'Cirugía o procedimiento reciente' },
        { v: 'retirada', t: 'Reducción o retirada rápida de la inmunosupresión' }
      ] },
      { name: 'respiratorio', id: 'gm-cr-re', type: 'checkbox', label: 'Hay compromiso respiratorio o debilidad bulbar significativa' },
      { type: 'note', text: 'La crisis colinérgica es hoy RARA, porque las dosis de anticolinesterasico que se usan son mucho menores que hace décadas. Ante la duda, la conducta segura es la misma en los dos casos: asegurar la respiración primero y suspender la piridostigmina después, que es además lo que se hace durante la ventilación mecánica.' }
    ],
    compute(v) {
      const colinergicos = [];
      if (v.muscarinicos) colinergicos.push('síntomas muscarínicos');
      if (v.miosis) colinergicos.push('miosis');
      if (v.fasciculaciones) colinergicos.push('fasciculaciones');
      if (v.bradicardia) colinergicos.push('bradicardia');
      if (v.dosisAlta) colinergicos.push('aumento reciente de la dosis por el paciente');
      const n = colinergicos.length;
      let tipo;
      if (n >= 3) tipo = 'colinergica';
      else if (n >= 1) tipo = 'dudosa';
      else tipo = 'miastenica';
      return { tipo, colinergicos, n, desencadenante: v.desencadenante || 'ninguno', respiratorio: !!v.respiratorio };
    },
    format: r => {
      const desenc = {
        infeccion: 'una INFECCIÓN intercurrente, que es el desencadenante más frecuente: hay que buscarla y tratarla, eligiendo el antibiótico con cuidado porque las fluoroquinolonas, los macrolidos y los aminoglucósidos pueden agravar la crisis',
        farmaco: 'un FÁRMACO de la lista de contraindicados: hay que retirarlo de inmediato y dejarlo registrado, porque una proporción relevante de las crisis es iatrogénica y por tanto evitable',
        cirugia: 'una cirugía o procedimiento reciente, situación de riesgo alto que exige vigilancia respiratoria prolongada en el posoperatorio',
        retirada: 'la reducción o retirada rápida de la inmunosupresión, que es un desencadenante clásico y que obliga a bajar el corticoide mucho más despacio en el futuro',
        ninguno: null
      }[r.desencadenante];

      let s = '';
      if (r.respiratorio) {
        s += '<strong style="color:#8c3a34;">ANTES DE NADA: hay compromiso respiratorio o debilidad bulbar.</strong> Medir capacidad vital y presiones máximas de inmediato, aplicar la regla de 20, 30 y 40 y trasladar a una unidad de críticos. Con debilidad bulbar que impide manejar las secreciones, la indicación de intubar no espera a los numeros. Distinguir el tipo de crisis viene DESPUÉS de asegurar la via aérea.<br>';
      }
      if (r.tipo === 'colinergica') {
        s += `<strong style="color:#5a6b2e;">El perfil apunta a CRISIS COLINÉRGICA</strong> (${r.colinergicos.join(', ')}). Es hoy una situación rara, porque las dosis de anticolinesterasico son menores que hace décadas. Conducta: SUSPENDER la piridostigmina y observar. Si el paciente mejora, se confirma; si empeora, era miastenica. En ambos casos el soporte respiratorio es la prioridad y no cambia.`;
      } else if (r.tipo === 'dudosa') {
        s += `<strong style="color:#8a6a1f;">Perfil DUDOSO</strong>: hay ${r.n} dato compatible con exceso colinérgico (${r.colinergicos.join(', ')}), pero no es suficiente para afirmarlo. La conducta segura es la misma en la duda: asegurar la respiración y SUSPENDER la piridostigmina, que además es lo que se hace durante la ventilación mecánica porque aumenta las secreciones y ya no aporta beneficio.`;
      } else {
        s += '<strong style="color:#8c3a5c;">El perfil apunta a CRISIS MIASTENICA</strong>: no hay datos de exceso colinérgico. Tratamiento de acción rápida con INMUNOGLOBULINAS INTRAVENOSAS o PLASMAFÉRESIS, soporte ventilatorio según la función respiratoria, y tratamiento del desencadenante.';
      }
      if (desenc) {
        s += `<br><strong style="color:#8a6a1f;">Desencadenante identificado:</strong> ${desenc}.`;
      } else {
        s += '<br><strong style="color:#8a6a1f;">No se ha identificado desencadenante.</strong> Merece la pena buscarlo de forma activa, porque encontrarlo cambia el tratamiento y previene la siguiente crisis: infección (lo más frecuente), fármaco nuevo, cirugía reciente, embarazo o retirada rápida de la inmunosupresión.';
      }
      s += '<br><span style="opacity:.75;">Y al alta: revisar toda la medicación, documentar el desencadenante, reforzar la educación sobre fármacos contraindicados y entregar al paciente la lista escrita y una tarjeta identificativa.</span>';
      return s;
    },
    fragment: r => {
      const m = { colinergica: 'perfil de crisis colinérgica', dudosa: 'perfil dudoso: suspender piridostigmina y observar', miastenica: 'perfil de crisis miastenica' };
      return m[r.tipo] + (r.respiratorio ? ' + compromiso respiratorio' : '');
    }
  }
];
