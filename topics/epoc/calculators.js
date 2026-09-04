// topics/epoc/calculators.js
// 4 herramientas:
// - gold-abe: grado espirometrico GOLD 1 a 4 y grupo A, B o E del informe GOLD 2026, con el
//   tratamiento inicial que se deriva de cada grupo y el papel de los eosinofilos.
// - bode: indice BODE (Celli 2004), que predice mortalidad mejor que el FEV1 aislado.
// - anthonisen: sintomas cardinales de la exacerbacion y decision de antibiotico.
// - decaf: mortalidad intrahospitalaria de la exacerbacion ingresada (Steer 2012).
//
// Ninguna sustituye al juicio clinico: GOLD ABE decide el tratamiento inicial pero el
// seguimiento se guia por el rasgo dominante (disnea o exacerbaciones), y DECAF estratifica el
// riesgo sin decidir por si sola el nivel de cuidados.
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

function gradoGold(fev1) {
  if (fev1 >= 80) return { n: 1, txt: 'GOLD 1 (leve)' };
  if (fev1 >= 50) return { n: 2, txt: 'GOLD 2 (moderada)' };
  if (fev1 >= 30) return { n: 3, txt: 'GOLD 3 (grave)' };
  return { n: 4, txt: 'GOLD 4 (muy grave)' };
}

function puntosFev1Bode(f) {
  if (f >= 65) return 0;
  if (f >= 50) return 1;
  if (f >= 36) return 2;
  return 3;
}
function puntosMarchaBode(m) {
  if (m >= 350) return 0;
  if (m >= 250) return 1;
  if (m >= 150) return 2;
  return 3;
}
function puntosDisneaBode(m) {
  if (m <= 1) return 0;
  return m - 1;
}

