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
  titulo: 'Hipertensión Pulmonar',
  subtitulo: 'Módulo 54 · Medicina Interna',
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
    <strong style="color:#7a2f5c;">La guía de 2022 bajo los dos umbrales.</strong> <span style="color:var(--ink-dim);">La presión arterial pulmonar media pasa de <strong>25 o más</strong> a <strong>mayor de 20 mmHg</strong>, y la resistencia vascular pulmonar de <strong>mayor de 3</strong> a <strong>mayor de 2 unidades Wood</strong>. El motivo es que los pacientes en esa zona intermedia ya tienen peor pronóstico, y quedaban fuera.</span>
  </div>
  <div style="border:1px solid var(--line);border-radius:7px;padding:6px 9px;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Las tres cifras del cateterismo derecho, y lo que significa cada una.</strong> La <strong>presión arterial pulmonar media</strong> dice si hay hipertensión pulmonar. La <strong>presión de enclavamiento pulmonar</strong> dice si el problema viene de aguas arriba (el corazón izquierdo) o de aguas abajo. Y la <strong>resistencia vascular pulmonar</strong> dice si hay además enfermedad del propio vaso, y es la que decide el tratamiento.
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:132px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">PRECAPILAR</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Media mayor de 20, enclavamiento <strong style="color:var(--ink);">15 o menos</strong> y resistencia <strong style="color:var(--ink);">mayor de 2</strong>. El corazón izquierdo esta bien y el problema esta en el vaso pulmonar o en el pulmón: grupos <strong>1, 3, 4</strong> y parte del 5. Es el perfil que puede beneficiarse de tratamiento vasodilatador específico, y solo en el grupo 1.</div>
    </div>
    <div style="display:grid;grid-template-columns:132px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">POSCAPILAR<br>AISLADA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Media mayor de 20, enclavamiento <strong style="color:var(--ink);">mayor de 15</strong> y resistencia <strong style="color:var(--ink);">2 o menos</strong>. Es transmisión pasiva de la presión del corazón izquierdo: <strong>grupo 2</strong>, el más frecuente de todos. Se trata la cardiopatía, y el vasodilatador pulmonar esta contraindicado.</div>
    </div>
    <div style="display:grid;grid-template-columns:132px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a2e22;border:1px solid #6b4a2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a2e;">COMBINADA<br>pre y poscapilar</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Media mayor de 20, enclavamiento <strong style="color:var(--ink);">mayor de 15</strong> y resistencia <strong style="color:var(--ink);">mayor de 2</strong>. La cardiopatía izquierda ha producido además remodelado del vaso pulmonar. Peor pronóstico que la aislada, y sigue sin haber indicación establecida de vasodilatador.</div>
    </div>
    <div style="display:grid;grid-template-columns:132px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">DE ESFUERZO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Recuperada en 2022: pendiente de presión media frente a gasto cardiaco <strong style="color:var(--ink);">mayor de 3 mmHg por litro y minuto</strong> entre el reposo y el ejercicio. Explica la disnea de esfuerzo de pacientes con hemodinámica normal en reposo.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">El cateterismo derecho sigue siendo obligatorio</strong> para confirmar el diagnóstico, clasificar el perfil y medir la vasorreactividad. La ecocardiografía estima, no mide: da una <strong>probabilidad</strong>, y sobre esa probabilidad se decide a quien se cateteriza, no que tratamiento se pone.
  </div>
</div>`;

const algoritmoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">El orden importa: primero lo frecuente, después lo tratable, y solo al final lo raro.</strong> <span style="color:var(--ink-dim);">Los grupos 2 y 3 explican la gran mayoría de las hipertensiones pulmonares. Buscar una hipertensión arterial pulmonar antes de haber descartado una insuficiencia cardiaca o una EPOC es invertir el algoritmo.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">1. SOSPECHA y<br>ECOCARDIOGRAMA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Disnea de esfuerzo sin explicación, síncope de esfuerzo o signos de fallo derecho. El ecocardiograma asigna una <strong style="color:var(--ink);">probabilidad baja, intermedia o alta</strong> combinando la velocidad de regurgitación tricuspídea con otros signos de ventrículo derecho, arteria pulmonar y vena cava. <strong>No mide la presión: la estima.</strong></div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">2. BUSCAR<br>GRUPOS 2 y 3</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Son la causa en la gran mayoría de los casos. Cardiopatía izquierda (valvulopatía, disfunción sistólica o diastólica, fibrilación auricular) y enfermedad pulmonar o hipoxia crónica (EPOC, EPID, apnea del sueño, hipoventilación). <strong style="color:var(--ink);">Si se identifican y explican el cuadro, se tratan y ahi termina el algoritmo</strong>.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#7a2f5c22;border:1px solid #7a2f5c;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#7a2f5c;">3. GAMMAGRAFÍA<br>DE V/Q</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:#7a2f5c;">OBLIGATORIA en toda hipertensión pulmonar sin explicar</strong>, porque descarta el grupo 4, que es el único POTENCIALMENTE CURABLE con cirugía. Es <strong style="color:var(--ink);">más sensible que la angiotomografia</strong> para la enfermedad tromboembólica crónica: una angiotomografia normal NO la descarta. Un estudio de perfusión normal si la descarta.</div>
    </div>
    <div style="display:grid;grid-template-columns:112px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">4. CENTRO EXPERTO<br>y CATETERISMO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Si tras lo anterior persiste la sospecha de grupo 1 o 4, <strong style="color:var(--ink);">derivar antes del cateterismo</strong>, no después. El cateterismo derecho confirma, clasifica el perfil hemodinámico y mide la vasorreactividad, y su rendimiento y su seguridad dependen de la experiencia del centro.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Estudio etiológico del grupo 1, que se hace en paralelo.</strong> Serología de VIH, pruebas hepáticas y ecografía abdominal (hipertensión portopulmonar), autoinmunidad con anticentromero y anti-Scl-70 (esclerosis sistémica, que obliga a cribado ANUAL), historia de anorexigenos, anfetaminas y algunos inhibidores de tirosina cinasa, y estudio genético con consejo si hay historia familiar (BMPR2).
  </div>
</div>`;

const gruposHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #7a2f5c;border-radius:8px;padding:5px 9px;background:#7a2f5c12;margin-bottom:6px;">
    <strong style="color:#7a2f5c;">Clasificar en grupo no es un ejercicio académico: decide si el vasodilatador ayuda, no hace nada o hace daño.</strong>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">GRUPO 1<br>arterial</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Idiopática, hereditaria, por fármacos y tóxicos, y asociada a conectivopatia, VIH, hipertensión portal, cardiopatía congénita o esquistosomiasis. <strong style="color:#3f6b52;">Es el ÚNICO grupo con tratamiento vasodilatador específico establecido.</strong> Enfermedad del propio vaso pequeño, con proliferación y remodelado.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">GRUPO 2<br>izquierdo</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Por cardiopatía izquierda: es el <strong style="color:var(--ink);">más frecuente de todos</strong>. Insuficiencia cardiaca con fracción reducida o preservada, valvulopatía. Se trata la cardiopatía. <strong style="color:#8c3a34;">El vasodilatador pulmonar es perjudicial</strong>: aumenta el flujo hacia un ventrículo izquierdo que no puede manejarlo y produce edema pulmonar.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">GRUPO 3<br>pulmonar</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Por enfermedad pulmonar o hipoxia: EPOC, EPID, síndromes combinados, apnea del sueño, hipoventilación, altitud. Se trata la enfermedad de base y se corrige la hipoxemia. <strong style="color:#8c3a34;">El vasodilatador empeora el intercambio</strong> al dilatar zonas mal ventiladas. Única excepción: <strong style="color:var(--ink);">treprostinil inhalado</strong> en la hipertensión pulmonar asociada a EPID.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#7a2f5c22;border:1px solid #7a2f5c;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#7a2f5c;">GRUPO 4<br>obstructiva</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Tromboembólica crónica y otras obstrucciones de la arteria pulmonar. <strong style="color:#3f6b52;">El único POTENCIALMENTE CURABLE</strong>: la endarterectomía pulmonar puede normalizar la hemodinámica. Anticoagulación indefinida en todos. Angioplastia con balón en la enfermedad distal y riociguat si es inoperable o persiste tras la cirugía.</div>
    </div>
    <div style="display:grid;grid-template-columns:96px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#6b4a2e22;border:1px solid #6b4a2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#6b4a2e;">GRUPO 5<br>multifactorial</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Mecanismo no claro o múltiple: enfermedades hematológicas (anemia hemolítica crónica, síndromes mieloproliferativos), sarcoidosis, histiocitosis, trastornos metabólicos, insuficiencia renal crónica en diálisis y mediastinitis fibrosante. Se trata la enfermedad de base; el vasodilatador se decide caso a caso en centro experto.</div>
    </div>
  </div>
