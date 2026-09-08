// topics/hipertension-pulmonar/calculators.js
// 4 herramientas:
// - perfil-hemodinamico: calcula la resistencia vascular pulmonar y clasifica el perfil segun los
//   umbrales de la guia ESC/ERS 2022 (media mayor de 20 mmHg, resistencia mayor de 2 unidades Wood).
// - probabilidad-eco: probabilidad ecocardiografica de hipertension pulmonar, que decide a quien
//   se estudia mas y a quien se cateteriza.
// - riesgo-hap: estratificacion de riesgo en tres estratos al diagnostico y en cuatro en el
//   seguimiento (COMPERA 2.0), que es lo que gobierna el tratamiento.
// - vasorreactividad: interpretacion de la prueba aguda, con la advertencia de en quien se hace.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

function estratoFc(fc) {
  if (fc === '1' || fc === '2') return 1;
  if (fc === '3') return 3;
  return 4;
}
function estratoMarcha(m) {
  if (m > 440) return 1;
  if (m >= 320) return 2;
  if (m >= 165) return 3;
  return 4;
}
function estratoNtProBnp(n) {
  if (n < 300) return 1;
  if (n < 650) return 2;
  if (n <= 1100) return 3;
  return 4;
}

export const calculators = [
  {
    key: 'perfil-hemodinamico', title: 'Perfil hemodinamico (cateterismo derecho)', accent: '#7a2f5c',
    subtitle: 'Resistencia vascular pulmonar y clasificacion segun los umbrales de 2022',
    incompleteMsg: 'Introduce la presion arterial pulmonar media, la presion de enclavamiento y el gasto cardiaco.',
    fields: [
      { name: 'pap', id: 'hp-ph-pap', type: 'number', step: '1', label: 'Presion arterial pulmonar MEDIA (mmHg)', placeholder: 'ej. 42', row: 'r1' },
      { name: 'pcp', id: 'hp-ph-pcp', type: 'number', step: '1', label: 'Presion de ENCLAVAMIENTO pulmonar (mmHg)', placeholder: 'ej. 10', row: 'r1' },
      { name: 'gc', id: 'hp-ph-gc', type: 'number', step: '0.1', label: 'Gasto cardiaco (L/min)', placeholder: 'ej. 4.2', row: 'r2' },
      { name: 'pad', id: 'hp-ph-pad', type: 'number', step: '1', required: false, label: 'Presion auricular derecha media (mmHg, opcional)', placeholder: 'ej. 8', row: 'r2' },
      { name: 'svo2', id: 'hp-ph-svo2', type: 'number', step: '1', required: false, label: 'Saturacion venosa mixta de oxigeno (%, opcional)', placeholder: 'ej. 65' },
      { type: 'note', text: 'Resistencia vascular pulmonar = (presion media menos enclavamiento) dividido entre el gasto cardiaco, en unidades Wood. La guia ESC/ERS de 2022 bajo los dos umbrales: la presion media de 25 o mas a MAYOR DE 20 mmHg, y la resistencia de mayor de 3 a MAYOR DE 2 unidades Wood, porque los pacientes de esa franja intermedia ya tenian peor pronostico. La presion auricular derecha y la saturacion venosa mixta no entran en la definicion pero son dos de los marcadores hemodinamicos de riesgo mas potentes.' }
    ],
    compute(v) {
      if (v.pap == null || v.pcp == null || v.gc == null) return null;
      if (!(v.pap > 0 && v.pap <= 120) || !(v.pcp >= 0 && v.pcp <= 60) || !(v.gc > 0.5 && v.gc <= 20)) return { invalido: true };
      if (v.pad != null && !(v.pad >= 0 && v.pad <= 40)) return { invalido: true };
      if (v.svo2 != null && !(v.svo2 > 10 && v.svo2 <= 100)) return { invalido: true };
      const rvp = (v.pap - v.pcp) / v.gc;
      const hp = v.pap > 20;
      let perfil, grupos;
      if (!hp) {
        perfil = 'sin hipertension pulmonar';
        grupos = null;
      } else if (v.pcp <= 15 && rvp > 2) {
        perfil = 'PRECAPILAR';
        grupos = 'grupos 1, 3, 4 y parte del 5';
      } else if (v.pcp > 15 && rvp <= 2) {
        perfil = 'POSCAPILAR AISLADA';
        grupos = 'grupo 2';
      } else if (v.pcp > 15 && rvp > 2) {
        perfil = 'COMBINADA pre y poscapilar';
        grupos = 'grupo 2 con componente vascular a&#241;adido';
      } else {
        perfil = 'no clasificable (enclavamiento normal con resistencia de 2 o menos)';
        grupos = null;
      }
      const riesgoHemo = [];
      if (v.pad != null && v.pad > 14) riesgoHemo.push(`presion auricular derecha de ${v.pad} mmHg (mayor de 14)`);
      if (v.svo2 != null && v.svo2 < 60) riesgoHemo.push(`saturacion venosa mixta del ${v.svo2}% (menor del 60%)`);
      return { rvp, hp, perfil, grupos, riesgoHemo, pap: v.pap, pcp: v.pcp, gc: v.gc };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: presion media de 1 a 120 mmHg, enclavamiento de 0 a 60, gasto cardiaco de 0.5 a 20 L/min, presion auricular derecha de 0 a 40 y saturacion venosa del 10 al 100%.';
      let s = `<strong>Resistencia vascular pulmonar de ${r.rvp.toFixed(1)} unidades Wood.</strong> Con presion media de ${r.pap} mmHg y enclavamiento de ${r.pcp} mmHg: <strong>${r.perfil}</strong>. `;
      if (!r.hp) {
        s += 'Con una presion media de 20 mmHg o menos no hay hipertension pulmonar segun la definicion de 2022. Si el paciente tiene disnea de esfuerzo sin explicar, valorar el estudio hemodinamico CON EJERCICIO: una pendiente de presion media frente a gasto cardiaco mayor de 3 mmHg por litro y minuto define la hipertension pulmonar de esfuerzo, que se recupero en la guia de 2022.';
        return s;
      }
      s += `Corresponde a ${r.grupos}. `;
      if (r.perfil === 'PRECAPILAR') {
        s += 'El corazon izquierdo esta bien y el problema esta en el vaso pulmonar o en el pulmon. Antes de pensar en el grupo 1 hay que haber descartado enfermedad pulmonar (grupo 3) y, sobre todo, haber hecho la <strong>gammagrafia de ventilacion y perfusion</strong> para excluir el grupo 4, que es el unico potencialmente curable con cirugia. Solo el grupo 1 tiene tratamiento vasodilatador especifico establecido.';
      } else if (r.perfil === 'POSCAPILAR AISLADA') {
        s += 'Es transmision pasiva de la presion del corazon izquierdo. Se trata la cardiopatia: optimizar la insuficiencia cardiaca, corregir la valvulopatia, controlar la volemia y la frecuencia y tratar la apnea del sue&#241;o. <strong style="color:#8c3a34;">Los vasodilatadores pulmonares estan contraindicados</strong>: aumentan el flujo hacia un ventriculo izquierdo que no puede manejarlo y precipitan edema pulmonar.';
      } else if (r.perfil === 'COMBINADA pre y poscapilar') {
        s += 'La cardiopatia izquierda ha producido ademas remodelado del vaso pulmonar. Peor pronostico que la forma aislada, y <strong>sigue sin haber indicacion establecida de vasodilatador</strong>. Optimizar la cardiopatia y reevaluar; si la hipertension persiste desproporcionada, remitir a centro experto.';
      } else {
        s += 'Combinacion poco habitual que obliga a revisar la calidad de las mediciones, sobre todo el enclavamiento y el gasto cardiaco.';
      }
      if (r.riesgoHemo.length) s += ` <strong style="color:#8c3a34;">Marcadores hemodinamicos de riesgo alto presentes</strong>: ${r.riesgoHemo.join(' y ')}. Son de los predictores mas potentes y, en el grupo 1, empujan hacia el tratamiento mas intensivo y hacia la remision a trasplante.`;
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.hp ? `${r.perfil}, resistencia ${r.rvp.toFixed(1)} UW` : 'sin hipertension pulmonar')
  },
  {
    key: 'probabilidad-eco', title: 'Probabilidad ecocardiografica de hipertension pulmonar', accent: '#3d5a73',
    subtitle: 'Velocidad de regurgitacion tricuspidea mas otros signos',
    incompleteMsg: 'Selecciona la velocidad de regurgitacion tricuspidea y marca los signos presentes.',
    fields: [
      { name: 'vrt', id: 'hp-pe-vrt', type: 'select', label: 'Velocidad maxima de regurgitacion tricuspidea', options: [
        { value: '', label: 'Selecciona' },
        { value: 'baja', label: '2.8 m/s o menor, o no medible' },
        { value: 'media', label: 'De 2.9 a 3.4 m/s' },
        { value: 'alta', label: 'Mayor de 3.4 m/s' } ] },
      { type: 'note', text: 'Categoria A, ventriculos: cociente entre area del ventriculo derecho y del izquierdo mayor de 1, aplanamiento del tabique interventricular con indice de excentricidad mayor de 1.1 en sistole o en diastole.' },
      { name: 'a', id: 'hp-pe-a', type: 'checkbox', label: 'Signos de la categoria A (ventriculos)' },
      { type: 'note', text: 'Categoria B, arteria pulmonar: tiempo de aceleracion en el tracto de salida derecho menor de 105 ms o muesca mesosistolica, velocidad de la insuficiencia pulmonar protodiastolica mayor de 2.2 m/s, diametro de la arteria pulmonar mayor que el de la aorta o mayor de 25 mm.' },
      { name: 'b', id: 'hp-pe-b', type: 'checkbox', label: 'Signos de la categoria B (arteria pulmonar)' },
      { type: 'note', text: 'Categoria C, vena cava y auricula derecha: vena cava inferior mayor de 21 mm con colapso inspiratorio reducido, area de la auricula derecha en telesistole mayor de 18 cm2.' },
      { name: 'c', id: 'hp-pe-c', type: 'checkbox', label: 'Signos de la categoria C (vena cava y auricula derecha)' },
      { type: 'note', text: 'Hacen falta signos de AL MENOS DOS de las tres categorias para que cuenten como "otros signos". La ecocardiografia ESTIMA la probabilidad, no mide la presion ni establece el diagnostico: sirve para decidir a quien se estudia mas y a quien se cateteriza. Una ventana mala, frecuente en el paciente con enfisema u obesidad, la hace poco fiable en los dos sentidos.' }
    ],
    compute(v) {
      if (!v.vrt) return null;
      const categorias = (v.a ? 1 : 0) + (v.b ? 1 : 0) + (v.c ? 1 : 0);
      const otrosSignos = categorias >= 2;
      let prob;
      if (v.vrt === 'alta') prob = 'ALTA';
      else if (v.vrt === 'media') prob = otrosSignos ? 'ALTA' : 'INTERMEDIA';
      else prob = otrosSignos ? 'INTERMEDIA' : 'BAJA';
      return { prob, categorias, otrosSignos, vrt: v.vrt };
    },
    format: r => {
      let s = `<strong>Probabilidad ecocardiografica ${r.prob}</strong> de hipertension pulmonar. Signos presentes en ${r.categorias} de las 3 categorias${r.otrosSignos ? ', que cuentan como otros signos' : ', insuficientes para contar como otros signos (hacen falta dos categorias)'}. `;
      if (r.prob === 'BAJA') {
        s += 'Buscar otras causas de la disnea. Si la sospecha clinica es alta pese a todo (esclerosis sistemica, antecedente de embolia pulmonar, historia familiar o portador de mutacion conocida), no cerrar el caso aqui: repetir el estudio o pasar a pruebas adicionales, porque en la ventana mala el ecocardiograma infravalora.';
      } else if (r.prob === 'INTERMEDIA') {
        s += 'Continuar el estudio buscando PRIMERO las causas frecuentes: cardiopatia izquierda (grupo 2) y enfermedad pulmonar o hipoxia (grupo 3), con funcion pulmonar, gasometria, tomografia y valoracion cardiologica. Si se identifican y explican el cuadro, se tratan y ahi termina el algoritmo.';
      } else {
        s += 'Continuar el estudio de forma decidida. Descartar los grupos 2 y 3, y solicitar <strong>gammagrafia de ventilacion y perfusion</strong>, que es obligatoria porque descarta el grupo 4, el unico potencialmente curable. Si persiste la sospecha de grupo 1 o 4, remitir a centro experto ANTES del cateterismo.';
      }
      s += ' <strong>Recordar</strong>: esto es una probabilidad, no un diagnostico. El diagnostico y la clasificacion del perfil hemodinamico requieren cateterismo cardiaco derecho.';
      return s;
    },
    fragment: r => `probabilidad ecocardiografica ${r.prob}`
  },
  {
    key: 'riesgo-hap', title: 'Estratificacion de riesgo en la hipertension arterial pulmonar', accent: '#3f6b52',
    subtitle: 'Tres estratos al diagnostico y cuatro en el seguimiento',
    incompleteMsg: 'Selecciona el momento y la clase funcional, e introduce la marcha de 6 minutos y el peptido natriuretico.',
    fields: [
      { name: 'momento', id: 'hp-rh-mom', type: 'select', label: 'Momento de la valoracion', options: [
        { value: '', label: 'Selecciona' },
        { value: 'dx', label: 'Al diagnostico (tres estratos)' },
        { value: 'seg', label: 'En el seguimiento (cuatro estratos)' } ] },
      { name: 'fc', id: 'hp-rh-fc', type: 'select', label: 'Clase funcional de la Organizacion Mundial de la Salud', options: [
        { value: '', label: 'Selecciona' },
        { value: '1', label: 'I: sin limitacion de la actividad fisica' },
        { value: '2', label: 'II: limitacion leve, sintomas con actividad ordinaria' },
        { value: '3', label: 'III: limitacion marcada, sintomas con actividad menor de la ordinaria' },
        { value: '4', label: 'IV: sintomas en reposo o signos de fallo derecho' } ] },
      { name: 'marcha', id: 'hp-rh-m6m', type: 'number', step: '1', label: 'Marcha de 6 minutos (metros)', placeholder: 'ej. 380', row: 'r1' },
      { name: 'ntprobnp', id: 'hp-rh-bnp', type: 'number', step: '1', label: 'NT-proBNP (ng/L)', placeholder: 'ej. 780', row: 'r1' },
      { type: 'note', text: 'Umbrales de NT-proBNP: menos de 300 riesgo bajo, de 300 a 650 bajo-intermedio, de 650 a 1100 alto-intermedio, mas de 1100 alto. Para el BNP los equivalentes aproximados son menos de 50, de 50 a 800 y mas de 800. Marcha de 6 minutos: mas de 440 metros riesgo bajo, de 320 a 440 bajo-intermedio, de 165 a 319 alto-intermedio, menos de 165 alto.' },
      { name: 'derrame', id: 'hp-rh-der', type: 'checkbox', label: 'Derrame pericardico en el ecocardiograma' },
      { name: 'sincope', id: 'hp-rh-sinc', type: 'checkbox', label: 'Sincope o presincope de esfuerzo' },
      { type: 'note', text: 'El objetivo del tratamiento en la hipertension arterial pulmonar NO es una cifra de presion sino ALCANZAR Y MANTENER EL RIESGO BAJO. Por eso se reestratifica en cada revision, cada 3 a 6 meses, y si el paciente no ha llegado a riesgo bajo se escala el tratamiento en lugar de esperar. Esta calculadora usa las tres variables nucleares; el derrame pericardico y el sincope se recogen aparte porque, aunque no entran en la media, son marcadores potentes que empujan hacia el estrato superior.' }
    ],
    compute(v) {
      if (!v.momento || !v.fc || v.marcha == null || v.ntprobnp == null) return null;
      if (!(v.marcha >= 0 && v.marcha <= 1000) || !(v.ntprobnp >= 0 && v.ntprobnp <= 100000)) return { invalido: true };
      const eFc = estratoFc(v.fc);
      const eM = estratoMarcha(v.marcha);
      const eB = estratoNtProBnp(v.ntprobnp);
      const media = (eFc + eM + eB) / 3;
      const estrato4 = Math.round(media);
      const nombres4 = { 1: 'BAJO', 2: 'BAJO-INTERMEDIO', 3: 'ALTO-INTERMEDIO', 4: 'ALTO' };
      let riesgo3;
      if (media < 1.5) riesgo3 = 'BAJO';
      else if (media < 3.5) riesgo3 = 'INTERMEDIO';
      else riesgo3 = 'ALTO';
      const riesgo = v.momento === 'dx' ? riesgo3 : nombres4[estrato4];
      const marcadores = [];
      if (v.derrame) marcadores.push('derrame pericardico');
      if (v.sincope) marcadores.push('sincope o presincope de esfuerzo');
      return { momento: v.momento, riesgo, riesgo3, estrato4, eFc, eM, eB, media, marcadores, fc: v.fc, marcha: v.marcha, ntprobnp: v.ntprobnp };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: marcha de 0 a 1000 metros y NT-proBNP de 0 a 100000 ng/L.';
      let s = `<strong>Riesgo ${r.riesgo}.</strong> Clase funcional ${['', 'I', 'II', 'III', 'IV'][+r.fc]} (estrato ${r.eFc}), marcha de ${r.marcha} metros (estrato ${r.eM}) y NT-proBNP de ${r.ntprobnp} ng/L (estrato ${r.eB}). `;
      if (r.momento === 'dx') {
        if (r.riesgo === 'BAJO' || r.riesgo === 'INTERMEDIO') {
          s += '<strong>Tratamiento inicial: DOBLE TERAPIA ORAL</strong> con antagonista del receptor de la endotelina mas inhibidor de la fosfodiesterasa 5. La monoterapia ha quedado reservada a casos muy concretos, como el paciente mayor con comorbilidad cardiopulmonar o el vasorreactivo.';
        } else {
          s += '<strong style="color:#8c3a34;">Riesgo ALTO: triple terapia inicial que incluya PROSTACICLINA PARENTERAL</strong>, y remision inmediata a trasplante pulmonar. No es momento de escalar poco a poco: la mortalidad al a&#241;o en este estrato supera el 20% y el tiempo perdido no se recupera.';
        }
      } else {
        if (r.riesgo === 'BAJO') {
          s += 'Objetivo terapeutico alcanzado. Mantener el tratamiento y seguir reestratificando cada 3 a 6 meses: el riesgo bajo hay que conservarlo, no solo alcanzarlo.';
        } else if (r.riesgo === 'BAJO-INTERMEDIO' || r.riesgo === 'ALTO-INTERMEDIO') {
          s += '<strong style="color:#8a6a1f;">No se ha alcanzado el riesgo bajo: hay que ESCALAR el tratamiento</strong>, no observar. A&#241;adir un tercer farmaco (selexipag o un analogo de prostaciclina), o cambiar el inhibidor de la fosfodiesterasa 5 por riociguat, y valorar sotatercept. En el estrato alto-intermedio, considerar ademas prostaciclina parenteral y remitir a trasplante.';
        } else {
          s += '<strong style="color:#8c3a34;">Riesgo ALTO en el seguimiento.</strong> Escalar a prostaciclina parenteral si no la lleva, revisar la adherencia y buscar un desencadenante (infeccion, arritmia, anemia, progresion). Remision urgente a trasplante y valoracion en centro experto.';
        }
      }
      if (r.marcadores.length) s += ` <strong>Marcadores adicionales de mal pronostico</strong>: ${r.marcadores.join(' y ')}. No entran en la media de los tres estratos, pero pesan: el derrame pericardico traduce presion auricular derecha elevada y el sincope de esfuerzo significa que el gasto cardiaco no puede aumentar. Ambos empujan hacia el estrato superior y hacia un tratamiento mas intensivo.`;
      s += ' Corregir ademas la ferropenia, que es muy frecuente y limita la capacidad de ejercicio, y revisar la anticoncepcion en la mujer en edad fertil.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `riesgo ${r.riesgo}`
  },
  {
    key: 'vasorreactividad', title: 'Prueba de vasorreactividad aguda', accent: '#8a6a1f',
    subtitle: 'Quien es candidato, que se considera positivo y que implica',
    incompleteMsg: 'Selecciona el tipo de hipertension arterial pulmonar e introduce las presiones y los gastos.',
    fields: [
      { name: 'tipo', id: 'hp-vr-tipo', type: 'select', label: 'Tipo de hipertension arterial pulmonar', options: [
        { value: '', label: 'Selecciona' },
        { value: 'idio', label: 'Idiopatica, hereditaria o inducida por farmacos' },
        { value: 'asoc', label: 'Asociada (conectivopatia, VIH, portopulmonar, cardiopatia congenita)' },
        { value: 'otro', label: 'Otro grupo (2, 3, 4 o 5)' } ] },
      { name: 'papPre', id: 'hp-vr-papp', type: 'number', step: '1', label: 'Presion pulmonar media BASAL (mmHg)', placeholder: 'ej. 55', row: 'r1' },
      { name: 'papPost', id: 'hp-vr-papo', type: 'number', step: '1', label: 'Presion pulmonar media TRAS el vasodilatador (mmHg)', placeholder: 'ej. 38', row: 'r1' },
      { name: 'gcPre', id: 'hp-vr-gcp', type: 'number', step: '0.1', label: 'Gasto cardiaco BASAL (L/min)', placeholder: 'ej. 4.0', row: 'r2' },
      { name: 'gcPost', id: 'hp-vr-gco', type: 'number', step: '0.1', label: 'Gasto cardiaco TRAS el vasodilatador (L/min)', placeholder: 'ej. 4.3', row: 'r2' },
      { type: 'note', text: 'Se realiza durante el cateterismo con oxido nitrico inhalado, epoprostenol o iloprost, que son de accion corta y reversibles. NUNCA se hace con antagonistas del calcio ni se prueban estos de forma empirica: en un paciente no vasorreactivo pueden producir hipotension grave y colapso hemodinamico. La prueba SOLO esta indicada en la forma idiopatica, hereditaria o inducida por farmacos.' }
    ],
    compute(v) {
      if (!v.tipo || v.papPre == null || v.papPost == null || v.gcPre == null || v.gcPost == null) return null;
      if (!(v.papPre > 0 && v.papPre <= 120) || !(v.papPost > 0 && v.papPost <= 120)) return { invalido: true };
      if (!(v.gcPre > 0.5 && v.gcPre <= 20) || !(v.gcPost > 0.5 && v.gcPost <= 20)) return { invalido: true };
      const descenso = v.papPre - v.papPost;
      const gcMantenido = v.gcPost >= v.gcPre;
      const positiva = descenso >= 10 && v.papPost <= 40 && gcMantenido;
      const indicada = v.tipo === 'idio';
      return { positiva, indicada, descenso, gcMantenido, tipo: v.tipo, papPost: v.papPost, papPre: v.papPre };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: presiones de 1 a 120 mmHg y gastos cardiacos de 0.5 a 20 L/min.';
      let s = `<strong>Descenso de la presion media de ${r.descenso.toFixed(0)} mmHg, hasta ${r.papPost} mmHg, con gasto cardiaco ${r.gcMantenido ? 'conservado o aumentado' : 'DISMINUIDO'}.</strong> `;
      if (!r.indicada) {
        s += '<strong style="color:#8c3a34;">Atencion: la prueba no esta indicada en este paciente.</strong> Solo se realiza en la hipertension arterial pulmonar idiopatica, hereditaria o inducida por farmacos. En las formas asociadas y en los grupos 2, 3, 4 y 5, un resultado aparentemente positivo NO justifica tratar con antagonistas del calcio, y hacerlo puede ser peligroso. ';
      }
      if (r.positiva) {
        s += '<strong style="color:#3f6b52;">Criterios de POSITIVIDAD cumplidos</strong> (descenso de 10 mmHg o mas hasta un valor absoluto de 40 mmHg o menor, con gasto conservado). ';
        if (r.indicada) {
          s += 'El paciente es candidato a <strong>antagonistas del calcio a dosis altas</strong>, que son eficaces en esta minoria (alrededor del 10% de las formas idiopaticas). Pero hay que reevaluar: <strong>solo la mitad de los respondedores agudos mantiene la respuesta al a&#241;o</strong>, de modo que se comprueba a los 3 a 6 meses que el paciente esta en clase funcional I o II con hemodinamica casi normal, y si no es asi se pasa al tratamiento especifico convencional.';
        }
      } else {
        s += '<strong>NO cumple los criterios de positividad.</strong> ';
        const faltan = [];
        if (r.descenso < 10) faltan.push('el descenso no alcanza los 10 mmHg');
        if (r.papPost > 40) faltan.push('la presion media final supera los 40 mmHg');
        if (!r.gcMantenido) faltan.push('el gasto cardiaco ha disminuido');
        s += `Motivo: ${faltan.join('; ')}. <strong style="color:#8c3a34;">No dar antagonistas del calcio</strong>: en el paciente no vasorreactivo producen hipotension, empeoramiento del fallo derecho y pueden precipitar un colapso. El tratamiento es el especifico segun el riesgo: doble terapia oral de inicio, o triple con prostaciclina parenteral si el riesgo es alto.`;
      }
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `prueba ${r.positiva ? 'positiva' : 'negativa'}${r.indicada ? '' : ' (no indicada en este tipo)'}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
