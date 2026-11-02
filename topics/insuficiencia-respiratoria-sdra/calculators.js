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
    key: 'gradiente-aa', title: 'Gradiente alveolo-arterial de oxígeno', accent: '#8a3f5c',
    subtitle: 'Calculo, valor esperado para la edad y mecanismo de la hipoxemia',
    incompleteMsg: 'Introduce edad, PaO2, PaCO2 y fracción inspirada de oxígeno.',
    fields: [
      { name: 'edad', id: 'ir-aa-edad', type: 'number', step: '1', label: 'Edad (años)', placeholder: 'ej. 62', row: 'r1' },
      { name: 'fio2', id: 'ir-aa-fio2', type: 'number', step: '1', label: 'Fracción inspirada de oxígeno (%)', placeholder: 'ej. 21', row: 'r1' },
      { name: 'pao2', id: 'ir-aa-pao2', type: 'number', step: '1', label: 'PaO2 medida (mmHg)', placeholder: 'ej. 55', row: 'r2' },
      { name: 'paco2', id: 'ir-aa-paco2', type: 'number', step: '1', label: 'PaCO2 medida (mmHg)', placeholder: 'ej. 32', row: 'r2' },
      { name: 'pb', id: 'ir-aa-pb', type: 'number', step: '1', required: false, label: 'Presión barometrica (mmHg; 760 a nivel del mar)', placeholder: '760', row: 'r3' },
      { name: 'responde', id: 'ir-aa-resp', type: 'select', label: 'Mejora la PaO2 al subir la fracción inspirada?', options: [
        { value: '', label: 'Selecciona' },
        { value: 'si', label: 'Si, mejora claramente' },
        { value: 'no', label: 'No, apenas cambia' },
        { value: 'nd', label: 'No comprobado todavía' } ] },
      { type: 'note', text: 'Presión alveolar de oxígeno = fracción inspirada por (presión barometrica menos 47) menos PaCO2 dividida entre 0.8. A nivel del mar respirando aire equivale a 150 menos 1.25 por la PaCO2. El valor NORMAL del gradiente sube con la edad: aproximadamente la edad dividida entre 4 más 4, de modo que 22 es normal a los 70 años y claramente patológico a los 25. En altitud hay que introducir la presión barometrica real del lugar, o el resultado sale falsamente alterado.' }
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
      if (!alto && hipercapnia) mecanismo = 'HIPOVENTILACIÓN alveolar: el pulmón esta sano y el problema es que no se moviliza aire suficiente';
      else if (!alto && !hipercapnia) mecanismo = 'presión inspirada de oxígeno baja (altitud o mezcla de gases), o gasometría sin alteración del intercambio';
      else if (v.responde === 'no') mecanismo = 'CORTOCIRCUITO: sangre que atraviesa alvéolos no ventilados';
      else if (v.responde === 'si') mecanismo = 'DESEQUILIBRIO ventilación-perfusión o alteración de la difusión';
      else mecanismo = 'alteración del intercambio pendiente de clasificar: falta comprobar la respuesta al oxígeno';
      return { pAO2, gradiente, esperado, alto, hipercapnia, mecanismo, responde: v.responde, pb, fio2: v.fio2, pao2: v.pao2, edad: v.edad };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: edad de 0 a 120 años, fracción inspirada del 15 al 100%, PaO2 de 10 a 700 mmHg, PaCO2 de 5 a 200 mmHg y presión barometrica de 400 a 800 mmHg.';
      let s = `<strong>Presión alveolar de oxígeno ${r.pAO2.toFixed(0)} mmHg. Gradiente alveolo-arterial ${r.gradiente.toFixed(0)} mmHg</strong> (esperado para ${r.edad} años: hasta ${r.esperado.toFixed(0)}). `;
      s += r.alto ? '<strong style="color:#8c3a34;">Gradiente ALTO</strong>: hay alteración del intercambio en el pulmón. ' : '<strong style="color:#3f6b52;">Gradiente NORMAL</strong> para la edad: el intercambio pulmonar esta conservado. ';
      s += `Mecanismo más probable: <strong>${r.mecanismo}</strong>. `;
      if (!r.alto && r.hipercapnia) s += 'Buscar la causa en el estímulo central (opioides, sedantes, lesión del tronco) o en la bomba (enfermedad neuromuscular, cifoescoliosis, obesidad extrema, fatiga del diafragma). El tratamiento es ventilar, no oxigenar.';
      else if (r.responde === 'no') s += '<strong style="color:#8c3a34;">Subir la fracción inspirada no va a servir de nada.</strong> Lo que hace falta es abrir alvéolos: presión positiva teleespiratoria, maniobras de reclutamiento prudentes y decúbito prono si se trata de una SDRA. Buscar consolidación, edema, atelectasia o cortocircuito intracardiaco.';
      else if (r.responde === 'si') s += 'Responde al oxígeno, de modo que basta con ajustar la fracción inspirada mientras se trata la causa: EPOC, asma, neumonía, embolia pulmonar o atelectasia en el desequilibrio ventilación-perfusión, y enfermedad intersticial o enfisema en la alteración de la difusión, que suele hacerse evidente con el ejercicio.';
      else s += 'Comprobar la respuesta al oxígeno es la maniobra que cierra el diagnóstico y no requiere ningún aparato adicional.';
      if (r.fio2 > 21) s += ' <strong>Ojo:</strong> el gradiente calculado con fracción inspirada alta pierde fiabilidad y tiende a sobreestimarse; en ese escenario la relación PaO2/FiO2 es más práctica para seguir la evolución.';
      if (r.pb !== 760) s += ` Calculado con una presión barometrica de ${r.pb} mmHg.`;
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `gradiente ${r.gradiente.toFixed(0)} mmHg (esperado ${r.esperado.toFixed(0)})`
  },
  {
    key: 'escalada-oxigeno', title: 'Escalada del soporte respiratorio', accent: '#3d5a73',
    subtitle: 'Que dispositivo corresponde y cuando dejar de esperar',
    incompleteMsg: 'Selecciona el escenario clínico y completa las constantes.',
    fields: [
      { name: 'escenario', id: 'ir-es-esc', type: 'select', label: 'Escenario clínico', options: [
        { value: '', label: 'Selecciona' },
        { value: 'hipox', label: 'Hipoxemia de novo (neumonía, SDRA)' },
        { value: 'epoc', label: 'Exacerbación de EPOC u otra hipercapnia' },
        { value: 'edema', label: 'Edema agudo de pulmón cardiogénico' },
        { value: 'inmuno', label: 'Hipoxemia en paciente inmunodeprimido' } ] },
      { name: 'spo2', id: 'ir-es-spo2', type: 'number', step: '1', label: 'Saturación de oxígeno actual (%)', placeholder: 'ej. 90', row: 'r1' },
      { name: 'fio2', id: 'ir-es-fio2', type: 'number', step: '1', label: 'Fracción inspirada estimada (%)', placeholder: 'ej. 50', row: 'r1' },
      { name: 'fr', id: 'ir-es-fr', type: 'number', step: '1', label: 'Frecuencia respiratoria (por minuto)', placeholder: 'ej. 32', row: 'r2' },
      { name: 'ph', id: 'ir-es-ph', type: 'number', step: '0.01', required: false, label: 'pH arterial (opcional)', placeholder: 'ej. 7.28', row: 'r2' },
      { name: 'trabajo', id: 'ir-es-tra', type: 'checkbox', label: 'Trabajo respiratorio importante: musculatura accesoria, tiraje o habla entrecortada' },
      { name: 'conciencia', id: 'ir-es-con', type: 'checkbox', label: 'Descenso del nivel de conciencia o incapacidad para proteger la via aérea' },
      { name: 'inestable', id: 'ir-es-ine', type: 'checkbox', label: 'Inestabilidad hemodinámica o arritmia mal tolerada' },
      { type: 'note', text: 'El índice ROX se calcula como la saturación dividida entre la fracción inspirada expresada en FRACCIÓN (una fracción inspirada del 80% son 0.80), y ese cociente dividido entre la frecuencia respiratoria. Aquí se introduce en porcentaje y la conversión es automática. Un valor de 4.88 o más a las 2, 6 y 12 horas de cánula de alto flujo predice éxito; por debajo, y sobre todo si desciende entre mediciones, anuncia fracaso y permite intubar antes del agotamiento. Esta herramienta orienta: la decisión de intubar es clínica y no espera a ningún número.' }
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
        detalle = 'El descenso del nivel de conciencia y la inestabilidad hemodinámica son indicaciones directas: no son candidatos a una prueba de soporte no invasivo.';
      } else if (v.escenario === 'epoc' && acidosis) {
        recomendacion = 'VENTILACIÓN NO INVASIVA';
        detalle = 'Acidosis respiratoria en un paciente hipercapnico: es la indicación con mejor evidencia de toda la medicina respiratoria, y reduce intubación, estancia y mortalidad. Gasometría de control en 30 a 60 minutos.';
      } else if (v.escenario === 'edema') {
        recomendacion = 'CPAP o VENTILACIÓN NO INVASIVA';
        detalle = 'La presión positiva reduce la precarga y la poscarga y mejora el reclutamiento alveolar: junto con el tratamiento farmacológico del edema, reduce la necesidad de intubación.';
      } else if (v.escenario === 'epoc') {
        recomendacion = 'OXÍGENO CONTROLADO con Venturi';
        detalle = 'Sin acidosis todavía, el objetivo es una saturación del 88 al 92% con fracción inspirada fija, evitando el exceso de oxígeno. Repetir la gasometría: si el pH baja de 7.35, pasar a ventilación no invasiva.';
      } else {
        recomendacion = 'CÁNULA NASAL DE ALTO FLUJO';
        detalle = v.escenario === 'inmuno'
          ? 'En el inmunodeprimido con hipoxemia es preferible al soporte no invasivo con mascarilla y evita las complicaciones de la intubación siempre que responda; el umbral para intubar debe ser bajo si no mejora.'
          : 'Es el soporte preferente en la hipoxemia pura. La ventilación no invasiva en este escenario tiene una tasa de fracaso alta y su uso prolongado se asocia a peor pronóstico.';
      }
      return { rox, recomendacion, detalle, intubar, acidosis, escenario: v.escenario,
        trabajo: !!v.trabajo, spo2: v.spo2, fio2: v.fio2, fr: v.fr };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: saturación de 30 a 100%, fracción inspirada de 21 a 100%, frecuencia respiratoria de 5 a 80 y pH de 6.5 a 7.8.';
      let s = `<strong>Soporte sugerido: ${r.recomendacion}.</strong> ${r.detalle} `;
      s += `<strong>Índice ROX ${r.rox.toFixed(2)}</strong> (saturación ${r.spo2}%, fracción inspirada ${r.fio2}%, frecuencia ${r.fr}). `;
      if (!r.intubar) {
        s += r.rox >= 4.88
          ? 'Por encima de 4.88, que es el umbral asociado a éxito de la cánula de alto flujo. Reevaluar a las 2, 6 y 12 horas: lo que importa es la tendencia, no un valor aislado. '
          : '<strong style="color:#8c3a34;">Por debajo de 4.88</strong>, umbral asociado a fracaso del soporte no invasivo. Reevaluar en 1 a 2 horas y, si no mejora o el índice desciende, intubar sin esperar más. ';
        s += '<strong>Fijar ahora un limite de tiempo explícito</strong> y unos criterios objetivos de éxito, y dejarlos escritos para el equipo de guardia. ';
      }
      if (r.trabajo) s += '<strong>Hay trabajo respiratorio importante:</strong> ese dato pesa más que la saturación. Un paciente que satura bien a costa de esfuerzos enormes se esta produciendo una lesión pulmonar autoinfligida, y no hay que dejarse tranquilizar por el número del pulsioximetro. ';
      if (r.escenario === 'hipox' || r.escenario === 'inmuno') s += 'Vigilar el volumen corriente espirado si el dispositivo lo permite: por encima de 9 a 10 mL/kg de peso predicho indica esfuerzos peligrosos. ';
      s += 'Todo soporte no invasivo por insuficiencia respiratoria aguda exige un entorno con vigilancia continua y capacidad de intubar de inmediato.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `${r.recomendacion}, ROX ${r.rox.toFixed(2)}`
  },
  {
    key: 'hipercapnia-temporal', title: 'Hipercapnia aguda, crónica o agudizada', accent: '#8a6a1f',
    subtitle: 'El pH y el bicarbonato dicen cuanto tiempo lleva subida la PaCO2',
    incompleteMsg: 'Introduce pH, PaCO2 y bicarbonato.',
    fields: [
      { name: 'ph', id: 'ir-ht-ph', type: 'number', step: '0.01', label: 'pH arterial', placeholder: 'ej. 7.29', row: 'r1' },
      { name: 'paco2', id: 'ir-ht-co2', type: 'number', step: '1', label: 'PaCO2 (mmHg)', placeholder: 'ej. 68', row: 'r1' },
      { name: 'hco3', id: 'ir-ht-hco3', type: 'number', step: '0.1', label: 'Bicarbonato (mmol/L)', placeholder: 'ej. 31', row: 'r2' },
      { type: 'note', text: 'Reglas de compensación, partiendo de una PaCO2 de 40 mmHg y un bicarbonato de 24 mmol/L. AGUDA: por cada 10 mmHg de ascenso de la PaCO2, el bicarbonato sube alrededor de 1 mmol/L y el pH baja unas 0.08 unidades. CRÓNICA: el bicarbonato sube de 3.5 a 4 mmol/L y el pH baja unas 0.03. El riñón tarda de 3 a 5 días en completar la compensación, y esa lentitud es justo lo que permite fechar el cuadro con una sola gasometría.' }
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
      else if (v.ph < 7.35) patron = 'crónica agudizada';
      else patron = 'crónica compensada';
      return { patron, hco3Agudo, hco3Cronico, phAgudo, phCronico, ph: v.ph, paco2: v.paco2, hco3: v.hco3, acidemia: v.ph < 7.35 };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: pH de 6.5 a 7.8, PaCO2 de 5 a 200 mmHg y bicarbonato de 2 a 60 mmol/L.';
      if (r.sinHipercapnia) return `<strong>PaCO2 de ${r.paco2} mmHg: no hay hipercapnia</strong> (el umbral es 45 mmHg). Si el paciente esta hipoxemico, el mecanismo no es la hipoventilación: calcular el gradiente alveolo-arterial y comprobar la respuesta al oxígeno.`;
      let s = `<strong>Hipercapnia ${r.patron}.</strong> Con una PaCO2 de ${r.paco2} mmHg, el bicarbonato esperado sería de ${r.hco3Agudo.toFixed(1)} mmol/L si fuera aguda y de ${r.hco3Cronico.toFixed(1)} si fuera crónica; el medido es ${r.hco3}. El pH esperado sería ${r.phAgudo.toFixed(2)} en la aguda y ${r.phCronico.toFixed(2)} en la crónica; el medido es ${r.ph}. `;
      if (r.patron === 'aguda') {
        s += '<strong style="color:#8c3a34;">El riñón todavía no ha compensado</strong>, de modo que el ascenso de la PaCO2 lleva horas y no días. Buscar la causa aguda: sedantes u opioides, agotamiento del músculo respiratorio, broncoespasmo grave, neumotórax o lesión del sistema nervioso central. Si el pH es de 7.35 o menor, la ventilación no invasiva es tratamiento de primera línea y no debe demorarse.';
      } else if (r.patron === 'crónica agudizada') {
        s += '<strong style="color:#8c3a34;">Hay una descompensación aguda sobre una hipercapnia crónica</strong>: el bicarbonato alto demuestra que la PaCO2 llevaba tiempo elevada, y el pH bajo indica que ha subido más en los últimos días. Es el patrón típico de la exacerbación de EPOC. Ventilación no invasiva si el pH es 7.35 o menor, oxígeno controlado con objetivo del 88 al 92% y tratamiento del desencadenante.';
      } else {
        s += '<strong style="color:#3f6b52;">Compensación renal completa</strong>: la PaCO2 lleva al menos varios días elevada y el paciente esta adaptado. No hay que intentar normalizar la PaCO2, porque eso produciría alcalosis metabólica al quedar el bicarbonato sin contrapeso. El objetivo de saturación es del 88 al 92%, y conviene revaluar la necesidad de ventilación no invasiva domiciliaria en situación estable.';
      }
      if (r.acidemia) s += ' <strong>Hay acidemia</strong>: es lo que marca la urgencia, más que la cifra absoluta de PaCO2. Repetir la gasometría 30 a 60 minutos después de cualquier cambio de soporte, porque la respuesta del pH en esa primera hora es el mejor predictor de éxito.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : r.sinHipercapnia ? 'sin hipercapnia' : `hipercapnia ${r.patron}`
  },
  {
    key: 'criterios-ecmo', title: 'Criterios EOLIA de oxigenación extracorpórea', accent: '#7a1f3d',
    subtitle: 'Cuando plantear el circuito extracorpóreo en la SDRA refractaria',
    incompleteMsg: 'Introduce PaO2/FiO2, pH y PaCO2, y marca las horas de persistencia.',
    fields: [
      { type: 'note', text: 'Comprobacion PREVIA obligatoria. Antes de plantear el circuito extracorpóreo hay que haber optimizado de verdad la ventilación: la mayoría de los pacientes que parecen candidatos mejoran al hacerlo, y descartar causas corregibles evita traslados innecesarios.' },
      { name: 'protectora', id: 'ir-ec-prot', type: 'checkbox', label: 'Ventilación protectora aplicada: 4 a 8 mL/kg de peso predicho, meseta 30 o menos, presión de distensión menor de 15' },
      { name: 'prono', id: 'ir-ec-pro', type: 'checkbox', label: 'Decúbito prono realizado, sesiones de 16 horas o más' },
      { name: 'bloqueo', id: 'ir-ec-blo', type: 'checkbox', label: 'Bloqueo neuromuscular valorado o aplicado' },
      { name: 'corregibles', id: 'ir-ec-cor', type: 'checkbox', label: 'Descartados neumotórax, tubo obstruido, atelectasia masiva, sobrecarga de volumen y auto-PEEP' },
      { type: 'note', text: 'Criterios del ensayo EOLIA. Basta con cumplir uno de los tres.' },
      { name: 'pafi', id: 'ir-ec-pafi', type: 'number', step: '1', label: 'Relación PaO2/FiO2 actual', placeholder: 'ej. 62', row: 'r1' },
      { name: 'horas', id: 'ir-ec-hor', type: 'number', step: '1', label: 'Horas que lleva en esa situación', placeholder: 'ej. 7', row: 'r1' },
      { name: 'ph', id: 'ir-ec-ph', type: 'number', step: '0.01', label: 'pH arterial', placeholder: 'ej. 7.21', row: 'r2' },
      { name: 'paco2', id: 'ir-ec-co2', type: 'number', step: '1', label: 'PaCO2 (mmHg)', placeholder: 'ej. 68', row: 'r2' },
      { type: 'note', text: 'Contraindicaciones relativas que hay que valorar en el mismo momento: ventilación mecánica de más de 7 días con parámetros agresivos, enfermedad terminal o comorbilidad grave irreversible, contraindicación absoluta para anticoagular, lesión neurológica devastadora y edad muy avanzada con fragilidad. La derivación debe ser PRECOZ: trasladar a un paciente que ya esta en fallo multiorgánico anula el beneficio.' }
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
      if (c1) cuales.push('PaO2/FiO2 menor de 50 durante más de 3 horas');
      if (c2) cuales.push('PaO2/FiO2 menor de 80 durante más de 6 horas');
      if (c3) cuales.push('pH menor de 7.25 con PaCO2 de 60 mmHg o más durante más de 6 horas');
      const faltan = [];
      if (!v.protectora) faltan.push('ventilación protectora');
      if (!v.prono) faltan.push('decúbito prono');
      if (!v.corregibles) faltan.push('descarte de causas corregibles');
      if (!v.bloqueo) faltan.push('valoración del bloqueo neuromuscular');
      return { cumple, cuales, optimizado, faltan, pafi: v.pafi, horas: v.horas, ph: v.ph, paco2: v.paco2 };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: relación PaO2/FiO2 de 1 a 600, horas de 0 a 240, pH de 6.5 a 7.8 y PaCO2 de 5 a 200 mmHg.';
      let s = r.cumple
        ? `<strong style="color:#8c3a34;">Cumple criterios EOLIA</strong> (${r.cuales.join('; ')}). `
        : `<strong>No cumple los criterios EOLIA</strong> con los datos actuales (PaO2/FiO2 de ${r.pafi} durante ${r.horas} horas, pH ${r.ph} con PaCO2 de ${r.paco2} mmHg). `;
      if (!r.optimizado) {
        s += `<strong style="color:#8a6a1f;">Antes de nada, falta por confirmar: ${r.faltan.join(', ')}.</strong> Este es el paso que más se salta y el que más pacientes rescata sin ninguna terapia adicional: buena parte de los que parecen candidatos mejoran al aplicar bien la ventilación protectora y el decúbito prono, o al resolver un neumotórax, un tubo obstruido o una sobrecarga de volumen. `;
      } else {
        s += 'La ventilación esta optimizada y las causas corregibles descartadas, de modo que la situación puede considerarse realmente refractaria. ';
      }
      if (r.cumple) {
        s += '<strong>Contactar YA con el centro de referencia</strong> de oxigenación por membrana extracorpórea venovenosa. La derivación tardía, con el paciente ya en fallo multiorgánico, anula el beneficio: el momento de llamar es antes de que se necesite, no cuando ya no queda margen. Valorar a la vez las contraindicaciones relativas: ventilación agresiva de más de 7 días, comorbilidad grave irreversible, imposibilidad de anticoagular y lesión neurológica devastadora.';
      } else {
        s += 'Mantener y optimizar el tratamiento: ventilación protectora estricta, decúbito prono 16 horas o más si la relación es menor de 150, balance conservador de fluidos y tratamiento de la causa. Reevaluar de forma seriada, porque los criterios pueden cumplirse en horas.';
      }
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `${r.cumple ? 'cumple' : 'no cumple'} criterios EOLIA${r.optimizado ? '' : ' (ventilación sin optimizar)'}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
