// topics/eccemas/calculators.js - Criterios de dermatitis atopica, POEM, alergica frente a
// irritativa y lectura de pruebas epicutaneas.
// Fuentes: S3 de dermatitis atopica (Werfel T, et al. Allergol Select 2026;10:120-144) y
// Nassau S, Fonacier L. Allergic Contact Dermatitis. Med Clin North Am 2020;104(1):61-76.

const DIAS = [
  { value: '0', label: '0 &middot; Ningún dia' },
  { value: '1', label: '1 &middot; De 1 a 2 días' },
  { value: '2', label: '2 &middot; De 3 a 4 días' },
  { value: '3', label: '3 &middot; De 5 a 6 días' },
  { value: '4', label: '4 &middot; Todos los días' }
];
const poemItem = (name, id, label) => ({ name, id, type: 'select', numeric: true, label, options: DIAS });

export const calculators = [
  {
    key: 'criterios-atopica', title: 'Criterios de dermatitis atópica', accent: '#5c7a3a',
    subtitle: 'Prurito obligatorio más tres de cinco',
    fields: [
      { name: 'prurito', id: 'ec-pr', type: 'checkbox', label: 'PRURITO: cuadro cutáneo que pica (criterio obligatorio)' },
      { type: 'note', text: 'Y además, tres o más de los siguientes cinco:' },
      { name: 'pliegues', id: 'ec-c1', type: 'checkbox', label: 'Antecedente de afectación de pliegues (codos, rodillas, tobillos, cuello)' },
      { name: 'atopia', id: 'ec-c2', type: 'checkbox', label: 'Antecedente personal de asma o rinitis alérgica' },
      { name: 'seca', id: 'ec-c3', type: 'checkbox', label: 'Piel seca generalizada en el último año' },
      { name: 'visible', id: 'ec-c4', type: 'checkbox', label: 'Eccema flexural visible en la exploración' },
      { name: 'inicio', id: 'ec-c5', type: 'checkbox', label: 'Inicio antes de los dos años de edad' },
      { type: 'note', text: 'Estos criterios sirven para el uso clínico y epidemiológico, y no sustituyen al juicio ante una presentación atípica. En el adulto que debuta sin historia previa de atopia, conviene desconfiar y pensar en contacto, escabiosis o linfoma cutáneo.' }
    ],
    compute(v) {
      const items = [
        ['afectación de pliegues', v.pliegues], ['asma o rinitis alérgica', v.atopia],
        ['piel seca en el último año', v.seca], ['eccema flexural visible', v.visible],
        ['inicio antes de los dos años', v.inicio]
      ];
      const positivos = items.filter(i => i[1]).map(i => i[0]);
      return {
        prurito: !!v.prurito, n: positivos.length, positivos,
        cumple: !!v.prurito && positivos.length >= 3
      };
    },
    format(r) {
      if (!r.prurito) {
        let s = '<strong style="color:#8c3a34;">No se cumplen los criterios: falta el prurito, que es OBLIGATORIO.</strong>';
        s += '<br><span style="opacity:.85;">Un eccema que no pica no es una dermatitis atópica. Conviene replantear el diagnóstico: dermatitis de contacto, eccema de estasis, tinea o, en el adulto con placas persistentes, micosis fungoide.</span>';
        if (r.n) s += `<br><span style="opacity:.75;">Reúne además ${r.n} de los 5 criterios de apoyo, pero sin prurito no bastan.</span>`;
        return s;
      }
      let s = r.cumple
        ? `<strong style="color:#3f6b52;">Cumple criterios de dermatitis atópica:</strong> prurito más ${r.n} de 5.`
        : `<strong style="color:#8a6a1f;">No se cumplen todavía:</strong> hay prurito pero solo ${r.n} de los 5 criterios (hacen falta 3).`;
      if (r.positivos.length) s += `<br><span style="opacity:.85;">Presentes: ${r.positivos.join(', ')}.</span>`;
      if (!r.cumple) s += '<br><span style="opacity:.75;">No cumplir los criterios no descarta la enfermedad, sobre todo en el adulto, pero obliga a considerar en serio las alternativas antes de etiquetar.</span>';
      s += '<br><span style="opacity:.75;">La inmunoglobulina E no forma parte de los criterios: no confirma ni descarta, y existe la forma intrínseca con IgE normal.</span>';
      return s;
    },
    fragment: r => (r.cumple ? `cumple criterios de dermatitis atópica (prurito + ${r.n}/5)` : `no cumple criterios (${r.prurito ? 'prurito + ' : 'sin prurito, '}${r.n}/5)`)
  },

  {
    key: 'poem', title: 'POEM', accent: '#3d5a73',
    subtitle: 'Medida de síntomas referida por el paciente &middot; 0 a 28',
    incompleteMsg: 'Responde las siete preguntas.',
    fields: [
      { type: 'note', text: 'Lo responde el PACIENTE sobre la ÚLTIMA SEMANA. Su virtud es que recoge lo que el vive, no lo que el médico ve el dia de la consulta.' },
      poemItem('picor', 'ec-p1', '¿Cuántos días ha tenido PICOR?'),
      poemItem('sueno', 'ec-p2', '¿Cuántos días le ha alterado el SUEÑO?'),
      poemItem('exuda', 'ec-p3', '¿Cuántos días le ha SUPURADO o exudado la piel?'),
      poemItem('fisuras', 'ec-p4', '¿Cuántos días ha tenido GRIETAS o fisuras?'),
      poemItem('descama', 'ec-p5', '¿Cuántos días se le ha DESCAMADO la piel?'),
      poemItem('seca', 'ec-p6', '¿Cuántos días ha notado la piel SECA o aspera?'),
      poemItem('sangra', 'ec-p7', '¿Cuántos días le ha SANGRADO la piel?')
    ],
    compute(v) {
      const items = [
        ['picor', v.picor], ['sueño', v.sueno], ['exudacion', v.exuda], ['fisuras', v.fisuras],
        ['descamacion', v.descama], ['sequedad', v.seca], ['sangrado', v.sangra]
      ];
      const total = items.reduce((a, b) => a + b[1], 0);
      let banda;
      if (total <= 2) banda = 'ausente o casi ausente';
      else if (total <= 7) banda = 'leve';
      else if (total <= 16) banda = 'moderada';
      else if (total <= 24) banda = 'grave';
      else banda = 'muy grave';
      const peores = items.filter(i => i[1] >= 3).map(i => i[0]);
      return { total, banda, peores, sueno: v.sueno, picor: v.picor };
    },
    format(r) {
      let s = `<strong>POEM ${r.total} / 28: enfermedad ${r.banda}.</strong>`;
      if (r.peores.length) s += `<br><span style="opacity:.85;">Lo que más días le afecta: ${r.peores.join(', ')}.</span>`;
      if (r.sueno >= 3) {
        s += '<br><strong style="color:#8c3a34;">El sueño esta alterado casi a diario.</strong> Es el dato que más pesa en la calidad de vida y el que más rápido mejora con los sistémicos modernos: merece la pena preguntarlo siempre y usarlo al decidir si se escala.';
      }
      if (r.total >= 17) {
        s += '<br><span style="color:#8c3a34;">Enfermedad grave o muy grave:</span> si no se controla con tratamiento tópico bien aplicado, es candidato a fototerapia o a tratamiento sistémico.';
      } else if (r.total <= 2) {
        s += '<br><span style="color:#3f6b52;">Prácticamente sin síntomas.</span> Mantener el emoliente diario y la terapia proactiva en las zonas que recaen.';
      }
      s += '<br><span style="opacity:.75;">Antes de dar por fracasado un tratamiento tópico, comprobar la TÉCNICA y la CANTIDAD: buena parte de los fracasos aparentes son de aplicación, no de fármaco.</span>';
      return s;
    },
    fragment: r => `POEM ${r.total}/28 (${r.banda})`
  },

  {
    key: 'acd-vs-icd', title: 'Contacto: alérgica o irritativa', accent: '#8c3a34',
    subtitle: 'Cruza latencia, bordes, síntoma y a quien más afecta',
    incompleteMsg: 'Elige la latencia y el síntoma predominante.',
    fields: [
      { name: 'latencia', id: 'ec-a1', type: 'select', label: 'Tiempo entre el contacto y la lesión', options: [
        { value: '', label: 'Elegir...' },
        { value: 'tardia', label: 'De 24 a 72 horas después' },
        { value: 'rapida', label: 'De minutos a pocas horas' },
        { value: 'cronica', label: 'Semanas o meses de exposición repetida' }
      ] },
      { name: 'sintoma', id: 'ec-a2', type: 'select', label: 'Síntoma predominante', options: [
        { value: '', label: 'Elegir...' },
        { value: 'picor', label: 'Picor' },
        { value: 'escozor', label: 'Escozor o ardor' }
      ] },
      { name: 'bordes', id: 'ec-a3', type: 'checkbox', label: 'Bordes netos o geometricos que dibujan un objeto' },
      { name: 'disemina', id: 'ec-a4', type: 'checkbox', label: 'Lesiones más allá de la zona de contacto' },
      { name: 'otros', id: 'ec-a5', type: 'checkbox', label: 'Otras personas expuestas a lo mismo también están afectadas' },
      { name: 'previo', id: 'ec-a6', type: 'checkbox', label: 'Usaba el producto desde hace tiempo sin problemas' },
      { name: 'humedo', id: 'ec-a7', type: 'checkbox', label: 'Trabajo en húmedo, lavados frecuentes o guantes oclusivos' }
    ],
    compute(v) {
      if (!v.latencia || !v.sintoma) return null;
      let alergica = 0, irritativa = 0;
      const razonesA = [], razonesI = [];
      if (v.latencia === 'tardia') { alergica += 2; razonesA.push('latencia de 24 a 72 horas'); }
      if (v.latencia === 'rapida') { irritativa += 2; razonesI.push('aparición en minutos u horas'); }
      if (v.latencia === 'cronica') { irritativa += 1; razonesI.push('exposición repetida prolongada'); }
      if (v.sintoma === 'picor') { alergica += 1; razonesA.push('predomina el picor'); }
      else { irritativa += 2; razonesI.push('predomina el escozor'); }
      if (v.bordes) { alergica += 1; razonesA.push('bordes geometricos'); }
      if (v.disemina) { alergica += 2; razonesA.push('lesiones a distancia'); }
      if (v.otros) { irritativa += 2; razonesI.push('afecta a otros expuestos'); }
      if (v.previo) { alergica += 1; razonesA.push('tolerancia previa al producto'); }
      if (v.humedo) { irritativa += 1; razonesI.push('trabajo en húmedo u oclusión'); }
      const dif = alergica - irritativa;
      let veredicto;
      if (dif >= 2) veredicto = 'alergica';
      else if (dif <= -2) veredicto = 'irritativa';
      else veredicto = 'mixta';
      return { alergica, irritativa, razonesA, razonesI, veredicto, previo: !!v.previo };
    },
    format(r) {
      let s;
      if (r.veredicto === 'alergica') s = '<strong style="color:#8c3a34;">Orienta a dermatitis de contacto ALÉRGICA.</strong>';
      else if (r.veredicto === 'irritativa') s = '<strong style="color:#8a5a2e;">Orienta a dermatitis de contacto IRRITATIVA.</strong>';
      else s = '<strong style="color:#8a6a1f;">Los datos no separan bien: cuadro posiblemente MIXTO.</strong>';
      if (r.razonesA.length) s += `<br><span style="opacity:.85;">A favor de alérgica: ${r.razonesA.join(', ')}.</span>`;
      if (r.razonesI.length) s += `<br><span style="opacity:.85;">A favor de irritativa: ${r.razonesI.join(', ')}.</span>`;
      if (r.previo) {
        s += '<br><span style="opacity:.85;">Haber usado el producto durante años sin problema <strong>no descarta</strong> la alergia: al contrario, es típico. La sensibilización es silenciosa y puede tardar mucho en producirse.</span>';
      }
      if (r.veredicto === 'mixta') {
        s += '<br><span style="opacity:.85;">Es una situación frecuente y no un fallo de la valoración: la irritación rompe la barrera y facilita que el hapteno penetre y sensibilice, de modo que las dos coexisten a menudo.</span>';
      }
      s += '<br><span style="opacity:.75;"><strong>En los tres casos se hacen pruebas epicutaneas</strong> si el eccema no mejora: en la alérgica para identificar el alérgeno, y en la irritativa para descartar una alergia sobreañadida, incluida la alergia al propio tratamiento tópico.</span>';
      return s;
    },
    fragment: r => `contacto de perfil ${r.veredicto}`
  },

  {
    key: 'epicutaneas', title: 'Lectura de las pruebas epicutaneas', accent: '#5a4a8c',
    subtitle: 'Graduación, curso temporal y relevancia',
    incompleteMsg: 'Elige lo que se ve y en que lectura.',
    fields: [
      { name: 'morfo', id: 'ec-e1', type: 'select', label: 'Que se ve en el sitio del parche', options: [
        { value: '', label: 'Elegir...' },
        { value: 'nada', label: 'Nada' },
        { value: 'eritema', label: 'Solo eritema leve, sin relieve' },
        { value: 'papulas', label: 'Eritema con infiltración y papulas' },
        { value: 'vesiculas', label: 'Lo anterior, más vesiculas' },
        { value: 'ampollas', label: 'Ampollas o ulceracion' },
        { value: 'quemadura', label: 'Eritema brillante de borde neto, tipo quemadura' }
      ] },
      { name: 'curso', id: 'ec-e2', type: 'select', label: 'Como se comporta entre la lectura de 48 h y la diferida', options: [
        { value: '', label: 'Elegir...' },
        { value: 'crece', label: 'Crece o aparece en la lectura diferida' },
        { value: 'igual', label: 'Se mantiene igual' },
        { value: 'apaga', label: 'Se apaga' },
        { value: 'nohay', label: 'No se ha hecho lectura diferida' }
      ] },
      { name: 'relevancia', id: 'ec-e3', type: 'select', label: 'Relevancia clínica', options: [
        { value: '', label: 'Elegir...' },
        { value: 'si', label: 'Esta expuesto y la exposición encaja con su eccema' },
        { value: 'pasada', label: 'Estuvo expuesto en el pasado, no ahora' },
        { value: 'no', label: 'No consta exposición a esa sustancia' },
        { value: 'sinbuscar', label: 'Todavía no se ha investigado' }
      ] },
      { type: 'note', text: 'El parche se retira y se lee a las 48 horas, y se vuelve a leer de forma diferida a las 96 horas o más. Muchos alérgenos, entre ellos corticoides y metales, dan positividades tardías que se pierden si solo se lee una vez.' }
    ],
    compute(v) {
      if (!v.morfo || !v.curso || !v.relevancia) return null;
      const grado = {
        nada: 'negativa', eritema: 'dudosa', papulas: 'positiva débil',
        vesiculas: 'positiva fuerte', ampollas: 'positiva muy intensa', quemadura: 'probable reacción irritativa'
      }[v.morfo];
      const positiva = ['papulas', 'vesiculas', 'ampollas'].includes(v.morfo);
      const irritativa = v.morfo === 'quemadura' || (positiva && v.curso === 'apaga');
      return {
        grado, positiva, irritativa, morfo: v.morfo,
        curso: v.curso, relevancia: v.relevancia,
        sinDiferida: v.curso === 'nohay',
        util: positiva && !irritativa && v.relevancia === 'si'
      };
    },
    format(r) {
      let s = `<strong>Lectura: ${r.grado}.</strong>`;
      if (r.morfo === 'nada') s += '<br><span style="opacity:.85;">Una lectura negativa no descarta el diagnóstico: puede faltar el alérgeno en la bateria usada, o tratarse de una dermatitis irritativa.</span>';
      if (r.irritativa) {
        s += '<br><strong style="color:#8a5a2e;">El comportamiento sugiere una reacción IRRITATIVA,</strong> no alérgica: el eritema brillante de borde neto y, sobre todo, una reacción que se APAGA entre las dos lecturas apuntan ahi. Una reacción alérgica tiende a crecer con el tiempo.';
      } else if (r.positiva && r.curso === 'crece') {
        s += '<br><span style="color:#8c3a34;">Crece en la lectura diferida, que es el comportamiento propio de una reacción alérgica de tipo IV.</span>';
      }
      if (r.sinDiferida) {
        s += '<br><strong style="color:#8a6a1f;">Falta la lectura diferida.</strong> Sin ella se pierden las positividades tardías (corticoides y metales, entre otros) y no se puede valorar el curso temporal, que es la mejor pista para separar alergia de irritación.';
      }
      if (r.positiva) {
        if (r.relevancia === 'si') {
          s += '<br><strong style="color:#3f6b52;">Positividad con relevancia clínica.</strong> Esto si explica el cuadro: toca entregar una lista escrita de evitación con los SINÓNIMOS comerciales del alérgeno y donde se encuentra.';
        } else if (r.relevancia === 'pasada') {
          s += '<br><span style="color:#8a6a1f;">Relevancia pasada:</span> explica episodios previos pero no necesariamente el actual. Hay que seguir buscando.';
        } else if (r.relevancia === 'no') {
          s += '<br><strong style="color:#8c3a34;">Positividad SIN relevancia clínica.</strong> Es el error más frecuente al interpretar estas pruebas: dar el caso por resuelto con una sustancia que el paciente no toca nunca. No cierra nada.';
        } else {
          s += '<br><strong style="color:#8a6a1f;">Falta el paso decisivo: juzgar la RELEVANCIA.</strong> Una positividad solo importa si el paciente esta expuesto a esa sustancia y la exposición encaja con la localización de su eccema.';
        }
      }
      if (r.util) s += '<br><span style="opacity:.75;">Revisar a las semanas si la evitación ha funcionado. Si no mejora, reconsiderar la relevancia y buscar exposiciones no sospechadas.</span>';
      return s;
    },
    fragment: r => `parche: ${r.grado}${r.positiva ? (r.relevancia === 'si' ? ', con relevancia clínica' : ', relevancia por establecer') : ''}`
  }
];

