// topics/metabolismo-oseo-mineral/calculators.js
// 2 herramientas:
// - calcio-corregido: corrige el calcio total por la albumina y clasifica la gravedad de la
//   hipercalcemia o de la hipocalcemia, con la conducta que se deriva de cada franja.
// - pth-calcio: cruza el calcio corregido con la PTH (y, si se introducen, el fosforo, la
//   vitamina D y la excrecion fraccional de calcio) y devuelve el cuadrante diagnostico.
//
// La idea que gobierna las dos: lo que importa no es si la PTH esta dentro del rango, sino si es
// APROPIADA para ese calcio. Una PTH normal con calcio alto es inapropiada y significa
// hiperparatiroidismo.
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

// Correccion clasica: 0.8 mg/dL por cada g/dL de albumina por debajo de 4.0.
const FACTOR_ALBUMINA = 0.8;
const ALBUMINA_REF = 4.0;

function gravedadHiper(ca) {
  if (ca > 14) return { nivel: 'grave', txt: 'hipercalcemia GRAVE' };
  if (ca >= 12) return { nivel: 'moderada', txt: 'hipercalcemia moderada' };
  if (ca > 10.5) return { nivel: 'leve', txt: 'hipercalcemia leve' };
  return null;
}
function gravedadHipo(ca) {
  if (ca < 7.0) return { nivel: 'grave', txt: 'hipocalcemia GRAVE' };
  if (ca < 7.8) return { nivel: 'moderada', txt: 'hipocalcemia moderada' };
  if (ca < 8.5) return { nivel: 'leve', txt: 'hipocalcemia leve' };
  return null;
}

