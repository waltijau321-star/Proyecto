// topics/urgencias-tiroideas/calculators.js
// 2 herramientas:
// - burch-wartofsky: escala de probabilidad de tormenta tiroidea (Burch y Wartofsky, 1993).
//   Siete dominios; 45 puntos o mas la hacen muy probable, de 25 a 44 es tormenta inminente.
// - coma-mixedematoso: sistema de puntuacion diagnostica de Popoveniuc (2014), la unica escala
//   validada del cuadro. Seis dominios, dos de ellos con items que SUMAN entre si; 60 puntos o
//   mas lo hacen muy probable, de 25 a 59 obliga a considerarlo.
//
// Las dos son AYUDAS A LA DECISION, no criterios diagnosticos: ambos cuadros son diagnosticos
// clinicos y el tratamiento se inicia con la sospecha, sin esperar al perfil hormonal. Las dos
// calculadoras lo advierten en su resultado.
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

// Burch y Wartofsky: temperatura en grados Celsius.
function puntosTemperaturaBW(t) {
  if (t >= 40.0) return 30;
  if (t >= 39.4) return 25;
  if (t >= 38.9) return 20;
  if (t >= 38.3) return 15;
  if (t >= 37.8) return 10;
  if (t >= 37.2) return 5;
  return 0;
}
function puntosFrecuenciaBW(fc) {
  if (fc >= 140) return 25;
  if (fc >= 130) return 20;
  if (fc >= 120) return 15;
  if (fc >= 110) return 10;
  if (fc >= 99) return 5;
  return 0;
}
// Popoveniuc: temperatura en grados Celsius.
function puntosTemperaturaMix(t) {
  if (t < 32) return 30;
  if (t < 34) return 20;
  if (t < 35) return 15;
  if (t < 36) return 10;
  return 0;
}
function puntosBradicardiaMix(fc) {
  if (fc < 40) return 30;
  if (fc < 50) return 20;
  if (fc < 60) return 10;
  return 0;
}

