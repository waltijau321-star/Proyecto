// topics/eritemas-reactivos/calculators.js - Orientacion del nodulo o placa dolorosa, estudio
// etiologico del eritema nodoso, eritema multiforme frente a Stevens-Johnson, Sweet frente a
// celulitis y pioderma frente a otras ulceras.
// Fuentes: Schwartz RA, Nervi SJ. Am Fam Physician 2007;75(5):695-700 (causas y estudio del
// eritema nodoso, biopsia profunda, paniculitis septal); Sokumbi O, Wetter DA. Int J Dermatol
// 2012;51(8):889-902 (eritema multiforme, frontera con Stevens-Johnson, profilaxis antiviral);
// Joshi TP, et al. Am J Clin Dermatol 2022;23(3):301-318 (sindrome de Sweet); Nadarajah N, et al.
// Skin Health Dis 2026;6(4):393-405 (asociaciones sistemicas del pioderma gangrenoso).
// NINGUNA de estas calculadoras reproduce un juego de criterios publicado: los criterios de von
// den Driesch, los de Walker y Cohen y las puntuaciones Su, Delphi y PARACELSUS se citan en el
// tema pero no se transcriben aqui. Lo que hacen estas herramientas es ordenar los rasgos
// clinicos que SI describen las fuentes, y decirlo en el resultado.

