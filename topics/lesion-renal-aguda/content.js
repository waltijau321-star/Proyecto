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
  titulo: 'Lesión Renal Aguda',
  subtitulo: 'Módulo 70 · Medicina Interna',
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
    <strong style="color:#3a6b7a;">La creatinina es un marcador TARDÍO y poco fiable.</strong> <span style="color:var(--ink-dim);">Sube cuando ya se ha perdido buena parte del filtrado, y en el paciente crítico la enmascaran la pérdida de masa muscular y la dilución por los fluidos. La DIURESIS avisa antes y es gratis.</span>
  </div>
  <div style="border:1.5px solid #3a6b7a;border-radius:8px;padding:6px 9px;background:#3a6b7a08;margin-bottom:6px;">
    <div style="font-weight:700;color:#3a6b7a;margin-bottom:3px;">CRITERIOS DE LESIÓN RENAL AGUDA: basta UNO</div>
    <div style="color:var(--ink-dim);line-height:1.7;">
      <strong style="color:var(--ink);">1.</strong> Aumento de creatinina de <strong>0.3 mg/dL o más en 48 horas</strong>.<br>
      <strong style="color:var(--ink);">2.</strong> Aumento de creatinina a <strong>1.5 veces el basal</strong> o más, en los 7 días previos.<br>
      <strong style="color:var(--ink);">3.</strong> Diuresis <strong>menor de 0.5 mL/kg/h durante 6 horas</strong> o más.<br>
      <span style="color:#8a6a1f;"><strong>El borrador de 2026 añade dos:</strong> el ascenso equivalente de <strong>CISTATINA C</strong>, útil cuando la creatinina es poco fiable, y la elevación de un <strong>BIOMARCADOR de daño</strong> validado, que introduce un criterio estructural donde antes todo era funcional.</span>
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
      <td style="border:1px solid var(--line);padding:3px 5px;">&lt;0.5 mL/kg/h más de 12 h</td>
    </tr>
    <tr>
      <td style="border:1px solid var(--line);padding:3px 5px;"><strong style="color:#8c3a34;">3</strong></td>
      <td style="border:1px solid var(--line);padding:3px 5px;">3 veces el basal, o llega a 4.0 mg/dL, <strong style="color:#8c3a34;">o se inicia depuración</strong></td>
      <td style="border:1px solid var(--line);padding:3px 5px;">&lt;0.3 mL/kg/h más de 24 h, o anuria más de 12 h</td>
    </tr>
  </table>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Lo que propone el borrador de 2026: dejar de dar UN estadio.</strong> En su lugar se informan tres ejes por separado: <strong>C</strong> (creatinina, de C0 a C3), <strong>U</strong> (diuresis, de U0 a U3) y <strong>B</strong> (biomarcador de daño, B0 o B1). Así deja de perderse la información que hoy se colapsa en un solo número: no es lo mismo un C1 U3 que un C3 U0. Se añaden además dos distinciones útiles: <strong>TRANSITORIA</strong> (48 horas o menos) frente a <strong>PERSISTENTE</strong> (más de 48 horas y hasta 7 días), y la <strong>ENFERMEDAD RENAL AGUDA</strong>, que es lo que queda entre los 7 días y los 3 meses.
  </div>
</div>`;

const localizarHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">Antes de nada, dos cosas que se resuelven en minutos y se olvidan a diario:</strong> <span style="color:var(--ink-dim);">una ECOGRAFÍA que descarte obstrucción, y una revisión de la LISTA DE FÁRMACOS. Las dos son gratis comparadas con lo que cuesta no hacerlas.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:88px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">PRERRENAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">El riñón esta sano pero mal perfundido: hipovolemia, insuficiencia cardiaca, cirrosis, sepsis. Sedimento <strong>LIMPIO</strong>, orina concentrada, sodio urinario bajo. Es <strong style="color:#3f6b52;">REVERSIBLE</strong> si se corrige pronto la causa.</div>
    </div>
    <div style="display:grid;grid-template-columns:88px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">RENAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Daño del parénquima. La más frecuente en el hospital es la <strong style="color:var(--ink);">NECROSIS TUBULAR AGUDA</strong>, con cilindros granulosos pardos y células tubulares. Si hay hematies dismorficos y cilindros hemáticos, la lesión es <strong>GLOMERULAR</strong> y eso cambia todo el estudio.</div>
    </div>
    <div style="display:grid;grid-template-columns:88px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a8c22;border:1px solid #6b4a8c;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a8c;">POSRENAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Obstrucción. Es la causa que <strong style="color:#6b4a8c;">MÁS RÁPIDO se resuelve</strong> y la que más se pasa por alto, sobre todo en el varón mayor con prostatismo y en la neoplasia pélvica. Ojo: puede cursar con diuresis <strong>CONSERVADA</strong> si la obstrucción es parcial.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Y una advertencia sobre la excreción fraccional de sodio, que se usa mucho peor de lo que se cree.</strong> Solo orienta si se interpreta en su contexto: los <strong>DIURÉTICOS la elevan</strong> y la hacen inservible (ahi hay que usar la de UREA), y hay causas renales que cursan con sodio urinario BAJO, como el contraste, la rabdomiólisis y el síndrome hepatorrenal. Es una ayuda, no un arbitro: no sustituye al sedimento, a la ecografía ni a la historia.
  </div>
</div>`;

const trsHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">Hay indicaciones que no se discuten, y hay una pregunta que si:</strong> <span style="color:var(--ink-dim);">cuando empezar en el paciente que todavía no las cumple. Los ensayos han contestado que ADELANTARSE por sistema NO mejora la supervivencia.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">INDICACIONES QUE NO ESPERAN</div>
      <div style="color:var(--ink-dim);line-height:1.7;">
        <strong style="color:var(--ink);">A</strong>cidosis metabólica grave y refractaria<br>
        <strong style="color:var(--ink);">E</strong>lectrolitos: hiperpotasemia grave o refractaria<br>
        <strong style="color:var(--ink);">I</strong>ntoxicacion por un tóxico dializable<br>
        <strong style="color:var(--ink);">O</strong>verload: sobrecarga de volumen refractaria<br>
        <strong style="color:var(--ink);">U</strong>remia sintomática: encefalopatía, pericarditis, sangrado
      </div>
    </div>
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">Y SI NO LAS CUMPLE?</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Los grandes ensayos comparando inicio PRECOZ frente a inicio según indicación no encontraron beneficio en supervivencia con adelantarse, y si más efectos adversos, más catéteres y más dependencia. Una parte importante de los pacientes del grupo conservador <strong style="color:#3f6b52;">nunca llegó a necesitar depuración</strong>.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #3d5a73;border-radius:8px;background:#3d5a7310;color:var(--ink-dim);">
    <strong style="color:#3d5a73;">Lo que si hay que hacer mientras tanto, y rinde más que cualquier técnica:</strong> retirar los <strong>NEFROTÓXICOS</strong>, ajustar TODOS los fármacos a la función renal (empezando por los antibióticos y las heparinas), optimizar la perfusión sin sobrecargar de volumen, descartar la obstrucción, tratar la causa y vigilar el potasio. La mayor parte del beneficio en la lesión renal aguda esta en lo que se deja de hacer.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La lesión renal aguda es un descenso brusco del filtrado glomerular que se detecta por el ascenso de la creatinina o por el descenso de la diuresis. No es una enfermedad sino un <strong>síndrome</strong>, y en el hospital casi siempre es multifactorial: un paciente con una susceptibilidad de base al que se le suman una hipoperfusión, una sepsis y dos o tres fármacos.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: los criterios y el estadio.</strong></p>
