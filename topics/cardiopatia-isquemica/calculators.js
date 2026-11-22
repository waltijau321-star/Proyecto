// topics/cardiopatia-isquemica/calculators.js - Las cinco herramientas del tema de cardiopatia
// isquemica.
//   - probabilidadEac: modelo RF-CL de la ESC 2024 de SCC (Vrints, Eur Heart J 2024;45:3415),
//     Figura 4. La tabla se transcribio desde la imagen renderizada de la pagina y se cotejo con el
//     texto extraido: coinciden las 30 casillas. El modelo da como maximo 45%, de modo que nunca
//     clasifica por si solo en probabilidad alta ni muy alta: eso solo llega al AJUSTAR con datos
//     clinicos, y la calculadora lo dice.
//   - estrategiaScasest y reperfusionScacest: ESC 2023 de SCA (Byrne, Eur Heart J 2023;44:3720),
//     Tabla de recomendaciones 4 y Tabla de recomendaciones 9 (choque).
//   - fibrinolisisScacest: contraindicaciones y dosis de tenecteplasa de la ACC/AHA 2025 (Rao,
//     Tablas 13 y 14), porque la ESC remite esas tablas a su suplemento, que no esta en el repo; la
//     media dosis por encima de 75 anos y el tratamiento asociado salen de la ESC 2023.
//   - antiagregacionSca: ESC 2023, Tabla 6 (dosis) y Tablas de recomendaciones 5 y 6.
//
// LO QUE NINGUNA HACE: calcular el GRACE (la tabla de puntos esta en el suplemento de la ESC) ni el
// algoritmo 0 h/1 h de troponina (los cortes son especificos de cada ensayo y estan en la Tabla S4
// del suplemento). El GRACE por encima de 140 entra como una casilla que marca el usuario.

const C_ROJO = '#8c3a34';
const C_AMBAR = '#8a6a2e';
const C_VERDE = '#3f6b52';
const C_AZUL = '#3d5a73';

const lista = xs => xs.map(x => '&bull; ' + x).join('<br>');

// Figura 4 de la ESC 2024. Indices: [puntuacion del sintoma: 0-1, 2, 3][banda de edad][factores 0-1, 2-3, 4-5]
const RFCL = {
  m: [
    [[0, 1, 2], [1, 1, 3], [1, 2, 5], [2, 4, 7], [4, 7, 11]],
    [[0, 1, 3], [1, 2, 5], [2, 3, 7], [3, 6, 11], [6, 10, 16]],
    [[2, 5, 10], [4, 7, 12], [6, 10, 15], [10, 14, 19], [16, 19, 23]]
  ],
  v: [
    [[1, 2, 5], [2, 4, 8], [4, 7, 12], [8, 12, 17], [15, 19, 24]],
    [[2, 4, 8], [3, 6, 12], [6, 11, 17], [12, 17, 25], [22, 27, 34]],
    [[9, 14, 22], [14, 20, 27], [21, 27, 33], [32, 35, 39], [44, 44, 45]]
  ]
};
export function rfcl(sexo, puntosSintoma, edad, nFactores) {
  if (!RFCL[sexo] || edad < 30 || edad > 80) return null;
  const col = puntosSintoma <= 1 ? 0 : (puntosSintoma === 2 ? 1 : 2);
  const banda = Math.min(4, Math.floor((edad - 30) / 10));
  const fr = nFactores <= 1 ? 0 : (nFactores <= 3 ? 1 : 2);
  return RFCL[sexo][col][banda][fr];
}

