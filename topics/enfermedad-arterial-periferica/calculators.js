// topics/enfermedad-arterial-periferica/calculators.js
// 3 herramientas:
// - itb: indice tobillo-brazo. 4 presiones sistolicas (ambos tobillos y ambos brazos); el
//   denominador es la braquial mas alta y el numerador, la de tobillo mas alta de cada pierna.
//   Campo opcional de presion del hallux para el indice dedo-brazo (Aboyans V, et al.
//   Circulation. 2012;126(24):2890-2909).
// - wifi: ejes W, I y fI de la clasificacion WIfI de la Society for Vascular Surgery (Mills JL,
//   et al. J Vasc Surg. 2014;59(1):220-234). Devuelve los 3 grados y una estimacion ORIENTATIVA
//   del riesgo de amputacion; el estadio formal 1-4 procede de la matriz original.
// - rutherford-iaa: categoria de Rutherford de la isquemia arterial aguda a partir de la perdida
//   sensitiva, la debilidad motora y las senales Doppler (Rutherford RB, et al. J Vasc Surg.
//   1997;26(3):517-538). La categoria la fija el hallazgo mas grave.
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

export const calculators = [
  {
    key: 'itb', title: 'Índice tobillo-brazo (ITB)', accent: '#6e3b2e',
    subtitle: 'Diagnóstico y gradación hemodinámica de la EAP',
    incompleteMsg: 'Introduce las 4 presiones sistólicas (ambos tobillos y ambos brazos).',
    fields: [
      { type: 'note', text: 'Presión sistólica medida con Doppler. En cada tobillo, usa la más alta entre la pedia y la tibial posterior. El denominador es la más alta de las dos presiones braquiales.' },
      { name: 'tobilloDer', id: 'eap-itb-tob-der', type: 'number', label: 'Tobillo derecho (mmHg)', placeholder: 'ej. 120', row: 'r1' },
      { name: 'tobilloIzq', id: 'eap-itb-tob-izq', type: 'number', label: 'Tobillo izquierdo (mmHg)', placeholder: 'ej. 90', row: 'r1' },
      { name: 'brazoDer', id: 'eap-itb-brazo-der', type: 'number', label: 'Brazo derecho (mmHg)', placeholder: 'ej. 140', row: 'r2' },
      { name: 'brazoIzq', id: 'eap-itb-brazo-izq', type: 'number', label: 'Brazo izquierdo (mmHg)', placeholder: 'ej. 138', row: 'r2' },
      { name: 'dedo', id: 'eap-itb-dedo', type: 'number', required: false, label: 'Opcional: presión del hallux (mmHg)', placeholder: 'para el índice dedo-brazo' }
    ],
    compute(v) {
      if ([v.tobilloDer, v.tobilloIzq, v.brazoDer, v.brazoIzq].some(x => x == null)) return null;
      const braquial = Math.max(v.brazoDer, v.brazoIzq);
      if (!(braquial > 0)) return null;
      const clasificar = i => {
        if (i > 1.40) return 'no compresible';
        if (i >= 1.00) return 'normal';
        if (i >= 0.91) return 'limitrofe';
        if (i > 0.40) return 'EAP';
        return 'EAP grave';
      };
      const itbDer = v.tobilloDer / braquial;
      const itbIzq = v.tobilloIzq / braquial;
      const idb = (v.dedo != null && v.dedo > 0) ? v.dedo / braquial : null;
      return { itbDer, itbIzq, clDer: clasificar(itbDer), clIzq: clasificar(itbIzq), idb };
    },
    format: r => {
      const fmt = (i, c) => `${i.toFixed(2)} (${c})`;
      let extra = '';
      const noComp = r.clDer === 'no compresible' || r.clIzq === 'no compresible';
      if (noComp && r.idb == null) extra = ' Arterias no compresibles: mide la presión del hallux para el índice dedo-brazo.';
      if (r.idb != null) extra = ` Índice dedo-brazo ${r.idb.toFixed(2)} (${r.idb < 0.70 ? 'anormal, apoya EAP' : 'normal'}).`;
      return `<strong>ITB derecho ${fmt(r.itbDer, r.clDer)} y ITB izquierdo ${fmt(r.itbIzq, r.clIzq)}</strong>. Cortes: menor o igual a 0.90 diagnóstico de EAP, 0.91 a 0.99 limítrofe (valorar ITB de ejercicio), 1.00 a 1.40 normal, mayor de 1.40 no compresible.${extra}`;
    },
    fragment: r => `ITB ${Math.min(r.itbDer, r.itbIzq).toFixed(2)} (peor pierna)`
  },
  {
    key: 'wifi', title: 'WIfI (herida, isquemia e infección del pie)', accent: '#8c3a34',
    subtitle: 'Ejes de la isquemia crónica que amenaza la extremidad (estadio orientativo)',
    incompleteMsg: 'Selecciona un grado de 0 a 3 en los tres ejes.',
    fields: [
      { name: 'w', id: 'eap-wifi-w', type: 'select', label: 'Herida (Wound)', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: '0: sin úlcera ni gangrena (solo dolor isquémico de reposo)' },
        { value: '1', label: '1: úlcera pequena y superficial, sin gangrena' },
        { value: '2', label: '2: úlcera más profunda o gangrena limitada a los dedos' },
        { value: '3', label: '3: úlcera extensa o gangrena que afecta el antepie o el mediopie' }
      ] },
      { name: 'i', id: 'eap-wifi-i', type: 'select', label: 'Isquemia (Ischemia)', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: '0: ITB 0.80 o más, presión de tobillo mayor de 100 o de dedo 60 o más' },
        { value: '1', label: '1: ITB 0.60 a 0.79, tobillo 70 a 100 o dedo 40 a 59 mmHg' },
        { value: '2', label: '2: ITB 0.40 a 0.59, tobillo 50 a 70 o dedo 30 a 39 mmHg' },
        { value: '3', label: '3: ITB 0.39 o menos, tobillo menor de 50 o dedo menor de 30 mmHg' }
      ] },
      { name: 'fi', id: 'eap-wifi-fi', type: 'select', label: 'Infección del pie (foot Infection)', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: '0: sin signos de infección' },
        { value: '1', label: '1: infección local leve (eritema de 0.5 a 2 cm)' },
        { value: '2', label: '2: infección local más extensa (mayor de 2 cm) sin repercusión sistémica' },
        { value: '3', label: '3: respuesta inflamatoria sistémica (infección grave)' }
      ] },
      { type: 'note', text: 'Ejes de la clasificación WIfI de la Society for Vascular Surgery (Mills, 2014). El estadio de riesgo de amputación a 1 ano (1 a 4) se obtiene de la matriz original; el valor que se muestra abajo es una lectura orientativa. Regla práctica: a mayor grado en cualquiera de los tres ejes, mayor riesgo de amputación y mayor beneficio esperado de la revascularización.' }
    ],
    compute(v) {
      if ([v.w, v.i, v.fi].some(x => x == null || x === '')) return null;
      const w = +v.w, i = +v.i, fi = +v.fi;
      const muyBajo = w === 0 && i === 0 && fi === 0;
      const alto = i === 3 || w === 3 || fi === 3 || (i >= 2 && w >= 2);
      let riesgo;
      if (muyBajo) riesgo = 'muy bajo';
      else if (alto) riesgo = 'alto';
      else if (i === 0 && fi <= 1) riesgo = 'bajo';
      else riesgo = 'moderado';
      return { w, i, fi, riesgo };
    },
    format: r => {
      const isq = r.i >= 1
        ? `La isquemia grado ${r.i} indica que la revascularización puede mejorar la cicatrización.`
        : 'La isquemia grado 0 es leve; prioriza el cuidado de la herida y el control de la infección.';
      return `<strong>WIfI ${r.w}-${r.i}-${r.fi}</strong> (herida ${r.w}, isquemia ${r.i}, infección ${r.fi}). Riesgo de amputación a 1 ano orientativo: <strong>${r.riesgo}</strong>. ${isq} El estadio formal de 1 a 4 procede de la matriz de Mills (2014).`;
    },
    fragment: r => `WIfI ${r.w}-${r.i}-${r.fi} (riesgo ${r.riesgo})`
  },
  {
    key: 'rutherford-iaa', title: 'Rutherford de la isquemia arterial aguda', accent: '#7a1f3d',
    subtitle: 'Categoría de viabilidad y conducta en la isquemia aguda de la extremidad',
    incompleteMsg: 'Responde los 4 campos (sensibilidad, fuerza y las dos senales Doppler).',
    fields: [
      { name: 'sens', id: 'eap-riaa-sens', type: 'select', label: 'Pérdida sensitiva', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Ninguna' },
        { value: '1', label: 'Mínima, limitada a los dedos' },
        { value: '2', label: 'Más allá de los dedos, con dolor de reposo' },
        { value: '3', label: 'Anestesia profunda de la extremidad' }
      ] },
      { name: 'motor', id: 'eap-riaa-motor', type: 'select', label: 'Debilidad motora', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Ninguna' },
        { value: '1', label: 'Leve o parcial' },
        { value: '2', label: 'Profunda: parálisis con rigidez' }
      ] },
      { name: 'art', id: 'eap-riaa-art', type: 'select', label: 'Senal Doppler arterial (tobillo)', options: [
        { value: '', label: 'Selecciona' },
        { value: 'si', label: 'Audible' },
        { value: 'no', label: 'Inaudible' }
      ] },
      { name: 'ven', id: 'eap-riaa-ven', type: 'select', label: 'Senal Doppler venosa', options: [
        { value: '', label: 'Selecciona' },
        { value: 'si', label: 'Audible' },
        { value: 'no', label: 'Inaudible' }
      ] },
      { type: 'note', text: 'Clasificación de Rutherford (Society for Vascular Surgery, 1997). La categoría la fija el hallazgo más grave; guía la urgencia y el tipo de revascularización.' }
    ],
    compute(v) {
      if ([v.sens, v.motor, v.art, v.ven].some(x => x == null || x === '')) return null;
      const sens = +v.sens, motor = +v.motor;
      let cat;
      if (v.ven === 'no' && (sens === 3 || motor === 2)) cat = 'III';
      else if (sens >= 2 || motor >= 1) cat = 'IIb';
      else if (sens === 1 || v.art === 'no') cat = 'IIa';
      else cat = 'I';
      return { cat };
    },
    format: r => {
      const M = {
        'I': ['I: viable', 'No hay amenaza inmediata. Anticoagular con heparina, completar la imagen y revascularizar de forma programada-urgente.'],
        'IIa': ['IIa: marginalmente amenazada', 'Salvable si se trata pronto. Heparina y revascularización sin demora: trombólisis dirigida por catéter o trombectomía según la anatomía y el tiempo de evolución.'],
        'IIb': ['IIb: inmediatamente amenazada', 'Salvable solo con revascularización inmediata. Heparina y quirófano sin retrasarse por la imagen (embolectomia con Fogarty, tromboendarterectomia o bypass). Anticipar el síndrome de reperfusión y valorar fasciotomia.'],
        'III': ['III: irreversible', 'Pérdida tisular mayor o dano nervioso permanente inevitables. Amputación primaria: revascularizar puede ser mortal por el síndrome de reperfusión.']
      };
      const [t, txt] = M[r.cat];
      return `<strong>Categoría ${t}</strong>. ${txt}`;
    },
    fragment: r => `Isquemia aguda Rutherford ${r.cat}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
