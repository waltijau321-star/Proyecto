// topics/registry.js
// Catálogo de temas de estudio. Cada entrada carga de forma perezosa (import dinámico)
// sus tres archivos de contenido y los compone en un único objeto `topic` que consume el motor.
// Agregar un tema nuevo = crear su carpeta con content.js, calculators.js y study.js, y añadir una entrada aquí.

export const registry = [
  {
    id: 'cirrosis-hepatica', titulo: 'Cirrosis',
    load: () => Promise.all([
      import('./cirrosis-hepatica/content.js'),
      import('./cirrosis-hepatica/calculators.js'),
      import('./cirrosis-hepatica/study.js')
    ])
  },
  {
    id: 'sepsis', titulo: 'Sepsis / Choque séptico',
    load: () => Promise.all([
      import('./sepsis/content.js'),
      import('./sepsis/calculators.js'),
      import('./sepsis/study.js')
    ])
  },
  {
    id: 'vasopresores-sedantes', titulo: 'Vasopresores y Sedantes',
    load: () => Promise.all([
      import('./vasopresores-sedantes/content.js'),
      import('./vasopresores-sedantes/calculators.js'),
      import('./vasopresores-sedantes/study.js')
    ])
  },
  {
    id: 'historia-clinica', titulo: 'Historia Clínica y Anamnesis Dirigida',
    load: () => Promise.all([
      import('./historia-clinica/content.js'),
      import('./historia-clinica/calculators.js'),
      import('./historia-clinica/study.js')
    ])
  },
  {
    id: 'exploracion-cardiovascular', titulo: 'Exploración Cardiovascular',
    load: () => Promise.all([
      import('./exploracion-cardiovascular/content.js'),
      import('./exploracion-cardiovascular/calculators.js'),
      import('./exploracion-cardiovascular/study.js')
    ])
  },
  {
    id: 'exploracion-respiratoria', titulo: 'Exploración Respiratoria',
    load: () => Promise.all([
      import('./exploracion-respiratoria/content.js'),
      import('./exploracion-respiratoria/calculators.js'),
      import('./exploracion-respiratoria/study.js')
    ])
  },
  {
    id: 'exploracion-abdominal', titulo: 'Exploración Abdominal',
    load: () => Promise.all([
      import('./exploracion-abdominal/content.js'),
      import('./exploracion-abdominal/calculators.js'),
      import('./exploracion-abdominal/study.js')
    ])
  },
  {
    id: 'exploracion-neurologica', titulo: 'Exploración Neurológica',
    load: () => Promise.all([
      import('./exploracion-neurologica/content.js'),
      import('./exploracion-neurologica/calculators.js'),
      import('./exploracion-neurologica/study.js')
    ])
  },
  {
    id: 'exploracion-piel-faneras', titulo: 'Exploración de Piel y Faneras',
    load: () => Promise.all([
      import('./exploracion-piel-faneras/content.js'),
      import('./exploracion-piel-faneras/calculators.js'),
      import('./exploracion-piel-faneras/study.js')
    ])
  },
  {
    id: 'exploracion-osteoarticular', titulo: 'Exploración Osteoarticular y de Extremidades',
    load: () => Promise.all([
      import('./exploracion-osteoarticular/content.js'),
      import('./exploracion-osteoarticular/calculators.js'),
      import('./exploracion-osteoarticular/study.js')
    ])
  },
  {
    id: 'exploracion-cabeza-cuello', titulo: 'Exploración de Cabeza, Cuello y Ganglios',
    load: () => Promise.all([
      import('./exploracion-cabeza-cuello/content.js'),
      import('./exploracion-cabeza-cuello/calculators.js'),
      import('./exploracion-cabeza-cuello/study.js')
    ])
  },
  {
    id: 'signos-clasicos', titulo: 'Signos y Maniobras Clásicas',
    load: () => Promise.all([
      import('./signos-clasicos/content.js'),
      import('./signos-clasicos/calculators.js'),
      import('./signos-clasicos/study.js')
    ])
  },
  {
    id: 'enfermedad-cerebrovascular', titulo: 'Enfermedad Cerebrovascular',
    load: () => Promise.all([
      import('./enfermedad-cerebrovascular/content.js'),
      import('./enfermedad-cerebrovascular/calculators.js'),
      import('./enfermedad-cerebrovascular/study.js')
    ])
  },
  {
    id: 'estado-epileptico', titulo: 'Estado Epiléptico y Epilepsia',
    load: () => Promise.all([
      import('./estado-epileptico/content.js'),
      import('./estado-epileptico/calculators.js'),
      import('./estado-epileptico/study.js')
    ])
  },
  {
    id: 'cefaleas', titulo: 'Cefaleas',
    load: () => Promise.all([
      import('./cefaleas/content.js'),
      import('./cefaleas/calculators.js'),
      import('./cefaleas/study.js')
    ])
  },
  {
    id: 'miocardiopatias', titulo: 'Miocardiopatías',
    load: () => Promise.all([
      import('./miocardiopatias/content.js'),
      import('./miocardiopatias/calculators.js'),
      import('./miocardiopatias/study.js')
    ])
  }
];

function compose(c, calc, study) {
  return {
    meta: c.meta,
    content: c.content,
    bibliografia: c.bibliografia,
    compCites: c.compCites,
    estigmas: c.estigmas,
    biopsia: c.biopsia,
    escalaRefs: c.escalaRefs,
    escalaCalc: c.escalaCalc,
    compGroups: c.compGroups,
    categories: c.categories,
    arbol: c.arbol,
    definicionText: c.definicionText,
    diagCites: c.diagCites,
    estigmasTitulo: c.estigmasTitulo,
    biopsiaTitulo: c.biopsiaTitulo,
    clasificacionCite: c.clasificacionCite,
    seguimientoCite: c.seguimientoCite,
    figuras: c.figuras,
    figurasClasificacion: c.figurasClasificacion,
    figurasDefinicion: c.figurasDefinicion,
    modalLabels: c.modalLabels,
    diagnosticoIntro: c.diagnosticoIntro,
    complicacionesIntro: c.complicacionesIntro,
    calculators: calc.calculators || [],
    combinedNote: calc.combinedNote || null,
    study: {
      quiz: study.quiz || [],
      flashcards: study.flashcards || [],
      caseSteps: study.caseSteps || [],
      caseSummary: study.caseSummary
    }
  };
}

const cache = {};
export async function loadTopic(id) {
  const entry = registry.find(t => t.id === id);
  if (!entry) return null;
  if (cache[id]) return cache[id];
  try {
    const [c, calc, study] = await entry.load();
    cache[id] = compose(c, calc, study);
    return cache[id];
  } catch (e) {
    console.error('No se pudo cargar el tema', id, e);
    return null;
  }
}
