// topics/policitemia-secundaria/calculators.js
// Herramienta JAK2 + EPO: combina el estado de la mutación JAK2 V617F y el nivel de
// eritropoyetina sérica para orientar el diagnóstico diferencial central de este tema
// (eritrocitosis secundaria vs. policitemia vera), siguiendo el algoritmo real usado en la
// práctica clínica (McMullin MF, et al. Br J Haematol. 2019;184(2):176-191).

export const calculators = [
  {
    key: 'jak2epo', title: 'Herramienta JAK2 + EPO', accent: '#2e6b6b',
    subtitle: 'Eritrocitosis secundaria vs. policitemia vera',
    incompleteMsg: 'Completa el estado de JAK2 y el nivel de eritropoyetina.',
    fields: [
      { name: 'jak2', id: 'je-jak2', type: 'select', label: 'Mutación JAK2 (V617F o exón 12)', options: [
        { value: '', label: 'Selecciona...' },
        { value: 'positivo', label: 'Positiva' },
        { value: 'negativo', label: 'Negativa' }
      ] },
      { name: 'epo', id: 'je-epo', type: 'select', label: 'Eritropoyetina (EPO) sérica', options: [
        { value: '', label: 'Selecciona...' },
        { value: 'baja', label: 'Baja' },
        { value: 'normal', label: 'Normal' },
        { value: 'alta', label: 'Alta' }
      ] },
      { type: 'note', text: 'Orientador, no diagnóstico definitivo: ante duda persistente, considerar biopsia de médula ósea y secuenciación del exón 12 de JAK2.' }
    ],
    compute(v) {
      if (!v.jak2 || !v.epo) return null;
      let interp, banda;
      if (v.jak2 === 'positivo') {
        banda = 'Policitemia vera';
        interp = 'JAK2 positiva confirma policitemia vera, independientemente del nivel de EPO (ver el tema de Síndromes Mieloproliferativos)';
      } else if (v.epo === 'baja') {
        banda = 'Patrón atípico';
        interp = 'JAK2 negativa con EPO baja es un patrón atípico; descartar policitemia vera JAK2 negativa (considerar secuenciación del exón 12) antes de concluir causa secundaria';
      } else {
        banda = 'Eritrocitosis secundaria';
        interp = 'JAK2 negativa con EPO normal/alta apoya fuertemente una eritrocitosis secundaria; buscar la causa (hipóxica, producción inapropiada de EPO, o congénita, ver Complicaciones)';
      }
      return { banda, interp };
    },
    format: r => `<strong>${r.banda}</strong>: ${r.interp}.`,
    fragment: r => r.banda
  }
];
