// topics/linfadenopatias/calculators.js
// 1 herramienta real:
// - Criterios de alarma para biopsia de linfadenopatía: checklist categórico (no una escala
//   numérica validada internacionalmente, dado que no existe una para esta indicación) que
//   sintetiza los factores clínicos reconocidos que aumentan la probabilidad de malignidad y
//   orientan la decisión de biopsiar en lugar de observar (Bazemore AW, Smucker DR. Am Fam
//   Physician. 2002;66(11):2103-2110; Gaddey HL, Riegel AM. Am Fam Physician. 2016;94(11):896-903).

export const calculators = [
  {
    key: 'alarma-adenopatia', title: 'Criterios de Alarma para Biopsia', accent: '#2d6b5c',
    subtitle: 'Factores que orientan biopsia vs. observación en linfadenopatía',
    incompleteMsg: 'Marca los criterios presentes (deja sin marcar los ausentes).',
    fields: [
      { name: 'tamano', id: 'alarma-tamano', type: 'checkbox', label: 'Tamaño &gt;2 cm' },
      { name: 'supraclavicular', id: 'alarma-supraclavicular', type: 'checkbox', label: 'Localización supraclavicular' },
      { name: 'duracion', id: 'alarma-duracion', type: 'checkbox', label: 'Persistencia &gt;4-6 semanas sin regresión' },
      { name: 'consistencia', id: 'alarma-consistencia', type: 'checkbox', label: 'Consistencia dura, fija a planos profundos, o no dolorosa' },
      { name: 'sintomasB', id: 'alarma-sintomasb', type: 'checkbox', label: 'Síntomas B acompañantes (fiebre, sudoración nocturna, pérdida de peso)' },
      { name: 'edad', id: 'alarma-edad', type: 'checkbox', label: 'Edad &gt;40 años' },
      { type: 'note', text: 'Ningún criterio aislado es diagnóstico; a mayor número de criterios presentes, mayor la probabilidad de malignidad y más firme la indicación de biopsia sobre la observación expectante. La localización supraclavicular por sí sola ya amerita biopsia dado su alto valor predictivo de malignidad.' }
    ],
    compute(v) {
      const fields = [v.tamano, v.supraclavicular, v.duracion, v.consistencia, v.sintomasB, v.edad];
      if (fields.some(f => f == null)) return null;
      const n = fields.filter(Boolean).length;
      let banda, color;
      if (v.supraclavicular || n >= 3) { banda = 'Alto riesgo: biopsia indicada'; color = 'danger'; }
      else if (n >= 1) { banda = 'Riesgo intermedio: individualizar, seguimiento estrecho u biopsia temprana'; color = 'warn'; }
      else { banda = 'Bajo riesgo: observación razonable 4-6 semanas'; color = 'ok'; }
      return { n, banda, color };
    },
    format: r => `<strong>${r.banda}</strong> (${r.n} de 6 criterios presentes).`,
    fragment: r => r.banda
  }
];
