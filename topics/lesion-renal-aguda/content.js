// topics/lesion-renal-aguda/content.js: Lesion renal aguda, enfoque integrador.
// Cubre el item "Falla renal aguda (enfoque integrador; detalle en Nefrologia)" del cluster
// Fallas organicas (bloque IV, Medicina Critica) del temario.
//
// DELIMITACION: el propio temario lo marca. Aqui esta el ENFOQUE del paciente hospitalizado o
// critico que deja de orinar o al que le sube la creatinina: reconocer, estadiar, localizar,
// prevenir la iatrogenia y decidir la depuracion. El detalle de las glomerulopatias, la
// enfermedad renal cronica y las nefropatias especificas pertenece al bloque VI de Nefrologia.
//
// Fuentes verificadas en Bibliografia/ ([[feedback-verificar-edicion-guias]]): guia KDIGO 2012 de
// lesion renal aguda, que es la version DEFINITIVA en vigor, y el BORRADOR EN REVISION PUBLICA de
// la guia KDIGO 2026 de lesion y enfermedad renal aguda, del que se han transcrito del PDF los
// criterios, el sistema de estadiaje de tres ejes y las definiciones de enfermedad renal aguda,
// de lesion transitoria y persistente y de resolucion. Al ser un borrador, se cita como tal.
//
// Solo `diagnostico`, `clasificacion`, `complicaciones` y `seguimiento_intrahospitalario` van
// ANIDADOS dentro de `export const content = {...}`. `factores_riesgo` y `algoritmo` son ARRAY.
//
// 6 fichas, 3 calculadoras, 3 figuras. Sin em dash. Texto sin acentos.

