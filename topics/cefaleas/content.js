// topics/cefaleas/content.js: Cefaleas. Tercer tema de Neurología (tras Enfermedad
// Cerebrovascular y Estado Epiléptico y Epilepsia). Estructura idéntica al contrato del motor.
// Convención de figuras: figBlock() inline, numeración continua por tipo (Tabla N) a lo largo de
// todo el tema.

export const meta = {
  id: 'cefaleas',
  titulo: 'Cefaleas',
  subtitulo: 'Módulo 6 · Medicina Interna',
  accent: '#7a4a2e',
  accentDim: '#a5764f'
};

export const definicionText = 'La cefalea es uno de los motivos de consulta más frecuentes en medicina, y su evaluación descansa sobre una sola pregunta central: ¿es primaria o secundaria? Las cefaleas primarias (migraña, cefalea tensional, cefalea en racimos, entre otras) son la cefalea en sí misma la enfermedad, sin una lesión estructural que la explique, y se diagnostican por el reconocimiento de un fenotipo clínico característico según los criterios de la Clasificación Internacional de Cefaleas (ICHD-3). Las cefaleas secundarias, en cambio, son el síntoma de una enfermedad subyacente, a veces benigna y a veces potencialmente letal (hemorragia subaracnoidea, meningitis, arteritis de células gigantes, entre otras), y su reconocimiento depende casi por completo del contexto clínico (edad, forma de inicio, síntomas asociados) más que de las características del dolor en sí mismo, resumido en la mnemotecnia de señales de alarma SNNOOP10. Ese tamizaje sistemático, antes de clasificar cualquier fenotipo primario, es la habilidad clínica más importante de todo el capítulo.';

export const bibliografia = [
  'Ailani J, Burch RC, Robbins MS; Board of Directors of the American Headache Society. The American Headache Society Consensus Statement: Update on integrating new migraine treatments into clinical practice. Headache. 2021;61(7):1021-1039.',
  'Headache Classification Committee of the International Headache Society (IHS). The International Classification of Headache Disorders, 3rd edition (ICHD-3). Cephalalgia. 2018;38(1):1-211.',
  'Do TP, Remmers A, Schytz HW, et al. Red and orange flags for secondary headaches in clinical practice: SNNOOP10 list. Neurology. 2019;92(3):134-144.',
  'Silberstein SD, Holland S, Freitag F, et al. Evidence-based guideline update: pharmacologic treatment for episodic migraine prevention in adults. Neurology. 2012;78(17):1337-1345.',
  'Marmura MJ, Silberstein SD, Schwedt TJ. The acute treatment of migraine in adults: the American Headache Society evidence assessment of migraine pharmacotherapies. Headache. 2015;55(1):3-20.',
  'Diener HC, Dodick D, Evers S, et al. Pathophysiology, prevention, and treatment of medication overuse headache. Lancet Neurol. 2019;18(9):891-902.',
  'May A, Schwedt TJ, Magis D, et al. Cluster headache. Nat Rev Dis Primers. 2018;4:18006.',
  'Robbins MS, Starling AJ, Pringsheim TM, Becker WJ, Schwedt TJ. Treatment of cluster headache: The American Headache Society Evidence-Based Guidelines. Headache. 2016;56(7):1093-1106.',
  'Bendtsen L, Evers S, Linde M, et al. EFNS guideline on the treatment of tension-type headache: report of an EFNS task force. Eur J Neurol. 2010;17(11):1318-1325.',
  'Ducros A. Reversible cerebral vasoconstriction syndrome. Lancet Neurol. 2012;11(10):906-917.',
  'Ponte C, Grayson PC, Robson JC, et al. 2022 American College of Rheumatology/EULAR Classification Criteria for Giant Cell Arteritis. Ann Rheum Dis. 2022;81(12):1647-1653.',
  'Maz M, Chung SA, Abril A, et al. 2021 American College of Rheumatology/Vasculitis Foundation Guideline for the Management of Giant Cell Arteritis and Takayasu Arteritis. Arthritis Rheumatol. 2021;73(8):1349-1365.',
  'Turnbull DK, Shepherd DB. Post-dural puncture headache: pathogenesis, prevention and treatment. Br J Anaesth. 2003;91(5):718-729.',
  'Boonmak P, Boonmak S. Epidural blood patching for preventing and treating post-dural puncture headache. Cochrane Database Syst Rev. 2010;(1):CD001791.',
  'Gronseth GS, Cruccu G, Alksne J, et al. Practice parameter: the diagnostic evaluation and treatment of trigeminal neuralgia (an evidence-based review). Neurology. 2008;71(15):1183-1190.',
  'Bendtsen L, Zakrzewska JM, Abbott J, et al. European Academy of Neurology guideline on trigeminal neuralgia. Eur J Neurol. 2019;26(6):831-849.'
];

