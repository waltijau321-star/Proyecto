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
  titulo: 'Ventilacion Mecanica',
  subtitulo: 'Modulo 37 · Medicina Interna',
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
    <desc id="vm-f1-d">Tres unidades alveolo-capilares. En el cortocircuito el alveolo esta colapsado u ocupado y la sangre pasa sin oxigenarse, lo que da hipoxemia que no corrige al subir el oxigeno. En la unidad normal la ventilacion y la perfusion estan acopladas y la sangre se oxigena. En el espacio muerto el alveolo se ventila pero no le llega sangre, por lo que no se elimina CO2.</desc>
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
    <text x="200" y="106" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">ventilacion y perfusion</text>
    <text x="200" y="118" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">acopladas</text>
    <text x="334" y="13" text-anchor="middle" fill="#8a6a1f" font-size="9" font-weight="700">Espacio muerto</text>
    <circle cx="334" cy="48" r="24" fill="var(--panel2)" stroke="var(--line)"/>
    <text x="334" y="51" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">abierto</text>
    <rect x="302" y="82" width="64" height="9" rx="4" fill="none" stroke="#8a6a1f" stroke-dasharray="3 2"/>
    <line x1="316" y1="84" x2="352" y2="89" stroke="#8a6a1f"/><line x1="352" y1="84" x2="316" y2="89" stroke="#8a6a1f"/>
    <text x="334" y="106" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">ventilado sin perfusion</text>
    <text x="334" y="118" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">no elimina CO2</text>
  </svg>
  <div style="color:var(--ink-dim);margin-top:4px;">El cortocircuito da hipoxemia refractaria al oxigeno (se trata con PEEP, reclutamiento y decubito prono); el espacio muerto compromete la eliminacion de CO2. La mayoria de los pacientes tiene una mezcla de unidades con relacion ventilacion-perfusion baja y alta.</div>
</div>`;

// Figura 2: respiracion espontanea (presion pleural negativa) frente a presion positiva
// (presion pleural que se vuelve positiva) y sus efectos hemodinamicos.
const espontVsPPHtml = `
<div style="max-width:560px;margin:0 auto;font-size:10px;color:var(--ink);">
  <svg viewBox="0 0 400 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="vm-f2-t vm-f2-d" style="width:100%;max-width:440px;display:block;margin:0 auto;">
    <title id="vm-f2-t">Respiracion espontanea frente a ventilacion con presion positiva</title>
    <desc id="vm-f2-d">En la respiracion espontanea el diafragma baja y genera una presion pleural negativa que expande el pulmon y favorece el retorno venoso. En la ventilacion con presion positiva el gas se empuja hacia dentro, la presion pleural se vuelve menos negativa o positiva, disminuye el retorno venoso y se reduce la poscarga del ventriculo izquierdo.</desc>
    <text x="100" y="13" text-anchor="middle" fill="var(--accent-fg)" font-size="9" font-weight="700">Respiracion espontanea</text>
    <rect x="42" y="22" width="116" height="98" rx="10" fill="var(--panel2)" stroke="var(--line)"/>
    <ellipse cx="82" cy="60" rx="15" ry="24" fill="none" stroke="var(--ink-dim)"/>
    <ellipse cx="118" cy="60" rx="15" ry="24" fill="none" stroke="var(--ink-dim)"/>
    <path d="M56 100 q44 14 88 0" fill="none" stroke="var(--ink-dim)" stroke-width="2"/>
    <path d="M100 104 l0 12 m-4 -5 l4 5 l4 -5" stroke="#3f6b52" stroke-width="2" fill="none"/>
    <text x="100" y="138" text-anchor="middle" fill="var(--ink)" font-size="8">presion pleural -5 a -8 cmH2O</text>
    <text x="100" y="151" text-anchor="middle" fill="#3f6b52" font-size="8">favorece el retorno venoso</text>
    <text x="300" y="13" text-anchor="middle" fill="var(--accent-fg)" font-size="9" font-weight="700">Presion positiva</text>
    <rect x="242" y="22" width="116" height="98" rx="10" fill="var(--panel2)" stroke="var(--line)"/>
    <path d="M300 16 l0 14 m-4 -5 l4 5 l4 -5" stroke="#8c3a34" stroke-width="2" fill="none"/>
    <ellipse cx="282" cy="62" rx="17" ry="27" fill="#2e6b7a22" stroke="var(--ink-dim)"/>
    <ellipse cx="318" cy="62" rx="17" ry="27" fill="#2e6b7a22" stroke="var(--ink-dim)"/>
    <text x="300" y="138" text-anchor="middle" fill="var(--ink)" font-size="8">presion pleural -2 a +2 cmH2O</text>
    <text x="300" y="151" text-anchor="middle" fill="#8c3a34" font-size="8">baja el retorno venoso; baja la poscarga del VI</text>
  </svg>
</div>`;

// Figura 3: anatomia de una respiracion mecanica (volumen control con flujo constante y pausa
// inspiratoria). Curva de presion-tiempo y de flujo-tiempo con los parametros rotulados.
const curvaAnatomiaHtml = `
<div style="max-width:560px;margin:0 auto;font-size:10px;color:var(--ink);">
  <svg viewBox="0 0 360 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="vm-f3-t vm-f3-d" style="width:100%;max-width:400px;display:block;margin:0 auto;">
    <title id="vm-f3-t">Curva de presion y de flujo en la via aerea con los parametros del ventilador</title>
    <desc id="vm-f3-d">Arriba, la presion en la via aerea sube durante la inspiracion hasta la presion pico, cae a la presion meseta durante la pausa inspiratoria sin flujo, y vuelve a la PEEP en la espiracion. La diferencia entre la meseta y la PEEP es la presion de distension y la diferencia entre la pico y la meseta es el componente resistivo. Abajo, el flujo inspiratorio es constante y el espiratorio decae hasta cero antes de la siguiente respiracion, lo que indica que no hay auto-PEEP.</desc>
    <text x="6" y="12" fill="var(--ink-dim)" font-size="9">Presion en la via aerea (cmH2O)</text>
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
    <text x="330" y="78" fill="#8a6a1f" font-size="7">presion de</text>
    <text x="330" y="87" fill="#8a6a1f" font-size="7">distension</text>
    <line x1="44" y1="122" x2="150" y2="122" stroke="var(--ink-dim)"/>
    <text x="80" y="131" fill="var(--ink-dim)" font-size="7.5">Ti (inspiracion + pausa)</text>
    <line x1="196" y1="122" x2="300" y2="122" stroke="var(--ink-dim)"/>
    <text x="230" y="131" fill="var(--ink-dim)" font-size="7.5">Te (espiracion)</text>
    <text x="6" y="152" fill="var(--ink-dim)" font-size="9">Flujo (L/min)</text>
    <line x1="34" y1="192" x2="340" y2="192" stroke="var(--line)"/>
    <line x1="34" y1="158" x2="34" y2="234" stroke="var(--line)"/>
    <path d="M34 192 L44 192 L44 166 L150 166 L150 192 L196 192 L206 230 Q250 200 292 193 L300 192" fill="none" stroke="#3f6b52" stroke-width="2"/>
    <path d="M300 192 L300 166 L340 166" fill="none" stroke="#3f6b52" stroke-width="2" opacity="0.4"/>
    <text x="95" y="163" text-anchor="middle" fill="var(--ink-dim)" font-size="7.5">flujo inspiratorio constante</text>
    <circle cx="292" cy="193" r="3" fill="#3f6b52"/>
    <text x="214" y="224" fill="#3f6b52" font-size="7.5">vuelve a cero: sin auto-PEEP</text>
  </svg>
  <div style="color:var(--ink-dim);margin-top:4px;">La presion pico incluye el componente resistivo; la presion meseta (pausa inspiratoria, sin flujo) es la que distiende el alveolo. Si el flujo espiratorio no vuelve a cero antes de la siguiente inspiracion, hay auto-PEEP.</div>
</div>`;

// Figura 4: los parametros del ventilador de un vistazo (tabla), separados en los que se
// programan y los que se miden.
const parametrosTablaHtml = `
<div style="max-width:600px;margin:0 auto;font-size:9.5px;color:var(--ink);overflow-x:auto;">
  <table style="border-collapse:collapse;width:100%;min-width:460px;">
    <thead><tr style="background:var(--panel2);">
      <th style="text-align:left;padding:4px 6px;border:1px solid var(--line);">Parametro</th>
      <th style="text-align:left;padding:4px 6px;border:1px solid var(--line);">Que es</th>
      <th style="text-align:left;padding:4px 6px;border:1px solid var(--line);">Habitual / objetivo</th>
    </tr></thead>
    <tbody>
      <tr><td colspan="3" style="padding:3px 6px;border:1px solid var(--line);font-weight:700;color:var(--accent-fg);">Se programan</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">FiO2</td><td style="padding:3px 6px;border:1px solid var(--line);">Oxigeno del gas inspirado</td><td style="padding:3px 6px;border:1px solid var(--line);">0.21 a 1.0; la menor para la SpO2 objetivo</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">PEEP</td><td style="padding:3px 6px;border:1px solid var(--line);">Presion al final de la espiracion; evita el colapso alveolar</td><td style="padding:3px 6px;border:1px solid var(--line);">5 de inicio; mas en la SDRA</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Volumen corriente</td><td style="padding:3px 6px;border:1px solid var(--line);">Aire por respiracion (modos de volumen)</td><td style="padding:3px 6px;border:1px solid var(--line);">6 mL/kg de peso predicho (4 a 8)</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Presion de soporte o inspiratoria</td><td style="padding:3px 6px;border:1px solid var(--line);">Ayuda de presion sobre la PEEP (modos de presion)</td><td style="padding:3px 6px;border:1px solid var(--line);">segun volumen corriente y confort</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Frecuencia</td><td style="padding:3px 6px;border:1px solid var(--line);">Respiraciones por minuto garantizadas</td><td style="padding:3px 6px;border:1px solid var(--line);">12 a 20; ajustar por el pH</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Relacion I:E / tiempo inspiratorio</td><td style="padding:3px 6px;border:1px solid var(--line);">Duracion de la inspiracion frente a la espiracion</td><td style="padding:3px 6px;border:1px solid var(--line);">1:2; 1:3 a 1:4 en el obstructivo</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Trigger (sensibilidad)</td><td style="padding:3px 6px;border:1px solid var(--line);">Umbral al que el esfuerzo inicia la respiracion</td><td style="padding:3px 6px;border:1px solid var(--line);">-1 a -2 cmH2O o 1 a 3 L/min</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Trigger espiratorio (ciclado)</td><td style="padding:3px 6px;border:1px solid var(--line);">Porcentaje del flujo pico que termina la inspiracion (presion de soporte)</td><td style="padding:3px 6px;border:1px solid var(--line);">alrededor del 25%</td></tr>
      <tr><td colspan="3" style="padding:3px 6px;border:1px solid var(--line);font-weight:700;color:var(--accent-fg);">Se miden</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Presion pico</td><td style="padding:3px 6px;border:1px solid var(--line);">Resistencia mas distension</td><td style="padding:3px 6px;border:1px solid var(--line);">vigilar los cambios bruscos</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Presion meseta</td><td style="padding:3px 6px;border:1px solid var(--line);">Distension alveolar (pausa inspiratoria)</td><td style="padding:3px 6px;border:1px solid var(--line);">menor de 30 cmH2O</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Presion de distension</td><td style="padding:3px 6px;border:1px solid var(--line);">Meseta menos PEEP total</td><td style="padding:3px 6px;border:1px solid var(--line);">menor de 15 cmH2O</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Auto-PEEP</td><td style="padding:3px 6px;border:1px solid var(--line);">Aire atrapado (pausa espiratoria)</td><td style="padding:3px 6px;border:1px solid var(--line);">idealmente ausente</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Distensibilidad estatica</td><td style="padding:3px 6px;border:1px solid var(--line);">Volumen corriente entre presion de distension</td><td style="padding:3px 6px;border:1px solid var(--line);">60 a 100 mL/cmH2O</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Ventilacion minuto</td><td style="padding:3px 6px;border:1px solid var(--line);">Volumen corriente por frecuencia; fija la PaCO2</td><td style="padding:3px 6px;border:1px solid var(--line);">segun la PaCO2 objetivo</td></tr>
      <tr><td style="padding:3px 6px;border:1px solid var(--line);font-weight:600;">Poder mecanico</td><td style="padding:3px 6px;border:1px solid var(--line);">Energia entregada por minuto</td><td style="padding:3px 6px;border:1px solid var(--line);">orientativo por encima de 17 J/min</td></tr>
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
  <div style="color:var(--ink-dim);margin-top:4px;">La estrategia de mayor PEEP se reserva para la SDRA moderada-grave (PaO2/FiO2 menor de 200); titular buscando mejor distensibilidad y oxigenacion sin subir la presion de distension ni comprometer la hemodinamia.</div>
