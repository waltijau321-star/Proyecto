// topics/deterioro-cognitivo-demencias/calculators.js
// 4 herramientas:
// - cribado-cognitivo: interpretacion del Mini-Mental y del MoCA con el ajuste por escolaridad,
//   dejando claro que son pruebas de cribado y no diagnosticas.
// - dcl-vs-demencia: la decision central del tema, que no depende de la puntuacion sino de la
//   autonomia en las actividades instrumentales.
// - hachinski: escala isquemica clasica, que orienta entre perfil vascular y degenerativo.
// - estudio-demencia: comprueba el estudio minimo que se pide a todos y recuerda las causas
//   contribuyentes que no aparecen en ninguna analitica.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

// Escala isquemica de Hachinski: 13 items, de 0 a 18 puntos.
const HACHINSKI_ITEMS = [
  ['brusco', 'Inicio brusco', 2],
  ['escalonado', 'Deterioro escalonado', 1],
  ['fluctuante', 'Curso fluctuante', 2],
  ['nocturna', 'Confusión nocturna', 1],
  ['personalidad', 'Personalidad relativamente conservada', 1],
  ['depresion', 'Depresion', 1],
  ['somaticas', 'Quejas somáticas', 1],
  ['labilidad', 'Labilidad emocional', 1],
  ['hta', 'Hipertensión arterial', 1],
  ['ictus', 'Antecedente de ictus', 2],
  ['ateroesclerosis', 'Ateroesclerosis asociada', 1],
  ['sintomasFocales', 'Síntomas neurológicos focales', 2],
  ['signosFocales', 'Signos neurológicos focales', 2]
];

const camposHachinski = HACHINSKI_ITEMS.map(([name, label, pts], i) => ({
  name, id: 'dc-ha-' + name, type: 'checkbox', label: `${label} (+${pts})`, row: 'r' + Math.floor(i / 2)
}));

