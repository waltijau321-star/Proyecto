// topics/obesidad/calculators.js
// 4 herramientas:
// - imc-cintura: indice de masa corporal con su clase, perimetro de cintura frente a los umbrales
//   clasicos y a los de la IDF (aplicables a poblacion latinoamericana y asiatica), e indice
//   cintura-talla, que es la medida mas simple de adiposidad central.
// - eoss: Edmonton Obesity Staging System (Sharma AM, Kushner RF. Int J Obes. 2009), que gradua
//   la obesidad por el dano real y predice la mortalidad mejor que el IMC. El estadio es el peor
//   de los cuatro dominios.
// - perdida-peso-farmacos: peso esperable con cada opcion terapeutica, con los porcentajes de
//   perdida de peso corporal total observados en los ensayos a 68-72 semanas.
// - cirugia-metabolica: indicacion de cirugia metabolica segun ASMBS/IFSO 2022.
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

const CLASES_IMC = [
  { max: 18.5, nombre: 'bajo peso' },
  { max: 25, nombre: 'peso normal' },
  { max: 30, nombre: 'sobrepeso' },
  { max: 35, nombre: 'obesidad grado I' },
  { max: 40, nombre: 'obesidad grado II' },
  { max: Infinity, nombre: 'obesidad grado III' }
];

const FARMACOS = {
  'estilo-vida':  { nombre: 'Estilo de vida estructurado', pct: 4,  nota: 'Deficit de 500 a 750 kcal/dia, 150 min/semana de actividad y terapia conductual intensiva. Es la base de todo lo demas.' },
  'orlistat':     { nombre: 'Orlistat 120 mg tres veces al dia', pct: 4, nota: 'Inhibidor de la lipasa intestinal. Efectos digestivos por la grasa no absorbida; vigilar vitaminas liposolubles.' },
  'naltrexona':   { nombre: 'Naltrexona-bupropion 32/360 mg', pct: 6, nota: 'Util si coexiste ansia por la comida. Evitar con hipertension no controlada, epilepsia o uso de opioides.' },
  'liraglutida':  { nombre: 'Liraglutida 3.0 mg diaria', pct: 8, nota: 'Agonista del receptor de GLP-1, inyeccion diaria. Escalado semanal para limitar las nauseas.' },
  'fentermina':   { nombre: 'Fentermina-topiramato 15/92 mg', pct: 10, nota: 'Teratogeno: exige anticoncepcion eficaz. Vigilar frecuencia cardiaca, parestesias y deterioro cognitivo.' },
  'semaglutida':  { nombre: 'Semaglutida 2.4 mg semanal', pct: 15, nota: 'Redujo ademas un 20% los eventos cardiovasculares en obesidad sin diabetes (SELECT). Evitar con antecedente de carcinoma medular de tiroides o MEN2.' },
  'tirzepatida':  { nombre: 'Tirzepatida 15 mg semanal', pct: 21, nota: 'Agonista dual de GIP y GLP-1; la mayor perdida de peso lograda con farmacos hasta la fecha (SURMOUNT-1).' },
  'cirugia':      { nombre: 'Cirugia metabolica', pct: 28, nota: 'Manga gastrica o bypass en Y de Roux. Exige suplementacion y seguimiento nutricional de por vida.' }
};

const UMBRALES_PESO = [
  { pct: 3,  texto: 'mejoran la glucemia y los trigliceridos' },
  { pct: 5,  texto: 'mejoran la presion arterial y la esteatosis hepatica' },
  { pct: 10, texto: 'mejoran la apnea del sueno y la esteatohepatitis' },
  { pct: 15, texto: 'aparecen la remision de la diabetes tipo 2 y el beneficio cardiovascular' }
];

