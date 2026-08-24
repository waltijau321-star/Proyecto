// topics/hiperesplenismo/calculators.js
// 1 herramienta real:
// - Criterios de Hiperesplenismo (tétrada de Dameshek): checklist categórico clásico (no una
//   escala numérica validada internacionalmente, dado que el hiperesplenismo se define de forma
//   sindrómica) que sintetiza los 4 elementos clásicos de la definición: esplenomegalia,
//   citopenia periférica de 1 o más líneas, médula ósea normal o hiperplásica compensadora, y
//   corrección de la citopenia tras esplenectomía (Dameshek W. Blood. 1955;10(2):166-170; Chapman
//   J, Goyal A, Azevedo AM. Splenomegaly. StatPearls, 2023).

export const calculators = [
  {
    key: 'hiperesplenismo', title: 'Criterios de Hiperesplenismo', accent: '#5c6b2d',
    subtitle: 'Tétrada clásica de Dameshek para el diagnóstico sindrómico',
    incompleteMsg: 'Marca los criterios presentes (deja sin marcar los ausentes o no evaluados).',
    fields: [
      { name: 'esplenomegalia', id: 'hipere-esplenomegalia', type: 'checkbox', label: 'Esplenomegalia confirmada (clínica o por imagen)' },
      { name: 'citopenia', id: 'hipere-citopenia', type: 'checkbox', label: 'Citopenia periférica de 1 o más líneas celulares (anemia, leucopenia, o trombocitopenia)' },
      { name: 'medulaCompensadora', id: 'hipere-medula', type: 'checkbox', label: 'Médula ósea normal o hiperplásica compensadora (no hipoplásica ni infiltrada)' },
      { name: 'correccionPostEsplenectomia', id: 'hipere-correccion', type: 'checkbox', label: 'Corrección documentada de la citopenia tras esplenectomía (si se realizó)' },
      { type: 'note', text: 'Los primeros 2 criterios (esplenomegalia + citopenia) son los que se evalúan en la práctica clínica inicial; los últimos 2 (médula compensadora y corrección post-esplenectomía) confirman retrospectivamente el diagnóstico sindrómico completo cuando están disponibles. No todos los 4 criterios necesitan estar presentes simultáneamente para sospechar e iniciar el estudio de hiperesplenismo.' }
    ],
    compute(v) {
      const fields = [v.esplenomegalia, v.citopenia, v.medulaCompensadora, v.correccionPostEsplenectomia];
      if (fields.some(f => f == null)) return null;
      const n = fields.filter(Boolean).length;
      let banda, color;
      if (v.esplenomegalia && v.citopenia && n >= 3) { banda = 'Hiperesplenismo confirmado'; color = 'danger'; }
      else if (v.esplenomegalia && v.citopenia) { banda = 'Hiperesplenismo probable: estudiar médula y causa subyacente'; color = 'warn'; }
      else { banda = 'Criterios insuficientes para hiperesplenismo'; color = 'ok'; }
      return { n, banda, color };
    },
    format: r => `<strong>${r.banda}</strong> (${r.n} de 4 criterios presentes).`,
    fragment: r => r.banda
  }
];
