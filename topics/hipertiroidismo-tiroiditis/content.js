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
  subtitulo: 'Modulo 44 · Medicina Interna',
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
        <div style="font-weight:700;color:#3d5a73;">1. Captacion del yoduro</div>
        <div style="color:var(--ink-dim);">El cotransportador sodio-yoduro (NIS) de la membrana basal bombea yoduro hacia el tirocito contra gradiente. Es tambien el que capta el yodo radiactivo, y por eso la captacion mide la actividad de esta primera etapa.</div>
      </div>
      <div style="border:1px solid #6b4a2e;border-radius:8px;padding:5px 8px;background:#6b4a2e12;">
        <div style="font-weight:700;color:#6b4a2e;">Perclorato y tiocianato</div>
        <div style="color:var(--ink-dim);">Bloquean el NIS. El perclorato se usa en la tirotoxicosis por amiodarona tipo 1.</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 200px;gap:6px;align-items:stretch;">
      <div style="border:1px solid #b4552f;border-radius:8px;padding:5px 9px;background:#b4552f12;">
        <div style="font-weight:700;color:#b4552f;">2. Organificacion y acoplamiento</div>
        <div style="color:var(--ink-dim);">La <strong>tiroperoxidasa</strong> oxida el yoduro, lo une a los residuos de tirosina de la tiroglobulina (monoyodotirosina y diyodotirosina) y despues acopla esas unidades para formar <strong>T4</strong> y <strong>T3</strong>, que quedan almacenadas en el coloide.</div>
      </div>
      <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3412;">
        <div style="font-weight:700;color:#8c3a34;">Tionamidas</div>
        <div style="color:var(--ink-dim);"><strong>Metimazol</strong> y <strong>propiltiouracilo</strong> inhiben la tiroperoxidasa. No actuan sobre la hormona ya almacenada: por eso tardan semanas en hacer efecto.</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 200px;gap:6px;align-items:stretch;">
      <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;">
        <div style="font-weight:700;color:#3f6b52;">3. Secrecion a la sangre</div>
        <div style="color:var(--ink-dim);">La tiroglobulina se reabsorbe y se degrada, liberando T4 y T3. El coloide guarda hormona para semanas, y eso explica que una tiroiditis destructiva pueda inundar la sangre de golpe sin sintetizar nada nuevo.</div>
      </div>
      <div style="border:1px solid #5b4a86;border-radius:8px;padding:5px 8px;background:#5b4a8612;">
        <div style="font-weight:700;color:#5b4a86;">Yodo en dosis alta y litio</div>
        <div style="color:var(--ink-dim);">Frenan la liberacion (efecto Wolff-Chaikoff). El <strong>yodo se da SIEMPRE al menos 1 hora despues de la tionamida</strong>, o alimenta la sintesis.</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 200px;gap:6px;align-items:stretch;">
      <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 9px;background:#8a6a1f12;">
        <div style="font-weight:700;color:#8a6a1f;">4. Conversion periferica y accion</div>
        <div style="color:var(--ink-dim);">Las desyodasas convierten T4 en <strong>T3</strong>, que es la hormona que entra al nucleo. Parte de la T4 y de la T3 se recicla por <strong>circulacion enterohepatica</strong>.</div>
      </div>
      <div style="border:1px solid #4a6fa5;border-radius:8px;padding:5px 8px;background:#4a6fa512;">
        <div style="font-weight:700;color:#4a6fa5;">Propranolol, esteroide, colestiramina</div>
        <div style="color:var(--ink-dim);">El propranolol a dosis altas y los glucocorticoides frenan la conversion de T4 en T3; la colestiramina secuestra hormona en el intestino.</div>
      </div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid var(--line);border-radius:8px;background:var(--panel2);color:var(--ink-dim);">
    <strong style="color:var(--accent-fg);">La idea que ordena el tratamiento:</strong> cada farmaco ataca un paso distinto, y en la crisis se usan todos a la vez porque se suman. El <strong>propiltiouracilo</strong> se prefiere en la crisis precisamente porque, ademas de inhibir la tiroperoxidasa, bloquea la conversion periferica de T4 en T3; fuera de ella se prefiere el <strong>metimazol</strong>, mas potente, de dosis unica diaria y menos hepatotoxico.
  </div>
</div>`;

const captacionHtml = `
<div style="max-width:620px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid var(--line);border-radius:8px;padding:5px 9px;background:var(--panel2);margin-bottom:6px;">
    <strong style="color:var(--accent-fg);">TSH suprimida con T4 libre o T3 altas: hay tirotoxicosis.</strong> <span style="color:var(--ink-dim);">La pregunta siguiente no es "cuanta", sino <strong>de donde sale la hormona</strong>. Y eso lo contesta la captacion.</span>
  </div>
  <div style="display:flex;gap:8px;flex-wrap:wrap;">
    <div style="flex:1;min-width:250px;border:1px solid #b4552f;border-radius:8px;padding:7px 10px;background:#b4552f10;">
      <div style="font-weight:700;color:#b4552f;margin-bottom:3px;">Captacion ALTA: la glandula fabrica de mas</div>
      <div style="color:var(--ink-dim);margin-bottom:4px;">El tirocito esta hiperactivo y capta avidamente el trazador.</div>
      <div style="display:flex;flex-direction:column;gap:3px;">
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Difusa y homogenea:</strong> <span style="color:var(--ink-dim);">enfermedad de Graves. Anticuerpos antirreceptor de TSH positivos</span></div>
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Parcheada, multiples focos:</strong> <span style="color:var(--ink-dim);">bocio multinodular toxico</span></div>
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Un foco unico con el resto frio:</strong> <span style="color:var(--ink-dim);">adenoma toxico</span></div>
      </div>
      <div style="margin-top:5px;padding:4px 7px;border:1px solid #b4552f;border-radius:6px;background:var(--panel2);color:var(--ink-dim);"><strong style="color:#b4552f;">Se tratan con antitiroideos, yodo radiactivo o cirugia.</strong></div>
    </div>
    <div style="flex:1;min-width:250px;border:1px solid #3d5a73;border-radius:8px;padding:7px 10px;background:#3d5a7310;">
      <div style="font-weight:700;color:#3d5a73;margin-bottom:3px;">Captacion BAJA: la hormona viene de fuera o del coloide roto</div>
      <div style="color:var(--ink-dim);margin-bottom:4px;">No hay sintesis nueva: el tirocito no capta.</div>
      <div style="display:flex;flex-direction:column;gap:3px;">
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Tiroides dolorosa, VSG muy alta:</strong> <span style="color:var(--ink-dim);">tiroiditis subaguda de De Quervain</span></div>
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Indolora, posparto o silente:</strong> <span style="color:var(--ink-dim);">tiroiditis linfocitaria</span></div>
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Tiroglobulina BAJA:</strong> <span style="color:var(--ink-dim);">tirotoxicosis facticia (hormona exogena)</span></div>
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Contraste, amiodarona, yodo:</strong> <span style="color:var(--ink-dim);">sobrecarga de yodo</span></div>
        <div style="border:1px solid var(--line);border-radius:5px;padding:3px 7px;"><strong>Cuello sin captacion, pelvis si:</strong> <span style="color:var(--ink-dim);">estruma ovarico</span></div>
      </div>
      <div style="margin-top:5px;padding:4px 7px;border:1px solid #3d5a73;border-radius:6px;background:var(--panel2);color:var(--ink-dim);"><strong style="color:#3d5a73;">Los antitiroideos NO sirven:</strong> no hay nada que inhibir. Se tratan con betabloqueante y, si hace falta, antiinflamatorio o esteroide.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Dos atajos utiles.</strong> Si hay <strong>orbitopatia o mixedema pretibial</strong>, el diagnostico es Graves y la gammagrafia sobra. Y si la paciente esta <strong>embarazada o lactando</strong>, la gammagrafia esta contraindicada: se usan los anticuerpos antirreceptor de TSH y la ecografia con Doppler, donde el Graves muestra una glandula hipervascularizada ("infierno tiroideo") y la tiroiditis destructiva, no.
  </div>
</div>`;

const fasesHtml = `
<div style="max-width:620px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;">
    <div style="border:1px solid #b4552f;border-radius:8px;padding:6px 8px;background:#b4552f12;">
      <div style="font-weight:700;color:#b4552f;">1. Tirotoxica</div>
      <div style="color:var(--ink-dim);font-size:9px;">Semanas 0 a 6</div>
      <div style="color:var(--ink-dim);margin-top:3px;">El folliculo roto vierte la hormona almacenada. TSH suprimida, T4 alta, <strong>captacion baja</strong>, tiroglobulina alta.</div>
      <div style="margin-top:4px;padding:3px 6px;border:1px solid #b4552f;border-radius:5px;background:var(--panel2);"><strong style="color:#b4552f;">Betabloqueante.</strong> Nunca antitiroideos.</div>
    </div>
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5212;">
      <div style="font-weight:700;color:#3f6b52;">2. Eutiroidea</div>
      <div style="color:var(--ink-dim);font-size:9px;">Semanas 6 a 10</div>
      <div style="color:var(--ink-dim);margin-top:3px;">Se agota el deposito de coloide. El perfil pasa por la normalidad de camino al hipotiroidismo.</div>
      <div style="margin-top:4px;padding:3px 6px;border:1px solid #3f6b52;border-radius:5px;background:var(--panel2);"><strong style="color:#3f6b52;">Observar.</strong></div>
    </div>
    <div style="border:1px solid #4a6fa5;border-radius:8px;padding:6px 8px;background:#4a6fa512;">
      <div style="font-weight:700;color:#4a6fa5;">3. Hipotiroidea</div>
      <div style="color:var(--ink-dim);font-size:9px;">Semanas 10 a 24</div>
      <div style="color:var(--ink-dim);margin-top:3px;">La glandula danada aun no repone. TSH alta, T4 baja. Suele ser sintomatica.</div>
      <div style="margin-top:4px;padding:3px 6px;border:1px solid #4a6fa5;border-radius:5px;background:var(--panel2);"><strong style="color:#4a6fa5;">Levotiroxina</strong> si hay sintomas, con intento de retirada a los 6 a 12 meses.</div>
    </div>
    <div style="border:1px solid #5b4a86;border-radius:8px;padding:6px 8px;background:#5b4a8612;">
      <div style="font-weight:700;color:#5b4a86;">4. Recuperacion</div>
      <div style="color:var(--ink-dim);font-size:9px;">Meses 6 a 12</div>
      <div style="color:var(--ink-dim);margin-top:3px;">Normalizacion en la mayoria. Hasta un 20 a 30% queda con hipotiroidismo definitivo.</div>
      <div style="margin-top:4px;padding:3px 6px;border:1px solid #5b4a86;border-radius:5px;background:var(--panel2);"><strong style="color:#5b4a86;">Control anual de TSH.</strong></div>
    </div>
  </div>
  <div style="margin-top:6px;display:flex;gap:7px;flex-wrap:wrap;">
    <div style="flex:1;min-width:250px;border:1px solid var(--line);border-radius:8px;padding:5px 9px;background:var(--panel2);color:var(--ink-dim);">
      <strong style="color:var(--accent-fg);">No todas las tiroiditis recorren las cuatro fases.</strong> La <strong>subaguda de De Quervain</strong> (dolorosa, posvirica, VSG muy alta) casi siempre las completa y se resuelve. La <strong>silente y la posparto</strong> suelen ser mas leves y en un tercio de los casos debutan directamente en la fase hipotiroidea. La <strong>de Riedel</strong> y la <strong>supurativa aguda</strong> no cursan con tirotoxicosis.
    </div>
    <div style="flex:1;min-width:250px;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">El error clasico:</strong> tratar la fase tirotoxica con metimazol. Como no hay sintesis nueva sino vertido de hormona ya fabricada, el antitiroideo no tiene sobre que actuar, no acorta el cuadro y expone al paciente a agranulocitosis y hepatotoxicidad sin ningun beneficio. La captacion baja es lo que evita ese error.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Conviene separar dos palabras que se usan como sinonimos y no lo son. <strong>Tirotoxicosis</strong> es el sindrome clinico por exceso de hormona tiroidea en los tejidos, venga de donde venga. <strong>Hipertiroidismo</strong> es solo una de sus causas: aquella en la que la glandula <strong>fabrica</strong> hormona de mas. Una tiroiditis destructiva y una ingesta de levotiroxina producen tirotoxicosis sin hipertiroidismo, y ese matiz no es academico: decide si el paciente debe recibir un antitiroideo o no debe recibirlo bajo ningun concepto.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se fabrica la hormona y donde actua cada farmaco.</strong></p>
