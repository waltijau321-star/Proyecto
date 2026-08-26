// topics/valoracion-preoperatoria/study.js
// Autoevaluación del tema de Valoración Preoperatoria.
//
// Las preguntas siguen .claude/skills/reglas-preguntas/SKILL.md: las 4 opciones de cada
// pregunta son de la misma categoría lógica y de longitud comparable, los distractores son
// errores conceptuales frecuentes (no absurdos), y la posición de `correct` se repartió a
// propósito sin patrón: 2,0,3,1,0,2,1,3,2,0,3,1,3,0,2,1,0,3,2,1 (cinco de cada índice).

export const quiz = [
  {
    q: 'Un hombre de 64 años tiene programada una plastía inguinal electiva. Hace 4 meses recibió un stent farmacoactivo durante un infarto sin elevación del ST y toma aspirina y clopidogrel. El cirujano pide suspender ambos antiagregantes. ¿Cuál es la conducta más apropiada?',
    options: [
      'Operar ahora, suspendiendo el clopidogrel 5 días antes y manteniendo la aspirina',
      'Operar ahora, manteniendo la doble antiagregación completa durante el perioperatorio',
      'Diferir la cirugía hasta completar 12 meses desde la intervención coronaria',
      'Diferir la cirugía dos semanas y operar después con puente de heparina de bajo peso molecular'
    ],
    correct: 2,
    explanation: 'El dato que decide no es el riesgo quirúrgico sino la indicación y la antigüedad del stent. Un stent farmacoactivo colocado por un síndrome coronario agudo obliga a diferir la cirugía electiva idealmente 12 meses o más cuando hay que interrumpir uno o más antiagregantes (recomendación clase 1). Los 6 meses aplican al stent colocado por enfermedad coronaria crónica, que no es este caso. Operar ahora con el clopidogrel suspendido expone a trombosis del stent, que tiene mortalidad alta. Mantener la doble antiagregación completa es la conducta correcta solo cuando la cirugía es sensible al tiempo y no puede esperar, no en una plastía electiva. El puente con heparina no protege frente a la trombosis del stent, que es un fenómeno plaquetario y no de la cascada de coagulación: por eso no se recomienda de rutina.'
  },
  {
    q: 'Una mujer de 70 años con fibrilación auricular no valvular en tratamiento con warfarina tiene programada una colecistectomía laparoscópica electiva. Su CHA₂DS₂-VASc es de 4 puntos y su función renal es normal. ¿Cuál es el manejo perioperatorio más apropiado del anticoagulante?',
    options: [
      'Suspender la warfarina 5 días antes y operar sin puente con heparina',
      'Suspender la warfarina 5 días antes e iniciar puente con heparina de bajo peso molecular',
      'Continuar la warfarina y operar con el INR dentro del rango terapéutico',
      'Suspender la warfarina 2 días antes y administrar vitamina K intravenosa'
    ],
    correct: 0,
    explanation: 'En fibrilación auricular la recomendación en contra del puente con heparina es fuerte y con certeza moderada, sustentada en el ensayo BRIDGE: el puente sistemático multiplica el sangrado mayor sin reducir los eventos tromboembólicos. Un CHA₂DS₂-VASc de 4 no cambia esa recomendación; el puente queda reservado a situaciones de riesgo trombótico excepcional, individualizadas. La warfarina se suspende al menos 5 días antes y se reinicia 12 a 24 horas después con hemostasia adecuada. Continuarla con INR terapéutico expone a sangrado quirúrgico innecesario en un procedimiento que sí lo requiere suspendido. La vitamina K intravenosa no es la estrategia programada de un procedimiento electivo: se reserva para revertir con urgencia, y suspender solo 2 días deja un INR todavía elevado.'
  },
  {
    q: 'Un hombre de 58 años con diabetes tipo 2 y obesidad acude a valoración preoperatoria para una colecistectomía electiva. Entre sus fármacos refiere una inyección semanal de semaglutida. ¿Cuál es la conducta más apropiada con ese fármaco?',
    options: [
      'Omitir la dosis el mismo día del procedimiento',
      'Continuar el fármaco y prolongar el ayuno preoperatorio a 12 horas',
      'Suspenderlo 3 a 4 días antes del procedimiento',
      'Suspenderlo una semana antes del procedimiento'
    ],
    correct: 3,
    explanation: 'Los agonistas del receptor de GLP-1 retrasan el vaciamiento gástrico y aumentan el riesgo de regurgitación y broncoaspiración durante la anestesia general o la sedación profunda. La guía de la ASA de 2023 separa la conducta según el intervalo de dosificación: en presentación diaria se omite la dosis del día del procedimiento, y en presentación semanal se suspende una semana antes. Esto aplica sin importar si la indicación es diabetes o pérdida de peso. Omitir solo la dosis del día sería correcto si el fármaco fuera diario, no semanal. Los 3 a 4 días corresponden a los inhibidores de SGLT2, que es un problema distinto (cetoacidosis euglucémica, no vaciamiento gástrico). Prolongar el ayuno no tiene respaldo: no hay evidencia sobre el ayuno óptimo en estos pacientes y se siguen las guías habituales.'
  },
  {
    q: 'Un hombre de 62 años con diabetes tipo 2 cursa el segundo día tras una hemicolectomía. Presenta náusea y respiración profunda. Los gases muestran pH 7.24 y bicarbonato de 14 mEq/L, con glucemia de 185 mg/dL y lactato normal. Toma metformina, empagliflozina y enalapril, que no suspendió antes de la cirugía. ¿Cuál es el diagnóstico más probable?',
    options: [
      'Acidosis láctica asociada a metformina',
      'Cetoacidosis diabética euglucémica por el inhibidor de SGLT2',
      'Acidosis tubular renal de aparición posoperatoria',
      'Acidosis hiperclorémica por reanimación con solución salina'
    ],
    correct: 1,
    explanation: 'La combinación de acidosis metabólica con anión gap elevado, glucemia que no alarma y antecedente de inhibidor de SGLT2 no suspendido define la cetoacidosis diabética euglucémica, que se define como glucosa menor de 250 mg/dL con pH menor de 7.3, bicarbonato bajo y cetonas elevadas en suero y orina. Es una complicación que se pasa por alto precisamente porque la glucemia es normal o casi normal, y por eso la guía de 2024 recomienda suspender estos fármacos de 3 a 4 días antes de la cirugía. La acidosis láctica por metformina queda descartada por el lactato normal, y además los datos recientes no sostienen esa asociación clásica. La acidosis tubular renal cursa con anión gap normal y no aparece de forma aguda en este contexto. La acidosis hiperclorémica por salina también cursa con anión gap normal y no explica la cetosis.'
  },
  {
    q: 'Un hombre de 68 años con hipertensión y diabetes en tratamiento con insulina será operado mañana de una resección intestinal. Su índice de Lee es de 2 puntos y no toma betabloqueador. Un colega sugiere iniciar metoprolol para reducir el riesgo cardiovascular. ¿Cuál es la conducta más apropiada?',
    options: [
      'No iniciar el betabloqueador; continuar su tratamiento habitual y vigilar en el perioperatorio',
      'Iniciar metoprolol la mañana de la cirugía para reducir el riesgo de infarto perioperatorio',
      'Iniciar metoprolol esa misma noche y mantenerlo durante todo el posoperatorio',
      'Iniciar metoprolol y diferir la cirugía 48 horas para poder titular la dosis'
    ],
    correct: 0,
    explanation: 'Iniciar un betabloqueador el día de la cirugía es potencialmente dañino y está catalogado como recomendación clase 3 por daño: aumenta la mortalidad posoperatoria. El beneficio isquémico del betabloqueo perioperatorio queda compensado por exceso de ictus y de muerte, y por eso la práctica de betabloquear a todo paciente de riesgo quedó desacreditada. Si existiera una indicación crónica nueva, el fármaco debería iniciarse idealmente más de 7 días antes para poder evaluar tolerancia y titular la dosis, no la víspera ni la mañana de la cirugía. Diferir 48 horas tampoco alcanza esa ventana y añade el costo de retrasar una cirugía. Lo que sí está indicado es continuar el betabloqueador en quien ya lo tomaba de forma estable, que no es el caso de este paciente.'
  },
  {
    q: 'Una mujer de 66 años con cardiopatía isquémica, insuficiencia cardiaca compensada y creatinina de 2.3 mg/dL será sometida a una cirugía vascular suprainguinal programada. Refiere que sube dos pisos de escaleras hasta su departamento sin detenerse ni presentar síntomas. ¿Cuál es el siguiente paso más apropiado?',
    options: [
      'Solicitar un ecocardiograma transtorácico antes de programar la cirugía',
      'Solicitar una prueba de estrés farmacológica para completar la estratificación',
      'Proceder a la cirugía sin estudios cardiacos adicionales',
      'Solicitar NT-proBNP y decidir la fecha quirúrgica según el resultado'
    ],
    correct: 2,
    explanation: 'La paciente tiene un riesgo calculado elevado, pero conserva la capacidad funcional: subir dos pisos de escaleras equivale a más de 4 MET, que es el umbral de la guía. En la ruta perioperatoria, una capacidad funcional conservada permite proceder aunque el riesgo calculado sea elevado, sin estudios cardiacos adicionales. La pregunta que filtra cualquier estudio es si su resultado cambiaría el manejo, y aquí no lo haría. El ecocardiograma no está indicado en un paciente sin síntomas ni signos de descompensación. La prueba de estrés de rutina en el paciente estable no ha demostrado mejorar los desenlaces clínicos. Los biomarcadores son razonables en pacientes de riesgo elevado, pero condicionar la fecha quirúrgica a un NT-proBNP en alguien con buena capacidad funcional retrasa la cirugía sin beneficio demostrado.'
  },
  {
    q: 'Un hombre de 75 años con fibrilación auricular toma dabigatrán. Su aclaramiento de creatinina es de 40 mL/min y tiene programada una resección hepática, de riesgo hemorrágico alto. ¿Con cuánta anticipación debe suspenderse el anticoagulante?',
    options: [
      '2 días antes de la cirugía',
      '4 días antes de la cirugía',
      '1 día antes de la cirugía',
      '3 días antes de la cirugía'
    ],
    correct: 1,
    explanation: 'El dabigatrán es el único anticoagulante oral directo cuyo intervalo de suspensión depende de la función renal, porque su eliminación es predominantemente renal. La tabla del protocolo PAUSE, recogida en la guía de CHEST de 2022, establece 1 día si el riesgo hemorrágico es bajo o moderado con aclaramiento de 50 mL/min o más, 2 días si es bajo o moderado con aclaramiento menor de 50, 2 días si es alto con aclaramiento de 50 o más, y 4 días si es alto con aclaramiento menor de 50. Este paciente combina las dos condiciones desfavorables, así que le corresponden 4 días. Los 2 días serían correctos con función renal conservada, y 1 día corresponde al escenario de menor riesgo. Ningún otro anticoagulante oral directo exige más de 2 días: apixabán, rivaroxabán y edoxabán usan 1 o 2 días según el riesgo hemorrágico, sin ajuste renal.'
  },
  {
    q: 'Una mujer de 54 años con artritis reumatoide toma prednisona de 30 mg al día desde hace 6 meses. Requiere una artroplastia total de rodilla. ¿Cuál es la conducta más apropiada con el corticoide?',
    options: [
      'Suspender la prednisona 24 horas antes para reducir el riesgo de infección de la herida',
      'Continuar la dosis habitual sin ningún suplemento adicional en el perioperatorio',
      'Duplicar la dosis oral habitual durante toda la semana previa a la cirugía',
      'Continuar la dosis habitual y añadir hidrocortisona en dosis de estrés'
    ],
    correct: 3,
    explanation: 'Una dosis superior a 20 mg diarios de prednisona durante más de 3 semanas hace probable la supresión del eje hipotálamo-hipófisis-suprarrenal, de modo que el paciente no puede montar la respuesta de cortisol que exige el estrés quirúrgico. La conducta es continuar la dosis habitual y añadir hidrocortisona en dosis de estrés ajustada a la magnitud de la cirugía, con descenso en 1 a 2 días hasta la dosis basal. Suspender el corticoide es el error más peligroso: precipita una crisis suprarrenal con hipotensión refractaria a volumen y a vasopresores. Continuar solo la dosis habitual sería adecuado si el eje estuviera íntegro, es decir con menos de 5 mg diarios o con cualquier dosis por menos de 3 semanas, que no es este caso. Duplicar la dosis oral durante toda la semana previa expone a hiperglucemia y mala cicatrización sin cubrir el pico de estrés del día quirúrgico.'
  },
  {
    q: 'Un hombre de 74 años, exfumador, con saturación de 92% en aire ambiente y un episodio de bronquitis hace tres semanas, será sometido a una gastrectomía subtotal con duración estimada de 4 horas. ¿Cuál escala estima el riesgo que domina en este paciente?',
    options: [
      'Índice de Lee',
      'Caprini',
      'ARISCAT',
      'Gupta-MICA'
    ],
    correct: 2,
    explanation: 'Todos los datos que destacan en este paciente son predictores pulmonares: edad avanzada, saturación entre 91 y 95%, infección respiratoria en el último mes, incisión abdominal alta y duración mayor de 3 horas. Esos son exactamente los componentes de ARISCAT, que estima el riesgo de complicación pulmonar posoperatoria y estratifica en bajo, intermedio y alto con puntos de corte de 26 y 45. Las complicaciones pulmonares posoperatorias son al menos tan frecuentes como las cardiacas y se subestiman de forma sistemática. El índice de Lee y Gupta-MICA estiman riesgo cardiaco y no incorporan saturación, infección respiratoria ni duración de la cirugía. Caprini estima riesgo de enfermedad tromboembólica venosa, que también conviene calcular en este paciente, pero no es el riesgo que dominan sus hallazgos.'
  },
  {
    q: 'Un hombre de 60 años sin enfermedad cardiovascular conocida toma aspirina de 100 mg al día por iniciativa propia, sin que se la haya prescrito ningún médico. Tiene programada una artroscopia de rodilla electiva. ¿Cuál es la conducta más apropiada?',
    options: [
      'Suspender la aspirina 7 días antes de la cirugía',
      'Continuar la aspirina durante todo el periodo perioperatorio',
      'Sustituir la aspirina por clopidogrel durante las dos semanas previas',
      'Suspender la aspirina el mismo día de la cirugía y reiniciarla al día siguiente'
    ],
    correct: 0,
    explanation: 'La recomendación de continuar la aspirina en el perioperatorio aplica al paciente con intervención coronaria percutánea previa, en quien suspenderla expone a trombosis del stent. Este paciente no tiene enfermedad coronaria conocida ni antecedente de intervención: está en prevención primaria, escenario en el que la aspirina aporta poco y sí añade sangrado quirúrgico. La conducta es suspenderla 7 días antes, tiempo que permite la recuperación de la función plaquetaria. Continuarla implicaría aceptar más sangrado sin el beneficio que justifica ese riesgo. Sustituirla por clopidogrel empeora el problema, ya que su efecto antiplaquetario es más prolongado. Suspenderla el mismo día no logra ningún efecto útil, porque la inhibición plaquetaria de la aspirina es irreversible y persiste durante la vida de la plaqueta.'
  },
  {
    q: 'Una mujer de 63 años con diabetes tipo 2 controlada toma metformina de 850 mg dos veces al día. Tiene programada una histerectomía electiva y su función renal es normal. ¿Cuál es la conducta más apropiada con la metformina?',
    options: [
      'Suspenderla 48 horas antes por el riesgo de acidosis láctica perioperatoria',
      'Suspenderla la mañana de la cirugía y reiniciarla a las 48 horas del posoperatorio',
      'Sustituirla por insulina basal durante toda la semana previa a la cirugía',
      'Continuarla durante el perioperatorio para mantener el control glucémico'
    ],
    correct: 3,
    explanation: 'La guía de 2024 considera razonable continuar la metformina durante el perioperatorio para mantener el control glucémico. La recomendación clásica de suspenderla nacía del temor a precipitar acidosis láctica bajo estrés fisiológico, pero los datos recientes no sostienen esa asociación: una cohorte poblacional de más de 10 000 pacientes no encontró el vínculo que se le atribuía. Sigue siendo prudente suspenderla si se prevé deterioro renal agudo o administración de contraste yodado, situaciones que no aplican a esta paciente con función renal normal. Sustituirla por insulina basal durante la semana previa introduce riesgo de hipoglucemia sin ningún beneficio. Nótese el contraste dentro de la misma clase terapéutica: la metformina se continúa, mientras que los inhibidores de SGLT2 sí se suspenden de 3 a 4 días antes.'
  },
  {
    q: 'Un hombre de 68 años portador de una prótesis valvular aórtica mecánica toma warfarina. Requiere una resección transuretral de próstata, procedimiento de riesgo hemorrágico alto. ¿Cuál es la conducta más apropiada respecto al puente con heparina?',
    options: [
      'Iniciar puente con heparina de bajo peso molecular a dosis terapéutica',
      'Suspender la warfarina sin puente, salvo que el riesgo trombótico resulte excepcional',
      'Continuar la warfarina y operar con el INR entre 2 y 3',
      'Iniciar puente con heparina no fraccionada intravenosa desde 5 días antes'
    ],
    correct: 1,
    explanation: 'La guía de CHEST de 2022 sugiere no puentear también en portadores de válvula mecánica, no solo en fibrilación auricular. Es un cambio importante frente a la enseñanza clásica, que consideraba la prótesis mecánica una indicación automática de puente. El puente queda para casos individualizados de riesgo trombótico verdaderamente excepcional, valorados uno a uno, y no como conducta por defecto. La razón es que el puente sistemático multiplica el sangrado mayor sin reducir los eventos tromboembólicos, y en un procedimiento de riesgo hemorrágico alto como este ese balance empeora. Continuar la warfarina con INR terapéutico no es viable en una resección transuretral. La heparina no fraccionada intravenosa desde 5 días antes obliga a hospitalizar al paciente y concentra el riesgo hemorrágico sin evidencia que lo respalde.'
  },
  {
    q: 'Una mujer de 82 años con deterioro cognitivo leve y dependencia parcial ingresa por fractura de cadera y será operada en las próximas 24 horas. ¿Cuál es la medida más eficaz para prevenir el delirium posoperatorio?',
    options: [
      'Haloperidol profiláctico a dosis baja desde el ingreso hospitalario',
      'Quetiapina nocturna durante toda la estancia hospitalaria',
      'Benzodiacepina nocturna para asegurar un sueño continuo',
      'Paquete no farmacológico multicomponente desde el ingreso'
    ],
    correct: 3,
    explanation: 'Lo único que ha demostrado reducir la incidencia de delirium posoperatorio es la prevención no farmacológica multicomponente: orientación repetida, movilización temprana, hidratación adecuada, control del dolor sin anticolinérgicos, uso de lentes y auxiliar auditivo, y protección del sueño. Esta paciente concentra varios factores predisponentes (edad avanzada, deterioro cognitivo, dependencia funcional) y varios precipitantes (fractura de cadera, cirugía urgente, dolor), y cuanto mayor es la carga predisponente basal, menor es el estímulo que basta para desencadenar el cuadro. Los antipsicóticos, sea haloperidol o quetiapina, no han demostrado utilidad como profilaxis y añaden prolongación del QT y efectos extrapiramidales. Las benzodiacepinas son uno de los precipitantes farmacológicos más reconocidos del delirium, de modo que usarlas con intención preventiva empeora el riesgo que se pretende evitar.'
  },
  {
    q: 'Un hombre de 70 años con antecedente de infarto, insuficiencia cardiaca y enfermedad cerebrovascular acude a urgencias con abdomen agudo y datos de peritonitis por perforación de víscera hueca. El cirujano solicita valoración preoperatoria urgente. ¿Cuál es la conducta más apropiada?',
    options: [
      'Operar sin demora y trasladar la evaluación cardiaca al posoperatorio',
      'Solicitar un ecocardiograma urgente antes de que el paciente entre a quirófano',
      'Solicitar troponina y electrocardiograma seriados antes de autorizar la cirugía',
      'Diferir la cirugía 24 horas para optimizar el tratamiento cardiológico de base'
    ],
    correct: 0,
    explanation: 'La urgencia de la cirugía es el primer filtro de la ruta perioperatoria y el que más decisiones ahorra. En una emergencia quirúrgica el retraso hace más daño que el que evita cualquier estudio, de modo que la evaluación cardiaca se traslada al posoperatorio y lo que corresponde es proceder con vigilancia hemodinámica y electrocardiográfica estrecha. El índice de Lee elevado de este paciente describe su riesgo, pero no cambia la conducta: no existe alternativa a operar una víscera perforada. El ecocardiograma y las troponinas seriadas retrasan una cirugía que no puede esperar y su resultado no modificaría la decisión quirúrgica. Diferir 24 horas para optimizar el tratamiento cardiológico convierte un cuadro quirúrgico en una sepsis abdominal establecida, con mucha mayor mortalidad que la que se pretendía evitar.'
  },
  {
    q: 'Un hombre de 35 años, sano, sin antecedentes ni tratamiento crónico, con exploración física normal, acude a valoración preoperatoria para una plastía inguinal electiva. ¿Qué estudios preoperatorios son los más apropiados?',
    options: [
      'Biometría hemática, química sanguínea, tiempos de coagulación y radiografía de tórax',
      'Biometría hemática, electrocardiograma y radiografía de tórax',
      'Ninguno de rutina; solo los que indiquen la anamnesis y la exploración',
      'Tiempos de coagulación y electrocardiograma, por protocolo institucional'
    ],
    correct: 2,
    explanation: 'En un paciente sano, asintomático y de bajo riesgo sometido a cirugía menor, los estudios preoperatorios de rutina no mejoran los desenlaces: encarecen el proceso, retrasan la cirugía y generan hallazgos incidentales que desencadenan una cascada diagnóstica con riesgo propio. Las iniciativas de uso apropiado de recursos coinciden en desaconsejar el panel completo indiscriminado. Los tiempos de coagulación son especialmente inútiles sin antecedente hemorrágico personal o familiar, ya que su rendimiento como cribado es muy bajo. La radiografía de tórax de rutina rara vez cambia la conducta en un paciente sin síntomas ni factores de riesgo respiratorios. El electrocardiograma tiene indicaciones según edad, comorbilidad y tipo de cirugía, pero no como protocolo automático. La pregunta que filtra cada estudio es siempre la misma: qué se haría distinto si el resultado saliera anormal.'
  },
  {
    q: 'Un hombre de 55 años con obesidad e hipertensión refiere ronquido intenso, somnolencia diurna y apneas presenciadas por su pareja. Su circunferencia de cuello es de 44 cm. Requiere una colecistectomía electiva y su STOP-BANG es de 7 puntos. ¿Cuál es la implicación perioperatoria más relevante de este resultado?',
    options: [
      'Obliga a realizar polisomnografía antes de cualquier cirugía electiva',
      'Debe comunicarse a anestesiología por vía aérea difícil y sensibilidad a opioides',
      'Contraindica la anestesia general y obliga a usar una técnica regional',
      'Obliga a iniciar presión positiva continua antes de la cirugía programada'
    ],
    correct: 1,
    explanation: 'Un STOP-BANG de 5 o más indica riesgo alto de apnea obstructiva del sueño, y lo que cambia el desenlace es que el equipo de anestesia lo sepa: son pacientes con mayor probabilidad de vía aérea difícil y con sensibilidad aumentada a opioides y sedantes, lo que obliga a planear analgesia multimodal y vigilancia respiratoria posoperatoria. STOP-BANG es una herramienta de cribado, no diagnóstica, de modo que no exige confirmar con polisomnografía antes de operar: eso retrasaría cirugías sin cambiar la conducta perioperatoria, que ya queda definida por el resultado del cribado. La apnea del sueño no contraindica la anestesia general, aunque sí modifica cómo se conduce. Iniciar presión positiva continua es útil en el manejo a largo plazo, pero no es un requisito previo a una colecistectomía ni algo que pueda instaurarse con la premura de una cirugía programada.'
  },
  {
    q: 'Una mujer de 72 años con fibrilación auricular en tratamiento con warfarina requiere el recambio del generador de su marcapasos definitivo. ¿Cuál es la conducta más apropiada con el anticoagulante?',
    options: [
      'Continuarla sin interrumpir durante el procedimiento',
      'Suspenderla 5 días antes y puentear con heparina de bajo peso molecular',
      'Suspenderla 5 días antes y realizar el procedimiento sin puente',
      'Suspenderla 3 días antes y revertir el efecto con vitamina K oral'
    ],
    correct: 0,
    explanation: 'El implante o recambio de un dispositivo cardiaco es la excepción notable dentro del manejo perioperatorio de los antagonistas de vitamina K: la recomendación es fuerte a favor de continuar el anticoagulante frente a interrumpirlo y puentear. La razón es que el hematoma de bolsillo del dispositivo es considerablemente más frecuente con la estrategia de puente que manteniendo la anticoagulación oral, además de que se evita el periodo sin protección antitrombótica. Suspender la warfarina con puente es precisamente la conducta que la evidencia desaconseja en este escenario concreto. Suspenderla sin puente evita el exceso de sangrado del puente pero deja a la paciente desprotegida sin necesidad, ya que el procedimiento puede hacerse con ella anticoagulada. Revertir con vitamina K añade el problema de la resistencia posterior al reiniciar la warfarina.'
  },
  {
    q: 'Un hombre de 66 años con hipertensión bien controlada toma enalapril de 10 mg cada 12 horas. Tiene programada una resección anterior baja de recto, cirugía de riesgo elevado. ¿Cuál es la conducta más apropiada con el enalapril?',
    options: [
      'Continuarlo, incluida la dosis de la mañana de la cirugía',
      'Suspenderlo una semana antes y sustituirlo por un calcioantagonista',
      'Suspenderlo de forma definitiva y reevaluar la hipertensión tras la cirugía',
      'Omitir la dosis correspondiente a las 24 horas previas a la cirugía'
    ],
    correct: 3,
    explanation: 'En pacientes con presión arterial controlada que toman inhibidores del sistema renina-angiotensina-aldosterona por hipertensión y van a cirugía de riesgo elevado, omitir la dosis de las 24 horas previas puede ser beneficioso para limitar la hipotensión intraoperatoria. La distinción importante es la indicación: cuando el fármaco se toma por insuficiencia cardiaca con fracción de eyección reducida, lo razonable es continuarlo. Este paciente lo toma por hipertensión y va a una cirugía de riesgo elevado, así que le corresponde omitir la dosis previa. Continuarlo no es un error grave, ya que en los ensayos la continuación no empeoró los desenlaces clínicos duros, pero sí aumenta la hipotensión intraoperatoria. Sustituirlo por otro antihipertensivo o suspenderlo de forma definitiva son conductas desproporcionadas que desorganizan un tratamiento crónico que funcionaba.'
  },
  {
    q: 'Un hombre de 58 años con cirrosis por alcohol, Child-Pugh B, tiene INR de 1.6 y plaquetas de 80 000/µL. Requiere una colecistectomía electiva. El equipo quirúrgico plantea omitir la tromboprofilaxis por considerar que ya está anticoagulado. ¿Cuál es la conducta más apropiada?',
    options: [
      'Omitirla, porque el INR prolongado ya lo protege frente a la trombosis',
      'Omitirla, porque la trombocitopenia contraindica cualquier anticoagulante',
      'Indicarla según el riesgo calculado, pese al INR prolongado',
      'Sustituirla por plasma fresco congelado antes de la cirugía'
    ],
    correct: 2,
    explanation: 'La hemostasia del cirrótico está reequilibrada, no anticoagulada: descienden a la vez los factores procoagulantes y los anticoagulantes naturales como la proteína C, la proteína S y la antitrombina. El INR mide únicamente la vía extrínseca y no captura ese equilibrio, de modo que un INR prolongado en un cirrótico no significa protección frente a la trombosis. De hecho, estos pacientes tienen riesgo tromboembólico aumentado, incluida la trombosis portal. La tromboprofilaxis se indica según el riesgo calculado, con las mismas escalas que en cualquier otro paciente, valorando el riesgo hemorrágico de forma independiente. Una cifra de 80 000 plaquetas no contraindica la profilaxis farmacológica, que suele considerarse segura por encima de 50 000. El plasma fresco congelado no es una alternativa: no previene trombosis, corrige el INR solo de forma transitoria y aporta una sobrecarga de volumen mal tolerada en la hipertensión portal.'
  },
  {
    q: 'Una mujer de 88 años con fragilidad clínica de grado 7, dependiente para las actividades básicas y con demencia moderada, tiene un adenocarcinoma de colon sin obstrucción. El cirujano propone hemicolectomía electiva y solicita valoración preoperatoria. ¿Cuál es la conducta más apropiada del internista?',
    options: [
      'Autorizar la cirugía si el índice de Lee resulta menor de 2 puntos',
      'Conversar sobre objetivos y desenlaces aceptables antes de decidir la cirugía',
      'Contraindicar la cirugía por la edad y el grado de fragilidad de la paciente',
      'Solicitar una prueba de estrés para completar la estratificación del riesgo'
    ],
    correct: 1,
    explanation: 'La fragilidad de grado 7 predice de forma independiente mortalidad, complicaciones, delirium, estancia prolongada e institucionalización al alta, más allá de lo que capturan las escalas cardiacas. En este contexto el valor de la valoración preoperatoria no está en emitir una autorización, sino en aportar la información que permite una decisión compartida: qué desenlaces son probables, cuáles serían aceptables para la paciente y su familia, y si la cirugía sirve a esos objetivos. El índice de Lee describe solo el riesgo cardiaco y no captura la fragilidad, así que no puede ser el criterio único. Contraindicar la cirugía por la edad es una decisión unilateral que ignora que la fragilidad se pondera junto con la indicación oncológica y las preferencias de la paciente. La prueba de estrés no aportaría nada aquí: su resultado no cambiaría el manejo, que es exactamente el filtro que la ruta perioperatoria propone antes de pedir cualquier estudio.'
  },
  {
    type: 'cascade',
    vignette: 'Un hombre de 71 años con diabetes tipo 2 e hipertensión tiene programada una hemicolectomía derecha electiva por adenocarcinoma de colon. Hace 8 meses recibió un stent farmacoactivo por angina estable, tras una prueba de esfuerzo positiva. Su tratamiento actual es aspirina de 100 mg al día, clopidogrel de 75 mg al día, empagliflozina, metformina, enalapril y atorvastatina. Camina más de tres cuadras y sube un piso de escaleras sin síntomas. Su creatinina es de 1.0 mg/dL.',
    steps: [
      {
        q: 'Respecto al tiempo transcurrido desde la intervención coronaria, ¿puede procederse con la cirugía electiva?',
        options: [
          'No; debe esperarse a completar 12 meses desde la colocación del stent',
          'Sí; han transcurrido más de 6 meses y el stent se colocó por enfermedad coronaria crónica',
          'No; debe esperarse a completar 24 meses desde la colocación del stent',
          'Sí; puede operarse con cualquier intervalo mientras se mantenga la doble antiagregación'
        ],
        correct: 1
      },
      {
        q: '¿Cuál es la conducta más apropiada con los antiagregantes de este paciente?',
        options: [
          'Suspender ambos antiagregantes 7 días antes de la cirugía',
          'Continuar ambos antiagregantes durante todo el periodo perioperatorio',
          'Suspender la aspirina y continuar el clopidogrel hasta el día de la cirugía',
          'Continuar la aspirina y suspender el clopidogrel 5 días antes de la cirugía'
        ],
        correct: 3
      },
      {
        q: '¿Cuál es la conducta más apropiada con la empagliflozina y la metformina?',
        options: [
          'Suspender la empagliflozina 3 a 4 días antes y continuar la metformina',
          'Suspender ambos fármacos 48 horas antes de la cirugía',
          'Continuar ambos fármacos hasta la mañana de la cirugía',
          'Suspender la metformina 48 horas antes y continuar la empagliflozina'
        ],
        correct: 0
      },
      {
        q: 'El paciente es operado sin incidentes, pero refiere que nunca recibió la indicación de suspender la empagliflozina y la tomó hasta el día previo. Al segundo día posoperatorio presenta náusea y polipnea, con pH de 7.26, bicarbonato de 15 mEq/L, glucemia de 190 mg/dL y lactato normal. ¿Cuál es el diagnóstico más probable?',
        options: [
          'Acidosis láctica asociada al uso de metformina',
          'Acidosis hiperclorémica por la reanimación con cristaloides',
          'Cetoacidosis euglucémica por el inhibidor de SGLT2',
          'Sepsis abdominal con acidosis por hipoperfusión tisular'
        ],
        correct: 2
      }
    ],
    explanation: 'Este caso recorre la valoración preoperatoria completa de un paciente frecuente. Primero, el tiempo desde la intervención coronaria: un stent farmacoactivo colocado por enfermedad coronaria crónica permite la cirugía electiva a partir de los 6 meses (clase 2a), a diferencia del colocado por síndrome coronario agudo, que exige idealmente 12 meses. Segundo, la conducta con los antiagregantes: se continúa la aspirina de 75 a 100 mg siempre que sea posible, porque el paciente tiene intervención coronaria previa, y se suspende el clopidogrel 5 días antes. Tercero, los antidiabéticos: la metformina se continúa, mientras que el inhibidor de SGLT2 se suspende de 3 a 4 días antes precisamente para evitar la complicación del cuarto paso. Cuarto, esa complicación: acidosis con anión gap elevado, glucemia que no alarma y lactato normal, en un paciente que no suspendió el inhibidor de SGLT2, configuran la cetoacidosis diabética euglucémica. Es la trampa diagnóstica de la clase, porque la glucosa normal desvía la sospecha. El fallo de comunicación del caso también es realista: la indicación de suspender un fármaco solo sirve si llega al paciente por escrito y con fecha.'
  }
];

