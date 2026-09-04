// topics/patologia-pleural/calculators.js
// 4 herramientas:
// - criterios-light: separa trasudado de exudado y, en la misma pantalla, calcula los gradientes
//   de albumina y de proteinas que corrigen el falso exudado del paciente con diureticos.
// - derrame-paraneumonico: estadio del derrame de la neumonia y decision de drenaje.
// - rapid: escala pronostica de la infeccion pleural (Rahman 2014).
// - neumotorax-manejo: algoritmo de la guia BTS 2023, por sintomas y caracteristicas de alto
//   riesgo en lugar de por el tama&#241;o.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

export const calculators = [
  {
    key: 'criterios-light', title: 'Criterios de Light y gradientes', accent: '#4a5f8c',
    subtitle: 'Trasudado o exudado, con la correccion del falso exudado por diureticos',
    incompleteMsg: 'Introduce proteinas y lactato deshidrogenasa en liquido y en suero, y el limite alto de la normalidad del laboratorio.',
    fields: [
      { name: 'protLiq', id: 'pp-li-pl', type: 'number', step: '0.1', label: 'Proteinas en LIQUIDO pleural (g/dL)', placeholder: 'ej. 3.8', row: 'r1' },
      { name: 'protSuero', id: 'pp-li-ps', type: 'number', step: '0.1', label: 'Proteinas en SUERO (g/dL)', placeholder: 'ej. 6.4', row: 'r1' },
      { name: 'ldhLiq', id: 'pp-li-ll', type: 'number', step: '1', label: 'Lactato deshidrogenasa en LIQUIDO (U/L)', placeholder: 'ej. 320', row: 'r2' },
      { name: 'ldhSuero', id: 'pp-li-ls', type: 'number', step: '1', label: 'Lactato deshidrogenasa en SUERO (U/L)', placeholder: 'ej. 210', row: 'r2' },
      { name: 'ldhLsn', id: 'pp-li-lsn', type: 'number', step: '1', label: 'Limite ALTO de la normalidad de la lactato deshidrogenasa serica en tu laboratorio (U/L)', placeholder: 'ej. 250' },
      { type: 'note', text: 'Los tres criterios de Light son cocientes entre el liquido y el suero, de modo que la muestra de suero tiene que extraerse a la vez: sin ella no se puede aplicar la regla y hay que repetir la puncion. El limite alto de la normalidad varia entre laboratorios, y por eso se pide aqui en lugar de asumir un valor fijo.' },
      { name: 'albLiq', id: 'pp-li-al', type: 'number', step: '0.1', required: false, label: 'Albumina en LIQUIDO (g/dL, opcional)', placeholder: 'ej. 2.1', row: 'r3' },
      { name: 'albSuero', id: 'pp-li-as', type: 'number', step: '0.1', required: false, label: 'Albumina en SUERO (g/dL, opcional)', placeholder: 'ej. 3.6', row: 'r3' },
      { name: 'diureticos', id: 'pp-li-diu', type: 'checkbox', label: 'El paciente esta tomando diureticos y la clinica sugiere insuficiencia cardiaca' },
      { type: 'note', text: 'Los gradientes solo se usan como RESCATE: cuando los criterios de Light dicen exudado pero todo el cuadro apunta a un trasudado, tipicamente en la insuficiencia cardiaca tratada con diureticos, que concentran las proteinas del liquido. Un gradiente de albumina mayor de 1.2 g/dL o de proteinas mayor de 3.1 g/dL reclasifica el derrame como trasudado. No se usan al reves: no sirven para convertir en exudado un derrame que Light clasifico como trasudado.' }
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
      if (c1) cumplidos.push('cociente de proteinas mayor de 0.5');
      if (c2) cumplidos.push('cociente de lactato deshidrogenasa mayor de 0.6');
      if (c3) cumplidos.push('lactato deshidrogenasa del liquido por encima de dos tercios del limite alto serico');
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
      if (r.invalido) return 'Revisa los valores: proteinas y albumina en g/dL, lactato deshidrogenasa en U/L, y todos positivos y dentro de un rango plausible.';
      let s = `<strong>${r.exudado ? 'EXUDADO' : 'TRASUDADO'} por los criterios de Light.</strong> Cociente de proteinas ${r.cocienteProt.toFixed(2)} (umbral 0.5), cociente de lactato deshidrogenasa ${r.cocienteLdh.toFixed(2)} (umbral 0.6), lactato deshidrogenasa del liquido ${Math.round(r.ldhLiq)} U/L frente a un umbral de ${Math.round(r.umbralLdh)}. `;
      if (r.exudado) s += `Criterios cumplidos: ${r.cumplidos.join('; ')}. `;
      if (r.rescatable) {
        s += '<strong style="color:#8a6a1f;">Atencion: probable falso exudado por diureticos.</strong> ';
        if (r.gradAlb !== null) s += `El gradiente de albumina es de ${r.gradAlb.toFixed(1)} g/dL `;
        s += `y el de proteinas de ${r.gradProt.toFixed(1)} g/dL. Con un gradiente de albumina mayor de 1.2 o de proteinas mayor de 3.1 en un paciente con clinica de insuficiencia cardiaca tratada con diureticos, el derrame se reclasifica como <strong>TRASUDADO</strong>: tratar la enfermedad de base y no seguir estudiando la pleura. Los criterios de Light etiquetan mal como exudado alrededor de una cuarta parte de los trasudados, y este es el escenario tipico.`;
      } else if (r.exudado) {
        s += 'Hay que buscar la causa: paraneumonico y empiema, neoplasia, tuberculosis, embolia pulmonar, pancreatitis, enfermedad autoinmunitaria, quilotorax o farmacos. Completar con glucosa, pH, recuento y formula, citologia y cultivo, y a&#241;adir adenosina desaminasa, amilasa o trigliceridos segun la sospecha.';
        if (r.diureticos) s += ` Se han marcado diureticos, pero los gradientes no alcanzan el umbral de rescate (albumina ${r.gradAlb !== null ? r.gradAlb.toFixed(1) : 'no introducida'}, proteinas ${r.gradProt.toFixed(1)}): el derrame se mantiene como exudado.`;
      } else {
        s += 'Ningun criterio cumplido: es un trasudado. Las causas habituales son la insuficiencia cardiaca (la mas frecuente de todas), la cirrosis con hidrotorax hepatico, el sindrome nefrotico, la dialisis peritoneal y la hipoalbuminemia. Se trata la enfermedad de base y no hace falta seguir estudiando la pleura.';
      }
      s += ' <strong>Recordatorio:</strong> toda toracocentesis se hace guiada por ecografia, y las biopsias pleurales a ciegas no deben realizarse.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : r.rescatable ? 'exudado por Light, reclasificado como trasudado por el gradiente' : (r.exudado ? 'exudado' : 'trasudado')
  },
  {
    key: 'derrame-paraneumonico', title: 'Derrame paraneumonico: estadio y drenaje', accent: '#8c3a34',
    subtitle: 'Decide si basta el antibiotico o hace falta tubo de drenaje',
    incompleteMsg: 'Indica el aspecto del liquido y, si no es pus, introduce el pH.',
    fields: [
      { name: 'aspecto', id: 'pp-dp-asp', type: 'select', label: 'Aspecto del liquido obtenido', options: [
        { value: '', label: 'Selecciona' },
        { value: 'claro', label: 'Claro o serohematico' },
        { value: 'turbio', label: 'Turbio' },
        { value: 'pus', label: 'PUS FRANCO' } ] },
      { name: 'ph', id: 'pp-dp-ph', type: 'number', step: '0.01', required: false, label: 'pH del liquido pleural (no se mide en pus franco)', placeholder: 'ej. 7.15', row: 'r1' },
      { name: 'glucosa', id: 'pp-dp-glu', type: 'number', step: '1', required: false, label: 'Glucosa del liquido (mg/dL, opcional)', placeholder: 'ej. 42', row: 'r1' },
      { name: 'ldh', id: 'pp-dp-ldh', type: 'number', step: '1', required: false, label: 'Lactato deshidrogenasa del liquido (U/L, opcional)', placeholder: 'ej. 1400', row: 'r2' },
      { name: 'tamano', id: 'pp-dp-tam', type: 'number', step: '1', required: false, label: 'Separacion pleural maxima en la ecografia (mm, opcional)', placeholder: 'ej. 25', row: 'r2' },
      { name: 'germen', id: 'pp-dp-ger', type: 'checkbox', label: 'Tincion de Gram o cultivo positivos en el liquido' },
      { name: 'tabiques', id: 'pp-dp-tab', type: 'checkbox', label: 'Tabiques o loculaciones en la ecografia' },
      { type: 'note', text: 'El pH es la variable que mas decide y la que peor se maneja: se recoge en JERINGA DE GASOMETRIA, sin burbujas de aire (que lo elevan falsamente) y sin anestesico local dentro de la muestra (que lo baja), y se procesa pronto. En el pus franco no se mide, porque estropea el gasometro y no cambia la conducta: el pus se drena. Un pH mayor de 7.2 pero menor de 7.4 es zona intermedia y se decide con la clinica, el tama&#241;o y la presencia de tabiques.' }
    ],
    compute(v) {
      if (!v.aspecto) return null;
      if (v.aspecto !== 'pus' && v.ph == null) return null;
      if (v.ph != null && !(v.ph >= 6 && v.ph <= 8)) return { invalido: true };
      if (v.glucosa != null && !(v.glucosa >= 0 && v.glucosa <= 800)) return { invalido: true };
      if (v.ldh != null && !(v.ldh >= 0 && v.ldh <= 50000)) return { invalido: true };
      if (v.tamano != null && !(v.tamano >= 0 && v.tamano <= 300)) return { invalido: true };
      if (v.aspecto === 'pus') {
        return { estadio: 'EMPIEMA', drenar: true, razones: ['pus franco en la puncion'], intermedio: false, tabiques: !!v.tabiques, tamano: v.tamano == null ? null : v.tamano };
      }
      const razones = [];
      if (v.ph <= 7.2) razones.push(`pH de ${v.ph} (7.2 o menor)`);
      if (v.glucosa != null && v.glucosa < 60) razones.push(`glucosa de ${v.glucosa} mg/dL (menor de 60)`);
      if (v.ldh != null && v.ldh > 1000) razones.push(`lactato deshidrogenasa de ${v.ldh} U/L (mayor de 1000)`);
      if (v.germen) razones.push('tincion o cultivo positivos');
      const drenar = razones.length > 0;
      const intermedio = !drenar && v.ph > 7.2 && v.ph < 7.4;
      const estadio = drenar ? 'COMPLICADO (fibrinopurulento)'
        : intermedio ? 'SIMPLE en ZONA INTERMEDIA de pH' : 'SIMPLE (exudativo)';
      return { estadio, drenar, razones, intermedio,
        tabiques: !!v.tabiques, tamano: v.tamano == null ? null : v.tamano, ph: v.ph };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: pH de 6 a 8, glucosa de 0 a 800 mg/dL, lactato deshidrogenasa de 0 a 50000 U/L y separacion pleural de 0 a 300 mm.';
      let s = `<strong>Derrame paraneumonico ${r.estadio}.</strong> `;
      if (r.drenar) {
        s += `Criterios de drenaje presentes: ${r.razones.join('; ')}. `;
        s += '<strong style="color:#8c3a34;">Colocar tubo de drenaje guiado por ecografia.</strong> Un calibre fino de 10 a 14 French es tan eficaz como uno grueso y mucho menos doloroso. El antibiotico solo no resuelve un derrame complicado ni un empiema, por muchos dias que se prolongue. Antibiotico prolongado con cobertura anaerobia, ajustado a los cultivos. ';
        s += 'Si el drenaje cesa y queda coleccion residual: <strong>activador tisular del plasminogeno 10 mg mas DNasa 5 mg, dos veces al dia durante 3 dias</strong>; los dos juntos, porque por separado no funcionan, y nunca estreptoquinasa. Sin respuesta a los 5 a 7 dias, con sepsis persistente o con pulmon atrapado: cirugia toracoscopica con desbridamiento y decorticacion.';
      } else if (r.intermedio) {
        s += `Con un pH de ${r.ph}, por encima de 7.2 pero por debajo de 7.4, el derrame queda en ZONA INTERMEDIA: no hay criterio automatico de drenaje y la decision se individualiza con la evolucion clinica, el tama&#241;o del derrame y la presencia de tabiques. `;
        s += 'Mantener el antibiotico, repetir la ecografia y no perder de vista al paciente: si no mejora en 24 a 48 horas, repuncionar y drenar.';
      } else {
        s += 'Sin criterios de drenaje: <strong style="color:#3f6b52;">antibiotico solo</strong>. El derrame simple se resuelve al tratar la neumonia. Reevaluar clinica y ecograficamente si el paciente no mejora en 48 a 72 horas.';
      }
      if (r.tabiques) s += ' <strong>Hay tabiques en la ecografia</strong>: inclinan la balanza hacia el drenaje aunque los parametros bioquimicos no lleguen al umbral, y anticipan que el tubo puede necesitar tratamiento intrapleural.';
      if (r.tamano !== null && r.tamano >= 10 && !r.drenar) s += ` La separacion pleural de ${r.tamano} mm hace el derrame accesible con seguridad: si el paciente no mejora, repuncionar es sencillo.`;
      s += ' Calcular ademas la escala RAPID para estratificar el riesgo de mala evolucion.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `${r.estadio}: ${r.drenar ? 'drenar' : (r.intermedio ? 'zona intermedia' : 'antibiotico solo')}`
  },
  {
    key: 'rapid', title: 'Escala RAPID (infeccion pleural)', accent: '#6b4a2e',
    subtitle: 'Riesgo de mala evolucion en el derrame complicado y el empiema',
    incompleteMsg: 'Completa urea, edad, purulencia, origen de la infeccion y albumina.',
    fields: [
      { name: 'urea', id: 'pp-ra-urea', type: 'number', step: '0.1', label: 'Urea serica (mmol/L)', placeholder: 'ej. 9.2', row: 'r1' },
      { name: 'edad', id: 'pp-ra-edad', type: 'number', step: '1', label: 'Edad (a&#241;os)', placeholder: 'ej. 68', row: 'r1' },
      { name: 'albumina', id: 'pp-ra-alb', type: 'number', step: '1', label: 'Albumina serica (g/L)', placeholder: 'ej. 24', row: 'r2' },
      { name: 'purulencia', id: 'pp-ra-pur', type: 'select', label: 'Aspecto del liquido pleural', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Purulento (0)' },
        { value: '1', label: 'No purulento (1)' } ] },
      { name: 'origen', id: 'pp-ra-ori', type: 'select', label: 'Origen de la infeccion', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Comunitaria (0)' },
        { value: '1', label: 'Nosocomial (1)' } ] },
      { type: 'note', text: 'Puntuacion: urea menor de 5 mmol/L 0 puntos, de 5 a 8 un punto, mayor de 8 dos puntos (para pasar de mg/dL de nitrogeno ureico a mmol/L de urea, multiplicar por 0.357). Edad menor de 50 a&#241;os 0 puntos, de 50 a 70 un punto, mayor de 70 dos puntos. Liquido no purulento un punto. Infeccion nosocomial un punto. Albumina menor de 27 g/L un punto. La escala ESTRATIFICA el riesgo e informa la conversacion con el paciente: no decide por si sola el drenaje ni la cirugia, que dependen del analisis del liquido y de la evolucion.' }
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
      if (r.invalido) return 'Revisa los valores: urea de 0 a 100 mmol/L, edad de 0 a 120 a&#241;os y albumina de 5 a 60 g/L.';
      let s = `<strong>RAPID ${r.total} de 7 puntos: riesgo ${r.riesgo}.</strong> Mortalidad a los 3 meses <strong>${r.mortalidad}</strong>. Desglose: urea ${r.pUrea}, edad ${r.pEdad}, purulencia ${r.pPur}, origen ${r.pOri}, albumina ${r.pAlb}. `;
      if (r.riesgo === 'alto') {
        s += 'Grupo de alto riesgo: conviene un seguimiento estrecho, valoracion precoz por cirugia toracica si no responde, soporte nutricional activo y una conversacion explicita con el paciente y la familia sobre el pronostico y los objetivos del tratamiento.';
      } else if (r.riesgo === 'intermedio') {
        s += 'Riesgo intermedio: tratamiento habitual con drenaje y antibiotico, y revaluacion a los 5 a 7 dias para decidir tratamiento intrapleural o cirugia si no hay respuesta.';
      } else {
        s += 'Riesgo bajo: buena evolucion esperable con drenaje y antibiotico adecuados, sin que ello permita relajar la vigilancia del debito del tubo ni de la respuesta clinica.';
      }
      if (r.pAlb === 1) s += ` <strong>La albumina de ${r.albumina} g/L puntua</strong>: la desnutricion es uno de los pocos componentes modificables de la escala, y el soporte nutricional forma parte del tratamiento.`;
      s += ' La escala estratifica el riesgo, no sustituye a la decision clinica: el drenaje se decide por el analisis del liquido y la cirugia por la respuesta al tratamiento.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `RAPID ${r.total}: riesgo ${r.riesgo}`
  },
  {
    key: 'neumotorax-manejo', title: 'Manejo del neumotorax (guia BTS 2023)', accent: '#3d5a73',
    subtitle: 'Por sintomas y caracteristicas de alto riesgo, no por el tama&#241;o',
    incompleteMsg: 'Selecciona el tipo de neumotorax y la carga sintomatica.',
    fields: [
      { name: 'tipo', id: 'pp-nx-tipo', type: 'select', label: 'Tipo de neumotorax', options: [
        { value: '', label: 'Selecciona' },
        { value: 'primario', label: 'Espontaneo primario (sin enfermedad pulmonar conocida)' },
        { value: 'secundario', label: 'Espontaneo secundario (con enfermedad pulmonar de base)' },
        { value: 'traumatico', label: 'Traumatico o iatrogenico' } ] },
      { name: 'sintomas', id: 'pp-nx-sin', type: 'select', label: 'Carga sintomatica', options: [
        { value: '', label: 'Selecciona' },
        { value: 'poco', label: 'Asintomatico o minimamente sintomatico (sin dolor ni disnea relevantes)' },
        { value: 'sint', label: 'Sintomatico: dolor o disnea significativos' } ] },
      { type: 'note', text: 'Caracteristicas de ALTO RIESGO. Cualquiera de ellas lleva directamente al drenaje.' },
      { name: 'tension', id: 'pp-nx-ten', type: 'checkbox', label: 'Sospecha de neumotorax A TENSION: hipotension, ingurgitacion yugular, desviacion traqueal' },
      { name: 'inestable', id: 'pp-nx-ine', type: 'checkbox', label: 'Inestabilidad hemodinamica' },
      { name: 'hipoxia', id: 'pp-nx-hip', type: 'checkbox', label: 'Hipoxia significativa' },
      { name: 'bilateral', id: 'pp-nx-bil', type: 'checkbox', label: 'Neumotorax bilateral' },
      { name: 'hemo', id: 'pp-nx-hem', type: 'checkbox', label: 'Hemoneumotorax' },
      { name: 'mayor50', id: 'pp-nx-50', type: 'checkbox', label: 'Edad mayor de 50 a&#241;os con carga tabaquica importante' },
      { name: 'ventilado', id: 'pp-nx-vm', type: 'checkbox', label: 'Paciente en ventilacion mecanica' },
      { type: 'note', text: 'Contexto para la prevencion de recurrencias.' },
      { name: 'segundoIpsi', id: 'pp-nx-2i', type: 'checkbox', label: 'Segundo episodio del mismo lado, o primero del lado contrario' },
      { name: 'profesion', id: 'pp-nx-pro', type: 'checkbox', label: 'Profesion de riesgo: buceador, piloto o militar' },
      { type: 'note', text: 'El cambio principal de la guia de 2023 es que el TAMA&#209;O deja de ser el criterio: el manejo conservador puede considerarse en el neumotorax espontaneo primario poco sintomatico con independencia de su tama&#241;o, porque el ensayo que lo comparo con el drenaje mostro resultados no inferiores y muchas menos complicaciones. Todas las opciones se comentan con el paciente, priorizando la menos invasiva.' }
    ],
    compute(v) {
      if (!v.tipo || !v.sintomas) return null;
      const altoRiesgo = [];
      if (v.inestable) altoRiesgo.push('inestabilidad hemodinamica');
      if (v.hipoxia) altoRiesgo.push('hipoxia significativa');
      if (v.bilateral) altoRiesgo.push('neumotorax bilateral');
      if (v.hemo) altoRiesgo.push('hemoneumotorax');
      if (v.mayor50) altoRiesgo.push('mayor de 50 a&#241;os con tabaquismo importante');
      if (v.ventilado) altoRiesgo.push('ventilacion mecanica');
      if (v.tipo === 'secundario') altoRiesgo.push('enfermedad pulmonar de base');
      let conducta;
      if (v.tension) conducta = 'DESCOMPRESION INMEDIATA';
      else if (altoRiesgo.length || v.tipo === 'traumatico') conducta = 'DRENAJE';
      else if (v.sintomas === 'poco') conducta = 'MANEJO CONSERVADOR';
      else conducta = 'DISPOSITIVO AMBULATORIO, ASPIRACION O DRENAJE';
      const cirugia = !!v.segundoIpsi || !!v.profesion || !!v.tension;
      return { conducta, altoRiesgo, tension: !!v.tension, tipo: v.tipo, sintomas: v.sintomas,
        cirugia, segundoIpsi: !!v.segundoIpsi, profesion: !!v.profesion };
    },
    format: r => {
      let s = `<strong>Conducta: ${r.conducta}.</strong> `;
      if (r.tension) {
        s += '<strong style="color:#8c3a34;">El neumotorax a tension es un diagnostico CLINICO y no espera a la radiografia.</strong> Descompresion inmediata con aguja y, en el adulto, en el 4.o o 5.o espacio intercostal de la linea axilar media, donde la pared es mas fina que en el 2.o espacio de la linea medioclavicular. Despues, tubo de drenaje y confirmacion radiologica. ';
      } else if (r.altoRiesgo.length) {
        s += `Caracteristicas de alto riesgo presentes: ${r.altoRiesgo.join('; ')}. Con cualquiera de ellas se coloca tubo de drenaje e ingresa el paciente. `;
        if (r.tipo === 'secundario') s += 'El neumotorax secundario se tolera mucho peor por la escasa reserva pulmonar y tiene mayor mortalidad: practicamente siempre requiere drenaje e ingreso, aunque sea pequeno. ';
      } else if (r.tipo === 'traumatico') {
        s += 'El neumotorax traumatico o iatrogenico se drena, sobre todo si el paciente va a recibir ventilacion con presion positiva o va a ser trasladado, porque puede evolucionar a tension con rapidez. ';
      } else if (r.conducta === 'MANEJO CONSERVADOR') {
        s += '<strong style="color:#3f6b52;">Sin caracteristicas de alto riesgo y poco sintomatico: se puede manejar de forma conservadora con independencia del TAMA&#209;O.</strong> Observacion, analgesia y control clinico y radiologico, con instrucciones escritas de cuando volver a consultar. Es el cambio principal de la guia de 2023 respecto al viejo umbral de 2 cm. ';
      } else {
        s += 'Sin caracteristicas de alto riesgo pero sintomatico: <strong>dispositivo ambulatorio</strong> con valvula unidireccional donde haya experiencia y seguimiento, que acorta el ingreso, o bien aspiracion con aguja o drenaje si no procede. Comentar las opciones con el paciente y priorizar la menos invasiva. ';
      }
      if (r.cirugia) {
        const motivos = [];
        if (r.segundoIpsi) motivos.push('segundo episodio ipsilateral o primero contralateral');
        if (r.profesion) motivos.push('profesion de riesgo');
        if (r.tension) motivos.push('neumotorax a tension de inicio');
        s += `<strong>Valorar cirugia de prevencion de recurrencias</strong> (${motivos.join('; ')}): toracoscopia con pleurodesis quirurgica y bullectomia, o toracotomia cuando se busca la tasa de recurrencia mas baja posible. `;
      }
      s += '<strong>Al alta, siempre</strong>: abandono del tabaco, que reduce de forma marcada la recurrencia; NO volar hasta la resolucion completa comprobada; y buceo contraindicado de por vida salvo cirugia definitiva bilateral.';
      return s;
    },
    fragment: r => `${r.conducta}${r.altoRiesgo.length ? ` (${r.altoRiesgo.length} caracteristica(s) de alto riesgo)` : ''}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
