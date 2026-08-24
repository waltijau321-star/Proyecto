// topics/alteraciones-plaquetarias-cuantitativas/calculators.js
// 1 herramienta real:
// - 4T Score para HIT (trombocitopenia inducida por heparina): escala validada de probabilidad
//   pretest que combina 4 categorías (grado de trombocitopenia, momento de aparición, trombosis/
//   secuelas, y otras causas posibles), cada una puntuada 0-2, para orientar la probabilidad de
//   HIT antes de solicitar el estudio serológico confirmatorio (Lo GK, et al. J Thromb Haemost.
//   2006;4(4):759-765; Cuker A, et al. Blood. 2012;120(20):4160-4167).

export const calculators = [
  {
    key: '4t-hit', title: '4T Score (Trombocitopenia Inducida por Heparina)', accent: '#3d5a73',
    subtitle: 'Probabilidad pretest de HIT antes del estudio serológico',
    incompleteMsg: 'Completa las 4 categorías.',
    fields: [
      { name: 'trombocitopenia', id: '4t-tc', type: 'select', label: 'Trombocitopenia (caída de plaquetas)', options: [
        { value: '', label: 'Selecciona...' },
        { value: '2', label: '2 pts: caída &gt;50% Y nadir ≥20,000/µL' },
        { value: '1', label: '1 pt: caída 30-50% O nadir 10,000-19,000/µL' },
        { value: '0', label: '0 pts: caída &lt;30% O nadir &lt;10,000/µL' }
      ] },
      { name: 'momento', id: '4t-momento', type: 'select', label: 'Momento de aparición de la caída', options: [
        { value: '', label: 'Selecciona...' },
        { value: '2', label: '2 pts: inicio claro días 5-10, o caída ≤1 día con exposición previa a heparina en los últimos 30 días' },
        { value: '1', label: '1 pt: probable días 5-10 pero no claro, inicio después del día 10, o caída ≤1 día con exposición previa 30-100 días antes' },
        { value: '0', label: '0 pts: caída &lt;4 días sin exposición reciente a heparina' }
      ] },
      { name: 'trombosis', id: '4t-trombosis', type: 'select', label: 'Trombosis u otras secuelas', options: [
        { value: '', label: 'Selecciona...' },
        { value: '2', label: '2 pts: trombosis nueva confirmada, necrosis cutánea, o reacción sistémica aguda tras bolo IV de heparina' },
        { value: '1', label: '1 pt: trombosis progresiva/recurrente, lesiones cutáneas eritematosas, o trombosis sospechada no confirmada' },
        { value: '0', label: '0 pts: ninguna' }
      ] },
      { name: 'otrasCausas', id: '4t-otras', type: 'select', label: 'Otras causas de trombocitopenia', options: [
        { value: '', label: 'Selecciona...' },
        { value: '2', label: '2 pts: ninguna otra causa aparente' },
        { value: '1', label: '1 pt: otra causa posible' },
        { value: '0', label: '0 pts: otra causa definida presente' }
      ] },
      { type: 'note', text: 'Puntaje total 0-8: 0-3 probabilidad baja, 4-5 probabilidad intermedia, 6-8 probabilidad alta. Un score bajo tiene alto valor predictivo negativo (HIT muy improbable); un score intermedio/alto orienta a suspender heparina y solicitar estudio serológico confirmatorio mientras se espera el resultado.' }
    ],
    compute(v) {
      if (!v.trombocitopenia || !v.momento || !v.trombosis || !v.otrasCausas) return null;
      const total = +v.trombocitopenia + +v.momento + +v.trombosis + +v.otrasCausas;
      let banda, color;
      if (total <= 3) { banda = 'Probabilidad baja'; color = 'ok'; }
      else if (total <= 5) { banda = 'Probabilidad intermedia'; color = 'warn'; }
      else { banda = 'Probabilidad alta'; color = 'danger'; }
      return { total, banda };
    },
    format: r => `<strong>4T Score: ${r.total}/8, ${r.banda}</strong>.`,
    fragment: r => `4T: ${r.total}/8 (${r.banda})`
  }
];
