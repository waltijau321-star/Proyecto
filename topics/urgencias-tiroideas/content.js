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
  subtitulo: 'Modulo 45 · Medicina Interna',
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
    <strong style="color:#8c2f39;">Los cinco carriles corren A LA VEZ, no en secuencia.</strong> <span style="color:var(--ink-dim);">La tormenta no espera a que un farmaco haga efecto para empezar el siguiente. El unico orden que importa es que la tionamida va <strong>antes</strong> que el yodo.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">1. Bloquear la<br>SINTESIS</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">PROPILTIOURACILO</strong> 500 a 1000 mg de carga y despues 200 a 250 mg cada 4 horas. Se prefiere al metimazol en la crisis porque ademas <strong>bloquea la conversion periferica de T4 en T3</strong>. Si no se dispone, metimazol 20 a 25 mg cada 4 a 6 horas. Por sonda o por via rectal si el paciente no traga.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">2. Bloquear la<br>LIBERACION</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">YODO</strong>: solucion de Lugol 8 a 10 gotas cada 6 a 8 horas, o solucion saturada de yoduro potasico 5 gotas cada 6 horas. <strong style="color:#8c3a34;">SIEMPRE al menos 1 hora DESPUES de la tionamida</strong>, o se estara aportando sustrato a una glandula desbocada. Si la crisis es por sobrecarga de yodo, el yodo no sirve.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">3. Bloquear el<br>EFECTO y la<br>CONVERSION</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">PROPRANOLOL</strong> 60 a 80 mg cada 4 horas por via oral, o 0.5 a 1 mg intravenoso lento con monitorizacion. Controla frecuencia, temblor, agitacion y fiebre, y a dosis altas frena la conversion. <strong style="color:var(--ink);">HIDROCORTISONA</strong> 100 mg cada 8 horas (o dexametasona 2 mg cada 6 horas): frena la conversion y cubre la insuficiencia suprarrenal relativa. Si hay insuficiencia cardiaca, esmolol en perfusion, titulable y reversible.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">4. SOPORTE y<br>PRECIPITANTE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Enfriamiento fisico y <strong>PARACETAMOL</strong> para la fiebre. Sueroterapia con glucosa (las reservas de glucogeno estan agotadas) y tiamina. Corregir electrolitos. <strong style="color:#8c3a34;">Buscar y tratar el precipitante</strong>: infeccion, cirugia, parto, cetoacidosis, contraste yodado, retirada del antitiroideo, traumatismo o embolia pulmonar. Profilaxis antitrombotica.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a2e22;border:1px solid #6b4a2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a2e;">5. RESCATE si<br>no responde</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Colestiramina</strong> 4 g cada 6 horas, que interrumpe la circulacion enterohepatica de la hormona. Si no hay respuesta en 24 a 48 horas: <strong>plasmaferesis</strong>, y despues tiroidectomia una vez estabilizado. La plasmaferesis retira hormona circulante y sirve de puente a la cirugia.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Dos cosas que NO se hacen.</strong> No dar <strong>acido acetilsalicilico</strong> como antipiretico: desplaza la hormona de sus proteinas transportadoras y sube la fraccion libre. Y no esperar a las hormonas para tratar: <strong>la tormenta es un diagnostico clinico</strong> y no hay ninguna cifra de T4 o de T3 que la defina ni la excluya.
  </div>
