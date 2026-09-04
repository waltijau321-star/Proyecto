// topics/asma/calculators.js
// 4 herramientas:
// - control-gina: control sintomatico de las ultimas 4 semanas (4 preguntas) mas los factores de
//   riesgo futuro, que son una dimension INDEPENDIENTE del control.
// - act: test de control del asma (Nathan 2004), 5 items de 1 a 5.
// - reversibilidad: prueba broncodilatadora y variabilidad del flujo pico, las dos formas mas
//   accesibles de documentar la limitacion VARIABLE al flujo aereo.
// - gravedad-crisis: gravedad de la crisis asmatica segun GINA, con los signos de riesgo vital.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

export const calculators = [
  {
    key: 'control-gina', title: 'Control del asma (GINA) y riesgo futuro', accent: '#3f7a4a',
    subtitle: 'Las cuatro preguntas de las ultimas 4 semanas, mas los factores de riesgo de crisis',
    incompleteMsg: 'Responde las cuatro preguntas de control marcando las que correspondan y pulsa sobre cualquiera para calcular.',
    fields: [
      { name: 'evaluado', id: 'asma-cg-ev', type: 'select', label: 'Periodo valorado', options: [
        { value: '', label: 'Selecciona' },
        { value: '4s', label: 'Ultimas 4 semanas' } ] },
      { type: 'note', text: 'Control sintomatico. Marca cada situacion que se haya dado en las ultimas 4 semanas.' },
      { name: 'diurnos', id: 'asma-cg-diu', type: 'checkbox', label: 'Sintomas diurnos mas de dos veces por semana' },
      { name: 'nocturnos', id: 'asma-cg-noc', type: 'checkbox', label: 'Algun despertar nocturno a causa del asma' },
      { name: 'rescate', id: 'asma-cg-res', type: 'checkbox', label: 'Uso del rescate mas de dos veces por semana (sin contar el previo al ejercicio)' },
      { name: 'actividad', id: 'asma-cg-act', type: 'checkbox', label: 'Limitacion de la actividad por el asma' },
      { type: 'note', text: 'Riesgo futuro de exacerbacion. Es una dimension INDEPENDIENTE: un paciente con pocos sintomas puede estar en alto riesgo.' },
      { name: 'intubado', id: 'asma-cg-int', type: 'checkbox', label: 'Intubacion o ingreso en cuidados intensivos por asma en cualquier momento' },
      { name: 'ingreso', id: 'asma-cg-ing', type: 'checkbox', label: 'Ingreso o visita a urgencias por asma en el ultimo a&#241;o' },
      { name: 'sinCI', id: 'asma-cg-sci', type: 'checkbox', label: 'No usa corticoide inhalado, o lo usa con mala adherencia o mala tecnica' },
      { name: 'sabaAlto', id: 'asma-cg-sab', type: 'checkbox', label: 'Consume mas de un envase de rescate al mes' },
      { name: 'corticoOral', id: 'asma-cg-cor', type: 'checkbox', label: 'Uso actual o reciente de corticoide oral' },
      { name: 'fev1Bajo', id: 'asma-cg-fev', type: 'checkbox', label: 'FEV1 por debajo del 60% del predicho' },
      { name: 'psicosocial', id: 'asma-cg-psi', type: 'checkbox', label: 'Alergia alimentaria, problemas psicosociales o enfermedad psiquiatrica' },
      { type: 'note', text: 'El control mira hacia atras (las 4 semanas pasadas) y el riesgo hacia delante. Por eso las dos columnas se informan por separado y ninguna sustituye a la otra: la muerte por asma ocurre sobre todo en pacientes con factores de riesgo, no necesariamente en los mas sintomaticos.' }
    ],
    compute(v) {
      if (!v.evaluado) return null;
      const control = (v.diurnos ? 1 : 0) + (v.nocturnos ? 1 : 0) + (v.rescate ? 1 : 0) + (v.actividad ? 1 : 0);
      const riesgos = [];
      if (v.intubado) riesgos.push('intubacion o cuidados intensivos previos por asma');
      if (v.ingreso) riesgos.push('ingreso o urgencias en el ultimo a&#241;o');
      if (v.sinCI) riesgos.push('sin corticoide inhalado o con mala adherencia');
      if (v.sabaAlto) riesgos.push('mas de un envase de rescate al mes');
      if (v.corticoOral) riesgos.push('corticoide oral actual o reciente');
      if (v.fev1Bajo) riesgos.push('FEV1 por debajo del 60%');
      if (v.psicosocial) riesgos.push('alergia alimentaria o problemas psicosociales');
      const categoria = control === 0 ? 'bien controlada' : control <= 2 ? 'parcialmente controlada' : 'no controlada';
      return { control, categoria, riesgos, nRiesgos: riesgos.length, intubado: !!v.intubado, sinCI: !!v.sinCI, sabaAlto: !!v.sabaAlto };
    },
    format: r => {
      let s = `<strong>${r.control} de 4 respuestas afirmativas: asma ${r.categoria}.</strong> `;
      if (r.control === 0) s += 'Mantener el tratamiento actual y, si lleva 3 meses asi, valorar bajar de escalon reduciendo del 25 al 50% de la dosis, sin retirar nunca del todo el corticoide inhalado en el adulto. ';
      else if (r.control <= 2) s += 'Antes de subir de escalon hay que revisar cuatro cosas: que el diagnostico sea correcto, la tecnica del inhalador con el dispositivo real, la adherencia (con registros de dispensacion, no preguntando) y los factores modificables como tabaco, alergenos, exposicion laboral, obesidad, rinosinusitis y reflujo. ';
      else s += 'Revisar diagnostico, tecnica, adherencia y comorbilidades, y despues subir de escalon. Considerar un ciclo corto de corticoide oral si el deterioro es agudo, y citar a las 2 a 6 semanas para reevaluar. ';
      if (r.nRiesgos) {
        s += `<strong style="color:#8c3a34;">Riesgo futuro elevado:</strong> ${r.nRiesgos} factor${r.nRiesgos === 1 ? '' : 'es'} presente${r.nRiesgos === 1 ? '' : 's'} (${r.riesgos.join('; ')}). `;
        s += 'Esta dimension es independiente del control sintomatico: obliga a asegurar corticoide inhalado, plan de accion escrito, revision precoz y, si procede, derivacion a unidad especializada. ';
        if (r.intubado) s += '<strong>El antecedente de intubacion por asma</strong> es el factor de riesgo mas potente de muerte por asma y no caduca. ';
        if (r.sabaAlto) s += '<strong>Consumir mas de un envase de rescate al mes</strong> se asocia de forma consistente a exacerbaciones graves y a mortalidad. ';
        if (r.sinCI) s += '<strong>La ausencia de corticoide inhalado</strong> es el factor de riesgo mas facil de corregir de toda la lista. ';
      } else {
        s += 'Sin factores de riesgo futuro marcados. Conviene revisarlos en cada consulta, porque cambian con el tiempo.';
      }
      return s;
    },
    fragment: r => `asma ${r.categoria} (${r.control}/4), ${r.nRiesgos} factor(es) de riesgo`
  },
  {
    key: 'act', title: 'Test de control del asma (ACT)', accent: '#2e6b7a',
    subtitle: 'Cinco preguntas autoadministradas sobre las ultimas 4 semanas',
    incompleteMsg: 'Responde las cinco preguntas.',
    fields: [
      { name: 'p1', id: 'asma-act-1', type: 'select', label: '1. En las ultimas 4 semanas, cuanto tiempo le impidio su asma hacer todo lo que queria en el trabajo, los estudios o la casa?', options: [
        { value: '', label: 'Selecciona' },
        { value: '1', label: 'Siempre (1)' },
        { value: '2', label: 'Casi siempre (2)' },
        { value: '3', label: 'Algunas veces (3)' },
        { value: '4', label: 'Pocas veces (4)' },
        { value: '5', label: 'Nunca (5)' } ] },
      { name: 'p2', id: 'asma-act-2', type: 'select', label: '2. Con que frecuencia le ha faltado el aire?', options: [
        { value: '', label: 'Selecciona' },
        { value: '1', label: 'Mas de una vez al dia (1)' },
        { value: '2', label: 'Una vez al dia (2)' },
        { value: '3', label: 'De 3 a 6 veces por semana (3)' },
        { value: '4', label: 'Una o dos veces por semana (4)' },
        { value: '5', label: 'Nunca (5)' } ] },
      { name: 'p3', id: 'asma-act-3', type: 'select', label: '3. Con que frecuencia le despertaron de noche o antes de lo habitual los sintomas del asma?', options: [
        { value: '', label: 'Selecciona' },
        { value: '1', label: '4 o mas noches por semana (1)' },
        { value: '2', label: '2 o 3 noches por semana (2)' },
        { value: '3', label: 'Una vez por semana (3)' },
        { value: '4', label: 'Una o dos veces en total (4)' },
        { value: '5', label: 'Nunca (5)' } ] },
      { name: 'p4', id: 'asma-act-4', type: 'select', label: '4. Con que frecuencia uso su inhalador de rescate?', options: [
        { value: '', label: 'Selecciona' },
        { value: '1', label: '3 o mas veces al dia (1)' },
        { value: '2', label: 'Una o dos veces al dia (2)' },
        { value: '3', label: 'De 2 a 3 veces por semana (3)' },
        { value: '4', label: 'Una vez por semana o menos (4)' },
        { value: '5', label: 'Nunca (5)' } ] },
      { name: 'p5', id: 'asma-act-5', type: 'select', label: '5. Como calificaria el control de su asma en las ultimas 4 semanas?', options: [
        { value: '', label: 'Selecciona' },
        { value: '1', label: 'Nada controlada (1)' },
        { value: '2', label: 'Mal controlada (2)' },
        { value: '3', label: 'Algo controlada (3)' },
        { value: '4', label: 'Bien controlada (4)' },
        { value: '5', label: 'Totalmente controlada (5)' } ] },
      { type: 'note', text: 'La puntuacion va de 5 a 25. Un cambio de 3 puntos es clinicamente relevante. El ACT mide lo mismo que las cuatro preguntas de GINA pero de forma cuantitativa y autoadministrada, lo que lo hace comodo para seguimiento a distancia. Ninguno de los dos mide el RIESGO FUTURO de exacerbacion, que hay que valorar aparte.' }
    ],
    compute(v) {
      const vals = [v.p1, v.p2, v.p3, v.p4, v.p5];
      if (vals.some(x => !x)) return null;
      const nums = vals.map(Number);
      const total = nums.reduce((a, b) => a + b, 0);
      const categoria = total >= 20 ? 'bien controlada' : total >= 16 ? 'no bien controlada' : 'muy mal controlada';
      const peor = nums.indexOf(Math.min(...nums)) + 1;
      return { total, categoria, nums, peor };
    },
    format: r => {
      let s = `<strong>ACT ${r.total} de 25 puntos: asma ${r.categoria}.</strong> Desglose: actividad ${r.nums[0]}, disnea ${r.nums[1]}, despertares ${r.nums[2]}, rescate ${r.nums[3]}, percepcion global ${r.nums[4]}. `;
      if (r.total >= 20) s += 'Mantener el tratamiento y, tras 3 meses estable, valorar bajar de escalon reduciendo del 25 al 50% de la dosis sin retirar el corticoide inhalado. ';
      else if (r.total >= 16) s += 'Revisar diagnostico, tecnica del inhalador, adherencia y comorbilidades antes de subir de escalon: en la mayoria de los pacientes el problema esta ahi y no en la potencia del tratamiento. ';
      else s += '<strong>Control muy pobre.</strong> Revisar todo lo anterior, subir de escalon, valorar un ciclo corto de corticoide oral si el deterioro es agudo y citar a las 2 a 6 semanas. Si persiste pese a dosis altas bien tomadas, derivar para valorar asma grave. ';
      if (r.nums[3] <= 2) s += '<strong>El uso frecuente del rescate</strong> es el item de mayor valor pronostico de los cinco: se asocia a exacerbaciones graves y a mortalidad, y obliga a asegurar que el paciente lleva corticoide inhalado. ';
      s += `El item peor puntuado es el ${r.peor}, y suele ser el mejor punto de partida para la conversacion con el paciente.`;
      return s;
    },
    fragment: r => `ACT ${r.total}: ${r.categoria}`
  },
  {
    key: 'reversibilidad', title: 'Reversibilidad y variabilidad del flujo aereo', accent: '#5b4a86',
    subtitle: 'Prueba broncodilatadora y amplitud diurna del flujo espiratorio pico',
    incompleteMsg: 'Introduce el FEV1 antes y despues del broncodilatador. Los dos campos de flujo pico son opcionales.',
    fields: [
      { name: 'pre', id: 'asma-rev-pre', type: 'number', step: '10', label: 'FEV1 ANTES del broncodilatador (mL)', placeholder: 'ej. 2100', row: 'r1' },
      { name: 'post', id: 'asma-rev-post', type: 'number', step: '10', label: 'FEV1 DESPUES del broncodilatador (mL)', placeholder: 'ej. 2480', row: 'r1' },
      { type: 'note', text: 'Se miden 10 a 15 minutos despues de 200 a 400 microgramos de salbutamol. Para que la prueba valga, el paciente debe llegar sin broncodilatador de accion corta en las 4 horas previas ni de larga duracion en las 24 a 36 horas previas.' },
      { name: 'pefMax', id: 'asma-rev-max', type: 'number', step: '5', required: false, label: 'Flujo pico MAXIMO del dia (L/min, opcional)', placeholder: 'ej. 420', row: 'r2' },
      { name: 'pefMin', id: 'asma-rev-min', type: 'number', step: '5', required: false, label: 'Flujo pico MINIMO del dia (L/min, opcional)', placeholder: 'ej. 340', row: 'r2' },
      { type: 'note', text: 'El criterio diagnostico de GINA es la MEDIA de la amplitud diurna a lo largo de al menos 2 semanas, con dos medidas diarias. Esta calculadora da la amplitud de un dia: sirve para ir anotandola, no para diagnosticar con un solo dato.' }
    ],
    compute(v) {
      if (v.pre == null || v.post == null) return null;
      if (!(v.pre > 100 && v.pre < 8000) || !(v.post > 100 && v.post < 8000)) return { invalido: true };
      const deltaMl = v.post - v.pre;
      const deltaPct = (deltaMl / v.pre) * 100;
      const positiva = deltaPct > 12 && deltaMl > 200;
      let pefAmp = null;
      if (v.pefMax != null && v.pefMin != null) {
        if (!(v.pefMax > 40 && v.pefMax < 900) || !(v.pefMin > 20 && v.pefMin <= v.pefMax)) return { invalido: true };
        pefAmp = ((v.pefMax - v.pefMin) / ((v.pefMax + v.pefMin) / 2)) * 100;
      }
      return { deltaMl, deltaPct, positiva, pefAmp };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: FEV1 en mL (entre 100 y 8000), flujo pico en L/min y con el maximo no menor que el minimo.';
      let s = `<strong>Cambio del FEV1: ${r.deltaMl > 0 ? '+' : ''}${Math.round(r.deltaMl)} mL (${r.deltaPct > 0 ? '+' : ''}${r.deltaPct.toFixed(1)}%).</strong> `;
      if (r.positiva) {
        s += '<strong style="color:#3f6b52;">Prueba broncodilatadora POSITIVA</strong> (mas del 12% Y mas de 200 mL): documenta limitacion variable al flujo aereo y, con una historia compatible, confirma el asma. Conviene dejar constancia del valor en la historia, porque despues de meses de corticoide inhalado ya no se podra repetir con el mismo resultado.';
      } else {
        s += '<strong>Prueba broncodilatadora negativa</strong> con los criterios actuales (hacen falta mas del 12% Y mas de 200 mL). <strong>No descarta el asma</strong>: se repite en un dia sintomatico, tras retirar el broncodilatador de larga duracion, o se busca la variabilidad por otra via (flujo pico durante 2 semanas, respuesta a 4 semanas de corticoide inhalado, prueba de ejercicio o provocacion bronquial).';
      }
      if (r.pefAmp !== null) {
        s += ` <strong>Amplitud diurna del flujo pico: ${r.pefAmp.toFixed(1)}%.</strong> `;
        s += r.pefAmp > 10
          ? 'Por encima del 10% en el adulto, que es el umbral diagnostico si se mantiene como MEDIA a lo largo de 2 semanas con dos medidas diarias.'
          : 'Por debajo del 10%, el umbral del adulto. Un solo dia normal no significa nada: hay que completar las 2 semanas de registro antes de concluir.';
      }
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `FEV1 ${r.deltaPct > 0 ? '+' : ''}${r.deltaPct.toFixed(1)}%, prueba ${r.positiva ? 'positiva' : 'negativa'}`
  },
  {
    key: 'gravedad-crisis', title: 'Gravedad de la crisis asmatica', accent: '#8c3a34',
    subtitle: 'Clasificacion de GINA y conducta inmediata',
    incompleteMsg: 'Introduce frecuencia respiratoria, frecuencia cardiaca y saturacion, y selecciona como habla el paciente.',
    fields: [
      { name: 'habla', id: 'asma-gc-habla', type: 'select', label: 'Como habla el paciente', options: [
        { value: '', label: 'Selecciona' },
        { value: 'frases', label: 'Con frases completas' },
        { value: 'palabras', label: 'Con palabras sueltas' } ] },
      { name: 'fr', id: 'asma-gc-fr', type: 'number', step: '1', label: 'Frecuencia respiratoria (por minuto)', placeholder: 'ej. 32', row: 'r1' },
      { name: 'fc', id: 'asma-gc-fc', type: 'number', step: '1', label: 'Frecuencia cardiaca (latidos por minuto)', placeholder: 'ej. 126', row: 'r1' },
      { name: 'spo2', id: 'asma-gc-spo2', type: 'number', step: '1', label: 'Saturacion de oxigeno en aire ambiente (%)', placeholder: 'ej. 89', row: 'r2' },
      { name: 'pef', id: 'asma-gc-pef', type: 'number', step: '1', required: false, label: 'Flujo pico (% del mejor valor personal, opcional)', placeholder: 'ej. 45', row: 'r2' },
      { name: 'accesoria', id: 'asma-gc-acc', type: 'checkbox', label: 'Uso de musculatura accesoria, agitacion o posicion inclinada hacia delante' },
      { type: 'note', text: 'Los tres siguientes son SIGNOS DE RIESGO VITAL: cualquiera de ellos clasifica la crisis como tal, con independencia del resto de las constantes.' },
      { name: 'conciencia', id: 'asma-gc-conc', type: 'checkbox', label: 'Somnolencia, confusion o agotamiento' },
      { name: 'silente', id: 'asma-gc-sil', type: 'checkbox', label: 'Torax silente en la auscultacion' },
      { name: 'paco2', id: 'asma-gc-co2', type: 'checkbox', label: 'PaCO2 normal o en ascenso en la gasometria' },
      { type: 'note', text: 'En plena crisis el paciente hiperventila y la PaCO2 debe estar BAJA. Una PaCO2 normal o alta significa que el musculo respiratorio ya no puede mantener la hiperventilacion: es un signo de alarma, no de mejoria. Lo mismo vale para el torax silente, que indica que no se mueve aire suficiente para producir sibilancias.' }
    ],
    compute(v) {
      if (!v.habla || v.fr == null || v.fc == null || v.spo2 == null) return null;
      if (!(v.fr >= 5 && v.fr <= 80) || !(v.fc >= 20 && v.fc <= 250) || !(v.spo2 >= 30 && v.spo2 <= 100)) return { invalido: true };
      if (v.pef != null && !(v.pef >= 0 && v.pef <= 150)) return { invalido: true };
      const vital = !!v.conciencia || !!v.silente || !!v.paco2;
      const criteriosGraves = [];
      if (v.habla === 'palabras') criteriosGraves.push('habla con palabras sueltas');
      if (v.fr > 30) criteriosGraves.push('frecuencia respiratoria mayor de 30');
      if (v.fc > 120) criteriosGraves.push('frecuencia cardiaca mayor de 120');
      if (v.spo2 < 90) criteriosGraves.push('saturacion menor del 90%');
      if (v.pef != null && v.pef <= 50) criteriosGraves.push('flujo pico del 50% o menos');
      if (v.accesoria) criteriosGraves.push('musculatura accesoria o agitacion');
      const categoria = vital ? 'de RIESGO VITAL' : criteriosGraves.length ? 'GRAVE' : 'leve o moderada';
      return { categoria, vital, criteriosGraves, n: criteriosGraves.length, spo2: v.spo2, pef: v.pef == null ? null : v.pef, paco2: !!v.paco2, silente: !!v.silente };
    },
    format: r => {
      if (r.invalido) return 'Revisa las constantes: frecuencia respiratoria de 5 a 80, frecuencia cardiaca de 20 a 250, saturacion de 30 a 100% y flujo pico de 0 a 150% del mejor personal.';
      let s = `<strong>Crisis ${r.categoria}.</strong> `;
      if (r.n) s += `Criterios de gravedad presentes: ${r.criteriosGraves.join('; ')}. `;
      s += '<strong>Tratamiento inmediato en toda crisis:</strong> salbutamol repetido en camara espaciadora o nebulizado, <strong>corticoide sistemico en la primera hora</strong> (prednisona 40 a 50 mg al dia durante 5 a 7 dias, sin pauta descendente) y oxigeno con objetivo de saturacion del <strong>93 al 95%</strong> en el adulto (94 al 98% en la gestante). ';
      if (r.vital) {
        s += '<strong style="color:#8c3a34;">Hay signos de riesgo vital: avisar a cuidados intensivos AHORA.</strong> ';
        if (r.paco2) s += 'Una PaCO2 normal o en ascenso significa que el paciente ya no puede mantener la hiperventilacion y anuncia el fracaso ventilatorio. ';
        if (r.silente) s += 'El torax silente no es mejoria: es ausencia de flujo aereo suficiente para generar sibilancias. ';
        s += 'Preparar la intubacion sin demorarla, con ketamina como inductor por su efecto broncodilatador, y ventilar con volumen y frecuencia bajos, tiempo espiratorio largo e hipercapnia permisiva para evitar el barotrauma.';
      } else if (r.categoria === 'GRAVE') {
        s += 'A&#241;adir <strong>bromuro de ipratropio</strong> al salbutamol y valorar <strong>sulfato de magnesio 2 g intravenosos en 20 minutos</strong> si no responde al tratamiento inicial. Reevaluar con clinica y flujo pico a la hora, y solicitar gasometria si hay agotamiento o la saturacion no remonta.';
      } else {
        s += 'Reevaluar a la hora con clinica y flujo pico. Puede darse el alta si el flujo pico supera el 60 al 80% del mejor valor personal y el paciente se mantiene estable al menos 1 hora tras el ultimo broncodilatador.';
      }
      s += ' <strong>No</strong> dar antibiotico de rutina, <strong>no</strong> sedar y <strong>no</strong> usar aminofilina. <strong>Antes del alta, siempre</strong>: iniciar o subir el corticoide inhalado, entregar plan de accion escrito, comprobar la tecnica del inhalador con el dispositivo real y citar en 2 a 7 dias.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `crisis ${r.categoria}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
