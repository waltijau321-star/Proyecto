// topics/hipertiroidismo-tiroiditis/content.js: Hipertiroidismo y Tiroiditis.
// Cubre la parte de hipertiroidismo del item "Hipotiroidismo e hipertiroidismo" y el item
// "Tiroiditis" del cluster Tiroides y paratiroides (bloque VII, Endocrinologia y Metabolismo).
// Segundo de los cinco temas del eje tiroideo.
//
// Fuentes principales: guia de la American Thyroid Association para el diagnostico y el
// tratamiento del hipertiroidismo y otras causas de tirotoxicosis; guia de la European Thyroid
// Association para la enfermedad de Graves; recomendaciones de EUGOGO para la orbitopatia;
// declaracion de la ETA sobre la disfuncion tiroidea por amiodarona; y los ensayos de
// teprotumumab en la orbitopatia moderada a grave.
//
// La tormenta tiroidea NO se desarrolla aqui: tiene tema propio en `urgencias-tiroideas`.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 5 formas de tirotoxicosis (Graves, nodular toxica, tiroiditis, por amiodarona,
// subclinica) + 3 complicaciones (orbitopatia, toxicidad de los antitiroideos, repercusion
// cardiovascular y osea). 3 figuras, 12 estigmas, sin calculadoras propias (la interpretacion del
// perfil tiroideo vive en `hipotiroidismo`).
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'hipertiroidismo-tiroiditis',
  titulo: 'Hipertiroidismo y Tiroiditis',
  subtitulo: 'Módulo 44 · Medicina Interna',
  accent: '#b4552f',
  accentDim: '#e0b39c'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const sintesisHtml = `
<div style="max-width:640px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:1fr 200px;gap:6px;align-items:stretch;">
      <div style="border:1px solid #3d5a73;border-radius:8px;padding:5px 9px;background:#3d5a7312;">
        <div style="font-weight:700;color:#3d5a73;">1. Captación del yoduro</div>
        <div style="color:var(--ink-dim);">El cotransportador sodio-yoduro (NIS) de la membrana basal bombea yoduro hacia el tirocito contra gradiente. Es también el que capta el yodo radiactivo, y por eso la captación mide la actividad de esta primera etapa.</div>
      </div>
      <div style="border:1px solid #6b4a2e;border-radius:8px;padding:5px 8px;background:#6b4a2e12;">
        <div style="font-weight:700;color:#6b4a2e;">Perclorato y tiocianato</div>
        <div style="color:var(--ink-dim);">Bloquean el NIS. El perclorato se usa en la tirotoxicosis por amiodarona tipo 1.</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 200px;gap:6px;align-items:stretch;">
      <div style="border:1px solid #b4552f;border-radius:8px;padding:5px 9px;background:#b4552f12;">
        <div style="font-weight:700;color:#b4552f;">2. Organificacion y acoplamiento</div>
        <div style="color:var(--ink-dim);">La <strong>tiroperoxidasa</strong> oxida el yoduro, lo une a los residuos de tirosina de la tiroglobulina (monoyodotirosina y diyodotirosina) y después acopla esas unidades para formar <strong>T4</strong> y <strong>T3</strong>, que quedan almacenadas en el coloide.</div>
      </div>
      <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3412;">
        <div style="font-weight:700;color:#8c3a34;">Tionamidas</div>
        <div style="color:var(--ink-dim);"><strong>Metimazol</strong> y <strong>propiltiouracilo</strong> inhiben la tiroperoxidasa. No actuan sobre la hormona ya almacenada: por eso tardan semanas en hacer efecto.</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 200px;gap:6px;align-items:stretch;">
      <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;">
        <div style="font-weight:700;color:#3f6b52;">3. Secreción a la sangre</div>
        <div style="color:var(--ink-dim);">La tiroglobulina se reabsorbe y se degrada, liberando T4 y T3. El coloide guarda hormona para semanas, y eso explica que una tiroiditis destructiva pueda inundar la sangre de golpe sin sintetizar nada nuevo.</div>
      </div>
      <div style="border:1px solid #5b4a86;border-radius:8px;padding:5px 8px;background:#5b4a8612;">
        <div style="font-weight:700;color:#5b4a86;">Yodo en dosis alta y litio</div>
        <div style="color:var(--ink-dim);">Frenan la liberación (efecto Wolff-Chaikoff). El <strong>yodo se da SIEMPRE al menos 1 hora después de la tionamida</strong>, o alimenta la síntesis.</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 200px;gap:6px;align-items:stretch;">
      <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 9px;background:#8a6a1f12;">
        <div style="font-weight:700;color:#8a6a1f;">4. Conversión periférica y acción</div>
        <div style="color:var(--ink-dim);">Las desyodasas convierten T4 en <strong>T3</strong>, que es la hormona que entra al nucleo. Parte de la T4 y de la T3 se recicla por <strong>circulación enterohepatica</strong>.</div>
      </div>
      <div style="border:1px solid #4a6fa5;border-radius:8px;padding:5px 8px;background:#4a6fa512;">
        <div style="font-weight:700;color:#4a6fa5;">Propranolol, esteroide, colestiramina</div>
        <div style="color:var(--ink-dim);">El propranolol a dosis altas y los glucocorticoides frenan la conversión de T4 en T3; la colestiramina secuestra hormona en el intestino.</div>
      </div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid var(--line);border-radius:8px;background:var(--panel2);color:var(--ink-dim);">
    <strong style="color:var(--accent-fg);">La idea que ordena el tratamiento:</strong> cada fármaco ataca un paso distinto, y en la crisis se usan todos a la vez porque se suman. El <strong>propiltiouracilo</strong> se prefiere en la crisis precisamente porque, además de inhibir la tiroperoxidasa, bloquea la conversión periférica de T4 en T3; fuera de ella se prefiere el <strong>metimazol</strong>, más potente, de dosis única diaria y menos hepatotóxico.
  </div>
</div>`;

const captacionHtml = `
<div style="max-width:620px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid var(--line);border-radius:8px;padding:5px 9px;background:var(--panel2);margin-bottom:6px;">
    <strong style="color:var(--accent-fg);">TSH suprimida con T4 libre o T3 altas: hay tirotoxicosis.</strong> <span style="color:var(--ink-dim);">La pregunta siguiente no es "cuanta", sino <strong>de donde sale la hormona</strong>. Y eso lo contesta la captación.</span>
  </div>
  <div style="display:flex;gap:8px;flex-wrap:wrap;">
    <div style="flex:1;min-width:250px;border:1px solid #b4552f;border-radius:8px;padding:7px 10px;background:#b4552f10;">
      <div style="font-weight:700;color:#b4552f;margin-bottom:3px;">Captación ALTA: la glándula fabrica de más</div>
      <div style="color:var(--ink-dim);margin-bottom:4px;">El tirocito esta hiperactivo y capta avidamente el trazador.</div>
      <div style="display:flex;flex-direction:column;gap:3px;">
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Difusa y homogénea:</strong> <span style="color:var(--ink-dim);">enfermedad de Graves. Anticuerpos antirreceptor de TSH positivos</span></div>
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Parcheada, múltiples focos:</strong> <span style="color:var(--ink-dim);">bocio multinodular tóxico</span></div>
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Un foco único con el resto frío:</strong> <span style="color:var(--ink-dim);">adenoma tóxico</span></div>
      </div>
      <div style="margin-top:5px;padding:4px 7px;border:1px solid #b4552f;border-radius:6px;background:var(--panel2);color:var(--ink-dim);"><strong style="color:#b4552f;">Se tratan con antitiroideos, yodo radiactivo o cirugía.</strong></div>
    </div>
    <div style="flex:1;min-width:250px;border:1px solid #3d5a73;border-radius:8px;padding:7px 10px;background:#3d5a7310;">
      <div style="font-weight:700;color:#3d5a73;margin-bottom:3px;">Captación BAJA: la hormona viene de fuera o del coloide roto</div>
      <div style="color:var(--ink-dim);margin-bottom:4px;">No hay síntesis nueva: el tirocito no capta.</div>
      <div style="display:flex;flex-direction:column;gap:3px;">
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Tiroides dolorosa, VSG muy alta:</strong> <span style="color:var(--ink-dim);">tiroiditis subaguda de De Quervain</span></div>
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Indolora, posparto o silente:</strong> <span style="color:var(--ink-dim);">tiroiditis linfocitaria</span></div>
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Tiroglobulina BAJA:</strong> <span style="color:var(--ink-dim);">tirotoxicosis facticia (hormona exogena)</span></div>
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Contraste, amiodarona, yodo:</strong> <span style="color:var(--ink-dim);">sobrecarga de yodo</span></div>
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Cuello sin captación, pelvis si:</strong> <span style="color:var(--ink-dim);">estruma ovarico</span></div>
      </div>
      <div style="margin-top:5px;padding:4px 7px;border:1px solid #3d5a73;border-radius:6px;background:var(--panel2);color:var(--ink-dim);"><strong style="color:#3d5a73;">Los antitiroideos NO sirven:</strong> no hay nada que inhibir. Se tratan con betabloqueante y, si hace falta, antiinflamatorio o esteroide.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Dos atajos útiles.</strong> Si hay <strong>orbitopatia o mixedema pretibial</strong>, el diagnóstico es Graves y la gammagrafía sobra. Y si la paciente esta <strong>embarazada o lactando</strong>, la gammagrafía esta contraindicada: se usan los anticuerpos antirreceptor de TSH y la ecografía con Doppler, donde el Graves muestra una glándula hipervascularizada ("infierno tiroideo") y la tiroiditis destructiva, no.
  </div>
</div>`;

