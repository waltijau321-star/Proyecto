// topics/disfuncion-organica-multiple/calculators.js
// 3 herramientas:
// - sofa: calcula A LA VEZ la escala clasica (1996) y SOFA-2 (JAMA 2025) con los mismos datos, y
//   se&#241;ala donde difieren. Los puntos de corte de SOFA-2 estan tomados de la Tabla 2 del articulo
//   original que hay en Bibliografia/ (Ranzani et al), leyendo el PDF.
// - cribado-deterioro: NEWS2 y qSOFA en paralelo, con la recomendacion FUERTE de la Surviving
//   Sepsis Campaign 2026 de preferir las escalas de alerta precoz frente a qSOFA como cribado.
// - apache-ii: puntuacion de gravedad al ingreso, con banda cualitativa y la advertencia de que
//   predice mortalidad de poblaciones y no de individuos.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

// ---------- SOFA-2, dominio a dominio (Tabla 2 del articulo original) ----------
function cerebro2(gcs, delirium) {
  let p;
  if (gcs >= 15) p = 0;
  else if (gcs >= 13) p = 1;
  else if (gcs >= 9) p = 2;
  else if (gcs >= 6) p = 3;
  else p = 4;
  if (p === 0 && delirium) p = 1; // farmacos para delirium: 1 punto aunque el Glasgow sea 15
  return p;
}
function respiratorio2(pafi, soporte) {
  const avanzado = soporte === 'avanzado' || soporte === 'ecmo';
  if (soporte === 'ecmo') return 4;
  if (pafi > 300) return 0;
  if (pafi > 225) return 1;
  if (pafi > 150) return 2;
  if (!avanzado) return 2; // sin soporte avanzado el maximo son 2 puntos
  return pafi > 75 ? 3 : 4;
}
function cardio2(pam, neAdr, otroVaso, mecanico) {
  if (mecanico) return 4;
  const d = neAdr || 0;
  if (d > 0.4) return 4;
  if (d > 0.2) return otroVaso ? 4 : 3;
  if (d > 0) return otroVaso ? 3 : 2;
  if (otroVaso) return 2;
  return pam >= 70 ? 0 : 1;
}
function higado2(bili) {
  if (bili <= 1.2) return 0;
  if (bili <= 3.0) return 1;
  if (bili <= 6.0) return 2;
  if (bili <= 12.0) return 3;
  return 4;
}
function rinon2(creat, diuresis, trs) {
  if (trs) return 4;
  let p;
  if (creat <= 1.2) p = 0;
  else if (creat <= 2.0) p = 1;
  else if (creat <= 3.5) p = 2;
  else p = 3;
  const pd = { normal: 0, leve: 1, moderada: 2, grave: 3 }[diuresis] || 0;
  return Math.max(p, pd);
}
function hemostasia2(plq) {
  if (plq > 150) return 0;
  if (plq > 100) return 1;
  if (plq > 80) return 2;
  if (plq > 50) return 3;
  return 4;
}

// ---------- SOFA clasico (1996) ----------
function cerebro1(gcs) {
  if (gcs >= 15) return 0;
  if (gcs >= 13) return 1;
  if (gcs >= 10) return 2;
  if (gcs >= 6) return 3;
  return 4;
}
function respiratorio1(pafi, soporte) {
  const conSoporte = soporte === 'avanzado' || soporte === 'ecmo';
  if (pafi >= 400) return 0;
  if (pafi >= 300) return 1;
  if (pafi >= 200) return 2;
  if (!conSoporte) return 2;
  return pafi >= 100 ? 3 : 4;
}
function cardio1(pam, neAdr, otroVaso) {
  const d = neAdr || 0;
  if (d > 0.1) return 4;
  if (d > 0) return 3;
  if (otroVaso) return 2;
  return pam >= 70 ? 0 : 1;
}
function higado1(bili) {
  if (bili < 1.2) return 0;
  if (bili < 2.0) return 1;
  if (bili < 6.0) return 2;
  if (bili < 12.0) return 3;
  return 4;
}
function rinon1(creat, diuresis) {
  let p;
  if (creat < 1.2) p = 0;
  else if (creat < 2.0) p = 1;
  else if (creat < 3.5) p = 2;
  else if (creat < 5.0) p = 3;
  else p = 4;
  const pd = { normal: 0, leve: 0, moderada: 3, grave: 4 }[diuresis] || 0;
  return Math.max(p, pd);
}
function hemostasia1(plq) {
  if (plq >= 150) return 0;
  if (plq >= 100) return 1;
  if (plq >= 50) return 2;
  if (plq >= 20) return 3;
  return 4;
}

