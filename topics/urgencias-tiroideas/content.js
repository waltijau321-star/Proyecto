// topics/urgencias-tiroideas/content.js: Urgencias Tiroideas (tormenta tiroidea y coma mixedematoso).
// Cubre el item "Tormenta tiroidea y coma mixedematoso" del cluster Tiroides y paratiroides
// (bloque VII, Endocrinologia y Metabolismo) del temario. Tercero de los cinco temas del eje
// tiroideo, separado como tema propio por el mismo criterio con el que la cetoacidosis diabetica
// y el estado hiperosmolar se separaron de la diabetes: la urgencia se estudia sola.
//
// Fuentes principales: escala de Burch y Wartofsky; guias de la Japan Thyroid Association y la
// Japan Endocrine Society para la tormenta tiroidea; guia de la American Thyroid Association
// para el hipertiroidismo; sistema de puntuacion diagnostica de Popoveniuc para el coma
// mixedematoso; y las series nacionales japonesas y europeas de tormenta tiroidea en la UCI.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 2 presentaciones (tormenta tiroidea, coma mixedematoso) + 3 complicaciones
// (complicaciones cardiovasculares de la tormenta; complicaciones del coma mixedematoso; errores
// de tratamiento). 2 calculadoras, 2 figuras.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'urgencias-tiroideas',
  titulo: 'Urgencias Tiroideas',
  subtitulo: 'Módulo 45 · Medicina Interna',
  accent: '#8c2f39',
  accentDim: '#d5a2a8'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const tormentaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c2f39;border-radius:8px;padding:5px 9px;background:#8c2f3912;margin-bottom:6px;">
    <strong style="color:#8c2f39;">Los cinco carriles corren A LA VEZ, no en secuencia.</strong> <span style="color:var(--ink-dim);">La tormenta no espera a que un fármaco haga efecto para empezar el siguiente. El único orden que importa es que la tionamida va <strong>antes</strong> que el yodo.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">1. Bloquear la<br>SÍNTESIS</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">PROPILTIOURACILO</strong> 500 a 1000 mg de carga y después 200 a 250 mg cada 4 horas. Se prefiere al metimazol en la crisis porque además <strong>bloquea la conversión periférica de T4 en T3</strong>. Si no se dispone, metimazol 20 a 25 mg cada 4 a 6 horas. Por sonda o por via rectal si el paciente no traga.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">2. Bloquear la<br>LIBERACIÓN</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">YODO</strong>: solución de Lugol 8 a 10 gotas cada 6 a 8 horas, o solución saturada de yoduro potasico 5 gotas cada 6 horas. <strong style="color:#8c3a34;">SIEMPRE al menos 1 hora DESPUÉS de la tionamida</strong>, o se estara aportando sustrato a una glándula desbocada. Si la crisis es por sobrecarga de yodo, el yodo no sirve.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">3. Bloquear el<br>EFECTO y la<br>CONVERSIÓN</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">PROPRANOLOL</strong> 60 a 80 mg cada 4 horas por via oral, o 0.5 a 1 mg intravenoso lento con monitorización. Controla frecuencia, temblor, agitación y fiebre, y a dosis altas frena la conversión. <strong style="color:var(--ink);">HIDROCORTISONA</strong> 100 mg cada 8 horas (o dexametasona 2 mg cada 6 horas): frena la conversión y cubre la insuficiencia suprarrenal relativa. Si hay insuficiencia cardiaca, esmolol en perfusión, titulable y reversible.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">4. SOPORTE y<br>PRECIPITANTE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Enfriamiento físico y <strong>PARACETAMOL</strong> para la fiebre. Sueroterapia con glucosa (las reservas de glucógeno están agotadas) y tiamina. Corregir electrolitos. <strong style="color:#8c3a34;">Buscar y tratar el precipitante</strong>: infección, cirugía, parto, cetoacidosis, contraste yodado, retirada del antitiroideo, traumatismo o embolia pulmonar. Profilaxis antitrombótica.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a2e22;border:1px solid #6b4a2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a2e;">5. RESCATE si<br>no responde</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Colestiramina</strong> 4 g cada 6 horas, que interrumpe la circulación enterohepatica de la hormona. Si no hay respuesta en 24 a 48 horas: <strong>plasmaféresis</strong>, y después tiroidectomía una vez estabilizado. La plasmaféresis retira hormona circulante y sirve de puente a la cirugía.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Dos cosas que NO se hacen.</strong> No dar <strong>ácido acetilsalicílico</strong> como antipirético: desplaza la hormona de sus proteínas transportadoras y sube la fracción libre. Y no esperar a las hormonas para tratar: <strong>la tormenta es un diagnóstico clínico</strong> y no hay ninguna cifra de T4 o de T3 que la defina ni la excluya.
  </div>
