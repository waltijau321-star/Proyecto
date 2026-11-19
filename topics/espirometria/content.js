// topics/espirometria/content.js: Espirometría y Pruebas de Función Respiratoria.
// Cubre el ítem nuevo "Espirometría y otras pruebas de función respiratoria" del cluster
// "Interpretación diagnóstica" (bloque de Habilidades transversales) del temario.
//
// Estructura: tema-monografía de PRUEBAS, no de enfermedad, como Ventilación Mecánica.
// `modalLabels` reetiqueta los campos genéricos del motor ("Qué es y qué mide", "Indicaciones",
// "Criterios de calidad e interpretación"...). Las fichas van en dos grupos de `compGroups`:
//   1. Espirometría (6 fichas): preparación y maniobra; aceptabilidad, repetibilidad y grado;
//      valores de referencia, LIN y puntuación z; patrones y gravedad; prueba broncodilatadora;
//      interpretación longitudinal.
//   2. Otras pruebas de función respiratoria (7 fichas, la subsección que pidió el autor):
//      volúmenes pulmonares, DLCO, caminata de 6 minutos, FeNO, variabilidad del FEM y reto
//      bronquial, fuerza de los músculos respiratorios y prueba de ejercicio cardiopulmonar.
//
// Fuentes (18 nov 2026). El autor aportó dos PDF: la guía mexicana de espirometría del INER
// (Benítez-Pérez 2016) y el manual del curso de actualización de Gochicoa y Torre, que resume los
// estándares ATS/ERS 2019 y la norma ERS/ATS 2022 de interpretación. Esa norma de 2022
// (Stanojevic, Eur Respir J 2022;60:2101499) NO está en PMC y el sitio de la ERS respondió 403, de
// modo que la interpretación 2022 se cita a través del manual, de la revisión de Ora 2024 y de las
// guías mexicanas de 2023 y 2024 que la adoptan, nunca directamente. El resto de la serie
// "Procedimientos y recomendaciones" de Neumol Cir Torax (INER) es de acceso abierto en
// Medigraphic y SciELO y se leyó del PDF: "¿cuál y a quién?", pletismografía 2024, DLCO 2023,
// caminata 2019, presiones máximas 2019 y prueba cardiopulmonar 2019. Ninguno de esos PDF se
// agregó a Bibliografia/ (decisión pendiente del autor).
//
// Dos desacuerdos entre fuentes que el tema enseña en lugar de esconder:
//   - Respuesta al broncodilatador: > 10% del PREDICHO (ERS/ATS 2022) frente a >= 12% y >= 200 mL
//     del BASAL (2005, que GINA 2026 y GOLD 2026 conservan; GINA explica por qué, p. 32).
//   - Cociente FEV1/FVC: LIN (ERS/ATS, ARTP, INER) frente al 0.7 fijo de GOLD (p. 29-30).
// La guía de 2016 es anterior a la estandarización de 2019: donde la de 2019 la cambió (tiempo
// espiratorio mínimo de 6 s, volumen extrapolado, repetibilidad), el texto lo dice.
//
// Sin em dash (ver [[feedback-no-em-dash]]). Tildes en todo el texto visible; claves sin tilde.

export const meta = {
  id: 'espirometria',
  titulo: 'Espirometría y Pruebas de Función Respiratoria',
  subtitulo: 'Neumología · Medicina Interna',
  accent: '#2c5f7c',
  accentDim: '#8fb0c2'
};

// Mismo marcado que citeHTML() de engine/study-view.js, para citar dentro de los textos con HTML
// (definición, tarjetas de Diagnóstico). Los índices son 1-based y se comprobaron a mano contra
// `bibliografia`: el motor no valida estas citas en línea.
function cite(...nums) {
  return '<sup class="cite">' + nums.map(n => '<a class="cite-link" onclick="highlightBib(' + n + ')">' + n + '</a>').join(',') + '</sup>';
}

export const bibliografia = [
  // 1. PMC6794117. Técnica, aceptabilidad (tabla 7), suspensión de broncodilatadores (tabla 8),
  //    grados de calidad (tabla 10), contraindicaciones (tabla 3).
  'Graham BL, Steenbruggen I, Miller MR, Barjaktarevic IZ, Cooper BG, Hall GL, et al. Standardization of Spirometry 2019 Update. An Official American Thoracic Society and European Respiratory Society Technical Statement. Am J Respir Crit Care Med. 2019;200(8):e70-e88. doi:10.1164/rccm.201908-1590ST',
  // 2. PDF del autor. Indicaciones (tabla 1, p. 174), contraindicaciones (tabla 2, p. 175),
  //    preparación y maniobra (p. 180-183), grados 2005 (tabla 5) y LIN por década (tabla 6, p. 185).
  'Benítez-Pérez RE, Torre-Bouscoulet L, Villca-Alá N, Del-Río-Hidalgo RF, Pérez-Padilla R, Vázquez-García JC, et al. Espirometría: recomendaciones y procedimiento. Neumol Cir Torax. 2016;75(2):173-190.',
  // 3. PDF del autor (43 p., sin fecha; su bibliografía llega a 2022). Interpretación ERS/ATS 2022:
  //    patrones (p. 36-39), gravedad por z (p. 37), broncodilatador (p. 40), longitudinal (p. 40-41).
  'Gochicoa-Rangel L, Torre-Bouscoulet L. Espirometría. Curso de actualización: estándares ATS/ERS 2019 e interpretación ERS/ATS 2022 [manual del curso]. Ciudad de México: Instituto de Desarrollo e Innovación en Fisiología Respiratoria; s. f.',
  // 4. PMC7337892. z-scores y LIN, gravedad, FEV1Q, volúmenes, TLCO, músculos respiratorios.
  'Sylvester KP, Clayton N, Cliff I, Hepple M, Kendrick A, Kirkby J, et al. ARTP statement on pulmonary function testing 2020. BMJ Open Respir Res. 2020;7(1):e000575. doi:10.1136/bmjresp-2020-000575',
  // 5. PMC11242573. PRISm, disanapsis, volúmenes, GLI, los dos criterios de broncodilatador.
  'Ora J, Giorgino FM, Bettin FR, Gabriele M, Rogliani P. Pulmonary Function Tests: Easy Interpretation in Three Steps. J Clin Med. 2024;13(13):3655. doi:10.3390/jcm13133655',
  // 6. Medigraphic, acceso abierto. Panorama de todas las pruebas y de a quién pedirlas.
  'Vargas-Domínguez C, Gochicoa-Rangel L, Velázquez-Uncal M, Mejía-Alfaro R, Vázquez-García JC, Pérez-Padilla R, et al. Pruebas de función respiratoria, ¿cuál y a quién? Neumol Cir Torax. 2019;78(Supl 2):S81-S96. doi:10.35366/NTS192B',
  // 7. Medigraphic, acceso abierto (CC BY-NC-ND). Adopta ATS/ERS 2021 y 2023.
  'Alvarado-Amador I, Centeno-Saenz GI, Silva-Cerón M, Riego-Ramírez D, Castillo-Ayala A, Gochicoa-Rangel L, et al. Pletismografía corporal: actualización en las recomendaciones y procedimiento. Neumol Cir Torax. 2024;83(2):153-165. doi:10.35366/119285',
  // 8. SciELO, acceso abierto. Adopta ERS/ATS 2017 y la interpretación 2022 (algoritmo, p. 241).
  'Centeno-Sáenz GI, Alvarado-Amador I, Almonte-Mora F, Castillo-Ayala AE, Camacho-Jiménez AU, Guinto-Ramírez P, et al. Difusión pulmonar de monóxido de carbono: actualizaciones en las recomendaciones y procedimiento. Neumol Cir Torax. 2023;82(4):233-247. doi:10.35366/117940',
  // 9. Medigraphic, acceso abierto. Unifica ATS 2002 y ERS/ATS 2014.
  'Gochicoa-Rangel L, Mora-Romero U, Guerrero-Zúñiga S, Silva-Cerón M, Cid-Juárez S, Velázquez-Uncal M, et al. Prueba de caminata de seis minutos: recomendaciones y procedimientos. Neumol Cir Torax. 2019;78(Supl 2):S164-S172. doi:10.35366/NTS192J',
  // 10. PMC7609960 (texto leído en la página de PMC).
  'Agarwala P, Salzman SH. Six-Minute Walk Test: Clinical Role, Technique, Coding, and Reimbursement. Chest. 2020;157(3):603-611. doi:10.1016/j.chest.2019.10.014',
  // 11. PMC4408724 (texto leído en la página de PMC). 12 recomendaciones GRADE.
  'Dweik RA, Boggs PB, Erzurum SC, Irvin CG, Leigh MW, Lundberg JO, et al. An official ATS clinical practice guideline: interpretation of exhaled nitric oxide levels (FENO) for clinical applications. Am J Respir Crit Care Med. 2011;184(5):602-615. doi:10.1164/rccm.9120-11ST',
  // 12. Medigraphic, acceso abierto.
  'Mora-Romero UJ, Gochicoa-Rangel L, Guerrero-Zúñiga S, Cid-Juárez S, Silva-Cerón M, Salas-Escamilla I, et al. Presiones inspiratoria y espiratoria máximas: recomendaciones y procedimiento. Neumol Cir Torax. 2019;78(Supl 2):S135-S141. doi:10.35366/NTS192F',
  // 13. Medigraphic, acceso abierto.
  'Cid-Juárez S, Miguel-Reyes JL, Cortés-Télles A, Gochicoa-Rangel L, Mora-Romero UJ, Silva-Cerón M, et al. Prueba cardiopulmonar de ejercicio. Recomendaciones y procedimiento. Neumol Cir Torax. 2019;78(Supl 2):S173-S186. doi:10.35366/NTS192K',
  // 14. Bibliografia/ (repo). Recuadro 1-2 (p. 28) y criterios de broncodilatador (p. 32).
  'Global Initiative for Asthma. Global strategy for asthma management and prevention: 2026 report. GINA; 2025.',
  // 15. Bibliografia/ (repo). Espirometría (p. 28-31), PRISm (p. 14), grados (figura 2.10, p. 38).
  'Global Initiative for Chronic Obstructive Lung Disease. Global strategy for the prevention, diagnosis and management of COPD: 2026 report. GOLD; 2025.',
  // 16. Bibliografia/ (repo). PFR y DLCO (p. 24 del PDF), caminata de 6 minutos (p. 40 del PDF).
  'Humbert M, Kovacs G, Hoeper MM, et al. 2022 ESC/ERS guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43(38):3618-3731.',
  // 17. Bibliografia/ (repo). Fibrosis pulmonar progresiva (tabla 4) y seguimiento (figura 11).
  'Raghu G, Remy-Jardin M, Richeldi L, et al. Idiopathic pulmonary fibrosis (an update) and progressive pulmonary fibrosis in adults: an official ATS/ERS/JRS/ALAT clinical practice guideline. Am J Respir Crit Care Med. 2022;205(9):e18-e47.'
];

/* ---------------- Figuras (SVG/HTML a mano, solo variables de tema) ---------------- */

// Figura 1 (Definición): volúmenes y capacidades. Niveles: TLC y=30, fin de inspiración
// tranquila y=110, FRC y=135, RV y=190, cero y=215. Lo sombreado es lo que la espirometría no ve.
const volumenesHtml = `
<div style="max-width:600px;margin:0 auto;color:var(--ink);">
  <svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pfr-f1-t pfr-f1-d" style="width:100%;display:block;margin:0 auto;font-family:inherit;">
    <title id="pfr-f1-t">Volúmenes y capacidades pulmonares</title>
    <desc id="pfr-f1-d">Espirograma: respiración tranquila, una inspiración máxima hasta la capacidad pulmonar total y una espiración máxima hasta el volumen residual. A la derecha, los cuatro volúmenes (corriente, de reserva inspiratoria, de reserva espiratoria y residual) y las cuatro capacidades (inspiratoria, residual funcional, vital y pulmonar total). El volumen residual, y con él la capacidad residual funcional y la capacidad pulmonar total, no puede medirse con espirometría: requiere pletismografía o dilución de gases.</desc>
    <rect x="16" y="190" width="290" height="25" fill="var(--panel2)" stroke="none"/>
    <text x="24" y="206" fill="var(--ink-dim)" font-size="9">Volumen residual: la espirometría no lo mide</text>
    <g stroke="var(--line)" stroke-dasharray="3 3" stroke-width="1">
      <line x1="16" y1="30" x2="305" y2="30"/><line x1="16" y1="110" x2="305" y2="110"/>
      <line x1="16" y1="135" x2="305" y2="135"/><line x1="16" y1="190" x2="305" y2="190"/>
    </g>
    <line x1="16" y1="215" x2="305" y2="215" stroke="var(--ink-faint)" stroke-width="1"/>
    <path d="M20,135 Q35,85 50,135 Q65,85 80,135 Q95,85 110,135 Q125,85 140,135 C148,135 154,30 166,30 C178,30 192,190 206,190 C216,190 226,135 238,135 Q253,85 268,135 Q283,85 298,135" fill="none" stroke="var(--accent-fg)" stroke-width="2"/>
    <g font-size="9" fill="var(--ink)">
      <line x1="318" y1="30" x2="318" y2="108" stroke="#3d5a73" stroke-width="2"/><text x="323" y="73">IRV</text>
      <line x1="318" y1="112" x2="318" y2="133" stroke="#3f6b52" stroke-width="2"/><text x="323" y="126">VT</text>
      <line x1="318" y1="137" x2="318" y2="188" stroke="#8a6a1f" stroke-width="2"/><text x="323" y="166">ERV</text>
      <line x1="318" y1="192" x2="318" y2="214" stroke="#8c3a34" stroke-width="2"/><text x="323" y="207">RV</text>
      <line x1="356" y1="30" x2="356" y2="133" stroke="var(--ink-dim)" stroke-width="2"/><text x="360" y="85">IC</text>
      <line x1="356" y1="137" x2="356" y2="214" stroke="#8c3a34" stroke-width="2" stroke-dasharray="4 2"/><text x="360" y="178">FRC</text>
      <line x1="392" y1="30" x2="392" y2="188" stroke="var(--ink-dim)" stroke-width="2"/><text x="396" y="112">VC</text>
      <line x1="428" y1="30" x2="428" y2="214" stroke="#8c3a34" stroke-width="2" stroke-dasharray="4 2"/><text x="432" y="125">TLC</text>
    </g>
    <text x="24" y="24" fill="var(--ink-dim)" font-size="9">Inspiración máxima (TLC)</text>
    <text x="238" y="184" fill="var(--ink-dim)" font-size="9">Espiración máxima (RV)</text>
  </svg>
  <div class="figure-grade-box"><strong>Volúmenes:</strong> VT corriente, IRV de reserva inspiratoria, ERV de reserva espiratoria, RV residual. <strong>Capacidades:</strong> IC inspiratoria (IRV + VT), FRC residual funcional (ERV + RV), VC vital (IRV + VT + ERV), TLC pulmonar total (VC + RV). Las de trazo discontinuo incluyen el RV y no salen de una espirometría.</div>
  <div class="figure-source">Fuentes: Gochicoa y Torre, manual del curso, p. 8; Vargas-Domínguez 2019, p. S85; Alvarado-Amador 2024, tabla 1.</div>
</div>`;