const NOMBRES = ['cerebro', 'respiratorio', 'cardiovascular', 'higado', 'ri&#241;on', 'hemostasia'];

// ---------- NEWS2 ----------
function newsFr(fr) { if (fr <= 8) return 3; if (fr <= 11) return 1; if (fr <= 20) return 0; if (fr <= 24) return 2; return 3; }
function newsSat1(s) { if (s <= 91) return 3; if (s <= 93) return 2; if (s <= 95) return 1; return 0; }
function newsSat2(s, oxigeno) {
  if (s <= 83) return 3;
  if (s <= 85) return 2;
  if (s <= 87) return 1;
  if (!oxigeno) return s >= 88 ? 0 : 0;
  if (s <= 92) return 0;
  if (s <= 94) return 1;
  if (s <= 96) return 2;
  return 3;
}
function newsTas(t) { if (t <= 90) return 3; if (t <= 100) return 2; if (t <= 110) return 1; if (t <= 219) return 0; return 3; }
function newsFc(f) { if (f <= 40) return 3; if (f <= 50) return 1; if (f <= 90) return 0; if (f <= 110) return 1; if (f <= 130) return 2; return 3; }
function newsTemp(t) { if (t <= 35.0) return 3; if (t <= 36.0) return 1; if (t <= 38.0) return 0; if (t <= 39.0) return 1; return 2; }

