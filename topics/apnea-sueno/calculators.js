// topics/apnea-sueno/calculators.js
// 4 herramientas:
// - stop-bang: cribado de apnea obstructiva, con la advertencia de que criba y no diagnostica.
// - epworth: escala de somnolencia diurna, que mide el sintoma y sirve para seguir la respuesta.
// - iah-gravedad: indice de apnea-hipopnea a partir de los eventos y del tiempo, con la
//   diferencia entre tiempo de sue&#241;o (polisomnografia) y de registro (poligrafia domiciliaria).
// - hipoventilacion-obesidad: criterios diagnosticos del sindrome, con el bicarbonato como
//   cribado previo a la gasometria.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

const EPWORTH_SITUACIONES = [
  ['e1', 'Sentado leyendo'],
  ['e2', 'Viendo la television'],
  ['e3', 'Sentado, inactivo, en un lugar publico (cine, reunion)'],
  ['e4', 'Como pasajero en un coche durante una hora seguida'],
  ['e5', 'Tumbado para descansar por la tarde'],
  ['e6', 'Sentado charlando con alguien'],
  ['e7', 'Sentado tranquilamente despues de una comida sin alcohol'],
  ['e8', 'En un coche, detenido unos minutos en el trafico']
];

const OPCIONES_EPWORTH = [
  { v: '0', t: '0 · Nunca me dormiria' },
  { v: '1', t: '1 · Poca probabilidad' },
  { v: '2', t: '2 · Probabilidad moderada' },
  { v: '3', t: '3 · Alta probabilidad' }
];

const camposEpworth = EPWORTH_SITUACIONES.map(([name, label], i) => ({
  name, id: 'ap-ep-' + name, type: 'select', label, options: OPCIONES_EPWORTH, row: 'r' + Math.floor(i / 2)
}));

function gravedadIah(iah) {
  if (iah < 5) return 'NORMAL';
  if (iah < 15) return 'LEVE';
  if (iah <= 30) return 'MODERADA';
  return 'GRAVE';
}

