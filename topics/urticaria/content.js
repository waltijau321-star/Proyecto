// topics/urticaria/content.js - Modulo 74: Urticaria y angioedema.
// Basado en la guia internacional de urticaria (Zuberbier T, et al. Allergy 2026;81(8):2582-2632,
// doi:10.1111/all.70210), iniciativa GA2LEN/UCARE con 210 delegados de 59 paises.
// Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'urticaria',
  titulo: 'Urticaria y angioedema',
  subtitulo: 'Módulo 74 &middot; Dermatología',
  accent: '#b05a2e',
  accentDim: '#c4764c'
};

export const definicionText = `<p style="margin:0 0 14px;">La urticaria es una enfermedad <strong>mediada por el mastocito</strong> que se define por la aparición rápida de <strong>habones, angioedema o ambos</strong>. El habón tiene tres rasgos que hay que comprobar siempre: es una elevación central de tamaño variable rodeada de eritema reflejo, <strong>pica</strong> (a veces quema) y, sobre todo, es <strong>fugaz</strong>: la piel vuelve a su aspecto normal en menos de 24 horas. El angioedema es más profundo, afecta a dermis y tejido subcutáneo o a las mucosas, duele más de lo que pica y tarda más en resolverse, hasta 72 horas.</p>
<p style="margin:0 0 14px;">Para el internista hay tres ideas que ordenan el tema. La primera es que <strong>el reloj clasifica</strong>: menos de seis semanas es urticaria aguda y seis semanas o más es crónica, y esa frontera cambia por completo el estudio y el pronóstico. La segunda es que <strong>el estudio de la urticaria crónica es muy corto</strong>: hemograma con fórmula y velocidad de sedimentación o proteína C reactiva, y poco más; la bateria amplia de pruebas que se pide por costumbre no encuentra nada y retrasa el tratamiento. La tercera es que <strong>hay un algoritmo y conviene respetarlo</strong>: antihistamínico de segunda generación a dosis estándar, subir hasta cuadruplicar la dosis, y después omalizumab.</p>
<p style="margin:0 0 14px;">Y una advertencia que vale por todo el tema: si el habón <strong>dura más de 24 horas</strong> en el mismo sitio, si <strong>duele</strong> más que pica, o si al desaparecer <strong>deja púrpura o pigmentación</strong>, eso ya no es una urticaria común y hay que biopsiar buscando vasculitis urticarial.</p>`;

