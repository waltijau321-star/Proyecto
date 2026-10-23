// topics/sodio-potasio-acido-base/calculators.js
// Cuatro herramientas, cada una contrastada con su fuente:
//   hiponatremia y correccion-sodio -> guía europea de hiponatremia de 2014 (Spasovski).
//   hiperpotasemia -> UK Kidney Association 2023.
//   acido-base -> Berend, NEJM 2018.
// No se duplica lo que ya vive en `cetoacidosis-estado-hiperosmolar` (anion gap y déficit de
// agua con sus umbrales de la cetoacidosis): aquí el enfoque es general.

export const calculators = [
  {
    key: 'hiponatremia', title: 'Hiponatremia: clasificar y decidir', accent: '#3a5f8c',
    subtitle: 'Tonicidad, causa por índices urinarios y gravedad sintomática',
    incompleteMsg: 'Introduce el sodio y la glucosa, y elige la gravedad de los síntomas.',
    fields: [
      { name: 'na', id: 'sp-h-na', type: 'number', step: '0.1', label: 'Sodio sérico (mmol/L)', placeholder: 'ej. 118', row: 'r1' },
      { name: 'glu', id: 'sp-h-glu', type: 'number', step: '1', label: 'Glucosa (mg/dL)', placeholder: 'ej. 110', row: 'r1' },
      { name: 'sintomas', id: 'sp-h-s', type: 'select', label: 'Síntomas atribuibles', row: 'r2', options: [
        { v: 'graves', t: 'Graves: vómitos, somnolencia profunda, convulsiones o coma' },
        { v: 'moderados', t: 'Moderados: náuseas sin vómito, confusión o cefalea' },
        { v: 'ninguno', t: 'Sin síntomas atribuibles' }
      ] },
      { name: 'osmU', id: 'sp-h-ou', type: 'number', step: '1', required: false, label: 'Osmolalidad urinaria (mOsm/kg)', placeholder: 'ej. 450', row: 'r3' },
      { name: 'naU', id: 'sp-h-nu', type: 'number', step: '1', required: false, label: 'Sodio urinario (mmol/L)', placeholder: 'ej. 55', row: 'r3' },
      { name: 'peso', id: 'sp-h-p', type: 'number', step: '1', required: false, label: 'Peso (kg), para la dosis por peso', placeholder: 'ej. 70' },
      { type: 'note', text: 'Los índices urinarios son opcionales: sin ellos la herramienta clasifica la gravedad y la tonicidad, que es lo que decide la urgencia. La guía sugiere EN CONTRA de medir vasopresina para confirmar el síndrome de secreción inadecuada.' }
    ],
    compute(v) {
      if (v.na == null || v.glu == null || !v.sintomas) return null;
      if (!(v.na > 70 && v.na < 200)) return { invalido: true };
      if (!(v.glu > 0 && v.glu < 2000)) return { invalido: true };
      // Correccion por glucosa de la guia europea: +2.4 mmol/L por cada 100 mg/dL sobre 100.
      const corregido = v.na + 2.4 * ((v.glu - 100) / 100);
      const hipona = v.na < 135;
      let causa = null;
      if (v.osmU != null) {
        if (v.osmU <= 100) causa = 'Osmolalidad urinaria de 100 mOsm/kg o menos: se acepta el <strong>exceso relativo de ingesta de agua</strong> como causa (1D). El algoritmo termina aquí.';
        else if (v.naU != null) {
          causa = v.naU <= 30
            ? 'Osmolalidad urinaria mayor de 100 con sodio urinario de 30 mmol/L o menos: se acepta el <strong>volumen arterial efectivo bajo</strong> como causa (2D).'
            : 'Osmolalidad urinaria mayor de 100 con sodio urinario mayor de 30 mmol/L: hay que <strong>valorar el estado del líquido extracelular y el uso de diuréticos</strong> para seguir diferenciando (2D).';
        } else causa = 'Osmolalidad urinaria mayor de 100: falta el sodio urinario en muestra simultánea para seguir el algoritmo.';
      }
      const dosis = v.peso != null && v.peso > 0 ? Math.round(2 * v.peso) : null;
      return { na: v.na, glu: v.glu, corregido, hipona, sintomas: v.sintomas, causa, dosis };
    },
    format(r) {
      if (r.invalido) return '<span class="cr-warn">Revisa los valores: sodio entre 70 y 200, glucosa entre 0 y 2000.</span>';
      let html = '';
      if (r.glu > 100) {
        const sigue = r.corregido < 135;
        html += `Sodio medido ${r.na} con glucosa de ${r.glu}: <strong>sodio corregido ${r.corregido.toFixed(1)} mmol/L</strong> (se suman 2.4 por cada 100 mg/dL de glucosa sobre 100). ${sigue ? 'Sigue siendo hiponatremia una vez corregida.' : '<strong>Corregida ya no es hiponatremia</strong>: lo que hay es una hiponatremia por hiperglucemia, y el tratamiento es el de esta.'}<br><br>`;
      }
      if (!r.hipona) {
        html += `Con un sodio de ${r.na} no hay hiponatremia. `;
        return html;
      }
      if (r.sintomas === 'graves') {
        html += `<strong>Síntomas graves: es una urgencia.</strong> Infundir <strong>${r.dosis ? r.dosis + ' mL' : '150 mL'} de salino al 3%</strong> en 20 minutos${r.dosis ? ' (2 mL/kg)' : ''}, recontrolar el sodio a los 20 minutos mientras se repite una segunda infusión igual, y repetir hasta un <strong>ascenso de 5 mmol/L</strong>. No se espera a completar el estudio etiológico.`;
      } else if (r.sintomas === 'moderados') {
        html += '<strong>Síntomas moderados:</strong> iniciar el tratamiento específico de la causa sin demora, con una única infusión de salino al 3% si se considera necesario, y respetando desde el principio el límite de 10 mmol/L en 24 horas.';
      } else {
        html += '<strong>Sin síntomas atribuibles:</strong> no hay urgencia. Se trata la causa y se corrige despacio, con el límite de 10 mmol/L en 24 horas como techo.';
      }
      if (r.causa) html += `<div style="margin-top:10px;">${r.causa}</div>`;
      return html;
    }
  },

  {
    key: 'correccion-sodio', title: 'Límite de corrección del sodio', accent: '#8c3a34',
    subtitle: 'El margen que separa el tratamiento de la desmielinización osmótica',
    incompleteMsg: 'Introduce el sodio de partida, el actual y las horas transcurridas.',
    fields: [
      { name: 'inicial', id: 'sp-c-i', type: 'number', step: '0.1', label: 'Sodio al iniciar la corrección (mmol/L)', placeholder: 'ej. 112', row: 'r1' },
      { name: 'actual', id: 'sp-c-a', type: 'number', step: '0.1', label: 'Sodio actual (mmol/L)', placeholder: 'ej. 121', row: 'r1' },
      { name: 'horas', id: 'sp-c-h', type: 'number', step: '0.5', label: 'Horas desde que se inició', placeholder: 'ej. 14', row: 'r2' },
      { name: 'cronica', id: 'sp-c-cr', type: 'select', label: 'Duración de la hiponatremia', row: 'r2', options: [
        { v: 'cronica', t: 'Crónica o de duración desconocida' },
        { v: 'aguda', t: 'Aguda, de menos de 48 horas documentadas' }
      ] },
      { name: 'riesgo', id: 'sp-c-r', type: 'checkbox', label: 'Factores de riesgo añadidos (alcoholismo, desnutrición, hepatopatía, hipopotasemia)' },
      { type: 'note', text: 'Límites de la guía europea: 10 mmol/L como máximo en las primeras 24 horas y 8 mmol/L en cada periodo de 24 horas siguiente, hasta que el sodio alcance 130 mmol/L. Recordar que corregir una hipopotasemia sube el sodio por sí misma y cuenta dentro del límite.' }
    ],
    compute(v) {
      if (v.inicial == null || v.actual == null || v.horas == null || !v.cronica) return null;
      if (!(v.inicial > 70 && v.inicial < 200)) return { invalido: true };
      if (!(v.actual > 70 && v.actual < 200)) return { invalido: true };
      if (!(v.horas >= 0 && v.horas <= 240)) return { invalido: true };
      const subida = v.actual - v.inicial;
      const periodo = Math.floor(v.horas / 24);        // 0 = primeras 24 h
      const limite = periodo === 0 ? 10 : 10 + 8 * periodo;
      const margen = limite - subida;
      return { subida, horas: v.horas, periodo, limite, margen, actual: v.actual, cronica: v.cronica === 'cronica', riesgo: !!v.riesgo };
    },
    format(r) {
      if (r.invalido) return '<span class="cr-warn">Revisa los valores: sodios entre 70 y 200 y horas entre 0 y 240.</span>';
      const ventana = r.periodo === 0 ? 'las primeras 24 horas' : `las primeras ${(r.periodo + 1) * 24} horas`;
      const cab = `Ascenso de <strong>${r.subida.toFixed(1)} mmol/L</strong> en ${r.horas} horas. El techo acumulado para ${ventana} es de <strong>${r.limite} mmol/L</strong>.`;
      if (r.actual >= 130) {
        return `${cab}<div style="margin-top:10px;">El sodio ya alcanzó <strong>130 mmol/L</strong>, que es el punto en que los límites de la guía dejan de aplicarse: a partir de aquí la corrección deja de ser el problema.</div>`;
      }
      if (r.margen < 0) {
        return `${cab}<div style="margin-top:10px;"><strong style="color:#8c3a34;">Límite superado en ${(-r.margen).toFixed(1)} mmol/L.</strong> ${r.cronica ? 'En una hiponatremia crónica esto expone al síndrome de desmielinización osmótica. ' : ''}Detener el aporte de sodio y consultar de inmediato: existen medidas de rescate para volver a bajar el sodio, y la decisión no debe demorarse.</div>`;
      }
      if (r.margen <= 2) {
        return `${cab}<div style="margin-top:10px;"><strong>Queda un margen de ${r.margen.toFixed(1)} mmol/L</strong>, que es muy estrecho. Parar el aporte activo de sodio, revisar si hay una diuresis acuosa que esté subiéndolo sola y recontrolar pronto.${r.riesgo ? ' Con factores de riesgo añadidos, conviene ser aún más conservador.' : ''}</div>`;
      }
      return `${cab}<div style="margin-top:10px;">Queda un margen de <strong>${r.margen.toFixed(1)} mmol/L</strong> dentro del límite. Control del sodio a las 6 y 12 horas del inicio y después a diario, y contar también lo que suba al corregir el potasio.</div>`;
    }
  },

  {
    key: 'hiperpotasemia', title: 'Hiperpotasemia: gravedad y conducta', accent: '#7a2f5c',
    subtitle: 'Proteger, desplazar y eliminar, en ese orden',
    incompleteMsg: 'Introduce el potasio y responde si hay cambios en el electrocardiograma.',
    fields: [
      { name: 'k', id: 'sp-k-k', type: 'number', step: '0.1', label: 'Potasio sérico (mmol/L)', placeholder: 'ej. 6.7', row: 'r1' },
      { name: 'ecg', id: 'sp-k-e', type: 'select', label: 'Electrocardiograma', row: 'r1', options: [
        { v: 'cambios', t: 'Con cambios sugestivos de hiperpotasemia' },
        { v: 'normal', t: 'Sin cambios' },
        { v: 'nohecho', t: 'Todavía no realizado' }
      ] },
      { name: 'parada', id: 'sp-k-p', type: 'checkbox', label: 'Contexto de reanimación cardiopulmonar' },
      { name: 'comunidad', id: 'sp-k-c', type: 'checkbox', label: 'Detectada en la comunidad, fuera del hospital' },
      { type: 'note', text: 'Las medidas que desplazan el potasio al interior de la célula son transitorias: sin una medida que lo elimine del cuerpo y sin tratar la causa, el potasio vuelve en unas horas. El resonium cálcico dejó de recomendarse de rutina en el tratamiento agudo en la versión de 2023.' }
    ],
    compute(v) {
      if (v.k == null || !v.ecg) return null;
      if (!(v.k > 1 && v.k < 12)) return { invalido: true };
      const grado = v.k >= 6.5 ? 'grave' : v.k >= 6.0 ? 'moderada' : v.k >= 5.5 ? 'leve' : 'normal';
      return { k: v.k, grado, ecg: v.ecg, parada: !!v.parada, comunidad: !!v.comunidad };
    },
    format(r) {
      if (r.invalido) return '<span class="cr-warn">Revisa el valor: el potasio debe estar entre 1 y 12 mmol/L.</span>';
      if (r.grado === 'normal') return `Potasio de ${r.k} mmol/L: por debajo de 5.5 no es hiperpotasemia según la clasificación de la guía.`;
      const color = { leve: '#8a7a2f', moderada: '#8c5a2f', grave: '#8c3a34' }[r.grado];
      let html = `Hiperpotasemia <strong style="color:${color};">${r.grado}</strong> (${r.k} mmol/L). `;
      html += r.grado === 'grave' ? 'Rango de 6.5 o más.' : r.grado === 'moderada' ? 'Rango de 6.0 a 6.4.' : 'Rango de 5.5 a 5.9.';

      const pasos = [];
      if (r.ecg === 'cambios') {
        pasos.push(r.parada
          ? '<strong>Proteger:</strong> cloruro cálcico al 10%, 10 mL intravenosos, que es la sal indicada en el contexto de reanimación.'
          : '<strong>Proteger:</strong> gluconato cálcico al 10%, <strong>30 mL en 10 minutos</strong> por vía intravenosa.');
      } else if (r.ecg === 'nohecho') {
        pasos.push('<strong>Hacer el electrocardiograma ya:</strong> es lo que decide si hay que dar calcio, y no espera a nada más.');
      } else {
        pasos.push('<strong>Proteger:</strong> sin cambios electrocardiográficos no está indicado el calcio. Repetir el trazado si la cifra sube o aparecen síntomas.');
      }
      if (r.grado !== 'leve') {
        pasos.push('<strong>Desplazar:</strong> 10 unidades de insulina soluble con 25 g de glucosa por vía intravenosa, con el protocolo de dos fases para evitar la hipoglucemia, y vigilancia de la glucemia durante 6 horas.');
        pasos.push(r.grado === 'grave'
          ? '<strong>Desplazar (adyuvante):</strong> salbutamol nebulizado de 10 a 20 mg.'
          : '<strong>Desplazar (adyuvante):</strong> puede usarse salbutamol nebulizado de 10 a 20 mg.');
        pasos.push(r.grado === 'grave'
          ? '<strong>Eliminar:</strong> ciclosilicato de sodio y circonio 10 g tres veces al día hasta 72 horas; el patirómero 8.4 g es otra opción. Valorar diálisis si no responde o hay insuficiencia renal grave.'
          : '<strong>Eliminar:</strong> considerar ciclosilicato de sodio y circonio 10 g tres veces al día hasta 72 horas, o patirómero 8.4 g.');
      } else {
        pasos.push('<strong>Tratar la causa:</strong> revisar fármacos, dieta y acidosis. La guía sugiere aumentar la frecuencia de controles en este rango.');
      }
      pasos.push('<strong>Y siempre:</strong> tratar la causa y revisar los fármacos que elevan el potasio, porque las medidas de desplazamiento son transitorias.');

      html += `<ul style="margin:10px 0 0;padding-left:20px;">${pasos.map(p => `<li>${p}</li>`).join('')}</ul>`;
      if (r.comunidad) {
        html += `<div style="margin-top:10px;">${r.grado === 'grave'
          ? '<strong>Detectada en la comunidad y grave:</strong> valoración hospitalaria urgente.'
          : r.grado === 'moderada'
            ? '<strong>Detectada en la comunidad y moderada:</strong> valoración el mismo día.'
            : 'Detectada en la comunidad y leve: control más frecuente y revisión de la causa.'}</div>`;
      }
      return html;
    }
  },

  {
    key: 'acido-base', title: 'Gasometría: trastorno primario y respuesta esperada', accent: '#2d6b5c',
    subtitle: 'Incluye anion gap corregido por albúmina y cociente delta',
    incompleteMsg: 'Introduce pH, PaCO2 y bicarbonato; el ionograma es opcional.',
    fields: [
      { name: 'ph', id: 'sp-a-ph', type: 'number', step: '0.01', label: 'pH arterial', placeholder: 'ej. 7.22', row: 'r1' },
      { name: 'pco2', id: 'sp-a-p', type: 'number', step: '0.1', label: 'PaCO2 (mmHg)', placeholder: 'ej. 28', row: 'r1' },
      { name: 'hco3', id: 'sp-a-h', type: 'number', step: '0.1', label: 'Bicarbonato (mmol/L)', placeholder: 'ej. 11', row: 'r2' },
      { name: 'cronico', id: 'sp-a-c', type: 'checkbox', label: 'Si el trastorno primario es respiratorio, considerarlo crónico' },
      { name: 'na', id: 'sp-a-na', type: 'number', step: '0.1', required: false, label: 'Sodio (mmol/L)', placeholder: 'ej. 140', row: 'r3' },
      { name: 'cl', id: 'sp-a-cl', type: 'number', step: '0.1', required: false, label: 'Cloro (mmol/L)', placeholder: 'ej. 100', row: 'r3' },
      { name: 'alb', id: 'sp-a-al', type: 'number', step: '0.1', required: false, label: 'Albúmina (g/dL)', placeholder: 'ej. 2.8' },
      { type: 'note', text: 'La respuesta esperada se calcula con las fórmulas de Berend (NEJM 2018). Si la observada cae fuera del rango, hay un segundo trastorno superpuesto: esa es la única forma de detectar un trastorno mixto.' }
    ],
    compute(v) {
      if (v.ph == null || v.pco2 == null || v.hco3 == null) return null;
      if (!(v.ph > 6.5 && v.ph < 8)) return { invalido: true };
      if (!(v.pco2 > 5 && v.pco2 < 150)) return { invalido: true };
      if (!(v.hco3 > 1 && v.hco3 < 60)) return { invalido: true };

      const acidemia = v.ph < 7.38;
      const alcalemia = v.ph > 7.42;
      let primario, esperado = null, rango = null;
      if (acidemia) {
        if (v.hco3 < 22) { primario = 'Acidosis metabólica'; esperado = 1.5 * v.hco3 + 8; rango = [esperado - 2, esperado + 2]; }
        else { primario = 'Acidosis respiratoria'; esperado = 24 + (v.cronico ? 4.5 : 1) * ((v.pco2 - 40) / 10); rango = [esperado - 2, esperado + 2]; }
      } else if (alcalemia) {
        if (v.hco3 > 26) { primario = 'Alcalosis metabólica'; esperado = 0.7 * (v.hco3 - 24) + 40; rango = [esperado - 2, esperado + 2]; }
        else { primario = 'Alcalosis respiratoria'; esperado = 24 - (v.cronico ? 4.5 : 2) * ((40 - v.pco2) / 10); rango = [esperado - 2, esperado + 2]; }
      } else {
        primario = 'pH en rango normal';
      }
      const metabolico = primario.includes('metabólica');
      const observado = metabolico ? v.pco2 : v.hco3;

      let ag = null, agCorr = null, delta = null;
      if (v.na != null && v.cl != null) {
        ag = v.na - v.cl - v.hco3;
        agCorr = v.alb != null ? ag + 2.5 * (4 - v.alb) : ag;
        if (agCorr > 12) delta = (agCorr - 12) / (24 - v.hco3);
      }
      return { ph: v.ph, pco2: v.pco2, hco3: v.hco3, primario, esperado, rango, metabolico, observado, ag, agCorr, alb: v.alb, delta, cronico: !!v.cronico };
    },
    format(r) {
      if (r.invalido) return '<span class="cr-warn">Revisa los valores: pH 6.5 a 8, PaCO2 5 a 150 y bicarbonato 1 a 60.</span>';
      let html = `pH ${r.ph}, PaCO2 ${r.pco2}, bicarbonato ${r.hco3}: <strong>${r.primario}</strong>`;
      html += r.primario.includes('respiratoria') || r.primario.includes('respiratorio') ? (r.cronico ? ' (interpretada como crónica).' : ' (interpretada como aguda).') : '.';

      if (r.esperado != null) {
        const unidad = r.metabolico ? 'PaCO2' : 'bicarbonato';
        const dentro = r.observado >= r.rango[0] && r.observado <= r.rango[1];
        html += `<div style="margin-top:10px;"><strong>Respuesta esperada:</strong> ${unidad} de ${r.rango[0].toFixed(1)} a ${r.rango[1].toFixed(1)}; observado ${r.observado}. `;
        if (dentro) html += 'Está dentro de lo esperado: <strong>trastorno simple con compensación adecuada</strong>.';
        else {
          const mas = r.observado > r.rango[1];
          if (r.metabolico) html += mas ? 'Es MAYOR de lo esperado: hay además una <strong>acidosis respiratoria</strong>.' : 'Es MENOR de lo esperado: hay además una <strong>alcalosis respiratoria</strong>.';
          else html += mas ? 'Es MAYOR de lo esperado: hay además una <strong>alcalosis metabólica</strong>.' : 'Es MENOR de lo esperado: hay además una <strong>acidosis metabólica</strong>.';
        }
        html += '</div>';
      }

      if (r.ag != null) {
        html += `<div style="margin-top:10px;"><strong>Anion gap</strong> ${r.ag.toFixed(1)}`;
        if (r.alb != null && r.alb !== 4) html += `, corregido por albúmina de ${r.alb} g/dL: <strong>${r.agCorr.toFixed(2)}</strong> (se suman 2.5 por cada g/dL que falte)`;
        html += r.agCorr > 12 ? '. <strong>Elevado</strong>: buscar lactato, cetonas, uremia y alcoholes tóxicos.' : '. Normal: orientar a pérdidas digestivas o tubulares de bicarbonato.';
        html += '</div>';
        if (r.delta != null && isFinite(r.delta)) {
          const d = r.delta;
          const lectura = d < 0.4 ? 'por debajo de 0.4: hay además una <strong>acidosis metabólica de anion gap normal</strong>'
            : d <= 2 ? 'entre 0.4 y 2: <strong>acidosis con anion gap elevado pura</strong>'
              : 'por encima de 2: hay además una <strong>alcalosis metabólica</strong> o una acidosis respiratoria crónica previa';
          html += `<div style="margin-top:10px;"><strong>Cociente delta</strong> ${d.toFixed(2)}, ${lectura}.</div>`;
        }
      }
      return html;
    }
  }
];
