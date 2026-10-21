// protocols/vpo-riesgos.js
// Las dos preguntas que la sección hace y nunca contestaba: qué riesgo hemorrágico tiene este
// procedimiento (lo pide el puente de anticoagulación) y qué riesgo quirúrgico tiene (lo pide
// el paso 3 de la ruta y la vigilancia de troponina). El residente tenía que saberlas de
// memoria para poder usar las herramientas.
//
// Son dos ejes distintos y conviene no confundirlos: la resección transuretral de próstata es
// de riesgo quirúrgico BAJO para el corazón y de riesgo hemorrágico ALTO para el sangrado.
//
// Viven en su propio archivo porque las consumen tres sitios: protocols/vpo-calc.js (el puente
// y la troponina) y protocols/vpo-ruta.js (el paso del riesgo calculado).
// Los textos se inyectan con innerHTML: usar &lt; y &gt; en vez de < y >.

export const RIESGO_HEMORRAGICO = {
  titulo: 'Riesgo hemorrágico del procedimiento',
  intro: 'Es el riesgo de <strong>sangrado mayor a 30 días</strong> del propio procedimiento, no el riesgo cardiovascular del paciente.',
  fuente: 'CHEST 2022 (Douketis JD, et al. Chest. 2022;162(5):e207-e243), tabla 2, basada en las guías de la ISTH',
  niveles: [
    { id: 'alto', label: 'Alto', umbral: '2 % o más', ejemplos: [
      'Cualquier operación mayor, de más de 45 minutos, o con lesión tisular extensa',
      'Cirugía oncológica, sobre todo resección de tumor sólido: pulmonar, esofágica, gástrica, de colon, hepatobiliar o pancreática',
      'Cardiaca, intracraneal o espinal',
      'Ortopédica mayor, incluida la prótesis de hombro',
      'Urólogica o digestiva, sobre todo con anastomosis: resección intestinal, resección transuretral de próstata, resección vesical, nefrectomía o biopsia renal',
      'Resección de pólipo colónico, gastrostomía endoscópica percutánea, colangiopancreatografía retrógrada',
      'Cirugía de órganos muy vascularizados: riñón, hígado o bazo',
      'Anestesia neuroaxial e infiltración epidural, donde además importan las consecuencias del hematoma'
    ] },
    { id: 'bajo', label: 'Bajo a moderado', umbral: '0 a 2 %', ejemplos: [
      'Artroscopia, cirugía de pie o mano',
      'Biopsias cutáneas o de ganglio',
      'Coronariografía, sobre todo por vía radial',
      'Endoscopia digestiva o colonoscopia, con o sin biopsia',
      'Colecistectomía laparoscópica, hernia abdominal, histerectomía abdominal',
      'Broncoscopia con o sin biopsia, cirugía hemorroidal'
    ] },
    { id: 'minimo', label: 'Mínimo', umbral: 'alrededor del 0 %', ejemplos: [
      'Procedimientos dentales menores: extracciones, restauraciones, prótesis, endodoncia y limpiezas',
      'Cirugía de cataratas y otros procedimientos oftalmológicos',
      'Dermatológicos menores: escisión de carcinoma basocelular o espinocelular, queratosis actínica, nevos',
      'Implante de marcapasos o desfibrilador'
    ] }
  ]
};

export const RIESGO_QUIRURGICO = {
  titulo: 'Riesgo quirúrgico del procedimiento',
  intro: 'Es el riesgo a 30 días de muerte cardiovascular, infarto o ictus que aporta <strong>la intervención sola</strong>, sin contar las comorbilidades del paciente. La guía de 2024 define el riesgo como la combinación de paciente y procedimiento, de modo que esta tabla es la mitad del cálculo: el intermedio y el alto caen los dos dentro de su "riesgo elevado" de 1 % o más.',
  fuente: 'ESC 2022 (Halvorsen S, et al. Eur Heart J. 2022;43(39):3826-3924), tabla 5',
  niveles: [
    { id: 'bajo', label: 'Bajo', umbral: 'menos de 1 %', ejemplos: [
      'Mama, tiroides, oftalmológica, dental',
      'Cirugía superficial y reconstructiva',
      'Ginecológica menor y ortopédica menor, como la meniscectomía',
      'Urológica menor, incluida la resección transuretral de próstata',
      'Resección pulmonar menor por videotoracoscopia'
    ] },
    { id: 'intermedio', label: 'Intermedio', umbral: 'de 1 a 5 %', ejemplos: [
      'Carótida asintomática, y carótida sintomática por endarterectomía',
      'Reparación endovascular de aneurisma aórtico y angioplastia arterial periférica',
      'Cabeza y cuello',
      'Intraperitoneal: esplenectomía, hernia hiatal, colecistectomía',
      'Intratorácica no mayor',
      'Neurológica u ortopédica mayor: cadera y columna',
      'Trasplante renal, y urológica o ginecológica mayor'
    ] },
    { id: 'alto', label: 'Alto', umbral: 'más de 5 %', ejemplos: [
      'Aórtica y vascular mayor',
      'Duodenopancreática, esofaguectomía, resección hepática y cirugía de vía biliar',
      'Resección suprarrenal y cistectomía total',
      'Neumonectomía, por videotoracoscopia o abierta',
      'Trasplante pulmonar o hepático',
      'Revascularización abierta de miembro inferior por isquemia aguda, o amputación',
      'Reparación de perforación intestinal',
      'Carótida sintomática tratada con stent'
    ] }
  ]
};

// Una tabla de estas en el hueco donde la pregunta se hace. Se pinta compacta, porque es una
// ayuda para contestar un campo, no contenido de estudio.
export function tablaRiesgoHTML(tabla) {
  const filas = tabla.niveles.map(n => `
    <div class="vpo-riesgo-fila">
      <span class="vpo-riesgo-nivel">${n.label} <em>(${n.umbral})</em></span>
      <ul>${n.ejemplos.map(e => `<li>${e}</li>`).join('')}</ul>
    </div>`).join('');
  return `<strong>${tabla.titulo}.</strong> ${tabla.intro}
    <div class="vpo-riesgo-tabla">${filas}</div>
    <span class="vpo-riesgo-fuente">${tabla.fuente}</span>`;
}

export default { RIESGO_HEMORRAGICO, RIESGO_QUIRURGICO, tablaRiesgoHTML };
