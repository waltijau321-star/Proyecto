// engine/pediatria-dosis.js
// La aritmética de la sección Pediatría: de mg/kg a los miligramos de ESTE niño, y de ahí a los
// mililitros que se cargan en la jeringa. Es un módulo PURO a propósito (sin DOM, sin
// almacenamiento, sin importar a ningún hermano), porque es la parte que no puede estar mal y el
// ejecutor de pruebas es síncrono: todo lo que hay aquí se prueba en tests.html con casos.
//
// Tres decisiones que son de seguridad, no de estilo:
//
//  1. NUNCA se devuelve un número inventado. Sin peso, `calcularDosis` devuelve null y la vista
//     se queda con el dato crudo (mg/kg), que se pinta siempre. Un cero o un guion en el sitio
//     donde va una dosis se lee como una dosis.
//  2. Los miligramos que se muestran son los que entrega el volumen REDONDEADO, no los del
//     cálculo exacto. Si se redondea el volumen y no los mg, lo que queda impreso es una
//     contradicción: la jeringa no tiene marca en 7.6 mL, así que indicar "190 mg (7.6 mL)" pide
//     algo que no se puede medir. Se redondea primero el volumen y se recalcula el contenido.
//  3. El tope de adulto se aplica y se DICE, con el mg/kg al que queda y lo que habría dado la
//     aritmética sin topar. Un número que deja de seguir al peso sin explicación es un número que
//     el residente no puede comprobar, y "por qué 60 y 70 kg dan lo mismo" es justo la pregunta
//     que lleva a alguien a saltarse el tope.

// Vías declaradas. La lista es cerrada y una prueba la comprueba: una vía mal escrita en los
// datos ('intravenosa' en vez de 'iv') pintaría la línea sin vía, y una dosis sin vía no se
// puede administrar.
export const VIAS = {
  oral:       'oral',
  iv:         'intravenosa',
  im:         'intramuscular',
  sc:         'subcutánea',
  rectal:     'rectal',
  inhalada:   'inhalada',
  nebulizada: 'nebulizada',
  intranasal: 'intranasal',
  topica:     'tópica',
  oftalmica:  'oftálmica',
  otica:      'ótica'
};

// Límites de peso que se aceptan. Por debajo de 0.4 kg no hay paciente (el prematuro extremo
// viable ronda los 0.5 kg), y por encima de 150 kg lo que hay es un cero de más o un peso en
// libras tecleado como kilos.
export const PESO_MIN = 0.4;
export const PESO_MAX = 150;

// Por debajo de esto no hay jeringa que lo mida: hay que diluir, y decirlo es más útil que
// imprimir 0.004 mL.
export const VOLUMEN_MINIMO = 0.05;
// Por encima de esto, una toma oral es mucho líquido para un niño: casi siempre significa que la
// presentación elegida no es la que corresponde.
export const VOLUMEN_ORAL_ALTO = 20;

// Todo se expresa en MILIGRAMOS, sin excepción: `mgkg` y `presentaciones[].mg` comparten unidad
// y por eso se pueden dividir. Un fármaco que los manuales dan en microgramos (0.01 mg/kg en vez
// de 10 mcg/kg) se escribe igualmente en mg: añadir un campo de unidad a la línea de dosis sin
// añadirlo también a la presentación da un volumen mil veces mayor, y nada avisaría.
const num = v => (typeof v === 'number' && isFinite(v));

/* ---------------- Redondeo ----------------
   Lo que una jeringa puede medir de verdad, que no es lo mismo que lo que una división puede
   dar. Jeringa de 1 mL: marcas cada 0.01. De 3, 5 y 10 mL: cada 0.1. Por encima de 10 mL, medio
   mililitro es lo honesto. El paso se elige por el volumen, no por el fármaco. */
export function redondearVolumen(mL) {
  if (!num(mL) || mL <= 0) return 0;
  const paso = mL < 1 ? 0.01 : mL < 10 ? 0.1 : 0.5;
  // El +1e-9 absorbe el error binario: 0.145/0.01 da 14.499999999999998, que redondearía a 0.14.
  return Math.round(mL / paso + 1e-9) * paso;
}

