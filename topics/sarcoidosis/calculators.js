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
  '0': { titulo: 'Estadio 0: radiografía normal', remision: null, texto: 'La radiografía de tórax es normal, lo que NO significa que no haya sarcoidosis: la enfermedad puede estar en la piel, el ojo, el corazón, el hígado o el sistema nervioso. El cribado de órganos se hace igual que en cualquier otro estadio.' },
  'I': { titulo: 'Estadio I: adenopatías hiliares bilaterales', remision: 'del 60 al 90%', texto: 'Adenopatías hiliares bilaterales y simétricas con parénquima limpio. Es el hallazgo más característico y el que más veces se descubre por casualidad. La remisión espontánea es la regla, de modo que el paciente asintomático se observa.' },
  'II': { titulo: 'Estadio II: adenopatías más infiltrado', remision: 'del 40 al 70%', texto: 'Adenopatías hiliares junto con infiltrado parenquimatoso, típicamente micronodulos de distribución perilinfatica en campos medios y superiores. La remisión espontánea sigue siendo frecuente, aunque menos que en el estadio I.' },
  'III': { titulo: 'Estadio III: infiltrado sin adenopatías', remision: 'del 10 al 20%', texto: 'El parénquima esta afectado y las adenopatías ya han regresado. La remisión espontánea es poco frecuente y una proporción importante de estos pacientes acaba necesitando tratamiento.' },
  'IV': { titulo: 'Estadio IV: fibrosis', remision: 'excepcional', texto: 'Fibrosis establecida con retracción hiliar, bullas y distorsión de predominio en campos superiores. El daño es IRREVERSIBLE, y el objetivo del tratamiento pasa a ser frenar la progresión de la parte todavía inflamatoria, no revertir lo ya fibrosado. Buscar hipertensión pulmonar asociada.' }
};