export const calculators = [
  {
    key: 'nodulo-doloroso', title: 'Orientación del nódulo o placa dolorosa', accent: '#9c3a52',
    subtitle: 'La profundidad y una pregunta: ¿se úlcera?',
    incompleteMsg: 'Elige a que profundidad esta la lesión.',
    fields: [
      { name: 'profundidad', id: 'er-nd-prof', type: 'select', label: '¿Dónde esta la lesión?', options: [
        { value: '', label: 'Elegir...' },
        { value: 'grasa', label: 'Nódulo PROFUNDO, mal delimitado, se palpa más de lo que se ve' },
        { value: 'dermis', label: 'PLACA infiltrada, caliente, elevada sobre el plano de la piel' },
        { value: 'union', label: 'Lesión en DIANA con zonas concéntricas y centro oscuro' },
        { value: 'ulcera', label: 'ÚLCERA de borde elevado y socavado' }
      ] },
      { name: 'simetrico', id: 'er-nd-sim', type: 'checkbox', label: 'Simétrico y en la cara anterior de las piernas' },
      { name: 'ulcera', id: 'er-nd-ulc', type: 'checkbox', label: 'La lesión se ÚLCERA o deja atrofia o una depresión' },
      { name: 'fiebre', id: 'er-nd-fie', type: 'checkbox', label: 'Fiebre' },
      { name: 'neutrofilia', id: 'er-nd-neu', type: 'checkbox', label: 'Neutrofilia en el hemograma' },
      { name: 'patergia', id: 'er-nd-pat', type: 'checkbox', label: 'Empeoró después de un traumatismo, una cura o una cirugía' },
      { name: 'cultivoNeg', id: 'er-nd-cul', type: 'checkbox', label: 'Cultivos negativos y el antibiótico no ha funcionado' },
      { name: 'acral', id: 'er-nd-acr', type: 'checkbox', label: 'Distribución acral (manos, pies, codos)' },
      { type: 'note', text: 'El eritema nodoso NO se úlcera y cura sin atrofia ni cicatriz. Si lo hace, hay que replantear el diagnóstico.' }
    ],
    compute(v) {
      if (!v.profundidad) return null;
      const p = v.profundidad;
      let sospecha, capa, biopsia;
      if (p === 'grasa') {
        capa = 'grasa subcutánea: es una paniculitis';
        sospecha = (v.ulcera || (!v.simetrico && !v.ulcera && false)) ? 'paniculitis-lobulillar' : 'eritema-nodoso';
        if (v.ulcera) sospecha = 'paniculitis-lobulillar';
        biopsia = 'incisional o excisional PROFUNDA (un punch no llega a la grasa)';
      } else if (p === 'dermis') {
        capa = 'dermis: es una dermatosis neutrofílica';
        sospecha = 'sweet';
        biopsia = 'de la placa, buscando infiltrado neutrofílico dérmico SIN vasculitis leucocitoclástica';
      } else if (p === 'union') {
        capa = 'unión dermoepidérmica';
        sospecha = 'eritema-multiforme';
        biopsia = 'de la lesión, solo si hay que separarlo de sus imitadores';
      } else {
        capa = 'dermis, con pérdida de sustancia';
        sospecha = 'pioderma';
        biopsia = 'del borde, para EXCLUIR otras causas de úlcera (no confirma el pioderma)';
      }
      const apoyos = [];
      if (v.simetrico) apoyos.push('simetría pretibial');
      if (v.fiebre) apoyos.push('fiebre');
      if (v.neutrofilia) apoyos.push('neutrofilia');
      if (v.patergia) apoyos.push('patergia');
      if (v.cultivoNeg) apoyos.push('cultivos negativos sin respuesta al antibiótico');
      if (v.acral) apoyos.push('distribución acral');
      return { sospecha, capa, biopsia, apoyos, ulcera: v.ulcera, patergia: v.patergia, fiebre: v.fiebre, neutrofilia: v.neutrofilia, cultivoNeg: v.cultivoNeg };
    },
    format(r) {
      const txt = {
        'eritema-nodoso': '<strong style="color:#9c3a52;">Encaja con ERITEMA NODOSO</strong>, la paniculitis septal sin vasculitis y la más frecuente de todas. Lo que hay que hacer ahora no es tratar la piel: es buscar la causa.',
        'paniculitis-lobulillar': '<strong style="color:#7a5a3a;">NO encaja con eritema nodoso</strong>, porque este no se úlcera ni deja atrofia. Hay que pensar en una paniculitis LOBULILLAR: lupica, pancreática, por déficit de alfa-1-antitripsina, facticia, o la histiocitica citofagica, que en realidad es un linfoma T subcutáneo.',
        'sweet': '<strong style="color:#8a5a2e;">Encaja con SÍNDROME DE SWEET</strong> si hay fiebre y neutrofilia: es la dermatosis neutrofílica febril aguda, con placas dolorosas en miembros superiores, cara y cuello.',
        'eritema-multiforme': '<strong style="color:#b05a2e;">Encaja con ERITEMA MULTIFORME</strong>. Comprueba que la diana sea PAPULAR y que todas las lesiones hayan salido en las primeras 72 horas: si son maculas y predominan en el tronco, se trata de otra enfermedad.',
        'pioderma': '<strong style="color:#8c3a34;">Encaja con PIODERMA GANGRENOSO</strong>, sobre todo si el dolor es desproporcionado y la úlcera crecio rápido desde una papula o pústula estéril.'
      }[r.sospecha];
      let s = `<span style="opacity:.85;">Capa afectada: ${r.capa}.</span><br>${txt}`;
      s += `<br><strong>Biopsia:</strong> ${r.biopsia}.`;
      if (r.apoyos.length) s += `<br><span style="opacity:.85;">Apoyan: ${r.apoyos.join(', ')}.</span>`;
      if (r.sospecha === 'sweet' && !r.fiebre && !r.neutrofilia) s += '<br><span style="color:#8a6a1f;">Sin fiebre ni neutrofilia el Sweet queda más débil: los criterios exigen clínica e histología compatibles y la fiebre esta entre los criterios menores.</span>';
      if (r.patergia) s += '<br><strong style="color:#8c3a34;">Patergia:</strong> el traumatismo mínimo precipita o agrava la lesión. Es el rasgo del pioderma con más consecuencias, porque convierte el desbridamiento en una forma de empeorar la enfermedad. NO desbridar.';
      if (r.cultivoNeg) s += '<br><span style="opacity:.85;">Los cultivos negativos con falta de respuesta al antibiótico no son un fallo del tratamiento: son un dato diagnóstico a favor de una dermatosis neutrofílica.</span>';
      s += '<br><span style="opacity:.75;font-size:12.5px;">Esta herramienta ordena rasgos clínicos; no es ninguno de los juegos de criterios publicados (von den Driesch para el Sweet, Su, Delphi o PARACELSUS para el pioderma).</span>';
      return s;
    },
    fragment: r => `lesión de ${r.capa.split(':')[0]}, compatible con ${r.sospecha.replace(/-/g, ' ')}`
  },

  {
    key: 'eritema-nodoso-estudio', title: 'Estudio etiológico del eritema nodoso', accent: '#9c3a52',
    subtitle: 'Lo que hay que pedir a todos, y lo que depende de la historia',
    incompleteMsg: 'Marca al menos un dato de la historia, o ninguno para ver el estudio básico.',
    fields: [
      { name: 'faringitis', id: 'er-en-far', type: 'checkbox', label: 'Faringitis en las últimas semanas' },
      { name: 'digestivo', id: 'er-en-dig', type: 'checkbox', label: 'Diarrea o síntomas digestivos' },
      { name: 'respiratorio', id: 'er-en-res', type: 'checkbox', label: 'Tos, disnea o síntomas respiratorios' },
      { name: 'farmaco', id: 'er-en-fco', type: 'checkbox', label: 'Fármaco nuevo (sulfonamida, amoxicilina) o anticonceptivo oral' },
      { name: 'embarazo', id: 'er-en-emb', type: 'checkbox', label: 'Embarazo' },
      { name: 'riesgoTb', id: 'er-en-tb', type: 'checkbox', label: 'Riesgo de exposición a tuberculosis' },
      { name: 'viajes', id: 'er-en-via', type: 'checkbox', label: 'Viaje o residencia en zona de micosis endémica' },
      { name: 'adenopatias', id: 'er-en-ade', type: 'checkbox', label: 'Adenopatías hiliares bilaterales en la radiografía' },
      { type: 'note', text: 'Hasta el 55% de los casos queda como idiopático DESPUÉS de buscar. Buscar sigue valiendo la pena, porque el eritema nodoso puede ser el primer signo de una enfermedad tratable.' }
    ],
    compute(v) {
      const basico = [
        'Hemograma con diferencial (puede haber leucocitosis por encima de 10.000 por mm3)',
        'VSG y proteína C reactiva',
        'Estudio de estreptococo: cultivo faringeo, antígeno rápido y título de ANTIESTREPTOLISINA O',
        'Repetir el título de antiestreptolisina O a las CUATRO SEMANAS: lo que demuestra la infección reciente es el ascenso',
        'Radiografía de tórax',
        'Estratificar el riesgo de tuberculosis en TODOS los pacientes'
      ];
      const dirigido = [];
      const pistas = [];
      if (v.faringitis) { dirigido.push('El estudio de estreptococo pasa a ser prioritario: el eritema nodoso aparece 2 a 3 semanas después de la faringitis'); pistas.push({ causa: 'Faringitis estreptocócica', frec: '44% de los adultos y 48% de los niños' }); }
      if (v.digestivo) { dirigido.push('Coprocultivo y estudio de huevos y parásitos, y valoración de enfermedad inflamatoria intestinal'); pistas.push({ causa: 'Enteropatia inflamatoria', frec: '1 a 4%' }); }
      if (v.respiratorio || v.adenopatias) { dirigido.push('Radiografía de tórax leida buscando adenopatías hiliares bilaterales; si están, sarcoidosis'); pistas.push({ causa: 'Sarcoidosis', frec: '11 a 25%' }); }
      if (v.farmaco) { dirigido.push('Revisar y, si se puede, retirar el fármaco sospechoso'); pistas.push({ causa: 'Farmacos', frec: '3 a 10%' }); }
      if (v.embarazo) { dirigido.push('Embarazo como causa posible; si hay coccidioidomicosis, el eritema nodoso es un signo de BUEN pronóstico porque la diseminación es menos probable'); pistas.push({ causa: 'Embarazo', frec: '2 a 5%' }); }
      if (v.riesgoTb) dirigido.push('Tuberculina, radiografía y baciloscopia de esputo. Con tuberculina positiva se recomienda tratamiento antituberculoso, con foco identificado o sin el');
      if (v.viajes) dirigido.push('Valorar micosis sistémica según la zona: histoplasmosis, coccidioidomicosis, blastomicosis, paracoccidioidomicosis');
      if (v.adenopatias) dirigido.push('Con eritema nodoso, adenopatías hiliares bilaterales y artritis de tobillos se cumple el síndrome de LOFGREN, y su especificidad es tan alta que NO hace falta biopsia (ver el tema de Sarcoidosis)');
      const lofgren = v.adenopatias;
      return { basico, dirigido, pistas, lofgren, nadaDirigido: dirigido.length === 0 };
    },
    format(r) {
      let s = '<strong style="color:#9c3a52;">Estudio básico, en todos los pacientes</strong><br>' + r.basico.map(x => '&bull; ' + x).join('<br>');
      if (r.dirigido.length) s += '<br><br><strong>Estudio dirigido por la historia</strong><br>' + r.dirigido.map(x => '&bull; ' + x).join('<br>');
      else s += '<br><br><span style="opacity:.85;">Sin datos dirigidos en la historia: el estudio básico es lo que corresponde, y la anamnesis hay que repetirla, porque es lo que más rinde.</span>';
      if (r.pistas.length) s += '<br><br><strong>Frecuencia de las causas que la historia sugiere</strong><br>' + r.pistas.map(p => `&bull; ${p.causa}: ${p.frec}`).join('<br>');
      if (r.lofgren) s += '<br><br><strong style="color:#3f6b52;">Posible síndrome de Lofgren.</strong> Es la forma de sarcoidosis de mejor pronóstico: la mayoría remite sola en meses y el tratamiento suele limitarse a antiinflamatorios y reposo.';
      s += '<br><br><span style="opacity:.75;font-size:12.5px;">Y el orden del tratamiento: tratar la CAUSA es el paso más importante; antiinflamatorios no esteroideos para el dolor; y corticoide a 1 mg/kg/dia solo después de excluir infección, riesgo de diseminación bacteriana o sepsis, y neoplasia.</span>';
      return s;
    },
    fragment: r => `estudio de eritema nodoso${r.dirigido.length ? ' con ' + r.dirigido.length + ' pruebas dirigidas' : ' basico'}`
  },

  {
    key: 'em-vs-sjs', title: 'Eritema multiforme o Stevens-Johnson', accent: '#b05a2e',
    subtitle: 'No son un espectro: son dos enfermedades',
    incompleteMsg: 'Indica como es la lesión cutánea.',
    fields: [
      { name: 'lesion', id: 'er-em-les', type: 'select', label: 'La lesión cutánea es...', options: [
        { value: '', label: 'Elegir...' },
        { value: 'papular', label: 'PAPULAR: diana elevada que se palpa' },
        { value: 'macular', label: 'MACULAR: mancha plana, diana atípica' }
      ] },
      { name: 'distribucion', id: 'er-em-dis', type: 'select', label: 'Predominio', options: [
        { value: 'acral', label: 'Acral: manos, pies, codos' },
        { value: 'tronco', label: 'Tronco, extendiendose hacia la periferia' }
      ], row: 'em1' },
      { name: 'mucosa', id: 'er-em-muc', type: 'checkbox', label: 'Erosiones en mucosa oral, genital u ocular', row: 'em1' },
      { name: 'herpes', id: 'er-em-her', type: 'checkbox', label: 'Herpes labial o genital en las semanas previas' },
      { name: 'farmaco', id: 'er-em-fco', type: 'checkbox', label: 'Fármaco nuevo en las semanas previas' },
      { name: 'en72h', id: 'er-em-72', type: 'checkbox', label: 'Todas las lesiones aparecieron en las primeras 72 horas y son fijas' },
      { name: 'despegamiento', id: 'er-em-des', type: 'checkbox', label: 'Hay despegamiento cutáneo o signo de Nikolsky positivo' },
      { name: 'episodios', id: 'er-em-epi', type: 'number', required: false, label: 'Episodios en el último año (dejar vacio si es el primero)', placeholder: 'ej. 7' },
      { type: 'note', text: 'La afectación mucosa NO separa las dos enfermedades: las dos la tienen. Solo separa el eritema multiforme menor del mayor.' }
    ],
    compute(v) {
      if (!v.lesion) return null;
      const dist = v.distribucion || 'acral';
      let puntosEm = 0, puntosSjs = 0;
      if (v.lesion === 'papular') puntosEm += 3; else puntosSjs += 3;
      if (dist === 'acral') puntosEm += 2; else puntosSjs += 2;
      if (v.herpes) puntosEm += 2;
      if (v.farmaco) puntosSjs += 1;
      if (v.en72h) puntosEm += 1;
      if (v.despegamiento) puntosSjs += 3;
      const dx = puntosEm > puntosSjs ? 'em' : (puntosSjs > puntosEm ? 'sjs' : 'dudoso');
      const ep = (v.episodios === null || v.episodios === undefined || v.episodios === '' || isNaN(v.episodios)) ? null : Number(v.episodios);
      return { dx, puntosEm, puntosSjs, mucosa: !!v.mucosa, recurrente: ep !== null && ep > 6, episodios: ep, despegamiento: !!v.despegamiento, herpes: !!v.herpes, farmaco: !!v.farmaco };
    },
    format(r) {
      let s;
      if (r.dx === 'em') {
        s = `<strong style="color:#b05a2e;">Los rasgos apuntan a ERITEMA MULTIFORME ${r.mucosa ? 'MAYOR' : 'MENOR'}.</strong>`;
        s += `<br><span style="opacity:.9;">${r.mucosa ? 'Tiene afectación mucosa, y eso es lo único que lo hace "mayor": sigue siendo un eritema multiforme, no un Stevens-Johnson.' : 'Sin afectación mucosa es eritema multiforme menor.'}</span>`;
        s += '<br>Conducta: buscar el VIRUS. La infección explica alrededor del 90% de los casos y el herpes simple es el primero de la lista; en el niño, Mycoplasma pneumoniae. Los fármacos explican menos del 10%.';
        s += '<br><span style="opacity:.85;">Y un detalle que se falla: el antiviral iniciado cuando ya hay lesiones NO modifica el curso clínico. Su papel es la profilaxis de las recurrencias.</span>';
      } else if (r.dx === 'sjs') {
        s = '<strong style="color:#8c3a34;">Los rasgos NO encajan con eritema multiforme.</strong>';
        s += '<br>Una lesión macular, de predominio troncular y con progresión apunta a <strong>Stevens-Johnson</strong>, que es una enfermedad distinta y mediada por FÁRMACOS. Conducta: identificar y retirar el fármaco de inmediato, y seguir el módulo 77 (Farmacodermias y eritrodermia), donde están el SCORTEN y el manejo del despegamiento.';
      } else {
        s = '<strong style="color:#8a6a1f;">Los rasgos no separan bien las dos entidades.</strong><br>Las dos preguntas que más discriminan son si la lesión es papular o macular y si predomina en zonas acrales o en el tronco. Ante la duda, se trata como la posibilidad más grave: buscar y retirar fármacos y valorar como Stevens-Johnson.';
      }
      if (r.despegamiento) s += '<br><strong style="color:#8c3a34;">Hay despegamiento cutáneo:</strong> eso saca el caso de este tema. Va al módulo de Farmacodermias y eritrodermia.';
      if (r.recurrente) s += `<br><strong style="color:#b05a2e;">Más de seis episodios en un año (${r.episodios}): es un eritema multiforme RECURRENTE.</strong> Cambia el tratamiento: prueba de seis meses de antiviral continuo (aciclovir 400 mg dos veces al dia, valaciclovir 500 mg dos veces al dia o famciclovir 250 mg dos veces al dia), y se ofrece AUNQUE no se identifique el herpes, porque en las formas idiopáticas se ha detectado ADN viral en la piel hasta en el 50% de los casos.`;
      if (r.mucosa && r.dx === 'em') s += '<br><span style="opacity:.85;">Si la mucositis impide la ingesta, valorar ingreso por el desequilibrio hidroelectrolítico, y prednisona 40-60 mg al dia con descenso en 2 a 4 semanas. Si hay afectación ocular, consulta a oftalmologia.</span>';
      return s;
    },
    fragment: r => r.dx === 'em' ? `eritema multiforme ${r.mucosa ? 'mayor' : 'menor'}` : (r.dx === 'sjs' ? 'perfil de Stevens-Johnson, no de eritema multiforme' : 'frontera no resuelta entre eritema multiforme y Stevens-Johnson')
  },

  {
    key: 'sweet-vs-celulitis', title: 'La placa febril: Sweet o celulitis', accent: '#8a5a2e',
    subtitle: 'Y, si es Sweet, que hay que buscar detrás',
    incompleteMsg: 'Marca los datos que tengas de la placa.',
    fields: [
      { name: 'fiebre', id: 'er-sw-fie', type: 'checkbox', label: 'Fiebre' },
      { name: 'neutrofilia', id: 'er-sw-neu', type: 'checkbox', label: 'Neutrofilia en sangre' },
      { name: 'localizacion', id: 'er-sw-loc', type: 'select', label: 'Localización de las lesiones', options: [
        { value: 'tipica', label: 'Miembros superiores, cara o cuello' },
        { value: 'otra', label: 'Otra localización' }
      ] },
      { name: 'cultivoNeg', id: 'er-sw-cul', type: 'checkbox', label: 'Cultivos negativos' },
      { name: 'sinRespuesta', id: 'er-sw-abx', type: 'checkbox', label: 'Ya ha recibido antibiótico y no ha mejorado' },
      { name: 'histologia', id: 'er-sw-his', type: 'select', label: 'Biopsia', options: [
        { value: 'nd', label: 'No disponible' },
        { value: 'neutro', label: 'Infiltrado neutrofílico dérmico, sin vasculitis leucocitoclástica' },
        { value: 'vasculitis', label: 'Vasculitis leucocitoclástica' },
        { value: 'otro', label: 'Infiltrado eosinofilico o linfocítico' }
      ] },
      { name: 'farmacoHemato', id: 'er-sw-fh', type: 'checkbox', label: 'Lleva G-CSF, ATRA o un inhibidor de tirosina cinasa' },
      { name: 'citopenias', id: 'er-sw-cit', type: 'checkbox', label: 'Citopenias o formas anormales en el frotis' },
      { type: 'note', text: 'El Sweet subcutáneo y el Sweet similar a celulitis no se distinguen de una celulitis solo con la exploración. Lo que los separa es que los cultivos no crecen y el antibiótico no induce remisión.' }
    ],
    compute(v) {
      let a_favor = 0, en_contra = 0;
      const pros = [], contras = [];
      if (v.fiebre) { a_favor++; pros.push('fiebre'); }
      if (v.neutrofilia) { a_favor++; pros.push('neutrofilia'); }
      if ((v.localizacion || 'tipica') === 'tipica') { a_favor++; pros.push('localización típica en miembros superiores, cara o cuello'); }
      if (v.cultivoNeg) { a_favor++; pros.push('cultivos negativos'); }
      if (v.sinRespuesta) { a_favor++; pros.push('falta de respuesta al antibiótico'); }
      if (v.histologia === 'neutro') { a_favor += 2; pros.push('infiltrado neutrofílico dérmico sin vasculitis'); }
      if (v.histologia === 'vasculitis') { en_contra += 2; contras.push('la vasculitis leucocitoclástica NO debe verse en el Sweet'); }
      if (v.histologia === 'otro') { en_contra++; contras.push('el nombre Sweet no debe usarse para infiltrados eosinofilicos o linfocíticos, aunque imiten la clínica'); }
      const perfil = en_contra > 0 ? 'replantear' : (a_favor >= 4 ? 'probable' : (a_favor >= 2 ? 'posible' : 'debil'));
      const buscar = [];
      if (v.farmacoHemato) buscar.push('El fármaco es el primer sospechoso: el factor estimulante de colonias de granulocitos, el ATRA y los inhibidores de tirosina cinasa son desencadenantes yatrogenos frecuentes, y su mecanismo esta bien explicado. Retirarlo puede ser todo el tratamiento, y para atribuirlo hay que cumplir TODOS los criterios de Walker y Cohen');
      if (v.citopenias) buscar.push('Las citopenias o las formas anormales obligan a estudio de medula ósea: en la leucemia mieloide aguda la incidencia de Sweet fue del 1% en una serie de 2178 pacientes y del 5,5% en otra de 216');
      buscar.push('Hemograma con diferencial y frotis en todos, y marcadores inflamatorios');
      buscar.push('Revisión completa de los fármacos de las últimas semanas');
      buscar.push('Buscar infección, con las micobacterias no tuberculosas en mente: el Sweet fue la dermatosis reactiva más frecuente en una serie de infección por micobacterias no tuberculosas, con una prevalencia del 3,4%');
      return { perfil, pros, contras, buscar, a_favor, farmacoHemato: !!v.farmacoHemato, citopenias: !!v.citopenias };
    },
    format(r) {
      const txt = {
        'probable': '<strong style="color:#8a5a2e;">El perfil es compatible con SÍNDROME DE SWEET.</strong>',
        'posible': '<strong style="color:#8a6a1f;">El perfil es POSIBLE pero incompleto.</strong> Faltan datos: la fiebre, la neutrofilia y la biopsia son los que más aportan.',
        'debil': '<strong style="color:#8a6a1f;">Con estos datos el Sweet es poco probable.</strong> Antes de seguir por aquí, reconsidera una celulitis y las demás causas de placa dolorosa.',
        'replantear': '<strong style="color:#8c3a34;">Hay un dato que obliga a replantear el diagnóstico.</strong>'
      }[r.perfil];
      let s = txt;
      if (r.pros.length) s += `<br><span style="opacity:.85;">A favor: ${r.pros.join(', ')}.</span>`;
      if (r.contras.length) s += `<br><span style="color:#8c3a34;">En contra: ${r.contras.join('; ')}.</span>`;
      if (r.perfil === 'probable' || r.perfil === 'posible') {
        s += '<br><br><strong>Que hay que buscar detrás</strong><br>' + r.buscar.map(b => '&bull; ' + b).join('<br>');
        s += '<br><br><span style="opacity:.9;">Tratamiento: el corticoide es la primera línea y la respuesta es llamativamente rápida en la mayoría de los pacientes, tanto que, descartada la infección, una respuesta rápida apoya el diagnóstico. Si no responde, la indometacina es la opción con el nivel de evidencia más alto; la acitretina, la colchicina y la dapsona se apoyan en estudios retrospectivos.</span>';
        s += '<br><span style="opacity:.75;font-size:12.5px;">Y no lo cierres como idiopático: en una serie de 23 pacientes con mielodisplasia y Sweet, 15 de los diagnósticos hematológicos se hicieron DESPUÉS del episodio cutáneo.</span>';
      }
      return s;
    },
    fragment: r => `placa febril con perfil ${r.perfil} de síndrome de Sweet`
  },

  {
    key: 'pioderma-vs-ulcera', title: 'La úlcera: pioderma o no', accent: '#8c3a34',
    subtitle: 'Y la búsqueda sistémica, ordenada por la edad',
    incompleteMsg: 'Describe el borde de la úlcera.',
    fields: [
      { name: 'borde', id: 'er-pg-bor', type: 'select', label: 'Borde de la úlcera', options: [
        { value: '', label: 'Elegir...' },
        { value: 'socavado', label: 'Elevado, socavado y violaceo' },
        { value: 'plano', label: 'Plano o con fondo de granulación' },
        { value: 'necrotico', label: 'Necrótico o con esfacelos' }
      ] },
      { name: 'inicioPustula', id: 'er-pg-pus', type: 'checkbox', label: 'Empezo como una papula o pústula estéril' },
      { name: 'rapida', id: 'er-pg-rap', type: 'checkbox', label: 'Crecio rápidamente' },
      { name: 'dolorDespro', id: 'er-pg-dol', type: 'checkbox', label: 'Dolor desproporcionado al tamaño' },
      { name: 'patergia', id: 'er-pg-pat', type: 'checkbox', label: 'Empeoró después de un desbridamiento, una cura o una cirugía' },
      { name: 'vascular', id: 'er-pg-vas', type: 'checkbox', label: 'Hay insuficiencia venosa o arteriopatia conocidas' },
      { name: 'edad', id: 'er-pg-eda', type: 'number', required: false, label: 'Edad en años (dejar vacio si no se conoce)', placeholder: 'ej. 58' },
      { name: 'eii', id: 'er-pg-eii', type: 'checkbox', label: 'Enfermedad inflamatoria intestinal conocida o clínica digestiva' },
      { type: 'note', text: 'El diagnóstico del pioderma es CLÍNICO. La biopsia se hace para excluir otras causas de úlcera, no para confirmarlo: la histología es inespecífica.' }
    ],
    compute(v) {
      if (!v.borde) return null;
      let pts = 0;
      const pros = [];
      if (v.borde === 'socavado') { pts += 3; pros.push('borde elevado, socavado y violaceo'); }
      if (v.inicioPustula) { pts += 2; pros.push('inicio como papula o pústula estéril'); }
      if (v.rapida) { pts += 1; pros.push('crecimiento rápido'); }
      if (v.dolorDespro) { pts += 2; pros.push('dolor desproporcionado'); }
      if (v.patergia) { pts += 3; pros.push('patergia'); }
      const perfil = pts >= 7 ? 'probable' : (pts >= 4 ? 'posible' : 'poco');
      const edad = (v.edad === null || v.edad === undefined || v.edad === '' || isNaN(v.edad)) ? null : Number(v.edad);
      const busqueda = [];
      if (edad !== null && edad < 65) {
        busqueda.push('Por debajo de los 65 años, lo PRIMERO es el intestino: la enfermedad inflamatoria intestinal es significativamente más frecuente en este grupo de edad');
        busqueda.push('Enfermedad inflamatoria intestinal: 17,6% en la estimación agrupada y del 26 al 41% en grandes bases de datos. Más frecuente en enfermedad ACTIVA (45%) que en remisión (18%), sin diferencia entre Crohn y colitis ulcerosa');
      } else if (edad !== null) {
        busqueda.push('Por encima de los 65 años, la artritis, los tumores sólidos y los trastornos hematológicos son significativamente más frecuentes que por debajo de esa edad');
        busqueda.push('Artritis inflamatoria (12,8%), reumatoide o seronegativa');
        busqueda.push('Estudio hematológico: trastornos hematológicos en el 3 al 6%');
      } else {
        busqueda.push('Enfermedad inflamatoria intestinal (17,6% agrupado; 26 a 41% en bases de datos), artritis (12,8%), neoplasia hematológica (8,9%) y tumor sólido (7,4%)');
      }
      busqueda.push('Proteinograma e inmunofijación en TODOS: gammapatía monoclonal en el 27% de una cohorte, IgA el subtipo más frecuente, y neoplasia en el 28% de los que la tenian frente al 6% de los que no');
      busqueda.push('Función renal: riesgo aumentado de insuficiencia renal crónica (HR 3,68) y de diálisis (HR 27,79), y la relación es bidireccional');
      busqueda.push('Glucemia y valoración cardiaca: diabetes sin complicaciones (OR 1,92) e insuficiencia cardiaca (OR 2,01)');
      return { perfil, pts, pros, busqueda, patergia: !!v.patergia, vascular: !!v.vascular, eii: !!v.eii, edad, borde: v.borde };
    },
    format(r) {
      const txt = {
        'probable': '<strong style="color:#8c3a34;">El perfil es compatible con PIODERMA GANGRENOSO.</strong> El subtipo ulcerativo supone alrededor del 85% de los casos.',
        'posible': '<strong style="color:#8a6a1f;">Perfil POSIBLE de pioderma gangrenoso.</strong> Los rasgos que más discriminan son el borde socavado violaceo, la patergia y el dolor desproporcionado.',
        'poco': '<strong style="color:#8a6a1f;">El perfil no apoya un pioderma.</strong> Una úlcera de miembro inferior tiene explicaciones mucho más frecuentes, y todas se tratan de otra forma.'
      }[r.perfil];
      let s = txt;
      if (r.pros.length) s += `<br><span style="opacity:.85;">A favor: ${r.pros.join(', ')}.</span>`;
      if (r.vascular) s += '<br><span style="opacity:.85;">Hay enfermedad vascular conocida: eso no excluye el pioderma, pero obliga a demostrar que la úlcera no es venosa ni arterial antes de inmunosuprimir.</span>';
      if (r.perfil !== 'poco') {
        s += '<br><br><strong style="color:#8c3a34;">Lo primero es lo que NO se hace: no desbridar.</strong> El pioderma responde al traumatismo con más enfermedad, de modo que el desbridamiento agranda la úlcera.';
        if (r.patergia) s += ' En este caso ya hay patergia documentada, que es la confirmación clínica de ese fenómeno.';
        s += '<br>Biopsiar el borde para EXCLUIR oclusión vascular, enfermedad venosa, vasculitis, cáncer, infección primaria y úlcera por fármacos. Tomar cultivos.';
        s += '<br>Tratamiento de primera línea: un inmunosupresor de acción RÁPIDA, corticoide sistémico o ciclosporina, seguido de un ahorrador de corticoide, con cuidados de la herida. La evidencia es escasa: solo hay dos ensayos aleatorizados publicados.';
        s += '<br><br><strong>Búsqueda sistémica</strong><br>' + r.busqueda.map(b => '&bull; ' + b).join('<br>');
        if (r.eii) s += '<br><span style="color:#3f6b52;">Con enfermedad inflamatoria intestinal de fondo, controlar la actividad intestinal puede resolver la piel: hay descrita desaparición del pioderma en un mes al tratar la colitis ulcerosa.</span>';
        s += '<br><span style="opacity:.75;font-size:12.5px;">Prudencia con los tumores sólidos: un estudio no encontró asociación bidireccional significativa, y los pacientes con las dos cosas eran bastante mayores (71,7 frente a 51,9 años), lo que sugiere el riesgo propio de la edad y no un vínculo causal.</span>';
      }
      return s;
    },
    fragment: r => `úlcera con perfil ${r.perfil} de pioderma gangrenoso`
  }
];

