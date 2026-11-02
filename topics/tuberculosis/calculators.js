// topics/tuberculosis/calculators.js
// 4 herramientas:
// - dosis-tb: dosis de los cuatro farmacos de primera linea por peso, con el ajuste renal de
//   pirazinamida y etambutol y el recordatorio de la piridoxina.
// - ppd-igra: interpretacion de la tuberculina segun el GRUPO DE RIESGO, y del IGRA.
// - hepatotoxicidad-tb: umbrales para suspender o vigilar ante la elevacion de transaminasas.
// - aislamiento-tb: criterios para retirar el aislamiento respiratorio, que no son solo de tiempo.
//
// Sin em dash en el archivo (ver [[feedback-no-em-dash]]).

function bandaPeso(kg) {
  if (kg < 40) return 0;
  if (kg <= 55) return 1;
  if (kg <= 70) return 2;
  return 3;
}

// Franjas habituales de pirazinamida y etambutol (mg/dia) para 40-55, 56-70 y mas de 70 kg.
const Z_BANDA = [null, 1000, 1500, 2000];
const E_BANDA = [null, 800, 1200, 1600];

// Redondeo a la presentacion disponible: isoniazida en comprimidos de 100 y 300 mg,
// rifampicina en capsulas de 150 y 300 mg.
function aPresentacion(mg, paso, tope) {
  return Math.min(Math.round(mg / paso) * paso, tope);
}