</div>`;

const riesgoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3f6b52;border-radius:8px;padding:5px 9px;background:#3f6b5212;margin-bottom:6px;">
    <strong style="color:#3f6b52;">En la hipertensión arterial pulmonar el objetivo no es una cifra de presión: es llegar y mantenerse en RIESGO BAJO.</strong> <span style="color:var(--ink-dim);">Toda la estrategia terapéutica se organiza alrededor de esa idea, y se revisa cada 3 a 6 meses.</span>
  </div>
  <div style="border:1px solid var(--line);border-radius:7px;padding:6px 9px;margin-bottom:6px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Las tres variables que se usan en cada revisión</strong>: la <strong>clase funcional</strong> de la Organizacion Mundial de la Salud, la <strong>distancia en la marcha de 6 minutos</strong> y el <strong>péptido natriurético</strong>. En el diagnóstico se usan tres estratos (bajo, intermedio y alto) y se añaden datos de imagen y hemodinámica; en el seguimiento, cuatro estratos que separan el intermedio en bajo-intermedio y alto-intermedio, porque el pronóstico dentro de esa franja es muy distinto.
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">RIESGO BAJO<br>al diagnóstico</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Clase funcional I o II, marcha mayor de 440 metros y péptido natriurético bajo. <strong style="color:var(--ink);">Doble terapia oral inicial</strong>: antagonista del receptor de la endotelina más inhibidor de la fosfodiesterasa 5. La monoterapia ha quedado para casos muy concretos.</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">RIESGO<br>INTERMEDIO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Misma doble terapia oral inicial. En la revisión de los 3 a 6 meses, si no ha bajado a riesgo bajo, <strong style="color:var(--ink);">añadir un tercer fármaco</strong>: selexipag o un análogo de prostaciclina, o cambiar el inhibidor de fosfodiesterasa por riociguat. <strong>Sotatercept</strong> como añadido en el riesgo intermedio y alto.</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">RIESGO ALTO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Triple terapia inicial que incluya prostaciclina PARENTERAL</strong>, y remisión inmediata a trasplante pulmonar. No es momento de escalar poco a poco: el paciente en riesgo alto tiene una mortalidad al año muy elevada y el tiempo perdido no se recupera.</div>
    </div>
  </div>
  <div style="margin-top:6px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #5b4a86;border-radius:8px;padding:5px 8px;background:#5b4a8610;color:var(--ink-dim);">
      <strong style="color:#5b4a86;">La prueba de vasorreactividad.</strong> Solo en la hipertensión arterial pulmonar <strong>idiopática, hereditaria o por fármacos</strong>, nunca en las asociadas ni en otros grupos. Positiva si la presión media <strong>baja 10 mmHg o más hasta quedar en 40 o menos</strong> con gasto cardiaco conservado o aumentado. Esos pacientes reciben antagonista del calcio a dosis altas, pero solo alrededor de la mitad de ellos siguen respondiendo al año, de modo que hay que reevaluarlos.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Lo que NO se hace.</strong> Antagonistas del calcio empíricos sin prueba de vasorreactividad, que pueden producir colapso hemodinámico. Vasodilatadores pulmonares en los grupos 2 y 3. Anticoagulación sistemática en el grupo 1, que ya no se recomienda de forma general. Y embarazo: en la hipertensión arterial pulmonar la mortalidad materna sigue siendo muy alta y la anticoncepción eficaz es parte del tratamiento.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La hipertensión pulmonar no es una enfermedad sino un <strong>hallazgo hemodinámico</strong> compartido por situaciones muy distintas, desde una insuficiencia cardiaca hasta una arteriopatia pulmonar rara. Todo el tema se sostiene sobre dos preguntas: <strong>que perfil hemodinámico tiene</strong> y <strong>a que grupo clínico pertenece</strong>. De la respuesta depende algo muy concreto: si el tratamiento vasodilatador específico va a ayudar, no va a hacer nada o va a hacer daño.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La definición cambio en 2022, y a la baja.</strong></p>
<p style="margin:0 0 12px;">Durante décadas hizo falta una presión arterial pulmonar media de <strong>25 mmHg o más</strong>. La guía de 2022 la bajo a <strong>mayor de 20 mmHg</strong> y añadio a la definición de la forma precapilar una resistencia vascular pulmonar <strong>mayor de 2 unidades Wood</strong> (antes mayor de 3). El motivo no es afan clasificatorio: los pacientes que quedaban en esa franja intermedia ya tenian peor pronóstico que los normales, y con la definición antigua se les decia que estaban bien.</p>
${figBlock('Figura 1', 'La definición hemodinámica de 2022 y los cuatro perfiles', hemodinamicaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El algoritmo tiene un orden, y saltarselo es el error clásico.</strong></p>
<p style="margin:0 0 12px;">Ante un ecocardiograma que sugiere hipertensión pulmonar, la tentacion es pensar en la enfermedad rara. El orden correcto es el inverso: <strong>primero descartar los grupos 2 y 3</strong>, que explican la gran mayoría de los casos, y solo después seguir. Y hay un paso que no se puede omitir nunca: la <strong>gammagrafía de ventilación y perfusión</strong>, porque descarta el grupo 4, que es el único <strong>potencialmente curable con cirugía</strong>. Es más sensible que la angiotomografia para la enfermedad tromboembólica crónica, de modo que una angiotomografia normal no basta para descartarla.</p>
${figBlock('Figura 2', 'Algoritmo diagnóstico: lo frecuente primero y la gammagrafía siempre', algoritmoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Los cinco grupos, y por que importan tanto.</strong></p>
<p style="margin:0 0 12px;">La clasificación clínica agrupa las causas por mecanismo y por respuesta al tratamiento. El <strong>grupo 1</strong> es el único con tratamiento vasodilatador específico establecido. En el <strong>grupo 2</strong> ese mismo tratamiento produce edema pulmonar, porque aumenta el flujo hacia un ventrículo izquierdo que no puede manejarlo. En el <strong>grupo 3</strong> empeora el intercambio gaseoso al dilatar zonas mal ventiladas. Y el <strong>grupo 4</strong> tiene una cirugía que puede curarlo. Cuatro grupos, cuatro conductas incompatibles entre si.</p>
${figBlock('Figura 3', 'Los cinco grupos clínicos y que se hace en cada uno', gruposHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tratar por riesgo, no por presión.</strong></p>
<p style="margin:0 0 12px;">En la hipertensión arterial pulmonar el objetivo terapéutico no es una cifra de presión sino alcanzar y mantener el <strong>riesgo bajo</strong>, valorado con la clase funcional, la marcha de 6 minutos y el péptido natriurético. Lo que ha cambiado la práctica en la última década es la <strong>terapia combinada de inicio</strong> en lugar del escalado lento, y la reevaluación sistemática a los 3 a 6 meses para escalar si el paciente no ha llegado a riesgo bajo. Y lo que de verdad decide el pronóstico es el ventrículo derecho: la hipertensión pulmonar no mata por la presión, mata por el fallo del ventrículo que tiene que vencerla.</p>
${figBlock('Figura 4', 'Estratificación de riesgo y estrategia terapéutica en la HAP', riesgoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No diagnosticar hipertensión pulmonar solo con un ecocardiograma: estima, no mide. No saltarse la gammagrafía de ventilación y perfusión, ni fiarse de una angiotomografia normal para descartar el grupo 4. No dar vasodilatadores pulmonares en los grupos 2 y 3. No dar antagonistas del calcio sin prueba de vasorreactividad previa. No hacer la prueba de vasorreactividad fuera de la forma idiopática, hereditaria o por fármacos. No escalar lentamente en el paciente de riesgo alto, que necesita prostaciclina parenteral desde el principio. Y no dejar de hablar de anticoncepción con una mujer en edad fértil que tiene hipertensión arterial pulmonar.</p>`;

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
      tituloA: 'Hipertensión pulmonar establecida',
      tituloB: 'Fallo del ventrículo derecho',
      compensada: 'Disnea de esfuerzo progresiva SIN hallazgos que la expliquen en la auscultación ni en la radiografía, que es el motivo por el que el diagnóstico se retrasa años. Fatiga desproporcionada, dolor torácico de esfuerzo por isquemia del ventrículo derecho y, sobre todo, SÍNCOPE O PRESÍNCOPE DE ESFUERZO, que es un signo de gravedad porque significa que el gasto cardiaco no puede aumentar. En la exploración: segundo tono pulmonar reforzado y palpable, soplo de insuficiencia tricuspídea, latido paraesternal izquierdo y onda a prominente en el pulso venoso yugular.',
      descompensada: 'Ingurgitación yugular con onda v prominente, hepatomegalia pulsátil, reflujo hepatoyugular, ascitis y edemas. Hipotensión, oliguria, frialdad y deterioro del nivel de conciencia cuando el gasto cae. En este punto el paciente entra en una espiral: la hipotensión reduce la perfusión coronaria del ventrículo derecho, que se isquemia y bombea peor, lo que baja aun más la tensión. Es una situación de altísima mortalidad en la que las maniobras habituales de la insuficiencia cardiaca izquierda pueden empeorar las cosas.'
    },
    laboratorio: [
      { prueba: 'Péptido natriurético cerebral o su fragmento aminoterminal', utilidad: 'Marcador de sobrecarga del ventrículo derecho y una de las tres variables de la estratificación de riesgo. Se mide en el diagnóstico y en cada revisión: su descenso hacia valores bajos con el tratamiento es uno de los objetivos terapéuticos, y su ascenso anuncia el deterioro antes que los síntomas.' },
      { prueba: 'Serología de VIH y estudio hepático', utilidad: 'Obligados en todo grupo 1: la infección por VIH y la hipertensión portal (portopulmonar) son causas reconocidas y cambian el manejo. La ecografía abdominal con estudio del eje esplenoportal completa la búsqueda de hipertensión portal, que puede existir sin hepatopatía evidente.' },
      { prueba: 'Autoinmunidad completa', utilidad: 'Anticuerpos antinucleares, anticentromero y anti-Scl-70: la esclerosis sistémica es la conectivopatia que más se asocia y obliga a CRIBADO ANUAL de hipertensión pulmonar aunque el paciente este asintomático, porque el diagnóstico precoz mejora el pronóstico.' },
      { prueba: 'Estudio de trombofilia y anticuerpos antifosfolípido', utilidad: 'Ante sospecha de hipertensión pulmonar tromboembólica crónica. El síndrome antifosfolípido es una asociación clásica y su presencia refuerza la indicación de anticoagulación indefinida con antagonista de la vitamina K.' },
      { prueba: 'Gasometría arterial y función pulmonar completa', utilidad: 'Para valorar el grupo 3. Una DLCO desproporcionadamente baja en un paciente sin enfermedad parenquimatosa significativa apunta a enfermedad vascular pulmonar, y en la esclerosis sistémica es uno de los datos que más anticipan la hipertensión pulmonar.' },
      { prueba: 'Función renal, hepática y ácido úrico', utilidad: 'La congestión sistémica del fallo derecho produce disfunción renal y hepática, que son marcadores de gravedad. El ácido úrico elevado refleja el bajo gasto y se asocia a peor pronóstico.' },
      { prueba: 'Hemograma y estudio de hemólisis', utilidad: 'Ante sospecha de grupo 5: la anemia hemolítica crónica y los síndromes mieloproliferativos son causas reconocidas. La ferropenia es muy frecuente en la hipertensión arterial pulmonar, empeora la capacidad de ejercicio y debe corregirse por via intravenosa.' },
      { prueba: 'Estudio genético', utilidad: 'Mutaciones de BMPR2 y de otros genes en la forma hereditaria y en la idiopática. Se ofrece con consejo genético, porque tiene implicaciones para los familiares de primer grado, a los que se puede ofrecer cribado.' }
    ],
    no_invasivos: [
      { metodo: 'Ecocardiograma con probabilidad de hipertensión pulmonar (calculadora disponible)', interpretacion: 'Combina la velocidad máxima de regurgitación tricuspídea con otros signos de ventrículo derecho, arteria pulmonar y vena cava para asignar una probabilidad baja, intermedia o alta. ESTIMA, no mide: sirve para decidir a quien se cateteriza.', cutoff: 'Velocidad de regurgitación tricuspídea de 2.9 a 3.4 m/s: probabilidad intermedia. Mayor de 3.4: alta' },
      { metodo: 'Cateterismo cardiaco derecho (calculadora disponible)', interpretacion: 'PRUEBA DE REFERENCIA. Mide presión arterial pulmonar media, presión de enclavamiento y gasto cardiaco, de donde se calcula la resistencia vascular pulmonar. Confirma el diagnóstico, define el perfil hemodinámico y permite la prueba de vasorreactividad.', cutoff: 'Hipertensión pulmonar: presión media mayor de 20 mmHg. Precapilar: enclavamiento 15 o menos con resistencia mayor de 2 unidades Wood' },
      { metodo: 'Gammagrafía de ventilación y perfusión', interpretacion: 'OBLIGATORIA en toda hipertensión pulmonar sin causa clara, porque descarta el grupo 4, el único potencialmente curable. Es MÁS SENSIBLE que la angiotomografia para la enfermedad tromboembólica crónica.', cutoff: 'Estudio de perfusión normal: descarta el grupo 4. Defectos segmentarios en cuña no coincidentes: lo sugieren' },
      { metodo: 'Estratificación de riesgo en la HAP (calculadora disponible)', interpretacion: 'Clase funcional de la Organizacion Mundial de la Salud, marcha de 6 minutos y péptido natriurético. Tres estratos en el diagnóstico y cuatro en el seguimiento. El objetivo terapéutico es alcanzar y mantener el riesgo bajo.', cutoff: 'Riesgo bajo: clase I o II, marcha mayor de 440 metros y péptido natriurético bajo' },
      { metodo: 'Prueba de vasorreactividad aguda (calculadora disponible)', interpretacion: 'Se realiza en el cateterismo con óxido nítrico inhalado, epoprostenol o iloprost. SOLO en la hipertensión arterial pulmonar idiopática, hereditaria o por fármacos: en las asociadas y en los demás grupos no se hace.', cutoff: 'Positiva: descenso de la presión media de 10 mmHg o más hasta un valor absoluto de 40 mmHg o menor, con gasto cardiaco conservado o aumentado' },
      { metodo: 'Marcha de 6 minutos', interpretacion: 'Variable central del seguimiento y de la estratificación de riesgo. Mide la capacidad funcional real y su cambio con el tratamiento. Debe hacerse de forma estandarizada, porque el aliento del explorador cambia el resultado.', cutoff: 'Mayor de 440 metros: riesgo bajo. Menor de 165 metros: riesgo alto' },
      { metodo: 'Electrocardiograma', interpretacion: 'P pulmonale, desviación derecha del eje, hipertrofia del ventrículo derecho con patrón de sobrecarga y bloqueo de rama derecha. Es poco sensible: un electrocardiograma normal NO descarta la hipertensión pulmonar, y esa es la razón por la que no sirve de cribado.', cutoff: 'Sin umbral; los hallazgos apoyan pero su ausencia no excluye' }
    ],
    imagen: [
      { modalidad: 'Ecocardiograma transtorácico', hallazgos: 'Prueba inicial. Velocidad de regurgitación tricuspídea, dilatación y disfunción del ventrículo derecho, cociente entre ventrículo derecho e izquierdo, aplanamiento del tabique con forma de D, dilatación de la arteria pulmonar, derrame pericárdico (signo de mal pronóstico) y vena cava dilatada sin colapso. Además descarta la cardiopatía izquierda, que es la causa más frecuente.' },
      { modalidad: 'Gammagrafía de ventilación y perfusión', hallazgos: 'Defectos de perfusión segmentarios o subsegmentarios en cuña, no coincidentes con la ventilación. Un estudio de perfusión normal descarta la hipertensión pulmonar tromboembólica crónica, cosa que la angiotomografia no consigue.' },
      { modalidad: 'Angiotomografia pulmonar', hallazgos: 'Complementa a la gammagrafía y define la anatomía para la cirugía: material organizado adherido a la pared, bandas y membranas, estenosis y dilataciones postestenoticas, y circulación bronquial hipertrofiada. Además valora el parénquima para el grupo 3 y mide el cociente entre arteria pulmonar y aorta.' },
      { modalidad: 'Resonancia cardiaca', hallazgos: 'Patrón de referencia para el volumen, la masa y la fracción de eyección del ventrículo derecho, que es lo que determina el pronóstico. Útil en el seguimiento y cuando el ecocardiograma es de mala calidad, y cada vez más incorporada a la valoración de riesgo.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La hipertensión pulmonar se clasifica en dos planos que se complementan. El <strong>hemodinámico</strong> divide el problema según donde esta: precapilar, poscapilar aislada, combinada y de esfuerzo, y para ello hace falta un cateterismo derecho. El <strong>clínico</strong> agrupa las causas en cinco grupos según mecanismo y respuesta al tratamiento, y es el que decide la conducta. A ellos se suma la <strong>estratificación de riesgo</strong> de la hipertensión arterial pulmonar, que no clasifica la enfermedad sino al paciente, y que es lo que gobierna el tratamiento y su escalada.`,
    escalas: [
      { nombre: 'Definición hemodinámica de 2022 (calculadora disponible)', componentes: 'Presión arterial pulmonar media, presión de enclavamiento pulmonar y resistencia vascular pulmonar, medidas en cateterismo derecho.', formula: 'Hipertensión pulmonar: media mayor de 20 mmHg. Precapilar: enclavamiento 15 o menos y resistencia mayor de 2 unidades Wood. Poscapilar aislada: enclavamiento mayor de 15 y resistencia 2 o menos. Combinada: enclavamiento mayor de 15 y resistencia mayor de 2.', interpretacion: 'Los dos umbrales bajaron en 2022 (antes 25 mmHg y 3 unidades Wood) porque los pacientes de la franja intermedia ya tenian peor pronóstico. La forma de esfuerzo se recupero con una pendiente de presión media frente a gasto mayor de 3 mmHg por litro y minuto.' },
      { nombre: 'Clasificación clínica en cinco grupos', componentes: 'Mecanismo y enfermedad de base.', formula: 'Grupo 1 arterial pulmonar; grupo 2 por cardiopatía izquierda; grupo 3 por enfermedad pulmonar o hipoxia; grupo 4 por obstrucción de la arteria pulmonar; grupo 5 de mecanismo no claro o multifactorial.', interpretacion: 'Es la clasificación que decide el tratamiento. El grupo 1 es el único con vasodilatador específico establecido; en el 2 y en el 3 ese tratamiento es perjudicial; el 4 tiene una cirugía potencialmente curativa. Los grupos 2 y 3 son, con mucho, los más frecuentes.' },
      { nombre: 'Probabilidad ecocardiográfica (calculadora disponible)', componentes: 'Velocidad máxima de regurgitación tricuspídea más signos de ventrículo derecho (cociente con el izquierdo, aplanamiento septal), de arteria pulmonar (tiempo de aceleración, diámetro) y de vena cava y auricula derecha.', formula: 'Combinación de la velocidad con la presencia de signos en dos o más de las tres categorías.', interpretacion: 'Asigna probabilidad baja, intermedia o alta, y con ella se decide a quien se estudia más y a quien se cateteriza. NO establece el diagnóstico ni sirve para seguir la presión: la ecocardiografía estima, el cateterismo mide.' },
      { nombre: 'Estratificación de riesgo en tres estratos (calculadora disponible)', componentes: 'Clase funcional de la Organizacion Mundial de la Salud, distancia en la marcha de 6 minutos y péptido natriurético, más datos de imagen y hemodinámica en el diagnóstico.', formula: 'Riesgo bajo, intermedio o alto, con una mortalidad estimada al año menor del 5%, del 5 al 20% y mayor del 20% respectivamente.', interpretacion: 'Determina el tratamiento inicial: doble terapia oral en riesgo bajo e intermedio, y triple con prostaciclina parenteral en riesgo alto. El objetivo de todo el tratamiento es llegar y mantenerse en riesgo bajo.' },
      { nombre: 'Estratificación en cuatro estratos para el seguimiento', componentes: 'Las mismas tres variables, con el estrato intermedio dividido en bajo-intermedio y alto-intermedio.', formula: 'Modelo COMPERA 2.0, aplicado en cada revisión a los 3 a 6 meses.', interpretacion: 'La franja intermedia agrupaba pronósticos muy distintos y el modelo de cuatro estratos los separa. En la práctica, un paciente que sigue en riesgo intermedio-alto a los 6 meses necesita escalada de tratamiento, no observación.' },
      { nombre: 'Prueba de vasorreactividad aguda (calculadora disponible)', componentes: 'Presión arterial pulmonar media y gasto cardiaco antes y después de un vasodilatador de acción corta durante el cateterismo.', formula: 'Positiva si la presión media desciende 10 mmHg o más hasta un valor absoluto de 40 mmHg o menor, con gasto cardiaco conservado o aumentado.', interpretacion: 'Solo se hace en la forma idiopática, hereditaria o por fármacos. Identifica a la minoría (alrededor del 10%) que responde a antagonistas del calcio a dosis altas, de los cuales solo la mitad mantiene la respuesta al año. Dar antagonistas del calcio sin esta prueba puede producir colapso hemodinámico.' },
      { nombre: 'Clase funcional de la Organizacion Mundial de la Salud', componentes: 'Limitación de la actividad física y aparición de síntomas.', formula: 'I sin limitación; II limitación leve con síntomas en la actividad ordinaria; III limitación marcada con síntomas en actividad menor de la ordinaria; IV síntomas en reposo o signos de fallo derecho.', interpretacion: 'Es la variable pronostica más potente y la más barata de todas, y entra en las dos estratificaciones. La clase IV o el síncope de esfuerzo definen por si solos un paciente de riesgo alto que necesita remisión urgente.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Hipertensión arterial pulmonar (grupo 1)',
      color: '#8c3a34',
      definicion: 'Hipertensión pulmonar PRECAPILAR (presión media mayor de 20 mmHg, enclavamiento de 15 o menos y resistencia mayor de 2 unidades Wood) por enfermedad del propio vaso pulmonar de pequeño calibre, en ausencia de enfermedad pulmonar o tromboembólica que la explique.',
      fisiopatologia: 'La lesión no es un espasmo sino un REMODELADO proliferativo: disfunción endotelial con desequilibrio entre vasoconstrictores (endotelina 1, tromboxano) y vasodilatadores (óxido nítrico, prostaciclina), proliferación de células de músculo liso y endoteliales con resistencia a la apoptosis (un comportamiento casi neoplásico), inflamación y trombosis in situ. El resultado son lesiones plexiformes y obliteracion progresiva del lecho arteriolar. Esa naturaleza proliferativa explica por que la mayoría de los pacientes no responden a un vasodilatador puro y por que el tratamiento moderno actúa sobre las tres vías de señalización a la vez.',
      epidemiologia: 'Enfermedad rara, con una incidencia de unos pocos casos por millón de habitantes y año. Ha cambiado de perfil: antes se describia en mujeres jóvenes y hoy la edad media al diagnóstico supera los 60 años, con más comorbilidad. El retraso diagnóstico medio sigue siendo de años, porque la disnea de esfuerzo sin hallazgos se atribuye a otras cosas.',
      factores_riesgo: ['Mutaciones de BMPR2 y otros genes de la via', 'Esclerosis sistémica y otras conectivopatias', 'Infección por VIH', 'Hipertensión portal, con o sin cirrosis', 'Cardiopatía congénita con cortocircuito', 'Esquistosomiasis', 'Anorexigenos: fenfluramina y derivados', 'Anfetaminas, metanfetamina y algunos inhibidores de tirosina cinasa', 'Sexo femenino en las formas hereditaria e idiopática', 'Antecedentes familiares de hipertensión pulmonar'],
      clinica: 'Disnea de esfuerzo progresiva sin hallazgos que la expliquen, fatiga, dolor torácico de esfuerzo y SÍNCOPE O PRESÍNCOPE DE ESFUERZO, que indica que el gasto cardiaco no puede aumentar y es un signo de gravedad. En la exploración, segundo tono pulmonar reforzado y palpable, soplo de insuficiencia tricuspídea y signos de congestión derecha en fases avanzadas.',
      criterios_dx: 'Cateterismo derecho con perfil precapilar, tras haber descartado los grupos 2, 3 y 4. La gammagrafía de ventilación y perfusión es obligatoria antes de aceptar el diagnóstico. Ver las Figuras 1 y 2 de Definición.',
      laboratorio: 'Péptido natriurético para la estratificación. Serología de VIH, estudio hepático y ecografía abdominal, autoinmunidad con anticentromero y anti-Scl-70, y estudio genético con consejo si procede. Ferritina y saturación de transferrina, porque la ferropenia es muy frecuente y limita la capacidad de ejercicio.',
      imagen: 'Ecocardiograma con probabilidad y valoración del ventrículo derecho. Gammagrafía de ventilación y perfusión. Angiotomografia y función pulmonar completa para excluir los grupos 3 y 4. Resonancia cardiaca para cuantificar el ventrículo derecho.',
      complementarios: 'Marcha de 6 minutos y clase funcional en cada revisión. Prueba de vasorreactividad durante el cateterismo, solo en la forma idiopática, hereditaria o por fármacos. Cribado ANUAL en la esclerosis sistémica.',
      dx_diferencial: 'Hipertensión pulmonar de los grupos 2, 3, 4 y 5, que hay que descartar antes. Y, dentro del grupo 1, la enfermedad venooclusiva pulmonar y la hemangiomatosis capilar, que se sospechan por vidrio deslustrado en vidrio esmerilado, septos engrosados y adenopatías, y en las que el vasodilatador puede producir EDEMA PULMONAR AGUDO.',
      tx_medico: 'Ejercicio supervisado y rehabilitación en programa especializado, que mejora la capacidad funcional. Vacunación. Corrección de la ferropenia por via intravenosa. Oxígeno si hay hipoxemia. ANTICONCEPCIÓN EFICAZ en la mujer en edad fértil, porque el embarazo conlleva una mortalidad materna muy alta. Evitar la altitud y el ejercicio isométrico intenso.',
      tx_farmacologico: 'Según el riesgo. Bajo e intermedio: DOBLE TERAPIA ORAL DE INICIO con antagonista del receptor de la endotelina más inhibidor de la fosfodiesterasa 5. Alto: TRIPLE TERAPIA que incluya PROSTACICLINA PARENTERAL. En la revisión de los 3 a 6 meses, si no se ha alcanzado el riesgo bajo, añadir selexipag o cambiar el inhibidor de fosfodiesterasa por riociguat, y valorar sotatercept, que actúa sobre la via de la activina y ha demostrado mejorar la capacidad de ejercicio en el riesgo intermedio y alto. Antagonistas del calcio a dosis altas SOLO si la prueba de vasorreactividad es positiva. Diuréticos para la congestión, con prudencia. La anticoagulación sistemática ya NO se recomienda de forma general en el grupo 1.',
      tx_intervencionista: 'Trasplante pulmonar o cardiopulmonar en el paciente que no alcanza el riesgo bajo con tratamiento máximo, con remisión precoz. Septostomia auricular como puente en centros expertos, que descomprime el ventrículo derecho a costa de desaturar.',
      criterios_uci: 'Fallo derecho agudo con hipotensión, oliguria o hipoperfusión. Es una situación de altísima mortalidad que debe manejarse en centro experto y en la que las maniobras habituales de la insuficiencia cardiaca izquierda pueden empeorar las cosas.',
      criterios_tips: 'No aplica. En la hipertensión portopulmonar, la derivación portosistémica esta CONTRAINDICADA si la hipertensión pulmonar es moderada o grave, porque aumenta el flujo pulmonar y puede precipitar el fallo derecho.',
      criterios_trasplante: 'Remitir si no se alcanza el riesgo bajo con tratamiento combinado optimizado, si hay progresión, si aparece fallo derecho o si se necesita prostaciclina parenteral. La remisión debe ser precoz, porque la mortalidad en lista es alta.',
      seguimiento_hospitalario: 'En el ingreso por descompensación, evitar la hipotensión y la hipoxemia, ajustar diuréticos con vigilancia estrecha de la función renal, y no suspender el tratamiento específico, cuya retirada brusca puede ser mortal.',
      seguimiento_ambulatorio: 'Revisión cada 3 a 6 meses con clase funcional, marcha de 6 minutos y péptido natriurético para reestratificar el riesgo y escalar si procede. Ecocardiograma periódico. Vigilancia de la ferropenia y de los efectos adversos del tratamiento.',
      pronostico: 'Ha mejorado mucho con la terapia combinada, pero sigue siendo una enfermedad grave. Lo que determina el pronóstico no es la presión sino la FUNCIÓN DEL VENTRÍCULO DERECHO y el riesgo alcanzado con el tratamiento: el paciente que llega a riesgo bajo tiene una supervivencia muy superior.',
      algoritmo: ['Sospechar ante disnea de esfuerzo sin explicación o síncope de esfuerzo', 'Ecocardiograma para asignar probabilidad', 'Descartar PRIMERO cardiopatía izquierda y enfermedad pulmonar', 'Gammagrafía de ventilación y perfusión OBLIGATORIA', 'Derivar a centro experto ANTES del cateterismo', 'Cateterismo derecho con prueba de vasorreactividad si procede', 'Completar el estudio etiológico: VIH, hígado, autoinmunidad, genética', 'Estratificar el riesgo con clase funcional, marcha y péptido natriurético', 'Doble terapia oral de inicio, o triple con prostaciclina parenteral si el riesgo es alto', 'Reevaluar a los 3 a 6 meses y escalar si no esta en riesgo bajo']
    },
    {
      nombre: 'HP por cardiopatía izquierda (grupo 2)',
      color: '#3d5a73',
      definicion: 'Hipertensión pulmonar POSCAPILAR (presión de enclavamiento mayor de 15 mmHg) secundaria a insuficiencia cardiaca con fracción de eyección reducida o preservada, o a valvulopatía izquierda. Es la causa más frecuente de hipertensión pulmonar.',
      fisiopatologia: 'La presión elevada en la auricula izquierda se transmite de forma retrógrada al lecho pulmonar: es hipertensión pulmonar pasiva, y si se corrige la causa, revierte. Cuando la situación se cronifica, aparece además remodelado y vasoconstricción del vaso pulmonar, que añade un componente precapilar: es la forma COMBINADA, que ya no revierte del todo al bajar la presión izquierda y tiene peor pronóstico. Ese es el motivo de que la resistencia vascular pulmonar, y no solo el enclavamiento, forme parte de la definición.',
      epidemiologia: 'Es, con mucho, la causa más frecuente de hipertensión pulmonar en la práctica clínica. Aparece en una proporción muy alta de los pacientes con insuficiencia cardiaca, sobre todo con fracción de eyección preservada, y su presencia empeora el pronóstico de forma independiente.',
      factores_riesgo: ['Insuficiencia cardiaca con fracción de eyección preservada', 'Insuficiencia cardiaca con fracción de eyección reducida', 'Valvulopatía mitral y aórtica', 'Fibrilación auricular', 'Hipertensión arterial sistémica mal controlada', 'Obesidad y síndrome metabólico', 'Edad avanzada', 'Diabetes', 'Nefropatía crónica con sobrecarga de volumen', 'Apnea obstructiva del sueño coexistente'],
      clinica: 'La de la insuficiencia cardiaca: disnea de esfuerzo, ortopnea, disnea paroxística nocturna, crepitantes y edemas. La hipertensión pulmonar añade signos de fallo derecho. La combinación de fenotipo cardiometabolico (edad avanzada, obesidad, hipertensión, diabetes, fibrilación auricular) con hipertensión pulmonar apunta con fuerza a este grupo aunque la fracción de eyección sea normal.',
      criterios_dx: 'Cateterismo derecho con presión de enclavamiento mayor de 15 mmHg. La distinción entre aislada y combinada se hace con la resistencia vascular pulmonar. En casos dudosos, el cateterismo puede hacerse con sobrecarga de volumen o con ejercicio para desenmascarar una presión izquierda elevada que en reposo parece normal.',
      laboratorio: 'Péptido natriurético, que suele estar más elevado que en el grupo 1 para el mismo grado de hipertensión pulmonar. Función renal, iones y perfil cardiometabolico completo.',
      imagen: 'Ecocardiograma con valoración de la función sistólica y diastólica, del tamaño auricular izquierdo y de las valvulas. La auricula izquierda dilatada es uno de los datos que más orientan a este grupo frente al grupo 1.',
      complementarios: 'Valoración de la apnea del sueño, muy frecuente y tratable. Control de la fibrilación auricular. Coronariografía si se sospecha isquemia.',
      dx_diferencial: 'Hipertensión arterial pulmonar del grupo 1, que es el error que más consecuencias tiene porque lleva a un tratamiento perjudicial. En el paciente mayor con comorbilidad cardiometabolica y auricula izquierda dilatada hay que sospechar grupo 2 aunque la fracción de eyección sea normal.',
      tx_medico: 'TRATAR LA CARDIOPATÍA IZQUIERDA: optimizar el tratamiento de la insuficiencia cardiaca según su fenotipo, controlar la volemia, la presión arterial y la frecuencia, corregir la valvulopatía y tratar la apnea del sueño. Pérdida de peso y ejercicio en el fenotipo cardiometabolico.',
      tx_farmacologico: 'El de la insuficiencia cardiaca que corresponda. <strong>LOS VASODILATADORES PULMONARES ESPECÍFICOS NO ESTÁN INDICADOS Y SON PERJUDICIALES</strong>: aumentan el flujo hacia un ventrículo izquierdo que no puede manejarlo y precipitan edema pulmonar. Los ensayos que los han probado en este grupo han sido negativos o han mostrado daño.',
      tx_intervencionista: 'Cirugía o intervención percutánea de la valvulopatía, que puede revertir la hipertensión pulmonar. Dispositivos de asistencia y trasplante cardiaco en la insuficiencia cardiaca avanzada, donde una hipertensión pulmonar fija y grave condiciona la indicación.',
      criterios_uci: 'Los de la insuficiencia cardiaca descompensada grave.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La hipertensión pulmonar combinada y con resistencia elevada es un factor limitante para el trasplante cardiaco, porque el ventrículo derecho del injerto puede no tolerarla. Su reversibilidad se estudia con vasodilatador durante el cateterismo.',
      seguimiento_hospitalario: 'Optimización de la volemia y del tratamiento de la insuficiencia cardiaca. Vigilar que nadie añada un vasodilatador pulmonar por el hallazgo ecocardiográfico.',
      seguimiento_ambulatorio: 'El de la insuficiencia cardiaca, con ecocardiograma periódico. Si la hipertensión pulmonar persiste desproporcionada tras optimizar el tratamiento, reconsiderar el diagnóstico y remitir a centro experto.',
      pronostico: 'La hipertensión pulmonar empeora el pronóstico de la insuficiencia cardiaca de forma independiente, y la forma combinada más que la aislada. La buena noticia es que la aislada revierte al corregir la causa.',
      algoritmo: ['Sospechar grupo 2 ante fenotipo cardiometabolico y auricula izquierda dilatada', 'Ecocardiograma completo con función sistólica y diastólica y valvulas', 'Cateterismo con presión de enclavamiento mayor de 15 mmHg', 'Calcular la resistencia para separar aislada de combinada', 'Optimizar el tratamiento de la insuficiencia cardiaca', 'Corregir la valvulopatía si la hay', 'Tratar la apnea del sueño y la fibrilación auricular', 'NO prescribir vasodilatadores pulmonares', 'Reevaluar tras optimizar: si persiste desproporcionada, remitir a centro experto', 'Valorar la reversibilidad si se plantea trasplante cardiaco']
    },
    {
      nombre: 'HP por enfermedad pulmonar e hipoxia (grupo 3)',
      color: '#3f6b52',
      definicion: 'Hipertensión pulmonar precapilar secundaria a enfermedad pulmonar crónica o a hipoxia mantenida: EPOC, enfermedad intersticial, síndromes combinados de fibrosis y enfisema, trastornos respiratorios del sueño, hipoventilación y exposición crónica a la altitud.',
      fisiopatologia: 'Tres mecanismos que se suman: la vasoconstricción pulmonar hipóxica, que empieza siendo adaptativa y acaba produciendo remodelado; la destrucción o la fibrosis del lecho capilar, que reduce el área vascular disponible; y la compresión de los vasos por la hiperinsuflación o por la fibrosis. La hipercapnia y la acidosis potencian la vasoconstricción, y la poliglobulia aumenta la viscosidad. La consecuencia práctica es que la única medida con efecto demostrado sobre la presión pulmonar en este grupo es corregir la hipoxemia.',
      epidemiologia: 'Alguna elevación de la presión pulmonar aparece en la mitad de los pacientes con EPOC avanzada y es aun más frecuente en la EPID. La forma GRAVE (resistencia mayor de 5 unidades Wood) afecta a una minoría y obliga a buscar otra causa añadida o a considerar que el paciente tiene un fenotipo vascular predominante.',
      factores_riesgo: ['EPOC avanzada, sobre todo con enfisema extenso', 'Enfermedad pulmonar intersticial difusa', 'Síndrome combinado de fibrosis y enfisema, que da las presiones más altas', 'Apnea obstructiva del sueño e hipoventilación asociada a obesidad', 'Hipoxemia crónica no corregida', 'Hipercapnia y acidosis respiratoria', 'Exposición crónica a la altitud', 'Tromboembolia pulmonar previa asociada', 'Poliglobulia secundaria', 'Cardiopatía izquierda concomitante, que añade componente poscapilar'],
      clinica: 'Disnea y limitación funcional DESPROPORCIONADAS a la alteración de la función pulmonar, que es la señal de alarma. Hipoxemia marcada, DLCO muy baja para el grado de obstrucción o restricción, y signos de fallo derecho en fases avanzadas.',
      criterios_dx: 'Hipertensión pulmonar precapilar en un paciente con enfermedad pulmonar que la explique. El cateterismo NO se hace de rutina: se reserva a la sospecha de forma grave, a la valoración de trasplante y a la duda entre grupo 1 y grupo 3, es decir, cuando el resultado va a cambiar la conducta.',
      laboratorio: 'Gasometría arterial, función pulmonar completa con DLCO, hematocrito y péptido natriurético. Una DLCO desproporcionadamente baja para el grado de enfermedad parenquimatosa apunta a componente vascular predominante.',
      imagen: 'Ecocardiograma como prueba inicial, con la limitación de que en el paciente con enfisema la ventana es mala y la estimación poco fiable. Tomografía para valorar el parénquima y medir el cociente entre arteria pulmonar y aorta. Gammagrafía si se sospecha componente tromboembólico.',
      complementarios: 'Estudio de sueño si hay sospecha de apnea o de hipoventilación, que son causas tratables. Marcha de 6 minutos con oximetría. Valoración en centro experto si la forma es grave.',
      dx_diferencial: 'Hipertensión arterial pulmonar del grupo 1 coexistente, hipertensión pulmonar tromboembólica crónica, cardiopatía izquierda asociada y síndrome combinado de fibrosis y enfisema, en el que la función pulmonar puede ser engañosamente normal porque los dos procesos se compensan.',
      tx_medico: 'TRATAR LA ENFERMEDAD DE BASE Y CORREGIR LA HIPOXEMIA: es lo único con efecto demostrado sobre la presión pulmonar en este grupo. Oxigenoterapia domiciliaria si cumple criterios, tratamiento de la apnea del sueño, rehabilitación respiratoria, abandono del tabaco y vacunación. Diuréticos con prudencia si hay congestión, evitando la depleccion excesiva.',
      tx_farmacologico: '<strong>LOS VASODILATADORES PULMONARES NO ESTÁN INDICADOS DE FORMA GENERAL</strong>: empeoran el desequilibrio entre ventilación y perfusión al dilatar zonas mal ventiladas, y agravan la hipoxemia. La ÚNICA excepción reconocida es el TREPROSTINIL INHALADO en la hipertensión pulmonar asociada a enfermedad intersticial, que mejoro la capacidad de ejercicio en un ensayo controlado. En la forma grave, el uso de otros fármacos se decide de forma individual y en centro experto.',
      tx_intervencionista: 'Trasplante pulmonar en el candidato adecuado. Cirugía de reducción de volumen en casos muy seleccionados de enfisema.',
      criterios_uci: 'Fallo derecho agudo, que en este contexto tiene mal pronóstico y exige un balance de volumen muy fino y con frecuencia vasopresores en lugar de más diurético o más volumen.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La hipertensión pulmonar progresiva es uno de los criterios de remisión a trasplante en la EPOC y en la EPID avanzadas.',
      seguimiento_hospitalario: 'Control de balance, peso y función renal en el fallo derecho descompensado. Verificar la eficacia de la corrección de la hipoxemia.',
      seguimiento_ambulatorio: 'Ecocardiograma periódico, cumplimiento y eficacia de la oxigenoterapia, control de la apnea del sueño y marcha de 6 minutos.',
      pronostico: 'La hipertensión pulmonar es un marcador independiente de mortalidad en la EPOC y en la EPID. La forma grave con enfermedad pulmonar leve tiene un pronóstico especialmente malo y se comporta más como una enfermedad vascular que como una enfermedad del parénquima.',
      algoritmo: ['Sospechar ante disnea o hipoxemia desproporcionadas a la función pulmonar', 'Ecocardiograma, sabiendo que en el enfisema la ventana es mala', 'Función pulmonar completa con DLCO y gasometría', 'Descartar apnea del sueño e hipoventilación, que son tratables', 'Gammagrafía si se sospecha componente tromboembólico', 'Corregir la hipoxemia: es lo único con efecto demostrado', 'Optimizar el tratamiento de la enfermedad pulmonar de base', 'NO iniciar vasodilatadores pulmonares de forma rutinaria', 'Valorar treprostinil inhalado si la hipertensión se asocia a EPID', 'Remitir a centro experto si la forma es grave']
    },
    {
      nombre: 'HP tromboembólica crónica (grupo 4)',
      color: '#7a2f5c',
      definicion: 'Hipertensión pulmonar precapilar por obstrucción organizada y fibrótica de las arterias pulmonares tras una o varias embolias, persistente pese a al menos 3 meses de anticoagulación eficaz. Es el ÚNICO grupo potencialmente curable.',
      fisiopatologia: 'Tras la embolia, el trombo no se resuelve sino que se organiza y se incorpora a la pared, formando bandas, membranas y oclusiones que aumentan la resistencia. A esa obstrucción mecánica se suma, con el tiempo, una arteriopatia de pequeño vaso en los territorios NO obstruidos, sometidos a un flujo excesivo. Esa segunda lesión explica por que algunos pacientes mantienen hipertensión pulmonar después de una endarterectomía técnicamente correcta, y por que en ellos el riociguat si tiene indicación.',
      epidemiologia: 'Aparece en un pequeño porcentaje de los supervivientes de una embolia pulmonar, y hasta en una cuarta parte de los casos no hay antecedente conocido de embolia, lo que retrasa mucho el diagnóstico. Sigue estando infradiagnosticada, y esa es la razón de que la gammagrafía sea obligatoria en toda hipertensión pulmonar sin explicar.',
      factores_riesgo: ['Embolia pulmonar previa, sobre todo recurrente o extensa', 'Síndrome antifosfolípido y anticoagulante lúpico', 'Esplenectomia', 'Derivación ventriculoauricular y catéteres o electrodos permanentes', 'Enfermedad inflamatoria intestinal y osteomielitis crónica', 'Neoplasia y síndromes mieloproliferativos', 'Tratamiento hormonal sustitutivo', 'Grupo sanguíneo distinto del O', 'Hipotiroidismo tratado con sustitución', 'Trombofilia hereditaria'],
      clinica: 'Disnea de esfuerzo progresiva que aparece meses o años después de una embolia, o sin antecedente conocido. Puede haber un periodo de "luna de miel" asintomático entre el episodio agudo y la aparición de los síntomas, que despista. Hemoptisis ocasional por circulación bronquial hipertrofiada, y soplos de flujo audibles sobre los campos pulmonares, que son muy característicos cuando se encuentran.',
      criterios_dx: 'Hipertensión pulmonar precapilar en el cateterismo MÁS defectos de perfusión crónicos, tras al menos 3 meses de anticoagulación eficaz. La GAMMAGRAFÍA de ventilación y perfusión es la prueba de cribado y es más sensible que la angiotomografia: un estudio de perfusión normal descarta el diagnóstico, una angiotomografia normal NO. Ver la Figura 2 de Definición.',
      laboratorio: 'Estudio de trombofilia y anticuerpos antifosfolípido. Péptido natriurético. Hemograma y función hepática y renal para la valoración prequirúrgica.',
      imagen: 'Gammagrafía con defectos segmentarios en cuña no coincidentes. Angiotomografia con material adherido a la pared, bandas, membranas, estenosis y dilataciones postestenoticas, y circulación bronquial hipertrofiada. Angiografía pulmonar convencional en el centro experto para definir la operabilidad.',
      complementarios: 'Valoración OBLIGATORIA por un equipo multidisciplinar de centro experto (cirujano, hemodinamista, radiólogo y clínico), que es quien decide la operabilidad. Un paciente considerado inoperable en un centro puede no serlo en otro con más experiencia.',
      dx_diferencial: 'Embolia pulmonar aguda o subaguda, hipertensión arterial pulmonar del grupo 1, arteritis de Takayasu con afectación pulmonar, sarcoma de la arteria pulmonar (que puede imitar exactamente el cuadro), mediastinitis fibrosante y compresión extrínseca tumoral.',
      tx_medico: 'ANTICOAGULACIÓN INDEFINIDA en todos los pacientes, tradicionalmente con antagonista de la vitamina K, y obligatoriamente con el en el síndrome antifosfolípido. Oxígeno si hay hipoxemia, rehabilitación y tratamiento de la insuficiencia cardiaca derecha.',
      tx_farmacologico: 'RIOCIGUAT en la enfermedad inoperable o en la hipertensión pulmonar que persiste tras la endarterectomía, que es la única indicación aprobada de un fármaco específico en este grupo. Treprostinil subcutáneo en casos seleccionados. El tratamiento médico NUNCA debe sustituir a la valoración quirúrgica ni retrasarla.',
      tx_intervencionista: 'ENDARTERECTOMÍA PULMONAR: es el tratamiento de elección y puede ser CURATIVA, normalizando la hemodinámica. Se realiza en centros con volumen suficiente y bajo parada circulatoria en hipotermia profunda. ANGIOPLASTIA PULMONAR CON BALÓN para la enfermedad distal no accesible a la cirugía o para la hipertensión residual, en sesiones sucesivas. Trasplante si todo lo anterior fracasa.',
      criterios_uci: 'Fallo derecho agudo y el posoperatorio de la endarterectomía, que tiene complicaciones propias como el edema por reperfusión y el robo vascular.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Enfermedad inoperable con mala respuesta al tratamiento médico y a la angioplastia.',
      seguimiento_hospitalario: 'Posoperatorio en centro experto. Vigilar el edema por reperfusión, la hemorragia y la hipertensión pulmonar residual.',
      seguimiento_ambulatorio: 'Cateterismo de control tras la cirugía o la angioplastia. Anticoagulación indefinida sin excepciones. Seguimiento a largo plazo por la posibilidad de hipertensión residual, que aparece en una proporción no despreciable y que responde al riociguat.',
      pronostico: 'Excelente si se opera y la enfermedad es proximal: la endarterectomía puede devolver al paciente a una vida normal. Pesimo si no se diagnostica, y ese es el argumento definitivo para no saltarse nunca la gammagrafía en una hipertensión pulmonar sin explicar.',
      algoritmo: ['Gammagrafía de ventilación y perfusión en TODA hipertensión pulmonar sin explicar', 'Recordar que una angiotomografia normal NO descarta el diagnóstico', 'Anticoagular de forma eficaz al menos 3 meses antes de confirmarlo', 'Confirmar con cateterismo derecho el perfil precapilar', 'Angiotomografia y angiografía para definir la anatomía', 'Remitir SIEMPRE a un equipo multidisciplinar de centro experto', 'Endarterectomía pulmonar si es operable: puede ser curativa', 'Angioplastia con balón en la enfermedad distal o residual', 'Riociguat si es inoperable o si persiste tras la cirugía', 'Anticoagulación indefinida y seguimiento hemodinámico a largo plazo']
    },
    {
      nombre: 'Fallo agudo del ventrículo derecho',
      color: '#8c1f3d',
      definicion: 'Descompensación aguda de la función del ventrículo derecho en un paciente con hipertensión pulmonar, con congestión sistémica y bajo gasto. Es la forma en que mata esta enfermedad y una de las situaciones de mayor mortalidad de la medicina interna.',
      fisiopatologia: 'El ventrículo derecho es una cámara de pared fina diseñada para una circulación de baja presión y muy sensible a los aumentos de poscarga. Cuando claudica se entra en una espiral: se dilata, el tabique se desplaza y compromete el llenado del izquierdo (interdependencia ventricular), cae el gasto y con el la presión aórtica, lo que reduce la perfusión CORONARIA del propio ventrículo derecho, que se isquemia y bombea aun peor. Entender esa espiral es lo que explica todas las decisiones terapéuticas: mantener la presión arterial es prioritario, y todo lo que aumente la poscarga pulmonar o reduzca la perfusión coronaria empeora el cuadro.',
      epidemiologia: 'Es la causa de muerte más frecuente en la hipertensión arterial pulmonar. La mortalidad hospitalaria del episodio que requiere cuidados intensivos es muy alta, y aumenta con el número de órganos afectados y con la necesidad de vasopresores.',
      factores_riesgo: ['Infección, que es el desencadenante más frecuente', 'Interrupción o mala adherencia al tratamiento específico', 'Arritmia supraventricular, especialmente el flutter auricular', 'Anemia y ferropenia', 'Cirugía y anestesia general', 'Embarazo y parto', 'Embolia pulmonar sobreañadida', 'Sobrecarga de volumen o de sal', 'Fármacos inótropos negativos y vasodilatadores sistémicos', 'Progresión natural de la enfermedad de base'],
      clinica: 'Ingurgitación yugular marcada con onda v, hepatomegalia pulsátil dolorosa, ascitis, edemas, oliguria, hipotensión, frialdad, obnubilacion y disnea de reposo. La ictericia y la elevación de transaminasas por congestión hepática son signos de gravedad. La aparición de una arritmia supraventricular en este contexto es una urgencia, porque la pérdida de la contribución auricular se tolera muy mal.',
      criterios_dx: 'Clínico, apoyado en el ecocardiograma (ventrículo derecho dilatado e hipocontractil, tabique desplazado, vena cava dilatada sin colapso) y en los marcadores de disfunción orgánica. La monitorización invasiva con catéter de arteria pulmonar puede ser útil en el paciente inestable en centro experto.',
      laboratorio: 'Péptido natriurético, troponina, lactato, función renal y hepática, y gasometría con saturación venosa central. El lactato elevado y la saturación venosa central baja indican bajo gasto y peor pronóstico. Buscar activamente el desencadenante: hemograma, reactantes y cultivos.',
      imagen: 'Ecocardiograma urgente para valorar el ventrículo derecho, el tabique, el derrame pericárdico y la vena cava. Angiotomografia si se sospecha embolia sobreañadida. Radiografía y ecografía para buscar el foco infeccioso.',
      complementarios: 'Monitorización continua, control estricto de diuresis y balance, y valoración precoz por un centro experto en hipertensión pulmonar, porque las decisiones aquí son contraintuitivas y la experiencia cambia el resultado.',
      dx_diferencial: 'Taponamiento cardiaco, infarto del ventrículo derecho, embolia pulmonar aguda masiva, neumotórax a tensión, sepsis con disfunción miocárdica y pericarditis constrictiva.',
      tx_medico: 'Cuatro frentes a la vez. <strong>Tratar el desencadenante</strong>, sobre todo la infección y la arritmia (donde se busca restaurar el ritmo sinusal, porque la contribución auricular es crítica). <strong>Optimizar la volemia</strong>, que casi siempre significa DEPLECIONAR con diurético intravenoso: la sobrecarga distiende el ventrículo derecho y empeora la interdependencia, aunque en el paciente hipovolémico un volumen prudente puede ayudar. <strong>Mantener la presión arterial</strong> con NORADRENALINA, que preserva la perfusión coronaria del ventrículo derecho. <strong>Evitar la hipoxemia, la hipercapnia y la acidosis</strong>, que aumentan la resistencia pulmonar.',
      tx_farmacologico: 'Noradrenalina como vasopresor de elección. Dobutamina o levosimendan como inótropo si el gasto es bajo, con precaución por la hipotensión. Mantener y optimizar el tratamiento específico de la hipertensión pulmonar, y valorar añadir prostaciclina parenteral. Óxido nítrico inhalado o prostaciclina nebulizada para bajar la poscarga sin efecto sistémico. NUNCA retirar bruscamente el tratamiento específico.',
      tx_intervencionista: 'Soporte circulatorio con oxigenación por membrana extracorpórea venoarterial como puente a la recuperación o al trasplante, en centros expertos. Septostomia auricular como puente. La intubación y la ventilación con presión positiva son PELIGROSAS porque reducen la precarga y aumentan la poscarga pulmonar: se evitan mientras sea posible, y si son inevitables se hacen con inducción cuidadosa y por manos expertas.',
      criterios_uci: 'Prácticamente todos los casos. La inducción anestésica y la ventilación mecánica pueden precipitar una parada, de modo que la decisión de intubar debe tomarla alguien con experiencia en hipertensión pulmonar.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'El episodio de fallo derecho es en sí mismo un criterio para acelerar la valoración de trasplante.',
      seguimiento_hospitalario: 'Monitorización estrecha de perfusión, diuresis y función orgánica. Reevaluar a diario el balance, que es la decisión más difícil y la que más se equivoca en los dos sentidos.',
      seguimiento_ambulatorio: 'Tras el alta, reestratificar el riesgo y escalar el tratamiento: un episodio de fallo derecho reclasifica al paciente como de riesgo alto con independencia del resto de las variables.',
      pronostico: 'Muy malo. La mortalidad hospitalaria es elevada y el episodio marca un antes y un después en la enfermedad: la supervivencia al año cae de forma marcada y obliga a replantear todo el plan terapéutico, incluido el trasplante.',
      algoritmo: ['Reconocer los signos: ingurgitación, hepatomegalia pulsátil, oliguria e hipotensión', 'Buscar y tratar el DESENCADENANTE: infección, arritmia, anemia, mala adherencia', 'Ecocardiograma urgente y contacto con el centro experto', 'Depleccionar con diurético intravenoso si hay sobrecarga', 'Noradrenalina para mantener la perfusión coronaria del ventrículo derecho', 'Inótropo si el gasto es bajo, con precaución', 'Corregir hipoxemia, hipercapnia y acidosis', 'Restaurar el ritmo sinusal si hay arritmia supraventricular', 'NO retirar el tratamiento específico y valorar añadir prostaciclina parenteral', 'EVITAR la intubación mientras sea posible; si es inevitable, por manos expertas']
    },
    {
      nombre: 'Grupo 5 y situaciones especiales',
      color: '#6b4a2e',
      definicion: 'Hipertensión pulmonar de mecanismo no aclarado o multifactorial (grupo 5), junto con las situaciones que cambian el manejo de cualquier paciente con hipertensión pulmonar: embarazo, cirugía, altitud y viaje.',
      fisiopatologia: 'En el grupo 5 coexisten mecanismos: compresión extrínseca, infiltración, hiperaflujo, obstrucción, componente poscapilar y vasoconstricción, en proporciones distintas según la enfermedad. En las situaciones especiales, el problema común es que el ventrículo derecho no puede aumentar el gasto cuando se le exige: el embarazo aumenta el volumen circulante y el gasto en un 50%, la anestesia general reduce la precarga y aumenta la poscarga pulmonar, y la altitud añade vasoconstricción hipóxica.',
      epidemiologia: 'El grupo 5 es heterogéneo y poco frecuente en conjunto, pero cada una de sus causas importa en su especialidad. La mortalidad materna en la hipertensión arterial pulmonar, aunque ha mejorado en centros expertos, sigue siendo inaceptablemente alta, y la mortalidad perioperatoria de la cirugía no cardiaca en estos pacientes es varias veces la de la población general.',
      factores_riesgo: ['Anemia hemolítica crónica y drepanocitosis', 'Síndromes mieloproliferativos y esplenectomía', 'Sarcoidosis con afectación vascular o mediastínica', 'Histiocitosis de células de Langerhans y linfangioleiomiomatosis', 'Enfermedad de Gaucher y trastornos tiroideos', 'Insuficiencia renal crónica en diálisis', 'Mediastinitis fibrosante y compresión tumoral', 'Embarazo en una mujer con hipertensión arterial pulmonar', 'Cirugía mayor y anestesia general', 'Ascenso a altitud o vuelo prolongado sin oxígeno'],
      clinica: 'La de la enfermedad de base más los síntomas de hipertensión pulmonar. En el embarazo, el deterioro se concentra en el segundo y tercer trimestre y sobre todo en el PERIPARTO Y EL POSPARTO INMEDIATO, cuando la autotransfusion uterina y los cambios de volumen sobrecargan un ventrículo derecho que no tiene reserva.',
      criterios_dx: 'Los mismos criterios hemodinámicos, con la diferencia de que en el grupo 5 la clasificación es de exclusión y con frecuencia el mecanismo es mixto. En el embarazo, el ecocardiograma es la herramienta principal porque el cateterismo se reserva a lo imprescindible.',
      laboratorio: 'Según la enfermedad de base: hemograma con estudio de hemólisis, función tiroidea, enzimas lisosomales, función renal. Péptido natriurético seriado en el embarazo, que es una herramienta útil de vigilancia.',
      imagen: 'Ecocardiograma seriado. En el grupo 5, tomografía para valorar compresión extrínseca, mediastinitis fibrosante o afectación parenquimatosa. Gammagrafía para descartar componente tromboembólico, frecuente en la drepanocitosis y en los mieloproliferativos.',
      complementarios: 'Consulta preconcepcional en toda mujer en edad fértil con hipertensión pulmonar. Valoración preoperatoria en centro experto para cualquier cirugía no urgente. Prueba de simulación de altitud o valoración de la necesidad de oxígeno en vuelo.',
      dx_diferencial: 'Antes de aceptar el grupo 5 hay que haber descartado los cuatro anteriores, porque muchas de estas enfermedades pueden producir hipertensión pulmonar por mecanismos clasificables: la sarcoidosis puede dar grupo 3 por fibrosis, la drepanocitosis puede dar grupo 4 por tromboembolia, y la diálisis puede dar grupo 2 por sobrecarga.',
      tx_medico: 'Tratar la enfermedad de base, que es lo principal: quimioterapia en el mieloproliferativo, tratamiento de la drepanocitosis, corticoide en la sarcoidosis, optimización de la diálisis. En el embarazo, seguimiento en centro experto con equipo multidisciplinar y planificación del parto con antelación.',
      tx_farmacologico: 'En el grupo 5, el vasodilatador se decide caso a caso en centro experto y NO se asume por analogía con el grupo 1. En el embarazo, mantener el tratamiento específico ajustando los fármacos teratogenos: los antagonistas del receptor de la endotelina y el riociguat están CONTRAINDICADOS, y se emplean inhibidores de la fosfodiesterasa 5 y prostaciclinas.',
      tx_intervencionista: 'Según la causa en el grupo 5. En el embarazo, parto programado en centro experto con anestesia regional cuidadosa y evitando la anestesia general y la maniobra de Valsalva prolongada, con vigilancia estrecha en el posparto inmediato, que es el momento de máximo riesgo.',
      criterios_uci: 'Toda gestante con hipertensión arterial pulmonar en el periparto debe estar en un entorno con cuidados intensivos disponibles. En la cirugía, ingreso posoperatorio en una unidad de vigilancia con monitorización invasiva.',
      criterios_tips: 'La derivación portosistémica esta CONTRAINDICADA en la hipertensión portopulmonar moderada o grave, porque aumenta el flujo pulmonar y puede precipitar el fallo derecho.',
      criterios_trasplante: 'Según la enfermedad de base y la gravedad de la hipertensión pulmonar.',
      seguimiento_hospitalario: 'En la gestante, vigilancia estrecha en el periparto y en las 48 a 72 horas siguientes. En el posoperatorio, evitar la hipoxemia, la hipercapnia, el dolor y la sobrecarga de volumen, y mantener el tratamiento específico.',
      seguimiento_ambulatorio: 'Anticoncepción eficaz y consejo reproductivo en toda mujer en edad fértil con hipertensión arterial pulmonar, revisado en cada consulta. Consejo sobre altitud, viaje y necesidad de oxígeno en vuelo.',
      pronostico: 'Muy variable en el grupo 5 según la enfermedad de base. En el embarazo, la mortalidad materna sigue siendo muy alta pese a la mejora en centros expertos, lo que sostiene la recomendación de evitarlo y de ofrecer interrupción cuando se produce.',
      algoritmo: ['Descartar los grupos 1 a 4 antes de aceptar el grupo 5', 'Identificar y tratar la enfermedad de base', 'No asumir que el vasodilatador funciona por analogía con el grupo 1', 'En toda mujer en edad fértil: anticoncepción eficaz y consejo reproductivo', 'Si hay embarazo: derivación inmediata a centro experto y ofrecer interrupción', 'Si continua: retirar endotelina y riociguat, mantener fosfodiesterasa y prostaciclinas', 'Planificar el parto con antelación, con anestesia regional y vigilancia posparto', 'Antes de cualquier cirugía no urgente: valoración en centro experto', 'Evitar hipoxemia, hipercapnia, dolor y sobrecarga en el perioperatorio', 'Consejo sobre altitud y oxígeno en vuelos prolongados']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La hipertensión pulmonar se diagnostica tarde porque su síntoma es una disnea de esfuerzo sin hallazgos, y se trata mal porque la clasificación en grupos se salta con facilidad. Los dos errores caros son dar vasodilatadores a quien no debe recibirlos y no pedir la gammagrafía que descartaría el único grupo curable. Lo que sigue es la lista de comprobacion.',
    parametros: ['El ecocardiograma ESTIMA la presión, no la mide: da una probabilidad, no un diagnóstico', 'El cateterismo derecho es obligatorio para confirmar, clasificar el perfil y medir la vasorreactividad', 'Umbrales de 2022: presión media mayor de 20 mmHg, y resistencia mayor de 2 unidades Wood para la forma precapilar', 'Buscar PRIMERO los grupos 2 y 3, que explican la gran mayoría de los casos', 'GAMMAGRAFÍA de ventilación y perfusión en toda hipertensión pulmonar sin explicar: descarta el único grupo curable', 'Una angiotomografia normal NO descarta la hipertensión pulmonar tromboembólica crónica', 'NO dar vasodilatadores pulmonares en el grupo 2 (producen edema pulmonar) ni en el grupo 3 (empeoran el intercambio)', 'NO dar antagonistas del calcio sin prueba de vasorreactividad: pueden producir colapso hemodinámico', 'La prueba de vasorreactividad solo se hace en la forma idiopática, hereditaria o por fármacos', 'Derivar a centro experto ANTES del cateterismo, no después', 'En el grupo 1, tratar por RIESGO y no por presión, reestratificando cada 3 a 6 meses', 'En el fallo derecho agudo: tratar el desencadenante, depleccionar, noradrenalina, y evitar la intubación mientras sea posible'],
    criterios_uci_general: 'Fallo agudo del ventrículo derecho con hipotensión, oliguria o hipoperfusión; arritmia supraventricular mal tolerada; y el periparto de toda gestante con hipertensión arterial pulmonar. La inducción anestésica y la ventilación con presión positiva pueden precipitar una parada, de modo que la decisión de intubar debe tomarla alguien con experiencia en hipertensión pulmonar.',
    criterios_tips_general: 'La derivación portosistémica intrahepática transyugular esta CONTRAINDICADA en la hipertensión portopulmonar moderada o grave: aumenta el flujo pulmonar y puede precipitar el fallo del ventrículo derecho.',
    criterios_trasplante_general: 'Remitir a trasplante pulmonar o cardiopulmonar si no se alcanza el riesgo bajo con tratamiento combinado optimizado, si hay progresión pese al tratamiento, si aparece fallo derecho o si se necesita prostaciclina parenteral. La remisión debe ser precoz porque la mortalidad en lista es alta.',
    prevencion: 'Primaria: evitar anorexigenos y anfetaminas, tratar bien la embolia pulmonar aguda con anticoagulación adecuada y duración suficiente, y controlar la enfermedad pulmonar y cardiaca de base. Secundaria: cribado ANUAL en la esclerosis sistémica y cribado dirigido en portadores de mutaciones conocidas, en la hipertensión portal candidata a trasplante hepático y en el seguimiento tras una embolia pulmonar con disnea persistente. Terciaria: adherencia al tratamiento específico (cuya interrupción brusca puede ser mortal), vacunación, corrección de la ferropenia, anticoncepción eficaz y consejo sobre altitud, vuelo y cirugía.'
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
  'Hipertensión arterial pulmonar (grupo 1)': { definicion: [1, 3, 4, 5, 8, 11], criterios_dx: [1, 3, 4, 8, 11], laboratorio: [1, 3, 4, 8, 11], tx_farmacologico: [1, 3, 4, 5, 8, 11] },
  'HP por cardiopatía izquierda (grupo 2)': { definicion: [1, 16], criterios_dx: [1, 16], laboratorio: [1, 16], tx_farmacologico: [1, 16] },
  'HP por enfermedad pulmonar e hipoxia (grupo 3)': { definicion: [1, 7, 17], criterios_dx: [1, 7, 17], laboratorio: [1, 7, 17], tx_farmacologico: [1, 7, 17] },
  'HP tromboembólica crónica (grupo 4)': { definicion: [6, 9, 10, 15], criterios_dx: [6, 9, 10, 15], laboratorio: [6, 9, 10, 15], tx_farmacologico: [6, 9, 10, 15] },
  'Fallo agudo del ventrículo derecho': { definicion: [13, 14], criterios_dx: [13, 14], laboratorio: [13, 14], tx_farmacologico: [13, 14] },
  'Grupo 5 y situaciones especiales': { definicion: [1, 2, 12], criterios_dx: [1, 2, 12], laboratorio: [1, 2, 12], tx_farmacologico: [1, 2, 12] }
};
export const estigmasTitulo = 'Signos de la hipertensión pulmonar y del fallo derecho, del más precoz al de peor pronóstico';
export const estigmas = [
  { s: 'Disnea de esfuerzo sin hallazgos que la expliquen', p: 'El síntoma inicial', photo: null, desc: 'Auscultación normal, radiografía poco alterada y espirometría aceptable en un paciente que se ahoga al subir escaleras. Es la razón por la que el diagnóstico se retrasa años y por la que hay que pensar en esta enfermedad cuando la disnea no encaja con nada.' },
  { s: 'Segundo tono pulmonar reforzado y palpable', p: '~80%', photo: null, desc: 'El componente pulmonar del segundo tono se hace intenso y se palpa en el segundo espacio intercostal izquierdo. Es el signo más característico de la exploración y se busca a propósito, porque no salta a la vista si no se piensa en el.' },
  { s: 'Onda a prominente en el pulso venoso yugular', p: '~50%', photo: null, desc: 'Refleja la contracción auricular derecha contra un ventrículo rígido e hipertrofiado. Cuando aparece la insuficiencia tricuspídea, la onda a deja paso a una onda v grande, que marca el paso a la fase de fallo.' },
  { s: 'Latido paraesternal izquierdo', p: '~40%', photo: null, desc: 'Impulso sostenido en el borde esternal izquierdo bajo, producido por la hipertrofia del ventrículo derecho. Se palpa mejor con el talón de la mano y en espiración mantenida.' },
  { s: 'Soplo de insuficiencia tricuspídea', p: '~60%', photo: null, desc: 'Holosistólico en el borde esternal izquierdo que aumenta con la inspiración (signo de Rivero-Carvallo). Su intensidad no se correlaciona con la presión pulmonar, pero su velocidad en el Doppler es la base de la estimación ecocardiográfica.' },
  { s: 'Síncope o presíncope de esfuerzo', p: 'Signo de gravedad', photo: null, desc: 'Significa que el gasto cardiaco NO PUEDE AUMENTAR con el ejercicio. Es uno de los marcadores de riesgo alto y, por si solo, motivo de remisión urgente a un centro experto: no es un síncope vasovagal por mucho que lo parezca.' },
  { s: 'Dolor torácico de esfuerzo', p: '~30%', photo: null, desc: 'Isquemia del ventrículo derecho hipertrofiado, o compresión del tronco coronario izquierdo por una arteria pulmonar muy dilatada, que es una causa rara pero tratable con revascularización percutánea.' },
  { s: 'Ingurgitación yugular con onda v', p: 'Fase de fallo derecho', photo: null, desc: 'La onda v grande traduce la insuficiencia tricuspídea significativa. Junto con la hepatomegalia pulsátil marca el paso de la hipertensión pulmonar compensada al fallo derecho, que es un cambio pronóstico mayor.' },
  { s: 'Hepatomegalia pulsátil y reflujo hepatoyugular', p: 'Fallo derecho', photo: null, desc: 'El hígado transmite la onda de la insuficiencia tricuspídea. La congestión hepática crónica produce elevación de transaminasas, colestasis y, con el tiempo, cirrosis cardiaca.' },
  { s: 'Ascitis y edemas', p: 'Fallo derecho avanzado', photo: null, desc: 'Congestión sistémica establecida. En este punto la función renal y hepática se deterioran, y esa disfunción orgánica es uno de los principales determinantes del pronóstico y de la elegibilidad para trasplante.' },
  { s: 'Derrame pericárdico', p: 'Mal pronóstico', photo: null, desc: 'Hallazgo ecocardiográfico que traduce presión auricular derecha elevada y que se asocia de forma consistente a peor supervivencia. Rara vez produce taponamiento, y drenarlo no mejora nada y puede desestabilizar al paciente.' },
  { s: 'Acropaquias y cianosis', p: 'En cortocircuito o hipoxemia', photo: null, desc: 'Sugieren cardiopatía congénita con cortocircuito derecha-izquierda (síndrome de Eisenmenger) o enfermedad pulmonar avanzada del grupo 3. En la hipertensión arterial pulmonar idiopática no complicada son raras.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Definición hemodinámica de 2022 (calculadora disponible)': [1, 2],
  'Clasificación clínica en cinco grupos': [1, 2],
  'Probabilidad ecocardiográfica (calculadora disponible)': [1],
  'Estratificación de riesgo en tres estratos (calculadora disponible)': [1, 18],
  'Estratificación en cuatro estratos para el seguimiento': [11],
  'Prueba de vasorreactividad aguda (calculadora disponible)': [8, 1],
  'Clase funcional de la Organizacion Mundial de la Salud': [1]
};
export const escalaCalc = {
  'Definición hemodinámica de 2022 (calculadora disponible)': 'perfil-hemodinamico',
  'Probabilidad ecocardiográfica (calculadora disponible)': 'probabilidad-eco',
  'Estratificación de riesgo en tres estratos (calculadora disponible)': 'riesgo-hap',
  'Prueba de vasorreactividad aguda (calculadora disponible)': 'vasorreactividad'
};
export const compGroups = [
  { name: 'El grupo con tratamiento propio', items: ['Hipertensión arterial pulmonar (grupo 1)'] },
  { name: 'Los grupos frecuentes y el curable', items: ['HP por cardiopatía izquierda (grupo 2)', 'HP por enfermedad pulmonar e hipoxia (grupo 3)', 'HP tromboembólica crónica (grupo 4)'] },
  { name: 'La urgencia y lo demás', items: ['Fallo agudo del ventrículo derecho', 'Grupo 5 y situaciones especiales'] }
];
export const complicacionesIntro = 'La primera ficha es el grupo 1, el único con tratamiento vasodilatador propio y el que organiza todo el vocabulario del tema. Las tres siguientes son los grupos que hay que descartar antes: el 2 y el 3, que son los frecuentes y en los que ese mismo tratamiento hace daño, y el 4, que es raro pero es el único que se puede curar con cirugía y por eso justifica que la gammagrafía sea obligatoria. La quinta ficha es la forma en que esta enfermedad mata, el fallo agudo del ventrículo derecho, donde casi todas las decisiones son contraintuitivas. Y la última recoge el grupo 5 junto con las situaciones que cambian el manejo de cualquier paciente: embarazo, cirugía y altitud.';
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
  root: { title: 'HIPERTENSIÓN PULMONAR', color: '#7a2f5c', target: 'definicion' },
  branches: [
    { title: 'HEMODINAMICA', sub: 'Tres cifras y cuatro perfiles', color: '#7a2f5c', target: 'clasificacion', leaves: [
      { title: 'Media mayor de 20 mmHg', sub: 'Bajo desde 2022', color: '#7a2f5c', target: 'clasificacion' },
      { title: 'Enclavamiento', sub: 'Precapilar o poscapilar', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Resistencia mayor de 2', sub: 'Enfermedad del vaso', color: '#8c3a34', target: 'clasificacion' },
      { title: 'El eco estima, no mide', sub: 'Da probabilidad', color: '#8a6a1f', target: 'diagnostico' }
    ] },
    { title: 'ALGORITMO', sub: 'Lo frecuente primero', color: '#3f6b52', target: 'diagnostico', leaves: [
      { title: 'Descartar grupos 2 y 3', sub: 'Son la gran mayoría', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Gammagrafía obligatoria', sub: 'Descarta el único curable', color: '#7a2f5c', target: 'complicaciones' },
      { title: 'Angiotomografia normal', sub: 'NO descarta el grupo 4', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Centro experto', sub: 'Antes del cateterismo', color: '#3f6b52', target: 'seguimiento' }
    ] },
    { title: 'TRATAMIENTO', sub: 'Por riesgo, no por presión', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Doble terapia de inicio', sub: 'Endotelina más fosfodiesterasa', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Riesgo alto', sub: 'Prostaciclina parenteral ya', color: '#8c3a34', target: 'clasificacion' },
      { title: 'Nada de vasodilatadores', sub: 'En los grupos 2 y 3', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Fallo derecho agudo', sub: 'Noradrenalina y no intubar', color: '#8c1f3d', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2], no_invasivos: [1, 8, 10, 11], imagen: [1, 9, 10] };
export const clasificacionCite = [1, 2, 11];
export const seguimientoCite = [1, 14];
