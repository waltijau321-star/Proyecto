// topics/nodulo-cancer-tiroides/calculators.js
// 2 herramientas:
// - ti-rads: sistema TI-RADS del American College of Radiology. Puntua cinco caracteristicas
//   ecograficas (los focos ecogenicos SUMAN entre si), da la categoria TR1 a TR5 y cruza esa
//   categoria con el TAMANO para indicar puncion, seguimiento o nada.
// - riesgo-recurrencia-ata: clasificacion de riesgo de recurrencia de la ATA 2015 a partir de los
//   hallazgos de la pieza quirurgica, con la indicacion de yodo radiactivo y el objetivo de TSH
//   que se derivan de ella, ajustado despues por la respuesta al tratamiento.
//
// El riesgo de la ATA predice la RECURRENCIA; la estadificacion TNM predice la MORTALIDAD y usa
// la edad. Son cosas distintas y no se sustituyen: en la practica diaria manda la primera.
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

// Umbrales de puncion y de seguimiento por categoria TI-RADS, en centimetros.
const TIRADS_CONDUCTA = {
  TR1: { paaf: null, seg: null, txt: 'benigno' },
  TR2: { paaf: null, seg: null, txt: 'no sospechoso' },
  TR3: { paaf: 2.5, seg: 1.5, txt: 'levemente sospechoso' },
  TR4: { paaf: 1.5, seg: 1.0, txt: 'moderadamente sospechoso' },
  TR5: { paaf: 1.0, seg: 0.5, txt: 'muy sospechoso' }
};

function categoriaTirads(p) {
  if (p >= 7) return 'TR5';
  if (p >= 4) return 'TR4';
  if (p === 3) return 'TR3';
  if (p >= 1) return 'TR2';
  return 'TR1';
}

