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
  if (p <= 90) return { n: 'III', mort: '0.9 a 2.8%', destino: 'observacion o ingreso corto' };
  if (p <= 130) return { n: 'IV', mort: '8 a 9%', destino: 'ingreso hospitalario' };
  return { n: 'V', mort: '27 a 31%', destino: 'ingreso, valorando cuidados intensivos' };
}

export const calculators = [
  {
    key: 'curb65', title: 'CURB-65', accent: '#3f6b52',
    subtitle: 'Cribado rapido del lugar de tratamiento en la neumonia comunitaria',
    incompleteMsg: 'Introduce edad, nitrogeno ureico, frecuencia respiratoria y presion arterial.',
    fields: [
      { name: 'edad', id: 'nm-cu-edad', type: 'number', step: '1', label: 'Edad (a&#241;os)', placeholder: 'ej. 72', row: 'r1' },
      { name: 'bun', id: 'nm-cu-bun', type: 'number', step: '1', label: 'Nitrogeno ureico en sangre (mg/dL)', placeholder: 'ej. 24', row: 'r1' },
      { name: 'fr', id: 'nm-cu-fr', type: 'number', step: '1', label: 'Frecuencia respiratoria (por minuto)', placeholder: 'ej. 28', row: 'r2' },
      { name: 'pas', id: 'nm-cu-pas', type: 'number', step: '1', label: 'Presion arterial sistolica (mmHg)', placeholder: 'ej. 105', row: 'r3' },
      { name: 'pad', id: 'nm-cu-pad', type: 'number', step: '1', label: 'Presion arterial diastolica (mmHg)', placeholder: 'ej. 62', row: 'r3' },
      { name: 'confusion', id: 'nm-cu-conf', type: 'checkbox', label: 'Confusion de nueva aparicion' },
      { type: 'note', text: 'Un punto por cada criterio: Confusion, Urea (nitrogeno ureico mayor de 19 mg/dL, equivalente a urea mayor de 7 mmol/L), Respiraciones de 30 o mas, presion arterial sistolica menor de 90 o diastolica de 60 o menos, y edad de 65 a&#241;os o mas. Es un cribado, no una orden: no valora la hipoxemia, la comorbilidad descompensada, la tolerancia oral ni el soporte social, y penaliza al anciano solo por la edad.' }
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
      const destino = total <= 1 ? 'tratamiento ambulatorio' : total === 2 ? 'valorar ingreso hospitalario' : 'neumonia grave: ingreso y valorar cuidados intensivos';
      return { total, destino, c, u, r, b, e, edad: v.edad };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: edad de 0 a 120 a&#241;os, frecuencia respiratoria de 5 a 80, presion sistolica de 30 a 300 y diastolica de 10 a 200 mmHg.';
      let s = `<strong>CURB-65 de ${r.total} puntos: ${r.destino}.</strong> Desglose: confusion ${r.c}, urea ${r.u}, frecuencia respiratoria ${r.r}, presion arterial ${r.b}, edad ${r.e}. `;
      if (r.total <= 1) s += 'Mortalidad baja. Puede tratarse en casa si tolera la via oral, tiene soporte social y no hay comorbilidad descompensada ni hipoxemia, tres cosas que la escala no mide.';
      else if (r.total === 2) s += 'Mortalidad intermedia. Valorar ingreso u observacion, integrando la comorbilidad, la saturacion y la situacion social.';
      else s += 'Mortalidad alta. Ingreso y aplicacion de los criterios ATS/IDSA de neumonia grave para decidir cuidados intensivos, cultivos completos y corticoide sistemico.';
      if (r.e === 1 && r.total === 1) s += ' <strong>Atencion:</strong> el unico punto procede de la edad, que por si sola no obliga a ingresar. Al reves de lo que ocurre en el joven, donde la escala puede infravalorar un cuadro grave.';
      s += ' Las guias prefieren el PSI para decidir el alta, porque identifica mejor al paciente de bajo riesgo.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `CURB-65 ${r.total}: ${r.destino}`
  },
  {
    key: 'psi', title: 'Indice de gravedad de la neumonia (PSI o PORT)', accent: '#3d5a73',
    subtitle: 'Clases de riesgo I a V para decidir el lugar de tratamiento',
    incompleteMsg: 'Introduce sexo, edad y las constantes. Los datos de laboratorio son opcionales.',
    fields: [
      { name: 'sexo', id: 'nm-psi-sexo', type: 'select', label: 'Sexo', options: [
        { value: '', label: 'Selecciona' },
        { value: 'h', label: 'Hombre' },
        { value: 'm', label: 'Mujer' } ] },
      { name: 'edad', id: 'nm-psi-edad', type: 'number', step: '1', label: 'Edad (a&#241;os)', placeholder: 'ej. 68', row: 'r1' },
      { name: 'residencia', id: 'nm-psi-res', type: 'checkbox', label: 'Vive en residencia o centro sociosanitario (10)' },
      { type: 'note', text: 'Comorbilidad.' },
      { name: 'neoplasia', id: 'nm-psi-neo', type: 'checkbox', label: 'Enfermedad neoplasica activa (30)' },
      { name: 'hepatica', id: 'nm-psi-hep', type: 'checkbox', label: 'Hepatopatia cronica (20)' },
      { name: 'icc', id: 'nm-psi-icc', type: 'checkbox', label: 'Insuficiencia cardiaca congestiva (10)' },
      { name: 'acv', id: 'nm-psi-acv', type: 'checkbox', label: 'Enfermedad cerebrovascular (10)' },
      { name: 'renal', id: 'nm-psi-ren', type: 'checkbox', label: 'Nefropatia cronica (10)' },
      { type: 'note', text: 'Exploracion.' },
      { name: 'mental', id: 'nm-psi-men', type: 'checkbox', label: 'Alteracion del estado mental (20)' },
      { name: 'fr', id: 'nm-psi-fr', type: 'number', step: '1', label: 'Frecuencia respiratoria (por minuto)', placeholder: 'ej. 26', row: 'r2' },
      { name: 'pas', id: 'nm-psi-pas', type: 'number', step: '1', label: 'Presion arterial sistolica (mmHg)', placeholder: 'ej. 112', row: 'r2' },
      { name: 'temp', id: 'nm-psi-temp', type: 'number', step: '0.1', label: 'Temperatura (grados Celsius)', placeholder: 'ej. 38.4', row: 'r3' },
      { name: 'fc', id: 'nm-psi-fc', type: 'number', step: '1', label: 'Frecuencia cardiaca (latidos por minuto)', placeholder: 'ej. 104', row: 'r3' },
      { type: 'note', text: 'Laboratorio e imagen. Estos campos son OPCIONALES: si se dejan vacios se asume que son normales, y la clase resultante puede quedar por debajo de la real. Conviene completarlos antes de usar el resultado para decidir un alta.' },
      { name: 'ph', id: 'nm-psi-ph', type: 'number', step: '0.01', required: false, label: 'pH arterial (30 si es menor de 7.35)', placeholder: 'ej. 7.38', row: 'r4' },
      { name: 'bun', id: 'nm-psi-bun', type: 'number', step: '1', required: false, label: 'Nitrogeno ureico (mg/dL; 20 si es 30 o mas)', placeholder: 'ej. 26', row: 'r4' },
      { name: 'na', id: 'nm-psi-na', type: 'number', step: '1', required: false, label: 'Sodio (mmol/L; 20 si es menor de 130)', placeholder: 'ej. 134', row: 'r5' },
      { name: 'glu', id: 'nm-psi-glu', type: 'number', step: '1', required: false, label: 'Glucemia (mg/dL; 10 si es 250 o mas)', placeholder: 'ej. 138', row: 'r5' },
      { name: 'hto', id: 'nm-psi-hto', type: 'number', step: '1', required: false, label: 'Hematocrito (%; 10 si es menor de 30)', placeholder: 'ej. 38', row: 'r6' },
      { name: 'pao2', id: 'nm-psi-pao2', type: 'number', step: '1', required: false, label: 'PaO2 (mmHg; 10 si es menor de 60)', placeholder: 'ej. 68', row: 'r6' },
      { name: 'derrame', id: 'nm-psi-der', type: 'checkbox', label: 'Derrame pleural en la radiografia (10)' }
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
      if (v.bun != null) { if (v.bun >= 30) p += 20; } else faltan.push('nitrogeno ureico');
      if (v.na != null) { if (v.na < 130) p += 20; } else faltan.push('sodio');
      if (v.glu != null) { if (v.glu >= 250) p += 10; } else faltan.push('glucemia');
      if (v.hto != null) { if (v.hto < 30) p += 10; } else faltan.push('hematocrito');
      if (v.pao2 != null) { if (v.pao2 < 60) p += 10; } else faltan.push('PaO2');
      if (v.derrame) p += 10;
      const cl = claseI ? { n: 'I', mort: '0.1%', destino: 'tratamiento ambulatorio' } : claseP(p);
      return { p, clase: cl.n, mort: cl.mort, destino: cl.destino, claseI, faltan, edad: v.edad };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: edad de 0 a 120 a&#241;os, frecuencia respiratoria de 5 a 80, presion sistolica de 30 a 300 mmHg, temperatura de 25 a 45 grados y frecuencia cardiaca de 20 a 250.';
      let s = r.claseI
        ? `<strong>Clase I del PSI</strong> (menor de 51 a&#241;os, sin comorbilidad de la lista y sin alteraciones en la exploracion): mortalidad en torno al ${r.mort}. `
        : `<strong>${r.p} puntos: clase ${r.clase} del PSI.</strong> Mortalidad esperada del ${r.mort}. `;
      s += `Destino sugerido: <strong>${r.destino}</strong>. `;
      if (r.clase === 'I' || r.clase === 'II') s += 'El PSI es especialmente bueno identificando al paciente de bajo riesgo, y ese es el motivo por el que las guias lo prefieren al CURB-65 para decidir el alta. Aun asi, no valora la tolerancia oral, el soporte social ni la comorbilidad descompensada.';
      else if (r.clase === 'III') s += 'Zona intermedia: observacion en urgencias o ingreso corto, segun la evolucion en las primeras horas y el contexto social.';
      else s += 'Ingreso hospitalario. Aplicar ademas los criterios ATS/IDSA de neumonia grave para decidir cuidados intensivos, cultivos completos y corticoide sistemico.';
      if (r.edad <= 50 && !r.claseI) s += ' <strong>Ojo con el paciente joven:</strong> el PSI puntua sobre todo la edad y la comorbilidad, de modo que puede infravalorar a un adulto joven sin antecedentes que llega realmente grave. Ahi mandan los criterios de gravedad y el juicio clinico.';
      if (r.faltan.length) s += ` <strong>Calculado sin ${r.faltan.join(', ')}</strong>: esos valores se han asumido normales, de modo que la clase real puede ser superior. Completarlos antes de usar el resultado para decidir un alta.`;
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `PSI clase ${r.clase}${r.claseI ? '' : ` (${r.p} puntos)`}`
  },
  {
    key: 'nac-grave', title: 'Criterios de neumonia grave (ATS/IDSA)', accent: '#8c3a34',
    subtitle: 'Un criterio mayor o tres menores: cuidados intensivos, cultivos, corticoide y duracion',
    incompleteMsg: 'Marca los criterios presentes.',
    fields: [
      { type: 'note', text: 'Criterios MAYORES. Cualquiera de los dos define por si solo la neumonia grave.' },
      { name: 'vm', id: 'nm-ng-vm', type: 'checkbox', label: 'Necesidad de ventilacion mecanica invasiva' },
      { name: 'choque', id: 'nm-ng-cho', type: 'checkbox', label: 'Choque septico con necesidad de vasopresores' },
      { type: 'note', text: 'Criterios MENORES. Hacen falta tres o mas.' },
      { name: 'fr30', id: 'nm-ng-fr', type: 'checkbox', label: 'Frecuencia respiratoria de 30 o mas por minuto' },
      { name: 'pafi', id: 'nm-ng-paf', type: 'checkbox', label: 'Relacion PaO2/FiO2 de 250 o menos' },
      { name: 'multilobar', id: 'nm-ng-mul', type: 'checkbox', label: 'Infiltrados multilobares' },
      { name: 'confusion', id: 'nm-ng-conf', type: 'checkbox', label: 'Confusion o desorientacion' },
      { name: 'uremia', id: 'nm-ng-ure', type: 'checkbox', label: 'Nitrogeno ureico de 20 mg/dL o mas' },
      { name: 'leucopenia', id: 'nm-ng-leu', type: 'checkbox', label: 'Leucocitos por debajo de 4000 por microlitro' },
      { name: 'plaquetas', id: 'nm-ng-pla', type: 'checkbox', label: 'Plaquetas por debajo de 100000 por microlitro' },
      { name: 'hipotermia', id: 'nm-ng-hipo', type: 'checkbox', label: 'Temperatura central por debajo de 36 grados' },
      { name: 'hipotension', id: 'nm-ng-pa', type: 'checkbox', label: 'Hipotension que exige reposicion agresiva de volumen' },
      { type: 'note', text: 'La leucopenia y la hipotermia enga&#241;an porque parecen tranquilizadoras frente a la leucocitosis y la fiebre alta, y sin embargo son marcadores de gravedad. Esta escala no solo decide el ingreso en cuidados intensivos: tambien selecciona a quien se le piden hemocultivos, esputo y antigenos urinarios, a quien se le a&#241;ade corticoide sistemico (salvo neumonia gripal) y a quien se le mantiene el antibiotico 5 dias o mas.' }
    ],
    compute(v) {
      const mayores = (v.vm ? 1 : 0) + (v.choque ? 1 : 0);
      const menoresLista = [];
      if (v.fr30) menoresLista.push('frecuencia respiratoria de 30 o mas');
      if (v.pafi) menoresLista.push('PaO2/FiO2 de 250 o menos');
      if (v.multilobar) menoresLista.push('infiltrados multilobares');
      if (v.confusion) menoresLista.push('confusion');
      if (v.uremia) menoresLista.push('uremia');
      if (v.leucopenia) menoresLista.push('leucopenia');
      if (v.plaquetas) menoresLista.push('trombocitopenia');
      if (v.hipotermia) menoresLista.push('hipotermia');
      if (v.hipotension) menoresLista.push('hipotension con reposicion agresiva');
      const menores = menoresLista.length;
      if (mayores === 0 && menores === 0) return null;
      const grave = mayores >= 1 || menores >= 3;
      return { mayores, menores, menoresLista, grave, vm: !!v.vm, choque: !!v.choque };
    },
    format: r => {
      let s = `<strong>${r.mayores} criterio${r.mayores === 1 ? '' : 's'} mayor${r.mayores === 1 ? '' : 'es'} y ${r.menores} menor${r.menores === 1 ? '' : 'es'}: ${r.grave ? 'NEUMONIA GRAVE' : 'no cumple criterios de neumonia grave'}.</strong> `;
      if (r.menores) s += `Menores presentes: ${r.menoresLista.join(', ')}. `;
      if (r.grave) {
        s += '<strong style="color:#8c3a34;">Conducta:</strong> valorar ingreso en cuidados intensivos y avisar de forma PRECOZ, porque el traslado tardio tras el deterioro tiene peor pronostico que el ingreso directo. Extraer hemocultivos, cultivo de esputo y antigenos urinarios de neumococo y de Legionella <strong>antes de la primera dosis, sin retrasarla</strong>. Antibiotico combinado: betalactamico mas macrolido, o betalactamico mas fluoroquinolona. ';
        s += 'A&#241;adir <strong>corticoide sistemico</strong>, que la guia de 2026 sugiere en la neumonia grave y recomienda en contra en la no grave, con la <strong>excepcion explicita de la neumonia gripal</strong>. Duracion del antibiotico de <strong>5 dias o mas</strong>, con recomendacion fuerte.';
        if (r.vm || r.choque) s += ' Con un criterio mayor presente no hace falta contar los menores: la neumonia ya es grave.';
      } else {
        s += 'Tratamiento en planta o ambulatorio segun el PSI o el CURB-65. No estan indicados el corticoide sistemico (recomendacion fuerte en contra en la neumonia no grave) ni los cultivos de rutina. Si alcanza estabilidad clinica, la duracion sugerida es <strong>menor de 5 dias, con un minimo de 3</strong>. Reevaluar los criterios en las primeras 24 a 48 horas, porque pueden aparecer despues.';
      }
      return s;
    },
    fragment: r => `${r.mayores} mayores y ${r.menores} menores: ${r.grave ? 'neumonia grave' : 'no grave'}`
  },
  {
    key: 'riesgo-resistentes', title: 'Cobertura de SARM y Pseudomonas', accent: '#7a1f3d',
    subtitle: 'Cuando ampliar la cobertura empirica, y cuando NO',
    incompleteMsg: 'Selecciona el escenario y marca los factores presentes.',
    fields: [
      { name: 'escenario', id: 'nm-rr-esc', type: 'select', label: 'Escenario', options: [
        { value: '', label: 'Selecciona' },
        { value: 'nac', label: 'Neumonia adquirida en la comunidad' },
        { value: 'nosocomial', label: 'Neumonia nosocomial o asociada a la ventilacion' } ] },
      { type: 'note', text: 'Factores de riesgo. Lo que cuenta es el dato individual del paciente y la epidemiologia de la propia unidad, NO su procedencia: la categoria de neumonia asociada a cuidados sanitarios se abandono precisamente porque etiquetaba como resistente a todo el que venia de una residencia o de dialisis.' },
      { name: 'aislSarm', id: 'nm-rr-sarm', type: 'checkbox', label: 'Aislamiento previo de SARM en via respiratoria' },
      { name: 'aislPseudo', id: 'nm-rr-pseu', type: 'checkbox', label: 'Aislamiento previo de Pseudomonas aeruginosa en via respiratoria' },
      { name: 'atb90', id: 'nm-rr-atb', type: 'checkbox', label: 'Antibiotico intravenoso en los ultimos 90 dias' },
      { name: 'prevSarm', id: 'nm-rr-prev', type: 'checkbox', label: 'Prevalencia local de SARM mayor del 20% o desconocida' },
      { name: 'resPseudo', id: 'nm-rr-res', type: 'checkbox', label: 'Mas del 10% de resistencia local al antipseudomonico elegido' },
      { name: 'estructural', id: 'nm-rr-est', type: 'checkbox', label: 'Enfermedad pulmonar estructural: bronquiectasias o fibrosis quistica' },
      { name: 'altoRiesgo', id: 'nm-rr-alto', type: 'checkbox', label: 'Alto riesgo de muerte: choque septico o necesidad de ventilacion mecanica' },
      { type: 'note', text: 'Regla practica que cierra el circulo: si se amplia la cobertura, se toman cultivos ANTES de la primera dosis y se DESESCALA a las 48 a 72 horas si el germen no aparece. Ampliar y no desescalar es la peor de las combinaciones posibles, y es la mas frecuente.' }
    ],
    compute(v) {
      if (!v.escenario) return null;
      const nosocomial = v.escenario === 'nosocomial';
      const razonesSarm = [];
      if (v.aislSarm) razonesSarm.push('aislamiento previo de SARM');
      if (nosocomial && v.atb90) razonesSarm.push('antibiotico intravenoso en 90 dias');
      if (nosocomial && v.prevSarm) razonesSarm.push('prevalencia local alta o desconocida');
      if (nosocomial && v.altoRiesgo) razonesSarm.push('alto riesgo de muerte');
      if (!nosocomial && v.atb90 && v.prevSarm) razonesSarm.push('antibiotico intravenoso reciente con prevalencia local alta');
      const razonesPseudo = [];
      if (v.aislPseudo) razonesPseudo.push('aislamiento previo de Pseudomonas');
      if (v.estructural) razonesPseudo.push('bronquiectasias o fibrosis quistica');
      if (nosocomial && v.atb90) razonesPseudo.push('antibiotico intravenoso en 90 dias');
      if (nosocomial && v.altoRiesgo) razonesPseudo.push('alto riesgo de muerte');
      if (!nosocomial && v.atb90 && v.estructural) razonesPseudo.push('antibiotico intravenoso reciente sobre pulmon estructuralmente da&#241;ado');
      const doble = nosocomial && (!!v.altoRiesgo || !!v.resPseudo || !!v.estructural || !!v.aislPseudo);
      return { nosocomial, sarm: razonesSarm.length > 0, pseudo: razonesPseudo.length > 0,
        razonesSarm, razonesPseudo, doble, altoRiesgo: !!v.altoRiesgo };
    },
    format: r => {
      let s = r.nosocomial
        ? '<strong>Neumonia nosocomial o asociada a la ventilacion.</strong> El esquema empirico cubre siempre Staphylococcus aureus y bacilos gramnegativos incluida Pseudomonas, y se construye sobre el <strong>antibiograma de la propia unidad</strong>. '
        : '<strong>Neumonia adquirida en la comunidad.</strong> El esquema base es betalactamico mas macrolido, o fluoroquinolona respiratoria, segun el lugar de tratamiento. ';
      s += r.sarm
        ? `<strong style="color:#8c3a34;">Cubrir SARM</strong> (${r.razonesSarm.join('; ')}): vancomicina o linezolid. `
        : '<strong style="color:#3f6b52;">No cubrir SARM.</strong> ';
      s += r.pseudo
        ? `<strong style="color:#8c3a34;">Cubrir Pseudomonas aeruginosa</strong> (${r.razonesPseudo.join('; ')}): piperacilina-tazobactam, cefepima, ceftazidima o meropenem. `
        : '<strong style="color:#3f6b52;">No cubrir Pseudomonas.</strong> ';
      if (r.doble) s += '<strong>Doble cobertura antipseudomonica empirica</strong> con agentes de familias distintas, hasta conocer el antibiograma. ';
      if (r.sarm || r.pseudo) {
        s += '<strong>Obligatorio al ampliar:</strong> tomar cultivos respiratorios y hemocultivos ANTES de la primera dosis, y <strong>desescalar a las 48 a 72 horas</strong> si el germen no aparece. ';
      } else {
        s += 'Sin factores de riesgo no se amplia la cobertura por la procedencia del paciente: venir de una residencia, estar en dialisis o haber ingresado hace meses no es, por si solo, motivo para el carbapenemico ni para la vancomicina. ';
      }
      if (r.altoRiesgo) s += '<strong>Con choque septico o necesidad de ventilacion</strong>, el coste de errar el tratamiento inicial es demasiado alto: se amplia de entrada y se estrecha despues con los cultivos en la mano. ';
      s += r.nosocomial ? 'Duracion habitual de 7 dias, guiada por la evolucion y por los cultivos.' : 'Duracion segun gravedad: menos de 5 dias si no es grave y alcanza estabilidad, y 5 o mas en la neumonia grave.';
      return s;
    },
    fragment: r => `${r.sarm ? 'cubrir SARM' : 'sin SARM'}, ${r.pseudo ? 'cubrir Pseudomonas' : 'sin Pseudomonas'}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
