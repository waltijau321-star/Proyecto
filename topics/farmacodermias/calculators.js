// topics/farmacodermias/calculators.js - SCORTEN con clasificacion por superficie, banderas de
// gravedad, cronologia del farmaco y soporte en la eritrodermia.
// Fuentes: guias latinoamericanas de SJS y NET (Murillo-Casas AD, et al. World Allergy Organ J
// 2025;18(4):101046), Hoetzenecker W, et al. Semin Immunopathol 2016, y Tso S, et al. Clin Exp
// Dermatol 2021;46(6):1001.

export const calculators = [
  {
    key: 'scorten', title: 'SCORTEN y superficie despegada', accent: '#8c2e3a',
    subtitle: 'Clasifica el espectro y estima la mortalidad',
    incompleteMsg: 'Introduce la superficie despegada.',
    fields: [
      { name: 'bsa', id: 'fd-bsa', type: 'number', step: '1', label: 'Superficie corporal DESPEGADA o despegable (%)', placeholder: 'ej. 18' },
      { type: 'note', text: 'Solo cuenta la piel despegada o que se despega al rozarla, <strong>no el eritema</strong>: contar el eritema sobrestima la gravedad y es el error mas comun. Se calcula con la regla de los nueves de Wallace o, mejor, con el metodo de Lund-Browder.' },
      { name: 'edad', id: 'fd-e', type: 'checkbox', label: 'Edad de 40 a&#241;os o mas' },
      { name: 'neo', id: 'fd-n', type: 'checkbox', label: 'Neoplasia asociada' },
      { name: 'fc', id: 'fd-fc', type: 'checkbox', label: 'Frecuencia cardiaca de 120 por minuto o mas' },
      { name: 'urea', id: 'fd-u', type: 'checkbox', label: 'Urea serica elevada' },
      { name: 'bicarb', id: 'fd-b', type: 'checkbox', label: 'Bicarbonato serico bajo' },
      { name: 'gluc', id: 'fd-g', type: 'checkbox', label: 'Glucemia elevada' },
      { name: 'dia3', id: 'fd-d3', type: 'checkbox', label: 'Se esta calculando al tercer dia de ingreso' }
    ],
    compute(v) {
      if (v.bsa === null) return null;
      if (v.bsa < 0 || v.bsa > 100) return { invalido: true };
      let dx;
      if (v.bsa < 10) dx = 'sindrome de Stevens-Johnson';
      else if (v.bsa < 30) dx = 'sindrome de solapamiento';
      else dx = 'necrolisis epidermica toxica';
      const items = [
        ['edad de 40 o mas', v.edad], ['neoplasia', v.neo], ['taquicardia de 120 o mas', v.fc],
        ['superficie despegada mayor del 10%', v.bsa > 10], ['urea elevada', v.urea],
        ['bicarbonato bajo', v.bicarb], ['glucemia elevada', v.gluc]
      ];
      const presentes = items.filter(i => i[1]).map(i => i[0]);
      const s = presentes.length;
      let mort;
      if (s <= 1) mort = '3.2%';
      else if (s === 2) mort = '12.1%';
      else if (s === 3) mort = '35.3%';
      else if (s === 4) mort = '58.3%';
      else mort = 'mas del 90%';
      return { bsa: v.bsa, dx, s, mort, presentes, dia3: !!v.dia3, grave: s >= 3 };
    },
    format(r) {
      if (r.invalido) return 'La superficie despegada va de <strong>0 a 100%</strong>. Revisa el valor.';
      let s = `<strong>Superficie despegada ${r.bsa}%: ${r.dx}.</strong>`;
      s += `<br><strong>SCORTEN ${r.s} / 7. Mortalidad estimada ${r.mort}.</strong>`;
      if (r.presentes.length) s += `<br><span style="opacity:.85;">Suman: ${r.presentes.join(', ')}.</span>`;
      if (r.grave) {
        s += '<br><strong style="color:#8c3a34;">Traslado a unidad de quemados o de criticos, y que sea PRECOZ,</strong> no cuando el paciente ya este inestable. Y valoracion oftalmologica desde el principio: las secuelas oculares son la complicacion cronica mas incapacitante y en buena parte se pueden evitar.';
      }
      if (!r.dia3) {
        s += '<br><span style="opacity:.85;">El SCORTEN se calcula en las primeras 24 horas, pero conviene <strong>repetirlo al tercer dia</strong>, porque asi predice mejor.</span>';
      }
      s += '<br><span style="opacity:.75;">La escala estima el pronostico y orienta el nivel de cuidados, pero no decide el tratamiento. Lo que cambia la supervivencia es el soporte: retirada del farmaco, temperatura, volumen, nutricion, analgesia, curas y busqueda activa de infeccion, porque la causa principal de muerte es la SEPSIS.</span>';
      return s;
    },
    fragment: r => (r.invalido ? 'valores no validos' : `${r.dx} con ${r.bsa}% despegado, SCORTEN ${r.s}/7 (mortalidad estimada ${r.mort})`)
  },

  {
    key: 'banderas-farmaco', title: 'Banderas de gravedad', accent: '#7a3a6b',
    subtitle: 'Las seis que separan lo benigno de lo grave',
    fields: [
      { type: 'note', text: 'Se comprueban a pie de cama, sin ninguna prueba. Ninguna bandera hace muy probable un exantema benigno; una sola obliga a replantear el nivel de cuidados.' },
      { name: 'fiebre', id: 'fd-f1', type: 'checkbox', label: 'Fiebre alta' },
      { name: 'mucosas', id: 'fd-f2', type: 'checkbox', label: 'Afectacion de mucosas (boca, ojos, genitales)' },
      { name: 'dolor', id: 'fd-f3', type: 'checkbox', label: 'La piel DUELE, mas alla del picor' },
      { name: 'edema', id: 'fd-f4', type: 'checkbox', label: 'Edema facial' },
      { name: 'ampollas', id: 'fd-f5', type: 'checkbox', label: 'Ampollas o signo de Nikolsky' },
      { name: 'analitica', id: 'fd-f6', type: 'checkbox', label: 'Alteracion analitica (eosinofilia, linfocitos atipicos, transaminasas o creatinina altas)' },
      { type: 'note', text: 'Y dos datos que no son banderas pero que alarman igual:' },
      { name: 'pustulas', id: 'fd-f7', type: 'checkbox', label: 'Pustulas peque&#241;as no foliculares diseminadas' },
      { name: 'progresa', id: 'fd-f8', type: 'checkbox', label: 'Progresa pese a haber retirado el farmaco' }
    ],
    compute(v) {
      const banderas = [
        ['fiebre', v.fiebre], ['mucosas', v.mucosas], ['dolor cutaneo', v.dolor],
        ['edema facial', v.edema], ['ampollas o Nikolsky', v.ampollas], ['alteracion analitica', v.analitica]
      ];
      const presentes = banderas.filter(b => b[1]).map(b => b[0]);
      const sospechas = [];
      if (v.ampollas || v.dolor || (v.mucosas && v.fiebre)) sospechas.push('Stevens-Johnson o necrolisis epidermica');
      if (v.edema && v.analitica) sospechas.push('DRESS');
      if (v.pustulas && v.fiebre) sospechas.push('pustulosis exantematica generalizada aguda');
      return {
        n: presentes.length, presentes, sospechas,
        pustulas: !!v.pustulas, progresa: !!v.progresa,
        limpio: presentes.length === 0 && !v.pustulas && !v.progresa
      };
    },
    format(r) {
      if (r.limpio) {
        return '<strong style="color:#3f6b52;">Ninguna bandera de gravedad.</strong> La probabilidad de que sea un exantema maculopapular benigno es alta: retirar el farmaco sospechoso, tratar el picor y vigilar. Conviene repetir esta comprobacion a diario mientras el paciente este ingresado, porque un exantema aparentemente banal puede ser el primer dia de algo peor.';
      }
      let s = `<strong style="color:#8c3a34;">${r.n} de 6 banderas de gravedad.</strong>`;
      if (r.presentes.length) s += `<br><span style="opacity:.85;">Presentes: ${r.presentes.join(', ')}.</span>`;
      if (r.sospechas.length) {
        s += `<br><strong>El patron encaja con: ${r.sospechas.join('; ')}.</strong>`;
      } else if (r.pustulas) {
        s += '<br><strong>Hay pustulas diseminadas:</strong> pensar en pustulosis exantematica generalizada aguda, y cultivar el pus para confirmar que es esteril.';
      }
      if (r.progresa) {
        s += '<br><strong style="color:#8c3a34;">Progresa pese a retirar el farmaco.</strong> Eso no descarta el origen farmacologico: la necrolisis epidermica sigue extendiendose dias despues de la retirada, y el DRESS puede empeorar despues. No es motivo para reintroducir nada.';
      }
      s += '<br><span style="opacity:.75;">Antes de retirar ningun farmaco, escribe la <strong>cronologia completa</strong> con las fechas de inicio de todos: despues esa informacion se pierde y sin ella no se puede se&#241;alar al culpable.</span>';
      return s;
    },
    fragment(r) {
      if (r.limpio) return 'sin banderas de gravedad';
      return `${r.n}/6 banderas de gravedad` + (r.sospechas.length ? `, compatible con ${r.sospechas[0]}` : '');
    }
  },

  {
    key: 'cronologia-farmaco', title: 'Cronologia: &#191;encaja el farmaco?', accent: '#3d5a73',
    subtitle: 'Cruza el tipo de reaccion con los dias desde que empezo',
    incompleteMsg: 'Elige el tipo de reaccion e introduce los dias.',
    fields: [
      { name: 'tipo', id: 'fd-t', type: 'select', label: 'Tipo de reaccion', options: [
        { value: '', label: 'Elegir...' },
        { value: 'urticaria', label: 'Urticaria o anafilaxia' },
        { value: 'agep', label: 'Pustulosis exantematica generalizada aguda' },
        { value: 'mpe', label: 'Exantema maculopapular' },
        { value: 'sjs', label: 'Stevens-Johnson o necrolisis epidermica' },
        { value: 'dress', label: 'DRESS' }
      ] },
      { name: 'dias', id: 'fd-d', type: 'number', step: '1', label: 'Dias desde que se inicio ESTE farmaco', placeholder: 'ej. 21' },
      { name: 'previa', id: 'fd-p', type: 'checkbox', label: 'Ya habia tomado este farmaco antes' },
      { type: 'note', text: 'Con exposicion previa la latencia se acorta, porque los linfocitos de memoria ya estan. Por eso una reaccion muy rapida en alguien que ya tomo el farmaco no descarta el mecanismo inmunitario.' }
    ],
    compute(v) {
      if (!v.tipo || v.dias === null) return null;
      if (v.dias < 0 || v.dias > 3650) return { invalido: true };
      const V = {
        urticaria: { min: 0, max: 1, txt: 'minutos a horas' },
        agep: { min: 0, max: 4, txt: '1 a 2 dias' },
        mpe: { min: 4, max: 14, txt: '4 a 14 dias' },
        sjs: { min: 4, max: 28, txt: '1 a 3 semanas' },
        dress: { min: 14, max: 56, txt: '2 a 8 semanas' }
      }[v.tipo];
      const dentro = v.dias >= V.min && v.dias <= V.max;
      const pronto = v.dias < V.min;
      return { tipo: v.tipo, dias: v.dias, ventana: V.txt, dentro, pronto, previa: !!v.previa };
    },
    format(r) {
      if (r.invalido) return 'Los dias desde el inicio tienen que ser un numero razonable. Revisa el valor.';
      let s = `<strong>Ventana esperada para esta reaccion: ${r.ventana}. Este farmaco lleva ${r.dias} dia${r.dias === 1 ? '' : 's'}.</strong>`;
      if (r.dentro) {
        s += '<br><strong style="color:#8c3a34;">Encaja en la ventana:</strong> es un sospechoso serio. Si hay varios farmacos dentro de la ventana, el algoritmo ALDEN ayuda a ordenarlos por su notoriedad como causa conocida.';
      } else if (r.pronto) {
        s += '<br><span style="color:#3f6b52;">Demasiado pronto para esta reaccion</span> salvo que hubiera exposicion previa, que acorta la latencia. Con exposicion previa, sigue siendo sospechoso.';
      } else {
        s += '<br><span style="color:#8a6a1f;">Lleva mas tiempo del habitual para esta reaccion.</span> No lo descarta del todo, pero hace mas probable otro farmaco introducido despues.';
      }
      if (r.tipo === 'dress' && r.dias >= 14) {
        s += '<br><strong style="color:#5a4a8c;">Ojo con el error clasico del DRESS:</strong> se descarta el farmaco precisamente por llevar semanas tomandolo, cuando esa latencia larga es justo lo esperable en esta entidad.';
      }
      if (r.previa) {
        s += '<br><span style="opacity:.85;">Hubo exposicion previa, de modo que los linfocitos de memoria ya estaban y la latencia puede ser mucho mas corta de lo habitual.</span>';
      }
      s += '<br><span style="opacity:.75;">Esta herramienta valora UN farmaco. Hay que repetirla con cada uno de los sospechosos y compararlos entre si, no quedarse con el primero que encaje.</span>';
      return s;
    },
    fragment: r => (r.invalido ? 'valores no validos' : `${r.dias} dias frente a una ventana de ${r.ventana}: ${r.dentro ? 'encaja' : 'no encaja bien'}`)
  },

  {
    key: 'eritrodermia-soporte', title: 'Eritrodermia: que hay que corregir', accent: '#8c3a34',
    subtitle: 'Lo que falla cuando la piel deja de ser barrera',
    incompleteMsg: 'Introduce la temperatura y la albumina.',
    fields: [
      { name: 'temp', id: 'fd-tp', type: 'number', step: '0.1', label: 'Temperatura (grados centigrados)', placeholder: 'ej. 35.4', row: 'e1' },
      { name: 'alb', id: 'fd-al', type: 'number', step: '0.1', label: 'Albumina (g/dL)', placeholder: 'ej. 2.6', row: 'e1' },
      { name: 'psoriasis', id: 'fd-ps', type: 'checkbox', label: 'Hay datos de psoriasis previa (placas residuales, u&#241;as, historia)' },
      { name: 'farmaco', id: 'fd-fa', type: 'checkbox', label: 'Se ha iniciado algun farmaco nuevo en las ultimas semanas' },
      { name: 'adenopatias', id: 'fd-ad', type: 'checkbox', label: 'Adenopatias generalizadas o celulas atipicas en sangre' },
      { name: 'fiebre', id: 'fd-fi', type: 'checkbox', label: 'Fiebre o sospecha de infeccion' }
    ],
    compute(v) {
      if (v.temp === null || v.alb === null) return null;
      if (v.temp < 25 || v.temp > 45 || v.alb < 0 || v.alb > 7) return { invalido: true };
      const corregir = [];
      if (v.temp < 36) corregir.push('HIPOTERMIA: subir la temperatura ambiental y usar medidas de calentamiento');
      if (v.temp > 38) corregir.push('fiebre: buscar infeccion de forma activa antes de atribuirla a la propia eritrodermia');
      if (v.alb < 3) corregir.push('HIPOALBUMINEMIA por perdida cutanea de proteinas: soporte nutricional precoz');
      const causas = [];
      if (v.psoriasis) causas.push('psoriasis');
      if (v.farmaco) causas.push('farmaco');
      if (v.adenopatias) causas.push('posible linfoma cutaneo');
      return {
        temp: v.temp, alb: v.alb, corregir, causas,
        psoriasis: !!v.psoriasis, fiebre: !!v.fiebre,
        sinCausa: causas.length === 0
      };
    },
    format(r) {
      if (r.invalido) return 'Revisa los valores: temperatura de 25 a 45 grados y albumina de 0 a 7 g/dL.';
      let s = '<strong>La piel esta actuando como un organo en fallo.</strong> Lo que salva es el soporte, no el diagnostico de las primeras horas.';
      if (r.corregir.length) {
        s += '<br><strong style="color:#8c3a34;">Corregir ya:</strong><br>' + r.corregir.map(c => '&middot; ' + c).join('<br>');
      } else {
        s += '<br><span style="color:#3f6b52;">Temperatura y albumina en rango aceptable</span>, lo que no quita vigilancia: ambas se deterioran rapido en la eritrodermia.';
      }
      s += '<br><span style="opacity:.85;">En todos los casos: reposicion de liquidos y electrolitos, emolientes en abundancia, curas suaves, retirada de todo farmaco no imprescindible y busqueda ACTIVA de infeccion, que es la causa principal de mortalidad.</span>';
      if (r.causas.length) s += `<br><span style="opacity:.85;">Pistas de la causa: ${r.causas.join(', ')}.</span>`;
      if (r.psoriasis) {
        s += '<br><strong style="color:#8c3a34;">Cuidado con el corticoide sistemico:</strong> si la causa es una psoriasis, su retirada precipita un brote pustuloso. Conviene identificar la causa antes de instaurarlo.';
      }
      if (r.sinCausa) {
        s += '<br><span style="opacity:.85;">Sin pistas de la causa: biopsiar, y REPETIR la biopsia si sale inespecifica. Parte de las eritrodermias idiopaticas acaban revelandose como linfoma cutaneo a&#241;os despues.</span>';
      }
      return s;
    },
    fragment(r) {
      if (r.invalido) return 'valores no validos';
      return `eritrodermia con temperatura ${r.temp} y albumina ${r.alb}` + (r.corregir.length ? `; corregir ${r.corregir.length} punto${r.corregir.length === 1 ? '' : 's'}` : '');
    }
  }
];