export const calculators = [
  {
    key: 'burch-wartofsky', title: 'Escala de Burch y Wartofsky (tormenta tiroidea)', accent: '#8c2f39',
    subtitle: 'Probabilidad de tormenta tiroidea a partir de siete dominios clinicos',
    incompleteMsg: 'Introduce la temperatura y la frecuencia cardiaca, y responde los cinco dominios restantes.',
    fields: [
      { name: 'temp', id: 'ut-bw-temp', type: 'number', step: '0.1', label: 'Temperatura (grados Celsius)', placeholder: 'ej. 39.1', row: 'r1' },
      { name: 'fc', id: 'ut-bw-fc', type: 'number', step: '1', label: 'Frecuencia cardiaca (latidos por minuto)', placeholder: 'ej. 148', row: 'r1' },
      { name: 'snc', id: 'ut-bw-snc', type: 'select', label: 'Sistema nervioso central', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Sin alteracion (0)' },
        { value: '10', label: 'Leve: agitacion (10)' },
        { value: '20', label: 'Moderada: delirio, psicosis o letargia extrema (20)' },
        { value: '30', label: 'Grave: convulsion o coma (30)' } ] },
      { name: 'gi', id: 'ut-bw-gi', type: 'select', label: 'Aparato digestivo e higado', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Sin alteracion (0)' },
        { value: '10', label: 'Moderada: diarrea, nauseas, vomitos o dolor abdominal (10)' },
        { value: '20', label: 'Grave: ictericia sin causa aparente (20)' } ] },
      { name: 'ic', id: 'ut-bw-ic', type: 'select', label: 'Insuficiencia cardiaca', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Ausente (0)' },
        { value: '5', label: 'Leve: edema de pies (5)' },
        { value: '10', label: 'Moderada: crepitantes bibasales (10)' },
        { value: '15', label: 'Grave: edema agudo de pulmon (15)' } ] },
      { name: 'fa', id: 'ut-bw-fa', type: 'select', label: 'Fibrilacion auricular', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Ausente (0)' },
        { value: '10', label: 'Presente (10)' } ], row: 'r2' },
      { name: 'precip', id: 'ut-bw-prec', type: 'select', label: 'Precipitante identificado', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'No identificado (0)' },
        { value: '10', label: 'Identificado (10)' } ], row: 'r2' },
      { type: 'note', text: 'La tormenta tiroidea es un DIAGNOSTICO CLINICO: los niveles de T4 y T3 de un paciente en tormenta no difieren de los de un hipertiroideo grave estable, y una T3 normal por enfermedad aguda concomitante no la descarta. Esta escala es sensible y poco especifica: sirve para no pasarla por alto, no para etiquetar. Precipitantes que puntuan: infeccion (el mas frecuente), cirugia, traumatismo, parto, cetoacidosis, contraste yodado o amiodarona, retirada del antitiroideo, yodo radiactivo sin cobertura, infarto y embolia pulmonar. NUNCA se retrasa el tratamiento para completar la escala ni para esperar el perfil hormonal.' }
    ],
    compute(v) {
      if (v.temp == null || v.fc == null || !v.snc || !v.gi || !v.ic || !v.fa || !v.precip) return null;
      if (!(v.temp >= 30 && v.temp <= 45) || !(v.fc >= 20 && v.fc <= 300)) return { invalido: true };
      const pTemp = puntosTemperaturaBW(v.temp);
      const pFc = puntosFrecuenciaBW(v.fc);
      const pSnc = +v.snc, pGi = +v.gi, pIc = +v.ic, pFa = +v.fa, pPre = +v.precip;
      const total = pTemp + pFc + pSnc + pGi + pIc + pFa + pPre;
      const categoria = total >= 45 ? 'muy sugestiva de tormenta tiroidea'
        : total >= 25 ? 'tormenta tiroidea inminente'
        : 'tormenta tiroidea improbable';
      return { total, categoria, pTemp, pFc, pSnc, pGi, pIc, pFa, pPre, temp: v.temp, fc: v.fc };
    },
    format: r => {
      if (r.invalido) return 'Revisa la temperatura (30 a 45 grados) y la frecuencia cardiaca (20 a 300 lpm).';
      let s = `<strong>${r.total} puntos: ${r.categoria}.</strong> Desglose: temperatura ${r.pTemp}, frecuencia cardiaca ${r.pFc}, sistema nervioso central ${r.pSnc}, digestivo e higado ${r.pGi}, insuficiencia cardiaca ${r.pIc}, fibrilacion auricular ${r.pFa}, precipitante ${r.pPre}. `;
      if (r.total >= 25) {
        s += '<strong>Iniciar tratamiento completo sin esperar al perfil hormonal:</strong> propiltiouracilo 500 a 1000 mg de carga y 200 a 250 mg cada 4 horas (o metimazol 20 a 25 mg cada 4 a 6 horas); yodo (Lugol 8 a 10 gotas cada 6 a 8 horas) al menos <strong>1 hora DESPUES</strong> de la tionamida; propranolol 60 a 80 mg cada 4 horas, o esmolol en perfusion si hay insuficiencia cardiaca; hidrocortisona 100 mg cada 8 horas; paracetamol y enfriamiento fisico, <strong>nunca acido acetilsalicilico</strong>. Buscar y tratar el precipitante. Si no hay respuesta en 24 a 48 horas: colestiramina y plasmaferesis.';
        if (r.total < 45) s += ' Con una puntuacion en el rango de tormenta inminente, la conducta habitual es tratar como si fuera una tormenta establecida: el riesgo de esperar supera al de tratar.';
      } else {
        s += 'Por debajo de 25 puntos la tormenta es improbable, pero la escala <strong>no la descarta</strong>: si el juicio clinico la sugiere, se trata igual. Reevaluar de forma seriada, porque la puntuacion puede subir en horas.';
      }
      s += ' Recuerda que se extrae muestra para TSH, T4 libre, T3 y cortisol antes de tratar, pero sin esperar el resultado.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `Burch-Wartofsky ${r.total}: ${r.categoria}`
  },
  {
    key: 'coma-mixedematoso', title: 'Puntuacion diagnostica del coma mixedematoso', accent: '#4a6fa5',
    subtitle: 'Sistema de Popoveniuc, la unica escala validada del cuadro',
    incompleteMsg: 'Introduce la temperatura central y la frecuencia cardiaca, y responde los dominios.',
    fields: [
      { name: 'temp', id: 'ut-cm-temp', type: 'number', step: '0.1', label: 'Temperatura CENTRAL (grados Celsius)', placeholder: 'ej. 33.5', row: 'r1' },
      { name: 'fc', id: 'ut-cm-fc', type: 'number', step: '1', label: 'Frecuencia cardiaca (latidos por minuto)', placeholder: 'ej. 44', row: 'r1' },
      { name: 'snc', id: 'ut-cm-snc', type: 'select', label: 'Sistema nervioso central', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Sin alteracion (0)' },
        { value: '10', label: 'Somnoliento o letargico (10)' },
        { value: '15', label: 'Obnubilado (15)' },
        { value: '20', label: 'Estupor (20)' },
        { value: '30', label: 'Coma o convulsiones (30)' } ] },
      { name: 'gi', id: 'ut-cm-gi', type: 'select', label: 'Aparato digestivo', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'Sin alteracion (0)' },
        { value: '5', label: 'Anorexia, dolor abdominal o estrenimiento (5)' },
        { value: '15', label: 'Motilidad intestinal disminuida (15)' },
        { value: '20', label: 'Ileo paralitico (20)' } ] },
      { name: 'precip', id: 'ut-cm-prec', type: 'select', label: 'Precipitante identificado', options: [
        { value: '', label: 'Selecciona' },
        { value: '0', label: 'No identificado (0)' },
        { value: '10', label: 'Identificado (10)' } ] },
      { type: 'note', text: 'Los items cardiovasculares y metabolicos que siguen SUMAN entre si: marca todos los que esten presentes. La bradicardia se puntua a partir de la frecuencia cardiaca introducida arriba (50 a 59: 10 puntos; 40 a 49: 20; menos de 40: 30) y no se marca aparte.' },
      { name: 'ecg', id: 'ut-cm-ecg', type: 'checkbox', label: 'Otras alteraciones del electrocardiograma: QT largo, bajo voltaje, bloqueo de rama o de conduccion, alteraciones inespecificas del ST y de la T (10)' },
      { name: 'derrame', id: 'ut-cm-der', type: 'checkbox', label: 'Derrame pericardico o pleural (10)' },
      { name: 'edemaPulm', id: 'ut-cm-eap', type: 'checkbox', label: 'Edema pulmonar (15)' },
      { name: 'cardiomegalia', id: 'ut-cm-cmg', type: 'checkbox', label: 'Cardiomegalia (15)' },
      { name: 'hipotension', id: 'ut-cm-hipo', type: 'checkbox', label: 'Hipotension (20)' },
      { name: 'hipoNa', id: 'ut-cm-na', type: 'checkbox', label: 'Hiponatremia (10)' },
      { name: 'hipoglucemia', id: 'ut-cm-glu', type: 'checkbox', label: 'Hipoglucemia (10)' },
      { name: 'hipoxemia', id: 'ut-cm-o2', type: 'checkbox', label: 'Hipoxemia (10)' },
      { name: 'hipercapnia', id: 'ut-cm-co2', type: 'checkbox', label: 'Hipercapnia (10)' },
      { name: 'fgDisminuido', id: 'ut-cm-fg', type: 'checkbox', label: 'Descenso del filtrado glomerular (10)' },
      { type: 'note', text: 'El coma mixedematoso es un DIAGNOSTICO CLINICO y el tratamiento se inicia con la sospecha. Ojo con dos trampas: la temperatura debe ser CENTRAL, porque los termometros habituales no miden por debajo de 34 a 35 grados; y una TSH poco elevada NO descarta el cuadro, porque puede ser central o estar frenada por dopamina o glucocorticoides. Precipitantes frecuentes: infeccion (el mas habitual, y puede cursar sin fiebre ni leucocitosis), frio, sedantes u opioides, amiodarona, litio, abandono de la levotiroxina, ictus, infarto, hemorragia digestiva y cirugia.' }
    ],
    compute(v) {
      if (v.temp == null || v.fc == null || !v.snc || !v.gi || !v.precip) return null;
      if (!(v.temp >= 20 && v.temp <= 43) || !(v.fc >= 10 && v.fc <= 250)) return { invalido: true };
      const pTemp = puntosTemperaturaMix(v.temp);
      const pBradi = puntosBradicardiaMix(v.fc);
      const pSnc = +v.snc, pGi = +v.gi, pPre = +v.precip;
      const cardio = pBradi
        + (v.ecg ? 10 : 0) + (v.derrame ? 10 : 0) + (v.edemaPulm ? 15 : 0)
        + (v.cardiomegalia ? 15 : 0) + (v.hipotension ? 20 : 0);
      const metab = (v.hipoNa ? 10 : 0) + (v.hipoglucemia ? 10 : 0) + (v.hipoxemia ? 10 : 0)
        + (v.hipercapnia ? 10 : 0) + (v.fgDisminuido ? 10 : 0);
      const total = pTemp + pSnc + pGi + pPre + cardio + metab;
      const categoria = total >= 60 ? 'diagnostico muy probable de coma mixedematoso'
        : total >= 25 ? 'paciente en riesgo de coma mixedematoso'
        : 'coma mixedematoso improbable';
      return { total, categoria, pTemp, pSnc, pGi, pPre, cardio, metab, pBradi, temp: v.temp, fc: v.fc, hipercapnia: !!v.hipercapnia, hipotension: !!v.hipotension };
    },
    format: r => {
      if (r.invalido) return 'Revisa la temperatura central (20 a 43 grados) y la frecuencia cardiaca (10 a 250 lpm).';
      let s = `<strong>${r.total} puntos: ${r.categoria}.</strong> Desglose: termorregulacion ${r.pTemp}, sistema nervioso central ${r.pSnc}, digestivo ${r.pGi}, cardiovascular ${r.cardio} (de los que ${r.pBradi} por bradicardia), metabolico ${r.metab}, precipitante ${r.pPre}. `;
      if (r.total >= 25) {
        s += '<strong>Iniciar tratamiento sin esperar al perfil tiroideo.</strong> El orden importa: <strong>HIDROCORTISONA 100 mg intravenosos cada 8 horas ANTES o a la vez que la hormona</strong>, tras extraer cortisol, porque la levotiroxina acelera el aclaramiento del cortisol y puede precipitar una crisis addisoniana. Despues, levotiroxina 200 a 400 microgramos intravenosos de carga (dosis menor en el anciano, el bajo peso o la cardiopatia) y 50 a 100 microgramos al dia; la via oral no es fiable por el ileo y el edema de mucosa. Recalentamiento <strong>PASIVO</strong> con mantas, nunca activo. Umbral bajo para intubar. Restriccion hidrica para la hiponatremia y glucosa intravenosa. Antibioterapia empirica con umbral bajo aunque no haya fiebre ni leucocitosis.';
        if (r.total < 60) s += ' En el rango intermedio la escala no confirma el diagnostico, pero en un paciente compatible el balance de riesgos favorece tratar: la mortalidad del cuadro no tratado es muy alta.';
      } else {
        s += 'Por debajo de 25 puntos el cuadro es improbable, pero la escala <strong>no lo descarta</strong>: si el juicio clinico lo sugiere, tratar. Comprobar que la temperatura medida es central.';
      }
      if (r.hipercapnia) s += ' <strong>Hay hipercapnia:</strong> es la causa inmediata de muerte mas frecuente del cuadro. Valorar ventilacion mecanica de forma precoz.';
      if (r.hipotension) s += ' <strong>Hay hipotension:</strong> la respuesta vascular a los vasopresores es pobre hasta que la hormona hace efecto, y es un factor de mal pronostico.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `puntuacion ${r.total}: ${r.categoria}`
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