export const calculators = [
  {
    key: 'dosis-tb', title: 'Dosis de los fármacos de primera línea', accent: '#5a6b2e',
    subtitle: 'Isoniazida, rifampicina, pirazinamida y etambutol en el adulto',
    incompleteMsg: 'Introduce el peso del paciente.',
    fields: [
      { name: 'peso', id: 'tb-do-peso', type: 'number', step: '0.5', label: 'Peso (kg)', placeholder: 'ej. 62', row: 'r1' },
      { name: 'fg', id: 'tb-do-fg', type: 'number', step: '1', required: false, label: 'Filtrado glomerular estimado (mL/min/1.73 m2, opcional)', placeholder: 'ej. 75', row: 'r1' },
      { name: 'dialisis', id: 'tb-do-dial', type: 'checkbox', label: 'En hemodiálisis', row: 'r2' },
      { name: 'piridoxina', id: 'tb-do-b6', type: 'checkbox', label: 'Riesgo de neuropatía: VIH, diabetes, alcoholismo, embarazo, insuficiencia renal o desnutrición', row: 'r2' },
      { name: 'hepatopatia', id: 'tb-do-hep', type: 'checkbox', label: 'Hepatopatía crónica conocida' },
      { type: 'note', text: 'La isoniazida y la rifampicina se dosifican por peso con un tope diario; la pirazinamida y el etambutol, por franjas de peso. Ninguno de los dos primeros requiere ajuste renal. La infradosificacion es un error frecuente que favorece el fracaso terapéutico y la aparición de resistencias, y la sobredosificación del etambutol es la via directa a la neuritis óptica.' }
    ],
    compute(v) {
      if (v.peso == null) return null;
      if (!(v.peso >= 20 && v.peso <= 250)) return { invalido: true };
      if (v.fg != null && !(v.fg >= 1 && v.fg <= 200)) return { invalido: true };
      const hTeorica = Math.round(v.peso * 5);
      const rTeorica = Math.round(v.peso * 10);
      const h = aPresentacion(hTeorica, 100, 300);
      const r = aPresentacion(rTeorica, 150, 600);
      const banda = bandaPeso(v.peso);
      const z = Z_BANDA[banda];
      const e = E_BANDA[banda];
      const renal = !!v.dialisis || (v.fg != null && v.fg < 30);
      return { h, r, hTeorica, rTeorica, hkg: h / v.peso, rkg: r / v.peso, z, e, banda, renal, dialisis: !!v.dialisis, fg: v.fg, peso: v.peso, piridoxina: !!v.piridoxina, hepatopatia: !!v.hepatopatia, bajoPeso: banda === 0 };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: peso de 20 a 250 kg y filtrado glomerular de 1 a 200 mL/min.';
      let s = `<strong>Para ${r.peso} kg, pauta diaria de la fase intensiva:</strong><br>`;
      s += `<strong style="color:#8c3a34;">Isoniazida ${r.h} mg</strong> <span style="opacity:.8;">(5 mg/kg = ${r.hTeorica} mg, tope 300; ajustado a comprimidos de 100 y 300 mg, quedan ${r.hkg.toFixed(1)} mg/kg)</span><br>`;
      s += `<strong style="color:#8c5a2e;">Rifampicina ${r.r} mg</strong> <span style="opacity:.8;">(10 mg/kg = ${r.rTeorica} mg, tope 600; ajustado a capsulas de 150 y 300 mg, quedan ${r.rkg.toFixed(1)} mg/kg)</span><br>`;
      if (r.bajoPeso) {
        s += '<strong style="color:#8a6a1f;">Pirazinamida y etambutol</strong>: por debajo de 40 kg las franjas habituales no aplican y hay que dosificar por peso (pirazinamida en torno a 25 mg/kg y etambutol en torno a 15 mg/kg), consultando la pauta pediátrica o de bajo peso.';
      } else {
        s += `<strong style="color:#8a6a1f;">Pirazinamida ${r.z} mg</strong> &nbsp;·&nbsp; <strong style="color:#3d5a73;">Etambutol ${r.e} mg</strong> (franja de peso).`;
      }
      if (r.renal) {
        s += `<br><strong style="color:#8c3a34;">Ajuste RENAL necesario</strong> ${r.dialisis ? '(en hemodiálisis)' : `(filtrado de ${r.fg} mL/min)`}: la isoniazida y la rifampicina NO se ajustan, pero la <strong>pirazinamida y el etambutol pasan a TRES VECES POR SEMANA</strong> a la dosis calculada, porque se acumulan. En hemodiálisis, administrar después de la sesión. El riesgo más relevante de no ajustar el etambutol es la neuritis óptica.`;
      }
      if (r.piridoxina) {
        s += '<br><strong style="color:#3f6b52;">Añadir PIRIDOXINA</strong> (25 a 50 mg al dia) para prevenir la neuropatía periférica por isoniazida, que en este paciente tiene riesgo aumentado.';
      } else {
        s += '<br><span style="opacity:.8;">Sin factores marcados para la neuropatía. Aun así, muchos protocolos añaden piridoxina de forma sistemática: es barata, segura y evita una toxicidad que puede dejar secuelas.</span>';
      }
      if (r.hepatopatia) {
        s += '<br><strong style="color:#8c3a34;">Hepatopatía crónica</strong>: controles hepáticos más estrechos, sobre todo en las primeras semanas, y valoración de pautas con menos hepatotóxicos si la reserva funcional es escasa. La pirazinamida es el más hepatotóxico de los cuatro.';
      }
      s += '<br><span style="opacity:.75;">Y en todos: revisar las INTERACCIONES de la rifampicina, que es un potente inductor enzimático (antirretrovirales, anticoagulantes, anticonceptivos, inmunosupresores, antiepilépticos), y avisar de que tiñe la orina de naranja.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : `H ${r.h} mg, R ${r.r} mg${r.bajoPeso ? '' : `, Z ${r.z} mg, E ${r.e} mg`}${r.renal ? ' (ajuste renal)' : ''}`
  },

  {
    key: 'ppd-igra', title: 'Interpretación de la tuberculina y del IGRA', accent: '#8a6a1f',
    subtitle: 'El umbral depende del grupo de riesgo, no del tamaño por si solo',
    incompleteMsg: 'Introduce el diámetro de la induración, o elige el resultado del IGRA si es la prueba que se hizo.',
    fields: [
      { name: 'prueba', id: 'tb-pi-pr', type: 'select', label: 'Prueba realizada', options: [
        { v: 'ppd', t: 'Prueba de la tuberculina (induración en mm)' },
        { v: 'igra', t: 'IGRA (liberación de interferón gamma)' }
      ] },
      { name: 'mm', id: 'tb-pi-mm', type: 'number', step: '1', required: false, label: 'Induración a las 48 a 72 horas (mm), si se hizo tuberculina', placeholder: 'ej. 12', row: 'r1' },
      { name: 'igra', id: 'tb-pi-ig', type: 'select', required: false, label: 'Resultado del IGRA, si fue la prueba realizada', row: 'r1', options: [
        { v: '', t: 'No procede' },
        { v: 'pos', t: 'Positivo' },
        { v: 'neg', t: 'Negativo' },
        { v: 'ind', t: 'Indeterminado' }
      ] },
      { name: 'grupo', id: 'tb-pi-gr', type: 'select', label: 'Grupo de riesgo del paciente', options: [
        { v: 'g5', t: 'VIH, contacto reciente, lesiones fibróticas, trasplante o inmunosupresión' },
        { v: 'g10', t: 'Zona de alta incidencia, drogas por via parenteral, institución cerrada, silicosis, diabetes, insuficiencia renal, neoplasia hematológica o bajo peso' },
        { v: 'g15', t: 'Sin ningún factor de riesgo' }
      ] },
      { name: 'sintomas', id: 'tb-pi-si', type: 'checkbox', label: 'Tiene síntomas o alteración radiológica compatibles con enfermedad activa' },
      { type: 'note', text: 'Se mide la INDURACIÓN, no el eritema, a las 48 a 72 horas. La tuberculina da falsos positivos con la vacuna BCG y con micobacterias ambientales; el IGRA no. Ninguna de las dos distingue infección latente de enfermedad activa, y un resultado negativo NO descarta una tuberculosis activa, sobre todo en el inmunodeprimido.' }
    ],
    compute(v) {
      const esIgra = v.prueba === 'igra';
      if (esIgra) {
        if (!v.igra) return null;
      } else if (v.mm == null) {
        return null;
      }
      if (!esIgra && !(v.mm >= 0 && v.mm <= 80)) return { invalido: true };
      const umbral = v.grupo === 'g5' ? 5 : (v.grupo === 'g10' ? 10 : 15);
      let positiva = null;
      if (esIgra) positiva = v.igra === 'pos' ? true : (v.igra === 'neg' ? false : null);
      else positiva = v.mm >= umbral;
      return { esIgra, mm: v.mm, igra: v.igra, umbral, positiva, grupo: v.grupo, sintomas: !!v.sintomas, indeterminado: esIgra && v.igra === 'ind' };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: la induración debe estar entre 0 y 80 mm.';
      const nombreGrupo = { g5: 'inmunodeprimido o contacto reciente (umbral de 5 mm)', g10: 'riesgo intermedio (umbral de 10 mm)', g15: 'sin factores de riesgo (umbral de 15 mm)' }[r.grupo];
      let s = '';
      if (r.indeterminado) {
        return '<strong style="color:#8a6a1f;">IGRA INDETERMINADO.</strong> Suele deberse a un control positivo insuficiente, lo que ocurre justo en los pacientes más inmunodeprimidos, que son los que más nos preocupan. No equivale a negativo: hay que repetirlo, complementarlo con tuberculina o decidir por criterio clínico y epidemiológico. En un contacto reciente de un caso bacilifero, un resultado indeterminado no debe frenar la actuacion.';
      }
      if (r.esIgra) {
        s += `<strong>IGRA ${r.positiva ? 'POSITIVO' : 'NEGATIVO'}</strong> en un paciente ${nombreGrupo}. El IGRA no se afecta por la vacuna BCG ni por micobacterias ambientales, y se resuelve con una sola extracción. `;
      } else {
        s += `<strong>Induración de ${r.mm} mm frente a un umbral de ${r.umbral} mm: ${r.positiva ? 'POSITIVA' : 'NEGATIVA'}</strong> para este paciente, ${nombreGrupo}. `;
        if (!r.positiva && r.mm > 0 && r.grupo !== 'g5') s += `Si el mismo resultado se diera en un paciente con VIH o en un contacto reciente, ese umbral bajaria a 5 mm y la lectura sería la contraria. `;
      }
      if (r.positiva) {
        s += '<br><strong style="color:#8c3a34;">Y ahora lo que no se puede saltar: DESCARTAR ENFERMEDAD ACTIVA</strong> con anamnesis de síntomas, exploración y RADIOGRAFÍA DE TÓRAX, con estudio microbiológico de esputo ante cualquier duda. Tratar como latente a alguien que en realidad tiene enfermedad activa equivale a darle monoterapia, que es la forma más rápida de fabricar una resistencia.';
        if (r.sintomas) {
          s += '<br><strong style="color:#8c3a34;">Hay síntomas o alteración radiológica compatibles.</strong> Esto NO es una infección latente mientras no se demuestre: corresponde estudio microbiológico completo (prueba molecular rápida, baciloscopias y cultivo) y aislamiento respiratorio si la sospecha es de afectación pulmonar.';
        } else {
          s += '<br>Si se descarta la enfermedad activa, corresponde tratamiento de la infección latente, preferentemente con una <strong>pauta corta con rifamicina</strong> (isoniazida más rifapentina semanal durante 3 meses, o rifampicina diaria durante 4 meses), que se cumplen mejor y son menos hepatotoxicas que la isoniazida sola durante 6 a 9 meses.';
        }
      } else {
        s += '<br>Un resultado negativo <strong>NO descarta una tuberculosis activa</strong>: tanto la tuberculina como el IGRA pierden sensibilidad en el inmunodeprimido, en la enfermedad grave y en el anciano. Además, tardan semanas en positivizarse tras la infección, de modo que en un contacto reciente hay que repetir la prueba a las 8 a 12 semanas antes de darlo por no infectado.';
        if (r.sintomas) s += '<br><strong style="color:#8c3a34;">Con síntomas o alteración radiológica compatibles, este resultado negativo no cambia nada</strong>: hay que hacer el estudio microbiológico igual.';
      }
      return s;
    },
    fragment: r => {
      if (r.invalido) return 'valores no validos';
      if (r.indeterminado) return 'IGRA indeterminado';
      const base = r.esIgra ? `IGRA ${r.positiva ? 'positivo' : 'negativo'}` : `${r.mm} mm frente a umbral de ${r.umbral}: ${r.positiva ? 'positiva' : 'negativa'}`;
      return base + (r.sintomas ? ' (con síntomas: descartar activa)' : '');
    }
  },

  {
    key: 'hepatotoxicidad-tb', title: 'Hepatotoxicidad por antituberculosos', accent: '#8c3a34',
    subtitle: 'Cuando se suspende, cuando se vigila y como se reintroduce',
    incompleteMsg: 'Introduce el valor de las transaminasas expresado en veces el limite alto de la normalidad.',
    fields: [
      { name: 'veces', id: 'tb-he-x', type: 'number', step: '0.1', label: 'Transaminasas (veces el limite ALTO de la normalidad)', placeholder: 'ej. 4.2', row: 'r1' },
      { name: 'bili', id: 'tb-he-bi', type: 'number', step: '0.1', required: false, label: 'Bilirrubina total (mg/dL, opcional)', placeholder: 'ej. 1.4', row: 'r1' },
      { name: 'sintomas', id: 'tb-he-si', type: 'checkbox', label: 'Síntomas: náuseas, vómitos, dolor en hipocondrio derecho, astenia marcada o ictericia', row: 'r2' },
      { name: 'inr', id: 'tb-he-inr', type: 'number', step: '0.01', required: false, label: 'INR (opcional)', placeholder: 'ej. 1.1', row: 'r2' },
      { name: 'hepatopatia', id: 'tb-he-hep', type: 'checkbox', label: 'Hepatopatía crónica previa o consumo activo de alcohol' },
      { type: 'note', text: 'Las elevaciones leves y asintomáticas de transaminasas son FRECUENTES en las primeras semanas de tratamiento y en la mayoría se normalizan solas sin cambiar nada. El error más costoso no es continuar ante una elevación leve, sino continuar ante un paciente sintomático o con ictericia. Antes de atribuir todo al tratamiento hay que descartar hepatitis virica, otros fármacos y alcohol.' }
    ],
    compute(v) {
      if (v.veces == null) return null;
      if (!(v.veces >= 0 && v.veces <= 200)) return { invalido: true };
      if (v.bili != null && !(v.bili >= 0 && v.bili <= 60)) return { invalido: true };
      if (v.inr != null && !(v.inr >= 0.5 && v.inr <= 12)) return { invalido: true };
      const sintomas = !!v.sintomas;
      const ictericia = v.bili != null && v.bili > 3;
      const suspender = (v.veces > 3 && (sintomas || ictericia)) || v.veces > 5;
      const fallo = v.inr != null && v.inr > 1.5;
      return { veces: v.veces, sintomas, ictericia, suspender, fallo, bili: v.bili, inr: v.inr, hepatopatia: !!v.hepatopatia };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: transaminasas de 0 a 200 veces el limite alto, bilirrubina de 0 a 60 mg/dL e INR de 0.5 a 12.';
      let s = `<strong>Transaminasas ${r.veces} veces el limite alto${r.sintomas ? ', CON síntomas' : ', sin síntomas'}${r.ictericia ? ' e ictericia' : ''}.</strong> `;
      if (r.suspender) {
        s += '<strong style="color:#8c3a34;">SUSPENDER los fármacos hepatotóxicos</strong> (isoniazida, rifampicina y pirazinamida). ';
        s += 'Se cumple el umbral: por encima de 3 veces con síntomas o ictericia, o por encima de 5 veces sin síntomas. ';
        s += 'Mientras el paciente esta sin tratamiento, si la enfermedad es extensa o el paciente esta grave se puede mantener una pauta puente con fármacos NO hepatotóxicos (etambutol junto con una fluoroquinolona, y en algunos esquemas un aminoglucosido), decidida con la unidad de referencia. ';
        s += 'Cuando las transaminasas bajen por debajo de 2 veces el limite y los síntomas desaparezcan, se REINTRODUCEN DE UNO EN UNO, con analítica de control entre uno y otro, para identificar al responsable. La pirazinamida es el más hepatotóxico y con frecuencia es la que no vuelve a la pauta.';
      } else {
        s += '<strong style="color:#3f6b52;">NO se cumple el umbral de suspensión.</strong> Se puede continuar el tratamiento con control analítico más estrecho y con instrucciones claras al paciente para que consulte de inmediato si aparecen náuseas, vómitos, dolor en hipocondrio derecho, orina oscura o ictericia. ';
        s += 'Las elevaciones leves y asintomáticas de las primeras semanas suelen normalizarse solas, y suspender el tratamiento ante cualquier cifra alterada prolonga la enfermedad sin beneficio.';
      }
      if (r.fallo) {
        s += `<br><strong style="color:#8c3a34;">ALARMA: INR de ${r.inr}, por encima de 1.5.</strong> Con hepatotoxicidad, la alteración de la coagulación indica fallo de la función de síntesis y no solo citolisis. Suspender todos los hepatotóxicos, ingresar, valorar encefalopatía y contactar con una unidad con programa de trasplante hepático.`;
      }
      if (r.hepatopatia) s += '<br><span style="opacity:.8;">En hepatopatía crónica o consumo activo de alcohol, los controles deben ser más frecuentes y el umbral de actuacion más bajo, porque la reserva funcional es menor y la interpretación de las cifras basales es distinta.</span>';
      s += '<br><span style="opacity:.75;">Antes de atribuir el cuadro al tratamiento: descartar hepatitis virica aguda, otros fármacos hepatotóxicos, alcohol y obstrucción biliar.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.suspender ? 'suspender los hepatotóxicos' : 'continuar con control estrecho')
  },

  {
    key: 'aislamiento-tb', title: 'Retirada del aislamiento respiratorio', accent: '#3d5a73',
    subtitle: 'No basta con el tiempo: hacen falta respuesta clínica y baciloscopias',
    incompleteMsg: 'Introduce los días de tratamiento eficaz y el número de baciloscopias negativas consecutivas.',
    fields: [
      { name: 'dias', id: 'tb-ai-d', type: 'number', step: '1', label: 'Días de tratamiento eficaz recibidos', placeholder: 'ej. 16', row: 'r1' },
      { name: 'bk', id: 'tb-ai-bk', type: 'number', step: '1', label: 'Baciloscopias NEGATIVAS consecutivas (días distintos)', placeholder: 'ej. 3', row: 'r1' },
      { name: 'mejoria', id: 'tb-ai-me', type: 'checkbox', label: 'Mejoría clínica clara: baja la fiebre, disminuye la tos, gana peso', row: 'r2' },
      { name: 'resistencia', id: 'tb-ai-re', type: 'checkbox', label: 'Resistencia demostrada o sospechada (multirresistencia, fracaso previo, contacto con caso resistente)', row: 'r2' },
      { name: 'cultivoNeg', id: 'tb-ai-cn', type: 'checkbox', label: 'Cultivo ya negativizado' },
      { type: 'note', text: 'Estos criterios se aplican al paciente con tuberculosis pulmonar o laringea confirmada y en tratamiento. La tuberculosis EXTRAPULMONAR aislada no se transmite por via aérea y no requiere aislamiento, salvo maniobras que generen aerosoles sobre la lesión. La decisión se toma junto con medicina preventiva y teniendo en cuenta a donde va el paciente al alta: no es lo mismo un domicilio con adultos sanos que una residencia o una casa con niños o inmunodeprimidos.' }
    ],
    compute(v) {
      if (v.dias == null || v.bk == null) return null;
      if (!(v.dias >= 0 && v.dias <= 400)) return { invalido: true };
      if (!(v.bk >= 0 && v.bk <= 20)) return { invalido: true };
      const mejoria = !!v.mejoria;
      const resistencia = !!v.resistencia;
      const cultivoNeg = !!v.cultivoNeg;
      const faltan = [];
      if (v.dias < 14) faltan.push(`solo lleva ${v.dias} días de tratamiento eficaz, y hacen falta al menos 14`);
      if (v.bk < 3) faltan.push(`solo tiene ${v.bk} baciloscopias negativas consecutivas, y hacen falta 3 de días distintos`);
      if (!mejoria) faltan.push('no se ha documentado mejoría clínica clara');
      if (resistencia && !cultivoNeg) faltan.push('hay resistencia demostrada o sospechada y el CULTIVO aun no se ha negativizado');
      return { puede: faltan.length === 0, faltan, dias: v.dias, bk: v.bk, mejoria, resistencia, cultivoNeg };
    },
    format: r => {
      if (r.invalido) return 'Revisa los valores: días de tratamiento de 0 a 400 y baciloscopias negativas de 0 a 20.';
      let s = '';
      if (r.puede) {
        s += '<strong style="color:#3f6b52;">Se cumplen los criterios para retirar el aislamiento respiratorio</strong>: al menos 14 días de tratamiento eficaz, 3 baciloscopias negativas consecutivas de días distintos y mejoría clínica documentada';
        s += r.resistencia ? ', con el cultivo ya negativizado, que es lo que se exige cuando hay resistencia.' : '.';
        s += ' La decisión se toma junto con medicina preventiva y valorando el entorno al que va el paciente: la presencia de niños pequeños, de inmunodeprimidos o de convivencia institucional obliga a ser más conservador.';
      } else {
        s += `<strong style="color:#8c3a34;">NO se cumplen todavía los criterios.</strong> Falta: ${r.faltan.join('; ')}. Mantener el aislamiento respiratorio en habitación con presión negativa si se dispone, con mascarilla de protección respiratoria para el personal y mascarilla quirúrgica para el paciente cuando salga de la habitación.`;
      }
      if (r.resistencia) {
        s += '<br><strong style="color:#8c3a34;">Con resistencia demostrada o sospechada los criterios son más estrictos</strong>: se exige la negativizacion del CULTIVO y no solo de la baciloscopia, y el aislamiento suele prolongarse semanas o meses. Una baciloscopia negativa con cultivo positivo sigue siendo un paciente potencialmente contagioso, y en la multirresistencia el coste de equivocarse es mucho mayor.';
      }
      s += '<br><span style="opacity:.75;">Y en paralelo, dos cosas que no dependen del aislamiento: la DECLARACION obligatoria del caso y el ESTUDIO DE CONTACTOS, que forman parte del tratamiento y no son un trámite administrativo.</span>';
      return s;
    },
    fragment: r => r.invalido ? 'valores no validos' : (r.puede ? 'puede retirarse el aislamiento' : `mantener el aislamiento (${r.faltan.length} criterio${r.faltan.length > 1 ? 's' : ''} sin cumplir)`)
  }
];
