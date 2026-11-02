// topics/glomerulopatias-sindromes-glomerulares/calculators.js - Las cuatro herramientas del
// modulo 91.
// Fuentes: KDIGO 2021 Glomerular Diseases (Kidney Int 2021;100(4S):S1-S276) y Barocas DA, et al.
// Microhematuria: AUA/SUFU Guideline (J Urol 2020;204(4):778-786).
// La segunda reproduce la tabla de estratificacion de la AUA tal como esta publicada: BAJO exige
// cumplir TODOS sus criterios, mientras que INTERMEDIO y ALTO se cumplen con UNO solo.
// Las otras tres no son puntuaciones publicadas: ordenan datos que la guia da por separado y lo
// dicen en su propio resultado, para no hacerlas pasar por escalas validadas.

const C_ROJO = '#8c3a34';
const C_AMBAR = '#8a6a2e';
const C_VERDE = '#3f6b52';
const C_AZUL = '#3d5a73';

export const calculators = [
  {
    key: 'sindrome-glomerular', title: 'Nefrótico, nefritico o rápidamente progresivo', accent: '#2f6a62',
    subtitle: 'La separación que se hace junto a la cama',
    incompleteMsg: 'Indica la proteinuria y la albúmina sérica.',
    fields: [
      { name: 'proteinuria', id: 'gl-sg-pu', type: 'number', step: '0.1', label: 'Proteinuria en g/d', placeholder: 'ej. 4.5' },
      { name: 'albumina', id: 'gl-sg-alb', type: 'number', step: '0.1', label: 'Albúmina sérica en g/dl', placeholder: 'ej. 2.3' },
      { name: 'edema', id: 'gl-sg-ed', type: 'checkbox', label: 'Edema' },
      { name: 'hta', id: 'gl-sg-hta', type: 'checkbox', label: 'Hipertensión arterial', row: true },
      { name: 'sedimento', id: 'gl-sg-sed', type: 'select', label: 'Sedimento urinario', options: [
        { value: 'inactivo', label: 'Poco activo o sin hallazgos' },
        { value: 'dismorficos', label: 'Hematies dismorficos' },
        { value: 'cilindros', label: 'Cilindros hemáticos o acantocitos por encima del 5%' },
        { value: 'nohecho', label: 'No se ha mirado todavía' }
      ] },
      { name: 'caida', id: 'gl-sg-ca', type: 'number', step: '1', required: false, label: 'Caída del filtrado en % (opcional)', placeholder: 'ej. 60' },
      { name: 'meses', id: 'gl-sg-me', type: 'number', step: '0.5', required: false, label: 'En cuantos meses se produjo esa caída (opcional)', placeholder: 'ej. 2' },
      { type: 'note', text: 'Ordena datos que la guía da por separado; no es una puntuación publicada. El sedimento es el que más inclina la balanza.' }
    ],
    compute(v) {
      const num = x => (x === null || x === undefined || x === '' || isNaN(x)) ? null : Number(x);
      const pu = num(v.proteinuria), alb = num(v.albumina);
      if (pu === null || alb === null) return null;
      const caida = num(v.caida), meses = num(v.meses);
      const sed = v.sedimento || 'nohecho';

      const rpgn = caida !== null && meses !== null && caida >= 50 && meses <= 3;
      const inflamatorio = sed === 'cilindros' || sed === 'dismorficos';
      const nefrotico = pu > 3.5 && alb < 3.0;
      const rangoSinSindrome = pu > 3.5 && alb >= 3.0;

      let sindrome, color, detalle, pasos = [], urgente = false;

      if (rpgn) {
        sindrome = 'GLOMERULONEFRITIS RÁPIDAMENTE PROGRESIVA';
        color = C_ROJO;
        urgente = true;
        detalle = 'Una caída del filtrado del ' + caida + '% en ' + meses + ' meses cumple la definición: 50% o más en 3 meses o menos. Antes de aceptarla hay que excluir las otras causas de ese cuadro (vasculitis asociada a ANCA, enfermedad anti-membrana basal) y las REVERSIBLES: toxicidad por fármacos y causas pre y posrenales.';
        pasos = [
          'Excluir hoy lo reversible: fármacos, depleción de volumen, obstrucción',
          'Pedir ANCA y anticuerpos anti-membrana basal glomerular el mismo dia',
          'Biopsia renal, que aquí es ESENCIAL y no opcional',
          'El diagnóstico de enfermedad anti-MBG debe hacerse SIN DEMORA ante toda sospecha de rápidamente progresiva',
          'Buscar hemorragia alveolar: puede presentarse como síndrome pulmón-riñón'
        ];
      } else if (nefrotico) {
        sindrome = 'SÍNDROME NEFRÓTICO';
        color = C_AMBAR;
        detalle = 'Proteinuria de ' + pu + ' g/d con albúmina de ' + alb + ' g/dl: hay proteinuria en rango nefrótico Y hipoalbuminemia, que es lo que la definición exige. El filtro gotea.';
        pasos = [
          'Cuantificar con orina de 24 horas si se va a iniciar o intensificar inmunosupresión',
          'Empezar el tratamiento de soporte: sal, bloqueo del sistema renina-angiotensina, manejo del edema',
          'Evaluar riesgo trombótico, sobre todo en los primeros 6 meses',
          'Vigilancia de infección; en caso de ascitis, puncionar y cultivar',
          'No fiarse del filtrado estimado: con hipoalbuminemia puede sobreestimar el real un 50% o más'
        ];
        if (sed === 'cilindros') {
          detalle += ' Pero el sedimento muestra cilindros hemáticos o acantocitos, de modo que hay además un componente INFLAMATORIO y el cuadro es mixto: conviene tratarlo como nefritico a efectos de estudio.';
          color = C_ROJO;
        }
      } else if (inflamatorio || (v.hta && pu > 0 && pu <= 3.5)) {
        sindrome = 'SÍNDROME NEFRITICO';
        color = C_ROJO;
        detalle = 'El filtro se inflama. ' + (sed === 'cilindros'
          ? 'Los cilindros hemáticos y los acantocitos por encima del 5% indican habitualmente enfermedad glomerular inflamatoria.'
          : 'Los hematies dismorficos apuntan al glomerulo; en la glomerulonefritis lo son en el 50 al 80% de los casos.');
        pasos = [
          'Pedir ANCA, anti-membrana basal y estudio de lupus según el contexto',
          'Vigilar la velocidad de caída del filtrado: si llega al 50% en 3 meses, cambia de categoría',
          'Valorar biopsia renal',
          'Controlar la tensión y empezar el soporte',
          'Si hay púrpura palpable, es vasculitis hasta demostrar lo contrario'
        ];
      } else if (rangoSinSindrome) {
        sindrome = 'PROTEINURIA EN RANGO NEFRÓTICO, SIN síndrome nefrótico';
        color = C_AZUL;
        detalle = 'Proteinuria de ' + pu + ' g/d pero albúmina de ' + alb + ' g/dl: falta la HIPOALBUMINEMIA, de modo que no es un síndrome nefrótico. La guía señala este escenario expresamente y lo asocia sobre todo a la glomeruloesclerosis focal y segmentaria SECUNDARIA y a la nefropatía IgA.';
        pasos = [
          'No tratarlo como un síndrome nefrótico: el pronóstico y la conducta son distintos',
          'Comprobar con que método se midio la albúmina: el verde de bromocresol lee unos 5,5 g/l por encima',
          'Buscar causas de forma secundaria antes de pensar en inmunosupresión',
          'Soporte y objetivo de proteinuria igualmente'
        ];
      } else {
        sindrome = 'No cumple criterios de ninguno de los dos síndromes';
        color = C_VERDE;
        detalle = 'Con proteinuria de ' + pu + ' g/d y albúmina de ' + alb + ' g/dl no hay síndrome nefrótico, y sin sedimento inflamatorio tampoco un cuadro nefritico. La guía recuerda que el soporte puede no ser necesario en quien solo tiene microhematuria con filtrado conservado y sin proteinuria ni hipertensión, algo habitual en la nefropatía IgA precoz.';
        pasos = [
          'Mirar el sedimento si todavía no se ha hecho: es lo que más inclina la balanza',
          'Fijar objetivo de proteinuria por debajo de 0,5 g/d',
          'Repetir con el mismo método para poder comparar'
        ];
      }

      const avisos = [];
      if (sed === 'nohecho') avisos.push('No has mirado el sedimento. La guía lo considera indicado de rutina en TODAS las formas de enfermedad glomerular, y es el dato que más separa un síndrome del otro.');
      if (caida !== null && meses === null) avisos.push('Has dado una caída del filtrado sin el tiempo en que ocurrió. Sin las dos cosas no se puede aplicar la definición de rápidamente progresiva.');
      if (meses !== null && caida === null) avisos.push('Has dado un tiempo sin la magnitud de la caída. La definición necesita las dos.');
      if (!rpgn && caida !== null && meses !== null && caida >= 50) avisos.push('La caída es del 50% o más, pero en ' + meses + ' meses: la definición exige 3 meses o menos.');

      return { sindrome, color, detalle, pasos, urgente, avisos, pu, alb };
    },
    format(r) {
      let s = `<strong style="color:${r.color};font-size:14.5px;">${r.sindrome}.</strong>`;
      if (r.urgente) s += '<br><strong style="color:#8c3a34;">Es la urgencia del tema: no admite esperar.</strong>';
      s += `<br><span style="opacity:.95;">${r.detalle}</span>`;
      s += '<br><br><strong>Lo que toca ahora</strong><br>' + r.pasos.map(x => '&bull; ' + x).join('<br>');
      if (r.avisos.length) s += '<br><br>' + r.avisos.map(x => `<span style="opacity:.75;font-size:12.5px;">${x}</span>`).join('<br>');
      return s;
    },
    fragment: r => `${r.sindrome.toLowerCase()}${r.urgente ? ', urgente' : ''}`
  },

  {
    key: 'microhematuria-aua', title: 'Microhematuria: riesgo urológico (AUA/SUFU)', accent: '#9c3a52',
    subtitle: 'Bajo exige cumplir todo; intermedio y alto, uno solo',
    incompleteMsg: 'Indica sexo, edad y hematies por campo.',
    fields: [
      { name: 'sexo', id: 'gl-mh-sx', type: 'select', label: 'Sexo', options: [
        { value: '', label: 'Elegir...' },
        { value: 'mujer', label: 'Mujer' },
        { value: 'hombre', label: 'Hombre' }
      ] },
      { name: 'edad', id: 'gl-mh-ed', type: 'number', step: '1', label: 'Edad en años', placeholder: 'ej. 54' },
      { name: 'hematies', id: 'gl-mh-he', type: 'number', step: '1', label: 'Hematies por campo de gran aumento', placeholder: 'ej. 12' },
      { name: 'paquetes', id: 'gl-mh-pa', type: 'number', step: '1', required: false, label: 'Paquetes-año de tabaco (dejar vacio si nunca fumo)', placeholder: 'ej. 20' },
      { name: 'macro', id: 'gl-mh-ma', type: 'checkbox', label: 'Antecedente de hematuria macroscópica' },
      { name: 'otros', id: 'gl-mh-ot', type: 'checkbox', label: 'Otros factores de riesgo de carcinoma urotelial', row: true },
      { name: 'repetido', id: 'gl-mh-re', type: 'checkbox', label: 'Es un análisis REPETIDO en paciente de bajo riesgo que no se había estudiado' },
      { name: 'renal', id: 'gl-mh-rn', type: 'checkbox', label: 'Hay datos de enfermedad renal médica: proteinuria, dismorficos, cilindros o insuficiencia renal', row: true },
      { type: 'note', text: 'Reproduce la tabla publicada. La definición de microhematuria es más de 3 hematies por campo en microscopia, nunca una tira reactiva positiva.' }
    ],
    compute(v) {
      const num = x => (x === null || x === undefined || x === '' || isNaN(x)) ? null : Number(x);
      const edad = num(v.edad), he = num(v.hematies);
      if (!v.sexo || edad === null || he === null) return null;
      const paq = num(v.paquetes) === null ? 0 : num(v.paquetes);

      if (he <= 3) {
        return { noEsMH: true, he, edad, sexo: v.sexo, renal: !!v.renal };
      }

      const altos = [];
      if (edad >= 60) altos.push('60 años o más');
      if (paq > 30) altos.push('más de 30 paquetes-año');
      if (he > 25) altos.push('más de 25 hematies por campo');
      if (v.macro) altos.push('antecedente de hematuria macroscópica');

      const inter = [];
      if (v.sexo === 'mujer' && edad >= 50 && edad <= 59) inter.push('mujer de 50 a 59 años');
      if (v.sexo === 'hombre' && edad >= 40 && edad <= 59) inter.push('hombre de 40 a 59 años');
      if (paq >= 10 && paq <= 30) inter.push('de 10 a 30 paquetes-año');
      if (he >= 11 && he <= 25) inter.push('de 11 a 25 hematies por campo');
      if (v.repetido && he >= 3 && he <= 10) inter.push('bajo riesgo sin estudio previo con 3 a 10 hematies por campo en análisis repetido');
      if (v.otros) inter.push('otros factores de riesgo de carcinoma urotelial');

      let nivel, color, riesgo, conducta;
      if (altos.length) {
        nivel = 'ALTO';
        color = C_ROJO;
        riesgo = '10% o más';
        conducta = ['Cistoscopia', 'Imagen del tracto urinario superior según la guía'];
      } else if (inter.length) {
        nivel = 'INTERMEDIO';
        color = C_AMBAR;
        riesgo = 'del 1 al 2%';
        conducta = ['Cistoscopia', 'Imagen del tracto urinario según la guía'];
      } else {
        nivel = 'BAJO';
        color = C_VERDE;
        riesgo = 'menos del 1%';
        conducta = [
          'Decisión COMPARTIDA con el paciente entre dos opciones igualmente aceptables',
          'Repetir el análisis de orina en un plazo de 6 meses',
          'O bien cistoscopia y ecografía renal ahora',
          'Si se repite el análisis y la microhematuria persiste, el paciente se RECLASIFICA a intermedio o alto y se estudia'
        ];
      }
      return { noEsMH: false, nivel, color, riesgo, conducta, altos, inter, he, edad, paq, sexo: v.sexo, renal: !!v.renal };
    },
    format(r) {
      if (r.noEsMH) {
        let s = `<strong style="color:${C_VERDE};font-size:14.5px;">Con ${r.he} hematies por campo no se cumple la definición de microhematuria.</strong>`;
        s += '<br><span style="opacity:.95;">La guía define microhematuria como MÁS de 3 hematies por campo de gran aumento en el examen microscópico de una muestra única y bien recogida. Por debajo de esa cifra no procede la estratificación de riesgo urológico.</span>';
        if (r.renal) s += `<br><br><span style="color:${C_AZUL};">Has marcado datos de enfermedad renal médica. Esos hallazgos se estudian por su cuenta aunque no haya microhematuria: la proteinuria, los hematies dismorficos y los cilindros celulares apuntan al glomerulo.</span>`;
        return s;
      }
      let s = `<strong style="color:${r.color};font-size:14.5px;">Riesgo ${r.nivel} de neoplasia genitourinaria.</strong>`;
      s += `<br><span style="opacity:.9;">Riesgo estimado de carcinoma urotelial: ${r.riesgo}.</span>`;
      if (r.altos.length) s += `<br><span style="opacity:.9;">Criterios de alto riesgo presentes: ${r.altos.join(', ')}.</span>`;
      else if (r.inter.length) s += `<br><span style="opacity:.9;">Criterios de riesgo intermedio presentes: ${r.inter.join(', ')}.</span>`;
      else s += '<br><span style="opacity:.9;">Cumple TODOS los criterios de bajo riesgo, que es lo que esa categoría exige.</span>';
      s += '<br><br><strong>Lo que corresponde</strong><br>' + r.conducta.map(x => '&bull; ' + x).join('<br>');
      if (r.renal) s += `<br><br><span style="color:${C_AZUL};"><strong>Has marcado datos de enfermedad renal médica.</strong> Corresponde derivar a nefrología, pero la guía es explícita en que la evaluación urológica basada en riesgo debe hacerse IGUALMENTE, porque puede haber patología urológica coexistente. Encontrar una causa no excluye la otra.</span>`;
      s += '<br><span style="opacity:.75;font-size:12.5px;">Si el paciente toma antiagregantes o anticoagulantes, la evaluación es la misma: su riesgo de neoplasia es similar al del resto, y atribuir la hematuria al fármaco es el error que esta recomendación existe para evitar.</span>';
      return s;
    },
    fragment: r => r.noEsMH ? `${r.he} hematies por campo: no es microhematuria` : `riesgo ${r.nivel.toLowerCase()}, urotelial ${r.riesgo}`
  },

  {
    key: 'proteinuria-umbral', title: 'Proteinuria: el método y el umbral', accent: '#4a6b7a',
    subtitle: 'Corrige por como se recogio antes de interpretar',
    incompleteMsg: 'Elige el método de recogida e indica la cifra.',
    fields: [
      { name: 'metodo', id: 'gl-pu-me', type: 'select', label: 'Como se recogio', options: [
        { value: '', label: 'Elegir...' },
        { value: 'orina24', label: 'Orina de 24 horas' },
        { value: 'intencionada', label: 'Cociente en aliquota de una recogida intencionada de 12 a 24 horas' },
        { value: 'primera', label: 'Primera orina de la mañana' },
        { value: 'aislada', label: 'Muestra aislada al azar' }
      ] },
      { name: 'valor', id: 'gl-pu-va', type: 'number', step: '0.01', label: 'Proteinuria en g/d (o g/g de creatinina)', placeholder: 'ej. 1.2' },
      { name: 'entidad', id: 'gl-pu-en', type: 'select', label: 'Contexto', options: [
        { value: 'general', label: 'Glomerulopatía en general' },
        { value: 'iga', label: 'Nefropatía IgA' },
        { value: 'cambiosminimos', label: 'Cambios mínimos o síndrome nefrótico corticosensible' }
      ] },
      { name: 'soporte90', id: 'gl-pu-so', type: 'checkbox', label: 'Lleva 90 días o más de tratamiento de soporte optimizado' },
      { type: 'note', text: 'La primera orina de la mañana subestima la excreción de 24 horas en torno a un 20%, y ese sesgo se aplica aquí para que los umbrales se comparen con lo mismo.' }
    ],
    compute(v) {
      const num = x => (x === null || x === undefined || x === '' || isNaN(x)) ? null : Number(x);
      const val = num(v.valor);
      if (!v.metodo || val === null) return null;
      const ent = v.entidad || 'general';

      let corregido = val, nota = '';
      if (v.metodo === 'primera') {
        corregido = Math.round(val / 0.8 * 100) / 100;
        nota = 'La primera orina de la mañana equivale a una recogida nocturna y tiende a SUBESTIMAR la excreción de 24 horas en torno a un 20% por el efecto del decúbito. Corrigiendo ese sesgo, ' + val + ' equivale aproximadamente a ' + corregido + ' g/d. El efecto es menor si la proteinuria es de rango nefrótico.';
      } else if (v.metodo === 'aislada') {
        nota = 'El cociente en muestra AISLADA al azar esta desaconsejado en glomerulopatía, porque tanto la proteína como la creatinina varian a lo largo del dia. Solo es interpretable si se recoge siempre a la misma hora y en condiciones comparables de actividad, con el paciente estable. El valor de abajo se da tal cual, sin corregir, porque el sesgo no tiene una dirección fija.';
      } else if (v.metodo === 'intencionada') {
        nota = 'Es el compromiso que propone la guía cuando no se puede completar una recogida de 24 horas: medir el cociente proteína-creatinina en una aliquota de una recogida intencionada de 12 a 24 horas.';
      } else {
        nota = 'Es el método PREFERIDO en enfermedad glomerular, porque promedia la variación por ritmo circadiano, actividad física y postura. La guía lo pide expresamente cuando se va a iniciar o intensificar inmunosupresión, o cuando cambia la situación clínica.';
      }

      let banda, color, lectura;
      if (corregido < 0.5) {
        banda = 'Por debajo de 0,5 g/d';
        color = C_VERDE;
        lectura = 'Es el objetivo: la mayor parte de los estudios sugiere que a este nivel la pérdida de función renal puede evitarse en gran medida.';
      } else if (corregido <= 1.5) {
        banda = 'Entre 0,5 y 1,5 g/d';
        color = C_AMBAR;
        lectura = 'Por debajo de 1 a 1,5 g/d la progresión se enlentece, pero el objetivo sigue siendo bajar de 0,5 g/d.';
      } else if (corregido <= 3.5) {
        banda = 'Entre 1,5 y 3,5 g/d';
        color = C_AMBAR;
        lectura = 'Por encima del rango en que la progresión se enlentece. Hay margen de mejora con el soporte antes de plantear otras cosas.';
      } else {
        banda = 'Por encima de 3,5 g/d';
        color = C_ROJO;
        lectura = 'Rango nefrótico. Ojo: rango nefrótico NO equivale a síndrome nefrótico, que exige además hipoalbuminemia.';
      }

      const extras = [];
      if (ent === 'iga') {
        if (v.soporte90 && corregido > 0.75) extras.push('NEFROPATÍA IgA con más de 0,75 a 1 g/d PESE a 90 días o más de soporte optimizado: eso es lo que hoy define ALTO RIESGO de progresión, y es el punto en que se plantea la inmunosupresión.');
        else if (!v.soporte90) extras.push('NEFROPATÍA IgA: el alto riesgo no se define por la cifra sola, sino por mantenerse por encima de 0,75 a 1 g/d tras 90 días o más de soporte optimizado. Completa ese plazo antes de decidir.');
        else extras.push('NEFROPATÍA IgA: por debajo de 0,75 a 1 g/d tras el soporte no se cumple el criterio de alto riesgo. Reducir por debajo de 1 g/d es un subrogado de mejor evolución renal.');
        extras.push('Con proteinuria por encima de 0,5 g/d se recomienda IECA o ARA II con independencia de que haya hipertensión (recomendación 1B).');
      } else if (ent === 'cambiosminimos') {
        extras.push('CAMBIOS MÍNIMOS y síndrome nefrótico corticosensible son la EXCEPCIÓN a los umbrales: lo que define el curso no es un valor de proteinuria sino la REMISIÓN COMPLETA.');
      }
      extras.push('Un descenso sostenido del 30% respecto al valor basal se acepta como subrogado de duplicar la creatinina o llegar a fallo renal.');

      return { banda, color, lectura, nota, corregido, val, metodo: v.metodo, extras };
    },
    format(r) {
      let s = `<strong style="color:${r.color};font-size:14.5px;">${r.banda}.</strong>`;
      s += `<br><span style="opacity:.95;">${r.lectura}</span>`;
      s += `<br><br><strong>Sobre el método</strong><br><span style="opacity:.9;">${r.nota}</span>`;
      if (r.metodo === 'primera') s += `<br><span style="opacity:.9;">Valor corregido usado para clasificar: <strong>${r.corregido} g/d</strong> (declarado: ${r.val}).</span>`;
      s += '<br><br>' + r.extras.map(x => '&bull; ' + x).join('<br>');
      s += '<br><span style="opacity:.75;font-size:12.5px;">La albúmina supone de media alrededor del 65% de la proteína total en la glomerulonefritis, y las fórmulas que convierten proteinuria en albuminuria son poco fiables por debajo de 500 mg/d.</span>';
      return s;
    },
    fragment: r => `${r.banda.toLowerCase()}${r.metodo === 'primera' ? ' (corregido a ' + r.corregido + ' g/d)' : ''}`
  },

  {
    key: 'trombosis-nefrotico', title: 'Riesgo trombótico del síndrome nefrótico', accent: '#7a2a2a',
    subtitle: 'Albúmina, histología y la ventana de los 6 meses',
    incompleteMsg: 'Indica la albúmina sérica y la histología.',
    fields: [
      { name: 'albumina', id: 'gl-tr-alb', type: 'number', step: '0.1', label: 'Albúmina sérica en g/dl', placeholder: 'ej. 2.1' },
      { name: 'histologia', id: 'gl-tr-hi', type: 'select', label: 'Histologia', options: [
        { value: '', label: 'Elegir...' },
        { value: 'membranosa', label: 'Nefropatía membranosa' },
        { value: 'otra', label: 'Otra histología conocida' },
        { value: 'desconocida', label: 'Todavía no se conoce' }
      ] },
      { name: 'meses', id: 'gl-tr-me', type: 'number', step: '0.5', required: false, label: 'Meses desde el diagnóstico (opcional)', placeholder: 'ej. 2' },
      { name: 'previa', id: 'gl-tr-pr', type: 'checkbox', label: 'Trombosis previa o predisposición genética' },
      { name: 'afl', id: 'gl-tr-af', type: 'checkbox', label: 'Anticuerpos antifosfolipidicos', row: true },
      { name: 'inmovilidad', id: 'gl-tr-in', type: 'checkbox', label: 'Inmovilidad, obesidad, neoplasia, embarazo o cirugía reciente' },
      { name: 'cni', id: 'gl-tr-cni', type: 'checkbox', label: 'Recibe un inhibidor de la calcineurina', row: true },
      { type: 'note', text: 'Los tres mejores predictores según la guía son la histología, el grado de proteinuria y la albúmina sérica. Esto los ordena; no es una puntuación publicada.' }
    ],
    compute(v) {
      const num = x => (x === null || x === undefined || x === '' || isNaN(x)) ? null : Number(x);
      const alb = num(v.albumina);
      if (alb === null || !v.histologia) return null;
      const meses = num(v.meses);

      const factores = [];
      if (alb < 2.5) factores.push('albúmina por debajo de 2,5 g/dl, que predice de forma independiente del grado de proteinuria');
      if (v.histologia === 'membranosa') factores.push('nefropatía membranosa, la histología de mayor riesgo');
      if (meses !== null && meses <= 6) factores.push('dentro de los primeros 6 meses desde el diagnóstico, que es la ventana de mayor riesgo');
      if (v.previa) factores.push('trombosis previa o predisposición genética');
      if (v.afl) factores.push('anticuerpos antifosfolipidicos');
      if (v.inmovilidad) factores.push('inmovilidad, obesidad, neoplasia, embarazo o cirugía');

      const mayor = (alb < 2.5) || v.histologia === 'membranosa';
      let nivel, color;
      if (factores.length >= 3 || (mayor && factores.length >= 2)) { nivel = 'ALTO'; color = C_ROJO; }
      else if (mayor || factores.length >= 1) { nivel = 'INTERMEDIO'; color = C_AMBAR; }
      else { nivel = 'BAJO con los datos dados'; color = C_VERDE; }

      const conducta = [
        'Si YA hay evento tromboembólico: anticoagulación COMPLETA, sin discusión',
        'Si no lo hay: la profilaxis se indica cuando el riesgo de tromboembolia supera el riesgo individual estimado de hemorragia grave por la anticoagulación',
        'Agentes de elección: heparina o sus derivados y cumarinicos',
        'Los anticoagulantes orales DIRECTOS no se han estudiado de forma sistemática en el paciente nefrótico, ni para profilaxis ni para tratamiento'
      ];
      if (v.cni) conducta.push('Atención a la interacción: la warfarina tiene muchas interacciones farmacológicas, en especial con los inhibidores de la calcineurina');

      return { nivel, color, factores, alb, histologia: v.histologia, meses, conducta, mayor };
    },
    format(r) {
      let s = `<strong style="color:${r.color};font-size:14.5px;">Riesgo trombótico ${r.nivel}.</strong>`;
      if (r.factores.length) s += '<br><br><strong>Factores presentes</strong><br>' + r.factores.map(x => '&bull; ' + x).join('<br>');
      else s += '<br><span style="opacity:.9;">Ninguno de los factores que la guía enumera esta presente con los datos dados.</span>';
      s += '<br><br><strong>Lo que corresponde</strong><br>' + r.conducta.map(x => '&bull; ' + x).join('<br>');
      s += '<br><br><span style="opacity:.9;">Donde ocurre: la trombosis venosa profunda y la de la VENA RENAL son las más frecuentes, y la embolia pulmonar es relativamente común y puede cursar SIN síntomas. La arterial es poco frecuente, aunque se ha descrito en prácticamente todos los lechos.</span>';
      if (r.meses === null) s += '<br><span style="opacity:.75;font-size:12.5px;">No has indicado el tiempo desde el diagnóstico. Importa: el riesgo es mayor sobre todo en los primeros 6 meses.</span>';
      s += '<br><span style="opacity:.75;font-size:12.5px;">Reducir la proteinuria eleva la albúmina, y esa subida baja el riesgo trombótico: es una de las razones por las que el objetivo de proteinuria no es cosmetico.</span>';
      return s;
    },
    fragment: r => `riesgo trombótico ${r.nivel.toLowerCase()}, con ${r.factores.length} factor(es)`
  }
];
