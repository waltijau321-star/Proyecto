// topics/ampollosas/calculators.js - Nivel de la ampolla, lectura de la inmunofluorescencia,
// BPDAI y comprobacion previa al rituximab.
// Fuentes: guias indias de penfigo (De D, et al. Indian Dermatol Online J 2024;16(1):3-24),
// S2k de penfigoide (Borradori L, et al. JEADV 2022) y Werth VP, et al. JEADV 2024;39(2):290-300.

export const calculators = [
  {
    key: 'nivel-ampolla', title: 'Nivel de la ampolla', accent: '#4a5a8c',
    subtitle: 'La pregunta que ordena todo el tema',
    incompleteMsg: 'Elige como es la ampolla.',
    fields: [
      { name: 'tension', id: 'am-t', type: 'select', label: 'La ampolla es...', options: [
        { value: '', label: 'Elegir...' },
        { value: 'flacida', label: 'Flacida, se rompe con facilidad' },
        { value: 'tensa', label: 'Tensa, aguanta intacta' },
        { value: 'norama', label: 'No se ven ampollas intactas, solo erosiones o excoriaciones' }
      ] },
      { name: 'nikolsky', id: 'am-n', type: 'checkbox', label: 'Signo de Nikolsky positivo (la piel sana se despega al frotar)' },
      { name: 'mucosas', id: 'am-m', type: 'checkbox', label: 'Hay afectacion de mucosas' },
      { name: 'primeroBoca', id: 'am-b', type: 'checkbox', label: 'Empezo por la boca, antes que por la piel' },
      { name: 'anciano', id: 'am-a', type: 'checkbox', label: 'Paciente mayor de 70 a&#241;os' },
      { name: 'prurito', id: 'am-p', type: 'checkbox', label: 'Prurito intenso, que domina el cuadro' },
      { name: 'simetrico', id: 'am-s', type: 'checkbox', label: 'Excoriaciones simetricas en codos, rodillas y nalgas' },
      { name: 'mucositis', id: 'am-mr', type: 'checkbox', label: 'Mucositis grave que no responde a nada' }
    ],
    compute(v) {
      if (!v.tension) return null;
      const pistas = [];
      let intra = 0, sub = 0;
      if (v.tension === 'flacida') { intra += 3; pistas.push('ampolla flacida'); }
      if (v.tension === 'tensa') { sub += 3; pistas.push('ampolla tensa'); }
      if (v.nikolsky) { intra += 2; pistas.push('Nikolsky positivo'); }
      if (v.primeroBoca) { intra += 2; pistas.push('debut oral'); }
      if (v.anciano) { sub += 1; pistas.push('edad avanzada'); }
      if (v.prurito) { sub += 1; pistas.push('prurito dominante'); }
      const nivel = intra > sub ? 'intraepidermica' : (sub > intra ? 'subepidermica' : 'indeterminada');
      let sospecha = null;
      if (v.mucositis) sospecha = 'paraneoplasico';
      else if (v.simetrico && v.prurito) sospecha = 'herpetiforme';
      else if (nivel === 'intraepidermica') sospecha = v.mucosas ? 'vulgar' : 'foliaceo';
      else if (nivel === 'subepidermica') sospecha = 'penfigoide';
      return { nivel, sospecha, pistas, preampolloso: v.tension === 'norama' && v.anciano && v.prurito };
    },
    format(r) {
      let s;
      if (r.nivel === 'intraepidermica') s = '<strong style="color:#8c3a34;">Los datos apuntan a una ampolla INTRAEPIDERMICA: penfigo.</strong>';
      else if (r.nivel === 'subepidermica') s = '<strong style="color:#5a4a8c;">Los datos apuntan a una ampolla SUBEPIDERMICA: penfigoide y sus parientes.</strong>';
      else s = '<strong style="color:#8a6a1f;">Los datos no separan bien el nivel.</strong>';
      if (r.pistas.length) s += `<br><span style="opacity:.85;">Pesan: ${r.pistas.join(', ')}.</span>`;
      const texto = {
        vulgar: 'Con afectacion de mucosas, la sospecha principal es <strong>penfigo vulgar</strong>: pide ELISA de desmogleina 1 y 3.',
        foliaceo: 'Sin afectacion de mucosas, cabe el <strong>penfigo foliaceo</strong>, que respeta las mucosas porque su diana es la desmogleina 1, que predomina en la piel.',
        penfigoide: 'La sospecha principal es <strong>penfigoide ampolloso</strong>: pide ELISA de BP180 y BP230.',
        herpetiforme: 'El patron de excoriaciones simetricas con prurito desproporcionado sugiere <strong>dermatitis herpetiforme</strong>: busca deposito GRANULAR de IgA en las papilas y pide serologia de celiaquia.',
        paraneoplasico: 'La mucositis grave y refractaria obliga a pensar en <strong>penfigo PARANEOPLASICO</strong>: pide inmunofluorescencia indirecta sobre epitelio de vejiga de rata y busca una neoplasia hematologica.'
      }[r.sospecha];
      if (texto) s += '<br>' + texto;
      if (r.preampolloso) {
        s += '<br><strong style="color:#5a4a8c;">Ojo con la fase preampollosa del penfigoide:</strong> en la mayoria de los casos empieza SIN ampollas, con prurito y lesiones eccematosas, urticariformes o nodulares, y esa fase puede durar de semanas a a&#241;os. Es la razon principal del retraso diagnostico. Antes, descarta escabiosis.';
      }
      s += '<br><span style="opacity:.75;">Decidas lo que decidas, la confirmacion es la misma: <strong>dos biopsias</strong>, una de lesion para histologia y otra de piel PERILESIONAL para inmunofluorescencia directa, y si es posible antes de empezar el corticoide.</span>';
      return s;
    },
    fragment: r => `ampolla de perfil ${r.nivel}${r.sospecha ? `, compatible con ${r.sospecha}` : ''}`
  },

  {
    key: 'inmunofluorescencia', title: 'Lectura de la inmunofluorescencia', accent: '#8a5a2e',
    subtitle: 'El patron del deposito es lo que diagnostica',
    incompleteMsg: 'Elige el patron observado.',
    fields: [
      { name: 'sitio', id: 'am-if-s', type: 'select', label: '&#191;De donde se tomo la muestra para la inmunofluorescencia directa?', options: [
        { value: '', label: 'Elegir...' },
        { value: 'peri', label: 'Piel PERILESIONAL sana' },
        { value: 'ampolla', label: 'De dentro de la ampolla' },
        { value: 'nose', label: 'No consta' }
      ] },
      { name: 'patron', id: 'am-if-p', type: 'select', label: 'Patron del deposito', options: [
        { value: '', label: 'Elegir...' },
        { value: 'red', label: 'En red o panal, entre los queratinocitos' },
        { value: 'lineal', label: 'Lineal, en la union dermoepidermica' },
        { value: 'granular', label: 'Granular de IgA, en las papilas dermicas' },
        { value: 'negativo', label: 'Sin deposito' }
      ] },
      { name: 'vejiga', id: 'am-if-v', type: 'checkbox', label: 'La indirecta se une a epitelio de vejiga de rata' },
      { name: 'corticoide', id: 'am-if-c', type: 'checkbox', label: 'El paciente llevaba corticoide cuando se tomo la muestra' }
    ],
    compute(v) {
      if (!v.sitio || !v.patron) return null;
      const dx = {
        red: 'penfigo', lineal: 'penfigoide ampolloso',
        granular: 'dermatitis herpetiforme', negativo: null
      }[v.patron];
      return {
        dx, patron: v.patron, sitio: v.sitio, vejiga: !!v.vejiga, corticoide: !!v.corticoide,
        malSitio: v.sitio === 'ampolla', sinConstar: v.sitio === 'nose'
      };
    },
    format(r) {
      let s;
      if (r.dx) s = `<strong>El patron corresponde a: ${r.dx}.</strong>`;
      else s = '<strong style="color:#8a6a1f;">Sin deposito: no confirma ninguna ampollosa autoinmune.</strong>';
      if (r.malSitio) {
        s += '<br><strong style="color:#8c3a34;">La muestra se tomo de DENTRO de la ampolla, y eso invalida el resultado.</strong> Ahi el tejido esta destruido y los inmunorreactantes degradados, de modo que un negativo no significa nada. Hay que repetir la biopsia de piel PERILESIONAL sana.';
      } else if (r.sinConstar) {
        s += '<br><span style="color:#8a6a1f;">No consta de donde se tomo.</span> Antes de dar por buena una inmunofluorescencia negativa, conviene comprobarlo: tomarla de dentro de la ampolla es el error tecnico que mas resultados arruina.';
      }
      if (r.corticoide) {
        s += '<br><span style="opacity:.85;">El corticoide previo atenua o negativiza los hallazgos. Un resultado negativo en un paciente ya tratado no descarta la enfermedad.</span>';
      }
      const extra = {
        red: 'Confirma con <strong>ELISA de desmogleina 1 y 3</strong>. El perfil separa las formas: 3 en el vulgar mucoso, 1 y 3 en el mucocutaneo, y 1 sola en el foliaceo.',
        lineal: 'Confirma con <strong>ELISA de BP180 y BP230</strong>. Si hace falta precisar, la piel separada con sal dice si el deposito esta en el techo o en el suelo de la ampolla.',
        granular: 'Es el patron definitorio. Pide <strong>serologia de celiaquia</strong> con IgA total, y determina la glucosa-6-fosfato deshidrogenasa antes de la dapsona.'
      }[r.patron];
      if (extra) s += '<br>' + extra;
      if (r.vejiga) {
        s += '<br><strong style="color:#7a3a6b;">La union a epitelio de vejiga de rata es el hallazgo mas especifico de PENFIGO PARANEOPLASICO.</strong> Hay que buscar la neoplasia (sobre todo linfoproliferativa) y pedir pruebas de funcion respiratoria por el riesgo de bronquiolitis obliterante.';
      }
      if (r.patron === 'negativo' && !r.malSitio && !r.corticoide) {
        s += '<br><span style="opacity:.85;">Ante una ampolla subepidermica con inmunofluorescencia y ELISA negativos, quedan la piel separada con sal y el analisis del patron de serracion.</span>';
      }
      return s;
    },
    fragment(r) {
      if (!r.dx) return 'inmunofluorescencia sin deposito' + (r.malSitio ? ', muestra mal tomada' : '');
      return `inmunofluorescencia compatible con ${r.dx}` + (r.vejiga ? ', con union a vejiga de rata' : '');
    }
  },

  {
    key: 'bpdai', title: 'BPDAI', accent: '#5a4a8c',
    subtitle: 'Actividad del penfigoide ampolloso &middot; 0 a 360',
    incompleteMsg: 'Introduce los tres apartados de actividad.',
    fields: [
      { type: 'note', text: 'Tres apartados de actividad, de 0 a 120 cada uno, con ponderacion segun las zonas afectadas. La puntuacion de da&#241;o y la de prurito van aparte.' },
      { name: 'ampollas', id: 'am-bp-1', type: 'number', step: '1', label: 'Ampollas y erosiones cutaneas (0 a 120)', placeholder: 'ej. 24', row: 'b1' },
      { name: 'eritema', id: 'am-bp-2', type: 'number', step: '1', label: 'Eritema y urticaria cutaneos (0 a 120)', placeholder: 'ej. 18', row: 'b1' },
      { name: 'mucosas', id: 'am-bp-3', type: 'number', step: '1', label: 'Lesiones mucosas (0 a 120)', placeholder: 'ej. 0', row: 'b2' },
      { name: 'dano', id: 'am-bp-4', type: 'number', step: '1', required: false, label: 'Da&#241;o (0 a 12, opcional)', placeholder: 'ej. 2', row: 'b2' },
      { name: 'prurito', id: 'am-bp-5', type: 'number', step: '1', required: false, label: 'BPDAI-prurito (0 a 30, opcional)', placeholder: 'ej. 22' },
      { name: 'previo', id: 'am-bp-6', type: 'number', step: '1', required: false, label: 'Actividad en la visita anterior (opcional)', placeholder: 'ej. 55' }
    ],
    compute(v) {
      if (v.ampollas === null || v.eritema === null || v.mucosas === null) return null;
      const fuera = [v.ampollas, v.eritema, v.mucosas].some(x => x < 0 || x > 120);
      if (fuera) return { invalido: true };
      if (v.dano !== null && v.dano !== undefined && (v.dano < 0 || v.dano > 12)) return { invalido: true };
      const total = v.ampollas + v.eritema + v.mucosas;
      let banda;
      if (total <= 19) banda = 'leve';
      else if (total <= 56) banda = 'moderado';
      else banda = 'grave';
      const hayPrevio = v.previo !== null && v.previo !== undefined;
      const delta = hayPrevio ? total - v.previo : null;
      let curso = null;
      if (delta !== null) {
        if (delta >= 3) curso = 'empeora';
        else if (delta <= -4) curso = 'mejora';
        else curso = 'estable';
      }
      return {
        total, banda, delta, curso,
        mucosas: v.mucosas,
        dano: (v.dano === null || v.dano === undefined) ? null : v.dano,
        prurito: (v.prurito === null || v.prurito === undefined) ? null : v.prurito
      };
    },
    format(r) {
      if (r.invalido) return 'Cada apartado de actividad va de <strong>0 a 120</strong> y el da&#241;o de 0 a 12. Revisa los valores.';
      let s = `<strong>BPDAI de actividad ${r.total} / 360: enfermedad ${r.banda}.</strong>`;
      if (r.curso === 'empeora') s += `<br><strong style="color:#8c3a34;">Ha subido ${r.delta} puntos:</strong> un aumento de 3 o mas se considera empeoramiento relevante.`;
      else if (r.curso === 'mejora') s += `<br><span style="color:#3f6b52;">Ha bajado ${Math.abs(r.delta)} puntos:</span> un descenso de 4 o mas se considera mejoria relevante.`;
      else if (r.curso === 'estable') s += '<br><span style="opacity:.85;">El cambio no alcanza el umbral de relevancia, ni al alza ni a la baja.</span>';
      if (r.mucosas > 0) s += '<br><span style="opacity:.85;">Hay afectacion mucosa, que hace el control mas dificil y a&#241;ade sufrimiento al paciente.</span>';
      if (r.dano !== null) s += `<br><span style="opacity:.85;">Da&#241;o ${r.dano} / 12: recoge lo que ya es permanente (hiperpigmentacion posinflamatoria, cicatrices) y no mejora con el tratamiento.</span>`;
      if (r.prurito !== null && r.prurito >= 15) {
        s += `<br><strong style="color:#5a4a8c;">El prurito esta en ${r.prurito} de 30.</strong> Va aparte de la actividad justamente porque es lo que mas condiciona la vida del paciente, y puede seguir alto con la piel casi limpia.`;
      } else if (r.prurito === null) {
        s += '<br><span style="opacity:.75;">Sin el apartado de prurito la foto queda incompleta: en el penfigoide el picor es el sintoma que mas pesa en la calidad de vida.</span>';
      }
      s += '<br><span style="opacity:.75;">Y en un paciente anciano hay que medir tambien lo otro: la toxicidad acumulada del corticoide, que en esta enfermedad hace tanto da&#241;o como la propia enfermedad.</span>';
      return s;
    },
    fragment: r => (r.invalido ? 'valores no validos' : `BPDAI ${r.total}/360 (${r.banda})`)
  },

  {
    key: 'previo-rituximab', title: 'Antes de la primera dosis de rituximab', accent: '#3d5a73',
    subtitle: 'El estudio que piden las guias',
    fields: [
      { type: 'note', text: 'Las guias indias de penfigo piden este estudio antes del rituximab, y el cribado de tuberculosis para los corticoides y los adyuvantes distintos del rituximab.' },
      { name: 'ecg', id: 'am-r1', type: 'checkbox', label: 'Electrocardiograma hecho' },
      { name: 'hbc', id: 'am-r2', type: 'checkbox', label: 'Anticuerpo del core de la hepatitis B (total) solicitado' },
      { name: 'tb', id: 'am-r3', type: 'checkbox', label: 'Cribado de tuberculosis (prueba cutanea o ensayo de interferon gamma)' },
      { name: 'cardio', id: 'am-r4', type: 'checkbox', label: 'Hay cardiopatia conocida o alteracion en el electrocardiograma' },
      { name: 'eco', id: 'am-r5', type: 'checkbox', label: 'Ecocardiograma hecho' },
      { name: 'vacunas', id: 'am-r6', type: 'checkbox', label: 'Vacunacion actualizada antes de empezar' },
      { name: 'dmg', id: 'am-r7', type: 'checkbox', label: 'Titulo basal de desmogleinas registrado' }
    ],
    compute(v) {
      const faltan = [];
      if (!v.ecg) faltan.push('electrocardiograma');
      if (!v.hbc) faltan.push('anticuerpo del core de la hepatitis B');
      if (!v.tb) faltan.push('cribado de tuberculosis');
      if (v.cardio && !v.eco) faltan.push('ecocardiograma (hay cardiopatia o alteracion del electrocardiograma)');
      if (!v.vacunas) faltan.push('vacunacion actualizada');
      if (!v.dmg) faltan.push('titulo basal de desmogleinas');
      return { faltan, listo: faltan.length === 0, ecoNecesario: !!v.cardio };
    },
    format(r) {
      if (r.listo) {
        return '<strong style="color:#3f6b52;">El estudio previo esta completo.</strong> Recuerda registrar el titulo basal de desmogleinas: sirve para valorar la falta de respuesta, predecir la recaida y planificar las infusiones de mantenimiento.<br><span style="opacity:.75;">Y planifica ya la profilaxis de osteoporosis y el control de glucemia y tension, porque el corticoide va a acompa&#241;ar durante meses.</span>';
      }
      let s = '<strong style="color:#8c3a34;">Falta por completar:</strong><br>' + r.faltan.map(f => '&middot; ' + f).join('<br>');
      if (!r.ecoNecesario) s += '<br><span style="opacity:.75;">El ecocardiograma solo se pide si hay cardiopatia conocida o alteracion en el electrocardiograma.</span>';
      s += '<br><span style="opacity:.75;">La vacunacion se actualiza ANTES de empezar: despues quedan contraindicadas las vacunas de virus vivos y la respuesta a las demas es peor.</span>';
      return s;
    },
    fragment: r => (r.listo ? 'estudio previo al rituximab completo' : `faltan ${r.faltan.length} puntos del estudio previo al rituximab`)
  }
];

