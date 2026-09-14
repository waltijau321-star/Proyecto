// topics/urticaria/content.js - Modulo 74: Urticaria y angioedema.
// Basado en la guia internacional de urticaria (Zuberbier T, et al. Allergy 2026;81(8):2582-2632,
// doi:10.1111/all.70210), iniciativa GA2LEN/UCARE con 210 delegados de 59 paises.
// Texto sin acentos; la enye va como entidad.

export const meta = {
  id: 'urticaria',
  titulo: 'Urticaria y angioedema',
  subtitulo: 'Modulo 74 &middot; Dermatologia',
  accent: '#b05a2e',
  accentDim: '#c4764c'
};

export const definicionText = `<p style="margin:0 0 14px;">La urticaria es una enfermedad <strong>mediada por el mastocito</strong> que se define por la aparicion rapida de <strong>habones, angioedema o ambos</strong>. El habon tiene tres rasgos que hay que comprobar siempre: es una elevacion central de tama&#241;o variable rodeada de eritema reflejo, <strong>pica</strong> (a veces quema) y, sobre todo, es <strong>fugaz</strong>: la piel vuelve a su aspecto normal en menos de 24 horas. El angioedema es mas profundo, afecta a dermis y tejido subcutaneo o a las mucosas, duele mas de lo que pica y tarda mas en resolverse, hasta 72 horas.</p>
<p style="margin:0 0 14px;">Para el internista hay tres ideas que ordenan el tema. La primera es que <strong>el reloj clasifica</strong>: menos de seis semanas es urticaria aguda y seis semanas o mas es cronica, y esa frontera cambia por completo el estudio y el pronostico. La segunda es que <strong>el estudio de la urticaria cronica es muy corto</strong>: hemograma con formula y velocidad de sedimentacion o proteina C reactiva, y poco mas; la bateria amplia de pruebas que se pide por costumbre no encuentra nada y retrasa el tratamiento. La tercera es que <strong>hay un algoritmo y conviene respetarlo</strong>: antihistaminico de segunda generacion a dosis estandar, subir hasta cuadruplicar la dosis, y despues omalizumab.</p>
<p style="margin:0 0 14px;">Y una advertencia que vale por todo el tema: si el habon <strong>dura mas de 24 horas</strong> en el mismo sitio, si <strong>duele</strong> mas que pica, o si al desaparecer <strong>deja purpura o pigmentacion</strong>, eso ya no es una urticaria comun y hay que biopsiar buscando vasculitis urticarial.</p>`;