// Figura 2 (ficha de patrones): tres curvas flujo-volumen esquemáticas. Escala: 1 L = 18 px.
// Normal FVC 5 L (90 px), obstructiva 4.2 L con descenso cóncavo, sugerente de restricción 2.8 L.
function curvaPanel(x0, titulo, color, espira, inspiraFin, nota1, nota2) {
  return `<g>
      <text x="${x0 + 50}" y="12" text-anchor="middle" font-size="9.5" font-weight="700" fill="${color}">${titulo}</text>
      <line x1="${x0}" y1="90" x2="${x0 + 108}" y2="90" stroke="var(--ink-faint)" stroke-width="1"/>
      <line x1="${x0}" y1="20" x2="${x0}" y2="130" stroke="var(--ink-faint)" stroke-width="1"/>
      <path d="${espira}" fill="none" stroke="${color}" stroke-width="2"/>
      <path d="M${x0 + inspiraFin},90 C${x0 + inspiraFin - 4},128 ${x0 + 4},128 ${x0},90" fill="none" stroke="${color}" stroke-width="1.4" stroke-dasharray="4 2"/>
      <text x="${x0 + 54}" y="146" text-anchor="middle" font-size="8.5" fill="var(--ink-dim)">${nota1}</text>
      <text x="${x0 + 54}" y="158" text-anchor="middle" font-size="8.5" fill="var(--ink-dim)">${nota2}</text>
    </g>`;
}
const curvasHtml = `
<div style="max-width:640px;margin:0 auto;color:var(--ink);">
  <svg viewBox="0 0 400 168" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pfr-f2-t pfr-f2-d" style="width:100%;display:block;margin:0 auto;">
    <title id="pfr-f2-t">Curvas flujo-volumen de los tres patrones básicos</title>
    <desc id="pfr-f2-d">Tres curvas flujo-volumen esquemáticas con el flujo en el eje vertical y el volumen en el horizontal. Normal: ascenso vertical, flujo pico agudo y descenso recto, forma triangular. Obstructiva: flujo pico menor y descenso cóncavo, con cociente FEV1/FVC por debajo del límite inferior. Sugerente de restricción: curva pequeña de forma conservada, FVC baja con cociente normal, que debe confirmarse midiendo la capacidad pulmonar total. Debajo de cada eje, el asa inspiratoria en forma de U.</desc>
    ${curvaPanel(10, 'Normal', '#3f6b52', 'M10,90 L14,40 Q17,28 22,32 L100,90', 90, 'Triangular', 'FEV1/FVC y FVC ≥ LIN')}
    ${curvaPanel(145, 'Obstructivo', '#8c3a34', 'M145,90 L149,48 Q151,40 155,46 C165,78 185,86 220,90', 75, 'Descenso cóncavo', 'FEV1/FVC &lt; LIN')}
    ${curvaPanel(280, 'Sugerente de restricción', '#3d5a73', 'M280,90 L283,50 Q285,42 289,46 L330,90', 50, 'Pequeña, forma conservada', 'FVC &lt; LIN: medir TLC')}
  </svg>
  <div class="figure-source">Esquema, no a escala de un paciente real. Fuentes: Gochicoa y Torre, manual del curso, p. 11 y 36-38; Vargas-Domínguez 2019, tabla 1.</div>
</div>`;

// Figura 3 (Escalas): algoritmo de interpretación espirometría + volúmenes.
const algoritmoHtml = `
<div class="algo-flow" style="max-width:680px;margin:0 auto;">
  <div class="algo-flow-step"><strong>1. ¿La calidad lo permite?</strong> Grado A a C para FEV1 y FVC; con D, E o U se interpreta con reserva.</div>
  <div class="algo-flow-step" style="margin-top:8px;"><strong>2. FEV1/FVC frente a su LIN</strong> (z −1.645)</div>
  <div class="algo-flow-branches">
    <div class="algo-flow-branch" style="--bc:#3f6b52;">
      <span class="algo-flow-label">FEV1/FVC ≥ LIN</span>
      <div class="algo-flow-box"><strong>FVC ≥ LIN:</strong> normal. Si se sospecha enfermedad intersticial, medir TLC de todos modos.</div>
      <div class="algo-flow-box"><strong>FVC &lt; LIN:</strong> posible restricción o no específico (PRISm). Medir TLC: si es &lt; LIN, restricción; si es normal, patrón no específico.</div>
    </div>
    <div class="algo-flow-branch" style="--bc:#8c3a34;">
      <span class="algo-flow-label">FEV1/FVC &lt; LIN</span>
      <div class="algo-flow-box"><strong>FVC ≥ LIN:</strong> obstrucción. Con FEV1 y FVC normales en un joven, considerar disanapsis.</div>
      <div class="algo-flow-box"><strong>FVC &lt; LIN:</strong> posible mixto. TLC &lt; LIN: mixto verdadero; TLC normal o alta: obstrucción con atrapamiento (pseudorrestricción).</div>
    </div>
  </div>
  <div class="algo-flow-step" style="margin-top:16px;"><strong>3. Gravedad por z</strong> (FEV1 en la obstrucción; FVC en la posible restricción): −1.65 a −2.5 leve · −2.51 a −4 moderada · menor de −4.1 grave</div>
  <div class="figure-source">Fuentes: Gochicoa y Torre, manual del curso, p. 36-39; Ora 2024; Alvarado-Amador 2024, figura 5.</div>
</div>`;

// Figura 4 (ficha de DLCO): algoritmo VA y KCO de Centeno-Sáenz 2023, figura 4 (p. 241).
const dlcoHtml = `
<div style="max-width:640px;margin:0 auto;">
  <div class="table-wrap"><table>
    <thead><tr><th>Resultado</th><th>Componentes</th><th>Qué sugiere</th></tr></thead>
    <tbody>
      <tr><td style="color:#8c3a34;font-weight:600;">DLCO baja (&lt; LIN)</td><td>VA normal, KCO baja</td><td>Enfisema con volumen preservado, enfermedad vascular pulmonar, anemia</td></tr>
      <tr><td style="color:#8c3a34;font-weight:600;">DLCO baja</td><td>VA baja, KCO baja</td><td>Pérdida de la estructura alveolocapilar con pérdida de volumen: enfisema, enfermedad intersticial</td></tr>
      <tr><td style="color:#8c3a34;font-weight:600;">DLCO baja</td><td>VA baja, KCO alta</td><td>Pérdida localizada de volumen (neumonectomía) o expansión incompleta (enfermedad neuromuscular)</td></tr>
      <tr><td style="color:#3d5a73;font-weight:600;">DLCO alta (&gt; LSN)</td><td>Más sangre en el capilar</td><td>Cortocircuito de izquierda a derecha, asma, obesidad, eritrocitosis, hemorragia alveolar</td></tr>
    </tbody>
  </table></div>
  <div class="figure-grade-box"><strong>Gravedad de la DLCO baja por z:</strong> −1.64 a −2.5 leve · −2.51 a −4 moderada · menor de −4.1 grave. Son diagnósticos presuntivos, no definitivos.</div>
  <div class="figure-source">Fuente: Centeno-Sáenz 2023, figura 4 (p. 241).</div>
</div>`;

export const figuras = {
  'pfr-volumenes': { titulo: 'Volúmenes y capacidades pulmonares: lo que la espirometría ve y lo que no', html: volumenesHtml },
  'pfr-curvas': { titulo: 'Curvas flujo-volumen de los tres patrones básicos', html: curvasHtml },
  'pfr-algoritmo': { titulo: 'Algoritmo de interpretación: espirometría y volúmenes pulmonares', html: algoritmoHtml },
  'pfr-dlco': { titulo: 'Cómo leer una DLCO: volumen alveolar y KCO', html: dlcoHtml }
};
export const figurasDefinicion = ['pfr-volumenes'];
export const figurasClasificacion = ['pfr-algoritmo'];

/* ---------------- Definición ---------------- */
export const definicionText = `<p style="margin:0 0 14px;">La <strong>espirometría</strong> es una prueba fisiológica que mide el volumen máximo de aire que una persona puede inspirar y espirar con esfuerzo máximo, en función del tiempo. Sus tres números esenciales son la <strong>capacidad vital forzada (FVC)</strong>, el volumen espirado con máximo esfuerzo desde una inspiración completa; el <strong>volumen espiratorio forzado en el primer segundo (FEV1)</strong>; y su cociente <strong>FEV1/FVC</strong>, la fracción de la FVC que sale en ese primer segundo.</p>
<p style="margin:0 0 14px;">Depende del calibre de los bronquios, de las propiedades elásticas del tórax y del pulmón y de la integridad de los músculos respiratorios. Es el estándar de oro para medir la obstrucción bronquial y sirve para el diagnóstico y el seguimiento del asma y de la EPOC, para evaluar la respuesta a broncodilatadores o a estímulos que obstruyen, para vigilar exposiciones laborales, para valorar el riesgo operatorio y para dictaminar incapacidad.${cite(6)}</p>
<p style="margin:0 0 14px;"><strong>Los seis elementos.</strong> La FVC (su principal determinante es la estatura; la edad, el grupo étnico, el peso y la altitud también cuentan), el FEV1, el cociente FEV1/FVC (que no es el índice de Tiffeneau: Tiffeneau usó la capacidad vital lenta, y la maniobra forzada tiende a reducirla por compresión dinámica de la vía aérea), la <strong>curva flujo-volumen</strong> (inicio vertical, flujo pico y descenso gradual: una forma triangular, cóncava cuando hay obstrucción), la <strong>capacidad vital inspiratoria forzada</strong> (FIVC, que cierra el asa: si supera a la FVC, el paciente no partió de inspiración máxima) y la <strong>curva volumen-tiempo</strong>, cuya meseta garantiza que se exhaló todo el aire desplazable.${cite(3, 1)}</p>
<p style="margin:0 0 14px;"><strong>Lo que la espirometría no ve.</strong> No mide el volumen residual, así que no puede medir la capacidad pulmonar total: no diagnostica restricción ni patrón mixto, que exigen pletismografía. Tampoco evalúa el intercambio de gases. Y nombra <strong>patrones funcionales, no enfermedades</strong>: identifica una obstrucción, pero su causa la establece el clínico con la historia, la exploración y la imagen.${cite(6, 3)}</p>
<p style="margin:0 0 14px;"><strong>El resto de las pruebas.</strong> De forma práctica se agrupan en pruebas de mecánica de la respiración (espirometría, pletismografía, reto bronquial), de intercambio gaseoso (difusión de monóxido de carbono, gasometría, oximetría), de ejercicio (prueba cardiopulmonar, caminata de 6 minutos) y de control de la respiración, estas casi solo de investigación. En general conviene pedir una que explore la mecánica y otra el intercambio de gases, porque se complementan.${cite(6)}</p>
<p style="margin:0;">El tema sigue ese orden: primero la espirometría completa, de la preparación al seguimiento, y después la <strong>subsección de otras pruebas de función respiratoria</strong>, cada una con su indicación, su técnica y su interpretación.</p>`;

