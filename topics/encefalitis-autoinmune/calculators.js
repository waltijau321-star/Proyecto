// topics/encefalitis-autoinmune/calculators.js
// 3 herramientas (el tema no pide mas: lo que decide aqui es reconocer, tratar pronto y buscar
// el tumor, no calcular):
// - criterios-graus: comprueba los criterios de encefalitis autoinmune POSIBLE, que son los que
//   permiten tratar sin esperar a los anticuerpos, y los de encefalitis limbica definida.
// - cribado-tumoral-autoinmune: que tumor buscar, con que prueba y cada cuanto repetirlo.
// - neos: cinco variables que estiman la situacion funcional al a&#241;o en la encefalitis por
//   anticuerpos anti-receptor de NMDA.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

const TUMORES = {
  nmda: {
    nombre: 'Anticuerpos anti-receptor de NMDA', clase: 'superficie',
    tumor: 'TERATOMA DE OVARIO en la mujer joven, y de forma mucho mas rara teratoma testicular en el varon',
    prueba: 'ecografia o resonancia PELVICA dirigida, porque el teratoma puede ser peque&#241;o y no verse en la tomografia; ecografia testicular en el varon joven',
    meses: 6, anos: 2,
    nota: 'La asociacion con teratoma es alta en la mujer joven y disminuye en la ni&#241;a y en la mujer de mas edad. Su EXTIRPACION forma parte del tratamiento: mejora el pronostico y reduce las recaidas.'
  },
  lgi1: {
    nombre: 'Anticuerpos anti-LGI1', clase: 'superficie',
    tumor: 'rara vez tumoral; cuando lo hay, timoma',
    prueba: 'tomografia de torax buscando timoma, mas cribado general basico',
    meses: 12, anos: 2,
    nota: 'Es de los anticuerpos con menor asociacion tumoral, de modo que el cribado es menos intensivo. Lo que si condiciona el pronostico es tratar pronto: el retraso deja amnesia residual y atrofia hipocampal.'
  },
  caspr2: {
    nombre: 'Anticuerpos anti-CASPR2', clase: 'superficie',
    tumor: 'TIMOMA',
    prueba: 'tomografia de TORAX, con atencion al mediastino anterior',
    meses: 6, anos: 2,
    nota: 'El sindrome de Morvan (neuromiotonia, dolor neuropatico, insomnio grave y disautonomia) es el que mas se asocia a timoma. Conviene ademas descartar una miastenia gravis coexistente.'
  },
  gabab: {
    nombre: 'Anticuerpos anti-GABA-B', clase: 'superficie',
    tumor: 'CARCINOMA MICROCITICO DE PULMON',
    prueba: 'tomografia de TORAX y, si es negativa, tomografia con emision de positrones',
    meses: 4, anos: 2,
    nota: 'Encefalitis limbica en la que las CRISIS dominan desde el principio y pueden ser refractarias. La asociacion con microcitico es alta y hay que buscarlo pronto, porque el pronostico lo marca el tumor.'
  },
  ampa: {
    nombre: 'Anticuerpos anti-receptor de AMPA', clase: 'superficie',
    tumor: 'timoma, carcinoma microcitico de pulmon o cancer de mama',
    prueba: 'tomografia de torax y abdomen, mamografia en la mujer y, si son negativas, tomografia con emision de positrones',
    meses: 6, anos: 2,
    nota: 'Encefalitis limbica con recaidas frecuentes. Aunque el anticuerpo es de superficie y responde a la inmunoterapia, la asociacion tumoral es elevada y obliga a un cribado cuidadoso.'
  },
  hu: {
    nombre: 'Anticuerpos anti-Hu', clase: 'intracelular',
    tumor: 'CARCINOMA MICROCITICO DE PULMON',
    prueba: 'tomografia de TORAX y, si es negativa, TOMOGRAFIA CON EMISION DE POSITRONES',
    meses: 4, anos: 2,
    nota: 'Suele acompa&#241;arse de afectacion de varios niveles: neuropatia sensitiva subaguda, cerebelo, tronco y disautonomia. El anticuerpo es solo un marcador y el da&#241;o lo hacen los linfocitos T.'
  },
  ma2: {
    nombre: 'Anticuerpos anti-Ma2', clase: 'intracelular',
    tumor: 'TUMOR DE CELULAS GERMINALES DEL TESTICULO en el varon joven; en otros perfiles, pulmon o mama',
    prueba: 'ECOGRAFIA TESTICULAR en el varon joven aunque la exploracion sea normal, mas tomografia de torax, abdomen y pelvis; tomografia con emision de positrones si todo es negativo',
    meses: 4, anos: 2,
    nota: 'Son caracteristicas la afectacion diencefalica con narcolepsia y la paresia de la mirada VERTICAL. En el varon joven con exploracion testicular normal, la ecografia es obligada y a veces hay que llegar a la orquiectomia diagnostica.'
  },
  cv2: {
    nombre: 'Anticuerpos anti-CV2 o CRMP5', clase: 'intracelular',
    tumor: 'carcinoma microcitico de pulmon o timoma',
    prueba: 'tomografia de TORAX y, si es negativa, tomografia con emision de positrones',
    meses: 4, anos: 2,
    nota: 'Puede dar corea, neuropatia, uveitis y neuritis optica ademas de la encefalitis, y esa combinacion de niveles es en si misma una pista de origen paraneoplasico.'
  },
  anfifisina: {
    nombre: 'Anticuerpos anti-anfifisina', clase: 'intracelular',
    tumor: 'cancer de MAMA o carcinoma microcitico de pulmon',
    prueba: 'mamografia y tomografia de torax; tomografia con emision de positrones si son negativas',
    meses: 4, anos: 2,
    nota: 'Se asocia con frecuencia al sindrome de la persona rigida y a mielopatia. Como en todo el grupo intracelular, el objetivo terapeutico principal es el TUMOR.'
  },
  ninguno: {
    nombre: 'Sin anticuerpo identificado (seronegativa)', clase: 'desconocida',
    tumor: 'no dirigido: hay que hacer un cribado general',
    prueba: 'tomografia de torax, abdomen y pelvis; prueba pelvica o testicular segun edad y sexo; y tomografia con emision de positrones si el cuadro es sugestivo y todo lo demas es negativo',
    meses: 6, anos: 2,
    nota: 'Una proporcion relevante de las encefalitis autoinmunes no tiene anticuerpo identificable, y eso NO excluye el diagnostico ni el tratamiento: los criterios clinicos son precisamente el marco que permite tratarlas.'
  }
};

