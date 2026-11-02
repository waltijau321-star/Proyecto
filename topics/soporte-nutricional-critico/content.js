// topics/soporte-nutricional-critico/content.js: Soporte nutricional del paciente critico.
// Cubre TRES items del cluster "Fallas organicas" (bloque IV, Medicina Critica) del temario:
// alimentacion parenteral y enteral, desnutricion del paciente critico y sindrome de realimentacion.
//
// DELIMITACION: aqui esta el soporte nutricional del paciente hospitalizado y critico. La
// desnutricion del anciano ambulatorio y la obesidad tienen sus propios temas.
//
// Guias verificadas en Bibliografia/ ([[feedback-verificar-edicion-guias]]): criterios GLIM de
// desnutricion (Cederholm y Jensen, 2019), que es lo unico que hay en el repo sobre nutricion.
// El resto de las referencias son articulos y guias de sociedades que NO estan en la carpeta y se
// citan como tales.
//
// Solo `diagnostico`, `clasificacion`, `complicaciones` y `seguimiento_intrahospitalario` van
// ANIDADOS dentro de `export const content = {...}`. `factores_riesgo` y `algoritmo` son ARRAY.
//
// 6 fichas, 3 calculadoras, 3 figuras. Sin em dash. Texto sin acentos.

export const meta = {
  id: 'soporte-nutricional-critico',
  titulo: 'Soporte Nutricional del Crítico',
  subtitulo: 'Módulo 71 · Medicina Interna',
  accent: '#7a6b2e'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const viaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #7a6b2e;border-radius:8px;padding:5px 9px;background:#7a6b2e12;margin-bottom:6px;">
    <strong style="color:#7a6b2e;">La regla es sencilla y casi siempre se cumple: si el intestino funciona, se usa.</strong> <span style="color:var(--ink-dim);">Y si funciona a medias, se usa a medias. La via parenteral no es "la nutrición buena": es la que se reserva para cuando no queda otra.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:94px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">ORAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Siempre la primera opción si el paciente traga con seguridad. Antes de escalar a nada, conviene comprobar lo obvio: si hay <strong style="color:var(--ink);">DISFAGIA</strong>, si la dieta pautada le gusta y llega caliente, si le ayudan a comer, y si esta en ayunas por pruebas que se van cancelando.</div>
    </div>
    <div style="display:grid;grid-template-columns:94px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#7a6b2e22;border:1px solid #7a6b2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#7a6b2e;">ENTERAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Si no puede comer pero el intestino funciona. Se inicia <strong style="color:var(--ink);">PRECOZMENTE</strong>, en las primeras 24 a 48 horas. Mantiene el trofismo de la mucosa y la barrera intestinal, y se asocia a menos complicaciones infecciosas que la parenteral. La sonda nasogástrica basta en la mayoría.</div>
    </div>
    <div style="display:grid;grid-template-columns:94px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">PARENTERAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Cuando la via digestiva no es utilizable o no cubre lo necesario. Los ensayos han mostrado que <strong style="color:#8c3a34;">iniciarla MUY pronto</strong> en quien podría tolerar algo por via enteral empeora los resultados: más infecciones y más días de soporte. Se espera unos días y se complementa.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">Contraindicaciones reales de la via enteral</strong>, que son pocas: obstrucción intestinal, isquemia mesentérica, perforación, <strong>choque no controlado</strong> con vasoactivos a dosis crecientes, y hemorragia digestiva activa. Casi todo lo demás, incluida la ausencia de ruidos, NO lo es.
    </div>
    <div style="border:1px solid #3d5a73;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3d5a73;">Lo que ha dejado de hacerse.</strong> Medir el <strong>RESIDUO GÁSTRICO</strong> de forma rutinaria para decidir si se sigue alimentando: interrumpe la nutrición sin mejorar nada. Y esperar a que el paciente tenga ruidos o ventosee para empezar: eso no es un requisito.
    </div>
  </div>
</div>`;

const realimentacionHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">El síndrome de realimentación no lo causa el ayuno: lo causa VOLVER A COMER.</strong> <span style="color:var(--ink-dim);">Es iatrogénico por definición, y por eso es enteramente prevenible si se piensa en el antes de pautar la primera bolsa.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:24px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c3a34;">1</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Durante el ayuno el organismo pasa a usar grasa y proteína, y agota las reservas intracelulares de <strong style="color:var(--ink);">FÓSFORO, POTASIO y MAGNESIO</strong>. Pero las cifras en sangre pueden estar NORMALES, porque lo que se ha vaciado es el interior de la célula.</div>
    </div>
    <div style="display:grid;grid-template-columns:24px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8a6a1f;">2</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Al reintroducir <strong style="color:var(--ink);">HIDRATOS DE CARBONO</strong> se dispara la insulina. Esta empuja glucosa, fósforo, potasio y magnesio hacia el interior de la célula, y además retiene sodio y agua.</div>
    </div>
    <div style="display:grid;grid-template-columns:24px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#3d5a73;">3</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">El resultado es una caída brusca de esos iones en sangre. La <strong style="color:#8c3a34;">HIPOFOSFATEMIA</strong> es la protagonista: sin fósforo no hay ATP ni 2,3-difosfoglicerato, y aparecen insuficiencia cardiaca, debilidad muscular y respiratoria, arritmias, rabdomiólisis, convulsiones y muerte súbita.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">COMO SE PREVIENE</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">TIAMINA ANTES</strong> de cualquier aporte de glucosa, y mantenida varios días. Empezar con <strong style="color:var(--ink);">POCAS calorías</strong>, en torno a 10 kcal/kg al dia (menos en los casos extremos), y subir despacio a lo largo de 4 a 7 días. Reponer fósforo, potasio y magnesio <strong>ANTES</strong> y durante, sin retrasar por ello el inicio.</div>
    </div>
    <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 8px;background:#8a6a1f08;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:4px;">A QUIEN LE PASA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Ayuno prolongado, índice de masa corporal muy bajo, pérdida de peso importante, alcoholismo, anorexia nerviosa, cirugía bariátrica, oncológicos, ancianos, y quien ya llega con el <strong>fósforo, el potasio o el magnesio bajos</strong>. Ese último dato es el que más se pasa por alto y el que más riesgo marca.</div>
    </div>
  </div>
</div>`;

const cuantoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3d5a73;border-radius:8px;padding:5px 9px;background:#3d5a7312;margin-bottom:6px;">
    <strong style="color:#3d5a73;">En la fase aguda, más no es mejor.</strong> <span style="color:var(--ink-dim);">El organismo produce energía endógena a partir de sus propias reservas, y si a eso se le suma un aporte completo se llega a la SOBREALIMENTACION, con hiperglucemia, esteatosis, más carbonico y peor evolución.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:110px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">FASE AGUDA<br><span style="font-weight:400;font-size:8.5px;">primeros días</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Aporte <strong style="color:var(--ink);">PROGRESIVO y por debajo del objetivo</strong>. No hay que alcanzar las calorías calculadas en las primeras 48 a 72 horas, sobre todo si el paciente esta inestable o recibe vasoactivos a dosis altas. Y hay que contar las <strong>calorías NO nutricionales</strong>: propofol, glucosa de sueros y citrato.</div>
    </div>
    <div style="display:grid;grid-template-columns:110px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">FASE TARDÍA<br><span style="font-weight:400;font-size:8.5px;">a partir del 3.er o 4.o dia</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Se progresa hacia el objetivo calórico, en torno a <strong style="color:var(--ink);">25 kcal/kg al dia</strong> como referencia orientativa, ajustando por la evolución. La calorimetria indirecta sería lo ideal para medirlo en lugar de estimarlo, pero esta disponible en muy pocos sitios.</div>
    </div>
    <div style="display:grid;grid-template-columns:110px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#7a6b2e22;border:1px solid #7a6b2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#7a6b2e;">PROTEÍNA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Alrededor de <strong style="color:var(--ink);">1.3 g/kg al dia</strong> como referencia. Conviene saber que subirla mucho por encima de eso NO ha demostrado beneficio en los ensayos, y en algunos subgrupos, sobre todo con lesión renal aguda, se asoció a peores resultados. Más proteína no es automáticamente mejor.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #6b4a8c;border-radius:8px;background:#6b4a8c10;color:var(--ink-dim);">
    <strong style="color:#6b4a8c;">Y el peso que se usa para calcular importa.</strong> En el paciente con <strong>OBESIDAD</strong>, usar el peso real sobreestima las necesidades de forma grosera; se emplea el peso ideal o el ajustado. En el paciente con edemas, ascitis o sobrecarga, el peso de la bascula tampoco sirve. Es un detalle aritmetico que cambia la pauta de forma sustancial y que casi nadie comprueba.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La desnutrición del paciente hospitalizado es frecuente, tiene consecuencias medibles (más infecciones, peor cicatrización, más días de ingreso, más mortalidad) y sin embargo se diagnostica poco y se trata tarde. El soporte nutricional no es un cuidado accesorio: es un tratamiento con indicaciones, dosis y efectos adversos, y uno de esos efectos adversos, el <strong>síndrome de realimentación</strong>, puede matar.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: por que via.</strong></p>
<p style="margin:0 0 12px;">La regla es sencilla: si el intestino funciona, se usa, y si funciona a medias, se usa a medias. La via enteral se inicia <strong>precozmente</strong> y la parenteral se reserva. Conviene además conocer lo que ha dejado de hacerse, como medir el residuo gástrico de rutina, y lo que nunca fue un requisito, como esperar a que haya ruidos.</p>
${figBlock('Figura 1', 'La via: oral, enteral y parenteral, y lo que ya no se hace', viaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: el síndrome de realimentación.</strong></p>
<p style="margin:0 0 12px;">No lo causa el ayuno sino volver a comer, de modo que es <strong>iatrogénico por definición</strong> y enteramente prevenible. Su protagonista es la <strong>hipofosfatemia</strong>, y su trampa es que las cifras en sangre pueden estar normales antes de empezar, porque lo que se ha vaciado es el interior de la célula.</p>
${figBlock('Figura 2', 'Síndrome de realimentación: por que ocurre y como se previene', realimentacionHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: cuanto dar.</strong></p>
<p style="margin:0 0 12px;">En la fase aguda, <strong>más no es mejor</strong>: el organismo produce energía endógena y sumarle un aporte completo lleva a la sobrealimentacion. Hay que contar además las calorías no nutricionales, y usar el peso correcto, porque en la obesidad el peso real sobreestima las necesidades de forma grosera.</p>
${figBlock('Figura 3', 'Cuanta energía y cuanta proteína, por fases', cuantoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No dejar al paciente en dieta absoluta por pruebas que se van cancelando sin que nadie lo revise. No esperar a que haya ruidos intestinales para iniciar la nutrición enteral. No medir el residuo gástrico de rutina para decidir si se sigue alimentando. No usar la via parenteral cuando el intestino funciona, ni iniciarla muy pronto en quien podría tolerar algo por via enteral. No perseguir el objetivo calórico completo en las primeras 48 a 72 horas. No olvidar las <strong>calorías no nutricionales</strong> del propofol y de los sueros glucosados. No calcular con el peso real en el paciente con obesidad ni con el peso de la bascula en el que tiene edemas. No dar glucosa antes que <strong>tiamina</strong> a un paciente de riesgo. No retrasar el inicio de la nutrición esperando a normalizar el fósforo, pero tampoco empezar a ritmo completo sin haberlo mirado. Y no dar de alta sin plan nutricional a quien ha estado semanas comiendo mal.</p>`;

export const bibliografia = [
  'Cederholm T, Jensen GL, Correia MITD, et al. GLIM criteria for the diagnosis of malnutrition: a consensus report from the global clinical nutrition community. Clin Nutr. 2019;38(1):1-9.',
  'Singer P, Blaser AR, Berger MM, et al. ESPEN guideline on clinical nutrition in the intensive care unit. Clin Nutr. 2019;38(1):48-79.',
  'McClave SA, Taylor BE, Martindale RG, et al. Guidelines for the provision and assessment of nutrition support therapy in the adult critically ill patient: Society of Critical Care Medicine and American Society for Parenteral and Enteral Nutrition. JPEN J Parenter Enteral Nutr. 2016;40(2):159-211.',
  'Compher C, Bingham AL, McCall M, et al. Guidelines for the provision of nutrition support therapy in the adult critically ill patient: the American Society for Parenteral and Enteral Nutrition. JPEN J Parenter Enteral Nutr. 2022;46(1):12-41.',
  'National Institute for Health and Care Excellence. Nutrition support for adults: oral nutrition support, enteral tube feeding and parenteral nutrition. Clinical guideline CG32. London: NICE; 2006, actualizada en 2017.',
  'Da Silva JSV, Seres DS, Sabino K, et al. ASPEN consensus recommendations for refeeding syndrome. Nutr Clin Pract. 2020;35(2):178-195.',
  'Friedli N, Stanga Z, Sobotka L, et al. Revisiting the refeeding syndrome: results of a systematic review. Nutrition. 2017;35:151-160.',
  'Doig GS, Simpson F, Heighes PT, et al. Restricted versus continued standard caloric intake during the management of refeeding syndrome in critically ill adults: a randomised, parallel-group, multicentre, single-blind controlled trial. Lancet Respir Med. 2015;3(12):943-952.',
  'Casaer MP, Mesotten D, Hermans G, et al. Early versus late parenteral nutrition in critically ill adults. N Engl J Med. 2011;365(6):506-517.',
  'Harvey SE, Parrott F, Harrison DA, et al. Trial of the route of early nutritional support in critically ill adults. N Engl J Med. 2014;371(18):1673-1684.',
  'Reignier J, Boisrame-Helms J, Brisard L, et al. Enteral versus parenteral early nutrition in ventilated adults with shock: a randomised, controlled, multicentre, open-label, parallel-group study. Lancet. 2018;391(10116):133-143.',
  'TARGET Investigators. Energy-dense versus routine enteral nutrition in the critically ill. N Engl J Med. 2018;379(19):1823-1834.',
  'Heyland DK, Patel J, Compher C, et al. The effect of higher protein dosing in critically ill patients with high nutritional risk: a randomised controlled trial. Lancet. 2023;401(10376):568-576.',
  'Reignier J, Plantefeve G, Mira JP, et al. Low versus standard calorie and protein feeding in ventilated adults with shock: a randomised, controlled, multicentre, open-label, parallel-group trial. Lancet Respir Med. 2023;11(7):602-612.',
  'Reignier J, Mercier E, Le Gouge A, et al. Effect of not monitoring residual gastric volume on risk of ventilator-associated pneumonia in adults receiving mechanical ventilation and early enteral feeding: a randomized controlled trial. JAMA. 2013;309(3):249-256.',
  'Marik PE, Zaloga GP. Early enteral nutrition in acutely ill patients: a systematic review. Crit Care Med. 2001;29(12):2264-2270.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Desnutrición establecida',
      tituloB: 'Riesgo de realimentación',
      compensada: 'Pérdida de peso no intencionada, pérdida de masa muscular apreciable en la exploración (temporales, deltoides, interoseos de la mano y cuádriceps), pérdida de grasa subcutánea, debilidad, edemas y disminución de la fuerza de prensión. En el hospital hay además causas que se suman y que casi nadie corrige: dietas poco apetecibles que llegan frías, ayunos repetidos por pruebas que se cancelan, nadie que ayude a comer al paciente que no puede hacerlo solo, y DISFAGIA no detectada. El cribado nutricional al ingreso debería ser universal y en la práctica es la excepción.',
      descompensada: 'Es una situación de RIESGO, no un cuadro clínico: identifica al paciente en el que reintroducir la alimentación puede desencadenar un síndrome de realimentación. Hay que buscarlo de forma activa antes de pautar la primera bolsa, mirando el índice de masa corporal, la pérdida de peso reciente, los días sin ingesta significativa, el consumo de alcohol y, sobre todo, las cifras de FÓSFORO, POTASIO y MAGNESIO antes de empezar. Ese último dato es el que más riesgo marca y el que más se pasa por alto, porque se pide la analítica y nadie mira esas tres líneas.'
    },
    laboratorio: [
      { prueba: 'Fósforo, potasio y magnesio ANTES de alimentar', utilidad: 'La determinación más importante de todo el tema. Unos valores bajos antes de iniciar el aporte identifican por si solos a un paciente de ALTO riesgo de síndrome de realimentación, y obligan a reponer y a empezar despacio.' },
      { prueba: 'Glucemia y control seriado', utilidad: 'La hiperglucemia es la complicación metabólica más frecuente del soporte nutricional, sobre todo con la via parenteral, y empeora el pronóstico. Se controla ajustando el aporte y con insulina, no suspendiendo la nutrición.' },
      { prueba: 'Albúmina y prealbúmina', utilidad: 'Se usan como marcadores nutricionales y NO lo son: en el paciente agudo caen por la respuesta inflamatoria y por la fuga capilar, con independencia de lo que coma. Sirven como marcadores de gravedad, no de nutrición.' },
      { prueba: 'Función hepática y triglicéridos', utilidad: 'Vigilan las complicaciones de la nutrición parenteral: colestasis, esteatosis e hipertrigliceridemia. Su alteración suele indicar sobrealimentacion o exceso de lípidos y obliga a revisar la pauta antes que a suspenderla.' },
      { prueba: 'Ionograma completo y equilibrio ácido-base', utilidad: 'Sodio, cloro y bicarbonato. La sobrecarga de sodio y la acidosis hiperclorémica son complicaciones frecuentes y evitables del soporte, especialmente cuando el volumen del aporte no se cuenta en el balance.' },
      { prueba: 'Tiamina y otras vitaminas', utilidad: 'En la práctica no se mide: se REPONE de forma empírica en todo paciente de riesgo, antes de administrar glucosa. Esperar a un resultado para dar tiamina es un error que puede costar una encefalopatía de Wernicke.' },
      { prueba: 'Urea y balance nitrogenado', utilidad: 'Orientan sobre el aporte proteico y su tolerancia. Conviene interpretarlos con la función renal, porque una urea en ascenso puede reflejar tanto aporte excesivo como deterioro del filtrado.' },
      { prueba: 'Proteína C reactiva', utilidad: 'No es un marcador nutricional, pero ayuda a interpretar los demás: con inflamación elevada, la albúmina y la prealbúmina no informan sobre el estado nutricional y no deben usarse para eso.' }
    ],
    no_invasivos: [
      { metodo: 'Riesgo de síndrome de realimentación (calculadora disponible)', interpretacion: 'Aplica los criterios de riesgo alto y devuelve la pauta de inicio: tiamina previa, calorías iniciales y monitorización de iones.', cutoff: 'Un solo criterio mayor basta para clasificar como alto riesgo' },
      { metodo: 'Requerimientos de energía y proteína (calculadora disponible)', interpretacion: 'Calcula el objetivo calórico y proteico usando el peso correcto, avisa de las calorías no nutricionales y ajusta por la fase de la enfermedad.', cutoff: 'En la fase aguda no hay que alcanzar el objetivo: se progresa despacio' },
      { metodo: 'Elección de la via de nutrición (calculadora disponible)', interpretacion: 'Decide entre oral, enteral y parenteral según la función digestiva, la seguridad de la deglución y la situación hemodinámica.', cutoff: 'Si el intestino funciona, se usa; y si funciona a medias, se usa a medias' },
      { metodo: 'Criterios GLIM de desnutrición', interpretacion: 'Requieren un criterio FENOTIPICO (pérdida de peso, índice de masa corporal bajo o masa muscular reducida) más uno ETIOLÓGICO (ingesta reducida o inflamación).', cutoff: 'Hacen falta ambos tipos de criterio: uno solo no basta' },
      { metodo: 'Exploración de la masa muscular', interpretacion: 'Se mira en temporales, deltoides, interoseos de la mano y cuádriceps, y se completa con la fuerza de prensión. No cuesta nada y detecta lo que la bascula esconde en el paciente con edemas.', cutoff: 'La pérdida de masa muscular es criterio fenotipico por sí misma' },
      { metodo: 'Cribado nutricional al ingreso', interpretacion: 'Herramientas breves que identifican al paciente en riesgo en pocos minutos, para pasar después a una valoración completa.', cutoff: 'Debería ser universal al ingreso y en la práctica es la excepción' }
    ],
    imagen: [
      { modalidad: 'Radiografía de control de la sonda', hallazgos: 'Obligada antes de usar una sonda nasogástrica colocada a ciegas en el paciente con bajo nivel de conciencia o con la via aérea artificial, porque una colocación en el árbol bronquial que pase desapercibida y se utilice para nutrir es una complicación catastrófica.' },
      { modalidad: 'Ecografía de masa muscular', hallazgos: 'Mide el grosor y la ecogenicidad del cuádriceps y permite seguir la pérdida de masa muscular a lo largo del ingreso, que en el paciente crítico es rápida. Es una técnica en expansión y todavía poco extendida.' },
      { modalidad: 'Tomografía con medida de masa muscular', hallazgos: 'Un corte a nivel de la tercera vértebra lumbar permite cuantificar la masa muscular esquelética y detectar SARCOPENIA. Se puede aprovechar una tomografía pedida por otro motivo, lo que la hace especialmente eficiente.' },
      { modalidad: 'Videofluoroscopia de la deglución', hallazgos: 'Cuando hay sospecha de disfagia y las pruebas de cabecera no aclaran la seguridad de la via oral. Detecta la aspiración SILENTE, que es la que no produce tos y por tanto la que más riesgo tiene de pasar desapercibida.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por el <strong>estado nutricional</strong> (con criterios que exigen combinar un dato fenotipico y uno etiológico), por el <strong>riesgo</strong> que tiene el paciente de complicarse al recibir soporte, sobre todo de síndrome de realimentación, y por la <strong>via</strong> que va a usarse. A eso se añade la <strong>fase de la enfermedad</strong>, que es la división más útil en el paciente crítico: en la fase aguda el objetivo es no dañar y en la tardía es reponer.`,
    escalas: [
      { nombre: 'Riesgo de síndrome de realimentación (calculadora disponible)', componentes: 'Índice de masa corporal, pérdida de peso no intencionada reciente, días con ingesta escasa o nula, cifras de fósforo, potasio y magnesio antes de alimentar, y antecedente de consumo de alcohol o de ciertos fármacos.', formula: 'Se considera de alto riesgo con UN criterio mayor, o con DOS criterios menores.', interpretacion: 'El criterio que más se olvida es el de los iones: unas cifras bajas de fósforo, potasio o magnesio ANTES de empezar bastan por si solas para clasificar al paciente como de alto riesgo. Y hay que mirarlas antes de pautar la primera bolsa, no después.' },
      { nombre: 'Requerimientos de energía y proteína (calculadora disponible)', componentes: 'Peso (real, ideal o ajustado según el índice de masa corporal), fase de la enfermedad y calorías no nutricionales que ya recibe el paciente.', formula: 'Objetivo calórico en torno a 25 kcal/kg al dia como referencia, y proteico en torno a 1.3 g/kg al dia, alcanzados de forma progresiva.', interpretacion: 'Dos ajustes cambian mucho el resultado y casi nadie los hace: usar el peso IDEAL o ajustado en la obesidad, porque el real sobreestima de forma grosera, y DESCONTAR las calorías del propofol y de los sueros glucosados, que pueden suponer una parte importante del total.' },
      { nombre: 'Elección de la via de nutrición (calculadora disponible)', componentes: 'Capacidad de deglución segura, funcionalidad del tubo digestivo, situación hemodinámica y duración prevista del soporte.', formula: 'Oral si traga con seguridad; enteral precoz si el intestino funciona; parenteral si no es utilizable o si la enteral no cubre lo necesario tras varios días.', interpretacion: 'Las contraindicaciones reales de la via enteral son pocas: obstrucción, isquemia mesentérica, perforación, choque no controlado y hemorragia digestiva activa. La ausencia de ruidos NO es una de ellas, y esperar a que aparezcan retrasa la nutrición sin ningún fundamento.' },
      { nombre: 'Criterios GLIM de desnutrición', componentes: 'Criterios FENOTÍPICOS: pérdida de peso no intencionada, índice de masa corporal bajo y masa muscular reducida. Criterios ETIOLÓGICOS: ingesta o asimilacion reducida, y carga inflamatoria por enfermedad aguda o crónica.', formula: 'Se necesita al menos UN criterio fenotipico y UN criterio etiológico. La gravedad se establece después según la magnitud del criterio fenotipico.', interpretacion: 'Su valor es haber unificado un diagnóstico que antes usaba definiciones distintas en cada sitio. Y su exigencia de un criterio etiológico obliga a preguntarse POR QUE esta desnutrido el paciente, que es lo que orienta el tratamiento.' },
      { nombre: 'Fase aguda frente a fase tardía', componentes: 'Estabilidad hemodinámica, dosis de vasoactivos, días de evolución y situación metabólica.', formula: 'Fase aguda en los primeros días, con inestabilidad y producción de energía endógena. Fase tardía a partir del tercer o cuarto dia, con el paciente estabilizado.', interpretacion: 'Es la distinción más útil del tema. En la fase aguda el objetivo NO es cubrir los requerimientos: sumar un aporte completo a la energía endógena produce sobrealimentacion. En la fase tardía si se progresa hacia el objetivo.' },
      { nombre: 'Valoración de la disfagia', componentes: 'Pruebas de cabecera con agua y con distintas consistencias, observación de la tos, de la voz húmeda y de la desaturación.', formula: 'Cribado a pie de cama y, si es dudoso o de alto riesgo, exploración instrumental.', interpretacion: 'La aspiración SILENTE, sin tos, es la que más riesgo tiene precisamente porque no da la señal que todos esperan. Ante una neumonía de repetición en un paciente con deterioro neurológico, hay que valorar la deglución aunque nadie le haya visto atragantarse.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Desnutrición hospitalaria: detectarla',
      color: '#7a6b2e',
      definicion: 'Estado derivado de una ingesta o asimilacion insuficiente de nutrientes que produce alteración de la composición corporal y deterioro de la función, con consecuencias clínicas medibles.',
      fisiopatologia: 'En el paciente hospitalizado se suman dos mecanismos distintos. Uno es el DÉFICIT DE APORTE, muchas veces iatrogénico: ayunos repetidos por pruebas, dietas poco apetecibles, ausencia de ayuda para comer y disfagia no detectada. El otro es el CATABOLISMO inducido por la inflamación, que moviliza la proteína muscular para producir reactantes de fase aguda y glucosa, y que no se corrige solo dando comida. Esa doble naturaleza explica por que la desnutrición del enfermo agudo no se revierte simplemente aumentando el aporte, y por que los marcadores clásicos como la albúmina, que caen por la inflamación, no sirven para medirla.',
      epidemiologia: 'Afecta a una proporción muy alta de los pacientes hospitalizados y aumenta durante el ingreso, es decir, empeora en el hospital. Se asocia a más infecciones, peor cicatrización, más caídas, estancias más largas, más reingresos y mayor mortalidad. Y sigue estando infradiagnosticada, en parte porque el cribado sistemático al ingreso es la excepción.',
      factores_riesgo: ['Edad avanzada', 'Enfermedad oncológica', 'Enfermedad digestiva y malabsorción', 'Insuficiencia cardiaca, respiratoria o renal avanzadas', 'Hepatopatía crónica', 'Demencia y deterioro funcional', 'Disfagia', 'Consumo excesivo de alcohol', 'Depresión y aislamiento social', 'Polifarmacia con anorexia asociada', 'Ayunos repetidos por pruebas durante el ingreso', 'Ausencia de ayuda para comer'],
      clinica: 'Pérdida de peso no intencionada, pérdida de MASA MUSCULAR visible en temporales, deltoides, interoseos y cuádriceps, pérdida de grasa subcutánea, debilidad, menor fuerza de prensión y edemas. Conviene mirar también lo que pasa en la planta: cuanto come realmente el paciente, si alguien le ayuda y cuantos días lleva en ayunas por pruebas.',
      criterios_dx: 'Criterios GLIM: al menos UN criterio fenotipico (pérdida de peso, índice de masa corporal bajo o masa muscular reducida) más UN criterio etiológico (ingesta reducida o inflamación).',
      laboratorio: 'Ionograma completo con FÓSFORO y MAGNESIO, glucemia, función renal y hepática, hemograma y proteína C reactiva. Conviene recordar que la ALBÚMINA y la prealbúmina NO son marcadores nutricionales en el paciente agudo: caen por la inflamación.',
      imagen: 'Ecografía de masa muscular donde este disponible. Y aprovechar una tomografía pedida por otro motivo para medir la masa muscular a nivel de la tercera vértebra lumbar, que es una forma eficiente de detectar sarcopenia.',
      complementarios: 'CRIBADO nutricional al ingreso, que debería ser universal. Valoración de la deglución si hay factores de riesgo. Y registro real de la ingesta, que es lo que revela el problema en la planta.',
      dx_diferencial: 'Sarcopenia relacionada con la edad, caquexia asociada a enfermedad avanzada (que es catabolica y no se revierte solo con aporte), deshidratación, y pérdida de peso por causas concretas como hipertiroidismo, diabetes descompensada, malabsorción o neoplasia oculta.',
      tx_medico: 'Corregir primero lo corregible: revisar los ayunos, adaptar la textura si hay disfagia, ofrecer alimentos que el paciente tolere, asegurar que alguien le ayude a comer y tratar las náuseas, el dolor y el estreñimiento que le impiden comer. Suplementos orales si con eso no basta.',
      tx_farmacologico: 'Suplementos nutricionales orales, que son el primer escalón y tienen respaldo. Tratamiento de los síntomas que interfieren con la ingesta. Los estimulantes del apetito tienen un papel muy limitado y con efectos adversos.',
      tx_intervencionista: 'Sonda de alimentación o gastrostomía cuando el soporte va a ser prolongado, decisión que en la enfermedad avanzada debe tomarse dentro de una conversación sobre objetivos y no de forma automática.',
      criterios_uci: 'No aplica por sí misma; la desnutrición es un factor de riesgo que empeora el pronóstico de cualquier otro proceso.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La desnutrición grave es un factor que empeora los resultados y que se valora antes de un trasplante de órgano sólido.',
      seguimiento_hospitalario: 'Registro de la ingesta real, peso semanal y revisión de si los ayunos siguen justificados. Es una vigilancia sencilla que casi nadie hace de forma sistemática.',
      seguimiento_ambulatorio: 'Plan nutricional al alta para quien ha estado semanas comiendo mal, con suplementos si procede y con una revisión. Salir del hospital desnutrido y sin plan es un factor de reingreso.',
      pronostico: 'La desnutrición es un factor pronóstico independiente en casi todas las enfermedades. Su corrección mejora desenlaces funcionales, aunque en la enfermedad avanzada el margen es limitado.',
      algoritmo: ['Hacer CRIBADO nutricional al ingreso', 'Explorar la masa muscular: temporales, deltoides, interoseos y cuádriceps', 'Preguntar por la pérdida de peso reciente', 'No usar la albúmina como marcador nutricional', 'Aplicar los criterios: uno fenotipico más uno etiológico', 'Revisar cuantos días lleva en ayunas por pruebas', 'Comprobar si tiene DISFAGIA', 'Asegurar que alguien le ayuda a comer', 'Añadir suplementos orales si con eso no basta', 'Dejar un plan nutricional al alta']
    },
    {
      nombre: 'Nutrición enteral',
      color: '#3f6b52',
      definicion: 'Aporte de nutrientes a través del tubo digestivo mediante una sonda, indicada cuando el paciente no puede comer pero su intestino es funcionante.',
      fisiopatologia: 'El intestino no es solo un tubo de absorción: es una barrera y un órgano inmunitario. Los enterocitos obtienen buena parte de su energía directamente del contenido de la luz, de modo que el ayuno produce atrofia de las vellosidades, aumento de la permeabilidad y alteración del tejido linfoide asociado. Esa es la base teórica de la nutrición enteral precoz: mantener el trofismo de la mucosa y la integridad de la barrera. Y explica el hallazgo más consistente de los ensayos, que es la reducción de complicaciones INFECCIOSAS frente a la via parenteral, más que una diferencia de mortalidad.',
      epidemiologia: 'Es la via de elección en el paciente crítico que no puede comer. Se recomienda iniciarla de forma precoz, en las primeras 24 a 48 horas, en el paciente hemodinámicamente estable. Su tolerancia es buena en la mayoría, y las interrupciones que sufre son más veces organizativas que clínicas.',
      factores_riesgo: ['Bajo nivel de conciencia, por el riesgo de aspiración', 'Ventilación mecánica', 'Decúbito sin elevar el cabecero', 'Gastroparesia diabética o farmacológica', 'Opioides y sedantes, que enlentecen el tránsito', 'Choque con vasoactivos a dosis altas', 'Cirugía abdominal reciente', 'Antecedente de broncoaspiración', 'Sonda mal posicionada', 'Interrupciones repetidas por pruebas y traslados'],
      clinica: 'La tolerancia se valora clínicamente: distensión, dolor, vómitos, regurgitación y ritmo intestinal. La DIARREA es el problema más frecuente y casi nunca se debe a la fórmula: hay que buscar antes los fármacos con sorbitol, los antibióticos, la infección por Clostridioides difficile y la impactacion fecal con diarrea por rebosamiento.',
      criterios_dx: 'No aplica: es una intervención. La decisión se toma con la función digestiva y la seguridad de la deglución. Ver la Figura 1 de Definición.',
      laboratorio: 'Glucemia, ionograma con fósforo y magnesio, función renal y hepática. Y en el paciente de riesgo, los iones ANTES de iniciar, por el síndrome de realimentación.',
      imagen: 'RADIOGRAFÍA DE CONTROL de la sonda antes de usarla en el paciente con bajo nivel de conciencia o con via aérea artificial. Nutrir a través de una sonda mal colocada es una complicación catastrófica y prevenible.',
      complementarios: 'Elevación del cabecero entre 30 y 45 grados, que es la medida más eficaz para reducir la aspiración y la que más se relaja. Revisión diaria de las interrupciones acumuladas, que suelen explicar por que el paciente recibe mucho menos de lo prescrito.',
      dx_diferencial: 'De la intolerancia: gastroparesia, íleo, obstrucción, isquemia mesentérica (rara pero grave, y a considerar ante dolor desproporcionado y acidosis) y estreñimiento con rebosamiento.',
      tx_medico: 'Iniciar PRECOZMENTE y progresar según tolerancia. Cabecero elevado. Revisar fármacos que enlentecen el tránsito. Tratar el estreñimiento de forma activa, que es un problema muy frecuente y muy poco atendido en el paciente crítico.',
      tx_farmacologico: 'Procineticos si hay intolerancia gástrica persistente. Laxantes de forma pautada y no a demanda. Y, si la intolerancia gástrica no se resuelve, valorar el paso a sonda POSPILORICA en lugar de suspender la nutrición.',
      tx_intervencionista: 'Sonda pospilorica en la intolerancia gástrica persistente. Gastrostomía percutánea si el soporte va a durar más de unas semanas.',
      criterios_uci: 'No aplica por sí misma.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Comprobar cuanto RECIBE de verdad frente a lo prescrito, porque la diferencia suele ser grande y se debe a interrupciones evitables por pruebas, traslados y cuidados. Y no medir el residuo gástrico de rutina para decidir si se sigue.',
      seguimiento_ambulatorio: 'Formación del cuidador si la nutrición enteral continua en domicilio, con plan de manejo de complicaciones y de recambio de la sonda.',
      pronostico: 'Buena tolerancia en la mayoría. Se asocia a menos complicaciones infecciosas que la parenteral, que es su principal ventaja demostrada.',
      algoritmo: ['Comprobar que el intestino es funcionante', 'Descartar las contraindicaciones reales, que son pocas', 'NO esperar a que haya ruidos intestinales', 'Colocar la sonda y confirmar su posición con radiografía si procede', 'Iniciar en las primeras 24 a 48 horas', 'Elevar el cabecero entre 30 y 45 grados', 'Progresar según tolerancia clínica', 'No medir el residuo gástrico de rutina', 'Ante diarrea, buscar fármacos, antibióticos y Clostridioides antes que culpar a la fórmula', 'Contar las interrupciones y comparar lo recibido con lo prescrito']
    },
    {
      nombre: 'Nutrición parenteral',
      color: '#8c3a34',
      definicion: 'Aporte de nutrientes por via intravenosa, indicado cuando el tubo digestivo no es utilizable o cuando la via enteral no consigue cubrir los requerimientos.',
      fisiopatologia: 'Al saltarse el intestino se pierde el estímulo trofico de la mucosa y se favorece la atrofia de las vellosidades y el aumento de permeabilidad. A eso se suma que la infusión directa de nutrientes al torrente elude los mecanismos de regulación de la absorción, de modo que la sobrealimentacion es más fácil y sus consecuencias más inmediatas: hiperglucemia, esteatosis hepática, hipertrigliceridemia y aumento de la producción de carbonico, que en un paciente con reserva ventilatoria limitada tiene consecuencias prácticas. Y la propia via, un catéter central, es una puerta de entrada de infección.',
      epidemiologia: 'Un ensayo amplio comparo iniciar la nutrición parenteral complementaria de forma muy precoz frente a diferirla varios días en pacientes críticos, y el grupo de inicio TARDÍO tuvo mejores resultados, con menos infecciones y menos días de soporte. Otros ensayos comparando via enteral frente a parenteral no encontraron diferencias de mortalidad, pero si menos complicaciones digestivas con la parenteral y menos infecciosas con la enteral.',
      factores_riesgo: ['Catéter venoso central, que es puerta de entrada de infección', 'Hiperglucemia mal controlada', 'Sobrealimentacion', 'Desnutrición grave previa, por el riesgo de realimentación', 'Hepatopatía previa', 'Sepsis concomitante', 'Manipulaciones frecuentes de la via', 'Uso prolongado', 'Inmovilidad y ausencia de estímulo enteral', 'Aporte de volumen no contabilizado en el balance'],
      clinica: 'Las complicaciones se buscan de forma activa porque casi todas son analíticas o del catéter: hiperglucemia, alteraciones iónicas, alteración de la función hepática, hipertrigliceridemia y fiebre o signos locales en el punto de inserción.',
      criterios_dx: 'No aplica: es una intervención. La indicación es la imposibilidad de usar el tubo digestivo o la insuficiencia de la via enteral tras varios días. Ver la Figura 1 de Definición.',
      laboratorio: 'Glucemia frecuente, ionograma con FÓSFORO y magnesio, función hepática, triglicéridos, función renal y hemograma. Los primeros días con más frecuencia, sobre todo en el paciente de riesgo de realimentación.',
      imagen: 'Control radiológico del catéter central tras su colocación. Ecografía hepática si aparece colestasis prolongada.',
      complementarios: 'Cuidado estricto del catéter con técnica aseptica, y revisión DIARIA de si sigue haciendo falta. Mantener aunque sea un aporte enteral mínimo cuando sea posible, para preservar el trofismo de la mucosa.',
      dx_diferencial: 'De la fiebre en el paciente con nutrición parenteral: infección del catéter, que hay que considerar siempre, frente a otras causas. De la alteración hepática: sobrealimentacion, exceso de lípidos, fármacos o enfermedad de base.',
      tx_medico: 'Aporte progresivo, evitando la sobrealimentacion. Control glucémico con insulina, sin suspender la nutrición. Y transición a la via enteral u oral en cuanto sea posible, que es el objetivo desde el primer dia.',
      tx_farmacologico: 'Insulina para el control glucémico. Ajuste de la composición de la bolsa según las alteraciones que aparezcan, que es preferible a suspenderla.',
      tx_intervencionista: 'Retirada del catéter si se confirma infección asociada. Colocación de accesos de larga duración si el soporte va a ser prolongado.',
      criterios_uci: 'No aplica por sí misma.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La nutrición parenteral domiciliaria de larga duración por fallo intestinal es una de las indicaciones de trasplante intestinal, en centros muy seleccionados.',
      seguimiento_hospitalario: 'Revisión diaria de la indicación, del acceso y de la analítica. Y una pregunta cada dia: se puede empezar ya algo por via digestiva, aunque sea poco.',
      seguimiento_ambulatorio: 'Programa específico si continua en domicilio, con formación del paciente y del cuidador y seguimiento por una unidad de nutrición.',
      pronostico: 'Es una técnica segura cuando se usa con indicación correcta y sin sobrealimentar. Sus problemas derivan sobre todo del uso innecesario, del inicio demasiado precoz y del exceso de aporte.',
      algoritmo: ['Comprobar que la via digestiva no es utilizable o no cubre lo necesario', 'No iniciarla de forma muy precoz si el paciente podría tolerar algo por via enteral', 'Colocar el acceso con técnica aseptica y confirmar su posición', 'Iniciar de forma progresiva, sin sobrealimentar', 'Contar las calorías del propofol y de los sueros', 'Controlar glucemia, iones, hígado y triglicéridos', 'Mantener aporte enteral mínimo si es posible', 'Revisar cada dia si el catéter sigue haciendo falta', 'Ante fiebre, considerar siempre la infección del catéter', 'Pasar a via enteral u oral en cuanto se pueda']
    },
    {
      nombre: 'Cuanta energía y cuanta proteína',
      color: '#3d5a73',
      definicion: 'Determinación del aporte calórico y proteico adecuado, que en el paciente crítico depende más de la fase de la enfermedad que del calculo aritmetico.',
      fisiopatologia: 'En la fase aguda de la enfermedad crítica el organismo produce una cantidad importante de energía ENDÓGENA a partir de sus propias reservas, mediante glucogenólisis, gluconeogénesis y lipolisis, y esa producción no se apaga porque se administre nutrición. Si al aporte exógeno completo se le suma esa producción endógena, el resultado es una SOBREALIMENTACION real aunque el calculo pareciera correcto, con hiperglucemia, esteatosis, aumento de la producción de carbonico y peor evolución. Esa es la explicación fisiológica de por que los ensayos de aporte calórico completo y precoz no han mostrado beneficio, y de por que la recomendación actual es progresar despacio.',
      epidemiologia: 'Varios ensayos amplios han comparado aportes calóricos altos frente a moderados sin encontrar beneficio de los primeros. Y un ensayo sobre dosis alta de proteína en pacientes de alto riesgo nutricional no encontró mejoría y sugirio peores resultados en algunos subgrupos, especialmente en pacientes con lesión renal aguda.',
      factores_riesgo: ['Calcular con el peso real en el paciente con obesidad', 'Usar el peso de la bascula en el paciente con edemas o ascitis', 'No contar las calorías del propofol', 'No contar la glucosa de los sueros y del citrato', 'Perseguir el objetivo calórico completo en los primeros días', 'Aportar proteína muy por encima de lo recomendado', 'No reevaluar al pasar de fase aguda a tardía', 'Ausencia de calorimetria indirecta y confianza excesiva en las fórmulas', 'Interrupciones repetidas que hacen que el paciente reciba mucho menos de lo prescrito', 'No ajustar en la lesión renal aguda'],
      clinica: 'La sobrealimentacion no da un cuadro clínico propio: se detecta por sus consecuencias analíticas y respiratorias, es decir hiperglucemia, hipertrigliceridemia, alteración hepática y dificultad para destetar de la ventilación por exceso de producción de carbonico.',
      criterios_dx: 'No aplica: es una decisión de dosis. Las referencias orientativas y los ajustes se detallan en la Figura 3 de Definición y en la calculadora del tema.',
      laboratorio: 'Glucemia, triglicéridos, función hepática, urea y ionograma. Su alteración suele ser la primera señal de que el aporte es excesivo.',
      imagen: 'No aplica de forma directa. La ecografía de masa muscular ayuda a seguir el efecto del soporte a lo largo del tiempo.',
      complementarios: 'CALORIMETRIA INDIRECTA cuando este disponible, que mide el gasto energético en lugar de estimarlo. Es lo ideal y esta disponible en muy pocos sitios, de modo que en la práctica se usan fórmulas por peso.',
      dx_diferencial: 'De la hiperglucemia en el paciente crítico: sobrealimentacion, estrés, corticoides, diabetes previa o pancreatitis. De la dificultad para destetar: causas respiratorias, debilidad adquirida, sobrecarga de volumen y exceso de aporte calórico.',
      tx_medico: 'Ajustar el aporte a la fase, usar el peso correcto y descontar las calorías no nutricionales. Revisar la pauta al pasar de la fase aguda a la tardía, momento en el que se progresa hacia el objetivo.',
      tx_farmacologico: 'Insulina para el control glucémico. Y, si el propofol aporta muchas calorías, valorar alternativas de sedación o ajustar el resto del aporte en consecuencia.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica por sí misma.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Comparar lo prescrito con lo REALMENTE recibido, que suele diferir mucho por las interrupciones. Y reevaluar la pauta cada vez que cambie la situación clínica.',
      seguimiento_ambulatorio: 'Ajuste del aporte a las necesidades de la recuperación, que son mayores que las de la fase aguda porque hay que reconstruir masa muscular.',
      pronostico: 'El aporte adecuado no cambia por si solo el desenlace de la enfermedad crítica, pero el aporte excesivo si empeora variables concretas y es evitable.',
      algoritmo: ['Elegir el PESO correcto: ideal o ajustado si hay obesidad', 'No usar el peso de la bascula si hay edemas o ascitis', 'Estimar el objetivo calórico como referencia, no como meta inmediata', 'Descontar las calorías del propofol y de los sueros', 'En la fase aguda, aportar por debajo del objetivo y progresar despacio', 'Fijar el aporte proteico en torno a la referencia, sin excederse', 'Vigilar glucemia, triglicéridos y función hepática', 'Reevaluar al pasar a la fase tardía', 'Comparar lo recibido con lo prescrito', 'Usar calorimetria indirecta si esta disponible']
    },
    {
      nombre: 'Síndrome de realimentación',
      color: '#8c3a5c',
      definicion: 'Conjunto de alteraciones metabólicas, sobre todo la hipofosfatemia, que aparecen al reintroducir la alimentación en un paciente con ayuno prolongado o desnutrición.',
      fisiopatologia: 'Durante el ayuno el organismo cambia a un metabolismo basado en grasa y proteína, la secreción de insulina cae y las reservas INTRACELULARES de fósforo, potasio y magnesio se agotan, aunque las cifras plasmáticas puedan mantenerse normales porque la célula libera iones hacia la sangre. Al reintroducir hidratos de carbono se dispara la insulina, que empuja glucosa y con ella fósforo, potasio y magnesio hacia el interior de la célula, y además produce retención de sodio y agua. El resultado es un descenso brusco de esos iones en plasma. La HIPOFOSFATEMIA es la protagonista porque sin fósforo no se genera ATP ni 2,3-difosfoglicerato, lo que compromete a la vez la contracción muscular, la función cardiaca y la entrega de oxígeno a los tejidos. A eso se suma que el aumento del metabolismo consume TIAMINA, cuya carencia produce encefalopatía de Wernicke y una forma de insuficiencia cardiaca.',
      epidemiologia: 'Su incidencia real es difícil de precisar porque la definición ha variado, pero es claramente más frecuente de lo que se diagnostica. Y es, por su propia naturaleza, IATROGÉNICO: no lo causa la enfermedad sino el tratamiento, lo que significa que es enteramente prevenible.',
      factores_riesgo: ['Índice de masa corporal muy bajo', 'Pérdida de peso no intencionada importante en los últimos meses', 'Ingesta escasa o nula durante más de 5 a 10 días', 'Fósforo, potasio o magnesio bajos ANTES de alimentar', 'Consumo excesivo de alcohol', 'Anorexia nerviosa', 'Cirugía bariátrica previa', 'Enfermedad oncológica avanzada', 'Tratamiento con diuréticos, insulina, quimioterapia o antiácidos', 'Edad avanzada', 'Vómitos prolongados o malabsorción', 'Huelga de hambre o situaciones de privación'],
      clinica: 'Aparece en los primeros días tras iniciar el aporte. Debilidad muscular y respiratoria, insuficiencia cardiaca, edemas, arritmias, rabdomiólisis, hemólisis, parestesias, convulsiones, confusión y, en los casos graves, muerte súbita. La confusión obliga a pensar también en el déficit de TIAMINA.',
      criterios_dx: 'Descenso significativo del fósforo, del potasio o del magnesio en los primeros días tras iniciar el soporte, con o sin manifestaciones clínicas. Ver la Figura 2 de Definición.',
      laboratorio: 'FÓSFORO, POTASIO y MAGNESIO antes de empezar y después a diario durante los primeros días, con más frecuencia si el riesgo es alto. Además glucemia, sodio, calcio y función renal.',
      imagen: 'No aplica. Electrocardiograma si hay alteraciones iónicas relevantes.',
      complementarios: 'Monitorización electrocardiográfica en el paciente de alto riesgo durante los primeros días, y control del balance hídrico por la retención de sodio y agua que produce la insulina.',
      dx_diferencial: 'De la hipofosfatemia: alcalosis respiratoria, cetoacidosis en tratamiento, hiperparatiroidismo, fármacos quelantes y pérdidas renales. Del cuadro completo: sepsis, insuficiencia cardiaca de otra causa y encefalopatía de Wernicke aislada.',
      tx_medico: 'PREVENIRLO, que es la única estrategia que funciona de verdad. Identificar al paciente de riesgo ANTES de pautar la primera bolsa, empezar con pocas calorías y subir despacio a lo largo de varios días, y reponer los iones antes y durante. Un ensayo mostró que ante la aparición de hipofosfatemia conviene REDUCIR temporalmente el aporte calórico en lugar de mantenerlo.',
      tx_farmacologico: 'TIAMINA a dosis altas ANTES de administrar cualquier glucosa, y mantenida varios días. Reposición de fósforo, potasio y magnesio por via oral o intravenosa según la gravedad. Suplemento de vitaminas y oligoelementos.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Hipofosfatemia grave con repercusión cardiaca o respiratoria, arritmias, y necesidad de reposición intravenosa rápida con monitorización.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Analítica diaria durante los primeros días, con las tres líneas que importan bien visibles. Y progresión del aporte solo si los iones se mantienen estables tras la reposición.',
      seguimiento_ambulatorio: 'Continuar la reposición y la progresión del aporte de forma gradual, con controles analíticos, en el paciente que sale del hospital todavía en fase de recuperación nutricional.',
      pronostico: 'Excelente si se previene y se detecta pronto. Grave y potencialmente mortal si se pasa por alto, y siempre con la circunstancia de que era evitable.',
      algoritmo: ['Identificar al paciente de riesgo ANTES de pautar nada', 'Mirar fósforo, potasio y magnesio antes de empezar', 'Administrar TIAMINA antes de cualquier glucosa', 'Reponer los iones bajos antes y durante', 'Empezar con pocas calorías, en torno a 10 kcal/kg al dia', 'Subir despacio a lo largo de 4 a 7 días', 'Controlar los tres iones a diario los primeros días', 'Monitorizar el electrocardiograma si el riesgo es alto', 'Si aparece hipofosfatemia, reducir el aporte y reponer', 'No retrasar el inicio de la nutrición, pero tampoco acelerarlo']
    },
    {
      nombre: 'Complicaciones y problemas practicos',
      color: '#6b4a8c',
      definicion: 'Conjunto de problemas cotidianos del soporte nutricional que determinan que el paciente reciba de verdad lo que se le ha prescrito.',
      fisiopatologia: 'La aspiración se produce cuando el contenido gástrico alcanza la via aérea, algo que favorecen el decúbito, el bajo nivel de conciencia, la sonda que mantiene el esfínter entreabierto y la gastroparesia. La diarrea asociada a la nutrición casi nunca se debe a la fórmula: la causan con mucha más frecuencia los fármacos que contienen sorbitol, los antibióticos, la infección por Clostridioides difficile y la impactacion fecal, que produce diarrea por rebosamiento y se confunde con lo contrario de lo que es. Y la debilidad adquirida en el paciente crítico, que reduce la fuerza de la musculatura respiratoria, se relaciona con la inmovilidad y la inflamación, no solo con el aporte.',
      epidemiologia: 'La brecha entre lo prescrito y lo recibido es grande y sistemática: las interrupciones por pruebas, traslados, cuidados y procedimientos hacen que muchos pacientes reciban bastante menos de lo pautado, y esa pérdida es en buena parte organizativa y por tanto corregible.',
      factores_riesgo: ['Cabecero no elevado', 'Bajo nivel de conciencia y sedación profunda', 'Gastroparesia y opioides', 'Antibióticos de amplio espectro', 'Fármacos con sorbitol administrados por sonda', 'Impactacion fecal no detectada', 'Interrupciones repetidas por pruebas y traslados', 'Sonda mal posicionada o desplazada', 'Catéter central en la nutrición parenteral', 'Hiperglucemia mal controlada'],
      clinica: 'Aspiración y neumonía asociada, distensión y vómitos, DIARREA, estreñimiento e impactacion, hiperglucemia, alteraciones iónicas, complicaciones mecánicas de la sonda e infección del catéter en la via parenteral.',
      criterios_dx: 'Clínicos y analíticos, según la complicación. Lo importante es buscarlas de forma activa, porque casi todas son silentes hasta que se manifiestan de golpe.',
      laboratorio: 'Glucemia, ionograma con fósforo y magnesio, función hepática y renal. Coprocultivo y toxina de Clostridioides difficile ante diarrea con antibióticos previos.',
      imagen: 'Radiografía de tórax ante sospecha de aspiración. Radiografía de abdomen si se sospecha impactacion fecal o íleo. Control de la posición de la sonda cuando haya dudas.',
      complementarios: 'ELEVACIÓN DEL CABECERO entre 30 y 45 grados, que es la medida más eficaz contra la aspiración y la que más se relaja. Valoración de la deglución antes de reiniciar la via oral. Y un recuento de las interrupciones acumuladas.',
      dx_diferencial: 'De la diarrea: fármacos, antibióticos, Clostridioides difficile, impactacion con rebosamiento, malabsorción e infección. Culpar a la fórmula debe ser lo ÚLTIMO, no lo primero.',
      tx_medico: 'Elevar el cabecero. Revisar la lista de fármacos administrados por la sonda buscando sorbitol. Tratar el estreñimiento de forma pautada. Descartar impactacion con un tacto rectal, que es una exploración sencilla y muy rentable. Y reducir las interrupciones evitables.',
      tx_farmacologico: 'Procineticos en la intolerancia gástrica. Laxantes pautados. Tratamiento específico si se confirma Clostridioides difficile. Insulina para el control glucémico.',
      tx_intervencionista: 'Sonda pospilorica en la intolerancia persistente. Gastrostomía si el soporte se prolonga. Retirada del catéter si se confirma infección asociada.',
      criterios_uci: 'Broncoaspiración masiva, sepsis de origen en el catéter y alteraciones metabólicas graves.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Revisión diaria de la tolerancia, del ritmo intestinal y de la diferencia entre lo prescrito y lo recibido. Y una comprobacion sencilla que rinde mucho: si el cabecero esta realmente elevado.',
      seguimiento_ambulatorio: 'Formación del paciente y del cuidador si el soporte continua en domicilio, con instrucciones escritas sobre la sonda, la postura y el manejo de las complicaciones.',
      pronostico: 'La mayoría de estas complicaciones son prevenibles con medidas sencillas y baratas. Su importancia no esta en la gravedad de cada una sino en su frecuencia.',
      algoritmo: ['Comprobar que el cabecero esta elevado de verdad', 'Confirmar la posición de la sonda antes de usarla', 'Ante diarrea, revisar fármacos con sorbitol y antibióticos', 'Descartar Clostridioides difficile', 'Hacer tacto rectal para descartar impactacion', 'No culpar a la fórmula hasta haber descartado lo anterior', 'Tratar el estreñimiento de forma pautada', 'Controlar la glucemia sin suspender la nutrición', 'Contar las interrupciones y reducir las evitables', 'Valorar la deglución antes de reiniciar la via oral']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El soporte nutricional es un tratamiento, con indicación, dosis y efectos adversos. Los dos errores que más cuestan son opuestos: no alimentar a quien lo necesita, y alimentar demasiado deprisa a quien lleva mucho tiempo sin comer.',
    parametros: ['Hacer cribado nutricional al ingreso', 'Explorar la masa muscular, que la bascula esconde', 'No usar la albúmina como marcador nutricional', 'Revisar los ayunos por pruebas que se van cancelando', 'Si el intestino funciona, usarlo', 'No esperar a los ruidos intestinales para iniciar', 'No medir el residuo gástrico de rutina', 'Elevar el cabecero entre 30 y 45 grados', 'Mirar FÓSFORO, POTASIO y MAGNESIO antes de alimentar', 'Dar TIAMINA antes que glucosa en el paciente de riesgo', 'Contar las calorías del propofol y de los sueros', 'Comparar lo recibido con lo prescrito'],
    criterios_uci_general: 'Hipofosfatemia grave con repercusión cardiaca o respiratoria durante la realimentación, arritmias por alteraciones iónicas, broncoaspiración masiva, sepsis de origen en el catéter de nutrición parenteral y alteraciones metabólicas graves que requieren monitorización continua.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'La nutrición parenteral domiciliaria de larga duración por fallo intestinal es una de las indicaciones de trasplante intestinal, en centros muy seleccionados. Y la desnutrición grave empeora los resultados de cualquier trasplante de órgano sólido, por lo que se valora y se corrige antes.',
    prevencion: 'Primaria: cribado nutricional universal al ingreso, revisión sistemática de los ayunos por pruebas, adaptación de la textura si hay disfagia y garantizar que alguien ayuda a comer al paciente que no puede hacerlo solo. Secundaria: identificar el riesgo de síndrome de realimentación ANTES de pautar la primera bolsa, mirando el índice de masa corporal, los días sin comer y las cifras de fósforo, potasio y magnesio; administrar tiamina antes que glucosa; y empezar despacio. Terciaria: prevención de las complicaciones cotidianas del soporte, que son las que más se repiten (cabecero elevado, posición de la sonda comprobada, manejo activo del estreñimiento, control glucémico sin suspender la nutrición, y revisión diaria de si el catéter central sigue haciendo falta), y plan nutricional al alta para quien ha pasado semanas comiendo mal.'
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
  'Desnutrición hospitalaria: detectarla': { definicion: [1, 5], criterios_dx: [1, 5], laboratorio: [1, 5], tx_farmacologico: [1, 5] },
  'Nutrición enteral': { definicion: [2, 3, 16, 15], criterios_dx: [2, 3, 16, 15], laboratorio: [2, 3, 16, 15], tx_farmacologico: [2, 3, 16, 15] },
  'Nutrición parenteral': { definicion: [4, 9, 10, 11], criterios_dx: [4, 9, 10, 11], laboratorio: [4, 9, 10, 11], tx_farmacologico: [4, 9, 10, 11] },
  'Cuanta energía y cuanta proteína': { definicion: [12, 13, 14, 2], criterios_dx: [12, 13, 14, 2], laboratorio: [12, 13, 14, 2], tx_farmacologico: [12, 13, 14, 2] },
  'Síndrome de realimentación': { definicion: [5, 6, 7, 8], criterios_dx: [5, 6, 7, 8], laboratorio: [5, 6, 7, 8], tx_farmacologico: [5, 6, 7, 8] },
  'Complicaciones y problemas practicos': { definicion: [3, 15], criterios_dx: [3, 15], laboratorio: [3, 15], tx_farmacologico: [3, 15] }
};
export const estigmasTitulo = 'Datos y gestos que cambian el resultado';
export const estigmas = [
  { s: 'Temporales y interoseos hundidos', p: 'Pérdida de masa muscular', photo: null, desc: 'Se ve en segundos y no cuesta nada. Es criterio diagnóstico por sí mismo y detecta lo que la bascula esconde en el paciente con edemas, que puede haber perdido mucho músculo sin perder peso.' },
  { s: 'Albúmina baja', p: 'No mide nutrición', photo: null, desc: 'Cae por la respuesta inflamatoria y por la fuga capilar, con independencia de lo que coma el paciente. Es un marcador de gravedad, no de estado nutricional, y usarla como tal lleva a conclusiones equivocadas.' },
  { s: 'Fósforo bajo antes de alimentar', p: 'Alto riesgo de realimentación', photo: null, desc: 'Basta por si solo para clasificar al paciente como de alto riesgo. Es el criterio que más se pasa por alto porque se pide la analítica y nadie mira esa línea antes de pautar la primera bolsa.' },
  { s: 'Iones normales tras un ayuno largo', p: 'No tranquilizan', photo: null, desc: 'Lo que se ha vaciado durante el ayuno es el interior de la célula, y la célula libera iones hacia la sangre para mantener las cifras. Por eso un fósforo normal antes de empezar no descarta el riesgo.' },
  { s: 'Glucosa antes que tiamina', p: 'El error que causa Wernicke', photo: null, desc: 'El aumento del metabolismo consume tiamina, y darla después de la glucosa puede precipitar una encefalopatía de Wernicke en un paciente ya deplecionado. La tiamina va primero, siempre.' },
  { s: 'Ausencia de ruidos intestinales', p: 'No contraindica nutrir', photo: null, desc: 'Es uno de los mitos más persistentes. Esperar a que aparezcan retrasa la nutrición enteral sin ningún fundamento. Las contraindicaciones reales son pocas: obstrucción, isquemia, perforación, choque no controlado y hemorragia activa.' },
  { s: 'Residuo gástrico medido de rutina', p: 'Ya no se hace', photo: null, desc: 'Interrumpe la nutrición sin mejorar los resultados. Un ensayo aleatorizado mostró que no monitorizarlo no aumentaba la neumonía asociada a ventilación, y desde entonces ha dejado de recomendarse como práctica rutinaria.' },
  { s: 'Cabecero bajado', p: 'Lo que más se relaja', photo: null, desc: 'La elevación entre 30 y 45 grados es la medida más eficaz contra la aspiración, es gratis y es la que más se pierde a lo largo del turno. Comprobarlo de verdad rinde más que muchas prescripciones.' },
  { s: 'Diarrea con nutrición enteral', p: 'Casi nunca es la fórmula', photo: null, desc: 'Hay que buscar antes los fármacos con sorbitol administrados por la sonda, los antibióticos, la infección por Clostridioides difficile y la impactacion fecal con rebosamiento. Culpar a la fórmula debe ser lo último.' },
  { s: 'Peso real en el paciente obeso', p: 'Sobreestima el aporte', photo: null, desc: 'Calcular con el peso de la bascula en la obesidad da un objetivo calórico groseramente excesivo. Se usa el peso ideal o el ajustado, y es un detalle aritmetico que cambia la pauta de forma sustancial.' },
  { s: 'Propofol y sueros glucosados', p: 'Calorías que nadie cuenta', photo: null, desc: 'Pueden suponer una parte importante del aporte diario. No descontarlas es una causa frecuente de sobrealimentacion en un paciente cuya pauta parecia calculada con cuidado.' },
  { s: 'Lo prescrito frente a lo recibido', p: 'La brecha silenciosa', photo: null, desc: 'Las interrupciones por pruebas, traslados y cuidados hacen que muchos pacientes reciban bastante menos de lo pautado. Es una pérdida en buena parte organizativa, y por tanto corregible si alguien la mide.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Riesgo de síndrome de realimentación (calculadora disponible)': [5, 6],
  'Requerimientos de energía y proteína (calculadora disponible)': [2, 13],
  'Elección de la via de nutrición (calculadora disponible)': [2, 9],
  'Criterios GLIM de desnutrición': [1],
  'Fase aguda frente a fase tardía': [2, 14],
  'Valoración de la disfagia': [3]
};
export const escalaCalc = {
  'Riesgo de síndrome de realimentación (calculadora disponible)': 'riesgo-realimentacion',
  'Requerimientos de energía y proteína (calculadora disponible)': 'requerimientos-nutricion',
  'Elección de la via de nutrición (calculadora disponible)': 'via-nutricion'
};
export const compGroups = [
  { name: 'Detectar', items: ['Desnutrición hospitalaria: detectarla'] },
  { name: 'Por que via', items: ['Nutrición enteral', 'Nutrición parenteral'] },
  { name: 'Cuanto y con que cuidado', items: ['Cuanta energía y cuanta proteína', 'Síndrome de realimentación'] },
  { name: 'El dia a dia', items: ['Complicaciones y problemas practicos'] }
];
export const complicacionesIntro = 'La primera ficha es la detección, que es donde empieza todo y donde más se falla, porque el cribado al ingreso debería ser universal y es la excepción. Las dos siguientes son las vías, con una regla que casi siempre se cumple y varias prácticas que han dejado de recomendarse. Las dos siguientes son las dos caras de la dosis: cuanto dar, donde el error habitual es dar de más en la fase aguda, y el síndrome de realimentación, donde el error es dar demasiado deprisa a quien lleva mucho tiempo sin comer. Y la última es el dia a dia, que es lo que decide si el paciente recibe de verdad lo que se le ha prescrito.';
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
  root: { title: 'PACIENTE QUE NO COME O COME MAL', color: '#7a6b2e', target: 'definicion' },
  branches: [
    { title: 'DETECTAR', sub: 'Cribar al ingreso', color: '#7a6b2e', target: 'complicaciones', leaves: [
      { title: 'Mirar el músculo', sub: 'Temporales e interoseos', color: '#7a6b2e', target: 'diagnostico' },
      { title: 'La albúmina no vale', sub: 'Mide inflamación', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Revisar los ayunos', sub: 'Pruebas que se cancelan', color: '#6b4a8c', target: 'complicaciones' },
      { title: 'Buscar disfagia', sub: 'La aspiración silente', color: '#3d5a73', target: 'clasificacion' }
    ] },
    { title: 'POR QUE VIA', sub: 'Si funciona, se usa', color: '#3f6b52', target: 'clasificacion', leaves: [
      { title: 'Oral primero', sub: 'Y comprobar lo obvio', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Enteral precoz', sub: 'En 24 a 48 horas', color: '#7a6b2e', target: 'complicaciones' },
      { title: 'Sin esperar ruidos', sub: 'Nunca fue un requisito', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Parenteral, sin prisa', sub: 'Muy precoz empeora', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'CUANTO Y COMO', sub: 'Más no es mejor', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Peso correcto', sub: 'Ideal si hay obesidad', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Contar el propofol', sub: 'Calorías que nadie cuenta', color: '#6b4a8c', target: 'complicaciones' },
      { title: 'Fósforo antes de empezar', sub: 'El dato que más se olvida', color: '#8c3a5c', target: 'complicaciones' },
      { title: 'Tiamina antes que glucosa', sub: 'Siempre en ese orden', color: '#8c3a34', target: 'seguimiento' }
    ] }
  ]
};
export const diagCites = { laboratorio: [5, 6, 1], no_invasivos: [1, 5, 2], imagen: [3, 1] };
export const clasificacionCite = [1, 2, 5];
export const seguimientoCite = [2, 5, 6];
