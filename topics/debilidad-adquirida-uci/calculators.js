// topics/debilidad-adquirida-uci/calculators.js
// 3 herramientas:
// - mrc-fuerza: suma de fuerza del Medical Research Council en los doce grupos musculares, con
//   el requisito de colaboracion, que es lo que mas se olvida.
// - riesgo-debilidad-uci: acumulacion de factores, separando los MODIFICABLES de los que no lo
//   son, porque la prevencion es lo unico que funciona.
// - diferencial-debilidad: busca las banderas que descartan la debilidad adquirida y orienta a
//   las causas que si tienen tratamiento propio.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

const GRUPOS = [
  ['hombro', 'Abduccion del hombro'],
  ['codo', 'Flexion del codo'],
  ['muneca', 'Extension de la mu&#241;eca'],
  ['cadera', 'Flexion de la cadera'],
  ['rodilla', 'Extension de la rodilla'],
  ['tobillo', 'Dorsiflexion del pie']
];

const OPCIONES_FUERZA = [
  { v: '0', t: '0 · Ninguna contraccion' },
  { v: '1', t: '1 · Contraccion visible sin movimiento' },
  { v: '2', t: '2 · Movimiento sin vencer la gravedad' },
  { v: '3', t: '3 · Vence la gravedad' },
  { v: '4', t: '4 · Vence resistencia parcial' },
  { v: '5', t: '5 · Fuerza normal' }
];

const camposFuerza = [];
GRUPOS.forEach(([k, label], i) => {
  camposFuerza.push({ name: k + 'D', id: 'du-mrc-' + k + 'd', type: 'select', label: label + ', derecha', options: OPCIONES_FUERZA, row: 'g' + i });
  camposFuerza.push({ name: k + 'I', id: 'du-mrc-' + k + 'i', type: 'select', label: label + ', izquierda', options: OPCIONES_FUERZA, row: 'g' + i });
});