export const calculators = [
  {
    key: 'estadio-scadding', title: 'Estadio radiológico de Scadding', accent: '#8a4a7a',
    subtitle: 'Que dice el estadio sobre el pronóstico, y que no dice sobre el tratamiento',
    incompleteMsg: 'Elige lo que muestra la radiografía de tórax.',
    fields: [
      { name: 'adenopatias', id: 'sa-sc-ad', type: 'select', label: 'Adenopatías hiliares bilaterales', row: 'r1', options: [
        { v: 'si', t: 'Presentes' },
        { v: 'no', t: 'Ausentes' }
      ] },
      { name: 'infiltrado', id: 'sa-sc-in', type: 'select', label: 'Infiltrado parenquimatoso', row: 'r1', options: [
        { v: 'no', t: 'Ausente' },
        { v: 'si', t: 'Presente' },
        { v: 'fibrosis', t: 'Fibrosis establecida (retracción, bullas, distorsión)' }
      ] },
      { name: 'sintomas', id: 'sa-sc-si', type: 'checkbox', label: 'El paciente tiene síntomas respiratorios o generales relevantes' },
      { type: 'note', text: 'Es una escala RADIOLÓGICA y PRONOSTICA, no de gravedad ni de actividad. Los estadios no son fases obligatorias: la enfermedad puede empezar en cualquiera de ellos y no tiene que recorrerlos en orden. Y sobre todo, el estadio no indica por si solo si hay que tratar, decisión que depende de los síntomas, de la función pulmonar y de la afectación de órganos de riesgo.' }
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
      if (r.datos.remision) s += `<br><strong>Remisión espontánea: ${r.datos.remision}</strong> de los pacientes.`;
      if (r.e === 'IV') {
        s += '<br><strong style="color:#8c3a34;">En el estadio IV hay que buscar activamente hipertensión pulmonar</strong>, que empeora mucho el pronóstico, y valorar la remisión precoz a una unidad de trasplante si hay deterioro funcional progresivo.';
      } else if (!r.sintomas) {
        s += '<br><strong style="color:#3f6b52;">Sin síntomas relevantes.</strong> Si además la función pulmonar esta conservada y no hay afectación de órgano de riesgo, corresponde OBSERVAR: la remisión espontánea es frecuente y el corticoide tiene una toxicidad que no compensa cuando no hay nada que ganar.';
      } else {
        s += '<br><strong style="color:#8a6a1f;">Hay síntomas relevantes.</strong> Eso mueve la decisión hacia tratar, pero antes hay que documentar la función pulmonar y comprobar que los síntomas se explican por la enfermedad: la FATIGA, que es de los síntomas más limitantes, con frecuencia no responde a los corticoides y mejora más con ejercicio y rehabilitación.';
      }
      s += '<br><span style="opacity:.75;">Y sea cual sea el estadio, el cribado de órganos es el mismo para todos: electrocardiograma, exploración oftalmológica, calcio sérico y urinario, función renal y función pulmonar con DLCO.</span>';
      return s;
    },
    fragment: r => `estadio ${r.e}${r.datos.remision ? `, remisión espontánea ${r.datos.remision}` : ''}`
  },

  {
    key: 'tratar-sarcoidosis', title: 'Decisión de tratar la sarcoidosis', accent: '#3f6b52',
    subtitle: 'Órganos de riesgo, síntomas y deterioro funcional: el estadio no decide',
    incompleteMsg: 'Marca la afectación de órganos y responde a las preguntas sobre síntomas y función.',
    fields: [
      { name: 'cardiaca', id: 'sa-tr-car', type: 'checkbox', label: 'Afectación CARDIACA (bloqueo, arritmia ventricular, disfunción ventricular)', row: 'r1' },
      { name: 'neuro', id: 'sa-tr-neu', type: 'checkbox', label: 'Afectación NEUROLÓGICA (pares craneales, meníngea, parenquimatosa, medular)', row: 'r1' },
      { name: 'ocular', id: 'sa-tr-ocu', type: 'checkbox', label: 'Afectación OCULAR con amenaza para la visión', row: 'r2' },
      { name: 'renal', id: 'sa-tr-ren', type: 'checkbox', label: 'Afectación RENAL o hipercalcemia significativa', row: 'r2' },
      { name: 'sintomas', id: 'sa-tr-sin', type: 'select', label: 'Síntomas atribuibles a la sarcoidosis', options: [
        { v: 'no', t: 'Asintomático o con molestias que no limitan su vida' },
        { v: 'si', t: 'Síntomas que limitan su actividad habitual (disnea, tos, fatiga incapacitante)' }
      ] },
      { name: 'funcion', id: 'sa-tr-fun', type: 'select', label: 'Función pulmonar', options: [
        { v: 'estable', t: 'Conservada y estable frente al basal' },
        { v: 'deterioro', t: 'Deterioro documentado: caída de la capacidad vital del 10% o de la DLCO del 15%' },
        { v: 'sinbasal', t: 'No hay basal previo con el que comparar' }
      ] },
      { type: 'note', text: 'El estadio radiológico NO entra en esta decisión. Tampoco la impresión que produzca la radiografía: la imagen cambia despacio y mal, y no sirve como medida de respuesta. Lo que decide es la afectación de órganos de riesgo, la repercusión real sobre la vida del paciente y el deterioro funcional documentado con pruebas seriadas.' }
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
      const cola = '<br><span style="opacity:.75;">Con corticoides: profilaxis de osteoporosis y vigilancia de glucemia, presión arterial y peso desde el primer dia. Y antes de un antagonista del factor de necrosis tumoral, cribado obligatorio de tuberculosis latente.</span>';
      switch (r.veredicto) {
        case 'organo':
          return `<strong style="color:#8c3a34;">TRATAR, sin esperar a ver la evolución.</strong> Hay afectación de órgano de riesgo: ${r.organos.join(', ')}. En estas localizaciones el daño que se establece no se recupera, de modo que no se aplica la lógica de observar por si remite sola. Corticoides como primera línea, con un ahorrador (metotrexato el más usado) añadido pronto porque el tratamiento va a ser prolongado, y escalada a un antagonista del factor de necrosis tumoral en la enfermedad refractaria.` + cola;
        case 'funcional':
          return '<strong style="color:#8a6a1f;">TRATAR.</strong> Hay deterioro funcional documentado frente al basal, que es el criterio objetivo de progresión pulmonar. Corticoides orales con pauta descendente, y ahorrador si no se puede bajar la dosis o su toxicidad resulta inaceptable. La respuesta se sigue con FUNCIÓN PULMONAR seriada, no con la radiografía.' + cola;
        case 'sintomas':
          return '<strong style="color:#8a6a1f;">Valorar tratamiento por SÍNTOMAS que limitan la vida del paciente</strong>, con la función pulmonar estable. Antes de empezar, dos comprobaciones: que los síntomas se explican realmente por la sarcoidosis y no por otra cosa, y que se ha valorado la FATIGA por separado, porque es de los síntomas más limitantes, responde mal a los corticoides y mejora más con ejercicio y rehabilitación que con escalar la inmunosupresión.' + cola;
        case 'sin-basal':
          return '<strong style="color:#3d5a73;">Falta el dato que más ayuda: no hay función pulmonar basal con la que comparar.</strong> Sin órgano de riesgo ni síntomas limitantes, lo que corresponde es obtener AHORA una función pulmonar completa con DLCO y repetirla en unos meses. Esa comparación es la que permitira decidir, y es la razón por la que la función pulmonar forma parte del cribado inicial de todos los pacientes.';
        default:
          return '<strong style="color:#3f6b52;">OBSERVAR.</strong> Paciente asintomático o con molestias que no limitan su vida, con función pulmonar conservada y estable y sin afectación de órgano de riesgo. La remisión espontánea es frecuente y los corticoides tienen una toxicidad que no compensa cuando no hay nada que ganar. Control clínico y funcional periódico durante al menos 3 años, que es cuando ocurre la mayoría de las recaídas, y repetir el cribado de órganos si aparece cualquier síntoma nuevo.';
      }
    },
    fragment: r => {
      const m = { organo: 'tratar: órgano de riesgo afectado', funcional: 'tratar: deterioro funcional documentado', sintomas: 'valorar tratamiento por síntomas', 'sin-basal': 'obtener función pulmonar basal', observar: 'observar sin tratar' };
      return m[r.veredicto];
    }
  },

  {
    key: 'hipercalcemia-sarcoidosis', title: 'Calcio y vitamina D en la sarcoidosis', accent: '#8a6a1f',
    subtitle: 'El patrón que distingue esta hipercalcemia de las demás',
    incompleteMsg: 'Introduce el calcio sérico. Añade albúmina, parathormona y calcio urinario para completar la valoración.',
    fields: [
      { name: 'ca', id: 'sa-hc-ca', type: 'number', step: '0.1', label: 'Calcio sérico total (mg/dL)', placeholder: 'ej. 11.4', row: 'r1' },
      { name: 'alb', id: 'sa-hc-alb', type: 'number', step: '0.1', required: false, label: 'Albúmina (g/dL, para corregir)', placeholder: 'ej. 3.4', row: 'r1' },
      { name: 'pth', id: 'sa-hc-pth', type: 'select', label: 'Parathormona', row: 'r2', options: [
        { v: '', t: 'No disponible' },
        { v: 'sup', t: 'Suprimida o en el limite bajo' },
        { v: 'norm', t: 'Normal' },
        { v: 'alta', t: 'Elevada' }
      ] },
      { name: 'cau', id: 'sa-hc-cau', type: 'number', step: '1', required: false, label: 'Calcio en orina de 24 horas (mg/24 h)', placeholder: 'ej. 380', row: 'r2' },
      { name: 'supl', id: 'sa-hc-su', type: 'checkbox', label: 'Toma suplementos de vitamina D o de calcio', row: 'r3' },
      { name: 'litiasis', id: 'sa-hc-li', type: 'checkbox', label: 'Litiasis renal, nefrocalcinosis o deterioro de la función renal', row: 'r3' },
      { type: 'note', text: 'Los macrófagos del granuloma producen 1,25-dihidroxivitamina D sin el control de la parathormona ni del calcio. El resultado es hipercalciuria antes que hipercalcemia, y por eso pedir solo el calcio sérico deja escapar la mayoría de los casos. Calcio corregido = calcio total + 0.8 por (4 menos albúmina).' }
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
      if (r.invalido) return 'Revisa los valores: calcio de 4 a 20 mg/dL, albúmina de 0.5 a 7 g/dL y calcio urinario de 0 a 3000 mg/24 h.';
      let s = `<strong>Calcio corregido de ${r.corr.toFixed(1)} mg/dL</strong>${r.alb != null ? ` (total ${r.ca} con albúmina de ${r.alb})` : ' (sin corregir por albúmina)'}. `;
      if (r.hiperca) {
        s += r.grave ? '<strong style="color:#8c3a34;">HIPERCALCEMIA GRAVE.</strong> ' : '<strong style="color:#8a6a1f;">Hipercalcemia.</strong> ';
      } else {
        s += '<span style="color:#3f6b52;">Calcio dentro de la normalidad.</span> ';
      }
      if (r.patron === 'compatible') {
        s += 'Con la parathormona SUPRIMIDA, el patrón es el típico de la sarcoidosis: producción no regulada de 1,25-dihidroxivitamina D en los macrófagos del granuloma. Conviene confirmarlo midiendo la vitamina D activa, que estara elevada con una 25-hidroxivitamina D baja o normal.';
      } else if (r.patron === 'hiperpara') {
        s += '<strong style="color:#8c3a34;">Pero la parathormona esta ELEVADA</strong>, lo que NO encaja con el mecanismo de la sarcoidosis: apunta a un hiperparatiroidismo primario coincidente, que es una causa frecuente de hipercalcemia y que se trata de otra manera. Los corticoides no lo resolveran.';
      } else if (r.patron === 'dudoso') {
        s += 'Con la parathormona en rango normal en presencia de hipercalcemia, el patrón no es concluyente: una parathormona "normal" con calcio alto es inapropiadamente alta y hay que valorar hiperparatiroidismo normocalcemico o de baja expresión. Medir vitamina D activa y repetir.';
      } else {
        s += 'Falta la parathormona, que es lo que permite separar este mecanismo del hiperparatiroidismo primario y de la hipercalcemia tumoral. Pedirla junto con 25-hidroxivitamina D y 1,25-dihidroxivitamina D.';
      }
      if (r.hipercalciuria === true) {
        s += `<br><strong style="color:#8a6a1f;">HIPERCALCIURIA (${r.cau} mg/24 h).</strong> Es más frecuente que la hipercalcemia y aparece antes: produce litiasis y nefrocalcinosis de forma silente en pacientes cuyo calcio sérico nunca llega a estar alto. Ecografía renal y dieta baja en calcio.`;
      } else if (r.hipercalciuria === false) {
        s += `<br><span style="opacity:.8;">Calcio urinario de ${r.cau} mg/24 h, dentro de lo normal. Conviene repetirlo en el seguimiento, porque puede aparecer con la actividad de la enfermedad.</span>`;
      } else {
        s += '<br><strong style="color:#8a6a1f;">Falta el calcio en orina de 24 horas</strong>, que es el dato que más se olvida y el que detecta la mayoría de los casos: la hipercalciuria precede a la hipercalcemia.';
      }
      if (r.supl) s += '<br><strong style="color:#8c3a34;">RETIRAR los suplementos de vitamina D y de calcio.</strong> En estos pacientes pueden precipitar una hipercalcemia, porque aportan sustrato a una 1-alfa-hidroxilasa que ya no tiene freno. Es un punto que se pasa por alto con facilidad, porque suplementar vitamina D es una recomendación habitual en otros contextos.';
      if (r.litiasis) s += '<br><strong style="color:#8c3a34;">Con litiasis, nefrocalcinosis o deterioro renal</strong>, la afectación renal es por si sola una indicación de tratamiento sistémico, con independencia del estadio radiológico y de la función pulmonar.';
      if (r.hiperca) s += '<br><strong>Manejo:</strong> hidratación abundante, evitar la exposición solar intensa y las tiazidas, y CORTICOIDES, que cortan la producción de vitamina D activa en el granuloma y suelen normalizar el calcio en semanas. Los bisfosfonatos se reservan a la hipercalcemia grave, porque no atacan el mecanismo principal.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `calcio corregido ${r.corr.toFixed(1)} mg/dL${r.hiperca ? (r.grave ? ', hipercalcemia grave' : ', hipercalcemia') : ''}${r.hipercalciuria ? ' con hipercalciuria' : ''}`
  },

  {
    key: 'sospecha-cardiaca', title: 'Sospecha de sarcoidosis cardiaca', accent: '#8c3a34',
    subtitle: 'Cuando pasar del electrocardiograma a la imagen avanzada',
    incompleteMsg: 'Marca los hallazgos presentes. Si no hay ninguno, el resultado también es informativo.',
    fields: [
      { name: 'sincope', id: 'sa-ca-sin', type: 'checkbox', label: 'Síncope o presíncope sin explicación', row: 'r1' },
      { name: 'palpit', id: 'sa-ca-pal', type: 'checkbox', label: 'Palpitaciones sostenidas o taquicardia documentada', row: 'r1' },
      { name: 'bloqueo', id: 'sa-ca-blo', type: 'checkbox', label: 'Bloqueo auriculoventricular de cualquier grado o bloqueo de rama nuevo', row: 'r2' },
      { name: 'tv', id: 'sa-ca-tv', type: 'checkbox', label: 'Extrasistolia ventricular frecuente o taquicardia ventricular', row: 'r2' },
      { name: 'eco', id: 'sa-ca-eco', type: 'checkbox', label: 'Alteración ecocardiográfica sin explicación (disfunción, alteración segmentaria, adelgazamiento septal)', row: 'r3' },
      { name: 'ic', id: 'sa-ca-ic', type: 'checkbox', label: 'Insuficiencia cardiaca sin causa identificada', row: 'r3' },
      { type: 'note', text: 'La afectación cardiaca es una de las principales causas de muerte en la sarcoidosis y con frecuencia permanece silente hasta el primer evento. Por eso se hace ELECTROCARDIOGRAMA a todos los pacientes al diagnóstico. Un electrocardiograma normal reduce la probabilidad pero no la descarta si hay síntomas, y la biopsia endomiocárdica rinde poco porque la infiltración es parcheada.' }
    ],
    compute(v) {
      const claves = [
        ['sincope', 'síncope o presíncope sin explicación'],
        ['palpit', 'palpitaciones sostenidas'],
        ['bloqueo', 'bloqueo auriculoventricular o de rama nuevo'],
        ['tv', 'extrasistolia ventricular frecuente o taquicardia ventricular'],
        ['eco', 'alteración ecocardiográfica sin explicación'],
        ['ic', 'insuficiencia cardiaca sin causa identificada']
      ];
      const presentes = claves.filter(([k]) => v[k]).map(([, t]) => t);
      const alarma = !!(v.bloqueo || v.tv || v.sincope);
      return { presentes, n: presentes.length, alarma };
    },
    format: r => {
      if (r.n === 0) {
        return '<strong style="color:#3f6b52;">Sin datos de alarma cardiaca en este momento.</strong> No procede imagen avanzada del corazón de entrada. Pero el electrocardiograma se repite en el seguimiento, y cualquier síntoma nuevo (síncope, palpitaciones, disnea desproporcionada) obliga a reevaluar: la afectación cardiaca puede aparecer en cualquier momento de la evolución y con frecuencia debuta directamente como un evento arrítmico.';
      }
      let s = `<strong style="color:#8c3a34;">Hay ${r.n} dato${r.n > 1 ? 's' : ''} que obliga${r.n > 1 ? 'n' : ''} a estudiar el corazón</strong>: ${r.presentes.join('; ')}. `;
      s += 'Corresponde <strong>RESONANCIA CARDIACA con realce tardío de gadolinio</strong>, que busca un patrón parcheado (típicamente en tabique basal y pared lateral) que no sigue territorio coronario, o <strong>tomografía por emision de positrones</strong> con preparación dietética específica para suprimir la captación miocárdica fisiológica, que valora la inflamación ACTIVA y sirve para seguir la respuesta.';
      if (r.alarma) {
        s += '<br><strong style="color:#8c3a34;">Y además hay un dato de riesgo arrítmico inmediato.</strong> Contactar con cardiología y con la unidad de arritmias SIN demora: valorar monitorización, marcapasos si hay bloqueo avanzado y desfibrilador, cuya indicación aquí es más amplia que en otras miocardiopatías porque el riesgo de arritmia ventricular es alto incluso con función sistólica conservada. Un síncope en un paciente con sarcoidosis no se atribuye a causa vasovagal sin haber estudiado el corazón.';
      }
      s += '<br>Si se confirma, la afectación cardiaca es una indicación CLARA de tratar: corticoides sin esperar, porque pueden mejorar la conducción y la función ventricular si se inician antes de que la fibrosis se establezca, con un ahorrador añadido pronto.';
      s += '<br><span style="opacity:.75;">La biopsia endomiocárdica solo se plantea si hace falta confirmación histológica y no hay otro órgano accesible: su rendimiento es bajo porque la infiltración es parcheada y la aguja puede pasar entre las lesiones.</span>';
      return s;
    },
    fragment: r => r.n === 0 ? 'sin datos de alarma cardiaca' : `${r.n} dato${r.n > 1 ? 's' : ''} de alarma: imagen cardiaca avanzada${r.alarma ? ' y valoración urgente' : ''}`
  }
];