export const meta = {
  id: 'lesion-renal-aguda',
  titulo: 'Lesion Renal Aguda',
  subtitulo: 'Modulo 70 · Medicina Interna',
  accent: '#3a6b7a'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const criteriosHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3a6b7a;border-radius:8px;padding:5px 9px;background:#3a6b7a12;margin-bottom:6px;">
    <strong style="color:#3a6b7a;">La creatinina es un marcador TARDIO y poco fiable.</strong> <span style="color:var(--ink-dim);">Sube cuando ya se ha perdido buena parte del filtrado, y en el paciente critico la enmascaran la perdida de masa muscular y la dilucion por los fluidos. La DIURESIS avisa antes y es gratis.</span>
  </div>
  <div style="border:1.5px solid #3a6b7a;border-radius:8px;padding:6px 9px;background:#3a6b7a08;margin-bottom:6px;">
    <div style="font-weight:700;color:#3a6b7a;margin-bottom:3px;">CRITERIOS DE LESION RENAL AGUDA: basta UNO</div>
    <div style="color:var(--ink-dim);line-height:1.7;">
      <strong style="color:var(--ink);">1.</strong> Aumento de creatinina de <strong>0.3 mg/dL o mas en 48 horas</strong>.<br>
      <strong style="color:var(--ink);">2.</strong> Aumento de creatinina a <strong>1.5 veces el basal</strong> o mas, en los 7 dias previos.<br>
      <strong style="color:var(--ink);">3.</strong> Diuresis <strong>menor de 0.5 mL/kg/h durante 6 horas</strong> o mas.<br>
      <span style="color:#8a6a1f;"><strong>El borrador de 2026 a&#241;ade dos:</strong> el ascenso equivalente de <strong>CISTATINA C</strong>, util cuando la creatinina es poco fiable, y la elevacion de un <strong>BIOMARCADOR de da&#241;o</strong> validado, que introduce un criterio estructural donde antes todo era funcional.</span>
    </div>
  </div>
  <div style="overflow-x:auto;margin-bottom:6px;">
  <table style="width:100%;border-collapse:collapse;font-size:8.5px;">
    <tr style="background:#3a6b7a15;">
      <th style="border:1px solid var(--line);padding:3px 5px;text-align:left;">Estadio</th>
      <th style="border:1px solid var(--line);padding:3px 5px;">Creatinina</th>
      <th style="border:1px solid var(--line);padding:3px 5px;">Diuresis</th>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong>1</strong></td>
      <td style="border:1px solid var(--line);padding:3px 5px;">Sube 0.3 mg/dL, o 1.5 a 1.9 veces el basal</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">&lt;0.5 mL/kg/h durante 6 a 12 h</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong>2</strong></td>
      <td style="border:1px solid var(--line);padding:3px 5px;">2 a 2.9 veces el basal</td>
      <td style="border:1px solid var(--line);padding:3px 5px;">&lt;0.5 mL/kg/h mas de 12 h</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong style="color:#8c3a34;">3</strong></td>
      <td style="border:1px solid var(--line);padding:3px 5px;">3 veces el basal, o llega a 4.0 mg/dL, <strong style="color:#8c3a34;">o se inicia depuracion</strong></td>
      <td style="border:1px solid var(--line);padding:3px 5px;">&lt;0.3 mL/kg/h mas de 24 h, o anuria mas de 12 h</td>
    </tr>
  </table>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Lo que propone el borrador de 2026: dejar de dar UN estadio.</strong> En su lugar se informan tres ejes por separado: <strong>C</strong> (creatinina, de C0 a C3), <strong>U</strong> (diuresis, de U0 a U3) y <strong>B</strong> (biomarcador de da&#241;o, B0 o B1). Asi deja de perderse la informacion que hoy se colapsa en un solo numero: no es lo mismo un C1 U3 que un C3 U0. Se a&#241;aden ademas dos distinciones utiles: <strong>TRANSITORIA</strong> (48 horas o menos) frente a <strong>PERSISTENTE</strong> (mas de 48 horas y hasta 7 dias), y la <strong>ENFERMEDAD RENAL AGUDA</strong>, que es lo que queda entre los 7 dias y los 3 meses.
  </div>
</div>`;

const localizarHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">Antes de nada, dos cosas que se resuelven en minutos y se olvidan a diario:</strong> <span style="color:var(--ink-dim);">una ECOGRAFIA que descarte obstruccion, y una revision de la LISTA DE FARMACOS. Las dos son gratis comparadas con lo que cuesta no hacerlas.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:88px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">PRERRENAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">El ri&#241;on esta sano pero mal perfundido: hipovolemia, insuficiencia cardiaca, cirrosis, sepsis. Sedimento <strong>LIMPIO</strong>, orina concentrada, sodio urinario bajo. Es <strong style="color:#3f6b52;">REVERSIBLE</strong> si se corrige pronto la causa.</div>
    </div>
    <div style="display:grid;grid-template-columns:88px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">RENAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Da&#241;o del parenquima. La mas frecuente en el hospital es la <strong style="color:var(--ink);">NECROSIS TUBULAR AGUDA</strong>, con cilindros granulosos pardos y celulas tubulares. Si hay hematies dismorficos y cilindros hematicos, la lesion es <strong>GLOMERULAR</strong> y eso cambia todo el estudio.</div>
    </div>
    <div style="display:grid;grid-template-columns:88px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a8c22;border:1px solid #6b4a8c;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a8c;">POSRENAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Obstruccion. Es la causa que <strong style="color:#6b4a8c;">MAS RAPIDO se resuelve</strong> y la que mas se pasa por alto, sobre todo en el varon mayor con prostatismo y en la neoplasia pelvica. Ojo: puede cursar con diuresis <strong>CONSERVADA</strong> si la obstruccion es parcial.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Y una advertencia sobre la excrecion fraccional de sodio, que se usa mucho peor de lo que se cree.</strong> Solo orienta si se interpreta en su contexto: los <strong>DIURETICOS la elevan</strong> y la hacen inservible (ahi hay que usar la de UREA), y hay causas renales que cursan con sodio urinario BAJO, como el contraste, la rabdomiolisis y el sindrome hepatorrenal. Es una ayuda, no un arbitro: no sustituye al sedimento, a la ecografia ni a la historia.
  </div>
</div>`;

const trsHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">Hay indicaciones que no se discuten, y hay una pregunta que si:</strong> <span style="color:var(--ink-dim);">cuando empezar en el paciente que todavia no las cumple. Los ensayos han contestado que ADELANTARSE por sistema NO mejora la supervivencia.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">INDICACIONES QUE NO ESPERAN</div>
      <div style="color:var(--ink-dim);line-height:1.7;">
        <strong style="color:var(--ink);">A</strong>cidosis metabolica grave y refractaria<br>
        <strong style="color:var(--ink);">E</strong>lectrolitos: hiperpotasemia grave o refractaria<br>
        <strong style="color:var(--ink);">I</strong>ntoxicacion por un toxico dializable<br>
        <strong style="color:var(--ink);">O</strong>verload: sobrecarga de volumen refractaria<br>
        <strong style="color:var(--ink);">U</strong>remia sintomatica: encefalopatia, pericarditis, sangrado
      </div>
    </div>
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">Y SI NO LAS CUMPLE?</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Los grandes ensayos comparando inicio PRECOZ frente a inicio segun indicacion no encontraron beneficio en supervivencia con adelantarse, y si mas efectos adversos, mas cateteres y mas dependencia. Una parte importante de los pacientes del grupo conservador <strong style="color:#3f6b52;">nunca llego a necesitar depuracion</strong>.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #3d5a73;border-radius:8px;background:#3d5a7310;color:var(--ink-dim);">
    <strong style="color:#3d5a73;">Lo que si hay que hacer mientras tanto, y rinde mas que cualquier tecnica:</strong> retirar los <strong>NEFROTOXICOS</strong>, ajustar TODOS los farmacos a la funcion renal (empezando por los antibioticos y las heparinas), optimizar la perfusion sin sobrecargar de volumen, descartar la obstruccion, tratar la causa y vigilar el potasio. La mayor parte del beneficio en la lesion renal aguda esta en lo que se deja de hacer.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La lesion renal aguda es un descenso brusco del filtrado glomerular que se detecta por el ascenso de la creatinina o por el descenso de la diuresis. No es una enfermedad sino un <strong>sindrome</strong>, y en el hospital casi siempre es multifactorial: un paciente con una susceptibilidad de base al que se le suman una hipoperfusion, una sepsis y dos o tres farmacos.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: los criterios y el estadio.</strong></p>
<p style="margin:0 0 12px;">Tres criterios, y basta uno. Conviene tener presente que la <strong>creatinina es tardia</strong> y que en el paciente critico la enmascaran la perdida de masa muscular y la dilucion, mientras que la <strong>diuresis</strong> avisa antes y no cuesta nada. El borrador de la guia de 2026 a&#241;ade la cistatina C y un biomarcador de da&#241;o, y propone dejar de dar un estadio unico para informar tres ejes por separado.</p>
${figBlock('Figura 1', 'Criterios, estadios y lo que propone el borrador de 2026', criteriosHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: donde esta el problema.</strong></p>
<p style="margin:0 0 12px;">Prerrenal, renal o posrenal. Antes de razonar nada conviene hacer las dos cosas que se resuelven en minutos y se olvidan a diario: una <strong>ecografia</strong> que descarte obstruccion y una revision de la <strong>lista de farmacos</strong>. Y usar la excrecion fraccional de sodio con la cautela que merece, porque los diureticos la inutilizan.</p>
${figBlock('Figura 2', 'Prerrenal, renal y posrenal, y las trampas del sodio urinario', localizarHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: cuando depurar.</strong></p>
<p style="margin:0 0 12px;">Hay indicaciones que no se discuten y se recuerdan con una regla sencilla. Y hay una pregunta que si se discutio mucho, la de adelantarse en el paciente que todavia no las cumple, a la que los ensayos han respondido que <strong>no mejora la supervivencia</strong>. Mientras tanto, lo que mas rinde es retirar nefrotoxicos y ajustar dosis.</p>
${figBlock('Figura 3', 'Depuracion extrarrenal: cuando no se discute y cuando si', trsHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No esperar a que suba la creatinina para actuar, porque llega tarde. No dejar de medir la <strong>diuresis</strong>, que es el criterio que avisa antes y el que peor se registra. No olvidar la <strong>ecografia</strong>: la obstruccion es lo que mas rapido se resuelve y lo que mas se pasa por alto. No dar por descartada la obstruccion porque el paciente orine, porque puede ser parcial. No interpretar la excrecion fraccional de sodio en un paciente con diureticos. No seguir dando volumen a quien ya no responde, porque la sobrecarga empeora el ri&#241;on. No mantener los <strong>nefrotoxicos</strong> ni dejar sin ajustar los farmacos a la funcion renal. No pautar dopamina a dosis baja ni diureticos para "proteger" el ri&#241;on, porque no funcionan. No iniciar la depuracion por sistema en quien no cumple indicacion. Y no dar de alta sin plan: una lesion renal aguda multiplica el riesgo de enfermedad renal cronica y casi nunca se sigue despues.</p>`;

export const bibliografia = [
  'Kidney Disease: Improving Global Outcomes (KDIGO) Acute Kidney Injury Work Group. KDIGO clinical practice guideline for acute kidney injury. Kidney Int Suppl. 2012;2(1):1-138.',
  'Kidney Disease: Improving Global Outcomes (KDIGO). Clinical practice guideline for the evaluation and management of acute kidney injury and acute kidney disease. Borrador en revision publica; 2026.',
  'Chawla LS, Bellomo R, Bihorac A, et al. Acute kidney disease and renal recovery: consensus report of the Acute Disease Quality Initiative (ADQI) 16 Workgroup. Nat Rev Nephrol. 2017;13(4):241-257.',
  'Perazella MA, Rosner MH. Drug-induced acute kidney injury. Clin J Am Soc Nephrol. 2022;17(8):1220-1233.',
  'STARRT-AKI Investigators. Timing of initiation of renal-replacement therapy in acutely ill patients with acute kidney injury. N Engl J Med. 2020;383(3):240-251.',
  'Gaudry S, Hajage D, Schortgen F, et al. Initiation strategies for renal-replacement therapy in the intensive care unit. N Engl J Med. 2016;375(2):122-133.',
  'Zarbock A, Kellum JA, Schmidt C, et al. Effect of early vs delayed initiation of renal replacement therapy on mortality in critically ill patients with acute kidney injury: the ELAIN randomized clinical trial. JAMA. 2016;315(20):2190-2199.',
  'Ostermann M, Joannidis M, Pani A, et al. Patient selection and timing of continuous renal replacement therapy: report of the 17th Acute Disease Quality Initiative consensus conference. Blood Purif. 2016;42(3):224-237.',
  'Ostermann M, Joannidis M. Acute kidney injury 2016: diagnosis and diagnostic workup. Crit Care. 2016;20(1):299.',
  'Perazella MA, Coca SG. Traditional urinary biomarkers in the assessment of hospital-acquired acute kidney injury. Clin J Am Soc Nephrol. 2012;7(1):167-174.',
  'Weisbord SD, Gallagher M, Jneid H, et al. Outcomes after angiography with sodium bicarbonate and acetylcysteine. N Engl J Med. 2018;378(7):603-614.',
  'Davenport MS, Perazella MA, Yee J, et al. Use of intravenous iodinated contrast media in patients with kidney disease: consensus statements from the American College of Radiology and the National Kidney Foundation. Radiology. 2020;294(3):660-668.',
  'Coca SG, Singanamala S, Parikh CR. Chronic kidney disease after acute kidney injury: a systematic review and meta-analysis. Kidney Int. 2012;81(5):442-448.',
  'Semler MW, Self WH, Wanderer JP, et al. Balanced crystalloids versus saline in critically ill adults. N Engl J Med. 2018;378(9):829-839.',
  'Alfonzo A, Davies A, Fox L, et al. Clinical practice guidelines: treatment of acute hyperkalaemia in adults. UK Kidney Association; 2023.',
  'Nash K, Hafeez A, Hou S. Hospital-acquired renal insufficiency. Am J Kidney Dis. 2002;39(5):930-936.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Lesion prerrenal',
      tituloB: 'Necrosis tubular establecida',
      compensada: 'El ri&#241;on esta estructuralmente sano y responde a la hipoperfusion haciendo exactamente lo que debe: retener sodio y agua. Clinicamente hay signos de la causa (deshidratacion, hemorragia, insuficiencia cardiaca descompensada, cirrosis con ascitis, sepsis) mas oliguria con orina CONCENTRADA y oscura. El sedimento es LIMPIO o con algun cilindro hialino, el sodio urinario es bajo y la urea sube proporcionalmente mas que la creatinina. Lo que define esta fase es que es REVERSIBLE: si la perfusion se restaura pronto, la funcion vuelve en horas o pocos dias sin dejar secuela.',
      descompensada: 'Si la hipoperfusion se mantiene, o si se a&#241;ade un toxico, la celula tubular se lesiona y el cuadro deja de responder al volumen. Aparece entonces una orina ISOSTENURICA, con sodio urinario alto, y un sedimento que delata el da&#241;o: CILINDROS GRANULOSOS PARDOS y celulas tubulares. La diuresis puede ser baja o conservada, porque existe una forma no oliguriga que tiene mejor pronostico pero es igual de grave desde el punto de vista funcional. A partir de aqui el tratamiento ya no es dar mas volumen (que solo produce sobrecarga) sino soporte, retirada de nefrotoxicos y tiempo, porque el epitelio tubular se regenera.'
    },
    laboratorio: [
      { prueba: 'Creatinina y su BASAL', utilidad: 'El criterio diagnostico se apoya en la comparacion con el basal, de modo que rescatarlo de analiticas previas es parte del diagnostico. Es un marcador TARDIO: sube cuando ya se ha perdido buena parte del filtrado, y en el paciente critico la enmascaran la perdida de masa muscular y la dilucion por fluidos.' },
      { prueba: 'Diuresis horaria', utilidad: 'El criterio que avisa ANTES y el peor registrado. Detecta la lesion horas antes que la creatinina y no cuesta nada. En el paciente que se deteriora, cuantificarla de verdad (con sonda si hace falta) cambia el momento del diagnostico.' },
      { prueba: 'Sedimento urinario', utilidad: 'La prueba mas rentable y la mas olvidada. Sedimento limpio orienta a prerrenal u obstructivo; CILINDROS GRANULOSOS PARDOS a necrosis tubular; hematies DISMORFICOS y cilindros hematicos a lesion GLOMERULAR, que cambia todo el estudio; y leucocitos con eosinofilos a nefritis intersticial.' },
      { prueba: 'Iones en orina y excrecion fraccional', utilidad: 'La excrecion fraccional de sodio orienta pero se usa peor de lo que se cree: los DIURETICOS la elevan y la inutilizan, y entonces hay que usar la de UREA. Ademas hay causas renales con sodio urinario bajo (contraste, rabdomiolisis, sindrome hepatorrenal).' },
      { prueba: 'Potasio, gasometria y bicarbonato', utilidad: 'La HIPERPOTASEMIA es la complicacion que puede matar en horas y la primera que hay que buscar. La acidosis metabolica con anion gap elevado acompa&#241;a a la lesion establecida y forma parte de las indicaciones de depuracion.' },
      { prueba: 'Calcio, fosforo y acido urico', utilidad: 'Su patron orienta: hipocalcemia con hiperfosfatemia e hiperuricemia marcadas sugieren rabdomiolisis o sindrome de lisis tumoral, dos causas con tratamiento propio que conviene identificar pronto.' },
      { prueba: 'Creatina cinasa y mioglobina', utilidad: 'Ante sospecha de rabdomiolisis, que es una causa frecuente, tratable y facil de pasar por alto. El dato de urgencias que la delata es una tira reactiva positiva para sangre con un sedimento SIN hematies.' },
      { prueba: 'Cistatina C', utilidad: 'Alternativa a la creatinina cuando esta es poco fiable: masa muscular muy baja o muy alta, desnutricion, hepatopatia o amputaciones. El borrador de la guia de 2026 la incorpora de forma explicita a los criterios diagnosticos.' },
      { prueba: 'Estudio inmunologico', utilidad: 'Anticuerpos antinucleares, anti-ADN, ANCA, anti-membrana basal glomerular, complemento y proteinograma. Se piden cuando el sedimento es GLOMERULAR o cuando no hay causa clara, porque hay glomerulonefritis rapidamente progresivas que se tratan y cuyo retraso cuesta el ri&#241;on.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios y estadio (calculadora disponible)', interpretacion: 'Calcula el estadio clasico y, en paralelo, la notacion de tres ejes del borrador de 2026, y distingue la lesion transitoria de la persistente.', cutoff: 'Basta un criterio: 0.3 mg/dL en 48 h, 1.5 veces el basal, o diuresis baja 6 horas' },
      { metodo: 'Orientacion prerrenal, renal o posrenal (calculadora disponible)', interpretacion: 'Combina contexto, sedimento, ecografia e indices urinarios, avisando de cuando la excrecion fraccional de sodio no es interpretable.', cutoff: 'Con diureticos, la excrecion fraccional de sodio no vale: usar la de UREA' },
      { metodo: 'Indicacion de depuracion extrarrenal (calculadora disponible)', interpretacion: 'Reune las indicaciones que no se discuten y situa la pregunta del momento de inicio en lo que han mostrado los ensayos.', cutoff: 'Sin indicacion establecida, adelantarse por sistema no mejora la supervivencia' },
      { metodo: 'Ecografia renal y de vias urinarias', interpretacion: 'Descarta la OBSTRUCCION, que es la causa que mas rapido se resuelve. Valora ademas el tama&#241;o renal y la ecogenicidad, que orientan sobre si hay enfermedad cronica de base.', cutoff: 'Ri&#241;ones peque&#241;os e hiperecogenicos sugieren enfermedad cronica, no lesion aguda' },
      { metodo: 'Balance hidrico y peso diario', interpretacion: 'El balance positivo acumulado se asocia a peor recuperacion renal, en parte por congestion venosa del propio ri&#241;on. Y la dilucion falsea la creatinina, haciendo parecer mejor una funcion que no lo esta.', cutoff: 'Terminada la reanimacion, el objetivo pasa a ser el balance negativo' },
      { metodo: 'Revision estructurada de la medicacion', interpretacion: 'No es una prueba pero rinde mas que muchas. Busca nefrotoxicos que retirar y farmacos que ajustar, empezando por antibioticos, heparinas y antidiabeticos.', cutoff: 'Es la intervencion mas rentable y la que menos se hace de forma sistematica' }
    ],
    imagen: [
      { modalidad: 'Ecografia renal', hallazgos: 'La primera prueba y la mas importante. Busca DILATACION del sistema colector, que indica obstruccion. Ojo con dos falsos negativos: la obstruccion muy precoz y la que ocurre con fibrosis retroperitoneal pueden no dilatar. Valora tambien el tama&#241;o y la ecogenicidad para distinguir agudo de cronico.' },
      { modalidad: 'Ecografia con doppler y vejiga', hallazgos: 'Estima la resistencia intrarrenal y valora la congestion venosa, que es una causa infravalorada de disfuncion renal en el paciente con balance muy positivo. La vejiga se mide siempre: un globo vesical se resuelve con una sonda.' },
      { modalidad: 'Tomografia sin contraste', hallazgos: 'Cuando la ecografia no aclara la obstruccion o se busca litiasis, masa o coleccion. Sin contraste, para no a&#241;adir un insulto mas a un ri&#241;on ya lesionado, salvo que el beneficio de la informacion sea claramente mayor.' },
      { modalidad: 'Biopsia renal', hallazgos: 'Reservada a los casos en que la causa no se aclara y se sospecha una entidad con tratamiento propio: glomerulonefritis rapidamente progresiva, vasculitis, nefritis intersticial o microangiopatia trombotica. Se plantea sin demora cuando el sedimento es glomerular, porque ahi el tiempo cuesta nefronas.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por <strong>gravedad</strong> en tres estadios, definidos por la creatinina y por la diuresis, y por <strong>localizacion</strong> en prerrenal, renal y posrenal, que es la division que orienta el tratamiento. El borrador de la guia de 2026 a&#241;ade dos ejes mas: la <strong>duracion</strong> (transitoria si dura 48 horas o menos, persistente si dura mas y hasta 7 dias, y <strong>enfermedad renal aguda</strong> entre los 7 dias y los 3 meses) y la presencia de un <strong>biomarcador de da&#241;o</strong>, que permite separar por primera vez el descenso funcional del filtrado del da&#241;o estructural real.`,
    escalas: [
      { nombre: 'Criterios y estadio (calculadora disponible)', componentes: 'Creatinina actual y basal, tiempo transcurrido, diuresis por kilo y hora y su duracion, e inicio o no de depuracion extrarrenal.', formula: 'Diagnostico con un solo criterio. Estadio 1: creatinina 1.5 a 1.9 veces el basal o ascenso de 0.3 mg/dL, o diuresis baja de 6 a 12 horas. Estadio 2: 2 a 2.9 veces, o diuresis baja mas de 12 horas. Estadio 3: 3 veces o mas, o llegar a 4.0 mg/dL, o iniciar depuracion, o diuresis por debajo de 0.3 mL/kg/h mas de 24 horas o anuria mas de 12 horas.', interpretacion: 'Se toma el estadio MAS ALTO entre el que da la creatinina y el que da la diuresis. El borrador de 2026 propone dejar de colapsarlos en un numero e informar los tres ejes por separado, porque un paciente C1 U3 y otro C3 U0 tienen problemas distintos.' },
      { nombre: 'Lesion transitoria frente a persistente', componentes: 'Duracion del ascenso de creatinina o del descenso de diuresis.', formula: 'Transitoria si dura 48 horas o menos. Persistente si dura mas de 48 horas y hasta 7 dias. Mas alla de 7 dias y hasta 3 meses se habla de ENFERMEDAD renal aguda.', interpretacion: 'Es una distincion del borrador de 2026 con valor pronostico: la transitoria suele ser funcional y reversible, y la persistente se asocia a da&#241;o estructural y a mayor riesgo de enfermedad renal cronica posterior.' },
      { nombre: 'Orientacion prerrenal, renal o posrenal (calculadora disponible)', componentes: 'Contexto clinico, sedimento urinario, ecografia, excrecion fraccional de sodio o de urea, y uso de diureticos.', formula: 'Excrecion fraccional de sodio por debajo del 1% orienta a prerrenal y por encima del 2% a necrosis tubular, siempre que el paciente NO tome diureticos. Con diureticos se usa la de urea, con un umbral en torno al 35%.', interpretacion: 'Es una ayuda, no un arbitro. Hay causas renales con sodio urinario bajo, como el contraste, la rabdomiolisis y el sindrome hepatorrenal, y el sedimento y la ecografia aportan mas que cualquier indice.' },
      { nombre: 'Indicacion de depuracion extrarrenal (calculadora disponible)', componentes: 'Acidosis, alteraciones electroliticas, intoxicacion, sobrecarga de volumen y sintomas uremicos.', formula: 'Regla mnemotecnica de cinco indicaciones que no se discuten cuando son graves o refractarias al tratamiento medico.', interpretacion: 'La pregunta discutida no es esa sino cuando empezar en el paciente que aun no cumple ninguna. Los grandes ensayos no encontraron beneficio en supervivencia al adelantarse, y una parte relevante de los pacientes manejados de forma conservadora nunca llego a necesitarla.' },
      { nombre: 'Criterios de resolucion', componentes: 'Creatinina o cistatina C respecto al basal, y filtrado estimado a los 3 meses.', formula: 'Resolucion COMPLETA de la lesion aguda: creatinina por debajo de 1.2 veces el basal en 7 dias. PARCIAL: entre 1.2 y menos de 1.5 veces el basal en ese plazo.', interpretacion: 'Proceden del borrador de 2026 y son utiles porque obligan a mirar el final del episodio y no solo su comienzo. Una lesion que no resuelve del todo es la que mas riesgo tiene de dejar enfermedad renal cronica.' },
      { nombre: 'Riesgo de enfermedad renal cronica posterior', componentes: 'Gravedad del episodio, duracion, numero de episodios, funcion basal y comorbilidad.', formula: 'Valoracion clinica: a mayor estadio, mayor duracion y mas episodios, mayor riesgo.', interpretacion: 'Un episodio de lesion renal aguda multiplica el riesgo de enfermedad renal cronica y de mortalidad a largo plazo, y sin embargo el seguimiento tras el alta casi nunca se organiza. Es una de las omisiones mas repetidas de todo el tema.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Criterios, estadio y reconocimiento precoz',
      color: '#3a6b7a',
      definicion: 'Descenso brusco del filtrado glomerular, definido por el ascenso de la creatinina o por el descenso de la diuresis dentro de unos umbrales y plazos establecidos.',
      fisiopatologia: 'La creatinina es un marcador indirecto y con dos limitaciones que explican casi todos los problemas practicos. La primera es cinetica: su concentracion tarda en equilibrarse, de modo que cuando sube ya se ha perdido buena parte del filtrado y su valor refleja lo que ocurria horas antes. La segunda es que depende de la produccion muscular y del volumen de distribucion, de modo que en el paciente critico, que pierde masa muscular y recibe litros de fluidos, la creatinina se mantiene falsamente baja y hace parecer mejor una funcion que no lo esta. La DIURESIS no tiene ese retraso: cae cuando cae la perfusion, y por eso es el criterio que avisa antes.',
      epidemiologia: 'Afecta a una proporcion muy alta de los pacientes ingresados en unidades de criticos y a una parte relevante de los ingresados en planta. En la mayoria de los casos es multifactorial y en buena parte prevenible, porque los factores que se suman (hipoperfusion, sepsis, nefrotoxicos y contraste) son en gran medida modificables.',
      factores_riesgo: ['Enfermedad renal cronica previa, que es el factor mas importante', 'Edad avanzada', 'Diabetes mellitus', 'Insuficiencia cardiaca y cirrosis', 'Sepsis', 'Cirugia mayor, sobre todo cardiaca', 'Hipovolemia y uso de diureticos', 'Farmacos nefrotoxicos y contraste yodado', 'Inhibidores de la enzima convertidora y antagonistas del receptor de angiotensina', 'Antiinflamatorios no esteroideos', 'Hipoalbuminemia', 'Balance hidrico muy positivo'],
      clinica: 'Con frecuencia SILENTE: se detecta en una analitica o al revisar la diuresis. Cuando da sintomas, ya suele haber complicaciones: sobrecarga de volumen con disnea, nauseas y somnolencia por uremia, o las manifestaciones de la hiperpotasemia. Hay que buscar de forma activa signos de la causa: hipovolemia, insuficiencia cardiaca, globo vesical y prostatismo.',
      criterios_dx: 'Basta UNO: ascenso de creatinina de 0.3 mg/dL o mas en 48 horas; ascenso a 1.5 veces el basal o mas en los 7 dias previos; o diuresis por debajo de 0.5 mL/kg/h durante 6 horas o mas. Ver la Figura 1 de Definicion.',
      laboratorio: 'CREATININA con rescate del BASAL de analiticas previas, que es parte del diagnostico. DIURESIS HORARIA. Potasio, gasometria, bicarbonato, calcio, fosforo, acido urico, hemograma y sedimento urinario. Cistatina C cuando la creatinina no es fiable.',
      imagen: 'ECOGRAFIA RENAL Y VESICAL, que es la primera prueba y descarta la obstruccion. Valora ademas el tama&#241;o y la ecogenicidad para distinguir lo agudo de lo cronico.',
      complementarios: 'Registro real de la diuresis, con sonda si hace falta. Peso diario y balance acumulado. Y una revision estructurada de la medicacion en el mismo momento del diagnostico.',
      dx_diferencial: 'Enfermedad renal CRONICA no conocida, que se distingue por el basal previo, la anemia, las alteraciones del metabolismo mineral y unos ri&#241;ones peque&#241;os e hiperecogenicos. Y las situaciones que elevan la creatinina sin bajar el filtrado, como algunos farmacos que bloquean su secrecion tubular.',
      tx_medico: 'Tratar la causa, restaurar la perfusion sin sobrecargar, RETIRAR nefrotoxicos, ajustar todos los farmacos y vigilar el potasio. No hay ningun tratamiento que acelere la recuperacion del epitelio tubular: lo que hay es dejar de da&#241;arlo.',
      tx_farmacologico: 'Ninguno especifico. Conviene saber lo que NO funciona: la dopamina a dosis baja no protege el ri&#241;on, y los diureticos no previenen ni acortan la lesion, aunque son utiles para manejar la sobrecarga en quien responde a ellos.',
      tx_intervencionista: 'Sondaje vesical si hay globo. Desobstruccion urgente si hay obstruccion. Depuracion extrarrenal si aparece indicacion.',
      criterios_uci: 'Hiperpotasemia grave, acidosis refractaria, sobrecarga con compromiso respiratorio, uremia sintomatica y necesidad de depuracion en un paciente inestable.',
      criterios_tips: 'No aplica de forma general; en el sindrome hepatorrenal el manejo tiene su propio marco, detallado en el tema de cirrosis.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Creatinina y diuresis diarias, balance, potasio y revision de farmacos. Y una pregunta cada dia: sigue habiendo un insulto activo que se pueda retirar.',
      seguimiento_ambulatorio: 'Control de la funcion renal tras el alta, que es lo que mas se omite. Un episodio de lesion renal aguda multiplica el riesgo de enfermedad renal cronica posterior.',
      pronostico: 'Depende del estadio, de la duracion y de la causa. La mayoria de las formas prerrenales se recuperan por completo; las persistentes y las que precisan depuracion dejan con frecuencia perdida de funcion.',
      algoritmo: ['Rescatar la creatinina BASAL de analiticas previas', 'Comprobar si se cumple algun criterio diagnostico', 'Medir de verdad la DIURESIS, con sonda si hace falta', 'Calcular el estadio con creatinina y con diuresis, y quedarse con el mayor', 'Hacer ECOGRAFIA para descartar obstruccion', 'Mirar el SEDIMENTO urinario', 'Revisar y retirar los nefrotoxicos', 'Ajustar todos los farmacos a la funcion renal', 'Comprobar el potasio y la gasometria', 'Repetir a diario y vigilar si la lesion se hace persistente']
    },
    {
      nombre: 'Prerrenal, renal y posrenal',
      color: '#3f6b52',
      definicion: 'Clasificacion por localizacion del mecanismo, que es la que orienta el tratamiento: perfusion insuficiente, da&#241;o del parenquima u obstruccion de la via urinaria.',
      fisiopatologia: 'En la forma PRERRENAL el ri&#241;on esta sano y hace lo que debe: ante una perfusion baja, activa el eje renina-angiotensina-aldosterona y la hormona antidiuretica, retiene sodio y agua y concentra la orina. Eso explica todo su perfil de laboratorio (sodio urinario bajo, orina concentrada, urea que sube mas que la creatinina) y explica tambien por que es reversible. Si la hipoperfusion se mantiene o se a&#241;ade un toxico, la celula tubular pierde su polaridad y su capacidad de reabsorber, se descama y forma cilindros: es la NECROSIS TUBULAR, donde el sodio urinario sube porque el tubulo ya no puede retenerlo. Y en la forma POSRENAL, la presion retrograda transmitida al glomerulo anula el gradiente de filtracion.',
      epidemiologia: 'En el hospital, la mayoria de los casos son prerrenales o de necrosis tubular, y con mucha frecuencia una mezcla de ambas cosas con nefrotoxicos a&#241;adidos. La obstruccion es menos frecuente pero desproporcionadamente importante, porque es la que mas rapido se resuelve.',
      factores_riesgo: ['Hipovolemia de cualquier origen', 'Insuficiencia cardiaca y sindrome cardiorrenal', 'Cirrosis con ascitis', 'Sepsis', 'Inhibidores del sistema renina-angiotensina y antiinflamatorios, que quitan la autorregulacion', 'Hipertrofia prostatica y neoplasia pelvica', 'Litiasis y fibrosis retroperitoneal', 'Vejiga neurogena y sondas obstruidas', 'Contraste yodado y otros nefrotoxicos', 'Rabdomiolisis y sindrome de lisis tumoral'],
      clinica: 'PRERRENAL: signos de la causa y orina concentrada, con respuesta al volumen. RENAL: no responde al volumen, con orina isostenurica. POSRENAL: globo vesical, dolor lumbar, anuria brusca o alternancia de anuria y poliuria. Y una advertencia: la obstruccion PARCIAL puede cursar con diuresis conservada, de modo que orinar no la descarta.',
      criterios_dx: 'La combinacion de contexto, sedimento, ecografia e indices urinarios. Ver la Figura 2 de Definicion.',
      laboratorio: 'SEDIMENTO URINARIO, que es la prueba mas rentable: limpio en prerrenal y obstructivo, con cilindros granulosos pardos en la necrosis tubular, con hematies dismorficos y cilindros hematicos en la lesion glomerular, y con leucocitos en la nefritis intersticial. Iones en orina y excrecion fraccional de sodio o de UREA si hay diureticos.',
      imagen: 'ECOGRAFIA, obligada y precoz, buscando dilatacion. Recordar dos falsos negativos: la obstruccion muy precoz y la asociada a fibrosis retroperitoneal pueden no dilatar. Medir siempre la vejiga.',
      complementarios: 'Sondaje vesical si hay globo, que es diagnostico y terapeutico a la vez. Estudio inmunologico si el sedimento es glomerular, sin demora.',
      dx_diferencial: 'Entre las tres localizaciones, y dentro de la renal entre necrosis tubular, nefritis intersticial, glomerulonefritis, microangiopatia trombotica y ateroembolia de colesterol, que aparece tras un procedimiento vascular y cursa con livedo y eosinofilia.',
      tx_medico: 'PRERRENAL: restaurar la perfusion, corregir la causa, retirar los farmacos que quitan la autorregulacion. RENAL: soporte, retirada de toxicos y tiempo. POSRENAL: DESOBSTRUIR, que es lo mas urgente y lo mas agradecido de todo el tema.',
      tx_farmacologico: 'El de la causa. En la nefritis intersticial por farmacos, retirar el responsable y valorar corticoides. En la glomerulonefritis rapidamente progresiva, inmunosupresion sin demora.',
      tx_intervencionista: 'Sondaje, cateter suprapubico, nefrostomia percutanea o cateter doble jota segun el nivel de la obstruccion. Biopsia renal cuando la causa no se aclara y hay una entidad tratable en juego.',
      criterios_uci: 'Los del cuadro general, mas las complicaciones de la obstruccion (sepsis de origen urinario con pionefrosis, que es una urgencia de drenaje).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Tras desobstruir, vigilar la POLIURIA POSOBSTRUCTIVA, que puede ser masiva y producir deshidratacion y alteraciones electroliticas si no se repone. Y reevaluar la localizacion si el paciente no evoluciona como se esperaba.',
      seguimiento_ambulatorio: 'Tratamiento definitivo de la causa obstructiva. Control de la funcion renal y de la proteinuria en las formas parenquimatosas.',
      pronostico: 'Excelente en la prerrenal corregida pronto y en la obstructiva desobstruida a tiempo. La recuperacion tras una obstruccion prolongada es peor cuanto mas dure, lo que convierte el retraso en el factor decisivo.',
      algoritmo: ['Hacer ECOGRAFIA y medir la vejiga antes de razonar nada', 'Sondar si hay globo vesical', 'Revisar la lista de FARMACOS', 'Mirar el SEDIMENTO urinario', 'Valorar la respuesta al volumen en la sospecha prerrenal', 'Calcular la excrecion fraccional de sodio solo si NO toma diureticos', 'Con diureticos, usar la excrecion fraccional de UREA', 'Si el sedimento es glomerular, pedir inmunologia sin demora', 'Desobstruir cuanto antes si hay obstruccion', 'Vigilar la poliuria posobstructiva tras desobstruir']
    },
    {
      nombre: 'Necrosis tubular aguda en el paciente critico',
      color: '#8c3a34',
      definicion: 'Lesion del epitelio tubular por isquemia, sepsis o toxicos, que es la forma parenquimatosa mas frecuente en el hospital y la que define la lesion renal del paciente critico.',
      fisiopatologia: 'La medula renal externa vive en una hipoxia relativa fisiologica, porque el segmento grueso ascendente consume mucho oxigeno para reabsorber sodio y recibe un flujo escaso. Esa vulnerabilidad basal explica por que es el primer territorio que sufre. En la sepsis, ademas, el mecanismo no es solo la isquemia: hay redistribucion del flujo intrarrenal, inflamacion, disfuncion microvascular y una respuesta adaptativa de la propia celula tubular que reduce su metabolismo, algo parecido a lo que ocurre en otros organos del paciente critico. De ahi dos consecuencias practicas: que el flujo global puede ser normal y el ri&#241;on estar sufriendo, y que la celula tubular se REGENERA, de modo que la funcion puede volver si se retira el insulto.',
      epidemiologia: 'Es la causa mas frecuente de lesion renal aguda intrahospitalaria. En el paciente critico casi siempre es multifactorial: sepsis mas hipoperfusion mas nefrotoxicos, y con mucha frecuencia tambien contraste y balance muy positivo.',
      factores_riesgo: ['Sepsis y choque septico', 'Hipoperfusion prolongada', 'Cirugia mayor, sobre todo cardiaca con circulacion extracorporea', 'Nefrotoxicos y contraste yodado', 'Rabdomiolisis y hemolisis', 'Enfermedad renal cronica previa', 'Balance hidrico muy positivo y congestion venosa', 'Ventilacion mecanica con presiones altas', 'Hipertension intraabdominal', 'Edad avanzada y comorbilidad'],
      clinica: 'Oliguria o diuresis conservada, sin respuesta al volumen. La forma NO OLIGURICA tiene mejor pronostico pero es igual de grave desde el punto de vista funcional y se pasa por alto si solo se mira la diuresis. Aparecen despues las complicaciones: sobrecarga, hiperpotasemia, acidosis y uremia.',
      criterios_dx: 'Contexto compatible, ausencia de obstruccion, sedimento con CILINDROS GRANULOSOS PARDOS y celulas tubulares, y falta de respuesta al volumen.',
      laboratorio: 'Sedimento urinario, iones en orina, potasio, gasometria, calcio, fosforo, creatina cinasa si procede y hemograma. Vigilancia estrecha del potasio y del equilibrio acido-base.',
      imagen: 'Ecografia para descartar obstruccion y valorar la congestion. En el paciente con balance muy positivo, valorar la congestion venosa, que es una causa infravalorada de disfuncion renal.',
      complementarios: 'Diuresis horaria, balance acumulado y peso. Y una revision diaria de si persiste algun insulto activo, que es la pregunta que mas cambia la evolucion.',
      dx_diferencial: 'Prerrenal prolongada, nefritis intersticial aguda por farmacos, microangiopatia trombotica, ateroembolia de colesterol, sindrome hepatorrenal y sindrome cardiorrenal.',
      tx_medico: 'Optimizar la perfusion SIN sobrecargar, y una vez restaurada, pasar a balance negativo. Retirar nefrotoxicos. Ajustar todos los farmacos. Controlar el potasio, la acidosis y la glucemia. Nutricion adecuada sin restriccion proteica excesiva.',
      tx_farmacologico: 'Ninguno acelera la recuperacion. Los DIURETICOS no previenen ni acortan la lesion y no deben usarse con esa intencion, aunque son utiles para manejar la sobrecarga en quien responde. La dopamina a dosis baja NO protege el ri&#241;on y se ha abandonado.',
      tx_intervencionista: 'Depuracion extrarrenal si aparece indicacion. Descompresion si hay hipertension intraabdominal significativa.',
      criterios_uci: 'Los generales del paciente critico, mas las complicaciones metabolicas graves.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Vigilar la fase de RECUPERACION, que puede cursar con poliuria y perdida de electrolitos, y ajustar de nuevo las dosis de los farmacos a medida que el filtrado mejora, porque olvidarlo produce infradosificacion de antibioticos.',
      seguimiento_ambulatorio: 'Control de la funcion renal y de la proteinuria a los 3 meses. Muchos pacientes no recuperan por completo su funcion basal aunque salgan del hospital con una creatinina aceptable.',
      pronostico: 'La mortalidad de la lesion renal aguda del paciente critico es alta, aunque en buena parte por la enfermedad de base. Entre los supervivientes, el riesgo posterior de enfermedad renal cronica es elevado y muy poco vigilado.',
      algoritmo: ['Confirmar que no hay obstruccion', 'Buscar cilindros granulosos pardos en el sedimento', 'Comprobar que no responde al volumen', 'Optimizar la perfusion sin sobrecargar', 'Retirar TODOS los nefrotoxicos posibles', 'Ajustar la dosis de cada farmaco a la funcion renal', 'No usar diureticos ni dopamina para proteger el ri&#241;on', 'Vigilar potasio, acidosis y sobrecarga', 'Pasar a balance negativo cuando la perfusion lo permita', 'Reajustar las dosis al alza cuando el filtrado se recupere']
    },
    {
      nombre: 'Nefrotoxicidad por farmacos y contraste',
      color: '#8a6a1f',
      definicion: 'Lesion renal aguda causada o agravada por medicamentos o por contraste yodado, que es la causa mas prevenible de todo el tema.',
      fisiopatologia: 'Los mecanismos son varios y conviene distinguirlos porque orientan la prevencion. Hay toxicidad TUBULAR directa (aminoglucosidos, anfotericina, cisplatino, tenofovir). Hay alteracion HEMODINAMICA intraglomerular: los antiinflamatorios bloquean las prostaglandinas que dilatan la arteriola aferente, y los inhibidores del sistema renina-angiotensina dilatan la eferente; cada uno por separado se tolera, pero juntos y sobre un ri&#241;on hipoperfundido anulan la autorregulacion, y de ahi la triada peligrosa que se forma cuando se a&#241;ade un diuretico. Hay NEFRITIS INTERSTICIAL inmunoalergica, clasica de betalactamicos, inhibidores de la bomba de protones y antiinflamatorios. Y hay obstruccion INTRATUBULAR por cristales, como con el aciclovir o el metotrexato.',
      epidemiologia: 'Los farmacos participan en una proporcion muy alta de las lesiones renales agudas intrahospitalarias, y en la mayoria de los casos hay mas de uno implicado. Sobre el contraste, el conocimiento ha cambiado: los estudios con grupo de comparacion han mostrado que su riesgo se habia sobreestimado durante a&#241;os, y hoy la preocupacion es no negar una prueba necesaria por un miedo desproporcionado.',
      factores_riesgo: ['Enfermedad renal cronica previa', 'Hipovolemia, que multiplica el riesgo de casi todos', 'Combinacion de antiinflamatorio, inhibidor del sistema renina-angiotensina y diuretico', 'Edad avanzada', 'Dosis altas y tratamientos prolongados', 'Varios nefrotoxicos a la vez', 'Insuficiencia cardiaca y cirrosis', 'Diabetes mellitus', 'Sepsis concomitante', 'Ausencia de ajuste de dosis a la funcion renal'],
      clinica: 'Casi siempre asintomatica: se detecta por el ascenso de la creatinina. La NEFRITIS INTERSTICIAL puede dar fiebre, exantema y eosinofilia, aunque esa triada clasica esta completa en una minoria y su ausencia no la descarta. La ateroembolia de colesterol, tras un procedimiento vascular, cursa con livedo reticular, dedos azules y eosinofilia.',
      criterios_dx: 'Relacion temporal con el farmaco, ausencia de otra causa y mejoria tras la retirada. El sedimento con leucocitos y cilindros leucocitarios apoya la nefritis intersticial.',
      laboratorio: 'Sedimento urinario, eosinofilos en sangre, iones en orina y niveles del farmaco cuando existan. En la sospecha de cristales, examen del sedimento buscandolos.',
      imagen: 'Ecografia para descartar obstruccion. En la nefritis intersticial, los ri&#241;ones pueden verse aumentados de tama&#241;o.',
      complementarios: 'REVISION ESTRUCTURADA de toda la medicacion, incluidos los productos de herbolario y los antiinflamatorios que el paciente toma por su cuenta y no considera medicamentos. Biopsia si la nefritis intersticial no mejora tras retirar el sospechoso.',
      dx_diferencial: 'Necrosis tubular de otra causa, prerrenal, obstruccion y las causas inmunologicas. En el paciente hospitalizado casi siempre coexisten varias.',
      tx_medico: 'RETIRAR el farmaco responsable, que es el tratamiento. Corregir la hipovolemia, que es el factor que mas amplifica la toxicidad de casi todos. Y ajustar la dosis de lo que no se pueda retirar.',
      tx_farmacologico: 'En la nefritis intersticial que no mejora tras la retirada, valorar corticoides. Sobre la prevencion de la nefropatia por contraste, lo unico con respaldo es la HIDRATACION con cristaloide en el paciente de riesgo: la N-acetilcisteina y el bicarbonato no demostraron beneficio frente a suero salino en un ensayo amplio.',
      tx_intervencionista: 'No aplica, salvo la depuracion si el toxico es dializable.',
      criterios_uci: 'Los generales, segun la gravedad de las complicaciones metabolicas.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Anotar el farmaco como ALERGIA o como evento adverso en la historia, para que no se vuelva a pautar. Es un paso administrativo que se omite y que garantiza la repeticion del problema.',
      seguimiento_ambulatorio: 'Control de la funcion renal tras la retirada y revision de la medicacion cronica, sobre todo la combinacion de antiinflamatorios, inhibidores del sistema renina-angiotensina y diureticos.',
      pronostico: 'Bueno si se retira pronto el responsable. La nefritis intersticial de larga evolucion puede dejar fibrosis y perdida definitiva de funcion.',
      algoritmo: ['Revisar TODA la medicacion, incluida la que el paciente no considera medicamento', 'Buscar la combinacion de antiinflamatorio, inhibidor del eje y diuretico', 'Retirar lo que se pueda retirar', 'Ajustar la dosis de lo que no', 'Corregir la hipovolemia, que amplifica toda toxicidad', 'Pensar en nefritis intersticial y mirar el sedimento', 'No negar una prueba con contraste necesaria por miedo desproporcionado', 'Hidratar con cristaloide al paciente de riesgo que va a recibir contraste', 'No usar N-acetilcisteina ni bicarbonato como profilaxis', 'Anotar el farmaco responsable en la historia']
    },
    {
      nombre: 'Complicaciones agudas y depuracion extrarrenal',
      color: '#8c3a5c',
      definicion: 'Conjunto de alteraciones metabolicas y de volumen derivadas de la perdida de funcion renal, y decision sobre cuando sustituirla.',
      fisiopatologia: 'Al caer el filtrado se acumulan agua, potasio, hidrogeniones y productos nitrogenados. La HIPERPOTASEMIA es la que amenaza la vida en horas, porque despolariza la membrana celular y altera la conduccion cardiaca de forma progresiva hasta la parada. La acidosis metabolica agrava la hiperpotasemia al desplazar potasio fuera de la celula, de modo que ambas se retroalimentan. La sobrecarga de volumen produce edema pulmonar y, menos reconocido, congestion venosa del propio ri&#241;on, que empeora su funcion y cierra otro circulo. Y la uremia, cuando es marcada, produce encefalopatia, pericarditis y disfuncion plaquetaria con sangrado.',
      epidemiologia: 'Una parte de los pacientes con lesion renal aguda grave necesita depuracion extrarrenal. La pregunta del momento de inicio se ha estudiado en varios ensayos aleatorizados amplios, cuyo resultado global es que adelantarse por sistema no mejora la supervivencia.',
      factores_riesgo: ['Estadio 3 de lesion renal aguda', 'Oliguria o anuria mantenidas', 'Acidosis metabolica grave', 'Hiperpotasemia recurrente', 'Balance hidrico muy positivo', 'Sepsis concomitante', 'Sindrome de lisis tumoral y rabdomiolisis', 'Insuficiencia cardiaca con congestion refractaria', 'Intoxicacion por toxico dializable', 'Aporte obligado de volumen, como la nutricion parenteral'],
      clinica: 'HIPERPOTASEMIA: con frecuencia asintomatica hasta que aparecen las alteraciones del electrocardiograma, que evolucionan desde ondas T picudas hasta ensanchamiento del QRS y ritmo sinusoidal. SOBRECARGA: disnea, crepitantes, edemas y aumento de peso. UREMIA: nauseas, somnolencia, asterixis, roce pericardico y sangrado.',
      criterios_dx: 'Las indicaciones de depuracion se recuerdan con una regla de cinco letras y se detallan en la Figura 3 de Definicion.',
      laboratorio: 'POTASIO con electrocardiograma inmediato si esta elevado. Gasometria, bicarbonato, urea, calcio, fosforo, magnesio y hemograma. Y control frecuente durante el tratamiento.',
      imagen: 'Radiografia y ecografia pulmonar para valorar la sobrecarga. Ecocardiograma si se sospecha derrame pericardico.',
      complementarios: 'ELECTROCARDIOGRAMA ante cualquier hiperpotasemia relevante, que es la prueba que decide la urgencia del tratamiento. Balance y peso diarios.',
      dx_diferencial: 'De la hiperpotasemia: seudohiperpotasemia por hemolisis de la muestra o por trombocitosis, que se descarta repitiendo la extraccion y evita tratamientos innecesarios.',
      tx_medico: 'HIPERPOTASEMIA: calcio para estabilizar la membrana si hay alteraciones electrocardiograficas, insulina con glucosa y agonistas beta para introducir potasio en la celula, y despues quelantes o depuracion para ELIMINARLO, porque lo anterior solo lo redistribuye. SOBRECARGA: restriccion, diureticos si responde y depuracion si no.',
      tx_farmacologico: 'El de cada complicacion. Bicarbonato en la acidosis grave. Y ajuste de todos los farmacos, porque la sobredosificacion en el paciente con lesion renal es una fuente constante de yatrogenia.',
      tx_intervencionista: 'DEPURACION EXTRARRENAL. En el paciente inestable se prefieren las tecnicas continuas por su mejor tolerancia hemodinamica, aunque no han demostrado ventaja en supervivencia frente a la intermitente.',
      criterios_uci: 'Hiperpotasemia grave con alteraciones electrocardiograficas, acidosis refractaria, sobrecarga con insuficiencia respiratoria, uremia sintomatica y necesidad de depuracion continua.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Vigilar el sindrome de desequilibrio en las primeras sesiones, la hipotension intradialisis y las complicaciones del cateter. Y revisar cada dia si la depuracion sigue haciendo falta, porque tambien hay que saber retirarla.',
      seguimiento_ambulatorio: 'Los que quedan dependientes de dialisis pasan a un programa cronico. Los que se recuperan necesitan control de funcion renal y de proteinuria.',
      pronostico: 'La necesidad de depuracion marca peor pronostico, aunque en parte refleja la gravedad global del paciente. Una parte relevante de los supervivientes recupera funcion suficiente para salir de dialisis.',
      algoritmo: ['Comprobar el POTASIO y hacer electrocardiograma si esta alto', 'Dar calcio si hay alteraciones electrocardiograficas', 'Redistribuir con insulina y glucosa, y agonistas beta', 'Eliminar el potasio de verdad: quelante o depuracion', 'Valorar la acidosis y la sobrecarga', 'Buscar sintomas uremicos: asterixis, roce, sangrado', 'Repasar las cinco indicaciones que no se discuten', 'Si no cumple ninguna, NO adelantarse por sistema', 'Elegir tecnica continua si el paciente esta inestable', 'Reevaluar a diario si la depuracion sigue siendo necesaria']
    },
    {
      nombre: 'Despues del episodio: enfermedad renal aguda y seguimiento',
      color: '#6b4a8c',
      definicion: 'Periodo que sigue a la lesion renal aguda, en el que la funcion puede recuperarse por completo, quedar parcialmente alterada o evolucionar hacia enfermedad renal cronica.',
      fisiopatologia: 'La reparacion del epitelio tubular no siempre es perfecta. Cuando el da&#241;o es intenso o repetido, la regeneracion se acompa&#241;a de transicion hacia un fenotipo profibrotico, con infiltrado inflamatorio persistente, rarefaccion capilar e hipoxia cronica del intersticio. Las nefronas perdidas no se reponen y las restantes hiperfiltran, lo que a medio plazo produce esclerosis. Ese es el sustrato de que un episodio agudo, aunque parezca resuelto, deje al paciente en una trayectoria distinta. Y explica tambien por que la lesion RECURRENTE es especialmente da&#241;ina.',
      epidemiologia: 'Un episodio de lesion renal aguda multiplica el riesgo posterior de enfermedad renal cronica, de enfermedad cardiovascular y de mortalidad, y el riesgo aumenta con la gravedad y con el numero de episodios. Pese a ello, el seguimiento tras el alta es la excepcion y no la norma.',
      factores_riesgo: ['Estadio elevado del episodio', 'Duracion prolongada de la lesion', 'Episodios repetidos', 'Necesidad de depuracion extrarrenal', 'Enfermedad renal cronica previa', 'Edad avanzada', 'Diabetes e hipertension', 'Insuficiencia cardiaca', 'Proteinuria residual', 'Ausencia de seguimiento tras el alta'],
      clinica: 'Habitualmente silente. El paciente sale del hospital con una creatinina que parece aceptable y nadie vuelve a mirarla. Los sintomas, cuando aparecen, ya corresponden a una enfermedad renal cronica avanzada.',
      criterios_dx: 'Se habla de ENFERMEDAD RENAL AGUDA en el periodo que va desde los 7 dias hasta los 3 meses tras el episodio. Los criterios de resolucion completa y parcial se detallan en la calculadora del tema.',
      laboratorio: 'Creatinina y filtrado estimado, cociente albumina-creatinina en orina, iones y hemograma. La PROTEINURIA residual es el mejor marcador de que ha quedado da&#241;o y el que mas se olvida pedir.',
      imagen: 'Ecografia de control si hubo obstruccion o si se sospecha enfermedad estructural. No es necesaria de rutina.',
      complementarios: 'Una consulta de revision a los 3 meses, con analitica y con revision de la medicacion. Es una intervencion sencilla, barata y practicamente inexistente en la practica.',
      dx_diferencial: 'Enfermedad renal cronica preexistente no diagnosticada, que se distingue por los valores previos si existen, por la anemia y por las alteraciones del metabolismo mineral.',
      tx_medico: 'Control de la tension arterial, de la diabetes y del peso. Revision de la medicacion cronica para evitar la reexposicion a nefrotoxicos. Y educacion del paciente sobre las situaciones de riesgo, como los dias de enfermedad aguda con vomitos o diarrea, en los que conviene suspender temporalmente ciertos farmacos.',
      tx_farmacologico: 'Reintroducir con criterio los inhibidores del sistema renina-angiotensina cuando esten indicados por otra razon, que es una decision que se pospone indefinidamente por miedo y que tiene coste. Valorar los inhibidores del cotransportador de sodio y glucosa segun la indicacion.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Los pacientes que no recuperan funcion entran en la via de la enfermedad renal cronica avanzada, con su propia valoracion.',
      seguimiento_hospitalario: 'Antes del alta: documentar el episodio en el informe con su estadio y su causa, indicar que farmacos se retiraron y por que, y dejar una CITA de revision. Sin eso, la informacion se pierde.',
      seguimiento_ambulatorio: 'Analitica con creatinina y COCIENTE ALBUMINA-CREATININA a los 3 meses. Si no ha recuperado, seguimiento como enfermedad renal cronica. Y evitar la reexposicion a nefrotoxicos.',
      pronostico: 'Mejor cuanto mas leve, mas corto y mas unico haya sido el episodio. La ausencia de seguimiento no cambia el pronostico biologico pero si la posibilidad de intervenir sobre el.',
      algoritmo: ['Documentar en el informe el estadio y la causa del episodio', 'Anotar los farmacos retirados y el motivo', 'Comprobar la funcion al alta y no asumir que se ha recuperado', 'Valorar la resolucion completa o parcial a los 7 dias', 'Dejar una CITA de revision a los 3 meses', 'Pedir creatinina y cociente albumina-creatinina en esa revision', 'Revisar la medicacion cronica para evitar la reexposicion', 'Reintroducir con criterio los farmacos indicados por otra razon', 'Educar sobre los dias de enfermedad aguda', 'Si no ha recuperado, seguir como enfermedad renal cronica']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Casi todo lo que funciona en la lesion renal aguda consiste en dejar de hacer da&#241;o: retirar nefrotoxicos, ajustar dosis, no sobrecargar de volumen y desobstruir. No hay ningun farmaco que acelere la recuperacion del ri&#241;on.',
    parametros: ['Rescatar la creatinina BASAL para poder aplicar los criterios', 'Medir de verdad la DIURESIS, que avisa antes que la creatinina', 'Hacer ECOGRAFIA y medir la vejiga en las primeras horas', 'Mirar el SEDIMENTO urinario, que es la prueba mas rentable', 'No interpretar la excrecion fraccional de sodio si hay diureticos', 'Revisar y retirar los nefrotoxicos cada dia', 'Ajustar TODOS los farmacos a la funcion renal', 'No usar dopamina ni diureticos para proteger el ri&#241;on', 'Vigilar el POTASIO y hacer electrocardiograma si esta alto', 'Pasar a balance negativo cuando la perfusion lo permita', 'No adelantar la depuracion en quien no cumple indicacion', 'Dejar CITA de revision a los 3 meses antes del alta'],
    criterios_uci_general: 'Hiperpotasemia grave o con alteraciones electrocardiograficas, acidosis metabolica grave y refractaria, sobrecarga de volumen con compromiso respiratorio, uremia sintomatica con encefalopatia o pericarditis, intoxicacion por un toxico dializable, y necesidad de depuracion extrarrenal en un paciente hemodinamicamente inestable, en el que se prefieren las tecnicas continuas por su mejor tolerancia.',
    criterios_tips_general: 'No aplica a este tema de forma general. En el sindrome hepatorrenal, el manejo tiene su propio marco y se detalla en el tema de cirrosis hepatica.',
    criterios_trasplante_general: 'No aplica en la fase aguda. Los pacientes que no recuperan funcion pasan a la via de la enfermedad renal cronica avanzada, con su propia valoracion de trasplante.',
    prevencion: 'Primaria: identificar al paciente susceptible (enfermedad renal cronica, edad avanzada, diabetes, insuficiencia cardiaca, cirrosis) y protegerlo de forma activa, evitando la hipovolemia, la combinacion de antiinflamatorio con inhibidor del sistema renina-angiotensina y diuretico, y los nefrotoxicos evitables; hidratar con cristaloide antes del contraste en el paciente de riesgo, sabiendo que la N-acetilcisteina y el bicarbonato no demostraron beneficio; y no negar una prueba con contraste necesaria por un miedo desproporcionado. Secundaria: deteccion precoz vigilando la DIURESIS y no solo la creatinina, y revision estructurada de la medicacion en cuanto se detecta el ascenso. Terciaria: documentar el episodio en el informe de alta, dejar una cita de revision a los 3 meses con creatinina y cociente albumina-creatinina, y evitar la reexposicion, porque un episodio multiplica el riesgo de enfermedad renal cronica posterior y el seguimiento sigue siendo la excepcion.'
  }
};

export const compCites = {
  'Criterios, estadio y reconocimiento precoz': [1, 2, 9],
  'Prerrenal, renal y posrenal': [9, 10],
  'Necrosis tubular aguda en el paciente critico': [1, 14, 16],
  'Nefrotoxicidad por farmacos y contraste': [4, 11, 12],
  'Complicaciones agudas y depuracion extrarrenal': [5, 6, 7, 8, 15],
  'Despues del episodio: enfermedad renal aguda y seguimiento': [2, 3, 13]
};
export const estigmasTitulo = 'Datos que cambian la conducta';
export const estigmas = [
  { s: 'Creatinina que aun no ha subido', p: 'Llega tarde', photo: null, desc: 'Es un marcador tardio: cuando asciende ya se ha perdido buena parte del filtrado. En el paciente critico, ademas, la perdida de masa muscular y la dilucion por fluidos la mantienen falsamente baja.' },
  { s: 'Diuresis no cuantificada', p: 'El criterio que se pierde', photo: null, desc: 'La diuresis cae antes que sube la creatinina y es gratis, pero es el dato peor registrado del hospital. Cuantificarla de verdad, con sonda si hace falta, adelanta el diagnostico horas.' },
  { s: 'Sedimento limpio', p: 'Prerrenal u obstructivo', photo: null, desc: 'El sedimento es la prueba mas rentable y la mas olvidada de todo el tema. Un sedimento limpio en un paciente con creatinina en ascenso orienta a hipoperfusion o a obstruccion, no a da&#241;o del parenquima.' },
  { s: 'Cilindros granulosos pardos', p: 'Necrosis tubular', photo: null, desc: 'Son celulas tubulares descamadas y detritus. Su presencia confirma que el da&#241;o ya no es funcional sino estructural, y que dar mas volumen no va a resolver nada.' },
  { s: 'Hematies dismorficos y cilindros hematicos', p: 'Lesion glomerular', photo: null, desc: 'Cambian por completo el estudio: obligan a pedir inmunologia sin demora y a plantear biopsia, porque hay glomerulonefritis rapidamente progresivas que se tratan y cuyo retraso cuesta el ri&#241;on.' },
  { s: 'Excrecion fraccional de sodio con diureticos', p: 'No es interpretable', photo: null, desc: 'Los diureticos la elevan y la inutilizan. En ese caso hay que usar la excrecion fraccional de UREA. Y hay causas renales con sodio bajo: contraste, rabdomiolisis y sindrome hepatorrenal.' },
  { s: 'Paciente que orina con obstruccion', p: 'La parcial no anuria', photo: null, desc: 'Una obstruccion parcial puede cursar con diuresis conservada, e incluso con poliuria. Que el paciente orine no descarta la obstruccion, y por eso la ecografia se hace igual.' },
  { s: 'Ecografia sin dilatacion', p: 'Tampoco descarta del todo', photo: null, desc: 'Hay dos falsos negativos que conviene conocer: la obstruccion muy precoz, antes de que de tiempo a dilatar, y la asociada a fibrosis retroperitoneal, donde el sistema colector queda atrapado y no se dilata.' },
  { s: 'Ondas T picudas', p: 'Hiperpotasemia', photo: null, desc: 'El electrocardiograma decide la urgencia del tratamiento. La progresion va de ondas T picudas a aplanamiento de la P, ensanchamiento del QRS y ritmo sinusoidal, que precede a la parada.' },
  { s: 'Insulina y glucosa en la hiperpotasemia', p: 'Redistribuyen, no eliminan', photo: null, desc: 'El calcio estabiliza la membrana y la insulina introduce el potasio en la celula, pero ninguno lo saca del cuerpo. Sin un quelante o depuracion, el potasio vuelve a subir en unas horas.' },
  { s: 'Balance positivo acumulado', p: 'Congestiona el ri&#241;on', photo: null, desc: 'La sobrecarga no solo produce edema pulmonar: la congestion venosa del propio ri&#241;on empeora su funcion. Y la dilucion baja la creatinina, haciendo parecer mejor una funcion que no lo esta.' },
  { s: 'Alta sin cita de revision', p: 'La omision mas repetida', photo: null, desc: 'Un episodio de lesion renal aguda multiplica el riesgo de enfermedad renal cronica posterior, y sin embargo el seguimiento tras el alta es la excepcion. Basta una analitica a los 3 meses con creatinina y cociente albumina-creatinina.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Criterios y estadio (calculadora disponible)': [1, 2],
  'Lesion transitoria frente a persistente': [2, 3],
  'Orientacion prerrenal, renal o posrenal (calculadora disponible)': [9, 10],
  'Indicacion de depuracion extrarrenal (calculadora disponible)': [5, 6, 7, 8],
  'Criterios de resolucion': [2, 3],
  'Riesgo de enfermedad renal cronica posterior': [13, 3]
};
export const escalaCalc = {
  'Criterios y estadio (calculadora disponible)': 'kdigo-lra',
  'Orientacion prerrenal, renal o posrenal (calculadora disponible)': 'localizar-lra',
  'Indicacion de depuracion extrarrenal (calculadora disponible)': 'indicacion-depuracion'
};
export const compGroups = [
  { name: 'Reconocer', items: ['Criterios, estadio y reconocimiento precoz', 'Prerrenal, renal y posrenal'] },
  { name: 'Las causas del hospital', items: ['Necrosis tubular aguda en el paciente critico', 'Nefrotoxicidad por farmacos y contraste'] },
  { name: 'Tratar y despues', items: ['Complicaciones agudas y depuracion extrarrenal', 'Despues del episodio: enfermedad renal aguda y seguimiento'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son el reconocimiento: los criterios y el estadio, con la advertencia de que la creatinina llega tarde, y la localizacion del mecanismo, que es lo que orienta el tratamiento y donde estan las dos cosas que se resuelven en minutos y se olvidan a diario. Las dos siguientes son las causas que de verdad se ven en el hospital: la necrosis tubular del paciente critico y la nefrotoxicidad, que es la mas prevenible de todas. Y las dos ultimas son lo que viene despues: las complicaciones que pueden matar en horas junto con la decision de depurar, y el seguimiento tras el alta, que es la omision mas repetida de todo el tema.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Formas y complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'SUBE LA CREATININA O BAJA LA DIURESIS', color: '#3a6b7a', target: 'definicion' },
  branches: [
    { title: 'RECONOCER', sub: 'Criterios y estadio', color: '#3a6b7a', target: 'clasificacion', leaves: [
      { title: 'Rescatar el basal', sub: 'Sin el no hay criterio', color: '#3a6b7a', target: 'diagnostico' },
      { title: 'Medir la diuresis', sub: 'Avisa antes y es gratis', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Estadio 1, 2 o 3', sub: 'El mayor de los dos ejes', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Transitoria o persistente', sub: 'Mas de 48 horas cambia todo', color: '#6b4a8c', target: 'clasificacion' }
    ] },
    { title: 'LOCALIZAR', sub: 'Antes de razonar, dos gestos', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Ecografia y vejiga', sub: 'La obstruccion se resuelve ya', color: '#6b4a8c', target: 'diagnostico' },
      { title: 'Lista de farmacos', sub: 'Lo mas prevenible', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Sedimento', sub: 'La prueba mas rentable', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Sodio urinario', sub: 'Inutil si toma diureticos', color: '#3f6b52', target: 'clasificacion' }
    ] },
    { title: 'TRATAR', sub: 'Sobre todo, dejar de da&#241;ar', color: '#8c3a5c', target: 'complicaciones', leaves: [
      { title: 'Retirar nefrotoxicos', sub: 'Y ajustar todo lo demas', color: '#8a6a1f', target: 'seguimiento' },
      { title: 'Vigilar el potasio', sub: 'Es lo que mata en horas', color: '#8c3a5c', target: 'complicaciones' },
      { title: 'Depurar si hay indicacion', sub: 'Adelantarse no mejora nada', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Cita a los 3 meses', sub: 'La omision mas repetida', color: '#6b4a8c', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2, 10], no_invasivos: [1, 2, 9], imagen: [9, 4] };
export const clasificacionCite = [1, 2, 3];
export const seguimientoCite = [1, 4, 13];
