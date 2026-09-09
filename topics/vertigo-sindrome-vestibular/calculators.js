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
    key: 'sindrome-vestibular', title: 'Que sindrome vestibular es', accent: '#4a7a5c',
    subtitle: 'Clasificar por tiempo y desencadenante, no por como lo describe el paciente',
    incompleteMsg: 'Elige la duracion, el desencadenante y si hay o no una enfermedad general que explique el cuadro.',
    fields: [
      { name: 'sistemico', id: 'vv-sv-x', type: 'select', label: 'Hay una enfermedad general que pueda explicar el mareo (anemia, sepsis, hipoglucemia, farmaco nuevo, intoxicacion)?', options: [
        { v: 'no', t: 'No, o ya se ha descartado' },
        { v: 'si', t: 'Si, hay una causa sistemica probable' }
      ] },
      { name: 'duracion', id: 'vv-sv-d', type: 'select', label: 'Cuanto dura cada episodio', row: 'r2', options: [
        { v: 'segundos', t: 'Segundos, menos de un minuto' },
        { v: 'minutosHoras', t: 'De minutos a horas' },
        { v: 'continuo', t: 'Continuo desde hace mas de 24 horas' }
      ] },
      { name: 'desencadenante', id: 'vv-sv-t', type: 'select', label: 'Que lo desencadena', row: 'r2', options: [
        { v: 'ninguno', t: 'Nada: empieza solo' },
        { v: 'posicion', t: 'Girarse en la cama, tumbarse o mirar arriba' },
        { v: 'bipedestacion', t: 'Ponerse de pie' },
        { v: 'movimiento', t: 'Empeora al mover la cabeza, pero ya estaba' }
      ] },
      { name: 'nistagmo', id: 'vv-sv-n', type: 'checkbox', label: 'Hay nistagmo espontaneo en la exploracion', row: 'r3' },
      { name: 'marcha', id: 'vv-sv-m', type: 'checkbox', label: 'NO puede sentarse ni caminar sin ayuda', row: 'r3' },
      { type: 'note', text: 'La pregunta clasica de COMO es el mareo ha demostrado no discriminar: los pacientes cambian de respuesta al repreguntar y la descripcion no separa una neuritis de un infarto cerebeloso. Lo que si separa son la DURACION y el DESENCADENANTE, y de ellos sale la exploracion que hay que hacer. Antes de nada hay que descartar el mareo sintomatico de una enfermedad general, donde buscar un nistagmo es perder el tiempo.' }
    ],
    compute(v) {
      if (!v.sistemico || !v.duracion || !v.desencadenante) return null;
      if (v.sistemico === 'si') return { tipo: 'SISTEMICO', marcha: !!v.marcha, nistagmo: !!v.nistagmo };
      let tipo;
      if (v.duracion === 'continuo') tipo = 'AGUDO CONTINUO';
      else if (v.desencadenante === 'posicion' || v.desencadenante === 'bipedestacion') tipo = 'EPISODICO PROVOCADO';
      else tipo = 'EPISODICO ESPONTANEO';
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
        let s = '<strong style="color:#3d5a73;">Antes de clasificar nada: hay una enfermedad general que puede explicar el mareo.</strong> Ese escenario no entra en la clasificacion vestibular y buscar alli un nistagmo es perder el tiempo. Toca glucemia capilar, hemograma, iones, funcion renal, electrocardiograma y revision de la lista de FARMACOS, que rinde mas que muchas pruebas.';
        if (r.marcha) s += '<br><strong style="color:#8c3a34;">Aun asi, la incapacidad para sentarse o caminar sin ayuda es una bandera roja</strong> que hay que explicar por si misma y no atribuir sin mas a la enfermedad de base.';
        return s;
      }
      let s = `<strong>Sindrome ${r.tipo}.</strong> `;
      if (r.tipo === 'AGUDO CONTINUO') {
        s += 'La unica pregunta relevante es neuritis vestibular o ICTUS de fosa posterior. La exploracion que corresponde es el <strong>HINTS ampliado</strong>, mas la marcha y la busqueda de cualquier otra focalidad.';
        if (!r.nistagmo) s += '<br><strong style="color:#8a6a1f;">Atencion: no se ha registrado nistagmo espontaneo.</strong> El HINTS se valido en pacientes con vertigo continuo Y nistagmo. Sin nistagmo no ha sido validado y su resultado no significa nada, de modo que aqui manda el resto de la exploracion y el perfil de riesgo vascular.';
        else s += '<br><span style="color:#3f6b52;">Hay nistagmo espontaneo: el escenario es el adecuado para aplicar el HINTS.</span>';
      } else if (r.tipo === 'EPISODICO PROVOCADO') {
        if (r.ortostatico) s += 'Desencadenado por ponerse de pie: lo primero es medir la <strong>TENSION ARTERIAL en decubito y tras 3 minutos de bipedestacion</strong>, y hacer un electrocardiograma. Es la prueba mas barata del tema y una de las mas rentables.';
        else s += 'Desencadenado por cambios de posicion de la cabeza: corresponde <strong>DIX-HALLPIKE</strong> de los dos lados y, si es negativo, la <strong>maniobra de rotacion en decubito</strong> para el canal horizontal, que es la que mas se omite.';
        if (!r.breve) s += '<br><span style="opacity:.75;">Los episodios de un vertigo posicional tipico duran SEGUNDOS. Si duran mas de un minuto, hay que replantear el diagnostico.</span>';
      } else {
        s += 'Crisis que empiezan sin desencadenante: el diferencial es enfermedad de Meniere (de 20 minutos a 12 horas, con hipoacusia documentada), migra&#241;a vestibular (de 5 minutos a 72 horas, hay que preguntar por cefalea y fotofobia DURANTE la crisis) y <strong style="color:#8c3a34;">ACCIDENTE ISQUEMICO TRANSITORIO vertebrobasilar</strong>, que puede manifestarse solo como vertigo.';
        s += '<br><span style="opacity:.75;">Toca audiometria si se sospecha Meniere, y si hay factores de riesgo vascular hay que manejarlo con el circuito URGENTE del accidente isquemico transitorio, no de forma diferida.</span>';
      }
      if (r.marcha) s += '<br><strong style="color:#8c3a34;">BANDERA ROJA: no puede sentarse ni caminar sin ayuda.</strong> Es el dato mas util a pie de cama y el que menos entrenamiento exige. Un paciente que no se sostiene no tiene una laberintitis: hay que manejarlo como un ictus de fosa posterior.';
      s += '<br><span style="opacity:.75;">Y conviene recordar por que se clasifica asi: la pregunta de como es el mareo no discrimina, porque los pacientes cambian de respuesta al repreguntar.</span>';
      return s;
    },
    fragment: r => r.tipo === 'SISTEMICO' ? 'mareo sintomatico de enfermedad general' : `sindrome ${r.tipo.toLowerCase()}`
  },

  {
    key: 'hints', title: 'HINTS ampliado', accent: '#8c3a34',
    subtitle: 'Tres pasos oculomotores y la audicion en el sindrome vestibular agudo',
    incompleteMsg: 'Confirma primero que se trata de un sindrome vestibular agudo y responde a los tres pasos de la exploracion.',
    fields: [
      { name: 'escenario', id: 'vv-hi-e', type: 'select', label: 'Vertigo CONTINUO de mas de 24 horas con nistagmo espontaneo?', options: [
        { v: 'si', t: 'Si: es un sindrome vestibular agudo' },
        { v: 'no', t: 'No: es episodico o no hay nistagmo' }
      ] },
      { name: 'impulso', id: 'vv-hi-i', type: 'select', label: 'Prueba del impulso cefalico', row: 'r2', options: [
        { v: 'anormal', t: 'ANORMAL: aparece sacada de correccion' },
        { v: 'normal', t: 'NORMAL: el ojo se queda en el objetivo' }
      ] },
      { name: 'nistagmo', id: 'vv-hi-n', type: 'select', label: 'Direccion del nistagmo con la mirada', row: 'r2', options: [
        { v: 'unidireccional', t: 'Siempre hacia el mismo lado, horizontal' },
        { v: 'cambiante', t: 'Cambia de direccion con la mirada' },
        { v: 'vertical', t: 'Puramente vertical o torsional' }
      ] },
      { name: 'skew', id: 'vv-hi-s', type: 'select', label: 'Desviacion vertical al tapar y destapar alterno', row: 'r3', options: [
        { v: 'ausente', t: 'Ausente' },
        { v: 'presente', t: 'Presente' }
      ] },
      { name: 'audicion', id: 'vv-hi-a', type: 'select', label: 'Hipoacusia de nueva aparicion', row: 'r3', options: [
        { v: 'no', t: 'No' },
        { v: 'si', t: 'Si' }
      ] },
      { name: 'marcha', id: 'vv-hi-m', type: 'checkbox', label: 'NO puede sentarse ni caminar sin ayuda' },
      { type: 'note', text: 'En manos entrenadas, esta exploracion de tres pasos es MAS sensible que la resonancia con difusion realizada de forma precoz para detectar el ictus de fosa posterior. Su valor depende por completo del escenario: solo se ha validado en el sindrome vestibular agudo, con vertigo continuo y nistagmo. Aplicarla a un mareo episodico o a un paciente sin nistagmo no aporta informacion y puede tranquilizar en falso.' }
    ],
    compute(v) {
      if (!v.escenario || !v.impulso || !v.nistagmo || !v.skew || !v.audicion) return null;
      if (v.escenario === 'no') return { fueraDeEscenario: true, marcha: !!v.marcha };
      const centrales = [];
      if (v.impulso === 'normal') centrales.push('impulso cefalico NORMAL');
      if (v.nistagmo === 'cambiante') centrales.push('nistagmo que CAMBIA de direccion');
      if (v.nistagmo === 'vertical') centrales.push('nistagmo vertical o torsional puro');
      if (v.skew === 'presente') centrales.push('desviacion vertical presente');
      if (v.audicion === 'si') centrales.push('hipoacusia de nueva aparicion');
      const marcha = !!v.marcha;
      const central = centrales.length > 0 || marcha;
      return { central, centrales, marcha, n: centrales.length };
    },
    format: r => {
      if (r.fueraDeEscenario) {
        let s = '<strong style="color:#8a6a1f;">El HINTS no se aplica aqui.</strong> Solo esta validado en el SINDROME VESTIBULAR AGUDO, es decir con vertigo continuo de mas de 24 horas Y nistagmo espontaneo. En un mareo episodico o en un paciente sin nistagmo, su resultado no significa nada y puede tranquilizar en falso, que es el peor de los desenlaces posibles.';
        s += '<br><span style="opacity:.75;">Lo que corresponde es volver a clasificar por tiempo y desencadenante: Dix-Hallpike si es posicional, tension en bipedestacion si aparece al levantarse, e historia dirigida mas estudio vascular si es episodico espontaneo.</span>';
        if (r.marcha) s += '<br><strong style="color:#8c3a34;">Y con todo, la incapacidad para sentarse o caminar sin ayuda es una bandera roja</strong> que obliga a imagen de fosa posterior sea cual sea el sindrome.';
        return s;
      }
      let s;
      if (r.central) {
        s = '<strong style="color:#8c3a34;">Patron CENTRAL: hay que manejarlo como un ictus de fosa posterior.</strong> ';
        if (r.n) s += `Hallazgos centrales: ${r.centrales.join('; ')}. Basta UNO solo para que el patron sea central. `;
        if (r.marcha) s += '<strong>Y no puede sentarse ni caminar sin ayuda</strong>, que es la bandera roja mas util a pie de cama. ';
        s += '<br>Toca activar la via de ICTUS: resonancia con difusion, estudio de vasos buscando estenosis y DISECCION, y valoracion de reperfusion si esta en ventana.';
        s += '<br><span style="opacity:.75;">Dos advertencias sobre la imagen: una tomografia normal no descarta nada, porque apenas ve la fosa posterior; y una resonancia PRECOZ normal tampoco, porque en las primeras 24 a 48 horas deja escapar una parte de los infartos peque&#241;os de esa region. Con exploracion central y resonancia precoz normal, hay que repetirla y no dar el alta.</span>';
        s += '<br><span style="opacity:.75;">Vigilar el EDEMA cerebeloso durante las primeras 48 a 72 horas: un deterioro brusco del nivel de conciencia obliga a repetir la imagen, y la craniectomia o el drenaje ventricular pueden salvar la vida.</span>';
      } else {
        s = '<strong style="color:#3f6b52;">Patron PERIFERICO en los tres pasos:</strong> impulso cefalico anormal, nistagmo unidireccional y sin desviacion vertical, y sin hipoacusia nueva. Es el unico patron tranquilizador, y exige que se cumplan los tres a la vez.';
        s += '<br>Compatible con NEURITIS VESTIBULAR: corticoides en fase precoz, hidratacion, antiemeticos, sedantes vestibulares solo unos POCOS DIAS y rehabilitacion vestibular precoz, que es lo que mas acelera la compensacion.';
        s += '<br><span style="opacity:.75;">Esto no exime de explorar la marcha ni de buscar otra focalidad, ni de reevaluar si la evolucion no es la esperada. Y si hay cefalea o cervicalgia intensas de inicio brusco, hay que descartar una diseccion aunque el HINTS sea periferico.</span>';
      }
      return s;
    },
    fragment: r => r.fueraDeEscenario ? 'HINTS no aplicable fuera del sindrome vestibular agudo' : (r.central ? `patron central (${r.n || 1} hallazgo${(r.n || 1) > 1 ? 's' : ''})` : 'patron periferico en los tres pasos')
  },

  {
    key: 'nistagmo-posicional', title: 'Nistagmo posicional: canal y maniobra', accent: '#3f6b52',
    subtitle: 'Que canal esta afectado y con que maniobra se trata',
    incompleteMsg: 'Elige la maniobra realizada y describe el nistagmo observado.',
    fields: [
      { name: 'maniobra', id: 'vv-np-m', type: 'select', label: 'Maniobra realizada', row: 'r1', options: [
        { v: 'dix', t: 'Dix-Hallpike' },
        { v: 'roll', t: 'Rotacion en decubito supino' }
      ] },
      { name: 'direccion', id: 'vv-np-d', type: 'select', label: 'Direccion del nistagmo observado', row: 'r1', options: [
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
      { name: 'duracion', id: 'vv-np-u', type: 'select', label: 'Duracion del nistagmo', row: 'r2', options: [
        { v: 'corta', t: 'Menos de un minuto' },
        { v: 'larga', t: 'Mas de un minuto' }
      ] },
      { name: 'agota', id: 'vv-np-a', type: 'checkbox', label: 'Se agota al repetir la maniobra' },
      { type: 'note', text: 'El vertigo posicional paroxistico benigno se diagnostica y se trata en la misma consulta, sin analitica, sin imagen y sin farmacos. Lo unico que se necesita es colocar bien la cabeza y mirar los ojos, idealmente con gafas que impidan la fijacion visual, porque la fijacion enmascara el nistagmo. El canal posterior es el afectado en la gran mayoria de los casos, pero si el Dix-Hallpike es negativo hay que explorar el horizontal: omitir ese paso es la razon por la que algunos casos se etiquetan de resistentes.' }
    ],
    compute(v) {
      if (!v.maniobra || !v.direccion || !v.latencia || !v.duracion) return null;
      const atipico = [];
      if (v.direccion === 'abajo') atipico.push('el nistagmo bate hacia ABAJO');
      if (v.latencia === 'no' && v.direccion !== 'ninguno') atipico.push('no tiene latencia');
      if (v.duracion === 'larga' && v.direccion !== 'ninguno') atipico.push('dura mas de un minuto');
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
          ? 'maniobra de rotacion completa (tipo barbacoa) o de Gufoni, hacia el lado sano'
          : 'primero convertir la forma que bate hacia el techo en la que bate hacia el suelo, y despues tratarla como tal';
      } else {
        resultado = 'discordante';
      }
      return { resultado, canal, maniobraTx, atipico, maniobra: v.maniobra, direccion: v.direccion, agota: !!v.agota };
    },
    format: r => {
      let s = '';
      if (r.resultado === 'posterior') {
        s += `<strong style="color:#3f6b52;">Canal ${r.canal}: es el vertigo posicional mas frecuente, en torno a 8 de cada 10 casos.</strong> El nistagmo hacia arriba y torsional en el Dix-Hallpike es su firma. Tratamiento: ${r.maniobraTx}, que se puede repetir en la misma sesion.`;
      } else if (r.resultado === 'horizontal') {
        s += `<strong style="color:#8a6a1f;">Canal ${r.canal}.</strong> Es minoritario y se pasa por alto porque no se explora: el Dix-Hallpike no lo detecta. Tratamiento: ${r.maniobraTx}. La maniobra de Epley NO sirve aqui.`;
      } else if (r.resultado === 'central') {
        s += '<strong style="color:#8c3a34;">Nistagmo posicional que bate HACIA ABAJO: sospecha de causa CENTRAL.</strong> No corresponde repetir maniobras de reposicion sino pedir imagen de fosa posterior y de la union craneocervical.';
      } else if (r.resultado === 'negativa') {
        s += '<strong>Maniobra negativa.</strong> ';
        s += r.maniobra === 'dix'
          ? 'Un Dix-Hallpike negativo NO cierra el caso: hay que explorar el canal HORIZONTAL con la maniobra de rotacion en decubito, que es el paso que mas se omite y la razon por la que algunos casos se etiquetan de resistentes.'
          : 'Con ambas maniobras negativas y una historia compatible, cabe que el vertigo ya se haya resuelto o que el diagnostico sea otro. Conviene reevaluar el sindrome por tiempo y desencadenante.';
      } else {
        s += '<strong style="color:#8a6a1f;">El nistagmo descrito no encaja con la maniobra realizada.</strong> Un nistagmo horizontal en el Dix-Hallpike sugiere afectacion del canal horizontal, y uno torsional en la rotacion en decubito obliga a repetir la exploracion con cuidado. Conviene rehacer las maniobras, a ser posible con gafas que impidan la fijacion visual.';
      }
      if (r.atipico.length && r.resultado !== 'negativa') {
        s += `<br><strong style="color:#8c3a34;">Rasgos ATIPICOS (${r.atipico.length}):</strong> ${r.atipico.join(', ')}. Cualquiera de ellos obliga a pensar en un nistagmo posicional CENTRAL y a pedir imagen de fosa posterior en lugar de insistir con maniobras.`;
      } else if (r.resultado === 'posterior' || r.resultado === 'horizontal') {
        s += '<br><span style="color:#3f6b52;">El nistagmo tiene todos los rasgos tipicos: latencia, duracion breve y agotamiento al repetir.</span>';
      }
      s += '<br><span style="opacity:.75;">En el caso tipico NO hay que pedir imagen ni dar sedantes vestibulares: no curan y ademas retrasan la compensacion. Conviene advertir de que puede quedar inestabilidad unos dias y de que el cuadro RECURRE en una parte de los pacientes.</span>';
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
