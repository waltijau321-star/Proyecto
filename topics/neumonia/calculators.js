// topics/neumonia/calculators.js
// 4 herramientas:
// - curb65: cribado rapido del lugar de tratamiento (Lim 2003).
// - psi: indice de gravedad de la neumonia o PORT (Fine 1997), el preferido por las guias para
//   identificar al paciente de bajo riesgo que puede tratarse en casa.
// - nac-grave: criterios ATS/IDSA de neumonia grave, que deciden cuidados intensivos, cultivos,
//   corticoide y duracion minima del antibiotico.
// - riesgo-resistentes: sustituye a la desaparecida categoria de neumonia asociada a cuidados
//   sanitarios; dice cuando ampliar la cobertura a SARM y a Pseudomonas, y recuerda desescalar.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

function claseP(p) {
  if (p <= 70) return { n: 'II', mort: '0.6 a 0.9%', destino: 'tratamiento ambulatorio' };
  if (p <= 90) return { n: 'III', mort: '0.9 a 2.8%', destino: 'observación o ingreso corto' };
  if (p <= 130) return { n: 'IV', mort: '8 a 9%', destino: 'ingreso hospitalario' };
  return { n: 'V', mort: '27 a 31%', destino: 'ingreso, valorando cuidados intensivos' };
}