export const calculators = [
  {
    key: 'mrc-fuerza', title: 'Suma de fuerza del Medical Research Council', accent: '#6b2e6b',
    subtitle: 'Doce mediciones, maximo 60, y un requisito que se olvida',
    incompleteMsg: 'Confirma primero que el paciente colabora, y despues puntua los seis grupos musculares en ambos lados.',
    fields: [{
      name: 'colabora', id: 'du-mrc-c', type: 'select', label: 'El paciente esta despierto y obedece ordenes?', options: [
        { v: 'si', t: 'Si, colabora' },
        { v: 'no', t: 'No colabora: sedado, confuso o no responde' }
      ]
    }].concat(camposFuerza).concat([
      { type: 'note', text: 'La escala solo es aplicable en un paciente DESPIERTO y capaz de obedecer ordenes: en quien no colabora, la puntuacion no tiene valor y hay que anotar que no es valorable y repetirla despues. Por debajo de 48 puntos se define debilidad adquirida y por debajo de 36, debilidad grave. Y conviene recordar el patron esperado: simetrico, de predominio proximal, y RESPETANDO la musculatura facial y ocular.' }
    ]),
    compute(v) {
      if (!v.colabora) return null;
      if (v.colabora === 'no') return { noValorable: true };
      const vals = [];
      for (const [k] of GRUPOS) {
        const d = v[k + 'D'], i = v[k + 'I'];
        if (d == null || d === '' || i == null || i === '') return null;
        vals.push([k, Number(d), Number(i)]);
      }
      const total = vals.reduce((a, x) => a + x[1] + x[2], 0);
      const superior = vals.slice(0, 3).reduce((a, x) => a + x[1] + x[2], 0);
      const inferior = vals.slice(3).reduce((a, x) => a + x[1] + x[2], 0);
      const asimetrias = vals.filter(x => Math.abs(x[1] - x[2]) >= 2)
        .map(x => GRUPOS.find(g => g[0] === x[0])[1].toLowerCase());
      let banda;
      if (total >= 48) banda = 'SIN DEBILIDAD por la escala';
      else if (total >= 36) banda = 'DEBILIDAD ADQUIRIDA';
      else banda = 'DEBILIDAD GRAVE';
      const proximalD = vals[0][1] + vals[0][2] + vals[3][1] + vals[3][2];
      const distalD = vals[2][1] + vals[2][2] + vals[5][1] + vals[5][2];
      return { total, superior, inferior, banda, asimetrias, proximal: proximalD, distal: distalD, debil: total < 48 };
    },
    format: r => {
      if (r.noValorable) {
        return '<strong style="color:#8a6a1f;">La escala NO es aplicable en este paciente.</strong> La suma de fuerza exige que el paciente este despierto y sea capaz de obedecer ordenes: puntuar a alguien sedado o confuso produce un numero sin ningun valor.<br><span style="opacity:.8;">Lo correcto es anotar que no es valorable y repetir la exploracion cuando despierte. Mientras tanto, conviene aligerar la sedacion si es posible, revisar los iones y la medicacion, y empezar la movilizacion pasiva, que no requiere colaboracion.</span>';
      }
      let s = `<strong>Suma de fuerza: ${r.total} de 60 puntos. ${r.banda}.</strong>`;
      s += `<br><span style="opacity:.85;">Miembros superiores ${r.superior} de 30, miembros inferiores ${r.inferior} de 30.</span>`;
      if (r.total < 36) s += '<br><strong style="color:#8c3a34;">Debilidad grave.</strong> Se asocia a mas dias de ventilacion, mayor dependencia al alta y peor situacion funcional al a&#241;o. Toca rehabilitacion intensiva y revision de todos los factores modificables que sigan presentes.';
      else if (r.total < 48) s += '<br><strong style="color:#8a6a1f;">Cumple criterio de debilidad adquirida en la unidad de criticos</strong>, siempre que no haya otra causa que lo explique.';
      else s += '<br><span style="color:#3f6b52;">Por encima del umbral de 48.</span> Eso no excluye una debilidad en desarrollo: conviene repetir la medicion, sobre todo si el paciente sigue inmovil, sedado o con factores de riesgo activos.';
      if (r.asimetrias.length) s += `<br><strong style="color:#8c3a34;">Hay ASIMETRIA de dos o mas puntos en ${r.asimetrias.length} grupo${r.asimetrias.length > 1 ? 's' : ''} (${r.asimetrias.join(', ')}).</strong> La debilidad adquirida es simetrica: una asimetria marcada obliga a buscar una lesion focal, como un ictus, una mielopatia, una plexopatia o una neuropatia por compresion, esta ultima frecuente tras una inmovilidad prolongada.`;
      if (r.debil && r.distal < r.proximal) s += '<br><span style="opacity:.8;">Los grupos DISTALES estan mas debiles que los proximales, lo que no es el patron habitual de la debilidad adquirida y encaja mejor con un componente neuropatico o con otra causa. Conviene explorar la sensibilidad.</span>';
      if (r.debil) s += '<br><span style="opacity:.75;">Antes de quedarse con este diagnostico: comprobar que respeta la cara y los ojos, pedir fosforo, potasio, magnesio y calcio, y revisar la lista de farmacos. Son causas tratables en horas y explican muchos casos.</span>';
      return s;
    },
    fragment: r => r.noValorable ? 'escala no valorable, paciente no colaborador' : `suma de fuerza ${r.total}/60, ${r.banda.toLowerCase()}`
  },

  {
    key: 'riesgo-debilidad-uci', title: 'Riesgo de debilidad adquirida', accent: '#3f6b52',
    subtitle: 'Que factores tiene y sobre cuales se puede actuar hoy',
    incompleteMsg: 'Introduce los dias de ventilacion y marca los factores presentes.',
    fields: [
      { name: 'diasVm', id: 'du-rd-v', type: 'number', step: '1', label: 'Dias de ventilacion mecanica', placeholder: 'ej. 8', row: 'r1' },
      { name: 'edad', id: 'du-rd-e', type: 'number', step: '1', required: false, label: 'Edad (a&#241;os)', placeholder: 'ej. 68', row: 'r1' },
      { name: 'sepsis', id: 'du-rd-s', type: 'checkbox', label: 'Sepsis o respuesta inflamatoria sistemica', row: 'r2' },
      { name: 'multiorganica', id: 'du-rd-m', type: 'checkbox', label: 'Disfuncion de dos o mas organos', row: 'r2' },
      { name: 'sedacion', id: 'du-rd-se', type: 'checkbox', label: 'Sedacion profunda, sin objetivo definido o sin interrupcion diaria', row: 'r3' },
      { name: 'inmovil', id: 'du-rd-i', type: 'checkbox', label: 'Sin movilizacion activa ni pasiva pautada', row: 'r3' },
      { name: 'bloqueo', id: 'du-rd-b', type: 'checkbox', label: 'Bloqueantes neuromusculares en las ultimas 48 horas', row: 'r4' },
      { name: 'corticoides', id: 'du-rd-c', type: 'checkbox', label: 'Corticoides a dosis altas o prolongadas', row: 'r4' },
      { name: 'hiperglucemia', id: 'du-rd-h', type: 'checkbox', label: 'Hiperglucemia mantenida', row: 'r5' },
      { name: 'nutricion', id: 'du-rd-n', type: 'checkbox', label: 'Aporte nutricional claramente insuficiente', row: 'r5' },
      { type: 'note', text: 'Esta herramienta no pretende predecir sino ORIENTAR LA ACCION. La mayoria de los factores mas importantes son modificables hoy mismo, y como no existe ningun tratamiento farmacologico para la debilidad adquirida, la prevencion es lo unico que ha demostrado funcionar. Un aviso sobre la glucemia: el objetivo es evitar la hiperglucemia mantenida, NO perseguir un control estricto, que aumento la mortalidad en un ensayo amplio.' }
    ],
    compute(v) {
      if (v.diasVm == null) return null;
      if (!(v.diasVm >= 0 && v.diasVm <= 400)) return { invalido: true };
      if (v.edad != null && !(v.edad >= 0 && v.edad <= 120)) return { invalido: true };
      const noModificables = [];
      if (v.sepsis) noModificables.push('sepsis');
      if (v.multiorganica) noModificables.push('disfuncion multiorganica');
      if (v.edad != null && v.edad >= 70) noModificables.push(`edad de ${v.edad} a&#241;os`);
      if (v.diasVm >= 7) noModificables.push(`${v.diasVm} dias de ventilacion`);

      const modificables = [];
      if (v.sedacion) modificables.push('sedacion profunda: definir objetivo y hacer interrupcion diaria');
      if (v.inmovil) modificables.push('inmovilidad: pautar movilizacion hoy, tambien si esta ventilado');
      if (v.bloqueo) modificables.push('bloqueo neuromuscular: revisar si sigue indicado');
      if (v.corticoides) modificables.push('corticoides: reducir a la dosis minima necesaria');
      if (v.hiperglucemia) modificables.push('hiperglucemia: corregirla sin perseguir un control estricto');
      if (v.nutricion) modificables.push('nutricion insuficiente: revisar aporte y via');

      const total = noModificables.length + modificables.length;
      let banda;
      if (total >= 5) banda = 'MUY ALTO';
      else if (total >= 3) banda = 'ALTO';
      else if (total >= 1) banda = 'INTERMEDIO';
      else banda = 'BAJO';
      return { noModificables, modificables, total, banda, diasVm: v.diasVm, hiperglucemia: !!v.hiperglucemia };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: dias de ventilacion de 0 a 400 y edad de 0 a 120 a&#241;os.';
      let s = `<strong>${r.total} factores de riesgo presentes: riesgo ${r.banda}.</strong>`;
      if (r.noModificables.length) s += `<br><span style="opacity:.8;">No modificables ahora: ${r.noModificables.join(', ')}.</span>`;
      if (r.modificables.length) {
        s += `<br><strong style="color:#3f6b52;">MODIFICABLES hoy mismo (${r.modificables.length}):</strong><br>`;
        s += r.modificables.map(m => '&#8226; ' + m).join('<br>');
        s += '<br><span style="opacity:.8;">Como no existe tratamiento farmacologico para la debilidad adquirida, actuar sobre esta lista es literalmente lo unico que puede cambiar el resultado.</span>';
      } else {
        s += '<br><span style="color:#3f6b52;">No hay factores modificables pendientes,</span> lo que significa que el manejo preventivo ya esta bien orientado. Conviene mantenerlo y explorar la fuerza en cuanto el paciente colabore.';
      }
      if (r.diasVm >= 7) s += '<br><span style="opacity:.75;">La duracion de la ventilacion mecanica es uno de los factores que mas se asocia al cuadro, y a partir de la primera semana el riesgo crece de forma marcada.</span>';
      if (r.hiperglucemia) s += '<br><strong style="color:#8a6a1f;">Sobre la glucemia:</strong> hay que evitar la hiperglucemia mantenida, pero NO perseguir un control estricto. Un ensayo amplio mostro mayor mortalidad con el objetivo estricto frente al convencional, de modo que la meta es razonable, no perfecta.';
      s += '<br><span style="opacity:.75;">La perdida de masa muscular es maxima en la PRIMERA SEMANA, de modo que la ventana para prevenir es estrecha y muy precoz.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `riesgo ${r.banda.toLowerCase()}, ${r.modificables.length} factores modificables`
  },

  {
    key: 'diferencial-debilidad', title: 'Es realmente debilidad adquirida?', accent: '#8c3a34',
    subtitle: 'Las banderas que obligan a buscar una causa con tratamiento propio',
    incompleteMsg: 'Elige el patron de la debilidad y responde sobre la cara, la sensibilidad y el curso.',
    fields: [
      { name: 'simetria', id: 'du-df-s', type: 'select', label: 'Distribucion de la debilidad', row: 'r1', options: [
        { v: 'simetrica', t: 'Simetrica y generalizada' },
        { v: 'asimetrica', t: 'Asimetrica o focal' }
      ] },
      { name: 'cara', id: 'du-df-c', type: 'select', label: 'Musculatura facial y ocular', row: 'r1', options: [
        { v: 'respetada', t: 'Respetada' },
        { v: 'afectada', t: 'Ptosis, oftalmoparesia o debilidad facial' }
      ] },
      { name: 'sensitivo', id: 'du-df-n', type: 'select', label: 'Exploracion sensitiva', row: 'r2', options: [
        { v: 'normal', t: 'Sin alteraciones o no valorable' },
        { v: 'distal', t: 'Alteracion sensitiva distal' },
        { v: 'nivel', t: 'NIVEL sensitivo o afectacion de esfinteres' }
      ] },
      { name: 'curso', id: 'du-df-cu', type: 'select', label: 'Curso de la debilidad', row: 'r2', options: [
        { v: 'estable', t: 'Aparecio durante el ingreso y no progresa' },
        { v: 'progresiva', t: 'Progresa, o empeoro tras salir de criticos' },
        { v: 'fluctuante', t: 'Fluctua a lo largo del dia' }
      ] },
      { name: 'iones', id: 'du-df-i', type: 'checkbox', label: 'Fosforo, potasio, magnesio o calcio bajos', row: 'r3' },
      { name: 'ck', id: 'du-df-k', type: 'checkbox', label: 'Creatina cinasa marcadamente elevada', row: 'r3' },
      { name: 'hiperreflexia', id: 'du-df-h', type: 'checkbox', label: 'Reflejos vivos, clonus o signo de Babinski', row: 'r4' },
      { name: 'farmacos', id: 'du-df-f', type: 'checkbox', label: 'Bloqueantes, aminoglucosidos o colistina recientes', row: 'r4' },
      { type: 'note', text: 'La debilidad adquirida es simetrica, proximal, con reflejos disminuidos, sin nivel sensitivo, respeta la cara y los ojos y no progresa una vez resuelta la enfermedad critica. Cualquier cosa que se salga de ese molde obliga a buscar una causa distinta, y casi todas las alternativas tienen tratamiento propio. La regla practica es sencilla: si algo NO encaja, hay que estudiarlo, en lugar de asumir que la recuperacion es simplemente lenta.' }
    ],
    compute(v) {
      if (!v.simetria || !v.cara || !v.sensitivo || !v.curso) return null;
      const banderas = [];
      if (v.simetria === 'asimetrica') banderas.push({ dato: 'debilidad ASIMETRICA', hacia: 'lesion focal: ictus, mielopatia, plexopatia o neuropatia por compresion' });
      if (v.cara === 'afectada') banderas.push({ dato: 'afectacion FACIAL u OCULAR', hacia: 'miastenia gravis, botulismo, sindrome de Miller Fisher o lesion de tronco' });
      if (v.sensitivo === 'nivel') banderas.push({ dato: 'NIVEL sensitivo o afectacion de esfinteres', hacia: 'compresion o lesion MEDULAR, que es una urgencia de imagen' });
      if (v.curso === 'progresiva') banderas.push({ dato: 'curso PROGRESIVO o empeoramiento tras criticos', hacia: 'sindrome de Guillain-Barre u otra causa activa' });
      if (v.curso === 'fluctuante') banderas.push({ dato: 'debilidad FLUCTUANTE', hacia: 'miastenia gravis' });
      if (v.hiperreflexia) banderas.push({ dato: 'signos de motoneurona SUPERIOR', hacia: 'lesion central o medular' });
      if (v.ck) banderas.push({ dato: 'creatina cinasa muy elevada', hacia: 'rabdomiolisis, miopatia necrotizante o inflamatoria' });

      const tratables = [];
      if (v.iones) tratables.push('alteracion de fosforo, potasio, magnesio o calcio, que se corrige en horas');
      if (v.farmacos) tratables.push('farmacos con efecto neuromuscular: bloqueantes acumulados, aminoglucosidos o colistina');

      const encaja = banderas.length === 0;
      return {
        encaja, banderas, tratables, sensitivoDistal: v.sensitivo === 'distal',
        urgente: v.sensitivo === 'nivel' || v.curso === 'progresiva'
      };
    },
    format: r => {
      let s;
      if (r.encaja) {
        s = '<strong style="color:#3f6b52;">El patron ENCAJA con una debilidad adquirida en la unidad de criticos:</strong> simetrica, sin afectacion facial ni ocular, sin nivel sensitivo, sin signos de motoneurona superior y sin progresion.';
        s += '<br><span style="opacity:.8;">Eso no exime de lo basico: comprobar fosforo, potasio, magnesio y calcio, y revisar la lista de farmacos. Y si el paciente no mejora como se espera, volver a explorar y volver a preguntarse si la etiqueta era correcta.</span>';
      } else {
        s = `<strong style="color:#8c3a34;">Hay ${r.banderas.length} dato${r.banderas.length > 1 ? 's' : ''} que NO encaja${r.banderas.length > 1 ? 'n' : ''} con una debilidad adquirida:</strong><br>`;
        s += r.banderas.map(b => `&#8226; ${b.dato} &#8594; ${b.hacia}`).join('<br>');
        s += '<br><span style="opacity:.85;">Casi todas esas alternativas tienen tratamiento propio, de modo que merece la pena estudiarlas en lugar de asumir que la recuperacion es lenta.</span>';
      }
      if (r.urgente) s += '<br><strong style="color:#8c3a34;">Y hay prisa.</strong> Un nivel sensitivo obliga a RESONANCIA MEDULAR urgente, porque una compresion tiene ventana terapeutica. Y una debilidad que progresa obliga a descartar un sindrome de Guillain-Barre sin demora, porque el tratamiento es tanto mas eficaz cuanto antes se administra.';
      if (r.tratables.length) s += `<br><strong style="color:#3f6b52;">Hay ${r.tratables.length} causa${r.tratables.length > 1 ? 's' : ''} tratable${r.tratables.length > 1 ? 's' : ''} ya identificada${r.tratables.length > 1 ? 's' : ''}:</strong> ${r.tratables.join('; y ')}. Corregirlas es lo primero, y puede cambiar la situacion en horas.`;
      else s += '<br><span style="opacity:.75;">No se han marcado alteraciones ionicas ni farmacos de riesgo. Conviene comprobarlos igualmente: son las causas mas frecuentes y mas rapidamente reversibles de debilidad en el paciente critico.</span>';
      if (r.sensitivoDistal) s += '<br><span style="opacity:.8;">La alteracion sensitiva distal encaja con un componente NEUROPATICO de la propia debilidad adquirida, que tiene peor pronostico que la forma miopatica porque la reparacion axonal es lenta.</span>';
      return s;
    },
    fragment: r => r.encaja ? 'el patron encaja con debilidad adquirida' : `${r.banderas.length} bandera${r.banderas.length > 1 ? 's' : ''} que no encaja${r.banderas.length > 1 ? 'n' : ''}`
  }
];
