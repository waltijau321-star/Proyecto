// topics/espirometria/calculators.js
// 8 herramientas, todas con compute() puro (se prueban con casos en tests.js):
// - pfr-calidad-espiro: grado de calidad ATS/ERS 2019 (Graham 2019, tabla 10), mayores de 6 años.
// - pfr-patron: patrón funcional y gravedad por puntuación z (ERS/ATS 2022 vía el manual de
//   Gochicoa y Torre, p. 36-39; con TLC, algoritmo de Alvarado-Amador 2024 y Ora 2024).
// - pfr-broncodilatador: los dos criterios a la vez, > 10% del predicho (2022) y >= 12% y
//   >= 200 mL del basal (GINA 2026, recuadro 1-2).
// - pfr-dlco-hb: ajuste de la DLCO predicha por hemoglobina (Centeno-Sáenz 2023, p. 246).
// - pfr-pc6m: distancia predicha por Enright 1998 (Gochicoa-Rangel 2019, tabla 3) y producto
//   distancia-desaturación (Agarwala 2020).
// - pfr-fuerza: PImax y PEmax frente a Black y Hyatt (Mora-Romero 2019, tabla 3) y umbrales que
//   excluyen debilidad (ARTP 2020), con la caída de la capacidad vital en decúbito.
// - pfr-fem: variabilidad diurna del flujo espiratorio máximo (GINA 2026, p. 32).
// - pfr-feno: categoría de FeNO y cambio significativo (ATS 2011, recomendaciones 6 a 8 y 11-12).
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

const LIN_Z = -1.645;

// Gravedad por z (manual de Gochicoa y Torre, p. 37): > -1.65 normal; -1.65 a -2.50 leve;
// -2.51 a -4 moderada; < -4.1 grave. Exportada para las pruebas.
export function gravedadZ(z) {
  if (z >= LIN_Z) return 'sin descenso';
  if (z >= -2.5) return 'leve';
  if (z >= -4) return 'moderada';
  return 'grave';
}

// Grado de calidad de un juego de maniobras (FEV1 o FVC por separado), mayores de 6 años.
export function gradoCalidad(aceptables, utilizables, diferenciaMl) {
  if (aceptables === 0) return utilizables ? 'U' : 'F';
  if (aceptables === 1) return 'E';
  if (diferenciaMl <= 150) return aceptables >= 3 ? 'A' : 'B';
  if (diferenciaMl <= 200) return 'C';
  if (diferenciaMl <= 250) return 'D';
  return 'E';
}

const GRADO_TXT = {
  A: '3 o más maniobras aceptables con los dos valores mayores a 150 mL o menos',
  B: '2 maniobras aceptables a 150 mL o menos',
  C: '2 o más aceptables a 200 mL o menos',
  D: '2 o más aceptables a 250 mL o menos',
  E: '2 o más aceptables con más de 250 mL, o una sola aceptable',
  U: 'ninguna aceptable, al menos una utilizable',
  F: 'ninguna aceptable ni utilizable'
};