/* ---------------- Contenido ---------------- */
export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Quién necesita una espirometría',
      tituloB: 'Cuándo dar el siguiente paso',
      compensada: `Toda sospecha de enfermedad respiratoria por síntomas (disnea, tos, sibilancias, estridor), signos o estudios anormales (hipoxemia, hipercapnia, policitemia, radiografía anormal); el impacto pulmonar de una enfermedad sistémica; el escrutinio de quien tiene síntomas y factores de riesgo (más de 35 años con índice tabáquico mayor de 10 paquetes-año, biomasa o exposición laboral), no del asintomático sin riesgo; el riesgo preoperatorio, obligada antes de una resección pulmonar; y el seguimiento de enfermedades, exposiciones y fármacos neumotóxicos.${cite(2)}`,
      descompensada: `La espirometría ve la mecánica, no el intercambio, y no mide el volumen residual. Por eso una FVC baja pide volúmenes pulmonares; la sospecha de enfermedad intersticial o vascular pulmonar pide DLCO aunque la espirometría sea normal; el asma probable con espirometría normal pide variabilidad del flujo, reto bronquial o FeNO; la debilidad neuromuscular pide presiones respiratorias máximas; y la disnea que nada explica en reposo pide una prueba de ejercicio.${cite(6, 5)}`
    },
    laboratorio: [
      { prueba: 'Hemoglobina del mismo día', utilidad: 'Ajusta la DLCO predicha: la anemia la baja y la eritrocitosis la sube. Indispensable en el seguimiento de la DLCO y ante sospecha de anemia o poliglobulia.' },
      { prueba: 'Carboxihemoglobina', utilidad: 'En fumadores (5 a 10%) reduce la DLCO; por encima de 10 a 15% contraindica la prueba. Cada maniobra de DLCO la sube 0.6 a 0.7%.' },
      { prueba: 'Gasometría arterial', utilidad: 'Ventilación alveolar, estado ácido-base y oxigenación; una PaO2 menor de 60 mmHg define insuficiencia respiratoria. Se interpreta según la altitud: en la Ciudad de México la PaCO2 y el bicarbonato normales son más bajos.' },
      { prueba: 'Oximetría de pulso', utilidad: 'Útil para tendencias: su error es de alrededor de 2.5% por encima de 90% y de 4% por debajo. No distingue la carboxihemoglobina, de modo que una SpO2 normal no descarta hipoxemia en un fumador o una intoxicación por CO.' }
    ],
    no_invasivos: [
      { metodo: 'Espirometría con broncodilatador', interpretacion: '¿Hay obstrucción? ¿Responde al broncodilatador?', cutoff: 'FEV1/FVC &lt; LIN; respuesta &gt; 10% del predicho (2022) o ≥ 12% y ≥ 200 mL (GINA)' },
      { metodo: 'Pletismografía corporal', interpretacion: '¿La FVC baja es restricción? ¿Hay atrapamiento o hiperinflación?', cutoff: 'TLC &lt; p5 (restricción); RV/TLC &gt; p95' },
      { metodo: 'Difusión de monóxido de carbono (DLCO)', interpretacion: '¿Cómo está el intercambio de gases en reposo?', cutoff: 'Baja si z &lt; −1.64; alta si z &gt; +1.64' },
      { metodo: 'Caminata de 6 minutos', interpretacion: 'Capacidad funcional, desaturación con el esfuerzo y pronóstico', cutoff: 'Cambio mínimo importante 25 a 33 m' },
      { metodo: 'FeNO', interpretacion: '¿Hay inflamación eosinofílica que responda a corticoide?', cutoff: '&gt; 50 ppb en adultos (&gt; 35 en niños)' },
      { metodo: 'Variabilidad del FEM y reto bronquial', interpretacion: '¿Hay variabilidad o hiperreactividad con espirometría normal?', cutoff: 'Variabilidad diurna &gt; 10%; metacolina: caída del FEV1 ≥ 20%' },
      { metodo: 'Presiones respiratorias máximas', interpretacion: '¿Hay debilidad de los músculos respiratorios?', cutoff: 'PImax de −80 cmH2O o más la excluye' },
      { metodo: 'Prueba de ejercicio cardiopulmonar', interpretacion: '¿Por qué se limita al ejercicio: corazón, pulmón u otra causa?', cutoff: 'Reserva respiratoria normal ≈ 15% de la VVM' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'Las reglas con las que se juzga y se gradúa cada prueba. Las de la espirometría van primero porque son la base de las demás; varias tienen calculadora.',
    escalas: [
      { nombre: 'Grados de calidad de la espirometría (ATS/ERS 2019)', componentes: 'Número de maniobras aceptables o utilizables y repetibilidad (diferencia entre los dos valores más altos). FEV1 y FVC se califican por separado, y también el juego prebroncodilatador y el posbroncodilatador.', formula: 'Mayores de 6 años: A, 3 o más aceptables dentro de 150 mL; B, 2 aceptables dentro de 150 mL; C, 2 o más dentro de 200 mL; D, 2 o más dentro de 250 mL; E, 2 o más con diferencia mayor de 250 mL, o solo 1 aceptable; U, ninguna aceptable y al menos 1 utilizable; F, ninguna aceptable ni utilizable.', interpretacion: 'Dice cuánta confianza merece el resultado, no cómo están los pulmones. Por debajo de A pesa más el juicio del intérprete; un resultado utilizable puede seguir siendo clínicamente útil.' },
      { nombre: 'Patrones funcionales de la espirometría', componentes: 'FEV1/FVC, FVC y FEV1 comparados con su límite inferior de la normalidad (LIN: percentil 5, puntuación z −1.645).', formula: 'Normal: FEV1/FVC y FVC ≥ LIN. Obstructivo: FEV1/FVC &lt; LIN con FVC ≥ LIN. Posible restrictivo o no específico (PRISm): FEV1/FVC ≥ LIN con FVC &lt; LIN. Posible mixto: ambos &lt; LIN. Disanáptico: FEV1/FVC &lt; LIN con FEV1 y FVC ≥ LIN.', interpretacion: 'Restricción y mixto se informan como "posibles": solo la capacidad pulmonar total los confirma. La espirometría identifica patrones, no enfermedades.' },
      { nombre: 'Gravedad por puntuación z (ERS/ATS 2022)', componentes: 'Puntuación z del FEV1 en la obstrucción; de la FVC en la posible restricción.', formula: 'Mayor de −1.65: normal. De −1.65 a −2.5: leve. De −2.51 a −4: moderada. Menor de −4.1: grave.', interpretacion: 'La z elimina el sesgo de edad, sexo y talla del porcentaje del predicho. GOLD sigue graduando la EPOC por porcentaje porque con él se reclutaron los ensayos que sostienen el tratamiento.' },
      { nombre: 'Grados GOLD de obstrucción en la EPOC', componentes: 'FEV1 posbroncodilatador en porcentaje del predicho (GLI-Global), solo con FEV1/FVC &lt; 0.7.', formula: 'GOLD 1, leve: FEV1 ≥ 80%. GOLD 2, moderada: 50 a &lt; 80%. GOLD 3, grave: 30 a &lt; 50%. GOLD 4, muy grave: &lt; 30%.', interpretacion: 'Gradúa la obstrucción, no la enfermedad: los síntomas se correlacionan poco con el FEV1 y se miden aparte con cuestionarios.' },
      { nombre: 'Respuesta al broncodilatador: los dos criterios vigentes', componentes: 'Cambio del FEV1 o de la FVC tras 400 µg de salbutamol con espaciador.', formula: 'ERS/ATS 2022: aumento mayor del 10% del valor PREDICHO. Criterio clásico, que conservan GINA y GOLD: aumento ≥ 12% y ≥ 200 mL respecto al valor BASAL.', interpretacion: 'El de 2022 se derivó de datos de supervivencia, no del diagnóstico de asma; GINA mantiene el clásico para diagnosticar asma. Calcular los dos evita perder pacientes.' },
      { nombre: 'Gravedad de la DLCO baja', componentes: 'DLCO ajustada por hemoglobina, en puntuación z (o en porcentaje del predicho en el esquema mexicano previo).', formula: 'Por z: −1.64 a −2.5 leve; −2.51 a −4 moderada; menor de −4.1 grave. Por porcentaje: leve, &gt; 60% pero &lt; LIN; moderada, 40 a 60%; grave, &lt; 40%.', interpretacion: 'Antes de graduar se miran sus dos componentes, volumen alveolar (VA) y coeficiente de transferencia (KCO): dicen dónde está el problema.' },
      { nombre: 'Patrones de los volúmenes pulmonares', componentes: 'TLC y cocientes RV/TLC y FRC/TLC frente al LIN (p5) y al límite superior (LSN, p95); FEV1/FVC de la espirometría vinculada.', formula: 'TLC &lt; p5 con cocientes normales: restricción simple. TLC &lt; p5 con RV/TLC o FRC/TLC &gt; p95: mixto si FEV1/FVC &lt; p5, restricción compleja si no. TLC normal con cocientes &gt; p95: atrapamiento o hiperinflación. TLC &gt; p95: hiperinflación con cocientes altos, pulmones grandes sin ellos.', interpretacion: 'Es la única manera de confirmar restricción. Ya no se usa el porcentaje del predicho.' },
      { nombre: 'Fracción exhalada de óxido nítrico (FeNO)', componentes: 'FeNO en partes por billón (ppb), con cortes distintos en menores de 12 años.', formula: 'Adultos: &lt; 25 ppb, inflamación eosinofílica poco probable; 25 a 50, intermedia; &gt; 50, probable. Niños: &lt; 20, 20 a 35 y &gt; 35. Cambio significativo: &gt; 20% si el basal pasa de 50 ppb, &gt; 10 ppb si es menor.', interpretacion: 'Predice la respuesta a corticoide; no diagnostica asma por sí sola y un valor bajo no la descarta.' },
      { nombre: 'Caminata de 6 minutos: cambio mínimo y umbrales', componentes: 'Distancia caminada en metros (la mejor de dos pruebas), SpO2 más baja y Borg.', formula: 'Cambio mínimo clínicamente importante: 25 a 33 m (mediana 30). EPOC: el riesgo sube por debajo de 350 m. Hipertensión arterial pulmonar: 440 m y 165 m. Fibrosis pulmonar idiopática: &lt; 250 m duplica la mortalidad a un año.', interpretacion: 'Se interpreta en metros absolutos y, sobre todo, como cambio en el mismo paciente.' },
      { nombre: 'Fuerza de los músculos respiratorios', componentes: 'PImax desde volumen residual, PEmax desde capacidad pulmonar total, SNIP y caída de la capacidad vital en decúbito.', formula: 'Se excluye debilidad significativa con PImax de −80 cmH2O o más, PEmax mayor de 80 (varones) o 60 cmH2O (mujeres), o SNIP de −70 (varones) o −60 cmH2O (mujeres). Caída de la capacidad vital en supino &gt; 30%: debilidad diafragmática.', interpretacion: 'Son volitivas: un valor normal excluye debilidad, uno bajo puede ser solo mal esfuerzo. Un cambio mayor de 25 cmH2O es real.' },
      { nombre: 'Variabilidad diurna del flujo espiratorio máximo (FEM)', componentes: 'FEM dos veces al día durante 1 a 2 semanas, el mayor de tres soplidos cada vez, con el mismo medidor.', formula: '(FEM más alto del día − FEM más bajo) / promedio de ambos × 100, promediado en los días registrados.', interpretacion: 'Excesiva por encima de 10% en adultos y de 13% en niños: apoya el diagnóstico de asma.' },
      { nombre: 'Pruebas de reto bronquial', componentes: 'Caída del FEV1 respecto al basal tras el estímulo.', formula: 'Metacolina: caída ≥ 20%. Hiperventilación, salina hipertónica o manitol: ≥ 15%. Ejercicio estandarizado: &gt; 10% y &gt; 200 mL.', interpretacion: 'Si cae el FEV1, comprobar que también cayó el FEV1/FVC: una inspiración incompleta baja el FEV1 sin que haya broncoconstricción.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Preparación, indicaciones y maniobra', color: '#2c5f7c',
      modalLabels: { criterios_dx: 'Preparación que se verifica al llegar', laboratorio: 'Calibración del equipo' },
      definicion: 'Prueba fisiológica que mide el volumen máximo de aire que una persona puede inspirar y espirar con esfuerzo máximo. La maniobra forzada tiene cuatro fases: inspiración máxima, soplido explosivo, espiración completa (hasta 15 segundos como máximo) e inspiración máxima de regreso a la capacidad pulmonar total.',
      fisiopatologia: 'Casi toda la variabilidad entre maniobras viene de tres errores: no llenar del todo los pulmones, terminar la espiración antes de tiempo y variar el esfuerzo. Una inspiración lenta, o una pausa de 4 a 6 segundos en capacidad pulmonar total antes de soplar, reduce el flujo pico y el FEV1; por eso la pausa debe ser de 2 segundos o menos.',
      epidemiologia: 'Diagnóstica: síntomas (disnea, tos, sibilancias, estridor), signos (estertores, deformidad torácica) o estudios anormales (hipoxemia, hipercapnia, policitemia, radiografía anormal); impacto pulmonar de enfermedades sistémicas, con DLCO en la sospecha de enfermedad intersticial; escrutinio de quien tiene síntomas y factores de riesgo, no del asintomático sin ellos; riesgo preoperatorio, indispensable antes de resección pulmonar. Monitorización de tratamientos, de la progresión, de exposiciones laborales y de fármacos neumotóxicos (bleomicina, gemcitabina, platinos, ciclofosfamida, entre otros). Evaluación de discapacidad y estudios poblacionales.',
      factores_riesgo: [
        'Por aumento de la demanda miocárdica o cambios de presión arterial: infarto agudo en la última semana, hipotensión o hipertensión grave, arritmia significativa, insuficiencia cardiaca descompensada, hipertensión pulmonar no controlada, cor pulmonale agudo, embolia pulmonar inestable, síncope previo con la espiración forzada o la tos.',
        'Por aumento de la presión intracraneal o intraocular: aneurisma cerebral, neurocirugía en las 4 semanas previas, conmoción reciente con síntomas, cirugía ocular en la última semana.',
        'Por aumento de presión en senos paranasales y oído medio: cirugía o infección en la última semana.',
        'Por aumento de la presión intratorácica e intraabdominal: neumotórax, cirugía torácica o abdominal en las 4 semanas previas, embarazo avanzado.',
        'La guía mexicana de 2016 trata como absolutas la hemoptisis, el síndrome coronario agudo, el aneurisma aórtico mayor de 6 cm, la hipertensión intracraneal, el desprendimiento agudo de retina y la hipertensión arterial descontrolada.',
        'No se solicita en pacientes con traqueotomía o sonda pleural: el resultado no es confiable.'
      ],
      clinica: 'Sentado en una silla fija con descansabrazos, tronco erguido, ambos pies en el piso, cabeza ligeramente elevada y pinza nasal. Talla sin zapatos con estadímetro (si no puede ponerse de pie, la brazada entre 1.03 en varones o entre 1.01 en mujeres) y peso. El técnico explica y DEMUESTRA la maniobra. Tras una o dos respiraciones tranquilas: inspiración rápida y completa ("más, más, más"), soplido explosivo (se pide "sople de golpe", no "exhale") y espiración sostenida con estímulo verbal continuo ("siga, siga"), seguida de una inspiración máxima. Se buscan al menos tres maniobras aceptables; en adultos rara vez hacen falta más de ocho.',
      criterios_dx: 'Al citar al paciente se le dan por escrito las indicaciones y al llegar se comprueban y se anota cualquier desviación: no fumar, vapear ni usar pipa de agua en la hora previa (2 horas en la guía mexicana), no consumir intoxicantes en las 8 horas previas, no hacer ejercicio vigoroso en la hora previa y no llevar ropa que limite la expansión del tórax o del abdomen. No hace falta ayuno; se recomienda comida ligera. Se registran síntomas y signos (tos, sibilancias, disnea, cianosis).',
      laboratorio: 'El espirómetro debe cumplir la norma ISO 26782 con un error máximo de ±2.5%. Cada día se verifica la calibración con una jeringa de 3 L descargada a tres flujos distintos (de 0.5 a 12 L/s); se acepta un error de ±3% (el 2.5% del equipo más el 0.5% de la jeringa), es decir, de 2.91 a 3.09 L. Con uso intenso se verifica cada 4 horas y la linealidad, cada semana.',
      tx_farmacologico: 'Si el estudio es diagnóstico, se suspenden los broncodilatadores: de acción corta beta-agonista (salbutamol) 4 a 6 horas; antimuscarínico de acción corta (ipratropio) 12 horas; beta-agonista de acción larga (formoterol, salmeterol) 24 horas; de acción ultralarga (indacaterol, vilanterol, olodaterol) 36 horas; antimuscarínico de acción larga (tiotropio, umeclidinio, aclidinio, glicopirronio) 36 a 48 horas; en las combinaciones manda el de mayor duración. Si se quiere saber si el tratamiento actual admite mejoría, no se suspenden. Los corticoides inhalados y los antileucotrienos no se suspenden. El técnico registra fármaco, dosis y hora de la última toma.',
      complementarios: 'La espirometría lenta añade la capacidad vital lenta y la capacidad inspiratoria, que estima la hiperinflación y la respuesta a tratamientos; es menos repetible, está menos estandarizada y tiene pocos valores de referencia.',
      dx_diferencial: 'Los datos mal capturados cambian el predicho: diez años de más en la edad dan un predicho demasiado bajo y un falso negativo; diez de menos, un falso positivo. Lo mismo ocurre con el sexo, la talla o la altitud. Una talla estimada a ojo o medida con zapatos tiene el mismo efecto.',
      tx_medico: 'Toda espirometría diagnóstica inicial se hace antes y después del broncodilatador, porque una espirometría basal normal no descarta la respuesta. En el seguimiento de la enfermedad obstructiva suelen ser más útiles los valores posbroncodilatador.',
      pronostico: 'Hutchinson llamó capacidad vital (capacidad para vivir) al volumen máximo desplazable porque su descenso anunciaba muerte prematura. Cohortes como Framingham confirmaron que la espirometría predice mortalidad, también la de causa cardiaca.',
      algoritmo: [
        'Revisar contraindicaciones, medicación y preparación antes de empezar.',
        'Medir talla y peso de forma estandarizada y capturarlos bien.',
        'Demostrar la maniobra: llenar a tope, soplar de golpe, seguir soplando.',
        'Obtener al menos tres maniobras aceptables; ocho es el límite práctico.',
        'En el estudio diagnóstico inicial, repetir tras el broncodilatador.'
      ]
    },
    {
      nombre: 'Aceptabilidad, repetibilidad y grado de calidad', color: '#3d5a73',
      modalLabels: { laboratorio: 'Lo que cambió en 2019' },
      definicion: 'La aceptabilidad juzga cada maniobra, la repetibilidad compara las mejores entre sí y el grado resume la sesión. Una maniobra que no cumple todos los criterios puede ser "utilizable": no es técnicamente aceptable, pero su FEV1 o su FVC pueden tener utilidad clínica si es lo mejor que el paciente logra.',
      fisiopatologia: 'El inicio se valora en la curva flujo-volumen (ascenso vertical y pico agudo) y el final en la volumen-tiempo (meseta). El tiempo cero se define por extrapolación retrógrada desde el flujo pico; el volumen extrapolado (BEV) es el aire espirado antes de ese tiempo cero. Un BEV grande indica un inicio titubeante y suele dar un FEV1 falsamente alto.',
      clinica: 'Artefactos que invalidan: cierre glótico (caída brusca del flujo a cero y meseta plana desde el primer segundo), tos en el primer segundo (oscilaciones en la curva flujo-volumen y escalones en la volumen-tiempo), esfuerzo variable, exhalaciones repetidas, obstrucción de la boquilla por la lengua o los dientes, fuga alrededor de la boquilla, terminación temprana y error de la línea de base.',
      criterios_dx: 'Maniobra aceptable (ATS/ERS 2019): volumen extrapolado ≤ 5% de la FVC o 0.100 L, lo que sea mayor; sin error en el ajuste de flujo cero; sin tos en el primer segundo (invalida el FEV1, no la FVC); sin cierre glótico; sin obstrucción de la boquilla ni fuga; y, para la FVC, uno de tres indicadores de fin de espiración: meseta ≤ 0.025 L en el último segundo, tiempo espiratorio de 15 segundos, o FVC dentro de la tolerancia de repetibilidad de la mayor previa. Si la inspiración final (FIVC) supera a la FVC en más de 0.100 L o 5%, la maniobra no partió de capacidad pulmonar total y no es aceptable. Repetibilidad: los dos FEV1 más altos y las dos FVC más altas difieren 0.150 L o menos (mayores de 6 años).',
      laboratorio: 'Desapareció el tiempo espiratorio mínimo de 6 segundos, que descartaba maniobras válidas sobre todo en ancianos y en pacientes obstruidos; el volumen extrapolado máximo bajó de 0.150 a 0.100 L; la repetibilidad exigida pasó de 200 mL (ideal 150) a 150 mL; y se añadió el grado U para los resultados solo utilizables.',
      dx_diferencial: 'Repetibilidad no es aceptabilidad: se usa solo para decidir si hacen falta más maniobras. En la hiperreactividad bronquial, las maniobras repetidas pueden reducir los flujos. Al eliminar el tiempo mínimo, el técnico y el intérprete deben vigilar más la terminación temprana.',
      tx_medico: 'Se informan el mayor FEV1 y la mayor FVC de todas las maniobras aceptables, aunque vengan de maniobras distintas, y el cociente se calcula con ellos. Si no se logra repetibilidad, se hacen más maniobras hasta ocho en adultos. Si el FEV1 de una maniobra aceptable cae por debajo del 80% del inicial, se suspende la prueba por seguridad.',
      pronostico: 'El grado dice cuánta confianza merece que el resultado sea lo mejor que el paciente pudo hacer y que se repetiría. Al paciente que ve su grado hay que aclararle que califica la consistencia de sus soplidos, no la salud de sus pulmones.',
      algoritmo: [
        'Juzgar cada maniobra: inicio, final y artefactos.',
        'Con tres aceptables, comprobar repetibilidad de 150 mL o menos.',
        'Si no se cumple, seguir hasta ocho maniobras en adultos.',
        'Tomar el mayor FEV1 y la mayor FVC aceptables.',
        'Asignar grado por separado a FEV1 y FVC, antes y después del broncodilatador.'
      ]
    },
    {
      nombre: 'Valores de referencia, LIN y puntuación z', color: '#5c4a73',
      modalLabels: { epidemiologia: 'Qué ecuación usar' },
      definicion: 'Un resultado solo se interpreta frente a lo esperado en una persona sana de la misma edad, sexo y talla. El límite inferior de la normalidad (LIN) es el percentil 5 de esa población; la puntuación z indica a cuántas desviaciones estándar de la media está el resultado, y una z de −1.645 coincide con el LIN.',
      fisiopatologia: 'La dispersión de los valores sanos no es proporcional a la media: en el anciano el LIN del FEV1 cae por debajo del 80% del predicho y el de la capacidad pulmonar total queda por encima. Por eso la regla del 80% clasifica mal a cerca de uno de cada cinco sujetos. El cociente FEV1/FVC desciende normalmente con la edad, de modo que un corte fijo de 0.7 sobrediagnostica obstrucción en ancianos (sobre todo varones) y la infradiagnostica en jóvenes (sobre todo mujeres).',
      epidemiologia: 'GLI 2012 (más de 97 000 personas de 3 a 95 años) es la recomendada para espirometría; hay ecuaciones GLI para la DLCO (2017) y para los volúmenes estáticos (2021). En 2022 apareció GLI-Global, sin raza, que es la única respaldada oficialmente por ATS y ERS y la que GOLD recomienda para la EPOC pese a sus limitaciones. Desde 2019, la estandarización pide que GLI sea la ecuación por defecto de los espirómetros.',
      criterios_dx: 'Anormal es menor que el LIN, es decir, z menor de −1.645. Para el cociente FEV1/FVC, GOLD mantiene el corte fijo de 0.7 posbroncodilatador por simplicidad y porque con él se hicieron los ensayos; reconoce que sobrediagnostica en ancianos y propone usar el LIN o la z en menores de 50 años con cociente repetidamente de 0.7 o más.',
      laboratorio: 'LIN aproximado del FEV1/FVC (guía mexicana de 2016), en las décadas de los 40, 50, 60, 70 y 80 años: mujeres 72, 70, 67, 65 y 63%; varones 70, 68, 66, 64 y 62%. El valor exacto lo da la ecuación de referencia del equipo.',
      complementarios: 'Pasar a GLI-Global cambia la clasificación de algunos pacientes, con efectos en la elegibilidad laboral y la compensación por discapacidad.',
      dx_diferencial: 'Un mismo anciano puede tener obstrucción con el 0.7 y no tenerla con el LIN. Frente a paneles de expertos, el corte fijo sobrediagnostica la EPOC y el LIN la infradiagnostica en el anciano; en menores de 44 años el LIN es más exacto. La decisión final es clínica.',
      tx_medico: 'Informar la z y el rango normal de cada variable. Para seguir a un paciente en el tiempo se comparan los valores absolutos de cada visita, no la z, porque las ecuaciones vienen de estudios transversales (efecto cohorte).',
      pronostico: 'Para graduar en función de la supervivencia, el FEV1Q (FEV1 dividido entre 0.5 L en varones o 0.4 L en mujeres, el percentil 1 de quienes tienen enfermedad pulmonar crónica) predijo mejor que el porcentaje del predicho: cuanto más cerca de 1, mayor el riesgo.',
      algoritmo: [
        'Comprobar edad, sexo y talla capturados.',
        'Confirmar qué ecuación usa el equipo (idealmente GLI).',
        'Leer cada variable como z y frente a su LIN.',
        'Recordar que GOLD diagnostica la EPOC con el 0.7.',
        'Para el seguimiento, comparar valores absolutos.'
      ]
    },
    {
      nombre: 'Patrones espirométricos y gravedad', color: '#8c3a34',
      figura: 'pfr-curvas',
      definicion: 'El patrón sale de dos preguntas: ¿el FEV1/FVC está por debajo del LIN? y ¿la FVC está por debajo del LIN? De ahí resultan normal, obstructivo, posible restrictivo (o no específico, PRISm), posible mixto y disanáptico.',
      fisiopatologia: 'El cociente FEV1/FVC es un índice de vaciamiento: si en el primer segundo sale la mayor parte de la FVC, los bronquios están permeables. Una FVC baja con cociente normal significa menos aire desplazable con vaciamiento eficiente; pero como la espirometría no mide el volumen residual, no puede afirmar que la capacidad pulmonar total esté reducida.',
      epidemiologia: 'El PRISm (en la definición de GOLD, FEV1/FVC de 0.7 o más con FEV1 menor de 80% tras el broncodilatador) aparece en 7.1 a 11% de la población general, más en fumadores y exfumadores, y se asocia a obesidad, sexo femenino y multimorbilidad. Entre 20 y 30% de los casos evoluciona a obstrucción.',
      clinica: 'Obstructivo: la curva flujo-volumen pierde su forma triangular y el descenso se vuelve cóncavo. Posible restrictivo: curva pequeña de forma conservada. Disanáptico: cociente bajo con FEV1 y FVC normales en adolescentes y adultos jóvenes, por crecimiento discordante entre la vía aérea y el parénquima; es indistinguible de una obstrucción leve, aunque una respuesta al broncodilatador o una concavidad en la curva orientan a obstrucción.',
      criterios_dx: 'Normal: FEV1/FVC y FVC en o por encima del LIN. Obstructivo: FEV1/FVC menor del LIN con FVC normal. Posible restrictivo o no específico: FEV1/FVC normal con FVC menor del LIN; se confirma con la capacidad pulmonar total (restrictivo si está bajo el LIN, no específico si es normal). Posible mixto: FEV1/FVC y FVC bajo el LIN; puede ser restricción añadida o atrapamiento aéreo (pseudorrestricción), y solo los volúmenes pulmonares lo distinguen. Gravedad por la z del FEV1: −1.65 a −2.5 leve, −2.51 a −4 moderada, menor de −4.1 grave; el posible restrictivo se gradúa con la z de la FVC.',
      laboratorio: 'Una FVC normal hace poco probable una capacidad pulmonar total baja, pero no la excluye: si se sospecha enfermedad intersticial, se miden los volúmenes de todos modos. La guía mexicana de 2016, anterior a la z, usaba FVC del 80% del predicho para separar normal de sugerente de restricción y graduaba la obstrucción en cinco niveles por porcentaje del FEV1 (mayor de 70 leve hasta menor de 35 muy grave).',
      dx_diferencial: 'La espirometría no diagnostica el patrón mixto: una obstrucción con FVC baja puede ser atrapamiento aéreo, y el broncodilatador suele normalizar la FVC en la pseudorrestricción. Tampoco distingue el patrón no específico de la restricción. Y nombra patrones, no enfermedades: la causa la pone el clínico.',
      tx_medico: 'Obstructivo: graduar y valorar la respuesta al broncodilatador. Posible restrictivo o PRISm: medir volúmenes pulmonares y hacer prueba broncodilatadora (con capacidad pulmonar total normal, una respuesta positiva lo convierte en obstructivo). Posible mixto: medir la capacidad pulmonar total.',
      pronostico: 'El PRISm se asocia a más síntomas, enfermedad cardiopulmonar, hospitalizaciones y mortalidad por todas las causas y cardiovascular. No es estable: puede volver a la normalidad o progresar a obstrucción.',
      algoritmo: [
        'Mirar primero el FEV1/FVC frente al LIN.',
        'Después la FVC frente al LIN.',
        'Nombrar el patrón; restrictivo y mixto, como "posibles".',
        'Graduar con la z del FEV1 (o de la FVC en la posible restricción).',
        'Si la FVC está baja, pedir volúmenes pulmonares.'
      ]
    },
    {
      nombre: 'Prueba broncodilatadora', color: '#3f6b52',
      modalLabels: { laboratorio: 'Ejemplo resuelto' },
      definicion: 'Mide cuánto mejora el flujo aéreo tras un broncodilatador, con los cambios del FEV1 y de la FVC. La guía de 2019 dejó de llamarla prueba de "reversibilidad" porque el término sugiere que la obstrucción desaparece por completo.',
      fisiopatologia: 'Una espirometría basal normal no descarta la respuesta. Y la respuesta puede ser positiva aunque la espirometría posbroncodilatador siga obstruida, como en el asma con remodelación de la vía aérea o en la EPOC con hiperreactividad: se interpretan por separado la espirometría inicial, la respuesta y la espirometría final.',
      clinica: 'Tras una espirometría basal aceptable se administran 400 µg de salbutamol (200 µg en menores de 10 años) con cámara espaciadora; el paciente espera sentado y se repite la espirometría con los mismos criterios de calidad, a los 15 minutos (la guía mexicana de 2016 esperaba 20). Se informa el cambio en mililitros y en porcentaje.',
      criterios_dx: 'ERS/ATS 2022: positiva si el FEV1 o la FVC aumentan más del 10% de su valor PREDICHO. Criterio clásico de 2005, que conservan GINA y GOLD: aumento de 12% o más y de 200 mL o más respecto al valor BASAL. En el asma, GINA da más confianza a un aumento de 15% y 400 mL o más.',
      laboratorio: 'FEV1 basal 2.00 L, posbroncodilatador 2.26 L, predicho 3.20 L. Cambio de 260 mL: 13% del basal y 8.1% del predicho. Es positiva por el criterio clásico y negativa por el de 2022; un laboratorio que solo informe uno de los dos dará una conclusión distinta.',
      tx_farmacologico: 'Si el objetivo es diagnóstico, suspender antes los broncodilatadores (beta-agonista de acción corta 4 horas o más; formoterol y salmeterol 24 horas; indacaterol y vilanterol 36 horas; tiotropio, umeclidinio, aclidinio y glicopirronio 36 a 48 horas). Puede usarse salbutamol o un corticoide inhalado con formoterol de acción rápida. La respuesta puede perderse temporalmente durante una exacerbación grave o una infección viral.',
      dx_diferencial: 'En la EPOC, la magnitud de la respuesta varía en el tiempo, no distingue de asma ni predice la respuesta al tratamiento a largo plazo; por eso GOLD ya no la usa para decidirlo. Un cambio aparente de la FVC tras el broncodilatador puede deberse solo a un tiempo espiratorio más largo.',
      tx_medico: 'En el asma, una respuesta positiva es una de las formas de demostrar la variabilidad del flujo que exige el diagnóstico. En la EPOC, el diagnóstico se confirma con el cociente posbroncodilatador; si la espirometría prebroncodilatador no muestra obstrucción, la posbroncodilatador no hace falta salvo sospecha clínica muy alta.',
      pronostico: 'El criterio de 2022 nació de datos de supervivencia y la propia comisión no lo recomendó para decisiones diagnósticas. Después se vio que quienes eran positivos solo por el criterio clásico tenían una carga respiratoria alta, y GINA lo conserva.',
      algoritmo: [
        'Suspender broncodilatadores si el estudio es diagnóstico.',
        'Espirometría basal aceptable y repetible.',
        '400 µg de salbutamol con espaciador; esperar 15 minutos.',
        'Repetir con los mismos criterios de calidad.',
        'Informar el cambio en mL, en % del basal y en % del predicho.'
      ]
    },
    {
      nombre: 'Interpretación longitudinal y seguimiento', color: '#8a6a1f',
      modalLabels: { epidemiologia: 'Cuándo repetir según la enfermedad' },
      definicion: 'Comparar a una persona consigo misma en el tiempo detecta antes un descenso acelerado y evita los falsos positivos y negativos de una medición aislada. Debería ser la forma habitual de guiar las decisiones clínicas.',
      fisiopatologia: 'En no fumadores mayores de 25 años el FEV1 baja unos 30 mL al año, pero esa cifra no es un umbral para dos mediciones del mismo individuo: la espirometría repetida puede variar hasta 200 mL sin cambio real. Medir una caída verdadera puede requerir de 5 a 10 años de observaciones.',
      epidemiologia: 'EPOC: al menos una vez al año para identificar a los declinadores rápidos (caída del FEV1 mayor de 50 mL al año). Asma: al inicio y de 3 a 6 meses después de lograr el control; la diferencia mínima importante es una caída del FEV1 mayor de 10%. Fibrosis pulmonar idiopática: cada 6 meses; diferencia mínima importante, caída de la FVC mayor de 10%. Distrofias musculares: anual en menores de 12 años que caminan; semestral si son mayores, usan silla de ruedas o tienen FVC menor de 80%.',
      criterios_dx: 'Medicina del trabajo: espirometría al ingreso y luego anual; una caída mayor de 15% respecto a la basal se considera excesiva, y antes y después de la jornada, una caída del FEV1 mayor de 10% es significativa. Fibrosis pulmonar progresiva (enfermedad intersticial distinta de la FPI): uno de sus criterios fisiológicos es una caída absoluta de la FVC mayor de 5% del predicho, o de la DLCO corregida por hemoglobina mayor de 10%, en un año, sin otra explicación.',
      laboratorio: 'FEV1Q = FEV1 / 0.5 L en varones o / 0.4 L en mujeres. Ejemplo: mujer de 70 años con FEV1 de 0.9 L, FEV1Q de 2.25. Expresa el FEV1 en relación con el mínimo compatible con la supervivencia: cuanto más cerca de 1, mayor el riesgo de muerte.',
      dx_diferencial: 'Comparar con la misma técnica, el mismo equipo, la misma ecuación y a la misma hora: la variación diurna es de 3% en el FEV1 y de 6% en el flujo pico, con valores más bajos por la tarde en la EPOC. Mostrar la tendencia con valores absolutos, no con la z.',
      tx_medico: 'Crisis asmática: un FEV1 menor del 60% del predicho una hora después del tratamiento inicial en urgencias obliga a valorar la hospitalización. Distrofias musculares: con FVC menor de 40% se indican maniobras de reclutamiento de volumen y tos asistida, y con menos de 30%, ventilación no invasiva.',
      seguimiento_ambulatorio: 'En la fibrosis pulmonar idiopática se consideran pruebas de función respiratoria y caminata de 6 minutos cada 4 a 6 meses, o antes si la clínica lo pide.',
      pronostico: 'En la obstrucción al flujo aéreo, un FEV1 bajo o una caída rápida del FEV1 se asocian a mayor mortalidad.',
      algoritmo: [
        'Tener una espirometría basal de referencia.',
        'Repetir con igual técnica, equipo y horario.',
        'Comparar valores absolutos frente a la variabilidad esperada.',
        'Aplicar el umbral de la enfermedad o del entorno laboral.',
        'Una caída real cambia el seguimiento o el tratamiento.'
      ]
    },
    {
      nombre: 'Volúmenes pulmonares: pletismografía y dilución de gases', color: '#2e6b7a',
      definicion: 'La pletismografía corporal mide la capacidad residual funcional (FRC, o volumen de gas intratorácico) y la resistencia específica de la vía aérea; con una espirometría lenta vinculada se derivan la capacidad pulmonar total (TLC = FRC + capacidad inspiratoria) y el volumen residual (RV). Es el estándar de referencia porque mide todo el gas del tórax, esté o no comunicado con la vía aérea, incluido el atrapado en bulas.',
      fisiopatologia: 'Se basa en la ley de Boyle (presión por volumen constante a temperatura constante). En una cabina hermética, al final de una espiración tranquila se cierra un obturador y el paciente jadea con suavidad; los cambios de presión en la boca y en la cabina permiten calcular el volumen de gas del tórax. La dilución de helio y el lavado de nitrógeno solo miden el gas que se comunica con la vía aérea: con atrapamiento aéreo subestiman la FRC y la TLC.',
      epidemiologia: 'Confirmar y cuantificar restricción; confirmar hiperinflación y atrapamiento aéreo, sobre todo con disnea desproporcionada al FEV1; evaluación previa a cirugía de reducción de volumen; seguimiento clínico. Se sugiere en toda espirometría con FVC baja: posible restricción, posible mixto o PRISm.',
      factores_riesgo: [
        'Las mismas contraindicaciones relativas que la espirometría, más cirugía de ojos u oído en las 8 semanas previas, tuberculosis activa, infección respiratoria en las 2 semanas previas, hemoptisis, aneurisma y embarazo avanzado o complicado.',
        'Traqueostomía o sonda pleural.',
        'Oxígeno continuo que no puede suspenderse durante la prueba.',
        'La claustrofobia no la impide: se explica que la puerta puede abrirse en cualquier momento.'
      ],
      clinica: 'Evitar tabaco y vapeo 2 horas antes, ropa holgada, comida ligera 4 horas antes y sin ejercicio intenso ese día. Dentro de la cabina: respiración tranquila estable, oclusión de unos segundos durante la que el paciente jadea suavemente (el registro debe dar líneas rectas casi superpuestas, con mínima histéresis), y al abrir el obturador, inspiración máxima seguida de espiración lenta y completa. La espirometría debe quedar vinculada a la medición: sin ella no se informa.',
      criterios_dx: 'Tres maniobras aceptables cuya FRC coincida dentro del 5%, calculado como (FRC mayor − FRC menor) / FRC promedio × 100; hasta 10% puede ser utilizable. Grado A: tres o más maniobras aceptables de FRC y de capacidad vital lenta dentro del 5%; C: dentro del 10%. Se informa el promedio de las FRC aceptables, la TLC como promedio de FRC más la capacidad inspiratoria vinculada, y el RV como TLC menos la mayor capacidad vital.',
      laboratorio: 'Se interpreta con el LIN (p5) y el límite superior (LSN, p95), ya no con porcentaje del predicho; las ecuaciones recomendadas son las GLI de volúmenes (5 a 80 años), con el sexo al nacer. TLC menor del p5: restricción, simple si RV/TLC y FRC/TLC son normales, compleja si alguno pasa del p95 con FEV1/FVC normal, y trastorno mixto si además el FEV1/FVC está bajo el p5. TLC normal con cocientes por encima del p95: hiperinflación o atrapamiento. TLC mayor del p95: hiperinflación si los cocientes también están altos; pulmones grandes si no.',
      tx_farmacologico: 'Los broncodilatadores y los esteroides inhalados modifican la medición: la decisión de suspenderlos o mantenerlos es del médico que solicita la prueba, y el técnico registra la hora de la última dosis. El resto de la medicación habitual se mantiene.',
      dx_diferencial: 'No solo la obstrucción eleva el RV/TLC: en la restricción por enfermedad neuromuscular la TLC baja con RV alto. La enfermedad parenquimatosa difusa, en cambio, reduce todos los volúmenes. En la bronquitis crónica o el asma puede aumentar la FRC o el RV sin aumento de la TLC, lo que sugiere atrapamiento aéreo.',
      tx_medico: 'Convierte un "posible restrictivo" en restricción confirmada o en patrón no específico, y un "posible mixto" en mixto verdadero o en obstrucción con atrapamiento. En la obstrucción grave cuantifica la hiperinflación; el cociente capacidad inspiratoria/TLC tiene implicación pronóstica en la EPOC.',
      algoritmo: [
        'Empezar por la TLC frente al p5 y al p95.',
        'Mirar después RV/TLC y FRC/TLC.',
        'Con restricción, revisar el FEV1/FVC: mixto o compleja.',
        'Sin restricción, cocientes altos significan atrapamiento o hiperinflación.',
        'Exigir espirometría vinculada y repetibilidad de la FRC del 5%.'
      ]
    },
    {
      nombre: 'Difusión de monóxido de carbono (DLCO)', color: '#6b3a5a',
      figura: 'pfr-dlco',
      definicion: 'Prueba de intercambio gaseoso: mide la transferencia de monóxido de carbono (CO) desde el gas alveolar hasta la hemoglobina, como sustituto del oxígeno. Se hace con respiración única (DLCOsb) y un gas trazador inerte que permite calcular el volumen alveolar (VA). La DLCO es el producto de sus dos mediciones primarias: DLCO = KCO × VA, donde KCO es el coeficiente de transferencia.',
      fisiopatologia: 'Ley de Fick: la transferencia es proporcional al área y al gradiente de presión, e inversamente proporcional al grosor de la membrana. Por eso baja si se pierde área (enfisema, resección pulmonar) o si se engrosa la membrana (enfermedad intersticial). El CO tiene unas 210 veces más afinidad por la hemoglobina que el oxígeno, de modo que su presión en el capilar se considera nula. Según Roughton y Forster, 1/DLCO = 1/Dm + 1/θVc: un componente de membrana y otro de unión a la hemoglobina del capilar.',
      epidemiologia: 'Enfermedad intersticial, cuyas alteraciones del intercambio suelen preceder a las de la mecánica; enfermedad vascular pulmonar e hipertensión pulmonar; EPOC (disminuye en proporción al enfisema); asma (normal o aumentada); vigilancia de fármacos neumotóxicos; y enfermedades extrapulmonares como las hemoglobinopatías y la obesidad. Junto con la espirometría y la caminata de 6 minutos, es de las pruebas iniciales en la mayoría de los pacientes respiratorios.',
      factores_riesgo: [
        'Absolutas: hipoxemia grave (SpO2 menor de 75%, a valorar según la altitud) y carboxihemoglobina mayor de 10 a 15%.',
        'Relativas: confusión o mala coordinación, enfermedad cardiovascular aguda o descompensada, neumotórax en los 3 meses previos, riesgo de hemoptisis, infección respiratoria aguda, embarazo avanzado o complicado.',
        'Paciente que no puede suspender el oxígeno al menos 10 minutos.',
        'Capacidad vital menor que el volumen mínimo que exige el equipo.'
      ],
      clinica: 'No fumar ni vapear el día de la prueba, sin oxígeno 10 minutos antes y 10 minutos de reposo sentado. Respiraciones tranquilas, espiración hasta volumen residual, inspiración rápida (menos de 4 segundos) de la mezcla de prueba hasta al menos el 90% de la FVC, apnea de 10 ± 2 segundos sin Valsalva ni Müller, y espiración durante la que se toma la muestra alveolar. Mínimo dos maniobras aceptables y repetibles, separadas 4 minutos; máximo cinco, porque cada una sube la carboxihemoglobina 0.6 a 0.7%.',
      criterios_dx: 'Repetibles: dos maniobras que difieren 2 mL/min/mmHg o menos (0.67 mmol/min/kPa). Calidad A: volumen inspirado de 90% o más de la FVC, apnea de 8 a 12 segundos y muestra recogida en 4 segundos o menos; se informa el promedio de dos maniobras A repetibles. Interpretación: baja si es menor del LIN (z menor de −1.64), alta si supera el límite superior (z mayor de +1.64); cuando es baja se miran siempre sus componentes, VA y KCO.',
      laboratorio: 'Gravedad por z: −1.64 a −2.5 leve, −2.51 a −4 moderada, menor de −4.1 grave. Ajuste de la DLCO predicha por hemoglobina (en g/dL): varones y adolescentes, × 1.7 Hb / (10.22 + Hb); mujeres y menores de 15 años, × 1.7 Hb / (9.38 + Hb). El cociente VA/TLC normal en el adulto es de 0.85 a 0.90: si es mucho menor, la mala distribución del gas contribuye a la DLCO baja.',
      tx_farmacologico: 'El broncodilatador puede aumentar la DLCO hasta 6% en la enfermedad obstructiva, pero con menos de 1000 µg de salbutamol no hay efecto significativo y no se desaconseja antes de la prueba; el técnico registra su uso. El tabaco eleva la carboxihemoglobina (5 a 10% en fumadores, menos de 3% en no fumadores) y reduce la DLCO; si se sospecha, conviene medirla. En fumadores sin obstrucción, la DLCO está bajo el LIN en 26.7% de los activos y en 14.4% de los exfumadores.',
      dx_diferencial: 'DLCO alta: más sangre en el capilar (cortocircuito de izquierda a derecha, asma, obesidad), eritrocitosis o hemorragia alveolar. DLCO baja con VA normal: enfisema con volumen preservado, enfermedad vascular pulmonar o anemia. VA baja con KCO alta: pérdida localizada de volumen (neumonectomía) o expansión incompleta (enfermedad neuromuscular). VA y KCO bajos: pérdida de la estructura alveolocapilar (enfisema, enfermedad intersticial).',
      tx_medico: 'Una DLCO muy reducida (menos de 45% del predicho) con el resto de las pruebas normales orienta a hipertensión arterial pulmonar asociada a esclerosis sistémica, enfermedad venooclusiva o hipertensión pulmonar del grupo 3 (enfisema, enfermedad intersticial, enfisema con fibrosis). Por eso el estudio inicial de la sospecha de hipertensión pulmonar incluye espirometría, pletismografía, DLCO y gasometría.',
      seguimiento_ambulatorio: 'En la enfermedad intersticial distinta de la FPI, una caída absoluta de la DLCO corregida por hemoglobina mayor de 10% del predicho en un año es evidencia fisiológica de progresión, aunque menos específica que la caída de la FVC.',
      pronostico: 'Una DLCO baja se asocia a mal pronóstico en varias formas de hipertensión pulmonar.',
      algoritmo: [
        'Comprobar calidad: dos maniobras A repetibles.',
        'Ajustar por hemoglobina, carboxihemoglobina y altitud.',
        'Clasificar: baja, normal o alta frente al LIN y al LSN.',
        'Si es baja, descomponer en VA y KCO.',
        'Graduar con la z e integrar con la espirometría y los volúmenes.'
      ]
    },
    {
      nombre: 'Prueba de caminata de 6 minutos', color: '#3f6b52',
      definicion: 'Mide la distancia máxima que una persona camina en 6 minutos, tan rápido como le sea posible, en un pasillo plano de 30 metros. Evalúa de forma integrada la respuesta respiratoria, cardiovascular, metabólica, musculoesquelética y neurosensorial al ejercicio submáximo.',
      fisiopatologia: 'A diferencia de las pruebas en reposo, capta las manifestaciones extrapulmonares de la enfermedad respiratoria crónica: enfermedad cardiovascular, fragilidad, sarcopenia y cáncer. Y a diferencia de la prueba cardiopulmonar, no necesita equipo complejo.',
      epidemiologia: 'Comparar antes y después de un tratamiento (trasplante o resección pulmonar, cirugía de reducción de volumen, rehabilitación, EPOC, hipertensión pulmonar, insuficiencia cardiaca), evaluar el estado funcional y predecir morbilidad y mortalidad.',
      factores_riesgo: [
        'Absolutas: infarto reciente (3 a 5 días), angina inestable, arritmia no controlada, síncope, endocarditis, miocarditis o pericarditis aguda, estenosis aórtica grave o sintomática, insuficiencia cardiaca no controlada, embolia o infarto pulmonar reciente, trombosis de miembros inferiores, sospecha de aneurisma disecante, asma no controlada, edema pulmonar, insuficiencia respiratoria aguda.',
        'Relativas: estenosis del tronco coronario izquierdo, estenosis valvular moderada, hipertensión no tratada mayor de 200/120 mmHg, taquiarritmias o bradiarritmias, bloqueo AV de alto grado, miocardiopatía hipertrófica, embarazo avanzado, alteraciones electrolíticas, frecuencia cardiaca en reposo mayor de 120 lpm.',
        'SpO2 en reposo menor de 85%: puede hacerse con oxígeno, especificando el flujo; el corte se ajusta a la altitud.'
      ],
      clinica: 'Quince minutos sentado antes, sin suspender la medicación habitual. Instrucción estandarizada: caminar lo más rápido posible sin correr ni trotar; el técnico no camina junto al paciente. Frases de estímulo con tono uniforme cada minuto ("Va muy bien, le quedan 5 minutos"). Se registran la SpO2 y la frecuencia cardiaca en cada vuelta, el Borg de disnea y de fatiga, y los signos vitales al terminar y a los 1, 3 y 5 minutos. Por el efecto de aprendizaje se recomienda repetirla tras 30 minutos de descanso y reportar la de más metros.',
      criterios_dx: 'Se detiene de inmediato ante dolor torácico, disnea intolerable, marcha titubeante, sudoración o palidez, calambres, apariencia de desvanecimiento, petición del paciente u oximetría menor de 80%. Desaturación que obliga a modificar el oxígeno: caída de 4% respecto a la basal con SpO2 menor de 85% en adultos (menor de 90% en niños).',
      laboratorio: 'Cambio mínimo clínicamente importante: 25 a 33 m (mediana 30 m) en EPOC, hipertensión pulmonar y enfermedad intersticial. Ecuación de Enright (1998, 40 a 80 años): varones (7.57 × talla en cm) − (5.02 × edad) − (1.76 × peso en kg) − 309; mujeres (2.11 × talla en cm) − (5.78 × edad) − (2.29 × peso en kg) + 667. Producto distancia-desaturación (metros × SpO2 más baja): 290 m% o menos predijo mortalidad en EPOC y menos de 200 m% en FPI.',
      tx_farmacologico: 'Quien usa oxígeno ambulatorio camina con su flujo habitual, constante, y con el mismo dispositivo en cada prueba que se quiera comparar; cualquier cambio de flujo se anota en la hoja de trabajo.',
      dx_diferencial: 'La distancia depende del trazado del pasillo (continuo o de ida y vuelta), de su longitud, del oxígeno y de cómo se carga, del aprendizaje y del estímulo verbal: solo se comparan pruebas hechas igual. Las ecuaciones de referencia de otras poblaciones ajustan mal; mientras falten las locales, lo más útil es el cambio en el mismo paciente.',
      tx_medico: 'En la EPOC forma parte del índice BODE, y bajar un punto del índice reduce la mortalidad; la vía más eficiente es aumentar los metros caminados reduciendo la hiperinflación dinámica y con rehabilitación. En la FPI, una desaturación menor de 88%, menos de 250 m o una caída mayor de 50 m en 6 meses están entre los criterios para enlistar a trasplante.',
      pronostico: 'EPOC: el riesgo de muerte y de hospitalización aumenta por debajo de 350 m. Hipertensión arterial pulmonar: 440 m y 165 m fueron los mejores umbrales de supervivencia y de mortalidad a un año, y el deterioro predice más que la mejoría. FPI: menos de 250 m duplica la mortalidad a un año.',
      algoritmo: [
        'Revisar contraindicaciones y la SpO2 en reposo.',
        'Instrucción y estímulo estandarizados, sin acompañar al paciente.',
        'Registrar SpO2, frecuencia cardiaca y Borg.',
        'Repetir tras 30 minutos y quedarse con la mejor.',
        'Interpretar en metros y, sobre todo, como cambio.'
      ]
    },
    {
      nombre: 'Fracción exhalada de óxido nítrico (FeNO)', color: '#7a1f3d',
      definicion: 'Medición cuantitativa, no invasiva, sencilla y segura del óxido nítrico en el aire exhalado, como marcador de la inflamación de la vía aérea, en particular la eosinofílica (tipo 2). El resultado es inmediato.',
      fisiopatologia: 'La reversibilidad del FEV1 y las pruebas de provocación se relacionan solo de forma indirecta con la inflamación; la FeNO la refleja de forma más directa, y por eso predice la respuesta al corticoide.',
      epidemiologia: 'Diagnosticar inflamación eosinofílica (recomendación fuerte); estimar la probabilidad de respuesta al corticoide en síntomas respiratorios crónicos (fuerte); apoyar el diagnóstico de asma cuando hace falta evidencia objetiva (débil); vigilar la inflamación en el asma; y desenmascarar la falta de adherencia al corticoide inhalado.',
      clinica: 'Se usan puntos de corte, no valores de referencia, y en menores de 12 años se tiene en cuenta la edad. Varía con el sexo, la edad, el equipo y la hora: es más baja temprano por la mañana, al revés que los eosinófilos.',
      criterios_dx: 'Adultos: menos de 25 ppb hace poco probables la inflamación eosinofílica y la respuesta al corticoide; más de 50 ppb las hace probables; entre 25 y 50 ppb se interpreta con cautela y en contexto. Niños: menos de 20, más de 35, y 20 a 35 ppb. Con síntomas típicos de asma y espirometría negativa o no disponible, una FeNO mayor de 50 ppb en adultos (35 en niños) apoya el asma tipo 2, aunque puede tener otras causas; un valor bajo no descarta asma.',
      laboratorio: 'Aumento significativo entre visitas: más de 20% si el valor supera 50 ppb, o más de 10 ppb si es menor de 50. Respuesta significativa al tratamiento antiinflamatorio: reducción de al menos 20% (sobre 50 ppb) o de más de 10 ppb (bajo 50).',
      tx_farmacologico: 'El corticoide inhalado reduce la FeNO. Una FeNO persistentemente alta pese al tratamiento sugiere mala adherencia, mala técnica inhalatoria o exposición continua a alérgenos.',
      dx_diferencial: 'La elevan el asma, la rinitis alérgica, la atopia y la exposición persistente a alérgenos. La reducen el tabaquismo, la broncoconstricción y, de forma transitoria, la propia espirometría forzada; también es baja en la fibrosis quística, la discinesia ciliar primaria y la hipertensión arterial pulmonar.',
      tx_medico: 'Ayuda a decidir si un paciente con síntomas respiratorios crónicos se beneficiará de un corticoide inhalado, y a vigilar en el asma si hay que ajustarlo.',
      algoritmo: [
        'Medir antes de la espirometría forzada.',
        'Interpretar con cortes y según la edad.',
        'Más de 50 ppb: inflamación tipo 2 probable.',
        'Menos de 25 ppb: poco probable; no descarta asma.',
        'En el seguimiento, valorar el cambio, no solo el valor.'
      ]
    },
    {
      nombre: 'Variabilidad del FEM y pruebas de reto bronquial', color: '#6b4a2e',
      definicion: 'Pruebas que buscan la variabilidad excesiva del flujo espiratorio que define al asma cuando la espirometría basal no la muestra: la variabilidad diurna del flujo espiratorio máximo (FEM) medida en casa, y la caída del FEV1 ante un estímulo (metacolina, hiperventilación, salina hipertónica, manitol o ejercicio).',
      fisiopatologia: 'En el reto con ejercicio, el aumento del volumen minuto seca y enfría la vía aérea; el aire frío y seco libera histamina y leucotrienos, que obstruyen el bronquio. En una persona sana el ejercicio no provoca obstrucción.',
      epidemiologia: 'Historia sugestiva de asma sin obstrucción demostrada en reposo; síntomas atípicos o aislados (tos crónica, opresión torácica, disnea de esfuerzo); síntomas que aparecen solo con el ejercicio; y, para el reto con ejercicio, cuando la metacolina está contraindicada o fue negativa.',
      factores_riesgo: [
        'Reto con ejercicio, absolutas: limitación grave al flujo (FEV1 menor de 50% del predicho o de 1 L), infarto en los 3 meses previos, hipertensión descontrolada (mayor de 200/100 mmHg), aneurisma conocido.',
        'Relativas: FEV1 menor de 60% o de 1.5 L, embarazo, lactancia, uso de inhibidores de la colinesterasa, isquemia cardiaca, arritmias, limitaciones ortopédicas.',
        'Hay poca justificación para provocar obstrucción en quien ya la tiene demostrada.'
      ],
      clinica: 'FEM: dos veces al día durante 1 a 2 semanas, el mayor de tres soplidos cada vez y siempre con el mismo medidor, porque entre aparatos puede variar hasta 20%. Reto con ejercicio: banda o cicloergómetro hasta 8 minutos, a 20 a 25 °C y humedad menor de 50%, respirando por la boca con pinza nasal; espirometría basal y después desde el primer minuto y cada 5 minutos hasta los 20. En las espirometrías posteriores basta un tiempo espiratorio de 3 segundos, porque interesa el FEV1.',
      criterios_dx: 'Variabilidad diurna excesiva: mayor de 10% en adultos y de 13% en niños. Reto positivo: caída del FEV1 de 20% o más con metacolina; de 15% o más con hiperventilación, salina hipertónica o manitol; y de más de 10% y más de 200 mL con ejercicio estandarizado (la guía mexicana lo da por positivo desde 10%, y más específico con 15%).',
      laboratorio: 'Variabilidad diurna = (FEM más alto del día − FEM más bajo) / promedio de ambos × 100, promediada en 1 a 2 semanas. El límite superior de confianza del 95% en sanos es 9% en adultos y 12.3% en niños.',
      tx_farmacologico: 'Se da un broncodilatador de acción corta si hay disnea grave, si la prueba es positiva o si hay broncoconstricción clara. Antes de un reto con metacolina, los broncodilatadores se suspenden más tiempo que antes de una espirometría, porque su efecto broncoprotector dura más que el broncodilatador.',
      dx_diferencial: 'Si el FEV1 cae, comprobar que también cayó el FEV1/FVC: una inspiración incompleta por obstrucción laríngea inducible o mal esfuerzo reduce el FEV1 sin broncoconstricción. Una caída de la función durante una infección respiratoria no basta para diagnosticar asma: también ocurre en sanos y en la EPOC.',
      tx_medico: 'Un FEV1 normal durante los síntomas hace menos probable el asma. La variación del FEV1 de 12% y 200 mL o más entre visitas tiene buena especificidad pero poca sensibilidad. Cuanto mayor y más repetida es la variabilidad, más firme es el diagnóstico.',
      algoritmo: [
        'Espirometría basal normal y sospecha de asma.',
        'Registrar el FEM dos veces al día 1 a 2 semanas.',
        'Si no es concluyente, reto bronquial.',
        'Confirmar que la caída del FEV1 acompaña a la del cociente.',
        'Tratar con broncodilatador al terminar si la prueba es positiva.'
      ]
    },
    {
      nombre: 'Fuerza de los músculos respiratorios', color: '#5c4a73',
      definicion: 'La presión inspiratoria máxima (PImax), medida desde volumen residual, estima sobre todo la fuerza del diafragma; la espiratoria máxima (PEmax), desde capacidad pulmonar total, la de los músculos intercostales y abdominales. La presión nasal durante un olfateo (SNIP) y la caída de la capacidad vital en decúbito completan el estudio sin pruebas invasivas.',
      fisiopatologia: 'Se mide la presión generada contra una boquilla ocluida como sustituto de la fuerza; una pequeña fuga (unos 2 mm de diámetro) evita que se cierre la glotis o que los músculos de la boca generen la presión. En decúbito, el contenido abdominal carga sobre un diafragma débil y la capacidad vital cae mucho más que el 5 a 10% de una persona sana.',
      epidemiologia: 'Enfermedades neuromusculares (esclerosis lateral amiotrófica, miastenia, polimiositis, distrofia de Duchenne, Guillain-Barré, lesión medular alta), metabólicas (desnutrición, hipofosfatemia, hipopotasemia, hipomagnesemia, hipocalcemia, insuficiencia renal crónica) y endocrinas (hipotiroidismo, tirotoxicosis, insuficiencia suprarrenal); y cualquier proceso que saque al diafragma de su curva longitud-tensión, como la hiperinflación.',
      factores_riesgo: [
        'Absolutas en la guía mexicana: angina inestable, infarto o miocarditis en las 4 semanas previas, hipertensión no controlada, neumotórax reciente, posoperatorio de biopsia pulmonar (una semana) o de cirugía abdominal o genitourinaria, incontinencia urinaria.',
        'Relativas: presión mayor de 200/110 mmHg, lesión espinal u ocular reciente, paciente que no puede colaborar.',
        'Complicaciones posibles: rotura timpánica, síncope, hemorragia conjuntival, cefalea.'
      ],
      clinica: 'Sentado, con boquilla tipo buceo. PImax: exhalar suave y completamente, y luego inhalar con toda la fuerza posible (como sorber una malteada espesa con popote). PEmax: inhalar a tope y soplar con toda la fuerza posible (como inflar un globo). La presión se sostiene 1.5 segundos y se registra el promedio del mejor segundo, no el pico. Un minuto de descanso entre intentos; tres reproducibles, con menos de 10% entre los dos mayores, en cinco a ocho intentos.',
      criterios_dx: 'Se excluye debilidad significativa si la PImax llega a −80 cmH2O, si la PEmax supera 80 cmH2O en varones o 60 en mujeres, o si la SNIP alcanza −70 cmH2O en varones o −60 en mujeres. Una PEmax normal con PImax baja sugiere debilidad diafragmática aislada. Una caída de la capacidad vital en decúbito mayor de 30% indica debilidad diafragmática aislada o desproporcionada.',
      laboratorio: 'Ecuaciones de Black y Hyatt (cmH2O): PImax en mujeres 104 − 0.51 × edad y en varones 143 − 0.55 × edad; PEmax en mujeres 170 − 0.53 × edad y en varones 268 − 1.03 × edad. Normal si supera el 80% del predicho o el LIN; en términos generales, anormal por debajo de 60%. Un cambio mayor de 25 cmH2O entre mediciones es real.',
      dx_diferencial: 'Son pruebas volitivas: una presión normal excluye la debilidad, pero una baja puede ser debilidad o mal esfuerzo, y usadas aisladas sobrediagnostican debilidad. Por eso se recomienda medir PImax y SNIP juntas y, si salen bajas, derivar a pruebas no volitivas.',
      tx_medico: 'Las mediciones seriadas, junto con la capacidad vital, guían el seguimiento de la enfermedad neuromuscular.',
      algoritmo: [
        'Pensar en debilidad ante restricción con RV alto o disnea en decúbito.',
        'PImax desde RV y PEmax desde TLC, mejor segundo sostenido.',
        'Añadir SNIP y capacidad vital sentado y en decúbito.',
        'Valores normales excluyen debilidad significativa.',
        'Valores bajos: confirmar con pruebas no volitivas.'
      ]
    },
    {
      nombre: 'Prueba de ejercicio cardiopulmonar', color: '#8c3a34',
      definicion: 'Evalúa a la vez la capacidad de los sistemas respiratorio y cardiovascular para el intercambio de gases ante una alta demanda metabólica, con medición respiración a respiración del consumo de oxígeno (VO2) y de la producción de CO2 (VCO2). Suele hacerse en cicloergómetro, con carga incremental, hasta que los síntomas la limitan.',
      fisiopatologia: 'En una persona sana queda al pico del ejercicio una reserva respiratoria de alrededor del 15% de la ventilación voluntaria máxima (VVM). La limitación respiratoria agota esa reserva (ventilación de 85% de la VVM o más), con caída de la capacidad inspiratoria por hiperinflación dinámica, desaturación o elevación de la PaCO2. La limitación cardiovascular da umbral láctico temprano, frecuencia cardiaca máxima alcanzada pronto, pulso de oxígeno (VO2 / frecuencia cardiaca) bajo y gran reserva respiratoria.',
      epidemiologia: 'Disnea no explicada por las pruebas en reposo; evaluación funcional y pronóstica en la insuficiencia cardiaca (el VO2 máximo es el mejor predictor de mortalidad), en la EPOC con síntomas desproporcionados, en la enfermedad intersticial y en la hipertensión pulmonar; riesgo de cirugía pulmonar (el VO2 máximo es el principal predictor de complicaciones); prescripción de rehabilitación; dictamen de incapacidad.',
      factores_riesgo: [
        'Absolutas: infarto reciente, angina inestable, arritmia no controlada, endocarditis, miocarditis o pericarditis activas, estenosis aórtica grave, insuficiencia cardiaca no controlada, embolia pulmonar aguda, trombosis venosa de miembros inferiores y enfermedades que el ejercicio pueda agravar (hipertiroidismo no controlado, infección aguda grave).',
        'Relativas: estenosis del tronco coronario izquierdo, estenosis valvular moderada, alteraciones electrolíticas, hipertensión no tratada, hipertensión pulmonar grave, miocardiopatía hipertrófica, bloqueo auriculoventricular.'
      ],
      clinica: 'Reposo 3 minutos, calentamiento sin carga 3 minutos, fase incremental y recuperación, con ECG, presión arterial, SpO2 y Borg. En banda sin fin el VO2 pico suele ser 5 a 10% más alto que en cicloergómetro. Se detiene por dolor torácico sugestivo de isquemia, cambios isquémicos en el ECG, arritmia compleja, bloqueo AV de segundo o tercer grado, caída de la presión sistólica mayor de 20 mmHg, presión mayor de 250/120 mmHg, palidez o diaforesis súbitas o confusión.',
      criterios_dx: 'El VO2 pico comparado con su predicho dice si la capacidad de ejercicio está baja; el patrón de los demás parámetros dice por qué. El umbral anaerobio de una persona sana está entre el 40 y el 60% del VO2 máximo. En la hipertensión arterial pulmonar, un cociente VE/VCO2 alto indica menor eficiencia ventilatoria: cuanto más alto, mayor la presión pulmonar y la probabilidad de morir.',
      laboratorio: 'Reserva respiratoria normal al pico: alrededor del 15% de la VVM; una ventilación pico de 85% de la VVM o más orienta a limitación respiratoria (los atletas de alto rendimiento también pueden agotarla). Prueba de carga constante al 70 a 80% de la capacidad máxima: el tiempo que el paciente resiste mide la respuesta a tratamientos y a la rehabilitación.',
      dx_diferencial: 'Permite reconocer isquemia miocárdica, hipertensión reactiva, broncoconstricción por ejercicio, hiperinflación dinámica, hipoxemia de esfuerzo, desacondicionamiento e hiperventilación o ansiedad. Una hipoxemia de ejercicio que no corrige con oxígeno al 100% sugiere un cortocircuito de derecha a izquierda, como el foramen oval permeable.',
      tx_medico: 'Una prueba normal garantiza la integridad de la respuesta fisiológica al ejercicio y hace innecesarios otros estudios. Antes de una resección pulmonar estima la reserva fisiológica que quedará tras la cirugía, información que no dan la espirometría ni la DLCO en reposo.',
      pronostico: 'El VO2 máximo predice mortalidad en la insuficiencia cardiaca, estima la gravedad de la hipertensión arterial pulmonar y tiene puntos de corte que predicen la mortalidad operatoria.',
      algoritmo: [
        'Indicarla cuando la disnea no se explica en reposo.',
        'Descartar contraindicaciones cardiovasculares.',
        '¿VO2 pico bajo? Si no, la respuesta es normal.',
        'Reserva respiratoria agotada: limitación respiratoria.',
        'Pulso de O2 bajo con reserva amplia: limitación cardiovascular.'
      ]
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'Un informe sin los datos para juzgar su calidad no se puede interpretar. Estos son sus elementos mínimos, cuándo pedir más que una espirometría, cuándo repetirla y qué exige el laboratorio.',
    parametros: [
      'Identificación completa, fecha de nacimiento, edad, sexo, talla y peso medidos el día de la prueba.',
      'Origen de las ecuaciones de referencia y fecha de la última calibración.',
      'FVC, FEV1 y flujo espiratorio pico (PEF) con dos decimales y el cociente FEV1/FVC; para cada uno, el valor medido, el predicho, el LIN y la puntuación z.',
      'Las curvas flujo-volumen y volumen-tiempo de las maniobras, basales y posbroncodilatador.',
      'El cambio del FEV1 y de la FVC tras el broncodilatador, en mililitros y en porcentaje.',
      'El grado de calidad y los comentarios del técnico: tos, fuga, esfuerzo, broncodilatador tomado antes de la prueba.'
    ],
    criterios_uci_general: 'FVC baja: volúmenes pulmonares. Sospecha de enfermedad intersticial o vascular pulmonar: DLCO, aunque la espirometría sea normal. Asma probable con espirometría normal: variabilidad del FEM, reto bronquial o FeNO. Sospecha de debilidad neuromuscular: PImax, PEmax y capacidad vital en decúbito. Disnea que nada explica en reposo: prueba de ejercicio cardiopulmonar.',
    criterios_tips_general: 'EPOC: al menos una vez al año. Asma: al inicio del tratamiento y 3 a 6 meses después de lograr el control. Fibrosis pulmonar idiopática: pruebas de función y caminata cada 4 a 6 meses. Un cociente FEV1/FVC posbroncodilatador entre 0.6 y 0.8 se confirma en otra ocasión antes de etiquetar EPOC.',
    criterios_trasplante_general: 'Verificación diaria de la calibración con jeringa de 3 L a tres flujos distintos, control biológico con un sujeto sano, bitácoras de calibración y de mantenimiento, registro de los cambios de software y del porcentaje de pruebas que cumplen criterios por técnico.',
    prevencion: 'Lavado de manos, boquillas y pinzas desechables o desinfectadas y filtros de alta eficiencia en los circuitos cerrados. Durante las epidemias de virus respiratorios, las pruebas provocan tos y gotitas y exigen medidas adicionales.'
  }
};

/* ---------------- Citas ---------------- */
// Por campo y 1-based. Junto a cada ficha va la página que sostiene los campos de la regla mínima
// (criterios_dx, laboratorio, tx_farmacologico).
export const compCites = {
  // [1] tabla 5 (actividades a evitar), tabla 8 (suspensión de broncodilatadores: "Inhaled
  // corticosteroids and leukotriene modifiers need not be withheld"); [2] tabla 1 (p. 174) y
  // p. 180 (verificación 2.910 a 3.090 L); [3] p. 22-23 ("± 3% [es la precisión de ± 2.5% del
  // espirómetro más el ± 0.5% de la jeringa]", cada 4 horas con uso intenso).
  'Preparación, indicaciones y maniobra': { definicion: [1], fisiopatologia: [1], epidemiologia: [2], clinica: [2, 1], criterios_dx: [1, 2], laboratorio: [1, 3, 2], tx_farmacologico: [1], complementarios: [6], dx_diferencial: [3], tx_medico: [1], pronostico: [3] },
  // [1] tabla 7 ("BEV <=5% of FVC or 0.100 L, whichever is greater"; los tres indicadores de
  // EOFE; "FIVC - FVC must be <=0.100 L or 5% of FVC"); [2] p. 183 (2005: 6 s, 0.15 L, 200 mL).
  'Aceptabilidad, repetibilidad y grado de calidad': { definicion: [1], fisiopatologia: [1, 6], clinica: [2], criterios_dx: [1], laboratorio: [1, 2], dx_diferencial: [2, 1], tx_medico: [1], pronostico: [1] },
  // [4] "Using a fixed ratio is incorrect practice and overdiagnoses obstruction in the elderly";
  // [15] p. 29-30 ("GOLD favors using the fixed ratio over LLN"); [2] tabla 6 (LIN por década).
  'Valores de referencia, LIN y puntuación z': { definicion: [4, 3], fisiopatologia: [4], epidemiologia: [5, 15, 1], criterios_dx: [4, 15], laboratorio: [2], complementarios: [15], dx_diferencial: [15, 5], tx_medico: [4], pronostico: [4, 3] },
  // [3] p. 36-39 (patrones y "Puntuación Z: > -1.65 normal; -1.65 a -2.50 leve; -2.51 a -4
  // moderado; < -4.1 grave"); [5] sobre la FVC normal y la TLC; [2] p. 187 (criterio 2016).
  'Patrones espirométricos y gravedad': { definicion: [3], fisiopatologia: [3, 6], epidemiologia: [15], clinica: [3], criterios_dx: [3, 6], laboratorio: [5, 2], dx_diferencial: [3, 6], tx_medico: [5], pronostico: [15, 5] },
  // [3] p. 40 ("incremento mayor a 10% en FVC o FEV1 con respecto al predicho"); [14] recuadro
  // 1-2 (p. 28: ">=12% and >=200 mL, with greater confidence if >=15% and >=400 mL") y p. 32.
  'Prueba broncodilatadora': { definicion: [1], fisiopatologia: [1, 6], clinica: [3, 2], criterios_dx: [3, 14], laboratorio: [3, 14], tx_farmacologico: [14, 1], dx_diferencial: [15, 1], tx_medico: [14, 15], pronostico: [14] },
  // [3] p. 40-41 (umbral de 15% laboral, 10% pre y posjornada, FEV1Q); [2] tabla 1; [17] tabla 4
  // ("Absolute decline in FVC >5% predicted within 1 yr ... DLCO (corrected for Hb) >10%").
  'Interpretación longitudinal y seguimiento': { definicion: [3], fisiopatologia: [3, 4], epidemiologia: [2], criterios_dx: [3, 2, 17], laboratorio: [3, 4], dx_diferencial: [1, 4], tx_medico: [2], seguimiento_ambulatorio: [17], pronostico: [15] },
  // [7] p. 160-162 (repetibilidad de FRC del 5%, graduación tabla 8, algoritmo figura 5) y
  // tabla 5 ("Los broncodilatadores y esteroides inhalados modifican la medición").
  'Volúmenes pulmonares: pletismografía y dilución de gases': { definicion: [7, 6], fisiopatologia: [6, 4, 5], epidemiologia: [7], clinica: [7, 6], criterios_dx: [7], laboratorio: [7], tx_farmacologico: [7], dx_diferencial: [6, 7], tx_medico: [6, 5] },
  // [8] p. 238-241 (maniobra, repetibilidad de 2 mL/min/mmHg, tabla 6, figura 4), p. 240 ("el
  // uso de broncodilatador aumenta la DLCOsb hasta 6%") y p. 246 (ajuste por hemoglobina).
  'Difusión de monóxido de carbono (DLCO)': { definicion: [8, 4], fisiopatologia: [8, 6], epidemiologia: [8, 6], clinica: [8], criterios_dx: [8], laboratorio: [8], tx_farmacologico: [8], dx_diferencial: [8, 6], tx_medico: [16], seguimiento_ambulatorio: [17], pronostico: [16] },
  // [9] p. S164 (cambio mínimo de 25 a 33 m), S169 (criterios para detenerla), S170 (tabla 3,
  // Enright) y S168 (oxígeno "con el flujo constante"); [10] producto distancia-desaturación.
  'Prueba de caminata de 6 minutos': { definicion: [9], fisiopatologia: [10], epidemiologia: [9], clinica: [9, 6], criterios_dx: [9], laboratorio: [9, 10], tx_farmacologico: [9], dx_diferencial: [10, 6], tx_medico: [6, 10], pronostico: [10, 16] },
  // [11] recomendaciones 6 a 8 (cortes) y 11 a 12 (cambio significativo); [14] recuadro 1-2.
  'Fracción exhalada de óxido nítrico (FeNO)': { definicion: [11], fisiopatologia: [11], epidemiologia: [11], clinica: [11, 14], criterios_dx: [11, 14], laboratorio: [11], tx_farmacologico: [11], dx_diferencial: [11, 6], tx_medico: [11] },
  // [14] recuadro 1-2 y p. 32 (variabilidad, retos); [6] p. S89 (reto con ejercicio); [1] nota de
  // la tabla 8 ("the bronchoprotection provided by these agents lasts longer").
  'Variabilidad del FEM y pruebas de reto bronquial': { definicion: [14], fisiopatologia: [6], epidemiologia: [6], clinica: [14, 6], criterios_dx: [14, 6], laboratorio: [14], tx_farmacologico: [6, 1], dx_diferencial: [14], tx_medico: [14] },
  // [4] "significant respiratory muscle weakness is excluded if PImax reaches -8 kPa (-80 cmH2O)";
  // [12] p. S140 (tabla 3, Black y Hyatt; normal > 80% del predicho); [6] p. S94 (< 60%).
  'Fuerza de los músculos respiratorios': { definicion: [12, 4], fisiopatologia: [12, 4], epidemiologia: [12, 6], clinica: [12, 4], criterios_dx: [4], laboratorio: [12, 6, 4], dx_diferencial: [4], tx_medico: [6] },
  // [6] p. S91 (reserva respiratoria de 15% y >= 85% de la VVM); [13] p. S175 (VE/VCO2) y S183
  // (umbral anaerobio de 40 a 60% del VO2 máximo).
  'Prueba de ejercicio cardiopulmonar': { definicion: [6, 13], fisiopatologia: [6], epidemiologia: [13, 6], clinica: [13], criterios_dx: [13, 6], laboratorio: [6], dx_diferencial: [13], tx_medico: [13], pronostico: [13, 6] }
};

export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Grados de calidad de la espirometría (ATS/ERS 2019)': [1],
  'Patrones funcionales de la espirometría': [3, 5],
  'Gravedad por puntuación z (ERS/ATS 2022)': [3, 15],
  'Grados GOLD de obstrucción en la EPOC': [15],
  'Respuesta al broncodilatador: los dos criterios vigentes': [3, 14],
  'Gravedad de la DLCO baja': [8, 6],
  'Patrones de los volúmenes pulmonares': [7],
  'Fracción exhalada de óxido nítrico (FeNO)': [11],
  'Caminata de 6 minutos: cambio mínimo y umbrales': [9, 10, 16],
  'Fuerza de los músculos respiratorios': [4],
  'Variabilidad diurna del flujo espiratorio máximo (FEM)': [14],
  'Pruebas de reto bronquial': [14]
};
export const escalaCalc = {
  'Grados de calidad de la espirometría (ATS/ERS 2019)': 'pfr-calidad-espiro',
  'Patrones funcionales de la espirometría': 'pfr-patron',
  'Gravedad por puntuación z (ERS/ATS 2022)': 'pfr-patron',
  'Respuesta al broncodilatador: los dos criterios vigentes': 'pfr-broncodilatador',
  'Gravedad de la DLCO baja': 'pfr-dlco-hb',
  'Fracción exhalada de óxido nítrico (FeNO)': 'pfr-feno',
  'Caminata de 6 minutos: cambio mínimo y umbrales': 'pfr-pc6m',
  'Fuerza de los músculos respiratorios': 'pfr-fuerza',
  'Variabilidad diurna del flujo espiratorio máximo (FEM)': 'pfr-fem'
};
export const diagCites = { laboratorio: [8, 6], no_invasivos: [6, 14, 11, 4, 9] };
export const diagnosticoIntro = 'La prueba se elige por la pregunta clínica. En general conviene una que explore la mecánica de la respiración y otra el intercambio de gases, porque se complementan.';
export const clasificacionCite = [1, 3];
export const seguimientoCite = [2, 1, 15];

export const compGroups = [
  { title: 'Espirometría', items: [
    'Preparación, indicaciones y maniobra',
    'Aceptabilidad, repetibilidad y grado de calidad',
    'Valores de referencia, LIN y puntuación z',
    'Patrones espirométricos y gravedad',
    'Prueba broncodilatadora',
    'Interpretación longitudinal y seguimiento'
  ] },
  { title: 'Otras pruebas de función respiratoria', items: [
    'Volúmenes pulmonares: pletismografía y dilución de gases',
    'Difusión de monóxido de carbono (DLCO)',
    'Prueba de caminata de 6 minutos',
    'Fracción exhalada de óxido nítrico (FeNO)',
    'Variabilidad del FEM y pruebas de reto bronquial',
    'Fuerza de los músculos respiratorios',
    'Prueba de ejercicio cardiopulmonar'
  ] }
];
export const complicacionesIntro = 'Las 6 primeras fichas recorren la espirometría de principio a fin: preparación y maniobra, control de calidad, valores de referencia, patrones, prueba broncodilatadora y seguimiento en el tiempo. Las 7 siguientes forman la subsección de otras pruebas de función respiratoria: volúmenes pulmonares, difusión de monóxido de carbono, caminata de 6 minutos, FeNO, variabilidad del flujo y reto bronquial, fuerza de los músculos respiratorios y prueba de ejercicio cardiopulmonar.';
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'A quién y qué prueba' },
  { id: 'clasificacion', label: 'Interpretación y escalas' },
  { id: 'complicaciones', label: 'Espirometría y otras pruebas' },
  { id: 'seguimiento', label: 'Informe y seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
export const modalLabels = {
  itemName: 'Prueba',
  definicion: 'Qué es y qué mide',
  fisiopatologia: 'Fundamento',
  epidemiologia: 'Indicaciones',
  factores_riesgo: 'Contraindicaciones y cautelas',
  clinica: 'Cómo se realiza',
  criterios_dx: 'Criterios de calidad e interpretación',
  laboratorio: 'Valores y puntos de corte',
  imagen: 'Gráficas',
  complementarios: 'Lo que la complementa',
  dx_diferencial: 'Errores y trampas',
  tx_medico: 'Qué decisión cambia',
  tx_farmacologico: 'Fármacos y preparación',
  seguimiento_hospitalario: 'Seguimiento',
  seguimiento_ambulatorio: 'Seguimiento y repetición',
  pronostico: 'Valor pronóstico',
  algoritmo: 'Pasos clave',
  monitorizacionTitulo: 'Lo que debe traer el informe',
  criterios_uci: 'Cuándo pedir más que una espirometría',
  criterios_tips: 'Cuándo repetir',
  criterios_trasplante: 'Control de calidad del laboratorio',
  prevencion: 'Bioseguridad'
};
export const arbol = {
  root: { title: 'PRUEBAS DE FUNCIÓN RESPIRATORIA', color: '#2c5f7c', target: 'definicion' },
  branches: [
    { title: 'Espirometría', sub: 'Mecánica: flujos y volúmenes desplazables', color: '#3d5a73', target: 'complicaciones', leaves: [
      { title: 'Preparación y maniobra', sub: 'Indicaciones, contraindicaciones, técnica', color: '#2c5f7c', target: 'complicaciones' },
      { title: 'Calidad', sub: 'Aceptabilidad, repetibilidad, grados A a F', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Referencia y patrones', sub: 'LIN, puntuación z, PRISm', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Broncodilatador y seguimiento', sub: 'Dos criterios; cambio en el tiempo', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'Otras pruebas', sub: 'Lo que la espirometría no ve', color: '#6b3a5a', target: 'complicaciones', leaves: [
      { title: 'Volúmenes pulmonares', sub: 'Pletismografía: restricción e hiperinflación', color: '#2e6b7a', target: 'complicaciones' },
      { title: 'DLCO', sub: 'Intercambio de gases: VA y KCO', color: '#6b3a5a', target: 'complicaciones' },
      { title: 'Caminata, FeNO y reto bronquial', sub: 'Función, inflamación, hiperreactividad', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Músculos y ejercicio', sub: 'Presiones máximas; prueba cardiopulmonar', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'Interpretación', sub: 'Algoritmo, escalas y calculadoras', color: '#8a6a1f', target: 'clasificacion' }
  ]
};