export const calculators = [
  {
    key: 'gold-abe', title: 'Grado y grupo GOLD (EPOC estable)', accent: '#2f5d6e',
    subtitle: 'Grado espirometrico 1 a 4 y grupo A, B o E con el tratamiento inicial',
    incompleteMsg: 'Introduce el cociente FEV1/FVC, el FEV1 en porcentaje del predicho, las exacerbaciones del ultimo a&#241;o y la disnea mMRC.',
    fields: [
      { name: 'ratio', id: 'epoc-g-ratio', type: 'number', step: '0.01', label: 'Cociente FEV1/FVC POSBRONCODILATADOR', placeholder: 'ej. 0.58', row: 'r1' },
      { name: 'fev1', id: 'epoc-g-fev1', type: 'number', step: '1', label: 'FEV1 (% del predicho, posbroncodilatador)', placeholder: 'ej. 45', row: 'r1' },
      { name: 'mmrc', id: 'epoc-g-mmrc', type: 'select', label: 'Disnea (escala mMRC)', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: '0: solo con ejercicio intenso' },
        { value: '1', label: '1: al andar deprisa en llano o subir una cuesta ligera' },
        { value: '2', label: '2: anda mas despacio que otros de su edad o tiene que parar' },
        { value: '3', label: '3: para a los 100 metros o a los pocos minutos en llano' },
        { value: '4', label: '4: no sale de casa o se ahoga al vestirse' } ] },
      { name: 'cat', id: 'epoc-g-cat', type: 'number', step: '1', required: false, label: 'CAT (0 a 40, opcional)', placeholder: 'ej. 18', row: 'r2' },
      { name: 'eos', id: 'epoc-g-eos', type: 'number', step: '10', required: false, label: 'Eosinofilos en sangre (celulas/microlitro, opcional)', placeholder: 'ej. 340', row: 'r2' },
      { name: 'exMod', id: 'epoc-g-exmod', type: 'number', step: '1', label: 'Exacerbaciones moderadas en el ultimo a&#241;o (tratadas sin ingreso)', placeholder: 'ej. 1', row: 'r3' },
      { name: 'exIng', id: 'epoc-g-exing', type: 'number', step: '1', label: 'Exacerbaciones que requirieron INGRESO en el ultimo a&#241;o', placeholder: 'ej. 0', row: 'r3' },
      { type: 'note', text: 'El grado GOLD 1 a 4 y el grupo A, B o E son ejes INDEPENDIENTES: el grado mide la obstruccion y sirve para el pronostico, el grupo mide sintomas y exacerbaciones y decide el tratamiento inicial. Si se rellenan mMRC y CAT, basta con que uno de los dos supere su umbral (mMRC 2 o mas, CAT 10 o mas) para considerar sintomatico al paciente. Este mapa vale para el tratamiento INICIAL: en el seguimiento se escala por el rasgo dominante, disnea o exacerbaciones, y no se recalcula el grupo.' }
    ],
    compute(v) {
      if (v.ratio == null || v.fev1 == null || v.exMod == null || v.exIng == null) return null;
      if (v.mmrc === '' || v.mmrc == null) return null;
      if (!(v.ratio > 0 && v.ratio < 1.2) || !(v.fev1 > 0 && v.fev1 <= 150)) return { invalido: true };
      if (v.exMod < 0 || v.exIng < 0) return { invalido: true };
      if (v.ratio >= 0.70) return { noObstruccion: true, ratio: v.ratio };
      const grado = gradoGold(v.fev1);
      const mmrc = +v.mmrc;
      const catDado = v.cat != null && v.cat >= 0 && v.cat <= 40;
      const sintomatico = mmrc >= 2 || (catDado && v.cat >= 10);
      const grupo = (v.exIng >= 1 || v.exMod >= 2) ? 'E' : (sintomatico ? 'B' : 'A');
      const eosDado = v.eos != null && v.eos >= 0;
      return { grado: grado.txt, gradoN: grado.n, grupo, sintomatico, mmrc, cat: catDado ? v.cat : null,
        eos: eosDado ? v.eos : null, exMod: v.exMod, exIng: v.exIng, fev1: v.fev1, ratio: v.ratio };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: el cociente FEV1/FVC se expresa como decimal (por ejemplo 0.58), el FEV1 en porcentaje del predicho y las exacerbaciones como numeros no negativos.';
      if (r.noObstruccion) return `<strong>Cociente FEV1/FVC de ${r.ratio.toFixed(2)}: NO hay obstruccion.</strong> Con un cociente posbroncodilatador de 0.70 o mas <strong>no se puede diagnosticar EPOC</strong>, por muchos sintomas y por mucho tabaco que haya. Buscar otra causa de la disnea: asma, insuficiencia cardiaca, enfermedad intersticial, obesidad, anemia o desacondicionamiento. Si el valor esta muy cerca de 0.70, repetir la espirometria en otra ocasion y comparar con el limite inferior de la normalidad para la edad.`;
      let s = `<strong>${r.grado} con FEV1 del ${r.fev1}% del predicho. Grupo GOLD ${r.grupo}.</strong> `;
      s += `Sintomas: mMRC ${r.mmrc}${r.cat !== null ? ` y CAT ${r.cat}` : ''}, paciente ${r.sintomatico ? 'SINTOMATICO' : 'poco sintomatico'}. Exacerbaciones del ultimo a&#241;o: ${r.exMod} moderadas y ${r.exIng} con ingreso. `;
      if (r.grupo === 'E') {
        s += '<strong>Tratamiento inicial: LABA + LAMA.</strong> ';
        if (r.eos !== null && r.eos >= 300) s += `Con <strong>${r.eos} eosinofilos por microlitro (300 o mas)</strong> se recomienda TRIPLE TERAPIA de inicio, LABA + LAMA + corticoide inhalado. `;
        else if (r.eos !== null && r.eos < 100) s += `Con <strong>${r.eos} eosinofilos por microlitro (menos de 100)</strong> el corticoide inhalado aporta poco y a&#241;ade riesgo de neumonia: mantener la doble broncodilatacion. `;
        else if (r.eos !== null) s += `Con ${r.eos} eosinofilos por microlitro (zona intermedia) el corticoide inhalado se decide caso a caso: apoya a&#241;adirlo el ingreso previo por exacerbacion, dos o mas exacerbaciones moderadas al a&#241;o o el antecedente de asma. `;
        else s += 'Falta el recuento de eosinofilos, que es el dato que decide si se a&#241;ade corticoide inhalado desde el inicio (300 o mas por microlitro). ';
        s += 'El grupo E ignora los sintomas a proposito: haber exacerbado pesa mas que la disnea.';
      } else if (r.grupo === 'B') {
        s += '<strong>Tratamiento inicial: LABA + LAMA.</strong> La doble broncodilatacion es superior a cualquier monoterapia en sintomas y funcion pulmonar. El corticoide inhalado <strong>no esta indicado de entrada</strong> en el grupo B.';
      } else {
        s += '<strong>Tratamiento inicial: un broncodilatador</strong>, de accion corta o larga segun la frecuencia del sintoma. Es el unico grupo en el que la monoterapia sigue siendo aceptable.';
      }
      s += ' <strong>En todos los grupos</strong>: abandono del tabaco (lo unico que frena la caida del FEV1), vacunacion, rehabilitacion respiratoria (especialmente en las 4 semanas siguientes a un ingreso), actividad fisica y revision de la tecnica del inhalador en cada consulta.';
      if (r.gradoN >= 3) s += ' Con obstruccion grave o muy grave, valorar gasometria, DLCO y cribado de hipoxemia para oxigenoterapia domiciliaria.';
      s += ' Solicitar alfa-1-antitripsina al menos una vez en la vida.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : r.noObstruccion ? 'sin obstruccion: no es EPOC' : `${r.grado}, grupo ${r.grupo}`
  },
  {
    key: 'bode', title: 'Indice BODE', accent: '#3d5a73',
    subtitle: 'Pronostico multidimensional de la EPOC: masa corporal, obstruccion, disnea y ejercicio',
    incompleteMsg: 'Introduce peso, talla, FEV1 en porcentaje del predicho, distancia de la marcha de 6 minutos y grado de disnea.',
    fields: [
      { name: 'peso', id: 'epoc-b-peso', type: 'number', step: '0.1', label: 'Peso (kg)', placeholder: 'ej. 62', row: 'r1' },
      { name: 'talla', id: 'epoc-b-talla', type: 'number', step: '1', label: 'Talla (cm)', placeholder: 'ej. 170', row: 'r1' },
      { name: 'fev1', id: 'epoc-b-fev1', type: 'number', step: '1', label: 'FEV1 (% del predicho, posbroncodilatador)', placeholder: 'ej. 42', row: 'r2' },
      { name: 'marcha', id: 'epoc-b-marcha', type: 'number', step: '1', label: 'Marcha de 6 minutos (metros)', placeholder: 'ej. 280', row: 'r2' },
      { name: 'mmrc', id: 'epoc-b-mmrc', type: 'select', label: 'Disnea (escala mMRC)', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: '0: solo con ejercicio intenso' },
        { value: '1', label: '1: al andar deprisa en llano o subir una cuesta ligera' },
        { value: '2', label: '2: anda mas despacio que otros de su edad o tiene que parar' },
        { value: '3', label: '3: para a los 100 metros o a los pocos minutos en llano' },
        { value: '4', label: '4: no sale de casa o se ahoga al vestirse' } ] },
      { type: 'note', text: 'Puntuacion de cada componente. Indice de masa corporal: mayor de 21 son 0 puntos, 21 o menos 1 punto (la unica variable que se puntua al reves de lo intuitivo: adelgazar empeora). FEV1: 65% o mas 0, de 50 a 64% 1, de 36 a 49% 2, 35% o menos 3. Disnea mMRC: 0 a 1 son 0, mMRC 2 es 1, mMRC 3 es 2, mMRC 4 es 3. Marcha de 6 minutos: 350 metros o mas 0, de 250 a 349 1, de 150 a 249 2, 149 o menos 3.' }
    ],
    compute(v) {
      if (v.peso == null || v.talla == null || v.fev1 == null || v.marcha == null || v.mmrc === '' || v.mmrc == null) return null;
      if (!(v.peso > 20 && v.peso < 300) || !(v.talla > 100 && v.talla < 230)) return { invalido: true };
      if (!(v.fev1 > 0 && v.fev1 <= 150) || !(v.marcha >= 0 && v.marcha <= 1000)) return { invalido: true };
      const imc = v.peso / Math.pow(v.talla / 100, 2);
      const pImc = imc > 21 ? 0 : 1;
      const pFev1 = puntosFev1Bode(v.fev1);
      const pDisnea = puntosDisneaBode(+v.mmrc);
      const pMarcha = puntosMarchaBode(v.marcha);
      const total = pImc + pFev1 + pDisnea + pMarcha;
      const cuartil = total <= 2 ? 1 : total <= 4 ? 2 : total <= 6 ? 3 : 4;
      const superv = [80, 67, 57, 18][cuartil - 1];
      return { total, cuartil, superv, imc, pImc, pFev1, pDisnea, pMarcha, fev1: v.fev1, marcha: v.marcha };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: peso de 20 a 300 kg, talla de 100 a 230 cm, FEV1 en porcentaje del predicho y distancia de 0 a 1000 metros.';
      let s = `<strong>BODE ${r.total} de 10 puntos (cuartil ${r.cuartil}).</strong> Supervivencia aproximada a 4 a&#241;os del <strong>${r.superv}%</strong> en la cohorte original. Desglose: indice de masa corporal ${r.imc.toFixed(1)} (${r.pImc} punto${r.pImc === 1 ? '' : 's'}), FEV1 del ${r.fev1}% (${r.pFev1}), disnea (${r.pDisnea}), marcha de ${r.marcha} metros (${r.pMarcha}). `;
      if (r.total >= 7) s += '<strong>Cuartil de maximo riesgo.</strong> Es uno de los criterios para remitir a valoracion de trasplante pulmonar, junto con FEV1 o DLCO por debajo del 20%, hipercapnia o hipertension pulmonar progresivas. Conviene ademas plantear la conversacion sobre objetivos de cuidado y techo terapeutico antes de la proxima crisis.';
      else if (r.total >= 5) s += 'Riesgo elevado. Priorizar rehabilitacion respiratoria, revisar la indicacion de oxigenoterapia con gasometria en situacion estable y optimizar el tratamiento de fondo y las comorbilidades.';
      else s += 'Riesgo bajo o intermedio. El margen de mejora esta sobre todo en el abandono del tabaco, la rehabilitacion y el estado nutricional: el peso y la distancia recorrida son los dos componentes modificables del indice.';
      if (r.pImc === 1) s += ' <strong>El indice de masa corporal puntua</strong>: la perdida de masa magra empeora el pronostico de forma independiente del FEV1 y justifica valoracion nutricional y entrenamiento de fuerza.';
      if (r.pMarcha >= 2) s += ' La distancia recorrida es el componente que mas mejora con la rehabilitacion respiratoria.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `BODE ${r.total} (cuartil ${r.cuartil})`
  },
  {
    key: 'anthonisen', title: 'Criterios de Anthonisen y decision de antibiotico', accent: '#8a6a1f',
    subtitle: 'Sintomas cardinales de la exacerbacion y necesidad de antibiotico',
    incompleteMsg: 'Marca los sintomas cardinales presentes.',
    fields: [
      { name: 'disnea', id: 'epoc-a-disnea', type: 'checkbox', label: 'Aumento de la DISNEA respecto a su situacion basal' },
      { name: 'volumen', id: 'epoc-a-vol', type: 'checkbox', label: 'Aumento del VOLUMEN del esputo' },
      { name: 'purulencia', id: 'epoc-a-pur', type: 'checkbox', label: 'Aumento de la PURULENCIA del esputo (cambio de color)' },
      { type: 'note', text: 'Los tres anteriores son los sintomas cardinales. Los siguientes son criterios menores, que solo cuentan para definir el tipo III.' },
      { name: 'ivrs', id: 'epoc-a-ivrs', type: 'checkbox', label: 'Infeccion respiratoria alta en los 5 dias previos' },
      { name: 'fiebre', id: 'epoc-a-fiebre', type: 'checkbox', label: 'Fiebre sin otra causa aparente' },
      { name: 'sibilancias', id: 'epoc-a-sib', type: 'checkbox', label: 'Aumento de las sibilancias o de la tos' },
      { name: 'taqui', id: 'epoc-a-taq', type: 'checkbox', label: 'Ascenso del 20% o mas de la frecuencia cardiaca o respiratoria basal' },
      { type: 'note', text: 'Marca tambien si el paciente va a necesitar soporte ventilatorio: es indicacion de antibiotico por si sola, con independencia del esputo.' },
      { name: 'ventilacion', id: 'epoc-a-vm', type: 'checkbox', label: 'Requiere ventilacion mecanica, invasiva o no invasiva' },
      { name: 'pseudomonas', id: 'epoc-a-pseudo', type: 'checkbox', label: 'Riesgo de Pseudomonas: bronquiectasias, FEV1 muy bajo, ingresos o antibioticos recientes, o aislamiento previo' },
      { type: 'note', text: 'La lectura moderna de estos criterios es mas estricta que la original de 1987: el dato que mejor identifica la carga bacteriana es la PURULENCIA del esputo. Se trata con antibiotico la exacerbacion con purulencia acompa&#241;ada de aumento de disnea o de volumen, y la que requiere ventilacion. Duracion habitual de 5 a 7 dias. El corticoide sistemico (prednisona 40 mg durante 5 dias) es una decision INDEPENDIENTE de esta: se pauta en practicamente toda exacerbacion que llega al hospital, haya o no antibiotico.' }
    ],
    compute(v) {
      const cardinales = (v.disnea ? 1 : 0) + (v.volumen ? 1 : 0) + (v.purulencia ? 1 : 0);
      const menores = (v.ivrs ? 1 : 0) + (v.fiebre ? 1 : 0) + (v.sibilancias ? 1 : 0) + (v.taqui ? 1 : 0);
      if (cardinales === 0 && menores === 0 && !v.ventilacion) return null;
      const tipo = cardinales === 3 ? 'I' : cardinales === 2 ? 'II' : (cardinales === 1 && menores >= 1) ? 'III' : null;
      const antibiotico = !!v.ventilacion || (!!v.purulencia && (!!v.disnea || !!v.volumen));
      return { cardinales, menores, tipo, antibiotico, purulencia: !!v.purulencia,
        ventilacion: !!v.ventilacion, pseudomonas: !!v.pseudomonas };
    },
    format: r => {
      let s = `<strong>${r.cardinales} sintoma${r.cardinales === 1 ? '' : 's'} cardinal${r.cardinales === 1 ? '' : 'es'} y ${r.menores} criterio${r.menores === 1 ? '' : 's'} menor${r.menores === 1 ? '' : 'es'}. `;
      s += r.tipo ? `Exacerbacion tipo ${r.tipo} de Anthonisen.</strong> ` : 'No cumple ninguno de los tres tipos de Anthonisen.</strong> ';
      if (r.antibiotico) {
        s += '<strong style="color:#8c3a34;">Antibiotico indicado.</strong> ';
        s += r.ventilacion
          ? 'La necesidad de ventilacion mecanica, invasiva o no invasiva, es indicacion de antibiotico por si sola. '
          : 'Hay purulencia del esputo junto con aumento de la disnea o del volumen, que es la combinacion que mejor identifica el origen bacteriano. ';
        s += r.pseudomonas
          ? 'Con factores de riesgo de <strong>Pseudomonas aeruginosa</strong>, cubrirla: piperacilina-tazobactam, cefepima, ceftazidima o meropenem por via intravenosa, o ciprofloxacino oral si el estado del paciente lo permite, y enviar cultivo de esputo antes de la primera dosis. '
          : 'Sin factores de riesgo de Pseudomonas: amoxicilina-clavulanico, un macrolido o una tetraciclina, ajustado al patron local de resistencias. ';
        s += 'Duracion de 5 a 7 dias.';
      } else {
        s += '<strong style="color:#3f6b52;">Antibiotico NO indicado por ahora.</strong> Sin purulencia del esputo y sin necesidad de ventilacion, el beneficio del antibiotico no compensa el riesgo de efectos adversos y de resistencias. Tratar con broncodilatador de accion corta y corticoide sistemico, y reevaluar en 24 a 48 horas: si aparece purulencia o el paciente empeora, la conducta cambia.';
      }
      s += ' <strong>Independientemente del antibiotico</strong>: prednisona 40 mg al dia durante 5 dias sin pauta descendente, oxigeno con objetivo de saturacion del 88 al 92%, radiografia y electrocardiograma, y ventilacion no invasiva si el pH es 7.35 o menor con PaCO2 mayor de 45 mmHg. Descartar de forma activa neumonia, insuficiencia cardiaca, embolia pulmonar y neumotorax, que imitan la exacerbacion y a menudo coexisten con ella.';
      return s;
    },
    fragment: r => `${r.tipo ? `Anthonisen tipo ${r.tipo}` : `${r.cardinales} sintomas cardinales`}, antibiotico ${r.antibiotico ? 'indicado' : 'no indicado'}`
  },
  {
    key: 'decaf', title: 'Escala DECAF (exacerbacion ingresada)', accent: '#8c3a34',
    subtitle: 'Mortalidad intrahospitalaria de la exacerbacion de EPOC que ingresa',
    incompleteMsg: 'Selecciona el grado de disnea y marca los factores presentes.',
    fields: [
      { name: 'disnea', id: 'epoc-d-disnea', type: 'select', label: 'Disnea (escala eMRCD extendida)', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'eMRCD 1 a 4: sale de casa (0)' },
        { value: '1', label: 'eMRCD 5a: no sale de casa, pero se lava y se viste solo (1)' },
        { value: '2', label: 'eMRCD 5b: no sale de casa y NO puede lavarse ni vestirse solo (2)' } ] },
      { name: 'eosinopenia', id: 'epoc-d-eos', type: 'checkbox', label: 'Eosinopenia: eosinofilos menores de 0.05 x10^9/L (1)' },
      { name: 'consolidacion', id: 'epoc-d-cons', type: 'checkbox', label: 'Consolidacion en la radiografia de torax (1)' },
      { name: 'acidemia', id: 'epoc-d-acid', type: 'checkbox', label: 'Acidemia: pH arterial menor de 7.30 (1)' },
      { name: 'fa', id: 'epoc-d-fa', type: 'checkbox', label: 'Fibrilacion auricular en el electrocardiograma o en la historia (1)' },
      { type: 'note', text: 'La escala se calcula con los datos del INGRESO, antes de que el tratamiento modifique el pH y el recuento de eosinofilos. La disnea que se punta es la BASAL del paciente en situacion estable, no la del episodio agudo: por eso hay que preguntar por su vida habitual, no mirarlo en la camilla. La eosinopenia refleja la respuesta de estres y se asocia de forma consistente a peor evolucion; la eosinofilia, al contrario, predice buena respuesta al corticoide.' }
    ],
    compute(v) {
      if (v.disnea === '' || v.disnea == null) return null;
      const pD = +v.disnea;
      const total = pD + (v.eosinopenia ? 1 : 0) + (v.consolidacion ? 1 : 0) + (v.acidemia ? 1 : 0) + (v.fa ? 1 : 0);
      const riesgo = total >= 3 ? 'alto' : total === 2 ? 'intermedio' : 'bajo';
      const mortalidad = ['0.7 a 1.5%', '0.7 a 1.5%', 'en torno al 5%', 'del 24 al 45%'][Math.min(total, 3)];
      return { total, riesgo, mortalidad, pD, acidemia: !!v.acidemia, consolidacion: !!v.consolidacion };
    },
    format: r => {
      let s = `<strong>DECAF ${r.total} de 6 puntos: riesgo ${r.riesgo}.</strong> Mortalidad intrahospitalaria esperada <strong>${r.mortalidad}</strong>. `;
      if (r.riesgo === 'alto') {
        s += 'Requiere vigilancia estrecha, valoracion precoz de ventilacion no invasiva y una conversacion explicita sobre el nivel de cuidados y el techo terapeutico, que en esta franja de riesgo es parte del tratamiento y no una renuncia a el. Considerar cuidados intensivos si el paciente es candidato.';
      } else if (r.riesgo === 'intermedio') {
        s += 'Manejo hospitalario convencional con revaluacion frecuente. Vigilar la aparicion de acidosis, que es el factor que mas empeora el pronostico y el que dispara la indicacion de ventilacion no invasiva.';
      } else {
        s += 'Bajo riesgo: es el grupo en el que se puede plantear alta precoz u hospitalizacion a domicilio si el entorno social lo permite y el paciente entiende cuando volver.';
      }
      if (r.acidemia) s += ' <strong>Hay acidemia:</strong> con pH de 7.35 o menor y PaCO2 mayor de 45 mmHg la ventilacion no invasiva es tratamiento de primera linea y no debe demorarse; reduce intubacion, estancia y mortalidad.';
      if (r.consolidacion) s += ' <strong>Hay consolidacion:</strong> el episodio es una neumonia sobre EPOC, no una exacerbacion simple. Cambia el antibiotico, el pronostico y el seguimiento radiologico.';
      if (r.pD === 2) s += ' <strong>La disnea basal eMRCD 5b</strong> es el componente de mayor peso de la escala y refleja la situacion funcional previa: por si sola justifica revisar los objetivos de cuidado.';
      s += ' La escala estratifica el riesgo pero <strong>no decide por si sola</strong> el destino del paciente: se integra con la comorbilidad, la situacion funcional basal y las voluntades expresadas.';
      return s;
    },
    fragment: r => `DECAF ${r.total}: riesgo ${r.riesgo}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