export const combinedNote = {
  title: 'La piel señala, y hay que seguir el dedo', accent: '#9c3a52',
  subtitle: 'Encadena las calculadoras del tema',
  items: ['nodulo-doloroso', 'eritema-nodoso-estudio', 'em-vs-sjs', 'sweet-vs-celulitis', 'pioderma-vs-ulcera'],
  build(results, missing) {
    const partes = [];
    const nd = results['nodulo-doloroso'];
    const en = results['eritema-nodoso-estudio'];
    const em = results['em-vs-sjs'];
    const sw = results['sweet-vs-celulitis'];
    const pg = results['pioderma-vs-ulcera'];
    if (nd) partes.push(`La lesión esta en la <strong>${nd.capa.split(':')[0]}</strong>, lo que orienta a <strong>${nd.sospecha.replace(/-/g, ' ')}</strong>, y la biopsia que corresponde es ${nd.biopsia}.`);
    if (en) partes.push(`El estudio del eritema nodoso parte de las pruebas básicas${en.dirigido.length ? ` más ${en.dirigido.length} dirigidas por la historia` : ', sin nada dirigido por ahora'}.`);
    if (em) partes.push(`En la frontera del eritema multiforme, los rasgos apuntan a <strong>${em.dx === 'em' ? 'eritema multiforme ' + (em.mucosa ? 'mayor' : 'menor') : (em.dx === 'sjs' ? 'Stevens-Johnson, que es otra enfermedad y otro módulo' : 'una frontera sin resolver')}</strong>.`);
    if (sw) partes.push(`La placa febril tiene un perfil <strong>${sw.perfil}</strong> de síndrome de Sweet.`);
    if (pg) partes.push(`La úlcera tiene un perfil <strong>${pg.perfil}</strong> de pioderma gangrenoso.`);
    let html = partes.join(' ');
    if (!html) html = 'Rellena al menos una de las calculadoras del tema.';
    else html += ' <span style="opacity:.75;">Ninguna de estas lesiones es una enfermedad de la piel: todas son una indicación de buscar.</span>';
    if (missing.length) html += `<div style="margin-top:10px;color:#b0453d;font-size:12.5px;">Faltan datos en: ${missing.join(', ')}.</div>`;
    return html;
  }
};

export default { calculators, combinedNote };
