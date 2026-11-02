// topics/nodulo-cancer-pulmon/calculators.js
// 4 herramientas:
// - fleischner: seguimiento del nodulo pulmonar incidental segun la guia de la Fleischner Society
//   de 2017, con la comprobacion previa de a quien NO se le aplica.
// - riesgo-nodulo: estimacion estructurada de la probabilidad de malignidad, que es lo que decide
//   entre vigilar, estudiar con positrones o tomar muestra.
// - cribado-pulmon: criterios de cribado con tomografia de baja dosis (USPSTF 2021) y motivos
//   para no cribar o para dejar de hacerlo.
// - funcion-preoperatoria: FEV1 y DLCO predichos posoperatorios a partir de los segmentos que se
//   van a resecar, con los tres escalones de riesgo quirurgico.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

// Segmentos broncopulmonares: 19 en total (derecho 10, izquierdo 9).
const TOTAL_SEGMENTOS = 19;

function bandaProbabilidad(p) {
  if (p <= 2) return 'BAJA';
  if (p <= 7) return 'INTERMEDIA';
  return 'ALTA';
}

export const calculators = [
  {
    key: 'fleischner', title: 'Seguimiento del nódulo incidental (Fleischner 2017)', accent: '#8c5a2e',
    subtitle: 'Que hacer con un nódulo hallado por casualidad, según densidad, tamaño y riesgo',
    incompleteMsg: 'Introduce el diámetro medio del nódulo y elige su densidad, el número de nódulos y el riesgo del paciente.',
    fields: [
      { name: 'excluido', id: 'ncp-fl-exc', type: 'select', label: 'El paciente entra en el ambito de la guía', options: [
        { v: 'no', t: 'Si: 35 años o más, inmunocompetente, sin cáncer conocido' },
        { v: 'edad', t: 'No: menor de 35 años' },
        { v: 'inmuno', t: 'No: inmunodeprimido' },
        { v: 'cancer', t: 'No: cáncer conocido, actual o reciente' },
        { v: 'cribado', t: 'No: nódulo detectado en un programa de cribado' }
      ] },
      { name: 'densidad', id: 'ncp-fl-den', type: 'select', label: 'Densidad del nódulo', row: 'r1', options: [
        { v: 'solido', t: 'Solido' },
        { v: 'parcial', t: 'Parcialmente sólido (subsolido con nucleo)' },
        { v: 'vidrio', t: 'Vidrio deslustrado puro' }
      ] },
      { name: 'numero', id: 'ncp-fl-num', type: 'select', label: 'Número de nódulos', row: 'r1', options: [
        { v: 'unico', t: 'Unico' },
        { v: 'multiple', t: 'Multiples' }
      ] },
      { name: 'tam', id: 'ncp-fl-tam', type: 'number', step: '0.1', label: 'Diámetro MEDIO del nódulo (mm)', placeholder: 'ej. 7', row: 'r2' },
      { name: 'solido', id: 'ncp-fl-sol', type: 'number', step: '0.1', required: false, label: 'Componente SÓLIDO (mm, solo si es parcialmente sólido)', placeholder: 'ej. 4', row: 'r2' },
      { name: 'riesgo', id: 'ncp-fl-rie', type: 'select', label: 'Riesgo del paciente', options: [
        { v: 'bajo', t: 'Bajo: poco o ningún tabaco y sin otros factores' },
        { v: 'alto', t: 'Alto: tabaquismo, edad avanzada, enfisema, cáncer previo, espiculacion o lóbulo superior' }
      ] },
      { name: 'previos', id: 'ncp-fl-pre', type: 'select', label: 'Comparación con estudios previos', options: [
        { v: 'sin', t: 'No hay estudios previos o no se han revisado' },
        { v: 'estable', t: 'Estable 2 años o más (sólido) o 5 años (subsolido)' },
        { v: 'crece', t: 'Ha crecido respecto al estudio previo' }
      ] },
      { type: 'note', text: 'El diámetro medio es el promedio del eje mayor y del menor en el mismo corte, redondeado al milimetro. Antes de aplicar cualquier recomendación hay dos comprobaciones que resuelven muchos casos: buscar estudios previos y confirmar que la lesión mide 30 mm o menos, porque por encima de eso es una MASA y se estudia como un cáncer sin periodos de observación.' }
    ],
    compute(v) {
      if (v.tam == null) return null;
      if (!(v.tam > 0 && v.tam <= 100)) return { invalido: true };
      if (v.solido != null && !(v.solido >= 0 && v.solido <= v.tam)) return { invalido: true };
      const fueraAmbito = v.excluido && v.excluido !== 'no' ? v.excluido : null;
      const masa = v.tam > 30;
      const alto = v.riesgo === 'alto';
      const multiple = v.numero === 'multiple';
      let plan = '', matiz = '';

      if (v.densidad === 'solido') {
        if (v.tam < 6) {
          plan = alto ? 'Sin seguimiento obligado; tomografía OPCIONAL a los 12 meses por el riesgo alto.' : 'SIN seguimiento rutinario.';
          matiz = 'Por debajo de 6 mm la probabilidad de malignidad en un paciente de bajo riesgo es inferior al 1%, y el seguimiento produce más ansiedad y radiación que beneficio.';
        } else if (v.tam <= 8) {
          plan = multiple
            ? 'Tomografía a los 3 a 6 meses y después a los 18 a 24 meses.'
            : (alto ? 'Tomografía a los 6 a 12 meses y después a los 18 a 24 meses.' : 'Tomografía a los 6 a 12 meses; valorar repetir a los 18 a 24 meses.');
          matiz = 'La franja de 6 a 8 mm es de vigilancia: ni se ignora ni se biopsia de entrada.';
        } else {
          plan = multiple
            ? 'Tomografía a los 3 a 6 meses y después a los 18 a 24 meses, guiandose por el nódulo más sospechoso.'
            : 'Tomografía a los 3 meses, tomografía por emision de positrones o TOMA DE MUESTRA, según la probabilidad de malignidad.';
          matiz = 'Por encima de 8 mm ya no basta con vigilar: hay que estimar la probabilidad y actuar en consecuencia.';
        }
      } else if (v.densidad === 'vidrio') {
        if (v.tam < 6) {
          plan = multiple
            ? 'Tomografía a los 3 a 6 meses; si es estable, valorar controles a los 2 y a los 4 años.'
            : 'SIN seguimiento rutinario.';
          matiz = 'El vidrio deslustrado puro menor de 6 mm rara vez progresa a algo relevante.';
        } else {
          plan = 'Tomografía a los 6 a 12 meses para confirmar que persiste y después cada 2 años HASTA LOS 5.';
          matiz = 'Se sigue 5 años y no 2 porque las lesiones de la via adenocarcinomatosa crecen muy despacio. Lo que marca el cambio de comportamiento es la aparición de un componente SÓLIDO.';
        }
      } else {
        if (v.tam < 6) {
          plan = 'SIN seguimiento rutinario.';
          matiz = 'Por debajo de 6 mm no suele poderse caracterizar de forma fiable el componente sólido.';
        } else if (v.solido != null && v.solido >= 6) {
          plan = 'SOSPECHOSO: tomografía por emision de positrones, biopsia o RESECCIÓN.';
          matiz = 'Un componente sólido de 6 mm o más traduce invasión y saca al nódulo del terreno de la vigilancia.';
        } else {
          plan = 'Tomografía a los 3 a 6 meses para confirmar que persiste y después ANUAL hasta los 5 años.';
          matiz = 'Mientras el componente sólido se mantenga por debajo de 6 mm, se vigila. Si llega a 6 mm, cambia la conducta.';
        }
      }

      return { fueraAmbito, masa, plan, matiz, tam: v.tam, densidad: v.densidad, multiple, alto, previos: v.previos, solido: v.solido };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: diámetro de 0.1 a 100 mm, y componente sólido entre 0 y el diámetro total.';
      if (r.fueraAmbito) {
        const causas = {
          edad: 'menor de 35 años, donde el nódulo es casi siempre infeccioso o inflamatorio y la radiación acumulada pesa más',
          inmuno: 'inmunodeprimido, donde hay que descartar activamente infección (micobacterias, hongos, nocardia) y linfoma',
          cancer: 'con cáncer conocido, donde el nódulo puede ser una metástasis y el umbral de estudio es mucho más bajo',
          cribado: 'detectado en un programa de cribado, que se informa y se maneja con LUNG-RADS'
        };
        return `<strong style="color:#8c3a34;">Este paciente queda FUERA del ambito de las guías de Fleischner</strong>: ${causas[r.fueraAmbito]}. Aplicarlas aquí puede retrasar un diagnóstico. El manejo se decide por el contexto clínico, no por esta tabla.`;
      }
      if (r.previos === 'estable') {
        return `<strong style="color:#3f6b52;">Estabilidad documentada.</strong> Un nódulo ${r.densidad === 'solido' ? 'sólido estable 2 años' : 'subsolido estable 5 años'} se considera benigno y NO necesita más seguimiento. Este es el gesto que más casos resuelve, y por eso se hace antes que cualquier tabla: buscar imagenes antiguas, incluidas las de otros centros y las de tomografías abdominales que incluyan las bases pulmonares.`;
      }
      if (r.masa) {
        return `<strong style="color:#8c3a34;">${r.tam} mm es una MASA, no un nódulo.</strong> Por encima de 30 mm no hay periodo de observación ni algoritmo de vigilancia: se estudia como un cáncer hasta que se demuestre lo contrario, con tomografía por emision de positrones y toma de muestra.`;
      }
      const nombre = { solido: 'solido', parcial: 'parcialmente sólido', vidrio: 'en vidrio deslustrado puro' }[r.densidad];
      let s = `<strong>Nódulo ${nombre} ${r.multiple ? 'multiple' : 'unico'} de ${r.tam} mm</strong>`;
      if (r.densidad === 'parcial' && r.solido != null) s += ` con componente sólido de ${r.solido} mm`;
      s += `, paciente de riesgo ${r.alto ? 'ALTO' : 'bajo'}. <strong style="color:#8c5a2e;">${r.plan}</strong> ${r.matiz}`;
      if (r.previos === 'crece') s += ' <strong style="color:#8c3a34;">Además hay CRECIMIENTO documentado</strong>, que es el dato más potente a favor de malignidad y que por si solo justifica pasar a positrones o a toma de muestra, por encima de lo que indique la tabla por tamaño.';
      s += ' Sea cual sea el plan, dejalo REGISTRADO y con cita cerrada: el nódulo perdido en el seguimiento es uno de los fallos de sistema más frecuentes y más evitables.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.fueraAmbito ? 'fuera del ambito de Fleischner' : (r.previos === 'estable' ? 'estable: sin más seguimiento' : (r.masa ? 'masa: estudiar como cáncer' : `nódulo de ${r.tam} mm`)))
  },

  {
    key: 'riesgo-nodulo', title: 'Probabilidad de malignidad del nódulo', accent: '#8c3a34',
    subtitle: 'Estimación estructurada que decide entre vigilar, estudiar con positrones o tomar muestra',
    incompleteMsg: 'Introduce la edad y el tamaño del nódulo, y completa el resto de campos.',
    fields: [
      { name: 'edad', id: 'ncp-rn-edad', type: 'number', step: '1', label: 'Edad (años)', placeholder: 'ej. 66', row: 'r1' },
      { name: 'tam', id: 'ncp-rn-tam', type: 'number', step: '0.1', label: 'Diámetro medio del nódulo (mm)', placeholder: 'ej. 12', row: 'r1' },
      { name: 'tabaco', id: 'ncp-rn-tab', type: 'select', label: 'Tabaquismo', row: 'r2', options: [
        { v: 'nunca', t: 'Nunca ha fumado' },
        { v: 'ex', t: 'Exfumador' },
        { v: 'act', t: 'Fumador actual' }
      ] },
      { name: 'densidad', id: 'ncp-rn-den', type: 'select', label: 'Densidad', row: 'r2', options: [
        { v: 'solido', t: 'Solido' },
        { v: 'parcial', t: 'Parcialmente sólido' },
        { v: 'vidrio', t: 'Vidrio deslustrado puro' }
      ] },
      { name: 'crecimiento', id: 'ncp-rn-cre', type: 'select', label: 'Comparación con estudios previos', options: [
        { v: 'sin', t: 'No hay previos o no son comparables' },
        { v: 'estable', t: 'Estable 2 años o más' },
        { v: 'crece', t: 'Ha crecido' }
      ] },
      { name: 'espiculado', id: 'ncp-rn-esp', type: 'checkbox', label: 'Bordes espiculados o corona radiada', row: 'r3' },
      { name: 'superior', id: 'ncp-rn-sup', type: 'checkbox', label: 'Localizado en lóbulo SUPERIOR', row: 'r3' },
      { name: 'cancer', id: 'ncp-rn-can', type: 'checkbox', label: 'Antecedente personal de otro cáncer', row: 'r4' },
      { name: 'enfisema', id: 'ncp-rn-enf', type: 'checkbox', label: 'Enfisema o fibrosis pulmonar', row: 'r4' },
      { name: 'benigno', id: 'ncp-rn-ben', type: 'checkbox', label: 'Calcificación benigna (central, laminar, difusa o en palomita de maiz) o grasa' },
      { type: 'note', text: 'Esta herramienta ordena en tres franjas los mismos predictores que usan los modelos publicados (edad, tabaco, cáncer previo, enfisema, tamaño, espiculacion, lóbulo superior, densidad y crecimiento). NO sustituye a un modelo validado ni da un porcentaje exacto: su utilidad es separar al paciente que se vigila del que necesita positrones y del que necesita histología.' }
    ],
    compute(v) {
      if (v.edad == null || v.tam == null) return null;
      if (!(v.edad >= 15 && v.edad <= 110) || !(v.tam > 0 && v.tam <= 100)) return { invalido: true };
      const det = [];
      let p = 0;
      if (v.edad >= 70) { p += 2; det.push('edad de 70 años o más (+2)'); }
      else if (v.edad >= 60) { p += 1; det.push('edad de 60 a 69 años (+1)'); }
      else if (v.edad < 45) { p -= 1; det.push('menor de 45 años (-1)'); }
      if (v.tabaco === 'act') { p += 2; det.push('fumador actual (+2)'); }
      else if (v.tabaco === 'ex') { p += 1; det.push('exfumador (+1)'); }
      if (v.tam > 20) { p += 3; det.push('tamaño mayor de 20 mm (+3)'); }
      else if (v.tam > 8) { p += 2; det.push('tamaño de 9 a 20 mm (+2)'); }
      else if (v.tam < 6) { p -= 1; det.push('tamaño menor de 6 mm (-1)'); }
      if (v.espiculado) { p += 2; det.push('bordes espiculados (+2)'); }
      if (v.superior) { p += 1; det.push('lóbulo superior (+1)'); }
      if (v.cancer) { p += 1; det.push('cáncer previo (+1)'); }
      if (v.enfisema) { p += 1; det.push('enfisema o fibrosis (+1)'); }
      if (v.densidad === 'parcial') { p += 2; det.push('parcialmente sólido (+2)'); }
      else if (v.densidad === 'vidrio') { p -= 1; det.push('vidrio deslustrado puro (-1)'); }
      if (v.crecimiento === 'crece') { p += 3; det.push('crecimiento documentado (+3)'); }
      else if (v.crecimiento === 'estable') { p -= 4; det.push('estable 2 años o más (-4)'); }
      const banda = bandaProbabilidad(p);
      const estable = v.crecimiento === 'estable';
      return { p, banda, det, benigno: !!v.benigno, tam: v.tam, densidad: v.densidad, estable, estableSolido: estable && v.densidad === 'solido' };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: edad de 15 a 110 años y diámetro de 0.1 a 100 mm.';
      if (r.benigno) {
        return `<strong style="color:#3f6b52;">Hay un signo de benignidad que cierra el caso.</strong> La calcificación central, laminar concéntrica, difusa o en palomita de maiz, y sobre todo la presencia de GRASA, son prácticamente diagnosticas de lesión benigna (granuloma o hamartoma) y no requieren más estudio. Cuidado: las calcificaciones EXCÉNTRICAS o punteadas NO tranquilizan, porque un tumor puede englobar un granuloma antiguo. La puntuación de riesgo (${r.p}) queda subordinada a este hallazgo.`;
      }
      if (r.estableSolido) {
        return `<strong style="color:#3f6b52;">La estabilidad manda sobre la puntuación.</strong> Un nódulo SÓLIDO que lleva 2 años o más sin cambiar se considera benigno y no necesita más seguimiento, aunque el resto de los datos sumen riesgo (aquí suman ${r.p} puntos). Por eso buscar estudios previos va antes que cualquier estimación. En el nódulo SUBSOLIDO no vale el mismo plazo: hacen falta 5 años, porque esas lesiones crecen mucho más despacio.`;
      }
      let s = `<strong>${r.p} puntos: probabilidad ${r.banda}.</strong> `;
      if (r.banda === 'BAJA') {
        s += '<span style="color:#3f6b52;">Corresponde aproximadamente a una probabilidad menor del 5%.</span> Conducta: <strong>VIGILANCIA con tomografía</strong> según los intervalos de Fleischner. No pedir positrones ni biopsiar por sistema: en esta franja el estudio invasivo produce más daño que beneficio.';
      } else if (r.banda === 'INTERMEDIA') {
        s += '<span style="color:#8a6a1f;">Corresponde aproximadamente a una probabilidad del 5 al 65%.</span> Conducta: <strong>TOMOGRAFÍA POR EMISION DE POSITRONES</strong> y, según el resultado, biopsia. Es la franja donde más se decide, y donde hay que conocer los límites de la prueba: falsos negativos en lesiones menores de 8 a 10 mm, en el adenocarcinoma lepidico y en el carcinoide; falsos positivos en infección y granulomas.';
      } else {
        s += '<span style="color:#8c3a34;">Corresponde aproximadamente a una probabilidad mayor del 65%.</span> Conducta: <strong>TOMA DE MUESTRA o RESECCIÓN</strong> directa en el paciente operable, tras estadificar. Aquí un positrones negativo no tranquiliza lo suficiente como para volver a la vigilancia.';
      }
      if (r.det.length) s += `<br><span style="opacity:.75;">Aportan: ${r.det.join(', ')}.</span>`;
      if (r.estable) s += '<br><strong style="color:#3f6b52;">Hay estabilidad de 2 años o más</strong>, pero en el nódulo subsolido ese plazo no basta: hacen falta 5 años, porque estas lesiones crecen mucho más despacio.';
      if (r.densidad === 'vidrio' && r.tam >= 6) s += '<br>En el vidrio deslustrado puro, más que la probabilidad global importa vigilar la <strong>aparición de un componente sólido</strong>, que es lo que traduce invasión.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.benigno ? 'signo de benignidad' : (r.estableSolido ? 'estable: se considera benigno' : `${r.p} puntos, probabilidad ${r.banda.toLowerCase()}`))
  },

  {
    key: 'cribado-pulmon', title: 'Criterios de cribado con tomografía de baja dosis', accent: '#3f6b52',
    subtitle: 'A quien se le ofrece tomografía anual, y cuando se deja de cribar',
    incompleteMsg: 'Introduce la edad y la carga tabaquica en paquetes-año.',
    fields: [
      { name: 'edad', id: 'ncp-cr-edad', type: 'number', step: '1', label: 'Edad (años)', placeholder: 'ej. 58', row: 'r1' },
      { name: 'paq', id: 'ncp-cr-paq', type: 'number', step: '1', label: 'Carga tabaquica (paquetes-año)', placeholder: 'ej. 30', row: 'r1' },
      { name: 'estado', id: 'ncp-cr-est', type: 'select', label: 'Situación respecto al tabaco', row: 'r2', options: [
        { v: 'act', t: 'Fumador actual' },
        { v: 'ex', t: 'Exfumador' },
        { v: 'nunca', t: 'Nunca ha fumado' }
      ] },
      { name: 'anos', id: 'ncp-cr-ano', type: 'number', step: '1', required: false, label: 'Años desde el abandono (si es exfumador)', placeholder: 'ej. 8', row: 'r2' },
      { name: 'limita', id: 'ncp-cr-lim', type: 'checkbox', label: 'Enfermedad que limita la esperanza de vida o que impediria una cirugía curativa' },
      { type: 'note', text: 'Un paquete-año equivale a fumar 20 cigarrillos diarios durante un año. La recomendación del USPSTF de 2021 amplio la población: bajo la edad de inicio de 55 a 50 años y la carga de 30 a 20 paquetes-año, con lo que casi duplico el número de personas elegibles. Los hallazgos del cribado se informan con LUNG-RADS, no con las guías de Fleischner.' }
    ],
    compute(v) {
      if (v.edad == null || v.paq == null) return null;
      if (!(v.edad >= 15 && v.edad <= 110) || !(v.paq >= 0 && v.paq <= 200)) return { invalido: true };
      if (v.anos != null && !(v.anos >= 0 && v.anos <= 90)) return { invalido: true };
      const motivos = [];
      if (v.edad < 50) motivos.push(`edad de ${v.edad} años, por debajo de los 50`);
      if (v.edad > 80) motivos.push(`edad de ${v.edad} años, por encima de los 80`);
      if (v.estado === 'nunca') motivos.push('nunca ha fumado');
      if (v.estado !== 'nunca' && v.paq < 20) motivos.push(`carga de ${v.paq} paquetes-año, por debajo de 20`);
      if (v.estado === 'ex' && v.anos != null && v.anos >= 15) motivos.push(`dejo de fumar hace ${v.anos} años, 15 o más`);
      const limita = !!v.limita;
      const cumple = motivos.length === 0;
      const faltaAnos = v.estado === 'ex' && v.anos == null;
      return { cumple, motivos, limita, faltaAnos, edad: v.edad, paq: v.paq, anos: v.anos, estado: v.estado };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: edad de 15 a 110 años, carga de 0 a 200 paquetes-año y años desde el abandono de 0 a 90.';
      if (r.faltaAnos) return 'Es exfumador: indica cuantos años lleva sin fumar. A partir de los 15 años de abstinencia el cribado deja de estar indicado, porque el riesgo residual ya no compensa sus daños.';
      if (!r.cumple) {
        return `<strong style="color:#8c3a34;">NO cumple los criterios de cribado</strong> por: ${r.motivos.join('; ')}. Fuera de la población definida, el balance entre beneficio y daño no esta demostrado: cribar a quien tiene poco riesgo multiplica los hallazgos falsos, las pruebas sobre lesiones benignas y el sobrediagnostico. Lo que si esta indicado siempre es ofrecer <strong>deshabituacion tabaquica</strong>, que es la intervención que más reduce el riesgo.`;
      }
      let s = `<strong style="color:#3f6b52;">CUMPLE los criterios de cribado</strong>: ${r.edad} años, ${r.paq} paquetes-año y ${r.estado === 'act' ? 'fumador actual' : `abandono hace ${r.anos} años`}. Se le ofrece <strong>tomografía de baja dosis ANUAL</strong> dentro de un programa con seguimiento estructurado. `;
      if (r.limita) {
        s += '<br><strong style="color:#8c3a34;">Pero hay una condición que limita la esperanza de vida o que impediria una cirugía curativa.</strong> En ese caso NO se criba: detectar un cáncer que no se va a poder tratar solo añade pruebas, ansiedad y daño, sin beneficio posible. Es el criterio de exclusión que más se olvida.';
        return s;
      }
      s += 'La decisión es COMPARTIDA y se documenta: hay que explicar que la mayoría de los hallazgos seran nódulos benignos que obligaran a repetir pruebas, que existe sobrediagnostico y que la radiación acumulada es baja pero no nula. ';
      s += 'Y en cada visita del programa se ofrece <strong>deshabituacion tabaquica</strong>, cuyo beneficio se suma al del cribado y no lo sustituye. El cribado se interrumpe al cumplir 15 años sin fumar o cuando aparece una condición que impida un tratamiento curativo.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.faltaAnos ? 'faltan años desde el abandono' : (r.cumple ? (r.limita ? 'cumple criterios pero no procede cribar' : 'candidato a cribado anual') : 'no candidato a cribado'))
  },

  {
    key: 'funcion-preoperatoria', title: 'Valoración funcional antes de la resección pulmonar', accent: '#3d5a73',
    subtitle: 'FEV1 y DLCO predichos posoperatorios, y los tres escalones de riesgo',
    incompleteMsg: 'Introduce el FEV1 y la DLCO en porcentaje del predicho y el número de segmentos que se van a resecar.',
    fields: [
      { name: 'fev1', id: 'ncp-fp-fev', type: 'number', step: '1', label: 'FEV1 preoperatorio (% del predicho)', placeholder: 'ej. 72', row: 'r1' },
      { name: 'dlco', id: 'ncp-fp-dlco', type: 'number', step: '1', label: 'DLCO preoperatoria (% del predicho)', placeholder: 'ej. 58', row: 'r1' },
      { name: 'seg', id: 'ncp-fp-seg', type: 'number', step: '1', label: 'Segmentos FUNCIONANTES que se van a resecar', placeholder: 'ej. 5', row: 'r2' },
      { name: 'vo2', id: 'ncp-fp-vo2', type: 'number', step: '0.1', required: false, label: 'Consumo máximo de oxígeno (mL/kg/min, si se ha hecho)', placeholder: 'ej. 16', row: 'r2' },
      { type: 'note', text: 'Segmentos broncopulmonares: 19 en total. Derecho 10 (superior 3, medio 2, inferior 5); izquierdo 9 (superior 3 más lingula 2, inferior 4). Resta los segmentos ya destruidos o atelectasicos, que no aportan función y por tanto no se pierden al resecar. La DLCO debe medirse SIEMPRE aunque el FEV1 sea normal, porque predice complicaciones de forma independiente y su omisión es uno de los fallos clásicos de esta valoración.' }
    ],
    compute(v) {
      if (v.fev1 == null || v.dlco == null || v.seg == null) return null;
      if (!(v.fev1 > 0 && v.fev1 <= 150) || !(v.dlco > 0 && v.dlco <= 150)) return { invalido: true };
      if (!(v.seg >= 1 && v.seg <= 18)) return { invalido: true };
      if (v.vo2 != null && !(v.vo2 > 0 && v.vo2 <= 80)) return { invalido: true };
      const frac = (TOTAL_SEGMENTOS - v.seg) / TOTAL_SEGMENTOS;
      const ppoFev1 = v.fev1 * frac;
      const ppoDlco = v.dlco * frac;
      const menor = Math.min(ppoFev1, ppoDlco);
      let riesgo;
      if (menor < 30) riesgo = 'ALTO';
      else if (menor < 60) riesgo = 'INTERMEDIO';
      else riesgo = 'BAJO';
      return { ppoFev1, ppoDlco, menor, riesgo, seg: v.seg, frac, vo2: v.vo2, fev1: v.fev1, dlco: v.dlco };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: FEV1 y DLCO del 1 al 150% del predicho, segmentos a resecar de 1 a 18 y consumo de oxígeno de 0 a 80 mL/kg/min.';
      let s = `Con ${r.seg} segmentos resecados quedan ${TOTAL_SEGMENTOS - r.seg} de 19, es decir el ${(r.frac * 100).toFixed(0)}% de la función. <strong>FEV1 predicho posoperatorio del ${r.ppoFev1.toFixed(0)}% y DLCO predicha posoperatoria del ${r.ppoDlco.toFixed(0)}%.</strong> `;
      if (r.riesgo === 'BAJO') {
        s += '<span style="color:#3f6b52;"><strong>Riesgo BAJO</strong>: ambos por encima del 60%.</span> Se puede proceder a la resección prevista sin más pruebas funcionales. Optimizar antes la EPOC si la hay, retirar el tabaco y hacer rehabilitación prequirúrgica, que reducen las complicaciones.';
      } else if (r.riesgo === 'INTERMEDIO') {
        s += '<span style="color:#8a6a1f;"><strong>Riesgo INTERMEDIO</strong>: algún valor entre el 30 y el 60%.</span> Indicada una <strong>prueba de esfuerzo cardiopulmonar</strong>, que integra la reserva cardiaca, pulmonar y muscular mejor que cualquier parámetro aislado.';
      } else {
        s += '<span style="color:#8c3a34;"><strong>Riesgo ALTO</strong>: algún valor por debajo del 30%.</span> La resección prevista tiene una probabilidad elevada de complicaciones y de incapacidad respiratoria posterior. Valorar <strong>resección menor</strong> (segmentectomia), <strong>radioterapia estereotáctica corporal</strong>, que es una alternativa curativa no quirúrgica en el estadio I, o ablación. Antes de descartar la cirugía, prueba de esfuerzo y gammagrafía de perfusión cuantificada, sobre todo si la función esta muy desigualmente repartida entre los dos pulmones.';
      }
      if (r.vo2 != null) {
        s += '<br>';
        if (r.vo2 > 20) s += `<strong style="color:#3f6b52;">Consumo máximo de oxígeno de ${r.vo2} mL/kg/min</strong>, por encima de 20: tolera la resección prevista, incluida la neumonectomia.`;
        else if (r.vo2 >= 10) s += `<strong style="color:#8a6a1f;">Consumo máximo de oxígeno de ${r.vo2} mL/kg/min</strong>, en zona intermedia: la decisión se individualiza según la extensión de la resección, los valores predichos posoperatorios y la comorbilidad, y se toma en comite.`;
        else s += `<strong style="color:#8c3a34;">Consumo máximo de oxígeno de ${r.vo2} mL/kg/min</strong>, por debajo de 10: riesgo muy alto de mortalidad perioperatoria. La resección mayor esta desaconsejada y hay que ofrecer alternativas no quirúrgicas.`;
      }
      s += '<br><span style="opacity:.75;">Los valores predichos posoperatorios estiman la función, no el estado funcional global ni la voluntad del paciente. Alguien con numeros aceptables pero encamado o desnutrido sigue siendo de riesgo alto.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `FEV1 ${r.ppoFev1.toFixed(0)}% y DLCO ${r.ppoDlco.toFixed(0)}% predichos, riesgo ${r.riesgo.toLowerCase()}`
  }
];