${figBlock('Figura 1', 'Sintesis de hormona tiroidea y punto de accion de cada farmaco', sintesisHtml)}
<p style="margin:0 0 12px;">Entender los cuatro pasos de la sintesis ahorra memorizar el tratamiento. Las <strong>tionamidas</strong> inhiben la tiroperoxidasa, es decir, el paso de fabricacion, y por eso tardan <strong>semanas</strong> en hacer efecto: no tocan la hormona ya almacenada en el coloide, que alcanza para varias semanas. El <strong>betabloqueante</strong> no toca el tiroides pero controla los sintomas en horas. El <strong>yodo en dosis alta</strong> frena la liberacion, y por eso se usa en la crisis y antes de la cirugia, siempre <strong>despues</strong> de la tionamida. Y los <strong>glucocorticoides</strong> y el propranolol a dosis altas frenan la conversion de T4 en T3.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Como se ve: casi todo se explica por exceso de actividad adrenergica y metabolica.</strong></p>
<p style="margin:0 0 12px;">Nerviosismo, insomnio, temblor fino, palpitaciones, intolerancia al calor, sudoracion, perdida de peso con apetito conservado o aumentado, hiperdefecacion (no diarrea verdadera) y debilidad proximal. En la exploracion: taquicardia, piel caliente y humeda, retraccion palpebral con mirada fija, temblor, hiperreflexia y bocio con o sin soplo. En el <strong>anciano</strong> la presentacion suele ser enganosa y paucisintomatica, el llamado <strong>hipertiroidismo apatico</strong>: fibrilacion auricular, insuficiencia cardiaca, perdida de peso, debilidad y apatia, sin ningun sintoma adrenergico llamativo. Ante una fibrilacion auricular de novo hay que pedir TSH siempre.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El paso diagnostico que ordena todo el tema: la captacion.</strong></p>
${figBlock('Figura 2', 'Tirotoxicosis con captacion alta frente a captacion baja', captacionHtml)}
<p style="margin:0 0 12px;">Confirmada la tirotoxicosis con TSH suprimida y T4 libre o T3 altas, el siguiente paso <strong>no es repetir el perfil</strong> sino averiguar de donde sale la hormona. La <strong>captacion alta</strong> significa que la glandula fabrica de mas, y ahi caben el Graves (difusa), el bocio multinodular toxico (parcheada) y el adenoma toxico (un foco). La <strong>captacion baja</strong> significa que la hormona sale del coloide roto o viene de fuera, y ahi caben las tiroiditis, la sobrecarga de yodo y la tirotoxicosis facticia. Los antitiroideos solo tienen sentido en el primer grupo.</p>
<p style="margin:0 0 12px;">Dos atajos evitan la gammagrafia. Si hay <strong>orbitopatia o mixedema pretibial</strong>, el diagnostico es enfermedad de Graves. Y si la paciente esta <strong>embarazada o lactando</strong>, la gammagrafia esta contraindicada: se recurre a los <strong>anticuerpos antirreceptor de TSH</strong>, que ademas son los que predicen la recidiva y el riesgo fetal.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Las tiroiditis: una enfermedad que se mueve en el tiempo.</strong></p>
${figBlock('Figura 3', 'Fases de la tiroiditis destructiva a lo largo del tiempo', fasesHtml)}
<p style="margin:0 0 12px;">La tiroiditis destructiva no es un estado sino una <strong>secuencia</strong>: tirotoxicosis por vertido, eutiroidismo al agotarse el deposito, hipotiroidismo mientras la glandula se repara y recuperacion. El mismo paciente da tres perfiles distintos en seis meses, y tratar cada uno como si fuera definitivo es el error mas comun. La <strong>subaguda de De Quervain</strong> es dolorosa, sigue a un cuadro virico y cursa con velocidad de sedimentacion muy alta; la <strong>silente y la posparto</strong> son indoloras y autoinmunes.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Las tres opciones de tratamiento definitivo, y como se elige.</strong></p>
<p style="margin:0 0 12px;">En el hipertiroidismo verdadero hay tres caminos y ninguno es superior a los otros en todos los escenarios. Los <strong>antitiroideos</strong> ofrecen la posibilidad de remision sin destruir la glandula, con el metimazol como eleccion (salvo primer trimestre de embarazo y crisis tirotoxica, donde se usa propiltiouracilo); el precio es una tasa de recidiva del 50% tras 12 a 18 meses y el riesgo pequeno pero real de agranulocitosis y hepatotoxicidad. El <strong>yodo radiactivo</strong> es definitivo, comodo y seguro, con el hipotiroidismo como resultado esperado y no como complicacion; esta contraindicado en el embarazo y la lactancia y puede empeorar una orbitopatia activa. La <strong>cirugia</strong> es la opcion cuando hay bocio grande o compresivo, sospecha de cancer, hiperparatiroidismo asociado o necesidad de correccion rapida, y exige eutiroidismo previo con tionamida mas yodo.</p>
<p style="margin:0 0 12px;">Sea cual sea el camino, el <strong>betabloqueante</strong> se da desde el primer dia para controlar los sintomas mientras el resto hace efecto. El propranolol es el clasico por su bloqueo adicional de la conversion de T4 en T3; el atenolol y el bisoprolol son mas comodos. Si estan contraindicados, se usa un antagonista del calcio no dihidropiridinico.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No dar antitiroideos a una tirotoxicosis con captacion baja. No dar <strong>yodo antes que la tionamida</strong> en un paciente que fabrica hormona, porque se le esta dando sustrato. No pedir gammagrafia en el embarazo. No tratar un hipertiroidismo subclinico del joven asintomatico sin antes confirmarlo y buscar la causa. Y no olvidar que la <strong>tormenta tiroidea</strong>, que se desarrolla en el tema de urgencias tiroideas, es un diagnostico clinico: no hay ninguna cifra de hormona que la defina.</p>`;

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
      tituloA: 'Tirotoxicosis leve o subclinica',
      tituloB: 'Tirotoxicosis franca y sus formas atipicas',
      compensada: 'A menudo asintomatica, sobre todo en el hipertiroidismo subclinico. Cuando hay sintomas son leves e inespecificos: nerviosismo, insomnio ligero, palpitaciones ocasionales, sudoracion o intolerancia al calor. El motivo de consulta puede ser una perdida de peso no buscada o una analitica de rutina, y en la mujer joven una alteracion menstrual con oligomenorrea.',
      descompensada: 'Cuadro adrenergico y metabolico completo: temblor fino, taquicardia sinusal o fibrilacion auricular, piel caliente y humeda, retraccion palpebral, perdida de peso pese a buen apetito, hiperdefecacion, debilidad proximal, osteopenia acelerada y, en el Graves, orbitopatia y mixedema pretibial. En el anciano la forma habitual es el hipertiroidismo APATICO: fibrilacion auricular, insuficiencia cardiaca, astenia y perdida de peso sin sintomas adrenergicos. Su extremo es la tormenta tiroidea (ver el tema de urgencias tiroideas).'
    },
    laboratorio: [
      { prueba: 'TSH', utilidad: 'Prueba inicial. Una TSH normal practicamente descarta la tirotoxicosis, salvo en el excepcional adenoma hipofisario secretor de TSH y en la resistencia a hormonas tiroideas.' },
      { prueba: 'T4 libre y T3 total o libre', utilidad: 'Con TSH suprimida, definen la gravedad y la forma. Si la T4 libre es normal y la T3 esta alta se habla de toxicosis por T3, tipica del adenoma toxico y de las fases iniciales del Graves. Si ambas son normales, es hipertiroidismo subclinico.' },
      { prueba: 'Anticuerpos antirreceptor de TSH (TRAb o TSI)', utilidad: 'Diagnostican la enfermedad de Graves con sensibilidad y especificidad altas. Son la alternativa a la gammagrafia en el embarazo, predicen la recidiva al retirar el antitiroideo y, en la gestante, el riesgo de hipertiroidismo fetal y neonatal (se miden hacia las semanas 18 a 22).' },
      { prueba: 'Anticuerpos antitiroperoxidasa', utilidad: 'Positivos en el Graves y en las tiroiditis autoinmunes silente y posparto. No distinguen entre ambas y no sustituyen a los antirreceptor de TSH.' },
      { prueba: 'Tiroglobulina', utilidad: 'Alta en las tiroiditis destructivas (el coloide se vierte a la sangre) y BAJA o indetectable en la tirotoxicosis facticia por hormona exogena. Es la prueba que desenmascara la ingesta oculta de levotiroxina.' },
      { prueba: 'Velocidad de sedimentacion y proteina C reactiva', utilidad: 'Muy elevadas en la tiroiditis subaguda de De Quervain, que suele cursar con VSG por encima de 50 mm/h. Normales en la tiroiditis silente y en el Graves.' },
      { prueba: 'Hemograma con formula y perfil hepatico', utilidad: 'Obligados ANTES de iniciar una tionamida, como referencia: la tirotoxicosis por si misma produce leucopenia leve y elevacion de fosfatasa alcalina y transaminasas, y sin basal no se puede atribuir despues al farmaco.' },
      { prueba: 'Yoduria y anamnesis de exposicion al yodo', utilidad: 'Contraste yodado, amiodarona, povidona yodada o suplementos explican una tirotoxicosis con captacion baja. La sobrecarga de yodo tambien invalida temporalmente la gammagrafia y contraindica el yodo radiactivo durante semanas o meses.' }
    ],
    no_invasivos: [
      { metodo: 'Captacion de yodo radiactivo con gammagrafia', interpretacion: 'Prueba que ordena el diagnostico diferencial. Captacion ALTA difusa (Graves), parcheada (bocio multinodular toxico) o en foco unico (adenoma toxico). Captacion BAJA: tiroiditis destructiva, sobrecarga de yodo, tirotoxicosis facticia o estruma ovarico.', cutoff: 'CONTRAINDICADA en embarazo y lactancia. Poco valorable tras exposicion reciente a yodo' },
      { metodo: 'Ecografia tiroidea con Doppler', interpretacion: 'Alternativa cuando la gammagrafia no es posible. En el Graves hay glandula difusamente aumentada, hipoecogenica e hipervascularizada; en la tiroiditis destructiva, hipoecogenicidad parcheada SIN hipervascularizacion. Tambien distingue los dos tipos de tirotoxicosis por amiodarona.', cutoff: 'Sin umbrales numericos; el criterio es la vascularizacion' },
      { metodo: 'Electrocardiograma', interpretacion: 'Taquicardia sinusal como norma. La fibrilacion auricular aparece en el 10 al 15% de los pacientes y en una proporcion mucho mayor de los mayores de 60 anos: ante fibrilacion auricular de nueva aparicion, pedir TSH siempre.', cutoff: 'Sin umbrales; el hallazgo relevante es la fibrilacion auricular' },
      { metodo: 'Puntuacion de actividad clinica de la orbitopatia (CAS)', interpretacion: 'Suma de 7 items (dolor retrobulbar, dolor con el movimiento, enrojecimiento palpebral, enrojecimiento conjuntival, edema palpebral, quemosis e inflamacion de la caruncula). Separa la enfermedad ACTIVA, que responde a inmunosupresion, de la inactiva, que solo mejora con cirugia rehabilitadora.', cutoff: 'CAS de 3 o mas sobre 7 indica enfermedad activa' },
      { metodo: 'Densitometria osea', interpretacion: 'En tirotoxicosis mantenida o hipertiroidismo subclinico persistente de la mujer posmenopausica y del mayor de 65 anos, por la perdida osea acelerada de predominio cortical.', cutoff: 'Criterios densitometricos habituales de la OMS' }
    ],
    imagen: [
      { modalidad: 'Tomografia o resonancia de orbitas', hallazgos: 'En la orbitopatia moderada a grave: engrosamiento de los vientres musculares con respeto de las inserciones tendinosas (a diferencia de la miositis orbitaria), aumento de la grasa orbitaria y, en la forma grave, apinamiento en el apex con riesgo de neuropatia optica compresiva.' },
      { modalidad: 'Ecografia cervical', hallazgos: 'Valora el tamano del bocio, la presencia de nodulos que obliguen a estudio propio y la extension subesternal. Es la prueba de eleccion si se plantea cirugia.' },
      { modalidad: 'Tomografia cervicotoracica', hallazgos: 'Solo ante bocio con sospecha de compresion o de extension retroesternal. Ojo: el contraste yodado puede desencadenar una tirotoxicosis por sobrecarga de yodo e impide el yodo radiactivo durante semanas.' },
      { modalidad: 'Gammagrafia de cuerpo entero', hallazgos: 'Excepcional. Se plantea ante tirotoxicosis con captacion cervical baja y sospecha de estruma ovarico o de metastasis funcionantes de un carcinoma diferenciado de tiroides.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La clasificacion util no es por gravedad sino por <strong>mecanismo</strong>, porque de el depende el tratamiento. Primero se separa la tirotoxicosis <strong>con hipertiroidismo</strong> (la glandula fabrica de mas: captacion alta) de la tirotoxicosis <strong>sin hipertiroidismo</strong> (la hormona sale del coloide roto o viene de fuera: captacion baja). Dentro de la primera se distingue el origen autoinmune del autonomo nodular. Y de forma transversal se clasifica por gravedad bioquimica en subclinica o franca.`,
    escalas: [
      { nombre: 'Clasificacion por captacion', componentes: 'Captacion de yodo radiactivo con gammagrafia, o ecografia Doppler cuando aquella no es posible.', formula: 'Captacion alta frente a captacion baja.', interpretacion: 'Captacion alta: Graves, bocio multinodular toxico, adenoma toxico. Captacion baja: tiroiditis destructivas, sobrecarga de yodo, tirotoxicosis facticia, estruma ovarico. Los antitiroideos solo tienen sentido en el primer grupo.' },
      { nombre: 'Clasificacion por gravedad bioquimica', componentes: 'TSH, T4 libre y T3.', formula: 'Subclinica: TSH suprimida con T4 libre y T3 normales. Franca: TSH suprimida con T4 libre o T3 altas.', interpretacion: 'La subclinica se subdivide segun la TSH sea menor de 0.1 mUI/L (grado 2, mas riesgo) o este entre 0.1 y el limite inferior (grado 1). El grado 2 en mayores de 65 anos se trata.' },
      { nombre: 'Puntuacion de actividad clinica de la orbitopatia (CAS)', componentes: 'Dolor retrobulbar espontaneo, dolor con el movimiento ocular, enrojecimiento palpebral, enrojecimiento conjuntival, edema palpebral, quemosis e inflamacion de la caruncula.', formula: 'Un punto por item presente, sobre 7.', interpretacion: 'CAS de 3 o mas: orbitopatia ACTIVA, subsidiaria de inmunosupresion (glucocorticoide intravenoso, teprotumumab, tocilizumab, rituximab). CAS menor de 3: inactiva, solo medidas locales y cirugia rehabilitadora si hay secuelas.' },
      { nombre: 'Gravedad de la orbitopatia segun EUGOGO', componentes: 'Retraccion palpebral, afectacion de partes blandas, proptosis, diplopia, exposicion corneal y funcion del nervio optico.', formula: 'Clasificacion en leve, moderada a grave y con riesgo de perdida visual.', interpretacion: 'Leve: medidas locales, selenio y abandono del tabaco. Moderada a grave y activa: inmunosupresion. Con riesgo de perdida visual (neuropatia optica compresiva o ulcera corneal): urgencia, glucocorticoide intravenoso a dosis alta y descompresion orbitaria si no responde en 1 a 2 semanas.' },
      { nombre: 'Tirotoxicosis por amiodarona: tipos 1 y 2', componentes: 'Antecedente de bocio o de enfermedad tiroidea previa, ecografia Doppler, interleucina 6 y respuesta al tratamiento.', formula: 'Tipo 1: hipertiroidismo verdadero inducido por el yodo (Jod-Basedow) sobre glandula anormal, con vascularizacion conservada o aumentada. Tipo 2: tiroiditis destructiva por toxicidad directa del farmaco, sobre glandula normal y sin vascularizacion.', interpretacion: 'Tipo 1: tionamida a dosis altas, con perclorato si se dispone. Tipo 2: glucocorticoide. Las formas mixtas son frecuentes y se tratan con ambos. La decision de retirar la amiodarona se toma con cardiologia, porque no siempre es posible ni util a corto plazo.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Enfermedad de Graves',
      color: '#b4552f',
      definicion: 'Enfermedad autoinmune en la que anticuerpos estimulantes del receptor de TSH provocan hiperfuncion e hiperplasia tiroideas difusas. Es la causa mas frecuente de hipertiroidismo, y la unica que ademas afecta a la orbita y a la piel.',
      fisiopatologia: 'Los anticuerpos antirreceptor de TSH se comportan como agonistas: se unen al receptor y lo activan de forma continua, sin la retroalimentacion que frenaria a la TSH. El resultado es sintesis y secrecion aumentadas con crecimiento difuso de la glandula. El mismo receptor se expresa en el fibroblasto orbitario y en el dermico pretibial, donde su estimulacion, con la participacion del receptor del factor de crecimiento similar a la insulina tipo 1, produce secrecion de glucosaminoglucanos y adipogenesis: eso explica la orbitopatia y el mixedema pretibial. Ver la Figura 1 de Definicion.',
      epidemiologia: 'Del 60 al 80% de todas las tirotoxicosis. Incidencia de 20 a 50 casos por 100000 habitantes y ano, con predominio femenino de 5 a 10 a 1 y pico entre los 30 y los 60 anos. La orbitopatia clinicamente evidente aparece en el 25 al 30% y es grave en menos del 5%.',
      factores_riesgo: ['Sexo femenino y antecedente familiar de enfermedad tiroidea autoinmune', 'Tabaquismo, sobre todo para la orbitopatia (multiplica el riesgo y empeora la respuesta al tratamiento)', 'Otras enfermedades autoinmunes: diabetes tipo 1, celiaquia, vitiligo, artritis reumatoide', 'Posparto y periodos de estres inmunologico', 'Sobrecarga de yodo en zonas previamente deficitarias', 'Inhibidores de puntos de control inmunitario y reconstitucion inmune tras antirretrovirales', 'Deficit de vitamina D y de selenio (asociacion debil)', 'Polimorfismos de HLA-DR3, CTLA-4 y PTPN22'],
      clinica: 'Sindrome tirotoxico completo con bocio difuso, elastico y a veces con soplo o thrill. Es especifica de esta enfermedad la triada extratiroidea: orbitopatia (proptosis, retraccion palpebral, diplopia), mixedema pretibial (placas induradas de piel en cascara de naranja en cara anterior de las piernas) y acropaquia tiroidea, que es rara.',
      criterios_dx: 'Tirotoxicosis (TSH suprimida con T4 libre o T3 altas) mas cualquiera de: anticuerpos antirreceptor de TSH positivos, captacion difusamente aumentada en la gammagrafia, u orbitopatia o mixedema pretibial caracteristicos. Con orbitopatia tipica, la gammagrafia es innecesaria.',
      laboratorio: 'TSH, T4 libre, T3, anticuerpos antirreceptor de TSH y antitiroperoxidasa. Hemograma con formula y perfil hepatico basales ANTES de iniciar tionamida.',
      imagen: 'Gammagrafia con captacion difusa homogenea, o ecografia Doppler con glandula hipoecogenica e hipervascularizada. Tomografia o resonancia de orbitas si hay orbitopatia moderada a grave.',
      complementarios: 'Electrocardiograma y valoracion de fibrilacion auricular. Densitometria si la tirotoxicosis ha sido prolongada. Valoracion oftalmologica si hay cualquier sintoma ocular.',
      dx_diferencial: 'Bocio multinodular toxico y adenoma toxico (captacion parcheada o focal, sin anticuerpos), tiroiditis silente y posparto (captacion baja), tirotoxicosis facticia (tiroglobulina baja), tirotoxicosis gestacional transitoria por gonadotropina corionica y, muy raramente, adenoma hipofisario secretor de TSH.',
      tx_medico: 'Betabloqueante desde el primer dia (propranolol 10 a 40 mg cada 6 a 8 horas, o atenolol o bisoprolol una vez al dia) para controlar los sintomas mientras el resto hace efecto. Abandono del tabaco, que es la medida modificable de mayor impacto sobre la orbitopatia. Anticonceptivo eficaz mientras se ajusta el tratamiento.',
      tx_farmacologico: 'METIMAZOL como antitiroideo de eleccion (5 a 30 mg al dia en dosis unica), salvo en el primer trimestre del embarazo y en la crisis tirotoxica, donde se usa propiltiouracilo. Duracion de 12 a 18 meses con retirada guiada por los anticuerpos antirreceptor de TSH; si siguen positivos, la recidiva es muy probable. Se puede pautar en dosis descendente (lo habitual) o en bloqueo con sustitucion, que no mejora resultados y expone a mas farmaco. Alternativas definitivas: yodo radiactivo (contraindicado en embarazo y lactancia, puede empeorar la orbitopatia activa, se cubre con glucocorticoide si hay factores de riesgo) o tiroidectomia total.',
      tx_intervencionista: 'Tiroidectomia total si hay bocio grande o compresivo, nodulo sospechoso, hiperparatiroidismo asociado, orbitopatia moderada a grave activa, deseo gestacional proximo o preferencia del paciente. Exige eutiroidismo previo con tionamida y solucion yodada saturada en los 10 dias anteriores para reducir la vascularizacion.',
      criterios_uci: 'Tormenta tiroidea (ver el tema de urgencias tiroideas), insuficiencia cardiaca de alto gasto o fibrilacion auricular con inestabilidad.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Poco frecuente salvo crisis o complicacion cardiaca. Si el paciente ingresa por otro motivo, mantener el antitiroideo y el betabloqueante y evitar la exposicion a contrastes yodados si esta previsto yodo radiactivo.',
      seguimiento_ambulatorio: 'Perfil tiroideo a las 4 a 6 semanas de iniciar la tionamida y despues cada 2 a 3 meses. La TSH puede permanecer suprimida meses tras normalizarse la T4: no titular por TSH al principio. Anticuerpos antirreceptor de TSH antes de retirar el tratamiento. Tras yodo radiactivo o cirugia, vigilar el hipotiroidismo, que es el resultado esperado.',
      pronostico: 'Remision con antitiroideos en cerca del 50% tras 12 a 18 meses, menor si el bocio es grande, la T3 muy alta, el paciente es joven, fumador o tiene anticuerpos muy elevados. Tras yodo radiactivo o cirugia, la enfermedad se controla pero deja hipotiroidismo permanente en la mayoria.',
      algoritmo: ['Confirmar tirotoxicosis: TSH suprimida con T4 libre o T3 altas', 'Buscar orbitopatia o mixedema pretibial: si estan, el diagnostico es Graves', 'Si no, anticuerpos antirreceptor de TSH y, si hacen falta, gammagrafia', 'Betabloqueante desde el primer dia', 'Hemograma y perfil hepatico basales antes de la tionamida', 'Metimazol como eleccion; propiltiouracilo en el primer trimestre y en la crisis', 'Advertir por escrito: fiebre u odinofagia obligan a suspender y hacer hemograma urgente', 'Perfil a las 4 a 6 semanas, titulando por T4 libre y no por TSH', 'A los 12 a 18 meses, medir anticuerpos y decidir retirada o tratamiento definitivo']
    },
    {
      nombre: 'Bocio multinodular toxico y adenoma toxico',
      color: '#8a6a1f',
      definicion: 'Hipertiroidismo por autonomia funcional de uno o varios nodulos, que producen hormona al margen del control de la TSH. Es la segunda causa de hipertiroidismo y la primera en el anciano y en las zonas con deficit de yodo.',
      fisiopatologia: 'Con el tiempo, algunos tirocitos adquieren mutaciones activadoras somaticas, sobre todo del receptor de TSH y de la subunidad alfa de la proteina G estimuladora, que los mantienen activados de forma constitutiva. Esos clones crecen y funcionan sin estimulo, suprimen la TSH y el tejido sano circundante queda inhibido y frio en la gammagrafia. El proceso es lento, de anos, y por eso el hipertiroidismo suele ser leve y de larga evolucion.',
      epidemiologia: 'Del 15 al 30% de las tirotoxicosis en zonas con yodo suficiente, y proporcion mayor donde hubo deficit. Predomina por encima de los 50 a 60 anos. El adenoma toxico aparece en pacientes mas jovenes y suele medir mas de 3 cm cuando produce tirotoxicosis.',
      factores_riesgo: ['Edad avanzada', 'Bocio multinodular de larga evolucion', 'Deficit de yodo previo y correccion posterior del aporte', 'Sexo femenino', 'Antecedente familiar de bocio nodular', 'Exposicion a contraste yodado o a amiodarona (desencadena el fenomeno de Jod-Basedow)', 'Radiacion cervical en la infancia'],
      clinica: 'Instauracion lenta y sintomas leves o ausentes. En el anciano predomina la forma apatica: fibrilacion auricular, insuficiencia cardiaca, perdida de peso y debilidad, sin nerviosismo ni temblor llamativos. NUNCA hay orbitopatia ni mixedema pretibial. Puede haber sintomas compresivos si el bocio es grande: disfagia, disnea, disfonia o signo de Pemberton.',
      criterios_dx: 'Tirotoxicosis con captacion aumentada de distribucion parcheada (bocio multinodular toxico) o en un foco unico con supresion del resto de la glandula (adenoma toxico), y anticuerpos antirreceptor de TSH negativos.',
      laboratorio: 'TSH, T4 libre y T3 (la toxicosis por T3 aislada es frecuente en el adenoma toxico). Anticuerpos antirreceptor de TSH negativos, que ayudan a separarlo del Graves.',
      imagen: 'Gammagrafia, que es la prueba clave. Ecografia para caracterizar los nodulos y valorar el tamano del bocio; tomografia si hay sospecha de extension retroesternal o compresion. Un nodulo caliente en la gammagrafia practicamente nunca es maligno y no requiere puncion.',
      complementarios: 'Electrocardiograma y busqueda de fibrilacion auricular, muy frecuente en este grupo. Densitometria en la mujer posmenopausica.',
      dx_diferencial: 'Enfermedad de Graves sobre bocio nodular (Marine-Lenhart), tiroiditis destructiva, tirotoxicosis por amiodarona tipo 1 y bocio multinodular no toxico con TSH baja por otra causa.',
      tx_medico: 'Betabloqueante para el control sintomatico. Evitar la exposicion a yodo (contrastes, amiodarona, antisepticos), que puede desencadenar o agravar la tirotoxicosis en una glandula autonoma.',
      tx_farmacologico: 'Los antitiroideos controlan pero NO curan: la autonomia no remite, de modo que al retirarlos la tirotoxicosis reaparece siempre. Su papel es preparar al paciente para el tratamiento definitivo o mantener a quien no es candidato a el. El tratamiento de eleccion es el YODO RADIACTIVO, que ademas reduce el tamano del bocio; la dosis suele ser mayor que en el Graves.',
      tx_intervencionista: 'Tiroidectomia (total en el bocio multinodular, hemitiroidectomia en el adenoma toxico) si el bocio es grande o compresivo, si hay sospecha de malignidad en algun nodulo o si se desea correccion rapida. Alternativas percutaneas en casos seleccionados: ablacion por radiofrecuencia o etanol para el adenoma toxico.',
      criterios_uci: 'Excepcional: tormenta tiroidea desencadenada por contraste yodado o por una enfermedad aguda.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Precaucion mayuscula con el contraste yodado en el bocio nodular del anciano: puede precipitar una tirotoxicosis semanas despues. Si es imprescindible, valorar profilaxis con tionamida en el paciente de riesgo alto.',
      seguimiento_ambulatorio: 'Perfil tiroideo a las 6 a 12 semanas del yodo radiactivo y despues periodico: el hipotiroidismo posterior es menos frecuente que en el Graves pero puede aparecer anos despues. Si se opero, sustitucion y control anual.',
      pronostico: 'Excelente con tratamiento definitivo. Sin el, la tirotoxicosis persiste y progresa, con riesgo acumulado de fibrilacion auricular y de perdida osea.',
      algoritmo: ['Tirotoxicosis con anticuerpos antirreceptor de TSH negativos y sin orbitopatia', 'Gammagrafia: captacion parcheada o foco unico con resto suprimido', 'Betabloqueante para los sintomas', 'Ecografia para valorar nodulos y tamano; tomografia si hay sospecha de compresion', 'Tionamida solo como puente, porque la autonomia no remite', 'Yodo radiactivo como tratamiento de eleccion', 'Cirugia si el bocio es grande, compresivo o sospechoso', 'Evitar contrastes yodados y amiodarona', 'Control periodico de TSH tras el tratamiento definitivo']
    },
    {
      nombre: 'Tiroiditis subaguda, silente y posparto',
      color: '#3d5a73',
      definicion: 'Grupo de tiroiditis destructivas que producen tirotoxicosis por vertido de hormona preformada, sin hipertiroidismo. Se caracterizan por captacion BAJA y por recorrer una secuencia temporal de tirotoxicosis, eutiroidismo, hipotiroidismo y recuperacion.',
      fisiopatologia: 'La inflamacion rompe el foliculo y libera a la sangre la hormona almacenada en el coloide. Como no hay sintesis nueva, el tirocito no capta yodo y la gammagrafia sale fria. Al agotarse el deposito, el paciente pasa por el eutiroidismo camino del hipotiroidismo, que dura hasta que la glandula se repara. En la subaguda de De Quervain el desencadenante es probablemente virico y hay inflamacion granulomatosa con celulas gigantes; en la silente y la posparto el mecanismo es autoinmune linfocitario. Ver la Figura 3 de Definicion.',
      epidemiologia: 'La subaguda supone hasta un 5% de la patologia tiroidea y predomina en mujeres de 30 a 50 anos, con estacionalidad de verano y otono. La tiroiditis posparto afecta al 5 al 10% de las mujeres en el primer ano tras el parto, y hasta al 25% de las que tienen diabetes tipo 1 o anticuerpos antitiroperoxidasa previos.',
      factores_riesgo: ['Infeccion virica de vias respiratorias altas en las semanas previas (subaguda)', 'HLA-B35 (subaguda)', 'Posparto, sobre todo en los primeros 6 meses', 'Anticuerpos antitiroperoxidasa positivos antes del embarazo', 'Diabetes tipo 1 y otras enfermedades autoinmunes', 'Antecedente de tiroiditis posparto en gestaciones previas (recurre en mas del 40%)', 'Farmacos: interferon alfa, litio, amiodarona, inhibidores de tirosina cinasa e inhibidores de puntos de control inmunitario'],
      clinica: 'La SUBAGUDA cursa con dolor cervical anterior intenso irradiado a mandibula u oido, tiroides muy dolorosa a la palpacion, fiebre y malestar, precedidos de un cuadro virico; la tirotoxicosis es moderada. La SILENTE y la POSPARTO son indoloras y a menudo se detectan por sintomas leves de tirotoxicosis o directamente en la fase hipotiroidea, con astenia y bajo animo que se confunden con depresion posparto.',
      criterios_dx: 'Tirotoxicosis con captacion BAJA. En la subaguda, dolor tiroideo con velocidad de sedimentacion muy elevada. En la silente y la posparto, ausencia de dolor, anticuerpos antitiroperoxidasa a menudo positivos y contexto temporal (primer ano tras el parto).',
      laboratorio: 'TSH, T4 libre y T3. Velocidad de sedimentacion y proteina C reactiva muy altas en la subaguda y normales en las demas. Tiroglobulina alta (util para excluir la tirotoxicosis facticia). Anticuerpos antirreceptor de TSH negativos.',
      imagen: 'La gammagrafia muestra captacion baja o ausente, y es la prueba que evita el error de tratar con antitiroideos. La ecografia muestra areas hipoecogenicas parcheadas SIN hipervascularizacion, a diferencia del Graves.',
      complementarios: 'En la mujer con tiroiditis posparto, planificar el seguimiento del siguiente embarazo: recurre en mas del 40% de los casos.',
      dx_diferencial: 'Enfermedad de Graves (captacion alta, anticuerpos positivos), tiroiditis supurativa aguda (fiebre alta, absceso, leucocitosis con neutrofilia), hemorragia intranodular (dolor brusco sin tirotoxicosis), faringitis y, en la fase hipotiroidea, tiroiditis de Hashimoto establecida.',
      tx_medico: 'Fase tirotoxica: BETABLOQUEANTE para los sintomas. En la subaguda, antiinflamatorios no esteroideos para el dolor y, si no bastan, prednisona 30 a 40 mg al dia con descenso en 4 a 6 semanas, que alivia el dolor en 24 a 48 horas de forma casi diagnostica. En la silente y la posparto no suele hacer falta nada mas.',
      tx_farmacologico: 'LOS ANTITIROIDEOS NO TIENEN NINGUN PAPEL: no hay sintesis que inhibir. En la fase hipotiroidea, levotiroxina si hay sintomas o si la TSH es muy alta, con intento de retirada a los 6 a 12 meses para comprobar si la funcion se ha recuperado.',
      tx_intervencionista: 'Ninguno.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Rara vez ingresan. Si lo hacen por dolor intenso, la respuesta rapida al glucocorticoide apoya el diagnostico de subaguda.',
      seguimiento_ambulatorio: 'Perfil tiroideo cada 4 a 8 semanas durante 6 meses para seguir la secuencia de fases, y despues TSH anual: hasta un 20 a 30% queda con hipotiroidismo definitivo, proporcion mayor en la posparto con anticuerpos positivos.',
      pronostico: 'Bueno: la mayoria recupera la funcion tiroidea normal en 6 a 12 meses. La subaguda recidiva en menos del 5%; la posparto recurre en mas del 40% de los siguientes embarazos.',
      algoritmo: ['Tirotoxicosis: pedir captacion o ecografia Doppler', 'Captacion baja sin exposicion a yodo: tiroiditis destructiva', 'Dolor cervical con VSG muy alta: subaguda de De Quervain', 'Indolora en el primer ano tras el parto: tiroiditis posparto', 'Tratar la fase tirotoxica solo con betabloqueante', 'Antiinflamatorios o prednisona si hay dolor', 'NO dar antitiroideos en ningun caso', 'Seguir el perfil cada 4 a 8 semanas por las fases siguientes', 'Levotiroxina en la fase hipotiroidea si hay sintomas, con retirada a los 6 a 12 meses']
    },
    {
      nombre: 'Tirotoxicosis inducida por amiodarona',
      color: '#6b4a2e',
      definicion: 'Disfuncion tiroidea por un farmaco que contiene un 37% de yodo en peso y se acumula en el tejido graso durante meses. Puede aparecer en cualquier momento del tratamiento e incluso mucho despues de suspenderlo, y existe en dos formas de mecanismo opuesto que se tratan de forma distinta.',
      fisiopatologia: 'El TIPO 1 es un hipertiroidismo verdadero: la sobrecarga de yodo permite que una glandula anormal (bocio nodular latente o Graves subclinico) fabrique hormona sin freno, el fenomeno de Jod-Basedow. El TIPO 2 es una tiroiditis destructiva por toxicidad directa de la amiodarona sobre el tirocito, con vertido de hormona preformada sobre una glandula previamente normal. Las formas mixtas son frecuentes. Ademas, la amiodarona inhibe la desyodasa tipo 1, lo que eleva la T4 y la T3 reversa incluso en pacientes eutiroideos.',
      epidemiologia: 'Disfuncion tiroidea en el 15 al 20% de los tratados. La tirotoxicosis predomina en areas con aporte de yodo suficiente o bajo y el hipotiroidismo en las de aporte alto. El tipo 2 es hoy mas frecuente que el tipo 1 en la mayoria de las series.',
      factores_riesgo: ['Bocio nodular o enfermedad tiroidea autoinmune previa (predisponen al tipo 1)', 'Glandula previamente normal (tipo 2)', 'Zona geografica con aporte de yodo bajo (tipo 1)', 'Dosis acumulada y duracion del tratamiento', 'Sexo masculino (a diferencia del resto de la patologia tiroidea)', 'Antecedente familiar de enfermedad tiroidea', 'Suspension reciente del farmaco, que no protege por su larga vida media'],
      clinica: 'La tirotoxicosis puede ser sutil porque la amiodarona bloquea parte de los efectos adrenergicos y de la conversion periferica. Las pistas mas utiles son la reaparicion o el empeoramiento de la arritmia que motivo el tratamiento, la perdida de peso y el deterioro funcional. Puede desencadenar angina, insuficiencia cardiaca o tormenta tiroidea en cardiopatas.',
      criterios_dx: 'Tirotoxicosis en un paciente tratado con amiodarona en los ultimos meses. La distincion entre tipos se apoya en el antecedente de enfermedad tiroidea, la ecografia Doppler (vascularizacion conservada o aumentada en el tipo 1, ausente en el tipo 2) y la respuesta al tratamiento. La captacion suele estar baja en ambos por la sobrecarga de yodo, lo que le resta utilidad.',
      laboratorio: 'TSH, T4 libre y T3. Anticuerpos antirreceptor de TSH (positivos apoyan tipo 1 sobre Graves latente). La interleucina 6 se ha propuesto como marcador del tipo 2, con utilidad limitada en la practica.',
      imagen: 'Ecografia con Doppler, que es la prueba mas util a pie de cama. Gammagrafia poco valorable por la sobrecarga de yodo, aunque una captacion conservada o alta pese al yodo apoya el tipo 1.',
      complementarios: 'Valoracion cardiologica conjunta e imprescindible: la decision de retirar o mantener la amiodarona depende de si existe alternativa antiarritmica segura, y su larga vida media hace que retirarla no mejore el cuadro a corto plazo.',
      dx_diferencial: 'Enfermedad de Graves coincidente, tiroiditis silente, tirotoxicosis por contraste yodado y elevacion aislada de T4 con TSH normal por inhibicion de la desyodasa, que NO es tirotoxicosis y no se trata.',
      tx_medico: 'Betabloqueante segun tolerancia hemodinamica. Decision compartida con cardiologia sobre mantener o retirar la amiodarona: retirarla no resuelve el cuadro a corto plazo por su vida media de 50 a 100 dias.',
      tx_farmacologico: 'TIPO 1: tionamida a dosis altas (metimazol 30 a 40 mg al dia), anadiendo perclorato potasico durante 2 a 6 semanas si se dispone de el, para bloquear la captacion de yodo. TIPO 2: PREDNISONA 30 a 40 mg al dia con descenso lento en 2 a 3 meses, con respuesta a menudo espectacular en 1 a 2 semanas. FORMAS MIXTAS o duda diagnostica: ambos a la vez, que es la conducta pragmatica mas habitual.',
      tx_intervencionista: 'Tiroidectomia total si el cuadro es grave, refractario o el paciente no tolera la demora, sobre todo si la amiodarona es imprescindible. Es una cirugia de riesgo mayor por la cardiopatia de base, y aun asi puede ser la opcion mas segura. El yodo radiactivo casi nunca es viable por la captacion baja.',
      criterios_uci: 'Tormenta tiroidea, arritmia mal tolerada o insuficiencia cardiaca descompensada.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Monitorizacion cardiaca. Vigilar la respuesta al glucocorticoide en la primera o segunda semana, que orienta retrospectivamente al tipo 2.',
      seguimiento_ambulatorio: 'Perfil tiroideo cada 3 a 6 meses en todo paciente con amiodarona, y basal antes de iniciarla. Tras resolver el cuadro, seguimiento prolongado por la persistencia del farmaco en el organismo.',
      pronostico: 'El tipo 2 suele resolverse en 1 a 3 meses y puede dejar hipotiroidismo. El tipo 1 es mas rebelde y a menudo exige tratamiento definitivo. La tirotoxicosis por amiodarona aumenta la morbimortalidad cardiovascular en el cardiopata, de ahi la necesidad de resolverla pronto.',
      algoritmo: ['Tirotoxicosis en paciente con amiodarona actual o reciente', 'Ecografia Doppler y anticuerpos antirreceptor de TSH', 'Vascularizacion conservada o aumentada y glandula anormal: tipo 1', 'Glandula normal sin vascularizacion: tipo 2', 'Tipo 1: metimazol a dosis altas, con perclorato si se dispone', 'Tipo 2: prednisona 30 a 40 mg al dia con descenso lento', 'Duda o forma mixta: ambos tratamientos a la vez', 'Decidir con cardiologia si se retira la amiodarona', 'Tiroidectomia si es grave o refractaria']
    },
    {
      nombre: 'Hipertiroidismo subclinico',
      color: '#5b4a86',
      definicion: 'TSH por debajo del limite inferior de referencia con T4 libre y T3 normales, confirmada en una segunda determinacion. Importa poco por los sintomas y mucho por dos consecuencias: la fibrilacion auricular y la perdida de masa osea.',
      fisiopatologia: 'Un exceso hormonal pequeno pero mantenido basta para suprimir la TSH y para producir efectos tisulares: acorta el periodo refractario auricular y favorece la reentrada, y acelera el remodelado oseo con predominio de la resorcion, sobre todo en hueso cortical. El riesgo es proporcional al grado de supresion y a la edad.',
      epidemiologia: 'Prevalencia del 0.7 al 3% de la poblacion, mayor en el anciano y en zonas con deficit de yodo. La causa exogena (levotiroxina en dosis excesiva) es mas frecuente que la endogena. El riesgo relativo de fibrilacion auricular en mayores de 60 anos con TSH por debajo de 0.1 mUI/L se multiplica aproximadamente por tres.',
      factores_riesgo: ['Bocio multinodular y adenoma toxico en el anciano', 'Enfermedad de Graves en fase inicial o en remision parcial', 'Tratamiento con levotiroxina en dosis excesiva (causa exogena, la mas frecuente)', 'Supresion deliberada de TSH en el carcinoma diferenciado de tiroides', 'Edad mayor de 65 anos', 'Osteoporosis o factores de riesgo de fractura', 'Cardiopatia estructural o antecedente de fibrilacion auricular', 'Menopausia'],
      clinica: 'Habitualmente asintomatico. Puede haber palpitaciones, ansiedad, insomnio, intolerancia al calor o disminucion de la tolerancia al ejercicio. En el anciano, la primera manifestacion puede ser directamente una fibrilacion auricular o una fractura.',
      criterios_dx: 'TSH por debajo del rango con T4 libre y T3 normales en DOS determinaciones separadas 3 a 6 meses, tras excluir causas no tiroideas de TSH baja (enfermedad aguda, glucocorticoides, dopamina, embarazo del primer trimestre, hipotiroidismo central).',
      laboratorio: 'TSH, T4 libre y T3. Anticuerpos antirreceptor de TSH si se sospecha Graves. Revisar siempre si el paciente toma levotiroxina, porque es la causa mas frecuente.',
      imagen: 'Gammagrafia o ecografia solo si se confirma la persistencia y hace falta identificar la causa antes de tratar.',
      complementarios: 'Electrocardiograma y, si hay palpitaciones intermitentes, registro Holter. Densitometria osea en la mujer posmenopausica y en el mayor de 65 anos.',
      dx_diferencial: 'Sobretratamiento con levotiroxina, primer trimestre del embarazo (supresion fisiologica por gonadotropina corionica), enfermedad aguda grave, glucocorticoides y dopamina, hipotiroidismo central e interferencia del ensayo.',
      tx_medico: 'Si la causa es exogena, ajustar la dosis de levotiroxina, que resuelve el problema sin mas. Si es endogena y no se trata, control periodico con TSH y vigilancia cardiaca y osea.',
      tx_farmacologico: 'Se TRATA cuando la TSH es menor de 0.1 mUI/L y el paciente tiene 65 anos o mas, o cuando hay cardiopatia, fibrilacion auricular, osteoporosis o menopausia sin tratamiento hormonal, o sintomas atribuibles. Con TSH entre 0.1 y el limite inferior, en general se observa, salvo en mayores de 65 anos con cardiopatia. El tratamiento es el de la causa: yodo radiactivo o tionamida en el bocio nodular toxico y el Graves.',
      tx_intervencionista: 'Segun la causa; las mismas opciones que en el hipertiroidismo franco.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ante fibrilacion auricular de nueva aparicion en el hospital, comprobar la TSH: el hipertiroidismo subclinico es una causa reversible y con frecuencia yatrogena.',
      seguimiento_ambulatorio: 'Si no se trata, TSH y T4 libre cada 6 a 12 meses, con densitometria periodica en el grupo de riesgo. Si se trata, seguimiento como el del hipertiroidismo franco.',
      pronostico: 'La progresion a hipertiroidismo franco es de alrededor del 1 al 5% anual, mayor en el bocio nodular. El exceso de riesgo cardiovascular y de fractura se concentra en los mayores de 65 anos con TSH por debajo de 0.1 mUI/L.',
      algoritmo: ['TSH baja con T4 libre y T3 normales: confirmar en 3 a 6 meses', 'Descartar causas no tiroideas y revisar si toma levotiroxina', 'Si es exogena, bajar la dosis y recontrolar', 'Si es endogena y persiste, identificar la causa con gammagrafia', 'TSH menor de 0.1 con 65 anos o mas: tratar', 'Cardiopatia, fibrilacion auricular u osteoporosis: tratar', 'Joven asintomatico con supresion leve: observar', 'Densitometria y electrocardiograma en el grupo de riesgo']
    },
    {
      nombre: 'Orbitopatia de Graves',
      color: '#8c3a34',
      definicion: 'Enfermedad autoinmune de los tejidos orbitarios asociada a la enfermedad de Graves, con inflamacion y expansion de la grasa y de los musculos extraoculares. Es la manifestacion extratiroidea mas frecuente y sigue un curso propio, en parte independiente del control hormonal.',
      fisiopatologia: 'El fibroblasto orbitario expresa el receptor de TSH y el receptor del factor de crecimiento similar a la insulina tipo 1. Los autoanticuerpos los activan y desencadenan produccion de glucosaminoglucanos, que retienen agua, y diferenciacion a adipocito. El resultado es aumento de volumen dentro de una cavidad osea inextensible: de ahi la proptosis, la restriccion de la motilidad y, en el extremo, la compresion del nervio optico en el apex. El curso tiene una fase ACTIVA inflamatoria de 6 a 24 meses y otra INACTIVA de secuelas fibroticas, y solo la primera responde a inmunosupresion.',
      epidemiologia: 'Manifestaciones oculares en el 25 al 50% de los pacientes con Graves, clinicamente relevantes en el 20 al 30% y graves en menos del 5%. El tabaquismo es el factor de riesgo modificable mas potente: multiplica el riesgo y reduce la respuesta al tratamiento.',
      factores_riesgo: ['Tabaquismo (el factor modificable mas importante con diferencia)', 'Anticuerpos antirreceptor de TSH muy elevados', 'Tratamiento con yodo radiactivo sin cobertura con glucocorticoide', 'Hipotiroidismo posterapeutico no corregido o control hormonal inestable', 'Sexo masculino y edad avanzada (se asocian a formas mas graves)', 'Duracion e intensidad de la tirotoxicosis', 'Deficit de selenio en zonas deficitarias'],
      clinica: 'Sensacion de cuerpo extrano, lagrimeo, fotofobia, dolor retrobulbar y con el movimiento ocular, edema y enrojecimiento palpebral y conjuntival, quemosis, proptosis, retraccion palpebral y diplopia, primero intermitente y despues constante. La perdida de agudeza visual, la discromatopsia y el defecto pupilar aferente indican neuropatia optica compresiva y son una URGENCIA.',
      criterios_dx: 'Clinico, en un paciente con enfermedad de Graves actual o pasada. Se completa con la puntuacion de actividad clinica (CAS de 3 o mas sobre 7 indica actividad) y la clasificacion de gravedad de EUGOGO. La imagen se reserva para las formas moderadas a graves y para los casos atipicos o unilaterales.',
      laboratorio: 'Perfil tiroideo y anticuerpos antirreceptor de TSH, que se correlacionan con la actividad y la gravedad y sirven para el seguimiento.',
      imagen: 'Tomografia o resonancia de orbitas: engrosamiento de los vientres musculares con RESPETO de las inserciones tendinosas (a diferencia de la miositis orbitaria idiopatica), aumento de la grasa y apinamiento apical. La resonancia con secuencias potenciadas en T2 ayuda a valorar la actividad inflamatoria.',
      complementarios: 'Valoracion oftalmologica con agudeza visual, vision de colores, presion intraocular, exploracion corneal, campimetria y exoftalmometria. Debe ser precoz y periodica, no solo cuando el paciente se queja.',
      dx_diferencial: 'Miositis orbitaria idiopatica (afecta a las inserciones tendinosas), enfermedad relacionada con IgG4, celulitis orbitaria, fistula carotidocavernosa, tumores orbitarios y linfoma, y orbitopatia unilateral que obliga a descartar causa local.',
      tx_medico: 'Tres medidas para todos: ABANDONO DEL TABACO, restauracion y mantenimiento del eutiroidismo (evitando tanto la tirotoxicosis como el hipotiroidismo) y medidas locales (lagrimas artificiales, gafas de sol, elevacion del cabecero, oclusion nocturna, prismas para la diplopia). Selenio 100 microgramos dos veces al dia durante 6 meses en la forma leve de corta evolucion, en zonas con deficit.',
      tx_farmacologico: 'Enfermedad ACTIVA moderada a grave: metilprednisolona intravenosa en pulsos semanales (dosis acumulada habitual de 4.5 g en 12 semanas, sin superar 8 g por hepatotoxicidad), a menudo combinada con micofenolato. Alternativas y segundas lineas: TEPROTUMUMAB (anticuerpo contra el receptor del factor de crecimiento similar a la insulina tipo 1, que reduce la proptosis de forma marcada, con hipoacusia como efecto adverso relevante), tocilizumab, rituximab o radioterapia orbitaria. Si se administra yodo radiactivo a un paciente con orbitopatia activa o con factores de riesgo, cubrir con prednisona oral.',
      tx_intervencionista: 'Descompresion orbitaria urgente si hay neuropatia optica compresiva que no responde a los pulsos en 1 a 2 semanas, o ante ulcera corneal por exposicion. En la fase INACTIVA, cirugia rehabilitadora en el orden clasico: descompresion, despues cirugia de estrabismo y por ultimo cirugia palpebral.',
      criterios_uci: 'No aplica, pero la neuropatia optica compresiva es una urgencia oftalmologica que exige ingreso para pulsos intravenosos.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Durante los pulsos de metilprednisolona: vigilar glucemia, presion arterial, perfil hepatico y riesgo tromboembolico. Controlar la dosis acumulada.',
      seguimiento_ambulatorio: 'Valoracion conjunta de endocrinologia y oftalmologia, con CAS y exoftalmometria seriados. La cirugia rehabilitadora se difiere hasta al menos 6 meses de inactividad estable.',
      pronostico: 'La mayoria de las formas leves mejora o se estabiliza espontaneamente. Las moderadas a graves dejan secuelas en una proporcion importante pese al tratamiento. Dejar de fumar mejora el pronostico mas que cualquier farmaco.',
      algoritmo: ['Valorar a todo paciente con Graves buscando sintomas y signos oculares', 'Calcular el CAS: 3 o mas sobre 7 indica enfermedad activa', 'Clasificar la gravedad segun EUGOGO', 'Comprobar si hay perdida visual o discromatopsia: si la hay, es una urgencia', 'Insistir en el abandono del tabaco y normalizar la funcion tiroidea', 'Leve: medidas locales, selenio y observacion', 'Moderada a grave y activa: pulsos de metilprednisolona, valorar teprotumumab', 'Riesgo de perdida visual: pulsos a dosis alta y descompresion si no responde', 'Inactiva con secuelas: cirugia rehabilitadora en orden descompresion, estrabismo, parpados']
    },
    {
      nombre: 'Complicaciones del tratamiento antitiroideo',
      color: '#7a1f3d',
      definicion: 'Efectos adversos de las tionamidas, poco frecuentes pero potencialmente mortales. Su prevencion no depende de analiticas de rutina sino de una instruccion clara al paciente sobre que sintoma obliga a suspender el farmaco y acudir de inmediato.',
      fisiopatologia: 'La agranulocitosis es una reaccion idiosincrasica de base inmunologica que destruye los precursores granulociticos; aparece sobre todo en los primeros 3 meses y no se anticipa con hemogramas periodicos, porque puede instaurarse en dias. La hepatotoxicidad del propiltiouracilo es una necrosis hepatocelular idiosincrasica que puede llegar a fallo hepatico agudo, mientras que la del metimazol es tipicamente colestasica y de mejor pronostico. La embriopatia por metimazol se atribuye a la interferencia con la organogenesis en las semanas 6 a 10.',
      epidemiologia: 'Agranulocitosis en el 0.2 al 0.5% de los tratados, con mortalidad no despreciable si se retrasa el diagnostico. Hepatotoxicidad grave por propiltiouracilo en 1 de cada 10000 adultos, con casos de trasplante hepatico y muerte, sobre todo en ninos. Reacciones menores (exantema, prurito, artralgias) en el 5 al 10%.',
      factores_riesgo: ['Primeros 3 meses de tratamiento (la mayoria de los casos de agranulocitosis)', 'Dosis altas de metimazol', 'Edad mayor de 40 anos', 'Propiltiouracilo, para la hepatotoxicidad grave y la vasculitis por anticuerpos anticitoplasma de neutrofilo', 'Metimazol en el primer trimestre del embarazo, para la embriopatia', 'Antecedente de reaccion a otra tionamida (reactividad cruzada frecuente)', 'Haplotipos HLA-B 38:02 y HLA-DRB1 08:03 (poblacion asiatica)'],
      clinica: 'La agranulocitosis se presenta como FIEBRE Y ODINOFAGIA de aparicion brusca, con o sin ulceras orales. La hepatotoxicidad, como ictericia, coluria, nauseas, dolor en hipocondrio derecho o astenia intensa. Las reacciones menores son exantema y prurito. La vasculitis por propiltiouracilo cursa con artralgias, purpura, afectacion renal o hemorragia alveolar.',
      criterios_dx: 'Agranulocitosis: neutrofilos por debajo de 500 por microlitro en un paciente tratado. Hepatotoxicidad: elevacion de transaminasas mas de 3 veces el limite alto o de bilirrubina, con patron hepatocelular en el propiltiouracilo y colestasico en el metimazol.',
      laboratorio: 'Hemograma con formula y perfil hepatico BASALES antes de iniciar, para poder interpretar despues (la propia tirotoxicosis altera ambos). Ante fiebre u odinofagia, hemograma urgente el mismo dia. No se recomienda el hemograma periodico de rutina como estrategia de cribado, porque no anticipa el cuadro.',
      imagen: 'No aplica de forma general; ecografia abdominal si hay sospecha de hepatopatia para descartar otras causas.',
      complementarios: 'Entrega de instrucciones POR ESCRITO al iniciar el tratamiento. Anticuerpos anticitoplasma de neutrofilo si se sospecha vasculitis por propiltiouracilo.',
      dx_diferencial: 'Faringitis virica o bacteriana banal (que es lo que mas se parece a la agranulocitosis y la razon de pedir hemograma siempre), hepatitis viricas y toxicas, colestasis de otra causa y la propia hepatopatia de la tirotoxicosis grave.',
      tx_medico: 'Instruccion explicita: ante FIEBRE U ODINOFAGIA, suspender el farmaco y hacer hemograma urgente el mismo dia. Ante ictericia o coluria, suspender y pedir perfil hepatico. Explicar que estos avisos son mas eficaces que cualquier analitica programada.',
      tx_farmacologico: 'Agranulocitosis: suspension definitiva de la tionamida, ingreso, antibioticos de amplio espectro y factor estimulante de colonias de granulocitos en casos seleccionados. NO se cambia a la otra tionamida por la reactividad cruzada: se pasa a tratamiento definitivo con yodo radiactivo o cirugia, con betabloqueante, yodo, colestiramina y glucocorticoide como puente si hace falta. Hepatotoxicidad: suspender y no reintroducir.',
      tx_intervencionista: 'Tiroidectomia como salida cuando la tionamida ya no es una opcion y el yodo radiactivo no es viable o es demasiado lento.',
      criterios_uci: 'Neutropenia febril con inestabilidad, sepsis o fallo hepatico agudo.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'En la agranulocitosis, aislamiento protector, antibioterapia precoz y recuento diario hasta la recuperacion, que suele producirse en 1 a 3 semanas.',
      seguimiento_ambulatorio: 'Registrar la reaccion en la historia y en la tarjeta del paciente. Toda tionamida queda contraindicada de por vida tras una agranulocitosis o una hepatotoxicidad grave.',
      pronostico: 'La agranulocitosis se recupera en 1 a 3 semanas si se retira el farmaco pronto; el retraso diagnostico es lo que mata. La hepatotoxicidad por propiltiouracilo puede evolucionar a fallo hepatico agudo pese a la suspension.',
      algoritmo: ['Hemograma y perfil hepatico basales antes de iniciar la tionamida', 'Entregar instrucciones por escrito sobre fiebre, odinofagia e ictericia', 'Ante fiebre u odinofagia: suspender y hemograma urgente el mismo dia', 'Neutrofilos por debajo de 500: ingreso, antibioticos y suspension definitiva', 'No cambiar a la otra tionamida: hay reactividad cruzada', 'Pasar a tratamiento definitivo con yodo radiactivo o cirugia', 'Ante ictericia o coluria: suspender y perfil hepatico', 'Registrar la reaccion como contraindicacion permanente']
    },
    {
      nombre: 'Repercusion cardiovascular y osea de la tirotoxicosis',
      color: '#3f6b52',
      definicion: 'Consecuencias sistemicas del exceso hormonal mantenido, que son la principal fuente de morbilidad del tema y las que justifican tratar incluso formas subclinicas. Afectan sobre todo al corazon del anciano y al hueso de la mujer posmenopausica.',
      fisiopatologia: 'La T3 aumenta la expresion de canales ionicos y de receptores beta en el miocito cardiaco: sube la frecuencia y la contractilidad, baja la resistencia periferica y aumenta el gasto, con hipertension sistolica de presion de pulso amplia. El acortamiento del periodo refractario auricular favorece la fibrilacion auricular, y el gasto elevado mantenido puede llevar a una insuficiencia cardiaca de alto gasto, sobre todo si aparece taquimiocardiopatia. En el hueso, la T3 acelera el ciclo de remodelado acortando la fase de formacion respecto de la de resorcion: se pierde masa osea, sobre todo cortical, y aumenta el riesgo de fractura de cadera.',
      epidemiologia: 'Fibrilacion auricular en el 10 al 15% de los pacientes con tirotoxicosis franca, y hasta en el 20 al 25% de los mayores de 60 anos. El hipertiroidismo subclinico con TSH por debajo de 0.1 mUI/L multiplica por cerca de tres el riesgo de fibrilacion auricular y aumenta de forma significativa el de fractura de cadera.',
      factores_riesgo: ['Edad mayor de 60 anos', 'Cardiopatia estructural o hipertension previa', 'Duracion prolongada de la tirotoxicosis, incluida la subclinica', 'TSH por debajo de 0.1 mUI/L', 'Mujer posmenopausica, para el riesgo oseo', 'Tratamiento supresor con levotiroxina no reevaluado', 'Bocio multinodular toxico del anciano', 'Bajo peso, tabaquismo y sedentarismo'],
      clinica: 'Palpitaciones, disnea de esfuerzo, angina en el cardiopata, edemas e intolerancia al ejercicio. La fibrilacion auricular puede ser la primera manifestacion, sobre todo en el hipertiroidismo apatico del anciano. En el hueso, la enfermedad es silente hasta la fractura.',
      criterios_dx: 'Fibrilacion auricular o insuficiencia cardiaca en el contexto de tirotoxicosis confirmada. Osteoporosis por densitometria (puntuacion T de -2.5 o menor) o fractura por fragilidad.',
      laboratorio: 'Perfil tiroideo. Peptido natriuretico si hay disnea (esta elevado en la tirotoxicosis incluso sin insuficiencia cardiaca, lo que resta especificidad). Calcio, fosforo y 25-hidroxivitamina D en la valoracion osea.',
      imagen: 'Ecocardiograma si hay insuficiencia cardiaca, soplo o sospecha de taquimiocardiopatia. Densitometria osea en la mujer posmenopausica y en el mayor de 65 anos con supresion mantenida.',
      complementarios: 'Electrocardiograma y, si se sospecha fibrilacion auricular paroxistica, registro Holter. Calculo del riesgo embolico para decidir la anticoagulacion.',
      dx_diferencial: 'Fibrilacion auricular de otra causa, insuficiencia cardiaca de otro origen, anemia y sepsis como causas alternativas de gasto elevado, y osteoporosis posmenopausica sin relacion con el tiroides.',
      tx_medico: 'Corregir la tirotoxicosis, que es el tratamiento de fondo de ambas complicaciones. Betabloqueante para el control de la frecuencia. Aporte de calcio y vitamina D, ejercicio de carga y abandono del tabaco.',
      tx_farmacologico: 'Fibrilacion auricular: control de frecuencia con betabloqueante (o antagonista del calcio no dihidropiridinico si esta contraindicado) y anticoagulacion segun el riesgo embolico calculado con las escalas habituales, no de forma automatica por el hecho de ser tiroidea. Hasta dos tercios revierten espontaneamente a ritmo sinusal en los 2 a 3 meses siguientes a alcanzar el eutiroidismo, por lo que la cardioversion suele diferirse hasta entonces. Osteoporosis: tratamiento antirresortivo segun los criterios habituales una vez corregido el exceso hormonal.',
      tx_intervencionista: 'Cardioversion o ablacion si la fibrilacion auricular persiste tras el eutiroidismo mantenido. Tratamiento definitivo del hipertiroidismo, preferido al tratamiento medico prolongado en el paciente con cardiopatia.',
      criterios_uci: 'Insuficiencia cardiaca descompensada, fibrilacion auricular con respuesta ventricular rapida mal tolerada o tormenta tiroidea.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Ante fibrilacion auricular de nueva aparicion, pedir TSH siempre. Recordar que en la tirotoxicosis puede haber resistencia relativa a la digoxina y que el control de frecuencia requiere dosis mayores de betabloqueante de lo habitual.',
      seguimiento_ambulatorio: 'Reevaluar el ritmo a los 2 a 3 meses del eutiroidismo antes de decidir cardioversion. Densitometria de control tras corregir la tirotoxicosis, porque parte de la masa osea se recupera.',
      pronostico: 'La funcion cardiaca mejora de forma notable al corregir la tirotoxicosis, y la taquimiocardiopatia suele ser reversible. La masa osea se recupera parcialmente, mas en el joven que en la mujer posmenopausica.',
      algoritmo: ['Ante fibrilacion auricular de nueva aparicion, pedir TSH', 'Confirmar la tirotoxicosis y tratar la causa', 'Betabloqueante para el control de frecuencia', 'Calcular el riesgo embolico y anticoagular segun las escalas habituales', 'Diferir la cardioversion hasta 2 a 3 meses de eutiroidismo', 'Ecocardiograma si hay insuficiencia cardiaca o sospecha de taquimiocardiopatia', 'Densitometria en la mujer posmenopausica y en el mayor de 65 anos', 'Calcio, vitamina D y ejercicio de carga; antirresortivo segun criterios habituales']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La tirotoxicosis llega al hospital de tres formas: como fibrilacion auricular o insuficiencia cardiaca de causa no aclarada, como efecto adverso de un antitiroideo, y como tormenta tiroidea. Las tres se resuelven mejor si se recuerda una regla simple: primero averiguar si la glandula fabrica o solo vierte, y despues elegir el farmaco.',
    parametros: ['Ante fibrilacion auricular de nueva aparicion o insuficiencia cardiaca sin causa clara, pedir TSH', 'Confirmada la tirotoxicosis, determinar el mecanismo antes de tratar: captacion o ecografia Doppler', 'Betabloqueante desde el primer momento salvo contraindicacion hemodinamica', 'No dar tionamida a una tirotoxicosis con captacion baja: no tiene sobre que actuar', 'Si hay que dar yodo, administrarlo SIEMPRE al menos 1 hora despues de la tionamida', 'Hemograma con formula y perfil hepatico basales antes de iniciar una tionamida', 'Ante fiebre u odinofagia en un paciente con tionamida: hemograma urgente el mismo dia y suspension', 'Evitar contrastes yodados en el bocio nodular del anciano y si esta previsto yodo radiactivo', 'Monitorizacion cardiaca en el cardiopata y en toda tirotoxicosis grave', 'Sospechar tormenta tiroidea ante fiebre, alteracion del estado mental o disfuncion organica, y aplicar el tema de urgencias tiroideas'],
    criterios_uci_general: 'Tormenta tiroidea, insuficiencia cardiaca de alto gasto descompensada, fibrilacion auricular con respuesta ventricular rapida mal tolerada, agranulocitosis febril con inestabilidad y fallo hepatico agudo por propiltiouracilo.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'El trasplante hepatico se ha requerido de forma excepcional en el fallo hepatico agudo por propiltiouracilo, motivo por el que ese farmaco se reserva a indicaciones concretas.',
    prevencion: 'Primaria: aporte adecuado de yodo sin excesos, y cautela con la sobrecarga yodada (contrastes, amiodarona, antisepticos, suplementos) en el bocio nodular del anciano, donde puede desencadenar tirotoxicosis. Secundaria: perfil tiroideo basal y cada 3 a 6 meses en todo paciente con amiodarona; TSH ante fibrilacion auricular de nueva aparicion, perdida de peso no explicada u osteoporosis; revision periodica de la dosis de levotiroxina para evitar la supresion yatrogena. Terciaria: abandono del tabaco y cobertura con glucocorticoide al dar yodo radiactivo en pacientes con orbitopatia o factores de riesgo, e instruccion escrita sobre los sintomas de alarma de las tionamidas.'
  }
};