export const calculators = [
  {
    key: 'probabilidadEac', title: 'Probabilidad de enfermedad coronaria obstructiva (RF-CL)', accent: '#7d3c2a',
    subtitle: 'Modelo de la ESC 2024 para el síndrome coronario crónico',
    incompleteMsg: 'Escribe la edad.',
    fields: [
      { name: 'sexo', id: 'cisq-rf-sx', type: 'select', label: 'Sexo', options: [
        { value: 'm', label: 'Mujer' }, { value: 'v', label: 'Varón' }], row: 'r1' },
      { name: 'edad', id: 'cisq-rf-ed', type: 'number', step: '1', label: 'Edad (años, de 30 a 80)', placeholder: 'ej. 58', row: 'r1' },
      { name: 'sintoma', id: 'cisq-rf-si', type: 'select', label: 'Síntoma principal', options: [
        { value: 'dolor', label: 'Dolor torácico (puntúan las tres casillas de abajo)' },
        { value: 'disnea', label: 'Disnea de esfuerzo (vale 2 puntos)' }] },
      { type: 'note', text: 'RASGOS DEL DOLOR (solo si el síntoma principal es el dolor)' },
      { name: 'tipo', id: 'cisq-rf-ti', type: 'checkbox', label: 'Molestia opresiva retroesternal o en el cuello, la mandíbula, el hombro o el brazo' },
      { name: 'desencadena', id: 'cisq-rf-de', type: 'checkbox', label: 'Desencadenada por el estrés físico o emocional' },
      { name: 'alivia', id: 'cisq-rf-al', type: 'checkbox', label: 'Cede con el reposo o con nitratos en 5 minutos' },
      { type: 'note', text: 'FACTORES DE RIESGO' },
      { name: 'familiar', id: 'cisq-rf-fa', type: 'checkbox', label: 'Familiar de primer grado con enfermedad coronaria precoz (varón de menos de 55, mujer de menos de 65)' },
      { name: 'tabaco', id: 'cisq-rf-ta', type: 'checkbox', label: 'Tabaquismo actual o previo' },
      { name: 'dislipidemia', id: 'cisq-rf-dl', type: 'checkbox', label: 'Dislipidemia' },
      { name: 'hta', id: 'cisq-rf-ht', type: 'checkbox', label: 'Hipertensión arterial' },
      { name: 'diabetes', id: 'cisq-rf-dm', type: 'checkbox', label: 'Diabetes' }
    ],
    compute(v) {
      if (v.edad === null || v.edad === undefined) return null;
      if (v.edad < 30 || v.edad > 80) return { error: 'El modelo RF-CL está hecho para edades de 30 a 80 años.' };
      const puntos = v.sintoma === 'disnea' ? 2 : (v.tipo ? 1 : 0) + (v.desencadena ? 1 : 0) + (v.alivia ? 1 : 0);
      const nFactores = ['familiar', 'tabaco', 'dislipidemia', 'hta', 'diabetes'].filter(k => v[k]).length;
      const p = rfcl(v.sexo, puntos, v.edad, nFactores);
      let categoria, color, pasos;
      if (p <= 5) {
        categoria = 'muy baja'; color = C_VERDE;
        pasos = ['Debe considerarse diferir más pruebas (IIa B), salvo que los síntomas persistan y se hayan descartado causas no cardiacas.'];
      } else if (p <= 15) {
        categoria = 'baja'; color = C_AZUL;
        pasos = [
          'El beneficio de más pruebas es incierto; pueden hacerse si los síntomas limitan y hay que aclararlos.',
          'Debe considerarse el índice de calcio coronario para reclasificar a más pacientes en probabilidad muy baja (IIa B); la ergometría o la búsqueda de aterosclerosis en otras arterias pueden considerarse para ajustar (IIb C).',
          'Si se hace una prueba, la angio-TC coronaria es la preferida para descartar la enfermedad con probabilidad de más de 5 a 50% (I B).'
        ];
      } else {
        categoria = 'moderada'; color = C_AMBAR;
        pasos = [
          'Se recomienda una prueba: angio-TC coronaria (preferida para descartar con probabilidad de más de 5 a 50%, I B) o una prueba funcional de imagen (eco de estrés, SPECT o PET, resonancia de perfusión; recomendadas con más de 15 a 85%, I B).',
          'La ergometría no se recomienda para descartar la enfermedad si hay angio-TC o imagen funcional disponibles (III C).'
        ];
      }
      return { p, categoria, color, pasos, puntos, nFactores };
    },
    format(r) {
      if (r.error) return `<span style="color:${C_ROJO};">${r.error}</span>`;
      let s = `<strong style="color:${r.color};font-size:14.5px;">Probabilidad ${r.categoria}: ${r.p}%.</strong>`;
      s += `<br>Síntoma ${r.puntos} punto(s), ${r.nFactores} factor(es) de riesgo.`;
      s += '<br><br><strong>Qué hacer</strong><br>' + lista(r.pasos);
      s += `<br><br><span style="color:${C_AZUL};">Ajusta la estimación con la clínica (I C): la sube la hipercolesterolemia familiar, la enfermedad renal grave, las enfermedades inflamatorias, la arteriopatía periférica o las calcificaciones vistas en pruebas previas; la baja un calcio coronario de 0, con valor predictivo negativo de más del 95%. El modelo llega como máximo al 45%: las probabilidades alta y muy alta solo aparecen al ajustar.</span>`;
      s += '<br><br><span style="opacity:.85;font-size:12.5px;">Categorías: muy baja, 5% o menos; baja, más de 5 a 15%; moderada, más de 15 a 50%; alta, más de 50 a 85%; muy alta, más de 85%.</span>';
      return s;
    },
    fragment: r => r.error ? 'Edad fuera del modelo' : `RF-CL ${r.p}% (${r.categoria})`
  },

  {
    key: 'estrategiaScasest', title: 'SCASEST: ¿cuándo cateterizar?', accent: '#9c3a2e',
    subtitle: 'Criterios de muy alto y alto riesgo de la ESC 2023',
    incompleteMsg: 'Marca los criterios presentes, o la sospecha.',
    fields: [
      { type: 'note', text: 'MUY ALTO RIESGO (basta uno)' },
      { name: 'inestable', id: 'cisq-es-in', type: 'checkbox', label: 'Inestabilidad hemodinámica o choque cardiogénico' },
      { name: 'dolor', id: 'cisq-es-do', type: 'checkbox', label: 'Dolor recurrente o refractario pese al tratamiento médico' },
      { name: 'arritmia', id: 'cisq-es-ar', type: 'checkbox', label: 'Arritmias que amenazan la vida o parada cardiaca tras llegar' },
      { name: 'mecanica', id: 'cisq-es-me', type: 'checkbox', label: 'Complicaciones mecánicas del infarto' },
      { name: 'ic', id: 'cisq-es-ic', type: 'checkbox', label: 'Insuficiencia cardiaca aguda atribuible a isquemia en curso' },
      { name: 'dinamicoRec', id: 'cisq-es-dr', type: 'checkbox', label: 'Cambios dinámicos recurrentes del ST o la T, sobre todo elevación intermitente del ST' },
      { type: 'note', text: 'ALTO RIESGO (basta uno)' },
      { name: 'nstemi', id: 'cisq-es-ns', type: 'checkbox', label: 'Infarto sin elevación del ST confirmado por el algoritmo de troponina de la ESC' },
      { name: 'dinamico', id: 'cisq-es-di', type: 'checkbox', label: 'Cambios dinámicos del ST o la T' },
      { name: 'transitoria', id: 'cisq-es-tr', type: 'checkbox', label: 'Elevación transitoria del ST' },
      { name: 'grace', id: 'cisq-es-gr', type: 'checkbox', label: 'GRACE por encima de 140' },
      { type: 'note', text: 'SIN CRITERIOS' },
      { name: 'sospechaAlta', id: 'cisq-es-sa', type: 'checkbox', label: 'Sospecha alta de angina inestable' },
      { name: 'sinCriterios', id: 'cisq-es-sc', type: 'checkbox', label: 'Ningún criterio y sospecha baja' }
    ],
    compute(v) {
      const muyAlto = ['inestable', 'dolor', 'arritmia', 'mecanica', 'ic', 'dinamicoRec'].filter(k => v[k]);
      const alto = ['nstemi', 'dinamico', 'transitoria', 'grace'].filter(k => v[k]);
      if (!muyAlto.length && !alto.length && !v.sospechaAlta && !v.sinCriterios) return null;
      let estrategia, clase, color;
      const notas = [];
      if (muyAlto.length) {
        estrategia = 'Coronariografía INMEDIATA'; clase = 'I C'; color = C_ROJO;
        notas.push('No hace falta esperar a la troponina para decidirla.');
        if (v.inestable || v.mecanica) notas.push('Ecocardiograma urgente si hay choque o se sospecha una complicación mecánica (I C).');
      } else if (alto.length) {
        estrategia = 'Coronariografía en MENOS DE 24 HORAS'; clase = 'IIa A'; color = C_AMBAR;
        notas.push('Debe considerarse en menos de 24 horas, y en cualquier caso se recomienda durante el ingreso (I A). La estrategia precoz reduce la isquemia recurrente y la estancia; el posible beneficio de supervivencia se vio en los de alto riesgo, como GRACE por encima de 140.');
      } else if (v.sospechaAlta) {
        estrategia = 'Estrategia invasiva durante el ingreso'; clase = 'I A'; color = C_AZUL;
      } else {
        estrategia = 'Estrategia SELECTIVA tras prueba de isquemia o angio-TC'; clase = 'I A'; color = C_VERDE;
        notas.push('Se maneja como un síndrome coronario crónico.');
      }
      if (muyAlto.length || alto.length) notas.push('No pretratar con un inhibidor del P2Y12 si no se conoce la anatomía y la coronariografía será en menos de 24 horas (III A). Anticoagulación parenteral desde el diagnóstico (I A).');
      if (!muyAlto.length && !alto.length) notas.push('Si la coronariografía no se hará en 24 horas, el anticoagulante recomendado es el fondaparinux (I B).');
      return { estrategia, clase, color, notas, nMuyAlto: muyAlto.length, nAlto: alto.length };
    },
    format(r) {
      let s = `<strong style="color:${r.color};font-size:14.5px;">${r.estrategia}</strong> <span class="figure-tag">${r.clase}</span>`;
      s += `<br>Criterios de muy alto riesgo: ${r.nMuyAlto}; de alto riesgo: ${r.nAlto}.`;
      if (r.notas.length) s += '<br><br>' + lista(r.notas);
      return s;
    },
    fragment: r => `${r.estrategia} (${r.clase})`
  },

  {
    key: 'reperfusionScacest', title: 'IAMCEST: ¿angioplastia o fibrinólisis?', accent: '#8c2e2e',
    subtitle: 'El reloj de la ESC 2023',
    incompleteMsg: 'Escribe las horas desde el inicio de los síntomas.',
    fields: [
      { name: 'horas', id: 'cisq-rp-ho', type: 'number', step: '0.5', label: 'Horas desde el inicio de los síntomas', placeholder: 'ej. 3', row: 'r1' },
      { name: 'minutos', id: 'cisq-rp-mi', type: 'number', step: '5', label: 'Minutos previstos del diagnóstico a la angioplastia, si se conocen', placeholder: 'ej. 150', row: 'r1', required: false },
      { name: 'sintomas', id: 'cisq-rp-si', type: 'checkbox', label: 'Síntomas de isquemia persistentes' },
      { name: 'inestable', id: 'cisq-rp-in', type: 'checkbox', label: 'Inestabilidad hemodinámica' },
      { name: 'arritmia', id: 'cisq-rp-ar', type: 'checkbox', label: 'Arritmias que amenazan la vida' },
      { name: 'choque', id: 'cisq-rp-ch', type: 'checkbox', label: 'Choque cardiogénico' }
    ],
    compute(v) {
      if (v.horas === null || v.horas === undefined) return null;
      if (v.horas < 0) return { error: 'Las horas no pueden ser negativas.' };
      const sinMin = v.minutos === null || v.minutos === undefined;
      let decision, clase, color;
      const pasos = [];
      if (v.horas <= 12) {
        if (sinMin) {
          decision = 'Reperfundir: falta saber si la angioplastia llega en menos de 120 minutos'; clase = 'I A'; color = C_AMBAR;
          pasos.push('Con síntomas de 12 horas o menos, la reperfusión está indicada (I A). Si la angioplastia primaria puede hacerse en menos de 120 minutos desde el diagnóstico, es la preferida (I A); si no, fibrinólisis.');
        } else if (v.minutos < 120) {
          decision = 'Angioplastia primaria'; clase = 'I A'; color = C_VERDE;
          pasos.push('Objetivo: menos de 60 minutos hasta el paso de la guía si llegó a un centro con hemodinámica, menos de 90 si llega trasladado. El traslado va directo a la sala, sin pasar por urgencias ni por la unidad coronaria (I B).');
        } else if (v.choque) {
          decision = 'Fibrinólisis, descartadas las complicaciones mecánicas'; clase = 'IIa C'; color = C_AMBAR;
          pasos.push('En el choque, la fibrinólisis debe considerarse si la angioplastia no es posible en 120 minutos y se han descartado las complicaciones mecánicas (IIa C).');
          pasos.push('Traslado inmediato a un centro con hemodinámica: el choque tras la fibrinólisis pide coronariografía urgente (I A).');
        } else {
          decision = 'Fibrinólisis en menos de 10 minutos, sin contraindicaciones'; clase = 'I A'; color = C_AMBAR;
          pasos.push('Fibrinolítico específico de fibrina (tenecteplasa, alteplasa o reteplasa, I B), idealmente prehospitalario, con aspirina y clopidogrel (I A) y anticoagulación, preferiblemente enoxaparina (I A).');
          pasos.push('Traslado inmediato a un centro con hemodinámica, sin esperar signos de reperfusión (I A).');
          pasos.push('Rescate si la resolución del ST es de menos del 50% a los 60 a 90 minutos, o si hay inestabilidad, isquemia que empeora o dolor persistente (I A); coronariografía de 2 a 24 horas si funcionó (I A).');
        }
      } else if (v.sintomas || v.inestable || v.arritmia || v.choque) {
        decision = 'Angioplastia primaria'; clase = 'I C'; color = C_VERDE;
        pasos.push('Más de 12 horas con síntomas persistentes, inestabilidad o arritmias que amenazan la vida: angioplastia primaria (I C). Pasadas las 12 horas, la angioplastia se prefiere a la fibrinólisis en todos los casos.');
        if (v.choque) pasos.push('En el choque: coronariografía inmediata y angioplastia SOLO de la arteria responsable (I B).');
      } else if (v.horas <= 48) {
        decision = 'Debe considerarse la angioplastia sistemática'; clase = 'IIa B'; color = C_AMBAR;
        pasos.push('Entre 12 y 48 horas sin síntomas persistentes, un ensayo pequeño y registros mostraron más miocardio salvado y mejor supervivencia con la angioplastia sistemática.');
      } else {
        decision = 'No abrir de rutina la arteria ocluida'; clase = 'III A'; color = C_ROJO;
        pasos.push('Más de 48 horas sin síntomas persistentes: la angioplastia sistemática de la arteria ocluida no aporta beneficio (ensayo OAT). Se maneja como una oclusión crónica, según la guía de síndrome coronario crónico.');
      }
      return { decision, clase, color, pasos };
    },
    format(r) {
      if (r.error) return `<span style="color:${C_ROJO};">${r.error}</span>`;
      return `<strong style="color:${r.color};font-size:14.5px;">${r.decision}</strong> <span class="figure-tag">${r.clase}</span><br><br>` + lista(r.pasos);
    },
    fragment: r => r.error ? 'Datos no válidos' : `${r.decision} (${r.clase})`
  },

  {
    key: 'fibrinolisisScacest', title: 'Fibrinólisis en el IAMCEST: contraindicaciones y dosis', accent: '#9c3a52',
    subtitle: 'Tablas 13 y 14 de la ACC/AHA 2025 y ESC 2023',
    incompleteMsg: 'Escribe el peso y la edad.',
    fields: [
      { name: 'peso', id: 'cisq-fb-pe', type: 'number', step: '1', label: 'Peso (kg)', placeholder: 'ej. 78', row: 'r1' },
      { name: 'edad', id: 'cisq-fb-ed', type: 'number', step: '1', label: 'Edad (años)', placeholder: 'ej. 64', row: 'r1' },
      { type: 'note', text: 'CONTRAINDICACIONES ABSOLUTAS' },
      { name: 'hic', id: 'cisq-fb-a1', type: 'checkbox', label: 'Cualquier hemorragia intracraneal previa' },
      { name: 'malformacion', id: 'cisq-fb-a2', type: 'checkbox', label: 'Lesión vascular cerebral estructural conocida (malformación arteriovenosa)' },
      { name: 'neoplasia', id: 'cisq-fb-a3', type: 'checkbox', label: 'Neoplasia intracraneal maligna, primaria o metastásica' },
      { name: 'ictus3m', id: 'cisq-fb-a4', type: 'checkbox', label: 'Ictus isquémico en los 3 meses previos (salvo el agudo de menos de 4,5 h)' },
      { name: 'diseccion', id: 'cisq-fb-a5', type: 'checkbox', label: 'Sospecha de disección aórtica' },
      { name: 'sangrado', id: 'cisq-fb-a6', type: 'checkbox', label: 'Sangrado activo o diátesis hemorrágica (sin contar la menstruación)' },
      { name: 'trauma', id: 'cisq-fb-a7', type: 'checkbox', label: 'Traumatismo craneal o facial importante en los 3 meses previos' },
      { name: 'neurocirugia', id: 'cisq-fb-a8', type: 'checkbox', label: 'Cirugía intracraneal o intraespinal en los 2 meses previos' },
      { name: 'htaGrave', id: 'cisq-fb-a9', type: 'checkbox', label: 'Hipertensión grave que no responde al tratamiento (sistólica de más de 180 o diastólica de más de 110)' },
      { type: 'note', text: 'CONTRAINDICACIONES RELATIVAS' },
      { name: 'r1', id: 'cisq-fb-r1', type: 'checkbox', label: 'Hipertensión crónica grave mal controlada, o hipertensión importante al llegar' },
      { name: 'r2', id: 'cisq-fb-r2', type: 'checkbox', label: 'Ictus isquémico de hace más de 3 meses, demencia u otra patología intracraneal' },
      { name: 'r3', id: 'cisq-fb-r3', type: 'checkbox', label: 'Reanimación traumática o de más de 10 minutos' },
      { name: 'r4', id: 'cisq-fb-r4', type: 'checkbox', label: 'Cirugía mayor en 3 semanas o sangrado interno en 2 a 4 semanas' },
      { name: 'r5', id: 'cisq-fb-r5', type: 'checkbox', label: 'Punciones vasculares no compresibles' },
      { name: 'r6', id: 'cisq-fb-r6', type: 'checkbox', label: 'Embarazo' },
      { name: 'r7', id: 'cisq-fb-r7', type: 'checkbox', label: 'Úlcera péptica activa' },
      { name: 'r8', id: 'cisq-fb-r8', type: 'checkbox', label: 'Anticoagulación oral' }
    ],
    compute(v) {
      if ([v.peso, v.edad].some(x => x === null || x === undefined)) return null;
      if (v.peso < 30 || v.peso > 250 || v.edad < 18 || v.edad > 110) return { error: 'Revisa el peso (30 a 250 kg) y la edad (18 a 110 años).' };
      const absolutas = ['hic', 'malformacion', 'neoplasia', 'ictus3m', 'diseccion', 'sangrado', 'trauma', 'neurocirugia', 'htaGrave'].filter(k => v[k]).length;
      const relativas = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8'].filter(k => v[k]).length;
      const dosisPlena = v.peso < 60 ? 30 : v.peso < 70 ? 35 : v.peso < 80 ? 40 : v.peso < 90 ? 45 : 50;
      const mayor75 = v.edad > 75;
      const dosis = mayor75 ? dosisPlena / 2 : dosisPlena;
      return { absolutas, relativas, dosisPlena, dosis, mayor75, clopi: mayor75 ? 75 : 300 };
    },
    format(r) {
      if (r.error) return `<span style="color:${C_ROJO};">${r.error}</span>`;
      if (r.absolutas) {
        return `<strong style="color:${C_ROJO};font-size:14.5px;">Fibrinólisis CONTRAINDICADA</strong>: ${r.absolutas} contraindicación(es) absoluta(s).<br><br>La reperfusión pasa por la angioplastia primaria.`;
      }
      let s = r.relativas
        ? `<strong style="color:${C_AMBAR};font-size:14.5px;">${r.relativas} contraindicación(es) relativa(s): sopesar el riesgo de hemorragia frente al beneficio.</strong>`
        : `<strong style="color:${C_VERDE};font-size:14.5px;">Sin contraindicaciones marcadas.</strong>`;
      s += '<br><br><strong>Tenecteplasa en bolo único intravenoso</strong><br>';
      s += r.mayor75
        ? `Dosis por peso: ${r.dosisPlena} mg. Por encima de 75 años debe considerarse la MEDIA dosis (IIa B): <strong>${r.dosis} mg</strong>. En el ensayo STREAM, reducir la dosis a la mitad en ese grupo atenuó el exceso de hemorragia intracraneal.`
        : `<strong>${r.dosis} mg</strong> (30 mg por debajo de 60 kg, 35 de 60 a 69, 40 de 70 a 79, 45 de 80 a 89, 50 con 90 o más).`;
      s += '<br><br><strong>Tratamiento asociado</strong><br>' + lista([
        `Aspirina y clopidogrel (I A); clopidogrel ${r.clopi} mg de carga${r.mayor75 ? ' por tener más de 75 años' : ''} y después 75 mg al día.`,
        'Anticoagulación hasta la revascularización o durante el ingreso, hasta 8 días (I A): enoxaparina intravenosa y después subcutánea, la preferida (I A); heparina no fraccionada en bolo por peso e infusión si no hay enoxaparina (I B).',
        'Bolo en menos de 10 minutos del diagnóstico, idealmente prehospitalario (I A), y traslado inmediato a un centro con hemodinámica (I A).'
      ]);
      return s;
    },
    fragment: r => r.error ? 'Datos no válidos' : (r.absolutas ? 'Fibrinólisis contraindicada' : `Tenecteplasa ${r.dosis} mg`)
  },

  {
    key: 'antiagregacionSca', title: 'Antiagregación tras el síndrome coronario agudo', accent: '#3f6b52',
    subtitle: 'Fármaco, dosis y duración según la ESC 2023',
    incompleteMsg: 'Escribe la edad y el peso.',
    fields: [
      { name: 'estrategia', id: 'cisq-ap-es', type: 'select', label: 'Estrategia', options: [
        { value: 'angioplastia', label: 'Va a angioplastia' },
        { value: 'conservador', label: 'Manejo conservador' },
        { value: 'fibrinolisis', label: 'Recibe fibrinólisis' }] },
      { name: 'edad', id: 'cisq-ap-ed', type: 'number', step: '1', label: 'Edad (años)', placeholder: 'ej. 68', row: 'r1' },
      { name: 'peso', id: 'cisq-ap-pe', type: 'number', step: '1', label: 'Peso (kg)', placeholder: 'ej. 72', row: 'r1' },
      { name: 'ictus', id: 'cisq-ap-ic', type: 'checkbox', label: 'Ictus o accidente isquémico transitorio previo' },
      { name: 'aco', id: 'cisq-ap-ac', type: 'checkbox', label: 'Indicación de anticoagulación oral (fibrilación auricular con CHA2DS2-VASc de 1 o más en varones o 2 o más en mujeres)' },
      { name: 'hbr', id: 'cisq-ap-hb', type: 'checkbox', label: 'Riesgo hemorrágico alto' },
      { name: 'digestivo', id: 'cisq-ap-dg', type: 'checkbox', label: 'Riesgo de hemorragia digestiva' },
      { name: 'precoz', id: 'cisq-ap-pr', type: 'checkbox', label: 'SCASEST con anatomía desconocida y coronariografía prevista en menos de 24 h' }
    ],
    compute(v) {
      if ([v.edad, v.peso].some(x => x === null || x === undefined)) return null;
      if (v.edad < 18 || v.edad > 110 || v.peso < 30 || v.peso > 250) return { error: 'Revisa la edad (18 a 110) y el peso (30 a 250 kg).' };
      const items = ['Aspirina: carga de 150 a 300 mg oral (o 75 a 250 mg intravenosa) y 75 a 100 mg al día de por vida (I A).'];
      let p2y12;
      if (v.aco) {
        p2y12 = 'Clopidogrel 75 mg al día con el anticoagulante. Hasta una semana de triple terapia y después anticoagulante directo a dosis de prevención de ictus con clopidogrel hasta 12 meses (I A); a los 12 meses, retirar el antiagregante (I B). Ticagrelor y prasugrel no se usan en la triple terapia (III C).';
      } else if (v.estrategia === 'fibrinolisis') {
        p2y12 = `Clopidogrel ${v.edad > 75 ? 75 : 300} mg de carga al hacer la fibrinólisis${v.edad > 75 ? ' (más de 75 años)' : ''} y 75 mg al día (I A).`;
      } else if (v.estrategia === 'angioplastia' && !v.ictus) {
        const reducida = v.peso < 60 || v.edad >= 75;
        p2y12 = `Prasugrel 60 mg de carga y ${reducida ? '5' : '10'} mg al día (I B)${reducida ? (v.peso < 60 ? ', dosis reducida por pesar menos de 60 kg' : ', dosis reducida y con precaución por tener 75 años o más') : ''}; o ticagrelor 180 mg de carga y 90 mg cada 12 h (I B).`;
      } else if (v.estrategia === 'angioplastia') {
        p2y12 = 'Ticagrelor 180 mg de carga y 90 mg cada 12 h (I B). El prasugrel está contraindicado con ictus previo.';
      } else {
        p2y12 = 'Ticagrelor 180 mg de carga y 90 mg cada 12 h, sea cual sea la estrategia (I B); clopidogrel 300 a 600 mg y 75 mg al día si los otros no pueden usarse (I C).';
      }
      items.push('Inhibidor del P2Y12: ' + p2y12);
      if (!v.aco) items.push(v.hbr
        ? 'Duración: con riesgo hemorrágico alto hay pautas alternativas para acortar o desescalar la doble antiagregación, pero no se desescala en los primeros 30 días (III B).'
        : 'Duración: doble antiagregación 12 meses (I A); no desescalar en los primeros 30 días (III B).');
      if (v.digestivo) items.push('Inhibidor de la bomba de protones mientras dure la combinación (I A).');
      if (v.precoz && v.estrategia !== 'fibrinolisis') items.push('No pretratar con el P2Y12 antes de conocer la anatomía si la coronariografía será en menos de 24 horas (III A): se da en el cateterismo.');
      items.push('Si se opera de revascularización y se suspende, reanudar la doble antiagregación tras la cirugía al menos 12 meses (I C).');
      return { items };
    },
    format(r) {
      if (r.error) return `<span style="color:${C_ROJO};">${r.error}</span>`;
      return `<strong style="color:${C_VERDE};font-size:14.5px;">Pauta antiagregante</strong><br><br>` + lista(r.items);
    },
    fragment: r => r.error ? 'Datos no válidos' : 'Pauta antiagregante'
  }
];

export default { calculators };