</div>`;

const mixedemaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #4a6fa5;border-radius:8px;padding:5px 9px;background:#4a6fa512;margin-bottom:6px;">
    <strong style="color:#4a6fa5;">El error que mata aquí no es la dosis de hormona: es el orden.</strong> <span style="color:var(--ink-dim);">El <strong>glucocorticoide va antes o a la vez</strong> que la levotiroxina, siempre.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">1. ESTEROIDE<br>PRIMERO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">HIDROCORTISONA</strong> 100 mg intravenosos cada 8 horas, tras extraer una muestra para cortisol. La insuficiencia suprarrenal coexiste con frecuencia (hipotiroidismo central o síndrome poliglandular), y la hormona tiroidea acelera el aclaramiento del cortisol: darla primero puede precipitar una <strong>crisis addisoniana</strong>. Se mantiene hasta descartar el déficit.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#4a6fa522;border:1px solid #4a6fa5;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#4a6fa5;">2. HORMONA<br>INTRAVENOSA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">LEVOTIROXINA</strong> 200 a 400 microgramos intravenosos de carga (dosis menor en ancianos, bajo peso o cardiopatía coronaria), seguida de 50 a 100 microgramos al dia. La via oral no es fiable: hay íleo y edema de la mucosa. Anadir <strong>liotironina</strong> 5 a 20 microgramos de carga y 2.5 a 10 microgramos cada 8 horas es razonable porque la conversión periférica esta frenada, pero aumenta el riesgo de arritmia en el anciano.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">3. VIA AÉREA y<br>TEMPERATURA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La causa inmediata de muerte suele ser la <strong>hipoventilación con hipercapnia</strong>: umbral bajo para intubar y ventilar. Recalentamiento <strong>PASIVO</strong> con mantas: el calentamiento activo produce vasodilatación periférica y colapso circulatorio. Evitar sedantes y opioides, cuyo metabolismo esta enlentecido.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">4. SODIO y<br>GLUCOSA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Hiponatremia</strong> por deterioro del aclaramiento de agua libre: restricción hídrica, y salino hipertónico solo si es grave o sintomática, con corrección lenta para no provocar desmielinización osmótica. <strong style="color:var(--ink);">Hipoglucemia</strong>: glucosa intravenosa. Cuidado con la sobrecarga de volumen, mal tolerada por la bradicardia y el posible derrame pericárdico.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a2e22;border:1px solid #6b4a2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a2e;">5. PRECIPITANTE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Casi siempre hay uno: <strong>infección</strong> (la más frecuente, y a menudo sin fiebre ni leucocitosis por el propio hipotiroidismo), exposición al frío, sedantes u opioides, amiodarona, litio, abandono de la levotiroxina, ictus, infarto, hemorragia digestiva o cirugía. Umbral bajo para antibioterapia empírica.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8c2f39;border-radius:8px;background:#8c2f3910;color:var(--ink-dim);">
    <strong style="color:#8c2f39;">Mortalidad del 20 al 40% incluso bien tratado.</strong> Los factores de mal pronóstico son la edad avanzada, la hipotermia que no remonta en las primeras 72 horas, la bradicardia persistente, la hipotensión que requiere vasopresores y la necesidad de ventilación mecánica. Como en la tormenta, <strong>el tratamiento se inicia con la sospecha clínica</strong>, sin esperar al perfil tiroideo.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La tormenta tiroidea y el coma mixedematoso son los dos extremos descompensados del eje tiroideo. Tienen tres cosas en común que conviene fijar desde el principio: son <strong>diagnósticos clínicos</strong> y ninguna cifra hormonal los define, <strong>casi siempre hay un precipitante</strong> que hay que buscar activamente, y el tratamiento <strong>se inicia con la sospecha</strong>, sin esperar a la confirmación analítica. Son raros, y precisamente por eso se reconocen tarde: la mortalidad de ambos sigue estando entre el 10 y el 40%.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Por que un hipertiroidismo se convierte en tormenta.</strong></p>
<p style="margin:0 0 12px;">La respuesta honesta es que no se sabe del todo. Los niveles hormonales de un paciente en tormenta <strong>no difieren</strong> de los de un hipertiroideo grave sin ella, de modo que la explicación no esta en la cantidad de hormona sino en el cambio brusco de su fracción libre y en la respuesta del huésped. Las hipótesis con más apoyo son el <strong>ascenso rápido de la hormona libre</strong> (por cirugía sobre una glándula no preparada, por retirada del antitiroideo, por carga de yodo o por desplazamiento de la unión a proteínas en una enfermedad aguda) y una <strong>hiperactividad adrenergica desproporcionada</strong>, con aumento de receptores beta. De ahi que el propranolol y el glucocorticoide sean tan centrales en el tratamiento.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se reconoce la tormenta.</strong></p>
<p style="margin:0 0 12px;">Un hipertiroideo <strong>con disfunción orgánica</strong>. Los cuatro dominios que hay que buscar son la <strong>termorregulación</strong> (fiebre desproporcionada, a menudo por encima de 38.5 grados y sin foco), el <strong>sistema nervioso central</strong> (agitación, delirio, psicosis, convulsión o coma), el <strong>aparato digestivo y el hígado</strong> (náuseas, vómitos, diarrea, dolor abdominal e ictericia sin causa, que es signo de mal pronóstico) y el <strong>corazón</strong> (taquicardia desproporcionada a la fiebre, fibrilación auricular, insuficiencia cardiaca). La escala de <strong>Burch y Wartofsky</strong> ordena estos dominios en una puntuación (calculadora disponible), pero es una ayuda para decidir, no un criterio diagnóstico: se trata al paciente, no a la puntuación.</p>
${figBlock('Figura 1', 'Tormenta tiroidea: los cinco carriles del tratamiento', tormentaHtml)}
<p style="margin:0 0 12px;">El tratamiento se entiende siguiendo el recorrido de la hormona: se bloquea su <strong>síntesis</strong> con la tionamida, su <strong>liberación</strong> con el yodo, su <strong>conversión y su efecto</strong> con propranolol y glucocorticoide, y su <strong>reciclaje</strong> con colestiramina. A eso se anaden el soporte y el tratamiento del precipitante. La única regla de orden es que <strong>el yodo va al menos una hora después de la tionamida</strong>; todo lo demás corre en paralelo.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El otro extremo: el coma mixedematoso.</strong></p>
<p style="margin:0 0 12px;">Es la descompensación de un hipotiroidismo grave y de larga evolución, casi siempre en una <strong>mujer anciana en invierno</strong> con hipotiroidismo no diagnosticado o con levotiroxina abandonada. El nombre engaña dos veces: no siempre hay coma (basta con alteración del nivel de conciencia) y el mixedema no es lo más grave. Lo que define el cuadro es la <strong>triada de alteración de la conciencia, hipotermia sin escalofríos y un precipitante</strong>, sobre un fondo de bradicardia, hipoventilación con hipercapnia, hiponatremia e hipoglucemia.</p>
${figBlock('Figura 2', 'Coma mixedematoso: los cinco carriles del tratamiento', mixedemaHtml)}
<p style="margin:0 0 12px;">Aquí el orden si importa, y mucho: <strong>el glucocorticoide va antes o a la vez que la levotiroxina</strong>, porque la hormona tiroidea acelera el aclaramiento del cortisol y puede desencadenar una crisis suprarrenal en un paciente con déficit no reconocido. El resto del tratamiento es hormona intravenosa (la absorción digestiva no es fiable con íleo y edema de mucosa), soporte ventilatorio con umbral bajo para intubar, recalentamiento <strong>pasivo</strong> y corrección prudente del sodio y de la glucosa.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Las trampas del laboratorio en las dos.</strong></p>
<p style="margin:0 0 12px;">En la tormenta, la T4 y la T3 pueden ser idénticas a las de un hipertiroideo estable, y la T3 incluso normal si el paciente tiene además una enfermedad aguda grave que frena la conversión: una T3 normal <strong>no descarta</strong> la tormenta. En el coma mixedematoso, la TSH esta muy alta si el origen es primario, pero puede ser normal o baja si es central o si hay dopamina o glucocorticoides en curso, de modo que <strong>una TSH poco elevada no descarta el cuadro</strong> y hay que mirar la T4 libre. En ambos, extraer la muestra no debe retrasar el tratamiento ni un minuto.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No dar ácido acetilsalicílico como antipirético en la tormenta. No dar yodo antes que la tionamida. No recalentar de forma activa al paciente con coma mixedematoso. No dar levotiroxina antes que el glucocorticoide. No sedar sin necesidad a un hipotiroideo grave. Y no esperar al perfil tiroideo para empezar en ninguno de los dos.</p>`;

