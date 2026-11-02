// topics/ventilacion-mecanica/content.js: Ventilacion Mecanica.
// Cubre el item "Ventilacion mecanica invasiva y no invasiva" del bloque III (Neumologia,
// cluster "Insuficiencia respiratoria y ventilacion") del temario. "Insuficiencia respiratoria
// aguda y SDRA" es un item aparte: aqui la SDRA y el obstructivo entran solo como escenarios de
// ajuste ventilatorio.
//
// Alcance (decision del usuario): tecnica ventilatoria + via aerea (intubacion de secuencia
// rapida, tubo, traqueostomia) + sedoanalgesia y bloqueo neuromuscular del paciente ventilado.
//
// Estructura: tema-monografia estilo Vasopresores. `modalLabels` global reetiqueta los campos
// genericos del motor como "modalidad o escenario"; las 4 tarjetas de complicacion llevan
// `modalLabels` por item que restauran etiquetas de complicacion (el motor mergea
// DEFAULT_LABELS <- TOPIC.modalLabels <- c.modalLabels). 6 modalidades/escenarios (via aerea e
// inicio de VM invasiva; VNI; canula de alto flujo; modos controlados y ventilacion protectora;
// modos asistidos y sedoanalgesia; destete) + 4 complicaciones (VILI; neumonia asociada a
// ventilacion; asincronias; debilidad y disfuncion diafragmatica con repercusion hemodinamica).
// 7 calculadoras. 7 figuras SVG/HTML a mano: 4 en Definicion (intercambio gaseoso, espontanea
// vs presion positiva, anatomia de la curva del ventilador y tabla de parametros) mas 3 en las
// tarjetas (PEEP/FiO2 de ARDSNet, algoritmo de destete, bucle P-V y asincronias). La seccion de
// Definicion es un minicapitulo largo a proposito: fisiologia respiratoria y parametros primero.
// Sin em dash (ver [[feedback-no-em-dash]]).

