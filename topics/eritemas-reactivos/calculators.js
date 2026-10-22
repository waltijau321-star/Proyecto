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
    key: 'nodulo-doloroso', title: 'Orientacion del nodulo o placa dolorosa', accent: '#9c3a52',
    subtitle: 'La profundidad y una pregunta: &#191;se ulcera?',
    incompleteMsg: 'Elige a que profundidad esta la lesion.',
    fields: [
      { name: 'profundidad', id: 'er-nd-prof', type: 'select', label: '&#191;Donde esta la lesion?', options: [
        { value: '', label: 'Elegir...' },
        { value: 'grasa', label: 'Nodulo PROFUNDO, mal delimitado, se palpa mas de lo que se ve' },
        { value: 'dermis', label: 'PLACA infiltrada, caliente, elevada sobre el plano de la piel' },
        { value: 'union', label: 'Lesion en DIANA con zonas concentricas y centro oscuro' },
        { value: 'ulcera', label: 'ULCERA de borde elevado y socavado' }
      ] },
      { name: 'simetrico', id: 'er-nd-sim', type: 'checkbox', label: 'Simetrico y en la cara anterior de las piernas' },
      { name: 'ulcera', id: 'er-nd-ulc', type: 'checkbox', label: 'La lesion se ULCERA o deja atrofia o una depresion' },
      { name: 'fiebre', id: 'er-nd-fie', type: 'checkbox', label: 'Fiebre' },
      { name: 'neutrofilia', id: 'er-nd-neu', type: 'checkbox', label: 'Neutrofilia en el hemograma' },
      { name: 'patergia', id: 'er-nd-pat', type: 'checkbox', label: 'Empeoro despues de un traumatismo, una cura o una cirugia' },
      { name: 'cultivoNeg', id: 'er-nd-cul', type: 'checkbox', label: 'Cultivos negativos y el antibiotico no ha funcionado' },
      { name: 'acral', id: 'er-nd-acr', type: 'checkbox', label: 'Distribucion acral (manos, pies, codos)' },
      { type: 'note', text: 'El eritema nodoso NO se ulcera y cura sin atrofia ni cicatriz. Si lo hace, hay que replantear el diagnostico.' }
    ],
    compute(v) {
      if (!v.profundidad) return null;
      const p = v.profundidad;
      let sospecha, capa, biopsia;
      if (p === 'grasa') {
        capa = 'grasa subcutanea: es una paniculitis';
        sospecha = (v.ulcera || (!v.simetrico && !v.ulcera && false)) ? 'paniculitis-lobulillar' : 'eritema-nodoso';
        if (v.ulcera) sospecha = 'paniculitis-lobulillar';
        biopsia = 'incisional o excisional PROFUNDA (un punch no llega a la grasa)';
      } else if (p === 'dermis') {
        capa = 'dermis: es una dermatosis neutrofilica';
        sospecha = 'sweet';
        biopsia = 'de la placa, buscando infiltrado neutrofilico dermico SIN vasculitis leucocitoclastica';
      } else if (p === 'union') {
        capa = 'union dermoepidermica';
        sospecha = 'eritema-multiforme';
        biopsia = 'de la lesion, solo si hay que separarlo de sus imitadores';
      } else {
        capa = 'dermis, con perdida de sustancia';
        sospecha = 'pioderma';
        biopsia = 'del borde, para EXCLUIR otras causas de ulcera (no confirma el pioderma)';
      }
      const apoyos = [];
      if (v.simetrico) apoyos.push('simetria pretibial');
      if (v.fiebre) apoyos.push('fiebre');
      if (v.neutrofilia) apoyos.push('neutrofilia');
      if (v.patergia) apoyos.push('patergia');
      if (v.cultivoNeg) apoyos.push('cultivos negativos sin respuesta al antibiotico');
      if (v.acral) apoyos.push('distribucion acral');
      return { sospecha, capa, biopsia, apoyos, ulcera: v.ulcera, patergia: v.patergia, fiebre: v.fiebre, neutrofilia: v.neutrofilia, cultivoNeg: v.cultivoNeg };
    },
    format(r) {
      const txt = {
        'eritema-nodoso': '<strong style="color:#9c3a52;">Encaja con ERITEMA NODOSO</strong>, la paniculitis septal sin vasculitis y la mas frecuente de todas. Lo que hay que hacer ahora no es tratar la piel: es buscar la causa.',
        'paniculitis-lobulillar': '<strong style="color:#7a5a3a;">NO encaja con eritema nodoso</strong>, porque este no se ulcera ni deja atrofia. Hay que pensar en una paniculitis LOBULILLAR: lupica, pancreatica, por deficit de alfa-1-antitripsina, facticia, o la histiocitica citofagica, que en realidad es un linfoma T subcutaneo.',
        'sweet': '<strong style="color:#8a5a2e;">Encaja con SINDROME DE SWEET</strong> si hay fiebre y neutrofilia: es la dermatosis neutrofilica febril aguda, con placas dolorosas en miembros superiores, cara y cuello.',
        'eritema-multiforme': '<strong style="color:#b05a2e;">Encaja con ERITEMA MULTIFORME</strong>. Comprueba que la diana sea PAPULAR y que todas las lesiones hayan salido en las primeras 72 horas: si son maculas y predominan en el tronco, se trata de otra enfermedad.',
        'pioderma': '<strong style="color:#8c3a34;">Encaja con PIODERMA GANGRENOSO</strong>, sobre todo si el dolor es desproporcionado y la ulcera crecio rapido desde una papula o pustula esteril.'
      }[r.sospecha];
      let s = `<span style="opacity:.85;">Capa afectada: ${r.capa}.</span><br>${txt}`;
      s += `<br><strong>Biopsia:</strong> ${r.biopsia}.`;
      if (r.apoyos.length) s += `<br><span style="opacity:.85;">Apoyan: ${r.apoyos.join(', ')}.</span>`;
      if (r.sospecha === 'sweet' && !r.fiebre && !r.neutrofilia) s += '<br><span style="color:#8a6a1f;">Sin fiebre ni neutrofilia el Sweet queda mas debil: los criterios exigen clinica e histologia compatibles y la fiebre esta entre los criterios menores.</span>';
      if (r.patergia) s += '<br><strong style="color:#8c3a34;">Patergia:</strong> el traumatismo minimo precipita o agrava la lesion. Es el rasgo del pioderma con mas consecuencias, porque convierte el desbridamiento en una forma de empeorar la enfermedad. NO desbridar.';
      if (r.cultivoNeg) s += '<br><span style="opacity:.85;">Los cultivos negativos con falta de respuesta al antibiotico no son un fallo del tratamiento: son un dato diagnostico a favor de una dermatosis neutrofilica.</span>';
      s += '<br><span style="opacity:.75;font-size:12.5px;">Esta herramienta ordena rasgos clinicos; no es ninguno de los juegos de criterios publicados (von den Driesch para el Sweet, Su, Delphi o PARACELSUS para el pioderma).</span>';
      return s;
    },
    fragment: r => `lesion de ${r.capa.split(':')[0]}, compatible con ${r.sospecha.replace(/-/g, ' ')}`
  },

  {
    key: 'eritema-nodoso-estudio', title: 'Estudio etiologico del eritema nodoso', accent: '#9c3a52',
    subtitle: 'Lo que hay que pedir a todos, y lo que depende de la historia',
    incompleteMsg: 'Marca al menos un dato de la historia, o ninguno para ver el estudio basico.',
    fields: [
      { name: 'faringitis', id: 'er-en-far', type: 'checkbox', label: 'Faringitis en las ultimas semanas' },
      { name: 'digestivo', id: 'er-en-dig', type: 'checkbox', label: 'Diarrea o sintomas digestivos' },
      { name: 'respiratorio', id: 'er-en-res', type: 'checkbox', label: 'Tos, disnea o sintomas respiratorios' },
      { name: 'farmaco', id: 'er-en-fco', type: 'checkbox', label: 'Farmaco nuevo (sulfonamida, amoxicilina) o anticonceptivo oral' },
      { name: 'embarazo', id: 'er-en-emb', type: 'checkbox', label: 'Embarazo' },
      { name: 'riesgoTb', id: 'er-en-tb', type: 'checkbox', label: 'Riesgo de exposicion a tuberculosis' },
      { name: 'viajes', id: 'er-en-via', type: 'checkbox', label: 'Viaje o residencia en zona de micosis endemica' },
      { name: 'adenopatias', id: 'er-en-ade', type: 'checkbox', label: 'Adenopatias hiliares bilaterales en la radiografia' },
      { type: 'note', text: 'Hasta el 55% de los casos queda como idiopatico DESPUES de buscar. Buscar sigue valiendo la pena, porque el eritema nodoso puede ser el primer signo de una enfermedad tratable.' }
    ],
    compute(v) {
      const basico = [
        'Hemograma con diferencial (puede haber leucocitosis por encima de 10.000 por mm3)',
        'VSG y proteina C reactiva',
        'Estudio de estreptococo: cultivo faringeo, antigeno rapido y titulo de ANTIESTREPTOLISINA O',
        'Repetir el titulo de antiestreptolisina O a las CUATRO SEMANAS: lo que demuestra la infeccion reciente es el ascenso',
        'Radiografia de torax',
        'Estratificar el riesgo de tuberculosis en TODOS los pacientes'
      ];
      const dirigido = [];
      const pistas = [];
      if (v.faringitis) { dirigido.push('El estudio de estreptococo pasa a ser prioritario: el eritema nodoso aparece 2 a 3 semanas despues de la faringitis'); pistas.push({ causa: 'Faringitis estreptococica', frec: '44% de los adultos y 48% de los ni&#241;os' }); }
      if (v.digestivo) { dirigido.push('Coprocultivo y estudio de huevos y parasitos, y valoracion de enfermedad inflamatoria intestinal'); pistas.push({ causa: 'Enteropatia inflamatoria', frec: '1 a 4%' }); }
      if (v.respiratorio || v.adenopatias) { dirigido.push('Radiografia de torax leida buscando adenopatias hiliares bilaterales; si estan, sarcoidosis'); pistas.push({ causa: 'Sarcoidosis', frec: '11 a 25%' }); }
      if (v.farmaco) { dirigido.push('Revisar y, si se puede, retirar el farmaco sospechoso'); pistas.push({ causa: 'Farmacos', frec: '3 a 10%' }); }
      if (v.embarazo) { dirigido.push('Embarazo como causa posible; si hay coccidioidomicosis, el eritema nodoso es un signo de BUEN pronostico porque la diseminacion es menos probable'); pistas.push({ causa: 'Embarazo', frec: '2 a 5%' }); }
      if (v.riesgoTb) dirigido.push('Tuberculina, radiografia y baciloscopia de esputo. Con tuberculina positiva se recomienda tratamiento antituberculoso, con foco identificado o sin el');
      if (v.viajes) dirigido.push('Valorar micosis sistemica segun la zona: histoplasmosis, coccidioidomicosis, blastomicosis, paracoccidioidomicosis');
      if (v.adenopatias) dirigido.push('Con eritema nodoso, adenopatias hiliares bilaterales y artritis de tobillos se cumple el sindrome de LOFGREN, y su especificidad es tan alta que NO hace falta biopsia (ver el tema de Sarcoidosis)');
      const lofgren = v.adenopatias;
      return { basico, dirigido, pistas, lofgren, nadaDirigido: dirigido.length === 0 };
    },
    format(r) {
      let s = '<strong style="color:#9c3a52;">Estudio basico, en todos los pacientes</strong><br>' + r.basico.map(x => '&bull; ' + x).join('<br>');
      if (r.dirigido.length) s += '<br><br><strong>Estudio dirigido por la historia</strong><br>' + r.dirigido.map(x => '&bull; ' + x).join('<br>');
      else s += '<br><br><span style="opacity:.85;">Sin datos dirigidos en la historia: el estudio basico es lo que corresponde, y la anamnesis hay que repetirla, porque es lo que mas rinde.</span>';
      if (r.pistas.length) s += '<br><br><strong>Frecuencia de las causas que la historia sugiere</strong><br>' + r.pistas.map(p => `&bull; ${p.causa}: ${p.frec}`).join('<br>');
      if (r.lofgren) s += '<br><br><strong style="color:#3f6b52;">Posible sindrome de Lofgren.</strong> Es la forma de sarcoidosis de mejor pronostico: la mayoria remite sola en meses y el tratamiento suele limitarse a antiinflamatorios y reposo.';
      s += '<br><br><span style="opacity:.75;font-size:12.5px;">Y el orden del tratamiento: tratar la CAUSA es el paso mas importante; antiinflamatorios no esteroideos para el dolor; y corticoide a 1 mg/kg/dia solo despues de excluir infeccion, riesgo de diseminacion bacteriana o sepsis, y neoplasia.</span>';
      return s;
    },
    fragment: r => `estudio de eritema nodoso${r.dirigido.length ? ' con ' + r.dirigido.length + ' pruebas dirigidas' : ' basico'}`
  },

  {
    key: 'em-vs-sjs', title: 'Eritema multiforme o Stevens-Johnson', accent: '#b05a2e',
    subtitle: 'No son un espectro: son dos enfermedades',
    incompleteMsg: 'Indica como es la lesion cutanea.',
    fields: [
      { name: 'lesion', id: 'er-em-les', type: 'select', label: 'La lesion cutanea es...', options: [
        { value: '', label: 'Elegir...' },
        { value: 'papular', label: 'PAPULAR: diana elevada que se palpa' },
        { value: 'macular', label: 'MACULAR: mancha plana, diana atipica' }
      ] },
      { name: 'distribucion', id: 'er-em-dis', type: 'select', label: 'Predominio', options: [
        { value: 'acral', label: 'Acral: manos, pies, codos' },
        { value: 'tronco', label: 'Tronco, extendiendose hacia la periferia' }
      ], row: 'em1' },
      { name: 'mucosa', id: 'er-em-muc', type: 'checkbox', label: 'Erosiones en mucosa oral, genital u ocular', row: 'em1' },
      { name: 'herpes', id: 'er-em-her', type: 'checkbox', label: 'Herpes labial o genital en las semanas previas' },
      { name: 'farmaco', id: 'er-em-fco', type: 'checkbox', label: 'Farmaco nuevo en las semanas previas' },
      { name: 'en72h', id: 'er-em-72', type: 'checkbox', label: 'Todas las lesiones aparecieron en las primeras 72 horas y son fijas' },
      { name: 'despegamiento', id: 'er-em-des', type: 'checkbox', label: 'Hay despegamiento cutaneo o signo de Nikolsky positivo' },
      { name: 'episodios', id: 'er-em-epi', type: 'number', required: false, label: 'Episodios en el ultimo a&#241;o (dejar vacio si es el primero)', placeholder: 'ej. 7' },
      { type: 'note', text: 'La afectacion mucosa NO separa las dos enfermedades: las dos la tienen. Solo separa el eritema multiforme menor del mayor.' }
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
        s += `<br><span style="opacity:.9;">${r.mucosa ? 'Tiene afectacion mucosa, y eso es lo unico que lo hace "mayor": sigue siendo un eritema multiforme, no un Stevens-Johnson.' : 'Sin afectacion mucosa es eritema multiforme menor.'}</span>`;
        s += '<br>Conducta: buscar el VIRUS. La infeccion explica alrededor del 90% de los casos y el herpes simple es el primero de la lista; en el ni&#241;o, Mycoplasma pneumoniae. Los farmacos explican menos del 10%.';
        s += '<br><span style="opacity:.85;">Y un detalle que se falla: el antiviral iniciado cuando ya hay lesiones NO modifica el curso clinico. Su papel es la profilaxis de las recurrencias.</span>';
      } else if (r.dx === 'sjs') {
        s = '<strong style="color:#8c3a34;">Los rasgos NO encajan con eritema multiforme.</strong>';
        s += '<br>Una lesion macular, de predominio troncular y con progresion apunta a <strong>Stevens-Johnson</strong>, que es una enfermedad distinta y mediada por FARMACOS. Conducta: identificar y retirar el farmaco de inmediato, y seguir el modulo 77 (Farmacodermias y eritrodermia), donde estan el SCORTEN y el manejo del despegamiento.';
      } else {
        s = '<strong style="color:#8a6a1f;">Los rasgos no separan bien las dos entidades.</strong><br>Las dos preguntas que mas discriminan son si la lesion es papular o macular y si predomina en zonas acrales o en el tronco. Ante la duda, se trata como la posibilidad mas grave: buscar y retirar farmacos y valorar como Stevens-Johnson.';
      }
      if (r.despegamiento) s += '<br><strong style="color:#8c3a34;">Hay despegamiento cutaneo:</strong> eso saca el caso de este tema. Va al modulo de Farmacodermias y eritrodermia.';
      if (r.recurrente) s += `<br><strong style="color:#b05a2e;">Mas de seis episodios en un a&#241;o (${r.episodios}): es un eritema multiforme RECURRENTE.</strong> Cambia el tratamiento: prueba de seis meses de antiviral continuo (aciclovir 400 mg dos veces al dia, valaciclovir 500 mg dos veces al dia o famciclovir 250 mg dos veces al dia), y se ofrece AUNQUE no se identifique el herpes, porque en las formas idiopaticas se ha detectado ADN viral en la piel hasta en el 50% de los casos.`;
      if (r.mucosa && r.dx === 'em') s += '<br><span style="opacity:.85;">Si la mucositis impide la ingesta, valorar ingreso por el desequilibrio hidroelectrolitico, y prednisona 40-60 mg al dia con descenso en 2 a 4 semanas. Si hay afectacion ocular, consulta a oftalmologia.</span>';
      return s;
    },
    fragment: r => r.dx === 'em' ? `eritema multiforme ${r.mucosa ? 'mayor' : 'menor'}` : (r.dx === 'sjs' ? 'perfil de Stevens-Johnson, no de eritema multiforme' : 'frontera no resuelta entre eritema multiforme y Stevens-Johnson')
  },

  {
    key: 'sweet-vs-celulitis', title: 'La placa febril: Sweet o celulitis', accent: '#8a5a2e',
    subtitle: 'Y, si es Sweet, que hay que buscar detras',
    incompleteMsg: 'Marca los datos que tengas de la placa.',
    fields: [
      { name: 'fiebre', id: 'er-sw-fie', type: 'checkbox', label: 'Fiebre' },
      { name: 'neutrofilia', id: 'er-sw-neu', type: 'checkbox', label: 'Neutrofilia en sangre' },
      { name: 'localizacion', id: 'er-sw-loc', type: 'select', label: 'Localizacion de las lesiones', options: [
        { value: 'tipica', label: 'Miembros superiores, cara o cuello' },
        { value: 'otra', label: 'Otra localizacion' }
      ] },
      { name: 'cultivoNeg', id: 'er-sw-cul', type: 'checkbox', label: 'Cultivos negativos' },
      { name: 'sinRespuesta', id: 'er-sw-abx', type: 'checkbox', label: 'Ya ha recibido antibiotico y no ha mejorado' },
      { name: 'histologia', id: 'er-sw-his', type: 'select', label: 'Biopsia', options: [
        { value: 'nd', label: 'No disponible' },
        { value: 'neutro', label: 'Infiltrado neutrofilico dermico, sin vasculitis leucocitoclastica' },
        { value: 'vasculitis', label: 'Vasculitis leucocitoclastica' },
        { value: 'otro', label: 'Infiltrado eosinofilico o linfocitico' }
      ] },
      { name: 'farmacoHemato', id: 'er-sw-fh', type: 'checkbox', label: 'Lleva G-CSF, ATRA o un inhibidor de tirosina cinasa' },
      { name: 'citopenias', id: 'er-sw-cit', type: 'checkbox', label: 'Citopenias o formas anormales en el frotis' },
      { type: 'note', text: 'El Sweet subcutaneo y el Sweet similar a celulitis no se distinguen de una celulitis solo con la exploracion. Lo que los separa es que los cultivos no crecen y el antibiotico no induce remision.' }
    ],
    compute(v) {
      let a_favor = 0, en_contra = 0;
      const pros = [], contras = [];
      if (v.fiebre) { a_favor++; pros.push('fiebre'); }
      if (v.neutrofilia) { a_favor++; pros.push('neutrofilia'); }
      if ((v.localizacion || 'tipica') === 'tipica') { a_favor++; pros.push('localizacion tipica en miembros superiores, cara o cuello'); }
      if (v.cultivoNeg) { a_favor++; pros.push('cultivos negativos'); }
      if (v.sinRespuesta) { a_favor++; pros.push('falta de respuesta al antibiotico'); }
      if (v.histologia === 'neutro') { a_favor += 2; pros.push('infiltrado neutrofilico dermico sin vasculitis'); }
      if (v.histologia === 'vasculitis') { en_contra += 2; contras.push('la vasculitis leucocitoclastica NO debe verse en el Sweet'); }
      if (v.histologia === 'otro') { en_contra++; contras.push('el nombre Sweet no debe usarse para infiltrados eosinofilicos o linfociticos, aunque imiten la clinica'); }
      const perfil = en_contra > 0 ? 'replantear' : (a_favor >= 4 ? 'probable' : (a_favor >= 2 ? 'posible' : 'debil'));
      const buscar = [];
      if (v.farmacoHemato) buscar.push('El farmaco es el primer sospechoso: el factor estimulante de colonias de granulocitos, el ATRA y los inhibidores de tirosina cinasa son desencadenantes yatrogenos frecuentes, y su mecanismo esta bien explicado. Retirarlo puede ser todo el tratamiento, y para atribuirlo hay que cumplir TODOS los criterios de Walker y Cohen');
      if (v.citopenias) buscar.push('Las citopenias o las formas anormales obligan a estudio de medula osea: en la leucemia mieloide aguda la incidencia de Sweet fue del 1% en una serie de 2178 pacientes y del 5,5% en otra de 216');
      buscar.push('Hemograma con diferencial y frotis en todos, y marcadores inflamatorios');
      buscar.push('Revision completa de los farmacos de las ultimas semanas');
      buscar.push('Buscar infeccion, con las micobacterias no tuberculosas en mente: el Sweet fue la dermatosis reactiva mas frecuente en una serie de infeccion por micobacterias no tuberculosas, con una prevalencia del 3,4%');
      return { perfil, pros, contras, buscar, a_favor, farmacoHemato: !!v.farmacoHemato, citopenias: !!v.citopenias };
    },
    format(r) {
      const txt = {
        'probable': '<strong style="color:#8a5a2e;">El perfil es compatible con SINDROME DE SWEET.</strong>',
        'posible': '<strong style="color:#8a6a1f;">El perfil es POSIBLE pero incompleto.</strong> Faltan datos: la fiebre, la neutrofilia y la biopsia son los que mas aportan.',
        'debil': '<strong style="color:#8a6a1f;">Con estos datos el Sweet es poco probable.</strong> Antes de seguir por aqui, reconsidera una celulitis y las demas causas de placa dolorosa.',
        'replantear': '<strong style="color:#8c3a34;">Hay un dato que obliga a replantear el diagnostico.</strong>'
      }[r.perfil];
      let s = txt;
      if (r.pros.length) s += `<br><span style="opacity:.85;">A favor: ${r.pros.join(', ')}.</span>`;
      if (r.contras.length) s += `<br><span style="color:#8c3a34;">En contra: ${r.contras.join('; ')}.</span>`;
      if (r.perfil === 'probable' || r.perfil === 'posible') {
        s += '<br><br><strong>Que hay que buscar detras</strong><br>' + r.buscar.map(b => '&bull; ' + b).join('<br>');
        s += '<br><br><span style="opacity:.9;">Tratamiento: el corticoide es la primera linea y la respuesta es llamativamente rapida en la mayoria de los pacientes, tanto que, descartada la infeccion, una respuesta rapida apoya el diagnostico. Si no responde, la indometacina es la opcion con el nivel de evidencia mas alto; la acitretina, la colchicina y la dapsona se apoyan en estudios retrospectivos.</span>';
        s += '<br><span style="opacity:.75;font-size:12.5px;">Y no lo cierres como idiopatico: en una serie de 23 pacientes con mielodisplasia y Sweet, 15 de los diagnosticos hematologicos se hicieron DESPUES del episodio cutaneo.</span>';
      }
      return s;
    },
    fragment: r => `placa febril con perfil ${r.perfil} de sindrome de Sweet`
  },

  {
    key: 'pioderma-vs-ulcera', title: 'La ulcera: pioderma o no', accent: '#8c3a34',
    subtitle: 'Y la busqueda sistemica, ordenada por la edad',
    incompleteMsg: 'Describe el borde de la ulcera.',
    fields: [
      { name: 'borde', id: 'er-pg-bor', type: 'select', label: 'Borde de la ulcera', options: [
        { value: '', label: 'Elegir...' },
        { value: 'socavado', label: 'Elevado, socavado y violaceo' },
        { value: 'plano', label: 'Plano o con fondo de granulacion' },
        { value: 'necrotico', label: 'Necrotico o con esfacelos' }
      ] },
      { name: 'inicioPustula', id: 'er-pg-pus', type: 'checkbox', label: 'Empezo como una papula o pustula esteril' },
      { name: 'rapida', id: 'er-pg-rap', type: 'checkbox', label: 'Crecio rapidamente' },
      { name: 'dolorDespro', id: 'er-pg-dol', type: 'checkbox', label: 'Dolor desproporcionado al tama&#241;o' },
      { name: 'patergia', id: 'er-pg-pat', type: 'checkbox', label: 'Empeoro despues de un desbridamiento, una cura o una cirugia' },
      { name: 'vascular', id: 'er-pg-vas', type: 'checkbox', label: 'Hay insuficiencia venosa o arteriopatia conocidas' },
      { name: 'edad', id: 'er-pg-eda', type: 'number', required: false, label: 'Edad en a&#241;os (dejar vacio si no se conoce)', placeholder: 'ej. 58' },
      { name: 'eii', id: 'er-pg-eii', type: 'checkbox', label: 'Enfermedad inflamatoria intestinal conocida o clinica digestiva' },
      { type: 'note', text: 'El diagnostico del pioderma es CLINICO. La biopsia se hace para excluir otras causas de ulcera, no para confirmarlo: la histologia es inespecifica.' }
    ],
    compute(v) {
      if (!v.borde) return null;
      let pts = 0;
      const pros = [];
      if (v.borde === 'socavado') { pts += 3; pros.push('borde elevado, socavado y violaceo'); }
      if (v.inicioPustula) { pts += 2; pros.push('inicio como papula o pustula esteril'); }
      if (v.rapida) { pts += 1; pros.push('crecimiento rapido'); }
      if (v.dolorDespro) { pts += 2; pros.push('dolor desproporcionado'); }
      if (v.patergia) { pts += 3; pros.push('patergia'); }
      const perfil = pts >= 7 ? 'probable' : (pts >= 4 ? 'posible' : 'poco');
      const edad = (v.edad === null || v.edad === undefined || v.edad === '' || isNaN(v.edad)) ? null : Number(v.edad);
      const busqueda = [];
      if (edad !== null && edad < 65) {
        busqueda.push('Por debajo de los 65 a&#241;os, lo PRIMERO es el intestino: la enfermedad inflamatoria intestinal es significativamente mas frecuente en este grupo de edad');
        busqueda.push('Enfermedad inflamatoria intestinal: 17,6% en la estimacion agrupada y del 26 al 41% en grandes bases de datos. Mas frecuente en enfermedad ACTIVA (45%) que en remision (18%), sin diferencia entre Crohn y colitis ulcerosa');
      } else if (edad !== null) {
        busqueda.push('Por encima de los 65 a&#241;os, la artritis, los tumores solidos y los trastornos hematologicos son significativamente mas frecuentes que por debajo de esa edad');
        busqueda.push('Artritis inflamatoria (12,8%), reumatoide o seronegativa');
        busqueda.push('Estudio hematologico: trastornos hematologicos en el 3 al 6%');
      } else {
        busqueda.push('Enfermedad inflamatoria intestinal (17,6% agrupado; 26 a 41% en bases de datos), artritis (12,8%), neoplasia hematologica (8,9%) y tumor solido (7,4%)');
      }
      busqueda.push('Proteinograma e inmunofijacion en TODOS: gammapatia monoclonal en el 27% de una cohorte, IgA el subtipo mas frecuente, y neoplasia en el 28% de los que la tenian frente al 6% de los que no');
      busqueda.push('Funcion renal: riesgo aumentado de insuficiencia renal cronica (HR 3,68) y de dialisis (HR 27,79), y la relacion es bidireccional');
      busqueda.push('Glucemia y valoracion cardiaca: diabetes sin complicaciones (OR 1,92) e insuficiencia cardiaca (OR 2,01)');
      return { perfil, pts, pros, busqueda, patergia: !!v.patergia, vascular: !!v.vascular, eii: !!v.eii, edad, borde: v.borde };
    },
    format(r) {
      const txt = {
        'probable': '<strong style="color:#8c3a34;">El perfil es compatible con PIODERMA GANGRENOSO.</strong> El subtipo ulcerativo supone alrededor del 85% de los casos.',
        'posible': '<strong style="color:#8a6a1f;">Perfil POSIBLE de pioderma gangrenoso.</strong> Los rasgos que mas discriminan son el borde socavado violaceo, la patergia y el dolor desproporcionado.',
        'poco': '<strong style="color:#8a6a1f;">El perfil no apoya un pioderma.</strong> Una ulcera de miembro inferior tiene explicaciones mucho mas frecuentes, y todas se tratan de otra forma.'
      }[r.perfil];
      let s = txt;
      if (r.pros.length) s += `<br><span style="opacity:.85;">A favor: ${r.pros.join(', ')}.</span>`;
      if (r.vascular) s += '<br><span style="opacity:.85;">Hay enfermedad vascular conocida: eso no excluye el pioderma, pero obliga a demostrar que la ulcera no es venosa ni arterial antes de inmunosuprimir.</span>';
      if (r.perfil !== 'poco') {
        s += '<br><br><strong style="color:#8c3a34;">Lo primero es lo que NO se hace: no desbridar.</strong> El pioderma responde al traumatismo con mas enfermedad, de modo que el desbridamiento agranda la ulcera.';
        if (r.patergia) s += ' En este caso ya hay patergia documentada, que es la confirmacion clinica de ese fenomeno.';
        s += '<br>Biopsiar el borde para EXCLUIR oclusion vascular, enfermedad venosa, vasculitis, cancer, infeccion primaria y ulcera por farmacos. Tomar cultivos.';
        s += '<br>Tratamiento de primera linea: un inmunosupresor de accion RAPIDA, corticoide sistemico o ciclosporina, seguido de un ahorrador de corticoide, con cuidados de la herida. La evidencia es escasa: solo hay dos ensayos aleatorizados publicados.';
        s += '<br><br><strong>Busqueda sistemica</strong><br>' + r.busqueda.map(b => '&bull; ' + b).join('<br>');
        if (r.eii) s += '<br><span style="color:#3f6b52;">Con enfermedad inflamatoria intestinal de fondo, controlar la actividad intestinal puede resolver la piel: hay descrita desaparicion del pioderma en un mes al tratar la colitis ulcerosa.</span>';
        s += '<br><span style="opacity:.75;font-size:12.5px;">Prudencia con los tumores solidos: un estudio no encontro asociacion bidireccional significativa, y los pacientes con las dos cosas eran bastante mayores (71,7 frente a 51,9 a&#241;os), lo que sugiere el riesgo propio de la edad y no un vinculo causal.</span>';
      }
      return s;
    },
    fragment: r => `ulcera con perfil ${r.perfil} de pioderma gangrenoso`
  }
];

