// topics/sarcoidosis/calculators.js
// 4 herramientas:
// - estadio-scadding: estadio radiologico y probabilidad de remision espontanea, con la
//   advertencia de que el estadio NO decide por si solo si hay que tratar.
// - tratar-sarcoidosis: la decision central del tema, que cruza organos de riesgo, sintomas y
//   deterioro funcional documentado.
// - hipercalcemia-sarcoidosis: patron de la hipercalcemia mediada por vitamina D activa y su
//   manejo, incluida la retirada de suplementos.
// - sospecha-cardiaca: que datos obligan a pasar de un electrocardiograma a imagen avanzada.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

const SCADDING = {
  '0': { titulo: 'Estadio 0: radiografia normal', remision: null, texto: 'La radiografia de torax es normal, lo que NO significa que no haya sarcoidosis: la enfermedad puede estar en la piel, el ojo, el corazon, el higado o el sistema nervioso. El cribado de organos se hace igual que en cualquier otro estadio.' },
  'I': { titulo: 'Estadio I: adenopatias hiliares bilaterales', remision: 'del 60 al 90%', texto: 'Adenopatias hiliares bilaterales y simetricas con parenquima limpio. Es el hallazgo mas caracteristico y el que mas veces se descubre por casualidad. La remision espontanea es la regla, de modo que el paciente asintomatico se observa.' },
  'II': { titulo: 'Estadio II: adenopatias mas infiltrado', remision: 'del 40 al 70%', texto: 'Adenopatias hiliares junto con infiltrado parenquimatoso, tipicamente micronodulos de distribucion perilinfatica en campos medios y superiores. La remision espontanea sigue siendo frecuente, aunque menos que en el estadio I.' },
  'III': { titulo: 'Estadio III: infiltrado sin adenopatias', remision: 'del 10 al 20%', texto: 'El parenquima esta afectado y las adenopatias ya han regresado. La remision espontanea es poco frecuente y una proporcion importante de estos pacientes acaba necesitando tratamiento.' },
  'IV': { titulo: 'Estadio IV: fibrosis', remision: 'excepcional', texto: 'Fibrosis establecida con retraccion hiliar, bullas y distorsion de predominio en campos superiores. El da&#241;o es IRREVERSIBLE, y el objetivo del tratamiento pasa a ser frenar la progresion de la parte todavia inflamatoria, no revertir lo ya fibrosado. Buscar hipertension pulmonar asociada.' }
};

