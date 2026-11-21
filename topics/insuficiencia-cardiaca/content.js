// topics/insuficiencia-cardiaca/content.js - Insuficiencia cardiaca. Primer tema del bloque II
// (Sistema Cardiovascular) desde el plan de fuentes del 19/11/2026 (.claude/cardiovascular-fuentes.md).
// Cubre tres items del temario: IC aguda descompensada y edema agudo de pulmon; IC cronica con FEVI
// reducida y preservada; y dispositivos y terapias avanzadas.
//
// POR QUE ESTE TEMA ABRE CARDIOVASCULAR: "insuficiencia cardiaca" aparecia 431 veces en 56 temas
// construidos sin que el residente tuviera a donde ir, la mayor demanda sin destino del repositorio.
//
// FUENTES, todas leidas en el PDF de Bibliografia/I. Sistema Cardiovascular/Insuficiencia cardiaca/:
//   [1] ESC 2021 de IC aguda y cronica (McDonagh). Sostiene casi todo el tema.
//   [2] AHA/ACC/HFSA 2022 (Heidenreich). Se usa donde dice algo que la ESC 2021 no dice: la FEVI
//       mejorada como subgrupo de la reducida, los iSGLT2 en la FEVI levemente reducida y en la
//       preservada (2a B-R, por EMPEROR-Preserved, publicado despues de la ESC 2021), el umbral de
//       potasio y filtrado para iniciar el ARM, y la retirada del ARM si el potasio no baja de 5.5.
//   [3] Segunda Definicion Universal de IC 2026 (Walsh, AHA/ACC/ESC/WHF). Solo donde define: el
//       sindrome, los estadios, el abandono de los cortes fijos de FEVI, la FEVI mejorada (10 puntos
//       hasta mas de 40%), la descompensacion como necesidad de intensificar el tratamiento y los
//       imitadores de la IC. El propio documento dice que NO es una guia de tratamiento, asi que no
//       se le cuelga ninguna conducta terapeutica.
//
// LO QUE FALTA Y SE DECLARA: la actualizacion ESC 2023 (McDonagh, Eur Heart J 2023;44:3627) NO esta
// en Bibliografia/. Es la que sube los iSGLT2 a clase I en la FEVI levemente reducida y en la
// preservada. Mientras no este, ese punto se cita a la AHA 2022 con su grado (2a) y el texto dice que
// la ESC 2021 no lo recomendaba aun. La revision JACC 2026 de IC aguda que hay en la carpeta reserva
// expresamente los derechos de mineria de texto y de entrenamiento de IA, igual que las NCCN, y no se
// uso. La guia ISHLT 2023 de asistencia circulatoria esta en la carpeta pero no se cita: lo que el
// tema dice de la asistencia ventricular sale de la Tabla 16 y de las recomendaciones de la ESC 2021.
//
// PASAJES QUE SOSTIENEN LAS CITAS MAS DELICADAS (frase de la fuente):
//   - Cuatro pilares, [1] p22: "An ACE-I ... A beta-blocker ... An MRA ... Dapagliflozin or
//     empagliflozin are recommended for patients with HFrEF to reduce the risk of HF hospitalization
//     and death" (los cuatro I A); "Sacubitril/valsartan is recommended as a replacement for an ACE-I"
//     (I B).
//   - ARM, [2] p37: "an MRA ... is recommended ... if eGFR is >30 mL/min/1.73 m2 and serum potassium
//     is <5.0 mEq/L" (1 A) y "whose serum potassium cannot be maintained at <5.5 mEq/L, MRA should be
//     discontinued" (3: Harm).
//   - FEVI preservada, [1] p34: "Diuretics are recommended in congested patients with HFpEF" (I C);
//     [2] p55: "In patients with HFpEF, SGLT2i can be beneficial in decreasing HF hospitalizations and
//     cardiovascular mortality" (2a B-R).
//   - Respuesta diuretica, [1] p55: "A satisfactory diuretic response can be defined as a urine
//     sodium content >50-70 mEq/L at 2 h and/or by a urine output >100-150 mL/h during the first 6 h".
//   - Hierro, [1] p71: ferroso carboximaltosa IIa A con FEVI <45% para sintomas, y IIa B con FEVI
//     <50% tras hospitalizacion reciente para reducir reingresos; "Oral iron therapy ... is therefore
//     not recommended".
//   - TRC, [1] p29: QRS >=150 ms con BRI y FEVI <=35%, I A; QRS <130 ms sin indicacion de
//     estimulacion por bloqueo AV de alto grado, III A.
//
// JERARQUIA DE LAS FICHAS, segun el esquema universal de enfermedad: las OCHO primeras son formas de
// la enfermedad o del tratamiento que la define (campos completos); las CUATRO ultimas son
// complicaciones, y su `definicion` arranca diciendo de que ficha dependen. La IC avanzada de
// `miocardiopatias` se enlaza desde aqui en vez de repetirse, y el choque cardiogenico general vive en
// `estado-de-choque`.
//
// Texto sin acentos en los comentarios; todo el texto visible va acentuado.

export const meta = {
  id: 'insuficiencia-cardiaca',
  titulo: 'Insuficiencia Cardiaca',
  subtitulo: 'Medicina Interna',
  accent: '#a3364a'
};

export const definicionText = `<p style="margin:0 0 14px;">La insuficiencia cardiaca no es un diagnóstico anatomopatológico sino un <strong>síndrome clínico</strong>: síntomas cardinales (disnea, edema maleolar, fatiga) que pueden acompañarse de signos (presión venosa yugular elevada, crepitantes, edema periférico), debidos a una anomalía estructural o funcional del corazón que eleva las presiones intracardiacas o deja un gasto cardiaco insuficiente, en reposo o con el esfuerzo. La Definición Universal de 2026 subraya lo que más se olvida en la guardia: la insuficiencia cardiaca se define por la <strong>acumulación de rasgos sugestivos en una valoración completa</strong>, no por una sola prueba. Una proporción considerable de los pacientes con FEVI preservada tiene péptidos natriuréticos normales pese a presiones de llenado inequívocamente elevadas.</p>
<p style="margin:0 0 14px;">El número que ordena el tratamiento es la <strong>fracción de eyección del ventrículo izquierdo</strong>. La ESC 2021 separa tres fenotipos: reducida (40% o menos), levemente reducida (41 a 49%) y preservada (50% o más, con evidencia objetiva de presiones de llenado elevadas). La AHA 2022 añade la <strong>FEVI mejorada</strong>: quien tuvo 40% o menos y ahora tiene más de 40% sigue siendo un paciente con FEVI reducida en remisión, y retirarle el tratamiento lo hace recaer. La Definición Universal de 2026 da un paso más y abandona los cortes fijos: el límite inferior de la normalidad es 53% en la mujer y 52% en el varón, y una FEVI por debajo de 50% difícilmente es normal.</p>
<p style="margin:0 0 14px;">La consecuencia práctica es una asimetría que conviene fijar desde el principio. En la FEVI reducida hay <strong>cuatro pilares</strong>, los cuatro clase I A: IECA (o sacubitril/valsartán, que lo sustituye), betabloqueador, antagonista del receptor mineralocorticoide e inhibidor del SGLT2. En la FEVI preservada la ESC 2021 solo recomendaba con clase I los diuréticos para la congestión y el tratamiento de la causa y las comorbilidades; la AHA 2022 añadió los iSGLT2 con grado 2a. Y en la insuficiencia cardiaca aguda, la decisión que más cambia el ingreso se mide a las 2 y a las 6 horas: si el diurético está funcionando o hay que duplicarlo.</p>`;