// Los comprimidos se parten por la mitad o en cuartos, no en décimas. Mismo criterio que el
// volumen: se redondea lo que se administra y luego se dice cuántos mg son.
export function redondearUnidades(n) {
  if (!num(n) || n <= 0) return 0;
  return Math.round(n / 0.25 + 1e-9) * 0.25;
}

// Tres cifras significativas, que es la precisión con la que se prescribe.
export function redondearMg(mg) {
  if (!num(mg) || mg <= 0) return 0;
  const magnitud = Math.floor(Math.log10(mg));
  const paso = Math.pow(10, Math.max(magnitud - 2, -3));
  return Math.round(mg / paso + 1e-9) * paso;
}

/* ---------------- Edad ----------------
   Una sola unidad interna: DÍAS de vida. La ficha pregunta en días, meses o años y convierte
   aquí, porque mezclar unidades en los datos es como se acaba aplicando una dosis de lactante a
   un niño de cuatro años. Para un neonato, los días de vida SON su edad posnatal: no hay un eje
   aparte para eso, que sería un segundo sitio donde equivocarse. */
export const DIAS_POR_MES = 30.4375;
export const DIAS_POR_ANO = 365.25;

export function aDias(valor, unidad) {
  if (!num(valor) || valor < 0) return null;
  if (unidad === 'd') return valor;
  if (unidad === 'm') return valor * DIAS_POR_MES;
  if (unidad === 'a') return valor * DIAS_POR_ANO;
  return null;
}

// Días de vida en palabras, para rotular una franja sin obligar a nadie a dividir entre 30.
export function diasEnPalabras(dias) {
  if (!num(dias)) return '';
  if (dias < 1) return 'el primer día';
  if (dias <= 28) return `${Math.round(dias)} día${Math.round(dias) === 1 ? '' : 's'} de vida`;
  if (dias < 2 * DIAS_POR_ANO) {
    const meses = dias / DIAS_POR_MES;
    const m = meses < 2 ? Math.round(meses * 10) / 10 : Math.round(meses);
    return `${m} ${m === 1 ? 'mes' : 'meses'}`;
  }
  const anos = dias / DIAS_POR_ANO;
  const a = anos < 10 ? Math.round(anos * 10) / 10 : Math.round(anos);
  return `${a} año${a === 1 ? '' : 's'}`;
}

/* ---------------- Esta línea, es para este paciente? ----------------
   Devuelve true, false o 'sin-dato', y el tercer valor es el importante: cuando la línea acota
   una franja y la ficha no trae ese dato, la respuesta NO es false. Una línea escondida por
   falta de un dato que nadie pidió es una dosis que el residente no llegó a ver; la vista las
   pinta todas desplegadas mientras no haya con qué decidir.

   Ejes, y solo estos tres:
     edadMin / edadMax  días de vida (para el neonato, su edad posnatal)
     egMin   / egMax    semanas de edad gestacional
     pesoMin / pesoMax  kg
   Lo que se omite significa "sin límite por ese lado". Una línea sin ningún eje es para todos. */
export function lineaAplica(linea, paciente) {
  const p = paciente || {};
  const ejes = [
    { min: linea.edadMin, max: linea.edadMax, valor: p.edadDias },
    { min: linea.egMin,   max: linea.egMax,   valor: p.eg },
    { min: linea.pesoMin, max: linea.pesoMax, valor: p.peso }
  ];
  let falta = false;
  for (const e of ejes) {
    const acota = num(e.min) || num(e.max);
    if (!acota) continue;
    if (!num(e.valor)) { falta = true; continue; }
    if (num(e.min) && e.valor < e.min) return false;
    if (num(e.max) && e.valor > e.max) return false;
  }
  return falta ? 'sin-dato' : true;
}