export const calculators = [
  {
    key: 'imc-cintura', title: 'IMC, perimetro de cintura e indice cintura-talla', accent: '#5f7a4a',
    subtitle: 'Clasificacion antropometrica y adiposidad central',
    incompleteMsg: 'Introduce el peso y la talla, y elige el sexo.',
    fields: [
      { name: 'peso', id: 'ob-imc-peso', type: 'number', step: '0.1', label: 'Peso (kg)', placeholder: 'ej. 92', row: 'r1' },
      { name: 'talla', id: 'ob-imc-talla', type: 'number', step: '0.5', label: 'Talla (cm)', placeholder: 'ej. 168', row: 'r1' },
      { name: 'cintura', id: 'ob-imc-cint', type: 'number', step: '0.5', required: false, label: 'Opcional: perimetro de cintura (cm)', placeholder: 'ej. 104', row: 'r2' },
      { name: 'sexo', id: 'ob-imc-sexo', type: 'select', label: 'Sexo', options: [
        { value: '', label: 'Selecciona' },
        { value: 'varon', label: 'Varon' },
        { value: 'mujer', label: 'Mujer' } ], row: 'r2' },
      { name: 'poblacion', id: 'ob-imc-pob', type: 'select', required: false, label: 'Umbrales de IMC', options: [
        { value: 'general', label: 'Generales (sobrepeso 25, obesidad 30)' },
        { value: 'asiatica', label: 'Ascendencia asiatica (sobrepeso 23, obesidad 25)' } ] },
      { type: 'note', text: 'El IMC clasifica poblaciones pero no distingue grasa de musculo ni dice donde esta la grasa: hace falta al menos una medida de adiposidad central. Umbrales de cintura: clasicos, 102 cm en el varon y 88 cm en la mujer; de la IDF, aplicables a poblacion latinoamericana y asiatica, 90 y 80 cm. El indice cintura-talla es el mas simple y transferible: la cintura debe medir menos de la mitad de la talla (cociente menor de 0.5).' }
    ],
    compute(v) {
      if (v.peso == null || v.talla == null || !v.sexo) return null;
      if (!(v.peso > 0 && v.peso < 400) || !(v.talla > 80 && v.talla < 250)) return { invalido: true };
      const imc = v.peso / Math.pow(v.talla / 100, 2);
      const asiatica = v.poblacion === 'asiatica';
      let clase;
      if (asiatica) {
        if (imc < 18.5) clase = 'bajo peso';
        else if (imc < 23) clase = 'peso normal';
        else if (imc < 25) clase = 'sobrepeso (umbral asiatico)';
        else if (imc < 30) clase = 'obesidad (umbral asiatico)';
        else if (imc < 35) clase = 'obesidad grado I';
        else if (imc < 40) clase = 'obesidad grado II';
        else clase = 'obesidad grado III';
      } else {
        clase = CLASES_IMC.find(c => imc < c.max).nombre;
      }
      let cint = null;
      if (v.cintura != null && v.cintura > 0) {
        const uClasico = v.sexo === 'varon' ? 102 : 88;
        const uIdf = v.sexo === 'varon' ? 90 : 80;
        cint = {
          valor: v.cintura,
          uClasico, uIdf,
          altoClasico: v.cintura > uClasico,
          altoIdf: v.cintura >= uIdf,
          ict: v.cintura / v.talla
        };
      }
      return { imc, clase, cint, asiatica };
    },
    format: r => {
      if (r.invalido) return 'Revisa el peso y la talla: la talla va en centimetros.';
      let s = `<strong>IMC ${r.imc.toFixed(1)} kg/m2: ${r.clase}</strong>.`;
      if (r.cint) {
        const c = r.cint;
        s += ` Perimetro de cintura ${c.valor} cm: ${c.altoClasico ? 'por encima del umbral clasico de ' + c.uClasico + ' cm' : (c.altoIdf ? 'por debajo del umbral clasico de ' + c.uClasico + ' cm pero en el rango de riesgo de la IDF (' + c.uIdf + ' cm), aplicable a poblacion latinoamericana y asiatica' : 'por debajo de los dos umbrales de riesgo')}.`;
        s += ` <strong>Indice cintura-talla ${c.ict.toFixed(2)}</strong>: ${c.ict >= 0.5 ? 'por encima de 0.5, indica adiposidad central con independencia del IMC' : 'por debajo de 0.5, sin adiposidad central por este criterio'}.`;
      } else {
        s += ' Anade el perimetro de cintura: hace falta al menos una medida de adiposidad central para confirmar el exceso de adiposidad, salvo con un IMC mayor de 40.';
      }
      if (r.imc >= 30 || (r.asiatica && r.imc >= 25)) s += ' Con exceso de adiposidad confirmado, el siguiente paso es determinar si es preclinica o clinica y estadificarla con el sistema de Edmonton.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `IMC ${r.imc.toFixed(1)} (${r.clase})${r.cint ? `, cintura-talla ${r.cint.ict.toFixed(2)}` : ''}`
  },
  {
    key: 'eoss', title: 'Estadificacion de Edmonton (EOSS)', accent: '#8a6a1f',
    subtitle: 'Gradua la obesidad por el dano real, no por el IMC',
    incompleteMsg: 'Responde los cuatro dominios.',
    fields: [
      { name: 'medico', id: 'ob-eo-med', type: 'select', label: 'Comorbilidad medica', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Sin factores de riesgo relacionados con la obesidad' },
        { value: '1', label: 'Factores subclinicos (glucemia alterada, presion limitrofe, enzimas hepaticas altas)' },
        { value: '2', label: 'Enfermedad cronica establecida (diabetes, hipertension, apnea, artrosis, ovario poliquistico)' },
        { value: '3', label: 'Dano de organo establecido (infarto, insuficiencia cardiaca, complicaciones de la diabetes)' },
        { value: '4', label: 'Enfermedad terminal o gravemente discapacitante' } ] },
      { name: 'sintomas', id: 'ob-eo-sin', type: 'select', label: 'Sintomas fisicos', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Ninguno' },
        { value: '1', label: 'Leves (disnea con esfuerzo moderado, dolores ocasionales, fatiga)' },
        { value: '2', label: 'Moderados, que interfieren con la actividad diaria' },
        { value: '3', label: 'Intensos, con limitacion importante' },
        { value: '4', label: 'Incapacitantes' } ] },
      { name: 'psico', id: 'ob-eo-psi', type: 'select', label: 'Salud mental', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Sin alteracion' },
        { value: '1', label: 'Sintomas leves de ansiedad o del estado de animo' },
        { value: '2', label: 'Trastorno establecido en tratamiento' },
        { value: '3', label: 'Psicopatologia significativa y mal controlada' },
        { value: '4', label: 'Psicopatologia grave e incapacitante' } ] },
      { name: 'funcional', id: 'ob-eo-fun', type: 'select', label: 'Limitacion funcional y calidad de vida', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Ninguna' },
        { value: '1', label: 'Leve' },
        { value: '2', label: 'Moderada' },
        { value: '3', label: 'Importante' },
        { value: '4', label: 'Grave, con dependencia' } ] },
      { type: 'note', text: 'El estadio es el PEOR de los cuatro dominios, no su suma. Predice la mortalidad mejor que el indice de masa corporal: dos personas con el mismo IMC pueden estar en estadio 0 y en estadio 3. A partir del estadio 2 hay enfermedad establecida y el tratamiento activo esta justificado con independencia del IMC.' }
    ],
    compute(v) {
      const ks = ['medico', 'sintomas', 'psico', 'funcional'];
      if (ks.some(k => v[k] == null || v[k] === '')) return null;
      const vals = ks.map(k => +v[k]);
      const estadio = Math.max(...vals);
      const dominios = { medico: vals[0], sintomas: vals[1], psico: vals[2], funcional: vals[3] };
      const CONDUCTA = {
        0: 'Sin dano atribuible: prevenir la ganancia de peso e identificar y tratar los factores modificables. Evitar el sobretratamiento.',
        1: 'Factores subclinicos o sintomas leves: intervencion sobre el estilo de vida, vigilancia estrecha y tratamiento de los factores de riesgo para frenar la progresion.',
        2: 'Enfermedad establecida: iniciar tratamiento activo de la obesidad (estilo de vida mas farmaco) junto con el de cada comorbilidad, y valorar cirugia metabolica si se cumplen los criterios.',
        3: 'Dano de organo establecido: tratamiento intensivo y multidisciplinar; el objetivo es limitar la progresion y recuperar funcion, y la cirugia metabolica suele estar indicada si es viable.',
        4: 'Situacion grave o terminal: el objetivo pasa a ser el alivio sintomatico, la funcion y la calidad de vida; las intervenciones agresivas rara vez aportan.'
      };
      return { estadio, dominios, conducta: CONDUCTA[estadio] };
    },
    format: r => `<strong>Estadio EOSS ${r.estadio}</strong> (el peor de los cuatro dominios: medico ${r.dominios.medico}, sintomas ${r.dominios.sintomas}, salud mental ${r.dominios.psico}, funcional ${r.dominios.funcional}). ${r.conducta}`,
    fragment: r => `EOSS estadio ${r.estadio}`
  },
  {
    key: 'perdida-peso-farmacos', title: 'Perdida de peso esperable por tratamiento', accent: '#3d5a73',
    subtitle: 'Peso estimado y comorbilidades que responden a esa magnitud',
    incompleteMsg: 'Introduce el peso actual y elige el tratamiento.',
    fields: [
      { name: 'peso', id: 'ob-pp-peso', type: 'number', step: '0.1', label: 'Peso actual (kg)', placeholder: 'ej. 105', row: 'r1' },
      { name: 'farmaco', id: 'ob-pp-far', type: 'select', label: 'Tratamiento', options: [
        { value: '', label: 'Selecciona' },
        { value: 'estilo-vida', label: 'Estilo de vida estructurado (3 a 5%)' },
        { value: 'orlistat', label: 'Orlistat (3 a 5%)' },
        { value: 'naltrexona', label: 'Naltrexona-bupropion (6%)' },
        { value: 'liraglutida', label: 'Liraglutida 3.0 mg (8%)' },
        { value: 'fentermina', label: 'Fentermina-topiramato (10%)' },
        { value: 'semaglutida', label: 'Semaglutida 2.4 mg (15%)' },
        { value: 'tirzepatida', label: 'Tirzepatida 15 mg (21%)' },
        { value: 'cirugia', label: 'Cirugia metabolica (25 a 30%)' } ], row: 'r1' },
      { type: 'note', text: 'Porcentajes medios de perdida de peso corporal total en los ensayos a 68 a 72 semanas; la respuesta individual varia mucho y una parte de los pacientes no responde. Todos los farmacos se anaden al tratamiento de base, no lo sustituyen, y el efecto se mantiene solo mientras se mantiene el tratamiento: al suspenderlo se recupera alrededor de dos tercios de lo perdido.' }
    ],
    compute(v) {
      if (v.peso == null || !v.farmaco) return null;
      if (!(v.peso > 0 && v.peso < 400)) return { invalido: true };
      const f = FARMACOS[v.farmaco];
      const kg = v.peso * f.pct / 100;
      const alcanzados = UMBRALES_PESO.filter(u => f.pct >= u.pct);
      return { f, kg, final: v.peso - kg, alcanzados };
    },
    format: r => {
      if (r.invalido) return 'Introduce un peso plausible.';
      let s = `<strong>${r.f.nombre}: perdida media del ${r.f.pct}%</strong>, es decir unos ${r.kg.toFixed(1)} kg, hasta alrededor de ${r.final.toFixed(1)} kg. ${r.f.nota}`;
      if (r.alcanzados.length) {
        s += ` Con esa magnitud ya ${r.alcanzados.map(u => u.texto).join('; ')}.`;
      } else {
        s += ' Con esa magnitud aun no se alcanzan los umbrales de mejoria de las comorbilidades.';
      }
      return s;
    },
    fragment: r => r.invalido ? 'peso no valido' : `${r.f.nombre}: unos ${r.kg.toFixed(1)} kg (${r.f.pct}%)`
  },
  {
    key: 'cirugia-metabolica', title: 'Indicacion de cirugia metabolica (ASMBS/IFSO 2022)', accent: '#8c3a34',
    subtitle: 'Umbrales actuales, mas bajos que los criterios clasicos de 1991',
    incompleteMsg: 'Introduce el peso y la talla.',
    fields: [
      { name: 'peso', id: 'ob-cx-peso', type: 'number', step: '0.1', label: 'Peso (kg)', placeholder: 'ej. 98', row: 'r1' },
      { name: 'talla', id: 'ob-cx-talla', type: 'number', step: '0.5', label: 'Talla (cm)', placeholder: 'ej. 170', row: 'r1' },
      { name: 'metabolica', id: 'ob-cx-met', type: 'checkbox', label: 'Enfermedad metabolica (diabetes tipo 2, hipertension, dislipidemia, apnea del sueno, esteatohepatitis)' },
      { name: 'asiatica', id: 'ob-cx-asi', type: 'checkbox', label: 'Ascendencia asiatica (umbrales mas bajos)' },
      { name: 'fracaso', id: 'ob-cx-fra', type: 'checkbox', label: 'Sin respuesta duradera al tratamiento no quirurgico bien realizado' },
      { type: 'note', text: 'Los criterios de 2022 sustituyeron a los del panel de los NIH de 1991: la cirugia se indica desde un IMC de 35 con o sin comorbilidad, y desde 30 a 34.9 si hay enfermedad metabolica. En ascendencia asiatica se considera obesidad clinica desde 27.5 y la cirugia se valora desde ese umbral. No hay limite superior de edad: la decision se individualiza segun el riesgo quirurgico y la situacion funcional.' }
    ],
    compute(v) {
      if (v.peso == null || v.talla == null) return null;
      if (!(v.peso > 0 && v.peso < 400) || !(v.talla > 80 && v.talla < 250)) return { invalido: true };
      const imc = v.peso / Math.pow(v.talla / 100, 2);
      const uAlto = v.asiatica ? 32.5 : 35;
      const uBajo = v.asiatica ? 27.5 : 30;
      let indicada = false, motivo;
      if (imc >= uAlto) { indicada = true; motivo = `IMC de ${uAlto} o mas, con o sin comorbilidad`; }
      else if (imc >= uBajo && v.metabolica) { indicada = true; motivo = `IMC entre ${uBajo} y ${uAlto} con enfermedad metabolica`; }
      else if (imc >= uBajo && v.fracaso) { indicada = true; motivo = `IMC de ${uBajo} o mas sin respuesta duradera al tratamiento no quirurgico`; }
      else if (imc >= uBajo) { motivo = `IMC entre ${uBajo} y ${uAlto} sin enfermedad metabolica ni fracaso documentado del tratamiento no quirurgico: aun no cumple criterio, optimizar primero el tratamiento medico`; }
      else { motivo = `IMC por debajo de ${uBajo}: fuera de indicacion`; }
      return { imc, indicada, motivo, asiatica: v.asiatica };
    },
    format: r => {
      if (r.invalido) return 'Revisa el peso y la talla: la talla va en centimetros.';
      let s = `<strong>IMC ${r.imc.toFixed(1)} kg/m2. Cirugia metabolica: ${r.indicada ? 'INDICADA' : 'no indicada por ahora'}</strong> (${r.motivo}).`;
      if (r.asiatica) s += ' Se han aplicado los umbrales para ascendencia asiatica.';
      if (r.indicada) s += ' Antes de operar: valoracion multidisciplinar (nutricion, salud mental, anestesia), cribado de apnea del sueno y de deficits nutricionales, y compromiso explicito con la suplementacion y el seguimiento de por vida.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `IMC ${r.imc.toFixed(1)}: cirugia ${r.indicada ? 'indicada' : 'no indicada'}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
