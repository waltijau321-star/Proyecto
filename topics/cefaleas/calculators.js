// topics/cefaleas/calculators.js

export const calculators = [
  {
    key: 'midas', title: 'MIDAS', accent: '#8c3a34',
    subtitle: 'Discapacidad por migraña en los últimos 3 meses',
    incompleteMsg: 'Completa todos los campos (usa 0 si no aplica).',
    fields: [
      { name: 'trabajo', id: 'ceph-midas-trabajo', type: 'number', label: 'Días perdidos de trabajo/escuela', placeholder: 'ej. 2', row: 'r1' },
      { name: 'trabajoReducido', id: 'ceph-midas-trabajo-red', type: 'number', label: 'Días de trabajo/escuela con productividad reducida ≥50%', placeholder: 'ej. 3', row: 'r1' },
      { name: 'domestico', id: 'ceph-midas-domestico', type: 'number', label: 'Días perdidos de tareas domésticas', placeholder: 'ej. 1', row: 'r2' },
      { name: 'domesticoReducido', id: 'ceph-midas-domestico-red', type: 'number', label: 'Días de tareas domésticas con productividad reducida ≥50%', placeholder: 'ej. 2', row: 'r2' },
      { name: 'social', id: 'ceph-midas-social', type: 'number', label: 'Días perdidos de actividades sociales/familiares', placeholder: 'ej. 1', row: 'r3' },
      { type: 'note', text: 'Suma de los días de los últimos 3 meses en cada categoría.' }
    ],
    compute(v) {
      const score = v.trabajo + v.trabajoReducido + v.domestico + v.domesticoReducido + v.social;
      const grado = score <= 5 ? 'I (mínima o ninguna)' : score <= 10 ? 'II (leve)' : score <= 20 ? 'III (moderada)' : 'IV (severa)';
      return { score, grado };
    },
    format: r => `<strong>MIDAS ${r.score}</strong>: discapacidad grado ${r.grado}. Un grado III o IV sostenido favorece iniciar tratamiento preventivo.`,
    fragment: r => `MIDAS ${r.score} (grado ${r.grado.split(' ')[0]})`
  },
  {
    key: 'hit6', title: 'HIT-6', accent: '#7a4a2e',
    subtitle: 'Impacto de la cefalea en la función diaria',
    incompleteMsg: 'Completa todos los campos.',
    fields: [
      { name: 'dolor', id: 'ceph-hit-dolor', type: 'select', numeric: true, label: 'Intensidad del dolor', options: [
        { value: 6, label: 'Nunca (6)' }, { value: 8, label: 'Rara vez (8)' }, { value: 10, label: 'A veces (10)' }, { value: 11, label: 'Muy seguido (11)' }, { value: 13, label: 'Siempre (13)' }] },
      { name: 'social', id: 'ceph-hit-social', type: 'select', numeric: true, label: 'Limita las actividades diarias/sociales', options: [
        { value: 6, label: 'Nunca (6)' }, { value: 8, label: 'Rara vez (8)' }, { value: 10, label: 'A veces (10)' }, { value: 11, label: 'Muy seguido (11)' }, { value: 13, label: 'Siempre (13)' }] },
      { name: 'reposo', id: 'ceph-hit-reposo', type: 'select', numeric: true, label: 'Deseo de recostarse durante la crisis', options: [
        { value: 6, label: 'Nunca (6)' }, { value: 8, label: 'Rara vez (8)' }, { value: 10, label: 'A veces (10)' }, { value: 11, label: 'Muy seguido (11)' }, { value: 13, label: 'Siempre (13)' }] },
      { name: 'fatiga', id: 'ceph-hit-fatiga', type: 'select', numeric: true, label: 'Sensación de fatiga o cansancio', options: [
        { value: 6, label: 'Nunca (6)' }, { value: 8, label: 'Rara vez (8)' }, { value: 10, label: 'A veces (10)' }, { value: 11, label: 'Muy seguido (11)' }, { value: 13, label: 'Siempre (13)' }] },
      { name: 'animo', id: 'ceph-hit-animo', type: 'select', numeric: true, label: 'Se siente harto o irritable', options: [
        { value: 6, label: 'Nunca (6)' }, { value: 8, label: 'Rara vez (8)' }, { value: 10, label: 'A veces (10)' }, { value: 11, label: 'Muy seguido (11)' }, { value: 13, label: 'Siempre (13)' }] },
      { name: 'concentracion', id: 'ceph-hit-concentracion', type: 'select', numeric: true, label: 'Dificultad para concentrarse en el trabajo', options: [
        { value: 6, label: 'Nunca (6)' }, { value: 8, label: 'Rara vez (8)' }, { value: 10, label: 'A veces (10)' }, { value: 11, label: 'Muy seguido (11)' }, { value: 13, label: 'Siempre (13)' }] }
    ],
    compute(v) {
      const score = v.dolor + v.social + v.reposo + v.fatiga + v.animo + v.concentracion;
      const impacto = score < 50 ? 'poco o ningún impacto' : score < 56 ? 'impacto moderado' : score < 60 ? 'impacto sustancial' : 'impacto severo';
      return { score, impacto };
    },
    format: r => `<strong>HIT-6 ${r.score}/78</strong>: ${r.impacto}. Un puntaje de 60 o más indica un impacto severo en la función diaria.`,
    fragment: r => `HIT-6 ${r.score}/78`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