export const calculators = [
  {
    key: 'criterios-graus', title: 'Encefalitis autoinmune: criterios clinicos', accent: '#2e5c7a',
    subtitle: 'Los tres criterios que permiten tratar sin esperar a los anticuerpos',
    incompleteMsg: 'Responde sobre el tiempo de instauracion y sobre la exclusion de otras causas, y marca los datos de apoyo presentes.',
    fields: [
      { name: 'subagudo', id: 'ea-cg-s', type: 'select', label: 'Inicio de deficit de memoria, alteracion del estado mental o sintomas psiquiatricos', row: 'r1', options: [
        { v: 'si', t: 'Subagudo: menos de 3 meses' },
        { v: 'no', t: 'Mas lento o no presente' }
      ] },
      { name: 'exclusion', id: 'ea-cg-e', type: 'select', label: 'Se han descartado razonablemente otras causas?', row: 'r1', options: [
        { v: 'no', t: 'Todavia no' },
        { v: 'si', t: 'Si, con estudio adecuado' }
      ] },
      { name: 'focalidad', id: 'ea-cg-f', type: 'checkbox', label: 'Focalidad nueva del sistema nervioso central', row: 'r2' },
      { name: 'crisis', id: 'ea-cg-c', type: 'checkbox', label: 'Crisis no explicadas por una epilepsia previa conocida', row: 'r2' },
      { name: 'pleocitosis', id: 'ea-cg-p', type: 'checkbox', label: 'Pleocitosis en el liquido: mas de 5 leucocitos por mm3', row: 'r3' },
      { name: 'rm', id: 'ea-cg-r', type: 'checkbox', label: 'Resonancia sugestiva de encefalitis', row: 'r3' },
      { name: 'temporal', id: 'ea-cg-t', type: 'checkbox', label: 'Alteracion BILATERAL en T2 y FLAIR restringida a los lobulos temporales mediales', row: 'r4' },
      { name: 'eeg', id: 'ea-cg-g', type: 'checkbox', label: 'Electroencefalograma con actividad epileptiforme o lenta sobre los lobulos temporales', row: 'r4' },
      { type: 'note', text: 'Estos criterios estan dise&#241;ados a proposito para ser CLINICOS: permiten iniciar la inmunoterapia sobre bases razonables sin esperar unos anticuerpos que tardan dias o semanas, y ese adelanto es uno de los pocos factores pronosticos que dependen del equipo. La exclusion razonable de otras causas, y sobre todo de la infeccion, no es un tramite administrativo sino uno de los tres criterios.' }
    ],
    compute(v) {
      if (!v.subagudo || !v.exclusion) return null;
      const apoyos = [];
      if (v.focalidad) apoyos.push('focalidad nueva');
      if (v.crisis) apoyos.push('crisis no explicadas');
      if (v.pleocitosis) apoyos.push('pleocitosis en el liquido');
      if (v.rm) apoyos.push('resonancia sugestiva');
      const sub = v.subagudo === 'si';
      const exc = v.exclusion === 'si';
      const posible = sub && apoyos.length > 0 && exc;
      const limbicaApoyo = !!v.pleocitosis || !!v.eeg;
      const limbica = sub && !!v.temporal && limbicaApoyo && exc;
      const faltan = [];
      if (!sub) faltan.push('el inicio subagudo de menos de 3 meses');
      if (apoyos.length === 0) faltan.push('al menos un criterio de apoyo');
      if (!exc) faltan.push('la exclusion razonable de otras causas');
      return { posible, limbica, apoyos, faltan, sub, exc, temporal: !!v.temporal, limbicaApoyo };
    },
    format: r => {
      let s = '';
      if (r.posible) {
        s += `<strong style="color:#3f6b52;">Se cumplen los tres criterios de ENCEFALITIS AUTOINMUNE POSIBLE.</strong> Inicio subagudo, ${r.apoyos.length} criterio${r.apoyos.length > 1 ? 's' : ''} de apoyo (${r.apoyos.join(', ')}) y exclusion razonable de otras causas. `;
        s += 'Eso basta para enviar anticuerpos en LIQUIDO y en suero y para iniciar la inmunoterapia de primera linea SIN esperar al resultado.';
      } else {
        s += `<strong style="color:#8a6a1f;">Todavia no se cumplen los criterios de encefalitis autoinmune posible.</strong> Falta ${r.faltan.join(' y ')}. `;
        if (!r.exc && r.sub && r.apoyos.length > 0) s += 'Es decir: el cuadro encaja, pero el estudio de exclusion no esta completo. Antes de inmunosuprimir hay que descartar razonablemente la INFECCION, con prueba molecular para virus herpes y enterovirus, cultivo y lo que el contexto exija.';
        else if (!r.sub) s += 'Sin un inicio subagudo, de menos de 3 meses, el cuadro se comporta como otra cosa: una demencia, un trastorno psiquiatrico primario o una encefalopatia de otra causa.';
        else s += 'Conviene completar el estudio con puncion lumbar, resonancia y electroencefalograma, que son las tres pruebas de las que salen los criterios de apoyo.';
      }
      if (r.limbica) {
        s += '<br><strong style="color:#8a6a1f;">Se cumplen ademas los criterios de ENCEFALITIS LIMBICA DEFINIDA</strong>: inicio subagudo, alteracion bilateral en T2 y FLAIR restringida a los temporales mediales, criterio paraclinico de apoyo y exclusion de otras causas. Toca panel de anticuerpos de superficie e intracelulares, y cribado tumoral.';
      } else if (r.temporal && !r.limbicaApoyo) {
        s += '<br><span style="opacity:.75;">Hay afectacion temporal medial bilateral, pero falta el criterio paraclinico (pleocitosis o electroencefalograma con actividad temporal) para hablar de encefalitis limbica DEFINIDA.</span>';
      }
      s += '<br><span style="opacity:.75;">Recordatorio de laboratorio: los anticuerpos anti-receptor de NMDA se determinan en LIQUIDO CEFALORRAQUIDEO. Un suero negativo no descarta y un suero positivo aislado no confirma.</span>';
      s += '<br><span style="opacity:.75;">Y una resonancia NORMAL no descarta el diagnostico: una proporcion importante de las encefalitis por anticuerpos anti-receptor de NMDA la tiene normal.</span>';
      return s;
    },
    fragment: r => r.posible ? (r.limbica ? 'criterios de encefalitis limbica definida' : 'criterios de encefalitis autoinmune posible') : 'no se cumplen los criterios'
  },

  {
    key: 'cribado-tumoral-autoinmune', title: 'Cribado tumoral segun el anticuerpo', accent: '#8c3a34',
    subtitle: 'Que buscar, con que prueba y cada cuanto repetirlo',
    incompleteMsg: 'Elige el anticuerpo identificado o sospechado, y el sexo y la edad del paciente.',
    fields: [
      { name: 'anticuerpo', id: 'ea-ct-a', type: 'select', label: 'Anticuerpo identificado o sospechado', options: [
        { v: 'nmda', t: 'Anti-receptor de NMDA' },
        { v: 'lgi1', t: 'Anti-LGI1' },
        { v: 'caspr2', t: 'Anti-CASPR2' },
        { v: 'gabab', t: 'Anti-GABA-B' },
        { v: 'ampa', t: 'Anti-receptor de AMPA' },
        { v: 'hu', t: 'Anti-Hu' },
        { v: 'ma2', t: 'Anti-Ma2' },
        { v: 'cv2', t: 'Anti-CV2 o CRMP5' },
        { v: 'anfifisina', t: 'Anti-anfifisina' },
        { v: 'ninguno', t: 'Ninguno identificado' }
      ] },
      { name: 'sexo', id: 'ea-ct-s', type: 'select', label: 'Sexo', row: 'r2', options: [
        { v: 'mujer', t: 'Mujer' },
        { v: 'varon', t: 'Varon' }
      ] },
      { name: 'edad', id: 'ea-ct-e', type: 'number', step: '1', label: 'Edad (a&#241;os)', placeholder: 'ej. 27', row: 'r2' },
      { name: 'fumador', id: 'ea-ct-f', type: 'checkbox', label: 'Fumador o exfumador' },
      { type: 'note', text: 'La regla que mas casos rescata: el sindrome neurologico puede PRECEDER al diagnostico del tumor en meses, de modo que un cribado inicial negativo NO cierra el caso. Hay que dejar un plan escrito de repeticion, porque de memoria no se hace. Y con anticuerpos INTRACELULARES el objetivo terapeutico principal es el tumor, no la inmunoterapia.' }
    ],
    compute(v) {
      if (!v.anticuerpo || !v.sexo || v.edad == null) return null;
      if (!(v.edad >= 0 && v.edad <= 120)) return { invalido: true };
      const d = TUMORES[v.anticuerpo];
      const joven = v.edad < 45;
      const avisos = [];
      if (v.anticuerpo === 'nmda' && v.sexo === 'mujer' && joven) avisos.push('teratomaOvario');
      if (v.anticuerpo === 'ma2' && v.sexo === 'varon' && joven) avisos.push('testicular');
      if (d.clase === 'intracelular') avisos.push('intracelular');
      if (v.fumador && ['gabab', 'hu', 'cv2', 'anfifisina', 'ampa'].indexOf(v.anticuerpo) >= 0) avisos.push('microcitico');
      return { d, avisos, edad: v.edad, sexo: v.sexo, joven, fumador: !!v.fumador };
    },
    format: r => {
      if (r.invalido) return 'Revisa la edad: se admite de 0 a 120 a&#241;os.';
      const d = r.d;
      let s = `<strong>${d.nombre}. Antigeno ${d.clase === 'desconocida' ? 'no identificado' : 'de localizacion ' + d.clase}.</strong>`;
      s += `<br><strong style="color:#8c3a34;">Buscar:</strong> ${d.tumor}.`;
      s += `<br><strong>Con que:</strong> ${d.prueba}.`;
      s += `<br><strong style="color:#8a6a1f;">Repetir el cribado cada ${d.meses} meses durante al menos ${d.anos} a&#241;os</strong> si el inicial es negativo, dejandolo escrito en el plan de seguimiento.`;
      s += `<br><span style="opacity:.75;">${d.nota}</span>`;
      if (r.avisos.indexOf('teratomaOvario') >= 0) s += `<br><strong style="color:#6b4a8c;">Mujer de ${r.edad} a&#241;os con anticuerpos anti-receptor de NMDA:</strong> el teratoma de ovario puede ser MUY peque&#241;o y pasar desapercibido en la tomografia. Hace falta una prueba pelvica dirigida, y su extirpacion forma parte del tratamiento.`;
      if (r.avisos.indexOf('testicular') >= 0) s += `<br><strong style="color:#6b4a8c;">Varon de ${r.edad} a&#241;os con anticuerpos anti-Ma2:</strong> ecografia testicular OBLIGADA aunque la exploracion sea normal. En casos muy sugestivos con imagen negativa puede llegar a plantearse la orquiectomia diagnostica.`;
      if (r.avisos.indexOf('intracelular') >= 0) s += '<br><strong style="color:#8c3a34;">Anticuerpo INTRACELULAR:</strong> es un marcador y no el agente del da&#241;o, que lo hacen linfocitos T y es poco reversible. La respuesta a la inmunoterapia suele ser pobre y lo que mas cambia el curso es TRATAR EL TUMOR. Conviene implicar a oncologia desde el primer dia.';
      else if (d.clase === 'superficie') s += '<br><span style="color:#3f6b52;">Anticuerpo de SUPERFICIE:</span> es patogenico y su efecto es reversible, de modo que responde a la inmunoterapia y el pronostico es bueno si se trata pronto. Eso no exime del cribado tumoral ni de repetirlo.';
      if (r.avisos.indexOf('microcitico') >= 0) s += '<br><span style="opacity:.75;">Paciente fumador con un anticuerpo asociado a carcinoma MICROCITICO: si la tomografia de torax es negativa, hay que ampliar con tomografia con emision de positrones antes de dar el cribado por concluido.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `cribado tumoral cada ${r.d.meses} meses durante ${r.d.anos * 12} meses`
  },

  {
    key: 'neos', title: 'Escala NEOS', accent: '#6b4a8c',
    subtitle: 'Situacion funcional al a&#241;o en la encefalitis por anticuerpos anti-receptor de NMDA',
    incompleteMsg: 'Marca las variables presentes. Es una escala de cinco items y todos son de si o no.',
    fields: [
      { name: 'uci', id: 'ea-ne-u', type: 'checkbox', label: 'Ingreso en unidad de cuidados intensivos', row: 'r1' },
      { name: 'sinTx', id: 'ea-ne-t', type: 'checkbox', label: 'No se inicio inmunoterapia en las 4 primeras semanas', row: 'r1' },
      { name: 'sinMejoria', id: 'ea-ne-m', type: 'checkbox', label: 'Ausencia de mejoria clinica en las 4 primeras semanas', row: 'r2' },
      { name: 'rm', id: 'ea-ne-r', type: 'checkbox', label: 'Resonancia craneal alterada', row: 'r2' },
      { name: 'lcr', id: 'ea-ne-l', type: 'checkbox', label: 'Mas de 20 leucocitos por mm3 en el liquido cefalorraquideo' },
      { type: 'note', text: 'La escala estima la probabilidad de MALA situacion funcional al a&#241;o, medida con la escala de Rankin modificada, y esta validada en la encefalitis por anticuerpos anti-receptor de NMDA. No es una regla de decision terapeutica y NO sustituye al juicio clinico: su utilidad practica es identificar pronto a quien va a necesitar mas y comunicar expectativas realistas a la familia.' }
    ],
    compute(v) {
      const items = [
        [v.uci, 'ingreso en cuidados intensivos'],
        [v.sinTx, 'inmunoterapia no iniciada en 4 semanas'],
        [v.sinMejoria, 'sin mejoria en 4 semanas'],
        [v.rm, 'resonancia alterada'],
        [v.lcr, 'mas de 20 leucocitos en el liquido']
      ];
      const presentes = items.filter(x => x[0]).map(x => x[1]);
      const p = presentes.length;
      let banda;
      if (p <= 1) banda = 'BAJO';
      else if (p === 2) banda = 'INTERMEDIO';
      else if (p === 3) banda = 'ALTO';
      else banda = 'MUY ALTO';
      const modificables = [];
      if (v.sinTx) modificables.push('la inmunoterapia no se inicio en las 4 primeras semanas');
      if (v.sinMejoria) modificables.push('no hubo mejoria en las 4 primeras semanas, lo que es indicacion de ESCALAR a segunda linea');
      return { p, banda, presentes, modificables };
    },
    format: r => {
      let s = `<strong>${r.p} de 5 puntos: riesgo ${r.banda}</strong> de mala situacion funcional al a&#241;o. `;
      if (r.banda === 'MUY ALTO' || r.banda === 'ALTO') s += '<span style="color:#8c3a34;">Perfil de mal pronostico.</span> Corresponde tratamiento intensivo, escalada precoz a segunda linea, busqueda insistente del teratoma y una conversacion honesta con la familia sobre una recuperacion que sera larga.';
      else if (r.banda === 'INTERMEDIO') s += '<span style="color:#8a6a1f;">Perfil intermedio.</span> Reevaluacion estructurada y umbral bajo para escalar si la respuesta no llega.';
      else s += '<span style="color:#3f6b52;">Perfil de mejor pronostico</span> segun la escala. Eso no autoriza a relajar el tratamiento: la mayoria de los pacientes mejora, pero hacerlo pronto sigue siendo lo que mas influye.';
      if (r.presentes.length) s += `<br><span style="opacity:.75;">Aportan: ${r.presentes.join(', ')}.</span>`;
      if (r.modificables.length) {
        s += `<br><strong style="color:#8c3a34;">Atencion: ${r.modificables.length === 1 ? 'una de las variables presentes depende del equipo' : 'dos de las variables presentes dependen del equipo'}</strong>: ${r.modificables.join('; y ')}. A diferencia del resto de la escala, esto todavia se puede cambiar.`;
      }
      s += '<br><span style="opacity:.75;">La recuperacion en esta enfermedad es LENTA y puede llevar muchos meses, en orden aproximadamente inverso al de la instauracion. Confundir esa lentitud con un fracaso lleva a escalar sin motivo o a abandonar el tratamiento.</span>';
      return s;
    },
    fragment: r => `NEOS ${r.p}/5, riesgo ${r.banda.toLowerCase()}`
  }
];