</div>`;

const mixedemaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #4a6fa5;border-radius:8px;padding:5px 9px;background:#4a6fa512;margin-bottom:6px;">
    <strong style="color:#4a6fa5;">El error que mata aqui no es la dosis de hormona: es el orden.</strong> <span style="color:var(--ink-dim);">El <strong>glucocorticoide va antes o a la vez</strong> que la levotiroxina, siempre.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">1. ESTEROIDE<br>PRIMERO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">HIDROCORTISONA</strong> 100 mg intravenosos cada 8 horas, tras extraer una muestra para cortisol. La insuficiencia suprarrenal coexiste con frecuencia (hipotiroidismo central o sindrome poliglandular), y la hormona tiroidea acelera el aclaramiento del cortisol: darla primero puede precipitar una <strong>crisis addisoniana</strong>. Se mantiene hasta descartar el deficit.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#4a6fa522;border:1px solid #4a6fa5;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#4a6fa5;">2. HORMONA<br>INTRAVENOSA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">LEVOTIROXINA</strong> 200 a 400 microgramos intravenosos de carga (dosis menor en ancianos, bajo peso o cardiopatia coronaria), seguida de 50 a 100 microgramos al dia. La via oral no es fiable: hay ileo y edema de la mucosa. Anadir <strong>liotironina</strong> 5 a 20 microgramos de carga y 2.5 a 10 microgramos cada 8 horas es razonable porque la conversion periferica esta frenada, pero aumenta el riesgo de arritmia en el anciano.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">3. VIA AEREA y<br>TEMPERATURA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La causa inmediata de muerte suele ser la <strong>hipoventilacion con hipercapnia</strong>: umbral bajo para intubar y ventilar. Recalentamiento <strong>PASIVO</strong> con mantas: el calentamiento activo produce vasodilatacion periferica y colapso circulatorio. Evitar sedantes y opioides, cuyo metabolismo esta enlentecido.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">4. SODIO y<br>GLUCOSA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Hiponatremia</strong> por deterioro del aclaramiento de agua libre: restriccion hidrica, y salino hipertonico solo si es grave o sintomatica, con correccion lenta para no provocar desmielinizacion osmotica. <strong style="color:var(--ink);">Hipoglucemia</strong>: glucosa intravenosa. Cuidado con la sobrecarga de volumen, mal tolerada por la bradicardia y el posible derrame pericardico.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a2e22;border:1px solid #6b4a2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a2e;">5. PRECIPITANTE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Casi siempre hay uno: <strong>infeccion</strong> (la mas frecuente, y a menudo sin fiebre ni leucocitosis por el propio hipotiroidismo), exposicion al frio, sedantes u opioides, amiodarona, litio, abandono de la levotiroxina, ictus, infarto, hemorragia digestiva o cirugia. Umbral bajo para antibioterapia empirica.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8c2f39;border-radius:8px;background:#8c2f3910;color:var(--ink-dim);">
    <strong style="color:#8c2f39;">Mortalidad del 20 al 40% incluso bien tratado.</strong> Los factores de mal pronostico son la edad avanzada, la hipotermia que no remonta en las primeras 72 horas, la bradicardia persistente, la hipotension que requiere vasopresores y la necesidad de ventilacion mecanica. Como en la tormenta, <strong>el tratamiento se inicia con la sospecha clinica</strong>, sin esperar al perfil tiroideo.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La tormenta tiroidea y el coma mixedematoso son los dos extremos descompensados del eje tiroideo. Tienen tres cosas en comun que conviene fijar desde el principio: son <strong>diagnosticos clinicos</strong> y ninguna cifra hormonal los define, <strong>casi siempre hay un precipitante</strong> que hay que buscar activamente, y el tratamiento <strong>se inicia con la sospecha</strong>, sin esperar a la confirmacion analitica. Son raros, y precisamente por eso se reconocen tarde: la mortalidad de ambos sigue estando entre el 10 y el 40%.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Por que un hipertiroidismo se convierte en tormenta.</strong></p>
<p style="margin:0 0 12px;">La respuesta honesta es que no se sabe del todo. Los niveles hormonales de un paciente en tormenta <strong>no difieren</strong> de los de un hipertiroideo grave sin ella, de modo que la explicacion no esta en la cantidad de hormona sino en el cambio brusco de su fraccion libre y en la respuesta del huesped. Las hipotesis con mas apoyo son el <strong>ascenso rapido de la hormona libre</strong> (por cirugia sobre una glandula no preparada, por retirada del antitiroideo, por carga de yodo o por desplazamiento de la union a proteinas en una enfermedad aguda) y una <strong>hiperactividad adrenergica desproporcionada</strong>, con aumento de receptores beta. De ahi que el propranolol y el glucocorticoide sean tan centrales en el tratamiento.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se reconoce la tormenta.</strong></p>
<p style="margin:0 0 12px;">Un hipertiroideo <strong>con disfuncion organica</strong>. Los cuatro dominios que hay que buscar son la <strong>termorregulacion</strong> (fiebre desproporcionada, a menudo por encima de 38.5 grados y sin foco), el <strong>sistema nervioso central</strong> (agitacion, delirio, psicosis, convulsion o coma), el <strong>aparato digestivo y el higado</strong> (nauseas, vomitos, diarrea, dolor abdominal e ictericia sin causa, que es signo de mal pronostico) y el <strong>corazon</strong> (taquicardia desproporcionada a la fiebre, fibrilacion auricular, insuficiencia cardiaca). La escala de <strong>Burch y Wartofsky</strong> ordena estos dominios en una puntuacion (calculadora disponible), pero es una ayuda para decidir, no un criterio diagnostico: se trata al paciente, no a la puntuacion.</p>
${figBlock('Figura 1', 'Tormenta tiroidea: los cinco carriles del tratamiento', tormentaHtml)}
<p style="margin:0 0 12px;">El tratamiento se entiende siguiendo el recorrido de la hormona: se bloquea su <strong>sintesis</strong> con la tionamida, su <strong>liberacion</strong> con el yodo, su <strong>conversion y su efecto</strong> con propranolol y glucocorticoide, y su <strong>reciclaje</strong> con colestiramina. A eso se anaden el soporte y el tratamiento del precipitante. La unica regla de orden es que <strong>el yodo va al menos una hora despues de la tionamida</strong>; todo lo demas corre en paralelo.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El otro extremo: el coma mixedematoso.</strong></p>
<p style="margin:0 0 12px;">Es la descompensacion de un hipotiroidismo grave y de larga evolucion, casi siempre en una <strong>mujer anciana en invierno</strong> con hipotiroidismo no diagnosticado o con levotiroxina abandonada. El nombre enga&#241;a dos veces: no siempre hay coma (basta con alteracion del nivel de conciencia) y el mixedema no es lo mas grave. Lo que define el cuadro es la <strong>triada de alteracion de la conciencia, hipotermia sin escalofrios y un precipitante</strong>, sobre un fondo de bradicardia, hipoventilacion con hipercapnia, hiponatremia e hipoglucemia.</p>
${figBlock('Figura 2', 'Coma mixedematoso: los cinco carriles del tratamiento', mixedemaHtml)}
<p style="margin:0 0 12px;">Aqui el orden si importa, y mucho: <strong>el glucocorticoide va antes o a la vez que la levotiroxina</strong>, porque la hormona tiroidea acelera el aclaramiento del cortisol y puede desencadenar una crisis suprarrenal en un paciente con deficit no reconocido. El resto del tratamiento es hormona intravenosa (la absorcion digestiva no es fiable con ileo y edema de mucosa), soporte ventilatorio con umbral bajo para intubar, recalentamiento <strong>pasivo</strong> y correccion prudente del sodio y de la glucosa.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Las trampas del laboratorio en las dos.</strong></p>
<p style="margin:0 0 12px;">En la tormenta, la T4 y la T3 pueden ser identicas a las de un hipertiroideo estable, y la T3 incluso normal si el paciente tiene ademas una enfermedad aguda grave que frena la conversion: una T3 normal <strong>no descarta</strong> la tormenta. En el coma mixedematoso, la TSH esta muy alta si el origen es primario, pero puede ser normal o baja si es central o si hay dopamina o glucocorticoides en curso, de modo que <strong>una TSH poco elevada no descarta el cuadro</strong> y hay que mirar la T4 libre. En ambos, extraer la muestra no debe retrasar el tratamiento ni un minuto.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No dar acido acetilsalicilico como antipiretico en la tormenta. No dar yodo antes que la tionamida. No recalentar de forma activa al paciente con coma mixedematoso. No dar levotiroxina antes que el glucocorticoide. No sedar sin necesidad a un hipotiroideo grave. Y no esperar al perfil tiroideo para empezar en ninguno de los dos.</p>`;

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
      compensada: 'Hipertiroideo con DISFUNCION ORGANICA. Fiebre desproporcionada, a menudo por encima de 38.5 grados y sin foco, con sudoracion profusa. Alteracion del sistema nervioso central: agitacion, delirio, psicosis, convulsion o coma. Manifestaciones digestivas: nauseas, vomitos, diarrea, dolor abdominal e ictericia sin causa aparente, que es signo de mal pronostico. Y cardiacas: taquicardia desproporcionada a la fiebre, fibrilacion auricular con respuesta rapida e insuficiencia cardiaca de alto gasto. En el anciano puede faltar el cuadro adrenergico y predominar la apatia con fibrilacion auricular y fallo cardiaco.',
      descompensada: 'Hipotiroideo grave, tipicamente mujer anciana en invierno. Triada de alteracion del nivel de conciencia (desde somnolencia hasta coma, con convulsiones posibles), HIPOTERMIA SIN ESCALOFRIOS (que puede pasar desapercibida si el termometro no llega a esos valores) y un precipitante. Sobre un fondo de bradicardia, hipotension, hipoventilacion con hipercapnia, facies abotargada, macroglosia, edema sin fovea, ileo o megacolon, retencion urinaria, hiponatremia e hipoglucemia. La infeccion precipitante puede cursar SIN fiebre ni leucocitosis por el propio hipotiroidismo.'
    },
    laboratorio: [
      { prueba: 'TSH, T4 libre y T3 (calculadoras disponibles)', utilidad: 'Confirman la direccion del trastorno pero NO establecen el diagnostico ni la gravedad: las cifras de un paciente en tormenta no difieren de las de un hipertiroideo estable, y una T3 normal por enfermedad aguda concomitante no la descarta. Extraer la muestra no debe retrasar el tratamiento.' },
      { prueba: 'Cortisol basal y ACTH', utilidad: 'En el coma mixedematoso se extraen ANTES de la primera dosis de hidrocortisona, que se administra sin esperar el resultado. La insuficiencia suprarrenal coexistente es frecuente y su omision es el error mas letal del cuadro.' },
      { prueba: 'Gasometria arterial', utilidad: 'En el coma mixedematoso, la hipercapnia por hipoventilacion es la causa inmediata de muerte mas frecuente y la principal indicacion de ventilacion mecanica. En la tormenta, valora la acidosis lactica del alto gasto.' },
      { prueba: 'Sodio, glucosa, calcio y funcion renal', utilidad: 'Hiponatremia e hipoglucemia son tipicas del coma mixedematoso y contribuyen a la alteracion de la conciencia. En la tormenta, hiperglucemia por glucogenolisis e hipercalcemia leve por resorcion osea acelerada.' },
      { prueba: 'Hemograma, perfil hepatico y coagulacion', utilidad: 'En la tormenta, la ictericia y la elevacion de bilirrubina indican mal pronostico. En el coma mixedematoso, anemia, elevacion de creatincinasa y ausencia de leucocitosis pese a infeccion activa.' },
      { prueba: 'Hemocultivos, urocultivo y radiografia de torax', utilidad: 'La infeccion es el precipitante mas frecuente de ambos cuadros. En el coma mixedematoso puede no dar fiebre ni leucocitosis, por lo que el umbral para antibioterapia empirica debe ser bajo.' },
      { prueba: 'Troponina y peptido natriuretico', utilidad: 'Valoran la insuficiencia cardiaca de alto gasto y el infarto como precipitante o consecuencia. El peptido natriuretico esta elevado en la tirotoxicosis aun sin insuficiencia cardiaca, lo que le resta especificidad.' },
      { prueba: 'Cribado de sobrecarga de yodo', utilidad: 'Contraste yodado o amiodarona recientes cambian el tratamiento: en esa situacion el yodo terapeutico no aporta nada y el yodo radiactivo queda descartado durante semanas o meses.' }
    ],
    no_invasivos: [
      { metodo: 'Escala de Burch y Wartofsky (calculadora disponible)', interpretacion: 'Suma puntos por temperatura, disfuncion del sistema nervioso central, disfuncion digestiva o hepatica, taquicardia, insuficiencia cardiaca, fibrilacion auricular y presencia de precipitante. Es una ayuda a la decision, no un criterio diagnostico.', cutoff: '45 puntos o mas: muy sugestiva de tormenta. De 25 a 44: tormenta inminente. Menos de 25: improbable' },
      { metodo: 'Criterios de la Japan Thyroid Association', interpretacion: 'Alternativa categorica a la escala anterior: exige tirotoxicosis mas combinaciones concretas de sintomas del sistema nervioso central, fiebre, taquicardia, insuficiencia cardiaca y sintomas digestivos. Es mas especifica y menos sensible que Burch y Wartofsky.', cutoff: 'Tormenta definitiva o sospechada segun la combinacion de criterios' },
      { metodo: 'Sistema de puntuacion diagnostica del coma mixedematoso (calculadora disponible)', interpretacion: 'Puntua alteracion de la termorregulacion, disfuncion del sistema nervioso central, digestiva, cardiovascular y metabolica, mas la presencia de precipitante. Es la unica escala validada del cuadro.', cutoff: '60 puntos o mas: diagnostico muy probable. De 25 a 59: en riesgo, valorar tratamiento. Menos de 25: improbable' },
      { metodo: 'Electrocardiograma', interpretacion: 'En la tormenta: taquicardia sinusal o fibrilacion auricular con respuesta rapida. En el coma mixedematoso: bradicardia sinusal, bajo voltaje, aplanamiento o inversion de la onda T y QT largo, con riesgo de torsion de puntas.', cutoff: 'Sin umbrales; los hallazgos orientan y no diagnostican' },
      { metodo: 'Monitorizacion continua de temperatura central', interpretacion: 'Imprescindible en el coma mixedematoso: los termometros habituales no miden por debajo de 34 a 35 grados y la hipotermia puede pasar desapercibida. La ausencia de escalofrios pese a la hipotermia es caracteristica.', cutoff: 'Temperatura central por debajo de 35 grados' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'Busca la neumonia como precipitante en ambos cuadros. En el coma mixedematoso puede mostrar cardiomegalia por derrame pericardico y derrame pleural.' },
      { modalidad: 'Ecocardiograma', hallazgos: 'En la tormenta, valora la insuficiencia cardiaca de alto gasto y la taquimiocardiopatia. En el coma mixedematoso, busca derrame pericardico, que rara vez produce taponamiento por su instauracion lenta.' },
      { modalidad: 'Tomografia craneal', hallazgos: 'Ante alteracion de la conciencia sin explicacion suficiente, para descartar ictus o hemorragia como precipitante o como diagnostico alternativo, sobre todo en el anciano.' },
      { modalidad: 'Ecografia abdominal', hallazgos: 'En la tormenta con ictericia o dolor abdominal, para descartar colecistitis o colangitis como precipitante y valorar la congestion hepatica del fallo derecho.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Las urgencias tiroideas no se clasifican por gravedad bioquimica, porque las hormonas no se correlacionan con el cuadro. Se clasifican por <strong>direccion</strong> (exceso o defecto hormonal), por <strong>probabilidad diagnostica</strong> mediante escalas clinicas que ordenan la disfuncion organica, y por <strong>precipitante</strong>, que es lo que determina buena parte del pronostico. Ninguna de las escalas es un criterio diagnostico: son ayudas para decidir en un cuadro en el que esperar cuesta vidas.`,
    escalas: [
      { nombre: 'Escala de Burch y Wartofsky (calculadora disponible)', componentes: 'Temperatura, disfuncion del sistema nervioso central, disfuncion digestiva o hepatica, frecuencia cardiaca, insuficiencia cardiaca, fibrilacion auricular y presencia de precipitante.', formula: 'Suma ponderada de los siete dominios; el maximo teorico supera los 140 puntos.', interpretacion: '45 o mas: muy sugestiva de tormenta tiroidea. De 25 a 44: tormenta inminente, y en general se trata como tal. Menos de 25: improbable. Es sensible y poco especifica: sirve para no pasarla por alto, no para etiquetar.' },
      { nombre: 'Criterios de la Japan Thyroid Association', componentes: 'Tirotoxicosis confirmada mas sintomas del sistema nervioso central, fiebre de 38 grados o mas, taquicardia de 130 o mas, insuficiencia cardiaca y sintomas digestivos o hepaticos.', formula: 'Categorias TS1 (definitiva) y TS2 (sospechada) segun combinaciones concretas de criterios.', interpretacion: 'Mas especifica que Burch y Wartofsky y con series nacionales que la respaldan. Exige tirotoxicosis documentada, a diferencia de la anterior, que puede aplicarse antes de tener el perfil.' },
      { nombre: 'Sistema de puntuacion diagnostica del coma mixedematoso (calculadora disponible)', componentes: 'Termorregulacion, sistema nervioso central, aparato digestivo, alteraciones cardiovasculares, alteraciones metabolicas y presencia de precipitante.', formula: 'Suma ponderada de los seis dominios.', interpretacion: '60 o mas: altamente sugestivo, tratar. De 25 a 59: en riesgo, valorar iniciar tratamiento segun el contexto. Menos de 25: improbable. Es la unica escala validada para este cuadro y ayuda a decidir en un diagnostico que se retrasa con frecuencia.' },
      { nombre: 'Clasificacion por precipitante', componentes: 'Infeccion, cirugia, traumatismo, parto, cetoacidosis diabetica, contraste yodado o amiodarona, retirada del antitiroideo o de la levotiroxina, ictus, infarto, embolia pulmonar, exposicion al frio y sedantes.', formula: 'Identificacion clinica, no puntuacion.', interpretacion: 'La infeccion es el precipitante mas frecuente de ambos cuadros. Identificarlo y tratarlo forma parte del tratamiento de la urgencia, no de su estudio posterior: sin ello, el cuadro no se resuelve.' },
      { nombre: 'Factores pronosticos', componentes: 'Edad, alteracion del nivel de conciencia, disfuncion organica multiple, necesidad de ventilacion mecanica, hipotension con vasopresores e ictericia (en la tormenta).', formula: 'Valoracion clinica; algunas series usan APACHE II o SOFA.', interpretacion: 'En la tormenta, la mortalidad ronda el 10 al 30% y aumenta con la afectacion neurologica y la disfuncion multiorganica. En el coma mixedematoso, el 20 al 40%, con peor pronostico si la hipotermia no remonta en 72 horas o si hay hipotension refractaria.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Tormenta tiroidea',
      color: '#8c2f39',
      definicion: 'Forma extrema y descompensada de la tirotoxicosis, con disfuncion organica que amenaza la vida. Es un diagnostico CLINICO: no existe ninguna cifra de hormona tiroidea que la defina ni que la excluya.',
      fisiopatologia: 'Los niveles hormonales de un paciente en tormenta no difieren de los de un hipertiroideo grave sin ella, de modo que el mecanismo no es la cantidad absoluta de hormona. Se atribuye a un ASCENSO BRUSCO de la fraccion libre (por cirugia sobre glandula no preparada, retirada del antitiroideo, carga de yodo o desplazamiento de la union a proteinas en la enfermedad aguda) sumado a una hiperactividad adrenergica desproporcionada con aumento de receptores beta y a una menor capacidad de respuesta al estres, con insuficiencia suprarrenal relativa. Ver la Figura 1 de Definicion.',
      epidemiologia: 'Del 1 al 2% de los ingresos por tirotoxicosis, con incidencia de 0.2 a 0.8 casos por 100000 habitantes y ano. La causa de base mas frecuente es la enfermedad de Graves. Mortalidad del 10 al 30% con tratamiento adecuado, y muy superior si el diagnostico se retrasa.',
      factores_riesgo: ['Hipertiroidismo no diagnosticado o mal controlado', 'Retirada brusca del antitiroideo', 'Cirugia tiroidea o no tiroidea sin preparacion previa', 'Infeccion, que es el precipitante mas frecuente', 'Sobrecarga de yodo: contraste, amiodarona, antisepticos', 'Yodo radiactivo sin cobertura previa con tionamida', 'Parto, cetoacidosis diabetica, traumatismo y quemaduras', 'Palpacion vigorosa de la glandula, infarto y embolia pulmonar', 'Farmacos: salicilatos, pseudoefedrina, quimioterapia'],
      clinica: 'Fiebre alta desproporcionada con sudoracion profusa, taquicardia mayor que la esperable para la temperatura, agitacion o delirio que puede llegar al coma, nauseas, vomitos, diarrea, dolor abdominal e ictericia. Fibrilacion auricular con respuesta rapida e insuficiencia cardiaca de alto gasto. En el anciano puede predominar la apatia con fallo cardiaco y sin cuadro adrenergico.',
      criterios_dx: 'Clinico. La escala de Burch y Wartofsky con 45 puntos o mas la hace muy probable, y entre 25 y 44 se considera inminente y se trata igual. Los criterios de la Japan Thyroid Association son la alternativa mas especifica. Ninguno exige un valor hormonal concreto.',
      laboratorio: 'TSH suprimida con T4 libre y habitualmente T3 altas, aunque la T3 puede ser normal si hay enfermedad aguda grave concomitante. Hiperglucemia, hipercalcemia leve, elevacion de transaminasas y de bilirrubina, y leucocitosis. Hemocultivos y busqueda del precipitante.',
      imagen: 'Radiografia de torax y estudios dirigidos al precipitante. Ecocardiograma si hay insuficiencia cardiaca.',
      complementarios: 'Monitorizacion continua, sondaje vesical con control de diuresis y valoracion neurologica seriada. Extraer muestra hormonal antes de tratar, pero sin esperar el resultado.',
      dx_diferencial: 'Sepsis (el diagnostico que mas se le parece y que ademas puede coexistir como precipitante), hipertermia maligna, sindrome neuroleptico maligno, sindrome serotoninergico, golpe de calor, intoxicacion por simpaticomimeticos o anticolinergicos, feocromocitoma, delirium tremens y encefalitis.',
      tx_medico: 'Ingreso en UCI o unidad de cuidados intermedios. Enfriamiento fisico y PARACETAMOL como antipiretico (NUNCA acido acetilsalicilico, que desplaza la hormona de sus transportadoras y sube la fraccion libre). Sueroterapia con glucosa por el agotamiento del glucogeno, tiamina, correccion de electrolitos y profilaxis antitrombotica. Busqueda y tratamiento del precipitante.',
      tx_farmacologico: 'Cinco frentes a la vez. PROPILTIOURACILO 500 a 1000 mg de carga y 200 a 250 mg cada 4 horas (preferido en la crisis por su bloqueo adicional de la conversion periferica); si no se dispone, metimazol 20 a 25 mg cada 4 a 6 horas. YODO al menos 1 hora DESPUES de la tionamida: Lugol 8 a 10 gotas cada 6 a 8 horas o solucion saturada de yoduro potasico 5 gotas cada 6 horas. PROPRANOLOL 60 a 80 mg cada 4 horas por via oral, o esmolol en perfusion si hay insuficiencia cardiaca. HIDROCORTISONA 100 mg cada 8 horas. COLESTIRAMINA 4 g cada 6 horas como coadyuvante.',
      tx_intervencionista: 'Plasmaferesis si no hay respuesta en 24 a 48 horas o si las tionamidas estan contraindicadas: retira hormona circulante y sirve de puente. Tiroidectomia tras la estabilizacion en casos refractarios. Soporte con oxigenacion por membrana extracorporea en el fallo cardiaco refractario, descrito en series pequenas.',
      criterios_uci: 'Practicamente todos los casos: fiebre alta con disfuncion neurologica, arritmia mal tolerada, insuficiencia cardiaca, hipotension o necesidad de monitorizacion continua.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Monitorizacion continua y reevaluacion frecuente de la puntuacion clinica. La mejoria suele iniciarse en 24 a 48 horas. El yodo se retira en cuanto se controla el cuadro y se planifica el tratamiento definitivo, porque su efecto se agota (fenomeno de escape).',
      seguimiento_ambulatorio: 'Tras el alta, tratamiento definitivo del hipertiroidismo (yodo radiactivo o cirugia): la tormenta es una indicacion clara para no dejarlo solo con antitiroideos a largo plazo. Educar sobre la importancia de no suspender la medicacion.',
      pronostico: 'Mortalidad del 10 al 30%, mayor con afectacion neurologica, disfuncion multiorganica, ictericia y edad avanzada. El retraso diagnostico es el factor modificable de mayor peso.',
      algoritmo: ['Hipertiroideo con fiebre, disfuncion neurologica, digestiva o cardiaca: sospechar', 'Calcular Burch y Wartofsky, pero NO esperar al resultado hormonal', 'Extraer muestra para TSH, T4 libre, T3 y cortisol', 'Iniciar propiltiouracilo (o metimazol si no hay otro)', 'Yodo al menos 1 hora despues de la tionamida', 'Propranolol, o esmolol si hay insuficiencia cardiaca', 'Hidrocortisona 100 mg cada 8 horas', 'Paracetamol y enfriamiento fisico; nunca salicilatos', 'Buscar y tratar el precipitante, con antibioticos si procede', 'Si no responde en 24 a 48 horas: colestiramina y plasmaferesis']
    },
    {
      nombre: 'Coma mixedematoso',
      color: '#4a6fa5',
      definicion: 'Descompensacion extrema de un hipotiroidismo grave y de larga evolucion, con alteracion del nivel de conciencia, hipotermia y fallo multisistemico. El nombre enga&#241;a: no siempre hay coma, y el mixedema no es lo mas grave del cuadro.',
      fisiopatologia: 'El deficit hormonal prolongado reduce la termogenesis, el gasto cardiaco y la respuesta ventilatoria a la hipoxia y la hipercapnia, y deteriora el aclaramiento de agua libre. Sobre ese fondo, un precipitante rompe la compensacion: cae la temperatura sin escalofrios (la respuesta termogenica esta abolida), la hipoventilacion produce hipercapnia y narcosis por dioxido de carbono, la hiponatremia y la hipoglucemia agravan la alteracion de la conciencia, y la bradicardia con vasoconstriccion mantiene una tension precaria que se descompensa con cualquier sobrecarga. Ver la Figura 2 de Definicion.',
      epidemiologia: 'Raro: incidencia estimada de 0.2 a 1 caso por millon de habitantes y ano, con marcado predominio de mujeres ancianas y estacionalidad invernal. Mortalidad del 20 al 40% incluso con tratamiento adecuado, y mayor en series antiguas.',
      factores_riesgo: ['Hipotiroidismo grave no diagnosticado o de larga evolucion', 'Abandono de la levotiroxina', 'Edad avanzada y sexo femenino', 'Exposicion al frio y estacion invernal', 'Infeccion, que es el precipitante mas frecuente', 'Sedantes, opioides, anestesicos y antipsicoticos', 'Amiodarona, litio y contraste yodado', 'Ictus, infarto de miocardio, insuficiencia cardiaca y hemorragia digestiva', 'Cirugia y traumatismo', 'Hipotiroidismo central con insuficiencia suprarrenal asociada'],
      clinica: 'Alteracion del nivel de conciencia que va de la somnolencia al coma, con posibles convulsiones. HIPOTERMIA SIN ESCALOFRIOS. Bradicardia, hipotension, hipoventilacion con hipercapnia, facies abotargada, macroglosia, piel seca y fria, edema sin fovea, ileo o megacolon, retencion urinaria y reflejos con relajacion lenta. La infeccion precipitante puede cursar sin fiebre ni leucocitosis.',
      criterios_dx: 'Clinico y urgente. El sistema de puntuacion diagnostica de Popoveniuc con 60 puntos o mas lo hace muy probable, y entre 25 y 59 obliga a considerarlo. El tratamiento se inicia con la sospecha, sin esperar al perfil tiroideo.',
      laboratorio: 'TSH muy elevada con T4 libre baja si el origen es primario; TSH normal o baja si es central o si hay dopamina o glucocorticoides en curso, de modo que una TSH poco elevada NO descarta el cuadro. Hiponatremia, hipoglucemia, elevacion de creatincinasa, anemia, hipercapnia con hipoxemia y cortisol basal extraido antes de la hidrocortisona.',
      imagen: 'Radiografia de torax (neumonia precipitante, cardiomegalia por derrame pericardico, derrame pleural). Ecocardiograma si hay cardiomegalia. Tomografia craneal si la alteracion de la conciencia no se explica del todo.',
      complementarios: 'Monitorizacion de temperatura CENTRAL, porque los termometros habituales no miden por debajo de 34 a 35 grados. Electrocardiograma seriado por el QT largo. Sondaje vesical por la retencion urinaria frecuente.',
      dx_diferencial: 'Sepsis, hipotermia primaria por exposicion, intoxicacion por sedantes u opioides, encefalopatia hepatica o uremica, hipoglucemia de otra causa, insuficiencia suprarrenal aislada, hiponatremia grave de otro origen, ictus del tronco e hipercapnia por enfermedad pulmonar avanzada.',
      tx_medico: 'Ingreso en UCI. Umbral BAJO para intubar y ventilar: la hipercapnia por hipoventilacion es la causa inmediata de muerte mas frecuente. Recalentamiento PASIVO con mantas, nunca activo, porque la vasodilatacion periferica produce colapso circulatorio. Restriccion hidrica para la hiponatremia, con salino hipertonico solo si es grave o sintomatica y con correccion lenta. Glucosa intravenosa. Evitar sedantes y opioides.',
      tx_farmacologico: 'HIDROCORTISONA 100 mg intravenosos cada 8 horas ANTES o a la vez que la hormona tiroidea, tras extraer cortisol. LEVOTIROXINA 200 a 400 microgramos intravenosos de carga (dosis menor en el anciano, el bajo peso o la cardiopatia coronaria) y despues 50 a 100 microgramos al dia; la via oral no es fiable por el ileo y el edema de mucosa. Se puede anadir LIOTIRONINA 5 a 20 microgramos de carga y 2.5 a 10 microgramos cada 8 horas, porque la conversion periferica esta frenada, con precaucion por el riesgo de arritmia. Antibioterapia empirica con umbral bajo.',
      tx_intervencionista: 'Ventilacion mecanica invasiva, que suele ser necesaria. Marcapasos transitorio en la bradiarritmia sintomatica refractaria, poco frecuente porque la bradicardia mejora con la hormona. Vasopresores si hay hipotension, teniendo en cuenta que la respuesta vascular es pobre hasta que la hormona hace efecto.',
      criterios_uci: 'Practicamente todos los casos: alteracion de la conciencia, hipotermia, hipercapnia, bradicardia o hipotension.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Monitorizacion de temperatura central, gasometrias seriadas, sodio, glucosa y electrocardiograma. La mejoria del nivel de conciencia y de la temperatura en las primeras 24 a 72 horas es el mejor indicador de respuesta. Al recuperar la via oral, pasar a levotiroxina oral con ajuste posterior.',
      seguimiento_ambulatorio: 'Establecer la causa del hipotiroidismo y asegurar la adherencia, porque el abandono de la levotiroxina es un precipitante frecuente y evitable. Control de TSH a las 6 a 8 semanas del alta.',
      pronostico: 'Mortalidad del 20 al 40%. Son factores de mal pronostico la edad avanzada, la hipotermia que no remonta en 72 horas, la bradicardia persistente, la hipotension con vasopresores y la necesidad de ventilacion mecanica.',
      algoritmo: ['Hipotiroideo con alteracion de la conciencia e hipotermia: sospechar', 'Medir temperatura CENTRAL y calcular la puntuacion diagnostica', 'Extraer TSH, T4 libre y cortisol basal', 'Valorar via aerea: umbral bajo para intubar por la hipercapnia', 'HIDROCORTISONA 100 mg antes o a la vez que la hormona', 'Levotiroxina intravenosa de carga, con dosis menor si hay cardiopatia', 'Recalentamiento PASIVO con mantas, nunca activo', 'Corregir sodio con restriccion hidrica y glucosa intravenosa', 'Antibioterapia empirica con umbral bajo, aunque no haya fiebre', 'Buscar el precipitante y evitar sedantes']
    },
    {
      nombre: 'Complicaciones cardiovasculares de la tormenta tiroidea',
      color: '#7a1f3d',
      definicion: 'Conjunto de fallos cardiacos que aparecen en la crisis tirotoxica y que son la causa mas frecuente de muerte en ella: fibrilacion auricular con respuesta rapida, insuficiencia cardiaca de alto gasto, taquimiocardiopatia y choque.',
      fisiopatologia: 'El exceso hormonal aumenta la frecuencia y la contractilidad y baja las resistencias perifericas: el gasto se eleva y la reserva cardiaca se agota. Si a eso se suma una taquiarritmia rapida y mantenida, el llenado diastolico se acorta, aparece taquimiocardiopatia y el gasto acaba cayendo pese al estado hiperdinamico, con hipotension y choque paradojico. El corazon del anciano y el previamente enfermo llegan antes a ese punto.',
      epidemiologia: 'La insuficiencia cardiaca aparece en cerca del 20 al 30% de las tormentas y la fibrilacion auricular en una proporcion similar. En las series de UCI, el fallo cardiaco es el principal determinante de mortalidad junto con la afectacion neurologica.',
      factores_riesgo: ['Edad avanzada', 'Cardiopatia estructural o coronaria previa', 'Fibrilacion auricular preexistente', 'Duracion prolongada de la tirotoxicosis no tratada', 'Anemia o infeccion concomitantes, que aumentan la demanda', 'Sobrecarga de volumen durante la reanimacion', 'Retirada del betabloqueante', 'Hipertension pulmonar asociada a la tirotoxicosis'],
      clinica: 'Palpitaciones, disnea, ortopnea, ingurgitacion yugular, crepitantes y edemas. La taquicardia es desproporcionada a la fiebre. En el choque, hipotension con extremidades calientes al principio y frias despues, oliguria y acidosis lactica.',
      criterios_dx: 'Clinico y ecocardiografico, en el contexto de una tormenta tiroidea. La fibrilacion auricular se documenta en el electrocardiograma; la taquimiocardiopatia se sospecha ante disfuncion sistolica con frecuencia mantenida alta y se confirma retrospectivamente por su reversibilidad.',
      laboratorio: 'Troponina y peptido natriuretico (ambos pueden estar elevados sin cardiopatia estructural en la tirotoxicosis), lactato, gasometria y funcion renal. Perfil hepatico, porque la congestion hepatica del fallo derecho contribuye a la ictericia.',
      imagen: 'Ecocardiograma para valorar funcion sistolica, presiones de llenado y presion pulmonar. Radiografia de torax para congestion.',
      complementarios: 'Monitorizacion continua del ritmo y de la tension. Valoracion conjunta con cardiologia e intensivos.',
      dx_diferencial: 'Sepsis con disfuncion miocardica, sindrome coronario agudo, miocarditis, embolia pulmonar (que ademas puede ser el precipitante) y miocardiopatia de estres.',
      tx_medico: 'Control estricto del balance hidrico: la sobrecarga se tolera mal. Oxigenoterapia y soporte ventilatorio si es preciso. Correccion de la anemia y de la infeccion, que aumentan la demanda.',
      tx_farmacologico: 'Betabloqueo con precaucion en la insuficiencia cardiaca: se prefiere ESMOLOL en perfusion por ser titulable y de vida media muy corta, de modo que se puede retirar en minutos si el paciente empeora. Diureticos para la congestion. Digoxina como coadyuvante para el control de frecuencia, teniendo en cuenta que en la tirotoxicosis hay resistencia relativa y se necesitan dosis mayores. Anticoagulacion segun el riesgo embolico calculado con las escalas habituales, no de forma automatica. En paralelo, todo el tratamiento antitiroideo de la crisis.',
      tx_intervencionista: 'Cardioversion electrica si hay inestabilidad hemodinamica, sabiendo que la recidiva es probable mientras persista la tirotoxicosis. Soporte circulatorio mecanico u oxigenacion por membrana extracorporea en el choque refractario, descritos en series pequenas con supervivencias notables.',
      criterios_uci: 'Todos: arritmia mal tolerada, insuficiencia cardiaca aguda, hipotension o necesidad de perfusion de esmolol.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Monitorizacion continua y ecocardiograma de control al mejorar. La funcion sistolica suele recuperarse al alcanzar el eutiroidismo, lo que confirma la taquimiocardiopatia.',
      seguimiento_ambulatorio: 'Reevaluar el ritmo a los 2 a 3 meses del eutiroidismo antes de plantear cardioversion electiva: hasta dos tercios revierten solos. Tratamiento definitivo del hipertiroidismo.',
      pronostico: 'La disfuncion sistolica es en gran medida reversible al corregir la tirotoxicosis. El choque y el fallo multiorganico marcan la mortalidad de la tormenta.',
      algoritmo: ['Monitorizacion continua desde el ingreso', 'Electrocardiograma y ecocardiograma precoces', 'Betabloqueo con esmolol si hay insuficiencia cardiaca', 'Diureticos para la congestion y control estricto de volumen', 'Digoxina coadyuvante, recordando la resistencia relativa', 'Anticoagulacion segun riesgo embolico calculado', 'Cardioversion solo si hay inestabilidad', 'Tratar en paralelo la crisis tirotoxica completa', 'Diferir la cardioversion electiva a 2 a 3 meses de eutiroidismo']
    },
    {
      nombre: 'Complicaciones del coma mixedematoso',
      color: '#3d5a73',
      definicion: 'Alteraciones que acompanan al cuadro y que, mal manejadas, lo agravan o lo hacen mortal: insuficiencia respiratoria hipercapnica, hiponatremia, hipoglucemia, insuficiencia suprarrenal concomitante e infeccion oculta.',
      fisiopatologia: 'La respuesta ventilatoria a la hipoxia y a la hipercapnia esta deprimida, y a ello se suman la debilidad de los musculos respiratorios, la macroglosia, el edema de la via aerea superior y el derrame pleural: el resultado es hipoventilacion con hipercapnia y narcosis. El aclaramiento de agua libre esta reducido, con secrecion inadecuada de vasopresina, lo que produce hiponatremia dilucional. La gluconeogenesis esta disminuida y, si hay insuficiencia suprarrenal asociada, tambien la respuesta contrarreguladora, de ahi la hipoglucemia. Y la respuesta febril y leucocitaria esta abolida, por lo que la infeccion pasa desapercibida.',
      epidemiologia: 'La hipercapnia esta presente en la mayoria de los casos graves y es la causa inmediata de muerte mas frecuente. La hiponatremia aparece en cerca de la mitad de los pacientes. La insuficiencia suprarrenal coexiste en el 5 al 10%, proporcion mucho mayor si el hipotiroidismo es central.',
      factores_riesgo: ['Hipotiroidismo de larga evolucion y grave', 'Enfermedad pulmonar previa y obesidad', 'Sedantes, opioides y anestesicos', 'Hipotiroidismo central (insuficiencia suprarrenal secundaria asociada)', 'Sindrome poliglandular autoinmune tipo 2', 'Edad avanzada y desnutricion', 'Sobrecarga de volumen durante la reanimacion', 'Administracion de levotiroxina antes del glucocorticoide'],
      clinica: 'Somnolencia progresiva y respiracion superficial, con cianosis tardia. Convulsiones si la hiponatremia o la hipoglucemia son graves. Hipotension que no responde a volumen si hay insuficiencia suprarrenal. Ausencia de fiebre y de leucocitosis pese a una infeccion activa, que es la trampa mas peligrosa del cuadro.',
      criterios_dx: 'Gasometria con hipercapnia, sodio bajo, glucemia baja y cortisol basal inapropiadamente bajo para el estres. Los cultivos pueden ser el unico dato de infeccion.',
      laboratorio: 'Gasometria arterial seriada, sodio, osmolalidad plasmatica y urinaria, sodio urinario, glucemia capilar frecuente, cortisol basal y ACTH, hemograma, procalcitonina y cultivos.',
      imagen: 'Radiografia de torax para neumonia y derrame. Tomografia craneal si hay convulsiones o focalidad.',
      complementarios: 'Capnografia y monitorizacion respiratoria continua. Control glucemico horario en las primeras horas.',
      dx_diferencial: 'Insuficiencia respiratoria de otra causa, sindrome de secrecion inadecuada de vasopresina de otro origen, insuficiencia suprarrenal primaria aislada, sepsis y encefalopatia metabolica de otra causa.',
      tx_medico: 'Ventilacion mecanica con umbral bajo. Restriccion hidrica para la hiponatremia leve o moderada, y salino hipertonico solo si es grave o sintomatica, respetando los limites de correccion para no provocar desmielinizacion osmotica. Glucosa intravenosa. Evitar sedantes y opioides, cuyo metabolismo esta muy enlentecido y cuyo efecto se prolonga.',
      tx_farmacologico: 'HIDROCORTISONA 100 mg cada 8 horas desde el inicio, antes o a la vez que la hormona tiroidea, y mantenida hasta descartar el deficit suprarrenal. Antibioterapia empirica de amplio espectro con umbral bajo, aunque no haya fiebre ni leucocitosis. La correccion del hipotiroidismo con levotiroxina mejora por si sola la hiponatremia y la hipoventilacion en dias.',
      tx_intervencionista: 'Intubacion y ventilacion mecanica invasiva, a menudo prolongada. Toracocentesis o pericardiocentesis solo si el derrame compromete, lo que es infrecuente por su instauracion lenta.',
      criterios_uci: 'Hipercapnia, alteracion de la conciencia, hiponatremia grave, hipotension o hipoglucemia de repeticion.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Gasometrias y sodio seriados con velocidad de correccion controlada. Retirada progresiva de la hidrocortisona una vez descartada la insuficiencia suprarrenal. Destete ventilatorio guiado por la recuperacion del nivel de conciencia y del impulso respiratorio.',
      seguimiento_ambulatorio: 'Comprobar la normalizacion del sodio y de la funcion respiratoria. Reevaluar el eje suprarrenal fuera de la fase aguda si se sospecho deficit.',
      pronostico: 'La hipercapnia y la hipotension refractaria son los principales determinantes de mortalidad. La hiponatremia y la hipoglucemia se corrigen bien si el resto del tratamiento es correcto.',
      algoritmo: ['Gasometria arterial precoz y capnografia', 'Umbral bajo para intubar por hipercapnia', 'Extraer cortisol basal e iniciar hidrocortisona sin esperar resultado', 'Hidrocortisona ANTES o a la vez que la levotiroxina', 'Glucemia capilar frecuente y glucosa intravenosa', 'Hiponatremia: restriccion hidrica; hipertonico solo si es grave', 'Respetar los limites de velocidad de correccion del sodio', 'Antibioterapia empirica pese a la ausencia de fiebre', 'Evitar sedantes y opioides']
    },
    {
      nombre: 'Errores de tratamiento en las urgencias tiroideas',
      color: '#6b4a2e',
      definicion: 'Conjunto de decisiones equivocadas que agravan el cuadro o lo hacen mortal. Se recogen aqui como ficha propia porque, en dos urgencias tan raras, la mayoria de las muertes evitables se debe a un numero pequeno y repetido de errores.',
      fisiopatologia: 'Cada error tiene un mecanismo concreto. El acido acetilsalicilico desplaza la hormona de la globulina fijadora y de la albumina y sube la fraccion libre. El yodo administrado antes de la tionamida aporta sustrato a una glandula sin freno y puede agravar la crisis. El calentamiento activo en el coma mixedematoso produce vasodilatacion periferica sobre un gasto cardiaco fijo y precipita el colapso. La levotiroxina antes del glucocorticoide acelera el aclaramiento del cortisol y desenmascara una insuficiencia suprarrenal. Y esperar al perfil hormonal retrasa horas un tratamiento que se mide en horas.',
      epidemiologia: 'El retraso diagnostico es el factor modificable de mayor impacto en la mortalidad de ambos cuadros. En las series de tormenta, una proporcion importante de los pacientes tenia hipertiroidismo conocido y mal controlado, es decir, la crisis era previsible.',
      factores_riesgo: ['Baja frecuencia de ambos cuadros y falta de familiaridad', 'Presentacion que imita a la sepsis o a la hipotermia primaria', 'Dependencia excesiva del resultado analitico para decidir', 'Confusion entre tirotoxicosis con captacion alta y baja', 'Uso de escalas como criterio diagnostico en vez de como ayuda', 'Ausencia de protocolo escrito en el servicio', 'Cambios de turno durante la fase inicial del tratamiento'],
      clinica: 'La consecuencia clinica del error es un paciente que no mejora o que empeora en las primeras horas: fiebre que no cede, taquicardia que persiste, hipotension nueva tras la primera dosis de hormona, o deterioro del nivel de conciencia durante el recalentamiento.',
      criterios_dx: 'Revision sistematica de las ordenes de tratamiento en las primeras 6 horas: farmaco, dosis, via y ORDEN de administracion.',
      laboratorio: 'Comprobar que se extrajo cortisol antes de la hidrocortisona y muestra hormonal antes de la primera dosis de tionamida o de levotiroxina, sin que ello haya retrasado el tratamiento.',
      imagen: 'No aplica.',
      complementarios: 'Lista de comprobacion al pie de cama con los cinco carriles de cada cuadro y las cuatro prohibiciones. Es la intervencion mas eficaz en un cuadro que cada medico ve pocas veces en su carrera.',
      dx_diferencial: 'Fallo de respuesta por error de tratamiento frente a fallo por gravedad del cuadro o por precipitante no tratado. Ante un paciente que no mejora, hay que revisar ambas cosas.',
      tx_medico: 'Corregir el error identificado y reevaluar. En la tormenta: sustituir el salicilato por paracetamol, comprobar que la tionamida precedio al yodo, anadir hidrocortisona si falta. En el coma mixedematoso: pasar a recalentamiento pasivo, anadir hidrocortisona, reevaluar la via aerea.',
      tx_farmacologico: 'Los cinco carriles completos de cada cuadro, en el orden correcto. Si el paciente no responde en 24 a 48 horas pese a un tratamiento bien administrado, escalar: colestiramina y plasmaferesis en la tormenta, liotironina anadida y soporte pleno en el coma mixedematoso.',
      tx_intervencionista: 'Plasmaferesis o tiroidectomia en la tormenta refractaria; ventilacion mecanica en el coma mixedematoso.',
      criterios_uci: 'Cualquiera de los dos cuadros no resuelto en las primeras horas.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Revision de la secuencia de tratamiento en cada pase de guardia durante las primeras 48 horas, y comprobacion de que el precipitante se busco y se trato.',
      seguimiento_ambulatorio: 'Analisis del caso y, si procede, incorporacion de la leccion al protocolo del servicio. En la tormenta, planificar el tratamiento definitivo del hipertiroidismo antes del alta.',
      pronostico: 'Los errores de esta lista son, en su mayoria, la diferencia entre una mortalidad del 10% y una del 30%.',
      algoritmo: ['NUNCA acido acetilsalicilico como antipiretico en la tormenta', 'NUNCA yodo antes que la tionamida en un hipertiroidismo verdadero', 'NUNCA antitiroideos en una tirotoxicosis con captacion baja', 'NUNCA levotiroxina antes que el glucocorticoide en el coma mixedematoso', 'NUNCA recalentamiento activo en el coma mixedematoso', 'NUNCA esperar al perfil tiroideo para iniciar el tratamiento', 'SIEMPRE buscar y tratar el precipitante', 'SIEMPRE extraer cortisol antes de la hidrocortisona, sin retrasar la dosis', 'SIEMPRE reevaluar en 24 a 48 horas y escalar si no hay respuesta']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Las dos urgencias tiroideas se manejan en UCI y comparten una estructura: reconocer sin esperar al laboratorio, tratar en varios frentes a la vez, buscar el precipitante y evitar una lista corta de errores. Lo que sigue es la lista de comprobacion que conviene tener a mano, porque cada medico ve pocos casos a lo largo de su carrera.',
    parametros: ['Ante fiebre con taquicardia desproporcionada y disfuncion neurologica en un hipertiroideo: sospechar tormenta y tratar sin esperar hormonas', 'Ante alteracion de la conciencia con hipotermia en un anciano: medir temperatura CENTRAL y pensar en coma mixedematoso', 'Extraer muestra hormonal y cortisol antes de tratar, pero no esperar el resultado', 'Tormenta: tionamida primero, yodo al menos 1 hora despues, propranolol o esmolol e hidrocortisona', 'Tormenta: paracetamol y enfriamiento fisico, nunca acido acetilsalicilico', 'Coma mixedematoso: hidrocortisona antes o a la vez que la levotiroxina, sin excepcion', 'Coma mixedematoso: recalentamiento pasivo, umbral bajo para intubar y evitar sedantes', 'Buscar y tratar el precipitante en ambos: infeccion, cirugia, farmacos, sobrecarga de yodo, abandono del tratamiento', 'Antibioterapia empirica con umbral bajo, sobre todo en el coma mixedematoso, donde puede no haber fiebre', 'Reevaluar a las 24 a 48 horas: si no hay respuesta, colestiramina y plasmaferesis en la tormenta, y revisar errores en ambos'],
    criterios_uci_general: 'Practicamente todos los casos de ambas entidades. En la tormenta: fiebre alta con disfuncion neurologica, arritmia mal tolerada, insuficiencia cardiaca o hipotension. En el coma mixedematoso: alteracion de la conciencia, hipotermia, hipercapnia, bradicardia o hipotension.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa. En la tormenta, el fallo hepatico agudo por propiltiouracilo es excepcional pero ha requerido trasplante, motivo por el que ese farmaco se limita a indicaciones concretas fuera de la crisis.',
    prevencion: 'Primaria y la mas eficaz: control adecuado del hipertiroidismo y del hipotiroidismo conocidos, con insistencia en no abandonar el tratamiento. Preparacion con tionamida y yodo antes de la tiroidectomia, y cobertura con tionamida antes del yodo radiactivo en el paciente de riesgo. Cautela con la sobrecarga de yodo (contrastes, amiodarona) en el bocio nodular del anciano. En el hipotiroidismo grave del anciano, evitar sedantes y opioides y vigilar en los meses frios. Secundaria: protocolo escrito y lista de comprobacion en urgencias y en UCI, que es lo que mas acorta el retraso diagnostico.'
  }
};

export const compCites = {
  'Tormenta tiroidea': [1, 3, 4, 6],
  'Coma mixedematoso': [9, 10, 12, 15],
  'Complicaciones cardiovasculares de la tormenta tiroidea': [7, 8],
  'Complicaciones del coma mixedematoso': [12, 13, 10],
  'Errores de tratamiento en las urgencias tiroideas': [2, 10, 17]
};
export const estigmasTitulo = 'Signos de alarma que separan la crisis del hipertiroidismo o del hipotiroidismo estables';
export const estigmas = [
  { s: 'Fiebre desproporcionada sin foco (tormenta)', p: 'Casi constante', photo: null, desc: 'A menudo por encima de 38.5 grados y con sudoracion profusa. Es el signo que mas separa la tormenta de una tirotoxicosis grave estable, y el que mas se confunde con una sepsis, que ademas puede coexistir como precipitante.' },
  { s: 'Taquicardia desproporcionada a la temperatura (tormenta)', p: '~90%', photo: null, desc: 'Frecuencias por encima de 140 latidos por minuto que no se explican por la fiebre. Es uno de los dominios mejor puntuados en la escala de Burch y Wartofsky y suele ir acompanada de presion de pulso amplia.' },
  { s: 'Agitacion, delirio o psicosis (tormenta)', p: '50-70%', photo: null, desc: 'La afectacion del sistema nervioso central es el dominio con mayor peso pronostico: su presencia multiplica la mortalidad. Puede progresar a convulsion y coma.' },
  { s: 'Ictericia sin causa aparente (tormenta)', p: '~20%', photo: null, desc: 'Signo de mal pronostico. Refleja la combinacion de congestion hepatica por fallo derecho y toxicidad directa del exceso hormonal. Obliga a descartar tambien hepatotoxicidad por propiltiouracilo si el paciente ya lo recibia.' },
  { s: 'Fibrilacion auricular con respuesta rapida (tormenta)', p: '~30%', photo: null, desc: 'Puntua en la escala y contribuye de forma directa al fallo cardiaco por acortamiento del llenado diastolico. Hasta dos tercios revierten solos al alcanzar el eutiroidismo, por lo que la cardioversion electiva se difiere.' },
  { s: 'Hipotermia sin escalofrios (coma mixedematoso)', p: '~80%', photo: null, desc: 'La respuesta termogenica esta abolida, de modo que el paciente esta frio y NO tirita. Puede pasar desapercibida porque los termometros habituales no miden por debajo de 34 a 35 grados: hay que medir temperatura central.' },
  { s: 'Alteracion del nivel de conciencia (coma mixedematoso)', p: 'Constante', photo: null, desc: 'Desde la somnolencia hasta el coma, con convulsiones posibles. No hace falta que haya coma para hacer el diagnostico, pese al nombre de la entidad. Se agrava por la hipercapnia, la hiponatremia y la hipoglucemia.' },
  { s: 'Bradicardia con hipotension (coma mixedematoso)', p: '~70%', photo: null, desc: 'El gasto cardiaco esta reducido y la respuesta vasopresora es pobre hasta que la hormona hace efecto. La sobrecarga de volumen se tolera mal, sobre todo si hay derrame pericardico asociado.' },
  { s: 'Hipoventilacion con hipercapnia (coma mixedematoso)', p: '~50%', photo: null, desc: 'Causa inmediata de muerte mas frecuente del cuadro. La respuesta ventilatoria a la hipoxia y a la hipercapnia esta deprimida y se suman la macroglosia, el edema de la via aerea y la debilidad muscular. Umbral bajo para intubar.' },
  { s: 'Ausencia de fiebre y de leucocitosis pese a infeccion (coma mixedematoso)', p: 'Frecuente', photo: null, desc: 'La trampa mas peligrosa: la infeccion es el precipitante mas frecuente y el hipotiroidismo abole la respuesta febril y leucocitaria. Obliga a un umbral muy bajo para iniciar antibioterapia empirica.' },
  { s: 'Hiponatremia e hipoglucemia (coma mixedematoso)', p: '~50% y ~25%', photo: null, desc: 'Contribuyen de forma directa a la alteracion de la conciencia y pueden provocar convulsiones. La hiponatremia se corrige sobre todo con restriccion hidrica y con la propia hormona; el hipertonico se reserva a los casos graves o sintomaticos.' },
  { s: 'Ileo o megacolon y retencion urinaria (coma mixedematoso)', p: '~30%', photo: null, desc: 'Explican por que la via oral no es fiable para la levotiroxina y obligan a la via intravenosa. La retencion urinaria justifica el sondaje y puede confundirse con un abdomen agudo.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Escala de Burch y Wartofsky (calculadora disponible)': [1, 2],
  'Criterios de la Japan Thyroid Association': [3, 4],
  'Sistema de puntuacion diagnostica del coma mixedematoso (calculadora disponible)': [9],
  'Clasificacion por precipitante': [4, 12],
  'Factores pronosticos': [8, 12, 7]
};
export const escalaCalc = {
  'Escala de Burch y Wartofsky (calculadora disponible)': 'burch-wartofsky',
  'Sistema de puntuacion diagnostica del coma mixedematoso (calculadora disponible)': 'coma-mixedematoso'
};
export const compGroups = [
  { name: 'Las dos urgencias', items: ['Tormenta tiroidea', 'Coma mixedematoso'] },
  { name: 'Complicaciones y errores', items: ['Complicaciones cardiovasculares de la tormenta tiroidea', 'Complicaciones del coma mixedematoso', 'Errores de tratamiento en las urgencias tiroideas'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son las urgencias mismas, en los dos extremos del eje: la tormenta tiroidea y el coma mixedematoso. Las dos siguientes recogen lo que mata en cada una: el fallo cardiaco en la tormenta y la hipoventilacion con hipercapnia, la hiponatremia y la insuficiencia suprarrenal no reconocida en el coma mixedematoso. La ultima es una ficha atipica pero deliberada: la lista de los errores de tratamiento, porque en dos cuadros tan raros la mayoria de las muertes evitables se debe a un numero pequeno y repetido de fallos.';
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
    { title: 'TORMENTA TIROIDEA', sub: 'Hipertiroideo con disfuncion organica', color: '#8c2f39', target: 'complicaciones', leaves: [
      { title: 'Burch y Wartofsky', sub: '45 o mas: muy probable', color: '#8c2f39', target: 'clasificacion' },
      { title: 'Tionamida y despues yodo', sub: 'Nunca al reves', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Propranolol e hidrocortisona', sub: 'Frenan la conversion', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Fallo cardiaco', sub: 'Esmolol titulable', color: '#7a1f3d', target: 'complicaciones' }
    ] },
    { title: 'COMA MIXEDEMATOSO', sub: 'Conciencia, hipotermia y precipitante', color: '#4a6fa5', target: 'complicaciones', leaves: [
      { title: 'Puntuacion de Popoveniuc', sub: '60 o mas: tratar', color: '#4a6fa5', target: 'clasificacion' },
      { title: 'Esteroide antes que hormona', sub: 'Evita la crisis addisoniana', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Levotiroxina intravenosa', sub: 'La via oral no es fiable', color: '#4a6fa5', target: 'complicaciones' },
      { title: 'Hipercapnia', sub: 'Umbral bajo para intubar', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'LO COMUN A LAS DOS', sub: 'Tres reglas que valen para ambas', color: '#3f6b52', target: 'definicion', leaves: [
      { title: 'Diagnostico clinico', sub: 'Ninguna cifra las define', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Buscar el precipitante', sub: 'La infeccion es el mas frecuente', color: '#6b4a2e', target: 'clasificacion' },
      { title: 'Tratar con la sospecha', sub: 'No esperar al laboratorio', color: '#8c2f39', target: 'complicaciones' },
      { title: 'Los errores que matan', sub: 'Lista de comprobacion', color: '#6b4a2e', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [2, 9], no_invasivos: [1, 3, 9], imagen: [10, 12] };
export const clasificacionCite = [1, 3, 9];
export const seguimientoCite = [2, 10];
