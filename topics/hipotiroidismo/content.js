// topics/hipotiroidismo/content.js: Hipotiroidismo.
// Cubre la parte de hipotiroidismo del item "Hipotiroidismo e hipertiroidismo" del cluster
// Tiroides y paratiroides (bloque VII, Endocrinologia y Metabolismo) del temario. Primero de los
// cinco temas del eje tiroideo: hipotiroidismo, hipertiroidismo y tiroiditis, urgencias tiroideas,
// nodulo y cancer de tiroides, y metabolismo oseo y mineral.
//
// Fuentes principales: guia de la American Thyroid Association para el tratamiento del
// hipotiroidismo; guia conjunta AACE/ATA; guia de la ATA para la enfermedad tiroidea en el
// embarazo; guia de la European Thyroid Association para el hipotiroidismo central; y los
// ensayos TRUST e IEMO sobre el hipotiroidismo subclinico del anciano.
//
// El coma mixedematoso NO se desarrolla aqui: tiene tema propio en `urgencias-tiroideas`.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 3 formas (primario, central, subclinico) + 3 situaciones y complicaciones
// (embarazo, hipotiroidismo de dificil control, sobretratamiento). 2 calculadoras, 2 figuras.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'hipotiroidismo',
  titulo: 'Hipotiroidismo',
  subtitulo: 'Modulo 43 · Medicina Interna',
  accent: '#4a6fa5',
  accentDim: '#9fb4cf'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const ejeHtml = `
<div style="max-width:640px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:stretch;margin-bottom:7px;">
    <div style="flex:1;min-width:180px;display:flex;flex-direction:column;gap:4px;">
      <div style="border:1px solid #6b4a8c;border-radius:8px;padding:5px 8px;background:#6b4a8c12;">
        <div style="font-weight:700;color:#6b4a8c;">Hipotalamo</div>
        <div style="color:var(--ink-dim);">Libera <strong>TRH</strong> hacia la hipofisis por el sistema portal</div>
      </div>
      <div style="text-align:center;color:var(--ink-dim);font-size:12px;line-height:1;">&#9660;</div>
      <div style="border:1px solid #3d5a73;border-radius:8px;padding:5px 8px;background:#3d5a7312;">
        <div style="font-weight:700;color:#3d5a73;">Hipofisis anterior</div>
        <div style="color:var(--ink-dim);">Libera <strong>TSH</strong>. Es la celula mas sensible del cuerpo a la hormona tiroidea: percibe cambios minimos de T4 libre</div>
      </div>
      <div style="text-align:center;color:var(--ink-dim);font-size:12px;line-height:1;">&#9660;</div>
      <div style="border:1px solid #4a6fa5;border-radius:8px;padding:5px 8px;background:#4a6fa512;">
        <div style="font-weight:700;color:#4a6fa5;">Tiroides</div>
        <div style="color:var(--ink-dim);">Secreta sobre todo <strong>T4</strong> (unas 20 veces mas que T3). La T4 es el reservorio; la <strong>T3</strong> es la hormona activa</div>
      </div>
      <div style="text-align:center;color:var(--ink-dim);font-size:12px;line-height:1;">&#9660;</div>
      <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;background:#3f6b5212;">
        <div style="font-weight:700;color:#3f6b52;">Tejidos perifericos</div>
        <div style="color:var(--ink-dim);">Las <strong>desyodasas tipo 1 y 2</strong> convierten T4 en T3. La <strong>tipo 3</strong> la inactiva a T3 reversa: es la via que se dispara en la enfermedad grave</div>
      </div>
    </div>
    <div style="flex:1.15;min-width:230px;border:1px solid var(--line);border-radius:8px;padding:7px 9px;background:var(--panel2);">
      <div style="font-weight:700;color:var(--accent-fg);margin-bottom:4px;">La clave de todo: la relacion es logaritmica</div>
      <div style="color:var(--ink-dim);margin-bottom:6px;">Un descenso pequeno de T4 libre produce una subida <strong>grande</strong> de TSH. Por eso la TSH es la prueba mas sensible del eje y el cribado se hace con ella sola. Y por eso tambien la TSH se altera <strong>antes</strong> que la T4 libre: esa es la definicion misma de enfermedad subclinica.</div>
      <div style="padding:5px 8px;border:1px solid #8a6a1f;border-radius:6px;background:#8a6a1f12;">
        <strong style="color:#8a6a1f;">La excepcion que hay que memorizar:</strong> <span style="color:var(--ink-dim);">la TSH solo sirve si la hipofisis funciona. En el <strong>hipotiroidismo central</strong> la TSH puede ser baja, normal o incluso ligeramente alta pero biologicamente inactiva, y siempre con T4 libre baja. Ahi la TSH engana y hay que guiarse por la T4 libre.</span>
      </div>
      <div style="margin-top:5px;padding:5px 8px;border:1px solid #8c3a34;border-radius:6px;background:#8c3a3412;">
        <strong style="color:#8c3a34;">La otra excepcion:</strong> <span style="color:var(--ink-dim);">tras corregir un hipotiroidismo de larga evolucion, la TSH puede tardar <strong>semanas o meses</strong> en normalizarse. No se reajusta la dosis antes de 6 a 8 semanas.</span>
      </div>
    </div>
  </div>
  <div style="font-weight:700;color:var(--accent-fg);margin:8px 0 4px;">Los seis patrones del perfil tiroideo</div>
  <div style="display:flex;flex-direction:column;gap:3px;">
    <div style="display:grid;grid-template-columns:60px 60px 1fr;gap:5px;align-items:center;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:5px;padding:3px;text-align:center;font-weight:700;color:#8c3a34;">TSH alta</div>
      <div style="background:#4a6fa522;border:1px solid #4a6fa5;border-radius:5px;padding:3px;text-align:center;font-weight:700;color:#4a6fa5;">T4L baja</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;color:var(--ink-dim);"><strong style="color:var(--ink);">Hipotiroidismo primario.</strong> El 95% de los casos. La tiroides falla y la hipofisis grita</div>
    </div>
    <div style="display:grid;grid-template-columns:60px 60px 1fr;gap:5px;align-items:center;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:5px;padding:3px;text-align:center;font-weight:700;color:#8c3a34;">TSH alta</div>
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:5px;padding:3px;text-align:center;font-weight:700;color:#3f6b52;">T4L normal</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;color:var(--ink-dim);"><strong style="color:var(--ink);">Hipotiroidismo subclinico.</strong> Confirmar a las 6 a 12 semanas antes de etiquetar: hasta un tercio se normaliza solo</div>
    </div>
    <div style="display:grid;grid-template-columns:60px 60px 1fr;gap:5px;align-items:center;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:5px;padding:3px;text-align:center;font-weight:700;color:#8a6a1f;">TSH baja</div>
      <div style="background:#4a6fa522;border:1px solid #4a6fa5;border-radius:5px;padding:3px;text-align:center;font-weight:700;color:#4a6fa5;">T4L baja</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;color:var(--ink-dim);"><strong style="color:var(--ink);">Hipotiroidismo central</strong> o <strong style="color:var(--ink);">sindrome del enfermo eutiroideo</strong>. Los distingue el contexto: hipofisis frente a paciente grave</div>
    </div>
    <div style="display:grid;grid-template-columns:60px 60px 1fr;gap:5px;align-items:center;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:5px;padding:3px;text-align:center;font-weight:700;color:#8a6a1f;">TSH baja</div>
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:5px;padding:3px;text-align:center;font-weight:700;color:#8c3a34;">T4L alta</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;color:var(--ink-dim);"><strong style="color:var(--ink);">Tirotoxicosis.</strong> El siguiente paso no es repetir el perfil, sino medir la captacion (ver el tema de hipertiroidismo)</div>
    </div>
    <div style="display:grid;grid-template-columns:60px 60px 1fr;gap:5px;align-items:center;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:5px;padding:3px;text-align:center;font-weight:700;color:#8a6a1f;">TSH baja</div>
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:5px;padding:3px;text-align:center;font-weight:700;color:#3f6b52;">T4L normal</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;color:var(--ink-dim);"><strong style="color:var(--ink);">Hipertiroidismo subclinico</strong>, o <strong style="color:var(--ink);">toxicosis por T3</strong> si la T3 esta alta. Importa por la fibrilacion auricular y por el hueso</div>
    </div>
    <div style="display:grid;grid-template-columns:60px 60px 1fr;gap:5px;align-items:center;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:5px;padding:3px;text-align:center;font-weight:700;color:#8c3a34;">TSH alta</div>
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:5px;padding:3px;text-align:center;font-weight:700;color:#8c3a34;">T4L alta</div>
      <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;color:var(--ink-dim);"><strong style="color:var(--ink);">Patron discordante.</strong> Antes de pensar en un adenoma hipofisario secretor o en resistencia a hormonas tiroideas, descartar mala adherencia con toma reciente e <strong>interferencia del ensayo</strong> (biotina, anticuerpos heterofilos)</div>
    </div>
  </div>
</div>`;

