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
    key: 'sindrome-glomerular', title: 'Nefrotico, nefritico o rapidamente progresivo', accent: '#2f6a62',
    subtitle: 'La separacion que se hace junto a la cama',
    incompleteMsg: 'Indica la proteinuria y la albumina serica.',
    fields: [
      { name: 'proteinuria', id: 'gl-sg-pu', type: 'number', step: '0.1', label: 'Proteinuria en g/d', placeholder: 'ej. 4.5' },
      { name: 'albumina', id: 'gl-sg-alb', type: 'number', step: '0.1', label: 'Albumina serica en g/dl', placeholder: 'ej. 2.3' },
      { name: 'edema', id: 'gl-sg-ed', type: 'checkbox', label: 'Edema' },
      { name: 'hta', id: 'gl-sg-hta', type: 'checkbox', label: 'Hipertension arterial', row: true },
      { name: 'sedimento', id: 'gl-sg-sed', type: 'select', label: 'Sedimento urinario', options: [
        { value: 'inactivo', label: 'Poco activo o sin hallazgos' },
        { value: 'dismorficos', label: 'Hematies dismorficos' },
        { value: 'cilindros', label: 'Cilindros hematicos o acantocitos por encima del 5%' },
        { value: 'nohecho', label: 'No se ha mirado todavia' }
      ] },
      { name: 'caida', id: 'gl-sg-ca', type: 'number', step: '1', required: false, label: 'Caida del filtrado en % (opcional)', placeholder: 'ej. 60' },
      { name: 'meses', id: 'gl-sg-me', type: 'number', step: '0.5', required: false, label: 'En cuantos meses se produjo esa caida (opcional)', placeholder: 'ej. 2' },
      { type: 'note', text: 'Ordena datos que la guia da por separado; no es una puntuacion publicada. El sedimento es el que mas inclina la balanza.' }
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
        sindrome = 'GLOMERULONEFRITIS RAPIDAMENTE PROGRESIVA';
        color = C_ROJO;
        urgente = true;
        detalle = 'Una caida del filtrado del ' + caida + '% en ' + meses + ' meses cumple la definicion: 50% o mas en 3 meses o menos. Antes de aceptarla hay que excluir las otras causas de ese cuadro (vasculitis asociada a ANCA, enfermedad anti-membrana basal) y las REVERSIBLES: toxicidad por farmacos y causas pre y posrenales.';
        pasos = [
          'Excluir hoy lo reversible: farmacos, deplecion de volumen, obstruccion',
          'Pedir ANCA y anticuerpos anti-membrana basal glomerular el mismo dia',
          'Biopsia renal, que aqui es ESENCIAL y no opcional',
          'El diagnostico de enfermedad anti-MBG debe hacerse SIN DEMORA ante toda sospecha de rapidamente progresiva',
          'Buscar hemorragia alveolar: puede presentarse como sindrome pulmon-ri&#241;on'
        ];
      } else if (nefrotico) {
        sindrome = 'SINDROME NEFROTICO';
        color = C_AMBAR;
        detalle = 'Proteinuria de ' + pu + ' g/d con albumina de ' + alb + ' g/dl: hay proteinuria en rango nefrotico Y hipoalbuminemia, que es lo que la definicion exige. El filtro gotea.';
        pasos = [
          'Cuantificar con orina de 24 horas si se va a iniciar o intensificar inmunosupresion',
          'Empezar el tratamiento de soporte: sal, bloqueo del sistema renina-angiotensina, manejo del edema',
          'Evaluar riesgo trombotico, sobre todo en los primeros 6 meses',
          'Vigilancia de infeccion; en caso de ascitis, puncionar y cultivar',
          'No fiarse del filtrado estimado: con hipoalbuminemia puede sobreestimar el real un 50% o mas'
        ];
        if (sed === 'cilindros') {
          detalle += ' Pero el sedimento muestra cilindros hematicos o acantocitos, de modo que hay ademas un componente INFLAMATORIO y el cuadro es mixto: conviene tratarlo como nefritico a efectos de estudio.';
          color = C_ROJO;
        }
      } else if (inflamatorio || (v.hta && pu > 0 && pu <= 3.5)) {
        sindrome = 'SINDROME NEFRITICO';
        color = C_ROJO;
        detalle = 'El filtro se inflama. ' + (sed === 'cilindros'
          ? 'Los cilindros hematicos y los acantocitos por encima del 5% indican habitualmente enfermedad glomerular inflamatoria.'
          : 'Los hematies dismorficos apuntan al glomerulo; en la glomerulonefritis lo son en el 50 al 80% de los casos.');
        pasos = [
          'Pedir ANCA, anti-membrana basal y estudio de lupus segun el contexto',
          'Vigilar la velocidad de caida del filtrado: si llega al 50% en 3 meses, cambia de categoria',
          'Valorar biopsia renal',
          'Controlar la tension y empezar el soporte',
          'Si hay purpura palpable, es vasculitis hasta demostrar lo contrario'
        ];
      } else if (rangoSinSindrome) {
        sindrome = 'PROTEINURIA EN RANGO NEFROTICO, SIN sindrome nefrotico';
        color = C_AZUL;
        detalle = 'Proteinuria de ' + pu + ' g/d pero albumina de ' + alb + ' g/dl: falta la HIPOALBUMINEMIA, de modo que no es un sindrome nefrotico. La guia se&#241;ala este escenario expresamente y lo asocia sobre todo a la glomeruloesclerosis focal y segmentaria SECUNDARIA y a la nefropatia IgA.';
        pasos = [
          'No tratarlo como un sindrome nefrotico: el pronostico y la conducta son distintos',
          'Comprobar con que metodo se midio la albumina: el verde de bromocresol lee unos 5,5 g/l por encima',
          'Buscar causas de forma secundaria antes de pensar en inmunosupresion',
          'Soporte y objetivo de proteinuria igualmente'
        ];
      } else {
        sindrome = 'No cumple criterios de ninguno de los dos sindromes';
        color = C_VERDE;
        detalle = 'Con proteinuria de ' + pu + ' g/d y albumina de ' + alb + ' g/dl no hay sindrome nefrotico, y sin sedimento inflamatorio tampoco un cuadro nefritico. La guia recuerda que el soporte puede no ser necesario en quien solo tiene microhematuria con filtrado conservado y sin proteinuria ni hipertension, algo habitual en la nefropatia IgA precoz.';
        pasos = [
          'Mirar el sedimento si todavia no se ha hecho: es lo que mas inclina la balanza',
          'Fijar objetivo de proteinuria por debajo de 0,5 g/d',
          'Repetir con el mismo metodo para poder comparar'
        ];
      }

      const avisos = [];
      if (sed === 'nohecho') avisos.push('No has mirado el sedimento. La guia lo considera indicado de rutina en TODAS las formas de enfermedad glomerular, y es el dato que mas separa un sindrome del otro.');
      if (caida !== null && meses === null) avisos.push('Has dado una caida del filtrado sin el tiempo en que ocurrio. Sin las dos cosas no se puede aplicar la definicion de rapidamente progresiva.');
      if (meses !== null && caida === null) avisos.push('Has dado un tiempo sin la magnitud de la caida. La definicion necesita las dos.');
      if (!rpgn && caida !== null && meses !== null && caida >= 50) avisos.push('La caida es del 50% o mas, pero en ' + meses + ' meses: la definicion exige 3 meses o menos.');

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
    key: 'microhematuria-aua', title: 'Microhematuria: riesgo urologico (AUA/SUFU)', accent: '#9c3a52',
    subtitle: 'Bajo exige cumplir todo; intermedio y alto, uno solo',
    incompleteMsg: 'Indica sexo, edad y hematies por campo.',
    fields: [
      { name: 'sexo', id: 'gl-mh-sx', type: 'select', label: 'Sexo', options: [
        { value: '', label: 'Elegir...' },
        { value: 'mujer', label: 'Mujer' },
        { value: 'hombre', label: 'Hombre' }
      ] },
      { name: 'edad', id: 'gl-mh-ed', type: 'number', step: '1', label: 'Edad en a&#241;os', placeholder: 'ej. 54' },
      { name: 'hematies', id: 'gl-mh-he', type: 'number', step: '1', label: 'Hematies por campo de gran aumento', placeholder: 'ej. 12' },
      { name: 'paquetes', id: 'gl-mh-pa', type: 'number', step: '1', required: false, label: 'Paquetes-a&#241;o de tabaco (dejar vacio si nunca fumo)', placeholder: 'ej. 20' },
      { name: 'macro', id: 'gl-mh-ma', type: 'checkbox', label: 'Antecedente de hematuria macroscopica' },
      { name: 'otros', id: 'gl-mh-ot', type: 'checkbox', label: 'Otros factores de riesgo de carcinoma urotelial', row: true },
      { name: 'repetido', id: 'gl-mh-re', type: 'checkbox', label: 'Es un analisis REPETIDO en paciente de bajo riesgo que no se habia estudiado' },
      { name: 'renal', id: 'gl-mh-rn', type: 'checkbox', label: 'Hay datos de enfermedad renal medica: proteinuria, dismorficos, cilindros o insuficiencia renal', row: true },
      { type: 'note', text: 'Reproduce la tabla publicada. La definicion de microhematuria es mas de 3 hematies por campo en microscopia, nunca una tira reactiva positiva.' }
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
      if (edad >= 60) altos.push('60 a&#241;os o mas');
      if (paq > 30) altos.push('mas de 30 paquetes-a&#241;o');
      if (he > 25) altos.push('mas de 25 hematies por campo');
      if (v.macro) altos.push('antecedente de hematuria macroscopica');

      const inter = [];
      if (v.sexo === 'mujer' && edad >= 50 && edad <= 59) inter.push('mujer de 50 a 59 a&#241;os');
      if (v.sexo === 'hombre' && edad >= 40 && edad <= 59) inter.push('hombre de 40 a 59 a&#241;os');
      if (paq >= 10 && paq <= 30) inter.push('de 10 a 30 paquetes-a&#241;o');
      if (he >= 11 && he <= 25) inter.push('de 11 a 25 hematies por campo');
      if (v.repetido && he >= 3 && he <= 10) inter.push('bajo riesgo sin estudio previo con 3 a 10 hematies por campo en analisis repetido');
      if (v.otros) inter.push('otros factores de riesgo de carcinoma urotelial');

      let nivel, color, riesgo, conducta;
      if (altos.length) {
        nivel = 'ALTO';
        color = C_ROJO;
        riesgo = '10% o mas';
        conducta = ['Cistoscopia', 'Imagen del tracto urinario superior segun la guia'];
      } else if (inter.length) {
        nivel = 'INTERMEDIO';
        color = C_AMBAR;
        riesgo = 'del 1 al 2%';
        conducta = ['Cistoscopia', 'Imagen del tracto urinario segun la guia'];
      } else {
        nivel = 'BAJO';
        color = C_VERDE;
        riesgo = 'menos del 1%';
        conducta = [
          'Decision COMPARTIDA con el paciente entre dos opciones igualmente aceptables',
          'Repetir el analisis de orina en un plazo de 6 meses',
          'O bien cistoscopia y ecografia renal ahora',
          'Si se repite el analisis y la microhematuria persiste, el paciente se RECLASIFICA a intermedio o alto y se estudia'
        ];
      }
      return { noEsMH: false, nivel, color, riesgo, conducta, altos, inter, he, edad, paq, sexo: v.sexo, renal: !!v.renal };
    },
    format(r) {
      if (r.noEsMH) {
        let s = `<strong style="color:${C_VERDE};font-size:14.5px;">Con ${r.he} hematies por campo no se cumple la definicion de microhematuria.</strong>`;
        s += '<br><span style="opacity:.95;">La guia define microhematuria como MAS de 3 hematies por campo de gran aumento en el examen microscopico de una muestra unica y bien recogida. Por debajo de esa cifra no procede la estratificacion de riesgo urologico.</span>';
        if (r.renal) s += `<br><br><span style="color:${C_AZUL};">Has marcado datos de enfermedad renal medica. Esos hallazgos se estudian por su cuenta aunque no haya microhematuria: la proteinuria, los hematies dismorficos y los cilindros celulares apuntan al glomerulo.</span>`;
        return s;
      }
      let s = `<strong style="color:${r.color};font-size:14.5px;">Riesgo ${r.nivel} de neoplasia genitourinaria.</strong>`;
      s += `<br><span style="opacity:.9;">Riesgo estimado de carcinoma urotelial: ${r.riesgo}.</span>`;
      if (r.altos.length) s += `<br><span style="opacity:.9;">Criterios de alto riesgo presentes: ${r.altos.join(', ')}.</span>`;
      else if (r.inter.length) s += `<br><span style="opacity:.9;">Criterios de riesgo intermedio presentes: ${r.inter.join(', ')}.</span>`;
      else s += '<br><span style="opacity:.9;">Cumple TODOS los criterios de bajo riesgo, que es lo que esa categoria exige.</span>';
      s += '<br><br><strong>Lo que corresponde</strong><br>' + r.conducta.map(x => '&bull; ' + x).join('<br>');
      if (r.renal) s += `<br><br><span style="color:${C_AZUL};"><strong>Has marcado datos de enfermedad renal medica.</strong> Corresponde derivar a nefrologia, pero la guia es explicita en que la evaluacion urologica basada en riesgo debe hacerse IGUALMENTE, porque puede haber patologia urologica coexistente. Encontrar una causa no excluye la otra.</span>`;
      s += '<br><span style="opacity:.75;font-size:12.5px;">Si el paciente toma antiagregantes o anticoagulantes, la evaluacion es la misma: su riesgo de neoplasia es similar al del resto, y atribuir la hematuria al farmaco es el error que esta recomendacion existe para evitar.</span>';
      return s;
    },
    fragment: r => r.noEsMH ? `${r.he} hematies por campo: no es microhematuria` : `riesgo ${r.nivel.toLowerCase()}, urotelial ${r.riesgo}`
  },

  {
    key: 'proteinuria-umbral', title: 'Proteinuria: el metodo y el umbral', accent: '#4a6b7a',
    subtitle: 'Corrige por como se recogio antes de interpretar',
    incompleteMsg: 'Elige el metodo de recogida e indica la cifra.',
    fields: [
      { name: 'metodo', id: 'gl-pu-me', type: 'select', label: 'Como se recogio', options: [
        { value: '', label: 'Elegir...' },
        { value: 'orina24', label: 'Orina de 24 horas' },
        { value: 'intencionada', label: 'Cociente en aliquota de una recogida intencionada de 12 a 24 horas' },
        { value: 'primera', label: 'Primera orina de la ma&#241;ana' },
        { value: 'aislada', label: 'Muestra aislada al azar' }
      ] },
      { name: 'valor', id: 'gl-pu-va', type: 'number', step: '0.01', label: 'Proteinuria en g/d (o g/g de creatinina)', placeholder: 'ej. 1.2' },
      { name: 'entidad', id: 'gl-pu-en', type: 'select', label: 'Contexto', options: [
        { value: 'general', label: 'Glomerulopatia en general' },
        { value: 'iga', label: 'Nefropatia IgA' },
        { value: 'cambiosminimos', label: 'Cambios minimos o sindrome nefrotico corticosensible' }
      ] },
      { name: 'soporte90', id: 'gl-pu-so', type: 'checkbox', label: 'Lleva 90 dias o mas de tratamiento de soporte optimizado' },
      { type: 'note', text: 'La primera orina de la ma&#241;ana subestima la excrecion de 24 horas en torno a un 20%, y ese sesgo se aplica aqui para que los umbrales se comparen con lo mismo.' }
    ],
    compute(v) {
      const num = x => (x === null || x === undefined || x === '' || isNaN(x)) ? null : Number(x);
      const val = num(v.valor);
      if (!v.metodo || val === null) return null;
      const ent = v.entidad || 'general';

      let corregido = val, nota = '';
      if (v.metodo === 'primera') {
        corregido = Math.round(val / 0.8 * 100) / 100;
        nota = 'La primera orina de la ma&#241;ana equivale a una recogida nocturna y tiende a SUBESTIMAR la excrecion de 24 horas en torno a un 20% por el efecto del decubito. Corrigiendo ese sesgo, ' + val + ' equivale aproximadamente a ' + corregido + ' g/d. El efecto es menor si la proteinuria es de rango nefrotico.';
      } else if (v.metodo === 'aislada') {
        nota = 'El cociente en muestra AISLADA al azar esta desaconsejado en glomerulopatia, porque tanto la proteina como la creatinina varian a lo largo del dia. Solo es interpretable si se recoge siempre a la misma hora y en condiciones comparables de actividad, con el paciente estable. El valor de abajo se da tal cual, sin corregir, porque el sesgo no tiene una direccion fija.';
      } else if (v.metodo === 'intencionada') {
        nota = 'Es el compromiso que propone la guia cuando no se puede completar una recogida de 24 horas: medir el cociente proteina-creatinina en una aliquota de una recogida intencionada de 12 a 24 horas.';
      } else {
        nota = 'Es el metodo PREFERIDO en enfermedad glomerular, porque promedia la variacion por ritmo circadiano, actividad fisica y postura. La guia lo pide expresamente cuando se va a iniciar o intensificar inmunosupresion, o cuando cambia la situacion clinica.';
      }

      let banda, color, lectura;
      if (corregido < 0.5) {
        banda = 'Por debajo de 0,5 g/d';
        color = C_VERDE;
        lectura = 'Es el objetivo: la mayor parte de los estudios sugiere que a este nivel la perdida de funcion renal puede evitarse en gran medida.';
      } else if (corregido <= 1.5) {
        banda = 'Entre 0,5 y 1,5 g/d';
        color = C_AMBAR;
        lectura = 'Por debajo de 1 a 1,5 g/d la progresion se enlentece, pero el objetivo sigue siendo bajar de 0,5 g/d.';
      } else if (corregido <= 3.5) {
        banda = 'Entre 1,5 y 3,5 g/d';
        color = C_AMBAR;
        lectura = 'Por encima del rango en que la progresion se enlentece. Hay margen de mejora con el soporte antes de plantear otras cosas.';
      } else {
        banda = 'Por encima de 3,5 g/d';
        color = C_ROJO;
        lectura = 'Rango nefrotico. Ojo: rango nefrotico NO equivale a sindrome nefrotico, que exige ademas hipoalbuminemia.';
      }

      const extras = [];
      if (ent === 'iga') {
        if (v.soporte90 && corregido > 0.75) extras.push('NEFROPATIA IgA con mas de 0,75 a 1 g/d PESE a 90 dias o mas de soporte optimizado: eso es lo que hoy define ALTO RIESGO de progresion, y es el punto en que se plantea la inmunosupresion.');
        else if (!v.soporte90) extras.push('NEFROPATIA IgA: el alto riesgo no se define por la cifra sola, sino por mantenerse por encima de 0,75 a 1 g/d tras 90 dias o mas de soporte optimizado. Completa ese plazo antes de decidir.');
        else extras.push('NEFROPATIA IgA: por debajo de 0,75 a 1 g/d tras el soporte no se cumple el criterio de alto riesgo. Reducir por debajo de 1 g/d es un subrogado de mejor evolucion renal.');
        extras.push('Con proteinuria por encima de 0,5 g/d se recomienda IECA o ARA II con independencia de que haya hipertension (recomendacion 1B).');
      } else if (ent === 'cambiosminimos') {
        extras.push('CAMBIOS MINIMOS y sindrome nefrotico corticosensible son la EXCEPCION a los umbrales: lo que define el curso no es un valor de proteinuria sino la REMISION COMPLETA.');
      }
      extras.push('Un descenso sostenido del 30% respecto al valor basal se acepta como subrogado de duplicar la creatinina o llegar a fallo renal.');

      return { banda, color, lectura, nota, corregido, val, metodo: v.metodo, extras };
    },
    format(r) {
      let s = `<strong style="color:${r.color};font-size:14.5px;">${r.banda}.</strong>`;
      s += `<br><span style="opacity:.95;">${r.lectura}</span>`;
      s += `<br><br><strong>Sobre el metodo</strong><br><span style="opacity:.9;">${r.nota}</span>`;
      if (r.metodo === 'primera') s += `<br><span style="opacity:.9;">Valor corregido usado para clasificar: <strong>${r.corregido} g/d</strong> (declarado: ${r.val}).</span>`;
      s += '<br><br>' + r.extras.map(x => '&bull; ' + x).join('<br>');
      s += '<br><span style="opacity:.75;font-size:12.5px;">La albumina supone de media alrededor del 65% de la proteina total en la glomerulonefritis, y las formulas que convierten proteinuria en albuminuria son poco fiables por debajo de 500 mg/d.</span>';
      return s;
    },
    fragment: r => `${r.banda.toLowerCase()}${r.metodo === 'primera' ? ' (corregido a ' + r.corregido + ' g/d)' : ''}`
  },

  {
    key: 'trombosis-nefrotico', title: 'Riesgo trombotico del sindrome nefrotico', accent: '#7a2a2a',
    subtitle: 'Albumina, histologia y la ventana de los 6 meses',
    incompleteMsg: 'Indica la albumina serica y la histologia.',
    fields: [
      { name: 'albumina', id: 'gl-tr-alb', type: 'number', step: '0.1', label: 'Albumina serica en g/dl', placeholder: 'ej. 2.1' },
      { name: 'histologia', id: 'gl-tr-hi', type: 'select', label: 'Histologia', options: [
        { value: '', label: 'Elegir...' },
        { value: 'membranosa', label: 'Nefropatia membranosa' },
        { value: 'otra', label: 'Otra histologia conocida' },
        { value: 'desconocida', label: 'Todavia no se conoce' }
      ] },
      { name: 'meses', id: 'gl-tr-me', type: 'number', step: '0.5', required: false, label: 'Meses desde el diagnostico (opcional)', placeholder: 'ej. 2' },
      { name: 'previa', id: 'gl-tr-pr', type: 'checkbox', label: 'Trombosis previa o predisposicion genetica' },
      { name: 'afl', id: 'gl-tr-af', type: 'checkbox', label: 'Anticuerpos antifosfolipidicos', row: true },
      { name: 'inmovilidad', id: 'gl-tr-in', type: 'checkbox', label: 'Inmovilidad, obesidad, neoplasia, embarazo o cirugia reciente' },
      { name: 'cni', id: 'gl-tr-cni', type: 'checkbox', label: 'Recibe un inhibidor de la calcineurina', row: true },
      { type: 'note', text: 'Los tres mejores predictores segun la guia son la histologia, el grado de proteinuria y la albumina serica. Esto los ordena; no es una puntuacion publicada.' }
    ],
    compute(v) {
      const num = x => (x === null || x === undefined || x === '' || isNaN(x)) ? null : Number(x);
      const alb = num(v.albumina);
      if (alb === null || !v.histologia) return null;
      const meses = num(v.meses);

      const factores = [];
      if (alb < 2.5) factores.push('albumina por debajo de 2,5 g/dl, que predice de forma independiente del grado de proteinuria');
      if (v.histologia === 'membranosa') factores.push('nefropatia membranosa, la histologia de mayor riesgo');
      if (meses !== null && meses <= 6) factores.push('dentro de los primeros 6 meses desde el diagnostico, que es la ventana de mayor riesgo');
      if (v.previa) factores.push('trombosis previa o predisposicion genetica');
      if (v.afl) factores.push('anticuerpos antifosfolipidicos');
      if (v.inmovilidad) factores.push('inmovilidad, obesidad, neoplasia, embarazo o cirugia');

      const mayor = (alb < 2.5) || v.histologia === 'membranosa';
      let nivel, color;
      if (factores.length >= 3 || (mayor && factores.length >= 2)) { nivel = 'ALTO'; color = C_ROJO; }
      else if (mayor || factores.length >= 1) { nivel = 'INTERMEDIO'; color = C_AMBAR; }
      else { nivel = 'BAJO con los datos dados'; color = C_VERDE; }

      const conducta = [
        'Si YA hay evento tromboembolico: anticoagulacion COMPLETA, sin discusion',
        'Si no lo hay: la profilaxis se indica cuando el riesgo de tromboembolia supera el riesgo individual estimado de hemorragia grave por la anticoagulacion',
        'Agentes de eleccion: heparina o sus derivados y cumarinicos',
        'Los anticoagulantes orales DIRECTOS no se han estudiado de forma sistematica en el paciente nefrotico, ni para profilaxis ni para tratamiento'
      ];
      if (v.cni) conducta.push('Atencion a la interaccion: la warfarina tiene muchas interacciones farmacologicas, en especial con los inhibidores de la calcineurina');

      return { nivel, color, factores, alb, histologia: v.histologia, meses, conducta, mayor };
    },
    format(r) {
      let s = `<strong style="color:${r.color};font-size:14.5px;">Riesgo trombotico ${r.nivel}.</strong>`;
      if (r.factores.length) s += '<br><br><strong>Factores presentes</strong><br>' + r.factores.map(x => '&bull; ' + x).join('<br>');
      else s += '<br><span style="opacity:.9;">Ninguno de los factores que la guia enumera esta presente con los datos dados.</span>';
      s += '<br><br><strong>Lo que corresponde</strong><br>' + r.conducta.map(x => '&bull; ' + x).join('<br>');
      s += '<br><br><span style="opacity:.9;">Donde ocurre: la trombosis venosa profunda y la de la VENA RENAL son las mas frecuentes, y la embolia pulmonar es relativamente comun y puede cursar SIN sintomas. La arterial es poco frecuente, aunque se ha descrito en practicamente todos los lechos.</span>';
      if (r.meses === null) s += '<br><span style="opacity:.75;font-size:12.5px;">No has indicado el tiempo desde el diagnostico. Importa: el riesgo es mayor sobre todo en los primeros 6 meses.</span>';
      s += '<br><span style="opacity:.75;font-size:12.5px;">Reducir la proteinuria eleva la albumina, y esa subida baja el riesgo trombotico: es una de las razones por las que el objetivo de proteinuria no es cosmetico.</span>';
      return s;
    },
    fragment: r => `riesgo trombotico ${r.nivel.toLowerCase()}, con ${r.factores.length} factor(es)`
  }
];