export const compCites = {
  'Enfermedad de Graves': [1, 2, 3, 19],
  'Bocio multinodular toxico y adenoma toxico': [1, 4],
  'Tiroiditis subaguda, silente y posparto': [8, 9],
  'Tirotoxicosis inducida por amiodarona': [7, 1],
  'Hipertiroidismo subclinico': [10, 11, 12],
  'Orbitopatia de Graves': [5, 6, 18],
  'Complicaciones del tratamiento antitiroideo': [15, 16, 14],
  'Repercusion cardiovascular y osea de la tirotoxicosis': [11, 12, 4]
};
export const estigmasTitulo = 'Signos y sintomas de la tirotoxicosis, y los especificos de la enfermedad de Graves';
export const estigmas = [
  { s: 'Taquicardia sinusal en reposo', p: '~90%', photo: null, desc: 'El signo mas constante. Persiste durante el sueno, a diferencia de la taquicardia por ansiedad. Su ausencia en un paciente con tirotoxicosis obliga a pensar en betabloqueo previo o en fibrilacion auricular ya establecida.' },
  { s: 'Perdida de peso con apetito conservado o aumentado', p: '80-85%', photo: null, desc: 'Combinacion muy sugestiva: el paciente come igual o mas y adelgaza. En el anciano puede haber anorexia asociada, lo que confunde con neoplasia y retrasa el diagnostico.' },
  { s: 'Temblor fino distal', p: '~80%', photo: null, desc: 'De alta frecuencia y baja amplitud, se explora con los brazos extendidos y los dedos separados, y se hace mas evidente colocando una hoja de papel sobre las manos. Mejora en horas con el betabloqueante.' },
  { s: 'Intolerancia al calor y sudoracion', p: '70-80%', photo: null, desc: 'El paciente refiere que ya no soporta el calor que antes toleraba y que suda mas que los demas. La piel esta caliente, fina y humeda, en contraste con la piel seca y fria del hipotiroidismo.' },
  { s: 'Nerviosismo, ansiedad e insomnio', p: '70-80%', photo: null, desc: 'Con frecuencia el motivo por el que el paciente acaba en psiquiatria antes que en endocrinologia. En la mujer joven puede confundirse con un trastorno de ansiedad, y en el anciano el cuadro es el opuesto: apatia.' },
  { s: 'Bocio difuso, elastico, a veces con soplo', p: '60-70% (Graves)', photo: null, desc: 'El soplo o el thrill sobre la glandula reflejan la hipervascularizacion y son practicamente exclusivos de la enfermedad de Graves. En el bocio multinodular toxico se palpan nodulos y la glandula es irregular.' },
  { s: 'Retraccion palpebral con mirada fija', p: '~50%', photo: null, desc: 'Signo adrenergico presente en cualquier tirotoxicosis, no solo en el Graves: se debe al tono aumentado del musculo de Muller. Se acompana del signo de von Graefe (retraso del parpado al seguir el dedo hacia abajo).' },
  { s: 'Hiperdefecacion', p: '~35%', photo: null, desc: 'Aumento del numero de deposiciones de consistencia normal o blanda, por transito acelerado. No es una diarrea verdadera, y ese matiz ayuda a distinguirla de una causa digestiva primaria.' },
  { s: 'Debilidad muscular proximal', p: '~35%', photo: null, desc: 'Dificultad para levantarse de una silla o subir escaleras, con creatincinasa normal o baja. En el varon asiatico joven puede presentarse como paralisis periodica tirotoxica hipopotasemica, desencadenada por comidas ricas en carbohidratos o ejercicio.' },
  { s: 'Fibrilacion auricular', p: '10-15% (20-25% en mayores de 60)', photo: null, desc: 'A menudo la unica manifestacion en el anciano con hipertiroidismo apatico. Hasta dos tercios revierten solos a ritmo sinusal en los 2 a 3 meses siguientes a alcanzar el eutiroidismo, por lo que la cardioversion suele diferirse.' },
  { s: 'Orbitopatia: proptosis, edema periorbitario, diplopia', p: '25-30% (solo en Graves)', photo: null, desc: 'Especifica de la enfermedad de Graves y suficiente para diagnosticarla sin gammagrafia. La perdida de agudeza visual o la alteracion de la vision de colores indican neuropatia optica compresiva y son una urgencia.' },
  { s: 'Mixedema pretibial y acropaquia tiroidea', p: '1-5% (solo en Graves)', photo: null, desc: 'Placas induradas de piel en cascara de naranja en la cara anterior de las piernas, por deposito de glucosaminoglucanos en la dermis; casi siempre acompanan a una orbitopatia grave. La acropaquia (dedos en palillo de tambor con periostitis) es todavia mas rara.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Clasificacion por captacion': [1],
  'Clasificacion por gravedad bioquimica': [10, 1],
  'Puntuacion de actividad clinica de la orbitopatia (CAS)': [5],
  'Gravedad de la orbitopatia segun EUGOGO': [5, 6],
  'Tirotoxicosis por amiodarona: tipos 1 y 2': [7]
};
export const escalaCalc = {};
export const compGroups = [
  { name: 'Formas de tirotoxicosis', items: ['Enfermedad de Graves', 'Bocio multinodular toxico y adenoma toxico', 'Tiroiditis subaguda, silente y posparto', 'Tirotoxicosis inducida por amiodarona', 'Hipertiroidismo subclinico'] },
  { name: 'Complicaciones', items: ['Orbitopatia de Graves', 'Complicaciones del tratamiento antitiroideo', 'Repercusion cardiovascular y osea de la tirotoxicosis'] }
];
export const complicacionesIntro = 'Las cinco primeras fichas son las formas de tirotoxicosis, ordenadas por el mecanismo que decide el tratamiento: las tres primeras fabrican hormona (Graves, nodular toxica) o la vierten (tiroiditis), la cuarta puede hacer ambas cosas segun el tipo, y la quinta es la version bioquimica leve de cualquiera de ellas. Las tres ultimas son las complicaciones que de verdad importan: la orbitopatia, que sigue su propio curso al margen del control hormonal; la toxicidad de los antitiroideos, que se previene con una instruccion y no con analiticas; y el dano cardiaco y oseo, que es la razon por la que se trata incluso lo subclinico.';
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
    { title: 'Captacion ALTA', sub: 'La glandula fabrica de mas', color: '#b4552f', target: 'diagnostico', leaves: [
      { title: 'Difusa', sub: 'Enfermedad de Graves', color: '#b4552f', target: 'complicaciones' },
      { title: 'Parcheada', sub: 'Bocio multinodular toxico', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Foco unico', sub: 'Adenoma toxico', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'Captacion BAJA', sub: 'Vertido o hormona de fuera', color: '#3d5a73', target: 'diagnostico', leaves: [
      { title: 'Tiroides dolorosa', sub: 'Subaguda de De Quervain', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Indolora o posparto', sub: 'Tiroiditis linfocitaria', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Amiodarona tipo 2', sub: 'Se trata con esteroide', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Tiroglobulina baja', sub: 'Tirotoxicosis facticia', color: '#5b4a86', target: 'clasificacion' }
    ] },
    { title: 'Lo que hay que vigilar', sub: 'Corazon, hueso, ojo y farmaco', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Fibrilacion auricular', sub: 'Pedir TSH siempre', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Perdida osea', sub: 'Mujer posmenopausica', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Orbitopatia activa', sub: 'CAS de 3 o mas', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Agranulocitosis', sub: 'Fiebre u odinofagia', color: '#7a1f3d', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 13], no_invasivos: [1, 5], imagen: [5, 1] };
export const clasificacionCite = [1, 10, 7];
export const seguimientoCite = [1, 7];
