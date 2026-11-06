// protocols/pediatria-farmacos.js
// Farmacología pediátrica: base de datos declarativa que alimenta la sección Pediatría
// (engine/pediatria.js). Es la pregunta que más veces recibe el residente de pediatría en la
// guardia: cuánto, cada cuánto, cuántos mililitros de lo que hay en el carro, y cómo se diluye.
//
// DOS VISTAS, UN SOLO CONJUNTO DE DATOS. La pestaña "Por enfermedad" NO es una segunda lista
// escrita a mano: se deriva agrupando las líneas de `dosis[]` por su campo `indicaciones[]`.
// Escribir la misma relación dos veces es como se acaba con un fármaco que en la lista de la
// enfermedad sale con la dosis que ya se corrigió en su propia ficha, y nadie se enteró. Hay
// pruebas que comprueban la integridad en los dos sentidos.
//
// EL NEONATO SE DOSIFICA DESDE LA REFERENCIA NEONATAL. Decisión del autor, y es la regla más
// importante de este archivo: toda línea que pueda alcanzar a un paciente de 28 días o menos
// cita NeoFax, o el Harriet Lane donde NeoFax no trae monografía. El Taketomo, que es un manual
// de dosificación general excelente, NO vale para el neonato aquí. Por eso cada línea que NO es
// neonatal declara `edadMin: 29` de forma explícita: así no hay dosis que alcance a un recién
// nacido por descuido, y una prueba lo comprueba línea por línea.
//
// FUENTE DE CADA DATO
// Todo lo que hay aquí se leyó abriendo la página, y la página queda en `fuente.pagina` para que
// cualquiera pueda volver a ella. La idea que sostiene cada línea queda en un comentario al lado;
// la prosa de los manuales no se copia, porque tiene derechos reservados y esta app es pública.
// Lo que se toma es el DATO (la dosis, el intervalo, el tope, la dilución), que no es expresión
// protegible.
//
// Tres trampas de estos PDF, por si alguien amplía el bloque:
//  - la capa de texto del Taketomo trae errores de OCR ("AC1CLOVIR", "CURATO DE SODIO" por
//    CITRATO), así que no se puede extraer en bloque: hay que leer la página;
//  - en el Taketomo, el encabezado de cada página es el fármaco que EMPIEZA en ella, no el del
//    texto de arriba, que suele ser la cola de la monografía anterior. Buscar "Dosificación" en
//    un rango de páginas devolvió la dosis de un barbitúrico bajo amoxicilina y la clindamicina
//    tópica bajo la sistémica;
//  - NeoFax no tiene encabezado con el nombre, pero sí un marcador "NEONATAL DRUG MONOGRAPH"
//    seguido del fármaco al pie de cada página de la monografía: ese es su índice.
//
// Las `presentaciones[]` son las concentraciones habituales del mercado local, y la vista lo dice
// en cada selector: los manuales listan productos de Estados Unidos. Donde la fuente da la
// reconstitución (ceftriaxona, ampicilina, gentamicina), la concentración sí sale de ella y queda
// anotada en `dilucion`.
//
// Los textos se inyectan con innerHTML: usar &lt; y &gt; en vez de los signos de menor y mayor.

/* ---------------- Fuentes ----------------
   `fuente.ref` de cada línea de dosis apunta aquí. Separar la referencia de la página permite que
   la prueba compruebe que toda línea trae las dos cosas sin repetir la cita en cada entrada.

   `autoridad` es lo que esa referencia PUEDE respaldar: los tres son manuales de dosificación, y
   un manual de dosificación respalda una dosis, no una elección de tratamiento (ver `linea` en el
   contrato de abajo).

   `neonatal` dice si la referencia sirve para dosificar a un paciente de 28 días o menos. NeoFax
   es una obra neonatal de principio a fin. El Harriet Lane solo cuenta donde imprime una línea
   "Neonate:" explícita, que es el único sitio del que se ha tomado aquí. El Taketomo trae
   "Dosificación neonatal" en muchas monografías, pero queda excluido a propósito: la regla del
   autor es que el neonato se dosifique desde la referencia neonatal.

   Solo se declara lo que se usa: una prueba falla si una referencia de esta tabla no la cita
   ninguna línea, porque una fuente declarada y no usada es una fuente que nadie comprobó. */
export const FUENTES = {
  TAKETOMO: {
    etiqueta: 'Taketomo, 18.ª ed.',
    autoridad: 'manual',
    neonatal: false,
    // Sin año: el PDF que hay en Bibliografia/XVI. Pediatría/ no trae página de créditos legible,
    // y sus referencias internas llegan hasta 2009. Se cita la edición, que es verificable, en
    // vez de un año de memoria. Una cita inventada es peor que una cita incompleta.
    cita: 'Taketomo CK, Hodding JH, Kraus DM. Manual de dosificación pediátrica y neonatal. 18.ª ed. Lexicomp / Wolters Kluwer. Manual de dosificación: respalda la dosis, no la elección del tratamiento'
  },
  NEOFAX: {
    etiqueta: 'NeoFax 2026',
    autoridad: 'manual',
    neonatal: true,
    cita: 'NeoFax. EBSCO Information Services; 2025. Obra de dosificación neonatal: respalda la dosis, no la elección del tratamiento'
  },
  HARRIET: {
    etiqueta: 'Harriet Lane, 23.ª ed.',
    autoridad: 'manual',
    neonatal: true,
    cita: 'The Harriet Lane Handbook. 23.ª ed. Elsevier; 2023. Formulario pediátrico: respalda la dosis, no la elección del tratamiento. Como fuente neonatal vale solo donde imprime una dosis de recién nacido explícita'
  }
};

/* ---------------- Niveles de evidencia ----------------
   Tres, no dos. En VPO bastan 'guia' y 'consenso' porque allí cada entrada tiene o no una
   recomendación de sociedad. Aquí el caso NORMAL no es ninguno de los dos: es un manual de
   referencia, que es más que una práctica aceptada sin fuente y menos que una guía. Meterlo en
   'consenso' lo subestimaría y en 'guia' lo sobrevendería, y las dos cosas son información falsa
   sobre cuánto peso darle al número.

   Cuando el propio manual atribuye una dosis a una guía (el NAEPP para la crisis asmática, Tunkel
   para la dexametasona en la meningitis), eso se dice en la `nota` de la línea y la evidencia
   sigue siendo 'manual': la fuente que se leyó es el manual, no la guía. */
export const EVIDENCIA = {
  guia:     { label: 'Recomendación de guía',  clase: 'vpo-ev-guia' },
  manual:   { label: 'Manual de dosificación', clase: 'vpo-ev-manual' },
  consenso: { label: 'Consenso de práctica',   clase: 'vpo-ev-consenso' }
};

/* ---------------- Clases terapéuticas ----------------
   El eje de la pestaña Fármacos: un fármaco pertenece a una y solo una. Mismos tonos que la
   paleta de VPO, para no inventar colores nuevos. */
export const grupos = [
  { id: 'analgesicos',   label: 'Analgésicos y antipiréticos',      accent: '#8c3a34' },
  { id: 'betalactamicos', label: 'Antibióticos betalactámicos',     accent: '#3d5a73' },
  // La palabra "antibióticos" tiene que estar también en esta etiqueta: la etiqueta de la clase
  // entra en el pajar del buscador, y sin ella buscar "antibiótico" devolvía los cinco
  // betalactámicos y dejaba fuera a la azitromicina y a la gentamicina.
  { id: 'otros-atb',     label: 'Otros antibióticos: macrólidos y aminoglucósidos', accent: '#5c4a73' },
  { id: 'corticoides',   label: 'Corticoides sistémicos',           accent: '#85602e' },
  { id: 'broncodilatadores', label: 'Broncodilatadores',            accent: '#3f6b52' },
  { id: 'urgencias',     label: 'Fármacos de urgencia',             accent: '#7c2d2d' }
];

/* ---------------- Áreas clínicas ----------------
   El eje de la pestaña Por enfermedad: cada indicación pertenece a una. */
export const areas = [
  { id: 'fiebre-dolor',  label: 'Fiebre y dolor',                   accent: '#8c3a34' },
  { id: 'orl',           label: 'Vías respiratorias altas y oído',  accent: '#3d5a73' },
  { id: 'respiratorio',  label: 'Vías respiratorias bajas y asma',  accent: '#3f6b52' },
  { id: 'infeccioso',    label: 'Infecciones sistémicas y del sistema nervioso', accent: '#7c2d2d' },
  { id: 'neonatal',      label: 'Neonatología',                     accent: '#5a6b35' },
  { id: 'piel',          label: 'Piel y tejidos blandos',           accent: '#85602e' },
  { id: 'urgencias',     label: 'Urgencias y reanimación',          accent: '#5c4a73' },
  { id: 'metabolico',    label: 'Metabólico y electrolitos',        accent: '#4a5c73' },
  { id: 'reumatologia',  label: 'Reumatología',                     accent: '#6b5335' },
  { id: 'profilaxis',    label: 'Profilaxis',                       accent: '#4a5c73' }
];

/* ---------------- Taxonomía de cuadros clínicos ----------------
   Los nombres y la agrupación de la vista "Por enfermedad" viven AQUÍ, no en cada línea de dosis:
   así renombrar un cuadro es un cambio en un solo sitio y no en catorce.

   `contexto` es OBLIGATORIO y no es adorno: es lo que impide que la lista se lea como "estos
   fármacos tratan esto, elige uno". Dice a qué paciente aplica la lista y a cuál no, y se pinta
   siempre, encima de ella. Ninguna de las fuentes de este archivo ordena tratamientos (son
   manuales de dosificación), así que la vista no presenta primera línea ni alternativas.

   `alias[]` entra en el buscador: nadie escribe "faringoamigdalitis estreptocócica". */
