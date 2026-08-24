// topics/coagulacion-trombofilias/calculators.js
// 1 herramienta real:
// - ISTH-BAT (Bleeding Assessment Tool): cuestionario estandarizado de síntomas hemorrágicos que
//   orienta cuándo un paciente amerita estudio formal de un trastorno de sangrado (enfermedad de
//   von Willebrand, hemofilia leve, disfunción plaquetaria). Versión simplificada (presencia/
//   ausencia por dominio en lugar de la puntuación de gravedad 0-4 por dominio del instrumento
//   original) con el punto de corte estándar diferenciado por sexo (Rodeghiero F, et al. J Thromb
//   Haemost. 2010;8(9):2063-2065; Elbatarny M, et al. Haemophilia. 2014;20(6):831-835).

export const calculators = [
  {
    key: 'isth-bat', title: 'ISTH-BAT (Bleeding Assessment Tool)', accent: '#5c3d73',
    subtitle: 'Cuestionario de síntomas hemorrágicos, orienta estudio formal',
    incompleteMsg: 'Marca los dominios presentes (deja sin marcar los ausentes) e indica el sexo.',
    fields: [
      { name: 'sexo', id: 'bat-sexo', type: 'select', label: 'Sexo', options: [
        { value: '', label: 'Selecciona...' },
        { value: 'M', label: 'Masculino' },
        { value: 'F', label: 'Femenino' }
      ] },
      { name: 'epistaxis', id: 'bat-epistaxis', type: 'checkbox', label: 'Epistaxis significativa (requirió consulta o taponamiento)' },
      { name: 'cutaneo', id: 'bat-cutaneo', type: 'checkbox', label: 'Sangrado cutáneo (equimosis frecuentes o desproporcionadas)' },
      { name: 'heridasMenores', id: 'bat-heridas', type: 'checkbox', label: 'Sangrado prolongado de heridas menores' },
      { name: 'cavidadOral', id: 'bat-oral', type: 'checkbox', label: 'Sangrado de cavidad oral (encías) espontáneo o con el cepillado' },
      { name: 'gastrointestinal', id: 'bat-gi', type: 'checkbox', label: 'Hemorragia gastrointestinal sin lesión estructural identificada' },
      { name: 'extraccionDental', id: 'bat-dental', type: 'checkbox', label: 'Sangrado prolongado tras extracción dental' },
      { name: 'quirurgico', id: 'bat-qx', type: 'checkbox', label: 'Sangrado quirúrgico excesivo o inesperado' },
      { name: 'menorragia', id: 'bat-menorragia', type: 'checkbox', label: 'Menorragia (si aplica)' },
      { name: 'hematomasMusculares', id: 'bat-hematomas', type: 'checkbox', label: 'Hematomas musculares espontáneos' },
      { name: 'hemartrosis', id: 'bat-hemartrosis', type: 'checkbox', label: 'Hemartrosis espontánea' },
      { type: 'note', text: 'Versión simplificada por presencia/ausencia de dominio (el instrumento original puntúa 0-4 por gravedad dentro de cada dominio). Punto de corte anormal: ≥4 dominios en hombres, ≥6 en mujeres.' }
    ],
    compute(v) {
      if (!v.sexo) return null;
      const dominios = [v.epistaxis, v.cutaneo, v.heridasMenores, v.cavidadOral, v.gastrointestinal, v.extraccionDental, v.quirurgico, v.menorragia, v.hematomasMusculares, v.hemartrosis];
      if (dominios.some(d => d == null)) return null;
      const n = dominios.filter(Boolean).length;
      const cutoff = v.sexo === 'M' ? 4 : 6;
      const anormal = n >= cutoff;
      return { n, cutoff, anormal };
    },
    format: r => r.anormal
      ? `<strong>Score anormal</strong> (${r.n} dominios positivos, punto de corte ${r.cutoff}): estudio formal de un trastorno hemorrágico indicado (enfermedad de von Willebrand, hemofilia leve, disfunción plaquetaria).`
      : `<strong>Score normal</strong> (${r.n} dominios positivos, punto de corte ${r.cutoff}): un trastorno hemorrágico significativo es poco probable, aunque no lo descarta por completo si la sospecha clínica es alta.`,
    fragment: r => r.anormal ? `ISTH-BAT anormal (${r.n})` : `ISTH-BAT normal (${r.n})`
  }
];