export const calculators = [
  {
    key: 'ti-rads', title: 'TI-RADS del ACR: categoría y umbral de punción', accent: '#5b4a86',
    subtitle: 'Cinco características ecográficas cruzadas con el tamano del nódulo',
    incompleteMsg: 'Elige composición, ecogenicidad, forma y margen, e introduce el tamano.',
    fields: [
      { name: 'composicion', id: 'nct-tr-comp', type: 'select', label: 'Composicion', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Quistico o casi por completo quistico (0)' },
        { value: '0e', label: 'Espongiforme (0)' },
        { value: '1', label: 'Mixto quistico y sólido (1)' },
        { value: '2', label: 'Sólido o casi por completo sólido (2)' } ] },
      { name: 'ecogenicidad', id: 'nct-tr-eco', type: 'select', label: 'Ecogenicidad', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Anecoico (0)' },
        { value: '1', label: 'Hiperecoico o isoecoico (1)' },
        { value: '2', label: 'Hipoecoico (2)' },
        { value: '3', label: 'Muy hipoecoico (3)' } ] },
      { name: 'forma', id: 'nct-tr-forma', type: 'select', label: 'Forma', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Más ancho que alto (0)' },
        { value: '3', label: 'Más alto que ancho (3)' } ], row: 'r1' },
      { name: 'margen', id: 'nct-tr-margen', type: 'select', label: 'Margen', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Liso o mal definido (0)' },
        { value: '2', label: 'Lobulado o irregular (2)' },
        { value: '3', label: 'Extensión extratiroidea (3)' } ], row: 'r1' },
      { type: 'note', text: 'Los focos ecogenicos que siguen SUMAN entre si: marca todos los presentes. Los artefactos en cola de cometa grandes no puntuan (son signo de benignidad, típico del coloide).' },
      { name: 'macrocalcio', id: 'nct-tr-macro', type: 'checkbox', label: 'Macrocalcificaciones (1)' },
      { name: 'calcioPeriferico', id: 'nct-tr-peri', type: 'checkbox', label: 'Calcificaciones periféricas en anillo (2)' },
      { name: 'puntiformes', id: 'nct-tr-punt', type: 'checkbox', label: 'Focos ecogenicos puntiformes o microcalcificaciones (3)' },
      { name: 'tamano', id: 'nct-tr-tam', type: 'number', step: '0.1', label: 'Diámetro máximo del nódulo (cm)', placeholder: 'ej. 1.8' },
      { type: 'note', text: 'ANTES de aplicar el TI-RADS hay que tener una TSH: si esta SUPRIMIDA, el camino es la gammagrafía, y un nódulo caliente prácticamente nunca es maligno y NO se punciona. El TI-RADS tampoco sustituye a la valoración de las cadenas ganglionares cervicales: una adenopatía sospechosa cambia la conducta con independencia del nódulo. Y en un nódulo con crecimiento rápido, disfonia, fijación o adenopatías duras, la sospecha clínica manda sobre la puntuación.' }
    ],
    compute(v) {
      if (!v.composicion || !v.ecogenicidad || !v.forma || !v.margen || v.tamano == null) return null;
      if (!(v.tamano > 0 && v.tamano < 30)) return { invalido: true };
      const espongiforme = v.composicion === '0e';
      const pComp = espongiforme ? 0 : +v.composicion;
      const pEco = +v.ecogenicidad, pForma = +v.forma, pMargen = +v.margen;
      const pFocos = (v.macrocalcio ? 1 : 0) + (v.calcioPeriferico ? 2 : 0) + (v.puntiformes ? 3 : 0);
      const total = pComp + pEco + pForma + pMargen + pFocos;
      const cat = categoriaTirads(total);
      const c = TIRADS_CONDUCTA[cat];
      let conducta;
      if (!c.paaf) conducta = 'no requiere punción ni seguimiento específico por la categoría';
      else if (v.tamano >= c.paaf) conducta = `PUNCIÓN con aguja fina guiada por ecografía (umbral de ${c.paaf} cm para ${cat})`;
      else if (v.tamano >= c.seg) conducta = `seguimiento ecográfico, sin punción (el umbral de punción en ${cat} es de ${c.paaf} cm)`;
      else conducta = `sin punción ni seguimiento por la categoría (umbral de seguimiento en ${cat}: ${c.seg} cm)`;
      return { total, cat, etiqueta: c.txt, conducta, tamano: v.tamano, pComp, pEco, pForma, pMargen, pFocos, espongiforme };
    },
    format: r => {
      if (r.invalido) return 'Revisa el tamano del nódulo (en centimetros).';
      let s = `<strong>${r.total} puntos: ${r.cat} (${r.etiqueta}).</strong> Desglose: composición ${r.pComp}, ecogenicidad ${r.pEco}, forma ${r.pForma}, margen ${r.pMargen}, focos ecogenicos ${r.pFocos}. Con un diámetro de ${r.tamano} cm: <strong>${r.conducta}</strong>.`;
      if (r.espongiforme) s += ' El patrón espongiforme puntúa 0 y es prácticamente sinónimo de benignidad.';
      if (r.cat === 'TR5') s += ' Seguimiento anual si no se punciona; TR4 a los 1 a 2 anos y TR3 a los 2 a 3 anos.';
      s += ' Recuerda: si la TSH esta suprimida, primero gammagrafía, porque un nódulo caliente no se punciona. Y valora siempre las cadenas ganglionares: una adenopatía sospechosa cambia la conducta al margen de la puntuación.';
      return s;
    },
    fragment: r => r.invalido ? 'tamano no valido' : `${r.cat} (${r.total} puntos), ${r.tamano} cm`
  },
  {
    key: 'riesgo-recurrencia-ata', title: 'Riesgo de recurrencia de la ATA y objetivo de TSH', accent: '#6b4a2e',
    subtitle: 'Clasificación del carcinoma diferenciado tras la cirugía, con conducta derivada',
    incompleteMsg: 'Responde la extensión, la histología, los ganglios y las metástasis.',
    fields: [
      { name: 'extension', id: 'nct-ata-ext', type: 'select', label: 'Extensión y resección', options: [
        { value: '', label: 'Selecciona' },
        { value: 'intratiroideo', label: 'Intratiroideo, resección macroscópica completa' },
        { value: 'micro', label: 'Invasión MICROSCOPICA de partes blandas peritiroideas' },
        { value: 'macro', label: 'Invasión MACROSCÓPICA de partes blandas peritiroideas' },
        { value: 'incompleta', label: 'Resección tumoral incompleta (resto macroscópico)' } ] },
      { name: 'histologia', id: 'nct-ata-hist', type: 'select', label: 'Histología e invasión vascular', options: [
        { value: '', label: 'Selecciona' },
        { value: 'favorable', label: 'Papilar clásico o folicular, sin invasión vascular' },
        { value: 'vascMinima', label: 'Folicular con invasión vascular mínima (menos de 4 focos)' },
        { value: 'agresiva', label: 'Histología agresiva (células altas, hobnail, columnar) o invasión vascular' },
        { value: 'vascExtensa', label: 'Folicular con invasión vascular EXTENSA (4 focos o más)' } ] },
      { name: 'ganglios', id: 'nct-ata-gg', type: 'select', label: 'Ganglios linfáticos', options: [
        { value: '', label: 'Selecciona' },
        { value: 'n0', label: 'Sin afectación ganglionar (cN0 o pN0)' },
        { value: 'micro5', label: 'Hasta 5 micrometastasis ganglionares (menores de 0.2 cm)' },
        { value: 'clinico', label: 'Ganglios clínicamente afectados, o más de 5, todos menores de 3 cm' },
        { value: 'grande', label: 'Algún ganglio metastásico de 3 cm o más' } ] },
      { name: 'metastasis', id: 'nct-ata-mts', type: 'select', label: 'Metástasis a distancia y captación', options: [
        { value: '', label: 'Selecciona' },
        { value: 'no', label: 'Sin metástasis a distancia' },
        { value: 'focosCuello', label: 'Focos captantes de yodo en el cuello en el primer rastreo' },
        { value: 'tgAlta', label: 'Tiroglobulina posquirúrgica sugestiva de metástasis a distancia' },
        { value: 'si', label: 'Metástasis a distancia demostradas' } ] },
      { name: 'respuesta', id: 'nct-ata-resp', type: 'select', required: false, label: 'Opcional: respuesta al tratamiento en el seguimiento', options: [
        { value: '', label: 'Todavía no evaluable (recién operado)' },
        { value: 'excelente', label: 'Excelente: tiroglobulina indetectable e imagen negativa' },
        { value: 'indeterminada', label: 'Indeterminada: hallazgos inespecíficos o tiroglobulina limite' },
        { value: 'bioquimica', label: 'Bioquímica incompleta: tiroglobulina elevada sin lesión visible' },
        { value: 'estructural', label: 'Estructural incompleta: enfermedad visible en imagen' } ] },
      { type: 'note', text: 'Esta clasificación predice la RECURRENCIA y se aplica al carcinoma DIFERENCIADO (papilar, folicular y oncocitico). No sirve para el medular, que se sigue con calcitonina y antígeno carcinoembrionario, ni para el anaplasico, que es estadio IV por definición. La estadificación TNM es otra cosa: predice la MORTALIDAD y usa la edad de 55 anos como punto de corte. La respuesta al tratamiento reclasifica al paciente con el tiempo y ha desplazado en gran medida al riesgo inicial para decidir el objetivo de TSH y la intensidad del seguimiento.' }
    ],
    compute(v) {
      if (!v.extension || !v.histologia || !v.ganglios || !v.metastasis) return null;
      const motivosAlto = [], motivosInter = [];
      if (v.extension === 'macro') motivosAlto.push('invasión macroscópica de partes blandas peritiroideas');
      if (v.extension === 'incompleta') motivosAlto.push('resección tumoral incompleta');
      if (v.extension === 'micro') motivosInter.push('invasión microscopica de partes blandas peritiroideas');
      if (v.histologia === 'vascExtensa') motivosAlto.push('invasión vascular extensa en un carcinoma folicular');
      if (v.histologia === 'agresiva') motivosInter.push('histología agresiva o invasión vascular');
      if (v.ganglios === 'grande') motivosAlto.push('ganglio metastásico de 3 cm o más');
      if (v.ganglios === 'clinico') motivosInter.push('ganglios clínicamente afectados o más de 5 afectados');
      if (v.metastasis === 'si') motivosAlto.push('metástasis a distancia');
      if (v.metastasis === 'tgAlta') motivosAlto.push('tiroglobulina posquirúrgica sugestiva de metástasis a distancia');
      if (v.metastasis === 'focosCuello') motivosInter.push('focos captantes de yodo en el cuello en el primer rastreo');

      const riesgo = motivosAlto.length ? 'ALTO' : (motivosInter.length ? 'INTERMEDIO' : 'BAJO');
      const motivos = motivosAlto.length ? motivosAlto : motivosInter;

      let rai;
      if (riesgo === 'ALTO') rai = 'Yodo radiactivo INDICADO tras la tiroidectomía total.';
      else if (riesgo === 'INTERMEDIO') rai = 'Yodo radiactivo de indicación SELECTIVA: se valora caso por caso según la carga de enfermedad, la edad y la tiroglobulina posquirúrgica.';
      else rai = 'Yodo radiactivo NO indicado de forma sistemática: en el riesgo bajo no mejora los resultados y se ha abandonado como práctica rutinaria.';

      let tsh;
      const resp = v.respuesta || '';
      if (resp === 'estructural') tsh = 'TSH por debajo de 0.1 mUI/L (enfermedad estructural persistente).';
      else if (resp === 'bioquimica' || resp === 'indeterminada') tsh = 'TSH de 0.1 a 0.5 mUI/L.';
      else if (resp === 'excelente') tsh = 'TSH de 0.5 a 2.0 mUI/L: con respuesta excelente se puede relajar el objetivo aunque el riesgo inicial fuera intermedio o alto.';
      else if (riesgo === 'ALTO') tsh = 'TSH por debajo de 0.1 mUI/L mientras no se documente la respuesta.';
      else if (riesgo === 'INTERMEDIO') tsh = 'TSH de 0.1 a 0.5 mUI/L mientras no se documente la respuesta.';
      else tsh = 'TSH de 0.5 a 2.0 mUI/L.';

      return { riesgo, motivos, rai, tsh, resp, recurrencia: riesgo === 'ALTO' ? 'más del 40%' : (riesgo === 'INTERMEDIO' ? 'alrededor del 20%' : 'alrededor del 5%') };
    },
    format: r => {
      let s = `<strong>Riesgo de recurrencia ${r.riesgo}</strong> según la clasificación de la ATA, con una probabilidad de recurrencia estructural de ${r.recurrencia}.`;
      if (r.motivos.length) s += ` Lo determina: ${r.motivos.join('; ')}.`;
      else s += ' Ningún criterio de riesgo intermedio ni alto presente.';
      s += ` <strong>Yodo radiactivo:</strong> ${r.rai} <strong>Objetivo de TSH:</strong> ${r.tsh}`;
      if (!r.resp) s += ' Reevalua a los 6 a 12 meses con tiroglobulina (siempre junto con anticuerpos antitiroglobulina) y ecografía cervical, y reclasifica por la RESPUESTA: es lo que gobierna el seguimiento a partir de ese momento.';
      if (r.resp === 'excelente') s += ' Con respuesta excelente se pueden espaciar los controles a intervalos anuales o mayores.';
      if (r.resp === 'estructural') s += ' Ante enfermedad estructural, valorar cirugía de rescate si es resecable; si es refractaria al yodo y progresa, inhibidores multicinasa (lenvatinib, sorafenib) o terapia dirigida según la diana molecular.';
      s += ' Vigila el coste de la supresión mantenida de TSH sobre el corazón y el hueso.';
      return s;
    },
    fragment: r => `riesgo ATA ${r.riesgo}${r.resp ? ', respuesta ' + r.resp : ''}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