export const meta = {
  id: 'ventilacion-mecanica',
  titulo: 'Ventilación Mecánica',
  subtitulo: 'Módulo 37 · Medicina Interna',
  accent: '#2e6b7a',
  accentDim: '#8fb3bd'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

// Figura 1: por que oxigenar y ventilar son cosas distintas (cortocircuito, unidad normal,
// espacio muerto). Tres unidades alveolo-capilares.
const intercambioHtml = `
<div style="max-width:560px;margin:0 auto;font-size:10px;color:var(--ink);">
  <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="vm-f1-t vm-f1-d" style="width:100%;max-width:440px;display:block;margin:0 auto;">
    <title id="vm-f1-t">Cortocircuito, unidad normal y espacio muerto</title>
    <desc id="vm-f1-d">Tres unidades alveolo-capilares. En el cortocircuito el alveolo esta colapsado u ocupado y la sangre pasa sin oxigenarse, lo que da hipoxemia que no corrige al subir el oxígeno. En la unidad normal la ventilación y la perfusión están acopladas y la sangre se oxigena. En el espacio muerto el alveolo se ventila pero no le llega sangre, por lo que no se elimina CO2.</desc>
    <text x="66" y="13" text-anchor="middle" fill="#8c3a34" font-size="9" font-weight="700">Cortocircuito</text>
    <circle cx="66" cy="48" r="24" fill="#8c3a3422" stroke="#8c3a34" stroke-dasharray="4 3"/>
    <text x="66" y="51" text-anchor="middle" fill="#8c3a34" font-size="7.5">colapsado</text>
    <rect x="34" y="82" width="64" height="9" rx="4" fill="#3d5a73"/>
    <text x="66" y="106" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">sangre sin oxigenar</text>
    <text x="66" y="118" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">no corrige con O2</text>
    <text x="200" y="13" text-anchor="middle" fill="#3f6b52" font-size="9" font-weight="700">Unidad normal</text>
    <circle cx="200" cy="48" r="24" fill="var(--panel2)" stroke="var(--line)"/>
    <text x="200" y="51" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">abierto</text>
    <rect x="168" y="82" width="32" height="9" fill="#3d5a73"/>
    <rect x="200" y="82" width="32" height="9" fill="#8c3a34"/>
    <text x="200" y="106" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">ventilación y perfusión</text>
    <text x="200" y="118" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">acopladas</text>
    <text x="334" y="13" text-anchor="middle" fill="#8a6a1f" font-size="9" font-weight="700">Espacio muerto</text>
    <circle cx="334" cy="48" r="24" fill="var(--panel2)" stroke="var(--line)"/>
    <text x="334" y="51" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">abierto</text>
    <rect x="302" y="82" width="64" height="9" rx="4" fill="none" stroke="#8a6a1f" stroke-dasharray="3 2"/>
    <line x1="316" y1="84" x2="352" y2="89" stroke="#8a6a1f"/><line x1="352" y1="84" x2="316" y2="89" stroke="#8a6a1f"/>
    <text x="334" y="106" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">ventilado sin perfusión</text>
    <text x="334" y="118" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">no elimina CO2</text>
  </svg>
  <div style="color:var(--ink-dim);margin-top:4px;">El cortocircuito da hipoxemia refractaria al oxígeno (se trata con PEEP, reclutamiento y decúbito prono); el espacio muerto compromete la eliminación de CO2. La mayoría de los pacientes tiene una mezcla de unidades con relación ventilación-perfusión baja y alta.</div>
</div>`;

// Figura 2: respiracion espontanea (presion pleural negativa) frente a presion positiva
// (presion pleural que se vuelve positiva) y sus efectos hemodinamicos.
const espontVsPPHtml = `
<div style="max-width:560px;margin:0 auto;font-size:10px;color:var(--ink);">
  <svg viewBox="0 0 400 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="vm-f2-t vm-f2-d" style="width:100%;max-width:440px;display:block;margin:0 auto;">
    <title id="vm-f2-t">Respiración espontánea frente a ventilación con presión positiva</title>
    <desc id="vm-f2-d">En la respiración espontánea el diafragma baja y genera una presión pleural negativa que expande el pulmón y favorece el retorno venoso. En la ventilación con presión positiva el gas se empuja hacia dentro, la presión pleural se vuelve menos negativa o positiva, disminuye el retorno venoso y se reduce la poscarga del ventrículo izquierdo.</desc>
    <text x="100" y="13" text-anchor="middle" fill="var(--accent-fg)" font-size="9" font-weight="700">Respiración espontánea</text>
    <rect x="42" y="22" width="116" height="98" rx="10" fill="var(--panel2)" stroke="var(--line)"/>
    <ellipse cx="82" cy="60" rx="15" ry="24" fill="none" stroke="var(--ink-dim)"/>
    <ellipse cx="118" cy="60" rx="15" ry="24" fill="none" stroke="var(--ink-dim)"/>
    <path d="M56 100 q44 14 88 0" fill="none" stroke="var(--ink-dim)" stroke-width="2"/>
    <path d="M100 104 l0 12 m-4 -5 l4 5 l4 -5" stroke="#3f6b52" stroke-width="2" fill="none"/>
    <text x="100" y="138" text-anchor="middle" fill="var(--ink)" font-size="8">presión pleural -5 a -8 cmH2O</text>
    <text x="100" y="151" text-anchor="middle" fill="#3f6b52" font-size="8">favorece el retorno venoso</text>
    <text x="300" y="13" text-anchor="middle" fill="var(--accent-fg)" font-size="9" font-weight="700">Presión positiva</text>
    <rect x="242" y="22" width="116" height="98" rx="10" fill="var(--panel2)" stroke="var(--line)"/>
    <path d="M300 16 l0 14 m-4 -5 l4 5 l4 -5" stroke="#8c3a34" stroke-width="2" fill="none"/>
    <ellipse cx="282" cy="62" rx="17" ry="27" fill="#2e6b7a22" stroke="var(--ink-dim)"/>
    <ellipse cx="318" cy="62" rx="17" ry="27" fill="#2e6b7a22" stroke="var(--ink-dim)"/>
    <text x="300" y="138" text-anchor="middle" fill="var(--ink)" font-size="8">presión pleural -2 a +2 cmH2O</text>
    <text x="300" y="151" text-anchor="middle" fill="#8c3a34" font-size="8">baja el retorno venoso; baja la poscarga del VI</text>
  </svg>
</div>`;

// Figura 3: anatomia de una respiracion mecanica (volumen control con flujo constante y pausa
// inspiratoria). Curva de presion-tiempo y de flujo-tiempo con los parametros rotulados.
const curvaAnatomiaHtml = `
<div style="max-width:560px;margin:0 auto;font-size:10px;color:var(--ink);">
  <svg viewBox="0 0 360 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="vm-f3-t vm-f3-d" style="width:100%;max-width:400px;display:block;margin:0 auto;">
    <title id="vm-f3-t">Curva de presión y de flujo en la via aérea con los parámetros del ventilador</title>
    <desc id="vm-f3-d">Arriba, la presión en la via aérea sube durante la inspiración hasta la presión pico, cae a la presión meseta durante la pausa inspiratoria sin flujo, y vuelve a la PEEP en la espiración. La diferencia entre la meseta y la PEEP es la presión de distensión y la diferencia entre la pico y la meseta es el componente resistivo. Abajo, el flujo inspiratorio es constante y el espiratorio decae hasta cero antes de la siguiente respiración, lo que indica que no hay auto-PEEP.</desc>
    <text x="6" y="12" fill="var(--ink-dim)" font-size="9">Presión en la via aérea (cmH2O)</text>
    <line x1="34" y1="118" x2="340" y2="118" stroke="var(--line)"/>
    <line x1="34" y1="20" x2="34" y2="118" stroke="var(--line)"/>
    <line x1="34" y1="96" x2="340" y2="96" stroke="var(--line)" stroke-dasharray="3 3"/>
    <text x="300" y="110" fill="var(--ink-dim)" font-size="8">PEEP</text>
    <path d="M34 96 L44 96 L92 34 L150 34 L150 52 L196 52 L206 96 L300 96 L300 96" fill="none" stroke="#2e6b7a" stroke-width="2"/>
    <path d="M300 96 L310 34 L340 34" fill="none" stroke="#2e6b7a" stroke-width="2" opacity="0.4"/>
    <text x="120" y="30" text-anchor="middle" fill="#8c3a34" font-size="8">pico</text>
    <text x="172" y="49" text-anchor="middle" fill="#8a6a1f" font-size="8">meseta (pausa)</text>
    <line x1="326" y1="34" x2="326" y2="52" stroke="#8c3a34" stroke-width="1"/>
    <text x="330" y="45" fill="#8c3a34" font-size="7">resistencia</text>
    <line x1="326" y1="52" x2="326" y2="96" stroke="#8a6a1f" stroke-width="1"/>
    <text x="330" y="78" fill="#8a6a1f" font-size="7">presión de</text>
    <text x="330" y="87" fill="#8a6a1f" font-size="7">distensión</text>
    <line x1="44" y1="122" x2="150" y2="122" stroke="var(--ink-dim)"/>
    <text x="80" y="131" fill="var(--ink-dim)" font-size="7.5">Ti (inspiración + pausa)</text>
    <line x1="196" y1="122" x2="300" y2="122" stroke="var(--ink-dim)"/>
    <text x="230" y="131" fill="var(--ink-dim)" font-size="7.5">Te (espiración)</text>
    <text x="6" y="152" fill="var(--ink-dim)" font-size="9">Flujo (L/min)</text>
    <line x1="34" y1="192" x2="340" y2="192" stroke="var(--line)"/>
    <line x1="34" y1="158" x2="34" y2="234" stroke="var(--line)"/>
    <path d="M34 192 L44 192 L44 166 L150 166 L150 192 L196 192 L206 230 Q250 200 292 193 L300 192" fill="none" stroke="#3f6b52" stroke-width="2"/>
    <path d="M300 192 L300 166 L340 166" fill="none" stroke="#3f6b52" stroke-width="2" opacity="0.4"/>
    <text x="95" y="163" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">flujo inspiratorio constante</text>
    <circle cx="292" cy="193" r="3" fill="#3f6b52"/>
    <text x="214" y="224" fill="#3f6b52" font-size="7.5">vuelve a cero: sin auto-PEEP</text>
  </svg>
  <div style="color:var(--ink-dim);margin-top:4px;">La presión pico incluye el componente resistivo; la presión meseta (pausa inspiratoria, sin flujo) es la que distiende el alveolo. Si el flujo espiratorio no vuelve a cero antes de la siguiente inspiración, hay auto-PEEP.</div>
</div>`;

// Figura 4: los parametros del ventilador de un vistazo (tabla), separados en los que se
// programan y los que se miden.
const parametrosTablaHtml = `
<div style="max-width:600px;margin:0 auto;font-size:9.5px;color:var(--ink);overflow-x:auto;">
  <table style="border-collapse:collapse;width:100%;min-width:460px;">
    <thead><tr style="background:var(--panel2);">
      <th style="text-align:left;padding:4px 6px;border:1px solid var(--line);">Parámetro</th>
      <th style="text-align:left;padding:4px 6px;border:1px solid var(--line);">Que es</th>
      <th style="text-align:left;padding:4px 6px;border:1px solid var(--line);">Habitual / objetivo</th>
    </tr></thead>
    <tbody>
      <tr><td colspan="3" style="padding:3px 6px;border:1px solid var(--line);font-weight:700;color:var(--accent-fg);">Se programan</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">FiO2</td><td style="padding:3px 6px;border:1px solid var(--line);">Oxígeno del gas inspirado</td><td style="padding:3px 6px;border:1px solid var(--line);">0.21 a 1.0; la menor para la SpO2 objetivo</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">PEEP</td><td style="padding:3px 6px;border:1px solid var(--line);">Presión al final de la espiración; evita el colapso alveolar</td><td style="padding:3px 6px;border:1px solid var(--line);">5 de inicio; más en la SDRA</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Volumen corriente</td><td style="padding:3px 6px;border:1px solid var(--line);">Aire por respiración (modos de volumen)</td><td style="padding:3px 6px;border:1px solid var(--line);">6 mL/kg de peso predicho (4 a 8)</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Presión de soporte o inspiratoria</td><td style="padding:3px 6px;border:1px solid var(--line);">Ayuda de presión sobre la PEEP (modos de presión)</td><td style="padding:3px 6px;border:1px solid var(--line);">según volumen corriente y confort</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Frecuencia</td><td style="padding:3px 6px;border:1px solid var(--line);">Respiraciones por minuto garantizadas</td><td style="padding:3px 6px;border:1px solid var(--line);">12 a 20; ajustar por el pH</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Relación I:E / tiempo inspiratorio</td><td style="padding:3px 6px;border:1px solid var(--line);">Duración de la inspiración frente a la espiración</td><td style="padding:3px 6px;border:1px solid var(--line);">1:2; 1:3 a 1:4 en el obstructivo</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Trigger (sensibilidad)</td><td style="padding:3px 6px;border:1px solid var(--line);">Umbral al que el esfuerzo inicia la respiración</td><td style="padding:3px 6px;border:1px solid var(--line);">-1 a -2 cmH2O o 1 a 3 L/min</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Trigger espiratorio (ciclado)</td><td style="padding:3px 6px;border:1px solid var(--line);">Porcentaje del flujo pico que termina la inspiración (presión de soporte)</td><td style="padding:3px 6px;border:1px solid var(--line);">alrededor del 25%</td></tr>
      <tr><td colspan="3" style="padding:3px 6px;border:1px solid var(--line);font-weight:700;color:var(--accent-fg);">Se miden</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Presión pico</td><td style="padding:3px 6px;border:1px solid var(--line);">Resistencia más distensión</td><td style="padding:3px 6px;border:1px solid var(--line);">vigilar los cambios bruscos</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Presión meseta</td><td style="padding:3px 6px;border:1px solid var(--line);">Distensión alveolar (pausa inspiratoria)</td><td style="padding:3px 6px;border:1px solid var(--line);">menor de 30 cmH2O</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Presión de distensión</td><td style="padding:3px 6px;border:1px solid var(--line);">Meseta menos PEEP total</td><td style="padding:3px 6px;border:1px solid var(--line);">menor de 15 cmH2O</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Auto-PEEP</td><td style="padding:3px 6px;border:1px solid var(--line);">Aire atrapado (pausa espiratoria)</td><td style="padding:3px 6px;border:1px solid var(--line);">idealmente ausente</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Distensibilidad estática</td><td style="padding:3px 6px;border:1px solid var(--line);">Volumen corriente entre presión de distensión</td><td style="padding:3px 6px;border:1px solid var(--line);">60 a 100 mL/cmH2O</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Ventilación minuto</td><td style="padding:3px 6px;border:1px solid var(--line);">Volumen corriente por frecuencia; fija la PaCO2</td><td style="padding:3px 6px;border:1px solid var(--line);">según la PaCO2 objetivo</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Poder mecánico</td><td style="padding:3px 6px;border:1px solid var(--line);">Energía entregada por minuto</td><td style="padding:3px 6px;border:1px solid var(--line);">orientativo por encima de 17 J/min</td></tr>
    </tbody>
  </table>
</div>`;

const peepFio2Html = `
<div style="max-width:560px;margin:0 auto;font-size:9px;color:var(--ink);overflow-x:auto;">
  <div style="font-weight:700;color:var(--accent-fg);margin-bottom:3px;">Tabla PEEP/FiO2 de ARDSNet (titular para SpO2 88-95% o PaO2 55-80 mmHg)</div>
  <div style="min-width:480px;">
    <div style="display:grid;grid-template-columns:70px repeat(7,1fr);gap:1px;text-align:center;">
      <div style="background:var(--panel2);padding:3px;font-weight:700;">Menor PEEP</div>
      <div style="border:1px solid var(--line);padding:3px;">FiO2 0.4<br>PEEP 5-8</div>
      <div style="border:1px solid var(--line);padding:3px;">0.5<br>8-10</div>
      <div style="border:1px solid var(--line);padding:3px;">0.6<br>10</div>
      <div style="border:1px solid var(--line);padding:3px;">0.7<br>10-14</div>
      <div style="border:1px solid var(--line);padding:3px;">0.8<br>14</div>
      <div style="border:1px solid var(--line);padding:3px;">0.9<br>14-18</div>
      <div style="border:1px solid var(--line);padding:3px;">1.0<br>18-24</div>
    </div>
    <div style="display:grid;grid-template-columns:70px repeat(7,1fr);gap:1px;text-align:center;margin-top:2px;">
      <div style="background:var(--panel2);padding:3px;font-weight:700;">Mayor PEEP</div>
      <div style="border:1px solid var(--line);padding:3px;">FiO2 0.3<br>PEEP 12-14</div>
      <div style="border:1px solid var(--line);padding:3px;">0.4<br>14-16</div>
      <div style="border:1px solid var(--line);padding:3px;">0.5<br>16-20</div>
      <div style="border:1px solid var(--line);padding:3px;">0.7<br>20</div>
      <div style="border:1px solid var(--line);padding:3px;">0.8<br>22</div>
      <div style="border:1px solid var(--line);padding:3px;">0.9<br>22</div>
      <div style="border:1px solid var(--line);padding:3px;">1.0<br>22-24</div>
    </div>
  </div>
  <div style="color:var(--ink-dim);margin-top:4px;">La estrategia de mayor PEEP se reserva para la SDRA moderada-grave (PaO2/FiO2 menor de 200); titular buscando mejor distensibilidad y oxigenación sin subir la presión de distensión ni comprometer la hemodinamia.</div>
</div>`;

const desteteHtml = `
<div style="max-width:520px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="border:1px solid #3d5a73;background:#3d5a7318;border-radius:8px;padding:6px 10px;"><strong style="color:#3d5a73;">1. Cribado diario de preparación.</strong> Causa de la insuficiencia respiratoria en resolución, oxigenación adecuada (PaO2/FiO2 mayor de 150-200 con PEEP 5-8 y FiO2 0.4-0.5), hemodinamia estable con vasopresores mínimos o nulos, esfuerzo inspiratorio presente, sin acidosis grave.</div>
    <div style="border:1px solid #3f6b52;background:#3f6b5218;border-radius:8px;padding:6px 10px;"><strong style="color:#3f6b52;">2. Prueba de respiración espontánea (PRE), 30 a 120 minutos.</strong> Con presión de soporte baja (5-8 cmH2O) mejor que con tubo en T. Coordinar con la interrupción diaria de la sedación.</div>
    <div style="border:1px solid #8a6a1f;background:#8a6a1f18;border-radius:8px;padding:6px 10px;"><strong style="color:#8a6a1f;">3. Valoración de la PRE.</strong> Fallo si taquipnea (frecuencia mayor de 35), índice de respiración rápida y superficial mayor de 105, desaturación, taquicardia o hipertensión marcadas, agitación, diaforesis o uso de musculatura accesoria.</div>
    <div style="border:1px solid #3f6b52;background:#3f6b5218;border-radius:8px;padding:6px 10px;"><strong style="color:#3f6b52;">4. Extubación.</strong> Si tolera la PRE y protege la via aérea (nivel de conciencia, tos eficaz, secreciones manejables). Prueba de fuga del manguito si hay riesgo de estridor; corticoides al menos 4 horas antes si la prueba es positiva.</div>
    <div style="border:1px solid #8c3a34;background:#8c3a3418;border-radius:8px;padding:6px 10px;"><strong style="color:#8c3a34;">5. Soporte tras la extubación.</strong> VNI o cánula de alto flujo profilácticas en el paciente de alto riesgo (EPOC, insuficiencia cardiaca, mayor de 65 anos, ventilación prolongada) para prevenir la reintubacion.</div>
  </div>
</div>`;

const asincroniasHtml = `
<div style="display:flex;gap:12px;flex-wrap:wrap;max-width:580px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="flex:1;min-width:200px;">
    <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="vm-f4-t vm-f4-d" style="width:100%;">
      <title id="vm-f4-t">Bucle presión-volumen</title>
      <desc id="vm-f4-d">Bucle presión-volumen del sistema respiratorio: el pico en forma de pico de pajaro a alta presión indica sobredistension, y el aplanamiento inicial a baja presión indica colapso y reapertura cíclica de alvéolos.</desc>
      <line x1="20" y1="110" x2="190" y2="110" stroke="var(--line)"/>
      <line x1="20" y1="20" x2="20" y2="110" stroke="var(--line)"/>
      <text x="100" y="125" text-anchor="middle" fill="var(--ink-dim)" font-size="8">Presión</text>
      <text x="12" y="65" text-anchor="middle" fill="var(--ink-dim)" font-size="8" transform="rotate(-90 12 65)">Volumen</text>
      <path d="M25 108 Q30 105 45 100 Q70 60 120 35 Q150 22 165 30" fill="none" stroke="#2e6b7a" stroke-width="2"/>
      <path d="M165 30 Q150 45 110 60 Q60 85 25 108" fill="none" stroke="#3f6b52" stroke-width="2"/>
      <circle cx="45" cy="100" r="3" fill="#8a6a1f"/><text x="48" y="98" fill="#8a6a1f" font-size="7">colapso cíclico</text>
      <circle cx="165" cy="30" r="3" fill="#8c3a34"/><text x="120" y="24" fill="#8c3a34" font-size="7">sobredistension</text>
    </svg>
  </div>
  <div style="flex:1.3;min-width:230px;">
    <div style="font-weight:700;color:var(--accent-fg);margin-bottom:3px;">Asincronías frecuentes</div>
    <ul style="margin:0;padding-left:16px;line-height:1.7;color:var(--ink-dim);">
      <li><strong>Esfuerzo inefectivo</strong>: el paciente hace un esfuerzo que no dispara el ventilador (deflexión en la curva de presión o de flujo sin ciclo); típico del auto-PEEP y de la sedación insuficiente o excesiva.</li>
      <li><strong>Doble disparo y apilamiento</strong>: dos ciclos seguidos sin espiración completa; tiempo inspiratorio del ventilador más corto que el del paciente.</li>
      <li><strong>Autodisparo</strong>: ciclos sin esfuerzo, por fugas, agua en el circuito o oscilacion cardiaca.</li>
      <li><strong>Ciclado precoz o tardío</strong>: la inspiración del ventilador termina antes o después que la del paciente (ajustar el trigger espiratorio en presión de soporte).</li>
    </ul>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La ventilación mecánica sustituye o asiste el trabajo respiratorio aplicando presión positiva a la via aérea. Puede ser no invasiva (a través de una mascarilla o un casco: CPAP y binivel) o invasiva (a través de un tubo endotraqueal o una traqueostomía). Se indica cuando fallan la oxigenación (insuficiencia respiratoria hipoxémica), la ventilación (hipercapnia con acidosis) o la mecánica ventilatoria (fatiga y trabajo respiratorio excesivo), o para proteger la via aérea y descargar el trabajo cardiaco y respiratorio en el estado crítico. Para ajustarla bien hay que tener presentes unos conceptos de fisiología respiratoria y saber que significa cada parámetro del ventilador; sobre eso se apoya el resto del tema.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Oxigenar y ventilar son dos funciones distintas.</strong></p>
<p style="margin:0 0 12px;">La <strong>oxigenación</strong> (pasar oxígeno de los alvéolos a la sangre) depende de la fracción de oxígeno inspirado (FiO2), de la superficie de intercambio disponible y de la presión que mantiene abiertos los alvéolos (PEEP). La <strong>ventilación</strong> (eliminar CO2) depende de la cantidad de aire que se moviliza por minuto (ventilación minuto = volumen corriente por frecuencia). Se pueden alterar por separado: un paciente puede tener la PaCO2 normal y estar muy hipoxemico, o al revés. En el pulmón esto se explica por la relación entre la ventilación y la perfusión de cada unidad alveolar.</p>
${figBlock('Figura 1', 'Cortocircuito, unidad normal y espacio muerto', intercambioHtml)}
<p style="margin:0 0 12px;">Cuando un alveolo esta colapsado u ocupado (edema, pus, sangre) pero sigue recibiendo sangre, esa sangre pasa sin oxigenarse: es un <strong>cortocircuito</strong> (shunt), y produce una hipoxemia que apenas mejora al subir la FiO2 (por eso en la SDRA se recurre a la PEEP, el reclutamiento y el decúbito prono). Cuando un alveolo se ventila pero no recibe sangre (por ejemplo en la tromboembolia o por sobredistension) es <strong>espacio muerto</strong>, y lo que empeora es la eliminación de CO2. Entre los dos extremos están las unidades con relación ventilación-perfusión baja (responden bien al oxígeno) o alta.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La bomba: distensibilidad, resistencia y la ecuación del movimiento.</strong></p>
<p style="margin:0 0 12px;">En la respiración espontánea el diafragma y los músculos intercostales generan una <strong>presión pleural negativa</strong> que expande el pulmón y hace entrar el aire. Dos propiedades determinan cuanta presión hace falta para mover un volumen dado: la <strong>distensibilidad</strong> o compliance (volumen que entra por cada cmH2O de presión; en el paciente ventilado sano 60 a 100 mL/cmH2O, baja en la SDRA, el edema, la fibrosis o la obesidad) y la <strong>resistencia</strong> de la via aérea (presión necesaria para un flujo dado; con tubo endotraqueal unos 10 a 15 cmH2O por L/s, alta en el broncoespasmo, las secreciones o un tubo estrecho o acodado). La relación se resume en la <strong>ecuación del movimiento</strong>: la presión aplicada en cada instante se reparte entre vencer la distensibilidad (volumen dividido entre la compliance), vencer la resistencia (flujo por la resistencia) y la PEEP de partida.</p>
<p style="margin:0 0 12px;">Al final de una espiración tranquila queda aire en el pulmón (la <strong>capacidad residual funcional</strong>) que mantiene los alvéolos abiertos. Si ese volumen cae por debajo del <strong>volumen de cierre</strong>, los alvéolos se colapsan y hay que reabrirlos en la siguiente inspiración con mucha más presión; ese ciclo de colapso y reapertura lesiona el pulmón (atelectrauma). La PEEP mantiene la capacidad residual funcional y evita ese colapso.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La presión positiva invierte la fisiología normal.</strong></p>
${figBlock('Figura 2', 'Respiración espontánea frente a ventilación con presión positiva', espontVsPPHtml)}
<p style="margin:0 0 12px;">El ventilador no aspira el aire: lo empuja. Durante la insuflacion la <strong>presión intratorácica se vuelve positiva</strong> (en vez de negativa), y eso tiene consecuencias hemodinámicas: <strong>disminuye el retorno venoso</strong> al tórax (baja la precarga, sobre todo si el paciente esta hipovolémico o hay auto-PEEP) y <strong>reduce la poscarga del ventrículo izquierdo</strong> (útil en el edema agudo de pulmón). Si la presión es excesiva puede sobredistender el pulmón y comprimir el ventrículo derecho. Por eso la ventilación mejora la oxigenación y descarga el trabajo respiratorio, pero se debe dar con la menor presión que consiga los objetivos.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Los parámetros del ventilador, uno por uno.</strong></p>
${figBlock('Figura 3', 'Anatomía de una respiración mecánica: presiones, tiempos y flujo', curvaAnatomiaHtml)}
<p style="margin:0 0 4px;"><strong>Lo que se programa:</strong></p>
<ul style="margin:0 0 12px;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
  <li><strong>FiO2</strong>: fracción de oxígeno del gas inspirado (0.21 a 1.0). Se usa la menor que mantenga la SpO2 objetivo; una FiO2 alta y mantenida es tóxica para el pulmón.</li>
  <li><strong>PEEP</strong>: presión positiva que queda al final de la espiración. Evita el colapso alveolar espiratorio, aumenta la capacidad residual funcional y mejora la oxigenación. El valor de partida habitual es 5 cmH2O; se sube en la SDRA guiandose por la tabla PEEP/FiO2.</li>
  <li><strong>Volumen corriente</strong> (en los modos de volumen): aire que entra en cada respiración. Se fija en 6 mL/kg de <strong>peso predicho</strong> por la talla y el sexo (rango protector 4 a 8), no por el peso real.</li>
  <li><strong>Presión inspiratoria o presión de soporte</strong> (en los modos de presión): la presión con la que el ventilador asiste cada respiración por encima de la PEEP; el volumen resultante depende de la distensibilidad y del esfuerzo del paciente.</li>
  <li><strong>Frecuencia respiratoria</strong>: respiraciones por minuto que garantiza el ventilador. Junto con el volumen corriente define la <strong>ventilación minuto</strong>, que es la que determina la PaCO2 (más ventilación minuto, menos PaCO2).</li>
  <li><strong>Tiempo inspiratorio y relación I:E</strong>: cuanto dura la inspiración frente a la espiración (habitual 1:2). En el paciente obstructivo se alarga la espiración (1:3 o 1:4) para dar tiempo a vaciar el pulmón y evitar el auto-PEEP.</li>
  <li><strong>Flujo inspiratorio y su patrón</strong> (en los modos de volumen): la velocidad con la que se entrega el volumen corriente; un flujo insuficiente aumenta el trabajo y genera asincronía.</li>
  <li><strong>Sensibilidad del trigger</strong>: el umbral (de presión, unos -1 a -2 cmH2O, o de flujo, unos 1 a 3 L/min) al que el esfuerzo del paciente inicia una respiración asistida. Un trigger poco sensible obliga a un esfuerzo excesivo; demasiado sensible provoca autodisparo.</li>
  <li><strong>Trigger espiratorio o ciclado</strong> (en presión de soporte): el porcentaje del flujo pico (habitual 25%) al que el ventilador da por terminada la inspiración. Mal ajustado produce ciclado precoz o tardío.</li>
  <li><strong>Rampa o tiempo de presurizacion</strong>: la rapidez con la que se alcanza la presión programada al inicio de la inspiración.</li>
</ul>
<p style="margin:0 0 4px;"><strong>Lo que se mide y se vigila:</strong></p>
<ul style="margin:0 0 12px;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
  <li><strong>Presión pico</strong>: la presión máxima de la via aérea al final de la insuflacion. Refleja la <strong>resistencia más la distensión</strong>; sube con el broncoespasmo, las secreciones, la mordida del tubo o una caída de la distensibilidad.</li>
  <li><strong>Presión meseta</strong>: la presión que queda al hacer una <strong>pausa inspiratoria</strong> (sin flujo, medio segundo). Es la presión que de verdad distiende el alveolo. Objetivo: menor de 30 cmH2O.</li>
  <li><strong>Presión de distensión</strong> (driving pressure): presión meseta menos PEEP total. Es la tensión cíclica que sufre el pulmón aireado y el mejor predictor de lesión; objetivo menor de 15 cmH2O.</li>
  <li><strong>PEEP total y auto-PEEP</strong>: con una <strong>pausa espiratoria</strong> se mide la PEEP real; si supera a la fijada, hay auto-PEEP (aire atrapado), típico del obstructivo y del tiempo espiratorio corto.</li>
  <li><strong>Distensibilidad estática</strong>: volumen corriente dividido entre la presión de distensión (60 a 100 mL/cmH2O). <strong>Resistencia</strong>: presión pico menos meseta, dividida entre el flujo.</li>
  <li><strong>Volumen minuto espirado</strong>, las <strong>curvas</strong> (presión-tiempo, flujo-tiempo, volumen-tiempo y los bucles) y el <strong>poder mecánico</strong> (energía que el ventilador entrega por minuto; orientativo por encima de 17 J/min).</li>
</ul>
${figBlock('Figura 4', 'Los parámetros del ventilador de un vistazo', parametrosTablaHtml)}

<div style="margin:18px 0 14px;"><strong style="color:var(--accent-fg);">Los objetivos, en orden.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Oxigenación suficiente (SpO2 92-96%, o 88-92% en el retenedor de CO2) con la menor FiO2 y PEEP posibles.</li>
    <li>Ventilación que mantenga un pH aceptable (hipercapnia permisiva si hace falta).</li>
    <li>Protección pulmonar: volumen corriente bajo (4-8 mL/kg de peso predicho), meseta menor de 30 y presión de distensión menor de 15 cmH2O.</li>
    <li>Confort y sincronia con la menor sedación posible, y liberación precoz del ventilador.</li>
  </ul>
</div>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> El beneficio de la ventilación depende de aplicarla de forma protectora y por el menor tiempo posible: sus complicaciones (lesión pulmonar inducida por el ventilador, neumonía asociada a la ventilación, asincronías, debilidad y disfunción diafragmática, y repercusión hemodinámica) son en gran parte prevenibles y se desarrollan en Complicaciones.</p>`;

export const bibliografia = [
  'Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines: noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017;50(2):1602426.',
  'Schmidt GA, Girard TD, Kress JP, et al. Official Executive Summary of an American Thoracic Society/American College of Chest Physicians Clinical Practice Guideline: Liberation from Mechanical Ventilation in Critically Ill Adults. Am J Respir Crit Care Med. 2017;195(1):115-119.',
  'Grasselli G, Calfee CS, Camporota L, et al. ESICM guidelines on acute respiratory distress syndrome: definition, phenotyping and respiratory support strategies. Intensive Care Med. 2023;49(7):727-759.',
  'Qadir N, Sahetya S, Munshi L, et al. An Update on Management of Adult Patients with Acute Respiratory Distress Syndrome: An Official American Thoracic Society Clinical Practice Guideline. Am J Respir Crit Care Med. 2024;209(1):24-36.',
  'Acute Respiratory Distress Syndrome Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes for acute lung injury and the acute respiratory distress syndrome (ARMA/ARDSNet). N Engl J Med. 2000;342(18):1301-1308.',
  'Amato MBP, Meade MO, Slutsky AS, et al. Driving pressure and survival in the acute respiratory distress syndrome. N Engl J Med. 2015;372(8):747-755.',
  'Guerin C, Reignier J, Richard JC, et al. Prone positioning in severe acute respiratory distress syndrome (PROSEVA). N Engl J Med. 2013;368(23):2159-2168.',
  'Yang KL, Tobin MJ. A prospective study of indexes predicting the outcome of trials of weaning from mechanical ventilation (rapid shallow breathing index). N Engl J Med. 1991;324(21):1445-1450.',
  'Roca O, Caralt B, Messika J, et al. An index combining respiratory rate and oxygenation to predict outcome of nasal high-flow therapy (ROX index). Am J Respir Crit Care Med. 2019;199(11):1368-1376.',
  'Frat JP, Thille AW, Mercat A, et al. High-flow oxygen through nasal cannula in acute hypoxemic respiratory failure (FLORALI). N Engl J Med. 2015;372(23):2185-2196.',
  'Gattinoni L, Tonetti T, Cressoni M, et al. Ventilator-related causes of lung injury: the mechanical power. Intensive Care Med. 2016;42(10):1567-1575.',
  'Devlin JW, Skrobik Y, Gelinas C, et al. Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption in Adult Patients in the ICU (PADIS). Crit Care Med. 2018;46(9):e825-e873.',
  'Papazian L, Forel JM, Gacouin A, et al. Neuromuscular blockers in early acute respiratory distress syndrome (ACURASYS). N Engl J Med. 2010;363(12):1107-1116.',
  'National Heart, Lung, and Blood Institute PETAL Clinical Trials Network. Early neuromuscular blockade in the acute respiratory distress syndrome (ROSE). N Engl J Med. 2019;380(21):1997-2008.',
  'Girard TD, Kress JP, Fuchs BD, et al. Efficacy and safety of a paired sedation and ventilator weaning protocol for mechanically ventilated patients in intensive care (Awakening and Breathing Controlled trial). Lancet. 2008;371(9607):126-134.',
  'Kalil AC, Metersky ML, Klompas M, et al. Management of Adults With Hospital-acquired and Ventilator-associated Pneumonia: 2016 Clinical Practice Guidelines by the IDSA and ATS. Clin Infect Dis. 2016;63(5):e61-e111.',
  'Ouellette DR, Patel S, Girard TD, et al. Liberation from Mechanical Ventilation in Critically Ill Adults: An Official ACCP/ATS Clinical Practice Guideline: Inspiratory Pressure Augmentation During SBT, Protocols Minimizing Sedation, and Noninvasive Ventilation Immediately After Extubation. Chest. 2017;151(1):166-180.',
  'Brower RG, Lanken PN, MacIntyre N, et al. Higher versus lower positive end-expiratory pressures in patients with the acute respiratory distress syndrome (ALVEOLI). N Engl J Med. 2004;351(4):327-336.',
  'Goligher EC, Dres M, Fan E, et al. Mechanical ventilation-induced diaphragm atrophy strongly impacts clinical outcomes. Am J Respir Crit Care Med. 2018;197(2):204-213.',
  'Mojoli F, Bouhemad B, Mongodi S, Lichtenstein D. Lung ultrasound for critically ill patients. Am J Respir Crit Care Med. 2019;199(6):701-714.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Indicación de soporte no invasivo',
      tituloB: 'Indicación de ventilación invasiva',
      compensada: 'Trabajo respiratorio aumentado o hipoxemia o hipercapnia que no responden al oxígeno convencional, con via aérea protegida, nivel de conciencia conservado, hemodinamia estable y capacidad de cooperar y de proteger la via aérea: candidato a cánula de alto flujo o a ventilación no invasiva, con vigilancia estrecha para detectar el fracaso a tiempo.',
      descompensada: 'Parada respiratoria o inminente, incapacidad de proteger la via aérea (coma, vómito, secreciones no manejables), fracaso o intolerancia de la ventilación no invasiva, inestabilidad hemodinámica grave, o necesidad de sedación profunda o de control estricto de la PaCO2 (por ejemplo hipertensión intracraneal): indicación de intubación y ventilación invasiva.'
    },
    laboratorio: [
      { prueba: 'Gasometría arterial', utilidad: 'Define el tipo de insuficiencia respiratoria (hipoxémica: PaO2 menor de 60; hipercápnica: PaCO2 mayor de 45 con pH bajo), guía la FiO2 y la ventilación minuto, y detecta la respuesta o el fracaso del soporte a los 30 a 60 minutos.' },
      { prueba: 'Relación PaO2/FiO2 y, si no hay gasometría, SpO2/FiO2', utilidad: 'Cuantifica la gravedad de la hipoxemia y clasifica la SDRA (calculadora disponible); la relación SpO2/FiO2 es una alternativa no invasiva útil para el cribado y el seguimiento.' },
      { prueba: 'Lactato, función renal y electrolitos', utilidad: 'Valoran la perfusión y el impacto sistémico; la alcalosis por hiperventilación y las alteraciones del potasio y del fósforo afectan a la fuerza muscular y al destete.' },
      { prueba: 'Hemograma, proteína C reactiva y cultivos', utilidad: 'Cribado de infección como causa o como complicación (neumonía asociada a la ventilación); el aspirado traqueal cuantitativo o el lavado broncoalveolar orientan el antibiótico.' }
    ],
    no_invasivos: [
      { metodo: 'Capnografia (end-tidal CO2)', interpretacion: 'Confirma la intubación endotraqueal (patrón de curva sostenido), vigila la ventilación de forma continua y detecta la desconexión, la reintubacion esofágica o la parada.', cutoff: 'La ausencia de onda de capnografia tras la intubación obliga a descartar intubación esofágica' },
      { metodo: 'Mecánica respiratoria a pie de cama (meseta, presión de distensión, distensibilidad, auto-PEEP)', interpretacion: 'Con una pausa inspiratoria y otra espiratoria se miden la presión meseta, la presión de distensión (meseta menos PEEP total) y la auto-PEEP; guian la protección pulmonar (calculadora disponible).', cutoff: 'Meseta menor de 30 cmH2O; presión de distensión menor de 15 cmH2O; auto-PEEP idealmente ausente' },
      { metodo: 'Índice de respiración rápida y superficial (frecuencia entre volumen corriente en litros)', interpretacion: 'Predice el resultado de la prueba de respiración espontánea (calculadora disponible).', cutoff: 'Menor de 105 respiraciones por minuto y litro predice éxito del destete; mayor de 105, fracaso' },
      { metodo: 'Índice ROX (SpO2/FiO2 dividido entre la frecuencia respiratoria)', interpretacion: 'Predice el fracaso de la cánula nasal de alto flujo a las 2, 6 y 12 horas (calculadora disponible).', cutoff: '4.88 o mayor: bajo riesgo de fracaso; menor de 3.85: alto riesgo, considerar intubación' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax portatil', hallazgos: 'Comprueba la posición del tubo (2 a 4 cm sobre la carina), detecta neumotórax, atelectasia, infiltrados nuevos (neumonía asociada a la ventilación) y sobredistension; se solicita tras la intubación y ante cualquier deterioro brusco.' },
      { modalidad: 'Ecografía pulmonar y diafragmática a pie de cama', hallazgos: 'Diferencia el edema, la consolidación, el derrame y el neumotórax más rápido que la radiografía; la fracción de engrosamiento y la excursión del diafragma valoran la disfunción diafragmática y ayudan a predecir el destete.' },
      { modalidad: 'Tomografía de tórax', hallazgos: 'En casos seleccionados: cuantifica el pulmón reclutable en la SDRA, detecta barotrauma oculto, tromboembolia o complicaciones que la radiografía no muestra.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La ventilación se clasifica por la interfase (no invasiva o invasiva), por la variable que controla el ventilador (volumen o presión) y por el grado de participación del paciente (controlada, asistida o espontánea). El ajuste concreto depende del escenario mecánico: pulmón sano, SDRA (baja distensibilidad, riesgo de sobredistension y de colapso cíclico) u obstructivo (espiración limitada, riesgo de auto-PEEP).',
    escalas: [
      { nombre: 'Modo según la variable de control', componentes: 'Controlado por volumen (volumen corriente y flujo fijos, la presión es variable dependiente) frente a controlado por presión (presión inspiratoria fija, el volumen es variable dependiente). Modos mixtos: presión regulada por volumen objetivo.', formula: 'Se elige según la prioridad: garantizar el volumen minuto (volumen) o limitar la presión (presión).', interpretacion: 'En volumen se vigila la presión meseta; en presión se vigila el volumen corriente resultante. La protección pulmonar se puede lograr con cualquiera de los dos.' },
      { nombre: 'Grado de participación del paciente', componentes: 'Controlada (sin esfuerzo del paciente, todos los ciclos los da el ventilador), asistida-controlada (el ventilador entrega un ciclo completo por cada esfuerzo, con una frecuencia mínima de respaldo) y espontánea o de soporte de presión (el paciente marca la frecuencia y el ventilador asiste cada esfuerzo).', formula: 'Progresión habitual: controlada en la fase aguda, asistida al recuperar el estímulo, soporte de presión antes del destete.', interpretacion: 'Cuanto más espontánea es la ventilación, menor es la atrofia diafragmática pero mayor el riesgo de asincronías y de lesión por esfuerzo excesivo (P-SILI).' },
      { nombre: 'Clasificación de Berlín de la SDRA', componentes: 'Hipoxemia por relación PaO2/FiO2 con PEEP o CPAP de al menos 5 cmH2O, inicio en una semana, opacidades bilaterales y edema no explicado solo por causa cardiaca.', formula: 'Leve 200 a 300; moderada 100 a 200; grave 100 o menos (calculadora disponible). La definición global de 2023 anade la relación SpO2/FiO2 y la cánula de alto flujo a 30 L/min o más.', interpretacion: 'La gravedad guía el uso de mayor PEEP, decúbito prono (PaO2/FiO2 menor de 150) y bloqueo neuromuscular, y la consideración de oxigenación por membrana extracorpórea.' },
      { nombre: 'Presión de distensión (driving pressure)', componentes: 'Presión meseta menos PEEP total; refleja la tensión cíclica que sufre el pulmón aireado.', formula: 'Presión de distensión = meseta menos PEEP. Distensibilidad estática = volumen corriente entre presión de distensión (calculadora disponible).', interpretacion: 'Una presión de distensión menor de 15 cmH2O (idealmente 13 o menos) se asocia a menor mortalidad en la SDRA y es un objetivo independiente del volumen corriente y de la meseta.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Via aérea artificial e inicio de la ventilación invasiva',
      color: '#2e6b7a',
      definicion: 'Colocación y manejo de un tubo endotraqueal (o de una traqueostomía) y programación inicial del ventilador. La intubación de secuencia rápida combina un sedante y un relajante muscular de acción rápida para asegurar la via aérea con el menor riesgo de aspiración y de desaturación.',
      fisiopatologia: 'El tubo endotraqueal salva la obstrucción y la pérdida de reflejos, permite aspirar secreciones y aplicar presión positiva y FiO2 altas, pero anula la humidificacion y el filtrado nasales, aumenta la resistencia de la via aérea, abre una puerta de entrada para la neumonía asociada a la ventilación y, con el manguito, puede lesionar la mucosa traqueal si la presión es excesiva.',
      epidemiologia: 'Parada respiratoria o inminente, incapacidad de proteger la via aérea (coma con Glasgow bajo, vómito, hemorragia o secreciones no manejables), hipoxemia o hipercapnia refractarias al soporte no invasivo, trabajo respiratorio insostenible, necesidad de sedación profunda o de control estricto de la PaCO2, y estabilización para traslado o procedimiento.',
      factores_riesgo: ['Via aérea difícil prevista (obesidad, cuello corto, apertura bucal limitada, patología cervical o facial): preparar plan alternativo, videolaringoscopio y ayuda experta', 'Hipotensión previa: optimizar la volemia y tener un vasopresor preparado por el riesgo de colapso periintubacion', 'Hipoxemia previa: preoxigenar de forma óptima (mascarilla con reservorio, cánula de alto flujo o VNI) antes del intento'],
      clinica: 'Secuencia: preparar material y monitorización, preoxigenar 3 a 5 minutos (mascarilla con reservorio, cánula de alto flujo o VNI), posición en rampa, inducción (por ejemplo etomidato o ketamina) con relajante (rocuronio o succinilcolina), laringoscopia, confirmación por capnografia sostenida y auscultación, fijación del tubo, presión del manguito 20 a 30 cmH2O, radiografía y ajuste del ventilador.',
      criterios_dx: 'Programación inicial habitual: modo asistido-controlado por volumen, volumen corriente 6 mL/kg de peso predicho (calculadora disponible), frecuencia 14 a 20 por minuto ajustada al pH, PEEP 5 cmH2O, FiO2 1.0 y luego descenso rápido según SpO2, flujo y trigger que eviten asincronías, y alarmas de presión y de volumen. Reevaluar meseta y presión de distensión a los pocos minutos.',
      laboratorio: 'Gasometría a los 20 a 30 minutos, capnografia continua, presión del manguito cada turno, y vigilancia de la posición del tubo (marca a la comisura, radiografía).',
      imagen: 'Radiografía de tórax tras la intubación (posición del tubo, descartar neumotórax e intubación selectiva); ecografía para confirmar ventilación bilateral y descartar neumotórax de forma inmediata.',
      complementarios: 'Sonda gástrica para descomprimir el estómago; profilaxis de úlcera de estrés y de tromboembolia; higiene oral con antiseptico y cabecera elevada 30 a 45 grados desde el inicio.',
      dx_diferencial: 'Traqueostomía: se considera si se preve ventilación prolongada (más de 7 a 10 días), para facilitar el destete, la higiene bronquial y el confort; no ha demostrado reducir la mortalidad y el momento óptimo se individualiza.',
      tx_medico: 'Mantener la via aérea permeable y segura con la mínima lesión: presión del manguito controlada, aspiración según necesidad (no de rutina), humidificacion activa o intercambiador de calor y humedad, y revisión diaria de la posibilidad de extubar o de decanular.',
      tx_farmacologico: 'Inducción: etomidato 0.3 mg/kg (estable en hipotensión) o ketamina 1 a 2 mg/kg (útil en broncoespasmo e hipotensión), o propofol si hay estabilidad. Relajación: rocuronio 1.2 mg/kg o succinilcolina 1 a 1.5 mg/kg (evitar succinilcolina en hiperpotasemia, quemaduras o denervación de más de 48 a 72 horas). Analgesia con fentanilo. Tras la intubación, iniciar sedoanalgesia de mantenimiento (ver esa tarjeta).',
      tx_intervencionista: 'Plan de via aérea difícil escalonado (videolaringoscopia, mascarilla laringea de rescate, cricotiroidotomia si no se puede intubar ni ventilar); fibrobroncoscopia para intubación con paciente despierto en la via aérea difícil prevista.',
      criterios_uci: 'Toda ventilación invasiva se maneja en cuidados intensivos o intermedios. Deterioro brusco del paciente intubado: aplicar la regla DOPES (Desplazamiento del tubo, Obstrucción, Neumotórax -Pneumothorax-, fallo del Equipo, apilamiento de aire -Stacking-), desconectar y ventilar con bolsa mientras se busca la causa.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Revisión diaria de la indicación, de la presión del manguito, de la posición y de los cuidados de prevención de la neumonía asociada a la ventilación; cribado diario de preparación para el destete (ver esa tarjeta).',
      seguimiento_ambulatorio: 'Tras la extubación: vigilar estridor y disfagia; en la traqueostomía prolongada, plan de decanulacion, logopedia y cuidados del estoma.',
      pronostico: 'La intubación en si es segura con preparación adecuada; la morbilidad se concentra en el colapso periintubacion evitable (preoxigenacion y hemodinamia) y en las complicaciones de la ventilación prolongada.',
      algoritmo: ['Indicación de via aérea: preparar material, monitorización y plan alternativo; preoxigenar y optimizar la hemodinamia', 'Intubación de secuencia rápida: inducción más relajante de acción rápida; confirmar por capnografia sostenida', 'Programación inicial: asistido-controlado por volumen, 6 mL/kg de peso predicho, PEEP 5, FiO2 1.0 y descenso rápido', 'Radiografía, presión del manguito 20 a 30 cmH2O, sonda gástrica, cabecera a 30-45 grados e higiene oral', 'Iniciar sedoanalgesia de mantenimiento y revisar cada dia la posibilidad de destetar']
    },
    {
      nombre: 'Ventilación no invasiva (CPAP y binivel)',
      color: '#3d5a73',
      definicion: 'Aplicación de presión positiva a través de una interfase (mascarilla oronasal, facial total o casco) sin via aérea artificial. La CPAP mantiene una presión continua; la ventilación binivel (BiPAP) alterna una presión inspiratoria y otra espiratoria, asistiendo activamente cada respiración.',
      fisiopatologia: 'La CPAP recluta alvéolos colapsados, mejora la capacidad residual funcional y la oxigenación, y reduce la poscarga del ventrículo izquierdo (útil en el edema agudo de pulmón). La binivel anade una ayuda inspiratoria que descarga los músculos respiratorios y aumenta el volumen corriente y la eliminación de CO2 (útil en la hipercapnia). Al no aislar la via aérea, no protege de la aspiración y su eficacia depende de la tolerancia y del ajuste de la interfase.',
      epidemiologia: 'Recomendación fuerte: exacerbación de EPOC con acidosis respiratoria (pH 7.35 o menor) y edema agudo de pulmón cardiogénico (CPAP o binivel). Recomendación condicional: inmunodeprimido con insuficiencia respiratoria, facilitacion del destete en el EPOC, postoperatorio, traumatismo torácico y cuidados paliativos. Ensayo de binivel en el paciente que se considera candidato a intubación, salvo deterioro inmediato.',
      factores_riesgo: ['Contraindicada en la parada respiratoria o cardiaca y en la incapacidad de proteger la via aérea o de manejar secreciones', 'Contraindicada con vómito o hemorragia digestiva alta activa, agitación no controlable o inestabilidad hemodinámica grave', 'Contraindicada en la cirugía o el traumatismo facial o de la via aérea alta y en la obstrucción fija de la via aérea superior', 'Cautela y vigilancia estrecha en la insuficiencia respiratoria hipoxémica de novo y en la neumonía, por su alta tasa de fracaso'],
      clinica: 'Elegir la interfase (oronasal de inicio; casco si intolerancia o SDRA leve), ajustar las correas evitando fugas y lesiones por presión, empezar con presiones bajas (por ejemplo CPAP 5 a 8; binivel 8 a 10 sobre 4 a 5 de PEEP) y subir la ayuda inspiratoria para lograr un volumen corriente de 6 a 8 mL/kg y una frecuencia menor de 25 a 30. Humidificacion activa. Acompanamiento y explicación al paciente para mejorar la tolerancia.',
      criterios_dx: 'CPAP 5 a 10 cmH2O en el edema agudo de pulmón; binivel con presión inspiratoria 10 a 20 y espiratoria (PEEP) 4 a 8 cmH2O en la hipercapnia, titulando por el volumen corriente, la frecuencia y el pH; FiO2 para SpO2 88 a 92% en el retenedor y 92 a 96% en el resto.',
      laboratorio: 'Gasometría basal y a la hora: la mejoría del pH y de la PaCO2 predice el éxito; su ausencia o el empeoramiento indican fracaso y necesidad de intubar sin demora.',
      imagen: 'Radiografía para valorar la causa (edema, neumonía, derrame) y descartar contraindicaciones; vigilar distensión gástrica por aerofagia.',
      complementarios: 'Registrar de forma explícita un limite de esfuerzo terapéutico si la VNI se usa como techo (por ejemplo en cuidados paliativos o en el paciente no candidato a intubación).',
      dx_diferencial: 'Si a la 1 a 2 horas no hay mejoría clínica ni gasometrica, o aparecen intolerancia, agitación, deterioro del sensorio o inestabilidad: pasar a ventilación invasiva. Retrasar una intubación necesaria empeora el pronóstico.',
      tx_medico: 'Tratar en paralelo la causa (broncodilatadores y corticoides en el EPOC, diuréticos y vasodilatadores en el edema, antibiótico en la neumonía). Pausas cortas para comer, hablar y aplicar cuidados de la piel.',
      tx_farmacologico: 'Sedación mínima si hay ansiedad que impide la adaptación (dexmedetomidina o dosis bajas de opioide), con vigilancia del nivel de conciencia y sin comprometer el estímulo respiratorio.',
      tx_intervencionista: 'Cambio de interfase (casco, facial total) ante fuga o lesión cutánea; escalado a intubación si hay fracaso.',
      criterios_uci: 'Signos de fracaso: no mejoría o empeoramiento del pH y la PaCO2, frecuencia respiratoria persistentemente alta, deterioro del sensorio, asincronía grave, inestabilidad hemodinámica o intolerancia. Vigilar en área monitorizada.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluación clínica y gasometrica a los 30 a 60 minutos y a las 2, 6 y 12 horas; revisión de la piel de la interfase; retirada progresiva al mejorar la causa.',
      seguimiento_ambulatorio: 'En el EPOC con hipercapnia crónica persistente al alta, valorar VNI domiciliaria; en la apnea del sueno o el síndrome de obesidad-hipoventilación, CPAP o binivel a largo plazo.',
      pronostico: 'En el EPOC acidotico y en el edema agudo de pulmón, la VNI reduce la intubación y la mortalidad; en la insuficiencia hipoxémica de novo y la neumonía el fracaso es frecuente y su uso exige vigilancia estrecha.',
      algoritmo: ['Indicación clara (EPOC con pH 7.35 o menor, edema agudo de pulmón): iniciar VNI en área monitorizada', 'Elegir interfase, empezar con presiones bajas y titular la ayuda inspiratoria por el volumen corriente, la frecuencia y el pH', 'Tratar la causa en paralelo; acompanar al paciente para mejorar la tolerancia', 'Gasometría a la hora: si mejora, continuar y destetar; si no mejora o empeora, intubar sin demora', 'Definir de antemano si la VNI es un puente a la intubación o un techo terapéutico']
    },
    {
      nombre: 'Cánula nasal de alto flujo',
      color: '#3f6b52',
      definicion: 'Sistema que entrega oxígeno humidificado y calentado a flujos de 30 a 60 L/min con una FiO2 regulable entre 0.21 y 1.0 a través de unas cánulas nasales de mayor calibre.',
      fisiopatologia: 'El alto flujo lava el espacio muerto nasofaringeo (mejora la eliminación de CO2), genera una PEEP baja y variable (de 2 a 5 cmH2O, mayor con la boca cerrada), aporta una FiO2 estable poco diluida por el flujo inspiratorio del paciente, reduce el trabajo respiratorio y, al humidificar y calentar, mejora el aclaramiento mucociliar y el confort.',
      epidemiologia: 'Insuficiencia respiratoria hipoxémica aguda de novo (en el ensayo FLORALI redujo la mortalidad frente al oxígeno convencional y a la VNI en el subgrupo con PaO2/FiO2 200 o menor); preoxigenacion y apnea durante la intubación; postextubacion en el paciente de riesgo; y como alternativa mejor tolerada que la VNI en muchos escenarios hipoxemicos. También en cuidados paliativos.',
      factores_riesgo: ['No sustituye a la ventilación cuando hay hipercapnia con acidosis significativa: su efecto sobre la PaCO2 es limitado', 'No indicada si hay criterio de intubación inmediata, incapacidad de proteger la via aérea o inestabilidad grave', 'Obstrucción nasal marcada o traumatismo facial que impidan colocar la interfase'],
      clinica: 'Iniciar con flujo alto (50 a 60 L/min) y FiO2 para la SpO2 objetivo, ajustar la temperatura al confort (habitualmente 37 grados), y reducir primero la FiO2 y luego el flujo según la respuesta. Vigilar la frecuencia respiratoria, el uso de musculatura accesoria y el índice ROX.',
      criterios_dx: 'Flujo 30 a 60 L/min; FiO2 titulada a SpO2 92 a 96% (88 a 92% en el retenedor); temperatura 34 a 37 grados. Reevaluar el índice ROX (SpO2/FiO2 entre la frecuencia respiratoria) a las 2, 6 y 12 horas.',
      laboratorio: 'Gasometría si hay sospecha de hipercapnia o acidosis; en la hipoxemia pura, el seguimiento puede hacerse con SpO2/FiO2 e índice ROX.',
      imagen: 'La de la enfermedad de base; no requiere control específico.',
      complementarios: 'Compatible con la fisioterapia respiratoria, la nutrición oral y la comunicación, lo que favorece la tolerancia y la movilización.',
      dx_diferencial: 'Si el índice ROX es menor de 3.85 a las 2 a 12 horas, o hay taquipnea persistente, uso de musculatura accesoria, deterioro del sensorio o inestabilidad: no retrasar la intubación. Un índice ROX de 4.88 o mayor apoya continuar.',
      tx_medico: 'Tratamiento de la causa; combinar con periodos de decúbito prono despierto en la hipoxemia por neumonía o SDRA leve en el paciente colaborador.',
      tx_farmacologico: 'No requiere sedación; broncodilatadores nebulizados compatibles con el sistema.',
      tx_intervencionista: 'Escalado a VNI (si hay componente hipercapnico o fatiga) o a intubación según la evolución.',
      criterios_uci: 'Signos de fracaso: índice ROX bajo o descendente, frecuencia respiratoria mayor de 30 a 35 sostenida, trabajo respiratorio elevado, hipoxemia que no mejora, hipercapnia progresiva o deterioro del sensorio.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Índice ROX y evaluación clínica seriados en las primeras 12 horas (el periodo de mayor riesgo de fracaso); descenso escalonado de FiO2 y flujo al mejorar.',
      seguimiento_ambulatorio: 'Habitualmente no se mantiene al alta; en casos concretos de hipoxemia crónica se usa oxigenoterapia convencional domiciliaria.',
      pronostico: 'En la hipoxemia de novo mejora el confort y, en los casos más graves, puede reducir la intubación y la mortalidad frente al oxígeno convencional; su principal riesgo es enmascarar un fracaso y retrasar la intubación.',
      algoritmo: ['Insuficiencia respiratoria hipoxémica de novo o postextubacion de riesgo: iniciar cánula de alto flujo', 'Flujo 50 a 60 L/min y FiO2 titulada a la SpO2 objetivo; temperatura al confort', 'Calcular el índice ROX a las 2, 6 y 12 horas', 'ROX 4.88 o mayor: continuar y destetar FiO2 y luego flujo; ROX menor de 3.85 o clínica de fracaso: intubar sin demora', 'Considerar decúbito prono despierto en el paciente colaborador con hipoxemia por neumonía']
    },
    {
      nombre: 'Modos controlados y ventilación protectora (SDRA y obstructivo)',
      color: '#8a6a1f',
      definicion: 'Modos en los que el ventilador entrega todos los ciclos con una frecuencia y un patrón fijados, controlando el volumen corriente (y dejando la presión como variable dependiente) o la presión inspiratoria (dejando el volumen como variable dependiente). Son la base de la fase aguda y del ajuste protector.',
      fisiopatologia: `La lesión pulmonar inducida por el ventilador surge de la sobredistension (volumen y presión excesivos), del colapso y reapertura cíclica de alvéolos (baja PEEP), y de la energía total aplicada (poder mecánico). La ventilación protectora limita el volumen corriente al pulmón aireado ("baby lung" en la SDRA), la meseta y la presión de distensión, y usa una PEEP suficiente para evitar el colapso sin sobredistender. En el pulmón obstructivo el problema es la espiración: el tiempo espiratorio insuficiente atrapa aire y genera auto-PEEP, que aumenta el trabajo, provoca esfuerzos inefectivos e hipotensión.${figBlock('Figura 5', 'Tabla PEEP/FiO2 de ARDSNet', peepFio2Html)}`,
      epidemiologia: 'Fase aguda de cualquier insuficiencia respiratoria que requiere ventilación invasiva; SDRA de cualquier gravedad (ventilación protectora obligada); crisis asmática casi fatal y EPOC grave intubados (estrategia de hipoventilación controlada); y cualquier situación que exija control estricto de la PaCO2 o ausencia de esfuerzo del paciente.',
      factores_riesgo: ['Ventilación no protectora: volumen corriente alto, meseta o presión de distensión altas, poder mecánico elevado; causa lesión incluso en pulmones previamente sanos', 'En el paciente obstructivo, una frecuencia alta o un tiempo espiratorio corto empeoran el atrapamiento aéreo y el auto-PEEP'],
      clinica: 'SDRA: volumen corriente 6 mL/kg de peso predicho (reducir a 4 si la meseta pasa de 30 o la presión de distensión de 15), frecuencia hasta 30 a 35 con hipercapnia permisiva (pH 7.20 a 7.30 aceptable), PEEP según la tabla PEEP/FiO2 (mayor PEEP si PaO2/FiO2 menor de 200), decúbito prono al menos 16 horas si PaO2/FiO2 menor de 150, bloqueo neuromuscular en las primeras 48 horas si hay asincronía grave o hipoxemia refractaria, y valorar oxigenación por membrana extracorpórea si sigue refractaria. Obstructivo: volumen corriente 6 a 8 mL/kg, frecuencia baja (10 a 14), flujo inspiratorio alto para alargar la espiración, relación I:E de 1:3 a 1:5, PEEP baja o nula, y aceptar hipercapnia; broncodilatación intensiva.',
      criterios_dx: 'Parámetros de partida en SDRA: volumen corriente 6 mL/kg de peso predicho (calculadora disponible), PEEP 8 a 12, FiO2 para SpO2 88 a 95%, frecuencia para el pH; medir meseta y presión de distensión con pausa inspiratoria (calculadora disponible). En obstructivo: medir auto-PEEP con pausa espiratoria y minimizarla.',
      laboratorio: 'Gasometría para titular la ventilación y aceptar la hipercapnia permisiva; vigilar el pH (mantener por encima de 7.15 a 7.20, corregir con bicarbonato solo si es muy bajo y mal tolerado).',
      imagen: 'Radiografía o ecografía para valorar el reclutamiento, detectar barotrauma y seguir la evolución; tomografía si se plantea una maniobra de reclutamiento o hay dudas.',
      complementarios: 'Poder mecánico como parámetro integrador de riesgo (calculadora disponible); las maniobras de reclutamiento sistemáticas con PEEP muy alta no se recomiendan de rutina por senal de dano.',
      dx_diferencial: 'Distinguir la hipoxemia por SDRA de la de origen cardiaco (ecocardiograma, respuesta a diuréticos), de la tromboembolia y de la atelectasia; el patrón mecánico (baja distensibilidad frente a espiración limitada) orienta la estrategia.',
      tx_medico: 'Objetivo: oxigenación y ventilación suficientes con la menor lesión. Sedación profunda y, si hace falta, bloqueo neuromuscular en la fase más grave; decúbito prono precoz en la SDRA moderada-grave; balance hídrico conservador una vez resuelto el choque.',
      tx_farmacologico: 'Bloqueo neuromuscular en perfusión (por ejemplo cisatracurio) durante 24 a 48 horas si hay asincronía grave, hipoxemia refractaria o presiones altas pese a sedación profunda; broncodilatadores y corticoides en el obstructivo; sedoanalgesia adecuada (ver esa tarjeta).',
      tx_intervencionista: 'Decúbito prono; maniobra de reclutamiento breve en casos seleccionados con vigilancia hemodinámica; oxigenación por membrana extracorpórea venovenosa en la SDRA grave refractaria (PaO2/FiO2 muy baja o hipercapnia con acidosis que no se controla con ventilación protectora).',
      criterios_uci: 'Meseta que no baja de 30 o presión de distensión que no baja de 15 pese a reducir el volumen corriente, hipoxemia refractaria pese a prono y bloqueo, o hipercapnia con acidosis grave no controlable: senales de dano y de necesidad de escalar (prono, bloqueo, oxigenación extracorpórea).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Medir cada dia meseta, presión de distensión, distensibilidad y auto-PEEP; reducir FiO2 y PEEP en cuanto la oxigenación lo permita; retirar el bloqueo neuromuscular lo antes posible y aligerar la sedación para pasar a modos asistidos.',
      seguimiento_ambulatorio: 'Tras la SDRA, seguimiento de la función pulmonar, de la capacidad de ejercicio y de las secuelas cognitivas y musculares (síndrome post-cuidados intensivos).',
      pronostico: 'La ventilación protectora (volumen corriente bajo, meseta y presión de distensión limitadas) y el decúbito prono reducen la mortalidad de la SDRA; la estrategia de hipoventilación controlada previene el barotrauma en el asma casi fatal.',
      algoritmo: ['Fase aguda: modo controlado por volumen o por presión; en SDRA, volumen corriente 6 mL/kg de peso predicho', 'Medir meseta y presión de distensión; reducir el volumen corriente a 4 mL/kg si meseta 30 o más, o presión de distensión 15 o más', 'Titular la PEEP con la tabla PEEP/FiO2 (mayor PEEP si PaO2/FiO2 menor de 200); hipercapnia permisiva con pH por encima de 7.20', 'PaO2/FiO2 menor de 150: decúbito prono al menos 16 horas; bloqueo neuromuscular si hay asincronía grave o hipoxemia refractaria', 'Obstructivo: frecuencia baja, tiempo espiratorio largo, PEEP baja, medir y minimizar el auto-PEEP; oxigenación extracorpórea si sigue refractario']
    },
    {
      nombre: 'Modos asistidos y espontáneos; sedoanalgesia y bloqueo neuromuscular',
      color: '#6b4a2e',
      definicion: 'Modos en los que el paciente participa: asistido-controlado (el ventilador entrega un ciclo completo por cada esfuerzo, con frecuencia mínima de respaldo) y de soporte de presión (el paciente marca la frecuencia y el volumen, el ventilador asiste cada esfuerzo con una presión fija). Se acompanan de una estrategia de sedoanalgesia ligera y dirigida por objetivos.',
      fisiopatologia: 'Recuperar el esfuerzo del paciente reduce la atrofia diafragmática y facilita el destete, pero un esfuerzo excesivo sobre un pulmón lesionado genera presiones transpulmonares altas y lesión por el propio paciente (P-SILI), y una asistencia mal ajustada produce asincronías. La sedación profunda prolonga la ventilación, aumenta el delirium y la debilidad; la analgesia primero y la sedación ligera acortan la ventilación y la estancia.',
      epidemiologia: 'Se pasa a modos asistidos en cuanto el paciente recupera el estímulo respiratorio, la oxigenación mejora (FiO2 0.5 o menos, PEEP 8 o menos) y la causa esta en resolución; el soporte de presión es el modo habitual de la fase previa al destete. El bloqueo neuromuscular se limita a la SDRA grave precoz con asincronía o hipoxemia refractaria y a situaciones puntuales (hipertensión intracraneal, escalofrio en el control de temperatura).',
      factores_riesgo: ['Evitar la sedación profunda de rutina y las benzodiacepinas en perfusión, que aumentan el delirium', 'Evitar el bloqueo neuromuscular prolongado o sin sedación adecuada: riesgo de despertar paralizado y de miopatía', 'En el esfuerzo espontáneo intenso sobre pulmón lesionado, vigilar la presión de distensión y la P0.1 para no permitir P-SILI'],
      clinica: 'En soporte de presión: ajustar la presión de ayuda para un volumen corriente de 6 a 8 mL/kg y una frecuencia de 20 a 30, con trigger sensible y trigger espiratorio adaptado para evitar el ciclado precoz o tardío. Sedoanalgesia: escala de dolor (por ejemplo escala conductual) y de sedación (RASS objetivo de 0 a menos 1), interrupción diaria de la sedación coordinada con la prueba de respiración espontánea, y protocolo de prevención y tratamiento del delirium (evaluación con CAM-ICU, movilización precoz, higiene del sueno).',
      criterios_dx: 'Soporte de presión inicial 8 a 12 cmH2O sobre PEEP 5 a 8; FiO2 para SpO2 objetivo. Analgesia de primera línea con opioide (fentanilo, remifentanilo) titulada al dolor; sedante de elección propofol o dexmedetomidina según el objetivo (la dexmedetomidina permite un paciente más despierto y colaborador).',
      laboratorio: 'Vigilar el equilibrio ácido-base (la sobreasistencia produce alcalosis e hipoventilación central), la función renal y hepática (aclaramiento de sedantes), los triglicéridos y las calorías del propofol, y los signos de síndrome de infusión de propofol (acidosis, rabdomiólisis, fallo cardiaco) con dosis altas y prolongadas.',
      imagen: 'Ecografía diafragmática para seguir la fracción de engrosamiento (marcador de esfuerzo y de atrofia) y ayudar a decidir el ritmo de descarga.',
      complementarios: 'Paquete de medidas ABCDEF: valoración y manejo del dolor, pruebas de despertar y de respiración espontánea, elección de sedación, delirium, movilización precoz e implicación de la familia.',
      dx_diferencial: 'Distinguir la agitación por dolor, por delirium, por asincronía, por hipoxemia o hipercapnia, o por abstinencia; tratar la causa antes de subir la sedación.',
      tx_medico: 'Mantener al paciente despierto, cómodo y colaborador siempre que sea posible; movilización precoz activa; higiene del sueno; retirar sedantes y opioides de forma escalonada para evitar la abstinencia tras un uso prolongado.',
      tx_farmacologico: 'Analgesia: fentanilo o remifentanilo en perfusión, morfina si función renal conservada. Sedación: propofol (inicio y despertar rápidos, vigilar triglicéridos y el síndrome de infusión) o dexmedetomidina (menos delirium, permite colaboracion, puede dar bradicardia e hipotensión); evitar benzodiacepinas salvo abstinencia alcohólica, epilepsia o necesidad de amnesia profunda. Bloqueo neuromuscular: cisatracurio en perfusión 24 a 48 horas con sedación profunda garantizada y monitorización del tren de cuatro.',
      tx_intervencionista: 'No aplica de forma específica; el ajuste es de parámetros y de fármacos.',
      criterios_uci: 'Sedación excesiva (RASS menos 3 a menos 5 sin indicación), delirium hiperactivo o hipoactivo, esfuerzo espontáneo intenso con presiones transpulmonares altas (riesgo de P-SILI), o bloqueo neuromuscular sin sedación adecuada: corregir de inmediato.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Evaluación por turno del dolor, la sedación (RASS) y el delirium (CAM-ICU); interrupción diaria de la sedación; progresión de la movilización; ajuste de la ayuda para preparar el destete.',
      seguimiento_ambulatorio: 'Vigilar el síndrome post-cuidados intensivos (deterioro cognitivo, estrés postraumático, debilidad); rehabilitación.',
      pronostico: 'La sedación ligera dirigida por objetivos, la analgesia primero, la interrupción diaria y la movilización precoz acortan la ventilación y la estancia y reducen el delirium y la debilidad.',
      algoritmo: ['Al recuperar el estímulo y mejorar la oxigenación: pasar a modo asistido y luego a soporte de presión', 'Ajustar la ayuda para volumen corriente 6 a 8 mL/kg y frecuencia 20 a 30; corregir el ciclado precoz o tardío', 'Analgesia primero (opioide titulado al dolor); sedante ligero (propofol o dexmedetomidina), RASS objetivo 0 a menos 1', 'Interrupción diaria de la sedación coordinada con la prueba de respiración espontánea; evaluar el delirium y movilizar', 'Bloqueo neuromuscular solo en SDRA grave precoz con asincronía o hipoxemia refractaria, 24 a 48 horas y con sedación profunda']
    },
    {
      nombre: 'Destete y liberación de la ventilación mecánica',
      color: '#3f6b52',
      definicion: 'Proceso de retirada progresiva del soporte hasta la respiración espontánea y la extubación. La liberación incluye la prueba de respiración espontánea, la decisión de extubar y el soporte tras la extubación.',
      fisiopatologia: `El destete falla cuando la carga (resistencia, distensibilidad baja, auto-PEEP, secreciones) supera a la capacidad (fuerza y resistencia de los músculos respiratorios, estímulo central), o por causas cardiacas (el paso a presión negativa aumenta el retorno venoso y la poscarga y puede desencadenar edema), metabólicas, psicológicas o de via aérea (edema, secreciones, tos ineficaz).${figBlock('Figura 6', 'Algoritmo de destete y liberación', desteteHtml)}`,
      epidemiologia: 'Todo paciente ventilado más de 24 horas debe someterse a un cribado diario de preparación para el destete; la mayoría se extuba tras la primera prueba de respiración espontánea satisfactoria. El destete se considera difícil si fracasan varias pruebas o dura más de una semana.',
      factores_riesgo: ['Predisponen al fracaso del destete: EPOC, insuficiencia cardiaca, ventilación prolongada y debilidad adquirida en la UCI', 'También la sobrecarga hídrica, el delirium, la edad avanzada, la anemia y la desnutrición', 'La reintubacion empeora el pronóstico: hay que equilibrar no extubar demasiado pronto y no prolongar la ventilación sin necesidad'],
      clinica: 'Cribado: causa en resolución, PaO2/FiO2 mayor de 150 a 200 con PEEP 5 a 8 y FiO2 0.4 a 0.5, hemodinamia estable con vasopresores mínimos o nulos, esfuerzo inspiratorio presente y sin acidosis grave. Prueba de respiración espontánea de 30 a 120 minutos con presión de soporte de 5 a 8 cmH2O (mejor que con tubo en T) coordinada con la interrupción de la sedación. Extubar si tolera la prueba y protege la via aérea (conciencia, tos eficaz, secreciones manejables).',
      criterios_dx: 'Índice de respiración rápida y superficial menor de 105 (calculadora disponible), volumen minuto y frecuencia estables, sin desaturación ni taquicardia o hipertensión marcadas, sin diaforesis ni uso de musculatura accesoria durante la prueba.',
      laboratorio: 'Gasometría al final de la prueba si hay dudas; corregir antes anemia grave, alteraciones del potasio, el fósforo y el magnesio, y la sobrecarga hídrica.',
      imagen: 'Ecografía diafragmática (excursión y fracción de engrosamiento) y pulmonar (aireacion) para apoyar la decisión en el destete difícil; ecocardiografía si se sospecha causa cardiaca del fracaso.',
      complementarios: 'Prueba de fuga del manguito en el paciente con riesgo de estridor postextubacion (intubación traumática o prolongada, tubo grande, mujer, reintubacion previa); si es positiva, corticoides sistémicos al menos 4 horas antes de extubar.',
      dx_diferencial: 'Distinguir el fracaso respiratorio del cardiaco (edema al retirar la presión positiva: manejar con diuréticos y control de la poscarga), del neuromuscular (debilidad, ver esa tarjeta), del psicológico (ansiedad, delirium) y del obstructivo de via aérea alta.',
      tx_medico: 'Optimizar la carga (broncodilatadores, drenaje de secreciones, balance hídrico negativo, tratar la insuficiencia cardiaca) y la capacidad (nutrición, corrección de electrolitos, movilización, reducir sedación); protocolizar el proceso y coordinar despertar y prueba de respiración espontánea (paquete ABC).',
      tx_farmacologico: 'Diuréticos si hay sobrecarga; corticoides antes de extubar si la prueba de fuga es positiva; retirada escalonada de opioides y sedantes para evitar la abstinencia.',
      tx_intervencionista: 'VNI o cánula de alto flujo profilácticas tras la extubación en el paciente de alto riesgo (EPOC, insuficiencia cardiaca, mayor de 65 anos, ventilación prolongada) para prevenir la reintubacion; traqueostomía si el destete se preve muy prolongado.',
      criterios_uci: 'Fracaso de la prueba de respiración espontánea (taquipnea, índice de respiración rápida y superficial mayor de 105, desaturación, taquicardia o hipertensión, agitación, diaforesis): volver a un modo de descanso 24 horas, buscar y corregir la causa, y repetir la prueba al dia siguiente.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Cribado y prueba diarios; tras la extubación, vigilancia estrecha de estridor, trabajo respiratorio, secreciones y sensorio en las primeras horas; no retrasar la reintubacion si es necesaria.',
      seguimiento_ambulatorio: 'En la unidad de destete prolongado o de crónicos, plan estructurado de descarga progresiva y decanulacion; rehabilitación respiratoria y global.',
      pronostico: 'La mayoría de los pacientes se liberan tras la primera prueba satisfactoria; la protocolizacion del destete, la sedación ligera, la movilización precoz y la VNI profiláctica postextubacion en pacientes seleccionados reducen la duración de la ventilación y la reintubacion.',
      algoritmo: ['Paciente ventilado más de 24 horas: cribado diario de preparación para el destete', 'Si cumple criterios: prueba de respiración espontánea 30 a 120 minutos con presión de soporte 5 a 8, coordinada con la interrupción de la sedación', 'Valorar la tolerancia (frecuencia, índice de respiración rápida y superficial, saturación, hemodinamia, trabajo, diaforesis)', 'Si tolera y protege la via aérea: extubar; prueba de fuga y corticoides si hay riesgo de estridor', 'Alto riesgo de reintubacion: VNI o cánula de alto flujo profilácticas; si fracasa la prueba, descanso 24 horas y repetir']
    },
    {
      nombre: 'Lesión pulmonar inducida por el ventilador',
      color: '#8c3a34',
      modalLabels: { itemName: 'Complicacion', definicion: 'Definicion', fisiopatologia: 'Fisiopatologia', epidemiologia: 'Epidemiologia', factores_riesgo: 'Factores de riesgo', clinica: 'Manifestaciones clínicas', criterios_dx: 'Diagnostico', laboratorio: 'Laboratorio', imagen: 'Imagen', complementarios: 'Estudios complementarios', dx_diferencial: 'Diagnóstico diferencial', tx_medico: 'Prevención y tratamiento médico', tx_farmacologico: 'Tratamiento farmacológico', tx_intervencionista: 'Tratamiento intervencionista', criterios_uci: 'Gravedad', seguimiento_hospitalario: 'Seguimiento hospitalario', pronostico: 'Pronostico', algoritmo: 'Puntos clave' },
      definicion: 'Dano pulmonar causado por la propia ventilación mecánica. Incluye el barotrauma (fuga de aire: neumotórax, neumomediastino, enfisema subcutáneo, neumoperitoneo), el volutrauma (sobredistension por volumen excesivo), el atelectrauma (colapso y reapertura cíclica por PEEP insuficiente) y el biotrauma (inflamación local y sistémica que perpetua la SDRA y contribuye al fallo multiorgánico). El esfuerzo espontáneo intenso sobre un pulmón lesionado produce un dano análogo (P-SILI).',
      fisiopatologia: 'La tensión y la deformacion cíclicas excesivas rompen la barrera alveolo-capilar, aumentan la permeabilidad y liberan citocinas; el aire diseca por los planos peribroncovasculares hacia el mediastino y el tejido subcutáneo. La energía total transferida por unidad de tiempo (poder mecánico: producto de volumen, presiones, PEEP y frecuencia) integra estos mecanismos.',
      epidemiologia: 'El barotrauma clínicamente evidente aparece en una minoría de los pacientes ventilados, más en la SDRA, el asma casi fatal, la neumonía necrosante y la enfermedad pulmonar quística; el volutrauma y el atelectrauma subclínicos son mucho más frecuentes y median el pronóstico.',
      factores_riesgo: ['Volumen corriente alto, meseta mayor de 30 y presión de distensión mayor de 15 cmH2O', 'PEEP insuficiente para el pulmón reclutable y poder mecánico elevado', 'Presiones pico muy altas por broncoespasmo o secreciones', 'Esfuerzo espontáneo vigoroso no controlado'],
      clinica: 'Barotrauma: deterioro brusco de la oxigenación y la hemodinamia, aumento de las presiones, enfisema subcutáneo palpable, hipotensión y desviación traqueal (neumotórax a tensión). El volutrauma y el biotrauma se manifiestan como SDRA que no mejora o que empeora y como fallo multiorgánico.',
      criterios_dx: 'Barotrauma por radiografía o ecografía (neumotórax, aire en mediastino o subcutáneo); la sospecha de neumotórax a tensión es clínica y obliga a descompresión inmediata sin esperar a la imagen. El volutrauma y el atelectrauma se infieren de una mecánica desfavorable (meseta y presión de distensión altas, baja distensibilidad) y de la progresión de la SDRA.',
      laboratorio: 'No hay marcador específico; las citocinas se elevan pero no se usan en la práctica. Gasometría para valorar el impacto.',
      imagen: 'Radiografía y sobre todo ecografía pulmonar a pie de cama (ausencia de deslizamiento pleural, punto pulmonar) para el neumotórax; tomografía si hay dudas o para cuantificar el pulmón reclutable.',
      complementarios: 'Calculo del poder mecánico y de la presión de distensión como parámetros de riesgo; presión transpulmonar con catéter esofágico en casos seleccionados para titular la PEEP y limitar el esfuerzo.',
      dx_diferencial: 'Otras causas de deterioro brusco del paciente ventilado (regla DOPES: desplazamiento u obstrucción del tubo, neumotórax, fallo del equipo, apilamiento de aire); progresión de la enfermedad de base frente a lesión inducida por el ventilador.',
      tx_medico: 'Prevención: ventilación protectora (volumen corriente 4 a 8 mL/kg de peso predicho, meseta menor de 30, presión de distensión menor de 15), PEEP adecuada, minimizar el poder mecánico y controlar el esfuerzo espontáneo excesivo con sedación o bloqueo. Tratamiento del neumotórax: drenaje pleural.',
      tx_farmacologico: 'Sedación y, si procede, bloqueo neuromuscular para abolir el esfuerzo lesivo en la fase aguda de la SDRA grave.',
      tx_intervencionista: 'Toracocentesis con aguja o drenaje inmediato en el neumotórax a tensión; drenaje pleural en el neumotórax simple; oxigenación por membrana extracorpórea para permitir una ventilación ultraprotectora en la SDRA grave con lesión en curso.',
      criterios_uci: 'El neumotórax a tensión es una emergencia; la lesión en curso pese a ventilación protectora (presiones altas irreductibles, SDRA que empeora) indica escalar a prono, bloqueo y oxigenación extracorpórea.',
      seguimiento_hospitalario: 'Vigilar las presiones y la mecánica cada dia; radiografía o ecografía ante cualquier deterioro; retirar el drenaje pleural cuando cese la fuga y se reexpanda el pulmón.',
      pronostico: 'El barotrauma con neumotórax a tensión no reconocido es rápidamente mortal; el volutrauma y el biotrauma repetidos empeoran la mortalidad de la SDRA, y su prevención con ventilación protectora es una de las intervenciones de mayor impacto.',
      algoritmo: ['Prevenir: volumen corriente 4 a 8 mL/kg de peso predicho, meseta menor de 30, presión de distensión menor de 15, PEEP adecuada, minimizar el poder mecánico', 'Deterioro brusco del paciente ventilado: aplicar la regla DOPES y descomprimir de inmediato si hay sospecha de neumotórax a tensión', 'Confirmar el barotrauma con ecografía o radiografía; drenaje pleural en el neumotórax', 'SDRA que empeora pese a ventilación protectora: prono, bloqueo neuromuscular y valorar oxigenación extracorpórea', 'Controlar el esfuerzo espontáneo excesivo para prevenir la lesión por el propio paciente']
    },
    {
      nombre: 'Neumonía asociada a la ventilación',
      color: '#7a1f3d',
      modalLabels: { itemName: 'Complicacion', definicion: 'Definicion', fisiopatologia: 'Fisiopatologia', epidemiologia: 'Epidemiologia', factores_riesgo: 'Factores de riesgo', clinica: 'Manifestaciones clínicas', criterios_dx: 'Diagnostico', laboratorio: 'Laboratorio', imagen: 'Imagen', complementarios: 'Estudios complementarios', dx_diferencial: 'Diagnóstico diferencial', tx_medico: 'Prevención y tratamiento médico', tx_farmacologico: 'Tratamiento antibiótico', tx_intervencionista: 'Tratamiento intervencionista', criterios_uci: 'Gravedad', seguimiento_hospitalario: 'Seguimiento hospitalario', pronostico: 'Pronostico', algoritmo: 'Puntos clave' },
      definicion: 'Neumonía que aparece a las 48 horas o más del inicio de la ventilación invasiva. La traqueobronquitis asociada a la ventilación es un cuadro relacionado, sin infiltrado radiológico nuevo, que a veces precede a la neumonía.',
      fisiopatologia: 'El tubo endotraqueal anula los mecanismos de defensa de la via aérea alta, mantiene abierta la glotis y permite la microaspiracion del contenido subglotico colonizado (biofilm en el tubo, secreciones orofaringeas y gástricas) hacia el pulmón; la posición supina, la sedación profunda y la nutrición enteral favorecen el reflujo y la aspiración.',
      epidemiologia: 'Es la infección nosocomial más frecuente en el paciente ventilado; el riesgo es mayor en la primera semana (alrededor del 3% por dia los primeros 5 días y menos después) y se asocia a más días de ventilación, más estancia y mayor mortalidad atribuible.',
      factores_riesgo: ['Ventilación prolongada y reintubacion', 'Sedación profunda sin interrupción diaria y posición supina', 'Sonda nasogástrica, profilaxis de úlcera de estrés con inhibidores de la bomba de protones y transporte fuera de la unidad', 'Aspiración previa, EPOC y SDRA'],
      clinica: 'Fiebre o hipotermia, leucocitosis o leucopenia, secreciones traqueales purulentas y abundantes, empeoramiento de la oxigenación (aumento de la FiO2 o de la PEEP) e inestabilidad; en el anciano y el inmunodeprimido puede faltar la fiebre.',
      criterios_dx: 'Infiltrado radiológico nuevo o progresivo más al menos dos de: fiebre, leucocitosis o leucopenia, y secreción purulenta, junto con un cultivo respiratorio (aspirado traqueal o lavado broncoalveolar, preferiblemente cuantitativo) obtenido antes de cambiar el antibiótico. Ningún criterio aislado es específico.',
      laboratorio: 'Cultivo cuantitativo de secreciones respiratorias, hemocultivos, procalcitonina y proteína C reactiva para apoyar la decisión y la duración; considerar panel molecular rápido para acortar el tiempo hasta el antibiótico dirigido.',
      imagen: 'Radiografía de tórax (infiltrado nuevo o progresivo); tomografía y ecografía ayudan a diferenciar atelectasia, derrame, edema y absceso.',
      complementarios: 'Paquete de prevención: cabecera elevada 30 a 45 grados, higiene oral con clorhexidina o sin ella según el protocolo local, interrupción diaria de la sedación y pruebas de respiración espontánea, profilaxis de úlcera y de tromboembolia, tubos con aspiración subglotica en la ventilación prevista prolongada, control de la presión del manguito y evitar la reintubacion.',
      dx_diferencial: 'Atelectasia, edema pulmonar, SDRA en evolución, tromboembolia con infarto, hemorragia alveolar, neumonitis por aspiración química y traqueobronquitis sin infiltrado.',
      tx_medico: 'Antibiótico empírico precoz tras obtener cultivos, dirigido según los factores de riesgo de resistencia y la epidemiología local; desescalada a las 48 a 72 horas con el resultado; duración de 7 días en la mayoría de los casos si hay buena respuesta.',
      tx_farmacologico: 'Empírico según el riesgo de multirresistencia: cobertura de bacilos gramnegativos incluida Pseudomonas (por ejemplo piperacilina-tazobactam, cefepima o meropenem) y de Staphylococcus aureus resistente a meticilina (vancomicina o linezolid) si hay factores de riesgo o alta prevalencia local; doble cobertura antipseudomónica solo en el choque séptico o con alta resistencia. Ajustar por cultivo y función renal.',
      tx_intervencionista: 'Broncoscopia para toma de muestras y para drenar tapones o atelectasia lobar; drenaje de empiema o de absceso si aparecen.',
      criterios_uci: 'El paciente ya esta en cuidados intensivos; la neumonía asociada a la ventilación con choque séptico o SDRA marca la gravedad y guía la amplitud de la cobertura empírica.',
      seguimiento_hospitalario: 'Reevaluar a las 48 a 72 horas: desescalar, valorar la duración (7 días si mejora), y buscar complicaciones (empiema, absceso, bacteriemia persistente) si no responde.',
      pronostico: 'Prolonga la ventilación y la estancia y tiene mortalidad atribuible; la aplicación sistemática del paquete de prevención y la limitación de la duración de la ventilación reducen su incidencia.',
      algoritmo: ['Sospecha (infiltrado nuevo más fiebre, leucocitosis o leucopenia y secreción purulenta) tras 48 horas de ventilación', 'Obtener cultivo respiratorio (mejor cuantitativo) y hemocultivos antes de cambiar el antibiótico', 'Antibiótico empírico precoz según factores de riesgo de resistencia y epidemiología local', 'Desescalar a las 48 a 72 horas con el cultivo; duración habitual de 7 días', 'Aplicar el paquete de prevención en todos los pacientes ventilados']
    },
    {
      nombre: 'Asincronías paciente-ventilador',
      color: '#6b3a5a',
      modalLabels: { itemName: 'Complicacion', definicion: 'Definicion', fisiopatologia: 'Fisiopatologia', epidemiologia: 'Epidemiologia', factores_riesgo: 'Factores de riesgo', clinica: 'Manifestaciones clínicas', criterios_dx: 'Diagnostico', laboratorio: 'Laboratorio', imagen: 'Imagen', complementarios: 'Estudios complementarios', dx_diferencial: 'Diagnóstico diferencial', tx_medico: 'Prevención y tratamiento médico', tx_farmacologico: 'Tratamiento farmacológico', tx_intervencionista: 'Ajuste del ventilador', criterios_uci: 'Gravedad', seguimiento_hospitalario: 'Seguimiento hospitalario', pronostico: 'Pronostico', algoritmo: 'Puntos clave' },
      definicion: 'Desajuste entre el patrón respiratorio del paciente y la asistencia del ventilador. Las más frecuentes son el esfuerzo inefectivo (esfuerzo que no dispara el ventilador), el doble disparo y el apilamiento de aire, el autodisparo, y el ciclado precoz o tardío (la inspiración del ventilador termina antes o después que la del paciente).',
      fisiopatologia: `El esfuerzo inefectivo aparece cuando el auto-PEEP obliga al paciente a generar mucha presión antes de alcanzar el umbral de disparo, o cuando la sedación o la sobreasistencia deprimen el estímulo; el doble disparo, cuando el tiempo inspiratorio del ventilador es más corto que la demanda del paciente; el ciclado tardío, cuando el criterio de fin de la inspiración (por ejemplo el porcentaje de flujo pico en soporte de presión) esta mal ajustado.${figBlock('Figura 7', 'Bucle presión-volumen y asincronías frecuentes', asincroniasHtml)}`,
      epidemiologia: 'Son muy frecuentes (una proporción alta de los pacientes ventilados tiene un índice de asincronía elevado en algún momento) y se asocian a más días de ventilación, más sedación, más delirium y peor pronóstico cuando son numerosas.',
      factores_riesgo: ['Auto-PEEP y enfermedad obstructiva', 'Sedación inadecuada, por exceso o por defecto, y dolor o ansiedad', 'Trigger poco o demasiado sensible y ayuda inspiratoria mal ajustada', 'Fugas del circuito y tiempo inspiratorio fijo que no se adapta a la demanda'],
      clinica: 'Lucha con el ventilador, uso de musculatura accesoria, taquipnea, activación frecuente de alarmas, y curvas del ventilador con deflexiones sin ciclo, ciclos dobles, o discordancia entre el fin del flujo y el esfuerzo del paciente.',
      criterios_dx: 'Análisis de las curvas de presión, flujo y volumen a pie de cama (a veces con la senal de presión esofágica o de actividad eléctrica del diafragma); identificar el tipo concreto de asincronía guía la corrección.',
      laboratorio: 'No aplica de forma directa; descartar hipoxemia, hipercapnia o acidosis como causa del impulso respiratorio elevado.',
      imagen: 'No aplica de forma directa.',
      complementarios: 'Monitorización avanzada (presión esofágica, actividad eléctrica del diafragma) en casos seleccionados para ajustar la sincronia y limitar el esfuerzo lesivo.',
      dx_diferencial: 'Distinguir la asincronía verdadera de la taquipnea apropiada por acidosis, fiebre, dolor o ansiedad, y de la enfermedad de base no controlada; tratar la causa antes de subir la sedación.',
      tx_medico: 'Optimizar primero la causa: reducir el auto-PEEP (broncodilatación, prolongar la espiración, PEEP externa que compense parte del auto-PEEP), tratar el dolor y el delirium, y ajustar la sedación al objetivo.',
      tx_farmacologico: 'Ajuste de la sedoanalgesia (ni excesiva ni insuficiente); bloqueo neuromuscular solo si la asincronía es grave y refractaria en la fase aguda de la SDRA.',
      tx_intervencionista: 'Ajuste de parámetros: sensibilidad y tipo de trigger (mejor por flujo), nivel y pendiente de la ayuda inspiratoria, tiempo inspiratorio o trigger espiratorio, y PEEP; cambiar de modo si persiste.',
      criterios_uci: 'Un índice de asincronía alto y sostenido, o el doble disparo repetido con apilamiento de aire (sobredistension), obligan a una revisión inmediata de parámetros y sedación.',
      seguimiento_hospitalario: 'Revisión de las curvas en cada ronda; documentar el tipo de asincronía y la corrección aplicada; reevaluar tras cada cambio.',
      pronostico: 'Reconocer y corregir las asincronías reduce la sedación, el tiempo de ventilación y el riesgo de lesión por sobredistension; la persistencia de asincronías numerosas es un marcador de mala evolución.',
      algoritmo: ['Detectar en las curvas el tipo de asincronía (esfuerzo inefectivo, doble disparo, autodisparo, ciclado precoz o tardío)', 'Buscar la causa: auto-PEEP, sedación inadecuada, trigger o ayuda mal ajustados, fugas', 'Corregir la causa (broncodilatación y PEEP para el auto-PEEP; ajustar sedación; tratar dolor y delirium)', 'Ajustar parámetros: trigger por flujo, nivel y pendiente de la ayuda, trigger espiratorio, tiempo inspiratorio', 'Reservar el bloqueo neuromuscular para la asincronía grave y refractaria de la SDRA aguda']
    },
    {
      nombre: 'Debilidad, disfunción diafragmática y repercusión hemodinámica',
      color: '#6b4a2e',
      modalLabels: { itemName: 'Complicacion', definicion: 'Definicion', fisiopatologia: 'Fisiopatologia', epidemiologia: 'Epidemiologia', factores_riesgo: 'Factores de riesgo', clinica: 'Manifestaciones clínicas', criterios_dx: 'Diagnostico', laboratorio: 'Laboratorio', imagen: 'Imagen', complementarios: 'Estudios complementarios', dx_diferencial: 'Diagnóstico diferencial', tx_medico: 'Prevención y tratamiento médico', tx_farmacologico: 'Tratamiento farmacológico', tx_intervencionista: 'Intervencion', criterios_uci: 'Gravedad', seguimiento_hospitalario: 'Seguimiento hospitalario', pronostico: 'Pronostico', algoritmo: 'Puntos clave' },
      definicion: 'Conjunto de consecuencias sistémicas de la ventilación prolongada: debilidad adquirida en la unidad de cuidados intensivos (polineuropatía y miopatía del enfermo crítico), disfunción diafragmática inducida por el ventilador (atrofia por inactividad con la sedación profunda y los modos controlados, o lesión por esfuerzo excesivo), y la repercusión hemodinámica de la presión positiva.',
      fisiopatologia: 'La inmovilidad, la inflamación sistémica, la hiperglucemia, los corticoides y el bloqueo neuromuscular danan nervio y músculo; el diafragma se atrofia con rapidez cuando no se contrae (ventilación controlada, sedación profunda) y se lesiona cuando el esfuerzo es excesivo. La presión positiva y la PEEP reducen el retorno venoso (disminuyen la precarga) y la poscarga del ventrículo izquierdo, pero pueden aumentar la poscarga del ventrículo derecho y precipitar un cor pulmonale agudo en la SDRA grave.',
      epidemiologia: 'La debilidad adquirida en UCI afecta a una proporción alta de los pacientes ventilados más de una semana; la disfunción diafragmática medible aparece en días y predice el fracaso del destete; la hipotensión por presión positiva es frecuente en el paciente hipovolémico o con obstrucción (auto-PEEP).',
      factores_riesgo: ['Ventilación y reposo prolongados, sepsis y fallo multiorgánico e hiperglucemia', 'Corticoides y bloqueantes neuromusculares, sedación profunda y modos controlados sostenidos', 'Hipovolemia y auto-PEEP como causa de la hipotensión por presión positiva', 'SDRA grave con hipertensión pulmonar como causa del cor pulmonale agudo'],
      clinica: 'Debilidad simétrica y flácida de predominio proximal con reflejos disminuidos, fracaso repetido del destete, dificultad para toser; hipotensión tras aumentar la PEEP o al conectar al ventilador (mejora con volumen o al reducir la PEEP y desaparece al descomprimir el auto-PEEP); signos de fallo derecho en la SDRA grave.',
      criterios_dx: 'Debilidad: fuerza según la escala del Medical Research Council menor de 48 sobre 60 de forma bilateral y simétrica, tras descartar otras causas; electromiografía en casos dudosos. Disfunción diafragmática: ecografía (excursión menor de 10 a 11 mm o fracción de engrosamiento menor del 20 a 30%). Repercusión hemodinámica: relación temporal con los cambios de presión, respuesta a volumen o a reducir la PEEP, y ecocardiografía (colapso de cavidades, función del ventrículo derecho).',
      laboratorio: 'Creatina-cinasa (habitualmente normal o poco elevada en la miopatía del crítico), glucemia, electrolitos (potasio, fósforo, magnesio) y función tiroidea; descartar déficit de vitaminas y fármacos miotoxicos.',
      imagen: 'Ecografía diafragmática seriada (excursión y fracción de engrosamiento); ecocardiografía para la función del ventrículo derecho y el estado de volumen; tomografía si se sospecha otra causa neurológica.',
      complementarios: 'Monitorización del esfuerzo (presión de oclusión P0.1, presión esofágica) para mantener una asistencia que ni atrofie ni sobrecargue el diafragma ("ventilación que protege el diafragma").',
      dx_diferencial: 'Otras causas de debilidad en el paciente crítico: síndrome de Guillain-Barré, miastenia, mielopatía, ictus, bloqueo neuromuscular residual, alteraciones electrolíticas graves y fármacos.',
      tx_medico: 'Prevención: sedación ligera dirigida por objetivos, evitar el bloqueo neuromuscular y los corticoides innecesarios, control de la glucemia, movilización precoz y progresiva, nutrición adecuada, y pasar a modos asistidos en cuanto sea posible para que el diafragma trabaje. Hipotensión: volumen, reducir la PEEP si es excesiva, tratar el auto-PEEP.',
      tx_farmacologico: 'No hay tratamiento farmacológico específico de la debilidad ni de la disfunción diafragmática; el manejo es preventivo y rehabilitador. Vasopresor de forma transitoria si la hipotensión por presión positiva compromete la perfusión mientras se corrige la causa.',
      tx_intervencionista: 'Rehabilitación precoz (sedestación, bipedestación, cicloergometro en cama); en el cor pulmonale agudo de la SDRA grave, estrategia protectora del ventrículo derecho (limitar la presión de distensión y la PaCO2, decúbito prono, valorar oxigenación extracorpórea).',
      criterios_uci: 'La debilidad grave prolonga la ventilación y la rehabilitación; el cor pulmonale agudo con inestabilidad es una senal de gravedad de la SDRA que obliga a ajustar la estrategia ventilatoria y a considerar la oxigenación extracorpórea.',
      seguimiento_hospitalario: 'Fuerza (escala del Medical Research Council) y ecografía diafragmática seriadas; progresión diaria de la movilización; ajuste de la asistencia para proteger el diafragma.',
      pronostico: 'La debilidad adquirida en UCI y la disfunción diafragmática se asocian a destete prolongado, más mortalidad y peor recuperación funcional y cognitiva al ano (síndrome post-cuidados intensivos); la movilización precoz y la sedación ligera mejoran los resultados.',
      algoritmo: ['Prevenir: sedación ligera, evitar bloqueo y corticoides innecesarios, control de glucemia, movilización precoz y paso pronto a modos asistidos', 'Debilidad: fuerza por la escala del Medical Research Council menor de 48 sobre 60 bilateral tras descartar otras causas', 'Disfunción diafragmática: ecografía (excursión o fracción de engrosamiento bajas); ajustar la asistencia para que el diafragma trabaje sin sobrecarga', 'Hipotensión por presión positiva: volumen, reducir la PEEP si es excesiva, corregir el auto-PEEP', 'Cor pulmonale agudo en SDRA grave: proteger el ventrículo derecho (limitar presión de distensión y PaCO2, prono) y valorar oxigenación extracorpórea']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento del paciente ventilado es diario y estructurado: revisar la indicación, la mecánica respiratoria, la sedoanalgesia, la prevención de complicaciones y la posibilidad de liberar el ventilador. La meta es ventilar de forma protectora y durante el menor tiempo posible.',
    parametros: ['Mecánica respiratoria diaria: presión meseta, presión de distensión, distensibilidad estática y auto-PEEP', 'FiO2 y PEEP: reducir en cuanto la oxigenación lo permita (SpO2 objetivo 92-96%, o 88-92% en el retenedor)', 'Sedoanalgesia dirigida por objetivos (RASS 0 a menos 1), interrupción diaria y evaluación del delirium (CAM-ICU)', 'Paquete de prevención de la neumonía asociada a la ventilación (cabecera 30-45 grados, higiene oral, control del manguito, evitar la reintubacion) y profilaxis de úlcera y de tromboembolia', 'Cribado diario de preparación para el destete y prueba de respiración espontánea cuando proceda; movilización precoz y progresiva'],
    criterios_uci_general: 'Toda ventilación invasiva se maneja en cuidados intensivos o intermedios; la ventilación no invasiva y la cánula de alto flujo en insuficiencia respiratoria aguda requieren área monitorizada con capacidad de intubación inmediata.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa; la oxigenación por membrana extracorpórea venovenosa es la escalada en la SDRA grave refractaria y, en enfermedad pulmonar terminal, un puente al trasplante pulmonar en centros seleccionados.',
    prevencion: 'Prevenir la necesidad de ventilación (tratamiento precoz de la causa, VNI y cánula de alto flujo en las indicaciones adecuadas) y prevenir el dano cuando es necesaria: ventilación protectora desde el primer minuto, sedación ligera, movilización precoz, paquete de prevención de la neumonía asociada a la ventilación, y liberación precoz mediante cribado y prueba de respiración espontánea diarios.'
  }
};

// Las citas de cada ficha estaban en forma PLANA (un array por ficha). El motor normaliza esa
// forma anclandola SOLO al campo `definicion` (ver openModal en engine/study-view.js), de modo
// que criterios_dx, laboratorio y tx_farmacologico no pintaban ninguna cita aunque las fuentes
// de la ficha si estuvieran declaradas. Convertido a la forma por campo el 2/11/2026: se reparten
// a esos tres campos las fuentes que la ficha ya declaraba, y `definicion` queda igual para que
// lo que ya se veia no cambie. La precision es de FICHA, no de campo: afinar cual de las fuentes
// sostiene cada campo es una pasada posterior (ver .claude/atribucion-citas.md).
export const compCites = {
  'Via aérea artificial e inicio de la ventilación invasiva': { definicion: [6, 17, 12], criterios_dx: [6, 17, 12], laboratorio: [6, 17, 12], tx_farmacologico: [6, 17, 12] },
  'Ventilación no invasiva (CPAP y binivel)': { definicion: [1, 17], criterios_dx: [1, 17], laboratorio: [1, 17], tx_farmacologico: [1, 17] },
  'Cánula nasal de alto flujo': { definicion: [10, 9, 1], criterios_dx: [10, 9, 1], laboratorio: [10, 9, 1], tx_farmacologico: [10, 9, 1] },
  'Modos controlados y ventilación protectora (SDRA y obstructivo)': { definicion: [5, 6, 7, 8], criterios_dx: [5, 6, 7, 8], laboratorio: [5, 6, 7], tx_farmacologico: [5, 6, 7, 8] },
  'Modos asistidos y espontáneos; sedoanalgesia y bloqueo neuromuscular': { definicion: [12, 15, 13, 14], criterios_dx: [12, 13], laboratorio: [12, 13], tx_farmacologico: [12, 15, 13, 14] },
  'Destete y liberación de la ventilación mecánica': { definicion: [2, 17, 8, 15], criterios_dx: [2, 17, 8, 15], laboratorio: [2, 17], tx_farmacologico: [2, 17, 8, 15] },
  'Lesión pulmonar inducida por el ventilador': { definicion: [11, 6, 5], criterios_dx: [11, 6, 5], laboratorio: [11, 6, 5], tx_farmacologico: [11, 6, 5] },
  'Neumonía asociada a la ventilación': { definicion: [16], criterios_dx: [16], laboratorio: [16], tx_farmacologico: [16] },
  'Asincronías paciente-ventilador': { definicion: [12, 11], criterios_dx: [12, 11], laboratorio: [12, 11], tx_farmacologico: [12, 11] },
  'Debilidad, disfunción diafragmática y repercusión hemodinámica': { definicion: [19, 13, 14], criterios_dx: [19, 13], laboratorio: [19, 13], tx_farmacologico: [19, 13, 14] }
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Clasificación de Berlín de la SDRA': [3, 4],
  'Presión de distensión (driving pressure)': [6, 7],
  'Modo según la variable de control': [5],
  'Grado de participación del paciente': [2]
};
export const escalaCalc = {
  'Clasificación de Berlín de la SDRA': 'pafi-berlin',
  'Presión de distensión (driving pressure)': 'driving-pressure'
};
export const compGroups = [
  { name: 'Modalidades y escenarios', items: ['Via aérea artificial e inicio de la ventilación invasiva', 'Ventilación no invasiva (CPAP y binivel)', 'Cánula nasal de alto flujo', 'Modos controlados y ventilación protectora (SDRA y obstructivo)', 'Modos asistidos y espontáneos; sedoanalgesia y bloqueo neuromuscular', 'Destete y liberación de la ventilación mecánica'] },
  { name: 'Complicaciones', items: ['Lesión pulmonar inducida por el ventilador', 'Neumonía asociada a la ventilación', 'Asincronías paciente-ventilador', 'Debilidad, disfunción diafragmática y repercusión hemodinámica'] }
];
export const complicacionesIntro = 'Las primeras 6 fichas son modalidades y escenarios de ventilación, escritas como monografía: via aérea artificial e inicio de la ventilación invasiva, ventilación no invasiva, cánula nasal de alto flujo, modos controlados y ventilación protectora (SDRA y obstructivo), modos asistidos y espontáneos con la sedoanalgesia y el bloqueo neuromuscular, y el destete. Las 4 últimas son las complicaciones de la ventilación: lesión pulmonar inducida por el ventilador, neumonía asociada a la ventilación, asincronías paciente-ventilador, y la debilidad y la disfunción diafragmática con la repercusión hemodinámica.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Indicaciones y evaluación' },
  { id: 'clasificacion', label: 'Modos y escalas' },
  { id: 'complicaciones', label: 'Modalidades y complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const modalLabels = {
  itemName: 'Modalidad o escenario',
  definicion: 'Descripción y principio',
  fisiopatologia: 'Fundamento fisiológico',
  epidemiologia: 'Indicaciones',
  factores_riesgo: 'Contraindicaciones y cautelas',
  clinica: 'Como se aplica y se ajusta',
  criterios_dx: 'Parámetros y ajuste inicial',
  laboratorio: 'Monitorizacion',
  imagen: 'Imagen y ecografía',
  complementarios: 'Consideraciones',
  dx_diferencial: 'Alternativas y cuando cambiar',
  tx_medico: 'Objetivos y medidas asociadas',
  tx_farmacologico: 'Fármacos y sedoanalgesia',
  tx_intervencionista: 'Maniobras y escalado',
  criterios_uci: 'Senales de fracaso o de dano',
  criterios_tips: 'Consideraciones adicionales',
  seguimiento_hospitalario: 'Vigilancia intrahospitalaria',
  seguimiento_ambulatorio: 'Tras la extubación o el alta',
  pronostico: 'Resultados esperables',
  algoritmo: 'Puntos clave'
};
export const arbol = {
  root: { title: 'VENTILACIÓN MECÁNICA', color: '#2e6b7a', target: 'definicion' },
  branches: [
    { title: 'Modalidades y escenarios', sub: 'Como se aplica y se ajusta', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Via aérea e inicio de la VM', sub: 'Intubación de secuencia rápida, tubo, traqueostomía', color: '#2e6b7a', target: 'complicaciones' },
      { title: 'Ventilación no invasiva', sub: 'CPAP y binivel', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Cánula de alto flujo', sub: 'Alto flujo humidificado; índice ROX', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Modos controlados y protección', sub: 'Volumen y presión; SDRA y obstructivo', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Modos asistidos y sedoanalgesia', sub: 'Soporte de presión; PADIS; bloqueo neuromuscular', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Destete y liberación', sub: 'Cribado, prueba de respiración espontánea, extubación', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones', sub: 'En gran parte prevenibles', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Lesión inducida por el ventilador', sub: 'Barotrauma, volutrauma, atelectrauma, biotrauma', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Neumonía asociada a ventilación', sub: 'Microaspiracion; paquete de prevención', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Asincronías paciente-ventilador', sub: 'Esfuerzo inefectivo, doble disparo, ciclado', color: '#6b3a5a', target: 'complicaciones' },
      { title: 'Debilidad, diafragma y hemodinamia', sub: 'Debilidad en UCI, disfunción diafragmática, cor pulmonale', color: '#6b4a2e', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { no_invasivos: [9, 10], imagen: [20] };
export const clasificacionCite = [3, 5, 6];
export const seguimientoCite = [2, 13];
