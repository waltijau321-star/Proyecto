// topics/sindrome-cardiovascular-renal-metabolico/calculators.js
// 1 herramienta:
// - estadio-ckm: estadificacion 0 a 4 del sindrome cardiovascular-renal-metabolico segun el aviso
//   presidencial de la AHA (Ndumele CE, et al. Circulation. 2023), con la conducta y el cribado
//   que corresponden a cada estadio.
//
// Las ecuaciones PREVENT (Khan SS, et al. Circulation. 2024) NO se implementan aqui: sus
// coeficientes requieren una reproduccion exacta que no se puede verificar en este entorno, y
// una calculadora de riesgo mal calibrada es peor que ninguna. Se referencia la herramienta
// oficial de la AHA. Mismo criterio que con Martin-Hopkins en `dislipidemias` y con FRAX en
// `osteoporosis`.
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

const CONDUCTA = {
  '0': {
    titulo: 'Estadio 0: sin factores de riesgo CKM',
    que: 'Prevención primordial: mantener el estado con alimentación de patrón mediterráneo o DASH, actividad física con trabajo de fuerza, sueno suficiente y no fumar. No hay indicación de ningún fármaco.',
    cribado: 'Peso, cintura, presión arterial, glucemia y lípidos cada 3 a 5 anos, y antes en cada momento vital de riesgo.'
  },
  '1': {
    titulo: 'Estadio 1: exceso o disfunción de la adiposidad',
    que: 'Actuar sobre la adiposidad: estilo de vida estructurado con meta de perder al menos un 5% del peso, y valorar fármaco para el peso según los umbrales de la obesidad. Es el estadio donde la regresión es más alcanzable.',
    cribado: 'Peso, cintura, presión arterial y glucemia al menos anuales; perfil lipídico y filtrado glomerular con cociente albúmina/creatinina cada 1 a 2 anos.'
  },
  '2': {
    titulo: 'Estadio 2: factores metabólicos o enfermedad renal crónica',
    que: 'Tratar cada factor y proteger órgano: presión arterial por debajo de 130/80, estatina según riesgo, control glucémico individualizado, e IECA o ARA si hay albuminuria. Priorizar los fármacos que actuan en varios ejes: inhibidor de SGLT2, agonista del receptor de GLP-1 y finerenona según el perfil.',
    cribado: 'Anual completo: presión arterial, HbA1c, perfil lipídico, filtrado glomerular y cociente albúmina/creatinina. Potasio y función renal a las 2 a 4 semanas de cada cambio de IECA, ARA o finerenona.'
  },
  '3': {
    titulo: 'Estadio 3: enfermedad cardiovascular subclínica',
    que: 'Intensificar antes del primer evento: objetivos más estrictos de colesterol LDL y de presión arterial, y anadir inhibidor de SGLT2 y agonista del receptor de GLP-1 con beneficio probado aunque el control metabólico ya sea bueno. Es el último estadio de prevención primaria.',
    cribado: 'Control cada 3 a 6 meses de presión, lípidos, HbA1c, función renal y albuminuria, con reevaluación de los marcadores que definieron el estadio. Valorar seguimiento compartido con cardiología o nefrología.'
  },
  '4a': {
    titulo: 'Estadio 4a: enfermedad cardiovascular clínica sin fallo renal',
    que: 'Terapia dirigida por guías de la enfermedad establecida, sin abandonar los ejes metabólico y renal, que siguen determinando el pronóstico. Asegurar los fármacos con beneficio cardiorrenal probado y revisar la polifarmacia.',
    cribado: 'Seguimiento estrecho y multidisciplinar, con optimización del tratamiento antes de cada alta y vigilancia de la transición, que es el periodo de mayor riesgo de reingreso.'
  },
  '4b': {
    titulo: 'Estadio 4b: enfermedad cardiovascular clínica con fallo renal',
    que: 'Como el 4a, pero el fallo renal condiciona la elección y la dosis de casi todos los fármacos y ensombrece el pronóstico. Coordinación explícita con nefrología y cardiología, y valoración de tratamiento renal sustitutivo o trasplante.',
    cribado: 'Seguimiento compartido con nefrología, control del metabolismo mineral y de la anemia, y planificación anticipada de cuidados en el paciente frágil.'
  }
};

