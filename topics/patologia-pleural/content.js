// topics/patologia-pleural/content.js: Patologia pleural (derrame, empiema, neumotorax y
// hemoptisis).
// Cubre los items "Derrame pleural y patologia pleural", "Empiema pleural", "Neumotorax" y
// "Hemoptisis" del cluster Insuficiencia respiratoria y ventilacion (bloque III, Neumologia) del
// temario. Quinto y ultimo de los temas troncales de Neumologia de esta tanda.
//
// Fuentes principales: guia de la British Thoracic Society de enfermedad pleural (2023), que
// cambio el manejo del neumotorax de un algoritmo basado en el TAMAÑO a otro basado en los
// SINTOMAS; criterios de Light y gradiente de albumina; ensayo MIST2 (fibrinolitico mas DNasa);
// escala RAPID; guia de la AATS para el empiema; ensayo de manejo conservador del neumotorax
// (Brown 2020) y de manejo ambulatorio (Hallifax 2020); ensayos TIME2 y AMPLE en el derrame
// maligno; y las revisiones de Davidson y de Sakr sobre hemoptisis amenazante.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// Estructura: 2 presentaciones (derrame, neumotorax) + 6 fichas. 4 calculadoras, 4 figuras.
// Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'patologia-pleural',
  titulo: 'Patología Pleural',
  subtitulo: 'Módulo 52 · Medicina Interna',
  accent: '#4a5f8c'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const lightHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #4a5f8c;border-radius:8px;padding:5px 9px;background:#4a5f8c12;margin-bottom:6px;">
    <strong style="color:#4a5f8c;">Toda toracocentesis se hace GUIADA POR ECOGRAFÍA.</strong> <span style="color:var(--ink-dim);">La guía de la British Thoracic Society lo recomienda de forma <strong>fuerte</strong>: la punción a ciegas multiplica el neumotórax y la punción en seco. Y las biopsias pleurales ciegas <strong>no deben hacerse</strong>: o son guiadas por imagen, o toracoscopicas.</span>
  </div>

  <div style="border:1px solid var(--line);border-radius:7px;padding:6px 9px;margin-bottom:6px;">
    <div style="font-weight:700;color:#4a5f8c;margin-bottom:3px;">Criterios de Light: es EXUDADO si se cumple AL MENOS UNO</div>
    <div style="color:var(--ink-dim);line-height:1.6;">
      1. Proteínas del líquido / proteínas del suero <strong style="color:var(--ink);">mayor de 0.5</strong><br>
      2. Lactato deshidrogenasa del líquido / del suero <strong style="color:var(--ink);">mayor de 0.6</strong><br>
      3. Lactato deshidrogenasa del líquido <strong style="color:var(--ink);">mayor de dos tercios</strong> del limite alto de la normalidad en suero
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">TRASUDADO</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Problema de <strong style="color:var(--ink);">presiones</strong>, con pleura sana: insuficiencia cardiaca (la causa más frecuente de todas), cirrosis con hidrotórax hepático, síndrome nefrótico, diálisis peritoneal, hipoalbuminemia, atelectasia y pericarditis constrictiva. <strong>Se trata la enfermedad de base, no el derrame.</strong></div>
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">EXUDADO</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Problema de la <strong style="color:var(--ink);">pleura</strong> o de su permeabilidad: paraneumonico y empiema, neoplasia, tuberculosis, embolia pulmonar, pancreatitis, enfermedad autoinmunitaria, quilotorax, fármacos y síndrome posterior a la lesión cardiaca. <strong>Obliga a seguir estudiando.</strong></div>
    </div>
  </div>

  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">La trampa del diurético.</strong> Los criterios de Light son muy sensibles (cerca del 98%) pero poco específicos: clasifican como exudado alrededor de <strong>una cuarta parte de los trasudados</strong>, sobre todo en la insuficiencia cardiaca tratada con diuréticos, que concentran las proteínas del líquido. Cuando la clínica dice trasudado y Light dice exudado, se calcula el <strong>gradiente</strong>: albúmina del suero menos albúmina del líquido <strong>mayor de 1.2 g/dL</strong>, o proteínas del suero menos proteínas del líquido <strong>mayor de 3.1 g/dL</strong>, reclasifican el derrame como trasudado.
  </div>
  <div style="margin-top:4px;padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Que se pide siempre en el líquido</strong>: proteínas, lactato deshidrogenasa, glucosa, pH (en jeringa de gasometría, sin aire y sin anestésico local, procesado pronto), recuento y fórmula celular, citología y cultivo (inoculado también en frascos de hemocultivo, que aumenta el rendimiento). <strong>Según sospecha</strong>: adenosina desaminasa y baciloscopia en la tuberculosis, amilasa en la pancreatitis y en la rotura esofágica, triglicéridos y colesterol en el quilotorax, y hematocrito del líquido en el hemotorax.
  </div>
</div>`;

const paraneumonicoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:124px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">1. SIMPLE<br>(exudativo)</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Líquido libre, claro, <strong style="color:var(--ink);">pH mayor de 7.2</strong>, glucosa normal, sin gérmenes. <strong style="color:#3f6b52;">Antibiótico solo</strong>: se resuelve al tratar la neumonía. Si es pequeño y el paciente mejora, ni siquiera hace falta puncionarlo.</div>
    </div>
    <div style="display:grid;grid-template-columns:124px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">2. COMPLICADO<br>(fibrinopurulento)</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La invasión bacteriana consume glucosa y genera ácido: <strong style="color:var(--ink);">pH de 7.2 o menor</strong>, glucosa por debajo de 60 mg/dL, lactato deshidrogenasa por encima de 1000 U/L, o tinción o cultivo positivos. Aparecen tabiques. <strong style="color:#8c3a34;">Antibiótico MÁS drenaje</strong>: el antibiótico solo no lo resuelve.</div>
    </div>
    <div style="display:grid;grid-template-columns:124px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">3. EMPIEMA<br>(organizativo)</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Pus franco</strong> en la punción. No hace falta ninguna analítica más: el pus se drena. Si se cronifica, la fibrina organizada forma una corteza que atrapa el pulmón y exige decorticación quirúrgica.</div>
    </div>
  </div>

  <div style="margin-top:6px;padding:5px 9px;border:1px solid #4a5f8c;border-radius:8px;background:#4a5f8c10;color:var(--ink-dim);">
    <strong style="color:#4a5f8c;">El pH es la variable que más decide, y la que peor se maneja.</strong> Se recoge en <strong>jeringa de gasometría</strong>, sin burbujas de aire (que lo suben falsamente) y sin anestésico local en la muestra (que lo baja), y se procesa pronto. En el pus franco no se mide, porque estropea el gasometro y no cambia nada. Un pH mayor de 7.2 pero menor de 7.4 es zona intermedia: se decide con la clínica, el tamaño y la presencia de tabiques.
  </div>
  <div style="margin-top:4px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #5b4a86;border-radius:8px;padding:5px 8px;background:#5b4a8610;color:var(--ink-dim);">
      <strong style="color:#5b4a86;">Si el drenaje se atasca.</strong> Cuando el tubo deja de dar y queda colección residual: <strong style="color:var(--ink);">activador tisular del plasminógeno 10 mg más DNasa 5 mg, dos veces al dia durante 3 días</strong>. El fibrinolítico rompe los tabiques y la DNasa reduce la viscosidad del pus. <strong>Los dos juntos</strong>: por separado no funcionan, y la estreptoquinasa no debe usarse.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Cuando llamar al cirujano.</strong> Fracaso del drenaje y del tratamiento intrapleural a los <strong>5 a 7 días</strong>, sepsis persistente, pulmón atrapado por corteza fibrosa o empiema organizado. La cirugía toracoscopica con decorticación es la opción habitual. Un tubo <strong>fino de 10 a 14 French</strong> es tan eficaz como uno grueso y duele mucho menos.
    </div>
  </div>
</div>`;

const neumotoraxHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">El cambio de 2023: ya no se trata el TAMAÑO, se trata al PACIENTE.</strong> <span style="color:var(--ink-dim);">Durante décadas se drenaba todo neumotórax de más de 2 cm. Hoy el manejo conservador se puede considerar en el neumotórax espontáneo primario poco sintomático <strong>con independencia del tamaño</strong>, porque el ensayo que lo comparo con el drenaje mostró resultados no inferiores y muchas menos complicaciones.</span>
  </div>

  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">Hay características<br>de ALTO RIESGO?</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Inestabilidad hemodinámica, hipoxia significativa, neumotórax <strong>bilateral</strong>, <strong>hemoneumotorax</strong>, enfermedad pulmonar de base (es decir, un neumotórax secundario) o edad por encima de 50 años con carga tabaquica importante. <strong style="color:#8c3a34;">Si hay alguna: drenaje.</strong></div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">Sin alto riesgo y<br>POCO SINTOMÁTICO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Manejo conservador</strong>, con independencia del tamaño: observación, analgesia y control clínico y radiológico, con instrucciones claras de cuando volver. Poco sintomático significa sin dolor ni disnea relevantes y sin compromiso fisiológico.</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">Sin alto riesgo y<br>SINTOMÁTICO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Dispositivo ambulatorio</strong> con valvula unidireccional donde haya experiencia y seguimiento (acorta el ingreso), o bien <strong>aspiración con aguja</strong> o <strong>drenaje</strong> si no procede lo anterior. Todas las opciones se comentan con el paciente, priorizando la menos invasiva.</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#7a1f3d22;border:1px solid #7a1f3d;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#7a1f3d;">A TENSIÓN</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:#7a1f3d;">Es un diagnóstico CLÍNICO y no se espera a la radiografía.</strong> Hipotensión, ingurgitación yugular, desviación traqueal, ausencia de murmullo y timpanismo. <strong>Descompresión inmediata con aguja</strong> (en el adulto se prefiere el 4.o o 5.o espacio intercostal en la línea axilar media, porque la pared es más fina que en el 2.o espacio) y después tubo de drenaje.</div>
    </div>
  </div>

  <div style="margin-top:6px;padding:5px 9px;border:1px solid #5b4a86;border-radius:8px;background:#5b4a8610;color:var(--ink-dim);">
    <strong style="color:#5b4a86;">Prevención de recurrencias.</strong> Cirugía electiva ante un <strong>segundo neumotórax del mismo lado</strong> o un <strong>primero del lado contrario</strong>. También tras el primer episodio si la recurrencia sería especialmente grave: <strong>profesiones de riesgo</strong> (buceadores, pilotos, militares) o neumotórax a tensión de inicio. Toracoscopia con pleurodesis quirúrgica y bullectomia, o toracotomia cuando se busca la tasa de recurrencia más baja posible. <strong>El buceo queda contraindicado de por vida</strong> salvo cirugía definitiva bilateral, y no se vuela hasta la resolución completa comprobada.
  </div>
