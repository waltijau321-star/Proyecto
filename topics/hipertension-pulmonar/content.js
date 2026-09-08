// topics/hipertension-pulmonar/content.js: Hipertension pulmonar.
// Cubre la mitad vascular del item "Enfermedad pulmonar intersticial e hipertension pulmonar" del
// cluster Enfermedad respiratoria cronica (bloque III, Neumologia) del temario, que se separo en
// dos entradas porque son dos enfermedades distintas unidas de forma arbitraria. La mitad
// intersticial es `enfermedad-intersticial`.
//
// Fuentes principales: guia ESC/ERS 2022, que BAJO el umbral diagnostico a una presion arterial
// pulmonar media mayor de 20 mmHg y la resistencia vascular pulmonar a mas de 2 unidades Wood;
// clasificacion clinica de Niza; ensayos AMBITION, GRIPHON, STELLAR (sotatercept), CHEST-1 e
// INCREASE; modelo de riesgo COMPERA 2.0; y las declaraciones de la ERS sobre hipertension
// pulmonar tromboembolica cronica, por cardiopatia izquierda y por enfermedad pulmonar.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 2 presentaciones (HP estable, fallo derecho agudo) + 6 fichas. 4 calculadoras,
// 4 figuras. Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'hipertension-pulmonar',
  titulo: 'Hipertension Pulmonar',
  subtitulo: 'Modulo 54 · Medicina Interna',
  accent: '#7a2f5c'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const hemodinamicaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #7a2f5c;border-radius:8px;padding:5px 9px;background:#7a2f5c12;margin-bottom:6px;">
    <strong style="color:#7a2f5c;">La guia de 2022 bajo los dos umbrales.</strong> <span style="color:var(--ink-dim);">La presion arterial pulmonar media pasa de <strong>25 o mas</strong> a <strong>mayor de 20 mmHg</strong>, y la resistencia vascular pulmonar de <strong>mayor de 3</strong> a <strong>mayor de 2 unidades Wood</strong>. El motivo es que los pacientes en esa zona intermedia ya tienen peor pronostico, y quedaban fuera.</span>
  </div>
  <div style="border:1px solid var(--line);border-radius:7px;padding:6px 9px;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Las tres cifras del cateterismo derecho, y lo que significa cada una.</strong> La <strong>presion arterial pulmonar media</strong> dice si hay hipertension pulmonar. La <strong>presion de enclavamiento pulmonar</strong> dice si el problema viene de aguas arriba (el corazon izquierdo) o de aguas abajo. Y la <strong>resistencia vascular pulmonar</strong> dice si hay ademas enfermedad del propio vaso, y es la que decide el tratamiento.
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:132px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">PRECAPILAR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Media mayor de 20, enclavamiento <strong style="color:var(--ink);">15 o menos</strong> y resistencia <strong style="color:var(--ink);">mayor de 2</strong>. El corazon izquierdo esta bien y el problema esta en el vaso pulmonar o en el pulmon: grupos <strong>1, 3, 4</strong> y parte del 5. Es el perfil que puede beneficiarse de tratamiento vasodilatador especifico, y solo en el grupo 1.</div>
    </div>
    <div style="display:grid;grid-template-columns:132px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">POSCAPILAR<br>AISLADA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Media mayor de 20, enclavamiento <strong style="color:var(--ink);">mayor de 15</strong> y resistencia <strong style="color:var(--ink);">2 o menos</strong>. Es transmision pasiva de la presion del corazon izquierdo: <strong>grupo 2</strong>, el mas frecuente de todos. Se trata la cardiopatia, y el vasodilatador pulmonar esta contraindicado.</div>
    </div>
    <div style="display:grid;grid-template-columns:132px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a2e22;border:1px solid #6b4a2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a2e;">COMBINADA<br>pre y poscapilar</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Media mayor de 20, enclavamiento <strong style="color:var(--ink);">mayor de 15</strong> y resistencia <strong style="color:var(--ink);">mayor de 2</strong>. La cardiopatia izquierda ha producido ademas remodelado del vaso pulmonar. Peor pronostico que la aislada, y sigue sin haber indicacion establecida de vasodilatador.</div>
    </div>
    <div style="display:grid;grid-template-columns:132px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">DE ESFUERZO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Recuperada en 2022: pendiente de presion media frente a gasto cardiaco <strong style="color:var(--ink);">mayor de 3 mmHg por litro y minuto</strong> entre el reposo y el ejercicio. Explica la disnea de esfuerzo de pacientes con hemodinamica normal en reposo.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">El cateterismo derecho sigue siendo obligatorio</strong> para confirmar el diagnostico, clasificar el perfil y medir la vasorreactividad. La ecocardiografia estima, no mide: da una <strong>probabilidad</strong>, y sobre esa probabilidad se decide a quien se cateteriza, no que tratamiento se pone.
  </div>
</div>`;

const algoritmoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">El orden importa: primero lo frecuente, despues lo tratable, y solo al final lo raro.</strong> <span style="color:var(--ink-dim);">Los grupos 2 y 3 explican la gran mayoria de las hipertensiones pulmonares. Buscar una hipertension arterial pulmonar antes de haber descartado una insuficiencia cardiaca o una EPOC es invertir el algoritmo.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">1. SOSPECHA y<br>ECOCARDIOGRAMA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Disnea de esfuerzo sin explicacion, sincope de esfuerzo o signos de fallo derecho. El ecocardiograma asigna una <strong style="color:var(--ink);">probabilidad baja, intermedia o alta</strong> combinando la velocidad de regurgitacion tricuspidea con otros signos de ventriculo derecho, arteria pulmonar y vena cava. <strong>No mide la presion: la estima.</strong></div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">2. BUSCAR<br>GRUPOS 2 y 3</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Son la causa en la gran mayoria de los casos. Cardiopatia izquierda (valvulopatia, disfuncion sistolica o diastolica, fibrilacion auricular) y enfermedad pulmonar o hipoxia cronica (EPOC, EPID, apnea del sue&#241;o, hipoventilacion). <strong style="color:var(--ink);">Si se identifican y explican el cuadro, se tratan y ahi termina el algoritmo</strong>.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#7a2f5c22;border:1px solid #7a2f5c;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#7a2f5c;">3. GAMMAGRAFIA<br>DE V/Q</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:#7a2f5c;">OBLIGATORIA en toda hipertension pulmonar sin explicar</strong>, porque descarta el grupo 4, que es el unico POTENCIALMENTE CURABLE con cirugia. Es <strong style="color:var(--ink);">mas sensible que la angiotomografia</strong> para la enfermedad tromboembolica cronica: una angiotomografia normal NO la descarta. Un estudio de perfusion normal si la descarta.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">4. CENTRO EXPERTO<br>y CATETERISMO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Si tras lo anterior persiste la sospecha de grupo 1 o 4, <strong style="color:var(--ink);">derivar antes del cateterismo</strong>, no despues. El cateterismo derecho confirma, clasifica el perfil hemodinamico y mide la vasorreactividad, y su rendimiento y su seguridad dependen de la experiencia del centro.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Estudio etiologico del grupo 1, que se hace en paralelo.</strong> Serologia de VIH, pruebas hepaticas y ecografia abdominal (hipertension portopulmonar), autoinmunidad con anticentromero y anti-Scl-70 (esclerosis sistemica, que obliga a cribado ANUAL), historia de anorexigenos, anfetaminas y algunos inhibidores de tirosina cinasa, y estudio genetico con consejo si hay historia familiar (BMPR2).
  </div>
</div>`;

const gruposHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #7a2f5c;border-radius:8px;padding:5px 9px;background:#7a2f5c12;margin-bottom:6px;">
    <strong style="color:#7a2f5c;">Clasificar en grupo no es un ejercicio academico: decide si el vasodilatador ayuda, no hace nada o hace da&#241;o.</strong>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">GRUPO 1<br>arterial</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Idiopatica, hereditaria, por farmacos y toxicos, y asociada a conectivopatia, VIH, hipertension portal, cardiopatia congenita o esquistosomiasis. <strong style="color:#3f6b52;">Es el UNICO grupo con tratamiento vasodilatador especifico establecido.</strong> Enfermedad del propio vaso peque&#241;o, con proliferacion y remodelado.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">GRUPO 2<br>izquierdo</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Por cardiopatia izquierda: es el <strong style="color:var(--ink);">mas frecuente de todos</strong>. Insuficiencia cardiaca con fraccion reducida o preservada, valvulopatia. Se trata la cardiopatia. <strong style="color:#8c3a34;">El vasodilatador pulmonar es perjudicial</strong>: aumenta el flujo hacia un ventriculo izquierdo que no puede manejarlo y produce edema pulmonar.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">GRUPO 3<br>pulmonar</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Por enfermedad pulmonar o hipoxia: EPOC, EPID, sindromes combinados, apnea del sue&#241;o, hipoventilacion, altitud. Se trata la enfermedad de base y se corrige la hipoxemia. <strong style="color:#8c3a34;">El vasodilatador empeora el intercambio</strong> al dilatar zonas mal ventiladas. Unica excepcion: <strong style="color:var(--ink);">treprostinil inhalado</strong> en la hipertension pulmonar asociada a EPID.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#7a2f5c22;border:1px solid #7a2f5c;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#7a2f5c;">GRUPO 4<br>obstructiva</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Tromboembolica cronica y otras obstrucciones de la arteria pulmonar. <strong style="color:#3f6b52;">El unico POTENCIALMENTE CURABLE</strong>: la endarterectomia pulmonar puede normalizar la hemodinamica. Anticoagulacion indefinida en todos. Angioplastia con balon en la enfermedad distal y riociguat si es inoperable o persiste tras la cirugia.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a2e22;border:1px solid #6b4a2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a2e;">GRUPO 5<br>multifactorial</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Mecanismo no claro o multiple: enfermedades hematologicas (anemia hemolitica cronica, sindromes mieloproliferativos), sarcoidosis, histiocitosis, trastornos metabolicos, insuficiencia renal cronica en dialisis y mediastinitis fibrosante. Se trata la enfermedad de base; el vasodilatador se decide caso a caso en centro experto.</div>
    </div>
  </div>