export const bibliografia = [
  'Burch HB, Wartofsky L. Life-threatening thyrotoxicosis: thyroid storm. Endocrinol Metab Clin North Am. 1993;22(2):263-277.',
  'Ross DS, Burch HB, Cooper DS, et al. 2016 American Thyroid Association guidelines for diagnosis and management of hyperthyroidism and other causes of thyrotoxicosis. Thyroid. 2016;26(10):1343-1421.',
  'Satoh T, Isozaki O, Suzuki A, et al. 2016 Guidelines for the management of thyroid storm from the Japan Thyroid Association and Japan Endocrine Society. Endocr J. 2016;63(12):1025-1064.',
  'Akamizu T, Satoh T, Isozaki O, et al. Diagnostic criteria, clinical features, and incidence of thyroid storm based on nationwide surveys. Thyroid. 2012;22(7):661-679.',
  'Chiha M, Samarasinghe S, Kabaker AS. Thyroid storm: an updated review. J Intensive Care Med. 2015;30(3):131-140.',
  'Isozaki O, Satoh T, Wakino S, et al. Treatment and management of thyroid storm: analysis of the nationwide surveys. Clin Endocrinol (Oxf). 2016;84(6):912-918.',
  'Bourcier S, Coutrot M, Kimmoun A, et al. Thyroid storm in the ICU: a retrospective multicenter study. Crit Care Med. 2020;48(1):83-90.',
  'Ono Y, Ono S, Yasunaga H, Matsui H, Fushimi K, Tanaka Y. Factors associated with mortality of thyroid storm: analysis using a national inpatient database in Japan. Medicine (Baltimore). 2016;95(7):e2848.',
  'Popoveniuc G, Chandra T, Sud A, et al. A diagnostic scoring system for myxedema coma. Endocr Pract. 2014;20(8):808-817.',
  'Klubo-Gwiezdzinska J, Wartofsky L. Thyroid emergencies. Med Clin North Am. 2012;96(2):385-403.',
  'Mathew V, Misgar RA, Ghosh S, et al. Myxedema coma: a new look into an old crisis. J Thyroid Res. 2011;2011:493462.',
  'Rodriguez I, Fluiters E, Perez-Mendez LF, Luna R, Paramo C, Garcia-Mayor RV. Factors associated with mortality of patients with myxoedema coma. J Endocrinol. 2004;180(2):347-350.',
  'Dubbs SB, Spangler R. Hypothyroidism: causes, killers, and life-saving treatments. Emerg Med Clin North Am. 2014;32(2):303-317.',
  'Jonklaas J, Bianco AC, Bauer AJ, et al. Guidelines for the treatment of hypothyroidism: prepared by the American Thyroid Association task force on thyroid hormone replacement. Thyroid. 2014;24(12):1670-1751.',
  'Wartofsky L. Myxedema coma. Endocrinol Metab Clin North Am. 2006;35(4):687-698.',
  'Carroll R, Matfin G. Endocrine and metabolic emergencies: thyroid storm. Ther Adv Endocrinol Metab. 2010;1(3):139-145.',
  'Muller C, Perrin P, Faller B, Richter S, Chantrel F. Role of plasma exchange in the thyroid storm. Ther Apher Dial. 2011;15(6):522-531.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Tormenta tiroidea',
      tituloB: 'Coma mixedematoso',
      compensada: 'Hipertiroideo con DISFUNCIÓN ORGÁNICA. Fiebre desproporcionada, a menudo por encima de 38.5 grados y sin foco, con sudoración profusa. Alteración del sistema nervioso central: agitación, delirio, psicosis, convulsión o coma. Manifestaciones digestivas: náuseas, vómitos, diarrea, dolor abdominal e ictericia sin causa aparente, que es signo de mal pronóstico. Y cardiacas: taquicardia desproporcionada a la fiebre, fibrilación auricular con respuesta rápida e insuficiencia cardiaca de alto gasto. En el anciano puede faltar el cuadro adrenérgico y predominar la apatia con fibrilación auricular y fallo cardiaco.',
      descompensada: 'Hipotiroideo grave, típicamente mujer anciana en invierno. Triada de alteración del nivel de conciencia (desde somnolencia hasta coma, con convulsiones posibles), HIPOTERMIA SIN ESCALOFRÍOS (que puede pasar desapercibida si el termometro no llega a esos valores) y un precipitante. Sobre un fondo de bradicardia, hipotensión, hipoventilación con hipercapnia, facies abotargada, macroglosia, edema sin fóvea, íleo o megacolon, retención urinaria, hiponatremia e hipoglucemia. La infección precipitante puede cursar SIN fiebre ni leucocitosis por el propio hipotiroidismo.'
    },
    laboratorio: [
      { prueba: 'TSH, T4 libre y T3 (calculadoras disponibles)', utilidad: 'Confirman la dirección del trastorno pero NO establecen el diagnóstico ni la gravedad: las cifras de un paciente en tormenta no difieren de las de un hipertiroideo estable, y una T3 normal por enfermedad aguda concomitante no la descarta. Extraer la muestra no debe retrasar el tratamiento.' },
      { prueba: 'Cortisol basal y ACTH', utilidad: 'En el coma mixedematoso se extraen ANTES de la primera dosis de hidrocortisona, que se administra sin esperar el resultado. La insuficiencia suprarrenal coexistente es frecuente y su omisión es el error más letal del cuadro.' },
      { prueba: 'Gasometría arterial', utilidad: 'En el coma mixedematoso, la hipercapnia por hipoventilación es la causa inmediata de muerte más frecuente y la principal indicación de ventilación mecánica. En la tormenta, valora la acidosis láctica del alto gasto.' },
      { prueba: 'Sodio, glucosa, calcio y función renal', utilidad: 'Hiponatremia e hipoglucemia son típicas del coma mixedematoso y contribuyen a la alteración de la conciencia. En la tormenta, hiperglucemia por glucogenólisis e hipercalcemia leve por resorción ósea acelerada.' },
      { prueba: 'Hemograma, perfil hepático y coagulación', utilidad: 'En la tormenta, la ictericia y la elevación de bilirrubina indican mal pronóstico. En el coma mixedematoso, anemia, elevación de creatincinasa y ausencia de leucocitosis pese a infección activa.' },
      { prueba: 'Hemocultivos, urocultivo y radiografía de tórax', utilidad: 'La infección es el precipitante más frecuente de ambos cuadros. En el coma mixedematoso puede no dar fiebre ni leucocitosis, por lo que el umbral para antibioterapia empírica debe ser bajo.' },
      { prueba: 'Troponina y péptido natriurético', utilidad: 'Valoran la insuficiencia cardiaca de alto gasto y el infarto como precipitante o consecuencia. El péptido natriurético esta elevado en la tirotoxicosis aun sin insuficiencia cardiaca, lo que le resta especificidad.' },
      { prueba: 'Cribado de sobrecarga de yodo', utilidad: 'Contraste yodado o amiodarona recientes cambian el tratamiento: en esa situación el yodo terapéutico no aporta nada y el yodo radiactivo queda descartado durante semanas o meses.' }
    ],
    no_invasivos: [
      { metodo: 'Escala de Burch y Wartofsky (calculadora disponible)', interpretacion: 'Suma puntos por temperatura, disfunción del sistema nervioso central, disfunción digestiva o hepática, taquicardia, insuficiencia cardiaca, fibrilación auricular y presencia de precipitante. Es una ayuda a la decisión, no un criterio diagnóstico.', cutoff: '45 puntos o más: muy sugestiva de tormenta. De 25 a 44: tormenta inminente. Menos de 25: improbable' },
      { metodo: 'Criterios de la Japan Thyroid Association', interpretacion: 'Alternativa categórica a la escala anterior: exige tirotoxicosis más combinaciones concretas de síntomas del sistema nervioso central, fiebre, taquicardia, insuficiencia cardiaca y síntomas digestivos. Es más específica y menos sensible que Burch y Wartofsky.', cutoff: 'Tormenta definitiva o sospechada según la combinación de criterios' },
      { metodo: 'Sistema de puntuación diagnóstica del coma mixedematoso (calculadora disponible)', interpretacion: 'Puntúa alteración de la termorregulación, disfunción del sistema nervioso central, digestiva, cardiovascular y metabólica, más la presencia de precipitante. Es la única escala validada del cuadro.', cutoff: '60 puntos o más: diagnóstico muy probable. De 25 a 59: en riesgo, valorar tratamiento. Menos de 25: improbable' },
      { metodo: 'Electrocardiograma', interpretacion: 'En la tormenta: taquicardia sinusal o fibrilación auricular con respuesta rápida. En el coma mixedematoso: bradicardia sinusal, bajo voltaje, aplanamiento o inversión de la onda T y QT largo, con riesgo de torsión de puntas.', cutoff: 'Sin umbrales; los hallazgos orientan y no diagnostican' },
      { metodo: 'Monitorización continua de temperatura central', interpretacion: 'Imprescindible en el coma mixedematoso: los termometros habituales no miden por debajo de 34 a 35 grados y la hipotermia puede pasar desapercibida. La ausencia de escalofríos pese a la hipotermia es característica.', cutoff: 'Temperatura central por debajo de 35 grados' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'Busca la neumonía como precipitante en ambos cuadros. En el coma mixedematoso puede mostrar cardiomegalia por derrame pericárdico y derrame pleural.' },
      { modalidad: 'Ecocardiograma', hallazgos: 'En la tormenta, valora la insuficiencia cardiaca de alto gasto y la taquimiocardiopatia. En el coma mixedematoso, busca derrame pericárdico, que rara vez produce taponamiento por su instauración lenta.' },
      { modalidad: 'Tomografía craneal', hallazgos: 'Ante alteración de la conciencia sin explicación suficiente, para descartar ictus o hemorragia como precipitante o como diagnóstico alternativo, sobre todo en el anciano.' },
      { modalidad: 'Ecografía abdominal', hallazgos: 'En la tormenta con ictericia o dolor abdominal, para descartar colecistitis o colangitis como precipitante y valorar la congestión hepática del fallo derecho.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Las urgencias tiroideas no se clasifican por gravedad bioquímica, porque las hormonas no se correlacionan con el cuadro. Se clasifican por <strong>dirección</strong> (exceso o defecto hormonal), por <strong>probabilidad diagnóstica</strong> mediante escalas clínicas que ordenan la disfunción orgánica, y por <strong>precipitante</strong>, que es lo que determina buena parte del pronóstico. Ninguna de las escalas es un criterio diagnóstico: son ayudas para decidir en un cuadro en el que esperar cuesta vidas.`,
    escalas: [
      { nombre: 'Escala de Burch y Wartofsky (calculadora disponible)', componentes: 'Temperatura, disfunción del sistema nervioso central, disfunción digestiva o hepática, frecuencia cardiaca, insuficiencia cardiaca, fibrilación auricular y presencia de precipitante.', formula: 'Suma ponderada de los siete dominios; el máximo teórico supera los 140 puntos.', interpretacion: '45 o más: muy sugestiva de tormenta tiroidea. De 25 a 44: tormenta inminente, y en general se trata como tal. Menos de 25: improbable. Es sensible y poco específica: sirve para no pasarla por alto, no para etiquetar.' },
      { nombre: 'Criterios de la Japan Thyroid Association', componentes: 'Tirotoxicosis confirmada más síntomas del sistema nervioso central, fiebre de 38 grados o más, taquicardia de 130 o más, insuficiencia cardiaca y síntomas digestivos o hepáticos.', formula: 'Categorías TS1 (definitiva) y TS2 (sospechada) según combinaciones concretas de criterios.', interpretacion: 'Más específica que Burch y Wartofsky y con series nacionales que la respaldan. Exige tirotoxicosis documentada, a diferencia de la anterior, que puede aplicarse antes de tener el perfil.' },
      { nombre: 'Sistema de puntuación diagnóstica del coma mixedematoso (calculadora disponible)', componentes: 'Termorregulación, sistema nervioso central, aparato digestivo, alteraciones cardiovasculares, alteraciones metabólicas y presencia de precipitante.', formula: 'Suma ponderada de los seis dominios.', interpretacion: '60 o más: altamente sugestivo, tratar. De 25 a 59: en riesgo, valorar iniciar tratamiento según el contexto. Menos de 25: improbable. Es la única escala validada para este cuadro y ayuda a decidir en un diagnóstico que se retrasa con frecuencia.' },
      { nombre: 'Clasificación por precipitante', componentes: 'Infección, cirugía, traumatismo, parto, cetoacidosis diabética, contraste yodado o amiodarona, retirada del antitiroideo o de la levotiroxina, ictus, infarto, embolia pulmonar, exposición al frío y sedantes.', formula: 'Identificación clínica, no puntuación.', interpretacion: 'La infección es el precipitante más frecuente de ambos cuadros. Identificarlo y tratarlo forma parte del tratamiento de la urgencia, no de su estudio posterior: sin ello, el cuadro no se resuelve.' },
      { nombre: 'Factores pronósticos', componentes: 'Edad, alteración del nivel de conciencia, disfunción orgánica múltiple, necesidad de ventilación mecánica, hipotensión con vasopresores e ictericia (en la tormenta).', formula: 'Valoración clínica; algunas series usan APACHE II o SOFA.', interpretacion: 'En la tormenta, la mortalidad ronda el 10 al 30% y aumenta con la afectación neurológica y la disfunción multiorgánica. En el coma mixedematoso, el 20 al 40%, con peor pronóstico si la hipotermia no remonta en 72 horas o si hay hipotensión refractaria.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Tormenta tiroidea',
      color: '#8c2f39',
      definicion: 'Forma extrema y descompensada de la tirotoxicosis, con disfunción orgánica que amenaza la vida. Es un diagnóstico CLÍNICO: no existe ninguna cifra de hormona tiroidea que la defina ni que la excluya.',
      fisiopatologia: 'Los niveles hormonales de un paciente en tormenta no difieren de los de un hipertiroideo grave sin ella, de modo que el mecanismo no es la cantidad absoluta de hormona. Se atribuye a un ASCENSO BRUSCO de la fracción libre (por cirugía sobre glándula no preparada, retirada del antitiroideo, carga de yodo o desplazamiento de la unión a proteínas en la enfermedad aguda) sumado a una hiperactividad adrenergica desproporcionada con aumento de receptores beta y a una menor capacidad de respuesta al estrés, con insuficiencia suprarrenal relativa. Ver la Figura 1 de Definición.',
      epidemiologia: 'Del 1 al 2% de los ingresos por tirotoxicosis, con incidencia de 0.2 a 0.8 casos por 100000 habitantes y ano. La causa de base más frecuente es la enfermedad de Graves. Mortalidad del 10 al 30% con tratamiento adecuado, y muy superior si el diagnóstico se retrasa.',
      factores_riesgo: ['Hipertiroidismo no diagnosticado o mal controlado', 'Retirada brusca del antitiroideo', 'Cirugía tiroidea o no tiroidea sin preparación previa', 'Infección, que es el precipitante más frecuente', 'Sobrecarga de yodo: contraste, amiodarona, antisepticos', 'Yodo radiactivo sin cobertura previa con tionamida', 'Parto, cetoacidosis diabética, traumatismo y quemaduras', 'Palpación vigorosa de la glándula, infarto y embolia pulmonar', 'Fármacos: salicilatos, pseudoefedrina, quimioterapia'],
      clinica: 'Fiebre alta desproporcionada con sudoración profusa, taquicardia mayor que la esperable para la temperatura, agitación o delirio que puede llegar al coma, náuseas, vómitos, diarrea, dolor abdominal e ictericia. Fibrilación auricular con respuesta rápida e insuficiencia cardiaca de alto gasto. En el anciano puede predominar la apatia con fallo cardiaco y sin cuadro adrenérgico.',
      criterios_dx: 'Clínico. La escala de Burch y Wartofsky con 45 puntos o más la hace muy probable, y entre 25 y 44 se considera inminente y se trata igual. Los criterios de la Japan Thyroid Association son la alternativa más específica. Ninguno exige un valor hormonal concreto.',
      laboratorio: 'TSH suprimida con T4 libre y habitualmente T3 altas, aunque la T3 puede ser normal si hay enfermedad aguda grave concomitante. Hiperglucemia, hipercalcemia leve, elevación de transaminasas y de bilirrubina, y leucocitosis. Hemocultivos y búsqueda del precipitante.',
      imagen: 'Radiografía de tórax y estudios dirigidos al precipitante. Ecocardiograma si hay insuficiencia cardiaca.',
      complementarios: 'Monitorización continua, sondaje vesical con control de diuresis y valoración neurológica seriada. Extraer muestra hormonal antes de tratar, pero sin esperar el resultado.',
      dx_diferencial: 'Sepsis (el diagnóstico que más se le parece y que además puede coexistir como precipitante), hipertermia maligna, síndrome neuroléptico maligno, síndrome serotoninérgico, golpe de calor, intoxicación por simpaticomiméticos o anticolinérgicos, feocromocitoma, delirium tremens y encefalitis.',
      tx_medico: 'Ingreso en UCI o unidad de cuidados intermedios. Enfriamiento físico y PARACETAMOL como antipirético (NUNCA ácido acetilsalicílico, que desplaza la hormona de sus transportadoras y sube la fracción libre). Sueroterapia con glucosa por el agotamiento del glucógeno, tiamina, corrección de electrolitos y profilaxis antitrombótica. Búsqueda y tratamiento del precipitante.',
      tx_farmacologico: 'Cinco frentes a la vez. PROPILTIOURACILO 500 a 1000 mg de carga y 200 a 250 mg cada 4 horas (preferido en la crisis por su bloqueo adicional de la conversión periférica); si no se dispone, metimazol 20 a 25 mg cada 4 a 6 horas. YODO al menos 1 hora DESPUÉS de la tionamida: Lugol 8 a 10 gotas cada 6 a 8 horas o solución saturada de yoduro potasico 5 gotas cada 6 horas. PROPRANOLOL 60 a 80 mg cada 4 horas por via oral, o esmolol en perfusión si hay insuficiencia cardiaca. HIDROCORTISONA 100 mg cada 8 horas. COLESTIRAMINA 4 g cada 6 horas como coadyuvante.',
      tx_intervencionista: 'Plasmaféresis si no hay respuesta en 24 a 48 horas o si las tionamidas están contraindicadas: retira hormona circulante y sirve de puente. Tiroidectomía tras la estabilización en casos refractarios. Soporte con oxigenación por membrana extracorpórea en el fallo cardiaco refractario, descrito en series pequenas.',
      criterios_uci: 'Prácticamente todos los casos: fiebre alta con disfunción neurológica, arritmia mal tolerada, insuficiencia cardiaca, hipotensión o necesidad de monitorización continua.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Monitorización continua y reevaluación frecuente de la puntuación clínica. La mejoría suele iniciarse en 24 a 48 horas. El yodo se retira en cuanto se controla el cuadro y se planifica el tratamiento definitivo, porque su efecto se agota (fenómeno de escape).',
      seguimiento_ambulatorio: 'Tras el alta, tratamiento definitivo del hipertiroidismo (yodo radiactivo o cirugía): la tormenta es una indicación clara para no dejarlo solo con antitiroideos a largo plazo. Educar sobre la importancia de no suspender la medicación.',
      pronostico: 'Mortalidad del 10 al 30%, mayor con afectación neurológica, disfunción multiorgánica, ictericia y edad avanzada. El retraso diagnóstico es el factor modificable de mayor peso.',
      algoritmo: ['Hipertiroideo con fiebre, disfunción neurológica, digestiva o cardiaca: sospechar', 'Calcular Burch y Wartofsky, pero NO esperar al resultado hormonal', 'Extraer muestra para TSH, T4 libre, T3 y cortisol', 'Iniciar propiltiouracilo (o metimazol si no hay otro)', 'Yodo al menos 1 hora después de la tionamida', 'Propranolol, o esmolol si hay insuficiencia cardiaca', 'Hidrocortisona 100 mg cada 8 horas', 'Paracetamol y enfriamiento físico; nunca salicilatos', 'Buscar y tratar el precipitante, con antibióticos si procede', 'Si no responde en 24 a 48 horas: colestiramina y plasmaféresis']
    },
    {
      nombre: 'Coma mixedematoso',
      color: '#4a6fa5',
      definicion: 'Descompensación extrema de un hipotiroidismo grave y de larga evolución, con alteración del nivel de conciencia, hipotermia y fallo multisistemico. El nombre engaña: no siempre hay coma, y el mixedema no es lo más grave del cuadro.',
      fisiopatologia: 'El déficit hormonal prolongado reduce la termogenesis, el gasto cardiaco y la respuesta ventilatoria a la hipoxia y la hipercapnia, y deteriora el aclaramiento de agua libre. Sobre ese fondo, un precipitante rompe la compensación: cae la temperatura sin escalofríos (la respuesta termogenica esta abolida), la hipoventilación produce hipercapnia y narcosis por dióxido de carbono, la hiponatremia y la hipoglucemia agravan la alteración de la conciencia, y la bradicardia con vasoconstricción mantiene una tensión precaria que se descompensa con cualquier sobrecarga. Ver la Figura 2 de Definición.',
      epidemiologia: 'Raro: incidencia estimada de 0.2 a 1 caso por millón de habitantes y ano, con marcado predominio de mujeres ancianas y estacionalidad invernal. Mortalidad del 20 al 40% incluso con tratamiento adecuado, y mayor en series antiguas.',
      factores_riesgo: ['Hipotiroidismo grave no diagnosticado o de larga evolución', 'Abandono de la levotiroxina', 'Edad avanzada y sexo femenino', 'Exposición al frío y estación invernal', 'Infección, que es el precipitante más frecuente', 'Sedantes, opioides, anestésicos y antipsicóticos', 'Amiodarona, litio y contraste yodado', 'Ictus, infarto de miocardio, insuficiencia cardiaca y hemorragia digestiva', 'Cirugía y traumatismo', 'Hipotiroidismo central con insuficiencia suprarrenal asociada'],
      clinica: 'Alteración del nivel de conciencia que va de la somnolencia al coma, con posibles convulsiones. HIPOTERMIA SIN ESCALOFRÍOS. Bradicardia, hipotensión, hipoventilación con hipercapnia, facies abotargada, macroglosia, piel seca y fría, edema sin fóvea, íleo o megacolon, retención urinaria y reflejos con relajación lenta. La infección precipitante puede cursar sin fiebre ni leucocitosis.',
      criterios_dx: 'Clínico y urgente. El sistema de puntuación diagnóstica de Popoveniuc con 60 puntos o más lo hace muy probable, y entre 25 y 59 obliga a considerarlo. El tratamiento se inicia con la sospecha, sin esperar al perfil tiroideo.',
      laboratorio: 'TSH muy elevada con T4 libre baja si el origen es primario; TSH normal o baja si es central o si hay dopamina o glucocorticoides en curso, de modo que una TSH poco elevada NO descarta el cuadro. Hiponatremia, hipoglucemia, elevación de creatincinasa, anemia, hipercapnia con hipoxemia y cortisol basal extraído antes de la hidrocortisona.',
      imagen: 'Radiografía de tórax (neumonía precipitante, cardiomegalia por derrame pericárdico, derrame pleural). Ecocardiograma si hay cardiomegalia. Tomografía craneal si la alteración de la conciencia no se explica del todo.',
      complementarios: 'Monitorización de temperatura CENTRAL, porque los termometros habituales no miden por debajo de 34 a 35 grados. Electrocardiograma seriado por el QT largo. Sondaje vesical por la retención urinaria frecuente.',
      dx_diferencial: 'Sepsis, hipotermia primaria por exposición, intoxicación por sedantes u opioides, encefalopatía hepática o urémica, hipoglucemia de otra causa, insuficiencia suprarrenal aislada, hiponatremia grave de otro origen, ictus del tronco e hipercapnia por enfermedad pulmonar avanzada.',
      tx_medico: 'Ingreso en UCI. Umbral BAJO para intubar y ventilar: la hipercapnia por hipoventilación es la causa inmediata de muerte más frecuente. Recalentamiento PASIVO con mantas, nunca activo, porque la vasodilatación periférica produce colapso circulatorio. Restricción hídrica para la hiponatremia, con salino hipertónico solo si es grave o sintomática y con corrección lenta. Glucosa intravenosa. Evitar sedantes y opioides.',
      tx_farmacologico: 'HIDROCORTISONA 100 mg intravenosos cada 8 horas ANTES o a la vez que la hormona tiroidea, tras extraer cortisol. LEVOTIROXINA 200 a 400 microgramos intravenosos de carga (dosis menor en el anciano, el bajo peso o la cardiopatía coronaria) y después 50 a 100 microgramos al dia; la via oral no es fiable por el íleo y el edema de mucosa. Se puede anadir LIOTIRONINA 5 a 20 microgramos de carga y 2.5 a 10 microgramos cada 8 horas, porque la conversión periférica esta frenada, con precaución por el riesgo de arritmia. Antibioterapia empírica con umbral bajo.',
      tx_intervencionista: 'Ventilación mecánica invasiva, que suele ser necesaria. Marcapasos transitorio en la bradiarritmia sintomática refractaria, poco frecuente porque la bradicardia mejora con la hormona. Vasopresores si hay hipotensión, teniendo en cuenta que la respuesta vascular es pobre hasta que la hormona hace efecto.',
      criterios_uci: 'Prácticamente todos los casos: alteración de la conciencia, hipotermia, hipercapnia, bradicardia o hipotensión.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Monitorización de temperatura central, gasometrías seriadas, sodio, glucosa y electrocardiograma. La mejoría del nivel de conciencia y de la temperatura en las primeras 24 a 72 horas es el mejor indicador de respuesta. Al recuperar la via oral, pasar a levotiroxina oral con ajuste posterior.',
      seguimiento_ambulatorio: 'Establecer la causa del hipotiroidismo y asegurar la adherencia, porque el abandono de la levotiroxina es un precipitante frecuente y evitable. Control de TSH a las 6 a 8 semanas del alta.',
      pronostico: 'Mortalidad del 20 al 40%. Son factores de mal pronóstico la edad avanzada, la hipotermia que no remonta en 72 horas, la bradicardia persistente, la hipotensión con vasopresores y la necesidad de ventilación mecánica.',
      algoritmo: ['Hipotiroideo con alteración de la conciencia e hipotermia: sospechar', 'Medir temperatura CENTRAL y calcular la puntuación diagnóstica', 'Extraer TSH, T4 libre y cortisol basal', 'Valorar via aérea: umbral bajo para intubar por la hipercapnia', 'HIDROCORTISONA 100 mg antes o a la vez que la hormona', 'Levotiroxina intravenosa de carga, con dosis menor si hay cardiopatía', 'Recalentamiento PASIVO con mantas, nunca activo', 'Corregir sodio con restricción hídrica y glucosa intravenosa', 'Antibioterapia empírica con umbral bajo, aunque no haya fiebre', 'Buscar el precipitante y evitar sedantes']
    },
    {
      nombre: 'Complicaciones cardiovasculares de la tormenta tiroidea',
      color: '#7a1f3d',
      definicion: 'Conjunto de fallos cardiacos que aparecen en la crisis tirotóxica y que son la causa más frecuente de muerte en ella: fibrilación auricular con respuesta rápida, insuficiencia cardiaca de alto gasto, taquimiocardiopatia y choque.',
      fisiopatologia: 'El exceso hormonal aumenta la frecuencia y la contractilidad y baja las resistencias periféricas: el gasto se eleva y la reserva cardiaca se agota. Si a eso se suma una taquiarritmia rápida y mantenida, el llenado diastólico se acorta, aparece taquimiocardiopatia y el gasto acaba cayendo pese al estado hiperdinámico, con hipotensión y choque paradójico. El corazón del anciano y el previamente enfermo llegan antes a ese punto.',
      epidemiologia: 'La insuficiencia cardiaca aparece en cerca del 20 al 30% de las tormentas y la fibrilación auricular en una proporción similar. En las series de UCI, el fallo cardiaco es el principal determinante de mortalidad junto con la afectación neurológica.',
      factores_riesgo: ['Edad avanzada', 'Cardiopatía estructural o coronaria previa', 'Fibrilación auricular preexistente', 'Duración prolongada de la tirotoxicosis no tratada', 'Anemia o infección concomitantes, que aumentan la demanda', 'Sobrecarga de volumen durante la reanimación', 'Retirada del betabloqueante', 'Hipertensión pulmonar asociada a la tirotoxicosis'],
      clinica: 'Palpitaciones, disnea, ortopnea, ingurgitación yugular, crepitantes y edemas. La taquicardia es desproporcionada a la fiebre. En el choque, hipotensión con extremidades calientes al principio y frías después, oliguria y acidosis láctica.',
      criterios_dx: 'Clínico y ecocardiográfico, en el contexto de una tormenta tiroidea. La fibrilación auricular se documenta en el electrocardiograma; la taquimiocardiopatia se sospecha ante disfunción sistólica con frecuencia mantenida alta y se confirma retrospectivamente por su reversibilidad.',
      laboratorio: 'Troponina y péptido natriurético (ambos pueden estar elevados sin cardiopatía estructural en la tirotoxicosis), lactato, gasometría y función renal. Perfil hepático, porque la congestión hepática del fallo derecho contribuye a la ictericia.',
      imagen: 'Ecocardiograma para valorar función sistólica, presiones de llenado y presión pulmonar. Radiografía de tórax para congestión.',
      complementarios: 'Monitorización continua del ritmo y de la tensión. Valoración conjunta con cardiología e intensivos.',
      dx_diferencial: 'Sepsis con disfunción miocárdica, síndrome coronario agudo, miocarditis, embolia pulmonar (que además puede ser el precipitante) y miocardiopatía de estrés.',
      tx_medico: 'Control estricto del balance hídrico: la sobrecarga se tolera mal. Oxigenoterapia y soporte ventilatorio si es preciso. Corrección de la anemia y de la infección, que aumentan la demanda.',
      tx_farmacologico: 'Betabloqueo con precaución en la insuficiencia cardiaca: se prefiere ESMOLOL en perfusión por ser titulable y de vida media muy corta, de modo que se puede retirar en minutos si el paciente empeora. Diuréticos para la congestión. Digoxina como coadyuvante para el control de frecuencia, teniendo en cuenta que en la tirotoxicosis hay resistencia relativa y se necesitan dosis mayores. Anticoagulación según el riesgo embólico calculado con las escalas habituales, no de forma automática. En paralelo, todo el tratamiento antitiroideo de la crisis.',
      tx_intervencionista: 'Cardioversión eléctrica si hay inestabilidad hemodinámica, sabiendo que la recidiva es probable mientras persista la tirotoxicosis. Soporte circulatorio mecánico u oxigenación por membrana extracorpórea en el choque refractario, descritos en series pequenas con supervivencias notables.',
      criterios_uci: 'Todos: arritmia mal tolerada, insuficiencia cardiaca aguda, hipotensión o necesidad de perfusión de esmolol.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Monitorización continua y ecocardiograma de control al mejorar. La función sistólica suele recuperarse al alcanzar el eutiroidismo, lo que confirma la taquimiocardiopatia.',
      seguimiento_ambulatorio: 'Reevaluar el ritmo a los 2 a 3 meses del eutiroidismo antes de plantear cardioversión electiva: hasta dos tercios revierten solos. Tratamiento definitivo del hipertiroidismo.',
      pronostico: 'La disfunción sistólica es en gran medida reversible al corregir la tirotoxicosis. El choque y el fallo multiorgánico marcan la mortalidad de la tormenta.',
      algoritmo: ['Monitorización continua desde el ingreso', 'Electrocardiograma y ecocardiograma precoces', 'Betabloqueo con esmolol si hay insuficiencia cardiaca', 'Diuréticos para la congestión y control estricto de volumen', 'Digoxina coadyuvante, recordando la resistencia relativa', 'Anticoagulación según riesgo embólico calculado', 'Cardioversión solo si hay inestabilidad', 'Tratar en paralelo la crisis tirotóxica completa', 'Diferir la cardioversión electiva a 2 a 3 meses de eutiroidismo']
    },
    {
      nombre: 'Complicaciones del coma mixedematoso',
      color: '#3d5a73',
      definicion: 'Alteraciones que acompanan al cuadro y que, mal manejadas, lo agravan o lo hacen mortal: insuficiencia respiratoria hipercápnica, hiponatremia, hipoglucemia, insuficiencia suprarrenal concomitante e infección oculta.',
      fisiopatologia: 'La respuesta ventilatoria a la hipoxia y a la hipercapnia esta deprimida, y a ello se suman la debilidad de los músculos respiratorios, la macroglosia, el edema de la via aérea superior y el derrame pleural: el resultado es hipoventilación con hipercapnia y narcosis. El aclaramiento de agua libre esta reducido, con secreción inadecuada de vasopresina, lo que produce hiponatremia dilucional. La gluconeogénesis esta disminuida y, si hay insuficiencia suprarrenal asociada, también la respuesta contrarreguladora, de ahi la hipoglucemia. Y la respuesta febril y leucocitaria esta abolida, por lo que la infección pasa desapercibida.',
      epidemiologia: 'La hipercapnia esta presente en la mayoría de los casos graves y es la causa inmediata de muerte más frecuente. La hiponatremia aparece en cerca de la mitad de los pacientes. La insuficiencia suprarrenal coexiste en el 5 al 10%, proporción mucho mayor si el hipotiroidismo es central.',
      factores_riesgo: ['Hipotiroidismo de larga evolución y grave', 'Enfermedad pulmonar previa y obesidad', 'Sedantes, opioides y anestésicos', 'Hipotiroidismo central (insuficiencia suprarrenal secundaria asociada)', 'Síndrome poliglandular autoinmune tipo 2', 'Edad avanzada y desnutrición', 'Sobrecarga de volumen durante la reanimación', 'Administración de levotiroxina antes del glucocorticoide'],
      clinica: 'Somnolencia progresiva y respiración superficial, con cianosis tardía. Convulsiones si la hiponatremia o la hipoglucemia son graves. Hipotensión que no responde a volumen si hay insuficiencia suprarrenal. Ausencia de fiebre y de leucocitosis pese a una infección activa, que es la trampa más peligrosa del cuadro.',
      criterios_dx: 'Gasometría con hipercapnia, sodio bajo, glucemia baja y cortisol basal inapropiadamente bajo para el estrés. Los cultivos pueden ser el único dato de infección.',
      laboratorio: 'Gasometría arterial seriada, sodio, osmolalidad plasmática y urinaria, sodio urinario, glucemia capilar frecuente, cortisol basal y ACTH, hemograma, procalcitonina y cultivos.',
      imagen: 'Radiografía de tórax para neumonía y derrame. Tomografía craneal si hay convulsiones o focalidad.',
      complementarios: 'Capnografia y monitorización respiratoria continua. Control glucémico horario en las primeras horas.',
      dx_diferencial: 'Insuficiencia respiratoria de otra causa, síndrome de secreción inadecuada de vasopresina de otro origen, insuficiencia suprarrenal primaria aislada, sepsis y encefalopatía metabólica de otra causa.',
      tx_medico: 'Ventilación mecánica con umbral bajo. Restricción hídrica para la hiponatremia leve o moderada, y salino hipertónico solo si es grave o sintomática, respetando los límites de corrección para no provocar desmielinización osmótica. Glucosa intravenosa. Evitar sedantes y opioides, cuyo metabolismo esta muy enlentecido y cuyo efecto se prolonga.',
      tx_farmacologico: 'HIDROCORTISONA 100 mg cada 8 horas desde el inicio, antes o a la vez que la hormona tiroidea, y mantenida hasta descartar el déficit suprarrenal. Antibioterapia empírica de amplio espectro con umbral bajo, aunque no haya fiebre ni leucocitosis. La corrección del hipotiroidismo con levotiroxina mejora por si sola la hiponatremia y la hipoventilación en días.',
      tx_intervencionista: 'Intubación y ventilación mecánica invasiva, a menudo prolongada. Toracocentesis o pericardiocentesis solo si el derrame compromete, lo que es infrecuente por su instauración lenta.',
      criterios_uci: 'Hipercapnia, alteración de la conciencia, hiponatremia grave, hipotensión o hipoglucemia de repetición.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Gasometrías y sodio seriados con velocidad de corrección controlada. Retirada progresiva de la hidrocortisona una vez descartada la insuficiencia suprarrenal. Destete ventilatorio guiado por la recuperación del nivel de conciencia y del impulso respiratorio.',
      seguimiento_ambulatorio: 'Comprobar la normalización del sodio y de la función respiratoria. Reevaluar el eje suprarrenal fuera de la fase aguda si se sospecho déficit.',
      pronostico: 'La hipercapnia y la hipotensión refractaria son los principales determinantes de mortalidad. La hiponatremia y la hipoglucemia se corrigen bien si el resto del tratamiento es correcto.',
      algoritmo: ['Gasometría arterial precoz y capnografia', 'Umbral bajo para intubar por hipercapnia', 'Extraer cortisol basal e iniciar hidrocortisona sin esperar resultado', 'Hidrocortisona ANTES o a la vez que la levotiroxina', 'Glucemia capilar frecuente y glucosa intravenosa', 'Hiponatremia: restricción hídrica; hipertónico solo si es grave', 'Respetar los límites de velocidad de corrección del sodio', 'Antibioterapia empírica pese a la ausencia de fiebre', 'Evitar sedantes y opioides']
    },
    {
      nombre: 'Errores de tratamiento en las urgencias tiroideas',
      color: '#6b4a2e',
      definicion: 'Conjunto de decisiones equivocadas que agravan el cuadro o lo hacen mortal. Se recogen aquí como ficha propia porque, en dos urgencias tan raras, la mayoría de las muertes evitables se debe a un número pequeno y repetido de errores.',
      fisiopatologia: 'Cada error tiene un mecanismo concreto. El ácido acetilsalicílico desplaza la hormona de la globulina fijadora y de la albúmina y sube la fracción libre. El yodo administrado antes de la tionamida aporta sustrato a una glándula sin freno y puede agravar la crisis. El calentamiento activo en el coma mixedematoso produce vasodilatación periférica sobre un gasto cardiaco fijo y precipita el colapso. La levotiroxina antes del glucocorticoide acelera el aclaramiento del cortisol y desenmascara una insuficiencia suprarrenal. Y esperar al perfil hormonal retrasa horas un tratamiento que se mide en horas.',
      epidemiologia: 'El retraso diagnóstico es el factor modificable de mayor impacto en la mortalidad de ambos cuadros. En las series de tormenta, una proporción importante de los pacientes tenia hipertiroidismo conocido y mal controlado, es decir, la crisis era previsible.',
      factores_riesgo: ['Baja frecuencia de ambos cuadros y falta de familiaridad', 'Presentación que imita a la sepsis o a la hipotermia primaria', 'Dependencia excesiva del resultado analítico para decidir', 'Confusión entre tirotoxicosis con captación alta y baja', 'Uso de escalas como criterio diagnóstico en vez de como ayuda', 'Ausencia de protocolo escrito en el servicio', 'Cambios de turno durante la fase inicial del tratamiento'],
      clinica: 'La consecuencia clínica del error es un paciente que no mejora o que empeora en las primeras horas: fiebre que no cede, taquicardia que persiste, hipotensión nueva tras la primera dosis de hormona, o deterioro del nivel de conciencia durante el recalentamiento.',
      criterios_dx: 'Revisión sistemática de las órdenes de tratamiento en las primeras 6 horas: fármaco, dosis, via y ORDEN de administración.',
      laboratorio: 'Comprobar que se extrajo cortisol antes de la hidrocortisona y muestra hormonal antes de la primera dosis de tionamida o de levotiroxina, sin que ello haya retrasado el tratamiento.',
      imagen: 'No aplica.',
      complementarios: 'Lista de comprobacion al pie de cama con los cinco carriles de cada cuadro y las cuatro prohibiciones. Es la intervención más eficaz en un cuadro que cada médico ve pocas veces en su carrera.',
      dx_diferencial: 'Fallo de respuesta por error de tratamiento frente a fallo por gravedad del cuadro o por precipitante no tratado. Ante un paciente que no mejora, hay que revisar ambas cosas.',
      tx_medico: 'Corregir el error identificado y reevaluar. En la tormenta: sustituir el salicilato por paracetamol, comprobar que la tionamida precedio al yodo, anadir hidrocortisona si falta. En el coma mixedematoso: pasar a recalentamiento pasivo, anadir hidrocortisona, reevaluar la via aérea.',
      tx_farmacologico: 'Los cinco carriles completos de cada cuadro, en el orden correcto. Si el paciente no responde en 24 a 48 horas pese a un tratamiento bien administrado, escalar: colestiramina y plasmaféresis en la tormenta, liotironina anadida y soporte pleno en el coma mixedematoso.',
      tx_intervencionista: 'Plasmaféresis o tiroidectomía en la tormenta refractaria; ventilación mecánica en el coma mixedematoso.',
      criterios_uci: 'Cualquiera de los dos cuadros no resuelto en las primeras horas.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Revisión de la secuencia de tratamiento en cada pase de guardia durante las primeras 48 horas, y comprobacion de que el precipitante se busco y se trato.',
      seguimiento_ambulatorio: 'Análisis del caso y, si procede, incorporación de la leccion al protocolo del servicio. En la tormenta, planificar el tratamiento definitivo del hipertiroidismo antes del alta.',
      pronostico: 'Los errores de esta lista son, en su mayoría, la diferencia entre una mortalidad del 10% y una del 30%.',
      algoritmo: ['NUNCA ácido acetilsalicílico como antipirético en la tormenta', 'NUNCA yodo antes que la tionamida en un hipertiroidismo verdadero', 'NUNCA antitiroideos en una tirotoxicosis con captación baja', 'NUNCA levotiroxina antes que el glucocorticoide en el coma mixedematoso', 'NUNCA recalentamiento activo en el coma mixedematoso', 'NUNCA esperar al perfil tiroideo para iniciar el tratamiento', 'SIEMPRE buscar y tratar el precipitante', 'SIEMPRE extraer cortisol antes de la hidrocortisona, sin retrasar la dosis', 'SIEMPRE reevaluar en 24 a 48 horas y escalar si no hay respuesta']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Las dos urgencias tiroideas se manejan en UCI y comparten una estructura: reconocer sin esperar al laboratorio, tratar en varios frentes a la vez, buscar el precipitante y evitar una lista corta de errores. Lo que sigue es la lista de comprobacion que conviene tener a mano, porque cada médico ve pocos casos a lo largo de su carrera.',
    parametros: ['Ante fiebre con taquicardia desproporcionada y disfunción neurológica en un hipertiroideo: sospechar tormenta y tratar sin esperar hormonas', 'Ante alteración de la conciencia con hipotermia en un anciano: medir temperatura CENTRAL y pensar en coma mixedematoso', 'Extraer muestra hormonal y cortisol antes de tratar, pero no esperar el resultado', 'Tormenta: tionamida primero, yodo al menos 1 hora después, propranolol o esmolol e hidrocortisona', 'Tormenta: paracetamol y enfriamiento físico, nunca ácido acetilsalicílico', 'Coma mixedematoso: hidrocortisona antes o a la vez que la levotiroxina, sin excepción', 'Coma mixedematoso: recalentamiento pasivo, umbral bajo para intubar y evitar sedantes', 'Buscar y tratar el precipitante en ambos: infección, cirugía, fármacos, sobrecarga de yodo, abandono del tratamiento', 'Antibioterapia empírica con umbral bajo, sobre todo en el coma mixedematoso, donde puede no haber fiebre', 'Reevaluar a las 24 a 48 horas: si no hay respuesta, colestiramina y plasmaféresis en la tormenta, y revisar errores en ambos'],
    criterios_uci_general: 'Prácticamente todos los casos de ambas entidades. En la tormenta: fiebre alta con disfunción neurológica, arritmia mal tolerada, insuficiencia cardiaca o hipotensión. En el coma mixedematoso: alteración de la conciencia, hipotermia, hipercapnia, bradicardia o hipotensión.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa. En la tormenta, el fallo hepático agudo por propiltiouracilo es excepcional pero ha requerido trasplante, motivo por el que ese fármaco se limita a indicaciones concretas fuera de la crisis.',
    prevencion: 'Primaria y la más eficaz: control adecuado del hipertiroidismo y del hipotiroidismo conocidos, con insistencia en no abandonar el tratamiento. Preparación con tionamida y yodo antes de la tiroidectomía, y cobertura con tionamida antes del yodo radiactivo en el paciente de riesgo. Cautela con la sobrecarga de yodo (contrastes, amiodarona) en el bocio nodular del anciano. En el hipotiroidismo grave del anciano, evitar sedantes y opioides y vigilar en los meses fríos. Secundaria: protocolo escrito y lista de comprobacion en urgencias y en UCI, que es lo que más acorta el retraso diagnóstico.'
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
  'Tormenta tiroidea': { definicion: [1, 3, 4, 6], criterios_dx: [1, 3, 4, 6], laboratorio: [1, 3, 4, 6], tx_farmacologico: [1, 3, 6] },
  'Coma mixedematoso': { definicion: [9, 10, 12, 15], criterios_dx: [9, 10, 12, 15], laboratorio: [9, 10, 12, 15], tx_farmacologico: [10, 12, 15] },
  'Complicaciones cardiovasculares de la tormenta tiroidea': { definicion: [7, 8], criterios_dx: [7, 8], laboratorio: [7, 8], tx_farmacologico: [7, 8] },
  'Complicaciones del coma mixedematoso': { definicion: [12, 13, 10], criterios_dx: [12, 13, 10], laboratorio: [12, 13, 10], tx_farmacologico: [12, 13, 10] },
  'Errores de tratamiento en las urgencias tiroideas': { definicion: [2, 10, 17], criterios_dx: [2, 10, 17], laboratorio: [2, 10, 17], tx_farmacologico: [2, 10, 17] }
};
export const estigmasTitulo = 'Signos de alarma que separan la crisis del hipertiroidismo o del hipotiroidismo estables';
export const estigmas = [
  { s: 'Fiebre desproporcionada sin foco (tormenta)', p: 'Casi constante', photo: null, desc: 'A menudo por encima de 38.5 grados y con sudoración profusa. Es el signo que más separa la tormenta de una tirotoxicosis grave estable, y el que más se confunde con una sepsis, que además puede coexistir como precipitante.' },
  { s: 'Taquicardia desproporcionada a la temperatura (tormenta)', p: '~90%', photo: null, desc: 'Frecuencias por encima de 140 latidos por minuto que no se explican por la fiebre. Es uno de los dominios mejor puntuados en la escala de Burch y Wartofsky y suele ir acompanada de presión de pulso amplia.' },
  { s: 'Agitación, delirio o psicosis (tormenta)', p: '50-70%', photo: null, desc: 'La afectación del sistema nervioso central es el dominio con mayor peso pronóstico: su presencia multiplica la mortalidad. Puede progresar a convulsión y coma.' },
  { s: 'Ictericia sin causa aparente (tormenta)', p: '~20%', photo: null, desc: 'Signo de mal pronóstico. Refleja la combinación de congestión hepática por fallo derecho y toxicidad directa del exceso hormonal. Obliga a descartar también hepatotoxicidad por propiltiouracilo si el paciente ya lo recibia.' },
  { s: 'Fibrilación auricular con respuesta rápida (tormenta)', p: '~30%', photo: null, desc: 'Puntúa en la escala y contribuye de forma directa al fallo cardiaco por acortamiento del llenado diastólico. Hasta dos tercios revierten solos al alcanzar el eutiroidismo, por lo que la cardioversión electiva se difiere.' },
  { s: 'Hipotermia sin escalofríos (coma mixedematoso)', p: '~80%', photo: null, desc: 'La respuesta termogenica esta abolida, de modo que el paciente esta frío y NO tirita. Puede pasar desapercibida porque los termometros habituales no miden por debajo de 34 a 35 grados: hay que medir temperatura central.' },
  { s: 'Alteración del nivel de conciencia (coma mixedematoso)', p: 'Constante', photo: null, desc: 'Desde la somnolencia hasta el coma, con convulsiones posibles. No hace falta que haya coma para hacer el diagnóstico, pese al nombre de la entidad. Se agrava por la hipercapnia, la hiponatremia y la hipoglucemia.' },
  { s: 'Bradicardia con hipotensión (coma mixedematoso)', p: '~70%', photo: null, desc: 'El gasto cardiaco esta reducido y la respuesta vasopresora es pobre hasta que la hormona hace efecto. La sobrecarga de volumen se tolera mal, sobre todo si hay derrame pericárdico asociado.' },
  { s: 'Hipoventilación con hipercapnia (coma mixedematoso)', p: '~50%', photo: null, desc: 'Causa inmediata de muerte más frecuente del cuadro. La respuesta ventilatoria a la hipoxia y a la hipercapnia esta deprimida y se suman la macroglosia, el edema de la via aérea y la debilidad muscular. Umbral bajo para intubar.' },
  { s: 'Ausencia de fiebre y de leucocitosis pese a infección (coma mixedematoso)', p: 'Frecuente', photo: null, desc: 'La trampa más peligrosa: la infección es el precipitante más frecuente y el hipotiroidismo abole la respuesta febril y leucocitaria. Obliga a un umbral muy bajo para iniciar antibioterapia empírica.' },
  { s: 'Hiponatremia e hipoglucemia (coma mixedematoso)', p: '~50% y ~25%', photo: null, desc: 'Contribuyen de forma directa a la alteración de la conciencia y pueden provocar convulsiones. La hiponatremia se corrige sobre todo con restricción hídrica y con la propia hormona; el hipertónico se reserva a los casos graves o sintomáticos.' },
  { s: 'Íleo o megacolon y retención urinaria (coma mixedematoso)', p: '~30%', photo: null, desc: 'Explican por que la via oral no es fiable para la levotiroxina y obligan a la via intravenosa. La retención urinaria justifica el sondaje y puede confundirse con un abdomen agudo.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Escala de Burch y Wartofsky (calculadora disponible)': [1, 2],
  'Criterios de la Japan Thyroid Association': [3, 4],
  'Sistema de puntuación diagnóstica del coma mixedematoso (calculadora disponible)': [9],
  'Clasificación por precipitante': [4, 12],
  'Factores pronósticos': [8, 12, 7]
};
export const escalaCalc = {
  'Escala de Burch y Wartofsky (calculadora disponible)': 'burch-wartofsky',
  'Sistema de puntuación diagnóstica del coma mixedematoso (calculadora disponible)': 'coma-mixedematoso'
};
export const compGroups = [
  { name: 'Las dos urgencias', items: ['Tormenta tiroidea', 'Coma mixedematoso'] },
  { name: 'Complicaciones y errores', items: ['Complicaciones cardiovasculares de la tormenta tiroidea', 'Complicaciones del coma mixedematoso', 'Errores de tratamiento en las urgencias tiroideas'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son las urgencias mismas, en los dos extremos del eje: la tormenta tiroidea y el coma mixedematoso. Las dos siguientes recogen lo que mata en cada una: el fallo cardiaco en la tormenta y la hipoventilación con hipercapnia, la hiponatremia y la insuficiencia suprarrenal no reconocida en el coma mixedematoso. La última es una ficha atípica pero deliberada: la lista de los errores de tratamiento, porque en dos cuadros tan raros la mayoría de las muertes evitables se debe a un número pequeno y repetido de fallos.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Urgencias y errores' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'URGENCIAS TIROIDEAS', color: '#8c2f39', target: 'definicion' },
  branches: [
    { title: 'TORMENTA TIROIDEA', sub: 'Hipertiroideo con disfunción orgánica', color: '#8c2f39', target: 'complicaciones', leaves: [
      { title: 'Burch y Wartofsky', sub: '45 o más: muy probable', color: '#8c2f39', target: 'clasificacion' },
      { title: 'Tionamida y después yodo', sub: 'Nunca al revés', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Propranolol e hidrocortisona', sub: 'Frenan la conversión', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Fallo cardiaco', sub: 'Esmolol titulable', color: '#7a1f3d', target: 'complicaciones' }
    ] },
    { title: 'COMA MIXEDEMATOSO', sub: 'Conciencia, hipotermia y precipitante', color: '#4a6fa5', target: 'complicaciones', leaves: [
      { title: 'Puntuación de Popoveniuc', sub: '60 o más: tratar', color: '#4a6fa5', target: 'clasificacion' },
      { title: 'Esteroide antes que hormona', sub: 'Evita la crisis addisoniana', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Levotiroxina intravenosa', sub: 'La via oral no es fiable', color: '#4a6fa5', target: 'complicaciones' },
      { title: 'Hipercapnia', sub: 'Umbral bajo para intubar', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'LO COMÚN A LAS DOS', sub: 'Tres reglas que valen para ambas', color: '#3f6b52', target: 'definicion', leaves: [
      { title: 'Diagnóstico clínico', sub: 'Ninguna cifra las define', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Buscar el precipitante', sub: 'La infección es el más frecuente', color: '#6b4a2e', target: 'clasificacion' },
      { title: 'Tratar con la sospecha', sub: 'No esperar al laboratorio', color: '#8c2f39', target: 'complicaciones' },
      { title: 'Los errores que matan', sub: 'Lista de comprobacion', color: '#6b4a2e', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [2, 9], no_invasivos: [1, 3, 9], imagen: [10, 12] };
export const clasificacionCite = [1, 3, 9];
export const seguimientoCite = [2, 10];
