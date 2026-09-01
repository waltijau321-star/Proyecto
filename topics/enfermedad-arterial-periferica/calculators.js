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
    key: 'itb', title: 'Indice tobillo-brazo (ITB)', accent: '#6e3b2e',
    subtitle: 'Diagnostico y gradacion hemodinamica de la EAP',
    incompleteMsg: 'Introduce las 4 presiones sistolicas (ambos tobillos y ambos brazos).',
    fields: [
      { type: 'note', text: 'Presion sistolica medida con Doppler. En cada tobillo, usa la mas alta entre la pedia y la tibial posterior. El denominador es la mas alta de las dos presiones braquiales.' },
      { name: 'tobilloDer', id: 'eap-itb-tob-der', type: 'number', label: 'Tobillo derecho (mmHg)', placeholder: 'ej. 120', row: 'r1' },
      { name: 'tobilloIzq', id: 'eap-itb-tob-izq', type: 'number', label: 'Tobillo izquierdo (mmHg)', placeholder: 'ej. 90', row: 'r1' },
      { name: 'brazoDer', id: 'eap-itb-brazo-der', type: 'number', label: 'Brazo derecho (mmHg)', placeholder: 'ej. 140', row: 'r2' },
      { name: 'brazoIzq', id: 'eap-itb-brazo-izq', type: 'number', label: 'Brazo izquierdo (mmHg)', placeholder: 'ej. 138', row: 'r2' },
      { name: 'dedo', id: 'eap-itb-dedo', type: 'number', required: false, label: 'Opcional: presion del hallux (mmHg)', placeholder: 'para el indice dedo-brazo' }
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
      if (noComp && r.idb == null) extra = ' Arterias no compresibles: mide la presion del hallux para el indice dedo-brazo.';
      if (r.idb != null) extra = ` Indice dedo-brazo ${r.idb.toFixed(2)} (${r.idb < 0.70 ? 'anormal, apoya EAP' : 'normal'}).`;
      return `<strong>ITB derecho ${fmt(r.itbDer, r.clDer)} y ITB izquierdo ${fmt(r.itbIzq, r.clIzq)}</strong>. Cortes: menor o igual a 0.90 diagnostico de EAP, 0.91 a 0.99 limitrofe (valorar ITB de ejercicio), 1.00 a 1.40 normal, mayor de 1.40 no compresible.${extra}`;
    },
    fragment: r => `ITB ${Math.min(r.itbDer, r.itbIzq).toFixed(2)} (peor pierna)`
  },
  {
    key: 'wifi', title: 'WIfI (herida, isquemia e infeccion del pie)', accent: '#8c3a34',
    subtitle: 'Ejes de la isquemia cronica que amenaza la extremidad (estadio orientativo)',
    incompleteMsg: 'Selecciona un grado de 0 a 3 en los tres ejes.',
    fields: [
      { name: 'w', id: 'eap-wifi-w', type: 'select', label: 'Herida (Wound)', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: '0: sin ulcera ni gangrena (solo dolor isquemico de reposo)' },
        { value: '1', label: '1: ulcera pequena y superficial, sin gangrena' },
        { value: '2', label: '2: ulcera mas profunda o gangrena limitada a los dedos' },
        { value: '3', label: '3: ulcera extensa o gangrena que afecta el antepie o el mediopie' }
      ] },
      { name: 'i', id: 'eap-wifi-i', type: 'select', label: 'Isquemia (Ischemia)', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: '0: ITB 0.80 o mas, presion de tobillo mayor de 100 o de dedo 60 o mas' },
        { value: '1', label: '1: ITB 0.60 a 0.79, tobillo 70 a 100 o dedo 40 a 59 mmHg' },
        { value: '2', label: '2: ITB 0.40 a 0.59, tobillo 50 a 70 o dedo 30 a 39 mmHg' },
        { value: '3', label: '3: ITB 0.39 o menos, tobillo menor de 50 o dedo menor de 30 mmHg' }
      ] },
      { name: 'fi', id: 'eap-wifi-fi', type: 'select', label: 'Infeccion del pie (foot Infection)', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: '0: sin signos de infeccion' },
        { value: '1', label: '1: infeccion local leve (eritema de 0.5 a 2 cm)' },
        { value: '2', label: '2: infeccion local mas extensa (mayor de 2 cm) sin repercusion sistemica' },
        { value: '3', label: '3: respuesta inflamatoria sistemica (infeccion grave)' }
      ] },
      { type: 'note', text: 'Ejes de la clasificacion WIfI de la Society for Vascular Surgery (Mills, 2014). El estadio de riesgo de amputacion a 1 ano (1 a 4) se obtiene de la matriz original; el valor que se muestra abajo es una lectura orientativa. Regla practica: a mayor grado en cualquiera de los tres ejes, mayor riesgo de amputacion y mayor beneficio esperado de la revascularizacion.' }
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
        ? `La isquemia grado ${r.i} indica que la revascularizacion puede mejorar la cicatrizacion.`
        : 'La isquemia grado 0 es leve; prioriza el cuidado de la herida y el control de la infeccion.';
      return `<strong>WIfI ${r.w}-${r.i}-${r.fi}</strong> (herida ${r.w}, isquemia ${r.i}, infeccion ${r.fi}). Riesgo de amputacion a 1 ano orientativo: <strong>${r.riesgo}</strong>. ${isq} El estadio formal de 1 a 4 procede de la matriz de Mills (2014).`;
    },
    fragment: r => `WIfI ${r.w}-${r.i}-${r.fi} (riesgo ${r.riesgo})`
  },
  {
    key: 'rutherford-iaa', title: 'Rutherford de la isquemia arterial aguda', accent: '#7a1f3d',
    subtitle: 'Categoria de viabilidad y conducta en la isquemia aguda de la extremidad',
    incompleteMsg: 'Responde los 4 campos (sensibilidad, fuerza y las dos senales Doppler).',
    fields: [
      { name: 'sens', id: 'eap-riaa-sens', type: 'select', label: 'Perdida sensitiva', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Ninguna' },
        { value: '1', label: 'Minima, limitada a los dedos' },
        { value: '2', label: 'Mas alla de los dedos, con dolor de reposo' },
        { value: '3', label: 'Anestesia profunda de la extremidad' }
      ] },
      { name: 'motor', id: 'eap-riaa-motor', type: 'select', label: 'Debilidad motora', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Ninguna' },
        { value: '1', label: 'Leve o parcial' },
        { value: '2', label: 'Profunda: paralisis con rigidez' }
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
      { type: 'note', text: 'Clasificacion de Rutherford (Society for Vascular Surgery, 1997). La categoria la fija el hallazgo mas grave; guia la urgencia y el tipo de revascularizacion.' }
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
        'IIa': ['IIa: marginalmente amenazada', 'Salvable si se trata pronto. Heparina y revascularizacion sin demora: trombolisis dirigida por cateter o trombectomia segun la anatomia y el tiempo de evolucion.'],
        'IIb': ['IIb: inmediatamente amenazada', 'Salvable solo con revascularizacion inmediata. Heparina y quirofano sin retrasarse por la imagen (embolectomia con Fogarty, tromboendarterectomia o bypass). Anticipar el sindrome de reperfusion y valorar fasciotomia.'],
        'III': ['III: irreversible', 'Perdida tisular mayor o dano nervioso permanente inevitables. Amputacion primaria: revascularizar puede ser mortal por el sindrome de reperfusion.']
      };
      const [t, txt] = M[r.cat];
      return `<strong>Categoria ${t}</strong>. ${txt}`;
    },
    fragment: r => `Isquemia aguda Rutherford ${r.cat}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
