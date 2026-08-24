// topics/sindrome-hiperviscosidad/calculators.js
// 1 herramienta real:
// - Criterios de Hiperviscosidad Sintomática: checklist categórico (no una escala numérica
//   validada internacionalmente, dado que la viscosidad sérica medida directamente correlaciona
//   de forma imperfecta con los síntomas) que sintetiza la tríada clínica clásica más el hallazgo
//   de fondo de ojo, y orienta la indicación de plasmaféresis urgente (Mehta J, Singhal S. Semin
//   Thromb Hemost. 2003;29(5):467-471; Stone MJ, Bogen SA. Blood. 2012;119(10):2205-2208).

export const calculators = [
  {
    key: 'hiperviscosidad', title: 'Criterios de Hiperviscosidad Sintomática', accent: '#6b3d5c',
    subtitle: 'Tríada clásica + fondo de ojo: orienta indicación de plasmaféresis urgente',
    incompleteMsg: 'Marca los hallazgos presentes (deja sin marcar los ausentes o no evaluados).',
    fields: [
      { name: 'sangrado', id: 'hiperv-sangrado', type: 'checkbox', label: 'Sangrado mucocutáneo (epistaxis, gingivorragia, equimosis)' },
      { name: 'visual', id: 'hiperv-visual', type: 'checkbox', label: 'Alteración visual (visión borrosa, pérdida visual)' },
      { name: 'neurologico', id: 'hiperv-neuro', type: 'checkbox', label: 'Síntomas neurológicos (cefalea, mareo, confusión, letargo)' },
      { name: 'fondoOjo', id: 'hiperv-fondo', type: 'checkbox', label: 'Fondo de ojo con venas retinianas dilatadas y segmentadas ("en salchicha") ± hemorragias' },
      { type: 'note', text: 'La tríada clásica (sangrado mucocutáneo + alteración visual + síntomas neurológicos) define la hiperviscosidad sintomática. El hallazgo de fondo de ojo es el signo objetivo más específico y apoya fuertemente el diagnóstico incluso si la tríada no está completa.' }
    ],
    compute(v) {
      const fields = [v.sangrado, v.visual, v.neurologico, v.fondoOjo];
      if (fields.some(f => f == null)) return null;
      const n = fields.filter(Boolean).length;
      let banda, color;
      if (n >= 2 || v.fondoOjo) { banda = 'Hiperviscosidad sintomática: plasmaféresis urgente indicada'; color = 'danger'; }
      else if (n === 1) { banda = 'Sospecha de hiperviscosidad: vigilancia estrecha, considerar plasmaféresis'; color = 'warn'; }
      else { banda = 'Sin criterios de hiperviscosidad sintomática'; color = 'ok'; }
      return { n, banda, color };
    },
    format: r => `<strong>${r.banda}</strong> (${r.n} de 4 hallazgos presentes).`,
    fragment: r => r.banda
  }
];
