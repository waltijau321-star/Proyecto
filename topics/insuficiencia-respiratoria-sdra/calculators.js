// topics/insuficiencia-respiratoria-sdra/calculators.js
// 4 herramientas, NINGUNA repetida de `ventilacion-mecanica` (que ya trae peso predicho y volumen
// corriente, presion de distension, PaO2/FiO2 de Berlin, ROX, RSBI, poder mecanico y ventilacion
// minuto para una PaCO2 objetivo):
// - gradiente-aa: gradiente alveolo-arterial de oxigeno con el valor esperado para la edad, y
//   deduccion del mecanismo de la hipoxemia a partir de la respuesta al oxigeno.
// - escalada-oxigeno: que dispositivo de soporte corresponde y cuando dejar de esperar.
// - hipercapnia-temporal: separa la hipercapnia aguda de la cronica y de la cronica agudizada
//   con el pH y el bicarbonato.
// - criterios-ecmo: criterios del ensayo EOLIA para valorar la oxigenacion por membrana
//   extracorporea, con la comprobacion previa obligatoria de que la ventilacion esta optimizada.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

export const calculators = [
  {
    key: 'gradiente-aa', title: 'Gradiente alveolo-arterial de oxigeno', accent: '#8a3f5c',
    subtitle: 'Calculo, valor esperado para la edad y mecanismo de la hipoxemia',
    incompleteMsg: 'Introduce edad, PaO2, PaCO2 y fraccion inspirada de oxigeno.',
    fields: [
      { name: 'edad', id: 'ir-aa-edad', type: 'number', step: '1', label: 'Edad (a&#241;os)', placeholder: 'ej. 62', row: 'r1' },
      { name: 'fio2', id: 'ir-aa-fio2', type: 'number', step: '1', label: 'Fraccion inspirada de oxigeno (%)', placeholder: 'ej. 21', row: 'r1' },
      { name: 'pao2', id: 'ir-aa-pao2', type: 'number', step: '1', label: 'PaO2 medida (mmHg)', placeholder: 'ej. 55', row: 'r2' },
      { name: 'paco2', id: 'ir-aa-paco2', type: 'number', step: '1', label: 'PaCO2 medida (mmHg)', placeholder: 'ej. 32', row: 'r2' },
      { name: 'pb', id: 'ir-aa-pb', type: 'number', step: '1', required: false, label: 'Presion barometrica (mmHg; 760 a nivel del mar)', placeholder: '760', row: 'r3' },
      { name: 'responde', id: 'ir-aa-resp', type: 'select', label: 'Mejora la PaO2 al subir la fraccion inspirada?', options: [
        { value: '', label: 'Selecciona' },
        { value: 'si', label: 'Si, mejora claramente' },
        { value: 'no', label: 'No, apenas cambia' },
        { value: 'nd', label: 'No comprobado todavia' } ] },
      { type: 'note', text: 'Presion alveolar de oxigeno = fraccion inspirada por (presion barometrica menos 47) menos PaCO2 dividida entre 0.8. A nivel del mar respirando aire equivale a 150 menos 1.25 por la PaCO2. El valor NORMAL del gradiente sube con la edad: aproximadamente la edad dividida entre 4 mas 4, de modo que 22 es normal a los 70 a&#241;os y claramente patologico a los 25. En altitud hay que introducir la presion barometrica real del lugar, o el resultado sale falsamente alterado.' }
    ],
    compute(v) {
      if (v.edad == null || v.fio2 == null || v.pao2 == null || v.paco2 == null) return null;
      if (!v.responde) return null;
      if (!(v.edad >= 0 && v.edad <= 120) || !(v.fio2 >= 15 && v.fio2 <= 100)) return { invalido: true };
      if (!(v.pao2 > 10 && v.pao2 <= 700) || !(v.paco2 > 5 && v.paco2 <= 200)) return { invalido: true };
      const pb = (v.pb != null && v.pb >= 400 && v.pb <= 800) ? v.pb : 760;
      const pAO2 = (v.fio2 / 100) * (pb - 47) - v.paco2 / 0.8;
      const gradiente = pAO2 - v.pao2;
      const esperado = v.edad / 4 + 4;
      const alto = gradiente > esperado;
      const hipercapnia = v.paco2 > 45;
      let mecanismo;
      if (!alto && hipercapnia) mecanismo = 'HIPOVENTILACION alveolar: el pulmon esta sano y el problema es que no se moviliza aire suficiente';
      else if (!alto && !hipercapnia) mecanismo = 'presion inspirada de oxigeno baja (altitud o mezcla de gases), o gasometria sin alteracion del intercambio';
      else if (v.responde === 'no') mecanismo = 'CORTOCIRCUITO: sangre que atraviesa alveolos no ventilados';
      else if (v.responde === 'si') mecanismo = 'DESEQUILIBRIO ventilacion-perfusion o alteracion de la difusion';
      else mecanismo = 'alteracion del intercambio pendiente de clasificar: falta comprobar la respuesta al oxigeno';
      return { pAO2, gradiente, esperado, alto, hipercapnia, mecanismo, responde: v.responde, pb, fio2: v.fio2, pao2: v.pao2, edad: v.edad };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: edad de 0 a 120 a&#241;os, fraccion inspirada del 15 al 100%, PaO2 de 10 a 700 mmHg, PaCO2 de 5 a 200 mmHg y presion barometrica de 400 a 800 mmHg.';
      let s = `<strong>Presion alveolar de oxigeno ${r.pAO2.toFixed(0)} mmHg. Gradiente alveolo-arterial ${r.gradiente.toFixed(0)} mmHg</strong> (esperado para ${r.edad} a&#241;os: hasta ${r.esperado.toFixed(0)}). `;
      s += r.alto ? '<strong style="color:#8c3a34;">Gradiente ALTO</strong>: hay alteracion del intercambio en el pulmon. ' : '<strong style="color:#3f6b52;">Gradiente NORMAL</strong> para la edad: el intercambio pulmonar esta conservado. ';
      s += `Mecanismo mas probable: <strong>${r.mecanismo}</strong>. `;
      if (!r.alto && r.hipercapnia) s += 'Buscar la causa en el estimulo central (opioides, sedantes, lesion del tronco) o en la bomba (enfermedad neuromuscular, cifoescoliosis, obesidad extrema, fatiga del diafragma). El tratamiento es ventilar, no oxigenar.';
      else if (r.responde === 'no') s += '<strong style="color:#8c3a34;">Subir la fraccion inspirada no va a servir de nada.</strong> Lo que hace falta es abrir alveolos: presion positiva teleespiratoria, maniobras de reclutamiento prudentes y decubito prono si se trata de una SDRA. Buscar consolidacion, edema, atelectasia o cortocircuito intracardiaco.';
      else if (r.responde === 'si') s += 'Responde al oxigeno, de modo que basta con ajustar la fraccion inspirada mientras se trata la causa: EPOC, asma, neumonia, embolia pulmonar o atelectasia en el desequilibrio ventilacion-perfusion, y enfermedad intersticial o enfisema en la alteracion de la difusion, que suele hacerse evidente con el ejercicio.';
      else s += 'Comprobar la respuesta al oxigeno es la maniobra que cierra el diagnostico y no requiere ningun aparato adicional.';
      if (r.fio2 > 21) s += ' <strong>Ojo:</strong> el gradiente calculado con fraccion inspirada alta pierde fiabilidad y tiende a sobreestimarse; en ese escenario la relacion PaO2/FiO2 es mas practica para seguir la evolucion.';
      if (r.pb !== 760) s += ` Calculado con una presion barometrica de ${r.pb} mmHg.`;
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `gradiente ${r.gradiente.toFixed(0)} mmHg (esperado ${r.esperado.toFixed(0)})`
  },
  {
    key: 'escalada-oxigeno', title: 'Escalada del soporte respiratorio', accent: '#3d5a73',
    subtitle: 'Que dispositivo corresponde y cuando dejar de esperar',
    incompleteMsg: 'Selecciona el escenario clinico y completa las constantes.',
    fields: [
      { name: 'escenario', id: 'ir-es-esc', type: 'select', label: 'Escenario clinico', options: [
        { value: '', label: 'Selecciona' },
        { value: 'hipox', label: 'Hipoxemia de novo (neumonia, SDRA)' },
        { value: 'epoc', label: 'Exacerbacion de EPOC u otra hipercapnia' },
        { value: 'edema', label: 'Edema agudo de pulmon cardiogenico' },
        { value: 'inmuno', label: 'Hipoxemia en paciente inmunodeprimido' } ] },
      { name: 'spo2', id: 'ir-es-spo2', type: 'number', step: '1', label: 'Saturacion de oxigeno actual (%)', placeholder: 'ej. 90', row: 'r1' },
      { name: 'fio2', id: 'ir-es-fio2', type: 'number', step: '1', label: 'Fraccion inspirada estimada (%)', placeholder: 'ej. 50', row: 'r1' },
      { name: 'fr', id: 'ir-es-fr', type: 'number', step: '1', label: 'Frecuencia respiratoria (por minuto)', placeholder: 'ej. 32', row: 'r2' },
      { name: 'ph', id: 'ir-es-ph', type: 'number', step: '0.01', required: false, label: 'pH arterial (opcional)', placeholder: 'ej. 7.28', row: 'r2' },
      { name: 'trabajo', id: 'ir-es-tra', type: 'checkbox', label: 'Trabajo respiratorio importante: musculatura accesoria, tiraje o habla entrecortada' },
      { name: 'conciencia', id: 'ir-es-con', type: 'checkbox', label: 'Descenso del nivel de conciencia o incapacidad para proteger la via aerea' },
      { name: 'inestable', id: 'ir-es-ine', type: 'checkbox', label: 'Inestabilidad hemodinamica o arritmia mal tolerada' },
      { type: 'note', text: 'El indice ROX se calcula como la saturacion dividida entre la fraccion inspirada expresada en FRACCION (una fraccion inspirada del 80% son 0.80), y ese cociente dividido entre la frecuencia respiratoria. Aqui se introduce en porcentaje y la conversion es automatica. Un valor de 4.88 o mas a las 2, 6 y 12 horas de canula de alto flujo predice exito; por debajo, y sobre todo si desciende entre mediciones, anuncia fracaso y permite intubar antes del agotamiento. Esta herramienta orienta: la decision de intubar es clinica y no espera a ningun numero.' }
    ],
    compute(v) {
      if (!v.escenario || v.spo2 == null || v.fio2 == null || v.fr == null) return null;
      if (!(v.spo2 >= 30 && v.spo2 <= 100) || !(v.fio2 >= 21 && v.fio2 <= 100) || !(v.fr >= 5 && v.fr <= 80)) return { invalido: true };
      if (v.ph != null && !(v.ph >= 6.5 && v.ph <= 7.8)) return { invalido: true };
      const rox = (v.spo2 / (v.fio2 / 100)) / v.fr;
      const intubar = !!v.conciencia || !!v.inestable;
      const acidosis = v.ph != null && v.ph <= 7.35;
      let recomendacion, detalle;
      if (intubar) {
        recomendacion = 'INTUBACION';
        detalle = 'El descenso del nivel de conciencia y la inestabilidad hemodinamica son indicaciones directas: no son candidatos a una prueba de soporte no invasivo.';
      } else if (v.escenario === 'epoc' && acidosis) {
        recomendacion = 'VENTILACION NO INVASIVA';
        detalle = 'Acidosis respiratoria en un paciente hipercapnico: es la indicacion con mejor evidencia de toda la medicina respiratoria, y reduce intubacion, estancia y mortalidad. Gasometria de control en 30 a 60 minutos.';
      } else if (v.escenario === 'edema') {
        recomendacion = 'CPAP o VENTILACION NO INVASIVA';
        detalle = 'La presion positiva reduce la precarga y la poscarga y mejora el reclutamiento alveolar: junto con el tratamiento farmacologico del edema, reduce la necesidad de intubacion.';
      } else if (v.escenario === 'epoc') {
        recomendacion = 'OXIGENO CONTROLADO con Venturi';
        detalle = 'Sin acidosis todavia, el objetivo es una saturacion del 88 al 92% con fraccion inspirada fija, evitando el exceso de oxigeno. Repetir la gasometria: si el pH baja de 7.35, pasar a ventilacion no invasiva.';
      } else {
        recomendacion = 'CANULA NASAL DE ALTO FLUJO';
        detalle = v.escenario === 'inmuno'
          ? 'En el inmunodeprimido con hipoxemia es preferible al soporte no invasivo con mascarilla y evita las complicaciones de la intubacion siempre que responda; el umbral para intubar debe ser bajo si no mejora.'
          : 'Es el soporte preferente en la hipoxemia pura. La ventilacion no invasiva en este escenario tiene una tasa de fracaso alta y su uso prolongado se asocia a peor pronostico.';
      }
      return { rox, recomendacion, detalle, intubar, acidosis, escenario: v.escenario,
        trabajo: !!v.trabajo, spo2: v.spo2, fio2: v.fio2, fr: v.fr };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: saturacion de 30 a 100%, fraccion inspirada de 21 a 100%, frecuencia respiratoria de 5 a 80 y pH de 6.5 a 7.8.';
      let s = `<strong>Soporte sugerido: ${r.recomendacion}.</strong> ${r.detalle} `;
      s += `<strong>Indice ROX ${r.rox.toFixed(2)}</strong> (saturacion ${r.spo2}%, fraccion inspirada ${r.fio2}%, frecuencia ${r.fr}). `;
      if (!r.intubar) {
        s += r.rox >= 4.88
          ? 'Por encima de 4.88, que es el umbral asociado a exito de la canula de alto flujo. Reevaluar a las 2, 6 y 12 horas: lo que importa es la tendencia, no un valor aislado. '
          : '<strong style="color:#8c3a34;">Por debajo de 4.88</strong>, umbral asociado a fracaso del soporte no invasivo. Reevaluar en 1 a 2 horas y, si no mejora o el indice desciende, intubar sin esperar mas. ';
        s += '<strong>Fijar ahora un limite de tiempo explicito</strong> y unos criterios objetivos de exito, y dejarlos escritos para el equipo de guardia. ';
      }
      if (r.trabajo) s += '<strong>Hay trabajo respiratorio importante:</strong> ese dato pesa mas que la saturacion. Un paciente que satura bien a costa de esfuerzos enormes se esta produciendo una lesion pulmonar autoinfligida, y no hay que dejarse tranquilizar por el numero del pulsioximetro. ';
      if (r.escenario === 'hipox' || r.escenario === 'inmuno') s += 'Vigilar el volumen corriente espirado si el dispositivo lo permite: por encima de 9 a 10 mL/kg de peso predicho indica esfuerzos peligrosos. ';
      s += 'Todo soporte no invasivo por insuficiencia respiratoria aguda exige un entorno con vigilancia continua y capacidad de intubar de inmediato.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `${r.recomendacion}, ROX ${r.rox.toFixed(2)}`
  },
  {
    key: 'hipercapnia-temporal', title: 'Hipercapnia aguda, cronica o agudizada', accent: '#8a6a1f',
    subtitle: 'El pH y el bicarbonato dicen cuanto tiempo lleva subida la PaCO2',
    incompleteMsg: 'Introduce pH, PaCO2 y bicarbonato.',
    fields: [
      { name: 'ph', id: 'ir-ht-ph', type: 'number', step: '0.01', label: 'pH arterial', placeholder: 'ej. 7.29', row: 'r1' },
      { name: 'paco2', id: 'ir-ht-co2', type: 'number', step: '1', label: 'PaCO2 (mmHg)', placeholder: 'ej. 68', row: 'r1' },
      { name: 'hco3', id: 'ir-ht-hco3', type: 'number', step: '0.1', label: 'Bicarbonato (mmol/L)', placeholder: 'ej. 31', row: 'r2' },
      { type: 'note', text: 'Reglas de compensacion, partiendo de una PaCO2 de 40 mmHg y un bicarbonato de 24 mmol/L. AGUDA: por cada 10 mmHg de ascenso de la PaCO2, el bicarbonato sube alrededor de 1 mmol/L y el pH baja unas 0.08 unidades. CRONICA: el bicarbonato sube de 3.5 a 4 mmol/L y el pH baja unas 0.03. El ri&#241;on tarda de 3 a 5 dias en completar la compensacion, y esa lentitud es justo lo que permite fechar el cuadro con una sola gasometria.' }
    ],
    compute(v) {
      if (v.ph == null || v.paco2 == null || v.hco3 == null) return null;
      if (!(v.ph >= 6.5 && v.ph <= 7.8) || !(v.paco2 > 5 && v.paco2 <= 200) || !(v.hco3 >= 2 && v.hco3 <= 60)) return { invalido: true };
      if (v.paco2 <= 45) return { sinHipercapnia: true, paco2: v.paco2, ph: v.ph };
      const delta = (v.paco2 - 40) / 10;
      const hco3Agudo = 24 + delta * 1;
      const hco3Cronico = 24 + delta * 3.75;
      const phAgudo = 7.40 - delta * 0.08;
      const phCronico = 7.40 - delta * 0.03;
      const puntoMedio = (hco3Agudo + hco3Cronico) / 2;
      let patron;
      if (v.hco3 < puntoMedio) patron = 'aguda';
      else if (v.ph < 7.35) patron = 'cronica agudizada';
      else patron = 'cronica compensada';
      return { patron, hco3Agudo, hco3Cronico, phAgudo, phCronico, ph: v.ph, paco2: v.paco2, hco3: v.hco3, acidemia: v.ph < 7.35 };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: pH de 6.5 a 7.8, PaCO2 de 5 a 200 mmHg y bicarbonato de 2 a 60 mmol/L.';
      if (r.sinHipercapnia) return `<strong>PaCO2 de ${r.paco2} mmHg: no hay hipercapnia</strong> (el umbral es 45 mmHg). Si el paciente esta hipoxemico, el mecanismo no es la hipoventilacion: calcular el gradiente alveolo-arterial y comprobar la respuesta al oxigeno.`;
      let s = `<strong>Hipercapnia ${r.patron}.</strong> Con una PaCO2 de ${r.paco2} mmHg, el bicarbonato esperado seria de ${r.hco3Agudo.toFixed(1)} mmol/L si fuera aguda y de ${r.hco3Cronico.toFixed(1)} si fuera cronica; el medido es ${r.hco3}. El pH esperado seria ${r.phAgudo.toFixed(2)} en la aguda y ${r.phCronico.toFixed(2)} en la cronica; el medido es ${r.ph}. `;
      if (r.patron === 'aguda') {
        s += '<strong style="color:#8c3a34;">El ri&#241;on todavia no ha compensado</strong>, de modo que el ascenso de la PaCO2 lleva horas y no dias. Buscar la causa aguda: sedantes u opioides, agotamiento del musculo respiratorio, broncoespasmo grave, neumotorax o lesion del sistema nervioso central. Si el pH es de 7.35 o menor, la ventilacion no invasiva es tratamiento de primera linea y no debe demorarse.';
      } else if (r.patron === 'cronica agudizada') {
        s += '<strong style="color:#8c3a34;">Hay una descompensacion aguda sobre una hipercapnia cronica</strong>: el bicarbonato alto demuestra que la PaCO2 llevaba tiempo elevada, y el pH bajo indica que ha subido mas en los ultimos dias. Es el patron tipico de la exacerbacion de EPOC. Ventilacion no invasiva si el pH es 7.35 o menor, oxigeno controlado con objetivo del 88 al 92% y tratamiento del desencadenante.';
      } else {
        s += '<strong style="color:#3f6b52;">Compensacion renal completa</strong>: la PaCO2 lleva al menos varios dias elevada y el paciente esta adaptado. No hay que intentar normalizar la PaCO2, porque eso produciria alcalosis metabolica al quedar el bicarbonato sin contrapeso. El objetivo de saturacion es del 88 al 92%, y conviene revaluar la necesidad de ventilacion no invasiva domiciliaria en situacion estable.';
      }
      if (r.acidemia) s += ' <strong>Hay acidemia</strong>: es lo que marca la urgencia, mas que la cifra absoluta de PaCO2. Repetir la gasometria 30 a 60 minutos despues de cualquier cambio de soporte, porque la respuesta del pH en esa primera hora es el mejor predictor de exito.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : r.sinHipercapnia ? 'sin hipercapnia' : `hipercapnia ${r.patron}`
  },
  {
    key: 'criterios-ecmo', title: 'Criterios EOLIA de oxigenacion extracorporea', accent: '#7a1f3d',
    subtitle: 'Cuando plantear el circuito extracorporeo en la SDRA refractaria',
    incompleteMsg: 'Introduce PaO2/FiO2, pH y PaCO2, y marca las horas de persistencia.',
    fields: [
      { type: 'note', text: 'Comprobacion PREVIA obligatoria. Antes de plantear el circuito extracorporeo hay que haber optimizado de verdad la ventilacion: la mayoria de los pacientes que parecen candidatos mejoran al hacerlo, y descartar causas corregibles evita traslados innecesarios.' },
      { name: 'protectora', id: 'ir-ec-prot', type: 'checkbox', label: 'Ventilacion protectora aplicada: 4 a 8 mL/kg de peso predicho, meseta 30 o menos, presion de distension menor de 15' },
      { name: 'prono', id: 'ir-ec-pro', type: 'checkbox', label: 'Decubito prono realizado, sesiones de 16 horas o mas' },
      { name: 'bloqueo', id: 'ir-ec-blo', type: 'checkbox', label: 'Bloqueo neuromuscular valorado o aplicado' },
      { name: 'corregibles', id: 'ir-ec-cor', type: 'checkbox', label: 'Descartados neumotorax, tubo obstruido, atelectasia masiva, sobrecarga de volumen y auto-PEEP' },
      { type: 'note', text: 'Criterios del ensayo EOLIA. Basta con cumplir uno de los tres.' },
      { name: 'pafi', id: 'ir-ec-pafi', type: 'number', step: '1', label: 'Relacion PaO2/FiO2 actual', placeholder: 'ej. 62', row: 'r1' },
      { name: 'horas', id: 'ir-ec-hor', type: 'number', step: '1', label: 'Horas que lleva en esa situacion', placeholder: 'ej. 7', row: 'r1' },
      { name: 'ph', id: 'ir-ec-ph', type: 'number', step: '0.01', label: 'pH arterial', placeholder: 'ej. 7.21', row: 'r2' },
      { name: 'paco2', id: 'ir-ec-co2', type: 'number', step: '1', label: 'PaCO2 (mmHg)', placeholder: 'ej. 68', row: 'r2' },
      { type: 'note', text: 'Contraindicaciones relativas que hay que valorar en el mismo momento: ventilacion mecanica de mas de 7 dias con parametros agresivos, enfermedad terminal o comorbilidad grave irreversible, contraindicacion absoluta para anticoagular, lesion neurologica devastadora y edad muy avanzada con fragilidad. La derivacion debe ser PRECOZ: trasladar a un paciente que ya esta en fallo multiorganico anula el beneficio.' }
    ],
    compute(v) {
      if (v.pafi == null || v.horas == null || v.ph == null || v.paco2 == null) return null;
      if (!(v.pafi > 0 && v.pafi <= 600) || !(v.horas >= 0 && v.horas <= 240)) return { invalido: true };
      if (!(v.ph >= 6.5 && v.ph <= 7.8) || !(v.paco2 > 5 && v.paco2 <= 200)) return { invalido: true };
      const c1 = v.pafi < 50 && v.horas > 3;
      const c2 = v.pafi < 80 && v.horas > 6;
      const c3 = v.ph < 7.25 && v.paco2 >= 60 && v.horas > 6;
      const cumple = c1 || c2 || c3;
      const optimizado = !!v.protectora && !!v.prono && !!v.corregibles;
      const cuales = [];
      if (c1) cuales.push('PaO2/FiO2 menor de 50 durante mas de 3 horas');
      if (c2) cuales.push('PaO2/FiO2 menor de 80 durante mas de 6 horas');
      if (c3) cuales.push('pH menor de 7.25 con PaCO2 de 60 mmHg o mas durante mas de 6 horas');
      const faltan = [];
      if (!v.protectora) faltan.push('ventilacion protectora');
      if (!v.prono) faltan.push('decubito prono');
      if (!v.corregibles) faltan.push('descarte de causas corregibles');
      if (!v.bloqueo) faltan.push('valoracion del bloqueo neuromuscular');
      return { cumple, cuales, optimizado, faltan, pafi: v.pafi, horas: v.horas, ph: v.ph, paco2: v.paco2 };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: relacion PaO2/FiO2 de 1 a 600, horas de 0 a 240, pH de 6.5 a 7.8 y PaCO2 de 5 a 200 mmHg.';
      let s = r.cumple
        ? `<strong style="color:#8c3a34;">Cumple criterios EOLIA</strong> (${r.cuales.join('; ')}). `
        : `<strong>No cumple los criterios EOLIA</strong> con los datos actuales (PaO2/FiO2 de ${r.pafi} durante ${r.horas} horas, pH ${r.ph} con PaCO2 de ${r.paco2} mmHg). `;
      if (!r.optimizado) {
        s += `<strong style="color:#8a6a1f;">Antes de nada, falta por confirmar: ${r.faltan.join(', ')}.</strong> Este es el paso que mas se salta y el que mas pacientes rescata sin ninguna terapia adicional: buena parte de los que parecen candidatos mejoran al aplicar bien la ventilacion protectora y el decubito prono, o al resolver un neumotorax, un tubo obstruido o una sobrecarga de volumen. `;
      } else {
        s += 'La ventilacion esta optimizada y las causas corregibles descartadas, de modo que la situacion puede considerarse realmente refractaria. ';
      }
      if (r.cumple) {
        s += '<strong>Contactar YA con el centro de referencia</strong> de oxigenacion por membrana extracorporea venovenosa. La derivacion tardia, con el paciente ya en fallo multiorganico, anula el beneficio: el momento de llamar es antes de que se necesite, no cuando ya no queda margen. Valorar a la vez las contraindicaciones relativas: ventilacion agresiva de mas de 7 dias, comorbilidad grave irreversible, imposibilidad de anticoagular y lesion neurologica devastadora.';
      } else {
        s += 'Mantener y optimizar el tratamiento: ventilacion protectora estricta, decubito prono 16 horas o mas si la relacion es menor de 150, balance conservador de fluidos y tratamiento de la causa. Reevaluar de forma seriada, porque los criterios pueden cumplirse en horas.';
      }
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `${r.cumple ? 'cumple' : 'no cumple'} criterios EOLIA${r.optimizado ? '' : ' (ventilacion sin optimizar)'}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