const fasesHtml = `
<div style="max-width:620px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;">
    <div style="border:1px solid #b4552f;border-radius:8px;padding:6px 8px;background:#b4552f12;">
      <div style="font-weight:700;color:#b4552f;">1. Tirotóxica</div>
      <div style="color:var(--ink-dim);font-size:9px;">Semanas 0 a 6</div>
      <div style="color:var(--ink-dim);margin-top:3px;">El folliculo roto vierte la hormona almacenada. TSH suprimida, T4 alta, <strong>captación baja</strong>, tiroglobulina alta.</div>
      <div style="margin-top:4px;padding:3px 6px;border:1px solid #b4552f;border-radius:5px;background:var(--panel2);"><strong style="color:#b4552f;">Betabloqueante.</strong> Nunca antitiroideos.</div>
    </div>
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5212;">
      <div style="font-weight:700;color:#3f6b52;">2. Eutiroidea</div>
      <div style="color:var(--ink-dim);font-size:9px;">Semanas 6 a 10</div>
      <div style="color:var(--ink-dim);margin-top:3px;">Se agota el depósito de coloide. El perfil pasa por la normalidad de camino al hipotiroidismo.</div>
      <div style="margin-top:4px;padding:3px 6px;border:1px solid #3f6b52;border-radius:5px;background:var(--panel2);"><strong style="color:#3f6b52;">Observar.</strong></div>
    </div>
    <div style="border:1px solid #4a6fa5;border-radius:8px;padding:6px 8px;background:#4a6fa512;">
      <div style="font-weight:700;color:#4a6fa5;">3. Hipotiroidea</div>
      <div style="color:var(--ink-dim);font-size:9px;">Semanas 10 a 24</div>
      <div style="color:var(--ink-dim);margin-top:3px;">La glándula danada aun no repone. TSH alta, T4 baja. Suele ser sintomática.</div>
      <div style="margin-top:4px;padding:3px 6px;border:1px solid #4a6fa5;border-radius:5px;background:var(--panel2);"><strong style="color:#4a6fa5;">Levotiroxina</strong> si hay síntomas, con intento de retirada a los 6 a 12 meses.</div>
    </div>
    <div style="border:1px solid #5b4a86;border-radius:8px;padding:6px 8px;background:#5b4a8612;">
      <div style="font-weight:700;color:#5b4a86;">4. Recuperación</div>
      <div style="color:var(--ink-dim);font-size:9px;">Meses 6 a 12</div>
      <div style="color:var(--ink-dim);margin-top:3px;">Normalización en la mayoría. Hasta un 20 a 30% queda con hipotiroidismo definitivo.</div>
      <div style="margin-top:4px;padding:3px 6px;border:1px solid #5b4a86;border-radius:5px;background:var(--panel2);"><strong style="color:#5b4a86;">Control anual de TSH.</strong></div>
    </div>
  </div>
  <div style="margin-top:6px;display:flex;gap:7px;flex-wrap:wrap;">
    <div style="flex:1;min-width:250px;border:1px solid var(--line);border-radius:8px;padding:5px 9px;background:var(--panel2);color:var(--ink-dim);">
      <strong style="color:var(--accent-fg);">No todas las tiroiditis recorren las cuatro fases.</strong> La <strong>subaguda de De Quervain</strong> (dolorosa, posvirica, VSG muy alta) casi siempre las completa y se resuelve. La <strong>silente y la posparto</strong> suelen ser más leves y en un tercio de los casos debutan directamente en la fase hipotiroidea. La <strong>de Riedel</strong> y la <strong>supurativa aguda</strong> no cursan con tirotoxicosis.
    </div>
    <div style="flex:1;min-width:250px;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">El error clásico:</strong> tratar la fase tirotóxica con metimazol. Como no hay síntesis nueva sino vertido de hormona ya fabricada, el antitiroideo no tiene sobre que actuar, no acorta el cuadro y expone al paciente a agranulocitosis y hepatotoxicidad sin ningún beneficio. La captación baja es lo que evita ese error.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Conviene separar dos palabras que se usan como sinónimos y no lo son. <strong>Tirotoxicosis</strong> es el síndrome clínico por exceso de hormona tiroidea en los tejidos, venga de donde venga. <strong>Hipertiroidismo</strong> es solo una de sus causas: aquella en la que la glándula <strong>fabrica</strong> hormona de más. Una tiroiditis destructiva y una ingesta de levotiroxina producen tirotoxicosis sin hipertiroidismo, y ese matiz no es académico: decide si el paciente debe recibir un antitiroideo o no debe recibirlo bajo ningún concepto.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se fabrica la hormona y donde actúa cada fármaco.</strong></p>
${figBlock('Figura 1', 'Síntesis de hormona tiroidea y punto de acción de cada fármaco', sintesisHtml)}
<p style="margin:0 0 12px;">Entender los cuatro pasos de la síntesis ahorra memorizar el tratamiento. Las <strong>tionamidas</strong> inhiben la tiroperoxidasa, es decir, el paso de fabricacion, y por eso tardan <strong>semanas</strong> en hacer efecto: no tocan la hormona ya almacenada en el coloide, que alcanza para varias semanas. El <strong>betabloqueante</strong> no toca el tiroides pero controla los síntomas en horas. El <strong>yodo en dosis alta</strong> frena la liberación, y por eso se usa en la crisis y antes de la cirugía, siempre <strong>después</strong> de la tionamida. Y los <strong>glucocorticoides</strong> y el propranolol a dosis altas frenan la conversión de T4 en T3.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se ve: casi todo se explica por exceso de actividad adrenergica y metabólica.</strong></p>
<p style="margin:0 0 12px;">Nerviosismo, insomnio, temblor fino, palpitaciones, intolerancia al calor, sudoración, pérdida de peso con apetito conservado o aumentado, hiperdefecacion (no diarrea verdadera) y debilidad proximal. En la exploración: taquicardia, piel caliente y húmeda, retracción palpebral con mirada fija, temblor, hiperreflexia y bocio con o sin soplo. En el <strong>anciano</strong> la presentación suele ser enganosa y paucisintomatica, el llamado <strong>hipertiroidismo apatico</strong>: fibrilación auricular, insuficiencia cardiaca, pérdida de peso, debilidad y apatia, sin ningún síntoma adrenérgico llamativo. Ante una fibrilación auricular de novo hay que pedir TSH siempre.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El paso diagnóstico que ordena todo el tema: la captación.</strong></p>
${figBlock('Figura 2', 'Tirotoxicosis con captación alta frente a captación baja', captacionHtml)}
<p style="margin:0 0 12px;">Confirmada la tirotoxicosis con TSH suprimida y T4 libre o T3 altas, el siguiente paso <strong>no es repetir el perfil</strong> sino averiguar de donde sale la hormona. La <strong>captación alta</strong> significa que la glándula fabrica de más, y ahi caben el Graves (difusa), el bocio multinodular tóxico (parcheada) y el adenoma tóxico (un foco). La <strong>captación baja</strong> significa que la hormona sale del coloide roto o viene de fuera, y ahi caben las tiroiditis, la sobrecarga de yodo y la tirotoxicosis facticia. Los antitiroideos solo tienen sentido en el primer grupo.</p>
<p style="margin:0 0 12px;">Dos atajos evitan la gammagrafía. Si hay <strong>orbitopatia o mixedema pretibial</strong>, el diagnóstico es enfermedad de Graves. Y si la paciente esta <strong>embarazada o lactando</strong>, la gammagrafía esta contraindicada: se recurre a los <strong>anticuerpos antirreceptor de TSH</strong>, que además son los que predicen la recidiva y el riesgo fetal.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Las tiroiditis: una enfermedad que se mueve en el tiempo.</strong></p>
${figBlock('Figura 3', 'Fases de la tiroiditis destructiva a lo largo del tiempo', fasesHtml)}
<p style="margin:0 0 12px;">La tiroiditis destructiva no es un estado sino una <strong>secuencia</strong>: tirotoxicosis por vertido, eutiroidismo al agotarse el depósito, hipotiroidismo mientras la glándula se repara y recuperación. El mismo paciente da tres perfiles distintos en seis meses, y tratar cada uno como si fuera definitivo es el error más común. La <strong>subaguda de De Quervain</strong> es dolorosa, sigue a un cuadro virico y cursa con velocidad de sedimentación muy alta; la <strong>silente y la posparto</strong> son indoloras y autoinmunes.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Las tres opciones de tratamiento definitivo, y como se elige.</strong></p>
<p style="margin:0 0 12px;">En el hipertiroidismo verdadero hay tres caminos y ninguno es superior a los otros en todos los escenarios. Los <strong>antitiroideos</strong> ofrecen la posibilidad de remisión sin destruir la glándula, con el metimazol como elección (salvo primer trimestre de embarazo y crisis tirotóxica, donde se usa propiltiouracilo); el precio es una tasa de recidiva del 50% tras 12 a 18 meses y el riesgo pequeno pero real de agranulocitosis y hepatotoxicidad. El <strong>yodo radiactivo</strong> es definitivo, cómodo y seguro, con el hipotiroidismo como resultado esperado y no como complicación; esta contraindicado en el embarazo y la lactancia y puede empeorar una orbitopatia activa. La <strong>cirugía</strong> es la opción cuando hay bocio grande o compresivo, sospecha de cáncer, hiperparatiroidismo asociado o necesidad de corrección rápida, y exige eutiroidismo previo con tionamida más yodo.</p>
<p style="margin:0 0 12px;">Sea cual sea el camino, el <strong>betabloqueante</strong> se da desde el primer dia para controlar los síntomas mientras el resto hace efecto. El propranolol es el clásico por su bloqueo adicional de la conversión de T4 en T3; el atenolol y el bisoprolol son más cómodos. Si están contraindicados, se usa un antagonista del calcio no dihidropiridínico.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No dar antitiroideos a una tirotoxicosis con captación baja. No dar <strong>yodo antes que la tionamida</strong> en un paciente que fabrica hormona, porque se le esta dando sustrato. No pedir gammagrafía en el embarazo. No tratar un hipertiroidismo subclínico del joven asintomático sin antes confirmarlo y buscar la causa. Y no olvidar que la <strong>tormenta tiroidea</strong>, que se desarrolla en el tema de urgencias tiroideas, es un diagnóstico clínico: no hay ninguna cifra de hormona que la defina.</p>`;

