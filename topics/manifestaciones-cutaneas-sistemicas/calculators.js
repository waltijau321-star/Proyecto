// topics/manifestaciones-cutaneas-sistemicas/calculators.js - Las cuatro herramientas de
// derivacion del modulo 81.
// Fuentes: Sampaio AL, et al. An Bras Dermatol 2021;96(6):655-671 (parte I) y Leal JM, et al.
// An Bras Dermatol 2021;96(6):672-687 (parte II).
// Ninguna de las cuatro calcula un riesgo: las cuatro TRADUCEN un signo en una conducta y en un
// destino. La tercera es el indice mismo del modulo, y es la que mas se va a usar.

const C_ROJO = '#8c3a34';
const C_AMBAR = '#8a6a2e';
const C_VERDE = '#3f6b52';
const C_AZUL = '#3d5a73';

export const calculators = [
  {
    key: 'purpura-mecanismo', title: 'Púrpura: de la morfología al mecanismo', accent: '#8c3a34',
    subtitle: 'Lo que se ve decide lo que se pide',
    incompleteMsg: 'Elige el aspecto de la lesión.',
    fields: [
      { name: 'morfologia', id: 'mcs-pm-m', type: 'select', label: 'Aspecto de la lesión', options: [
        { value: '', label: 'Elegir...' },
        { value: 'petequias', label: 'Petequias (maculas pequeñas que no desaparecen a la presión)' },
        { value: 'equimosis', label: 'Equimosis tras traumatismo mínimo' },
        { value: 'palpable', label: 'Púrpura PALPABLE (se nota relieve al pasar el dedo)' },
        { value: 'retiforme', label: 'Púrpura RETIFORME: arboriforme o estrellada' },
        { value: 'pigmentaria', label: 'Maculas ocres crónicas en piernas (aspecto de pimienta de cayena)' }
      ] },
      { name: 'dolor', id: 'mcs-pm-d', type: 'checkbox', label: 'La lesión es dolorosa' },
      { name: 'agudo', id: 'mcs-pm-a', type: 'checkbox', label: 'Inicio agudo, en días', row: true },
      { name: 'plaquetas', id: 'mcs-pm-p', type: 'number', step: '1', required: false, label: 'Plaquetas por mm3 (dejar vacio si no se sabe)', placeholder: 'ej. 8000' },
      { name: 'contexto', id: 'mcs-pm-c', type: 'select', label: 'Contexto o maniobra', options: [
        { value: 'ninguno', label: 'Ninguno de los de abajo' },
        { value: 'pellizco', label: 'La púrpura sale al PELLIZCAR la piel' },
        { value: 'perifolicular', label: 'La hemorragia rodea los folículos' },
        { value: 'presion', label: 'Sobre las clavículas, tras parto, tos, vómitos o llanto' },
        { value: 'conectivo', label: 'Piel actínica, corticoide crónico, Ehlers-Danlos o pseudoxantoma' },
        { value: 'dialisis', label: 'Paciente en hemodiálisis' }
      ] },
      { type: 'note', text: 'La morfología manda sobre todo lo demás: palpar y pellizcar resuelven más que cualquier analítica de entrada.' }
    ],
    compute(v) {
      if (!v.morfologia) return null;
      const plq = (v.plaquetas === null || v.plaquetas === undefined || v.plaquetas === '' || isNaN(v.plaquetas)) ? null : Number(v.plaquetas);
      const ctx = v.contexto || 'ninguno';
      let mecanismo = '', detalle = '', pedir = [], destino = '', urgente = false, color = C_AZUL;

      if (ctx === 'presion') {
        mecanismo = 'Pico de presión intravascular';
        detalle = 'Petequias por encima del punto de presión tras el parto, accesos de tos o de vómitos, o llanto intenso en el niño. El torniquete produce lo mismo por encima de la zona comprimida. Es un fenómeno mecánico.';
        pedir = ['Nada. Reconocer el contexto es el diagnóstico'];
        destino = 'Ninguno: no hay enfermedad que buscar';
        color = C_VERDE;
      } else if (ctx === 'pellizco') {
        mecanismo = 'Extravascular: amiloidosis de cadenas ligeras';
        detalle = 'En la amiloidosis de cadenas ligeras la púrpura se induce con facilidad al pellizcar la piel. Es una maniobra de dos segundos que reorienta el estudio entero.';
        pedir = ['Proteinograma e inmunoelectroforesis de proteínas', 'Cadenas ligeras libres en suero', 'Valorar biopsia cutánea con rojo Congo'];
        destino = 'Mieloma múltiple';
        color = C_AMBAR;
      } else if (ctx === 'perifolicular') {
        mecanismo = 'Extravascular: escorbuto';
        detalle = 'La hemorragia perifolicular sugiere déficit de vitamina C. Aparece en malabsorción y en dietas muy restrictivas, y es de los pocos signos que dan el diagnóstico casi solos.';
        pedir = ['Historia dietética dirigida', 'Vitamina C sérica si esta disponible', 'Revisar el resto de los signos carenciales: frinodermia, queilitis angular, acrodermatitis'];
        destino = 'Soporte nutricional, y la ficha del enfermo digestivo de este módulo';
        color = C_AMBAR;
      } else if (v.morfologia === 'retiforme') {
        mecanismo = 'Oclusión vascular con inflamación mínima';
        detalle = 'La púrpura retiforme, arboriforme o estrellada, dolorosa y de inicio agudo, es TROMBOSIS y no inflamación. La histología muestra trombosis difusa de los vasos dérmicos SIN vasculitis. Es el patrón del síndrome antifosfolipidico y de las vasculopatías trombóticas.';
        pedir = ['Anticuerpos antifosfolipidicos y anticoagulante lúpico', 'Hemograma, coagulación y fibrinógeno', 'Valorar biopsia de piel de la zona activa, evitando el área necrótica'];
        destino = 'Trastornos de la coagulación y trombofilias';
        urgente = !!(v.dolor && v.agudo);
        color = C_ROJO;
        if (ctx === 'dialisis') {
          detalle += ' En el paciente en hemodiálisis, esta imagen es la de la CALCIFILAXIS: empieza pareciendo una livedo reticularis y progresa a placas simétricas y extremadamente dolorosas en zonas de mayor grasa, con ulceracion y necrosis. Aparece en el 1 al 4% de los pacientes en hemodiálisis con hiperparatiroidismo secundario.';
          pedir = ['Calcio, fósforo y paratohormona: el producto calcio-fósforo por encima de 60 a 70 es el dato clave'].concat(pedir);
          destino = 'Lesión renal aguda, y la ficha del enfermo renal de este módulo';
          urgente = true;
        }
      } else if (v.morfologia === 'palpable') {
        mecanismo = 'Hemorragia con inflamación del vaso: VASCULITIS';
        detalle = 'Si se palpa, hay inflamación de la pared del vaso. La vasculitis leucocitoclástica es una causa importante, y cuando el mecanismo es por inmunocomplejos las lesiones predominan en zonas declives. La perivascularitis sin vasculitis no produce púrpura palpable.';
        pedir = ['Hemograma, función renal con sedimento y proteinuria', 'Autoinmunidad: ANA, ANCA, complemento, crioglobulinas', 'Serologías de hepatitis B y C', 'Biopsia cutánea con inmunofluorescencia directa, en lesión de menos de 48 horas'];
        destino = 'Vasculitis, ordenadas por calibre de vaso: ver la ficha reumatologica de este módulo';
        color = C_ROJO;
      } else if (v.morfologia === 'pigmentaria') {
        mecanismo = 'Púrpura pigmentaria crónica';
        detalle = 'Afectan a vasos de pequeño calibre de la dermis y dejan la coloración ocre de la hemosiderina. Son el Schamberg (aspecto de pimienta de cayena), el Doucas-Kapetanakis, la púrpura anular telangiectodes de Majocchi y el liquen aureus. Benignas y crónicas.';
        pedir = ['Hemograma y coagulación básicos para descartar otra causa', 'Si hay sospecha de gammapatía policlonal, proteinograma: la púrpura hipergammaglobulinemica de Waldenstrom aparece en zonas declives y bajo ropa ajustada, asociada al síndrome de Sjogren y a la sarcoidosis'];
        destino = 'Ninguno urgente. Si hay Sjogren o sarcoidosis detrás, el tema de Sarcoidosis';
        color = C_VERDE;
      } else if (v.morfologia === 'equimosis') {
        mecanismo = ctx === 'conectivo' ? 'Extravascular: tejido conectivo defectuoso' : 'Hemorragia simple por disfunción plaquetaria';
        detalle = ctx === 'conectivo'
          ? 'La púrpura ante traumatismo mínimo por tejido conectivo defectuoso: púrpura actínica, exceso de corticoide local o sistémico, Ehlers-Danlos y pseudoxantoma elástico. El contexto es el diagnóstico.'
          : 'La disfunción plaquetaria produce más equimosis ante traumatismos mínimos que petequias, al contrario que la trombocitopenia. Si no hay causa extravascular, hay que estudiar la función plaquetaria.';
        pedir = ctx === 'conectivo'
          ? ['Revisar corticoides tanto tópicos como sistémicos', 'Explorar la hiperlaxitud y los signos de pseudoxantoma elástico', 'No hace falta más estudio si el contexto lo explica']
          : ['Hemograma con recuento y frotis', 'Coagulación y tiempo de hemorragia o función plaquetaria', 'Revisar antiagregantes y antiinflamatorios'];
        destino = ctx === 'conectivo' ? 'Ninguno: revisar el corticoide' : 'Alteraciones plaquetarias cuantitativas y cualitativas';
        color = ctx === 'conectivo' ? C_VERDE : C_AMBAR;
      } else {
        mecanismo = 'Hemorragia simple: trombocitopenia';
        detalle = 'Las petequias pueden aparecer con plaquetas por debajo de 50.000 por mm3, pero lo típico es verlas con 10.000 o menos. La trombocitopenia grave deteriora la adhesión endotelial y aumenta la permeabilidad vascular.';
        pedir = ['Hemograma con recuento y frotis de sangre periférica', 'Coagulacion', 'Revisar fármacos y descartar seudotrombocitopenia por EDTA'];
        destino = 'Alteraciones plaquetarias cuantitativas y cualitativas';
        color = C_AMBAR;
        if (plq !== null) {
          if (plq <= 10000) { detalle += ' Con ' + plq + ' plaquetas por mm3 estas en el rango TÍPICO de las petequias.'; urgente = true; }
          else if (plq < 50000) detalle += ' Con ' + plq + ' plaquetas por mm3 la aparición de petequias es posible, aunque no es lo típico.';
          else {
            mecanismo = 'Hemorragia simple, pero NO por trombocitopenia';
            detalle += ' Con ' + plq + ' plaquetas por mm3 el recuento no explica las petequias, de modo que hay que buscar otra cosa: disfunción plaquetaria, o una causa extravascular.';
            pedir = ['Función plaquetaria o tiempo de hemorragia', 'Revisar antiagregantes y antiinflamatorios', 'Buscar causa extravascular: corticoide, piel actínica, pellizco positivo, hemorragia perifolicular'];
            color = C_AMBAR;
          }
        }
      }
      return { mecanismo, detalle, pedir, destino, urgente, color, plq, morfologia: v.morfologia, ctx };
    },
    format(r) {
      let s = `<strong style="color:${r.color};font-size:14.5px;">${r.mecanismo}.</strong>`;
      if (r.urgente) s += '<br><strong style="color:#8c3a34;">No admite esperar a la próxima consulta.</strong>';
      s += `<br><span style="opacity:.9;">${r.detalle}</span>`;
      s += '<br><br><strong>Que se pide</strong><br>' + r.pedir.map(x => '&bull; ' + x).join('<br>');
      s += `<br><br><strong>A donde lleva:</strong> ${r.destino}.`;
      if (r.morfologia === 'petequias' && r.plq === null) s += '<br><span style="opacity:.75;font-size:12.5px;">No has indicado las plaquetas. Es el dato que más cambia la lectura de una petequia: con 10.000 o menos esta explicada, y por encima de 50.000 hay que buscar otra cosa.</span>';
      if (r.morfologia === 'palpable' && r.ctx !== 'ninguno') s += '<br><span style="opacity:.75;font-size:12.5px;">Una púrpura palpable es vasculitis aunque el contexto sugiera otra cosa: el relieve manda sobre el resto de las pistas.</span>';
      return s;
    },
    fragment: r => `${r.mecanismo.toLowerCase()}${r.urgente ? ', y urgente' : ''}`
  },

  {
    key: 'prurito-estudio', title: 'Prurito sin lesión primaria: el escalón que toca', accent: '#5a7a8a',
    subtitle: 'Para no pedirlo todo de golpe',
    incompleteMsg: 'Indica cuantas semanas lleva y si hay una dermatosis que lo explique.',
    fields: [
      { name: 'semanas', id: 'mcs-pe-s', type: 'number', step: '1', label: 'Semanas de evolución', placeholder: 'ej. 10' },
      { name: 'lesionPrimaria', id: 'mcs-pe-lp', type: 'select', label: '¿Hay una dermatosis primaria que lo explique?', options: [
        { value: '', label: 'Elegir...' },
        { value: 'si', label: 'Si, hay una dermatosis que lo explica' },
        { value: 'no', label: 'No, solo lesiones de rascado o nada' },
        { value: 'noexplorado', label: 'No lo he explorado todo todavía' }
      ] },
      { name: 'farmaco', id: 'mcs-pe-f', type: 'checkbox', label: 'Hay un fármaco sospechoso sin retirar' },
      { name: 'basico', id: 'mcs-pe-b', type: 'select', label: 'Panel básico (hemograma, renal, hepático, tiroideo, hierro, PCR y VSG)', options: [
        { value: 'nohecho', label: 'Todavía no se ha hecho' },
        { value: 'normal', label: 'Hecho y normal' },
        { value: 'renal', label: 'Alterado: función renal' },
        { value: 'hepatico', label: 'Alterado: función hepática' },
        { value: 'tiroideo', label: 'Alterado: función tiroidea' },
        { value: 'ferropenia', label: 'Alterado: hierro y ferritina bajos' }
      ] },
      { name: 'mapa', id: 'mcs-pe-m', type: 'select', label: 'Distribución del prurito', options: [
        { value: 'generalizado', label: 'Generalizado, sin patrón' },
        { value: 'dermatoma', label: 'Limitado a un dermatoma, con lesiones secundarias' },
        { value: 'dorsal', label: 'Placa dorsal hiperpigmentada a la altura de T2 a T6' },
        { value: 'braquiorradial', label: 'Caras laterales de brazos y hombros' },
        { value: 'polineuropatia', label: 'Generalizado con parestesias o neuropatía conocida' }
      ] },
      { type: 'note', text: 'El valor de esta calculadora es el ORDEN: explorar, luego fármacos, luego panel básico, y solo después el ampliado.' }
    ],
    compute(v) {
      const sem = (v.semanas === null || v.semanas === undefined || v.semanas === '' || isNaN(v.semanas)) ? null : Number(v.semanas);
      if (sem === null || !v.lesionPrimaria) return null;
      const cronico = sem > 6;
      const mapa = v.mapa || 'generalizado';
      const basico = v.basico || 'nohecho';
      let escalon = '', acciones = [], destino = '', color = C_AZUL;

      if (v.lesionPrimaria === 'noexplorado') {
        escalon = 'Escalón 0: la exploración no esta terminada';
        acciones = [
          'Explorar TODA la piel, incluidas las regiones genital, interdigital, ocular y la del pezon',
          'Caracterizar el prurito: generalizado o localizado, cuando empezo, como varia durante el dia, que lo intensifica y que lo alivia',
          'Preguntar por viajes recientes, convivientes afectados, trabajo, animales y alérgenos',
          'Preguntar por síntomas sistémicos: fiebre, sudoración nocturna, pérdida de peso, dolor abdominal, mareo, artritis y parestesias'
        ];
        destino = 'Volver a esta calculadora cuando la exploración este completa';
        color = C_AMBAR;
      } else if (v.lesionPrimaria === 'si') {
        escalon = 'No es un prurito sin lesión primaria';
        acciones = [
          'Si hay una dermatosis que lo explica, el prurito es su síntoma y el estudio sistémico no corresponde',
          'Tratar la dermatosis y reevaluar: si el prurito persiste desproporcionadamente, volver a este escalonado'
        ];
        destino = 'El tema de la dermatosis: Eccemas y dermatitis, Psoriasis, Urticaria y angioedema, o Escabiosis y pediculosis';
        color = C_VERDE;
      } else if (v.farmaco) {
        escalon = 'Escalón 1: los fármacos van ANTES de la analítica';
        acciones = [
          'Suspender el fármaco sospechoso de 4 a 6 SEMANAS y reevaluar',
          'Si el prurito cede, el vínculo causal se refuerza y se cambia el fármaco',
          'Recordar los cinco mecanismos por los que un fármaco da prurito: alergia, colestasis, xerosis, acumulo de metabolitos en piel o nervios, y fototoxicidad'
        ];
        destino = 'Reacciones cutáneas a fármacos, para el resto del espectro';
        color = C_AMBAR;
      } else if (basico === 'nohecho') {
        escalon = 'Escalón 2: panel básico';
        acciones = [
          'Hemograma completo',
          'Función renal, función hepática y función tiroidea',
          'Hierro y ferritina',
          'Proteína C reactiva y velocidad de sedimentación'
        ];
        destino = 'Depende del resultado: vuelve aquí con el panel en la mano';
        color = C_AZUL;
      } else if (basico === 'normal') {
        escalon = 'Escalón 3: panel ampliado';
        acciones = [
          'Serología de VIH y serologías de hepatitis B y C',
          'Imagen de tórax y abdomen',
          'Inmunoelectroforesis de proteínas',
          'Paratohormona, colesterol y fracciones',
          'Biopsia cutánea, que aquí es el último escalón y no el primero'
        ];
        destino = 'Linfomas si aparecen adenopatías o síntomas B; Mieloma múltiple si la inmunoelectroforesis es positiva';
        color = C_AMBAR;
      } else {
        const mapaDest = {
          renal: ['función renal alterada', 'Lesión renal aguda, y la ficha del enfermo renal de este módulo', 'En la enfermedad renal el prurito aparece en el 50 al 90% de los casos, y la xerosis en el 50 al 80% de los que están en hemodiálisis.'],
          hepatico: ['función hepática alterada', 'Cirrosis hepática', 'Mirar también los estigmas hepáticos, que el tema de Cirrosis desarrolla enteros.'],
          tiroideo: ['función tiroidea alterada', 'Hipotiroidismo, o Hipertiroidismo y tiroiditis', 'En el hipotiroidismo se asocian además dermatitis herpetiforme, alopecia areata, vitíligo y urticaria autoinmune.'],
          ferropenia: ['ferropenia', 'Anemia ferropénica', 'Buscar la causa de la ferropenia, que es lo que de verdad hay que diagnosticar.']
        }[basico];
        escalon = 'Causa encontrada en el panel básico: ' + mapaDest[0];
        acciones = ['Estudiar y tratar la causa', 'No hace falta pasar al panel ampliado si el hallazgo explica el cuadro', mapaDest[2]];
        destino = mapaDest[1];
        color = C_VERDE;
      }

      const neuro = {
        dermatoma: 'Neuralgia postherpetica: lesiones secundarias limitadas al dermatoma.',
        dorsal: 'Notalgia parestesica: placa hiperpigmentada dorsal a la altura de T2 a T6.',
        braquiorradial: 'Prurito braquiorradial: caras laterales de brazos y hombros.',
        polineuropatia: 'Prurito generalizado de origen neuropático: polineuropatía diabética, carencial, por alcoholismo o autoinmune.'
      }[mapa] || null;

      return { sem, cronico, escalon, acciones, destino, color, neuro, basico };
    },
    format(r) {
      let s = `<strong style="color:${r.color};font-size:14.5px;">${r.escalon}.</strong>`;
      s += `<br><span style="opacity:.9;">Prurito ${r.cronico ? 'CRONICO' : 'AGUDO'}: ${r.sem} semanas. ${r.cronico ? 'Por encima de 6 semanas se asocia más a enfermedades cutáneas y sistémicas, es más refractario y, al entrar en el ciclo picor-rascado, genera excoriaciones, cambios de pigmentación y liquenificación que confunden el cuadro.' : 'Hasta 6 semanas se relaciona más con urticaria, reacciones a fármacos e infecciones.'}</span>`;
      s += '<br><br><strong>Lo que toca ahora</strong><br>' + r.acciones.map(x => '&bull; ' + x).join('<br>');
      s += `<br><br><strong>A donde lleva:</strong> ${r.destino}.`;
      if (r.neuro) s += `<br><br><span style="color:${C_AZUL};"><strong>El mapa sugiere una causa neurológica.</strong> ${r.neuro} El tratamiento del prurito neuropático tiene nombre propio: capsaicina y mentol tópicos, y por via oral gabapentina, pregabalina, mirtazapina o paroxetina.</span>`;
      s += '<br><span style="opacity:.75;font-size:12.5px;">La causa psicógena se considera al final y con criterios propios: sin causa somática ni cutánea, más de 6 meses de evolución, relación temporal con hechos psicológicos, variación con el estrés, predominio en reposo y mejoría con psicofarmacos o terapia.</span>';
      return s;
    },
    fragment: r => `prurito ${r.cronico ? 'cronico' : 'agudo'} de ${r.sem} semanas; ${r.escalon.toLowerCase()}`
  },

  {
    key: 'signo-a-donde', title: 'El índice: de un signo a un tema', accent: '#6b5a8c',
    subtitle: 'Que buscar, con que frecuencia y donde sigue',
    incompleteMsg: 'Elige el signo que tienes delante.',
    fields: [
      { name: 'signo', id: 'mcs-sd-s', type: 'select', label: 'Signo que tienes delante', options: [
        { value: '', label: 'Elegir...' },
        { value: 'acantosis', label: 'Acantosis nigricans' },
        { value: 'necrobiosis', label: 'Placa pardo-amarillenta en cara anterior de las piernas' },
        { value: 'ampollas-pies', label: 'Ampollas tensas e indoloras en los pies' },
        { value: 'infeccion-repeticion', label: 'Infecciones cutáneas de repetición' },
        { value: 'calcifilaxis', label: 'Placas purpúricas muy dolorosas en zonas grasas, en diálisis' },
        { value: 'ampollas-manos', label: 'Ampollas y erosiones en el dorso de las manos, en diálisis' },
        { value: 'kyrle', label: 'Papulas umbilicadas muy pruriginosas en superficies de extensión' },
        { value: 'nodoso', label: 'Nódulos eritematosos dolorosos en cara anterior de piernas' },
        { value: 'aftas', label: 'Úlceras orales de repetición' },
        { value: 'carenciales', label: 'Queilitis angular, frinodermia o acrodermatitis' },
        { value: 'xantoma-palmar', label: 'Xantoma estriado palmar' },
        { value: 'xantoma-plano', label: 'Xantoma plano difuso' },
        { value: 'hiperpigmentacion', label: 'Hiperpigmentación difusa con pérdida de vello' },
        { value: 'rubor', label: 'Rubor paroxístico llamativo en cara y tórax' },
        { value: 'bazex', label: 'Erupción psoriasiforme en orejas, nariz, manos y pies' },
        { value: 'ampollosa-mucositis', label: 'Ampollosa con mucositis exuberante' },
        { value: 'eritrodermia', label: 'Eritrodermia sin causa aparente' },
        { value: 'vitiligo', label: 'Vitiligo' },
        { value: 'lesion-pigmentada', label: 'Lesión pigmentada que cambia' }
      ] },
      { type: 'note', text: 'Este es el índice del módulo. La respuesta no es un diagnóstico: es lo que hay que buscar y el tema de la app donde sigue la historia.' }
    ],
    compute(v) {
      const M = {
        acantosis: { buscar: 'Hiperinsulinemia. Y si es de aparición SÚBITA, en persona NO obesa y SIN endocrinopatía, un adenocarcinoma gástrico', frec: 'Puede PRECEDER al diagnóstico de diabetes con hemoglobina glucosilada todavía normal; en la forma paraneoplásica, más del 95% de los tumores son adenocarcinomas', pedir: ['Glucemia y hemoglobina glucosilada', 'Comprobar las tres señales de paraneoplasia: súbita, no obeso, sin endocrinopatía', 'Si las cumple, imagen de abdomen y endoscopia digestiva alta'], destino: 'Diabetes mellitus; y la ficha de signos paraneoplásicos de este módulo si cumple las tres señales', alerta: true },
        necrobiosis: { buscar: 'Diabetes. Es la necrobiosis lipoidica: empieza como papulas eritematosas y progresa a una placa pardo-amarillenta con centro atrófico y telangiectasias, simétrica y más frecuente en mujeres', frec: 'Se ÚLCERA en el 35% de los casos, y entonces se sobreinfecta', pedir: ['Glucemia y hemoglobina glucosilada', 'Vigilar la ulceracion, que es la complicación esperable'], destino: 'Diabetes mellitus', alerta: false },
        'ampollas-pies': { buscar: 'Diabetes. Es la bullosis diabeticorum: ampollas tensas, INDOLORAS, sin inflamación alrededor, de crecimiento rápido y curación en semanas', frec: 'La presenta alrededor del 0,5% de los diabéticos, y puede ser la manifestación inicial de la enfermedad', pedir: ['Glucemia y hemoglobina glucosilada', 'Descartar una ampollosa autoinmune si hay inflamación o dolor, que no son propios de esta'], destino: 'Diabetes mellitus; Ampollosas autoinmunes si el cuadro no encaja', alerta: false },
        'infeccion-repeticion': { buscar: 'Diabetes. Las infecciones cutáneas de repetición son motivo para investigarla: estafilocócicas (foliculitis, abscesos, impetigo), estreptocócicas (ectima, celulitis), candidiasis cutánea, mucosa y periungueal, y dermatofitosis', frec: 'Sin frecuencia única; lo importante es el umbral de sospecha', pedir: ['Glucemia y hemoglobina glucosilada', 'En el diabético descompensado, vigilar la fascitis necrosante y la gangrena de Fournier, de alta mortalidad', 'Ante otalgia con supuracion, descartar otitis externa maligna', 'Ante cetoacidosis con sinusitis de secreción serosanguinolenta, pensar en mucormicosis rinocerebral'], destino: 'Diabetes mellitus; Cetoacidosis diabética si hay mucormicosis; Infecciones de piel y partes blandas', alerta: true },
        calcifilaxis: { buscar: 'Calcifilaxis: vasculopatía trombótica por depósito de calcio en la media de las arteriolas. Empieza pareciendo una livedo reticularis y progresa a placas simétricas y EXTREMADAMENTE dolorosas con ulceracion y necrosis, en glúteos, abdomen, muslos y piernas', frec: 'El 1 al 4% de los pacientes con enfermedad renal crónica en hemodiálisis e hiperparatiroidismo secundario', pedir: ['Calcio, fósforo y paratohormona: el producto calcio-fósforo por encima de 60 a 70 es el dato', 'Revisar quelantes con calcio, vitamina D y anticoagulación', 'Estudio de trombofilia: proteína C y S, anticuerpos antifosfolipidicos'], destino: 'Lesión renal aguda y Síndrome cardiovascular-renal-metabólico', alerta: true },
        'ampollas-manos': { buscar: 'Porfiria cutánea tarda, porque las porfirinas no se dializan bien y se acumulan. Si las porfirinas salen normales, es una PSEUDOPORFIRIA', frec: 'Del 1 al 18% de los pacientes en hemodiálisis', pedir: ['Porfirinas en orina, heces y suero', 'Hierro sérico y serología de hepatitis C, que aumentan la predisposición', 'Si las porfirinas son normales, revisar fármacos: amiodarona, furosemida, tetraciclinas, isotretinoina, naproxeno y ácido nalidixico'], destino: 'Porfirias, y la ficha del enfermo renal de este módulo', alerta: false },
        kyrle: { buscar: 'Dermatosis perforante adquirida o enfermedad de Kyrle: papulas o nódulos hipercromicos, umbilicados y con hiperqueratosis central, muy pruriginosos', frec: 'Del 4,5 al 10% de los pacientes en diálisis', pedir: ['Función renal, glucemia y ácido úrico: aparece en la enfermedad renal crónica, la diabetes y la hiperuricemia', 'Tratar el prurito, porque el fenómeno de Koebner por el rascado perpetua las lesiones'], destino: 'Lesión renal aguda; Diabetes mellitus', alerta: false },
        nodoso: { buscar: 'Eritema nodoso. Sus causas principales son la enfermedad inflamatoria intestinal, la sarcoidosis, la infección estreptocócica, la tuberculosis y los fármacos', frec: 'Hasta el 15% de los pacientes con enfermedad de Crohn y el 10% con colitis ulcerosa; hasta el 90% de los casos se asocia a ACTIVIDAD de la enfermedad intestinal', pedir: ['Anamnesis digestiva dirigida', 'Radiografía de tórax, Mantoux o IGRA, serología estreptocócica', 'Revisar fármacos'], destino: 'Módulo 78 de Eritemas reactivos, paniculitis y dermatosis neutrofílicas, que lo desarrolla entero', alerta: false },
        aftas: { buscar: 'Enfermedad inflamatoria intestinal, enfermedad de Behcet o déficit nutricional. Las úlceras pueden ser lesiones por contiguidad con la misma histología que la enfermedad intestinal, o una reacción a ella', frec: 'Estomatitis aftosa en más del 7% de los pacientes con enfermedad inflamatoria intestinal', pedir: ['Anamnesis digestiva y ocular dirigida', 'Hemograma, hierro, vitamina B12 y ácido fólico', 'Si hay pústulas friables y placas vegetantes amarillentas, es una piostomatitis vegetante'], destino: 'Módulo 78 para el Behcet; la ficha del enfermo digestivo de este módulo', alerta: false },
        carenciales: { buscar: 'Malabsorción. Cada signo tiene su carencia: hiperqueratosis folicular o frinodermia por VITAMINA A, queilitis angular por VITAMINA B12, escorbuto por VITAMINA C y acrodermatitis enteropatica por ZINC', frec: 'Sin frecuencia única; dependen de la causa de la malabsorción', pedir: ['Estudio de malabsorción y serología de celiaquía', 'Vitamina B12, ácido fólico, zinc y vitamina A', 'Historia dietética y revisión de cirugía bariátrica previa'], destino: 'Soporte nutricional del crítico; Anemia megaloblástica si hay déficit de B12', alerta: false },
        'xantoma-palmar': { buscar: 'Dislipidemia. El xantoma estriado palmar solo aparece en pacientes con cifras altas de colesterol Y de triglicéridos a la vez', frec: 'Exige las dos cifras altas, no una', pedir: ['Perfil lipídico completo: colesterol, fracciones y triglicéridos', 'Descartar causas secundarias de dislipidemia'], destino: 'Dislipidemias', alerta: false },
        'xantoma-plano': { buscar: 'PARAPROTEINEMIA, incluida la del mieloma múltiple. Es la trampa del grupo: aparece en personas con dislipidemia y también SIN ella, de modo que un perfil lipídico normal no cierra el caso sino que lo abre', frec: 'Cubre áreas extensas de cara, cuello, tórax y miembros superiores', pedir: ['Perfil lipídico completo', 'Proteinograma e inmunoelectroforesis de proteínas, que es el que de verdad decide', 'Cadenas ligeras libres en suero'], destino: 'Mieloma múltiple; Dislipidemias', alerta: true },
        hiperpigmentacion: { buscar: 'Insuficiencia suprarrenal primaria: hiperpigmentación difusa de piel, pelo y mucosas, con pérdida de vello axilar y pubico y bandas ungueales longitudinales. Si la pigmentación es MÁS intensa de lo esperable, síndrome de ACTH ectópico', frec: 'La hiperpigmentación especialmente intensa orienta al ACTH ectópico del carcinoma microcitico de pulmón', pedir: ['Cortisol basal y ACTH', 'Ionograma, con atención a la hiponatremia y la hiperpotasemia', 'Si hay sospecha de ACTH ectópico, imagen de tórax'], destino: 'Nódulo pulmonar y cáncer de pulmón si es ectópico', alerta: true },
        rubor: { buscar: 'Feocromocitoma. El rubor paroxístico muy llamativo en cara, tórax y extremidades superiores es su única manifestación cutánea relevante', frec: 'Manifestación paroxística, no permanente: hay que preguntarla', pedir: ['Metanefrinas fraccionadas en plasma u orina de 24 horas', 'Tensión arterial en crisis y fuera de ellas', 'Imagen suprarrenal si el laboratorio lo apoya'], destino: 'Crisis hipertensivas; Hipertensión arterial secundaria', alerta: false },
        bazex: { buscar: 'Carcinoma EPIDERMOIDE de la via aerodigestiva superior: laringe, faringe, tráquea, bronquios y esófago superior. Es el síndrome de Bazex o acroqueratosis paraneoplásica, que puede progresar a queratodermia palmoplantar y distrofia ungueal', frec: 'Suele haber ya metástasis en ganglios cervicales al diagnóstico', pedir: ['Exploración de cabeza y cuello, con palpación de las cadenas cervicales', 'Imagen de cabeza, cuello y pelvis', 'Derivación a otorrinolaringología para endoscopia'], destino: 'La ficha de signos paraneoplásicos de este módulo; Nódulo pulmonar y cáncer de pulmón', alerta: true },
        'ampollosa-mucositis': { buscar: 'Pénfigo paraneoplásico y una neoplasia del sistema LINFORRETICULAR: enfermedad de Castleman, linfoma no hodgkiniano, timoma, sarcoma de células dendriticas foliculares y leucemia linfocítica crónica', frec: 'Las dos pistas de paraneoplasia son la inmunofluorescencia directa NEGATIVA, o con depósitos lineales de IgA en la membrana basal, y la mucositis exuberante', pedir: ['Biopsia con inmunofluorescencia directa, interpretando la negatividad como una PISTA y no como normalidad', 'Hemograma, proteinograma e imagen de tórax y abdomen', 'Vigilar las lesiones bronquiales, que dan insuficiencia respiratoria y empeoran el pronóstico'], destino: 'Ampollosas autoinmunes, que lo desarrolla entero; Linfomas; Leucemia linfocítica crónica', alerta: true },
        eritrodermia: { buscar: 'Una neoplasia. La eritrodermia es rara y se asocia a malignidad, también cuando acompaña a una dermatomiositis', frec: 'Rara; su rareza es justamente lo que obliga a estudiarla', pedir: ['Hemograma con frotis, buscando células de Sezary', 'Imagen de tórax y abdomen', 'Biopsia cutánea', 'Revisar fármacos y descartar psoriasis o eccema eritrodermico'], destino: 'Linfomas; Reacciones cutáneas a fármacos', alerta: true },
        vitiligo: { buscar: 'Otras enfermedades autoinmunes. El vitíligo acompaña con frecuencia a la diabetes insulinodependiente y a la enfermedad tiroidea autoinmune', frec: 'Asociación frecuente, no constante', pedir: ['Función tiroidea y anticuerpos antitiroideos', 'Glucemia y hemoglobina glucosilada', 'Revisar el resto del eje autoinmune según la clínica'], destino: 'Hipotiroidismo; Hipertiroidismo y tiroiditis; Diabetes mellitus', alerta: false },
        'lesion-pigmentada': { buscar: 'Melanoma. No es una manifestación de enfermedad sistémica, pero es el signo cutáneo que más cambia el pronóstico cuando se reconoce a tiempo', frec: 'El espesor de Breslow es el que manda sobre todo lo demás', pedir: ['Dermatoscopia y regla ABCDE', 'Exeresis con margen estrecho para biopsia, no biopsia incisional de rutina'], destino: 'Módulo 79 de Melanoma, que lo desarrolla entero; Exploración de piel y faneras para las lesiones elementales', alerta: true }
      };
      if (!v.signo || !M[v.signo]) return null;
      const d = M[v.signo];
      const etiqueta = {
        acantosis: 'Acantosis nigricans', necrobiosis: 'Necrobiosis lipoidica', 'ampollas-pies': 'Bullosis diabeticorum',
        'infeccion-repeticion': 'Infecciones cutáneas de repetición', calcifilaxis: 'Calcifilaxis', 'ampollas-manos': 'Ampollas en el dorso de las manos en diálisis',
        kyrle: 'Dermatosis perforante adquirida', nodoso: 'Eritema nodoso', aftas: 'Úlceras orales de repetición',
        carenciales: 'Signos carenciales', 'xantoma-palmar': 'Xantoma estriado palmar', 'xantoma-plano': 'Xantoma plano difuso',
        hiperpigmentacion: 'Hiperpigmentación difusa', rubor: 'Rubor paroxístico', bazex: 'Síndrome de Bazex',
        'ampollosa-mucositis': 'Ampollosa con mucositis', eritrodermia: 'Eritrodermia', vitiligo: 'Vitiligo',
        'lesion-pigmentada': 'Lesión pigmentada que cambia'
      }[v.signo];
      return { etiqueta, buscar: d.buscar, frec: d.frec, pedir: d.pedir, destino: d.destino, alerta: d.alerta };
    },
    format(r) {
      let s = `<strong style="color:${r.alerta ? C_ROJO : '#6b5a8c'};font-size:14.5px;">${r.etiqueta}</strong>`;
      s += `<br><br><strong>Que hay que buscar</strong><br><span style="opacity:.95;">${r.buscar}.</span>`;
      s += `<br><br><strong>Con que frecuencia</strong><br><span style="opacity:.9;">${r.frec}.</span>`;
      s += '<br><br><strong>Que se pide</strong><br>' + r.pedir.map(x => '&bull; ' + x).join('<br>');
      s += `<br><br><strong>A donde lleva:</strong> ${r.destino}.`;
      if (r.alerta) s += '<br><br><span style="color:#8c3a34;">Este signo tiene señales de alarma asociadas: no lo cierres como banal sin haberlas comprobado.</span>';
      s += '<br><span style="opacity:.75;font-size:12.5px;">Si el tema de destino no te aparece, escribe su nombre en el buscador global de la app, que cubre todos los temas, los protocolos y la valoración preoperatoria.</span>';
      return s;
    },
    fragment: r => `${r.etiqueta}: sigue en ${r.destino.split(';')[0]}`
  },

  {
    key: 'paraneoplasico', title: '¿Es esto paraneoplásico?', accent: '#7a3a6b',
    subtitle: 'Criterios de Curth y señales de alarma',
    incompleteMsg: 'Elige el signo y responde a la cronología.',
    fields: [
      { name: 'signo', id: 'mcs-pn-s', type: 'select', label: 'Signo cutáneo', options: [
        { value: '', label: 'Elegir...' },
        { value: 'acantosis', label: 'Acantosis nigricans' },
        { value: 'bazex', label: 'Erupción psoriasiforme acra (Bazex)' },
        { value: 'ampollosa', label: 'Enfermedad ampollosa' },
        { value: 'eritrodermia', label: 'Eritrodermia' },
        { value: 'necrolitico', label: 'Eritema necrolitico migratorio' },
        { value: 'herpetiforme', label: 'Dermatitis herpetiforme' },
        { value: 'porfiria', label: 'Porfiria cutánea tarda' }
      ] },
      { name: 'simultaneo', id: 'mcs-pn-sim', type: 'select', label: 'Cronología de las dos enfermedades', options: [
        { value: '', label: 'Elegir...' },
        { value: 'si', label: 'Aparecieron a la vez o muy próximas' },
        { value: 'no', label: 'Aparecieron claramente separadas en el tiempo' },
        { value: 'nosabe', label: 'No hay tumor conocido todavía' }
      ] },
      { name: 'mejora', id: 'mcs-pn-mej', type: 'checkbox', label: 'La piel mejoro al tratar el tumor, o reaparecio con la recidiva' },
      { name: 'subita', id: 'mcs-pn-sub', type: 'checkbox', label: 'Solo para la acantosis: aparición SÚBITA' },
      { name: 'noObeso', id: 'mcs-pn-no', type: 'checkbox', label: 'Solo para la acantosis: paciente NO obeso', row: true },
      { name: 'sinEndo', id: 'mcs-pn-se', type: 'checkbox', label: 'Solo para la acantosis: SIN endocrinopatía que la explique' },
      { name: 'ifdNeg', id: 'mcs-pn-ifd', type: 'checkbox', label: 'Solo para la ampollosa: inmunofluorescencia directa NEGATIVA' },
      { name: 'mucositis', id: 'mcs-pn-muc', type: 'checkbox', label: 'Solo para la ampollosa: mucositis exuberante', row: true },
      { type: 'note', text: 'Los criterios de Curth sirven para no lanzar un estudio oncológico por cada dermatosis, y también para no dejar pasar la que si lo merece.' }
    ],
    compute(v) {
      if (!v.signo || !v.simultaneo) return null;
      const M = {
        acantosis: { tumor: 'Adenocarcinoma GÁSTRICO sobre todo, y otros de la cavidad abdominal, digestivos y genitourinarios; en más del 95% de los casos es un adenocarcinoma', donde: 'Abdomen: imagen y endoscopia digestiva alta' },
        bazex: { tumor: 'Carcinoma EPIDERMOIDE de la via aerodigestiva superior: laringe, faringe, tráquea, bronquios y esófago superior', donde: 'Cabeza, cuello y pelvis; suele haber metástasis en ganglios cervicales' },
        ampollosa: { tumor: 'Sistema LINFORRETICULAR en el pénfigo paraneoplásico: enfermedad de Castleman, linfoma no hodgkiniano, timoma, sarcoma de células dendriticas foliculares y leucemia linfocítica crónica. El penfigoide cicatricial antiepiligrina se asocia en cambio a adenocarcinomas', donde: 'Hematología e imagen de tórax y abdomen; vigilar la afectación bronquial' },
        eritrodermia: { tumor: 'Es rara y se asocia a malignidad, también cuando acompaña a una dermatomiositis', donde: 'Estudio amplio, con frotis en busca de células de Sezary' },
        necrolitico: { tumor: 'Glucagonoma', donde: 'Páncreas, y glucagon sérico' },
        herpetiforme: { tumor: 'Linfoma intestinal, con riesgo relativo aumentado igual que en la propia celiaquía', donde: 'Digestivo, con serología de celiaquía' },
        porfiria: { tumor: 'Se ha relacionado con tumores hepáticos, pero la asociación parece CASUAL', donde: 'No procede un estudio oncológico por este motivo' }
      }[v.signo];
      const esAcantosis = v.signo === 'acantosis';
      const esAmpollosa = v.signo === 'ampollosa';
      const esPorfiria = v.signo === 'porfiria';
      const senales = [];
      if (esAcantosis) {
        if (v.subita) senales.push('aparición súbita');
        if (v.noObeso) senales.push('paciente no obeso');
        if (v.sinEndo) senales.push('sin endocrinopatía');
      }
      if (esAmpollosa) {
        if (v.ifdNeg) senales.push('inmunofluorescencia directa negativa');
        if (v.mucositis) senales.push('mucositis exuberante');
      }
      const trenAcantosis = esAcantosis && v.subita && v.noObeso && v.sinEndo;
      const curth = (v.simultaneo === 'si' ? 1 : 0) + (v.mejora ? 1 : 0);

      let nivel, color, conducta;
      if (esPorfiria) {
        nivel = 'Asociación probablemente CASUAL';
        color = C_VERDE;
        conducta = [
          'La infección por el virus de la hepatitis C es factor de riesgo de la porfiria cutánea tarda Y de los tumores hepáticos a la vez, de modo que la asociación entre las dos se explica por el factor común',
          'Es el mejor ejemplo de para que sirven los criterios de Curth: no toda coincidencia es causalidad',
          'Lo que si corresponde es estudiar la hepatitis C y la sobrecarga de hierro'
        ];
      } else if (trenAcantosis || (esAmpollosa && v.ifdNeg && v.mucositis) || curth === 2) {
        nivel = 'Sospecha ALTA de origen paraneoplásico';
        color = C_ROJO;
        conducta = [
          'Estudio dirigido: ' + M.donde,
          'No esperar a que la dermatosis responda al tratamiento dermatológico para empezar a buscar',
          'Si el tumor aparece, comprobar el criterio de Curth que queda: la piel debe mejorar al tratarlo'
        ];
      } else if (curth === 1 || senales.length >= 1) {
        nivel = 'Sospecha INTERMEDIA: merece estudio';
        color = C_AMBAR;
        conducta = [
          'Completar los criterios de Curth que falten antes de ampliar el estudio',
          'Estudio dirigido razonable: ' + M.donde,
          esAcantosis ? 'En la acantosis, las tres señales van JUNTAS: súbita, no obeso y sin endocrinopatía. Con una o dos, lo más probable sigue siendo la hiperinsulinemia' : 'Reevaluar en semanas si el cuadro cambia'
        ];
      } else {
        nivel = 'Sospecha BAJA con los datos que has dado';
        color = C_VERDE;
        conducta = [
          'Con cronología separada y sin señales de alarma, la asociación es poco creible',
          esAcantosis ? 'Lo más probable es hiperinsulinemia: mide glucemia y hemoglobina glucosilada, y recuerda que la acantosis puede preceder al diagnóstico de diabetes con glucosilada normal' : 'Tratar la dermatosis y reevaluar',
          'No hace falta un estudio oncológico amplio solo por este signo'
        ];
      }
      return { nivel, color, tumor: M.tumor, donde: M.donde, senales, curth, esAcantosis, esAmpollosa, esPorfiria, conducta, nosabe: v.simultaneo === 'nosabe' };
    },
    format(r) {
      let s = `<strong style="color:${r.color};font-size:14.5px;">${r.nivel}.</strong>`;
      s += `<br><br><strong>Tumor al que apunta este signo</strong><br><span style="opacity:.95;">${r.tumor}.</span>`;
      if (!r.esPorfiria) s += `<br><br><strong>Donde dirigir el estudio</strong><br><span style="opacity:.9;">${r.donde}.</span>`;
      s += '<br><br><strong>Lo que corresponde</strong><br>' + r.conducta.map(x => '&bull; ' + x).join('<br>');
      if (r.senales.length) s += `<br><br><span style="opacity:.9;">Señales presentes: ${r.senales.join(', ')}.</span>`;
      s += `<br><span style="opacity:.75;font-size:12.5px;">Criterios de Curth cumplidos de los dos que más rinden: ${r.curth} de 2 (aparición simultánea y mejoría de la piel al tratar el tumor).${r.nosabe ? ' Has indicado que todavía no hay tumor conocido, de modo que la cronología no puede valorarse y el juicio depende solo de las señales de alarma.' : ''}</span>`;
      return s;
    },
    fragment: r => `${r.nivel.toLowerCase()}, Curth ${r.curth} de 2`
  }
];