<p style="margin:0 0 12px;">Tres criterios, y basta uno. Conviene tener presente que la <strong>creatinina es tardía</strong> y que en el paciente crítico la enmascaran la pérdida de masa muscular y la dilución, mientras que la <strong>diuresis</strong> avisa antes y no cuesta nada. El borrador de la guía de 2026 añade la cistatina C y un biomarcador de daño, y propone dejar de dar un estadio único para informar tres ejes por separado.</p>
${figBlock('Figura 1', 'Criterios, estadios y lo que propone el borrador de 2026', criteriosHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: donde esta el problema.</strong></p>
<p style="margin:0 0 12px;">Prerrenal, renal o posrenal. Antes de razonar nada conviene hacer las dos cosas que se resuelven en minutos y se olvidan a diario: una <strong>ecografía</strong> que descarte obstrucción y una revisión de la <strong>lista de fármacos</strong>. Y usar la excreción fraccional de sodio con la cautela que merece, porque los diuréticos la inutilizan.</p>
${figBlock('Figura 2', 'Prerrenal, renal y posrenal, y las trampas del sodio urinario', localizarHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: cuando depurar.</strong></p>
<p style="margin:0 0 12px;">Hay indicaciones que no se discuten y se recuerdan con una regla sencilla. Y hay una pregunta que si se discutio mucho, la de adelantarse en el paciente que todavía no las cumple, a la que los ensayos han respondido que <strong>no mejora la supervivencia</strong>. Mientras tanto, lo que más rinde es retirar nefrotóxicos y ajustar dosis.</p>
${figBlock('Figura 3', 'Depuración extrarrenal: cuando no se discute y cuando si', trsHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No esperar a que suba la creatinina para actuar, porque llega tarde. No dejar de medir la <strong>diuresis</strong>, que es el criterio que avisa antes y el que peor se registra. No olvidar la <strong>ecografía</strong>: la obstrucción es lo que más rápido se resuelve y lo que más se pasa por alto. No dar por descartada la obstrucción porque el paciente orine, porque puede ser parcial. No interpretar la excreción fraccional de sodio en un paciente con diuréticos. No seguir dando volumen a quien ya no responde, porque la sobrecarga empeora el riñón. No mantener los <strong>nefrotóxicos</strong> ni dejar sin ajustar los fármacos a la función renal. No pautar dopamina a dosis baja ni diuréticos para "proteger" el riñón, porque no funcionan. No iniciar la depuración por sistema en quien no cumple indicación. Y no dar de alta sin plan: una lesión renal aguda multiplica el riesgo de enfermedad renal crónica y casi nunca se sigue después.</p>`;

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
      tituloA: 'Lesión prerrenal',
      tituloB: 'Necrosis tubular establecida',
      compensada: 'El riñón esta estructuralmente sano y responde a la hipoperfusión haciendo exactamente lo que debe: retener sodio y agua. Clínicamente hay signos de la causa (deshidratación, hemorragia, insuficiencia cardiaca descompensada, cirrosis con ascitis, sepsis) más oliguria con orina CONCENTRADA y oscura. El sedimento es LIMPIO o con algún cilindro hialino, el sodio urinario es bajo y la urea sube proporcionalmente más que la creatinina. Lo que define esta fase es que es REVERSIBLE: si la perfusión se restaura pronto, la función vuelve en horas o pocos días sin dejar secuela.',
      descompensada: 'Si la hipoperfusión se mantiene, o si se añade un tóxico, la célula tubular se lesiona y el cuadro deja de responder al volumen. Aparece entonces una orina ISOSTENURICA, con sodio urinario alto, y un sedimento que delata el daño: CILINDROS GRANULOSOS PARDOS y células tubulares. La diuresis puede ser baja o conservada, porque existe una forma no oliguriga que tiene mejor pronóstico pero es igual de grave desde el punto de vista funcional. A partir de aquí el tratamiento ya no es dar más volumen (que solo produce sobrecarga) sino soporte, retirada de nefrotóxicos y tiempo, porque el epitelio tubular se regenera.'
    },
    laboratorio: [
      { prueba: 'Creatinina y su BASAL', utilidad: 'El criterio diagnóstico se apoya en la comparación con el basal, de modo que rescatarlo de analíticas previas es parte del diagnóstico. Es un marcador TARDÍO: sube cuando ya se ha perdido buena parte del filtrado, y en el paciente crítico la enmascaran la pérdida de masa muscular y la dilución por fluidos.' },
      { prueba: 'Diuresis horaria', utilidad: 'El criterio que avisa ANTES y el peor registrado. Detecta la lesión horas antes que la creatinina y no cuesta nada. En el paciente que se deteriora, cuantificarla de verdad (con sonda si hace falta) cambia el momento del diagnóstico.' },
      { prueba: 'Sedimento urinario', utilidad: 'La prueba más rentable y la más olvidada. Sedimento limpio orienta a prerrenal u obstructivo; CILINDROS GRANULOSOS PARDOS a necrosis tubular; hematies DISMORFICOS y cilindros hemáticos a lesión GLOMERULAR, que cambia todo el estudio; y leucocitos con eosinófilos a nefritis intersticial.' },
      { prueba: 'Iones en orina y excreción fraccional', utilidad: 'La excreción fraccional de sodio orienta pero se usa peor de lo que se cree: los DIURÉTICOS la elevan y la inutilizan, y entonces hay que usar la de UREA. Además hay causas renales con sodio urinario bajo (contraste, rabdomiólisis, síndrome hepatorrenal).' },
      { prueba: 'Potasio, gasometría y bicarbonato', utilidad: 'La HIPERPOTASEMIA es la complicación que puede matar en horas y la primera que hay que buscar. La acidosis metabólica con anión gap elevado acompaña a la lesión establecida y forma parte de las indicaciones de depuración.' },
      { prueba: 'Calcio, fósforo y ácido úrico', utilidad: 'Su patrón orienta: hipocalcemia con hiperfosfatemia e hiperuricemia marcadas sugieren rabdomiólisis o síndrome de lisis tumoral, dos causas con tratamiento propio que conviene identificar pronto.' },
      { prueba: 'Creatina cinasa y mioglobina', utilidad: 'Ante sospecha de rabdomiólisis, que es una causa frecuente, tratable y fácil de pasar por alto. El dato de urgencias que la delata es una tira reactiva positiva para sangre con un sedimento SIN hematies.' },
      { prueba: 'Cistatina C', utilidad: 'Alternativa a la creatinina cuando esta es poco fiable: masa muscular muy baja o muy alta, desnutrición, hepatopatía o amputaciones. El borrador de la guía de 2026 la incorpora de forma explícita a los criterios diagnósticos.' },
      { prueba: 'Estudio inmunológico', utilidad: 'Anticuerpos antinucleares, anti-ADN, ANCA, anti-membrana basal glomerular, complemento y proteinograma. Se piden cuando el sedimento es GLOMERULAR o cuando no hay causa clara, porque hay glomerulonefritis rápidamente progresivas que se tratan y cuyo retraso cuesta el riñón.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios y estadio (calculadora disponible)', interpretacion: 'Calcula el estadio clásico y, en paralelo, la notacion de tres ejes del borrador de 2026, y distingue la lesión transitoria de la persistente.', cutoff: 'Basta un criterio: 0.3 mg/dL en 48 h, 1.5 veces el basal, o diuresis baja 6 horas' },
      { metodo: 'Orientación prerrenal, renal o posrenal (calculadora disponible)', interpretacion: 'Combina contexto, sedimento, ecografía e índices urinarios, avisando de cuando la excreción fraccional de sodio no es interpretable.', cutoff: 'Con diuréticos, la excreción fraccional de sodio no vale: usar la de UREA' },
      { metodo: 'Indicación de depuración extrarrenal (calculadora disponible)', interpretacion: 'Reúne las indicaciones que no se discuten y situa la pregunta del momento de inicio en lo que han mostrado los ensayos.', cutoff: 'Sin indicación establecida, adelantarse por sistema no mejora la supervivencia' },
      { metodo: 'Ecografía renal y de vías urinarias', interpretacion: 'Descarta la OBSTRUCCIÓN, que es la causa que más rápido se resuelve. Valora además el tamaño renal y la ecogenicidad, que orientan sobre si hay enfermedad crónica de base.', cutoff: 'Riñones pequeños e hiperecogénicos sugieren enfermedad crónica, no lesión aguda' },
      { metodo: 'Balance hídrico y peso diario', interpretacion: 'El balance positivo acumulado se asocia a peor recuperación renal, en parte por congestión venosa del propio riñón. Y la dilución falsea la creatinina, haciendo parecer mejor una función que no lo esta.', cutoff: 'Terminada la reanimación, el objetivo pasa a ser el balance negativo' },
      { metodo: 'Revisión estructurada de la medicación', interpretacion: 'No es una prueba pero rinde más que muchas. Busca nefrotóxicos que retirar y fármacos que ajustar, empezando por antibióticos, heparinas y antidiabéticos.', cutoff: 'Es la intervención más rentable y la que menos se hace de forma sistemática' }
    ],
    imagen: [
      { modalidad: 'Ecografía renal', hallazgos: 'La primera prueba y la más importante. Busca DILATACIÓN del sistema colector, que indica obstrucción. Ojo con dos falsos negativos: la obstrucción muy precoz y la que ocurre con fibrosis retroperitoneal pueden no dilatar. Valora también el tamaño y la ecogenicidad para distinguir agudo de crónico.' },
      { modalidad: 'Ecografía con doppler y vejiga', hallazgos: 'Estima la resistencia intrarrenal y valora la congestión venosa, que es una causa infravalorada de disfunción renal en el paciente con balance muy positivo. La vejiga se mide siempre: un globo vesical se resuelve con una sonda.' },
      { modalidad: 'Tomografía sin contraste', hallazgos: 'Cuando la ecografía no aclara la obstrucción o se busca litiasis, masa o colección. Sin contraste, para no añadir un insulto más a un riñón ya lesionado, salvo que el beneficio de la información sea claramente mayor.' },
      { modalidad: 'Biopsia renal', hallazgos: 'Reservada a los casos en que la causa no se aclara y se sospecha una entidad con tratamiento propio: glomerulonefritis rápidamente progresiva, vasculitis, nefritis intersticial o microangiopatía trombótica. Se plantea sin demora cuando el sedimento es glomerular, porque ahi el tiempo cuesta nefronas.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por <strong>gravedad</strong> en tres estadios, definidos por la creatinina y por la diuresis, y por <strong>localización</strong> en prerrenal, renal y posrenal, que es la división que orienta el tratamiento. El borrador de la guía de 2026 añade dos ejes más: la <strong>duración</strong> (transitoria si dura 48 horas o menos, persistente si dura más y hasta 7 días, y <strong>enfermedad renal aguda</strong> entre los 7 días y los 3 meses) y la presencia de un <strong>biomarcador de daño</strong>, que permite separar por primera vez el descenso funcional del filtrado del daño estructural real.`,
    escalas: [
      { nombre: 'Criterios y estadio (calculadora disponible)', componentes: 'Creatinina actual y basal, tiempo transcurrido, diuresis por kilo y hora y su duración, e inicio o no de depuración extrarrenal.', formula: 'Diagnóstico con un solo criterio. Estadio 1: creatinina 1.5 a 1.9 veces el basal o ascenso de 0.3 mg/dL, o diuresis baja de 6 a 12 horas. Estadio 2: 2 a 2.9 veces, o diuresis baja más de 12 horas. Estadio 3: 3 veces o más, o llegar a 4.0 mg/dL, o iniciar depuración, o diuresis por debajo de 0.3 mL/kg/h más de 24 horas o anuria más de 12 horas.', interpretacion: 'Se toma el estadio MÁS ALTO entre el que da la creatinina y el que da la diuresis. El borrador de 2026 propone dejar de colapsarlos en un número e informar los tres ejes por separado, porque un paciente C1 U3 y otro C3 U0 tienen problemas distintos.' },
      { nombre: 'Lesión transitoria frente a persistente', componentes: 'Duración del ascenso de creatinina o del descenso de diuresis.', formula: 'Transitoria si dura 48 horas o menos. Persistente si dura más de 48 horas y hasta 7 días. Más allá de 7 días y hasta 3 meses se habla de ENFERMEDAD renal aguda.', interpretacion: 'Es una distinción del borrador de 2026 con valor pronóstico: la transitoria suele ser funcional y reversible, y la persistente se asocia a daño estructural y a mayor riesgo de enfermedad renal crónica posterior.' },
      { nombre: 'Orientación prerrenal, renal o posrenal (calculadora disponible)', componentes: 'Contexto clínico, sedimento urinario, ecografía, excreción fraccional de sodio o de urea, y uso de diuréticos.', formula: 'Excreción fraccional de sodio por debajo del 1% orienta a prerrenal y por encima del 2% a necrosis tubular, siempre que el paciente NO tome diuréticos. Con diuréticos se usa la de urea, con un umbral en torno al 35%.', interpretacion: 'Es una ayuda, no un arbitro. Hay causas renales con sodio urinario bajo, como el contraste, la rabdomiólisis y el síndrome hepatorrenal, y el sedimento y la ecografía aportan más que cualquier índice.' },
      { nombre: 'Indicación de depuración extrarrenal (calculadora disponible)', componentes: 'Acidosis, alteraciones electrolíticas, intoxicación, sobrecarga de volumen y síntomas urémicos.', formula: 'Regla mnemotecnica de cinco indicaciones que no se discuten cuando son graves o refractarias al tratamiento médico.', interpretacion: 'La pregunta discutida no es esa sino cuando empezar en el paciente que aun no cumple ninguna. Los grandes ensayos no encontraron beneficio en supervivencia al adelantarse, y una parte relevante de los pacientes manejados de forma conservadora nunca llegó a necesitarla.' },
      { nombre: 'Criterios de resolución', componentes: 'Creatinina o cistatina C respecto al basal, y filtrado estimado a los 3 meses.', formula: 'Resolución COMPLETA de la lesión aguda: creatinina por debajo de 1.2 veces el basal en 7 días. PARCIAL: entre 1.2 y menos de 1.5 veces el basal en ese plazo.', interpretacion: 'Proceden del borrador de 2026 y son útiles porque obligan a mirar el final del episodio y no solo su comienzo. Una lesión que no resuelve del todo es la que más riesgo tiene de dejar enfermedad renal crónica.' },
      { nombre: 'Riesgo de enfermedad renal crónica posterior', componentes: 'Gravedad del episodio, duración, número de episodios, función basal y comorbilidad.', formula: 'Valoración clínica: a mayor estadio, mayor duración y más episodios, mayor riesgo.', interpretacion: 'Un episodio de lesión renal aguda multiplica el riesgo de enfermedad renal crónica y de mortalidad a largo plazo, y sin embargo el seguimiento tras el alta casi nunca se organiza. Es una de las omisiones más repetidas de todo el tema.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Criterios, estadio y reconocimiento precoz',
      color: '#3a6b7a',
      definicion: 'Descenso brusco del filtrado glomerular, definido por el ascenso de la creatinina o por el descenso de la diuresis dentro de unos umbrales y plazos establecidos.',
      fisiopatologia: 'La creatinina es un marcador indirecto y con dos limitaciones que explican casi todos los problemas practicos. La primera es cinetica: su concentración tarda en equilibrarse, de modo que cuando sube ya se ha perdido buena parte del filtrado y su valor refleja lo que ocurria horas antes. La segunda es que depende de la producción muscular y del volumen de distribución, de modo que en el paciente crítico, que pierde masa muscular y recibe litros de fluidos, la creatinina se mantiene falsamente baja y hace parecer mejor una función que no lo esta. La DIURESIS no tiene ese retraso: cae cuando cae la perfusión, y por eso es el criterio que avisa antes.',
      epidemiologia: 'Afecta a una proporción muy alta de los pacientes ingresados en unidades de críticos y a una parte relevante de los ingresados en planta. En la mayoría de los casos es multifactorial y en buena parte prevenible, porque los factores que se suman (hipoperfusión, sepsis, nefrotóxicos y contraste) son en gran medida modificables.',
      factores_riesgo: ['Enfermedad renal crónica previa, que es el factor más importante', 'Edad avanzada', 'Diabetes mellitus', 'Insuficiencia cardiaca y cirrosis', 'Sepsis', 'Cirugía mayor, sobre todo cardiaca', 'Hipovolemia y uso de diuréticos', 'Fármacos nefrotóxicos y contraste yodado', 'Inhibidores de la enzima convertidora y antagonistas del receptor de angiotensina', 'Antiinflamatorios no esteroideos', 'Hipoalbuminemia', 'Balance hídrico muy positivo'],
      clinica: 'Con frecuencia SILENTE: se detecta en una analítica o al revisar la diuresis. Cuando da síntomas, ya suele haber complicaciones: sobrecarga de volumen con disnea, náuseas y somnolencia por uremia, o las manifestaciones de la hiperpotasemia. Hay que buscar de forma activa signos de la causa: hipovolemia, insuficiencia cardiaca, globo vesical y prostatismo.',
      criterios_dx: 'Basta UNO: ascenso de creatinina de 0.3 mg/dL o más en 48 horas; ascenso a 1.5 veces el basal o más en los 7 días previos; o diuresis por debajo de 0.5 mL/kg/h durante 6 horas o más. Ver la Figura 1 de Definición.',
      laboratorio: 'CREATININA con rescate del BASAL de analíticas previas, que es parte del diagnóstico. DIURESIS HORARIA. Potasio, gasometría, bicarbonato, calcio, fósforo, ácido úrico, hemograma y sedimento urinario. Cistatina C cuando la creatinina no es fiable.',
      imagen: 'ECOGRAFÍA RENAL Y VESICAL, que es la primera prueba y descarta la obstrucción. Valora además el tamaño y la ecogenicidad para distinguir lo agudo de lo crónico.',
      complementarios: 'Registro real de la diuresis, con sonda si hace falta. Peso diario y balance acumulado. Y una revisión estructurada de la medicación en el mismo momento del diagnóstico.',
      dx_diferencial: 'Enfermedad renal CRÓNICA no conocida, que se distingue por el basal previo, la anemia, las alteraciones del metabolismo mineral y unos riñones pequeños e hiperecogénicos. Y las situaciones que elevan la creatinina sin bajar el filtrado, como algunos fármacos que bloquean su secreción tubular.',
      tx_medico: 'Tratar la causa, restaurar la perfusión sin sobrecargar, RETIRAR nefrotóxicos, ajustar todos los fármacos y vigilar el potasio. No hay ningún tratamiento que acelere la recuperación del epitelio tubular: lo que hay es dejar de dañarlo.',
      tx_farmacologico: 'Ninguno específico. Conviene saber lo que NO funciona: la dopamina a dosis baja no protege el riñón, y los diuréticos no previenen ni acortan la lesión, aunque son útiles para manejar la sobrecarga en quien responde a ellos.',
      tx_intervencionista: 'Sondaje vesical si hay globo. Desobstruccion urgente si hay obstrucción. Depuración extrarrenal si aparece indicación.',
      criterios_uci: 'Hiperpotasemia grave, acidosis refractaria, sobrecarga con compromiso respiratorio, uremia sintomática y necesidad de depuración en un paciente inestable.',
      criterios_tips: 'No aplica de forma general; en el síndrome hepatorrenal el manejo tiene su propio marco, detallado en el tema de cirrosis.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Creatinina y diuresis diarias, balance, potasio y revisión de fármacos. Y una pregunta cada dia: sigue habiendo un insulto activo que se pueda retirar.',
      seguimiento_ambulatorio: 'Control de la función renal tras el alta, que es lo que más se omite. Un episodio de lesión renal aguda multiplica el riesgo de enfermedad renal crónica posterior.',
      pronostico: 'Depende del estadio, de la duración y de la causa. La mayoría de las formas prerrenales se recuperan por completo; las persistentes y las que precisan depuración dejan con frecuencia pérdida de función.',
      algoritmo: ['Rescatar la creatinina BASAL de analíticas previas', 'Comprobar si se cumple algún criterio diagnóstico', 'Medir de verdad la DIURESIS, con sonda si hace falta', 'Calcular el estadio con creatinina y con diuresis, y quedarse con el mayor', 'Hacer ECOGRAFÍA para descartar obstrucción', 'Mirar el SEDIMENTO urinario', 'Revisar y retirar los nefrotóxicos', 'Ajustar todos los fármacos a la función renal', 'Comprobar el potasio y la gasometría', 'Repetir a diario y vigilar si la lesión se hace persistente']
    },
    {
      nombre: 'Prerrenal, renal y posrenal',
      color: '#3f6b52',
      definicion: 'Clasificación por localización del mecanismo, que es la que orienta el tratamiento: perfusión insuficiente, daño del parénquima u obstrucción de la via urinaria.',
      fisiopatologia: 'En la forma PRERRENAL el riñón esta sano y hace lo que debe: ante una perfusión baja, activa el eje renina-angiotensina-aldosterona y la hormona antidiurética, retiene sodio y agua y concentra la orina. Eso explica todo su perfil de laboratorio (sodio urinario bajo, orina concentrada, urea que sube más que la creatinina) y explica también por que es reversible. Si la hipoperfusión se mantiene o se añade un tóxico, la célula tubular pierde su polaridad y su capacidad de reabsorber, se descama y forma cilindros: es la NECROSIS TUBULAR, donde el sodio urinario sube porque el tubulo ya no puede retenerlo. Y en la forma POSRENAL, la presión retrógrada transmitida al glomerulo anula el gradiente de filtración.',
      epidemiologia: 'En el hospital, la mayoría de los casos son prerrenales o de necrosis tubular, y con mucha frecuencia una mezcla de ambas cosas con nefrotóxicos añadidos. La obstrucción es menos frecuente pero desproporcionadamente importante, porque es la que más rápido se resuelve.',
      factores_riesgo: ['Hipovolemia de cualquier origen', 'Insuficiencia cardiaca y síndrome cardiorrenal', 'Cirrosis con ascitis', 'Sepsis', 'Inhibidores del sistema renina-angiotensina y antiinflamatorios, que quitan la autorregulación', 'Hipertrofia prostática y neoplasia pélvica', 'Litiasis y fibrosis retroperitoneal', 'Vejiga neurógena y sondas obstruidas', 'Contraste yodado y otros nefrotóxicos', 'Rabdomiólisis y síndrome de lisis tumoral'],
      clinica: 'PRERRENAL: signos de la causa y orina concentrada, con respuesta al volumen. RENAL: no responde al volumen, con orina isostenurica. POSRENAL: globo vesical, dolor lumbar, anuria brusca o alternancia de anuria y poliuria. Y una advertencia: la obstrucción PARCIAL puede cursar con diuresis conservada, de modo que orinar no la descarta.',
      criterios_dx: 'La combinación de contexto, sedimento, ecografía e índices urinarios. Ver la Figura 2 de Definición.',
      laboratorio: 'SEDIMENTO URINARIO, que es la prueba más rentable: limpio en prerrenal y obstructivo, con cilindros granulosos pardos en la necrosis tubular, con hematies dismorficos y cilindros hemáticos en la lesión glomerular, y con leucocitos en la nefritis intersticial. Iones en orina y excreción fraccional de sodio o de UREA si hay diuréticos.',
      imagen: 'ECOGRAFÍA, obligada y precoz, buscando dilatación. Recordar dos falsos negativos: la obstrucción muy precoz y la asociada a fibrosis retroperitoneal pueden no dilatar. Medir siempre la vejiga.',
      complementarios: 'Sondaje vesical si hay globo, que es diagnóstico y terapéutico a la vez. Estudio inmunológico si el sedimento es glomerular, sin demora.',
      dx_diferencial: 'Entre las tres localizaciones, y dentro de la renal entre necrosis tubular, nefritis intersticial, glomerulonefritis, microangiopatía trombótica y ateroembolia de colesterol, que aparece tras un procedimiento vascular y cursa con livedo y eosinofilia.',
      tx_medico: 'PRERRENAL: restaurar la perfusión, corregir la causa, retirar los fármacos que quitan la autorregulación. RENAL: soporte, retirada de tóxicos y tiempo. POSRENAL: DESOBSTRUIR, que es lo más urgente y lo más agradecido de todo el tema.',
      tx_farmacologico: 'El de la causa. En la nefritis intersticial por fármacos, retirar el responsable y valorar corticoides. En la glomerulonefritis rápidamente progresiva, inmunosupresión sin demora.',
      tx_intervencionista: 'Sondaje, catéter suprapubico, nefrostomia percutánea o catéter doble jota según el nivel de la obstrucción. Biopsia renal cuando la causa no se aclara y hay una entidad tratable en juego.',
      criterios_uci: 'Los del cuadro general, más las complicaciones de la obstrucción (sepsis de origen urinario con pionefrosis, que es una urgencia de drenaje).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Tras desobstruir, vigilar la POLIURIA POSOBSTRUCTIVA, que puede ser masiva y producir deshidratación y alteraciones electrolíticas si no se repone. Y reevaluar la localización si el paciente no evoluciona como se esperaba.',
      seguimiento_ambulatorio: 'Tratamiento definitivo de la causa obstructiva. Control de la función renal y de la proteinuria en las formas parenquimatosas.',
      pronostico: 'Excelente en la prerrenal corregida pronto y en la obstructiva desobstruida a tiempo. La recuperación tras una obstrucción prolongada es peor cuanto más dure, lo que convierte el retraso en el factor decisivo.',
      algoritmo: ['Hacer ECOGRAFÍA y medir la vejiga antes de razonar nada', 'Sondar si hay globo vesical', 'Revisar la lista de FÁRMACOS', 'Mirar el SEDIMENTO urinario', 'Valorar la respuesta al volumen en la sospecha prerrenal', 'Calcular la excreción fraccional de sodio solo si NO toma diuréticos', 'Con diuréticos, usar la excreción fraccional de UREA', 'Si el sedimento es glomerular, pedir inmunologia sin demora', 'Desobstruir cuanto antes si hay obstrucción', 'Vigilar la poliuria posobstructiva tras desobstruir']
    },
    {
      nombre: 'Necrosis tubular aguda en el paciente crítico',
      color: '#8c3a34',
      definicion: 'Lesión del epitelio tubular por isquemia, sepsis o tóxicos, que es la forma parenquimatosa más frecuente en el hospital y la que define la lesión renal del paciente crítico.',
      fisiopatologia: 'La medula renal externa vive en una hipoxia relativa fisiológica, porque el segmento grueso ascendente consume mucho oxígeno para reabsorber sodio y recibe un flujo escaso. Esa vulnerabilidad basal explica por que es el primer territorio que sufre. En la sepsis, además, el mecanismo no es solo la isquemia: hay redistribución del flujo intrarrenal, inflamación, disfunción microvascular y una respuesta adaptativa de la propia célula tubular que reduce su metabolismo, algo parecido a lo que ocurre en otros órganos del paciente crítico. De ahi dos consecuencias prácticas: que el flujo global puede ser normal y el riñón estar sufriendo, y que la célula tubular se REGENERA, de modo que la función puede volver si se retira el insulto.',
      epidemiologia: 'Es la causa más frecuente de lesión renal aguda intrahospitalaria. En el paciente crítico casi siempre es multifactorial: sepsis más hipoperfusión más nefrotóxicos, y con mucha frecuencia también contraste y balance muy positivo.',
      factores_riesgo: ['Sepsis y choque séptico', 'Hipoperfusión prolongada', 'Cirugía mayor, sobre todo cardiaca con circulación extracorpórea', 'Nefrotóxicos y contraste yodado', 'Rabdomiólisis y hemólisis', 'Enfermedad renal crónica previa', 'Balance hídrico muy positivo y congestión venosa', 'Ventilación mecánica con presiones altas', 'Hipertensión intraabdominal', 'Edad avanzada y comorbilidad'],
      clinica: 'Oliguria o diuresis conservada, sin respuesta al volumen. La forma NO OLIGURICA tiene mejor pronóstico pero es igual de grave desde el punto de vista funcional y se pasa por alto si solo se mira la diuresis. Aparecen después las complicaciones: sobrecarga, hiperpotasemia, acidosis y uremia.',
      criterios_dx: 'Contexto compatible, ausencia de obstrucción, sedimento con CILINDROS GRANULOSOS PARDOS y células tubulares, y falta de respuesta al volumen.',
      laboratorio: 'Sedimento urinario, iones en orina, potasio, gasometría, calcio, fósforo, creatina cinasa si procede y hemograma. Vigilancia estrecha del potasio y del equilibrio ácido-base.',
      imagen: 'Ecografía para descartar obstrucción y valorar la congestión. En el paciente con balance muy positivo, valorar la congestión venosa, que es una causa infravalorada de disfunción renal.',
      complementarios: 'Diuresis horaria, balance acumulado y peso. Y una revisión diaria de si persiste algún insulto activo, que es la pregunta que más cambia la evolución.',
      dx_diferencial: 'Prerrenal prolongada, nefritis intersticial aguda por fármacos, microangiopatía trombótica, ateroembolia de colesterol, síndrome hepatorrenal y síndrome cardiorrenal.',
      tx_medico: 'Optimizar la perfusión SIN sobrecargar, y una vez restaurada, pasar a balance negativo. Retirar nefrotóxicos. Ajustar todos los fármacos. Controlar el potasio, la acidosis y la glucemia. Nutrición adecuada sin restricción proteica excesiva.',
      tx_farmacologico: 'Ninguno acelera la recuperación. Los DIURÉTICOS no previenen ni acortan la lesión y no deben usarse con esa intención, aunque son útiles para manejar la sobrecarga en quien responde. La dopamina a dosis baja NO protege el riñón y se ha abandonado.',
      tx_intervencionista: 'Depuración extrarrenal si aparece indicación. Descompresión si hay hipertensión intraabdominal significativa.',
      criterios_uci: 'Los generales del paciente crítico, más las complicaciones metabólicas graves.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Vigilar la fase de RECUPERACIÓN, que puede cursar con poliuria y pérdida de electrolitos, y ajustar de nuevo las dosis de los fármacos a medida que el filtrado mejora, porque olvidarlo produce infradosificacion de antibióticos.',
      seguimiento_ambulatorio: 'Control de la función renal y de la proteinuria a los 3 meses. Muchos pacientes no recuperan por completo su función basal aunque salgan del hospital con una creatinina aceptable.',
      pronostico: 'La mortalidad de la lesión renal aguda del paciente crítico es alta, aunque en buena parte por la enfermedad de base. Entre los supervivientes, el riesgo posterior de enfermedad renal crónica es elevado y muy poco vigilado.',
      algoritmo: ['Confirmar que no hay obstrucción', 'Buscar cilindros granulosos pardos en el sedimento', 'Comprobar que no responde al volumen', 'Optimizar la perfusión sin sobrecargar', 'Retirar TODOS los nefrotóxicos posibles', 'Ajustar la dosis de cada fármaco a la función renal', 'No usar diuréticos ni dopamina para proteger el riñón', 'Vigilar potasio, acidosis y sobrecarga', 'Pasar a balance negativo cuando la perfusión lo permita', 'Reajustar las dosis al alza cuando el filtrado se recupere']
    },
    {
      nombre: 'Nefrotoxicidad por fármacos y contraste',
      color: '#8a6a1f',
      definicion: 'Lesión renal aguda causada o agravada por medicamentos o por contraste yodado, que es la causa más prevenible de todo el tema.',
      fisiopatologia: 'Los mecanismos son varios y conviene distinguirlos porque orientan la prevención. Hay toxicidad TUBULAR directa (aminoglucósidos, anfotericina, cisplatino, tenofovir). Hay alteración HEMODINÁMICA intraglomerular: los antiinflamatorios bloquean las prostaglandinas que dilatan la arteriola aferente, y los inhibidores del sistema renina-angiotensina dilatan la eferente; cada uno por separado se tolera, pero juntos y sobre un riñón hipoperfundido anulan la autorregulación, y de ahi la triada peligrosa que se forma cuando se añade un diurético. Hay NEFRITIS INTERSTICIAL inmunoalergica, clásica de betalactámicos, inhibidores de la bomba de protones y antiinflamatorios. Y hay obstrucción INTRATUBULAR por cristales, como con el aciclovir o el metotrexato.',
      epidemiologia: 'Los fármacos participan en una proporción muy alta de las lesiones renales agudas intrahospitalarias, y en la mayoría de los casos hay más de uno implicado. Sobre el contraste, el conocimiento ha cambiado: los estudios con grupo de comparación han mostrado que su riesgo se había sobreestimado durante años, y hoy la preocupación es no negar una prueba necesaria por un miedo desproporcionado.',
      factores_riesgo: ['Enfermedad renal crónica previa', 'Hipovolemia, que multiplica el riesgo de casi todos', 'Combinación de antiinflamatorio, inhibidor del sistema renina-angiotensina y diurético', 'Edad avanzada', 'Dosis altas y tratamientos prolongados', 'Varios nefrotóxicos a la vez', 'Insuficiencia cardiaca y cirrosis', 'Diabetes mellitus', 'Sepsis concomitante', 'Ausencia de ajuste de dosis a la función renal'],
      clinica: 'Casi siempre asintomática: se detecta por el ascenso de la creatinina. La NEFRITIS INTERSTICIAL puede dar fiebre, exantema y eosinofilia, aunque esa triada clásica esta completa en una minoría y su ausencia no la descarta. La ateroembolia de colesterol, tras un procedimiento vascular, cursa con livedo reticular, dedos azules y eosinofilia.',
      criterios_dx: 'Relación temporal con el fármaco, ausencia de otra causa y mejoría tras la retirada. El sedimento con leucocitos y cilindros leucocitarios apoya la nefritis intersticial.',
      laboratorio: 'Sedimento urinario, eosinófilos en sangre, iones en orina y niveles del fármaco cuando existan. En la sospecha de cristales, examen del sedimento buscandolos.',
      imagen: 'Ecografía para descartar obstrucción. En la nefritis intersticial, los riñones pueden verse aumentados de tamaño.',
      complementarios: 'REVISIÓN ESTRUCTURADA de toda la medicación, incluidos los productos de herbolario y los antiinflamatorios que el paciente toma por su cuenta y no considera medicamentos. Biopsia si la nefritis intersticial no mejora tras retirar el sospechoso.',
      dx_diferencial: 'Necrosis tubular de otra causa, prerrenal, obstrucción y las causas inmunológicas. En el paciente hospitalizado casi siempre coexisten varias.',
      tx_medico: 'RETIRAR el fármaco responsable, que es el tratamiento. Corregir la hipovolemia, que es el factor que más amplifica la toxicidad de casi todos. Y ajustar la dosis de lo que no se pueda retirar.',
      tx_farmacologico: 'En la nefritis intersticial que no mejora tras la retirada, valorar corticoides. Sobre la prevención de la nefropatía por contraste, lo único con respaldo es la HIDRATACIÓN con cristaloide en el paciente de riesgo: la N-acetilcisteina y el bicarbonato no demostraron beneficio frente a suero salino en un ensayo amplio.',
      tx_intervencionista: 'No aplica, salvo la depuración si el tóxico es dializable.',
      criterios_uci: 'Los generales, según la gravedad de las complicaciones metabólicas.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Anotar el fármaco como ALERGIA o como evento adverso en la historia, para que no se vuelva a pautar. Es un paso administrativo que se omite y que garantiza la repetición del problema.',
      seguimiento_ambulatorio: 'Control de la función renal tras la retirada y revisión de la medicación crónica, sobre todo la combinación de antiinflamatorios, inhibidores del sistema renina-angiotensina y diuréticos.',
      pronostico: 'Bueno si se retira pronto el responsable. La nefritis intersticial de larga evolución puede dejar fibrosis y pérdida definitiva de función.',
      algoritmo: ['Revisar TODA la medicación, incluida la que el paciente no considera medicamento', 'Buscar la combinación de antiinflamatorio, inhibidor del eje y diurético', 'Retirar lo que se pueda retirar', 'Ajustar la dosis de lo que no', 'Corregir la hipovolemia, que amplifica toda toxicidad', 'Pensar en nefritis intersticial y mirar el sedimento', 'No negar una prueba con contraste necesaria por miedo desproporcionado', 'Hidratar con cristaloide al paciente de riesgo que va a recibir contraste', 'No usar N-acetilcisteina ni bicarbonato como profilaxis', 'Anotar el fármaco responsable en la historia']
    },
    {
      nombre: 'Complicaciones agudas y depuración extrarrenal',
      color: '#8c3a5c',
      definicion: 'Conjunto de alteraciones metabólicas y de volumen derivadas de la pérdida de función renal, y decisión sobre cuando sustituirla.',
      fisiopatologia: 'Al caer el filtrado se acumulan agua, potasio, hidrogeniones y productos nitrogenados. La HIPERPOTASEMIA es la que amenaza la vida en horas, porque despolariza la membrana celular y altera la conducción cardiaca de forma progresiva hasta la parada. La acidosis metabólica agrava la hiperpotasemia al desplazar potasio fuera de la célula, de modo que ambas se retroalimentan. La sobrecarga de volumen produce edema pulmonar y, menos reconocido, congestión venosa del propio riñón, que empeora su función y cierra otro círculo. Y la uremia, cuando es marcada, produce encefalopatía, pericarditis y disfunción plaquetaria con sangrado.',
      epidemiologia: 'Una parte de los pacientes con lesión renal aguda grave necesita depuración extrarrenal. La pregunta del momento de inicio se ha estudiado en varios ensayos aleatorizados amplios, cuyo resultado global es que adelantarse por sistema no mejora la supervivencia.',
      factores_riesgo: ['Estadio 3 de lesión renal aguda', 'Oliguria o anuria mantenidas', 'Acidosis metabólica grave', 'Hiperpotasemia recurrente', 'Balance hídrico muy positivo', 'Sepsis concomitante', 'Síndrome de lisis tumoral y rabdomiólisis', 'Insuficiencia cardiaca con congestión refractaria', 'Intoxicación por tóxico dializable', 'Aporte obligado de volumen, como la nutrición parenteral'],
      clinica: 'HIPERPOTASEMIA: con frecuencia asintomática hasta que aparecen las alteraciones del electrocardiograma, que evolucionan desde ondas T picudas hasta ensanchamiento del QRS y ritmo sinusoidal. SOBRECARGA: disnea, crepitantes, edemas y aumento de peso. UREMIA: náuseas, somnolencia, asterixis, roce pericárdico y sangrado.',
      criterios_dx: 'Las indicaciones de depuración se recuerdan con una regla de cinco letras y se detallan en la Figura 3 de Definición.',
      laboratorio: 'POTASIO con electrocardiograma inmediato si esta elevado. Gasometría, bicarbonato, urea, calcio, fósforo, magnesio y hemograma. Y control frecuente durante el tratamiento.',
      imagen: 'Radiografía y ecografía pulmonar para valorar la sobrecarga. Ecocardiograma si se sospecha derrame pericárdico.',
      complementarios: 'ELECTROCARDIOGRAMA ante cualquier hiperpotasemia relevante, que es la prueba que decide la urgencia del tratamiento. Balance y peso diarios.',
      dx_diferencial: 'De la hiperpotasemia: seudohiperpotasemia por hemólisis de la muestra o por trombocitosis, que se descarta repitiendo la extracción y evita tratamientos innecesarios.',
      tx_medico: 'HIPERPOTASEMIA: calcio para estabilizar la membrana si hay alteraciones electrocardiográficas, insulina con glucosa y agonistas beta para introducir potasio en la célula, y después quelantes o depuración para ELIMINARLO, porque lo anterior solo lo redistribuye. SOBRECARGA: restricción, diuréticos si responde y depuración si no.',
      tx_farmacologico: 'El de cada complicación. Bicarbonato en la acidosis grave. Y ajuste de todos los fármacos, porque la sobredosificación en el paciente con lesión renal es una fuente constante de yatrogenia.',
      tx_intervencionista: 'DEPURACIÓN EXTRARRENAL. En el paciente inestable se prefieren las técnicas continuas por su mejor tolerancia hemodinámica, aunque no han demostrado ventaja en supervivencia frente a la intermitente.',
      criterios_uci: 'Hiperpotasemia grave con alteraciones electrocardiográficas, acidosis refractaria, sobrecarga con insuficiencia respiratoria, uremia sintomática y necesidad de depuración continua.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica en la fase aguda.',
      seguimiento_hospitalario: 'Vigilar el síndrome de desequilibrio en las primeras sesiones, la hipotensión intradialisis y las complicaciones del catéter. Y revisar cada dia si la depuración sigue haciendo falta, porque también hay que saber retirarla.',
      seguimiento_ambulatorio: 'Los que quedan dependientes de diálisis pasan a un programa crónico. Los que se recuperan necesitan control de función renal y de proteinuria.',
      pronostico: 'La necesidad de depuración marca peor pronóstico, aunque en parte refleja la gravedad global del paciente. Una parte relevante de los supervivientes recupera función suficiente para salir de diálisis.',
      algoritmo: ['Comprobar el POTASIO y hacer electrocardiograma si esta alto', 'Dar calcio si hay alteraciones electrocardiográficas', 'Redistribuir con insulina y glucosa, y agonistas beta', 'Eliminar el potasio de verdad: quelante o depuración', 'Valorar la acidosis y la sobrecarga', 'Buscar síntomas urémicos: asterixis, roce, sangrado', 'Repasar las cinco indicaciones que no se discuten', 'Si no cumple ninguna, NO adelantarse por sistema', 'Elegir técnica continua si el paciente esta inestable', 'Reevaluar a diario si la depuración sigue siendo necesaria']
    },
    {
      nombre: 'Después del episodio: enfermedad renal aguda y seguimiento',
      color: '#6b4a8c',
      definicion: 'Periodo que sigue a la lesión renal aguda, en el que la función puede recuperarse por completo, quedar parcialmente alterada o evolucionar hacia enfermedad renal crónica.',
      fisiopatologia: 'La reparación del epitelio tubular no siempre es perfecta. Cuando el daño es intenso o repetido, la regeneración se acompaña de transición hacia un fenotipo profibrotico, con infiltrado inflamatorio persistente, rarefaccion capilar e hipoxia crónica del intersticio. Las nefronas pérdidas no se reponen y las restantes hiperfiltran, lo que a medio plazo produce esclerosis. Ese es el sustrato de que un episodio agudo, aunque parezca resuelto, deje al paciente en una trayectoria distinta. Y explica también por que la lesión RECURRENTE es especialmente dañina.',
      epidemiologia: 'Un episodio de lesión renal aguda multiplica el riesgo posterior de enfermedad renal crónica, de enfermedad cardiovascular y de mortalidad, y el riesgo aumenta con la gravedad y con el número de episodios. Pese a ello, el seguimiento tras el alta es la excepción y no la norma.',
      factores_riesgo: ['Estadio elevado del episodio', 'Duración prolongada de la lesión', 'Episodios repetidos', 'Necesidad de depuración extrarrenal', 'Enfermedad renal crónica previa', 'Edad avanzada', 'Diabetes e hipertensión', 'Insuficiencia cardiaca', 'Proteinuria residual', 'Ausencia de seguimiento tras el alta'],
      clinica: 'Habitualmente silente. El paciente sale del hospital con una creatinina que parece aceptable y nadie vuelve a mirarla. Los síntomas, cuando aparecen, ya corresponden a una enfermedad renal crónica avanzada.',
      criterios_dx: 'Se habla de ENFERMEDAD RENAL AGUDA en el periodo que va desde los 7 días hasta los 3 meses tras el episodio. Los criterios de resolución completa y parcial se detallan en la calculadora del tema.',
      laboratorio: 'Creatinina y filtrado estimado, cociente albúmina-creatinina en orina, iones y hemograma. La PROTEINURIA residual es el mejor marcador de que ha quedado daño y el que más se olvida pedir.',
      imagen: 'Ecografía de control si hubo obstrucción o si se sospecha enfermedad estructural. No es necesaria de rutina.',
      complementarios: 'Una consulta de revisión a los 3 meses, con analítica y con revisión de la medicación. Es una intervención sencilla, barata y prácticamente inexistente en la práctica.',
      dx_diferencial: 'Enfermedad renal crónica preexistente no diagnosticada, que se distingue por los valores previos si existen, por la anemia y por las alteraciones del metabolismo mineral.',
      tx_medico: 'Control de la tensión arterial, de la diabetes y del peso. Revisión de la medicación crónica para evitar la reexposición a nefrotóxicos. Y educación del paciente sobre las situaciones de riesgo, como los días de enfermedad aguda con vómitos o diarrea, en los que conviene suspender temporalmente ciertos fármacos.',
      tx_farmacologico: 'Reintroducir con criterio los inhibidores del sistema renina-angiotensina cuando esten indicados por otra razón, que es una decisión que se pospone indefinidamente por miedo y que tiene coste. Valorar los inhibidores del cotransportador de sodio y glucosa según la indicación.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Los pacientes que no recuperan función entran en la via de la enfermedad renal crónica avanzada, con su propia valoración.',
      seguimiento_hospitalario: 'Antes del alta: documentar el episodio en el informe con su estadio y su causa, indicar que fármacos se retiraron y por que, y dejar una CITA de revisión. Sin eso, la información se pierde.',
      seguimiento_ambulatorio: 'Analítica con creatinina y COCIENTE ALBÚMINA-CREATININA a los 3 meses. Si no ha recuperado, seguimiento como enfermedad renal crónica. Y evitar la reexposición a nefrotóxicos.',
      pronostico: 'Mejor cuanto más leve, más corto y más único haya sido el episodio. La ausencia de seguimiento no cambia el pronóstico biológico pero si la posibilidad de intervenir sobre el.',
      algoritmo: ['Documentar en el informe el estadio y la causa del episodio', 'Anotar los fármacos retirados y el motivo', 'Comprobar la función al alta y no asumir que se ha recuperado', 'Valorar la resolución completa o parcial a los 7 días', 'Dejar una CITA de revisión a los 3 meses', 'Pedir creatinina y cociente albúmina-creatinina en esa revisión', 'Revisar la medicación crónica para evitar la reexposición', 'Reintroducir con criterio los fármacos indicados por otra razón', 'Educar sobre los días de enfermedad aguda', 'Si no ha recuperado, seguir como enfermedad renal crónica']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Casi todo lo que funciona en la lesión renal aguda consiste en dejar de hacer daño: retirar nefrotóxicos, ajustar dosis, no sobrecargar de volumen y desobstruir. No hay ningún fármaco que acelere la recuperación del riñón.',
    parametros: ['Rescatar la creatinina BASAL para poder aplicar los criterios', 'Medir de verdad la DIURESIS, que avisa antes que la creatinina', 'Hacer ECOGRAFÍA y medir la vejiga en las primeras horas', 'Mirar el SEDIMENTO urinario, que es la prueba más rentable', 'No interpretar la excreción fraccional de sodio si hay diuréticos', 'Revisar y retirar los nefrotóxicos cada dia', 'Ajustar TODOS los fármacos a la función renal', 'No usar dopamina ni diuréticos para proteger el riñón', 'Vigilar el POTASIO y hacer electrocardiograma si esta alto', 'Pasar a balance negativo cuando la perfusión lo permita', 'No adelantar la depuración en quien no cumple indicación', 'Dejar CITA de revisión a los 3 meses antes del alta'],
    criterios_uci_general: 'Hiperpotasemia grave o con alteraciones electrocardiográficas, acidosis metabólica grave y refractaria, sobrecarga de volumen con compromiso respiratorio, uremia sintomática con encefalopatía o pericarditis, intoxicación por un tóxico dializable, y necesidad de depuración extrarrenal en un paciente hemodinámicamente inestable, en el que se prefieren las técnicas continuas por su mejor tolerancia.',
    criterios_tips_general: 'No aplica a este tema de forma general. En el síndrome hepatorrenal, el manejo tiene su propio marco y se detalla en el tema de cirrosis hepática.',
    criterios_trasplante_general: 'No aplica en la fase aguda. Los pacientes que no recuperan función pasan a la via de la enfermedad renal crónica avanzada, con su propia valoración de trasplante.',
    prevencion: 'Primaria: identificar al paciente susceptible (enfermedad renal crónica, edad avanzada, diabetes, insuficiencia cardiaca, cirrosis) y protegerlo de forma activa, evitando la hipovolemia, la combinación de antiinflamatorio con inhibidor del sistema renina-angiotensina y diurético, y los nefrotóxicos evitables; hidratar con cristaloide antes del contraste en el paciente de riesgo, sabiendo que la N-acetilcisteina y el bicarbonato no demostraron beneficio; y no negar una prueba con contraste necesaria por un miedo desproporcionado. Secundaria: detección precoz vigilando la DIURESIS y no solo la creatinina, y revisión estructurada de la medicación en cuanto se detecta el ascenso. Terciaria: documentar el episodio en el informe de alta, dejar una cita de revisión a los 3 meses con creatinina y cociente albúmina-creatinina, y evitar la reexposición, porque un episodio multiplica el riesgo de enfermedad renal crónica posterior y el seguimiento sigue siendo la excepción.'
  }
};

// Las citas de cada ficha estaban en forma PLANA (un array por ficha). El motor normaliza esa
// forma anclandola SOLO al campo `definicion` (ver openModal en engine/study-view.js), de modo
// que criterios_dx, laboratorio y tx_farmacologico no pintaban ninguna cita aunque las fuentes
// de la ficha si estuvieran declaradas. Convertido a la forma por campo el 2/11/2026: se reparten
// a esos tres campos las fuentes que la ficha ya declaraba, y `definicion` queda igual para que
// lo que ya se veia no cambie. La precision es de FICHA, no de campo: afinar cual de las fuentes
// sostiene cada campo es una pasada posterior (ver .claude/atribucion-citas.md).
export const compCites = {
  'Criterios, estadio y reconocimiento precoz': { definicion: [1, 2, 9], criterios_dx: [1, 2, 9], laboratorio: [1, 2, 9], tx_farmacologico: [1, 2, 9] },
  'Prerrenal, renal y posrenal': { definicion: [9, 10], criterios_dx: [9, 10], laboratorio: [9, 10], tx_farmacologico: [9, 10] },
  'Necrosis tubular aguda en el paciente crítico': { definicion: [1, 14, 16], criterios_dx: [1, 16], laboratorio: [1, 16], tx_farmacologico: [1, 14, 16] },
  'Nefrotoxicidad por fármacos y contraste': { definicion: [4, 11, 12], criterios_dx: [4, 11, 12], laboratorio: [4, 11, 12], tx_farmacologico: [4, 11, 12] },
  'Complicaciones agudas y depuración extrarrenal': { definicion: [5, 6, 7, 8, 15], criterios_dx: [5, 6, 8, 15], laboratorio: [5, 6, 8, 15], tx_farmacologico: [5, 6, 7, 8, 15] },
  'Después del episodio: enfermedad renal aguda y seguimiento': { definicion: [2, 3, 13], criterios_dx: [2, 3, 13], laboratorio: [2, 3, 13], tx_farmacologico: [2, 3, 13] }
};
export const estigmasTitulo = 'Datos que cambian la conducta';
export const estigmas = [
  { s: 'Creatinina que aun no ha subido', p: 'Llega tarde', photo: null, desc: 'Es un marcador tardío: cuando asciende ya se ha perdido buena parte del filtrado. En el paciente crítico, además, la pérdida de masa muscular y la dilución por fluidos la mantienen falsamente baja.' },
  { s: 'Diuresis no cuantificada', p: 'El criterio que se pierde', photo: null, desc: 'La diuresis cae antes que sube la creatinina y es gratis, pero es el dato peor registrado del hospital. Cuantificarla de verdad, con sonda si hace falta, adelanta el diagnóstico horas.' },
  { s: 'Sedimento limpio', p: 'Prerrenal u obstructivo', photo: null, desc: 'El sedimento es la prueba más rentable y la más olvidada de todo el tema. Un sedimento limpio en un paciente con creatinina en ascenso orienta a hipoperfusión o a obstrucción, no a daño del parénquima.' },
  { s: 'Cilindros granulosos pardos', p: 'Necrosis tubular', photo: null, desc: 'Son células tubulares descamadas y detritus. Su presencia confirma que el daño ya no es funcional sino estructural, y que dar más volumen no va a resolver nada.' },
  { s: 'Hematies dismorficos y cilindros hemáticos', p: 'Lesión glomerular', photo: null, desc: 'Cambian por completo el estudio: obligan a pedir inmunologia sin demora y a plantear biopsia, porque hay glomerulonefritis rápidamente progresivas que se tratan y cuyo retraso cuesta el riñón.' },
  { s: 'Excreción fraccional de sodio con diuréticos', p: 'No es interpretable', photo: null, desc: 'Los diuréticos la elevan y la inutilizan. En ese caso hay que usar la excreción fraccional de UREA. Y hay causas renales con sodio bajo: contraste, rabdomiólisis y síndrome hepatorrenal.' },
  { s: 'Paciente que orina con obstrucción', p: 'La parcial no anuria', photo: null, desc: 'Una obstrucción parcial puede cursar con diuresis conservada, e incluso con poliuria. Que el paciente orine no descarta la obstrucción, y por eso la ecografía se hace igual.' },
  { s: 'Ecografía sin dilatación', p: 'Tampoco descarta del todo', photo: null, desc: 'Hay dos falsos negativos que conviene conocer: la obstrucción muy precoz, antes de que de tiempo a dilatar, y la asociada a fibrosis retroperitoneal, donde el sistema colector queda atrapado y no se dilata.' },
  { s: 'Ondas T picudas', p: 'Hiperpotasemia', photo: null, desc: 'El electrocardiograma decide la urgencia del tratamiento. La progresión va de ondas T picudas a aplanamiento de la P, ensanchamiento del QRS y ritmo sinusoidal, que precede a la parada.' },
  { s: 'Insulina y glucosa en la hiperpotasemia', p: 'Redistribuyen, no eliminan', photo: null, desc: 'El calcio estabiliza la membrana y la insulina introduce el potasio en la célula, pero ninguno lo saca del cuerpo. Sin un quelante o depuración, el potasio vuelve a subir en unas horas.' },
  { s: 'Balance positivo acumulado', p: 'Congestiona el riñón', photo: null, desc: 'La sobrecarga no solo produce edema pulmonar: la congestión venosa del propio riñón empeora su función. Y la dilución baja la creatinina, haciendo parecer mejor una función que no lo esta.' },
  { s: 'Alta sin cita de revisión', p: 'La omisión más repetida', photo: null, desc: 'Un episodio de lesión renal aguda multiplica el riesgo de enfermedad renal crónica posterior, y sin embargo el seguimiento tras el alta es la excepción. Basta una analítica a los 3 meses con creatinina y cociente albúmina-creatinina.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Criterios y estadio (calculadora disponible)': [1, 2],
  'Lesión transitoria frente a persistente': [2, 3],
  'Orientación prerrenal, renal o posrenal (calculadora disponible)': [9, 10],
  'Indicación de depuración extrarrenal (calculadora disponible)': [5, 6, 7, 8],
  'Criterios de resolución': [2, 3],
  'Riesgo de enfermedad renal crónica posterior': [13, 3]
};
export const escalaCalc = {
  'Criterios y estadio (calculadora disponible)': 'kdigo-lra',
  'Orientación prerrenal, renal o posrenal (calculadora disponible)': 'localizar-lra',
  'Indicación de depuración extrarrenal (calculadora disponible)': 'indicacion-depuracion'
};
export const compGroups = [
  { name: 'Reconocer', items: ['Criterios, estadio y reconocimiento precoz', 'Prerrenal, renal y posrenal'] },
  { name: 'Las causas del hospital', items: ['Necrosis tubular aguda en el paciente crítico', 'Nefrotoxicidad por fármacos y contraste'] },
  { name: 'Tratar y después', items: ['Complicaciones agudas y depuración extrarrenal', 'Después del episodio: enfermedad renal aguda y seguimiento'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son el reconocimiento: los criterios y el estadio, con la advertencia de que la creatinina llega tarde, y la localización del mecanismo, que es lo que orienta el tratamiento y donde están las dos cosas que se resuelven en minutos y se olvidan a diario. Las dos siguientes son las causas que de verdad se ven en el hospital: la necrosis tubular del paciente crítico y la nefrotoxicidad, que es la más prevenible de todas. Y las dos últimas son lo que viene después: las complicaciones que pueden matar en horas junto con la decisión de depurar, y el seguimiento tras el alta, que es la omisión más repetida de todo el tema.';
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
      { title: 'Transitoria o persistente', sub: 'Más de 48 horas cambia todo', color: '#6b4a8c', target: 'clasificacion' }
    ] },
    { title: 'LOCALIZAR', sub: 'Antes de razonar, dos gestos', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: 'Ecografía y vejiga', sub: 'La obstrucción se resuelve ya', color: '#6b4a8c', target: 'diagnostico' },
      { title: 'Lista de fármacos', sub: 'Lo más prevenible', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Sedimento', sub: 'La prueba más rentable', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Sodio urinario', sub: 'Inútil si toma diuréticos', color: '#3f6b52', target: 'clasificacion' }
    ] },
    { title: 'TRATAR', sub: 'Sobre todo, dejar de dañar', color: '#8c3a5c', target: 'complicaciones', leaves: [
      { title: 'Retirar nefrotóxicos', sub: 'Y ajustar todo lo demás', color: '#8a6a1f', target: 'seguimiento' },
      { title: 'Vigilar el potasio', sub: 'Es lo que mata en horas', color: '#8c3a5c', target: 'complicaciones' },
      { title: 'Depurar si hay indicación', sub: 'Adelantarse no mejora nada', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Cita a los 3 meses', sub: 'La omisión más repetida', color: '#6b4a8c', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2, 10], no_invasivos: [1, 2, 9], imagen: [9, 4] };
export const clasificacionCite = [1, 2, 3];
export const seguimientoCite = [1, 4, 13];