export const indicaciones = [
  { id: 'fiebre', area: 'fiebre-dolor', nombre: 'Fiebre',
    alias: ['antipiretico', 'temperatura', 'calentura'],
    contexto: 'Tratamiento sintomático de la fiebre, a cualquier edad. No orienta sobre su causa ni sustituye la búsqueda de foco en el lactante pequeño febril.' },

  { id: 'dolor-leve-moderado', area: 'fiebre-dolor', nombre: 'Dolor leve a moderado',
    alias: ['analgesia', 'analgesico', 'dolor'],
    contexto: 'Dolor que no requiere opioide. No cubre el dolor posoperatorio mayor, el oncológico ni el de la crisis vasooclusiva.' },

  { id: 'otitis-media-aguda', area: 'orl', nombre: 'Otitis media aguda',
    alias: ['OMA', 'oido', 'otitis'],
    contexto: 'Niño por lo demás sano. Las dosis altas de amoxicilina son las que cubren el neumococo con sensibilidad reducida a penicilina. No cubre la otitis externa ni la otitis media crónica supurada.' },

  { id: 'faringoamigdalitis-estreptococica', area: 'orl', nombre: 'Faringoamigdalitis estreptocócica',
    alias: ['faringitis', 'amigdalitis', 'estreptococo', 'anginas'],
    contexto: 'Faringitis por estreptococo del grupo A confirmada o con alta sospecha clínica. El objetivo del tratamiento completo es prevenir la fiebre reumática, no acortar los síntomas.' },

  { id: 'sinusitis-bacteriana-aguda', area: 'orl', nombre: 'Sinusitis bacteriana aguda',
    alias: ['sinusitis', 'rinosinusitis'],
    contexto: 'Sinusitis con criterios de sobreinfección bacteriana (persistencia, empeoramiento o cuadro grave). No cubre la rinosinusitis viral, que es la mayoría.' },

  { id: 'crup', area: 'respiratorio', nombre: 'Crup (laringotraqueítis)',
    alias: ['laringotraqueitis', 'estridor', 'tos perruna'],
    contexto: 'Obstrucción laríngea aguda del lactante y el niño pequeño, casi siempre viral. El corticoide se da incluso en el cuadro leve; la adrenalina nebulizada es para el estridor en reposo.' },

  { id: 'neumonia-adquirida-comunidad', area: 'respiratorio', nombre: 'Neumonía adquirida en la comunidad',
    alias: ['NAC', 'neumonia'],
    contexto: 'Lactante y niño previamente sano. No cubre la neumonía nosocomial, la asociada a ventilador, ni al paciente inmunodeprimido. La edad orienta el germen: a partir de los 5 años pesa Mycoplasma pneumoniae.' },

  { id: 'crisis-asmatica', area: 'respiratorio', nombre: 'Crisis asmática',
    alias: ['asma', 'broncoespasmo', 'exacerbacion', 'sibilancias'],
    contexto: 'Exacerbación aguda del asma. No cubre el tratamiento de mantenimiento ni la bronquiolitis del lactante, donde el broncodilatador no tiene el mismo papel.' },

  { id: 'tos-ferina', area: 'respiratorio', nombre: 'Tos ferina',
    alias: ['pertussis', 'coqueluche', 'Bordetella'],
    contexto: 'Tratamiento y profilaxis posexposición. El antibiótico corta la transmisión; sobre la tos influye poco si se empieza tarde.' },

  { id: 'epiglotitis', area: 'respiratorio', nombre: 'Epiglotitis',
    alias: ['supraglotitis'],
    contexto: 'Urgencia de vía aérea. El antibiótico es solo una parte: la prioridad es la vía aérea y el manejo no se decide en una tabla de dosis.' },

  { id: 'edema-via-aerea-extubacion', area: 'respiratorio', nombre: 'Edema de vía aérea y extubación',
    alias: ['extubacion', 'estridor posextubacion', 'edema laringeo'],
    contexto: 'Prevención y tratamiento del edema de vía aérea alrededor de la extubación programada. No incluye al recién nacido: ni NeoFax ni el Harriet Lane dan una dosis neonatal de dexametasona para esto.' },

  { id: 'infeccion-piel-tejidos-blandos', area: 'piel', nombre: 'Infecciones de piel y tejidos blandos',
    alias: ['celulitis', 'impetigo', 'absceso', 'erisipela'],
    contexto: 'Infección de piel y estructuras cutáneas sin criterios de infección necrosante. La cobertura de Staphylococcus aureus resistente a meticilina depende de la epidemiología local y estos fármacos no la garantizan.' },

  { id: 'meningitis-bacteriana', area: 'infeccioso', nombre: 'Meningitis bacteriana',
    alias: ['meningitis', 'LCR'],
    contexto: 'Meningitis bacteriana del lactante, el niño y el recién nacido. Las dosis son las de dosis alta, por la penetración al sistema nervioso central. El esquema empírico depende de la edad y de la epidemiología local.' },

  { id: 'infeccion-bacteriana-grave', area: 'infeccioso', nombre: 'Infección bacteriana grave',
    alias: ['sepsis', 'bacteriemia', 'fiebre sin foco'],
    contexto: 'Infección sistémica que requiere antibiótico, sin foco definido o a la espera de cultivos. Es la dosis del fármaco, no el esquema empírico: la combinación la decide la edad, el foco probable y el protocolo del servicio.' },

  { id: 'fiebre-tifoidea', area: 'infeccioso', nombre: 'Fiebre tifoidea y salmonelosis',
    alias: ['tifoidea', 'Salmonella typhi', 'salmonelosis'],
    contexto: 'Fiebre entérica por Salmonella typhi o paratyphi, y salmonelosis del recién nacido. No cubre la gastroenteritis por Salmonella no tifoidea del niño sano, que no suele requerir antibiótico.' },

  { id: 'infeccion-gonococica', area: 'infeccioso', nombre: 'Infección gonocócica',
    alias: ['gonorrea', 'gonococo', 'Neisseria gonorrhoeae'],
    contexto: 'Infección por Neisseria gonorrhoeae, incluida la del recién nacido de madre no tratada. En el neonato la profilaxis y la enfermedad diseminada llevan dosis distintas.' },

  { id: 'carbunco', area: 'infeccioso', nombre: 'Carbunco (ántrax)',
    alias: ['antrax', 'Bacillus anthracis'],
    contexto: 'Carbunco sensible a penicilina, por exposición o enfermedad. Las dosis están aquí porque las fuentes las traen por franja de edad gestacional, no porque sea un cuadro frecuente: el manejo real se decide con salud pública.' },

  /* ---- Neonatología ---- */
  { id: 'sepsis-neonatal-precoz', area: 'neonatal', nombre: 'Sepsis neonatal precoz',
    alias: ['sepsis neonatal', 'early onset', 'corioamnionitis'],
    contexto: 'Tratamiento empírico del recién nacido con sospecha de sepsis de inicio precoz. NeoFax indica combinar ampicilina con gentamicina, y prefiere cefotaxima, ceftazidima o cefepima cuando hay sospecha de meningitis.' },

  { id: 'lactante-febril-sin-foco', area: 'neonatal', nombre: 'Lactante febril de buen aspecto',
    alias: ['fiebre sin foco', 'febril', 'menor de 28 dias'],
    contexto: 'Tratamiento empírico del lactante febril de buen aspecto en el primer mes de vida, donde el esquema cambia por semanas de vida. Quién necesita ingreso y punción lumbar no se decide aquí.' },

  { id: 'oftalmia-neonatal', area: 'neonatal', nombre: 'Oftalmía neonatal',
    alias: ['conjuntivitis neonatal', 'clamidia', 'ophthalmia neonatorum'],
    contexto: 'Conjuntivitis del recién nacido por Neisseria gonorrhoeae o Chlamydia trachomatis. NeoFax advierte que el tratamiento tópico solo es insuficiente, e innecesario si se da tratamiento sistémico.' },

  { id: 'conducto-arterioso-persistente', area: 'neonatal', nombre: 'Conducto arterioso persistente',
    alias: ['PCA', 'ductus', 'PDA'],
    contexto: 'Cierre farmacológico del conducto arterioso en el prematuro sintomático. NeoFax recuerda que la tasa de cierre espontáneo es alta y que el tratamiento debe reservarse a casos seleccionados.' },

  { id: 'ureaplasma', area: 'neonatal', nombre: 'Infección por Ureaplasma',
    alias: ['Ureaplasma', 'displasia broncopulmonar'],
    contexto: 'Erradicación de Ureaplasma en el gran prematuro. NeoFax la recoge en una franja de edad gestacional muy estrecha y advierte del riesgo de estenosis hipertrófica del píloro con el macrólido en el recién nacido.' },

  { id: 'hiperpotasemia', area: 'metabolico', nombre: 'Hiperpotasemia',
    alias: ['hiperkalemia', 'potasio', 'K alto'],
    contexto: 'Descenso agudo del potasio sérico con beta2 nebulizado, que lo desplaza al interior de la célula sin eliminarlo. No sustituye a las medidas que lo eliminan ni a la protección de membrana si hay cambios en el electrocardiograma.' },

  { id: 'bradicardia-reanimacion', area: 'urgencias', nombre: 'Bradicardia con mala perfusión',
    alias: ['paro', 'reanimacion', 'RCP', 'bradicardia', 'asistolia'],
    contexto: 'Bradicardia o asistolia con compromiso hemodinámico durante la reanimación, incluida la del recién nacido. La dosis va aquí para no tener que buscarla, pero la secuencia de reanimación no se sigue desde una tabla de dosis.' },

  { id: 'anafilaxia', area: 'urgencias', nombre: 'Anafilaxia y reacción de hipersensibilidad grave',
    alias: ['alergia', 'choque anafilactico', 'adrenalina', 'urticaria grave'],
    contexto: 'Reacción alérgica sistémica grave. La adrenalina intramuscular en la cara anterolateral del muslo es el tratamiento, y no hay dosis que sustituya a administrarla pronto.' },

  { id: 'artritis-idiopatica-juvenil', area: 'reumatologia', nombre: 'Artritis idiopática juvenil',
    alias: ['AIJ', 'artritis reumatoide juvenil', 'artritis'],
    contexto: 'Tratamiento antiinflamatorio de la artritis idiopática juvenil. Es la dosis del antiinflamatorio, no el tratamiento de fondo de la enfermedad.' },

  { id: 'profilaxis-endocarditis', area: 'profilaxis', nombre: 'Profilaxis de endocarditis',
    alias: ['endocarditis', 'procedimiento dental'],
    contexto: 'Dosis única antes de un procedimiento, en el paciente con indicación establecida de profilaxis. Quién la necesita no se decide aquí: las indicaciones se han ido restringiendo y dependen de la cardiopatía.' },

  { id: 'quimioprofilaxis-meningococo', area: 'profilaxis', nombre: 'Quimioprofilaxis de contactos de meningococo',
    alias: ['meningococo', 'contacto', 'Neisseria meningitidis'],
    contexto: 'Contacto cercano de un caso de enfermedad meningocócica invasiva. Quién es contacto cercano lo define la autoridad sanitaria, no esta tabla.' }
];

/* ---------------- Contrato de cada fármaco ----------------
   { id, grupo, farmaco, alias[], resumen, presentaciones[], dosis[],
     mecanismo?, adversos[]?, precauciones[]?, ajusteRenal?, dilucion?, administracion?,
     noTriturar?, sinNeonatal?, notas[]? }

   presentaciones[]: { id, etiqueta, mg, mL }
     `mg` es el principio activo que hay en `mL` de producto. En comprimido o cápsula, mL: null, y
     la vista da la dosis en unidades en vez de mililitros. Son OBLIGATORIAS: un volumen sin decir
     de qué concentración sale es la forma más fácil de equivocarse por un factor de dos, porque
     5 mL de 125 mg/5 mL y 5 mL de 250 mg/5 mL se ven igual en la jeringa.

   dosis[]: una línea por cada combinación de indicación, vía y franja.
     indicaciones[]  SIEMPRE un array, aunque sea uno.
     mgkg            { valor } o { min, max }, nunca las dos, más `por: 'dosis' | 'dia'`. UNA sola
                     clave con la base explícita: confundir mg/kg/día con mg/kg/dosis es el error
                     de factor 3 o 4 más repetido de la pediatría. Todo en MILIGRAMOS.
     fija            { valor } o { min, max } en mg, para la dosis que no se multiplica por el
                     peso. Excluye `mgkg`.
     carga           { valor } o { min, max } en mg/kg: la dosis de impregnación, la primera y
                     mayor. Sin ella la línea miente por omisión.
     cada            horas entre dosis. Obligatorio cuando `por` es 'dia'. Puede pasar de 24 (la
                     gentamicina del prematuro va cada 36 o cada 48 h); por encima de 24 no se
                     calcula total diario, porque no existe.
     unica           true para la dosis única, en vez de `cada`.
     via             una de VIAS (engine/pediatria-dosis.js).
     maxDosis / maxDia              techo por toma y diario, en mg.
     maxMgkgDosis / maxMgkgDia      techo por toma y diario, en mg/kg.
                     Los cuatro opcionales; manda el más bajo de los que apliquen.
     edadMin/edadMax DÍAS de vida. `edadMin: 29` es la marca de "esto NO es para un recién
                     nacido", y toda línea que no la lleve tiene que citar una fuente neonatal.
     pmaMin/pmaMax   SEMANAS de edad posmenstrual (gestacional al nacer más días de vida). Es el
                     eje con el que NeoFax reparte casi toda la dosis neonatal.
     egMin/egMax     SEMANAS de edad gestacional AL NACER, que no cambia.
     pesoMin/pesoMax kg de peso actual.
     pesoNacMin/pesoNacMax  GRAMOS de peso al nacer.
                     Los ejes se combinan con Y, que es lo que piden las tablas de NeoFax.
     duracion, nota  texto libre.
     evidencia       'guia' | 'manual' | 'consenso'.
     fuente          { ref, pagina }. Van por LÍNEA y no por fármaco, porque es el caso normal que
                     la dosis neonatal venga de un manual y la pediátrica de otro.
     linea           OPCIONAL (1 = primera elección). Si está, OBLIGA a `fuenteLinea` apuntando a
                     una guía de tratamiento con año. Hoy ninguna línea lo usa: un manual de
                     dosificación dice cuánto, no qué primero. */