// La franja de la línea, en palabras. Se pinta SIEMPRE, con ficha o sin ella: si la franja se
// dedujera de la posición en la lista, bastaría un reordenamiento para cambiar de paciente.
export function textoFranja(linea) {
  const partes = [];
  const eg = [];
  if (num(linea.egMin)) eg.push(`desde ${linea.egMin}`);
  if (num(linea.egMax)) eg.push(`hasta ${linea.egMax}`);
  if (eg.length) partes.push(`${eg.join(' y ')} semanas de edad gestacional`);

  if (num(linea.edadMin) && num(linea.edadMax)) {
    partes.push(`de ${diasEnPalabras(linea.edadMin)} a ${diasEnPalabras(linea.edadMax)}`);
  } else if (num(linea.edadMin)) {
    partes.push(`desde ${diasEnPalabras(linea.edadMin)}`);
  } else if (num(linea.edadMax)) {
    partes.push(`hasta ${diasEnPalabras(linea.edadMax)}`);
  }

  if (num(linea.pesoMin) && num(linea.pesoMax)) partes.push(`de ${linea.pesoMin} a ${linea.pesoMax} kg`);
  else if (num(linea.pesoMin)) partes.push(`desde ${linea.pesoMin} kg`);
  else if (num(linea.pesoMax)) partes.push(`hasta ${linea.pesoMax} kg`);

  return partes.length ? partes.join(', ') : 'cualquier edad';
}

/* ---------------- El dato crudo ----------------
   Lo que se pinta siempre, haya ficha o no: la sección es un libro de consulta antes que una
   calculadora. */
export function textoDosis(linea) {
  const d = linea.mgkg || {};
  const partes = [];
  if (linea.fija) {
    // Dosis fija, no por peso: el adolescente por encima del techo de adulto, y los fármacos
    // que se dan por tramos de peso en vez de por kg (los autoinyectores de adrenalina).
    partes.push(num(linea.fija.min) ? `${linea.fija.min} a ${linea.fija.max} mg` : `${linea.fija.valor} mg`);
  } else {
    const rango = num(d.valor) ? `${d.valor}` : `${d.min} a ${d.max}`;
    partes.push(`${rango} ${d.por === 'dia' ? 'mg/kg/día' : 'mg/kg/dosis'}`);
  }
  if (num(linea.cada)) partes.push(`cada ${linea.cada} h`);
  else if (linea.unica) partes.push('dosis única');
  if (linea.via) partes.push(VIAS[linea.via] || linea.via);
  if (linea.duracion) partes.push(linea.duracion);
  return partes.join(' · ');
}

/* ---------------- El cálculo ----------------
   Devuelve null si no hay con qué calcular, y nunca un número a medias. Todo se representa como
   un par {min, max} aunque la línea traiga un valor único (min === max): así ni la vista ni las
   pruebas tienen que ramificar entre "rango" y "valor", que es donde se cuela el caso olvidado. */
