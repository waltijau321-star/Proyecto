// protocols/pediatria-farmacos.js
// Farmacología pediátrica: base de datos declarativa que alimenta la sección Pediatría
// (engine/pediatria.js). Es la pregunta que más veces recibe el residente de pediatría en la
// guardia: cuánto, cada cuánto, y cuántos mililitros de lo que hay en el carro.
//
// DOS VISTAS, UN SOLO CONJUNTO DE DATOS. La pestaña "Por enfermedad" NO es una segunda lista
// escrita a mano: se deriva agrupando las líneas de `dosis[]` por su campo `indicaciones[]`.
// Escribir la misma relación dos veces es como se acaba con un fármaco que en la lista de la
// enfermedad sale con la dosis que ya se corrigió en su propia ficha, y nadie se enteró. Hay
// pruebas que comprueban la integridad en los dos sentidos.
//
// FUENTE DE ESTE BLOQUE
// Todo lo que hay aquí se leyó en el Taketomo, abriendo la página, y la página queda en
// `fuente.pagina` para que cualquiera pueda volver a ella. La idea que sostiene cada línea queda
// en un comentario al lado; la prosa del manual no se copia, porque tiene derechos reservados y
// esta app es pública. Lo que se toma es el DATO (la dosis, el intervalo, el tope), que no es
// expresión protegible.
//
// Dos trampas de este PDF, por si alguien amplía el bloque:
//  - la capa de texto trae errores de OCR ("AC1CLOVIR", "CURATO DE SODIO" por CITRATO), así que
//    no se puede extraer en bloque: hay que leer la página;
//  - el encabezado de cada página es el fármaco que EMPIEZA en ella, no el del texto de arriba,
//    que suele ser la cola de la monografía anterior. Buscar "Dosificación" en un rango de
//    páginas devuelve con frecuencia la dosis del fármaco de antes o del de después. Pasó con
//    amoxicilina (salía la de un barbitúrico) y con clindamicina (salía la tópica). Hay que
//    comprobar que el texto habla del fármaco que se cree.
//
// NO se toman de aquí las presentaciones: el manual lista productos de Estados Unidos. Las
// `presentaciones[]` de este archivo son las concentraciones habituales en el mercado local, y
// la vista lo dice en cada selector, porque un volumen calculado sobre una concentración que no
// es la del frasco es el error de factor dos más fácil de cometer.
//
// Los textos se inyectan con innerHTML: usar &lt; y &gt; en vez de los signos de menor y mayor.

/* ---------------- Fuentes ----------------
   `fuente.ref` de cada línea de dosis apunta aquí. Separar la referencia de la página permite que
   la prueba compruebe que toda línea trae las dos cosas sin repetir la cita en cada entrada.
   `autoridad` es lo que esa referencia PUEDE respaldar: un manual de dosificación respalda una
   dosis, no una elección de tratamiento (ver `linea` en el contrato de abajo).

   Solo se declara lo que se usa: una prueba falla si una referencia de esta tabla no la cita
   ninguna línea, porque una fuente declarada y no usada es una fuente que nadie comprobó. NeoFax
   y Harriet Lane entran aquí cuando su primera línea las necesite. */