</div>`;

const desteteHtml = `
<div style="max-width:520px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:5px;">
    <div style="border:1px solid #3d5a73;background:#3d5a7318;border-radius:8px;padding:6px 10px;"><strong style="color:#3d5a73;">1. Cribado diario de preparacion.</strong> Causa de la insuficiencia respiratoria en resolucion, oxigenacion adecuada (PaO2/FiO2 mayor de 150-200 con PEEP 5-8 y FiO2 0.4-0.5), hemodinamia estable con vasopresores minimos o nulos, esfuerzo inspiratorio presente, sin acidosis grave.</div>
    <div style="border:1px solid #3f6b52;background:#3f6b5218;border-radius:8px;padding:6px 10px;"><strong style="color:#3f6b52;">2. Prueba de respiracion espontanea (PRE), 30 a 120 minutos.</strong> Con presion de soporte baja (5-8 cmH2O) mejor que con tubo en T. Coordinar con la interrupcion diaria de la sedacion.</div>
    <div style="border:1px solid #8a6a1f;background:#8a6a1f18;border-radius:8px;padding:6px 10px;"><strong style="color:#8a6a1f;">3. Valoracion de la PRE.</strong> Fallo si taquipnea (frecuencia mayor de 35), indice de respiracion rapida y superficial mayor de 105, desaturacion, taquicardia o hipertension marcadas, agitacion, diaforesis o uso de musculatura accesoria.</div>
    <div style="border:1px solid #3f6b52;background:#3f6b5218;border-radius:8px;padding:6px 10px;"><strong style="color:#3f6b52;">4. Extubacion.</strong> Si tolera la PRE y protege la via aerea (nivel de conciencia, tos eficaz, secreciones manejables). Prueba de fuga del manguito si hay riesgo de estridor; corticoides al menos 4 horas antes si la prueba es positiva.</div>
    <div style="border:1px solid #8c3a34;background:#8c3a3418;border-radius:8px;padding:6px 10px;"><strong style="color:#8c3a34;">5. Soporte tras la extubacion.</strong> VNI o canula de alto flujo profilacticas en el paciente de alto riesgo (EPOC, insuficiencia cardiaca, mayor de 65 anos, ventilacion prolongada) para prevenir la reintubacion.</div>
  </div>
</div>`;

const asincroniasHtml = `
<div style="display:flex;gap:12px;flex-wrap:wrap;max-width:580px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="flex:1;min-width:200px;">
    <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="vm-f4-t vm-f4-d" style="width:100%;">
      <title id="vm-f4-t">Bucle presion-volumen</title>
      <desc id="vm-f4-d">Bucle presion-volumen del sistema respiratorio: el pico en forma de pico de pajaro a alta presion indica sobredistension, y el aplanamiento inicial a baja presion indica colapso y reapertura ciclica de alveolos.</desc>
      <line x1="20" y1="110" x2="190" y2="110" stroke="var(--line)"/>
      <line x1="20" y1="20" x2="20" y2="110" stroke="var(--line)"/>
      <text x="100" y="125" text-anchor="middle" fill="var(--ink-dim)" font-size="8">Presion</text>
      <text x="12" y="65" text-anchor="middle" fill="var(--ink-dim)" font-size="8" transform="rotate(-90 12 65)">Volumen</text>
      <path d="M25 108 Q30 105 45 100 Q70 60 120 35 Q150 22 165 30" fill="none" stroke="#2e6b7a" stroke-width="2"/>
      <path d="M165 30 Q150 45 110 60 Q60 85 25 108" fill="none" stroke="#3f6b52" stroke-width="2"/>
      <circle cx="45" cy="100" r="3" fill="#8a6a1f"/><text x="48" y="98" fill="#8a6a1f" font-size="7">colapso ciclico</text>
      <circle cx="165" cy="30" r="3" fill="#8c3a34"/><text x="120" y="24" fill="#8c3a34" font-size="7">sobredistension</text>
    </svg>
  </div>
  <div style="flex:1.3;min-width:230px;">
    <div style="font-weight:700;color:var(--accent-fg);margin-bottom:3px;">Asincronias frecuentes</div>
    <ul style="margin:0;padding-left:16px;line-height:1.7;color:var(--ink-dim);">
      <li><strong>Esfuerzo inefectivo</strong>: el paciente hace un esfuerzo que no dispara el ventilador (deflexion en la curva de presion o de flujo sin ciclo); tipico del auto-PEEP y de la sedacion insuficiente o excesiva.</li>
      <li><strong>Doble disparo y apilamiento</strong>: dos ciclos seguidos sin espiracion completa; tiempo inspiratorio del ventilador mas corto que el del paciente.</li>
      <li><strong>Autodisparo</strong>: ciclos sin esfuerzo, por fugas, agua en el circuito o oscilacion cardiaca.</li>
      <li><strong>Ciclado precoz o tardio</strong>: la inspiracion del ventilador termina antes o despues que la del paciente (ajustar el trigger espiratorio en presion de soporte).</li>
    </ul>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La ventilacion mecanica sustituye o asiste el trabajo respiratorio aplicando presion positiva a la via aerea. Puede ser no invasiva (a traves de una mascarilla o un casco: CPAP y binivel) o invasiva (a traves de un tubo endotraqueal o una traqueostomia). Se indica cuando fallan la oxigenacion (insuficiencia respiratoria hipoxemica), la ventilacion (hipercapnia con acidosis) o la mecanica ventilatoria (fatiga y trabajo respiratorio excesivo), o para proteger la via aerea y descargar el trabajo cardiaco y respiratorio en el estado critico. Para ajustarla bien hay que tener presentes unos conceptos de fisiologia respiratoria y saber que significa cada parametro del ventilador; sobre eso se apoya el resto del tema.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Oxigenar y ventilar son dos funciones distintas.</strong></p>
<p style="margin:0 0 12px;">La <strong>oxigenacion</strong> (pasar oxigeno de los alveolos a la sangre) depende de la fraccion de oxigeno inspirado (FiO2), de la superficie de intercambio disponible y de la presion que mantiene abiertos los alveolos (PEEP). La <strong>ventilacion</strong> (eliminar CO2) depende de la cantidad de aire que se moviliza por minuto (ventilacion minuto = volumen corriente por frecuencia). Se pueden alterar por separado: un paciente puede tener la PaCO2 normal y estar muy hipoxemico, o al reves. En el pulmon esto se explica por la relacion entre la ventilacion y la perfusion de cada unidad alveolar.</p>
${figBlock('Figura 1', 'Cortocircuito, unidad normal y espacio muerto', intercambioHtml)}
<p style="margin:0 0 12px;">Cuando un alveolo esta colapsado u ocupado (edema, pus, sangre) pero sigue recibiendo sangre, esa sangre pasa sin oxigenarse: es un <strong>cortocircuito</strong> (shunt), y produce una hipoxemia que apenas mejora al subir la FiO2 (por eso en la SDRA se recurre a la PEEP, el reclutamiento y el decubito prono). Cuando un alveolo se ventila pero no recibe sangre (por ejemplo en la tromboembolia o por sobredistension) es <strong>espacio muerto</strong>, y lo que empeora es la eliminacion de CO2. Entre los dos extremos estan las unidades con relacion ventilacion-perfusion baja (responden bien al oxigeno) o alta.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La bomba: distensibilidad, resistencia y la ecuacion del movimiento.</strong></p>
<p style="margin:0 0 12px;">En la respiracion espontanea el diafragma y los musculos intercostales generan una <strong>presion pleural negativa</strong> que expande el pulmon y hace entrar el aire. Dos propiedades determinan cuanta presion hace falta para mover un volumen dado: la <strong>distensibilidad</strong> o compliance (volumen que entra por cada cmH2O de presion; en el paciente ventilado sano 60 a 100 mL/cmH2O, baja en la SDRA, el edema, la fibrosis o la obesidad) y la <strong>resistencia</strong> de la via aerea (presion necesaria para un flujo dado; con tubo endotraqueal unos 10 a 15 cmH2O por L/s, alta en el broncoespasmo, las secreciones o un tubo estrecho o acodado). La relacion se resume en la <strong>ecuacion del movimiento</strong>: la presion aplicada en cada instante se reparte entre vencer la distensibilidad (volumen dividido entre la compliance), vencer la resistencia (flujo por la resistencia) y la PEEP de partida.</p>
<p style="margin:0 0 12px;">Al final de una espiracion tranquila queda aire en el pulmon (la <strong>capacidad residual funcional</strong>) que mantiene los alveolos abiertos. Si ese volumen cae por debajo del <strong>volumen de cierre</strong>, los alveolos se colapsan y hay que reabrirlos en la siguiente inspiracion con mucha mas presion; ese ciclo de colapso y reapertura lesiona el pulmon (atelectrauma). La PEEP mantiene la capacidad residual funcional y evita ese colapso.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">La presion positiva invierte la fisiologia normal.</strong></p>
${figBlock('Figura 2', 'Respiracion espontanea frente a ventilacion con presion positiva', espontVsPPHtml)}
<p style="margin:0 0 12px;">El ventilador no aspira el aire: lo empuja. Durante la insuflacion la <strong>presion intratoracica se vuelve positiva</strong> (en vez de negativa), y eso tiene consecuencias hemodinamicas: <strong>disminuye el retorno venoso</strong> al torax (baja la precarga, sobre todo si el paciente esta hipovolemico o hay auto-PEEP) y <strong>reduce la poscarga del ventriculo izquierdo</strong> (util en el edema agudo de pulmon). Si la presion es excesiva puede sobredistender el pulmon y comprimir el ventriculo derecho. Por eso la ventilacion mejora la oxigenacion y descarga el trabajo respiratorio, pero se debe dar con la menor presion que consiga los objetivos.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Los parametros del ventilador, uno por uno.</strong></p>
${figBlock('Figura 3', 'Anatomia de una respiracion mecanica: presiones, tiempos y flujo', curvaAnatomiaHtml)}
<p style="margin:0 0 4px;"><strong>Lo que se programa:</strong></p>
<ul style="margin:0 0 12px;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
  <li><strong>FiO2</strong>: fraccion de oxigeno del gas inspirado (0.21 a 1.0). Se usa la menor que mantenga la SpO2 objetivo; una FiO2 alta y mantenida es toxica para el pulmon.</li>
  <li><strong>PEEP</strong>: presion positiva que queda al final de la espiracion. Evita el colapso alveolar espiratorio, aumenta la capacidad residual funcional y mejora la oxigenacion. El valor de partida habitual es 5 cmH2O; se sube en la SDRA guiandose por la tabla PEEP/FiO2.</li>
  <li><strong>Volumen corriente</strong> (en los modos de volumen): aire que entra en cada respiracion. Se fija en 6 mL/kg de <strong>peso predicho</strong> por la talla y el sexo (rango protector 4 a 8), no por el peso real.</li>
  <li><strong>Presion inspiratoria o presion de soporte</strong> (en los modos de presion): la presion con la que el ventilador asiste cada respiracion por encima de la PEEP; el volumen resultante depende de la distensibilidad y del esfuerzo del paciente.</li>
  <li><strong>Frecuencia respiratoria</strong>: respiraciones por minuto que garantiza el ventilador. Junto con el volumen corriente define la <strong>ventilacion minuto</strong>, que es la que determina la PaCO2 (mas ventilacion minuto, menos PaCO2).</li>
  <li><strong>Tiempo inspiratorio y relacion I:E</strong>: cuanto dura la inspiracion frente a la espiracion (habitual 1:2). En el paciente obstructivo se alarga la espiracion (1:3 o 1:4) para dar tiempo a vaciar el pulmon y evitar el auto-PEEP.</li>
  <li><strong>Flujo inspiratorio y su patron</strong> (en los modos de volumen): la velocidad con la que se entrega el volumen corriente; un flujo insuficiente aumenta el trabajo y genera asincronia.</li>
  <li><strong>Sensibilidad del trigger</strong>: el umbral (de presion, unos -1 a -2 cmH2O, o de flujo, unos 1 a 3 L/min) al que el esfuerzo del paciente inicia una respiracion asistida. Un trigger poco sensible obliga a un esfuerzo excesivo; demasiado sensible provoca autodisparo.</li>
  <li><strong>Trigger espiratorio o ciclado</strong> (en presion de soporte): el porcentaje del flujo pico (habitual 25%) al que el ventilador da por terminada la inspiracion. Mal ajustado produce ciclado precoz o tardio.</li>
  <li><strong>Rampa o tiempo de presurizacion</strong>: la rapidez con la que se alcanza la presion programada al inicio de la inspiracion.</li>
