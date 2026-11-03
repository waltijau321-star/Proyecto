// topics/endocarditis-infecciosa/calculators.js - Las cinco herramientas del modulo 121.
// Fuente de las cinco: ESC 2023 de endocarditis (Delgado, Eur Heart J 2023;44(39):3948-4042).
// Las cinco reproducen criterios publicados y devuelven el GRADO de cada recomendacion, porque en
// este tema la diferencia entre un I B y un IIb B cambia la conversacion con el cirujano.
//
// LO QUE NINGUNA HACE: inventar una puntuacion. La guia nombra los factores de riesgo embolico
// (S. aureus, embolia previa, longitud de la vegetacion, edad, diabetes, fibrilacion auricular) y
// remite a una calculadora publicada, pero no da pesos; asi que aqui no hay "score de embolia",
// sino las tres indicaciones quirurgicas con su umbral de 10 mm, que es lo que la guia si gradua.
//
// `momentoCirugia` es solo para la endocarditis IZQUIERDA: la cuadricula de la Figura 10 esta
// escrita para ella, y la derecha tiene sus tres indicaciones propias con umbral de 20 mm. Eso va
// en una nota del formulario, no escondido en el resultado.

const C_ROJO = '#8c3a34';
const C_AMBAR = '#8a6a2e';
const C_VERDE = '#3f6b52';
const C_AZUL = '#3d5a73';

