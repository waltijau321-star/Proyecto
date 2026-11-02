// topics/soporte-vital-avanzado/calculators.js - Las cuatro decisiones del algoritmo: por que rama
// voy, cuando doy la adrenalina, cuanta energia pongo y cuando paro.
// Fuente: Parte 9 de las guias de la American Heart Association de 2025 (Wigginton JG, et al.
// Circulation 2025;152(suppl 2):S538-S577, doi:10.1161/CIR.0000000000001376).

export const calculators = [
  {
    key: 'rama-algoritmo', title: 'Rama del algoritmo', accent: '#8c2e2e',
    subtitle: 'La única pregunta que importa al principio',
    incompleteMsg: 'Elige el ritmo que ves en el monitor.',
    fields: [
      { name: 'ritmo', id: 'sva-r1', type: 'select', label: 'Ritmo en el monitor', options: [
        { value: '', label: 'Elegir...' },
        { value: 'fv', label: 'Fibrilación ventricular' },
        { value: 'tvsp', label: 'Taquicardia ventricular sin pulso' },
        { value: 'asistolia', label: 'Asistolia' },
        { value: 'aesp', label: 'Actividad eléctrica sin pulso' },
        { value: 'plano', label: 'Trazado plano, de dudosa interpretación' }
      ] },
      { name: 'refractaria', id: 'sva-r2', type: 'checkbox', label: 'Ya se han dado tres o más descargas sin respuesta' },
      { name: 'causa', id: 'sva-r3', type: 'checkbox', label: 'Hay una causa reversible sospechada' },
      { type: 'note', text: 'La calculadora ordena la secuencia; no sustituye al algoritmo impreso. Y recuerda lo que la guía de 2025 pone por delante de todo: valorar la estabilidad clínica y la <strong>perfusión de órgano</strong>, no solo el trazado.' }
    ],
    compute(v) {
      if (!v.ritmo) return null;
      const desfib = v.ritmo === 'fv' || v.ritmo === 'tvsp';
      const nombres = {
        fv: 'fibrilación ventricular', tvsp: 'taquicardia ventricular sin pulso',
        asistolia: 'asistolia', aesp: 'actividad eléctrica sin pulso',
        plano: 'trazado plano de dudosa interpretación'
      };
      const pasos = [];
      if (v.ritmo === 'plano') {
        pasos.push('ANTES de tratarlo como asistolia: comprobar derivaciones, ganancia y más de una derivación');
        pasos.push('Una fibrilación ventricular fina puede parecer una línea plana, y el tratamiento es el contrario');
      }
      if (desfib) {
        pasos.push('DESFIBRILAR de inmediato');
        pasos.push('Reanudar compresiones sin comprobar el pulso');
        pasos.push('Adrenalina 1 mg DESPUÉS de los intentos iniciales de desfibrilacion, y cada 3 a 5 min');
        if (v.refractaria) pasos.push('Valorar amiodarona o lidocaina: pueden considerarse si no responde a la desfibrilacion');
      } else {
        pasos.push('Compresiones de calidad con el mínimo de interrupciones');
        pasos.push('Adrenalina 1 mg CUANTO ANTES, y después cada 3 a 5 min');
        pasos.push('No desfibrilar: la descarga no tiene papel en este ritmo');
      }
      pasos.push('Repasar las causas reversibles en voz alta');
      if (v.causa) pasos.push('Tratar la causa sospechada de forma específica, que es donde más se gana');
      pasos.push('No administrar calcio, bicarbonato ni magnesio de rutina');
      return { ritmo: v.ritmo, nombre: nombres[v.ritmo], desfib, dudoso: v.ritmo === 'plano', pasos, refractaria: !!v.refractaria };
    },
    format(r) {
      let s = r.desfib
        ? `<strong>${r.nombre}: rama DESFIBRILABLE.</strong> Lo que salva es la descarga, y cada minuto de retraso cuenta.`
        : `<strong>${r.nombre}: rama NO desfibrilable.</strong> Aquí el resultado depende de encontrar la causa, no del fármaco.`;
      if (r.dudoso) {
        s = '<strong style="color:#8c3a34;">Antes de decidir la rama, confirma el trazado.</strong> Una fibrilación ventricular fina se confunde con una asistolia, y se trata justo al revés.<br>' + s;
      }
      s += '<br><br><strong>Secuencia:</strong><ol style="margin:6px 0 0 18px;padding:0;">';
      s += r.pasos.map(p => `<li style="margin:3px 0;">${p}</li>`).join('');
      s += '</ol>';
      if (r.desfib && r.refractaria) {
        s += '<br><span style="opacity:.85;">En la fibrilación refractaria, la guía de 2025 señala que la utilidad del <strong>cambio de vector</strong> y de la <strong>desfibrilacion secuencial doble</strong> NO esta establecida, aunque merecen más investigación. Lo que si esta claro es que no deben restar tiempo a compresiones de calidad.</span>';
      }
      if (!r.desfib) {
        s += '<br><span style="opacity:.85;">Ojo con la <strong>seudoactividad eléctrica sin pulso</strong>: si en la ecografía hay contracción aunque no se palpe pulso, el pronóstico es mejor que en la ausencia real de actividad.</span>';
      }
      return s;
    },
    fragment: r => `${r.nombre}: rama ${r.desfib ? 'desfibrilable, descarga inmediata' : 'no desfibrilable, adrenalina precoz y buscar la causa'}`
  },

  {
    key: 'adrenalina-momento', title: 'Adrenalina: cuando y por donde', accent: '#5a4a8c',
    subtitle: 'El momento cambia según el ritmo, y la via cambio en 2025',
    incompleteMsg: 'Elige el tipo de ritmo.',
    fields: [
      { name: 'tipo', id: 'sva-a1', type: 'select', label: 'Tipo de ritmo', options: [
        { value: '', label: 'Elegir...' },
        { value: 'desfib', label: 'Desfibrilable (fibrilación o taquicardia sin pulso)' },
        { value: 'nodesfib', label: 'No desfibrilable (asistolia o actividad sin pulso)' }
      ] },
      { name: 'descargas', id: 'sva-a2', type: 'number', step: '1', required: false, label: 'Descargas ya administradas (vacio si ninguna)', placeholder: 'ej. 0', row: true },
      { name: 'ultima', id: 'sva-a3', type: 'number', step: '1', required: false, label: 'Min desde la última dosis (vacio si ninguna)', placeholder: 'ej. 4', row: true },
      { name: 'acceso', id: 'sva-a4', type: 'select', label: 'Acceso disponible', options: [
        { value: 'ninguno', label: 'Todavía ninguno' },
        { value: 'iv', label: 'Intravenoso' },
        { value: 'io', label: 'Intraoseo' }
      ] }
    ],
    compute(v) {
      if (!v.tipo) return null;
      const desfib = v.tipo === 'desfib';
      const descargas = v.descargas === null ? 0 : v.descargas;
      let momento, procede;
      if (!desfib) {
        momento = 'Es razonable administrarla CUANTO ANTES. En este ritmo no hay descarga que dar, de modo que nada justifica esperar.';
        procede = true;
      } else if (descargas < 1) {
        momento = 'Todavía NO. Es razonable administrarla después de los intentos INICIALES de desfibrilacion: lo que reinicia el corazón aquí es la descarga, y la adrenalina no debe retrasarla.';
        procede = false;
      } else {
        momento = `Ya procede por el ritmo: se han dado ${descargas} descarga${descargas === 1 ? '' : 's'}, de modo que los intentos iniciales están hechos.`;
        procede = true;
      }
      // El titular tiene que tener en cuenta las DOS condiciones, la del ritmo y la del intervalo.
      // Con una sola de ellas salia un "adrenalina ahora" encabezando un texto que decia justo
      // debajo que aun faltaban minutos para la siguiente dosis.
      let intervalo = null, toca = true;
      if (v.ultima !== null) {
        if (v.ultima < 3) { intervalo = `Han pasado ${v.ultima} min: aun no toca, el intervalo es de 3 a 5 min.`; toca = false; }
        else if (v.ultima <= 5) intervalo = `Han pasado ${v.ultima} min: toca la siguiente dosis de 1 mg.`;
        else intervalo = `Han pasado ${v.ultima} min: la dosis va RETRASADA. Asignar a alguien el control del tiempo.`;
      }
      const urgente = procede && toca;
      let via;
      if (v.acceso === 'iv') via = 'Por la via intravenosa, que es la de primera elección.';
      else if (v.acceso === 'io') via = 'Por la intraósea, que es la alternativa razonable cuando la intravenosa no es viable o se retrasa.';
      else via = 'Intentar primero un acceso INTRAVENOSO; si no es viable o se retrasa, el intraoseo es una alternativa razonable.';
      return { desfib, descargas, momento, procede, toca, urgente, intervalo, via, sinAcceso: v.acceso === 'ninguno' };
    },
    format(r) {
      const titular = r.urgente
        ? 'Adrenalina 1 mg AHORA.'
        : (r.procede ? 'Adrenalina: la siguiente dosis aun no toca.' : 'Adrenalina: todavía no.');
      let s = `<strong>${titular}</strong><br>${r.momento}`;
      if (r.intervalo) s += `<br><strong>${r.intervalo}</strong>`;
      s += `<br><br><strong>Via:</strong> ${r.via}`;
      if (r.sinAcceso) {
        s += '<br><span style="opacity:.85;">Es el orden inverso al que mucha gente ha interiorizado: la guía de 2025 mantiene el <strong>intravenoso como primera elección</strong> y el intraoseo como alternativa, no al revés.</span>';
      }
      s += '<br><span style="opacity:.75;">La administración de fármacos por un <strong>tubo endotraqueal</strong> ya colocado es uno de los procedimientos obsoletos cuyas recomendaciones se han retirado en 2025. No es una via de rescate.</span>';
      return s;
    },
    fragment: r => (r.urgente
      ? 'adrenalina 1 mg ahora, y cada 3 a 5 min'
      : (r.procede ? 'adrenalina: no han pasado aun los 3 a 5 min desde la última dosis' : 'adrenalina aun no: primero los intentos iniciales de desfibrilacion'))
  },

  {
    key: 'energia-descarga', title: 'Energía de la descarga', accent: '#8a5a2e',
    subtitle: 'Sincronizada o no, y con cuanta energía',
    incompleteMsg: 'Elige el escenario.',
    fields: [
      { name: 'esc', id: 'sva-e1', type: 'select', label: 'Escenario', options: [
        { value: '', label: 'Elegir...' },
        { value: 'parada', label: 'Parada con fibrilación o taquicardia ventricular sin pulso' },
        { value: 'tvpoli', label: 'Taquicardia ventricular POLIMORFA' },
        { value: 'fa', label: 'Cardioversión de fibrilación auricular' },
        { value: 'flutter', label: 'Cardioversión de flutter auricular' },
        { value: 'tsv', label: 'Cardioversión de taquicardia supraventricular' },
        { value: 'tvmono', label: 'Cardioversión de taquicardia ventricular monomorfa CON pulso' }
      ] },
      { name: 'onda', id: 'sva-e2', type: 'select', label: 'Tipo de onda del equipo', options: [
        { value: 'bifasica', label: 'Bifasica' },
        { value: 'monofasica', label: 'Monofasica' },
        { value: 'desconocida', label: 'No lo se' }
      ] },
      { name: 'primera', id: 'sva-e3', type: 'checkbox', label: 'Es la PRIMERA descarga de este episodio' }
    ],
    compute(v) {
      if (!v.esc) return null;
      const sincronizada = v.esc === 'fa' || v.esc === 'flutter' || v.esc === 'tsv' || v.esc === 'tvmono';
      let energia, nota = null, alerta = null;
      if (v.esc === 'parada') {
        energia = v.onda === 'monofasica'
          ? 'La energía máxima disponible del equipo monofásico.'
          : 'La energía que recomiende el fabricante del equipo; si no se conoce, la máxima disponible.';
      } else if (v.esc === 'tvpoli') {
        energia = 'Energía de desfibrilacion: la que recomiende el fabricante del equipo.';
        alerta = 'La taquicardia ventricular polimorfa se considera SIEMPRE inestable: desfibrilacion inmediata, porque el retraso empeora el resultado. Además, el sincronizador puede no capturar un QRS tan irregular.';
      } else if (v.esc === 'fa' || v.esc === 'flutter') {
        energia = 'Primera descarga de 200 J o más.';
        nota = 'Es el cambio de 2025 que conviene tener presente: en la cardioversión de fibrilación auricular y de flutter, una primera descarga de mayor energía (200 J o más) es preferible a empezar con energías menores.';
      } else if (v.esc === 'tsv') {
        energia = 'Energía baja, escalando si no revierte, según el equipo.';
        nota = 'Antes de cardiovertir una supraventricular estable, maniobras vagales y adenosina. La descarga se reserva para el paciente inestable o para el fracaso de lo anterior.';
      } else {
        energia = 'Cardioversión sincronizada, escalando la energía si no revierte.';
        nota = 'Monomorfa y CON pulso: mientras el paciente este estable hay tiempo para valorar fármacos. Si esta inestable, cardioversión sincronizada sin demora.';
      }
      return { esc: v.esc, sincronizada, energia, nota, alerta, primera: !!v.primera, onda: v.onda };
    },
    format(r) {
      let s = `<strong>${r.sincronizada ? 'Cardioversión SINCRONIZADA.' : 'Descarga NO sincronizada (desfibrilacion).'}</strong>`;
      s += `<br><strong>${r.energia}</strong>`;
      if (r.alerta) s += `<br><strong style="color:#8c3a34;">${r.alerta}</strong>`;
      if (r.nota) s += `<br><span style="opacity:.85;">${r.nota}</span>`;
      if ((r.esc === 'fa' || r.esc === 'flutter') && !r.primera) {
        s += '<br><span style="opacity:.85;">Si ya ha fallado una descarga, escalar energía y revisar lo demás: posición de los parches, contacto, sedación y si hay una causa de fondo que mantenga la arritmia.</span>';
      }
      if (r.onda === 'desconocida' && r.esc === 'parada') {
        s += '<br><span style="opacity:.85;">Si no se conoce la recomendación del fabricante, se usa la <strong>máxima energía disponible</strong>. La guía recomienda equipos de onda bifásica o monofásica para tratar las taquiarritmias que requieren descarga.</span>';
      }
      s += '<br><span style="opacity:.75;">Y lo que no depende de la energía: reanudar las compresiones inmediatamente después de la descarga, sin comprobar el pulso.</span>';
      return s;
    },
    fragment: r => `${r.sincronizada ? 'cardioversión sincronizada' : 'desfibrilacion no sincronizada'}. ${r.energia}`
  },

  {
    key: 'terminar-reanimacion', title: 'Terminar la reanimación', accent: '#7a4363',
    subtitle: 'La regla depende del ambito, y el carbonico no decide solo',
    incompleteMsg: 'Elige el ambito y la regla.',
    fields: [
      { name: 'regla', id: 'sva-t1', type: 'select', label: 'Ambito y regla que corresponde', options: [
        { value: '', label: 'Elegir...' },
        { value: 'svb', label: 'Extrahospitalaria, regla de soporte vital BÁSICO' },
        { value: 'sva', label: 'Extrahospitalaria, regla de soporte vital AVANZADO' },
        { value: 'universal', label: 'Extrahospitalaria, regla UNIVERSAL' },
        { value: 'intra', label: 'Intrahospitalaria' }
      ] },
      { name: 'vistaEquipo', id: 'sva-t2', type: 'checkbox', label: 'La parada la presencio el propio equipo de emergencias' },
      { name: 'vistaTestigo', id: 'sva-t3', type: 'checkbox', label: 'La parada la presencio un testigo' },
      { name: 'rcpTestigo', id: 'sva-t4', type: 'checkbox', label: 'Hubo reanimación por testigos antes de llegar' },
      { name: 'descarga', id: 'sva-t5', type: 'checkbox', label: 'Se ha administrado alguna descarga' },
      { name: 'rosc', id: 'sva-t6', type: 'checkbox', label: 'Se ha recuperado la circulación en algún momento' },
      { name: 'prolongar', id: 'sva-t7', type: 'checkbox', label: 'Hipotermia, intoxicación, embarazo, causa reversible en tratamiento o candidato a soporte extracorpóreo' },
      { name: 'etco2', id: 'sva-t8', type: 'checkbox', label: 'Se esta usando un carbonico espirado bajo como argumento para parar' },
      { type: 'note', text: 'Las reglas están diseñadas para no terminar la reanimación en alguien que todavía podría sobrevivir, de modo que se cumplen TODOS sus criterios o no se aplican.' }
    ],
    compute(v) {
      if (!v.regla) return null;
      const nombres = {
        svb: 'regla de soporte vital básico', sva: 'regla de soporte vital avanzado',
        universal: 'regla universal', intra: 'ambito intrahospitalario'
      };
      let criterios = [];
      if (v.regla === 'svb' || v.regla === 'universal') {
        criterios = [
          ['La parada NO fue presenciada por el equipo de emergencias', !v.vistaEquipo],
          ['NO se ha recuperado la circulación', !v.rosc],
          ['NO se ha administrado ninguna descarga', !v.descarga]
        ];
      } else if (v.regla === 'sva') {
        criterios = [
          ['La parada NO fue presenciada por nadie', !v.vistaEquipo && !v.vistaTestigo],
          ['NO hubo reanimación por testigos', !v.rcpTestigo],
          ['NO se ha recuperado la circulación', !v.rosc],
          ['NO se ha administrado ninguna descarga', !v.descarga]
        ];
      }
      const faltan = criterios.filter(c => !c[1]).map(c => c[0]);
      const cumple = criterios.length > 0 && faltan.length === 0;
      return {
        regla: v.regla, nombre: nombres[v.regla], intra: v.regla === 'intra',
        criterios, faltan, cumple, prolongar: !!v.prolongar, etco2: !!v.etco2
      };
    },
    format(r) {
      let s;
      if (r.intra) {
        s = '<strong>En el hospital no se aplican las reglas de terminacion extrahospitalarias.</strong> La decisión es clínica y del equipo: valora la duración y la calidad de la reanimación, el ritmo inicial, las causas reversibles ya descartadas y la situación previa del paciente.';
      } else if (r.cumple && r.prolongar) {
        // Un motivo para prolongar manda sobre la regla: sin esto, el titular decia que era
        // razonable terminar y tres lineas mas abajo que habia que seguir.
        s = `<strong>Se cumplen los criterios de la ${r.nombre}, pero NO es el momento de parar.</strong>`;
      } else if (r.cumple) {
        s = `<strong style="color:#8c3a34;">Se cumplen todos los criterios de la ${r.nombre}:</strong> es razonable plantear la terminacion de la reanimación.`;
      } else {
        s = `<strong>NO se cumplen todos los criterios de la ${r.nombre}: continuar la reanimación.</strong>`;
        s += `<br><span style="opacity:.85;">Falta que se cumpla: ${r.faltan.join('; ')}.</span>`;
      }
      if (r.prolongar) {
        s += '<br><strong style="color:#8c3a34;">Hay un motivo para PROLONGAR</strong> por encima de cualquier regla: hipotermia, intoxicación, embarazo, causa reversible en tratamiento o candidatura a soporte extracorpóreo.';
      }
      if (r.etco2) {
        s += '<br><strong style="color:#8c3a34;">El dióxido de carbono espirado NO debe usarse de forma aislada para terminar la reanimación.</strong> Es un aviso expreso de la edicion de 2025. Informa de la calidad de las compresiones y del pronóstico, pero no decide por si solo.';
      }
      s += '<br><span style="opacity:.75;">Para dimensionar la decisión: la supervivencia al alta tras parada extrahospitalaria atendida ronda el <strong>10%</strong>, y tras parada intrahospitalaria el <strong>24.2%</strong>, con buen resultado neurológico en cerca del <strong>85%</strong> de los supervivientes. Cuando se decide parar, la decisión se toma en equipo, se comunica y se documenta, y la atención a la familia y al propio equipo forma parte del cuidado.</span>';
      return s;
    },
    fragment(r) {
      if (r.intra) return 'ambito intrahospitalario: no hay regla de terminacion, es decisión del equipo';
      if (r.prolongar) return `hay un motivo para prolongar por encima de la ${r.nombre}`;
      return r.cumple ? `se cumplen los criterios de la ${r.nombre}` : `no se cumplen los criterios de la ${r.nombre}: continuar`;
    }
  }
];