export function calcularDosis(linea, paciente, presentacion) {
  const peso = paciente && paciente.peso;

  /* Una línea de dosis FIJA no se multiplica por el peso, así que se puede resolver sin ficha: se
     calcula igual y se devuelve con peso null. Es lo correcto y además es lo útil, porque las dos
     dosis que hay que poner con más prisa (la adrenalina del autoinyector por tramos de peso y la
     dosis de adulto del adolescente) son justo fijas. */
  if (linea.fija) return fijaResuelta(linea, peso, presentacion);

  if (!num(peso) || peso < PESO_MIN || peso > PESO_MAX) return null;

  const d = linea.mgkg || {};
  const porDia = d.por === 'dia';
  const lo = num(d.valor) ? d.valor : d.min;
  const hi = num(d.valor) ? d.valor : d.max;
  if (!num(lo) || !num(hi)) return null;

  // Tomas al día. Una dosis diaria sin intervalo no se puede repartir, y por eso el contrato
  // obliga a `cada` cuando la base es por día (hay una prueba que lo comprueba).
  const tomas = num(linea.cada) && linea.cada > 0 ? 24 / linea.cada : null;
  if (porDia && !tomas) return null;

  const avisos = [];
  let topeMordio = null;

  /* Los techos vienen en DOS formas y las dos son necesarias, porque los manuales las usan a la
     vez: absolutos en mg ("no exceder 4 g/día") y por peso en mg/kg ("dosis máxima diaria
     90 mg/kg/día", "dosis máxima en una sola toma 15 mg/kg"). Manda el más bajo de los que
     apliquen: en un lactante acota el de por peso, y en un adolescente de 60 kg el absoluto.
     Quedarse solo con el absoluto dejaría al neonato sin techo, que es justo donde más aprieta. */
  const menorDe = (...cs) => { const v = cs.filter(num); return v.length ? Math.min(...v) : null; };
  const topeDosis = menorDe(linea.maxDosis, num(linea.maxMgkgDosis) ? linea.maxMgkgDosis * peso : null);
  const topeDia   = menorDe(linea.maxDia,   num(linea.maxMgkgDia)   ? linea.maxMgkgDia * peso   : null);

  // Un extremo del rango, de mg/kg a los mg que se administran en una toma y en un día.
  const porExtremo = (mgkg) => {
    let dosis = porDia ? (mgkg * peso) / tomas : mgkg * peso;
    let dia = porDia ? mgkg * peso : (tomas ? dosis * tomas : null);
    const sinTopeDosis = dosis;
    const sinTopeDia = dia;

    // El tope por toma primero, y el diario después sobre el resultado: los dos acotan, y
    // aplicarlos por separado dejaría un total diario que no se corresponde con la toma que se
    // está indicando.
    if (num(topeDosis) && dosis > topeDosis) {
      dosis = topeDosis;
      dia = tomas ? dosis * tomas : dia;
      topeMordio = 'dosis';
    }
    if (num(topeDia) && num(dia) && dia > topeDia) {
      dia = topeDia;
      if (tomas) dosis = dia / tomas;
      topeMordio = topeMordio === 'dosis' ? 'ambos' : 'dia';
    }
    return { dosis, dia, sinTopeDosis, sinTopeDia };
  };

  const a = porExtremo(lo);
  const b = porExtremo(hi);

  const res = {
    peso,
    tomas,
    porDia,
    porPeso: true,
    // mg por toma y por día, ya topados. Se pintan los dos SIEMPRE: una línea mal etiquetada
    // (mg/kg/dosis escrito como mg/kg/día, o al revés) produce así un total diario visiblemente
    // absurdo en vez de una toma plausiblemente equivocada, que es lo que no se detecta.
    dosis: { min: a.dosis, max: b.dosis },
    dia:   { min: a.dia,   max: b.dia },
    sinTope: topeMordio ? { dosis: { min: a.sinTopeDosis, max: b.sinTopeDosis },
                            dia:   { min: a.sinTopeDia,   max: b.sinTopeDia } } : null,
    topeMordio,
    topes: {
      dosis: topeDosis, dia: topeDia,
      // De dónde sale cada techo, para poder rotularlo tal como lo dice la fuente.
      dosisDe: num(linea.maxMgkgDosis) && topeDosis === linea.maxMgkgDosis * peso ? 'mgkg' : (num(linea.maxDosis) ? 'mg' : null),
      diaDe:   num(linea.maxMgkgDia)   && topeDia   === linea.maxMgkgDia * peso   ? 'mgkg' : (num(linea.maxDia)   ? 'mg' : null)
    },
    // El mg/kg efectivo por toma tras el tope: es la respuesta a "por qué este número ya no sube
    // con el peso".
    mgkgReal: { min: a.dosis / peso, max: b.dosis / peso },
    volumen: null,
    unidades: null,
    avisos
  };

  // El extremo alto del rango es el que manda para el volumen: es el que puede pasarse del tope
  // al redondear y el que decide si la toma es demasiado líquido.
  anadirForma(res, linea, b.dosis, presentacion, topeDosis);
  return res;
}

