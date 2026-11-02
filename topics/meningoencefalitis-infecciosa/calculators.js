// topics/meningoencefalitis-infecciosa/calculators.js
// 3 herramientas (el tema no pide mas: lo que decide aqui es la secuencia, no la aritmetica):
// - tc-antes-puncion: criterios para pedir tomografia antes de la puncion lumbar, con el
//   recordatorio de que la imagen nunca justifica retrasar el antibiotico.
// - perfil-lcr: interpreta el liquido con el cociente de glucosa y corrige la puncion traumatica.
// - empirico-meningoencefalitis: combinacion empirica por edad y factores, mas dexametasona.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

export const calculators = [
  {
    key: 'tc-antes-puncion', title: 'Tomografía antes de la punción lumbar', accent: '#3d5a73',
    subtitle: 'Cuando hace falta la imagen, y por que nunca justifica retrasar el antibiótico',
    incompleteMsg: 'Marca los datos presentes. Si no hay ninguno, la herramienta lo indicara igualmente: pulsa sobre cualquier casilla para calcular.',
    fields: [
      { name: 'inmuno', id: 'mn-tc-i', type: 'checkbox', label: 'Inmunodepresion: VIH, trasplante, inmunosupresores o neoplasia en tratamiento', row: 'r1' },
      { name: 'snc', id: 'mn-tc-s', type: 'checkbox', label: 'Enfermedad previa del sistema nervioso central: lesión ocupante, ictus o infección focal', row: 'r1' },
      { name: 'crisis', id: 'mn-tc-c', type: 'checkbox', label: 'Crisis comicial en la semana previa', row: 'r2' },
      { name: 'papiledema', id: 'mn-tc-p', type: 'checkbox', label: 'Papiledema en el fondo de ojo', row: 'r2' },
      { name: 'conciencia', id: 'mn-tc-n', type: 'checkbox', label: 'Alteración del nivel de conciencia', row: 'r3' },
      { name: 'focalidad', id: 'mn-tc-f', type: 'checkbox', label: 'Focalidad neurológica: paresia, afasia, campimetría o parálisis de mirada', row: 'r3' },
      { name: 'edad', id: 'mn-tc-e', type: 'number', step: '1', required: false, label: 'Edad (años)', placeholder: 'ej. 64' },
      { name: 'tratado', id: 'mn-tc-t', type: 'select', label: 'Se ha administrado ya la dexametasona con el antibiótico?', options: [
        { v: 'no', t: 'Todavía no' },
        { v: 'si', t: 'Si, ya están puestos' }
      ] },
      { type: 'note', text: 'El valor de esta regla es EVITAR tomografías que solo sirven para retrasar la punción. Y su regla de oro no es un criterio sino una secuencia: si se decide pedir la imagen, los hemocultivos, la dexametasona y el antibiótico se administran ANTES de bajar al aparato. El retraso del antibiótico es lo que más se asocia a mortalidad en este cuadro.' }
    ],
    compute(v) {
      if (v.edad != null && !(v.edad >= 0 && v.edad <= 120)) return { invalido: true };
      const items = [
        [v.inmuno, 'inmunodepresion'],
        [v.snc, 'enfermedad previa del sistema nervioso central'],
        [v.crisis, 'crisis en la semana previa'],
        [v.papiledema, 'papiledema'],
        [v.conciencia, 'alteración del nivel de conciencia'],
        [v.focalidad, 'focalidad neurológica']
      ];
      const presentes = items.filter(x => x[0]).map(x => x[1]);
      const mayor = v.edad != null && v.edad >= 60;
      return {
        presentes, n: presentes.length, mayor, edad: v.edad,
        tc: presentes.length > 0,
        tratado: v.tratado === 'si',
        sinEdad: v.edad == null
      };
    },
    format: r => {
      if (r.invalido) return 'Revisa la edad: se admite de 0 a 120 años.';
      let s = '';
      if (r.tc) {
        s += `<strong style="color:#8a6a1f;">Hay ${r.n} criterio${r.n > 1 ? 's' : ''} para hacer tomografía ANTES de la punción</strong>: ${r.presentes.join(', ')}. `;
        s += 'Se busca una lesión con efecto de masa, desplazamiento de línea media o hidrocefalia que desaconsejen puncionar.';
      } else {
        s += '<strong style="color:#3f6b52;">No hay ningún criterio: se puede puncionar directamente, sin tomografía previa.</strong> Con ninguno de estos datos, la probabilidad de una lesión con efecto de masa es muy baja, y pedir la imagen solo consigue retrasar el diagnóstico y el tratamiento.';
        if (r.mayor) s += `<br><span style="opacity:.75;">El paciente tiene ${r.edad} años. Algunas recomendaciones incluyen la edad avanzada entre los criterios, de modo que aquí cabe el juicio clínico, siempre sin retrasar el tratamiento.</span>`;
      }
      if (r.tratado) {
        s += '<br><strong style="color:#3f6b52;">La dexametasona y el antibiótico ya están puestos.</strong> Ese es el orden correcto: a partir de aquí, el tiempo que consuman la imagen y la punción ya no perjudica al paciente, y el líquido sigue informando porque la celularidad, la glucosa y las proteínas no se normalizan en unas horas.';
      } else {
        s += '<br><strong style="color:#8c3a34;">Todavía no se ha tratado.</strong> Sea cual sea el resultado de esta regla, corresponde extraer HEMOCULTIVOS y administrar DEXAMETASONA seguida del ANTIBIÓTICO ahora, antes de la tomografía y antes de la punción. El retraso de la primera dosis es el factor pronóstico modificable más importante de este cuadro.';
      }
      if (r.sinEdad) s += '<br><span style="opacity:.75;">No se ha introducido la edad, que además de figurar en algunas versiones de la regla decide si hace falta añadir ampicilina para cubrir Listeria.</span>';
      s += '<br><span style="opacity:.75;">Una tomografía normal NO descarta hipertensión intracraneal ni autoriza a puncionar si la clínica sugiere herniación inminente.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.tc ? `tomografía previa indicada (${r.n} criterio${r.n > 1 ? 's' : ''})` : 'punción directa sin tomografía')
  },

  {
    key: 'perfil-lcr', title: 'Perfil del líquido cefalorraquídeo', accent: '#7a3f2e',
    subtitle: 'Cociente de glucosa, fórmula y corrección de la punción traumática',
    incompleteMsg: 'Introduce la celularidad, el porcentaje de polimorfonucleares, la glucosa del líquido y la glucemia simultánea.',
    fields: [
      { name: 'celulas', id: 'mn-lcr-c', type: 'number', step: '1', label: 'Leucocitos en el líquido (por mm3)', placeholder: 'ej. 1800', row: 'r1' },
      { name: 'pmn', id: 'mn-lcr-p', type: 'number', step: '1', label: 'Polimorfonucleares (%)', placeholder: 'ej. 90', row: 'r1' },
      { name: 'glucoLcr', id: 'mn-lcr-g', type: 'number', step: '1', label: 'Glucosa en el líquido (mg/dL)', placeholder: 'ej. 22', row: 'r2' },
      { name: 'glucemia', id: 'mn-lcr-s', type: 'number', step: '1', label: 'Glucemia simultánea (mg/dL)', placeholder: 'ej. 110', row: 'r2' },
      { name: 'proteinas', id: 'mn-lcr-pr', type: 'number', step: '1', required: false, label: 'Proteínas en el líquido (mg/dL)', placeholder: 'ej. 210', row: 'r3' },
      { name: 'hematies', id: 'mn-lcr-h', type: 'number', step: '10', required: false, label: 'Hematies en el líquido (por mm3)', placeholder: 'ej. 0', row: 'r3' },
      { name: 'presion', id: 'mn-lcr-ap', type: 'number', step: '1', required: false, label: 'Presión de apertura (cmH2O)', placeholder: 'ej. 24' },
      { type: 'note', text: 'El COCIENTE de glucosa entre líquido y plasma vale más que la glucosa aislada, porque no depende de la glucemia del momento: por eso hay que extraer una glucemia SIMULTÁNEA a la punción. La corrección de la punción traumática resta un leucocito por cada 500 a 1000 hematies, pero es una aproximación: si el resultado corregido queda en el limite, manda la clínica.' }
    ],
    compute(v) {
      if (v.celulas == null || v.pmn == null || v.glucoLcr == null || v.glucemia == null) return null;
      if (!(v.celulas >= 0 && v.celulas <= 100000)) return { invalido: true };
      if (!(v.pmn >= 0 && v.pmn <= 100)) return { invalido: true };
      if (!(v.glucoLcr >= 0 && v.glucoLcr <= 500)) return { invalido: true };
      if (!(v.glucemia > 0 && v.glucemia <= 1000)) return { invalido: true };
      if (v.proteinas != null && !(v.proteinas >= 0 && v.proteinas <= 5000)) return { invalido: true };
      if (v.hematies != null && !(v.hematies >= 0 && v.hematies <= 1000000)) return { invalido: true };
      if (v.presion != null && !(v.presion >= 0 && v.presion <= 80)) return { invalido: true };

      const cociente = v.glucoLcr / v.glucemia;
      const hem = v.hematies == null ? 0 : v.hematies;
      const restaMin = hem / 1000;
      const restaMax = hem / 500;
      const corrMax = Math.max(0, v.celulas - restaMin);
      const corrMin = Math.max(0, v.celulas - restaMax);
      const traumatica = hem >= 1000;
      const celRef = traumatica ? corrMin : v.celulas;

      const glucosaBaja = cociente < 0.4;
      const predominioPmn = v.pmn >= 50;
      const protAltas = v.proteinas != null && v.proteinas >= 100;
      const protMuyAltas = v.proteinas != null && v.proteinas >= 200;

      let perfil, nota;
      if (celRef < 5 && !glucosaBaja) {
        perfil = 'NORMAL';
        nota = 'sinPleocitosis';
      } else if (predominioPmn && glucosaBaja) {
        perfil = 'BACTERIANO';
        nota = 'bacteriano';
      } else if (!predominioPmn && glucosaBaja) {
        perfil = 'LINFOCITARIO CON GLUCOSA BAJA';
        nota = 'tbHongo';
      } else if (predominioPmn && !glucosaBaja) {
        perfil = 'PURULENTO CON GLUCOSA CONSERVADA';
        nota = 'precozOParcial';
      } else {
        perfil = 'LINFOCITARIO CON GLUCOSA NORMAL';
        nota = 'virico';
      }
      const presionAlta = v.presion != null && v.presion > 20;
      return {
        cociente, perfil, nota, celulas: v.celulas, celRef, pmn: v.pmn,
        traumatica, corrMin, corrMax, hem, protAltas, protMuyAltas,
        proteinas: v.proteinas, presion: v.presion, presionAlta,
        sinProteinas: v.proteinas == null, sinPresion: v.presion == null
      };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: células de 0 a 100000, polimorfonucleares de 0 a 100%, glucosas dentro de rango fisiológico y presión de 0 a 80 cmH2O.';
      let s = `<strong>Cociente de glucosa ${r.cociente.toFixed(2)}. Perfil ${r.perfil}.</strong> `;
      if (r.nota === 'bacteriano') s += '<span style="color:#8c3a34;">Predominio de polimorfonucleares con cociente por debajo de 0.4.</span> Apoya con fuerza una meningitis bacteriana: Gram, cultivo y prueba molecular, y tratamiento empírico ya iniciado sin esperar a estos resultados.';
      else if (r.nota === 'tbHongo') s += '<strong style="color:#8a6a1f;">Predominio linfocitario con glucosa BAJA: esto NO es una meningitis virica.</strong> Obliga a pensar en tuberculosis, criptococo, Listeria, Brucella, sífilis y carcinomatosis meníngea. Toca antígeno criptococico, prueba molecular y cultivo para tuberculosis con VOLUMEN ALTO de líquido, adenosina desaminasa y citología.';
      else if (r.nota === 'virico') s += '<span style="color:#3f6b52;">Predominio linfocitario con glucosa conservada</span>, compatible con meningitis virica. Prueba molecular para enterovirus y virus herpes, y SEROLOGÍA DE VIH, porque la primoinfeccion se presenta así y se pasa por alto con facilidad.';
      else if (r.nota === 'precozOParcial') s += '<span style="color:#8a6a1f;">Polimorfonucleares con glucosa conservada.</span> Puede ser una meningitis virica en su fase MUY precoz, una bacteriana incipiente o una bacteriana PARCIALMENTE TRATADA si ya había recibido antibiótico. No es un perfil para tranquilizarse: se mantiene el tratamiento empírico y se repite la punción si la evolución no aclara el cuadro.';
      else s += '<span style="color:#3f6b52;">Sin pleocitosis y con glucosa conservada.</span> Un líquido normal no descarta una infección muy precoz ni una encefalitis, cuyo líquido puede ser casi normal: si la clínica es sugestiva, se mantiene el tratamiento y se repite el estudio.';

      if (r.traumatica) {
        s += `<br><strong style="color:#3d5a73;">Punción traumática con ${r.hem} hematies.</strong> Corrigiendo por el arrastre, los leucocitos quedarian entre ${Math.round(r.corrMin)} y ${Math.round(r.corrMax)} por mm3. Es una APROXIMACIÓN: si el resultado corregido queda en el limite, manda la clínica y no la aritmetica. Que el líquido aclare entre tubos apoya la punción traumática, pero tampoco lo prueba.`;
      }
      if (r.protMuyAltas) s += `<br><span style="opacity:.75;">Proteínas de ${r.proteinas} mg/dL, muy elevadas, lo que encaja sobre todo con causa bacteriana, tuberculosa o fúngica, o con un bloqueo del espacio subaracnoideo.</span>`;
      else if (r.protAltas) s += `<br><span style="opacity:.75;">Proteínas de ${r.proteinas} mg/dL, elevadas.</span>`;
      else if (r.sinProteinas) s += '<br><span style="opacity:.75;">No se han introducido las proteínas, que completan el perfil y son especialmente altas en la meningitis tuberculosa.</span>';

      if (r.presionAlta) s += `<br><strong style="color:#6b4a8c;">Presión de apertura de ${r.presion} cmH2O, elevada.</strong> En la meningitis criptococica la hipertensión intracraneal es la principal causa de muerte precoz y su tratamiento son PUNCIONES EVACUADORAS repetidas, que forman parte del tratamiento y no son un gesto diagnóstico.`;
      else if (r.sinPresion) s += '<br><span style="opacity:.75;">No se ha registrado la presión de apertura. Se mide con el manometro, no cuesta nada y es la que dicta el tratamiento en la criptococica.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `cociente ${r.cociente.toFixed(2)}, perfil ${r.perfil.toLowerCase()}`
  },

  {
    key: 'empirico-meningoencefalitis', title: 'Tratamiento empírico', accent: '#8c3a34',
    subtitle: 'Que cubrir según edad, huésped y síndrome, y si corresponde dexametasona',
    incompleteMsg: 'Introduce la edad y elige el síndrome y el contexto del paciente.',
    fields: [
      { name: 'edad', id: 'mn-em-e', type: 'number', step: '1', label: 'Edad (años)', placeholder: 'ej. 58', row: 'r1' },
      { name: 'sindrome', id: 'mn-em-s', type: 'select', label: 'Síndrome predominante', row: 'r1', options: [
        { v: 'meningeo', t: 'Meníngeo: función cerebral conservada' },
        { v: 'encefalitico', t: 'Encefalitico: conducta, lenguaje o crisis' }
      ] },
      { name: 'origen', id: 'mn-em-o', type: 'select', label: 'Origen del cuadro', row: 'r2', options: [
        { v: 'comunitario', t: 'Comunitario' },
        { v: 'neuroqx', t: 'Neurocirugía, traumatismo penetrante o derivación ventricular' }
      ] },
      { name: 'huesped', id: 'mn-em-h', type: 'select', label: 'Situación del huésped', row: 'r2', options: [
        { v: 'normal', t: 'Sin inmunodepresion ni embarazo' },
        { v: 'inmuno', t: 'Inmunodepresion celular, VIH, trasplante o inmunosupresores' },
        { v: 'embarazo', t: 'Embarazo' }
      ] },
      { name: 'alergia', id: 'mn-em-a', type: 'checkbox', label: 'Alergia grave documentada a betalactámicos' },
      { type: 'note', text: 'El error más repetido de este apartado es olvidar la AMPICILINA: las cefalosporinas NO cubren Listeria monocytogenes, que aparece por encima de los 50 años, en el embarazo y en la inmunodepresion. La dexametasona se administra ANTES o CON la primera dosis de antibiótico y se suspende si el germen no resulta ser neumococo.' }
    ],
    compute(v) {
      if (v.edad == null || !v.sindrome || !v.origen || !v.huesped) return null;
      if (!(v.edad >= 0 && v.edad <= 120)) return { invalido: true };
      const listeria = v.edad > 50 || v.huesped === 'inmuno' || v.huesped === 'embarazo';
      const motivos = [];
      if (v.edad > 50) motivos.push(`edad de ${v.edad} años`);
      if (v.huesped === 'inmuno') motivos.push('inmunodepresion');
      if (v.huesped === 'embarazo') motivos.push('embarazo');
      const neuroqx = v.origen === 'neuroqx';
      const encefalitis = v.sindrome === 'encefalitico';
      const farmacos = [];
      if (neuroqx) {
        farmacos.push('vancomicina');
        farmacos.push('cefepima, ceftazidima o meropenem, con cobertura antipseudomónica');
      } else {
        farmacos.push('vancomicina');
        farmacos.push('cefalosporina de tercera generación (ceftriaxona o cefotaxima)');
      }
      if (listeria) farmacos.push('ampicilina, para cubrir Listeria');
      if (encefalitis) farmacos.push('aciclovir intravenoso');
      const dexa = !neuroqx && !encefalitis;
      return {
        farmacos, listeria, motivos, neuroqx, encefalitis, dexa,
        alergia: !!v.alergia, edad: v.edad, huesped: v.huesped
      };
    },
    format: r => {
      if (r.invalido) return 'Revisa la edad: se admite de 0 a 120 años.';
      let s = `<strong>Cobertura empírica: ${r.farmacos.join(' + ')}.</strong> Todo a dosis de sistema nervioso central, que son más altas que las habituales porque la penetración a través de la barrera es limitada. `;
      if (r.listeria) {
        s += `<br><strong style="color:#8c3a34;">AMPICILINA obligada</strong> por ${r.motivos.join(' y ')}. Las cefalosporinas NO cubren Listeria monocytogenes, y esa omisión es el error más repetido de este apartado: deja al paciente sin tratamiento frente al germen que su perfil hace más probable.`;
      } else {
        s += '<br><span style="opacity:.75;">Sin criterios para cubrir Listeria por ahora. Conviene revisarlo si aparecen datos de inmunodepresion no conocidos, que es una situación frecuente en el paciente que ingresa por este cuadro.</span>';
      }
      if (r.neuroqx) s += '<br><strong style="color:#3d5a73;">Origen neuroquirúrgico o asociado a dispositivo:</strong> la flora cambia a estafilococos y bacilos gramnegativos, incluida Pseudomonas, de ahi la cobertura antipseudomónica. Y hay una parte no farmacológica sin la cual el tratamiento suele fracasar: RETIRAR el dispositivo infectado.';
      if (r.encefalitis) s += '<br><strong style="color:#6b4a8c;">Perfil encefalitico: ACICLOVIR de inmediato</strong>, sin esperar a la prueba molecular ni a la resonancia, porque el pronóstico depende del tiempo hasta la primera dosis. Hidratar bien para evitar la cristalizacion renal, y NO suspenderlo por una prueba negativa en las primeras 72 horas si la sospecha sigue alta.';
      if (r.dexa) s += '<br><strong style="color:#3f6b52;">DEXAMETASONA</strong> antes o con la primera dosis de antibiótico, durante 4 días, y se SUSPENDE si el germen no resulta ser neumococo. Fuera de esa ventana ya no aporta: administrada después del antibiótico, no modula la respuesta inflamatoria que causa el daño.';
      else if (r.neuroqx) s += '<br><span style="opacity:.75;">El beneficio de la dexametasona esta demostrado en la meningitis bacteriana adquirida en la comunidad, no en la asociada a neurocirugía o a dispositivo, donde no se recomienda de rutina.</span>';
      else if (r.encefalitis) s += '<br><span style="opacity:.75;">Con perfil encefalitico, la dexametasona no es sistemática: se valora caso a caso, y si no se puede descartar una meningitis bacteriana se sigue el esquema de esta.</span>';
      if (r.alergia) s += '<br><strong style="color:#8a6a1f;">Alergia grave a betalactámicos:</strong> hay alternativas para cada hueco (entre otras, cotrimoxazol o meropenem valorando la reactividad cruzada para Listeria, y moxifloxacino con vancomicina en lugar de la cefalosporina). Consultar con farmacia o infecciosas, PERO sin que esa consulta retrase la primera dosis.';
      s += '<br><span style="opacity:.75;">Antes de todo esto: HEMOCULTIVOS. Y después, desescalar en cuanto se conozca el germen y su sensibilidad.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `${r.farmacos.length} fármacos${r.listeria ? ', con ampicilina' : ''}${r.dexa ? ' y dexametasona' : ''}`
  }
];