export const calculators = [
  {
    key: 'curb65', title: 'CURB-65', accent: '#3f6b52',
    subtitle: 'Cribado rápido del lugar de tratamiento en la neumonía comunitaria',
    incompleteMsg: 'Introduce edad, nitrógeno ureico, frecuencia respiratoria y presión arterial.',
    fields: [
      { name: 'edad', id: 'nm-cu-edad', type: 'number', step: '1', label: 'Edad (años)', placeholder: 'ej. 72', row: 'r1' },
      { name: 'bun', id: 'nm-cu-bun', type: 'number', step: '1', label: 'Nitrógeno ureico en sangre (mg/dL)', placeholder: 'ej. 24', row: 'r1' },
      { name: 'fr', id: 'nm-cu-fr', type: 'number', step: '1', label: 'Frecuencia respiratoria (por minuto)', placeholder: 'ej. 28', row: 'r2' },
      { name: 'pas', id: 'nm-cu-pas', type: 'number', step: '1', label: 'Presión arterial sistólica (mmHg)', placeholder: 'ej. 105', row: 'r3' },
      { name: 'pad', id: 'nm-cu-pad', type: 'number', step: '1', label: 'Presión arterial diastólica (mmHg)', placeholder: 'ej. 62', row: 'r3' },
      { name: 'confusion', id: 'nm-cu-conf', type: 'checkbox', label: 'Confusión de nueva aparición' },
      { type: 'note', text: 'Un punto por cada criterio: Confusión, Urea (nitrógeno ureico mayor de 19 mg/dL, equivalente a urea mayor de 7 mmol/L), Respiraciones de 30 o más, presión arterial sistólica menor de 90 o diastólica de 60 o menos, y edad de 65 años o más. Es un cribado, no una orden: no valora la hipoxemia, la comorbilidad descompensada, la tolerancia oral ni el soporte social, y penaliza al anciano solo por la edad.' }
    ],
    compute(v) {
      if (v.edad == null || v.bun == null || v.fr == null || v.pas == null || v.pad == null) return null;
      if (!(v.edad >= 0 && v.edad <= 120) || !(v.fr >= 5 && v.fr <= 80)) return { invalido: true };
      if (!(v.pas >= 30 && v.pas <= 300) || !(v.pad >= 10 && v.pad <= 200) || !(v.bun >= 0 && v.bun <= 300)) return { invalido: true };
      const c = v.confusion ? 1 : 0;
      const u = v.bun > 19 ? 1 : 0;
      const r = v.fr >= 30 ? 1 : 0;
      const b = (v.pas < 90 || v.pad <= 60) ? 1 : 0;
      const e = v.edad >= 65 ? 1 : 0;
      const total = c + u + r + b + e;
      const destino = total <= 1 ? 'tratamiento ambulatorio' : total === 2 ? 'valorar ingreso hospitalario' : 'neumonía grave: ingreso y valorar cuidados intensivos';
      return { total, destino, c, u, r, b, e, edad: v.edad };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: edad de 0 a 120 años, frecuencia respiratoria de 5 a 80, presión sistólica de 30 a 300 y diastólica de 10 a 200 mmHg.';
      let s = `<strong>CURB-65 de ${r.total} puntos: ${r.destino}.</strong> Desglose: confusión ${r.c}, urea ${r.u}, frecuencia respiratoria ${r.r}, presión arterial ${r.b}, edad ${r.e}. `;
      if (r.total <= 1) s += 'Mortalidad baja. Puede tratarse en casa si tolera la via oral, tiene soporte social y no hay comorbilidad descompensada ni hipoxemia, tres cosas que la escala no mide.';
      else if (r.total === 2) s += 'Mortalidad intermedia. Valorar ingreso u observación, integrando la comorbilidad, la saturación y la situación social.';
      else s += 'Mortalidad alta. Ingreso y aplicación de los criterios ATS/IDSA de neumonía grave para decidir cuidados intensivos, cultivos completos y corticoide sistémico.';
      if (r.e === 1 && r.total === 1) s += ' <strong>Atención:</strong> el único punto procede de la edad, que por si sola no obliga a ingresar. Al revés de lo que ocurre en el joven, donde la escala puede infravalorar un cuadro grave.';
      s += ' Las guías prefieren el PSI para decidir el alta, porque identifica mejor al paciente de bajo riesgo.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `CURB-65 ${r.total}: ${r.destino}`
  },
  {
    key: 'psi', title: 'Índice de gravedad de la neumonía (PSI o PORT)', accent: '#3d5a73',
    subtitle: 'Clases de riesgo I a V para decidir el lugar de tratamiento',
    incompleteMsg: 'Introduce sexo, edad y las constantes. Los datos de laboratorio son opcionales.',
    fields: [
      { name: 'sexo', id: 'nm-psi-sexo', type: 'select', label: 'Sexo', options: [
        { value: '', label: 'Selecciona' },
        { value: 'h', label: 'Hombre' },
        { value: 'm', label: 'Mujer' } ] },
      { name: 'edad', id: 'nm-psi-edad', type: 'number', step: '1', label: 'Edad (años)', placeholder: 'ej. 68', row: 'r1' },
      { name: 'residencia', id: 'nm-psi-res', type: 'checkbox', label: 'Vive en residencia o centro sociosanitario (10)' },
      { type: 'note', text: 'Comorbilidad.' },
      { name: 'neoplasia', id: 'nm-psi-neo', type: 'checkbox', label: 'Enfermedad neoplásica activa (30)' },
      { name: 'hepatica', id: 'nm-psi-hep', type: 'checkbox', label: 'Hepatopatía crónica (20)' },
      { name: 'icc', id: 'nm-psi-icc', type: 'checkbox', label: 'Insuficiencia cardiaca congestiva (10)' },
      { name: 'acv', id: 'nm-psi-acv', type: 'checkbox', label: 'Enfermedad cerebrovascular (10)' },
      { name: 'renal', id: 'nm-psi-ren', type: 'checkbox', label: 'Nefropatía crónica (10)' },
      { type: 'note', text: 'Exploracion.' },
      { name: 'mental', id: 'nm-psi-men', type: 'checkbox', label: 'Alteración del estado mental (20)' },
      { name: 'fr', id: 'nm-psi-fr', type: 'number', step: '1', label: 'Frecuencia respiratoria (por minuto)', placeholder: 'ej. 26', row: 'r2' },
      { name: 'pas', id: 'nm-psi-pas', type: 'number', step: '1', label: 'Presión arterial sistólica (mmHg)', placeholder: 'ej. 112', row: 'r2' },
      { name: 'temp', id: 'nm-psi-temp', type: 'number', step: '0.1', label: 'Temperatura (grados Celsius)', placeholder: 'ej. 38.4', row: 'r3' },
      { name: 'fc', id: 'nm-psi-fc', type: 'number', step: '1', label: 'Frecuencia cardiaca (latidos por minuto)', placeholder: 'ej. 104', row: 'r3' },
      { type: 'note', text: 'Laboratorio e imagen. Estos campos son OPCIONALES: si se dejan vacíos se asume que son normales, y la clase resultante puede quedar por debajo de la real. Conviene completarlos antes de usar el resultado para decidir un alta.' },
      { name: 'ph', id: 'nm-psi-ph', type: 'number', step: '0.01', required: false, label: 'pH arterial (30 si es menor de 7.35)', placeholder: 'ej. 7.38', row: 'r4' },
      { name: 'bun', id: 'nm-psi-bun', type: 'number', step: '1', required: false, label: 'Nitrógeno ureico (mg/dL; 20 si es 30 o más)', placeholder: 'ej. 26', row: 'r4' },
      { name: 'na', id: 'nm-psi-na', type: 'number', step: '1', required: false, label: 'Sodio (mmol/L; 20 si es menor de 130)', placeholder: 'ej. 134', row: 'r5' },
      { name: 'glu', id: 'nm-psi-glu', type: 'number', step: '1', required: false, label: 'Glucemia (mg/dL; 10 si es 250 o más)', placeholder: 'ej. 138', row: 'r5' },
      { name: 'hto', id: 'nm-psi-hto', type: 'number', step: '1', required: false, label: 'Hematocrito (%; 10 si es menor de 30)', placeholder: 'ej. 38', row: 'r6' },
      { name: 'pao2', id: 'nm-psi-pao2', type: 'number', step: '1', required: false, label: 'PaO2 (mmHg; 10 si es menor de 60)', placeholder: 'ej. 68', row: 'r6' },
      { name: 'derrame', id: 'nm-psi-der', type: 'checkbox', label: 'Derrame pleural en la radiografía (10)' }
    ],
    compute(v) {
      if (!v.sexo || v.edad == null || v.fr == null || v.pas == null || v.temp == null || v.fc == null) return null;
      if (!(v.edad >= 0 && v.edad <= 120) || !(v.fr >= 5 && v.fr <= 80)) return { invalido: true };
      if (!(v.pas >= 30 && v.pas <= 300) || !(v.temp >= 25 && v.temp <= 45) || !(v.fc >= 20 && v.fc <= 250)) return { invalido: true };
      const comorb = !!(v.neoplasia || v.hepatica || v.icc || v.acv || v.renal);
      const exploracionAlterada = !!v.mental || v.fr >= 30 || v.pas < 90 || v.temp < 35 || v.temp >= 40 || v.fc >= 125;
      const claseI = v.edad <= 50 && !comorb && !exploracionAlterada;
      let p = v.sexo === 'm' ? v.edad - 10 : v.edad;
      if (v.residencia) p += 10;
      if (v.neoplasia) p += 30;
      if (v.hepatica) p += 20;
      if (v.icc) p += 10;
      if (v.acv) p += 10;
      if (v.renal) p += 10;
      if (v.mental) p += 20;
      if (v.fr >= 30) p += 20;
      if (v.pas < 90) p += 20;
      if (v.temp < 35 || v.temp >= 40) p += 15;
      if (v.fc >= 125) p += 10;
      const faltan = [];
      if (v.ph != null) { if (v.ph < 7.35) p += 30; } else faltan.push('pH');
      if (v.bun != null) { if (v.bun >= 30) p += 20; } else faltan.push('nitrógeno ureico');
      if (v.na != null) { if (v.na < 130) p += 20; } else faltan.push('sodio');
      if (v.glu != null) { if (v.glu >= 250) p += 10; } else faltan.push('glucemia');
      if (v.hto != null) { if (v.hto < 30) p += 10; } else faltan.push('hematocrito');
      if (v.pao2 != null) { if (v.pao2 < 60) p += 10; } else faltan.push('PaO2');
      if (v.derrame) p += 10;
      const cl = claseI ? { n: 'I', mort: '0.1%', destino: 'tratamiento ambulatorio' } : claseP(p);
      return { p, clase: cl.n, mort: cl.mort, destino: cl.destino, claseI, faltan, edad: v.edad };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: edad de 0 a 120 años, frecuencia respiratoria de 5 a 80, presión sistólica de 30 a 300 mmHg, temperatura de 25 a 45 grados y frecuencia cardiaca de 20 a 250.';
      let s = r.claseI
        ? `<strong>Clase I del PSI</strong> (menor de 51 años, sin comorbilidad de la lista y sin alteraciones en la exploración): mortalidad en torno al ${r.mort}. `
        : `<strong>${r.p} puntos: clase ${r.clase} del PSI.</strong> Mortalidad esperada del ${r.mort}. `;
      s += `Destino sugerido: <strong>${r.destino}</strong>. `;
      if (r.clase === 'I' || r.clase === 'II') s += 'El PSI es especialmente bueno identificando al paciente de bajo riesgo, y ese es el motivo por el que las guías lo prefieren al CURB-65 para decidir el alta. Aun así, no valora la tolerancia oral, el soporte social ni la comorbilidad descompensada.';
      else if (r.clase === 'III') s += 'Zona intermedia: observación en urgencias o ingreso corto, según la evolución en las primeras horas y el contexto social.';
      else s += 'Ingreso hospitalario. Aplicar además los criterios ATS/IDSA de neumonía grave para decidir cuidados intensivos, cultivos completos y corticoide sistémico.';
      if (r.edad <= 50 && !r.claseI) s += ' <strong>Ojo con el paciente joven:</strong> el PSI puntúa sobre todo la edad y la comorbilidad, de modo que puede infravalorar a un adulto joven sin antecedentes que llega realmente grave. Ahi mandan los criterios de gravedad y el juicio clínico.';
      if (r.faltan.length) s += ` <strong>Calculado sin ${r.faltan.join(', ')}</strong>: esos valores se han asumido normales, de modo que la clase real puede ser superior. Completarlos antes de usar el resultado para decidir un alta.`;
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `PSI clase ${r.clase}${r.claseI ? '' : ` (${r.p} puntos)`}`
  },
  {
    key: 'nac-grave', title: 'Criterios de neumonía grave (ATS/IDSA)', accent: '#8c3a34',
    subtitle: 'Un criterio mayor o tres menores: cuidados intensivos, cultivos, corticoide y duración',
    incompleteMsg: 'Marca los criterios presentes.',
    fields: [
      { type: 'note', text: 'Criterios MAYORES. Cualquiera de los dos define por si solo la neumonía grave.' },
      { name: 'vm', id: 'nm-ng-vm', type: 'checkbox', label: 'Necesidad de ventilación mecánica invasiva' },
      { name: 'choque', id: 'nm-ng-cho', type: 'checkbox', label: 'Choque séptico con necesidad de vasopresores' },
      { type: 'note', text: 'Criterios MENORES. Hacen falta tres o más.' },
      { name: 'fr30', id: 'nm-ng-fr', type: 'checkbox', label: 'Frecuencia respiratoria de 30 o más por minuto' },
      { name: 'pafi', id: 'nm-ng-paf', type: 'checkbox', label: 'Relación PaO2/FiO2 de 250 o menos' },
      { name: 'multilobar', id: 'nm-ng-mul', type: 'checkbox', label: 'Infiltrados multilobares' },
      { name: 'confusion', id: 'nm-ng-conf', type: 'checkbox', label: 'Confusión o desorientación' },
      { name: 'uremia', id: 'nm-ng-ure', type: 'checkbox', label: 'Nitrógeno ureico de 20 mg/dL o más' },
      { name: 'leucopenia', id: 'nm-ng-leu', type: 'checkbox', label: 'Leucocitos por debajo de 4000 por microlitro' },
      { name: 'plaquetas', id: 'nm-ng-pla', type: 'checkbox', label: 'Plaquetas por debajo de 100000 por microlitro' },
      { name: 'hipotermia', id: 'nm-ng-hipo', type: 'checkbox', label: 'Temperatura central por debajo de 36 grados' },
      { name: 'hipotension', id: 'nm-ng-pa', type: 'checkbox', label: 'Hipotensión que exige reposición agresiva de volumen' },
      { type: 'note', text: 'La leucopenia y la hipotermia engañan porque parecen tranquilizadoras frente a la leucocitosis y la fiebre alta, y sin embargo son marcadores de gravedad. Esta escala no solo decide el ingreso en cuidados intensivos: también selecciona a quien se le piden hemocultivos, esputo y antígenos urinarios, a quien se le añade corticoide sistémico (salvo neumonía gripal) y a quien se le mantiene el antibiótico 5 días o más.' }
    ],
    compute(v) {
      const mayores = (v.vm ? 1 : 0) + (v.choque ? 1 : 0);
      const menoresLista = [];
      if (v.fr30) menoresLista.push('frecuencia respiratoria de 30 o más');
      if (v.pafi) menoresLista.push('PaO2/FiO2 de 250 o menos');
      if (v.multilobar) menoresLista.push('infiltrados multilobares');
      if (v.confusion) menoresLista.push('confusion');
      if (v.uremia) menoresLista.push('uremia');
      if (v.leucopenia) menoresLista.push('leucopenia');
      if (v.plaquetas) menoresLista.push('trombocitopenia');
      if (v.hipotermia) menoresLista.push('hipotermia');
      if (v.hipotension) menoresLista.push('hipotensión con reposición agresiva');
      const menores = menoresLista.length;
      if (mayores === 0 && menores === 0) return null;
      const grave = mayores >= 1 || menores >= 3;
      return { mayores, menores, menoresLista, grave, vm: !!v.vm, choque: !!v.choque };
    },
    format: r => {
      let s = `<strong>${r.mayores} criterio${r.mayores === 1 ? '' : 's'} mayor${r.mayores === 1 ? '' : 'es'} y ${r.menores} menor${r.menores === 1 ? '' : 'es'}: ${r.grave ? 'NEUMONÍA GRAVE' : 'no cumple criterios de neumonía grave'}.</strong> `;
      if (r.menores) s += `Menores presentes: ${r.menoresLista.join(', ')}. `;
      if (r.grave) {
        s += '<strong style="color:#8c3a34;">Conducta:</strong> valorar ingreso en cuidados intensivos y avisar de forma PRECOZ, porque el traslado tardío tras el deterioro tiene peor pronóstico que el ingreso directo. Extraer hemocultivos, cultivo de esputo y antígenos urinarios de neumococo y de Legionella <strong>antes de la primera dosis, sin retrasarla</strong>. Antibiótico combinado: betalactámico más macrolido, o betalactámico más fluoroquinolona. ';
        s += 'Añadir <strong>corticoide sistémico</strong>, que la guía de 2026 sugiere en la neumonía grave y recomienda en contra en la no grave, con la <strong>excepción explícita de la neumonía gripal</strong>. Duración del antibiótico de <strong>5 días o más</strong>, con recomendación fuerte.';
        if (r.vm || r.choque) s += ' Con un criterio mayor presente no hace falta contar los menores: la neumonía ya es grave.';
      } else {
        s += 'Tratamiento en planta o ambulatorio según el PSI o el CURB-65. No están indicados el corticoide sistémico (recomendación fuerte en contra en la neumonía no grave) ni los cultivos de rutina. Si alcanza estabilidad clínica, la duración sugerida es <strong>menor de 5 días, con un mínimo de 3</strong>. Reevaluar los criterios en las primeras 24 a 48 horas, porque pueden aparecer después.';
      }
      return s;
    },
    fragment: r => `${r.mayores} mayores y ${r.menores} menores: ${r.grave ? 'neumonía grave' : 'no grave'}`
  },
  {
    key: 'riesgo-resistentes', title: 'Cobertura de SARM y Pseudomonas', accent: '#7a1f3d',
    subtitle: 'Cuando ampliar la cobertura empírica, y cuando NO',
    incompleteMsg: 'Selecciona el escenario y marca los factores presentes.',
    fields: [
      { name: 'escenario', id: 'nm-rr-esc', type: 'select', label: 'Escenario', options: [
        { value: '', label: 'Selecciona' },
        { value: 'nac', label: 'Neumonía adquirida en la comunidad' },
        { value: 'nosocomial', label: 'Neumonía nosocomial o asociada a la ventilación' } ] },
      { type: 'note', text: 'Factores de riesgo. Lo que cuenta es el dato individual del paciente y la epidemiología de la propia unidad, NO su procedencia: la categoría de neumonía asociada a cuidados sanitarios se abandono precisamente porque etiquetaba como resistente a todo el que venía de una residencia o de diálisis.' },
      { name: 'aislSarm', id: 'nm-rr-sarm', type: 'checkbox', label: 'Aislamiento previo de SARM en via respiratoria' },
      { name: 'aislPseudo', id: 'nm-rr-pseu', type: 'checkbox', label: 'Aislamiento previo de Pseudomonas aeruginosa en via respiratoria' },
      { name: 'atb90', id: 'nm-rr-atb', type: 'checkbox', label: 'Antibiótico intravenoso en los últimos 90 días' },
      { name: 'prevSarm', id: 'nm-rr-prev', type: 'checkbox', label: 'Prevalencia local de SARM mayor del 20% o desconocida' },
      { name: 'resPseudo', id: 'nm-rr-res', type: 'checkbox', label: 'Más del 10% de resistencia local al antipseudomónico elegido' },
      { name: 'estructural', id: 'nm-rr-est', type: 'checkbox', label: 'Enfermedad pulmonar estructural: bronquiectasias o fibrosis quística' },
      { name: 'altoRiesgo', id: 'nm-rr-alto', type: 'checkbox', label: 'Alto riesgo de muerte: choque séptico o necesidad de ventilación mecánica' },
      { type: 'note', text: 'Regla práctica que cierra el círculo: si se amplia la cobertura, se toman cultivos ANTES de la primera dosis y se DESESCALA a las 48 a 72 horas si el germen no aparece. Ampliar y no desescalar es la peor de las combinaciones posibles, y es la más frecuente.' }
    ],
    compute(v) {
      if (!v.escenario) return null;
      const nosocomial = v.escenario === 'nosocomial';
      const razonesSarm = [];
      if (v.aislSarm) razonesSarm.push('aislamiento previo de SARM');
      if (nosocomial && v.atb90) razonesSarm.push('antibiótico intravenoso en 90 días');
      if (nosocomial && v.prevSarm) razonesSarm.push('prevalencia local alta o desconocida');
      if (nosocomial && v.altoRiesgo) razonesSarm.push('alto riesgo de muerte');
      if (!nosocomial && v.atb90 && v.prevSarm) razonesSarm.push('antibiótico intravenoso reciente con prevalencia local alta');
      const razonesPseudo = [];
      if (v.aislPseudo) razonesPseudo.push('aislamiento previo de Pseudomonas');
      if (v.estructural) razonesPseudo.push('bronquiectasias o fibrosis quística');
      if (nosocomial && v.atb90) razonesPseudo.push('antibiótico intravenoso en 90 días');
      if (nosocomial && v.altoRiesgo) razonesPseudo.push('alto riesgo de muerte');
      if (!nosocomial && v.atb90 && v.estructural) razonesPseudo.push('antibiótico intravenoso reciente sobre pulmón estructuralmente dañado');
      const doble = nosocomial && (!!v.altoRiesgo || !!v.resPseudo || !!v.estructural || !!v.aislPseudo);
      return { nosocomial, sarm: razonesSarm.length > 0, pseudo: razonesPseudo.length > 0,
        razonesSarm, razonesPseudo, doble, altoRiesgo: !!v.altoRiesgo };
    },
    format: r => {
      let s = r.nosocomial
        ? '<strong>Neumonía nosocomial o asociada a la ventilación.</strong> El esquema empírico cubre siempre Staphylococcus aureus y bacilos gramnegativos incluida Pseudomonas, y se construye sobre el <strong>antibiograma de la propia unidad</strong>. '
        : '<strong>Neumonía adquirida en la comunidad.</strong> El esquema base es betalactámico más macrolido, o fluoroquinolona respiratoria, según el lugar de tratamiento. ';
      s += r.sarm
        ? `<strong style="color:#8c3a34;">Cubrir SARM</strong> (${r.razonesSarm.join('; ')}): vancomicina o linezolid. `
        : '<strong style="color:#3f6b52;">No cubrir SARM.</strong> ';
      s += r.pseudo
        ? `<strong style="color:#8c3a34;">Cubrir Pseudomonas aeruginosa</strong> (${r.razonesPseudo.join('; ')}): piperacilina-tazobactam, cefepima, ceftazidima o meropenem. `
        : '<strong style="color:#3f6b52;">No cubrir Pseudomonas.</strong> ';
      if (r.doble) s += '<strong>Doble cobertura antipseudomónica empírica</strong> con agentes de familias distintas, hasta conocer el antibiograma. ';
      if (r.sarm || r.pseudo) {
        s += '<strong>Obligatorio al ampliar:</strong> tomar cultivos respiratorios y hemocultivos ANTES de la primera dosis, y <strong>desescalar a las 48 a 72 horas</strong> si el germen no aparece. ';
      } else {
        s += 'Sin factores de riesgo no se amplia la cobertura por la procedencia del paciente: venir de una residencia, estar en diálisis o haber ingresado hace meses no es, por si solo, motivo para el carbapenémico ni para la vancomicina. ';
      }
      if (r.altoRiesgo) s += '<strong>Con choque séptico o necesidad de ventilación</strong>, el coste de errar el tratamiento inicial es demasiado alto: se amplia de entrada y se estrecha después con los cultivos en la mano. ';
      s += r.nosocomial ? 'Duración habitual de 7 días, guiada por la evolución y por los cultivos.' : 'Duración según gravedad: menos de 5 días si no es grave y alcanza estabilidad, y 5 o más en la neumonía grave.';
      return s;
    },
    fragment: r => `${r.sarm ? 'cubrir SARM' : 'sin SARM'}, ${r.pseudo ? 'cubrir Pseudomonas' : 'sin Pseudomonas'}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