</ul>
<p style="margin:0 0 4px;"><strong>Lo que se mide y se vigila:</strong></p>
<ul style="margin:0 0 12px;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
  <li><strong>Presion pico</strong>: la presion maxima de la via aerea al final de la insuflacion. Refleja la <strong>resistencia mas la distension</strong>; sube con el broncoespasmo, las secreciones, la mordida del tubo o una caida de la distensibilidad.</li>
  <li><strong>Presion meseta</strong>: la presion que queda al hacer una <strong>pausa inspiratoria</strong> (sin flujo, medio segundo). Es la presion que de verdad distiende el alveolo. Objetivo: menor de 30 cmH2O.</li>
  <li><strong>Presion de distension</strong> (driving pressure): presion meseta menos PEEP total. Es la tension ciclica que sufre el pulmon aireado y el mejor predictor de lesion; objetivo menor de 15 cmH2O.</li>
  <li><strong>PEEP total y auto-PEEP</strong>: con una <strong>pausa espiratoria</strong> se mide la PEEP real; si supera a la fijada, hay auto-PEEP (aire atrapado), tipico del obstructivo y del tiempo espiratorio corto.</li>
  <li><strong>Distensibilidad estatica</strong>: volumen corriente dividido entre la presion de distension (60 a 100 mL/cmH2O). <strong>Resistencia</strong>: presion pico menos meseta, dividida entre el flujo.</li>
  <li><strong>Volumen minuto espirado</strong>, las <strong>curvas</strong> (presion-tiempo, flujo-tiempo, volumen-tiempo y los bucles) y el <strong>poder mecanico</strong> (energia que el ventilador entrega por minuto; orientativo por encima de 17 J/min).</li>
</ul>
${figBlock('Figura 4', 'Los parametros del ventilador de un vistazo', parametrosTablaHtml)}

<div style="margin:18px 0 14px;"><strong style="color:var(--accent-fg);">Los objetivos, en orden.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Oxigenacion suficiente (SpO2 92-96%, o 88-92% en el retenedor de CO2) con la menor FiO2 y PEEP posibles.</li>
    <li>Ventilacion que mantenga un pH aceptable (hipercapnia permisiva si hace falta).</li>
    <li>Proteccion pulmonar: volumen corriente bajo (4-8 mL/kg de peso predicho), meseta menor de 30 y presion de distension menor de 15 cmH2O.</li>
    <li>Confort y sincronia con la menor sedacion posible, y liberacion precoz del ventilador.</li>
  </ul>