export const calculators = [
  {
    key: 'calcio-corregido', title: 'Calcio corregido por albumina y gravedad', accent: '#2f7a6b',
    subtitle: 'El primer paso de todo el tema, y el que mas se olvida',
    incompleteMsg: 'Introduce el calcio total y la albumina.',
    fields: [
      { name: 'calcio', id: 'mom-cc-ca', type: 'number', step: '0.1', label: 'Calcio total medido (mg/dL)', placeholder: 'ej. 8.4', row: 'r1' },
      { name: 'albumina', id: 'mom-cc-alb', type: 'number', step: '0.1', label: 'Albumina (g/dL)', placeholder: 'ej. 2.6', row: 'r1' },
      { name: 'ionico', id: 'mom-cc-ion', type: 'number', step: '0.01', required: false, label: 'Opcional: calcio ionico medido (mmol/L)', placeholder: 'ej. 1.05' },
      { name: 'sintomas', id: 'mom-cc-sint', type: 'select', required: false, label: 'Opcional: sintomas atribuibles', options: [
        { value: '', label: 'No especificado' },
        { value: 'no', label: 'Asintomatico' },
        { value: 'leves', label: 'Sintomas leves (parestesias, astenia, estrenimiento)' },
        { value: 'graves', label: 'Sintomas graves (confusion, tetania, arritmia)' } ] },
      { type: 'note', text: 'Cerca de la mitad del calcio plasmatico circula unido a la albumina y no es biologicamente activo, de modo que una hipoalbuminemia hace parecer baja una calcemia normal. Correccion: calcio corregido = calcio medido + 0.8 x (4.0 menos albumina). En el paciente critico, ante alteraciones del pH o con proteinas muy alteradas, la formula es poco fiable y se prefiere medir el CALCIO IONICO (rango habitual de 1.16 a 1.32 mmol/L). Recuerda que la alcalosis aumenta la union a la albumina y baja el calcio ionico sin cambiar el total: eso es lo que produce la tetania de la hiperventilacion.' }
    ],
    compute(v) {
      if (v.calcio == null || v.albumina == null) return null;
      if (!(v.calcio > 2 && v.calcio < 25) || !(v.albumina > 0 && v.albumina < 8)) return { invalido: true };
      const corregido = v.calcio + FACTOR_ALBUMINA * (ALBUMINA_REF - v.albumina);
      const hiper = gravedadHiper(corregido);
      const hipo = gravedadHipo(corregido);
      let ionicoEstado = null;
      if (v.ionico != null) {
        ionicoEstado = v.ionico > 1.32 ? 'alto' : (v.ionico < 1.16 ? 'bajo' : 'normal');
      }
      return { corregido, medido: v.calcio, albumina: v.albumina, hiper, hipo, ionico: v.ionico, ionicoEstado, sintomas: v.sintomas || '' };
    },
    format: r => {
      if (r.invalido) return 'Revisa el calcio (mg/dL) y la albumina (g/dL).';
      let s = `<strong>Calcio corregido: ${r.corregido.toFixed(2)} mg/dL</strong> (medido ${r.medido} con albumina ${r.albumina}). `;
      if (r.hiper) {
        s += `Corresponde a <strong>${r.hiper.txt}</strong>. `;
        if (r.hiper.nivel === 'grave') s += 'Es una URGENCIA: hidratacion con salino isotonico como primera medida, calcitonina como puente por su efecto en horas, bisfosfonato intravenoso pronto pese a que tarda 2 a 4 dias, y denosumab si hay insuficiencia renal. Retirar tiazidas, litio, calcio y vitamina D, y movilizar al paciente. Diureticos de asa SOLO si aparece sobrecarga de volumen.';
        else if (r.hiper.nivel === 'moderada') s += 'La conducta depende sobre todo de la VELOCIDAD de instauracion y de los sintomas: una hipercalcemia de instauracion rapida a este nivel se trata como grave, y una cronica y asintomatica puede estudiarse de forma ambulatoria.';
        else s += 'Habitualmente asintomatica y de manejo ambulatorio. Lo prioritario es el diagnostico etiologico: medir PTH.';
        s += ' El siguiente paso diagnostico es medir la PTH y, si es alta o normal, la calciuria.';
      } else if (r.hipo) {
        s += `Corresponde a <strong>${r.hipo.txt}</strong>. `;
        if (r.hipo.nivel === 'grave') s += 'Riesgo de tetania, laringoespasmo, convulsiones y QT largo: gluconato calcico intravenoso diluido y en perfusion, con monitorizacion electrocardiografica.';
        else s += 'Tratamiento con calcio oral y, si hay hipoparatiroidismo, calcitriol.';
        s += ' <strong>Mide siempre el MAGNESIO</strong>: su deficit bloquea la secrecion y la accion de la PTH y hace la hipocalcemia refractaria. Y mide la PTH: baja o inapropiadamente normal indica hipoparatiroidismo; alta es la respuesta correcta a un problema de fuera.';
      } else {
        s += 'Esta dentro del rango normal (8.5 a 10.5 mg/dL).';
        if (r.medido < 8.5) s += ' Ojo: el calcio MEDIDO estaba bajo y la correccion por hipoalbuminemia lo normaliza. Es la situacion mas frecuente en el paciente hospitalizado y no requiere tratamiento.';
      }
      if (r.ionicoEstado) s += ` Calcio ionico de ${r.ionico} mmol/L: <strong>${r.ionicoEstado}</strong> (rango habitual 1.16 a 1.32). Cuando discrepa de la formula, manda el ionico.`;
      if (r.sintomas === 'graves') s += ' <strong>Con sintomas graves se trata con independencia de la cifra</strong>: la clinica pesa mas que el numero.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `calcio corregido ${r.corregido.toFixed(2)} mg/dL${r.hiper ? ' (' + r.hiper.txt + ')' : (r.hipo ? ' (' + r.hipo.txt + ')' : '')}`
  },
  {
    key: 'pth-calcio', title: 'Mapa de PTH frente a calcio', accent: '#8a6a1f',
    subtitle: 'Los cuatro cuadrantes que resuelven casi todo el diagnostico',
    incompleteMsg: 'Introduce el calcio corregido y la PTH.',
    fields: [
      { name: 'calcio', id: 'mom-pc-ca', type: 'number', step: '0.1', label: 'Calcio CORREGIDO (mg/dL)', placeholder: 'ej. 11.4', row: 'r1' },
      { name: 'pth', id: 'mom-pc-pth', type: 'number', step: '1', label: 'PTH intacta (pg/mL)', placeholder: 'ej. 92', row: 'r1' },
      { name: 'fosforo', id: 'mom-pc-p', type: 'number', step: '0.1', required: false, label: 'Opcional: fosforo (mg/dL)', placeholder: 'ej. 2.3', row: 'r2' },
      { name: 'vitd', id: 'mom-pc-vitd', type: 'number', step: '1', required: false, label: 'Opcional: 25-hidroxivitamina D (ng/mL)', placeholder: 'ej. 18', row: 'r2' },
      { name: 'feca', id: 'mom-pc-feca', type: 'number', step: '0.001', required: false, label: 'Opcional: excrecion fraccional de calcio', placeholder: 'ej. 0.008', row: 'r3' },
      { name: 'magnesio', id: 'mom-pc-mg', type: 'number', step: '0.1', required: false, label: 'Opcional: magnesio (mg/dL)', placeholder: 'ej. 1.4', row: 'r3' },
      { type: 'note', text: 'Rangos usados: calcio de 8.5 a 10.5 mg/dL, PTH de 15 a 65 pg/mL, fosforo de 2.5 a 4.5 mg/dL, magnesio de 1.7 a 2.4 mg/dL. DEPENDEN DEL LABORATORIO. La excrecion fraccional de calcio se calcula con calcio y creatinina en suero y en orina: por debajo de 0.01 sugiere hipercalcemia hipocalciurica familiar, que imita al hiperparatiroidismo primario y NO se opera; por encima de 0.02 apoya hiperparatiroidismo primario. Corrige el deficit de vitamina D antes de interpretar una PTH alta.' }
    ],
    compute(v) {
      if (v.calcio == null || v.pth == null) return null;
      if (!(v.calcio > 2 && v.calcio < 25) || !(v.pth >= 0 && v.pth < 5000)) return { invalido: true };
      const caAlto = v.calcio > 10.5, caBajo = v.calcio < 8.5;
      const pthAlta = v.pth > 65, pthBaja = v.pth < 15;
      const pthNormal = !pthAlta && !pthBaja;
      const pAlto = v.fosforo != null && v.fosforo > 4.5;
      const pBajo = v.fosforo != null && v.fosforo < 2.5;
      const vitdBaja = v.vitd != null && v.vitd < 20;
      const mgBajo = v.magnesio != null && v.magnesio < 1.7;
      const fecaBaja = v.feca != null && v.feca < 0.01;

      let cuadrante, diagnostico, siguiente;
      if (caAlto && (pthAlta || pthNormal)) {
        cuadrante = 'Calcio ALTO con PTH ' + (pthAlta ? 'elevada' : 'inapropiadamente normal');
        diagnostico = fecaBaja
          ? 'HIPERCALCEMIA HIPOCALCIURICA FAMILIAR como primera posibilidad, por la excrecion fraccional de calcio baja'
          : 'HIPERPARATIROIDISMO PRIMARIO (o terciario si hay enfermedad renal cronica de larga evolucion)';
        siguiente = fecaBaja
          ? 'NO operar: la paratiroidectomia no corrige esta entidad, que es benigna y no requiere tratamiento. Confirmar con estudio genetico del receptor sensor de calcio y con antecedente familiar de hipercalcemia asintomatica.'
          : 'Medir calciuria de 24 horas y excrecion fraccional de calcio para excluir la hipercalcemia hipocalciurica familiar; excluir litio y tiazidas; corregir el deficit de vitamina D; y buscar criterios quirurgicos (calcio mas de 1 mg/dL sobre el limite, filtrado menor de 60, litiasis o nefrocalcinosis, puntuacion T de -2.5 o menor o fractura vertebral, edad menor de 50 anos).';
      } else if (caAlto && pthBaja) {
        cuadrante = 'Calcio ALTO con PTH suprimida';
        diagnostico = 'HIPERCALCEMIA INDEPENDIENTE DE LA PTH, y la causa mas frecuente en el hospital es la MALIGNIDAD';
        siguiente = 'Medir PTHrP (hipercalcemia humoral maligna), proteinograma con inmunofijacion y cadenas ligeras (mieloma), y calcitriol (linfoma, granulomatosis). Considerar tambien tirotoxicosis, inmovilizacion, intoxicacion por vitamina D o A y sindrome de leche y alcalinos. Tratamiento: hidratacion con salino isotonico, y bisfosfonato o denosumab.';
      } else if (caBajo && (pthBaja || pthNormal)) {
        cuadrante = 'Calcio BAJO con PTH ' + (pthBaja ? 'baja' : 'inapropiadamente normal');
        diagnostico = mgBajo
          ? 'HIPOMAGNESEMIA como causa del hipoparatiroidismo funcional, que es reversible'
          : 'HIPOPARATIROIDISMO, cuya causa mas frecuente con diferencia es la cirugia cervical';
        siguiente = mgBajo
          ? 'CORREGIR EL MAGNESIO primero: mientras siga bajo, el calcio no responde por mucho calcio y calcitriol que se administren. Revisar diureticos, inhibidores de la bomba de protones, alcohol y perdidas digestivas.'
          : 'Medir MAGNESIO siempre (su deficit produce un cuadro identico y reversible) y fosforo, que estara alto. Tratamiento cronico con calcio oral y CALCITRIOL, con objetivo de calcio en el limite BAJO del rango para no provocar hipercalciuria y nefrocalcinosis.';
      } else if (caBajo && pthAlta) {
        cuadrante = 'Calcio BAJO con PTH elevada';
        diagnostico = 'La paratiroides responde de forma APROPIADA: el problema esta fuera de ella';
        siguiente = vitdBaja
          ? 'El deficit de vitamina D encontrado explica el cuadro: reponer y reevaluar la PTH en unos meses.'
          : 'Buscar deficit de vitamina D, enfermedad renal cronica, malabsorcion (celiaquia, cirugia bariatrica, insuficiencia pancreatica), pancreatitis aguda, hiperfosfatemia aguda y pseudohipoparatiroidismo (resistencia a la PTH).';
      } else if (!caAlto && !caBajo && pthAlta) {
        cuadrante = 'Calcio NORMAL con PTH elevada';
        diagnostico = 'HIPERPARATIROIDISMO SECUNDARIO en primer lugar; el primario normocalcemico solo se acepta tras descartar todas las causas de secundario';
        siguiente = 'Medir 25-hidroxivitamina D y filtrado glomerular, y descartar malabsorcion, hipercalciuria idiopatica y farmacos. Corregir el deficit de vitamina D y repetir la PTH en unos meses: si persiste alta con calcio normal, considerar hiperparatiroidismo primario normocalcemico.';
      } else {
        cuadrante = 'Calcio y PTH dentro del rango';
        diagnostico = 'Sin trastorno del eje calcio-PTH evidente';
        siguiente = 'Si la sospecha clinica persiste, repetir con calcio ionico y revisar el fosforo, el magnesio, la fosfatasa alcalina y la vitamina D. Una fosfatasa alcalina alta con calcio, fosforo y PTH normales orienta a enfermedad de Paget.';
      }
      return { cuadrante, diagnostico, siguiente, calcio: v.calcio, pth: v.pth, fosforo: v.fosforo, pAlto, pBajo, vitdBaja, mgBajo, fecaBaja, feca: v.feca, magnesio: v.magnesio, vitd: v.vitd };
    },
    format: r => {
      if (r.invalido) return 'Revisa el calcio corregido (mg/dL) y la PTH (pg/mL).';
      let s = `<strong>${r.cuadrante}</strong> (calcio ${r.calcio} mg/dL, PTH ${r.pth} pg/mL). <strong>${r.diagnostico}.</strong> ${r.siguiente}`;
      if (r.fosforo != null) {
        s += ` Fosforo de ${r.fosforo} mg/dL: `;
        if (r.pBajo) s += 'BAJO, lo que apoya hiperparatiroidismo primario (la PTH fosfaturica) o, si es un posoperatorio de paratiroidectomia, sindrome de hueso hambriento.';
        else if (r.pAlto) s += 'ALTO, lo que apoya hipoparatiroidismo o enfermedad renal cronica, y descarta el hueso hambriento en un posoperatorio.';
        else s += 'dentro del rango, de modo que no desempata.';
      }
      if (r.vitdBaja) s += ` La 25-hidroxivitamina D de ${r.vitd} ng/mL es baja: corrigela ANTES de interpretar la PTH o de plantear cirugia paratiroidea.`;
      if (r.mgBajo) s += ` El magnesio de ${r.magnesio} mg/dL es bajo: corrigelo primero, porque bloquea la secrecion y la accion de la PTH.`;
      if (r.fecaBaja) s += ` La excrecion fraccional de calcio de ${r.feca} esta por debajo de 0.01: es el hallazgo que separa la hipercalcemia hipocalciurica familiar del hiperparatiroidismo primario, y evita una paratiroidectomia inutil.`;
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : r.cuadrante
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