export const calculators = [
  {
    key: 'estadio-ckm', title: 'Estadio del síndrome cardiovascular-renal-metabólico', accent: '#3d6b8a',
    subtitle: 'Estadificación 0 a 4 de la AHA, con la conducta de cada estadio',
    incompleteMsg: 'Indica si hay enfermedad cardiovascular clínica y marca lo que corresponda.',
    fields: [
      { name: 'clinica', id: 'ckm-clinica', type: 'select', label: 'Enfermedad cardiovascular clínica (cardiopatía isquémica, insuficiencia cardiaca, ictus, enfermedad arterial periférica o fibrilación auricular)', options: [
        { value: '', label: 'Selecciona' },
        { value: 'no', label: 'No' },
        { value: 'si', label: 'Si, sin fallo renal' },
        { value: 'si-renal', label: 'Si, con fallo renal (filtrado muy bajo o tratamiento sustitutivo)' } ] },
      { name: 'subclinica', id: 'ckm-subclinica', type: 'checkbox', label: 'Enfermedad cardiovascular subclínica: calcio coronario positivo, placa, péptidos natriuréticos o troponina elevados, alteraciones ecocardiográficas; o equivalente de riesgo alto (enfermedad renal de muy alto riesgo, riesgo predicho alto)' },
      { name: 'metabolico', id: 'ckm-metabolico', type: 'checkbox', label: 'Factor de riesgo metabólico: diabetes, hipertensión, triglicéridos de 135 mg/dL o más, o síndrome metabólico' },
      { name: 'renal', id: 'ckm-renal', type: 'checkbox', label: 'Enfermedad renal crónica: filtrado glomerular menor de 60 mL/min/1.73 m2 o cociente albúmina/creatinina de 30 mg/g o más, mantenidos' },
      { name: 'adiposidad', id: 'ckm-adiposidad', type: 'checkbox', label: 'Exceso de adiposidad: índice de masa corporal de 25 o más (23 o más en ascendencia asiática), o perímetro de cintura elevado' },
      { name: 'prediabetes', id: 'ckm-prediabetes', type: 'checkbox', label: 'Adiposidad disfuncional: prediabetes o intolerancia a la glucosa' },
      { type: 'note', text: 'El estadio lo determina el criterio más avanzado que se cumpla. Dos ideas del marco importan más que la clasificación: los estadios PUEDEN RETROCEDER (perder peso, remitir la diabetes o revertir la albuminuria devuelven a un estadio anterior), y los determinantes sociales de la salud forman parte explícita del marco porque condicionan la progresión y la viabilidad del tratamiento. Para cuantificar el riesgo, la AHA propone las ecuaciones PREVENT, que no se reproducen aquí: usa la herramienta oficial.' }
    ],
    compute(v) {
      if (!v.clinica) return null;
      let clave;
      if (v.clinica === 'si-renal') clave = '4b';
      else if (v.clinica === 'si') clave = '4a';
      else if (v.subclinica) clave = '3';
      else if (v.metabolico || v.renal) clave = '2';
      else if (v.adiposidad || v.prediabetes) clave = '1';
      else clave = '0';
      const criterios = [];
      if (v.adiposidad) criterios.push('exceso de adiposidad');
      if (v.prediabetes) criterios.push('prediabetes');
      if (v.metabolico) criterios.push('factor metabólico');
      if (v.renal) criterios.push('enfermedad renal crónica');
      if (v.subclinica) criterios.push('enfermedad cardiovascular subclínica');
      if (v.clinica !== 'no') criterios.push('enfermedad cardiovascular clínica');
      return { clave, info: CONDUCTA[clave], criterios, sinRenal: !v.renal && (v.metabolico || v.subclinica) };
    },
    format: r => {
      let s = `<strong>${r.info.titulo}</strong>. ${r.info.que} <strong>Cribado:</strong> ${r.info.cribado}`;
      if (r.criterios.length) s += ` Criterios presentes: ${r.criterios.join(', ')}.`;
      if (r.sinRenal) s += ' <strong>Comprueba que tienes un cociente albúmina/creatinina reciente:</strong> es la prueba que más cambia el estadio y la que más se omite.';
      if (r.clave === '2' || r.clave === '3') s += ' Los estadios pueden retroceder: la pérdida de peso, la remisión de la diabetes o la reversión de la albuminuria devuelven al paciente a un estadio anterior.';
      return s;
    },
    fragment: r => `Estadio CKM ${r.clave}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
