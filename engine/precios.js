// engine/precios.js
// La lista de precios del mundo. Una sola fuente para el panel de dirección y, el día que exista
// el cobro, para la pasarela.
//
// **Un solo precio, en la moneda de cada quien.** Es la regla de la App Store: el producto vale
// lo mismo en todas partes, lo que cambia es la moneda y el número se redondea a uno atractivo de
// esa moneda. No hay precio de país rico ni de país pobre: 199 MXN en México, 9.99 USD en Estados
// Unidos, 43,990 COP en Colombia, y los tres son el mismo precio. Decisión de Walter del 9 nov
// 2026, que descartó el modelo anterior de zonas por poder adquisitivo (ver `Osler.md`).
//
// Cuatro reglas que no son estilo:
//
// 1. **El ancla es el precio de casa.** 199 MXN al mes y 1590 al año no se calculan: se publican.
//    Todo lo demás sale de convertir esa ancla y redondear hacia abajo cuando el redondeo bonito
//    queda cerca. Que un precio salga un poco por debajo de la paridad es aceptable y buscado; que
//    salga muy por encima, no.
// 2. **Los tipos de cambio son aproximados y están fechados.** Sirven para dirigir, no para
//    facturar. Antes de publicar un precio se confirma con la pasarela, que tiene sus propios
//    escalones por tienda. Si una moneda se mueve más de un 10%, se revisa la lista.
// 3. **El país llega de un campo de texto libre** (`rm:profile-country`, un `<input type="text">`
//    del registro), así que se normaliza de verdad: sin tildes, sin mayúsculas, sin puntuación y
//    con los alias que la gente escribe ("mex", "eeuu", "rd").
// 4. **Un país que no está en la tabla no se queda sin precio**: cae en la moneda por defecto
//    (USD), igual que la tienda por defecto de una app, y el panel lo muestra aparte para que se
//    añada su moneda.

/* El ancla. Lo único que no se calcula. */
export const ANCLA = { moneda: 'MXN', mensual: 199, anual: 1590 };

/* Tipos de cambio aproximados, en unidades de cada moneda por un dólar. Fechados a propósito:
   un número sin fecha envejece sin avisar. */
export const TIPOS = {
  fecha: '9 nov 2026',
  aproximado: true,
  porUsd: {
    USD: 1, MXN: 18.5, EUR: 0.92, GBP: 0.79, CAD: 1.38,
    COP: 4100, CLP: 950, PEN: 3.75, ARS: 1450, BRL: 5.4,
    UYU: 40, BOB: 6.9, DOP: 60, GTQ: 7.8, CRC: 520, PYG: 7400
  }
};

export const MONEDAS = {
  USD: { nombre: 'Dólar', simbolo: 'US$' },
  MXN: { nombre: 'Peso mexicano', simbolo: '$' },
  EUR: { nombre: 'Euro', simbolo: '€' },
  GBP: { nombre: 'Libra', simbolo: '£' },
  CAD: { nombre: 'Dólar canadiense', simbolo: 'C$' },
  COP: { nombre: 'Peso colombiano', simbolo: '$' },
  CLP: { nombre: 'Peso chileno', simbolo: '$' },
  PEN: { nombre: 'Sol', simbolo: 'S/' },
  ARS: { nombre: 'Peso argentino', simbolo: '$' },
  BRL: { nombre: 'Real', simbolo: 'R$' },
  UYU: { nombre: 'Peso uruguayo', simbolo: '$U' },
  BOB: { nombre: 'Boliviano', simbolo: 'Bs' },
  DOP: { nombre: 'Peso dominicano', simbolo: 'RD$' },
  GTQ: { nombre: 'Quetzal', simbolo: 'Q' },
  CRC: { nombre: 'Colón', simbolo: '₡' },
  PYG: { nombre: 'Guaraní', simbolo: '₲' }
};

/* País (ya normalizado) a moneda. Lo que no está aquí se cobra en dólares. */
export const PAIS_MONEDA = {
  'mexico': 'MXN',
  'colombia': 'COP', 'chile': 'CLP', 'peru': 'PEN', 'argentina': 'ARS', 'brasil': 'BRL',
  'uruguay': 'UYU', 'bolivia': 'BOB', 'republica dominicana': 'DOP', 'guatemala': 'GTQ',
  'costa rica': 'CRC', 'paraguay': 'PYG',
  'espana': 'EUR',
  'reino unido': 'GBP', 'canada': 'CAD',
  // Dolarizados de hecho o de derecho, y el resto del continente que factura en dólares.
  'ecuador': 'USD', 'el salvador': 'USD', 'panama': 'USD', 'puerto rico': 'USD',
  'estados unidos': 'USD', 'venezuela': 'USD', 'cuba': 'USD', 'honduras': 'USD',
  'nicaragua': 'USD'
};

export const MONEDA_POR_DEFECTO = 'USD';