export const combinedNote = {
  title: 'La piel se&#241;ala, y hay que seguir el dedo', accent: '#9c3a52',
  subtitle: 'Encadena las calculadoras del tema',
  items: ['nodulo-doloroso', 'eritema-nodoso-estudio', 'em-vs-sjs', 'sweet-vs-celulitis', 'pioderma-vs-ulcera'],
  build(results, missing) {
    const partes = [];
    const nd = results['nodulo-doloroso'];
    const en = results['eritema-nodoso-estudio'];
    const em = results['em-vs-sjs'];
    const sw = results['sweet-vs-celulitis'];
    const pg = results['pioderma-vs-ulcera'];
    if (nd) partes.push(`La lesion esta en la <strong>${nd.capa.split(':')[0]}</strong>, lo que orienta a <strong>${nd.sospecha.replace(/-/g, ' ')}</strong>, y la biopsia que corresponde es ${nd.biopsia}.`);
    if (en) partes.push(`El estudio del eritema nodoso parte de las pruebas basicas${en.dirigido.length ? ` mas ${en.dirigido.length} dirigidas por la historia` : ', sin nada dirigido por ahora'}.`);
    if (em) partes.push(`En la frontera del eritema multiforme, los rasgos apuntan a <strong>${em.dx === 'em' ? 'eritema multiforme ' + (em.mucosa ? 'mayor' : 'menor') : (em.dx === 'sjs' ? 'Stevens-Johnson, que es otra enfermedad y otro modulo' : 'una frontera sin resolver')}</strong>.`);
    if (sw) partes.push(`La placa febril tiene un perfil <strong>${sw.perfil}</strong> de sindrome de Sweet.`);
    if (pg) partes.push(`La ulcera tiene un perfil <strong>${pg.perfil}</strong> de pioderma gangrenoso.`);
    let html = partes.join(' ');
    if (!html) html = 'Rellena al menos una de las calculadoras del tema.';
    else html += ' <span style="opacity:.75;">Ninguna de estas lesiones es una enfermedad de la piel: todas son una indicacion de buscar.</span>';
    if (missing.length) html += `<div style="margin-top:10px;color:#b0453d;font-size:12.5px;">Faltan datos en: ${missing.join(', ')}.</div>`;
    return html;
  }
};

export default { calculators, combinedNote };
