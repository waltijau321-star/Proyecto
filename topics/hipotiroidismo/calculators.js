// topics/hipotiroidismo/calculators.js
// 2 herramientas:
// - perfil-tiroideo: interpreta TSH y T4 libre (con T3 opcional) y devuelve el patron, con los
//   rangos ajustados al contexto (general, embarazo por trimestre, paciente critico, paciente ya
//   tratado con levotiroxina). Es la herramienta transversal del eje tiroideo.
// - dosis-levotiroxina: dosis de inicio y de sustitucion plena segun escenario, con el ajuste del
//   embarazo, el objetivo de titulacion y los avisos de absorcion.
//
// Los rangos de referencia son los habituales pero DEPENDEN DEL LABORATORIO; la nota del
// formulario lo advierte y la calculadora permite sustituirlos.
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

const RANGOS = {
  general:  { tshMin: 0.4, tshMax: 4.0, etiqueta: 'adulto no gestante' },
  embarazo1: { tshMin: 0.1, tshMax: 4.0, etiqueta: 'primer trimestre' },
  embarazo23: { tshMin: 0.2, tshMax: 4.0, etiqueta: 'segundo y tercer trimestre' },
  critico:  { tshMin: 0.4, tshMax: 4.0, etiqueta: 'paciente con enfermedad aguda grave' },
  tratado:  { tshMin: 0.4, tshMax: 4.0, etiqueta: 'paciente en tratamiento con levotiroxina' }
};
const T4L_MIN = 0.8, T4L_MAX = 1.8;

// Dosis plena de sustitucion, en microgramos por kilo y dia.
const DOSIS_PLENA = 1.6;

