// topics/nefropatia-diabetica-hipertensiva/calculators.js - Las cuatro herramientas del modulo 92.
// Fuentes: KDIGO 2022 Diabetes Management in CKD (Kidney Int 2022;102(5S):S1-S127) y KDIGO 2021
// Blood Pressure Management in CKD (Kidney Int 2021;99(3S):S1-S87).
// Las cuatro reproducen criterios publicados y devuelven el GRADO de cada recomendacion, porque
// en este tema la diferencia entre un 1A y un 2A cambia la conversacion con el paciente.
// Lo que NO hacen: ninguna aplica el borrador de 2026, que no es una guia final. El tema lo
// trata aparte, en su propia ficha y su propia figura.

const C_ROJO = '#8c3a34';
const C_AMBAR = '#8a6a2e';
const C_VERDE = '#3f6b52';
const C_AZUL = '#3d5a73';

export const calculators = [
  {
    key: 'pilares-dm2', title: 'Los cuatro pilares: que le corresponde', accent: '#7a6a2e',
    subtitle: 'Umbrales de filtrado, potasio y albuminuria',
    incompleteMsg: 'Indica el filtrado glomerular estimado.',
    fields: [
      { name: 'egfr', id: 'ndh-pi-eg', type: 'number', step: '1', label: 'Filtrado glomerular estimado (ml/min/1,73 m2)', placeholder: 'ej. 38' },
      { name: 'tipo', id: 'ndh-pi-ti', type: 'select', label: 'Tipo de diabetes', options: [
        { value: 'dm2', label: 'Diabetes tipo 2' },
        { value: 'dm1', label: 'Diabetes tipo 1' },
        { value: 'sindm', label: 'Sin diabetes' }
      ] },
      { name: 'uacr', id: 'ndh-pi-ua', type: 'number', step: '1', required: false, label: 'Cociente albumina-creatinina (mg/g), si se conoce', placeholder: 'ej. 180' },
      { name: 'potasio', id: 'ndh-pi-k', type: 'number', step: '0.1', required: false, label: 'Potasio serico (mmol/l), si se conoce', placeholder: 'ej. 4.5' },
      { name: 'hta', id: 'ndh-pi-ht', type: 'checkbox', label: 'Hipertension arterial' },
      { name: 'rasiMax', id: 'ndh-pi-rm', type: 'checkbox', label: 'Ya con IECA o ARA II a dosis maxima tolerada', row: true },
      { name: 'objetivos', id: 'ndh-pi-ob', type: 'checkbox', label: 'NO alcanza los objetivos glucemicos individualizados' },
      { type: 'note', text: 'Los pilares se SUMAN. El antagonista no esteroideo se a&#241;ade al bloqueo y al inhibidor del cotransportador, no los sustituye.' }
    ],
    compute(v) {
      const num = x => (x === null || x === undefined || x === '' || isNaN(x)) ? null : Number(x);
      const eg = num(v.egfr);
      if (eg === null) return null;
      const uacr = num(v.uacr), k = num(v.potasio);
      const tipo = v.tipo || 'dm2';
      const dm2 = tipo === 'dm2';

      const si = [], no = [], faltan = [];

      // 1. Bloqueo
      if (tipo !== 'sindm' && v.hta && uacr !== null && uacr >= 30) {
        si.push({ n: 'IECA o ARA II', g: '1B', d: 'Diabetes, hipertension y albuminuria: se recomienda iniciarlo y titularlo a la dosis maxima aprobada que se tolere.' });
      } else if (tipo !== 'sindm' && uacr === null) {
        faltan.push('No has dado la albuminuria, que es lo que decide la indicacion del bloqueo.');
      } else if (tipo !== 'sindm' && !v.hta) {
        no.push({ n: 'IECA o ARA II', d: 'La recomendacion 1B exige diabetes, HIPERTENSION y albuminuria a la vez. Sin hipertension, mira la calculadora de indicacion por albuminuria, que cubre el resto de escenarios.' });
      } else if (tipo !== 'sindm' && uacr !== null && uacr < 30) {
        no.push({ n: 'IECA o ARA II', d: 'Con albuminuria por debajo de 30 mg/g puede ser razonable, pero la evidencia no demuestra beneficio claro sobre la progresion renal y otros antihipertensivos son igual de apropiados.' });
      }

      // 2. Inhibidor del cotransportador
      if (dm2 && eg >= 20) {
        si.push({ n: 'Inhibidor del cotransportador sodio-glucosa tipo 2', g: '1A', d: 'Filtrado de ' + eg + ', por encima del umbral de 20. Es la unica recomendacion 1A del documento, y la indicacion es por proteccion renal y cardiovascular, no por la glucemia.' });
      } else if (dm2) {
        no.push({ n: 'Inhibidor del cotransportador', d: 'Filtrado de ' + eg + ', por debajo del umbral de 20 que exige la recomendacion.' });
      } else if (tipo === 'sindm') {
        faltan.push('Sin diabetes tipo 2 no aplica esta recomendacion, aunque la guia se&#241;ala que el inhibidor del cotransportador ha demostrado seguridad y beneficio tambien en enfermedad renal sin diabetes tipo 2.');
      }

      // 3. Antagonista no esteroideo
      if (dm2) {
        const kOk = k === null ? null : (k >= 3.5 && k <= 5.0);
        if (eg >= 25 && uacr !== null && uacr >= 30 && v.rasiMax && kOk === true) {
          si.push({ n: 'Antagonista NO esteroideo del receptor mineralocorticoide', g: '2A', d: 'Cumple los cuatro requisitos: filtrado de 25 o mas, potasio normal, albuminuria de 30 mg/g o mas y dosis maxima tolerada de bloqueo. Se A&#209;ADE al bloqueo y al inhibidor del cotransportador.' });
        } else {
          const falla = [];
          if (eg < 25) falla.push('filtrado de ' + eg + ', por debajo de 25');
          if (uacr === null) falla.push('falta la albuminuria');
          else if (uacr < 30) falla.push('albuminuria de ' + uacr + ' mg/g, por debajo de 30');
          if (k === null) falla.push('falta el potasio');
          else if (kOk === false) falla.push('potasio de ' + k + ', fuera del rango normal');
          if (!v.rasiMax) falla.push('todavia no esta con bloqueo a dosis maxima tolerada');
          no.push({ n: 'Antagonista no esteroideo', d: 'No cumple por: ' + falla.join('; ') + '.' });
        }
      }

      // 4. Metformina y GLP-1
      if (dm2 && eg >= 30) si.push({ n: 'Metformina', g: '1B', d: 'Filtrado de ' + eg + ', por encima del umbral de 30.' });
      else if (dm2) no.push({ n: 'Metformina', d: 'Filtrado de ' + eg + ', por debajo del umbral de 30.' });

      if (dm2 && v.objetivos) si.push({ n: 'Agonista del receptor de GLP-1 de accion prolongada', g: '1B', d: 'No alcanza los objetivos glucemicos individualizados pese a metformina e inhibidor del cotransportador, o no puede usarlos.' });

      const avisos = [];
      if (si.some(x => x.n.indexOf('cotransportador') >= 0)) {
        avisos.push('Precauciones del inhibidor del cotransportador: es razonable suspenderlo en ayunos prolongados, cirugia o enfermedad critica, por el riesgo de cetosis; y si hay riesgo de hipovolemia, considera bajar la tiazida o el diuretico de asa ANTES de empezar.');
      }
      if (si.some(x => x.n.indexOf('NO esteroideo') >= 0)) {
        avisos.push('Tras iniciar el antagonista no esteroideo, monitoriza el potasio con regularidad. Y no lo confundas con el antagonista ESTEROIDEO, cuyo sitio es la insuficiencia cardiaca, el hiperaldosteronismo y la hipertension refractaria.');
      }
      if (tipo === 'dm1') avisos.push('En diabetes tipo 1 las recomendaciones de inhibidor del cotransportador, metformina y antagonista no esteroideo de la guia VIGENTE de 2022 estan dirigidas a la tipo 2. El borrador de 2026 a&#241;ade el antagonista no esteroideo para la tipo 1 (2C, filtrado 25 o mas, potasio normal, albuminuria de 200 mg/g o mas), pero es un borrador.');

      return { si, no, faltan, avisos, eg, tipo, uacr, k };
    },
    format(r) {
      let s;
      if (r.si.length) {
        s = `<strong style="color:${C_VERDE};font-size:14.5px;">Le corresponden ${r.si.length} de los pilares.</strong>`;
        s += '<br><br><strong>Indicado</strong><br>' + r.si.map(x => `&bull; <strong>${x.n}</strong> <span style="opacity:.8;">(${x.g})</span><br><span style="opacity:.9;padding-left:12px;">${x.d}</span>`).join('<br>');
      } else {
        s = `<strong style="color:${C_AMBAR};font-size:14.5px;">Con los datos dados no se cumple ningun pilar.</strong>`;
      }
      if (r.no.length) s += '<br><br><strong style="color:#8a6a2e;">No indicado por ahora</strong><br>' + r.no.map(x => `&bull; <strong>${x.n}</strong>: ${x.d}`).join('<br>');
      if (r.faltan.length) s += '<br><br>' + r.faltan.map(x => `<span style="opacity:.75;font-size:12.5px;">${x}</span>`).join('<br>');
      if (r.avisos.length) s += '<br><br>' + r.avisos.map(x => `<span style="color:${C_AZUL};">${x}</span>`).join('<br><br>');
      return s;
    },
    fragment: r => `${r.si.length} pilar(es) indicados con filtrado de ${r.eg}`
  },

  {
    key: 'medida-estandarizada', title: '&#191;Tu medida de tension vale?', accent: '#8c3a34',
    subtitle: 'Sin medida estandarizada no hay objetivo de 120',
    incompleteMsg: 'Marca los requisitos que se cumplieron.',
    fields: [
      { name: 'reposo', id: 'ndh-me-re', type: 'checkbox', label: 'Mas de 5 minutos sentado, pies en el suelo y espalda apoyada' },
      { name: 'estimulantes', id: 'ndh-me-es', type: 'checkbox', label: 'Sin cafeina, ejercicio ni tabaco en los 30 minutos previos', row: true },
      { name: 'vejiga', id: 'ndh-me-ve', type: 'checkbox', label: 'Vejiga vacia' },
      { name: 'silencio', id: 'ndh-me-si', type: 'checkbox', label: 'Ni el paciente ni el observador hablaron', row: true },
      { name: 'ropa', id: 'ndh-me-ro', type: 'checkbox', label: 'Sin ropa bajo el manguito' },
      { name: 'nocamilla', id: 'ndh-me-nc', type: 'checkbox', label: 'En silla, NO en la camilla de exploracion', row: true },
      { name: 'brazo', id: 'ndh-me-br', type: 'checkbox', label: 'Brazo apoyado y manguito a la altura del punto medio del esternon' },
      { name: 'manguito', id: 'ndh-me-ma', type: 'checkbox', label: 'Manguito del tama&#241;o correcto, rodeando el 80% del brazo', row: true },
      { name: 'dispositivo', id: 'ndh-me-di', type: 'checkbox', label: 'Dispositivo validado y calibrado' },
      { name: 'promedio', id: 'ndh-me-pr', type: 'checkbox', label: 'Se promediaron varias lecturas', row: true },
      { name: 'sistolica', id: 'ndh-me-sy', type: 'number', step: '1', required: false, label: 'Sistolica obtenida en mmHg (opcional)', placeholder: 'ej. 134' },
      { type: 'note', text: 'La guia llama POTENCIALMENTE PELIGROSO aplicar el objetivo de 120 a una medida no estandarizada, porque arriesga sobretratar.' }
    ],
    compute(v) {
      const req = [
        ['reposo', 'mas de 5 minutos de reposo sentado'],
        ['estimulantes', 'sin cafeina, ejercicio ni tabaco 30 minutos antes'],
        ['vejiga', 'vejiga vacia'],
        ['silencio', 'nadie hablo'],
        ['ropa', 'sin ropa bajo el manguito'],
        ['nocamilla', 'en silla y no en la camilla'],
        ['brazo', 'brazo apoyado y manguito a la altura correcta'],
        ['manguito', 'tama&#241;o de manguito correcto'],
        ['dispositivo', 'dispositivo validado y calibrado'],
        ['promedio', 'lecturas promediadas']
      ];
      const faltan = req.filter(([k]) => !v[k]).map(([, t]) => t);
      const cumple = req.length - faltan.length;
      const estandarizada = faltan.length === 0;
      const num = x => (x === null || x === undefined || x === '' || isNaN(x)) ? null : Number(x);
      const sys = num(v.sistolica);
      return { estandarizada, cumple, total: req.length, faltan, sys };
    },
    format(r) {
      let s;
      if (r.estandarizada) {
        s = `<strong style="color:${C_VERDE};font-size:14.5px;">Medida ESTANDARIZADA (${r.cumple} de ${r.total}).</strong>`;
        s += '<br><span style="opacity:.95;">Sobre esta cifra si puede aplicarse el objetivo de sistolica por debajo de 120 mmHg cuando se tolere (recomendacion 2B).</span>';
        if (r.sys !== null) {
          s += r.sys < 120
            ? `<br><br><strong style="color:${C_VERDE};">Con ${r.sys} mmHg esta en objetivo.</strong>`
            : `<br><br><strong style="color:${C_AMBAR};">Con ${r.sys} mmHg esta por encima del objetivo de 120.</strong> Valora intensificar, salvo que haya esperanza de vida muy limitada o hipotension postural sintomatica, situaciones en que es razonable un tratamiento menos intensivo.`;
        }
      } else {
        s = `<strong style="color:${C_ROJO};font-size:14.5px;">Medida NO estandarizada (${r.cumple} de ${r.total}).</strong>`;
        s += '<br><span style="opacity:.95;">La guia considera POTENCIALMENTE PELIGROSO aplicar el objetivo de menos de 120 mmHg a una medida obtenida de forma no estandarizada.</span>';
        s += '<br><br><strong>Lo que falta</strong><br>' + r.faltan.map(x => '&bull; ' + x).join('<br>');
        if (r.sys !== null) s += `<br><br><span style="color:${C_ROJO};">No tomes los ${r.sys} mmHg como base para decidir: las medidas no estandarizadas dan con frecuencia valores sustancialmente mas altos, y a veces mas bajos, de forma impredecible en cada paciente.</span>`;
      }
      s += '<br><br><span style="opacity:.75;font-size:12.5px;">La monitorizacion ambulatoria y la automedida domiciliaria COMPLEMENTAN la medida estandarizada de consulta (2B), no la sustituyen: no hay evidencia de que se pueda estimar de forma fiable la cifra estandarizada a partir de una medida tomada de otra manera.</span>';
      return s;
    },
    fragment: r => r.estandarizada ? 'medida estandarizada: el objetivo de 120 es aplicable' : `medida NO estandarizada (${r.cumple} de ${r.total}): no apliques el objetivo de 120`
  },

  {
    key: 'manejo-rasi', title: 'Bloqueo: &#191;se mantiene o se toca?', accent: '#4a6b7a',
    subtitle: 'La regla del 30% y el potasio',
    incompleteMsg: 'Indica la creatinina antes y despues.',
    fields: [
      { name: 'crBasal', id: 'ndh-ra-cb', type: 'number', step: '0.01', label: 'Creatinina ANTES de iniciar o subir (mg/dl)', placeholder: 'ej. 1.20' },
      { name: 'crActual', id: 'ndh-ra-ca', type: 'number', step: '0.01', label: 'Creatinina AHORA (mg/dl)', placeholder: 'ej. 1.45' },
      { name: 'semanas', id: 'ndh-ra-se', type: 'number', step: '0.5', label: 'Semanas transcurridas desde el inicio o la subida', placeholder: 'ej. 3' },
      { name: 'potasio', id: 'ndh-ra-k', type: 'number', step: '0.1', required: false, label: 'Potasio serico (mmol/l), si se conoce', placeholder: 'ej. 5.4' },
      { name: 'dosisMax', id: 'ndh-ra-dm', type: 'checkbox', label: 'Ya esta en la dosis maxima aprobada tolerada' },
      { name: 'combinado', id: 'ndh-ra-co', type: 'checkbox', label: 'Lleva a la vez IECA y ARA II, o un inhibidor directo de la renina', row: true },
      { type: 'note', text: 'La regla es del 30% en 4 semanas. Un ascenso menor es el efecto hemodinamico esperable del farmaco.' }
    ],
    compute(v) {
      const num = x => (x === null || x === undefined || x === '' || isNaN(x)) ? null : Number(x);
      const cb = num(v.crBasal), ca = num(v.crActual), sem = num(v.semanas);
      if (cb === null || ca === null || sem === null || cb <= 0) return null;
      const k = num(v.potasio);
      const subida = Math.round(((ca - cb) / cb) * 1000) / 10;

      let conducta, color, detalle;
      if (subida > 30 && sem <= 4) {
        conducta = 'REPLANTEAR el bloqueo';
        color = C_ROJO;
        detalle = 'La creatinina ha subido un ' + subida + '% en ' + sem + ' semanas. La guia dice continuar el IECA o el ARA II SALVO que la creatinina suba mas del 30% en las 4 semanas siguientes a iniciar o aumentar la dosis, y aqui se ha superado ese umbral: toca buscar causa (deplecion de volumen, antiinflamatorios, estenosis de arteria renal) y reconsiderar dosis.';
      } else if (subida > 30) {
        conducta = 'Ascenso por encima del 30%, pero fuera de la ventana de 4 semanas';
        color = C_AMBAR;
        detalle = 'Han pasado ' + sem + ' semanas, de modo que la regla del 30% en 4 semanas no se aplica tal cual. Un deterioro mas tardio obliga a buscar otra explicacion antes de culpar al bloqueo.';
      } else {
        conducta = 'CONTINUAR el bloqueo';
        color = C_VERDE;
        detalle = 'La creatinina ha subido un ' + subida + '%, por debajo del umbral del 30%. Ese ascenso refleja el efecto del farmaco sobre la hemodinamica renal y no empeoramiento de la enfermedad: no es motivo para retirarlo ni para bajar la dosis.';
      }

      const acciones = [];
      if (!v.dosisMax) acciones.push('Seguir titulando hasta la dosis maxima aprobada que se tolere: los beneficios demostrados se obtuvieron en ensayos que usaban esas dosis.');
      if (sem > 4) acciones.push('La comprobacion de tension, creatinina y potasio corresponde DENTRO de las 2 a 4 semanas de iniciar o subir. Aqui se ha hecho mas tarde.');
      else acciones.push('Estas dentro de la ventana correcta de comprobacion, que son 2 a 4 semanas tras iniciar o subir.');

      let avisoK = null;
      if (k !== null && k > 5.0) {
        avisoK = 'Potasio de ' + k + '. La hiperpotasemia asociada al bloqueo puede CON FRECUENCIA manejarse con medidas para reducir el potasio, en lugar de disminuir la dosis o suspenderlo. Revisa dieta, farmacos acompa&#241;antes y acidosis metabolica antes de tocar el bloqueo.';
      }
      const prohibido = !!v.combinado;

      return { conducta, color, detalle, subida, sem, acciones, avisoK, prohibido, k };
    },
    format(r) {
      let s = `<strong style="color:${r.color};font-size:14.5px;">${r.conducta}.</strong>`;
      s += `<br><span style="opacity:.95;">${r.detalle}</span>`;
      if (r.prohibido) s += `<br><br><strong style="color:${C_ROJO};">Combinacion prohibida.</strong> <span style="opacity:.95;">Se recomienda EVITAR cualquier combinacion de IECA, ARA II e inhibidor directo de la renina en el paciente con enfermedad renal cronica, con o sin diabetes (recomendacion 1B, fuerte en contra). Hay que deshacer esa combinacion.</span>`;
      if (r.avisoK) s += `<br><br><span style="color:${C_AMBAR};">${r.avisoK}</span>`;
      s += '<br><br><strong>Ademas</strong><br>' + r.acciones.map(x => '&bull; ' + x).join('<br>');
      return s;
    },
    fragment: r => `creatinina +${r.subida}% en ${r.sem} semanas: ${r.conducta.toLowerCase()}`
  },

  {
    key: 'indicacion-rasi', title: 'Bloqueo segun albuminuria: &#191;que grado?', accent: '#2f6a62',
    subtitle: 'La misma categoria cambia segun haya diabetes',
    incompleteMsg: 'Indica la albuminuria y si hay diabetes.',
    fields: [
      { name: 'uacr', id: 'ndh-ir-ua', type: 'number', step: '1', label: 'Cociente albumina-creatinina (mg/g)', placeholder: 'ej. 120' },
      { name: 'diabetes', id: 'ndh-ir-db', type: 'select', label: '&#191;Tiene diabetes?', options: [
        { value: '', label: 'Elegir...' },
        { value: 'si', label: 'Si' },
        { value: 'no', label: 'No' }
      ] },
      { name: 'hta', id: 'ndh-ir-ht', type: 'checkbox', label: 'Hipertension arterial' },
      { name: 'trasplante', id: 'ndh-ir-tr', type: 'checkbox', label: 'Es receptor de un trasplante renal', row: true },
      { type: 'note', text: 'Categorias: A1 por debajo de 30 mg/g, A2 de 30 a 300, A3 por encima de 300.' }
    ],
    compute(v) {
      const num = x => (x === null || x === undefined || x === '' || isNaN(x)) ? null : Number(x);
      const u = num(v.uacr);
      if (u === null || !v.diabetes) return null;
      const dm = v.diabetes === 'si';
      const cat = u < 30 ? 'A1' : (u <= 300 ? 'A2' : 'A3');

      let grado, texto, color;
      if (cat === 'A1') {
        grado = 'Sin recomendacion graduada';
        color = C_AZUL;
        texto = 'Con albuminuria por debajo de 30 mg/g (A1), con o sin diabetes, PUEDE ser razonable tratar con IECA o ARA II, pero la evidencia no demuestra un beneficio claro sobre la progresion renal y otros antihipertensivos son igual de apropiados para controlar la tension. Estos pacientes tienen menor riesgo de progresar. El argumento a favor seria la proteccion cardiovascular, en quien la valore mucho y tenga bajo riesgo de efectos adversos.';
      } else if (dm) {
        grado = '1B, se RECOMIENDA';
        color = C_VERDE;
        texto = 'Con diabetes y albuminuria ' + cat + ' (moderada o gravemente aumentada), se recomienda iniciar IECA o ARA II. Con diabetes, el grado es el mismo en A2 que en A3.';
      } else if (cat === 'A3') {
        grado = '1B, se RECOMIENDA';
        color = C_VERDE;
        texto = 'Sin diabetes y con albuminuria gravemente aumentada (A3), se recomienda iniciar IECA o ARA II.';
      } else {
        grado = '2C, se SUGIERE';
        color = C_AMBAR;
        texto = 'Sin diabetes y con albuminuria moderadamente aumentada (A2), la recomendacion baja a sugerencia con calidad de evidencia baja. Es el escenario mas debil de los cuatro, y por tanto donde mas pesa la preferencia del paciente.';
      }

      const reglas = [
        'Dosis: la maxima aprobada que se tolere, porque los beneficios demostrados se obtuvieron con esas dosis',
        'Comprobar tension, creatinina y potasio dentro de las 2 a 4 semanas de iniciar o subir',
        'Continuar salvo que la creatinina suba mas del 30% en 4 semanas',
        'Evitar CUALQUIER combinacion de IECA, ARA II e inhibidor directo de la renina (1B en contra)'
      ];
      const avisos = [];
      if (!v.hta) avisos.push('No has marcado hipertension. Las recomendaciones de la guia de tension estan formuladas para pacientes con tension alta y enfermedad renal cronica; la de la guia de diabetes exige diabetes, hipertension y albuminuria a la vez.');
      if (v.trasplante) avisos.push('En el receptor de trasplante renal adulto la primera linea cambia: se recomienda un calcioantagonista DIHIDROPIRIDINICO o un ARA II como antihipertensivo inicial (1C). Es lo contrario de lo que conviene en la glomerulopatia proteinurica, donde las dihidropiridinas pueden aumentar la proteinuria.');

      return { cat, grado, texto, color, u, dm, reglas, avisos };
    },
    format(r) {
      let s = `<strong style="color:${r.color};font-size:14.5px;">${r.cat} ${r.dm ? 'con' : 'sin'} diabetes: ${r.grado}.</strong>`;
      s += `<br><span style="opacity:.95;">${r.texto}</span>`;
      s += `<br><br><span style="opacity:.9;">Albuminuria de ${r.u} mg/g. Categorias: A1 por debajo de 30, A2 de 30 a 300, A3 por encima de 300.</span>`;
      s += '<br><br><strong>Reglas de manejo, sea cual sea el grado</strong><br>' + r.reglas.map(x => '&bull; ' + x).join('<br>');
      if (r.avisos.length) s += '<br><br>' + r.avisos.map(x => `<span style="color:${C_AZUL};">${x}</span>`).join('<br><br>');
      return s;
    },
    fragment: r => `${r.cat} ${r.dm ? 'con' : 'sin'} diabetes: ${r.grado}`
  }
];