// Patrón funcional. z de FEV1/FVC, FVC y FEV1 obligatorias; z de la TLC opcional (null).
export function patronEspirometrico(zRatio, zFvc, zFev1, zTlc) {
  const ratioBajo = zRatio < LIN_Z, fvcBaja = zFvc < LIN_Z, fev1Bajo = zFev1 < LIN_Z;
  const conTlc = zTlc !== null && zTlc !== undefined;
  const tlcBaja = conTlc && zTlc < LIN_Z;
  let patron, conducta, zGrado = null, base = null;
  if (!ratioBajo && !fvcBaja) {
    if (tlcBaja) {
      patron = 'Espirometría normal con TLC baja: patrón no definido, posible restricción temprana';
      conducta = 'Integrar con la clínica; si se sospecha enfermedad intersticial, seguirla de cerca.';
    } else {
      patron = 'Normal';
      conducta = 'Una espirometría normal no descarta enfermedad ni dice nada del intercambio de gases.';
    }
  } else if (ratioBajo && !fvcBaja) {
    if (tlcBaja) {
      patron = 'Trastorno mixto: obstrucción con TLC baja';
      conducta = 'Restricción confirmada por la TLC más obstrucción en la espirometría.';
    } else if (!fev1Bajo) {
      patron = 'Obstructivo con FEV1 y FVC normales: obstrucción leve o patrón disanáptico';
      conducta = 'Una respuesta al broncodilatador o una curva cóncava orientan a obstrucción; en un joven sano, considerar disanapsis.';
    } else {
      patron = 'Obstructivo';
      conducta = 'Valorar la respuesta al broncodilatador.';
    }
    zGrado = zFev1; base = 'FEV1';
  } else if (!ratioBajo && fvcBaja) {
    if (!conTlc) {
      patron = 'Posible restricción o patrón no específico (PRISm)';
      conducta = 'Medir la TLC (pletismografía) y hacer prueba broncodilatadora.';
    } else if (tlcBaja) {
      patron = 'Restricción confirmada (TLC baja)';
      conducta = 'Buscar la causa: parénquima, pared torácica o músculos.';
    } else {
      patron = 'Patrón no específico (TLC normal)';
      conducta = 'Hacer prueba broncodilatadora: si es positiva, equivale a obstrucción.';
    }
    zGrado = zFvc; base = 'FVC';
  } else {
    if (!conTlc) {
      patron = 'Posible mixto, o obstrucción con atrapamiento aéreo';
      conducta = 'Solo la TLC los distingue; el broncodilatador suele normalizar la FVC en la pseudorrestricción.';
    } else if (tlcBaja) {
      patron = 'Trastorno mixto (obstrucción y restricción)';
      conducta = 'Restricción confirmada por la TLC más obstrucción en la espirometría.';
    } else {
      patron = 'Obstrucción con atrapamiento aéreo (pseudorrestricción)';
      conducta = 'La FVC baja se explica por aire atrapado, no por pulmón pequeño.';
    }
    zGrado = zFev1; base = 'FEV1';
  }
  return { patron, conducta, gravedad: zGrado === null ? null : gravedadZ(zGrado), base, zGrado };
}

// Respuesta al broncodilatador de un parámetro (litros). Devuelve el cambio y los dos criterios.
export function respuestaBD(pre, post, pred) {
  const deltaMl = (post - pre) * 1000;
  const pctBasal = deltaMl / (pre * 1000) * 100;
  const pctPred = deltaMl / (pred * 1000) * 100;
  return { deltaMl, pctBasal, pctPred, pos2022: pctPred > 10, posClasico: pctBasal >= 12 && deltaMl >= 200 };
}

// Factor de ajuste de la DLCO predicha por hemoglobina (Hb en g/dL).
export function factorHb(grupo, hb) {
  const k = grupo === 'h' ? 10.22 : 9.38;
  return 1.7 * hb / (k + hb);
}

// Distancia predicha en la caminata de 6 minutos, Enright 1998 (40 a 80 años).
export function enright1998(sexo, edad, tallaCm, pesoKg) {
  return sexo === 'h'
    ? 7.57 * tallaCm - 5.02 * edad - 1.76 * pesoKg - 309
    : 2.11 * tallaCm - 5.78 * edad - 2.29 * pesoKg + 667;
}

// Black y Hyatt, en cmH2O.
export function blackHyatt(sexo, edad) {
  return sexo === 'h'
    ? { pi: 143 - 0.55 * edad, pe: 268 - 1.03 * edad }
    : { pi: 104 - 0.51 * edad, pe: 170 - 0.53 * edad };
}

export function variabilidadFem(max, min) {
  return (max - min) / ((max + min) / 2) * 100;
}

export function categoriaFeno(feno, grupo) {
  const [bajo, alto] = grupo === 'nino' ? [20, 35] : [25, 50];
  if (feno < bajo) return 'baja';
  if (feno > alto) return 'alta';
  return 'intermedia';
}

// Cambio entre dos visitas (ATS 2011, recomendaciones 11 y 12). Con valor previo sobre 50 ppb:
// aumento de más de 20% o reducción de al menos 20%. Con valor previo bajo 50: más de 10 ppb.
export function cambioFeno(previo, actual) {
  const d = actual - previo;
  let significativo;
  if (previo > 50) {
    const pct = d / previo * 100;
    significativo = d > 0 ? pct > 20 : -pct >= 20;
  } else {
    significativo = Math.abs(d) > 10;
  }
  return { d, significativo, sube: d > 0 };
}

const SEXO = [{ value: '', label: 'Selecciona' }, { value: 'h', label: 'Varón' }, { value: 'm', label: 'Mujer' }];
const f1 = n => (Math.round(n * 10) / 10).toFixed(1);

