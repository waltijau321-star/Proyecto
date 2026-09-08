// topics/bronquitis-aguda/calculators.js
// 4 herramientas:
// - antibiotico-tos-aguda: la decision central del tema, que separa la bronquitis aguda del
//   adulto sano (sin antibiotico) de las excepciones concretas que si lo llevan.
// - radiografia-tos: los cuatro datos de cabecera que deciden si hace falta radiografia, con los
//   grupos en los que el umbral baja.
// - tos-ferina: sospecha clinica y eleccion de la prueba segun el tiempo de tos, mas la
//   profilaxis de contactos.
// - tos-cronica: ordena el estudio de la tos de mas de 8 semanas.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

export const calculators = [
  {
    key: 'antibiotico-tos-aguda', title: 'Antibiotico en la tos aguda?', accent: '#3f6b52',
    subtitle: 'La bronquitis aguda del adulto sano no lo lleva; las excepciones son concretas',
    incompleteMsg: 'Indica los dias de tos y marca las situaciones presentes. Si no hay ninguna, el resultado tambien es informativo.',
    fields: [
      { name: 'dias', id: 'ba-ab-d', type: 'number', step: '1', label: 'Dias de tos', placeholder: 'ej. 9', row: 'r1' },
      { name: 'neumonia', id: 'ba-ab-neu', type: 'checkbox', label: 'Constantes alteradas o auscultacion FOCAL (sospecha de neumonia)', row: 'r1' },
      { name: 'epoc', id: 'ba-ab-epoc', type: 'checkbox', label: 'EPOC con aumento de disnea, volumen y purulencia del esputo', row: 'r2' },
      { name: 'ferina', id: 'ba-ab-tf', type: 'checkbox', label: 'Sospecha de tos ferina: paroxismos, gallo, vomito postusigeno o contacto', row: 'r2' },
      { name: 'inmuno', id: 'ba-ab-inm', type: 'checkbox', label: 'Inmunodepresion relevante', row: 'r3' },
      { name: 'anciano', id: 'ba-ab-anc', type: 'checkbox', label: 'Anciano fragil o comorbilidad cardiorrespiratoria significativa', row: 'r3' },
      { name: 'esputo', id: 'ba-ab-esp', type: 'checkbox', label: 'El esputo es purulento (verde o amarillo)' },
      { type: 'note', text: 'En la bronquitis aguda del adulto sano los ensayos muestran una reduccion de aproximadamente medio dia de tos, a costa de efectos adversos, de seleccion de resistencias y de reforzar la expectativa de recibir antibiotico la proxima vez. La purulencia del esputo NO es un criterio: el color se debe a la mieloperoxidasa de los neutrofilos, que llegan igual en una infeccion virica.' }
    ],
    compute(v) {
      if (v.dias == null) return null;
      if (!(v.dias >= 0 && v.dias <= 400)) return { invalido: true };
      const razones = [];
      if (v.neumonia) razones.push('sospecha de NEUMONIA por constantes alteradas o auscultacion focal');
      if (v.epoc) razones.push('exacerbacion de EPOC que cumple los criterios de Anthonisen');
      if (v.ferina) razones.push('sospecha de TOS FERINA');
      if (v.inmuno) razones.push('inmunodepresion relevante');
      const cautela = !!v.anciano;
      const subaguda = v.dias >= 21;
      return { razones, indicado: razones.length > 0, cautela, subaguda, dias: v.dias, esputo: !!v.esputo, ferina: !!v.ferina, neumonia: !!v.neumonia };
    },
    format: r => {
      if (r.invalido) return 'Revisa el valor: los dias de tos deben estar entre 0 y 400.';
      let s = '';
      if (r.indicado) {
        s += `<strong style="color:#8c3a34;">SI hay una razon para tratar</strong>: ${r.razones.join('; ')}. Esto ya no es una bronquitis aguda de adulto sano y no se le aplica la regla general. `;
        if (r.neumonia) s += 'Ante sospecha de neumonia, lo primero es la RADIOGRAFIA y despues el antibiotico segun gravedad y factores de riesgo. ';
        if (r.ferina) s += 'En la tos ferina el macrolido corta la TRANSMISION mas que el curso clinico, y hay que a&#241;adir aislamiento durante 5 dias, declaracion y profilaxis de los contactos de riesgo. ';
      } else {
        s += '<strong style="color:#3f6b52;">NO esta indicado el antibiotico.</strong> Se trata de una bronquitis aguda de adulto sano, virica en mas del 90% de los casos. El beneficio del antibiotico aqui es de aproximadamente medio dia menos de tos, a costa de efectos adversos y de resistencias. ';
        s += '<br><strong>Lo que si se hace:</strong> nombrar el diagnostico (decir "es una bronquitis virica" funciona mejor que decir "no es nada"), explicar la duracion esperable, ofrecer tratamiento sintomatico y dejar una red de seguridad explicita sobre cuando volver. Valorar RECETA DIFERIDA si la presion es alta: reduce el consumo frente a la prescripcion inmediata sin empeorar la satisfaccion.';
      }
      if (r.esputo) {
        s += '<br><strong style="color:#8a6a1f;">El esputo purulento NO cambia la decision.</strong> El color se debe a la mieloperoxidasa de los neutrofilos, que acuden igual en una infeccion virica. Es el malentendido que mas recetas innecesarias genera, y conviene desmontarlo de forma explicita con el paciente.';
      }
      if (r.cautela && !r.indicado) {
        s += '<br><strong style="color:#8c5a2e;">Anciano fragil o comorbilidad significativa</strong>: aqui el umbral para pedir radiografia baja mucho, porque la fiebre y la taquipnea pueden faltar y una neumonia puede presentarse solo como confusion o caidas. Antes de cerrar la consulta sin antibiotico, conviene haber descartado la neumonia con imagen.';
      }
      if (r.subaguda) {
        s += `<br><strong style="color:#8a6a1f;">Lleva ${r.dias} dias de tos, es decir, ya no es tos aguda.</strong> Por encima de 3 semanas es tos SUBAGUDA: la mayoria son postinfecciosas, pero es justo la franja en la que hay que acordarse de la TOS FERINA, sobre todo si convive con lactantes o trabaja con ni&#241;os.`;
      } else if (!r.indicado) {
        s += `<br><span style="opacity:.8;">Lleva ${r.dias} dias de tos. Recordar que la media de duracion es de unas 3 SEMANAS: decirselo al paciente ahora evita la consulta de vuelta a los diez dias.</span>`;
      }
      return s;
    },
    fragment: r => r.invalido ? 'valor no valido' : (r.indicado ? `antibiotico indicado (${r.razones.length} razon${r.razones.length > 1 ? 'es' : ''})` : 'sin indicacion de antibiotico')
  },

  {
    key: 'radiografia-tos', title: 'Hace falta radiografia de torax?', accent: '#8c3a34',
    subtitle: 'Cuatro datos de cabecera deciden casi todo',
    incompleteMsg: 'Introduce la temperatura, la frecuencia cardiaca y la frecuencia respiratoria.',
    fields: [
      { name: 'temp', id: 'ba-rx-t', type: 'number', step: '0.1', label: 'Temperatura (grados centigrados)', placeholder: 'ej. 37.4', row: 'r1' },
      { name: 'fc', id: 'ba-rx-fc', type: 'number', step: '1', label: 'Frecuencia cardiaca (por minuto)', placeholder: 'ej. 88', row: 'r1' },
      { name: 'fr', id: 'ba-rx-fr', type: 'number', step: '1', label: 'Frecuencia respiratoria (por minuto)', placeholder: 'ej. 18', row: 'r2' },
      { name: 'spo2', id: 'ba-rx-sp', type: 'number', step: '1', required: false, label: 'Saturacion de oxigeno (%, opcional)', placeholder: 'ej. 97', row: 'r2' },
      { name: 'focal', id: 'ba-rx-fo', type: 'checkbox', label: 'Auscultacion FOCAL: crepitantes o soplo localizados', row: 'r3' },
      { name: 'riesgo', id: 'ba-rx-ri', type: 'checkbox', label: 'Edad avanzada, inmunodepresion, EPOC o insuficiencia cardiaca', row: 'r3' },
      { name: 'alarma', id: 'ba-rx-al', type: 'checkbox', label: 'Signos de alarma: hemoptisis, perdida de peso, disnea progresiva o disfonia' },
      { type: 'note', text: 'La frecuencia respiratoria es el dato que mejor discrimina y a la vez el que menos se mide: hay que contarla, no estimarla. En el anciano la fiebre y la taquipnea pueden faltar por completo y la neumonia puede presentarse solo como confusion o caidas, de modo que su ausencia no tranquiliza igual que en un adulto joven.' }
    ],
    compute(v) {
      if (v.temp == null || v.fc == null || v.fr == null) return null;
      if (!(v.temp > 30 && v.temp < 45)) return { invalido: true };
      if (!(v.fc > 20 && v.fc < 250)) return { invalido: true };
      if (!(v.fr > 4 && v.fr < 80)) return { invalido: true };
      if (v.spo2 != null && !(v.spo2 > 40 && v.spo2 <= 100)) return { invalido: true };
      const alterados = [];
      if (v.temp > 38) alterados.push(`temperatura de ${v.temp} grados`);
      if (v.fc > 100) alterados.push(`frecuencia cardiaca de ${v.fc}`);
      if (v.fr > 24) alterados.push(`frecuencia respiratoria de ${v.fr}`);
      if (v.focal) alterados.push('auscultacion focal');
      const hipoxemia = v.spo2 != null && v.spo2 < 94;
      const riesgo = !!v.riesgo;
      const alarma = !!v.alarma;
      const pedir = alterados.length > 0 || hipoxemia || riesgo || alarma;
      return { alterados, hipoxemia, riesgo, alarma, pedir, spo2: v.spo2, fr: v.fr };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: temperatura de 30 a 45 grados, frecuencia cardiaca de 20 a 250, frecuencia respiratoria de 4 a 80 y saturacion del 40 al 100%.';
      let s = '';
      if (!r.pedir) {
        s += '<strong style="color:#3f6b52;">Los cuatro datos de cabecera son normales.</strong> En un adulto por lo demas sano, la neumonia es MUY IMPROBABLE: no hace falta radiografia ni antibiotico. ';
        s += 'Lo que si hace falta es explicar que la tos dura una media de unas 3 semanas, ofrecer tratamiento sintomatico y dejar claro cuando volver: fiebre alta persistente, disnea, dolor toracico o empeoramiento.';
        s += `<br><span style="opacity:.75;">Nota sobre la frecuencia respiratoria de ${r.fr}: es el dato que mejor discrimina y el que menos se mide. Conviene haberla contado, no estimado.</span>`;
        return s;
      }
      s += '<strong style="color:#8c3a34;">Corresponde RADIOGRAFIA DE TORAX.</strong> ';
      if (r.alterados.length) s += `Datos alterados: ${r.alterados.join(', ')}. `;
      if (r.hipoxemia) s += `<br><strong style="color:#8c3a34;">Ademas hay HIPOXEMIA (saturacion del ${r.spo2}%)</strong>, que saca al paciente de la categoria de consulta por tos: hay que valorar oxigenoterapia, gasometria y la necesidad de atencion urgente, y pensar tambien en embolia pulmonar e insuficiencia cardiaca, no solo en neumonia.`;
      if (r.riesgo && !r.alterados.length) s += '<br><strong style="color:#8c5a2e;">El motivo aqui es el grupo de riesgo</strong>, no las constantes: en el anciano, el inmunodeprimido y el paciente con EPOC o insuficiencia cardiaca, la fiebre y la taquipnea pueden faltar y la clinica se solapa, de modo que unas constantes normales no descartan la neumonia igual que en un adulto joven.';
      else if (r.riesgo) s += '<br>Y ademas pertenece a un grupo de riesgo, en el que las constantes normales no tranquilizarian igual.';
      if (r.alarma) s += '<br><strong style="color:#8c3a34;">Hay signos de ALARMA</strong>: obligan a estudiar sea cual sea la duracion de la tos, y si la radiografia es normal y la sospecha persiste, a continuar con tomografia. El cambio del patron de tos en un fumador es la presentacion mas facil de pasar por alto del cancer de pulmon.';
      s += '<br><span style="opacity:.75;">Si la radiografia confirma neumonia, se maneja como tal: evaluacion de la gravedad y antibiotico segun el escenario, que ya es otro tema.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.pedir ? 'radiografia indicada' : 'sin indicacion de radiografia')
  },

  {
    key: 'tos-ferina', title: 'Sospecha y manejo de la tos ferina', accent: '#8a6a1f',
    subtitle: 'Que prueba pedir depende de cuanto lleva tosiendo',
    incompleteMsg: 'Introduce las semanas de tos y marca los datos clinicos presentes.',
    fields: [
      { name: 'semanas', id: 'ba-tf-s', type: 'number', step: '0.5', label: 'Semanas de tos', placeholder: 'ej. 3', row: 'r1' },
      { name: 'paroxismos', id: 'ba-tf-px', type: 'checkbox', label: 'Accesos PAROXISTICOS de tos', row: 'r1' },
      { name: 'gallo', id: 'ba-tf-ga', type: 'checkbox', label: 'Gallo inspiratorio', row: 'r2' },
      { name: 'vomito', id: 'ba-tf-vo', type: 'checkbox', label: 'Vomito despues del acceso de tos', row: 'r2' },
      { name: 'contacto', id: 'ba-tf-co', type: 'checkbox', label: 'Contacto conocido con un caso', row: 'r3' },
      { name: 'fiebre', id: 'ba-tf-fi', type: 'checkbox', label: 'Fiebre significativa durante el cuadro', row: 'r3' },
      { name: 'lactantes', id: 'ba-tf-la', type: 'checkbox', label: 'Convive con lactantes o con una embarazada en el tercer trimestre' },
      { type: 'note', text: 'En el ADULTO la tos ferina rara vez da el cuadro clasico del ni&#241;o: suele ser solo una tos persistente, seca y de predominio nocturno, sin fiebre. El vomito postusigeno y el gallo inspiratorio son los datos que mas aumentan la probabilidad, y la ausencia de tos paroxistica es la que mas la reduce. La fiebre significativa, en cambio, orienta en contra.' }
    ],
    compute(v) {
      if (v.semanas == null) return null;
      if (!(v.semanas >= 0 && v.semanas <= 104)) return { invalido: true };
      const aFavor = [];
      if (v.paroxismos) aFavor.push('accesos paroxisticos');
      if (v.gallo) aFavor.push('gallo inspiratorio');
      if (v.vomito) aFavor.push('vomito postusigeno');
      if (v.contacto) aFavor.push('contacto conocido');
      if (v.semanas >= 2) aFavor.push('tos de 2 semanas o mas');
      const enContra = [];
      if (v.fiebre) enContra.push('fiebre significativa');
      if (!v.paroxismos) enContra.push('ausencia de tos paroxistica');
      let prob;
      if (aFavor.length >= 3 && !v.fiebre) prob = 'ALTA';
      else if (aFavor.length >= 2) prob = 'INTERMEDIA';
      else prob = 'BAJA';
      const prueba = v.semanas <= 4 ? 'pcr' : 'serologia';
      return { prob, aFavor, enContra, prueba, semanas: v.semanas, lactantes: !!v.lactantes, cronica: v.semanas > 8 };
    },
    format: r => {
      if (r.invalido) return 'Revisa el valor: las semanas de tos deben estar entre 0 y 104.';
      let s = `<strong>Probabilidad ${r.prob} de tos ferina.</strong> `;
      if (r.aFavor.length) s += `A favor: ${r.aFavor.join(', ')}. `;
      if (r.enContra.length) s += `En contra: ${r.enContra.join(', ')}. `;
      s += '<br><strong>Prueba que corresponde por el tiempo de evolucion: </strong>';
      if (r.prueba === 'pcr') {
        s += `con ${r.semanas} semanas de tos, <strong style="color:#8a6a1f;">REACCION EN CADENA DE LA POLIMERASA</strong> en muestra nasofaringea. Su rendimiento es maximo en las primeras 3 a 4 semanas y cae despues, porque la bacteria desaparece aunque la tos persista por el da&#241;o ya causado.`;
      } else {
        s += `con ${r.semanas} semanas de tos, la reaccion en cadena de la polimerasa ya ha perdido rendimiento: corresponde <strong style="color:#8a6a1f;">SEROLOGIA</strong>, teniendo en cuenta el antecedente vacunal, que complica su interpretacion en vacunados recientes.`;
      }
      if (r.prob !== 'BAJA') {
        s += '<br><strong>Tratamiento:</strong> MACROLIDO (azitromicina, claritromicina o eritromicina) sin esperar el resultado si la sospecha es alta. Hay que explicar que corta la TRANSMISION pero apenas modifica el curso clinico si se da tarde, y que la tos puede durar semanas o meses porque se debe al da&#241;o ya causado. Aislamiento respiratorio durante los primeros 5 dias de tratamiento y DECLARACION del caso.';
      } else {
        s += '<br>Con probabilidad baja, antes de etiquetar el cuadro conviene revisar el resto de causas de tos en esta franja: postinfecciosa, que es la mas frecuente, asma, sindrome de tos de via aerea superior, reflujo y tos por inhibidor de la enzima convertidora.';
      }
      if (r.lactantes) {
        s += '<br><strong style="color:#8c3a34;">Convive con lactantes o con una embarazada en el tercer trimestre.</strong> Aqui esta el verdadero riesgo: el adulto pasa la enfermedad como una tos molesta, pero el lactante no vacunado puede tener apneas, hipertension pulmonar e insuficiencia respiratoria. Corresponde PROFILAXIS POSEXPOSICION con macrolido a los contactos de riesgo y comprobar la vacunacion, incluida la dosis del tercer trimestre del embarazo, que protege al recien nacido.';
      }
      if (r.cronica) {
        s += `<br><span style="opacity:.8;">Con ${r.semanas} semanas, la tos ya es CRONICA y el enfoque cambia: retirar tabaco e inhibidor de la enzima convertidora, hacer radiografia de torax y estudiar las tres causas principales.</span>`;
      }
      return s;
    },
    fragment: r => r.invalido ? 'valor no valido' : `probabilidad ${r.prob.toLowerCase()}, pedir ${r.prueba === 'pcr' ? 'reaccion en cadena de la polimerasa' : 'serologia'}`
  },

  {
    key: 'tos-cronica', title: 'Enfoque de la tos cronica', accent: '#3d5a73',
    subtitle: 'El orden importa: tabaco, farmaco, radiografia y despues las tres causas',
    incompleteMsg: 'Introduce las semanas de tos y marca lo que ya se ha hecho.',
    fields: [
      { name: 'semanas', id: 'ba-tc-s', type: 'number', step: '1', label: 'Semanas de tos', placeholder: 'ej. 14', row: 'r1' },
      { name: 'tabaco', id: 'ba-tc-tb', type: 'select', label: 'Tabaquismo', row: 'r1', options: [
        { v: 'no', t: 'No fuma ni ha fumado recientemente' },
        { v: 'si', t: 'Fumador activo' }
      ] },
      { name: 'ieca', id: 'ba-tc-ie', type: 'select', label: 'Inhibidor de la enzima convertidora', options: [
        { v: 'no', t: 'No lo toma ni lo ha tomado' },
        { v: 'si', t: 'Lo esta tomando' },
        { v: 'retirado', t: 'Se retiro hace menos de 4 semanas' },
        { v: 'retirado4', t: 'Se retiro hace mas de 4 semanas y la tos sigue' }
      ] },
      { name: 'rx', id: 'ba-tc-rx', type: 'select', label: 'Radiografia de torax', options: [
        { v: 'nohecha', t: 'No se ha hecho' },
        { v: 'normal', t: 'Hecha y normal' },
        { v: 'alterada', t: 'Hecha y con hallazgos' }
      ] },
      { name: 'alarma', id: 'ba-tc-al', type: 'checkbox', label: 'Signos de alarma: hemoptisis, perdida de peso, disnea progresiva o disfonia', row: 'r2' },
      { name: 'tratada', id: 'ba-tc-tr', type: 'checkbox', label: 'Ya se han probado las tres causas principales sin exito', row: 'r2' },
      { type: 'note', text: 'La tos por inhibidor de la enzima convertidora puede empezar meses despues de iniciar el farmaco y tarda en desaparecer HASTA 4 SEMANAS O MAS tras retirarlo. Darla por descartada antes de ese plazo es un error frecuente que lleva a estudios innecesarios. Y las tres causas principales COEXISTEN a menudo, por lo que una respuesta parcial no descarta ninguna.' }
    ],
    compute(v) {
      if (v.semanas == null) return null;
      if (!(v.semanas >= 0 && v.semanas <= 520)) return { invalido: true };
      const cronica = v.semanas > 8;
      const pasos = [];
      if (v.tabaco === 'si') pasos.push('RETIRAR EL TABACO: es causa suficiente por si solo y la tos mejora en semanas');
      if (v.ieca === 'si') pasos.push('RETIRAR EL INHIBIDOR DE LA ENZIMA CONVERTIDORA y sustituirlo por un antagonista del receptor de angiotensina');
      if (v.rx === 'nohecha') pasos.push('HACER RADIOGRAFIA DE TORAX, que se pide a todos sin excepcion');
      const esperando = v.ieca === 'retirado';
      const rxAlterada = v.rx === 'alterada';
      const alarma = !!v.alarma;
      const listoParaCausas = pasos.length === 0 && !esperando && !rxAlterada;
      return { cronica, pasos, esperando, rxAlterada, alarma, listoParaCausas, tratada: !!v.tratada, semanas: v.semanas };
    },
    format: r => {
      if (r.invalido) return 'Revisa el valor: las semanas de tos deben estar entre 0 y 520.';
      let s = '';
      if (!r.cronica) {
        s += `<strong style="color:#8a6a1f;">Con ${r.semanas} semanas, la tos todavia NO es cronica.</strong> Por debajo de 3 semanas es tos aguda, casi siempre virica; de 3 a 8 semanas es SUBAGUDA, en su mayoria postinfecciosa y es la franja donde hay que acordarse de la tos ferina. El algoritmo de la tos cronica se aplica por encima de 8 semanas. `;
      } else {
        s += `<strong>Tos CRONICA (${r.semanas} semanas).</strong> `;
      }
      if (r.alarma) {
        s += '<br><strong style="color:#8c3a34;">Hay signos de ALARMA, y eso cambia el orden.</strong> Antes de nada, estudio dirigido: radiografia de torax y, si es normal y la sospecha persiste, tomografia. Ante disfonia, visualizar la laringe. El cambio del patron de tos en un fumador es la presentacion mas facil de pasar por alto del cancer de pulmon.';
      }
      if (r.pasos.length) {
        s += `<br><strong style="color:#3d5a73;">Antes de ningun otro estudio, faltan estos pasos:</strong><br>${r.pasos.map((x, i) => `&nbsp;${i + 1}. ${x}`).join('<br>')}`;
      }
      if (r.esperando) {
        s += '<br><strong style="color:#8a6a1f;">El inhibidor de la enzima convertidora se retiro hace menos de 4 semanas.</strong> No se puede descartar todavia como causa: la tos puede tardar mas de un mes en desaparecer tras la retirada. Esperar antes de seguir estudiando evita pruebas y tratamientos innecesarios.';
      }
      if (r.rxAlterada) {
        s += '<br><strong style="color:#8c3a34;">La radiografia muestra hallazgos.</strong> El estudio se dirige a lo encontrado y no al algoritmo general de la tos cronica: la tos aqui es un sintoma de otra cosa.';
      }
      if (r.listoParaCausas && r.cronica) {
        if (r.tratada) {
          s += '<br><strong style="color:#8c5a2e;">Ya se han probado las tres causas principales sin exito.</strong> Antes de etiquetarla de refractaria, dos comprobaciones: que cada tratamiento empirico se mantuvo el TIEMPO SUFICIENTE (varias semanas) y que no se retiro lo que habia funcionado en parte, porque las causas coexisten y el efecto es acumulativo. Despues: esputo inducido para descartar BRONQUITIS EOSINOFILICA no asmatica, que se pasa por alto porque las pruebas de asma salen normales. Y si todo es negativo, tos cronica refractaria o inexplicada: TERAPIA DEL HABLA con logopeda y neuromoduladores como la gabapentina, que demostro beneficio en un ensayo controlado, o morfina a dosis bajas.';
        } else {
          s += '<br><strong style="color:#3f6b52;">Los pasos previos estan hechos: se puede pasar a las tres causas principales</strong>, que con frecuencia coexisten y se abordan de forma secuencial y acumulativa:';
          s += '<br>&nbsp;1. <strong>SINDROME DE TOS DE VIA AEREA SUPERIOR</strong>: carraspeo, goteo posnasal, empedrado faringeo. Antihistaminico y corticoide nasal, y la respuesta confirma el diagnostico.';
          s += '<br>&nbsp;2. <strong>ASMA</strong>, incluida la variante tusigena, en la que la tos es el unico sintoma y no hay sibilancias. Espirometria con prueba broncodilatadora y, si es normal, provocacion bronquial, cuyo valor principal es el negativo.';
          s += '<br>&nbsp;3. <strong>REFLUJO GASTROESOFAGICO</strong>, que puede cursar SIN pirosis. Medidas posturales y dieteticas mas inhibidor de la bomba de protones durante varias semanas antes de darlo por fallido.';
          s += '<br><span style="opacity:.75;">Una respuesta parcial no descarta una causa: puede haber dos o tres a la vez. No retirar lo que ha funcionado en parte al a&#241;adir el siguiente escalon.</span>';
        }
      }
      return s;
    },
    fragment: r => {
      if (r.invalido) return 'valor no valido';
      if (!r.cronica) return `${r.semanas} semanas: aun no es tos cronica`;
      if (r.pasos.length) return r.pasos.length > 1 ? `faltan ${r.pasos.length} pasos previos` : 'falta 1 paso previo';
      if (r.esperando) return 'esperar 4 semanas tras retirar el inhibidor';
      if (r.rxAlterada) return 'radiografia alterada: estudio dirigido';
      return r.tratada ? 'valorar bronquitis eosinofilica y tos refractaria' : 'pasar a las tres causas principales';
    }
  }
];