</div>`;

const riesgoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">En la hipertension arterial pulmonar el objetivo no es una cifra de presion: es llegar y mantenerse en RIESGO BAJO.</strong> <span style="color:var(--ink-dim);">Toda la estrategia terapeutica se organiza alrededor de esa idea, y se revisa cada 3 a 6 meses.</span>
  </div>
  <div style="border:1px solid var(--line);border-radius:7px;padding:6px 9px;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Las tres variables que se usan en cada revision</strong>: la <strong>clase funcional</strong> de la Organizacion Mundial de la Salud, la <strong>distancia en la marcha de 6 minutos</strong> y el <strong>peptido natriuretico</strong>. En el diagnostico se usan tres estratos (bajo, intermedio y alto) y se a&#241;aden datos de imagen y hemodinamica; en el seguimiento, cuatro estratos que separan el intermedio en bajo-intermedio y alto-intermedio, porque el pronostico dentro de esa franja es muy distinto.
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">RIESGO BAJO<br>al diagnostico</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Clase funcional I o II, marcha mayor de 440 metros y peptido natriuretico bajo. <strong style="color:var(--ink);">Doble terapia oral inicial</strong>: antagonista del receptor de la endotelina mas inhibidor de la fosfodiesterasa 5. La monoterapia ha quedado para casos muy concretos.</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">RIESGO<br>INTERMEDIO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Misma doble terapia oral inicial. En la revision de los 3 a 6 meses, si no ha bajado a riesgo bajo, <strong style="color:var(--ink);">a&#241;adir un tercer farmaco</strong>: selexipag o un analogo de prostaciclina, o cambiar el inhibidor de fosfodiesterasa por riociguat. <strong>Sotatercept</strong> como a&#241;adido en el riesgo intermedio y alto.</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">RIESGO ALTO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Triple terapia inicial que incluya prostaciclina PARENTERAL</strong>, y remision inmediata a trasplante pulmonar. No es momento de escalar poco a poco: el paciente en riesgo alto tiene una mortalidad al a&#241;o muy elevada y el tiempo perdido no se recupera.</div>
    </div>
  </div>
  <div style="margin-top:6px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #5b4a86;border-radius:8px;padding:5px 8px;background:#5b4a8610;color:var(--ink-dim);">
      <strong style="color:#5b4a86;">La prueba de vasorreactividad.</strong> Solo en la hipertension arterial pulmonar <strong>idiopatica, hereditaria o por farmacos</strong>, nunca en las asociadas ni en otros grupos. Positiva si la presion media <strong>baja 10 mmHg o mas hasta quedar en 40 o menos</strong> con gasto cardiaco conservado o aumentado. Esos pacientes reciben antagonista del calcio a dosis altas, pero solo alrededor de la mitad de ellos siguen respondiendo al a&#241;o, de modo que hay que reevaluarlos.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Lo que NO se hace.</strong> Antagonistas del calcio empiricos sin prueba de vasorreactividad, que pueden producir colapso hemodinamico. Vasodilatadores pulmonares en los grupos 2 y 3. Anticoagulacion sistematica en el grupo 1, que ya no se recomienda de forma general. Y embarazo: en la hipertension arterial pulmonar la mortalidad materna sigue siendo muy alta y la anticoncepcion eficaz es parte del tratamiento.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La hipertension pulmonar no es una enfermedad sino un <strong>hallazgo hemodinamico</strong> compartido por situaciones muy distintas, desde una insuficiencia cardiaca hasta una arteriopatia pulmonar rara. Todo el tema se sostiene sobre dos preguntas: <strong>que perfil hemodinamico tiene</strong> y <strong>a que grupo clinico pertenece</strong>. De la respuesta depende algo muy concreto: si el tratamiento vasodilatador especifico va a ayudar, no va a hacer nada o va a hacer da&#241;o.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La definicion cambio en 2022, y a la baja.</strong></p>
<p style="margin:0 0 12px;">Durante decadas hizo falta una presion arterial pulmonar media de <strong>25 mmHg o mas</strong>. La guia de 2022 la bajo a <strong>mayor de 20 mmHg</strong> y a&#241;adio a la definicion de la forma precapilar una resistencia vascular pulmonar <strong>mayor de 2 unidades Wood</strong> (antes mayor de 3). El motivo no es afan clasificatorio: los pacientes que quedaban en esa franja intermedia ya tenian peor pronostico que los normales, y con la definicion antigua se les decia que estaban bien.</p>
${figBlock('Figura 1', 'La definicion hemodinamica de 2022 y los cuatro perfiles', hemodinamicaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El algoritmo tiene un orden, y saltarselo es el error clasico.</strong></p>
<p style="margin:0 0 12px;">Ante un ecocardiograma que sugiere hipertension pulmonar, la tentacion es pensar en la enfermedad rara. El orden correcto es el inverso: <strong>primero descartar los grupos 2 y 3</strong>, que explican la gran mayoria de los casos, y solo despues seguir. Y hay un paso que no se puede omitir nunca: la <strong>gammagrafia de ventilacion y perfusion</strong>, porque descarta el grupo 4, que es el unico <strong>potencialmente curable con cirugia</strong>. Es mas sensible que la angiotomografia para la enfermedad tromboembolica cronica, de modo que una angiotomografia normal no basta para descartarla.</p>
${figBlock('Figura 2', 'Algoritmo diagnostico: lo frecuente primero y la gammagrafia siempre', algoritmoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Los cinco grupos, y por que importan tanto.</strong></p>
<p style="margin:0 0 12px;">La clasificacion clinica agrupa las causas por mecanismo y por respuesta al tratamiento. El <strong>grupo 1</strong> es el unico con tratamiento vasodilatador especifico establecido. En el <strong>grupo 2</strong> ese mismo tratamiento produce edema pulmonar, porque aumenta el flujo hacia un ventriculo izquierdo que no puede manejarlo. En el <strong>grupo 3</strong> empeora el intercambio gaseoso al dilatar zonas mal ventiladas. Y el <strong>grupo 4</strong> tiene una cirugia que puede curarlo. Cuatro grupos, cuatro conductas incompatibles entre si.</p>
${figBlock('Figura 3', 'Los cinco grupos clinicos y que se hace en cada uno', gruposHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tratar por riesgo, no por presion.</strong></p>
<p style="margin:0 0 12px;">En la hipertension arterial pulmonar el objetivo terapeutico no es una cifra de presion sino alcanzar y mantener el <strong>riesgo bajo</strong>, valorado con la clase funcional, la marcha de 6 minutos y el peptido natriuretico. Lo que ha cambiado la practica en la ultima decada es la <strong>terapia combinada de inicio</strong> en lugar del escalado lento, y la reevaluacion sistematica a los 3 a 6 meses para escalar si el paciente no ha llegado a riesgo bajo. Y lo que de verdad decide el pronostico es el ventriculo derecho: la hipertension pulmonar no mata por la presion, mata por el fallo del ventriculo que tiene que vencerla.</p>
${figBlock('Figura 4', 'Estratificacion de riesgo y estrategia terapeutica en la HAP', riesgoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No diagnosticar hipertension pulmonar solo con un ecocardiograma: estima, no mide. No saltarse la gammagrafia de ventilacion y perfusion, ni fiarse de una angiotomografia normal para descartar el grupo 4. No dar vasodilatadores pulmonares en los grupos 2 y 3. No dar antagonistas del calcio sin prueba de vasorreactividad previa. No hacer la prueba de vasorreactividad fuera de la forma idiopatica, hereditaria o por farmacos. No escalar lentamente en el paciente de riesgo alto, que necesita prostaciclina parenteral desde el principio. Y no dejar de hablar de anticoncepcion con una mujer en edad fertil que tiene hipertension arterial pulmonar.</p>`;

