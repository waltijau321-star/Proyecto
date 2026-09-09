// topics/lesion-renal-aguda/calculators.js
// 3 herramientas:
// - kdigo-lra: comprueba los criterios diagnosticos, calcula el estadio clasico (KDIGO 2012) y en
//   paralelo la notacion de TRES EJES (C, U, B) que propone el borrador KDIGO 2026 que hay en
//   Bibliografia/, y distingue lesion transitoria de persistente.
// - localizar-lra: orienta a prerrenal, renal o posrenal, calculando la excrecion fraccional de
//   sodio o la de UREA segun corresponda, y avisando de cuando no es interpretable.
// - indicacion-depuracion: las indicaciones que no se discuten, y la evidencia sobre el momento
//   de inicio en el paciente que todavia no cumple ninguna.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

export const calculators = [
  {
    key: 'kdigo-lra', title: 'Criterios y estadio de lesion renal aguda', accent: '#3a6b7a',
    subtitle: 'Estadio clasico y notacion de tres ejes del borrador de 2026',
    incompleteMsg: 'Introduce la creatinina actual y la basal, y elige la diuresis y su duracion.',
    fields: [
      { name: 'crAct', id: 'lr-kd-a', type: 'number', step: '0.01', label: 'Creatinina actual (mg/dL)', placeholder: 'ej. 2.4', row: 'r1' },
      { name: 'crBas', id: 'lr-kd-b', type: 'number', step: '0.01', label: 'Creatinina basal (mg/dL)', placeholder: 'ej. 0.9', row: 'r1' },
      { name: 'horas', id: 'lr-kd-h', type: 'number', step: '1', required: false, label: 'Horas desde el valor basal', placeholder: 'ej. 72', row: 'r2' },
      { name: 'diuresis', id: 'lr-kd-d', type: 'select', label: 'Diuresis', row: 'r2', options: [
        { v: 'normal', t: 'Igual o mayor de 0.5 mL/kg/h' },
        { v: 'u1', t: 'Menor de 0.5 mL/kg/h durante 6 a 12 horas' },
        { v: 'u2', t: 'Menor de 0.5 mL/kg/h mas de 12 horas' },
        { v: 'u3', t: 'Menor de 0.3 mL/kg/h mas de 24 h, o anuria mas de 12 h' }
      ] },
      { name: 'duracion', id: 'lr-kd-du', type: 'select', label: 'Duracion de la alteracion', row: 'r3', options: [
        { v: 'corta', t: '48 horas o menos' },
        { v: 'larga', t: 'Mas de 48 horas y hasta 7 dias' },
        { v: 'akd', t: 'Mas de 7 dias' }
      ] },
      { name: 'biomarcador', id: 'lr-kd-bm', type: 'select', label: 'Biomarcador de da&#241;o renal, si se ha medido', row: 'r3', options: [
        { v: 'nd', t: 'No medido' },
        { v: 'neg', t: 'Negativo' },
        { v: 'pos', t: 'Positivo' }
      ] },
      { name: 'trs', id: 'lr-kd-t', type: 'checkbox', label: 'Se ha iniciado depuracion extrarrenal' },
      { type: 'note', text: 'Basta UN criterio para el diagnostico. El estadio se toma del eje MAS ALTO entre creatinina y diuresis. El borrador de la guia de 2026, que esta en revision publica, propone dejar de dar un estadio unico e informar los tres ejes por separado (C de creatinina, U de diuresis y B de biomarcador), porque un paciente C1 U3 y otro C3 U0 tienen problemas distintos. Ese borrador a&#241;ade ademas la cistatina C como alternativa a la creatinina cuando esta es poco fiable.' }
    ],
    compute(v) {
      if (v.crAct == null || v.crBas == null || !v.diuresis || !v.duracion || !v.biomarcador) return null;
      if (!(v.crAct > 0 && v.crAct <= 30)) return { invalido: true };
      if (!(v.crBas > 0 && v.crBas <= 30)) return { invalido: true };
      if (v.horas != null && !(v.horas >= 0 && v.horas <= 2000)) return { invalido: true };

      const ratio = v.crAct / v.crBas;
      const delta = v.crAct - v.crBas;
      const critDelta = delta >= 0.3 && (v.horas == null || v.horas <= 48);
      const critRatio = ratio >= 1.5 && (v.horas == null || v.horas <= 168);
      const critDiuresis = v.diuresis !== 'normal';
      const criterios = [];
      if (critDelta) criterios.push(`ascenso de ${delta.toFixed(2)} mg/dL${v.horas != null ? ' en ' + v.horas + ' h' : ''}`);
      if (critRatio) criterios.push(`creatinina ${ratio.toFixed(2)} veces el basal`);
      if (critDiuresis) criterios.push('criterio de diuresis');

      let c;
      if (v.trs || ratio >= 3 || v.crAct >= 4.0) c = 3;
      else if (ratio >= 2) c = 2;
      else if (ratio >= 1.5 || critDelta) c = 1;
      else c = 0;
      const u = { normal: 0, u1: 1, u2: 2, u3: 3 }[v.diuresis];
      const estadio = Math.max(c, u);
      const b = v.biomarcador === 'pos' ? 'B1' : v.biomarcador === 'neg' ? 'B0' : null;

      const dur = { corta: 'TRANSITORIA', larga: 'PERSISTENTE', akd: 'ENFERMEDAD RENAL AGUDA' }[v.duracion];
      return {
        diagnostico: criterios.length > 0, criterios, ratio, delta, c, u, b, estadio, dur,
        trs: !!v.trs, discordante: Math.abs(c - u) >= 2, sinBio: v.biomarcador === 'nd',
        sinHoras: v.horas == null, crAct: v.crAct
      };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: creatininas de 0.01 a 30 mg/dL y horas de 0 a 2000.';
      let s;
      if (!r.diagnostico) {
        s = `<strong style="color:#3f6b52;">No se cumple ningun criterio de lesion renal aguda por ahora.</strong> La creatinina esta ${r.ratio.toFixed(2)} veces el basal, con un ascenso de ${r.delta.toFixed(2)} mg/dL, y la diuresis se mantiene.`;
        s += '<br><span style="opacity:.75;">Eso no autoriza a dejar de vigilar: la creatinina es un marcador TARDIO y en el paciente critico la enmascaran la perdida de masa muscular y la dilucion por fluidos. La diuresis avisa antes.</span>';
        return s;
      }
      s = `<strong>Lesion renal aguda, ESTADIO ${r.estadio}.</strong> Cumple ${r.criterios.length} criterio${r.criterios.length > 1 ? 's' : ''}: ${r.criterios.join('; ')}.`;
      s += `<br><strong style="color:#3a6b7a;">Notacion de tres ejes del borrador de 2026: C${r.c} U${r.u}${r.b ? ' ' + r.b : ''}.</strong>`;
      if (r.discordante) s += ` <span style="color:#8a6a1f;">Los dos ejes discrepan de forma marcada</span>, y ese es justamente el argumento para informarlos por separado: el estadio unico se queda con el peor y pierde el resto de la informacion.`;
      if (r.u > r.c) s += '<br><span style="opacity:.8;">Aqui el estadio lo marca la DIURESIS, no la creatinina. Es la situacion habitual en las primeras horas y la razon de que cuantificarla adelante el diagnostico.</span>';
      if (r.trs) s += '<br><span style="opacity:.8;">Haber iniciado depuracion extrarrenal clasifica automaticamente como estadio 3, con independencia de la cifra de creatinina.</span>';
      if (r.crAct >= 4.0 && r.ratio < 3) s += '<br><span style="opacity:.8;">La creatinina ha alcanzado 4.0 mg/dL, que por si sola define el estadio 3 aunque el cociente respecto al basal no llegue a 3.</span>';
      s += `<br><strong>Duracion: ${r.dur}.</strong> `;
      if (r.dur === 'TRANSITORIA') s += 'Suele ser funcional y reversible. Aun asi hay que retirar los nefrotoxicos y corregir la causa, porque lo que empieza siendo funcional se vuelve estructural si el insulto continua.';
      else if (r.dur === 'PERSISTENTE') s += 'Mas alla de 48 horas se asocia a da&#241;o estructural y a mayor riesgo de enfermedad renal cronica posterior. Conviene revisar si sigue habiendo un insulto activo.';
      else s += 'Pasados 7 dias se habla de enfermedad renal aguda, un periodo que llega hasta los 3 meses y en el que se decide si la funcion se recupera del todo, en parte o nada. Es el momento de asegurar el SEGUIMIENTO tras el alta.';
      if (r.sinBio) s += '<br><span style="opacity:.75;">No se ha medido ningun biomarcador de da&#241;o. El borrador de 2026 los incorpora para separar el descenso funcional del filtrado del da&#241;o estructural real, algo que la creatinina sola no distingue.</span>';
      else if (r.b === 'B1') s += '<br><span style="color:#8c3a34;">Biomarcador de da&#241;o POSITIVO:</span> apoya que hay lesion estructural y no solo un descenso funcional del filtrado.';
      if (r.sinHoras) s += '<br><span style="opacity:.75;">No se ha indicado el tiempo transcurrido desde el basal. Los criterios tienen plazo: 48 horas para el ascenso de 0.3 mg/dL y 7 dias para el cociente de 1.5.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.diagnostico ? `lesion renal aguda estadio ${r.estadio} (C${r.c} U${r.u}), ${r.dur.toLowerCase()}` : 'sin criterios de lesion renal aguda')
  },

  {
    key: 'localizar-lra', title: 'Prerrenal, renal o posrenal', accent: '#3f6b52',
    subtitle: 'Sedimento, ecografia e indices urinarios, con sus limitaciones',
    incompleteMsg: 'Elige el hallazgo del sedimento y el resultado de la ecografia. Los indices urinarios son opcionales.',
    fields: [
      { name: 'sedimento', id: 'lr-lo-s', type: 'select', label: 'Sedimento urinario', options: [
        { v: 'limpio', t: 'Limpio, o algun cilindro hialino' },
        { v: 'granulosos', t: 'Cilindros granulosos pardos y celulas tubulares' },
        { v: 'glomerular', t: 'Hematies dismorficos o cilindros hematicos' },
        { v: 'leucocitos', t: 'Leucocitos y cilindros leucocitarios' },
        { v: 'nd', t: 'No disponible' }
      ] },
      { name: 'eco', id: 'lr-lo-e', type: 'select', label: 'Ecografia renal y vesical', row: 'r2', options: [
        { v: 'normal', t: 'Sin dilatacion, ri&#241;ones de tama&#241;o normal' },
        { v: 'dilatacion', t: 'Dilatacion del sistema colector' },
        { v: 'globo', t: 'Globo vesical' },
        { v: 'cronico', t: 'Ri&#241;ones peque&#241;os e hiperecogenicos' },
        { v: 'nd', t: 'No realizada todavia' }
      ] },
      { name: 'contexto', id: 'lr-lo-c', type: 'select', label: 'Contexto predominante', row: 'r2', options: [
        { v: 'hipoperfusion', t: 'Hipovolemia, insuficiencia cardiaca o cirrosis' },
        { v: 'sepsis', t: 'Sepsis o cirugia mayor' },
        { v: 'farmacos', t: 'Nefrotoxicos o contraste reciente' },
        { v: 'obstructivo', t: 'Prostatismo, neoplasia pelvica o litiasis' },
        { v: 'ninguno', t: 'Ninguno claro' }
      ] },
      { name: 'naOrina', id: 'lr-lo-no', type: 'number', step: '1', required: false, label: 'Sodio en orina (mEq/L)', placeholder: 'ej. 15', row: 'r3' },
      { name: 'crOrina', id: 'lr-lo-co', type: 'number', step: '1', required: false, label: 'Creatinina en orina (mg/dL)', placeholder: 'ej. 90', row: 'r3' },
      { name: 'naPl', id: 'lr-lo-np', type: 'number', step: '1', required: false, label: 'Sodio plasmatico (mEq/L)', placeholder: 'ej. 138', row: 'r4' },
      { name: 'crPl', id: 'lr-lo-cp', type: 'number', step: '0.01', required: false, label: 'Creatinina plasmatica (mg/dL)', placeholder: 'ej. 2.4', row: 'r4' },
      { name: 'diureticos', id: 'lr-lo-d', type: 'checkbox', label: 'El paciente recibe diureticos' },
      { type: 'note', text: 'Dos gestos preceden a cualquier razonamiento y se olvidan a diario: la ECOGRAFIA con medida de la vejiga, porque la obstruccion es lo que mas rapido se resuelve, y la revision de la LISTA DE FARMACOS. La excrecion fraccional de sodio es una ayuda y no un arbitro: los diureticos la inutilizan, y hay causas renales que cursan con sodio urinario bajo, como el contraste, la rabdomiolisis y el sindrome hepatorrenal.' }
    ],
    compute(v) {
      if (!v.sedimento || !v.eco || !v.contexto) return null;
      const tieneIndices = v.naOrina != null && v.crOrina != null && v.naPl != null && v.crPl != null;
      let fena = null;
      if (tieneIndices) {
        if (!(v.naOrina >= 0 && v.naOrina <= 300)) return { invalido: true };
        if (!(v.crOrina > 0 && v.crOrina <= 1000)) return { invalido: true };
        if (!(v.naPl > 80 && v.naPl <= 200)) return { invalido: true };
        if (!(v.crPl > 0 && v.crPl <= 30)) return { invalido: true };
        fena = (v.naOrina * v.crPl) / (v.naPl * v.crOrina) * 100;
      }
      const s = { prerrenal: 0, renal: 0, posrenal: 0 };
      if (v.sedimento === 'limpio') { s.prerrenal += 3; s.posrenal += 2; }
      if (v.sedimento === 'granulosos') s.renal += 4;
      if (v.sedimento === 'glomerular') s.renal += 5;
      if (v.sedimento === 'leucocitos') s.renal += 3;
      if (v.eco === 'dilatacion') s.posrenal += 5;
      if (v.eco === 'globo') s.posrenal += 5;
      if (v.eco === 'normal') { s.prerrenal += 1; s.renal += 1; }
      if (v.contexto === 'hipoperfusion') s.prerrenal += 3;
      if (v.contexto === 'sepsis') { s.renal += 2; s.prerrenal += 2; }
      if (v.contexto === 'farmacos') s.renal += 3;
      if (v.contexto === 'obstructivo') s.posrenal += 3;
      if (fena != null && !v.diureticos) {
        if (fena < 1) s.prerrenal += 2;
        else if (fena > 2) s.renal += 2;
      }
      const orden = Object.keys(s).sort((a, b) => s[b] - s[a]);
      const nombres = { prerrenal: 'PRERRENAL', renal: 'RENAL', posrenal: 'POSRENAL' };
      return {
        top: orden[0], nombre: nombres[orden[0]], empate: s[orden[1]] === s[orden[0]], segundo: nombres[orden[1]],
        fena, tieneIndices, diureticos: !!v.diureticos, sedimento: v.sedimento, eco: v.eco,
        contexto: v.contexto, sinEco: v.eco === 'nd', sinSedimento: v.sedimento === 'nd', cronico: v.eco === 'cronico'
      };
    },
    format: r => {
      if (r.invalido) return 'Revisa los indices urinarios: sodio en orina de 0 a 300, creatinina en orina de 1 a 1000, sodio plasmatico de 81 a 200 y creatinina plasmatica de 0.01 a 30.';
      let s = `<strong>La orientacion apunta a una causa ${r.nombre}.</strong> `;
      if (r.top === 'prerrenal') s += 'El ri&#241;on esta sano pero mal perfundido. Toca corregir la causa, restaurar la perfusion sin sobrecargar y retirar los farmacos que anulan la autorregulacion. Es REVERSIBLE si se actua pronto.';
      else if (r.top === 'renal') s += 'Hay da&#241;o del parenquima. Toca retirar nefrotoxicos, ajustar dosis, dar soporte y tiempo, porque el epitelio tubular se regenera. Dar mas volumen ya no lo resuelve.';
      else s += 'Hay obstruccion, que es lo que mas rapido se resuelve de todo el tema. Sondaje si hay globo, y desobstruccion urgente (cateter o nefrostomia) segun el nivel.';

      if (r.eco === 'globo') s += '<br><strong style="color:#6b4a8c;">Hay GLOBO VESICAL: sondar es diagnostico y terapeutico a la vez, y se hace ahora.</strong> Despues hay que vigilar la POLIURIA POSOBSTRUCTIVA, que puede ser masiva y producir deshidratacion y alteraciones electroliticas si no se repone.';
      else if (r.eco === 'dilatacion') s += '<br><strong style="color:#6b4a8c;">Dilatacion del sistema colector: desobstruir es la prioridad,</strong> y cuanto antes mejor, porque la recuperacion empeora con la duracion. Vigilar despues la poliuria posobstructiva.';
      if (r.sedimento === 'glomerular') s += '<br><strong style="color:#8c3a34;">Sedimento GLOMERULAR: esto cambia todo el estudio.</strong> Hay que pedir inmunologia sin demora (anticuerpos antinucleares, ANCA, anti-membrana basal, complemento y proteinograma) y plantear biopsia, porque hay glomerulonefritis rapidamente progresivas que se tratan y en las que cada dia cuesta nefronas.';
      if (r.sedimento === 'leucocitos') s += '<br><span style="color:#8a6a1f;">Sedimento con leucocitos:</span> valorar NEFRITIS INTERSTICIAL por farmacos, cuya triada de fiebre, exantema y eosinofilia esta completa en una minoria. El tratamiento empieza por retirar el sospechoso.';
      if (r.cronico) s += '<br><strong style="color:#8a6a1f;">Ri&#241;ones peque&#241;os e hiperecogenicos:</strong> eso sugiere enfermedad renal CRONICA de base y obliga a replantear si lo que se esta viendo es agudo, cronico o agudo sobre cronico. Cambia el pronostico y el plan.';
      if (r.sinEco) s += '<br><strong style="color:#8c3a34;">No se ha hecho la ecografia.</strong> Es la primera prueba del tema: descarta la obstruccion, que es la causa mas rapidamente reversible y la que mas se pasa por alto. Y hay que medir la vejiga.';
      if (r.sinSedimento) s += '<br><span style="opacity:.75;">No se ha mirado el sedimento, que es la prueba mas rentable y la mas olvidada de todo el tema.</span>';

      if (r.tieneIndices) {
        if (r.diureticos) {
          s += `<br><strong style="color:#8a6a1f;">La excrecion fraccional de sodio sale ${r.fena.toFixed(1)}%, pero NO es interpretable:</strong> el paciente recibe diureticos, que la elevan de forma artificial. En ese caso hay que usar la excrecion fraccional de UREA, con un umbral en torno al 35%.`;
        } else {
          s += `<br><span style="opacity:.85;">Excrecion fraccional de sodio ${r.fena.toFixed(1)}%.</span> `;
          if (r.fena < 1) s += 'Por debajo del 1% orienta a prerrenal, aunque hay causas renales que tambien cursan con sodio bajo: contraste, rabdomiolisis y sindrome hepatorrenal.';
          else if (r.fena > 2) s += 'Por encima del 2% orienta a necrosis tubular, porque el tubulo da&#241;ado ya no puede retener sodio.';
          else s += 'En zona intermedia, que no discrimina. El sedimento y la ecografia aportan mas que cualquier indice.';
        }
      } else {
        s += '<br><span style="opacity:.75;">No se han introducido los cuatro valores necesarios para calcular la excrecion fraccional de sodio (sodio y creatinina en orina y en plasma).</span>';
      }
      if (r.empate) s += `<br><span style="opacity:.75;">Los datos no separan bien la causa ${r.nombre.toLowerCase()} de la ${r.segundo.toLowerCase()}, y en el hospital lo habitual es que coexistan varias. Encontrar una no autoriza a dejar de buscar las demas.</span>`;
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `orientacion ${r.nombre.toLowerCase()}${r.fena != null && !r.diureticos ? ', excrecion fraccional ' + r.fena.toFixed(1) + '%' : ''}`
  },

  {
    key: 'indicacion-depuracion', title: 'Depuracion extrarrenal: hace falta ya?', accent: '#8c3a5c',
    subtitle: 'Las indicaciones que no se discuten, y que dicen los ensayos sobre adelantarse',
    incompleteMsg: 'Marca las situaciones presentes y elige el estadio y la situacion hemodinamica.',
    fields: [
      { name: 'acidosis', id: 'lr-in-a', type: 'checkbox', label: 'Acidosis metabolica grave y refractaria al tratamiento medico', row: 'r1' },
      { name: 'potasio', id: 'lr-in-k', type: 'checkbox', label: 'Hiperpotasemia grave o recurrente pese al tratamiento', row: 'r1' },
      { name: 'toxico', id: 'lr-in-t', type: 'checkbox', label: 'Intoxicacion por un toxico dializable', row: 'r2' },
      { name: 'sobrecarga', id: 'lr-in-s', type: 'checkbox', label: 'Sobrecarga de volumen refractaria a diureticos, con compromiso respiratorio', row: 'r2' },
      { name: 'uremia', id: 'lr-in-u', type: 'checkbox', label: 'Uremia sintomatica: encefalopatia, pericarditis o sangrado', row: 'r3' },
      { name: 'estadio', id: 'lr-in-e', type: 'select', label: 'Estadio de la lesion renal aguda', row: 'r3', options: [
        { v: '1', t: 'Estadio 1' },
        { v: '2', t: 'Estadio 2' },
        { v: '3', t: 'Estadio 3' }
      ] },
      { name: 'hemodinamica', id: 'lr-in-h', type: 'select', label: 'Situacion hemodinamica', row: 'r4', options: [
        { v: 'estable', t: 'Estable' },
        { v: 'inestable', t: 'Inestable o con vasoactivos' }
      ] },
      { name: 'reversible', id: 'lr-in-r', type: 'checkbox', label: 'Persiste un insulto activo todavia corregible (nefrotoxico, obstruccion, hipoperfusion)', row: 'r4' },
      { type: 'note', text: 'Los grandes ensayos aleatorizados que compararon iniciar la depuracion de forma PRECOZ frente a esperar a que apareciera una indicacion no encontraron beneficio en supervivencia con adelantarse, y si mas efectos adversos, mas cateteres y mas dependencia. Ademas, una parte relevante de los pacientes manejados de forma conservadora nunca llego a necesitarla. Mientras tanto, lo que mas rinde es retirar nefrotoxicos, ajustar todas las dosis y no sobrecargar de volumen.' }
    ],
    compute(v) {
      if (!v.estadio || !v.hemodinamica) return null;
      const items = [
        [v.acidosis, 'acidosis metabolica grave y refractaria'],
        [v.potasio, 'hiperpotasemia grave o recurrente'],
        [v.toxico, 'intoxicacion por un toxico dializable'],
        [v.sobrecarga, 'sobrecarga de volumen refractaria'],
        [v.uremia, 'uremia sintomatica']
      ];
      const presentes = items.filter(x => x[0]).map(x => x[1]);
      return {
        n: presentes.length, presentes, indicado: presentes.length > 0,
        estadio: v.estadio, inestable: v.hemodinamica === 'inestable',
        reversible: !!v.reversible, potasio: !!v.potasio
      };
    },
    format: r => {
      let s;
      if (r.indicado) {
        s = `<strong style="color:#8c3a34;">Hay ${r.n} indicacion${r.n > 1 ? 'es' : ''} establecida${r.n > 1 ? 's' : ''} de depuracion extrarrenal:</strong> ${r.presentes.join(', ')}. Esto no se discute y no depende del estadio.`;
        if (r.inestable) s += '<br><span style="color:#3d5a73;">El paciente esta inestable:</span> se prefieren las tecnicas CONTINUAS por su mejor tolerancia hemodinamica, aunque conviene saber que no han demostrado ventaja en supervivencia frente a la intermitente.';
        else s += '<br><span style="opacity:.8;">Con estabilidad hemodinamica, la tecnica intermitente es una opcion perfectamente valida y mas eficiente.</span>';
        if (r.potasio) s += '<br><strong style="color:#8c3a34;">Mientras se prepara la tecnica, tratar la hiperpotasemia:</strong> calcio si hay alteraciones en el electrocardiograma, insulina con glucosa y agonistas beta para redistribuir, y un quelante para ELIMINAR. Conviene recordar que el calcio y la insulina no sacan potasio del cuerpo.';
      } else {
        s = `<strong style="color:#3f6b52;">No se cumple ninguna de las cinco indicaciones establecidas.</strong> Con un estadio ${r.estadio}, la evidencia disponible NO apoya adelantar la depuracion: los ensayos que compararon el inicio precoz frente a esperar no encontraron beneficio en supervivencia, si mas complicaciones asociadas al cateter y a la tecnica, y una parte relevante de los pacientes del grupo conservador nunca llego a necesitarla.`;
        s += '<br><strong>Lo que si hay que hacer ahora,</strong> que rinde mas que cualquier tecnica: RETIRAR nefrotoxicos, AJUSTAR todos los farmacos a la funcion renal empezando por antibioticos y heparinas, optimizar la perfusion sin sobrecargar, descartar obstruccion, tratar la causa y vigilar el potasio de forma estrecha.';
      }
      if (r.reversible) s += '<br><strong style="color:#8a6a1f;">Hay un insulto activo todavia corregible.</strong> Ese es el argumento mas fuerte para actuar sobre la causa antes que sobre la consecuencia: mientras el insulto siga, ninguna tecnica de depuracion va a permitir que el ri&#241;on se recupere.';
      s += '<br><span style="opacity:.75;">Y una vez iniciada, hay que reevaluar cada dia si sigue siendo necesaria: saber retirarla forma parte del tratamiento.</span>';
      return s;
    },
    fragment: r => r.indicado ? `${r.n} indicacion${r.n > 1 ? 'es' : ''} de depuracion` : 'sin indicacion establecida de depuracion'
  }
];