export const combinedNote = {
  title: 'Nota combinada', accent: '#7a3a6b',
  subtitle: 'Rene banderas, cronologia, SCORTEN y soporte',
  items: ['banderas-farmaco', 'cronologia-farmaco', 'scorten', 'eritrodermia-soporte'],
  build(results, missing) {
    const partes = [];
    if (results['banderas-farmaco']) {
      const b = results['banderas-farmaco'];
      partes.push(b.limpio ? 'sin banderas de gravedad' : `${b.n}/6 banderas de gravedad`);
    }
    if (results['cronologia-farmaco'] && !results['cronologia-farmaco'].invalido) {
      const c = results['cronologia-farmaco'];
      partes.push(`cronologia de ${c.dias} dias frente a una ventana de ${c.ventana}, que ${c.dentro ? 'encaja' : 'no encaja bien'}`);
    }
    if (results.scorten && !results.scorten.invalido) {
      const s = results.scorten;
      partes.push(`${s.dx} con ${s.bsa}% despegado y SCORTEN ${s.s}/7`);
    }
    if (results['eritrodermia-soporte'] && !results['eritrodermia-soporte'].invalido) {
      const e = results['eritrodermia-soporte'];
      partes.push(`eritrodermia con ${e.corregir.length} punto${e.corregir.length === 1 ? '' : 's'} que corregir`);
    }
    let html = partes.length ? 'Farmacodermia: ' + partes.join('; ') + '.' : 'Completa las escalas seleccionadas.';
    if (missing.length) html += `<div style="margin-top:10px;color:#b0453d;font-size:12.5px;">Faltan datos en: ${missing.join(', ')}.</div>`;
    return html;
  }
};

export default { calculators, combinedNote };