</div>`;

const hemoptisisHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #7a1f3d;border-radius:8px;padding:5px 9px;background:#7a1f3d12;margin-bottom:6px;">
    <strong style="color:#7a1f3d;">En la hemoptisis amenazante no se muere por pérdida de sangre, se muere AHOGADO.</strong> <span style="color:var(--ink-dim);">El árbol bronquial admite muy poco volumen: bastan 150 mL para inundarlo. Por eso lo que define la gravedad no es la cantidad exacta sino el <strong>compromiso de la via aérea o del intercambio</strong>, y por eso la primera medida no es transfundir sino proteger el pulmón sano.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:122px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">1. LADO QUE<br>SANGRA, ABAJO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Decúbito lateral sobre el lado del sangrado para que la gravedad proteja el pulmón sano. Es la primera maniobra, gratis y a menudo la que salva. Si se desconoce el lado, es una de las razones para hacer la tomografía pronto.</div>
    </div>
    <div style="display:grid;grid-template-columns:122px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">2. VIA AÉREA y<br>SOPORTE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Oxígeno, dos vías, pruebas cruzadas y <strong style="color:var(--ink);">corrección de la coagulación</strong>. Umbral bajo para intubar, con <strong>tubo de calibre grande</strong> que permita aspirar y broncoscopia posterior; si hace falta aislar, intubación selectiva del pulmón sano. Ácido tranexámico, por via sistémica o nebulizada.</div>
    </div>
    <div style="display:grid;grid-template-columns:122px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">3. TOMOGRAFÍA<br>ANGIOGRÁFICA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Es la prueba de elección para <strong style="color:var(--ink);">localizar el sangrado, encontrar la causa y mapear las arterias bronquiales</strong> antes de la embolización. Localiza el origen en la mayoría de los casos y aporta más información que la broncoscopia inicial en el paciente estable.</div>
    </div>
    <div style="display:grid;grid-template-columns:122px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">4. EMBOLIZACIÓN<br>ARTERIAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Tratamiento de elección.</strong> Alrededor del 90% de las hemoptisis amenazantes proceden de la circulación BRONQUIAL, que es sistémica y de alta presión, y no de la pulmonar. Control inmediato en la gran mayoría, con recidiva en una minoría. La complicación temida, hoy rara, es la isquemia medular por la arteria espinal anterior.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Dos errores clásicos.</strong> El primero, confundirla con una hematemesis o con un sangrado de la via aérea superior: la sangre de la hemoptisis es roja, espumosa y alcalina, y va acompañada de tos. El segundo, <strong>sentar al paciente o ponerlo en decúbito supino</strong>: hay que colocarlo sobre el lado que sangra. La cirugía queda como último recurso, para el sangrado localizado que no cede a la embolización.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El espacio pleural normal contiene apenas unos mililitros de líquido y ninguna cantidad de aire. La patología pleural consiste, casi toda, en que ese espacio se llena de algo que no debería estar ahi: <strong>líquido</strong> (derrame), <strong>pus</strong> (empiema), <strong>aire</strong> (neumotórax) o <strong>sangre</strong> (hemotorax). A ello se añade la hemoptisis, que no es pleural pero comparte con el neumotórax a tensión la característica de ser una urgencia en la que el orden de las maniobras decide el desenlace.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El derrame: dos preguntas y una trampa.</strong></p>
<p style="margin:0 0 12px;">Ante un derrame hay que responder dos cosas: <strong>es trasudado o exudado?</strong> y, si es exudado, <strong>de que?</strong>. Los criterios de Light separan lo primero con una sensibilidad muy alta, al precio de una especificidad mediocre: clasifican como exudado cerca de una cuarta parte de los trasudados, sobre todo en la insuficiencia cardiaca tratada con diuréticos. Ahi entra el <strong>gradiente de albúmina</strong>, que rescata el diagnóstico. Y una regla que hoy es innegociable: <strong>toda toracocentesis se hace guiada por ecografía</strong>, y las biopsias pleurales a ciegas no deben hacerse.</p>
${figBlock('Figura 1', 'Trasudado o exudado: criterios de Light y la trampa del diurético', lightHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El derrame de la neumonía: tres estadios y una decisión.</strong></p>
<p style="margin:0 0 12px;">Alrededor del 40% de las neumonías que ingresan tienen derrame, y de ellas una parte evoluciona a infección pleural. El proceso es un continuo en tres estadios: <strong>exudativo simple</strong>, <strong>fibrinopurulento o complicado</strong> y <strong>organizativo o empiema</strong>. La decisión que importa es una sola: <strong>este derrame necesita drenaje o basta con el antibiótico?</strong>, y la responde sobre todo el pH del líquido. Es también la razón por la que todo derrame significativo en una neumonía que no mejora debe puncionarse: el empiema no se cura con antibiótico solo, por muchos días que se prolongue.</p>
${figBlock('Figura 2', 'Derrame paraneumonico: los tres estadios y cuando se drena', paraneumonicoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El neumotórax y el cambio de 2023.</strong></p>
<p style="margin:0 0 12px;">Durante décadas el algoritmo era geometrico: si el neumotórax medido en la radiografía superaba los 2 cm, se drenaba. La guía de 2023 dio la vuelta al planteamiento y lo hizo <strong>clínico</strong>: lo que decide es si hay <strong>características de alto riesgo</strong> y cuantos síntomas tiene el paciente, y el manejo conservador puede considerarse en el espontáneo primario poco sintomático <strong>con independencia del tamaño</strong>. La razón es que el ensayo que comparo ambas estrategias mostró resultados no inferiores con muchas menos complicaciones: un tubo de tórax no es un gesto menor.</p>
${figBlock('Figura 3', 'Neumotórax: el algoritmo por síntomas y riesgo, y el de tensión', neumotoraxHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La hemoptisis amenazante.</strong></p>
<p style="margin:0 0 12px;">Aquí la cifra importa menos de lo que parece. Se han propuesto umbrales entre 100 y 600 mL en 24 horas, pero lo que define la urgencia es que la sangre <strong>comprometa la via aérea o el intercambio gaseoso</strong>: el árbol bronquial se inunda con 150 mL, de modo que el paciente se ahoga mucho antes de desangrarse. La otra idea que hay que fijar es anatómica: el <strong>90% procede de la circulación bronquial</strong>, que es sistémica y de alta presión, y de ahi que el tratamiento de elección sea la embolización arterial y no la cirugía.</p>
${figBlock('Figura 4', 'Hemoptisis amenazante: el orden de las cuatro maniobras', hemoptisisHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No puncionar la pleura sin ecografía. No hacer biopsias pleurales a ciegas. No etiquetar de exudado un derrame de insuficiencia cardiaca tratada con diuréticos sin calcular el gradiente de albúmina. No tratar un empiema solo con antibiótico. No medir el pH en pus franco ni mandar la muestra con aire o con anestésico local dentro. No usar fibrinolítico ni DNasa por separado en la infección pleural, ni estreptoquinasa. No esperar a la radiografía ante un neumotórax a tensión. No drenar por sistema un neumotórax primario poco sintomático solo por su tamaño. Y no sentar ni poner boca arriba a un paciente con hemoptisis masiva: el lado que sangra va abajo.</p>`;