export const calculators = [
  {
    key: 'estadio-scadding', title: 'Estadio radiologico de Scadding', accent: '#8a4a7a',
    subtitle: 'Que dice el estadio sobre el pronostico, y que no dice sobre el tratamiento',
    incompleteMsg: 'Elige lo que muestra la radiografia de torax.',
    fields: [
      { name: 'adenopatias', id: 'sa-sc-ad', type: 'select', label: 'Adenopatias hiliares bilaterales', row: 'r1', options: [
        { v: 'si', t: 'Presentes' },
        { v: 'no', t: 'Ausentes' }
      ] },
      { name: 'infiltrado', id: 'sa-sc-in', type: 'select', label: 'Infiltrado parenquimatoso', row: 'r1', options: [
        { v: 'no', t: 'Ausente' },
        { v: 'si', t: 'Presente' },
        { v: 'fibrosis', t: 'Fibrosis establecida (retraccion, bullas, distorsion)' }
      ] },
      { name: 'sintomas', id: 'sa-sc-si', type: 'checkbox', label: 'El paciente tiene sintomas respiratorios o generales relevantes' },
      { type: 'note', text: 'Es una escala RADIOLOGICA y PRONOSTICA, no de gravedad ni de actividad. Los estadios no son fases obligatorias: la enfermedad puede empezar en cualquiera de ellos y no tiene que recorrerlos en orden. Y sobre todo, el estadio no indica por si solo si hay que tratar, decision que depende de los sintomas, de la funcion pulmonar y de la afectacion de organos de riesgo.' }
    ],
    compute(v) {
      const ade = v.adenopatias !== 'no';
      let e;
      if (v.infiltrado === 'fibrosis') e = 'IV';
      else if (v.infiltrado === 'si') e = ade ? 'II' : 'III';
      else e = ade ? 'I' : '0';
      return { e, datos: SCADDING[e], sintomas: !!v.sintomas };
    },
    format: r => {
      let s = `<strong style="color:#8a4a7a;">${r.datos.titulo}.</strong> ${r.datos.texto} `;
      if (r.datos.remision) s += `<br><strong>Remision espontanea: ${r.datos.remision}</strong> de los pacientes.`;
      if (r.e === 'IV') {
        s += '<br><strong style="color:#8c3a34;">En el estadio IV hay que buscar activamente hipertension pulmonar</strong>, que empeora mucho el pronostico, y valorar la remision precoz a una unidad de trasplante si hay deterioro funcional progresivo.';
      } else if (!r.sintomas) {
        s += '<br><strong style="color:#3f6b52;">Sin sintomas relevantes.</strong> Si ademas la funcion pulmonar esta conservada y no hay afectacion de organo de riesgo, corresponde OBSERVAR: la remision espontanea es frecuente y el corticoide tiene una toxicidad que no compensa cuando no hay nada que ganar.';
      } else {
        s += '<br><strong style="color:#8a6a1f;">Hay sintomas relevantes.</strong> Eso mueve la decision hacia tratar, pero antes hay que documentar la funcion pulmonar y comprobar que los sintomas se explican por la enfermedad: la FATIGA, que es de los sintomas mas limitantes, con frecuencia no responde a los corticoides y mejora mas con ejercicio y rehabilitacion.';
      }
      s += '<br><span style="opacity:.75;">Y sea cual sea el estadio, el cribado de organos es el mismo para todos: electrocardiograma, exploracion oftalmologica, calcio serico y urinario, funcion renal y funcion pulmonar con DLCO.</span>';
      return s;
    },
    fragment: r => `estadio ${r.e}${r.datos.remision ? `, remision espontanea ${r.datos.remision}` : ''}`
  },

  {
    key: 'tratar-sarcoidosis', title: 'Decision de tratar la sarcoidosis', accent: '#3f6b52',
    subtitle: 'Organos de riesgo, sintomas y deterioro funcional: el estadio no decide',
    incompleteMsg: 'Marca la afectacion de organos y responde a las preguntas sobre sintomas y funcion.',
    fields: [
      { name: 'cardiaca', id: 'sa-tr-car', type: 'checkbox', label: 'Afectacion CARDIACA (bloqueo, arritmia ventricular, disfuncion ventricular)', row: 'r1' },
      { name: 'neuro', id: 'sa-tr-neu', type: 'checkbox', label: 'Afectacion NEUROLOGICA (pares craneales, meningea, parenquimatosa, medular)', row: 'r1' },
      { name: 'ocular', id: 'sa-tr-ocu', type: 'checkbox', label: 'Afectacion OCULAR con amenaza para la vision', row: 'r2' },
      { name: 'renal', id: 'sa-tr-ren', type: 'checkbox', label: 'Afectacion RENAL o hipercalcemia significativa', row: 'r2' },
      { name: 'sintomas', id: 'sa-tr-sin', type: 'select', label: 'Sintomas atribuibles a la sarcoidosis', options: [
        { v: 'no', t: 'Asintomatico o con molestias que no limitan su vida' },
        { v: 'si', t: 'Sintomas que limitan su actividad habitual (disnea, tos, fatiga incapacitante)' }
      ] },
      { name: 'funcion', id: 'sa-tr-fun', type: 'select', label: 'Funcion pulmonar', options: [
        { v: 'estable', t: 'Conservada y estable frente al basal' },
        { v: 'deterioro', t: 'Deterioro documentado: caida de la capacidad vital del 10% o de la DLCO del 15%' },
        { v: 'sinbasal', t: 'No hay basal previo con el que comparar' }
      ] },
      { type: 'note', text: 'El estadio radiologico NO entra en esta decision. Tampoco la impresion que produzca la radiografia: la imagen cambia despacio y mal, y no sirve como medida de respuesta. Lo que decide es la afectacion de organos de riesgo, la repercusion real sobre la vida del paciente y el deterioro funcional documentado con pruebas seriadas.' }
    ],
    compute(v) {
      const organos = [];
      if (v.cardiaca) organos.push('cardiaca');
      if (v.neuro) organos.push('neurologica');
      if (v.ocular) organos.push('ocular con amenaza visual');
      if (v.renal) organos.push('renal o hipercalcemia significativa');
      const sintomas = v.sintomas === 'si';
      const deterioro = v.funcion === 'deterioro';
      const sinBasal = v.funcion === 'sinbasal';
      let veredicto;
      if (organos.length) veredicto = 'organo';
      else if (deterioro) veredicto = 'funcional';
      else if (sintomas) veredicto = 'sintomas';
      else if (sinBasal) veredicto = 'sin-basal';
      else veredicto = 'observar';
      return { veredicto, organos, sintomas, deterioro, sinBasal };
    },
    format: r => {
      const cola = '<br><span style="opacity:.75;">Con corticoides: profilaxis de osteoporosis y vigilancia de glucemia, presion arterial y peso desde el primer dia. Y antes de un antagonista del factor de necrosis tumoral, cribado obligatorio de tuberculosis latente.</span>';
      switch (r.veredicto) {
        case 'organo':
          return `<strong style="color:#8c3a34;">TRATAR, sin esperar a ver la evolucion.</strong> Hay afectacion de organo de riesgo: ${r.organos.join(', ')}. En estas localizaciones el da&#241;o que se establece no se recupera, de modo que no se aplica la logica de observar por si remite sola. Corticoides como primera linea, con un ahorrador (metotrexato el mas usado) a&#241;adido pronto porque el tratamiento va a ser prolongado, y escalada a un antagonista del factor de necrosis tumoral en la enfermedad refractaria.` + cola;
        case 'funcional':
          return '<strong style="color:#8a6a1f;">TRATAR.</strong> Hay deterioro funcional documentado frente al basal, que es el criterio objetivo de progresion pulmonar. Corticoides orales con pauta descendente, y ahorrador si no se puede bajar la dosis o su toxicidad resulta inaceptable. La respuesta se sigue con FUNCION PULMONAR seriada, no con la radiografia.' + cola;
        case 'sintomas':
          return '<strong style="color:#8a6a1f;">Valorar tratamiento por SINTOMAS que limitan la vida del paciente</strong>, con la funcion pulmonar estable. Antes de empezar, dos comprobaciones: que los sintomas se explican realmente por la sarcoidosis y no por otra cosa, y que se ha valorado la FATIGA por separado, porque es de los sintomas mas limitantes, responde mal a los corticoides y mejora mas con ejercicio y rehabilitacion que con escalar la inmunosupresion.' + cola;
        case 'sin-basal':
          return '<strong style="color:#3d5a73;">Falta el dato que mas ayuda: no hay funcion pulmonar basal con la que comparar.</strong> Sin organo de riesgo ni sintomas limitantes, lo que corresponde es obtener AHORA una funcion pulmonar completa con DLCO y repetirla en unos meses. Esa comparacion es la que permitira decidir, y es la razon por la que la funcion pulmonar forma parte del cribado inicial de todos los pacientes.';
        default:
          return '<strong style="color:#3f6b52;">OBSERVAR.</strong> Paciente asintomatico o con molestias que no limitan su vida, con funcion pulmonar conservada y estable y sin afectacion de organo de riesgo. La remision espontanea es frecuente y los corticoides tienen una toxicidad que no compensa cuando no hay nada que ganar. Control clinico y funcional periodico durante al menos 3 a&#241;os, que es cuando ocurre la mayoria de las recaidas, y repetir el cribado de organos si aparece cualquier sintoma nuevo.';
      }
    },
    fragment: r => {
      const m = { organo: 'tratar: organo de riesgo afectado', funcional: 'tratar: deterioro funcional documentado', sintomas: 'valorar tratamiento por sintomas', 'sin-basal': 'obtener funcion pulmonar basal', observar: 'observar sin tratar' };
      return m[r.veredicto];
    }
  },

  {
    key: 'hipercalcemia-sarcoidosis', title: 'Calcio y vitamina D en la sarcoidosis', accent: '#8a6a1f',
    subtitle: 'El patron que distingue esta hipercalcemia de las demas',
    incompleteMsg: 'Introduce el calcio serico. A&#241;ade albumina, parathormona y calcio urinario para completar la valoracion.',
    fields: [
      { name: 'ca', id: 'sa-hc-ca', type: 'number', step: '0.1', label: 'Calcio serico total (mg/dL)', placeholder: 'ej. 11.4', row: 'r1' },
      { name: 'alb', id: 'sa-hc-alb', type: 'number', step: '0.1', required: false, label: 'Albumina (g/dL, para corregir)', placeholder: 'ej. 3.4', row: 'r1' },
      { name: 'pth', id: 'sa-hc-pth', type: 'select', label: 'Parathormona', row: 'r2', options: [
        { v: '', t: 'No disponible' },
        { v: 'sup', t: 'Suprimida o en el limite bajo' },
        { v: 'norm', t: 'Normal' },
        { v: 'alta', t: 'Elevada' }
      ] },
      { name: 'cau', id: 'sa-hc-cau', type: 'number', step: '1', required: false, label: 'Calcio en orina de 24 horas (mg/24 h)', placeholder: 'ej. 380', row: 'r2' },
      { name: 'supl', id: 'sa-hc-su', type: 'checkbox', label: 'Toma suplementos de vitamina D o de calcio', row: 'r3' },
      { name: 'litiasis', id: 'sa-hc-li', type: 'checkbox', label: 'Litiasis renal, nefrocalcinosis o deterioro de la funcion renal', row: 'r3' },
      { type: 'note', text: 'Los macrofagos del granuloma producen 1,25-dihidroxivitamina D sin el control de la parathormona ni del calcio. El resultado es hipercalciuria antes que hipercalcemia, y por eso pedir solo el calcio serico deja escapar la mayoria de los casos. Calcio corregido = calcio total + 0.8 por (4 menos albumina).' }
    ],
    compute(v) {
      if (v.ca == null) return null;
      if (!(v.ca > 4 && v.ca < 20)) return { invalido: true };
      if (v.alb != null && !(v.alb > 0.5 && v.alb < 7)) return { invalido: true };
      if (v.cau != null && !(v.cau >= 0 && v.cau <= 3000)) return { invalido: true };
      const corr = v.alb != null ? v.ca + 0.8 * (4 - v.alb) : v.ca;
      const hiperca = corr > 10.5;
      const grave = corr >= 14;
      const hipercalciuria = v.cau != null ? v.cau > 300 : null;
      const patron = v.pth === 'sup' ? 'compatible' : (v.pth === 'alta' ? 'hiperpara' : (v.pth === 'norm' ? 'dudoso' : null));
      return { corr, ca: v.ca, alb: v.alb, hiperca, grave, hipercalciuria, cau: v.cau, patron, supl: !!v.supl, litiasis: !!v.litiasis };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: calcio de 4 a 20 mg/dL, albumina de 0.5 a 7 g/dL y calcio urinario de 0 a 3000 mg/24 h.';
      let s = `<strong>Calcio corregido de ${r.corr.toFixed(1)} mg/dL</strong>${r.alb != null ? ` (total ${r.ca} con albumina de ${r.alb})` : ' (sin corregir por albumina)'}. `;
      if (r.hiperca) {
        s += r.grave ? '<strong style="color:#8c3a34;">HIPERCALCEMIA GRAVE.</strong> ' : '<strong style="color:#8a6a1f;">Hipercalcemia.</strong> ';
      } else {
        s += '<span style="color:#3f6b52;">Calcio dentro de la normalidad.</span> ';
      }
      if (r.patron === 'compatible') {
        s += 'Con la parathormona SUPRIMIDA, el patron es el tipico de la sarcoidosis: produccion no regulada de 1,25-dihidroxivitamina D en los macrofagos del granuloma. Conviene confirmarlo midiendo la vitamina D activa, que estara elevada con una 25-hidroxivitamina D baja o normal.';
      } else if (r.patron === 'hiperpara') {
        s += '<strong style="color:#8c3a34;">Pero la parathormona esta ELEVADA</strong>, lo que NO encaja con el mecanismo de la sarcoidosis: apunta a un hiperparatiroidismo primario coincidente, que es una causa frecuente de hipercalcemia y que se trata de otra manera. Los corticoides no lo resolveran.';
      } else if (r.patron === 'dudoso') {
        s += 'Con la parathormona en rango normal en presencia de hipercalcemia, el patron no es concluyente: una parathormona "normal" con calcio alto es inapropiadamente alta y hay que valorar hiperparatiroidismo normocalcemico o de baja expresion. Medir vitamina D activa y repetir.';
      } else {
        s += 'Falta la parathormona, que es lo que permite separar este mecanismo del hiperparatiroidismo primario y de la hipercalcemia tumoral. Pedirla junto con 25-hidroxivitamina D y 1,25-dihidroxivitamina D.';
      }
      if (r.hipercalciuria === true) {
        s += `<br><strong style="color:#8a6a1f;">HIPERCALCIURIA (${r.cau} mg/24 h).</strong> Es mas frecuente que la hipercalcemia y aparece antes: produce litiasis y nefrocalcinosis de forma silente en pacientes cuyo calcio serico nunca llega a estar alto. Ecografia renal y dieta baja en calcio.`;
      } else if (r.hipercalciuria === false) {
        s += `<br><span style="opacity:.8;">Calcio urinario de ${r.cau} mg/24 h, dentro de lo normal. Conviene repetirlo en el seguimiento, porque puede aparecer con la actividad de la enfermedad.</span>`;
      } else {
        s += '<br><strong style="color:#8a6a1f;">Falta el calcio en orina de 24 horas</strong>, que es el dato que mas se olvida y el que detecta la mayoria de los casos: la hipercalciuria precede a la hipercalcemia.';
      }
      if (r.supl) s += '<br><strong style="color:#8c3a34;">RETIRAR los suplementos de vitamina D y de calcio.</strong> En estos pacientes pueden precipitar una hipercalcemia, porque aportan sustrato a una 1-alfa-hidroxilasa que ya no tiene freno. Es un punto que se pasa por alto con facilidad, porque suplementar vitamina D es una recomendacion habitual en otros contextos.';
      if (r.litiasis) s += '<br><strong style="color:#8c3a34;">Con litiasis, nefrocalcinosis o deterioro renal</strong>, la afectacion renal es por si sola una indicacion de tratamiento sistemico, con independencia del estadio radiologico y de la funcion pulmonar.';
      if (r.hiperca) s += '<br><strong>Manejo:</strong> hidratacion abundante, evitar la exposicion solar intensa y las tiazidas, y CORTICOIDES, que cortan la produccion de vitamina D activa en el granuloma y suelen normalizar el calcio en semanas. Los bisfosfonatos se reservan a la hipercalcemia grave, porque no atacan el mecanismo principal.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `calcio corregido ${r.corr.toFixed(1)} mg/dL${r.hiperca ? (r.grave ? ', hipercalcemia grave' : ', hipercalcemia') : ''}${r.hipercalciuria ? ' con hipercalciuria' : ''}`
  },

  {
    key: 'sospecha-cardiaca', title: 'Sospecha de sarcoidosis cardiaca', accent: '#8c3a34',
    subtitle: 'Cuando pasar del electrocardiograma a la imagen avanzada',
    incompleteMsg: 'Marca los hallazgos presentes. Si no hay ninguno, el resultado tambien es informativo.',
    fields: [
      { name: 'sincope', id: 'sa-ca-sin', type: 'checkbox', label: 'Sincope o presincope sin explicacion', row: 'r1' },
      { name: 'palpit', id: 'sa-ca-pal', type: 'checkbox', label: 'Palpitaciones sostenidas o taquicardia documentada', row: 'r1' },
      { name: 'bloqueo', id: 'sa-ca-blo', type: 'checkbox', label: 'Bloqueo auriculoventricular de cualquier grado o bloqueo de rama nuevo', row: 'r2' },
      { name: 'tv', id: 'sa-ca-tv', type: 'checkbox', label: 'Extrasistolia ventricular frecuente o taquicardia ventricular', row: 'r2' },
      { name: 'eco', id: 'sa-ca-eco', type: 'checkbox', label: 'Alteracion ecocardiografica sin explicacion (disfuncion, alteracion segmentaria, adelgazamiento septal)', row: 'r3' },
      { name: 'ic', id: 'sa-ca-ic', type: 'checkbox', label: 'Insuficiencia cardiaca sin causa identificada', row: 'r3' },
      { type: 'note', text: 'La afectacion cardiaca es una de las principales causas de muerte en la sarcoidosis y con frecuencia permanece silente hasta el primer evento. Por eso se hace ELECTROCARDIOGRAMA a todos los pacientes al diagnostico. Un electrocardiograma normal reduce la probabilidad pero no la descarta si hay sintomas, y la biopsia endomiocardica rinde poco porque la infiltracion es parcheada.' }
    ],
    compute(v) {
      const claves = [
        ['sincope', 'sincope o presincope sin explicacion'],
        ['palpit', 'palpitaciones sostenidas'],
        ['bloqueo', 'bloqueo auriculoventricular o de rama nuevo'],
        ['tv', 'extrasistolia ventricular frecuente o taquicardia ventricular'],
        ['eco', 'alteracion ecocardiografica sin explicacion'],
        ['ic', 'insuficiencia cardiaca sin causa identificada']
      ];
      const presentes = claves.filter(([k]) => v[k]).map(([, t]) => t);
      const alarma = !!(v.bloqueo || v.tv || v.sincope);
      return { presentes, n: presentes.length, alarma };
    },
    format: r => {
      if (r.n === 0) {
        return '<strong style="color:#3f6b52;">Sin datos de alarma cardiaca en este momento.</strong> No procede imagen avanzada del corazon de entrada. Pero el electrocardiograma se repite en el seguimiento, y cualquier sintoma nuevo (sincope, palpitaciones, disnea desproporcionada) obliga a reevaluar: la afectacion cardiaca puede aparecer en cualquier momento de la evolucion y con frecuencia debuta directamente como un evento arritmico.';
      }
      let s = `<strong style="color:#8c3a34;">Hay ${r.n} dato${r.n > 1 ? 's' : ''} que obliga${r.n > 1 ? 'n' : ''} a estudiar el corazon</strong>: ${r.presentes.join('; ')}. `;
      s += 'Corresponde <strong>RESONANCIA CARDIACA con realce tardio de gadolinio</strong>, que busca un patron parcheado (tipicamente en tabique basal y pared lateral) que no sigue territorio coronario, o <strong>tomografia por emision de positrones</strong> con preparacion dietetica especifica para suprimir la captacion miocardica fisiologica, que valora la inflamacion ACTIVA y sirve para seguir la respuesta.';
      if (r.alarma) {
        s += '<br><strong style="color:#8c3a34;">Y ademas hay un dato de riesgo arritmico inmediato.</strong> Contactar con cardiologia y con la unidad de arritmias SIN demora: valorar monitorizacion, marcapasos si hay bloqueo avanzado y desfibrilador, cuya indicacion aqui es mas amplia que en otras miocardiopatias porque el riesgo de arritmia ventricular es alto incluso con funcion sistolica conservada. Un sincope en un paciente con sarcoidosis no se atribuye a causa vasovagal sin haber estudiado el corazon.';
      }
      s += '<br>Si se confirma, la afectacion cardiaca es una indicacion CLARA de tratar: corticoides sin esperar, porque pueden mejorar la conduccion y la funcion ventricular si se inician antes de que la fibrosis se establezca, con un ahorrador a&#241;adido pronto.';
      s += '<br><span style="opacity:.75;">La biopsia endomiocardica solo se plantea si hace falta confirmacion histologica y no hay otro organo accesible: su rendimiento es bajo porque la infiltracion es parcheada y la aguja puede pasar entre las lesiones.</span>';
      return s;
    },
    fragment: r => r.n === 0 ? 'sin datos de alarma cardiaca' : `${r.n} dato${r.n > 1 ? 's' : ''} de alarma: imagen cardiaca avanzada${r.alarma ? ' y valoracion urgente' : ''}`
  }
];
