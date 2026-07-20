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
    modalLabels: c.modalLabels,
    diagnosticoIntro: c.diagnosticoIntro,
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