export const combinedNote = {
  title: 'Nota combinada', accent: '#5c7a3a',
  subtitle: 'Rene criterios, POEM, perfil de contacto y lectura de parches',
  items: ['criterios-atopica', 'poem', 'acd-vs-icd', 'epicutaneas'],
  build(results, missing) {
    const partes = [];
    if (results['criterios-atopica']) {
      const c = results['criterios-atopica'];
      partes.push(c.cumple ? `cumple criterios de dermatitis atópica (prurito + ${c.n}/5)` : `no cumple criterios de dermatitis atópica (${c.n}/5)`);
    }
    if (results.poem) partes.push(`POEM ${results.poem.total}/28, ${results.poem.banda}`);
    if (results['acd-vs-icd']) partes.push(`perfil de contacto ${results['acd-vs-icd'].veredicto}`);
    if (results.epicutaneas) {
      const e = results.epicutaneas;
      partes.push(`prueba epicutanea ${e.grado}${e.positiva && e.relevancia === 'si' ? ' con relevancia clínica' : ''}`);
    }
    let html = partes.length ? 'Eccema: ' + partes.join('; ') + '.' : 'Completa las escalas seleccionadas.';
    if (missing.length) html += `<div style="margin-top:10px;color:#b0453d;font-size:12.5px;">Faltan datos en: ${missing.join(', ')}.</div>`;
    return html;
  }
};

export default { calculators, combinedNote };
