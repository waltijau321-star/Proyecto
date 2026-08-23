// topics/hemoglobinopatias/calculators.js
// Doppler transcraneal (TCD): clasifica el riesgo de evento cerebrovascular en la enfermedad de
// células falciformes según la velocidad media temporal máxima (TAMMV) en la arteria cerebral
// media, el cribado estandarizado real que decide el inicio de transfusiones crónicas
// profilácticas (Adams RJ, et al. N Engl J Med. 1998;339(1):5-11; DeBaun MR, et al. Blood.
// 2020;136(20):2244-2264).

function tcdBanda(v) {
  if (v < 170) return { banda: 'Normal', color: 'ok' };
  if (v < 200) return { banda: 'Condicional', color: 'warn' };
  return { banda: 'Anormal', color: 'danger' };
}

export const calculators = [
  {
    key: 'tcd', title: 'Doppler transcraneal (TCD)', accent: '#7a1f3d',
    subtitle: 'Riesgo de ACV en enfermedad de células falciformes',
    incompleteMsg: 'Completa la velocidad media temporal máxima de la arteria cerebral media.',
    fields: [
      { name: 'velocidad', id: 'tcd-vel', type: 'number', label: 'Velocidad media temporal máxima, ACM (cm/s)', placeholder: 'p. ej. 185' },
      { type: 'note', text: 'Normal &lt;170 cm/s: cribado anual. Condicional 170-199 cm/s: repetir en 3-6 meses. Anormal ≥200 cm/s (confirmado en 2 estudios): indica inicio de transfusiones crónicas profilácticas.' }
    ],
    compute(v) {
      if (v.velocidad == null || v.velocidad < 0) return null;
      const { banda, color } = tcdBanda(v.velocidad);
      let interp;
      if (banda === 'Normal') interp = 'Riesgo bajo de ACV; continuar cribado anual con Doppler transcraneal según la edad del paciente';
      else if (banda === 'Condicional') interp = 'Riesgo intermedio; repetir el estudio en 3-6 meses para reclasificar, dado que un subgrupo progresa a anormal';
      else interp = 'Riesgo alto de ACV; si se confirma en un segundo estudio, indica iniciar transfusiones crónicas profilácticas para reducir el riesgo de un primer evento';
      return { velocidad: v.velocidad, banda, interp };
    },
    format: r => `<strong>${r.velocidad} cm/s: ${r.banda}</strong>. ${r.interp}.`,
    fragment: r => `TCD ${r.velocidad} cm/s (${r.banda})`
  }
];