export const calculators = [
  {
    key: 'sofa', title: 'SOFA y SOFA-2', accent: '#8c3a34',
    subtitle: 'Las dos versiones con los mismos datos, para ver donde difieren',
    incompleteMsg: 'Introduce Glasgow, cociente PaO2/FiO2, tension arterial media, bilirrubina, creatinina y plaquetas, y elige el soporte respiratorio y la diuresis.',
    fields: [
      { name: 'gcs', id: 'do-sf-g', type: 'number', step: '1', label: 'Escala de coma de Glasgow (3 a 15)', placeholder: 'ej. 14', row: 'r1' },
      { name: 'delirium', id: 'do-sf-d', type: 'checkbox', label: 'Recibe tratamiento farmacologico para el delirium', row: 'r1' },
      { name: 'pafi', id: 'do-sf-p', type: 'number', step: '1', label: 'Cociente PaO2/FiO2 (mmHg)', placeholder: 'ej. 180', row: 'r2' },
      { name: 'soporte', id: 'do-sf-s', type: 'select', label: 'Soporte respiratorio', row: 'r2', options: [
        { v: 'ninguno', t: 'Ninguno u oxigeno convencional' },
        { v: 'avanzado', t: 'Avanzado: alto flujo, CPAP, VNI o ventilacion invasiva' },
        { v: 'ecmo', t: 'Oxigenacion por membrana extracorporea' }
      ] },
      { name: 'pam', id: 'do-sf-m', type: 'number', step: '1', label: 'Tension arterial media (mmHg)', placeholder: 'ej. 68', row: 'r3' },
      { name: 'neAdr', id: 'do-sf-n', type: 'number', step: '0.01', required: false, label: 'Noradrenalina + adrenalina, suma (mcg/kg/min)', placeholder: 'ej. 0.25', row: 'r3' },
      { name: 'otroVaso', id: 'do-sf-o', type: 'checkbox', label: 'Otro vasopresor o inotropico a cualquier dosis (dopamina, vasopresina, dobutamina)', row: 'r4' },
      { name: 'mecanico', id: 'do-sf-me', type: 'checkbox', label: 'Soporte mecanico circulatorio (balon, asistencia ventricular, membrana venoarterial)', row: 'r4' },
      { name: 'bili', id: 'do-sf-b', type: 'number', step: '0.1', label: 'Bilirrubina total (mg/dL)', placeholder: 'ej. 2.4', row: 'r5' },
      { name: 'creat', id: 'do-sf-c', type: 'number', step: '0.1', label: 'Creatinina (mg/dL)', placeholder: 'ej. 2.2', row: 'r5' },
      { name: 'diuresis', id: 'do-sf-di', type: 'select', label: 'Diuresis', row: 'r6', options: [
        { v: 'normal', t: 'Conservada' },
        { v: 'leve', t: 'Menos de 0.5 mL/kg/h durante 6 a 12 horas' },
        { v: 'moderada', t: 'Menos de 0.5 mL/kg/h durante 12 horas o mas' },
        { v: 'grave', t: 'Menos de 0.3 mL/kg/h durante 24 horas, o anuria' }
      ] },
      { name: 'plq', id: 'do-sf-pl', type: 'number', step: '1', label: 'Plaquetas (x1000/microL)', placeholder: 'ej. 90', row: 'r6' },
      { name: 'trs', id: 'do-sf-t', type: 'checkbox', label: 'Recibe depuracion extrarrenal, o cumple criterios para iniciarla' },
      { type: 'note', text: 'Se usan los PEORES valores de las ultimas 24 horas. En el paciente sedado hay que introducir el ultimo Glasgow ANTERIOR a la sedacion, y si no se conoce se puntua 0. Los datos que faltan el primer dia se puntuan 0; a partir del segundo, se arrastra el ultimo valor conocido. La conversion de vasoactivos a la escala clasica es una APROXIMACION, porque aquella se construyo alrededor de la dopamina.' }
    ],
    compute(v) {
      if (v.gcs == null || v.pafi == null || v.pam == null || v.bili == null || v.creat == null || v.plq == null) return null;
      if (!v.soporte || !v.diuresis) return null;
      if (!(v.gcs >= 3 && v.gcs <= 15)) return { invalido: true };
      if (!(v.pafi > 0 && v.pafi <= 700)) return { invalido: true };
      if (!(v.pam > 10 && v.pam <= 200)) return { invalido: true };
      if (v.neAdr != null && !(v.neAdr >= 0 && v.neAdr <= 10)) return { invalido: true };
      if (!(v.bili >= 0 && v.bili <= 100)) return { invalido: true };
      if (!(v.creat >= 0 && v.creat <= 25)) return { invalido: true };
      if (!(v.plq >= 0 && v.plq <= 2000)) return { invalido: true };

      const s2 = [
        cerebro2(v.gcs, !!v.delirium),
        respiratorio2(v.pafi, v.soporte),
        cardio2(v.pam, v.neAdr, !!v.otroVaso, !!v.mecanico),
        higado2(v.bili),
        rinon2(v.creat, v.diuresis, !!v.trs),
        hemostasia2(v.plq)
      ];
      const s1 = [
        cerebro1(v.gcs),
        respiratorio1(v.pafi, v.soporte),
        cardio1(v.pam, v.neAdr, !!v.otroVaso),
        higado1(v.bili),
        rinon1(v.creat, v.diuresis),
        hemostasia1(v.plq)
      ];
      const t2 = s2.reduce((a, b) => a + b, 0);
      const t1 = s1.reduce((a, b) => a + b, 0);
      const difs = [];
      for (let i = 0; i < 6; i++) if (s2[i] !== s1[i]) difs.push(`${NOMBRES[i]} ${s1[i]} a ${s2[i]}`);
      const organos = s2.filter(x => x >= 2).length;
      const techoResp = (v.soporte === 'ninguno') && v.pafi <= 150;
      return {
        s1, s2, t1, t2, difs, organos,
        delirium: !!v.delirium && v.gcs >= 15,
        techoResp, trs: !!v.trs, mecanico: !!v.mecanico
      };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: Glasgow de 3 a 15, cociente de 1 a 700, tension media de 11 a 200 mmHg, vasoactivos de 0 a 10 mcg/kg/min, bilirrubina de 0 a 100, creatinina de 0 a 25 y plaquetas de 0 a 2000.';
      let s = `<strong>SOFA-2: ${r.t2} de 24 puntos. SOFA clasico: ${r.t1} de 24.</strong>`;
      s += `<br><span style="opacity:.85;">Por sistemas en SOFA-2: ${NOMBRES.map((n, i) => n + ' ' + r.s2[i]).join(', ')}.</span>`;
      if (r.difs.length) s += `<br><strong style="color:#8a6a1f;">Las dos versiones difieren en ${r.difs.length} dominio${r.difs.length > 1 ? 's' : ''}:</strong> ${r.difs.join('; ')}. Las puntuaciones de una y otra NO son comparables entre si: hay que elegir una version y mantenerla a lo largo del ingreso.`;
      else s += '<br><span style="opacity:.75;">Con estos datos ambas versiones coinciden dominio a dominio, que es lo habitual en los casos sin soporte avanzado ni vasoactivos.</span>';
      if (r.organos >= 2) s += `<br><strong style="color:#8c3a34;">Hay ${r.organos} sistemas con disfuncion relevante (2 puntos o mas):</strong> el cuadro encaja con un sindrome de disfuncion organica multiple.`;
      s += '<br><span style="opacity:.75;">Con infeccion sospechada o documentada, un incremento AGUDO de 2 o mas puntos sobre el basal define SEPSIS. Si no se conoce disfuncion previa, el basal se asume 0.</span>';
      if (r.delirium) s += '<br><span style="color:#6b4a8c;">El punto del dominio cerebral viene de los farmacos para el delirium, con un Glasgow de 15.</span> Es una de las novedades de SOFA-2: reconoce el delirium como disfuncion organica, y en la version clasica ese paciente puntuaria 0.';
      if (r.techoResp) s += '<br><strong style="color:#8a6a1f;">Atencion al dominio respiratorio:</strong> el cociente es bajo pero no hay soporte ventilatorio avanzado, y SOFA-2 limita a 2 puntos en ese caso. Si el paciente deberia estar recibiendo ese soporte y no lo recibe, la escala esta INFRAESTIMANDO su gravedad.';
      if (r.trs) s += '<br><span style="opacity:.75;">La depuracion extrarrenal, recibida o indicada, puntua el maximo del dominio renal en SOFA-2 aunque la creatinina no lo haga.</span>';
      if (r.mecanico) s += '<br><span style="opacity:.75;">El soporte mecanico circulatorio puntua el maximo del dominio cardiovascular en SOFA-2, un supuesto que la version de 1996 no contemplaba.</span>';
      s += '<br><span style="opacity:.75;">Lo que mas informa NO es esta cifra sino su TENDENCIA: hay que repetirla cada 24 horas y comparar.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `SOFA-2 ${r.t2}/24 (clasico ${r.t1}/24)`
  },

  {
    key: 'cribado-deterioro', title: 'Cribado del deterioro: NEWS2 y qSOFA', accent: '#3f6b52',
    subtitle: 'Las dos herramientas con las mismas constantes, y cual recomienda la guia',
    incompleteMsg: 'Introduce las constantes vitales y elige el nivel de conciencia.',
    fields: [
      { name: 'fr', id: 'do-cr-fr', type: 'number', step: '1', label: 'Frecuencia respiratoria (por minuto)', placeholder: 'ej. 24', row: 'r1' },
      { name: 'sat', id: 'do-cr-s', type: 'number', step: '1', label: 'Saturacion de oxigeno (%)', placeholder: 'ej. 93', row: 'r1' },
      { name: 'oxigeno', id: 'do-cr-o', type: 'checkbox', label: 'Recibe oxigeno suplementario', row: 'r2' },
      { name: 'hipercapnico', id: 'do-cr-h', type: 'checkbox', label: 'Objetivo de saturacion bajo por riesgo de retencion de carbonico (escala 2)', row: 'r2' },
      { name: 'tas', id: 'do-cr-t', type: 'number', step: '1', label: 'Tension arterial sistolica (mmHg)', placeholder: 'ej. 98', row: 'r3' },
      { name: 'fc', id: 'do-cr-fc', type: 'number', step: '1', label: 'Frecuencia cardiaca (por minuto)', placeholder: 'ej. 112', row: 'r3' },
      { name: 'temp', id: 'do-cr-te', type: 'number', step: '0.1', label: 'Temperatura (grados centigrados)', placeholder: 'ej. 38.4', row: 'r4' },
      { name: 'conciencia', id: 'do-cr-c', type: 'select', label: 'Nivel de conciencia', row: 'r4', options: [
        { v: 'alerta', t: 'Alerta y orientado' },
        { v: 'alterado', t: 'Confusion nueva, o responde solo a la voz, al dolor o no responde' }
      ] },
      { type: 'note', text: 'La Surviving Sepsis Campaign de 2026 recomienda de forma FUERTE, con certeza moderada, usar NEWS, NEWS2, MEWS o los criterios de respuesta inflamatoria sistemica POR ENCIMA de qSOFA como herramienta unica de cribado de sepsis en el paciente hospitalizado, porque la sensibilidad de qSOFA es baja. Un qSOFA positivo sigue siendo una alerta valiosa de deterioro, pero no sirve como cribado. Y ninguna escala reemplaza a un sistema que garantice que alguien acude cuando la puntuacion sube.' }
    ],
    compute(v) {
      if (v.fr == null || v.sat == null || v.tas == null || v.fc == null || v.temp == null || !v.conciencia) return null;
      if (!(v.fr > 0 && v.fr <= 80)) return { invalido: true };
      if (!(v.sat >= 40 && v.sat <= 100)) return { invalido: true };
      if (!(v.tas >= 40 && v.tas <= 300)) return { invalido: true };
      if (!(v.fc >= 10 && v.fc <= 300)) return { invalido: true };
      if (!(v.temp >= 25 && v.temp <= 45)) return { invalido: true };
      const alterado = v.conciencia === 'alterado';
      const partes = [
        ['frecuencia respiratoria', newsFr(v.fr)],
        ['saturacion', v.hipercapnico ? newsSat2(v.sat, !!v.oxigeno) : newsSat1(v.sat)],
        ['oxigeno suplementario', v.oxigeno ? 2 : 0],
        ['tension sistolica', newsTas(v.tas)],
        ['frecuencia cardiaca', newsFc(v.fc)],
        ['nivel de conciencia', alterado ? 3 : 0],
        ['temperatura', newsTemp(v.temp)]
      ];
      const news = partes.reduce((a, b) => a + b[1], 0);
      const rojo = partes.filter(p => p[1] === 3).map(p => p[0]);
      let banda;
      if (news >= 7) banda = 'ALTO';
      else if (news >= 5) banda = 'MEDIO';
      else if (rojo.length) banda = 'BAJO A MEDIO';
      else banda = 'BAJO';
      const q = (v.fr >= 22 ? 1 : 0) + (alterado ? 1 : 0) + (v.tas <= 100 ? 1 : 0);
      return { news, banda, rojo, partes: partes.filter(p => p[1] > 0), q, qPositivo: q >= 2, discordante: (news >= 5) !== (q >= 2) };
    },
    format: r => {
      if (r.invalido) return 'Revisa las constantes: frecuencia respiratoria de 1 a 80, saturacion de 40 a 100%, sistolica de 40 a 300 mmHg, frecuencia cardiaca de 10 a 300 y temperatura de 25 a 45 grados.';
      let s = `<strong>NEWS2: ${r.news} puntos, riesgo ${r.banda}. qSOFA: ${r.q} de 3${r.qPositivo ? ', POSITIVO' : ''}.</strong>`;
      if (r.partes.length) s += `<br><span style="opacity:.8;">Suman: ${r.partes.map(p => p[0] + ' (' + p[1] + ')').join(', ')}.</span>`;
      if (r.banda === 'ALTO') s += '<br><strong style="color:#8c3a34;">Respuesta de emergencia:</strong> valoracion inmediata por un equipo con competencias en cuidados criticos, monitorizacion continua y traslado a un area de mayor nivel de vigilancia.';
      else if (r.banda === 'MEDIO') s += '<br><strong style="color:#8a6a1f;">Respuesta urgente:</strong> valoracion por un medico con capacidad de decision, aumento de la frecuencia de constantes a cada hora y umbral bajo para escalar.';
      else if (r.banda === 'BAJO A MEDIO') s += `<br><strong style="color:#8a6a1f;">Hay un parametro aislado en rango rojo (${r.rojo.join(', ')}).</strong> Aunque el total sea bajo, un solo parametro extremo obliga a valoracion clinica urgente: ese es el motivo de que la escala tenga esta categoria propia.`;
      else s += '<br><span style="color:#3f6b52;">Riesgo bajo por ahora.</span> Continuar la monitorizacion habitual y repetir. Una puntuacion baja en un paciente que impresiona mal NO cierra nada: la preocupacion del personal de enfermeria es por si sola un criterio de escalada.';
      if (r.discordante) {
        s += '<br><strong style="color:#3d5a73;">Las dos herramientas discrepan,</strong> y eso es exactamente lo que la evidencia predice. La guia de sepsis de 2026 recomienda de forma FUERTE usar NEWS, NEWS2, MEWS o los criterios de respuesta inflamatoria sistemica por encima de qSOFA como cribado unico, porque qSOFA tiene sensibilidad baja y deja escapar pacientes.';
      } else if (r.qPositivo) {
        s += '<br><strong style="color:#8c3a34;">qSOFA positivo</strong>, lo que se asocia a peor pronostico en el paciente con infeccion. No es un cribado, pero un qSOFA positivo si obliga a pensar en sepsis y a actuar.';
      }
      s += '<br><span style="opacity:.75;">Ninguna de las dos diagnostica nada: detectan DETERIORO. La causa puede ser infeccion, hemorragia, tromboembolia, arritmia, dolor o deprivacion. Y su utilidad real depende del sistema de respuesta que las acompa&#241;e, no del numero.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `NEWS2 ${r.news}, riesgo ${r.banda.toLowerCase()}; qSOFA ${r.q}/3`
  },

  {
    key: 'apache-ii', title: 'APACHE II', accent: '#8a6a1f',
    subtitle: 'Gravedad al ingreso con los peores valores de las primeras 24 horas',
    incompleteMsg: 'Introduce las variables fisiologicas, la edad y elige la situacion de salud cronica previa.',
    fields: [
      { name: 'temp', id: 'do-ap-t', type: 'number', step: '0.1', label: 'Temperatura central (grados centigrados)', placeholder: 'ej. 38.9', row: 'r1' },
      { name: 'pam', id: 'do-ap-m', type: 'number', step: '1', label: 'Tension arterial media (mmHg)', placeholder: 'ej. 62', row: 'r1' },
      { name: 'fc', id: 'do-ap-fc', type: 'number', step: '1', label: 'Frecuencia cardiaca (por minuto)', placeholder: 'ej. 124', row: 'r2' },
      { name: 'fr', id: 'do-ap-fr', type: 'number', step: '1', label: 'Frecuencia respiratoria (por minuto)', placeholder: 'ej. 28', row: 'r2' },
      { name: 'oxi', id: 'do-ap-o', type: 'number', step: '1', label: 'PaO2 en mmHg si la FiO2 es menor de 0.5, o gradiente alveoloarterial si es 0.5 o mayor', placeholder: 'ej. 68', row: 'r3' },
      { name: 'fio2Alta', id: 'do-ap-f', type: 'checkbox', label: 'La FiO2 es 0.5 o mayor (el valor anterior es el gradiente)', row: 'r3' },
      { name: 'ph', id: 'do-ap-ph', type: 'number', step: '0.01', label: 'pH arterial', placeholder: 'ej. 7.28', row: 'r4' },
      { name: 'na', id: 'do-ap-na', type: 'number', step: '1', label: 'Sodio (mEq/L)', placeholder: 'ej. 148', row: 'r4' },
      { name: 'k', id: 'do-ap-k', type: 'number', step: '0.1', label: 'Potasio (mEq/L)', placeholder: 'ej. 5.2', row: 'r5' },
      { name: 'creat', id: 'do-ap-c', type: 'number', step: '0.1', label: 'Creatinina (mg/dL)', placeholder: 'ej. 2.4', row: 'r5' },
      { name: 'fra', id: 'do-ap-fa', type: 'checkbox', label: 'Fracaso renal agudo (duplica los puntos de la creatinina)', row: 'r6' },
      { name: 'hto', id: 'do-ap-ht', type: 'number', step: '0.1', label: 'Hematocrito (%)', placeholder: 'ej. 32', row: 'r6' },
      { name: 'leu', id: 'do-ap-l', type: 'number', step: '0.1', label: 'Leucocitos (x1000/microL)', placeholder: 'ej. 18.5', row: 'r7' },
      { name: 'gcs', id: 'do-ap-g', type: 'number', step: '1', label: 'Escala de coma de Glasgow (3 a 15)', placeholder: 'ej. 12', row: 'r7' },
      { name: 'edad', id: 'do-ap-e', type: 'number', step: '1', label: 'Edad (a&#241;os)', placeholder: 'ej. 71', row: 'r8' },
      { name: 'cronica', id: 'do-ap-cr', type: 'select', label: 'Insuficiencia organica cronica grave o inmunodepresion', row: 'r8', options: [
        { v: 'no', t: 'No' },
        { v: 'urgente', t: 'Si, ingreso medico o posoperatorio urgente' },
        { v: 'electivo', t: 'Si, posoperatorio electivo' }
      ] },
      { type: 'note', text: 'Se usan los PEORES valores de las primeras 24 horas de ingreso en la unidad y se calcula UNA sola vez: no es una escala de seguimiento, para eso esta SOFA. Predice la mortalidad esperada de POBLACIONES y sirve para ajustar por gravedad, comparar unidades y dise&#241;ar estudios. NO esta validada para decidir el techo terapeutico de un paciente concreto ni para comunicar un pronostico individual a la familia.' }
    ],
    compute(v) {
      const req = ['temp', 'pam', 'fc', 'fr', 'oxi', 'ph', 'na', 'k', 'creat', 'hto', 'leu', 'gcs', 'edad'];
      for (const k of req) if (v[k] == null) return null;
      if (!v.cronica) return null;
      if (!(v.gcs >= 3 && v.gcs <= 15)) return { invalido: true };
      if (!(v.edad >= 0 && v.edad <= 120)) return { invalido: true };
      if (!(v.ph >= 6.5 && v.ph <= 8)) return { invalido: true };
      if (!(v.temp >= 25 && v.temp <= 45)) return { invalido: true };

      const rango = (x, tramos) => { for (const [lim, pts] of tramos) if (x >= lim) return pts; return tramos[tramos.length - 1][1]; };
      const aps = {};
      aps.temperatura = rango(v.temp, [[41, 4], [39, 3], [38.5, 1], [36, 0], [34, 1], [32, 2], [30, 3], [-99, 4]]);
      aps.tensionMedia = rango(v.pam, [[160, 4], [130, 3], [110, 2], [70, 0], [50, 2], [-99, 4]]);
      aps.frecuenciaCardiaca = rango(v.fc, [[180, 4], [140, 3], [110, 2], [70, 0], [55, 2], [40, 3], [-99, 4]]);
      aps.frecuenciaRespiratoria = rango(v.fr, [[50, 4], [35, 3], [25, 1], [12, 0], [10, 1], [6, 2], [-99, 4]]);
      aps.oxigenacion = v.fio2Alta
        ? rango(v.oxi, [[500, 4], [350, 3], [200, 2], [-99, 0]])
        : rango(v.oxi, [[70, 0], [61, 1], [55, 3], [-99, 4]]);
      aps.ph = rango(v.ph, [[7.7, 4], [7.6, 3], [7.5, 1], [7.33, 0], [7.25, 2], [7.15, 3], [-99, 4]]);
      aps.sodio = rango(v.na, [[180, 4], [160, 3], [155, 2], [150, 1], [130, 0], [120, 2], [111, 3], [-99, 4]]);
      aps.potasio = rango(v.k, [[7, 4], [6, 3], [5.5, 1], [3.5, 0], [3, 1], [2.5, 2], [-99, 4]]);
      let pc = rango(v.creat, [[3.5, 4], [2, 3], [1.5, 2], [0.6, 0], [-99, 2]]);
      if (v.fra) pc = pc * 2;
      aps.creatinina = pc;
      aps.hematocrito = rango(v.hto, [[60, 4], [50, 2], [46, 1], [30, 0], [20, 2], [-99, 4]]);
      aps.leucocitos = rango(v.leu, [[40, 4], [20, 2], [15, 1], [3, 0], [1, 2], [-99, 4]]);
      aps.glasgow = 15 - v.gcs;

      const sumaAps = Object.keys(aps).reduce((a, k) => a + aps[k], 0);
      const pEdad = v.edad >= 75 ? 6 : v.edad >= 65 ? 5 : v.edad >= 55 ? 3 : v.edad >= 45 ? 2 : 0;
      const pCronica = v.cronica === 'urgente' ? 5 : v.cronica === 'electivo' ? 2 : 0;
      const total = sumaAps + pEdad + pCronica;
      let banda;
      if (total <= 9) banda = 'BAJA';
      else if (total <= 19) banda = 'MODERADA';
      else if (total <= 29) banda = 'ALTA';
      else banda = 'MUY ALTA';
      const top = Object.keys(aps).filter(k => aps[k] >= 3);
      return { aps, sumaAps, pEdad, pCronica, total, banda, top, edad: v.edad, fra: !!v.fra };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: Glasgow de 3 a 15, edad de 0 a 120 a&#241;os, pH de 6.5 a 8 y temperatura de 25 a 45 grados.';
      let s = `<strong>APACHE II: ${r.total} puntos de 71. Gravedad ${r.banda}.</strong>`;
      s += `<br><span style="opacity:.85;">Variables fisiologicas ${r.sumaAps}, edad ${r.pEdad}, salud cronica ${r.pCronica}.</span>`;
      if (r.top.length) s += `<br><span style="opacity:.8;">Lo que mas pesa: ${r.top.join(', ')}.</span>`;
      if (r.fra) s += '<br><span style="opacity:.75;">Los puntos de la creatinina se han duplicado por tratarse de un fracaso renal agudo, tal como indica la escala original.</span>';
      s += '<br><strong style="color:#8c3a34;">Como se interpreta y como NO.</strong> La puntuacion estima la mortalidad esperada de una POBLACION con esa gravedad y sirve para ajustar por gravedad, comparar unidades y dise&#241;ar estudios. No esta validada para predecir el desenlace de este paciente, ni para decidir su techo terapeutico, ni para comunicar un pronostico a la familia.';
      s += '<br><span style="opacity:.75;">Es una escala de INGRESO: se calcula una sola vez con los peores valores de las primeras 24 horas y no se repite. Para el seguimiento diario, la escala que corresponde es SOFA, cuya TENDENCIA si aporta informacion pronostica.</span>';
      if (r.edad >= 65) s += `<br><span style="opacity:.75;">La edad aporta ${r.pEdad} puntos, que es una parte relevante del total. Conviene tenerlo presente al comparar pacientes de edades muy distintas.</span>`;
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `APACHE II ${r.total}/71, gravedad ${r.banda.toLowerCase()}`
  }
];
