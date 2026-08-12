// topics/estado-epileptico/calculators.js

export const calculators = [
  {
    key: 'stess', title: 'STESS', accent: '#8c3a34',
    subtitle: 'Pronóstico al ingreso del estado epiléptico',
    incompleteMsg: 'Completa todos los campos.',
    fields: [
      { name: 'consciencia', id: 'ee-stess-consc', type: 'select', numeric: true, label: 'Nivel de consciencia', options: [
        { value: 0, label: 'Alerta o somnoliento/confuso (0)' }, { value: 1, label: 'Estuporoso o comatoso (1)' }] },
      { name: 'tipoCrisis', id: 'ee-stess-tipo', type: 'select', numeric: true, label: 'Peor tipo de crisis', options: [
        { value: 0, label: 'Parcial simple, parcial compleja, ausencia o mioclónica (0)' },
        { value: 1, label: 'Generalizada convulsiva (1)' },
        { value: 2, label: 'No convulsiva en coma (2)' }] },
      { name: 'edad', id: 'ee-stess-edad', type: 'select', numeric: true, label: 'Edad', options: [
        { value: 0, label: 'Menor a 65 años (0)' }, { value: 2, label: '65 años o más (2)' }] },
      { name: 'previas', id: 'ee-stess-previas', type: 'select', numeric: true, label: 'Antecedente de crisis previas', options: [
        { value: 0, label: 'Conocido (0)' }, { value: 1, label: 'No o desconocido (1)' }] }
    ],
    compute(v) {
      const score = v.consciencia + v.tipoCrisis + v.edad + v.previas;
      const pronostico = score >= 3 ? 'desfavorable (mayor riesgo de muerte o de no retornar al estado neurológico basal)' : 'favorable';
      return { score, pronostico };
    },
    format: r => `<strong>STESS ${r.score}/6</strong>: pronóstico ${r.pronostico}.`,
    fragment: r => `STESS ${r.score}/6`
  },
  {
    key: 'recurrencia1cx', title: 'Riesgo de recurrencia tras 1ª crisis', accent: '#966b35',
    subtitle: 'Ayuda clínica basada en los factores de riesgo del panel AAN/AES 2015 (no es un score numérico validado)',
    incompleteMsg: 'Marca los factores presentes (puede dejar todos sin marcar).',
    fields: [
      { name: 'eeg', id: 'ee-rec-eeg', type: 'checkbox', label: 'Anomalía epileptiforme en el EEG' },
      { name: 'lesion', id: 'ee-rec-lesion', type: 'checkbox', label: 'Lesión estructural relevante en la neuroimagen' },
      { name: 'examen', id: 'ee-rec-examen', type: 'checkbox', label: 'Examen neurológico anormal' },
      { name: 'nocturna', id: 'ee-rec-nocturna', type: 'checkbox', label: 'Crisis de inicio nocturno' },
      { type: 'note', text: 'Herramienta cualitativa: agrupa los factores de riesgo descritos por la guía AAN/AES 2015 para orientar la discusión sobre iniciar o no un FAE, no reemplaza el juicio clínico.' }
    ],
    compute(v) {
      const factores = ['eeg', 'lesion', 'examen', 'nocturna'].filter(f => v[f]).length;
      const riesgo = factores === 0 ? 'bajo (aproximadamente 25-30% a 2 años)' : factores === 1 ? 'moderado (aproximadamente 40-50% a 2 años)' : 'alto (60% o más a 2 años)';
      return { factores, riesgo };
    },
    format: r => `<strong>${r.factores} factor(es) de riesgo presentes</strong>: riesgo de recurrencia a 2 años ${r.riesgo}. Con riesgo alto, discutir de forma individualizada el inicio de un FAE.`,
    fragment: r => `${r.factores} factor(es), riesgo ${r.riesgo.split(' ')[0]}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