// Reproduce el marcado de .modal-figure (mismo helper que ya usan los temas de enfermedad
// previos) para insertar tablas EN LÍNEA justo debajo del párrafo que las menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Cefalea primaria',
      tituloB: 'Cefalea secundaria',
      compensada: 'La cefalea es el síntoma en sí misma, sin una lesión estructural subyacente que la explique; representa más del 90% de las consultas por cefalea. El diagnóstico es clínico, basado en los criterios de la Clasificación Internacional de Cefaleas (ICHD-3): características del dolor (localización, calidad, intensidad, duración), síntomas acompañantes (náusea, fotofobia, fonofobia, síntomas autonómicos), y el patrón temporal a lo largo del tiempo. Migraña, cefalea tensional y cefalea en racimos son las tres entidades primarias más frecuentes, cada una con un fenotipo característico que rara vez se superpone.',
      descompensada: 'La cefalea es un síntoma de una enfermedad subyacente identificable: vascular, infecciosa, estructural, tóxico-metabólica, o relacionada con sustancias. Su reconocimiento depende de un interrogatorio dirigido a las señales de alarma (mnemotecnia SNNOOP10), ya que la mayoría de las cefaleas secundarias graves no tienen un patrón de dolor específico que las distinga de una cefalea primaria por la clínica del dolor en sí: lo que las delata es el contexto (inicio súbito, fiebre, embarazo, edad avanzada, cambio de patrón, déficit neurológico focal, entre otras).'
    },
    laboratorio: [
      { prueba: 'VSG y PCR', utilidad: 'Tamizaje de arteritis de células gigantes en cualquier cefalea de nuevo inicio en mayores de 50 años.' },
      { prueba: 'Biometría hemática completa', utilidad: 'Descarta anemia severa o policitemia como factor agravante o causal.' },
      { prueba: 'Función tiroidea', utilidad: 'El hipotiroidismo es una causa reconocida de cefalea crónica diaria.' },
      { prueba: 'Panel toxicológico y consumo de sustancias', utilidad: 'Cafeína, analgésicos de venta libre y uso excesivo de triptanes orientan hacia una cefalea por abuso de medicación.' },
      { prueba: 'Prueba de embarazo', utilidad: 'Modifica el estudio de imagen y las opciones terapéuticas en mujeres en edad reproductiva.' }
    ],
    no_invasivos: [
      { metodo: 'Criterios diagnósticos ICHD-3', interpretacion: 'Estándar de referencia para el diagnóstico de las cefaleas primarias.', cutoff: 'N/A' },
      { metodo: 'SNNOOP10', interpretacion: 'Mnemotecnia de señales de alarma que orientan hacia una cefalea secundaria.', cutoff: 'N/A' },
      { metodo: 'MIDAS / HIT-6', interpretacion: 'Cuantifican el impacto funcional y la discapacidad asociada a la cefalea; guían la decisión de tratamiento preventivo.', cutoff: 'Variable' }
    ],
    imagen: [
      { modalidad: 'RM cerebral', hallazgos: 'Estudio de elección si hay señales de alarma o examen neurológico anormal; más sensible que la TC para lesiones de fosa posterior, hipófisis y de la unión craneocervical.' },
      { modalidad: 'TC simple de cráneo', hallazgos: 'Primera línea en urgencias ante una cefalea en trueno, para descartar hemorragia subaracnoidea.' },
      { modalidad: 'Angio-TC / angio-RM de cabeza y cuello', hallazgos: 'Sospecha de disección arterial, trombosis venosa cerebral, o síndrome de vasoconstricción cerebral reversible.' },
      { modalidad: 'RM con contraste y venografía', hallazgos: 'Sospecha de hipertensión intracraneal idiopática o de trombosis de senos venosos.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La clasificación ICHD-3 organiza más de 300 tipos de cefalea en tres grandes grupos: primarias, secundarias, y neuropatías craneales/dolor facial, donde se ubica la neuralgia del trigémino. Antes de aplicar los criterios diagnósticos específicos de cada cefalea primaria, debe descartarse siempre una causa secundaria mediante el tamizaje de señales de alarma; solo después de ese paso tiene sentido clasificar el fenotipo primario.',
    escalas: [
      { nombre: 'SNNOOP10', componentes: 'Síntomas sistémicos/factores de riesgo secundarios, déficit neurológico, inicio en trueno, edad mayor a 50 años, patrón progresivo, precipitada por Valsalva, precipitada por el esfuerzo, papiledema, cambia con la postura, embarazo/puerperio, dolor ocular con síntomas autonómicos, inicio postraumático, patología del sistema inmune, y uso excesivo de analgésicos o fármaco nuevo.', formula: 'Lista de señales de alarma, sin puntaje numérico sumativo', interpretacion: `La presencia de cualquier señal obliga a un estudio dirigido (imagen, laboratorio, o punción lumbar según la sospecha) antes de etiquetar la cefalea como primaria.${figBlock('Tabla 1', 'Mnemotecnia SNNOOP10: señales de alarma para cefalea secundaria', `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Letra</th><th>Señal de alarma</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">S</td><td>Síntomas sistémicos (fiebre, mialgias) o factores de riesgo secundarios (VIH, neoplasia)</td></tr>
            <tr><td class="figure-org">N</td><td>Antecedente de neoplasia</td></tr>
            <tr><td class="figure-org">N</td><td>Déficit neurológico focal, incluida la alteración de consciencia</td></tr>
            <tr><td class="figure-org">O</td><td>Inicio súbito o en trueno</td></tr>
            <tr><td class="figure-org">O</td><td>Edad de inicio mayor a 50 años</td></tr>
            <tr><td class="figure-org">P</td><td>Patrón progresivo o cambio reciente en las características habituales</td></tr>
            <tr><td class="figure-org">P</td><td>Postural: cambia claramente con la posición (peor de pie, o peor acostado)</td></tr>
            <tr><td class="figure-org">P</td><td>Precipitada por estornudo, tos o esfuerzo físico</td></tr>
            <tr><td class="figure-org">P</td><td>Papiledema</td></tr>
            <tr><td class="figure-org">P</td><td>Presentación atípica que se aleja del fenotipo primario habitual</td></tr>
            <tr><td class="figure-org">P</td><td>Embarazo o puerperio (pregnancy)</td></tr>
            <tr><td class="figure-org">P</td><td>Dolor ocular ("painful eye") con síntomas autonómicos asociados</td></tr>
            <tr><td class="figure-org">P</td><td>Inicio postraumático</td></tr>
            <tr><td class="figure-org">P</td><td>Patología del sistema inmune (VIH, inmunosupresión)</td></tr>
            <tr><td class="figure-org">P</td><td>Uso excesivo de analgésicos, o fármaco nuevo al inicio del cuadro</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Do et al. 2019. El nombre "SNNOOP10" resume la secuencia: 1 S, 2 N, 2 O, y 10 P.</div>`)}` },
      { nombre: 'Criterios ICHD-3 de migraña sin aura', componentes: 'Al menos 5 episodios con duración de 4-72 horas sin tratar, con al menos 2 de (unilateral, pulsátil, intensidad moderada-severa, agravada por actividad física de rutina), y al menos 1 de (náusea/vómito, foto/fonofobia).', formula: 'Criterios diagnósticos categóricos', interpretacion: 'El diagnóstico es clínico, sin necesidad de estudios adicionales si no hay señales de alarma; hasta un tercio de los pacientes presenta además aura, un síntoma neurológico focal totalmente reversible.' },
      { nombre: 'Criterios ICHD-3 de cefalea tensional', componentes: 'Al menos 10 episodios con duración de 30 minutos a 7 días, con al menos 2 de (bilateral, opresiva/no pulsátil, intensidad leve-moderada, no agravada por actividad física rutinaria), sin náusea/vómito significativo y sin más de uno de foto/fonofobia.', formula: 'Criterios diagnósticos categóricos', interpretacion: 'Es el diagnóstico de exclusión más frecuente tras descartar migraña; la presencia de náusea o de ambos foto y fonofobia simultáneamente orienta en cambio hacia migraña.' },
      { nombre: 'Criterios ICHD-3 de cefalea en racimos', componentes: 'Al menos 5 episodios de dolor unilateral orbitario/supraorbitario/temporal, severo a muy severo, de 15 a 180 minutos sin tratar, con al menos 1 síntoma autonómico ipsilateral (inyección conjuntival, lagrimeo, congestión nasal, rinorrea, edema palpebral, miosis/ptosis) o inquietud/agitación, con frecuencia de 1 cada 2 días a 8 al día.', formula: 'Criterios diagnósticos categóricos', interpretacion: `El patrón circadiano/estacional marcado y la inquietud durante la crisis, a diferencia de la migraña, donde el paciente busca quietud, son claves diagnósticas.${figBlock('Tabla 2', 'Migraña, cefalea tensional y cefalea en racimos: comparación de fenotipos', `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Característica</th><th>Migraña</th><th>Cefalea tensional</th><th>Cefalea en racimos</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Duración sin tratar</td><td>4-72 horas</td><td>30 minutos a 7 días</td><td>15-180 minutos</td></tr>
            <tr><td class="figure-org">Localización</td><td>Unilateral (con frecuencia)</td><td>Bilateral</td><td>Unilateral orbitario/temporal, estrictamente el mismo lado en cada racimo</td></tr>
            <tr><td class="figure-org">Calidad</td><td>Pulsátil</td><td>Opresiva, en banda</td><td>Muy severa, perforante</td></tr>
            <tr><td class="figure-org">Conducta durante el episodio</td><td>Busca quietud y oscuridad</td><td>Sin cambio marcado</td><td>Inquietud, agitación motora</td></tr>
            <tr><td class="figure-org">Síntomas acompañantes</td><td>Náusea, foto y fonofobia</td><td>A lo sumo uno de foto/fonofobia, sin náusea significativa</td><td>Síntoma autonómico ipsilateral prominente</td></tr>
            <tr><td class="figure-org">Patrón temporal</td><td>Episódico, variable</td><td>Muy frecuente, puede ser diaria</td><td>Racimos de semanas/meses con remisión prolongada entre ellos</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Criterios ICHD-3. Ningún fenotipo excluye por completo a otro; la coexistencia de migraña y cefalea tensional en el mismo paciente es frecuente.</div>`)}` },
      { nombre: 'MIDAS (Migraine Disability Assessment)', componentes: 'Días perdidos de trabajo, escuela, o actividades domésticas y sociales por migraña en los últimos 3 meses.', formula: 'Suma de días', interpretacion: `Grado I (0-5 días, discapacidad mínima) a grado IV (21 días o más, discapacidad severa); guía la decisión de iniciar tratamiento preventivo.${figBlock('Tabla 3', 'Grados de discapacidad MIDAS', `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Grado</th><th>Puntaje</th><th>Discapacidad</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">I</td><td>0-5</td><td>Mínima o ninguna</td></tr>
            <tr><td class="figure-org">II</td><td>6-10</td><td>Leve</td></tr>
            <tr><td class="figure-org">III</td><td>11-20</td><td>Moderada</td></tr>
            <tr><td class="figure-org">IV</td><td>21 o más</td><td>Severa</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Un grado III o IV sostenido, o discapacidad significativa pese al tratamiento agudo, favorece el inicio de un tratamiento preventivo.</div>`)}` },
      { nombre: 'HIT-6 (Headache Impact Test)', componentes: 'Seis preguntas sobre el impacto de la cefalea en el dolor, la función social, el trabajo, la fatiga, el estado de ánimo y la concentración.', formula: 'Suma ponderada, 36-78', interpretacion: 'Un puntaje de 60 o más indica un impacto severo; complementa al MIDAS con una perspectiva de calidad de vida más amplia, no limitada a días de discapacidad completa.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Migraña episódica',
      color: '#8c3a34',
      definicion: 'Cefalea primaria recurrente, caracterizada por episodios de dolor habitualmente unilateral, pulsátil, de intensidad moderada a severa, agravado por la actividad física de rutina, acompañado de náusea o vómito y/o fotofobia y fonofobia, con o sin aura precedente.',
      fisiopatologia: 'Involucra la activación del sistema trigeminovascular, con liberación de neuropéptidos vasoactivos, en especial el péptido relacionado con el gen de la calcitonina (CGRP), que producen inflamación neurogénica y sensibilización periférica y central; el aura se atribuye a un fenómeno de depresión cortical propagada, una onda de despolarización neuronal seguida de supresión de la actividad que se propaga lentamente por la corteza.',
      epidemiologia: 'Prevalencia global de aproximadamente 12-15%, con predominio femenino 3:1 tras la pubertad; es una de las principales causas de discapacidad a nivel mundial según la OMS.',
      factores_riesgo: ['Sexo femenino', 'Antecedente familiar de migraña', 'Factores hormonales (ciclo menstrual, anticonceptivos con estrógenos)', 'Privación o exceso de sueño', 'Ayuno prolongado', 'Estrés y su liberación posterior', 'Ciertos alimentos y el alcohol en pacientes susceptibles'],
      clinica: 'Episodios de 4 a 72 horas sin tratamiento, dolor típicamente unilateral y pulsátil de intensidad moderada a severa, que empeora con la actividad física de rutina; náusea con o sin vómito, fotofobia y fonofobia son frecuentes. Hasta un tercio de los pacientes presenta aura, típicamente visual (escotoma centellante, líneas en zigzag), un síntoma neurológico focal totalmente reversible que se desarrolla de forma gradual en 5-60 minutos antes o durante la cefalea.',
      criterios_dx: 'Criterios ICHD-3: al menos 5 episodios que cumplan la duración de 4-72 horas sin tratar, con al menos 2 de (unilateral, pulsátil, intensidad moderada-severa, agravada por actividad física), y al menos 1 de (náusea/vómito, foto/fonofobia).',
      laboratorio: 'No indicado de rutina; el diagnóstico es clínico.',
      imagen: 'No indicada de rutina en la migraña con patrón estable y examen neurológico normal; se reserva para cuando hay señales de alarma o un cambio en el patrón habitual.',
      complementarios: 'MIDAS o HIT-6 para cuantificar la discapacidad y guiar la decisión de tratamiento preventivo; un calendario de cefaleas para documentar la frecuencia real.',
      dx_diferencial: 'Cefalea tensional, cefalea en racimos, cefalea secundaria (siempre descartar señales de alarma primero), ataque isquémico transitorio si el aura es atípica.',
      tx_medico: 'Identificación y modificación de desencadenantes individuales, higiene del sueño, hidratación adecuada, manejo del estrés; reposo en un ambiente oscuro y silencioso durante la crisis.',
      tx_farmacologico: 'Tratamiento agudo: un AINE o un triptán (agonista 5-HT1B/1D) tan pronto como sea posible tras el inicio del dolor, para intensidad leve a moderada; en crisis severas o falla a triptán, los gepantes (antagonistas orales de CGRP) o el lasmiditán (agonista 5-HT1F sin efecto vasoconstrictor, útil en pacientes con contraindicación cardiovascular a los triptanes) son opciones adicionales. Tratamiento preventivo, si hay 4 o más días de migraña al mes, discapacidad significativa pese al tratamiento agudo, o riesgo de abuso de medicación: betabloqueadores, topiramato, antidepresivos tricíclicos, o anticuerpos monoclonales anti-CGRP o anti-receptor de CGRP para casos seleccionados con falla a 2-3 preventivos orales.',
      tx_intervencionista: 'Bloqueo del nervio occipital mayor o toxina botulínica tipo A en casos seleccionados de migraña crónica (ver la tarjeta específica).',
      criterios_uci: 'No aplica salvo estado migrañoso refractario con deshidratación severa u otra complicación.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma directa; el manejo agudo severo puede requerir observación breve en urgencias con hidratación y antieméticos.',
      seguimiento_ambulatorio: 'Calendario de cefaleas, reevaluación periódica de la frecuencia y la respuesta al tratamiento preventivo, vigilancia del uso de analgésicos agudos para prevenir la transformación a migraña crónica o cefalea por abuso de medicación.',
      pronostico: 'Curso fluctuante a lo largo de la vida, con tendencia a mejorar tras la menopausia en mujeres; el riesgo principal a largo plazo es la cronificación por uso excesivo de medicación aguda.',
      algoritmo: ['Cefalea recurrente con fenotipo migrañoso → aplicar criterios ICHD-3', 'Descartar señales de alarma (SNNOOP10) si es la primera vez o hay cambio de patrón', 'Tratamiento agudo escalonado: AINE/triptán → gepante/lasmiditán si falla o hay contraindicación', 'Calcular MIDAS/HIT-6 para decidir sobre el tratamiento preventivo', '4 o más días/mes o discapacidad significativa → iniciar preventivo (betabloqueador, topiramato, tricíclico)', 'Falla a 2-3 preventivos → anticuerpo monoclonal anti-CGRP']
    },
    {
      nombre: 'Migraña crónica y cefalea por abuso de medicación',
      color: '#7c2d2d',
      definicion: 'La migraña crónica se define como cefalea que ocurre 15 o más días al mes durante más de 3 meses, con características migrañosas en al menos 8 de esos días; la cefalea por abuso de medicación es una complicación frecuente, causada por el uso excesivo y regular de fármacos analgésicos agudos, que perpetúa y empeora el patrón de cefalea crónica.',
      fisiopatologia: 'La cronificación se asocia a una sensibilización central progresiva del sistema trigeminovascular; el uso excesivo de analgésicos agudos, incluidos los triptanes, altera los sistemas moduladores del dolor descendentes, generando un ciclo de rebote que perpetúa la cefalea independientemente del estímulo original.',
      epidemiologia: 'La migraña crónica afecta a aproximadamente 1-2% de la población general; hasta 50-70% de los pacientes con migraña crónica cumplen también criterios de cefalea por abuso de medicación.',
      factores_riesgo: ['Frecuencia basal alta de migraña episódica', 'Uso de analgésicos agudos 10 o más días al mes (ergóticos, triptanes, opioides) o 15 o más días al mes (AINE/paracetamol simples)', 'Obesidad', 'Trastornos del sueño y apnea obstructiva', 'Depresión y ansiedad comórbidas', 'Eventos vitales estresantes'],
      clinica: 'Cefalea casi diaria o diaria, con características migrañosas variables, a menudo menos definidas que en la migraña episódica y mezcladas con un componente tensional, que típicamente empeora al despertar si hay abuso de analgésicos y mejora transitoriamente tras tomarlos, perpetuando el ciclo.',
      criterios_dx: 'ICHD-3: 15 o más días de cefalea al mes por más de 3 meses, con características migrañosas en 8 o más días, en un paciente con antecedente de migraña episódica; la cefalea por abuso de medicación requiere además el uso regular de analgésicos por encima del umbral definido, durante más de 3 meses.',
      laboratorio: 'No aplica de forma directa; dirigido a descartar comorbilidad (función tiroidea, ferritina si hay fatiga asociada).',
      imagen: 'RM cerebral si no se había realizado previamente o si hay cambio en el patrón, para descartar causa secundaria antes de etiquetar como migraña crónica.',
      complementarios: 'Calendario detallado de cefaleas y de consumo de analgésicos, esencial para identificar el patrón de abuso, que el paciente a menudo subestima.',
      dx_diferencial: 'Cefalea tensional crónica, hipertensión intracraneal idiopática (especialmente en mujeres jóvenes con obesidad), cefalea secundaria a otra causa estructural.',
      tx_medico: 'Educación sobre el ciclo de abuso de medicación, que suele ser el paso terapéutico más importante y el más difícil de lograr sin la comprensión y cooperación del paciente.',
      tx_farmacologico: 'Suspensión del fármaco de abuso, que puede hacerse de forma abrupta para la mayoría de los analgésicos simples y triptanes, mientras que los opioides y las benzodiacepinas requieren reducción gradual, con un periodo esperado de empeoramiento transitorio de la cefalea (cefalea de rebote) antes de la mejoría; inicio simultáneo de un tratamiento preventivo (el topiramato y los anticuerpos anti-CGRP tienen la evidencia más sólida específicamente en migraña crónica) para facilitar la desintoxicación y prevenir la recaída.',
      tx_intervencionista: 'La toxina botulínica tipo A (protocolo PREEMPT, 31 sitios de inyección) es un tratamiento preventivo aprobado específicamente para la migraña crónica, con o sin abuso de medicación asociado.',
      criterios_uci: 'No aplica salvo complicación asociada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'La desintoxicación ambulatoria es la regla; la hospitalización breve se reserva para casos con abuso de opioides o barbitúricos significativo, comorbilidad psiquiátrica relevante, o fracaso repetido del manejo ambulatorio.',
      seguimiento_ambulatorio: 'Reevaluación periódica de la frecuencia de cefalea y del consumo de analgésicos agudos (límite educado de máximo 2-3 días por semana), ajuste del tratamiento preventivo.',
      pronostico: 'Hasta 50-70% de los pacientes revierte a un patrón episódico tras la suspensión exitosa del fármaco de abuso más un tratamiento preventivo adecuado; la recaída es frecuente si no se mantiene la educación y el seguimiento.',
      algoritmo: ['Cefalea 15 o más días/mes por más de 3 meses con características migrañosas en 8 o más días → migraña crónica', 'Documentar el consumo de analgésicos con un calendario detallado', 'Uso por encima del umbral (10 o 15 días/mes según el fármaco) → cefalea por abuso de medicación asociada', 'Suspender el fármaco de abuso (gradual si opioides/benzodiacepinas)', 'Iniciar el preventivo de forma simultánea (topiramato, toxina botulínica, o anti-CGRP)', 'Anticipar y explicar el empeoramiento transitorio esperado (cefalea de rebote)']
    },
    {
      nombre: 'Cefalea tensional',
      color: '#3d5a73',
      definicion: 'La cefalea primaria más frecuente en la población general, caracterizada por dolor bilateral, opresivo o en banda, de intensidad leve a moderada, sin los síntomas asociados prominentes de la migraña.',
      fisiopatologia: 'En la forma episódica infrecuente predomina un mecanismo periférico (sensibilización miofascial pericraneal); en las formas frecuente y crónica se superpone una sensibilización central progresiva, similar en concepto, aunque de menor intensidad, a la descrita en la migraña crónica.',
      epidemiologia: 'Prevalencia a lo largo de la vida de hasta 70-80%, la cefalea primaria más común, aunque genera menos consultas médicas que la migraña por su menor intensidad relativa.',
      factores_riesgo: ['Estrés psicosocial', 'Tensión muscular pericraneal (postura, bruxismo)', 'Trastornos del sueño', 'Ansiedad y depresión comórbidas'],
      clinica: 'Dolor bilateral, opresivo o en banda, no pulsátil, de intensidad leve a moderada, que no se agrava con la actividad física de rutina, a diferencia de la migraña; puede acompañarse de sensibilidad pericraneal a la palpación, pero sin náusea o vómito significativo y con, a lo sumo, uno de fotofobia o fonofobia, nunca ambos, lo que la distingue de la migraña.',
      criterios_dx: 'ICHD-3: al menos 10 episodios con duración de 30 minutos a 7 días, con al menos 2 de (bilateral, opresiva, intensidad leve-moderada, no agravada por actividad física rutinaria), sin náusea/vómito significativo y sin más de uno de foto/fonofobia.',
      laboratorio: 'No aplica de forma directa.',
      imagen: 'No indicada de rutina si el patrón es típico y el examen neurológico es normal.',
      complementarios: 'Calendario de cefaleas para distinguir la forma episódica infrecuente (menos de 1 día al mes) de la frecuente (1-14 días al mes) y de la crónica (15 o más días al mes).',
      dx_diferencial: 'Migraña sin aura (el diferencial más frecuente y a veces difícil), cefalea por abuso de medicación si hay consumo frecuente de analgésicos.',
      tx_medico: 'Manejo del estrés, técnicas de relajación, terapia física dirigida a la musculatura pericraneal y cervical, higiene del sueño.',
      tx_farmacologico: 'Tratamiento agudo con AINE o paracetamol simple, evitando el uso frecuente para no inducir una cefalea por abuso de medicación. Preventivo, si es frecuente o crónica, con amitriptilina como primera línea, con evidencia más limitada que en migraña para otras alternativas.',
      tx_intervencionista: 'No hay un rol establecido de rutina; la toxina botulínica no ha mostrado beneficio consistente en la cefalea tensional, a diferencia de la migraña crónica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Reevaluación de la frecuencia y de posibles comorbilidades psiquiátricas que perpetúan el cuadro.',
      pronostico: 'Generalmente benigno; la forma crónica tiene mayor impacto en la calidad de vida y mayor asociación con comorbilidad psiquiátrica.',
      algoritmo: ['Cefalea bilateral, opresiva, leve-moderada, sin agravarse con actividad física → sospechar cefalea tensional', 'Aplicar criterios ICHD-3 y descartar migraña (a lo sumo 1 de foto/fonofobia, sin náusea significativa)', 'Clasificar la frecuencia (infrecuente, frecuente, crónica)', 'AINE/paracetamol para las crisis agudas, evitando el uso excesivo', 'Frecuente o crónica → amitriptilina como preventivo de primera línea']
    },
    {
      nombre: 'Cefalea en racimos y cefalalgias autonómico-trigeminales',
      color: '#966b35',
      definicion: 'La más frecuente de las cefalalgias autonómico-trigeminales, un grupo de cefaleas primarias caracterizadas por dolor unilateral severo asociado a síntomas autonómicos ipsilaterales prominentes; se distingue de la migraña por su brevedad relativa, su patrón circadiano y estacional marcado, y la inquietud motora durante la crisis.',
      fisiopatologia: 'Se atribuye a la activación del reflejo trigémino-autonómico (vía trigémino-facial) junto con una disfunción del generador circadiano hipotalámico posterior, lo que explica el patrón horario y estacional característico de los episodios.',
      epidemiologia: 'Prevalencia de aproximadamente 0.1%, con predominio masculino 3:1, menor que en el pasado, posiblemente por infradiagnóstico histórico en mujeres; edad de inicio típica en la tercera a cuarta década.',
      factores_riesgo: ['Sexo masculino', 'Tabaquismo (asociación fuerte, aunque no necesariamente causal)', 'Antecedente familiar en una minoría de casos', 'Consumo de alcohol como desencadenante durante los periodos activos'],
      clinica: 'Dolor unilateral, orbitario, supraorbitario o temporal, de intensidad severa a muy severa, con una duración de 15 a 180 minutos sin tratamiento, acompañado de al menos un síntoma autonómico ipsilateral (inyección conjuntival, lagrimeo, congestión nasal, rinorrea, edema palpebral, miosis o ptosis) o de inquietud y agitación. Los episodios ocurren en "racimos" de semanas a meses, con frecuencia de un episodio cada 2 días hasta 8 al día, seguidos de periodos de remisión de meses a años en la forma episódica, o sin remisión clara en la forma crónica, menos frecuente.',
      criterios_dx: `ICHD-3: al menos 5 episodios que cumplan los criterios de dolor y síntomas autonómicos o inquietud descritos, con la frecuencia y duración especificadas.${figBlock('Tabla 4', 'Cefalalgias autonómico-trigeminales: espectro por duración y frecuencia', `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Entidad</th><th>Duración</th><th>Frecuencia</th><th>Rasgo distintivo</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Cefalea en racimos</td><td>15-180 min</td><td>1 cada 2 días a 8/día</td><td>Predominio masculino, patrón circadiano/estacional marcado</td></tr>
            <tr><td class="figure-org">Hemicránea paroxística</td><td>2-30 min</td><td>Más de 5/día</td><td>Respuesta absoluta y característica a la indometacina</td></tr>
            <tr><td class="figure-org">SUNCT/SUNA</td><td>Segundos a pocos minutos</td><td>Hasta más de 100/día</td><td>Episodios muy breves y muy frecuentes; peor respuesta a indometacina</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Cuanto más breve y frecuente el episodio dentro de este espectro, mayor la probabilidad de una entidad distinta a la cefalea en racimos clásica; la respuesta a indometacina es una prueba terapéutica diagnóstica útil para la hemicránea paroxística.</div>`)}`,
      laboratorio: 'No aplica de forma directa.',
      imagen: 'RM cerebral con protocolo hipofisario o de silla turca en todo primer episodio, para descartar causas secundarias que pueden mimetizar el cuadro (lesiones hipofisarias, malformaciones vasculares).',
      complementarios: 'Calendario de racimos para documentar el patrón temporal característico.',
      dx_diferencial: 'Otras cefalalgias autonómico-trigeminales de duración distinta (Tabla 4), migraña con síntomas autonómicos leves asociados, neuralgia del trigémino.',
      tx_medico: 'Evitar el alcohol durante el periodo activo del racimo, un desencadenante reconocido; oxígeno de alto flujo (12-15 L/min con mascarilla no recirculante) como tratamiento agudo de primera línea, eficaz en la mayoría de los pacientes en 15-20 minutos.',
      tx_farmacologico: 'Agudo: oxígeno de alto flujo o sumatriptán subcutáneo, cuyo inicio de acción más rápido que la vía oral es esencial dada la corta duración del episodio. Transición o puente: un ciclo corto de corticoide oral o un bloqueo del nervio occipital mayor mientras se titula el preventivo. Preventivo: verapamilo a dosis altas, con monitorización electrocardiográfica por el riesgo de bloqueo auriculoventricular, como primera línea; el galcanezumab, un anticuerpo anti-CGRP, tiene indicación específica aprobada para la forma episódica.',
      tx_intervencionista: 'Estimulación del nervio occipital o del ganglio esfenopalatino, o neuroestimulación hipotalámica profunda en casos crónicos refractarios seleccionados, en centros especializados.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma directa.',
      seguimiento_ambulatorio: 'Seguimiento en clínica de cefalea durante el periodo activo del racimo para el ajuste del preventivo; monitorización electrocardiográfica periódica si se usa verapamilo a dosis altas.',
      pronostico: 'La forma episódica tiene buen pronóstico funcional entre racimos; la forma crónica, 10-15% de los casos, es más difícil de tratar y tiene mayor impacto en la calidad de vida.',
      algoritmo: ['Dolor unilateral severo periorbitario, breve, con síntoma autonómico ipsilateral o inquietud → sospechar cefalea en racimos', 'RM con protocolo hipofisario en el primer episodio', 'Agudo: oxígeno de alto flujo o sumatriptán subcutáneo', 'Puente: corticoide oral corto o bloqueo occipital mientras se titula el preventivo', 'Preventivo: verapamilo a dosis altas con monitorización electrocardiográfica', 'Refractario crónico → neuroestimulación en centro especializado']
    },
    {
      nombre: 'Cefalea secundaria: enfoque general y señales de alarma',
      color: '#5c4a73',
      definicion: 'Cefalea atribuible a una enfermedad subyacente identificable; su reconocimiento oportuno mediante el tamizaje sistemático de señales de alarma es la habilidad clínica más importante en la evaluación de cualquier paciente con cefalea.',
      fisiopatologia: 'El mecanismo del dolor varía por completo según la causa subyacente (irritación meníngea, tracción vascular, inflamación, elevación de la presión intracraneal, entre otros); a diferencia de las cefaleas primarias, no existe un mecanismo unificador, lo que refuerza que el diagnóstico depende del contexto clínico y no de las características del dolor en sí.',
      epidemiologia: 'Representa menos del 10% de las consultas por cefalea, pero incluye las causas con mayor morbimortalidad potencial (hemorragia subaracnoidea, meningitis, disección arterial, entre otras).',
      factores_riesgo: ['Edad de inicio mayor a 50 años', 'Inmunosupresión', 'Embarazo o puerperio', 'Antecedente de neoplasia', 'Traumatismo craneal reciente', 'Anticoagulación'],
      clinica: 'Se identifica mediante la mnemotecnia SNNOOP10 (ver Tabla 1 en la sección de Escalas): síntomas sistémicos o factores de riesgo secundarios, déficit neurológico focal (incluido el papiledema), inicio súbito o en trueno, edad mayor a 50 años, patrón progresivo o cambio en las características habituales, precipitada por Valsalva o por el esfuerzo físico, cambia con la postura, embarazo o puerperio, dolor ocular con síntomas autonómicos, inicio postraumático, patología del sistema inmune, y uso excesivo de analgésicos o fármaco nuevo al inicio del cuadro.',
      criterios_dx: 'La presencia de cualquier señal de alarma obliga a un estudio dirigido (imagen, laboratorio, o punción lumbar según la sospecha específica) antes de etiquetar la cefalea como primaria.',
      laboratorio: 'Dirigido según la sospecha: VSG/PCR si se sospecha arteritis de células gigantes, biometría hemática y panel infeccioso si hay fiebre, pruebas de coagulación si hay anticoagulación o sospecha de trombosis venosa.',
      imagen: 'TC simple urgente si hay sospecha de hemorragia (cefalea en trueno, traumatismo); RM cerebral, con o sin contraste según la sospecha, para la mayoría del resto de los escenarios de alarma no urgentes; angio-TC o angio-RM si se sospecha causa vascular (disección, trombosis venosa, síndrome de vasoconstricción cerebral reversible).',
      complementarios: 'Punción lumbar si hay sospecha de meningitis, hemorragia subaracnoidea con TC negativa, o hipertensión intracraneal idiopática, con medición de la presión de apertura.',
      dx_diferencial: 'Todo el espectro de cefaleas primarias, que debe reconsiderarse solo después de haber descartado razonablemente las causas secundarias sugeridas por el contexto clínico.',
      tx_medico: 'Dirigido enteramente a la causa subyacente identificada; no existe un tratamiento sintomático genérico apropiado hasta establecer el diagnóstico.',
      tx_farmacologico: 'Depende de la etiología específica (ver las tarjetas de arteritis de células gigantes, cefalea en trueno, entre otras).',
      tx_intervencionista: 'Depende de la etiología específica.',
      criterios_uci: 'Depende de la gravedad de la causa subyacente identificada, por ejemplo, hemorragia subaracnoidea o meningitis con compromiso del estado de consciencia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Depende de la causa subyacente.',
      seguimiento_ambulatorio: 'Depende de la causa subyacente; reevaluación si la cefalea persiste pese al tratamiento de la causa identificada.',
      pronostico: 'Determinado enteramente por la etiología subyacente; el retraso diagnóstico en las causas graves (hemorragia subaracnoidea, meningitis, disección arterial) empeora significativamente el pronóstico.',
      algoritmo: ['Todo paciente con cefalea → tamizaje sistemático de señales de alarma (SNNOOP10)', 'Cualquier señal presente → estudio dirigido según la sospecha específica (imagen, laboratorio, punción lumbar)', 'Sin señales de alarma y patrón estable → proceder a clasificar el fenotipo de cefalea primaria', 'Reevaluar si cambia el patrón habitual o aparece una nueva señal de alarma en el seguimiento']
    },
    {
      nombre: 'Cefalea en trueno: diagnóstico diferencial urgente',
      color: '#8a3030',
      definicion: 'Cefalea de intensidad máxima alcanzada en menos de un minuto desde su inicio, una presentación que en sí misma constituye una emergencia diagnóstica independientemente de la causa final identificada, ya que hasta en una cuarta parte de los casos corresponde a una hemorragia subaracnoidea u otra causa vascular grave.',
      fisiopatologia: 'Refleja habitualmente un evento vascular agudo (rotura aneurismática, disección arterial, trombosis venosa, vasoconstricción segmentaria reversible) que produce una activación súbita y masiva de las vías nociceptivas meníngeas o vasculares; con menor frecuencia puede ser la manifestación de una cefalea primaria en trueno idiopática, un diagnóstico de exclusión.',
      epidemiologia: 'La hemorragia subaracnoidea es la causa identificada en aproximadamente 10-25% de los casos evaluados en urgencias; el resto se reparte entre otras causas vasculares graves y, en más de la mitad de los casos tras un estudio completo negativo, una cefalea primaria en trueno.',
      factores_riesgo: ['Hipertensión arterial no controlada', 'Embarazo o puerperio (síndrome de vasoconstricción cerebral reversible)', 'Exposición a sustancias vasoactivas (simpaticomiméticos, algunos antidepresivos, triptanes en dosis excesivas)', 'Antecedente de aneurisma o malformación vascular conocida'],
      clinica: 'Dolor de intensidad máxima alcanzada en segundos a un minuto, con frecuencia descrito como "el peor de la vida"; puede acompañarse o no de otros síntomas según la causa: rigidez de nuca y pérdida de consciencia transitoria en la hemorragia subaracnoidea, déficit focal en la disección o el síndrome de vasoconstricción, dolor cervical en la disección de arterias cervicales.',
      criterios_dx: 'Definición basada en el tiempo hasta la intensidad máxima, menor a 1 minuto, independientemente de la causa; el diagnóstico etiológico requiere un algoritmo de estudio escalonado.',
      laboratorio: 'Según la sospecha específica dirigida por la clínica: coagulación si se considera trombosis venosa, panel toxicológico si se sospecha exposición a vasoactivos.',
      imagen: 'TC simple de cráneo urgente como primer estudio; si es negativa y la sospecha de hemorragia subaracnoidea persiste, punción lumbar (xantocromía) o RM con secuencias sensibles a sangre; angio-TC o angio-RM de cabeza y cuello para descartar disección, trombosis venosa, o síndrome de vasoconstricción cerebral reversible, que puede requerir angiografía seriada porque el vasoespasmo segmentario característico puede no ser evidente en el estudio inicial y solo aparecer días después.',
      complementarios: 'Ninguno adicional específico más allá del algoritmo de imagen escalonado.',
      dx_diferencial: 'Hemorragia subaracnoidea, disección arterial cervicocefálica, trombosis de senos venosos cerebrales, síndrome de vasoconstricción cerebral reversible, apoplejía hipofisaria, cefalea primaria en trueno (diagnóstico de exclusión tras estudio negativo).',
      tx_medico: 'Manejo dirigido enteramente por la causa identificada; mientras se completa el estudio, control sintomático del dolor y de la presión arterial si está elevada.',
      tx_farmacologico: 'Dependiente de la causa (ver las tarjetas específicas de HSA en el tema de Enfermedad Cerebrovascular); en el síndrome de vasoconstricción cerebral reversible, evitar los vasoconstrictores, incluidos los triptanes, y considerar nimodipino u otros bloqueadores de canales de calcio.',
      tx_intervencionista: 'Dependiente de la causa identificada.',
      criterios_uci: 'Toda cefalea en trueno con una causa vascular grave confirmada o razonablemente sospechada requiere manejo neurocrítico mientras se completa el estudio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Dependiente de la causa; si el estudio inicial es negativo pero la sospecha de síndrome de vasoconstricción cerebral reversible persiste, angiografía de control en 1-3 semanas.',
      seguimiento_ambulatorio: 'Dependiente de la causa; en la cefalea primaria en trueno idiopática, seguimiento clínico sin tratamiento específico más allá del control sintomático.',
      pronostico: 'Determinado por la causa subyacente; el retraso diagnóstico en la hemorragia subaracnoidea y otras causas vasculares graves empeora significativamente el pronóstico, de ahí la importancia de tratar toda cefalea en trueno como una emergencia hasta demostrar lo contrario.',
      algoritmo: ['Cefalea que alcanza intensidad máxima en menos de 1 minuto → tratar como emergencia', 'TC simple de cráneo urgente', 'TC negativa + sospecha persistente → punción lumbar o RM sensible a sangre', 'Angio-TC/angio-RM de cabeza y cuello (disección, trombosis venosa, RCVS)', 'Estudio completo negativo → considerar cefalea primaria en trueno (diagnóstico de exclusión)', 'Sospecha de RCVS con estudio inicial negativo → angiografía de control en 1-3 semanas']
    },
    {
      nombre: 'Arteritis de células gigantes',
      color: '#3f6b52',
      definicion: 'Vasculitis de vaso grande y mediano que afecta característicamente las ramas craneales de las arterias originadas en el cayado aórtico, con la cefalea de nuevo inicio en un paciente mayor de 50 años como una de sus formas de presentación más frecuentes y urgentes por el riesgo de pérdida visual irreversible.',
      fisiopatologia: 'Inflamación granulomatosa de la pared arterial mediada por linfocitos T y macrófagos, con hiperplasia de la íntima que puede ocluir la luz vascular; la afectación de la arteria oftálmica o sus ramas produce neuropatía óptica isquémica anterior, la causa de la ceguera asociada a esta enfermedad, que puede ser irreversible incluso tras iniciar tratamiento si ya se produjo el infarto.',
      epidemiologia: 'Incidencia que aumenta marcadamente con la edad, prácticamente exclusiva de mayores de 50 años, con un pico entre los 70 y 80 años; predominio femenino y mayor prevalencia en poblaciones de ascendencia del norte de Europa.',
      factores_riesgo: ['Edad mayor a 50 años, el factor más determinante', 'Sexo femenino', 'Ascendencia del norte de Europa', 'Antecedente de polimialgia reumática, que coexiste hasta en 40-60% de los casos'],
      clinica: 'Cefalea de nuevo inicio, típicamente temporal, a menudo con sensibilidad del cuero cabelludo (dolor al peinarse o al apoyar la cabeza en la almohada); claudicación mandibular, dolor al masticar que cede con el reposo, un hallazgo con alta especificidad; síntomas visuales (amaurosis fugaz, diplopía, pérdida visual franca) que constituyen una urgencia oftalmológica; síntomas sistémicos (fiebre, pérdida de peso, malestar general) y síntomas de polimialgia reumática asociada (dolor y rigidez de cinturas escapular y pélvica).',
      criterios_dx: 'Sospecha clínica más VSG y/o PCR elevadas, confirmada idealmente por biopsia de la arteria temporal (puede ser focal, por lo que una biopsia negativa no excluye el diagnóstico si la sospecha clínica es alta) o por ecografía Doppler de arterias temporales (signo del halo) o angio-RM/angio-TC en centros con experiencia, según los criterios de clasificación ACR/EULAR 2022.',
      laboratorio: 'VSG y PCR elevadas en la gran mayoría de los casos, aunque un valor normal no excluye completamente el diagnóstico; trombocitosis reactiva frecuente; anemia normocítica normocrómica de enfermedad crónica.',
      imagen: 'Ecografía Doppler de arterias temporales (signo del halo, engrosamiento hipoecoico de la pared) como estudio no invasivo de primera línea en centros con experiencia; angio-RM o PET-TC para evaluar la afectación de grandes vasos (aorta y sus ramas principales) cuando se sospecha compromiso extracraneal.',
      complementarios: 'Biopsia de la arteria temporal, idealmente dentro de las primeras 1-2 semanas de iniciado el corticoide; el tratamiento no debe retrasarse esperando la biopsia ante sospecha clínica alta, especialmente con síntomas visuales.',
      dx_diferencial: 'Otras cefaleas secundarias del adulto mayor, polimialgia reumática aislada, neuropatía óptica isquémica anterior no arterítica, otras vasculitis de vaso grande.',
      tx_medico: 'Iniciar el tratamiento de inmediato ante sospecha clínica razonable, sin esperar la confirmación histológica, especialmente si hay síntomas visuales, dado el riesgo de pérdida visual irreversible con cada hora de retraso.',
      tx_farmacologico: 'Corticoide sistémico en dosis altas: prednisona oral 40-60 mg/día si no hay síntomas visuales; metilprednisolona IV en pulsos (500-1000 mg/día por 3 días) si hay pérdida visual o amaurosis fugaz, seguida de prednisona oral, con reducción gradual muy lenta a lo largo de 1-2 años guiada por la clínica y los reactantes de fase aguda. El tocilizumab, un inhibidor del receptor de IL-6, se usa como ahorrador de corticoide en casos con recaídas frecuentes o para reducir la dosis acumulada de esteroide.',
      tx_intervencionista: 'No aplica de forma directa; la biopsia es diagnóstica, no terapéutica.',
      criterios_uci: 'No aplica salvo complicación vascular grave asociada (infarto isquémico por afectación de grandes vasos).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Evaluación oftalmológica urgente si hay cualquier síntoma visual, antes de completar el resto del estudio.',
      seguimiento_ambulatorio: 'Seguimiento reumatológico para el ajuste gradual del corticoide y la vigilancia de recaídas y de los efectos adversos de la corticoterapia prolongada, como osteoporosis y diabetes.',
      pronostico: 'Con tratamiento oportuno, el pronóstico visual del ojo no afectado es bueno; la pérdida visual ya establecida rara vez se recupera, de ahí la importancia de no retrasar el tratamiento por confirmar el diagnóstico.',
      algoritmo: ['Cefalea de nuevo inicio en mayor de 50 años → sospechar arteritis de células gigantes', 'VSG y PCR urgentes; interrogar claudicación mandibular y síntomas visuales', 'Síntomas visuales → evaluación oftalmológica urgente más metilprednisolona IV en pulsos', 'Sin síntomas visuales → prednisona oral en dosis altas, sin esperar la biopsia', 'Biopsia de arteria temporal (o ecografía Doppler) para confirmación, sin retrasar el tratamiento', 'Reducción gradual muy lenta del corticoide, considerar tocilizumab si hay recaídas']
    },
    {
      nombre: 'Cefalea posterior a punción lumbar',
      color: '#2d5f6b',
      definicion: 'Cefalea ortostática que aparece tras una punción lumbar, o cualquier procedimiento que perfore la duramadre, causada por la fuga persistente de líquido cefalorraquídeo a través del sitio de punción.',
      fisiopatologia: 'La pérdida de líquido cefalorraquídeo reduce la presión intracraneal y, según el modelo fisiopatológico predominante, produce tracción sobre las estructuras sensibles al dolor (meninges, vasos) al perder el efecto de flotación que normalmente amortigua el encéfalo, agravándose en posición erguida por el efecto adicional de la gravedad sobre ese desplazamiento.',
      epidemiologia: 'Ocurre en aproximadamente 10-40% de las punciones lumbares diagnósticas con aguja convencional, con mayor riesgo con agujas de mayor calibre y de punta cortante tipo Quincke, y con menor frecuencia, 1-2%, tras anestesia epidural con perforación dural inadvertida.',
      factores_riesgo: ['Sexo femenino', 'Edad joven', 'Bajo índice de masa corporal', 'Antecedente de cefalea previa, incluida la migraña', 'Uso de agujas de mayor calibre o de punta cortante en vez de punta de lápiz (atraumática)'],
      clinica: 'Cefalea de características ortostáticas marcadas: aparece o empeora significativamente en los primeros 15 minutos de bipedestación o sedestación, y mejora en los siguientes 15-30 minutos al recostarse; típicamente de localización frontal-occipital, puede acompañarse de rigidez de nuca, náusea, tinnitus, hipoacusia o diplopía por tracción del sexto par craneal; se presenta habitualmente dentro de los primeros 5 días tras el procedimiento.',
      criterios_dx: 'ICHD-3: cefalea que se desarrolla dentro de los 5 días tras la punción dural, con el patrón ortostático característico, en un paciente con antecedente del procedimiento; la resolución espontánea dentro de 1-2 semanas o tras el sellado de la fuga apoya el diagnóstico.',
      laboratorio: 'No aplica de forma directa.',
      imagen: 'No indicada de rutina si el cuadro es típico; RM cerebral con contraste (realce paquimeníngeo difuso) o RM de columna (colección de líquido epidural) en casos atípicos, prolongados, o refractarios al tratamiento inicial.',
      complementarios: 'Ninguno adicional específico en el caso típico.',
      dx_diferencial: 'Trombosis de senos venosos cerebrales, que puede ser precipitada por la propia punción lumbar en pacientes susceptibles y característicamente NO mejora en decúbito, a diferencia de la cefalea pospunción típica; migraña o cefalea tensional coincidente; meningitis.',
      tx_medico: 'Reposo relativo, hidratación adecuada; la restricción estricta en cama de forma profiláctica tras la punción no ha demostrado prevenir el cuadro y no se recomienda de rutina.',
      tx_farmacologico: 'Cafeína oral o IV y analgésicos simples como manejo conservador inicial de primera línea, con evidencia modesta pero un perfil de seguridad favorable.',
      tx_intervencionista: 'Parche hemático epidural autólogo en el sitio de la punción original, el tratamiento definitivo más eficaz, reservado para casos que no responden al manejo conservador en 24-48 horas o que son incapacitantes desde el inicio.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Observación breve tras el parche hemático epidural; la mejoría suele ser rápida, en minutos a horas.',
      seguimiento_ambulatorio: 'Seguimiento clínico si el cuadro persiste pese a un primer parche hemático, que puede repetirse; descartar causas alternativas si el patrón deja de ser ortostático.',
      pronostico: 'Excelente en la gran mayoría de los casos, con resolución espontánea en 1-2 semanas incluso sin tratamiento específico; el parche hemático epidural tiene una tasa de éxito superior al 70-90% cuando está indicado.',
      algoritmo: ['Cefalea ortostática dentro de los 5 días tras la punción dural → sospechar cefalea pospunción', 'Confirmar el patrón postural característico (peor de pie, mejor acostado)', 'Manejo conservador inicial: cafeína, analgésicos simples, hidratación', 'Sin mejoría en 24-48 horas o cuadro incapacitante → parche hemático epidural', 'Patrón atípico o refractario a un segundo parche → estudio de imagen para descartar un diagnóstico alternativo']
    },
    {
      nombre: 'Neuralgia del trigémino',
      color: '#6b4a2e',
      definicion: 'Trastorno de dolor facial neuropático caracterizado por episodios recurrentes de dolor unilateral, breve, similar a una descarga eléctrica, limitado a la distribución de una o más ramas del nervio trigémino, típicamente desencadenado por estímulos táctiles inocuos.',
      fisiopatologia: 'En la gran mayoría de los casos, la forma clásica, se atribuye a la compresión neurovascular de la raíz del nervio trigémino en su zona de entrada al tronco encefálico, generalmente por un asa vascular, con mayor frecuencia la arteria cerebelosa superior, que produce desmielinización focal y generación ectópica de impulsos; la forma secundaria se debe a una lesión estructural identificable, como esclerosis múltiple o un tumor del ángulo pontocerebeloso.',
      epidemiologia: 'Incidencia de 4-5 casos por 100,000 habitantes al año, con predominio femenino y edad de inicio típica después de los 50 años; la aparición en un paciente joven, especialmente bilateral, debe hacer sospechar esclerosis múltiple.',
      factores_riesgo: ['Edad avanzada', 'Sexo femenino', 'Hipertensión arterial, asociada a la compresión vascular', 'Esclerosis múltiple, causa de la forma secundaria en pacientes jóvenes'],
      clinica: 'Episodios de dolor unilateral, súbito, similar a una descarga eléctrica, de segundos de duración, rara vez más de 1-2 minutos, en la distribución de la segunda o tercera rama del trigémino con mayor frecuencia que la primera, desencadenados por estímulos táctiles inocuos en una "zona gatillo" (lavarse la cara, masticar, hablar, el viento); el paciente permanece asintomático entre los episodios, a diferencia de otros dolores faciales.',
      criterios_dx: 'ICHD-3: al menos 3 episodios de dolor facial unilateral que cumplan los criterios de distribución, calidad, intensidad, duración y desencadenante descritos, sin déficit neurológico clínicamente evidente, lo que orienta a la forma clásica, o con déficit u otra causa identificada en la imagen, la forma secundaria.',
      laboratorio: 'No aplica de forma directa.',
      imagen: 'RM cerebral con protocolo específico de fosa posterior y ángulo pontocerebeloso en todo paciente de nuevo diagnóstico, para identificar la compresión neurovascular cuando es visible y, sobre todo, para excluir causas secundarias, como esclerosis múltiple o tumor.',
      complementarios: 'Ninguno adicional específico más allá de la RM dirigida.',
      dx_diferencial: 'Neuralgia del glosofaríngeo (dolor en la orofaringe o el oído), síndrome de dolor facial persistente idiopático (dolor continuo, no paroxístico, sin zona gatillo), sinusitis, patología dental, cefalalgias autonómico-trigeminales, que sí tienen síntomas autonómicos prominentes, a diferencia de la neuralgia clásica.',
      tx_medico: 'Educación sobre la identificación y evitación de los desencadenantes específicos del paciente cuando sea posible sin comprometer funciones esenciales, como la higiene oral y la alimentación.',
      tx_farmacologico: 'Carbamazepina u oxcarbazepina como primera línea, con alta tasa de respuesta inicial; lamotrigina, baclofeno o gabapentina como alternativas o coadyuvantes en casos de respuesta parcial o efectos adversos limitantes.',
      tx_intervencionista: 'Descompresión microvascular, el procedimiento con mayor probabilidad de resolución a largo plazo en la compresión neurovascular confirmada, especialmente en pacientes más jóvenes y sin comorbilidad que contraindique la cirugía, o procedimientos ablativos percutáneos del ganglio de Gasser (radiofrecuencia, glicerol, balón) o radiocirugía estereotáctica en pacientes no candidatos a cirugía abierta o que prefieren un abordaje menos invasivo.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de forma directa salvo el periodo perioperatorio si se realiza descompresión microvascular.',
      seguimiento_ambulatorio: 'Ajuste del fármaco de primera línea, vigilancia de efectos adversos, en especial hiponatremia con carbamazepina u oxcarbazepina, reevaluación de la candidatura a tratamiento intervencionista si hay farmacorresistencia.',
      pronostico: 'Buena respuesta inicial a carbamazepina en la mayoría de los casos, aunque tiende a requerir dosis crecientes con el tiempo; la descompresión microvascular ofrece las tasas más altas de remisión prolongada en los candidatos apropiados.',
      algoritmo: ['Dolor facial unilateral, breve, en descarga eléctrica, con zona gatillo → sospechar neuralgia del trigémino', 'RM cerebral con protocolo de fosa posterior (descartar causa secundaria, identificar compresión neurovascular)', 'Carbamazepina u oxcarbazepina como primera línea', 'Respuesta parcial o efectos adversos → lamotrigina, baclofeno o gabapentina como alternativa/coadyuvante', 'Farmacorresistencia con compresión neurovascular confirmada → descompresión microvascular', 'No candidato a cirugía abierta → procedimiento ablativo percutáneo o radiocirugía']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La mayoría de las cefaleas se manejan de forma ambulatoria; el ingreso hospitalario se reserva para el estudio urgente de una posible cefalea secundaria grave, o para el manejo de una crisis aguda severa refractaria al tratamiento ambulatorio.',
    parametros: [
      'Reevaluación neurológica seriada en toda cefalea con señales de alarma, hasta completar el estudio dirigido.',
      'Respuesta al tratamiento agudo administrado, para documentar la eficacia y guiar el ajuste del plan ambulatorio al alta.',
      'Estado de hidratación y control de náusea/vómito en las crisis de migraña severa que requieren manejo en urgencias.',
      'Vigilancia oftalmológica estrecha en la arteritis de células gigantes con síntomas visuales, dado el riesgo de progresión a pérdida visual bilateral.',
      'Documentación estructurada del consumo de analgésicos agudos en cada consulta, para detectar precozmente un patrón de abuso de medicación.'
    ],
    criterios_uci_general: 'Cefalea secundaria con una causa grave confirmada que requiera manejo neurocrítico (hemorragia subaracnoidea, meningitis con compromiso del estado de consciencia, entre otras).',
    criterios_tips_general: 'No aplica.',
    criterios_trasplante_general: 'No aplica.',
    prevencion: 'Educación sobre la identificación de desencadenantes individuales, un uso responsable de los analgésicos agudos (límite educado de máximo 2-3 días por semana) para prevenir la cronificación, adherencia al tratamiento preventivo cuando está indicado, y un umbral bajo para reevaluar el diagnóstico si el patrón habitual de la cefalea cambia.'
  }
};

export const compCites = {
  'Migraña episódica': { fisiopatologia: [1], tx_farmacologico: [1, 4, 5] },
  'Migraña crónica y cefalea por abuso de medicación': { definicion: [2], tx_farmacologico: [6] },
  'Cefalea tensional': { criterios_dx: [2, 9] },
  'Cefalea en racimos y cefalalgias autonómico-trigeminales': { fisiopatologia: [7], tx_farmacologico: [7, 8] },
  'Cefalea secundaria: enfoque general y señales de alarma': { clinica: [3] },
  'Cefalea en trueno: diagnóstico diferencial urgente': { fisiopatologia: [10], tx_farmacologico: [10] },
  'Arteritis de células gigantes': { criterios_dx: [11], tx_farmacologico: [12] },
  'Cefalea posterior a punción lumbar': { fisiopatologia: [13], tx_intervencionista: [13, 14] },
  'Neuralgia del trigémino': { tx_farmacologico: [15], tx_intervencionista: [15, 16] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'SNNOOP10': [3], 'Criterios ICHD-3 de migraña sin aura': [2], 'Criterios ICHD-3 de cefalea tensional': [2, 9],
  'Criterios ICHD-3 de cefalea en racimos': [2, 7], 'MIDAS (Migraine Disability Assessment)': [4], 'HIT-6 (Headache Impact Test)': [4]
};
export const escalaCalc = { 'MIDAS (Migraine Disability Assessment)': 'midas', 'HIT-6 (Headache Impact Test)': 'hit6' };
export const compGroups = [
  { title: 'Cefaleas primarias', items: ['Migraña episódica', 'Migraña crónica y cefalea por abuso de medicación', 'Cefalea tensional', 'Cefalea en racimos y cefalalgias autonómico-trigeminales'] },
  { title: 'Cefaleas secundarias', items: ['Cefalea secundaria: enfoque general y señales de alarma', 'Cefalea en trueno: diagnóstico diferencial urgente', 'Arteritis de células gigantes', 'Cefalea posterior a punción lumbar'] },
  { title: 'Neuralgias craneales', items: ['Neuralgia del trigémino'] }
];
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
export const arbol = {
  root: { title: 'CEFALEAS', color: '#7a4a2e', target: 'definicion' },
  branches: [
    { title: 'Cefalea primaria', sub: '>90% de las consultas', color: '#8c3a34', target: 'diagnostico', leaves: [
      { title: 'Migraña', sub: 'Unilateral, pulsátil, náusea/fotofobia', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Cefalea en racimos', sub: 'Autonómica, inquietud', color: '#966b35', target: 'complicaciones' }
    ] },
    { title: 'Cefalea secundaria', sub: 'SNNOOP10: cualquier bandera obliga a estudio', color: '#5c4a73', target: 'diagnostico', leaves: [
      { title: 'Cefalea en trueno', sub: 'Descartar HSA primero', color: '#8a3030', target: 'complicaciones' },
      { title: 'Arteritis de células gigantes', sub: '>50 años, riesgo visual', color: '#3f6b52', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [11], no_invasivos: [2, 3] };
export const clasificacionCite = [2, 3];
export const seguimientoCite = [1, 6];
