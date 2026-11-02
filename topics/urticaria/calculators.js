// topics/urticaria/calculators.js - UAS7, test de control, escalon terapeutico y banderas rojas.
// Algoritmo y puntos de corte segun la guia internacional de urticaria (Zuberbier T, et al.
// Allergy 2026;81(8):2582-2632, doi:10.1111/all.70210).

const HABONES = [
  { value: '0', label: '0 &middot; Ninguno' },
  { value: '1', label: '1 &middot; Leve: menos de 20' },
  { value: '2', label: '2 &middot; Moderado: de 20 a 50' },
  { value: '3', label: '3 &middot; Intenso: más de 50' }
];
const PICOR = [
  { value: '0', label: '0 &middot; Nada' },
  { value: '1', label: '1 &middot; Leve, no molesta' },
  { value: '2', label: '2 &middot; Moderado, molesta' },
  { value: '3', label: '3 &middot; Intenso, impide dormir' }
];

const DIAS = ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7'];
const uasFields = [];
DIAS.forEach((d, i) => {
  uasFields.push({ name: 'h' + i, id: 'ur-h' + i, type: 'select', numeric: true, label: d + ': habones', row: 'd' + i, options: HABONES });
  uasFields.push({ name: 'p' + i, id: 'ur-p' + i, type: 'select', numeric: true, label: d + ': picor', row: 'd' + i, options: PICOR });
});

const UCT_OPC = (a, b, c, d, e) => [
  { value: '0', label: '0 &middot; ' + a },
  { value: '1', label: '1 &middot; ' + b },
  { value: '2', label: '2 &middot; ' + c },
  { value: '3', label: '3 &middot; ' + d },
  { value: '4', label: '4 &middot; ' + e }
];

