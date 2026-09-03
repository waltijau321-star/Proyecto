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
    key: 'ti-rads', title: 'TI-RADS del ACR: categoria y umbral de puncion', accent: '#5b4a86',
    subtitle: 'Cinco caracteristicas ecograficas cruzadas con el tamano del nodulo',
    incompleteMsg: 'Elige composicion, ecogenicidad, forma y margen, e introduce el tamano.',
    fields: [
      { name: 'composicion', id: 'nct-tr-comp', type: 'select', label: 'Composicion', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Quistico o casi por completo quistico (0)' },
        { value: '0e', label: 'Espongiforme (0)' },
        { value: '1', label: 'Mixto quistico y solido (1)' },
        { value: '2', label: 'Solido o casi por completo solido (2)' } ] },
      { name: 'ecogenicidad', id: 'nct-tr-eco', type: 'select', label: 'Ecogenicidad', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Anecoico (0)' },
        { value: '1', label: 'Hiperecoico o isoecoico (1)' },
        { value: '2', label: 'Hipoecoico (2)' },
        { value: '3', label: 'Muy hipoecoico (3)' } ] },
      { name: 'forma', id: 'nct-tr-forma', type: 'select', label: 'Forma', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Mas ancho que alto (0)' },
        { value: '3', label: 'Mas alto que ancho (3)' } ], row: 'r1' },
      { name: 'margen', id: 'nct-tr-margen', type: 'select', label: 'Margen', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Liso o mal definido (0)' },
        { value: '2', label: 'Lobulado o irregular (2)' },
        { value: '3', label: 'Extension extratiroidea (3)' } ], row: 'r1' },
      { type: 'note', text: 'Los focos ecogenicos que siguen SUMAN entre si: marca todos los presentes. Los artefactos en cola de cometa grandes no puntuan (son signo de benignidad, tipico del coloide).' },
      { name: 'macrocalcio', id: 'nct-tr-macro', type: 'checkbox', label: 'Macrocalcificaciones (1)' },
      { name: 'calcioPeriferico', id: 'nct-tr-peri', type: 'checkbox', label: 'Calcificaciones perifericas en anillo (2)' },
      { name: 'puntiformes', id: 'nct-tr-punt', type: 'checkbox', label: 'Focos ecogenicos puntiformes o microcalcificaciones (3)' },
      { name: 'tamano', id: 'nct-tr-tam', type: 'number', step: '0.1', label: 'Diametro maximo del nodulo (cm)', placeholder: 'ej. 1.8' },
      { type: 'note', text: 'ANTES de aplicar el TI-RADS hay que tener una TSH: si esta SUPRIMIDA, el camino es la gammagrafia, y un nodulo caliente practicamente nunca es maligno y NO se punciona. El TI-RADS tampoco sustituye a la valoracion de las cadenas ganglionares cervicales: una adenopatia sospechosa cambia la conducta con independencia del nodulo. Y en un nodulo con crecimiento rapido, disfonia, fijacion o adenopatias duras, la sospecha clinica manda sobre la puntuacion.' }
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
      if (!c.paaf) conducta = 'no requiere puncion ni seguimiento especifico por la categoria';
      else if (v.tamano >= c.paaf) conducta = `PUNCION con aguja fina guiada por ecografia (umbral de ${c.paaf} cm para ${cat})`;
      else if (v.tamano >= c.seg) conducta = `seguimiento ecografico, sin puncion (el umbral de puncion en ${cat} es de ${c.paaf} cm)`;
      else conducta = `sin puncion ni seguimiento por la categoria (umbral de seguimiento en ${cat}: ${c.seg} cm)`;
      return { total, cat, etiqueta: c.txt, conducta, tamano: v.tamano, pComp, pEco, pForma, pMargen, pFocos, espongiforme };
    },
    format: r => {
      if (r.invalido) return 'Revisa el tamano del nodulo (en centimetros).';
      let s = `<strong>${r.total} puntos: ${r.cat} (${r.etiqueta}).</strong> Desglose: composicion ${r.pComp}, ecogenicidad ${r.pEco}, forma ${r.pForma}, margen ${r.pMargen}, focos ecogenicos ${r.pFocos}. Con un diametro de ${r.tamano} cm: <strong>${r.conducta}</strong>.`;
      if (r.espongiforme) s += ' El patron espongiforme puntua 0 y es practicamente sinonimo de benignidad.';
      if (r.cat === 'TR5') s += ' Seguimiento anual si no se punciona; TR4 a los 1 a 2 anos y TR3 a los 2 a 3 anos.';
      s += ' Recuerda: si la TSH esta suprimida, primero gammagrafia, porque un nodulo caliente no se punciona. Y valora siempre las cadenas ganglionares: una adenopatia sospechosa cambia la conducta al margen de la puntuacion.';
      return s;
    },
    fragment: r => r.invalido ? 'tamano no valido' : `${r.cat} (${r.total} puntos), ${r.tamano} cm`
  },
  {
    key: 'riesgo-recurrencia-ata', title: 'Riesgo de recurrencia de la ATA y objetivo de TSH', accent: '#6b4a2e',
    subtitle: 'Clasificacion del carcinoma diferenciado tras la cirugia, con conducta derivada',
    incompleteMsg: 'Responde la extension, la histologia, los ganglios y las metastasis.',
    fields: [
      { name: 'extension', id: 'nct-ata-ext', type: 'select', label: 'Extension y reseccion', options: [
        { value: '', label: 'Selecciona' },
        { value: 'intratiroideo', label: 'Intratiroideo, reseccion macroscopica completa' },
        { value: 'micro', label: 'Invasion MICROSCOPICA de partes blandas peritiroideas' },
        { value: 'macro', label: 'Invasion MACROSCOPICA de partes blandas peritiroideas' },
        { value: 'incompleta', label: 'Reseccion tumoral incompleta (resto macroscopico)' } ] },
      { name: 'histologia', id: 'nct-ata-hist', type: 'select', label: 'Histologia e invasion vascular', options: [
        { value: '', label: 'Selecciona' },
        { value: 'favorable', label: 'Papilar clasico o folicular, sin invasion vascular' },
        { value: 'vascMinima', label: 'Folicular con invasion vascular minima (menos de 4 focos)' },
        { value: 'agresiva', label: 'Histologia agresiva (celulas altas, hobnail, columnar) o invasion vascular' },
        { value: 'vascExtensa', label: 'Folicular con invasion vascular EXTENSA (4 focos o mas)' } ] },
      { name: 'ganglios', id: 'nct-ata-gg', type: 'select', label: 'Ganglios linfaticos', options: [
        { value: '', label: 'Selecciona' },
        { value: 'n0', label: 'Sin afectacion ganglionar (cN0 o pN0)' },
        { value: 'micro5', label: 'Hasta 5 micrometastasis ganglionares (menores de 0.2 cm)' },
        { value: 'clinico', label: 'Ganglios clinicamente afectados, o mas de 5, todos menores de 3 cm' },
        { value: 'grande', label: 'Algun ganglio metastasico de 3 cm o mas' } ] },
      { name: 'metastasis', id: 'nct-ata-mts', type: 'select', label: 'Metastasis a distancia y captacion', options: [
        { value: '', label: 'Selecciona' },
        { value: 'no', label: 'Sin metastasis a distancia' },
        { value: 'focosCuello', label: 'Focos captantes de yodo en el cuello en el primer rastreo' },
        { value: 'tgAlta', label: 'Tiroglobulina posquirurgica sugestiva de metastasis a distancia' },
        { value: 'si', label: 'Metastasis a distancia demostradas' } ] },
      { name: 'respuesta', id: 'nct-ata-resp', type: 'select', required: false, label: 'Opcional: respuesta al tratamiento en el seguimiento', options: [
        { value: '', label: 'Todavia no evaluable (recien operado)' },
        { value: 'excelente', label: 'Excelente: tiroglobulina indetectable e imagen negativa' },
        { value: 'indeterminada', label: 'Indeterminada: hallazgos inespecificos o tiroglobulina limite' },
        { value: 'bioquimica', label: 'Bioquimica incompleta: tiroglobulina elevada sin lesion visible' },
        { value: 'estructural', label: 'Estructural incompleta: enfermedad visible en imagen' } ] },
      { type: 'note', text: 'Esta clasificacion predice la RECURRENCIA y se aplica al carcinoma DIFERENCIADO (papilar, folicular y oncocitico). No sirve para el medular, que se sigue con calcitonina y antigeno carcinoembrionario, ni para el anaplasico, que es estadio IV por definicion. La estadificacion TNM es otra cosa: predice la MORTALIDAD y usa la edad de 55 anos como punto de corte. La respuesta al tratamiento reclasifica al paciente con el tiempo y ha desplazado en gran medida al riesgo inicial para decidir el objetivo de TSH y la intensidad del seguimiento.' }
    ],
    compute(v) {
      if (!v.extension || !v.histologia || !v.ganglios || !v.metastasis) return null;
      const motivosAlto = [], motivosInter = [];
      if (v.extension === 'macro') motivosAlto.push('invasion macroscopica de partes blandas peritiroideas');
      if (v.extension === 'incompleta') motivosAlto.push('reseccion tumoral incompleta');
      if (v.extension === 'micro') motivosInter.push('invasion microscopica de partes blandas peritiroideas');
      if (v.histologia === 'vascExtensa') motivosAlto.push('invasion vascular extensa en un carcinoma folicular');
      if (v.histologia === 'agresiva') motivosInter.push('histologia agresiva o invasion vascular');
      if (v.ganglios === 'grande') motivosAlto.push('ganglio metastasico de 3 cm o mas');
      if (v.ganglios === 'clinico') motivosInter.push('ganglios clinicamente afectados o mas de 5 afectados');
      if (v.metastasis === 'si') motivosAlto.push('metastasis a distancia');
      if (v.metastasis === 'tgAlta') motivosAlto.push('tiroglobulina posquirurgica sugestiva de metastasis a distancia');
      if (v.metastasis === 'focosCuello') motivosInter.push('focos captantes de yodo en el cuello en el primer rastreo');

      const riesgo = motivosAlto.length ? 'ALTO' : (motivosInter.length ? 'INTERMEDIO' : 'BAJO');
      const motivos = motivosAlto.length ? motivosAlto : motivosInter;

      let rai;
      if (riesgo === 'ALTO') rai = 'Yodo radiactivo INDICADO tras la tiroidectomia total.';
      else if (riesgo === 'INTERMEDIO') rai = 'Yodo radiactivo de indicacion SELECTIVA: se valora caso por caso segun la carga de enfermedad, la edad y la tiroglobulina posquirurgica.';
      else rai = 'Yodo radiactivo NO indicado de forma sistematica: en el riesgo bajo no mejora los resultados y se ha abandonado como practica rutinaria.';

      let tsh;
      const resp = v.respuesta || '';
      if (resp === 'estructural') tsh = 'TSH por debajo de 0.1 mUI/L (enfermedad estructural persistente).';
      else if (resp === 'bioquimica' || resp === 'indeterminada') tsh = 'TSH de 0.1 a 0.5 mUI/L.';
      else if (resp === 'excelente') tsh = 'TSH de 0.5 a 2.0 mUI/L: con respuesta excelente se puede relajar el objetivo aunque el riesgo inicial fuera intermedio o alto.';
      else if (riesgo === 'ALTO') tsh = 'TSH por debajo de 0.1 mUI/L mientras no se documente la respuesta.';
      else if (riesgo === 'INTERMEDIO') tsh = 'TSH de 0.1 a 0.5 mUI/L mientras no se documente la respuesta.';
      else tsh = 'TSH de 0.5 a 2.0 mUI/L.';

      return { riesgo, motivos, rai, tsh, resp, recurrencia: riesgo === 'ALTO' ? 'mas del 40%' : (riesgo === 'INTERMEDIO' ? 'alrededor del 20%' : 'alrededor del 5%') };
    },
    format: r => {
      let s = `<strong>Riesgo de recurrencia ${r.riesgo}</strong> segun la clasificacion de la ATA, con una probabilidad de recurrencia estructural de ${r.recurrencia}.`;
      if (r.motivos.length) s += ` Lo determina: ${r.motivos.join('; ')}.`;
      else s += ' Ningun criterio de riesgo intermedio ni alto presente.';
      s += ` <strong>Yodo radiactivo:</strong> ${r.rai} <strong>Objetivo de TSH:</strong> ${r.tsh}`;
      if (!r.resp) s += ' Reevalua a los 6 a 12 meses con tiroglobulina (siempre junto con anticuerpos antitiroglobulina) y ecografia cervical, y reclasifica por la RESPUESTA: es lo que gobierna el seguimiento a partir de ese momento.';
      if (r.resp === 'excelente') s += ' Con respuesta excelente se pueden espaciar los controles a intervalos anuales o mayores.';
      if (r.resp === 'estructural') s += ' Ante enfermedad estructural, valorar cirugia de rescate si es resecable; si es refractaria al yodo y progresa, inhibidores multicinasa (lenvatinib, sorafenib) o terapia dirigida segun la diana molecular.';
      s += ' Vigila el coste de la supresion mantenida de TSH sobre el corazon y el hueso.';
      return s;
    },
    fragment: r => `riesgo ATA ${r.riesgo}${r.resp ? ', respuesta ' + r.resp : ''}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
