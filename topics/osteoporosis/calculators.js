// topics/osteoporosis/calculators.js
// 2 herramientas:
// - densitometria-osteoporosis: interpreta la densitometria (puntuacion T y Z), aplica los dos
//   caminos diagnosticos (densitometrico y clinico por fractura) y da la indicacion de
//   tratamiento y la estratificacion en riesgo alto frente a muy alto.
// - calcio-vitamina-d: requerimiento de calcio segun edad y sexo, deficit respecto de la ingesta
//   estimada, y pauta de vitamina D.
//
// FRAX NO se reproduce: sus coeficientes no son publicos y su calibracion es especifica de cada
// pais. La calculadora acepta el resultado obtenido en la herramienta oficial y lo aplica a los
// umbrales de tratamiento. Mismo criterio que con Martin-Hopkins en `dislipidemias` y con PREVENT
// en `sindrome-cardiovascular-renal-metabolico`.
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

const CALCIO_MG = [
  { sexo: 'mujer', min: 19, max: 50, mg: 1000 },
  { sexo: 'mujer', min: 51, max: 200, mg: 1200 },
  { sexo: 'varon', min: 19, max: 70, mg: 1000 },
  { sexo: 'varon', min: 71, max: 200, mg: 1200 }
];

export const calculators = [
  {
    key: 'densitometria-osteoporosis', title: 'Densitometría: diagnóstico y umbral de tratamiento', accent: '#7a6a55',
    subtitle: 'Puntuación T y Z, los dos caminos diagnósticos y la estratificación del riesgo',
    incompleteMsg: 'Elige el grupo de edad y sexo e introduce la puntuación densitometrica.',
    fields: [
      { name: 'grupo', id: 'os-dx-grupo', type: 'select', label: 'Grupo del paciente', options: [
        { value: '', label: 'Selecciona' },
        { value: 'T', label: 'Mujer posmenopáusica o varón de 50 anos o más (se usa la puntuación T)' },
        { value: 'Z', label: 'Mujer premenopausica o varón menor de 50 anos (se usa la puntuación Z)' } ] },
      { name: 'punt', id: 'os-dx-punt', type: 'number', step: '0.1', label: 'Puntuación densitometrica (la peor de columna, cuello femoral o cadera total)', placeholder: 'ej. -2.7' },
      { name: 'fractura', id: 'os-dx-frac', type: 'select', label: 'Fractura por fragilidad', options: [
        { value: '', label: 'Selecciona' },
        { value: 'ninguna', label: 'Ninguna' },
        { value: 'mayor', label: 'De cadera o de vértebra' },
        { value: 'otra', label: 'De otra localización (muneca, humero, pelvis)' },
        { value: 'reciente', label: 'De cadera o vértebra en los últimos 24 meses, o fracturas múltiples' } ] },
      { name: 'fraxCadera', id: 'os-dx-fxc', type: 'number', step: '0.1', required: false, label: 'Opcional: FRAX de cadera a 10 anos (%)', placeholder: 'de la herramienta oficial', row: 'r1' },
      { name: 'fraxMayor', id: 'os-dx-fxm', type: 'number', step: '0.1', required: false, label: 'Opcional: FRAX de fractura mayor a 10 anos (%)', placeholder: 'de la herramienta oficial', row: 'r1' },
      { type: 'note', text: 'Hay dos caminos al diagnóstico: el densitometrico (puntuación T de -2.5 o menor) y el CLÍNICO (una fractura de cadera o de vértebra por fragilidad diagnóstica osteoporosis aunque la densitometría sea normal). En la zona de masa ósea baja decide el FRAX: umbrales de 3% o más para cadera y de 20% o más para fractura mayor. En premenopausicas y varones menores de 50 se usa la puntuación Z, y un valor de -2.0 o menor obliga a buscar causa secundaria sin etiquetar de osteoporosis por la densitometría.' }
    ],
    compute(v) {
      if (!v.grupo || v.punt == null || !v.fractura) return null;
      if (!(v.punt > -8 && v.punt < 6)) return { invalido: true };
      const p = v.punt;
      const fracMayor = v.fractura === 'mayor' || v.fractura === 'reciente';
      const muyAlto = v.fractura === 'reciente' || p <= -3.0;

      if (v.grupo === 'Z') {
        const bajo = p <= -2.0;
        return { modo: 'Z', p, bajo, fracMayor, muyAlto, fractura: v.fractura };
      }

      let categoria, trata = false, motivo;
      if (p <= -2.5) { categoria = 'osteoporosis'; trata = true; motivo = 'puntuación T de -2.5 o menor'; }
      else if (p < -1.0) { categoria = 'masa ósea baja (osteopenia)'; }
      else { categoria = 'densidad mineral ósea normal'; }

      if (fracMayor) { trata = true; motivo = 'fractura por fragilidad de cadera o de vértebra, que diagnóstica osteoporosis con independencia de la densitometría'; }

      let frax = null;
      if (!trata && categoria.startsWith('masa ósea baja')) {
        const c = v.fraxCadera, m = v.fraxMayor;
        if (c != null || m != null) {
          const supera = (c != null && c >= 3) || (m != null && m >= 20);
          frax = { c, m, supera };
          if (supera) { trata = true; motivo = 'FRAX por encima del umbral de tratamiento en masa ósea baja'; }
        }
      }
      return { modo: 'T', p, categoria, trata, motivo, frax, muyAlto, fracMayor, fractura: v.fractura };
    },
    format: r => {
      if (r.invalido) return 'Introduce una puntuación densitometrica plausible (entre -8 y 6).';
      if (r.modo === 'Z') {
        let s = `<strong>Puntuación Z de ${r.p.toFixed(1)}</strong>: ${r.bajo ? 'por debajo del rango esperado para la edad. <strong>Obliga a un estudio de causas secundarias</strong>' : 'dentro del rango esperado para la edad'}. En este grupo no se etiqueta de osteoporosis basándose solo en la densitometría.`;
        if (r.fracMayor) s += ' <strong>Hay una fractura por fragilidad de cadera o vértebra:</strong> eso si establece el diagnóstico y la indicación de tratamiento, con independencia de la densitometría y de la edad.';
        return s;
      }
      let s = `<strong>Puntuación T de ${r.p.toFixed(1)}: ${r.categoria}</strong>.`;
      if (r.trata) {
        s += ` <strong>Indicación de tratamiento farmacológico</strong> (${r.motivo}).`;
        s += r.muyAlto
          ? ' Perfil de <strong>riesgo muy alto</strong> (fractura de cadera o vértebra reciente, fracturas múltiples o puntuación T muy baja): se prefiere empezar por un anabólico (teriparatida, abaloparatida o romosozumab) y consolidar después con un antirresortivo.'
          : ' Perfil de riesgo alto: bisfosfonato de primera línea, o denosumab si hay enfermedad renal o intolerancia digestiva.';
      } else if (r.categoria.startsWith('masa ósea baja')) {
        s += r.frax
          ? ` FRAX${r.frax.c != null ? ' de cadera ' + r.frax.c + '%' : ''}${r.frax.m != null ? (r.frax.c != null ? ' y' : '') + ' de fractura mayor ' + r.frax.m + '%' : ''}: por debajo de los umbrales de tratamiento (3% y 20%). Medidas generales y reevaluación periódica.`
          : ' Calcula el FRAX en la herramienta oficial e introducelo aquí: en la masa ósea baja es lo que decide si se trata (3% o más para cadera, o 20% o más para fractura mayor).';
      } else {
        s += ' Sin indicación de tratamiento farmacológico por la densitometría. Medidas generales y repetir el cribado según el riesgo.';
      }
      if (!r.trata) s += ' Recuerda que una fractura de cadera o de vértebra por fragilidad diagnosticaria osteoporosis aunque la densitometría fuera normal.';
      s += ' En todos: descartar causas secundarias y corregir el déficit de vitamina D antes de iniciar un antirresortivo potente.';
      return s;
    },
    fragment: r => r.invalido ? 'puntuación no valida' : (r.modo === 'Z' ? `puntuación Z ${r.p.toFixed(1)}` : `T ${r.p.toFixed(1)}: ${r.categoria}${r.trata ? ', tratar' : ''}`)
  },
  {
    key: 'calcio-vitamina-d', title: 'Requerimiento de calcio y de vitamina D', accent: '#3f6b52',
    subtitle: 'Cuanto falta respecto de la ingesta y como suplementar',
    incompleteMsg: 'Introduce la edad, el sexo y la ingesta estimada de calcio.',
    fields: [
      { name: 'edad', id: 'os-cv-edad', type: 'number', label: 'Edad (anos)', placeholder: 'ej. 68', row: 'r1' },
      { name: 'sexo', id: 'os-cv-sexo', type: 'select', label: 'Sexo', options: [
        { value: '', label: 'Selecciona' },
        { value: 'mujer', label: 'Mujer' },
        { value: 'varon', label: 'Varon' } ], row: 'r1' },
      { name: 'ingesta', id: 'os-cv-ing', type: 'number', label: 'Ingesta estimada de calcio con la dieta (mg/dia)', placeholder: 'ej. 600' },
      { name: 'situacion', id: 'os-cv-sit', type: 'select', required: false, label: 'Situacion', options: [
        { value: 'ninguna', label: 'Ninguna en particular' },
        { value: 'antirresortivo', label: 'Va a iniciar o recibe un antirresortivo potente' },
        { value: 'glucocorticoides', label: 'Tratamiento con glucocorticoides' } ] },
      { type: 'note', text: 'Regla práctica para estimar la ingesta: unos 300 mg de calcio basales de la dieta general, más unos 300 mg por cada racion de lacteo al dia (un vaso de leche, un yogur o una porción de queso). Se prefiere cubrir el requerimiento con la DIETA: los suplementos por encima de lo necesario no aportan beneficio adicional y se han asociado a litiasis renal. Si hace falta suplementar, repartir en tomas de 500 a 600 mg como máximo, porque por encima de esa cantidad la absorción cae. Vitamina D: 800 a 1000 UI al dia, con objetivo de 25-hidroxivitamina D de 30 ng/mL o más.' }
    ],
    compute(v) {
      if (v.edad == null || !v.sexo || v.ingesta == null) return null;
      if (!(v.edad >= 18 && v.edad < 120) || !(v.ingesta >= 0 && v.ingesta < 4000)) return { invalido: true };
      const fila = CALCIO_MG.find(f => f.sexo === v.sexo && v.edad >= f.min && v.edad <= f.max);
      const req = fila ? fila.mg : 1000;
      const deficit = Math.max(0, req - v.ingesta);
      const tomas = deficit > 600 ? Math.ceil(deficit / 600) : (deficit > 0 ? 1 : 0);
      const vitD = v.edad > 70 ? '800 a 1000 UI al dia' : '800 a 1000 UI al dia';
      const sit = v.situacion || 'ninguna';
      return { req, ingesta: v.ingesta, deficit, tomas, vitD, sit, exceso: v.ingesta > req + 500 };
    },
    format: r => {
      if (r.invalido) return 'Revisa la edad y la ingesta de calcio.';
      let s = `<strong>Requerimiento de calcio ${r.req} mg/dia</strong>; ingesta estimada ${r.ingesta} mg/dia. `;
      if (r.deficit === 0) {
        s += '<strong>No hace falta suplemento de calcio:</strong> la dieta ya cubre el requerimiento.';
        if (r.exceso) s += ' De hecho la ingesta supera con holgura lo necesario; no conviene anadir suplementos.';
      } else {
        s += `<strong>Déficit de ${r.deficit} mg/dia</strong>, que conviene cubrir preferentemente aumentando los lácteos u otras fuentes dietéticas. Si se suplementa, repartir en ${r.tomas} toma${r.tomas > 1 ? 's' : ''} de un máximo de 500 a 600 mg, porque por encima de esa cantidad la absorción cae.`;
      }
      s += ` <strong>Vitamina D: ${r.vitD}</strong>, con objetivo de 25-hidroxivitamina D de 30 ng/mL o más.`;
      if (r.sit === 'antirresortivo') s += ' <strong>Antes de administrar un antirresortivo potente (ácido zoledrónico o denosumab) hay que corregir el déficit de vitamina D y asegurar el aporte de calcio</strong>, o se puede provocar una hipocalcemia grave.';
      if (r.sit === 'glucocorticoides') s += ' Con glucocorticoides, el calcio y la vitamina D se indican en todos los pacientes desde el inicio del tratamiento, con independencia de la densitometría.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.deficit === 0 ? `calcio cubierto (${r.req} mg/dia)` : `faltan ${r.deficit} mg/dia de calcio`)
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