const ALIAS = {
  'mx': 'mexico', 'mex': 'mexico', 'mejico': 'mexico', 'estados unidos mexicanos': 'mexico',
  'usa': 'estados unidos', 'us': 'estados unidos', 'eeuu': 'estados unidos', 'eua': 'estados unidos',
  'united states': 'estados unidos', 'estados unidos de america': 'estados unidos',
  'spain': 'espana', 'es': 'espana',
  'rd': 'republica dominicana', 'dominicana': 'republica dominicana', 'rep dominicana': 'republica dominicana',
  'santo domingo': 'republica dominicana',
  'brazil': 'brasil', 'br': 'brasil',
  'col': 'colombia', 'co': 'colombia',
  'arg': 'argentina', 'ar': 'argentina',
  'pe': 'peru', 'cl': 'chile', 'ca': 'canada',
  'bol': 'bolivia', 've': 'venezuela', 'gt': 'guatemala', 'cr': 'costa rica', 'pr': 'puerto rico',
  'salvador': 'el salvador', 'sv': 'el salvador',
  'uk': 'reino unido', 'inglaterra': 'reino unido', 'gran bretana': 'reino unido'
};

/* Sin tildes, sin mayúsculas, sin puntuación y sin espacios de más. "México." y "mexico" tienen
   que ser el mismo país, o la lista de precios cuenta dos mercados donde hay uno. */
export function normalizaPais(valor) {
  const base = String(valor || '')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return ALIAS[base] || base;
}

export function monedaDe(pais) {
  const p = normalizaPais(pais);
  return PAIS_MONEDA[p] || MONEDA_POR_DEFECTO;
}

export const paisReconocido = pais => !!PAIS_MONEDA[normalizaPais(pais)];

/* ------------------------------------------------- El redondeo atractivo
   Un precio convertido da 10.76, y 10.76 no es un precio: es el resultado de una división. El
   escalón de abajo (9.99) se prefiere siempre que no se aleje más de un 8% del valor exacto; si
   se aleja, se sube al de arriba. Así ningún precio del mundo queda muy por encima de la paridad
   y casi todos quedan un poco por debajo, que es justo lo que se buscaba. El tamaño del escalón
   crece con la magnitud, porque 43,990 COP se lee bien y 44,116 no. */
const paso = v => (v < 20 ? 1 : v < 2000 ? 10 : v < 20000 ? 100 : 1000);
const epsilon = v => (v < 20 ? 0.01 : v < 2000 ? 1 : 10);
const TOLERANCIA_ABAJO = 0.08;

export function precioAtractivo(valor) {
  const v = Number(valor);
  if (!(v > 0)) return 0;
  const p = paso(v), e = epsilon(v);
  const abajo = Math.floor(v / p) * p - e;
  const arriba = Math.ceil(v / p) * p - e;
  const elegido = abajo > 0 && (v - abajo) / v <= TOLERANCIA_ABAJO ? abajo : arriba;
  return Math.round(elegido * 100) / 100;
}

/* ------------------------------------------------------------- Precios */

const anclaUSD = periodo => ANCLA[periodo] / TIPOS.porUsd[ANCLA.moneda];

/* El precio de una moneda: el ancla convertida y redondeada. MXN devuelve el ancla tal cual, que
   es el número publicado y no una conversión de vuelta. */
export function precioMoneda(codigo) {
  const tipo = TIPOS.porUsd[codigo];
  if (!tipo) return null;
  if (codigo === ANCLA.moneda) {
    return { moneda: codigo, mensual: ANCLA.mensual, anual: ANCLA.anual };
  }
  return {
    moneda: codigo,
    mensual: precioAtractivo(anclaUSD('mensual') * tipo),
    anual: precioAtractivo(anclaUSD('anual') * tipo)
  };
}

export const aMXN = (valor, codigo) =>
  Math.round((valor / TIPOS.porUsd[codigo]) * TIPOS.porUsd[ANCLA.moneda]);

/* Lo que paga un residente según su país, más el equivalente en MXN, que es lo único con lo que
   se pueden sumar ingresos de monedas distintas. */
export function precioDe(pais) {
  const codigo = monedaDe(pais);
  const p = precioMoneda(codigo);
  return {
    moneda: codigo,
    reconocido: paisReconocido(pais),
    mensual: p.mensual,
    anual: p.anual,
    mensualMXN: codigo === ANCLA.moneda ? p.mensual : aMXN(p.mensual, codigo),
    anualMXN: codigo === ANCLA.moneda ? p.anual : aMXN(p.anual, codigo)
  };
}

/* La lista completa, para pintarla y para revisarla. Cada moneda con los países que la usan. */
export function catalogoPrecios() {
  return Object.keys(MONEDAS).map(codigo => {
    const p = precioMoneda(codigo);
    return {
      ...p,
      nombre: MONEDAS[codigo].nombre,
      simbolo: MONEDAS[codigo].simbolo,
      mensualMXN: codigo === ANCLA.moneda ? p.mensual : aMXN(p.mensual, codigo),
      paises: Object.keys(PAIS_MONEDA).filter(k => PAIS_MONEDA[k] === codigo)
    };
  });
}

/* Para pintar: 199 MXN se escribe entero, 9.99 USD con dos decimales. `conCodigo` en falso para
   las tablas donde la fila ya dice de qué moneda se habla y repetirlo solo gasta ancho. */
export function formatoPrecio(valor, codigo, conCodigo = true) {
  const simbolo = (MONEDAS[codigo] || {}).simbolo || '';
  const n = valor < 20
    ? valor.toFixed(2)
    : Math.round(valor).toLocaleString('es-MX');
  return `${simbolo}${n}${conCodigo ? ' ' + codigo : ''}`;
}
