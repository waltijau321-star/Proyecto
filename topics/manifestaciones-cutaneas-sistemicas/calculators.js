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
    key: 'purpura-mecanismo', title: 'Purpura: de la morfologia al mecanismo', accent: '#8c3a34',
    subtitle: 'Lo que se ve decide lo que se pide',
    incompleteMsg: 'Elige el aspecto de la lesion.',
    fields: [
      { name: 'morfologia', id: 'mcs-pm-m', type: 'select', label: 'Aspecto de la lesion', options: [
        { value: '', label: 'Elegir...' },
        { value: 'petequias', label: 'Petequias (maculas peque&#241;as que no desaparecen a la presion)' },
        { value: 'equimosis', label: 'Equimosis tras traumatismo minimo' },
        { value: 'palpable', label: 'Purpura PALPABLE (se nota relieve al pasar el dedo)' },
        { value: 'retiforme', label: 'Purpura RETIFORME: arboriforme o estrellada' },
        { value: 'pigmentaria', label: 'Maculas ocres cronicas en piernas (aspecto de pimienta de cayena)' }
      ] },
      { name: 'dolor', id: 'mcs-pm-d', type: 'checkbox', label: 'La lesion es dolorosa' },
      { name: 'agudo', id: 'mcs-pm-a', type: 'checkbox', label: 'Inicio agudo, en dias', row: true },
      { name: 'plaquetas', id: 'mcs-pm-p', type: 'number', step: '1', required: false, label: 'Plaquetas por mm3 (dejar vacio si no se sabe)', placeholder: 'ej. 8000' },
      { name: 'contexto', id: 'mcs-pm-c', type: 'select', label: 'Contexto o maniobra', options: [
        { value: 'ninguno', label: 'Ninguno de los de abajo' },
        { value: 'pellizco', label: 'La purpura sale al PELLIZCAR la piel' },
        { value: 'perifolicular', label: 'La hemorragia rodea los foliculos' },
        { value: 'presion', label: 'Sobre las claviculas, tras parto, tos, vomitos o llanto' },
        { value: 'conectivo', label: 'Piel actinica, corticoide cronico, Ehlers-Danlos o pseudoxantoma' },
        { value: 'dialisis', label: 'Paciente en hemodialisis' }
      ] },
      { type: 'note', text: 'La morfologia manda sobre todo lo demas: palpar y pellizcar resuelven mas que cualquier analitica de entrada.' }
    ],
    compute(v) {
      if (!v.morfologia) return null;
      const plq = (v.plaquetas === null || v.plaquetas === undefined || v.plaquetas === '' || isNaN(v.plaquetas)) ? null : Number(v.plaquetas);
      const ctx = v.contexto || 'ninguno';
      let mecanismo = '', detalle = '', pedir = [], destino = '', urgente = false, color = C_AZUL;

      if (ctx === 'presion') {
        mecanismo = 'Pico de presion intravascular';
        detalle = 'Petequias por encima del punto de presion tras el parto, accesos de tos o de vomitos, o llanto intenso en el ni&#241;o. El torniquete produce lo mismo por encima de la zona comprimida. Es un fenomeno mecanico.';
        pedir = ['Nada. Reconocer el contexto es el diagnostico'];
        destino = 'Ninguno: no hay enfermedad que buscar';
        color = C_VERDE;
      } else if (ctx === 'pellizco') {
        mecanismo = 'Extravascular: amiloidosis de cadenas ligeras';
        detalle = 'En la amiloidosis de cadenas ligeras la purpura se induce con facilidad al pellizcar la piel. Es una maniobra de dos segundos que reorienta el estudio entero.';
        pedir = ['Proteinograma e inmunoelectroforesis de proteinas', 'Cadenas ligeras libres en suero', 'Valorar biopsia cutanea con rojo Congo'];
        destino = 'Mieloma multiple';
        color = C_AMBAR;
      } else if (ctx === 'perifolicular') {
        mecanismo = 'Extravascular: escorbuto';
        detalle = 'La hemorragia perifolicular sugiere deficit de vitamina C. Aparece en malabsorcion y en dietas muy restrictivas, y es de los pocos signos que dan el diagnostico casi solos.';
        pedir = ['Historia dietetica dirigida', 'Vitamina C serica si esta disponible', 'Revisar el resto de los signos carenciales: frinodermia, queilitis angular, acrodermatitis'];
        destino = 'Soporte nutricional, y la ficha del enfermo digestivo de este modulo';
        color = C_AMBAR;
      } else if (v.morfologia === 'retiforme') {
        mecanismo = 'Oclusion vascular con inflamacion minima';
        detalle = 'La purpura retiforme, arboriforme o estrellada, dolorosa y de inicio agudo, es TROMBOSIS y no inflamacion. La histologia muestra trombosis difusa de los vasos dermicos SIN vasculitis. Es el patron del sindrome antifosfolipidico y de las vasculopatias tromboticas.';
        pedir = ['Anticuerpos antifosfolipidicos y anticoagulante lupico', 'Hemograma, coagulacion y fibrinogeno', 'Valorar biopsia de piel de la zona activa, evitando el area necrotica'];
        destino = 'Trastornos de la coagulacion y trombofilias';
        urgente = !!(v.dolor && v.agudo);
        color = C_ROJO;
        if (ctx === 'dialisis') {
          detalle += ' En el paciente en hemodialisis, esta imagen es la de la CALCIFILAXIS: empieza pareciendo una livedo reticularis y progresa a placas simetricas y extremadamente dolorosas en zonas de mayor grasa, con ulceracion y necrosis. Aparece en el 1 al 4% de los pacientes en hemodialisis con hiperparatiroidismo secundario.';
          pedir = ['Calcio, fosforo y paratohormona: el producto calcio-fosforo por encima de 60 a 70 es el dato clave'].concat(pedir);
          destino = 'Lesion renal aguda, y la ficha del enfermo renal de este modulo';
          urgente = true;
        }
      } else if (v.morfologia === 'palpable') {
        mecanismo = 'Hemorragia con inflamacion del vaso: VASCULITIS';
        detalle = 'Si se palpa, hay inflamacion de la pared del vaso. La vasculitis leucocitoclastica es una causa importante, y cuando el mecanismo es por inmunocomplejos las lesiones predominan en zonas declives. La perivascularitis sin vasculitis no produce purpura palpable.';
        pedir = ['Hemograma, funcion renal con sedimento y proteinuria', 'Autoinmunidad: ANA, ANCA, complemento, crioglobulinas', 'Serologias de hepatitis B y C', 'Biopsia cutanea con inmunofluorescencia directa, en lesion de menos de 48 horas'];
        destino = 'Vasculitis, ordenadas por calibre de vaso: ver la ficha reumatologica de este modulo';
        color = C_ROJO;
      } else if (v.morfologia === 'pigmentaria') {
        mecanismo = 'Purpura pigmentaria cronica';
        detalle = 'Afectan a vasos de peque&#241;o calibre de la dermis y dejan la coloracion ocre de la hemosiderina. Son el Schamberg (aspecto de pimienta de cayena), el Doucas-Kapetanakis, la purpura anular telangiectodes de Majocchi y el liquen aureus. Benignas y cronicas.';
        pedir = ['Hemograma y coagulacion basicos para descartar otra causa', 'Si hay sospecha de gammapatia policlonal, proteinograma: la purpura hipergammaglobulinemica de Waldenstrom aparece en zonas declives y bajo ropa ajustada, asociada al sindrome de Sjogren y a la sarcoidosis'];
        destino = 'Ninguno urgente. Si hay Sjogren o sarcoidosis detras, el tema de Sarcoidosis';
        color = C_VERDE;
      } else if (v.morfologia === 'equimosis') {
        mecanismo = ctx === 'conectivo' ? 'Extravascular: tejido conectivo defectuoso' : 'Hemorragia simple por disfuncion plaquetaria';
        detalle = ctx === 'conectivo'
          ? 'La purpura ante traumatismo minimo por tejido conectivo defectuoso: purpura actinica, exceso de corticoide local o sistemico, Ehlers-Danlos y pseudoxantoma elastico. El contexto es el diagnostico.'
          : 'La disfuncion plaquetaria produce mas equimosis ante traumatismos minimos que petequias, al contrario que la trombocitopenia. Si no hay causa extravascular, hay que estudiar la funcion plaquetaria.';
        pedir = ctx === 'conectivo'
          ? ['Revisar corticoides tanto topicos como sistemicos', 'Explorar la hiperlaxitud y los signos de pseudoxantoma elastico', 'No hace falta mas estudio si el contexto lo explica']
          : ['Hemograma con recuento y frotis', 'Coagulacion y tiempo de hemorragia o funcion plaquetaria', 'Revisar antiagregantes y antiinflamatorios'];
        destino = ctx === 'conectivo' ? 'Ninguno: revisar el corticoide' : 'Alteraciones plaquetarias cuantitativas y cualitativas';
        color = ctx === 'conectivo' ? C_VERDE : C_AMBAR;
      } else {
        mecanismo = 'Hemorragia simple: trombocitopenia';
        detalle = 'Las petequias pueden aparecer con plaquetas por debajo de 50.000 por mm3, pero lo tipico es verlas con 10.000 o menos. La trombocitopenia grave deteriora la adhesion endotelial y aumenta la permeabilidad vascular.';
        pedir = ['Hemograma con recuento y frotis de sangre periferica', 'Coagulacion', 'Revisar farmacos y descartar seudotrombocitopenia por EDTA'];
        destino = 'Alteraciones plaquetarias cuantitativas y cualitativas';
        color = C_AMBAR;
        if (plq !== null) {
          if (plq <= 10000) { detalle += ' Con ' + plq + ' plaquetas por mm3 estas en el rango TIPICO de las petequias.'; urgente = true; }
          else if (plq < 50000) detalle += ' Con ' + plq + ' plaquetas por mm3 la aparicion de petequias es posible, aunque no es lo tipico.';
          else {
            mecanismo = 'Hemorragia simple, pero NO por trombocitopenia';
            detalle += ' Con ' + plq + ' plaquetas por mm3 el recuento no explica las petequias, de modo que hay que buscar otra cosa: disfuncion plaquetaria, o una causa extravascular.';
            pedir = ['Funcion plaquetaria o tiempo de hemorragia', 'Revisar antiagregantes y antiinflamatorios', 'Buscar causa extravascular: corticoide, piel actinica, pellizco positivo, hemorragia perifolicular'];
            color = C_AMBAR;
          }
        }
      }
      return { mecanismo, detalle, pedir, destino, urgente, color, plq, morfologia: v.morfologia, ctx };
    },
    format(r) {
      let s = `<strong style="color:${r.color};font-size:14.5px;">${r.mecanismo}.</strong>`;
      if (r.urgente) s += '<br><strong style="color:#8c3a34;">No admite esperar a la proxima consulta.</strong>';
      s += `<br><span style="opacity:.9;">${r.detalle}</span>`;
      s += '<br><br><strong>Que se pide</strong><br>' + r.pedir.map(x => '&bull; ' + x).join('<br>');
      s += `<br><br><strong>A donde lleva:</strong> ${r.destino}.`;
      if (r.morfologia === 'petequias' && r.plq === null) s += '<br><span style="opacity:.75;font-size:12.5px;">No has indicado las plaquetas. Es el dato que mas cambia la lectura de una petequia: con 10.000 o menos esta explicada, y por encima de 50.000 hay que buscar otra cosa.</span>';
      if (r.morfologia === 'palpable' && r.ctx !== 'ninguno') s += '<br><span style="opacity:.75;font-size:12.5px;">Una purpura palpable es vasculitis aunque el contexto sugiera otra cosa: el relieve manda sobre el resto de las pistas.</span>';
      return s;
    },
    fragment: r => `${r.mecanismo.toLowerCase()}${r.urgente ? ', y urgente' : ''}`
  },

  {
    key: 'prurito-estudio', title: 'Prurito sin lesion primaria: el escalon que toca', accent: '#5a7a8a',
    subtitle: 'Para no pedirlo todo de golpe',
    incompleteMsg: 'Indica cuantas semanas lleva y si hay una dermatosis que lo explique.',
    fields: [
      { name: 'semanas', id: 'mcs-pe-s', type: 'number', step: '1', label: 'Semanas de evolucion', placeholder: 'ej. 10' },
      { name: 'lesionPrimaria', id: 'mcs-pe-lp', type: 'select', label: '&#191;Hay una dermatosis primaria que lo explique?', options: [
        { value: '', label: 'Elegir...' },
        { value: 'si', label: 'Si, hay una dermatosis que lo explica' },
        { value: 'no', label: 'No, solo lesiones de rascado o nada' },
        { value: 'noexplorado', label: 'No lo he explorado todo todavia' }
      ] },
      { name: 'farmaco', id: 'mcs-pe-f', type: 'checkbox', label: 'Hay un farmaco sospechoso sin retirar' },
      { name: 'basico', id: 'mcs-pe-b', type: 'select', label: 'Panel basico (hemograma, renal, hepatico, tiroideo, hierro, PCR y VSG)', options: [
        { value: 'nohecho', label: 'Todavia no se ha hecho' },
        { value: 'normal', label: 'Hecho y normal' },
        { value: 'renal', label: 'Alterado: funcion renal' },
        { value: 'hepatico', label: 'Alterado: funcion hepatica' },
        { value: 'tiroideo', label: 'Alterado: funcion tiroidea' },
        { value: 'ferropenia', label: 'Alterado: hierro y ferritina bajos' }
      ] },
      { name: 'mapa', id: 'mcs-pe-m', type: 'select', label: 'Distribucion del prurito', options: [
        { value: 'generalizado', label: 'Generalizado, sin patron' },
        { value: 'dermatoma', label: 'Limitado a un dermatoma, con lesiones secundarias' },
        { value: 'dorsal', label: 'Placa dorsal hiperpigmentada a la altura de T2 a T6' },
        { value: 'braquiorradial', label: 'Caras laterales de brazos y hombros' },
        { value: 'polineuropatia', label: 'Generalizado con parestesias o neuropatia conocida' }
      ] },
      { type: 'note', text: 'El valor de esta calculadora es el ORDEN: explorar, luego farmacos, luego panel basico, y solo despues el ampliado.' }
    ],
    compute(v) {
      const sem = (v.semanas === null || v.semanas === undefined || v.semanas === '' || isNaN(v.semanas)) ? null : Number(v.semanas);
      if (sem === null || !v.lesionPrimaria) return null;
      const cronico = sem > 6;
      const mapa = v.mapa || 'generalizado';
      const basico = v.basico || 'nohecho';
      let escalon = '', acciones = [], destino = '', color = C_AZUL;

      if (v.lesionPrimaria === 'noexplorado') {
        escalon = 'Escalon 0: la exploracion no esta terminada';
        acciones = [
          'Explorar TODA la piel, incluidas las regiones genital, interdigital, ocular y la del pezon',
          'Caracterizar el prurito: generalizado o localizado, cuando empezo, como varia durante el dia, que lo intensifica y que lo alivia',
          'Preguntar por viajes recientes, convivientes afectados, trabajo, animales y alergenos',
          'Preguntar por sintomas sistemicos: fiebre, sudoracion nocturna, perdida de peso, dolor abdominal, mareo, artritis y parestesias'
        ];
        destino = 'Volver a esta calculadora cuando la exploracion este completa';
        color = C_AMBAR;
      } else if (v.lesionPrimaria === 'si') {
        escalon = 'No es un prurito sin lesion primaria';
        acciones = [
          'Si hay una dermatosis que lo explica, el prurito es su sintoma y el estudio sistemico no corresponde',
          'Tratar la dermatosis y reevaluar: si el prurito persiste desproporcionadamente, volver a este escalonado'
        ];
        destino = 'El tema de la dermatosis: Eccemas y dermatitis, Psoriasis, Urticaria y angioedema, o Escabiosis y pediculosis';
        color = C_VERDE;
      } else if (v.farmaco) {
        escalon = 'Escalon 1: los farmacos van ANTES de la analitica';
        acciones = [
          'Suspender el farmaco sospechoso de 4 a 6 SEMANAS y reevaluar',
          'Si el prurito cede, el vinculo causal se refuerza y se cambia el farmaco',
          'Recordar los cinco mecanismos por los que un farmaco da prurito: alergia, colestasis, xerosis, acumulo de metabolitos en piel o nervios, y fototoxicidad'
        ];
        destino = 'Reacciones cutaneas a farmacos, para el resto del espectro';
        color = C_AMBAR;
      } else if (basico === 'nohecho') {
        escalon = 'Escalon 2: panel basico';
        acciones = [
          'Hemograma completo',
          'Funcion renal, funcion hepatica y funcion tiroidea',
          'Hierro y ferritina',
          'Proteina C reactiva y velocidad de sedimentacion'
        ];
        destino = 'Depende del resultado: vuelve aqui con el panel en la mano';
        color = C_AZUL;
      } else if (basico === 'normal') {
        escalon = 'Escalon 3: panel ampliado';
        acciones = [
          'Serologia de VIH y serologias de hepatitis B y C',
          'Imagen de torax y abdomen',
          'Inmunoelectroforesis de proteinas',
          'Paratohormona, colesterol y fracciones',
          'Biopsia cutanea, que aqui es el ultimo escalon y no el primero'
        ];
        destino = 'Linfomas si aparecen adenopatias o sintomas B; Mieloma multiple si la inmunoelectroforesis es positiva';
        color = C_AMBAR;
      } else {
        const mapaDest = {
          renal: ['funcion renal alterada', 'Lesion renal aguda, y la ficha del enfermo renal de este modulo', 'En la enfermedad renal el prurito aparece en el 50 al 90% de los casos, y la xerosis en el 50 al 80% de los que estan en hemodialisis.'],
          hepatico: ['funcion hepatica alterada', 'Cirrosis hepatica', 'Mirar tambien los estigmas hepaticos, que el tema de Cirrosis desarrolla enteros.'],
          tiroideo: ['funcion tiroidea alterada', 'Hipotiroidismo, o Hipertiroidismo y tiroiditis', 'En el hipotiroidismo se asocian ademas dermatitis herpetiforme, alopecia areata, vitiligo y urticaria autoinmune.'],
          ferropenia: ['ferropenia', 'Anemia ferropenica', 'Buscar la causa de la ferropenia, que es lo que de verdad hay que diagnosticar.']
        }[basico];
        escalon = 'Causa encontrada en el panel basico: ' + mapaDest[0];
        acciones = ['Estudiar y tratar la causa', 'No hace falta pasar al panel ampliado si el hallazgo explica el cuadro', mapaDest[2]];
        destino = mapaDest[1];
        color = C_VERDE;
      }

      const neuro = {
        dermatoma: 'Neuralgia postherpetica: lesiones secundarias limitadas al dermatoma.',
        dorsal: 'Notalgia parestesica: placa hiperpigmentada dorsal a la altura de T2 a T6.',
        braquiorradial: 'Prurito braquiorradial: caras laterales de brazos y hombros.',
        polineuropatia: 'Prurito generalizado de origen neuropatico: polineuropatia diabetica, carencial, por alcoholismo o autoinmune.'
      }[mapa] || null;

      return { sem, cronico, escalon, acciones, destino, color, neuro, basico };
    },
    format(r) {
      let s = `<strong style="color:${r.color};font-size:14.5px;">${r.escalon}.</strong>`;
      s += `<br><span style="opacity:.9;">Prurito ${r.cronico ? 'CRONICO' : 'AGUDO'}: ${r.sem} semanas. ${r.cronico ? 'Por encima de 6 semanas se asocia mas a enfermedades cutaneas y sistemicas, es mas refractario y, al entrar en el ciclo picor-rascado, genera excoriaciones, cambios de pigmentacion y liquenificacion que confunden el cuadro.' : 'Hasta 6 semanas se relaciona mas con urticaria, reacciones a farmacos e infecciones.'}</span>`;
      s += '<br><br><strong>Lo que toca ahora</strong><br>' + r.acciones.map(x => '&bull; ' + x).join('<br>');
      s += `<br><br><strong>A donde lleva:</strong> ${r.destino}.`;
      if (r.neuro) s += `<br><br><span style="color:${C_AZUL};"><strong>El mapa sugiere una causa neurologica.</strong> ${r.neuro} El tratamiento del prurito neuropatico tiene nombre propio: capsaicina y mentol topicos, y por via oral gabapentina, pregabalina, mirtazapina o paroxetina.</span>`;
      s += '<br><span style="opacity:.75;font-size:12.5px;">La causa psicogena se considera al final y con criterios propios: sin causa somatica ni cutanea, mas de 6 meses de evolucion, relacion temporal con hechos psicologicos, variacion con el estres, predominio en reposo y mejoria con psicofarmacos o terapia.</span>';
      return s;
    },
    fragment: r => `prurito ${r.cronico ? 'cronico' : 'agudo'} de ${r.sem} semanas; ${r.escalon.toLowerCase()}`
  },

  {
    key: 'signo-a-donde', title: 'El indice: de un signo a un tema', accent: '#6b5a8c',
    subtitle: 'Que buscar, con que frecuencia y donde sigue',
    incompleteMsg: 'Elige el signo que tienes delante.',
    fields: [
      { name: 'signo', id: 'mcs-sd-s', type: 'select', label: 'Signo que tienes delante', options: [
        { value: '', label: 'Elegir...' },
        { value: 'acantosis', label: 'Acantosis nigricans' },
        { value: 'necrobiosis', label: 'Placa pardo-amarillenta en cara anterior de las piernas' },
        { value: 'ampollas-pies', label: 'Ampollas tensas e indoloras en los pies' },
        { value: 'infeccion-repeticion', label: 'Infecciones cutaneas de repeticion' },
        { value: 'calcifilaxis', label: 'Placas purpuricas muy dolorosas en zonas grasas, en dialisis' },
        { value: 'ampollas-manos', label: 'Ampollas y erosiones en el dorso de las manos, en dialisis' },
        { value: 'kyrle', label: 'Papulas umbilicadas muy pruriginosas en superficies de extension' },
        { value: 'nodoso', label: 'Nodulos eritematosos dolorosos en cara anterior de piernas' },
        { value: 'aftas', label: 'Ulceras orales de repeticion' },
        { value: 'carenciales', label: 'Queilitis angular, frinodermia o acrodermatitis' },
        { value: 'xantoma-palmar', label: 'Xantoma estriado palmar' },
        { value: 'xantoma-plano', label: 'Xantoma plano difuso' },
        { value: 'hiperpigmentacion', label: 'Hiperpigmentacion difusa con perdida de vello' },
        { value: 'rubor', label: 'Rubor paroxistico llamativo en cara y torax' },
        { value: 'bazex', label: 'Erupcion psoriasiforme en orejas, nariz, manos y pies' },
        { value: 'ampollosa-mucositis', label: 'Ampollosa con mucositis exuberante' },
        { value: 'eritrodermia', label: 'Eritrodermia sin causa aparente' },
        { value: 'vitiligo', label: 'Vitiligo' },
        { value: 'lesion-pigmentada', label: 'Lesion pigmentada que cambia' }
      ] },
      { type: 'note', text: 'Este es el indice del modulo. La respuesta no es un diagnostico: es lo que hay que buscar y el tema de la app donde sigue la historia.' }
    ],
    compute(v) {
      const M = {
        acantosis: { buscar: 'Hiperinsulinemia. Y si es de aparicion SUBITA, en persona NO obesa y SIN endocrinopatia, un adenocarcinoma gastrico', frec: 'Puede PRECEDER al diagnostico de diabetes con hemoglobina glucosilada todavia normal; en la forma paraneoplasica, mas del 95% de los tumores son adenocarcinomas', pedir: ['Glucemia y hemoglobina glucosilada', 'Comprobar las tres se&#241;ales de paraneoplasia: subita, no obeso, sin endocrinopatia', 'Si las cumple, imagen de abdomen y endoscopia digestiva alta'], destino: 'Diabetes mellitus; y la ficha de signos paraneoplasicos de este modulo si cumple las tres se&#241;ales', alerta: true },
        necrobiosis: { buscar: 'Diabetes. Es la necrobiosis lipoidica: empieza como papulas eritematosas y progresa a una placa pardo-amarillenta con centro atrofico y telangiectasias, simetrica y mas frecuente en mujeres', frec: 'Se ULCERA en el 35% de los casos, y entonces se sobreinfecta', pedir: ['Glucemia y hemoglobina glucosilada', 'Vigilar la ulceracion, que es la complicacion esperable'], destino: 'Diabetes mellitus', alerta: false },
        'ampollas-pies': { buscar: 'Diabetes. Es la bullosis diabeticorum: ampollas tensas, INDOLORAS, sin inflamacion alrededor, de crecimiento rapido y curacion en semanas', frec: 'La presenta alrededor del 0,5% de los diabeticos, y puede ser la manifestacion inicial de la enfermedad', pedir: ['Glucemia y hemoglobina glucosilada', 'Descartar una ampollosa autoinmune si hay inflamacion o dolor, que no son propios de esta'], destino: 'Diabetes mellitus; Ampollosas autoinmunes si el cuadro no encaja', alerta: false },
        'infeccion-repeticion': { buscar: 'Diabetes. Las infecciones cutaneas de repeticion son motivo para investigarla: estafilococicas (foliculitis, abscesos, impetigo), estreptococicas (ectima, celulitis), candidiasis cutanea, mucosa y periungueal, y dermatofitosis', frec: 'Sin frecuencia unica; lo importante es el umbral de sospecha', pedir: ['Glucemia y hemoglobina glucosilada', 'En el diabetico descompensado, vigilar la fascitis necrosante y la gangrena de Fournier, de alta mortalidad', 'Ante otalgia con supuracion, descartar otitis externa maligna', 'Ante cetoacidosis con sinusitis de secrecion serosanguinolenta, pensar en mucormicosis rinocerebral'], destino: 'Diabetes mellitus; Cetoacidosis diabetica si hay mucormicosis; Infecciones de piel y partes blandas', alerta: true },
        calcifilaxis: { buscar: 'Calcifilaxis: vasculopatia trombotica por deposito de calcio en la media de las arteriolas. Empieza pareciendo una livedo reticularis y progresa a placas simetricas y EXTREMADAMENTE dolorosas con ulceracion y necrosis, en gluteos, abdomen, muslos y piernas', frec: 'El 1 al 4% de los pacientes con enfermedad renal cronica en hemodialisis e hiperparatiroidismo secundario', pedir: ['Calcio, fosforo y paratohormona: el producto calcio-fosforo por encima de 60 a 70 es el dato', 'Revisar quelantes con calcio, vitamina D y anticoagulacion', 'Estudio de trombofilia: proteina C y S, anticuerpos antifosfolipidicos'], destino: 'Lesion renal aguda y Sindrome cardiovascular-renal-metabolico', alerta: true },
        'ampollas-manos': { buscar: 'Porfiria cutanea tarda, porque las porfirinas no se dializan bien y se acumulan. Si las porfirinas salen normales, es una PSEUDOPORFIRIA', frec: 'Del 1 al 18% de los pacientes en hemodialisis', pedir: ['Porfirinas en orina, heces y suero', 'Hierro serico y serologia de hepatitis C, que aumentan la predisposicion', 'Si las porfirinas son normales, revisar farmacos: amiodarona, furosemida, tetraciclinas, isotretinoina, naproxeno y acido nalidixico'], destino: 'Porfirias, y la ficha del enfermo renal de este modulo', alerta: false },
        kyrle: { buscar: 'Dermatosis perforante adquirida o enfermedad de Kyrle: papulas o nodulos hipercromicos, umbilicados y con hiperqueratosis central, muy pruriginosos', frec: 'Del 4,5 al 10% de los pacientes en dialisis', pedir: ['Funcion renal, glucemia y acido urico: aparece en la enfermedad renal cronica, la diabetes y la hiperuricemia', 'Tratar el prurito, porque el fenomeno de Koebner por el rascado perpetua las lesiones'], destino: 'Lesion renal aguda; Diabetes mellitus', alerta: false },
        nodoso: { buscar: 'Eritema nodoso. Sus causas principales son la enfermedad inflamatoria intestinal, la sarcoidosis, la infeccion estreptococica, la tuberculosis y los farmacos', frec: 'Hasta el 15% de los pacientes con enfermedad de Crohn y el 10% con colitis ulcerosa; hasta el 90% de los casos se asocia a ACTIVIDAD de la enfermedad intestinal', pedir: ['Anamnesis digestiva dirigida', 'Radiografia de torax, Mantoux o IGRA, serologia estreptococica', 'Revisar farmacos'], destino: 'Modulo 78 de Eritemas reactivos, paniculitis y dermatosis neutrofilicas, que lo desarrolla entero', alerta: false },
        aftas: { buscar: 'Enfermedad inflamatoria intestinal, enfermedad de Behcet o deficit nutricional. Las ulceras pueden ser lesiones por contiguidad con la misma histologia que la enfermedad intestinal, o una reaccion a ella', frec: 'Estomatitis aftosa en mas del 7% de los pacientes con enfermedad inflamatoria intestinal', pedir: ['Anamnesis digestiva y ocular dirigida', 'Hemograma, hierro, vitamina B12 y acido folico', 'Si hay pustulas friables y placas vegetantes amarillentas, es una piostomatitis vegetante'], destino: 'Modulo 78 para el Behcet; la ficha del enfermo digestivo de este modulo', alerta: false },
        carenciales: { buscar: 'Malabsorcion. Cada signo tiene su carencia: hiperqueratosis folicular o frinodermia por VITAMINA A, queilitis angular por VITAMINA B12, escorbuto por VITAMINA C y acrodermatitis enteropatica por ZINC', frec: 'Sin frecuencia unica; dependen de la causa de la malabsorcion', pedir: ['Estudio de malabsorcion y serologia de celiaquia', 'Vitamina B12, acido folico, zinc y vitamina A', 'Historia dietetica y revision de cirugia bariatrica previa'], destino: 'Soporte nutricional del critico; Anemia megaloblastica si hay deficit de B12', alerta: false },
        'xantoma-palmar': { buscar: 'Dislipidemia. El xantoma estriado palmar solo aparece en pacientes con cifras altas de colesterol Y de trigliceridos a la vez', frec: 'Exige las dos cifras altas, no una', pedir: ['Perfil lipidico completo: colesterol, fracciones y trigliceridos', 'Descartar causas secundarias de dislipidemia'], destino: 'Dislipidemias', alerta: false },
        'xantoma-plano': { buscar: 'PARAPROTEINEMIA, incluida la del mieloma multiple. Es la trampa del grupo: aparece en personas con dislipidemia y tambien SIN ella, de modo que un perfil lipidico normal no cierra el caso sino que lo abre', frec: 'Cubre areas extensas de cara, cuello, torax y miembros superiores', pedir: ['Perfil lipidico completo', 'Proteinograma e inmunoelectroforesis de proteinas, que es el que de verdad decide', 'Cadenas ligeras libres en suero'], destino: 'Mieloma multiple; Dislipidemias', alerta: true },
        hiperpigmentacion: { buscar: 'Insuficiencia suprarrenal primaria: hiperpigmentacion difusa de piel, pelo y mucosas, con perdida de vello axilar y pubico y bandas ungueales longitudinales. Si la pigmentacion es MAS intensa de lo esperable, sindrome de ACTH ectopico', frec: 'La hiperpigmentacion especialmente intensa orienta al ACTH ectopico del carcinoma microcitico de pulmon', pedir: ['Cortisol basal y ACTH', 'Ionograma, con atencion a la hiponatremia y la hiperpotasemia', 'Si hay sospecha de ACTH ectopico, imagen de torax'], destino: 'Nodulo pulmonar y cancer de pulmon si es ectopico', alerta: true },
        rubor: { buscar: 'Feocromocitoma. El rubor paroxistico muy llamativo en cara, torax y extremidades superiores es su unica manifestacion cutanea relevante', frec: 'Manifestacion paroxistica, no permanente: hay que preguntarla', pedir: ['Metanefrinas fraccionadas en plasma u orina de 24 horas', 'Tension arterial en crisis y fuera de ellas', 'Imagen suprarrenal si el laboratorio lo apoya'], destino: 'Crisis hipertensivas; Hipertension arterial secundaria', alerta: false },
        bazex: { buscar: 'Carcinoma EPIDERMOIDE de la via aerodigestiva superior: laringe, faringe, traquea, bronquios y esofago superior. Es el sindrome de Bazex o acroqueratosis paraneoplasica, que puede progresar a queratodermia palmoplantar y distrofia ungueal', frec: 'Suele haber ya metastasis en ganglios cervicales al diagnostico', pedir: ['Exploracion de cabeza y cuello, con palpacion de las cadenas cervicales', 'Imagen de cabeza, cuello y pelvis', 'Derivacion a otorrinolaringologia para endoscopia'], destino: 'La ficha de signos paraneoplasicos de este modulo; Nodulo pulmonar y cancer de pulmon', alerta: true },
        'ampollosa-mucositis': { buscar: 'Penfigo paraneoplasico y una neoplasia del sistema LINFORRETICULAR: enfermedad de Castleman, linfoma no hodgkiniano, timoma, sarcoma de celulas dendriticas foliculares y leucemia linfocitica cronica', frec: 'Las dos pistas de paraneoplasia son la inmunofluorescencia directa NEGATIVA, o con depositos lineales de IgA en la membrana basal, y la mucositis exuberante', pedir: ['Biopsia con inmunofluorescencia directa, interpretando la negatividad como una PISTA y no como normalidad', 'Hemograma, proteinograma e imagen de torax y abdomen', 'Vigilar las lesiones bronquiales, que dan insuficiencia respiratoria y empeoran el pronostico'], destino: 'Ampollosas autoinmunes, que lo desarrolla entero; Linfomas; Leucemia linfocitica cronica', alerta: true },
        eritrodermia: { buscar: 'Una neoplasia. La eritrodermia es rara y se asocia a malignidad, tambien cuando acompa&#241;a a una dermatomiositis', frec: 'Rara; su rareza es justamente lo que obliga a estudiarla', pedir: ['Hemograma con frotis, buscando celulas de Sezary', 'Imagen de torax y abdomen', 'Biopsia cutanea', 'Revisar farmacos y descartar psoriasis o eccema eritrodermico'], destino: 'Linfomas; Reacciones cutaneas a farmacos', alerta: true },
        vitiligo: { buscar: 'Otras enfermedades autoinmunes. El vitiligo acompa&#241;a con frecuencia a la diabetes insulinodependiente y a la enfermedad tiroidea autoinmune', frec: 'Asociacion frecuente, no constante', pedir: ['Funcion tiroidea y anticuerpos antitiroideos', 'Glucemia y hemoglobina glucosilada', 'Revisar el resto del eje autoinmune segun la clinica'], destino: 'Hipotiroidismo; Hipertiroidismo y tiroiditis; Diabetes mellitus', alerta: false },
        'lesion-pigmentada': { buscar: 'Melanoma. No es una manifestacion de enfermedad sistemica, pero es el signo cutaneo que mas cambia el pronostico cuando se reconoce a tiempo', frec: 'El espesor de Breslow es el que manda sobre todo lo demas', pedir: ['Dermatoscopia y regla ABCDE', 'Exeresis con margen estrecho para biopsia, no biopsia incisional de rutina'], destino: 'Modulo 79 de Melanoma, que lo desarrolla entero; Exploracion de piel y faneras para las lesiones elementales', alerta: true }
      };
      if (!v.signo || !M[v.signo]) return null;
      const d = M[v.signo];
      const etiqueta = {
        acantosis: 'Acantosis nigricans', necrobiosis: 'Necrobiosis lipoidica', 'ampollas-pies': 'Bullosis diabeticorum',
        'infeccion-repeticion': 'Infecciones cutaneas de repeticion', calcifilaxis: 'Calcifilaxis', 'ampollas-manos': 'Ampollas en el dorso de las manos en dialisis',
        kyrle: 'Dermatosis perforante adquirida', nodoso: 'Eritema nodoso', aftas: 'Ulceras orales de repeticion',
        carenciales: 'Signos carenciales', 'xantoma-palmar': 'Xantoma estriado palmar', 'xantoma-plano': 'Xantoma plano difuso',
        hiperpigmentacion: 'Hiperpigmentacion difusa', rubor: 'Rubor paroxistico', bazex: 'Sindrome de Bazex',
        'ampollosa-mucositis': 'Ampollosa con mucositis', eritrodermia: 'Eritrodermia', vitiligo: 'Vitiligo',
        'lesion-pigmentada': 'Lesion pigmentada que cambia'
      }[v.signo];
      return { etiqueta, buscar: d.buscar, frec: d.frec, pedir: d.pedir, destino: d.destino, alerta: d.alerta };
    },
    format(r) {
      let s = `<strong style="color:${r.alerta ? C_ROJO : '#6b5a8c'};font-size:14.5px;">${r.etiqueta}</strong>`;
      s += `<br><br><strong>Que hay que buscar</strong><br><span style="opacity:.95;">${r.buscar}.</span>`;
      s += `<br><br><strong>Con que frecuencia</strong><br><span style="opacity:.9;">${r.frec}.</span>`;
      s += '<br><br><strong>Que se pide</strong><br>' + r.pedir.map(x => '&bull; ' + x).join('<br>');
      s += `<br><br><strong>A donde lleva:</strong> ${r.destino}.`;
      if (r.alerta) s += '<br><br><span style="color:#8c3a34;">Este signo tiene se&#241;ales de alarma asociadas: no lo cierres como banal sin haberlas comprobado.</span>';
      s += '<br><span style="opacity:.75;font-size:12.5px;">Si el tema de destino no te aparece, escribe su nombre en el buscador global de la app, que cubre todos los temas, los protocolos y la valoracion preoperatoria.</span>';
      return s;
    },
    fragment: r => `${r.etiqueta}: sigue en ${r.destino.split(';')[0]}`
  },

  {
    key: 'paraneoplasico', title: '&#191;Es esto paraneoplasico?', accent: '#7a3a6b',
    subtitle: 'Criterios de Curth y se&#241;ales de alarma',
    incompleteMsg: 'Elige el signo y responde a la cronologia.',
    fields: [
      { name: 'signo', id: 'mcs-pn-s', type: 'select', label: 'Signo cutaneo', options: [
        { value: '', label: 'Elegir...' },
        { value: 'acantosis', label: 'Acantosis nigricans' },
        { value: 'bazex', label: 'Erupcion psoriasiforme acra (Bazex)' },
        { value: 'ampollosa', label: 'Enfermedad ampollosa' },
        { value: 'eritrodermia', label: 'Eritrodermia' },
        { value: 'necrolitico', label: 'Eritema necrolitico migratorio' },
        { value: 'herpetiforme', label: 'Dermatitis herpetiforme' },
        { value: 'porfiria', label: 'Porfiria cutanea tarda' }
      ] },
      { name: 'simultaneo', id: 'mcs-pn-sim', type: 'select', label: 'Cronologia de las dos enfermedades', options: [
        { value: '', label: 'Elegir...' },
        { value: 'si', label: 'Aparecieron a la vez o muy proximas' },
        { value: 'no', label: 'Aparecieron claramente separadas en el tiempo' },
        { value: 'nosabe', label: 'No hay tumor conocido todavia' }
      ] },
      { name: 'mejora', id: 'mcs-pn-mej', type: 'checkbox', label: 'La piel mejoro al tratar el tumor, o reaparecio con la recidiva' },
      { name: 'subita', id: 'mcs-pn-sub', type: 'checkbox', label: 'Solo para la acantosis: aparicion SUBITA' },
      { name: 'noObeso', id: 'mcs-pn-no', type: 'checkbox', label: 'Solo para la acantosis: paciente NO obeso', row: true },
      { name: 'sinEndo', id: 'mcs-pn-se', type: 'checkbox', label: 'Solo para la acantosis: SIN endocrinopatia que la explique' },
      { name: 'ifdNeg', id: 'mcs-pn-ifd', type: 'checkbox', label: 'Solo para la ampollosa: inmunofluorescencia directa NEGATIVA' },
      { name: 'mucositis', id: 'mcs-pn-muc', type: 'checkbox', label: 'Solo para la ampollosa: mucositis exuberante', row: true },
      { type: 'note', text: 'Los criterios de Curth sirven para no lanzar un estudio oncologico por cada dermatosis, y tambien para no dejar pasar la que si lo merece.' }
    ],
    compute(v) {
      if (!v.signo || !v.simultaneo) return null;
      const M = {
        acantosis: { tumor: 'Adenocarcinoma GASTRICO sobre todo, y otros de la cavidad abdominal, digestivos y genitourinarios; en mas del 95% de los casos es un adenocarcinoma', donde: 'Abdomen: imagen y endoscopia digestiva alta' },
        bazex: { tumor: 'Carcinoma EPIDERMOIDE de la via aerodigestiva superior: laringe, faringe, traquea, bronquios y esofago superior', donde: 'Cabeza, cuello y pelvis; suele haber metastasis en ganglios cervicales' },
        ampollosa: { tumor: 'Sistema LINFORRETICULAR en el penfigo paraneoplasico: enfermedad de Castleman, linfoma no hodgkiniano, timoma, sarcoma de celulas dendriticas foliculares y leucemia linfocitica cronica. El penfigoide cicatricial antiepiligrina se asocia en cambio a adenocarcinomas', donde: 'Hematologia e imagen de torax y abdomen; vigilar la afectacion bronquial' },
        eritrodermia: { tumor: 'Es rara y se asocia a malignidad, tambien cuando acompa&#241;a a una dermatomiositis', donde: 'Estudio amplio, con frotis en busca de celulas de Sezary' },
        necrolitico: { tumor: 'Glucagonoma', donde: 'Pancreas, y glucagon serico' },
        herpetiforme: { tumor: 'Linfoma intestinal, con riesgo relativo aumentado igual que en la propia celiaquia', donde: 'Digestivo, con serologia de celiaquia' },
        porfiria: { tumor: 'Se ha relacionado con tumores hepaticos, pero la asociacion parece CASUAL', donde: 'No procede un estudio oncologico por este motivo' }
      }[v.signo];
      const esAcantosis = v.signo === 'acantosis';
      const esAmpollosa = v.signo === 'ampollosa';
      const esPorfiria = v.signo === 'porfiria';
      const senales = [];
      if (esAcantosis) {
        if (v.subita) senales.push('aparicion subita');
        if (v.noObeso) senales.push('paciente no obeso');
        if (v.sinEndo) senales.push('sin endocrinopatia');
      }
      if (esAmpollosa) {
        if (v.ifdNeg) senales.push('inmunofluorescencia directa negativa');
        if (v.mucositis) senales.push('mucositis exuberante');
      }
      const trenAcantosis = esAcantosis && v.subita && v.noObeso && v.sinEndo;
      const curth = (v.simultaneo === 'si' ? 1 : 0) + (v.mejora ? 1 : 0);

      let nivel, color, conducta;
      if (esPorfiria) {
        nivel = 'Asociacion probablemente CASUAL';
        color = C_VERDE;
        conducta = [
          'La infeccion por el virus de la hepatitis C es factor de riesgo de la porfiria cutanea tarda Y de los tumores hepaticos a la vez, de modo que la asociacion entre las dos se explica por el factor comun',
          'Es el mejor ejemplo de para que sirven los criterios de Curth: no toda coincidencia es causalidad',
          'Lo que si corresponde es estudiar la hepatitis C y la sobrecarga de hierro'
        ];
      } else if (trenAcantosis || (esAmpollosa && v.ifdNeg && v.mucositis) || curth === 2) {
        nivel = 'Sospecha ALTA de origen paraneoplasico';
        color = C_ROJO;
        conducta = [
          'Estudio dirigido: ' + M.donde,
          'No esperar a que la dermatosis responda al tratamiento dermatologico para empezar a buscar',
          'Si el tumor aparece, comprobar el criterio de Curth que queda: la piel debe mejorar al tratarlo'
        ];
      } else if (curth === 1 || senales.length >= 1) {
        nivel = 'Sospecha INTERMEDIA: merece estudio';
        color = C_AMBAR;
        conducta = [
          'Completar los criterios de Curth que falten antes de ampliar el estudio',
          'Estudio dirigido razonable: ' + M.donde,
          esAcantosis ? 'En la acantosis, las tres se&#241;ales van JUNTAS: subita, no obeso y sin endocrinopatia. Con una o dos, lo mas probable sigue siendo la hiperinsulinemia' : 'Reevaluar en semanas si el cuadro cambia'
        ];
      } else {
        nivel = 'Sospecha BAJA con los datos que has dado';
        color = C_VERDE;
        conducta = [
          'Con cronologia separada y sin se&#241;ales de alarma, la asociacion es poco creible',
          esAcantosis ? 'Lo mas probable es hiperinsulinemia: mide glucemia y hemoglobina glucosilada, y recuerda que la acantosis puede preceder al diagnostico de diabetes con glucosilada normal' : 'Tratar la dermatosis y reevaluar',
          'No hace falta un estudio oncologico amplio solo por este signo'
        ];
      }
      return { nivel, color, tumor: M.tumor, donde: M.donde, senales, curth, esAcantosis, esAmpollosa, esPorfiria, conducta, nosabe: v.simultaneo === 'nosabe' };
    },
    format(r) {
      let s = `<strong style="color:${r.color};font-size:14.5px;">${r.nivel}.</strong>`;
      s += `<br><br><strong>Tumor al que apunta este signo</strong><br><span style="opacity:.95;">${r.tumor}.</span>`;
      if (!r.esPorfiria) s += `<br><br><strong>Donde dirigir el estudio</strong><br><span style="opacity:.9;">${r.donde}.</span>`;
      s += '<br><br><strong>Lo que corresponde</strong><br>' + r.conducta.map(x => '&bull; ' + x).join('<br>');
      if (r.senales.length) s += `<br><br><span style="opacity:.9;">Se&#241;ales presentes: ${r.senales.join(', ')}.</span>`;
      s += `<br><span style="opacity:.75;font-size:12.5px;">Criterios de Curth cumplidos de los dos que mas rinden: ${r.curth} de 2 (aparicion simultanea y mejoria de la piel al tratar el tumor).${r.nosabe ? ' Has indicado que todavia no hay tumor conocido, de modo que la cronologia no puede valorarse y el juicio depende solo de las se&#241;ales de alarma.' : ''}</span>`;
      return s;
    },
    fragment: r => `${r.nivel.toLowerCase()}, Curth ${r.curth} de 2`
  }
];
