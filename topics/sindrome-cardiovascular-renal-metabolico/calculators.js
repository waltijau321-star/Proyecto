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
    que: 'Prevencion primordial: mantener el estado con alimentacion de patron mediterraneo o DASH, actividad fisica con trabajo de fuerza, sueno suficiente y no fumar. No hay indicacion de ningun farmaco.',
    cribado: 'Peso, cintura, presion arterial, glucemia y lipidos cada 3 a 5 anos, y antes en cada momento vital de riesgo.'
  },
  '1': {
    titulo: 'Estadio 1: exceso o disfuncion de la adiposidad',
    que: 'Actuar sobre la adiposidad: estilo de vida estructurado con meta de perder al menos un 5% del peso, y valorar farmaco para el peso segun los umbrales de la obesidad. Es el estadio donde la regresion es mas alcanzable.',
    cribado: 'Peso, cintura, presion arterial y glucemia al menos anuales; perfil lipidico y filtrado glomerular con cociente albumina/creatinina cada 1 a 2 anos.'
  },
  '2': {
    titulo: 'Estadio 2: factores metabolicos o enfermedad renal cronica',
    que: 'Tratar cada factor y proteger organo: presion arterial por debajo de 130/80, estatina segun riesgo, control glucemico individualizado, e IECA o ARA si hay albuminuria. Priorizar los farmacos que actuan en varios ejes: inhibidor de SGLT2, agonista del receptor de GLP-1 y finerenona segun el perfil.',
    cribado: 'Anual completo: presion arterial, HbA1c, perfil lipidico, filtrado glomerular y cociente albumina/creatinina. Potasio y funcion renal a las 2 a 4 semanas de cada cambio de IECA, ARA o finerenona.'
  },
  '3': {
    titulo: 'Estadio 3: enfermedad cardiovascular subclinica',
    que: 'Intensificar antes del primer evento: objetivos mas estrictos de colesterol LDL y de presion arterial, y anadir inhibidor de SGLT2 y agonista del receptor de GLP-1 con beneficio probado aunque el control metabolico ya sea bueno. Es el ultimo estadio de prevencion primaria.',
    cribado: 'Control cada 3 a 6 meses de presion, lipidos, HbA1c, funcion renal y albuminuria, con reevaluacion de los marcadores que definieron el estadio. Valorar seguimiento compartido con cardiologia o nefrologia.'
  },
  '4a': {
    titulo: 'Estadio 4a: enfermedad cardiovascular clinica sin fallo renal',
    que: 'Terapia dirigida por guias de la enfermedad establecida, sin abandonar los ejes metabolico y renal, que siguen determinando el pronostico. Asegurar los farmacos con beneficio cardiorrenal probado y revisar la polifarmacia.',
    cribado: 'Seguimiento estrecho y multidisciplinar, con optimizacion del tratamiento antes de cada alta y vigilancia de la transicion, que es el periodo de mayor riesgo de reingreso.'
  },
  '4b': {
    titulo: 'Estadio 4b: enfermedad cardiovascular clinica con fallo renal',
    que: 'Como el 4a, pero el fallo renal condiciona la eleccion y la dosis de casi todos los farmacos y ensombrece el pronostico. Coordinacion explicita con nefrologia y cardiologia, y valoracion de tratamiento renal sustitutivo o trasplante.',
    cribado: 'Seguimiento compartido con nefrologia, control del metabolismo mineral y de la anemia, y planificacion anticipada de cuidados en el paciente fragil.'
  }
};

export const calculators = [
  {
    key: 'estadio-ckm', title: 'Estadio del sindrome cardiovascular-renal-metabolico', accent: '#3d6b8a',
    subtitle: 'Estadificacion 0 a 4 de la AHA, con la conducta de cada estadio',
    incompleteMsg: 'Indica si hay enfermedad cardiovascular clinica y marca lo que corresponda.',
    fields: [
      { name: 'clinica', id: 'ckm-clinica', type: 'select', label: 'Enfermedad cardiovascular clinica (cardiopatia isquemica, insuficiencia cardiaca, ictus, enfermedad arterial periferica o fibrilacion auricular)', options: [
        { value: '', label: 'Selecciona' },
        { value: 'no', label: 'No' },
        { value: 'si', label: 'Si, sin fallo renal' },
        { value: 'si-renal', label: 'Si, con fallo renal (filtrado muy bajo o tratamiento sustitutivo)' } ] },
      { name: 'subclinica', id: 'ckm-subclinica', type: 'checkbox', label: 'Enfermedad cardiovascular subclinica: calcio coronario positivo, placa, peptidos natriureticos o troponina elevados, alteraciones ecocardiograficas; o equivalente de riesgo alto (enfermedad renal de muy alto riesgo, riesgo predicho alto)' },
      { name: 'metabolico', id: 'ckm-metabolico', type: 'checkbox', label: 'Factor de riesgo metabolico: diabetes, hipertension, trigliceridos de 135 mg/dL o mas, o sindrome metabolico' },
      { name: 'renal', id: 'ckm-renal', type: 'checkbox', label: 'Enfermedad renal cronica: filtrado glomerular menor de 60 mL/min/1.73 m2 o cociente albumina/creatinina de 30 mg/g o mas, mantenidos' },
      { name: 'adiposidad', id: 'ckm-adiposidad', type: 'checkbox', label: 'Exceso de adiposidad: indice de masa corporal de 25 o mas (23 o mas en ascendencia asiatica), o perimetro de cintura elevado' },
      { name: 'prediabetes', id: 'ckm-prediabetes', type: 'checkbox', label: 'Adiposidad disfuncional: prediabetes o intolerancia a la glucosa' },
      { type: 'note', text: 'El estadio lo determina el criterio mas avanzado que se cumpla. Dos ideas del marco importan mas que la clasificacion: los estadios PUEDEN RETROCEDER (perder peso, remitir la diabetes o revertir la albuminuria devuelven a un estadio anterior), y los determinantes sociales de la salud forman parte explicita del marco porque condicionan la progresion y la viabilidad del tratamiento. Para cuantificar el riesgo, la AHA propone las ecuaciones PREVENT, que no se reproducen aqui: usa la herramienta oficial.' }
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
      if (v.metabolico) criterios.push('factor metabolico');
      if (v.renal) criterios.push('enfermedad renal cronica');
      if (v.subclinica) criterios.push('enfermedad cardiovascular subclinica');
      if (v.clinica !== 'no') criterios.push('enfermedad cardiovascular clinica');
      return { clave, info: CONDUCTA[clave], criterios, sinRenal: !v.renal && (v.metabolico || v.subclinica) };
    },
    format: r => {
      let s = `<strong>${r.info.titulo}</strong>. ${r.info.que} <strong>Cribado:</strong> ${r.info.cribado}`;
      if (r.criterios.length) s += ` Criterios presentes: ${r.criterios.join(', ')}.`;
      if (r.sinRenal) s += ' <strong>Comprueba que tienes un cociente albumina/creatinina reciente:</strong> es la prueba que mas cambia el estadio y la que mas se omite.';
      if (r.clave === '2' || r.clave === '3') s += ' Los estadios pueden retroceder: la perdida de peso, la remision de la diabetes o la reversion de la albuminuria devuelven al paciente a un estadio anterior.';
      return s;
    },
    fragment: r => `Estadio CKM ${r.clave}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
