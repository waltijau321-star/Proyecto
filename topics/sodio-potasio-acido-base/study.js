// topics/sodio-potasio-acido-base/study.js
// 48 subpreguntas (30 sueltas y 6 casos en cascada de 3 pasos) y 32 fichas.
// Opciones escritas según .claude/skills/reglas-preguntas/SKILL.md: misma categoría lógica,
// longitud comparable entre las cuatro y distractores que son errores reales de la práctica.

export const quiz = [
  { q: '¿Qué mide realmente el sodio plasmático?', options: ['El agua corporal, más que la sal', 'La sal total del organismo', 'El volumen intravascular efectivo', 'La carga de sodio de la dieta'], correct: 0, explanation: 'El sodio plasmático es un cociente entre sodio y agua corporales: baja cuando sobra agua, aunque el sodio total sea normal o esté aumentado, como en la insuficiencia cardiaca.', dificultad: 'facil' },

  { q: '¿Qué decide la urgencia del tratamiento en una hiponatremia?', options: ['El estado de la volemia', 'La gravedad de los síntomas', 'La cifra absoluta de sodio al ingreso', 'La osmolalidad urinaria'], correct: 1, explanation: 'Un sodio de 118 asintomático se corrige despacio y uno de 125 con convulsiones se trata de inmediato. La cifra no marca la urgencia.', dificultad: 'facil' },

  { q: '¿Cuál es el primer paso del algoritmo diagnóstico de la hiponatremia hipotónica?', options: ['Valorar la volemia clínicamente', 'Medir la vasopresina plasmática', 'Medir la osmolalidad urinaria', 'Medir el sodio urinario'], correct: 2, explanation: 'La guía recomienda interpretar la osmolalidad urinaria como primer paso (1D). Si es de 100 mOsm/kg o menos, la causa es el exceso relativo de agua y el algoritmo termina.', dificultad: 'intermedio' },

  { q: 'Osmolalidad urinaria de 80 mOsm/kg en una hiponatremia hipotónica. ¿Qué indica?', options: ['Exceso relativo de ingesta de agua', 'Secreción inadecuada de hormona antidiurética', 'Volumen arterial efectivo bajo', 'Pérdida renal de sodio por diuréticos'], correct: 0, explanation: 'Una osmolalidad urinaria de 100 mOsm/kg o menos indica que el riñón está diluyendo bien: la causa es que entra más agua de la que puede eliminarse.', dificultad: 'intermedio' },

  { q: 'Con osmolalidad urinaria de 500, ¿qué significa un sodio urinario de 20 mmol/L?', options: ['Exceso de ingesta de agua', 'Insuficiencia suprarrenal primaria', 'Volumen arterial efectivo bajo', 'Síndrome de secreción inadecuada'], correct: 2, explanation: 'Con osmolalidad urinaria por encima de 100, un sodio urinario de 30 mmol/L o menos apunta a volumen arterial efectivo bajo (2D).', dificultad: 'intermedio' },

  { q: '¿Qué dice la guía europea sobre medir vasopresina para confirmar el síndrome de secreción inadecuada?', options: ['La exige antes de restringir líquidos', 'Sugiere no medirla', 'La recomienda como confirmación', 'La reserva para casos dudosos'], correct: 1, explanation: 'La guía sugiere EN CONTRA de medir vasopresina para confirmar el diagnóstico (2D): no aporta sobre el algoritmo de osmolalidad y sodio urinarios.', dificultad: 'dificil' },

  { q: '¿Cuánto hay que sumar al sodio medido por cada 100 mg/dL de glucosa por encima de 100?', options: ['2.4 mmol/L', '1.6 mmol/L', '3.5 mmol/L', '1.0 mmol/L'], correct: 0, explanation: 'La guía europea usa 2.4 mmol/L por cada 100 mg/dL (5.5 mmol/L) de glucosa sobre 100. El factor clásico de 1.6 infraestima la corrección.', dificultad: 'dificil' },

  { q: '¿Cuál es la dosis inicial de salino al 3% en una hiponatremia con síntomas graves?', options: ['150 mL en 20 minutos', '500 mL en 60 minutos', '250 mL en 30 minutos', '1000 mL en 4 horas'], correct: 0, explanation: 'La guía recomienda una infusión intravenosa rápida de 150 mL de salino al 3% en 20 minutos, repetible. La alternativa por peso es 2 mL/kg.', dificultad: 'intermedio' },

  { q: '¿Cuál es el objetivo del tratamiento inicial de la hiponatremia con síntomas graves?', options: ['Llegar a 130 mmol/L', 'Subir el sodio 10 mmol/L', 'Subir el sodio 5 mmol/L', 'Normalizar el sodio'], correct: 2, explanation: 'El objetivo de las primeras horas es un ascenso de 5 mmol/L, que basta para reducir el edema cerebral. Normalizar el sodio no es el objetivo inicial.', dificultad: 'intermedio' },

  { q: 'Tras 150 mL de salino al 3%, ¿cuándo se recontrola el sodio?', options: ['A las 6 horas, en el control programado del turno', 'A los 20 minutos, repitiendo la infusión', 'A las 2 horas, sin repetir', 'A los 60 minutos, sin repetir'], correct: 1, explanation: 'La guía sugiere comprobar el sodio a los 20 minutos mientras se repite una segunda infusión de 150 mL en los siguientes 20 minutos.', dificultad: 'dificil' },

  { q: '¿Cuál es el límite de ascenso del sodio en las primeras 24 horas?', options: ['12 mmol/L', '6 mmol/L', '10 mmol/L', '8 mmol/L'], correct: 2, explanation: 'El límite es de 10 mmol/L en las primeras 24 horas y de 8 mmol/L en cada periodo de 24 horas siguiente, hasta alcanzar 130 mmol/L.', dificultad: 'intermedio' },

  { q: '¿Hasta qué cifra de sodio se mantienen los límites de velocidad de corrección?', options: ['Hasta normalizar en 135 mmol/L', 'Hasta 125 mmol/L', 'Hasta 140 mmol/L', 'Hasta 130 mmol/L'], correct: 3, explanation: 'La guía mantiene el límite de 8 mmol/L por cada 24 horas hasta que el sodio alcanza 130 mmol/L.', dificultad: 'dificil' },

  { q: '¿Por qué el riesgo de desmielinización osmótica es propio de la hiponatremia crónica?', options: ['En la aguda el edema protege a la neurona', 'La crónica se asocia a hipernatremia de rebote', 'El cerebro ya expulsó osmoles y no los recupera deprisa', 'La hiponatremia crónica cursa con cifras bastante más bajas'], correct: 2, explanation: 'El cerebro adaptado perdió osmoles para no hincharse. Si el sodio sube deprisa, las células no los recuperan al mismo ritmo y se deshidratan.', dificultad: 'intermedio' },

  { q: '¿Cuándo aparecen los síntomas de la desmielinización osmótica?', options: ['En las primeras 6 horas', 'Durante la propia infusión de hipertónico', 'A las tres semanas', 'De dos a seis días después'], correct: 3, explanation: 'Es una complicación diferida: aparece dos a seis días después de la corrección, con disartria, disfagia y paraparesia, y la resonancia puede ser normal al principio.', dificultad: 'dificil' },

  { q: '¿Qué efecto tiene corregir una hipopotasemia sobre el sodio plasmático?', options: ['No lo modifica', 'Lo sube solo si hay alcalosis', 'Lo sube por sí misma', 'Lo baja de forma transitoria'], correct: 2, explanation: 'La guía lo advierte de forma expresa: la corrección de la hipopotasemia contribuye al ascenso del sodio, y hay que contarla dentro del límite de 24 horas.', dificultad: 'dificil' },

  { q: 'Si los síntomas no mejoran tras subir el sodio 5 mmol/L, ¿qué indica la guía?', options: ['Doblar la velocidad de corrección', 'Suspender toda corrección', 'Repetir la misma pauta de hipertónico sin cambios', 'Buscar otras causas de los síntomas'], correct: 3, explanation: 'Se continúa el hipertónico buscando 1 mmol/L por hora, pero además se recomienda explorar otras causas de los síntomas: la hiponatremia puede ser un hallazgo acompañante.', dificultad: 'dificil' },

  { q: '¿Qué cifra define la hiperpotasemia grave?', options: ['5.5 mmol/L o más', '7.0 mmol/L o más', '6.5 mmol/L o más', '6.0 mmol/L o más, con síntomas'], correct: 2, explanation: 'La clasificación de la guía británica es: leve 5.5 a 5.9, moderada 6.0 a 6.4 y grave 6.5 o más.', dificultad: 'facil' },

  { q: '¿Qué decide la administración de calcio en la hiperpotasemia?', options: ['Los cambios electrocardiográficos', 'La cifra de potasio', 'La función renal', 'La presencia de acidosis metabólica asociada'], correct: 0, explanation: 'El calcio se indica ante cambios electrocardiográficos sugestivos. No baja el potasio: protege la membrana mientras las otras medidas hacen efecto.', dificultad: 'intermedio' },

  { q: '¿Cuál es la pauta de gluconato cálcico recomendada en 2023?', options: ['10 mL al 10% en 2 minutos', '30 mL al 10% en 15 minutos, como en 2014', '20 mL al 10% en 30 minutos', '30 mL al 10% en 10 minutos'], correct: 3, explanation: 'La versión de 2023 acortó el tiempo de administración a 10 minutos. El cloruro cálcico se reserva para el contexto de reanimación.', dificultad: 'dificil' },

  { q: '¿Cuál es la pauta de insulina-glucosa para la hiperpotasemia?', options: ['10 unidades con 25 g de glucosa', '5 unidades con 50 g de glucosa', '20 unidades con 25 g de glucosa', '10 unidades sin glucosa'], correct: 0, explanation: 'La guía recomienda 10 unidades de insulina soluble con 25 g de glucosa por vía intravenosa, con un protocolo de dos fases para evitar la hipoglucemia.', dificultad: 'intermedio' },

  { q: '¿Durante cuánto tiempo hay que vigilar la glucemia tras la insulina?', options: ['24 horas', '6 horas', '2 horas', '12 horas'], correct: 1, explanation: 'La versión de 2023 redujo la vigilancia de 12 a 6 horas. La hipoglucemia es la complicación yatrogénica más frecuente de este tratamiento.', dificultad: 'dificil' },

  { q: '¿Qué ocurrió con el resonium cálcico en la guía de 2023?', options: ['Se reservó para la hiperpotasemia leve ambulatoria', 'Se mantuvo igual que en 2014', 'Dejó de recomendarse en el tratamiento agudo', 'Pasó a ser de primera línea'], correct: 2, explanation: 'Se retiró del protocolo de tratamiento agudo. Los quelantes que la guía contempla son el ciclosilicato de sodio y circonio y el patirómero.', dificultad: 'dificil' },

  { q: '¿Qué dosis de salbutamol nebulizado se usa como adyuvante?', options: ['40 a 60 mg', '10 a 20 mg', '2.5 a 5 mg', '1 a 2 mg'], correct: 1, explanation: 'La guía recomienda 10 a 20 mg nebulizados como adyuvante en la hiperpotasemia grave, y lo sugiere en la moderada. Es una dosis muy superior a la broncodilatadora habitual.', dificultad: 'dificil' },

  { q: '¿Por qué vuelve a subir el potasio si solo se dan insulina y salbutamol?', options: ['Aumentan la liberación de potasio del músculo esquelético', 'Inhiben la excreción renal de potasio', 'Solo desplazan el potasio dentro de la célula', 'Pierden efecto por taquifilaxia rápida'], correct: 2, explanation: 'Son medidas transitorias de desplazamiento. Sin una medida que elimine potasio del cuerpo y sin tratar la causa, la cifra vuelve en unas horas.', dificultad: 'intermedio' },

  { q: 'Hiperpotasemia de 6.8 mmol/L detectada en la comunidad. ¿Qué corresponde?', options: ['Valoración hospitalaria urgente', 'Control analítico en 48 horas', 'Cita con su médico en una semana', 'Quelante oral y control mensual'], correct: 0, explanation: 'La guía recomienda valoración hospitalaria urgente para toda hiperpotasemia grave detectada fuera del hospital.', dificultad: 'intermedio' },

  { q: '¿Por qué la hipopotasemia refractaria responde tras reponer magnesio?', options: ['El magnesio estimula la bomba sodio-potasio', 'Sin magnesio se abren los canales ROMK y se pierde potasio', 'El magnesio aumenta la absorción intestinal del potasio de la dieta', 'El magnesio desplaza potasio fuera de la célula'], correct: 1, explanation: 'El magnesio intracelular bloquea los canales ROMK del túbulo colector. Si falta, el potasio se escapa por la orina por más que se reponga.', dificultad: 'dificil' },

  { q: '¿Cuál es el rango normal de magnesio sérico en el adulto?', options: ['0.5 a 1.2 mg/dL', '3.0 a 4.5 mg/dL', '2.5 a 3.5 mg/dL', '1.7 a 2.4 mg/dL'], correct: 3, explanation: 'El rango normal es de 1.7 a 2.4 mg/dL, equivalente a 0.7 a 1.0 mmol/L.', dificultad: 'intermedio' },

  { q: '¿Cuál es la PaCO2 esperada en una acidosis metabólica con bicarbonato de 12?', options: ['26 mmHg, con margen de 2', '32 mmHg, con un margen de 2 en cada sentido', '20 mmHg, con margen de 2', '40 mmHg, con margen de 2'], correct: 0, explanation: 'La fórmula es 1.5 por el bicarbonato más 8: 1.5 x 12 + 8 = 26 mmHg, con un margen de 2 en cada sentido.', dificultad: 'intermedio' },

  { q: '¿Cuánto hay que sumar al anion gap por cada g/dL de albúmina que falte?', options: ['0.5 mmol/L', '2.5 mmol/L', '1.0 mmol/L', '4.0 mmol/L'], correct: 1, explanation: 'Por cada g/dL de descenso de la albúmina, el anion gap calculado se incrementa en 2.5 mmol/L. Sin esa corrección, el paciente crítico aparenta un anion gap normal.', dificultad: 'dificil' },

  { q: '¿Qué significa que la respuesta secundaria quede fuera del rango esperado?', options: ['Hay un segundo trastorno superpuesto', 'La compensación todavía no ha dado tiempo', 'La muestra es de sangre venosa', 'El trastorno primario está mal identificado'], correct: 0, explanation: 'Es la forma de diagnosticar un trastorno mixto: si la respuesta del otro sistema no es la prevista, hay más de un trastorno actuando.', dificultad: 'intermedio' },

  {
    type: 'cascade',
    vignette: 'Mujer de 78 años en tratamiento con hidroclorotiazida acude por caída. Está somnolienta y ha vomitado dos veces. Sodio de 116 mmol/L, glucosa de 98 mg/dL, osmolalidad plasmática de 248 mOsm/kg. No se sabe desde cuándo está así.',
    steps: [
      { q: '¿Qué gravedad tiene y qué obliga a hacer?', options: ['Asintomática: observación', 'Grave: salino al 3% ya', 'Moderada: tratar la causa', 'Leve: solo restricción hídrica'], correct: 1, explanation: 'Los vómitos y la somnolencia profunda son síntomas graves. Obligan a tratar de inmediato con salino hipertónico, antes de completar el estudio.' },
      { q: '¿Cuál es el objetivo de las primeras infusiones?', options: ['Subir el sodio 5 mmol/L', 'Llevar el sodio a 130', 'Normalizar el sodio en 12 horas', 'Subir el sodio 10 mmol/L ya'], correct: 0, explanation: '150 mL de salino al 3% en 20 minutos, repetidos, buscando un ascenso de 5 mmol/L. Eso basta para reducir el edema cerebral.' },
      { q: '¿Cuál es el techo de las primeras 24 horas en esta paciente?', options: ['130 mmol/L', '126 mmol/L', '131 mmol/L', '124 mmol/L'], correct: 1, explanation: 'Partiendo de 116, el límite de 10 mmol/L en 24 horas sitúa el techo en 126. Al ser de duración desconocida se trata como crónica, que es la situación de riesgo.' }
    ],
    explanation: 'El caso junta las dos mitades del problema: tratar rápido porque hay síntomas graves, y a la vez fijar el techo de 24 horas desde el primer minuto.',
    dificultad: 'intermedio'
  },

  {
    type: 'cascade',
    vignette: 'Varón de 62 años con enfermedad renal crónica G4 acude por malestar. Potasio de 6.9 mmol/L. El electrocardiograma muestra ondas T picudas y ensanchamiento del QRS. No está en parada.',
    steps: [
      { q: '¿Cuál es la primera medida?', options: ['Salbutamol nebulizado 20 mg', 'Ciclosilicato de sodio y circonio', 'Gluconato cálcico 30 mL al 10%', 'Insulina con glucosa intravenosa'], correct: 2, explanation: 'Con cambios electrocardiográficos, lo primero es proteger la membrana con calcio. No baja el potasio, pero evita la arritmia mientras actúa el resto.' },
      { q: '¿En cuánto tiempo se administra ese gluconato cálcico?', options: ['2 minutos', '30 minutos', '60 minutos', '10 minutos'], correct: 3, explanation: 'La versión de 2023 fija 30 mL de gluconato cálcico al 10% en 10 minutos, acortando el tiempo que indicaba la versión anterior.' },
      { q: 'Tras calcio, insulina-glucosa y salbutamol, ¿qué falta?', options: ['Una medida que elimine potasio', 'Repetir el calcio a la hora', 'Una segunda dosis de salbutamol', 'Bicarbonato sódico intravenoso'], correct: 0, explanation: 'Las medidas dadas protegen y desplazan, pero no eliminan potasio del cuerpo. Sin quelante, diálisis o corrección de la causa, la cifra vuelve.' }
    ],
    explanation: 'Proteger, desplazar y eliminar son tres objetivos distintos. Quedarse en los dos primeros es el error que devuelve al paciente a urgencias.',
    dificultad: 'intermedio'
  },

  {
    type: 'cascade',
    vignette: 'Paciente de 55 años con cetoacidosis en tratamiento. Gasometría: pH 7.22, PaCO2 20 mmHg, bicarbonato 10 mmol/L. Sodio 138, cloro 98, albúmina 2.5 g/dL.',
    steps: [
      { q: '¿Cuál es el trastorno primario y la PaCO2 esperada?', options: ['Acidosis metabólica, PaCO2 de 23', 'Acidosis respiratoria, PaCO2 de 23', 'Acidosis metabólica, PaCO2 de 30', 'Alcalosis respiratoria, PaCO2 de 20'], correct: 0, explanation: 'pH bajo con bicarbonato bajo es acidosis metabólica. La esperada es 1.5 x 10 + 8 = 23 mmHg, con margen de 2.' },
      { q: 'Con PaCO2 observada de 20, ¿qué añade?', options: ['Nada: está en rango', 'Una alcalosis metabólica', 'Una alcalosis respiratoria', 'Una acidosis respiratoria añadida'], correct: 2, explanation: 'La esperada era de 21 a 25 y la observada es 20: por debajo del rango, de modo que hay una alcalosis respiratoria superpuesta.' },
      { q: '¿Cuál es el anion gap corregido por albúmina?', options: ['30.00 mmol/L', '26.25 mmol/L', '36.25 mmol/L', '33.75 mmol/L'], correct: 3, explanation: 'El anion gap es 138 - 98 - 10 = 30. Con albúmina de 2.5 faltan 1.5 g/dL, que suman 3.75: el corregido es 33.75. La opción de 30.00 es el anion gap sin corregir, que es el error habitual.' }
    ],
    explanation: 'Tres pasos que se hacen siempre en el mismo orden, y en los que la albúmina baja es el detalle que más veces se omite.',
    dificultad: 'dificil'
  },

  {
    type: 'cascade',
    vignette: 'Mujer de 44 años ingresada por diarrea de una semana. Potasio de 2.6 mmol/L. Se repone potasio por vía intravenosa durante 24 horas y el control sigue en 2.7 mmol/L. La función renal es normal.',
    steps: [
      { q: '¿Qué conviene medir antes de seguir reponiendo?', options: ['Renina plasmática', 'Magnesio sérico', 'Aldosterona plasmática', 'Cortisol basal'], correct: 1, explanation: 'La hipopotasemia que no responde obliga a medir magnesio: sin él, el potasio se pierde por la orina por más que se reponga.' },
      { q: '¿Cuál es el mecanismo?', options: ['El magnesio frena la bomba sodio-potasio', 'La hipomagnesemia causa alcalosis que oculta el potasio', 'El magnesio aumenta la captación celular de potasio', 'Sin magnesio se desbloquean los canales ROMK'], correct: 3, explanation: 'El magnesio intracelular bloquea los canales ROMK del túbulo colector. Al faltar, el potasio sale a la orina sin control.' },
      { q: '¿Cómo se repone entonces?', options: ['Primero potasio y luego magnesio', 'Solo magnesio hasta normalizarlo', 'Potasio oral a dosis altas', 'Magnesio y potasio a la vez'], correct: 3, explanation: 'Los dos a la vez. Reponer solo potasio no funciona, y esperar a normalizar el magnesio antes de empezar retrasa la corrección sin motivo.' }
    ],
    explanation: 'Pedir el magnesio junto con el potasio cuesta lo mismo y evita un día entero de reposición ineficaz.',
    dificultad: 'intermedio'
  },

  {
    type: 'cascade',
    vignette: 'Varón de 70 años con enfermedad pulmonar obstructiva crónica ingresa por disnea. Gasometría: pH 7.33, PaCO2 62 mmHg, bicarbonato 32 mmol/L. Refiere que su gasometría basal también mostraba retención de CO2.',
    steps: [
      { q: '¿Cuál es el trastorno primario?', options: ['Alcalosis respiratoria', 'Acidosis respiratoria', 'Alcalosis metabólica', 'Acidosis metabólica'], correct: 1, explanation: 'pH bajo con PaCO2 alta es acidosis respiratoria. El bicarbonato elevado es la respuesta metabólica, no un trastorno primario.' },
      { q: 'Si es crónica, ¿cuánto debería subir el bicarbonato?', options: ['1 mmol/L por cada 10 mmHg de PaCO2', '10 mmol/L por cada 10 mmHg de PaCO2 sobre 40', 'No debe subir en la forma crónica', '4 a 5 mmol/L por cada 10 mmHg de PaCO2'], correct: 3, explanation: 'En la acidosis respiratoria crónica el bicarbonato aumenta de 4 a 5 mmol/L por cada 10 mmHg de PaCO2 por encima de 40.' },
      { q: '¿Qué pasaría si el bicarbonato fuera de 24 con esa PaCO2?', options: ['Habría una alcalosis metabólica añadida', 'La muestra sería venosa', 'Habría una acidosis metabólica añadida', 'Sería la compensación normal aguda'], correct: 2, explanation: 'Con PaCO2 de 62 crónica se espera un bicarbonato en torno a 32. Si estuviera en 24, por debajo de lo previsto, habría además una acidosis metabólica.' }
    ],
    explanation: 'Distinguir agudo de crónico no es un matiz académico: cambia el bicarbonato que se considera normal y, con ello, el diagnóstico de trastorno mixto.',
    dificultad: 'dificil'
  },

  {
    type: 'cascade',
    vignette: 'Paciente de 68 años con hiponatremia crónica de 110 mmol/L por tiazidas. Se suspende el diurético y se inicia salino isotónico. A las 14 horas el sodio es de 123 mmol/L y la paciente tiene una diuresis abundante y muy diluida.',
    steps: [
      { q: '¿Cuánto ha subido y qué significa?', options: ['13 mmol/L: está dentro del límite', '9 mmol/L: está dentro del límite', '13 mmol/L: no hay límite si es por tiazidas', '13 mmol/L: se ha superado el límite'], correct: 3, explanation: 'De 110 a 123 son 13 mmol/L en 14 horas. El límite de las primeras 24 horas es de 10, así que ya se ha superado.' },
      { q: '¿Qué explica la subida tan rápida?', options: ['La propia hiponatremia crónica', 'La diuresis acuosa al retirar la causa', 'Un error de laboratorio en la última muestra', 'El salino isotónico administrado'], correct: 1, explanation: 'Al retirar la tiazida, el riñón recupera la capacidad de excretar agua libre y el sodio sube solo. Es la causa clásica de corrección excesiva involuntaria.' },
      { q: '¿Qué hay que hacer?', options: ['Mantener la pauta y recontrolar mañana', 'Acelerar para llegar a 130 cuanto antes', 'Administrar otro bolo de suero hipertónico al 3%', 'Detener el aporte y consultar de inmediato'], correct: 3, explanation: 'Se detiene el aporte de sodio y se consulta sin demora: existen medidas de rescate para volver a bajar el sodio, y el margen de tiempo es corto.' }
    ],
    explanation: 'La corrección excesiva más frecuente no la causa el suero que se infunde, sino la diuresis acuosa que aparece al quitar la causa.',
    dificultad: 'dificil'
  }
];

