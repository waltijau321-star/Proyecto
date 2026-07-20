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
    source: 'American Heart Association, Guías de ACLS 2020 (Circulation 2020;142:S366).',
    theory: {
      intro: 'El paro cardiorrespiratorio es la interrupción brusca de la circulación y la respiración efectivas. La supervivencia depende de la "cadena de supervivencia": reconocimiento inmediato y activación del sistema de respuesta, RCP precoz de alta calidad, desfibrilación temprana cuando el ritmo lo permite, soporte vital avanzado efectivo y cuidados post-paro estructurados. Cada minuto sin RCP ni desfibrilación en un ritmo desfibrilable reduce la supervivencia aproximadamente 7-10%.',
      keyPoints: [
        'La calidad de las compresiones (frecuencia, profundidad, reexpansión completa, mínimas interrupciones) influye más en el pronóstico que cualquier fármaco.',
        'El ritmo determina el algoritmo: los ritmos desfibrilables (FV/TV sin pulso) tienen mejor pronóstico que los no desfibrilables (asistolia/AESP).',
        'La adrenalina se administra en todos los ritmos, pero el momento óptimo difiere: precoz en los no desfibrilables, tras la 2.ª descarga en los desfibrilables.',
        'Buscar activamente causas reversibles (5H y 5T) en paralelo a la reanimación, no solo al final.',
        'La capnografía cuantitativa (EtCO₂) confirma la posición del tubo y es un marcador indirecto de la calidad de las compresiones y del retorno de circulación espontánea (RCE).'
      ],
      drugs: [
        { name: 'Adrenalina (epinefrina)', dose: '1 mg IV/IO cada 3-5 min', indication: 'Todos los ritmos de paro', note: 'Repetir hasta RCE o finalización de la reanimación.' },
        { name: 'Amiodarona', dose: '300 mg IV/IO bolo; 2.ª dosis 150 mg', indication: 'FV/TV sin pulso refractaria tras la 3.ª descarga', note: 'Antiarrítmico de elección en ritmos desfibrilables refractarios.' },
        { name: 'Lidocaína', dose: '1-1.5 mg/kg IV/IO; 2.ª dosis 0.5-0.75 mg/kg', indication: 'Alternativa a la amiodarona', note: 'Dosis acumulada máxima ≈3 mg/kg.' },
        { name: 'Sulfato de magnesio', dose: '1-2 g IV/IO', indication: 'Torsade de pointes o hipomagnesemia documentada', note: 'No usar de rutina en todo paro.' },
        { name: 'Bicarbonato de sodio', dose: '1 mEq/kg IV', indication: 'Hiperkalemia, acidosis metabólica grave preexistente, sobredosis de tricíclicos', note: 'No usar de rutina.' }
      ]
    },
    steps: [
      { phase: 'Reconocimiento e inicio', text: 'Verificar ausencia de respuesta, respiración y pulso (≤10 s)', note: 'Si no hay pulso: iniciar RCP y pedir ayuda / desfibrilador.' },
      { phase: 'Reconocimiento e inicio', text: 'RCP de alta calidad: 100-120 compresiones/min, profundidad 5-6 cm, permitir reexpansión completa', note: 'Minimizar interrupciones (<10 s). Relación 30:2 sin vía aérea avanzada.' },
      { phase: 'Reconocimiento e inicio', text: 'Colocar monitor/desfibrilador y analizar el ritmo', note: 'Definir si es desfibrilable (FV/TVsp) o no (asistolia/AESP).' },
      { phase: 'Ritmo desfibrilable (FV / TV sin pulso)', text: 'Desfibrilar: bifásico 120-200 J (o máximo del fabricante)', note: 'Reanudar RCP inmediatamente por 2 min tras cada descarga.' },
      { phase: 'Ritmo desfibrilable (FV / TV sin pulso)', text: 'Adrenalina 1 mg IV/IO cada 3-5 min', note: 'Tras la 2.ª descarga.' },
      { phase: 'Ritmo desfibrilable (FV / TV sin pulso)', text: 'Amiodarona 300 mg IV/IO (2.ª dosis 150 mg) o lidocaína', note: 'Para FV/TV refractaria tras la 3.ª descarga.' },
      { phase: 'Ritmo NO desfibrilable (asistolia / AESP)', text: 'Adrenalina 1 mg IV/IO cada 3-5 min lo antes posible', note: 'No se desfibrila.' },
      { phase: 'Ritmo NO desfibrilable (asistolia / AESP)', text: 'RCP 2 min y reanálisis del ritmo cíclico', note: '' },
      { phase: 'Causas reversibles (5H y 5T)', text: 'Buscar y tratar: Hipoxia, Hipovolemia, H⁺ (acidosis), Hipo/Hiperkalemia, Hipotermia', note: '' },
      { phase: 'Causas reversibles (5H y 5T)', text: 'Buscar y tratar: Neumotórax a Tensión, Taponamiento, Tóxicos, Trombosis coronaria, Trombosis pulmonar', note: '' },
      { phase: 'Post-paro (si RCE)', text: 'Optimizar oxigenación (SpO₂ 92-98%) y ventilación; evitar hiperoxia e hipocapnia', note: '' },
      { phase: 'Post-paro (si RCE)', text: 'PAM ≥65 mmHg, ECG de 12 derivaciones, considerar angiografía; manejo dirigido de temperatura (32-36 °C)', note: '' }
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
    source: 'Surviving Sepsis Campaign 2026 (Prescott HC, et al. Crit Care Med 2026;54(4):725-812).',
    theory: {
      intro: 'El manejo inicial de la sepsis y el choque séptico se organiza en un paquete de medidas que debe iniciarse desde el reconocimiento, con la administración de antibióticos dentro de la primera hora en choque séptico. El objetivo es acortar el tiempo hasta el control de la infección y la restauración de la perfusión tisular, ya que el retraso en cada componente se asocia con mayor mortalidad.',
      keyPoints: [
        'El lactato guía tanto el diagnóstico de hipoperfusión como la respuesta a la reanimación: importa su tendencia (aclaramiento), no solo el valor inicial. Una elevación intermedia (>2 a <4 mmol/L) ya es clínicamente relevante, no solo ≥4.',
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
        { name: 'Hidrocortisona', dose: '200 mg/día IV (dosis fraccionadas cada 6h, no en infusión continua)', indication: 'Choque séptico con vasopresores persistentes pese a reanimación adecuada', note: 'No usar dosis mayores a 260 mg/día equivalentes — sin beneficio adicional demostrado.' },
        { name: 'Antibiótico empírico de amplio espectro', dose: 'Según foco sospechado y epidemiología local', indication: 'Inmediato (<1h) en choque séptico o sepsis probable/definitiva; hasta 3h si sepsis posible sin choque', note: 'Considerar dosis prehospitalaria si el traslado al hospital se prevé >60 min. Desescalar según cultivos.' }
      ]
    },
    steps: [
      { phase: 'Reconocimiento e inicio', text: 'Medir lactato sérico', note: 'Repetir en 2-4 h para evaluar aclaramiento y guiar la reanimación.' },
      { phase: 'Reconocimiento e inicio', text: 'Obtener hemocultivos ANTES de los antibióticos, sin retrasarlos', note: '' },
      { phase: 'Reconocimiento e inicio', text: 'Iniciar antibióticos de amplio espectro dentro de la 1.ª hora (choque séptico o sepsis probable/definitiva)', note: 'Hasta 3h aceptable si sepsis posible sin choque, tras evaluación rápida de causa infecciosa vs. no infecciosa.' },
      { phase: 'Reanimación inicial', text: 'Cristaloides ≥30 mL/kg IV en las primeras 3h si hay hipoperfusión o choque séptico', note: 'Reevaluar con parámetros dinámicos; evitar sobrecarga de volumen.' },
      { phase: 'Reanimación inicial', text: 'Vasopresor (noradrenalina, puede ser periférica) si la hipotensión persiste tras el bolo — meta PAM 65 mmHg (60-65 en ≥65 años)', note: 'En choque inestable, considerar iniciar junto con los líquidos en vez de esperar.' },
      { phase: 'Reanimación inicial', text: 'Escalar a vasopresina y luego adrenalina si persiste hipotensión pese a dosis crecientes de noradrenalina', note: 'Considerar hidrocortisona 200 mg/día si el choque es refractario.' },
      { phase: 'Control del foco', text: 'Identificar el foco y realizar el control definitivo (drenaje, desbridamiento, retiro de dispositivo) dentro de las primeras 6h del diagnóstico', note: '' },
      { phase: 'Reevaluación', text: 'Reevaluar el estado volémico y la perfusión (relleno capilar, lactato, diuresis)', note: 'Desescalar antibiótico según cultivos.' }
    ]
  }
];

export default protocols;