export const calculators = [
  {
    key: 'cribado-cognitivo', title: 'Cribado cognitivo: Mini-Mental y MoCA', accent: '#4a3f7a',
    subtitle: 'Como se interpretan, con el ajuste por escolaridad',
    incompleteMsg: 'Elige la prueba realizada e introduce la puntuación obtenida.',
    fields: [
      { name: 'prueba', id: 'dc-cc-pr', type: 'select', label: 'Prueba realizada', row: 'r1', options: [
        { v: 'moca', t: 'MoCA (Montreal Cognitive Assessment)' },
        { v: 'mmse', t: 'Mini-Mental (MMSE)' }
      ] },
      { name: 'puntos', id: 'dc-cc-p', type: 'number', step: '1', label: 'Puntuación obtenida (0 a 30)', placeholder: 'ej. 22', row: 'r1' },
      { name: 'escolaridad', id: 'dc-cc-es', type: 'select', label: 'Años de escolaridad', row: 'r2', options: [
        { v: 'baja', t: '12 años o menos' },
        { v: 'alta', t: 'Más de 12 años' }
      ] },
      { name: 'sensorial', id: 'dc-cc-se', type: 'checkbox', label: 'Hipoacusia, mala visión o barrera idiomatica durante la prueba', row: 'r2' },
      { name: 'quejas', id: 'dc-cc-qu', type: 'checkbox', label: 'Hay quejas cognitivas del paciente o de un informante' },
      { type: 'note', text: 'Son pruebas de CRIBADO y no diagnosticas: no distinguen la causa y una puntuación normal no descarta un deterioro incipiente, sobre todo en pacientes con nivel educativo alto, en los que el Mini-Mental tiene efecto techo. El MoCA es más sensible al deterioro cognitivo leve y al perfil ejecutivo. Ninguna sustituye a la valoración funcional con un informante.' }
    ],
    compute(v) {
      if (v.puntos == null) return null;
      if (!(v.puntos >= 0 && v.puntos <= 30)) return { invalido: true };
      const esMoca = v.prueba !== 'mmse';
      const ajuste = esMoca && v.escolaridad === 'baja' && v.puntos < 30 ? 1 : 0;
      const total = v.puntos + ajuste;
      let franja;
      if (esMoca) {
        franja = total >= 26 ? 'NORMAL' : (total >= 18 ? 'ALTERADO (rango de deterioro leve)' : 'ALTERADO (rango de deterioro moderado o grave)');
      } else {
        franja = total >= 24 ? 'NORMAL' : (total >= 18 ? 'ALTERADO (rango de deterioro leve)' : 'ALTERADO (rango de deterioro moderado o grave)');
      }
      const normal = franja === 'NORMAL';
      return { esMoca, puntos: v.puntos, ajuste, total, franja, normal, sensorial: !!v.sensorial, quejas: !!v.quejas, escolaridadBaja: v.escolaridad === 'baja' };
    },
    format: r => {
      if (r.invalido) return 'Revisa el valor: la puntuación debe estar entre 0 y 30.';
      const nombre = r.esMoca ? 'MoCA' : 'Mini-Mental';
      let s = `<strong>${nombre}: ${r.puntos} de 30`;
      if (r.ajuste) s += ` (+1 por escolaridad de 12 años o menos, total ${r.total})`;
      s += `. Resultado ${r.franja}.</strong> `;
      if (r.normal) {
        s += '<span style="color:#3f6b52;">Por encima del umbral habitual.</span> ';
        if (r.quejas) s += '<strong style="color:#8a6a1f;">Pero hay quejas cognitivas, y eso NO se descarta con un cribado normal</strong>, sobre todo si el paciente tiene nivel educativo alto: el Mini-Mental tiene efecto techo y se le escapan los perfiles frontales y ejecutivos. Si el MoCA también es normal y las quejas persisten, corresponde valoración neuropsicológica formal, y descartar depresión, ansiedad, apnea del sueño y fármacos antes de dar el caso por cerrado.';
        else s += 'Sin quejas cognitivas ni del paciente ni de un informante, no hay indicación de seguir estudiando en este momento.';
      } else {
        s += `<span style="color:#8c3a34;">Por debajo del umbral.</span> Un resultado alterado NO es un diagnóstico: hay que decidir si es deterioro cognitivo leve o demencia, y eso depende de la AUTONOMIA en las actividades instrumentales, no de esta puntuación. Y hay que buscar la causa con el estudio mínimo.`;
      }
      if (r.esMoca && r.escolaridadBaja && r.puntos === 30) {
        s += '<br><span style="opacity:.8;">Con 30 sobre 30 no se aplica el punto de ajuste, porque la escala no supera su máximo.</span>';
      }
      if (r.sensorial) {
        s += '<br><strong style="color:#8c3a34;">Cuidado: había hipoacusia, mala visión o barrera idiomatica durante la prueba.</strong> Eso invalida buena parte del resultado, porque el paciente puede fallar ítems que no ha oído o no ha visto bien. Hay que repetir la prueba con audifonos y gafas puestos, en un entorno silencioso y en su idioma, antes de darla por valida. Es una de las causas más frecuentes de falso positivo.';
      }
      s += '<br><span style="opacity:.75;">Ninguna de las dos escalas distingue la CAUSA del deterioro, y ambas se distorsionan con el nivel educativo. La prueba del reloj añade información ejecutiva y visuoespacial en menos de dos minutos.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valor no valido' : `${r.esMoca ? 'MoCA' : 'Mini-Mental'} ${r.total}/30: ${r.normal ? 'normal' : 'alterado'}`
  },

  {
    key: 'dcl-vs-demencia', title: 'Deterioro cognitivo leve o demencia?', accent: '#8a6a1f',
    subtitle: 'La línea no la marca el test, la marca la autonomia',
    incompleteMsg: 'Responde a las preguntas sobre el cambio cognitivo y sobre las actividades instrumentales.',
    fields: [
      { name: 'cambio', id: 'dc-dd-ca', type: 'select', label: 'Hay cambio cognitivo objetivable respecto a como era antes', row: 'r1', options: [
        { v: 'si', t: 'Si: referido y confirmado en la exploración' },
        { v: 'soloqueja', t: 'Solo queja subjetiva, sin hallazgos objetivos' },
        { v: 'no', t: 'No hay cambio demostrable' }
      ] },
      { name: 'informante', id: 'dc-dd-in', type: 'checkbox', label: 'Se ha hablado con un informante fiable', row: 'r1' },
      { name: 'dinero', id: 'dc-dd-di', type: 'checkbox', label: 'Necesita ayuda para manejar el dinero, los recibos o las compras', row: 'r2' },
      { name: 'medicacion', id: 'dc-dd-me', type: 'checkbox', label: 'Necesita ayuda o supervisión para tomar la medicación', row: 'r2' },
      { name: 'transporte', id: 'dc-dd-tr', type: 'checkbox', label: 'Ha dejado de conducir o de desplazarse solo por el deterioro', row: 'r3' },
      { name: 'domesticas', id: 'dc-dd-do', type: 'checkbox', label: 'Ha dejado de cocinar, de usar el telefono o de llevar la casa', row: 'r3' },
      { name: 'basicas', id: 'dc-dd-ba', type: 'checkbox', label: 'Necesita ayuda para actividades BÁSICAS: vestirse, asearse, comer' },
      { name: 'delirium', id: 'dc-dd-de', type: 'select', label: 'Perfil temporal del cuadro', options: [
        { v: 'cronico', t: 'Instauración insidiosa, curso estable a lo largo de meses' },
        { v: 'agudo', t: 'Inicio agudo, curso fluctuante y alteración de la ATENCIÓN' },
        { v: 'rapido', t: 'Progresión evidente en semanas o pocos meses' }
      ] },
      { type: 'note', text: 'Las actividades INSTRUMENTALES (dinero, medicación, transporte, telefono, casa) se pierden ANTES que las básicas, y por eso son las que marcan la transición a demencia. Preguntar por hechos concretos y no por impresiones, y preguntarselo al informante: el paciente con anosognosia minimiza y el que tiene depresión exagera.' }
    ],
    compute(v) {
      const perdidas = [];
      if (v.dinero) perdidas.push('manejo del dinero');
      if (v.medicacion) perdidas.push('manejo de la medicación');
      if (v.transporte) perdidas.push('desplazamientos');
      if (v.domesticas) perdidas.push('tareas domésticas o telefono');
      const basicas = !!v.basicas;
      const delirium = v.delirium === 'agudo';
      const rapida = v.delirium === 'rapido';
      const cambio = v.cambio;
      let veredicto;
      if (delirium) veredicto = 'delirium';
      else if (cambio === 'no') veredicto = 'sin-cambio';
      else if (cambio === 'soloqueja') veredicto = 'queja-subjetiva';
      else if (perdidas.length || basicas) veredicto = 'demencia';
      else veredicto = 'dcl';
      return { veredicto, perdidas, basicas, rapida, informante: !!v.informante };
    },
    format: r => {
      const faltaInformante = !r.informante
        ? '<br><strong style="color:#8c3a34;">No se ha hablado con un informante.</strong> Esta decisión no se puede tomar sin el: el paciente con anosognosia minimiza sus fallos y el que tiene depresión los exagera. Antes de cerrar el diagnóstico, hay que preguntar a alguien que conviva con el, y por hechos concretos.'
        : '';
      const cola = r.rapida
        ? '<br><strong style="color:#6b2d4a;">Y hay un dato que cambia la urgencia: la progresión es evidente en semanas o pocos meses.</strong> Eso saca el caso de la consulta externa: una demencia rápidamente progresiva se estudia EN PARALELO y con urgencia, porque una parte importante de sus causas es tratable (autoinmune, infecciosa, neoplásica, tóxico-metabólica).'
        : '';
      switch (r.veredicto) {
        case 'delirium':
          return '<strong style="color:#8c3a34;">Esto parece un DELIRIUM, no una demencia.</strong> El inicio agudo, el curso fluctuante y la alteración de la ATENCIÓN lo definen. Corresponde buscar la causa aguda: infección, fármacos, dolor, retención urinaria, estreñimiento, alteración metabólica, abstinencia. Ojo con dos cosas: la demencia es el principal factor de riesgo de delirium, de modo que ambos coexisten con frecuencia; y el diagnóstico de demencia NO se puede establecer durante un delirium, hay que reevaluar la cognición cuando el episodio agudo se haya resuelto.' + faltaInformante;
        case 'sin-cambio':
          return '<strong style="color:#3f6b52;">Sin cambio cognitivo demostrable respecto al rendimiento previo</strong>, no se cumple el criterio ni de deterioro cognitivo leve ni de demencia. Si hay preocupación, conviene establecer un basal ahora con un instrumento concreto para poder comparar más adelante, y revisar de todos modos la medicación, el estado de ánimo, la audición y el sueño.' + faltaInformante;
        case 'queja-subjetiva':
          return '<strong style="color:#8a6a1f;">Queja subjetiva sin hallazgos objetivos.</strong> Aislada, se asocia más a ANSIEDAD y a DEPRESIÓN que a demencia, aunque en algunos pacientes es la primera manifestación. Corresponde: descartar depresión, revisar fármacos, valorar audición, visión y apnea del sueño, y establecer un basal para reevaluar en 6 a 12 meses. Si el paciente tiene nivel educativo alto, un cribado breve normal no basta y puede hacer falta valoración neuropsicológica formal.' + faltaInformante;
        case 'demencia':
          return `<strong style="color:#8c3a34;">Cumple criterio de DEMENCIA</strong> (trastorno neurocognitivo mayor): hay cambio cognitivo objetivable y ya ha perdido autonomia en ${r.perdidas.length ? r.perdidas.join(', ') : 'las actividades básicas'}.${r.basicas ? ' La afectación de las actividades BÁSICAS indica además una fase avanzada.' : ''} Ahora toca la segunda pregunta, que es la CAUSA: completar el estudio mínimo (analítica con calcio, TSH y vitamina B12, y neuroimagen estructural), revisar la medicación, caracterizar el perfil clínico y buscar lo tratable.` + faltaInformante + cola;
        default:
          return '<strong style="color:#8a6a1f;">Cumple criterio de DETERIORO COGNITIVO LEVE</strong>: hay cambio cognitivo objetivable pero CONSERVA la autonomia en las actividades instrumentales. No es una demencia y no se trata como tal. Corresponde: completar el estudio mínimo buscando causas corregibles, revisar la medicación, indicar ejercicio y control de factores de riesgo vascular, corregir la hipoacusia si la hay, y reevaluar en 6 a 12 meses con el mismo instrumento. Una parte de estos pacientes progresa a demencia, otra se mantiene estable y otra revierte.' + faltaInformante + cola;
      }
    },
    fragment: r => {
      const m = { delirium: 'perfil de delirium, no de demencia', 'sin-cambio': 'sin cambio cognitivo demostrable', 'queja-subjetiva': 'queja subjetiva sin hallazgos', demencia: 'criterio de demencia', dcl: 'criterio de deterioro cognitivo leve' };
      return m[r.veredicto] + (r.rapida ? ' (progresión rápida)' : '');
    }
  },

  {
    key: 'hachinski', title: 'Escala isquémica de Hachinski', accent: '#8c3a34',
    subtitle: 'Orienta entre perfil vascular y degenerativo',
    incompleteMsg: 'Marca los ítems presentes. Si no hay ninguno, el resultado también es informativo.',
    fields: [
      ...camposHachinski,
      { type: 'note', text: 'Es una herramienta clínica ORIENTATIVA de 1975, no un criterio diagnóstico: no sustituye a la neuroimagen ni a los criterios actuales. Su valor practico es recordar que datos apoyan el origen vascular. Los valores intermedios no discriminan y son compatibles con forma MIXTA, que en el paciente mayor es probablemente lo más frecuente.' }
    ],
    compute(v) {
      let p = 0;
      const presentes = [];
      for (const [name, label, pts] of HACHINSKI_ITEMS) {
        if (v[name]) { p += pts; presentes.push(`${label} (+${pts})`); }
      }
      let perfil;
      if (p >= 7) perfil = 'VASCULAR';
      else if (p <= 4) perfil = 'DEGENERATIVO';
      else perfil = 'INDETERMINADO';
      return { p, perfil, presentes, focal: !!(v.sintomasFocales || v.signosFocales || v.ictus) };
    },
    format: r => {
      let s = `<strong>${r.p} de 18 puntos: perfil ${r.perfil}.</strong> `;
      if (r.perfil === 'VASCULAR') {
        s += '<span style="color:#8c3a34;">7 o más apoya un origen vascular.</span> Corresponde confirmarlo con RESONANCIA (infartos, lacunas, hiperintensidades de sustancia blanca, microsangrados) y buscar una relación temporal o topográfica plausible entre las lesiones y el deterioro. Y sobre todo, actuar: es la demencia con mayor margen de PREVENCIÓN, de modo que el control estricto de la presión arterial, la diabetes, los lípidos y el tabaco es a la vez tratamiento y prevención de la progresión.';
      } else if (r.perfil === 'DEGENERATIVO') {
        s += '<span style="color:#4a3f7a;">4 o menos apoya un origen degenerativo primario</span>, con la enfermedad de Alzheimer como causa más probable si el perfil es amnésico de inicio insidioso. Eso no exime de hacer la neuroimagen, que sigue siendo obligada para descartar lo tratable.';
      } else {
        s += '<span style="color:#8a6a1f;">Entre 5 y 6 la escala NO discrimina.</span> Es la zona compatible con forma MIXTA, que en el paciente mayor es probablemente la situación más frecuente: patología de Alzheimer y patología vascular conviviendo. La conducta práctica no cambia mucho, porque conviene tratar las dos cosas a la vez.';
      }
      if (r.presentes.length) s += `<br><span style="opacity:.75;">Puntuan: ${r.presentes.join(', ')}.</span>`;
      if (r.focal) s += '<br><strong style="color:#8c3a34;">Hay focalidad neurológica o antecedente de ictus.</strong> Esto obliga a completar el estudio etiológico del evento cerebrovascular: electrocardiograma y monitorización prolongada para buscar fibrilación auricular, estudio de troncos supraaorticos y ecocardiograma, porque de ahi sale la prevención secundaria.';
      s += '<br><span style="opacity:.75;">Recordatorio de perfil clínico: en la demencia vascular la memoria MEJORA al dar pistas y la marcha se altera pronto; en el Alzheimer la pista no ayuda y la marcha se afecta tarde.</span>';
      return s;
    },
    fragment: r => `Hachinski ${r.p}/18, perfil ${r.perfil.toLowerCase()}`
  },

  {
    key: 'estudio-demencia', title: 'Estudio etiológico del deterioro cognitivo', accent: '#3f6b52',
    subtitle: 'Lo que se pide a todos, y lo que no sale en ninguna analítica',
    incompleteMsg: 'Marca lo que ya se ha hecho y las situaciones presentes.',
    fields: [
      { name: 'analitica', id: 'dc-es-an', type: 'checkbox', label: 'Hecho: hemograma, bioquímica con CALCIO, función renal y hepática', row: 'r1' },
      { name: 'tsh', id: 'dc-es-ts', type: 'checkbox', label: 'Hecho: hormona tiroestimulante', row: 'r1' },
      { name: 'b12', id: 'dc-es-b12', type: 'checkbox', label: 'Hecho: vitamina B12', row: 'r2' },
      { name: 'imagen', id: 'dc-es-im', type: 'checkbox', label: 'Hecha: neuroimagen estructural (resonancia o tomografía)', row: 'r2' },
      { name: 'farmacos', id: 'dc-es-fa', type: 'checkbox', label: 'Hecha: revisión completa de la medicación', row: 'r3' },
      { name: 'depresion', id: 'dc-es-de', type: 'checkbox', label: 'Hecho: cribado de depresión', row: 'r3' },
      { name: 'precoz', id: 'dc-es-pr', type: 'checkbox', label: 'Inicio antes de los 65 años, presentación atípica o progresión rápida', row: 'r4' },
      { name: 'sensorial', id: 'dc-es-se', type: 'checkbox', label: 'Hipoacusia o pérdida de visión no corregidas', row: 'r4' },
      { name: 'ronca', id: 'dc-es-ro', type: 'checkbox', label: 'Ronquido con apneas presenciadas o somnolencia diurna' },
      { type: 'note', text: 'Las causas totalmente reversibles son minoría, pero las CONTRIBUYENTES son muy frecuentes y corregirlas mejora al paciente aunque haya una degeneración de fondo. Las tres que más se pasan por alto no salen en ninguna analítica: los fármacos con carga anticolinergica, la depresión y la apnea del sueño con la hipoacusia no corregida.' }
    ],
    compute(v) {
      const faltan = [];
      if (!v.analitica) faltan.push('hemograma y bioquímica con CALCIO, función renal y hepática');
      if (!v.tsh) faltan.push('hormona tiroestimulante');
      if (!v.b12) faltan.push('VITAMINA B12');
      if (!v.imagen) faltan.push('NEUROIMAGEN estructural');
      const olvidos = [];
      if (!v.farmacos) olvidos.push('revisar la medicación completa y retirar la carga anticolinergica y las benzodiacepinas');
      if (!v.depresion) olvidos.push('cribar la depresión, que puede imitar una demencia y que coexiste con frecuencia');
      if (v.sensorial) olvidos.push('corregir la HIPOACUSIA o la pérdida de visión, que empeoran el rendimiento y son de los factores modificables de mayor impacto');
      if (v.ronca) olvidos.push('estudiar la APNEA DEL SUEÑO, que deteriora la cognición y es tratable');
      return { faltan, olvidos, precoz: !!v.precoz, completo: faltan.length === 0 };
    },
    format: r => {
      let s = '';
      if (r.completo) {
        s += '<strong style="color:#3f6b52;">El estudio mínimo esta completo.</strong> Hemograma y bioquímica con calcio, función tiroidea, vitamina B12 y neuroimagen estructural son lo que se pide a todos los pacientes. ';
      } else {
        s += `<strong style="color:#8c3a34;">Falta parte del estudio que se pide a TODOS</strong>: ${r.faltan.join('; ')}. La vitamina B12 merece una nota aparte: su déficit puede producir deterioro cognitivo SIN anemia y SIN macrocitosis, de modo que un hemograma normal no lo descarta, y si el valor queda en zona baja-normal hay que pedir ácido metilmalónico. `;
      }
      if (r.olvidos.length) {
        s += `<br><strong style="color:#8a6a1f;">Y queda pendiente lo que no sale en ninguna analítica:</strong><br>${r.olvidos.map(x => '&nbsp;· ' + x).join('<br>')}`;
      } else {
        s += '<br><span style="color:#3f6b52;">Además se han cubierto las causas contribuyentes que no aparecen en la analítica: medicación, depresión, audición, visión y sueño. Ahi es donde más se gana con menos esfuerzo.</span>';
      }
      if (r.precoz) {
        s += '<br><strong style="color:#6b2d4a;">Inicio precoz, presentación atípica o progresión rápida: hay que AMPLIAR el estudio.</strong> Serología de VIH y de sífilis, autoinmunidad y anticuerpos onconeuronales y de superficie neuronal, análisis de líquido cefalorraquídeo, búsqueda de neoplasia oculta y valoración de estudio genético con consejo previo. Los biomarcadores de amiloide y tau, que en un caso típico no aportan, aquí si tienen indicación. Y si la progresión es de semanas, el estudio se hace EN PARALELO y con urgencia.';
      }
      s += '<br><span style="opacity:.75;">La neuroimagen busca lo que cambia la conducta: hematoma subdural crónico, hidrocefalia normotensiva y tumor, además del patrón de atrofia y de la carga vascular.</span>';
      return s;
    },
    fragment: r => {
      const base = r.completo ? 'estudio mínimo completo' : `faltan ${r.faltan.length} prueba${r.faltan.length > 1 ? 's' : ''} del estudio mínimo`;
      const extra = r.olvidos.length ? `, ${r.olvidos.length} punto${r.olvidos.length > 1 ? 's' : ''} sin cubrir` : '';
      return base + extra + (r.precoz ? ' + ampliar estudio' : '');
    }
  }
];