export const bibliografia = [
  'Zuberbier T, Abdul Latiff AH, Bernstein JA, et al. The International Guideline for the Definition, Classification, Diagnosis and Management of Urticaria. Allergy. 2026;81(8):2582-2632. doi:10.1111/all.70210.',
  'Maurer M, Magerl M, Betschel S, et al. The international WAO/EAACI guideline for the management of hereditary angioedema - The 2021 revision and update. World Allergy Organ J. 2022;15(3):100627. doi:10.1016/j.waojou.2022.100627.',
  'Betschel S, Binkley K, Borici-Mazi R, et al. The International/Canadian hereditary angioedema guideline. Allergy Asthma Clin Immunol. 2026;22(1). doi:10.1186/s13223-025-00999-8.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'El habón típico',
      tituloB: 'Datos que dicen que NO es urticaria común',
      compensada: 'Elevación central de tamaño variable, casi siempre rodeada de un eritema reflejo, que PICA o quema, y que es FUGAZ: la piel vuelve a su aspecto normal en menos de 24 horas. Las lesiones migran, de modo que las de hoy no están donde estaban las de ayer. El angioedema acompaña en muchos casos: es más profundo, afecta párpados, labios, manos, pies o genitales, y a veces mucosa oral; molesta más por tensión o dolor que por picor, y tarda hasta 72 horas en irse. Pedir al paciente que FOTOGRAFIE las lesiones resuelve muchas consultas, porque casi nunca llega con ellas puestas.',
      descompensada: 'Banderas que sacan el cuadro de la urticaria común: habón que dura MÁS DE 24 HORAS en el mismo sitio, que DUELE más de lo que pica, o que al desaparecer deja PÚRPURA o pigmentación residual, que apuntan a vasculitis urticarial y obligan a biopsiar. Fiebre, artralgias o elevación mantenida de reactantes, que orientan a un síndrome autoinflamatorio. Angioedema SIN habones y sin respuesta a antihistamínicos, que obliga a pensar en angioedema por bradicinina (hereditario o por inhibidores de la enzima convertidora). Y compromiso respiratorio, digestivo o hipotensión, que ya no es urticaria sino ANAFILAXIA y se trata con adrenalina intramuscular.'
    },
    laboratorio: [
      { prueba: 'Urticaria AGUDA: ninguna prueba de rutina', utilidad: 'La urticaria aguda no necesita estudio. Se busca el desencadenante por la historia (infección, fármaco, alimento) y poco más. Pedir analítica y bateria de alergia a todo paciente con habones de una semana es el error más frecuente y más caro del tema.' },
      { prueba: 'Hemograma con fórmula', utilidad: 'Es una de las DOS pruebas de rutina en la urticaria crónica. Busca eosinofilia, citopenias y datos que sugieran otra enfermedad, sobre todo infecciosa.' },
      { prueba: 'Velocidad de sedimentación o proteína C reactiva', utilidad: 'La otra prueba de rutina. Su elevación mantenida es una bandera: apunta a vasculitis urticarial, a un síndrome autoinflamatorio o a una infección subyacente, y ninguna de esas cosas se trata como una urticaria.' },
      { prueba: 'Inmunoglobulina E total y anticuerpos antitiroperoxidasa', utilidad: 'No sirven para diagnosticar. Se asocian a la probabilidad de RESPUESTA a omalizumab, pero la guía advierte de que su rendimiento diagnóstico y su valor predictivo son limitados. Se piden cuando la respuesta va a cambiar la decisión, no de rutina.' },
      { prueba: 'Triptasa sérica', utilidad: 'Ante sospecha de mastocitosis o de anafilaxia. En la urticaria crónica común no aporta.' },
      { prueba: 'C4 y C1 inhibidor', utilidad: 'Solo si hay ANGIOEDEMA SIN habones que no responde a antihistamínicos. Un C4 bajo orienta a angioedema hereditario, que se trata de forma completamente distinta.' },
      { prueba: 'Pruebas dirigidas por la historia', utilidad: 'Serología de infección concreta, función tiroidea o estudio de parásitos SOLO si algo en la anamnesis lo sugiere. La guía insiste en que el estudio básico es corto y que ampliarlo sin motivo no mejora el resultado.' },
      { prueba: 'Biopsia cutánea', utilidad: 'Cuando hay banderas rojas: habón de más de 24 horas, doloroso o con púrpura residual. Busca vasculitis leucocitoclástica, que cambia el diagnóstico y el tratamiento.' }
    ],
    no_invasivos: [
      { metodo: 'UAS7 (calculadora disponible)', interpretacion: 'Diario de siete días en el que el paciente punt&uacute;a habones y picor de 0 a 3 cada dia. Mide ACTIVIDAD, es decir, cuanta enfermedad hay ahora.', cutoff: '0 a 6 bien controlada; 28 a 42 grave' },
      { metodo: 'Test de control de la urticaria (calculadora disponible)', interpretacion: 'Cuatro preguntas sobre las últimas cuatro semanas. Mide CONTROL, es decir, si el tratamiento esta funcionando.', cutoff: '12 o más: controlada' },
      { metodo: 'Escalón terapéutico (calculadora disponible)', interpretacion: 'Cruza el tratamiento actual con el grado de control y devuelve el siguiente paso del algoritmo.', cutoff: 'No saltarse escalones y no pasar de cuadruplicar la dosis' },
      { metodo: 'Banderas rojas (calculadora disponible)', interpretacion: 'Comprueba los datos que indican que no se trata de una urticaria común y que obligan a estudiar otra cosa.', cutoff: 'Una sola bandera ya cambia el plan' },
      { metodo: 'Pruebas de provocación en las inducibles', interpretacion: 'Cubito de hielo para la urticaria por frío, dermografometro para el dermografismo, ejercicio o baño caliente para la colinérgica, y luz de longitud de onda conocida para la solar.', cutoff: 'Confirman el desencadenante y permiten medir el umbral' },
      { metodo: 'Fotografia de las lesiones', interpretacion: 'La herramienta más rentable y la más barata. El paciente rara vez llega con habones, y una foto evita semanas de dudas sobre si lo que tuvo eran habones o no.', cutoff: 'Comprobar la fugacidad: si sale en la foto y sigue ahi al dia siguiente, sospechar' }
    ],
    imagen: [
      { modalidad: 'No se necesita imagen', hallazgos: 'La urticaria es un diagnóstico clínico. No hay ninguna prueba de imagen en su estudio de rutina.' },
      { modalidad: 'Ecografía abdominal', hallazgos: 'Solo si se sospecha una enfermedad de base que la historia haya sugerido, o ante dolor abdominal recurrente en el angioedema hereditario, donde el edema de la pared intestinal puede simular un abdomen agudo.' },
      { modalidad: 'Radiografía o tomografía', hallazgos: 'Reservadas a la búsqueda de un foco infeccioso o neoplásico cuando hay datos que lo justifiquen, no como cribado.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Primero por el <strong>reloj</strong>: menos de seis semanas es AGUDA y seis semanas o más es CRÓNICA. Después, la crónica se divide en <strong>espontánea</strong> (sin desencadenante identificable) e <strong>inducible</strong> (siempre aparece con el mismo estímulo: frío, presión, rascado, calor, sol, agua, vibración o ejercicio). Y por último se mide, que es lo que casi nunca se hace: el <strong>UAS7</strong> dice cuanta enfermedad hay y el <strong>test de control</strong> dice si el tratamiento funciona. Son cosas distintas y las dos hacen falta.`,
    escalas: [
      { nombre: 'UAS7 (calculadora disponible)', componentes: 'Cada dia, durante siete días: número de habones (0 ninguno, 1 menos de 20, 2 de 20 a 50, 3 más de 50) e intensidad del picor (0 nada, 1 leve, 2 moderado, 3 intenso).', formula: 'Suma de los dos apartados cada dia, sumados los siete días. Rango 0 a 42.', interpretacion: '0 libre de enfermedad; 1 a 6 bien controlada; 7 a 15 leve; 16 a 27 moderada; 28 a 42 grave. Su limitación importa: mide habones y picor, de modo que un paciente con ANGIOEDEMA predominante puede tener un UAS7 engañosamente bajo.' },
      { nombre: 'Test de control de la urticaria (calculadora disponible)', componentes: 'Cuatro preguntas sobre las últimas cuatro semanas: síntomas físicos, calidad de vida, insuficiencia del tratamiento y control global.', formula: 'Cada pregunta de 0 a 4. Rango 0 a 16.', interpretacion: '12 o más indica enfermedad CONTROLADA; por debajo de 12, control insuficiente y hay que subir un escalón. Es retrospectivo y no necesita diario, lo que lo hace cómodo para la consulta.' },
      { nombre: 'Escala de actividad del angioedema', componentes: 'Diario de episodios de angioedema, su duración y su repercusión funcional.', formula: 'Puntuación diaria acumulada.', interpretacion: 'Existe porque el UAS7 no mide el angioedema. En el paciente cuyo problema principal es el angioedema, usar solo el UAS7 lleva a infravalorar la enfermedad y a no escalar el tratamiento.' },
      { nombre: 'Clasificación por duración', componentes: 'Tiempo transcurrido desde el primer brote.', formula: 'Menos de 6 semanas o 6 semanas o más.', interpretacion: 'Es la decisión que más cambia la conducta. La aguda no se estudia y suele resolverse; la crónica se estudia (poco) y se trata de forma escalonada y prolongada.' },
      { nombre: 'Espontánea frente a inducible', componentes: 'Presencia o ausencia de un desencadenante físico reproducible.', formula: 'Historia dirigida y prueba de provocación.', interpretacion: 'En la inducible el desencadenante es SIEMPRE el mismo y reproducible, lo que permite confirmarlo en la consulta y medir el umbral. Pueden coexistir las dos formas en el mismo paciente.' },
      { nombre: 'Habón frente a angioedema', componentes: 'Profundidad de la lesión, síntoma predominante y duración.', formula: 'Valoración clínica.', interpretacion: 'El habón es superficial, pica y dura menos de 24 horas. El angioedema es profundo, duele o tensa y dura hasta 72 horas. El angioedema SIN habones que no responde a antihistamínicos obliga a descartar el mecanismo por bradicinina.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Urticaria aguda: reconocerla y no sobreestudiarla',
      color: '#b05a2e',
      definicion: 'Habones, angioedema o ambos de menos de seis semanas de evolución. Es la forma más frecuente y la que más pruebas innecesarias genera.',
      fisiopatologia: 'El mastocito cutáneo se degranula y libera histamina y otros mediadores, que producen vasodilatación, aumento de la permeabilidad capilar (el habón) y estimulación de terminaciones nerviosas (el picor). El desencadenante más frecuente en el adulto es una INFECCIÓN, normalmente virica de via respiratoria alta; después los fármacos. La alergia alimentaria verdadera es una causa mucho menos frecuente de lo que el paciente y el médico suponen.',
      epidemiologia: 'La prevalencia a lo largo de la vida de la urticaria aguda se estima en torno al 20%, es decir, uno de cada cinco la tendra alguna vez. La mayoría se resuelve en días o pocas semanas.',
      factores_riesgo: ['Infección virica reciente de via respiratoria alta', 'Antibióticos, sobre todo betalactámicos', 'Antiinflamatorios no esteroideos', 'Contrastes yodados', 'Picaduras de himenopteros', 'Alimentos, con menos frecuencia de la que se cree', 'Atopia previa'],
      clinica: 'Habones fugaces y migratorios que pican, con o sin angioedema. El paciente suele identificar un desencadenante en los días previos. Sin fiebre alta, sin artralgias y sin afectación del estado general salvo por el propio picor.',
      criterios_dx: 'CLÍNICO, por la historia y la exploración. Menos de seis semanas de evolución. No hace falta ninguna prueba de rutina.',
      laboratorio: 'Ninguno de rutina. Solo lo que la historia sugiera de forma concreta.',
      imagen: 'No se necesita.',
      complementarios: 'Fotografia de las lesiones si el paciente acude sin ellas. Revisión de la medicación de las dos semanas previas.',
      dx_diferencial: 'Anafilaxia (que añade compromiso respiratorio, digestivo o hipotensión), exantema virico, exantema por fármacos, eritema multiforme, picaduras y dermatitis de contacto aguda.',
      tx_medico: 'Antihistamínico de SEGUNDA generación a dosis estándar durante unas semanas, retirada del desencadenante si se identifica, y explicación de que suele resolverse. Evitar antiinflamatorios no esteroideos mientras dure el brote, porque agravan la urticaria por un mecanismo distinto del alérgico.',
      tx_farmacologico: 'Bilastina, cetirizina, desloratadina, ebastina, fexofenadina, levocetirizina, loratadina, mizolastina o rupatadina. Un ciclo CORTO de corticoide oral puede plantearse en un brote intenso, pero no es parte del tratamiento de fondo ni se debe prolongar. Los antihistamínicos de PRIMERA generación se desaconsejan.',
      tx_intervencionista: 'No aplica. Si hay anafilaxia, adrenalina intramuscular en el muslo, que es otro cuadro y otro tema.',
      criterios_uci: 'Solo si evoluciona a anafilaxia con compromiso de via aérea o inestabilidad hemodinámica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir ingreso. Si el paciente esta ingresado, revisar la medicación como primera sospecha.',
      seguimiento_ambulatorio: 'Reevaluar a las seis semanas: si persiste, ya es crónica y cambia el planteamiento. Explicar las banderas rojas por escrito.',
      pronostico: 'Excelente. La mayoría se resuelve sola. Una minoría pasa a crónica.',
      algoritmo: ['Confirmar que son habones fugaces de menos de 24 horas', 'Descartar anafilaxia: via aérea, digestivo, tensión', 'Buscar desencadenante en la historia, sobre todo infección y fármacos', 'NO pedir bateria de pruebas', 'Antihistamínico de segunda generación a dosis estándar', 'Reevaluar a las seis semanas']
    },
    {
      nombre: 'Urticaria crónica espontánea',
      color: '#8c3a34',
      definicion: 'Habones, angioedema o ambos durante seis semanas o más, sin desencadenante externo identificable que los reproduzca.',
      fisiopatologia: 'El mastocito se activa sin estímulo externo. En una parte importante de los pacientes hay un mecanismo AUTOINMUNITARIO: autoanticuerpos que activan al mastocito directamente (contra el receptor de la inmunoglobulina E) o autoanticuerpos de tipo inmunoglobulina E dirigidos contra autoantigenos. Esa doble via explica por que el omalizumab, que baja la inmunoglobulina E libre y desensibiliza al mastocito, funciona en muchos de ellos, y por que en otros hace falta un inmunosupresor.',
      epidemiologia: 'Mucho menos frecuente que la aguda, pero mucho más incapacitante: dura años, altera el sueño y el rendimiento, y tiene un impacto en la calidad de vida comparable al de una cardiopatía isquémica. Predomina en mujeres de edad media.',
      factores_riesgo: ['Sexo femenino', 'Enfermedad tiroidea autoinmune', 'Otras enfermedades autoinmunes', 'Estrés psicológico, que la agrava aunque no la cause', 'Antiinflamatorios no esteroideos, que agravan hasta un tercio de los casos'],
      clinica: 'Brotes de habones casi diarios, con o sin angioedema, que empeoran por la tarde y por la noche y alteran el sueño. El paciente suele llegar convencido de que es alergia a algo y con una lista larga de alimentos retirados sin beneficio.',
      criterios_dx: 'Habones o angioedema durante seis semanas o más sin desencadenante reproducible. Se apoya en el diario y en la fotografia.',
      laboratorio: 'ESTUDIO CORTO: hemograma con fórmula y velocidad de sedimentación o proteína C reactiva. Nada más de rutina. Inmunoglobulina E total y antitiroperoxidasa solo si van a orientar la respuesta al omalizumab.',
      imagen: 'No se necesita.',
      complementarios: 'UAS7 para medir actividad y test de control para medir control. Diario de síntomas.',
      dx_diferencial: 'Urticaria inducible, vasculitis urticarial, síndromes autoinflamatorios, mastocitosis, penfigoide ampolloso en fase preampollosa y reacción por fármacos.',
      tx_medico: 'Retirar los antiinflamatorios no esteroideos, tratar la comorbilidad que exista y explicar que NO suele ser alergia alimentaria, para evitar dietas restrictivas inútiles. Y explicar también que el tratamiento es sintomático y prolongado, no un ciclo corto.',
      tx_farmacologico: 'Algoritmo: antihistamínico de segunda generación a dosis estándar; si no controla en 2 a 4 semanas, subir la dosis hasta CUADRUPLICARLA (fuera de ficha técnica, y sin pasar de ahi); si sigue sin controlar, añadir omalizumab. La guía señala que subir la dosis es preferible a MEZCLAR distintos antihistamínicos de segunda generación.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica salvo anafilaxia concurrente.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No requiere ingreso.',
      seguimiento_ambulatorio: 'Reevaluar con test de control cada pocas semanas y ajustar el escalón. Intentar bajar cuando lleve meses controlada, porque la enfermedad remite sola con el tiempo en muchos pacientes.',
      pronostico: 'Remite espontáneamente en un plazo de años en la mayoría, aunque una minoría persiste mucho tiempo. El control con tratamiento es alcanzable en casi todos.',
      algoritmo: ['Confirmar seis semanas o más y ausencia de desencadenante', 'Estudio CORTO: hemograma y reactantes', 'Medir con UAS7 y con el test de control', 'Antihistamínico de segunda generación a dosis estándar', 'Sin control en 2 a 4 semanas: subir hasta cuadruplicar', 'Sin control: añadir omalizumab', 'Refractario a todo: valorar ciclosporina']
    },
    {
      nombre: 'Urticarias crónicas inducibles',
      color: '#3d5a73',
      definicion: 'Formas crónicas en las que los habones aparecen SIEMPRE tras el mismo estímulo físico reproducible, lo que permite confirmarlas con una prueba de provocación en la consulta.',
      fisiopatologia: 'El estímulo físico act&uacute;a de forma directa sobre el mastocito o sobre estructuras cutáneas que lo activan. En la urticaria por frío se han implicado crioaglutininas en una minoría de casos. En la colinérgica el estímulo es el aumento de la temperatura corporal y la sudoración, no el calor externo, lo que explica que se dispare con el ejercicio, la ducha caliente o una emocion intensa.',
      epidemiologia: 'El dermografismo sintomático es la más frecuente. La colinérgica predomina en adultos jóvenes. Pueden coexistir con una urticaria crónica espontánea en el mismo paciente, lo que confunde el cuadro.',
      factores_riesgo: ['Exposición laboral o recreativa al frío', 'Ejercicio y ambientes calurosos', 'Presión mantenida por cinturones, tirantes o asientos', 'Exposición solar', 'Contacto con agua, en la rara urticaria acuagenica'],
      clinica: 'Habones limitados a la zona estimulada y con la morfología del estímulo: lineales en el dermografismo, pequeños y numerosos en la colinérgica, en la zona expuesta en la solar y en la de frío. La por presión retardada aparece HORAS después del estímulo y es dolorosa más que pruriginosa.',
      criterios_dx: 'Historia compatible más PRUEBA DE PROVOCACIÓN positiva: cubito de hielo para el frío, dermografometro para el dermografismo, ejercicio o baño caliente para la colinérgica y luz de longitud de onda conocida para la solar.',
      laboratorio: 'El mismo estudio corto que la espontánea si hay duda. En la urticaria por frío se puede buscar crioglobulinas si el cuadro es atípico o grave.',
      imagen: 'No se necesita.',
      complementarios: 'Medir el UMBRAL de desencadenamiento, que permite dar consejos concretos y seguir la respuesta al tratamiento de forma objetiva.',
      dx_diferencial: 'Urticaria crónica espontánea, dermatitis de contacto, eritema por calor y, en la colinérgica, la anafilaxia inducida por ejercicio, que es mucho más grave y obliga a llevar adrenalina.',
      tx_medico: 'Evitar o graduar el estímulo, que en muchos casos es lo que más cambia la vida del paciente. En la urticaria por frío hay que advertir del riesgo de un baño en agua fría: la exposición masiva y simultánea de toda la superficie corporal puede producir una reacción sistémica grave.',
      tx_farmacologico: 'El mismo algoritmo que la espontánea: antihistamínico de segunda generación, subida de dosis hasta cuadruplicar y omalizumab si no se controla.',
      tx_intervencionista: 'La inducción de tolerancia se ha usado en casos seleccionados de urticaria por frío y solar, con resultados variables y en centros con experiencia.',
      criterios_uci: 'Reacción sistémica grave tras exposición masiva al frío, o anafilaxia inducida por ejercicio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Reevaluar el umbral y la necesidad de tratamiento continuo frente a tratamiento solo antes de la exposición prevista.',
      pronostico: 'Curso prolongado pero manejable. La urticaria por frío y la solar son las que más limitan la vida diaria.',
      algoritmo: ['Sospechar por la relación constante con un estímulo', 'Confirmar con prueba de provocación', 'Medir el umbral', 'Consejo de evitación realista', 'Mismo algoritmo farmacológico que la espontánea', 'Advertir del riesgo sistémico en la urticaria por frío']
    },
    {
      nombre: 'Angioedema: con habones y sin habones',
      color: '#5a4a8c',
      definicion: 'Edema súbito, profundo y bien delimitado de dermis profunda, tejido subcutáneo o mucosas. La pregunta que lo ordena todo es si se acompaña de habones o no.',
      fisiopatologia: 'Hay dos mecanismos y distinguirlos cambia el tratamiento por completo. El angioedema HISTAMINERGICO acompaña a la urticaria, responde a antihistamínicos y adrenalina, y suele cursar con habones. El angioedema por BRADICININA (hereditario por déficit o disfunción del inhibidor de C1, o adquirido por inhibidores de la enzima convertidora de angiotensina) NO responde a antihistamínicos, corticoides ni adrenalina, y necesita fármacos dirigidos contra la via de la bradicinina.',
      epidemiologia: 'El angioedema acompaña a los habones en una proporción importante de las urticarias crónicas. El inducido por inhibidores de la enzima convertidora puede aparecer tras años de tratamiento sin incidencias, lo que hace que se pase por alto con frecuencia.',
      factores_riesgo: ['Tratamiento con inhibidores de la enzima convertidora de angiotensina', 'Antecedente familiar de angioedema', 'Antiinflamatorios no esteroideos', 'Traumatismo o cirugía, sobre todo dental, en el hereditario', 'Estrés y cambios hormonales'],
      clinica: 'Tumefacción asimétrica de párpados, labios, lengua, manos, pies o genitales, que TENSA o duele más de lo que pica, y que tarda hasta 72 horas en resolverse. El compromiso de lengua, suelo de boca o laringe es una urgencia de via aérea. En el hereditario son frecuentes las crisis de dolor abdominal por edema de la pared intestinal, que simulan un abdomen agudo y llevan a laparotomías innecesarias.',
      criterios_dx: 'Clínico. La clave esta en la anamnesis: presencia o no de habones, respuesta o no a antihistamínicos, medicación actual y antecedentes familiares.',
      laboratorio: 'Si hay angioedema SIN habones que no responde a antihistamínicos: C4 y cuantificación y función del inhibidor de C1. Un C4 bajo es la primera pista del hereditario.',
      imagen: 'Ecografía o tomografía abdominal solo si hay dolor abdominal en el que se sospecha edema de pared intestinal.',
      complementarios: 'Escala de actividad del angioedema, porque el UAS7 no lo mide. Revisión estructurada de la medicación.',
      dx_diferencial: 'Celulitis facial, dermatitis de contacto, síndrome de la vena cava superior, edema por hipoalbuminemia, linfedema y anafilaxia.',
      tx_medico: 'Lo primero es asegurar la VIA AÉREA si hay afectación de lengua o laringe. Después, separar los dos mecanismos: histaminergico o por bradicinina. Y RETIRAR el inhibidor de la enzima convertidora si lo toma, sin reintroducirlo nunca.',
      tx_farmacologico: 'Histaminergico: el mismo algoritmo de la urticaria, y adrenalina intramuscular si hay anafilaxia. Por bradicinina: NO responde a antihistamínicos, corticoides ni adrenalina; se emplean el concentrado de inhibidor de C1, el antagonista del receptor de bradicinina y los inhibidores de calicreina, según disponibilidad.',
      tx_intervencionista: 'Intubación o via aérea quirúrgica si hay compromiso laríngeo. Conviene anticiparse: la via aérea se asegura ANTES de que el edema la haga imposible.',
      criterios_uci: 'Afectación de lengua, suelo de boca o laringe, estridor, disfonia o dificultad para tragar saliva.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Observación prolongada tras un episodio con afectación de via aérea. Revisión de toda la medicación antes del alta.',
      seguimiento_ambulatorio: 'Plan escrito de actuacion. En el hereditario, profilaxis a largo plazo y cobertura antes de procedimientos dentales o cirugía.',
      pronostico: 'Bueno si se identifica el mecanismo. El riesgo vital esta en el episodio laríngeo y en confundir el mecanismo por bradicinina con una alergia.',
      algoritmo: ['Asegurar la via aérea si hay afectación laringea', '¿Hay habones? Si los hay, es via histaminergica', 'Revisar si toma un inhibidor de la enzima convertidora y retirarlo', 'Sin habones y sin respuesta a antihistamínico: pedir C4', 'Tratar según el mecanismo, no según el aspecto', 'Plan escrito y profilaxis si es hereditario']
    },
    {
      nombre: 'Lo que parece urticaria y no lo es',
      color: '#3f6b52',
      definicion: 'Entidades que producen lesiones habonosas o edema y que se confunden con urticaria, pero que tienen otro pronóstico y otro tratamiento.',
      fisiopatologia: 'En la vasculitis urticarial el mecanismo no es la degranulación del mastocito sino el depósito de inmunocomplejos en la pared vascular, con vasculitis leucocitoclástica: por eso la lesión dura más, duele, y deja púrpura al resolverse. En los síndromes autoinflamatorios hay activación del inflamasoma con liberación de interleucina 1, lo que explica la fiebre y la elevación mantenida de reactantes. En el penfigoide preampolloso el prurito y las placas urticariformes preceden en semanas o meses a las ampollas.',
      epidemiologia: 'Todas son poco frecuentes comparadas con la urticaria común, y precisamente por eso se diagnostican tarde: el paciente lleva meses tratado como urticaria resistente.',
      factores_riesgo: ['Enfermedad autoinmune conocida, para la vasculitis urticarial', 'Edad avanzada y prurito persistente, para el penfigoide', 'Historia familiar y episodios desde la infancia, para los autoinflamatorios', 'Fiebre recurrente con artralgias'],
      clinica: 'La pregunta que más rinde es sobre el HABÓN INDIVIDUAL, no sobre el brote: cuanto dura una lesión concreta, si pica o duele, y que deja al irse. Si dura más de 24 horas, duele y deja púrpura, hay que biopsiar. Si hay fiebre, artralgias y reactantes altos de forma mantenida, hay que pensar en autoinflamatorio. Si hay prurito intenso en un anciano con placas urticariformes persistentes, hay que pensar en penfigoide.',
      criterios_dx: 'La biopsia decide en la vasculitis urticarial (vasculitis leucocitoclástica) y en el penfigoide (inmunofluorescencia directa con depósito lineal en la unión dermoepidérmica). En los autoinflamatorios, el estudio genético.',
      laboratorio: 'Reactantes de fase aguda, complemento (un C3 y C4 bajos apuntan a vasculitis urticarial hipocomplementemica), anticuerpos antinucleares e inmunofluorescencia si se sospecha penfigoide.',
      imagen: 'Según la enfermedad de base que se sospeche.',
      complementarios: 'Biopsia CON inmunofluorescencia directa cuando la duda sea penfigoide, porque la histología sola puede no bastar en la fase preampollosa.',
      dx_diferencial: 'Urticaria crónica espontánea refractaria, que es justamente la etiqueta equivocada que suelen llevar estos pacientes.',
      tx_medico: 'Cada entidad tiene su tratamiento: inmunosupresión en la vasculitis urticarial, bloqueo de interleucina 1 en los autoinflamatorios, y el tratamiento del penfigoide en su caso. Seguir subiendo antihistamínicos en estos pacientes no funciona y retrasa el diagnóstico.',
      tx_farmacologico: 'No corresponde al algoritmo de la urticaria. El error típico es escalar hasta omalizumab en un paciente que en realidad tiene otra cosa.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Según la enfermedad de base.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Según la enfermedad de base.',
      seguimiento_ambulatorio: 'Derivación al especialista que corresponda una vez identificada la entidad.',
      pronostico: 'Depende por completo de la enfermedad de base. Lo que empeora el pronóstico de todas ellas es el retraso diagnóstico bajo la etiqueta de urticaria resistente.',
      algoritmo: ['Preguntar cuanto dura UNA lesión concreta', '¿Pica o duele? ¿Deja marca al irse?', 'Buscar fiebre, artralgias y reactantes mantenidos', 'Biopsiar ante cualquier bandera roja', 'Añadir inmunofluorescencia si se sospecha penfigoide', 'No seguir escalando antihistamínicos a ciegas']
    },
    {
      nombre: 'Tratamiento escalonado y control',
      color: '#7a4363',
      definicion: 'Secuencia terapéutica de la guía internacional, cuyo objetivo es el CONTROL COMPLETO de los síntomas con el mínimo tratamiento posible.',
      fisiopatologia: 'Cada escalón act&uacute;a en un punto: el antihistamínico bloquea el receptor H1 de la histamina liberada; subir la dosis aumenta la ocupación del receptor, que es la razón de que funcione escalar en vez de cambiar de molecula; el omalizumab secuestra la inmunoglobulina E libre y reduce la expresión de su receptor en el mastocito, con lo que lo vuelve menos excitable; y la ciclosporina inhibe al linfocito T y de forma indirecta la liberación de mediadores.',
      epidemiologia: 'La mayoría de los pacientes se controla en los dos primeros escalones. El limitante de los escalones superiores es el COSTE: la guía reconoce de forma explícita que omalizumab, dupilumab y remibrutinib tienen restricciones por precio, y la ciclosporina por su perfil de seguridad.',
      factores_riesgo: ['Enfermedad grave por UAS7 desde el inicio', 'Angioedema predominante', 'Inmunoglobulina E total muy baja, que predice peor respuesta a omalizumab', 'Consumo continuado de antiinflamatorios no esteroideos', 'Comorbilidad autoinmune'],
      clinica: 'La decisión de subir escalón no depende de la impresión sino del test de control: por debajo de 12 se sube.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Antes de ciclosporina, función renal y tensión arterial, y vigilancia periódica.',
      imagen: 'No se necesita.',
      complementarios: 'Test de control en cada visita. UAS7 cuando se quiera medir actividad de forma fina.',
      dx_diferencial: 'Ante falta de respuesta a todo el algoritmo, revisar el DIAGNÓSTICO antes de seguir escalando: vasculitis urticarial, autoinflamatorio, penfigoide o mastocitosis.',
      tx_medico: 'Retirar antiinflamatorios no esteroideos, tratar comorbilidad, y explicar que el objetivo es el control completo y que el tratamiento se mantiene mientras la enfermedad este activa.',
      tx_farmacologico: 'Escalón 1: antihistamínico de segunda generación moderno a DOSIS ESTÁNDAR. Escalón 2: subir hasta CUADRUPLICAR esa dosis, que es preferible a mezclar moleculas distintas; por encima de cuatro veces no esta probado y no se recomienda. Escalón 3: añadir omalizumab. Con dupilumab como opción, con la ventaja de que su eficacia no depende de una inmunoglobulina E basal alta, a diferencia del omalizumab. La CICLOSPORINA queda para la enfermedad grave refractaria a todo lo autorizado, fuera de ficha técnica y por sus efectos adversos. Los antihistamínicos de PRIMERA generación se desaconsejan como primera línea por sus efectos adversos, y astemizol y terfenadina no deben usarse.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Con un antihistamínico, si no ha mejorado en una o dos semanas ya no va a mejorar más a esa dosis: hay que subir. Una vez controlada de forma estable, intentar bajar, porque la enfermedad remite sola con el tiempo.',
      pronostico: 'El control completo es alcanzable en la gran mayoría si se respeta el algoritmo y se mide.',
      algoritmo: ['Medir el control antes de decidir', 'Antihistamínico de segunda generación a dosis estándar', 'Sin control en 2 a 4 semanas: subir hasta cuadruplicar', 'Sin control: añadir omalizumab', 'Refractario a lo autorizado: valorar ciclosporina', 'Si nada funciona, revisar el DIAGNÓSTICO', 'Cuando lleve meses controlada, intentar bajar']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La urticaria rara vez ingresa por sí misma. El internista se la encuentra de tres formas: como reacción a un fármaco del propio ingreso, como angioedema con riesgo de via aérea, o como pista de otra enfermedad.',
    parametros: [
      'Ante habones en un paciente ingresado, lo primero es la hoja de medicación: betalactámicos, antiinflamatorios no esteroideos y contrastes yodados encabezan la lista.',
      'Separar urticaria de ANAFILAXIA en cada episodio: via aérea, broncoespasmo, síntomas digestivos e hipotensión. La anafilaxia se trata con adrenalina intramuscular, no con antihistamínico.',
      'Angioedema de lengua o laringe: asegurar la via aérea antes de que el edema la haga imposible, y comprobar si toma un inhibidor de la enzima convertidora.',
      'No prolongar el corticoide sistémico: no es tratamiento de fondo de la urticaria y su retirada puede producir rebote.',
      'Si hay fiebre, artralgias o reactantes altos de forma mantenida, no es una urticaria común: buscar otra cosa.',
      'Antes del alta, dejar por escrito las banderas rojas y el plan de tratamiento, porque el seguimiento de esta enfermedad es ambulatorio y prolongado.'
    ],
    criterios_uci_general: 'Angioedema con compromiso de via aérea, anafilaxia con inestabilidad o reacción sistémica grave tras exposición masiva al frío.',
    criterios_tips_general: 'No aplica en urticaria.',
    criterios_trasplante_general: 'No aplica en urticaria.',
    prevencion: 'Evitar los antiinflamatorios no esteroideos mientras la enfermedad este activa, retirar de forma definitiva el inhibidor de la enzima convertidora en quien ha tenido angioedema, evitar dietas restrictivas sin fundamento, y en la urticaria por frío advertir del riesgo de la inmersion en agua fría.'
  }
};

export const compCites = {
  'Urticaria aguda: reconocerla y no sobreestudiarla': { epidemiologia: [1], tx_farmacologico: [1], criterios_dx: [1], laboratorio: [1] },
  'Urticaria crónica espontánea': { laboratorio: [1], tx_farmacologico: [1], criterios_dx: [1] },
  'Urticarias crónicas inducibles': { criterios_dx: [1], laboratorio: [1], tx_farmacologico: [1] },
  // La cita 1 (guia de urticaria) cubre el angioedema HISTAMINERGICO, el que acompana a los
  // habones. El por BRADICININA es otra enfermedad y necesita sus propias fuentes: la 2 y la 3.
  // Esta complicacion tenia 20 campos de contenido clinico y el compCites VACIO, asi que nada de
  // lo que afirma estaba atribuido, y las dos guias que lo sostienen no estaban ni en la lista.
  'Angioedema: con habones y sin habones': { definicion: [1, 2], fisiopatologia: [1, 2], epidemiologia: [1, 2], factores_riesgo: [2], clinica: [2], criterios_dx: [2], laboratorio: [2], imagen: [2], complementarios: [1, 2], dx_diferencial: [2], tx_medico: [2, 3], tx_farmacologico: [2, 3], tx_intervencionista: [2], criterios_uci: [2], seguimiento_hospitalario: [2], seguimiento_ambulatorio: [2, 3], pronostico: [2], algoritmo: [1, 2] },
  'Lo que parece urticaria y no lo es': { criterios_dx: [1], laboratorio: [1], tx_farmacologico: [1] },
  'Tratamiento escalonado y control': { tx_farmacologico: [1], epidemiologia: [1], laboratorio: [1] }
};

export const estigmasTitulo = 'Los tres rasgos del habón, y lo que los rompe';
export const estigmas = [
  { nombre: 'Elevación central con eritema reflejo', descripcion: 'El habón es una papula o placa edematosa de tamaño variable, rodeada casi siempre de un halo eritematoso. Es el rasgo morfológico.' },
  { nombre: 'Picor, a veces quemazón', descripcion: 'El habón PICA. Si lo que predomina es el dolor o el escozor, hay que dudar del diagnóstico y pensar en vasculitis urticarial.' },
  { nombre: 'Fugacidad de menos de 24 horas', descripcion: 'Es el rasgo que más rinde y el que menos se pregunta. La lesión INDIVIDUAL desaparece en menos de 24 horas sin dejar marca. Hay que preguntar por una lesión concreta, no por el brote.' },
  { nombre: 'Migracion', descripcion: 'Los habones de hoy no están donde estaban los de ayer. Una lesión fija en el mismo sitio durante días no es un habón.' },
  { nombre: 'Dermografismo', descripcion: 'Al rascar la piel con un objeto romo aparece un habón lineal en pocos minutos. Es la prueba de provocación más sencilla y se hace en la propia consulta.' },
  { nombre: 'Púrpura residual', descripcion: 'Si al resolverse la lesión deja púrpura o una mancha pigmentada, NO es una urticaria común: es la señal de vasculitis urticarial y obliga a biopsiar.' }
];

export const biopsiaTitulo = 'Biopsia cutánea: solo ante banderas rojas';
export const biopsia = {
  indicaciones: [
    'Habón individual que dura MÁS de 24 horas en el mismo sitio',
    'Lesión que duele o escuece más de lo que pica',
    'Púrpura o pigmentación residual al resolverse la lesión',
    'Fiebre, artralgias o elevación mantenida de reactantes de fase aguda',
    'Prurito intenso con placas urticariformes persistentes en un paciente mayor, por sospecha de penfigoide'
  ],
  ventajas: [
    'Confirma la vasculitis leucocitoclástica, que cambia el diagnóstico y el tratamiento',
    'Con inmunofluorescencia directa detecta el penfigoide en fase preampollosa',
    'Evita seguir escalando el algoritmo en un paciente que tiene otra enfermedad'
  ],
  limitaciones: [
    'No se necesita en la urticaria común, que es un diagnóstico clínico',
    'Una biopsia de un habón corriente muestra edema dérmico e infiltrado inespecífico y no aporta nada',
    'Conviene biopsiar una lesión de más de 24 horas de evolución, o el resultado puede ser falsamente normal'
  ],
  contraindicaciones: [
    'No hay contraindicación absoluta; se valora la anticoagulación y el riesgo de infección local',
    'Evitar biopsiar una lesión que ya se esta resolviendo, porque pierde los hallazgos',
    'En la cara, elegir otro punto por el resultado estético si hay lesiones en otras zonas'
  ]
};

export const escalaRefs = { 'UAS7 (calculadora disponible)': [1], 'Test de control de la urticaria (calculadora disponible)': [1], 'Escala de actividad del angioedema': [1], 'Clasificación por duración': [1], 'Espontánea frente a inducible': [1], 'Habón frente a angioedema': [1] };

export const escalaCalc = {
  'UAS7 (calculadora disponible)': 'uas7',
  'Test de control de la urticaria (calculadora disponible)': 'uct',
  'Clasificación por duración': 'escalon-urticaria'
};

export const compGroups = [
  { title: 'Por el reloj', items: ['Urticaria aguda: reconocerla y no sobreestudiarla', 'Urticaria crónica espontánea', 'Urticarias crónicas inducibles'] },
  { title: 'Angioedema', items: ['Angioedema: con habones y sin habones'] },
  { title: 'Lo que no es urticaria', items: ['Lo que parece urticaria y no lo es'] },
  { title: 'Tratamiento', items: ['Tratamiento escalonado y control'] }
];

export const complicacionesIntro = 'Las tres primeras fichas siguen el reloj, que es lo que de verdad ordena este tema: la aguda, que no hay que estudiar; la crónica espontánea, cuyo estudio es mucho más corto de lo que se suele pedir; y las inducibles, que se confirman en la consulta con una prueba sencilla. La cuarta es el angioedema, donde una sola pregunta (si hay habones o no) separa dos mecanismos con tratamientos que no se parecen en nada. La quinta reúne lo que se disfraza de urticaria y lleva meses con la etiqueta equivocada. Y la última es el algoritmo, que funciona si se respeta y se mide.';

export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Fichas' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];

export const arbol = {
  root: { title: 'URTICARIA', color: '#b05a2e', target: 'definicion' },
  branches: [
    { title: 'Aguda', sub: 'Menos de 6 semanas &middot; no se estudia', color: '#3f6b52', target: 'complicaciones' },
    { title: 'Cronica', sub: '6 semanas o más', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Espontanea', sub: 'Sin desencadenante &middot; estudio corto', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Inducible', sub: 'Estímulo fijo &middot; prueba de provocación', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'Angioedema', sub: '¿Hay habones?', color: '#5a4a8c', target: 'complicaciones', leaves: [
      { title: 'Con habones', sub: 'Histaminergico &middot; antihistamínico', color: '#5a4a8c', target: 'complicaciones' },
      { title: 'Sin habones', sub: 'Bradicinina &middot; C4 y via propia', color: '#7a4363', target: 'complicaciones' }
    ] }
  ]
};

export const diagCites = { laboratorio: [1], no_invasivos: [1], imagen: [1] };
export const clasificacionCite = [1];
export const seguimientoCite = [1];
export const figurasDefinicion = ['habon-banderas'];
export const figurasClasificacion = ['escalones-urticaria', 'estudio-urticaria'];

export const figuras = {
  'habon-banderas': {
    titulo: 'El habón corriente frente a la bandera roja',
    fuente: 'Guia internacional de urticaria (Zuberbier T, et al. Allergy 2026;81(8):2582-2632).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Pregunta sobre UNA lesión</th><th>Urticaria común</th><th>Sospechar otra cosa</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">¿Cuánto dura?</td><td>Menos de 24 horas</td><td><span class="figure-tag fail">Más de 24 horas</span></td></tr>
            <tr><td class="figure-org">¿Pica o duele?</td><td>Pica, a veces quema</td><td><span class="figure-tag fail">Duele o escuece</span></td></tr>
            <tr><td class="figure-org">¿Qué deja al irse?</td><td>Nada, la piel queda normal</td><td><span class="figure-tag fail">Púrpura o pigmentación</span></td></tr>
            <tr><td class="figure-org">¿Se mueve?</td><td>Si, migra de un dia a otro</td><td><span class="figure-tag dys">Fija en el mismo sitio</span></td></tr>
            <tr><td class="figure-org">¿Hay síntomas generales?</td><td>No, salvo el propio picor</td><td><span class="figure-tag fail">Fiebre, artralgias, reactantes altos</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La pregunta tiene que ser sobre <strong>una lesión concreta</strong>, no sobre el brote. Un paciente con habones a diario durante meses sigue teniendo una urticaria común si cada habón individual dura menos de un dia. Preguntar "¿cuánto le dura el brote?" no sirve: hay que preguntar "¿cuánto le dura UN habón, el que le sale aquí?". Ante cualquier bandera, <strong>biopsiar</strong> buscando vasculitis urticarial.</div>`
  },
  'escalones-urticaria': {
    titulo: 'Algoritmo de tratamiento',
    fuente: 'Guia internacional de urticaria (Zuberbier T, et al. Allergy 2026;81(8):2582-2632, doi:10.1111/all.70210).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Escalón</th><th>Que se hace</th><th>Cuando se sube</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">1</td><td>Antihistamínico de <strong>segunda generación</strong> moderno a dosis estándar (bilastina, cetirizina, desloratadina, ebastina, fexofenadina, levocetirizina, loratadina, mizolastina o rupatadina)</td><td>Sin control en 2 a 4 semanas</td></tr>
            <tr><td class="figure-org">2</td><td>Subir la dosis del mismo antihistamínico <strong>hasta cuadruplicarla</strong>. Es preferible a mezclar moleculas distintas</td><td>Sin control en 2 a 4 semanas</td></tr>
            <tr><td class="figure-org">3</td><td>Añadir <strong>omalizumab</strong>. Dupilumab como opción, con eficacia que no depende de una IgE basal alta</td><td>Sin control pese a dosis y tiempo suficientes</td></tr>
            <tr><td class="figure-org">4</td><td><strong>Ciclosporina</strong>, solo en enfermedad grave refractaria a todo lo autorizado</td><td>Último recurso</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Tres cosas que la guía dice y que se incumplen a diario. <strong>Los de primera generación se desaconsejan</strong> como primera línea por sus efectos adversos (se han descrito sobredosis mortales); astemizol y terfenadina no deben usarse. <strong>No pasar de cuadruplicar</strong>: por encima de cuatro veces no se ha probado. Y <strong>con un antihistamínico, si no hay mejoría en una o dos semanas ya no la habra</strong> a esa dosis: esperar más tiempo solo retrasa el escalón siguiente. La ciclosporina es fuera de ficha técnica y se reserva por su perfil de seguridad.</div>`
  },
  'estudio-urticaria': {
    titulo: 'Que pedir y que no pedir',
    fuente: 'Guia internacional de urticaria (Zuberbier T, et al. Allergy 2026;81(8):2582-2632).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Situación</th><th>Estudio</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Urticaria aguda</td><td><strong>Ninguna prueba de rutina.</strong> Historia dirigida buscando infección o fármaco</td></tr>
            <tr><td class="figure-org">Urticaria crónica</td><td><strong>Hemograma con fórmula</strong> y <strong>velocidad de sedimentación o proteína C reactiva.</strong> Nada más de rutina</td></tr>
            <tr><td class="figure-org">Se plantea omalizumab</td><td>IgE total y anticuerpos antitiroperoxidasa, sabiendo que predicen respuesta con exactitud limitada</td></tr>
            <tr><td class="figure-org">Angioedema sin habones que no responde</td><td>C4, y cuantificación y función del inhibidor de C1</td></tr>
            <tr><td class="figure-org">Sospecha de inducible</td><td>Prueba de provocación dirigida y medición del umbral</td></tr>
            <tr><td class="figure-org">Bandera roja</td><td>Biopsia cutánea, con inmunofluorescencia directa si se sospecha penfigoide</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">El estudio básico de la urticaria crónica cabe en <strong>dos líneas de analítica</strong>. La guía insiste en que ampliarlo sin que la historia lo sugiera no mejora el resultado: no encuentra causas ocultas, retrasa el tratamiento, genera hallazgos incidentales y refuerza en el paciente la idea equivocada de que hay una alergia escondida que encontrar. Las pruebas adicionales se eligen <strong>una a una y por la anamnesis</strong>.</div>`
  }
};
