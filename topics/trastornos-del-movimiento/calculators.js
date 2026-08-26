// topics/trastornos-del-movimiento/calculators.js
// 1 herramienta real:
// - Escala de Hoehn y Yahr: estadificación clásica de la gravedad y progresión de la
//   enfermedad de Parkinson (0-5, incluyendo los estadios intermedios 1.5 y 2.5 de la versión
//   modificada) (Hoehn MM, Yahr MD. Neurology. 1967;17(5):427-442).

export const calculators = [
  {
    key: 'hoehn-yahr', title: 'Escala de Hoehn y Yahr', accent: '#3f6b52',
    subtitle: 'Estadificación de gravedad de la enfermedad de Parkinson',
    incompleteMsg: 'Selecciona el estadio que mejor describe al paciente.',
    fields: [
      { name: 'estadio', id: 'hy-estadio', type: 'select', label: 'Estadio clínico', options: [
        { value: '', label: 'Selecciona...' },
        { value: '0', label: '0 — Sin signos de enfermedad' },
        { value: '1', label: '1 — Enfermedad unilateral' },
        { value: '1.5', label: '1.5 — Unilateral + compromiso axial' },
        { value: '2', label: '2 — Bilateral, sin alteración del equilibrio' },
        { value: '2.5', label: '2.5 — Bilateral leve, con recuperación en la prueba de tracción (pull test)' },
        { value: '3', label: '3 — Bilateral leve-moderada, cierta inestabilidad postural, físicamente independiente' },
        { value: '4', label: '4 — Discapacidad grave, aún capaz de caminar o pararse sin ayuda' },
        { value: '5', label: '5 — Dependiente de silla de ruedas o encamado, salvo con ayuda' }
      ] }
    ],
    compute(v) {
      if (!v.estadio) return null;
      const estadio = parseFloat(v.estadio);
      const independiente = estadio <= 3;
      return { estadio, independiente };
    },
    format: r => {
      const interpretaciones = {
        0: 'Sin signos de enfermedad.',
        1: 'Afectación unilateral, habitualmente con mínimo o ningún impacto funcional.',
        1.5: 'Afectación unilateral con compromiso axial adicional.',
        2: 'Afectación bilateral, sin alteración del equilibrio; el impacto funcional puede ser mayor pese a la ausencia de inestabilidad postural.',
        2.5: 'Afectación bilateral leve, con recuperación en la prueba de tracción (pull test).',
        3: 'Afectación bilateral leve-moderada con cierta inestabilidad postural; el paciente aún es físicamente independiente.',
        4: 'Discapacidad grave; aún capaz de caminar o mantenerse en pie sin ayuda.',
        5: 'Dependiente de silla de ruedas o encamado salvo con asistencia.'
      };
      return `<strong>Hoehn y Yahr ${r.estadio}</strong>: ${interpretaciones[r.estadio]} ${r.independiente ? 'Físicamente independiente.' : 'Requiere asistencia significativa para la movilidad.'}`;
    },
    fragment: r => `Hoehn-Yahr ${r.estadio}`
  }
];