export const calculators = [
  {
    key: 'stop-bang', title: 'STOP-BANG: cribado de apnea obstructiva', accent: '#2f6b5f',
    subtitle: 'Ocho preguntas para priorizar el estudio, no para diagnosticar',
    incompleteMsg: 'Marca los items que cumple el paciente. Si no cumple ninguno, la puntuacion es 0.',
    fields: [
      { name: 's', id: 'ap-sb-s', type: 'checkbox', label: 'Ronca fuerte (se oye a traves de una puerta cerrada)', row: 'r1' },
      { name: 't', id: 'ap-sb-t', type: 'checkbox', label: 'Se siente cansado o somnoliento durante el dia', row: 'r1' },
      { name: 'o', id: 'ap-sb-o', type: 'checkbox', label: 'Alguien ha observado que deja de respirar mientras duerme', row: 'r2' },
      { name: 'p', id: 'ap-sb-p', type: 'checkbox', label: 'Tiene o esta en tratamiento por hipertension arterial', row: 'r2' },
      { name: 'b', id: 'ap-sb-b', type: 'checkbox', label: 'Indice de masa corporal mayor de 35 kg/m2', row: 'r3' },
      { name: 'a', id: 'ap-sb-a', type: 'checkbox', label: 'Edad mayor de 50 a&#241;os', row: 'r3' },
      { name: 'n', id: 'ap-sb-n', type: 'checkbox', label: 'Perimetro cervical mayor de 40 cm', row: 'r4' },
      { name: 'g', id: 'ap-sb-g', type: 'checkbox', label: 'Sexo masculino', row: 'r4' },
      { type: 'note', text: 'Los cuatro primeros items forman el acronimo STOP (ronquido, cansancio, apneas observadas y presion arterial) y los cuatro ultimos, BANG (indice de masa corporal, edad, cuello y sexo). Es una herramienta muy SENSIBLE y poco especifica: sirve para priorizar el estudio y para el cribado preoperatorio. Una puntuacion baja NO autoriza a dejar de estudiar a un paciente con clinica sugestiva.' }
    ],
    compute(v) {
      const items = ['s', 't', 'o', 'p', 'b', 'a', 'n', 'g'];
      const p = items.reduce((acc, k) => acc + (v[k] ? 1 : 0), 0);
      const stop = ['s', 't', 'o', 'p'].reduce((acc, k) => acc + (v[k] ? 1 : 0), 0);
      const especificos = [];
      if (stop >= 2 && v.g) especificos.push('sexo masculino');
      if (stop >= 2 && v.b) especificos.push('indice de masa corporal mayor de 35');
      if (stop >= 2 && v.n) especificos.push('perimetro cervical mayor de 40 cm');
      let riesgo;
      if (p >= 5) riesgo = 'ALTO';
      else if (p >= 3) riesgo = 'INTERMEDIO';
      else riesgo = 'BAJO';
      return { p, stop, riesgo, especificos, altoPorCombinacion: riesgo !== 'ALTO' && especificos.length > 0 };
    },
    format: r => {
      let s = `<strong>${r.p} de 8 puntos (STOP ${r.stop} de 4): riesgo ${r.riesgo}</strong> de apnea obstructiva moderada o grave. `;
      if (r.riesgo === 'ALTO') {
        s += '<span style="color:#8c3a34;">Probabilidad alta.</span> Corresponde estudio del sue&#241;o con prioridad, y en el contexto preoperatorio, medidas de precaucion durante la anestesia y el posoperatorio: analgesia multimodal para reducir opioides, extubacion despierto y en semiincorporado, y monitorizacion prolongada de la saturacion.';
      } else if (r.riesgo === 'INTERMEDIO') {
        s += '<span style="color:#8a6a1f;">Zona intermedia.</span> La decision se apoya en la clinica y en la comorbilidad. Ante somnolencia relevante, hipertension resistente, fibrilacion auricular o cirugia mayor prevista, conviene estudiar.';
      } else {
        s += '<span style="color:#3f6b52;">Probabilidad baja</span> en ausencia de otros datos. ';
      }
      if (r.especificos.length) {
        s += `<br><strong style="color:#8c3a34;">Combinacion de riesgo alto presente</strong>: dos o mas items STOP junto con ${r.especificos.join(', ')}. Esta combinacion aumenta la especificidad y coloca al paciente en riesgo alto aunque la puntuacion total no llegue a 5.`;
      }
      s += '<br><strong>Esto es un cribado, no un diagnostico.</strong> Ni confirma ni descarta: el diagnostico exige poligrafia respiratoria o polisomnografia. Cuidado especial con la MUJER, en quien la puntuacion tiende a salir mas baja (no suma el item de sexo y refiere menos ronquido) pese a tener la enfermedad.';
      return s;
    },
    fragment: r => `STOP-BANG ${r.p}/8, riesgo ${r.riesgo.toLowerCase()}`
  },

  {
    key: 'epworth', title: 'Escala de somnolencia de Epworth', accent: '#6b4a7a',
    subtitle: 'Probabilidad de quedarse dormido en ocho situaciones cotidianas',
    incompleteMsg: 'Puntua las ocho situaciones de 0 a 3 segun la probabilidad de quedarse dormido.',
    fields: [
      { type: 'note', text: 'Se pregunta por la probabilidad de QUEDARSE DORMIDO, no de sentirse cansado, y referida a las ultimas semanas. Si el paciente no ha vivido alguna de las situaciones recientemente, debe imaginar como reaccionaria. La escala mide el SINTOMA y se correlaciona mal con el indice de apnea-hipopnea: un valor normal no descarta una apnea grave.' },
      ...camposEpworth
    ],
    compute(v) {
      const claves = EPWORTH_SITUACIONES.map(x => x[0]);
      const vals = claves.map(k => (v[k] == null || v[k] === '' ? null : parseInt(v[k], 10)));
      if (vals.some(x => x == null || isNaN(x))) return null;
      const total = vals.reduce((a, b) => a + b, 0);
      let grado;
      if (total <= 10) grado = 'NORMAL';
      else if (total <= 14) grado = 'LEVE';
      else if (total <= 18) grado = 'MODERADA';
      else grado = 'GRAVE';
      const altas = claves.filter((k, i) => vals[i] >= 2).length;
      const enCoche = vals[3] >= 2 || vals[7] >= 2;
      return { total, grado, altas, enCoche };
    },
    format: r => {
      let s = `<strong>${r.total} de 24 puntos: somnolencia ${r.grado}.</strong> `;
      if (r.grado === 'NORMAL') {
        s += '<span style="color:#3f6b52;">Por debajo del umbral de somnolencia diurna excesiva</span>, que se situa por encima de 10. Ojo: esto NO descarta una apnea grave. Muchos pacientes, y sobre todo muchas MUJERES, consultan por fatiga, insomnio, animo bajo o cefalea matutina en lugar de por somnolencia, y puntuan bajo teniendo la enfermedad.';
      } else {
        s += `<span style="color:${r.grado === 'GRAVE' ? '#8c3a34' : '#8a6a1f'};">Somnolencia diurna excesiva</span>, por encima del umbral de 10. Obliga a completar el estudio del sue&#241;o y a preguntar por la conduccion. Antes de atribuirla toda a la apnea hay que descartar la causa mas frecuente de somnolencia, que es el SUE&#209;O INSUFICIENTE por habitos, ademas de farmacos sedantes, alcohol, turnos, depresion y narcolepsia.`;
      }
      if (r.enCoche) {
        s += '<br><strong style="color:#8c3a34;">Puntua alto en alguna de las situaciones dentro de un coche.</strong> Es el dato con mayor riesgo inmediato, para el paciente y para terceros. Corresponde consejo explicito de no conducir mientras la somnolencia no este controlada, y dejarlo DOCUMENTADO en la historia.';
      }
      s += `<br><span style="opacity:.75;">Situaciones con puntuacion de 2 o mas: ${r.altas} de 8. Repetir la escala tras iniciar el tratamiento es la forma mas simple de comprobar que esta funcionando.</span>`;
      return s;
    },
    fragment: r => `Epworth ${r.total}/24, somnolencia ${r.grado.toLowerCase()}`
  },

  {
    key: 'iah-gravedad', title: 'Indice de apnea-hipopnea y gravedad', accent: '#3d5a73',
    subtitle: 'Del numero de eventos a la decision de tratar',
    incompleteMsg: 'Introduce el numero de eventos y las horas de sue&#241;o o de registro.',
    fields: [
      { name: 'eventos', id: 'ap-iah-ev', type: 'number', step: '1', label: 'Apneas mas hipopneas (numero total)', placeholder: 'ej. 186', row: 'r1' },
      { name: 'horas', id: 'ap-iah-h', type: 'number', step: '0.1', label: 'Horas de sue&#241;o o de registro valido', placeholder: 'ej. 6.2', row: 'r1' },
      { name: 'prueba', id: 'ap-iah-pr', type: 'select', label: 'Prueba realizada', row: 'r2', options: [
        { v: 'psg', t: 'Polisomnografia (divide por tiempo de SUE&#209;O)' },
        { v: 'pr', t: 'Poligrafia domiciliaria (divide por tiempo de REGISTRO)' }
      ] },
      { name: 'centrales', id: 'ap-iah-ce', type: 'number', step: '1', required: false, label: 'De ellos, eventos CENTRALES (opcional)', placeholder: 'ej. 12', row: 'r2' },
      { name: 't90', id: 'ap-iah-t90', type: 'number', step: '1', required: false, label: 'Tiempo con saturacion por debajo del 90% (% del registro, opcional)', placeholder: 'ej. 14', row: 'r3' },
      { name: 'clinica', id: 'ap-iah-cl', type: 'select', label: 'Sintomas o comorbilidad asociada', row: 'r3', options: [
        { v: 'si', t: 'Si: somnolencia, sue&#241;o no reparador, hipertension, cardiopatia, ictus o fibrilacion auricular' },
        { v: 'no', t: 'No: asintomatico y sin comorbilidad relevante' }
      ] },
      { type: 'note', text: 'La poligrafia domiciliaria divide los eventos por el tiempo de REGISTRO, que incluye el tiempo que el paciente estuvo despierto en la cama, de modo que su indice queda INFRAESTIMADO respecto al de la polisomnografia. Por eso una poligrafia negativa o no concluyente en un paciente sospechoso obliga a hacer polisomnografia, no a darle el alta.' }
    ],
    compute(v) {
      if (v.eventos == null || v.horas == null) return null;
      if (!(v.eventos >= 0 && v.eventos <= 2000) || !(v.horas > 0.5 && v.horas <= 16)) return { invalido: true };
      if (v.centrales != null && !(v.centrales >= 0 && v.centrales <= v.eventos)) return { invalido: true };
      if (v.t90 != null && !(v.t90 >= 0 && v.t90 <= 100)) return { invalido: true };
      const iah = v.eventos / v.horas;
      const grav = gravedadIah(iah);
      const clinica = v.clinica !== 'no';
      const diagnostico = iah >= 15 || (iah >= 5 && clinica);
      const pctCentral = v.centrales != null && v.eventos > 0 ? (100 * v.centrales) / v.eventos : null;
      const predominioCentral = pctCentral != null && pctCentral > 50;
      return { iah, grav, clinica, diagnostico, pctCentral, predominioCentral, t90: v.t90, pr: v.prueba === 'pr', eventos: v.eventos, horas: v.horas };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: eventos de 0 a 2000, horas de 0.5 a 16, eventos centrales no mayores que el total y tiempo por debajo del 90% entre 0 y 100.';
      let s = `<strong>Indice de apnea-hipopnea de ${r.iah.toFixed(1)} por hora: apnea ${r.grav}.</strong> (${r.eventos} eventos en ${r.horas} horas.) `;
      if (r.grav === 'NORMAL') {
        s += 'Por debajo de 5 no hay criterio de apnea. ';
        if (r.pr) s += '<strong style="color:#8c3a34;">Pero se trata de una poligrafia domiciliaria, que INFRAESTIMA el indice.</strong> Si el paciente sigue siendo sospechoso por la clinica, corresponde POLISOMNOGRAFIA y no el alta. Es uno de los errores mas repetidos del tema.';
        return s;
      }
      if (r.diagnostico) {
        s += `<strong style="color:#2f6b5f;">Cumple criterio diagnostico</strong> ${r.iah >= 15 ? '(indice de 15 o mas, con independencia de los sintomas)' : '(indice de 5 o mas CON sintomas o comorbilidad)'}. `;
      } else {
        s += '<strong style="color:#8a6a1f;">Indice entre 5 y 15 SIN sintomas ni comorbilidad</strong>: no se cumple el criterio para tratar de forma sistematica. Corresponde medidas conservadoras, control del peso y reevaluacion, no CPAP automatica.';
      }
      if (r.diagnostico) {
        if (r.grav === 'GRAVE') s += 'Tratamiento: <strong>CPAP</strong>, con independencia de los sintomas, y aqui la ADHERENCIA es el tratamiento.';
        else if (r.grav === 'MODERADA') s += 'Tratamiento: <strong>CPAP</strong> como eleccion; dispositivo de avance mandibular si no la tolera pese a un intento bien acompa&#241;ado.';
        else s += 'Tratamiento: medidas conservadoras, <strong>dispositivo de avance mandibular</strong> o terapia posicional; la CPAP tambien es opcion si el paciente la prefiere.';
      }
      if (r.pr) s += '<br><span style="opacity:.8;">Al tratarse de una poligrafia domiciliaria, el indice real es probablemente MAYOR que el calculado, porque el denominador incluye tiempo despierto.</span>';
      if (r.predominioCentral) s += `<br><strong style="color:#7a2f5c;">Predominio de eventos CENTRALES (${r.pctCentral.toFixed(0)}% del total).</strong> Esto no es apnea obstructiva: obliga a buscar la causa. Ecocardiograma para medir la fraccion de eyeccion, revision de OPIOIDES y valoracion de ictus o lesion del tronco. Y una advertencia: si la fraccion de eyeccion es del 45% o menos con apnea central predominante, la servoventilacion adaptativa esta CONTRAINDICADA.`;
      if (r.t90 != null && r.t90 >= 10) s += `<br><strong style="color:#8c3a34;">Carga hipoxica elevada</strong>: ${r.t90}% del registro por debajo del 90% de saturacion. Si ese tiempo no se explica por los eventos, hay que pensar en HIPOVENTILACION o en enfermedad pulmonar asociada, y medir el bicarbonato o hacer una gasometria diurna.`;
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `IAH ${r.iah.toFixed(1)}, apnea ${r.grav.toLowerCase()}`
  },

  {
    key: 'hipoventilacion-obesidad', title: 'Criterios de hipoventilacion-obesidad', accent: '#8c5a2e',
    subtitle: 'El diagnostico que solo se hace con el paciente despierto',
    incompleteMsg: 'Introduce el indice de masa corporal. A&#241;ade el bicarbonato o la PaCO2 diurna para completar la valoracion.',
    fields: [
      { name: 'imc', id: 'ap-oh-imc', type: 'number', step: '0.1', label: 'Indice de masa corporal (kg/m2)', placeholder: 'ej. 44', row: 'r1' },
      { name: 'hco3', id: 'ap-oh-hco3', type: 'number', step: '0.1', required: false, label: 'Bicarbonato serico (mEq/L, si se tiene)', placeholder: 'ej. 31', row: 'r1' },
      { name: 'paco2', id: 'ap-oh-co2', type: 'number', step: '1', required: false, label: 'PaCO2 arterial DESPIERTO (mmHg, si se tiene)', placeholder: 'ej. 52', row: 'r2' },
      { name: 'ph', id: 'ap-oh-ph', type: 'number', step: '0.01', required: false, label: 'pH arterial (opcional)', placeholder: 'ej. 7.36', row: 'r2' },
      { name: 'otras', id: 'ap-oh-otr', type: 'checkbox', label: 'Hay otra causa que podria explicar la hipoventilacion (EPOC grave, enfermedad neuromuscular, cifoescoliosis, hipotiroidismo grave, opioides o sedantes)' },
      { type: 'note', text: 'El bicarbonato funciona como cribado barato: por debajo de 27 mEq/L el sindrome es muy improbable y se puede evitar la gasometria. La PaCO2 debe medirse en VIGILIA y respirando aire ambiente; hacerla dormido o con oxigeno puesto no mide lo mismo. Alrededor del 90% de estos pacientes tiene ademas apnea obstructiva, casi siempre grave.' }
    ],
    compute(v) {
      if (v.imc == null) return null;
      if (!(v.imc > 10 && v.imc <= 100)) return { invalido: true };
      if (v.hco3 != null && !(v.hco3 > 5 && v.hco3 <= 60)) return { invalido: true };
      if (v.paco2 != null && !(v.paco2 > 15 && v.paco2 <= 150)) return { invalido: true };
      if (v.ph != null && !(v.ph > 6.6 && v.ph < 7.9)) return { invalido: true };
      const obeso = v.imc >= 30;
      const hipercapnia = v.paco2 != null ? v.paco2 > 45 : null;
      const hco3Alto = v.hco3 != null ? v.hco3 >= 27 : null;
      const otras = !!v.otras;
      let veredicto;
      if (!obeso) veredicto = 'no-obeso';
      else if (hipercapnia === true && !otras) veredicto = 'confirmado';
      else if (hipercapnia === true && otras) veredicto = 'hipercapnia-otra-causa';
      else if (hipercapnia === false) veredicto = 'descartado';
      else if (hco3Alto === false) veredicto = 'improbable';
      else if (hco3Alto === true) veredicto = 'pedir-gasometria';
      else veredicto = 'faltan-datos';
      const acidosis = v.ph != null && v.ph < 7.35;
      return { veredicto, imc: v.imc, paco2: v.paco2, hco3: v.hco3, ph: v.ph, acidosis, otras };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: indice de masa corporal de 10 a 100, bicarbonato de 5 a 60 mEq/L, PaCO2 de 15 a 150 mmHg y pH entre 6.6 y 7.9.';
      const cola = ' <span style="opacity:.75;">Y en todo caso: retirar sedantes, opioides y alcohol, y poner en marcha un programa de perdida de peso, que es lo unico que puede revertir el cuadro.</span>';
      let s = '';
      switch (r.veredicto) {
        case 'no-obeso':
          return `Con un indice de masa corporal de ${r.imc} (por debajo de 30) NO se cumple el primer criterio del sindrome de hipoventilacion-obesidad. Si hay hipercapnia, hay que buscar otra causa: EPOC, enfermedad neuromuscular, deformidad de la caja toracica, hipotiroidismo grave, farmacos depresores o hipoventilacion central.`;
        case 'improbable':
          return `Indice de masa corporal de ${r.imc} con bicarbonato de ${r.hco3} mEq/L, <strong style="color:#3f6b52;">por debajo de 27</strong>. El sindrome de hipoventilacion-obesidad es MUY IMPROBABLE y la gasometria arterial puede evitarse. Esto no descarta la apnea obstructiva, que hay que estudiar aparte si hay clinica.`;
        case 'pedir-gasometria':
          return `Indice de masa corporal de ${r.imc} con bicarbonato de ${r.hco3} mEq/L, <strong style="color:#8a6a1f;">de 27 o mas</strong>. Ese bicarbonato es la huella de una hipercapnia cronica compensada por el ri&#241;on: <strong>corresponde GASOMETRIA ARTERIAL con el paciente DESPIERTO</strong> y respirando aire ambiente para confirmarlo o descartarlo.`;
        case 'descartado':
          return `Indice de masa corporal de ${r.imc} con PaCO2 diurna de ${r.paco2} mmHg, <strong style="color:#3f6b52;">de 45 o menos</strong>. NO se cumple el criterio de hipercapnia diurna: no hay sindrome de hipoventilacion-obesidad. Si hay clinica nocturna, estudiar apnea obstructiva, que puede existir igualmente y ser grave.`;
        case 'hipercapnia-otra-causa':
          s = `Indice de masa corporal de ${r.imc} y PaCO2 diurna de ${r.paco2} mmHg, pero <strong style="color:#8a6a1f;">hay otra causa que puede explicar la hipoventilacion</strong>. El sindrome de hipoventilacion-obesidad es un diagnostico de EXCLUSION: hay que valorar cuanto aporta cada causa antes de etiquetarlo, aunque en la practica coexisten con frecuencia y el manejo respiratorio inicial es el mismo.`;
          break;
        case 'confirmado':
          s = `<strong style="color:#8c5a2e;">Criterios de SINDROME DE HIPOVENTILACION-OBESIDAD cumplidos</strong>: indice de masa corporal de ${r.imc} y PaCO2 diurna de ${r.paco2} mmHg (mayor de 45), sin otra causa que lo explique. Corresponde <strong>polisomnografia con medicion de CO2</strong> y <strong>presion positiva nocturna</strong>: CPAP si hay apnea obstructiva grave asociada, que es lo mas frecuente, y ventilacion con dos niveles de presion si predomina la hipoventilacion o si la CPAP no corrige la hipercapnia.`;
          break;
        default:
          return `Indice de masa corporal de ${r.imc}. Falta el dato que define el sindrome: hace falta el <strong>bicarbonato serico</strong> como cribado o, mejor, la <strong>PaCO2 arterial con el paciente DESPIERTO</strong>. Sin uno de los dos, el diagnostico no se puede hacer ni descartar.`;
      }
      s += ' <strong style="color:#8c3a34;">Nunca oxigeno en solitario</strong>: corrige el numero del pulsioximetro sin corregir la ventilacion y puede agravar la hipercapnia.';
      if (r.acidosis) s += `<br><strong style="color:#8c3a34;">Ademas hay ACIDOSIS (pH de ${r.ph}).</strong> No es una hipercapnia cronica compensada sino una agudizacion: corresponde ventilacion no invasiva precoz, vigilancia del nivel de conciencia y valoracion de ingreso en una unidad con capacidad de escalar.`;
      return s + cola;
    },
    fragment: r => {
      if (r.invalido) return 'valores no validos';
      const m = { 'no-obeso': 'no cumple el criterio de obesidad', improbable: 'muy improbable (bicarbonato normal)', 'pedir-gasometria': 'pedir gasometria diurna', descartado: 'descartado (sin hipercapnia diurna)', 'hipercapnia-otra-causa': 'hipercapnia con otra causa posible', confirmado: 'criterios cumplidos', 'faltan-datos': 'faltan bicarbonato o PaCO2' };
      return m[r.veredicto];
    }
  }
];
