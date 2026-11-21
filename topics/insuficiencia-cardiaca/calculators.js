// topics/insuficiencia-cardiaca/calculators.js - Las seis herramientas del tema de insuficiencia
// cardiaca. Fuente de todas: ESC 2021 de IC (McDonagh, Eur Heart J 2021;42(36):3599-3726), con dos
// anadidos de la AHA/ACC/HFSA 2022 (Heidenreich, Circulation 2022;145:e895) que la ESC 2021 no
// trae: la FEVI mejorada como subgrupo de la reducida y los iSGLT2 en la FEVI levemente reducida y
// en la preservada (2a B-R). La Definicion Universal 2026 (Walsh) solo aporta el aumento de 10
// puntos que define la FEVI mejorada y el estadio B.
//
// LO QUE NINGUNA HACE: inventar un punto de corte que la fuente no da.
//   - `marcadoresFevp` cuenta los marcadores de la Tabla 9 de la ESC y NO declara un minimo: la
//     guia dice "the greater the number of abnormalities present, the higher the likelihood of
//     HFpEF" y nada mas. Las escalas H2FPEF y HFA-PEFF existen, la propia guia dice que su
//     rendimiento ha variado, y no se reproducen aqui.
//   - `respuestaDiuretica` respeta que los umbrales son INTERVALOS (sodio 50 a 70 mEq/L, diuresis
//     100 a 150 mL/h): por encima del intervalo es satisfactoria, por debajo es insuficiente, y
//     dentro se dice que la guia da un intervalo y no un numero. El algoritmo de la Figura 13 es,
//     segun la propia guia, opinion de expertos.
//   - La dosis inicial del diuretico es "1-2 times the daily oral dose" (Figura 13), sin repartir:
//     se da como total diario, en 2 o 3 bolos o en infusion, porque la guia desaconseja el bolo
//     unico diario.

const C_ROJO = '#8c3a34';
const C_AMBAR = '#8a6a2e';
const C_VERDE = '#3f6b52';
const C_AZUL = '#3d5a73';

const lista = xs => xs.map(x => '&bull; ' + x).join('<br>');