export const calculators = [
  {
    key: 'pfr-calidad-espiro', title: 'Grado de calidad de la espirometría', accent: '#3d5a73',
    subtitle: 'ATS/ERS 2019: maniobras aceptables y repetibilidad (mayores de 6 años)',
    incompleteMsg: 'Indica cuántas maniobras fueron aceptables; con dos o más, la diferencia entre los dos valores mayores; con ninguna, si hubo alguna utilizable.',
    fields: [
      { name: 'acept', id: 'pfr-cal-acept', type: 'number', label: 'Maniobras aceptables', placeholder: 'ej. 3', row: 'r1' },
      { name: 'dif', id: 'pfr-cal-dif', type: 'number', required: false, label: 'Opcional: diferencia entre los dos valores mayores (mL)', placeholder: 'ej. 120', row: 'r1' },
      { name: 'util', id: 'pfr-cal-util', type: 'select', label: 'Si ninguna fue aceptable: ¿hubo alguna utilizable?', options: [
        { value: '', label: 'No aplica' }, { value: 'si', label: 'Sí' }, { value: 'no', label: 'No' } ] },
      { type: 'note', text: 'Se califica por separado el FEV1 y la FVC, y por separado el juego prebroncodilatador y el posbroncodilatador. Aceptable: volumen extrapolado de 5% de la FVC o 0.100 L como máximo, sin tos en el primer segundo ni cierre glótico, sin fuga, y con meseta, 15 segundos de espiración o FVC repetible.' }
    ],
    compute(v) {
      if (v.acept == null) return null;
      if (!(Number.isInteger(v.acept) && v.acept >= 0 && v.acept <= 15)) return { invalido: true };
      if (v.acept === 0) {
        if (!v.util) return null;
        return { grado: gradoCalidad(0, v.util === 'si', null) };
      }
      if (v.acept === 1) return { grado: 'E' };
      if (v.dif == null) return null;
      if (!(v.dif >= 0)) return { invalido: true };
      return { grado: gradoCalidad(v.acept, false, v.dif) };
    },
    format: r => {
      if (r.invalido) return 'Las maniobras aceptables son un número entero de 0 a 15 y la diferencia no puede ser negativa.';
      const nota = r.grado === 'A' || r.grado === 'B' ? 'Resultado confiable.' : r.grado === 'F' ? 'No hay valor que informar.' : 'Se informa con reserva; el juicio del intérprete pesa más.';
      return `<strong>Grado ${r.grado}</strong>: ${GRADO_TXT[r.grado]}. ${nota} El grado califica la consistencia de los soplidos, no la salud del pulmón.`;
    },
    fragment: r => r.invalido ? 'grado de calidad no valido' : `grado de calidad ${r.grado}`
  },
  {
    key: 'pfr-patron', title: 'Patrón funcional y gravedad por puntuación z', accent: '#8c3a34',
    subtitle: 'FEV1/FVC, FVC y FEV1 frente a su LIN (z −1.645); TLC opcional',
    incompleteMsg: 'Introduce la puntuación z del FEV1/FVC, de la FVC y del FEV1 (aparecen en el informe junto al LIN).',
    fields: [
      { name: 'zr', id: 'pfr-pat-zr', type: 'number', step: '0.01', label: 'z del FEV1/FVC', placeholder: 'ej. -2.1', row: 'r1' },
      { name: 'zfvc', id: 'pfr-pat-zfvc', type: 'number', step: '0.01', label: 'z de la FVC', placeholder: 'ej. -0.8', row: 'r1' },
      { name: 'zfev1', id: 'pfr-pat-zfev1', type: 'number', step: '0.01', label: 'z del FEV1', placeholder: 'ej. -2.7', row: 'r2' },
      { name: 'ztlc', id: 'pfr-pat-ztlc', type: 'number', step: '0.01', required: false, label: 'Opcional: z de la TLC (pletismografía)', placeholder: 'si se midió', row: 'r2' },
      { type: 'note', text: 'Por debajo del LIN significa z menor de −1.645. Gravedad (ERS/ATS 2022): −1.65 a −2.5 leve, −2.51 a −4 moderada, menor de −4.1 grave; con la z del FEV1 en la obstrucción y la de la FVC en la posible restricción. Sin TLC, restricción y mixto solo pueden ser "posibles".' }
    ],
    compute(v) {
      if ([v.zr, v.zfvc, v.zfev1].some(x => x == null)) return null;
      if ([v.zr, v.zfvc, v.zfev1, v.ztlc].some(x => x != null && Math.abs(x) > 10)) return { invalido: true };
      return patronEspirometrico(v.zr, v.zfvc, v.zfev1, v.ztlc);
    },
    format: r => {
      if (r.invalido) return 'Las puntuaciones z de un adulto rara vez pasan de ±6; revisa los valores.';
      const grav = r.gravedad && r.gravedad !== 'sin descenso' ? ` Gravedad <strong>${r.gravedad}</strong> por la z del ${r.base} (${f1(r.zGrado)}).` : '';
      return `<strong>${r.patron}</strong>.${grav} ${r.conducta}`;
    },
    fragment: r => r.invalido ? 'patrón no valido' : r.patron + (r.gravedad && r.gravedad !== 'sin descenso' ? ', ' + r.gravedad : '')
  },
  {
    key: 'pfr-broncodilatador', title: 'Respuesta al broncodilatador', accent: '#3f6b52',
    subtitle: 'Los dos criterios a la vez: ERS/ATS 2022 y GINA (12% y 200 mL)',
    incompleteMsg: 'Introduce el FEV1 antes y después del broncodilatador y el FEV1 predicho, en litros. La FVC es opcional.',
    fields: [
      { name: 'fev1Pre', id: 'pfr-bd-fev1pre', type: 'number', step: '0.01', label: 'FEV1 basal (L)', placeholder: 'ej. 2.00', row: 'r1' },
      { name: 'fev1Post', id: 'pfr-bd-fev1post', type: 'number', step: '0.01', label: 'FEV1 posbroncodilatador (L)', placeholder: 'ej. 2.26', row: 'r1' },
      { name: 'fev1Pred', id: 'pfr-bd-fev1pred', type: 'number', step: '0.01', label: 'FEV1 predicho (L)', placeholder: 'ej. 3.20' },
      { name: 'fvcPre', id: 'pfr-bd-fvcpre', type: 'number', step: '0.01', required: false, label: 'Opcional: FVC basal (L)', placeholder: 'ej. 3.40', row: 'r2' },
      { name: 'fvcPost', id: 'pfr-bd-fvcpost', type: 'number', step: '0.01', required: false, label: 'Opcional: FVC posbroncodilatador (L)', placeholder: 'ej. 3.55', row: 'r2' },
      { name: 'fvcPred', id: 'pfr-bd-fvcpred', type: 'number', step: '0.01', required: false, label: 'Opcional: FVC predicha (L)', placeholder: 'ej. 4.10' },
      { type: 'note', text: '400 µg de salbutamol con espaciador y nueva espirometría a los 15 minutos. ERS/ATS 2022: positiva si el FEV1 o la FVC suben más del 10% de su PREDICHO. GINA (y el criterio de 2005): 12% o más y 200 mL o más respecto al BASAL.' }
    ],
    compute(v) {
      const base = [v.fev1Pre, v.fev1Post, v.fev1Pred];
      if (base.some(x => x == null)) return null;
      const fvc = [v.fvcPre, v.fvcPost, v.fvcPred];
      const nFvc = fvc.filter(x => x != null).length;
      if (base.some(x => !(x > 0 && x < 10)) || fvc.some(x => x != null && !(x > 0 && x < 12))) return { invalido: true };
      if (nFvc > 0 && nFvc < 3) return { fvcIncompleta: true };
      const fev1 = respuestaBD(v.fev1Pre, v.fev1Post, v.fev1Pred);
      const fvcR = nFvc === 3 ? respuestaBD(v.fvcPre, v.fvcPost, v.fvcPred) : null;
      return {
        fev1, fvc: fvcR,
        pos2022: fev1.pos2022 || (fvcR ? fvcR.pos2022 : false),
        posClasico: fev1.posClasico || (fvcR ? fvcR.posClasico : false)
      };
    },
    format: r => {
      if (r.invalido) return 'Los volúmenes deben estar en litros y ser positivos.';
      if (r.fvcIncompleta) return 'Para la FVC hacen falta los tres valores: basal, posbroncodilatador y predicha.';
      const linea = (nom, x) => `${nom}: cambio de ${Math.round(x.deltaMl)} mL, ${f1(x.pctBasal)}% del basal y ${f1(x.pctPred)}% del predicho.`;
      let s = linea('FEV1', r.fev1) + (r.fvc ? ' ' + linea('FVC', r.fvc) : '');
      s += ` <strong>ERS/ATS 2022: ${r.pos2022 ? 'positiva' : 'negativa'}. GINA (12% y 200 mL): ${r.posClasico ? 'positiva' : 'negativa'}.</strong>`;
      if (r.pos2022 !== r.posClasico) s += ' Los criterios discrepan: informa ambos; para el diagnóstico de asma GINA conserva el de 12% y 200 mL.';
      return s;
    },
    fragment: r => r.invalido || r.fvcIncompleta ? 'respuesta al broncodilatador no valida' : `respuesta BD: ERS/ATS 2022 ${r.pos2022 ? 'positiva' : 'negativa'}, GINA ${r.posClasico ? 'positiva' : 'negativa'}`
  },
  {
    key: 'pfr-dlco-hb', title: 'DLCO ajustada por hemoglobina', accent: '#6b3a5a',
    subtitle: 'Ajuste de la DLCO predicha (ERS/ATS 2017, guía mexicana 2023)',
    incompleteMsg: 'Selecciona el grupo e introduce la DLCO medida, la predicha y la hemoglobina del mismo día.',
    fields: [
      { name: 'grupo', id: 'pfr-dlco-grupo', type: 'select', label: 'Grupo', options: [
        { value: '', label: 'Selecciona' }, { value: 'h', label: 'Varón adolescente o adulto' }, { value: 'm', label: 'Mujer, o menor de 15 años' } ] },
      { name: 'med', id: 'pfr-dlco-med', type: 'number', step: '0.1', label: 'DLCO medida (mL/min/mmHg)', placeholder: 'ej. 18.5', row: 'r1' },
      { name: 'pred', id: 'pfr-dlco-pred', type: 'number', step: '0.1', label: 'DLCO predicha (mL/min/mmHg)', placeholder: 'ej. 27.0', row: 'r1' },
      { name: 'hb', id: 'pfr-dlco-hb', type: 'number', step: '0.1', label: 'Hemoglobina (g/dL)', placeholder: 'ej. 10.2' },
      { type: 'note', text: 'Predicha ajustada = predicha × 1.7 Hb / (10.22 + Hb) en varones y adolescentes, o × 1.7 Hb / (9.38 + Hb) en mujeres y menores de 15 años. La gravedad se gradúa por z (−1.64 a −2.5 leve, −2.51 a −4 moderada, menor de −4.1 grave); en porcentaje del predicho, el esquema previo daba leve por encima de 60% y bajo el LIN, moderada 40 a 60% y grave menos de 40%.' }
    ],
    compute(v) {
      if (!v.grupo || [v.med, v.pred, v.hb].some(x => x == null)) return null;
      if (!(v.med > 0 && v.pred > 0) || !(v.hb >= 3 && v.hb <= 25)) return { invalido: true };
      const factor = factorHb(v.grupo, v.hb);
      const predAj = v.pred * factor;
      return { factor, predAj, pctAj: v.med / predAj * 100, pctSin: v.med / v.pred * 100 };
    },
    format: r => {
      if (r.invalido) return 'Valores positivos y hemoglobina entre 3 y 25 g/dL.';
      const dir = r.factor < 0.995 ? 'la anemia baja la DLCO esperada' : r.factor > 1.005 ? 'la hemoglobina alta sube la DLCO esperada' : 'la hemoglobina es la de referencia';
      return `<strong>DLCO predicha ajustada ${f1(r.predAj)} mL/min/mmHg</strong> (factor ${r.factor.toFixed(3)}: ${dir}). La DLCO medida es el <strong>${Math.round(r.pctAj)}%</strong> de la predicha ajustada, frente a ${Math.round(r.pctSin)}% sin ajustar.`;
    },
    fragment: r => r.invalido ? 'DLCO no valida' : `DLCO ${Math.round(r.pctAj)}% del predicho ajustado por Hb`
  },
  {
    key: 'pfr-pc6m', title: 'Caminata de 6 minutos', accent: '#3f6b52',
    subtitle: 'Distancia predicha (Enright 1998) y producto distancia-desaturación',
    incompleteMsg: 'Selecciona el sexo e introduce edad, talla, peso y metros caminados.',
    fields: [
      { name: 'sexo', id: 'pfr-6m-sexo', type: 'select', label: 'Sexo', options: SEXO, row: 'r1' },
      { name: 'edad', id: 'pfr-6m-edad', type: 'number', label: 'Edad (años)', placeholder: 'ej. 65', row: 'r1' },
      { name: 'talla', id: 'pfr-6m-talla', type: 'number', label: 'Talla (cm)', placeholder: 'ej. 165', row: 'r2' },
      { name: 'peso', id: 'pfr-6m-peso', type: 'number', label: 'Peso (kg)', placeholder: 'ej. 70', row: 'r2' },
      { name: 'dist', id: 'pfr-6m-dist', type: 'number', label: 'Distancia caminada (m)', placeholder: 'ej. 380', row: 'r3' },
      { name: 'spo2', id: 'pfr-6m-spo2', type: 'number', required: false, label: 'Opcional: SpO2 más baja (%)', placeholder: 'ej. 86', row: 'r3' },
      { type: 'note', text: 'Enright 1998 se derivó en adultos de 40 a 80 años; en otras poblaciones ajusta mal, así que lo más útil es el cambio en el mismo paciente (cambio mínimo importante 25 a 33 m). Umbrales por enfermedad: EPOC, riesgo creciente bajo 350 m; FPI, menos de 250 m; hipertensión arterial pulmonar, 440 y 165 m. Producto distancia-desaturación: 290 m% o menos en EPOC y menos de 200 m% en FPI se asociaron a mortalidad.' }
    ],
    compute(v) {
      if (!v.sexo || [v.edad, v.talla, v.peso, v.dist].some(x => x == null)) return null;
      if (!(v.edad >= 18 && v.edad <= 100) || !(v.talla >= 120 && v.talla <= 220) || !(v.peso >= 30 && v.peso <= 250) || !(v.dist >= 0 && v.dist <= 1200)) return { invalido: true };
      if (v.spo2 != null && !(v.spo2 >= 50 && v.spo2 <= 100)) return { invalido: true };
      const pred = enright1998(v.sexo, v.edad, v.talla, v.peso);
      return { pred, pct: v.dist / pred * 100, dist: v.dist, dsp: v.spo2 != null ? v.dist * v.spo2 : null, fueraEdad: v.edad < 40 || v.edad > 80 };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: adulto, talla de 120 a 220 cm, peso de 30 a 250 kg, distancia de 0 a 1200 m y SpO2 de 50 a 100%.';
      let s = `<strong>${Math.round(r.dist)} m, ${Math.round(r.pct)}% de lo predicho</strong> (${Math.round(r.pred)} m por Enright 1998).`;
      if (r.fueraEdad) s += ' Edad fuera del rango de la ecuación (40 a 80 años): tomar el porcentaje con cautela.';
      if (r.dsp != null) s += ` Producto distancia-desaturación ${Math.round(r.dsp)} m%.`;
      const flags = [];
      if (r.dist < 350) flags.push('bajo 350 m (umbral de riesgo en EPOC)');
      if (r.dist < 250) flags.push('bajo 250 m (duplica la mortalidad en FPI)');
      if (r.dist < 165) flags.push('bajo 165 m (alto riesgo en hipertensión arterial pulmonar)');
      if (r.dist > 440) flags.push('sobre 440 m (bajo riesgo en hipertensión arterial pulmonar)');
      if (flags.length) s += ' Según la enfermedad: ' + flags.join('; ') + '.';
      return s;
    },
    fragment: r => r.invalido ? 'caminata no valida' : `caminata ${Math.round(r.dist)} m (${Math.round(r.pct)}% Enright)`
  },
  {
    key: 'pfr-fuerza', title: 'Fuerza de los músculos respiratorios', accent: '#5c4a73',
    subtitle: 'PImax y PEmax frente a Black y Hyatt; capacidad vital en decúbito',
    incompleteMsg: 'Selecciona el sexo e introduce la edad, la PImax y la PEmax (en valor absoluto).',
    fields: [
      { name: 'sexo', id: 'pfr-fz-sexo', type: 'select', label: 'Sexo', options: SEXO, row: 'r1' },
      { name: 'edad', id: 'pfr-fz-edad', type: 'number', label: 'Edad (años)', placeholder: 'ej. 55', row: 'r1' },
      { name: 'pi', id: 'pfr-fz-pi', type: 'number', label: 'PImax, valor absoluto (cmH2O)', placeholder: 'ej. 60', row: 'r2' },
      { name: 'pe', id: 'pfr-fz-pe', type: 'number', label: 'PEmax (cmH2O)', placeholder: 'ej. 110', row: 'r2' },
      { name: 'cvSent', id: 'pfr-fz-cvsent', type: 'number', step: '0.01', required: false, label: 'Opcional: capacidad vital sentado (L)', placeholder: 'ej. 3.20', row: 'r3' },
      { name: 'cvSup', id: 'pfr-fz-cvsup', type: 'number', step: '0.01', required: false, label: 'Opcional: capacidad vital en decúbito (L)', placeholder: 'ej. 2.10', row: 'r3' },
      { type: 'note', text: 'Se excluye debilidad significativa con PImax de 80 cmH2O o más (−80), o con PEmax mayor de 80 en varones o de 60 en mujeres. Normal: más del 80% del predicho de Black y Hyatt. Son pruebas volitivas: un valor bajo puede ser solo mal esfuerzo. En una persona sana la capacidad vital cae 5 a 10% en decúbito; más de 30% indica debilidad diafragmática.' }
    ],
    compute(v) {
      if (!v.sexo || [v.edad, v.pi, v.pe].some(x => x == null)) return null;
      if (!(v.edad >= 18 && v.edad <= 100) || !(v.pi >= 0 && v.pi <= 250) || !(v.pe >= 0 && v.pe <= 350)) return { invalido: true };
      const nCv = [v.cvSent, v.cvSup].filter(x => x != null).length;
      if (nCv === 1) return { cvIncompleta: true };
      if (nCv === 2 && !(v.cvSent > 0 && v.cvSup > 0)) return { invalido: true };
      const p = blackHyatt(v.sexo, v.edad);
      const umbralPe = v.sexo === 'h' ? 80 : 60;
      const caidaCv = nCv === 2 ? (v.cvSent - v.cvSup) / v.cvSent * 100 : null;
      return {
        pctPi: v.pi / p.pi * 100, pctPe: v.pe / p.pe * 100, predPi: p.pi, predPe: p.pe,
        piExcluye: v.pi >= 80, peExcluye: v.pe > umbralPe, umbralPe, caidaCv
      };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: adulto, PImax de 0 a 250, PEmax de 0 a 350 cmH2O y capacidades vitales positivas.';
      if (r.cvIncompleta) return 'Para la caída en decúbito hacen falta las dos capacidades vitales.';
      let s = `PImax ${Math.round(r.pctPi)}% del predicho (${Math.round(r.predPi)} cmH2O); PEmax ${Math.round(r.pctPe)}% del predicho (${Math.round(r.predPe)} cmH2O). `;
      if (r.piExcluye && r.peExcluye) s += '<strong>Se excluye debilidad significativa de los músculos respiratorios.</strong>';
      else if (!r.piExcluye && r.peExcluye) s += '<strong>PEmax normal con PImax que no alcanza 80 cmH2O: sugiere debilidad diafragmática aislada.</strong> Confirmar con SNIP y, si sigue baja, con pruebas no volitivas.';
      else s += `<strong>No se excluye debilidad</strong> (PImax ${r.piExcluye ? 'de 80 o más' : 'menor de 80'}; PEmax ${r.peExcluye ? 'mayor' : 'no mayor'} de ${r.umbralPe} cmH2O). Puede ser debilidad o mal esfuerzo: confirmar con SNIP y pruebas no volitivas.`;
      if (r.caidaCv != null) s += ` Caída de la capacidad vital en decúbito de ${Math.round(r.caidaCv)}%${r.caidaCv > 30 ? ': indica debilidad diafragmática aislada o desproporcionada.' : '.'}`;
      return s;
    },
    fragment: r => r.invalido || r.cvIncompleta ? 'fuerza muscular no valida' : `PImax ${Math.round(r.pctPi)}%, PEmax ${Math.round(r.pctPe)}% del predicho`
  },
  {
    key: 'pfr-fem', title: 'Variabilidad diurna del flujo espiratorio máximo', accent: '#6b4a2e',
    subtitle: 'Amplitud como porcentaje de la media (GINA)',
    incompleteMsg: 'Selecciona el grupo e introduce el FEM más alto y el más bajo del día.',
    fields: [
      { name: 'grupo', id: 'pfr-fem-grupo', type: 'select', label: 'Grupo', options: [
        { value: '', label: 'Selecciona' }, { value: 'adulto', label: 'Adulto' }, { value: 'nino', label: 'Niño' } ] },
      { name: 'max', id: 'pfr-fem-max', type: 'number', label: 'FEM más alto del día (L/min)', placeholder: 'ej. 450', row: 'r1' },
      { name: 'min', id: 'pfr-fem-min', type: 'number', label: 'FEM más bajo del día (L/min)', placeholder: 'ej. 390', row: 'r1' },
      { type: 'note', text: 'Cada medición es la mayor de tres, siempre con el mismo medidor. El diagnóstico se apoya en el PROMEDIO de los valores diarios durante 1 a 2 semanas: excesiva por encima de 10% en adultos y de 13% en niños.' }
    ],
    compute(v) {
      if (!v.grupo || v.max == null || v.min == null) return null;
      if (!(v.min > 0 && v.max >= v.min && v.max <= 1000)) return { invalido: true };
      const amp = variabilidadFem(v.max, v.min);
      return { amp, excesiva: amp > (v.grupo === 'nino' ? 13 : 10), umbral: v.grupo === 'nino' ? 13 : 10 };
    },
    format: r => {
      if (r.invalido) return 'El FEM más alto no puede ser menor que el más bajo, y ambos deben ser positivos.';
      return `<strong>Variabilidad del día ${f1(r.amp)}%</strong>: ${r.excesiva ? 'por encima' : 'no supera el'} umbral de ${r.umbral}%. Promediar los valores de 1 a 2 semanas antes de concluir.`;
    },
    fragment: r => r.invalido ? 'variabilidad no valida' : `variabilidad diurna del FEM ${f1(r.amp)}%`
  },
  {
    key: 'pfr-feno', title: 'Interpretación de la FeNO', accent: '#7a1f3d',
    subtitle: 'Cortes de la ATS (2011) y cambio significativo entre visitas',
    incompleteMsg: 'Selecciona el grupo e introduce la FeNO en ppb.',
    fields: [
      { name: 'grupo', id: 'pfr-feno-grupo', type: 'select', label: 'Grupo', options: [
        { value: '', label: 'Selecciona' }, { value: 'adulto', label: 'Adulto o mayor de 12 años' }, { value: 'nino', label: 'Menor de 12 años' } ] },
      { name: 'feno', id: 'pfr-feno-val', type: 'number', label: 'FeNO actual (ppb)', placeholder: 'ej. 58', row: 'r1' },
      { name: 'previo', id: 'pfr-feno-prev', type: 'number', required: false, label: 'Opcional: FeNO de la visita previa (ppb)', placeholder: 'ej. 40', row: 'r1' },
      { type: 'note', text: 'Adultos: menos de 25 ppb, inflamación eosinofílica y respuesta a corticoide poco probables; más de 50 ppb, probables; 25 a 50, interpretar con el contexto. Niños: 20 y 35 ppb. Cambio significativo: más de 20% si el valor previo pasa de 50 ppb, más de 10 ppb si es menor. Un valor bajo no descarta asma.' }
    ],
    compute(v) {
      if (!v.grupo || v.feno == null) return null;
      if (!(v.feno >= 0 && v.feno <= 400) || (v.previo != null && !(v.previo >= 0 && v.previo <= 400))) return { invalido: true };
      const cat = categoriaFeno(v.feno, v.grupo);
      return { cat, feno: v.feno, cambio: v.previo != null ? cambioFeno(v.previo, v.feno) : null };
    },
    format: r => {
      if (r.invalido) return 'La FeNO va de 0 a 400 ppb.';
      const txt = { baja: 'inflamación eosinofílica y respuesta a corticoide poco probables (no descarta asma)', alta: 'inflamación eosinofílica probable; en un paciente sintomático, respuesta a corticoide probable', intermedia: 'zona intermedia: interpretar con cautela y en el contexto clínico' }[r.cat];
      let s = `<strong>FeNO ${Math.round(r.feno)} ppb, ${r.cat}</strong>: ${txt}.`;
      if (r.cambio) s += ` Cambio de ${r.cambio.d > 0 ? '+' : ''}${Math.round(r.cambio.d)} ppb respecto a la visita previa: ${r.cambio.significativo ? (r.cambio.sube ? 'aumento significativo (mala adherencia, mala técnica, alérgenos o pérdida de control)' : 'descenso significativo (respuesta al antiinflamatorio)') : 'no significativo'}.`;
      return s;
    },
    fragment: r => r.invalido ? 'FeNO no valida' : `FeNO ${Math.round(r.feno)} ppb (${r.cat})`
  }
];

export const combinedNote = null;
export default { calculators, combinedNote };