export const bibliografia = [
  'Humbert M, Kovacs G, Hoeper MM, et al. 2022 ESC/ERS guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43(38):3618-3731.',
  'Simonneau G, Montani D, Celermajer DS, et al. Haemodynamic definitions and updated clinical classification of pulmonary hypertension. Eur Respir J. 2019;53(1):1801913.',
  'Galie N, Barbera JA, Frost AE, et al. Initial use of ambrisentan plus tadalafil in pulmonary arterial hypertension. N Engl J Med. 2015;373(9):834-844.',
  'Sitbon O, Channick R, Chin KM, et al. Selexipag for the treatment of pulmonary arterial hypertension. N Engl J Med. 2015;373(26):2522-2533.',
  'Hoeper MM, Badesch DB, Ghofrani HA, et al. Phase 3 trial of sotatercept for treatment of pulmonary arterial hypertension. N Engl J Med. 2023;388(16):1478-1490.',
  'Ghofrani HA, DArmini AM, Grimminger F, et al. Riociguat for the treatment of chronic thromboembolic pulmonary hypertension. N Engl J Med. 2013;369(4):319-329.',
  'Waxman A, Restrepo-Jaramillo R, Thenappan T, et al. Inhaled treprostinil in pulmonary hypertension due to interstitial lung disease. N Engl J Med. 2021;384(4):325-334.',
  'Sitbon O, Humbert M, Jais X, et al. Long-term response to calcium channel blockers in idiopathic pulmonary arterial hypertension. Circulation. 2005;111(23):3105-3111.',
  'Delcroix M, Torbicki A, Gopalan D, et al. ERS statement on chronic thromboembolic pulmonary hypertension. Eur Respir J. 2021;57(6):2002828.',
  'Tunariu N, Gibbs SJR, Win Z, et al. Ventilation-perfusion scintigraphy is more sensitive than multidetector CTPA in detecting chronic thromboembolic pulmonary disease as a treatable cause of pulmonary hypertension. J Nucl Med. 2007;48(5):680-684.',
  'Hoeper MM, Pausch C, Olsson KM, et al. COMPERA 2.0: a refined four-stratum risk assessment model for pulmonary arterial hypertension. Eur Respir J. 2022;60(1):2102311.',
  'Jais X, Olsson KM, Barbera JA, et al. Pregnancy outcomes in pulmonary arterial hypertension in the modern management era. Eur Respir J. 2012;40(4):881-885.',
  'Vonk Noordegraaf A, Chin KM, Haddad F, et al. Pathophysiology of the right ventricle and of the pulmonary circulation in pulmonary hypertension. Eur Respir J. 2019;53(1):1801900.',
  'Hoeper MM, Granton J. Intensive care unit management of patients with severe pulmonary hypertension and right heart failure. Am J Respir Crit Care Med. 2011;184(10):1114-1124.',
  'Kim NH, Delcroix M, Jais X, et al. Chronic thromboembolic pulmonary hypertension. Eur Respir J. 2019;53(1):1801915.',
  'Vachiery JL, Tedford RJ, Rosenkranz S, et al. Pulmonary hypertension due to left heart disease. Eur Respir J. 2019;53(1):1801897.',
  'Nathan SD, Barbera JA, Gaine SP, et al. Pulmonary hypertension in chronic lung disease and hypoxia. Eur Respir J. 2019;53(1):1801914.',
  'Benza RL, Gomberg-Maitland M, Elliott CG, et al. Predicting survival in patients with pulmonary arterial hypertension: the REVEAL risk score calculator 2.0. Chest. 2019;156(2):323-337.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Hipertension pulmonar establecida',
      tituloB: 'Fallo del ventriculo derecho',
      compensada: 'Disnea de esfuerzo progresiva SIN hallazgos que la expliquen en la auscultacion ni en la radiografia, que es el motivo por el que el diagnostico se retrasa a&#241;os. Fatiga desproporcionada, dolor toracico de esfuerzo por isquemia del ventriculo derecho y, sobre todo, SINCOPE O PRESINCOPE DE ESFUERZO, que es un signo de gravedad porque significa que el gasto cardiaco no puede aumentar. En la exploracion: segundo tono pulmonar reforzado y palpable, soplo de insuficiencia tricuspidea, latido paraesternal izquierdo y onda a prominente en el pulso venoso yugular.',
      descompensada: 'Ingurgitacion yugular con onda v prominente, hepatomegalia pulsatil, reflujo hepatoyugular, ascitis y edemas. Hipotension, oliguria, frialdad y deterioro del nivel de conciencia cuando el gasto cae. En este punto el paciente entra en una espiral: la hipotension reduce la perfusion coronaria del ventriculo derecho, que se isquemia y bombea peor, lo que baja aun mas la tension. Es una situacion de altisima mortalidad en la que las maniobras habituales de la insuficiencia cardiaca izquierda pueden empeorar las cosas.'
    },
    laboratorio: [
      { prueba: 'Peptido natriuretico cerebral o su fragmento aminoterminal', utilidad: 'Marcador de sobrecarga del ventriculo derecho y una de las tres variables de la estratificacion de riesgo. Se mide en el diagnostico y en cada revision: su descenso hacia valores bajos con el tratamiento es uno de los objetivos terapeuticos, y su ascenso anuncia el deterioro antes que los sintomas.' },
      { prueba: 'Serologia de VIH y estudio hepatico', utilidad: 'Obligados en todo grupo 1: la infeccion por VIH y la hipertension portal (portopulmonar) son causas reconocidas y cambian el manejo. La ecografia abdominal con estudio del eje esplenoportal completa la busqueda de hipertension portal, que puede existir sin hepatopatia evidente.' },
      { prueba: 'Autoinmunidad completa', utilidad: 'Anticuerpos antinucleares, anticentromero y anti-Scl-70: la esclerosis sistemica es la conectivopatia que mas se asocia y obliga a CRIBADO ANUAL de hipertension pulmonar aunque el paciente este asintomatico, porque el diagnostico precoz mejora el pronostico.' },
      { prueba: 'Estudio de trombofilia y anticuerpos antifosfolipido', utilidad: 'Ante sospecha de hipertension pulmonar tromboembolica cronica. El sindrome antifosfolipido es una asociacion clasica y su presencia refuerza la indicacion de anticoagulacion indefinida con antagonista de la vitamina K.' },
      { prueba: 'Gasometria arterial y funcion pulmonar completa', utilidad: 'Para valorar el grupo 3. Una DLCO desproporcionadamente baja en un paciente sin enfermedad parenquimatosa significativa apunta a enfermedad vascular pulmonar, y en la esclerosis sistemica es uno de los datos que mas anticipan la hipertension pulmonar.' },
      { prueba: 'Funcion renal, hepatica y acido urico', utilidad: 'La congestion sistemica del fallo derecho produce disfuncion renal y hepatica, que son marcadores de gravedad. El acido urico elevado refleja el bajo gasto y se asocia a peor pronostico.' },
      { prueba: 'Hemograma y estudio de hemolisis', utilidad: 'Ante sospecha de grupo 5: la anemia hemolitica cronica y los sindromes mieloproliferativos son causas reconocidas. La ferropenia es muy frecuente en la hipertension arterial pulmonar, empeora la capacidad de ejercicio y debe corregirse por via intravenosa.' },
      { prueba: 'Estudio genetico', utilidad: 'Mutaciones de BMPR2 y de otros genes en la forma hereditaria y en la idiopatica. Se ofrece con consejo genetico, porque tiene implicaciones para los familiares de primer grado, a los que se puede ofrecer cribado.' }
    ],
    no_invasivos: [
      { metodo: 'Ecocardiograma con probabilidad de hipertension pulmonar (calculadora disponible)', interpretacion: 'Combina la velocidad maxima de regurgitacion tricuspidea con otros signos de ventriculo derecho, arteria pulmonar y vena cava para asignar una probabilidad baja, intermedia o alta. ESTIMA, no mide: sirve para decidir a quien se cateteriza.', cutoff: 'Velocidad de regurgitacion tricuspidea de 2.9 a 3.4 m/s: probabilidad intermedia. Mayor de 3.4: alta' },
      { metodo: 'Cateterismo cardiaco derecho (calculadora disponible)', interpretacion: 'PRUEBA DE REFERENCIA. Mide presion arterial pulmonar media, presion de enclavamiento y gasto cardiaco, de donde se calcula la resistencia vascular pulmonar. Confirma el diagnostico, define el perfil hemodinamico y permite la prueba de vasorreactividad.', cutoff: 'Hipertension pulmonar: presion media mayor de 20 mmHg. Precapilar: enclavamiento 15 o menos con resistencia mayor de 2 unidades Wood' },
      { metodo: 'Gammagrafia de ventilacion y perfusion', interpretacion: 'OBLIGATORIA en toda hipertension pulmonar sin causa clara, porque descarta el grupo 4, el unico potencialmente curable. Es MAS SENSIBLE que la angiotomografia para la enfermedad tromboembolica cronica.', cutoff: 'Estudio de perfusion normal: descarta el grupo 4. Defectos segmentarios en cu&#241;a no coincidentes: lo sugieren' },
      { metodo: 'Estratificacion de riesgo en la HAP (calculadora disponible)', interpretacion: 'Clase funcional de la Organizacion Mundial de la Salud, marcha de 6 minutos y peptido natriuretico. Tres estratos en el diagnostico y cuatro en el seguimiento. El objetivo terapeutico es alcanzar y mantener el riesgo bajo.', cutoff: 'Riesgo bajo: clase I o II, marcha mayor de 440 metros y peptido natriuretico bajo' },
      { metodo: 'Prueba de vasorreactividad aguda (calculadora disponible)', interpretacion: 'Se realiza en el cateterismo con oxido nitrico inhalado, epoprostenol o iloprost. SOLO en la hipertension arterial pulmonar idiopatica, hereditaria o por farmacos: en las asociadas y en los demas grupos no se hace.', cutoff: 'Positiva: descenso de la presion media de 10 mmHg o mas hasta un valor absoluto de 40 mmHg o menor, con gasto cardiaco conservado o aumentado' },
      { metodo: 'Marcha de 6 minutos', interpretacion: 'Variable central del seguimiento y de la estratificacion de riesgo. Mide la capacidad funcional real y su cambio con el tratamiento. Debe hacerse de forma estandarizada, porque el aliento del explorador cambia el resultado.', cutoff: 'Mayor de 440 metros: riesgo bajo. Menor de 165 metros: riesgo alto' },
      { metodo: 'Electrocardiograma', interpretacion: 'P pulmonale, desviacion derecha del eje, hipertrofia del ventriculo derecho con patron de sobrecarga y bloqueo de rama derecha. Es poco sensible: un electrocardiograma normal NO descarta la hipertension pulmonar, y esa es la razon por la que no sirve de cribado.', cutoff: 'Sin umbral; los hallazgos apoyan pero su ausencia no excluye' }
    ],
    imagen: [
      { modalidad: 'Ecocardiograma transtoracico', hallazgos: 'Prueba inicial. Velocidad de regurgitacion tricuspidea, dilatacion y disfuncion del ventriculo derecho, cociente entre ventriculo derecho e izquierdo, aplanamiento del tabique con forma de D, dilatacion de la arteria pulmonar, derrame pericardico (signo de mal pronostico) y vena cava dilatada sin colapso. Ademas descarta la cardiopatia izquierda, que es la causa mas frecuente.' },
      { modalidad: 'Gammagrafia de ventilacion y perfusion', hallazgos: 'Defectos de perfusion segmentarios o subsegmentarios en cu&#241;a, no coincidentes con la ventilacion. Un estudio de perfusion normal descarta la hipertension pulmonar tromboembolica cronica, cosa que la angiotomografia no consigue.' },
      { modalidad: 'Angiotomografia pulmonar', hallazgos: 'Complementa a la gammagrafia y define la anatomia para la cirugia: material organizado adherido a la pared, bandas y membranas, estenosis y dilataciones postestenoticas, y circulacion bronquial hipertrofiada. Ademas valora el parenquima para el grupo 3 y mide el cociente entre arteria pulmonar y aorta.' },
      { modalidad: 'Resonancia cardiaca', hallazgos: 'Patron de referencia para el volumen, la masa y la fraccion de eyeccion del ventriculo derecho, que es lo que determina el pronostico. Util en el seguimiento y cuando el ecocardiograma es de mala calidad, y cada vez mas incorporada a la valoracion de riesgo.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La hipertension pulmonar se clasifica en dos planos que se complementan. El <strong>hemodinamico</strong> divide el problema segun donde esta: precapilar, poscapilar aislada, combinada y de esfuerzo, y para ello hace falta un cateterismo derecho. El <strong>clinico</strong> agrupa las causas en cinco grupos segun mecanismo y respuesta al tratamiento, y es el que decide la conducta. A ellos se suma la <strong>estratificacion de riesgo</strong> de la hipertension arterial pulmonar, que no clasifica la enfermedad sino al paciente, y que es lo que gobierna el tratamiento y su escalada.`,
    escalas: [
      { nombre: 'Definicion hemodinamica de 2022 (calculadora disponible)', componentes: 'Presion arterial pulmonar media, presion de enclavamiento pulmonar y resistencia vascular pulmonar, medidas en cateterismo derecho.', formula: 'Hipertension pulmonar: media mayor de 20 mmHg. Precapilar: enclavamiento 15 o menos y resistencia mayor de 2 unidades Wood. Poscapilar aislada: enclavamiento mayor de 15 y resistencia 2 o menos. Combinada: enclavamiento mayor de 15 y resistencia mayor de 2.', interpretacion: 'Los dos umbrales bajaron en 2022 (antes 25 mmHg y 3 unidades Wood) porque los pacientes de la franja intermedia ya tenian peor pronostico. La forma de esfuerzo se recupero con una pendiente de presion media frente a gasto mayor de 3 mmHg por litro y minuto.' },
      { nombre: 'Clasificacion clinica en cinco grupos', componentes: 'Mecanismo y enfermedad de base.', formula: 'Grupo 1 arterial pulmonar; grupo 2 por cardiopatia izquierda; grupo 3 por enfermedad pulmonar o hipoxia; grupo 4 por obstruccion de la arteria pulmonar; grupo 5 de mecanismo no claro o multifactorial.', interpretacion: 'Es la clasificacion que decide el tratamiento. El grupo 1 es el unico con vasodilatador especifico establecido; en el 2 y en el 3 ese tratamiento es perjudicial; el 4 tiene una cirugia potencialmente curativa. Los grupos 2 y 3 son, con mucho, los mas frecuentes.' },
      { nombre: 'Probabilidad ecocardiografica (calculadora disponible)', componentes: 'Velocidad maxima de regurgitacion tricuspidea mas signos de ventriculo derecho (cociente con el izquierdo, aplanamiento septal), de arteria pulmonar (tiempo de aceleracion, diametro) y de vena cava y auricula derecha.', formula: 'Combinacion de la velocidad con la presencia de signos en dos o mas de las tres categorias.', interpretacion: 'Asigna probabilidad baja, intermedia o alta, y con ella se decide a quien se estudia mas y a quien se cateteriza. NO establece el diagnostico ni sirve para seguir la presion: la ecocardiografia estima, el cateterismo mide.' },
      { nombre: 'Estratificacion de riesgo en tres estratos (calculadora disponible)', componentes: 'Clase funcional de la Organizacion Mundial de la Salud, distancia en la marcha de 6 minutos y peptido natriuretico, mas datos de imagen y hemodinamica en el diagnostico.', formula: 'Riesgo bajo, intermedio o alto, con una mortalidad estimada al a&#241;o menor del 5%, del 5 al 20% y mayor del 20% respectivamente.', interpretacion: 'Determina el tratamiento inicial: doble terapia oral en riesgo bajo e intermedio, y triple con prostaciclina parenteral en riesgo alto. El objetivo de todo el tratamiento es llegar y mantenerse en riesgo bajo.' },
      { nombre: 'Estratificacion en cuatro estratos para el seguimiento', componentes: 'Las mismas tres variables, con el estrato intermedio dividido en bajo-intermedio y alto-intermedio.', formula: 'Modelo COMPERA 2.0, aplicado en cada revision a los 3 a 6 meses.', interpretacion: 'La franja intermedia agrupaba pronosticos muy distintos y el modelo de cuatro estratos los separa. En la practica, un paciente que sigue en riesgo intermedio-alto a los 6 meses necesita escalada de tratamiento, no observacion.' },
      { nombre: 'Prueba de vasorreactividad aguda (calculadora disponible)', componentes: 'Presion arterial pulmonar media y gasto cardiaco antes y despues de un vasodilatador de accion corta durante el cateterismo.', formula: 'Positiva si la presion media desciende 10 mmHg o mas hasta un valor absoluto de 40 mmHg o menor, con gasto cardiaco conservado o aumentado.', interpretacion: 'Solo se hace en la forma idiopatica, hereditaria o por farmacos. Identifica a la minoria (alrededor del 10%) que responde a antagonistas del calcio a dosis altas, de los cuales solo la mitad mantiene la respuesta al a&#241;o. Dar antagonistas del calcio sin esta prueba puede producir colapso hemodinamico.' },
      { nombre: 'Clase funcional de la Organizacion Mundial de la Salud', componentes: 'Limitacion de la actividad fisica y aparicion de sintomas.', formula: 'I sin limitacion; II limitacion leve con sintomas en la actividad ordinaria; III limitacion marcada con sintomas en actividad menor de la ordinaria; IV sintomas en reposo o signos de fallo derecho.', interpretacion: 'Es la variable pronostica mas potente y la mas barata de todas, y entra en las dos estratificaciones. La clase IV o el sincope de esfuerzo definen por si solos un paciente de riesgo alto que necesita remision urgente.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Hipertension arterial pulmonar (grupo 1)',
      color: '#8c3a34',
      definicion: 'Hipertension pulmonar PRECAPILAR (presion media mayor de 20 mmHg, enclavamiento de 15 o menos y resistencia mayor de 2 unidades Wood) por enfermedad del propio vaso pulmonar de peque&#241;o calibre, en ausencia de enfermedad pulmonar o tromboembolica que la explique.',
      fisiopatologia: 'La lesion no es un espasmo sino un REMODELADO proliferativo: disfuncion endotelial con desequilibrio entre vasoconstrictores (endotelina 1, tromboxano) y vasodilatadores (oxido nitrico, prostaciclina), proliferacion de celulas de musculo liso y endoteliales con resistencia a la apoptosis (un comportamiento casi neoplasico), inflamacion y trombosis in situ. El resultado son lesiones plexiformes y obliteracion progresiva del lecho arteriolar. Esa naturaleza proliferativa explica por que la mayoria de los pacientes no responden a un vasodilatador puro y por que el tratamiento moderno actua sobre las tres vias de se&#241;alizacion a la vez.',
      epidemiologia: 'Enfermedad rara, con una incidencia de unos pocos casos por millon de habitantes y a&#241;o. Ha cambiado de perfil: antes se describia en mujeres jovenes y hoy la edad media al diagnostico supera los 60 a&#241;os, con mas comorbilidad. El retraso diagnostico medio sigue siendo de a&#241;os, porque la disnea de esfuerzo sin hallazgos se atribuye a otras cosas.',
      factores_riesgo: ['Mutaciones de BMPR2 y otros genes de la via', 'Esclerosis sistemica y otras conectivopatias', 'Infeccion por VIH', 'Hipertension portal, con o sin cirrosis', 'Cardiopatia congenita con cortocircuito', 'Esquistosomiasis', 'Anorexigenos: fenfluramina y derivados', 'Anfetaminas, metanfetamina y algunos inhibidores de tirosina cinasa', 'Sexo femenino en las formas hereditaria e idiopatica', 'Antecedentes familiares de hipertension pulmonar'],
      clinica: 'Disnea de esfuerzo progresiva sin hallazgos que la expliquen, fatiga, dolor toracico de esfuerzo y SINCOPE O PRESINCOPE DE ESFUERZO, que indica que el gasto cardiaco no puede aumentar y es un signo de gravedad. En la exploracion, segundo tono pulmonar reforzado y palpable, soplo de insuficiencia tricuspidea y signos de congestion derecha en fases avanzadas.',
      criterios_dx: 'Cateterismo derecho con perfil precapilar, tras haber descartado los grupos 2, 3 y 4. La gammagrafia de ventilacion y perfusion es obligatoria antes de aceptar el diagnostico. Ver las Figuras 1 y 2 de Definicion.',
      laboratorio: 'Peptido natriuretico para la estratificacion. Serologia de VIH, estudio hepatico y ecografia abdominal, autoinmunidad con anticentromero y anti-Scl-70, y estudio genetico con consejo si procede. Ferritina y saturacion de transferrina, porque la ferropenia es muy frecuente y limita la capacidad de ejercicio.',
      imagen: 'Ecocardiograma con probabilidad y valoracion del ventriculo derecho. Gammagrafia de ventilacion y perfusion. Angiotomografia y funcion pulmonar completa para excluir los grupos 3 y 4. Resonancia cardiaca para cuantificar el ventriculo derecho.',
      complementarios: 'Marcha de 6 minutos y clase funcional en cada revision. Prueba de vasorreactividad durante el cateterismo, solo en la forma idiopatica, hereditaria o por farmacos. Cribado ANUAL en la esclerosis sistemica.',
      dx_diferencial: 'Hipertension pulmonar de los grupos 2, 3, 4 y 5, que hay que descartar antes. Y, dentro del grupo 1, la enfermedad venooclusiva pulmonar y la hemangiomatosis capilar, que se sospechan por vidrio deslustrado en vidrio esmerilado, septos engrosados y adenopatias, y en las que el vasodilatador puede producir EDEMA PULMONAR AGUDO.',
      tx_medico: 'Ejercicio supervisado y rehabilitacion en programa especializado, que mejora la capacidad funcional. Vacunacion. Correccion de la ferropenia por via intravenosa. Oxigeno si hay hipoxemia. ANTICONCEPCION EFICAZ en la mujer en edad fertil, porque el embarazo conlleva una mortalidad materna muy alta. Evitar la altitud y el ejercicio isometrico intenso.',
      tx_farmacologico: 'Segun el riesgo. Bajo e intermedio: DOBLE TERAPIA ORAL DE INICIO con antagonista del receptor de la endotelina mas inhibidor de la fosfodiesterasa 5. Alto: TRIPLE TERAPIA que incluya PROSTACICLINA PARENTERAL. En la revision de los 3 a 6 meses, si no se ha alcanzado el riesgo bajo, a&#241;adir selexipag o cambiar el inhibidor de fosfodiesterasa por riociguat, y valorar sotatercept, que actua sobre la via de la activina y ha demostrado mejorar la capacidad de ejercicio en el riesgo intermedio y alto. Antagonistas del calcio a dosis altas SOLO si la prueba de vasorreactividad es positiva. Diureticos para la congestion, con prudencia. La anticoagulacion sistematica ya NO se recomienda de forma general en el grupo 1.',
      tx_intervencionista: 'Trasplante pulmonar o cardiopulmonar en el paciente que no alcanza el riesgo bajo con tratamiento maximo, con remision precoz. Septostomia auricular como puente en centros expertos, que descomprime el ventriculo derecho a costa de desaturar.',
      criterios_uci: 'Fallo derecho agudo con hipotension, oliguria o hipoperfusion. Es una situacion de altisima mortalidad que debe manejarse en centro experto y en la que las maniobras habituales de la insuficiencia cardiaca izquierda pueden empeorar las cosas.',
      criterios_tips: 'No aplica. En la hipertension portopulmonar, la derivacion portosistemica esta CONTRAINDICADA si la hipertension pulmonar es moderada o grave, porque aumenta el flujo pulmonar y puede precipitar el fallo derecho.',
      criterios_trasplante: 'Remitir si no se alcanza el riesgo bajo con tratamiento combinado optimizado, si hay progresion, si aparece fallo derecho o si se necesita prostaciclina parenteral. La remision debe ser precoz, porque la mortalidad en lista es alta.',
      seguimiento_hospitalario: 'En el ingreso por descompensacion, evitar la hipotension y la hipoxemia, ajustar diureticos con vigilancia estrecha de la funcion renal, y no suspender el tratamiento especifico, cuya retirada brusca puede ser mortal.',
      seguimiento_ambulatorio: 'Revision cada 3 a 6 meses con clase funcional, marcha de 6 minutos y peptido natriuretico para reestratificar el riesgo y escalar si procede. Ecocardiograma periodico. Vigilancia de la ferropenia y de los efectos adversos del tratamiento.',
      pronostico: 'Ha mejorado mucho con la terapia combinada, pero sigue siendo una enfermedad grave. Lo que determina el pronostico no es la presion sino la FUNCION DEL VENTRICULO DERECHO y el riesgo alcanzado con el tratamiento: el paciente que llega a riesgo bajo tiene una supervivencia muy superior.',
      algoritmo: ['Sospechar ante disnea de esfuerzo sin explicacion o sincope de esfuerzo', 'Ecocardiograma para asignar probabilidad', 'Descartar PRIMERO cardiopatia izquierda y enfermedad pulmonar', 'Gammagrafia de ventilacion y perfusion OBLIGATORIA', 'Derivar a centro experto ANTES del cateterismo', 'Cateterismo derecho con prueba de vasorreactividad si procede', 'Completar el estudio etiologico: VIH, higado, autoinmunidad, genetica', 'Estratificar el riesgo con clase funcional, marcha y peptido natriuretico', 'Doble terapia oral de inicio, o triple con prostaciclina parenteral si el riesgo es alto', 'Reevaluar a los 3 a 6 meses y escalar si no esta en riesgo bajo']
    },
    {
      nombre: 'HP por cardiopatia izquierda (grupo 2)',
      color: '#3d5a73',
      definicion: 'Hipertension pulmonar POSCAPILAR (presion de enclavamiento mayor de 15 mmHg) secundaria a insuficiencia cardiaca con fraccion de eyeccion reducida o preservada, o a valvulopatia izquierda. Es la causa mas frecuente de hipertension pulmonar.',
      fisiopatologia: 'La presion elevada en la auricula izquierda se transmite de forma retrograda al lecho pulmonar: es hipertension pulmonar pasiva, y si se corrige la causa, revierte. Cuando la situacion se cronifica, aparece ademas remodelado y vasoconstriccion del vaso pulmonar, que a&#241;ade un componente precapilar: es la forma COMBINADA, que ya no revierte del todo al bajar la presion izquierda y tiene peor pronostico. Ese es el motivo de que la resistencia vascular pulmonar, y no solo el enclavamiento, forme parte de la definicion.',
      epidemiologia: 'Es, con mucho, la causa mas frecuente de hipertension pulmonar en la practica clinica. Aparece en una proporcion muy alta de los pacientes con insuficiencia cardiaca, sobre todo con fraccion de eyeccion preservada, y su presencia empeora el pronostico de forma independiente.',
      factores_riesgo: ['Insuficiencia cardiaca con fraccion de eyeccion preservada', 'Insuficiencia cardiaca con fraccion de eyeccion reducida', 'Valvulopatia mitral y aortica', 'Fibrilacion auricular', 'Hipertension arterial sistemica mal controlada', 'Obesidad y sindrome metabolico', 'Edad avanzada', 'Diabetes', 'Nefropatia cronica con sobrecarga de volumen', 'Apnea obstructiva del sue&#241;o coexistente'],
      clinica: 'La de la insuficiencia cardiaca: disnea de esfuerzo, ortopnea, disnea paroxistica nocturna, crepitantes y edemas. La hipertension pulmonar a&#241;ade signos de fallo derecho. La combinacion de fenotipo cardiometabolico (edad avanzada, obesidad, hipertension, diabetes, fibrilacion auricular) con hipertension pulmonar apunta con fuerza a este grupo aunque la fraccion de eyeccion sea normal.',
      criterios_dx: 'Cateterismo derecho con presion de enclavamiento mayor de 15 mmHg. La distincion entre aislada y combinada se hace con la resistencia vascular pulmonar. En casos dudosos, el cateterismo puede hacerse con sobrecarga de volumen o con ejercicio para desenmascarar una presion izquierda elevada que en reposo parece normal.',
      laboratorio: 'Peptido natriuretico, que suele estar mas elevado que en el grupo 1 para el mismo grado de hipertension pulmonar. Funcion renal, iones y perfil cardiometabolico completo.',
      imagen: 'Ecocardiograma con valoracion de la funcion sistolica y diastolica, del tama&#241;o auricular izquierdo y de las valvulas. La auricula izquierda dilatada es uno de los datos que mas orientan a este grupo frente al grupo 1.',
      complementarios: 'Valoracion de la apnea del sue&#241;o, muy frecuente y tratable. Control de la fibrilacion auricular. Coronariografia si se sospecha isquemia.',
      dx_diferencial: 'Hipertension arterial pulmonar del grupo 1, que es el error que mas consecuencias tiene porque lleva a un tratamiento perjudicial. En el paciente mayor con comorbilidad cardiometabolica y auricula izquierda dilatada hay que sospechar grupo 2 aunque la fraccion de eyeccion sea normal.',
      tx_medico: 'TRATAR LA CARDIOPATIA IZQUIERDA: optimizar el tratamiento de la insuficiencia cardiaca segun su fenotipo, controlar la volemia, la presion arterial y la frecuencia, corregir la valvulopatia y tratar la apnea del sue&#241;o. Perdida de peso y ejercicio en el fenotipo cardiometabolico.',
      tx_farmacologico: 'El de la insuficiencia cardiaca que corresponda. <strong>LOS VASODILATADORES PULMONARES ESPECIFICOS NO ESTAN INDICADOS Y SON PERJUDICIALES</strong>: aumentan el flujo hacia un ventriculo izquierdo que no puede manejarlo y precipitan edema pulmonar. Los ensayos que los han probado en este grupo han sido negativos o han mostrado da&#241;o.',
      tx_intervencionista: 'Cirugia o intervencion percutanea de la valvulopatia, que puede revertir la hipertension pulmonar. Dispositivos de asistencia y trasplante cardiaco en la insuficiencia cardiaca avanzada, donde una hipertension pulmonar fija y grave condiciona la indicacion.',
      criterios_uci: 'Los de la insuficiencia cardiaca descompensada grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La hipertension pulmonar combinada y con resistencia elevada es un factor limitante para el trasplante cardiaco, porque el ventriculo derecho del injerto puede no tolerarla. Su reversibilidad se estudia con vasodilatador durante el cateterismo.',
      seguimiento_hospitalario: 'Optimizacion de la volemia y del tratamiento de la insuficiencia cardiaca. Vigilar que nadie a&#241;ada un vasodilatador pulmonar por el hallazgo ecocardiografico.',
      seguimiento_ambulatorio: 'El de la insuficiencia cardiaca, con ecocardiograma periodico. Si la hipertension pulmonar persiste desproporcionada tras optimizar el tratamiento, reconsiderar el diagnostico y remitir a centro experto.',
      pronostico: 'La hipertension pulmonar empeora el pronostico de la insuficiencia cardiaca de forma independiente, y la forma combinada mas que la aislada. La buena noticia es que la aislada revierte al corregir la causa.',
      algoritmo: ['Sospechar grupo 2 ante fenotipo cardiometabolico y auricula izquierda dilatada', 'Ecocardiograma completo con funcion sistolica y diastolica y valvulas', 'Cateterismo con presion de enclavamiento mayor de 15 mmHg', 'Calcular la resistencia para separar aislada de combinada', 'Optimizar el tratamiento de la insuficiencia cardiaca', 'Corregir la valvulopatia si la hay', 'Tratar la apnea del sue&#241;o y la fibrilacion auricular', 'NO prescribir vasodilatadores pulmonares', 'Reevaluar tras optimizar: si persiste desproporcionada, remitir a centro experto', 'Valorar la reversibilidad si se plantea trasplante cardiaco']
    },
    {
      nombre: 'HP por enfermedad pulmonar e hipoxia (grupo 3)',
      color: '#3f6b52',
      definicion: 'Hipertension pulmonar precapilar secundaria a enfermedad pulmonar cronica o a hipoxia mantenida: EPOC, enfermedad intersticial, sindromes combinados de fibrosis y enfisema, trastornos respiratorios del sue&#241;o, hipoventilacion y exposicion cronica a la altitud.',
      fisiopatologia: 'Tres mecanismos que se suman: la vasoconstriccion pulmonar hipoxica, que empieza siendo adaptativa y acaba produciendo remodelado; la destruccion o la fibrosis del lecho capilar, que reduce el area vascular disponible; y la compresion de los vasos por la hiperinsuflacion o por la fibrosis. La hipercapnia y la acidosis potencian la vasoconstriccion, y la poliglobulia aumenta la viscosidad. La consecuencia practica es que la unica medida con efecto demostrado sobre la presion pulmonar en este grupo es corregir la hipoxemia.',
      epidemiologia: 'Alguna elevacion de la presion pulmonar aparece en la mitad de los pacientes con EPOC avanzada y es aun mas frecuente en la EPID. La forma GRAVE (resistencia mayor de 5 unidades Wood) afecta a una minoria y obliga a buscar otra causa a&#241;adida o a considerar que el paciente tiene un fenotipo vascular predominante.',
      factores_riesgo: ['EPOC avanzada, sobre todo con enfisema extenso', 'Enfermedad pulmonar intersticial difusa', 'Sindrome combinado de fibrosis y enfisema, que da las presiones mas altas', 'Apnea obstructiva del sue&#241;o e hipoventilacion asociada a obesidad', 'Hipoxemia cronica no corregida', 'Hipercapnia y acidosis respiratoria', 'Exposicion cronica a la altitud', 'Tromboembolia pulmonar previa asociada', 'Poliglobulia secundaria', 'Cardiopatia izquierda concomitante, que a&#241;ade componente poscapilar'],
      clinica: 'Disnea y limitacion funcional DESPROPORCIONADAS a la alteracion de la funcion pulmonar, que es la se&#241;al de alarma. Hipoxemia marcada, DLCO muy baja para el grado de obstruccion o restriccion, y signos de fallo derecho en fases avanzadas.',
      criterios_dx: 'Hipertension pulmonar precapilar en un paciente con enfermedad pulmonar que la explique. El cateterismo NO se hace de rutina: se reserva a la sospecha de forma grave, a la valoracion de trasplante y a la duda entre grupo 1 y grupo 3, es decir, cuando el resultado va a cambiar la conducta.',
      laboratorio: 'Gasometria arterial, funcion pulmonar completa con DLCO, hematocrito y peptido natriuretico. Una DLCO desproporcionadamente baja para el grado de enfermedad parenquimatosa apunta a componente vascular predominante.',
      imagen: 'Ecocardiograma como prueba inicial, con la limitacion de que en el paciente con enfisema la ventana es mala y la estimacion poco fiable. Tomografia para valorar el parenquima y medir el cociente entre arteria pulmonar y aorta. Gammagrafia si se sospecha componente tromboembolico.',
      complementarios: 'Estudio de sue&#241;o si hay sospecha de apnea o de hipoventilacion, que son causas tratables. Marcha de 6 minutos con oximetria. Valoracion en centro experto si la forma es grave.',
      dx_diferencial: 'Hipertension arterial pulmonar del grupo 1 coexistente, hipertension pulmonar tromboembolica cronica, cardiopatia izquierda asociada y sindrome combinado de fibrosis y enfisema, en el que la funcion pulmonar puede ser enga&#241;osamente normal porque los dos procesos se compensan.',
      tx_medico: 'TRATAR LA ENFERMEDAD DE BASE Y CORREGIR LA HIPOXEMIA: es lo unico con efecto demostrado sobre la presion pulmonar en este grupo. Oxigenoterapia domiciliaria si cumple criterios, tratamiento de la apnea del sue&#241;o, rehabilitacion respiratoria, abandono del tabaco y vacunacion. Diureticos con prudencia si hay congestion, evitando la depleccion excesiva.',
      tx_farmacologico: '<strong>LOS VASODILATADORES PULMONARES NO ESTAN INDICADOS DE FORMA GENERAL</strong>: empeoran el desequilibrio entre ventilacion y perfusion al dilatar zonas mal ventiladas, y agravan la hipoxemia. La UNICA excepcion reconocida es el TREPROSTINIL INHALADO en la hipertension pulmonar asociada a enfermedad intersticial, que mejoro la capacidad de ejercicio en un ensayo controlado. En la forma grave, el uso de otros farmacos se decide de forma individual y en centro experto.',
      tx_intervencionista: 'Trasplante pulmonar en el candidato adecuado. Cirugia de reduccion de volumen en casos muy seleccionados de enfisema.',
      criterios_uci: 'Fallo derecho agudo, que en este contexto tiene mal pronostico y exige un balance de volumen muy fino y con frecuencia vasopresores en lugar de mas diuretico o mas volumen.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La hipertension pulmonar progresiva es uno de los criterios de remision a trasplante en la EPOC y en la EPID avanzadas.',
      seguimiento_hospitalario: 'Control de balance, peso y funcion renal en el fallo derecho descompensado. Verificar la eficacia de la correccion de la hipoxemia.',
      seguimiento_ambulatorio: 'Ecocardiograma periodico, cumplimiento y eficacia de la oxigenoterapia, control de la apnea del sue&#241;o y marcha de 6 minutos.',
      pronostico: 'La hipertension pulmonar es un marcador independiente de mortalidad en la EPOC y en la EPID. La forma grave con enfermedad pulmonar leve tiene un pronostico especialmente malo y se comporta mas como una enfermedad vascular que como una enfermedad del parenquima.',
      algoritmo: ['Sospechar ante disnea o hipoxemia desproporcionadas a la funcion pulmonar', 'Ecocardiograma, sabiendo que en el enfisema la ventana es mala', 'Funcion pulmonar completa con DLCO y gasometria', 'Descartar apnea del sue&#241;o e hipoventilacion, que son tratables', 'Gammagrafia si se sospecha componente tromboembolico', 'Corregir la hipoxemia: es lo unico con efecto demostrado', 'Optimizar el tratamiento de la enfermedad pulmonar de base', 'NO iniciar vasodilatadores pulmonares de forma rutinaria', 'Valorar treprostinil inhalado si la hipertension se asocia a EPID', 'Remitir a centro experto si la forma es grave']
    },
    {
      nombre: 'HP tromboembolica cronica (grupo 4)',
      color: '#7a2f5c',
      definicion: 'Hipertension pulmonar precapilar por obstruccion organizada y fibrotica de las arterias pulmonares tras una o varias embolias, persistente pese a al menos 3 meses de anticoagulacion eficaz. Es el UNICO grupo potencialmente curable.',
      fisiopatologia: 'Tras la embolia, el trombo no se resuelve sino que se organiza y se incorpora a la pared, formando bandas, membranas y oclusiones que aumentan la resistencia. A esa obstruccion mecanica se suma, con el tiempo, una arteriopatia de peque&#241;o vaso en los territorios NO obstruidos, sometidos a un flujo excesivo. Esa segunda lesion explica por que algunos pacientes mantienen hipertension pulmonar despues de una endarterectomia tecnicamente correcta, y por que en ellos el riociguat si tiene indicacion.',
      epidemiologia: 'Aparece en un peque&#241;o porcentaje de los supervivientes de una embolia pulmonar, y hasta en una cuarta parte de los casos no hay antecedente conocido de embolia, lo que retrasa mucho el diagnostico. Sigue estando infradiagnosticada, y esa es la razon de que la gammagrafia sea obligatoria en toda hipertension pulmonar sin explicar.',
      factores_riesgo: ['Embolia pulmonar previa, sobre todo recurrente o extensa', 'Sindrome antifosfolipido y anticoagulante lupico', 'Esplenectomia', 'Derivacion ventriculoauricular y cateteres o electrodos permanentes', 'Enfermedad inflamatoria intestinal y osteomielitis cronica', 'Neoplasia y sindromes mieloproliferativos', 'Tratamiento hormonal sustitutivo', 'Grupo sanguineo distinto del O', 'Hipotiroidismo tratado con sustitucion', 'Trombofilia hereditaria'],
      clinica: 'Disnea de esfuerzo progresiva que aparece meses o a&#241;os despues de una embolia, o sin antecedente conocido. Puede haber un periodo de "luna de miel" asintomatico entre el episodio agudo y la aparicion de los sintomas, que despista. Hemoptisis ocasional por circulacion bronquial hipertrofiada, y soplos de flujo audibles sobre los campos pulmonares, que son muy caracteristicos cuando se encuentran.',
      criterios_dx: 'Hipertension pulmonar precapilar en el cateterismo MAS defectos de perfusion cronicos, tras al menos 3 meses de anticoagulacion eficaz. La GAMMAGRAFIA de ventilacion y perfusion es la prueba de cribado y es mas sensible que la angiotomografia: un estudio de perfusion normal descarta el diagnostico, una angiotomografia normal NO. Ver la Figura 2 de Definicion.',
      laboratorio: 'Estudio de trombofilia y anticuerpos antifosfolipido. Peptido natriuretico. Hemograma y funcion hepatica y renal para la valoracion prequirurgica.',
      imagen: 'Gammagrafia con defectos segmentarios en cu&#241;a no coincidentes. Angiotomografia con material adherido a la pared, bandas, membranas, estenosis y dilataciones postestenoticas, y circulacion bronquial hipertrofiada. Angiografia pulmonar convencional en el centro experto para definir la operabilidad.',
      complementarios: 'Valoracion OBLIGATORIA por un equipo multidisciplinar de centro experto (cirujano, hemodinamista, radiologo y clinico), que es quien decide la operabilidad. Un paciente considerado inoperable en un centro puede no serlo en otro con mas experiencia.',
      dx_diferencial: 'Embolia pulmonar aguda o subaguda, hipertension arterial pulmonar del grupo 1, arteritis de Takayasu con afectacion pulmonar, sarcoma de la arteria pulmonar (que puede imitar exactamente el cuadro), mediastinitis fibrosante y compresion extrinseca tumoral.',
      tx_medico: 'ANTICOAGULACION INDEFINIDA en todos los pacientes, tradicionalmente con antagonista de la vitamina K, y obligatoriamente con el en el sindrome antifosfolipido. Oxigeno si hay hipoxemia, rehabilitacion y tratamiento de la insuficiencia cardiaca derecha.',
      tx_farmacologico: 'RIOCIGUAT en la enfermedad inoperable o en la hipertension pulmonar que persiste tras la endarterectomia, que es la unica indicacion aprobada de un farmaco especifico en este grupo. Treprostinil subcutaneo en casos seleccionados. El tratamiento medico NUNCA debe sustituir a la valoracion quirurgica ni retrasarla.',
      tx_intervencionista: 'ENDARTERECTOMIA PULMONAR: es el tratamiento de eleccion y puede ser CURATIVA, normalizando la hemodinamica. Se realiza en centros con volumen suficiente y bajo parada circulatoria en hipotermia profunda. ANGIOPLASTIA PULMONAR CON BALON para la enfermedad distal no accesible a la cirugia o para la hipertension residual, en sesiones sucesivas. Trasplante si todo lo anterior fracasa.',
      criterios_uci: 'Fallo derecho agudo y el posoperatorio de la endarterectomia, que tiene complicaciones propias como el edema por reperfusion y el robo vascular.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Enfermedad inoperable con mala respuesta al tratamiento medico y a la angioplastia.',
      seguimiento_hospitalario: 'Posoperatorio en centro experto. Vigilar el edema por reperfusion, la hemorragia y la hipertension pulmonar residual.',
      seguimiento_ambulatorio: 'Cateterismo de control tras la cirugia o la angioplastia. Anticoagulacion indefinida sin excepciones. Seguimiento a largo plazo por la posibilidad de hipertension residual, que aparece en una proporcion no despreciable y que responde al riociguat.',
      pronostico: 'Excelente si se opera y la enfermedad es proximal: la endarterectomia puede devolver al paciente a una vida normal. Pesimo si no se diagnostica, y ese es el argumento definitivo para no saltarse nunca la gammagrafia en una hipertension pulmonar sin explicar.',
      algoritmo: ['Gammagrafia de ventilacion y perfusion en TODA hipertension pulmonar sin explicar', 'Recordar que una angiotomografia normal NO descarta el diagnostico', 'Anticoagular de forma eficaz al menos 3 meses antes de confirmarlo', 'Confirmar con cateterismo derecho el perfil precapilar', 'Angiotomografia y angiografia para definir la anatomia', 'Remitir SIEMPRE a un equipo multidisciplinar de centro experto', 'Endarterectomia pulmonar si es operable: puede ser curativa', 'Angioplastia con balon en la enfermedad distal o residual', 'Riociguat si es inoperable o si persiste tras la cirugia', 'Anticoagulacion indefinida y seguimiento hemodinamico a largo plazo']
    },
    {
      nombre: 'Fallo agudo del ventriculo derecho',
      color: '#8c1f3d',
      definicion: 'Descompensacion aguda de la funcion del ventriculo derecho en un paciente con hipertension pulmonar, con congestion sistemica y bajo gasto. Es la forma en que mata esta enfermedad y una de las situaciones de mayor mortalidad de la medicina interna.',
      fisiopatologia: 'El ventriculo derecho es una camara de pared fina dise&#241;ada para una circulacion de baja presion y muy sensible a los aumentos de poscarga. Cuando claudica se entra en una espiral: se dilata, el tabique se desplaza y compromete el llenado del izquierdo (interdependencia ventricular), cae el gasto y con el la presion aortica, lo que reduce la perfusion CORONARIA del propio ventriculo derecho, que se isquemia y bombea aun peor. Entender esa espiral es lo que explica todas las decisiones terapeuticas: mantener la presion arterial es prioritario, y todo lo que aumente la poscarga pulmonar o reduzca la perfusion coronaria empeora el cuadro.',
      epidemiologia: 'Es la causa de muerte mas frecuente en la hipertension arterial pulmonar. La mortalidad hospitalaria del episodio que requiere cuidados intensivos es muy alta, y aumenta con el numero de organos afectados y con la necesidad de vasopresores.',
      factores_riesgo: ['Infeccion, que es el desencadenante mas frecuente', 'Interrupcion o mala adherencia al tratamiento especifico', 'Arritmia supraventricular, especialmente el flutter auricular', 'Anemia y ferropenia', 'Cirugia y anestesia general', 'Embarazo y parto', 'Embolia pulmonar sobrea&#241;adida', 'Sobrecarga de volumen o de sal', 'Farmacos inotropos negativos y vasodilatadores sistemicos', 'Progresion natural de la enfermedad de base'],
      clinica: 'Ingurgitacion yugular marcada con onda v, hepatomegalia pulsatil dolorosa, ascitis, edemas, oliguria, hipotension, frialdad, obnubilacion y disnea de reposo. La ictericia y la elevacion de transaminasas por congestion hepatica son signos de gravedad. La aparicion de una arritmia supraventricular en este contexto es una urgencia, porque la perdida de la contribucion auricular se tolera muy mal.',
      criterios_dx: 'Clinico, apoyado en el ecocardiograma (ventriculo derecho dilatado e hipocontractil, tabique desplazado, vena cava dilatada sin colapso) y en los marcadores de disfuncion organica. La monitorizacion invasiva con cateter de arteria pulmonar puede ser util en el paciente inestable en centro experto.',
      laboratorio: 'Peptido natriuretico, troponina, lactato, funcion renal y hepatica, y gasometria con saturacion venosa central. El lactato elevado y la saturacion venosa central baja indican bajo gasto y peor pronostico. Buscar activamente el desencadenante: hemograma, reactantes y cultivos.',
      imagen: 'Ecocardiograma urgente para valorar el ventriculo derecho, el tabique, el derrame pericardico y la vena cava. Angiotomografia si se sospecha embolia sobrea&#241;adida. Radiografia y ecografia para buscar el foco infeccioso.',
      complementarios: 'Monitorizacion continua, control estricto de diuresis y balance, y valoracion precoz por un centro experto en hipertension pulmonar, porque las decisiones aqui son contraintuitivas y la experiencia cambia el resultado.',
      dx_diferencial: 'Taponamiento cardiaco, infarto del ventriculo derecho, embolia pulmonar aguda masiva, neumotorax a tension, sepsis con disfuncion miocardica y pericarditis constrictiva.',
      tx_medico: 'Cuatro frentes a la vez. <strong>Tratar el desencadenante</strong>, sobre todo la infeccion y la arritmia (donde se busca restaurar el ritmo sinusal, porque la contribucion auricular es critica). <strong>Optimizar la volemia</strong>, que casi siempre significa DEPLECIONAR con diuretico intravenoso: la sobrecarga distiende el ventriculo derecho y empeora la interdependencia, aunque en el paciente hipovolemico un volumen prudente puede ayudar. <strong>Mantener la presion arterial</strong> con NORADRENALINA, que preserva la perfusion coronaria del ventriculo derecho. <strong>Evitar la hipoxemia, la hipercapnia y la acidosis</strong>, que aumentan la resistencia pulmonar.',
      tx_farmacologico: 'Noradrenalina como vasopresor de eleccion. Dobutamina o levosimendan como inotropo si el gasto es bajo, con precaucion por la hipotension. Mantener y optimizar el tratamiento especifico de la hipertension pulmonar, y valorar a&#241;adir prostaciclina parenteral. Oxido nitrico inhalado o prostaciclina nebulizada para bajar la poscarga sin efecto sistemico. NUNCA retirar bruscamente el tratamiento especifico.',
      tx_intervencionista: 'Soporte circulatorio con oxigenacion por membrana extracorporea venoarterial como puente a la recuperacion o al trasplante, en centros expertos. Septostomia auricular como puente. La intubacion y la ventilacion con presion positiva son PELIGROSAS porque reducen la precarga y aumentan la poscarga pulmonar: se evitan mientras sea posible, y si son inevitables se hacen con induccion cuidadosa y por manos expertas.',
      criterios_uci: 'Practicamente todos los casos. La induccion anestesica y la ventilacion mecanica pueden precipitar una parada, de modo que la decision de intubar debe tomarla alguien con experiencia en hipertension pulmonar.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'El episodio de fallo derecho es en si mismo un criterio para acelerar la valoracion de trasplante.',
      seguimiento_hospitalario: 'Monitorizacion estrecha de perfusion, diuresis y funcion organica. Reevaluar a diario el balance, que es la decision mas dificil y la que mas se equivoca en los dos sentidos.',
      seguimiento_ambulatorio: 'Tras el alta, reestratificar el riesgo y escalar el tratamiento: un episodio de fallo derecho reclasifica al paciente como de riesgo alto con independencia del resto de las variables.',
      pronostico: 'Muy malo. La mortalidad hospitalaria es elevada y el episodio marca un antes y un despues en la enfermedad: la supervivencia al a&#241;o cae de forma marcada y obliga a replantear todo el plan terapeutico, incluido el trasplante.',
      algoritmo: ['Reconocer los signos: ingurgitacion, hepatomegalia pulsatil, oliguria e hipotension', 'Buscar y tratar el DESENCADENANTE: infeccion, arritmia, anemia, mala adherencia', 'Ecocardiograma urgente y contacto con el centro experto', 'Depleccionar con diuretico intravenoso si hay sobrecarga', 'Noradrenalina para mantener la perfusion coronaria del ventriculo derecho', 'Inotropo si el gasto es bajo, con precaucion', 'Corregir hipoxemia, hipercapnia y acidosis', 'Restaurar el ritmo sinusal si hay arritmia supraventricular', 'NO retirar el tratamiento especifico y valorar a&#241;adir prostaciclina parenteral', 'EVITAR la intubacion mientras sea posible; si es inevitable, por manos expertas']
    },
    {
      nombre: 'Grupo 5 y situaciones especiales',
      color: '#6b4a2e',
      definicion: 'Hipertension pulmonar de mecanismo no aclarado o multifactorial (grupo 5), junto con las situaciones que cambian el manejo de cualquier paciente con hipertension pulmonar: embarazo, cirugia, altitud y viaje.',
      fisiopatologia: 'En el grupo 5 coexisten mecanismos: compresion extrinseca, infiltracion, hiperaflujo, obstruccion, componente poscapilar y vasoconstriccion, en proporciones distintas segun la enfermedad. En las situaciones especiales, el problema comun es que el ventriculo derecho no puede aumentar el gasto cuando se le exige: el embarazo aumenta el volumen circulante y el gasto en un 50%, la anestesia general reduce la precarga y aumenta la poscarga pulmonar, y la altitud a&#241;ade vasoconstriccion hipoxica.',
      epidemiologia: 'El grupo 5 es heterogeneo y poco frecuente en conjunto, pero cada una de sus causas importa en su especialidad. La mortalidad materna en la hipertension arterial pulmonar, aunque ha mejorado en centros expertos, sigue siendo inaceptablemente alta, y la mortalidad perioperatoria de la cirugia no cardiaca en estos pacientes es varias veces la de la poblacion general.',
      factores_riesgo: ['Anemia hemolitica cronica y drepanocitosis', 'Sindromes mieloproliferativos y esplenectomia', 'Sarcoidosis con afectacion vascular o mediastinica', 'Histiocitosis de celulas de Langerhans y linfangioleiomiomatosis', 'Enfermedad de Gaucher y trastornos tiroideos', 'Insuficiencia renal cronica en dialisis', 'Mediastinitis fibrosante y compresion tumoral', 'Embarazo en una mujer con hipertension arterial pulmonar', 'Cirugia mayor y anestesia general', 'Ascenso a altitud o vuelo prolongado sin oxigeno'],
      clinica: 'La de la enfermedad de base mas los sintomas de hipertension pulmonar. En el embarazo, el deterioro se concentra en el segundo y tercer trimestre y sobre todo en el PERIPARTO Y EL POSPARTO INMEDIATO, cuando la autotransfusion uterina y los cambios de volumen sobrecargan un ventriculo derecho que no tiene reserva.',
      criterios_dx: 'Los mismos criterios hemodinamicos, con la diferencia de que en el grupo 5 la clasificacion es de exclusion y con frecuencia el mecanismo es mixto. En el embarazo, el ecocardiograma es la herramienta principal porque el cateterismo se reserva a lo imprescindible.',
      laboratorio: 'Segun la enfermedad de base: hemograma con estudio de hemolisis, funcion tiroidea, enzimas lisosomales, funcion renal. Peptido natriuretico seriado en el embarazo, que es una herramienta util de vigilancia.',
      imagen: 'Ecocardiograma seriado. En el grupo 5, tomografia para valorar compresion extrinseca, mediastinitis fibrosante o afectacion parenquimatosa. Gammagrafia para descartar componente tromboembolico, frecuente en la drepanocitosis y en los mieloproliferativos.',
      complementarios: 'Consulta preconcepcional en toda mujer en edad fertil con hipertension pulmonar. Valoracion preoperatoria en centro experto para cualquier cirugia no urgente. Prueba de simulacion de altitud o valoracion de la necesidad de oxigeno en vuelo.',
      dx_diferencial: 'Antes de aceptar el grupo 5 hay que haber descartado los cuatro anteriores, porque muchas de estas enfermedades pueden producir hipertension pulmonar por mecanismos clasificables: la sarcoidosis puede dar grupo 3 por fibrosis, la drepanocitosis puede dar grupo 4 por tromboembolia, y la dialisis puede dar grupo 2 por sobrecarga.',
      tx_medico: 'Tratar la enfermedad de base, que es lo principal: quimioterapia en el mieloproliferativo, tratamiento de la drepanocitosis, corticoide en la sarcoidosis, optimizacion de la dialisis. En el embarazo, seguimiento en centro experto con equipo multidisciplinar y planificacion del parto con antelacion.',
      tx_farmacologico: 'En el grupo 5, el vasodilatador se decide caso a caso en centro experto y NO se asume por analogia con el grupo 1. En el embarazo, mantener el tratamiento especifico ajustando los farmacos teratogenos: los antagonistas del receptor de la endotelina y el riociguat estan CONTRAINDICADOS, y se emplean inhibidores de la fosfodiesterasa 5 y prostaciclinas.',
      tx_intervencionista: 'Segun la causa en el grupo 5. En el embarazo, parto programado en centro experto con anestesia regional cuidadosa y evitando la anestesia general y la maniobra de Valsalva prolongada, con vigilancia estrecha en el posparto inmediato, que es el momento de maximo riesgo.',
      criterios_uci: 'Toda gestante con hipertension arterial pulmonar en el periparto debe estar en un entorno con cuidados intensivos disponibles. En la cirugia, ingreso posoperatorio en una unidad de vigilancia con monitorizacion invasiva.',
      criterios_tips: 'La derivacion portosistemica esta CONTRAINDICADA en la hipertension portopulmonar moderada o grave, porque aumenta el flujo pulmonar y puede precipitar el fallo derecho.',
      criterios_trasplante: 'Segun la enfermedad de base y la gravedad de la hipertension pulmonar.',
      seguimiento_hospitalario: 'En la gestante, vigilancia estrecha en el periparto y en las 48 a 72 horas siguientes. En el posoperatorio, evitar la hipoxemia, la hipercapnia, el dolor y la sobrecarga de volumen, y mantener el tratamiento especifico.',
      seguimiento_ambulatorio: 'Anticoncepcion eficaz y consejo reproductivo en toda mujer en edad fertil con hipertension arterial pulmonar, revisado en cada consulta. Consejo sobre altitud, viaje y necesidad de oxigeno en vuelo.',
      pronostico: 'Muy variable en el grupo 5 segun la enfermedad de base. En el embarazo, la mortalidad materna sigue siendo muy alta pese a la mejora en centros expertos, lo que sostiene la recomendacion de evitarlo y de ofrecer interrupcion cuando se produce.',
      algoritmo: ['Descartar los grupos 1 a 4 antes de aceptar el grupo 5', 'Identificar y tratar la enfermedad de base', 'No asumir que el vasodilatador funciona por analogia con el grupo 1', 'En toda mujer en edad fertil: anticoncepcion eficaz y consejo reproductivo', 'Si hay embarazo: derivacion inmediata a centro experto y ofrecer interrupcion', 'Si continua: retirar endotelina y riociguat, mantener fosfodiesterasa y prostaciclinas', 'Planificar el parto con antelacion, con anestesia regional y vigilancia posparto', 'Antes de cualquier cirugia no urgente: valoracion en centro experto', 'Evitar hipoxemia, hipercapnia, dolor y sobrecarga en el perioperatorio', 'Consejo sobre altitud y oxigeno en vuelos prolongados']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La hipertension pulmonar se diagnostica tarde porque su sintoma es una disnea de esfuerzo sin hallazgos, y se trata mal porque la clasificacion en grupos se salta con facilidad. Los dos errores caros son dar vasodilatadores a quien no debe recibirlos y no pedir la gammagrafia que descartaria el unico grupo curable. Lo que sigue es la lista de comprobacion.',
    parametros: ['El ecocardiograma ESTIMA la presion, no la mide: da una probabilidad, no un diagnostico', 'El cateterismo derecho es obligatorio para confirmar, clasificar el perfil y medir la vasorreactividad', 'Umbrales de 2022: presion media mayor de 20 mmHg, y resistencia mayor de 2 unidades Wood para la forma precapilar', 'Buscar PRIMERO los grupos 2 y 3, que explican la gran mayoria de los casos', 'GAMMAGRAFIA de ventilacion y perfusion en toda hipertension pulmonar sin explicar: descarta el unico grupo curable', 'Una angiotomografia normal NO descarta la hipertension pulmonar tromboembolica cronica', 'NO dar vasodilatadores pulmonares en el grupo 2 (producen edema pulmonar) ni en el grupo 3 (empeoran el intercambio)', 'NO dar antagonistas del calcio sin prueba de vasorreactividad: pueden producir colapso hemodinamico', 'La prueba de vasorreactividad solo se hace en la forma idiopatica, hereditaria o por farmacos', 'Derivar a centro experto ANTES del cateterismo, no despues', 'En el grupo 1, tratar por RIESGO y no por presion, reestratificando cada 3 a 6 meses', 'En el fallo derecho agudo: tratar el desencadenante, depleccionar, noradrenalina, y evitar la intubacion mientras sea posible'],
    criterios_uci_general: 'Fallo agudo del ventriculo derecho con hipotension, oliguria o hipoperfusion; arritmia supraventricular mal tolerada; y el periparto de toda gestante con hipertension arterial pulmonar. La induccion anestesica y la ventilacion con presion positiva pueden precipitar una parada, de modo que la decision de intubar debe tomarla alguien con experiencia en hipertension pulmonar.',
    criterios_tips_general: 'La derivacion portosistemica intrahepatica transyugular esta CONTRAINDICADA en la hipertension portopulmonar moderada o grave: aumenta el flujo pulmonar y puede precipitar el fallo del ventriculo derecho.',
    criterios_trasplante_general: 'Remitir a trasplante pulmonar o cardiopulmonar si no se alcanza el riesgo bajo con tratamiento combinado optimizado, si hay progresion pese al tratamiento, si aparece fallo derecho o si se necesita prostaciclina parenteral. La remision debe ser precoz porque la mortalidad en lista es alta.',
    prevencion: 'Primaria: evitar anorexigenos y anfetaminas, tratar bien la embolia pulmonar aguda con anticoagulacion adecuada y duracion suficiente, y controlar la enfermedad pulmonar y cardiaca de base. Secundaria: cribado ANUAL en la esclerosis sistemica y cribado dirigido en portadores de mutaciones conocidas, en la hipertension portal candidata a trasplante hepatico y en el seguimiento tras una embolia pulmonar con disnea persistente. Terciaria: adherencia al tratamiento especifico (cuya interrupcion brusca puede ser mortal), vacunacion, correccion de la ferropenia, anticoncepcion eficaz y consejo sobre altitud, vuelo y cirugia.'
  }
};

export const compCites = {
  'Hipertension arterial pulmonar (grupo 1)': [1, 3, 4, 5, 8, 11],
  'HP por cardiopatia izquierda (grupo 2)': [1, 16],
  'HP por enfermedad pulmonar e hipoxia (grupo 3)': [1, 7, 17],
  'HP tromboembolica cronica (grupo 4)': [6, 9, 10, 15],
  'Fallo agudo del ventriculo derecho': [13, 14],
  'Grupo 5 y situaciones especiales': [1, 2, 12]
};
export const estigmasTitulo = 'Signos de la hipertension pulmonar y del fallo derecho, del mas precoz al de peor pronostico';
export const estigmas = [
  { s: 'Disnea de esfuerzo sin hallazgos que la expliquen', p: 'El sintoma inicial', photo: null, desc: 'Auscultacion normal, radiografia poco alterada y espirometria aceptable en un paciente que se ahoga al subir escaleras. Es la razon por la que el diagnostico se retrasa a&#241;os y por la que hay que pensar en esta enfermedad cuando la disnea no encaja con nada.' },
  { s: 'Segundo tono pulmonar reforzado y palpable', p: '~80%', photo: null, desc: 'El componente pulmonar del segundo tono se hace intenso y se palpa en el segundo espacio intercostal izquierdo. Es el signo mas caracteristico de la exploracion y se busca a proposito, porque no salta a la vista si no se piensa en el.' },
  { s: 'Onda a prominente en el pulso venoso yugular', p: '~50%', photo: null, desc: 'Refleja la contraccion auricular derecha contra un ventriculo rigido e hipertrofiado. Cuando aparece la insuficiencia tricuspidea, la onda a deja paso a una onda v grande, que marca el paso a la fase de fallo.' },
  { s: 'Latido paraesternal izquierdo', p: '~40%', photo: null, desc: 'Impulso sostenido en el borde esternal izquierdo bajo, producido por la hipertrofia del ventriculo derecho. Se palpa mejor con el talon de la mano y en espiracion mantenida.' },
  { s: 'Soplo de insuficiencia tricuspidea', p: '~60%', photo: null, desc: 'Holosistolico en el borde esternal izquierdo que aumenta con la inspiracion (signo de Rivero-Carvallo). Su intensidad no se correlaciona con la presion pulmonar, pero su velocidad en el Doppler es la base de la estimacion ecocardiografica.' },
  { s: 'Sincope o presincope de esfuerzo', p: 'Signo de gravedad', photo: null, desc: 'Significa que el gasto cardiaco NO PUEDE AUMENTAR con el ejercicio. Es uno de los marcadores de riesgo alto y, por si solo, motivo de remision urgente a un centro experto: no es un sincope vasovagal por mucho que lo parezca.' },
  { s: 'Dolor toracico de esfuerzo', p: '~30%', photo: null, desc: 'Isquemia del ventriculo derecho hipertrofiado, o compresion del tronco coronario izquierdo por una arteria pulmonar muy dilatada, que es una causa rara pero tratable con revascularizacion percutanea.' },
  { s: 'Ingurgitacion yugular con onda v', p: 'Fase de fallo derecho', photo: null, desc: 'La onda v grande traduce la insuficiencia tricuspidea significativa. Junto con la hepatomegalia pulsatil marca el paso de la hipertension pulmonar compensada al fallo derecho, que es un cambio pronostico mayor.' },
  { s: 'Hepatomegalia pulsatil y reflujo hepatoyugular', p: 'Fallo derecho', photo: null, desc: 'El higado transmite la onda de la insuficiencia tricuspidea. La congestion hepatica cronica produce elevacion de transaminasas, colestasis y, con el tiempo, cirrosis cardiaca.' },
  { s: 'Ascitis y edemas', p: 'Fallo derecho avanzado', photo: null, desc: 'Congestion sistemica establecida. En este punto la funcion renal y hepatica se deterioran, y esa disfuncion organica es uno de los principales determinantes del pronostico y de la elegibilidad para trasplante.' },
  { s: 'Derrame pericardico', p: 'Mal pronostico', photo: null, desc: 'Hallazgo ecocardiografico que traduce presion auricular derecha elevada y que se asocia de forma consistente a peor supervivencia. Rara vez produce taponamiento, y drenarlo no mejora nada y puede desestabilizar al paciente.' },
  { s: 'Acropaquias y cianosis', p: 'En cortocircuito o hipoxemia', photo: null, desc: 'Sugieren cardiopatia congenita con cortocircuito derecha-izquierda (sindrome de Eisenmenger) o enfermedad pulmonar avanzada del grupo 3. En la hipertension arterial pulmonar idiopatica no complicada son raras.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Definicion hemodinamica de 2022 (calculadora disponible)': [1, 2],
  'Clasificacion clinica en cinco grupos': [1, 2],
  'Probabilidad ecocardiografica (calculadora disponible)': [1],
  'Estratificacion de riesgo en tres estratos (calculadora disponible)': [1, 18],
  'Estratificacion en cuatro estratos para el seguimiento': [11],
  'Prueba de vasorreactividad aguda (calculadora disponible)': [8, 1],
  'Clase funcional de la Organizacion Mundial de la Salud': [1]
};
export const escalaCalc = {
  'Definicion hemodinamica de 2022 (calculadora disponible)': 'perfil-hemodinamico',
  'Probabilidad ecocardiografica (calculadora disponible)': 'probabilidad-eco',
  'Estratificacion de riesgo en tres estratos (calculadora disponible)': 'riesgo-hap',
  'Prueba de vasorreactividad aguda (calculadora disponible)': 'vasorreactividad'
};
export const compGroups = [
  { name: 'El grupo con tratamiento propio', items: ['Hipertension arterial pulmonar (grupo 1)'] },
  { name: 'Los grupos frecuentes y el curable', items: ['HP por cardiopatia izquierda (grupo 2)', 'HP por enfermedad pulmonar e hipoxia (grupo 3)', 'HP tromboembolica cronica (grupo 4)'] },
  { name: 'La urgencia y lo demas', items: ['Fallo agudo del ventriculo derecho', 'Grupo 5 y situaciones especiales'] }
];
export const complicacionesIntro = 'La primera ficha es el grupo 1, el unico con tratamiento vasodilatador propio y el que organiza todo el vocabulario del tema. Las tres siguientes son los grupos que hay que descartar antes: el 2 y el 3, que son los frecuentes y en los que ese mismo tratamiento hace da&#241;o, y el 4, que es raro pero es el unico que se puede curar con cirugia y por eso justifica que la gammagrafia sea obligatoria. La quinta ficha es la forma en que esta enfermedad mata, el fallo agudo del ventriculo derecho, donde casi todas las decisiones son contraintuitivas. Y la ultima recoge el grupo 5 junto con las situaciones que cambian el manejo de cualquier paciente: embarazo, cirugia y altitud.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Grupos y complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'HIPERTENSION PULMONAR', color: '#7a2f5c', target: 'definicion' },
  branches: [
    { title: 'HEMODINAMICA', sub: 'Tres cifras y cuatro perfiles', color: '#7a2f5c', target: 'clasificacion', leaves: [
      { title: 'Media mayor de 20 mmHg', sub: 'Bajo desde 2022', color: '#7a2f5c', target: 'clasificacion' },
      { title: 'Enclavamiento', sub: 'Precapilar o poscapilar', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Resistencia mayor de 2', sub: 'Enfermedad del vaso', color: '#8c3a34', target: 'clasificacion' },
      { title: 'El eco estima, no mide', sub: 'Da probabilidad', color: '#8a6a1f', target: 'diagnostico' }
    ] },
    { title: 'ALGORITMO', sub: 'Lo frecuente primero', color: '#3f6b52', target: 'diagnostico', leaves: [
      { title: 'Descartar grupos 2 y 3', sub: 'Son la gran mayoria', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Gammagrafia obligatoria', sub: 'Descarta el unico curable', color: '#7a2f5c', target: 'complicaciones' },
      { title: 'Angiotomografia normal', sub: 'NO descarta el grupo 4', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Centro experto', sub: 'Antes del cateterismo', color: '#3f6b52', target: 'seguimiento' }
    ] },
    { title: 'TRATAMIENTO', sub: 'Por riesgo, no por presion', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Doble terapia de inicio', sub: 'Endotelina mas fosfodiesterasa', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Riesgo alto', sub: 'Prostaciclina parenteral ya', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Nada de vasodilatadores', sub: 'En los grupos 2 y 3', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Fallo derecho agudo', sub: 'Noradrenalina y no intubar', color: '#8c1f3d', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2], no_invasivos: [1, 8, 10, 11], imagen: [1, 9, 10] };
export const clasificacionCite = [1, 2, 11];
export const seguimientoCite = [1, 14];