export const combinedNote = {
  title: 'Nota combinada', accent: '#4a5a8c',
  subtitle: 'Rene el nivel, la inmunofluorescencia, el BPDAI y el estudio previo',
  items: ['nivel-ampolla', 'inmunofluorescencia', 'bpdai', 'previo-rituximab'],
  build(results, missing) {
    const partes = [];
    if (results['nivel-ampolla']) {
      const n = results['nivel-ampolla'];
      partes.push(`ampolla de perfil ${n.nivel}${n.sospecha ? `, compatible con ${n.sospecha}` : ''}`);
    }
    if (results.inmunofluorescencia) {
      const i = results.inmunofluorescencia;
      partes.push(i.dx ? `inmunofluorescencia compatible con ${i.dx}` : 'inmunofluorescencia sin deposito');
    }
    if (results.bpdai && !results.bpdai.invalido) partes.push(`BPDAI ${results.bpdai.total}/360, ${results.bpdai.banda}`);
    if (results['previo-rituximab']) {
      const p = results['previo-rituximab'];
      partes.push(p.listo ? 'estudio previo al rituximab completo' : `estudio previo al rituximab incompleto (${p.faltan.length} puntos)`);
    }
    let html = partes.length ? 'Ampollosa autoinmune: ' + partes.join('; ') + '.' : 'Completa las escalas seleccionadas.';
    if (missing.length) html += `<div style="margin-top:10px;color:#b0453d;font-size:12.5px;">Faltan datos en: ${missing.join(', ')}.</div>`;
    return html;
  }
};

export default { calculators, combinedNote };