export const bibliografia = [
  'Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society guideline for pleural disease. Thorax. 2023;78(Suppl 3):s1-s42.',
  'Light RW, Macgregor MI, Luchsinger PC, Ball WC. Pleural effusions: the diagnostic separation of transudates and exudates. Ann Intern Med. 1972;77(4):507-513.',
  'Roth BJ, OMeara TF, Cragun WH. The serum-effusion albumin gradient in the evaluation of pleural effusions. Chest. 1990;98(3):546-549.',
  'Rahman NM, Maskell NA, West A, et al. Intrapleural use of tissue plasminogen activator and DNase in pleural infection. N Engl J Med. 2011;365(6):518-526.',
  'Maskell NA, Davies CW, Nunn AJ, et al. UK controlled trial of intrapleural streptokinase for pleural infection. N Engl J Med. 2005;352(9):865-874.',
  'Rahman NM, Kahan BC, Miller RF, Gleeson FV, Nunn AJ, Maskell NA. A clinical score (RAPID) to identify those at risk for poor outcome at presentation in patients with pleural infection. Chest. 2014;145(4):848-855.',
  'Shen KR, Bribriesco A, Crabtree T, et al. The American Association for Thoracic Surgery consensus guidelines for the management of empyema. J Thorac Cardiovasc Surg. 2017;153(6):e129-e146.',
  'Brown SGA, Ball EL, Perrin K, et al. Conservative versus interventional treatment for spontaneous pneumothorax. N Engl J Med. 2020;382(5):405-415.',
  'Hallifax RJ, McKeown E, Sivakumar P, et al. Ambulatory management of primary spontaneous pneumothorax: an open-label, randomised controlled trial. Lancet. 2020;396(10243):39-49.',
  'MacDuff A, Arnold A, Harvey J. Management of spontaneous pneumothorax: British Thoracic Society pleural disease guideline 2010. Thorax. 2010;65(Suppl 2):ii18-ii31.',
  'Davies HE, Mishra EK, Kahan BC, et al. Effect of an indwelling pleural catheter vs chest tube and talc pleurodesis for relieving dyspnea in patients with malignant pleural effusion: the TIME2 randomized controlled trial. JAMA. 2012;307(22):2383-2389.',
  'Thomas R, Fysh ETH, Smith NA, et al. Effect of an indwelling pleural catheter vs talc pleurodesis on hospitalization days in patients with malignant pleural effusion: the AMPLE randomized clinical trial. JAMA. 2017;318(19):1903-1912.',
  'Feller-Kopman DJ, Reddy CB, DeCamp MM, et al. Management of malignant pleural effusions: an official ATS/STS/STR clinical practice guideline. Am J Respir Crit Care Med. 2018;198(7):839-849.',
  'Davidson K, Shojaee S. Managing massive hemoptysis. Chest. 2020;157(1):77-88.',
  'Sakr L, Dutau H. Massive hemoptysis: an update on the role of bronchoscopy in diagnosis and management. Respiration. 2010;80(1):38-58.',
  'Porcel JM, Light RW. Pleural effusions. Dis Mon. 2013;59(2):29-57.',
  'Havelock T, Teoh R, Laws D, Gleeson F. Pleural procedures and thoracic ultrasound: British Thoracic Society pleural disease guideline 2010. Thorax. 2010;65(Suppl 2):ii61-ii76.',
  'Light RW. Pleural effusions. Med Clin North Am. 2011;95(6):1055-1070.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Derrame pleural',
      tituloB: 'Neumotorax',
      compensada: 'Disnea proporcional al volumen y a la rapidez de instauración, dolor pleurítico si hay inflamación de la pleura parietal, y tos seca. En la exploración, el trio característico: MATIDEZ a la percusión, ABOLICIÓN del murmullo vesicular y DISMINUCIÓN de las vibraciones vocales, con soplo pleural y egofonía en el limite superior. Esa disminución de las vibraciones es lo que lo separa de la consolidación, en la que AUMENTAN. En derrames masivos, desplazamiento del mediastino al lado contrario.',
      descompensada: 'Dolor torácico de inicio brusco, punzante y pleurítico, con disnea que depende del tamaño y de la reserva pulmonar previa. Timpanismo a la percusión, abolición del murmullo vesicular y disminución de las vibraciones vocales en el hemitórax afectado. En el neumotórax A TENSIÓN se añaden hipotensión, taquicardia, ingurgitación yugular, desviación traqueal al lado contrario y deterioro rápido: es un diagnóstico CLÍNICO que no espera a la radiografía.'
    },
    laboratorio: [
      { prueba: 'Análisis del líquido pleural: proteínas y lactato deshidrogenasa (calculadora disponible)', utilidad: 'Base de los criterios de Light, que separan trasudado de exudado. Se extrae SIEMPRE una muestra de suero simultánea, porque los criterios son cocientes: sin el suero no se pueden aplicar y hay que repetir la punción.' },
      { prueba: 'pH del líquido pleural (calculadora disponible)', utilidad: 'La variable que más decide en el derrame paraneumonico: un pH de 7.2 o menor indica derrame complicado y necesidad de drenaje. Se recoge en jeringa de gasometría, SIN aire (que lo eleva falsamente) y SIN anestésico local en la muestra (que lo baja), y se procesa pronto. No se mide en el pus franco.' },
      { prueba: 'Glucosa, recuento y fórmula celular', utilidad: 'Glucosa por debajo de 60 mg/dL en el derrame complicado, la artritis reumatoide, la tuberculosis y la neoplasia. Predominio de neutrófilos en el proceso agudo, de linfocitos en la tuberculosis, la neoplasia y el linfoma, y eosinofilia con aire o sangre en la pleura, fármacos y parásitos.' },
      { prueba: 'Albúmina en suero y en líquido', utilidad: 'Rescata el diagnóstico cuando la clínica dice trasudado y los criterios de Light dicen exudado, típicamente en la insuficiencia cardiaca tratada con diuréticos. Un gradiente de albúmina (suero menos líquido) mayor de 1.2 g/dL, o de proteínas mayor de 3.1 g/dL, reclasifica el derrame como trasudado.' },
      { prueba: 'Citología y cultivo', utilidad: 'La citología es diagnóstica en cerca del 60% de los derrames malignos, y su rendimiento sube al repetirla y con volúmenes mayores. El cultivo se inocula también en frascos de hemocultivo, lo que aumenta el rendimiento en la infección pleural.' },
      { prueba: 'Adenosina desaminasa y estudio de tuberculosis', utilidad: 'En el derrame linfocitario de causa no aclarada. Una adenosina desaminasa alta apoya con fuerza la tuberculosis pleural en zonas de prevalencia intermedia o alta. El cultivo del líquido tiene un rendimiento bajo, y la biopsia pleural lo mejora mucho.' },
      { prueba: 'Amilasa, triglicéridos y colesterol', utilidad: 'Amilasa alta en la pancreatitis, la rotura esofágica y algunas neoplasias. Triglicéridos por encima de 110 mg/dL definen el quilotorax, típico de la lesión del conducto torácico y del linfoma. El colesterol alto con triglicéridos bajos corresponde al seudoquilotorax de los derrames crónicos.' },
      { prueba: 'Hemograma, coagulación y pruebas cruzadas en la hemoptisis', utilidad: 'En la hemoptisis amenazante, la prioridad analítica es la coagulación: corregirla es una de las pocas medidas que se pueden aplicar de inmediato. Un hematocrito del líquido pleural superior a la mitad del sanguíneo define el hemotorax.' }
    ],
    no_invasivos: [
      { metodo: 'Ecografía torácica', interpretacion: 'Prueba clave del tema. Detecta derrames muy pequeños, distingue líquido libre de tabicado, guía la punción y el drenaje, y busca el deslizamiento pleural, cuya ausencia sugiere neumotórax. La guía de la British Thoracic Society recomienda de forma fuerte que toda toracocentesis sea guiada por imagen.', cutoff: 'Un derrame con separación pleural mayor de 10 mm en una neumonía que no mejora debe puncionarse' },
      { metodo: 'Criterios de Light (calculadora disponible)', interpretacion: 'Es exudado si se cumple al menos uno: cociente de proteínas líquido/suero mayor de 0.5, cociente de lactato deshidrogenasa mayor de 0.6, o lactato deshidrogenasa del líquido mayor de dos tercios del limite alto del suero.', cutoff: 'Sensibilidad cercana al 98% y especificidad en torno al 80%: clasifica mal como exudado a una cuarta parte de los trasudados' },
      { metodo: 'Gradientes de albúmina y de proteínas (calculadora disponible)', interpretacion: 'Corrección de los criterios de Light cuando la clínica sugiere trasudado. Se aplican sobre todo en la insuficiencia cardiaca tratada con diuréticos, que concentran las proteínas del líquido.', cutoff: 'Gradiente de albúmina mayor de 1.2 g/dL, o de proteínas mayor de 3.1 g/dL: trasudado' },
      { metodo: 'Clasificación del derrame paraneumonico (calculadora disponible)', interpretacion: 'Integra el aspecto del líquido, el pH, la glucosa, la lactato deshidrogenasa, la microbiologia y la presencia de tabiques para decidir si basta con antibiótico o hace falta drenaje.', cutoff: 'pH de 7.2 o menor, glucosa menor de 60 mg/dL, lactato deshidrogenasa mayor de 1000 U/L, germen visible o pus: drenar' },
      { metodo: 'Escala RAPID en la infección pleural (calculadora disponible)', interpretacion: 'Urea, edad, purulencia, origen de la infección (comunitario u hospitalario) y albúmina. Estratifica el riesgo de mala evolución y ayuda a informar al paciente y a decidir la intensidad del seguimiento.', cutoff: '0 a 2 bajo riesgo, 3 a 4 intermedio, 5 a 7 alto riesgo' },
      { metodo: 'Valoración del neumotórax por síntomas y riesgo (calculadora disponible)', interpretacion: 'Desde 2023 el manejo no se decide por el tamaño sino por la presencia de características de alto riesgo y por la carga sintomática. El manejo conservador es una opción en el primario poco sintomático con independencia del tamaño.', cutoff: 'Alto riesgo: inestabilidad, hipoxia significativa, bilateralidad, hemoneumotorax, enfermedad pulmonar de base o edad mayor de 50 años con tabaquismo importante' },
      { metodo: 'Electrocardiograma y monitorización', interpretacion: 'En el neumotórax a tensión y en el derrame masivo, para detectar la repercusión hemodinámica. El neumotórax izquierdo puede producir cambios electrocardiográficos que imitan la isquemia, un error diagnóstico clásico.', cutoff: 'Sin umbral; el contexto clínico manda' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'En el derrame, borramiento del seno costofrenico (que requiere unos 200 mL en proyección posteroanterior) y menisco de Damoiseau. En el neumotórax, línea de pleura visceral con ausencia de trama vascular por fuera. En el paciente en decúbito, el aire se acumula en la zona anterior y puede pasar desapercibido: el signo del surco profundo es la clave.' },
      { modalidad: 'Ecografía torácica a pie de cama', hallazgos: 'Más sensible que la radiografía para el derrame y para el neumotórax. Busca tabiques, mide el volumen accesible y guía el procedimiento. En el neumotórax, ausencia de deslizamiento pleural y del signo de la orilla en modo M, con el punto pulmonar como signo específico.' },
      { modalidad: 'Tomografía de tórax', hallazgos: 'Define la anatomía pleural, distingue empiema de absceso pulmonar (el empiema tiene forma lenticular y el signo de la pleura escindida, con realce de ambas hojas), detecta engrosamiento nodular sugestivo de malignidad y valora el pulmón subyacente. Recomendada en el seguimiento de la infección pleural con síntomas persistentes para descartar neoplasia oculta.' },
      { modalidad: 'Tomografía angiográfica en la hemoptisis', hallazgos: 'Prueba de elección en la hemoptisis amenazante del paciente estable: localiza el sangrado, identifica la causa y mapea las arterias bronquiales antes de la embolización. Aporta más información que la broncoscopia inicial y no retrasa el tratamiento.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La patología pleural se ordena por <strong>lo que ocupa el espacio</strong>: líquido, pus, aire o sangre. El derrame se clasifica primero en <strong>trasudado o exudado</strong> con los criterios de Light, y el exudado después por su causa. El derrame de la neumonía tiene su propia clasificación en tres estadios que decide el drenaje, y la infección pleural una escala pronostica propia. El neumotórax se clasifica por <strong>mecanismo</strong> (espontáneo primario o secundario, traumático, iatrogénico) y, desde 2023, se maneja según <strong>síntomas y características de alto riesgo</strong> y no según su tamaño. La hemoptisis se gradua por el compromiso funcional que produce, no por los mililitros.`,
    escalas: [
      { nombre: 'Criterios de Light (calculadora disponible)', componentes: 'Proteínas y lactato deshidrogenasa en líquido pleural y en suero, extraídos de forma simultánea.', formula: 'Exudado si se cumple AL MENOS UNO: proteínas líquido/suero mayor de 0.5; lactato deshidrogenasa líquido/suero mayor de 0.6; lactato deshidrogenasa del líquido mayor de dos tercios del limite alto normal del suero.', interpretacion: 'Sensibilidad cercana al 98% para el exudado, con especificidad en torno al 80%. Ese desequilibrio esta buscado: es preferible estudiar de más un trasudado que dar por banal un exudado maligno o infeccioso.' },
      { nombre: 'Gradientes de albúmina y de proteínas (calculadora disponible)', componentes: 'Albúmina y proteínas totales en suero y en líquido pleural.', formula: 'Gradiente de albúmina = albúmina sérica menos albúmina pleural. Gradiente de proteínas = proteínas séricas menos proteínas pleurales.', interpretacion: 'Un gradiente de albúmina mayor de 1.2 g/dL o de proteínas mayor de 3.1 g/dL reclasifica como trasudado un derrame que los criterios de Light etiquetaron de exudado. Se aplica cuando la clínica apunta claramente a insuficiencia cardiaca y el paciente lleva diuréticos.' },
      { nombre: 'Estadios del derrame paraneumonico (calculadora disponible)', componentes: 'Aspecto del líquido, pH, glucosa, lactato deshidrogenasa, tinción de Gram y cultivo, y presencia de tabiques en la ecografía.', formula: 'Simple: líquido claro, pH mayor de 7.2, sin gérmenes. Complicado: pH de 7.2 o menor, glucosa menor de 60 mg/dL, lactato deshidrogenasa mayor de 1000 U/L, o microbiologia positiva. Empiema: pus franco.', interpretacion: 'El simple se resuelve con antibiótico; el complicado y el empiema necesitan DRENAJE. Es la clasificación que más conducta cambia de todo el tema, y la que justifica puncionar todo derrame significativo en una neumonía que no mejora.' },
      { nombre: 'Escala RAPID de la infección pleural (calculadora disponible)', componentes: 'Urea (Renal), edad (Age), purulencia (Purulence), origen de la infección (Infection source) y albúmina sérica (Dietary factors).', formula: 'Suma de 0 a 7 puntos.', interpretacion: '0 a 2 riesgo bajo, 3 a 4 intermedio, 5 a 7 alto, con mortalidad a 3 meses claramente creciente. No decide por si sola la conducta: sirve para estratificar, informar al paciente y ajustar la intensidad del seguimiento.' },
      { nombre: 'Manejo del neumotórax por síntomas y riesgo (calculadora disponible)', componentes: 'Características de alto riesgo (inestabilidad hemodinámica, hipoxia significativa, bilateralidad, hemoneumotorax, enfermedad pulmonar de base, edad mayor de 50 años con tabaquismo importante) y carga sintomática.', formula: 'Clasificación categórica, sin puntuación.', interpretacion: 'Cambio principal de la guía de 2023: el tamaño deja de ser el criterio. Con alto riesgo, drenaje. Sin alto riesgo y poco sintomático, manejo conservador con independencia del tamaño. Sin alto riesgo y sintomático, dispositivo ambulatorio, aspiración o drenaje.' },
      { nombre: 'Clasificación del neumotórax por mecanismo', componentes: 'Presencia o ausencia de enfermedad pulmonar previa, antecedente traumático y relación con un procedimiento.', formula: 'Espontáneo primario (sin enfermedad conocida), espontáneo secundario (sobre enfermedad pulmonar), traumático e iatrogénico.', interpretacion: 'El secundario tiene peor tolerancia y mayor mortalidad, y prácticamente siempre requiere drenaje e ingreso. El primario aparece en el varón joven, alto y delgado, fumador, por rotura de bullas subpleurales apicales.' },
      { nombre: 'Gravedad de la hemoptisis', componentes: 'Volumen estimado, velocidad del sangrado, compromiso de la via aérea, intercambio gaseoso y estabilidad hemodinámica.', formula: 'Los umbrales propuestos van de 100 a 600 mL en 24 horas, sin consenso.', interpretacion: 'Lo que define la urgencia NO es el volumen sino el compromiso funcional: el árbol bronquial se inunda con unos 150 mL, de modo que el paciente se ahoga mucho antes de desangrarse. Cualquier hemoptisis con hipoxemia, obstrucción o inestabilidad es amenazante, sea cual sea la cifra.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Derrame pleural',
      color: '#4a5f8c',
      definicion: 'Acumulación anormal de líquido en el espacio pleural, que normalmente contiene apenas unos mililitros. Se clasifica en trasudado (problema de presiones con pleura sana) y exudado (problema de la propia pleura o de su permeabilidad).',
      fisiopatologia: 'El líquido pleural se forma por filtración desde los capilares de la pleura parietal y se reabsorbe por los linfáticos parietales, con un recambio continuo y un margen de reserva amplio. El derrame aparece cuando la formación supera a la reabsorción, por tres vías: aumento de la presión hidrostática o descenso de la oncótica (trasudado), aumento de la permeabilidad por inflamación o invasión (exudado), o bloqueo del drenaje linfático (exudado, típico de la neoplasia). El líquido comprime el pulmón, desplaza el diafragma y reduce la capacidad vital, lo que explica la disnea.',
      epidemiologia: 'Es uno de los hallazgos torácicos más frecuentes en el paciente hospitalizado. La causa más común con diferencia es la insuficiencia cardiaca, seguida de la neumonía, la neoplasia y la embolia pulmonar. Entre un 5 y un 20% de los derrames quedan sin diagnóstico tras un estudio completo, y una parte de ellos se resuelve sola.',
      factores_riesgo: ['Insuficiencia cardiaca descompensada', 'Neumonía y otras infecciones respiratorias', 'Neoplasia torácica o metastásica', 'Cirrosis hepática con ascitis', 'Síndrome nefrótico y diálisis peritoneal', 'Embolia pulmonar', 'Enfermedad autoinmunitaria: lupus, artritis reumatoide', 'Cirugía cardiaca o torácica reciente', 'Pancreatitis y patología subdiafragmática', 'Fármacos: amiodarona, metotrexato, nitrofurantoína'],
      clinica: 'Disnea proporcional al volumen y sobre todo a la rapidez de instauración, dolor pleurítico y tos seca. Exploración con matidez, abolición del murmullo vesicular y DISMINUCIÓN de las vibraciones vocales, que es lo que lo separa de la consolidación. Puede ser un hallazgo casual en un paciente asintomático.',
      criterios_dx: 'Radiografía o ecografía compatibles más toracocentesis diagnóstica GUIADA POR ECOGRAFÍA, con aplicación de los criterios de Light sobre muestras simultáneas de líquido y suero. Ver la Figura 1 de Definición. No hace falta puncionar el derrame bilateral pequeno típico de una insuficiencia cardiaca que responde al tratamiento.',
      laboratorio: 'En el líquido: proteínas, lactato deshidrogenasa, glucosa, pH, recuento y fórmula, citología y cultivo. En suero simultáneo: proteínas, lactato deshidrogenasa y albúmina. Según sospecha: adenosina desaminasa, amilasa, triglicéridos, colesterol y hematocrito.',
      imagen: 'Radiografía de tórax, ecografía torácica (más sensible y además guía el procedimiento) y tomografía cuando el derrame es un exudado sin causa clara, hay engrosamiento pleural o se sospecha neoplasia.',
      complementarios: 'Biopsia pleural guiada por imagen o toracoscopica ante exudado sin diagnóstico, especialmente si se sospecha tuberculosis o neoplasia. LAS BIOPSIAS CIEGAS NO DEBEN HACERSE. Toracoscopia médica si el estudio del líquido no es concluyente y persiste la sospecha.',
      dx_diferencial: 'Engrosamiento pleural, atelectasia, elevación diafragmática, tumor pleural sólido y consolidación extensa. En la radiografía en decúbito, un derrame libre puede confundirse con un infiltrado difuso, y la ecografía lo resuelve en segundos.',
      tx_medico: 'Tratar la causa: en el trasudado, la enfermedad de base (diuréticos en la insuficiencia cardiaca), sin necesidad de tocar la pleura. Toracocentesis evacuadora si hay disnea significativa, extrayendo con prudencia y vigilando el dolor torácico, que es la señal de alarma del edema de reexpansion.',
      tx_farmacologico: 'El de la causa. No hay tratamiento farmacológico del derrame en si.',
      tx_intervencionista: 'Toracocentesis evacuadora, drenaje si esta indicado por la causa, pleurodesis o catéter permanente en el derrame maligno recurrente, y decorticación en el pulmón atrapado. Todos los procedimientos, guiados por imagen.',
      criterios_uci: 'Derrame masivo con compromiso respiratorio o hemodinámico, o el que acompaña a una sepsis o a un hemotorax con inestabilidad.',
      criterios_tips: 'En el hidrotórax hepático refractario, la derivación portosistémica intrahepática transyugular es una opción en pacientes seleccionados, con los mismos criterios que en la ascitis refractaria.',
      criterios_trasplante: 'No aplica de forma directa; el hidrotórax hepático refractario es un marcador de hepatopatía avanzada que obliga a valorar el trasplante hepático.',
      seguimiento_hospitalario: 'Radiografía de control tras el procedimiento, valorando neumotórax iatrogénico. Reevaluar si el derrame recidiva rápido, lo que sugiere causa no controlada o diagnóstico erróneo.',
      seguimiento_ambulatorio: 'En el exudado sin diagnóstico, seguimiento estrecho: una proporción se resuelve sola, pero otra corresponde a una neoplasia que se manifiesta después. Tomografía de control y revaluacion si persisten los síntomas.',
      pronostico: 'Depende por completo de la causa. El derrame de la insuficiencia cardiaca se resuelve con el tratamiento; el maligno marca enfermedad avanzada; y el exudado sin diagnóstico tras estudio completo tiene, en conjunto, buen pronóstico.',
      algoritmo: ['Confirmar con radiografía y sobre todo con ECOGRAFÍA torácica', 'Decidir si procede puncionar: el derrame bilateral pequeno de una insuficiencia cardiaca que responde, no', 'Toracocentesis SIEMPRE guiada por ecografía, con muestra de suero simultánea', 'Aplicar los criterios de Light: trasudado o exudado', 'Si Light dice exudado pero la clínica dice trasudado: calcular el gradiente de albúmina', 'Trasudado: tratar la enfermedad de base y no tocar la pleura', 'Exudado: completar el estudio según la sospecha (citología, cultivo, adenosina desaminasa, amilasa)', 'Tomografía si el exudado no se aclara o hay engrosamiento pleural', 'Biopsia guiada por imagen o toracoscopia si sigue sin diagnóstico; nunca a ciegas', 'Evacuar si hay disnea, vigilando el dolor como señal de edema de reexpansion']
    },
    {
      nombre: 'Derrame paraneumonico y empiema',
      color: '#8c3a34',
      definicion: 'Derrame asociado a una neumonía, que evoluciona en un continuo de tres estadios: exudativo simple, fibrinopurulento o complicado, y organizativo o empiema, definido este último por la presencia de pus franco.',
      fisiopatologia: 'La inflamación del parénquima adyacente aumenta la permeabilidad de la pleura visceral y produce un exudado estéril (estadio exudativo). Si las bacterias invaden el espacio pleural, el metabolismo anaerobio de bacterias y neutrófilos consume glucosa y genera ácido lactico y dióxido de carbono: por eso el pH y la glucosa CAEN y la lactato deshidrogenasa SUBE. La activación de la coagulación con inhibición de la fibrinólisis deposita fibrina y forma tabiques (estadio fibrinopurulento). Si no se drena, los fibroblastos organizan esa fibrina en una corteza que atrapa el pulmón (estadio organizativo).',
      epidemiologia: 'Alrededor del 40% de las neumonías que ingresan se acompañan de derrame, y en torno al 10% de esos derrames evolucionan a infección pleural. La incidencia ha aumentado en las últimas décadas. La mortalidad de la infección pleural ronda el 10 al 20%, y una parte importante de los pacientes acaba necesitando cirugía. La microbiologia difiere de la de la neumonía: hay más anaerobios y más estreptococos del grupo anginosus.',
      factores_riesgo: ['Neumonía extensa o de diagnóstico tardío', 'Aspiración y mala higiene bucodental', 'Alcoholismo y consumo de drogas por via parenteral', 'Diabetes y inmunodepresion', 'Enfermedad pulmonar crónica y bronquiectasias', 'Reflujo gastroesofágico y rotura esofágica', 'Cirugía torácica o traumatismo previos', 'Edad avanzada y desnutrición con hipoalbuminemia', 'Nefropatía crónica y hepatopatía', 'Retraso en la punción del derrame'],
      clinica: 'Fiebre persistente, dolor pleurítico, disnea y sudoración en un paciente con neumonía que NO mejora a las 48 a 72 horas de antibiótico correcto. En la forma crónica, síndrome constitucional, anemia y acropaquias. La falta de respuesta al antibiótico es la señal que debe llevar a la ecografía y a la punción.',
      criterios_dx: 'Ecografía con derrame de más de 10 mm y toracocentesis diagnóstica. El diagnóstico y la decisión de drenar se basan en el aspecto (pus franco), el pH (7.2 o menor), la glucosa (menor de 60 mg/dL), la lactato deshidrogenasa (mayor de 1000 U/L) y la microbiologia. Ver la Figura 2 de Definición.',
      laboratorio: 'pH en jeringa de gasometría sin aire ni anestésico, glucosa, lactato deshidrogenasa, proteínas, recuento y fórmula. Tinción de Gram y cultivo, inoculando también en frascos de hemocultivo. Hemocultivos. Albúmina sérica y urea para la escala RAPID.',
      imagen: 'Ecografía torácica para caracterizar tabiques y guiar el drenaje. Tomografía con contraste ante duda o mala evolución: el empiema es lenticular y presenta el signo de la pleura escindida con realce de ambas hojas, a diferencia del absceso pulmonar, que es redondeado y de pared gruesa e irregular. La tomografía de seguimiento se recomienda si persisten síntomas, para descartar neoplasia oculta.',
      complementarios: 'Calcular la escala RAPID al ingreso. Valoración precoz por cirugía torácica en el que no responde. Revisión odontologica y cribado de aspiración cuando el mecanismo lo sugiere.',
      dx_diferencial: 'Absceso pulmonar (que NO se drena con tubo pleural, y confundirlos puede producir una fístula), derrame maligno con sobreinfección, tuberculosis pleural, hemotorax infectado y quilotorax sobreinfectado.',
      tx_medico: 'Antibiótico prolongado, habitualmente de 2 a 6 semanas, ajustado a los cultivos y con cobertura anaerobia (que aquí SI esta indicada, a diferencia de la neumonía por aspiración no complicada). Soporte nutricional, que influye en el pronóstico, y profilaxis antitrombótica.',
      tx_farmacologico: 'Amoxicilina-clavulanico, o cefalosporina con metronidazol, o un carbapenémico según el origen y la gravedad. En la infección nosocomial, cobertura de SARM y de gramnegativos resistentes. TRATAMIENTO INTRAPLEURAL cuando el drenaje cesa y queda colección residual: activador tisular del plasminógeno 10 mg más DNasa 5 mg, dos veces al dia durante 3 días. Los dos JUNTOS: por separado no funcionan, y la estreptoquinasa no debe usarse.',
      tx_intervencionista: 'DRENAJE de todo derrame complicado y de todo empiema, con tubo guiado por ecografía. Un calibre fino de 10 a 14 French es tan eficaz como uno grueso y mucho menos doloroso. Cirugía toracoscopica con desbridamiento y decorticación si no hay respuesta a los 5 a 7 días, si persiste la sepsis o si el pulmón esta atrapado.',
      criterios_uci: 'Sepsis o choque séptico de origen pleural, insuficiencia respiratoria por derrame masivo, o complicaciones del procedimiento.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar el debito y la permeabilidad del tubo: el atasco es la causa más frecuente de falso fracaso. Radiografía o ecografía de control. Revaluar a los 5 a 7 días: si no mejora, tratamiento intrapleural o cirugía, sin dejar pasar más tiempo.',
      seguimiento_ambulatorio: 'Radiografía de control hasta la resolución, que puede tardar meses. Tomografía si persisten síntomas, para descartar una neoplasia subyacente. Rehabilitación respiratoria si queda restricción, y corrección de los factores predisponentes.',
      pronostico: 'Mortalidad del 10 al 20%, mayor en el anciano, en el hospitalario y en el desnutrido, que es lo que captura la escala RAPID. El retraso en el drenaje es el factor modificable de mayor peso.',
      algoritmo: ['Neumonía que no mejora a las 48 a 72 horas: ecografía torácica', 'Puncionar todo derrame de más de 10 mm accesible con seguridad', 'Si sale PUS: empiema, drenar sin más análisis', 'Si no hay pus: medir pH de inmediato, en jeringa de gasometría', 'pH de 7.2 o menor, glucosa baja, lactato deshidrogenasa alta o germen visible: DRENAR', 'Tubo fino de 10 a 14 French guiado por ecografía', 'Antibiótico prolongado con cobertura anaerobia, ajustado a cultivos', 'Calcular la escala RAPID para estratificar el riesgo', 'Si el drenaje cesa con colección residual: fibrinolítico MÁS DNasa, 3 días', 'Sin respuesta a los 5 a 7 días o pulmón atrapado: cirugía toracoscopica']
    },
    {
      nombre: 'Derrame pleural maligno',
      color: '#5b4a86',
      definicion: 'Derrame en el que se demuestran células malignas en el líquido o en la pleura. El derrame paramaligno es el que acompaña a una neoplasia sin invasión pleural demostrada, por obstrucción linfática, atelectasia o neumonitis obstructiva.',
      fisiopatologia: 'La siembra pleural aumenta la permeabilidad capilar y, sobre todo, bloquea el drenaje linfático parietal, que es el mecanismo dominante. A eso se suman la obstrucción bronquial con atelectasia y, en algunos casos, la afectación del conducto torácico. Cuando la pleura visceral se cubre de una capa tumoral rígida, el pulmón no puede reexpandirse tras la evacuación: es el <strong>pulmón atrapado</strong>, que cambia por completo la estrategia porque la pleurodesis no puede funcionar si las dos hojas no contactan.',
      epidemiologia: 'Las causas más frecuentes son el cáncer de pulmón, el de mama y el linfoma, que juntos explican la mayoría. La supervivencia mediana desde el diagnóstico del derrame es corta, de meses, y varia mucho según el tumor: mejor en el de mama y en los tumores con diana molecular, peor en el de pulmón.',
      factores_riesgo: ['Cáncer de pulmón, sobre todo el adenocarcinoma', 'Cáncer de mama', 'Linfoma y neoplasias hematológicas', 'Mesotelioma pleural, con antecedente de asbesto', 'Cáncer de ovario y de tubo digestivo', 'Enfermedad metastásica avanzada', 'Exposición previa a asbesto', 'Neoplasia primaria desconocida con carcinomatosis', 'Radioterapia torácica previa', 'Progresión bajo tratamiento sistémico'],
      clinica: 'Disnea progresiva desproporcionada al volumen si hay pulmón atrapado, tos seca, dolor torácico sordo y síndrome constitucional. Puede ser la primera manifestación de la neoplasia. La reacumulacion rápida tras la evacuación es muy sugestiva.',
      criterios_dx: 'Citología del líquido positiva, que es diagnóstica en cerca del 60% de los casos y mejora al repetir la punción y al enviar volúmenes mayores. Si es negativa y la sospecha persiste, biopsia pleural guiada por imagen o toracoscopia médica, que tiene un rendimiento muy alto y permite tratar en el mismo acto.',
      laboratorio: 'Exudado, con frecuencia hemático y de predominio linfocitario. Glucosa y pH bajos indican gran carga tumoral y se asocian a menor rendimiento de la pleurodesis y a peor supervivencia. Estudios moleculares en el líquido, que permiten obtener el perfil sin necesidad de otra biopsia.',
      imagen: 'Tomografía con contraste: engrosamiento pleural nodular, circunferencial o mayor de 1 cm y afectación de la pleura mediastínica sugieren malignidad. Ecografía para caracterizar y guiar. Tomografía por emision de positrones según el tumor y la estrategia oncológica.',
      complementarios: 'Toracoscopia médica cuando la citología no es concluyente: diagnóstica y permite pleurodesis en el mismo procedimiento. Valoración de la reexpansion tras la evacuación, que es lo que decide entre pleurodesis y catéter permanente.',
      dx_diferencial: 'Derrame paramaligno, tuberculosis pleural (también linfocitaria), embolia pulmonar con infarto, derrame por fármacos, mesotelioma frente a metástasis pleurales, y derrame posterior a radioterapia.',
      tx_medico: 'Tratamiento oncológico de la enfermedad de base, que en tumores con diana molecular puede controlar el derrame sin ningún procedimiento pleural. Manejo de la disnea y cuidados paliativos precoces, que mejoran la calidad de vida y a veces la supervivencia.',
      tx_farmacologico: 'Quimioterapia, inmunoterapia o terapia dirigida según el tumor. Talco como agente de pleurodesis, en suspensión por el tubo o insuflado en toracoscopia. Opioides a dosis bajas para la disnea refractaria.',
      tx_intervencionista: 'En el paciente sin pulmón atrapado se OFRECE A ELEGIR entre pleurodesis con talco y CATÉTER PLEURAL PERMANENTE, comentando riesgos y beneficios: el catéter reduce días de hospital y sirve aunque el pulmón no reexpanda, la pleurodesis evita llevar un tubo. Si hay pulmón atrapado, el catéter es la opción. El drenaje diario del catéter aumenta la tasa de pleurodesis espontánea si retirarlo es una prioridad.',
      criterios_uci: 'Rara vez, salvo derrame masivo con compromiso respiratorio o complicación del procedimiento.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar el edema de reexpansion tras evacuaciones grandes, controlando el dolor torácico como señal de alarma. Educación del paciente y de la familia en el manejo del catéter antes del alta.',
      seguimiento_ambulatorio: 'Seguimiento conjunto con oncología y con el equipo de paliativos. Control del catéter por enfermeria comunitaria, con diario de drenajes. Vigilar la infección del catéter y la loculacion.',
      pronostico: 'Marca enfermedad avanzada, con supervivencia mediana de meses. El pH y la glucosa bajos, el mal estado funcional y el origen pulmonar del tumor empeoran el pronóstico. El objetivo del tratamiento pleural es sintomático: menos disnea y menos días de hospital.',
      algoritmo: ['Confirmar la malignidad con citología del líquido, repitiendo si es negativa', 'Si sigue sin diagnóstico: biopsia guiada por imagen o toracoscopia médica', 'Enviar material para estudio molecular, que puede evitar otra biopsia', 'Evacuar y comprobar si el pulmón REEXPANDE', 'Si reexpande: ofrecer a elegir entre pleurodesis con talco y catéter permanente', 'Si NO reexpande (pulmón atrapado): catéter pleural permanente', 'Coordinar con oncología: algunos tumores controlan el derrame con el tratamiento sistémico', 'Educar al paciente y a la familia en el manejo del catéter', 'Drenaje diario del catéter si retirarlo es una prioridad', 'Cuidados paliativos precoces y control de la disnea']
    },
    {
      nombre: 'Neumotórax espontáneo',
      color: '#3d5a73',
      definicion: 'Presencia de aire en el espacio pleural sin causa traumática. Primario si ocurre sin enfermedad pulmonar conocida, y secundario si hay enfermedad pulmonar de base, que empeora la tolerancia y el pronóstico.',
      fisiopatologia: 'El espacio pleural tiene presión negativa, de modo que cualquier comunicación con el aire lo llena hasta igualar presiones. En el primario el origen suele ser la rotura de bullas o de zonas de enfisema paraseptal en los apices, favorecida por la mayor presión pleural negativa apical del tórax alargado. En el secundario, el aire escapa por la destrucción del parénquima (enfisema, fibrosis quística, neumonía necrotizante, enfermedad intersticial). El colapso reduce el volumen ventilado y produce un cortocircuito transitorio, que se tolera mal cuando la reserva ya estaba comprometida.',
      epidemiologia: 'El primario afecta sobre todo a varones jóvenes, altos y delgados, con una incidencia varias veces mayor en fumadores, en los que el riesgo aumenta de forma dependiente de la dosis. La recurrencia tras un primer episodio es alta, en torno al 30%, y se concentra en el primer año. El secundario aparece en pacientes mayores con EPOC y tiene una mortalidad claramente superior.',
      factores_riesgo: ['Sexo masculino, talla alta y complexion delgada', 'Tabaquismo, con relación dosis-respuesta', 'Antecedente de neumotórax previo', 'EPOC y enfisema', 'Fibrosis quística y bronquiectasias', 'Enfermedad intersticial pulmonar', 'Infección por Pneumocystis y neumonía necrotizante', 'Linfangioleiomiomatosis e histiocitosis de células de Langerhans', 'Síndrome de Marfan y otras conectivopatias', 'Consumo de cannabis inhalado'],
      clinica: 'Dolor torácico pleurítico de inicio brusco y disnea, con timpanismo, abolición del murmullo vesicular y disminución de las vibraciones vocales. En el primario, los síntomas pueden ser leves y llevar días de evolución. En el secundario, incluso un neumotórax pequeno produce disnea intensa por la escasa reserva.',
      criterios_dx: 'Radiografía de tórax con línea de pleura visceral y ausencia de trama vascular por fuera. La ecografía es más sensible y muy útil a pie de cama (ausencia de deslizamiento pleural, con el punto pulmonar como signo específico). La tomografía se reserva a la duda, al enfisema bulloso y a la planificación quirúrgica. Ver la Figura 3 de Definición.',
      laboratorio: 'Sin analítica específica. Gasometría si hay hipoxemia o enfermedad pulmonar de base, en la que puede aparecer hipercapnia.',
      imagen: 'Radiografía en inspiración (la radiografía en espiración no aporta lo suficiente para recomendarla de rutina). Ecografía a pie de cama. Tomografía en el neumotórax secundario, en el recidivante y antes de la cirugía, para valorar bullas y enfermedad subyacente.',
      complementarios: 'Valoración de las características de alto riesgo y de la carga sintomática, que es lo que decide el manejo desde 2023. Consejo sobre tabaco, buceo y vuelo antes del alta.',
      dx_diferencial: 'Bulla gigante (que NO debe drenarse: se distingue por sus bordes concavos hacia la pared y su forma redondeada, y la tomografía lo aclara), síndrome coronario agudo, embolia pulmonar, pleuritis, rotura esofágica y dolor musculoesquelético.',
      tx_medico: 'Oxígeno suplementario en el paciente ingresado, que acelera la reabsorción del aire pleural al aumentar el gradiente de nitrógeno. Analgesia adecuada. ABANDONO DEL TABACO, que reduce de forma marcada la recurrencia y es la única intervención preventiva accesible a todos.',
      tx_farmacologico: 'Sin tratamiento farmacológico específico más allá de la analgesia. En la pleurodesis química, talco o tetraciclina, con analgesia adecuada antes y después del procedimiento.',
      tx_intervencionista: 'Manejo CONSERVADOR en el primario poco sintomático, con independencia del tamaño. Dispositivo AMBULATORIO con valvula unidireccional como opción inicial en el primario sintomático, donde haya experiencia y seguimiento. Aspiración con aguja o drenaje si lo anterior no procede. En el SECUNDARIO, prácticamente siempre drenaje e ingreso. Cirugía toracoscopica con pleurodesis y bullectomia ante segundo episodio ipsilateral, primero contralateral, fuga aérea persistente, profesiones de riesgo o neumotórax a tensión inicial.',
      criterios_uci: 'Neumotórax a tensión, neumotórax bilateral, inestabilidad hemodinámica o insuficiencia respiratoria grave, y el neumotórax del paciente en ventilación mecánica, que puede evolucionar a tensión con rapidez.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa, aunque el neumotórax recurrente en una enfermedad pulmonar avanzada obliga a coordinar con la unidad de trasplante, porque la pleurodesis previa complica la cirugía posterior.',
      seguimiento_hospitalario: 'Radiografía de control y vigilancia de la fuga aérea. Retirar el tubo cuando cesa la fuga y el pulmón esta expandido. Valorar cirugía si la fuga persiste más de 3 a 5 días.',
      seguimiento_ambulatorio: 'Control clínico y radiológico hasta la resolución. Consejo antitabaco insistente. NO VOLAR hasta la resolución completa comprobada, y el BUCEO queda contraindicado de por vida salvo cirugía definitiva bilateral. Instrucciones escritas sobre cuando volver a consultar.',
      pronostico: 'El primario tiene mortalidad prácticamente nula pero recurrencia alta, concentrada en el primer año. El secundario tiene peor pronóstico por la enfermedad de base, con mayor mortalidad y mayor necesidad de cirugía.',
      algoritmo: ['Confirmar con radiografía o ecografía', 'Descartar neumotórax a TENSIÓN, que es clínico y no espera a la imagen', 'Buscar características de ALTO RIESGO', 'Con alto riesgo: drenaje e ingreso', 'Sin alto riesgo y poco sintomático: manejo conservador, sea cual sea el tamaño', 'Sin alto riesgo y sintomático: dispositivo ambulatorio, aspiración o drenaje', 'Comentar las opciones con el paciente y priorizar la menos invasiva', 'Oxígeno suplementario si ingresa, y analgesia adecuada', 'Cirugía si hay segundo episodio ipsilateral, primero contralateral o fuga persistente', 'Al alta: abandono del tabaco, no volar hasta la resolución y buceo contraindicado']
    },
    {
      nombre: 'Neumotórax a tensión, traumático y hemotorax',
      color: '#7a1f3d',
      definicion: 'Neumotórax con mecanismo valvular que acumula aire a presión y comprime el mediastino, o neumotórax y sangrado pleural de origen traumático o iatrogénico. El hemotorax se define por un hematocrito del líquido pleural superior a la mitad del sanguíneo.',
      fisiopatologia: 'En el neumotórax a tensión, una comunicación valvular deja entrar aire en la inspiración y no lo deja salir. La presión pleural se hace positiva, colapsa el pulmón, desplaza el mediastino y, sobre todo, ACODA LAS VENAS CAVAS: el fallo es hemodinámico por caída del retorno venoso, más que respiratorio. Por eso el paciente se hipotensa y no responde a volumen, y por eso la descompresión inmediata revierte el cuadro en segundos. En el hemotorax, la sangre ocupa el espacio, comprime el pulmón y, si se organiza, deja un hemotorax coagulado y después una fibrosis que atrapa el pulmón.',
      epidemiologia: 'El neumotórax a tensión es especialmente frecuente en el paciente con ventilación mecánica y en el traumatismo torácico, donde la presión positiva alimenta la valvula. El hemotorax traumático acompaña con frecuencia a las fracturas costales y es una causa evitable de muerte precoz en el politraumatizado.',
      factores_riesgo: ['Ventilación mecánica con presión positiva', 'Traumatismo torácico cerrado o penetrante', 'Reanimación cardiopulmonar', 'Procedimientos: via central, toracocentesis, biopsia pulmonar, marcapasos', 'Enfermedad pulmonar bullosa', 'Barotrauma en el buceo y en el vuelo', 'Fracturas costales múltiples y volet costal', 'Anticoagulación y coagulopatía, que agravan el hemotorax', 'Neumotórax espontáneo no tratado que progresa', 'Fibrosis quística y neumonía necrotizante'],
      clinica: 'Deterioro rápido con disnea intensa, hipotensión, taquicardia, ingurgitación yugular, desviación traqueal al lado contrario, timpanismo y abolición del murmullo. En el paciente ventilado, ascenso brusco de las presiones de la via aérea con hipotensión. En el hemotorax, matidez, hipoventilación y signos de hipovolemia.',
      criterios_dx: 'El neumotórax a TENSIÓN es un diagnóstico CLÍNICO: no se espera a la radiografía, porque el tiempo que se pierde puede costar la vida. El hemotorax se confirma con ecografía o radiografía y con el hematocrito del líquido obtenido.',
      laboratorio: 'Hemograma seriado, coagulación, pruebas cruzadas y gasometría en el hemotorax. Hematocrito del líquido pleural para confirmar el diagnóstico.',
      imagen: 'Ecografía a pie de cama, que es la prueba más rápida y detecta tanto el aire como la sangre. Radiografía una vez descomprimido. Tomografía en el traumatismo estable, para valorar la extensión y la lesión asociada.',
      complementarios: 'Monitorización continua. Valoración de las lesiones asociadas en el politraumatizado según la sistemática habitual. Control estricto del debito por el tubo, que es lo que decide la toracotomia.',
      dx_diferencial: 'Taponamiento cardiaco (que comparte hipotensión e ingurgitación pero sin timpanismo ni desviación traqueal), embolia pulmonar masiva, infarto de ventrículo derecho, intubación selectiva del bronquio principal derecho y obstrucción del tubo endotraqueal.',
      tx_medico: 'Oxígeno, accesos venosos, reposición de volumen y hemoderivados en el hemotorax, y corrección de la coagulopatía. Analgesia adecuada, que en el traumatismo costal mejora la ventilación y previene la atelectasia y la neumonía.',
      tx_farmacologico: 'Sin fármacos específicos. Analgesia multimodal, incluida la analgesia regional en las fracturas costales, y corrección de la anticoagulación cuando la haya.',
      tx_intervencionista: 'DESCOMPRESIÓN INMEDIATA CON AGUJA ante la sospecha de tensión, sin esperar a la radiografía: en el adulto se prefiere el 4.o o 5.o espacio intercostal en la línea axilar media, porque la pared es más delgada que en el 2.o espacio de la línea medioclavicular y el fallo de la punción es menos frecuente. Después, tubo de drenaje. En el hemotorax, tubo de calibre suficiente. TORACOTOMIA si el debito inicial supera 1000 a 1500 mL o si se mantiene por encima de 200 mL por hora durante 2 a 4 horas. Cirugía toracoscopica precoz en el hemotorax coagulado.',
      criterios_uci: 'Prácticamente todos: inestabilidad hemodinámica, insuficiencia respiratoria, necesidad de transfusión, politraumatismo o ventilación mecánica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Control estricto del debito y de la fuga aérea. Radiografía tras la colocación y tras la retirada. Vigilar el hemotorax retenido, que predispone al empiema y a la fibrosis atrapante, y que se resuelve mejor con cirugía precoz que con fibrinolíticos.',
      seguimiento_ambulatorio: 'Control radiológico hasta la resolución. Fisioterapia respiratoria tras el traumatismo costal. Revaluar la indicación de anticoagulación si la hubo.',
      pronostico: 'El neumotórax a tensión es mortal si no se descomprime y se resuelve por completo si se hace a tiempo: es una de las urgencias con mejor relación entre sencillez del gesto y vidas salvadas. El hemotorax retenido es la complicación que más secuelas deja.',
      algoritmo: ['Ante hipotensión con ingurgitación yugular y timpanismo: sospechar tensión', 'NO esperar a la radiografía: descomprimir con aguja de inmediato', 'En el adulto, 4.o o 5.o espacio intercostal en línea axilar media', 'Colocar después tubo de drenaje y confirmar con radiografía', 'En el paciente ventilado, sospecharlo ante ascenso brusco de presiones con hipotensión', 'En el hemotorax: tubo de calibre suficiente y reposición con hemoderivados', 'Corregir la coagulopatía y revisar la anticoagulación', 'Toracotomia si el debito inicial supera 1000 a 1500 mL o más de 200 mL/hora durante 2 a 4 horas', 'Cirugía toracoscopica precoz si queda hemotorax coagulado', 'Analgesia adecuada y fisioterapia respiratoria en el traumatismo costal']
    },
    {
      nombre: 'Hemoptisis amenazante',
      color: '#8c1f3d',
      definicion: 'Expectoración de sangre procedente del tracto respiratorio inferior que compromete la via aérea, el intercambio gaseoso o la estabilidad hemodinámica. Los umbrales de volumen propuestos van de 100 a 600 mL en 24 horas, sin consenso.',
      fisiopatologia: 'El pulmón tiene doble circulación: la pulmonar, de baja presión, y la bronquial, sistémica y de alta presión. Alrededor del 90% de las hemoptisis amenazantes proceden de la circulación BRONQUIAL, que en la enfermedad crónica prolifera, se hipertrofia y desarrolla anastomosis. Esa es la base anatómica del tratamiento: la embolización arterial bronquial. El riesgo vital no viene de la pérdida de volumen sino de la INUNDACION del árbol bronquial, que admite apenas unos 150 mL: el paciente se asfixia mucho antes de desangrarse.',
      epidemiologia: 'Las causas dominantes varian con la geografia: bronquiectasias, tuberculosis activa o sus secuelas, aspergiloma, cáncer de pulmón, bronquitis crónica y, con menos frecuencia, vasculitis, malformaciones vasculares y embolia pulmonar. La mortalidad de la forma amenazante sin tratamiento es alta, y cae de forma marcada con la embolización.',
      factores_riesgo: ['Bronquiectasias de cualquier causa', 'Tuberculosis activa y secuelas cavitadas', 'Aspergiloma sobre cavidad preexistente', 'Cáncer de pulmón, sobre todo el central', 'Fibrosis quística', 'Anticoagulación y coagulopatía', 'Vasculitis: granulomatosis con poliangeítis, síndrome de Goodpasture', 'Estenosis mitral e hipertensión venosa pulmonar', 'Malformación arteriovenosa pulmonar', 'Traumatismo y procedimientos sobre la via aérea'],
      clinica: 'Expectoración de sangre roja, espumosa y alcalina, acompañada de tos, a veces precedida de un cosquilleo o de un calor en el pecho que el paciente localiza y que orienta al lado del sangrado. Puede haber disnea, hipoxemia, estridor y, en los casos graves, deterioro rápido del nivel de conciencia.',
      criterios_dx: 'Clínico. Lo primero es CONFIRMAR EL ORIGEN: la hematemesis produce sangre oscura, con restos alimentarios y ácida, y el sangrado de la via aérea superior o de la nasofaringe se descarta con la exploración. Después, localizar el lado y la causa, para lo que la tomografía angiográfica es la prueba de elección en el paciente estable.',
      laboratorio: 'Hemograma, coagulación completa, función renal, pruebas cruzadas y gasometría. Estudio de autoinmunidad si se sospecha vasculitis o hemorragia alveolar, y baciloscopia y cultivo si se sospecha tuberculosis.',
      imagen: 'Radiografía inicial, que puede localizar el lado. TOMOGRAFÍA ANGIOGRÁFICA como prueba de elección: localiza el sangrado, identifica la causa y mapea las arterias bronquiales para la embolización, aportando más información que la broncoscopia inicial en el paciente estable.',
      complementarios: 'Broncoscopia, preferentemente rígida en el sangrado activo abundante, que permite aspirar, localizar y aplicar medidas locales: suero frío, adrenalina topica, ácido tranexámico tópico, taponamiento con balón o valvulas endobronquiales.',
      dx_diferencial: 'Hematemesis, sangrado de la via aérea superior o de la nasofaringe, hemorragia alveolar difusa (que produce anemia e infiltrados bilaterales sin sangrado localizado) y seudohemoptisis por infección por Serratia marcescens, que tiñe el esputo de rojo.',
      tx_medico: 'DECÚBITO LATERAL SOBRE EL LADO QUE SANGRA para proteger el pulmón sano por gravedad, que es la primera maniobra y no cuesta nada. Oxígeno, dos vías de calibre grueso, reposición y hemoderivados. Corrección de la coagulopatía y suspensión de anticoagulantes y antiagregantes. Antitusigenos con prudencia, y evitar la fisioterapia respiratoria durante el sangrado.',
      tx_farmacologico: 'ÁCIDO TRANEXÁMICO por via sistémica o nebulizada, que reduce la duración y el volumen del sangrado. Antibiótico o antifúngico según la causa. En la vasculitis, corticoide e inmunosupresor sin demora, porque ahi el tratamiento es de la enfermedad y no del vaso.',
      tx_intervencionista: 'EMBOLIZACIÓN ARTERIAL BRONQUIAL como tratamiento de elección, con control inmediato en la gran mayoría de los casos y recidiva en una minoría. Broncoscopia con medidas locales o taponamiento con balón como puente. INTUBACIÓN con tubo de calibre grande si hay compromiso de la via aérea, con intubación selectiva del pulmón sano si hace falta aislar. Cirugía como último recurso, en el sangrado localizado que no cede.',
      criterios_uci: 'Compromiso de la via aérea, hipoxemia, inestabilidad hemodinámica, necesidad de intubación o de transfusión, y todo paciente en espera de embolización con sangrado activo.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa.',
      seguimiento_hospitalario: 'Vigilancia estrecha tras la embolización por el riesgo de recidiva precoz. Buscar la complicación temida, hoy rara: la isquemia medular por embolización inadvertida de la arteria espinal anterior. Completar el estudio de la causa antes del alta.',
      seguimiento_ambulatorio: 'Tratamiento de la enfermedad de base, que es lo que evita la recidiva: bronquiectasias, tuberculosis, aspergiloma o neoplasia. Revaluar la indicación de anticoagulación. Broncoscopia diferida si no se identifico la causa.',
      pronostico: 'Muy dependiente de la causa y de la rapidez del tratamiento. La embolización controla el episodio en la gran mayoría de los casos, con recidiva en una parte de los pacientes que a menudo responde a una segunda sesión. Las causas malignas tienen peor pronóstico a medio plazo.',
      algoritmo: ['Confirmar que es hemoptisis y no hematemesis ni sangrado de la via aérea superior', 'Colocar al paciente en DECÚBITO LATERAL SOBRE EL LADO QUE SANGRA', 'Oxígeno, dos vías, pruebas cruzadas y monitorización', 'Corregir la coagulación y suspender anticoagulantes y antiagregantes', 'Ácido tranexámico por via sistémica o nebulizada', 'Umbral bajo para intubar, con tubo de calibre grande', 'Tomografía angiográfica para localizar el sangrado y mapear las arterias bronquiales', 'EMBOLIZACIÓN ARTERIAL BRONQUIAL como tratamiento de elección', 'Broncoscopia con medidas locales o balón como puente si hace falta', 'Cirugía solo como último recurso, y tratar después la causa']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La patología pleural es, sobre todo, una patología de procedimientos: casi todo lo que sale mal aquí tiene que ver con puncionar sin ecografía, con no puncionar a tiempo, o con drenar lo que no había que drenar. Lo que sigue es la lista de comprobacion del ingreso.',
    parametros: ['Toda toracocentesis y todo drenaje, GUIADOS POR ECOGRAFÍA. Las biopsias pleurales a ciegas no deben hacerse', 'Extraer siempre una muestra de SUERO simultánea: sin ella no se pueden aplicar los criterios de Light', 'Si Light dice exudado pero la clínica dice trasudado y el paciente lleva diuréticos: calcular el gradiente de albúmina', 'Puncionar todo derrame de más de 10 mm en una neumonía que no mejora a las 48 a 72 horas', 'pH del líquido en jeringa de gasometría, sin aire y sin anestésico local, procesado pronto; nunca en pus franco', 'pH de 7.2 o menor, glucosa menor de 60, lactato deshidrogenasa mayor de 1000, germen visible o pus: DRENAR', 'Tubo fino de 10 a 14 French: igual de eficaz que uno grueso y mucho menos doloroso', 'Si el drenaje cesa con colección residual: fibrinolítico MÁS DNasa, los dos juntos, 3 días', 'Sin respuesta a los 5 a 7 días o pulmón atrapado: cirugía toracoscopica sin dejar pasar más tiempo', 'Neumotórax: decidir por características de alto riesgo y síntomas, NO por el tamaño', 'Neumotórax a tensión: descompresión inmediata con aguja sin esperar a la radiografía', 'Hemoptisis amenazante: lado que sangra ABAJO, corregir la coagulación, tomografía angiográfica y embolización'],
    criterios_uci_general: 'Neumotórax a tensión o bilateral, derrame masivo con compromiso respiratorio o hemodinámico, sepsis de origen pleural, hemotorax con inestabilidad o necesidad de transfusión, y toda hemoptisis amenazante con compromiso de la via aérea o del intercambio.',
    criterios_tips_general: 'La derivación portosistémica intrahepática transyugular es una opción en el hidrotórax hepático refractario, con los mismos criterios de selección que en la ascitis refractaria.',
    criterios_trasplante_general: 'No aplica de forma directa. El neumotórax recurrente sobre enfermedad pulmonar avanzada obliga a coordinar con la unidad de trasplante antes de una pleurodesis, porque complica la cirugía posterior. El hidrotórax hepático refractario es marcador de hepatopatía avanzada.',
    prevencion: 'Primaria: abandono del tabaco (que reduce de forma marcada la recurrencia del neumotórax), vacunación e higiene bucodental para prevenir la infección pleural, y tratamiento adecuado de la neumonía y de las bronquiectasias. Secundaria: punción precoz del derrame paraneumonico, ecografía antes de todo procedimiento pleural y uso de calibres finos. Terciaria: cirugía de prevención de recurrencias en el neumotórax que la merece, tratamiento de la enfermedad de base tras una hemoptisis, y consejo escrito sobre buceo y vuelo antes del alta.'
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
  'Derrame pleural': { definicion: [1, 2, 3, 16, 17], criterios_dx: [1, 2, 3, 16, 17], laboratorio: [1, 2, 3, 16, 17], tx_farmacologico: [1, 2, 3, 16, 17] },
  'Derrame paraneumonico y empiema': { definicion: [1, 4, 5, 6, 7], criterios_dx: [1, 4, 6, 7], laboratorio: [1, 4, 6, 7], tx_farmacologico: [1, 4, 5, 6, 7] },
  'Derrame pleural maligno': { definicion: [11, 12, 13], criterios_dx: [13], laboratorio: [13], tx_farmacologico: [11, 12, 13] },
  'Neumotórax espontáneo': { definicion: [1, 8, 9, 10], criterios_dx: [1, 10], laboratorio: [1, 10], tx_farmacologico: [1, 8, 9, 10] },
  'Neumotórax a tensión, traumático y hemotorax': { definicion: [1, 10], criterios_dx: [1, 10], laboratorio: [1, 10], tx_farmacologico: [1, 10] },
  'Hemoptisis amenazante': { definicion: [14, 15], criterios_dx: [14, 15], laboratorio: [14, 15], tx_farmacologico: [14, 15] }
};
export const estigmasTitulo = 'Signos de la exploración pleural y lo que separa un cuadro de otro';
export const estigmas = [
  { s: 'Matidez a la percusión', p: 'Constante en el derrame', photo: null, desc: 'Aparece a partir de unos 300 a 500 mL. Es el primer signo que se busca, y se acompaña del ascenso de la matidez con la curva de Damoiseau. En el neumotórax ocurre lo contrario: hay TIMPANISMO.' },
  { s: 'Abolición del murmullo vesicular', p: 'Constante', photo: null, desc: 'Común al derrame y al neumotórax, de modo que por si sola no distingue nada. Lo que los separa a pie de cama es la percusión (mate frente a timpánica) y, si hay dudas, la ecografía en unos segundos.' },
  { s: 'Disminución de las vibraciones vocales', p: 'Constante', photo: null, desc: 'El dato que separa el derrame de la CONSOLIDACIÓN: el líquido y el aire aislan y las vibraciones DISMINUYEN, mientras que el pulmón consolidado transmite mejor y AUMENTAN. Con la matidez, esa combinación decide si hay que puncionar.' },
  { s: 'Soplo pleural y egofonía en el limite superior', p: '~30%', photo: null, desc: 'Justo por encima del nivel del líquido, el pulmón comprimido pero aireado transmite un soplo suave y la voz adquiere calidad caprina. Ayuda a delimitar el nivel del derrame sin ninguna prueba.' },
  { s: 'Dolor pleurítico', p: '~50%', photo: null, desc: 'Indica afectación de la pleura PARIETAL, que es la única inervada para el dolor. Puede referirse al hombro por la inervación frénica cuando la afectación es diafragmática, un dato que despista con frecuencia.' },
  { s: 'Timpanismo con abolición del murmullo', p: 'En el neumotórax', photo: null, desc: 'La combinación clásica. En el neumotórax pequeno la exploración puede ser normal, de modo que su ausencia no descarta nada: en la sospecha, la ecografía es más sensible que la radiografía.' },
  { s: 'Ingurgitación yugular con hipotensión', p: 'Neumotórax a tensión', photo: null, desc: 'El fallo del neumotórax a tensión es HEMODINÁMICO: la presión pleural positiva acoda las venas cavas y hunde el retorno venoso. Por eso el paciente no responde a volumen y por eso la descompresión revierte el cuadro en segundos.' },
  { s: 'Desviación traqueal', p: 'Tardío en la tensión', photo: null, desc: 'Signo específico pero tardío y a menudo difícil de apreciar. Esperar a encontrarlo para descomprimir es un error: el diagnóstico de neumotórax a tensión es clínico y se trata antes de tenerlo todo.' },
  { s: 'Ascenso brusco de presiones en el ventilado', p: 'Equivalente en la tensión', photo: null, desc: 'En el paciente con ventilación mecánica, el equivalente de la triada clásica es el ascenso brusco de la presión de la via aérea con hipotensión. Obliga a descartar también auto-PEEP, obstrucción del tubo e intubación selectiva.' },
  { s: 'Acropaquias', p: 'En procesos crónicos', photo: null, desc: 'Acompañan al empiema crónico, a las bronquiectasias y al cáncer de pulmón. En un paciente con hemoptisis o con derrame de larga evolución, orientan hacia una enfermedad supurativa crónica o neoplásica de base.' },
  { s: 'Sangre roja, espumosa y con tos', p: 'Define la hemoptisis', photo: null, desc: 'Frente a la hematemesis, que es oscura, con restos alimentarios y ácida, y viene con náuseas. Confundirlas cambia por completo la conducta, y es uno de los errores clásicos de la urgencia.' },
  { s: 'Sensación de calor o cosquilleo localizado', p: 'Frecuente en la hemoptisis', photo: null, desc: 'Muchos pacientes localizan con precisión el lado del sangrado antes de expectorar. Es un dato barato y útil: permite colocar de inmediato al paciente sobre el lado correcto mientras llega la tomografía.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Criterios de Light (calculadora disponible)': [2, 16],
  'Gradientes de albúmina y de proteínas (calculadora disponible)': [3, 16],
  'Estadios del derrame paraneumonico (calculadora disponible)': [1, 7],
  'Escala RAPID de la infección pleural (calculadora disponible)': [6, 1],
  'Manejo del neumotórax por síntomas y riesgo (calculadora disponible)': [1, 8, 9],
  'Clasificación del neumotórax por mecanismo': [10, 1],
  'Gravedad de la hemoptisis': [14, 15]
};
export const escalaCalc = {
  'Criterios de Light (calculadora disponible)': 'criterios-light',
  'Gradientes de albúmina y de proteínas (calculadora disponible)': 'criterios-light',
  'Estadios del derrame paraneumonico (calculadora disponible)': 'derrame-paraneumonico',
  'Escala RAPID de la infección pleural (calculadora disponible)': 'rapid',
  'Manejo del neumotórax por síntomas y riesgo (calculadora disponible)': 'neumotorax-manejo'
};
export const compGroups = [
  { name: 'Líquido en la pleura', items: ['Derrame pleural', 'Derrame paraneumonico y empiema', 'Derrame pleural maligno'] },
  { name: 'Aire y sangre', items: ['Neumotórax espontáneo', 'Neumotórax a tensión, traumático y hemotorax'] },
  { name: 'La urgencia de la via aérea', items: ['Hemoptisis amenazante'] }
];
export const complicacionesIntro = 'Las tres primeras fichas son las tres formas del derrame que hay que saber separar: el derrame en general, con los criterios de Light y la trampa del diurético; el de la neumonía, donde la decisión es drenar o no drenar; y el maligno, donde la decisión es pleurodesis o catéter permanente. Las dos siguientes son el aire y la sangre: el neumotórax espontáneo con el algoritmo nuevo por síntomas, y el neumotórax a tensión con el traumatismo, donde el gesto que salva es inmediato y no espera a ninguna imagen. La última es la hemoptisis amenazante, que no es pleural pero comparte lo esencial: el orden de las maniobras decide el desenlace.';
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
  root: { title: 'PATOLOGÍA PLEURAL', color: '#4a5f8c', target: 'definicion' },
  branches: [
    { title: 'DERRAME', sub: 'Trasudado o exudado, y de que', color: '#4a5f8c', target: 'clasificacion', leaves: [
      { title: 'Criterios de Light', sub: 'Uno basta para exudado', color: '#4a5f8c', target: 'clasificacion' },
      { title: 'Gradiente de albúmina', sub: 'La trampa del diurético', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Siempre con ecografía', sub: 'Y nunca biopsia ciega', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Maligno', sub: 'Pleurodesis o catéter permanente', color: '#5b4a86', target: 'complicaciones' }
    ] },
    { title: 'INFECCIÓN PLEURAL', sub: 'Drenar o no drenar', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'pH de 7.2 o menor', sub: 'Drenaje', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Pus franco', sub: 'Empiema: se drena sin analizar', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Fibrinolítico más DNasa', sub: 'Los dos juntos, 3 días', color: '#5b4a86', target: 'complicaciones' },
      { title: 'Cirugía a los 5 a 7 días', sub: 'Si no responde', color: '#6b4a2e', target: 'complicaciones' }
    ] },
    { title: 'AIRE Y SANGRE', sub: 'Donde el gesto no espera', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Neumotórax: síntomas y riesgo', sub: 'Ya no manda el tamaño', color: '#3d5a73', target: 'clasificacion' },
      { title: 'A tensión', sub: 'Aguja antes que radiografía', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Hemoptisis: lado abajo', sub: 'Se ahoga antes de desangrarse', color: '#8c1f3d', target: 'complicaciones' },
      { title: 'Embolización bronquial', sub: 'El 90% viene de ahi', color: '#8c1f3d', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2, 3], no_invasivos: [1, 2, 6], imagen: [1, 14, 17] };
export const clasificacionCite = [1, 2, 3, 6];
export const seguimientoCite = [1, 4, 7];
