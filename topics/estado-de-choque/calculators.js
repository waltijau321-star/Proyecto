// topics/estado-de-choque/calculators.js
// 3 herramientas:
// - perfil-choque: orienta hacia uno de los cuatro perfiles con exploracion y ecografia, y avisa
//   de que los perfiles se mezclan.
// - respuesta-volumen: separa las pruebas DINAMICAS, que si predicen la respuesta a un bolo, de
//   las estaticas que no la predicen, y calcula el indice de choque.
// - hemorragia-atls: grado de hemorragia segun la Tabla 3-1 del manual ATLS 10.a edicion en
//   espa&#241;ol que hay en Bibliografia/, transcrita del PDF ([[feedback-verificar-edicion-guias]]).
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

export const calculators = [
  {
    key: 'perfil-choque', title: 'Perfil hemodinamico del choque', accent: '#8c2e3a',
    subtitle: 'Falta volumen, falla la bomba, se ha perdido el tono, o algo obstruye',
    incompleteMsg: 'Elige la temperatura de la piel, el estado de las yugulares y los hallazgos de la ecografia.',
    fields: [
      { name: 'piel', id: 'ch-pf-p', type: 'select', label: 'Piel', row: 'r1', options: [
        { v: 'fria', t: 'Fria, palida o moteada' },
        { v: 'caliente', t: 'Caliente y bien perfundida' }
      ] },
      { name: 'yugulares', id: 'ch-pf-y', type: 'select', label: 'Venas yugulares', row: 'r1', options: [
        { v: 'planas', t: 'Planas o colapsadas' },
        { v: 'ingurgitadas', t: 'Ingurgitadas' }
      ] },
      { name: 'eco', id: 'ch-pf-e', type: 'select', label: 'Hallazgo principal de la ecografia', options: [
        { v: 'cavaColapsada', t: 'Vena cava colapsada, corazon hiperdinamico y vacio' },
        { v: 'hipocontractil', t: 'Ventriculo izquierdo hipocontractil y dilatado' },
        { v: 'derrame', t: 'Derrame pericardico con colapso de cavidades derechas' },
        { v: 'vdDilatado', t: 'Ventriculo derecho dilatado con septo aplanado' },
        { v: 'neumotorax', t: 'Ausencia de deslizamiento pleural con punto pulmon' },
        { v: 'hiperdinamico', t: 'Corazon hiperdinamico con vena cava no colapsada' },
        { v: 'noDisponible', t: 'No disponible o no concluyente' }
      ] },
      { name: 'liquidoLibre', id: 'ch-pf-l', type: 'checkbox', label: 'Liquido libre abdominal o sangrado evidente', row: 'r3' },
      { name: 'foco', id: 'ch-pf-f', type: 'checkbox', label: 'Fiebre o foco infeccioso identificado', row: 'r3' },
      { name: 'congestion', id: 'ch-pf-c', type: 'checkbox', label: 'Crepitantes, tercer ruido u otros signos de congestion', row: 'r4' },
      { name: 'exantema', id: 'ch-pf-x', type: 'checkbox', label: 'Exantema, angioedema o broncoespasmo de instauracion en minutos', row: 'r4' },
      { type: 'note', text: 'Tres preguntas clasifican cualquier choque: falta VOLUMEN, falla la BOMBA o se ha perdido el TONO. Y una cuarta que hay que descartar siempre porque se resuelve con las manos en minutos: hay algo que OBSTRUYE. La exploracion de las YUGULARES separa en segundos el hipovolemico del cardiogenico y del obstructivo, y es gratuita. Aviso importante: los perfiles se MEZCLAN, y encontrar una causa no autoriza a dejar de buscar las demas.' }
    ],
    compute(v) {
      if (!v.piel || !v.yugulares || !v.eco) return null;
      const s = { hipovolemico: 0, distributivo: 0, cardiogenico: 0, obstructivo: 0 };
      if (v.piel === 'fria') { s.hipovolemico += 2; s.cardiogenico += 2; s.obstructivo += 2; }
      else { s.distributivo += 4; }
      if (v.yugulares === 'planas') { s.hipovolemico += 3; s.distributivo += 1; }
      else { s.cardiogenico += 3; s.obstructivo += 3; }
      if (v.eco === 'cavaColapsada') s.hipovolemico += 4;
      if (v.eco === 'hipocontractil') s.cardiogenico += 4;
      if (v.eco === 'derrame') s.obstructivo += 5;
      if (v.eco === 'vdDilatado') s.obstructivo += 5;
      if (v.eco === 'neumotorax') s.obstructivo += 5;
      if (v.eco === 'hiperdinamico') s.distributivo += 3;
      if (v.liquidoLibre) s.hipovolemico += 4;
      if (v.foco) s.distributivo += 3;
      if (v.congestion) s.cardiogenico += 3;
      if (v.exantema) s.distributivo += 4;

      const orden = Object.keys(s).sort((a, b) => s[b] - s[a]);
      const top = orden[0];
      const empate = s[orden[1]] === s[top];
      const nombres = { hipovolemico: 'HIPOVOLEMICO', distributivo: 'DISTRIBUTIVO', cardiogenico: 'CARDIOGENICO', obstructivo: 'OBSTRUCTIVO' };
      const mezcla = [];
      if (v.foco && v.congestion) mezcla.push('un foco infeccioso junto con signos de congestion, que sugiere sepsis con disfuncion miocardica');
      if (v.liquidoLibre && (v.eco === 'neumotorax' || v.eco === 'derrame')) mezcla.push('sangrado junto con un mecanismo obstructivo, combinacion clasica del politraumatizado');
      return {
        top, nombre: nombres[top], segundo: nombres[orden[1]], empate, s, mezcla,
        eco: v.eco, exantema: !!v.exantema, sinEco: v.eco === 'noDisponible',
        obstructivo: v.eco === 'derrame' || v.eco === 'vdDilatado' || v.eco === 'neumotorax'
      };
    },
    format: r => {
      let s = `<strong>El patron apunta a un choque ${r.nombre}.</strong> `;
      if (r.top === 'hipovolemico') s += 'Falta volumen: hay que localizar la perdida (externa, torax, abdomen, pelvis, retroperitoneo o huesos largos) y reponer, con paso precoz a hemoderivados si es hemorragica.';
      else if (r.top === 'distributivo') s += 'Se ha perdido el tono vascular. Hay que identificar cual de los tres: septico (foco, fiebre), anafilactico (minutos, exantema, angioedema) o neurogenico (bradicardia, piel seca, lesion medular alta).';
      else if (r.top === 'cardiogenico') s += 'Falla la bomba. Toca electrocardiograma y ECOCARDIOGRAMA urgentes, volumen con mucha cautela, noradrenalina y, si la causa es isquemica, REVASCULARIZACION urgente, que es lo que mas modifica el pronostico.';
      else s += 'Hay un obstaculo mecanico. Es el perfil menos frecuente, el que mas se pasa por alto y el que mejor responde: neumotorax a tension, taponamiento o embolia pulmonar masiva.';

      if (r.obstructivo) {
        if (r.eco === 'neumotorax') s += '<br><strong style="color:#8c3a34;">Hallazgo de NEUMOTORAX.</strong> Si hay compromiso hemodinamico, la descompresion con aguja seguida de drenaje toracico es INMEDIATA y no se espera a ninguna radiografia: el neumotorax a tension es un diagnostico clinico.';
        if (r.eco === 'derrame') s += '<br><strong style="color:#8c3a34;">Derrame pericardico con colapso de cavidades derechas: TAPONAMIENTO.</strong> El tratamiento es la pericardiocentesis, y el volumen solo sirve como puente mientras se prepara.';
        if (r.eco === 'vdDilatado') s += '<br><strong style="color:#8c3a34;">Ventriculo derecho dilatado con septo aplanado: sospecha de EMBOLIA PULMONAR de alto riesgo.</strong> Anticoagular ante la sospecha y valorar TROMBOLISIS sistemica salvo contraindicacion absoluta. Cuidado con el volumen: la sobrecarga empeora la dilatacion del ventriculo derecho.';
      }
      if (r.exantema) s += '<br><strong style="color:#8c3a34;">Hay datos de ANAFILAXIA: adrenalina INTRAMUSCULAR de inmediato</strong> en la cara anterolateral del muslo, repetible cada 5 a 15 minutos. Los antihistaminicos y los corticoides son coadyuvantes y no deben retrasarla ni sustituirla. Y no hay que esperar a la triptasa: el diagnostico es clinico.';
      if (r.empate) s += `<br><span style="opacity:.75;">Los datos introducidos no separan bien el perfil ${r.nombre.toLowerCase()} del ${r.segundo.toLowerCase()}. Con un cuadro ambiguo, lo que decide es la ecografia repetida y la respuesta al tratamiento.</span>`;
      if (r.mezcla.length) s += `<br><strong style="color:#8a6a1f;">Atencion, hay datos de mas de un perfil:</strong> ${r.mezcla.join('; y ')}. Encontrar una causa no autoriza a dejar de buscar las demas.`;
      if (r.sinEco) s += '<br><span style="opacity:.75;">Sin ecografia, la clasificacion se apoya solo en la exploracion. La ecografia a pie de cama contesta las cuatro preguntas en minutos y es lo que mas ha cambiado el manejo del choque en la ultima decada.</span>';
      s += '<br><span style="opacity:.75;">Sea cual sea el perfil, la reanimacion compra tiempo: lo que resuelve el choque es corregir el MECANISMO.</span>';
      return s;
    },
    fragment: r => `perfil ${r.nombre.toLowerCase()}`
  },

  {
    key: 'respuesta-volumen', title: 'Va a responder a un bolo de volumen?', accent: '#3f6b52',
    subtitle: 'Que pruebas predicen la respuesta y cuales no, mas el indice de choque',
    incompleteMsg: 'Introduce la frecuencia cardiaca y la tension sistolica, y elige la prueba dinamica realizada.',
    fields: [
      { name: 'fc', id: 'ch-rv-fc', type: 'number', step: '1', label: 'Frecuencia cardiaca (por minuto)', placeholder: 'ej. 118', row: 'r1' },
      { name: 'tas', id: 'ch-rv-t', type: 'number', step: '1', label: 'Tension arterial sistolica (mmHg)', placeholder: 'ej. 96', row: 'r1' },
      { name: 'prueba', id: 'ch-rv-p', type: 'select', label: 'Prueba dinamica realizada', options: [
        { v: 'piernas', t: 'Elevacion pasiva de las piernas' },
        { v: 'vpp', t: 'Variacion de la presion de pulso, en ventilado sin esfuerzos' },
        { v: 'bolo', t: 'Bolo de prueba de 250 a 500 mL' },
        { v: 'ninguna', t: 'Ninguna todavia' }
      ] },
      { name: 'resultado', id: 'ch-rv-r', type: 'select', label: 'Resultado de la prueba', row: 'r3', options: [
        { v: 'positiva', t: 'Aumenta el gasto o la presion de pulso de forma clara' },
        { v: 'negativa', t: 'No cambia' },
        { v: 'pendiente', t: 'Todavia no valorado' }
      ] },
      { name: 'pvc', id: 'ch-rv-pvc', type: 'checkbox', label: 'Se esta usando la presion venosa central para decidir el volumen', row: 'r3' },
      { name: 'sobrecarga', id: 'ch-rv-s', type: 'checkbox', label: 'Signos de sobrecarga: lineas B en el pulmon, edemas o empeoramiento de la oxigenacion', row: 'r4' },
      { name: 'vasopresor', id: 'ch-rv-v', type: 'checkbox', label: 'Ya recibe vasopresor', row: 'r4' },
      { type: 'note', text: 'Solo la mitad de los pacientes en choque responde a un bolo de volumen; al resto se le a&#241;ade edema pulmonar, intestinal y renal sin ganar nada. Las pruebas DINAMICAS predicen la respuesta; las ESTATICAS, y en particular la presion venosa central, NO la predicen, pese a lo extendido de la costumbre. La elevacion pasiva de las piernas es la mas util porque equivale a un bolo REVERSIBLE que no deja liquido dentro.' }
    ],
    compute(v) {
      if (v.fc == null || v.tas == null || !v.prueba || !v.resultado) return null;
      if (!(v.fc >= 20 && v.fc <= 300)) return { invalido: true };
      if (!(v.tas >= 40 && v.tas <= 300)) return { invalido: true };
      const indice = v.fc / v.tas;
      let bandaIndice;
      if (indice >= 1.4) bandaIndice = 'MUY ELEVADO';
      else if (indice >= 0.9) bandaIndice = 'ELEVADO';
      else bandaIndice = 'NORMAL';
      const dinamica = v.prueba === 'piernas' || v.prueba === 'vpp' || v.prueba === 'bolo';
      return {
        indice, bandaIndice, prueba: v.prueba, resultado: v.resultado, dinamica,
        respondedor: dinamica && v.resultado === 'positiva',
        noRespondedor: dinamica && v.resultado === 'negativa',
        pvc: !!v.pvc, sobrecarga: !!v.sobrecarga, vasopresor: !!v.vasopresor
      };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: frecuencia cardiaca de 20 a 300 y tension sistolica de 40 a 300 mmHg.';
      let s = `<strong>Indice de choque ${r.indice.toFixed(2)}: ${r.bandaIndice}.</strong> `;
      if (r.bandaIndice !== 'NORMAL') s += 'Por encima de 0.9 sugiere compromiso hemodinamico aunque la frecuencia y la tension esten cada una dentro de rango. Es especialmente util en la hemorragia, en la embarazada y en el paciente joven, que compensan muy bien hasta que se descompensan de golpe.';
      else s += 'Un indice normal no descarta el choque: hay que seguir mirando la perfusion, que es lo que define el cuadro.';

      if (r.respondedor) {
        s += '<br><strong style="color:#3f6b52;">Prueba dinamica POSITIVA: el paciente es respondedor a volumen.</strong> Corresponde dar un bolo de cristaloide balanceado y REEVALUAR de nuevo despues, porque la condicion de respondedor se pierde a medida que se llena.';
      } else if (r.noRespondedor) {
        s += '<br><strong style="color:#8c3a34;">Prueba dinamica NEGATIVA: no es respondedor.</strong> Mas volumen no va a aumentar el gasto y solo a&#241;adira edema. Lo que toca es vasopresor, inotropico si el problema es la bomba, y sobre todo revisar si la CAUSA esta corregida.';
      } else if (r.dinamica) {
        s += '<br><span style="opacity:.75;">La prueba esta hecha pero el resultado no se ha valorado. Hay que medir el efecto: aumento del gasto por ecografia, de la presion de pulso o de la integral velocidad-tiempo.</span>';
      } else {
        s += '<br><strong style="color:#8a6a1f;">No se ha hecho ninguna prueba dinamica.</strong> Antes de seguir dando bolos conviene hacer una elevacion pasiva de las piernas, que equivale a un bolo reversible y no cuesta nada.';
      }
      if (r.prueba === 'piernas') s += '<br><span style="opacity:.75;">La elevacion pasiva de las piernas es la prueba con mejor rendimiento y la unica que no deja liquido dentro del paciente si resulta negativa. Requiere medir el efecto, no solo mirar la tension.</span>';
      if (r.prueba === 'vpp') s += '<br><span style="opacity:.75;">La variacion de la presion de pulso solo es valida en el paciente ventilado, sin esfuerzos respiratorios, en ritmo sinusal y con volumen corriente suficiente. Fuera de esas condiciones no sirve.</span>';
      if (r.pvc) s += '<br><strong style="color:#8c3a34;">No se debe usar la presion venosa central para decidir si dar volumen:</strong> no predice la respuesta, como han mostrado de forma consistente los metaanalisis. Puede aportar informacion sobre congestion, pero no responde a esta pregunta.';
      if (r.sobrecarga) s += '<br><strong style="color:#8c3a34;">Hay signos de SOBRECARGA.</strong> Es una se&#241;al de parar el volumen con independencia de las pruebas dinamicas, y de plantear el paso a balance negativo en cuanto la perfusion lo permita.';
      if (!r.vasopresor && r.noRespondedor) s += '<br><span style="opacity:.75;">Si persiste la hipotension y el paciente no responde a volumen, corresponde iniciar NORADRENALINA sin esperar, incluso por via periferica con vigilancia mientras se canaliza una central.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `indice de choque ${r.indice.toFixed(2)}${r.respondedor ? ', respondedor' : r.noRespondedor ? ', no respondedor' : ''}`
  },

  {
    key: 'hemorragia-atls', title: 'Grado de hemorragia', accent: '#7a3f2e',
    subtitle: 'Los cuatro grados del manual de trauma, y por que la tension enga&#241;a',
    incompleteMsg: 'Introduce frecuencia cardiaca, tension sistolica y diastolica, frecuencia respiratoria y Glasgow, y elige la diuresis.',
    fields: [
      { name: 'fc', id: 'ch-hg-fc', type: 'number', step: '1', label: 'Frecuencia cardiaca (por minuto)', placeholder: 'ej. 122', row: 'r1' },
      { name: 'tas', id: 'ch-hg-s', type: 'number', step: '1', label: 'Tension sistolica (mmHg)', placeholder: 'ej. 104', row: 'r1' },
      { name: 'tad', id: 'ch-hg-d', type: 'number', step: '1', label: 'Tension diastolica (mmHg)', placeholder: 'ej. 82', row: 'r2' },
      { name: 'fr', id: 'ch-hg-fr', type: 'number', step: '1', label: 'Frecuencia respiratoria (por minuto)', placeholder: 'ej. 26', row: 'r2' },
      { name: 'gcs', id: 'ch-hg-g', type: 'number', step: '1', label: 'Escala de coma de Glasgow (3 a 15)', placeholder: 'ej. 14', row: 'r3' },
      { name: 'diuresis', id: 'ch-hg-di', type: 'select', label: 'Diuresis', row: 'r3', options: [
        { v: 'normal', t: 'Conservada' },
        { v: 'reducida', t: 'Reducida' },
        { v: 'minima', t: 'Minima o ausente' }
      ] },
      { name: 'be', id: 'ch-hg-be', type: 'number', step: '0.5', required: false, label: 'Deficit de base (mEq/L, en negativo)', placeholder: 'ej. -7', row: 'r4' },
      { name: 'anticoagulado', id: 'ch-hg-a', type: 'checkbox', label: 'Anticoagulado, antiagregado, betabloqueado o de edad avanzada', row: 'r4' },
      { type: 'note', text: 'Transcrito de la Tabla 3-1 del manual ATLS 10.a edicion en espa&#241;ol. El dato mas util para la practica: la TENSION SISTOLICA se mantiene normal hasta el grado III. Lo primero que se altera es la PRESION DE PULSO, porque la vasoconstriccion eleva la diastolica. El deficit de base es la aportacion de esta edicion y se altera antes que la tension. La estimacion de la perdida es orientativa: manda la respuesta del paciente a la reposicion.' }
    ],
    compute(v) {
      if (v.fc == null || v.tas == null || v.tad == null || v.fr == null || v.gcs == null || !v.diuresis) return null;
      if (!(v.fc >= 20 && v.fc <= 300)) return { invalido: true };
      if (!(v.tas >= 40 && v.tas <= 300)) return { invalido: true };
      if (!(v.tad >= 10 && v.tad < v.tas)) return { invalido: true };
      if (!(v.fr > 0 && v.fr <= 80)) return { invalido: true };
      if (!(v.gcs >= 3 && v.gcs <= 15)) return { invalido: true };
      if (v.be != null && !(v.be >= -40 && v.be <= 20)) return { invalido: true };

      const pp = v.tas - v.tad;
      const ppEstrecha = pp < 35;
      const g = [];
      // cada parametro propone un grado minimo
      g.push(v.fc > 140 ? 4 : v.fc > 120 ? 3 : v.fc > 100 ? 2 : 1);
      g.push(v.tas < 90 ? 4 : v.tas < 110 ? 3 : 1);
      g.push(ppEstrecha ? 2 : 1);
      g.push(v.fr > 30 ? 4 : v.fr > 22 ? 3 : 1);
      g.push({ normal: 1, reducida: 3, minima: 4 }[v.diuresis]);
      g.push(v.gcs < 14 ? 3 : 1);
      if (v.be != null) g.push(v.be <= -10 ? 4 : v.be <= -6 ? 3 : v.be <= -2 ? 2 : 1);
      const grado = Math.max.apply(null, g);
      const perdida = { 1: 'menos del 15%', 2: 'del 15 al 30%', 3: 'del 31 al 40%', 4: 'mas del 40%' }[grado];
      const etiqueta = { 1: 'I', 2: 'II (leve)', 3: 'III (moderado)', 4: 'IV (severo)' }[grado];
      const sangre = { 1: 'monitorizar, habitualmente sin transfusion', 2: 'transfusion posible', 3: 'transfusion SI indicada', 4: 'activar el PROTOCOLO DE TRANSFUSION MASIVA' }[grado];
      const indice = v.fc / v.tas;
      return {
        grado, etiqueta, perdida, sangre, pp, ppEstrecha, indice,
        tasNormal: v.tas >= 110, be: v.be, sinBe: v.be == null,
        anticoagulado: !!v.anticoagulado, fc: v.fc
      };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: frecuencia cardiaca de 20 a 300, sistolica de 40 a 300 mmHg, diastolica menor que la sistolica, frecuencia respiratoria de 1 a 80, Glasgow de 3 a 15 y deficit de base de -40 a 20.';
      let s = `<strong>Hemorragia de grado ${r.etiqueta}: perdida estimada ${r.perdida} del volumen sanguineo.</strong> Hemoderivados: ${r.sangre}.`;
      s += `<br><span style="opacity:.85;">Presion de pulso ${r.pp} mmHg. Indice de choque ${r.indice.toFixed(2)}.</span>`;
      if (r.ppEstrecha && r.tasNormal) s += '<br><strong style="color:#8a6a1f;">La presion de pulso ya esta estrechada con una sistolica todavia normal.</strong> Ese es exactamente el patron precoz de la hemorragia: la vasoconstriccion eleva la diastolica antes de que caiga la sistolica, que no lo hace hasta el grado III. Confiar en la sistolica retrasa el diagnostico.';
      if (r.grado >= 3) s += '<br><strong style="color:#8c3a34;">Prioridad absoluta: CONTROLAR la hemorragia.</strong> Compresion, torniquete, empaquetamiento o faja pelvica segun el origen, y traslado urgente a quirofano o a radiologia intervencionista. Acido tranexamico precoz, hemoderivados en proporciones equilibradas y prevencion activa de la HIPOTERMIA.';
      if (r.grado === 4) s += '<br><strong style="color:#8c3a34;">Grado IV: protocolo de transfusion masiva.</strong> Vigilar la triada letal (hipotermia, acidosis y coagulopatia) y reponer CALCIO, que cae por el citrato de la transfusion.';
      if (r.be != null && r.be <= -6) s += `<br><span style="opacity:.8;">El deficit de base de ${r.be} mEq/L apoya por si solo una hemorragia al menos moderada, y es mas sensible que la tension arterial.</span>`;
      else if (r.sinBe) s += '<br><span style="opacity:.75;">No se ha introducido el deficit de base, que es la aportacion de la ultima edicion y se altera antes que la tension. Merece la pena pedir una gasometria.</span>';
      if (r.anticoagulado) s += '<br><strong style="color:#8a6a1f;">Atencion al perfil del paciente:</strong> el betabloqueado y el anciano pueden NO taquicardizar, y el anticoagulado sangra mas de lo que sugieren sus constantes. En ambos casos la escala INFRAESTIMA la gravedad y hay que apoyarse mas en la perfusion y en el deficit de base.';
      s += '<br><span style="opacity:.75;">La hemoglobina inicial puede ser NORMAL en la hemorragia aguda, porque aun no ha habido hemodilucion: un valor normal no descarta un sangrado importante.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `hemorragia grado ${r.etiqueta}, perdida ${r.perdida}`
  }
];
