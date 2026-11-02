// topics/estado-de-choque/calculators.js
// 3 herramientas:
// - perfil-choque: orienta hacia uno de los cuatro perfiles con exploracion y ecografia, y avisa
//   de que los perfiles se mezclan.
// - respuesta-volumen: separa las pruebas DINAMICAS, que si predicen la respuesta a un bolo, de
//   las estaticas que no la predicen, y calcula el indice de choque.
// - hemorragia-atls: grado de hemorragia segun la Tabla 3-1 del manual ATLS 10.a edicion en
//   español que hay en Bibliografia/, transcrita del PDF ([[feedback-verificar-edicion-guias]]).
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

export const calculators = [
  {
    key: 'perfil-choque', title: 'Perfil hemodinámico del choque', accent: '#8c2e3a',
    subtitle: 'Falta volumen, falla la bomba, se ha perdido el tono, o algo obstruye',
    incompleteMsg: 'Elige la temperatura de la piel, el estado de las yugulares y los hallazgos de la ecografía.',
    fields: [
      { name: 'piel', id: 'ch-pf-p', type: 'select', label: 'Piel', row: 'r1', options: [
        { v: 'fria', t: 'Fría, pálida o moteada' },
        { v: 'caliente', t: 'Caliente y bien perfundida' }
      ] },
      { name: 'yugulares', id: 'ch-pf-y', type: 'select', label: 'Venas yugulares', row: 'r1', options: [
        { v: 'planas', t: 'Planas o colapsadas' },
        { v: 'ingurgitadas', t: 'Ingurgitadas' }
      ] },
      { name: 'eco', id: 'ch-pf-e', type: 'select', label: 'Hallazgo principal de la ecografía', options: [
        { v: 'cavaColapsada', t: 'Vena cava colapsada, corazón hiperdinámico y vacio' },
        { v: 'hipocontractil', t: 'Ventrículo izquierdo hipocontractil y dilatado' },
        { v: 'derrame', t: 'Derrame pericárdico con colapso de cavidades derechas' },
        { v: 'vdDilatado', t: 'Ventrículo derecho dilatado con septo aplanado' },
        { v: 'neumotorax', t: 'Ausencia de deslizamiento pleural con punto pulmón' },
        { v: 'hiperdinamico', t: 'Corazón hiperdinámico con vena cava no colapsada' },
        { v: 'noDisponible', t: 'No disponible o no concluyente' }
      ] },
      { name: 'liquidoLibre', id: 'ch-pf-l', type: 'checkbox', label: 'Líquido libre abdominal o sangrado evidente', row: 'r3' },
      { name: 'foco', id: 'ch-pf-f', type: 'checkbox', label: 'Fiebre o foco infeccioso identificado', row: 'r3' },
      { name: 'congestion', id: 'ch-pf-c', type: 'checkbox', label: 'Crepitantes, tercer ruido u otros signos de congestión', row: 'r4' },
      { name: 'exantema', id: 'ch-pf-x', type: 'checkbox', label: 'Exantema, angioedema o broncoespasmo de instauración en minutos', row: 'r4' },
      { type: 'note', text: 'Tres preguntas clasifican cualquier choque: falta VOLUMEN, falla la BOMBA o se ha perdido el TONO. Y una cuarta que hay que descartar siempre porque se resuelve con las manos en minutos: hay algo que OBSTRUYE. La exploración de las YUGULARES separa en segundos el hipovolémico del cardiogénico y del obstructivo, y es gratuita. Aviso importante: los perfiles se MEZCLAN, y encontrar una causa no autoriza a dejar de buscar las demás.' }
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
      if (v.foco && v.congestion) mezcla.push('un foco infeccioso junto con signos de congestión, que sugiere sepsis con disfunción miocárdica');
      if (v.liquidoLibre && (v.eco === 'neumotorax' || v.eco === 'derrame')) mezcla.push('sangrado junto con un mecanismo obstructivo, combinación clásica del politraumatizado');
      return {
        top, nombre: nombres[top], segundo: nombres[orden[1]], empate, s, mezcla,
        eco: v.eco, exantema: !!v.exantema, sinEco: v.eco === 'noDisponible',
        obstructivo: v.eco === 'derrame' || v.eco === 'vdDilatado' || v.eco === 'neumotorax'
      };
    },
    format: r => {
      let s = `<strong>El patrón apunta a un choque ${r.nombre}.</strong> `;
      if (r.top === 'hipovolemico') s += 'Falta volumen: hay que localizar la pérdida (externa, tórax, abdomen, pelvis, retroperitoneo o huesos largos) y reponer, con paso precoz a hemoderivados si es hemorrágica.';
      else if (r.top === 'distributivo') s += 'Se ha perdido el tono vascular. Hay que identificar cual de los tres: séptico (foco, fiebre), anafiláctico (minutos, exantema, angioedema) o neurogenico (bradicardia, piel seca, lesión medular alta).';
      else if (r.top === 'cardiogenico') s += 'Falla la bomba. Toca electrocardiograma y ECOCARDIOGRAMA urgentes, volumen con mucha cautela, noradrenalina y, si la causa es isquémica, REVASCULARIZACIÓN urgente, que es lo que más modifica el pronóstico.';
      else s += 'Hay un obstáculo mecánico. Es el perfil menos frecuente, el que más se pasa por alto y el que mejor responde: neumotórax a tensión, taponamiento o embolia pulmonar masiva.';

      if (r.obstructivo) {
        if (r.eco === 'neumotorax') s += '<br><strong style="color:#8c3a34;">Hallazgo de NEUMOTÓRAX.</strong> Si hay compromiso hemodinámico, la descompresión con aguja seguida de drenaje torácico es INMEDIATA y no se espera a ninguna radiografía: el neumotórax a tensión es un diagnóstico clínico.';
        if (r.eco === 'derrame') s += '<br><strong style="color:#8c3a34;">Derrame pericárdico con colapso de cavidades derechas: TAPONAMIENTO.</strong> El tratamiento es la pericardiocentesis, y el volumen solo sirve como puente mientras se prepara.';
        if (r.eco === 'vdDilatado') s += '<br><strong style="color:#8c3a34;">Ventrículo derecho dilatado con septo aplanado: sospecha de EMBOLIA PULMONAR de alto riesgo.</strong> Anticoagular ante la sospecha y valorar TROMBÓLISIS sistémica salvo contraindicación absoluta. Cuidado con el volumen: la sobrecarga empeora la dilatación del ventrículo derecho.';
      }
      if (r.exantema) s += '<br><strong style="color:#8c3a34;">Hay datos de ANAFILAXIA: adrenalina INTRAMUSCULAR de inmediato</strong> en la cara anterolateral del muslo, repetible cada 5 a 15 minutos. Los antihistamínicos y los corticoides son coadyuvantes y no deben retrasarla ni sustituirla. Y no hay que esperar a la triptasa: el diagnóstico es clínico.';
      if (r.empate) s += `<br><span style="opacity:.75;">Los datos introducidos no separan bien el perfil ${r.nombre.toLowerCase()} del ${r.segundo.toLowerCase()}. Con un cuadro ambiguo, lo que decide es la ecografía repetida y la respuesta al tratamiento.</span>`;
      if (r.mezcla.length) s += `<br><strong style="color:#8a6a1f;">Atención, hay datos de más de un perfil:</strong> ${r.mezcla.join('; y ')}. Encontrar una causa no autoriza a dejar de buscar las demás.`;
      if (r.sinEco) s += '<br><span style="opacity:.75;">Sin ecografía, la clasificación se apoya solo en la exploración. La ecografía a pie de cama contesta las cuatro preguntas en minutos y es lo que más ha cambiado el manejo del choque en la última década.</span>';
      s += '<br><span style="opacity:.75;">Sea cual sea el perfil, la reanimación compra tiempo: lo que resuelve el choque es corregir el MECANISMO.</span>';
      return s;
    },
    fragment: r => `perfil ${r.nombre.toLowerCase()}`
  },

  {
    key: 'respuesta-volumen', title: 'Va a responder a un bolo de volumen?', accent: '#3f6b52',
    subtitle: 'Que pruebas predicen la respuesta y cuales no, más el índice de choque',
    incompleteMsg: 'Introduce la frecuencia cardiaca y la tensión sistólica, y elige la prueba dinámica realizada.',
    fields: [
      { name: 'fc', id: 'ch-rv-fc', type: 'number', step: '1', label: 'Frecuencia cardiaca (por minuto)', placeholder: 'ej. 118', row: 'r1' },
      { name: 'tas', id: 'ch-rv-t', type: 'number', step: '1', label: 'Tensión arterial sistólica (mmHg)', placeholder: 'ej. 96', row: 'r1' },
      { name: 'prueba', id: 'ch-rv-p', type: 'select', label: 'Prueba dinámica realizada', options: [
        { v: 'piernas', t: 'Elevación pasiva de las piernas' },
        { v: 'vpp', t: 'Variación de la presión de pulso, en ventilado sin esfuerzos' },
        { v: 'bolo', t: 'Bolo de prueba de 250 a 500 mL' },
        { v: 'ninguna', t: 'Ninguna todavía' }
      ] },
      { name: 'resultado', id: 'ch-rv-r', type: 'select', label: 'Resultado de la prueba', row: 'r3', options: [
        { v: 'positiva', t: 'Aumenta el gasto o la presión de pulso de forma clara' },
        { v: 'negativa', t: 'No cambia' },
        { v: 'pendiente', t: 'Todavía no valorado' }
      ] },
      { name: 'pvc', id: 'ch-rv-pvc', type: 'checkbox', label: 'Se esta usando la presión venosa central para decidir el volumen', row: 'r3' },
      { name: 'sobrecarga', id: 'ch-rv-s', type: 'checkbox', label: 'Signos de sobrecarga: líneas B en el pulmón, edemas o empeoramiento de la oxigenación', row: 'r4' },
      { name: 'vasopresor', id: 'ch-rv-v', type: 'checkbox', label: 'Ya recibe vasopresor', row: 'r4' },
      { type: 'note', text: 'Solo la mitad de los pacientes en choque responde a un bolo de volumen; al resto se le añade edema pulmonar, intestinal y renal sin ganar nada. Las pruebas DINÁMICAS predicen la respuesta; las ESTÁTICAS, y en particular la presión venosa central, NO la predicen, pese a lo extendido de la costumbre. La elevación pasiva de las piernas es la más útil porque equivale a un bolo REVERSIBLE que no deja líquido dentro.' }
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
      if (r.invalido) return 'Revisa los valores: frecuencia cardiaca de 20 a 300 y tensión sistólica de 40 a 300 mmHg.';
      let s = `<strong>Índice de choque ${r.indice.toFixed(2)}: ${r.bandaIndice}.</strong> `;
      if (r.bandaIndice !== 'NORMAL') s += 'Por encima de 0.9 sugiere compromiso hemodinámico aunque la frecuencia y la tensión esten cada una dentro de rango. Es especialmente útil en la hemorragia, en la embarazada y en el paciente joven, que compensan muy bien hasta que se descompensan de golpe.';
      else s += 'Un índice normal no descarta el choque: hay que seguir mirando la perfusión, que es lo que define el cuadro.';

      if (r.respondedor) {
        s += '<br><strong style="color:#3f6b52;">Prueba dinámica POSITIVA: el paciente es respondedor a volumen.</strong> Corresponde dar un bolo de cristaloide balanceado y REEVALUAR de nuevo después, porque la condición de respondedor se pierde a medida que se llena.';
      } else if (r.noRespondedor) {
        s += '<br><strong style="color:#8c3a34;">Prueba dinámica NEGATIVA: no es respondedor.</strong> Más volumen no va a aumentar el gasto y solo añadira edema. Lo que toca es vasopresor, inotrópico si el problema es la bomba, y sobre todo revisar si la CAUSA esta corregida.';
      } else if (r.dinamica) {
        s += '<br><span style="opacity:.75;">La prueba esta hecha pero el resultado no se ha valorado. Hay que medir el efecto: aumento del gasto por ecografía, de la presión de pulso o de la integral velocidad-tiempo.</span>';
      } else {
        s += '<br><strong style="color:#8a6a1f;">No se ha hecho ninguna prueba dinámica.</strong> Antes de seguir dando bolos conviene hacer una elevación pasiva de las piernas, que equivale a un bolo reversible y no cuesta nada.';
      }
      if (r.prueba === 'piernas') s += '<br><span style="opacity:.75;">La elevación pasiva de las piernas es la prueba con mejor rendimiento y la única que no deja líquido dentro del paciente si resulta negativa. Requiere medir el efecto, no solo mirar la tensión.</span>';
      if (r.prueba === 'vpp') s += '<br><span style="opacity:.75;">La variación de la presión de pulso solo es valida en el paciente ventilado, sin esfuerzos respiratorios, en ritmo sinusal y con volumen corriente suficiente. Fuera de esas condiciones no sirve.</span>';
      if (r.pvc) s += '<br><strong style="color:#8c3a34;">No se debe usar la presión venosa central para decidir si dar volumen:</strong> no predice la respuesta, como han mostrado de forma consistente los metaanálisis. Puede aportar información sobre congestión, pero no responde a esta pregunta.';
      if (r.sobrecarga) s += '<br><strong style="color:#8c3a34;">Hay signos de SOBRECARGA.</strong> Es una señal de parar el volumen con independencia de las pruebas dinámicas, y de plantear el paso a balance negativo en cuanto la perfusión lo permita.';
      if (!r.vasopresor && r.noRespondedor) s += '<br><span style="opacity:.75;">Si persiste la hipotensión y el paciente no responde a volumen, corresponde iniciar NORADRENALINA sin esperar, incluso por via periférica con vigilancia mientras se canaliza una central.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `índice de choque ${r.indice.toFixed(2)}${r.respondedor ? ', respondedor' : r.noRespondedor ? ', no respondedor' : ''}`
  },

  {
    key: 'hemorragia-atls', title: 'Grado de hemorragia', accent: '#7a3f2e',
    subtitle: 'Los cuatro grados del manual de trauma, y por que la tensión engaña',
    incompleteMsg: 'Introduce frecuencia cardiaca, tensión sistólica y diastólica, frecuencia respiratoria y Glasgow, y elige la diuresis.',
    fields: [
      { name: 'fc', id: 'ch-hg-fc', type: 'number', step: '1', label: 'Frecuencia cardiaca (por minuto)', placeholder: 'ej. 122', row: 'r1' },
      { name: 'tas', id: 'ch-hg-s', type: 'number', step: '1', label: 'Tensión sistólica (mmHg)', placeholder: 'ej. 104', row: 'r1' },
      { name: 'tad', id: 'ch-hg-d', type: 'number', step: '1', label: 'Tensión diastólica (mmHg)', placeholder: 'ej. 82', row: 'r2' },
      { name: 'fr', id: 'ch-hg-fr', type: 'number', step: '1', label: 'Frecuencia respiratoria (por minuto)', placeholder: 'ej. 26', row: 'r2' },
      { name: 'gcs', id: 'ch-hg-g', type: 'number', step: '1', label: 'Escala de coma de Glasgow (3 a 15)', placeholder: 'ej. 14', row: 'r3' },
      { name: 'diuresis', id: 'ch-hg-di', type: 'select', label: 'Diuresis', row: 'r3', options: [
        { v: 'normal', t: 'Conservada' },
        { v: 'reducida', t: 'Reducida' },
        { v: 'minima', t: 'Mínima o ausente' }
      ] },
      { name: 'be', id: 'ch-hg-be', type: 'number', step: '0.5', required: false, label: 'Déficit de base (mEq/L, en negativo)', placeholder: 'ej. -7', row: 'r4' },
      { name: 'anticoagulado', id: 'ch-hg-a', type: 'checkbox', label: 'Anticoagulado, antiagregado, betabloqueado o de edad avanzada', row: 'r4' },
      { type: 'note', text: 'Transcrito de la Tabla 3-1 del manual ATLS 10.a edicion en español. El dato más útil para la práctica: la TENSIÓN SISTÓLICA se mantiene normal hasta el grado III. Lo primero que se altera es la PRESIÓN DE PULSO, porque la vasoconstricción eleva la diastólica. El déficit de base es la aportacion de esta edicion y se altera antes que la tensión. La estimación de la pérdida es orientativa: manda la respuesta del paciente a la reposición.' }
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
      const perdida = { 1: 'menos del 15%', 2: 'del 15 al 30%', 3: 'del 31 al 40%', 4: 'más del 40%' }[grado];
      const etiqueta = { 1: 'I', 2: 'II (leve)', 3: 'III (moderado)', 4: 'IV (severo)' }[grado];
      const sangre = { 1: 'monitorizar, habitualmente sin transfusión', 2: 'transfusión posible', 3: 'transfusión SI indicada', 4: 'activar el PROTOCOLO DE TRANSFUSIÓN MASIVA' }[grado];
      const indice = v.fc / v.tas;
      return {
        grado, etiqueta, perdida, sangre, pp, ppEstrecha, indice,
        tasNormal: v.tas >= 110, be: v.be, sinBe: v.be == null,
        anticoagulado: !!v.anticoagulado, fc: v.fc
      };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: frecuencia cardiaca de 20 a 300, sistólica de 40 a 300 mmHg, diastólica menor que la sistólica, frecuencia respiratoria de 1 a 80, Glasgow de 3 a 15 y déficit de base de -40 a 20.';
      let s = `<strong>Hemorragia de grado ${r.etiqueta}: pérdida estimada ${r.perdida} del volumen sanguíneo.</strong> Hemoderivados: ${r.sangre}.`;
      s += `<br><span style="opacity:.85;">Presión de pulso ${r.pp} mmHg. Índice de choque ${r.indice.toFixed(2)}.</span>`;
      if (r.ppEstrecha && r.tasNormal) s += '<br><strong style="color:#8a6a1f;">La presión de pulso ya esta estrechada con una sistólica todavía normal.</strong> Ese es exactamente el patrón precoz de la hemorragia: la vasoconstricción eleva la diastólica antes de que caiga la sistólica, que no lo hace hasta el grado III. Confiar en la sistólica retrasa el diagnóstico.';
      if (r.grado >= 3) s += '<br><strong style="color:#8c3a34;">Prioridad absoluta: CONTROLAR la hemorragia.</strong> Compresión, torniquete, empaquetamiento o faja pélvica según el origen, y traslado urgente a quirófano o a radiología intervencionista. Ácido tranexámico precoz, hemoderivados en proporciones equilibradas y prevención activa de la HIPOTERMIA.';
      if (r.grado === 4) s += '<br><strong style="color:#8c3a34;">Grado IV: protocolo de transfusión masiva.</strong> Vigilar la triada letal (hipotermia, acidosis y coagulopatía) y reponer CALCIO, que cae por el citrato de la transfusión.';
      if (r.be != null && r.be <= -6) s += `<br><span style="opacity:.8;">El déficit de base de ${r.be} mEq/L apoya por si solo una hemorragia al menos moderada, y es más sensible que la tensión arterial.</span>`;
      else if (r.sinBe) s += '<br><span style="opacity:.75;">No se ha introducido el déficit de base, que es la aportacion de la última edicion y se altera antes que la tensión. Merece la pena pedir una gasometría.</span>';
      if (r.anticoagulado) s += '<br><strong style="color:#8a6a1f;">Atención al perfil del paciente:</strong> el betabloqueado y el anciano pueden NO taquicardizar, y el anticoagulado sangra más de lo que sugieren sus constantes. En ambos casos la escala INFRAESTIMA la gravedad y hay que apoyarse más en la perfusión y en el déficit de base.';
      s += '<br><span style="opacity:.75;">La hemoglobina inicial puede ser NORMAL en la hemorragia aguda, porque aun no ha habido hemodilución: un valor normal no descarta un sangrado importante.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `hemorragia grado ${r.etiqueta}, pérdida ${r.perdida}`
  }
];
