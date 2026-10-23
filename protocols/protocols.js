// protocols/protocols.js
// Protocolos académicos: teoría + fármacos/dosis + checklist interactivo.
// Material educativo basado en guías internacionales recientes; cada protocolo cita su fuente.
// Verificar siempre contra el protocolo y formulario de tu institución.

export const protocols = [
  {
    id: 'acls-paro',
    title: 'RCP / ACLS — paro cardíaco',
    subtitle: 'Soporte vital cardiovascular avanzado en el adulto',
    accent: '#8c3a34',
    source: 'American Heart Association, Parte 9 (soporte vital avanzado) de las Guías de 2025 para RCP y atención cardiovascular de emergencia: Wigginton JG, Agarwal S, Bartos JA, et al. Circulation. 2025;152(supl 2):S538-S577. doi:10.1161/CIR.0000000000001376.',
    theory: {
      caveat: 'La reanimación de este protocolo sigue la edición de 2025. El bloque de cuidados posparo es el único que todavía no se ha contrastado contra su fuente de 2025 (Parte 11: Hirsch KG, et al. Circulation. 2025;152(supl 2):S673-S718), que no está en la bibliografía del proyecto: esos dos pasos conservan las cifras de la edición de 2020 y van marcados como tales.',
      intro: 'El paro cardiorrespiratorio es la interrupción brusca de la circulación y la respiración efectivas. La supervivencia depende de la "cadena de supervivencia": reconocimiento inmediato y activación del sistema de respuesta, RCP precoz de alta calidad, desfibrilación temprana cuando el ritmo lo permite, soporte vital avanzado efectivo y cuidados post-paro estructurados. Cada minuto sin RCP ni desfibrilación en un ritmo desfibrilable reduce la supervivencia aproximadamente 7-10%.',
      keyPoints: [
        'La calidad de las compresiones (frecuencia, profundidad, reexpansión completa, mínimas interrupciones) influye más en el pronóstico que cualquier fármaco.',
        'El ritmo determina el algoritmo: los ritmos desfibrilables (FV/TV sin pulso) tienen mejor pronóstico que los no desfibrilables (asistolia/AESP).',
        'La adrenalina se administra en todos los ritmos, pero el momento difiere: en los no desfibrilables, <strong>cuanto antes</strong>; en los desfibrilables, <strong>después de que fallen los intentos iniciales de desfibrilación</strong>. La dosis alta no se recomienda de rutina, y la vasopresina (sola o añadida a la adrenalina) no aporta ventaja.',
        'El acceso vascular tiene orden, y es el inverso al que se ha extendido en la práctica: <strong>primero se intenta la vía intravenosa</strong>. La intraósea es la alternativa razonable si ese intento falla o no es viable, y la vía central queda para cuando fallan las dos. La administración de fármacos por el tubo endotraqueal se retiró de las guías.',
        'Calcio, bicarbonato y magnesio no se administran de rutina, y el beneficio de los esteroides es incierto. Los antiarrítmicos (amiodarona o lidocaína) solo se consideran cuando la FV/TV sin pulso no responde a la desfibrilación, y ninguno ha demostrado ser superior al otro.',
        'Buscar activamente causas reversibles (5H y 5T) en paralelo a la reanimación, no solo al final. La ecografía a pie de cama puede orientar, pero su utilidad para este fin no está establecida y nunca justifica interrumpir las compresiones.',
        'La capnografía cuantitativa (EtCO₂) es el método más fiable para confirmar y vigilar la posición del tubo, detecta el retorno de circulación espontánea (RCE) por un ascenso brusco y ayuda a vigilar la calidad de las compresiones. Para decidir cuándo parar, en el paciente <strong>intubado</strong> un EtCO₂ que no supera 10 mmHg tras 20 min de reanimación avanzada es solo un elemento más de una decisión multimodal; en el <strong>no intubado</strong>, ningún valor de corte debe usarse con ese fin.',
        'Tres maniobras que suelen improvisarse y que las guías no respaldan: el cambio de vector y la desfibrilación secuencial doble tras 3 o más descargas consecutivas tienen <strong>utilidad no establecida</strong>, y la RCP con la cabeza elevada <strong>no se recomienda</strong> fuera de ensayos clínicos.'
      ],
      drugs: [
        { name: 'Adrenalina (epinefrina)', dose: '1 mg IV cada 3-5 min (IO si no se logró la vía intravenosa)', indication: 'Todos los ritmos de paro', note: 'Ritmo no desfibrilable: cuanto antes. Ritmo desfibrilable: tras fallar los intentos iniciales de desfibrilación. Repetir hasta RCE o finalización de la reanimación.' },
        { name: 'Amiodarona', dose: '300 mg IV/IO bolo; 2.ª dosis 150 mg', indication: 'FV/TV sin pulso que no responde a la desfibrilación', note: 'Recomendación débil: se puede considerar. No sustituye a la desfibrilación ni a la RCP de calidad.' },
        { name: 'Lidocaína', dose: '1-1.5 mg/kg IV/IO; 2.ª dosis 0.5-0.75 mg/kg', indication: 'Alternativa a la amiodarona, con la misma fuerza de recomendación', note: 'Dosis acumulada máxima ≈3 mg/kg.' },
        { name: 'Sulfato de magnesio', dose: '1-2 g IV/IO', indication: 'Recurrencias de TV polimorfa con QT largo (torsade de pointes)', note: 'No de rutina en el paro. En la TV polimorfa con QT normal no se recomienda.' },
        { name: 'Bicarbonato de sodio', dose: '1 mEq/kg IV', indication: 'No de rutina: solo en circunstancias concretas (hiperkalemia, intoxicación por tricíclicos)', note: 'Esas indicaciones se detallan en la Parte 10 de las guías, no en el algoritmo general.' }
      ]
    },
    steps: [
      { phase: 'Reconocimiento e inicio', text: 'Verificar ausencia de respuesta, respiración y pulso (≤10 s)', note: 'Si no hay pulso: iniciar RCP y pedir ayuda / desfibrilador.' },
      { phase: 'Reconocimiento e inicio', text: 'RCP de alta calidad: 100-120 compresiones/min, profundidad 5-6 cm, permitir reexpansión completa', note: 'Minimizar interrupciones (<10 s). Relación 30:2 sin vía aérea avanzada.' },
      { phase: 'Reconocimiento e inicio', text: 'Colocar monitor/desfibrilador y analizar el ritmo', note: 'Definir si es desfibrilable (FV/TVsp) o no (asistolia/AESP).' },
      { phase: 'Reconocimiento e inicio', text: 'Conseguir acceso vascular: intentar primero una vía intravenosa', note: 'La intraósea es la alternativa razonable si el intento intravenoso falla o no es viable; la vía central, solo si fallan las dos y hay quien sepa colocarla.' },
      { phase: 'Reconocimiento e inicio', text: 'Diferir la vía aérea avanzada si colocarla va a interrumpir las compresiones', note: 'Se pospone hasta que el paciente no responda a la RCP y la desfibrilación iniciales, o hasta el RCE. Una vez colocada, confirmarla y vigilarla con capnografía continua.' },
      { phase: 'Ritmo desfibrilable (FV / TV sin pulso)', text: 'Desfibrilar con una descarga única, a la energía que indique el fabricante del equipo', note: 'Si esa dosis no se conoce, puede usarse la máxima. Descargas únicas, no apiladas, y reanudar la RCP inmediatamente durante 2 min tras cada una. Con un desfibrilador de energía escalable se puede subir la energía en las siguientes descargas.' },
      { phase: 'Ritmo desfibrilable (FV / TV sin pulso)', text: 'Adrenalina 1 mg cada 3-5 min, una vez que fallan los intentos iniciales de desfibrilación', note: 'Es el único punto en que el momento se separa del ritmo no desfibrilable: aquí la descarga va primero.' },
      { phase: 'Ritmo desfibrilable (FV / TV sin pulso)', text: 'Amiodarona 300 mg IV/IO (2.ª dosis 150 mg) o lidocaína, si la FV/TVsp no responde a la desfibrilación', note: 'Se pueden considerar; ninguna ha demostrado ser superior a la otra.' },
      { phase: 'Ritmo desfibrilable (FV / TV sin pulso)', text: 'Si la FV/TVsp persiste tras 3 o más descargas, no improvisar con el desfibrilador', note: 'El cambio de vector y la desfibrilación secuencial doble tienen utilidad no establecida: no sustituyen a seguir con RCP de calidad y a buscar causas reversibles.' },
      { phase: 'Ritmo NO desfibrilable (asistolia / AESP)', text: 'Adrenalina 1 mg IV/IO cada 3-5 min lo antes posible', note: 'No se desfibrila.' },
      { phase: 'Ritmo NO desfibrilable (asistolia / AESP)', text: 'RCP 2 min y reanálisis del ritmo cíclico', note: '' },
      { phase: 'Causas reversibles (5H y 5T)', text: 'Buscar y tratar: Hipoxia, Hipovolemia, H⁺ (acidosis), Hipo/Hiperkalemia, Hipotermia', note: '' },
      { phase: 'Causas reversibles (5H y 5T)', text: 'Buscar y tratar: Neumotórax a Tensión, Taponamiento, Tóxicos, Trombosis coronaria, Trombosis pulmonar', note: '' },
      { phase: 'Post-paro (si RCE)', text: 'Optimizar oxigenación (SpO₂ 92-98%) y ventilación; evitar hiperoxia e hipocapnia', note: 'Cifras de la edición de 2020: este bloque es el único del protocolo que aún no se ha contrastado contra la Parte 11 de las guías de 2025.' },
      { phase: 'Post-paro (si RCE)', text: 'PAM ≥65 mmHg, ECG de 12 derivaciones, considerar angiografía; manejo dirigido de temperatura (32-36 °C)', note: 'El control de temperatura es lo que más conviene verificar: la Parte 11 de 2025 revisa objetivo y duración.' }
    ]
  },
  {
    id: 'rsi-intubacion',
    title: 'Intubación de secuencia rápida (RSI)',
    subtitle: 'Vía aérea de emergencia — las 7 P',
    accent: '#3d5a73',
    source: 'Estándar de práctica en medicina de urgencias/cuidados críticos (p. ej. Walls, Manual of Emergency Airway Management, 5.ª ed.).',
    theory: {
      intro: 'La secuencia de intubación rápida (RSI) es la administración casi simultánea de un fármaco de inducción y un bloqueador neuromuscular para lograr condiciones óptimas de intubación en el menor tiempo posible, minimizando el riesgo de aspiración y el tiempo con la vía aérea desprotegida. Se organiza clásicamente en las "7 P": Preparación, Preoxigenación, Pretratamiento (hoy menos enfatizado), Parálisis con inducción, Posicionamiento, Paso del tubo con comprobación, y cuidados Post-intubación.',
      keyPoints: [
        'La preoxigenación adecuada (3 min a FiO₂ 100%, o técnicas de oxigenación apneica) es el factor más modificable para evitar la desaturación durante el procedimiento.',
        'La elección del inductor depende de la hemodinamia del paciente, no de una preferencia fija: etomidato o ketamina en inestabilidad; ninguno está exento de riesgos.',
        'La succinilcolina tiene el inicio de acción más rápido, pero sus contraindicaciones (hiperkalemia, quemados, lesión medular) obligan a conocer bien cuándo usar rocuronio.',
        'La confirmación de la posición del tubo debe ser objetiva (capnografía), no solo auscultación.',
        'Todo paciente con vía aérea difícil anticipada (regla LEMON) requiere un plan A/B/C explícito antes de administrar cualquier fármaco.'
      ],
      drugs: [
        { name: 'Etomidato', dose: '0.3 mg/kg IV', indication: 'Inducción; buena estabilidad hemodinámica', note: 'Evitar en sepsis/choque séptico por supresión adrenal transitoria (controvertido, individualizar).' },
        { name: 'Ketamina', dose: '1-2 mg/kg IV', indication: 'Inducción en hipotensión, broncoespasmo/asma', note: 'Precaución en cardiopatía isquémica o HTA no controlada (efecto simpaticomimético).' },
        { name: 'Propofol', dose: '1.5-2.5 mg/kg IV', indication: 'Inducción en paciente hemodinámicamente estable', note: 'Evitar o reducir dosis si hay inestabilidad — causa vasodilatación e hipotensión.' },
        { name: 'Succinilcolina', dose: '1-1.5 mg/kg IV', indication: 'Bloqueo neuromuscular; inicio ultrarrápido (45-60 s), duración 6-10 min', note: 'Contraindicada: hiperkalemia, quemados/inmovilización >24-72h, lesión medular, enfermedad neuromuscular.' },
        { name: 'Rocuronio', dose: '1.2 mg/kg IV', indication: 'Bloqueo neuromuscular cuando la succinilcolina está contraindicada', note: 'Inicio ≈60 s a dosis alta; duración más prolongada (45-60 min); reversible con sugammadex.' }
      ]
    },
    steps: [
      { phase: '1. Preparación', text: 'Material listo: aspiración, O₂, laringoscopio/videolaringoscopio, tubos (con neumo verificado), bougie, dispositivo supraglótico de rescate, capnografía', note: 'Regla nemotécnica SOAP-ME.' },
      { phase: '1. Preparación', text: 'Accesos IV, monitorización completa, evaluar vía aérea difícil (LEMON), plan A/B/C', note: '' },
      { phase: '2. Preoxigenación', text: 'O₂ al 100% durante 3 min (o 8 respiraciones a capacidad vital); considerar VNI/oxígeno apneico', note: 'Meta SpO₂ ≥95% antes de inducir.' },
      { phase: '3. Optimización (pre-intubación)', text: 'Optimizar hemodinamia y posición (olfateo / rampa en obesidad); corregir hipotensión', note: 'Reduce el riesgo de colapso peri-intubación.' },
      { phase: '4. Parálisis con inducción', text: 'Inducción: etomidato 0.3 mg/kg (o ketamina 1-2 mg/kg si hipotensión/broncoespasmo)', note: 'Elegir según hemodinamia.' },
      { phase: '4. Parálisis con inducción', text: 'Bloqueo neuromuscular: succinilcolina 1-1.5 mg/kg o rocuronio 1.2 mg/kg', note: 'Rocuronio si contraindicada la succinilcolina (hiperK, quemados, etc.).' },
      { phase: '5. Posicionamiento y paso del tubo', text: 'Laringoscopia cuando haya relajación (~45-60 s); paso del tubo bajo visión directa', note: '' },
      { phase: '6. Comprobación de posición', text: 'Confirmar con capnografía (EtCO₂), auscultación y elevación torácica simétrica', note: 'La capnografía es el estándar de confirmación.' },
      { phase: '7. Manejo post-intubación', text: 'Fijar el tubo, iniciar sedoanalgesia, ventilación protectora (Vt 6-8 mL/kg peso ideal), Rx de tórax', note: '' }
    ]
  },
  {
    id: 'sepsis-1h',
    title: 'Bundle de sepsis (1 hora)',
    subtitle: 'Paquete inicial de sepsis / choque séptico',
    accent: '#3f6b52',
    source: 'Surviving Sepsis Campaign 2026 (Prescott HC, et al. Intensive Care Med 2026, doi:10.1007/s00134-026-08361-1).',
    theory: {
      intro: 'El manejo inicial de la sepsis y el choque séptico se organiza en un paquete de medidas que debe iniciarse desde el reconocimiento, con la administración de antibióticos dentro de la primera hora en choque séptico. El objetivo es acortar el tiempo hasta el control de la infección y la restauración de la perfusión tisular, ya que el retraso en cada componente se asocia con mayor mortalidad.',
      keyPoints: [
        'El lactato guía tanto el diagnóstico de hipoperfusión como la respuesta a la reanimación: importa su tendencia (aclaramiento), no solo el valor inicial. Una elevación intermedia (>2 a <4 mmol/L) ya es clínicamente relevante, no solo ≥4.',
        'El cribado del paciente agudo hospitalizado se hace con NEWS, NEWS2, MEWS o SIRS, por encima del qSOFA (recomendación fuerte, certeza moderada): la sensibilidad del qSOFA es baja y deja escapar pacientes. Un qSOFA positivo sigue siendo una alerta válida de deterioro, pero no sirve como herramienta única de tamizaje.',
        'Los hemocultivos se obtienen antes de los antibióticos, pero sin retrasarlos — nunca posponer el antibiótico por falta de acceso para cultivos.',
        'Secuencia recomendada: bolo de cristaloides primero, vasopresor después si la hipotensión persiste; en choque inestable (hipotensión severa, piel moteada, cianosis, alteración mental marcada) puede justificarse iniciar ambos de forma simultánea.',
        'La meta de presión arterial media (PAM) inicial es 65 mmHg; en adultos ≥65 años se sugiere un rango algo más bajo (60-65 mmHg), con evidencia reciente de que apuntar más alto en este grupo no aporta beneficio y puede asociarse a más fibrilación auricular.',
        'Los vasopresores pueden iniciarse por vía periférica; no es necesario retrasar su inicio esperando un acceso venoso central.',
        'El control del foco (drenaje, desbridamiento, retiro de dispositivos infectados) debe buscarse activamente, idealmente dentro de las primeras 6 horas tras el diagnóstico.',
        'El tiempo de llenado capilar es un parámetro sencillo y reproducible que puede usarse como complemento (no sustituto) de lactato y diuresis para guiar la reanimación.'
      ],
      drugs: [
        { name: 'Cristaloides (Ringer lactato o salino balanceado)', dose: '≥30 mL/kg IV en las primeras 3h', indication: 'Hipoperfusión inducida por sepsis o choque séptico', note: 'Calcular con peso corporal real, o ajustado/ideal si IMC >30. Reevaluar con parámetros dinámicos; evitar sobrecarga.' },
        { name: 'Noradrenalina', dose: '0.05-0.5 mcg/kg/min IV, titulada; puede iniciarse por vía periférica', indication: 'Vasopresor de primera línea; meta PAM ≥65 mmHg (60-65 en ≥65 años)', note: 'Iniciar tras el bolo de cristaloides si persiste hipotensión (o de forma simultánea si el choque es inestable).' },
        { name: 'Vasopresina', dose: 'Añadir con noradrenalina en dosis crecientes (equivalente ≈0.3 mcg/kg/min)', indication: 'Choque séptico con dosis escalantes de noradrenalina', note: 'Reduce la dosis de noradrenalina necesaria; vigilar isquemia digital.' },
        { name: 'Adrenalina', dose: 'Añadir si la PAM sigue inadecuada pese a noradrenalina + vasopresina', indication: 'Choque refractario, o como alternativa de primera línea junto con noradrenalina si hay disfunción cardiaca concomitante', note: 'Preferir noradrenalina si taquiarritmia; adrenalina si bradiarritmia.' },
        { name: 'Hidrocortisona', dose: '200 mg/día IV (dosis fraccionadas cada 6h, no en infusión continua)', indication: 'Choque séptico; la SSC 2026 la sugiere sin exigir que sea refractario (recomendación condicional, certeza baja)', note: 'No usar dosis mayores a 260 mg/día equivalentes: no hay beneficio adicional demostrado.' },
        { name: 'Antibiótico empírico de amplio espectro', dose: 'Según foco sospechado y epidemiología local', indication: 'Inmediato (<1h) en choque séptico o sepsis probable/definitiva; hasta 3h si sepsis posible sin choque', note: 'Considerar dosis prehospitalaria si el traslado al hospital se prevé >60 min. Desescalar según cultivos.' }
      ]
    },
    steps: [
      { phase: 'Reconocimiento e inicio', text: 'Cribar con NEWS, NEWS2, MEWS o SIRS al paciente agudo, no con el qSOFA como herramienta única', note: 'Recomendación fuerte de la SSC 2026 por la baja sensibilidad del qSOFA.' },
      { phase: 'Reconocimiento e inicio', text: 'Medir lactato sérico', note: 'Repetir en 2-4 h para evaluar aclaramiento y guiar la reanimación.' },
      { phase: 'Reconocimiento e inicio', text: 'Obtener hemocultivos ANTES de los antibióticos, sin retrasarlos', note: '' },
      { phase: 'Reconocimiento e inicio', text: 'Iniciar antibióticos de amplio espectro dentro de la 1.ª hora (choque séptico o sepsis probable/definitiva)', note: 'Hasta 3h aceptable si sepsis posible sin choque, tras evaluación rápida de causa infecciosa vs. no infecciosa.' },
      { phase: 'Reanimación inicial', text: 'Cristaloides ≥30 mL/kg IV en las primeras 3h si hay hipoperfusión o choque séptico', note: 'Reevaluar con parámetros dinámicos; evitar sobrecarga de volumen.' },
      { phase: 'Reanimación inicial', text: 'Vasopresor (noradrenalina, puede ser periférica) si la hipotensión persiste tras el bolo — meta PAM 65 mmHg (60-65 en ≥65 años)', note: 'En choque inestable, considerar iniciar junto con los líquidos en vez de esperar.' },
      { phase: 'Reanimación inicial', text: 'Escalar a vasopresina y luego adrenalina si persiste hipotensión pese a dosis crecientes de noradrenalina', note: 'Considerar hidrocortisona 200 mg/día: la SSC 2026 la sugiere en el choque séptico, no solo en el refractario.' },
      { phase: 'Control del foco', text: 'Identificar el foco y realizar el control definitivo (drenaje, desbridamiento, retiro de dispositivo) dentro de las primeras 6h del diagnóstico', note: '' },
      { phase: 'Reevaluación', text: 'Reevaluar el estado volémico y la perfusión (relleno capilar, lactato, diuresis)', note: 'Desescalar antibiótico según cultivos.' }
    ]
  }
];

export default protocols;
