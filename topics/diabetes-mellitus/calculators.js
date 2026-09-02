// topics/diabetes-mellitus/calculators.js
// 4 herramientas:
// - metas-hba1c: meta de HbA1c individualizada segun el marco de la ADA (riesgo de hipoglucemia,
//   duracion, expectativa de vida, comorbilidad, complicaciones vasculares, apoyo y motivacion).
// - hba1c-glucosa: conversion entre HbA1c y glucosa media estimada (formula ADAG; Nathan DM, et
//   al. Diabetes Care. 2008): glucosa media (mg/dL) = 28.7 x HbA1c - 46.7.
// - dosis-insulina: dosis total diaria inicial, reparto basal-bolo, factor de sensibilidad
//   (regla del 1800 para analogos rapidos) y ratio insulina/carbohidratos (regla del 500).
// - findrisc: cuestionario FINDRISC de riesgo de diabetes tipo 2 a 10 anos (Lindstrom J,
//   Tuomilehto J. Diabetes Care. 2003).
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

export const calculators = [
  {
    key: 'metas-hba1c', title: 'Meta de HbA1c individualizada', accent: '#1f6f6b',
    subtitle: 'Objetivo de HbA1c segun el perfil del paciente (marco de la ADA)',
    incompleteMsg: 'Responde las seis caracteristicas del paciente.',
    fields: [
      { name: 'hipo', id: 'dm-mh-hipo', type: 'select', label: 'Riesgo de hipoglucemia y consecuencias', options: [
        { value: '', label: 'Selecciona' },
        { value: '-1', label: 'Bajo' },
        { value: '1', label: 'Alto (insulina o sulfonilurea, hipoglucemia previa, inadvertida)' } ], row: 'r1' },
      { name: 'duracion', id: 'dm-mh-dur', type: 'select', label: 'Duracion de la diabetes', options: [
        { value: '', label: 'Selecciona' },
        { value: '-1', label: 'Corta (diagnostico reciente)' },
        { value: '1', label: 'Larga (mas de 10 anos)' } ], row: 'r1' },
      { name: 'expectativa', id: 'dm-mh-exp', type: 'select', label: 'Expectativa de vida', options: [
        { value: '', label: 'Selecciona' },
        { value: '-1', label: 'Larga' },
        { value: '0', label: 'Intermedia' },
        { value: '1', label: 'Corta' } ], row: 'r2' },
      { name: 'comorbilidad', id: 'dm-mh-com', type: 'select', label: 'Comorbilidad relevante o fragilidad', options: [
        { value: '', label: 'Selecciona' },
        { value: '-1', label: 'Ausente' },
        { value: '0', label: 'Escasa o moderada' },
        { value: '1', label: 'Grave o fragilidad' } ], row: 'r2' },
      { name: 'vascular', id: 'dm-mh-vasc', type: 'select', label: 'Complicaciones vasculares establecidas', options: [
        { value: '', label: 'Selecciona' },
        { value: '-1', label: 'Ausentes' },
        { value: '1', label: 'Establecidas (micro o macrovasculares)' } ], row: 'r3' },
      { name: 'apoyo', id: 'dm-mh-apoyo', type: 'select', label: 'Recursos, apoyo y motivacion', options: [
        { value: '', label: 'Selecciona' },
        { value: '-1', label: 'Favorables' },
        { value: '1', label: 'Limitados' } ], row: 'r3' },
      { type: 'note', text: 'Marco de la ADA: la meta se mueve entre mas estricta (HbA1c menor de 6.5%) y menos estricta (menor de 8%, o solo evitar la hiperglucemia sintomatica y la hipoglucemia). Preprandial 80 a 130 y posprandial menor de 180 mg/dL para la meta de 7%.' }
    ],
    compute(v) {
      const ks = ['hipo', 'duracion', 'expectativa', 'comorbilidad', 'vascular', 'apoyo'];
      if (ks.some(k => v[k] == null || v[k] === '')) return null;
      const suma = ks.reduce((a, k) => a + (+v[k]), 0);
      let meta, detalle;
      if (suma <= -3) { meta = 'menor de 6.5%'; detalle = 'perfil favorable: una meta mas estricta es razonable si se alcanza sin hipoglucemia ni carga de tratamiento excesiva.'; }
      else if (suma >= 2) { meta = 'menor de 8%'; detalle = 'perfil desfavorable: prioriza evitar la hipoglucemia y la hiperglucemia sintomatica; una HbA1c menor de 8% (o solo el control de sintomas) es apropiada.'; }
      else { meta = 'menor de 7%'; detalle = 'meta estandar para la mayoria de los adultos, con glucosa preprandial de 80 a 130 y posprandial menor de 180 mg/dL.'; }
      return { suma, meta, detalle };
    },
    format: r => `<strong>Meta de HbA1c: ${r.meta}</strong>. ${r.detalle} Reevaluar la meta si cambian el riesgo de hipoglucemia, la comorbilidad o los objetivos del paciente.`,
    fragment: r => `Meta de HbA1c ${r.meta}`
  },
  {
    key: 'hba1c-glucosa', title: 'HbA1c y glucosa media estimada', accent: '#3f6b52',
    subtitle: 'Conversion entre HbA1c y glucosa media (formula ADAG)',
    incompleteMsg: 'Introduce la HbA1c (%) o, en su defecto, la glucosa media (mg/dL).',
    fields: [
      { name: 'hba1c', id: 'dm-hg-a1c', type: 'number', step: '0.1', label: 'HbA1c (%)', placeholder: 'ej. 7.5', row: 'r1' },
      { name: 'glucosa', id: 'dm-hg-glu', type: 'number', required: false, label: 'O bien: glucosa media (mg/dL)', placeholder: 'si no tienes la HbA1c', row: 'r1' },
      { type: 'note', text: 'Formula del estudio ADAG (Nathan DM, et al. 2008): glucosa media (mg/dL) = 28.7 x HbA1c - 46.7. Orientativa; la relacion individual varia y no sustituye a la monitorizacion. Equivalencias: HbA1c 6% cerca de 126 mg/dL, 7% cerca de 154, 8% cerca de 183, 9% cerca de 212, 10% cerca de 240.' }
    ],
    compute(v) {
      if (v.hba1c != null && v.hba1c > 0) {
        if (!(v.hba1c >= 3 && v.hba1c <= 20)) return { invalido: true };
        const mgdl = 28.7 * v.hba1c - 46.7;
        return { modo: 'a1c', hba1c: v.hba1c, mgdl, mmol: mgdl / 18 };
      }
      if (v.glucosa != null && v.glucosa > 0) {
        if (!(v.glucosa >= 40 && v.glucosa <= 500)) return { invalido: true };
        const a1c = (v.glucosa + 46.7) / 28.7;
        return { modo: 'glu', glucosa: v.glucosa, a1c };
      }
      return null;
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: HbA1c entre 3 y 20%, o glucosa media entre 40 y 500 mg/dL.';
      if (r.modo === 'a1c') return `<strong>Glucosa media estimada ${Math.round(r.mgdl)} mg/dL</strong> (${r.mmol.toFixed(1)} mmol/L) para una HbA1c del ${r.hba1c}%.`;
      return `<strong>HbA1c estimada ${r.a1c.toFixed(1)}%</strong> para una glucosa media de ${Math.round(r.glucosa)} mg/dL.`;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.modo === 'a1c' ? `glucosa media aprox. ${Math.round(r.mgdl)} mg/dL` : `HbA1c aprox. ${r.a1c.toFixed(1)}%`)
  },
  {
    key: 'dosis-insulina', title: 'Dosis inicial de insulina, factor de correccion y ratio', accent: '#8a6a1f',
    subtitle: 'Dosis total diaria, reparto basal-bolo y reglas del 1800 y del 500',
    incompleteMsg: 'Introduce el peso y elige la sensibilidad a la insulina.',
    fields: [
      { name: 'peso', id: 'dm-di-peso', type: 'number', step: '0.5', label: 'Peso (kg)', placeholder: 'ej. 75', row: 'r1' },
      { name: 'sensib', id: 'dm-di-sens', type: 'select', label: 'Sensibilidad a la insulina', options: [
        { value: '', label: 'Selecciona' },
        { value: '0.3', label: 'Sensible (delgado, anciano, filtrado bajo): 0.3 U/kg/dia' },
        { value: '0.4', label: 'Habitual: 0.4 U/kg/dia' },
        { value: '0.5', label: 'Resistente (obesidad, corticoides, infeccion): 0.5 U/kg/dia' } ], row: 'r1' },
      { type: 'note', text: 'Regimen basal-bolo: alrededor del 50% como basal y el 50% repartido en los bolos de las comidas. Regla del 1800: 1 U de analogo rapido baja la glucosa unos 1800/dosis total mg/dL (regla del 1500 para insulina regular). Regla del 500: 1 U de analogo rapido cubre unos 500/dosis total gramos de carbohidrato. En la DM2, un inicio prudente solo con basal es de 10 U o 0.1 a 0.2 U/kg, titulando por la glucosa en ayuno.' }
    ],
    compute(v) {
      if (v.peso == null || !v.sensib) return null;
      if (!(v.peso > 0 && v.peso < 400)) return { invalido: true };
      const tdd = v.peso * (+v.sensib);
      const basal = tdd * 0.5;
      const boloComida = (tdd * 0.5) / 3;
      const fc = 1800 / tdd;
      const ratio = 500 / tdd;
      return { tdd, basal, boloComida, fc, ratio, basalDm2Bajo: v.peso * 0.1, basalDm2Alto: v.peso * 0.2 };
    },
    format: r => {
      if (r.invalido) return 'Introduce un peso plausible.';
      return `<strong>Dosis total diaria aproximada ${Math.round(r.tdd)} U/dia</strong>. Basal alrededor de ${Math.round(r.basal)} U; bolo de unas ${Math.round(r.boloComida)} U por comida. Factor de correccion (regla del 1800): 1 U de analogo rapido baja unos ${Math.round(r.fc)} mg/dL. Ratio insulina/carbohidratos (regla del 500): 1 U cubre unos ${Math.round(r.ratio)} g de carbohidrato. Inicio solo con basal en la DM2: ${Math.round(r.basalDm2Bajo)} a ${Math.round(r.basalDm2Alto)} U (o 10 U). Ajustar segun los controles.`;
    },
    fragment: r => r.invalido ? 'peso no valido' : `dosis total aprox. ${Math.round(r.tdd)} U/dia (basal ${Math.round(r.basal)} U)`
  },
  {
    key: 'findrisc', title: 'FINDRISC (riesgo de diabetes tipo 2 a 10 anos)', accent: '#3d5a73',
    subtitle: 'Cuestionario de 8 items; sin analitica',
    incompleteMsg: 'Responde los ocho apartados.',
    fields: [
      { name: 'edad', id: 'dm-fr-edad', type: 'select', label: 'Edad', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Menos de 45 anos (0)' },
        { value: '2', label: '45 a 54 anos (2)' },
        { value: '3', label: '55 a 64 anos (3)' },
        { value: '4', label: 'Mas de 64 anos (4)' } ], row: 'r1' },
      { name: 'imc', id: 'dm-fr-imc', type: 'select', label: 'Indice de masa corporal', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Menor de 25 kg/m2 (0)' },
        { value: '1', label: '25 a 30 kg/m2 (1)' },
        { value: '3', label: 'Mayor de 30 kg/m2 (3)' } ], row: 'r1' },
      { name: 'cintura', id: 'dm-fr-cint', type: 'select', label: 'Perimetro de cintura', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Varon menor de 94 / mujer menor de 80 cm (0)' },
        { value: '3', label: 'Varon 94 a 102 / mujer 80 a 88 cm (3)' },
        { value: '4', label: 'Varon mayor de 102 / mujer mayor de 88 cm (4)' } ] },
      { name: 'actividad', id: 'dm-fr-act', type: 'select', label: 'Al menos 30 minutos de actividad fisica al dia', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Si (0)' },
        { value: '2', label: 'No (2)' } ], row: 'r2' },
      { name: 'vegetales', id: 'dm-fr-veg', type: 'select', label: 'Consumo de fruta o verdura', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'A diario (0)' },
        { value: '1', label: 'No a diario (1)' } ], row: 'r2' },
      { name: 'antihta', id: 'dm-fr-hta', type: 'select', label: 'Toma o ha tomado medicacion antihipertensiva', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'No (0)' },
        { value: '2', label: 'Si (2)' } ], row: 'r3' },
      { name: 'glucemia', id: 'dm-fr-glu', type: 'select', label: 'Le han detectado alguna vez la glucosa alta', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'No (0)' },
        { value: '5', label: 'Si (5)' } ], row: 'r3' },
      { name: 'familia', id: 'dm-fr-fam', type: 'select', label: 'Antecedente familiar de diabetes', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'No (0)' },
        { value: '3', label: 'Abuelos, tios o primos (3)' },
        { value: '5', label: 'Padres, hermanos o hijos (5)' } ] },
      { type: 'note', text: 'Puntuacion total de 0 a 26. Estima el riesgo de desarrollar diabetes tipo 2 en los proximos 10 anos. Una puntuacion de 15 o mas apoya realizar una glucemia en ayuno o una prueba de tolerancia oral a la glucosa.' }
    ],
    compute(v) {
      const ks = ['edad', 'imc', 'cintura', 'actividad', 'vegetales', 'antihta', 'glucemia', 'familia'];
      if (ks.some(k => v[k] == null || v[k] === '')) return null;
      const total = ks.reduce((a, k) => a + (+v[k]), 0);
      let cat, riesgo;
      if (total < 7) { cat = 'bajo'; riesgo = 'alrededor del 1% (1 de cada 100)'; }
      else if (total <= 11) { cat = 'ligeramente elevado'; riesgo = 'alrededor del 4% (1 de cada 25)'; }
      else if (total <= 14) { cat = 'moderado'; riesgo = 'alrededor del 17% (1 de cada 6)'; }
      else if (total <= 20) { cat = 'alto'; riesgo = 'alrededor del 33% (1 de cada 3)'; }
      else { cat = 'muy alto'; riesgo = 'alrededor del 50% (1 de cada 2)'; }
      return { total, cat, riesgo };
    },
    format: r => `<strong>FINDRISC ${r.total} puntos: riesgo ${r.cat}</strong>. Probabilidad estimada de diabetes tipo 2 a 10 anos: ${r.riesgo}. ${r.total >= 15 ? 'Solicitar glucemia en ayuno o prueba de tolerancia oral a la glucosa y reforzar el estilo de vida.' : r.total >= 12 ? 'Reforzar el estilo de vida y valorar una glucemia de cribado.' : 'Mantener habitos saludables y repetir el cribado de forma periodica.'}`,
    fragment: r => `FINDRISC ${r.total} (riesgo ${r.cat})`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