export const calculators = [
  {
    key: 'criteriosEsc', title: 'Criterios ESC 2023: ¿definitiva, posible o rechazada?', accent: '#7a2f52',
    subtitle: 'Dos criterios mayores y cinco menores',
    incompleteMsg: 'Marca los criterios que cumple el paciente.',
    fields: [
      { type: 'note', text: 'CRITERIOS MAYORES' },
      { name: 'mayorMicro', id: 'ei-cr-mm', type: 'checkbox', label: 'Hemocultivos positivos para endocarditis (microorganismo típico en 2 hemocultivos, o persistentemente positivos, o un solo hemocultivo de C. burnetii o IgG de fase I por encima de 1:800)' },
      { name: 'mayorImagen', id: 'ei-cr-mi', type: 'checkbox', label: 'Imagen positiva: lesión característica por ecocardiografía, TC cardiaca, PET/TC con 18F-FDG o SPECT/TC con leucocitos marcados' },
      { type: 'note', text: 'CRITERIOS MENORES' },
      { name: 'menorPredisp', id: 'ei-cr-np', type: 'checkbox', label: 'Predisposición: cardiopatía de riesgo alto o intermedio, o usuario de drogas inyectadas' },
      { name: 'menorFiebre', id: 'ei-cr-nf', type: 'checkbox', label: 'Fiebre por encima de 38 °C', row: true },
      { name: 'menorEmbolia', id: 'ei-cr-ne', type: 'checkbox', label: 'Diseminación vascular embólica, incluida la asintomática vista solo por imagen' },
      { name: 'menorInmuno', id: 'ei-cr-ni', type: 'checkbox', label: 'Fenómenos inmunológicos: glomerulonefritis, nódulos de Osler, manchas de Roth, factor reumatoide', row: true },
      { name: 'menorMicro', id: 'ei-cr-nm', type: 'checkbox', label: 'Evidencia microbiológica que no llega a criterio mayor, o serología de infección activa compatible' },
      { name: 'protesis', id: 'ei-cr-pr', type: 'checkbox', label: 'Hay material protésico (prótesis valvular, injerto, dispositivo, cardiopatía congénita operada)' },
      { type: 'note', text: 'La clasificación se hace al ingreso Y se repite en el seguimiento: un caso posible se reclasifica al añadir imagen.' }
    ],
    compute(v) {
      const mayores = (v.mayorMicro ? 1 : 0) + (v.mayorImagen ? 1 : 0);
      const menoresLista = [];
      if (v.menorPredisp) menoresLista.push('predisposición');
      if (v.menorFiebre) menoresLista.push('fiebre por encima de 38 °C');
      if (v.menorEmbolia) menoresLista.push('diseminación embólica');
      if (v.menorInmuno) menoresLista.push('fenómenos inmunológicos');
      if (v.menorMicro) menoresLista.push('evidencia microbiológica menor');
      const menores = menoresLista.length;
      if (mayores === 0 && menores === 0) return null;

      let clase, motivo;
      if (mayores === 2) { clase = 'definitiva'; motivo = 'dos criterios mayores'; }
      else if (mayores === 1 && menores >= 3) { clase = 'definitiva'; motivo = 'un criterio mayor y ' + menores + ' menores'; }
      else if (menores >= 5) { clase = 'definitiva'; motivo = menores + ' criterios menores'; }
      else if (mayores === 1 && menores >= 1 && menores <= 2) { clase = 'posible'; motivo = 'un criterio mayor y ' + menores + ' menor(es)'; }
      else if (menores >= 3 && menores <= 4) { clase = 'posible'; motivo = menores + ' criterios menores'; }
      else { clase = 'rechazada'; motivo = mayores + ' mayor(es) y ' + menores + ' menor(es), que no alcanzan ninguna combinación'; }

      const pasos = [];
      if (clase === 'posible') {
        pasos.push('Repetir hemocultivos si eran negativos o dudosos (clase I).');
        pasos.push('Repetir ecocardiograma transtorácico y transesofágico en 5 a 7 días (clase I).');
        pasos.push('Angio-TC cardiaca para diagnosticar lesiones valvulares (clase I).');
        pasos.push('Añadir criterios menores con imagen cerebral o de cuerpo entero: TC, PET/TC con 18F-FDG o RM (clase IIa). Una embolia silente vista solo por imagen es criterio menor y puede convertir el caso en definitivo.');
      }
      if (clase === 'rechazada') {
        pasos.push('Rechazada significa que no cumple definitiva ni posible al ingreso, CON o SIN diagnóstico alternativo firme. Si la sospecha persiste, repetir hemocultivos e imagen antes de cerrar el caso.');
      }
      if (!v.mayorImagen && v.protesis) {
        pasos.push('Hay material protésico y la imagen todavía no da criterio mayor: la ecocardiografía puede ser normal o no concluyente hasta en el 30% de los casos con endocarditis. En la protésica posible se recomiendan PET/TC con 18F-FDG y angio-TC cardiaca (I B), y si el PET/TC no está disponible, considerar SPECT/TC con leucocitos (IIa C).');
      }
      if (!v.mayorMicro) {
        pasos.push('Sin criterio mayor microbiológico: comprobar si hubo antibiótico ANTES de los hemocultivos, que es la causa más frecuente de endocarditis con hemocultivos negativos, y pedir serología y PCR según la epidemiología local.');
      }
      return { clase, motivo, mayores, menores, menoresLista, pasos };
    },
    format(r) {
      const color = r.clase === 'definitiva' ? C_ROJO : (r.clase === 'posible' ? C_AMBAR : C_AZUL);
      let s = `<strong style="color:${color};font-size:14.5px;">Endocarditis ${r.clase.toUpperCase()}</strong> por ${r.motivo}.`;
      s += `<br><br>Recuento: <strong>${r.mayores}</strong> criterio(s) mayor(es) y <strong>${r.menores}</strong> menor(es)`;
      if (r.menoresLista.length) s += ` (${r.menoresLista.join(', ')})`;
      s += '.';
      s += '<br><br><span style="opacity:.85;font-size:12.5px;">Definitiva: 2 mayores, o 1 mayor y al menos 3 menores, o 5 menores. Posible: 1 mayor y 1 o 2 menores, o 3 a 4 menores.</span>';
      if (r.pasos.length) s += '<br><br><strong>Qué hacer ahora</strong><br>' + r.pasos.map(x => '&bull; ' + x).join('<br>');
      return s;
    },
    fragment: r => `Endocarditis ${r.clase} (${r.mayores} mayor/es, ${r.menores} menor/es)`
  },

  {
    key: 'momentoCirugia', title: 'Momento de la cirugía en la endocarditis izquierda', accent: '#8c3a34',
    subtitle: 'Tres razones, tres plazos',
    incompleteMsg: 'Marca las condiciones presentes.',
    fields: [
      { type: 'note', text: 'INSUFICIENCIA CARDIACA' },
      { name: 'edemaRefractario', id: 'ei-mc-er', type: 'checkbox', label: 'Regurgitación aguda grave, obstrucción o fístula con edema pulmonar refractario o choque cardiogénico' },
      { name: 'icSintomatica', id: 'ei-mc-ic', type: 'checkbox', label: 'Regurgitación aguda grave u obstrucción con síntomas de insuficiencia cardiaca o signos ecocardiográficos de mala tolerancia hemodinámica' },
      { type: 'note', text: 'INFECCIÓN NO CONTROLADA' },
      { name: 'localNoControlada', id: 'ei-mc-ln', type: 'checkbox', label: 'Absceso, falso aneurisma, fístula, vegetación que crece, dehiscencia protésica o bloqueo auriculoventricular nuevo' },
      { name: 'cultivosPositivos', id: 'ei-mc-cp', type: 'checkbox', label: 'Hemocultivos positivos más de 1 semana o sepsis persistente con antibiótico apropiado y focos metastásicos controlados' },
      { name: 'protesicaAgresiva', id: 'ei-mc-pa', type: 'checkbox', label: 'Endocarditis sobre válvula protésica por S. aureus o bacilo gramnegativo no HACEK' },
      { name: 'hongosMultirr', id: 'ei-mc-hm', type: 'checkbox', label: 'Endocarditis por hongos u organismos multirresistentes' },
      { type: 'note', text: 'PREVENCIÓN DE LA EMBOLIA' },
      { name: 'vegEmbolizo', id: 'ei-mc-ve', type: 'checkbox', label: 'Vegetación persistente de 10 mm o más tras uno o más episodios embólicos a pesar de antibiótico apropiado' },
      { name: 'vegOtraIndicacion', id: 'ei-mc-vo', type: 'checkbox', label: 'Vegetación de 10 mm o más Y otra indicación de cirugía' },
      { name: 'vegSolaBajoRiesgo', id: 'ei-mc-vb', type: 'checkbox', label: 'Vegetación de 10 mm o más sin disfunción valvular grave ni embolia clínica, con riesgo quirúrgico bajo' },
      { type: 'note', text: 'SITUACIÓN NEUROLÓGICA' },
      { name: 'neuro', id: 'ei-mc-nu', type: 'select', label: 'Evento neurológico', options: [
        { value: 'ninguno', label: 'Ninguno' },
        { value: 'ait', label: 'Accidente isquémico transitorio' },
        { value: 'ictus', label: 'Ictus isquémico, sin coma y sin hemorragia en TC o RM' },
        { value: 'ictusComa', label: 'Ictus con coma, o hemorragia no excluida' },
        { value: 'hemorragia', label: 'Hemorragia intracraneal' }
      ] },
      { type: 'note', text: 'Esta cuadrícula es la de la endocarditis IZQUIERDA. La DERECHA tiene tres indicaciones propias: disfunción del ventrículo derecho por insuficiencia tricuspídea aguda grave que no responde a diuréticos (I B), vegetación persistente con insuficiencia respiratoria que requiere ventilación tras embolias pulmonares recurrentes (I B) y vegetación tricuspídea residual de más de 20 mm tras embolias pulmonares sépticas recurrentes (I C). Y se debe considerar reparar la tricúspide en lugar de sustituirla cuando sea posible (IIa B).' }
    ],
    compute(v) {
      const ind = [];
      if (v.edemaRefractario) ind.push({ plazo: 'emergencia', g: 'I B', razon: 'Insuficiencia cardiaca', d: 'Regurgitación aguda grave, obstrucción o fístula con edema pulmonar refractario o choque cardiogénico, independientemente del estado de la infección y del tiempo de antibiótico, cuando la intervención no sea fútil.' });
      if (v.icSintomatica) ind.push({ plazo: 'urgente', g: 'I B', razon: 'Insuficiencia cardiaca', d: 'Regurgitación aguda grave u obstrucción con síntomas de insuficiencia cardiaca o signos ecocardiográficos de mala tolerancia hemodinámica.' });
      if (v.localNoControlada) ind.push({ plazo: 'urgente', g: 'I B', razon: 'Infección no controlada', d: 'Infección localmente no controlada: absceso, falso aneurisma, fístula, vegetación que crece, dehiscencia protésica o bloqueo auriculoventricular nuevo.' });
      if (v.cultivosPositivos) ind.push({ plazo: 'urgente', g: 'IIa B', razon: 'Infección no controlada', d: 'Hemocultivos persistentemente positivos más de una semana o sepsis persistente con antibiótico apropiado y control adecuado de los focos metastásicos. Antes de llamarlo fracaso hay que excluir abscesos extracardiacos, vías infectadas, embolias y la propia reacción adversa al antibiótico.' });
      if (v.protesicaAgresiva) ind.push({ plazo: 'urgente', g: 'IIa C', razon: 'Infección no controlada', d: 'Endocarditis protésica causada por S. aureus o por bacilos gramnegativos no HACEK.' });
      if (v.hongosMultirr) ind.push({ plazo: 'variable', g: 'I C', razon: 'Infección no controlada', d: 'Hongos u organismos multirresistentes: cirugía urgente o no urgente SEGÚN la situación hemodinámica del paciente.' });
      if (v.vegEmbolizo) ind.push({ plazo: 'urgente', g: 'I B', razon: 'Prevención de la embolia', d: 'Vegetación persistente de 10 mm o más tras uno o más episodios embólicos a pesar de antibiótico apropiado.' });
      if (v.vegOtraIndicacion) ind.push({ plazo: 'urgente', g: 'I C', razon: 'Prevención de la embolia', d: 'Vegetación de 10 mm o más con otra indicación de cirugía.' });
      if (v.vegSolaBajoRiesgo) ind.push({ plazo: 'urgente', g: 'IIb B', razon: 'Prevención de la embolia', d: 'Vegetación de 10 mm o más sin disfunción valvular grave ni evidencia clínica de embolia, con riesgo quirúrgico bajo: PUEDE considerarse.' });

      const neuro = v.neuro || 'ninguno';
      const avisosNeuro = [];
      if (neuro === 'ait') avisosNeuro.push('Tras un accidente isquémico transitorio, la cirugía indicada se recomienda SIN demora (I B).');
      if (neuro === 'ictus') avisosNeuro.push('Tras un ictus, la cirugía se recomienda sin demora si hay insuficiencia cardiaca, infección no controlada, absceso o riesgo embólico alto persistente, siempre que no haya coma y se haya excluido la hemorragia cerebral por TC o RM craneal (I B). El razonamiento: el riesgo de transformación hemorrágica de una lesión isquémica no complicada es MENOR que el riesgo de embolia recurrente bajo antibiótico.');
      if (neuro === 'ictusComa') avisosNeuro.push('Con coma, o con hemorragia cerebral NO excluida, falta la condición que la recomendación I B exige para operar sin demora: hay que excluir la hemorragia por TC o RM craneal y valorar el pronóstico neurológico antes de decidir.');
      if (neuro === 'hemorragia') avisosNeuro.push('Con hemorragia intracraneal y situación clínica inestable por insuficiencia cardiaca, infección no controlada o riesgo embólico alto persistente, debe considerarse cirugía urgente o de emergencia SOPESANDO la probabilidad de un resultado neurológico significativo (IIa C).');

      let plazo = 'ninguna indicación con estos datos';
      if (ind.some(x => x.plazo === 'emergencia')) plazo = 'EMERGENCIA, dentro de 24 horas';
      else if (ind.some(x => x.plazo === 'urgente')) plazo = 'URGENTE, en 3 a 5 días';
      else if (ind.some(x => x.plazo === 'variable')) plazo = 'URGENTE o NO URGENTE, según la hemodinámica';

      return { ind, plazo, avisosNeuro, emergencia: ind.some(x => x.plazo === 'emergencia') };
    },
    format(r) {
      const color = r.ind.length ? (r.emergencia ? C_ROJO : C_AMBAR) : C_VERDE;
      let s = `<strong style="color:${color};font-size:14.5px;">${r.ind.length ? 'Cirugía: ' + r.plazo : 'Sin indicación quirúrgica con los datos marcados'}</strong>`;
      if (!r.ind.length) s += '<br><br>Antibiótico intravenoso con observación clínica y ecocardiográfica estricta. Hay que repetir esta valoración cada día: la insuficiencia cardiaca, el bloqueo auriculoventricular nuevo y el crecimiento de la vegetación aparecen durante el ingreso.';
      if (r.ind.length) {
        s += '<br><br><strong>Indicaciones presentes</strong><br>' + r.ind.map(x => `&bull; <strong>${x.razon}</strong> <span style="opacity:.8;">(${x.g})</span><br><span style="opacity:.9;padding-left:12px;">${x.d}</span>`).join('<br>');
        s += '<br><br><span style="opacity:.85;font-size:12.5px;">Plazos de la guía: emergencia es dentro de 24 h, urgente es en 3 a 5 días, no urgente es dentro del mismo ingreso.</span>';
      }
      if (r.emergencia) s += `<br><br><span style="color:${C_ROJO};">La cirugía de emergencia NO debe retrasarse por la discusión del Equipo de Endocarditis.</span>`;
      if (r.avisosNeuro.length) s += '<br><br>' + r.avisosNeuro.map(x => `<span style="color:${C_AZUL};">${x}</span>`).join('<br><br>');
      return s;
    },
    fragment: r => r.ind.length ? `Cirugía ${r.plazo} (${r.ind.length} indicación/es)` : 'Sin indicación quirúrgica'
  },

  {
    key: 'duracionAtb', title: 'Duración del antibiótico por microorganismo', accent: '#2e6b6b',
    subtitle: 'Las cifras que hay que saber de memoria',
    incompleteMsg: 'Elige el microorganismo y el tipo de válvula.',
    fields: [
      { name: 'germen', id: 'ei-du-ge', type: 'select', label: 'Microorganismo', options: [
        { value: 'estrepSens', label: 'Estreptococo oral o grupo S. gallolyticus, sensible a penicilina' },
        { value: 'estrepRes', label: 'Estreptococo oral o S. gallolyticus con exposición aumentada o resistente' },
        { value: 'estafMS', label: 'Estafilococo sensible a meticilina (S. aureus o coagulasa negativo)' },
        { value: 'estafMR', label: 'Estafilococo resistente a meticilina' },
        { value: 'enteroNoHlar', label: 'Enterococcus spp. sin resistencia de alto grado a aminoglucósidos' },
        { value: 'enteroHlar', label: 'E. faecalis con resistencia de alto grado a aminoglucósidos (HLAR)' },
        { value: 'coxiella', label: 'Coxiella burnetii u otro patógeno de hemocultivo negativo' }
      ] },
      { name: 'valvula', id: 'ei-du-va', type: 'select', label: 'Válvula', options: [
        { value: 'nativa', label: 'Nativa' },
        { value: 'protesica', label: 'Protésica' }
      ] },
      { name: 'lado', id: 'ei-du-la', type: 'select', label: 'Lado', options: [
        { value: 'izq', label: 'Izquierda (aórtica o mitral)' },
        { value: 'der', label: 'Derecha (tricúspide o pulmonar)' }
      ] },
      { name: 'noComplicada', id: 'ei-du-nc', type: 'checkbox', label: 'NO complicada (sin absceso, sin afectación extracardiaca, menos de 3 meses de síntomas)' },
      { name: 'renalNormal', id: 'ei-du-rn', type: 'checkbox', label: 'Función renal normal', row: true },
      { type: 'note', text: 'Para la pauta corta de 2 semanas en la endocarditis DERECHA por S. aureus sensible hacen falta estas cuatro:' },
      { name: 'respuesta96', id: 'ei-du-r9', type: 'checkbox', label: 'Buena respuesta clínica y microbiológica en más de 96 horas' },
      { name: 'veg20', id: 'ei-du-v2', type: 'checkbox', label: 'Vegetación de 20 mm o menos', row: true },
      { name: 'sinFocos', id: 'ei-du-sf', type: 'checkbox', label: 'Sin focos metastásicos ni empiema, sin complicaciones cardiacas ni extracardiacas' },
      { name: 'sinProtesisIzq', id: 'ei-du-sp', type: 'checkbox', label: 'Sin prótesis valvular ni afectación izquierda, y sin inmunosupresión grave', row: true }
    ],
    compute(v) {
      const germen = v.germen || 'estrepSens';
      const prot = v.valvula === 'protesica';
      const der = v.lado === 'der';
      const pautas = [], avisos = [];
      let duracion = '';

      if (germen === 'estrepSens') {
        if (prot) { duracion = '6 semanas'; pautas.push('Penicilina G 12 a 18 millones de unidades al día, o amoxicilina 100 a 200 mg/kg al día, o ceftriaxona 2 g al día, durante 6 semanas (I B).'); }
        else if (v.noComplicada && v.renalNormal) { duracion = '2 semanas (o 4 si prefieres la pauta estándar)'; pautas.push('Pauta corta: penicilina G, amoxicilina o ceftriaxona COMBINADA con gentamicina, 2 semanas (I B). Solo en válvula nativa NO complicada y con función renal normal.'); pautas.push('Pauta estándar alternativa: 4 semanas sin aminoglucósido.'); }
        else { duracion = '4 semanas'; pautas.push('Penicilina G, amoxicilina o ceftriaxona durante 4 semanas en válvula nativa (I B). La pauta de 2 semanas exige que sea NO complicada y con función renal normal.'); }
        avisos.push('Tras 10 a 14 días de tratamiento debe considerarse el OPAT o la vía oral ambulatoria si el paciente está estable. Si hay alergia documentada a penicilina se recomienda desensibilización; si no es posible, cefalosporina (en reacción no anafiláctica) o vancomicina, teniendo en cuenta que el betalactámico es superior al glucopéptido.');
      } else if (germen === 'estrepRes') {
        duracion = prot ? '6 semanas' : '4 semanas';
        pautas.push('Penicilina o ceftriaxona combinada con aminoglucósido, con el aminoglucósido durante 2 SEMANAS. Las pautas cortas NO se recomiendan en el estreptococo resistente a penicilina.');
        avisos.push('La incidencia de estos estreptococos resistentes está aumentando: en grandes colecciones de cepas se ha descrito más del 30% de S. mitis y S. oralis resistentes.');
      } else if (germen === 'estafMS') {
        if (prot) { duracion = 'al menos 6 semanas'; pautas.push('(Flu)cloxacilina 12 g al día o cefazolina 6 g al día, CON rifampicina 900 mg al día al menos 6 semanas, MÁS gentamicina 3 mg/kg al día durante 2 semanas (I B).'); avisos.push('La rifampicina se añade solo DESPUÉS de 3 a 5 días de antibiótico eficaz, una vez aclarada la bacteriemia: antes antagoniza frente a la bacteria que se replica, mientras sinergiza frente a la bacteria dormida del biofilm y evita variantes resistentes.'); }
        else if (der && v.respuesta96 && v.veg20 && v.sinFocos && v.sinProtesisIzq) { duracion = '2 semanas'; pautas.push('Oxacilina o cloxacilina SIN gentamicina durante 2 semanas: se cumplen las cuatro condiciones (S. aureus sensible a meticilina, respuesta en más de 96 horas, vegetación de 20 mm o menos, y sin focos metastásicos, empiema, complicaciones, prótesis, afectación izquierda ni inmunosupresión grave).'); avisos.push('Los glucopéptidos (vancomicina) NO deben usarse en una pauta de 2 semanas. Y esta pauta corta NO puede aplicarse a la endocarditis izquierda.'); }
        else { duracion = '4 a 6 semanas'; pautas.push('(Flu)cloxacilina 12 g al día en 4 a 6 dosis, o cefazolina 6 g al día en 3 dosis, durante 4 a 6 semanas (I B).'); if (der) avisos.push('Para la pauta corta de 2 semanas en el lado derecho falta alguna de las cuatro condiciones; con cualquiera de ellas sin cumplir, la pauta es la estándar de 4 a 6 semanas.'); }
        avisos.push('El aminoglucósido ya NO se recomienda en la endocarditis estafilocócica sobre válvula NATIVA: no se ha demostrado beneficio clínico y aumenta la toxicidad renal.');
      } else if (germen === 'estafMR') {
        duracion = prot ? 'al menos 6 semanas' : '4 a 6 semanas';
        pautas.push('Vancomicina con objetivo de valle de 15 a 20 mg/L, o daptomicina 10 mg/kg al día. En la protésica, con rifampicina al menos 6 semanas y gentamicina 2 semanas.');
        avisos.push('La daptomicina debe darse a dosis ALTAS (10 mg/kg) y combinada con un betalactámico o con fosfomicina, para aumentar la actividad y evitar resistencia. La fosfomicina se asocia a más riesgo de insuficiencia cardiaca aguda y fallo renal por su carga de sodio, y la daptomicina a síndromes eosinofílicos hasta en el 15% de los pacientes.');
      } else if (germen === 'enteroNoHlar') {
        duracion = '6 semanas con ceftriaxona, o 2 semanas de gentamicina';
        pautas.push('Ampicilina 12 g al día o amoxicilina 200 mg/kg al día, COMBINADA con ceftriaxona 4 g al día durante 6 semanas, o con gentamicina 3 mg/kg al día en dosis única durante 2 semanas (I B).');
        if (prot || !v.noComplicada) pautas.push('En válvula protésica, en la nativa complicada o con más de 3 meses de síntomas, la misma combinación con la misma duración (I B).');
        avisos.push('Se prefiere ampicilina o amoxicilina a penicilina G, porque su concentración mínima inhibitoria es dos a cuatro veces menor.');
      } else if (germen === 'enteroHlar') {
        duracion = '6 semanas';
        pautas.push('Ampicilina MÁS ceftriaxona durante 6 semanas: es la combinación de elección en E. faecalis con resistencia de alto grado a aminoglucósidos, porque sinergizan inhibiendo PBP complementarias y evita la nefrotoxicidad.');
        avisos.push('Con una concentración mínima inhibitoria de aminoglucósido por encima de 128 mg/L se pierde el sinergismo bactericida con los inhibidores de la pared, y el aminoglucósido NO debe usarse. La doble betalactámico no es eficaz frente a E. faecium.');
      } else {
        duracion = 'prolongada y dirigida al patógeno';
        pautas.push('Coxiella burnetii: doxiciclina MÁS hidroxicloroquina, con monitorización de los niveles séricos de hidroxicloroquina, es significativamente superior a doxiciclina sola.');
        pautas.push('Bartonella: ampicilina o amoxicilina 12 g al día, o ceftriaxona 2 g al día, combinadas con un aminoglucósido. Las fluoroquinolonas nuevas (levofloxacino, moxifloxacino) son más potentes que ciprofloxacino frente a patógenos intracelulares.');
        avisos.push('El OPAT NO se recomienda con microorganismos muy difíciles de tratar (III C), y varios de estos patógenos entran en esa categoría. Se recomienda consultar con un especialista en enfermedades infecciosas.');
      }

      if (der && germen !== 'estafMS') avisos.push('En la endocarditis derecha, las vegetaciones muy grandes junto a una historia de heroína marrón disuelta en zumo de limón sugieren Candida spp. distinta de C. albicans, lo que obliga a añadir antifúngico.');
      return { duracion, pautas, avisos, prot, der, germen };
    },
    format(r) {
      let s = `<strong style="color:${C_AZUL};font-size:14.5px;">Duración: ${r.duracion}</strong>`;
      s += '<br><br><strong>Pauta</strong><br>' + r.pautas.map(x => '&bull; ' + x).join('<br>');
      if (r.avisos.length) s += '<br><br>' + r.avisos.map(x => `<span style="color:${C_AMBAR};">${x}</span>`).join('<br><br>');
      s += '<br><br><span style="opacity:.85;font-size:12.5px;">Las dos fases del tratamiento: crítica, hasta 2 semanas de ingreso con combinaciones bactericidas rápidas, en la que se opera si hay indicación, se retiran los dispositivos infectados y se drenan los abscesos; y de continuación, más allá del día 10 y de 7 días tras la cirugía, en la que el paciente estable puede terminar en casa.</span>';
      return s;
    },
    fragment: r => `Duración: ${r.duracion}`
  },

  {
    key: 'pasoOral', title: '¿Puede pasar a vía oral o a OPAT?', accent: '#3f6b52',
    subtitle: 'Todas las casillas, o sigue intravenoso',
    incompleteMsg: 'Elige el microorganismo y marca las condiciones.',
    fields: [
      { name: 'germen', id: 'ei-po-ge', type: 'select', label: 'Microorganismo aislado', options: [
        { value: 'elegible', label: 'S. aureus, Streptococcus spp., estafilococo coagulasa negativo o E. faecalis' },
        { value: 'otro', label: 'Otro microorganismo' },
        { value: 'dificil', label: 'Microorganismo muy difícil de tratar' }
      ] },
      { name: 'infControlada', id: 'ei-po-ic', type: 'checkbox', label: 'Infección controlada' },
      { name: 'sinFiebre', id: 'ei-po-sf', type: 'checkbox', label: 'Sin fiebre durante más de 2 días', row: true },
      { name: 'pcrBaja', id: 'ei-po-pc', type: 'checkbox', label: 'Proteína C reactiva por debajo del 25% del máximo alcanzado, o por debajo de 20 mg/L' },
      { name: 'leucoBajos', id: 'ei-po-le', type: 'checkbox', label: 'Leucocitos por debajo de 15 x 10⁹/L', row: true },
      { name: 'dias10', id: 'ei-po-d1', type: 'checkbox', label: 'Al menos 10 días de antibiótico intravenoso adecuado' },
      { name: 'dias7', id: 'ei-po-d7', type: 'checkbox', label: 'Al menos 7 días desde la cirugía valvular, o no hubo cirugía', row: true },
      { name: 'sinOtraIV', id: 'ei-po-so', type: 'checkbox', label: 'Sin otra indicación de seguir intravenoso' },
      { name: 'imcOk', id: 'ei-po-im', type: 'checkbox', label: 'Índice de masa corporal de 40 o menos y absorción digestiva normal', row: true },
      { name: 'toeOk', id: 'ei-po-to', type: 'checkbox', label: 'Ecocardiograma transesofágico hecho y SIN indicación quirúrgica nueva' },
      { type: 'note', text: 'Contraindicaciones del OPAT (III C): márcalas si están presentes.' },
      { name: 'cirrosis', id: 'ei-po-ci', type: 'checkbox', label: 'Cirrosis hepática Child-Pugh B o C' },
      { name: 'emboliaSnc', id: 'ei-po-es', type: 'checkbox', label: 'Embolia grave del sistema nervioso central', row: true },
      { name: 'abscesoGrande', id: 'ei-po-ag', type: 'checkbox', label: 'Absceso extracardiaco grande no tratado, complicación valvular u otra situación grave que requiera cirugía' },
      { name: 'udi', id: 'ei-po-ud', type: 'checkbox', label: 'Endocarditis relacionada con el uso de drogas inyectadas', row: true },
      { name: 'postqx', id: 'ei-po-pq', type: 'checkbox', label: 'Complicaciones postquirúrgicas graves' }
    ],
    compute(v) {
      const germen = v.germen || 'elegible';
      const faltan = [];
      if (germen === 'otro') faltan.push('el microorganismo no es uno de los cuatro con los que se validó la estrategia de dos fármacos por vía oral (S. aureus, Streptococcus spp., coagulasa negativo o E. faecalis)');
      if (!v.infControlada) faltan.push('la infección no consta controlada');
      if (!v.sinFiebre) faltan.push('no lleva más de 2 días sin fiebre');
      if (!v.pcrBaja) faltan.push('la proteína C reactiva no ha bajado del 25% del máximo ni de 20 mg/L');
      if (!v.leucoBajos) faltan.push('los leucocitos no están por debajo de 15 x 10⁹/L');
      if (!v.dias10) faltan.push('no lleva 10 días de antibiótico intravenoso adecuado');
      if (!v.dias7) faltan.push('no han pasado 7 días desde la cirugía valvular');
      if (!v.sinOtraIV) faltan.push('hay otra indicación de seguir intravenoso');
      if (!v.imcOk) faltan.push('el índice de masa corporal pasa de 40, o la absorción digestiva está alterada');
      if (!v.toeOk) faltan.push('falta el ecocardiograma transesofágico previo al cambio de vía, o muestra una indicación quirúrgica nueva');

      const contra = [];
      if (germen === 'dificil') contra.push('microorganismo muy difícil de tratar');
      if (v.cirrosis) contra.push('cirrosis Child-Pugh B o C');
      if (v.emboliaSnc) contra.push('embolia grave del sistema nervioso central');
      if (v.abscesoGrande) contra.push('absceso extracardiaco grande no tratado o situación que requiere cirugía');
      if (v.udi) contra.push('endocarditis del usuario de drogas inyectadas');
      if (v.postqx) contra.push('complicaciones postquirúrgicas graves');

      let veredicto;
      if (contra.length) veredicto = 'contraindicado';
      else if (faltan.length) veredicto = 'todavia no';
      else veredicto = 'puede';
      return { veredicto, faltan, contra, germen };
    },
    format(r) {
      let s;
      if (r.veredicto === 'puede') {
        s = `<strong style="color:${C_VERDE};font-size:14.5px;">Puede pasar a vía oral (estrategia de dos fármacos) o a OPAT.</strong>`;
        s += '<br><br>Cumple las casillas del algoritmo. El OPAT parenteral ambulatorio debe considerarse en la endocarditis izquierda por Streptococcus spp., E. faecalis, S. aureus o coagulasa negativos tras al menos 10 días de intravenoso adecuado, o 7 tras la cirugía, en paciente estable sin absceso ni alteración valvular que requiera cirugía (IIa A).';
        s += '<br><br><span style="opacity:.85;font-size:12.5px;">El ensayo POET demostró que hasta un 20% de los pacientes puede completar el tratamiento por vía oral, y los resultados a 5 años se mantuvieron. Ni la vía oral parcial ni el OPAT se asociaron a más riesgo de endocarditis recurrente.</span>';
      } else if (r.veredicto === 'contraindicado') {
        s = `<strong style="color:${C_ROJO};font-size:14.5px;">OPAT NO recomendado (III C).</strong>`;
        s += '<br><br><strong>Por</strong><br>' + r.contra.map(x => '&bull; ' + x).join('<br>');
        s += '<br><br>Hay que completar el tratamiento intravenoso hospitalario.';
        if (r.faltan.length) s += '<br><br><span style="opacity:.8;font-size:12.5px;">Además, todavía faltarían: ' + r.faltan.join('; ') + '.</span>';
      } else {
        s = `<strong style="color:${C_AMBAR};font-size:14.5px;">Todavía no: sigue intravenoso.</strong>`;
        s += '<br><br><strong>Qué falta</strong><br>' + r.faltan.map(x => '&bull; ' + x).join('<br>');
        s += '<br><br><span style="opacity:.85;font-size:12.5px;">La fase crítica exige al menos 10 días de tratamiento intravenoso, y en ella el OPAT tiene una indicación restringida. A partir del día 10, y de 7 días tras la cirugía, la fase de continuación abre la puerta al cambio.</span>';
      }
      return s;
    },
    fragment: r => r.veredicto === 'puede' ? 'Puede pasar a vía oral o OPAT' : (r.veredicto === 'contraindicado' ? 'OPAT contraindicado' : `Sigue intravenoso (${r.faltan.length} casilla/s sin cumplir)`)
  },

  {
    key: 'profilaxis', title: 'Profilaxis antibiótica: ¿le corresponde y con qué?', accent: '#7a6a2e',
    subtitle: 'El riesgo es del paciente, no del procedimiento',
    incompleteMsg: 'Elige la condición cardiaca y el procedimiento.',
    fields: [
      { name: 'condicion', id: 'ei-pf-co', type: 'select', label: 'Condición cardiaca', options: [
        { value: 'eiPrevia', label: 'Endocarditis infecciosa previa' },
        { value: 'protQx', label: 'Prótesis valvular quirúrgica o material de reparación valvular quirúrgica' },
        { value: 'protTav', label: 'Prótesis valvular aórtica o pulmonar transcatéter' },
        { value: 'congCianotica', label: 'Cardiopatía congénita cianótica no tratada, o tratada con cortocircuito, conducto u otra prótesis paliativa' },
        { value: 'asistencia', label: 'Dispositivo de asistencia ventricular' },
        { value: 'reparaMitTri', label: 'Reparación transcatéter de la mitral o de la tricúspide' },
        { value: 'trasplante', label: 'Receptor de trasplante cardiaco' },
        { value: 'reumatica', label: 'Cardiopatía reumática' },
        { value: 'degenerativa', label: 'Valvulopatía degenerativa no reumática' },
        { value: 'bicuspide', label: 'Anomalía valvular congénita, incluida la válvula aórtica bicúspide' },
        { value: 'dispositivo', label: 'Dispositivo cardiaco implantable electrónico' },
        { value: 'hipertrofica', label: 'Miocardiopatía hipertrófica' },
        { value: 'ninguna', label: 'Ninguna de las anteriores' }
      ] },
      { name: 'procedimiento', id: 'ei-pf-pr', type: 'select', label: 'Procedimiento', options: [
        { value: 'dentalRiesgo', label: 'Dental de riesgo: extracción, cirugía oral, implante, biopsia, raspado o endodoncia' },
        { value: 'dentalSinRiesgo', label: 'Dental sin manipulación gingival ni periapical' },
        { value: 'noDental', label: 'Invasivo no dental: respiratorio, digestivo, genitourinario, cutáneo o musculoesquelético' },
        { value: 'cardiaco', label: 'Implante de prótesis, dispositivo o procedimiento valvular transcatéter' }
      ] },
      { name: 'alergia', id: 'ei-pf-al', type: 'select', label: 'Alergia a betalactámicos', options: [
        { value: 'ninguna', label: 'Ninguna' },
        { value: 'penicilina', label: 'Alergia a penicilina o ampicilina, sin anafilaxia' },
        { value: 'anafilaxia', label: 'Anafilaxia, angioedema o urticaria con penicilina o ampicilina' }
      ] },
      { type: 'note', text: 'La profilaxis antibiótica NUNCA sustituye a las medidas generales de prevención, que se recomiendan en el riesgo alto Y en el intermedio (I C).' }
    ],
    compute(v) {
      const cond = v.condicion || 'ninguna';
      const proc = v.procedimiento || 'dentalRiesgo';
      const alergia = v.alergia || 'ninguna';

      // Las cinco condiciones con recomendacion de clase I y las dos que solo se "consideran" van
      // separadas a proposito: meter la reparacion transcatéter (IIa C) y el trasplante cardiaco
      // (IIb C) en el mismo saco que la endocarditis previa (I B) hacia que la calculadora
      // respondiera "profilaxis recomendada" a un paciente cuya recomendacion es solo "puede
      // considerarse". El grado es parte de la respuesta, no una nota al pie.
      const ALTO = { eiPrevia: 'I B', protQx: 'I C', protTav: 'I C', congCianotica: 'I C', asistencia: 'I C' };
      const CONSIDERAR = { reparaMitTri: 'IIa C', trasplante: 'IIb C' };
      const INTERMEDIO = ['reumatica', 'degenerativa', 'bicuspide', 'dispositivo', 'hipertrofica'];

      let riesgo, grado = null, soloConsiderar = false;
      if (ALTO[cond]) { riesgo = 'alto'; grado = ALTO[cond]; }
      else if (CONSIDERAR[cond]) { riesgo = 'alto'; grado = CONSIDERAR[cond]; soloConsiderar = true; }
      else if (INTERMEDIO.indexOf(cond) >= 0) riesgo = 'intermedio';
      else riesgo = 'bajo';

      let veredicto, detalle;
      if (proc === 'cardiaco') {
        veredicto = 'medidas del procedimiento';
        detalle = 'En todo paciente al que se implanta una prótesis valvular, cualquier injerto u oclusor, o un dispositivo cardiaco, se recomienda profilaxis antibiótica perioperatoria, cualquiera que sea su riesgo basal, por el riesgo y las consecuencias de la infección. Asepsia óptima del sitio de implantación (I B), asepsia quirúrgica estándar en la inserción y manipulación de catéteres en la sala de cateterismo (I C), profilaxis que cubra la flora cutánea habitual incluidos Enterococcus spp. y S. aureus antes del implante valvular aórtico transcatéter y otros procedimientos valvulares transcatéter (IIa C), cribado nasal de S. aureus antes de la cirugía cardiaca electiva o el implante transcatéter, y eliminación de los focos de sepsis dental al menos 2 semanas antes.';
      } else if (proc === 'dentalSinRiesgo') {
        veredicto = 'no indicada';
        detalle = 'Los procedimientos dentales de riesgo son las extracciones, la cirugía oral (periodontal, de implantes y biopsias) y los que manipulan la región gingival o periapical, incluidos el raspado y la endodoncia. Un procedimiento dental que no manipula esas regiones no está en la lista.';
      } else if (proc === 'noDental') {
        if (riesgo === 'alto' && !soloConsiderar) { veredicto = 'puede considerarse'; detalle = 'La profilaxis sistémica PUEDE considerarse en el paciente de alto riesgo sometido a un procedimiento invasivo diagnóstico o terapéutico respiratorio, digestivo, genitourinario, cutáneo o musculoesquelético (IIb C). Es un cambio de 2023: en 2015 esto era una recomendación en contra, y el grupo de trabajo decidió que una clase III ya no era apropiada, aunque la evidencia que la apoya es observacional.'; }
        else { veredicto = 'no indicada'; detalle = 'La recomendación IIb C para procedimientos invasivos no dentales está dirigida al paciente de ALTO riesgo tal como la guía lo define, es decir a las cinco condiciones con recomendación de clase I. No hay evidencia convincente que relacione la bacteriemia de un procedimiento no dental con el riesgo posterior de endocarditis, de modo que lo que se exige es un entorno aséptico durante el procedimiento.'; }
      } else {
        if (soloConsiderar) { veredicto = grado === 'IIa C' ? 'debe considerarse' : 'puede considerarse'; detalle = 'Esta condición no está entre las cinco de clase I: su recomendación ante procedimientos dentales de riesgo es solo de grado ' + grado + ', es decir que la profilaxis ' + (grado === 'IIa C' ? 'DEBE' : 'PUEDE') + ' considerarse, y la decisión es individual.'; }
        else if (riesgo === 'alto') { veredicto = 'recomendada'; detalle = 'Profilaxis antibiótica recomendada antes de procedimientos dentales de riesgo' + (grado ? ' (' + grado + ')' : '') + '.'; }
        else if (riesgo === 'intermedio') { veredicto = 'no de rutina'; detalle = 'En el riesgo intermedio la profilaxis NO se recomienda de rutina y puede valorarse de forma individual. Lo que sí se recomienda con fuerza son las medidas generales de prevención (I C). Algunos datos epidemiológicos sugieren que ciertas condiciones de esta categoría tienen más riesgo que la población general, pero hacen falta más estudios.'; }
        else { veredicto = 'no recomendada'; detalle = 'La profilaxis antibiótica NO se recomienda en pacientes de bajo riesgo de endocarditis (III C).'; }
      }

      let pauta = null;
      if (veredicto === 'recomendada' || veredicto === 'puede considerarse' || veredicto === 'debe considerarse') {
        if (alergia === 'ninguna') pauta = 'Amoxicilina 2 g oral, o ampicilina 2 g intramuscular o intravenosa, en DOSIS ÚNICA 30 a 60 minutos antes del procedimiento. En niños, 50 mg/kg.';
        else if (alergia === 'penicilina') pauta = 'Cefazolina o ceftriaxona 1 g intramuscular o intravenosa, o cefalexina 2 g oral (u otra cefalosporina oral de primera o segunda generación a dosis equivalente), o azitromicina o claritromicina 500 mg oral, o doxiciclina 100 mg oral. Dosis única 30 a 60 minutos antes.';
        else pauta = 'Con anafilaxia, angioedema o urticaria por penicilina o ampicilina NO se usan cefalosporinas: azitromicina o claritromicina 500 mg oral, o doxiciclina 100 mg oral, en dosis única 30 a 60 minutos antes.';
      }
      const avisos = [];
      if (pauta) avisos.push('El grupo de trabajo NO recomienda clindamicina para la profilaxis: el riesgo de eventos adversos fatales y no fatales es extremadamente bajo con amoxicilina y ALTO con clindamicina, sobre todo por infección por Clostridioides difficile.');
      if (cond === 'congCianotica') avisos.push('Tras la reparación quirúrgica, y en ausencia de defectos residuales o prótesis valvulares, la profilaxis solo se recomienda durante los 6 PRIMEROS MESES después del procedimiento.');
      if (cond === 'trasplante') avisos.push('En el receptor de trasplante cardiaco los estreptococos orales son una causa muy infrecuente de endocarditis, lo que hace cuestionable el valor de la profilaxis tras procedimientos orodentales; la recomendación es solo un IIb C, y se apoya en la mortalidad muy alta de la endocarditis en este grupo.');
      if (cond === 'eiPrevia') avisos.push('La endocarditis previa es la condición de MÁS riesgo: estos pacientes tienen un pronóstico ominoso durante el ingreso y con más frecuencia tienen prótesis, son usuarios de drogas inyectadas o tienen endocarditis estafilocócica.');
      return { riesgo, veredicto, detalle, pauta, avisos, grado };
    },
    format(r) {
      const color = (r.veredicto === 'recomendada' || r.veredicto === 'medidas del procedimiento') ? C_VERDE
        : (/considerarse|no de rutina/.test(r.veredicto)) ? C_AMBAR : C_AZUL;
      let s = r.veredicto === 'medidas del procedimiento'
        ? `<strong style="color:${color};font-size:14.5px;">Riesgo ${r.riesgo.toUpperCase()}: aquí mandan las medidas del propio procedimiento.</strong>`
        : `<strong style="color:${color};font-size:14.5px;">Riesgo ${r.riesgo.toUpperCase()}: profilaxis ${r.veredicto}.</strong>`;
      s += '<br><br>' + r.detalle;
      if (r.pauta) s += '<br><br><strong>Pauta</strong><br>' + r.pauta;
      if (r.avisos.length) s += '<br><br>' + r.avisos.map(x => `<span style="color:${C_AZUL};">${x}</span>`).join('<br><br>');
      s += '<br><br><span style="opacity:.85;font-size:12.5px;">Medidas generales, recomendadas en el riesgo alto e intermedio (I C): higiene dental dos veces al día y limpieza profesional al menos dos veces al año en el alto riesgo y una al año en los demás, higiene cutánea estricta, desinfección de heridas, antibiótico curativo de cualquier foco, no automedicarse, control estricto de infección en procedimientos de riesgo, desaconsejar piercings y tatuajes, y limitar catéteres y procedimientos invasivos.</span>';
      return s;
    },
    fragment: r => r.veredicto === 'medidas del procedimiento'
      ? `Riesgo ${r.riesgo}: mandan las medidas del procedimiento`
      : `Riesgo ${r.riesgo}: profilaxis ${r.veredicto}`
  }
];

export default { calculators };
