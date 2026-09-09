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
  ['nocturna', 'Confusion nocturna', 1],
  ['personalidad', 'Personalidad relativamente conservada', 1],
  ['depresion', 'Depresion', 1],
  ['somaticas', 'Quejas somaticas', 1],
  ['labilidad', 'Labilidad emocional', 1],
  ['hta', 'Hipertension arterial', 1],
  ['ictus', 'Antecedente de ictus', 2],
  ['ateroesclerosis', 'Ateroesclerosis asociada', 1],
  ['sintomasFocales', 'Sintomas neurologicos focales', 2],
  ['signosFocales', 'Signos neurologicos focales', 2]
];

const camposHachinski = HACHINSKI_ITEMS.map(([name, label, pts], i) => ({
  name, id: 'dc-ha-' + name, type: 'checkbox', label: `${label} (+${pts})`, row: 'r' + Math.floor(i / 2)
}));

export const calculators = [
  {
    key: 'cribado-cognitivo', title: 'Cribado cognitivo: Mini-Mental y MoCA', accent: '#4a3f7a',
    subtitle: 'Como se interpretan, con el ajuste por escolaridad',
    incompleteMsg: 'Elige la prueba realizada e introduce la puntuacion obtenida.',
    fields: [
      { name: 'prueba', id: 'dc-cc-pr', type: 'select', label: 'Prueba realizada', row: 'r1', options: [
        { v: 'moca', t: 'MoCA (Montreal Cognitive Assessment)' },
        { v: 'mmse', t: 'Mini-Mental (MMSE)' }
      ] },
      { name: 'puntos', id: 'dc-cc-p', type: 'number', step: '1', label: 'Puntuacion obtenida (0 a 30)', placeholder: 'ej. 22', row: 'r1' },
      { name: 'escolaridad', id: 'dc-cc-es', type: 'select', label: 'A&#241;os de escolaridad', row: 'r2', options: [
        { v: 'baja', t: '12 a&#241;os o menos' },
        { v: 'alta', t: 'Mas de 12 a&#241;os' }
      ] },
      { name: 'sensorial', id: 'dc-cc-se', type: 'checkbox', label: 'Hipoacusia, mala vision o barrera idiomatica durante la prueba', row: 'r2' },
      { name: 'quejas', id: 'dc-cc-qu', type: 'checkbox', label: 'Hay quejas cognitivas del paciente o de un informante' },
      { type: 'note', text: 'Son pruebas de CRIBADO y no diagnosticas: no distinguen la causa y una puntuacion normal no descarta un deterioro incipiente, sobre todo en pacientes con nivel educativo alto, en los que el Mini-Mental tiene efecto techo. El MoCA es mas sensible al deterioro cognitivo leve y al perfil ejecutivo. Ninguna sustituye a la valoracion funcional con un informante.' }
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
      if (r.invalido) return 'Revisa el valor: la puntuacion debe estar entre 0 y 30.';
      const nombre = r.esMoca ? 'MoCA' : 'Mini-Mental';
      let s = `<strong>${nombre}: ${r.puntos} de 30`;
      if (r.ajuste) s += ` (+1 por escolaridad de 12 a&#241;os o menos, total ${r.total})`;
      s += `. Resultado ${r.franja}.</strong> `;
      if (r.normal) {
        s += '<span style="color:#3f6b52;">Por encima del umbral habitual.</span> ';
        if (r.quejas) s += '<strong style="color:#8a6a1f;">Pero hay quejas cognitivas, y eso NO se descarta con un cribado normal</strong>, sobre todo si el paciente tiene nivel educativo alto: el Mini-Mental tiene efecto techo y se le escapan los perfiles frontales y ejecutivos. Si el MoCA tambien es normal y las quejas persisten, corresponde valoracion neuropsicologica formal, y descartar depresion, ansiedad, apnea del sue&#241;o y farmacos antes de dar el caso por cerrado.';
        else s += 'Sin quejas cognitivas ni del paciente ni de un informante, no hay indicacion de seguir estudiando en este momento.';
      } else {
        s += `<span style="color:#8c3a34;">Por debajo del umbral.</span> Un resultado alterado NO es un diagnostico: hay que decidir si es deterioro cognitivo leve o demencia, y eso depende de la AUTONOMIA en las actividades instrumentales, no de esta puntuacion. Y hay que buscar la causa con el estudio minimo.`;
      }
      if (r.esMoca && r.escolaridadBaja && r.puntos === 30) {
        s += '<br><span style="opacity:.8;">Con 30 sobre 30 no se aplica el punto de ajuste, porque la escala no supera su maximo.</span>';
      }
      if (r.sensorial) {
        s += '<br><strong style="color:#8c3a34;">Cuidado: habia hipoacusia, mala vision o barrera idiomatica durante la prueba.</strong> Eso invalida buena parte del resultado, porque el paciente puede fallar items que no ha oido o no ha visto bien. Hay que repetir la prueba con audifonos y gafas puestos, en un entorno silencioso y en su idioma, antes de darla por valida. Es una de las causas mas frecuentes de falso positivo.';
      }
      s += '<br><span style="opacity:.75;">Ninguna de las dos escalas distingue la CAUSA del deterioro, y ambas se distorsionan con el nivel educativo. La prueba del reloj a&#241;ade informacion ejecutiva y visuoespacial en menos de dos minutos.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valor no valido' : `${r.esMoca ? 'MoCA' : 'Mini-Mental'} ${r.total}/30: ${r.normal ? 'normal' : 'alterado'}`
  },

  {
    key: 'dcl-vs-demencia', title: 'Deterioro cognitivo leve o demencia?', accent: '#8a6a1f',
    subtitle: 'La linea no la marca el test, la marca la autonomia',
    incompleteMsg: 'Responde a las preguntas sobre el cambio cognitivo y sobre las actividades instrumentales.',
    fields: [
      { name: 'cambio', id: 'dc-dd-ca', type: 'select', label: 'Hay cambio cognitivo objetivable respecto a como era antes', row: 'r1', options: [
        { v: 'si', t: 'Si: referido y confirmado en la exploracion' },
        { v: 'soloqueja', t: 'Solo queja subjetiva, sin hallazgos objetivos' },
        { v: 'no', t: 'No hay cambio demostrable' }
      ] },
      { name: 'informante', id: 'dc-dd-in', type: 'checkbox', label: 'Se ha hablado con un informante fiable', row: 'r1' },
      { name: 'dinero', id: 'dc-dd-di', type: 'checkbox', label: 'Necesita ayuda para manejar el dinero, los recibos o las compras', row: 'r2' },
      { name: 'medicacion', id: 'dc-dd-me', type: 'checkbox', label: 'Necesita ayuda o supervision para tomar la medicacion', row: 'r2' },
      { name: 'transporte', id: 'dc-dd-tr', type: 'checkbox', label: 'Ha dejado de conducir o de desplazarse solo por el deterioro', row: 'r3' },
      { name: 'domesticas', id: 'dc-dd-do', type: 'checkbox', label: 'Ha dejado de cocinar, de usar el telefono o de llevar la casa', row: 'r3' },
      { name: 'basicas', id: 'dc-dd-ba', type: 'checkbox', label: 'Necesita ayuda para actividades BASICAS: vestirse, asearse, comer' },
      { name: 'delirium', id: 'dc-dd-de', type: 'select', label: 'Perfil temporal del cuadro', options: [
        { v: 'cronico', t: 'Instauracion insidiosa, curso estable a lo largo de meses' },
        { v: 'agudo', t: 'Inicio agudo, curso fluctuante y alteracion de la ATENCION' },
        { v: 'rapido', t: 'Progresion evidente en semanas o pocos meses' }
      ] },
      { type: 'note', text: 'Las actividades INSTRUMENTALES (dinero, medicacion, transporte, telefono, casa) se pierden ANTES que las basicas, y por eso son las que marcan la transicion a demencia. Preguntar por hechos concretos y no por impresiones, y preguntarselo al informante: el paciente con anosognosia minimiza y el que tiene depresion exagera.' }
    ],
    compute(v) {
      const perdidas = [];
      if (v.dinero) perdidas.push('manejo del dinero');
      if (v.medicacion) perdidas.push('manejo de la medicacion');
      if (v.transporte) perdidas.push('desplazamientos');
      if (v.domesticas) perdidas.push('tareas domesticas o telefono');
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
        ? '<br><strong style="color:#8c3a34;">No se ha hablado con un informante.</strong> Esta decision no se puede tomar sin el: el paciente con anosognosia minimiza sus fallos y el que tiene depresion los exagera. Antes de cerrar el diagnostico, hay que preguntar a alguien que conviva con el, y por hechos concretos.'
        : '';
      const cola = r.rapida
        ? '<br><strong style="color:#6b2d4a;">Y hay un dato que cambia la urgencia: la progresion es evidente en semanas o pocos meses.</strong> Eso saca el caso de la consulta externa: una demencia rapidamente progresiva se estudia EN PARALELO y con urgencia, porque una parte importante de sus causas es tratable (autoinmune, infecciosa, neoplasica, toxico-metabolica).'
        : '';
      switch (r.veredicto) {
        case 'delirium':
          return '<strong style="color:#8c3a34;">Esto parece un DELIRIUM, no una demencia.</strong> El inicio agudo, el curso fluctuante y la alteracion de la ATENCION lo definen. Corresponde buscar la causa aguda: infeccion, farmacos, dolor, retencion urinaria, estre&#241;imiento, alteracion metabolica, abstinencia. Ojo con dos cosas: la demencia es el principal factor de riesgo de delirium, de modo que ambos coexisten con frecuencia; y el diagnostico de demencia NO se puede establecer durante un delirium, hay que reevaluar la cognicion cuando el episodio agudo se haya resuelto.' + faltaInformante;
        case 'sin-cambio':
          return '<strong style="color:#3f6b52;">Sin cambio cognitivo demostrable respecto al rendimiento previo</strong>, no se cumple el criterio ni de deterioro cognitivo leve ni de demencia. Si hay preocupacion, conviene establecer un basal ahora con un instrumento concreto para poder comparar mas adelante, y revisar de todos modos la medicacion, el estado de animo, la audicion y el sue&#241;o.' + faltaInformante;
        case 'queja-subjetiva':
          return '<strong style="color:#8a6a1f;">Queja subjetiva sin hallazgos objetivos.</strong> Aislada, se asocia mas a ANSIEDAD y a DEPRESION que a demencia, aunque en algunos pacientes es la primera manifestacion. Corresponde: descartar depresion, revisar farmacos, valorar audicion, vision y apnea del sue&#241;o, y establecer un basal para reevaluar en 6 a 12 meses. Si el paciente tiene nivel educativo alto, un cribado breve normal no basta y puede hacer falta valoracion neuropsicologica formal.' + faltaInformante;
        case 'demencia':
          return `<strong style="color:#8c3a34;">Cumple criterio de DEMENCIA</strong> (trastorno neurocognitivo mayor): hay cambio cognitivo objetivable y ya ha perdido autonomia en ${r.perdidas.length ? r.perdidas.join(', ') : 'las actividades basicas'}.${r.basicas ? ' La afectacion de las actividades BASICAS indica ademas una fase avanzada.' : ''} Ahora toca la segunda pregunta, que es la CAUSA: completar el estudio minimo (analitica con calcio, TSH y vitamina B12, y neuroimagen estructural), revisar la medicacion, caracterizar el perfil clinico y buscar lo tratable.` + faltaInformante + cola;
        default:
          return '<strong style="color:#8a6a1f;">Cumple criterio de DETERIORO COGNITIVO LEVE</strong>: hay cambio cognitivo objetivable pero CONSERVA la autonomia en las actividades instrumentales. No es una demencia y no se trata como tal. Corresponde: completar el estudio minimo buscando causas corregibles, revisar la medicacion, indicar ejercicio y control de factores de riesgo vascular, corregir la hipoacusia si la hay, y reevaluar en 6 a 12 meses con el mismo instrumento. Una parte de estos pacientes progresa a demencia, otra se mantiene estable y otra revierte.' + faltaInformante + cola;
      }
    },
    fragment: r => {
      const m = { delirium: 'perfil de delirium, no de demencia', 'sin-cambio': 'sin cambio cognitivo demostrable', 'queja-subjetiva': 'queja subjetiva sin hallazgos', demencia: 'criterio de demencia', dcl: 'criterio de deterioro cognitivo leve' };
      return m[r.veredicto] + (r.rapida ? ' (progresion rapida)' : '');
    }
  },

  {
    key: 'hachinski', title: 'Escala isquemica de Hachinski', accent: '#8c3a34',
    subtitle: 'Orienta entre perfil vascular y degenerativo',
    incompleteMsg: 'Marca los items presentes. Si no hay ninguno, el resultado tambien es informativo.',
    fields: [
      ...camposHachinski,
      { type: 'note', text: 'Es una herramienta clinica ORIENTATIVA de 1975, no un criterio diagnostico: no sustituye a la neuroimagen ni a los criterios actuales. Su valor practico es recordar que datos apoyan el origen vascular. Los valores intermedios no discriminan y son compatibles con forma MIXTA, que en el paciente mayor es probablemente lo mas frecuente.' }
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
        s += '<span style="color:#8c3a34;">7 o mas apoya un origen vascular.</span> Corresponde confirmarlo con RESONANCIA (infartos, lacunas, hiperintensidades de sustancia blanca, microsangrados) y buscar una relacion temporal o topografica plausible entre las lesiones y el deterioro. Y sobre todo, actuar: es la demencia con mayor margen de PREVENCION, de modo que el control estricto de la presion arterial, la diabetes, los lipidos y el tabaco es a la vez tratamiento y prevencion de la progresion.';
      } else if (r.perfil === 'DEGENERATIVO') {
        s += '<span style="color:#4a3f7a;">4 o menos apoya un origen degenerativo primario</span>, con la enfermedad de Alzheimer como causa mas probable si el perfil es amnesico de inicio insidioso. Eso no exime de hacer la neuroimagen, que sigue siendo obligada para descartar lo tratable.';
      } else {
        s += '<span style="color:#8a6a1f;">Entre 5 y 6 la escala NO discrimina.</span> Es la zona compatible con forma MIXTA, que en el paciente mayor es probablemente la situacion mas frecuente: patologia de Alzheimer y patologia vascular conviviendo. La conducta practica no cambia mucho, porque conviene tratar las dos cosas a la vez.';
      }
      if (r.presentes.length) s += `<br><span style="opacity:.75;">Puntuan: ${r.presentes.join(', ')}.</span>`;
      if (r.focal) s += '<br><strong style="color:#8c3a34;">Hay focalidad neurologica o antecedente de ictus.</strong> Esto obliga a completar el estudio etiologico del evento cerebrovascular: electrocardiograma y monitorizacion prolongada para buscar fibrilacion auricular, estudio de troncos supraaorticos y ecocardiograma, porque de ahi sale la prevencion secundaria.';
      s += '<br><span style="opacity:.75;">Recordatorio de perfil clinico: en la demencia vascular la memoria MEJORA al dar pistas y la marcha se altera pronto; en el Alzheimer la pista no ayuda y la marcha se afecta tarde.</span>';
      return s;
    },
    fragment: r => `Hachinski ${r.p}/18, perfil ${r.perfil.toLowerCase()}`
  },

  {
    key: 'estudio-demencia', title: 'Estudio etiologico del deterioro cognitivo', accent: '#3f6b52',
    subtitle: 'Lo que se pide a todos, y lo que no sale en ninguna analitica',
    incompleteMsg: 'Marca lo que ya se ha hecho y las situaciones presentes.',
    fields: [
      { name: 'analitica', id: 'dc-es-an', type: 'checkbox', label: 'Hecho: hemograma, bioquimica con CALCIO, funcion renal y hepatica', row: 'r1' },
      { name: 'tsh', id: 'dc-es-ts', type: 'checkbox', label: 'Hecho: hormona tiroestimulante', row: 'r1' },
      { name: 'b12', id: 'dc-es-b12', type: 'checkbox', label: 'Hecho: vitamina B12', row: 'r2' },
      { name: 'imagen', id: 'dc-es-im', type: 'checkbox', label: 'Hecha: neuroimagen estructural (resonancia o tomografia)', row: 'r2' },
      { name: 'farmacos', id: 'dc-es-fa', type: 'checkbox', label: 'Hecha: revision completa de la medicacion', row: 'r3' },
      { name: 'depresion', id: 'dc-es-de', type: 'checkbox', label: 'Hecho: cribado de depresion', row: 'r3' },
      { name: 'precoz', id: 'dc-es-pr', type: 'checkbox', label: 'Inicio antes de los 65 a&#241;os, presentacion atipica o progresion rapida', row: 'r4' },
      { name: 'sensorial', id: 'dc-es-se', type: 'checkbox', label: 'Hipoacusia o perdida de vision no corregidas', row: 'r4' },
      { name: 'ronca', id: 'dc-es-ro', type: 'checkbox', label: 'Ronquido con apneas presenciadas o somnolencia diurna' },
      { type: 'note', text: 'Las causas totalmente reversibles son minoria, pero las CONTRIBUYENTES son muy frecuentes y corregirlas mejora al paciente aunque haya una degeneracion de fondo. Las tres que mas se pasan por alto no salen en ninguna analitica: los farmacos con carga anticolinergica, la depresion y la apnea del sue&#241;o con la hipoacusia no corregida.' }
    ],
    compute(v) {
      const faltan = [];
      if (!v.analitica) faltan.push('hemograma y bioquimica con CALCIO, funcion renal y hepatica');
      if (!v.tsh) faltan.push('hormona tiroestimulante');
      if (!v.b12) faltan.push('VITAMINA B12');
      if (!v.imagen) faltan.push('NEUROIMAGEN estructural');
      const olvidos = [];
      if (!v.farmacos) olvidos.push('revisar la medicacion completa y retirar la carga anticolinergica y las benzodiacepinas');
      if (!v.depresion) olvidos.push('cribar la depresion, que puede imitar una demencia y que coexiste con frecuencia');
      if (v.sensorial) olvidos.push('corregir la HIPOACUSIA o la perdida de vision, que empeoran el rendimiento y son de los factores modificables de mayor impacto');
      if (v.ronca) olvidos.push('estudiar la APNEA DEL SUE&#209;O, que deteriora la cognicion y es tratable');
      return { faltan, olvidos, precoz: !!v.precoz, completo: faltan.length === 0 };
    },
    format: r => {
      let s = '';
      if (r.completo) {
        s += '<strong style="color:#3f6b52;">El estudio minimo esta completo.</strong> Hemograma y bioquimica con calcio, funcion tiroidea, vitamina B12 y neuroimagen estructural son lo que se pide a todos los pacientes. ';
      } else {
        s += `<strong style="color:#8c3a34;">Falta parte del estudio que se pide a TODOS</strong>: ${r.faltan.join('; ')}. La vitamina B12 merece una nota aparte: su deficit puede producir deterioro cognitivo SIN anemia y SIN macrocitosis, de modo que un hemograma normal no lo descarta, y si el valor queda en zona baja-normal hay que pedir acido metilmalonico. `;
      }
      if (r.olvidos.length) {
        s += `<br><strong style="color:#8a6a1f;">Y queda pendiente lo que no sale en ninguna analitica:</strong><br>${r.olvidos.map(x => '&nbsp;· ' + x).join('<br>')}`;
      } else {
        s += '<br><span style="color:#3f6b52;">Ademas se han cubierto las causas contribuyentes que no aparecen en la analitica: medicacion, depresion, audicion, vision y sue&#241;o. Ahi es donde mas se gana con menos esfuerzo.</span>';
      }
      if (r.precoz) {
        s += '<br><strong style="color:#6b2d4a;">Inicio precoz, presentacion atipica o progresion rapida: hay que AMPLIAR el estudio.</strong> Serologia de VIH y de sifilis, autoinmunidad y anticuerpos onconeuronales y de superficie neuronal, analisis de liquido cefalorraquideo, busqueda de neoplasia oculta y valoracion de estudio genetico con consejo previo. Los biomarcadores de amiloide y tau, que en un caso tipico no aportan, aqui si tienen indicacion. Y si la progresion es de semanas, el estudio se hace EN PARALELO y con urgencia.';
      }
      s += '<br><span style="opacity:.75;">La neuroimagen busca lo que cambia la conducta: hematoma subdural cronico, hidrocefalia normotensiva y tumor, ademas del patron de atrofia y de la carga vascular.</span>';
      return s;
    },
    fragment: r => {
      const base = r.completo ? 'estudio minimo completo' : `faltan ${r.faltan.length} prueba${r.faltan.length > 1 ? 's' : ''} del estudio minimo`;
      const extra = r.olvidos.length ? `, ${r.olvidos.length} punto${r.olvidos.length > 1 ? 's' : ''} sin cubrir` : '';
      return base + extra + (r.precoz ? ' + ampliar estudio' : '');
    }
  }
];
