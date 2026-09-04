// topics/patologia-pleural/content.js: Patologia pleural (derrame, empiema, neumotorax y
// hemoptisis).
// Cubre los items "Derrame pleural y patologia pleural", "Empiema pleural", "Neumotorax" y
// "Hemoptisis" del cluster Insuficiencia respiratoria y ventilacion (bloque III, Neumologia) del
// temario. Quinto y ultimo de los temas troncales de Neumologia de esta tanda.
//
// Fuentes principales: guia de la British Thoracic Society de enfermedad pleural (2023), que
// cambio el manejo del neumotorax de un algoritmo basado en el TAMA&#209;O a otro basado en los
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
  titulo: 'Patologia Pleural',
  subtitulo: 'Modulo 52 · Medicina Interna',
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
    <strong style="color:#4a5f8c;">Toda toracocentesis se hace GUIADA POR ECOGRAFIA.</strong> <span style="color:var(--ink-dim);">La guia de la British Thoracic Society lo recomienda de forma <strong>fuerte</strong>: la puncion a ciegas multiplica el neumotorax y la puncion en seco. Y las biopsias pleurales ciegas <strong>no deben hacerse</strong>: o son guiadas por imagen, o toracoscopicas.</span>
  </div>

  <div style="border:1px solid var(--line);border-radius:7px;padding:6px 9px;margin-bottom:6px;">
    <div style="font-weight:700;color:#4a5f8c;margin-bottom:3px;">Criterios de Light: es EXUDADO si se cumple AL MENOS UNO</div>
    <div style="color:var(--ink-dim);line-height:1.6;">
      1. Proteinas del liquido / proteinas del suero <strong style="color:var(--ink);">mayor de 0.5</strong><br>
      2. Lactato deshidrogenasa del liquido / del suero <strong style="color:var(--ink);">mayor de 0.6</strong><br>
      3. Lactato deshidrogenasa del liquido <strong style="color:var(--ink);">mayor de dos tercios</strong> del limite alto de la normalidad en suero
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">TRASUDADO</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Problema de <strong style="color:var(--ink);">presiones</strong>, con pleura sana: insuficiencia cardiaca (la causa mas frecuente de todas), cirrosis con hidrotorax hepatico, sindrome nefrotico, dialisis peritoneal, hipoalbuminemia, atelectasia y pericarditis constrictiva. <strong>Se trata la enfermedad de base, no el derrame.</strong></div>
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:4px;">EXUDADO</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Problema de la <strong style="color:var(--ink);">pleura</strong> o de su permeabilidad: paraneumonico y empiema, neoplasia, tuberculosis, embolia pulmonar, pancreatitis, enfermedad autoinmunitaria, quilotorax, farmacos y sindrome posterior a la lesion cardiaca. <strong>Obliga a seguir estudiando.</strong></div>
    </div>
  </div>

  <div style="padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">La trampa del diuretico.</strong> Los criterios de Light son muy sensibles (cerca del 98%) pero poco especificos: clasifican como exudado alrededor de <strong>una cuarta parte de los trasudados</strong>, sobre todo en la insuficiencia cardiaca tratada con diureticos, que concentran las proteinas del liquido. Cuando la clinica dice trasudado y Light dice exudado, se calcula el <strong>gradiente</strong>: albumina del suero menos albumina del liquido <strong>mayor de 1.2 g/dL</strong>, o proteinas del suero menos proteinas del liquido <strong>mayor de 3.1 g/dL</strong>, reclasifican el derrame como trasudado.
  </div>
  <div style="margin-top:4px;padding:5px 9px;border:1px solid var(--line);border-radius:8px;color:var(--ink-dim);">
    <strong style="color:var(--ink);">Que se pide siempre en el liquido</strong>: proteinas, lactato deshidrogenasa, glucosa, pH (en jeringa de gasometria, sin aire y sin anestesico local, procesado pronto), recuento y formula celular, citologia y cultivo (inoculado tambien en frascos de hemocultivo, que aumenta el rendimiento). <strong>Segun sospecha</strong>: adenosina desaminasa y baciloscopia en la tuberculosis, amilasa en la pancreatitis y en la rotura esofagica, trigliceridos y colesterol en el quilotorax, y hematocrito del liquido en el hemotorax.
  </div>
</div>`;

const paraneumonicoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:124px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">1. SIMPLE<br>(exudativo)</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Liquido libre, claro, <strong style="color:var(--ink);">pH mayor de 7.2</strong>, glucosa normal, sin germenes. <strong style="color:#3f6b52;">Antibiotico solo</strong>: se resuelve al tratar la neumonia. Si es peque&#241;o y el paciente mejora, ni siquiera hace falta puncionarlo.</div>
    </div>
    <div style="display:grid;grid-template-columns:124px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8a6a1f;">2. COMPLICADO<br>(fibrinopurulento)</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">La invasion bacteriana consume glucosa y genera acido: <strong style="color:var(--ink);">pH de 7.2 o menor</strong>, glucosa por debajo de 60 mg/dL, lactato deshidrogenasa por encima de 1000 U/L, o tincion o cultivo positivos. Aparecen tabiques. <strong style="color:#8c3a34;">Antibiotico MAS drenaje</strong>: el antibiotico solo no lo resuelve.</div>
    </div>
    <div style="display:grid;grid-template-columns:124px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">3. EMPIEMA<br>(organizativo)</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Pus franco</strong> en la puncion. No hace falta ninguna analitica mas: el pus se drena. Si se cronifica, la fibrina organizada forma una corteza que atrapa el pulmon y exige decorticacion quirurgica.</div>
    </div>
  </div>

  <div style="margin-top:6px;padding:5px 9px;border:1px solid #4a5f8c;border-radius:8px;background:#4a5f8c10;color:var(--ink-dim);">
    <strong style="color:#4a5f8c;">El pH es la variable que mas decide, y la que peor se maneja.</strong> Se recoge en <strong>jeringa de gasometria</strong>, sin burbujas de aire (que lo suben falsamente) y sin anestesico local en la muestra (que lo baja), y se procesa pronto. En el pus franco no se mide, porque estropea el gasometro y no cambia nada. Un pH mayor de 7.2 pero menor de 7.4 es zona intermedia: se decide con la clinica, el tama&#241;o y la presencia de tabiques.
  </div>
  <div style="margin-top:4px;display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #5b4a86;border-radius:8px;padding:5px 8px;background:#5b4a8610;color:var(--ink-dim);">
      <strong style="color:#5b4a86;">Si el drenaje se atasca.</strong> Cuando el tubo deja de dar y queda coleccion residual: <strong style="color:var(--ink);">activador tisular del plasminogeno 10 mg mas DNasa 5 mg, dos veces al dia durante 3 dias</strong>. El fibrinolitico rompe los tabiques y la DNasa reduce la viscosidad del pus. <strong>Los dos juntos</strong>: por separado no funcionan, y la estreptoquinasa no debe usarse.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Cuando llamar al cirujano.</strong> Fracaso del drenaje y del tratamiento intrapleural a los <strong>5 a 7 dias</strong>, sepsis persistente, pulmon atrapado por corteza fibrosa o empiema organizado. La cirugia toracoscopica con decorticacion es la opcion habitual. Un tubo <strong>fino de 10 a 14 French</strong> es tan eficaz como uno grueso y duele mucho menos.
    </div>
  </div>
</div>`;

const neumotoraxHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">El cambio de 2023: ya no se trata el TAMA&#209;O, se trata al PACIENTE.</strong> <span style="color:var(--ink-dim);">Durante decadas se drenaba todo neumotorax de mas de 2 cm. Hoy el manejo conservador se puede considerar en el neumotorax espontaneo primario poco sintomatico <strong>con independencia del tama&#241;o</strong>, porque el ensayo que lo comparo con el drenaje mostro resultados no inferiores y muchas menos complicaciones.</span>
  </div>

  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">Hay caracteristicas<br>de ALTO RIESGO?</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Inestabilidad hemodinamica, hipoxia significativa, neumotorax <strong>bilateral</strong>, <strong>hemoneumotorax</strong>, enfermedad pulmonar de base (es decir, un neumotorax secundario) o edad por encima de 50 a&#241;os con carga tabaquica importante. <strong style="color:#8c3a34;">Si hay alguna: drenaje.</strong></div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">Sin alto riesgo y<br>POCO SINTOMATICO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Manejo conservador</strong>, con independencia del tama&#241;o: observacion, analgesia y control clinico y radiologico, con instrucciones claras de cuando volver. Poco sintomatico significa sin dolor ni disnea relevantes y sin compromiso fisiologico.</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">Sin alto riesgo y<br>SINTOMATICO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Dispositivo ambulatorio</strong> con valvula unidireccional donde haya experiencia y seguimiento (acorta el ingreso), o bien <strong>aspiracion con aguja</strong> o <strong>drenaje</strong> si no procede lo anterior. Todas las opciones se comentan con el paciente, priorizando la menos invasiva.</div>
    </div>
    <div style="display:grid;grid-template-columns:130px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#7a1f3d22;border:1px solid #7a1f3d;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#7a1f3d;">A TENSION</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:#7a1f3d;">Es un diagnostico CLINICO y no se espera a la radiografia.</strong> Hipotension, ingurgitacion yugular, desviacion traqueal, ausencia de murmullo y timpanismo. <strong>Descompresion inmediata con aguja</strong> (en el adulto se prefiere el 4.o o 5.o espacio intercostal en la linea axilar media, porque la pared es mas fina que en el 2.o espacio) y despues tubo de drenaje.</div>
    </div>
  </div>

  <div style="margin-top:6px;padding:5px 9px;border:1px solid #5b4a86;border-radius:8px;background:#5b4a8610;color:var(--ink-dim);">
    <strong style="color:#5b4a86;">Prevencion de recurrencias.</strong> Cirugia electiva ante un <strong>segundo neumotorax del mismo lado</strong> o un <strong>primero del lado contrario</strong>. Tambien tras el primer episodio si la recurrencia seria especialmente grave: <strong>profesiones de riesgo</strong> (buceadores, pilotos, militares) o neumotorax a tension de inicio. Toracoscopia con pleurodesis quirurgica y bullectomia, o toracotomia cuando se busca la tasa de recurrencia mas baja posible. <strong>El buceo queda contraindicado de por vida</strong> salvo cirugia definitiva bilateral, y no se vuela hasta la resolucion completa comprobada.
  </div>
