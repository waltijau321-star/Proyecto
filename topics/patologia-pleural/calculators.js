// topics/patologia-pleural/calculators.js
// 4 herramientas:
// - criterios-light: separa trasudado de exudado y, en la misma pantalla, calcula los gradientes
//   de albumina y de proteinas que corrigen el falso exudado del paciente con diureticos.
// - derrame-paraneumonico: estadio del derrame de la neumonia y decision de drenaje.
// - rapid: escala pronostica de la infeccion pleural (Rahman 2014).
// - neumotorax-manejo: algoritmo de la guia BTS 2023, por sintomas y caracteristicas de alto
//   riesgo en lugar de por el tamaño.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

export const calculators = [
  {
    key: 'criterios-light', title: 'Criterios de Light y gradientes', accent: '#4a5f8c',
    subtitle: 'Trasudado o exudado, con la corrección del falso exudado por diuréticos',
    incompleteMsg: 'Introduce proteínas y lactato deshidrogenasa en líquido y en suero, y el limite alto de la normalidad del laboratorio.',
    fields: [
      { name: 'protLiq', id: 'pp-li-pl', type: 'number', step: '0.1', label: 'Proteínas en LÍQUIDO pleural (g/dL)', placeholder: 'ej. 3.8', row: 'r1' },
      { name: 'protSuero', id: 'pp-li-ps', type: 'number', step: '0.1', label: 'Proteínas en SUERO (g/dL)', placeholder: 'ej. 6.4', row: 'r1' },
      { name: 'ldhLiq', id: 'pp-li-ll', type: 'number', step: '1', label: 'Lactato deshidrogenasa en LÍQUIDO (U/L)', placeholder: 'ej. 320', row: 'r2' },
      { name: 'ldhSuero', id: 'pp-li-ls', type: 'number', step: '1', label: 'Lactato deshidrogenasa en SUERO (U/L)', placeholder: 'ej. 210', row: 'r2' },
      { name: 'ldhLsn', id: 'pp-li-lsn', type: 'number', step: '1', label: 'Limite ALTO de la normalidad de la lactato deshidrogenasa sérica en tu laboratorio (U/L)', placeholder: 'ej. 250' },
      { type: 'note', text: 'Los tres criterios de Light son cocientes entre el líquido y el suero, de modo que la muestra de suero tiene que extraerse a la vez: sin ella no se puede aplicar la regla y hay que repetir la punción. El limite alto de la normalidad varia entre laboratorios, y por eso se pide aquí en lugar de asumir un valor fijo.' },
      { name: 'albLiq', id: 'pp-li-al', type: 'number', step: '0.1', required: false, label: 'Albúmina en LÍQUIDO (g/dL, opcional)', placeholder: 'ej. 2.1', row: 'r3' },
      { name: 'albSuero', id: 'pp-li-as', type: 'number', step: '0.1', required: false, label: 'Albúmina en SUERO (g/dL, opcional)', placeholder: 'ej. 3.6', row: 'r3' },
      { name: 'diureticos', id: 'pp-li-diu', type: 'checkbox', label: 'El paciente esta tomando diuréticos y la clínica sugiere insuficiencia cardiaca' },
      { type: 'note', text: 'Los gradientes solo se usan como RESCATE: cuando los criterios de Light dicen exudado pero todo el cuadro apunta a un trasudado, típicamente en la insuficiencia cardiaca tratada con diuréticos, que concentran las proteínas del líquido. Un gradiente de albúmina mayor de 1.2 g/dL o de proteínas mayor de 3.1 g/dL reclasifica el derrame como trasudado. No se usan al revés: no sirven para convertir en exudado un derrame que Light clasifico como trasudado.' }
    ],
    compute(v) {
      if (v.protLiq == null || v.protSuero == null || v.ldhLiq == null || v.ldhSuero == null || v.ldhLsn == null) return null;
      if (!(v.protLiq >= 0 && v.protLiq <= 15) || !(v.protSuero > 0 && v.protSuero <= 15)) return { invalido: true };
      if (!(v.ldhLiq >= 0 && v.ldhLiq <= 20000) || !(v.ldhSuero > 0 && v.ldhSuero <= 20000)) return { invalido: true };
      if (!(v.ldhLsn > 0 && v.ldhLsn <= 2000)) return { invalido: true };
      const cocienteProt = v.protLiq / v.protSuero;
      const cocienteLdh = v.ldhLiq / v.ldhSuero;
      const umbralLdh = (2 / 3) * v.ldhLsn;
      const c1 = cocienteProt > 0.5;
      const c2 = cocienteLdh > 0.6;
      const c3 = v.ldhLiq > umbralLdh;
      const cumplidos = [];
      if (c1) cumplidos.push('cociente de proteínas mayor de 0.5');
      if (c2) cumplidos.push('cociente de lactato deshidrogenasa mayor de 0.6');
      if (c3) cumplidos.push('lactato deshidrogenasa del líquido por encima de dos tercios del limite alto sérico');
      const exudado = c1 || c2 || c3;
      let gradAlb = null;
      if (v.albLiq != null && v.albSuero != null) {
        if (!(v.albLiq >= 0 && v.albLiq <= 8) || !(v.albSuero > 0 && v.albSuero <= 8)) return { invalido: true };
        gradAlb = v.albSuero - v.albLiq;
      }
      const gradProt = v.protSuero - v.protLiq;
      const rescatable = exudado && !!v.diureticos && ((gradAlb !== null && gradAlb > 1.2) || gradProt > 3.1);
      return { exudado, cumplidos, cocienteProt, cocienteLdh, umbralLdh, gradAlb, gradProt, rescatable,
        diureticos: !!v.diureticos, ldhLiq: v.ldhLiq };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: proteínas y albúmina en g/dL, lactato deshidrogenasa en U/L, y todos positivos y dentro de un rango plausible.';
      let s = `<strong>${r.exudado ? 'EXUDADO' : 'TRASUDADO'} por los criterios de Light.</strong> Cociente de proteínas ${r.cocienteProt.toFixed(2)} (umbral 0.5), cociente de lactato deshidrogenasa ${r.cocienteLdh.toFixed(2)} (umbral 0.6), lactato deshidrogenasa del líquido ${Math.round(r.ldhLiq)} U/L frente a un umbral de ${Math.round(r.umbralLdh)}. `;
      if (r.exudado) s += `Criterios cumplidos: ${r.cumplidos.join('; ')}. `;
      if (r.rescatable) {
        s += '<strong style="color:#8a6a1f;">Atención: probable falso exudado por diuréticos.</strong> ';
        if (r.gradAlb !== null) s += `El gradiente de albúmina es de ${r.gradAlb.toFixed(1)} g/dL `;
        s += `y el de proteínas de ${r.gradProt.toFixed(1)} g/dL. Con un gradiente de albúmina mayor de 1.2 o de proteínas mayor de 3.1 en un paciente con clínica de insuficiencia cardiaca tratada con diuréticos, el derrame se reclasifica como <strong>TRASUDADO</strong>: tratar la enfermedad de base y no seguir estudiando la pleura. Los criterios de Light etiquetan mal como exudado alrededor de una cuarta parte de los trasudados, y este es el escenario típico.`;
      } else if (r.exudado) {
        s += 'Hay que buscar la causa: paraneumonico y empiema, neoplasia, tuberculosis, embolia pulmonar, pancreatitis, enfermedad autoinmunitaria, quilotorax o fármacos. Completar con glucosa, pH, recuento y fórmula, citología y cultivo, y añadir adenosina desaminasa, amilasa o triglicéridos según la sospecha.';
        if (r.diureticos) s += ` Se han marcado diuréticos, pero los gradientes no alcanzan el umbral de rescate (albúmina ${r.gradAlb !== null ? r.gradAlb.toFixed(1) : 'no introducida'}, proteínas ${r.gradProt.toFixed(1)}): el derrame se mantiene como exudado.`;
      } else {
        s += 'Ningún criterio cumplido: es un trasudado. Las causas habituales son la insuficiencia cardiaca (la más frecuente de todas), la cirrosis con hidrotórax hepático, el síndrome nefrótico, la diálisis peritoneal y la hipoalbuminemia. Se trata la enfermedad de base y no hace falta seguir estudiando la pleura.';
      }
      s += ' <strong>Recordatorio:</strong> toda toracocentesis se hace guiada por ecografía, y las biopsias pleurales a ciegas no deben realizarse.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : r.rescatable ? 'exudado por Light, reclasificado como trasudado por el gradiente' : (r.exudado ? 'exudado' : 'trasudado')
  },
  {
    key: 'derrame-paraneumonico', title: 'Derrame paraneumonico: estadio y drenaje', accent: '#8c3a34',
    subtitle: 'Decide si basta el antibiótico o hace falta tubo de drenaje',
    incompleteMsg: 'Indica el aspecto del líquido y, si no es pus, introduce el pH.',
    fields: [
      { name: 'aspecto', id: 'pp-dp-asp', type: 'select', label: 'Aspecto del líquido obtenido', options: [
        { value: '', label: 'Selecciona' },
        { value: 'claro', label: 'Claro o serohematico' },
        { value: 'turbio', label: 'Turbio' },
        { value: 'pus', label: 'PUS FRANCO' } ] },
      { name: 'ph', id: 'pp-dp-ph', type: 'number', step: '0.01', required: false, label: 'pH del líquido pleural (no se mide en pus franco)', placeholder: 'ej. 7.15', row: 'r1' },
      { name: 'glucosa', id: 'pp-dp-glu', type: 'number', step: '1', required: false, label: 'Glucosa del líquido (mg/dL, opcional)', placeholder: 'ej. 42', row: 'r1' },
      { name: 'ldh', id: 'pp-dp-ldh', type: 'number', step: '1', required: false, label: 'Lactato deshidrogenasa del líquido (U/L, opcional)', placeholder: 'ej. 1400', row: 'r2' },
      { name: 'tamano', id: 'pp-dp-tam', type: 'number', step: '1', required: false, label: 'Separación pleural máxima en la ecografía (mm, opcional)', placeholder: 'ej. 25', row: 'r2' },
      { name: 'germen', id: 'pp-dp-ger', type: 'checkbox', label: 'Tinción de Gram o cultivo positivos en el líquido' },
      { name: 'tabiques', id: 'pp-dp-tab', type: 'checkbox', label: 'Tabiques o loculaciones en la ecografía' },
      { type: 'note', text: 'El pH es la variable que más decide y la que peor se maneja: se recoge en JERINGA DE GASOMETRÍA, sin burbujas de aire (que lo elevan falsamente) y sin anestésico local dentro de la muestra (que lo baja), y se procesa pronto. En el pus franco no se mide, porque estropea el gasometro y no cambia la conducta: el pus se drena. Un pH mayor de 7.2 pero menor de 7.4 es zona intermedia y se decide con la clínica, el tamaño y la presencia de tabiques.' }
    ],
    compute(v) {
      if (!v.aspecto) return null;
      if (v.aspecto !== 'pus' && v.ph == null) return null;
      if (v.ph != null && !(v.ph >= 6 && v.ph <= 8)) return { invalido: true };
      if (v.glucosa != null && !(v.glucosa >= 0 && v.glucosa <= 800)) return { invalido: true };
      if (v.ldh != null && !(v.ldh >= 0 && v.ldh <= 50000)) return { invalido: true };
      if (v.tamano != null && !(v.tamano >= 0 && v.tamano <= 300)) return { invalido: true };
      if (v.aspecto === 'pus') {
        return { estadio: 'EMPIEMA', drenar: true, razones: ['pus franco en la punción'], intermedio: false, tabiques: !!v.tabiques, tamano: v.tamano == null ? null : v.tamano };
      }
      const razones = [];
      if (v.ph <= 7.2) razones.push(`pH de ${v.ph} (7.2 o menor)`);
      if (v.glucosa != null && v.glucosa < 60) razones.push(`glucosa de ${v.glucosa} mg/dL (menor de 60)`);
      if (v.ldh != null && v.ldh > 1000) razones.push(`lactato deshidrogenasa de ${v.ldh} U/L (mayor de 1000)`);
      if (v.germen) razones.push('tinción o cultivo positivos');
      const drenar = razones.length > 0;
      const intermedio = !drenar && v.ph > 7.2 && v.ph < 7.4;
      const estadio = drenar ? 'COMPLICADO (fibrinopurulento)'
        : intermedio ? 'SIMPLE en ZONA INTERMEDIA de pH' : 'SIMPLE (exudativo)';
      return { estadio, drenar, razones, intermedio,
        tabiques: !!v.tabiques, tamano: v.tamano == null ? null : v.tamano, ph: v.ph };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: pH de 6 a 8, glucosa de 0 a 800 mg/dL, lactato deshidrogenasa de 0 a 50000 U/L y separación pleural de 0 a 300 mm.';
      let s = `<strong>Derrame paraneumonico ${r.estadio}.</strong> `;
      if (r.drenar) {
        s += `Criterios de drenaje presentes: ${r.razones.join('; ')}. `;
        s += '<strong style="color:#8c3a34;">Colocar tubo de drenaje guiado por ecografía.</strong> Un calibre fino de 10 a 14 French es tan eficaz como uno grueso y mucho menos doloroso. El antibiótico solo no resuelve un derrame complicado ni un empiema, por muchos días que se prolongue. Antibiótico prolongado con cobertura anaerobia, ajustado a los cultivos. ';
        s += 'Si el drenaje cesa y queda colección residual: <strong>activador tisular del plasminógeno 10 mg más DNasa 5 mg, dos veces al dia durante 3 días</strong>; los dos juntos, porque por separado no funcionan, y nunca estreptoquinasa. Sin respuesta a los 5 a 7 días, con sepsis persistente o con pulmón atrapado: cirugía toracoscopica con desbridamiento y decorticación.';
      } else if (r.intermedio) {
        s += `Con un pH de ${r.ph}, por encima de 7.2 pero por debajo de 7.4, el derrame queda en ZONA INTERMEDIA: no hay criterio automático de drenaje y la decisión se individualiza con la evolución clínica, el tamaño del derrame y la presencia de tabiques. `;
        s += 'Mantener el antibiótico, repetir la ecografía y no perder de vista al paciente: si no mejora en 24 a 48 horas, repuncionar y drenar.';
      } else {
        s += 'Sin criterios de drenaje: <strong style="color:#3f6b52;">antibiótico solo</strong>. El derrame simple se resuelve al tratar la neumonía. Reevaluar clínica y ecograficamente si el paciente no mejora en 48 a 72 horas.';
      }
      if (r.tabiques) s += ' <strong>Hay tabiques en la ecografía</strong>: inclinan la balanza hacia el drenaje aunque los parámetros bioquímicos no lleguen al umbral, y anticipan que el tubo puede necesitar tratamiento intrapleural.';
      if (r.tamano !== null && r.tamano >= 10 && !r.drenar) s += ` La separación pleural de ${r.tamano} mm hace el derrame accesible con seguridad: si el paciente no mejora, repuncionar es sencillo.`;
      s += ' Calcular además la escala RAPID para estratificar el riesgo de mala evolución.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `${r.estadio}: ${r.drenar ? 'drenar' : (r.intermedio ? 'zona intermedia' : 'antibiótico solo')}`
  },
  {
    key: 'rapid', title: 'Escala RAPID (infección pleural)', accent: '#6b4a2e',
    subtitle: 'Riesgo de mala evolución en el derrame complicado y el empiema',
    incompleteMsg: 'Completa urea, edad, purulencia, origen de la infección y albúmina.',
    fields: [
      { name: 'urea', id: 'pp-ra-urea', type: 'number', step: '0.1', label: 'Urea sérica (mmol/L)', placeholder: 'ej. 9.2', row: 'r1' },
      { name: 'edad', id: 'pp-ra-edad', type: 'number', step: '1', label: 'Edad (años)', placeholder: 'ej. 68', row: 'r1' },
      { name: 'albumina', id: 'pp-ra-alb', type: 'number', step: '1', label: 'Albúmina sérica (g/L)', placeholder: 'ej. 24', row: 'r2' },
      { name: 'purulencia', id: 'pp-ra-pur', type: 'select', label: 'Aspecto del líquido pleural', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Purulento (0)' },
        { value: '1', label: 'No purulento (1)' } ] },
      { name: 'origen', id: 'pp-ra-ori', type: 'select', label: 'Origen de la infección', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Comunitaria (0)' },
        { value: '1', label: 'Nosocomial (1)' } ] },
      { type: 'note', text: 'Puntuación: urea menor de 5 mmol/L 0 puntos, de 5 a 8 un punto, mayor de 8 dos puntos (para pasar de mg/dL de nitrógeno ureico a mmol/L de urea, multiplicar por 0.357). Edad menor de 50 años 0 puntos, de 50 a 70 un punto, mayor de 70 dos puntos. Líquido no purulento un punto. Infección nosocomial un punto. Albúmina menor de 27 g/L un punto. La escala ESTRATIFICA el riesgo e informa la conversación con el paciente: no decide por si sola el drenaje ni la cirugía, que dependen del análisis del líquido y de la evolución.' }
    ],
    compute(v) {
      if (v.urea == null || v.edad == null || v.albumina == null || !v.purulencia || !v.origen) return null;
      if (!(v.urea >= 0 && v.urea <= 100) || !(v.edad >= 0 && v.edad <= 120) || !(v.albumina >= 5 && v.albumina <= 60)) return { invalido: true };
      const pUrea = v.urea > 8 ? 2 : v.urea >= 5 ? 1 : 0;
      const pEdad = v.edad > 70 ? 2 : v.edad >= 50 ? 1 : 0;
      const pPur = +v.purulencia;
      const pOri = +v.origen;
      const pAlb = v.albumina < 27 ? 1 : 0;
      const total = pUrea + pEdad + pPur + pOri + pAlb;
      const riesgo = total >= 5 ? 'alto' : total >= 3 ? 'intermedio' : 'bajo';
      const mortalidad = total >= 5 ? 'en torno al 50%' : total >= 3 ? 'en torno al 15 al 20%' : 'inferior al 5%';
      return { total, riesgo, mortalidad, pUrea, pEdad, pPur, pOri, pAlb, albumina: v.albumina };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: urea de 0 a 100 mmol/L, edad de 0 a 120 años y albúmina de 5 a 60 g/L.';
      let s = `<strong>RAPID ${r.total} de 7 puntos: riesgo ${r.riesgo}.</strong> Mortalidad a los 3 meses <strong>${r.mortalidad}</strong>. Desglose: urea ${r.pUrea}, edad ${r.pEdad}, purulencia ${r.pPur}, origen ${r.pOri}, albúmina ${r.pAlb}. `;
      if (r.riesgo === 'alto') {
        s += 'Grupo de alto riesgo: conviene un seguimiento estrecho, valoración precoz por cirugía torácica si no responde, soporte nutricional activo y una conversación explícita con el paciente y la familia sobre el pronóstico y los objetivos del tratamiento.';
      } else if (r.riesgo === 'intermedio') {
        s += 'Riesgo intermedio: tratamiento habitual con drenaje y antibiótico, y revaluacion a los 5 a 7 días para decidir tratamiento intrapleural o cirugía si no hay respuesta.';
      } else {
        s += 'Riesgo bajo: buena evolución esperable con drenaje y antibiótico adecuados, sin que ello permita relajar la vigilancia del debito del tubo ni de la respuesta clínica.';
      }
      if (r.pAlb === 1) s += ` <strong>La albúmina de ${r.albumina} g/L puntúa</strong>: la desnutrición es uno de los pocos componentes modificables de la escala, y el soporte nutricional forma parte del tratamiento.`;
      s += ' La escala estratifica el riesgo, no sustituye a la decisión clínica: el drenaje se decide por el análisis del líquido y la cirugía por la respuesta al tratamiento.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `RAPID ${r.total}: riesgo ${r.riesgo}`
  },
  {
    key: 'neumotorax-manejo', title: 'Manejo del neumotórax (guía BTS 2023)', accent: '#3d5a73',
    subtitle: 'Por síntomas y características de alto riesgo, no por el tamaño',
    incompleteMsg: 'Selecciona el tipo de neumotórax y la carga sintomática.',
    fields: [
      { name: 'tipo', id: 'pp-nx-tipo', type: 'select', label: 'Tipo de neumotórax', options: [
        { value: '', label: 'Selecciona' },
        { value: 'primario', label: 'Espontáneo primario (sin enfermedad pulmonar conocida)' },
        { value: 'secundario', label: 'Espontáneo secundario (con enfermedad pulmonar de base)' },
        { value: 'traumatico', label: 'Traumático o iatrogénico' } ] },
      { name: 'sintomas', id: 'pp-nx-sin', type: 'select', label: 'Carga sintomática', options: [
        { value: '', label: 'Selecciona' },
        { value: 'poco', label: 'Asintomático o mínimamente sintomático (sin dolor ni disnea relevantes)' },
        { value: 'sint', label: 'Sintomático: dolor o disnea significativos' } ] },
      { type: 'note', text: 'Características de ALTO RIESGO. Cualquiera de ellas lleva directamente al drenaje.' },
      { name: 'tension', id: 'pp-nx-ten', type: 'checkbox', label: 'Sospecha de neumotórax A TENSIÓN: hipotensión, ingurgitación yugular, desviación traqueal' },
      { name: 'inestable', id: 'pp-nx-ine', type: 'checkbox', label: 'Inestabilidad hemodinámica' },
      { name: 'hipoxia', id: 'pp-nx-hip', type: 'checkbox', label: 'Hipoxia significativa' },
      { name: 'bilateral', id: 'pp-nx-bil', type: 'checkbox', label: 'Neumotórax bilateral' },
      { name: 'hemo', id: 'pp-nx-hem', type: 'checkbox', label: 'Hemoneumotorax' },
      { name: 'mayor50', id: 'pp-nx-50', type: 'checkbox', label: 'Edad mayor de 50 años con carga tabaquica importante' },
      { name: 'ventilado', id: 'pp-nx-vm', type: 'checkbox', label: 'Paciente en ventilación mecánica' },
      { type: 'note', text: 'Contexto para la prevención de recurrencias.' },
      { name: 'segundoIpsi', id: 'pp-nx-2i', type: 'checkbox', label: 'Segundo episodio del mismo lado, o primero del lado contrario' },
      { name: 'profesion', id: 'pp-nx-pro', type: 'checkbox', label: 'Profesion de riesgo: buceador, piloto o militar' },
      { type: 'note', text: 'El cambio principal de la guía de 2023 es que el TAMAÑO deja de ser el criterio: el manejo conservador puede considerarse en el neumotórax espontáneo primario poco sintomático con independencia de su tamaño, porque el ensayo que lo comparo con el drenaje mostró resultados no inferiores y muchas menos complicaciones. Todas las opciones se comentan con el paciente, priorizando la menos invasiva.' }
    ],
    compute(v) {
      if (!v.tipo || !v.sintomas) return null;
      const altoRiesgo = [];
      if (v.inestable) altoRiesgo.push('inestabilidad hemodinámica');
      if (v.hipoxia) altoRiesgo.push('hipoxia significativa');
      if (v.bilateral) altoRiesgo.push('neumotórax bilateral');
      if (v.hemo) altoRiesgo.push('hemoneumotorax');
      if (v.mayor50) altoRiesgo.push('mayor de 50 años con tabaquismo importante');
      if (v.ventilado) altoRiesgo.push('ventilación mecánica');
      if (v.tipo === 'secundario') altoRiesgo.push('enfermedad pulmonar de base');
      let conducta;
      if (v.tension) conducta = 'DESCOMPRESIÓN INMEDIATA';
      else if (altoRiesgo.length || v.tipo === 'traumatico') conducta = 'DRENAJE';
      else if (v.sintomas === 'poco') conducta = 'MANEJO CONSERVADOR';
      else conducta = 'DISPOSITIVO AMBULATORIO, ASPIRACIÓN O DRENAJE';
      const cirugia = !!v.segundoIpsi || !!v.profesion || !!v.tension;
      return { conducta, altoRiesgo, tension: !!v.tension, tipo: v.tipo, sintomas: v.sintomas,
        cirugia, segundoIpsi: !!v.segundoIpsi, profesion: !!v.profesion };
    },
    format: r => {
      let s = `<strong>Conducta: ${r.conducta}.</strong> `;
      if (r.tension) {
        s += '<strong style="color:#8c3a34;">El neumotórax a tensión es un diagnóstico CLÍNICO y no espera a la radiografía.</strong> Descompresión inmediata con aguja y, en el adulto, en el 4.o o 5.o espacio intercostal de la línea axilar media, donde la pared es más fina que en el 2.o espacio de la línea medioclavicular. Después, tubo de drenaje y confirmación radiológica. ';
      } else if (r.altoRiesgo.length) {
        s += `Características de alto riesgo presentes: ${r.altoRiesgo.join('; ')}. Con cualquiera de ellas se coloca tubo de drenaje e ingresa el paciente. `;
        if (r.tipo === 'secundario') s += 'El neumotórax secundario se tolera mucho peor por la escasa reserva pulmonar y tiene mayor mortalidad: prácticamente siempre requiere drenaje e ingreso, aunque sea pequeno. ';
      } else if (r.tipo === 'traumatico') {
        s += 'El neumotórax traumático o iatrogénico se drena, sobre todo si el paciente va a recibir ventilación con presión positiva o va a ser trasladado, porque puede evolucionar a tensión con rapidez. ';
      } else if (r.conducta === 'MANEJO CONSERVADOR') {
        s += '<strong style="color:#3f6b52;">Sin características de alto riesgo y poco sintomático: se puede manejar de forma conservadora con independencia del TAMAÑO.</strong> Observación, analgesia y control clínico y radiológico, con instrucciones escritas de cuando volver a consultar. Es el cambio principal de la guía de 2023 respecto al viejo umbral de 2 cm. ';
      } else {
        s += 'Sin características de alto riesgo pero sintomático: <strong>dispositivo ambulatorio</strong> con valvula unidireccional donde haya experiencia y seguimiento, que acorta el ingreso, o bien aspiración con aguja o drenaje si no procede. Comentar las opciones con el paciente y priorizar la menos invasiva. ';
      }
      if (r.cirugia) {
        const motivos = [];
        if (r.segundoIpsi) motivos.push('segundo episodio ipsilateral o primero contralateral');
        if (r.profesion) motivos.push('profesion de riesgo');
        if (r.tension) motivos.push('neumotórax a tensión de inicio');
        s += `<strong>Valorar cirugía de prevención de recurrencias</strong> (${motivos.join('; ')}): toracoscopia con pleurodesis quirúrgica y bullectomia, o toracotomia cuando se busca la tasa de recurrencia más baja posible. `;
      }
      s += '<strong>Al alta, siempre</strong>: abandono del tabaco, que reduce de forma marcada la recurrencia; NO volar hasta la resolución completa comprobada; y buceo contraindicado de por vida salvo cirugía definitiva bilateral.';
      return s;
    },
    fragment: r => `${r.conducta}${r.altoRiesgo.length ? ` (${r.altoRiesgo.length} característica(s) de alto riesgo)` : ''}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