export const calculators = [
  {
    key: 'uas7', title: 'UAS7', accent: '#b05a2e',
    subtitle: 'Actividad de la urticaria durante siete días &middot; 0 a 42',
    fields: [
      { type: 'note', text: 'Lo rellena el PACIENTE cada dia, no el médico en la consulta de memoria. Mide ACTIVIDAD (cuanta enfermedad hay ahora), no control.' },
      ...uasFields,
      { type: 'note', text: 'Ojo con su punto ciego: el UAS7 punt&uacute;a habones y picor, de modo que un paciente cuyo problema principal sea el ANGIOEDEMA puede tener una puntuación engañosamente baja.' }
    ],
    compute(v) {
      let total = 0;
      const porDia = [];
      for (let i = 0; i < 7; i++) {
        const d = v['h' + i] + v['p' + i];
        porDia.push(d);
        total += d;
      }
      let banda;
      if (total === 0) banda = 'libre de enfermedad';
      else if (total <= 6) banda = 'bien controlada';
      else if (total <= 15) banda = 'leve';
      else if (total <= 27) banda = 'moderada';
      else banda = 'grave';
      const peor = Math.max(...porDia);
      const conSintomas = porDia.filter(d => d > 0).length;
      return { total, banda, porDia, peor, conSintomas };
    },
    format(r) {
      let s = `<strong>UAS7 ${r.total} / 42: ${r.banda}.</strong>`;
      s += `<br><span style="opacity:.85;">Con síntomas ${r.conSintomas} de los 7 días; el peor dia sumo ${r.peor} de 6.</span>`;
      if (r.total === 0) {
        s += '<br><span style="color:#3f6b52;">Libre de enfermedad.</span> Si lleva meses así, es momento de intentar BAJAR el tratamiento: la urticaria crónica remite sola con el tiempo en la mayoría de los pacientes.';
      } else if (r.total <= 6) {
        s += '<br><span style="color:#3f6b52;">Bien controlada.</span> Mantener el escalón actual y seguir midiendo.';
      } else {
        s += '<br><strong style="color:#8c3a34;">Control insuficiente.</strong> Toca subir un escalón del algoritmo, no esperar más tiempo en el mismo.';
      }
      s += '<br><span style="opacity:.75;">Recuerda que actividad y control son cosas distintas: el UAS7 dice cuanta enfermedad hay, y el test de control dice si el tratamiento esta funcionando. Las dos hacen falta.</span>';
      return s;
    },
    fragment: r => `UAS7 ${r.total}/42 (${r.banda})`
  },

  {
    key: 'uct', title: 'Test de control de la urticaria', accent: '#3d5a73',
    subtitle: 'Cuatro preguntas sobre las últimas cuatro semanas &middot; 0 a 16',
    incompleteMsg: 'Responde las cuatro preguntas.',
    fields: [
      { type: 'note', text: 'Es retrospectivo y no necesita diario, lo que lo hace cómodo para la consulta. Mide CONTROL, es decir, si el tratamiento esta funcionando.' },
      { name: 'q1', id: 'ur-c1', type: 'select', numeric: true, label: 'En las últimas 4 semanas, ¿cuántos síntomas físicos ha tenido (picor, habones, hinchazón)?', options: UCT_OPC('Muchisimos', 'Muchos', 'Algunos', 'Pocos', 'Ninguno') },
      { name: 'q2', id: 'ur-c2', type: 'select', numeric: true, label: '¿Cuánto ha afectado a su calidad de vida?', options: UCT_OPC('Muchisimo', 'Mucho', 'Algo', 'Poco', 'Nada') },
      { name: 'q3', id: 'ur-c3', type: 'select', numeric: true, label: '¿Con que frecuencia el tratamiento no ha sido suficiente?', options: UCT_OPC('Muy a menudo', 'A menudo', 'A veces', 'Rara vez', 'Nunca') },
      { name: 'q4', id: 'ur-c4', type: 'select', numeric: true, label: 'En conjunto, ¿cómo de controlada ha estado su urticaria?', options: UCT_OPC('Nada controlada', 'Poco', 'Moderadamente', 'Bastante', 'Muy controlada') }
    ],
    compute(v) {
      const total = v.q1 + v.q2 + v.q3 + v.q4;
      const bajos = [];
      if (v.q1 <= 1) bajos.push('carga de síntomas');
      if (v.q2 <= 1) bajos.push('calidad de vida');
      if (v.q3 <= 1) bajos.push('insuficiencia del tratamiento');
      if (v.q4 <= 1) bajos.push('control global percibido');
      return { total, controlada: total >= 12, completo: total === 16, bajos };
    },
    format(r) {
      let s = `<strong>Test de control ${r.total} / 16.</strong>`;
      if (r.completo) {
        s += '<br><span style="color:#3f6b52;">Control COMPLETO,</span> que es el objetivo del tratamiento según la guía. Si se mantiene durante meses, plantear bajar escalón.';
      } else if (r.controlada) {
        s += '<br><span style="color:#3f6b52;">Enfermedad controlada</span> (12 o más). Mantener el escalón actual, aunque el objetivo declarado sigue siendo el control completo.';
      } else {
        s += '<br><strong style="color:#8c3a34;">Control insuficiente</strong> (por debajo de 12): subir un escalón del algoritmo.';
      }
      if (r.bajos.length) s += `<br><span style="opacity:.85;">Lo que más lastra: ${r.bajos.join(', ')}.</span>`;
      s += '<br><span style="opacity:.75;">Esta es la medida que decide si se sube o no. La impresión clínica en consulta sobrestima el control con frecuencia, sobre todo porque el paciente se acostumbra a vivir con síntomas y deja de mencionarlos.</span>';
      return s;
    },
    fragment: r => `test de control ${r.total}/16 (${r.controlada ? 'controlada' : 'no controlada'})`
  },

  {
    key: 'escalon-urticaria', title: 'Siguiente escalón del algoritmo', accent: '#7a4363',
    subtitle: 'Cruza el tratamiento actual con el control alcanzado',
    incompleteMsg: 'Elige el tratamiento actual y el tiempo que lleva con el.',
    fields: [
      { name: 'escalon', id: 'ur-e', type: 'select', label: 'Tratamiento actual', options: [
        { value: 'ninguno', label: 'Sin tratamiento' },
        { value: 'estandar', label: 'Antihistamínico de 2.a generación a dosis estándar' },
        { value: 'cuadruple', label: 'Antihistamínico de 2.a generación a dosis aumentada (hasta 4 veces)' },
        { value: 'omalizumab', label: 'Dosis aumentada + omalizumab' },
        { value: 'ciclosporina', label: 'Ciclosporina' },
        { value: 'primera', label: 'Antihistamínico de PRIMERA generación' }
      ] },
      { name: 'semanas', id: 'ur-s', type: 'number', step: '1', label: 'Semanas con el tratamiento actual', placeholder: 'ej. 4' },
      { name: 'controlada', id: 'ur-ok', type: 'checkbox', label: 'El test de control da 12 o más (controlada)' },
      { name: 'revisado', id: 'ur-rev', type: 'checkbox', label: 'Ya he descartado banderas rojas y otros diagnósticos' },
      { type: 'note', text: 'Con un antihistamínico, si no hay mejoría en una o dos semanas ya no va a haberla a esa dosis. Esperar más solo retrasa el escalón siguiente.' }
    ],
    compute(v) {
      if (!v.escalon || v.semanas === null) return null;
      if (v.semanas < 0 || v.semanas > 520) return { invalido: true };
      const orden = ['ninguno', 'estandar', 'cuadruple', 'omalizumab', 'ciclosporina'];
      const pronto = v.semanas < 2;
      let paso, aviso = null;
      if (v.escalon === 'primera') {
        paso = 'Cambiar a un antihistamínico de SEGUNDA generación a dosis estándar';
        aviso = 'primera';
      } else if (v.controlada) {
        paso = v.escalon === 'ninguno'
          ? 'Sin tratamiento y controlada: no hay nada que añadir'
          : 'Mantener el escalón actual';
      } else if (pronto && v.escalon !== 'ninguno') {
        paso = 'Esperar a completar 2 semanas antes de decidir';
      } else {
        const i = orden.indexOf(v.escalon);
        paso = [
          'Antihistamínico de 2.a generación a dosis estándar',
          'Subir la dosis del mismo antihistamínico hasta cuadruplicarla',
          'Añadir omalizumab (o dupilumab como opción)',
          'Valorar ciclosporina, fuera de ficha técnica y por su perfil de seguridad',
          'Revisar el DIAGNÓSTICO antes de seguir'
        ][i];
        if (i === 4) aviso = 'revisar';
      }
      return {
        paso, aviso, controlada: !!v.controlada, pronto,
        techo: v.escalon === 'ciclosporina' && !v.controlada,
        sinRevisar: !v.revisado && !v.controlada && (v.escalon === 'omalizumab' || v.escalon === 'ciclosporina')
      };
    },
    format(r) {
      if (r.invalido) return 'Las semanas de tratamiento tienen que ser un número razonable. Revisa el valor.';
      let s = `<strong>${r.paso}.</strong>`;
      if (r.aviso === 'primera') {
        s += '<br><strong style="color:#8c3a34;">Los antihistamínicos de primera generación se desaconsejan</strong> como primera línea: sedan, alteran el sueño REM y el rendimiento al dia siguiente, y se han descrito sobredosis mortales. Astemizol y terfenadina no deben usarse.';
      }
      if (r.pronto && !r.controlada) {
        s += '<br><span style="opacity:.85;">Lleva menos de dos semanas. Con un antihistamínico la mejoría aparece pronto o no aparece, pero conviene dar ese margen antes de subir.</span>';
      }
      if (r.sinRevisar) {
        s += '<br><strong style="color:#8a6a1f;">Antes de subir más, revisa el diagnóstico.</strong> Un paciente que no responde a dosis altas de antihistamínico ni a omalizumab puede no tener una urticaria: vasculitis urticarial, síndrome autoinflamatorio, penfigoide preampolloso o mastocitosis.';
      }
      if (r.techo) {
        s += '<br><strong style="color:#8c3a34;">Ya esta en el último escalón del algoritmo.</strong> Aquí lo que toca es reconsiderar el diagnóstico y derivar a una unidad especializada, no seguir subiendo dosis.';
      }
      s += '<br><span style="opacity:.75;">Dos reglas de la guía: subir la dosis del MISMO antihistamínico es preferible a mezclar moleculas distintas, y no se pasa de cuadruplicar, porque por encima de cuatro veces no se ha probado.</span>';
      return s;
    },
    fragment: r => (r.invalido ? 'valores no validos' : `siguiente paso: ${r.paso.toLowerCase()}`)
  },

  {
    key: 'banderas-urticaria', title: 'Banderas rojas', accent: '#8c3a34',
    subtitle: 'Lo que dice que no es una urticaria común',
    fields: [
      { type: 'note', text: 'Las tres primeras preguntas son sobre UNA lesión concreta, no sobre el brote. Un paciente con habones a diario durante meses sigue teniendo urticaria común si cada habón dura menos de un dia.' },
      { name: 'dura', id: 'ur-b1', type: 'checkbox', label: 'Un habón concreto dura MÁS de 24 horas en el mismo sitio' },
      { name: 'duele', id: 'ur-b2', type: 'checkbox', label: 'La lesión duele o escuece más de lo que pica' },
      { name: 'purpura', id: 'ur-b3', type: 'checkbox', label: 'Al resolverse deja púrpura o pigmentación' },
      { name: 'sistemico', id: 'ur-b4', type: 'checkbox', label: 'Fiebre, artralgias o reactantes altos de forma mantenida' },
      { name: 'sinHabones', id: 'ur-b5', type: 'checkbox', label: 'Angioedema SIN habones que no responde a antihistamínicos' },
      { name: 'ieca', id: 'ur-b6', type: 'checkbox', label: 'Toma un inhibidor de la enzima convertidora de angiotensina' },
      { name: 'anafilaxia', id: 'ur-b7', type: 'checkbox', label: 'Compromiso respiratorio, digestivo o hipotensión en los episodios' }
    ],
    compute(v) {
      const vasculitis = [v.dura, v.duele, v.purpura].filter(Boolean).length;
      return {
        vasculitis,
        sistemico: !!v.sistemico,
        bradicinina: !!v.sinHabones || !!v.ieca,
        soloIeca: !!v.ieca && !v.sinHabones,
        anafilaxia: !!v.anafilaxia,
        limpio: !v.dura && !v.duele && !v.purpura && !v.sistemico && !v.sinHabones && !v.ieca && !v.anafilaxia
      };
    },
    format(r) {
      if (r.limpio) {
        return '<strong style="color:#3f6b52;">Ninguna bandera roja.</strong> El cuadro encaja con una urticaria común: se puede seguir el algoritmo habitual. Conviene repetir estas preguntas en las revisiones, porque algunas de estas entidades se declaran con el tiempo.';
      }
      let s = '<strong style="color:#8c3a34;">Hay banderas rojas.</strong>';
      if (r.anafilaxia) {
        s += '<br><strong style="color:#8c3a34;">Prioridad absoluta: esto incluye episodios de ANAFILAXIA.</strong> Se trata con adrenalina intramuscular en el muslo, no con antihistamínico, y el paciente necesita un autoinyector y un plan escrito.';
      }
      if (r.vasculitis) {
        s += `<br><strong>Sospecha de vasculitis urticarial</strong> (${r.vasculitis} de los 3 rasgos del habón). Toca BIOPSIAR buscando vasculitis leucocitoclástica, y pedir complemento: un C3 y C4 bajos apuntan a la forma hipocomplementemica.`;
      }
      if (r.sistemico) {
        s += '<br><strong>Síntomas sistémicos mantenidos.</strong> Pensar en síndrome autoinflamatorio (activación del inflamasoma con interleucina 1) o en una infección de base. Una urticaria común no da fiebre ni artralgias.';
      }
      if (r.bradicinina) {
        s += r.soloIeca
          ? '<br><strong>Toma un inhibidor de la enzima convertidora.</strong> Puede producir angioedema tras años de tratamiento sin incidencias, y por eso se pasa por alto. Si ha tenido angioedema, se retira y NO se reintroduce.'
          : '<br><strong>Angioedema sin habones que no responde a antihistamínicos:</strong> sospechar mecanismo por BRADICININA. Pedir C4 y estudio del inhibidor de C1. No responde a antihistamínicos, corticoides ni adrenalina, y tiene tratamiento propio.';
      }
      s += '<br><span style="opacity:.75;">Lo que empeora el pronóstico de todas estas entidades es el retraso: el paciente pasa meses etiquetado de urticaria resistente mientras se le sube el antihistamínico.</span>';
      return s;
    },
    fragment(r) {
      if (r.limpio) return 'sin banderas rojas';
      const t = [];
      if (r.anafilaxia) t.push('anafilaxia');
      if (r.vasculitis) t.push('sospecha de vasculitis urticarial');
      if (r.sistemico) t.push('síntomas sistémicos');
      if (r.bradicinina) t.push('posible angioedema por bradicinina');
      return 'banderas rojas: ' + t.join(', ');
    }
  }
];

