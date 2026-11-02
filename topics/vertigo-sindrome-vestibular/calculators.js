// topics/vertigo-sindrome-vestibular/calculators.js
// 3 herramientas (el tema se resuelve explorando, no calculando):
// - sindrome-vestibular: clasifica por TIEMPO y DESENCADENANTE y devuelve la exploracion que
//   corresponde, que es el paso que mas errores evita.
// - hints: los tres pasos oculomotores mas la audicion, con la comprobacion previa de que el
//   escenario es realmente un sindrome vestibular agudo.
// - nistagmo-posicional: identifica el canal a partir del nistagmo y elige la maniobra.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

export const calculators = [
  {
    key: 'sindrome-vestibular', title: 'Que síndrome vestibular es', accent: '#4a7a5c',
    subtitle: 'Clasificar por tiempo y desencadenante, no por como lo describe el paciente',
    incompleteMsg: 'Elige la duración, el desencadenante y si hay o no una enfermedad general que explique el cuadro.',
    fields: [
      { name: 'sistemico', id: 'vv-sv-x', type: 'select', label: 'Hay una enfermedad general que pueda explicar el mareo (anemia, sepsis, hipoglucemia, fármaco nuevo, intoxicación)?', options: [
        { v: 'no', t: 'No, o ya se ha descartado' },
        { v: 'si', t: 'Si, hay una causa sistémica probable' }
      ] },
      { name: 'duracion', id: 'vv-sv-d', type: 'select', label: 'Cuanto dura cada episodio', row: 'r2', options: [
        { v: 'segundos', t: 'Segundos, menos de un minuto' },
        { v: 'minutosHoras', t: 'De minutos a horas' },
        { v: 'continuo', t: 'Continuo desde hace más de 24 horas' }
      ] },
      { name: 'desencadenante', id: 'vv-sv-t', type: 'select', label: 'Que lo desencadena', row: 'r2', options: [
        { v: 'ninguno', t: 'Nada: empieza solo' },
        { v: 'posicion', t: 'Girarse en la cama, tumbarse o mirar arriba' },
        { v: 'bipedestacion', t: 'Ponerse de pie' },
        { v: 'movimiento', t: 'Empeora al mover la cabeza, pero ya estaba' }
      ] },
      { name: 'nistagmo', id: 'vv-sv-n', type: 'checkbox', label: 'Hay nistagmo espontáneo en la exploración', row: 'r3' },
      { name: 'marcha', id: 'vv-sv-m', type: 'checkbox', label: 'NO puede sentarse ni caminar sin ayuda', row: 'r3' },
      { type: 'note', text: 'La pregunta clásica de COMO es el mareo ha demostrado no discriminar: los pacientes cambian de respuesta al repreguntar y la descripción no separa una neuritis de un infarto cerebeloso. Lo que si separa son la DURACIÓN y el DESENCADENANTE, y de ellos sale la exploración que hay que hacer. Antes de nada hay que descartar el mareo sintomático de una enfermedad general, donde buscar un nistagmo es perder el tiempo.' }
    ],
    compute(v) {
      if (!v.sistemico || !v.duracion || !v.desencadenante) return null;
      if (v.sistemico === 'si') return { tipo: 'SISTEMICO', marcha: !!v.marcha, nistagmo: !!v.nistagmo };
      let tipo;
      if (v.duracion === 'continuo') tipo = 'AGUDO CONTINUO';
      else if (v.desencadenante === 'posicion' || v.desencadenante === 'bipedestacion') tipo = 'EPISÓDICO PROVOCADO';
      else tipo = 'EPISÓDICO ESPONTÁNEO';
      return {
        tipo, duracion: v.duracion, desencadenante: v.desencadenante,
        nistagmo: !!v.nistagmo, marcha: !!v.marcha,
        hintsValido: tipo === 'AGUDO CONTINUO' && !!v.nistagmo,
        ortostatico: v.desencadenante === 'bipedestacion',
        breve: v.duracion === 'segundos'
      };
    },
    format: r => {
      if (r.tipo === 'SISTEMICO') {
        let s = '<strong style="color:#3d5a73;">Antes de clasificar nada: hay una enfermedad general que puede explicar el mareo.</strong> Ese escenario no entra en la clasificación vestibular y buscar alli un nistagmo es perder el tiempo. Toca glucemia capilar, hemograma, iones, función renal, electrocardiograma y revisión de la lista de FÁRMACOS, que rinde más que muchas pruebas.';
        if (r.marcha) s += '<br><strong style="color:#8c3a34;">Aun así, la incapacidad para sentarse o caminar sin ayuda es una bandera roja</strong> que hay que explicar por sí misma y no atribuir sin más a la enfermedad de base.';
        return s;
      }
      let s = `<strong>Síndrome ${r.tipo}.</strong> `;
      if (r.tipo === 'AGUDO CONTINUO') {
        s += 'La única pregunta relevante es neuritis vestibular o ICTUS de fosa posterior. La exploración que corresponde es el <strong>HINTS ampliado</strong>, más la marcha y la búsqueda de cualquier otra focalidad.';
        if (!r.nistagmo) s += '<br><strong style="color:#8a6a1f;">Atención: no se ha registrado nistagmo espontáneo.</strong> El HINTS se valido en pacientes con vértigo continuo Y nistagmo. Sin nistagmo no ha sido validado y su resultado no significa nada, de modo que aquí manda el resto de la exploración y el perfil de riesgo vascular.';
        else s += '<br><span style="color:#3f6b52;">Hay nistagmo espontáneo: el escenario es el adecuado para aplicar el HINTS.</span>';
      } else if (r.tipo === 'EPISÓDICO PROVOCADO') {
        if (r.ortostatico) s += 'Desencadenado por ponerse de pie: lo primero es medir la <strong>TENSIÓN ARTERIAL en decúbito y tras 3 minutos de bipedestación</strong>, y hacer un electrocardiograma. Es la prueba más barata del tema y una de las más rentables.';
        else s += 'Desencadenado por cambios de posición de la cabeza: corresponde <strong>DIX-HALLPIKE</strong> de los dos lados y, si es negativo, la <strong>maniobra de rotación en decúbito</strong> para el canal horizontal, que es la que más se omite.';
        if (!r.breve) s += '<br><span style="opacity:.75;">Los episodios de un vértigo posicional típico duran SEGUNDOS. Si duran más de un minuto, hay que replantear el diagnóstico.</span>';
      } else {
        s += 'Crisis que empiezan sin desencadenante: el diferencial es enfermedad de Meniere (de 20 minutos a 12 horas, con hipoacusia documentada), migraña vestibular (de 5 minutos a 72 horas, hay que preguntar por cefalea y fotofobia DURANTE la crisis) y <strong style="color:#8c3a34;">ACCIDENTE ISQUÉMICO TRANSITORIO vertebrobasilar</strong>, que puede manifestarse solo como vértigo.';
        s += '<br><span style="opacity:.75;">Toca audiometría si se sospecha Meniere, y si hay factores de riesgo vascular hay que manejarlo con el circuito URGENTE del accidente isquémico transitorio, no de forma diferida.</span>';
      }
      if (r.marcha) s += '<br><strong style="color:#8c3a34;">BANDERA ROJA: no puede sentarse ni caminar sin ayuda.</strong> Es el dato más útil a pie de cama y el que menos entrenamiento exige. Un paciente que no se sostiene no tiene una laberintitis: hay que manejarlo como un ictus de fosa posterior.';
      s += '<br><span style="opacity:.75;">Y conviene recordar por que se clasifica así: la pregunta de como es el mareo no discrimina, porque los pacientes cambian de respuesta al repreguntar.</span>';
      return s;
    },
    fragment: r => r.tipo === 'SISTEMICO' ? 'mareo sintomático de enfermedad general' : `síndrome ${r.tipo.toLowerCase()}`
  },

  {
    key: 'hints', title: 'HINTS ampliado', accent: '#8c3a34',
    subtitle: 'Tres pasos oculomotores y la audición en el síndrome vestibular agudo',
    incompleteMsg: 'Confirma primero que se trata de un síndrome vestibular agudo y responde a los tres pasos de la exploración.',
    fields: [
      { name: 'escenario', id: 'vv-hi-e', type: 'select', label: 'Vértigo CONTINUO de más de 24 horas con nistagmo espontáneo?', options: [
        { v: 'si', t: 'Si: es un síndrome vestibular agudo' },
        { v: 'no', t: 'No: es episódico o no hay nistagmo' }
      ] },
      { name: 'impulso', id: 'vv-hi-i', type: 'select', label: 'Prueba del impulso cefálico', row: 'r2', options: [
        { v: 'anormal', t: 'ANORMAL: aparece sacada de corrección' },
        { v: 'normal', t: 'NORMAL: el ojo se queda en el objetivo' }
      ] },
      { name: 'nistagmo', id: 'vv-hi-n', type: 'select', label: 'Dirección del nistagmo con la mirada', row: 'r2', options: [
        { v: 'unidireccional', t: 'Siempre hacia el mismo lado, horizontal' },
        { v: 'cambiante', t: 'Cambia de dirección con la mirada' },
        { v: 'vertical', t: 'Puramente vertical o torsional' }
      ] },
      { name: 'skew', id: 'vv-hi-s', type: 'select', label: 'Desviación vertical al tapar y destapar alterno', row: 'r3', options: [
        { v: 'ausente', t: 'Ausente' },
        { v: 'presente', t: 'Presente' }
      ] },
      { name: 'audicion', id: 'vv-hi-a', type: 'select', label: 'Hipoacusia de nueva aparición', row: 'r3', options: [
        { v: 'no', t: 'No' },
        { v: 'si', t: 'Si' }
      ] },
      { name: 'marcha', id: 'vv-hi-m', type: 'checkbox', label: 'NO puede sentarse ni caminar sin ayuda' },
      { type: 'note', text: 'En manos entrenadas, esta exploración de tres pasos es MÁS sensible que la resonancia con difusión realizada de forma precoz para detectar el ictus de fosa posterior. Su valor depende por completo del escenario: solo se ha validado en el síndrome vestibular agudo, con vértigo continuo y nistagmo. Aplicarla a un mareo episódico o a un paciente sin nistagmo no aporta información y puede tranquilizar en falso.' }
    ],
    compute(v) {
      if (!v.escenario || !v.impulso || !v.nistagmo || !v.skew || !v.audicion) return null;
      if (v.escenario === 'no') return { fueraDeEscenario: true, marcha: !!v.marcha };
      const centrales = [];
      if (v.impulso === 'normal') centrales.push('impulso cefálico NORMAL');
      if (v.nistagmo === 'cambiante') centrales.push('nistagmo que CAMBIA de dirección');
      if (v.nistagmo === 'vertical') centrales.push('nistagmo vertical o torsional puro');
      if (v.skew === 'presente') centrales.push('desviación vertical presente');
      if (v.audicion === 'si') centrales.push('hipoacusia de nueva aparición');
      const marcha = !!v.marcha;
      const central = centrales.length > 0 || marcha;
      return { central, centrales, marcha, n: centrales.length };
    },
    format: r => {
      if (r.fueraDeEscenario) {
        let s = '<strong style="color:#8a6a1f;">El HINTS no se aplica aquí.</strong> Solo esta validado en el SÍNDROME VESTIBULAR AGUDO, es decir con vértigo continuo de más de 24 horas Y nistagmo espontáneo. En un mareo episódico o en un paciente sin nistagmo, su resultado no significa nada y puede tranquilizar en falso, que es el peor de los desenlaces posibles.';
        s += '<br><span style="opacity:.75;">Lo que corresponde es volver a clasificar por tiempo y desencadenante: Dix-Hallpike si es posicional, tensión en bipedestación si aparece al levantarse, e historia dirigida más estudio vascular si es episódico espontáneo.</span>';
        if (r.marcha) s += '<br><strong style="color:#8c3a34;">Y con todo, la incapacidad para sentarse o caminar sin ayuda es una bandera roja</strong> que obliga a imagen de fosa posterior sea cual sea el síndrome.';
        return s;
      }
      let s;
      if (r.central) {
        s = '<strong style="color:#8c3a34;">Patrón CENTRAL: hay que manejarlo como un ictus de fosa posterior.</strong> ';
        if (r.n) s += `Hallazgos centrales: ${r.centrales.join('; ')}. Basta UNO solo para que el patrón sea central. `;
        if (r.marcha) s += '<strong>Y no puede sentarse ni caminar sin ayuda</strong>, que es la bandera roja más útil a pie de cama. ';
        s += '<br>Toca activar la via de ICTUS: resonancia con difusión, estudio de vasos buscando estenosis y DISECCIÓN, y valoración de reperfusión si esta en ventana.';
        s += '<br><span style="opacity:.75;">Dos advertencias sobre la imagen: una tomografía normal no descarta nada, porque apenas ve la fosa posterior; y una resonancia PRECOZ normal tampoco, porque en las primeras 24 a 48 horas deja escapar una parte de los infartos pequeños de esa región. Con exploración central y resonancia precoz normal, hay que repetirla y no dar el alta.</span>';
        s += '<br><span style="opacity:.75;">Vigilar el EDEMA cerebeloso durante las primeras 48 a 72 horas: un deterioro brusco del nivel de conciencia obliga a repetir la imagen, y la craniectomía o el drenaje ventricular pueden salvar la vida.</span>';
      } else {
        s = '<strong style="color:#3f6b52;">Patrón PERIFÉRICO en los tres pasos:</strong> impulso cefálico anormal, nistagmo unidireccional y sin desviación vertical, y sin hipoacusia nueva. Es el único patrón tranquilizador, y exige que se cumplan los tres a la vez.';
        s += '<br>Compatible con NEURITIS VESTIBULAR: corticoides en fase precoz, hidratación, antieméticos, sedantes vestibulares solo unos POCOS DÍAS y rehabilitación vestibular precoz, que es lo que más acelera la compensación.';
        s += '<br><span style="opacity:.75;">Esto no exime de explorar la marcha ni de buscar otra focalidad, ni de reevaluar si la evolución no es la esperada. Y si hay cefalea o cervicalgia intensas de inicio brusco, hay que descartar una disección aunque el HINTS sea periférico.</span>';
      }
      return s;
    },
    fragment: r => r.fueraDeEscenario ? 'HINTS no aplicable fuera del síndrome vestibular agudo' : (r.central ? `patrón central (${r.n || 1} hallazgo${(r.n || 1) > 1 ? 's' : ''})` : 'patrón periférico en los tres pasos')
  },

  {
    key: 'nistagmo-posicional', title: 'Nistagmo posicional: canal y maniobra', accent: '#3f6b52',
    subtitle: 'Que canal esta afectado y con que maniobra se trata',
    incompleteMsg: 'Elige la maniobra realizada y describe el nistagmo observado.',
    fields: [
      { name: 'maniobra', id: 'vv-np-m', type: 'select', label: 'Maniobra realizada', row: 'r1', options: [
        { v: 'dix', t: 'Dix-Hallpike' },
        { v: 'roll', t: 'Rotación en decúbito supino' }
      ] },
      { name: 'direccion', id: 'vv-np-d', type: 'select', label: 'Dirección del nistagmo observado', row: 'r1', options: [
        { v: 'arribaTorsional', t: 'Hacia arriba y torsional' },
        { v: 'abajo', t: 'Hacia abajo' },
        { v: 'geotropico', t: 'Horizontal, hacia el suelo' },
        { v: 'apogeotropico', t: 'Horizontal, hacia el techo' },
        { v: 'ninguno', t: 'No se provoca nistagmo' }
      ] },
      { name: 'latencia', id: 'vv-np-l', type: 'select', label: 'Latencia hasta que aparece', row: 'r2', options: [
        { v: 'si', t: 'Unos segundos de latencia' },
        { v: 'no', t: 'Inmediato, sin latencia' }
      ] },
      { name: 'duracion', id: 'vv-np-u', type: 'select', label: 'Duración del nistagmo', row: 'r2', options: [
        { v: 'corta', t: 'Menos de un minuto' },
        { v: 'larga', t: 'Más de un minuto' }
      ] },
      { name: 'agota', id: 'vv-np-a', type: 'checkbox', label: 'Se agota al repetir la maniobra' },
      { type: 'note', text: 'El vértigo posicional paroxístico benigno se diagnostica y se trata en la misma consulta, sin analítica, sin imagen y sin fármacos. Lo único que se necesita es colocar bien la cabeza y mirar los ojos, idealmente con gafas que impidan la fijación visual, porque la fijación enmascara el nistagmo. El canal posterior es el afectado en la gran mayoría de los casos, pero si el Dix-Hallpike es negativo hay que explorar el horizontal: omitir ese paso es la razón por la que algunos casos se etiquetan de resistentes.' }
    ],
    compute(v) {
      if (!v.maniobra || !v.direccion || !v.latencia || !v.duracion) return null;
      const atipico = [];
      if (v.direccion === 'abajo') atipico.push('el nistagmo bate hacia ABAJO');
      if (v.latencia === 'no' && v.direccion !== 'ninguno') atipico.push('no tiene latencia');
      if (v.duracion === 'larga' && v.direccion !== 'ninguno') atipico.push('dura más de un minuto');
      if (!v.agota && v.direccion !== 'ninguno') atipico.push('no se agota al repetir');
      let canal = null, maniobraTx = null, resultado;
      if (v.direccion === 'ninguno') {
        resultado = 'negativa';
      } else if (v.direccion === 'abajo') {
        resultado = 'central';
      } else if (v.maniobra === 'dix' && v.direccion === 'arribaTorsional') {
        resultado = 'posterior'; canal = 'POSTERIOR'; maniobraTx = 'maniobra de EPLEY del lado que provoco el nistagmo';
      } else if (v.maniobra === 'roll' && (v.direccion === 'geotropico' || v.direccion === 'apogeotropico')) {
        resultado = 'horizontal'; canal = 'HORIZONTAL';
        maniobraTx = v.direccion === 'geotropico'
          ? 'maniobra de rotación completa (tipo barbacoa) o de Gufoni, hacia el lado sano'
          : 'primero convertir la forma que bate hacia el techo en la que bate hacia el suelo, y después tratarla como tal';
      } else {
        resultado = 'discordante';
      }
      return { resultado, canal, maniobraTx, atipico, maniobra: v.maniobra, direccion: v.direccion, agota: !!v.agota };
    },
    format: r => {
      let s = '';
      if (r.resultado === 'posterior') {
        s += `<strong style="color:#3f6b52;">Canal ${r.canal}: es el vértigo posicional más frecuente, en torno a 8 de cada 10 casos.</strong> El nistagmo hacia arriba y torsional en el Dix-Hallpike es su firma. Tratamiento: ${r.maniobraTx}, que se puede repetir en la misma sesión.`;
      } else if (r.resultado === 'horizontal') {
        s += `<strong style="color:#8a6a1f;">Canal ${r.canal}.</strong> Es minoritario y se pasa por alto porque no se explora: el Dix-Hallpike no lo detecta. Tratamiento: ${r.maniobraTx}. La maniobra de Epley NO sirve aquí.`;
      } else if (r.resultado === 'central') {
        s += '<strong style="color:#8c3a34;">Nistagmo posicional que bate HACIA ABAJO: sospecha de causa CENTRAL.</strong> No corresponde repetir maniobras de reposición sino pedir imagen de fosa posterior y de la unión craneocervical.';
      } else if (r.resultado === 'negativa') {
        s += '<strong>Maniobra negativa.</strong> ';
        s += r.maniobra === 'dix'
          ? 'Un Dix-Hallpike negativo NO cierra el caso: hay que explorar el canal HORIZONTAL con la maniobra de rotación en decúbito, que es el paso que más se omite y la razón por la que algunos casos se etiquetan de resistentes.'
          : 'Con ambas maniobras negativas y una historia compatible, cabe que el vértigo ya se haya resuelto o que el diagnóstico sea otro. Conviene reevaluar el síndrome por tiempo y desencadenante.';
      } else {
        s += '<strong style="color:#8a6a1f;">El nistagmo descrito no encaja con la maniobra realizada.</strong> Un nistagmo horizontal en el Dix-Hallpike sugiere afectación del canal horizontal, y uno torsional en la rotación en decúbito obliga a repetir la exploración con cuidado. Conviene rehacer las maniobras, a ser posible con gafas que impidan la fijación visual.';
      }
      if (r.atipico.length && r.resultado !== 'negativa') {
        s += `<br><strong style="color:#8c3a34;">Rasgos ATÍPICOS (${r.atipico.length}):</strong> ${r.atipico.join(', ')}. Cualquiera de ellos obliga a pensar en un nistagmo posicional CENTRAL y a pedir imagen de fosa posterior en lugar de insistir con maniobras.`;
      } else if (r.resultado === 'posterior' || r.resultado === 'horizontal') {
        s += '<br><span style="color:#3f6b52;">El nistagmo tiene todos los rasgos típicos: latencia, duración breve y agotamiento al repetir.</span>';
      }
      s += '<br><span style="opacity:.75;">En el caso típico NO hay que pedir imagen ni dar sedantes vestibulares: no curan y además retrasan la compensación. Conviene advertir de que puede quedar inestabilidad unos días y de que el cuadro RECURRE en una parte de los pacientes.</span>';
      return s;
    },
    fragment: r => {
      if (r.resultado === 'posterior') return 'canal posterior, maniobra de Epley';
      if (r.resultado === 'horizontal') return 'canal horizontal, maniobra propia';
      if (r.resultado === 'central') return 'nistagmo posicional de perfil central';
      if (r.resultado === 'negativa') return 'maniobra negativa';
      return 'nistagmo discordante con la maniobra';
    }
  }
];
