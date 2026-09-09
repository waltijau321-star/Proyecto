// topics/soporte-nutricional-critico/calculators.js
// 3 herramientas:
// - riesgo-realimentacion: criterios de alto riesgo y pauta de inicio segura (tiamina antes,
//   pocas calorias, reposicion de iones y monitorizacion).
// - requerimientos-nutricion: objetivo calorico y proteico usando el PESO correcto y descontando
//   las calorias no nutricionales, con ajuste por fase de la enfermedad.
// - via-nutricion: oral, enteral o parenteral, y cuando iniciar cada una.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

export const calculators = [
  {
    key: 'riesgo-realimentacion', title: 'Riesgo de sindrome de realimentacion', accent: '#8c3a5c',
    subtitle: 'Antes de pautar la primera bolsa: quien esta en riesgo y como empezar',
    incompleteMsg: 'Introduce el indice de masa corporal y responde sobre la perdida de peso, los dias sin comer y las cifras de iones.',
    fields: [
      { name: 'imc', id: 'nu-rr-i', type: 'number', step: '0.1', label: 'Indice de masa corporal (kg/m2)', placeholder: 'ej. 16.8', row: 'r1' },
      { name: 'peso', id: 'nu-rr-p', type: 'number', step: '0.5', label: 'Peso actual (kg)', placeholder: 'ej. 45', row: 'r1' },
      { name: 'perdida', id: 'nu-rr-pe', type: 'number', step: '1', required: false, label: 'Perdida de peso no intencionada en 3 a 6 meses (%)', placeholder: 'ej. 12', row: 'r2' },
      { name: 'dias', id: 'nu-rr-d', type: 'number', step: '1', label: 'Dias con ingesta escasa o nula', placeholder: 'ej. 8', row: 'r2' },
      { name: 'iones', id: 'nu-rr-io', type: 'select', label: 'Fosforo, potasio o magnesio ANTES de alimentar', row: 'r3', options: [
        { v: 'normales', t: 'Los tres normales' },
        { v: 'bajos', t: 'Alguno de los tres bajo' },
        { v: 'nd', t: 'Todavia no se han medido' }
      ] },
      { name: 'alcohol', id: 'nu-rr-a', type: 'checkbox', label: 'Consumo excesivo de alcohol, o tratamiento con insulina, quimioterapia, antiacidos o diureticos', row: 'r3' },
      { type: 'note', text: 'El sindrome de realimentacion no lo causa el ayuno sino volver a comer: es IATROGENICO por definicion y por tanto enteramente prevenible. Su trampa es que las cifras de fosforo, potasio y magnesio pueden estar normales antes de empezar, porque lo que se ha vaciado es el interior de la celula. La TIAMINA se administra ANTES de cualquier aporte de glucosa. Y hay que empezar despacio: identificar el riesgo no significa retrasar la nutricion, significa iniciarla con menos calorias y subir a lo largo de varios dias.' }
    ],
    compute(v) {
      if (v.imc == null || v.peso == null || v.dias == null || !v.iones) return null;
      if (!(v.imc >= 8 && v.imc <= 80)) return { invalido: true };
      if (!(v.peso >= 20 && v.peso <= 300)) return { invalido: true };
      if (!(v.dias >= 0 && v.dias <= 200)) return { invalido: true };
      if (v.perdida != null && !(v.perdida >= 0 && v.perdida <= 80)) return { invalido: true };

      const mayores = [];
      if (v.imc < 16) mayores.push('indice de masa corporal por debajo de 16');
      if (v.perdida != null && v.perdida > 15) mayores.push(`perdida de peso del ${v.perdida}%`);
      if (v.dias > 10) mayores.push(`${v.dias} dias con ingesta escasa o nula`);
      if (v.iones === 'bajos') mayores.push('fosforo, potasio o magnesio bajos antes de alimentar');

      const menores = [];
      if (v.imc >= 16 && v.imc < 18.5) menores.push('indice de masa corporal entre 16 y 18.5');
      if (v.perdida != null && v.perdida > 10 && v.perdida <= 15) menores.push(`perdida de peso del ${v.perdida}%`);
      if (v.dias > 5 && v.dias <= 10) menores.push(`${v.dias} dias con ingesta escasa`);
      if (v.alcohol) menores.push('consumo de alcohol o farmacos de riesgo');

      const alto = mayores.length >= 1 || menores.length >= 2;
      const extremo = v.imc < 14 || v.dias > 15;
      const kcalKg = extremo ? 5 : (alto ? 10 : 20);
      const kcalIni = Math.round(kcalKg * v.peso);
      return {
        alto, extremo, mayores, menores, kcalKg, kcalIni, peso: v.peso,
        sinIones: v.iones === 'nd', ionesBajos: v.iones === 'bajos', sinPerdida: v.perdida == null
      };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: indice de masa corporal de 8 a 80, peso de 20 a 300 kg, dias de 0 a 200 y perdida de peso de 0 a 80%.';
      let s;
      if (r.alto) {
        s = '<strong style="color:#8c3a34;">ALTO RIESGO de sindrome de realimentacion.</strong> ';
        if (r.mayores.length) s += `Criterios mayores presentes: ${r.mayores.join('; ')}. Basta uno solo. `;
        else s += `Dos o mas criterios menores: ${r.menores.join('; ')}. `;
      } else {
        s = '<strong style="color:#3f6b52;">No se cumplen los criterios de alto riesgo</strong> con los datos introducidos. ';
        if (r.menores.length === 1) s += `Hay un criterio menor (${r.menores[0]}), que por si solo no clasifica como alto riesgo pero justifica prudencia y control analitico. `;
      }
      s += `<br><strong>Pauta de inicio: en torno a ${r.kcalKg} kcal/kg al dia, es decir unas ${r.kcalIni} kcal para ${r.peso} kg</strong>, con progresion lenta a lo largo de 4 a 7 dias.`;
      if (r.extremo) s += ' <span style="color:#8c3a34;">Se ha usado el aporte inicial mas conservador</span> por tratarse de un caso extremo, con indice de masa corporal muy bajo o ayuno muy prolongado.';
      s += '<br><strong style="color:#8a6a1f;">TIAMINA a dosis alta ANTES de administrar cualquier glucosa</strong>, y mantenida varios dias, junto con el resto de vitaminas y oligoelementos. Darla despues de la glucosa puede precipitar una encefalopatia de Wernicke en un paciente ya deplecionado.';
      if (r.ionesBajos) s += '<br><strong style="color:#8c3a34;">Ya hay iones bajos antes de empezar.</strong> Hay que reponer fosforo, potasio y magnesio ahora, pero eso NO justifica retrasar el inicio de la nutricion: se repone y se empieza despacio a la vez.';
      else if (r.sinIones) s += '<br><strong style="color:#8c3a34;">No se han medido los iones.</strong> Es la determinacion mas importante del tema y hay que pedirla ANTES de pautar la primera bolsa: unos valores bajos bastan por si solos para clasificar como alto riesgo.';
      if (r.alto) s += '<br><span style="opacity:.8;">Control de fosforo, potasio y magnesio a DIARIO durante los primeros dias, con monitorizacion electrocardiografica. Si aparece hipofosfatemia, la conducta con respaldo es REDUCIR temporalmente el aporte calorico y reponer, no mantener el ritmo.</span>';
      if (r.sinPerdida) s += '<br><span style="opacity:.75;">No se ha introducido la perdida de peso reciente, que es uno de los criterios y que el paciente o la familia suelen poder estimar.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `${r.alto ? 'ALTO riesgo' : 'riesgo no alto'} de realimentacion, iniciar a ${r.kcalKg} kcal/kg`
  },

  {
    key: 'requerimientos-nutricion', title: 'Energia y proteina: cuanto', accent: '#3d5a73',
    subtitle: 'Con el peso correcto y descontando las calorias que nadie cuenta',
    incompleteMsg: 'Introduce peso y talla, y elige la fase de la enfermedad.',
    fields: [
      { name: 'peso', id: 'nu-rq-p', type: 'number', step: '0.5', label: 'Peso real (kg)', placeholder: 'ej. 96', row: 'r1' },
      { name: 'talla', id: 'nu-rq-t', type: 'number', step: '1', label: 'Talla (cm)', placeholder: 'ej. 170', row: 'r1' },
      { name: 'sexo', id: 'nu-rq-s', type: 'select', label: 'Sexo', row: 'r2', options: [
        { v: 'v', t: 'Varon' },
        { v: 'm', t: 'Mujer' }
      ] },
      { name: 'fase', id: 'nu-rq-f', type: 'select', label: 'Fase de la enfermedad', row: 'r2', options: [
        { v: 'aguda', t: 'Aguda: primeros dias, o con vasoactivos' },
        { v: 'tardia', t: 'Tardia: estabilizado, a partir del 3.er o 4.o dia' }
      ] },
      { name: 'propofol', id: 'nu-rq-pr', type: 'number', step: '1', required: false, label: 'Propofol al 1% (mL al dia)', placeholder: 'ej. 480', row: 'r3' },
      { name: 'glucosado', id: 'nu-rq-g', type: 'number', step: '1', required: false, label: 'Suero glucosado al 5% (mL al dia)', placeholder: 'ej. 1000', row: 'r3' },
      { name: 'edemas', id: 'nu-rq-e', type: 'checkbox', label: 'Edemas, ascitis o sobrecarga que falsean el peso de la bascula' },
      { type: 'note', text: 'Dos ajustes cambian mucho el resultado y casi nadie los hace. El primero, usar el PESO correcto: en la obesidad el peso real sobreestima las necesidades de forma grosera y se emplea el peso ideal o el ajustado. El segundo, DESCONTAR las calorias no nutricionales: el propofol al 1% aporta alrededor de 1.1 kcal por mL, y un litro de suero glucosado al 5% aporta unas 200 kcal. Y en la fase aguda no hay que alcanzar el objetivo: se progresa despacio, porque el organismo ya produce energia endogena.' }
    ],
    compute(v) {
      if (v.peso == null || v.talla == null || !v.sexo || !v.fase) return null;
      if (!(v.peso >= 25 && v.peso <= 300)) return { invalido: true };
      if (!(v.talla >= 120 && v.talla <= 230)) return { invalido: true };
      if (v.propofol != null && !(v.propofol >= 0 && v.propofol <= 3000)) return { invalido: true };
      if (v.glucosado != null && !(v.glucosado >= 0 && v.glucosado <= 5000)) return { invalido: true };

      const tallaM = v.talla / 100;
      const imc = v.peso / (tallaM * tallaM);
      // peso ideal por la formula de Devine
      const pulgadas = Math.max(0, (v.talla - 152.4) / 2.54);
      const ideal = (v.sexo === 'v' ? 50 : 45.5) + 2.3 * pulgadas;
      const ajustado = ideal + 0.4 * (v.peso - ideal);
      let pesoCalc, tipoPeso;
      if (imc >= 30) { pesoCalc = ajustado; tipoPeso = 'ajustado'; }
      else if (v.edemas) { pesoCalc = ideal; tipoPeso = 'ideal'; }
      else { pesoCalc = v.peso; tipoPeso = 'real'; }

      const kcalObjetivo = Math.round(25 * pesoCalc);
      const protObjetivo = Math.round(1.3 * pesoCalc * 10) / 10;
      const kcalPropofol = v.propofol != null ? Math.round(v.propofol * 1.1) : 0;
      const kcalGlucosado = v.glucosado != null ? Math.round(v.glucosado * 0.2) : 0;
      const kcalNoNutri = kcalPropofol + kcalGlucosado;
      const kcalNutricion = Math.max(0, kcalObjetivo - kcalNoNutri);
      const pctNoNutri = kcalObjetivo > 0 ? (kcalNoNutri / kcalObjetivo) * 100 : 0;
      return {
        imc, ideal, ajustado, pesoCalc, tipoPeso, kcalObjetivo, protObjetivo,
        kcalPropofol, kcalGlucosado, kcalNoNutri, kcalNutricion, pctNoNutri,
        aguda: v.fase === 'aguda', obesidad: imc >= 30, edemas: !!v.edemas,
        sinNoNutri: v.propofol == null && v.glucosado == null
      };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: peso de 25 a 300 kg, talla de 120 a 230 cm, propofol de 0 a 3000 mL y glucosado de 0 a 5000 mL.';
      let s = `<strong>Objetivo orientativo: ${r.kcalObjetivo} kcal y ${r.protObjetivo} g de proteina al dia.</strong>`;
      s += `<br><span style="opacity:.85;">Calculado sobre el peso ${r.tipoPeso} de ${r.pesoCalc.toFixed(1)} kg (indice de masa corporal ${r.imc.toFixed(1)}).</span>`;
      if (r.obesidad) s += `<br><strong style="color:#6b4a8c;">Hay obesidad, de modo que se ha usado el peso AJUSTADO</strong> (${r.ajustado.toFixed(1)} kg) y no el real. Calcular con el peso de la bascula habria dado un objetivo groseramente excesivo, y es un error aritmetico muy frecuente.`;
      else if (r.edemas) s += `<br><span style="color:#6b4a8c;">Con edemas o ascitis, el peso de la bascula no sirve:</span> se ha usado el peso ideal de ${r.ideal.toFixed(1)} kg.`;
      if (r.kcalNoNutri > 0) {
        const partes = [];
        if (r.kcalPropofol > 0) partes.push(`propofol ${r.kcalPropofol} kcal`);
        if (r.kcalGlucosado > 0) partes.push(`suero glucosado ${r.kcalGlucosado} kcal`);
        s += `<br><strong style="color:#8a6a1f;">Calorias NO nutricionales: ${r.kcalNoNutri} kcal al dia</strong> (${partes.join(' y ')}), que suponen un ${r.pctNoNutri.toFixed(0)}% del objetivo. Descontandolas, la nutricion deberia aportar en torno a <strong>${r.kcalNutricion} kcal</strong>. No contarlas es una causa frecuente de sobrealimentacion en pautas que parecian bien calculadas.`;
      } else if (r.sinNoNutri) {
        s += '<br><span style="opacity:.75;">No se han introducido el propofol ni el suero glucosado. Conviene mirarlos: el propofol al 1% aporta alrededor de 1.1 kcal por mL y un litro de glucosado al 5% unas 200 kcal.</span>';
      }
      if (r.aguda) s += '<br><strong style="color:#8c3a34;">Fase AGUDA: no hay que alcanzar ese objetivo todavia.</strong> El organismo esta produciendo energia endogena a partir de sus propias reservas, y sumarle el aporte completo produce SOBREALIMENTACION: hiperglucemia, esteatosis, mas produccion de carbonico y peor evolucion. Se empieza por debajo y se progresa a lo largo de los primeros dias.';
      else s += '<br><span style="color:#3f6b52;">Fase TARDIA: ahora si se progresa hacia el objetivo</span>, ajustando por la tolerancia y por la evolucion clinica.';
      s += `<br><span style="opacity:.75;">Sobre la proteina: la referencia de 1.3 g/kg es orientativa, y subir muy por encima NO ha demostrado beneficio en los ensayos; en algunos subgrupos, sobre todo con lesion renal aguda, se asocio a peores resultados. Mas proteina no es automaticamente mejor.</span>`;
      s += '<br><span style="opacity:.75;">Lo ideal seria medir el gasto con calorimetria indirecta en lugar de estimarlo, pero esta disponible en muy pocos sitios. Y conviene comparar siempre lo prescrito con lo que el paciente RECIBE de verdad.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `${r.kcalObjetivo} kcal y ${r.protObjetivo} g de proteina, peso ${r.tipoPeso}`
  },

  {
    key: 'via-nutricion', title: 'Que via de nutricion', accent: '#3f6b52',
    subtitle: 'Oral, enteral o parenteral, y cuando empezar',
    incompleteMsg: 'Responde sobre la deglucion, el estado del tubo digestivo y la situacion hemodinamica.',
    fields: [
      { name: 'deglucion', id: 'nu-vi-d', type: 'select', label: 'Deglucion', row: 'r1', options: [
        { v: 'segura', t: 'Traga con seguridad' },
        { v: 'insegura', t: 'Disfagia o bajo nivel de conciencia' }
      ] },
      { name: 'digestivo', id: 'nu-vi-t', type: 'select', label: 'Tubo digestivo', row: 'r1', options: [
        { v: 'funcionante', t: 'Funcionante' },
        { v: 'parcial', t: 'Funcionante a medias, tolera poco volumen' },
        { v: 'noUtilizable', t: 'No utilizable: obstruccion, isquemia, perforacion o hemorragia activa' }
      ] },
      { name: 'hemodinamica', id: 'nu-vi-h', type: 'select', label: 'Situacion hemodinamica', row: 'r2', options: [
        { v: 'estable', t: 'Estable, o con vasoactivos a dosis estables' },
        { v: 'inestable', t: 'Choque no controlado, con vasoactivos en aumento' }
      ] },
      { name: 'dias', id: 'nu-vi-di', type: 'number', step: '1', label: 'Dias que lleva sin cubrir sus requerimientos', placeholder: 'ej. 4', row: 'r2' },
      { name: 'ingesta', id: 'nu-vi-i', type: 'checkbox', label: 'Come por boca pero claramente por debajo de lo necesario', row: 'r3' },
      { name: 'ruidos', id: 'nu-vi-r', type: 'checkbox', label: 'No se auscultan ruidos intestinales', row: 'r3' },
      { type: 'note', text: 'La regla es sencilla: si el intestino funciona, se usa; y si funciona a medias, se usa a medias y se complementa. Las contraindicaciones REALES de la via enteral son pocas: obstruccion, isquemia mesenterica, perforacion, hemorragia digestiva activa y choque no controlado con vasoactivos en aumento. La ausencia de ruidos intestinales NO es una de ellas, y esperar a que aparezcan retrasa la nutricion sin ningun fundamento.' }
    ],
    compute(v) {
      if (!v.deglucion || !v.digestivo || !v.hemodinamica || v.dias == null) return null;
      if (!(v.dias >= 0 && v.dias <= 200)) return { invalido: true };
      let via, cuando;
      if (v.digestivo === 'noUtilizable') {
        via = 'PARENTERAL';
        cuando = 'ahora, porque la via digestiva no es utilizable';
      } else if (v.hemodinamica === 'inestable') {
        via = 'DIFERIR Y ESTABILIZAR';
        cuando = 'primero la reanimacion; la nutricion enteral se inicia cuando el choque este controlado';
      } else if (v.deglucion === 'segura' && !v.ingesta) {
        via = 'ORAL';
        cuando = 'ahora, comprobando antes que la dieta le llega, le gusta y alguien le ayuda si lo necesita';
      } else if (v.deglucion === 'segura' && v.ingesta) {
        via = 'ORAL CON SUPLEMENTOS';
        cuando = 'ahora, y reevaluar en pocos dias si con eso cubre sus necesidades';
      } else if (v.digestivo === 'parcial') {
        via = 'ENTERAL, COMPLEMENTANDO SI HACE FALTA';
        cuando = 'enteral precoz a la tolerancia que admita, valorando complemento parenteral si tras varios dias no cubre lo necesario';
      } else {
        via = 'ENTERAL';
        cuando = 'precozmente, en las primeras 24 a 48 horas';
      }
      return {
        via, cuando, ruidos: !!v.ruidos, dias: v.dias,
        parcial: v.digestivo === 'parcial', inestable: v.hemodinamica === 'inestable',
        prolongado: v.dias >= 7, noUtilizable: v.digestivo === 'noUtilizable'
      };
    },
    format: r => {
      if (r.invalido) return 'Revisa los dias: se admite de 0 a 200.';
      let s = `<strong>Via recomendada: ${r.via}.</strong> Cuando: ${r.cuando}.`;
      if (r.via === 'ENTERAL' || r.parcial) s += '<br><span style="opacity:.8;">Elevar el cabecero entre 30 y 45 grados, confirmar la posicion de la sonda antes de usarla si el nivel de conciencia esta bajo, y progresar segun tolerancia CLINICA. No hay que medir el residuo gastrico de rutina para decidir si se sigue: interrumpe la nutricion sin mejorar los resultados.</span>';
      if (r.noUtilizable) s += '<br><span style="opacity:.8;">Aun con via parenteral, conviene mantener un aporte enteral MINIMO en cuanto sea posible, para preservar el trofismo de la mucosa. Y revisar cada dia si el cateter central sigue haciendo falta, porque es una puerta de entrada de infeccion.</span>';
      if (r.inestable) s += '<br><strong style="color:#8c3a34;">Con el choque no controlado, la prioridad es la reanimacion.</strong> Iniciar nutricion enteral a pleno ritmo en un paciente con vasoactivos en aumento se asocia a complicaciones digestivas graves, incluida la isquemia intestinal. Estabilizar primero, y despues empezar.';
      if (r.ruidos) s += '<br><strong style="color:#8a6a1f;">La ausencia de ruidos intestinales NO contraindica la nutricion enteral.</strong> Es uno de los mitos mas persistentes del tema y esperar a que aparezcan retrasa el inicio sin ningun fundamento.';
      if (r.prolongado) s += `<br><strong style="color:#8c3a5c;">Lleva ${r.dias} dias sin cubrir sus requerimientos:</strong> antes de iniciar el aporte hay que valorar el riesgo de SINDROME DE REALIMENTACION, mirar fosforo, potasio y magnesio, y dar tiamina antes que glucosa.`;
      s += '<br><span style="opacity:.75;">Y antes de escalar de via, conviene comprobar lo obvio: si el paciente esta en ayunas por pruebas que se van cancelando, si la dieta le llega y le gusta, y si alguien le ayuda a comer.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `via ${r.via.toLowerCase()}`
  }
];