export const combinedNote = {
  title: 'Nota combinada', accent: '#b05a2e',
  subtitle: 'Rene actividad, control, escalón y banderas rojas',
  items: ['uas7', 'uct', 'escalon-urticaria', 'banderas-urticaria'],
  build(results, missing) {
    const partes = [];
    if (results.uas7) partes.push(`UAS7 ${results.uas7.total}/42, ${results.uas7.banda}`);
    if (results.uct) partes.push(`test de control ${results.uct.total}/16, ${results.uct.controlada ? 'controlada' : 'no controlada'}`);
    if (results['escalon-urticaria'] && !results['escalon-urticaria'].invalido) {
      partes.push(`siguiente paso: ${results['escalon-urticaria'].paso.toLowerCase()}`);
    }
    if (results['banderas-urticaria']) {
      const b = results['banderas-urticaria'];
      partes.push(b.limpio ? 'sin banderas rojas' : 'CON banderas rojas que obligan a replantear el diagnóstico');
    }
    let html = partes.length ? 'Urticaria: ' + partes.join('; ') + '.' : 'Completa las escalas seleccionadas.';
    if (missing.length) html += `<div style="margin-top:10px;color:#b0453d;font-size:12.5px;">Faltan datos en: ${missing.join(', ')}.</div>`;
    return html;
  }
};

export default { calculators, combinedNote };