export const calculators = [
  {
    key: 'perfil-tiroideo', title: 'Interpretacion del perfil tiroideo', accent: '#4a6fa5',
    subtitle: 'TSH y T4 libre a patron, con los rangos del contexto clinico',
    incompleteMsg: 'Introduce la TSH y la T4 libre, y elige el contexto.',
    fields: [
      { name: 'contexto', id: 'hipo-pt-ctx', type: 'select', label: 'Contexto clinico', options: [
        { value: '', label: 'Selecciona' },
        { value: 'general', label: 'Adulto no gestante, sin enfermedad aguda' },
        { value: 'embarazo1', label: 'Embarazo, primer trimestre' },
        { value: 'embarazo23', label: 'Embarazo, segundo o tercer trimestre' },
        { value: 'critico', label: 'Paciente hospitalizado con enfermedad aguda grave' },
        { value: 'tratado', label: 'Paciente ya en tratamiento con levotiroxina' } ] },
      { name: 'tsh', id: 'hipo-pt-tsh', type: 'number', step: '0.01', label: 'TSH (mUI/L)', placeholder: 'ej. 8.4', row: 'r1' },
      { name: 't4l', id: 'hipo-pt-t4l', type: 'number', step: '0.01', label: 'T4 libre (ng/dL)', placeholder: 'ej. 0.6', row: 'r1' },
      { name: 't3', id: 'hipo-pt-t3', type: 'number', step: '0.01', required: false, label: 'Opcional: T3 libre (pg/mL)', placeholder: 'ej. 3.2', row: 'r2' },
      { name: 'antiTPO', id: 'hipo-pt-tpo', type: 'select', required: false, label: 'Opcional: anticuerpos antitiroperoxidasa', options: [
        { value: '', label: 'No medidos' },
        { value: 'pos', label: 'Positivos' },
        { value: 'neg', label: 'Negativos' } ], row: 'r2' },
      { type: 'note', text: 'Rangos usados: TSH de 0.4 a 4.0 mUI/L y T4 libre de 0.8 a 1.8 ng/dL en el adulto no gestante, y T3 libre de 2.3 a 4.2 pg/mL. En el embarazo el limite inferior de TSH baja (0.1 en el primer trimestre por el efecto de la gonadotropina corionica) y el superior se toma en torno a 4.0; el umbral clasico de 2.5 mUI/L quedo obsoleto con la guia de la ATA de 2017. ESTOS RANGOS DEPENDEN DEL LABORATORIO: usa siempre los del tuyo, y en el embarazo los especificos del trimestre si existen. La T3 no sirve para diagnosticar hipotiroidismo, solo para caracterizar la tirotoxicosis y el sindrome del enfermo eutiroideo.' }
    ],
    compute(v) {
      if (!v.contexto || v.tsh == null || v.t4l == null) return null;
      if (!(v.tsh >= 0 && v.tsh < 1000) || !(v.t4l > 0 && v.t4l < 12)) return { invalido: true };
      const rg = RANGOS[v.contexto];
      const tshAlta = v.tsh > rg.tshMax, tshBaja = v.tsh < rg.tshMin;
      const t4Alta = v.t4l > T4L_MAX, t4Baja = v.t4l < T4L_MIN;
      const t3Alta = v.t3 != null && v.t3 > 4.2;
      const t3Baja = v.t3 != null && v.t3 < 2.3;

      let patron, detalle, siguiente;
      if (tshAlta && t4Baja) {
        patron = 'Hipotiroidismo primario franco';
        detalle = 'La tiroides falla y la hipofisis responde subiendo la TSH. Es el 95% de los hipotiroidismos.';
        siguiente = 'Tratar siempre con levotiroxina. Pedir anticuerpos antitiroperoxidasa para documentar el origen autoinmune.';
      } else if (tshAlta && !t4Baja && !t4Alta) {
        patron = 'Hipotiroidismo subclinico';
        detalle = 'La TSH se altera antes que la T4 libre por la relacion logaritmica entre ambas.';
        siguiente = v.tsh >= 10
          ? 'TSH de 10 mUI/L o mas: hay indicacion de tratamiento. Confirma primero con una segunda determinacion si esta es la primera.'
          : 'Confirmar a las 6 a 12 semanas antes de etiquetar: hasta un tercio se normaliza solo. Despues decidir por edad, anticuerpos, sintomas, riesgo cardiovascular y deseo gestacional.';
      } else if (tshAlta && t4Alta) {
        patron = 'Patron discordante (TSH alta con T4 libre alta)';
        detalle = 'Combinacion que no encaja con ningun mecanismo habitual.';
        siguiente = 'Antes de pensar en un adenoma hipofisario secretor de TSH o en resistencia a hormonas tiroideas, descartar lo frecuente: mala adherencia con varias dosis tomadas justo antes del analisis, e interferencia del ensayo (biotina, anticuerpos heterofilos, macro-TSH). Repetir en otra plataforma.';
      } else if (!tshAlta && t4Baja) {
        patron = tshBaja ? 'T4 libre baja con TSH baja' : 'T4 libre baja con TSH inapropiadamente normal';
        detalle = 'La TSH no sube pese a que la T4 libre esta baja: el eje no responde como deberia.';
        siguiente = 'Dos posibilidades que distingue el contexto: hipotiroidismo CENTRAL (evaluar el resto de ejes hipofisarios, cortisol matutino obligado, y resonancia de hipofisis) o SINDROME DEL ENFERMO EUTIROIDEO si hay enfermedad aguda grave, en cuyo caso no se trata y se repite tras la recuperacion. Revisar tambien glucocorticoides a dosis altas, dopamina y analogos de somatostatina.';
      } else if (tshBaja && t4Alta) {
        patron = 'Tirotoxicosis';
        detalle = 'Exceso de hormona tiroidea con supresion de la TSH.';
        siguiente = 'El siguiente paso NO es repetir el perfil, sino determinar la causa: captacion gammagrafica o anticuerpos antirreceptor de TSH. Ver el tema de hipertiroidismo y tiroiditis.';
      } else if (tshBaja && !t4Alta && !t4Baja) {
        patron = t3Alta ? 'Toxicosis por T3' : 'Hipertiroidismo subclinico';
        detalle = t3Alta
          ? 'TSH suprimida con T4 libre normal y T3 alta: el exceso hormonal es a expensas de T3.'
          : 'TSH suprimida con T4 libre y T3 normales.';
        siguiente = 'Confirmar y buscar causa. Importa por la fibrilacion auricular y la perdida osea, sobre todo en mayores de 65 anos. Si el paciente toma levotiroxina, lo mas probable es sobretratamiento: bajar la dosis.';
      } else {
        patron = 'Perfil tiroideo normal';
        detalle = 'TSH y T4 libre dentro del rango del contexto elegido.';
        siguiente = 'Una TSH normal descarta el hipotiroidismo primario, pero NO el central: si la sospecha clinica de enfermedad hipofisaria es alta, hay que mirar la T4 libre igualmente.';
      }
      return { patron, detalle, siguiente, tsh: v.tsh, t4l: v.t4l, t3: v.t3, rg, contexto: v.contexto, antiTPO: v.antiTPO, t3Alta, t3Baja };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: TSH en mUI/L y T4 libre en ng/dL.';
      let s = `<strong>${r.patron}</strong> (TSH ${r.tsh} mUI/L, T4 libre ${r.t4l} ng/dL`;
      if (r.t3 != null) s += `, T3 libre ${r.t3} pg/mL`;
      s += `; rangos de ${r.rg.etiqueta}). ${r.detalle} ${r.siguiente}`;
      if (r.contexto === 'critico') s += ' <strong>Aviso:</strong> en el paciente critico el perfil tiroideo es poco interpretable. El sindrome del enfermo eutiroideo baja primero la T3, despues la T4, y en la recuperacion la TSH rebota por encima del rango. Lo correcto es no pedir perfil tiroideo de rutina en el enfermo agudo y repetirlo a las 6 a 12 semanas del alta.';
      if (r.contexto === 'tratado') s += ' <strong>En el paciente tratado:</strong> una TSH alta obliga a revisar adherencia, horario y quelantes antes de subir la dosis; una TSH suprimida indica sobretratamiento, con riesgo de fibrilacion auricular y de perdida osea.';
      if (r.contexto === 'embarazo1' || r.contexto === 'embarazo23') s += ' <strong>En el embarazo:</strong> si la paciente ya tomaba levotiroxina, la necesidad sube un 25 a 30% desde que se confirma la gestacion. Objetivo de TSH en la mitad baja del rango del trimestre y control cada 4 semanas hasta la semana 20.';
      if (r.antiTPO === 'pos') s += ' Anticuerpos antitiroperoxidasa positivos: origen autoinmune, mayor riesgo de progresion a hipotiroidismo franco y umbral de tratamiento mas bajo, en especial en el embarazo.';
      if (r.antiTPO === 'neg') s += ' Anticuerpos antitiroperoxidasa negativos: no descartan tiroiditis autoinmune (son negativos en el 5 al 10%), pero obligan a repasar causas yatrogenas, deficit de yodo y formas transitorias.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `${r.patron} (TSH ${r.tsh}, T4L ${r.t4l})`
  },
  {
    key: 'dosis-levotiroxina', title: 'Dosis de levotiroxina', accent: '#3d5a73',
    subtitle: 'Dosis de inicio y de sustitucion plena, objetivo y avisos de absorcion',
    incompleteMsg: 'Introduce el peso y elige el escenario clinico.',
    fields: [
      { name: 'peso', id: 'hipo-lt-peso', type: 'number', step: '0.1', label: 'Peso corporal (kg)', placeholder: 'ej. 68', row: 'r1' },
      { name: 'escenario', id: 'hipo-lt-esc', type: 'select', label: 'Escenario', options: [
        { value: '', label: 'Selecciona' },
        { value: 'joven', label: 'Hipotiroidismo franco, menor de 60 anos sin cardiopatia' },
        { value: 'anciano', label: 'Hipotiroidismo franco, mayor de 60 anos o con cardiopatia isquemica' },
        { value: 'subclinico', label: 'Hipotiroidismo subclinico con indicacion de tratar' },
        { value: 'central', label: 'Hipotiroidismo central' },
        { value: 'embarazo', label: 'Embarazo en paciente ya tratada' } ], row: 'r1' },
      { name: 'dosisPrevia', id: 'hipo-lt-prev', type: 'number', step: '1', required: false, label: 'Solo para el embarazo: dosis actual (microgramos/dia)', placeholder: 'ej. 100' },
      { type: 'note', text: 'La dosis plena de sustitucion es de 1.6 microgramos por kilo y dia y se calcula mejor sobre PESO IDEAL que sobre peso real, sobre todo en la obesidad: si el paciente es obeso, introduce aqui su peso ideal aproximado. Se toma en ayunas 30 a 60 minutos antes del desayuno, o al acostarse 3 horas despues de cenar, y separada al menos 4 horas del calcio, el hierro, los inhibidores de la bomba de protones, el sevelamer y las resinas. La TSH se recontrola a las 6 a 8 semanas de cada cambio, NUNCA antes: el eje tarda ese tiempo en reequilibrarse.' }
    ],
    compute(v) {
      if (v.peso == null || !v.escenario) return null;
      if (!(v.peso >= 25 && v.peso < 300)) return { invalido: true };
      const plena = Math.round(v.peso * DOSIS_PLENA / 12.5) * 12.5;
      const e = v.escenario;
      let inicio, titulacion, objetivo, aviso = null;

      if (e === 'joven') {
        inicio = `${plena} microgramos al dia (dosis plena desde el inicio)`;
        titulacion = 'Recontrolar TSH a las 6 a 8 semanas y ajustar en escalones de 12.5 a 25 microgramos.';
        objetivo = 'TSH dentro del rango normal, preferentemente en su mitad baja.';
      } else if (e === 'anciano') {
        inicio = '12.5 a 25 microgramos al dia';
        titulacion = `Subir 12.5 a 25 microgramos cada 4 a 6 semanas segun tolerancia hasta acercarse a la dosis plena estimada de ${plena} microgramos al dia. Si aparece angina o taquiarritmia, detener el ascenso y retroceder un escalon.`;
        objetivo = 'TSH en el rango normal, aceptando la mitad alta o incluso el limite superior en el mayor de 70 a 80 anos.';
        aviso = 'Acelerar de golpe un corazon acostumbrado a la bradicardia puede desencadenar angina, infarto o una arritmia. En la cardiopatia isquemica avanzada puede ser necesario revascularizar antes de completar la sustitucion.';
      } else if (e === 'subclinico') {
        const sub = Math.max(25, Math.round(v.peso * 1.0 / 12.5) * 12.5);
        inicio = `${Math.min(sub, 75)} microgramos al dia (orientativo: 25 a 75 microgramos, alrededor de 1 microgramo por kilo)`;
        titulacion = 'Recontrolar TSH a las 6 a 8 semanas. Rara vez hace falta llegar a la dosis plena de sustitucion.';
        objetivo = 'TSH dentro del rango normal. Si se trato por sintomas, reevaluar a los 3 a 6 meses y RETIRAR el farmaco si no han mejorado.';
      } else if (e === 'central') {
        inicio = `${plena} microgramos al dia, ajustando segun edad y cardiopatia igual que en el primario`;
        titulacion = 'Medir T4 libre antes de la toma diaria y ajustar hasta situarla en la mitad alta del rango.';
        objetivo = 'T4 libre en la mitad alta del rango de referencia. La TSH NO sirve como objetivo y no debe usarse para titular.';
        aviso = 'ANTES de la primera dosis hay que descartar y, si existe, tratar la insuficiencia suprarrenal: la levotiroxina acelera el aclaramiento del cortisol y puede precipitar una crisis addisoniana. Primero el glucocorticoide, despues la levotiroxina.';
      } else {
        const prev = v.dosisPrevia;
        if (prev == null) return { faltaPrevia: true, plena };
        if (!(prev > 0 && prev < 1000)) return { invalido: true };
        const nueva = Math.round(prev * 1.275 / 12.5) * 12.5;
        inicio = `${nueva} microgramos al dia (subida del 25 al 30% sobre los ${prev} actuales). Alternativa practica equivalente: mantener la dosis diaria y anadir DOS dosis extra a la semana.`;
        titulacion = 'TSH cada 4 semanas hasta la semana 16 a 20, y al menos una vez mas hacia la semana 30.';
        objetivo = 'TSH en la mitad baja del rango especifico del trimestre. Tras el parto, volver a la dosis pregestacional y recontrolar a las 6 semanas.';
        aviso = 'Subir la dosis en cuanto se confirma el embarazo, sin esperar a la analitica: el desarrollo neurologico fetal del primer trimestre depende por completo de la T4 materna. Separar 4 horas del hierro y el calcio del complejo prenatal.';
        return { inicio, titulacion, objetivo, aviso, plena, escenario: e, prev, nueva };
      }
      return { inicio, titulacion, objetivo, aviso, plena, escenario: e };
    },
    format: r => {
      if (r.invalido) return 'Revisa el peso (25 a 300 kg) y, en el embarazo, la dosis actual.';
      if (r.faltaPrevia) return 'Para el escenario de embarazo hace falta la dosis actual de levotiroxina: la regla es subirla un 25 a 30% en cuanto se confirma la gestacion.';
      let s = `<strong>Dosis de inicio: ${r.inicio}.</strong> `;
      if (r.escenario !== 'embarazo' && r.escenario !== 'subclinico') s += `Dosis plena de sustitucion estimada: <strong>${r.plena} microgramos al dia</strong> (1.6 microgramos por kilo). `;
      s += `<strong>Titulacion:</strong> ${r.titulacion} <strong>Objetivo:</strong> ${r.objetivo}`;
      if (r.aviso) s += ` <strong>Aviso:</strong> ${r.aviso}`;
      s += ' <strong>Absorcion:</strong> en ayunas 30 a 60 minutos antes del desayuno (o al acostarse, 3 horas despues de cenar) y separada 4 horas del calcio, el hierro, los inhibidores de la bomba de protones, el sevelamer y las resinas. Si la TSH no baja, revisar adherencia y horario ANTES de subir la dosis.';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.faltaPrevia ? 'falta la dosis actual' : (r.escenario === 'embarazo' ? `subir de ${r.prev} a ${r.nueva} microgramos/dia` : `inicio ${r.inicio.split(' ')[0]} microgramos/dia`))
  }
];

export const combinedNote = null;

export default { calculators, combinedNote };