const subclinicoHtml = `
<div style="max-width:620px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="border:1px solid var(--line);border-radius:8px;padding:5px 9px;background:var(--panel2);margin-bottom:6px;">
    <strong style="color:var(--accent-fg);">Punto de partida:</strong> <span style="color:var(--ink-dim);">TSH alta con T4 libre normal, <strong>confirmada en una segunda determinacion a las 6 a 12 semanas</strong> junto con anticuerpos antitiroperoxidasa. Sin esa confirmacion no se trata a nadie: hasta un tercio de las TSH ligeramente altas se normalizan solas.</span>
  </div>
  <div style="display:flex;gap:7px;flex-wrap:wrap;">
    <div style="flex:1;min-width:250px;border:1px solid #8c3a34;border-radius:8px;padding:6px 9px;background:#8c3a3410;">
      <div style="font-weight:700;color:#8c3a34;margin-bottom:3px;">TSH de 10 mUI/L o mas</div>
      <div style="color:var(--ink-dim);">Se trata. Es el grupo con riesgo demostrado de progresion a hipotiroidismo franco, de insuficiencia cardiaca y de enfermedad coronaria. Dosis baja, de 25 a 75 microgramos, y objetivo de TSH en la mitad baja del rango normal.</div>
    </div>
    <div style="flex:1;min-width:250px;border:1px solid #8a6a1f;border-radius:8px;padding:6px 9px;background:#8a6a1f10;">
      <div style="font-weight:700;color:#8a6a1f;margin-bottom:3px;">TSH entre el limite alto y 10 mUI/L</div>
      <div style="color:var(--ink-dim);">Aqui esta la decision dificil. Se inclina <strong>a favor</strong> de tratar: edad menor de 65 a 70 anos, anticuerpos positivos, bocio, sintomas atribuibles, dislipidemia o riesgo cardiovascular alto, infertilidad. Se inclina <strong>en contra</strong>: edad avanzada, ausencia de sintomas, TSH apenas por encima del limite.</div>
    </div>
  </div>
  <div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:6px;">
    <div style="flex:1;min-width:250px;border:1px solid #3f6b52;border-radius:8px;padding:6px 9px;background:#3f6b5210;">
      <div style="font-weight:700;color:#3f6b52;margin-bottom:3px;">Embarazo o busqueda de embarazo</div>
      <div style="color:var(--ink-dim);">Regla aparte y mucho mas permisiva: se trata la TSH por encima del rango del trimestre, y con <strong>anticuerpos positivos</strong> el umbral baja aun mas. La hormona tiroidea materna es imprescindible para el desarrollo neurologico fetal del primer trimestre, cuando el feto todavia no produce la suya.</div>
    </div>
    <div style="flex:1;min-width:250px;border:1px solid #5b4a86;border-radius:8px;padding:6px 9px;background:#5b4a8610;">
      <div style="font-weight:700;color:#5b4a86;margin-bottom:3px;">Mayor de 80 a 85 anos</div>
      <div style="color:var(--ink-dim);">Se observa. La TSH sube de forma fisiologica con la edad y una TSH ligeramente alta se ha asociado a <strong>mayor</strong> supervivencia en el muy anciano. El ensayo TRUST no mostro beneficio sintomatico en mayores de 65 anos, y el riesgo del sobretratamiento (fibrilacion auricular, fractura) es real.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid var(--line);border-radius:8px;background:var(--panel2);color:var(--ink-dim);">
    <strong style="color:var(--accent-fg);">Si se trata, hay que comprobar que sirve:</strong> se pacta una prueba terapeutica de 3 a 6 meses con TSH en rango. Si los sintomas no mejoran, lo honesto es <strong>retirar la levotiroxina</strong>, no subir la dosis: los sintomas del subclinico son inespecificos y muchas veces no eran del tiroides.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El hipotiroidismo es el <strong>deficit de hormona tiroidea en los tejidos</strong>. Es el trastorno endocrino mas frecuente despues de la diabetes y su gracia clinica es doble: por un lado sus sintomas son tan inespecificos que se le atribuyen molestias que no son suyas, y por otro se diagnostica con una sola prueba barata y se trata con una sola pastilla barata. Casi todo el arte del tema esta en decidir <strong>a quien tratar</strong> y en no confundir un patron analitico raro con una enfermedad rara.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como funciona el eje y por que la TSH lo resume todo.</strong></p>
${figBlock('Figura 1', 'Eje hipotalamo-hipofisis-tiroides y los seis patrones del perfil', ejeHtml)}
<p style="margin:0 0 12px;">La hipofisis mide la hormona tiroidea con una sensibilidad extrema y responde con una relacion <strong>logaritmica</strong>: cuando la T4 libre baja un poco, la TSH sube mucho. De ahi salen las tres consecuencias practicas del tema. La primera, que <strong>el cribado se hace con TSH sola</strong>. La segunda, que la TSH se altera antes que la T4 libre, y ese desfase es exactamente lo que llamamos enfermedad subclinica. Y la tercera, que la TSH <strong>solo es valida si la hipofisis funciona</strong>: en el hipotiroidismo central la TSH miente y hay que mirar la T4 libre.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">De donde viene: casi siempre de la propia tiroides.</strong></p>
<p style="margin:0 0 12px;">Mas del <strong>95%</strong> de los hipotiroidismos son primarios. En las zonas con yodo suficiente, la causa dominante es la <strong>tiroiditis de Hashimoto</strong>, autoinmune, con anticuerpos antitiroperoxidasa positivos en el 90 al 95% de los casos. En el mundo, sin embargo, la primera causa sigue siendo el <strong>deficit de yodo</strong>. Despues vienen las causas yatrogenas, que en la practica hospitalaria son tan frecuentes como la autoinmune: tiroidectomia, yodo radiactivo, radioterapia cervical, amiodarona, litio, y los inhibidores de puntos de control inmunitario y de tirosina cinasa que se usan cada vez mas en oncologia. El hipotiroidismo <strong>central</strong>, por fallo hipofisario o hipotalamico, no llega al 1% y casi nunca viene solo: se acompana de otros deficits hipofisarios.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Por que da sintomas de todo y de nada.</strong></p>
<p style="margin:0 0 12px;">La T3 regula la transcripcion de genes en practicamente todas las celulas nucleadas, asi que su deficit <strong>enlentece todo a la vez</strong>: el gasto cardiaco, el transito intestinal, el aclaramiento de colesterol, la produccion de calor, la velocidad de conduccion nerviosa y el estado de animo. A eso se anade la acumulacion de glucosaminoglucanos en la dermis, que produce el edema sin fovea llamado <strong>mixedema</strong> y explica la voz ronca, la macroglosia y la facies abotargada. El problema diagnostico es que cansancio, aumento de peso, estrenimiento, piel seca y bajo animo son tambien los sintomas mas frecuentes de la poblacion general: la sensibilidad de la clinica es alta y su especificidad, baja. Por eso el diagnostico es de laboratorio, siempre.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Los signos que si merecen atencion.</strong></p>
<p style="margin:0 0 12px;">Hay tres hallazgos que valen mas que la lista de sintomas. El <strong>reflejo aquileo con relajacion lenta</strong>, que es casi patognomonico cuando se ve. La <strong>bradicardia con hipertension diastolica</strong>, que refleja el descenso del gasto y el aumento de las resistencias perifericas. Y el <strong>derrame pericardico</strong> o pleural sin causa aparente, con un electrocardiograma de bajo voltaje. En el laboratorio general, las pistas indirectas son la <strong>hipercolesterolemia</strong> de nueva aparicion, la <strong>hiponatremia</strong>, la elevacion de la creatincinasa y una anemia normocitica que no responde a nada. Ante cualquiera de ellas, pedir TSH sale rentable.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El hipotiroidismo subclinico: donde se decide de verdad.</strong></p>
${figBlock('Figura 2', 'Hipotiroidismo subclinico: a quien se trata y a quien se observa', subclinicoHtml)}
<p style="margin:0 0 12px;">Es la situacion mas frecuente en consulta y la que mas sobretratamiento genera. Dos reglas ahorran mucho dano. La primera: <strong>confirmar antes de etiquetar</strong>, porque una TSH alta aislada puede deberse a una enfermedad aguda en fase de recuperacion, a un ensayo interferido, a variacion circadiana o simplemente al azar, y hasta un tercio se normaliza al repetirla. La segunda: por encima de <strong>10 mUI/L</strong> se trata, y por debajo se decide segun edad, anticuerpos, sintomas y planes de embarazo. En el anciano hay que resistirse activamente a tratar: el ensayo TRUST no encontro mejoria de sintomas ni de calidad de vida en mayores de 65 anos.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El tratamiento: una hormona, bien tomada.</strong></p>
<p style="margin:0 0 12px;">La <strong>levotiroxina</strong> en monoterapia es el tratamiento, y su dosis plena de sustitucion es de <strong>1.6 microgramos por kilo y dia</strong>, calculada mejor sobre peso ideal que sobre peso real (calculadora disponible). En el joven sano se puede empezar con la dosis plena; en el <strong>anciano o el cardiopata</strong> se empieza con 12.5 a 25 microgramos y se sube despacio, porque acelerar de golpe un corazon acostumbrado a la bradicardia puede desencadenar angina o una arritmia. Se recontrola la TSH a las <strong>6 a 8 semanas</strong> de cada cambio, nunca antes, porque el eje tarda ese tiempo en reequilibrarse.</p>
<p style="margin:0 0 12px;">La absorcion es el punto debil del tratamiento y la causa mas frecuente de "resistencia". Se toma <strong>en ayunas, 30 a 60 minutos antes del desayuno</strong> (o al acostarse, 3 horas despues de cenar, que funciona igual de bien), y separada al menos <strong>4 horas</strong> del calcio, el hierro, los inhibidores de la bomba de protones, el carbonato de sevelamer y las resinas. Antes de subir dosis por una TSH que no baja, hay que preguntar por la toma, no asumir un problema de dosis.</p>
<p style="margin:0 0 12px;">Dos advertencias que se olvidan. En el <strong>hipotiroidismo central no se titula por TSH</strong>, sino por T4 libre en la mitad alta del rango; y antes de dar la primera dosis hay que descartar y, si procede, tratar la <strong>insuficiencia suprarrenal</strong>, porque la levotiroxina acelera el metabolismo del cortisol y puede precipitar una crisis addisoniana. En el <strong>embarazo</strong>, la necesidad sube un 25 a 30% en cuanto se confirma la gestacion.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No se usan combinaciones de T4 con T3 ni extractos de tiroides desecada de forma rutinaria: no han demostrado superioridad y aportan picos de T3 no fisiologicos. No se trata a un paciente critico por un patron de <strong>sindrome del enfermo eutiroideo</strong>, que es una adaptacion y no una enfermedad tiroidea. No se pide gammagrafia para diagnosticar un hipotiroidismo. Y no se persigue "suprimir" la TSH salvo en el seguimiento del carcinoma diferenciado de tiroides, que es otro tema.</p>`;

