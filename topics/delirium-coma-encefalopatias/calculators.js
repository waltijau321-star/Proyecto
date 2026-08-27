// topics/delirium-coma-encefalopatias/calculators.js
// 1 herramienta real:
// - CAM (Confusion Assessment Method): herramienta diagnóstica estándar de delirium. Requiere
//   el criterio 1 (inicio agudo y curso fluctuante) Y el criterio 2 (inatención) Y (el criterio 3
//   [pensamiento desorganizado] O el criterio 4 [alteración del nivel de conciencia]) (Inouye SK,
//   et al. Ann Intern Med. 1990;113(12):941-948).

export const calculators = [
  {
    key: 'cam-delirium', title: 'CAM (Confusion Assessment Method)', accent: '#5c3a4a',
    subtitle: 'Diagnóstico de delirium',
    incompleteMsg: 'Marca los criterios presentes (todos parten de "no presente").',
    fields: [
      { type: 'note', text: 'Diagnóstico de delirium = criterio 1 Y criterio 2 Y (criterio 3 O criterio 4).' },
      { name: 'inicioAgudo', id: 'cam-inicio', type: 'checkbox', label: 'Criterio 1: inicio agudo y curso fluctuante (cambio agudo del estado mental basal, que fluctúa en intensidad durante el día)' },
      { name: 'inatencion', id: 'cam-inatencion', type: 'checkbox', label: 'Criterio 2: inatención (dificultad para enfocar, mantener, o desviar la atención)' },
      { name: 'pensamientoDesorganizado', id: 'cam-pensamiento', type: 'checkbox', label: 'Criterio 3: pensamiento desorganizado (conversación divagante, irrelevante, o ilógica)' },
      { name: 'alteracionConciencia', id: 'cam-conciencia', type: 'checkbox', label: 'Criterio 4: alteración del nivel de conciencia (cualquier estado distinto de "alerta": vigilante, letárgico, estuporoso, o comatoso)' }
    ],
    compute(v) {
      const keys = ['inicioAgudo', 'inatencion', 'pensamientoDesorganizado', 'alteracionConciencia'];
      if (keys.some(k => v[k] == null)) return null;
      const cumple = !!(v.inicioAgudo && v.inatencion && (v.pensamientoDesorganizado || v.alteracionConciencia));
      return {
        inicioAgudo: !!v.inicioAgudo,
        inatencion: !!v.inatencion,
        pensamientoDesorganizado: !!v.pensamientoDesorganizado,
        alteracionConciencia: !!v.alteracionConciencia,
        cumple
      };
    },
    format: r => {
      if (r.cumple) {
        return `<strong>CAM positivo</strong>. Cumple criterios diagnósticos de delirium: inicio agudo/fluctuante + inatención + ${r.pensamientoDesorganizado && r.alteracionConciencia ? 'pensamiento desorganizado y alteración de conciencia' : r.pensamientoDesorganizado ? 'pensamiento desorganizado' : 'alteración de conciencia'}.`;
      }
      const faltantes = [];
      if (!r.inicioAgudo) faltantes.push('inicio agudo/fluctuante');
      if (!r.inatencion) faltantes.push('inatención');
      if (!r.pensamientoDesorganizado && !r.alteracionConciencia) faltantes.push('pensamiento desorganizado o alteración de conciencia');
      return `<strong>CAM negativo</strong>. No cumple criterios diagnósticos de delirium por el momento; falta: ${faltantes.join(', ')}.`;
    },
    fragment: r => `CAM ${r.cumple ? 'positivo' : 'negativo'}`
  }
];
