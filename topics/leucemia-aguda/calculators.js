// topics/leucemia-aguda/calculators.js
// Índice de riesgo de Sanz para leucemia promielocítica aguda: estratifica el riesgo de recaída y
// de muerte temprana según el recuento de leucocitos y plaquetas al diagnóstico, orientando la
// intensidad del tratamiento con ácido holo-transretinoico (ATRA) más quimioterapia/trióxido de
// arsénico (Sanz MA, et al. Blood. 2000;96(4):1247-1253).

function sanzBanda(leucocitos, plaquetas) {
  if (leucocitos <= 10000) {
    if (plaquetas > 40000) return { banda: 'Bajo riesgo', color: 'ok' };
    return { banda: 'Riesgo intermedio', color: 'warn' };
  }
  return { banda: 'Alto riesgo', color: 'danger' };
}

export const calculators = [
  {
    key: 'sanz', title: 'Índice de riesgo de Sanz (LPA)', accent: '#8c3a34',
    subtitle: 'Riesgo de recaída/muerte temprana en leucemia promielocítica aguda',
    incompleteMsg: 'Completa el recuento de leucocitos y de plaquetas al diagnóstico.',
    fields: [
      { name: 'leucocitos', id: 'sanz-leuco', type: 'number', label: 'Leucocitos al diagnóstico (células/µL)', placeholder: 'p. ej. 5000' },
      { name: 'plaquetas', id: 'sanz-plaq', type: 'number', label: 'Plaquetas al diagnóstico (células/µL)', placeholder: 'p. ej. 30000' },
      { type: 'note', text: 'Bajo riesgo: leucocitos ≤10,000/µL y plaquetas &gt;40,000/µL. Riesgo intermedio: leucocitos ≤10,000/µL y plaquetas ≤40,000/µL. Alto riesgo: leucocitos &gt;10,000/µL (independientemente de las plaquetas).' }
    ],
    compute(v) {
      if (v.leucocitos == null || v.plaquetas == null || v.leucocitos < 0 || v.plaquetas < 0) return null;
      const { banda, color } = sanzBanda(v.leucocitos, v.plaquetas);
      let interp;
      if (banda === 'Bajo riesgo') interp = 'Menor riesgo de recaída y de muerte temprana; ATRA más quimioterapia/trióxido de arsénico según protocolo estándar';
      else if (banda === 'Riesgo intermedio') interp = 'Riesgo intermedio de recaída; vigilancia estrecha durante la inducción, particularmente del riesgo de coagulopatía (ver Complicaciones)';
      else interp = 'Alto riesgo de recaída y de muerte temprana (particularmente por hemorragia durante la inducción); considerar quimioterapia más intensiva añadida a ATRA/trióxido de arsénico según protocolo, y vigilancia hematológica e intensiva más estrecha';
      return { leucocitos: v.leucocitos, plaquetas: v.plaquetas, banda, interp };
    },
    format: r => `<strong>${r.banda}</strong> (leucocitos ${r.leucocitos.toLocaleString('es')}/µL, plaquetas ${r.plaquetas.toLocaleString('es')}/µL): ${r.interp}.`,
    fragment: r => `Sanz: ${r.banda}`
  }
];