export const bibliografia = [
  'McDonagh TA, Metra M, Adamo M, Gardner RS, Baumbach A, Böhm M, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2021;42(36):3599-3726.',
  'Heidenreich PA, Bozkurt B, Aguilar D, Allen LA, Byun JJ, Colvin MM, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure: A Report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines. Circulation. 2022;145(18):e895-e1032.',
  'Walsh MN, Kober L, Sliwa K, Adamo M, Agarwal A, Banerjee A, et al. AHA/ACC/ESC/WHF Expert Consensus Document: Second Universal Definition of Heart Failure (2026). Circulation. 2026;153. doi:10.1161/CIR.0000000000001455.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'La insuficiencia cardiaca crónica: cuándo sospecharla',
      tituloB: 'La insuficiencia cardiaca aguda: las cuatro presentaciones',
      compensada: 'Los síntomas típicos son la disnea, la ortopnea, la disnea paroxística nocturna, la menor tolerancia al ejercicio, la fatiga con recuperación lenta tras el esfuerzo y el edema maleolar. Los signos más específicos son la presión venosa yugular elevada, el reflujo hepatoyugular, el tercer ruido (ritmo de galope) y el choque de punta desplazado lateralmente. Hay síntomas menos típicos que hacen perder el diagnóstico en el anciano: tos nocturna, sibilancias, sensación de plenitud, anorexia, confusión, depresión, palpitaciones y síncope. La bendopnea, disnea al inclinarse hacia delante, es un síntoma de enfermedad avanzada. Y una advertencia de la propia guía: los signos pueden faltar en las fases tempranas, sobre todo en la FEVI preservada, y en el paciente bien tratado.',
      descompensada: 'La insuficiencia cardiaca aguda es la aparición rápida o gradual de síntomas o signos lo bastante graves como para consultar de urgencia. Tiene cuatro presentaciones que pueden solaparse, y cada una pide un tratamiento distinto. La DESCOMPENSADA es la más frecuente (50 a 70%): inicio en días, retención progresiva de líquido y congestión sistémica, a veces con hipoperfusión. El EDEMA AGUDO DE PULMÓN se instala en horas, por redistribución de líquido al pulmón, con insuficiencia respiratoria, más de 25 respiraciones por minuto y presión arterial normal o alta. La INSUFICIENCIA DERECHA AISLADA eleva la presión venosa central y congestiona la circulación sistémica. Y el CHOQUE CARDIOGÉNICO es la hipoperfusión por disfunción cardiaca primaria: extremidades frías y sudorosas, oliguria, confusión, presión diferencial estrecha, con lactato y creatinina elevados. La mortalidad hospitalaria va del 4 al 10% y la del primer año tras el alta, del 25 al 30%.'
    },
    laboratorio: [
      { prueba: 'Péptidos natriuréticos en la sospecha crónica', utilidad: 'Recomendados como prueba inicial para DESCARTAR el diagnóstico (I B). Un BNP por debajo de 35 pg/mL, un NT-proBNP por debajo de 125 pg/mL o un MR-proANP por debajo de 40 pmol/L hacen improbable la insuficiencia cardiaca, con valores predictivos negativos de 0,94 a 0,98. Se elevan con la fibrilación auricular, la edad y la enfermedad renal aguda o crónica, y pueden estar desproporcionadamente bajos en el obeso.' },
      { prueba: 'Péptidos natriuréticos en la sospecha aguda', utilidad: 'Los cortes son otros. Descartan la insuficiencia cardiaca aguda un BNP por debajo de 100 pg/mL, un NT-proBNP por debajo de 300 pg/mL o un MR-proANP por debajo de 120 pmol/L. Los valores que la confirman dependen de la edad para el NT-proBNP: más de 450 pg/mL antes de los 55 años, más de 900 entre los 55 y los 75, y más de 1800 por encima de los 75. Pueden salir bajos en el edema pulmonar fulminante, en la insuficiencia derecha aguda, en la obesidad y en la enfermedad terminal descompensada.' },
      { prueba: 'Analítica básica en todo paciente', utilidad: 'Hemograma, urea y electrolitos, creatinina, función tiroidea, glucemia en ayunas y HbA1c, lípidos y estado del hierro con saturación de transferrina y ferritina (I C). Sirve para diferenciar la insuficiencia cardiaca de otras causas, dar pronóstico y elegir tratamiento.' },
      { prueba: 'Al ingreso por insuficiencia cardiaca aguda', utilidad: 'Troponina para excluir el síndrome coronario agudo, sabiendo que está elevada en la gran mayoría de los pacientes con insuficiencia cardiaca aguda. Creatinina, urea y electrolitos. TSH en el diagnóstico nuevo, porque el hipo y el hipertiroidismo la precipitan. Dímero D si se sospecha embolia pulmonar, procalcitonina si se sospecha neumonía, gasometría arterial si hay dificultad respiratoria y lactato si hay hipoperfusión.' },
      { prueba: 'Ferritina y saturación de transferrina', utilidad: 'Definen la ferropenia en la insuficiencia cardiaca con un corte más alto que en la población general, porque la inflamación eleva la ferritina: ferritina por debajo de 100 ng/mL, o entre 100 y 299 ng/mL con saturación de transferrina por debajo del 20%. Está presente hasta en el 55% de los crónicos y el 80% de los agudos, con o sin anemia, y se busca periódicamente en todos (I C).' },
      { prueba: 'Sodio urinario a las 2 horas del diurético', utilidad: 'Es la forma de medir pronto si el diurético funciona. Una respuesta satisfactoria es un sodio urinario por encima de 50 a 70 mEq/L a las 2 horas, o una diuresis de más de 100 a 150 mL por hora durante las primeras 6 horas. Si no se alcanza, se duplica la dosis intravenosa y se vuelve a medir (calculadora disponible).' },
      { prueba: 'Potasio y creatinina al titular el tratamiento', utilidad: 'Al iniciar IECA, sacubitril/valsartán o iSGLT2, una subida de creatinina de menos del 50% sobre la basal, mientras siga por debajo de 3 mg/dL (266 µmol/L), o una caída del filtrado de menos del 10%, mientras siga por encima de 25 mL/min/1,73 m², es aceptable y no obliga a suspenderlos. El potasio tiene una relación en U con la mortalidad, con el menor riesgo entre 4 y 5 mmol/L.' }
    ],
    no_invasivos: [
      { metodo: 'Algoritmo diagnóstico de la insuficiencia cardiaca crónica (calculadora disponible)', interpretacion: 'Sospecha por factores de riesgo, síntomas o signos, o un electrocardiograma anormal; después, péptido natriurético. Con NT-proBNP de 125 pg/mL o más, BNP de 35 pg/mL o más, sospecha muy alta o péptido no disponible, ecocardiograma. Si el ecocardiograma es anormal, la insuficiencia cardiaca queda confirmada y se define el fenotipo por la FEVI. Si el péptido es normal, la insuficiencia cardiaca es improbable y hay que considerar otros diagnósticos.', cutoff: 'NT-proBNP 125 pg/mL; BNP 35 pg/mL' },
      { metodo: 'Electrocardiograma', interpretacion: 'Un electrocardiograma normal hace improbable la insuficiencia cardiaca. La fibrilación auricular, las ondas Q, la hipertrofia ventricular izquierda y el QRS ancho aumentan la probabilidad y además orientan el tratamiento: la anchura y la morfología del QRS deciden la resincronización.', cutoff: 'QRS de 130 ms o más para considerar resincronización' },
      { metodo: 'Marcadores de FEVI preservada (calculadora disponible)', interpretacion: 'La ESC 2021 no propone una escala con punto de corte sino una lista de anomalías estructurales, funcionales y de péptidos compatibles con presiones de llenado elevadas: cuantas más, más probable la FEVI preservada. Hasta un 20% de los pacientes con FEVI preservada comprobada invasivamente tiene péptidos por debajo del umbral, sobre todo en la obesidad.', cutoff: 'Sin punto de corte: más marcadores, más probabilidad' },
      { metodo: 'Respuesta diurética temprana (calculadora disponible)', interpretacion: 'Sodio urinario a las 2 horas y diuresis horaria en las primeras 6 horas. Si no se alcanzan los umbrales, se duplica la dosis; si con la dosis duplicada la diuresis sigue por debajo de 100 mL por hora, se añade un diurético con otro sitio de acción.', cutoff: 'Sodio urinario de 50 a 70 mEq/L; diuresis de 100 a 150 mL/h' },
      { metodo: 'Prueba de esfuerzo cardiopulmonar', interpretacion: 'Recomendada en la evaluación para trasplante o asistencia circulatoria (I C), y debe considerarse para prescribir el entrenamiento y para aclarar la causa de una disnea inexplicada (IIa C). Un consumo pico de oxígeno por debajo de 12 mL/kg/min, o del 50% del predicho, es uno de los criterios de insuficiencia cardiaca avanzada.', cutoff: 'Consumo pico de oxígeno menor de 12 mL/kg/min' }
    ],
    imagen: [
      { modalidad: 'Ecocardiograma transtorácico', hallazgos: 'Es la exploración clave (I C). Además de la FEVI, informa del tamaño de las cavidades, de la hipertrofia concéntrica o excéntrica, de las alteraciones segmentarias de la contractilidad (que sugieren cardiopatía isquémica, síndrome de takotsubo o miocarditis), de la función del ventrículo derecho, de la hipertensión pulmonar, de las válvulas y de los marcadores de función diastólica.' },
      { modalidad: 'Radiografía de tórax', hallazgos: 'Recomendada para buscar otras causas de disnea, como la enfermedad pulmonar (I C). Puede apoyar el diagnóstico al mostrar congestión pulmonar o cardiomegalia.' },
      { modalidad: 'Ecografía pulmonar', hallazgos: 'En la insuficiencia cardiaca aguda confirma la congestión, sobre todo cuando no se dispone de péptidos natriuréticos, y puede repetirse antes del alta para no dar de alta a un paciente todavía congestivo.' },
      { modalidad: 'Resonancia magnética cardiaca', hallazgos: 'Recomendada cuando la ventana ecocardiográfica es mala (I C) y para caracterizar el tejido en la sospecha de enfermedad infiltrativa, Fabry, miocarditis, miocardio no compactado, amiloidosis, sarcoidosis o sobrecarga de hierro (I C). El realce tardío de gadolinio es subendocárdico en la cardiopatía isquémica y mesoparietal en la miocardiopatía dilatada, y debe considerarse para distinguirlas (IIa C).' },
      { modalidad: 'Coronariografía y angio-TC coronaria', hallazgos: 'La coronariografía invasiva se recomienda en el paciente con angina pese al tratamiento o con arritmias ventriculares sintomáticas, si es candidato a revascularización (I B). La angio-TC coronaria debe considerarse con probabilidad pretest baja a intermedia o pruebas de estrés equívocas (IIa C).' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'Las escalas de este tema responden a preguntas distintas y conviene no mezclarlas. La primera es <strong>qué fenotipo tiene</strong>, que es la FEVI y decide el tratamiento. La segunda es <strong>en qué punto de la historia natural está</strong>, que son los estadios A a D. La tercera es <strong>cuánto le limita</strong>, que es la clase NYHA, útil pero pobre como pronóstico. La cuarta es <strong>cómo se presenta en la urgencia</strong>, que son las cuatro presentaciones de la insuficiencia cardiaca aguda. Y la quinta es <strong>cuándo derivarlo a terapias avanzadas</strong>, que son los criterios de insuficiencia cardiaca avanzada y los perfiles INTERMACS.',
    escalas: [
      { nombre: 'Fenotipo por FEVI: ESC 2021, AHA 2022 y Definición Universal 2026 (calculadora disponible)', componentes: 'FEVI actual, FEVI previa y evidencia objetiva de presiones de llenado elevadas.', formula: 'Reducida, 40% o menos. Levemente reducida, 41 a 49%. Preservada, 50% o más con evidencia de presiones de llenado elevadas. Mejorada: previa de 40% o menos y actual de más de 40%.', interpretacion: 'La ESC 2021 llama a quien pasó de 40% o menos a 50% o más "insuficiencia cardiaca recuperada" o "con FEVI mejorada", no FEVI preservada, y recomienda mantener el tratamiento. La AHA 2022 la trata como un subgrupo de la FEVI reducida y pide continuar el tratamiento aunque el paciente esté asintomático (1 B-R). La Definición Universal de 2026 abandona los cortes fijos y agrupa en reducida, preservada y mejorada, y define la mejorada como un aumento de 10 puntos hasta una FEVI de más de 40%.' },
      { nombre: 'Estadios A a D', componentes: 'Factores de riesgo, cardiopatía estructural, síntomas y respuesta al tratamiento.', formula: 'A en riesgo; B preinsuficiencia; C insuficiencia cardiaca sintomática; D avanzada.', interpretacion: 'ESTADIO A: en riesgo, sin síntomas, sin alteraciones estructurales ni biomarcadores elevados (hipertensión, enfermedad aterosclerótica, cardiopatía congénita, diabetes, obesidad, cardiotóxicos, historia familiar de miocardiopatía o portador genético). ESTADIO B, preinsuficiencia: sin síntomas pero con alteración estructural, funcional o péptidos y troponina elevados. ESTADIO C: síntomas actuales o previos por una anomalía cardiaca. ESTADIO D: síntomas graves en reposo o con mínimo esfuerzo, hospitalizaciones repetidas pese al tratamiento, intolerancia o refractariedad, o necesidad de terapias avanzadas. Un paciente en estadio C cuyos síntomas desaparecen sigue en estadio C: el diagnóstico es permanente.' },
      { nombre: 'Clase funcional NYHA', componentes: 'Limitación de la actividad física por los síntomas.', formula: 'Clase I a IV.', interpretacion: 'I sin limitación de la actividad ordinaria; II limitación ligera, cómodo en reposo; III limitación marcada, cómodo en reposo pero con síntomas ante una actividad menor que la ordinaria; IV incapaz de cualquier actividad sin molestias. Se basa solo en los síntomas, y la guía advierte que un paciente con síntomas leves puede tener un riesgo alto de hospitalización y muerte.' },
      { nombre: 'Las cuatro presentaciones de la insuficiencia cardiaca aguda', componentes: 'Inicio, mecanismo, perfil de congestión y de perfusión, y presión arterial sistólica.', formula: 'Descompensada; edema agudo de pulmón; insuficiencia derecha aislada; choque cardiogénico.', interpretacion: 'DESCOMPENSADA: inicio en días, retención de sodio y agua, húmeda y caliente o húmeda y fría; tratamiento con diuréticos, e inotrópicos solo si hay hipoperfusión. EDEMA AGUDO DE PULMÓN: inicio en horas, poscarga elevada o disfunción diastólica, redistribución al pulmón, presión normal o alta; diuréticos y vasodilatadores. DERECHA AISLADA: disfunción del ventrículo derecho o hipertensión pulmonar precapilar, presión venosa central elevada; diuréticos para la congestión e inotrópicos o vasopresores si hay hipoperfusión. CHOQUE CARDIOGÉNICO: disfunción grave, hipoperfusión sistémica, presión baja; inotrópicos, vasopresores, asistencia circulatoria de corta duración o terapia de reemplazo renal.' },
      { nombre: 'Criterios de insuficiencia cardiaca avanzada (ESC 2021)', componentes: 'Cuatro criterios que deben estar TODOS presentes pese al tratamiento óptimo.', formula: 'Los cuatro, o no es avanzada.', interpretacion: 'UNO, síntomas graves y persistentes: NYHA III avanzada o IV. DOS, disfunción cardiaca grave: FEVI de 30% o menos, insuficiencia derecha aislada, valvulopatía o cardiopatía congénita graves no operables, o péptidos persistentemente altos con disfunción diastólica grave. TRES, episodios de congestión que exigen diuréticos intravenosos a dosis altas, de bajo gasto que exigen inotrópicos, o arritmias malignas, con más de una visita o ingreso no programado en 12 meses. CUATRO, capacidad de ejercicio gravemente reducida: incapaz de caminar, menos de 300 m en la prueba de 6 minutos o consumo pico por debajo de 12 mL/kg/min. Puede darse con FEVI no reducida.' },
      { nombre: 'Perfiles INTERMACS', componentes: 'Situación hemodinámica y dependencia de soporte del paciente con insuficiencia cardiaca avanzada.', formula: 'Perfil 1 a 7; cuanto más bajo, más urgente.', interpretacion: 'PERFIL 1, choque cardiogénico crítico ("crash and burn"): intervención en horas. PERFIL 2, deterioro progresivo pese a inotrópicos: en pocos días. PERFIL 3, estable pero dependiente de inotrópicos. PERFIL 4, el "frequent flyer", congestión diaria en reposo o con las actividades básicas. PERFIL 5, confinado en casa. PERFIL 6, limitado por el esfuerzo. PERFIL 7, NYHA III avanzada sin inestabilidad reciente. La asistencia ventricular de larga duración se plantea sobre todo en los perfiles 2 a 4, y en el 5 o 6 con características de alto riesgo.' },
      { nombre: 'Indicación de resincronización y de desfibrilador (calculadora disponible)', componentes: 'FEVI tras 3 meses de tratamiento óptimo, ritmo, anchura y morfología del QRS, etiología, clase NYHA y esperanza de vida.', formula: 'TRC: QRS de 150 ms o más con BRI, I A. DAI: FEVI de 35% o menos tras 3 meses de tratamiento, isquémica I A y no isquémica IIa A.', interpretacion: 'RESINCRONIZACIÓN en ritmo sinusal con FEVI de 35% o menos pese al tratamiento óptimo: QRS de 150 ms o más con BRI, recomendada (I A); de 150 ms o más sin BRI, o de 130 a 149 ms con BRI, debe considerarse (IIa B); de 130 a 149 ms sin BRI, puede considerarse (IIb B); por debajo de 130 ms, NO se recomienda (III A) salvo que haya indicación de estimulación por bloqueo AV de alto grado, en cuyo caso la TRC se prefiere a la estimulación del ventrículo derecho (I A). DESFIBRILADOR en prevención primaria con NYHA II o III, FEVI de 35% o menos tras al menos 3 meses de tratamiento y esperanza de vida de más de un año con buena función: isquémica I A, no isquémica IIa A; nunca en los 40 días siguientes a un infarto (III A).' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Insuficiencia cardiaca con FEVI reducida',
      color: '#a3364a',
      definicion: 'Síntomas o signos de insuficiencia cardiaca con una FEVI de 40% o menos. Es la ficha de referencia del tema porque es el fenotipo en el que los ensayos demostraron que el tratamiento cambia la supervivencia, y por eso la FEVI se mide antes de tratar. La AHA 2022 incluye en ella a la FEVI mejorada, que tiene ficha propia junto a la levemente reducida.',
      fisiopatologia: 'Una anomalía estructural o funcional del corazón eleva las presiones intracardiacas o deja un gasto insuficiente, y el organismo responde activando el sistema renina-angiotensina-aldosterona y el sistema nervioso simpático. Modular esos dos sistemas con IECA o sacubitril/valsartán, betabloqueadores y antagonistas del receptor mineralocorticoide mejora la supervivencia, reduce las hospitalizaciones y alivia los síntomas. Los iSGLT2 añaden un efecto diurético y natriurético y frenan el deterioro de la función renal.',
      epidemiologia: 'La prevalencia de la insuficiencia cardiaca es del 1 al 2% de los adultos y pasa de alrededor del 1% antes de los 55 años a más del 10% a partir de los 70. La incidencia en Europa es de unos 5 casos por 1000 personas-año en adultos. El pronóstico ha mejorado de forma notable desde los primeros ensayos, pero esa mejora se ha limitado a la FEVI reducida. En la cohorte de Olmsted, la mortalidad al año y a los 5 años del diagnóstico fue del 20 y del 53% para todos los tipos de insuficiencia cardiaca.',
      factores_riesgo: [
        'Cardiopatía isquémica e infarto previo, la causa predominante en los países occidentales junto a la hipertensión',
        'Hipertensión arterial',
        'Valvulopatía',
        'Miocardiopatías hereditarias, tóxicas (alcohol, antraciclinas), inflamatorias o infiltrativas',
        'Arritmias, incluida la taquimiocardiopatía',
        'Diabetes, obesidad y enfermedad aterosclerótica',
        'Radioterapia torácica y fármacos cardiotóxicos'
      ],
      clinica: 'Disnea, ortopnea, disnea paroxística nocturna, intolerancia al ejercicio, fatiga y edema maleolar. Los signos más específicos son la presión venosa yugular elevada, el reflujo hepatoyugular, el tercer ruido y el choque de punta desplazado. Otros signos son menos específicos: caquexia, extremidades frías, presión diferencial estrecha, oliguria y respiración de Cheyne-Stokes; la pérdida de peso es propia de la enfermedad avanzada.',
      criterios_dx: 'Síntomas o signos de insuficiencia cardiaca y FEVI de 40% o menos, medida casi siempre por ecocardiografía; si no es posible, por resonancia o, rara vez, por técnicas nucleares. El camino es el algoritmo diagnóstico: péptido natriurético primero, ecocardiograma si está elevado o si la sospecha es alta. La Definición Universal de 2026 recuerda que el diagnóstico se apoya en la acumulación de datos y no en una prueba aislada.',
      laboratorio: 'NT-proBNP de 125 pg/mL o más, o BNP de 35 pg/mL o más, orientan al ecocardiograma. En todo paciente: hemograma, urea, electrolitos, creatinina, función tiroidea, glucemia en ayunas y HbA1c, lípidos, ferritina y saturación de transferrina (I C).',
      imagen: 'Ecocardiograma transtorácico (I C) para la FEVI, las cavidades, la contractilidad segmentaria, el ventrículo derecho, las válvulas y la presión pulmonar. Radiografía de tórax (I C). Resonancia si la ventana es mala (I C) y para distinguir lo isquémico de lo no isquémico por el realce tardío (IIa C).',
      complementarios: 'Electrocardiograma (I C), que además da la anchura del QRS para la resincronización. Coronariografía invasiva si hay angina pese al tratamiento o arritmias ventriculares sintomáticas (I B); angio-TC coronaria con probabilidad baja a intermedia (IIa C). Biopsia endomiocárdica si la insuficiencia progresa rápido pese al tratamiento y solo una muestra puede confirmar un diagnóstico específico (IIa C).',
      dx_diferencial: 'Los imitadores que describe la Definición Universal de 2026: la isquemia miocárdica (del 10 al 15% de los síndromes coronarios crónicos se manifiesta solo como disnea de esfuerzo), la enfermedad renal crónica con sobrecarga de volumen, el tercer trimestre del embarazo, y la obesidad con desacondicionamiento, que además da péptidos falsamente normales.',
      tx_medico: 'Tres objetivos: reducir la mortalidad, prevenir las hospitalizaciones por empeoramiento y mejorar el estado clínico, la capacidad funcional y la calidad de vida. Se recomienda incluir al paciente en un programa multidisciplinario de insuficiencia cardiaca (I A) y las estrategias de autocuidado (I A); el paciente aprende a ajustar el diurético según los síntomas y el peso diario. La vacunación contra la gripe y el neumococo debe considerarse (IIa B).',
      tx_farmacologico: 'LOS CUATRO PILARES, los cuatro I A: IECA, betabloqueador, ARM y dapagliflozina o empagliflozina, con o sin diabetes. Sacubitril/valsartán sustituye al IECA en quien sigue sintomático (I B en la ESC; la AHA lo recomienda de entrada en NYHA II y III, 1 A), con 36 horas de lavado tras el IECA por el riesgo de angioedema. Dosis inicial y objetivo: enalapril 2,5 mg y 10 a 20 mg cada 12 h; sacubitril/valsartán 49/51 mg y 97/103 mg cada 12 h; bisoprolol 1,25 y 10 mg al día; carvedilol 3,125 y 25 mg cada 12 h; metoprolol succinato 12,5 a 25 y 200 mg al día; espironolactona y eplerenona 25 y 50 mg al día; iSGLT2 10 mg al día. El ARM se inicia con filtrado de más de 30 mL/min/1,73 m² y potasio por debajo de 5,0 mEq/L, y se suspende si el potasio no puede mantenerse por debajo de 5,5 (AHA). Diurético de asa para la congestión (I C). En casos seleccionados: ARA-II si no tolera IECA ni sacubitril/valsartán (I B); ivabradina con FEVI de 35% o menos, ritmo sinusal y frecuencia de 70 o más pese al betabloqueador (IIa B); hidralazina con dinitrato de isosorbida en pacientes de raza negra (IIa B); vericiguat tras un empeoramiento (IIb B); digoxina en ritmo sinusal (IIb B).',
      tx_intervencionista: 'Los dispositivos se suman al tratamiento farmacológico, nunca lo sustituyen: desfibrilador y resincronización según la FEVI tras 3 meses de tratamiento óptimo y según el QRS (ver la ficha de dispositivos). La revascularización y la cirugía valvular según la causa.',
      criterios_uci: 'Cuando se descompensa con insuficiencia respiratoria o con hipoperfusión: ver las fichas de insuficiencia cardiaca aguda descompensada, edema agudo de pulmón y choque cardiogénico.',
      criterios_tips: 'Desfibrilador en prevención primaria con FEVI de 35% o menos tras al menos 3 meses de tratamiento óptimo (isquémica I A, no isquémica IIa A); resincronización con QRS de 150 ms o más y BRI (I A). Detalle en la ficha de resincronización y desfibrilador.',
      criterios_trasplante: 'Si cumple los cuatro criterios de insuficiencia cardiaca avanzada: ver la ficha de insuficiencia cardiaca avanzada.',
      seguimiento_hospitalario: 'Si ingresa, el tratamiento previo se continúa y se optimiza salvo contraindicación (AHA, 1 B-NR); retirar o reducir el betabloqueador durante el ingreso se asocia a peor evolución. El betabloqueador se inicia con cautela en el hospital una vez estabilizado. A DÓNDE LLEVA: las fichas de hiperpotasemia y deterioro renal, de ferropenia y de dispositivos.',
      seguimiento_ambulatorio: 'Titular cada fármaco a la dosis de los ensayos o a la máxima tolerada. Tolerar la caída inicial del filtrado con IECA, sacubitril/valsartán o iSGLT2 dentro de los márgenes aceptables. Buscar anemia y ferropenia periódicamente. Repetir la FEVI: si mejora a más de 40% es FEVI mejorada y el tratamiento se mantiene.',
      pronostico: 'Ha mejorado sustancialmente, sobre todo en la FEVI reducida, pero sigue siendo malo. En DAPA-HF la dapagliflozina redujo un 26% el combinado de empeoramiento de la insuficiencia cardiaca o muerte cardiovascular y redujo la mortalidad total; en EMPEROR-Reduced la empagliflozina redujo un 25% la muerte cardiovascular o la hospitalización por insuficiencia cardiaca.',
      algoritmo: [
        'Síntomas o signos con factores de riesgo o electrocardiograma anormal: péptido natriurético',
        'NT-proBNP de 125 o más, o BNP de 35 o más: ecocardiograma',
        'FEVI de 40% o menos: insuficiencia cardiaca con FEVI reducida',
        'Iniciar los cuatro pilares: IECA o sacubitril/valsartán, betabloqueador, ARM e iSGLT2, más diurético de asa si hay congestión',
        'Titular cada fármaco a la dosis objetivo o a la máxima tolerada',
        'Tras 3 meses de tratamiento óptimo con FEVI de 35% o menos: valorar desfibrilador y, con QRS de 130 ms o más en ritmo sinusal, resincronización',
        'Si persisten los síntomas: ivabradina, vericiguat, hidralazina con dinitrato o digoxina según el caso'
      ]
    },
    {
      nombre: 'Insuficiencia cardiaca con FEVI levemente reducida o mejorada',
      color: '#b0603a',
      definicion: 'Dos fenotipos que se definen por la trayectoria de la FEVI más que por un número aislado. LEVEMENTE REDUCIDA: síntomas o signos con FEVI de 41 a 49%; la ESC 2021 la renombró desde "rango medio" porque los pacientes de esa franja parecen beneficiarse de las terapias de la FEVI reducida. MEJORADA: FEVI previa de 40% o menos y una medida posterior de más de 40% (AHA 2022), que la Definición Universal de 2026 precisa como un aumento de 10 puntos.',
      fisiopatologia: 'La levemente reducida se parece más a la reducida que a la preservada, e incluye tanto a quien mejoró desde 40% o menos como a quien está cayendo desde 50% o más; por eso la trayectoria importa más que la cifra. En la mejorada, la Definición Universal distingue tres grados: mejoría (la FEVI sube pero persisten alteraciones estructurales o clínicas), remisión (FEVI normalizada con síntomas mínimos y biomarcadores estables, pero vulnerable a recaer) y recuperación (normalización sostenida de estructura, función, biomarcadores y síntomas), que alcanza una minoría.',
      epidemiologia: 'Los pacientes con FEVI levemente reducida son con más frecuencia varones y más jóvenes, tienen cardiopatía isquémica en el 50 al 60% y menos fibrilación auricular y comorbilidad no cardiaca. Su mortalidad ambulatoria es menor que la de la FEVI reducida y se parece a la de la preservada, pero quien progresa de levemente reducida a reducida tiene peor pronóstico.',
      factores_riesgo: [
        'Cardiopatía isquémica, presente en el 50 al 60%',
        'Sexo masculino y menor edad que en la FEVI preservada',
        'FEVI que viene de un valor reducido o que va cayendo desde uno preservado',
        'Retirada del tratamiento en la FEVI mejorada, que es la causa evitable de recaída'
      ],
      clinica: 'La de la insuficiencia cardiaca en general. En la FEVI mejorada el paciente puede estar asintomático, y precisamente por eso es la situación en la que más se tienta a retirar el tratamiento.',
      criterios_dx: 'LEVEMENTE REDUCIDA: síntomas o signos y FEVI de 41 a 49%. Los péptidos elevados y otra evidencia de cardiopatía estructural (aurícula izquierda grande, hipertrofia, alteración del llenado) hacen el diagnóstico más probable pero no son obligatorios si la medida de la FEVI es fiable. MEJORADA: FEVI previa de 40% o menos y una actual de más de 40%. La AHA pide repetir la FEVI en la levemente reducida para definir hacia dónde va.',
      laboratorio: 'BNP de 35 pg/mL o más, o NT-proBNP de 125 pg/mL o más, apoyan el diagnóstico de la levemente reducida sin ser imprescindibles. La misma analítica básica que en cualquier insuficiencia cardiaca, incluido el estado del hierro.',
      imagen: 'Ecocardiograma con FEVI seriada, porque la transición entre categorías es frecuente: tamaño de la aurícula izquierda, hipertrofia y marcadores de llenado.',
      complementarios: 'Los mismos estudios de causa que en la FEVI reducida, con la cardiopatía isquémica en primer lugar por su frecuencia.',
      dx_diferencial: 'Error de medida de la FEVI, por la variabilidad conocida del ecocardiograma. Y la confusión que más daño hace: llamar FEVI preservada a quien tuvo FEVI reducida y mejoró. La ESC lo dice expresamente: ese paciente tiene una insuficiencia cardiaca recuperada o con FEVI mejorada, no una FEVI preservada.',
      tx_medico: 'El control de la congestión con diuréticos y el de los factores de riesgo, como en cualquier insuficiencia cardiaca, y el seguimiento de la FEVI.',
      tx_farmacologico: 'LEVEMENTE REDUCIDA. ESC 2021: diuréticos para la congestión (I C), y pueden considerarse IECA, ARA-II, betabloqueador, ARM o sacubitril/valsartán (IIb C cada uno), porque no hay ningún ensayo prospectivo exclusivo de este grupo. AHA 2022: los iSGLT2 pueden ser beneficiosos para reducir hospitalizaciones y mortalidad cardiovascular (2a B-R, por el subgrupo de 1983 pacientes con FEVI de 41 a 49% de EMPEROR-Preserved), y el resto puede considerarse (2b B-NR), sobre todo con la FEVI en la parte baja de la franja. MEJORADA: el tratamiento de la FEVI reducida se mantiene aunque el paciente esté asintomático (AHA, 1 B-R; la ESC también lo recomienda).',
      tx_intervencionista: 'La ESC 2021 considera insuficiente la evidencia para indicar resincronización o desfibrilador en la FEVI levemente reducida.',
      criterios_uci: 'Los de la insuficiencia cardiaca aguda.',
      criterios_tips: 'No hay indicación establecida de resincronización ni de desfibrilador en este fenotipo.',
      criterios_trasplante: 'No aplica fuera de la evolución a insuficiencia cardiaca avanzada.',
      seguimiento_hospitalario: 'En el ingreso de un paciente con FEVI mejorada, el tratamiento se mantiene; una FEVI que vuelve a caer obliga a reclasificarlo y a reforzar el tratamiento de la FEVI reducida.',
      seguimiento_ambulatorio: 'Repetir la FEVI. En la mejorada, no retirar el tratamiento: en el ensayo abierto TRED-HF, retirar la medicación a pacientes con miocardiopatía dilatada que habían pasado de menos de 40% a 50% o más hizo recaer al 40% en 6 meses.',
      pronostico: 'Mejor que el de la FEVI reducida en la levemente reducida. En la mejorada, la mejoría de la FEVI no significa curación: siguen expuestos a una nueva disfunción ventricular y necesitan tratamiento y vigilancia continuados.',
      algoritmo: [
        'FEVI de 41 a 49% con síntomas o signos: FEVI levemente reducida',
        'FEVI previa de 40% o menos y actual de más de 40%: FEVI mejorada',
        'Diuréticos si hay congestión',
        'Levemente reducida: iSGLT2 (AHA 2a) y valorar el resto del tratamiento de la FEVI reducida (IIb)',
        'Mejorada: mantener todo el tratamiento de la FEVI reducida',
        'Repetir la FEVI para definir la trayectoria'
      ]
    },
    {
      nombre: 'Insuficiencia cardiaca con FEVI preservada',
      color: '#7a4a8c',
      definicion: 'Síntomas o signos de insuficiencia cardiaca con FEVI de 50% o más y evidencia objetiva de anomalías estructurales o funcionales compatibles con disfunción diastólica o presiones de llenado elevadas, incluidos los péptidos natriuréticos. Los tres elementos son obligatorios.',
      fisiopatologia: 'Es un síndrome heterogéneo al que contribuyen la hipertensión, la diabetes, la obesidad, la cardiopatía isquémica, la enfermedad renal crónica y causas específicas como la amiloidosis cardiaca. El paciente obeso con FEVI preservada tiene mecanismos fisiopatológicos propios. Una FEVI muy alta, por encima de 65 a 70%, debe hacer buscar amiloidosis o miocardiopatía hipertrófica, en las que la FEVI "supranormal" refleja un volumen telediastólico pequeño.',
      epidemiologia: 'Los pacientes son mayores y con más frecuencia mujeres, y tienen más fibrilación auricular, enfermedad renal crónica y comorbilidad no cardiovascular que los de FEVI reducida. Supone hasta la mitad de todos los pacientes con insuficiencia cardiaca, y la Definición Universal de 2026 subraya que su incidencia y prevalencia siguen aumentando.',
      factores_riesgo: [
        'Edad avanzada y sexo femenino',
        'Hipertensión arterial',
        'Obesidad',
        'Diabetes',
        'Fibrilación auricular',
        'Enfermedad renal crónica',
        'Amiloidosis cardiaca, que hay que buscar ante las banderas rojas'
      ],
      clinica: 'La de la insuficiencia cardiaca, con signos que pueden faltar en las fases tempranas. Banderas rojas de amiloidosis: presión normal baja en un hipertenso conocido, intolerancia a los betabloqueadores o a los IECA, síndrome del túnel carpiano bilateral, bajo voltaje en el electrocardiograma, y en el ecocardiograma engrosamiento del septo, de la pared posterior o del ventrículo derecho, aurículas grandes, derrame pericárdico pequeño o válvulas engrosadas.',
      criterios_dx: 'Enfoque simplificado de la ESC 2021: uno, síntomas y signos; dos, FEVI de 50% o más; tres, evidencia objetiva de presiones de llenado elevadas con los marcadores de la Tabla 9 (cuantos más, más probable). Si los marcadores de reposo son equívocos se recomienda una prueba de estrés diastólico. La prueba confirmatoria es la hemodinámica invasiva de esfuerzo: presión de enclavamiento de 15 mmHg o más en reposo o de 25 mmHg o más con el esfuerzo, o presión telediastólica del ventrículo izquierdo de 16 mmHg o más en reposo. Quien tuvo FEVI de 40% o menos y ahora tiene 50% o más NO es una FEVI preservada sino una mejorada.',
      laboratorio: 'NT-proBNP de más de 125 pg/mL en ritmo sinusal o de más de 365 pg/mL en fibrilación auricular; BNP de más de 35 pg/mL en ritmo sinusal o de más de 105 pg/mL en fibrilación auricular. Hasta el 20% de los pacientes con FEVI preservada comprobada invasivamente tiene péptidos por debajo de esos umbrales, sobre todo los obesos.',
      imagen: 'Ecocardiograma con los marcadores de la Tabla 9: índice de masa del ventrículo izquierdo de 95 g/m² o más en la mujer y de 115 g/m² o más en el varón; grosor parietal relativo de más de 0,42; volumen auricular izquierdo indexado de más de 34 mL/m² en ritmo sinusal (más de 40 en fibrilación auricular); cociente E/e prima en reposo de más de 9 (sensibilidad 78%, especificidad 59%; con un corte de 13 la sensibilidad baja a 46% y la especificidad sube a 86%); presión sistólica pulmonar de más de 35 mmHg; velocidad de regurgitación tricuspídea en reposo de más de 2,8 m/s. En el esfuerzo: E/e prima de 15 o más, o velocidad tricuspídea de más de 3,4 m/s. La ausencia de hipertrofia no excluye el diagnóstico.',
      complementarios: 'Ante la duda diagnóstica: prueba de esfuerzo cardiopulmonar, ecocardiograma de esfuerzo y hemodinámica invasiva. El cateterismo derecho puede considerarse para confirmar el diagnóstico en casos seleccionados (IIb C). Gammagrafía con bisfosfonatos marcados con tecnecio si se sospecha amiloidosis por transtiretina.',
      dx_diferencial: 'Las enfermedades que imitan el síndrome: enfermedad pulmonar, anemia, obesidad y desacondicionamiento (ESC). La Definición Universal añade la isquemia miocárdica y la enfermedad renal crónica con sobrecarga, y recuerda que en el obeso la exploración pierde especificidad y los péptidos pueden ser falsamente normales, de modo que la hemodinámica invasiva de esfuerzo puede ser la que decida.',
      tx_medico: 'Reducir el peso en el obeso y aumentar el ejercicio mejoran los síntomas y la capacidad de esfuerzo, y deben considerarse. Identificar y tratar la causa, los factores de riesgo y las comorbilidades: hipertensión, cardiopatía isquémica, amiloidosis, fibrilación auricular y valvulopatía.',
      tx_farmacologico: 'ESC 2021: se recomienda buscar y tratar la causa y las comorbilidades (I C) y usar diuréticos en el paciente congestivo (I C), preferiblemente de asa; ningún tratamiento había demostrado reducir de forma convincente la morbimortalidad, y la propia guía advertía que los ensayos con iSGLT2 estaban en curso. AHA 2022, que ya incorpora EMPEROR-Preserved: titular el tratamiento antihipertensivo hasta las metas (1 C-LD); los iSGLT2 pueden ser beneficiosos para reducir hospitalizaciones y mortalidad cardiovascular (2a B-R); el manejo de la fibrilación auricular puede mejorar los síntomas (2a C-EO); ARM, ARA-II o sacubitril/valsartán pueden considerarse en pacientes seleccionados, sobre todo con la FEVI en la parte baja del espectro (2b B-R); y los nitratos o los inhibidores de la fosfodiesterasa 5 para mejorar la actividad o la calidad de vida son ineficaces (3: sin beneficio).',
      tx_intervencionista: 'Los dispositivos de cortocircuito interauricular se consideraron seguros en un ensayo pero están en investigación, sin recomendación todavía. El tratamiento intervencionista es el de la causa (valvulopatía, revascularización).',
      criterios_uci: 'Los de la insuficiencia cardiaca aguda: la FEVI preservada se descompensa con frecuencia como edema agudo de pulmón hipertensivo.',
      criterios_tips: 'No hay indicación de resincronización ni de desfibrilador por el fenotipo en sí.',
      criterios_trasplante: 'La insuficiencia cardiaca avanzada puede darse también con FEVI preservada (por ejemplo, la amiloidosis), y entonces se aplican los cuatro criterios de avanzada.',
      seguimiento_hospitalario: 'Descongestión con diuréticos y control de la presión arterial y de la frecuencia en la fibrilación auricular. Revisar las banderas rojas de amiloidosis.',
      seguimiento_ambulatorio: 'Control estricto de la hipertensión y de las comorbilidades, pérdida de peso y ejercicio. Aproximadamente un tercio de quienes repiten el ecocardiograma por indicación clínica tiene una caída de la FEVI.',
      pronostico: 'Hasta la ESC 2021, ningún gran ensayo en FEVI preservada había alcanzado su objetivo primario (PEP-CHF, CHARM-Preserved, I-PRESERVE, TOPCAT, DIG-Preserved y PARAGON-HF). En EMPEROR-Preserved, la empagliflozina redujo un 21% el combinado de hospitalización por insuficiencia cardiaca o muerte cardiovascular, sobre todo a costa de un 29% menos de hospitalizaciones, sin beneficio en la mortalidad total.',
      algoritmo: [
        'Síntomas o signos con FEVI de 50% o más',
        'Descartar una FEVI previamente reducida: si la hubo, es FEVI mejorada',
        'Buscar marcadores objetivos: péptidos, masa y geometría del ventrículo, aurícula izquierda, E/e prima, presión pulmonar',
        'Si son equívocos: prueba de estrés diastólico o hemodinámica invasiva',
        'Buscar la causa, con la amiloidosis presente ante las banderas rojas',
        'Diuréticos para la congestión, control de la presión y de las comorbilidades, e iSGLT2 (AHA 2a)'
      ]
    },
    {
      nombre: 'Insuficiencia cardiaca aguda descompensada',
      color: '#8c3a34',
      definicion: 'La forma más frecuente de insuficiencia cardiaca aguda, entre el 50 y el 70% de las presentaciones: deterioro de inicio gradual, en días, por retención progresiva de líquido y congestión sistémica, casi siempre en un paciente con insuficiencia cardiaca previa de cualquier FEVI. La Definición Universal de 2026 la define por lo que exige: intensificar el tratamiento, sea subiendo el diurético, combinando diuréticos o iniciando el tratamiento de base.',
      fisiopatologia: 'Retención renal de sodio y agua sobre una disfunción del ventrículo izquierdo, con presión telediastólica y de enclavamiento elevadas y gasto bajo o normal. Unos factores extrínsecos la precipitan pero no la causan, y la gravedad depende de la interacción entre el desencadenante, el sustrato cardiaco y la comorbilidad. Las causas que hay que buscar y corregir en la primera hora se recuerdan como CHAMPIT: síndrome coronario agudo, emergencia hipertensiva, arritmia rápida o bradicardia grave, causa mecánica aguda, embolia pulmonar, infección (incluida la miocarditis) y taponamiento.',
      epidemiologia: 'Es una de las primeras causas de hospitalización a partir de los 65 años. La mortalidad hospitalaria va del 4 al 10%; la del primer año tras el alta, del 25 al 30%, y la de muerte o reingreso supera el 45%. El primer episodio tiene más mortalidad hospitalaria que la descompensación de una insuficiencia crónica, pero menos mortalidad y reingresos tras el alta.',
      factores_riesgo: [
        'Insuficiencia cardiaca crónica previa con cualquier FEVI',
        'Síndrome coronario agudo',
        'Emergencia hipertensiva',
        'Arritmias, sobre todo la fibrilación auricular rápida',
        'Infecciones',
        'Embolia pulmonar',
        'Mala adherencia al tratamiento'
      ],
      clinica: 'Congestión sistémica que se instala en días: aumento de peso, edemas, ortopnea, presión venosa yugular elevada. El perfil puede ser húmedo y caliente; si además hay hipoperfusión (extremidades frías, oliguria, confusión, presión diferencial estrecha) es húmedo y frío. La hipoperfusión no siempre se acompaña de hipotensión.',
      criterios_dx: 'Diagnóstico clínico apoyado en los péptidos cuando hay duda: un BNP por debajo de 100 pg/mL, un NT-proBNP por debajo de 300 pg/mL o un MR-proANP por debajo de 120 pmol/L la hacen improbable, y el NT-proBNP la confirma por encima de 450, 900 o 1800 pg/mL según la edad sea menor de 55, de 55 a 75 o mayor de 75 años. Electrocardiograma, ecocardiograma, radiografía y ecografía pulmonar. Y siempre la búsqueda del desencadenante con el CHAMPIT.',
      laboratorio: 'Troponina, creatinina, urea, electrolitos, TSH en el diagnóstico nuevo, dímero D si se sospecha embolia, procalcitonina si se sospecha neumonía (el antibiótico puede estar indicado por encima de 0,2 µg/L), lactato si hay hipoperfusión y gasometría si hay dificultad respiratoria. Antes del alta, estado del hierro y péptidos.',
      imagen: 'Ecocardiograma al ingreso para valorar la congestión, la función cardiaca y las causas mecánicas. Radiografía de tórax para la congestión y la infección pulmonar. Ecografía pulmonar para confirmar la congestión al ingreso y antes del alta.',
      complementarios: 'Pulsioximetría y monitorización electrocardiográfica continua en las primeras horas. Coronariografía si se sospecha síndrome coronario agudo y TC si se sospecha embolia pulmonar.',
      dx_diferencial: 'La neumonía y la exacerbación de la EPOC, que además elevan los péptidos. La embolia pulmonar. Y los imitadores de la Definición Universal: la enfermedad renal con sobrecarga de volumen, la insuficiencia hepática y la respiratoria, que provocan sobrecarga sin que el origen sea el miocardio.',
      tx_medico: 'Oxígeno solo si la saturación es menor del 90% o la PaO2 menor de 60 mmHg (I C): no se usa de rutina en el paciente sin hipoxemia porque produce vasoconstricción y reduce el gasto. Ventilación no invasiva con más de 25 respiraciones por minuto o saturación menor del 90% (IIa B). Tromboprofilaxis con heparina de bajo peso molecular si no está anticoagulado (I A). Los opioides no se recomiendan de rutina (III C).',
      tx_farmacologico: 'DIURÉTICO DE ASA intravenoso en todo paciente con sobrecarga (I C). Dosis inicial: de 1 a 2 veces la dosis oral diaria previa; si no tomaba diurético, 20 a 40 mg de furosemida o 10 a 20 mg de torasemida. En 2 o 3 bolos al día o en infusión continua, y no en un solo bolo diario, por la retención de sodio entre dosis. Se mide la respuesta a las 2 y a las 6 horas; si es insuficiente se duplica la dosis, y si sigue siéndolo se añade una tiazida (IIa B), metolazona o acetazolamida. La dosis máxima diaria de furosemida intravenosa suele ser de 400 a 600 mg, hasta 1000 mg con la función renal muy deteriorada. VASODILATADORES intravenosos con presión sistólica de más de 110 mmHg (IIb B). INOTRÓPICOS solo con presión sistólica por debajo de 90 e hipoperfusión que no responde (IIb C). El tratamiento oral de base se mantiene salvo inestabilidad, insuficiencia renal grave o hiperpotasemia. Digoxina en bolos de 0,25 a 0,5 mg si hay fibrilación auricular con más de 110 latidos por minuto pese al betabloqueador.',
      tx_intervencionista: 'Tratamiento urgente de la causa: angioplastia en el síndrome coronario agudo, pericardiocentesis en el taponamiento, cirugía de la causa mecánica. Terapia de reemplazo renal si hay resistencia a diuréticos o enfermedad renal terminal (IIa).',
      criterios_uci: 'Inestabilidad hemodinámica, insuficiencia respiratoria que exige ventilación no invasiva o intubación, e hipoperfusión: ingreso en una unidad de cuidados intensivos o coronarios, según el grado de inestabilidad y la gravedad.',
      criterios_tips: 'Antes del alta, revisar si el paciente con FEVI reducida tiene indicación de dispositivo.',
      criterios_trasplante: 'Más de una hospitalización no programada en 12 meses pese al tratamiento óptimo es uno de los cuatro criterios de insuficiencia cardiaca avanzada.',
      seguimiento_hospitalario: 'Creatinina y electrolitos al menos cada 24 horas durante la diuresis intravenosa. Bajar el diurético de forma progresiva cuando el balance negativo es significativo y pasar a vía oral a la menor dosis que evite la congestión. Comprobar antes del alta que no queda congestión (I C) e iniciar el tratamiento oral de base (I C). Hierro intravenoso si hay ferropenia (IIa B). A DÓNDE LLEVA: las fichas de resistencia a diuréticos, de hiperpotasemia y deterioro renal, y de choque cardiogénico.',
      seguimiento_ambulatorio: 'Una visita a las 1 o 2 semanas del alta (I C): signos de congestión, volemia, presión arterial, frecuencia cardiaca, función renal, electrolitos y, si es posible, péptidos; hierro y función hepática si no se midieron antes. Ahí se inicia o se titula el tratamiento de base.',
      pronostico: 'La congestión persistente al alta es uno de los principales predictores de muerte y reingreso. La mortalidad tras el alta al año ronda el 25 al 30%.',
      algoritmo: [
        'Sospecha de insuficiencia cardiaca aguda: electrocardiograma, pulsioximetría, analítica, ecocardiograma y péptidos si hay duda',
        'Buscar y tratar en la primera hora el desencadenante: CHAMPIT',
        'Oxígeno solo con saturación menor del 90%; ventilación no invasiva si hay dificultad respiratoria',
        'Diurético de asa intravenoso: 1 a 2 veces la dosis oral, o 20 a 40 mg de furosemida si no la tomaba',
        'A las 2 h sodio urinario y a las 6 h diuresis: si no alcanzan los umbrales, duplicar la dosis',
        'Si con la dosis duplicada no responde: añadir tiazida, metolazona o acetazolamida',
        'Alta sin congestión, con el tratamiento de base iniciado y visita en 1 a 2 semanas'
      ]
    },
    {
      nombre: 'Edema agudo de pulmón',
      color: '#3d5a73',
      definicion: 'Presentación de la insuficiencia cardiaca aguda dominada por la congestión pulmonar, de inicio rápido, en horas. Sus criterios clínicos son disnea con ortopnea, insuficiencia respiratoria con hipoxemia o hipercapnia, taquipnea de más de 25 respiraciones por minuto y aumento del trabajo respiratorio.',
      fisiopatologia: 'Aumento de la poscarga o disfunción diastólica predominante del ventrículo izquierdo, o valvulopatía, que redistribuyen el líquido hacia el pulmón y causan insuficiencia respiratoria aguda. La presión de llenado está elevada con gasto normal y presión sistólica normal o alta. Por eso, cuando el edema se debe a la poscarga y a la redistribución sin gran acumulación de líquido, los vasodilatadores pueden ser más eficaces que los diuréticos.',
      epidemiologia: 'Es una de las cuatro presentaciones de la insuficiencia cardiaca aguda y la de instauración más rápida. En unos pocos casos de insuficiencia cardiaca avanzada se asocia a gasto bajo.',
      factores_riesgo: [
        'Emergencia hipertensiva',
        'Disfunción diastólica con hipertrofia ventricular',
        'Valvulopatía',
        'Síndrome coronario agudo',
        'Arritmia rápida'
      ],
      clinica: 'Disnea intensa de instauración en horas, ortopnea, taquipnea de más de 25 respiraciones por minuto, uso de musculatura accesoria, crepitantes y saturación baja, con presión arterial normal o alta. Es habitualmente húmedo y caliente.',
      criterios_dx: 'Los criterios clínicos de la ESC 2021: disnea con ortopnea, insuficiencia respiratoria (hipoxemia o hipercapnia), más de 25 respiraciones por minuto y aumento del trabajo respiratorio. Los péptidos pueden salir bajos en el edema pulmonar fulminante, así que un péptido normal no lo descarta en esa situación.',
      laboratorio: 'Gasometría arterial, porque hay dificultad respiratoria y hace falta conocer la PaO2, la PaCO2 y el pH. Troponina para el síndrome coronario agudo. Los péptidos pueden ser desproporcionadamente bajos en el edema fulminante.',
      imagen: 'Radiografía de tórax y ecografía pulmonar para confirmar la congestión; ecocardiograma para la función ventricular y las causas valvulares o mecánicas.',
      complementarios: 'Monitorización de la presión arterial durante la ventilación no invasiva, que reduce el retorno venoso y la precarga.',
      dx_diferencial: 'La neumonía, la exacerbación grave de la EPOC o del asma y la embolia pulmonar.',
      tx_medico: 'Tres medidas, si están indicadas. Primero, oxígeno en forma de presión positiva continua, ventilación no invasiva o cánula nasal de alto flujo; la ventilación no invasiva se inicia cuanto antes con dificultad respiratoria (IIa B) para reducir la intubación, con cautela si hay hipotensión o disfunción del ventrículo derecho. Segundo, diuréticos intravenosos. Tercero, vasodilatadores intravenosos si la presión sistólica es alta. Intubación si la insuficiencia respiratoria progresa pese al oxígeno o a la ventilación no invasiva (I C).',
      tx_farmacologico: 'Diurético de asa intravenoso (I). Vasodilatadores intravenosos con presión sistólica de 110 mmHg o más (IIb B): nitratos, que actúan sobre todo en las venas, o nitroprusiato, más equilibrado; la nitroglicerina puede darse en bolos de 1 a 2 mg en el edema con hipertensión grave, con mucha cautela en la hipertrofia ventricular o la estenosis aórtica grave. Dos ensayos no mostraron ventaja de la vasodilatación intensiva frente a dosis altas de diurético, así que no se puede recomendar una pauta basada en vasodilatadores sobre la habitual. Los opioides no se recomiendan de rutina (III C): la morfina se ha asociado a más ventilación mecánica, más ingresos en cuidados intensivos y más mortalidad.',
      tx_intervencionista: 'El de la causa. Si se asocia a gasto bajo en la insuficiencia avanzada, inotrópicos, vasopresores o asistencia circulatoria.',
      criterios_uci: 'Insuficiencia respiratoria que requiere ventilación no invasiva o intubación, o signos de hipoperfusión.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Saturación, frecuencia respiratoria, gasometría y presión arterial frecuentes mientras dura el soporte ventilatorio; retirar la ventilación no invasiva cuando ceda la dificultad respiratoria.',
      seguimiento_ambulatorio: 'El del fenotipo de FEVI de base y el control estricto de la hipertensión.',
      pronostico: 'Depende de la causa y de la FEVI de base.',
      algoritmo: [
        'Disnea con ortopnea, más de 25 respiraciones por minuto, hipoxemia y trabajo respiratorio aumentado',
        'Oxígeno, y ventilación no invasiva cuanto antes si hay dificultad respiratoria',
        'Presión sistólica de 110 o más: diurético de asa y vasodilatador intravenoso',
        'Signos de hipoperfusión: diurético de asa con inotrópicos o vasopresores',
        'Insuficiencia respiratoria progresiva: intubación'
      ]
    },
    {
      nombre: 'Insuficiencia cardiaca derecha aguda aislada',
      color: '#2e6b6b',
      definicion: 'Presentación de la insuficiencia cardiaca aguda con aumento de la presión del ventrículo y de la aurícula derechos y congestión sistémica, por disfunción del ventrículo derecho o hipertensión pulmonar precapilar. Puede comprometer además el llenado del ventrículo izquierdo y reducir el gasto sistémico por interdependencia ventricular.',
      fisiopatologia: 'El ventrículo derecho cambia su mecánica ante una sobrecarga de presión o de volumen. La causa principal de la insuficiencia derecha crónica es la hipertensión pulmonar por disfunción izquierda; otras son el infarto, la miocardiopatía arritmogénica del ventrículo derecho y la valvulopatía. En la presentación aguda hay que descartar primero el síndrome coronario agudo con afectación del ventrículo derecho y la embolia pulmonar, porque tienen tratamiento específico.',
      epidemiologia: 'La causa principal de la insuficiencia derecha crónica es la hipertensión pulmonar inducida por la disfunción del ventrículo izquierdo. En la presentación aguda, la guía no da su frecuencia; lo que subraya es que la sobrecarga de líquidos y la ventilación con presión positiva pueden empeorarla.',
      factores_riesgo: [
        'Síndrome coronario agudo con afectación del ventrículo derecho',
        'Embolia pulmonar aguda',
        'Hipertensión pulmonar por disfunción ventricular izquierda',
        'Miocardiopatía arritmogénica del ventrículo derecho',
        'Valvulopatía'
      ],
      clinica: 'Presión venosa central elevada, ingurgitación yugular, hepatomegalia y edemas, a menudo con hipoperfusión sistémica y presión sistólica baja.',
      criterios_dx: 'Valoración cuantitativa de la función global del ventrículo derecho, casi siempre por ecocardiografía, con al menos uno de estos parámetros: cambio fraccional de área, excursión sistólica del plano anular tricuspídeo (TAPSE) y velocidad sistólica S prima del Doppler tisular.',
      laboratorio: 'Lactato si hay hipoperfusión; troponina y dímero D para el síndrome coronario agudo y la embolia pulmonar; creatinina y función hepática por la congestión sistémica.',
      imagen: 'Ecocardiograma con los parámetros de función del ventrículo derecho y estimación de la presión pulmonar. TC si se sospecha embolia pulmonar.',
      complementarios: 'Electrocardiograma para el infarto del ventrículo derecho. Cateterismo derecho si hay dudas sobre la hipertensión pulmonar.',
      dx_diferencial: 'El taponamiento cardiaco y la pericarditis constrictiva, que también elevan la presión venosa con pulmón limpio.',
      tx_medico: 'Optimizar el estado de volumen: si no hay congestión marcada, puede considerarse una administración prudente de líquidos. La ventilación con presión positiva aumenta la resistencia vascular pulmonar y la poscarga del ventrículo derecho, y puede ser perjudicial.',
      tx_farmacologico: 'Diuréticos de asa para la congestión venosa marcada (I). Si hay hipoperfusión o hipotensión persistente, vasopresores o inotrópicos (IIb); se prefieren los inotrópicos que reducen las presiones de llenado (levosimendán, inhibidores de la fosfodiesterasa 3) y, como pueden agravar la hipotensión, pueden combinarse con noradrenalina. Inotrópicos solos si hay hipoperfusión sin hipotensión.',
      tx_intervencionista: 'Tratamiento específico de la causa: reperfusión del infarto del ventrículo derecho o tratamiento de la embolia pulmonar. Si no hay mejoría: asistencia ventricular derecha o terapia de reemplazo renal, o cuidados paliativos.',
      criterios_uci: 'Hipoperfusión o hipotensión persistente que exigen vasopresores o inotrópicos.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La insuficiencia derecha aislada, como en la miocardiopatía arritmogénica, cuenta como disfunción cardiaca grave entre los criterios de insuficiencia cardiaca avanzada.',
      seguimiento_hospitalario: 'Presión venosa central, diuresis, presión arterial, lactato y función renal y hepática.',
      seguimiento_ambulatorio: 'Según la causa: hipertensión pulmonar, miocardiopatía o valvulopatía.',
      pronostico: 'Depende de la causa y de la reversibilidad de la sobrecarga del ventrículo derecho.',
      algoritmo: [
        'Presión venosa central alta con congestión sistémica: evaluar el ventrículo derecho',
        'Descartar síndrome coronario agudo con afectación derecha y embolia pulmonar: tratamiento específico',
        'Sin congestión marcada: líquidos con prudencia',
        'Congestión marcada: diurético de asa',
        'Hipoperfusión o hipotensión persistente: vasopresores o inotrópicos',
        'Sin mejoría: asistencia ventricular derecha, reemplazo renal o cuidados paliativos'
      ]
    },
    {
      nombre: 'Resincronización y desfibrilador implantable',
      color: '#5c3d8c',
      definicion: 'Los dos dispositivos que reducen la mortalidad en la insuficiencia cardiaca con FEVI reducida. El desfibrilador implantable reduce la muerte súbita arrítmica; la resincronización cardiaca corrige la disincronía y reduce la morbimortalidad. Los dos se indican DESPUÉS de optimizar el tratamiento farmacológico, que es la base y no se sustituye.',
      fisiopatologia: 'La disincronía del bloqueo de rama izquierda empeora la función de un ventrículo ya dañado, y el remodelado inverso es uno de los mecanismos principales de la resincronización. La estimulación del ventrículo derecho puede agravar la disincronía cuando la FEVI está reducida. El desfibrilador trata la taquiarritmia ventricular, pero en la insuficiencia moderada o grave la reducción de la muerte súbita puede verse contrarrestada por más muertes por fallo de bomba.',
      epidemiologia: 'En el ensayo DANISH, en miocardiopatía no isquémica, solo 70 de 1116 pacientes tuvieron muerte súbita en 5 años: el desfibrilador la redujo poco y no mejoró la mortalidad total, aunque un subgrupo sugirió beneficio por debajo de los 70 años. El paciente isquémico tiene más riesgo de muerte súbita y, por tanto, más beneficio absoluto. Dos ensayos no mostraron beneficio del desfibrilador implantado en los 40 días siguientes a un infarto.',
      factores_riesgo: [
        'FEVI de 35% o menos tras al menos 3 meses de tratamiento óptimo',
        'Etiología isquémica, con mayor beneficio absoluto del desfibrilador',
        'QRS de 150 ms o más con morfología de bloqueo de rama izquierda, el mejor candidato a resincronización',
        'Sexo femenino, con mejor respuesta a la resincronización',
        'Laminopatías y sarcoidosis, de alto riesgo de muerte súbita aun siendo no isquémicas'
      ],
      clinica: 'Insuficiencia cardiaca sintomática en clase NYHA II o III con FEVI reducida persistente pese al tratamiento.',
      criterios_dx: 'DESFIBRILADOR. Prevención secundaria tras una arritmia ventricular con inestabilidad, sin causa reversible y fuera de las 48 h de un infarto, con esperanza de vida de más de un año (I A). Prevención primaria con NYHA II o III, FEVI de 35% o menos tras al menos 3 meses de tratamiento óptimo y esperanza de vida claramente superior a un año con buena función: isquémica (I A), no isquémica (IIa A). No en los 40 días tras un infarto (III A), ni en NYHA IV refractaria salvo candidato a resincronización, asistencia o trasplante (III C). RESINCRONIZACIÓN en ritmo sinusal con FEVI de 35% o menos pese al tratamiento: QRS de 150 ms o más con BRI (I A); de 150 o más sin BRI (IIa B); de 130 a 149 con BRI (IIa B); de 130 a 149 sin BRI (IIb B); por debajo de 130, no recomendada (III A) salvo bloqueo AV de alto grado con indicación de estimulación, en el que se prefiere a la estimulación derecha (I A).',
      laboratorio: 'Ninguna cifra de laboratorio indica el dispositivo. La función renal sí pesa en la decisión: en la disfunción renal grave el beneficio del desfibrilador puede reducirse por el riesgo competitivo de muerte no arrítmica.',
      imagen: 'Ecocardiograma con la FEVI tras al menos 3 meses de tratamiento óptimo, que es el momento de decidir. La resonancia con la carga de cicatriz puede ayudar a estratificar el riesgo en la miocardiopatía no isquémica; la cicatriz extensa reduce la mejoría de la FEVI con la resincronización, pero no predice con fiabilidad menos beneficio clínico.',
      complementarios: 'Electrocardiograma de 12 derivaciones con la anchura y la morfología del QRS. Tras la resincronización, la proporción de estimulación biventricular: con captura por debajo del 98%, el pronóstico empeora en los estudios observacionales.',
      dx_diferencial: 'La FEVI que todavía puede mejorar con el tratamiento: por eso se exige un mínimo de 3 meses de tratamiento óptimo antes de decidir un desfibrilador en prevención primaria.',
      tx_medico: 'Informar al paciente del propósito del dispositivo, de las complicaciones, de las implicaciones para conducir, del riesgo de descargas inapropiadas y de las circunstancias en que podría desactivarse o retirarse, e implicarlo en la decisión.',
      tx_farmacologico: 'El dispositivo no sustituye a los cuatro pilares. Tras implantar una resincronización conviene revisar el diurético, porque puede hacer falta reducirlo o suspenderlo, y aprovechar para seguir optimizando el tratamiento. Los antiarrítmicos pueden reducir las taquiarritmias, pero no reducen la mortalidad total y pueden aumentarla.',
      tx_intervencionista: 'Resincronización con desfibrilador o con marcapasos: el único ensayo que las comparó no mostró diferencias de morbimortalidad; si el paciente va a recibir un desfibrilador y está en ritmo sinusal con BRI, la resincronización con desfibrilador debe considerarse con QRS de 130 a 149 ms y se recomienda con 150 ms o más. Pasar a resincronización al portador de marcapasos o desfibrilador que empeora con mucha estimulación derecha (IIa B). El desfibrilador subcutáneo es tan eficaz como el transvenoso y puede preferirse con mal acceso venoso o tras una infección, pero no estimula ni resincroniza. El desfibrilador portátil puede considerarse por un tiempo limitado o como puente (IIb B).',
      criterios_uci: 'No aplica por el dispositivo en sí.',
      criterios_tips: 'La tabla de clases por QRS y por etiología, que es lo que la calculadora de este tema aplica.',
      criterios_trasplante: 'El paciente en NYHA IV refractaria no es candidato a desfibrilador salvo que lo sea a resincronización, asistencia ventricular o trasplante.',
      seguimiento_hospitalario: 'Control del dispositivo tras el implante y de la proporción de estimulación biventricular.',
      seguimiento_ambulatorio: 'Programación conservadora, con demoras largas entre la detección y la descarga, que reduce mucho las descargas inapropiadas. El recambio del generador no es automático: lo evalúa un cardiólogo con experiencia, porque los objetivos pueden haber cambiado (IIa B). Las conversaciones sobre la desactivación deben tenerse a tiempo con el paciente y su familia.',
      pronostico: 'La resincronización reduce la morbilidad y la mortalidad y mejora la función cardiaca y la calidad de vida en los pacientes bien seleccionados. En el paciente bien tratado, el beneficio adicional del desfibrilador es menor que en los ensayos originales, anteriores al sacubitril/valsartán y a los iSGLT2.',
      algoritmo: [
        'Optimizar el tratamiento farmacológico durante al menos 3 meses',
        'Repetir la FEVI: si sigue en 35% o menos, valorar dispositivo',
        'Ritmo sinusal con QRS de 130 ms o más: resincronización según anchura y morfología',
        'QRS por debajo de 130 ms sin indicación de estimulación: desfibrilador si procede, sin resincronización',
        'Isquémica (I A) o no isquémica (IIa A): desfibrilador si la esperanza de vida supera un año con buena función',
        'Nunca desfibrilador en los 40 días tras un infarto'
      ]
    },
    {
      nombre: 'Insuficiencia cardiaca avanzada y terapias avanzadas',
      color: '#6b4a2e',
      definicion: 'Insuficiencia cardiaca en la que se cumplen los cuatro criterios de la ESC pese al tratamiento óptimo: síntomas graves y persistentes, disfunción cardiaca grave, episodios repetidos de congestión, bajo gasto o arritmias malignas, y capacidad de ejercicio gravemente reducida. Corresponde al estadio D de la AHA y de la Definición Universal. La visión desde las miocardiopatías está en la ficha de insuficiencia cardiaca avanzada refractaria del tema de Miocardiopatías; esta ficha se ocupa de la derivación y de las terapias.',
      fisiopatologia: 'La enfermedad sigue un patrón de declive gradual salpicado de episodios de deterioro agudo, que acaba en muerte súbita o en muerte por insuficiencia progresiva. La disfunción renal y la resistencia a los diuréticos de asa caracterizan a menudo esta fase.',
      epidemiologia: 'Con las asistencias de flujo continuo actuales, la supervivencia fue del 80% al año y del 70% a los 2 años; con la asistencia centrífuga de levitación magnética, del 84,5% a los 2 años en MOMENTUM 3. Tras el trasplante, la supervivencia al año ronda el 90% con una mediana de 12,5 años. Pese a los múltiples marcadores pronósticos, los pacientes suelen derivarse tarde.',
      factores_riesgo: [
        'Hospitalizaciones repetidas pese al tratamiento óptimo',
        'Necesidad de diuréticos intravenosos a dosis altas o de combinaciones de diuréticos',
        'Dependencia de inotrópicos',
        'Disfunción orgánica progresiva renal o hepática por hipoperfusión',
        'Intolerancia al tratamiento de base'
      ],
      clinica: 'Síntomas en reposo o con mínimo esfuerzo, congestión que reaparece, caquexia. Los perfiles INTERMACS la estratifican del 1 (choque cardiogénico crítico) al 7 (NYHA III avanzada sin inestabilidad reciente).',
      criterios_dx: 'Los cuatro criterios de la ESC 2021 deben estar todos presentes pese al tratamiento óptimo: NYHA III avanzada o IV; disfunción grave (FEVI de 30% o menos, insuficiencia derecha aislada, valvulopatía o cardiopatía congénita graves no operables, o péptidos persistentemente altos con disfunción diastólica grave); congestión que exige diuréticos intravenosos a dosis altas, bajo gasto que exige inotrópicos o arritmias malignas, con más de una visita o ingreso no programado en 12 meses; e incapacidad de ejercicio, menos de 300 m en la prueba de 6 minutos o consumo pico por debajo de 12 mL/kg/min o del 50% del predicho. La AHA subraya que la definición se centra en los síntomas refractarios y no solo en la función, y que incluye FEVI no reducidas.',
      laboratorio: 'Péptidos persistentemente altos o en ascenso, y deterioro progresivo de la función renal o hepática por hipoperfusión.',
      imagen: 'Ecocardiograma con atención a la función del ventrículo derecho y a la insuficiencia tricuspídea: su afectación grave descarta la asistencia ventricular izquierda.',
      complementarios: 'Prueba de esfuerzo cardiopulmonar (I C) y cateterismo derecho (I C) en la evaluación para trasplante o asistencia circulatoria.',
      dx_diferencial: 'La descompensación por una causa corregible (mala adherencia, isquemia, arritmia, infección) antes de etiquetar la insuficiencia como avanzada.',
      tx_medico: 'Derivación a tiempo a una unidad especializada en insuficiencia cardiaca, si es coherente con los objetivos del paciente (AHA, 1 C-LD), en una red entre centros de distinta complejidad. Cuidados paliativos integrados desde el diagnóstico de la fase avanzada: evaluación frecuente de síntomas, apoyo psicológico y espiritual, y planificación anticipada que incluya el lugar de la muerte, la reanimación y la desactivación de dispositivos. La consulta de paliativos es parte del protocolo antes de una asistencia o de un trasplante.',
      tx_farmacologico: 'Los inotrópicos mejoran la hemodinámica pero pueden favorecer la isquemia y las arritmias; pueden usarse de forma continua como puente a asistencia o trasplante (IIb C), como tratamiento paliativo de los síntomas, o de forma intermitente en el ambulatorio para mejorar la clase funcional y la calidad de vida. Ante la resistencia a diuréticos, duplicar primero el diurético de asa y después añadir una tiazida o metolazona. Para la disnea pueden considerarse opioides en dosis repetidas, aunque su eficacia no está demostrada, y las benzodiacepinas como segunda o tercera línea.',
      tx_intervencionista: 'ASISTENCIA VENTRICULAR DE LARGA DURACIÓN: debe considerarse como terapia de destino en la FEVI reducida avanzada que no es candidata a trasplante y no tiene disfunción derecha grave (IIa A), y como puente al trasplante (IIa B). Son candidatos quienes, con síntomas graves pese al tratamiento óptimo y sin disfunción derecha grave, tienen al menos uno de estos: FEVI por debajo de 25% con consumo pico por debajo de 12 mL/kg/min o del 50%; tres o más hospitalizaciones en 12 meses sin desencadenante claro; dependencia de inotrópicos o de asistencia temporal; o disfunción orgánica progresiva por bajo gasto. Exige buena adherencia, capacidad de manejar el dispositivo y apoyo psicosocial (I C). Terapia de reemplazo renal en la sobrecarga refractaria con insuficiencia renal terminal (IIa C) y ultrafiltración en la sobrecarga que no responde a diuréticos (IIb C).',
      criterios_uci: 'Los perfiles INTERMACS 1 y 2, que necesitan intervención en horas o en pocos días.',
      criterios_tips: 'La asistencia ventricular izquierda es el dispositivo de esta fase; sus contraindicaciones mayores son la imposibilidad de anticoagulación crónica, la infección, la disfunción renal grave y las arritmias ventriculares.',
      criterios_trasplante: 'El trasplante cardiaco sigue siendo el patrón de referencia y se recomienda en la insuficiencia avanzada refractaria al tratamiento médico y de dispositivos sin contraindicaciones absolutas (I C). Contraindicaciones: infección activa, enfermedad arterial periférica o cerebrovascular grave, e hipertensión pulmonar irreversible con fármacos, en la que puede implantarse una asistencia para revertir la resistencia vascular y reevaluar.',
      seguimiento_hospitalario: 'Monitorización hemodinámica y de la función orgánica mientras se decide entre puente, destino, trasplante o paliación.',
      seguimiento_ambulatorio: 'Valoración periódica de síntomas con escalas como la de Edmonton, y revisión de las decisiones anticipadas, que deben documentarse y comunicarse a todo el equipo.',
      pronostico: 'Con las asistencias de flujo continuo actuales, la supervivencia a 2 años es comparable a la del trasplante, aunque los eventos adversos (ictus, hemorragia, infección del dispositivo) reducen la calidad de vida. El trasplante sigue siendo el patrón de referencia.',
      algoritmo: [
        'Síntomas graves pese al tratamiento óptimo: comprobar los cuatro criterios de avanzada',
        'Descartar y corregir causas reversibles de descompensación',
        'Derivar a una unidad de insuficiencia cardiaca avanzada y valorar el perfil INTERMACS',
        'Candidato a trasplante: trasplante, o asistencia como puente',
        'No candidato a trasplante y sin disfunción derecha grave: asistencia ventricular como destino',
        'Sin opción de terapia avanzada: cuidados paliativos'
      ]
    },
    {
      nombre: 'Resistencia a diuréticos y congestión persistente',
      color: '#8a6a1f',
      definicion: 'Complicación de la insuficiencia cardiaca aguda descompensada (ver la tarjeta correspondiente): respuesta insuficiente al diurético de asa intravenoso, medida como un sodio urinario por debajo de 50 a 70 mEq/L a las 2 horas o una diuresis por debajo de 100 a 150 mL por hora en las primeras 6 horas, o congestión que persiste al alta.',
      fisiopatologia: 'No repite el mecanismo de la descompensación. Lo específico: el bolo diario único deja periodos sin efecto en los que el riñón retiene sodio tras cada dosis; las dosis altas pueden activar más el sistema neurohormonal y alterar los electrolitos; y en la insuficiencia avanzada la disfunción renal y la resistencia al diurético de asa suelen ir juntas.',
      epidemiologia: 'Una proporción importante de los pacientes ingresados se va de alta con poca o ninguna pérdida de peso y, sobre todo, con congestión persistente.',
      factores_riesgo: [
        'Pauta de un solo bolo diario',
        'Enfermedad renal crónica',
        'Insuficiencia cardiaca avanzada',
        'Dosis inicial insuficiente frente a la dosis oral previa'
      ],
      clinica: 'Persistencia de edemas, ortopnea, presión venosa elevada o congestión en la ecografía pulmonar pese al diurético intravenoso.',
      criterios_dx: 'Respuesta insuficiente: sodio urinario por debajo de 50 a 70 mEq/L a las 2 horas o diuresis por debajo de 100 a 150 mL por hora en las primeras 6 horas. Resistencia: diuresis de menos de 100 mL por hora pese a duplicar la dosis del diurético de asa.',
      laboratorio: 'Sodio urinario en muestra aislada a las 2 horas, o a las 6. Creatinina y electrolitos al menos cada 24 horas mientras dura la diuresis intravenosa. Las subidas pequeñas y transitorias de la creatinina durante la descongestión no se asocian a peor evolución si el paciente termina sin congestión.',
      imagen: 'Ecografía pulmonar antes del alta para confirmar que no queda congestión.',
      complementarios: 'Diuresis horaria y balance de líquidos.',
      dx_diferencial: 'La hipovolemia por exceso de diurético, en la que la conducta es la contraria: reducir o suspender el diurético. Y la sobrecarga por una causa no cardiaca.',
      tx_medico: 'Balance diario y peso. Evitar el alta con congestión persistente.',
      tx_farmacologico: 'Duplicar la dosis intravenosa del diurético de asa y volver a medir la respuesta (ESC; la AHA lo considera razonable, 2a B-NR). Si con la dosis duplicada sigue sin responder, añadir un diurético con otro sitio de acción: tiazida (IIa B), metolazona o acetazolamida, con vigilancia estrecha de electrolitos y función renal. La dosis máxima diaria de furosemida intravenosa suele ser de 400 a 600 mg, hasta 1000 mg con la función renal muy deteriorada. El ARM y los iSGLT2 añaden efecto diurético.',
      tx_intervencionista: 'Terapia de reemplazo renal en la resistencia a diuréticos o la enfermedad renal terminal (IIa). Ultrafiltración en la sobrecarga refractaria (IIb C).',
      criterios_uci: 'Sobrecarga refractaria con deterioro orgánico o necesidad de reemplazo renal.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Los episodios de congestión que exigen diuréticos intravenosos a dosis altas o combinaciones son uno de los criterios de insuficiencia cardiaca avanzada.',
      seguimiento_hospitalario: 'Bajar el diurético de forma progresiva cuando el balance negativo es significativo y pasar a la dosis oral más baja que evite la congestión. El plan de alta debe incluir cómo ajustar el diurético (AHA, 1 B-NR).',
      seguimiento_ambulatorio: 'Visita en 1 a 2 semanas con valoración de la congestión, y autoajuste del diurético por el paciente según los síntomas y el peso.',
      pronostico: 'La congestión persistente antes del alta se asocia a más reingresos y más mortalidad.',
      algoritmo: [
        'Diurético de asa intravenoso a 1 a 2 veces la dosis oral previa',
        'Sodio urinario a las 2 h y diuresis horaria hasta las 6 h',
        'Si no alcanza los umbrales: duplicar la dosis y repetir la medida',
        'Si sigue por debajo de 100 mL/h: añadir tiazida, metolazona o acetazolamida',
        'Refractario: reemplazo renal o ultrafiltración',
        'Alta sin congestión y con plan de ajuste del diurético'
      ]
    },
    {
      nombre: 'Hiperpotasemia y deterioro renal con el tratamiento',
      color: '#9c3a52',
      definicion: 'Complicación del tratamiento de la insuficiencia cardiaca con FEVI reducida (ver la tarjeta correspondiente): potasio de más de 5 mmol/L, leve de más de 5,0 a menos de 5,5, moderada de 5,5 a 6,0 y grave de más de 6,0; y subida de creatinina con el bloqueo neurohormonal, que hay que distinguir de un verdadero daño renal.',
      fisiopatologia: 'No repite el mecanismo de la insuficiencia cardiaca. Lo específico: los inhibidores del sistema renina-angiotensina-aldosterona, la enfermedad renal crónica y el aumento de la absorción elevan el potasio. Al iniciar IECA, sacubitril/valsartán o iSGLT2, la caída de la presión de filtración glomerular baja el filtrado y sube la creatinina, pero el cambio suele ser transitorio y se acompaña de un deterioro renal más lento a largo plazo.',
      epidemiologia: 'La prevalencia en un momento dado es menor del 5%, pero la incidencia llega al 40% en la insuficiencia crónica y al 73% en la enfermedad renal crónica en alrededor de un año. Con sacubitril/valsartán la hiperpotasemia grave fue menos frecuente que con enalapril. La disfunción renal y la hiperpotasemia son las causas principales de infrautilización del bloqueo neurohormonal, sobre todo del ARM. La hipopotasemia, en cambio, aparece hasta en el 50%, inducida por los diuréticos.',
      factores_riesgo: [
        'Enfermedad renal crónica',
        'Diabetes',
        'ARM asociado a IECA, ARA-II o sacubitril/valsartán',
        'Potasio basal de 5,0 mEq/L o más, o filtrado de 30 mL/min/1,73 m² o menos, al plantear el ARM'
      ],
      clinica: 'Casi siempre asintomática y de diagnóstico analítico. La hipopotasemia de los diuréticos puede causar arritmias ventriculares letales.',
      criterios_dx: 'Hiperpotasemia: potasio de más de 5 mmol/L, con los tres grados. Subida ACEPTABLE de creatinina al iniciar el tratamiento: menos del 50% sobre la basal mientras siga por debajo de 3 mg/dL (266 µmol/L), o caída del filtrado de menos del 10% mientras siga por encima de 25 mL/min/1,73 m². Fuera de esos márgenes, buscar otra causa de deterioro renal.',
      laboratorio: 'Potasio, creatinina y filtrado al iniciar el ARM y de forma estrecha después (AHA). La relación del potasio con la mortalidad es en U, con el menor riesgo entre 4 y 5 mmol/L.',
      imagen: 'No aplica de rutina; ecografía renal si el deterioro renal no se explica por el tratamiento.',
      complementarios: 'Electrocardiograma en la hiperpotasemia moderada o grave.',
      dx_diferencial: 'La caída hemodinámica esperada del filtrado frente al daño renal agudo verdadero. La hipovolemia por exceso de diurético, en la que se reduce o suspende el diurético. Y las subidas pequeñas de creatinina durante la descongestión, que no empeoran el pronóstico si el paciente queda sin congestión.',
      tx_medico: 'No interrumpir el bloqueo neurohormonal ni el iSGLT2 por una caída transitoria de la función renal dentro de los márgenes aceptables. Revisar el diurético y los fármacos que suben el potasio.',
      tx_farmacologico: 'HIPERPOTASEMIA CON RIESGO VITAL: tratamiento inmediato con carbonato de calcio, bicarbonato sódico o ambos, insulina con o sin glucosa y agonistas beta como el salbutamol; solo desplazan el potasio al interior de la célula, así que el efecto es temporal y puede haber rebote en pocas horas; los diuréticos de asa favorecen su eliminación. QUELANTES: patiromer y ciclosilicato de zirconio sódico normalizan el potasio, lo mantienen y pueden permitir iniciar o titular el bloqueo neurohormonal (ESC); la AHA considera incierto que mejoren los desenlaces (2b B-R). El poliestireno sulfonato no debe usarse a medio ni a largo plazo por el riesgo de necrosis intestinal. El ARM se suspende si el potasio no puede mantenerse por debajo de 5,5 mEq/L (AHA, 3: daño). HIPOPOTASEMIA: cloruro potásico oral; si no es posible, 20 a 40 mmol en 250 a 1000 mL de suero salino, lentamente y por una vena de gran calibre.',
      tx_intervencionista: 'Diálisis en la hiperpotasemia refractaria con insuficiencia renal.',
      criterios_uci: 'Hiperpotasemia grave o con riesgo vital, que requiere tratamiento inmediato y monitorización por el riesgo de rebote.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Potasio y creatinina al menos diarios durante la titulación en el ingreso y durante la diuresis intravenosa.',
      seguimiento_ambulatorio: 'Control de potasio y función renal tras cada inicio o subida de dosis. Reintroducir y seguir titulando lo antes posible lo que se haya retirado.',
      pronostico: 'La hiperpotasemia se asocia a más hospitalizaciones y muertes, y su peor consecuencia indirecta es dejar al paciente sin el tratamiento que le prolonga la vida.',
      algoritmo: [
        'Potasio y creatinina antes y después de cada inicio o titulación',
        'Subida de creatinina dentro de los márgenes aceptables: no suspender',
        'Potasio de 5,0 a 5,5: revisar fármacos y diurético, valorar quelante',
        'Potasio que no baja de 5,5 con ARM: suspender el ARM',
        'Hiperpotasemia con riesgo vital: calcio, insulina con glucosa, salbutamol y diurético de asa',
        'Reintroducir el tratamiento retirado en cuanto sea posible'
      ]
    },
    {
      nombre: 'Ferropenia y anemia en la insuficiencia cardiaca',
      color: '#7a6a2e',
      definicion: 'Comorbilidad que complica la insuficiencia cardiaca de cualquier fenotipo (ver las tarjetas de FEVI reducida y de insuficiencia cardiaca aguda descompensada). La ferropenia se define con un corte propio: ferritina por debajo de 100 ng/mL, o entre 100 y 299 ng/mL con saturación de transferrina por debajo del 20%. La anemia, según la OMS, es una hemoglobina por debajo de 12 g/dL en la mujer y de 13 g/dL en el varón.',
      fisiopatologia: 'No repite el mecanismo de la insuficiencia cardiaca. Lo específico: pérdidas aumentadas, menor ingesta o absorción (desnutrición, congestión intestinal) y alteración del metabolismo del hierro por la inflamación crónica. La inflamación eleva la ferritina, y por eso el corte es más alto que en la población general. La ferropenia puede existir sin anemia, reduce la capacidad funcional, precipita la descompensación y favorece la disfunción muscular esquelética.',
      epidemiologia: 'La ferropenia está presente hasta en el 55% de los pacientes con insuficiencia crónica y hasta en el 80% de los agudos. Las dos, ferropenia y anemia, se asocian de forma independiente a menos capacidad de ejercicio, a reingresos y a más mortalidad.',
      factores_riesgo: [
        'Insuficiencia cardiaca aguda reciente',
        'Desnutrición',
        'Congestión intestinal con mala absorción',
        'Pérdidas digestivas'
      ],
      clinica: 'Fatiga y menor tolerancia al ejercicio superpuestas a las de la insuficiencia cardiaca; a menudo sin anemia.',
      criterios_dx: 'Ferritina por debajo de 100 ng/mL, o de 100 a 299 ng/mL con saturación de transferrina por debajo del 20%. Detectar anemia o ferropenia obliga a estudiar su causa.',
      laboratorio: 'Hemograma, ferritina y saturación de transferrina periódicamente en todos los pacientes (I C), y antes del alta en el ingreso. El receptor soluble de transferrina no se altera con la inflamación y tiene valor pronóstico, pero no está demostrado para guiar el tratamiento.',
      imagen: 'Según la causa: estudio digestivo si se sospechan pérdidas.',
      complementarios: 'Estudio de la causa de la ferropenia y de la anemia.',
      dx_diferencial: 'La anemia de la enfermedad renal crónica y la anemia por otras causas, que tienen tratamiento propio.',
      tx_medico: 'Buscar y tratar la causa de la pérdida.',
      tx_farmacologico: 'Carboximaltosa férrica intravenosa: debe considerarse en el paciente sintomático con FEVI por debajo de 45% y ferropenia, para aliviar los síntomas y mejorar la capacidad de ejercicio y la calidad de vida (IIa A), y en el paciente hospitalizado recientemente con FEVI por debajo de 50% y ferropenia, para reducir los reingresos (IIa B). En AFFIRM-AHF no alcanzó el objetivo primario, pero redujo las hospitalizaciones totales por insuficiencia cardiaca. El hierro oral no repone los depósitos ni mejora la capacidad de ejercicio, y no se recomienda. Los estimulantes de la eritropoyesis no están indicados: la darbepoetina no redujo la mortalidad ni las hospitalizaciones y aumentó los eventos tromboembólicos (la AHA lo califica de daño).',
      tx_intervencionista: 'El de la causa del sangrado, si lo hay.',
      criterios_uci: 'No aplica por la ferropenia; la anemia grave sigue los criterios generales de transfusión.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Ferritina y saturación de transferrina antes del alta y hierro intravenoso si hay ferropenia.',
      seguimiento_ambulatorio: 'Repetir el estudio del hierro periódicamente; en AFFIRM-AHF la dosis se repetía a las 6 y a las 12 semanas según los nuevos niveles.',
      pronostico: 'La reposición intravenosa mejora los síntomas, la capacidad de ejercicio y la calidad de vida, y en los metaanálisis redujo los combinados de muerte u hospitalización, con independencia de que hubiera anemia.',
      algoritmo: [
        'Ferritina y saturación de transferrina en todo paciente con insuficiencia cardiaca',
        'Ferritina por debajo de 100, o de 100 a 299 con saturación por debajo del 20%: ferropenia',
        'Estudiar la causa',
        'Sintomático con FEVI por debajo de 45%, u hospitalizado con FEVI por debajo de 50%: carboximaltosa férrica intravenosa',
        'No usar hierro oral ni estimulantes de la eritropoyesis'
      ]
    },
    {
      nombre: 'Choque cardiogénico en la insuficiencia cardiaca aguda',
      color: '#5c2e2e',
      definicion: 'Complicación y forma extrema de la insuficiencia cardiaca aguda (ver la tarjeta de insuficiencia cardiaca aguda descompensada): síndrome por disfunción cardiaca primaria con gasto insuficiente e hipoperfusión tisular que amenaza la vida y puede llevar al fallo multiorgánico. La ficha general del choque, con todos sus tipos, está en el tema de Estado de choque.',
      fisiopatologia: 'No repite el mecanismo de la insuficiencia cardiaca. Lo específico: el daño cardiaco puede ser agudo, por pérdida brusca de miocardio (infarto, miocarditis), o progresivo, en la insuficiencia avanzada que pierde la estabilidad. La vasoconstricción compensadora puede mantener la presión a costa de la perfusión, y por eso la hipoperfusión no siempre se acompaña de hipotensión.',
      epidemiologia: 'La ESC no da su frecuencia dentro de la insuficiencia cardiaca aguda. Lo que sí subraya es que la evidencia de calidad sobre los desenlaces de la asistencia circulatoria sigue siendo escasa, y que por eso su uso indiscriminado no está justificado.',
      factores_riesgo: [
        'Infarto agudo de miocardio y sus complicaciones mecánicas',
        'Miocarditis aguda',
        'Insuficiencia cardiaca avanzada',
        'Insuficiencia valvular aguda, embolia pulmonar, infección, arritmia o taponamiento'
      ],
      clinica: 'Signos de hipoperfusión: extremidades frías y sudorosas, oliguria, confusión, mareo y presión diferencial estrecha, habitualmente con presión sistólica baja.',
      criterios_dx: 'Signos clínicos de hipoperfusión más su traducción bioquímica: creatinina elevada, acidosis metabólica y lactato elevado, que reflejan la hipoxia tisular.',
      laboratorio: 'Lactato y pH; creatinina; troponina para el síndrome coronario agudo.',
      imagen: 'Ecocardiograma urgente para la función ventricular y las causas mecánicas (rotura, insuficiencia valvular aguda, taponamiento).',
      complementarios: 'Coronariografía urgente si la causa es un síndrome coronario agudo. Monitorización hemodinámica invasiva.',
      dx_diferencial: 'El choque séptico y el hipovolémico, y el choque obstructivo por embolia o taponamiento, que tienen tratamiento propio.',
      tx_medico: 'Identificar y tratar pronto la causa a la vez que se estabiliza la hemodinámica: angioplastia en el síndrome coronario agudo, pericardiocentesis en el taponamiento, cirugía en la rotura de músculo papilar. Oxígeno o soporte ventilatorio.',
      tx_farmacologico: 'Los inotrópicos pueden considerarse con presión sistólica por debajo de 90 mmHg e hipoperfusión que no responde al tratamiento, incluida la prueba de volumen (IIb C), empezando a dosis bajas; no se recomiendan de rutina (III C). Si el paciente toma betabloqueador, pueden preferirse el levosimendán o los inhibidores de la fosfodiesterasa 3. Un vasopresor, preferiblemente noradrenalina, puede considerarse para subir la presión y la perfusión (IIb B): la dopamina se asoció a más arritmias y más mortalidad en el subgrupo de choque cardiogénico, y la adrenalina a más choque refractario y a triplicar el riesgo de muerte en un metaanálisis.',
      tx_intervencionista: 'Asistencia circulatoria de corta duración como puente a la recuperación, a la decisión o a otra terapia (IIa C). El balón de contrapulsación puede considerarse fuera del infarto (IIb C), pero no se recomienda de rutina en el choque tras un infarto (III B), por el ensayo IABP-SHOCK II. La ECMO venoarterial puede aumentar la poscarga del ventrículo izquierdo y exigir su descarga.',
      criterios_uci: 'Siempre: es indicación de ingreso en cuidados intensivos o coronarios.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'El paciente que sale del perfil INTERMACS 1 con asistencia temporal y sin fallo orgánico irreversible puede ser candidato a asistencia de larga duración o a trasplante.',
      seguimiento_hospitalario: 'Lactato, diuresis, función renal y hepática y hemodinámica de forma seriada, con retirada progresiva de inotrópicos, vasopresores y asistencia cuando mejoran la hipoperfusión y la función orgánica.',
      seguimiento_ambulatorio: 'El de la causa y el del fenotipo de FEVI resultante.',
      pronostico: 'La mejoría inicial del gasto, de la presión y del lactato con la asistencia circulatoria puede verse contrarrestada por complicaciones importantes. Estudios recientes sugieren que un abordaje estandarizado en equipo, con algoritmos predefinidos de implante precoz y monitorización estrecha, podría mejorar la supervivencia.',
      algoritmo: [
        'Hipoperfusión clínica con lactato y creatinina elevados: choque cardiogénico',
        'Síndrome coronario agudo o complicación mecánica: angioplastia o cirugía urgentes',
        'Oxígeno o soporte ventilatorio',
        'Inotrópicos o noradrenalina si persiste la hipoperfusión',
        'Sin mejoría: asistencia circulatoria de corta duración o reemplazo renal',
        'Sin opción: cuidados paliativos'
      ]
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La vigilancia del paciente ingresado por insuficiencia cardiaca tiene tres objetivos: descongestionar, tratar las comorbilidades que pesan en la evolución tras el alta, como la ferropenia, e iniciar o retomar el tratamiento oral que prolonga la vida. El tercero se juega al final: una proporción importante de los pacientes se va de alta con congestión persistente, que es uno de los principales predictores de muerte y reingreso.',
    parametros: [
      'Diuresis horaria en las primeras 6 horas y sodio urinario a las 2 horas del diurético',
      'Peso y balance de líquidos diarios',
      'Creatinina y electrolitos al menos cada 24 horas durante la diuresis intravenosa',
      'Saturación de oxígeno, frecuencia respiratoria y presión arterial, sobre todo con ventilación no invasiva',
      'Lactato y signos de perfusión en el paciente húmedo y frío',
      'Signos de congestión antes del alta: presión venosa, edemas, ecografía pulmonar',
      'Ferritina y saturación de transferrina antes del alta'
    ],
    criterios_uci_general: 'Choque cardiogénico, insuficiencia respiratoria que exige ventilación no invasiva o intubación, hipoperfusión que requiere inotrópicos o vasopresores, y arritmias con inestabilidad.',
    criterios_tips_general: 'Antes del alta del paciente con FEVI reducida: revisar si tiene o tendrá indicación de desfibrilador o de resincronización tras 3 meses de tratamiento óptimo.',
    criterios_trasplante_general: 'Derivar a una unidad de insuficiencia cardiaca avanzada a quien cumple los cuatro criterios de avanzada, antes de que aparezca el fallo orgánico.',
    prevencion: 'Prevenir la insuficiencia cardiaca empieza en el estadio A: tratar la hipertensión (I A), dar estatinas a quien tiene enfermedad cardiovascular o riesgo alto (I A), dar iSGLT2 al diabético con enfermedad cardiovascular o riesgo alto (I A) y aconsejar contra el sedentarismo, la obesidad, el tabaco y el abuso de alcohol (I C). En quien ya la tiene, prevenir el reingreso es el programa multidisciplinario, el autocuidado y la vacunación contra la gripe y el neumococo (IIa B).'
  }
};

// Presentación
export const compCites = {
  'Insuficiencia cardiaca con FEVI reducida': {
    definicion: [1, 2], fisiopatologia: [1], epidemiologia: [1], factores_riesgo: [1, 3], clinica: [1],
    criterios_dx: [1, 3], laboratorio: [1], imagen: [1], complementarios: [1], dx_diferencial: [3],
    tx_medico: [1], tx_farmacologico: [1, 2], tx_intervencionista: [1], criterios_tips: [1],
    seguimiento_hospitalario: [1, 2], seguimiento_ambulatorio: [1, 2], pronostico: [1]
  },
  'Insuficiencia cardiaca con FEVI levemente reducida o mejorada': {
    definicion: [1, 2, 3], fisiopatologia: [1, 3], epidemiologia: [1], factores_riesgo: [1, 2],
    criterios_dx: [1, 2, 3], laboratorio: [1], imagen: [1], dx_diferencial: [1],
    tx_farmacologico: [1, 2], tx_intervencionista: [1], seguimiento_ambulatorio: [2], pronostico: [1, 3]
  },
  'Insuficiencia cardiaca con FEVI preservada': {
    definicion: [1], fisiopatologia: [1, 2], epidemiologia: [1, 2, 3], factores_riesgo: [1, 2], clinica: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1], dx_diferencial: [1, 3],
    tx_medico: [1], tx_farmacologico: [1, 2], tx_intervencionista: [1], seguimiento_ambulatorio: [1], pronostico: [1, 2]
  },
  'Insuficiencia cardiaca aguda descompensada': {
    definicion: [1, 3], fisiopatologia: [1], epidemiologia: [1], factores_riesgo: [1, 3], clinica: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1], dx_diferencial: [1, 3],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1], criterios_uci: [1],
    seguimiento_hospitalario: [1], seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'Edema agudo de pulmón': {
    definicion: [1], fisiopatologia: [1], clinica: [1], criterios_dx: [1], laboratorio: [1], imagen: [1],
    complementarios: [1], tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1]
  },
  'Insuficiencia cardiaca derecha aguda aislada': {
    definicion: [1], fisiopatologia: [1], clinica: [1], criterios_dx: [1], laboratorio: [1],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1], criterios_trasplante: [1]
  },
  'Resincronización y desfibrilador implantable': {
    definicion: [1], fisiopatologia: [1], epidemiologia: [1], factores_riesgo: [1],
    criterios_dx: [1], laboratorio: [1], imagen: [1], complementarios: [1], dx_diferencial: [1],
    tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1], criterios_trasplante: [1],
    seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'Insuficiencia cardiaca avanzada y terapias avanzadas': {
    definicion: [1, 2, 3], fisiopatologia: [1], epidemiologia: [1], factores_riesgo: [1], clinica: [1],
    criterios_dx: [1, 2], laboratorio: [1], imagen: [1], complementarios: [1], tx_medico: [1, 2],
    tx_farmacologico: [1], tx_intervencionista: [1], criterios_tips: [1], criterios_trasplante: [1],
    seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'Resistencia a diuréticos y congestión persistente': {
    definicion: [1], fisiopatologia: [1], epidemiologia: [1], criterios_dx: [1], laboratorio: [1],
    dx_diferencial: [1], tx_farmacologico: [1, 2], tx_intervencionista: [1], criterios_trasplante: [1],
    seguimiento_hospitalario: [1, 2], seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'Hiperpotasemia y deterioro renal con el tratamiento': {
    definicion: [1], fisiopatologia: [1], epidemiologia: [1], factores_riesgo: [1, 2],
    criterios_dx: [1], laboratorio: [1, 2], dx_diferencial: [1], tx_medico: [1],
    tx_farmacologico: [1, 2], pronostico: [1]
  },
  'Ferropenia y anemia en la insuficiencia cardiaca': {
    definicion: [1], fisiopatologia: [1], epidemiologia: [1], criterios_dx: [1], laboratorio: [1],
    tx_farmacologico: [1, 2], seguimiento_hospitalario: [1], seguimiento_ambulatorio: [1], pronostico: [1]
  },
  'Choque cardiogénico en la insuficiencia cardiaca aguda': {
    definicion: [1], fisiopatologia: [1], factores_riesgo: [1], clinica: [1], criterios_dx: [1],
    laboratorio: [1], tx_medico: [1], tx_farmacologico: [1], tx_intervencionista: [1], criterios_trasplante: [1]
  }
};

export const estigmasTitulo = 'Síntomas y signos de la insuficiencia cardiaca, de los más típicos a los menos específicos (ESC 2021, Tabla 6)';
export const estigmas = [
  { s: 'Disnea, ortopnea y disnea paroxística nocturna', p: 'Síntoma típico', desc: 'El síntoma cardinal. La ortopnea y la disnea paroxística nocturna orientan a congestión pulmonar. La bendopnea, disnea al inclinarse hacia delante, es un síntoma de enfermedad avanzada.' },
  { s: 'Edema maleolar', p: 'Síntoma típico', desc: 'Junto con la fatiga y la intolerancia al ejercicio, forma la tríada de síntomas cardinales con la que la ESC define el síndrome. Como signo, el edema periférico (maleolar, sacro o escrotal) es menos específico.' },
  { s: 'Presión venosa yugular elevada y reflujo hepatoyugular', p: 'Signo más específico', desc: 'Los signos que más apoyan la congestión sistémica. Su ausencia no descarta la insuficiencia cardiaca en las fases tempranas ni en el paciente bien tratado.' },
  { s: 'Tercer ruido y choque de punta desplazado', p: 'Signo más específico', desc: 'El ritmo de galope por tercer ruido y el choque de punta desplazado lateralmente apuntan a un ventrículo dilatado y con presiones de llenado altas.' },
  { s: 'Crepitantes y derrame pleural', p: 'Signo menos específico', desc: 'Frecuentes en la congestión pulmonar, pero comunes a otras enfermedades respiratorias; la ecografía pulmonar ayuda a confirmar su origen.' },
  { s: 'Aumento de peso de más de 2 kg por semana', p: 'Síntoma menos típico', desc: 'Es la señal precoz de la retención de líquido, y el motivo por el que el paciente aprende a pesarse a diario y a ajustar el diurético.' },
  { s: 'Confusión, anorexia y depresión en el anciano', p: 'Síntoma menos típico', desc: 'Los síntomas atípicos que más retrasan el diagnóstico en el paciente mayor, junto con la tos nocturna y las sibilancias.' },
  { s: 'Extremidades frías, oliguria y presión diferencial estrecha', p: 'Signo de hipoperfusión', desc: 'Marcan el perfil frío y, en la urgencia, la sospecha de choque cardiogénico. La caquexia es un signo de enfermedad avanzada.' }
];

export const escalaRefs = {
  'Fenotipo por FEVI: ESC 2021, AHA 2022 y Definición Universal 2026 (calculadora disponible)': [1, 2, 3],
  'Estadios A a D': [3],
  'Clase funcional NYHA': [1],
  'Las cuatro presentaciones de la insuficiencia cardiaca aguda': [1],
  'Criterios de insuficiencia cardiaca avanzada (ESC 2021)': [1, 2],
  'Perfiles INTERMACS': [1],
  'Indicación de resincronización y de desfibrilador (calculadora disponible)': [1]
};

export const escalaCalc = {
  'Fenotipo por FEVI: ESC 2021, AHA 2022 y Definición Universal 2026 (calculadora disponible)': 'fenotipoFevi',
  'Indicación de resincronización y de desfibrilador (calculadora disponible)': 'dispositivosIc'
};

export const compGroups = [
  { title: 'La insuficiencia cardiaca crónica por FEVI', items: ['Insuficiencia cardiaca con FEVI reducida', 'Insuficiencia cardiaca con FEVI levemente reducida o mejorada', 'Insuficiencia cardiaca con FEVI preservada'] },
  { title: 'Las presentaciones agudas', items: ['Insuficiencia cardiaca aguda descompensada', 'Edema agudo de pulmón', 'Insuficiencia cardiaca derecha aguda aislada'] },
  { title: 'Dispositivos y terapias avanzadas', items: ['Resincronización y desfibrilador implantable', 'Insuficiencia cardiaca avanzada y terapias avanzadas'] },
  { title: 'Complicaciones', items: ['Resistencia a diuréticos y congestión persistente', 'Hiperpotasemia y deterioro renal con el tratamiento', 'Ferropenia y anemia en la insuficiencia cardiaca', 'Choque cardiogénico en la insuficiencia cardiaca aguda'] }
];

export const complicacionesIntro = 'Las fichas van en dos niveles, para no leer dos veces lo mismo. Las OCHO primeras son formas de la enfermedad o de su tratamiento, con los campos completos: los tres fenotipos crónicos por FEVI, las tres presentaciones agudas que no son choque, y los dispositivos y las terapias avanzadas. Las CUATRO últimas son complicaciones: su definición dice de qué ficha dependen y su fisiopatología solo explica lo propio de la complicación. El choque cardiogénico general, con todos los tipos de choque, está en el tema de Estado de choque, y la insuficiencia avanzada vista desde las miocardiopatías, en el tema de Miocardiopatías.';

export const modalLabels = {
  itemName: 'Ficha',
  criterios_tips: 'Dispositivos',
  criterios_trasplante: 'Terapias avanzadas y trasplante',
  monitorizacionTitulo: 'Vigilancia durante el ingreso',
  prevencion: 'Prevención'
};

export const diagnosticoIntro = 'El diagnóstico de la insuficiencia cardiaca crónica tiene un orden que ahorra ecocardiogramas: primero el péptido natriurético, que la descarta si es normal, y después el ecocardiograma, que la confirma y define el fenotipo por la FEVI. En la urgencia los cortes del péptido son otros, más altos, y lo que no puede esperar es la búsqueda del desencadenante con el CHAMPIT. Y un aviso que vale para todo el tema: un péptido normal no descarta la FEVI preservada en el obeso, y un péptido bajo no descarta el edema pulmonar fulminante.';

export const categories = [
  { id: 'definicion', label: 'Definición y FEVI' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Fenotipos y complicaciones' },
  { id: 'seguimiento', label: 'Vigilancia' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];

export const arbol = {
  root: { title: 'INSUFICIENCIA CARDIACA', color: '#a3364a', target: 'definicion' },
  branches: [
    { title: 'Diagnosticarla', sub: 'Péptido primero, ecocardiograma después', color: '#6b4a2e', target: 'diagnostico', leaves: [
      { title: 'Crónica', sub: 'NT-proBNP 125, BNP 35', color: '#6b4a2e', target: 'diagnostico' },
      { title: 'Aguda', sub: 'NT-proBNP 300, BNP 100', color: '#8c3a34', target: 'diagnostico' },
      { title: 'Fenotipo por FEVI', sub: '40, 41 a 49, 50', color: '#a3364a', target: 'clasificacion' }
    ] },
    { title: 'Tratar la FEVI reducida', sub: 'Cuatro pilares, los cuatro I A', color: '#a3364a', target: 'complicaciones', leaves: [
      { title: 'IECA o ARNI', sub: 'Más betabloqueador', color: '#a3364a', target: 'complicaciones' },
      { title: 'ARM e iSGLT2', sub: 'Con o sin diabetes', color: '#9c3a52', target: 'complicaciones' },
      { title: 'Dispositivos', sub: 'Tras 3 meses, FEVI 35%', color: '#5c3d8c', target: 'complicaciones' }
    ] },
    { title: 'La urgencia', sub: 'Cuatro presentaciones', color: '#8c3a34', target: 'clasificacion', leaves: [
      { title: 'Descompensada', sub: 'Diurético medido a 2 y 6 h', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Edema agudo', sub: 'Oxígeno, diurético, vasodilatador', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Choque', sub: 'Hipoperfusión', color: '#5c2e2e', target: 'complicaciones' }
    ] },
    { title: 'FEVI preservada', sub: 'Diuréticos, causa e iSGLT2', color: '#7a4a8c', target: 'complicaciones' },
    { title: 'El alta', sub: 'Sin congestión, visita en 1 a 2 semanas', color: '#2e6b6b', target: 'seguimiento' }
  ]
};

export const diagCites = { laboratorio: [1], no_invasivos: [1], imagen: [1] };
export const clasificacionCite = [1, 2, 3];
export const seguimientoCite = [1];
export const figurasDefinicion = ['cuatro-pilares'];
export const figurasClasificacion = ['presentaciones-aguda'];

export const figuras = {
  'cuatro-pilares': {
    titulo: 'Los cuatro pilares de la FEVI reducida, con sus dosis de inicio y objetivo',
    fuente: 'McDonagh TA, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J 2021;42(36):3599-3726, Tabla 8 y tabla de recomendaciones de la sección 5.3.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Pilar</th><th>Fármaco</th><th>Dosis inicial</th><th>Dosis objetivo</th></tr></thead>
          <tbody>
            <tr><td class="figure-org" rowspan="3">IECA o ARNI<br><span class="figure-tag">I A / I B</span></td><td>Enalapril</td><td>2,5 mg cada 12 h</td><td>10 a 20 mg cada 12 h</td></tr>
            <tr><td>Ramipril</td><td>2,5 mg cada 12 h</td><td>5 mg cada 12 h</td></tr>
            <tr><td>Sacubitril/valsartán</td><td>49/51 mg cada 12 h (24/26 si hubo hipotensión)</td><td>97/103 mg cada 12 h</td></tr>
            <tr><td class="figure-org" rowspan="3">Betabloqueador<br><span class="figure-tag">I A</span></td><td>Bisoprolol</td><td>1,25 mg al día</td><td>10 mg al día</td></tr>
            <tr><td>Carvedilol</td><td>3,125 mg cada 12 h</td><td>25 mg cada 12 h (50 si pesa más de 85 kg)</td></tr>
            <tr><td>Metoprolol succinato</td><td>12,5 a 25 mg al día</td><td>200 mg al día</td></tr>
            <tr><td class="figure-org" rowspan="2">ARM<br><span class="figure-tag">I A</span></td><td>Espironolactona</td><td>25 mg al día (12,5 si hay riesgo renal o de hiperpotasemia)</td><td>50 mg al día</td></tr>
            <tr><td>Eplerenona</td><td>25 mg al día</td><td>50 mg al día</td></tr>
            <tr><td class="figure-org" rowspan="2">iSGLT2<br><span class="figure-tag">I A</span></td><td>Dapagliflozina</td><td>10 mg al día</td><td>10 mg al día</td></tr>
            <tr><td>Empagliflozina</td><td>10 mg al día</td><td>10 mg al día</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Tres cosas que esta tabla existe para fijar. La primera: los cuatro pilares son <strong>clase I A</strong> y se dan con o sin diabetes; el sacubitril/valsartán es I B como <strong>sustituto</strong> del IECA, con 36 horas de lavado para evitar el angioedema. La segunda: el iSGLT2 no se titula, se empieza ya en la dosis objetivo. La tercera: el ARM pide filtrado de más de 30 mL/min/1,73 m² y potasio por debajo de 5,0 mEq/L para empezar, y se retira si el potasio no baja de 5,5 (AHA 2022). La caída inicial del filtrado con IECA, ARNI o iSGLT2 es esperable y no obliga a suspenderlos mientras la creatinina no suba más del 50% ni pase de 3 mg/dL.</div>`
  },
  'presentaciones-aguda': {
    titulo: 'Las cuatro presentaciones de la insuficiencia cardiaca aguda',
    fuente: 'McDonagh TA, et al. Eur Heart J 2021;42(36):3599-3726, Tabla 21 y Figuras 7 a 10.',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Presentación</th><th>Inicio y mecanismo</th><th>Perfil y presión</th><th>Tratamiento principal</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Descompensada<br><span class="figure-tag">50 a 70%</span></td><td>Días. Disfunción del ventrículo izquierdo con retención renal de sodio y agua</td><td>Húmeda y caliente, o húmeda y fría. Presión normal o baja</td><td>Diuréticos; inotrópicos solo si hay hipoperfusión o hipotensión</td></tr>
            <tr><td class="figure-org">Edema agudo de pulmón</td><td>Horas. Poscarga elevada o disfunción diastólica; redistribución al pulmón</td><td>Húmeda y caliente, a veces fría. Presión normal o alta</td><td>Oxígeno o ventilación no invasiva, diuréticos y vasodilatadores si la sistólica es de 110 o más</td></tr>
            <tr><td class="figure-org">Derecha aislada</td><td>Disfunción del ventrículo derecho o hipertensión pulmonar precapilar</td><td>Presión venosa central alta, a menudo hipoperfusión. Presión baja</td><td>Diuréticos para la congestión; inotrópicos o vasopresores si hay hipoperfusión</td></tr>
            <tr><td class="figure-org">Choque cardiogénico<br><span class="figure-tag fail">hipoperfusión</span></td><td>Disfunción cardiaca grave, aguda o progresiva</td><td>Fría, gasto bajo. Presión baja, aunque no siempre</td><td>Inotrópicos, vasopresores, asistencia de corta duración o reemplazo renal</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Dos ideas que ordenan la urgencia. La primera es que, antes de elegir la fila, se buscan en la primera hora las causas que necesitan tratamiento inmediato, el <strong>CHAMPIT</strong>: síndrome coronario agudo, emergencia hipertensiva, arritmia, causa mecánica, embolia pulmonar, infección y taponamiento. La segunda es que la <strong>congestión se trata con diurético en las cuatro</strong>, y lo que cambia de una fila a otra es qué se añade: vasodilatador cuando la presión es alta, inotrópico o vasopresor cuando hay hipoperfusión. El oxígeno solo se da si la saturación es menor del 90%.</div>`
  }
};