export const flashcards = [
  { front: '¿Cuál es el propósito real de la valoración preoperatoria?', back: 'Cuantificar el riesgo, reducir el que sea reducible y comunicar el resto. No es autorizar ni "dar de alta para cirugía": rara vez cancela cirugías, lo que cambia es el momento, la preparación y la vigilancia.' },
  { front: '¿Cuál es la pregunta que filtra cualquier estudio preoperatorio?', back: '¿Qué haría distinto si el resultado sale anormal? Si la respuesta es "nada", el estudio solo retrasa la cirugía, encarece el proceso y abre una cascada diagnóstica con riesgo propio.' },
  { front: 'Tiempos de espera de cirugía electiva tras intervención coronaria percutánea', back: 'Balón sin stent: 14 días. Stent farmacoactivo por síndrome coronario agudo: 12 meses o más. Stent farmacoactivo por enfermedad crónica: 6 meses o más. Sensible al tiempo: puede considerarse desde los 3 meses. Dentro de los 30 días de cualquier stent, la cirugía electiva con interrupción de antiagregantes es potencialmente dañina.' },
  { front: 'Días de suspensión de los anticoagulantes orales directos', back: 'Apixabán, rivaroxabán y edoxabán: 1 día si el riesgo hemorrágico es bajo o moderado, 2 días si es alto. Dabigatrán: 1, 2, 2 o 4 días según riesgo hemorrágico y aclaramiento mayor o menor de 50 mL/min. Es el único con ajuste renal.' },
  { front: '¿En qué escenarios se recomienda hoy el puente con heparina?', back: 'En prácticamente ninguno como conducta por defecto. La recomendación va en contra en fibrilación auricular (fuerte, ensayo BRIDGE), válvula mecánica, enfermedad tromboembólica venosa aislada, colonoscopia con polipectomía y con cualquier anticoagulante oral directo. Queda para casos individualizados de riesgo trombótico excepcional.' },
  { front: 'Inhibidores de SGLT2 en el perioperatorio', back: 'Suspender de 3 a 4 días antes por riesgo de cetoacidosis diabética euglucémica: glucosa menor de 250 mg/dL con pH menor de 7.3, bicarbonato bajo y cetonas elevadas. Se pasa por alto porque la glucemia no alarma.' },
  { front: 'Agonistas del receptor de GLP-1 antes de una cirugía', back: 'Presentación diaria: omitir la dosis del día del procedimiento. Presentación semanal: suspender una semana antes. El riesgo es retraso del vaciamiento gástrico con broncoaspiración. En urgencias, tratar al paciente como estómago lleno.' },
  { front: 'Betabloqueadores en el perioperatorio', back: 'Continuar si el paciente ya los tomaba de forma estable (clase 1). Si hay indicación nueva, iniciarlos más de 7 días antes. Iniciarlos el día de la cirugía es potencialmente dañino: aumenta la mortalidad posoperatoria (clase 3).' },
  { front: '¿Qué umbral de capacidad funcional permite proceder sin más estudios?', back: 'Cuatro MET. La pregunta de cabecera equivalente es si el paciente sube dos pisos de escaleras. Con 4 MET o más se puede proceder aunque el riesgo calculado sea elevado.' },
  { front: 'Corticoterapia crónica: ¿cuándo dar dosis de estrés?', back: 'Eje probablemente suprimido con más de 20 mg diarios de prednisona por más de 3 semanas o Cushing clínico: dar dosis de estrés. Eje íntegro con menos de 5 mg diarios o cualquier dosis por menos de 3 semanas: solo la dosis habitual. Entre 5 y 20 mg: individualizar. Nunca suspenderlo.' },
  { front: '¿Qué previene realmente el delirium posoperatorio?', back: 'El paquete no farmacológico multicomponente: orientación repetida, movilización temprana, hidratación, control del dolor sin anticolinérgicos, lentes y auxiliar auditivo, y protección del sueño. Los antipsicóticos no sirven como profilaxis y las benzodiacepinas son un precipitante.' },
  { front: '¿Por qué el INR prolongado del cirrótico no protege de la trombosis?', back: 'Su hemostasia está reequilibrada, no anticoagulada: bajan a la vez los factores procoagulantes y los anticoagulantes naturales (proteína C, proteína S, antitrombina). El INR solo mide la vía extrínseca. La tromboprofilaxis se indica según el riesgo calculado.' }
];

export const caseSteps = [];
export const caseSummary = '';