export const calculators = [
  {
    key: 'fenotipoFevi', title: 'Fenotipo por FEVI: reducida, levemente reducida, preservada o mejorada', accent: '#a3364a',
    subtitle: 'ESC 2021, AHA 2022 y Definición Universal 2026',
    incompleteMsg: 'Escribe la FEVI actual.',
    fields: [
      { name: 'fevi', id: 'icar-fe-fevi', type: 'number', step: '1', label: 'FEVI actual (%)', placeholder: 'ej. 35', row: 'r1' },
      { name: 'previa', id: 'icar-fe-prev', type: 'number', step: '1', label: 'FEVI previa más baja, si se conoce (%)', placeholder: 'ej. 30', row: 'r1', required: false },
      { name: 'sintomas', id: 'icar-fe-sin', type: 'checkbox', label: 'Tiene o ha tenido síntomas o signos de insuficiencia cardiaca' },
      { name: 'llenado', id: 'icar-fe-lle', type: 'checkbox', label: 'Hay evidencia objetiva de presiones de llenado elevadas (péptidos elevados o marcadores ecocardiográficos)' },
      { type: 'note', text: 'La FEVI es una variable continua y su medida varía entre exploradores; la Definición Universal de 2026 fija el límite inferior de la normalidad en 53% en la mujer y 52% en el varón.' }
    ],
    compute(v) {
      if (v.fevi === null || v.fevi === undefined) return null;
      if (v.fevi < 5 || v.fevi > 90 || (v.previa !== null && v.previa !== undefined && (v.previa < 5 || v.previa > 90))) {
        return { error: 'Revisa los valores: la FEVI se expresa en porcentaje, entre 5 y 90.' };
      }
      const previa = (v.previa === null || v.previa === undefined) ? null : v.previa;
      const notas = [];
      let fenotipo, tratamiento;
      if (previa !== null && previa <= 40 && v.fevi > 40) {
        fenotipo = 'FEVI mejorada';
        tratamiento = 'Es un subgrupo de la FEVI reducida (AHA 2022): el tratamiento de la FEVI reducida se MANTIENE aunque el paciente esté asintomático (1 B-R). Retirarlo hizo recaer al 40% en 6 meses en el ensayo TRED-HF.';
        if (v.fevi - previa < 10) notas.push('La subida es de menos de 10 puntos. La Definición Universal de 2026 define la FEVI mejorada como un aumento de 10 puntos hasta más de 40%: con menos, puede ser variabilidad de la medida.');
        if (v.fevi >= 50) notas.push('Aunque la FEVI actual sea de 50% o más, NO es una FEVI preservada: la ESC la llama insuficiencia cardiaca recuperada o con FEVI mejorada, y recomienda seguir el tratamiento.');
      } else if (v.fevi <= 40) {
        fenotipo = 'FEVI reducida';
        tratamiento = 'Los cuatro pilares, los cuatro I A: IECA (o sacubitril/valsartán, que lo sustituye, I B), betabloqueador, ARM e iSGLT2, más diurético de asa si hay congestión. Tras 3 meses de tratamiento óptimo, si la FEVI sigue en 35% o menos, valorar desfibrilador y resincronización.';
      } else if (v.fevi <= 49) {
        fenotipo = 'FEVI levemente reducida';
        tratamiento = 'Diuréticos para la congestión (ESC, I C). iSGLT2 (AHA, 2a B-R). IECA, ARA-II, betabloqueador, ARM o sacubitril/valsartán pueden considerarse (ESC IIb C; AHA 2b B-NR), sobre todo con la FEVI en la parte baja de la franja. Repetir la FEVI para conocer la trayectoria.';
      } else {
        fenotipo = v.llenado ? 'FEVI preservada' : 'FEVI de 50% o más sin la evidencia que exige la FEVI preservada';
        tratamiento = v.llenado
          ? 'Diuréticos para la congestión y tratamiento de la causa y de las comorbilidades (ESC, I C los dos). La AHA 2022 añade: control de la presión arterial (1 C-LD), iSGLT2 (2a B-R), manejo de la fibrilación auricular (2a C-EO), y ARM, ARA-II o sacubitril/valsartán en pacientes seleccionados (2b B-R).'
          : 'El diagnóstico de FEVI preservada exige los tres elementos: síntomas o signos, FEVI de 50% o más y evidencia objetiva de presiones de llenado elevadas (péptidos o marcadores ecocardiográficos de la Tabla 9). Busca esa evidencia antes de etiquetarla.';
        if (v.fevi > 65) notas.push('Una FEVI por encima de 65 a 70% debe hacer buscar amiloidosis cardiaca o miocardiopatía hipertrófica, en las que la FEVI "supranormal" refleja un ventrículo pequeño.');
      }
      if (!v.sintomas) notas.unshift('Sin síntomas ni signos, actuales o previos, NO es insuficiencia cardiaca (estadio C). Con alteración estructural o funcional, o con péptidos o troponina elevados, sería estadio B, preinsuficiencia.');
      return { fenotipo, tratamiento, notas, fevi: v.fevi, previa };
    },
    format(r) {
      if (r.error) return `<span style="color:${C_ROJO};">${r.error}</span>`;
      const color = r.fenotipo === 'FEVI reducida' ? C_ROJO : r.fenotipo === 'FEVI mejorada' ? C_VERDE : r.fenotipo === 'FEVI levemente reducida' ? C_AMBAR : C_AZUL;
      let s = `<strong style="color:${color};font-size:14.5px;">${r.fenotipo}</strong> (FEVI ${r.fevi}%${r.previa !== null ? `, previa ${r.previa}%` : ''}).`;
      s += '<br><br><strong>Qué implica</strong><br>' + r.tratamiento;
      if (r.notas.length) s += '<br><br>' + r.notas.map(x => `<span style="color:${C_AZUL};">${x}</span>`).join('<br><br>');
      s += '<br><br><span style="opacity:.85;font-size:12.5px;">Cortes de la ESC 2021: reducida 40% o menos, levemente reducida 41 a 49%, preservada 50% o más. Mejorada (AHA 2022): previa de 40% o menos y actual de más de 40%.</span>';
      return s;
    },
    fragment: r => r.error ? 'FEVI fuera de rango' : `${r.fenotipo} (FEVI ${r.fevi}%)`
  },

  {
    key: 'peptidosIc', title: 'Péptidos natriuréticos: ¿descartan o confirman?', accent: '#6b4a2e',
    subtitle: 'Los cortes cambian entre la consulta y la urgencia',
    incompleteMsg: 'Escribe el valor del péptido.',
    fields: [
      { name: 'escenario', id: 'icar-pn-esc', type: 'select', label: 'Situación', options: [
        { value: 'cronico', label: 'Sospecha de insuficiencia cardiaca crónica (consulta)' },
        { value: 'agudo', label: 'Sospecha de insuficiencia cardiaca aguda (urgencia)' }], row: 'r1' },
      { name: 'tipo', id: 'icar-pn-tipo', type: 'select', label: 'Péptido', options: [
        { value: 'nt', label: 'NT-proBNP' },
        { value: 'bnp', label: 'BNP' }], row: 'r1' },
      { name: 'valor', id: 'icar-pn-val', type: 'number', step: '1', label: 'Valor (pg/mL)', placeholder: 'ej. 850', row: 'r2' },
      { name: 'edad', id: 'icar-pn-edad', type: 'number', step: '1', label: 'Edad en años (solo cuenta para el NT-proBNP en la urgencia)', placeholder: 'ej. 72', row: 'r2', required: false },
      { name: 'fa', id: 'icar-pn-fa', type: 'checkbox', label: 'Fibrilación auricular' },
      { name: 'obeso', id: 'icar-pn-ob', type: 'checkbox', label: 'Obesidad' }
    ],
    compute(v) {
      if (v.valor === null || v.valor === undefined) return null;
      if (v.valor < 0) return { error: 'El valor no puede ser negativo.' };
      const nt = v.tipo !== 'bnp';
      const nombre = nt ? 'NT-proBNP' : 'BNP';
      const avisos = [];
      let veredicto, color, detalle;
      if (v.escenario === 'agudo') {
        const corte = nt ? 300 : 100;
        if (v.valor < corte && v.obeso) {
          veredicto = 'Por debajo del corte de exclusión, pero en el obeso no basta para descartarla'; color = C_AMBAR;
          detalle = `Un ${nombre} por debajo de ${corte} pg/mL suele descartar la insuficiencia cardiaca aguda, pero en la obesidad los péptidos pueden estar desproporcionadamente bajos. Si la clínica es de edema pulmonar, decide el contexto y el ecocardiograma, no la cifra.`;
          avisos.push('Puede salir bajo pese a tener insuficiencia cardiaca aguda en el edema pulmonar fulminante, en la insuficiencia derecha aguda, en la obesidad y en la enfermedad terminal descompensada.');
        } else if (v.valor < corte) {
          veredicto = 'Hace improbable la insuficiencia cardiaca aguda'; color = C_VERDE;
          detalle = `Un ${nombre} por debajo de ${corte} pg/mL descarta la insuficiencia cardiaca aguda. Busca otra causa de la disnea.`;
          avisos.push('Puede salir bajo pese a tener insuficiencia cardiaca aguda en el edema pulmonar fulminante, en la insuficiencia derecha aguda, en la obesidad y en la enfermedad terminal descompensada.');
        } else if (!nt) {
          veredicto = 'No la descarta: ecocardiograma completo'; color = C_ROJO;
          detalle = `Un BNP de ${corte} pg/mL o más es compatible con insuficiencia cardiaca aguda; el ecocardiograma completo la confirma y define la función y las causas mecánicas.`;
        } else if (v.edad === null || v.edad === undefined) {
          veredicto = 'No la descarta: falta la edad para el corte de confirmación'; color = C_AMBAR;
          detalle = 'Un NT-proBNP de 300 pg/mL o más no descarta la insuficiencia cardiaca aguda. Los valores que la confirman dependen de la edad: más de 450 pg/mL antes de los 55 años, más de 900 entre los 55 y los 75, y más de 1800 por encima de los 75.';
        } else {
          const confirma = v.edad < 55 ? 450 : (v.edad <= 75 ? 900 : 1800);
          if (v.valor > confirma) {
            veredicto = 'Valor de confirmación para su edad'; color = C_ROJO;
            detalle = `Un NT-proBNP de más de ${confirma} pg/mL confirma la insuficiencia cardiaca aguda a los ${v.edad} años. Ecocardiograma completo y búsqueda del desencadenante (CHAMPIT).`;
          } else {
            veredicto = 'Zona intermedia: ni la descarta ni la confirma'; color = C_AMBAR;
            detalle = `Está por encima del corte de exclusión (300 pg/mL) y por debajo del de confirmación para los ${v.edad} años (más de ${confirma} pg/mL). El ecocardiograma completo y la clínica deciden.`;
          }
        }
      } else {
        const corte = nt ? 125 : 35;
        if (v.valor < corte && v.obeso) {
          veredicto = 'Por debajo del corte, pero en el obeso no basta para descartarla'; color = C_AMBAR;
          detalle = `Un ${nombre} por debajo de ${corte} pg/mL hace improbable el diagnóstico en general, pero en el obeso los péptidos pueden estar desproporcionadamente bajos. Si la sospecha es alta, pide el ecocardiograma.`;
          avisos.push('Hasta el 20% de los pacientes con FEVI preservada comprobada invasivamente tiene péptidos por debajo del umbral, sobre todo los obesos.');
        } else if (v.valor < corte) {
          veredicto = 'Hace improbable la insuficiencia cardiaca'; color = C_VERDE;
          detalle = `Un ${nombre} por debajo de ${corte} pg/mL hace improbable el diagnóstico (valor predictivo negativo de 0,94 a 0,98). Considera otros diagnósticos.`;        } else {
          veredicto = 'Pide un ecocardiograma'; color = C_ROJO;
          detalle = `Un ${nombre} de ${corte} pg/mL o más obliga a hacer un ecocardiograma: si es anormal, la insuficiencia cardiaca queda confirmada y la FEVI define el fenotipo.`;
        }
        if (v.fa) avisos.push(`En fibrilación auricular los péptidos suben por la propia arritmia. Para apoyar una FEVI preservada, la Tabla 9 de la ESC usa NT-proBNP de más de 365 pg/mL y BNP de más de 105 pg/mL, en lugar de 125 y 35.`);
      }
      avisos.push('Otras causas de péptidos elevados: síndrome coronario agudo, embolia pulmonar, miocarditis, valvulopatía, arritmias, edad avanzada, ictus, enfermedad renal, cirrosis con ascitis, EPOC, infecciones graves, anemia y tirotoxicosis.');
      return { veredicto, color, detalle, avisos };
    },
    format(r) {
      if (r.error) return `<span style="color:${C_ROJO};">${r.error}</span>`;
      let s = `<strong style="color:${r.color};font-size:14.5px;">${r.veredicto}.</strong><br><br>${r.detalle}`;
      if (r.avisos.length) s += '<br><br>' + r.avisos.map(x => `<span style="color:${C_AZUL};">${x}</span>`).join('<br><br>');
      return s;
    },
    fragment: r => r.error ? 'Péptido no válido' : r.veredicto
  },

  {
    key: 'marcadoresFevp', title: 'Marcadores de FEVI preservada (Tabla 9 de la ESC)', accent: '#7a4a8c',
    subtitle: 'Cuantos más, más probable; no hay punto de corte',
    incompleteMsg: 'Marca los elementos presentes.',
    fields: [
      { type: 'note', text: 'REQUISITOS' },
      { name: 'sintomas', id: 'icar-mp-sin', type: 'checkbox', label: 'Síntomas o signos de insuficiencia cardiaca' },
      { name: 'fevi50', id: 'icar-mp-fe', type: 'checkbox', label: 'FEVI de 50% o más, sin FEVI de 40% o menos en el pasado' },
      { type: 'note', text: 'MARCADORES DE PRESIONES DE LLENADO ELEVADAS' },
      { name: 'masa', id: 'icar-mp-ma', type: 'checkbox', label: 'Índice de masa del ventrículo izquierdo de 95 g/m² o más (mujer) o de 115 g/m² o más (varón)' },
      { name: 'grosor', id: 'icar-mp-gr', type: 'checkbox', label: 'Grosor parietal relativo de más de 0,42' },
      { name: 'auricula', id: 'icar-mp-au', type: 'checkbox', label: 'Volumen auricular izquierdo indexado de más de 34 mL/m² (más de 40 en fibrilación auricular)' },
      { name: 'ee', id: 'icar-mp-ee', type: 'checkbox', label: 'Cociente E/e prima en reposo de más de 9' },
      { name: 'peptido', id: 'icar-mp-pe', type: 'checkbox', label: 'NT-proBNP de más de 125 pg/mL (más de 365 en fibrilación auricular) o BNP de más de 35 (más de 105)' },
      { name: 'psap', id: 'icar-mp-ps', type: 'checkbox', label: 'Presión sistólica pulmonar de más de 35 mmHg' },
      { name: 'it', id: 'icar-mp-it', type: 'checkbox', label: 'Velocidad de regurgitación tricuspídea en reposo de más de 2,8 m/s' }
    ],
    compute(v) {
      const nombres = { masa: 'masa ventricular', grosor: 'grosor parietal relativo', auricula: 'volumen auricular', ee: 'E/e prima', peptido: 'péptido natriurético', psap: 'presión sistólica pulmonar', it: 'velocidad tricuspídea' };
      const presentes = Object.keys(nombres).filter(k => v[k]).map(k => nombres[k]);
      if (!v.sintomas && !v.fevi50 && !presentes.length) return null;
      const faltan = [];
      if (!v.sintomas) faltan.push('síntomas o signos');
      if (!v.fevi50) faltan.push('FEVI de 50% o más sin FEVI reducida previa');
      return { presentes, faltan, ee: !!v.ee };
    },
    format(r) {
      const n = r.presentes.length;
      let s;
      if (r.faltan.length) {
        s = `<strong style="color:${C_AMBAR};font-size:14.5px;">No se puede hablar de FEVI preservada todavía:</strong> faltan ${r.faltan.join(' y ')}.`;
        if (r.faltan.some(x => x.startsWith('FEVI'))) s += ' Si hubo una FEVI de 40% o menos, es una FEVI mejorada, no una preservada.';
      } else if (n === 0) {
        s = `<strong style="color:${C_AZUL};font-size:14.5px;">Ningún marcador objetivo presente.</strong> Sin evidencia objetiva de presiones de llenado elevadas no se cumple el tercer elemento del diagnóstico.`;
      } else {
        s = `<strong style="color:${C_ROJO};font-size:14.5px;">${n} de 7 marcadores presentes</strong>: ${r.presentes.join(', ')}. Cuantos más hay, más probable es la FEVI preservada.`;
      }
      s += '<br><br><strong>Si los marcadores de reposo son equívocos</strong><br>' + lista([
        'Prueba de estrés diastólico: E/e prima de 15 o más, o velocidad tricuspídea de más de 3,4 m/s en el pico del esfuerzo.',
        'Confirmación por hemodinámica invasiva de esfuerzo: presión de enclavamiento de 15 mmHg o más en reposo o de 25 mmHg o más con el esfuerzo, o presión telediastólica del ventrículo izquierdo de 16 mmHg o más en reposo.'
      ]);
      if (r.ee) s += `<br><br><span style="color:${C_AZUL};">E/e prima de más de 9 tiene una sensibilidad del 78% y una especificidad del 59%; con un corte de 13 la sensibilidad baja al 46% y la especificidad sube al 86%.</span>`;
      s += '<br><br><span style="opacity:.85;font-size:12.5px;">La ESC 2021 no fija un número mínimo de marcadores: dice solo que, cuantos más, mayor la probabilidad. La ausencia de hipertrofia no excluye el diagnóstico, y hasta el 20% tiene péptidos por debajo del umbral, sobre todo los obesos.</span>';
      return s;
    },
    fragment: r => r.faltan.length ? 'FEVI preservada: faltan requisitos' : `${r.presentes.length} de 7 marcadores de FEVI preservada`
  },

  {
    key: 'respuestaDiuretica', title: 'Diurético en la IC aguda: dosis inicial y respuesta', accent: '#8c3a34',
    subtitle: 'Sodio urinario a las 2 h, diuresis a las 6 h',
    incompleteMsg: 'Escribe al menos la dosis oral previa (0 si no tomaba).',
    fields: [
      { name: 'oral', id: 'icar-rd-or', type: 'number', step: '1', label: 'Furosemida oral diaria antes del ingreso, en mg (0 o vacío si no tomaba)', placeholder: 'ej. 80', required: false },
      { name: 'sodio', id: 'icar-rd-na', type: 'number', step: '1', label: 'Sodio urinario a las 2 h, mEq/L (si se conoce)', placeholder: 'ej. 45', row: 'r1', required: false },
      { name: 'diuresis', id: 'icar-rd-di', type: 'number', step: '1', label: 'Diuresis media en las primeras 6 h, mL/h (si se conoce)', placeholder: 'ej. 90', row: 'r1', required: false },
      { name: 'duplicada', id: 'icar-rd-du', type: 'checkbox', label: 'La dosis intravenosa ya se duplicó una vez' },
      { name: 'renal', id: 'icar-rd-re', type: 'checkbox', label: 'Función renal gravemente deteriorada' },
      { type: 'note', text: 'Equivalencia que da la guía para quien no tomaba diurético: 20 a 40 mg de furosemida o 10 a 20 mg de torasemida intravenosas.' }
    ],
    compute(v) {
      const oral = (v.oral === null || v.oral === undefined) ? 0 : v.oral;
      if (oral < 0 || (v.sodio !== null && v.sodio !== undefined && v.sodio < 0) || (v.diuresis !== null && v.diuresis !== undefined && v.diuresis < 0)) {
        return { error: 'Los valores no pueden ser negativos.' };
      }
      const maximo = v.renal ? 1000 : 600;
      let inicio;
      if (oral > 0) {
        const alto = 2 * oral;
        inicio = `De ${oral} a ${alto} mg de furosemida intravenosa al día (1 a 2 veces la dosis oral), repartidos en 2 o 3 bolos o en infusión continua.`;
        if (alto > maximo) inicio += ` Ojo: el doble de su dosis oral supera el máximo habitual de ${v.renal ? 'hasta 1000 mg con la función renal muy deteriorada' : '400 a 600 mg al día'}.`;
      } else {
        inicio = 'De 20 a 40 mg de furosemida intravenosa (o 10 a 20 mg de torasemida), y repetir según la respuesta; en 2 o 3 bolos al día o en infusión.';
      }
      const tieneNa = v.sodio !== null && v.sodio !== undefined;
      const tieneDi = v.diuresis !== null && v.diuresis !== undefined;
      let respuesta = null, color = C_AZUL, pasos = [];
      if (tieneNa || tieneDi) {
        const naOk = tieneNa && v.sodio > 70, diOk = tieneDi && v.diuresis > 150;
        const naMal = !tieneNa || v.sodio < 50, diMal = !tieneDi || v.diuresis < 100;
        if (naOk || diOk) {
          respuesta = 'Respuesta satisfactoria'; color = C_VERDE;
          pasos.push('Repetir una dosis similar cada 12 h y continuar hasta la descongestión completa.');
          pasos.push('Bajar el diurético de forma progresiva cuando el balance negativo sea significativo, y pasar a la dosis oral más baja que evite la congestión.');
        } else if (naMal && diMal) {
          respuesta = 'Respuesta insuficiente'; color = C_ROJO;
          if (!v.duplicada) {
            pasos.push('Duplicar la dosis intravenosa del diurético de asa y volver a medir la respuesta.');
          } else {
            pasos.push('Con la dosis ya duplicada y la diuresis por debajo de 100 mL/h: añadir un diurético con otro sitio de acción, tiazida (IIa B), metolazona o acetazolamida, vigilando estrechamente electrolitos y función renal.');
            pasos.push(`No superar el máximo habitual de furosemida intravenosa (${v.renal ? 'hasta 1000 mg al día con la función renal muy deteriorada' : '400 a 600 mg al día'}).`);
            pasos.push('Si no responde a las estrategias con diurético: terapia de reemplazo renal (IIa) o ultrafiltración (IIb C).');
          }
        } else {
          respuesta = 'En la franja que da la guía'; color = C_AMBAR;
          pasos.push('La guía define la respuesta satisfactoria como un sodio urinario por encima de 50 a 70 mEq/L o una diuresis de más de 100 a 150 mL/h: es un intervalo, no un número. Un valor dentro de él se valora junto con la clínica y con la segunda medida.');
        }
      }
      return { inicio, respuesta, color, pasos };
    },
    format(r) {
      if (r.error) return `<span style="color:${C_ROJO};">${r.error}</span>`;
      let s = '<strong>Dosis inicial</strong><br>' + r.inicio;
      if (r.respuesta) {
        s += `<br><br><strong style="color:${r.color};font-size:14.5px;">${r.respuesta}.</strong>`;
        if (r.pasos.length) s += '<br>' + lista(r.pasos);
      } else {
        s += '<br><br>Mide el sodio urinario a las 2 h y la diuresis horaria de las primeras 6 h para saber si el diurético está funcionando.';
      }
      s += '<br><br><span style="opacity:.85;font-size:12.5px;">Creatinina y electrolitos al menos cada 24 h. Evitar el bolo único diario, que permite la retención de sodio entre dosis. El algoritmo de la ESC (Figura 13) es opinión de expertos.</span>';
      return s;
    },
    fragment: r => r.error ? 'Datos no válidos' : (r.respuesta || 'Dosis inicial calculada')
  },

  {
    key: 'dispositivosIc', title: 'Resincronización y desfibrilador en la FEVI reducida', accent: '#5c3d8c',
    subtitle: 'Clase de recomendación según la ESC 2021',
    incompleteMsg: 'Escribe la FEVI, los meses de tratamiento óptimo y la anchura del QRS.',
    fields: [
      { name: 'fevi', id: 'icar-dv-fe', type: 'number', step: '1', label: 'FEVI actual (%)', placeholder: 'ej. 30', row: 'r1' },
      { name: 'meses', id: 'icar-dv-me', type: 'number', step: '1', label: 'Meses de tratamiento óptimo', placeholder: 'ej. 4', row: 'r1' },
      { name: 'qrs', id: 'icar-dv-qrs', type: 'number', step: '1', label: 'Anchura del QRS (ms)', placeholder: 'ej. 156', row: 'r2' },
      { name: 'nyha', id: 'icar-dv-ny', type: 'select', label: 'Clase NYHA', numeric: true, options: [
        { value: '1', label: 'I' }, { value: '2', label: 'II' }, { value: '3', label: 'III' }, { value: '4', label: 'IV' }], row: 'r2' },
      { name: 'etiologia', id: 'icar-dv-et', type: 'select', label: 'Etiología', options: [
        { value: 'isq', label: 'Isquémica' }, { value: 'noisq', label: 'No isquémica' }], row: 'r3' },
      { name: 'ritmo', id: 'icar-dv-ri', type: 'select', label: 'Ritmo', options: [
        { value: 'sinusal', label: 'Sinusal' }, { value: 'fa', label: 'Fibrilación auricular' }], row: 'r3' },
      { name: 'bri', id: 'icar-dv-bri', type: 'checkbox', label: 'Morfología de bloqueo de rama izquierda' },
      { name: 'bav', id: 'icar-dv-bav', type: 'checkbox', label: 'Indicación de estimulación ventricular por bloqueo auriculoventricular de alto grado' },
      { name: 'iam40', id: 'icar-dv-iam', type: 'checkbox', label: 'Infarto en los últimos 40 días' },
      { name: 'vida', id: 'icar-dv-vi', type: 'checkbox', label: 'Esperanza de vida de más de un año con buena función' },
      { name: 'secundaria', id: 'icar-dv-se', type: 'checkbox', label: 'Arritmia ventricular previa con inestabilidad hemodinámica, sin causa reversible y fuera de las 48 h de un infarto' }
    ],
    compute(v) {
      if ([v.fevi, v.meses, v.qrs].some(x => x === null || x === undefined)) return null;
      if (v.fevi < 5 || v.fevi > 90 || v.meses < 0 || v.qrs < 60 || v.qrs > 300) return { error: 'Revisa los valores: FEVI entre 5 y 90%, meses de 0 en adelante y QRS entre 60 y 300 ms.' };
      const nyha = v.nyha;
      // Desfibrilador
      let dai, daiClase, daiColor;
      if (v.secundaria && v.vida) {
        dai = 'Recomendado en prevención secundaria'; daiClase = 'I A'; daiColor = C_VERDE;
      } else if (v.iam40) {
        dai = 'No recomendado: está dentro de los 40 días tras un infarto, cuando el implante no mejora el pronóstico'; daiClase = 'III A'; daiColor = C_ROJO;
      } else if (v.fevi > 35) {
        dai = 'Sin indicación en prevención primaria: la FEVI es de más de 35%, y se desconoce si el desfibrilador reduce la mortalidad en ese grupo'; daiClase = '-'; daiColor = C_AZUL;
      } else if (v.meses < 3) {
        dai = 'Todavía no: hay que completar al menos 3 meses de tratamiento óptimo y repetir la FEVI, porque puede subir por encima de 35%'; daiClase = '-'; daiColor = C_AMBAR;
      } else if (nyha === 4) {
        dai = 'No recomendado en NYHA IV refractaria, salvo que sea candidato a resincronización, asistencia ventricular o trasplante'; daiClase = 'III C'; daiColor = C_ROJO;
      } else if (nyha === 1) {
        dai = 'Fuera de la recomendación: la indicación de prevención primaria de la ESC 2021 es para pacientes sintomáticos en NYHA II o III'; daiClase = '-'; daiColor = C_AZUL;
      } else if (!v.vida) {
        dai = 'Sin indicación: el beneficio exige una esperanza de vida claramente superior a un año con buena función'; daiClase = '-'; daiColor = C_AZUL;
      } else if (v.etiologia === 'isq') {
        dai = 'Recomendado en prevención primaria'; daiClase = 'I A'; daiColor = C_VERDE;
      } else {
        dai = 'Debe considerarse en prevención primaria'; daiClase = 'IIa A'; daiColor = C_AMBAR;
      }
      // Resincronizacion
      let trc, trcClase, trcColor;
      const notas = [];
      if (v.bav && v.fevi <= 40) {
        trc = 'Recomendada en lugar de la estimulación del ventrículo derecho, sea cual sea la clase NYHA o el QRS, incluida la fibrilación auricular'; trcClase = 'I A'; trcColor = C_VERDE;
      } else if (v.fevi > 35) {
        trc = 'Sin indicación por la FEVI: las recomendaciones exigen una FEVI de 35% o menos pese al tratamiento óptimo'; trcClase = '-'; trcColor = C_AZUL;
      } else if (v.meses < 3) {
        trc = 'Todavía no: el tratamiento óptimo de las recomendaciones son al menos 3 meses de las terapias de clase I'; trcClase = '-'; trcColor = C_AMBAR;
      } else if (nyha === 1) {
        trc = 'Fuera de la recomendación: las indicaciones de la ESC 2021 son para pacientes sintomáticos'; trcClase = '-'; trcColor = C_AZUL;
      } else if (v.qrs < 130) {
        trc = 'No recomendada con QRS por debajo de 130 ms sin indicación de estimulación: los datos sugieren posible daño'; trcClase = 'III A'; trcColor = C_ROJO;
      } else if (v.ritmo === 'fa') {
        trc = 'En fibrilación auricular la evidencia es escasa y no hay clase graduada: puede ser una opción en pacientes seleccionados, sobre todo con QRS de 150 ms o más, asegurando la mayor proporción posible de estimulación biventricular'; trcClase = '-'; trcColor = C_AMBAR;
      } else if (v.qrs >= 150 && v.bri) {
        trc = 'Recomendada'; trcClase = 'I A'; trcColor = C_VERDE;
      } else if (v.qrs >= 150) {
        trc = 'Debe considerarse (QRS de 150 ms o más sin BRI)'; trcClase = 'IIa B'; trcColor = C_AMBAR;
      } else if (v.bri) {
        trc = 'Debe considerarse (QRS de 130 a 149 ms con BRI)'; trcClase = 'IIa B'; trcColor = C_AMBAR;
      } else {
        trc = 'Puede considerarse (QRS de 130 a 149 ms sin BRI)'; trcClase = 'IIb B'; trcColor = C_AMBAR;
      }
      if ((trcClase === 'I A' || trcClase === 'IIa B' || trcClase === 'IIb B') && (daiClase === 'I A' || daiClase === 'IIa A')) {
        notas.push('Si va a recibir un desfibrilador y está en ritmo sinusal con BRI, la resincronización con desfibrilador se recomienda con QRS de 150 ms o más y debe considerarse con 130 a 149 ms. El único ensayo que comparó resincronización con desfibrilador y con marcapasos no mostró diferencias de morbimortalidad.');
      }
      if (v.etiologia === 'noisq' && daiClase === 'IIa A') notas.push('En la miocardiopatía no isquémica el beneficio absoluto es menor (ensayo DANISH, con posible beneficio por debajo de los 70 años); las laminopatías y la sarcoidosis tienen más riesgo de muerte súbita y merecen especial consideración.');
      return { dai, daiClase, daiColor, trc, trcClase, trcColor, notas };
    },
    format(r) {
      if (r.error) return `<span style="color:${C_ROJO};">${r.error}</span>`;
      let s = `<strong>Desfibrilador implantable</strong><br><span style="color:${r.daiColor};font-weight:600;">${r.dai}.</span>${r.daiClase !== '-' ? ` <span class="figure-tag">${r.daiClase}</span>` : ''}`;
      s += `<br><br><strong>Resincronización cardiaca</strong><br><span style="color:${r.trcColor};font-weight:600;">${r.trc}.</span>${r.trcClase !== '-' ? ` <span class="figure-tag">${r.trcClase}</span>` : ''}`;
      if (r.notas.length) s += '<br><br>' + r.notas.map(x => `<span style="color:${C_AZUL};">${x}</span>`).join('<br><br>');
      s += '<br><br><span style="opacity:.85;font-size:12.5px;">El dispositivo se suma a los cuatro pilares, no los sustituye. Los ensayos del desfibrilador son anteriores al sacubitril/valsartán y a los iSGLT2.</span>';
      return s;
    },
    fragment: r => r.error ? 'Datos no válidos' : `DAI ${r.daiClase}; TRC ${r.trcClase}`
  },

  {
    key: 'ferropeniaIc', title: 'Ferropenia en la insuficiencia cardiaca', accent: '#7a6a2e',
    subtitle: 'Definición propia y carboximaltosa férrica',
    incompleteMsg: 'Escribe la ferritina y la FEVI.',
    fields: [
      { name: 'ferritina', id: 'icar-fp-fe', type: 'number', step: '1', label: 'Ferritina (ng/mL)', placeholder: 'ej. 160', row: 'r1' },
      { name: 'tsat', id: 'icar-fp-ts', type: 'number', step: '1', label: 'Saturación de transferrina, % (si se conoce)', placeholder: 'ej. 15', row: 'r1', required: false },
      { name: 'fevi', id: 'icar-fp-fv', type: 'number', step: '1', label: 'FEVI (%)', placeholder: 'ej. 38', row: 'r2' },
      { name: 'hb', id: 'icar-fp-hb', type: 'number', step: '0.1', label: 'Hemoglobina, g/dL (si se conoce)', placeholder: 'ej. 12.4', row: 'r2', required: false },
      { name: 'sexo', id: 'icar-fp-sx', type: 'select', label: 'Sexo', options: [
        { value: 'm', label: 'Mujer' }, { value: 'v', label: 'Varón' }] },
      { name: 'sintomatico', id: 'icar-fp-si', type: 'checkbox', label: 'Sintomático' },
      { name: 'hosp', id: 'icar-fp-ho', type: 'checkbox', label: 'Hospitalizado recientemente por insuficiencia cardiaca' }
    ],
    compute(v) {
      if (v.ferritina === null || v.ferritina === undefined || v.fevi === null || v.fevi === undefined) return null;
      if (v.ferritina < 0 || (v.tsat !== null && v.tsat !== undefined && (v.tsat < 0 || v.tsat > 100)) || v.fevi < 5 || v.fevi > 90) {
        return { error: 'Revisa los valores: ferritina positiva, saturación entre 0 y 100% y FEVI entre 5 y 90%.' };
      }
      const tieneTsat = v.tsat !== null && v.tsat !== undefined;
      let estado;
      if (v.ferritina < 100) estado = 'ferropenia';
      else if (v.ferritina < 300) estado = !tieneTsat ? 'falta' : (v.tsat < 20 ? 'ferropenia' : 'no');
      else estado = 'no';
      const indicaciones = [];
      if (estado === 'ferropenia') {
        if (v.sintomatico && v.fevi < 45) indicaciones.push('Carboximaltosa férrica intravenosa para aliviar los síntomas y mejorar la capacidad de ejercicio y la calidad de vida (FEVI por debajo de 45% y sintomático): debe considerarse, IIa A.');
        if (v.hosp && v.fevi < 50) indicaciones.push('Carboximaltosa férrica intravenosa para reducir los reingresos (hospitalización reciente y FEVI por debajo de 50%): debe considerarse, IIa B.');
        if (!indicaciones.length) indicaciones.push('Hay ferropenia, pero el paciente no entra en ninguna de las dos indicaciones graduadas de la ESC 2021 (sintomático con FEVI por debajo de 45%, u hospitalizado recientemente con FEVI por debajo de 50%). Estudia la causa.');
      }
      let anemia = null;
      if (v.hb !== null && v.hb !== undefined) {
        const umbral = v.sexo === 'v' ? 13 : 12;
        anemia = v.hb < umbral ? `Anemia según la OMS (hemoglobina por debajo de ${umbral} g/dL). Los estimulantes de la eritropoyesis no están indicados en la insuficiencia cardiaca.` : `Sin anemia según la OMS (umbral de ${umbral} g/dL). La ferropenia puede existir sin anemia.`;
      }
      return { estado, indicaciones, anemia };
    },
    format(r) {
      if (r.error) return `<span style="color:${C_ROJO};">${r.error}</span>`;
      let s;
      if (r.estado === 'ferropenia') s = `<strong style="color:${C_ROJO};font-size:14.5px;">Ferropenia.</strong><br>` + lista(r.indicaciones);
      else if (r.estado === 'falta') s = `<strong style="color:${C_AMBAR};font-size:14.5px;">Falta la saturación de transferrina.</strong> Con ferritina de 100 a 299 ng/mL, la ferropenia depende de que la saturación esté por debajo del 20%.`;
      else s = `<strong style="color:${C_VERDE};font-size:14.5px;">Sin ferropenia según la definición de la insuficiencia cardiaca.</strong>`;
      if (r.anemia) s += '<br><br>' + r.anemia;
      s += '<br><br><span style="opacity:.85;font-size:12.5px;">Definición en la insuficiencia cardiaca: ferritina por debajo de 100 ng/mL, o de 100 a 299 ng/mL con saturación de transferrina por debajo del 20%. El hierro oral no repone los depósitos ni mejora el ejercicio y no se recomienda. Detectar ferropenia obliga a buscar su causa.</span>';
      return s;
    },
    fragment: r => r.error ? 'Datos no válidos' : (r.estado === 'ferropenia' ? 'Ferropenia' : r.estado === 'falta' ? 'Falta la saturación de transferrina' : 'Sin ferropenia')
  }
];

export default { calculators };
