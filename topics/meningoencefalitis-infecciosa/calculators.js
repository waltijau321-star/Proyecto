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
    key: 'tc-antes-puncion', title: 'Tomografia antes de la puncion lumbar', accent: '#3d5a73',
    subtitle: 'Cuando hace falta la imagen, y por que nunca justifica retrasar el antibiotico',
    incompleteMsg: 'Marca los datos presentes. Si no hay ninguno, la herramienta lo indicara igualmente: pulsa sobre cualquier casilla para calcular.',
    fields: [
      { name: 'inmuno', id: 'mn-tc-i', type: 'checkbox', label: 'Inmunodepresion: VIH, trasplante, inmunosupresores o neoplasia en tratamiento', row: 'r1' },
      { name: 'snc', id: 'mn-tc-s', type: 'checkbox', label: 'Enfermedad previa del sistema nervioso central: lesion ocupante, ictus o infeccion focal', row: 'r1' },
      { name: 'crisis', id: 'mn-tc-c', type: 'checkbox', label: 'Crisis comicial en la semana previa', row: 'r2' },
      { name: 'papiledema', id: 'mn-tc-p', type: 'checkbox', label: 'Papiledema en el fondo de ojo', row: 'r2' },
      { name: 'conciencia', id: 'mn-tc-n', type: 'checkbox', label: 'Alteracion del nivel de conciencia', row: 'r3' },
      { name: 'focalidad', id: 'mn-tc-f', type: 'checkbox', label: 'Focalidad neurologica: paresia, afasia, campimetria o paralisis de mirada', row: 'r3' },
      { name: 'edad', id: 'mn-tc-e', type: 'number', step: '1', required: false, label: 'Edad (a&#241;os)', placeholder: 'ej. 64' },
      { name: 'tratado', id: 'mn-tc-t', type: 'select', label: 'Se ha administrado ya la dexametasona con el antibiotico?', options: [
        { v: 'no', t: 'Todavia no' },
        { v: 'si', t: 'Si, ya estan puestos' }
      ] },
      { type: 'note', text: 'El valor de esta regla es EVITAR tomografias que solo sirven para retrasar la puncion. Y su regla de oro no es un criterio sino una secuencia: si se decide pedir la imagen, los hemocultivos, la dexametasona y el antibiotico se administran ANTES de bajar al aparato. El retraso del antibiotico es lo que mas se asocia a mortalidad en este cuadro.' }
    ],
    compute(v) {
      if (v.edad != null && !(v.edad >= 0 && v.edad <= 120)) return { invalido: true };
      const items = [
        [v.inmuno, 'inmunodepresion'],
        [v.snc, 'enfermedad previa del sistema nervioso central'],
        [v.crisis, 'crisis en la semana previa'],
        [v.papiledema, 'papiledema'],
        [v.conciencia, 'alteracion del nivel de conciencia'],
        [v.focalidad, 'focalidad neurologica']
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
      if (r.invalido) return 'Revisa la edad: se admite de 0 a 120 a&#241;os.';
      let s = '';
      if (r.tc) {
        s += `<strong style="color:#8a6a1f;">Hay ${r.n} criterio${r.n > 1 ? 's' : ''} para hacer tomografia ANTES de la puncion</strong>: ${r.presentes.join(', ')}. `;
        s += 'Se busca una lesion con efecto de masa, desplazamiento de linea media o hidrocefalia que desaconsejen puncionar.';
      } else {
        s += '<strong style="color:#3f6b52;">No hay ningun criterio: se puede puncionar directamente, sin tomografia previa.</strong> Con ninguno de estos datos, la probabilidad de una lesion con efecto de masa es muy baja, y pedir la imagen solo consigue retrasar el diagnostico y el tratamiento.';
        if (r.mayor) s += `<br><span style="opacity:.75;">El paciente tiene ${r.edad} a&#241;os. Algunas recomendaciones incluyen la edad avanzada entre los criterios, de modo que aqui cabe el juicio clinico, siempre sin retrasar el tratamiento.</span>`;
      }
      if (r.tratado) {
        s += '<br><strong style="color:#3f6b52;">La dexametasona y el antibiotico ya estan puestos.</strong> Ese es el orden correcto: a partir de aqui, el tiempo que consuman la imagen y la puncion ya no perjudica al paciente, y el liquido sigue informando porque la celularidad, la glucosa y las proteinas no se normalizan en unas horas.';
      } else {
        s += '<br><strong style="color:#8c3a34;">Todavia no se ha tratado.</strong> Sea cual sea el resultado de esta regla, corresponde extraer HEMOCULTIVOS y administrar DEXAMETASONA seguida del ANTIBIOTICO ahora, antes de la tomografia y antes de la puncion. El retraso de la primera dosis es el factor pronostico modificable mas importante de este cuadro.';
      }
      if (r.sinEdad) s += '<br><span style="opacity:.75;">No se ha introducido la edad, que ademas de figurar en algunas versiones de la regla decide si hace falta a&#241;adir ampicilina para cubrir Listeria.</span>';
      s += '<br><span style="opacity:.75;">Una tomografia normal NO descarta hipertension intracraneal ni autoriza a puncionar si la clinica sugiere herniacion inminente.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.tc ? `tomografia previa indicada (${r.n} criterio${r.n > 1 ? 's' : ''})` : 'puncion directa sin tomografia')
  },

  {
    key: 'perfil-lcr', title: 'Perfil del liquido cefalorraquideo', accent: '#7a3f2e',
    subtitle: 'Cociente de glucosa, formula y correccion de la puncion traumatica',
    incompleteMsg: 'Introduce la celularidad, el porcentaje de polimorfonucleares, la glucosa del liquido y la glucemia simultanea.',
    fields: [
      { name: 'celulas', id: 'mn-lcr-c', type: 'number', step: '1', label: 'Leucocitos en el liquido (por mm3)', placeholder: 'ej. 1800', row: 'r1' },
      { name: 'pmn', id: 'mn-lcr-p', type: 'number', step: '1', label: 'Polimorfonucleares (%)', placeholder: 'ej. 90', row: 'r1' },
      { name: 'glucoLcr', id: 'mn-lcr-g', type: 'number', step: '1', label: 'Glucosa en el liquido (mg/dL)', placeholder: 'ej. 22', row: 'r2' },
      { name: 'glucemia', id: 'mn-lcr-s', type: 'number', step: '1', label: 'Glucemia simultanea (mg/dL)', placeholder: 'ej. 110', row: 'r2' },
      { name: 'proteinas', id: 'mn-lcr-pr', type: 'number', step: '1', required: false, label: 'Proteinas en el liquido (mg/dL)', placeholder: 'ej. 210', row: 'r3' },
      { name: 'hematies', id: 'mn-lcr-h', type: 'number', step: '10', required: false, label: 'Hematies en el liquido (por mm3)', placeholder: 'ej. 0', row: 'r3' },
      { name: 'presion', id: 'mn-lcr-ap', type: 'number', step: '1', required: false, label: 'Presion de apertura (cmH2O)', placeholder: 'ej. 24' },
      { type: 'note', text: 'El COCIENTE de glucosa entre liquido y plasma vale mas que la glucosa aislada, porque no depende de la glucemia del momento: por eso hay que extraer una glucemia SIMULTANEA a la puncion. La correccion de la puncion traumatica resta un leucocito por cada 500 a 1000 hematies, pero es una aproximacion: si el resultado corregido queda en el limite, manda la clinica.' }
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
      if (r.invalido) return 'Revisa los valores: celulas de 0 a 100000, polimorfonucleares de 0 a 100%, glucosas dentro de rango fisiologico y presion de 0 a 80 cmH2O.';
      let s = `<strong>Cociente de glucosa ${r.cociente.toFixed(2)}. Perfil ${r.perfil}.</strong> `;
      if (r.nota === 'bacteriano') s += '<span style="color:#8c3a34;">Predominio de polimorfonucleares con cociente por debajo de 0.4.</span> Apoya con fuerza una meningitis bacteriana: Gram, cultivo y prueba molecular, y tratamiento empirico ya iniciado sin esperar a estos resultados.';
      else if (r.nota === 'tbHongo') s += '<strong style="color:#8a6a1f;">Predominio linfocitario con glucosa BAJA: esto NO es una meningitis virica.</strong> Obliga a pensar en tuberculosis, criptococo, Listeria, Brucella, sifilis y carcinomatosis meningea. Toca antigeno criptococico, prueba molecular y cultivo para tuberculosis con VOLUMEN ALTO de liquido, adenosina desaminasa y citologia.';
      else if (r.nota === 'virico') s += '<span style="color:#3f6b52;">Predominio linfocitario con glucosa conservada</span>, compatible con meningitis virica. Prueba molecular para enterovirus y virus herpes, y SEROLOGIA DE VIH, porque la primoinfeccion se presenta asi y se pasa por alto con facilidad.';
      else if (r.nota === 'precozOParcial') s += '<span style="color:#8a6a1f;">Polimorfonucleares con glucosa conservada.</span> Puede ser una meningitis virica en su fase MUY precoz, una bacteriana incipiente o una bacteriana PARCIALMENTE TRATADA si ya habia recibido antibiotico. No es un perfil para tranquilizarse: se mantiene el tratamiento empirico y se repite la puncion si la evolucion no aclara el cuadro.';
      else s += '<span style="color:#3f6b52;">Sin pleocitosis y con glucosa conservada.</span> Un liquido normal no descarta una infeccion muy precoz ni una encefalitis, cuyo liquido puede ser casi normal: si la clinica es sugestiva, se mantiene el tratamiento y se repite el estudio.';

      if (r.traumatica) {
        s += `<br><strong style="color:#3d5a73;">Puncion traumatica con ${r.hem} hematies.</strong> Corrigiendo por el arrastre, los leucocitos quedarian entre ${Math.round(r.corrMin)} y ${Math.round(r.corrMax)} por mm3. Es una APROXIMACION: si el resultado corregido queda en el limite, manda la clinica y no la aritmetica. Que el liquido aclare entre tubos apoya la puncion traumatica, pero tampoco lo prueba.`;
      }
      if (r.protMuyAltas) s += `<br><span style="opacity:.75;">Proteinas de ${r.proteinas} mg/dL, muy elevadas, lo que encaja sobre todo con causa bacteriana, tuberculosa o fungica, o con un bloqueo del espacio subaracnoideo.</span>`;
      else if (r.protAltas) s += `<br><span style="opacity:.75;">Proteinas de ${r.proteinas} mg/dL, elevadas.</span>`;
      else if (r.sinProteinas) s += '<br><span style="opacity:.75;">No se han introducido las proteinas, que completan el perfil y son especialmente altas en la meningitis tuberculosa.</span>';

      if (r.presionAlta) s += `<br><strong style="color:#6b4a8c;">Presion de apertura de ${r.presion} cmH2O, elevada.</strong> En la meningitis criptococica la hipertension intracraneal es la principal causa de muerte precoz y su tratamiento son PUNCIONES EVACUADORAS repetidas, que forman parte del tratamiento y no son un gesto diagnostico.`;
      else if (r.sinPresion) s += '<br><span style="opacity:.75;">No se ha registrado la presion de apertura. Se mide con el manometro, no cuesta nada y es la que dicta el tratamiento en la criptococica.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `cociente ${r.cociente.toFixed(2)}, perfil ${r.perfil.toLowerCase()}`
  },

  {
    key: 'empirico-meningoencefalitis', title: 'Tratamiento empirico', accent: '#8c3a34',
    subtitle: 'Que cubrir segun edad, huesped y sindrome, y si corresponde dexametasona',
    incompleteMsg: 'Introduce la edad y elige el sindrome y el contexto del paciente.',
    fields: [
      { name: 'edad', id: 'mn-em-e', type: 'number', step: '1', label: 'Edad (a&#241;os)', placeholder: 'ej. 58', row: 'r1' },
      { name: 'sindrome', id: 'mn-em-s', type: 'select', label: 'Sindrome predominante', row: 'r1', options: [
        { v: 'meningeo', t: 'Meningeo: funcion cerebral conservada' },
        { v: 'encefalitico', t: 'Encefalitico: conducta, lenguaje o crisis' }
      ] },
      { name: 'origen', id: 'mn-em-o', type: 'select', label: 'Origen del cuadro', row: 'r2', options: [
        { v: 'comunitario', t: 'Comunitario' },
        { v: 'neuroqx', t: 'Neurocirugia, traumatismo penetrante o derivacion ventricular' }
      ] },
      { name: 'huesped', id: 'mn-em-h', type: 'select', label: 'Situacion del huesped', row: 'r2', options: [
        { v: 'normal', t: 'Sin inmunodepresion ni embarazo' },
        { v: 'inmuno', t: 'Inmunodepresion celular, VIH, trasplante o inmunosupresores' },
        { v: 'embarazo', t: 'Embarazo' }
      ] },
      { name: 'alergia', id: 'mn-em-a', type: 'checkbox', label: 'Alergia grave documentada a betalactamicos' },
      { type: 'note', text: 'El error mas repetido de este apartado es olvidar la AMPICILINA: las cefalosporinas NO cubren Listeria monocytogenes, que aparece por encima de los 50 a&#241;os, en el embarazo y en la inmunodepresion. La dexametasona se administra ANTES o CON la primera dosis de antibiotico y se suspende si el germen no resulta ser neumococo.' }
    ],
    compute(v) {
      if (v.edad == null || !v.sindrome || !v.origen || !v.huesped) return null;
      if (!(v.edad >= 0 && v.edad <= 120)) return { invalido: true };
      const listeria = v.edad > 50 || v.huesped === 'inmuno' || v.huesped === 'embarazo';
      const motivos = [];
      if (v.edad > 50) motivos.push(`edad de ${v.edad} a&#241;os`);
      if (v.huesped === 'inmuno') motivos.push('inmunodepresion');
      if (v.huesped === 'embarazo') motivos.push('embarazo');
      const neuroqx = v.origen === 'neuroqx';
      const encefalitis = v.sindrome === 'encefalitico';
      const farmacos = [];
      if (neuroqx) {
        farmacos.push('vancomicina');
        farmacos.push('cefepima, ceftazidima o meropenem, con cobertura antipseudomonica');
      } else {
        farmacos.push('vancomicina');
        farmacos.push('cefalosporina de tercera generacion (ceftriaxona o cefotaxima)');
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
      if (r.invalido) return 'Revisa la edad: se admite de 0 a 120 a&#241;os.';
      let s = `<strong>Cobertura empirica: ${r.farmacos.join(' + ')}.</strong> Todo a dosis de sistema nervioso central, que son mas altas que las habituales porque la penetracion a traves de la barrera es limitada. `;
      if (r.listeria) {
        s += `<br><strong style="color:#8c3a34;">AMPICILINA obligada</strong> por ${r.motivos.join(' y ')}. Las cefalosporinas NO cubren Listeria monocytogenes, y esa omision es el error mas repetido de este apartado: deja al paciente sin tratamiento frente al germen que su perfil hace mas probable.`;
      } else {
        s += '<br><span style="opacity:.75;">Sin criterios para cubrir Listeria por ahora. Conviene revisarlo si aparecen datos de inmunodepresion no conocidos, que es una situacion frecuente en el paciente que ingresa por este cuadro.</span>';
      }
      if (r.neuroqx) s += '<br><strong style="color:#3d5a73;">Origen neuroquirurgico o asociado a dispositivo:</strong> la flora cambia a estafilococos y bacilos gramnegativos, incluida Pseudomonas, de ahi la cobertura antipseudomonica. Y hay una parte no farmacologica sin la cual el tratamiento suele fracasar: RETIRAR el dispositivo infectado.';
      if (r.encefalitis) s += '<br><strong style="color:#6b4a8c;">Perfil encefalitico: ACICLOVIR de inmediato</strong>, sin esperar a la prueba molecular ni a la resonancia, porque el pronostico depende del tiempo hasta la primera dosis. Hidratar bien para evitar la cristalizacion renal, y NO suspenderlo por una prueba negativa en las primeras 72 horas si la sospecha sigue alta.';
      if (r.dexa) s += '<br><strong style="color:#3f6b52;">DEXAMETASONA</strong> antes o con la primera dosis de antibiotico, durante 4 dias, y se SUSPENDE si el germen no resulta ser neumococo. Fuera de esa ventana ya no aporta: administrada despues del antibiotico, no modula la respuesta inflamatoria que causa el da&#241;o.';
      else if (r.neuroqx) s += '<br><span style="opacity:.75;">El beneficio de la dexametasona esta demostrado en la meningitis bacteriana adquirida en la comunidad, no en la asociada a neurocirugia o a dispositivo, donde no se recomienda de rutina.</span>';
      else if (r.encefalitis) s += '<br><span style="opacity:.75;">Con perfil encefalitico, la dexametasona no es sistematica: se valora caso a caso, y si no se puede descartar una meningitis bacteriana se sigue el esquema de esta.</span>';
      if (r.alergia) s += '<br><strong style="color:#8a6a1f;">Alergia grave a betalactamicos:</strong> hay alternativas para cada hueco (entre otras, cotrimoxazol o meropenem valorando la reactividad cruzada para Listeria, y moxifloxacino con vancomicina en lugar de la cefalosporina). Consultar con farmacia o infecciosas, PERO sin que esa consulta retrase la primera dosis.';
      s += '<br><span style="opacity:.75;">Antes de todo esto: HEMOCULTIVOS. Y despues, desescalar en cuanto se conozca el germen y su sensibilidad.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `${r.farmacos.length} farmacos${r.listeria ? ', con ampicilina' : ''}${r.dexa ? ' y dexametasona' : ''}`
  }
];
