// topics/sindrome-aortico-agudo/calculators.js
// 1 herramienta real:
// - ADD-RS (Aortic Dissection Detection Risk Score): 3 categorías de riesgo (condiciones de alto
//   riesgo, características del dolor de alto riesgo, hallazgos de exploración de alto riesgo),
//   1 punto si CUALQUIER ítem de la categoría está presente, máximo 3 puntos (Rogers AM, et al.
//   Circulation. 2011;123(20):2213-2218; Isselbacher EM, et al. Circulation. 2022;146(24):e334-e482).

export const calculators = [
  {
    key: 'add-rs', title: 'ADD-RS (Aortic Dissection Detection Risk Score)', accent: '#7a1f3d',
    subtitle: 'Probabilidad pretest de síndrome aórtico agudo',
    incompleteMsg: 'Marca los ítems presentes en cada una de las 3 categorías (deja sin marcar los ausentes).',
    fields: [
      { type: 'note', text: 'Cada categoría suma 1 punto si CUALQUIERA de sus ítems está presente (no se suma más de 1 punto por categoría, aunque haya varios ítems positivos dentro de ella).' },
      { name: 'condMarfan', id: 'add-marfan', type: 'checkbox', label: 'Condiciones de alto riesgo: síndrome de Marfan u otra enfermedad del tejido conectivo' },
      { name: 'condFamiliar', id: 'add-familiar', type: 'checkbox', label: 'Condiciones de alto riesgo: antecedente familiar de enfermedad aórtica' },
      { name: 'condValvula', id: 'add-valvula', type: 'checkbox', label: 'Condiciones de alto riesgo: enfermedad valvular aórtica conocida' },
      { name: 'condManipulacion', id: 'add-manipulacion', type: 'checkbox', label: 'Condiciones de alto riesgo: manipulación aórtica reciente (cirugía/cateterismo)' },
      { name: 'condAneurisma', id: 'add-aneurisma', type: 'checkbox', label: 'Condiciones de alto riesgo: aneurisma torácico conocido' },
      { name: 'dolorAbrupto', id: 'add-abrupto', type: 'checkbox', label: 'Dolor de alto riesgo: inicio abrupto' },
      { name: 'dolorSevero', id: 'add-severo', type: 'checkbox', label: 'Dolor de alto riesgo: intensidad severa' },
      { name: 'dolorDesgarrante', id: 'add-desgarrante', type: 'checkbox', label: 'Dolor de alto riesgo: calidad desgarrante/lacerante' },
      { name: 'examenPulso', id: 'add-pulso', type: 'checkbox', label: 'Exploración de alto riesgo: déficit de pulso o diferencia de presión arterial entre extremidades' },
      { name: 'examenNeuro', id: 'add-neuro', type: 'checkbox', label: 'Exploración de alto riesgo: déficit neurológico focal junto con el dolor' },
      { name: 'examenSoplo', id: 'add-soplo', type: 'checkbox', label: 'Exploración de alto riesgo: soplo diastólico nuevo de insuficiencia aórtica junto con el dolor' },
      { name: 'examenHipotension', id: 'add-hipotension', type: 'checkbox', label: 'Exploración de alto riesgo: hipotensión o estado de choque' }
    ],
    compute(v) {
      const condiciones = [v.condMarfan, v.condFamiliar, v.condValvula, v.condManipulacion, v.condAneurisma];
      const dolor = [v.dolorAbrupto, v.dolorSevero, v.dolorDesgarrante];
      const examen = [v.examenPulso, v.examenNeuro, v.examenSoplo, v.examenHipotension];
      const todos = [...condiciones, ...dolor, ...examen];
      if (todos.some(d => d == null)) return null;
      const pCondiciones = condiciones.some(Boolean) ? 1 : 0;
      const pDolor = dolor.some(Boolean) ? 1 : 0;
      const pExamen = examen.some(Boolean) ? 1 : 0;
      const total = pCondiciones + pDolor + pExamen;
      let riesgo;
      if (total === 0) riesgo = 'bajo';
      else if (total === 1) riesgo = 'intermedio';
      else riesgo = 'alto';
      return { total, pCondiciones, pDolor, pExamen, riesgo };
    },
    format: r => {
      if (r.riesgo === 'alto') {
        return `<strong>ADD-RS ${r.total}/3: riesgo alto</strong>. Imagen urgente (angio-TC de aorta o ecocardiograma transesofágico) sin demora, sin esperar dímero D.`;
      }
      if (r.riesgo === 'intermedio') {
        return `<strong>ADD-RS ${r.total}/3: riesgo intermedio</strong>. Considerar imagen urgente; el dímero D negativo apoya pero no descarta por completo, usar juicio clínico.`;
      }
      return `<strong>ADD-RS ${r.total}/3: riesgo bajo</strong>. Un dímero D negativo tiene alto valor predictivo negativo en este grupo; considerarlo antes de proceder a imagen si la sospecha clínica sigue siendo baja.`;
    },
    fragment: r => `ADD-RS ${r.total}/3 (${r.riesgo})`
  }
];