export const FUENTES = {
  TAKETOMO: {
    etiqueta: 'Taketomo, 18.ª ed.',
    autoridad: 'manual',
    // Sin año: el PDF que hay en Bibliografia/XVI. Pediatría/ no trae página de créditos legible,
    // y sus referencias internas llegan hasta 2009. Se cita la edición, que es verificable, en
    // vez de un año de memoria. Una cita inventada es peor que una cita incompleta.
    cita: 'Taketomo CK, Hodding JH, Kraus DM. Manual de dosificación pediátrica y neonatal. 18.ª ed. Lexicomp / Wolters Kluwer. Manual de dosificación: respalda la dosis, no la elección del tratamiento'
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
  { id: 'piel',          label: 'Piel y tejidos blandos',           accent: '#85602e' },
  { id: 'urgencias',     label: 'Urgencias y reanimación',          accent: '#5c4a73' },
  { id: 'reumatologia',  label: 'Reumatología',                     accent: '#5a6b35' },
  { id: 'profilaxis',    label: 'Profilaxis',                       accent: '#4a5c73' }
];

/* ---------------- Taxonomía de cuadros clínicos ----------------
   Los nombres y la agrupación de la vista "Por enfermedad" viven AQUÍ, no en cada línea de dosis:
   así renombrar un cuadro es un cambio en un solo sitio y no en catorce.

   `contexto` es OBLIGATORIO y no es adorno: es lo que impide que la lista se lea como "estos
   fármacos tratan la neumonía, elige uno". Dice a qué paciente aplica la lista y a cuál no, y se
   pinta siempre, encima de ella. Ninguna de las fuentes de este archivo ordena tratamientos (son
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
    contexto: 'Prevención y tratamiento del edema de vía aérea alrededor de la extubación programada. Los esquemas publicados son variables y los datos limitados.' },

  { id: 'infeccion-piel-tejidos-blandos', area: 'piel', nombre: 'Infecciones de piel y tejidos blandos',
    alias: ['celulitis', 'impetigo', 'absceso', 'erisipela'],
    contexto: 'Infección de piel y estructuras cutáneas sin criterios de infección necrosante. La cobertura de Staphylococcus aureus resistente a meticilina depende de la epidemiología local y estos fármacos no la garantizan.' },

  { id: 'meningitis-bacteriana', area: 'infeccioso', nombre: 'Meningitis bacteriana',
    alias: ['meningitis', 'LCR'],
    contexto: 'Meningitis bacteriana del lactante y del niño. Las dosis son las de dosis alta, por la penetración al sistema nervioso central. El esquema empírico depende de la edad y de la epidemiología local.' },

  { id: 'infeccion-bacteriana-grave', area: 'infeccioso', nombre: 'Infección bacteriana grave',
    alias: ['sepsis', 'bacteriemia', 'fiebre sin foco'],
    contexto: 'Infección sistémica que requiere antibiótico parenteral, sin foco definido o a la espera de cultivos. Es la dosis del fármaco, no el esquema empírico: la combinación la decide la edad, el foco probable y el protocolo del servicio.' },

  { id: 'fiebre-tifoidea', area: 'infeccioso', nombre: 'Fiebre tifoidea',
    alias: ['tifoidea', 'Salmonella typhi', 'salmonelosis'],
    contexto: 'Fiebre entérica por Salmonella typhi o paratyphi. No cubre la gastroenteritis por Salmonella no tifoidea, que en el niño sano no suele requerir antibiótico.' },

  { id: 'bradicardia-reanimacion', area: 'urgencias', nombre: 'Bradicardia con mala perfusión',
    alias: ['paro', 'reanimacion', 'RCP', 'bradicardia'],
    contexto: 'Bradicardia con compromiso hemodinámico durante la reanimación. La dosis va aquí para no tener que buscarla, pero la secuencia de reanimación no se sigue desde una tabla de dosis.' },

  { id: 'anafilaxia', area: 'urgencias', nombre: 'Anafilaxia y reacción de hipersensibilidad grave',
    alias: ['alergia', 'choque anafilactico', 'adrenalina', 'urticaria grave'],
    contexto: 'Reacción alérgica sistémica grave. La adrenalina intramuscular es el tratamiento, y no hay dosis que sustituya a administrarla pronto.' },

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
     mecanismo?, adversos[]?, precauciones[]?, ajusteRenal?, administracion?, notas[]? }

   presentaciones[]: { id, etiqueta, mg, mL }
     `mg` es el principio activo que hay en `mL` de producto. En comprimido o cápsula, mL: null, y
     la vista da la dosis en unidades en vez de mililitros. Son OBLIGATORIAS: un volumen sin decir
     de qué concentración sale es la forma más fácil de equivocarse por un factor de dos, porque
     5 mL de 125 mg/5 mL y 5 mL de 250 mg/5 mL se ven igual en la jeringa.

   dosis[]: una línea por cada combinación de indicación, vía y franja de edad.
     indicaciones[]  SIEMPRE un array, aunque sea uno: la relación fármaco-cuadro es de muchos a
                     muchos, y escribirla como cadena obliga a un typeof en cada recorrido. Cada
                     id tiene que existir en `indicaciones`, y cada indicación declarada tiene que
                     citarla al menos una línea: la prueba va en los dos sentidos, porque una
                     indicación huérfana es una enfermedad que se abre vacía.
     mgkg            { valor } o { min, max }, nunca las dos, más `por: 'dosis' | 'dia'`. UNA sola
                     clave con la base explícita: confundir mg/kg/día con mg/kg/dosis es el error
                     de factor 3 o 4 más repetido de la pediatría, y con dos claves alternativas
                     basta olvidar cuál se usó para que la línea quede muda. Todo en MILIGRAMOS.
     fija            { valor } o { min, max } en mg, para la dosis que no se multiplica por el peso
                     (la del adolescente que ya está en el techo de adulto, los tramos de peso del
                     autoinyector). Excluye `mgkg`.
     cada            horas entre dosis. OBLIGATORIO cuando `por` es 'dia': sin él no se puede
                     repartir la dosis diaria, y una dosis diaria sin reparto no se administra.
     unica           true para la dosis única, en vez de `cada`.
     via             una de VIAS (engine/pediatria-dosis.js).
     maxDosis        techo por toma, en mg.
     maxDia          techo diario, en mg.
     maxMgkgDosis    techo por toma, en mg/kg.
     maxMgkgDia      techo diario, en mg/kg/día.
                     Los cuatro son opcionales y manda el más bajo de los que apliquen: en el
                     lactante acota el de por peso y en el adolescente el absoluto.
     edadMin/edadMax franja en DÍAS de vida (para el neonato, su edad posnatal).
     egMin/egMax     franja en semanas de edad gestacional.
     pesoMin/pesoMax franja en kg.
                     Lo que se omite no acota por ese lado. Una línea sin ningún eje es para todos.
                     Los neonatos NO son un array aparte: son estas mismas líneas con la franja
                     puesta. Dos arrays obligarían a duplicar el agrupado por indicación y dejarían
                     a las líneas neonatales fuera de las pruebas de integridad.
     duracion, nota  texto libre.
     evidencia       'guia' | 'manual' | 'consenso'.
     fuente          { ref, pagina }. Van por LÍNEA y no por fármaco, porque es el caso normal que
                     la dosis neonatal venga de un manual y la pediátrica de otro: una sola fuente
                     en la cabecera mentiría sobre una de las dos.
     linea           OPCIONAL (1 = primera elección). Si está, OBLIGA a `fuenteLinea` apuntando a
                     una guía de tratamiento con año, y la prueba rechaza la entrada si falta. Un
                     manual de dosificación dice cuánto, no qué primero. Hoy ninguna línea lo usa. */
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
      {
        // p42: oral, lactantes y niños, 10 a 15 mg/kg/dosis cada 4 a 6 h, sin pasar de cinco
        // dosis en 24 h. El techo absoluto (1 g por toma, 4 g/día) es el de la línea de adultos
        // de la misma página, que es lo que acota al adolescente.
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        mgkg: { min: 10, max: 15, por: 'dosis' },
        cada: 6, via: 'oral',
        maxDosis: 1000, maxDia: 4000,
        edadMin: 28,
        nota: 'No más de cinco dosis en 24 horas. El techo de 1 g por toma y 4 g al día es el del adulto, y es el que acota al adolescente.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 42 }
      },
      {
        // p42: rectal, lactantes y niños, 10 a 20 mg/kg/dosis cada 4 a 6 h.
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        mgkg: { min: 10, max: 20, por: 'dosis' },
        cada: 6, via: 'rectal',
        maxDosis: 1000, maxDia: 4000,
        edadMin: 28,
        nota: 'La vía rectal admite una dosis algo mayor que la oral. El manual advierte que las dosis altas perioperatorias por esta vía (25 a 45 mg/kg) siguen siendo discutidas y no las respalda para uso rutinario.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 42 }
      },
      {
        // p42: IV, lactantes y niños menores de 2 años, 7.5 a 15 mg/kg/dosis cada 6 h, con techo
        // diario de 60 mg/kg/día (el manual lo atribuye a Wilson-Smith, 2009).
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        mgkg: { min: 7.5, max: 15, por: 'dosis' },
        cada: 6, via: 'iv',
        maxMgkgDia: 60,
        edadMin: 28, edadMax: 730,
        nota: 'El manual atribuye el techo de 60 mg/kg/día en este grupo a Wilson-Smith, 2009.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 42 }
      },
      {
        // p42: IV, niños de 2 a 12 años, 15 mg/kg cada 6 h; techo de 15 mg/kg por toma, de
        // 75 mg/kg/día y de 3 750 mg/día.
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        mgkg: { valor: 15, por: 'dosis' },
        cada: 6, via: 'iv',
        maxMgkgDosis: 15, maxMgkgDia: 75, maxDia: 3750,
        edadMin: 730, edadMax: 4383,
        nota: 'Alternativa de la misma página: 12.5 mg/kg cada 4 horas.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 42 }
      },
      {
        // p42, dosificacion neonatal oral (el manual la atribuye a Anand, 2001 y 2002): recien
        // nacido de termino con 10 dias o mas de vida, 10 a 15 mg/kg/dosis cada 4 a 6 h, techo
        // 90 mg/kg/dia.
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        mgkg: { min: 10, max: 15, por: 'dosis' },
        cada: 6, via: 'oral',
        maxMgkgDia: 90,
        edadMin: 10, edadMax: 28,
        nota: 'Recién nacido de término con 10 días de vida o más. El manual atribuye el esquema neonatal a Anand, 2001 y 2002.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 42 }
      },
      {
        // p42: EG 33 a 37 semanas, O nacido a termino con menos de 10 dias: 10 a 15 mg/kg/dosis
        // cada 6 h, techo 60 mg/kg/dia. La franja del manual es una disyuncion que los ejes de
        // este contrato (que se combinan con Y) no pueden expresar, asi que se acota por la edad,
        // que es la lectura inclusiva y segura, y la condicion completa se dice en la nota.
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        mgkg: { min: 10, max: 15, por: 'dosis' },
        cada: 6, via: 'oral',
        maxMgkgDia: 60,
        edadMax: 10,
        nota: 'Edad gestacional de 33 a 37 semanas, o nacido a término con menos de 10 días de vida.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 42 }
      },
      {
        // p42: EG 28 a 32 semanas, 10 a 12 mg/kg/dosis cada 6 a 8 h, techo 40 mg/kg/dia.
        indicaciones: ['fiebre', 'dolor-leve-moderado'],
        mgkg: { min: 10, max: 12, por: 'dosis' },
        cada: 8, via: 'oral',
        maxMgkgDia: 40,
        egMax: 32,
        nota: 'Prematuro de 28 a 32 semanas de edad gestacional.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 42 }
      }
    ],
    mecanismo: 'Inhibe la síntesis de prostaglandinas en el sistema nervioso central y actúa sobre el centro hipotalámico de la termorregulación.',
    adversos: [
      'Hepatotoxicidad por sobredosis, aguda o por acumulación de dosis repetidas',
      'Es bien tolerado a dosis terapéuticas, y eso es justo lo que hace que se repita de más'
    ],
    precauciones: [
      'Usar con cautela en hepatopatía, y evitar el uso crónico si hay disfunción: el manual recoge casos de hepatotoxicidad incluso con menos de 4 g al día.',
      'Está en muchos preparados combinados de venta libre: sumar lo que el niño ya recibe antes de indicar más.'
    ],
    ajusteRenal: 'En niños con aclaramiento de creatinina menor de 10 mL/min, administrar cada 8 horas (el manual lo atribuye a Aronoff, 2007). En hemodiálisis o diálisis peritoneal intermitentes, cada 8 horas.',
    administracion: 'La forma inyectable es solo para infusión intravenosa y puede administrarse sin diluir en 15 minutos.',
    noTriturar: false
  },

  {
    id: 'ibuprofeno',
    grupo: 'analgesicos',
    farmaco: 'Ibuprofeno',
    alias: ['ibuprofen', 'Advil', 'Motrin', 'AINE'],
    resumen: 'Antiinflamatorio no esteroideo: antipirético y analgésico desde los 6 meses.',
    presentaciones: [
      { id: 'susp-100', etiqueta: 'suspensión 100 mg/5 mL', mg: 100, mL: 5 },
      { id: 'susp-200', etiqueta: 'suspensión 200 mg/5 mL', mg: 200, mL: 5 },
      { id: 'tab-400',  etiqueta: 'tableta 400 mg', mg: 400, mL: null }
    ],
    dosis: [
      {
        // p770: antipiretico, 6 meses a 12 anos. La dosis depende de la temperatura: por debajo
        // de 39 grados, 5 mg/kg; a partir de 39, 10 mg/kg. Cada 6 a 8 h, techo 40 mg/kg/dia.
        indicaciones: ['fiebre'],
        mgkg: { min: 5, max: 10, por: 'dosis' },
        cada: 6, via: 'oral',
        maxMgkgDia: 40, maxDosis: 800, maxDia: 3200,
        edadMin: 183, edadMax: 4383,
        nota: 'El extremo del rango lo decide la temperatura: por debajo de 39 grados, 5 mg/kg por toma; a partir de 39 grados, 10 mg/kg. El techo de 800 mg por toma y 3.2 g al día es el del adulto.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 770 }
      },
      {
        // p770: analgesico, lactantes y ninos, 4 a 10 mg/kg/dosis cada 6 a 8 h, techo
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
        // p770: artritis reumatoide juvenil, 6 meses a 12 anos, 30 a 40 mg/kg/dia en tres o
        // cuatro dosis; techo 2.4 g/dia. Por encima de 40 mg/kg/dia sube el riesgo de efectos
        // adversos graves y por encima de 50 no esta estudiado.
        indicaciones: ['artritis-idiopatica-juvenil'],
        mgkg: { min: 30, max: 40, por: 'dia' },
        cada: 8, via: 'oral',
        maxDia: 2400,
        edadMin: 183, edadMax: 4383,
        nota: 'Empezar por el extremo bajo y ajustar; la enfermedad más leve puede tratarse con 20 mg/kg/día. El manual advierte que por encima de 40 mg/kg/día aumenta el riesgo de efectos adversos graves, y que por encima de 50 mg/kg/día no está estudiado y no se recomienda.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 770 }
      }
    ],
    mecanismo: 'Inhibe la ciclooxigenasa y con ella la síntesis de prostaglandinas, lo que le da efecto antiinflamatorio además del analgésico y antipirético.',
    adversos: ['Molestias gastrointestinales y gastropatía', 'Lesión renal aguda, sobre todo con depleción de volumen'],
    precauciones: [
      'No usarlo en el niño deshidratado o con hipoperfusión: es donde el riesgo renal se concretiza.',
      'El manual no recoge dosis antipirética por debajo de los 6 meses de edad.'
    ],
    administracion: 'Administrar con alimento si produce molestias gástricas. Agitar la suspensión antes de cada toma.',
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
        // p128: otitis media aguda, 80 a 90 mg/kg/dia divididos cada 12 h.
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
        // p128: neumonia adquirida en la comunidad, ninos de 4 meses a 4 anos, 80 a
        // 100 mg/kg/dia en fracciones cada 6 a 8 h. El manual anade, en esta misma linea, que
        // en ninos de 5 a 15 anos es mas razonable un macrolido como primera eleccion porque M.
        // pneumoniae es la causa principal en ese grupo: es una afirmacion del manual sobre la
        // eleccion, asi que se recoge como nota y NO como campo `linea`.
        indicaciones: ['neumonia-adquirida-comunidad'],
        mgkg: { min: 80, max: 100, por: 'dia' },
        cada: 8, via: 'oral',
        maxDia: 3000,
        edadMin: 120, edadMax: 1826,
        nota: 'El manual observa que a partir de los 5 años es más razonable un macrólido, porque Mycoplasma pneumoniae pasa a ser la causa principal de neumonía en ese grupo de edad.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 128 }
      },
      {
        // p128: faringoamigdalitis estreptococica (prevencion primaria de fiebre reumatica),
        // ninos de 3 a 18 anos, 50 mg/kg una vez al dia, maximo 1 000 mg, durante 10 dias.
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
        // p128: lactantes mayores de 3 meses y ninos, 25 a 50 mg/kg/dia divididos cada 8 h o
        // cada 12 h. Es la linea general, sin foco.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 25, max: 50, por: 'dia' },
        cada: 8, via: 'oral',
        maxDia: 3000,
        edadMin: 90,
        nota: 'Línea general del manual, para la infección que no exige dosis alta. Puede repartirse cada 8 o cada 12 horas.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 128 }
      },
      {
        // p128: lactantes de 1 a 3 meses, 20 a 30 mg/kg/dia divididos cada 12 h.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 20, max: 30, por: 'dia' },
        cada: 12, via: 'oral',
        edadMin: 28, edadMax: 90,
        nota: 'Lactante de 1 a 3 meses. En este grupo la fiebre sin foco rara vez se maneja con un oral: la línea está para la dosis, no para la decisión.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 128 }
      },
      {
        // p128: profilaxia de endocarditis, 50 mg/kg una hora antes del procedimiento, sin
        // exceder la dosis de adultos (2 g, de la linea de adultos de la misma pagina).
        indicaciones: ['profilaxis-endocarditis'],
        mgkg: { valor: 50, por: 'dosis' },
        unica: true, via: 'oral',
        maxDosis: 2000,
        nota: 'Dosis única una hora antes del procedimiento, sin pasar de la dosis de adulto, que en la misma página es de 2 g.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 128 }
      }
    ],
    mecanismo: 'Inhibe la síntesis de la pared celular bacteriana al unirse a las proteínas fijadoras de penicilina.',
    adversos: ['Exantema, frecuente y no siempre alérgico', 'Diarrea', 'Candidiasis oral'],
    precauciones: ['Con infección por virus de Epstein-Barr, leucemia linfocítica aguda o citomegalovirus aumenta la frecuencia de exantema, y ese exantema no equivale a alergia a la penicilina.'],
    ajusteRenal: 'Con aclaramiento de creatinina de 10 a 30 mL/min, cada 12 horas; por debajo de 10 mL/min, cada 24 horas.',
    administracion: 'Con o sin alimentos. Puede mezclarse con fórmula láctea, bebidas frías o jugos, y administrarse de inmediato después de mezclarla. Agitar bien la suspensión antes de usarla.',
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
        // p130: otitis media aguda o sinusitis grave, recurrente o con falla antibiotica previa,
        // 80 a 90 mg/kg/dia en fracciones cada 12 h, con la suspension de 600 mg/5 mL.
        indicaciones: ['otitis-media-aguda', 'sinusitis-bacteriana-aguda'],
        mgkg: { min: 80, max: 90, por: 'dia' },
        cada: 12, via: 'oral',
        pesoMax: 40,
        nota: 'Para el cuadro grave, recurrente o con fracaso de un antibiótico previo. El manual indica expresamente la suspensión de 600 mg/5 mL para esta dosis, porque con las diluidas el volumen se vuelve impracticable.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 130 }
      },
      {
        // p130: neumonia adquirida en la comunidad, cepas de H. influenzae productoras de
        // betalactamasa o no tipificables, 80 a 100 mg/kg/dia en fracciones cada 8 h, con la
        // suspension de 600 mg/5 mL.
        indicaciones: ['neumonia-adquirida-comunidad'],
        mgkg: { min: 80, max: 100, por: 'dia' },
        cada: 8, via: 'oral',
        pesoMax: 40,
        nota: 'La indicación que el manual recoge para esta dosis es la neumonía por Haemophilus influenzae productor de betalactamasa o no tipificable.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 130 }
      },
      {
        // p130: lactantes y ninos de 3 meses a 16 anos con menos de 40 kg, infeccion que no es
        // grave: 20 a 40 mg/kg/dia cada 8 h con las suspensiones de 125 o 250 mg/5 mL.
        indicaciones: ['infeccion-bacteriana-grave', 'infeccion-piel-tejidos-blandos'],
        mgkg: { min: 20, max: 40, por: 'dia' },
        cada: 8, via: 'oral',
        edadMin: 90, pesoMax: 40,
        nota: 'Infección que no es grave. Repartida cada 12 horas, el manual da 25 a 45 mg/kg/día con las suspensiones de 200 o 400 mg/5 mL.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 130 }
      },
      {
        // p130: lactantes de 1 a 3 meses, 30 mg/kg/dia en fracciones cada 12 h con la suspension
        // de 125 mg/5 mL.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { valor: 30, por: 'dia' },
        cada: 12, via: 'oral',
        edadMin: 28, edadMax: 90,
        nota: 'Lactante de 1 a 3 meses, con la suspensión de 125 mg/5 mL.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 130 }
      },
      {
        // p130: ninos y adolescentes de mas de 40 kg o mas de 16 anos, infecciones mas graves y
        // las respiratorias: 500 mg cada 8 h, u 875 mg cada 12 h. Es dosis fija, no por peso.
        indicaciones: ['neumonia-adquirida-comunidad', 'sinusitis-bacteriana-aguda', 'infeccion-piel-tejidos-blandos'],
        fija: { valor: 875 },
        cada: 12, via: 'oral',
        pesoMin: 40,
        nota: 'A partir de 40 kg la dosis deja de calcularse por peso. Alternativa de la misma página: 500 mg cada 8 horas.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 130 }
      }
    ],
    mecanismo: 'La amoxicilina inhibe la síntesis de la pared celular y el clavulanato protege a la amoxicilina de las betalactamasas.',
    adversos: ['Diarrea, bastante más frecuente que con amoxicilina sola, por el clavulanato', 'Exantema', 'Candidiasis'],
    precauciones: [
      'La dosis se calcula SIEMPRE sobre la amoxicilina, nunca sobre la suma de los dos componentes.',
      'No se llega a una dosis alta duplicando una presentación diluida: eso multiplica el clavulanato y con él la diarrea. El manual indica la presentación concreta para cada dosis por ese motivo.'
    ],
    administracion: 'Administrar al iniciar la alimentación, para reducir las molestias gastrointestinales. No darlo con alimentos ricos en grasa, que disminuyen la absorción.',
    noTriturar: false
  },

  {
    id: 'ampicilina',
    grupo: 'betalactamicos',
    farmaco: 'Ampicilina',
    alias: ['Ampi', 'Pentrexyl'],
    resumen: 'Betalactámico parenteral del esquema empírico neonatal y de la meningitis por Listeria.',
    presentaciones: [
      { id: 'vial-1000', etiqueta: 'vial 1 g (reconstituido a 100 mg/mL)', mg: 100, mL: 1 },
      { id: 'vial-500',  etiqueta: 'vial 500 mg (reconstituido a 100 mg/mL)', mg: 100, mL: 1 },
      { id: 'susp-250',  etiqueta: 'suspensión oral 250 mg/5 mL', mg: 250, mL: 5 }
    ],
    dosis: [
      {
        // p132: meningitis, 200 a 400 mg/kg/dia divididos cada 6 h, dosis maxima 12 g/dia.
        indicaciones: ['meningitis-bacteriana'],
        mgkg: { min: 200, max: 400, por: 'dia' },
        cada: 6, via: 'iv',
        maxDia: 12000,
        nota: 'Es la dosis alta, por la penetración al sistema nervioso central: el triple o el cuádruple de la dosis sistémica habitual.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 132 }
      },
      {
        // p132: lactantes y ninos, IM o IV, 100 a 200 mg/kg/dia divididos cada 6 h.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 100, max: 200, por: 'dia' },
        cada: 6, via: 'iv',
        maxDia: 14000,
        nota: 'El techo de 14 g al día es el de la línea de adultos de la misma página.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 132 }
      },
      {
        // p132: ninos, oral, 50 a 100 mg/kg/dia divididos cada 6 h, maximo 2 a 3 g/dia.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 50, max: 100, por: 'dia' },
        cada: 6, via: 'oral',
        maxDia: 3000,
        nota: 'La vía oral de la ampicilina tiene absorción irregular y hoy se usa poco: el manual la mantiene, pero para un oral hay mejores opciones.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 132 }
      },
      {
        // p132: profilaxia de endocarditis, 50 mg/kg en los 30 min previos al procedimiento,
        // dosis maxima 2 g.
        indicaciones: ['profilaxis-endocarditis'],
        mgkg: { valor: 50, por: 'dosis' },
        unica: true, via: 'iv',
        maxDosis: 2000,
        nota: 'Dosis única en los 30 minutos previos al procedimiento. En el paciente de riesgo alto que se somete a un procedimiento genitourinario o gastrointestinal, el manual la combina con gentamicina.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 132 }
      }
    ],
    mecanismo: 'Inhibe la síntesis de la pared celular bacteriana al unirse a las proteínas fijadoras de penicilina.',
    adversos: ['Exantema', 'Diarrea', 'Flebitis en el sitio de infusión'],
    ajusteRenal: 'En el adulto, con aclaramiento de creatinina de 10 a 30 mL/min, cada 6 a 12 horas; por debajo de 10 mL/min, cada 12 horas.',
    administracion: 'Por vía intravenosa rápida en 3 a 5 minutos, a un máximo de 100 mg/min, o en infusión intermitente de 15 a 30 minutos. La concentración final no debe pasar de 100 mg/mL en bolo ni de 30 mg/mL en infusión. La vía oral se da con agua, 1 a 2 horas antes del alimento.',
    noTriturar: false
  },

  {
    id: 'ceftriaxona',
    grupo: 'betalactamicos',
    farmaco: 'Ceftriaxona',
    alias: ['Rocephin', 'cefalosporina de tercera'],
    resumen: 'Cefalosporina de tercera generación, una vez al día, para la infección grave del niño.',
    presentaciones: [
      { id: 'vial-1000', etiqueta: 'vial 1 g (reconstituido a 100 mg/mL)', mg: 100, mL: 1 },
      { id: 'vial-500',  etiqueta: 'vial 500 mg (reconstituido a 100 mg/mL)', mg: 100, mL: 1 },
      { id: 'im-350',    etiqueta: 'vial para vía intramuscular a 350 mg/mL', mg: 350, mL: 1 }
    ],
    dosis: [
      {
        // p288: meningitis, 100 mg/kg/dia divididos cada 12 a 24 h, con dosis de impregnacion de
        // 100 mg/kg posible al inicio; dosis maxima 4 g/dia.
        indicaciones: ['meningitis-bacteriana'],
        mgkg: { valor: 100, por: 'dia' },
        cada: 12, via: 'iv',
        maxDia: 4000,
        nota: 'Puede administrarse una dosis de impregnación de 100 mg/kg al inicio del tratamiento. Reparto cada 12 o cada 24 horas.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 288 }
      },
      {
        // p288: lactantes y ninos, 50 a 75 mg/kg/dia divididos cada 12 a 24 h.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 50, max: 75, por: 'dia' },
        cada: 24, via: 'iv',
        maxDia: 2000,
        nota: 'Línea general del manual. Una sola dosis al día basta en la mayoría de las indicaciones que no son meningitis.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 288 }
      },
      {
        // p288: otitis media aguda bacteriana, 50 mg/kg en dosis unica, maximo 1 g.
        indicaciones: ['otitis-media-aguda'],
        mgkg: { valor: 50, por: 'dosis' },
        unica: true, via: 'im',
        maxDosis: 1000,
        nota: 'Dosis única intramuscular, que es la salida cuando no se puede usar la vía oral. En la otitis persistente o recidivante, el manual da 50 mg/kg cada 24 horas durante tres días.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 288 }
      },
      {
        // p288: infecciones de piel y estructuras cutaneas, 50 a 75 mg/kg/dia en una o dos
        // fracciones, maximo 2 g/dia.
        indicaciones: ['infeccion-piel-tejidos-blandos'],
        mgkg: { min: 50, max: 75, por: 'dia' },
        cada: 24, via: 'iv',
        maxDia: 2000,
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 288 }
      },
      {
        // p288: epiglotitis, 50 a 100 mg/kg cada 24 h; la duracion informada varia de 2 a 14 dias.
        indicaciones: ['epiglotitis'],
        mgkg: { min: 50, max: 100, por: 'dia' },
        cada: 24, via: 'iv',
        maxDia: 4000,
        duracion: 'de 2 a 14 días, según lo informado',
        nota: 'La duración que recoge el manual para esta indicación es muy variable. La prioridad del cuadro es la vía aérea.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 288 }
      },
      {
        // p288: fiebre tifoidea, IV, 75 a 80 mg/kg cada 24 h durante 5 a 14 dias.
        indicaciones: ['fiebre-tifoidea'],
        mgkg: { min: 75, max: 80, por: 'dia' },
        cada: 24, via: 'iv',
        maxDia: 4000,
        duracion: 'de 5 a 14 días',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 288 }
      },
      {
        // p288: quimioprofilaxia en contactos de riesgo alto de caso meningococico invasivo,
        // menores de 15 anos, IM, 125 mg en una sola dosis.
        indicaciones: ['quimioprofilaxis-meningococo'],
        fija: { valor: 125 },
        unica: true, via: 'im',
        edadMax: 5479,
        nota: 'Dosis fija, no por peso. A partir de los 15 años, el manual da 250 mg en una sola dosis intramuscular.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 288 }
      }
    ],
    mecanismo: 'Inhibe la síntesis de la pared celular bacteriana al unirse a las proteínas fijadoras de penicilina. Su vida media larga permite una dosis al día.',
    adversos: ['Diarrea', 'Exantema', 'Seudolitiasis biliar por precipitación del fármaco', 'Dolor en el sitio de la inyección intramuscular'],
    precauciones: [
      'En el neonato desplaza la bilirrubina de la albúmina, y por eso se evita en el recién nacido con hiperbilirrubinemia.',
      'No administrar junto con soluciones que contengan calcio por la misma vía: precipitan.'
    ],
    administracion: 'Para la vía intramuscular se reconstituye más concentrado y puede diluirse en lidocaína al 1% para el dolor, según el protocolo del servicio.',
    noTriturar: false
  },

  {
    id: 'cefalexina',
    grupo: 'betalactamicos',
    farmaco: 'Cefalexina',
    alias: ['Keflex', 'cefalosporina de primera'],
    resumen: 'Cefalosporina oral de primera generación para piel, faringitis y otitis.',
    presentaciones: [
      { id: 'susp-250', etiqueta: 'suspensión 250 mg/5 mL', mg: 250, mL: 5 },
      { id: 'susp-125', etiqueta: 'suspensión 125 mg/5 mL', mg: 125, mL: 5 },
      { id: 'cap-500',  etiqueta: 'cápsula 500 mg', mg: 500, mL: null }
    ],
    dosis: [
      {
        // p274: faringitis estreptococica e infecciones de piel y estructura cutanea, 25 a
        // 50 mg/kg/dia divididos cada 12 h.
        indicaciones: ['faringoamigdalitis-estreptococica', 'infeccion-piel-tejidos-blandos'],
        mgkg: { min: 25, max: 50, por: 'dia' },
        cada: 12, via: 'oral',
        maxDia: 4000,
        duracion: '10 días en la faringitis estreptocócica',
        nota: 'Para estas dos indicaciones el manual permite el reparto cada 12 horas, que es lo que hace realista completar diez días en un niño.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 274 }
      },
      {
        // p274: ninos, 25 a 50 mg/kg/dia divididos cada 6 a 8 h; infecciones graves 50 a
        // 100 mg/kg/dia divididos cada 6 a 8 h; dosis maxima 4 g/dia.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 50, max: 100, por: 'dia' },
        cada: 8, via: 'oral',
        maxDia: 4000,
        nota: 'Es la línea de infección grave del manual. Para el cuadro habitual, la misma página da 25 a 50 mg/kg/día cada 6 a 8 horas.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 274 }
      },
      {
        // p274: otitis media, 75 a 100 mg/kg/dia divididos cada 6 h.
        indicaciones: ['otitis-media-aguda'],
        mgkg: { min: 75, max: 100, por: 'dia' },
        cada: 6, via: 'oral',
        maxDia: 4000,
        nota: 'Cuatro tomas al día, que es lo que la hace poco práctica en la otitis frente a la amoxicilina cada 12 horas.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 274 }
      },
      {
        // p274: profilaxia de endocarditis, 50 mg/kg una hora antes del procedimiento, maximo 2 g.
        indicaciones: ['profilaxis-endocarditis'],
        mgkg: { valor: 50, por: 'dosis' },
        unica: true, via: 'oral',
        maxDosis: 2000,
        nota: 'Dosis única una hora antes del procedimiento. Es la opción para el alérgico a penicilina sin reacción de hipersensibilidad inmediata.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 274 }
      }
    ],
    mecanismo: 'Inhibe la síntesis de la pared celular bacteriana al unirse a las proteínas fijadoras de penicilina.',
    adversos: ['Molestias gastrointestinales', 'Diarrea', 'Exantema'],
    ajusteRenal: 'Con aclaramiento de creatinina de 10 a 40 mL/min, cada 8 a 12 horas; por debajo de 10 mL/min, cada 12 a 24 horas.',
    administracion: 'En ayuno, una hora antes o dos después del alimento; con alimento si hay molestias. Agitar bien antes de usar.',
    noTriturar: false
  },

  /* ============ Macrólidos y aminoglucósidos ============ */
  {
    id: 'azitromicina',
    grupo: 'otros-atb',
    farmaco: 'Azitromicina',
    alias: ['Zithromax', 'macrolido', 'azitro'],
    resumen: 'Macrólido de una toma al día: neumonía atípica y tos ferina.',
    presentaciones: [
      { id: 'susp-200', etiqueta: 'suspensión 200 mg/5 mL', mg: 200, mL: 5 },
      { id: 'susp-100', etiqueta: 'suspensión 100 mg/5 mL', mg: 100, mL: 5 },
      { id: 'tab-500',  etiqueta: 'tableta 500 mg', mg: 500, mL: null }
    ],
    dosis: [
      {
        // p179: neumonia adquirida en la comunidad, 10 mg/kg una vez al dia (maximo 500 mg)
        // durante tres dias; o 10 mg/kg el dia 1 (maximo 500 mg) seguidos de 5 mg/kg/dia
        // (maximo 250 mg) los dias 2 a 5.
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
        // p179: infecciones de vias respiratorias, ninos mayores de 6 meses, 10 mg/kg el primer
        // dia (maximo 500 mg) seguidos de 5 mg/kg/dia (maximo 250 mg) los dias 2 a 5.
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
        // p179: tos ferina, lactantes menores de 6 meses, 10 mg/kg/dosis una vez al dia durante
        // cinco dias. La misma pagina da la dosis neonatal, atribuida al Red Book 2009.
        indicaciones: ['tos-ferina'],
        mgkg: { valor: 10, por: 'dosis' },
        cada: 24, via: 'oral',
        duracion: '5 días',
        nota: 'Es el esquema del lactante menor de 6 meses, y el mismo que el manual da para el neonato atribuyéndolo al Red Book de 2009. En la tos ferina el macrólido es el tratamiento de elección a cualquier edad, y por debajo de un mes la azitromicina se prefiere a la eritromicina.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 179 }
      }
    ],
    mecanismo: 'Se une a la subunidad ribosómica 50S e inhibe la síntesis de proteínas bacterianas.',
    adversos: ['Molestias gastrointestinales', 'Dolor abdominal', 'Prolongación del intervalo QT'],
    precauciones: ['La suspensión de liberación prolongada no es intercambiable con la de liberación inmediata, y las dosis de este archivo son todas de liberación inmediata.'],
    administracion: 'Agitar bien la suspensión. Puede darse con o sin alimentos.',
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
      { id: 'amp-10', etiqueta: 'ampolla 20 mg/2 mL (10 mg/mL)', mg: 10, mL: 1 }
    ],
    dosis: [
      {
        // p699: lactantes y ninos menores de 5 anos, IM o IV, 2.5 mg/kg/dosis cada 8 h.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { valor: 2.5, por: 'dosis' },
        cada: 8, via: 'iv',
        edadMin: 28, edadMax: 1826,
        nota: 'El manual añade que algunos pacientes necesitan dosis más altas o más frecuentes, incluso cada 6 horas, si las concentraciones séricas lo indican: fibrosis quística, grandes quemados y el paciente granulocitopénico febril.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 699 }
      },
      {
        // p699: ninos mayores de 5 anos, IM o IV, 2 a 2.5 mg/kg/dosis cada 8 h.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 2, max: 2.5, por: 'dosis' },
        cada: 8, via: 'iv',
        edadMin: 1826,
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 699 }
      },
      {
        // p699: dosificacion una vez al dia en pacientes con funcion renal normal, 5 a
        // 7.5 mg/kg/dosis cada 24 h.
        indicaciones: ['infeccion-bacteriana-grave'],
        mgkg: { min: 5, max: 7.5, por: 'dosis' },
        cada: 24, via: 'iv',
        edadMin: 28,
        nota: 'Esquema de una sola dosis al día, solo con función renal normal. Es el que el manual pone junto a las dos líneas cada 8 horas, no en lugar de ellas.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 699 }
      },
      {
        // p699: profilaxia de endocarditis en paciente de riesgo alto, 1.5 mg/kg, maximo 120 mg,
        // 30 min antes del procedimiento, junto a ampicilina o a vancomicina en el alergico.
        indicaciones: ['profilaxis-endocarditis'],
        mgkg: { valor: 1.5, por: 'dosis' },
        unica: true, via: 'iv',
        maxDosis: 120,
        nota: 'Dosis única 30 minutos antes del procedimiento, siempre acompañando a ampicilina, o a vancomicina en el alérgico a penicilina. Nunca sola.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 699 }
      }
    ],
    mecanismo: 'Se une a la subunidad ribosómica 30S e inhibe la síntesis de proteínas bacterianas.',
    adversos: ['Nefrotoxicidad', 'Ototoxicidad, que puede ser irreversible y afectar al equilibrio y a la audición'],
    precauciones: [
      'La dosis se calcula sobre una estimación del peso corporal ideal, no sobre el peso real, y eso importa en el niño con obesidad.',
      'Tiene margen terapéutico estrecho: el ajuste se hace con concentraciones séricas y función renal, no solo con la tabla.'
    ],
    ajusteRenal: 'En hemodiálisis, 1.25 a 1.75 mg/kg por dosis después de la sesión. Con función renal alterada, el ajuste se guía por concentraciones séricas.',
    noTriturar: false
  },

  /* ============ Corticoides sistémicos ============ */
  {
    id: 'dexametasona',
    grupo: 'corticoides',
    farmaco: 'Dexametasona',
    alias: ['Decadron', 'corticoide', 'dexa'],
    resumen: 'Corticoide potente y de acción prolongada: crisis asmática en dosis única.',
    presentaciones: [
      { id: 'amp-4',   etiqueta: 'ampolla 4 mg/mL', mg: 4, mL: 1 },
      { id: 'amp-8',   etiqueta: 'ampolla 8 mg/2 mL (4 mg/mL)', mg: 4, mL: 1 },
      { id: 'elix-05', etiqueta: 'elíxir 0.5 mg/5 mL', mg: 0.5, mL: 5 },
      { id: 'tab-4',   etiqueta: 'tableta 4 mg', mg: 4, mL: null }
    ],
    dosis: [
      {
        // p433: exacerbacion de asma, oral, IM o IV, 0.6 mg/kg una sola vez, dosis maxima 16 mg
        // (el manual lo atribuye a Hegenbarth, 2008).
        indicaciones: ['crisis-asmatica'],
        mgkg: { valor: 0.6, por: 'dosis' },
        unica: true, via: 'oral',
        maxDosis: 16,
        nota: 'Una sola dosis, que puede darse por vía oral, intramuscular o intravenosa con la misma cifra. El manual la atribuye a Hegenbarth, 2008.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 433 }
      },
      {
        // p433: meningitis bacteriana por H. influenzae tipo b, lactantes y ninos mayores de 6
        // semanas, IV, 0.15 mg/kg/dosis cada 6 h los cuatro primeros dias, empezando con la
        // primera dosis de antibiotico (el manual lo atribuye a Tunkel, 2004).
        indicaciones: ['meningitis-bacteriana'],
        mgkg: { valor: 0.15, por: 'dosis' },
        cada: 6, via: 'iv',
        edadMin: 42,
        duracion: 'los 4 primeros días del antibiótico',
        nota: 'Se empieza con la primera dosis de antibiótico. El manual, citando a Tunkel de 2004, señala que si los antibióticos ya se administraron no se ha demostrado que la dexametasona mejore el desenlace, y entonces no se recomienda; y que en la meningitis neumocócica los datos no muestran un beneficio claro, así que hay que valorar riesgos y beneficios antes de usarla.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 433 }
      },
      {
        // p433: edema de vias respiratorias y extubacion, lactantes y ninos, oral, IM o IV,
        // 0.5 a 2 mg/kg/dia divididos cada 6 h, empezando 24 h antes de la extubacion y
        // continuando cuatro a seis dosis despues.
        indicaciones: ['edema-via-aerea-extubacion'],
        mgkg: { min: 0.5, max: 2, por: 'dia' },
        cada: 6, via: 'iv',
        edadMin: 28,
        nota: 'Se empieza 24 horas antes de la extubación y se continúa con cuatro a seis dosis después.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 433 }
      },
      {
        // p433: dosificacion neonatal, edema de via aerea o extubacion, IV, rango de 0.25 a
        // 0.5 mg/kg/dosis por una a tres dosis, dosis maxima 1.5 mg/kg/dia. El manual advierte
        // que los datos son limitados y los esquemas publicados variables.
        indicaciones: ['edema-via-aerea-extubacion'],
        mgkg: { min: 0.25, max: 0.5, por: 'dosis' },
        cada: 8, via: 'iv',
        edadMax: 28,
        duracion: 'de 1 a 3 dosis',
        nota: 'Esquema neonatal, de una a tres dosis, la última alrededor de una hora antes de la extubación programada. El manual advierte que se dispone de datos limitados y que los esquemas publicados son variables.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 433 }
      }
    ],
    mecanismo: 'Corticoide sintético de acción prolongada: reduce la inflamación y la permeabilidad capilar, y no tiene efecto mineralocorticoide relevante.',
    adversos: ['Hiperglucemia', 'Hipertensión arterial', 'Cambios de conducta y del sueño', 'Supresión del eje con el uso prolongado'],
    precauciones: ['La dosis única de la crisis asmática no requiere descenso gradual; los esquemas prolongados sí.'],
    administracion: 'La forma inyectable puede administrarse por vía intravenosa o intramuscular. Para la vía oral puede usarse la misma solución inyectable cuando no hay elíxir, según el protocolo del servicio.',
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
      { id: 'neb-1', etiqueta: 'solución para nebulizar 1 mg/mL (al 0.1%)', mg: 1, mL: 1 }
    ],
    dosis: [
      {
        // p86: exacerbacion de asma aguda, nebulizacion, ninos: 0.15 mg/kg por dosis, con dosis
        // minima de 2.5 mg, cada 20 min por tres dosis. El manual atribuye el esquema al NAEPP
        // de 2007.
        indicaciones: ['crisis-asmatica'],
        mgkg: { valor: 0.15, por: 'dosis' },
        unica: true, via: 'nebulizada',
        edadMin: 28,
        duracion: '3 dosis en la primera hora',
        nota: 'Cada 20 minutos por tres dosis. La dosis mínima es de 2.5 mg: por debajo de unos 17 kg el cálculo por peso da menos que eso, y se administran los 2.5 mg. El manual atribuye el esquema al NAEPP de 2007.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 86 }
      },
      {
        // p86: tras las tres primeras dosis, 0.15 a 0.3 mg/kg por dosis sin exceder 10 mg, cada
        // 1 a 4 h segun se requiera.
        indicaciones: ['crisis-asmatica'],
        mgkg: { min: 0.15, max: 0.3, por: 'dosis' },
        cada: 4, via: 'nebulizada',
        maxDosis: 10,
        edadMin: 28,
        nota: 'Mantenimiento tras las tres primeras dosis: cada 1 a 4 horas según se requiera. La misma página recoge la nebulización continua a 0.5 mg/kg/hora para la crisis grave.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 86 }
      },
      {
        // p86, dosificacion neonatal, nebulizacion: dosis usual informada de 1.25 a 2.5 mg por
        // dosis (el manual lo atribuye a Ballard, 2002). No es una dosis por peso.
        indicaciones: ['crisis-asmatica'],
        fija: { min: 1.25, max: 2.5 },
        cada: 8, via: 'nebulizada',
        edadMax: 28,
        nota: 'Dosis neonatal informada, no calculada por peso. El manual la atribuye a Ballard, 2002, y advierte que en el recién nacido el papel del broncodilatador no es el mismo que en el asma del niño mayor.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 86 }
      }
    ],
    mecanismo: 'Agonista selectivo de los receptores beta2: relaja el músculo liso bronquial.',
    adversos: ['Taquicardia', 'Temblor', 'Hipopotasemia con dosis repetidas', 'Agitación'],
    precauciones: ['En la bronquiolitis del lactante no tiene el mismo papel que en el asma, y el manual no recoge esa indicación.'],
    administracion: 'Para nebulizar, diluir la dosis en solución salina hasta un volumen de 3 a 4 mL, según el protocolo del servicio.',
    noTriturar: false
  },

  /* ============ Fármacos de urgencia ============ */
  {
    id: 'adrenalina',
    grupo: 'urgencias',
    farmaco: 'Adrenalina',
    alias: ['epinefrina', 'epi', 'Adrenalin'],
    resumen: 'El tratamiento de la anafilaxia: intramuscular, y cuanto antes.',
    presentaciones: [
      { id: 'amp-1000', etiqueta: 'ampolla 1 mg/mL (1:1000)', mg: 1, mL: 1 },
      { id: 'jer-10000', etiqueta: 'jeringa precargada 0.1 mg/mL (1:10 000)', mg: 0.1, mL: 1 }
    ],
    dosis: [
      {
        // p79: reacciones de hipersensibilidad, IM o SC, 0.01 mg/kg, que con la solucion 1:1000
        // son 0.01 mL/kg; no exceder 0.5 mg cada 20 min.
        indicaciones: ['anafilaxia'],
        mgkg: { valor: 0.01, por: 'dosis' },
        unica: true, via: 'im',
        maxDosis: 0.5,
        nota: 'Con la ampolla de 1 mg/mL (1:1000), 0.01 mg/kg equivale a 0.01 mL/kg. Puede repetirse cada 20 minutos sin pasar de 0.5 mg por dosis. La vía es la intramuscular, en la cara anterolateral del muslo.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 79 }
      },
      {
        // p79: alternativa por tramos de peso, IM o SC: 0.15 mg entre 15 y 30 kg, 0.3 mg por
        // encima de 30 kg. Es la dosis de los autoinyectores, fija y no por peso.
        indicaciones: ['anafilaxia'],
        fija: { valor: 0.15 },
        unica: true, via: 'im',
        pesoMin: 15, pesoMax: 30,
        nota: 'Alternativa por tramos de peso, que es la de los autoinyectores: 0.15 mg entre 15 y 30 kg, y 0.3 mg por encima de 30 kg. El manual recoge que la OMS recomienda disponer de una dosis para administrar cada 10 a 20 minutos durante el traslado a urgencias.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 79 }
      },
      {
        // p79: bradicardia, IV, 0.01 mg/kg, que con la solucion 1:10 000 son 0.1 mL/kg; dosis
        // maxima 1 mg o 10 mL; puede repetirse cada 3 a 5 min.
        //
        // OJO: en la linea IV de hipersensibilidad, la misma pagina dice "0.01 mg/kg
        // (0.01 mL/kg/dosis de solucion 1:10 000)", y las dos cifras no concuerdan: con
        // 1:10 000, que es 0.1 mg/mL, 0.01 mg/kg son 0.1 mL/kg, como dice correctamente esta
        // linea de bradicardia. Esa linea IV de hipersensibilidad NO se recoge en este archivo
        // por esa discordancia interna: una cifra que no cuadra con su propia equivalencia no se
        // copia, se deja fuera y se dice por que.
        indicaciones: ['bradicardia-reanimacion'],
        mgkg: { valor: 0.01, por: 'dosis' },
        unica: true, via: 'iv',
        maxDosis: 1,
        nota: 'Con la solución 1:10 000, que es 0.1 mg/mL, 0.01 mg/kg equivale a 0.1 mL/kg. Puede repetirse cada 3 a 5 minutos. La secuencia de reanimación no se sigue desde una tabla de dosis.',
        evidencia: 'manual', fuente: { ref: 'TAKETOMO', pagina: 79 }
      }
    ],
    mecanismo: 'Agonista alfa y beta adrenérgico: vasoconstricción, broncodilatación y aumento de la contractilidad y la frecuencia cardíacas.',
    adversos: ['Taquicardia', 'Palidez y temblor', 'Hipertensión arterial', 'Arritmias con dosis altas o por vía intravenosa'],
    precauciones: [
      'Las dos concentraciones se parecen y no son intercambiables: 1:1000 es 1 mg/mL y se usa por vía intramuscular; 1:10 000 es 0.1 mg/mL y se usa por vía intravenosa. Confundirlas es un error de factor diez.',
      'En la anafilaxia no hay contraindicación que justifique retrasarla.'
    ],
    noTriturar: false
  }
];

export default { FUENTES, EVIDENCIA, grupos, areas, indicaciones, farmacos };
