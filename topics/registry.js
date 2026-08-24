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
  },
  {
    id: 'sindromes-mielodisplasicos', titulo: 'Síndromes Mielodisplásicos',
    load: () => Promise.all([
      import('./sindromes-mielodisplasicos/content.js'),
      import('./sindromes-mielodisplasicos/calculators.js'),
      import('./sindromes-mielodisplasicos/study.js')
    ])
  },
  {
    id: 'sindromes-mieloproliferativos', titulo: 'Síndromes Mieloproliferativos',
    load: () => Promise.all([
      import('./sindromes-mieloproliferativos/content.js'),
      import('./sindromes-mieloproliferativos/calculators.js'),
      import('./sindromes-mieloproliferativos/study.js')
    ])
  },
  {
    id: 'anemia-aplasica', titulo: 'Anemia Aplásica',
    load: () => Promise.all([
      import('./anemia-aplasica/content.js'),
      import('./anemia-aplasica/calculators.js'),
      import('./anemia-aplasica/study.js')
    ])
  },
  {
    id: 'anemias-hemoliticas-hereditarias', titulo: 'Anemias Hemolíticas Hereditarias',
    load: () => Promise.all([
      import('./anemias-hemoliticas-hereditarias/content.js'),
      import('./anemias-hemoliticas-hereditarias/calculators.js'),
      import('./anemias-hemoliticas-hereditarias/study.js')
    ])
  },
  {
    id: 'anemias-hemoliticas-adquiridas', titulo: 'Anemias Hemolíticas Adquiridas',
    load: () => Promise.all([
      import('./anemias-hemoliticas-adquiridas/content.js'),
      import('./anemias-hemoliticas-adquiridas/calculators.js'),
      import('./anemias-hemoliticas-adquiridas/study.js')
    ])
  },
  {
    id: 'anemia-ferropenica', titulo: 'Anemia Ferropénica',
    load: () => Promise.all([
      import('./anemia-ferropenica/content.js'),
      import('./anemia-ferropenica/calculators.js'),
      import('./anemia-ferropenica/study.js')
    ])
  },
  {
    id: 'anemia-megaloblastica', titulo: 'Anemia Megaloblástica',
    load: () => Promise.all([
      import('./anemia-megaloblastica/content.js'),
      import('./anemia-megaloblastica/calculators.js'),
      import('./anemia-megaloblastica/study.js')
    ])
  },
  {
    id: 'anemia-enfermedad-cronica', titulo: 'Anemia de la Enfermedad Crónica',
    load: () => Promise.all([
      import('./anemia-enfermedad-cronica/content.js'),
      import('./anemia-enfermedad-cronica/calculators.js'),
      import('./anemia-enfermedad-cronica/study.js')
    ])
  },
  {
    id: 'policitemia-secundaria', titulo: 'Policitemia Secundaria',
    load: () => Promise.all([
      import('./policitemia-secundaria/content.js'),
      import('./policitemia-secundaria/calculators.js'),
      import('./policitemia-secundaria/study.js')
    ])
  },
  {
    id: 'alteraciones-serie-blanca', titulo: 'Alteraciones de la Serie Blanca',
    load: () => Promise.all([
      import('./alteraciones-serie-blanca/content.js'),
      import('./alteraciones-serie-blanca/calculators.js'),
      import('./alteraciones-serie-blanca/study.js')
    ])
  },
  {
    id: 'porfirias', titulo: 'Porfirias',
    load: () => Promise.all([
      import('./porfirias/content.js'),
      import('./porfirias/calculators.js'),
      import('./porfirias/study.js')
    ])
  },
  {
    id: 'hemoglobinopatias', titulo: 'Hemoglobinopatías',
    load: () => Promise.all([
      import('./hemoglobinopatias/content.js'),
      import('./hemoglobinopatias/calculators.js'),
      import('./hemoglobinopatias/study.js')
    ])
  },
  {
    id: 'leucemia-aguda', titulo: 'Leucemia Aguda',
    load: () => Promise.all([
      import('./leucemia-aguda/content.js'),
      import('./leucemia-aguda/calculators.js'),
      import('./leucemia-aguda/study.js')
    ])
  },
  {
    id: 'leucemia-linfocitica-cronica', titulo: 'Leucemia Linfocítica Crónica',
    load: () => Promise.all([
      import('./leucemia-linfocitica-cronica/content.js'),
      import('./leucemia-linfocitica-cronica/calculators.js'),
      import('./leucemia-linfocitica-cronica/study.js')
    ])
  },
  {
    id: 'linfomas', titulo: 'Linfomas',
    load: () => Promise.all([
      import('./linfomas/content.js'),
      import('./linfomas/calculators.js'),
      import('./linfomas/study.js')
    ])
  },
  {
    id: 'mieloma-multiple', titulo: 'Mieloma Múltiple',
    load: () => Promise.all([
      import('./mieloma-multiple/content.js'),
      import('./mieloma-multiple/calculators.js'),
      import('./mieloma-multiple/study.js')
    ])
  },
  {
    id: 'linfadenopatias', titulo: 'Linfadenopatías',
    load: () => Promise.all([
      import('./linfadenopatias/content.js'),
      import('./linfadenopatias/calculators.js'),
      import('./linfadenopatias/study.js')
    ])
  },
  {
    id: 'hiperesplenismo', titulo: 'Hiperesplenismo',
    load: () => Promise.all([
      import('./hiperesplenismo/content.js'),
      import('./hiperesplenismo/calculators.js'),
      import('./hiperesplenismo/study.js')
    ])
  },
  {
    id: 'sindrome-hiperviscosidad', titulo: 'Síndrome de Hiperviscosidad',
    load: () => Promise.all([
      import('./sindrome-hiperviscosidad/content.js'),
      import('./sindrome-hiperviscosidad/calculators.js'),
      import('./sindrome-hiperviscosidad/study.js')
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