export const farmacos = [

  /* ============ Analgésicos y antipiréticos ============ */
  {
    id: 'acetaminofen',
    grupo: 'analgesicos',
    farmaco: 'Acetaminofén',
    alias: ['paracetamol', 'Tylenol', 'Tempra', 'acetaminofeno'],
    resumen: 'Antipirético y analgésico de primera línea a cualquier edad, también en el neonato.',
    presentaciones: [
      { id: 'gotas-100', etiqueta: 'gotas 100 mg/mL', mg: 100, mL: 1 },
      { id: 'susp-160',  etiqueta: 'suspensión 160 mg/5 mL', mg: 160, mL: 5 },
      { id: 'susp-120',  etiqueta: 'suspensión 120 mg/5 mL', mg: 120, mL: 5 },
      { id: 'tab-500',   etiqueta: 'tableta 500 mg', mg: 500, mL: null },
      { id: 'sup-300',   etiqueta: 'supositorio 300 mg', mg: 300, mL: null },
      { id: 'iv-10',     etiqueta: 'solución IV 10 mg/mL', mg: 10, mL: 1 }
    ],
    dosis: [
      /* ---- Fuera del periodo neonatal (Taketomo) ---- */
      {
        // Taketomo p42: oral, lactantes y ninos, 10 a 15 mg/kg/dosis cada 4 a 6 h, sin pasar de
        // cinco dosis en 24 h. El techo absoluto (1 g por toma, 4 g/dia) es el de la linea de
        // adultos de la misma pagina, que es lo que acota al adolescente.
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        mgkg: { min: 10, max: 15, por: 'dosis' },
        cada: 6, via: 'oral',
        maxDosis: 1000, maxDia: 4000,
        edadMin: 29,
        nota: 'No más de cinco dosis en 24 horas. El techo de 1 g por toma y 4 g al día es el del adulto, y es el que acota al adolescente.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 42 }
      },
      {
        // Taketomo p42: rectal, lactantes y ninos, 10 a 20 mg/kg/dosis cada 4 a 6 h.
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        mgkg: { min: 10, max: 20, por: 'dosis' },
        cada: 6, via: 'rectal',
        maxDosis: 1000, maxDia: 4000,
        edadMin: 29,
        nota: 'La vía rectal admite una dosis algo mayor que la oral. El manual advierte que las dosis altas perioperatorias por esta vía (25 a 45 mg/kg) siguen siendo discutidas y no las respalda para uso rutinario.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 42 }
      },
      {
        // Taketomo p42: IV, lactantes y ninos menores de 2 anos, 7.5 a 15 mg/kg/dosis cada 6 h,
        // con techo diario de 60 mg/kg/dia (el manual lo atribuye a Wilson-Smith, 2009).
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        mgkg: { min: 7.5, max: 15, por: 'dosis' },
        cada: 6, via: 'iv',
        maxMgkgDia: 60,
        edadMin: 29, edadMax: 730,
        nota: 'El manual atribuye el techo de 60 mg/kg/día en este grupo a Wilson-Smith, 2009.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 42 }
      },
      {
        // Taketomo p42: IV, ninos de 2 a 12 anos, 15 mg/kg cada 6 h; techo de 15 mg/kg por toma,
        // de 75 mg/kg/dia y de 3 750 mg/dia.
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        mgkg: { valor: 15, por: 'dosis' },
        cada: 6, via: 'iv',
        maxMgkgDosis: 15, maxMgkgDia: 75, maxDia: 3750,
        edadMin: 730, edadMax: 4383,
        nota: 'Alternativa de la misma página: 12.5 mg/kg cada 4 horas.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 42 }
      },

      /* ---- Recién nacido (NeoFax) ---- */
      {
        // NeoFax p17, fiebre y dolor, IV: 28 a menos de 32 semanas de edad gestacional,
        // 10 mg/kg/dosis cada 6 h, techo 40 mg/kg/dia.
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        mgkg: { valor: 10, por: 'dosis' },
        cada: 6, via: 'iv',
        maxMgkgDia: 40,
        egMin: 28, egMax: 32,
        nota: 'Prematuro de 28 a menos de 32 semanas de edad gestacional al nacer.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 17 }
      },
      {
        // NeoFax p17, fiebre y dolor, IV: 32 semanas de edad gestacional o mas,
        // 12.5 mg/kg/dosis cada 6 h, techo 50 mg/kg/dia.
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        mgkg: { valor: 12.5, por: 'dosis' },
        cada: 6, via: 'iv',
        maxMgkgDia: 50,
        egMin: 32,
        nota: 'Recién nacido de 32 semanas de edad gestacional al nacer o más.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 17 }
      },
      {
        // NeoFax p17, oral: menos de 32 semanas de edad POSMENSTRUAL, carga de 20 a 25 mg/kg y
        // luego 12 a 15 mg/kg/dosis cada 12 h.
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        carga: { min: 20, max: 25 },
        mgkg: { min: 12, max: 15, por: 'dosis' },
        cada: 12, via: 'oral',
        pmaMax: 32,
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 17 }
      },
      {
        // NeoFax p17, oral: 32 semanas de edad posmenstrual o mas, misma carga y cada 8 h. En el
        // recien nacido de termino, cada 6 h.
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        carga: { min: 20, max: 25 },
        mgkg: { min: 12, max: 15, por: 'dosis' },
        cada: 8, via: 'oral',
        pmaMin: 32,
        nota: 'En el recién nacido de término, NeoFax acorta el intervalo a cada 6 horas.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 17 }
      },
      {
        // NeoFax p17, rectal: menos de 32 semanas de edad posmenstrual, carga de 30 mg/kg y
        // luego 12 a 18 mg/kg/dosis cada 12 h.
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        carga: { valor: 30 },
        mgkg: { min: 12, max: 18, por: 'dosis' },
        cada: 12, via: 'rectal',
        pmaMax: 32,
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 17 }
      },
      {
        // NeoFax p17, rectal: 32 semanas de edad posmenstrual o mas, misma carga y cada 8 h.
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        carga: { valor: 30 },
        mgkg: { min: 12, max: 18, por: 'dosis' },
        cada: 8, via: 'rectal',
        pmaMin: 32,
        nota: 'En el recién nacido de término, NeoFax acorta el intervalo a cada 6 horas.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 17 }
      },
      {
        // NeoFax p17, tratamiento del conducto arterioso persistente: menos de 37 semanas de
        // edad gestacional, 15 mg/kg/dosis oral o IV cada 6 h durante 3 dias; puede hacer falta
        // un segundo ciclo.
        indicaciones: ['conducto-arterioso-persistente'],
        mgkg: { valor: 15, por: 'dosis' },
        cada: 6, via: 'oral',
        egMax: 37,
        duracion: '3 días',
        nota: 'La misma dosis vale por vía intravenosa. Puede hacer falta un segundo ciclo. NeoFax sitúa al acetaminofén como opción cuando el antiinflamatorio fracasó o está contraindicado, no por delante de él.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 17 }
      }
    ],
    mecanismo: 'Inhibe la síntesis de prostaglandinas en el sistema nervioso central y actúa sobre el centro hipotalámico de la termorregulación.',
    adversos: [
      'Hepatotoxicidad por sobredosis, aguda o por acumulación de dosis repetidas',
      'Es bien tolerado a dosis terapéuticas, y eso es justo lo que hace que se repita de más'
    ],
    precauciones: [
      'Usar con cautela en hepatopatía, y evitar el uso crónico si hay disfunción: el manual recoge casos de hepatotoxicidad incluso con menos de 4 g al día.',
      'Está en muchos preparados combinados de venta libre: sumar lo que el niño ya recibe antes de indicar más.',
      'NeoFax insiste en comprobar que la dosis intravenosa se programa en MILIGRAMOS y no en mililitros, y en sumar lo que entra por todas las vías antes de llegar al techo diario.'
    ],
    ajusteRenal: 'En niños con aclaramiento de creatinina menor de 10 mL/min, administrar cada 8 horas (el manual lo atribuye a Aronoff, 2007). En hemodiálisis o diálisis peritoneal intermitentes, cada 8 horas.',
    dilucion: 'La forma intravenosa viene lista para usar a 10 mg/mL y se administra sin diluir en 15 minutos. Una vez perforado el tapón del frasco, se administra antes de 6 horas y se desecha el resto. No se le añade ningún otro medicamento al frasco ni al equipo.',
    administracion: 'Agitar la suspensión oral antes de cada toma.',
    noTriturar: false
  },

  {
    id: 'ibuprofeno',
    grupo: 'analgesicos',
    farmaco: 'Ibuprofeno',
    alias: ['ibuprofen', 'Advil', 'Motrin', 'AINE', 'ibuprofeno lisina'],
    resumen: 'Antiinflamatorio no esteroideo desde los 6 meses, y cierre del conducto en el prematuro.',
    presentaciones: [
      { id: 'susp-100', etiqueta: 'suspensión 100 mg/5 mL', mg: 100, mL: 5 },
      { id: 'susp-200', etiqueta: 'suspensión 200 mg/5 mL', mg: 200, mL: 5 },
      { id: 'tab-400',  etiqueta: 'tableta 400 mg', mg: 400, mL: null },
      { id: 'iv-10',    etiqueta: 'ibuprofeno lisina IV 10 mg/mL', mg: 10, mL: 1 }
    ],
    dosis: [
      {
        // Taketomo p770: antipiretico, 6 meses a 12 anos. La dosis depende de la temperatura: por
        // debajo de 39 grados, 5 mg/kg; a partir de 39, 10 mg/kg. Cada 6 a 8 h, techo
        // 40 mg/kg/dia.
        indicaciones: ['fiebre'],
        mgkg: { min: 5, max: 10, por: 'dosis' },
        cada: 6, via: 'oral',
        maxMgkgDia: 40, maxDosis: 800, maxDia: 3200,
        edadMin: 183, edadMax: 4383,
        nota: 'El extremo del rango lo decide la temperatura: por debajo de 39 grados, 5 mg/kg por toma; a partir de 39 grados, 10 mg/kg. El techo de 800 mg por toma y 3.2 g al día es el del adulto.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 770 }
      },
      {
        // Taketomo p770: analgesico, lactantes y ninos, 4 a 10 mg/kg/dosis cada 6 a 8 h, techo
        // 40 mg/kg/dia.
        indicaciones: ['dolor-leve-moderado'],
        mgkg: { min: 4, max: 10, por: 'dosis' },
        cada: 6, via: 'oral',
        maxMgkgDia: 40, maxDosis: 800, maxDia: 3200,
        edadMin: 183,
        nota: 'Usar la dosis eficaz más baja el menor tiempo posible, que es la advertencia que el manual pone por delante de esta línea.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 770 }
      },
      {
        // Taketomo p770: artritis reumatoide juvenil, 6 meses a 12 anos, 30 a 40 mg/kg/dia en
        // tres o cuatro dosis; techo 2.4 g/dia.
        indicaciones: ['artritis-idiopatica-juvenil'],
        mgkg: { min: 30, max: 40, por: 'dia' },
        cada: 8, via: 'oral',
        maxDia: 2400,
        edadMin: 183, edadMax: 4383,
        nota: 'Empezar por el extremo bajo y ajustar; la enfermedad más leve puede tratarse con 20 mg/kg/día. El manual advierte que por encima de 40 mg/kg/día aumenta el riesgo de efectos adversos graves, y que por encima de 50 mg/kg/día no está estudiado y no se recomienda.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 770 }
      },
      {
        // NeoFax p1132 (ibuprofeno lisina), cierre del conducto arterioso: menos de 32 semanas de
        // edad gestacional y peso AL NACER de 500 a 1500 g. Carga de 10 mg/kg IV en 15 min el dia
        // 1, y 5 mg/kg IV en 15 min a las 24 y 48 h: tres dosis en total. Las dosis se calculan
        // sobre el peso al nacer, no sobre el de hoy.
        indicaciones: ['conducto-arterioso-persistente'],
        carga: { valor: 10 },
        mgkg: { valor: 5, por: 'dosis' },
        cada: 24, via: 'iv',
        egMax: 32, pesoNacMin: 500, pesoNacMax: 1500,
        duracion: '3 dosis en total: la carga y dos más, a las 24 y a las 48 horas',
        nota: 'Las tres dosis se calculan sobre el PESO AL NACER, no sobre el peso de hoy, y así lo indica la ficha técnica. Cada dosis se pasa en 15 minutos. Puede hacer falta un segundo ciclo si el conducto no cierra o se reabre.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 1132 }
      }
    ],
    mecanismo: 'Inhibe la ciclooxigenasa y con ella la síntesis de prostaglandinas, lo que le da efecto antiinflamatorio además del analgésico y antipirético. En el conducto arterioso es justo esa inhibición la que lo cierra.',
    adversos: ['Molestias gastrointestinales y gastropatía', 'Lesión renal aguda, sobre todo con depleción de volumen', 'Oliguria en el prematuro tratado por conducto arterioso'],
    precauciones: [
      'No usarlo en el niño deshidratado o con hipoperfusión: es donde el riesgo renal se concretiza.',
      'El manual no recoge dosis antipirética por debajo de los 6 meses de edad.',
      'En el conducto arterioso, NeoFax manda detener la segunda o la tercera dosis si aparece anuria u oliguria marcada (diuresis menor de 0.6 mL/kg/h) y esperar a que la función renal se normalice.'
    ],
    dilucion: 'La forma intravenosa del prematuro es ibuprofeno lisina, que no es intercambiable con la oral. Cada dosis se administra en 15 minutos.',
    administracion: 'Administrar la suspensión oral con alimento si produce molestias gástricas. Agitarla antes de cada toma.',
    noTriturar: false
  },

  /* ============ Antibióticos betalactámicos ============ */
  {
    id: 'amoxicilina',
    grupo: 'betalactamicos',
    farmaco: 'Amoxicilina',
    alias: ['amoxi', 'Amoxil', 'Trimoxal'],
    resumen: 'Betalactámico oral para otitis, faringitis estreptocócica y neumonía del niño sano.',
    presentaciones: [
      { id: 'susp-250', etiqueta: 'suspensión 250 mg/5 mL', mg: 250, mL: 5 },
      { id: 'susp-125', etiqueta: 'suspensión 125 mg/5 mL', mg: 125, mL: 5 },
      { id: 'cap-500',  etiqueta: 'cápsula 500 mg', mg: 500, mL: null }
    ],
    dosis: [
      {
        // Taketomo p128: otitis media aguda, 80 a 90 mg/kg/dia divididos cada 12 h.
        indicaciones: ['otitis-media-aguda'],
        mgkg: { min: 80, max: 90, por: 'dia' },
        cada: 12, via: 'oral',
        maxDia: 3000,
        edadMin: 90,
        duracion: '10 días en el menor de 2 años; de 5 a 7 días en el niño mayor con cuadro leve',
        nota: 'La dosis alta es la que cubre el neumococo con sensibilidad reducida a penicilina. El techo de 2 a 3 g al día es el de la línea de adultos de la misma página.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 128 }
      },
      {
        // Taketomo p128: neumonia adquirida en la comunidad, ninos de 4 meses a 4 anos, 80 a
        // 100 mg/kg/dia en fracciones cada 6 a 8 h. El manual anade, en esta misma linea, que en
        // ninos de 5 a 15 anos es mas razonable un macrolido como primera eleccion porque M.
        // pneumoniae es la causa principal: es una afirmacion del manual sobre la eleccion, asi
        // que se recoge como nota y NO como campo `linea`.
        indicaciones: ['neumonia-adquirida-comunidad'],
        mgkg: { min: 80, max: 100, por: 'dia' },
        cada: 8, via: 'oral',
        maxDia: 3000,
        edadMin: 120, edadMax: 1826,
        nota: 'El manual observa que a partir de los 5 años es más razonable un macrólido, porque Mycoplasma pneumoniae pasa a ser la causa principal de neumonía en ese grupo de edad.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 128 }
      },
      {
        // Taketomo p128: faringoamigdalitis estreptococica (prevencion primaria de fiebre
        // reumatica), ninos de 3 a 18 anos, 50 mg/kg una vez al dia, maximo 1 000 mg, 10 dias.
        indicaciones: ['faringoamigdalitis-estreptococica'],
        mgkg: { valor: 50, por: 'dia' },
        cada: 24, via: 'oral',
        maxDosis: 1000,
        edadMin: 1096, edadMax: 6575,
        duracion: '10 días',
        nota: 'Una sola toma al día. Los 10 días completos son lo que previene la fiebre reumática, aunque los síntomas cedan antes.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 128 }
      },
      {
        // Taketomo p128: lactantes mayores de 3 meses y ninos, 25 a 50 mg/kg/dia divididos cada
        // 8 h o cada 12 h. Es la linea general, sin foco.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 25, max: 50, por: 'dia' },
        cada: 8, via: 'oral',
        maxDia: 3000,
        edadMin: 90,
        nota: 'Línea general del manual, para la infección que no exige dosis alta. Puede repartirse cada 8 o cada 12 horas.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 128 }
      },
      {
        // Taketomo p128: lactantes de 1 a 3 meses, 20 a 30 mg/kg/dia divididos cada 12 h.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 20, max: 30, por: 'dia' },
        cada: 12, via: 'oral',
        edadMin: 29, edadMax: 90,
        nota: 'Lactante de 1 a 3 meses. En este grupo la fiebre sin foco rara vez se maneja con un oral: la línea está para la dosis, no para la decisión.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 128 }
      },
      {
        // Taketomo p128: profilaxia de endocarditis, 50 mg/kg una hora antes del procedimiento,
        // sin exceder la dosis de adultos (2 g, de la linea de adultos de la misma pagina).
        indicaciones: ['profilaxis-endocarditis'],
        mgkg: { valor: 50, por: 'dosis' },
        unica: true, via: 'oral',
        maxDosis: 2000,
        edadMin: 29,
        nota: 'Dosis única una hora antes del procedimiento, sin pasar de la dosis de adulto, que en la misma página es de 2 g.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 128 }
      },

      /* ---- Recién nacido (NeoFax) ---- */
      {
        // NeoFax p153, dosis usual del neonato: 15 mg/kg/dosis oral cada 12 h.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { valor: 15, por: 'dosis' },
        cada: 12, via: 'oral',
        edadMax: 28,
        nota: 'Dosis estándar del recién nacido. NeoFax mantiene el tratamiento al menos 48 a 72 horas después de que el paciente quede asintomático, y 10 días como mínimo si el germen es Streptococcus pyogenes.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 153 }
      },
      {
        // NeoFax p153, regimen de dosis alta del neonato por peso ACTUAL: menos de 2 kg,
        // 37.5 mg/kg/dosis oral cada 12 h, para posible infeccion grave.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { valor: 37.5, por: 'dosis' },
        cada: 12, via: 'oral',
        edadMax: 28, pesoMax: 2,
        nota: 'Régimen de dosis alta para posible infección grave, en el recién nacido de menos de 2 kg.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 153 }
      },
      {
        // NeoFax p153, regimen de dosis alta: 2 kg o mas, 50 mg/kg/dosis oral cada 12 h.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { valor: 50, por: 'dosis' },
        cada: 12, via: 'oral',
        edadMax: 28, pesoMin: 2,
        nota: 'Régimen de dosis alta para posible infección grave, en el recién nacido de 2 kg o más.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 153 }
      },
      {
        // NeoFax p153, carbunco sensible a penicilina: 32 a menos de 34 semanas de edad
        // gestacional, 25 mg/kg/dosis oral cada 12 h en la primera semana de vida.
        indicaciones: ['carbunco'],
        mgkg: { valor: 25, por: 'dosis' },
        cada: 12, via: 'oral',
        egMin: 32, egMax: 34, edadMax: 7,
        nota: 'Prematuro de 32 a menos de 34 semanas con menos de una semana de vida. A partir de la semana de vida, y en el de 34 semanas o más, NeoFax acorta el intervalo a cada 8 horas.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 153 }
      },
      {
        // NeoFax p153, carbunco: 34 semanas de edad gestacional o mas, 25 mg/kg/dosis oral cada
        // 8 h. La profilaxis posexposicion por aerosol dura 60 dias.
        indicaciones: ['carbunco'],
        mgkg: { valor: 25, por: 'dosis' },
        cada: 8, via: 'oral',
        egMin: 34,
        duracion: '60 días en la profilaxis tras exposición por aerosol; de 7 a 10 días en el carbunco cutáneo',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 153 }
      }
    ],
    mecanismo: 'Inhibe la síntesis de la pared celular bacteriana al unirse a las proteínas fijadoras de penicilina.',
    adversos: ['Exantema, frecuente y no siempre alérgico', 'Diarrea', 'Candidiasis oral'],
    precauciones: ['Con infección por virus de Epstein-Barr, leucemia linfocítica aguda o citomegalovirus aumenta la frecuencia de exantema, y ese exantema no equivale a alergia a la penicilina.'],
    ajusteRenal: 'Con aclaramiento de creatinina de 10 a 30 mL/min, cada 12 horas; por debajo de 10 mL/min, cada 24 horas.',
    dilucion: 'La suspensión oral se reconstituye con agua hasta la marca del frasco y se agita bien antes de cada toma. Puede mezclarse con fórmula láctea, bebidas frías o jugos, y se administra de inmediato después de mezclarla.',
    administracion: 'Con o sin alimentos.',
    noTriturar: false
  },

  {
    id: 'amoxicilina-clavulanato',
    grupo: 'betalactamicos',
    farmaco: 'Amoxicilina con ácido clavulánico',
    alias: ['amoxiclav', 'Augmentin', 'clavulanato', 'amoxicilina clavulanico'],
    resumen: 'Amoxicilina con inhibidor de betalactamasas: otitis o sinusitis con fracaso previo.',
    presentaciones: [
      { id: 'susp-600', etiqueta: 'suspensión 600 mg de amoxicilina/5 mL', mg: 600, mL: 5 },
      { id: 'susp-400', etiqueta: 'suspensión 400 mg de amoxicilina/5 mL', mg: 400, mL: 5 },
      { id: 'susp-250', etiqueta: 'suspensión 250 mg de amoxicilina/5 mL', mg: 250, mL: 5 },
      { id: 'susp-125', etiqueta: 'suspensión 125 mg de amoxicilina/5 mL', mg: 125, mL: 5 },
      { id: 'tab-875',  etiqueta: 'tableta 875 mg de amoxicilina', mg: 875, mL: null }
    ],
    dosis: [
      {
        // Taketomo p130: otitis media aguda o sinusitis grave, recurrente o con falla antibiotica
        // previa, 80 a 90 mg/kg/dia en fracciones cada 12 h, con la suspension de 600 mg/5 mL.
        indicaciones: ['otitis-media-aguda', 'sinusitis-bacteriana-aguda'],
        mgkg: { min: 80, max: 90, por: 'dia' },
        cada: 12, via: 'oral',
        edadMin: 29, pesoMax: 40,
        nota: 'Para el cuadro grave, recurrente o con fracaso de un antibiótico previo. El manual indica expresamente la suspensión de 600 mg/5 mL para esta dosis, porque con las diluidas el volumen se vuelve impracticable.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 130 }
      },
      {
        // Taketomo p130: neumonia adquirida en la comunidad, cepas de H. influenzae productoras
        // de betalactamasa o no tipificables, 80 a 100 mg/kg/dia cada 8 h, con 600 mg/5 mL.
        indicaciones: ['neumonia-adquirida-comunidad'],
        mgkg: { min: 80, max: 100, por: 'dia' },
        cada: 8, via: 'oral',
        edadMin: 29, pesoMax: 40,
        nota: 'La indicación que el manual recoge para esta dosis es la neumonía por Haemophilus influenzae productor de betalactamasa o no tipificable.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 130 }
      },
      {
        // Taketomo p130: lactantes y ninos de 3 meses a 16 anos con menos de 40 kg, infeccion que
        // no es grave: 20 a 40 mg/kg/dia cada 8 h con las suspensiones de 125 o 250 mg/5 mL.
        indicaciones: ['infeccion-bacteriana-grave', 'infeccion-piel-tejidos-blandos'],
        mgkg: { min: 20, max: 40, por: 'dia' },
        cada: 8, via: 'oral',
        edadMin: 90, pesoMax: 40,
        nota: 'Infección que no es grave. Repartida cada 12 horas, el manual da 25 a 45 mg/kg/día con las suspensiones de 200 o 400 mg/5 mL.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 130 }
      },
      {
        // Taketomo p130: lactantes de 1 a 3 meses, 30 mg/kg/dia en fracciones cada 12 h con la
        // suspension de 125 mg/5 mL.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { valor: 30, por: 'dia' },
        cada: 12, via: 'oral',
        edadMin: 29, edadMax: 90,
        nota: 'Lactante de 1 a 3 meses, con la suspensión de 125 mg/5 mL.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 130 }
      },
      {
        // Taketomo p130: ninos y adolescentes de mas de 40 kg o mas de 16 anos, infecciones mas
        // graves y las respiratorias: 500 mg cada 8 h, u 875 mg cada 12 h. Dosis fija.
        indicaciones: ['neumonia-adquirida-comunidad', 'sinusitis-bacteriana-aguda', 'infeccion-piel-tejidos-blandos'],
        fija: { valor: 875 },
        cada: 12, via: 'oral',
        edadMin: 29, pesoMin: 40,
        nota: 'A partir de 40 kg la dosis deja de calcularse por peso. Alternativa de la misma página: 500 mg cada 8 horas.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 130 }
      },
      {
        // NeoFax p164: menor de 3 meses, formulacion 4:1, 30 mg/kg/dia del componente amoxicilina
        // repartidos cada 12 h, con la suspension de 125 mg/31.25 mg.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { valor: 30, por: 'dia' },
        cada: 12, via: 'oral',
        edadMax: 28,
        nota: 'Con la formulación 4:1, es decir la suspensión de 125 mg de amoxicilina con 31.25 mg de clavulanato. La dosis es del componente amoxicilina.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 164 }
      },
      {
        // NeoFax p164, carbunco sensible a penicilina: 32 a menos de 34 semanas de edad
        // gestacional, 25 mg/kg del componente amoxicilina cada 12 h en la primera semana.
        indicaciones: ['carbunco'],
        mgkg: { valor: 25, por: 'dosis' },
        cada: 12, via: 'oral',
        egMin: 32, egMax: 34, edadMax: 7,
        nota: 'Dosis del componente amoxicilina. Prematuro de 32 a menos de 34 semanas con menos de una semana de vida; después, y en el de 34 semanas o más, cada 8 horas.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 164 }
      }
    ],
    mecanismo: 'La amoxicilina inhibe la síntesis de la pared celular y el clavulanato protege a la amoxicilina de las betalactamasas.',
    adversos: ['Diarrea, bastante más frecuente que con amoxicilina sola, por el clavulanato', 'Exantema', 'Candidiasis'],
    precauciones: [
      'La dosis se calcula SIEMPRE sobre la amoxicilina, nunca sobre la suma de los dos componentes.',
      'No se llega a una dosis alta duplicando una presentación diluida: eso multiplica el clavulanato y con él la diarrea. El manual indica la presentación concreta para cada dosis por ese motivo.'
    ],
    dilucion: 'La suspensión se reconstituye con agua hasta la marca del frasco y se conserva en refrigeración; se agita antes de cada toma. Las proporciones de amoxicilina y clavulanato cambian entre presentaciones, así que no son intercambiables volumen a volumen.',
    administracion: 'Administrar al iniciar la alimentación, para reducir las molestias gastrointestinales. No darlo con alimentos ricos en grasa, que disminuyen la absorción.',
    noTriturar: false
  },

  {
    id: 'ampicilina',
    grupo: 'betalactamicos',
    farmaco: 'Ampicilina',
    alias: ['Ampi', 'Pentrexyl'],
    resumen: 'Betalactámico parenteral: la mitad del esquema empírico de la sepsis neonatal.',
    presentaciones: [
      { id: 'vial-1000', etiqueta: 'vial 1 g reconstituido en 7.4 mL (unos 125 mg/mL)', mg: 125, mL: 1 },
      { id: 'vial-500',  etiqueta: 'vial 500 mg reconstituido en 5 mL (100 mg/mL)', mg: 100, mL: 1 },
      { id: 'vial-250',  etiqueta: 'vial 250 mg reconstituido en 5 mL (50 mg/mL)', mg: 50, mL: 1 },
      { id: 'susp-250',  etiqueta: 'suspensión oral 250 mg/5 mL', mg: 250, mL: 5 }
    ],
    dosis: [
      {
        // Taketomo p132: meningitis, 200 a 400 mg/kg/dia divididos cada 6 h, maximo 12 g/dia.
        indicaciones: ['meningitis-bacteriana'],
        mgkg: { min: 200, max: 400, por: 'dia' },
        cada: 6, via: 'iv',
        maxDia: 12000,
        edadMin: 29,
        nota: 'Es la dosis alta, por la penetración al sistema nervioso central: el triple o el cuádruple de la dosis sistémica habitual.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 132 }
      },
      {
        // Taketomo p132: lactantes y ninos, IM o IV, 100 a 200 mg/kg/dia divididos cada 6 h.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 100, max: 200, por: 'dia' },
        cada: 6, via: 'iv',
        maxDia: 14000,
        edadMin: 29,
        nota: 'El techo de 14 g al día es el de la línea de adultos de la misma página.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 132 }
      },
      {
        // Taketomo p132: ninos, oral, 50 a 100 mg/kg/dia divididos cada 6 h, maximo 2 a 3 g/dia.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 50, max: 100, por: 'dia' },
        cada: 6, via: 'oral',
        maxDia: 3000,
        edadMin: 29,
        nota: 'La vía oral de la ampicilina tiene absorción irregular y hoy se usa poco: el manual la mantiene, pero para un oral hay mejores opciones.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 132 }
      },
      {
        // Taketomo p132: profilaxia de endocarditis, 50 mg/kg en los 30 min previos al
        // procedimiento, dosis maxima 2 g.
        indicaciones: ['profilaxis-endocarditis'],
        mgkg: { valor: 50, por: 'dosis' },
        unica: true, via: 'iv',
        maxDosis: 2000,
        edadMin: 29,
        nota: 'Dosis única en los 30 minutos previos al procedimiento. En el paciente de riesgo alto que se somete a un procedimiento genitourinario o gastrointestinal, el manual la combina con gentamicina.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 132 }
      },

      /* ---- Recién nacido (NeoFax): reparte por edad gestacional Y edad posnatal ---- */
      {
        // NeoFax p196, sepsis precoz: 34 semanas de edad gestacional o menos, 7 dias de vida o
        // menos, 50 mg/kg/dosis IV cada 12 h.
        indicaciones: ['sepsis-neonatal-precoz'],
        mgkg: { valor: 50, por: 'dosis' },
        cada: 12, via: 'iv',
        egMax: 34, edadMax: 7,
        nota: 'NeoFax la combina con gentamicina, y prefiere cefotaxima, ceftazidima o cefepima cuando hay preocupación por meningitis. El tratamiento empírico se suspende a las 36 a 48 horas si los hemocultivos son estériles y no se identificó un foco.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 196 }
      },
      {
        // NeoFax p196: 34 semanas de edad gestacional o menos, de 8 a menos de 28 dias de vida,
        // 75 mg/kg/dosis IV cada 12 h.
        indicaciones: ['sepsis-neonatal-precoz'],
        mgkg: { valor: 75, por: 'dosis' },
        cada: 12, via: 'iv',
        egMax: 34, edadMin: 8, edadMax: 28,
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 196 }
      },
      {
        // NeoFax p196: mas de 34 semanas de edad gestacional, 28 dias de vida o menos,
        // 50 mg/kg/dosis IV cada 8 h.
        indicaciones: ['sepsis-neonatal-precoz'],
        mgkg: { valor: 50, por: 'dosis' },
        cada: 8, via: 'iv',
        egMin: 34, edadMax: 28,
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 196 }
      },
      {
        // NeoFax p196, lactante febril de buen aspecto de 8 a 21 dias: 50 mg/kg/dosis IV o IM
        // cada 8 h, junto a ceftazidima o gentamicina. Si se sospecha meningitis, 75 mg/kg/dosis
        // cada 6 h.
        indicaciones: ['lactante-febril-sin-foco'],
        mgkg: { valor: 50, por: 'dosis' },
        cada: 8, via: 'iv',
        edadMin: 8, edadMax: 21,
        nota: 'Se combina con ceftazidima, o con gentamicina si se sospecha infección urinaria o no hay foco. Si se sospecha meningitis bacteriana, NeoFax sube a 75 mg/kg/dosis cada 6 horas.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 196 }
      },
      {
        // NeoFax p196, lactante febril de 22 a 28 dias: 75 mg/kg/dosis IV o IM cada 6 h, junto a
        // ceftazidima.
        indicaciones: ['lactante-febril-sin-foco'],
        mgkg: { valor: 75, por: 'dosis' },
        cada: 6, via: 'iv',
        edadMin: 22, edadMax: 28,
        nota: 'Se combina con ceftazidima.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 196 }
      },
      {
        // NeoFax p196, carbunco sistemico sensible a penicilina: 32 a menos de 34 semanas de edad
        // gestacional, menos de 1 semana de vida, 50 mg/kg/dosis IV o IM cada 12 h.
        indicaciones: ['carbunco'],
        mgkg: { valor: 50, por: 'dosis' },
        cada: 12, via: 'iv',
        egMin: 32, egMax: 34, edadMax: 7,
        duracion: 'al menos 2 semanas, pasando a vía oral según la mejoría clínica',
        nota: 'Prematuro de 32 a menos de 34 semanas con menos de una semana de vida; de 1 a 4 semanas de vida, NeoFax sube a 75 mg/kg/dosis cada 12 horas. En el de 34 semanas o más, 50 mg/kg/dosis cada 8 horas.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 196 }
      }
    ],
    mecanismo: 'Inhibe la síntesis de la pared celular bacteriana al unirse a las proteínas fijadoras de penicilina.',
    adversos: ['Exantema', 'Diarrea', 'Flebitis en el sitio de infusión'],
    ajusteRenal: 'En el adulto, con aclaramiento de creatinina de 10 a 30 mL/min, cada 6 a 12 horas; por debajo de 10 mL/min, cada 12 horas.',
    dilucion: 'Para uso intravenoso directo se reconstituye con agua estéril para inyección, y NeoFax prohíbe el agua bacteriostática en el recién nacido: 5 mL para los viales de 125, 250 y 500 mg, 7.4 mL para el de 1 g y 14.8 mL para el de 2 g. Los viales pequeños se pasan en 3 a 5 minutos y los de 1 y 2 g en 10 a 15 minutos. Para infusión intermitente hace falta diluir más el vial ya reconstituido.',
    administracion: 'Por vía intravenosa rápida, a un máximo de 100 mg/min. La concentración final no debe pasar de 100 mg/mL en bolo ni de 30 mg/mL en infusión. La vía oral se da con agua, 1 a 2 horas antes del alimento.',
    noTriturar: false
  },

  {
    id: 'ceftriaxona',
    grupo: 'betalactamicos',
    farmaco: 'Ceftriaxona',
    alias: ['Rocephin', 'cefalosporina de tercera'],
    resumen: 'Cefalosporina de tercera generación, una vez al día, con cautela en el recién nacido.',
    presentaciones: [
      { id: 'vial-1000', etiqueta: 'vial 1 g reconstituido en 9.6 mL (unos 100 mg/mL)', mg: 100, mL: 1 },
      { id: 'vial-500',  etiqueta: 'vial 500 mg reconstituido en 4.8 mL (unos 100 mg/mL)', mg: 100, mL: 1 },
      { id: 'vial-250',  etiqueta: 'vial 250 mg reconstituido en 2.4 mL (unos 100 mg/mL)', mg: 100, mL: 1 },
      { id: 'im-350',    etiqueta: 'vial para vía intramuscular a 350 mg/mL', mg: 350, mL: 1 }
    ],
    dosis: [
      {
        // Taketomo p288: meningitis, 100 mg/kg/dia divididos cada 12 a 24 h, con dosis de
        // impregnacion posible de 100 mg/kg; dosis maxima 4 g/dia.
        indicaciones: ['meningitis-bacteriana'],
        carga: { valor: 100 },
        mgkg: { valor: 100, por: 'dia' },
        cada: 12, via: 'iv',
        maxDia: 4000,
        edadMin: 29,
        nota: 'La dosis de impregnación es opcional según el manual. El reparto puede ser cada 12 o cada 24 horas.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 288 }
      },
      {
        // Taketomo p288: lactantes y ninos, 50 a 75 mg/kg/dia divididos cada 12 a 24 h.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 50, max: 75, por: 'dia' },
        cada: 24, via: 'iv',
        maxDia: 2000,
        edadMin: 29,
        nota: 'Línea general del manual. Una sola dosis al día basta en la mayoría de las indicaciones que no son meningitis.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 288 }
      },
      {
        // Taketomo p288: otitis media aguda bacteriana, 50 mg/kg en dosis unica, maximo 1 g.
        indicaciones: ['otitis-media-aguda'],
        mgkg: { valor: 50, por: 'dosis' },
        unica: true, via: 'im',
        maxDosis: 1000,
        edadMin: 29,
        nota: 'Dosis única intramuscular, que es la salida cuando no se puede usar la vía oral. En la otitis persistente o recidivante, el manual da 50 mg/kg cada 24 horas durante tres días.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 288 }
      },
      {
        // Taketomo p288: infecciones de piel y estructuras cutaneas, 50 a 75 mg/kg/dia en una o
        // dos fracciones, maximo 2 g/dia.
        indicaciones: ['infeccion-piel-tejidos-blandos'],
        mgkg: { min: 50, max: 75, por: 'dia' },
        cada: 24, via: 'iv',
        maxDia: 2000,
        edadMin: 29,
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 288 }
      },
      {
        // Taketomo p288: epiglotitis, 50 a 100 mg/kg cada 24 h; la duracion informada varia de 2
        // a 14 dias.
        indicaciones: ['epiglotitis'],
        mgkg: { min: 50, max: 100, por: 'dia' },
        cada: 24, via: 'iv',
        maxDia: 4000,
        edadMin: 29,
        duracion: 'de 2 a 14 días, según lo informado',
        nota: 'La duración que recoge el manual para esta indicación es muy variable. La prioridad del cuadro es la vía aérea.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 288 }
      },
      {
        // Taketomo p288: fiebre tifoidea, IV, 75 a 80 mg/kg cada 24 h durante 5 a 14 dias.
        indicaciones: ['fiebre-tifoidea'],
        mgkg: { min: 75, max: 80, por: 'dia' },
        cada: 24, via: 'iv',
        maxDia: 4000,
        edadMin: 29,
        duracion: 'de 5 a 14 días',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 288 }
      },
      {
        // Taketomo p288: quimioprofilaxia en contactos de riesgo alto de caso meningococico
        // invasivo, menores de 15 anos, IM, 125 mg en una sola dosis.
        indicaciones: ['quimioprofilaxis-meningococo'],
        fija: { valor: 125 },
        unica: true, via: 'im',
        edadMin: 29, edadMax: 5479,
        nota: 'Dosis fija, no por peso. A partir de los 15 años, el manual da 250 mg en una sola dosis intramuscular.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 288 }
      },

      /* ---- Recién nacido (NeoFax) ---- */
      {
        // NeoFax p604, lactante febril de buen aspecto de 22 a 28 dias: 50 mg/kg/dosis IV o IM
        // cada 24 h, para sospecha de infeccion urinaria o sin foco identificado.
        indicaciones: ['lactante-febril-sin-foco'],
        mgkg: { valor: 50, por: 'dosis' },
        cada: 24, via: 'iv',
        edadMin: 22, edadMax: 28,
        nota: 'NeoFax solo la recoge a partir de los 22 días de vida, y mantiene el tratamiento hasta que los cultivos de sangre y líquido cefalorraquídeo lleven de 24 a 36 horas negativos.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 604 }
      },
      {
        // NeoFax p604, profilaxis del recien nacido de madre no tratada y oftalmia neonatorum:
        // 25 a 50 mg/kg (maximo 250 mg) IV o IM en dosis unica.
        indicaciones: ['infeccion-gonococica', 'oftalmia-neonatal'],
        mgkg: { min: 25, max: 50, por: 'dosis' },
        unica: true, via: 'im',
        maxDosis: 250,
        edadMax: 28,
        nota: 'Dosis única, tanto para la profilaxis del recién nacido de madre no tratada como para la oftalmía neonatal. NeoFax advierte que el tratamiento tópico solo es insuficiente, e innecesario si se da el sistémico.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 604 }
      },
      {
        // NeoFax p604, infeccion gonococica diseminada y abscesos del cuero cabelludo: 25 a
        // 50 mg/kg/dosis IV o IM una vez al dia durante 7 dias, o de 10 a 14 dias si hay
        // meningitis documentada.
        indicaciones: ['infeccion-gonococica'],
        mgkg: { min: 25, max: 50, por: 'dosis' },
        cada: 24, via: 'iv',
        edadMax: 28,
        duracion: '7 días, o de 10 a 14 días si hay meningitis documentada',
        nota: 'Para la infección diseminada y los abscesos del cuero cabelludo.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 604 }
      },
      {
        // NeoFax p604, meningitis cuando hay desabasto de cefotaxima: carga de 100 mg/kg IV y
        // luego 80 mg/kg/dosis IV cada 24 h, en neonatos seleccionados de bajo riesgo.
        indicaciones: ['meningitis-bacteriana'],
        carga: { valor: 100 },
        mgkg: { valor: 80, por: 'dosis' },
        cada: 24, via: 'iv',
        edadMax: 28,
        nota: 'NeoFax la reserva al desabasto de cefotaxima y a recién nacidos seleccionados de bajo riesgo, precisamente por el riesgo de kernícterus.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 604 }
      },
      {
        // NeoFax p604, salmonelosis: 100 mg/kg/dosis IV o IM una vez al dia, o 50 mg/kg/dosis dos
        // veces al dia, durante 7 a 10 dias.
        indicaciones: ['fiebre-tifoidea'],
        mgkg: { valor: 100, por: 'dosis' },
        cada: 24, via: 'iv',
        edadMax: 28,
        duracion: 'de 7 a 10 días',
        nota: 'Alternativa de la misma página: 50 mg/kg/dosis dos veces al día.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 604 }
      }
    ],
    mecanismo: 'Inhibe la síntesis de la pared celular bacteriana al unirse a las proteínas fijadoras de penicilina. Su vida media larga permite una dosis al día.',
    adversos: ['Diarrea', 'Exantema', 'Seudolitiasis biliar por precipitación del fármaco', 'Dolor en el sitio de la inyección intramuscular'],
    precauciones: [
      'NeoFax la incluye en la KIDs List: cautela por debajo de las 3 semanas de vida por el riesgo de kernícterus, salvo la dosis única del tratamiento gonocócico. Desplaza la bilirrubina de la albúmina, y por eso se evita en el recién nacido con hiperbilirrubinemia, sobre todo si es prematuro.',
      'No reconstituir ni diluir con soluciones que contengan calcio, y no administrarlas por la misma vía: precipitan.'
    ],
    dilucion: 'Se reconstituye con solución salina, glucosada al 5% o agua estéril para inyección, nunca con un diluyente con calcio. Siguiendo a NeoFax queda a unos 100 mg/mL: 2.4 mL para el vial de 250 mg, 4.8 mL para el de 500 mg, 9.6 mL para el de 1 g y 19.2 mL para el de 2 g.',
    administracion: 'Para la vía intramuscular se reconstituye más concentrado y puede diluirse en lidocaína al 1% para el dolor, según el protocolo del servicio.',
    noTriturar: false
  },

  {
    id: 'cefalexina',
    grupo: 'betalactamicos',
    farmaco: 'Cefalexina',
    alias: ['Keflex', 'cefalosporina de primera'],
    resumen: 'Cefalosporina oral de primera generación para piel, faringitis y otitis.',
    // NeoFax 2026 no trae monografia de cefalexina y el Harriet Lane no imprime una dosis de
    // recien nacido: por eso todas sus lineas excluyen al menor de 29 dias y el farmaco lo dice.
    sinNeonatal: 'NeoFax no trae monografía de cefalexina y el Harriet Lane no imprime una dosis de recién nacido, así que aquí no hay dosis neonatal. Búscala en la referencia neonatal de tu servicio.',
    presentaciones: [
      { id: 'susp-250', etiqueta: 'suspensión 250 mg/5 mL', mg: 250, mL: 5 },
      { id: 'susp-125', etiqueta: 'suspensión 125 mg/5 mL', mg: 125, mL: 5 },
      { id: 'cap-500',  etiqueta: 'cápsula 500 mg', mg: 500, mL: null }
    ],
    dosis: [
      {
        // Taketomo p274: faringitis estreptococica e infecciones de piel y estructura cutanea,
        // 25 a 50 mg/kg/dia divididos cada 12 h.
        indicaciones: ['faringoamigdalitis-estreptococica', 'infeccion-piel-tejidos-blandos'],
        mgkg: { min: 25, max: 50, por: 'dia' },
        cada: 12, via: 'oral',
        maxDia: 4000,
        edadMin: 29,
        duracion: '10 días en la faringitis estreptocócica',
        nota: 'Para estas dos indicaciones el manual permite el reparto cada 12 horas, que es lo que hace realista completar diez días en un niño.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 274 }
      },
      {
        // Taketomo p274: ninos, 25 a 50 mg/kg/dia divididos cada 6 a 8 h; infecciones graves 50 a
        // 100 mg/kg/dia divididos cada 6 a 8 h; dosis maxima 4 g/dia.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 50, max: 100, por: 'dia' },
        cada: 8, via: 'oral',
        maxDia: 4000,
        edadMin: 29,
        nota: 'Es la línea de infección grave del manual. Para el cuadro habitual, la misma página da 25 a 50 mg/kg/día cada 6 a 8 horas.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 274 }
      },
      {
        // Taketomo p274: otitis media, 75 a 100 mg/kg/dia divididos cada 6 h.
        indicaciones: ['otitis-media-aguda'],
        mgkg: { min: 75, max: 100, por: 'dia' },
        cada: 6, via: 'oral',
        maxDia: 4000,
        edadMin: 29,
        nota: 'Cuatro tomas al día, que es lo que la hace poco práctica en la otitis frente a la amoxicilina cada 12 horas.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 274 }
      },
      {
        // Taketomo p274: profilaxia de endocarditis, 50 mg/kg una hora antes del procedimiento,
        // maximo 2 g.
        indicaciones: ['profilaxis-endocarditis'],
        mgkg: { valor: 50, por: 'dosis' },
        unica: true, via: 'oral',
        maxDosis: 2000,
        edadMin: 29,
        nota: 'Dosis única una hora antes del procedimiento. Es la opción para el alérgico a penicilina sin reacción de hipersensibilidad inmediata.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 274 }
      }
    ],
    mecanismo: 'Inhibe la síntesis de la pared celular bacteriana al unirse a las proteínas fijadoras de penicilina.',
    adversos: ['Molestias gastrointestinales', 'Diarrea', 'Exantema'],
    ajusteRenal: 'Con aclaramiento de creatinina de 10 a 40 mL/min, cada 8 a 12 horas; por debajo de 10 mL/min, cada 12 a 24 horas.',
    dilucion: 'La suspensión se reconstituye con agua hasta la marca del frasco y se agita bien antes de cada toma. Las tabletas para suspensión oral se mezclan en unos 10 mL de agua, se administran de inmediato y se enjuaga el vaso para asegurar la dosis completa; no se mezclan con ningún otro líquido.',
    administracion: 'En ayuno, una hora antes o dos después del alimento; con alimento si hay molestias.',
    noTriturar: false
  },

  /* ============ Macrólidos y aminoglucósidos ============ */
  {
    id: 'azitromicina',
    grupo: 'otros-atb',
    farmaco: 'Azitromicina',
    alias: ['Zithromax', 'macrolido', 'azitro'],
    resumen: 'Macrólido de una toma al día: neumonía atípica, tos ferina y clamidia del neonato.',
    presentaciones: [
      { id: 'susp-200', etiqueta: 'suspensión 200 mg/5 mL', mg: 200, mL: 5 },
      { id: 'susp-100', etiqueta: 'suspensión 100 mg/5 mL', mg: 100, mL: 5 },
      { id: 'tab-500',  etiqueta: 'tableta 500 mg', mg: 500, mL: null }
    ],
    dosis: [
      {
        // Taketomo p179: neumonia adquirida en la comunidad, 10 mg/kg una vez al dia (maximo
        // 500 mg) durante tres dias.
        indicaciones: ['neumonia-adquirida-comunidad'],
        mgkg: { valor: 10, por: 'dia' },
        cada: 24, via: 'oral',
        maxDosis: 500,
        edadMin: 183,
        duracion: '3 días',
        nota: 'Esquema alternativo de la misma página: 10 mg/kg el primer día, sin pasar de 500 mg, y 5 mg/kg al día, sin pasar de 250 mg, del día 2 al 5. Es el fármaco al que el manual remite para la neumonía a partir de los 5 años, por Mycoplasma pneumoniae.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 179 }
      },
      {
        // Taketomo p179: infecciones de vias respiratorias, ninos mayores de 6 meses, 10 mg/kg el
        // primer dia (maximo 500 mg) y 5 mg/kg/dia (maximo 250 mg) los dias 2 a 5.
        indicaciones: ['faringoamigdalitis-estreptococica'],
        mgkg: { valor: 10, por: 'dia' },
        cada: 24, via: 'oral',
        maxDosis: 500,
        edadMin: 183,
        duracion: '5 días: 10 mg/kg el primer día y 5 mg/kg del día 2 al 5',
        nota: 'La dosis baja a 5 mg/kg al día, sin pasar de 250 mg, del segundo al quinto día. En la faringitis estreptocócica el macrólido es la salida del alérgico a betalactámicos, no la primera opción.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 179 }
      },
      {
        // Taketomo p179: tos ferina, lactantes menores de 6 meses, 10 mg/kg/dosis una vez al dia
        // durante cinco dias.
        indicaciones: ['tos-ferina'],
        mgkg: { valor: 10, por: 'dosis' },
        cada: 24, via: 'oral',
        edadMin: 29,
        duracion: '5 días',
        nota: 'En la tos ferina el macrólido es el tratamiento de elección a cualquier edad, y por debajo del mes la azitromicina se prefiere a la eritromicina.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 179 }
      },

      /* ---- Recién nacido (NeoFax) ---- */
      {
        // NeoFax p337, tos ferina, tratamiento y profilaxis: 10 mg/kg/dosis oral una vez al dia
        // durante 5 dias. La dosis IV es desconocida.
        indicaciones: ['tos-ferina'],
        mgkg: { valor: 10, por: 'dosis' },
        cada: 24, via: 'oral',
        edadMax: 28,
        duracion: '5 días',
        nota: 'Vale igual para el tratamiento y para la profilaxis posexposición. NeoFax señala que por vía intravenosa la dosis es desconocida.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 337 }
      },
      {
        // NeoFax p337, oftalmia neonatorum por Chlamydia trachomatis: 20 mg/kg/dosis oral una vez
        // al dia durante 3 dias.
        indicaciones: ['oftalmia-neonatal'],
        mgkg: { valor: 20, por: 'dosis' },
        cada: 24, via: 'oral',
        edadMax: 28,
        duracion: '3 días',
        nota: 'Para la conjuntivitis neonatal por Chlamydia trachomatis.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 337 }
      },
      {
        // NeoFax p337, erradicacion de Ureaplasma: 24 a 28 semanas de edad gestacional,
        // 20 mg/kg/dosis IV una vez al dia durante 3 dias.
        indicaciones: ['ureaplasma'],
        mgkg: { valor: 20, por: 'dosis' },
        cada: 24, via: 'iv',
        egMin: 24, egMax: 28,
        duracion: '3 días',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 337 }
      }
    ],
    mecanismo: 'Se une a la subunidad ribosómica 50S e inhibe la síntesis de proteínas bacterianas.',
    adversos: ['Molestias gastrointestinales', 'Dolor abdominal', 'Prolongación del intervalo QT'],
    precauciones: [
      'NeoFax la incluye en la KIDs List: evitar en el recién nacido por el riesgo de estenosis hipertrófica del píloro, salvo que se esté tratando tos ferina o neumonía por Chlamydia trachomatis, y con cautela en el Ureaplasma.',
      'La suspensión de liberación prolongada no es intercambiable con la de liberación inmediata, y las dosis de este archivo son todas de liberación inmediata.'
    ],
    dilucion: 'La suspensión oral se reconstituye con agua hasta la marca del frasco y se agita bien antes de cada toma.',
    administracion: 'Puede darse con o sin alimentos.',
    noTriturar: false
  },

  {
    id: 'gentamicina',
    grupo: 'otros-atb',
    farmaco: 'Gentamicina',
    alias: ['Garamicina', 'aminoglucosido', 'genta'],
    resumen: 'Aminoglucósido del esquema empírico neonatal, con margen terapéutico estrecho.',
    presentaciones: [
      { id: 'amp-40', etiqueta: 'ampolla 80 mg/2 mL (40 mg/mL)', mg: 40, mL: 1 },
      { id: 'amp-10', etiqueta: 'ampolla 20 mg/2 mL (10 mg/mL)', mg: 10, mL: 1 },
      { id: 'neo-10', etiqueta: 'dilución neonatal estándar 10 mg/mL', mg: 10, mL: 1 },
      { id: 'neo-2',  etiqueta: 'dilución neonatal 2 mg/mL (por debajo de 500 g)', mg: 2, mL: 1 }
    ],
    dosis: [
      {
        // Taketomo p699: lactantes y ninos menores de 5 anos, IM o IV, 2.5 mg/kg/dosis cada 8 h.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { valor: 2.5, por: 'dosis' },
        cada: 8, via: 'iv',
        edadMin: 29, edadMax: 1826,
        nota: 'El manual añade que algunos pacientes necesitan dosis más altas o más frecuentes, incluso cada 6 horas, si las concentraciones séricas lo indican: fibrosis quística, grandes quemados y el paciente granulocitopénico febril.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 699 }
      },
      {
        // Taketomo p699: ninos mayores de 5 anos, IM o IV, 2 a 2.5 mg/kg/dosis cada 8 h.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 2, max: 2.5, por: 'dosis' },
        cada: 8, via: 'iv',
        edadMin: 1826,
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 699 }
      },
      {
        // Taketomo p699: dosificacion una vez al dia con funcion renal normal, 5 a 7.5 mg/kg/dosis
        // cada 24 h.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 5, max: 7.5, por: 'dosis' },
        cada: 24, via: 'iv',
        edadMin: 29,
        nota: 'Esquema de una sola dosis al día, solo con función renal normal. Es el que el manual pone junto a las dos líneas cada 8 horas, no en lugar de ellas.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 699 }
      },
      {
        // Taketomo p699: profilaxia de endocarditis en paciente de riesgo alto, 1.5 mg/kg, maximo
        // 120 mg, 30 min antes del procedimiento, junto a ampicilina o vancomicina.
        indicaciones: ['profilaxis-endocarditis'],
        mgkg: { valor: 1.5, por: 'dosis' },
        unica: true, via: 'iv',
        maxDosis: 120,
        edadMin: 29,
        nota: 'Dosis única 30 minutos antes del procedimiento, siempre acompañando a ampicilina, o a vancomicina en el alérgico a penicilina. Nunca sola.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 699 }
      },

      /* ---- Recién nacido (NeoFax): reparte por edad POSMENSTRUAL y posnatal ----
         NeoFax lo dice con todas las letras: la eliminación se correlaciona sobre todo con la
         edad posmenstrual, que es el determinante principal del intervalo, y la edad posnatal es
         el calificador secundario. De ahí las cinco casillas de su tabla. */
      {
        // NeoFax p999, tabla 1: hasta 29 semanas de edad posmenstrual, de 0 a 7 dias de vida,
        // 5 mg/kg/dosis cada 48 h.
        indicaciones: ['sepsis-neonatal-precoz', 'lactante-febril-sin-foco'],
        mgkg: { valor: 5, por: 'dosis' },
        cada: 48, via: 'iv',
        pmaMax: 29, edadMax: 7,
        nota: 'NeoFax aplica además esta casilla, la más conservadora, al recién nacido con asfixia significativa, conducto arterioso persistente o tratamiento con indometacina, aunque su edad posmenstrual sea mayor.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 999 }
      },
      {
        // NeoFax p999, tabla 1: hasta 29 semanas de edad posmenstrual, de 8 a 28 dias de vida,
        // 4 mg/kg/dosis cada 36 h.
        indicaciones: ['sepsis-neonatal-precoz', 'lactante-febril-sin-foco'],
        mgkg: { valor: 4, por: 'dosis' },
        cada: 36, via: 'iv',
        pmaMax: 29, edadMin: 8, edadMax: 28,
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 999 }
      },
      {
        // NeoFax p999, tabla 1: de 30 a 34 semanas de edad posmenstrual, de 0 a 7 dias de vida,
        // 4.5 mg/kg/dosis cada 36 h.
        indicaciones: ['sepsis-neonatal-precoz', 'lactante-febril-sin-foco'],
        mgkg: { valor: 4.5, por: 'dosis' },
        cada: 36, via: 'iv',
        pmaMin: 30, pmaMax: 34, edadMax: 7,
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 999 }
      },
      {
        // NeoFax p999, tabla 1: de 30 a 34 semanas de edad posmenstrual, 8 dias de vida o mas,
        // 4 mg/kg/dosis cada 24 h.
        indicaciones: ['sepsis-neonatal-precoz', 'lactante-febril-sin-foco'],
        mgkg: { valor: 4, por: 'dosis' },
        cada: 24, via: 'iv',
        pmaMin: 30, pmaMax: 34, edadMin: 8, edadMax: 28,
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 999 }
      },
      {
        // NeoFax p999, tabla 1: 35 semanas de edad posmenstrual o mas, cualquier edad posnatal,
        // 4 mg/kg/dosis cada 24 h.
        indicaciones: ['sepsis-neonatal-precoz', 'lactante-febril-sin-foco'],
        mgkg: { valor: 4, por: 'dosis' },
        cada: 24, via: 'iv',
        pmaMin: 35, edadMax: 28,
        nota: 'A partir de las 35 semanas de edad posmenstrual la tabla ya no distingue por días de vida.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 999 }
      }
    ],
    mecanismo: 'Se une a la subunidad ribosómica 30S e inhibe la síntesis de proteínas bacterianas.',
    adversos: ['Nefrotoxicidad', 'Ototoxicidad, que puede ser irreversible y afectar al equilibrio y a la audición'],
    precauciones: [
      'La dosis se calcula sobre una estimación del peso corporal ideal, no sobre el peso real, y eso importa en el niño con obesidad.',
      'Tiene margen terapéutico estrecho: el ajuste se hace con concentraciones séricas y función renal, no solo con la tabla.',
      'NeoFax desaconseja asociar cefalosporinas por el aumento de nefrotoxicidad descrito.'
    ],
    ajusteRenal: 'En hemodiálisis, 1.25 a 1.75 mg/kg por dosis después de la sesión. Con función renal alterada, el ajuste se guía por concentraciones séricas.',
    dilucion: 'Se diluye antes de la infusión en solución salina o glucosada al 5%. El Institute for Safe Medication Practices y la Vermont Oxford Network recomiendan una concentración estándar de 10 mg/mL para el recién nacido de 500 g o más, y de 2 mg/mL por debajo de 500 g.',
    noTriturar: false
  },

  /* ============ Corticoides sistémicos ============ */
  {
    id: 'dexametasona',
    grupo: 'corticoides',
    farmaco: 'Dexametasona',
    alias: ['Decadron', 'corticoide', 'dexa'],
    resumen: 'Corticoide potente y prolongado: crisis asmática y crup en dosis única.',
    // Ni NeoFax ni el Harriet Lane dan una dosis neonatal de dexametasona, y el Harriet Lane
    // ademas la desaconseja: por eso todas sus lineas excluyen al menor de 29 dias.
    sinNeonatal: 'Ni NeoFax ni el Harriet Lane dan una dosis neonatal de dexametasona, así que aquí no hay ninguna. El Harriet Lane además la desaconseja por vía sistémica para prevenir o tratar la enfermedad pulmonar crónica del recién nacido de muy bajo peso, por el aumento de efectos adversos.',
    presentaciones: [
      { id: 'amp-4',   etiqueta: 'ampolla 4 mg/mL', mg: 4, mL: 1 },
      { id: 'amp-10',  etiqueta: 'ampolla 10 mg/mL', mg: 10, mL: 1 },
      { id: 'elix-05', etiqueta: 'elíxir 0.5 mg/5 mL', mg: 0.5, mL: 5 },
      { id: 'sol-1',   etiqueta: 'solución oral 1 mg/mL', mg: 1, mL: 1 },
      { id: 'tab-4',   etiqueta: 'tableta 4 mg', mg: 4, mL: null }
    ],
    dosis: [
      {
        // Harriet Lane p1102: exacerbacion de asma, lactante, nino y adolescente, 0.6 mg/kg/dosis
        // (maximo 16 mg) por via oral, IV o IM cada 24 h, una o dos dosis. Usarla mas de dos dias
        // aumenta los efectos adversos metabolicos.
        indicaciones: ['crisis-asmatica'],
        mgkg: { valor: 0.6, por: 'dosis' },
        cada: 24, via: 'oral',
        maxDosis: 16,
        edadMin: 29,
        duracion: '1 o 2 dosis',
        nota: 'La misma cifra vale por vía oral, intravenosa o intramuscular. El Harriet Lane advierte que pasar de dos días aumenta el riesgo de efectos adversos metabólicos.',
        evidencia: 'manual', fuente: { ref: 'HARRIET', pagina: 1102 }
      },
      {
        // Harriet Lane p1102: crup, lactante y nino, 0.6 mg/kg/dosis oral, IV o IM, una vez.
        // Maximo habitual 16 mg.
        indicaciones: ['crup'],
        mgkg: { valor: 0.6, por: 'dosis' },
        unica: true, via: 'oral',
        maxDosis: 16,
        edadMin: 29,
        nota: 'Una sola dosis, por vía oral, intravenosa o intramuscular. En el crup se da también en el cuadro leve, porque acorta la evolución y reduce las consultas de vuelta.',
        evidencia: 'manual', fuente: { ref: 'HARRIET', pagina: 1102 }
      },
      {
        // Harriet Lane p1102: edema de via aerea y extubacion, lactante, nino y adolescente,
        // 0.5 mg/kg/dosis (maximo 10 mg) IV, IM u oral cada 6 h, 6 dosis, empezando de 6 a 12 h
        // antes de la extubacion.
        indicaciones: ['edema-via-aerea-extubacion'],
        mgkg: { valor: 0.5, por: 'dosis' },
        cada: 6, via: 'iv',
        maxDosis: 10,
        edadMin: 29,
        duracion: '6 dosis, empezando de 6 a 12 horas antes de la extubación',
        evidencia: 'manual', fuente: { ref: 'HARRIET', pagina: 1102 }
      },
      {
        // Taketomo p433: meningitis bacteriana por H. influenzae tipo b, lactantes y ninos
        // mayores de 6 semanas, IV, 0.15 mg/kg/dosis cada 6 h los cuatro primeros dias,
        // empezando con la primera dosis de antibiotico (el manual lo atribuye a Tunkel, 2004).
        indicaciones: ['meningitis-bacteriana'],
        mgkg: { valor: 0.15, por: 'dosis' },
        cada: 6, via: 'iv',
        edadMin: 42,
        duracion: 'los 4 primeros días del antibiótico',
        nota: 'Se empieza con la primera dosis de antibiótico. El manual, citando a Tunkel de 2004, señala que si los antibióticos ya se administraron no se ha demostrado que mejore el desenlace, y entonces no se recomienda; y que en la meningitis neumocócica los datos no muestran un beneficio claro, así que hay que valorar riesgos y beneficios.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 433 }
      },
      {
        // Harriet Lane p1102: antiinflamatorio, nino, 0.08 a 0.3 mg/kg/24 h repartidos cada 6 a
        // 12 h.
        indicaciones: ['artritis-idiopatica-juvenil'],
        mgkg: { min: 0.08, max: 0.3, por: 'dia' },
        cada: 12, via: 'oral',
        edadMin: 29,
        nota: 'Dosis antiinflamatoria general del Harriet Lane, repartida cada 6 a 12 horas. No es el tratamiento de fondo de la artritis idiopática juvenil.',
        evidencia: 'manual', fuente: { ref: 'HARRIET', pagina: 1102 }
      }
    ],
    mecanismo: 'Corticoide sintético de acción prolongada: reduce la inflamación y la permeabilidad capilar, y no tiene efecto mineralocorticoide relevante.',
    adversos: ['Hiperglucemia', 'Hipertensión arterial', 'Cambios de conducta y del sueño', 'Supresión del eje con el uso prolongado'],
    precauciones: [
      'La dosis única de la crisis asmática y la del crup no requieren descenso gradual; los esquemas prolongados sí.',
      'Comparada con la prednisona tiene más efecto glucocorticoide y ninguno mineralocorticoide: con hiperglucemia, el Harriet Lane sugiere valorar otro esteroide sistémico de menor potencia glucocorticoide.'
    ],
    dilucion: 'La forma inyectable viene lista para usar a 4 o a 10 mg/mL y puede administrarse sin diluir por vía intravenosa o intramuscular. Algunas presentaciones contienen alcohol bencílico o parabenos, que importan en el lactante pequeño.',
    administracion: 'Para la vía oral puede usarse la misma solución inyectable cuando no hay elíxir, según el protocolo del servicio.',
    noTriturar: false
  },

  /* ============ Broncodilatadores ============ */
  {
    id: 'salbutamol',
    grupo: 'broncodilatadores',
    farmaco: 'Salbutamol',
    alias: ['albuterol', 'Ventolin', 'beta2', 'broncodilatador'],
    resumen: 'Agonista beta2 de acción corta: el primer fármaco de la crisis asmática.',
    presentaciones: [
      { id: 'neb-5', etiqueta: 'solución para nebulizar 5 mg/mL (al 0.5%)', mg: 5, mL: 1 },
      { id: 'neb-1', etiqueta: 'solución para nebulizar 1 mg/mL (al 0.1%)', mg: 1, mL: 1 },
      { id: 'jar-2', etiqueta: 'jarabe 2 mg/5 mL', mg: 2, mL: 5 }
    ],
    dosis: [
      {
        // Taketomo p86: exacerbacion de asma aguda, nebulizacion, ninos: 0.15 mg/kg por dosis,
        // con dosis minima de 2.5 mg, cada 20 min por tres dosis. El manual atribuye el esquema
        // al NAEPP de 2007.
        indicaciones: ['crisis-asmatica'],
        mgkg: { valor: 0.15, por: 'dosis' },
        unica: true, via: 'nebulizada',
        edadMin: 29,
        duracion: '3 dosis en la primera hora',
        nota: 'Cada 20 minutos por tres dosis. La dosis mínima es de 2.5 mg: por debajo de unos 17 kg el cálculo por peso da menos que eso, y se administran los 2.5 mg. El manual atribuye el esquema al NAEPP de 2007.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 86 }
      },
      {
        // Taketomo p86: tras las tres primeras dosis, 0.15 a 0.3 mg/kg por dosis sin exceder
        // 10 mg, cada 1 a 4 h segun se requiera.
        indicaciones: ['crisis-asmatica'],
        mgkg: { min: 0.15, max: 0.3, por: 'dosis' },
        cada: 4, via: 'nebulizada',
        maxDosis: 10,
        edadMin: 29,
        nota: 'Mantenimiento tras las tres primeras dosis: cada 1 a 4 horas según se requiera. La misma página recoge la nebulización continua a 0.5 mg/kg/hora para la crisis grave.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 86 }
      },
      {
        // NeoFax p82, broncodilatacion en el neonato: 0.1 a 0.5 mg/kg/dosis nebulizados cada 2 a
        // 6 h.
        indicaciones: ['crisis-asmatica'],
        mgkg: { min: 0.1, max: 0.5, por: 'dosis' },
        cada: 6, via: 'nebulizada',
        edadMax: 28,
        nota: 'NeoFax pide soluciones sin conservador para nebulizar en el recién nacido: el cloruro de benzalconio de los frascos multidosis de 20 mL puede producir broncoconstricción, sobre todo con uso frecuente o continuo. En el recién nacido el papel del broncodilatador no es el mismo que en el asma del niño mayor.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 82 }
      },
      {
        // NeoFax p82, via oral en el neonato: 0.1 a 0.3 mg/kg/dosis cada 6 a 8 h.
        indicaciones: ['crisis-asmatica'],
        mgkg: { min: 0.1, max: 0.3, por: 'dosis' },
        cada: 8, via: 'oral',
        edadMax: 28,
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 82 }
      },
      {
        // NeoFax p82, hiperpotasemia en el prematuro: 0.4 mg por dosis nebulizados cada 2 h hasta
        // que el potasio baje a un nivel seguro. Es dosis fija, no por peso.
        indicaciones: ['hiperpotasemia'],
        fija: { valor: 0.4 },
        cada: 2, via: 'nebulizada',
        edadMax: 28,
        nota: 'Dosis fija, no por peso, en el prematuro: se repite cada 2 horas hasta que el potasio baje a un nivel seguro, por ejemplo por debajo de 5 mmol/L. NeoFax pide valorar otras medidas que eliminen potasio cuando pasa de 7.5 mmol/L.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 82 }
      },
      {
        // NeoFax p82, hiperpotasemia, recomendacion de la AAP: 2.5 mg por dosis nebulizados.
        indicaciones: ['hiperpotasemia'],
        fija: { valor: 2.5 },
        unica: true, via: 'nebulizada',
        edadMax: 28,
        nota: 'Dosis fija que NeoFax atribuye a las guías de la Academia Americana de Pediatría. Con nebulización intermitente de la solución al 0.5% puede repetirse cada 20 minutos, una o dos dosis.',
        evidencia: 'manual', fuente: { ref: 'NEOFAX', pagina: 82 }
      }
    ],
    mecanismo: 'Agonista selectivo de los receptores beta2: relaja el músculo liso bronquial y desplaza el potasio al interior de la célula.',
    adversos: ['Taquicardia', 'Temblor', 'Hipopotasemia con dosis repetidas', 'Agitación'],
    precauciones: [
      'En la bronquiolitis del lactante no tiene el mismo papel que en el asma, y el manual no recoge esa indicación.',
      'En el recién nacido, usar soluciones para nebulizar sin conservador.'
    ],
    dilucion: 'Para nebulizar se diluye la dosis en solución salina hasta un volumen de 3 a 4 mL, según el protocolo del servicio. Con inhalador de dosis medida y cámara en el circuito del respirador, NeoFax sitúa la dosis neonatal en 1 disparo (unos 0.1 mg) cada 2 a 6 horas.',
    noTriturar: false
  },

  /* ============ Fármacos de urgencia ============ */
  {
    id: 'adrenalina',
    grupo: 'urgencias',
    farmaco: 'Adrenalina',
    alias: ['epinefrina', 'epi', 'Adrenalin', 'EpiPen'],
    resumen: 'El tratamiento de la anafilaxia: intramuscular, y cuanto antes.',
    presentaciones: [
      { id: 'amp-1000', etiqueta: 'ampolla 1 mg/mL (1:1000)', mg: 1, mL: 1 },
      { id: 'jer-10000', etiqueta: 'jeringa precargada 0.1 mg/mL (1:10 000)', mg: 0.1, mL: 1 }
    ],
    dosis: [
      {
        // Harriet Lane p1125, hipersensibilidad y anafilaxia, lactante, nino y adolescente:
        // 0.01 mg/kg/dosis IM, maximo 0.3 mg antes de la pubertad, cada 5 a 15 min si hace falta.
        // Se administra en la cara anterolateral del muslo, a traves de la ropa si es preciso.
        indicaciones: ['anafilaxia'],
        mgkg: { valor: 0.01, por: 'dosis' },
        unica: true, via: 'im',
        maxDosis: 0.3,
        edadMin: 29, edadMax: 4017,
        nota: 'Con la ampolla de 1 mg/mL (1:1000), 0.01 mg/kg equivale a 0.01 mL/kg. Puede repetirse cada 5 a 15 minutos. Se pone en la cara anterolateral del muslo, a través de la ropa si hace falta. El techo antes de la pubertad es de 0.3 mg.',
        evidencia: 'manual', fuente: { ref: 'HARRIET', pagina: 1125 }
      },
      {
        // Harriet Lane p1125: en el adolescente el techo sube a 0.5 mg por dosis.
        indicaciones: ['anafilaxia'],
        mgkg: { valor: 0.01, por: 'dosis' },
        unica: true, via: 'im',
        maxDosis: 0.5,
        edadMin: 4017,
        nota: 'A partir de la pubertad el techo por dosis sube a 0.5 mg. Puede repetirse cada 5 a 15 minutos.',
        evidencia: 'manual', fuente: { ref: 'HARRIET', pagina: 1125 }
      },
      {
        // Harriet Lane p1125, autoinyector: de 7.5 a menos de 30 kg, 0.15 mg; 30 kg o mas,
        // 0.3 mg. Puede repetirse a los 5 a 15 min.
        indicaciones: ['anafilaxia'],
        fija: { valor: 0.15 },
        unica: true, via: 'im',
        edadMin: 29, pesoMin: 7.5, pesoMax: 30,
        nota: 'Dosis del autoinyector, fija y por tramo de peso: 0.15 mg de 7.5 a menos de 30 kg, y 0.3 mg a partir de 30 kg. Puede repetirse una dosis a los 5 a 15 minutos.',
        evidencia: 'manual', fuente: { ref: 'HARRIET', pagina: 1125 }
      },
      {
        // Harriet Lane p1125, bradicardia y asistolia del lactante y el nino: primera dosis
        // 0.01 mg/kg de la solucion 1:10 000 (0.1 mL/kg) IV o intraosea, maximo 1 mg; las
        // siguientes iguales, cada 3 a 5 min.
        indicaciones: ['bradicardia-reanimacion'],
        mgkg: { valor: 0.01, por: 'dosis' },
        unica: true, via: 'iv',
        maxDosis: 1,
        edadMin: 29,
        nota: 'Con la solución 1:10 000, que es 0.1 mg/mL, 0.01 mg/kg equivale a 0.1 mL/kg. Se repite igual cada 3 a 5 minutos. El Harriet Lane señala que la dosis alta tras el fracaso de la estándar no ha demostrado ser eficaz. Por tubo endotraqueal la dosis es otra: 0.1 mg/kg de la solución 1:1000.',
        evidencia: 'manual', fuente: { ref: 'HARRIET', pagina: 1125 }
      },
      {
        // Harriet Lane p1125, uso cardiaco en el NEONATO: asistolia y bradicardia, 0.01 a
        // 0.03 mg/kg de la solucion 1:10 000 (0.1 a 0.3 mL/kg) IV o intraosea cada 3 a 5 min.
        // Esta es la linea neonatal, y resuelve ademas la incoherencia del Taketomo, que en su
        // linea IV de hipersensibilidad daba "0.01 mg/kg (0.01 mL/kg de 1:10 000)": con
        // 1:10 000, 0.01 mg/kg son 0.1 mL/kg, no 0.01. Aqui las dos cifras concuerdan.
        indicaciones: ['bradicardia-reanimacion'],
        mgkg: { min: 0.01, max: 0.03, por: 'dosis' },
        unica: true, via: 'iv',
        edadMax: 28,
        nota: 'Con la solución 1:10 000, de 0.01 a 0.03 mg/kg equivalen a 0.1 a 0.3 mL/kg. Se repite cada 3 a 5 minutos si hace falta. La secuencia de reanimación neonatal no se sigue desde una tabla de dosis.',
        evidencia: 'manual', fuente: { ref: 'HARRIET', pagina: 1125 }
      },
      {
        // Harriet Lane p1125, crup: nebulizacion como alternativa a la adrenalina racemica,
        // 0.5 mL/kg de la solucion 1:1000 diluidos en 3 mL de salino, con tope de 5 mL.
        indicaciones: ['crup'],
        mgkg: { valor: 0.5, por: 'dosis' },
        unica: true, via: 'nebulizada',
        maxDosis: 5,
        edadMin: 29,
        nota: 'Nebulizada, como alternativa a la adrenalina racémica: 0.5 mL/kg de la solución 1:1000, que a 1 mg/mL son 0.5 mg/kg, diluidos en 3 mL de solución salina. El Harriet Lane topa el volumen en 5 mL de la solución 1:1000.',
        evidencia: 'manual', fuente: { ref: 'HARRIET', pagina: 1125 }
      }
    ],
    mecanismo: 'Agonista alfa y beta adrenérgico: vasoconstricción, broncodilatación y aumento de la contractilidad y la frecuencia cardíacas.',
    adversos: ['Taquicardia', 'Palidez y temblor', 'Hipertensión arterial', 'Arritmias con dosis altas o por vía intravenosa'],
    precauciones: [
      'Las dos concentraciones se parecen y no son intercambiables: 1:1000 es 1 mg/mL y se usa por vía intramuscular; 1:10 000 es 0.1 mg/mL y se usa por vía intravenosa. Confundirlas es un error de factor diez.',
      'En la anafilaxia no hay contraindicación que justifique retrasarla.',
      'Muchas presentaciones contienen sulfitos.'
    ],
    dilucion: 'Para la vía intramuscular se usa la ampolla 1:1000 sin diluir. Para la intravenosa de la reanimación se usa la jeringa precargada 1:10 000, que ya viene diluida. Para nebulizar en el crup, la dosis de la solución 1:1000 se diluye en 3 mL de solución salina. En infusión continua, el Harriet Lane da de 0.1 a 1 mcg/kg/min a cualquier edad.',
    noTriturar: false
  }
];

export default { FUENTES, EVIDENCIA, grupos, areas, indicaciones, farmacos };