</div>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama.</strong> El beneficio de la ventilacion depende de aplicarla de forma protectora y por el menor tiempo posible: sus complicaciones (lesion pulmonar inducida por el ventilador, neumonia asociada a la ventilacion, asincronias, debilidad y disfuncion diafragmatica, y repercusion hemodinamica) son en gran parte prevenibles y se desarrollan en Complicaciones.</p>`;

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
      tituloA: 'Indicacion de soporte no invasivo',
      tituloB: 'Indicacion de ventilacion invasiva',
      compensada: 'Trabajo respiratorio aumentado o hipoxemia o hipercapnia que no responden al oxigeno convencional, con via aerea protegida, nivel de conciencia conservado, hemodinamia estable y capacidad de cooperar y de proteger la via aerea: candidato a canula de alto flujo o a ventilacion no invasiva, con vigilancia estrecha para detectar el fracaso a tiempo.',
      descompensada: 'Parada respiratoria o inminente, incapacidad de proteger la via aerea (coma, vomito, secreciones no manejables), fracaso o intolerancia de la ventilacion no invasiva, inestabilidad hemodinamica grave, o necesidad de sedacion profunda o de control estricto de la PaCO2 (por ejemplo hipertension intracraneal): indicacion de intubacion y ventilacion invasiva.'
    },
    laboratorio: [
      { prueba: 'Gasometria arterial', utilidad: 'Define el tipo de insuficiencia respiratoria (hipoxemica: PaO2 menor de 60; hipercapnica: PaCO2 mayor de 45 con pH bajo), guia la FiO2 y la ventilacion minuto, y detecta la respuesta o el fracaso del soporte a los 30 a 60 minutos.' },
      { prueba: 'Relacion PaO2/FiO2 y, si no hay gasometria, SpO2/FiO2', utilidad: 'Cuantifica la gravedad de la hipoxemia y clasifica la SDRA (calculadora disponible); la relacion SpO2/FiO2 es una alternativa no invasiva util para el cribado y el seguimiento.' },
      { prueba: 'Lactato, funcion renal y electrolitos', utilidad: 'Valoran la perfusion y el impacto sistemico; la alcalosis por hiperventilacion y las alteraciones del potasio y del fosforo afectan a la fuerza muscular y al destete.' },
      { prueba: 'Hemograma, proteina C reactiva y cultivos', utilidad: 'Cribado de infeccion como causa o como complicacion (neumonia asociada a la ventilacion); el aspirado traqueal cuantitativo o el lavado broncoalveolar orientan el antibiotico.' }
    ],
    no_invasivos: [
      { metodo: 'Capnografia (end-tidal CO2)', interpretacion: 'Confirma la intubacion endotraqueal (patron de curva sostenido), vigila la ventilacion de forma continua y detecta la desconexion, la reintubacion esofagica o la parada.', cutoff: 'La ausencia de onda de capnografia tras la intubacion obliga a descartar intubacion esofagica' },
      { metodo: 'Mecanica respiratoria a pie de cama (meseta, presion de distension, distensibilidad, auto-PEEP)', interpretacion: 'Con una pausa inspiratoria y otra espiratoria se miden la presion meseta, la presion de distension (meseta menos PEEP total) y la auto-PEEP; guian la proteccion pulmonar (calculadora disponible).', cutoff: 'Meseta menor de 30 cmH2O; presion de distension menor de 15 cmH2O; auto-PEEP idealmente ausente' },
      { metodo: 'Indice de respiracion rapida y superficial (frecuencia entre volumen corriente en litros)', interpretacion: 'Predice el resultado de la prueba de respiracion espontanea (calculadora disponible).', cutoff: 'Menor de 105 respiraciones por minuto y litro predice exito del destete; mayor de 105, fracaso' },
      { metodo: 'Indice ROX (SpO2/FiO2 dividido entre la frecuencia respiratoria)', interpretacion: 'Predice el fracaso de la canula nasal de alto flujo a las 2, 6 y 12 horas (calculadora disponible).', cutoff: '4.88 o mayor: bajo riesgo de fracaso; menor de 3.85: alto riesgo, considerar intubacion' }
    ],
    imagen: [
      { modalidad: 'Radiografia de torax portatil', hallazgos: 'Comprueba la posicion del tubo (2 a 4 cm sobre la carina), detecta neumotorax, atelectasia, infiltrados nuevos (neumonia asociada a la ventilacion) y sobredistension; se solicita tras la intubacion y ante cualquier deterioro brusco.' },
      { modalidad: 'Ecografia pulmonar y diafragmatica a pie de cama', hallazgos: 'Diferencia el edema, la consolidacion, el derrame y el neumotorax mas rapido que la radiografia; la fraccion de engrosamiento y la excursion del diafragma valoran la disfuncion diafragmatica y ayudan a predecir el destete.' },
      { modalidad: 'Tomografia de torax', hallazgos: 'En casos seleccionados: cuantifica el pulmon reclutable en la SDRA, detecta barotrauma oculto, tromboembolia o complicaciones que la radiografia no muestra.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La ventilacion se clasifica por la interfase (no invasiva o invasiva), por la variable que controla el ventilador (volumen o presion) y por el grado de participacion del paciente (controlada, asistida o espontanea). El ajuste concreto depende del escenario mecanico: pulmon sano, SDRA (baja distensibilidad, riesgo de sobredistension y de colapso ciclico) u obstructivo (espiracion limitada, riesgo de auto-PEEP).',
    escalas: [
      { nombre: 'Modo segun la variable de control', componentes: 'Controlado por volumen (volumen corriente y flujo fijos, la presion es variable dependiente) frente a controlado por presion (presion inspiratoria fija, el volumen es variable dependiente). Modos mixtos: presion regulada por volumen objetivo.', formula: 'Se elige segun la prioridad: garantizar el volumen minuto (volumen) o limitar la presion (presion).', interpretacion: 'En volumen se vigila la presion meseta; en presion se vigila el volumen corriente resultante. La proteccion pulmonar se puede lograr con cualquiera de los dos.' },
      { nombre: 'Grado de participacion del paciente', componentes: 'Controlada (sin esfuerzo del paciente, todos los ciclos los da el ventilador), asistida-controlada (el ventilador entrega un ciclo completo por cada esfuerzo, con una frecuencia minima de respaldo) y espontanea o de soporte de presion (el paciente marca la frecuencia y el ventilador asiste cada esfuerzo).', formula: 'Progresion habitual: controlada en la fase aguda, asistida al recuperar el estimulo, soporte de presion antes del destete.', interpretacion: 'Cuanto mas espontanea es la ventilacion, menor es la atrofia diafragmatica pero mayor el riesgo de asincronias y de lesion por esfuerzo excesivo (P-SILI).' },
      { nombre: 'Clasificacion de Berlin de la SDRA', componentes: 'Hipoxemia por relacion PaO2/FiO2 con PEEP o CPAP de al menos 5 cmH2O, inicio en una semana, opacidades bilaterales y edema no explicado solo por causa cardiaca.', formula: 'Leve 200 a 300; moderada 100 a 200; grave 100 o menos (calculadora disponible). La definicion global de 2023 anade la relacion SpO2/FiO2 y la canula de alto flujo a 30 L/min o mas.', interpretacion: 'La gravedad guia el uso de mayor PEEP, decubito prono (PaO2/FiO2 menor de 150) y bloqueo neuromuscular, y la consideracion de oxigenacion por membrana extracorporea.' },
      { nombre: 'Presion de distension (driving pressure)', componentes: 'Presion meseta menos PEEP total; refleja la tension ciclica que sufre el pulmon aireado.', formula: 'Presion de distension = meseta menos PEEP. Distensibilidad estatica = volumen corriente entre presion de distension (calculadora disponible).', interpretacion: 'Una presion de distension menor de 15 cmH2O (idealmente 13 o menos) se asocia a menor mortalidad en la SDRA y es un objetivo independiente del volumen corriente y de la meseta.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Via aerea artificial e inicio de la ventilacion invasiva',
      color: '#2e6b7a',
      definicion: 'Colocacion y manejo de un tubo endotraqueal (o de una traqueostomia) y programacion inicial del ventilador. La intubacion de secuencia rapida combina un sedante y un relajante muscular de accion rapida para asegurar la via aerea con el menor riesgo de aspiracion y de desaturacion.',
      fisiopatologia: 'El tubo endotraqueal salva la obstruccion y la perdida de reflejos, permite aspirar secreciones y aplicar presion positiva y FiO2 altas, pero anula la humidificacion y el filtrado nasales, aumenta la resistencia de la via aerea, abre una puerta de entrada para la neumonia asociada a la ventilacion y, con el manguito, puede lesionar la mucosa traqueal si la presion es excesiva.',
      epidemiologia: 'Parada respiratoria o inminente, incapacidad de proteger la via aerea (coma con Glasgow bajo, vomito, hemorragia o secreciones no manejables), hipoxemia o hipercapnia refractarias al soporte no invasivo, trabajo respiratorio insostenible, necesidad de sedacion profunda o de control estricto de la PaCO2, y estabilizacion para traslado o procedimiento.',
      factores_riesgo: ['Via aerea dificil prevista (obesidad, cuello corto, apertura bucal limitada, patologia cervical o facial): preparar plan alternativo, videolaringoscopio y ayuda experta', 'Hipotension previa: optimizar la volemia y tener un vasopresor preparado por el riesgo de colapso periintubacion', 'Hipoxemia previa: preoxigenar de forma optima (mascarilla con reservorio, canula de alto flujo o VNI) antes del intento'],
      clinica: 'Secuencia: preparar material y monitorizacion, preoxigenar 3 a 5 minutos (mascarilla con reservorio, canula de alto flujo o VNI), posicion en rampa, induccion (por ejemplo etomidato o ketamina) con relajante (rocuronio o succinilcolina), laringoscopia, confirmacion por capnografia sostenida y auscultacion, fijacion del tubo, presion del manguito 20 a 30 cmH2O, radiografia y ajuste del ventilador.',
      criterios_dx: 'Programacion inicial habitual: modo asistido-controlado por volumen, volumen corriente 6 mL/kg de peso predicho (calculadora disponible), frecuencia 14 a 20 por minuto ajustada al pH, PEEP 5 cmH2O, FiO2 1.0 y luego descenso rapido segun SpO2, flujo y trigger que eviten asincronias, y alarmas de presion y de volumen. Reevaluar meseta y presion de distension a los pocos minutos.',
      laboratorio: 'Gasometria a los 20 a 30 minutos, capnografia continua, presion del manguito cada turno, y vigilancia de la posicion del tubo (marca a la comisura, radiografia).',
      imagen: 'Radiografia de torax tras la intubacion (posicion del tubo, descartar neumotorax e intubacion selectiva); ecografia para confirmar ventilacion bilateral y descartar neumotorax de forma inmediata.',
      complementarios: 'Sonda gastrica para descomprimir el estomago; profilaxis de ulcera de estres y de tromboembolia; higiene oral con antiseptico y cabecera elevada 30 a 45 grados desde el inicio.',
      dx_diferencial: 'Traqueostomia: se considera si se preve ventilacion prolongada (mas de 7 a 10 dias), para facilitar el destete, la higiene bronquial y el confort; no ha demostrado reducir la mortalidad y el momento optimo se individualiza.',
      tx_medico: 'Mantener la via aerea permeable y segura con la minima lesion: presion del manguito controlada, aspiracion segun necesidad (no de rutina), humidificacion activa o intercambiador de calor y humedad, y revision diaria de la posibilidad de extubar o de decanular.',
      tx_farmacologico: 'Induccion: etomidato 0.3 mg/kg (estable en hipotension) o ketamina 1 a 2 mg/kg (util en broncoespasmo e hipotension), o propofol si hay estabilidad. Relajacion: rocuronio 1.2 mg/kg o succinilcolina 1 a 1.5 mg/kg (evitar succinilcolina en hiperpotasemia, quemaduras o denervacion de mas de 48 a 72 horas). Analgesia con fentanilo. Tras la intubacion, iniciar sedoanalgesia de mantenimiento (ver esa tarjeta).',
      tx_intervencionista: 'Plan de via aerea dificil escalonado (videolaringoscopia, mascarilla laringea de rescate, cricotiroidotomia si no se puede intubar ni ventilar); fibrobroncoscopia para intubacion con paciente despierto en la via aerea dificil prevista.',
      criterios_uci: 'Toda ventilacion invasiva se maneja en cuidados intensivos o intermedios. Deterioro brusco del paciente intubado: aplicar la regla DOPES (Desplazamiento del tubo, Obstruccion, Neumotorax -Pneumothorax-, fallo del Equipo, apilamiento de aire -Stacking-), desconectar y ventilar con bolsa mientras se busca la causa.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Revision diaria de la indicacion, de la presion del manguito, de la posicion y de los cuidados de prevencion de la neumonia asociada a la ventilacion; cribado diario de preparacion para el destete (ver esa tarjeta).',
      seguimiento_ambulatorio: 'Tras la extubacion: vigilar estridor y disfagia; en la traqueostomia prolongada, plan de decanulacion, logopedia y cuidados del estoma.',
      pronostico: 'La intubacion en si es segura con preparacion adecuada; la morbilidad se concentra en el colapso periintubacion evitable (preoxigenacion y hemodinamia) y en las complicaciones de la ventilacion prolongada.',
      algoritmo: ['Indicacion de via aerea: preparar material, monitorizacion y plan alternativo; preoxigenar y optimizar la hemodinamia', 'Intubacion de secuencia rapida: induccion mas relajante de accion rapida; confirmar por capnografia sostenida', 'Programacion inicial: asistido-controlado por volumen, 6 mL/kg de peso predicho, PEEP 5, FiO2 1.0 y descenso rapido', 'Radiografia, presion del manguito 20 a 30 cmH2O, sonda gastrica, cabecera a 30-45 grados e higiene oral', 'Iniciar sedoanalgesia de mantenimiento y revisar cada dia la posibilidad de destetar']
    },
    {
      nombre: 'Ventilacion no invasiva (CPAP y binivel)',
      color: '#3d5a73',
      definicion: 'Aplicacion de presion positiva a traves de una interfase (mascarilla oronasal, facial total o casco) sin via aerea artificial. La CPAP mantiene una presion continua; la ventilacion binivel (BiPAP) alterna una presion inspiratoria y otra espiratoria, asistiendo activamente cada respiracion.',
      fisiopatologia: 'La CPAP recluta alveolos colapsados, mejora la capacidad residual funcional y la oxigenacion, y reduce la poscarga del ventriculo izquierdo (util en el edema agudo de pulmon). La binivel anade una ayuda inspiratoria que descarga los musculos respiratorios y aumenta el volumen corriente y la eliminacion de CO2 (util en la hipercapnia). Al no aislar la via aerea, no protege de la aspiracion y su eficacia depende de la tolerancia y del ajuste de la interfase.',
      epidemiologia: 'Recomendacion fuerte: exacerbacion de EPOC con acidosis respiratoria (pH 7.35 o menor) y edema agudo de pulmon cardiogenico (CPAP o binivel). Recomendacion condicional: inmunodeprimido con insuficiencia respiratoria, facilitacion del destete en el EPOC, postoperatorio, traumatismo toracico y cuidados paliativos. Ensayo de binivel en el paciente que se considera candidato a intubacion, salvo deterioro inmediato.',
      factores_riesgo: ['Contraindicada en la parada respiratoria o cardiaca y en la incapacidad de proteger la via aerea o de manejar secreciones', 'Contraindicada con vomito o hemorragia digestiva alta activa, agitacion no controlable o inestabilidad hemodinamica grave', 'Contraindicada en la cirugia o el traumatismo facial o de la via aerea alta y en la obstruccion fija de la via aerea superior', 'Cautela y vigilancia estrecha en la insuficiencia respiratoria hipoxemica de novo y en la neumonia, por su alta tasa de fracaso'],
      clinica: 'Elegir la interfase (oronasal de inicio; casco si intolerancia o SDRA leve), ajustar las correas evitando fugas y lesiones por presion, empezar con presiones bajas (por ejemplo CPAP 5 a 8; binivel 8 a 10 sobre 4 a 5 de PEEP) y subir la ayuda inspiratoria para lograr un volumen corriente de 6 a 8 mL/kg y una frecuencia menor de 25 a 30. Humidificacion activa. Acompanamiento y explicacion al paciente para mejorar la tolerancia.',
      criterios_dx: 'CPAP 5 a 10 cmH2O en el edema agudo de pulmon; binivel con presion inspiratoria 10 a 20 y espiratoria (PEEP) 4 a 8 cmH2O en la hipercapnia, titulando por el volumen corriente, la frecuencia y el pH; FiO2 para SpO2 88 a 92% en el retenedor y 92 a 96% en el resto.',
      laboratorio: 'Gasometria basal y a la hora: la mejoria del pH y de la PaCO2 predice el exito; su ausencia o el empeoramiento indican fracaso y necesidad de intubar sin demora.',
      imagen: 'Radiografia para valorar la causa (edema, neumonia, derrame) y descartar contraindicaciones; vigilar distension gastrica por aerofagia.',
      complementarios: 'Registrar de forma explicita un limite de esfuerzo terapeutico si la VNI se usa como techo (por ejemplo en cuidados paliativos o en el paciente no candidato a intubacion).',
      dx_diferencial: 'Si a la 1 a 2 horas no hay mejoria clinica ni gasometrica, o aparecen intolerancia, agitacion, deterioro del sensorio o inestabilidad: pasar a ventilacion invasiva. Retrasar una intubacion necesaria empeora el pronostico.',
      tx_medico: 'Tratar en paralelo la causa (broncodilatadores y corticoides en el EPOC, diureticos y vasodilatadores en el edema, antibiotico en la neumonia). Pausas cortas para comer, hablar y aplicar cuidados de la piel.',
      tx_farmacologico: 'Sedacion minima si hay ansiedad que impide la adaptacion (dexmedetomidina o dosis bajas de opioide), con vigilancia del nivel de conciencia y sin comprometer el estimulo respiratorio.',
      tx_intervencionista: 'Cambio de interfase (casco, facial total) ante fuga o lesion cutanea; escalado a intubacion si hay fracaso.',
      criterios_uci: 'Signos de fracaso: no mejoria o empeoramiento del pH y la PaCO2, frecuencia respiratoria persistentemente alta, deterioro del sensorio, asincronia grave, inestabilidad hemodinamica o intolerancia. Vigilar en area monitorizada.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Reevaluacion clinica y gasometrica a los 30 a 60 minutos y a las 2, 6 y 12 horas; revision de la piel de la interfase; retirada progresiva al mejorar la causa.',
      seguimiento_ambulatorio: 'En el EPOC con hipercapnia cronica persistente al alta, valorar VNI domiciliaria; en la apnea del sueno o el sindrome de obesidad-hipoventilacion, CPAP o binivel a largo plazo.',
      pronostico: 'En el EPOC acidotico y en el edema agudo de pulmon, la VNI reduce la intubacion y la mortalidad; en la insuficiencia hipoxemica de novo y la neumonia el fracaso es frecuente y su uso exige vigilancia estrecha.',
      algoritmo: ['Indicacion clara (EPOC con pH 7.35 o menor, edema agudo de pulmon): iniciar VNI en area monitorizada', 'Elegir interfase, empezar con presiones bajas y titular la ayuda inspiratoria por el volumen corriente, la frecuencia y el pH', 'Tratar la causa en paralelo; acompanar al paciente para mejorar la tolerancia', 'Gasometria a la hora: si mejora, continuar y destetar; si no mejora o empeora, intubar sin demora', 'Definir de antemano si la VNI es un puente a la intubacion o un techo terapeutico']
    },
    {
      nombre: 'Canula nasal de alto flujo',
      color: '#3f6b52',
      definicion: 'Sistema que entrega oxigeno humidificado y calentado a flujos de 30 a 60 L/min con una FiO2 regulable entre 0.21 y 1.0 a traves de unas canulas nasales de mayor calibre.',
      fisiopatologia: 'El alto flujo lava el espacio muerto nasofaringeo (mejora la eliminacion de CO2), genera una PEEP baja y variable (de 2 a 5 cmH2O, mayor con la boca cerrada), aporta una FiO2 estable poco diluida por el flujo inspiratorio del paciente, reduce el trabajo respiratorio y, al humidificar y calentar, mejora el aclaramiento mucociliar y el confort.',
      epidemiologia: 'Insuficiencia respiratoria hipoxemica aguda de novo (en el ensayo FLORALI redujo la mortalidad frente al oxigeno convencional y a la VNI en el subgrupo con PaO2/FiO2 200 o menor); preoxigenacion y apnea durante la intubacion; postextubacion en el paciente de riesgo; y como alternativa mejor tolerada que la VNI en muchos escenarios hipoxemicos. Tambien en cuidados paliativos.',
      factores_riesgo: ['No sustituye a la ventilacion cuando hay hipercapnia con acidosis significativa: su efecto sobre la PaCO2 es limitado', 'No indicada si hay criterio de intubacion inmediata, incapacidad de proteger la via aerea o inestabilidad grave', 'Obstruccion nasal marcada o traumatismo facial que impidan colocar la interfase'],
      clinica: 'Iniciar con flujo alto (50 a 60 L/min) y FiO2 para la SpO2 objetivo, ajustar la temperatura al confort (habitualmente 37 grados), y reducir primero la FiO2 y luego el flujo segun la respuesta. Vigilar la frecuencia respiratoria, el uso de musculatura accesoria y el indice ROX.',
      criterios_dx: 'Flujo 30 a 60 L/min; FiO2 titulada a SpO2 92 a 96% (88 a 92% en el retenedor); temperatura 34 a 37 grados. Reevaluar el indice ROX (SpO2/FiO2 entre la frecuencia respiratoria) a las 2, 6 y 12 horas.',
      laboratorio: 'Gasometria si hay sospecha de hipercapnia o acidosis; en la hipoxemia pura, el seguimiento puede hacerse con SpO2/FiO2 e indice ROX.',
      imagen: 'La de la enfermedad de base; no requiere control especifico.',
      complementarios: 'Compatible con la fisioterapia respiratoria, la nutricion oral y la comunicacion, lo que favorece la tolerancia y la movilizacion.',
      dx_diferencial: 'Si el indice ROX es menor de 3.85 a las 2 a 12 horas, o hay taquipnea persistente, uso de musculatura accesoria, deterioro del sensorio o inestabilidad: no retrasar la intubacion. Un indice ROX de 4.88 o mayor apoya continuar.',
      tx_medico: 'Tratamiento de la causa; combinar con periodos de decubito prono despierto en la hipoxemia por neumonia o SDRA leve en el paciente colaborador.',
      tx_farmacologico: 'No requiere sedacion; broncodilatadores nebulizados compatibles con el sistema.',
      tx_intervencionista: 'Escalado a VNI (si hay componente hipercapnico o fatiga) o a intubacion segun la evolucion.',
      criterios_uci: 'Signos de fracaso: indice ROX bajo o descendente, frecuencia respiratoria mayor de 30 a 35 sostenida, trabajo respiratorio elevado, hipoxemia que no mejora, hipercapnia progresiva o deterioro del sensorio.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Indice ROX y evaluacion clinica seriados en las primeras 12 horas (el periodo de mayor riesgo de fracaso); descenso escalonado de FiO2 y flujo al mejorar.',
      seguimiento_ambulatorio: 'Habitualmente no se mantiene al alta; en casos concretos de hipoxemia cronica se usa oxigenoterapia convencional domiciliaria.',
      pronostico: 'En la hipoxemia de novo mejora el confort y, en los casos mas graves, puede reducir la intubacion y la mortalidad frente al oxigeno convencional; su principal riesgo es enmascarar un fracaso y retrasar la intubacion.',
      algoritmo: ['Insuficiencia respiratoria hipoxemica de novo o postextubacion de riesgo: iniciar canula de alto flujo', 'Flujo 50 a 60 L/min y FiO2 titulada a la SpO2 objetivo; temperatura al confort', 'Calcular el indice ROX a las 2, 6 y 12 horas', 'ROX 4.88 o mayor: continuar y destetar FiO2 y luego flujo; ROX menor de 3.85 o clinica de fracaso: intubar sin demora', 'Considerar decubito prono despierto en el paciente colaborador con hipoxemia por neumonia']
    },
    {
      nombre: 'Modos controlados y ventilacion protectora (SDRA y obstructivo)',
      color: '#8a6a1f',
      definicion: 'Modos en los que el ventilador entrega todos los ciclos con una frecuencia y un patron fijados, controlando el volumen corriente (y dejando la presion como variable dependiente) o la presion inspiratoria (dejando el volumen como variable dependiente). Son la base de la fase aguda y del ajuste protector.',
      fisiopatologia: `La lesion pulmonar inducida por el ventilador surge de la sobredistension (volumen y presion excesivos), del colapso y reapertura ciclica de alveolos (baja PEEP), y de la energia total aplicada (poder mecanico). La ventilacion protectora limita el volumen corriente al pulmon aireado ("baby lung" en la SDRA), la meseta y la presion de distension, y usa una PEEP suficiente para evitar el colapso sin sobredistender. En el pulmon obstructivo el problema es la espiracion: el tiempo espiratorio insuficiente atrapa aire y genera auto-PEEP, que aumenta el trabajo, provoca esfuerzos inefectivos e hipotension.${figBlock('Figura 5', 'Tabla PEEP/FiO2 de ARDSNet', peepFio2Html)}`,
      epidemiologia: 'Fase aguda de cualquier insuficiencia respiratoria que requiere ventilacion invasiva; SDRA de cualquier gravedad (ventilacion protectora obligada); crisis asmatica casi fatal y EPOC grave intubados (estrategia de hipoventilacion controlada); y cualquier situacion que exija control estricto de la PaCO2 o ausencia de esfuerzo del paciente.',
      factores_riesgo: ['Ventilacion no protectora: volumen corriente alto, meseta o presion de distension altas, poder mecanico elevado; causa lesion incluso en pulmones previamente sanos', 'En el paciente obstructivo, una frecuencia alta o un tiempo espiratorio corto empeoran el atrapamiento aereo y el auto-PEEP'],
      clinica: 'SDRA: volumen corriente 6 mL/kg de peso predicho (reducir a 4 si la meseta pasa de 30 o la presion de distension de 15), frecuencia hasta 30 a 35 con hipercapnia permisiva (pH 7.20 a 7.30 aceptable), PEEP segun la tabla PEEP/FiO2 (mayor PEEP si PaO2/FiO2 menor de 200), decubito prono al menos 16 horas si PaO2/FiO2 menor de 150, bloqueo neuromuscular en las primeras 48 horas si hay asincronia grave o hipoxemia refractaria, y valorar oxigenacion por membrana extracorporea si sigue refractaria. Obstructivo: volumen corriente 6 a 8 mL/kg, frecuencia baja (10 a 14), flujo inspiratorio alto para alargar la espiracion, relacion I:E de 1:3 a 1:5, PEEP baja o nula, y aceptar hipercapnia; broncodilatacion intensiva.',
      criterios_dx: 'Parametros de partida en SDRA: volumen corriente 6 mL/kg de peso predicho (calculadora disponible), PEEP 8 a 12, FiO2 para SpO2 88 a 95%, frecuencia para el pH; medir meseta y presion de distension con pausa inspiratoria (calculadora disponible). En obstructivo: medir auto-PEEP con pausa espiratoria y minimizarla.',
      laboratorio: 'Gasometria para titular la ventilacion y aceptar la hipercapnia permisiva; vigilar el pH (mantener por encima de 7.15 a 7.20, corregir con bicarbonato solo si es muy bajo y mal tolerado).',
      imagen: 'Radiografia o ecografia para valorar el reclutamiento, detectar barotrauma y seguir la evolucion; tomografia si se plantea una maniobra de reclutamiento o hay dudas.',
      complementarios: 'Poder mecanico como parametro integrador de riesgo (calculadora disponible); las maniobras de reclutamiento sistematicas con PEEP muy alta no se recomiendan de rutina por senal de dano.',
      dx_diferencial: 'Distinguir la hipoxemia por SDRA de la de origen cardiaco (ecocardiograma, respuesta a diureticos), de la tromboembolia y de la atelectasia; el patron mecanico (baja distensibilidad frente a espiracion limitada) orienta la estrategia.',
      tx_medico: 'Objetivo: oxigenacion y ventilacion suficientes con la menor lesion. Sedacion profunda y, si hace falta, bloqueo neuromuscular en la fase mas grave; decubito prono precoz en la SDRA moderada-grave; balance hidrico conservador una vez resuelto el choque.',
      tx_farmacologico: 'Bloqueo neuromuscular en perfusion (por ejemplo cisatracurio) durante 24 a 48 horas si hay asincronia grave, hipoxemia refractaria o presiones altas pese a sedacion profunda; broncodilatadores y corticoides en el obstructivo; sedoanalgesia adecuada (ver esa tarjeta).',
      tx_intervencionista: 'Decubito prono; maniobra de reclutamiento breve en casos seleccionados con vigilancia hemodinamica; oxigenacion por membrana extracorporea venovenosa en la SDRA grave refractaria (PaO2/FiO2 muy baja o hipercapnia con acidosis que no se controla con ventilacion protectora).',
      criterios_uci: 'Meseta que no baja de 30 o presion de distension que no baja de 15 pese a reducir el volumen corriente, hipoxemia refractaria pese a prono y bloqueo, o hipercapnia con acidosis grave no controlable: senales de dano y de necesidad de escalar (prono, bloqueo, oxigenacion extracorporea).',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Medir cada dia meseta, presion de distension, distensibilidad y auto-PEEP; reducir FiO2 y PEEP en cuanto la oxigenacion lo permita; retirar el bloqueo neuromuscular lo antes posible y aligerar la sedacion para pasar a modos asistidos.',
      seguimiento_ambulatorio: 'Tras la SDRA, seguimiento de la funcion pulmonar, de la capacidad de ejercicio y de las secuelas cognitivas y musculares (sindrome post-cuidados intensivos).',
      pronostico: 'La ventilacion protectora (volumen corriente bajo, meseta y presion de distension limitadas) y el decubito prono reducen la mortalidad de la SDRA; la estrategia de hipoventilacion controlada previene el barotrauma en el asma casi fatal.',
      algoritmo: ['Fase aguda: modo controlado por volumen o por presion; en SDRA, volumen corriente 6 mL/kg de peso predicho', 'Medir meseta y presion de distension; reducir el volumen corriente a 4 mL/kg si meseta 30 o mas, o presion de distension 15 o mas', 'Titular la PEEP con la tabla PEEP/FiO2 (mayor PEEP si PaO2/FiO2 menor de 200); hipercapnia permisiva con pH por encima de 7.20', 'PaO2/FiO2 menor de 150: decubito prono al menos 16 horas; bloqueo neuromuscular si hay asincronia grave o hipoxemia refractaria', 'Obstructivo: frecuencia baja, tiempo espiratorio largo, PEEP baja, medir y minimizar el auto-PEEP; oxigenacion extracorporea si sigue refractario']
    },
    {
      nombre: 'Modos asistidos y espontaneos; sedoanalgesia y bloqueo neuromuscular',
      color: '#6b4a2e',
      definicion: 'Modos en los que el paciente participa: asistido-controlado (el ventilador entrega un ciclo completo por cada esfuerzo, con frecuencia minima de respaldo) y de soporte de presion (el paciente marca la frecuencia y el volumen, el ventilador asiste cada esfuerzo con una presion fija). Se acompanan de una estrategia de sedoanalgesia ligera y dirigida por objetivos.',
      fisiopatologia: 'Recuperar el esfuerzo del paciente reduce la atrofia diafragmatica y facilita el destete, pero un esfuerzo excesivo sobre un pulmon lesionado genera presiones transpulmonares altas y lesion por el propio paciente (P-SILI), y una asistencia mal ajustada produce asincronias. La sedacion profunda prolonga la ventilacion, aumenta el delirium y la debilidad; la analgesia primero y la sedacion ligera acortan la ventilacion y la estancia.',
      epidemiologia: 'Se pasa a modos asistidos en cuanto el paciente recupera el estimulo respiratorio, la oxigenacion mejora (FiO2 0.5 o menos, PEEP 8 o menos) y la causa esta en resolucion; el soporte de presion es el modo habitual de la fase previa al destete. El bloqueo neuromuscular se limita a la SDRA grave precoz con asincronia o hipoxemia refractaria y a situaciones puntuales (hipertension intracraneal, escalofrio en el control de temperatura).',
      factores_riesgo: ['Evitar la sedacion profunda de rutina y las benzodiacepinas en perfusion, que aumentan el delirium', 'Evitar el bloqueo neuromuscular prolongado o sin sedacion adecuada: riesgo de despertar paralizado y de miopatia', 'En el esfuerzo espontaneo intenso sobre pulmon lesionado, vigilar la presion de distension y la P0.1 para no permitir P-SILI'],
      clinica: 'En soporte de presion: ajustar la presion de ayuda para un volumen corriente de 6 a 8 mL/kg y una frecuencia de 20 a 30, con trigger sensible y trigger espiratorio adaptado para evitar el ciclado precoz o tardio. Sedoanalgesia: escala de dolor (por ejemplo escala conductual) y de sedacion (RASS objetivo de 0 a menos 1), interrupcion diaria de la sedacion coordinada con la prueba de respiracion espontanea, y protocolo de prevencion y tratamiento del delirium (evaluacion con CAM-ICU, movilizacion precoz, higiene del sueno).',
      criterios_dx: 'Soporte de presion inicial 8 a 12 cmH2O sobre PEEP 5 a 8; FiO2 para SpO2 objetivo. Analgesia de primera linea con opioide (fentanilo, remifentanilo) titulada al dolor; sedante de eleccion propofol o dexmedetomidina segun el objetivo (la dexmedetomidina permite un paciente mas despierto y colaborador).',
      laboratorio: 'Vigilar el equilibrio acido-base (la sobreasistencia produce alcalosis e hipoventilacion central), la funcion renal y hepatica (aclaramiento de sedantes), los trigliceridos y las calorias del propofol, y los signos de sindrome de infusion de propofol (acidosis, rabdomiolisis, fallo cardiaco) con dosis altas y prolongadas.',
      imagen: 'Ecografia diafragmatica para seguir la fraccion de engrosamiento (marcador de esfuerzo y de atrofia) y ayudar a decidir el ritmo de descarga.',
      complementarios: 'Paquete de medidas ABCDEF: valoracion y manejo del dolor, pruebas de despertar y de respiracion espontanea, eleccion de sedacion, delirium, movilizacion precoz e implicacion de la familia.',
      dx_diferencial: 'Distinguir la agitacion por dolor, por delirium, por asincronia, por hipoxemia o hipercapnia, o por abstinencia; tratar la causa antes de subir la sedacion.',
      tx_medico: 'Mantener al paciente despierto, comodo y colaborador siempre que sea posible; movilizacion precoz activa; higiene del sueno; retirar sedantes y opioides de forma escalonada para evitar la abstinencia tras un uso prolongado.',
      tx_farmacologico: 'Analgesia: fentanilo o remifentanilo en perfusion, morfina si funcion renal conservada. Sedacion: propofol (inicio y despertar rapidos, vigilar triglicéridos y el sindrome de infusion) o dexmedetomidina (menos delirium, permite colaboracion, puede dar bradicardia e hipotension); evitar benzodiacepinas salvo abstinencia alcoholica, epilepsia o necesidad de amnesia profunda. Bloqueo neuromuscular: cisatracurio en perfusion 24 a 48 horas con sedacion profunda garantizada y monitorizacion del tren de cuatro.',
      tx_intervencionista: 'No aplica de forma especifica; el ajuste es de parametros y de farmacos.',
      criterios_uci: 'Sedacion excesiva (RASS menos 3 a menos 5 sin indicacion), delirium hiperactivo o hipoactivo, esfuerzo espontaneo intenso con presiones transpulmonares altas (riesgo de P-SILI), o bloqueo neuromuscular sin sedacion adecuada: corregir de inmediato.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Evaluacion por turno del dolor, la sedacion (RASS) y el delirium (CAM-ICU); interrupcion diaria de la sedacion; progresion de la movilizacion; ajuste de la ayuda para preparar el destete.',
      seguimiento_ambulatorio: 'Vigilar el sindrome post-cuidados intensivos (deterioro cognitivo, estres postraumatico, debilidad); rehabilitacion.',
      pronostico: 'La sedacion ligera dirigida por objetivos, la analgesia primero, la interrupcion diaria y la movilizacion precoz acortan la ventilacion y la estancia y reducen el delirium y la debilidad.',
      algoritmo: ['Al recuperar el estimulo y mejorar la oxigenacion: pasar a modo asistido y luego a soporte de presion', 'Ajustar la ayuda para volumen corriente 6 a 8 mL/kg y frecuencia 20 a 30; corregir el ciclado precoz o tardio', 'Analgesia primero (opioide titulado al dolor); sedante ligero (propofol o dexmedetomidina), RASS objetivo 0 a menos 1', 'Interrupcion diaria de la sedacion coordinada con la prueba de respiracion espontanea; evaluar el delirium y movilizar', 'Bloqueo neuromuscular solo en SDRA grave precoz con asincronia o hipoxemia refractaria, 24 a 48 horas y con sedacion profunda']
    },
    {
      nombre: 'Destete y liberacion de la ventilacion mecanica',
      color: '#3f6b52',
      definicion: 'Proceso de retirada progresiva del soporte hasta la respiracion espontanea y la extubacion. La liberacion incluye la prueba de respiracion espontanea, la decision de extubar y el soporte tras la extubacion.',
      fisiopatologia: `El destete falla cuando la carga (resistencia, distensibilidad baja, auto-PEEP, secreciones) supera a la capacidad (fuerza y resistencia de los musculos respiratorios, estimulo central), o por causas cardiacas (el paso a presion negativa aumenta el retorno venoso y la poscarga y puede desencadenar edema), metabolicas, psicologicas o de via aerea (edema, secreciones, tos ineficaz).${figBlock('Figura 6', 'Algoritmo de destete y liberacion', desteteHtml)}`,
      epidemiologia: 'Todo paciente ventilado mas de 24 horas debe someterse a un cribado diario de preparacion para el destete; la mayoria se extuba tras la primera prueba de respiracion espontanea satisfactoria. El destete se considera dificil si fracasan varias pruebas o dura mas de una semana.',
      factores_riesgo: ['Predisponen al fracaso del destete: EPOC, insuficiencia cardiaca, ventilacion prolongada y debilidad adquirida en la UCI', 'Tambien la sobrecarga hidrica, el delirium, la edad avanzada, la anemia y la desnutricion', 'La reintubacion empeora el pronostico: hay que equilibrar no extubar demasiado pronto y no prolongar la ventilacion sin necesidad'],
      clinica: 'Cribado: causa en resolucion, PaO2/FiO2 mayor de 150 a 200 con PEEP 5 a 8 y FiO2 0.4 a 0.5, hemodinamia estable con vasopresores minimos o nulos, esfuerzo inspiratorio presente y sin acidosis grave. Prueba de respiracion espontanea de 30 a 120 minutos con presion de soporte de 5 a 8 cmH2O (mejor que con tubo en T) coordinada con la interrupcion de la sedacion. Extubar si tolera la prueba y protege la via aerea (conciencia, tos eficaz, secreciones manejables).',
      criterios_dx: 'Indice de respiracion rapida y superficial menor de 105 (calculadora disponible), volumen minuto y frecuencia estables, sin desaturacion ni taquicardia o hipertension marcadas, sin diaforesis ni uso de musculatura accesoria durante la prueba.',
      laboratorio: 'Gasometria al final de la prueba si hay dudas; corregir antes anemia grave, alteraciones del potasio, el fosforo y el magnesio, y la sobrecarga hidrica.',
      imagen: 'Ecografia diafragmatica (excursion y fraccion de engrosamiento) y pulmonar (aireacion) para apoyar la decision en el destete dificil; ecocardiografia si se sospecha causa cardiaca del fracaso.',
      complementarios: 'Prueba de fuga del manguito en el paciente con riesgo de estridor postextubacion (intubacion traumatica o prolongada, tubo grande, mujer, reintubacion previa); si es positiva, corticoides sistemicos al menos 4 horas antes de extubar.',
      dx_diferencial: 'Distinguir el fracaso respiratorio del cardiaco (edema al retirar la presion positiva: manejar con diureticos y control de la poscarga), del neuromuscular (debilidad, ver esa tarjeta), del psicologico (ansiedad, delirium) y del obstructivo de via aerea alta.',
      tx_medico: 'Optimizar la carga (broncodilatadores, drenaje de secreciones, balance hidrico negativo, tratar la insuficiencia cardiaca) y la capacidad (nutricion, correccion de electrolitos, movilizacion, reducir sedacion); protocolizar el proceso y coordinar despertar y prueba de respiracion espontanea (paquete ABC).',
      tx_farmacologico: 'Diureticos si hay sobrecarga; corticoides antes de extubar si la prueba de fuga es positiva; retirada escalonada de opioides y sedantes para evitar la abstinencia.',
      tx_intervencionista: 'VNI o canula de alto flujo profilacticas tras la extubacion en el paciente de alto riesgo (EPOC, insuficiencia cardiaca, mayor de 65 anos, ventilacion prolongada) para prevenir la reintubacion; traqueostomia si el destete se preve muy prolongado.',
      criterios_uci: 'Fracaso de la prueba de respiracion espontanea (taquipnea, indice de respiracion rapida y superficial mayor de 105, desaturacion, taquicardia o hipertension, agitacion, diaforesis): volver a un modo de descanso 24 horas, buscar y corregir la causa, y repetir la prueba al dia siguiente.',
      criterios_tips: 'No aplica.',
      seguimiento_hospitalario: 'Cribado y prueba diarios; tras la extubacion, vigilancia estrecha de estridor, trabajo respiratorio, secreciones y sensorio en las primeras horas; no retrasar la reintubacion si es necesaria.',
      seguimiento_ambulatorio: 'En la unidad de destete prolongado o de cronicos, plan estructurado de descarga progresiva y decanulacion; rehabilitacion respiratoria y global.',
      pronostico: 'La mayoria de los pacientes se liberan tras la primera prueba satisfactoria; la protocolizacion del destete, la sedacion ligera, la movilizacion precoz y la VNI profilactica postextubacion en pacientes seleccionados reducen la duracion de la ventilacion y la reintubacion.',
      algoritmo: ['Paciente ventilado mas de 24 horas: cribado diario de preparacion para el destete', 'Si cumple criterios: prueba de respiracion espontanea 30 a 120 minutos con presion de soporte 5 a 8, coordinada con la interrupcion de la sedacion', 'Valorar la tolerancia (frecuencia, indice de respiracion rapida y superficial, saturacion, hemodinamia, trabajo, diaforesis)', 'Si tolera y protege la via aerea: extubar; prueba de fuga y corticoides si hay riesgo de estridor', 'Alto riesgo de reintubacion: VNI o canula de alto flujo profilacticas; si fracasa la prueba, descanso 24 horas y repetir']
    },
    {
      nombre: 'Lesion pulmonar inducida por el ventilador',
      color: '#8c3a34',
      modalLabels: { itemName: 'Complicacion', definicion: 'Definicion', fisiopatologia: 'Fisiopatologia', epidemiologia: 'Epidemiologia', factores_riesgo: 'Factores de riesgo', clinica: 'Manifestaciones clinicas', criterios_dx: 'Diagnostico', laboratorio: 'Laboratorio', imagen: 'Imagen', complementarios: 'Estudios complementarios', dx_diferencial: 'Diagnostico diferencial', tx_medico: 'Prevencion y tratamiento medico', tx_farmacologico: 'Tratamiento farmacologico', tx_intervencionista: 'Tratamiento intervencionista', criterios_uci: 'Gravedad', seguimiento_hospitalario: 'Seguimiento hospitalario', pronostico: 'Pronostico', algoritmo: 'Puntos clave' },
      definicion: 'Dano pulmonar causado por la propia ventilacion mecanica. Incluye el barotrauma (fuga de aire: neumotorax, neumomediastino, enfisema subcutaneo, neumoperitoneo), el volutrauma (sobredistension por volumen excesivo), el atelectrauma (colapso y reapertura ciclica por PEEP insuficiente) y el biotrauma (inflamacion local y sistemica que perpetua la SDRA y contribuye al fallo multiorganico). El esfuerzo espontaneo intenso sobre un pulmon lesionado produce un dano analogo (P-SILI).',
      fisiopatologia: 'La tension y la deformacion ciclicas excesivas rompen la barrera alveolo-capilar, aumentan la permeabilidad y liberan citocinas; el aire diseca por los planos peribroncovasculares hacia el mediastino y el tejido subcutaneo. La energia total transferida por unidad de tiempo (poder mecanico: producto de volumen, presiones, PEEP y frecuencia) integra estos mecanismos.',
      epidemiologia: 'El barotrauma clinicamente evidente aparece en una minoria de los pacientes ventilados, mas en la SDRA, el asma casi fatal, la neumonia necrosante y la enfermedad pulmonar quistica; el volutrauma y el atelectrauma subclinicos son mucho mas frecuentes y median el pronostico.',
      factores_riesgo: ['Volumen corriente alto, meseta mayor de 30 y presion de distension mayor de 15 cmH2O', 'PEEP insuficiente para el pulmon reclutable y poder mecanico elevado', 'Presiones pico muy altas por broncoespasmo o secreciones', 'Esfuerzo espontaneo vigoroso no controlado'],
      clinica: 'Barotrauma: deterioro brusco de la oxigenacion y la hemodinamia, aumento de las presiones, enfisema subcutaneo palpable, hipotension y desviacion traqueal (neumotorax a tension). El volutrauma y el biotrauma se manifiestan como SDRA que no mejora o que empeora y como fallo multiorganico.',
      criterios_dx: 'Barotrauma por radiografia o ecografia (neumotorax, aire en mediastino o subcutaneo); la sospecha de neumotorax a tension es clinica y obliga a descompresion inmediata sin esperar a la imagen. El volutrauma y el atelectrauma se infieren de una mecanica desfavorable (meseta y presion de distension altas, baja distensibilidad) y de la progresion de la SDRA.',
      laboratorio: 'No hay marcador especifico; las citocinas se elevan pero no se usan en la practica. Gasometria para valorar el impacto.',
      imagen: 'Radiografia y sobre todo ecografia pulmonar a pie de cama (ausencia de deslizamiento pleural, punto pulmonar) para el neumotorax; tomografia si hay dudas o para cuantificar el pulmon reclutable.',
      complementarios: 'Calculo del poder mecanico y de la presion de distension como parametros de riesgo; presion transpulmonar con cateter esofagico en casos seleccionados para titular la PEEP y limitar el esfuerzo.',
      dx_diferencial: 'Otras causas de deterioro brusco del paciente ventilado (regla DOPES: desplazamiento u obstruccion del tubo, neumotorax, fallo del equipo, apilamiento de aire); progresion de la enfermedad de base frente a lesion inducida por el ventilador.',
      tx_medico: 'Prevencion: ventilacion protectora (volumen corriente 4 a 8 mL/kg de peso predicho, meseta menor de 30, presion de distension menor de 15), PEEP adecuada, minimizar el poder mecanico y controlar el esfuerzo espontaneo excesivo con sedacion o bloqueo. Tratamiento del neumotorax: drenaje pleural.',
      tx_farmacologico: 'Sedacion y, si procede, bloqueo neuromuscular para abolir el esfuerzo lesivo en la fase aguda de la SDRA grave.',
      tx_intervencionista: 'Toracocentesis con aguja o drenaje inmediato en el neumotorax a tension; drenaje pleural en el neumotorax simple; oxigenacion por membrana extracorporea para permitir una ventilacion ultraprotectora en la SDRA grave con lesion en curso.',
      criterios_uci: 'El neumotorax a tension es una emergencia; la lesion en curso pese a ventilacion protectora (presiones altas irreductibles, SDRA que empeora) indica escalar a prono, bloqueo y oxigenacion extracorporea.',
      seguimiento_hospitalario: 'Vigilar las presiones y la mecanica cada dia; radiografia o ecografia ante cualquier deterioro; retirar el drenaje pleural cuando cese la fuga y se reexpanda el pulmon.',
      pronostico: 'El barotrauma con neumotorax a tension no reconocido es rapidamente mortal; el volutrauma y el biotrauma repetidos empeoran la mortalidad de la SDRA, y su prevencion con ventilacion protectora es una de las intervenciones de mayor impacto.',
      algoritmo: ['Prevenir: volumen corriente 4 a 8 mL/kg de peso predicho, meseta menor de 30, presion de distension menor de 15, PEEP adecuada, minimizar el poder mecanico', 'Deterioro brusco del paciente ventilado: aplicar la regla DOPES y descomprimir de inmediato si hay sospecha de neumotorax a tension', 'Confirmar el barotrauma con ecografia o radiografia; drenaje pleural en el neumotorax', 'SDRA que empeora pese a ventilacion protectora: prono, bloqueo neuromuscular y valorar oxigenacion extracorporea', 'Controlar el esfuerzo espontaneo excesivo para prevenir la lesion por el propio paciente']
    },
    {
      nombre: 'Neumonia asociada a la ventilacion',
      color: '#7a1f3d',
      modalLabels: { itemName: 'Complicacion', definicion: 'Definicion', fisiopatologia: 'Fisiopatologia', epidemiologia: 'Epidemiologia', factores_riesgo: 'Factores de riesgo', clinica: 'Manifestaciones clinicas', criterios_dx: 'Diagnostico', laboratorio: 'Laboratorio', imagen: 'Imagen', complementarios: 'Estudios complementarios', dx_diferencial: 'Diagnostico diferencial', tx_medico: 'Prevencion y tratamiento medico', tx_farmacologico: 'Tratamiento antibiotico', tx_intervencionista: 'Tratamiento intervencionista', criterios_uci: 'Gravedad', seguimiento_hospitalario: 'Seguimiento hospitalario', pronostico: 'Pronostico', algoritmo: 'Puntos clave' },
      definicion: 'Neumonia que aparece a las 48 horas o mas del inicio de la ventilacion invasiva. La traqueobronquitis asociada a la ventilacion es un cuadro relacionado, sin infiltrado radiologico nuevo, que a veces precede a la neumonia.',
      fisiopatologia: 'El tubo endotraqueal anula los mecanismos de defensa de la via aerea alta, mantiene abierta la glotis y permite la microaspiracion del contenido subglotico colonizado (biofilm en el tubo, secreciones orofaringeas y gastricas) hacia el pulmon; la posicion supina, la sedacion profunda y la nutricion enteral favorecen el reflujo y la aspiracion.',
      epidemiologia: 'Es la infeccion nosocomial mas frecuente en el paciente ventilado; el riesgo es mayor en la primera semana (alrededor del 3% por dia los primeros 5 dias y menos despues) y se asocia a mas dias de ventilacion, mas estancia y mayor mortalidad atribuible.',
      factores_riesgo: ['Ventilacion prolongada y reintubacion', 'Sedacion profunda sin interrupcion diaria y posicion supina', 'Sonda nasogastrica, profilaxis de ulcera de estres con inhibidores de la bomba de protones y transporte fuera de la unidad', 'Aspiracion previa, EPOC y SDRA'],
      clinica: 'Fiebre o hipotermia, leucocitosis o leucopenia, secreciones traqueales purulentas y abundantes, empeoramiento de la oxigenacion (aumento de la FiO2 o de la PEEP) e inestabilidad; en el anciano y el inmunodeprimido puede faltar la fiebre.',
      criterios_dx: 'Infiltrado radiologico nuevo o progresivo mas al menos dos de: fiebre, leucocitosis o leucopenia, y secrecion purulenta, junto con un cultivo respiratorio (aspirado traqueal o lavado broncoalveolar, preferiblemente cuantitativo) obtenido antes de cambiar el antibiotico. Ningun criterio aislado es especifico.',
      laboratorio: 'Cultivo cuantitativo de secreciones respiratorias, hemocultivos, procalcitonina y proteina C reactiva para apoyar la decision y la duracion; considerar panel molecular rapido para acortar el tiempo hasta el antibiotico dirigido.',
      imagen: 'Radiografia de torax (infiltrado nuevo o progresivo); tomografia y ecografia ayudan a diferenciar atelectasia, derrame, edema y absceso.',
      complementarios: 'Paquete de prevencion: cabecera elevada 30 a 45 grados, higiene oral con clorhexidina o sin ella segun el protocolo local, interrupcion diaria de la sedacion y pruebas de respiracion espontanea, profilaxis de ulcera y de tromboembolia, tubos con aspiracion subglotica en la ventilacion prevista prolongada, control de la presion del manguito y evitar la reintubacion.',
      dx_diferencial: 'Atelectasia, edema pulmonar, SDRA en evolucion, tromboembolia con infarto, hemorragia alveolar, neumonitis por aspiracion quimica y traqueobronquitis sin infiltrado.',
      tx_medico: 'Antibiotico empirico precoz tras obtener cultivos, dirigido segun los factores de riesgo de resistencia y la epidemiologia local; desescalada a las 48 a 72 horas con el resultado; duracion de 7 dias en la mayoria de los casos si hay buena respuesta.',
      tx_farmacologico: 'Empirico segun el riesgo de multirresistencia: cobertura de bacilos gramnegativos incluida Pseudomonas (por ejemplo piperacilina-tazobactam, cefepima o meropenem) y de Staphylococcus aureus resistente a meticilina (vancomicina o linezolid) si hay factores de riesgo o alta prevalencia local; doble cobertura antipseudomonica solo en el choque septico o con alta resistencia. Ajustar por cultivo y funcion renal.',
      tx_intervencionista: 'Broncoscopia para toma de muestras y para drenar tapones o atelectasia lobar; drenaje de empiema o de absceso si aparecen.',
      criterios_uci: 'El paciente ya esta en cuidados intensivos; la neumonia asociada a la ventilacion con choque septico o SDRA marca la gravedad y guia la amplitud de la cobertura empirica.',
      seguimiento_hospitalario: 'Reevaluar a las 48 a 72 horas: desescalar, valorar la duracion (7 dias si mejora), y buscar complicaciones (empiema, absceso, bacteriemia persistente) si no responde.',
      pronostico: 'Prolonga la ventilacion y la estancia y tiene mortalidad atribuible; la aplicacion sistematica del paquete de prevencion y la limitacion de la duracion de la ventilacion reducen su incidencia.',
      algoritmo: ['Sospecha (infiltrado nuevo mas fiebre, leucocitosis o leucopenia y secrecion purulenta) tras 48 horas de ventilacion', 'Obtener cultivo respiratorio (mejor cuantitativo) y hemocultivos antes de cambiar el antibiotico', 'Antibiotico empirico precoz segun factores de riesgo de resistencia y epidemiologia local', 'Desescalar a las 48 a 72 horas con el cultivo; duracion habitual de 7 dias', 'Aplicar el paquete de prevencion en todos los pacientes ventilados']
    },
    {
      nombre: 'Asincronias paciente-ventilador',
      color: '#6b3a5a',
      modalLabels: { itemName: 'Complicacion', definicion: 'Definicion', fisiopatologia: 'Fisiopatologia', epidemiologia: 'Epidemiologia', factores_riesgo: 'Factores de riesgo', clinica: 'Manifestaciones clinicas', criterios_dx: 'Diagnostico', laboratorio: 'Laboratorio', imagen: 'Imagen', complementarios: 'Estudios complementarios', dx_diferencial: 'Diagnostico diferencial', tx_medico: 'Prevencion y tratamiento medico', tx_farmacologico: 'Tratamiento farmacologico', tx_intervencionista: 'Ajuste del ventilador', criterios_uci: 'Gravedad', seguimiento_hospitalario: 'Seguimiento hospitalario', pronostico: 'Pronostico', algoritmo: 'Puntos clave' },
      definicion: 'Desajuste entre el patron respiratorio del paciente y la asistencia del ventilador. Las mas frecuentes son el esfuerzo inefectivo (esfuerzo que no dispara el ventilador), el doble disparo y el apilamiento de aire, el autodisparo, y el ciclado precoz o tardio (la inspiracion del ventilador termina antes o despues que la del paciente).',
      fisiopatologia: `El esfuerzo inefectivo aparece cuando el auto-PEEP obliga al paciente a generar mucha presion antes de alcanzar el umbral de disparo, o cuando la sedacion o la sobreasistencia deprimen el estimulo; el doble disparo, cuando el tiempo inspiratorio del ventilador es mas corto que la demanda del paciente; el ciclado tardio, cuando el criterio de fin de la inspiracion (por ejemplo el porcentaje de flujo pico en soporte de presion) esta mal ajustado.${figBlock('Figura 7', 'Bucle presion-volumen y asincronias frecuentes', asincroniasHtml)}`,
      epidemiologia: 'Son muy frecuentes (una proporcion alta de los pacientes ventilados tiene un indice de asincronia elevado en algun momento) y se asocian a mas dias de ventilacion, mas sedacion, mas delirium y peor pronostico cuando son numerosas.',
      factores_riesgo: ['Auto-PEEP y enfermedad obstructiva', 'Sedacion inadecuada, por exceso o por defecto, y dolor o ansiedad', 'Trigger poco o demasiado sensible y ayuda inspiratoria mal ajustada', 'Fugas del circuito y tiempo inspiratorio fijo que no se adapta a la demanda'],
      clinica: 'Lucha con el ventilador, uso de musculatura accesoria, taquipnea, activacion frecuente de alarmas, y curvas del ventilador con deflexiones sin ciclo, ciclos dobles, o discordancia entre el fin del flujo y el esfuerzo del paciente.',
      criterios_dx: 'Analisis de las curvas de presion, flujo y volumen a pie de cama (a veces con la senal de presion esofagica o de actividad electrica del diafragma); identificar el tipo concreto de asincronia guia la correccion.',
      laboratorio: 'No aplica de forma directa; descartar hipoxemia, hipercapnia o acidosis como causa del impulso respiratorio elevado.',
      imagen: 'No aplica de forma directa.',
      complementarios: 'Monitorizacion avanzada (presion esofagica, actividad electrica del diafragma) en casos seleccionados para ajustar la sincronia y limitar el esfuerzo lesivo.',
      dx_diferencial: 'Distinguir la asincronia verdadera de la taquipnea apropiada por acidosis, fiebre, dolor o ansiedad, y de la enfermedad de base no controlada; tratar la causa antes de subir la sedacion.',
      tx_medico: 'Optimizar primero la causa: reducir el auto-PEEP (broncodilatacion, prolongar la espiracion, PEEP externa que compense parte del auto-PEEP), tratar el dolor y el delirium, y ajustar la sedacion al objetivo.',
      tx_farmacologico: 'Ajuste de la sedoanalgesia (ni excesiva ni insuficiente); bloqueo neuromuscular solo si la asincronia es grave y refractaria en la fase aguda de la SDRA.',
      tx_intervencionista: 'Ajuste de parametros: sensibilidad y tipo de trigger (mejor por flujo), nivel y pendiente de la ayuda inspiratoria, tiempo inspiratorio o trigger espiratorio, y PEEP; cambiar de modo si persiste.',
      criterios_uci: 'Un indice de asincronia alto y sostenido, o el doble disparo repetido con apilamiento de aire (sobredistension), obligan a una revision inmediata de parametros y sedacion.',
      seguimiento_hospitalario: 'Revision de las curvas en cada ronda; documentar el tipo de asincronia y la correccion aplicada; reevaluar tras cada cambio.',
      pronostico: 'Reconocer y corregir las asincronias reduce la sedacion, el tiempo de ventilacion y el riesgo de lesion por sobredistension; la persistencia de asincronias numerosas es un marcador de mala evolucion.',
      algoritmo: ['Detectar en las curvas el tipo de asincronia (esfuerzo inefectivo, doble disparo, autodisparo, ciclado precoz o tardio)', 'Buscar la causa: auto-PEEP, sedacion inadecuada, trigger o ayuda mal ajustados, fugas', 'Corregir la causa (broncodilatacion y PEEP para el auto-PEEP; ajustar sedacion; tratar dolor y delirium)', 'Ajustar parametros: trigger por flujo, nivel y pendiente de la ayuda, trigger espiratorio, tiempo inspiratorio', 'Reservar el bloqueo neuromuscular para la asincronia grave y refractaria de la SDRA aguda']
    },
    {
      nombre: 'Debilidad, disfuncion diafragmatica y repercusion hemodinamica',
      color: '#6b4a2e',
      modalLabels: { itemName: 'Complicacion', definicion: 'Definicion', fisiopatologia: 'Fisiopatologia', epidemiologia: 'Epidemiologia', factores_riesgo: 'Factores de riesgo', clinica: 'Manifestaciones clinicas', criterios_dx: 'Diagnostico', laboratorio: 'Laboratorio', imagen: 'Imagen', complementarios: 'Estudios complementarios', dx_diferencial: 'Diagnostico diferencial', tx_medico: 'Prevencion y tratamiento medico', tx_farmacologico: 'Tratamiento farmacologico', tx_intervencionista: 'Intervencion', criterios_uci: 'Gravedad', seguimiento_hospitalario: 'Seguimiento hospitalario', pronostico: 'Pronostico', algoritmo: 'Puntos clave' },
      definicion: 'Conjunto de consecuencias sistemicas de la ventilacion prolongada: debilidad adquirida en la unidad de cuidados intensivos (polineuropatia y miopatia del enfermo critico), disfuncion diafragmatica inducida por el ventilador (atrofia por inactividad con la sedacion profunda y los modos controlados, o lesion por esfuerzo excesivo), y la repercusion hemodinamica de la presion positiva.',
      fisiopatologia: 'La inmovilidad, la inflamacion sistemica, la hiperglucemia, los corticoides y el bloqueo neuromuscular danan nervio y musculo; el diafragma se atrofia con rapidez cuando no se contrae (ventilacion controlada, sedacion profunda) y se lesiona cuando el esfuerzo es excesivo. La presion positiva y la PEEP reducen el retorno venoso (disminuyen la precarga) y la poscarga del ventriculo izquierdo, pero pueden aumentar la poscarga del ventriculo derecho y precipitar un cor pulmonale agudo en la SDRA grave.',
      epidemiologia: 'La debilidad adquirida en UCI afecta a una proporcion alta de los pacientes ventilados mas de una semana; la disfuncion diafragmatica medible aparece en dias y predice el fracaso del destete; la hipotension por presion positiva es frecuente en el paciente hipovolemico o con obstruccion (auto-PEEP).',
      factores_riesgo: ['Ventilacion y reposo prolongados, sepsis y fallo multiorganico e hiperglucemia', 'Corticoides y bloqueantes neuromusculares, sedacion profunda y modos controlados sostenidos', 'Hipovolemia y auto-PEEP como causa de la hipotension por presion positiva', 'SDRA grave con hipertension pulmonar como causa del cor pulmonale agudo'],
      clinica: 'Debilidad simetrica y flacida de predominio proximal con reflejos disminuidos, fracaso repetido del destete, dificultad para toser; hipotension tras aumentar la PEEP o al conectar al ventilador (mejora con volumen o al reducir la PEEP y desaparece al descomprimir el auto-PEEP); signos de fallo derecho en la SDRA grave.',
      criterios_dx: 'Debilidad: fuerza segun la escala del Medical Research Council menor de 48 sobre 60 de forma bilateral y simetrica, tras descartar otras causas; electromiografia en casos dudosos. Disfuncion diafragmatica: ecografia (excursion menor de 10 a 11 mm o fraccion de engrosamiento menor del 20 a 30%). Repercusion hemodinamica: relacion temporal con los cambios de presion, respuesta a volumen o a reducir la PEEP, y ecocardiografia (colapso de cavidades, funcion del ventriculo derecho).',
      laboratorio: 'Creatina-cinasa (habitualmente normal o poco elevada en la miopatia del critico), glucemia, electrolitos (potasio, fosforo, magnesio) y funcion tiroidea; descartar deficit de vitaminas y farmacos miotoxicos.',
      imagen: 'Ecografia diafragmatica seriada (excursion y fraccion de engrosamiento); ecocardiografia para la funcion del ventriculo derecho y el estado de volumen; tomografia si se sospecha otra causa neurologica.',
      complementarios: 'Monitorizacion del esfuerzo (presion de oclusion P0.1, presion esofagica) para mantener una asistencia que ni atrofie ni sobrecargue el diafragma ("ventilacion que protege el diafragma").',
      dx_diferencial: 'Otras causas de debilidad en el paciente critico: sindrome de Guillain-Barre, miastenia, mielopatia, ictus, bloqueo neuromuscular residual, alteraciones electroliticas graves y farmacos.',
      tx_medico: 'Prevencion: sedacion ligera dirigida por objetivos, evitar el bloqueo neuromuscular y los corticoides innecesarios, control de la glucemia, movilizacion precoz y progresiva, nutricion adecuada, y pasar a modos asistidos en cuanto sea posible para que el diafragma trabaje. Hipotension: volumen, reducir la PEEP si es excesiva, tratar el auto-PEEP.',
      tx_farmacologico: 'No hay tratamiento farmacologico especifico de la debilidad ni de la disfuncion diafragmatica; el manejo es preventivo y rehabilitador. Vasopresor de forma transitoria si la hipotension por presion positiva compromete la perfusion mientras se corrige la causa.',
      tx_intervencionista: 'Rehabilitacion precoz (sedestacion, bipedestacion, cicloergometro en cama); en el cor pulmonale agudo de la SDRA grave, estrategia protectora del ventriculo derecho (limitar la presion de distension y la PaCO2, decubito prono, valorar oxigenacion extracorporea).',
      criterios_uci: 'La debilidad grave prolonga la ventilacion y la rehabilitacion; el cor pulmonale agudo con inestabilidad es una senal de gravedad de la SDRA que obliga a ajustar la estrategia ventilatoria y a considerar la oxigenacion extracorporea.',
      seguimiento_hospitalario: 'Fuerza (escala del Medical Research Council) y ecografia diafragmatica seriadas; progresion diaria de la movilizacion; ajuste de la asistencia para proteger el diafragma.',
      pronostico: 'La debilidad adquirida en UCI y la disfuncion diafragmatica se asocian a destete prolongado, mas mortalidad y peor recuperacion funcional y cognitiva al ano (sindrome post-cuidados intensivos); la movilizacion precoz y la sedacion ligera mejoran los resultados.',
      algoritmo: ['Prevenir: sedacion ligera, evitar bloqueo y corticoides innecesarios, control de glucemia, movilizacion precoz y paso pronto a modos asistidos', 'Debilidad: fuerza por la escala del Medical Research Council menor de 48 sobre 60 bilateral tras descartar otras causas', 'Disfuncion diafragmatica: ecografia (excursion o fraccion de engrosamiento bajas); ajustar la asistencia para que el diafragma trabaje sin sobrecarga', 'Hipotension por presion positiva: volumen, reducir la PEEP si es excesiva, corregir el auto-PEEP', 'Cor pulmonale agudo en SDRA grave: proteger el ventriculo derecho (limitar presion de distension y PaCO2, prono) y valorar oxigenacion extracorporea']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento del paciente ventilado es diario y estructurado: revisar la indicacion, la mecanica respiratoria, la sedoanalgesia, la prevencion de complicaciones y la posibilidad de liberar el ventilador. La meta es ventilar de forma protectora y durante el menor tiempo posible.',
    parametros: ['Mecanica respiratoria diaria: presion meseta, presion de distension, distensibilidad estatica y auto-PEEP', 'FiO2 y PEEP: reducir en cuanto la oxigenacion lo permita (SpO2 objetivo 92-96%, o 88-92% en el retenedor)', 'Sedoanalgesia dirigida por objetivos (RASS 0 a menos 1), interrupcion diaria y evaluacion del delirium (CAM-ICU)', 'Paquete de prevencion de la neumonia asociada a la ventilacion (cabecera 30-45 grados, higiene oral, control del manguito, evitar la reintubacion) y profilaxis de ulcera y de tromboembolia', 'Cribado diario de preparacion para el destete y prueba de respiracion espontanea cuando proceda; movilizacion precoz y progresiva'],
    criterios_uci_general: 'Toda ventilacion invasiva se maneja en cuidados intensivos o intermedios; la ventilacion no invasiva y la canula de alto flujo en insuficiencia respiratoria aguda requieren area monitorizada con capacidad de intubacion inmediata.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa; la oxigenacion por membrana extracorporea venovenosa es la escalada en la SDRA grave refractaria y, en enfermedad pulmonar terminal, un puente al trasplante pulmonar en centros seleccionados.',
    prevencion: 'Prevenir la necesidad de ventilacion (tratamiento precoz de la causa, VNI y canula de alto flujo en las indicaciones adecuadas) y prevenir el dano cuando es necesaria: ventilacion protectora desde el primer minuto, sedacion ligera, movilizacion precoz, paquete de prevencion de la neumonia asociada a la ventilacion, y liberacion precoz mediante cribado y prueba de respiracion espontanea diarios.'
  }
};

export const compCites = {
  'Via aerea artificial e inicio de la ventilacion invasiva': [5, 16, 11],
  'Ventilacion no invasiva (CPAP y binivel)': [0, 16],
  'Canula nasal de alto flujo': [9, 8, 0],
  'Modos controlados y ventilacion protectora (SDRA y obstructivo)': [4, 5, 6, 7],
  'Modos asistidos y espontaneos; sedoanalgesia y bloqueo neuromuscular': [11, 14, 12, 13],
  'Destete y liberacion de la ventilacion mecanica': [1, 16, 7, 14],
  'Lesion pulmonar inducida por el ventilador': [10, 5, 4],
  'Neumonia asociada a la ventilacion': [15],
  'Asincronias paciente-ventilador': [11, 10],
  'Debilidad, disfuncion diafragmatica y repercusion hemodinamica': [18, 12, 13]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Clasificacion de Berlin de la SDRA': [2, 3],
  'Presion de distension (driving pressure)': [5, 6],
  'Modo segun la variable de control': [4],
  'Grado de participacion del paciente': [1]
};
export const escalaCalc = {
  'Clasificacion de Berlin de la SDRA': 'pafi-berlin',
  'Presion de distension (driving pressure)': 'driving-pressure'
};
export const compGroups = [
  { name: 'Modalidades y escenarios', items: ['Via aerea artificial e inicio de la ventilacion invasiva', 'Ventilacion no invasiva (CPAP y binivel)', 'Canula nasal de alto flujo', 'Modos controlados y ventilacion protectora (SDRA y obstructivo)', 'Modos asistidos y espontaneos; sedoanalgesia y bloqueo neuromuscular', 'Destete y liberacion de la ventilacion mecanica'] },
  { name: 'Complicaciones', items: ['Lesion pulmonar inducida por el ventilador', 'Neumonia asociada a la ventilacion', 'Asincronias paciente-ventilador', 'Debilidad, disfuncion diafragmatica y repercusion hemodinamica'] }
];
export const complicacionesIntro = 'Las primeras 6 fichas son modalidades y escenarios de ventilacion, escritas como monografia: via aerea artificial e inicio de la ventilacion invasiva, ventilacion no invasiva, canula nasal de alto flujo, modos controlados y ventilacion protectora (SDRA y obstructivo), modos asistidos y espontaneos con la sedoanalgesia y el bloqueo neuromuscular, y el destete. Las 4 ultimas son las complicaciones de la ventilacion: lesion pulmonar inducida por el ventilador, neumonia asociada a la ventilacion, asincronias paciente-ventilador, y la debilidad y la disfuncion diafragmatica con la repercusion hemodinamica.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Indicaciones y evaluacion' },
  { id: 'clasificacion', label: 'Modos y escalas' },
  { id: 'complicaciones', label: 'Modalidades y complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const modalLabels = {
  itemName: 'Modalidad o escenario',
  definicion: 'Descripcion y principio',
  fisiopatologia: 'Fundamento fisiologico',
  epidemiologia: 'Indicaciones',
  factores_riesgo: 'Contraindicaciones y cautelas',
  clinica: 'Como se aplica y se ajusta',
  criterios_dx: 'Parametros y ajuste inicial',
  laboratorio: 'Monitorizacion',
  imagen: 'Imagen y ecografia',
  complementarios: 'Consideraciones',
  dx_diferencial: 'Alternativas y cuando cambiar',
  tx_medico: 'Objetivos y medidas asociadas',
  tx_farmacologico: 'Farmacos y sedoanalgesia',
  tx_intervencionista: 'Maniobras y escalado',
  criterios_uci: 'Senales de fracaso o de dano',
  criterios_tips: 'Consideraciones adicionales',
  seguimiento_hospitalario: 'Vigilancia intrahospitalaria',
  seguimiento_ambulatorio: 'Tras la extubacion o el alta',
  pronostico: 'Resultados esperables',
  algoritmo: 'Puntos clave'
};
export const arbol = {
  root: { title: 'VENTILACION MECANICA', color: '#2e6b7a', target: 'definicion' },
  branches: [
    { title: 'Modalidades y escenarios', sub: 'Como se aplica y se ajusta', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Via aerea e inicio de la VM', sub: 'Intubacion de secuencia rapida, tubo, traqueostomia', color: '#2e6b7a', target: 'complicaciones' },
      { title: 'Ventilacion no invasiva', sub: 'CPAP y binivel', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Canula de alto flujo', sub: 'Alto flujo humidificado; indice ROX', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Modos controlados y proteccion', sub: 'Volumen y presion; SDRA y obstructivo', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Modos asistidos y sedoanalgesia', sub: 'Soporte de presion; PADIS; bloqueo neuromuscular', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Destete y liberacion', sub: 'Cribado, prueba de respiracion espontanea, extubacion', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones', sub: 'En gran parte prevenibles', color: '#8c3a34', target: 'complicaciones', leaves: [
      { title: 'Lesion inducida por el ventilador', sub: 'Barotrauma, volutrauma, atelectrauma, biotrauma', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Neumonia asociada a ventilacion', sub: 'Microaspiracion; paquete de prevencion', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Asincronias paciente-ventilador', sub: 'Esfuerzo inefectivo, doble disparo, ciclado', color: '#6b3a5a', target: 'complicaciones' },
      { title: 'Debilidad, diafragma y hemodinamia', sub: 'Debilidad en UCI, disfuncion diafragmatica, cor pulmonale', color: '#6b4a2e', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { no_invasivos: [8, 9], imagen: [19] };
export const clasificacionCite = [2, 4, 5];
export const seguimientoCite = [1, 12];
