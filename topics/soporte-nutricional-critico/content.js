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
  titulo: 'Soporte Nutricional del Critico',
  subtitulo: 'Modulo 71 · Medicina Interna',
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
    <strong style="color:#7a6b2e;">La regla es sencilla y casi siempre se cumple: si el intestino funciona, se usa.</strong> <span style="color:var(--ink-dim);">Y si funciona a medias, se usa a medias. La via parenteral no es "la nutricion buena": es la que se reserva para cuando no queda otra.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:94px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">ORAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Siempre la primera opcion si el paciente traga con seguridad. Antes de escalar a nada, conviene comprobar lo obvio: si hay <strong style="color:var(--ink);">DISFAGIA</strong>, si la dieta pautada le gusta y llega caliente, si le ayudan a comer, y si esta en ayunas por pruebas que se van cancelando.</div>
    </div>
    <div style="display:grid;grid-template-columns:94px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#7a6b2e22;border:1px solid #7a6b2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#7a6b2e;">ENTERAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Si no puede comer pero el intestino funciona. Se inicia <strong style="color:var(--ink);">PRECOZMENTE</strong>, en las primeras 24 a 48 horas. Mantiene el trofismo de la mucosa y la barrera intestinal, y se asocia a menos complicaciones infecciosas que la parenteral. La sonda nasogastrica basta en la mayoria.</div>
    </div>
    <div style="display:grid;grid-template-columns:94px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">PARENTERAL</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Cuando la via digestiva no es utilizable o no cubre lo necesario. Los ensayos han mostrado que <strong style="color:#8c3a34;">iniciarla MUY pronto</strong> en quien podria tolerar algo por via enteral empeora los resultados: mas infecciones y mas dias de soporte. Se espera unos dias y se complementa.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">Contraindicaciones reales de la via enteral</strong>, que son pocas: obstruccion intestinal, isquemia mesenterica, perforacion, <strong>choque no controlado</strong> con vasoactivos a dosis crecientes, y hemorragia digestiva activa. Casi todo lo demas, incluida la ausencia de ruidos, NO lo es.
    </div>
    <div style="border:1px solid #3d5a73;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3d5a73;">Lo que ha dejado de hacerse.</strong> Medir el <strong>RESIDUO GASTRICO</strong> de forma rutinaria para decidir si se sigue alimentando: interrumpe la nutricion sin mejorar nada. Y esperar a que el paciente tenga ruidos o ventosee para empezar: eso no es un requisito.
    </div>
  </div>
</div>`;

const realimentacionHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8c3a34;border-radius:8px;padding:5px 9px;background:#8c3a3412;margin-bottom:6px;">
    <strong style="color:#8c3a34;">El sindrome de realimentacion no lo causa el ayuno: lo causa VOLVER A COMER.</strong> <span style="color:var(--ink-dim);">Es iatrogenico por definicion, y por eso es enteramente prevenible si se piensa en el antes de pautar la primera bolsa.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:24px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c3a34;">1</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Durante el ayuno el organismo pasa a usar grasa y proteina, y agota las reservas intracelulares de <strong style="color:var(--ink);">FOSFORO, POTASIO y MAGNESIO</strong>. Pero las cifras en sangre pueden estar NORMALES, porque lo que se ha vaciado es el interior de la celula.</div>
    </div>
    <div style="display:grid;grid-template-columns:24px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8a6a1f;">2</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Al reintroducir <strong style="color:var(--ink);">HIDRATOS DE CARBONO</strong> se dispara la insulina. Esta empuja glucosa, fosforo, potasio y magnesio hacia el interior de la celula, y ademas retiene sodio y agua.</div>
    </div>
    <div style="display:grid;grid-template-columns:24px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#3d5a73;">3</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">El resultado es una caida brusca de esos iones en sangre. La <strong style="color:#8c3a34;">HIPOFOSFATEMIA</strong> es la protagonista: sin fosforo no hay ATP ni 2,3-difosfoglicerato, y aparecen insuficiencia cardiaca, debilidad muscular y respiratoria, arritmias, rabdomiolisis, convulsiones y muerte subita.</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1.5px solid #3f6b52;border-radius:8px;padding:6px 8px;background:#3f6b5208;">
      <div style="font-weight:700;color:#3f6b52;text-align:center;margin-bottom:4px;">COMO SE PREVIENE</div>
      <div style="color:var(--ink-dim);line-height:1.6;"><strong style="color:var(--ink);">TIAMINA ANTES</strong> de cualquier aporte de glucosa, y mantenida varios dias. Empezar con <strong style="color:var(--ink);">POCAS calorias</strong>, en torno a 10 kcal/kg al dia (menos en los casos extremos), y subir despacio a lo largo de 4 a 7 dias. Reponer fosforo, potasio y magnesio <strong>ANTES</strong> y durante, sin retrasar por ello el inicio.</div>
    </div>
    <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 8px;background:#8a6a1f08;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:4px;">A QUIEN LE PASA</div>
      <div style="color:var(--ink-dim);line-height:1.6;">Ayuno prolongado, indice de masa corporal muy bajo, perdida de peso importante, alcoholismo, anorexia nerviosa, cirugia bariatrica, oncologicos, ancianos, y quien ya llega con el <strong>fosforo, el potasio o el magnesio bajos</strong>. Ese ultimo dato es el que mas se pasa por alto y el que mas riesgo marca.</div>
    </div>
  </div>
</div>`;

const cuantoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #3d5a73;border-radius:8px;padding:5px 9px;background:#3d5a7312;margin-bottom:6px;">
    <strong style="color:#3d5a73;">En la fase aguda, mas no es mejor.</strong> <span style="color:var(--ink-dim);">El organismo produce energia endogena a partir de sus propias reservas, y si a eso se le suma un aporte completo se llega a la SOBREALIMENTACION, con hiperglucemia, esteatosis, mas carbonico y peor evolucion.</span>
  </div>
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:110px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">FASE AGUDA<br><span style="font-weight:400;font-size:8.5px;">primeros dias</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Aporte <strong style="color:var(--ink);">PROGRESIVO y por debajo del objetivo</strong>. No hay que alcanzar las calorias calculadas en las primeras 48 a 72 horas, sobre todo si el paciente esta inestable o recibe vasoactivos a dosis altas. Y hay que contar las <strong>calorias NO nutricionales</strong>: propofol, glucosa de sueros y citrato.</div>
    </div>
    <div style="display:grid;grid-template-columns:110px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3f6b52;">FASE TARDIA<br><span style="font-weight:400;font-size:8.5px;">a partir del 3.er o 4.o dia</span></div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Se progresa hacia el objetivo calorico, en torno a <strong style="color:var(--ink);">25 kcal/kg al dia</strong> como referencia orientativa, ajustando por la evolucion. La calorimetria indirecta seria lo ideal para medirlo en lugar de estimarlo, pero esta disponible en muy pocos sitios.</div>
    </div>
    <div style="display:grid;grid-template-columns:110px 1fr;gap:6px;align-items:stretch;">
      <div style="background:#7a6b2e22;border:1px solid #7a6b2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#7a6b2e;">PROTEINA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Alrededor de <strong style="color:var(--ink);">1.3 g/kg al dia</strong> como referencia. Conviene saber que subirla mucho por encima de eso NO ha demostrado beneficio en los ensayos, y en algunos subgrupos, sobre todo con lesion renal aguda, se asocio a peores resultados. Mas proteina no es automaticamente mejor.</div>
    </div>
  </div>
  <div style="padding:5px 9px;border:1px solid #6b4a8c;border-radius:8px;background:#6b4a8c10;color:var(--ink-dim);">
    <strong style="color:#6b4a8c;">Y el peso que se usa para calcular importa.</strong> En el paciente con <strong>OBESIDAD</strong>, usar el peso real sobreestima las necesidades de forma grosera; se emplea el peso ideal o el ajustado. En el paciente con edemas, ascitis o sobrecarga, el peso de la bascula tampoco sirve. Es un detalle aritmetico que cambia la pauta de forma sustancial y que casi nadie comprueba.
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La desnutricion del paciente hospitalizado es frecuente, tiene consecuencias medibles (mas infecciones, peor cicatrizacion, mas dias de ingreso, mas mortalidad) y sin embargo se diagnostica poco y se trata tarde. El soporte nutricional no es un cuidado accesorio: es un tratamiento con indicaciones, dosis y efectos adversos, y uno de esos efectos adversos, el <strong>sindrome de realimentacion</strong>, puede matar.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: por que via.</strong></p>
<p style="margin:0 0 12px;">La regla es sencilla: si el intestino funciona, se usa, y si funciona a medias, se usa a medias. La via enteral se inicia <strong>precozmente</strong> y la parenteral se reserva. Conviene ademas conocer lo que ha dejado de hacerse, como medir el residuo gastrico de rutina, y lo que nunca fue un requisito, como esperar a que haya ruidos.</p>
${figBlock('Figura 1', 'La via: oral, enteral y parenteral, y lo que ya no se hace', viaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: el sindrome de realimentacion.</strong></p>
<p style="margin:0 0 12px;">No lo causa el ayuno sino volver a comer, de modo que es <strong>iatrogenico por definicion</strong> y enteramente prevenible. Su protagonista es la <strong>hipofosfatemia</strong>, y su trampa es que las cifras en sangre pueden estar normales antes de empezar, porque lo que se ha vaciado es el interior de la celula.</p>
${figBlock('Figura 2', 'Sindrome de realimentacion: por que ocurre y como se previene', realimentacionHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: cuanto dar.</strong></p>
<p style="margin:0 0 12px;">En la fase aguda, <strong>mas no es mejor</strong>: el organismo produce energia endogena y sumarle un aporte completo lleva a la sobrealimentacion. Hay que contar ademas las calorias no nutricionales, y usar el peso correcto, porque en la obesidad el peso real sobreestima las necesidades de forma grosera.</p>
${figBlock('Figura 3', 'Cuanta energia y cuanta proteina, por fases', cuantoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No dejar al paciente en dieta absoluta por pruebas que se van cancelando sin que nadie lo revise. No esperar a que haya ruidos intestinales para iniciar la nutricion enteral. No medir el residuo gastrico de rutina para decidir si se sigue alimentando. No usar la via parenteral cuando el intestino funciona, ni iniciarla muy pronto en quien podria tolerar algo por via enteral. No perseguir el objetivo calorico completo en las primeras 48 a 72 horas. No olvidar las <strong>calorias no nutricionales</strong> del propofol y de los sueros glucosados. No calcular con el peso real en el paciente con obesidad ni con el peso de la bascula en el que tiene edemas. No dar glucosa antes que <strong>tiamina</strong> a un paciente de riesgo. No retrasar el inicio de la nutricion esperando a normalizar el fosforo, pero tampoco empezar a ritmo completo sin haberlo mirado. Y no dar de alta sin plan nutricional a quien ha estado semanas comiendo mal.</p>`;

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
      tituloA: 'Desnutricion establecida',
      tituloB: 'Riesgo de realimentacion',
      compensada: 'Perdida de peso no intencionada, perdida de masa muscular apreciable en la exploracion (temporales, deltoides, interoseos de la mano y cuadriceps), perdida de grasa subcutanea, debilidad, edemas y disminucion de la fuerza de prension. En el hospital hay ademas causas que se suman y que casi nadie corrige: dietas poco apetecibles que llegan frias, ayunos repetidos por pruebas que se cancelan, nadie que ayude a comer al paciente que no puede hacerlo solo, y DISFAGIA no detectada. El cribado nutricional al ingreso deberia ser universal y en la practica es la excepcion.',
      descompensada: 'Es una situacion de RIESGO, no un cuadro clinico: identifica al paciente en el que reintroducir la alimentacion puede desencadenar un sindrome de realimentacion. Hay que buscarlo de forma activa antes de pautar la primera bolsa, mirando el indice de masa corporal, la perdida de peso reciente, los dias sin ingesta significativa, el consumo de alcohol y, sobre todo, las cifras de FOSFORO, POTASIO y MAGNESIO antes de empezar. Ese ultimo dato es el que mas riesgo marca y el que mas se pasa por alto, porque se pide la analitica y nadie mira esas tres lineas.'
    },
    laboratorio: [
      { prueba: 'Fosforo, potasio y magnesio ANTES de alimentar', utilidad: 'La determinacion mas importante de todo el tema. Unos valores bajos antes de iniciar el aporte identifican por si solos a un paciente de ALTO riesgo de sindrome de realimentacion, y obligan a reponer y a empezar despacio.' },
      { prueba: 'Glucemia y control seriado', utilidad: 'La hiperglucemia es la complicacion metabolica mas frecuente del soporte nutricional, sobre todo con la via parenteral, y empeora el pronostico. Se controla ajustando el aporte y con insulina, no suspendiendo la nutricion.' },
      { prueba: 'Albumina y prealbumina', utilidad: 'Se usan como marcadores nutricionales y NO lo son: en el paciente agudo caen por la respuesta inflamatoria y por la fuga capilar, con independencia de lo que coma. Sirven como marcadores de gravedad, no de nutricion.' },
      { prueba: 'Funcion hepatica y trigliceridos', utilidad: 'Vigilan las complicaciones de la nutricion parenteral: colestasis, esteatosis e hipertrigliceridemia. Su alteracion suele indicar sobrealimentacion o exceso de lipidos y obliga a revisar la pauta antes que a suspenderla.' },
      { prueba: 'Ionograma completo y equilibrio acido-base', utilidad: 'Sodio, cloro y bicarbonato. La sobrecarga de sodio y la acidosis hipercloremica son complicaciones frecuentes y evitables del soporte, especialmente cuando el volumen del aporte no se cuenta en el balance.' },
      { prueba: 'Tiamina y otras vitaminas', utilidad: 'En la practica no se mide: se REPONE de forma empirica en todo paciente de riesgo, antes de administrar glucosa. Esperar a un resultado para dar tiamina es un error que puede costar una encefalopatia de Wernicke.' },
      { prueba: 'Urea y balance nitrogenado', utilidad: 'Orientan sobre el aporte proteico y su tolerancia. Conviene interpretarlos con la funcion renal, porque una urea en ascenso puede reflejar tanto aporte excesivo como deterioro del filtrado.' },
      { prueba: 'Proteina C reactiva', utilidad: 'No es un marcador nutricional, pero ayuda a interpretar los demas: con inflamacion elevada, la albumina y la prealbumina no informan sobre el estado nutricional y no deben usarse para eso.' }
    ],
    no_invasivos: [
      { metodo: 'Riesgo de sindrome de realimentacion (calculadora disponible)', interpretacion: 'Aplica los criterios de riesgo alto y devuelve la pauta de inicio: tiamina previa, calorias iniciales y monitorizacion de iones.', cutoff: 'Un solo criterio mayor basta para clasificar como alto riesgo' },
      { metodo: 'Requerimientos de energia y proteina (calculadora disponible)', interpretacion: 'Calcula el objetivo calorico y proteico usando el peso correcto, avisa de las calorias no nutricionales y ajusta por la fase de la enfermedad.', cutoff: 'En la fase aguda no hay que alcanzar el objetivo: se progresa despacio' },
      { metodo: 'Eleccion de la via de nutricion (calculadora disponible)', interpretacion: 'Decide entre oral, enteral y parenteral segun la funcion digestiva, la seguridad de la deglucion y la situacion hemodinamica.', cutoff: 'Si el intestino funciona, se usa; y si funciona a medias, se usa a medias' },
      { metodo: 'Criterios GLIM de desnutricion', interpretacion: 'Requieren un criterio FENOTIPICO (perdida de peso, indice de masa corporal bajo o masa muscular reducida) mas uno ETIOLOGICO (ingesta reducida o inflamacion).', cutoff: 'Hacen falta ambos tipos de criterio: uno solo no basta' },
      { metodo: 'Exploracion de la masa muscular', interpretacion: 'Se mira en temporales, deltoides, interoseos de la mano y cuadriceps, y se completa con la fuerza de prension. No cuesta nada y detecta lo que la bascula esconde en el paciente con edemas.', cutoff: 'La perdida de masa muscular es criterio fenotipico por si misma' },
      { metodo: 'Cribado nutricional al ingreso', interpretacion: 'Herramientas breves que identifican al paciente en riesgo en pocos minutos, para pasar despues a una valoracion completa.', cutoff: 'Deberia ser universal al ingreso y en la practica es la excepcion' }
    ],
    imagen: [
      { modalidad: 'Radiografia de control de la sonda', hallazgos: 'Obligada antes de usar una sonda nasogastrica colocada a ciegas en el paciente con bajo nivel de conciencia o con la via aerea artificial, porque una colocacion en el arbol bronquial que pase desapercibida y se utilice para nutrir es una complicacion catastrofica.' },
      { modalidad: 'Ecografia de masa muscular', hallazgos: 'Mide el grosor y la ecogenicidad del cuadriceps y permite seguir la perdida de masa muscular a lo largo del ingreso, que en el paciente critico es rapida. Es una tecnica en expansion y todavia poco extendida.' },
      { modalidad: 'Tomografia con medida de masa muscular', hallazgos: 'Un corte a nivel de la tercera vertebra lumbar permite cuantificar la masa muscular esqueletica y detectar SARCOPENIA. Se puede aprovechar una tomografia pedida por otro motivo, lo que la hace especialmente eficiente.' },
      { modalidad: 'Videofluoroscopia de la deglucion', hallazgos: 'Cuando hay sospecha de disfagia y las pruebas de cabecera no aclaran la seguridad de la via oral. Detecta la aspiracion SILENTE, que es la que no produce tos y por tanto la que mas riesgo tiene de pasar desapercibida.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Se clasifica por el <strong>estado nutricional</strong> (con criterios que exigen combinar un dato fenotipico y uno etiologico), por el <strong>riesgo</strong> que tiene el paciente de complicarse al recibir soporte, sobre todo de sindrome de realimentacion, y por la <strong>via</strong> que va a usarse. A eso se a&#241;ade la <strong>fase de la enfermedad</strong>, que es la division mas util en el paciente critico: en la fase aguda el objetivo es no da&#241;ar y en la tardia es reponer.`,
    escalas: [
      { nombre: 'Riesgo de sindrome de realimentacion (calculadora disponible)', componentes: 'Indice de masa corporal, perdida de peso no intencionada reciente, dias con ingesta escasa o nula, cifras de fosforo, potasio y magnesio antes de alimentar, y antecedente de consumo de alcohol o de ciertos farmacos.', formula: 'Se considera de alto riesgo con UN criterio mayor, o con DOS criterios menores.', interpretacion: 'El criterio que mas se olvida es el de los iones: unas cifras bajas de fosforo, potasio o magnesio ANTES de empezar bastan por si solas para clasificar al paciente como de alto riesgo. Y hay que mirarlas antes de pautar la primera bolsa, no despues.' },
      { nombre: 'Requerimientos de energia y proteina (calculadora disponible)', componentes: 'Peso (real, ideal o ajustado segun el indice de masa corporal), fase de la enfermedad y calorias no nutricionales que ya recibe el paciente.', formula: 'Objetivo calorico en torno a 25 kcal/kg al dia como referencia, y proteico en torno a 1.3 g/kg al dia, alcanzados de forma progresiva.', interpretacion: 'Dos ajustes cambian mucho el resultado y casi nadie los hace: usar el peso IDEAL o ajustado en la obesidad, porque el real sobreestima de forma grosera, y DESCONTAR las calorias del propofol y de los sueros glucosados, que pueden suponer una parte importante del total.' },
      { nombre: 'Eleccion de la via de nutricion (calculadora disponible)', componentes: 'Capacidad de deglucion segura, funcionalidad del tubo digestivo, situacion hemodinamica y duracion prevista del soporte.', formula: 'Oral si traga con seguridad; enteral precoz si el intestino funciona; parenteral si no es utilizable o si la enteral no cubre lo necesario tras varios dias.', interpretacion: 'Las contraindicaciones reales de la via enteral son pocas: obstruccion, isquemia mesenterica, perforacion, choque no controlado y hemorragia digestiva activa. La ausencia de ruidos NO es una de ellas, y esperar a que aparezcan retrasa la nutricion sin ningun fundamento.' },
      { nombre: 'Criterios GLIM de desnutricion', componentes: 'Criterios FENOTIPICOS: perdida de peso no intencionada, indice de masa corporal bajo y masa muscular reducida. Criterios ETIOLOGICOS: ingesta o asimilacion reducida, y carga inflamatoria por enfermedad aguda o cronica.', formula: 'Se necesita al menos UN criterio fenotipico y UN criterio etiologico. La gravedad se establece despues segun la magnitud del criterio fenotipico.', interpretacion: 'Su valor es haber unificado un diagnostico que antes usaba definiciones distintas en cada sitio. Y su exigencia de un criterio etiologico obliga a preguntarse POR QUE esta desnutrido el paciente, que es lo que orienta el tratamiento.' },
      { nombre: 'Fase aguda frente a fase tardia', componentes: 'Estabilidad hemodinamica, dosis de vasoactivos, dias de evolucion y situacion metabolica.', formula: 'Fase aguda en los primeros dias, con inestabilidad y produccion de energia endogena. Fase tardia a partir del tercer o cuarto dia, con el paciente estabilizado.', interpretacion: 'Es la distincion mas util del tema. En la fase aguda el objetivo NO es cubrir los requerimientos: sumar un aporte completo a la energia endogena produce sobrealimentacion. En la fase tardia si se progresa hacia el objetivo.' },
      { nombre: 'Valoracion de la disfagia', componentes: 'Pruebas de cabecera con agua y con distintas consistencias, observacion de la tos, de la voz humeda y de la desaturacion.', formula: 'Cribado a pie de cama y, si es dudoso o de alto riesgo, exploracion instrumental.', interpretacion: 'La aspiracion SILENTE, sin tos, es la que mas riesgo tiene precisamente porque no da la se&#241;al que todos esperan. Ante una neumonia de repeticion en un paciente con deterioro neurologico, hay que valorar la deglucion aunque nadie le haya visto atragantarse.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Desnutricion hospitalaria: detectarla',
      color: '#7a6b2e',
      definicion: 'Estado derivado de una ingesta o asimilacion insuficiente de nutrientes que produce alteracion de la composicion corporal y deterioro de la funcion, con consecuencias clinicas medibles.',
      fisiopatologia: 'En el paciente hospitalizado se suman dos mecanismos distintos. Uno es el DEFICIT DE APORTE, muchas veces iatrogenico: ayunos repetidos por pruebas, dietas poco apetecibles, ausencia de ayuda para comer y disfagia no detectada. El otro es el CATABOLISMO inducido por la inflamacion, que moviliza la proteina muscular para producir reactantes de fase aguda y glucosa, y que no se corrige solo dando comida. Esa doble naturaleza explica por que la desnutricion del enfermo agudo no se revierte simplemente aumentando el aporte, y por que los marcadores clasicos como la albumina, que caen por la inflamacion, no sirven para medirla.',
      epidemiologia: 'Afecta a una proporcion muy alta de los pacientes hospitalizados y aumenta durante el ingreso, es decir, empeora en el hospital. Se asocia a mas infecciones, peor cicatrizacion, mas caidas, estancias mas largas, mas reingresos y mayor mortalidad. Y sigue estando infradiagnosticada, en parte porque el cribado sistematico al ingreso es la excepcion.',
      factores_riesgo: ['Edad avanzada', 'Enfermedad oncologica', 'Enfermedad digestiva y malabsorcion', 'Insuficiencia cardiaca, respiratoria o renal avanzadas', 'Hepatopatia cronica', 'Demencia y deterioro funcional', 'Disfagia', 'Consumo excesivo de alcohol', 'Depresion y aislamiento social', 'Polifarmacia con anorexia asociada', 'Ayunos repetidos por pruebas durante el ingreso', 'Ausencia de ayuda para comer'],
      clinica: 'Perdida de peso no intencionada, perdida de MASA MUSCULAR visible en temporales, deltoides, interoseos y cuadriceps, perdida de grasa subcutanea, debilidad, menor fuerza de prension y edemas. Conviene mirar tambien lo que pasa en la planta: cuanto come realmente el paciente, si alguien le ayuda y cuantos dias lleva en ayunas por pruebas.',
      criterios_dx: 'Criterios GLIM: al menos UN criterio fenotipico (perdida de peso, indice de masa corporal bajo o masa muscular reducida) mas UN criterio etiologico (ingesta reducida o inflamacion).',
      laboratorio: 'Ionograma completo con FOSFORO y MAGNESIO, glucemia, funcion renal y hepatica, hemograma y proteina C reactiva. Conviene recordar que la ALBUMINA y la prealbumina NO son marcadores nutricionales en el paciente agudo: caen por la inflamacion.',
      imagen: 'Ecografia de masa muscular donde este disponible. Y aprovechar una tomografia pedida por otro motivo para medir la masa muscular a nivel de la tercera vertebra lumbar, que es una forma eficiente de detectar sarcopenia.',
      complementarios: 'CRIBADO nutricional al ingreso, que deberia ser universal. Valoracion de la deglucion si hay factores de riesgo. Y registro real de la ingesta, que es lo que revela el problema en la planta.',
      dx_diferencial: 'Sarcopenia relacionada con la edad, caquexia asociada a enfermedad avanzada (que es catabolica y no se revierte solo con aporte), deshidratacion, y perdida de peso por causas concretas como hipertiroidismo, diabetes descompensada, malabsorcion o neoplasia oculta.',
      tx_medico: 'Corregir primero lo corregible: revisar los ayunos, adaptar la textura si hay disfagia, ofrecer alimentos que el paciente tolere, asegurar que alguien le ayude a comer y tratar las nauseas, el dolor y el estre&#241;imiento que le impiden comer. Suplementos orales si con eso no basta.',
      tx_farmacologico: 'Suplementos nutricionales orales, que son el primer escalon y tienen respaldo. Tratamiento de los sintomas que interfieren con la ingesta. Los estimulantes del apetito tienen un papel muy limitado y con efectos adversos.',
      tx_intervencionista: 'Sonda de alimentacion o gastrostomia cuando el soporte va a ser prolongado, decision que en la enfermedad avanzada debe tomarse dentro de una conversacion sobre objetivos y no de forma automatica.',
      criterios_uci: 'No aplica por si misma; la desnutricion es un factor de riesgo que empeora el pronostico de cualquier otro proceso.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La desnutricion grave es un factor que empeora los resultados y que se valora antes de un trasplante de organo solido.',
      seguimiento_hospitalario: 'Registro de la ingesta real, peso semanal y revision de si los ayunos siguen justificados. Es una vigilancia sencilla que casi nadie hace de forma sistematica.',
      seguimiento_ambulatorio: 'Plan nutricional al alta para quien ha estado semanas comiendo mal, con suplementos si procede y con una revision. Salir del hospital desnutrido y sin plan es un factor de reingreso.',
      pronostico: 'La desnutricion es un factor pronostico independiente en casi todas las enfermedades. Su correccion mejora desenlaces funcionales, aunque en la enfermedad avanzada el margen es limitado.',
      algoritmo: ['Hacer CRIBADO nutricional al ingreso', 'Explorar la masa muscular: temporales, deltoides, interoseos y cuadriceps', 'Preguntar por la perdida de peso reciente', 'No usar la albumina como marcador nutricional', 'Aplicar los criterios: uno fenotipico mas uno etiologico', 'Revisar cuantos dias lleva en ayunas por pruebas', 'Comprobar si tiene DISFAGIA', 'Asegurar que alguien le ayuda a comer', 'A&#241;adir suplementos orales si con eso no basta', 'Dejar un plan nutricional al alta']
    },
    {
      nombre: 'Nutricion enteral',
      color: '#3f6b52',
      definicion: 'Aporte de nutrientes a traves del tubo digestivo mediante una sonda, indicada cuando el paciente no puede comer pero su intestino es funcionante.',
      fisiopatologia: 'El intestino no es solo un tubo de absorcion: es una barrera y un organo inmunitario. Los enterocitos obtienen buena parte de su energia directamente del contenido de la luz, de modo que el ayuno produce atrofia de las vellosidades, aumento de la permeabilidad y alteracion del tejido linfoide asociado. Esa es la base teorica de la nutricion enteral precoz: mantener el trofismo de la mucosa y la integridad de la barrera. Y explica el hallazgo mas consistente de los ensayos, que es la reduccion de complicaciones INFECCIOSAS frente a la via parenteral, mas que una diferencia de mortalidad.',
      epidemiologia: 'Es la via de eleccion en el paciente critico que no puede comer. Se recomienda iniciarla de forma precoz, en las primeras 24 a 48 horas, en el paciente hemodinamicamente estable. Su tolerancia es buena en la mayoria, y las interrupciones que sufre son mas veces organizativas que clinicas.',
      factores_riesgo: ['Bajo nivel de conciencia, por el riesgo de aspiracion', 'Ventilacion mecanica', 'Decubito sin elevar el cabecero', 'Gastroparesia diabetica o farmacologica', 'Opioides y sedantes, que enlentecen el transito', 'Choque con vasoactivos a dosis altas', 'Cirugia abdominal reciente', 'Antecedente de broncoaspiracion', 'Sonda mal posicionada', 'Interrupciones repetidas por pruebas y traslados'],
      clinica: 'La tolerancia se valora clinicamente: distension, dolor, vomitos, regurgitacion y ritmo intestinal. La DIARREA es el problema mas frecuente y casi nunca se debe a la formula: hay que buscar antes los farmacos con sorbitol, los antibioticos, la infeccion por Clostridioides difficile y la impactacion fecal con diarrea por rebosamiento.',
      criterios_dx: 'No aplica: es una intervencion. La decision se toma con la funcion digestiva y la seguridad de la deglucion. Ver la Figura 1 de Definicion.',
      laboratorio: 'Glucemia, ionograma con fosforo y magnesio, funcion renal y hepatica. Y en el paciente de riesgo, los iones ANTES de iniciar, por el sindrome de realimentacion.',
      imagen: 'RADIOGRAFIA DE CONTROL de la sonda antes de usarla en el paciente con bajo nivel de conciencia o con via aerea artificial. Nutrir a traves de una sonda mal colocada es una complicacion catastrofica y prevenible.',
      complementarios: 'Elevacion del cabecero entre 30 y 45 grados, que es la medida mas eficaz para reducir la aspiracion y la que mas se relaja. Revision diaria de las interrupciones acumuladas, que suelen explicar por que el paciente recibe mucho menos de lo prescrito.',
      dx_diferencial: 'De la intolerancia: gastroparesia, ileo, obstruccion, isquemia mesenterica (rara pero grave, y a considerar ante dolor desproporcionado y acidosis) y estre&#241;imiento con rebosamiento.',
      tx_medico: 'Iniciar PRECOZMENTE y progresar segun tolerancia. Cabecero elevado. Revisar farmacos que enlentecen el transito. Tratar el estre&#241;imiento de forma activa, que es un problema muy frecuente y muy poco atendido en el paciente critico.',
      tx_farmacologico: 'Procineticos si hay intolerancia gastrica persistente. Laxantes de forma pautada y no a demanda. Y, si la intolerancia gastrica no se resuelve, valorar el paso a sonda POSPILORICA en lugar de suspender la nutricion.',
      tx_intervencionista: 'Sonda pospilorica en la intolerancia gastrica persistente. Gastrostomia percutanea si el soporte va a durar mas de unas semanas.',
      criterios_uci: 'No aplica por si misma.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Comprobar cuanto RECIBE de verdad frente a lo prescrito, porque la diferencia suele ser grande y se debe a interrupciones evitables por pruebas, traslados y cuidados. Y no medir el residuo gastrico de rutina para decidir si se sigue.',
      seguimiento_ambulatorio: 'Formacion del cuidador si la nutricion enteral continua en domicilio, con plan de manejo de complicaciones y de recambio de la sonda.',
      pronostico: 'Buena tolerancia en la mayoria. Se asocia a menos complicaciones infecciosas que la parenteral, que es su principal ventaja demostrada.',
      algoritmo: ['Comprobar que el intestino es funcionante', 'Descartar las contraindicaciones reales, que son pocas', 'NO esperar a que haya ruidos intestinales', 'Colocar la sonda y confirmar su posicion con radiografia si procede', 'Iniciar en las primeras 24 a 48 horas', 'Elevar el cabecero entre 30 y 45 grados', 'Progresar segun tolerancia clinica', 'No medir el residuo gastrico de rutina', 'Ante diarrea, buscar farmacos, antibioticos y Clostridioides antes que culpar a la formula', 'Contar las interrupciones y comparar lo recibido con lo prescrito']
    },
    {
      nombre: 'Nutricion parenteral',
      color: '#8c3a34',
      definicion: 'Aporte de nutrientes por via intravenosa, indicado cuando el tubo digestivo no es utilizable o cuando la via enteral no consigue cubrir los requerimientos.',
      fisiopatologia: 'Al saltarse el intestino se pierde el estimulo trofico de la mucosa y se favorece la atrofia de las vellosidades y el aumento de permeabilidad. A eso se suma que la infusion directa de nutrientes al torrente elude los mecanismos de regulacion de la absorcion, de modo que la sobrealimentacion es mas facil y sus consecuencias mas inmediatas: hiperglucemia, esteatosis hepatica, hipertrigliceridemia y aumento de la produccion de carbonico, que en un paciente con reserva ventilatoria limitada tiene consecuencias practicas. Y la propia via, un cateter central, es una puerta de entrada de infeccion.',
      epidemiologia: 'Un ensayo amplio comparo iniciar la nutricion parenteral complementaria de forma muy precoz frente a diferirla varios dias en pacientes criticos, y el grupo de inicio TARDIO tuvo mejores resultados, con menos infecciones y menos dias de soporte. Otros ensayos comparando via enteral frente a parenteral no encontraron diferencias de mortalidad, pero si menos complicaciones digestivas con la parenteral y menos infecciosas con la enteral.',
      factores_riesgo: ['Cateter venoso central, que es puerta de entrada de infeccion', 'Hiperglucemia mal controlada', 'Sobrealimentacion', 'Desnutricion grave previa, por el riesgo de realimentacion', 'Hepatopatia previa', 'Sepsis concomitante', 'Manipulaciones frecuentes de la via', 'Uso prolongado', 'Inmovilidad y ausencia de estimulo enteral', 'Aporte de volumen no contabilizado en el balance'],
      clinica: 'Las complicaciones se buscan de forma activa porque casi todas son analiticas o del cateter: hiperglucemia, alteraciones ionicas, alteracion de la funcion hepatica, hipertrigliceridemia y fiebre o signos locales en el punto de insercion.',
      criterios_dx: 'No aplica: es una intervencion. La indicacion es la imposibilidad de usar el tubo digestivo o la insuficiencia de la via enteral tras varios dias. Ver la Figura 1 de Definicion.',
      laboratorio: 'Glucemia frecuente, ionograma con FOSFORO y magnesio, funcion hepatica, trigliceridos, funcion renal y hemograma. Los primeros dias con mas frecuencia, sobre todo en el paciente de riesgo de realimentacion.',
      imagen: 'Control radiologico del cateter central tras su colocacion. Ecografia hepatica si aparece colestasis prolongada.',
      complementarios: 'Cuidado estricto del cateter con tecnica aseptica, y revision DIARIA de si sigue haciendo falta. Mantener aunque sea un aporte enteral minimo cuando sea posible, para preservar el trofismo de la mucosa.',
      dx_diferencial: 'De la fiebre en el paciente con nutricion parenteral: infeccion del cateter, que hay que considerar siempre, frente a otras causas. De la alteracion hepatica: sobrealimentacion, exceso de lipidos, farmacos o enfermedad de base.',
      tx_medico: 'Aporte progresivo, evitando la sobrealimentacion. Control glucemico con insulina, sin suspender la nutricion. Y transicion a la via enteral u oral en cuanto sea posible, que es el objetivo desde el primer dia.',
      tx_farmacologico: 'Insulina para el control glucemico. Ajuste de la composicion de la bolsa segun las alteraciones que aparezcan, que es preferible a suspenderla.',
      tx_intervencionista: 'Retirada del cateter si se confirma infeccion asociada. Colocacion de accesos de larga duracion si el soporte va a ser prolongado.',
      criterios_uci: 'No aplica por si misma.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La nutricion parenteral domiciliaria de larga duracion por fallo intestinal es una de las indicaciones de trasplante intestinal, en centros muy seleccionados.',
      seguimiento_hospitalario: 'Revision diaria de la indicacion, del acceso y de la analitica. Y una pregunta cada dia: se puede empezar ya algo por via digestiva, aunque sea poco.',
      seguimiento_ambulatorio: 'Programa especifico si continua en domicilio, con formacion del paciente y del cuidador y seguimiento por una unidad de nutricion.',
      pronostico: 'Es una tecnica segura cuando se usa con indicacion correcta y sin sobrealimentar. Sus problemas derivan sobre todo del uso innecesario, del inicio demasiado precoz y del exceso de aporte.',
      algoritmo: ['Comprobar que la via digestiva no es utilizable o no cubre lo necesario', 'No iniciarla de forma muy precoz si el paciente podria tolerar algo por via enteral', 'Colocar el acceso con tecnica aseptica y confirmar su posicion', 'Iniciar de forma progresiva, sin sobrealimentar', 'Contar las calorias del propofol y de los sueros', 'Controlar glucemia, iones, higado y trigliceridos', 'Mantener aporte enteral minimo si es posible', 'Revisar cada dia si el cateter sigue haciendo falta', 'Ante fiebre, considerar siempre la infeccion del cateter', 'Pasar a via enteral u oral en cuanto se pueda']
    },
    {
      nombre: 'Cuanta energia y cuanta proteina',
      color: '#3d5a73',
      definicion: 'Determinacion del aporte calorico y proteico adecuado, que en el paciente critico depende mas de la fase de la enfermedad que del calculo aritmetico.',
      fisiopatologia: 'En la fase aguda de la enfermedad critica el organismo produce una cantidad importante de energia ENDOGENA a partir de sus propias reservas, mediante glucogenolisis, gluconeogenesis y lipolisis, y esa produccion no se apaga porque se administre nutricion. Si al aporte exogeno completo se le suma esa produccion endogena, el resultado es una SOBREALIMENTACION real aunque el calculo pareciera correcto, con hiperglucemia, esteatosis, aumento de la produccion de carbonico y peor evolucion. Esa es la explicacion fisiologica de por que los ensayos de aporte calorico completo y precoz no han mostrado beneficio, y de por que la recomendacion actual es progresar despacio.',
      epidemiologia: 'Varios ensayos amplios han comparado aportes caloricos altos frente a moderados sin encontrar beneficio de los primeros. Y un ensayo sobre dosis alta de proteina en pacientes de alto riesgo nutricional no encontro mejoria y sugirio peores resultados en algunos subgrupos, especialmente en pacientes con lesion renal aguda.',
      factores_riesgo: ['Calcular con el peso real en el paciente con obesidad', 'Usar el peso de la bascula en el paciente con edemas o ascitis', 'No contar las calorias del propofol', 'No contar la glucosa de los sueros y del citrato', 'Perseguir el objetivo calorico completo en los primeros dias', 'Aportar proteina muy por encima de lo recomendado', 'No reevaluar al pasar de fase aguda a tardia', 'Ausencia de calorimetria indirecta y confianza excesiva en las formulas', 'Interrupciones repetidas que hacen que el paciente reciba mucho menos de lo prescrito', 'No ajustar en la lesion renal aguda'],
      clinica: 'La sobrealimentacion no da un cuadro clinico propio: se detecta por sus consecuencias analiticas y respiratorias, es decir hiperglucemia, hipertrigliceridemia, alteracion hepatica y dificultad para destetar de la ventilacion por exceso de produccion de carbonico.',
      criterios_dx: 'No aplica: es una decision de dosis. Las referencias orientativas y los ajustes se detallan en la Figura 3 de Definicion y en la calculadora del tema.',
      laboratorio: 'Glucemia, trigliceridos, funcion hepatica, urea y ionograma. Su alteracion suele ser la primera se&#241;al de que el aporte es excesivo.',
      imagen: 'No aplica de forma directa. La ecografia de masa muscular ayuda a seguir el efecto del soporte a lo largo del tiempo.',
      complementarios: 'CALORIMETRIA INDIRECTA cuando este disponible, que mide el gasto energetico en lugar de estimarlo. Es lo ideal y esta disponible en muy pocos sitios, de modo que en la practica se usan formulas por peso.',
      dx_diferencial: 'De la hiperglucemia en el paciente critico: sobrealimentacion, estres, corticoides, diabetes previa o pancreatitis. De la dificultad para destetar: causas respiratorias, debilidad adquirida, sobrecarga de volumen y exceso de aporte calorico.',
      tx_medico: 'Ajustar el aporte a la fase, usar el peso correcto y descontar las calorias no nutricionales. Revisar la pauta al pasar de la fase aguda a la tardia, momento en el que se progresa hacia el objetivo.',
      tx_farmacologico: 'Insulina para el control glucemico. Y, si el propofol aporta muchas calorias, valorar alternativas de sedacion o ajustar el resto del aporte en consecuencia.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica por si misma.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Comparar lo prescrito con lo REALMENTE recibido, que suele diferir mucho por las interrupciones. Y reevaluar la pauta cada vez que cambie la situacion clinica.',
      seguimiento_ambulatorio: 'Ajuste del aporte a las necesidades de la recuperacion, que son mayores que las de la fase aguda porque hay que reconstruir masa muscular.',
      pronostico: 'El aporte adecuado no cambia por si solo el desenlace de la enfermedad critica, pero el aporte excesivo si empeora variables concretas y es evitable.',
      algoritmo: ['Elegir el PESO correcto: ideal o ajustado si hay obesidad', 'No usar el peso de la bascula si hay edemas o ascitis', 'Estimar el objetivo calorico como referencia, no como meta inmediata', 'Descontar las calorias del propofol y de los sueros', 'En la fase aguda, aportar por debajo del objetivo y progresar despacio', 'Fijar el aporte proteico en torno a la referencia, sin excederse', 'Vigilar glucemia, trigliceridos y funcion hepatica', 'Reevaluar al pasar a la fase tardia', 'Comparar lo recibido con lo prescrito', 'Usar calorimetria indirecta si esta disponible']
    },
    {
      nombre: 'Sindrome de realimentacion',
      color: '#8c3a5c',
      definicion: 'Conjunto de alteraciones metabolicas, sobre todo la hipofosfatemia, que aparecen al reintroducir la alimentacion en un paciente con ayuno prolongado o desnutricion.',
      fisiopatologia: 'Durante el ayuno el organismo cambia a un metabolismo basado en grasa y proteina, la secrecion de insulina cae y las reservas INTRACELULARES de fosforo, potasio y magnesio se agotan, aunque las cifras plasmaticas puedan mantenerse normales porque la celula libera iones hacia la sangre. Al reintroducir hidratos de carbono se dispara la insulina, que empuja glucosa y con ella fosforo, potasio y magnesio hacia el interior de la celula, y ademas produce retencion de sodio y agua. El resultado es un descenso brusco de esos iones en plasma. La HIPOFOSFATEMIA es la protagonista porque sin fosforo no se genera ATP ni 2,3-difosfoglicerato, lo que compromete a la vez la contraccion muscular, la funcion cardiaca y la entrega de oxigeno a los tejidos. A eso se suma que el aumento del metabolismo consume TIAMINA, cuya carencia produce encefalopatia de Wernicke y una forma de insuficiencia cardiaca.',
      epidemiologia: 'Su incidencia real es dificil de precisar porque la definicion ha variado, pero es claramente mas frecuente de lo que se diagnostica. Y es, por su propia naturaleza, IATROGENICO: no lo causa la enfermedad sino el tratamiento, lo que significa que es enteramente prevenible.',
      factores_riesgo: ['Indice de masa corporal muy bajo', 'Perdida de peso no intencionada importante en los ultimos meses', 'Ingesta escasa o nula durante mas de 5 a 10 dias', 'Fosforo, potasio o magnesio bajos ANTES de alimentar', 'Consumo excesivo de alcohol', 'Anorexia nerviosa', 'Cirugia bariatrica previa', 'Enfermedad oncologica avanzada', 'Tratamiento con diureticos, insulina, quimioterapia o antiacidos', 'Edad avanzada', 'Vomitos prolongados o malabsorcion', 'Huelga de hambre o situaciones de privacion'],
      clinica: 'Aparece en los primeros dias tras iniciar el aporte. Debilidad muscular y respiratoria, insuficiencia cardiaca, edemas, arritmias, rabdomiolisis, hemolisis, parestesias, convulsiones, confusion y, en los casos graves, muerte subita. La confusion obliga a pensar tambien en el deficit de TIAMINA.',
      criterios_dx: 'Descenso significativo del fosforo, del potasio o del magnesio en los primeros dias tras iniciar el soporte, con o sin manifestaciones clinicas. Ver la Figura 2 de Definicion.',
      laboratorio: 'FOSFORO, POTASIO y MAGNESIO antes de empezar y despues a diario durante los primeros dias, con mas frecuencia si el riesgo es alto. Ademas glucemia, sodio, calcio y funcion renal.',
      imagen: 'No aplica. Electrocardiograma si hay alteraciones ionicas relevantes.',
      complementarios: 'Monitorizacion electrocardiografica en el paciente de alto riesgo durante los primeros dias, y control del balance hidrico por la retencion de sodio y agua que produce la insulina.',
      dx_diferencial: 'De la hipofosfatemia: alcalosis respiratoria, cetoacidosis en tratamiento, hiperparatiroidismo, farmacos quelantes y perdidas renales. Del cuadro completo: sepsis, insuficiencia cardiaca de otra causa y encefalopatia de Wernicke aislada.',
      tx_medico: 'PREVENIRLO, que es la unica estrategia que funciona de verdad. Identificar al paciente de riesgo ANTES de pautar la primera bolsa, empezar con pocas calorias y subir despacio a lo largo de varios dias, y reponer los iones antes y durante. Un ensayo mostro que ante la aparicion de hipofosfatemia conviene REDUCIR temporalmente el aporte calorico en lugar de mantenerlo.',
      tx_farmacologico: 'TIAMINA a dosis altas ANTES de administrar cualquier glucosa, y mantenida varios dias. Reposicion de fosforo, potasio y magnesio por via oral o intravenosa segun la gravedad. Suplemento de vitaminas y oligoelementos.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Hipofosfatemia grave con repercusion cardiaca o respiratoria, arritmias, y necesidad de reposicion intravenosa rapida con monitorizacion.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Analitica diaria durante los primeros dias, con las tres lineas que importan bien visibles. Y progresion del aporte solo si los iones se mantienen estables tras la reposicion.',
      seguimiento_ambulatorio: 'Continuar la reposicion y la progresion del aporte de forma gradual, con controles analiticos, en el paciente que sale del hospital todavia en fase de recuperacion nutricional.',
      pronostico: 'Excelente si se previene y se detecta pronto. Grave y potencialmente mortal si se pasa por alto, y siempre con la circunstancia de que era evitable.',
      algoritmo: ['Identificar al paciente de riesgo ANTES de pautar nada', 'Mirar fosforo, potasio y magnesio antes de empezar', 'Administrar TIAMINA antes de cualquier glucosa', 'Reponer los iones bajos antes y durante', 'Empezar con pocas calorias, en torno a 10 kcal/kg al dia', 'Subir despacio a lo largo de 4 a 7 dias', 'Controlar los tres iones a diario los primeros dias', 'Monitorizar el electrocardiograma si el riesgo es alto', 'Si aparece hipofosfatemia, reducir el aporte y reponer', 'No retrasar el inicio de la nutricion, pero tampoco acelerarlo']
    },
    {
      nombre: 'Complicaciones y problemas practicos',
      color: '#6b4a8c',
      definicion: 'Conjunto de problemas cotidianos del soporte nutricional que determinan que el paciente reciba de verdad lo que se le ha prescrito.',
      fisiopatologia: 'La aspiracion se produce cuando el contenido gastrico alcanza la via aerea, algo que favorecen el decubito, el bajo nivel de conciencia, la sonda que mantiene el esfinter entreabierto y la gastroparesia. La diarrea asociada a la nutricion casi nunca se debe a la formula: la causan con mucha mas frecuencia los farmacos que contienen sorbitol, los antibioticos, la infeccion por Clostridioides difficile y la impactacion fecal, que produce diarrea por rebosamiento y se confunde con lo contrario de lo que es. Y la debilidad adquirida en el paciente critico, que reduce la fuerza de la musculatura respiratoria, se relaciona con la inmovilidad y la inflamacion, no solo con el aporte.',
      epidemiologia: 'La brecha entre lo prescrito y lo recibido es grande y sistematica: las interrupciones por pruebas, traslados, cuidados y procedimientos hacen que muchos pacientes reciban bastante menos de lo pautado, y esa perdida es en buena parte organizativa y por tanto corregible.',
      factores_riesgo: ['Cabecero no elevado', 'Bajo nivel de conciencia y sedacion profunda', 'Gastroparesia y opioides', 'Antibioticos de amplio espectro', 'Farmacos con sorbitol administrados por sonda', 'Impactacion fecal no detectada', 'Interrupciones repetidas por pruebas y traslados', 'Sonda mal posicionada o desplazada', 'Cateter central en la nutricion parenteral', 'Hiperglucemia mal controlada'],
      clinica: 'Aspiracion y neumonia asociada, distension y vomitos, DIARREA, estre&#241;imiento e impactacion, hiperglucemia, alteraciones ionicas, complicaciones mecanicas de la sonda e infeccion del cateter en la via parenteral.',
      criterios_dx: 'Clinicos y analiticos, segun la complicacion. Lo importante es buscarlas de forma activa, porque casi todas son silentes hasta que se manifiestan de golpe.',
      laboratorio: 'Glucemia, ionograma con fosforo y magnesio, funcion hepatica y renal. Coprocultivo y toxina de Clostridioides difficile ante diarrea con antibioticos previos.',
      imagen: 'Radiografia de torax ante sospecha de aspiracion. Radiografia de abdomen si se sospecha impactacion fecal o ileo. Control de la posicion de la sonda cuando haya dudas.',
      complementarios: 'ELEVACION DEL CABECERO entre 30 y 45 grados, que es la medida mas eficaz contra la aspiracion y la que mas se relaja. Valoracion de la deglucion antes de reiniciar la via oral. Y un recuento de las interrupciones acumuladas.',
      dx_diferencial: 'De la diarrea: farmacos, antibioticos, Clostridioides difficile, impactacion con rebosamiento, malabsorcion e infeccion. Culpar a la formula debe ser lo ULTIMO, no lo primero.',
      tx_medico: 'Elevar el cabecero. Revisar la lista de farmacos administrados por la sonda buscando sorbitol. Tratar el estre&#241;imiento de forma pautada. Descartar impactacion con un tacto rectal, que es una exploracion sencilla y muy rentable. Y reducir las interrupciones evitables.',
      tx_farmacologico: 'Procineticos en la intolerancia gastrica. Laxantes pautados. Tratamiento especifico si se confirma Clostridioides difficile. Insulina para el control glucemico.',
      tx_intervencionista: 'Sonda pospilorica en la intolerancia persistente. Gastrostomia si el soporte se prolonga. Retirada del cateter si se confirma infeccion asociada.',
      criterios_uci: 'Broncoaspiracion masiva, sepsis de origen en el cateter y alteraciones metabolicas graves.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Revision diaria de la tolerancia, del ritmo intestinal y de la diferencia entre lo prescrito y lo recibido. Y una comprobacion sencilla que rinde mucho: si el cabecero esta realmente elevado.',
      seguimiento_ambulatorio: 'Formacion del paciente y del cuidador si el soporte continua en domicilio, con instrucciones escritas sobre la sonda, la postura y el manejo de las complicaciones.',
      pronostico: 'La mayoria de estas complicaciones son prevenibles con medidas sencillas y baratas. Su importancia no esta en la gravedad de cada una sino en su frecuencia.',
      algoritmo: ['Comprobar que el cabecero esta elevado de verdad', 'Confirmar la posicion de la sonda antes de usarla', 'Ante diarrea, revisar farmacos con sorbitol y antibioticos', 'Descartar Clostridioides difficile', 'Hacer tacto rectal para descartar impactacion', 'No culpar a la formula hasta haber descartado lo anterior', 'Tratar el estre&#241;imiento de forma pautada', 'Controlar la glucemia sin suspender la nutricion', 'Contar las interrupciones y reducir las evitables', 'Valorar la deglucion antes de reiniciar la via oral']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El soporte nutricional es un tratamiento, con indicacion, dosis y efectos adversos. Los dos errores que mas cuestan son opuestos: no alimentar a quien lo necesita, y alimentar demasiado deprisa a quien lleva mucho tiempo sin comer.',
    parametros: ['Hacer cribado nutricional al ingreso', 'Explorar la masa muscular, que la bascula esconde', 'No usar la albumina como marcador nutricional', 'Revisar los ayunos por pruebas que se van cancelando', 'Si el intestino funciona, usarlo', 'No esperar a los ruidos intestinales para iniciar', 'No medir el residuo gastrico de rutina', 'Elevar el cabecero entre 30 y 45 grados', 'Mirar FOSFORO, POTASIO y MAGNESIO antes de alimentar', 'Dar TIAMINA antes que glucosa en el paciente de riesgo', 'Contar las calorias del propofol y de los sueros', 'Comparar lo recibido con lo prescrito'],
    criterios_uci_general: 'Hipofosfatemia grave con repercusion cardiaca o respiratoria durante la realimentacion, arritmias por alteraciones ionicas, broncoaspiracion masiva, sepsis de origen en el cateter de nutricion parenteral y alteraciones metabolicas graves que requieren monitorizacion continua.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'La nutricion parenteral domiciliaria de larga duracion por fallo intestinal es una de las indicaciones de trasplante intestinal, en centros muy seleccionados. Y la desnutricion grave empeora los resultados de cualquier trasplante de organo solido, por lo que se valora y se corrige antes.',
    prevencion: 'Primaria: cribado nutricional universal al ingreso, revision sistematica de los ayunos por pruebas, adaptacion de la textura si hay disfagia y garantizar que alguien ayuda a comer al paciente que no puede hacerlo solo. Secundaria: identificar el riesgo de sindrome de realimentacion ANTES de pautar la primera bolsa, mirando el indice de masa corporal, los dias sin comer y las cifras de fosforo, potasio y magnesio; administrar tiamina antes que glucosa; y empezar despacio. Terciaria: prevencion de las complicaciones cotidianas del soporte, que son las que mas se repiten (cabecero elevado, posicion de la sonda comprobada, manejo activo del estre&#241;imiento, control glucemico sin suspender la nutricion, y revision diaria de si el cateter central sigue haciendo falta), y plan nutricional al alta para quien ha pasado semanas comiendo mal.'
  }
};

export const compCites = {
  'Desnutricion hospitalaria: detectarla': [1, 5],
  'Nutricion enteral': [2, 3, 16, 15],
  'Nutricion parenteral': [4, 9, 10, 11],
  'Cuanta energia y cuanta proteina': [12, 13, 14, 2],
  'Sindrome de realimentacion': [5, 6, 7, 8],
  'Complicaciones y problemas practicos': [3, 15]
};
export const estigmasTitulo = 'Datos y gestos que cambian el resultado';
export const estigmas = [
  { s: 'Temporales y interoseos hundidos', p: 'Perdida de masa muscular', photo: null, desc: 'Se ve en segundos y no cuesta nada. Es criterio diagnostico por si mismo y detecta lo que la bascula esconde en el paciente con edemas, que puede haber perdido mucho musculo sin perder peso.' },
  { s: 'Albumina baja', p: 'No mide nutricion', photo: null, desc: 'Cae por la respuesta inflamatoria y por la fuga capilar, con independencia de lo que coma el paciente. Es un marcador de gravedad, no de estado nutricional, y usarla como tal lleva a conclusiones equivocadas.' },
  { s: 'Fosforo bajo antes de alimentar', p: 'Alto riesgo de realimentacion', photo: null, desc: 'Basta por si solo para clasificar al paciente como de alto riesgo. Es el criterio que mas se pasa por alto porque se pide la analitica y nadie mira esa linea antes de pautar la primera bolsa.' },
  { s: 'Iones normales tras un ayuno largo', p: 'No tranquilizan', photo: null, desc: 'Lo que se ha vaciado durante el ayuno es el interior de la celula, y la celula libera iones hacia la sangre para mantener las cifras. Por eso un fosforo normal antes de empezar no descarta el riesgo.' },
  { s: 'Glucosa antes que tiamina', p: 'El error que causa Wernicke', photo: null, desc: 'El aumento del metabolismo consume tiamina, y darla despues de la glucosa puede precipitar una encefalopatia de Wernicke en un paciente ya deplecionado. La tiamina va primero, siempre.' },
  { s: 'Ausencia de ruidos intestinales', p: 'No contraindica nutrir', photo: null, desc: 'Es uno de los mitos mas persistentes. Esperar a que aparezcan retrasa la nutricion enteral sin ningun fundamento. Las contraindicaciones reales son pocas: obstruccion, isquemia, perforacion, choque no controlado y hemorragia activa.' },
  { s: 'Residuo gastrico medido de rutina', p: 'Ya no se hace', photo: null, desc: 'Interrumpe la nutricion sin mejorar los resultados. Un ensayo aleatorizado mostro que no monitorizarlo no aumentaba la neumonia asociada a ventilacion, y desde entonces ha dejado de recomendarse como practica rutinaria.' },
  { s: 'Cabecero bajado', p: 'Lo que mas se relaja', photo: null, desc: 'La elevacion entre 30 y 45 grados es la medida mas eficaz contra la aspiracion, es gratis y es la que mas se pierde a lo largo del turno. Comprobarlo de verdad rinde mas que muchas prescripciones.' },
  { s: 'Diarrea con nutricion enteral', p: 'Casi nunca es la formula', photo: null, desc: 'Hay que buscar antes los farmacos con sorbitol administrados por la sonda, los antibioticos, la infeccion por Clostridioides difficile y la impactacion fecal con rebosamiento. Culpar a la formula debe ser lo ultimo.' },
  { s: 'Peso real en el paciente obeso', p: 'Sobreestima el aporte', photo: null, desc: 'Calcular con el peso de la bascula en la obesidad da un objetivo calorico groseramente excesivo. Se usa el peso ideal o el ajustado, y es un detalle aritmetico que cambia la pauta de forma sustancial.' },
  { s: 'Propofol y sueros glucosados', p: 'Calorias que nadie cuenta', photo: null, desc: 'Pueden suponer una parte importante del aporte diario. No descontarlas es una causa frecuente de sobrealimentacion en un paciente cuya pauta parecia calculada con cuidado.' },
  { s: 'Lo prescrito frente a lo recibido', p: 'La brecha silenciosa', photo: null, desc: 'Las interrupciones por pruebas, traslados y cuidados hacen que muchos pacientes reciban bastante menos de lo pautado. Es una perdida en buena parte organizativa, y por tanto corregible si alguien la mide.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Riesgo de sindrome de realimentacion (calculadora disponible)': [5, 6],
  'Requerimientos de energia y proteina (calculadora disponible)': [2, 13],
  'Eleccion de la via de nutricion (calculadora disponible)': [2, 9],
  'Criterios GLIM de desnutricion': [1],
  'Fase aguda frente a fase tardia': [2, 14],
  'Valoracion de la disfagia': [3]
};
export const escalaCalc = {
  'Riesgo de sindrome de realimentacion (calculadora disponible)': 'riesgo-realimentacion',
  'Requerimientos de energia y proteina (calculadora disponible)': 'requerimientos-nutricion',
  'Eleccion de la via de nutricion (calculadora disponible)': 'via-nutricion'
};
export const compGroups = [
  { name: 'Detectar', items: ['Desnutricion hospitalaria: detectarla'] },
  { name: 'Por que via', items: ['Nutricion enteral', 'Nutricion parenteral'] },
  { name: 'Cuanto y con que cuidado', items: ['Cuanta energia y cuanta proteina', 'Sindrome de realimentacion'] },
  { name: 'El dia a dia', items: ['Complicaciones y problemas practicos'] }
];
export const complicacionesIntro = 'La primera ficha es la deteccion, que es donde empieza todo y donde mas se falla, porque el cribado al ingreso deberia ser universal y es la excepcion. Las dos siguientes son las vias, con una regla que casi siempre se cumple y varias practicas que han dejado de recomendarse. Las dos siguientes son las dos caras de la dosis: cuanto dar, donde el error habitual es dar de mas en la fase aguda, y el sindrome de realimentacion, donde el error es dar demasiado deprisa a quien lleva mucho tiempo sin comer. Y la ultima es el dia a dia, que es lo que decide si el paciente recibe de verdad lo que se le ha prescrito.';
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
      { title: 'Mirar el musculo', sub: 'Temporales e interoseos', color: '#7a6b2e', target: 'diagnostico' },
      { title: 'La albumina no vale', sub: 'Mide inflamacion', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Revisar los ayunos', sub: 'Pruebas que se cancelan', color: '#6b4a8c', target: 'complicaciones' },
      { title: 'Buscar disfagia', sub: 'La aspiracion silente', color: '#3d5a73', target: 'clasificacion' }
    ] },
    { title: 'POR QUE VIA', sub: 'Si funciona, se usa', color: '#3f6b52', target: 'clasificacion', leaves: [
      { title: 'Oral primero', sub: 'Y comprobar lo obvio', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Enteral precoz', sub: 'En 24 a 48 horas', color: '#7a6b2e', target: 'complicaciones' },
      { title: 'Sin esperar ruidos', sub: 'Nunca fue un requisito', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Parenteral, sin prisa', sub: 'Muy precoz empeora', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'CUANTO Y COMO', sub: 'Mas no es mejor', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Peso correcto', sub: 'Ideal si hay obesidad', color: '#3d5a73', target: 'clasificacion' },
      { title: 'Contar el propofol', sub: 'Calorias que nadie cuenta', color: '#6b4a8c', target: 'complicaciones' },
      { title: 'Fosforo antes de empezar', sub: 'El dato que mas se olvida', color: '#8c3a5c', target: 'complicaciones' },
      { title: 'Tiamina antes que glucosa', sub: 'Siempre en ese orden', color: '#8c3a34', target: 'seguimiento' }
    ] }
  ]
};
export const diagCites = { laboratorio: [5, 6, 1], no_invasivos: [1, 5, 2], imagen: [3, 1] };
export const clasificacionCite = [1, 2, 5];
export const seguimientoCite = [2, 5, 6];