export const flashcards = [
  { front: '¿Qué mide el sodio plasmático?', back: 'Agua, no sal. Es un cociente entre sodio y agua corporales: baja cuando sobra agua.' },
  { front: '¿Qué marca la urgencia en una hiponatremia?', back: 'Los síntomas, no la cifra. Graves: vómitos, somnolencia profunda, convulsiones, coma.' },
  { front: 'Primer paso del algoritmo diagnóstico', back: 'Osmolalidad urinaria. Si es 100 mOsm/kg o menos, la causa es exceso relativo de agua y el algoritmo termina.' },
  { front: 'Osmolalidad urinaria mayor de 100: ¿qué sigue?', back: 'El sodio urinario en muestra simultánea. 30 mmol/L o menos indica volumen arterial efectivo bajo.' },
  { front: '¿Se mide vasopresina para confirmar la secreción inadecuada?', back: 'No: la guía sugiere en contra (2D).' },
  { front: 'Corrección del sodio por la glucosa', back: 'Sumar 2.4 mmol/L por cada 100 mg/dL de glucosa por encima de 100. El clásico 1.6 se queda corto.' },
  { front: 'Dosis inicial de salino al 3% con síntomas graves', back: '150 mL en 20 minutos, o 2 mL/kg si la composición corporal se desvía. Repetible.' },
  { front: 'Objetivo de las primeras horas', back: 'Subir el sodio 5 mmol/L, no normalizarlo. Con eso se reduce el edema cerebral.' },
  { front: '¿Cuándo se recontrola el sodio tras la primera infusión?', back: 'A los 20 minutos, mientras se repite una segunda infusión de 150 mL.' },
  { front: '¿Cuándo se para el hipertónico?', back: 'Cuando mejoran los síntomas, el ascenso total llega a 10 mmol/L o el sodio alcanza 130, lo que ocurra primero.' },
  { front: 'Límites de corrección del sodio', back: '10 mmol/L en las primeras 24 horas y 8 mmol/L en cada 24 horas siguiente, hasta llegar a 130.' },
  { front: '¿Por qué la desmielinización es cosa de la hiponatremia crónica?', back: 'Porque el cerebro ya expulsó osmoles y no puede recuperarlos al ritmo al que sube el sodio.' },
  { front: '¿Cuándo aparece la desmielinización osmótica?', back: 'De dos a seis días después de corregir, con disartria, disfagia y paraparesia. La resonancia puede ser normal al principio.' },
  { front: 'Trampa del potasio en la corrección del sodio', back: 'Corregir una hipopotasemia sube el sodio por sí misma: cuenta dentro del límite de 24 horas.' },
  { front: 'Causa frecuente de corrección excesiva involuntaria', back: 'La diuresis acuosa que aparece al retirar la causa (una tiazida, por ejemplo): el sodio sube solo.' },
  { front: 'Si los síntomas no mejoran tras subir 5 mmol/L', back: 'Seguir a 1 mmol/L por hora Y buscar otras causas de los síntomas.' },
  { front: 'Clasificación de la hiperpotasemia', back: 'Leve 5.5 a 5.9; moderada 6.0 a 6.4; grave 6.5 o más.' },
  { front: '¿Qué decide dar calcio en la hiperpotasemia?', back: 'Los cambios electrocardiográficos, no la cifra.' },
  { front: 'Pauta de gluconato cálcico (2023)', back: '30 mL al 10% en 10 minutos. Cloruro cálcico 10 mL al 10% en el contexto de reanimación.' },
  { front: 'Pauta de insulina-glucosa', back: '10 unidades de insulina soluble con 25 g de glucosa intravenosa, con protocolo de dos fases.' },
  { front: '¿Cuánto se vigila la glucemia después?', back: '6 horas. Es la complicación yatrogénica más frecuente de este tratamiento.' },
  { front: 'Salbutamol en la hiperpotasemia', back: 'Nebulizado 10 a 20 mg como adyuvante: una dosis muy superior a la broncodilatadora habitual.' },
  { front: '¿Qué pasó con el resonium cálcico?', back: 'Dejó de recomendarse de rutina en el tratamiento agudo en la guía de 2023.' },
  { front: 'Quelantes que contempla la guía de 2023', back: 'Ciclosilicato de sodio y circonio 10 g tres veces al día hasta 72 h, y patirómero 8.4 g.' },
  { front: 'Las tres acciones de la hiperpotasemia', back: 'Proteger (calcio), desplazar (insulina, salbutamol) y eliminar (quelante, diálisis). Sin la tercera, vuelve.' },
  { front: 'Hiperpotasemia grave en la comunidad', back: 'Valoración hospitalaria urgente. La moderada, valoración el mismo día.' },
  { front: 'Hipopotasemia que no responde', back: 'Medir magnesio: sin él, el potasio se escapa por los canales ROMK desbloqueados.' },
  { front: 'Magnesio sérico normal', back: '1.7 a 2.4 mg/dL (0.7 a 1.0 mmol/L).' },
  { front: 'PaCO2 esperada en la acidosis metabólica', back: '1.5 x bicarbonato + 8, con margen de 2.' },
  { front: 'PaCO2 esperada en la alcalosis metabólica', back: '0.7 x (bicarbonato - 24) + 40, con margen de 2.' },
  { front: 'Respiratorio crónico: ¿cuánto cambia el bicarbonato?', back: '4 a 5 mmol/L por cada 10 mmHg de PaCO2 que se desvíe de 40.' },
  { front: 'Corrección del anion gap por albúmina', back: 'Sumar 2.5 mmol/L por cada g/dL de albúmina por debajo de lo normal.' }
];

export default { quiz, flashcards };