</div>`;

const hemoptisisHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #7a1f3d;border-radius:8px;padding:5px 9px;background:#7a1f3d12;margin-bottom:6px;">
    <strong style="color:#7a1f3d;">En la hemoptisis amenazante no se muere por perdida de sangre, se muere AHOGADO.</strong> <span style="color:var(--ink-dim);">El arbol bronquial admite muy poco volumen: bastan 150 mL para inundarlo. Por eso lo que define la gravedad no es la cantidad exacta sino el <strong>compromiso de la via aerea o del intercambio</strong>, y por eso la primera medida no es transfundir sino proteger el pulmon sano.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;">
    <div style="display:grid;grid-template-columns:122px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">1. LADO QUE<br>SANGRA, ABAJO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Decubito lateral sobre el lado del sangrado para que la gravedad proteja el pulmon sano. Es la primera maniobra, gratis y a menudo la que salva. Si se desconoce el lado, es una de las razones para hacer la tomografia pronto.</div>
    </div>
    <div style="display:grid;grid-template-columns:122px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">2. VIA AEREA y<br>SOPORTE</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Oxigeno, dos vias, pruebas cruzadas y <strong style="color:var(--ink);">correccion de la coagulacion</strong>. Umbral bajo para intubar, con <strong>tubo de calibre grande</strong> que permita aspirar y broncoscopia posterior; si hace falta aislar, intubacion selectiva del pulmon sano. Acido tranexamico, por via sistemica o nebulizada.</div>
    </div>
    <div style="display:grid;grid-template-columns:122px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#5b4a8622;border:1px solid #5b4a86;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5b4a86;">3. TOMOGRAFIA<br>ANGIOGRAFICA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Es la prueba de eleccion para <strong style="color:var(--ink);">localizar el sangrado, encontrar la causa y mapear las arterias bronquiales</strong> antes de la embolizacion. Localiza el origen en la mayoria de los casos y aporta mas informacion que la broncoscopia inicial en el paciente estable.</div>
    </div>
    <div style="display:grid;grid-template-columns:122px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">4. EMBOLIZACION<br>ARTERIAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);"><strong style="color:var(--ink);">Tratamiento de eleccion.</strong> Alrededor del 90% de las hemoptisis amenazantes proceden de la circulacion BRONQUIAL, que es sistemica y de alta presion, y no de la pulmonar. Control inmediato en la gran mayoria, con recidiva en una minoria. La complicacion temida, hoy rara, es la isquemia medular por la arteria espinal anterior.</div>
    </div>
  </div>
  <div style="margin-top:6px;padding:5px 9px;border:1px solid #8a6a1f;border-radius:8px;background:#8a6a1f10;color:var(--ink-dim);">
    <strong style="color:#8a6a1f;">Dos errores clasicos.</strong> El primero, confundirla con una hematemesis o con un sangrado de la via aerea superior: la sangre de la hemoptisis es roja, espumosa y alcalina, y va acompa&#241;ada de tos. El segundo, <strong>sentar al paciente o ponerlo en decubito supino</strong>: hay que colocarlo sobre el lado que sangra. La cirugia queda como ultimo recurso, para el sangrado localizado que no cede a la embolizacion.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">El espacio pleural normal contiene apenas unos mililitros de liquido y ninguna cantidad de aire. La patologia pleural consiste, casi toda, en que ese espacio se llena de algo que no deberia estar ahi: <strong>liquido</strong> (derrame), <strong>pus</strong> (empiema), <strong>aire</strong> (neumotorax) o <strong>sangre</strong> (hemotorax). A ello se a&#241;ade la hemoptisis, que no es pleural pero comparte con el neumotorax a tension la caracteristica de ser una urgencia en la que el orden de las maniobras decide el desenlace.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El derrame: dos preguntas y una trampa.</strong></p>
<p style="margin:0 0 12px;">Ante un derrame hay que responder dos cosas: <strong>es trasudado o exudado?</strong> y, si es exudado, <strong>de que?</strong>. Los criterios de Light separan lo primero con una sensibilidad muy alta, al precio de una especificidad mediocre: clasifican como exudado cerca de una cuarta parte de los trasudados, sobre todo en la insuficiencia cardiaca tratada con diureticos. Ahi entra el <strong>gradiente de albumina</strong>, que rescata el diagnostico. Y una regla que hoy es innegociable: <strong>toda toracocentesis se hace guiada por ecografia</strong>, y las biopsias pleurales a ciegas no deben hacerse.</p>
${figBlock('Figura 1', 'Trasudado o exudado: criterios de Light y la trampa del diuretico', lightHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El derrame de la neumonia: tres estadios y una decision.</strong></p>
<p style="margin:0 0 12px;">Alrededor del 40% de las neumonias que ingresan tienen derrame, y de ellas una parte evoluciona a infeccion pleural. El proceso es un continuo en tres estadios: <strong>exudativo simple</strong>, <strong>fibrinopurulento o complicado</strong> y <strong>organizativo o empiema</strong>. La decision que importa es una sola: <strong>este derrame necesita drenaje o basta con el antibiotico?</strong>, y la responde sobre todo el pH del liquido. Es tambien la razon por la que todo derrame significativo en una neumonia que no mejora debe puncionarse: el empiema no se cura con antibiotico solo, por muchos dias que se prolongue.</p>
${figBlock('Figura 2', 'Derrame paraneumonico: los tres estadios y cuando se drena', paraneumonicoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">El neumotorax y el cambio de 2023.</strong></p>
<p style="margin:0 0 12px;">Durante decadas el algoritmo era geometrico: si el neumotorax medido en la radiografia superaba los 2 cm, se drenaba. La guia de 2023 dio la vuelta al planteamiento y lo hizo <strong>clinico</strong>: lo que decide es si hay <strong>caracteristicas de alto riesgo</strong> y cuantos sintomas tiene el paciente, y el manejo conservador puede considerarse en el espontaneo primario poco sintomatico <strong>con independencia del tama&#241;o</strong>. La razon es que el ensayo que comparo ambas estrategias mostro resultados no inferiores con muchas menos complicaciones: un tubo de torax no es un gesto menor.</p>
${figBlock('Figura 3', 'Neumotorax: el algoritmo por sintomas y riesgo, y el de tension', neumotoraxHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La hemoptisis amenazante.</strong></p>
<p style="margin:0 0 12px;">Aqui la cifra importa menos de lo que parece. Se han propuesto umbrales entre 100 y 600 mL en 24 horas, pero lo que define la urgencia es que la sangre <strong>comprometa la via aerea o el intercambio gaseoso</strong>: el arbol bronquial se inunda con 150 mL, de modo que el paciente se ahoga mucho antes de desangrarse. La otra idea que hay que fijar es anatomica: el <strong>90% procede de la circulacion bronquial</strong>, que es sistemica y de alta presion, y de ahi que el tratamiento de eleccion sea la embolizacion arterial y no la cirugia.</p>
${figBlock('Figura 4', 'Hemoptisis amenazante: el orden de las cuatro maniobras', hemoptisisHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No puncionar la pleura sin ecografia. No hacer biopsias pleurales a ciegas. No etiquetar de exudado un derrame de insuficiencia cardiaca tratada con diureticos sin calcular el gradiente de albumina. No tratar un empiema solo con antibiotico. No medir el pH en pus franco ni mandar la muestra con aire o con anestesico local dentro. No usar fibrinolitico ni DNasa por separado en la infeccion pleural, ni estreptoquinasa. No esperar a la radiografia ante un neumotorax a tension. No drenar por sistema un neumotorax primario poco sintomatico solo por su tama&#241;o. Y no sentar ni poner boca arriba a un paciente con hemoptisis masiva: el lado que sangra va abajo.</p>`;

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
      compensada: 'Disnea proporcional al volumen y a la rapidez de instauracion, dolor pleuritico si hay inflamacion de la pleura parietal, y tos seca. En la exploracion, el trio caracteristico: MATIDEZ a la percusion, ABOLICION del murmullo vesicular y DISMINUCION de las vibraciones vocales, con soplo pleural y egofonia en el limite superior. Esa disminucion de las vibraciones es lo que lo separa de la consolidacion, en la que AUMENTAN. En derrames masivos, desplazamiento del mediastino al lado contrario.',
      descompensada: 'Dolor toracico de inicio brusco, punzante y pleuritico, con disnea que depende del tama&#241;o y de la reserva pulmonar previa. Timpanismo a la percusion, abolicion del murmullo vesicular y disminucion de las vibraciones vocales en el hemitorax afectado. En el neumotorax A TENSION se a&#241;aden hipotension, taquicardia, ingurgitacion yugular, desviacion traqueal al lado contrario y deterioro rapido: es un diagnostico CLINICO que no espera a la radiografia.'
    },
    laboratorio: [
      { prueba: 'Analisis del liquido pleural: proteinas y lactato deshidrogenasa (calculadora disponible)', utilidad: 'Base de los criterios de Light, que separan trasudado de exudado. Se extrae SIEMPRE una muestra de suero simultanea, porque los criterios son cocientes: sin el suero no se pueden aplicar y hay que repetir la puncion.' },
      { prueba: 'pH del liquido pleural (calculadora disponible)', utilidad: 'La variable que mas decide en el derrame paraneumonico: un pH de 7.2 o menor indica derrame complicado y necesidad de drenaje. Se recoge en jeringa de gasometria, SIN aire (que lo eleva falsamente) y SIN anestesico local en la muestra (que lo baja), y se procesa pronto. No se mide en el pus franco.' },
      { prueba: 'Glucosa, recuento y formula celular', utilidad: 'Glucosa por debajo de 60 mg/dL en el derrame complicado, la artritis reumatoide, la tuberculosis y la neoplasia. Predominio de neutrofilos en el proceso agudo, de linfocitos en la tuberculosis, la neoplasia y el linfoma, y eosinofilia con aire o sangre en la pleura, farmacos y parasitos.' },
      { prueba: 'Albumina en suero y en liquido', utilidad: 'Rescata el diagnostico cuando la clinica dice trasudado y los criterios de Light dicen exudado, tipicamente en la insuficiencia cardiaca tratada con diureticos. Un gradiente de albumina (suero menos liquido) mayor de 1.2 g/dL, o de proteinas mayor de 3.1 g/dL, reclasifica el derrame como trasudado.' },
      { prueba: 'Citologia y cultivo', utilidad: 'La citologia es diagnostica en cerca del 60% de los derrames malignos, y su rendimiento sube al repetirla y con volumenes mayores. El cultivo se inocula tambien en frascos de hemocultivo, lo que aumenta el rendimiento en la infeccion pleural.' },
      { prueba: 'Adenosina desaminasa y estudio de tuberculosis', utilidad: 'En el derrame linfocitario de causa no aclarada. Una adenosina desaminasa alta apoya con fuerza la tuberculosis pleural en zonas de prevalencia intermedia o alta. El cultivo del liquido tiene un rendimiento bajo, y la biopsia pleural lo mejora mucho.' },
      { prueba: 'Amilasa, trigliceridos y colesterol', utilidad: 'Amilasa alta en la pancreatitis, la rotura esofagica y algunas neoplasias. Trigliceridos por encima de 110 mg/dL definen el quilotorax, tipico de la lesion del conducto toracico y del linfoma. El colesterol alto con trigliceridos bajos corresponde al seudoquilotorax de los derrames cronicos.' },
      { prueba: 'Hemograma, coagulacion y pruebas cruzadas en la hemoptisis', utilidad: 'En la hemoptisis amenazante, la prioridad analitica es la coagulacion: corregirla es una de las pocas medidas que se pueden aplicar de inmediato. Un hematocrito del liquido pleural superior a la mitad del sanguineo define el hemotorax.' }
    ],
    no_invasivos: [
      { metodo: 'Ecografia toracica', interpretacion: 'Prueba clave del tema. Detecta derrames muy peque&#241;os, distingue liquido libre de tabicado, guia la puncion y el drenaje, y busca el deslizamiento pleural, cuya ausencia sugiere neumotorax. La guia de la British Thoracic Society recomienda de forma fuerte que toda toracocentesis sea guiada por imagen.', cutoff: 'Un derrame con separacion pleural mayor de 10 mm en una neumonia que no mejora debe puncionarse' },
      { metodo: 'Criterios de Light (calculadora disponible)', interpretacion: 'Es exudado si se cumple al menos uno: cociente de proteinas liquido/suero mayor de 0.5, cociente de lactato deshidrogenasa mayor de 0.6, o lactato deshidrogenasa del liquido mayor de dos tercios del limite alto del suero.', cutoff: 'Sensibilidad cercana al 98% y especificidad en torno al 80%: clasifica mal como exudado a una cuarta parte de los trasudados' },
      { metodo: 'Gradientes de albumina y de proteinas (calculadora disponible)', interpretacion: 'Correccion de los criterios de Light cuando la clinica sugiere trasudado. Se aplican sobre todo en la insuficiencia cardiaca tratada con diureticos, que concentran las proteinas del liquido.', cutoff: 'Gradiente de albumina mayor de 1.2 g/dL, o de proteinas mayor de 3.1 g/dL: trasudado' },
      { metodo: 'Clasificacion del derrame paraneumonico (calculadora disponible)', interpretacion: 'Integra el aspecto del liquido, el pH, la glucosa, la lactato deshidrogenasa, la microbiologia y la presencia de tabiques para decidir si basta con antibiotico o hace falta drenaje.', cutoff: 'pH de 7.2 o menor, glucosa menor de 60 mg/dL, lactato deshidrogenasa mayor de 1000 U/L, germen visible o pus: drenar' },
      { metodo: 'Escala RAPID en la infeccion pleural (calculadora disponible)', interpretacion: 'Urea, edad, purulencia, origen de la infeccion (comunitario u hospitalario) y albumina. Estratifica el riesgo de mala evolucion y ayuda a informar al paciente y a decidir la intensidad del seguimiento.', cutoff: '0 a 2 bajo riesgo, 3 a 4 intermedio, 5 a 7 alto riesgo' },
      { metodo: 'Valoracion del neumotorax por sintomas y riesgo (calculadora disponible)', interpretacion: 'Desde 2023 el manejo no se decide por el tama&#241;o sino por la presencia de caracteristicas de alto riesgo y por la carga sintomatica. El manejo conservador es una opcion en el primario poco sintomatico con independencia del tama&#241;o.', cutoff: 'Alto riesgo: inestabilidad, hipoxia significativa, bilateralidad, hemoneumotorax, enfermedad pulmonar de base o edad mayor de 50 a&#241;os con tabaquismo importante' },
      { metodo: 'Electrocardiograma y monitorizacion', interpretacion: 'En el neumotorax a tension y en el derrame masivo, para detectar la repercusion hemodinamica. El neumotorax izquierdo puede producir cambios electrocardiograficos que imitan la isquemia, un error diagnostico clasico.', cutoff: 'Sin umbral; el contexto clinico manda' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax', hallazgos: 'En el derrame, borramiento del seno costofrenico (que requiere unos 200 mL en proyeccion posteroanterior) y menisco de Damoiseau. En el neumotorax, linea de pleura visceral con ausencia de trama vascular por fuera. En el paciente en decubito, el aire se acumula en la zona anterior y puede pasar desapercibido: el signo del surco profundo es la clave.' },
      { modalidad: 'Ecografia toracica a pie de cama', hallazgos: 'Mas sensible que la radiografia para el derrame y para el neumotorax. Busca tabiques, mide el volumen accesible y guia el procedimiento. En el neumotorax, ausencia de deslizamiento pleural y del signo de la orilla en modo M, con el punto pulmonar como signo especifico.' },
      { modalidad: 'Tomografia de torax', hallazgos: 'Define la anatomia pleural, distingue empiema de absceso pulmonar (el empiema tiene forma lenticular y el signo de la pleura escindida, con realce de ambas hojas), detecta engrosamiento nodular sugestivo de malignidad y valora el pulmon subyacente. Recomendada en el seguimiento de la infeccion pleural con sintomas persistentes para descartar neoplasia oculta.' },
      { modalidad: 'Tomografia angiografica en la hemoptisis', hallazgos: 'Prueba de eleccion en la hemoptisis amenazante del paciente estable: localiza el sangrado, identifica la causa y mapea las arterias bronquiales antes de la embolizacion. Aporta mas informacion que la broncoscopia inicial y no retrasa el tratamiento.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La patologia pleural se ordena por <strong>lo que ocupa el espacio</strong>: liquido, pus, aire o sangre. El derrame se clasifica primero en <strong>trasudado o exudado</strong> con los criterios de Light, y el exudado despues por su causa. El derrame de la neumonia tiene su propia clasificacion en tres estadios que decide el drenaje, y la infeccion pleural una escala pronostica propia. El neumotorax se clasifica por <strong>mecanismo</strong> (espontaneo primario o secundario, traumatico, iatrogenico) y, desde 2023, se maneja segun <strong>sintomas y caracteristicas de alto riesgo</strong> y no segun su tama&#241;o. La hemoptisis se gradua por el compromiso funcional que produce, no por los mililitros.`,
    escalas: [
      { nombre: 'Criterios de Light (calculadora disponible)', componentes: 'Proteinas y lactato deshidrogenasa en liquido pleural y en suero, extraidos de forma simultanea.', formula: 'Exudado si se cumple AL MENOS UNO: proteinas liquido/suero mayor de 0.5; lactato deshidrogenasa liquido/suero mayor de 0.6; lactato deshidrogenasa del liquido mayor de dos tercios del limite alto normal del suero.', interpretacion: 'Sensibilidad cercana al 98% para el exudado, con especificidad en torno al 80%. Ese desequilibrio esta buscado: es preferible estudiar de mas un trasudado que dar por banal un exudado maligno o infeccioso.' },
      { nombre: 'Gradientes de albumina y de proteinas (calculadora disponible)', componentes: 'Albumina y proteinas totales en suero y en liquido pleural.', formula: 'Gradiente de albumina = albumina serica menos albumina pleural. Gradiente de proteinas = proteinas sericas menos proteinas pleurales.', interpretacion: 'Un gradiente de albumina mayor de 1.2 g/dL o de proteinas mayor de 3.1 g/dL reclasifica como trasudado un derrame que los criterios de Light etiquetaron de exudado. Se aplica cuando la clinica apunta claramente a insuficiencia cardiaca y el paciente lleva diureticos.' },
      { nombre: 'Estadios del derrame paraneumonico (calculadora disponible)', componentes: 'Aspecto del liquido, pH, glucosa, lactato deshidrogenasa, tincion de Gram y cultivo, y presencia de tabiques en la ecografia.', formula: 'Simple: liquido claro, pH mayor de 7.2, sin germenes. Complicado: pH de 7.2 o menor, glucosa menor de 60 mg/dL, lactato deshidrogenasa mayor de 1000 U/L, o microbiologia positiva. Empiema: pus franco.', interpretacion: 'El simple se resuelve con antibiotico; el complicado y el empiema necesitan DRENAJE. Es la clasificacion que mas conducta cambia de todo el tema, y la que justifica puncionar todo derrame significativo en una neumonia que no mejora.' },
      { nombre: 'Escala RAPID de la infeccion pleural (calculadora disponible)', componentes: 'Urea (Renal), edad (Age), purulencia (Purulence), origen de la infeccion (Infection source) y albumina serica (Dietary factors).', formula: 'Suma de 0 a 7 puntos.', interpretacion: '0 a 2 riesgo bajo, 3 a 4 intermedio, 5 a 7 alto, con mortalidad a 3 meses claramente creciente. No decide por si sola la conducta: sirve para estratificar, informar al paciente y ajustar la intensidad del seguimiento.' },
      { nombre: 'Manejo del neumotorax por sintomas y riesgo (calculadora disponible)', componentes: 'Caracteristicas de alto riesgo (inestabilidad hemodinamica, hipoxia significativa, bilateralidad, hemoneumotorax, enfermedad pulmonar de base, edad mayor de 50 a&#241;os con tabaquismo importante) y carga sintomatica.', formula: 'Clasificacion categorica, sin puntuacion.', interpretacion: 'Cambio principal de la guia de 2023: el tama&#241;o deja de ser el criterio. Con alto riesgo, drenaje. Sin alto riesgo y poco sintomatico, manejo conservador con independencia del tama&#241;o. Sin alto riesgo y sintomatico, dispositivo ambulatorio, aspiracion o drenaje.' },
      { nombre: 'Clasificacion del neumotorax por mecanismo', componentes: 'Presencia o ausencia de enfermedad pulmonar previa, antecedente traumatico y relacion con un procedimiento.', formula: 'Espontaneo primario (sin enfermedad conocida), espontaneo secundario (sobre enfermedad pulmonar), traumatico e iatrogenico.', interpretacion: 'El secundario tiene peor tolerancia y mayor mortalidad, y practicamente siempre requiere drenaje e ingreso. El primario aparece en el varon joven, alto y delgado, fumador, por rotura de bullas subpleurales apicales.' },
      { nombre: 'Gravedad de la hemoptisis', componentes: 'Volumen estimado, velocidad del sangrado, compromiso de la via aerea, intercambio gaseoso y estabilidad hemodinamica.', formula: 'Los umbrales propuestos van de 100 a 600 mL en 24 horas, sin consenso.', interpretacion: 'Lo que define la urgencia NO es el volumen sino el compromiso funcional: el arbol bronquial se inunda con unos 150 mL, de modo que el paciente se ahoga mucho antes de desangrarse. Cualquier hemoptisis con hipoxemia, obstruccion o inestabilidad es amenazante, sea cual sea la cifra.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Derrame pleural',
      color: '#4a5f8c',
      definicion: 'Acumulacion anormal de liquido en el espacio pleural, que normalmente contiene apenas unos mililitros. Se clasifica en trasudado (problema de presiones con pleura sana) y exudado (problema de la propia pleura o de su permeabilidad).',
      fisiopatologia: 'El liquido pleural se forma por filtracion desde los capilares de la pleura parietal y se reabsorbe por los linfaticos parietales, con un recambio continuo y un margen de reserva amplio. El derrame aparece cuando la formacion supera a la reabsorcion, por tres vias: aumento de la presion hidrostatica o descenso de la oncotica (trasudado), aumento de la permeabilidad por inflamacion o invasion (exudado), o bloqueo del drenaje linfatico (exudado, tipico de la neoplasia). El liquido comprime el pulmon, desplaza el diafragma y reduce la capacidad vital, lo que explica la disnea.',
      epidemiologia: 'Es uno de los hallazgos torácicos mas frecuentes en el paciente hospitalizado. La causa mas comun con diferencia es la insuficiencia cardiaca, seguida de la neumonia, la neoplasia y la embolia pulmonar. Entre un 5 y un 20% de los derrames quedan sin diagnostico tras un estudio completo, y una parte de ellos se resuelve sola.',
      factores_riesgo: ['Insuficiencia cardiaca descompensada', 'Neumonia y otras infecciones respiratorias', 'Neoplasia toracica o metastasica', 'Cirrosis hepatica con ascitis', 'Sindrome nefrotico y dialisis peritoneal', 'Embolia pulmonar', 'Enfermedad autoinmunitaria: lupus, artritis reumatoide', 'Cirugia cardiaca o toracica reciente', 'Pancreatitis y patologia subdiafragmatica', 'Farmacos: amiodarona, metotrexato, nitrofurantoina'],
      clinica: 'Disnea proporcional al volumen y sobre todo a la rapidez de instauracion, dolor pleuritico y tos seca. Exploracion con matidez, abolicion del murmullo vesicular y DISMINUCION de las vibraciones vocales, que es lo que lo separa de la consolidacion. Puede ser un hallazgo casual en un paciente asintomatico.',
      criterios_dx: 'Radiografia o ecografia compatibles mas toracocentesis diagnostica GUIADA POR ECOGRAFIA, con aplicacion de los criterios de Light sobre muestras simultaneas de liquido y suero. Ver la Figura 1 de Definicion. No hace falta puncionar el derrame bilateral pequeno tipico de una insuficiencia cardiaca que responde al tratamiento.',
      laboratorio: 'En el liquido: proteinas, lactato deshidrogenasa, glucosa, pH, recuento y formula, citologia y cultivo. En suero simultaneo: proteinas, lactato deshidrogenasa y albumina. Segun sospecha: adenosina desaminasa, amilasa, trigliceridos, colesterol y hematocrito.',
      imagen: 'Radiografia de torax, ecografia toracica (mas sensible y ademas guia el procedimiento) y tomografia cuando el derrame es un exudado sin causa clara, hay engrosamiento pleural o se sospecha neoplasia.',
      complementarios: 'Biopsia pleural guiada por imagen o toracoscopica ante exudado sin diagnostico, especialmente si se sospecha tuberculosis o neoplasia. LAS BIOPSIAS CIEGAS NO DEBEN HACERSE. Toracoscopia medica si el estudio del liquido no es concluyente y persiste la sospecha.',
      dx_diferencial: 'Engrosamiento pleural, atelectasia, elevacion diafragmatica, tumor pleural solido y consolidacion extensa. En la radiografia en decubito, un derrame libre puede confundirse con un infiltrado difuso, y la ecografia lo resuelve en segundos.',
      tx_medico: 'Tratar la causa: en el trasudado, la enfermedad de base (diureticos en la insuficiencia cardiaca), sin necesidad de tocar la pleura. Toracocentesis evacuadora si hay disnea significativa, extrayendo con prudencia y vigilando el dolor toracico, que es la se&#241;al de alarma del edema de reexpansion.',
      tx_farmacologico: 'El de la causa. No hay tratamiento farmacologico del derrame en si.',
      tx_intervencionista: 'Toracocentesis evacuadora, drenaje si esta indicado por la causa, pleurodesis o cateter permanente en el derrame maligno recurrente, y decorticacion en el pulmon atrapado. Todos los procedimientos, guiados por imagen.',
      criterios_uci: 'Derrame masivo con compromiso respiratorio o hemodinamico, o el que acompa&#241;a a una sepsis o a un hemotorax con inestabilidad.',
      criterios_tips: 'En el hidrotorax hepatico refractario, la derivacion portosistemica intrahepatica transyugular es una opcion en pacientes seleccionados, con los mismos criterios que en la ascitis refractaria.',
      criterios_trasplante: 'No aplica de forma directa; el hidrotorax hepatico refractario es un marcador de hepatopatia avanzada que obliga a valorar el trasplante hepatico.',
      seguimiento_hospitalario: 'Radiografia de control tras el procedimiento, valorando neumotorax iatrogenico. Reevaluar si el derrame recidiva rapido, lo que sugiere causa no controlada o diagnostico erroneo.',
      seguimiento_ambulatorio: 'En el exudado sin diagnostico, seguimiento estrecho: una proporcion se resuelve sola, pero otra corresponde a una neoplasia que se manifiesta despues. Tomografia de control y revaluacion si persisten los sintomas.',
      pronostico: 'Depende por completo de la causa. El derrame de la insuficiencia cardiaca se resuelve con el tratamiento; el maligno marca enfermedad avanzada; y el exudado sin diagnostico tras estudio completo tiene, en conjunto, buen pronostico.',
      algoritmo: ['Confirmar con radiografia y sobre todo con ECOGRAFIA toracica', 'Decidir si procede puncionar: el derrame bilateral pequeno de una insuficiencia cardiaca que responde, no', 'Toracocentesis SIEMPRE guiada por ecografia, con muestra de suero simultanea', 'Aplicar los criterios de Light: trasudado o exudado', 'Si Light dice exudado pero la clinica dice trasudado: calcular el gradiente de albumina', 'Trasudado: tratar la enfermedad de base y no tocar la pleura', 'Exudado: completar el estudio segun la sospecha (citologia, cultivo, adenosina desaminasa, amilasa)', 'Tomografia si el exudado no se aclara o hay engrosamiento pleural', 'Biopsia guiada por imagen o toracoscopia si sigue sin diagnostico; nunca a ciegas', 'Evacuar si hay disnea, vigilando el dolor como se&#241;al de edema de reexpansion']
    },
    {
      nombre: 'Derrame paraneumonico y empiema',
      color: '#8c3a34',
      definicion: 'Derrame asociado a una neumonia, que evoluciona en un continuo de tres estadios: exudativo simple, fibrinopurulento o complicado, y organizativo o empiema, definido este ultimo por la presencia de pus franco.',
      fisiopatologia: 'La inflamacion del parenquima adyacente aumenta la permeabilidad de la pleura visceral y produce un exudado esteril (estadio exudativo). Si las bacterias invaden el espacio pleural, el metabolismo anaerobio de bacterias y neutrofilos consume glucosa y genera acido lactico y dioxido de carbono: por eso el pH y la glucosa CAEN y la lactato deshidrogenasa SUBE. La activacion de la coagulacion con inhibicion de la fibrinolisis deposita fibrina y forma tabiques (estadio fibrinopurulento). Si no se drena, los fibroblastos organizan esa fibrina en una corteza que atrapa el pulmon (estadio organizativo).',
      epidemiologia: 'Alrededor del 40% de las neumonias que ingresan se acompa&#241;an de derrame, y en torno al 10% de esos derrames evolucionan a infeccion pleural. La incidencia ha aumentado en las ultimas decadas. La mortalidad de la infeccion pleural ronda el 10 al 20%, y una parte importante de los pacientes acaba necesitando cirugia. La microbiologia difiere de la de la neumonia: hay mas anaerobios y mas estreptococos del grupo anginosus.',
      factores_riesgo: ['Neumonia extensa o de diagnostico tardio', 'Aspiracion y mala higiene bucodental', 'Alcoholismo y consumo de drogas por via parenteral', 'Diabetes y inmunodepresion', 'Enfermedad pulmonar cronica y bronquiectasias', 'Reflujo gastroesofagico y rotura esofagica', 'Cirugia toracica o traumatismo previos', 'Edad avanzada y desnutricion con hipoalbuminemia', 'Nefropatia cronica y hepatopatia', 'Retraso en la puncion del derrame'],
      clinica: 'Fiebre persistente, dolor pleuritico, disnea y sudoracion en un paciente con neumonia que NO mejora a las 48 a 72 horas de antibiotico correcto. En la forma cronica, sindrome constitucional, anemia y acropaquias. La falta de respuesta al antibiotico es la se&#241;al que debe llevar a la ecografia y a la puncion.',
      criterios_dx: 'Ecografia con derrame de mas de 10 mm y toracocentesis diagnostica. El diagnostico y la decision de drenar se basan en el aspecto (pus franco), el pH (7.2 o menor), la glucosa (menor de 60 mg/dL), la lactato deshidrogenasa (mayor de 1000 U/L) y la microbiologia. Ver la Figura 2 de Definicion.',
      laboratorio: 'pH en jeringa de gasometria sin aire ni anestesico, glucosa, lactato deshidrogenasa, proteinas, recuento y formula. Tincion de Gram y cultivo, inoculando tambien en frascos de hemocultivo. Hemocultivos. Albumina serica y urea para la escala RAPID.',
      imagen: 'Ecografia toracica para caracterizar tabiques y guiar el drenaje. Tomografia con contraste ante duda o mala evolucion: el empiema es lenticular y presenta el signo de la pleura escindida con realce de ambas hojas, a diferencia del absceso pulmonar, que es redondeado y de pared gruesa e irregular. La tomografía de seguimiento se recomienda si persisten sintomas, para descartar neoplasia oculta.',
      complementarios: 'Calcular la escala RAPID al ingreso. Valoracion precoz por cirugia toracica en el que no responde. Revision odontologica y cribado de aspiracion cuando el mecanismo lo sugiere.',
      dx_diferencial: 'Absceso pulmonar (que NO se drena con tubo pleural, y confundirlos puede producir una fistula), derrame maligno con sobreinfeccion, tuberculosis pleural, hemotorax infectado y quilotorax sobreinfectado.',
      tx_medico: 'Antibiotico prolongado, habitualmente de 2 a 6 semanas, ajustado a los cultivos y con cobertura anaerobia (que aqui SI esta indicada, a diferencia de la neumonia por aspiracion no complicada). Soporte nutricional, que influye en el pronostico, y profilaxis antitrombotica.',
      tx_farmacologico: 'Amoxicilina-clavulanico, o cefalosporina con metronidazol, o un carbapenemico segun el origen y la gravedad. En la infeccion nosocomial, cobertura de SARM y de gramnegativos resistentes. TRATAMIENTO INTRAPLEURAL cuando el drenaje cesa y queda coleccion residual: activador tisular del plasminogeno 10 mg mas DNasa 5 mg, dos veces al dia durante 3 dias. Los dos JUNTOS: por separado no funcionan, y la estreptoquinasa no debe usarse.',
      tx_intervencionista: 'DRENAJE de todo derrame complicado y de todo empiema, con tubo guiado por ecografia. Un calibre fino de 10 a 14 French es tan eficaz como uno grueso y mucho menos doloroso. Cirugia toracoscopica con desbridamiento y decorticacion si no hay respuesta a los 5 a 7 dias, si persiste la sepsis o si el pulmon esta atrapado.',
      criterios_uci: 'Sepsis o choque septico de origen pleural, insuficiencia respiratoria por derrame masivo, o complicaciones del procedimiento.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar el debito y la permeabilidad del tubo: el atasco es la causa mas frecuente de falso fracaso. Radiografia o ecografia de control. Revaluar a los 5 a 7 dias: si no mejora, tratamiento intrapleural o cirugia, sin dejar pasar mas tiempo.',
      seguimiento_ambulatorio: 'Radiografia de control hasta la resolucion, que puede tardar meses. Tomografia si persisten sintomas, para descartar una neoplasia subyacente. Rehabilitacion respiratoria si queda restriccion, y correccion de los factores predisponentes.',
      pronostico: 'Mortalidad del 10 al 20%, mayor en el anciano, en el hospitalario y en el desnutrido, que es lo que captura la escala RAPID. El retraso en el drenaje es el factor modificable de mayor peso.',
      algoritmo: ['Neumonia que no mejora a las 48 a 72 horas: ecografia toracica', 'Puncionar todo derrame de mas de 10 mm accesible con seguridad', 'Si sale PUS: empiema, drenar sin mas analisis', 'Si no hay pus: medir pH de inmediato, en jeringa de gasometria', 'pH de 7.2 o menor, glucosa baja, lactato deshidrogenasa alta o germen visible: DRENAR', 'Tubo fino de 10 a 14 French guiado por ecografia', 'Antibiotico prolongado con cobertura anaerobia, ajustado a cultivos', 'Calcular la escala RAPID para estratificar el riesgo', 'Si el drenaje cesa con coleccion residual: fibrinolitico MAS DNasa, 3 dias', 'Sin respuesta a los 5 a 7 dias o pulmon atrapado: cirugia toracoscopica']
    },
    {
      nombre: 'Derrame pleural maligno',
      color: '#5b4a86',
      definicion: 'Derrame en el que se demuestran celulas malignas en el liquido o en la pleura. El derrame paramaligno es el que acompa&#241;a a una neoplasia sin invasion pleural demostrada, por obstruccion linfatica, atelectasia o neumonitis obstructiva.',
      fisiopatologia: 'La siembra pleural aumenta la permeabilidad capilar y, sobre todo, bloquea el drenaje linfatico parietal, que es el mecanismo dominante. A eso se suman la obstruccion bronquial con atelectasia y, en algunos casos, la afectacion del conducto toracico. Cuando la pleura visceral se cubre de una capa tumoral rigida, el pulmon no puede reexpandirse tras la evacuacion: es el <strong>pulmon atrapado</strong>, que cambia por completo la estrategia porque la pleurodesis no puede funcionar si las dos hojas no contactan.',
      epidemiologia: 'Las causas mas frecuentes son el cancer de pulmon, el de mama y el linfoma, que juntos explican la mayoria. La supervivencia mediana desde el diagnostico del derrame es corta, de meses, y varia mucho segun el tumor: mejor en el de mama y en los tumores con diana molecular, peor en el de pulmon.',
      factores_riesgo: ['Cancer de pulmon, sobre todo el adenocarcinoma', 'Cancer de mama', 'Linfoma y neoplasias hematologicas', 'Mesotelioma pleural, con antecedente de asbesto', 'Cancer de ovario y de tubo digestivo', 'Enfermedad metastasica avanzada', 'Exposicion previa a asbesto', 'Neoplasia primaria desconocida con carcinomatosis', 'Radioterapia toracica previa', 'Progresion bajo tratamiento sistemico'],
      clinica: 'Disnea progresiva desproporcionada al volumen si hay pulmon atrapado, tos seca, dolor toracico sordo y sindrome constitucional. Puede ser la primera manifestacion de la neoplasia. La reacumulacion rapida tras la evacuacion es muy sugestiva.',
      criterios_dx: 'Citologia del liquido positiva, que es diagnostica en cerca del 60% de los casos y mejora al repetir la puncion y al enviar volumenes mayores. Si es negativa y la sospecha persiste, biopsia pleural guiada por imagen o toracoscopia medica, que tiene un rendimiento muy alto y permite tratar en el mismo acto.',
      laboratorio: 'Exudado, con frecuencia hematico y de predominio linfocitario. Glucosa y pH bajos indican gran carga tumoral y se asocian a menor rendimiento de la pleurodesis y a peor supervivencia. Estudios moleculares en el liquido, que permiten obtener el perfil sin necesidad de otra biopsia.',
      imagen: 'Tomografia con contraste: engrosamiento pleural nodular, circunferencial o mayor de 1 cm y afectacion de la pleura mediastinica sugieren malignidad. Ecografia para caracterizar y guiar. Tomografia por emision de positrones segun el tumor y la estrategia oncologica.',
      complementarios: 'Toracoscopia medica cuando la citologia no es concluyente: diagnostica y permite pleurodesis en el mismo procedimiento. Valoracion de la reexpansion tras la evacuacion, que es lo que decide entre pleurodesis y cateter permanente.',
      dx_diferencial: 'Derrame paramaligno, tuberculosis pleural (tambien linfocitaria), embolia pulmonar con infarto, derrame por farmacos, mesotelioma frente a metastasis pleurales, y derrame posterior a radioterapia.',
      tx_medico: 'Tratamiento oncologico de la enfermedad de base, que en tumores con diana molecular puede controlar el derrame sin ningun procedimiento pleural. Manejo de la disnea y cuidados paliativos precoces, que mejoran la calidad de vida y a veces la supervivencia.',
      tx_farmacologico: 'Quimioterapia, inmunoterapia o terapia dirigida segun el tumor. Talco como agente de pleurodesis, en suspension por el tubo o insuflado en toracoscopia. Opioides a dosis bajas para la disnea refractaria.',
      tx_intervencionista: 'En el paciente sin pulmon atrapado se OFRECE A ELEGIR entre pleurodesis con talco y CATETER PLEURAL PERMANENTE, comentando riesgos y beneficios: el cateter reduce dias de hospital y sirve aunque el pulmon no reexpanda, la pleurodesis evita llevar un tubo. Si hay pulmon atrapado, el cateter es la opcion. El drenaje diario del cateter aumenta la tasa de pleurodesis espontanea si retirarlo es una prioridad.',
      criterios_uci: 'Rara vez, salvo derrame masivo con compromiso respiratorio o complicacion del procedimiento.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilar el edema de reexpansion tras evacuaciones grandes, controlando el dolor toracico como se&#241;al de alarma. Educacion del paciente y de la familia en el manejo del cateter antes del alta.',
      seguimiento_ambulatorio: 'Seguimiento conjunto con oncologia y con el equipo de paliativos. Control del cateter por enfermeria comunitaria, con diario de drenajes. Vigilar la infeccion del cateter y la loculacion.',
      pronostico: 'Marca enfermedad avanzada, con supervivencia mediana de meses. El pH y la glucosa bajos, el mal estado funcional y el origen pulmonar del tumor empeoran el pronostico. El objetivo del tratamiento pleural es sintomatico: menos disnea y menos dias de hospital.',
      algoritmo: ['Confirmar la malignidad con citologia del liquido, repitiendo si es negativa', 'Si sigue sin diagnostico: biopsia guiada por imagen o toracoscopia medica', 'Enviar material para estudio molecular, que puede evitar otra biopsia', 'Evacuar y comprobar si el pulmon REEXPANDE', 'Si reexpande: ofrecer a elegir entre pleurodesis con talco y cateter permanente', 'Si NO reexpande (pulmon atrapado): cateter pleural permanente', 'Coordinar con oncologia: algunos tumores controlan el derrame con el tratamiento sistemico', 'Educar al paciente y a la familia en el manejo del cateter', 'Drenaje diario del cateter si retirarlo es una prioridad', 'Cuidados paliativos precoces y control de la disnea']
    },
    {
      nombre: 'Neumotorax espontaneo',
      color: '#3d5a73',
      definicion: 'Presencia de aire en el espacio pleural sin causa traumatica. Primario si ocurre sin enfermedad pulmonar conocida, y secundario si hay enfermedad pulmonar de base, que empeora la tolerancia y el pronostico.',
      fisiopatologia: 'El espacio pleural tiene presion negativa, de modo que cualquier comunicacion con el aire lo llena hasta igualar presiones. En el primario el origen suele ser la rotura de bullas o de zonas de enfisema paraseptal en los apices, favorecida por la mayor presion pleural negativa apical del torax alargado. En el secundario, el aire escapa por la destruccion del parenquima (enfisema, fibrosis quistica, neumonia necrotizante, enfermedad intersticial). El colapso reduce el volumen ventilado y produce un cortocircuito transitorio, que se tolera mal cuando la reserva ya estaba comprometida.',
      epidemiologia: 'El primario afecta sobre todo a varones jovenes, altos y delgados, con una incidencia varias veces mayor en fumadores, en los que el riesgo aumenta de forma dependiente de la dosis. La recurrencia tras un primer episodio es alta, en torno al 30%, y se concentra en el primer a&#241;o. El secundario aparece en pacientes mayores con EPOC y tiene una mortalidad claramente superior.',
      factores_riesgo: ['Sexo masculino, talla alta y complexion delgada', 'Tabaquismo, con relacion dosis-respuesta', 'Antecedente de neumotorax previo', 'EPOC y enfisema', 'Fibrosis quistica y bronquiectasias', 'Enfermedad intersticial pulmonar', 'Infeccion por Pneumocystis y neumonia necrotizante', 'Linfangioleiomiomatosis e histiocitosis de celulas de Langerhans', 'Sindrome de Marfan y otras conectivopatias', 'Consumo de cannabis inhalado'],
      clinica: 'Dolor toracico pleuritico de inicio brusco y disnea, con timpanismo, abolicion del murmullo vesicular y disminucion de las vibraciones vocales. En el primario, los sintomas pueden ser leves y llevar dias de evolucion. En el secundario, incluso un neumotorax pequeno produce disnea intensa por la escasa reserva.',
      criterios_dx: 'Radiografia de torax con linea de pleura visceral y ausencia de trama vascular por fuera. La ecografia es mas sensible y muy util a pie de cama (ausencia de deslizamiento pleural, con el punto pulmonar como signo especifico). La tomografia se reserva a la duda, al enfisema bulloso y a la planificacion quirurgica. Ver la Figura 3 de Definicion.',
      laboratorio: 'Sin analitica especifica. Gasometria si hay hipoxemia o enfermedad pulmonar de base, en la que puede aparecer hipercapnia.',
      imagen: 'Radiografia en inspiracion (la radiografia en espiracion no aporta lo suficiente para recomendarla de rutina). Ecografia a pie de cama. Tomografia en el neumotorax secundario, en el recidivante y antes de la cirugia, para valorar bullas y enfermedad subyacente.',
      complementarios: 'Valoracion de las caracteristicas de alto riesgo y de la carga sintomatica, que es lo que decide el manejo desde 2023. Consejo sobre tabaco, buceo y vuelo antes del alta.',
      dx_diferencial: 'Bulla gigante (que NO debe drenarse: se distingue por sus bordes concavos hacia la pared y su forma redondeada, y la tomografia lo aclara), sindrome coronario agudo, embolia pulmonar, pleuritis, rotura esofagica y dolor musculoesqueletico.',
      tx_medico: 'Oxigeno suplementario en el paciente ingresado, que acelera la reabsorcion del aire pleural al aumentar el gradiente de nitrogeno. Analgesia adecuada. ABANDONO DEL TABACO, que reduce de forma marcada la recurrencia y es la unica intervencion preventiva accesible a todos.',
      tx_farmacologico: 'Sin tratamiento farmacologico especifico mas alla de la analgesia. En la pleurodesis quimica, talco o tetraciclina, con analgesia adecuada antes y despues del procedimiento.',
      tx_intervencionista: 'Manejo CONSERVADOR en el primario poco sintomatico, con independencia del tama&#241;o. Dispositivo AMBULATORIO con valvula unidireccional como opcion inicial en el primario sintomatico, donde haya experiencia y seguimiento. Aspiracion con aguja o drenaje si lo anterior no procede. En el SECUNDARIO, practicamente siempre drenaje e ingreso. Cirugia toracoscopica con pleurodesis y bullectomia ante segundo episodio ipsilateral, primero contralateral, fuga aerea persistente, profesiones de riesgo o neumotorax a tension inicial.',
      criterios_uci: 'Neumotorax a tension, neumotorax bilateral, inestabilidad hemodinamica o insuficiencia respiratoria grave, y el neumotorax del paciente en ventilacion mecanica, que puede evolucionar a tension con rapidez.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa, aunque el neumotorax recurrente en una enfermedad pulmonar avanzada obliga a coordinar con la unidad de trasplante, porque la pleurodesis previa complica la cirugia posterior.',
      seguimiento_hospitalario: 'Radiografia de control y vigilancia de la fuga aerea. Retirar el tubo cuando cesa la fuga y el pulmon esta expandido. Valorar cirugia si la fuga persiste mas de 3 a 5 dias.',
      seguimiento_ambulatorio: 'Control clinico y radiologico hasta la resolucion. Consejo antitabaco insistente. NO VOLAR hasta la resolucion completa comprobada, y el BUCEO queda contraindicado de por vida salvo cirugia definitiva bilateral. Instrucciones escritas sobre cuando volver a consultar.',
      pronostico: 'El primario tiene mortalidad practicamente nula pero recurrencia alta, concentrada en el primer a&#241;o. El secundario tiene peor pronostico por la enfermedad de base, con mayor mortalidad y mayor necesidad de cirugia.',
      algoritmo: ['Confirmar con radiografia o ecografia', 'Descartar neumotorax a TENSION, que es clinico y no espera a la imagen', 'Buscar caracteristicas de ALTO RIESGO', 'Con alto riesgo: drenaje e ingreso', 'Sin alto riesgo y poco sintomatico: manejo conservador, sea cual sea el tama&#241;o', 'Sin alto riesgo y sintomatico: dispositivo ambulatorio, aspiracion o drenaje', 'Comentar las opciones con el paciente y priorizar la menos invasiva', 'Oxigeno suplementario si ingresa, y analgesia adecuada', 'Cirugia si hay segundo episodio ipsilateral, primero contralateral o fuga persistente', 'Al alta: abandono del tabaco, no volar hasta la resolucion y buceo contraindicado']
    },
    {
      nombre: 'Neumotorax a tension, traumatico y hemotorax',
      color: '#7a1f3d',
      definicion: 'Neumotorax con mecanismo valvular que acumula aire a presion y comprime el mediastino, o neumotorax y sangrado pleural de origen traumatico o iatrogenico. El hemotorax se define por un hematocrito del liquido pleural superior a la mitad del sanguineo.',
      fisiopatologia: 'En el neumotorax a tension, una comunicacion valvular deja entrar aire en la inspiracion y no lo deja salir. La presion pleural se hace positiva, colapsa el pulmon, desplaza el mediastino y, sobre todo, ACODA LAS VENAS CAVAS: el fallo es hemodinamico por caida del retorno venoso, mas que respiratorio. Por eso el paciente se hipotensa y no responde a volumen, y por eso la descompresion inmediata revierte el cuadro en segundos. En el hemotorax, la sangre ocupa el espacio, comprime el pulmon y, si se organiza, deja un hemotorax coagulado y despues una fibrosis que atrapa el pulmon.',
      epidemiologia: 'El neumotorax a tension es especialmente frecuente en el paciente con ventilacion mecanica y en el traumatismo toracico, donde la presion positiva alimenta la valvula. El hemotorax traumatico acompa&#241;a con frecuencia a las fracturas costales y es una causa evitable de muerte precoz en el politraumatizado.',
      factores_riesgo: ['Ventilacion mecanica con presion positiva', 'Traumatismo toracico cerrado o penetrante', 'Reanimacion cardiopulmonar', 'Procedimientos: via central, toracocentesis, biopsia pulmonar, marcapasos', 'Enfermedad pulmonar bullosa', 'Barotrauma en el buceo y en el vuelo', 'Fracturas costales multiples y volet costal', 'Anticoagulacion y coagulopatia, que agravan el hemotorax', 'Neumotorax espontaneo no tratado que progresa', 'Fibrosis quistica y neumonia necrotizante'],
      clinica: 'Deterioro rapido con disnea intensa, hipotension, taquicardia, ingurgitacion yugular, desviacion traqueal al lado contrario, timpanismo y abolicion del murmullo. En el paciente ventilado, ascenso brusco de las presiones de la via aerea con hipotension. En el hemotorax, matidez, hipoventilacion y signos de hipovolemia.',
      criterios_dx: 'El neumotorax a TENSION es un diagnostico CLINICO: no se espera a la radiografia, porque el tiempo que se pierde puede costar la vida. El hemotorax se confirma con ecografia o radiografia y con el hematocrito del liquido obtenido.',
      laboratorio: 'Hemograma seriado, coagulacion, pruebas cruzadas y gasometria en el hemotorax. Hematocrito del liquido pleural para confirmar el diagnostico.',
      imagen: 'Ecografia a pie de cama, que es la prueba mas rapida y detecta tanto el aire como la sangre. Radiografia una vez descomprimido. Tomografia en el traumatismo estable, para valorar la extension y la lesion asociada.',
      complementarios: 'Monitorizacion continua. Valoracion de las lesiones asociadas en el politraumatizado segun la sistematica habitual. Control estricto del debito por el tubo, que es lo que decide la toracotomia.',
      dx_diferencial: 'Taponamiento cardiaco (que comparte hipotension e ingurgitacion pero sin timpanismo ni desviacion traqueal), embolia pulmonar masiva, infarto de ventriculo derecho, intubacion selectiva del bronquio principal derecho y obstruccion del tubo endotraqueal.',
      tx_medico: 'Oxigeno, accesos venosos, reposicion de volumen y hemoderivados en el hemotorax, y correccion de la coagulopatia. Analgesia adecuada, que en el traumatismo costal mejora la ventilacion y previene la atelectasia y la neumonia.',
      tx_farmacologico: 'Sin farmacos especificos. Analgesia multimodal, incluida la analgesia regional en las fracturas costales, y correccion de la anticoagulacion cuando la haya.',
      tx_intervencionista: 'DESCOMPRESION INMEDIATA CON AGUJA ante la sospecha de tension, sin esperar a la radiografia: en el adulto se prefiere el 4.o o 5.o espacio intercostal en la linea axilar media, porque la pared es mas delgada que en el 2.o espacio de la linea medioclavicular y el fallo de la puncion es menos frecuente. Despues, tubo de drenaje. En el hemotorax, tubo de calibre suficiente. TORACOTOMIA si el debito inicial supera 1000 a 1500 mL o si se mantiene por encima de 200 mL por hora durante 2 a 4 horas. Cirugia toracoscopica precoz en el hemotorax coagulado.',
      criterios_uci: 'Practicamente todos: inestabilidad hemodinamica, insuficiencia respiratoria, necesidad de transfusion, politraumatismo o ventilacion mecanica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Control estricto del debito y de la fuga aerea. Radiografia tras la colocacion y tras la retirada. Vigilar el hemotorax retenido, que predispone al empiema y a la fibrosis atrapante, y que se resuelve mejor con cirugia precoz que con fibrinoliticos.',
      seguimiento_ambulatorio: 'Control radiologico hasta la resolucion. Fisioterapia respiratoria tras el traumatismo costal. Revaluar la indicacion de anticoagulacion si la hubo.',
      pronostico: 'El neumotorax a tension es mortal si no se descomprime y se resuelve por completo si se hace a tiempo: es una de las urgencias con mejor relacion entre sencillez del gesto y vidas salvadas. El hemotorax retenido es la complicacion que mas secuelas deja.',
      algoritmo: ['Ante hipotension con ingurgitacion yugular y timpanismo: sospechar tension', 'NO esperar a la radiografia: descomprimir con aguja de inmediato', 'En el adulto, 4.o o 5.o espacio intercostal en linea axilar media', 'Colocar despues tubo de drenaje y confirmar con radiografia', 'En el paciente ventilado, sospecharlo ante ascenso brusco de presiones con hipotension', 'En el hemotorax: tubo de calibre suficiente y reposicion con hemoderivados', 'Corregir la coagulopatia y revisar la anticoagulacion', 'Toracotomia si el debito inicial supera 1000 a 1500 mL o mas de 200 mL/hora durante 2 a 4 horas', 'Cirugia toracoscopica precoz si queda hemotorax coagulado', 'Analgesia adecuada y fisioterapia respiratoria en el traumatismo costal']
    },
    {
      nombre: 'Hemoptisis amenazante',
      color: '#8c1f3d',
      definicion: 'Expectoracion de sangre procedente del tracto respiratorio inferior que compromete la via aerea, el intercambio gaseoso o la estabilidad hemodinamica. Los umbrales de volumen propuestos van de 100 a 600 mL en 24 horas, sin consenso.',
      fisiopatologia: 'El pulmon tiene doble circulacion: la pulmonar, de baja presion, y la bronquial, sistemica y de alta presion. Alrededor del 90% de las hemoptisis amenazantes proceden de la circulacion BRONQUIAL, que en la enfermedad cronica prolifera, se hipertrofia y desarrolla anastomosis. Esa es la base anatomica del tratamiento: la embolizacion arterial bronquial. El riesgo vital no viene de la perdida de volumen sino de la INUNDACION del arbol bronquial, que admite apenas unos 150 mL: el paciente se asfixia mucho antes de desangrarse.',
      epidemiologia: 'Las causas dominantes varian con la geografia: bronquiectasias, tuberculosis activa o sus secuelas, aspergiloma, cancer de pulmon, bronquitis cronica y, con menos frecuencia, vasculitis, malformaciones vasculares y embolia pulmonar. La mortalidad de la forma amenazante sin tratamiento es alta, y cae de forma marcada con la embolizacion.',
      factores_riesgo: ['Bronquiectasias de cualquier causa', 'Tuberculosis activa y secuelas cavitadas', 'Aspergiloma sobre cavidad preexistente', 'Cancer de pulmon, sobre todo el central', 'Fibrosis quistica', 'Anticoagulacion y coagulopatia', 'Vasculitis: granulomatosis con poliangeitis, sindrome de Goodpasture', 'Estenosis mitral e hipertension venosa pulmonar', 'Malformacion arteriovenosa pulmonar', 'Traumatismo y procedimientos sobre la via aerea'],
      clinica: 'Expectoracion de sangre roja, espumosa y alcalina, acompa&#241;ada de tos, a veces precedida de un cosquilleo o de un calor en el pecho que el paciente localiza y que orienta al lado del sangrado. Puede haber disnea, hipoxemia, estridor y, en los casos graves, deterioro rapido del nivel de conciencia.',
      criterios_dx: 'Clinico. Lo primero es CONFIRMAR EL ORIGEN: la hematemesis produce sangre oscura, con restos alimentarios y acida, y el sangrado de la via aerea superior o de la nasofaringe se descarta con la exploracion. Despues, localizar el lado y la causa, para lo que la tomografia angiografica es la prueba de eleccion en el paciente estable.',
      laboratorio: 'Hemograma, coagulacion completa, funcion renal, pruebas cruzadas y gasometria. Estudio de autoinmunidad si se sospecha vasculitis o hemorragia alveolar, y baciloscopia y cultivo si se sospecha tuberculosis.',
      imagen: 'Radiografia inicial, que puede localizar el lado. TOMOGRAFIA ANGIOGRAFICA como prueba de eleccion: localiza el sangrado, identifica la causa y mapea las arterias bronquiales para la embolizacion, aportando mas informacion que la broncoscopia inicial en el paciente estable.',
      complementarios: 'Broncoscopia, preferentemente rigida en el sangrado activo abundante, que permite aspirar, localizar y aplicar medidas locales: suero frio, adrenalina topica, acido tranexamico topico, taponamiento con balon o valvulas endobronquiales.',
      dx_diferencial: 'Hematemesis, sangrado de la via aerea superior o de la nasofaringe, hemorragia alveolar difusa (que produce anemia e infiltrados bilaterales sin sangrado localizado) y seudohemoptisis por infeccion por Serratia marcescens, que ti&#241;e el esputo de rojo.',
      tx_medico: 'DECUBITO LATERAL SOBRE EL LADO QUE SANGRA para proteger el pulmon sano por gravedad, que es la primera maniobra y no cuesta nada. Oxigeno, dos vias de calibre grueso, reposicion y hemoderivados. Correccion de la coagulopatia y suspension de anticoagulantes y antiagregantes. Antitusigenos con prudencia, y evitar la fisioterapia respiratoria durante el sangrado.',
      tx_farmacologico: 'ACIDO TRANEXAMICO por via sistemica o nebulizada, que reduce la duracion y el volumen del sangrado. Antibiotico o antifungico segun la causa. En la vasculitis, corticoide e inmunosupresor sin demora, porque ahi el tratamiento es de la enfermedad y no del vaso.',
      tx_intervencionista: 'EMBOLIZACION ARTERIAL BRONQUIAL como tratamiento de eleccion, con control inmediato en la gran mayoria de los casos y recidiva en una minoria. Broncoscopia con medidas locales o taponamiento con balon como puente. INTUBACION con tubo de calibre grande si hay compromiso de la via aerea, con intubacion selectiva del pulmon sano si hace falta aislar. Cirugia como ultimo recurso, en el sangrado localizado que no cede.',
      criterios_uci: 'Compromiso de la via aerea, hipoxemia, inestabilidad hemodinamica, necesidad de intubacion o de transfusion, y todo paciente en espera de embolizacion con sangrado activo.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa.',
      seguimiento_hospitalario: 'Vigilancia estrecha tras la embolizacion por el riesgo de recidiva precoz. Buscar la complicacion temida, hoy rara: la isquemia medular por embolizacion inadvertida de la arteria espinal anterior. Completar el estudio de la causa antes del alta.',
      seguimiento_ambulatorio: 'Tratamiento de la enfermedad de base, que es lo que evita la recidiva: bronquiectasias, tuberculosis, aspergiloma o neoplasia. Revaluar la indicacion de anticoagulacion. Broncoscopia diferida si no se identifico la causa.',
      pronostico: 'Muy dependiente de la causa y de la rapidez del tratamiento. La embolizacion controla el episodio en la gran mayoria de los casos, con recidiva en una parte de los pacientes que a menudo responde a una segunda sesion. Las causas malignas tienen peor pronostico a medio plazo.',
      algoritmo: ['Confirmar que es hemoptisis y no hematemesis ni sangrado de la via aerea superior', 'Colocar al paciente en DECUBITO LATERAL SOBRE EL LADO QUE SANGRA', 'Oxigeno, dos vias, pruebas cruzadas y monitorizacion', 'Corregir la coagulacion y suspender anticoagulantes y antiagregantes', 'Acido tranexamico por via sistemica o nebulizada', 'Umbral bajo para intubar, con tubo de calibre grande', 'Tomografia angiografica para localizar el sangrado y mapear las arterias bronquiales', 'EMBOLIZACION ARTERIAL BRONQUIAL como tratamiento de eleccion', 'Broncoscopia con medidas locales o balon como puente si hace falta', 'Cirugia solo como ultimo recurso, y tratar despues la causa']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La patologia pleural es, sobre todo, una patologia de procedimientos: casi todo lo que sale mal aqui tiene que ver con puncionar sin ecografia, con no puncionar a tiempo, o con drenar lo que no habia que drenar. Lo que sigue es la lista de comprobacion del ingreso.',
    parametros: ['Toda toracocentesis y todo drenaje, GUIADOS POR ECOGRAFIA. Las biopsias pleurales a ciegas no deben hacerse', 'Extraer siempre una muestra de SUERO simultanea: sin ella no se pueden aplicar los criterios de Light', 'Si Light dice exudado pero la clinica dice trasudado y el paciente lleva diureticos: calcular el gradiente de albumina', 'Puncionar todo derrame de mas de 10 mm en una neumonia que no mejora a las 48 a 72 horas', 'pH del liquido en jeringa de gasometria, sin aire y sin anestesico local, procesado pronto; nunca en pus franco', 'pH de 7.2 o menor, glucosa menor de 60, lactato deshidrogenasa mayor de 1000, germen visible o pus: DRENAR', 'Tubo fino de 10 a 14 French: igual de eficaz que uno grueso y mucho menos doloroso', 'Si el drenaje cesa con coleccion residual: fibrinolitico MAS DNasa, los dos juntos, 3 dias', 'Sin respuesta a los 5 a 7 dias o pulmon atrapado: cirugia toracoscopica sin dejar pasar mas tiempo', 'Neumotorax: decidir por caracteristicas de alto riesgo y sintomas, NO por el tama&#241;o', 'Neumotorax a tension: descompresion inmediata con aguja sin esperar a la radiografia', 'Hemoptisis amenazante: lado que sangra ABAJO, corregir la coagulacion, tomografia angiografica y embolizacion'],
    criterios_uci_general: 'Neumotorax a tension o bilateral, derrame masivo con compromiso respiratorio o hemodinamico, sepsis de origen pleural, hemotorax con inestabilidad o necesidad de transfusion, y toda hemoptisis amenazante con compromiso de la via aerea o del intercambio.',
    criterios_tips_general: 'La derivacion portosistemica intrahepatica transyugular es una opcion en el hidrotorax hepatico refractario, con los mismos criterios de seleccion que en la ascitis refractaria.',
    criterios_trasplante_general: 'No aplica de forma directa. El neumotorax recurrente sobre enfermedad pulmonar avanzada obliga a coordinar con la unidad de trasplante antes de una pleurodesis, porque complica la cirugia posterior. El hidrotorax hepatico refractario es marcador de hepatopatia avanzada.',
    prevencion: 'Primaria: abandono del tabaco (que reduce de forma marcada la recurrencia del neumotorax), vacunacion e higiene bucodental para prevenir la infeccion pleural, y tratamiento adecuado de la neumonia y de las bronquiectasias. Secundaria: puncion precoz del derrame paraneumonico, ecografia antes de todo procedimiento pleural y uso de calibres finos. Terciaria: cirugia de prevencion de recurrencias en el neumotorax que la merece, tratamiento de la enfermedad de base tras una hemoptisis, y consejo escrito sobre buceo y vuelo antes del alta.'
  }
};

export const compCites = {
  'Derrame pleural': [1, 2, 3, 16, 17],
  'Derrame paraneumonico y empiema': [1, 4, 5, 6, 7],
  'Derrame pleural maligno': [11, 12, 13],
  'Neumotorax espontaneo': [1, 8, 9, 10],
  'Neumotorax a tension, traumatico y hemotorax': [1, 10],
  'Hemoptisis amenazante': [14, 15]
};
export const estigmasTitulo = 'Signos de la exploracion pleural y lo que separa un cuadro de otro';
export const estigmas = [
  { s: 'Matidez a la percusion', p: 'Constante en el derrame', photo: null, desc: 'Aparece a partir de unos 300 a 500 mL. Es el primer signo que se busca, y se acompa&#241;a del ascenso de la matidez con la curva de Damoiseau. En el neumotorax ocurre lo contrario: hay TIMPANISMO.' },
  { s: 'Abolicion del murmullo vesicular', p: 'Constante', photo: null, desc: 'Comun al derrame y al neumotorax, de modo que por si sola no distingue nada. Lo que los separa a pie de cama es la percusion (mate frente a timpanica) y, si hay dudas, la ecografia en unos segundos.' },
  { s: 'Disminucion de las vibraciones vocales', p: 'Constante', photo: null, desc: 'El dato que separa el derrame de la CONSOLIDACION: el liquido y el aire aislan y las vibraciones DISMINUYEN, mientras que el pulmon consolidado transmite mejor y AUMENTAN. Con la matidez, esa combinacion decide si hay que puncionar.' },
  { s: 'Soplo pleural y egofonia en el limite superior', p: '~30%', photo: null, desc: 'Justo por encima del nivel del liquido, el pulmon comprimido pero aireado transmite un soplo suave y la voz adquiere calidad caprina. Ayuda a delimitar el nivel del derrame sin ninguna prueba.' },
  { s: 'Dolor pleuritico', p: '~50%', photo: null, desc: 'Indica afectacion de la pleura PARIETAL, que es la unica inervada para el dolor. Puede referirse al hombro por la inervacion frenica cuando la afectacion es diafragmatica, un dato que despista con frecuencia.' },
  { s: 'Timpanismo con abolicion del murmullo', p: 'En el neumotorax', photo: null, desc: 'La combinacion clasica. En el neumotorax pequeno la exploracion puede ser normal, de modo que su ausencia no descarta nada: en la sospecha, la ecografia es mas sensible que la radiografia.' },
  { s: 'Ingurgitacion yugular con hipotension', p: 'Neumotorax a tension', photo: null, desc: 'El fallo del neumotorax a tension es HEMODINAMICO: la presion pleural positiva acoda las venas cavas y hunde el retorno venoso. Por eso el paciente no responde a volumen y por eso la descompresion revierte el cuadro en segundos.' },
  { s: 'Desviacion traqueal', p: 'Tardio en la tension', photo: null, desc: 'Signo especifico pero tardio y a menudo dificil de apreciar. Esperar a encontrarlo para descomprimir es un error: el diagnostico de neumotorax a tension es clinico y se trata antes de tenerlo todo.' },
  { s: 'Ascenso brusco de presiones en el ventilado', p: 'Equivalente en la tension', photo: null, desc: 'En el paciente con ventilacion mecanica, el equivalente de la triada clasica es el ascenso brusco de la presion de la via aerea con hipotension. Obliga a descartar tambien auto-PEEP, obstruccion del tubo e intubacion selectiva.' },
  { s: 'Acropaquias', p: 'En procesos cronicos', photo: null, desc: 'Acompa&#241;an al empiema cronico, a las bronquiectasias y al cancer de pulmon. En un paciente con hemoptisis o con derrame de larga evolucion, orientan hacia una enfermedad supurativa cronica o neoplasica de base.' },
  { s: 'Sangre roja, espumosa y con tos', p: 'Define la hemoptisis', photo: null, desc: 'Frente a la hematemesis, que es oscura, con restos alimentarios y acida, y viene con nauseas. Confundirlas cambia por completo la conducta, y es uno de los errores clasicos de la urgencia.' },
  { s: 'Sensacion de calor o cosquilleo localizado', p: 'Frecuente en la hemoptisis', photo: null, desc: 'Muchos pacientes localizan con precision el lado del sangrado antes de expectorar. Es un dato barato y util: permite colocar de inmediato al paciente sobre el lado correcto mientras llega la tomografia.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Criterios de Light (calculadora disponible)': [2, 16],
  'Gradientes de albumina y de proteinas (calculadora disponible)': [3, 16],
  'Estadios del derrame paraneumonico (calculadora disponible)': [1, 7],
  'Escala RAPID de la infeccion pleural (calculadora disponible)': [6, 1],
  'Manejo del neumotorax por sintomas y riesgo (calculadora disponible)': [1, 8, 9],
  'Clasificacion del neumotorax por mecanismo': [10, 1],
  'Gravedad de la hemoptisis': [14, 15]
};
export const escalaCalc = {
  'Criterios de Light (calculadora disponible)': 'criterios-light',
  'Gradientes de albumina y de proteinas (calculadora disponible)': 'criterios-light',
  'Estadios del derrame paraneumonico (calculadora disponible)': 'derrame-paraneumonico',
  'Escala RAPID de la infeccion pleural (calculadora disponible)': 'rapid',
  'Manejo del neumotorax por sintomas y riesgo (calculadora disponible)': 'neumotorax-manejo'
};
export const compGroups = [
  { name: 'Liquido en la pleura', items: ['Derrame pleural', 'Derrame paraneumonico y empiema', 'Derrame pleural maligno'] },
  { name: 'Aire y sangre', items: ['Neumotorax espontaneo', 'Neumotorax a tension, traumatico y hemotorax'] },
  { name: 'La urgencia de la via aerea', items: ['Hemoptisis amenazante'] }
];
export const complicacionesIntro = 'Las tres primeras fichas son las tres formas del derrame que hay que saber separar: el derrame en general, con los criterios de Light y la trampa del diuretico; el de la neumonia, donde la decision es drenar o no drenar; y el maligno, donde la decision es pleurodesis o cateter permanente. Las dos siguientes son el aire y la sangre: el neumotorax espontaneo con el algoritmo nuevo por sintomas, y el neumotorax a tension con el traumatismo, donde el gesto que salva es inmediato y no espera a ninguna imagen. La ultima es la hemoptisis amenazante, que no es pleural pero comparte lo esencial: el orden de las maniobras decide el desenlace.';
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
  root: { title: 'PATOLOGIA PLEURAL', color: '#4a5f8c', target: 'definicion' },
  branches: [
    { title: 'DERRAME', sub: 'Trasudado o exudado, y de que', color: '#4a5f8c', target: 'clasificacion', leaves: [
      { title: 'Criterios de Light', sub: 'Uno basta para exudado', color: '#4a5f8c', target: 'clasificacion' },
      { title: 'Gradiente de albumina', sub: 'La trampa del diuretico', color: '#8a6a1f', target: 'clasificacion' },
      { title: 'Siempre con ecografia', sub: 'Y nunca biopsia ciega', color: '#3f6b52', target: 'diagnostico' },
      { title: 'Maligno', sub: 'Pleurodesis o cateter permanente', color: '#5b4a86', target: 'complicaciones' }
    ] },
    { title: 'INFECCION PLEURAL', sub: 'Drenar o no drenar', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'pH de 7.2 o menor', sub: 'Drenaje', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Pus franco', sub: 'Empiema: se drena sin analizar', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Fibrinolitico mas DNasa', sub: 'Los dos juntos, 3 dias', color: '#5b4a86', target: 'complicaciones' },
      { title: 'Cirugia a los 5 a 7 dias', sub: 'Si no responde', color: '#6b4a2e', target: 'complicaciones' }
    ] },
    { title: 'AIRE Y SANGRE', sub: 'Donde el gesto no espera', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Neumotorax: sintomas y riesgo', sub: 'Ya no manda el tama&#241;o', color: '#3d5a73', target: 'clasificacion' },
      { title: 'A tension', sub: 'Aguja antes que radiografia', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Hemoptisis: lado abajo', sub: 'Se ahoga antes de desangrarse', color: '#8c1f3d', target: 'complicaciones' },
      { title: 'Embolizacion bronquial', sub: 'El 90% viene de ahi', color: '#8c1f3d', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 2, 3], no_invasivos: [1, 2, 6], imagen: [1, 14, 17] };
export const clasificacionCite = [1, 2, 3, 6];
export const seguimientoCite = [1, 4, 7];