export const bibliografia = [
  'Zuberbier T, Abdul Latiff AH, Bernstein JA, et al. The International Guideline for the Definition, Classification, Diagnosis and Management of Urticaria. Allergy. 2026;81(8):2582-2632. doi:10.1111/all.70210.',
  'Valenzuela F, Castro Ayarza JR, Kaplan D, et al. Clinical practice guideline for psoriasis management in Latin America. An Bras Dermatol. 2026;101(5):501449. doi:10.1016/j.abd.2026.501449.',
  'Murillo-Casas AD, Zwiener R, Giavina-Bianchi P, et al. Latin American guidelines for the diagnosis and treatment of Stevens-Johnson syndrome and toxic epidermal necrolysis. World Allergy Organ J. 2025;18(4):101046. doi:10.1016/j.waojou.2025.101046.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'El habon tipico',
      tituloB: 'Datos que dicen que NO es urticaria comun',
      compensada: 'Elevacion central de tama&#241;o variable, casi siempre rodeada de un eritema reflejo, que PICA o quema, y que es FUGAZ: la piel vuelve a su aspecto normal en menos de 24 horas. Las lesiones migran, de modo que las de hoy no estan donde estaban las de ayer. El angioedema acompa&#241;a en muchos casos: es mas profundo, afecta parpados, labios, manos, pies o genitales, y a veces mucosa oral; molesta mas por tension o dolor que por picor, y tarda hasta 72 horas en irse. Pedir al paciente que FOTOGRAFIE las lesiones resuelve muchas consultas, porque casi nunca llega con ellas puestas.',
      descompensada: 'Banderas que sacan el cuadro de la urticaria comun: habon que dura MAS DE 24 HORAS en el mismo sitio, que DUELE mas de lo que pica, o que al desaparecer deja PURPURA o pigmentacion residual, que apuntan a vasculitis urticarial y obligan a biopsiar. Fiebre, artralgias o elevacion mantenida de reactantes, que orientan a un sindrome autoinflamatorio. Angioedema SIN habones y sin respuesta a antihistaminicos, que obliga a pensar en angioedema por bradicinina (hereditario o por inhibidores de la enzima convertidora). Y compromiso respiratorio, digestivo o hipotension, que ya no es urticaria sino ANAFILAXIA y se trata con adrenalina intramuscular.'
    },
    laboratorio: [
      { prueba: 'Urticaria AGUDA: ninguna prueba de rutina', utilidad: 'La urticaria aguda no necesita estudio. Se busca el desencadenante por la historia (infeccion, farmaco, alimento) y poco mas. Pedir analitica y bateria de alergia a todo paciente con habones de una semana es el error mas frecuente y mas caro del tema.' },
      { prueba: 'Hemograma con formula', utilidad: 'Es una de las DOS pruebas de rutina en la urticaria cronica. Busca eosinofilia, citopenias y datos que sugieran otra enfermedad, sobre todo infecciosa.' },
      { prueba: 'Velocidad de sedimentacion o proteina C reactiva', utilidad: 'La otra prueba de rutina. Su elevacion mantenida es una bandera: apunta a vasculitis urticarial, a un sindrome autoinflamatorio o a una infeccion subyacente, y ninguna de esas cosas se trata como una urticaria.' },
      { prueba: 'Inmunoglobulina E total y anticuerpos antitiroperoxidasa', utilidad: 'No sirven para diagnosticar. Se asocian a la probabilidad de RESPUESTA a omalizumab, pero la guia advierte de que su rendimiento diagnostico y su valor predictivo son limitados. Se piden cuando la respuesta va a cambiar la decision, no de rutina.' },
      { prueba: 'Triptasa serica', utilidad: 'Ante sospecha de mastocitosis o de anafilaxia. En la urticaria cronica comun no aporta.' },
      { prueba: 'C4 y C1 inhibidor', utilidad: 'Solo si hay ANGIOEDEMA SIN habones que no responde a antihistaminicos. Un C4 bajo orienta a angioedema hereditario, que se trata de forma completamente distinta.' },
      { prueba: 'Pruebas dirigidas por la historia', utilidad: 'Serologia de infeccion concreta, funcion tiroidea o estudio de parasitos SOLO si algo en la anamnesis lo sugiere. La guia insiste en que el estudio basico es corto y que ampliarlo sin motivo no mejora el resultado.' },
      { prueba: 'Biopsia cutanea', utilidad: 'Cuando hay banderas rojas: habon de mas de 24 horas, doloroso o con purpura residual. Busca vasculitis leucocitoclastica, que cambia el diagnostico y el tratamiento.' }
    ],
    no_invasivos: [
      { metodo: 'UAS7 (calculadora disponible)', interpretacion: 'Diario de siete dias en el que el paciente punt&uacute;a habones y picor de 0 a 3 cada dia. Mide ACTIVIDAD, es decir, cuanta enfermedad hay ahora.', cutoff: '0 a 6 bien controlada; 28 a 42 grave' },
      { metodo: 'Test de control de la urticaria (calculadora disponible)', interpretacion: 'Cuatro preguntas sobre las ultimas cuatro semanas. Mide CONTROL, es decir, si el tratamiento esta funcionando.', cutoff: '12 o mas: controlada' },
      { metodo: 'Escalon terapeutico (calculadora disponible)', interpretacion: 'Cruza el tratamiento actual con el grado de control y devuelve el siguiente paso del algoritmo.', cutoff: 'No saltarse escalones y no pasar de cuadruplicar la dosis' },
      { metodo: 'Banderas rojas (calculadora disponible)', interpretacion: 'Comprueba los datos que indican que no se trata de una urticaria comun y que obligan a estudiar otra cosa.', cutoff: 'Una sola bandera ya cambia el plan' },
      { metodo: 'Pruebas de provocacion en las inducibles', interpretacion: 'Cubito de hielo para la urticaria por frio, dermografometro para el dermografismo, ejercicio o ba&#241;o caliente para la colinergica, y luz de longitud de onda conocida para la solar.', cutoff: 'Confirman el desencadenante y permiten medir el umbral' },
      { metodo: 'Fotografia de las lesiones', interpretacion: 'La herramienta mas rentable y la mas barata. El paciente rara vez llega con habones, y una foto evita semanas de dudas sobre si lo que tuvo eran habones o no.', cutoff: 'Comprobar la fugacidad: si sale en la foto y sigue ahi al dia siguiente, sospechar' }
    ],
    imagen: [
      { modalidad: 'No se necesita imagen', hallazgos: 'La urticaria es un diagnostico clinico. No hay ninguna prueba de imagen en su estudio de rutina.' },
      { modalidad: 'Ecografia abdominal', hallazgos: 'Solo si se sospecha una enfermedad de base que la historia haya sugerido, o ante dolor abdominal recurrente en el angioedema hereditario, donde el edema de la pared intestinal puede simular un abdomen agudo.' },
      { modalidad: 'Radiografia o tomografia', hallazgos: 'Reservadas a la busqueda de un foco infeccioso o neoplasico cuando hay datos que lo justifiquen, no como cribado.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `Primero por el <strong>reloj</strong>: menos de seis semanas es AGUDA y seis semanas o mas es CRONICA. Despues, la cronica se divide en <strong>espontanea</strong> (sin desencadenante identificable) e <strong>inducible</strong> (siempre aparece con el mismo estimulo: frio, presion, rascado, calor, sol, agua, vibracion o ejercicio). Y por ultimo se mide, que es lo que casi nunca se hace: el <strong>UAS7</strong> dice cuanta enfermedad hay y el <strong>test de control</strong> dice si el tratamiento funciona. Son cosas distintas y las dos hacen falta.`,
    escalas: [
      { nombre: 'UAS7 (calculadora disponible)', componentes: 'Cada dia, durante siete dias: numero de habones (0 ninguno, 1 menos de 20, 2 de 20 a 50, 3 mas de 50) e intensidad del picor (0 nada, 1 leve, 2 moderado, 3 intenso).', formula: 'Suma de los dos apartados cada dia, sumados los siete dias. Rango 0 a 42.', interpretacion: '0 libre de enfermedad; 1 a 6 bien controlada; 7 a 15 leve; 16 a 27 moderada; 28 a 42 grave. Su limitacion importa: mide habones y picor, de modo que un paciente con ANGIOEDEMA predominante puede tener un UAS7 enga&#241;osamente bajo.' },
      { nombre: 'Test de control de la urticaria (calculadora disponible)', componentes: 'Cuatro preguntas sobre las ultimas cuatro semanas: sintomas fisicos, calidad de vida, insuficiencia del tratamiento y control global.', formula: 'Cada pregunta de 0 a 4. Rango 0 a 16.', interpretacion: '12 o mas indica enfermedad CONTROLADA; por debajo de 12, control insuficiente y hay que subir un escalon. Es retrospectivo y no necesita diario, lo que lo hace comodo para la consulta.' },
      { nombre: 'Escala de actividad del angioedema', componentes: 'Diario de episodios de angioedema, su duracion y su repercusion funcional.', formula: 'Puntuacion diaria acumulada.', interpretacion: 'Existe porque el UAS7 no mide el angioedema. En el paciente cuyo problema principal es el angioedema, usar solo el UAS7 lleva a infravalorar la enfermedad y a no escalar el tratamiento.' },
      { nombre: 'Clasificacion por duracion', componentes: 'Tiempo transcurrido desde el primer brote.', formula: 'Menos de 6 semanas o 6 semanas o mas.', interpretacion: 'Es la decision que mas cambia la conducta. La aguda no se estudia y suele resolverse; la cronica se estudia (poco) y se trata de forma escalonada y prolongada.' },
      { nombre: 'Espontanea frente a inducible', componentes: 'Presencia o ausencia de un desencadenante fisico reproducible.', formula: 'Historia dirigida y prueba de provocacion.', interpretacion: 'En la inducible el desencadenante es SIEMPRE el mismo y reproducible, lo que permite confirmarlo en la consulta y medir el umbral. Pueden coexistir las dos formas en el mismo paciente.' },
      { nombre: 'Habon frente a angioedema', componentes: 'Profundidad de la lesion, sintoma predominante y duracion.', formula: 'Valoracion clinica.', interpretacion: 'El habon es superficial, pica y dura menos de 24 horas. El angioedema es profundo, duele o tensa y dura hasta 72 horas. El angioedema SIN habones que no responde a antihistaminicos obliga a descartar el mecanismo por bradicinina.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Urticaria aguda: reconocerla y no sobreestudiarla',
      color: '#b05a2e',
      definicion: 'Habones, angioedema o ambos de menos de seis semanas de evolucion. Es la forma mas frecuente y la que mas pruebas innecesarias genera.',
      fisiopatologia: 'El mastocito cutaneo se degranula y libera histamina y otros mediadores, que producen vasodilatacion, aumento de la permeabilidad capilar (el habon) y estimulacion de terminaciones nerviosas (el picor). El desencadenante mas frecuente en el adulto es una INFECCION, normalmente virica de via respiratoria alta; despues los farmacos. La alergia alimentaria verdadera es una causa mucho menos frecuente de lo que el paciente y el medico suponen.',
      epidemiologia: 'La prevalencia a lo largo de la vida de la urticaria aguda se estima en torno al 20%, es decir, uno de cada cinco la tendra alguna vez. La mayoria se resuelve en dias o pocas semanas.',
      factores_riesgo: ['Infeccion virica reciente de via respiratoria alta', 'Antibioticos, sobre todo betalactamicos', 'Antiinflamatorios no esteroideos', 'Contrastes yodados', 'Picaduras de himenopteros', 'Alimentos, con menos frecuencia de la que se cree', 'Atopia previa'],
      clinica: 'Habones fugaces y migratorios que pican, con o sin angioedema. El paciente suele identificar un desencadenante en los dias previos. Sin fiebre alta, sin artralgias y sin afectacion del estado general salvo por el propio picor.',
      criterios_dx: 'CLINICO, por la historia y la exploracion. Menos de seis semanas de evolucion. No hace falta ninguna prueba de rutina.',
      laboratorio: 'Ninguno de rutina. Solo lo que la historia sugiera de forma concreta.',
      imagen: 'No se necesita.',
      complementarios: 'Fotografia de las lesiones si el paciente acude sin ellas. Revision de la medicacion de las dos semanas previas.',
      dx_diferencial: 'Anafilaxia (que a&#241;ade compromiso respiratorio, digestivo o hipotension), exantema virico, exantema por farmacos, eritema multiforme, picaduras y dermatitis de contacto aguda.',
      tx_medico: 'Antihistaminico de SEGUNDA generacion a dosis estandar durante unas semanas, retirada del desencadenante si se identifica, y explicacion de que suele resolverse. Evitar antiinflamatorios no esteroideos mientras dure el brote, porque agravan la urticaria por un mecanismo distinto del alergico.',
      tx_farmacologico: 'Bilastina, cetirizina, desloratadina, ebastina, fexofenadina, levocetirizina, loratadina, mizolastina o rupatadina. Un ciclo CORTO de corticoide oral puede plantearse en un brote intenso, pero no es parte del tratamiento de fondo ni se debe prolongar. Los antihistaminicos de PRIMERA generacion se desaconsejan.',
      tx_intervencionista: 'No aplica. Si hay anafilaxia, adrenalina intramuscular en el muslo, que es otro cuadro y otro tema.',
      criterios_uci: 'Solo si evoluciona a anafilaxia con compromiso de via aerea o inestabilidad hemodinamica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No suele requerir ingreso. Si el paciente esta ingresado, revisar la medicacion como primera sospecha.',
      seguimiento_ambulatorio: 'Reevaluar a las seis semanas: si persiste, ya es cronica y cambia el planteamiento. Explicar las banderas rojas por escrito.',
      pronostico: 'Excelente. La mayoria se resuelve sola. Una minoria pasa a cronica.',
      algoritmo: ['Confirmar que son habones fugaces de menos de 24 horas', 'Descartar anafilaxia: via aerea, digestivo, tension', 'Buscar desencadenante en la historia, sobre todo infeccion y farmacos', 'NO pedir bateria de pruebas', 'Antihistaminico de segunda generacion a dosis estandar', 'Reevaluar a las seis semanas']
    },
    {
      nombre: 'Urticaria cronica espontanea',
      color: '#8c3a34',
      definicion: 'Habones, angioedema o ambos durante seis semanas o mas, sin desencadenante externo identificable que los reproduzca.',
      fisiopatologia: 'El mastocito se activa sin estimulo externo. En una parte importante de los pacientes hay un mecanismo AUTOINMUNITARIO: autoanticuerpos que activan al mastocito directamente (contra el receptor de la inmunoglobulina E) o autoanticuerpos de tipo inmunoglobulina E dirigidos contra autoantigenos. Esa doble via explica por que el omalizumab, que baja la inmunoglobulina E libre y desensibiliza al mastocito, funciona en muchos de ellos, y por que en otros hace falta un inmunosupresor.',
      epidemiologia: 'Mucho menos frecuente que la aguda, pero mucho mas incapacitante: dura a&#241;os, altera el sue&#241;o y el rendimiento, y tiene un impacto en la calidad de vida comparable al de una cardiopatia isquemica. Predomina en mujeres de edad media.',
      factores_riesgo: ['Sexo femenino', 'Enfermedad tiroidea autoinmune', 'Otras enfermedades autoinmunes', 'Estres psicologico, que la agrava aunque no la cause', 'Antiinflamatorios no esteroideos, que agravan hasta un tercio de los casos'],
      clinica: 'Brotes de habones casi diarios, con o sin angioedema, que empeoran por la tarde y por la noche y alteran el sue&#241;o. El paciente suele llegar convencido de que es alergia a algo y con una lista larga de alimentos retirados sin beneficio.',
      criterios_dx: 'Habones o angioedema durante seis semanas o mas sin desencadenante reproducible. Se apoya en el diario y en la fotografia.',
      laboratorio: 'ESTUDIO CORTO: hemograma con formula y velocidad de sedimentacion o proteina C reactiva. Nada mas de rutina. Inmunoglobulina E total y antitiroperoxidasa solo si van a orientar la respuesta al omalizumab.',
      imagen: 'No se necesita.',
      complementarios: 'UAS7 para medir actividad y test de control para medir control. Diario de sintomas.',
      dx_diferencial: 'Urticaria inducible, vasculitis urticarial, sindromes autoinflamatorios, mastocitosis, penfigoide ampolloso en fase preampollosa y reaccion por farmacos.',
      tx_medico: 'Retirar los antiinflamatorios no esteroideos, tratar la comorbilidad que exista y explicar que NO suele ser alergia alimentaria, para evitar dietas restrictivas inutiles. Y explicar tambien que el tratamiento es sintomatico y prolongado, no un ciclo corto.',
      tx_farmacologico: 'Algoritmo: antihistaminico de segunda generacion a dosis estandar; si no controla en 2 a 4 semanas, subir la dosis hasta CUADRUPLICARLA (fuera de ficha tecnica, y sin pasar de ahi); si sigue sin controlar, a&#241;adir omalizumab. La guia se&#241;ala que subir la dosis es preferible a MEZCLAR distintos antihistaminicos de segunda generacion.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica salvo anafilaxia concurrente.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No requiere ingreso.',
      seguimiento_ambulatorio: 'Reevaluar con test de control cada pocas semanas y ajustar el escalon. Intentar bajar cuando lleve meses controlada, porque la enfermedad remite sola con el tiempo en muchos pacientes.',
      pronostico: 'Remite espontaneamente en un plazo de a&#241;os en la mayoria, aunque una minoria persiste mucho tiempo. El control con tratamiento es alcanzable en casi todos.',
      algoritmo: ['Confirmar seis semanas o mas y ausencia de desencadenante', 'Estudio CORTO: hemograma y reactantes', 'Medir con UAS7 y con el test de control', 'Antihistaminico de segunda generacion a dosis estandar', 'Sin control en 2 a 4 semanas: subir hasta cuadruplicar', 'Sin control: a&#241;adir omalizumab', 'Refractario a todo: valorar ciclosporina']
    },
    {
      nombre: 'Urticarias cronicas inducibles',
      color: '#3d5a73',
      definicion: 'Formas cronicas en las que los habones aparecen SIEMPRE tras el mismo estimulo fisico reproducible, lo que permite confirmarlas con una prueba de provocacion en la consulta.',
      fisiopatologia: 'El estimulo fisico act&uacute;a de forma directa sobre el mastocito o sobre estructuras cutaneas que lo activan. En la urticaria por frio se han implicado crioaglutininas en una minoria de casos. En la colinergica el estimulo es el aumento de la temperatura corporal y la sudoracion, no el calor externo, lo que explica que se dispare con el ejercicio, la ducha caliente o una emocion intensa.',
      epidemiologia: 'El dermografismo sintomatico es la mas frecuente. La colinergica predomina en adultos jovenes. Pueden coexistir con una urticaria cronica espontanea en el mismo paciente, lo que confunde el cuadro.',
      factores_riesgo: ['Exposicion laboral o recreativa al frio', 'Ejercicio y ambientes calurosos', 'Presion mantenida por cinturones, tirantes o asientos', 'Exposicion solar', 'Contacto con agua, en la rara urticaria acuagenica'],
      clinica: 'Habones limitados a la zona estimulada y con la morfologia del estimulo: lineales en el dermografismo, peque&#241;os y numerosos en la colinergica, en la zona expuesta en la solar y en la de frio. La por presion retardada aparece HORAS despues del estimulo y es dolorosa mas que pruriginosa.',
      criterios_dx: 'Historia compatible mas PRUEBA DE PROVOCACION positiva: cubito de hielo para el frio, dermografometro para el dermografismo, ejercicio o ba&#241;o caliente para la colinergica y luz de longitud de onda conocida para la solar.',
      laboratorio: 'El mismo estudio corto que la espontanea si hay duda. En la urticaria por frio se puede buscar crioglobulinas si el cuadro es atipico o grave.',
      imagen: 'No se necesita.',
      complementarios: 'Medir el UMBRAL de desencadenamiento, que permite dar consejos concretos y seguir la respuesta al tratamiento de forma objetiva.',
      dx_diferencial: 'Urticaria cronica espontanea, dermatitis de contacto, eritema por calor y, en la colinergica, la anafilaxia inducida por ejercicio, que es mucho mas grave y obliga a llevar adrenalina.',
      tx_medico: 'Evitar o graduar el estimulo, que en muchos casos es lo que mas cambia la vida del paciente. En la urticaria por frio hay que advertir del riesgo de un ba&#241;o en agua fria: la exposicion masiva y simultanea de toda la superficie corporal puede producir una reaccion sistemica grave.',
      tx_farmacologico: 'El mismo algoritmo que la espontanea: antihistaminico de segunda generacion, subida de dosis hasta cuadruplicar y omalizumab si no se controla.',
      tx_intervencionista: 'La induccion de tolerancia se ha usado en casos seleccionados de urticaria por frio y solar, con resultados variables y en centros con experiencia.',
      criterios_uci: 'Reaccion sistemica grave tras exposicion masiva al frio, o anafilaxia inducida por ejercicio.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Reevaluar el umbral y la necesidad de tratamiento continuo frente a tratamiento solo antes de la exposicion prevista.',
      pronostico: 'Curso prolongado pero manejable. La urticaria por frio y la solar son las que mas limitan la vida diaria.',
      algoritmo: ['Sospechar por la relacion constante con un estimulo', 'Confirmar con prueba de provocacion', 'Medir el umbral', 'Consejo de evitacion realista', 'Mismo algoritmo farmacologico que la espontanea', 'Advertir del riesgo sistemico en la urticaria por frio']
    },
    {
      nombre: 'Angioedema: con habones y sin habones',
      color: '#5a4a8c',
      definicion: 'Edema subito, profundo y bien delimitado de dermis profunda, tejido subcutaneo o mucosas. La pregunta que lo ordena todo es si se acompa&#241;a de habones o no.',
      fisiopatologia: 'Hay dos mecanismos y distinguirlos cambia el tratamiento por completo. El angioedema HISTAMINERGICO acompa&#241;a a la urticaria, responde a antihistaminicos y adrenalina, y suele cursar con habones. El angioedema por BRADICININA (hereditario por deficit o disfuncion del inhibidor de C1, o adquirido por inhibidores de la enzima convertidora de angiotensina) NO responde a antihistaminicos, corticoides ni adrenalina, y necesita farmacos dirigidos contra la via de la bradicinina.',
      epidemiologia: 'El angioedema acompa&#241;a a los habones en una proporcion importante de las urticarias cronicas. El inducido por inhibidores de la enzima convertidora puede aparecer tras a&#241;os de tratamiento sin incidencias, lo que hace que se pase por alto con frecuencia.',
      factores_riesgo: ['Tratamiento con inhibidores de la enzima convertidora de angiotensina', 'Antecedente familiar de angioedema', 'Antiinflamatorios no esteroideos', 'Traumatismo o cirugia, sobre todo dental, en el hereditario', 'Estres y cambios hormonales'],
      clinica: 'Tumefaccion asimetrica de parpados, labios, lengua, manos, pies o genitales, que TENSA o duele mas de lo que pica, y que tarda hasta 72 horas en resolverse. El compromiso de lengua, suelo de boca o laringe es una urgencia de via aerea. En el hereditario son frecuentes las crisis de dolor abdominal por edema de la pared intestinal, que simulan un abdomen agudo y llevan a laparotomias innecesarias.',
      criterios_dx: 'Clinico. La clave esta en la anamnesis: presencia o no de habones, respuesta o no a antihistaminicos, medicacion actual y antecedentes familiares.',
      laboratorio: 'Si hay angioedema SIN habones que no responde a antihistaminicos: C4 y cuantificacion y funcion del inhibidor de C1. Un C4 bajo es la primera pista del hereditario.',
      imagen: 'Ecografia o tomografia abdominal solo si hay dolor abdominal en el que se sospecha edema de pared intestinal.',
      complementarios: 'Escala de actividad del angioedema, porque el UAS7 no lo mide. Revision estructurada de la medicacion.',
      dx_diferencial: 'Celulitis facial, dermatitis de contacto, sindrome de la vena cava superior, edema por hipoalbuminemia, linfedema y anafilaxia.',
      tx_medico: 'Lo primero es asegurar la VIA AEREA si hay afectacion de lengua o laringe. Despues, separar los dos mecanismos: histaminergico o por bradicinina. Y RETIRAR el inhibidor de la enzima convertidora si lo toma, sin reintroducirlo nunca.',
      tx_farmacologico: 'Histaminergico: el mismo algoritmo de la urticaria, y adrenalina intramuscular si hay anafilaxia. Por bradicinina: NO responde a antihistaminicos, corticoides ni adrenalina; se emplean el concentrado de inhibidor de C1, el antagonista del receptor de bradicinina y los inhibidores de calicreina, segun disponibilidad.',
      tx_intervencionista: 'Intubacion o via aerea quirurgica si hay compromiso laringeo. Conviene anticiparse: la via aerea se asegura ANTES de que el edema la haga imposible.',
      criterios_uci: 'Afectacion de lengua, suelo de boca o laringe, estridor, disfonia o dificultad para tragar saliva.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Observacion prolongada tras un episodio con afectacion de via aerea. Revision de toda la medicacion antes del alta.',
      seguimiento_ambulatorio: 'Plan escrito de actuacion. En el hereditario, profilaxis a largo plazo y cobertura antes de procedimientos dentales o cirugia.',
      pronostico: 'Bueno si se identifica el mecanismo. El riesgo vital esta en el episodio laringeo y en confundir el mecanismo por bradicinina con una alergia.',
      algoritmo: ['Asegurar la via aerea si hay afectacion laringea', '&#191;Hay habones? Si los hay, es via histaminergica', 'Revisar si toma un inhibidor de la enzima convertidora y retirarlo', 'Sin habones y sin respuesta a antihistaminico: pedir C4', 'Tratar segun el mecanismo, no segun el aspecto', 'Plan escrito y profilaxis si es hereditario']
    },
    {
      nombre: 'Lo que parece urticaria y no lo es',
      color: '#3f6b52',
      definicion: 'Entidades que producen lesiones habonosas o edema y que se confunden con urticaria, pero que tienen otro pronostico y otro tratamiento.',
      fisiopatologia: 'En la vasculitis urticarial el mecanismo no es la degranulacion del mastocito sino el deposito de inmunocomplejos en la pared vascular, con vasculitis leucocitoclastica: por eso la lesion dura mas, duele, y deja purpura al resolverse. En los sindromes autoinflamatorios hay activacion del inflamasoma con liberacion de interleucina 1, lo que explica la fiebre y la elevacion mantenida de reactantes. En el penfigoide preampolloso el prurito y las placas urticariformes preceden en semanas o meses a las ampollas.',
      epidemiologia: 'Todas son poco frecuentes comparadas con la urticaria comun, y precisamente por eso se diagnostican tarde: el paciente lleva meses tratado como urticaria resistente.',
      factores_riesgo: ['Enfermedad autoinmune conocida, para la vasculitis urticarial', 'Edad avanzada y prurito persistente, para el penfigoide', 'Historia familiar y episodios desde la infancia, para los autoinflamatorios', 'Fiebre recurrente con artralgias'],
      clinica: 'La pregunta que mas rinde es sobre el HABON INDIVIDUAL, no sobre el brote: cuanto dura una lesion concreta, si pica o duele, y que deja al irse. Si dura mas de 24 horas, duele y deja purpura, hay que biopsiar. Si hay fiebre, artralgias y reactantes altos de forma mantenida, hay que pensar en autoinflamatorio. Si hay prurito intenso en un anciano con placas urticariformes persistentes, hay que pensar en penfigoide.',
      criterios_dx: 'La biopsia decide en la vasculitis urticarial (vasculitis leucocitoclastica) y en el penfigoide (inmunofluorescencia directa con deposito lineal en la union dermoepidermica). En los autoinflamatorios, el estudio genetico.',
      laboratorio: 'Reactantes de fase aguda, complemento (un C3 y C4 bajos apuntan a vasculitis urticarial hipocomplementemica), anticuerpos antinucleares e inmunofluorescencia si se sospecha penfigoide.',
      imagen: 'Segun la enfermedad de base que se sospeche.',
      complementarios: 'Biopsia CON inmunofluorescencia directa cuando la duda sea penfigoide, porque la histologia sola puede no bastar en la fase preampollosa.',
      dx_diferencial: 'Urticaria cronica espontanea refractaria, que es justamente la etiqueta equivocada que suelen llevar estos pacientes.',
      tx_medico: 'Cada entidad tiene su tratamiento: inmunosupresion en la vasculitis urticarial, bloqueo de interleucina 1 en los autoinflamatorios, y el tratamiento del penfigoide en su caso. Seguir subiendo antihistaminicos en estos pacientes no funciona y retrasa el diagnostico.',
      tx_farmacologico: 'No corresponde al algoritmo de la urticaria. El error tipico es escalar hasta omalizumab en un paciente que en realidad tiene otra cosa.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'Segun la enfermedad de base.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Segun la enfermedad de base.',
      seguimiento_ambulatorio: 'Derivacion al especialista que corresponda una vez identificada la entidad.',
      pronostico: 'Depende por completo de la enfermedad de base. Lo que empeora el pronostico de todas ellas es el retraso diagnostico bajo la etiqueta de urticaria resistente.',
      algoritmo: ['Preguntar cuanto dura UNA lesion concreta', '&#191;Pica o duele? &#191;Deja marca al irse?', 'Buscar fiebre, artralgias y reactantes mantenidos', 'Biopsiar ante cualquier bandera roja', 'A&#241;adir inmunofluorescencia si se sospecha penfigoide', 'No seguir escalando antihistaminicos a ciegas']
    },
    {
      nombre: 'Tratamiento escalonado y control',
      color: '#7a4363',
      definicion: 'Secuencia terapeutica de la guia internacional, cuyo objetivo es el CONTROL COMPLETO de los sintomas con el minimo tratamiento posible.',
      fisiopatologia: 'Cada escalon act&uacute;a en un punto: el antihistaminico bloquea el receptor H1 de la histamina liberada; subir la dosis aumenta la ocupacion del receptor, que es la razon de que funcione escalar en vez de cambiar de molecula; el omalizumab secuestra la inmunoglobulina E libre y reduce la expresion de su receptor en el mastocito, con lo que lo vuelve menos excitable; y la ciclosporina inhibe al linfocito T y de forma indirecta la liberacion de mediadores.',
      epidemiologia: 'La mayoria de los pacientes se controla en los dos primeros escalones. El limitante de los escalones superiores es el COSTE: la guia reconoce de forma explicita que omalizumab, dupilumab y remibrutinib tienen restricciones por precio, y la ciclosporina por su perfil de seguridad.',
      factores_riesgo: ['Enfermedad grave por UAS7 desde el inicio', 'Angioedema predominante', 'Inmunoglobulina E total muy baja, que predice peor respuesta a omalizumab', 'Consumo continuado de antiinflamatorios no esteroideos', 'Comorbilidad autoinmune'],
      clinica: 'La decision de subir escalon no depende de la impresion sino del test de control: por debajo de 12 se sube.',
      criterios_dx: 'No aplica.',
      laboratorio: 'Antes de ciclosporina, funcion renal y tension arterial, y vigilancia periodica.',
      imagen: 'No se necesita.',
      complementarios: 'Test de control en cada visita. UAS7 cuando se quiera medir actividad de forma fina.',
      dx_diferencial: 'Ante falta de respuesta a todo el algoritmo, revisar el DIAGNOSTICO antes de seguir escalando: vasculitis urticarial, autoinflamatorio, penfigoide o mastocitosis.',
      tx_medico: 'Retirar antiinflamatorios no esteroideos, tratar comorbilidad, y explicar que el objetivo es el control completo y que el tratamiento se mantiene mientras la enfermedad este activa.',
      tx_farmacologico: 'Escalon 1: antihistaminico de segunda generacion moderno a DOSIS ESTANDAR. Escalon 2: subir hasta CUADRUPLICAR esa dosis, que es preferible a mezclar moleculas distintas; por encima de cuatro veces no esta probado y no se recomienda. Escalon 3: a&#241;adir omalizumab. Con dupilumab como opcion, con la ventaja de que su eficacia no depende de una inmunoglobulina E basal alta, a diferencia del omalizumab. La CICLOSPORINA queda para la enfermedad grave refractaria a todo lo autorizado, fuera de ficha tecnica y por sus efectos adversos. Los antihistaminicos de PRIMERA generacion se desaconsejan como primera linea por sus efectos adversos, y astemizol y terfenadina no deben usarse.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica.',
      seguimiento_ambulatorio: 'Con un antihistaminico, si no ha mejorado en una o dos semanas ya no va a mejorar mas a esa dosis: hay que subir. Una vez controlada de forma estable, intentar bajar, porque la enfermedad remite sola con el tiempo.',
      pronostico: 'El control completo es alcanzable en la gran mayoria si se respeta el algoritmo y se mide.',
      algoritmo: ['Medir el control antes de decidir', 'Antihistaminico de segunda generacion a dosis estandar', 'Sin control en 2 a 4 semanas: subir hasta cuadruplicar', 'Sin control: a&#241;adir omalizumab', 'Refractario a lo autorizado: valorar ciclosporina', 'Si nada funciona, revisar el DIAGNOSTICO', 'Cuando lleve meses controlada, intentar bajar']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'La urticaria rara vez ingresa por si misma. El internista se la encuentra de tres formas: como reaccion a un farmaco del propio ingreso, como angioedema con riesgo de via aerea, o como pista de otra enfermedad.',
    parametros: [
      'Ante habones en un paciente ingresado, lo primero es la hoja de medicacion: betalactamicos, antiinflamatorios no esteroideos y contrastes yodados encabezan la lista.',
      'Separar urticaria de ANAFILAXIA en cada episodio: via aerea, broncoespasmo, sintomas digestivos e hipotension. La anafilaxia se trata con adrenalina intramuscular, no con antihistaminico.',
      'Angioedema de lengua o laringe: asegurar la via aerea antes de que el edema la haga imposible, y comprobar si toma un inhibidor de la enzima convertidora.',
      'No prolongar el corticoide sistemico: no es tratamiento de fondo de la urticaria y su retirada puede producir rebote.',
      'Si hay fiebre, artralgias o reactantes altos de forma mantenida, no es una urticaria comun: buscar otra cosa.',
      'Antes del alta, dejar por escrito las banderas rojas y el plan de tratamiento, porque el seguimiento de esta enfermedad es ambulatorio y prolongado.'
    ],
    criterios_uci_general: 'Angioedema con compromiso de via aerea, anafilaxia con inestabilidad o reaccion sistemica grave tras exposicion masiva al frio.',
    criterios_tips_general: 'No aplica en urticaria.',
    criterios_trasplante_general: 'No aplica en urticaria.',
    prevencion: 'Evitar los antiinflamatorios no esteroideos mientras la enfermedad este activa, retirar de forma definitiva el inhibidor de la enzima convertidora en quien ha tenido angioedema, evitar dietas restrictivas sin fundamento, y en la urticaria por frio advertir del riesgo de la inmersion en agua fria.'
  }
};

export const compCites = {
  'Urticaria aguda: reconocerla y no sobreestudiarla': { epidemiologia: [1], tx_farmacologico: [1] },
  'Urticaria cronica espontanea': { laboratorio: [1], tx_farmacologico: [1] },
  'Urticarias cronicas inducibles': { criterios_dx: [1] },
  'Angioedema: con habones y sin habones': {},
  'Lo que parece urticaria y no lo es': {},
  'Tratamiento escalonado y control': { tx_farmacologico: [1], epidemiologia: [1] }
};

export const estigmasTitulo = 'Los tres rasgos del habon, y lo que los rompe';
export const estigmas = [
  { nombre: 'Elevacion central con eritema reflejo', descripcion: 'El habon es una papula o placa edematosa de tama&#241;o variable, rodeada casi siempre de un halo eritematoso. Es el rasgo morfologico.' },
  { nombre: 'Picor, a veces quemazon', descripcion: 'El habon PICA. Si lo que predomina es el dolor o el escozor, hay que dudar del diagnostico y pensar en vasculitis urticarial.' },
  { nombre: 'Fugacidad de menos de 24 horas', descripcion: 'Es el rasgo que mas rinde y el que menos se pregunta. La lesion INDIVIDUAL desaparece en menos de 24 horas sin dejar marca. Hay que preguntar por una lesion concreta, no por el brote.' },
  { nombre: 'Migracion', descripcion: 'Los habones de hoy no estan donde estaban los de ayer. Una lesion fija en el mismo sitio durante dias no es un habon.' },
  { nombre: 'Dermografismo', descripcion: 'Al rascar la piel con un objeto romo aparece un habon lineal en pocos minutos. Es la prueba de provocacion mas sencilla y se hace en la propia consulta.' },
  { nombre: 'Purpura residual', descripcion: 'Si al resolverse la lesion deja purpura o una mancha pigmentada, NO es una urticaria comun: es la se&#241;al de vasculitis urticarial y obliga a biopsiar.' }
];

export const biopsiaTitulo = 'Biopsia cutanea: solo ante banderas rojas';
export const biopsia = {
  indicaciones: [
    'Habon individual que dura MAS de 24 horas en el mismo sitio',
    'Lesion que duele o escuece mas de lo que pica',
    'Purpura o pigmentacion residual al resolverse la lesion',
    'Fiebre, artralgias o elevacion mantenida de reactantes de fase aguda',
    'Prurito intenso con placas urticariformes persistentes en un paciente mayor, por sospecha de penfigoide'
  ],
  ventajas: [
    'Confirma la vasculitis leucocitoclastica, que cambia el diagnostico y el tratamiento',
    'Con inmunofluorescencia directa detecta el penfigoide en fase preampollosa',
    'Evita seguir escalando el algoritmo en un paciente que tiene otra enfermedad'
  ],
  limitaciones: [
    'No se necesita en la urticaria comun, que es un diagnostico clinico',
    'Una biopsia de un habon corriente muestra edema dermico e infiltrado inespecifico y no aporta nada',
    'Conviene biopsiar una lesion de mas de 24 horas de evolucion, o el resultado puede ser falsamente normal'
  ],
  contraindicaciones: [
    'No hay contraindicacion absoluta; se valora la anticoagulacion y el riesgo de infeccion local',
    'Evitar biopsiar una lesion que ya se esta resolviendo, porque pierde los hallazgos',
    'En la cara, elegir otro punto por el resultado estetico si hay lesiones en otras zonas'
  ]
};

export const escalaRefs = { 'UAS7 (calculadora disponible)': [1], 'Test de control de la urticaria (calculadora disponible)': [1], 'Escala de actividad del angioedema': [1], 'Clasificacion por duracion': [1], 'Espontanea frente a inducible': [1], 'Habon frente a angioedema': [1] };

export const escalaCalc = {
  'UAS7 (calculadora disponible)': 'uas7',
  'Test de control de la urticaria (calculadora disponible)': 'uct',
  'Clasificacion por duracion': 'escalon-urticaria'
};

export const compGroups = [
  { title: 'Por el reloj', items: ['Urticaria aguda: reconocerla y no sobreestudiarla', 'Urticaria cronica espontanea', 'Urticarias cronicas inducibles'] },
  { title: 'Angioedema', items: ['Angioedema: con habones y sin habones'] },
  { title: 'Lo que no es urticaria', items: ['Lo que parece urticaria y no lo es'] },
  { title: 'Tratamiento', items: ['Tratamiento escalonado y control'] }
];

export const complicacionesIntro = 'Las tres primeras fichas siguen el reloj, que es lo que de verdad ordena este tema: la aguda, que no hay que estudiar; la cronica espontanea, cuyo estudio es mucho mas corto de lo que se suele pedir; y las inducibles, que se confirman en la consulta con una prueba sencilla. La cuarta es el angioedema, donde una sola pregunta (si hay habones o no) separa dos mecanismos con tratamientos que no se parecen en nada. La quinta reune lo que se disfraza de urticaria y lleva meses con la etiqueta equivocada. Y la ultima es el algoritmo, que funciona si se respeta y se mide.';

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
    { title: 'Cronica', sub: '6 semanas o mas', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Espontanea', sub: 'Sin desencadenante &middot; estudio corto', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Inducible', sub: 'Estimulo fijo &middot; prueba de provocacion', color: '#3d5a73', target: 'complicaciones' }
    ] },
    { title: 'Angioedema', sub: '&#191;Hay habones?', color: '#5a4a8c', target: 'complicaciones', leaves: [
      { title: 'Con habones', sub: 'Histaminergico &middot; antihistaminico', color: '#5a4a8c', target: 'complicaciones' },
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
    titulo: 'El habon corriente frente a la bandera roja',
    fuente: 'Guia internacional de urticaria (Zuberbier T, et al. Allergy 2026;81(8):2582-2632).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Pregunta sobre UNA lesion</th><th>Urticaria comun</th><th>Sospechar otra cosa</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">&#191;Cuanto dura?</td><td>Menos de 24 horas</td><td><span class="figure-tag fail">Mas de 24 horas</span></td></tr>
            <tr><td class="figure-org">&#191;Pica o duele?</td><td>Pica, a veces quema</td><td><span class="figure-tag fail">Duele o escuece</span></td></tr>
            <tr><td class="figure-org">&#191;Que deja al irse?</td><td>Nada, la piel queda normal</td><td><span class="figure-tag fail">Purpura o pigmentacion</span></td></tr>
            <tr><td class="figure-org">&#191;Se mueve?</td><td>Si, migra de un dia a otro</td><td><span class="figure-tag dys">Fija en el mismo sitio</span></td></tr>
            <tr><td class="figure-org">&#191;Hay sintomas generales?</td><td>No, salvo el propio picor</td><td><span class="figure-tag fail">Fiebre, artralgias, reactantes altos</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">La pregunta tiene que ser sobre <strong>una lesion concreta</strong>, no sobre el brote. Un paciente con habones a diario durante meses sigue teniendo una urticaria comun si cada habon individual dura menos de un dia. Preguntar "&#191;cuanto le dura el brote?" no sirve: hay que preguntar "&#191;cuanto le dura UN habon, el que le sale aqui?". Ante cualquier bandera, <strong>biopsiar</strong> buscando vasculitis urticarial.</div>`
  },
  'escalones-urticaria': {
    titulo: 'Algoritmo de tratamiento',
    fuente: 'Guia internacional de urticaria (Zuberbier T, et al. Allergy 2026;81(8):2582-2632, doi:10.1111/all.70210).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Escalon</th><th>Que se hace</th><th>Cuando se sube</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">1</td><td>Antihistaminico de <strong>segunda generacion</strong> moderno a dosis estandar (bilastina, cetirizina, desloratadina, ebastina, fexofenadina, levocetirizina, loratadina, mizolastina o rupatadina)</td><td>Sin control en 2 a 4 semanas</td></tr>
            <tr><td class="figure-org">2</td><td>Subir la dosis del mismo antihistaminico <strong>hasta cuadruplicarla</strong>. Es preferible a mezclar moleculas distintas</td><td>Sin control en 2 a 4 semanas</td></tr>
            <tr><td class="figure-org">3</td><td>A&#241;adir <strong>omalizumab</strong>. Dupilumab como opcion, con eficacia que no depende de una IgE basal alta</td><td>Sin control pese a dosis y tiempo suficientes</td></tr>
            <tr><td class="figure-org">4</td><td><strong>Ciclosporina</strong>, solo en enfermedad grave refractaria a todo lo autorizado</td><td>Ultimo recurso</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">Tres cosas que la guia dice y que se incumplen a diario. <strong>Los de primera generacion se desaconsejan</strong> como primera linea por sus efectos adversos (se han descrito sobredosis mortales); astemizol y terfenadina no deben usarse. <strong>No pasar de cuadruplicar</strong>: por encima de cuatro veces no se ha probado. Y <strong>con un antihistaminico, si no hay mejoria en una o dos semanas ya no la habra</strong> a esa dosis: esperar mas tiempo solo retrasa el escalon siguiente. La ciclosporina es fuera de ficha tecnica y se reserva por su perfil de seguridad.</div>`
  },
  'estudio-urticaria': {
    titulo: 'Que pedir y que no pedir',
    fuente: 'Guia internacional de urticaria (Zuberbier T, et al. Allergy 2026;81(8):2582-2632).',
    html: `
      <div class="table-wrap">
        <table>
          <thead><tr><th>Situacion</th><th>Estudio</th></tr></thead>
          <tbody>
            <tr><td class="figure-org">Urticaria aguda</td><td><strong>Ninguna prueba de rutina.</strong> Historia dirigida buscando infeccion o farmaco</td></tr>
            <tr><td class="figure-org">Urticaria cronica</td><td><strong>Hemograma con formula</strong> y <strong>velocidad de sedimentacion o proteina C reactiva.</strong> Nada mas de rutina</td></tr>
            <tr><td class="figure-org">Se plantea omalizumab</td><td>IgE total y anticuerpos antitiroperoxidasa, sabiendo que predicen respuesta con exactitud limitada</td></tr>
            <tr><td class="figure-org">Angioedema sin habones que no responde</td><td>C4, y cuantificacion y funcion del inhibidor de C1</td></tr>
            <tr><td class="figure-org">Sospecha de inducible</td><td>Prueba de provocacion dirigida y medicion del umbral</td></tr>
            <tr><td class="figure-org">Bandera roja</td><td>Biopsia cutanea, con inmunofluorescencia directa si se sospecha penfigoide</td></tr>
          </tbody>
        </table>
      </div>
      <div class="figure-grade-box">El estudio basico de la urticaria cronica cabe en <strong>dos lineas de analitica</strong>. La guia insiste en que ampliarlo sin que la historia lo sugiera no mejora el resultado: no encuentra causas ocultas, retrasa el tratamiento, genera hallazgos incidentales y refuerza en el paciente la idea equivocada de que hay una alergia escondida que encontrar. Las pruebas adicionales se eligen <strong>una a una y por la anamnesis</strong>.</div>`
  }
};