/* ---------------- De los mg a lo que se administra ----------------
   Compartido por la línea por peso y la de dosis fija: el volumen de una jeringa no depende de
   cómo se llegó a los miligramos, y tener dos copias de esta aritmética es tener una que se
   arregla y otra que no. */
function anadirForma(res, linea, mgObjetivo, presentacion, topeDosis) {
  if (!presentacion || !num(presentacion.mg) || presentacion.mg <= 0) return;
  const avisos = res.avisos;

  if (num(presentacion.mL) && presentacion.mL > 0) {
    const porML = presentacion.mg / presentacion.mL;
    let mL = redondearVolumen(mgObjetivo / porML);
    // Redondear NUNCA cruza el tope: si al ir al más cercano se pasa, se baja un escalón. Un
    // techo que se salta por un artefacto de redondeo no es un techo.
    if (num(topeDosis)) {
      const paso = mL < 1 ? 0.01 : mL < 10 ? 0.1 : 0.5;
      let vueltas = 0;
      while (mL > 0 && mL * porML > topeDosis + 1e-6 && vueltas < 1000) {
        mL = Math.round((mL - paso) / paso + 1e-9) * paso;
        vueltas++;
      }
    }
    if (mL < VOLUMEN_MINIMO) {
      avisos.push(`El volumen queda por debajo de ${VOLUMEN_MINIMO} mL, que es la marca más pequeña de una jeringa de 1 mL: hay que diluir antes de administrarlo.`);
    } else {
      res.volumen = { mL, mg: mL * porML, etiqueta: presentacion.etiqueta };
      if (linea.via === 'oral' && mL > VOLUMEN_ORAL_ALTO) {
        avisos.push(`${Math.round(mL)} mL es mucho líquido para una sola toma: comprueba si hay una presentación más concentrada.`);
      }
    }
    return;
  }

  // Comprimido o cápsula: la dosis va en unidades, y se dice la fracción.
  const exacto = mgObjetivo / presentacion.mg;
  const n = redondearUnidades(exacto);
  if (n <= 0) {
    avisos.push('La dosis es menor que la fracción más pequeña que se puede partir de esta presentación: hace falta una forma líquida o una fórmula magistral.');
    return;
  }
  res.unidades = { n, mg: n * presentacion.mg, etiqueta: presentacion.etiqueta };
  if (Math.abs(n - exacto) / exacto > 0.1) {
    avisos.push(`Partir esta presentación obliga a desviarse más del 10% de la dosis calculada (${redondearMg(exacto * presentacion.mg)} mg): valora una forma líquida.`);
  }
}

/* ---------------- La línea de dosis fija ----------------
   No se multiplica por el peso, así que no hace falta ficha. Se devuelve con la misma forma que
   el resto para que la vista no tenga que ramificar: `porPeso: false` es lo único que la
   distingue, y `mgkgReal` dice a cuántos mg/kg equivale la dosis fija EN ESTE niño, que es el
   dato que permite ver que a un lactante de 6 kg una dosis de adulto le queda enorme. */
function fijaResuelta(linea, peso, presentacion) {
  const f = linea.fija || {};
  const lo = num(f.valor) ? f.valor : f.min;
  const hi = num(f.valor) ? f.valor : f.max;
  if (!num(lo) || !num(hi)) return null;
  const tomas = num(linea.cada) && linea.cada > 0 ? 24 / linea.cada : null;
  const pesoValido = num(peso) && peso >= PESO_MIN && peso <= PESO_MAX;
  const res = {
    peso: pesoValido ? peso : null,
    tomas,
    porDia: false,
    porPeso: false,
    dosis: { min: lo, max: hi },
    dia: { min: tomas ? lo * tomas : null, max: tomas ? hi * tomas : null },
    sinTope: null,
    topeMordio: null,
    topes: { dosis: null, dia: null, dosisDe: null, diaDe: null },
    mgkgReal: pesoValido ? { min: lo / peso, max: hi / peso } : null,
    volumen: null,
    unidades: null,
    avisos: []
  };
  anadirForma(res, linea, hi, presentacion, null);
  return res;
}