export const bibliografia = [
  'Jonklaas J, Bianco AC, Bauer AJ, et al. Guidelines for the treatment of hypothyroidism: prepared by the American Thyroid Association task force on thyroid hormone replacement. Thyroid. 2014;24(12):1670-1751.',
  'Garber JR, Cobin RH, Gharib H, et al. Clinical practice guidelines for hypothyroidism in adults: cosponsored by the American Association of Clinical Endocrinologists and the American Thyroid Association. Thyroid. 2012;22(12):1200-1235.',
  'Chaker L, Bianco AC, Jonklaas J, Peeters RP. Hypothyroidism. Lancet. 2017;390(10101):1550-1562.',
  'Chaker L, Razvi S, Bensenor IM, Azizi F, Pearce EN, Peeters RP. Hypothyroidism. Nat Rev Dis Primers. 2022;8(1):30.',
  'Alexander EK, Pearce EN, Brent GA, et al. 2017 Guidelines of the American Thyroid Association for the diagnosis and management of thyroid disease during pregnancy and the postpartum. Thyroid. 2017;27(3):315-389.',
  'Persani L, Brabant G, Dattani M, et al. 2018 European Thyroid Association guidelines on the diagnosis and management of central hypothyroidism. Eur Thyroid J. 2018;7(5):225-237.',
  'Biondi B, Cooper DS. The clinical significance of subclinical thyroid dysfunction. Endocr Rev. 2008;29(1):76-131.',
  'Stott DJ, Rodondi N, Kearney PM, et al. Thyroid hormone therapy for older adults with subclinical hypothyroidism (TRUST). N Engl J Med. 2017;376(26):2534-2544.',
  'Rodondi N, den Elzen WP, Bauer DC, et al. Subclinical hypothyroidism and the risk of coronary heart disease and mortality. JAMA. 2010;304(12):1365-1374.',
  'Feller M, Snel M, Moutzouri E, et al. Association of thyroid hormone therapy with quality of life and thyroid-related symptoms in patients with subclinical hypothyroidism: a systematic review and meta-analysis. JAMA. 2018;320(13):1349-1359.',
  'Pearce SH, Brabant G, Duntas LH, et al. 2013 ETA guideline: management of subclinical hypothyroidism. Eur Thyroid J. 2013;2(4):215-228.',
  'Centanni M, Benvenga S, Sachmechi I. Diagnosis and management of treatment-refractory hypothyroidism: an expert consensus report. J Endocrinol Invest. 2017;40(12):1289-1301.',
  'Wiersinga WM, Duntas L, Fadeyev V, Nygaard B, Vanderpump MP. 2012 ETA guidelines: the use of L-T4 + L-T3 in the treatment of hypothyroidism. Eur Thyroid J. 2012;1(2):55-71.',
  'Caturegli P, De Remigis A, Rose NR. Hashimoto thyroiditis: clinical and diagnostic criteria. Autoimmun Rev. 2014;13(4-5):391-397.',
  'Favresse J, Burlacu MC, Maiter D, Gruson D. Interferences with thyroid function immunoassays: clinical implications and detection algorithm. Endocr Rev. 2018;39(5):830-850.',
  'Taylor PN, Albrecht D, Scholz A, et al. Global epidemiology of hyperthyroidism and hypothyroidism. Nat Rev Endocrinol. 2018;14(5):301-316.',
  'Van den Berghe G. Non-thyroidal illness in the ICU: a syndrome with different faces. Thyroid. 2014;24(10):1456-1465.',
  'Fliers E, Boelen A. An update on non-thyroidal illness syndrome. J Endocrinol Invest. 2021;44(8):1597-1607.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Hipotiroidismo leve o subclinico',
      tituloB: 'Hipotiroidismo franco y de larga evolucion',
      compensada: 'Con frecuencia asintomatico, y cuando da sintomas son tan inespecificos que no permiten el diagnostico: cansancio, sensacion de frio, piel seca, estrenimiento leve, dificultad para concentrarse o animo bajo. Muchos pacientes se detectan por un cribado hecho por otro motivo o por una hipercolesterolemia de nueva aparicion. La exploracion suele ser normal, con bocio difuso no doloroso si la causa es autoinmune.',
      descompensada: 'Enlentecimiento generalizado: bradipsiquia, voz ronca, macroglosia, facies abotargada, edema sin fovea (mixedema) en parpados y dorso de manos, piel seca y fria con caida del cabello y de la cola de las cejas, bradicardia con hipertension diastolica, hipotermia y reflejo aquileo con relajacion lenta. Puede haber derrame pericardico o pleural, sindrome del tunel del carpo, ataxia cerebelosa, menorragia o infertilidad. Su extremo es el coma mixedematoso (ver el tema de urgencias tiroideas).'
    },
    laboratorio: [
      { prueba: 'TSH (calculadora disponible)', utilidad: 'Prueba de cribado y de seguimiento. Por la relacion logaritmica con la T4 libre es la mas sensible del eje: se altera antes que ninguna otra. Una TSH normal descarta el hipotiroidismo primario, pero NO el central.' },
      { prueba: 'T4 libre', utilidad: 'Se anade a la TSH cuando esta alterada, cuando se sospecha enfermedad hipofisaria y para titular el tratamiento del hipotiroidismo central. Separa el hipotiroidismo franco (baja) del subclinico (normal).' },
      { prueba: 'Anticuerpos antitiroperoxidasa', utilidad: 'Confirman el origen autoinmune. Positivos en el 90 al 95% de las tiroiditis de Hashimoto. En el subclinico predicen la progresion a hipotiroidismo franco e inclinan la decision hacia tratar. Los antitiroglobulina anaden poco al diagnostico.' },
      { prueba: 'T3 total o libre', utilidad: 'NO se usa para diagnosticar hipotiroidismo: se mantiene normal hasta fases avanzadas porque la conversion periferica la preserva. Solo tiene papel en el estudio de la tirotoxicosis y del sindrome del enfermo eutiroideo.' },
      { prueba: 'Perfil lipidico', utilidad: 'El hipotiroidismo eleva el colesterol LDL al reducir su aclaramiento hepatico. Ante una hipercolesterolemia de nueva aparicion o de mal control, pedir TSH antes de intensificar la estatina: puede corregirse sola.' },
      { prueba: 'Sodio, creatincinasa y hemograma', utilidad: 'Pistas indirectas frecuentes: hiponatremia por deterioro del aclaramiento de agua libre, elevacion de creatincinasa con mialgias, y anemia normocitica (o macrocitica si coexiste anemia perniciosa, asociada a la autoinmunidad tiroidea).' },
      { prueba: 'Cortisol matutino', utilidad: 'Obligado ante sospecha de hipotiroidismo central o de sindrome poliglandular autoinmune. La levotiroxina acelera el metabolismo del cortisol y puede precipitar una crisis addisoniana si hay insuficiencia suprarrenal no tratada.' },
      { prueba: 'Prolactina y resto del eje hipofisario', utilidad: 'En el hipotiroidismo central, para valorar los demas ejes. En el primario grave y prolongado, la TRH elevada puede subir la prolactina y causar hiperprolactinemia e hiperplasia hipofisaria reversible, que se confunde con un adenoma.' }
    ],
    no_invasivos: [
      { metodo: 'Estrategia de cribado con TSH sola', interpretacion: 'Se pide TSH aislada y se anade T4 libre solo si esta alterada. Se criba a embarazadas y mujeres que buscan embarazo, a pacientes con enfermedad autoinmune, con dislipidemia, con fibrilacion auricular, con radioterapia cervical previa, y a los que reciben amiodarona, litio o inmunoterapia.', cutoff: 'TSH de referencia habitual de 0.4 a 4.0 mUI/L, dependiente del laboratorio y ascendente con la edad' },
      { metodo: 'Repeticion confirmatoria antes de tratar', interpretacion: 'Una TSH alta aislada no basta. Se repite a las 6 a 12 semanas con T4 libre y anticuerpos: hasta un tercio de los valores ligeramente altos se normalizan, sobre todo tras una enfermedad aguda o por variacion circadiana (la TSH es mas alta de madrugada).', cutoff: 'Solo se etiqueta de hipotiroidismo subclinico con dos determinaciones separadas alteradas' },
      { metodo: 'Electrocardiograma', interpretacion: 'Bradicardia sinusal, bajo voltaje generalizado, aplanamiento o inversion de la onda T y alargamiento del QT. El bajo voltaje debe hacer pensar en derrame pericardico.', cutoff: 'Sin umbrales; el QT largo importa por el riesgo de arritmia en el hipotiroidismo grave' },
      { metodo: 'Sospecha de interferencia del ensayo', interpretacion: 'Ante un patron discordante (TSH alta con T4 libre alta, o resultados que no encajan con el paciente), pensar en biotina a dosis altas, anticuerpos heterofilos, macro-TSH o anticuerpos antihormona. Se confirma repitiendo en otra plataforma o con dilucion seriada.', cutoff: 'Suspender la biotina 2 a 3 dias antes de repetir la determinacion' }
    ],
    imagen: [
      { modalidad: 'Ecografia tiroidea', hallazgos: 'NO es necesaria para diagnosticar hipotiroidismo. Se pide si se palpa bocio, nodulo o asimetria. En la tiroiditis de Hashimoto muestra una glandula heterogenea, hipoecogenica y con pseudonodulos, con o sin atrofia.' },
      { modalidad: 'Resonancia magnetica de hipofisis', hallazgos: 'Indicada ante hipotiroidismo central confirmado: busca adenoma, craneofaringioma, silla turca vacia, hipofisitis (incluida la inducida por inmunoterapia) o infiltracion. Recordar la hiperplasia hipofisaria reversible del hipotiroidismo primario grave, que imita un adenoma y desaparece con levotiroxina.' },
      { modalidad: 'Ecocardiograma', hallazgos: 'Ante bajo voltaje, cardiomegalia radiologica o insuficiencia cardiaca: busca derrame pericardico, habitualmente de instauracion lenta y bien tolerado, que se resuelve con el tratamiento sustitutivo.' },
      { modalidad: 'Gammagrafia tiroidea', hallazgos: 'NO tiene papel en el hipotiroidismo. Se reserva para el estudio de la tirotoxicosis y del nodulo, en sus temas correspondientes.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `El hipotiroidismo se clasifica por el <strong>nivel del eje donde esta el fallo</strong> (primario, que es mas del 95% de los casos, frente a central por enfermedad hipofisaria o hipotalamica) y por su <strong>gravedad bioquimica</strong> (subclinico si solo sube la TSH, franco si ademas baja la T4 libre). Ambas divisiones son practicas y no academicas: la primera determina por que parametro se titula el tratamiento, y la segunda, si hay que tratar.`,
    escalas: [
      { nombre: 'Clasificacion por nivel del eje', componentes: 'TSH y T4 libre interpretadas juntas.', formula: 'Primario: TSH alta con T4 libre baja o normal. Central: T4 libre baja con TSH baja, normal o levemente alta pero inapropiadamente no elevada.', interpretacion: 'En el primario se titula por TSH. En el central la TSH no sirve: se titula por T4 libre en la mitad alta del rango, y antes de la primera dosis hay que descartar insuficiencia suprarrenal.' },
      { nombre: 'Clasificacion por gravedad bioquimica (calculadora disponible)', componentes: 'TSH y T4 libre.', formula: 'Subclinico: TSH alta con T4 libre normal. Franco: TSH alta con T4 libre baja.', interpretacion: 'El franco se trata siempre. El subclinico se trata si la TSH es de 10 mUI/L o mas, y por debajo se individualiza segun edad, anticuerpos, sintomas, riesgo cardiovascular y embarazo.' },
      { nombre: 'Umbrales del hipotiroidismo subclinico', componentes: 'Cifra de TSH confirmada, edad, anticuerpos antitiroperoxidasa, sintomas y situacion reproductiva.', formula: 'Decision clinica, no puntuacion.', interpretacion: 'TSH de 10 o mas: tratar. Entre el limite alto y 10: tratar si hay anticuerpos, bocio, sintomas, edad menor de 65 a 70 anos, dislipidemia o deseo gestacional; observar en el anciano asintomatico. En mayores de 80 a 85 anos, observar.' },
      { nombre: 'Rangos de TSH especificos del embarazo', componentes: 'TSH por trimestre, con rangos del propio laboratorio si existen.', formula: 'Si no hay rangos locales, se usa como limite superior el del laboratorio reducido en unos 0.5 mUI/L en el primer trimestre (en torno a 4.0).', interpretacion: 'El umbral clasico de 2.5 mUI/L quedo obsoleto con la guia de 2017 y sobrediagnosticaba. En la embarazada con anticuerpos positivos el umbral de tratamiento es mas bajo que sin ellos.' },
      { nombre: 'Sindrome del enfermo eutiroideo', componentes: 'T3 baja, T3 reversa alta, T4 libre normal o baja y TSH baja o normal en un paciente critico.', formula: 'Patron evolutivo: primero cae la T3, despues la T4, y en la recuperacion la TSH rebota por encima del rango.', interpretacion: 'NO es enfermedad tiroidea y NO se trata con levotiroxina. La TSH alta de la fase de recuperacion es la causa mas frecuente de falso diagnostico de hipotiroidismo subclinico en el paciente hospitalizado: no se pide perfil tiroideo en el critico salvo sospecha fundada.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Hipotiroidismo primario (tiroiditis de Hashimoto y otras causas)',
      color: '#4a6fa5',
      definicion: 'Fallo de la propia glandula tiroidea, con TSH alta y T4 libre baja o normal. Supone mas del 95% de los hipotiroidismos. Su causa dominante en zonas con yodo suficiente es la tiroiditis linfocitaria cronica de Hashimoto; en el mundo, el deficit de yodo.',
      fisiopatologia: 'En la tiroiditis de Hashimoto hay una destruccion autoinmune progresiva del tiroides mediada por linfocitos T, con infiltrado linfocitario, formacion de centros germinales y fibrosis. Los anticuerpos antitiroperoxidasa son marcadores fiables mas que agentes causales. La perdida de tejido funcionante hace caer la T4, la hipofisis responde subiendo la TSH y, mientras esa TSH consigue mantener la T4 en rango, el paciente esta en fase subclinica. Ver la Figura 1 de Definicion.',
      epidemiologia: 'Prevalencia del hipotiroidismo franco del 0.3 al 2% y del subclinico del 4 al 10%, mayor en mujeres (relacion de 5 a 10 a 1) y ascendente con la edad. La incidencia de Hashimoto ha aumentado en paralelo a la suficiencia de yodo de la poblacion.',
      factores_riesgo: ['Sexo femenino y edad avanzada', 'Antecedente familiar de enfermedad tiroidea autoinmune', 'Otras enfermedades autoinmunes: diabetes tipo 1, celiaquia, vitiligo, anemia perniciosa, insuficiencia suprarrenal', 'Sindrome de Down y sindrome de Turner', 'Tiroidectomia, yodo radiactivo o radioterapia cervical previas', 'Amiodarona, litio, interferon alfa e inhibidores de tirosina cinasa', 'Inhibidores de puntos de control inmunitario (tiroiditis por inmunoterapia)', 'Posparto (tiroiditis posparto, sobre todo con anticuerpos previos)', 'Deficit o exceso marcado de yodo'],
      clinica: 'Desde asintomatico hasta el cuadro completo de enlentecimiento: cansancio, intolerancia al frio, aumento de peso moderado, estrenimiento, piel seca, caida del cabello, bradipsiquia, voz ronca, menorragia. En la exploracion, bradicardia, hipertension diastolica, edema sin fovea y reflejo aquileo con relajacion lenta. El bocio es difuso, firme y no doloroso, y puede faltar en la forma atrofica.',
      criterios_dx: 'TSH elevada con T4 libre baja (franco) o normal (subclinico), confirmada en una segunda determinacion cuando es leve. Los anticuerpos antitiroperoxidasa positivos establecen el origen autoinmune, pero su ausencia no lo descarta.',
      laboratorio: 'TSH, T4 libre y anticuerpos antitiroperoxidasa. Pistas asociadas frecuentes: colesterol LDL alto, hiponatremia, creatincinasa elevada y anemia normocitica. Cribar celiaquia y vitamina B12 si hay sospecha de poliautoinmunidad.',
      imagen: 'No se requiere. La ecografia solo si hay bocio, nodulo palpable o asimetria; muestra una glandula heterogenea e hipoecogenica. Un crecimiento rapido y doloroso obliga a descartar linfoma tiroideo, que asienta sobre Hashimoto.',
      complementarios: 'Electrocardiograma si hay bradicardia o sospecha de derrame; ecocardiograma ante bajo voltaje o cardiomegalia. En la mujer en edad fertil, valorar planes de gestacion antes de decidir el objetivo de TSH.',
      dx_diferencial: 'Sindrome del enfermo eutiroideo en fase de recuperacion, interferencia del ensayo, mala adherencia a la levotiroxina, insuficiencia suprarrenal (comparte astenia, hiponatremia e hipotension), depresion, sindrome de apnea del sueno, anemia y enfermedad renal cronica.',
      tx_medico: 'Educacion sobre la toma: en ayunas 30 a 60 minutos antes del desayuno o al acostarse 3 horas despues de cenar, y separada 4 horas del calcio, el hierro, los inhibidores de la bomba de protones y las resinas. Adherencia diaria y no cambiar de marca sin recontrolar. Sin restricciones dieteticas especiales y sin suplementos de yodo.',
      tx_farmacologico: 'Levotiroxina en monoterapia (calculadora disponible). Dosis plena de sustitucion de 1.6 microgramos por kilo y dia, calculada sobre peso ideal. En menores de 60 anos sin cardiopatia se puede empezar con la dosis plena; en el anciano o el cardiopata se empieza con 12.5 a 25 microgramos y se sube cada 4 a 6 semanas. Objetivo: TSH dentro del rango normal, en su mitad baja en el paciente joven y hacia la mitad alta o el limite superior en el mayor de 70 a 80 anos. No se usan combinaciones con T3 ni tiroides desecada de forma rutinaria.',
      tx_intervencionista: 'Ninguno. La tiroidectomia solo se plantea por bocio compresivo o por sospecha de malignidad, no por el hipotiroidismo en si.',
      criterios_uci: 'Solo en su forma extrema, el coma mixedematoso, que se desarrolla en el tema de urgencias tiroideas.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Si el paciente ingresa por otro motivo, mantener la levotiroxina. Si no puede tomar via oral, la dosis intravenosa es aproximadamente el 75 al 80% de la oral. No pedir perfil tiroideo de rutina en el enfermo agudo: se interpreta mal y genera diagnosticos falsos.',
      seguimiento_ambulatorio: 'TSH a las 6 a 8 semanas de iniciar o cambiar la dosis, y despues cada 6 a 12 meses una vez estable. Revalorar dosis ante cambios de peso mayores del 10%, embarazo, inicio de estrogenos o de farmacos que interfieren, y en el envejecimiento (la necesidad disminuye).',
      pronostico: 'Excelente con tratamiento: la esperanza de vida es normal y la mayoria de las manifestaciones revierten en semanas o meses. La enfermedad es habitualmente permanente y el tratamiento, de por vida, salvo en las tiroiditis transitorias.',
      algoritmo: ['TSH alterada: anadir T4 libre y anticuerpos antitiroperoxidasa', 'Si es leve, repetir a las 6 a 12 semanas antes de etiquetar', 'TSH alta con T4 libre baja: hipotiroidismo franco, tratar siempre', 'Calcular la dosis: 1.6 microgramos por kilo de peso ideal al dia', 'Anciano o cardiopata: empezar con 12.5 a 25 microgramos y subir despacio', 'Instruir sobre la toma en ayunas y las interacciones', 'Recontrolar TSH a las 6 a 8 semanas, nunca antes', 'Si la TSH no baja: revisar adherencia y absorcion antes de subir dosis', 'Una vez estable, TSH cada 6 a 12 meses']
    },
    {
      nombre: 'Hipotiroidismo central',
      color: '#6b4a8c',
      definicion: 'Deficit de hormona tiroidea por falta de estimulo hipofisario (secundario) o hipotalamico (terciario). Menos del 1% de los hipotiroidismos. Su rasgo definitorio es que la TSH NO esta elevada pese a la T4 libre baja, de modo que la prueba de cribado habitual falla.',
      fisiopatologia: 'La lesion hipofisaria o hipotalamica reduce la cantidad de TSH o, con mas frecuencia de lo que se cree, su bioactividad: se secreta una TSH inmunorreactiva que el ensayo detecta como normal pero que estimula mal a la tiroides. De ahi que hasta un tercio de los casos tenga una TSH dentro del rango normal e incluso levemente alta. La clave conceptual es que la TSH es inapropiadamente baja PARA una T4 libre baja.',
      epidemiologia: 'Incidencia estimada de 1 por cada 20000 a 80000 habitantes. Casi siempre forma parte de un hipopituitarismo, no de un deficit aislado. En adultos, las causas mas frecuentes son los adenomas hipofisarios y su tratamiento; en aumento, la hipofisitis por inhibidores de puntos de control inmunitario.',
      factores_riesgo: ['Adenoma hipofisario y cirugia o radioterapia hipofisaria previas', 'Craneofaringioma y otras lesiones selares y supraselares', 'Traumatismo craneoencefalico y hemorragia subaracnoidea', 'Hipofisitis linfocitaria y del posparto (sindrome de Sheehan)', 'Hipofisitis por inhibidores de puntos de control inmunitario', 'Enfermedades infiltrativas: hemocromatosis, sarcoidosis, histiocitosis', 'Silla turca vacia', 'Mutaciones de TSH beta, TRHR, IGSF1 y otros genes (formas congenitas)'],
      clinica: 'Los sintomas de hipotiroidismo suelen ser mas leves que en el primario, y quedan enmascarados por los de los otros ejes deficitarios: hipogonadismo (amenorrea, perdida de libido, perdida de vello), deficit de hormona de crecimiento y, sobre todo, insuficiencia suprarrenal secundaria (astenia intensa, hipotension, hiponatremia, hipoglucemia). Nunca hay bocio. Puede haber cefalea y alteracion campimetrica si la lesion es expansiva.',
      criterios_dx: 'T4 libre baja con TSH baja, normal o solo levemente elevada, en ausencia de enfermedad aguda grave y de farmacos que supriman la TSH. Confirma el diagnostico la demostracion de la lesion hipotalamo-hipofisaria y la coexistencia de otros deficits hipofisarios.',
      laboratorio: 'T4 libre y TSH, cortisol matutino y ACTH, prolactina, LH y FSH con testosterona o estradiol, IGF-1, y sodio. Es imprescindible evaluar el eje suprarrenal ANTES de iniciar levotiroxina.',
      imagen: 'Resonancia magnetica de hipofisis con contraste. Campimetria si hay lesion con contacto quiasmatico.',
      complementarios: 'Valoracion oftalmologica y neuroquirurgica segun la lesion. En sospecha de hipofisitis por inmunoterapia, revisar el calendario de tratamiento oncologico.',
      dx_diferencial: 'Sindrome del enfermo eutiroideo (mismo patron analitico, contexto de enfermedad grave), farmacos que bajan la TSH (glucocorticoides a dosis altas, dopamina, dobutamina, analogos de somatostatina, bexaroteno), fase de recuperacion de una tirotoxicosis reciente y toma insuficiente de levotiroxina.',
      tx_medico: 'Educacion sobre la toma de levotiroxina y, si hay insuficiencia suprarrenal asociada, sobre las dosis de estres del glucocorticoide y la tarjeta de identificacion. Coordinacion con endocrinologia y neurocirugia.',
      tx_farmacologico: 'PRIMERO glucocorticoide si hay o se sospecha insuficiencia suprarrenal, y DESPUES levotiroxina: el orden inverso puede precipitar una crisis addisoniana porque la hormona tiroidea acelera el aclaramiento del cortisol. La levotiroxina se titula por T4 libre en la mitad alta del rango, medida antes de la toma diaria; la TSH NO sirve como objetivo. Reponer los demas ejes segun proceda.',
      tx_intervencionista: 'Cirugia transesfenoidal o radioterapia segun la lesion causal. El deficit hormonal rara vez se recupera tras el tratamiento de la lesion.',
      criterios_uci: 'Crisis suprarrenal concomitante, apoplejia hipofisaria o coma mixedematoso de origen central.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar sodio, glucemia y presion arterial. Ante cualquier enfermedad intercurrente, aumentar la dosis de glucocorticoide segun la pauta de estres.',
      seguimiento_ambulatorio: 'T4 libre cada 6 a 12 meses y tras cada ajuste. Reevaluacion periodica de todos los ejes hipofisarios y control de imagen segun la lesion.',
      pronostico: 'Depende de la causa. La sustitucion hormonal es eficaz, pero la mortalidad del hipopituitarismo se concentra en las crisis suprarrenales no reconocidas, no en el deficit tiroideo.',
      algoritmo: ['T4 libre baja con TSH no elevada: sospechar hipotiroidismo central', 'Descartar enfermedad aguda grave y farmacos que suprimen la TSH', 'Evaluar el resto de ejes hipofisarios, con cortisol matutino obligado', 'Resonancia magnetica de hipofisis con contraste', 'Tratar primero la insuficiencia suprarrenal si existe o se sospecha', 'Iniciar levotiroxina despues del glucocorticoide', 'Titular por T4 libre en la mitad alta del rango, nunca por TSH', 'Tratar la lesion causal y reponer los demas ejes']
    },
    {
      nombre: 'Hipotiroidismo subclinico',
      color: '#8a6a1f',
      definicion: 'TSH por encima del limite superior de referencia con T4 libre normal, confirmada en una segunda determinacion. No es una entidad distinta sino la fase precoz del hipotiroidismo primario, y su interes esta por completo en decidir a quien tratar.',
      fisiopatologia: 'Al perderse tejido funcionante, la hipofisis aumenta la TSH para mantener la T4 libre en rango. Mientras lo consigue, el paciente esta compensado a costa de un estimulo tiroideo elevado. La relacion logaritmica entre TSH y T4 libre explica que la TSH pueda estar francamente alta con una T4 libre todavia normal.',
      epidemiologia: 'Prevalencia del 4 al 10% de la poblacion adulta, hasta el 20% en mujeres mayores de 60 anos. La progresion a hipotiroidismo franco es de alrededor del 2 al 5% anual, y sube al doble si los anticuerpos antitiroperoxidasa son positivos. Hasta un tercio de las elevaciones leves revierten espontaneamente.',
      factores_riesgo: ['Anticuerpos antitiroperoxidasa positivos (principal predictor de progresion)', 'TSH mas elevada en el momento del diagnostico', 'Sexo femenino y edad avanzada', 'Bocio', 'Radioterapia cervical o yodo radiactivo previos', 'Amiodarona y litio', 'Otras enfermedades autoinmunes', 'Ascenso fisiologico de la TSH con la edad, que no debe confundirse con enfermedad'],
      clinica: 'Habitualmente asintomatico. Cuando hay sintomas son inespecificos y su atribucion al tiroides es poco fiable: los mismos sintomas tienen prevalencia similar en personas con TSH normal. Puede acompanarse de dislipidemia y, con TSH muy alta y mantenida, de disfuncion diastolica leve.',
      criterios_dx: 'TSH por encima del rango de referencia con T4 libre normal en DOS determinaciones separadas 6 a 12 semanas, fuera de una enfermedad aguda. Anadir siempre anticuerpos antitiroperoxidasa, porque cambian la decision.',
      laboratorio: 'TSH, T4 libre y anticuerpos antitiroperoxidasa. Perfil lipidico si se valora tratar por riesgo cardiovascular.',
      imagen: 'No indicada de rutina; ecografia solo si hay bocio o nodulo palpable.',
      complementarios: 'Revisar la lista de farmacos y el antecedente de enfermedad aguda reciente, que son las dos causas mas frecuentes de TSH alta transitoria.',
      dx_diferencial: 'Fase de recuperacion del sindrome del enfermo eutiroideo, insuficiencia suprarrenal (eleva la TSH de forma reversible), obesidad (asociada a TSH ligeramente alta sin enfermedad tiroidea), interferencia del ensayo por macro-TSH, mala adherencia a la levotiroxina en un paciente ya tratado y ascenso fisiologico con la edad.',
      tx_medico: 'Observacion activa con TSH cada 6 a 12 meses en los que no se tratan. Si se decide tratar por sintomas, pactar de antemano una prueba terapeutica de 3 a 6 meses y retirar el farmaco si no mejoran.',
      tx_farmacologico: 'Tratar si la TSH es de 10 mUI/L o mas. Entre el limite alto y 10, tratar cuando hay anticuerpos positivos, bocio, sintomas atribuibles, edad menor de 65 a 70 anos, dislipidemia o riesgo cardiovascular alto, infertilidad o deseo gestacional. Observar en el anciano asintomatico y, salvo excepcion, en el mayor de 80 a 85 anos. Dosis de inicio baja, de 25 a 75 microgramos al dia o alrededor de 1 microgramo por kilo, con objetivo de TSH en el rango normal.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'No iniciar tratamiento durante un ingreso agudo basandose en una TSH alta aislada: lo mas probable es que sea la fase de recuperacion de un sindrome del enfermo eutiroideo. Repetir en consulta a las 6 a 12 semanas del alta.',
      seguimiento_ambulatorio: 'Sin tratamiento: TSH y T4 libre cada 6 a 12 meses, y antes si aparecen sintomas o se planea un embarazo. Con tratamiento: TSH a las 6 a 8 semanas y despues anual.',
      pronostico: 'Benigno en la mayoria. El riesgo relevante en el joven y el adulto medio es la progresion y la asociacion con enfermedad coronaria e insuficiencia cardiaca cuando la TSH supera 10; en el anciano, el riesgo mas relevante es el del sobretratamiento.',
      algoritmo: ['TSH alta con T4 libre normal: NO etiquetar todavia', 'Repetir a las 6 a 12 semanas con anticuerpos antitiroperoxidasa', 'Si se normaliza: alta o control anual segun anticuerpos', 'Si se confirma y la TSH es de 10 o mas: tratar', 'Si esta entre el limite alto y 10: decidir por edad, anticuerpos, sintomas, riesgo cardiovascular y deseo gestacional', 'Embarazo o busqueda de embarazo: umbral mucho mas bajo, tratar', 'Mayor de 80 a 85 anos asintomatico: observar', 'Si se trata por sintomas: reevaluar a los 3 a 6 meses y retirar si no mejoran']
    },
    {
      nombre: 'Hipotiroidismo y embarazo',
      color: '#3f6b52',
      definicion: 'Deficit de hormona tiroidea materna durante la gestacion, ya sea preexistente o de novo. Es la situacion en la que las reglas del hipotiroidismo cambian mas: se criba mas, se trata antes y con umbrales mas bajos, y se ajusta la dosis de inmediato.',
      fisiopatologia: 'El embarazo impone tres demandas simultaneas: la gonadotropina corionica estimula el receptor de TSH y baja fisiologicamente la TSH en el primer trimestre; los estrogenos elevan la globulina fijadora de tiroxina y aumentan la reserva hormonal necesaria; y la desyodasa tipo 3 placentaria degrada hormona materna. El feto no produce hormona propia hasta la semana 16 a 20, de modo que el desarrollo neurologico del primer trimestre depende por completo de la T4 materna.',
      epidemiologia: 'Hipotiroidismo franco en el 0.3 al 0.5% de los embarazos y subclinico en el 2 al 3%. Los anticuerpos antitiroperoxidasa son positivos en el 5 al 15% de las gestantes y aumentan el riesgo de aborto, parto pretermino y tiroiditis posparto aunque la funcion sea normal.',
      factores_riesgo: ['Hipotiroidismo o tiroiditis autoinmune conocidos', 'Anticuerpos antitiroperoxidasa positivos', 'Antecedente de aborto de repeticion o de parto pretermino', 'Infertilidad o tecnicas de reproduccion asistida', 'Diabetes tipo 1 u otra enfermedad autoinmune', 'Radioterapia cervical, tiroidectomia o yodo radiactivo previos', 'Bocio o antecedente familiar de enfermedad tiroidea', 'Edad materna avanzada y obesidad', 'Residencia en zona con deficit de yodo'],
      clinica: 'Muy dificil de distinguir de los sintomas propios del embarazo: cansancio, aumento de peso, estrenimiento e intolerancia al frio. Por eso el diagnostico es analitico y el cribado es la herramienta principal.',
      criterios_dx: 'TSH por encima del limite superior especifico del trimestre, preferiblemente del propio laboratorio. Si no se dispone de rangos locales, se usa el limite del laboratorio reducido en unos 0.5 mUI/L en el primer trimestre, en torno a 4.0 mUI/L. El umbral historico de 2.5 mUI/L quedo obsoleto en 2017 y sobrediagnosticaba.',
      laboratorio: 'TSH con T4 libre y anticuerpos antitiroperoxidasa. En la tirotoxicosis gestacional transitoria por gonadotropina corionica, la TSH esta suprimida con hiperemesis y sin anticuerpos antirreceptor de TSH, y no se trata con antitiroideos.',
      imagen: 'No indicada de rutina. La gammagrafia y el yodo radiactivo estan CONTRAINDICADOS en el embarazo.',
      complementarios: 'Aporte de yodo de 150 a 250 microgramos al dia en la gestacion y la lactancia, habitualmente incluido en el complejo prenatal.',
      dx_diferencial: 'Tirotoxicosis gestacional transitoria, hiperemesis gravidica, anemia, depresion perinatal, tiroiditis posparto en el puerperio y sindrome de Sheehan tras una hemorragia obstetrica grave.',
      tx_medico: 'Asegurar el aporte de yodo, revisar la toma de levotiroxina separada del hierro y el calcio del complejo prenatal (4 horas), y planificar el control analitico. Idealmente, optimizar la TSH ANTES de la concepcion en la mujer ya tratada.',
      tx_farmacologico: 'Levotiroxina, con umbral de tratamiento mucho mas bajo que fuera del embarazo. En la mujer ya tratada, aumentar la dosis un 25 a 30% en cuanto se confirma el embarazo: una forma practica es anadir dos dosis extra a la semana. Objetivo de TSH en la mitad baja del rango del trimestre. Tras el parto se vuelve a la dosis pregestacional y se recontrola a las 6 semanas.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica salvo coma mixedematoso, excepcional en el embarazo.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Mantener la levotiroxina durante cualquier ingreso obstetrico. Recordar que el hipotiroidismo materno mal controlado se asocia a hipertension gestacional, desprendimiento de placenta y bajo peso al nacer.',
      seguimiento_ambulatorio: 'TSH cada 4 semanas hasta la semana 16 a 20, y al menos una vez mas alrededor de la semana 30. Control posparto a las 6 semanas y vigilancia de tiroiditis posparto durante el primer ano, sobre todo con anticuerpos positivos.',
      pronostico: 'Con tratamiento adecuado y precoz, excelente para la madre y el feto. El hipotiroidismo franco no tratado aumenta el aborto, el parto pretermino y el deterioro del desarrollo neurocognitivo del hijo; el beneficio de tratar el subclinico es menos claro, pero el balance de riesgos favorece tratar.',
      algoritmo: ['Cribar con TSH a toda gestante con factores de riesgo, y de forma amplia en la practica habitual', 'Interpretar con el rango del trimestre, no con el rango general', 'Anadir anticuerpos antitiroperoxidasa: bajan el umbral de tratamiento', 'Hipotiroidismo franco: tratar siempre y de inmediato', 'Ya tratada que se embaraza: subir la dosis un 25 a 30% al confirmar la gestacion', 'TSH cada 4 semanas hasta la semana 20 y una vez hacia la semana 30', 'Asegurar 150 a 250 microgramos de yodo al dia', 'Tras el parto: volver a la dosis previa y recontrolar a las 6 semanas']
    },
    {
      nombre: 'Hipotiroidismo de dificil control (malabsorcion e interacciones)',
      color: '#6b4a2e',
      definicion: 'Paciente en tratamiento cuya TSH no se normaliza pese a dosis crecientes de levotiroxina, habitualmente por encima de 1.9 microgramos por kilo y dia. En la inmensa mayoria de los casos NO es un problema de dosis, sino de adherencia, de forma de tomarla o de absorcion.',
      fisiopatologia: 'La levotiroxina se absorbe en yeyuno e ileon y necesita un medio acido gastrico para disolverse. Cualquier cosa que reduzca la acidez, quele el farmaco en la luz intestinal, acelere el transito o dane la mucosa reduce la fraccion absorbida. Ademas, algunos farmacos aumentan el aclaramiento hepatico de T4 o desplazan su union a proteinas, subiendo la necesidad sin que haya malabsorcion.',
      epidemiologia: 'La falta de adherencia es, con diferencia, la causa mas frecuente: se estima que hasta un 30 a 50% de los pacientes no toma la levotiroxina de forma correcta. La celiaquia y la gastritis atrofica autoinmune son las causas organicas mas frecuentes y ambas se asocian a la autoinmunidad tiroidea.',
      factores_riesgo: ['Toma junto con alimentos, cafe o suplementos', 'Calcio, hierro, magnesio, aluminio y multivitaminicos tomados a la vez', 'Inhibidores de la bomba de protones y otros antisecretores', 'Colestiramina, sevelamer, quelantes del fosforo y sucralfato', 'Celiaquia, gastritis atrofica autoinmune e infeccion por Helicobacter pylori', 'Cirugia bariatrica y sindrome de intestino corto', 'Estrogenos orales y embarazo (aumentan la globulina fijadora)', 'Fenitoina, carbamazepina, fenobarbital, rifampicina y sertralina (aumentan el aclaramiento)', 'Aumento importante de peso'],
      clinica: 'Persistencia de sintomas de hipotiroidismo con TSH alta mantenida, a veces con patron oscilante entre visitas. Una pista muy util es la TSH alta con T4 libre normal o incluso alta el dia de la analitica, que sugiere que el paciente ha tomado varias dosis justo antes del control.',
      criterios_dx: 'TSH persistentemente elevada con dosis de levotiroxina superiores a las esperadas por peso, tras excluir de forma explicita mala adherencia, toma incorrecta e interacciones.',
      laboratorio: 'TSH y T4 libre. Anticuerpos antitransglutaminasa y IgA total para celiaquia; gastrina, anticuerpos anticelula parietal y vitamina B12 para gastritis atrofica; hemograma y ferritina. Prueba de absorcion de levotiroxina supervisada si persiste la duda.',
      imagen: 'No indicada salvo sospecha de enfermedad digestiva especifica, en cuyo caso endoscopia con biopsias duodenales.',
      complementarios: 'Prueba de absorcion: administrar una dosis alta unica de levotiroxina bajo observacion y medir T4 libre o T4 total en serie durante 2 a 4 horas. Un ascenso adecuado descarta malabsorcion verdadera y senala falta de adherencia.',
      dx_diferencial: 'Falta de adherencia (lo mas frecuente con diferencia), toma con alimentos o con quelantes, interferencia del ensayo por macro-TSH o anticuerpos heterofilos, resistencia a hormonas tiroideas y, muy raramente, un adenoma hipofisario secretor de TSH.',
      tx_medico: 'Reeducacion detallada sobre la toma, con revision de todos los farmacos y suplementos y de sus horarios. Alternativas practicas: tomarla al acostarse, cambiar a formulacion liquida o en capsula blanda si esta disponible, o pasar a una pauta semanal supervisada en casos seleccionados de mala adherencia.',
      tx_farmacologico: 'Ajustar el horario antes que la dosis. Tratar la causa digestiva encontrada: dieta sin gluten en la celiaquia, erradicacion de Helicobacter pylori, retirada del inhibidor de la bomba de protones cuando no sea imprescindible. Solo despues de todo eso se aumenta la dosis.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'El ingreso es una oportunidad excelente para diferenciar adherencia de malabsorcion: con la toma supervisada por enfermeria en ayunas, la TSH baja en semanas si el problema era la adherencia.',
      seguimiento_ambulatorio: 'Recontrolar 6 a 8 semanas despues de cada intervencion, cambiando una sola variable cada vez para saber cual funciono.',
      pronostico: 'Muy bueno: casi todos los casos se resuelven al corregir la forma de tomar el farmaco o la enfermedad digestiva subyacente. La verdadera resistencia es excepcional.',
      algoritmo: ['TSH alta con dosis mayor de 1.9 microgramos por kilo: no subir mas todavia', 'Preguntar de forma concreta como y cuando la toma', 'Revisar todos los farmacos y suplementos y sus horarios', 'Corregir la toma: ayunas 30 a 60 minutos, separada 4 horas de quelantes', 'Recontrolar a las 6 a 8 semanas', 'Si persiste: cribar celiaquia, gastritis atrofica y Helicobacter pylori', 'Considerar prueba de absorcion supervisada', 'Sospechar interferencia del ensayo si la T4 libre no encaja con la TSH', 'Solo entonces, aumentar la dosis o cambiar de formulacion']
    },
    {
      nombre: 'Sobretratamiento y tirotoxicosis yatrogena',
      color: '#8c3a34',
      definicion: 'Exceso de levotiroxina que suprime la TSH, con T4 libre normal (forma subclinica) o alta (franca). Es una complicacion frecuente, evitable y con consecuencias reales sobre el corazon y el hueso, y afecta sobre todo a mujeres mayores tratadas durante anos sin revision de dosis.',
      fisiopatologia: 'La TSH suprimida refleja un exceso de hormona a nivel hipofisario. Ese exceso acelera la frecuencia cardiaca, acorta el periodo refractario auricular y favorece la fibrilacion auricular, y aumenta el remodelado oseo con predominio de la resorcion, lo que reduce la densidad mineral osea sobre todo en el hueso cortical y en la mujer posmenopausica.',
      epidemiologia: 'Entre el 15 y el 20% de los pacientes tratados con levotiroxina tiene la TSH suprimida en algun momento. El riesgo de fibrilacion auricular en mayores de 60 anos con TSH suprimida se multiplica alrededor de tres veces, y el de fractura aumenta de forma significativa en la mujer posmenopausica.',
      factores_riesgo: ['Dosis no revisada tras perdida de peso o con el envejecimiento', 'Objetivo de TSH demasiado bajo en el anciano', 'Tratamiento del hipotiroidismo subclinico sin reevaluar el beneficio', 'Automedicacion o uso de hormona tiroidea para adelgazar', 'Extractos de tiroides desecada, con contenido variable de T3', 'Cambio de marca o de formulacion sin recontrolar', 'Mujer posmenopausica y edad avanzada', 'Fibrilacion auricular previa u osteoporosis conocida'],
      clinica: 'Con frecuencia asintomatico, sobre todo en el anciano. Cuando da sintomas: palpitaciones, intolerancia al calor, temblor fino, insomnio, ansiedad, perdida de peso. En el anciano puede presentarse de forma paradojica como apatia, astenia y fibrilacion auricular sin sintomas adrenergicos, el llamado hipertiroidismo apatico.',
      criterios_dx: 'TSH suprimida por debajo del rango de referencia en un paciente tratado con levotiroxina, confirmada y en ausencia de una indicacion deliberada de supresion (carcinoma diferenciado de tiroides de riesgo alto).',
      laboratorio: 'TSH y T4 libre; anadir T3 si se sospecha uso de extractos desecados. Densitometria osea en la mujer posmenopausica con supresion mantenida.',
      imagen: 'No indicada de rutina. Electrocardiograma y, si hay palpitaciones intermitentes, registro Holter para detectar fibrilacion auricular paroxistica.',
      complementarios: 'Revision de la indicacion original del tratamiento: en muchos pacientes tratados desde hace anos por una TSH ligeramente alta, la indicacion nunca fue solida y puede retirarse.',
      dx_diferencial: 'Tirotoxicosis de otra causa coincidente (enfermedad de Graves, bocio multinodular toxico), hipotiroidismo central mal titulado por TSH, interferencia del ensayo y toma reciente de varias dosis acumuladas antes del analisis.',
      tx_medico: 'Reducir la dosis, replantear el objetivo de TSH segun la edad y reevaluar si el tratamiento sigue estando indicado. En el anciano, aceptar una TSH en la mitad alta del rango normal es lo correcto, no un fallo de control.',
      tx_farmacologico: 'Bajar la levotiroxina en escalones de 12.5 a 25 microgramos y recontrolar a las 6 a 8 semanas. Si hay fibrilacion auricular, tratarla segun su propio algoritmo, con anticoagulacion segun riesgo embolico. Valorar tratamiento antirresortivo si ya hay osteoporosis.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Excepcional: solo si desencadena una tormenta tiroidea, que se desarrolla en el tema de urgencias tiroideas.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ante una fibrilacion auricular de nueva aparicion en un paciente tratado con levotiroxina, comprobar siempre la TSH: la causa puede estar en el propio tratamiento.',
      seguimiento_ambulatorio: 'TSH a las 6 a 8 semanas del ajuste y despues anual. Revisar la dosis ante perdida de peso significativa y de forma sistematica en cada decada a partir de los 65 anos, porque la necesidad disminuye con la edad.',
      pronostico: 'Bueno si se corrige: la mayoria de los efectos son reversibles. La perdida osea acumulada y los episodios de fibrilacion auricular pueden no serlo, de ahi el interes de prevenir la supresion mantenida.',
      algoritmo: ['TSH suprimida en paciente con levotiroxina: confirmar y medir T4 libre', 'Descartar que la supresion sea deliberada (carcinoma de tiroides)', 'Revisar si la indicacion original del tratamiento sigue siendo valida', 'Reducir la dosis en escalones de 12.5 a 25 microgramos', 'Electrocardiograma y busqueda de fibrilacion auricular', 'Densitometria en la mujer posmenopausica con supresion mantenida', 'Recontrolar TSH a las 6 a 8 semanas', 'Fijar un objetivo de TSH mas alto en el paciente mayor']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El hipotiroidismo casi nunca es el motivo de ingreso, pero aparece de dos formas en el hospital: como paciente ya tratado al que hay que mantener el tratamiento, y como perfil tiroideo alterado pedido en un enfermo agudo, que la mayoria de las veces no significa lo que parece. Saber cuando NO pedir e interpretar un perfil tiroideo evita mas errores que cualquier ajuste de dosis.',
    parametros: ['No pedir perfil tiroideo de rutina en el paciente critico: el sindrome del enfermo eutiroideo genera patrones que imitan enfermedad tiroidea', 'Si hay que pedirlo, medir TSH y T4 libre juntas, y anadir T3 si se sospecha enfermedad no tiroidea', 'Mantener la levotiroxina en todo paciente ya tratado durante el ingreso', 'Si no tolera via oral, usar levotiroxina intravenosa al 75 al 80% de la dosis oral', 'Comprobar la separacion horaria respecto de calcio, hierro, sucralfato y quelantes del fosforo, que en el hospital se administran juntos con frecuencia', 'Ante bradicardia, hiponatremia, derrame pericardico, ileo o hipotermia inexplicados, pedir TSH', 'Ante fibrilacion auricular de nueva aparicion en un paciente con levotiroxina, comprobar si esta sobretratado', 'Antes de dar la primera dosis de levotiroxina en un hipotiroidismo central, tratar la insuficiencia suprarrenal', 'No iniciar tratamiento durante el ingreso por una TSH alta aislada: repetirla en consulta a las 6 a 12 semanas', 'En la embarazada ingresada, no suspender ni retrasar dosis y avisar de que la necesidad sube un 25 a 30%'],
    criterios_uci_general: 'Solo en el coma mixedematoso, que se desarrolla en el tema de urgencias tiroideas: hipotermia, alteracion del nivel de conciencia, hipoventilacion con hipercapnia, bradicardia e hipotension.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa. Interesa como causa reversible de dislipidemia y de derrame pericardico en el candidato a trasplante, y por las interacciones de la levotiroxina con los inmunosupresores tomados a la vez.',
    prevencion: 'Primaria: yodacion universal de la sal, que ha eliminado el deficit de yodo como causa dominante en gran parte del mundo, y aporte de 150 a 250 microgramos diarios en el embarazo y la lactancia. Secundaria: cribado con TSH dirigido a los grupos de riesgo (embarazadas y mujeres que buscan embarazo, enfermedad autoinmune, radioterapia cervical, amiodarona, litio, inmunoterapia, dislipidemia, fibrilacion auricular) mas que cribado poblacional indiscriminado. Terciaria: evitar el sobretratamiento revisando la dosis con el paso de los anos, y evitar el tratamiento innecesario del subclinico leve del anciano.'
  }
};

export const compCites = {
  'Hipotiroidismo primario (tiroiditis de Hashimoto y otras causas)': [1, 3, 4, 14],
  'Hipotiroidismo central': [6, 4],
  'Hipotiroidismo subclinico': [7, 8, 10, 11],
  'Hipotiroidismo y embarazo': [5, 4],
  'Hipotiroidismo de dificil control (malabsorcion e interacciones)': [12, 1],
  'Sobretratamiento y tirotoxicosis yatrogena': [7, 9, 1]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Clasificacion por nivel del eje': [6, 1],
  'Clasificacion por gravedad bioquimica (calculadora disponible)': [1, 2],
  'Umbrales del hipotiroidismo subclinico': [11, 8, 7],
  'Rangos de TSH especificos del embarazo': [5],
  'Sindrome del enfermo eutiroideo': [17, 18]
};
export const escalaCalc = {
  'Clasificacion por gravedad bioquimica (calculadora disponible)': 'perfil-tiroideo',
  'Clasificacion por nivel del eje': 'perfil-tiroideo',
  'Rangos de TSH especificos del embarazo': 'perfil-tiroideo'
};
export const compGroups = [
  { name: 'Formas de hipotiroidismo', items: ['Hipotiroidismo primario (tiroiditis de Hashimoto y otras causas)', 'Hipotiroidismo central', 'Hipotiroidismo subclinico'] },
  { name: 'Situaciones especiales y complicaciones', items: ['Hipotiroidismo y embarazo', 'Hipotiroidismo de dificil control (malabsorcion e interacciones)', 'Sobretratamiento y tirotoxicosis yatrogena'] }
];
export const complicacionesIntro = 'Las tres primeras fichas son las formas de la enfermedad segun donde este el fallo y cuanto haya progresado: el primario, que es mas del 95% de los casos; el central, raro pero con la trampa de que la TSH engana; y el subclinico, que es donde se toman casi todas las decisiones equivocadas del tema. Las tres ultimas son las situaciones que mas problemas dan en la practica: el embarazo, que cambia todas las reglas; el paciente cuya TSH no baja, que casi nunca necesita mas dosis sino tomarla mejor; y el sobretratamiento, la complicacion que producimos nosotros.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Clasificacion' },
  { id: 'complicaciones', label: 'Formas y situaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'HIPOTIROIDISMO', color: '#4a6fa5', target: 'definicion' },
  branches: [
    { title: 'Leer el perfil', sub: 'TSH primero, T4 libre despues', color: '#3d5a73', target: 'diagnostico', leaves: [
      { title: 'TSH alta, T4L baja', sub: 'Primario franco', color: '#4a6fa5', target: 'complicaciones' },
      { title: 'TSH alta, T4L normal', sub: 'Subclinico: confirmar antes', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'T4L baja, TSH no alta', sub: 'Central o enfermo eutiroideo', color: '#6b4a8c', target: 'clasificacion' }
    ] },
    { title: 'A quien se trata', sub: 'El franco siempre; el subclinico no', color: '#8a6a1f', target: 'clasificacion', leaves: [
      { title: 'TSH de 10 o mas', sub: 'Tratar', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Entre el limite y 10', sub: 'Individualizar', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Embarazo', sub: 'Umbral mucho mas bajo', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Muy anciano', sub: 'Observar', color: '#5b4a86', target: 'complicaciones' }
    ] },
    { title: 'Errores del tratamiento', sub: 'Casi nunca es la dosis', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'TSH que no baja', sub: 'Adherencia y absorcion', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'TSH suprimida', sub: 'Fibrilacion y fractura', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Central titulado por TSH', sub: 'Se titula por T4 libre', color: '#6b4a8c', target: 'complicaciones' },
      { title: 'Levotiroxina antes del esteroide', sub: 'Riesgo de crisis addisoniana', color: '#8c3a34', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 15], no_invasivos: [1, 16], imagen: [4, 6] };
export const clasificacionCite = [1, 7, 5];
export const seguimientoCite = [1, 17];