export const bibliografia = [
  'Ross DS, Burch HB, Cooper DS, et al. 2016 American Thyroid Association guidelines for diagnosis and management of hyperthyroidism and other causes of thyrotoxicosis. Thyroid. 2016;26(10):1343-1421.',
  'Kahaly GJ, Bartalena L, Hegedus L, Leenhardt L, Poppe K, Pearce SH. 2018 European Thyroid Association guideline for the management of Graves hyperthyroidism. Eur Thyroid J. 2018;7(4):167-186.',
  'Smith TJ, Hegedus L. Graves disease. N Engl J Med. 2016;375(16):1552-1565.',
  'De Leo S, Lee SY, Braverman LE. Hyperthyroidism. Lancet. 2016;388(10047):906-918.',
  'Bartalena L, Kahaly GJ, Baldeschi L, et al. The 2021 European Group on Graves orbitopathy (EUGOGO) clinical practice guidelines for the medical management of Graves orbitopathy. Eur J Endocrinol. 2021;185(4):G43-G67.',
  'Douglas RS, Kahaly GJ, Patel A, et al. Teprotumumab for the treatment of active thyroid eye disease. N Engl J Med. 2020;382(4):341-352.',
  'Bartalena L, Bogazzi F, Chiovato L, Hubalewska-Dydejczyk A, Links TP, Vanderpump M. 2018 European Thyroid Association guidelines for the management of amiodarone-associated thyroid dysfunction. Eur Thyroid J. 2018;7(2):55-66.',
  'Pearce EN, Farwell AP, Braverman LE. Thyroiditis. N Engl J Med. 2003;348(26):2646-2655.',
  'Samuels MH. Subacute, silent, and postpartum thyroiditis. Med Clin North Am. 2012;96(2):223-233.',
  'Biondi B, Bartalena L, Cooper DS, Hegedus L, Laurberg P, Kahaly GJ. The 2015 European Thyroid Association guidelines on diagnosis and treatment of endogenous subclinical hyperthyroidism. Eur Thyroid J. 2015;4(3):149-163.',
  'Collet TH, Gussekloo J, Bauer DC, et al. Subclinical hyperthyroidism and the risk of coronary heart disease and mortality. Arch Intern Med. 2012;172(10):799-809.',
  'Blum MR, Bauer DC, Collet TH, et al. Subclinical thyroid dysfunction and fracture risk: a meta-analysis. JAMA. 2015;313(20):2055-2065.',
  'Alexander EK, Pearce EN, Brent GA, et al. 2017 Guidelines of the American Thyroid Association for the diagnosis and management of thyroid disease during pregnancy and the postpartum. Thyroid. 2017;27(3):315-389.',
  'Andersen SL, Olsen J, Wu CS, Laurberg P. Birth defects after early pregnancy use of antithyroid drugs: a Danish nationwide study. J Clin Endocrinol Metab. 2013;98(11):4373-4381.',
  'Nakamura H, Miyauchi A, Miyawaki N, Imagawa J. Analysis of 754 cases of antithyroid drug-induced agranulocytosis over 30 years in Japan. J Clin Endocrinol Metab. 2013;98(12):4776-4783.',
  'Cooper DS, Rivkees SA. Putting propylthiouracil in perspective. J Clin Endocrinol Metab. 2009;94(6):1881-1882.',
  'Azizi F, Malboosbaf R. Long-term antithyroid drug treatment: a systematic review and meta-analysis. Thyroid. 2017;27(10):1223-1231.',
  'Bahn RS. Graves ophthalmopathy. N Engl J Med. 2010;362(8):726-738.',
  'Sundaresh V, Brito JP, Wang Z, et al. Comparative effectiveness of therapies for Graves hyperthyroidism: a systematic review and network meta-analysis. J Clin Endocrinol Metab. 2013;98(9):3671-3677.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Tirotoxicosis leve o subclínica',
      tituloB: 'Tirotoxicosis franca y sus formas atípicas',
      compensada: 'A menudo asintomática, sobre todo en el hipertiroidismo subclínico. Cuando hay síntomas son leves e inespecíficos: nerviosismo, insomnio ligero, palpitaciones ocasionales, sudoración o intolerancia al calor. El motivo de consulta puede ser una pérdida de peso no buscada o una analítica de rutina, y en la mujer joven una alteración menstrual con oligomenorrea.',
      descompensada: 'Cuadro adrenérgico y metabólico completo: temblor fino, taquicardia sinusal o fibrilación auricular, piel caliente y húmeda, retracción palpebral, pérdida de peso pese a buen apetito, hiperdefecacion, debilidad proximal, osteopenia acelerada y, en el Graves, orbitopatia y mixedema pretibial. En el anciano la forma habitual es el hipertiroidismo APATICO: fibrilación auricular, insuficiencia cardiaca, astenia y pérdida de peso sin síntomas adrenérgicos. Su extremo es la tormenta tiroidea (ver el tema de urgencias tiroideas).'
    },
    laboratorio: [
      { prueba: 'TSH', utilidad: 'Prueba inicial. Una TSH normal prácticamente descarta la tirotoxicosis, salvo en el excepcional adenoma hipofisario secretor de TSH y en la resistencia a hormonas tiroideas.' },
      { prueba: 'T4 libre y T3 total o libre', utilidad: 'Con TSH suprimida, definen la gravedad y la forma. Si la T4 libre es normal y la T3 esta alta se habla de toxicosis por T3, típica del adenoma tóxico y de las fases iniciales del Graves. Si ambas son normales, es hipertiroidismo subclínico.' },
      { prueba: 'Anticuerpos antirreceptor de TSH (TRAb o TSI)', utilidad: 'Diagnostican la enfermedad de Graves con sensibilidad y especificidad altas. Son la alternativa a la gammagrafía en el embarazo, predicen la recidiva al retirar el antitiroideo y, en la gestante, el riesgo de hipertiroidismo fetal y neonatal (se miden hacia las semanas 18 a 22).' },
      { prueba: 'Anticuerpos antitiroperoxidasa', utilidad: 'Positivos en el Graves y en las tiroiditis autoinmunes silente y posparto. No distinguen entre ambas y no sustituyen a los antirreceptor de TSH.' },
      { prueba: 'Tiroglobulina', utilidad: 'Alta en las tiroiditis destructivas (el coloide se vierte a la sangre) y BAJA o indetectable en la tirotoxicosis facticia por hormona exogena. Es la prueba que desenmascara la ingesta oculta de levotiroxina.' },
      { prueba: 'Velocidad de sedimentación y proteína C reactiva', utilidad: 'Muy elevadas en la tiroiditis subaguda de De Quervain, que suele cursar con VSG por encima de 50 mm/h. Normales en la tiroiditis silente y en el Graves.' },
      { prueba: 'Hemograma con fórmula y perfil hepático', utilidad: 'Obligados ANTES de iniciar una tionamida, como referencia: la tirotoxicosis por sí misma produce leucopenia leve y elevación de fosfatasa alcalina y transaminasas, y sin basal no se puede atribuir después al fármaco.' },
      { prueba: 'Yoduria y anamnesis de exposición al yodo', utilidad: 'Contraste yodado, amiodarona, povidona yodada o suplementos explican una tirotoxicosis con captación baja. La sobrecarga de yodo también invalida temporalmente la gammagrafía y contraindica el yodo radiactivo durante semanas o meses.' }
    ],
    no_invasivos: [
      { metodo: 'Captación de yodo radiactivo con gammagrafía', interpretacion: 'Prueba que ordena el diagnóstico diferencial. Captación ALTA difusa (Graves), parcheada (bocio multinodular tóxico) o en foco único (adenoma tóxico). Captación BAJA: tiroiditis destructiva, sobrecarga de yodo, tirotoxicosis facticia o estruma ovarico.', cutoff: 'CONTRAINDICADA en embarazo y lactancia. Poco valorable tras exposición reciente a yodo' },
      { metodo: 'Ecografía tiroidea con Doppler', interpretacion: 'Alternativa cuando la gammagrafía no es posible. En el Graves hay glándula difusamente aumentada, hipoecogenica e hipervascularizada; en la tiroiditis destructiva, hipoecogenicidad parcheada SIN hipervascularización. También distingue los dos tipos de tirotoxicosis por amiodarona.', cutoff: 'Sin umbrales numéricos; el criterio es la vascularización' },
      { metodo: 'Electrocardiograma', interpretacion: 'Taquicardia sinusal como norma. La fibrilación auricular aparece en el 10 al 15% de los pacientes y en una proporción mucho mayor de los mayores de 60 anos: ante fibrilación auricular de nueva aparición, pedir TSH siempre.', cutoff: 'Sin umbrales; el hallazgo relevante es la fibrilación auricular' },
      { metodo: 'Puntuación de actividad clínica de la orbitopatia (CAS)', interpretacion: 'Suma de 7 ítems (dolor retrobulbar, dolor con el movimiento, enrojecimiento palpebral, enrojecimiento conjuntival, edema palpebral, quemosis e inflamación de la caruncula). Separa la enfermedad ACTIVA, que responde a inmunosupresión, de la inactiva, que solo mejora con cirugía rehabilitadora.', cutoff: 'CAS de 3 o más sobre 7 indica enfermedad activa' },
      { metodo: 'Densitometría ósea', interpretacion: 'En tirotoxicosis mantenida o hipertiroidismo subclínico persistente de la mujer posmenopáusica y del mayor de 65 anos, por la pérdida ósea acelerada de predominio cortical.', cutoff: 'Criterios densitometricos habituales de la OMS' }
    ],
    imagen: [
      { modalidad: 'Tomografía o resonancia de órbitas', hallazgos: 'En la orbitopatia moderada a grave: engrosamiento de los vientres musculares con respeto de las inserciones tendinosas (a diferencia de la miositis orbitaria), aumento de la grasa orbitaria y, en la forma grave, apinamiento en el ápex con riesgo de neuropatía óptica compresiva.' },
      { modalidad: 'Ecografía cervical', hallazgos: 'Valora el tamano del bocio, la presencia de nódulos que obliguen a estudio propio y la extensión subesternal. Es la prueba de elección si se plantea cirugía.' },
      { modalidad: 'Tomografía cervicotoracica', hallazgos: 'Solo ante bocio con sospecha de compresión o de extensión retroesternal. Ojo: el contraste yodado puede desencadenar una tirotoxicosis por sobrecarga de yodo e impide el yodo radiactivo durante semanas.' },
      { modalidad: 'Gammagrafía de cuerpo entero', hallazgos: 'Excepcional. Se plantea ante tirotoxicosis con captación cervical baja y sospecha de estruma ovarico o de metástasis funcionantes de un carcinoma diferenciado de tiroides.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La clasificación útil no es por gravedad sino por <strong>mecanismo</strong>, porque de el depende el tratamiento. Primero se separa la tirotoxicosis <strong>con hipertiroidismo</strong> (la glándula fabrica de más: captación alta) de la tirotoxicosis <strong>sin hipertiroidismo</strong> (la hormona sale del coloide roto o viene de fuera: captación baja). Dentro de la primera se distingue el origen autoinmune del autónomo nodular. Y de forma transversal se clasifica por gravedad bioquímica en subclínica o franca.`,
    escalas: [
      { nombre: 'Clasificación por captación', componentes: 'Captación de yodo radiactivo con gammagrafía, o ecografía Doppler cuando aquella no es posible.', formula: 'Captación alta frente a captación baja.', interpretacion: 'Captación alta: Graves, bocio multinodular tóxico, adenoma tóxico. Captación baja: tiroiditis destructivas, sobrecarga de yodo, tirotoxicosis facticia, estruma ovarico. Los antitiroideos solo tienen sentido en el primer grupo.' },
      { nombre: 'Clasificación por gravedad bioquímica', componentes: 'TSH, T4 libre y T3.', formula: 'Subclínica: TSH suprimida con T4 libre y T3 normales. Franca: TSH suprimida con T4 libre o T3 altas.', interpretacion: 'La subclínica se subdivide según la TSH sea menor de 0.1 mUI/L (grado 2, más riesgo) o este entre 0.1 y el limite inferior (grado 1). El grado 2 en mayores de 65 anos se trata.' },
      { nombre: 'Puntuación de actividad clínica de la orbitopatia (CAS)', componentes: 'Dolor retrobulbar espontáneo, dolor con el movimiento ocular, enrojecimiento palpebral, enrojecimiento conjuntival, edema palpebral, quemosis e inflamación de la caruncula.', formula: 'Un punto por ítem presente, sobre 7.', interpretacion: 'CAS de 3 o más: orbitopatia ACTIVA, subsidiaria de inmunosupresión (glucocorticoide intravenoso, teprotumumab, tocilizumab, rituximab). CAS menor de 3: inactiva, solo medidas locales y cirugía rehabilitadora si hay secuelas.' },
      { nombre: 'Gravedad de la orbitopatia según EUGOGO', componentes: 'Retracción palpebral, afectación de partes blandas, proptosis, diplopía, exposición corneal y función del nervio óptico.', formula: 'Clasificación en leve, moderada a grave y con riesgo de pérdida visual.', interpretacion: 'Leve: medidas locales, selenio y abandono del tabaco. Moderada a grave y activa: inmunosupresión. Con riesgo de pérdida visual (neuropatía óptica compresiva o úlcera corneal): urgencia, glucocorticoide intravenoso a dosis alta y descompresión orbitaria si no responde en 1 a 2 semanas.' },
      { nombre: 'Tirotoxicosis por amiodarona: tipos 1 y 2', componentes: 'Antecedente de bocio o de enfermedad tiroidea previa, ecografía Doppler, interleucina 6 y respuesta al tratamiento.', formula: 'Tipo 1: hipertiroidismo verdadero inducido por el yodo (Jod-Basedow) sobre glándula anormal, con vascularización conservada o aumentada. Tipo 2: tiroiditis destructiva por toxicidad directa del fármaco, sobre glándula normal y sin vascularización.', interpretacion: 'Tipo 1: tionamida a dosis altas, con perclorato si se dispone. Tipo 2: glucocorticoide. Las formas mixtas son frecuentes y se tratan con ambos. La decisión de retirar la amiodarona se toma con cardiología, porque no siempre es posible ni útil a corto plazo.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Enfermedad de Graves',
      color: '#b4552f',
      definicion: 'Enfermedad autoinmune en la que anticuerpos estimulantes del receptor de TSH provocan hiperfunción e hiperplasia tiroideas difusas. Es la causa más frecuente de hipertiroidismo, y la única que además afecta a la órbita y a la piel.',
      fisiopatologia: 'Los anticuerpos antirreceptor de TSH se comportan como agonistas: se unen al receptor y lo activan de forma continua, sin la retroalimentación que frenaria a la TSH. El resultado es síntesis y secreción aumentadas con crecimiento difuso de la glándula. El mismo receptor se expresa en el fibroblasto orbitario y en el dérmico pretibial, donde su estimulación, con la participación del receptor del factor de crecimiento similar a la insulina tipo 1, produce secreción de glucosaminoglucanos y adipogenesis: eso explica la orbitopatia y el mixedema pretibial. Ver la Figura 1 de Definición.',
      epidemiologia: 'Del 60 al 80% de todas las tirotoxicosis. Incidencia de 20 a 50 casos por 100000 habitantes y ano, con predominio femenino de 5 a 10 a 1 y pico entre los 30 y los 60 anos. La orbitopatia clínicamente evidente aparece en el 25 al 30% y es grave en menos del 5%.',
      factores_riesgo: ['Sexo femenino y antecedente familiar de enfermedad tiroidea autoinmune', 'Tabaquismo, sobre todo para la orbitopatia (multiplica el riesgo y empeora la respuesta al tratamiento)', 'Otras enfermedades autoinmunes: diabetes tipo 1, celiaquía, vitíligo, artritis reumatoide', 'Posparto y periodos de estrés inmunológico', 'Sobrecarga de yodo en zonas previamente deficitarias', 'Inhibidores de puntos de control inmunitario y reconstitución inmune tras antirretrovirales', 'Déficit de vitamina D y de selenio (asociación débil)', 'Polimorfismos de HLA-DR3, CTLA-4 y PTPN22'],
      clinica: 'Síndrome tirotoxico completo con bocio difuso, elástico y a veces con soplo o thrill. Es específica de esta enfermedad la triada extratiroidea: orbitopatia (proptosis, retracción palpebral, diplopía), mixedema pretibial (placas induradas de piel en cascara de naranja en cara anterior de las piernas) y acropaquia tiroidea, que es rara.',
      criterios_dx: 'Tirotoxicosis (TSH suprimida con T4 libre o T3 altas) más cualquiera de: anticuerpos antirreceptor de TSH positivos, captación difusamente aumentada en la gammagrafía, u orbitopatia o mixedema pretibial característicos. Con orbitopatia típica, la gammagrafía es innecesaria.',
      laboratorio: 'TSH, T4 libre, T3, anticuerpos antirreceptor de TSH y antitiroperoxidasa. Hemograma con fórmula y perfil hepático basales ANTES de iniciar tionamida.',
      imagen: 'Gammagrafía con captación difusa homogénea, o ecografía Doppler con glándula hipoecogenica e hipervascularizada. Tomografía o resonancia de órbitas si hay orbitopatia moderada a grave.',
      complementarios: 'Electrocardiograma y valoración de fibrilación auricular. Densitometría si la tirotoxicosis ha sido prolongada. Valoración oftalmológica si hay cualquier síntoma ocular.',
      dx_diferencial: 'Bocio multinodular tóxico y adenoma tóxico (captación parcheada o focal, sin anticuerpos), tiroiditis silente y posparto (captación baja), tirotoxicosis facticia (tiroglobulina baja), tirotoxicosis gestacional transitoria por gonadotropina corionica y, muy raramente, adenoma hipofisario secretor de TSH.',
      tx_medico: 'Betabloqueante desde el primer dia (propranolol 10 a 40 mg cada 6 a 8 horas, o atenolol o bisoprolol una vez al dia) para controlar los síntomas mientras el resto hace efecto. Abandono del tabaco, que es la medida modificable de mayor impacto sobre la orbitopatia. Anticonceptivo eficaz mientras se ajusta el tratamiento.',
      tx_farmacologico: 'METIMAZOL como antitiroideo de elección (5 a 30 mg al dia en dosis única), salvo en el primer trimestre del embarazo y en la crisis tirotóxica, donde se usa propiltiouracilo. Duración de 12 a 18 meses con retirada guiada por los anticuerpos antirreceptor de TSH; si siguen positivos, la recidiva es muy probable. Se puede pautar en dosis descendente (lo habitual) o en bloqueo con sustitución, que no mejora resultados y expone a más fármaco. Alternativas definitivas: yodo radiactivo (contraindicado en embarazo y lactancia, puede empeorar la orbitopatia activa, se cubre con glucocorticoide si hay factores de riesgo) o tiroidectomía total.',
      tx_intervencionista: 'Tiroidectomía total si hay bocio grande o compresivo, nódulo sospechoso, hiperparatiroidismo asociado, orbitopatia moderada a grave activa, deseo gestacional proximo o preferencia del paciente. Exige eutiroidismo previo con tionamida y solución yodada saturada en los 10 días anteriores para reducir la vascularización.',
      criterios_uci: 'Tormenta tiroidea (ver el tema de urgencias tiroideas), insuficiencia cardiaca de alto gasto o fibrilación auricular con inestabilidad.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Poco frecuente salvo crisis o complicación cardiaca. Si el paciente ingresa por otro motivo, mantener el antitiroideo y el betabloqueante y evitar la exposición a contrastes yodados si esta previsto yodo radiactivo.',
      seguimiento_ambulatorio: 'Perfil tiroideo a las 4 a 6 semanas de iniciar la tionamida y después cada 2 a 3 meses. La TSH puede permanecer suprimida meses tras normalizarse la T4: no titular por TSH al principio. Anticuerpos antirreceptor de TSH antes de retirar el tratamiento. Tras yodo radiactivo o cirugía, vigilar el hipotiroidismo, que es el resultado esperado.',
      pronostico: 'Remisión con antitiroideos en cerca del 50% tras 12 a 18 meses, menor si el bocio es grande, la T3 muy alta, el paciente es joven, fumador o tiene anticuerpos muy elevados. Tras yodo radiactivo o cirugía, la enfermedad se controla pero deja hipotiroidismo permanente en la mayoría.',
      algoritmo: ['Confirmar tirotoxicosis: TSH suprimida con T4 libre o T3 altas', 'Buscar orbitopatia o mixedema pretibial: si están, el diagnóstico es Graves', 'Si no, anticuerpos antirreceptor de TSH y, si hacen falta, gammagrafía', 'Betabloqueante desde el primer dia', 'Hemograma y perfil hepático basales antes de la tionamida', 'Metimazol como elección; propiltiouracilo en el primer trimestre y en la crisis', 'Advertir por escrito: fiebre u odinofagia obligan a suspender y hacer hemograma urgente', 'Perfil a las 4 a 6 semanas, titulando por T4 libre y no por TSH', 'A los 12 a 18 meses, medir anticuerpos y decidir retirada o tratamiento definitivo']
    },
    {
      nombre: 'Bocio multinodular tóxico y adenoma tóxico',
      color: '#8a6a1f',
      definicion: 'Hipertiroidismo por autonomia funcional de uno o varios nódulos, que producen hormona al margen del control de la TSH. Es la segunda causa de hipertiroidismo y la primera en el anciano y en las zonas con déficit de yodo.',
      fisiopatologia: 'Con el tiempo, algunos tirocitos adquieren mutaciones activadoras somáticas, sobre todo del receptor de TSH y de la subunidad alfa de la proteína G estimuladora, que los mantienen activados de forma constitutiva. Esos clones crecen y funcionan sin estímulo, suprimen la TSH y el tejido sano circundante queda inhibido y frío en la gammagrafía. El proceso es lento, de anos, y por eso el hipertiroidismo suele ser leve y de larga evolución.',
      epidemiologia: 'Del 15 al 30% de las tirotoxicosis en zonas con yodo suficiente, y proporción mayor donde hubo déficit. Predomina por encima de los 50 a 60 anos. El adenoma tóxico aparece en pacientes más jóvenes y suele medir más de 3 cm cuando produce tirotoxicosis.',
      factores_riesgo: ['Edad avanzada', 'Bocio multinodular de larga evolución', 'Déficit de yodo previo y corrección posterior del aporte', 'Sexo femenino', 'Antecedente familiar de bocio nodular', 'Exposición a contraste yodado o a amiodarona (desencadena el fenómeno de Jod-Basedow)', 'Radiación cervical en la infancia'],
      clinica: 'Instauración lenta y síntomas leves o ausentes. En el anciano predomina la forma apatica: fibrilación auricular, insuficiencia cardiaca, pérdida de peso y debilidad, sin nerviosismo ni temblor llamativos. NUNCA hay orbitopatia ni mixedema pretibial. Puede haber síntomas compresivos si el bocio es grande: disfagia, disnea, disfonia o signo de Pemberton.',
      criterios_dx: 'Tirotoxicosis con captación aumentada de distribución parcheada (bocio multinodular tóxico) o en un foco único con supresión del resto de la glándula (adenoma tóxico), y anticuerpos antirreceptor de TSH negativos.',
      laboratorio: 'TSH, T4 libre y T3 (la toxicosis por T3 aislada es frecuente en el adenoma tóxico). Anticuerpos antirreceptor de TSH negativos, que ayudan a separarlo del Graves.',
      imagen: 'Gammagrafía, que es la prueba clave. Ecografía para caracterizar los nódulos y valorar el tamano del bocio; tomografía si hay sospecha de extensión retroesternal o compresión. Un nódulo caliente en la gammagrafía prácticamente nunca es maligno y no requiere punción.',
      complementarios: 'Electrocardiograma y búsqueda de fibrilación auricular, muy frecuente en este grupo. Densitometría en la mujer posmenopáusica.',
      dx_diferencial: 'Enfermedad de Graves sobre bocio nodular (Marine-Lenhart), tiroiditis destructiva, tirotoxicosis por amiodarona tipo 1 y bocio multinodular no tóxico con TSH baja por otra causa.',
      tx_medico: 'Betabloqueante para el control sintomático. Evitar la exposición a yodo (contrastes, amiodarona, antisepticos), que puede desencadenar o agravar la tirotoxicosis en una glándula autónoma.',
      tx_farmacologico: 'Los antitiroideos controlan pero NO curan: la autonomia no remite, de modo que al retirarlos la tirotoxicosis reaparece siempre. Su papel es preparar al paciente para el tratamiento definitivo o mantener a quien no es candidato a el. El tratamiento de elección es el YODO RADIACTIVO, que además reduce el tamano del bocio; la dosis suele ser mayor que en el Graves.',
      tx_intervencionista: 'Tiroidectomía (total en el bocio multinodular, hemitiroidectomia en el adenoma tóxico) si el bocio es grande o compresivo, si hay sospecha de malignidad en algún nódulo o si se desea corrección rápida. Alternativas percutáneas en casos seleccionados: ablación por radiofrecuencia o etanol para el adenoma tóxico.',
      criterios_uci: 'Excepcional: tormenta tiroidea desencadenada por contraste yodado o por una enfermedad aguda.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Precaución mayuscula con el contraste yodado en el bocio nodular del anciano: puede precipitar una tirotoxicosis semanas después. Si es imprescindible, valorar profilaxis con tionamida en el paciente de riesgo alto.',
      seguimiento_ambulatorio: 'Perfil tiroideo a las 6 a 12 semanas del yodo radiactivo y después periódico: el hipotiroidismo posterior es menos frecuente que en el Graves pero puede aparecer anos después. Si se opero, sustitución y control anual.',
      pronostico: 'Excelente con tratamiento definitivo. Sin el, la tirotoxicosis persiste y progresa, con riesgo acumulado de fibrilación auricular y de pérdida ósea.',
      algoritmo: ['Tirotoxicosis con anticuerpos antirreceptor de TSH negativos y sin orbitopatia', 'Gammagrafía: captación parcheada o foco único con resto suprimido', 'Betabloqueante para los síntomas', 'Ecografía para valorar nódulos y tamano; tomografía si hay sospecha de compresión', 'Tionamida solo como puente, porque la autonomia no remite', 'Yodo radiactivo como tratamiento de elección', 'Cirugía si el bocio es grande, compresivo o sospechoso', 'Evitar contrastes yodados y amiodarona', 'Control periódico de TSH tras el tratamiento definitivo']
    },
    {
      nombre: 'Tiroiditis subaguda, silente y posparto',
      color: '#3d5a73',
      definicion: 'Grupo de tiroiditis destructivas que producen tirotoxicosis por vertido de hormona preformada, sin hipertiroidismo. Se caracterizan por captación BAJA y por recorrer una secuencia temporal de tirotoxicosis, eutiroidismo, hipotiroidismo y recuperación.',
      fisiopatologia: 'La inflamación rompe el foliculo y libera a la sangre la hormona almacenada en el coloide. Como no hay síntesis nueva, el tirocito no capta yodo y la gammagrafía sale fría. Al agotarse el depósito, el paciente pasa por el eutiroidismo camino del hipotiroidismo, que dura hasta que la glándula se repara. En la subaguda de De Quervain el desencadenante es probablemente virico y hay inflamación granulomatosa con células gigantes; en la silente y la posparto el mecanismo es autoinmune linfocitario. Ver la Figura 3 de Definición.',
      epidemiologia: 'La subaguda supone hasta un 5% de la patología tiroidea y predomina en mujeres de 30 a 50 anos, con estacionalidad de verano y otono. La tiroiditis posparto afecta al 5 al 10% de las mujeres en el primer ano tras el parto, y hasta al 25% de las que tienen diabetes tipo 1 o anticuerpos antitiroperoxidasa previos.',
      factores_riesgo: ['Infección virica de vías respiratorias altas en las semanas previas (subaguda)', 'HLA-B35 (subaguda)', 'Posparto, sobre todo en los primeros 6 meses', 'Anticuerpos antitiroperoxidasa positivos antes del embarazo', 'Diabetes tipo 1 y otras enfermedades autoinmunes', 'Antecedente de tiroiditis posparto en gestaciones previas (recurre en más del 40%)', 'Fármacos: interferón alfa, litio, amiodarona, inhibidores de tirosina cinasa e inhibidores de puntos de control inmunitario'],
      clinica: 'La SUBAGUDA cursa con dolor cervical anterior intenso irradiado a mandibula u oído, tiroides muy dolorosa a la palpación, fiebre y malestar, precedidos de un cuadro virico; la tirotoxicosis es moderada. La SILENTE y la POSPARTO son indoloras y a menudo se detectan por síntomas leves de tirotoxicosis o directamente en la fase hipotiroidea, con astenia y bajo ánimo que se confunden con depresión posparto.',
      criterios_dx: 'Tirotoxicosis con captación BAJA. En la subaguda, dolor tiroideo con velocidad de sedimentación muy elevada. En la silente y la posparto, ausencia de dolor, anticuerpos antitiroperoxidasa a menudo positivos y contexto temporal (primer ano tras el parto).',
      laboratorio: 'TSH, T4 libre y T3. Velocidad de sedimentación y proteína C reactiva muy altas en la subaguda y normales en las demás. Tiroglobulina alta (útil para excluir la tirotoxicosis facticia). Anticuerpos antirreceptor de TSH negativos.',
      imagen: 'La gammagrafía muestra captación baja o ausente, y es la prueba que evita el error de tratar con antitiroideos. La ecografía muestra áreas hipoecogenicas parcheadas SIN hipervascularización, a diferencia del Graves.',
      complementarios: 'En la mujer con tiroiditis posparto, planificar el seguimiento del siguiente embarazo: recurre en más del 40% de los casos.',
      dx_diferencial: 'Enfermedad de Graves (captación alta, anticuerpos positivos), tiroiditis supurativa aguda (fiebre alta, absceso, leucocitosis con neutrofilia), hemorragia intranodular (dolor brusco sin tirotoxicosis), faringitis y, en la fase hipotiroidea, tiroiditis de Hashimoto establecida.',
      tx_medico: 'Fase tirotóxica: BETABLOQUEANTE para los síntomas. En la subaguda, antiinflamatorios no esteroideos para el dolor y, si no bastan, prednisona 30 a 40 mg al dia con descenso en 4 a 6 semanas, que alivia el dolor en 24 a 48 horas de forma casi diagnóstica. En la silente y la posparto no suele hacer falta nada más.',
      tx_farmacologico: 'LOS ANTITIROIDEOS NO TIENEN NINGÚN PAPEL: no hay síntesis que inhibir. En la fase hipotiroidea, levotiroxina si hay síntomas o si la TSH es muy alta, con intento de retirada a los 6 a 12 meses para comprobar si la función se ha recuperado.',
      tx_intervencionista: 'Ninguno.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Rara vez ingresan. Si lo hacen por dolor intenso, la respuesta rápida al glucocorticoide apoya el diagnóstico de subaguda.',
      seguimiento_ambulatorio: 'Perfil tiroideo cada 4 a 8 semanas durante 6 meses para seguir la secuencia de fases, y después TSH anual: hasta un 20 a 30% queda con hipotiroidismo definitivo, proporción mayor en la posparto con anticuerpos positivos.',
      pronostico: 'Bueno: la mayoría recupera la función tiroidea normal en 6 a 12 meses. La subaguda recidiva en menos del 5%; la posparto recurre en más del 40% de los siguientes embarazos.',
      algoritmo: ['Tirotoxicosis: pedir captación o ecografía Doppler', 'Captación baja sin exposición a yodo: tiroiditis destructiva', 'Dolor cervical con VSG muy alta: subaguda de De Quervain', 'Indolora en el primer ano tras el parto: tiroiditis posparto', 'Tratar la fase tirotóxica solo con betabloqueante', 'Antiinflamatorios o prednisona si hay dolor', 'NO dar antitiroideos en ningún caso', 'Seguir el perfil cada 4 a 8 semanas por las fases siguientes', 'Levotiroxina en la fase hipotiroidea si hay síntomas, con retirada a los 6 a 12 meses']
    },
    {
      nombre: 'Tirotoxicosis inducida por amiodarona',
      color: '#6b4a2e',
      definicion: 'Disfunción tiroidea por un fármaco que contiene un 37% de yodo en peso y se acumula en el tejido graso durante meses. Puede aparecer en cualquier momento del tratamiento e incluso mucho después de suspenderlo, y existe en dos formas de mecanismo opuesto que se tratan de forma distinta.',
      fisiopatologia: 'El TIPO 1 es un hipertiroidismo verdadero: la sobrecarga de yodo permite que una glándula anormal (bocio nodular latente o Graves subclínico) fabrique hormona sin freno, el fenómeno de Jod-Basedow. El TIPO 2 es una tiroiditis destructiva por toxicidad directa de la amiodarona sobre el tirocito, con vertido de hormona preformada sobre una glándula previamente normal. Las formas mixtas son frecuentes. Además, la amiodarona inhibe la desyodasa tipo 1, lo que eleva la T4 y la T3 reversa incluso en pacientes eutiroideos.',
      epidemiologia: 'Disfunción tiroidea en el 15 al 20% de los tratados. La tirotoxicosis predomina en áreas con aporte de yodo suficiente o bajo y el hipotiroidismo en las de aporte alto. El tipo 2 es hoy más frecuente que el tipo 1 en la mayoría de las series.',
      factores_riesgo: ['Bocio nodular o enfermedad tiroidea autoinmune previa (predisponen al tipo 1)', 'Glándula previamente normal (tipo 2)', 'Zona geográfica con aporte de yodo bajo (tipo 1)', 'Dosis acumulada y duración del tratamiento', 'Sexo masculino (a diferencia del resto de la patología tiroidea)', 'Antecedente familiar de enfermedad tiroidea', 'Suspensión reciente del fármaco, que no protege por su larga vida media'],
      clinica: 'La tirotoxicosis puede ser sutil porque la amiodarona bloquea parte de los efectos adrenérgicos y de la conversión periférica. Las pistas más útiles son la reaparición o el empeoramiento de la arritmia que motivo el tratamiento, la pérdida de peso y el deterioro funcional. Puede desencadenar angina, insuficiencia cardiaca o tormenta tiroidea en cardiopatas.',
      criterios_dx: 'Tirotoxicosis en un paciente tratado con amiodarona en los últimos meses. La distinción entre tipos se apoya en el antecedente de enfermedad tiroidea, la ecografía Doppler (vascularización conservada o aumentada en el tipo 1, ausente en el tipo 2) y la respuesta al tratamiento. La captación suele estar baja en ambos por la sobrecarga de yodo, lo que le resta utilidad.',
      laboratorio: 'TSH, T4 libre y T3. Anticuerpos antirreceptor de TSH (positivos apoyan tipo 1 sobre Graves latente). La interleucina 6 se ha propuesto como marcador del tipo 2, con utilidad limitada en la práctica.',
      imagen: 'Ecografía con Doppler, que es la prueba más útil a pie de cama. Gammagrafía poco valorable por la sobrecarga de yodo, aunque una captación conservada o alta pese al yodo apoya el tipo 1.',
      complementarios: 'Valoración cardiológica conjunta e imprescindible: la decisión de retirar o mantener la amiodarona depende de si existe alternativa antiarritmica segura, y su larga vida media hace que retirarla no mejore el cuadro a corto plazo.',
      dx_diferencial: 'Enfermedad de Graves coincidente, tiroiditis silente, tirotoxicosis por contraste yodado y elevación aislada de T4 con TSH normal por inhibición de la desyodasa, que NO es tirotoxicosis y no se trata.',
      tx_medico: 'Betabloqueante según tolerancia hemodinámica. Decisión compartida con cardiología sobre mantener o retirar la amiodarona: retirarla no resuelve el cuadro a corto plazo por su vida media de 50 a 100 días.',
      tx_farmacologico: 'TIPO 1: tionamida a dosis altas (metimazol 30 a 40 mg al dia), anadiendo perclorato potasico durante 2 a 6 semanas si se dispone de el, para bloquear la captación de yodo. TIPO 2: PREDNISONA 30 a 40 mg al dia con descenso lento en 2 a 3 meses, con respuesta a menudo espectacular en 1 a 2 semanas. FORMAS MIXTAS o duda diagnóstica: ambos a la vez, que es la conducta pragmatica más habitual.',
      tx_intervencionista: 'Tiroidectomía total si el cuadro es grave, refractario o el paciente no tolera la demora, sobre todo si la amiodarona es imprescindible. Es una cirugía de riesgo mayor por la cardiopatía de base, y aun así puede ser la opción más segura. El yodo radiactivo casi nunca es viable por la captación baja.',
      criterios_uci: 'Tormenta tiroidea, arritmia mal tolerada o insuficiencia cardiaca descompensada.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Monitorización cardiaca. Vigilar la respuesta al glucocorticoide en la primera o segunda semana, que orienta retrospectivamente al tipo 2.',
      seguimiento_ambulatorio: 'Perfil tiroideo cada 3 a 6 meses en todo paciente con amiodarona, y basal antes de iniciarla. Tras resolver el cuadro, seguimiento prolongado por la persistencia del fármaco en el organismo.',
      pronostico: 'El tipo 2 suele resolverse en 1 a 3 meses y puede dejar hipotiroidismo. El tipo 1 es más rebelde y a menudo exige tratamiento definitivo. La tirotoxicosis por amiodarona aumenta la morbimortalidad cardiovascular en el cardiopata, de ahi la necesidad de resolverla pronto.',
      algoritmo: ['Tirotoxicosis en paciente con amiodarona actual o reciente', 'Ecografía Doppler y anticuerpos antirreceptor de TSH', 'Vascularización conservada o aumentada y glándula anormal: tipo 1', 'Glándula normal sin vascularización: tipo 2', 'Tipo 1: metimazol a dosis altas, con perclorato si se dispone', 'Tipo 2: prednisona 30 a 40 mg al dia con descenso lento', 'Duda o forma mixta: ambos tratamientos a la vez', 'Decidir con cardiología si se retira la amiodarona', 'Tiroidectomía si es grave o refractaria']
    },
    {
      nombre: 'Hipertiroidismo subclínico',
      color: '#5b4a86',
      definicion: 'TSH por debajo del limite inferior de referencia con T4 libre y T3 normales, confirmada en una segunda determinación. Importa poco por los síntomas y mucho por dos consecuencias: la fibrilación auricular y la pérdida de masa ósea.',
      fisiopatologia: 'Un exceso hormonal pequeno pero mantenido basta para suprimir la TSH y para producir efectos tisulares: acorta el periodo refractario auricular y favorece la reentrada, y acelera el remodelado óseo con predominio de la resorción, sobre todo en hueso cortical. El riesgo es proporcional al grado de supresión y a la edad.',
      epidemiologia: 'Prevalencia del 0.7 al 3% de la población, mayor en el anciano y en zonas con déficit de yodo. La causa exogena (levotiroxina en dosis excesiva) es más frecuente que la endógena. El riesgo relativo de fibrilación auricular en mayores de 60 anos con TSH por debajo de 0.1 mUI/L se multiplica aproximadamente por tres.',
      factores_riesgo: ['Bocio multinodular y adenoma tóxico en el anciano', 'Enfermedad de Graves en fase inicial o en remisión parcial', 'Tratamiento con levotiroxina en dosis excesiva (causa exogena, la más frecuente)', 'Supresión deliberada de TSH en el carcinoma diferenciado de tiroides', 'Edad mayor de 65 anos', 'Osteoporosis o factores de riesgo de fractura', 'Cardiopatía estructural o antecedente de fibrilación auricular', 'Menopausia'],
      clinica: 'Habitualmente asintomático. Puede haber palpitaciones, ansiedad, insomnio, intolerancia al calor o disminución de la tolerancia al ejercicio. En el anciano, la primera manifestación puede ser directamente una fibrilación auricular o una fractura.',
      criterios_dx: 'TSH por debajo del rango con T4 libre y T3 normales en DOS determinaciones separadas 3 a 6 meses, tras excluir causas no tiroideas de TSH baja (enfermedad aguda, glucocorticoides, dopamina, embarazo del primer trimestre, hipotiroidismo central).',
      laboratorio: 'TSH, T4 libre y T3. Anticuerpos antirreceptor de TSH si se sospecha Graves. Revisar siempre si el paciente toma levotiroxina, porque es la causa más frecuente.',
      imagen: 'Gammagrafía o ecografía solo si se confirma la persistencia y hace falta identificar la causa antes de tratar.',
      complementarios: 'Electrocardiograma y, si hay palpitaciones intermitentes, registro Holter. Densitometría ósea en la mujer posmenopáusica y en el mayor de 65 anos.',
      dx_diferencial: 'Sobretratamiento con levotiroxina, primer trimestre del embarazo (supresión fisiológica por gonadotropina corionica), enfermedad aguda grave, glucocorticoides y dopamina, hipotiroidismo central e interferencia del ensayo.',
      tx_medico: 'Si la causa es exogena, ajustar la dosis de levotiroxina, que resuelve el problema sin más. Si es endógena y no se trata, control periódico con TSH y vigilancia cardiaca y ósea.',
      tx_farmacologico: 'Se TRATA cuando la TSH es menor de 0.1 mUI/L y el paciente tiene 65 anos o más, o cuando hay cardiopatía, fibrilación auricular, osteoporosis o menopausia sin tratamiento hormonal, o síntomas atribuibles. Con TSH entre 0.1 y el limite inferior, en general se observa, salvo en mayores de 65 anos con cardiopatía. El tratamiento es el de la causa: yodo radiactivo o tionamida en el bocio nodular tóxico y el Graves.',
      tx_intervencionista: 'Según la causa; las mismas opciones que en el hipertiroidismo franco.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ante fibrilación auricular de nueva aparición en el hospital, comprobar la TSH: el hipertiroidismo subclínico es una causa reversible y con frecuencia yatrógena.',
      seguimiento_ambulatorio: 'Si no se trata, TSH y T4 libre cada 6 a 12 meses, con densitometría periódica en el grupo de riesgo. Si se trata, seguimiento como el del hipertiroidismo franco.',
      pronostico: 'La progresión a hipertiroidismo franco es de alrededor del 1 al 5% anual, mayor en el bocio nodular. El exceso de riesgo cardiovascular y de fractura se concentra en los mayores de 65 anos con TSH por debajo de 0.1 mUI/L.',
      algoritmo: ['TSH baja con T4 libre y T3 normales: confirmar en 3 a 6 meses', 'Descartar causas no tiroideas y revisar si toma levotiroxina', 'Si es exogena, bajar la dosis y recontrolar', 'Si es endógena y persiste, identificar la causa con gammagrafía', 'TSH menor de 0.1 con 65 anos o más: tratar', 'Cardiopatía, fibrilación auricular u osteoporosis: tratar', 'Joven asintomático con supresión leve: observar', 'Densitometría y electrocardiograma en el grupo de riesgo']
    },
    {
      nombre: 'Orbitopatia de Graves',
      color: '#8c3a34',
      definicion: 'Enfermedad autoinmune de los tejidos orbitarios asociada a la enfermedad de Graves, con inflamación y expansión de la grasa y de los músculos extraoculares. Es la manifestación extratiroidea más frecuente y sigue un curso propio, en parte independiente del control hormonal.',
      fisiopatologia: 'El fibroblasto orbitario expresa el receptor de TSH y el receptor del factor de crecimiento similar a la insulina tipo 1. Los autoanticuerpos los activan y desencadenan producción de glucosaminoglucanos, que retienen agua, y diferenciación a adipocito. El resultado es aumento de volumen dentro de una cavidad ósea inextensible: de ahi la proptosis, la restricción de la motilidad y, en el extremo, la compresión del nervio óptico en el ápex. El curso tiene una fase ACTIVA inflamatoria de 6 a 24 meses y otra INACTIVA de secuelas fibróticas, y solo la primera responde a inmunosupresión.',
      epidemiologia: 'Manifestaciones oculares en el 25 al 50% de los pacientes con Graves, clínicamente relevantes en el 20 al 30% y graves en menos del 5%. El tabaquismo es el factor de riesgo modificable más potente: multiplica el riesgo y reduce la respuesta al tratamiento.',
      factores_riesgo: ['Tabaquismo (el factor modificable más importante con diferencia)', 'Anticuerpos antirreceptor de TSH muy elevados', 'Tratamiento con yodo radiactivo sin cobertura con glucocorticoide', 'Hipotiroidismo posterapeutico no corregido o control hormonal inestable', 'Sexo masculino y edad avanzada (se asocian a formas más graves)', 'Duración e intensidad de la tirotoxicosis', 'Déficit de selenio en zonas deficitarias'],
      clinica: 'Sensación de cuerpo extrano, lagrimeo, fotofobia, dolor retrobulbar y con el movimiento ocular, edema y enrojecimiento palpebral y conjuntival, quemosis, proptosis, retracción palpebral y diplopía, primero intermitente y después constante. La pérdida de agudeza visual, la discromatopsia y el defecto pupilar aferente indican neuropatía óptica compresiva y son una URGENCIA.',
      criterios_dx: 'Clínico, en un paciente con enfermedad de Graves actual o pasada. Se completa con la puntuación de actividad clínica (CAS de 3 o más sobre 7 indica actividad) y la clasificación de gravedad de EUGOGO. La imagen se reserva para las formas moderadas a graves y para los casos atípicos o unilaterales.',
      laboratorio: 'Perfil tiroideo y anticuerpos antirreceptor de TSH, que se correlacionan con la actividad y la gravedad y sirven para el seguimiento.',
      imagen: 'Tomografía o resonancia de órbitas: engrosamiento de los vientres musculares con RESPETO de las inserciones tendinosas (a diferencia de la miositis orbitaria idiopática), aumento de la grasa y apinamiento apical. La resonancia con secuencias potenciadas en T2 ayuda a valorar la actividad inflamatoria.',
      complementarios: 'Valoración oftalmológica con agudeza visual, visión de colores, presión intraocular, exploración corneal, campimetría y exoftalmometria. Debe ser precoz y periódica, no solo cuando el paciente se queja.',
      dx_diferencial: 'Miositis orbitaria idiopática (afecta a las inserciones tendinosas), enfermedad relacionada con IgG4, celulitis orbitaria, fístula carotidocavernosa, tumores orbitarios y linfoma, y orbitopatia unilateral que obliga a descartar causa local.',
      tx_medico: 'Tres medidas para todos: ABANDONO DEL TABACO, restauracion y mantenimiento del eutiroidismo (evitando tanto la tirotoxicosis como el hipotiroidismo) y medidas locales (lágrimas artificiales, gafas de sol, elevación del cabecero, oclusión nocturna, prismas para la diplopía). Selenio 100 microgramos dos veces al dia durante 6 meses en la forma leve de corta evolución, en zonas con déficit.',
      tx_farmacologico: 'Enfermedad ACTIVA moderada a grave: metilprednisolona intravenosa en pulsos semanales (dosis acumulada habitual de 4.5 g en 12 semanas, sin superar 8 g por hepatotoxicidad), a menudo combinada con micofenolato. Alternativas y segundas líneas: TEPROTUMUMAB (anticuerpo contra el receptor del factor de crecimiento similar a la insulina tipo 1, que reduce la proptosis de forma marcada, con hipoacusia como efecto adverso relevante), tocilizumab, rituximab o radioterapia orbitaria. Si se administra yodo radiactivo a un paciente con orbitopatia activa o con factores de riesgo, cubrir con prednisona oral.',
      tx_intervencionista: 'Descompresión orbitaria urgente si hay neuropatía óptica compresiva que no responde a los pulsos en 1 a 2 semanas, o ante úlcera corneal por exposición. En la fase INACTIVA, cirugía rehabilitadora en el orden clásico: descompresión, después cirugía de estrabismo y por último cirugía palpebral.',
      criterios_uci: 'No aplica, pero la neuropatía óptica compresiva es una urgencia oftalmológica que exige ingreso para pulsos intravenosos.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Durante los pulsos de metilprednisolona: vigilar glucemia, presión arterial, perfil hepático y riesgo tromboembólico. Controlar la dosis acumulada.',
      seguimiento_ambulatorio: 'Valoración conjunta de endocrinologia y oftalmologia, con CAS y exoftalmometria seriados. La cirugía rehabilitadora se difiere hasta al menos 6 meses de inactividad estable.',
      pronostico: 'La mayoría de las formas leves mejora o se estabiliza espontáneamente. Las moderadas a graves dejan secuelas en una proporción importante pese al tratamiento. Dejar de fumar mejora el pronóstico más que cualquier fármaco.',
      algoritmo: ['Valorar a todo paciente con Graves buscando síntomas y signos oculares', 'Calcular el CAS: 3 o más sobre 7 indica enfermedad activa', 'Clasificar la gravedad según EUGOGO', 'Comprobar si hay pérdida visual o discromatopsia: si la hay, es una urgencia', 'Insistir en el abandono del tabaco y normalizar la función tiroidea', 'Leve: medidas locales, selenio y observación', 'Moderada a grave y activa: pulsos de metilprednisolona, valorar teprotumumab', 'Riesgo de pérdida visual: pulsos a dosis alta y descompresión si no responde', 'Inactiva con secuelas: cirugía rehabilitadora en orden descompresión, estrabismo, párpados']
    },
    {
      nombre: 'Complicaciones del tratamiento antitiroideo',
      color: '#7a1f3d',
      definicion: 'Efectos adversos de las tionamidas, poco frecuentes pero potencialmente mortales. Su prevención no depende de analíticas de rutina sino de una instrucción clara al paciente sobre que síntoma obliga a suspender el fármaco y acudir de inmediato.',
      fisiopatologia: 'La agranulocitosis es una reacción idiosincrásica de base inmunológica que destruye los precursores granulociticos; aparece sobre todo en los primeros 3 meses y no se anticipa con hemogramas periódicos, porque puede instaurarse en días. La hepatotoxicidad del propiltiouracilo es una necrosis hepatocelular idiosincrásica que puede llegar a fallo hepático agudo, mientras que la del metimazol es típicamente colestásica y de mejor pronóstico. La embriopatia por metimazol se atribuye a la interferencia con la organogenesis en las semanas 6 a 10.',
      epidemiologia: 'Agranulocitosis en el 0.2 al 0.5% de los tratados, con mortalidad no despreciable si se retrasa el diagnóstico. Hepatotoxicidad grave por propiltiouracilo en 1 de cada 10000 adultos, con casos de trasplante hepático y muerte, sobre todo en ninos. Reacciones menores (exantema, prurito, artralgias) en el 5 al 10%.',
      factores_riesgo: ['Primeros 3 meses de tratamiento (la mayoría de los casos de agranulocitosis)', 'Dosis altas de metimazol', 'Edad mayor de 40 anos', 'Propiltiouracilo, para la hepatotoxicidad grave y la vasculitis por anticuerpos anticitoplasma de neutrófilo', 'Metimazol en el primer trimestre del embarazo, para la embriopatia', 'Antecedente de reacción a otra tionamida (reactividad cruzada frecuente)', 'Haplotipos HLA-B 38:02 y HLA-DRB1 08:03 (población asiática)'],
      clinica: 'La agranulocitosis se presenta como FIEBRE Y ODINOFAGIA de aparición brusca, con o sin úlceras orales. La hepatotoxicidad, como ictericia, coluria, náuseas, dolor en hipocondrio derecho o astenia intensa. Las reacciones menores son exantema y prurito. La vasculitis por propiltiouracilo cursa con artralgias, púrpura, afectación renal o hemorragia alveolar.',
      criterios_dx: 'Agranulocitosis: neutrófilos por debajo de 500 por microlitro en un paciente tratado. Hepatotoxicidad: elevación de transaminasas más de 3 veces el limite alto o de bilirrubina, con patrón hepatocelular en el propiltiouracilo y colestásico en el metimazol.',
      laboratorio: 'Hemograma con fórmula y perfil hepático BASALES antes de iniciar, para poder interpretar después (la propia tirotoxicosis altera ambos). Ante fiebre u odinofagia, hemograma urgente el mismo dia. No se recomienda el hemograma periódico de rutina como estrategia de cribado, porque no anticipa el cuadro.',
      imagen: 'No aplica de forma general; ecografía abdominal si hay sospecha de hepatopatía para descartar otras causas.',
      complementarios: 'Entrega de instrucciones POR ESCRITO al iniciar el tratamiento. Anticuerpos anticitoplasma de neutrófilo si se sospecha vasculitis por propiltiouracilo.',
      dx_diferencial: 'Faringitis virica o bacteriana banal (que es lo que más se parece a la agranulocitosis y la razón de pedir hemograma siempre), hepatitis viricas y tóxicas, colestasis de otra causa y la propia hepatopatía de la tirotoxicosis grave.',
      tx_medico: 'Instrucción explícita: ante FIEBRE U ODINOFAGIA, suspender el fármaco y hacer hemograma urgente el mismo dia. Ante ictericia o coluria, suspender y pedir perfil hepático. Explicar que estos avisos son más eficaces que cualquier analítica programada.',
      tx_farmacologico: 'Agranulocitosis: suspensión definitiva de la tionamida, ingreso, antibióticos de amplio espectro y factor estimulante de colonias de granulocitos en casos seleccionados. NO se cambia a la otra tionamida por la reactividad cruzada: se pasa a tratamiento definitivo con yodo radiactivo o cirugía, con betabloqueante, yodo, colestiramina y glucocorticoide como puente si hace falta. Hepatotoxicidad: suspender y no reintroducir.',
      tx_intervencionista: 'Tiroidectomía como salida cuando la tionamida ya no es una opción y el yodo radiactivo no es viable o es demasiado lento.',
      criterios_uci: 'Neutropenia febril con inestabilidad, sepsis o fallo hepático agudo.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En la agranulocitosis, aislamiento protector, antibioterapia precoz y recuento diario hasta la recuperación, que suele producirse en 1 a 3 semanas.',
      seguimiento_ambulatorio: 'Registrar la reacción en la historia y en la tarjeta del paciente. Toda tionamida queda contraindicada de por vida tras una agranulocitosis o una hepatotoxicidad grave.',
      pronostico: 'La agranulocitosis se recupera en 1 a 3 semanas si se retira el fármaco pronto; el retraso diagnóstico es lo que mata. La hepatotoxicidad por propiltiouracilo puede evolucionar a fallo hepático agudo pese a la suspensión.',
      algoritmo: ['Hemograma y perfil hepático basales antes de iniciar la tionamida', 'Entregar instrucciones por escrito sobre fiebre, odinofagia e ictericia', 'Ante fiebre u odinofagia: suspender y hemograma urgente el mismo dia', 'Neutrófilos por debajo de 500: ingreso, antibióticos y suspensión definitiva', 'No cambiar a la otra tionamida: hay reactividad cruzada', 'Pasar a tratamiento definitivo con yodo radiactivo o cirugía', 'Ante ictericia o coluria: suspender y perfil hepático', 'Registrar la reacción como contraindicación permanente']
    },
    {
      nombre: 'Repercusión cardiovascular y ósea de la tirotoxicosis',
      color: '#3f6b52',
      definicion: 'Consecuencias sistémicas del exceso hormonal mantenido, que son la principal fuente de morbilidad del tema y las que justifican tratar incluso formas subclínicas. Afectan sobre todo al corazón del anciano y al hueso de la mujer posmenopáusica.',
      fisiopatologia: 'La T3 aumenta la expresión de canales iónicos y de receptores beta en el miocito cardiaco: sube la frecuencia y la contractilidad, baja la resistencia periférica y aumenta el gasto, con hipertensión sistólica de presión de pulso amplia. El acortamiento del periodo refractario auricular favorece la fibrilación auricular, y el gasto elevado mantenido puede llevar a una insuficiencia cardiaca de alto gasto, sobre todo si aparece taquimiocardiopatia. En el hueso, la T3 acelera el ciclo de remodelado acortando la fase de formación respecto de la de resorción: se pierde masa ósea, sobre todo cortical, y aumenta el riesgo de fractura de cadera.',
      epidemiologia: 'Fibrilación auricular en el 10 al 15% de los pacientes con tirotoxicosis franca, y hasta en el 20 al 25% de los mayores de 60 anos. El hipertiroidismo subclínico con TSH por debajo de 0.1 mUI/L multiplica por cerca de tres el riesgo de fibrilación auricular y aumenta de forma significativa el de fractura de cadera.',
      factores_riesgo: ['Edad mayor de 60 anos', 'Cardiopatía estructural o hipertensión previa', 'Duración prolongada de la tirotoxicosis, incluida la subclínica', 'TSH por debajo de 0.1 mUI/L', 'Mujer posmenopáusica, para el riesgo óseo', 'Tratamiento supresor con levotiroxina no reevaluado', 'Bocio multinodular tóxico del anciano', 'Bajo peso, tabaquismo y sedentarismo'],
      clinica: 'Palpitaciones, disnea de esfuerzo, angina en el cardiopata, edemas e intolerancia al ejercicio. La fibrilación auricular puede ser la primera manifestación, sobre todo en el hipertiroidismo apatico del anciano. En el hueso, la enfermedad es silente hasta la fractura.',
      criterios_dx: 'Fibrilación auricular o insuficiencia cardiaca en el contexto de tirotoxicosis confirmada. Osteoporosis por densitometría (puntuación T de -2.5 o menor) o fractura por fragilidad.',
      laboratorio: 'Perfil tiroideo. Péptido natriurético si hay disnea (esta elevado en la tirotoxicosis incluso sin insuficiencia cardiaca, lo que resta especificidad). Calcio, fósforo y 25-hidroxivitamina D en la valoración ósea.',
      imagen: 'Ecocardiograma si hay insuficiencia cardiaca, soplo o sospecha de taquimiocardiopatia. Densitometría ósea en la mujer posmenopáusica y en el mayor de 65 anos con supresión mantenida.',
      complementarios: 'Electrocardiograma y, si se sospecha fibrilación auricular paroxística, registro Holter. Calculo del riesgo embólico para decidir la anticoagulación.',
      dx_diferencial: 'Fibrilación auricular de otra causa, insuficiencia cardiaca de otro origen, anemia y sepsis como causas alternativas de gasto elevado, y osteoporosis posmenopáusica sin relación con el tiroides.',
      tx_medico: 'Corregir la tirotoxicosis, que es el tratamiento de fondo de ambas complicaciones. Betabloqueante para el control de la frecuencia. Aporte de calcio y vitamina D, ejercicio de carga y abandono del tabaco.',
      tx_farmacologico: 'Fibrilación auricular: control de frecuencia con betabloqueante (o antagonista del calcio no dihidropiridínico si esta contraindicado) y anticoagulación según el riesgo embólico calculado con las escalas habituales, no de forma automática por el hecho de ser tiroidea. Hasta dos tercios revierten espontáneamente a ritmo sinusal en los 2 a 3 meses siguientes a alcanzar el eutiroidismo, por lo que la cardioversión suele diferirse hasta entonces. Osteoporosis: tratamiento antirresortivo según los criterios habituales una vez corregido el exceso hormonal.',
      tx_intervencionista: 'Cardioversión o ablación si la fibrilación auricular persiste tras el eutiroidismo mantenido. Tratamiento definitivo del hipertiroidismo, preferido al tratamiento médico prolongado en el paciente con cardiopatía.',
      criterios_uci: 'Insuficiencia cardiaca descompensada, fibrilación auricular con respuesta ventricular rápida mal tolerada o tormenta tiroidea.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ante fibrilación auricular de nueva aparición, pedir TSH siempre. Recordar que en la tirotoxicosis puede haber resistencia relativa a la digoxina y que el control de frecuencia requiere dosis mayores de betabloqueante de lo habitual.',
      seguimiento_ambulatorio: 'Reevaluar el ritmo a los 2 a 3 meses del eutiroidismo antes de decidir cardioversión. Densitometría de control tras corregir la tirotoxicosis, porque parte de la masa ósea se recupera.',
      pronostico: 'La función cardiaca mejora de forma notable al corregir la tirotoxicosis, y la taquimiocardiopatia suele ser reversible. La masa ósea se recupera parcialmente, más en el joven que en la mujer posmenopáusica.',
      algoritmo: ['Ante fibrilación auricular de nueva aparición, pedir TSH', 'Confirmar la tirotoxicosis y tratar la causa', 'Betabloqueante para el control de frecuencia', 'Calcular el riesgo embólico y anticoagular según las escalas habituales', 'Diferir la cardioversión hasta 2 a 3 meses de eutiroidismo', 'Ecocardiograma si hay insuficiencia cardiaca o sospecha de taquimiocardiopatia', 'Densitometría en la mujer posmenopáusica y en el mayor de 65 anos', 'Calcio, vitamina D y ejercicio de carga; antirresortivo según criterios habituales']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La tirotoxicosis llega al hospital de tres formas: como fibrilación auricular o insuficiencia cardiaca de causa no aclarada, como efecto adverso de un antitiroideo, y como tormenta tiroidea. Las tres se resuelven mejor si se recuerda una regla simple: primero averiguar si la glándula fabrica o solo vierte, y después elegir el fármaco.',
    parametros: ['Ante fibrilación auricular de nueva aparición o insuficiencia cardiaca sin causa clara, pedir TSH', 'Confirmada la tirotoxicosis, determinar el mecanismo antes de tratar: captación o ecografía Doppler', 'Betabloqueante desde el primer momento salvo contraindicación hemodinámica', 'No dar tionamida a una tirotoxicosis con captación baja: no tiene sobre que actuar', 'Si hay que dar yodo, administrarlo SIEMPRE al menos 1 hora después de la tionamida', 'Hemograma con fórmula y perfil hepático basales antes de iniciar una tionamida', 'Ante fiebre u odinofagia en un paciente con tionamida: hemograma urgente el mismo dia y suspensión', 'Evitar contrastes yodados en el bocio nodular del anciano y si esta previsto yodo radiactivo', 'Monitorización cardiaca en el cardiopata y en toda tirotoxicosis grave', 'Sospechar tormenta tiroidea ante fiebre, alteración del estado mental o disfunción orgánica, y aplicar el tema de urgencias tiroideas'],
    criterios_uci_general: 'Tormenta tiroidea, insuficiencia cardiaca de alto gasto descompensada, fibrilación auricular con respuesta ventricular rápida mal tolerada, agranulocitosis febril con inestabilidad y fallo hepático agudo por propiltiouracilo.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'El trasplante hepático se ha requerido de forma excepcional en el fallo hepático agudo por propiltiouracilo, motivo por el que ese fármaco se reserva a indicaciones concretas.',
    prevencion: 'Primaria: aporte adecuado de yodo sin excesos, y cautela con la sobrecarga yodada (contrastes, amiodarona, antisepticos, suplementos) en el bocio nodular del anciano, donde puede desencadenar tirotoxicosis. Secundaria: perfil tiroideo basal y cada 3 a 6 meses en todo paciente con amiodarona; TSH ante fibrilación auricular de nueva aparición, pérdida de peso no explicada u osteoporosis; revisión periódica de la dosis de levotiroxina para evitar la supresión yatrógena. Terciaria: abandono del tabaco y cobertura con glucocorticoide al dar yodo radiactivo en pacientes con orbitopatia o factores de riesgo, e instrucción escrita sobre los síntomas de alarma de las tionamidas.'
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
  'Enfermedad de Graves': { definicion: [1, 2, 3, 19], criterios_dx: [1, 2, 3, 19], laboratorio: [1, 2, 3, 19], tx_farmacologico: [1, 2, 3, 19] },
  'Bocio multinodular tóxico y adenoma tóxico': { definicion: [1, 4], criterios_dx: [1, 4], laboratorio: [1, 4], tx_farmacologico: [1, 4] },
  'Tiroiditis subaguda, silente y posparto': { definicion: [8, 9], criterios_dx: [8, 9], laboratorio: [8, 9], tx_farmacologico: [8, 9] },
  'Tirotoxicosis inducida por amiodarona': { definicion: [7, 1], criterios_dx: [7, 1], laboratorio: [7, 1], tx_farmacologico: [7, 1] },
  'Hipertiroidismo subclínico': { definicion: [10, 11, 12], criterios_dx: [10, 11, 12], laboratorio: [10, 11, 12], tx_farmacologico: [10, 11, 12] },
  'Orbitopatia de Graves': { definicion: [5, 6, 18], criterios_dx: [5, 6, 18], laboratorio: [5, 6, 18], tx_farmacologico: [5, 6, 18] },
  'Complicaciones del tratamiento antitiroideo': { definicion: [15, 16, 14], criterios_dx: [15, 16, 14], laboratorio: [15, 16, 14], tx_farmacologico: [15, 16, 14] },
  'Repercusión cardiovascular y ósea de la tirotoxicosis': { definicion: [11, 12, 4], criterios_dx: [11, 12, 4], laboratorio: [11, 12, 4], tx_farmacologico: [11, 12, 4] }
};
export const estigmasTitulo = 'Signos y síntomas de la tirotoxicosis, y los específicos de la enfermedad de Graves';
export const estigmas = [
  { s: 'Taquicardia sinusal en reposo', p: '~90%', photo: null, desc: 'El signo más constante. Persiste durante el sueno, a diferencia de la taquicardia por ansiedad. Su ausencia en un paciente con tirotoxicosis obliga a pensar en betabloqueo previo o en fibrilación auricular ya establecida.' },
  { s: 'Pérdida de peso con apetito conservado o aumentado', p: '80-85%', photo: null, desc: 'Combinación muy sugestiva: el paciente come igual o más y adelgaza. En el anciano puede haber anorexia asociada, lo que confunde con neoplasia y retrasa el diagnóstico.' },
  { s: 'Temblor fino distal', p: '~80%', photo: null, desc: 'De alta frecuencia y baja amplitud, se explora con los brazos extendidos y los dedos separados, y se hace más evidente colocando una hoja de papel sobre las manos. Mejora en horas con el betabloqueante.' },
  { s: 'Intolerancia al calor y sudoración', p: '70-80%', photo: null, desc: 'El paciente refiere que ya no soporta el calor que antes toleraba y que suda más que los demás. La piel esta caliente, fina y húmeda, en contraste con la piel seca y fría del hipotiroidismo.' },
  { s: 'Nerviosismo, ansiedad e insomnio', p: '70-80%', photo: null, desc: 'Con frecuencia el motivo por el que el paciente acaba en psiquiatría antes que en endocrinologia. En la mujer joven puede confundirse con un trastorno de ansiedad, y en el anciano el cuadro es el opuesto: apatia.' },
  { s: 'Bocio difuso, elástico, a veces con soplo', p: '60-70% (Graves)', photo: null, desc: 'El soplo o el thrill sobre la glándula reflejan la hipervascularización y son prácticamente exclusivos de la enfermedad de Graves. En el bocio multinodular tóxico se palpan nódulos y la glándula es irregular.' },
  { s: 'Retracción palpebral con mirada fija', p: '~50%', photo: null, desc: 'Signo adrenérgico presente en cualquier tirotoxicosis, no solo en el Graves: se debe al tono aumentado del músculo de Muller. Se acompana del signo de von Graefe (retraso del párpado al seguir el dedo hacia abajo).' },
  { s: 'Hiperdefecacion', p: '~35%', photo: null, desc: 'Aumento del número de deposiciones de consistencia normal o blanda, por tránsito acelerado. No es una diarrea verdadera, y ese matiz ayuda a distinguirla de una causa digestiva primaria.' },
  { s: 'Debilidad muscular proximal', p: '~35%', photo: null, desc: 'Dificultad para levantarse de una silla o subir escaleras, con creatincinasa normal o baja. En el varón asiático joven puede presentarse como parálisis periódica tirotóxica hipopotasemica, desencadenada por comidas ricas en carbohidratos o ejercicio.' },
  { s: 'Fibrilación auricular', p: '10-15% (20-25% en mayores de 60)', photo: null, desc: 'A menudo la única manifestación en el anciano con hipertiroidismo apatico. Hasta dos tercios revierten solos a ritmo sinusal en los 2 a 3 meses siguientes a alcanzar el eutiroidismo, por lo que la cardioversión suele diferirse.' },
  { s: 'Orbitopatia: proptosis, edema periorbitario, diplopía', p: '25-30% (solo en Graves)', photo: null, desc: 'Específica de la enfermedad de Graves y suficiente para diagnosticarla sin gammagrafía. La pérdida de agudeza visual o la alteración de la visión de colores indican neuropatía óptica compresiva y son una urgencia.' },
  { s: 'Mixedema pretibial y acropaquia tiroidea', p: '1-5% (solo en Graves)', photo: null, desc: 'Placas induradas de piel en cascara de naranja en la cara anterior de las piernas, por depósito de glucosaminoglucanos en la dermis; casi siempre acompanan a una orbitopatia grave. La acropaquia (dedos en palillo de tambor con periostitis) es todavía más rara.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Clasificación por captación': [1],
  'Clasificación por gravedad bioquímica': [10, 1],
  'Puntuación de actividad clínica de la orbitopatia (CAS)': [5],
  'Gravedad de la orbitopatia según EUGOGO': [5, 6],
  'Tirotoxicosis por amiodarona: tipos 1 y 2': [7]
};
export const escalaCalc = {};
export const compGroups = [
  { name: 'Formas de tirotoxicosis', items: ['Enfermedad de Graves', 'Bocio multinodular tóxico y adenoma tóxico', 'Tiroiditis subaguda, silente y posparto', 'Tirotoxicosis inducida por amiodarona', 'Hipertiroidismo subclínico'] },
  { name: 'Complicaciones', items: ['Orbitopatia de Graves', 'Complicaciones del tratamiento antitiroideo', 'Repercusión cardiovascular y ósea de la tirotoxicosis'] }
];
export const complicacionesIntro = 'Las cinco primeras fichas son las formas de tirotoxicosis, ordenadas por el mecanismo que decide el tratamiento: las tres primeras fabrican hormona (Graves, nodular tóxica) o la vierten (tiroiditis), la cuarta puede hacer ambas cosas según el tipo, y la quinta es la versión bioquímica leve de cualquiera de ellas. Las tres últimas son las complicaciones que de verdad importan: la orbitopatia, que sigue su propio curso al margen del control hormonal; la toxicidad de los antitiroideos, que se previene con una instrucción y no con analíticas; y el dano cardiaco y óseo, que es la razón por la que se trata incluso lo subclínico.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Clasificacion' },
  { id: 'complicaciones', label: 'Formas y complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'TIROTOXICOSIS', color: '#b4552f', target: 'definicion' },
  branches: [
    { title: 'Captación ALTA', sub: 'La glándula fabrica de más', color: '#b4552f', target: 'diagnostico', leaves: [
      { title: 'Difusa', sub: 'Enfermedad de Graves', color: '#b4552f', target: 'complicaciones' },
      { title: 'Parcheada', sub: 'Bocio multinodular tóxico', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Foco único', sub: 'Adenoma tóxico', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'Captación BAJA', sub: 'Vertido o hormona de fuera', color: '#3d5a73', target: 'diagnostico', leaves: [
      { title: 'Tiroides dolorosa', sub: 'Subaguda de De Quervain', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Indolora o posparto', sub: 'Tiroiditis linfocitaria', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Amiodarona tipo 2', sub: 'Se trata con esteroide', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Tiroglobulina baja', sub: 'Tirotoxicosis facticia', color: '#5b4a86', target: 'clasificacion' }
    ] },
    { title: 'Lo que hay que vigilar', sub: 'Corazón, hueso, ojo y fármaco', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Fibrilación auricular', sub: 'Pedir TSH siempre', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Pérdida ósea', sub: 'Mujer posmenopáusica', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Orbitopatia activa', sub: 'CAS de 3 o más', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Agranulocitosis', sub: 'Fiebre u odinofagia', color: '#7a1f3d', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 13], no_invasivos: [1, 5], imagen: [5, 1] };
export const clasificacionCite = [1, 10, 7];
export const seguimientoCite = [1, 7];
