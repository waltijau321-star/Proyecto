// topics/hemoglobinopatias/content.js: Hemoglobinopatías (Talasemia Alfa, Talasemia Beta,
// Enfermedad de Células Falciformes, Otros Síndromes Falciformes y Rasgo Falciforme). Estructura
// idéntica al contrato del motor (misma forma que los temas recientes de Hematología). Sigue la
// convención de figuras en línea (figBlock(), numerada "Tabla N"/"Imagen N" con conteo continuo
// por tipo).
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás (compCites, estigmas, biopsia, escalaRefs, escalaCalc, compGroups, complicacionesIntro,
// categories, arbol, diagCites, clasificacionCite, seguimientoCite) debe ser un `export const`
// de nivel superior, HERMANO de `content`, no anidado dentro de él.

export const meta = {
  id: 'hemoglobinopatias',
  titulo: 'Hemoglobinopatías',
  subtitulo: 'Módulo 19 · Medicina Interna',
  accent: '#7a1f3d',
  accentDim: '#b06a86'
};

// Reproduce el marcado de .modal-figure (mismo helper que los temas recientes de Hematología)
// para insertar figuras EN LÍNEA justo debajo del párrafo/entrada que las menciona.
function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const espectroAlfaHtml = `
<div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;max-width:560px;margin:0 auto;">
  <div style="flex:1;min-width:110px;background:#3f6b5233;border:1px solid #3f6b52;border-radius:8px;padding:8px 8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>1 gen perdido</strong><br>Portador silente<br><span style="color:var(--ink-dim);">asintomático</span></div>
  <div style="flex:1;min-width:110px;background:#3d6b8c33;border:1px solid #3d6b8c;border-radius:8px;padding:8px 8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>2 genes perdidos</strong><br>Rasgo talasémico<br><span style="color:var(--ink-dim);">microcitosis leve asintomática</span></div>
  <div style="flex:1;min-width:110px;background:#8a6a1f33;border:1px solid #8a6a1f;border-radius:8px;padding:8px 8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>3 genes perdidos</strong><br>Enfermedad de HbH<br><span style="color:var(--ink-dim);">anemia hemolítica moderada</span></div>
  <div style="flex:1;min-width:110px;background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:8px;padding:8px 8px;font-size:10px;line-height:1.5;color:var(--ink);text-align:center;"><strong>4 genes perdidos</strong><br>Hidropesía fetal por HbBart<br><span style="color:var(--ink-dim);">incompatible con la vida sin tratamiento intrauterino</span></div>
</div>
<div class="figure-grade-box">La gravedad clínica de la talasemia alfa es directamente proporcional al número de los 4 genes de globina alfa afectados (deleción o mutación): a más genes perdidos, menor producción de cadenas alfa y mayor exceso relativo de cadenas beta (o gamma en la vida fetal).</div>`;

const cadenasGlobinaHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:8px;max-width:500px;margin:0 auto;">
  <div style="display:flex;gap:16px;justify-content:center;width:100%;">
    <div style="text-align:center;">
      <div style="font-size:10.5px;font-weight:700;color:var(--ink);margin-bottom:4px;">Hemoglobina A normal (adulto)</div>
      <div style="display:flex;gap:3px;">
        <div style="width:26px;height:26px;background:#3d6b8c66;border:1px solid #3d6b8c;border-radius:50%;"></div>
        <div style="width:26px;height:26px;background:#3d6b8c66;border:1px solid #3d6b8c;border-radius:50%;"></div>
        <div style="width:26px;height:26px;background:#8c6b2d66;border:1px solid #8c6b2d;border-radius:50%;"></div>
        <div style="width:26px;height:26px;background:#8c6b2d66;border:1px solid #8c6b2d;border-radius:50%;"></div>
      </div>
      <div style="font-size:9px;color:var(--ink-dim);margin-top:3px;">2 cadenas α + 2 cadenas β</div>
    </div>
  </div>
  <div style="width:100%;height:1px;background:var(--line);margin:4px 0;"></div>
  <div style="display:flex;gap:20px;justify-content:center;width:100%;flex-wrap:wrap;">
    <div style="text-align:center;">
      <div style="font-size:10.5px;font-weight:700;color:var(--ink);margin-bottom:4px;">Talasemia (déficit de cadenas)</div>
      <div style="font-size:9.5px;color:var(--ink-dim);">Menos cadenas α o β producidas → exceso relativo de las cadenas del otro tipo → precipitan y dañan el eritrocito</div>
    </div>
    <div style="text-align:center;">
      <div style="font-size:10.5px;font-weight:700;color:var(--ink);margin-bottom:4px;">Hemoglobinopatía estructural (HbS)</div>
      <div style="font-size:9.5px;color:var(--ink-dim);">Cadena β normal en cantidad, pero con una mutación puntual (Glu→Val) que cambia su forma y comportamiento</div>
    </div>
  </div>
</div>
<div class="figure-grade-box">Diferencia clave: las talasemias son defectos CUANTITATIVOS (se produce muy poca cantidad de una cadena de globina normal); la enfermedad de células falciformes es un defecto CUALITATIVO (se produce la cantidad normal de una cadena de globina anómala).</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Las hemoglobinopatías son un grupo de enfermedades hereditarias de la hemoglobina, divididas en 2 categorías mecanísticamente distintas: las talasemias (defecto CUANTITATIVO, con producción reducida o ausente de una cadena de globina normal, alfa o beta) y las hemoglobinopatías estructurales como la enfermedad de células falciformes (defecto CUALITATIVO, con producción normal en cantidad de una cadena de globina anómala, en este caso la hemoglobina S). Ambas categorías pueden coexistir en el mismo paciente (por ejemplo, HbS-beta talasemia), produciendo fenotipos híbridos.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> Las hemoglobinopatías tienen una distribución geográfica característica que refleja la presión selectiva histórica de la malaria (el estado de portador ofrece cierta protección contra la malaria grave): la talasemia alfa y beta son particularmente frecuentes en el sudeste asiático, el Mediterráneo y África; la enfermedad de células falciformes es particularmente frecuente en poblaciones de ascendencia africana, y también presente en poblaciones mediterráneas, de Medio Oriente e India.</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Talasemia alfa</strong>: deleción (con menor frecuencia mutación puntual) de uno o más de los 4 genes de globina alfa, con un espectro de gravedad que depende del número de genes afectados.</li>
    <li><strong>Talasemia beta</strong>: mutación puntual (con menor frecuencia deleción) de uno o ambos genes de globina beta, con un espectro desde el rasgo asintomático hasta la talasemia mayor dependiente de transfusión.</li>
    <li><strong>Enfermedad de células falciformes</strong>: homocigosis para la mutación de hemoglobina S (HbSS), la forma clásica y más grave, producida por una sustitución puntual (ácido glutámico por valina) en la cadena beta de globina.</li>
    <li><strong>Otros síndromes falciformes y rasgo falciforme</strong>: heterocigosis compuesta de HbS con otra variante de hemoglobina anómala (HbSC, HbS-beta talasemia), con fenotipos clínicos más variables; y el rasgo falciforme heterocigoto simple (HbAS), generalmente asintomático.</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Ascendencia de una región con alta prevalencia histórica de malaria (sudeste asiático, Mediterráneo, África, Medio Oriente, India)</li>
    <li>Antecedente familiar de talasemia o de enfermedad de células falciformes</li>
    <li>Ambos progenitores portadores de la misma hemoglobinopatía o de hemoglobinopatías compatibles (riesgo de forma homocigota o heterocigota compuesta en la descendencia)</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> La hemoglobina adulta normal (HbA) es un tetrámero de 2 cadenas de globina alfa y 2 cadenas de globina beta.${figBlock('Imagen 1', 'Talasemia vs. hemoglobinopatía estructural', cadenasGlobinaHtml)} En las talasemias, la producción deficiente de una cadena de globina produce un exceso relativo de la cadena complementaria (por ejemplo, exceso de cadenas alfa en la talasemia beta), que precipita dentro del eritrocito y de sus precursores, dañando la membrana celular y produciendo tanto hemólisis periférica como eritropoyesis ineficaz (destrucción de precursores dentro de la médula ósea antes de completar su maduración). En la enfermedad de células falciformes, la hemoglobina S anómala se polimeriza al desoxigenarse, distorsionando el eritrocito hacia la forma de "hoz" característica; estos eritrocitos falciformes son rígidos, se adhieren anormalmente al endotelio vascular, y ocluyen la microcirculación, produciendo tanto hemólisis crónica como los episodios de isquemia tisular (crisis vaso-oclusivas) que dominan el cuadro clínico. Analogía: en la talasemia, es como una fábrica de autos que no produce suficientes chasises de un tipo, dejando motores sin dónde montarse (las cadenas sobrantes se acumulan y dañan la línea de producción); en la enfermedad de células falciformes, los chasises se producen en cantidad normal, pero con un defecto de diseño que hace que se doblen y se atasquen en las carreteras (vasos sanguíneos) cuando les falta oxígeno.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde el portador asintomático (rasgo talasémico o rasgo falciforme) hasta la anemia hemolítica crónica grave dependiente de transfusión (talasemia mayor) o las crisis vaso-oclusivas dolorosas recurrentes con daño de múltiples órganos (enfermedad de células falciformes); el diagnóstico por electroforesis de hemoglobina, la clasificación por gravedad, y el manejo de cada complicación se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Taher AT, Musallam KM, Cappellini MD. Thalassaemia. N Engl J Med. 2021;384(8):727-743.',
  'Origa R. β-Thalassemia. Genet Med. 2017;19(6):609-619.',
  'Piel FB, Weatherall DJ. The α-Thalassemias. N Engl J Med. 2014;371(20):1908-1916.',
  'Kato GJ, Piel FB, Reid CD, et al. Sickle cell disease. Nat Rev Dis Primers. 2018;4:18010.',
  'DeBaun MR, Jordan LC, King AA, et al. American Society of Hematology 2020 guidelines for sickle cell disease: prevention, diagnosis, and treatment of cerebrovascular disease. Blood Adv. 2020;4(8):1554-1588.',
  'Adams RJ, McKie VC, Hsu L, et al. Prevention of a first stroke by transfusions in children with sickle cell anemia and abnormal results on transcranial Doppler ultrasonography. N Engl J Med. 1998;339(1):5-11.',
  'Yawn BP, Buchanan GR, Afenyi-Annan AN, et al. Management of Sickle Cell Disease: Summary of the 2014 Evidence-Based Report by Expert Panel Members. JAMA. 2014;312(10):1033-1048.',
  'Farooq S, Testai FD. Neurologic Complications of Sickle Cell Disease. Curr Neurol Neurosci Rep. 2019;19(4):17.',
  'Vichinsky EP, Neumayr LD, Earles AN, et al. Causes and outcomes of the acute chest syndrome in sickle cell disease. N Engl J Med. 2000;342(25):1855-1865.',
  'Booth C, Inusa B, Obaro SK. Infection in sickle cell disease: a review. Int J Infect Dis. 2010;14(1):e2-e12.',
  'Ballas SK, Kesen MR, Goldberg MF, et al. Beyond the definitions of the phenotypic complications of sickle cell disease: an update on management. ScientificWorldJournal. 2012;2012:949535.',
  'Cappellini MD, Cohen A, Porter J, et al. Guidelines for the Management of Transfusion Dependent Thalassaemia (TDT). Thalassaemia International Federation. 2014.',
  'Rees DC, Williams TN, Gladwin MT. Sickle-cell disease. Lancet. 2010;376(9757):2018-2031.',
  'Naik RP, Haywood C Jr. Sickle cell trait diagnosis: clinical and social implications. Hematology Am Soc Hematol Educ Program. 2015;2015:160-167.',
  'Kavanagh PL, Fasipe TA, Wun T. Sickle Cell Disease: A Review. JAMA. 2022;328(1):57-68.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Portador/rasgo asintomático',
      tituloB: 'Forma sintomática/crisis aguda',
      compensada: 'Portador de rasgo talasémico o rasgo falciforme, generalmente asintomático, con hallazgos incidentales de laboratorio (microcitosis leve en el rasgo talasémico) o detectado por antecedente familiar/tamizaje; en las formas homocigotas o heterocigotas compuestas compensadas, anemia crónica estable sin crisis agudas activas.',
      descompensada: 'Talasemia mayor: anemia grave sintomática dependiente de transfusión desde la infancia. Enfermedad de células falciformes: crisis vaso-oclusiva dolorosa aguda (el motivo de consulta más frecuente), síndrome torácico agudo con dificultad respiratoria y dolor torácico, secuestro esplénico agudo en el niño pequeño, o síntomas neurológicos focales sugestivos de un evento cerebrovascular (ver Complicaciones para el desarrollo completo de cada una).'
    },
    laboratorio: [
      { prueba: 'Biometría hemática con índices eritrocitarios', utilidad: 'Microcitosis marcada desproporcionada al grado de anemia orienta hacia talasemia; anemia normocítica con reticulocitosis marcada orienta hacia enfermedad de células falciformes.' },
      { prueba: 'Electroforesis de hemoglobina (o HPLC)', utilidad: 'Prueba diagnóstica definitiva: cuantifica las fracciones de hemoglobina (HbA, HbA2, HbF, HbS, HbC, entre otras) y establece el diagnóstico específico según el patrón.' },
      { prueba: 'Frotis de sangre periférica', utilidad: 'Células en diana y punteado basófilo en las talasemias; drepanocitos (eritrocitos en forma de hoz), cuerpos de Howell-Jolly (por asplenia funcional) en la enfermedad de células falciformes.' },
      { prueba: 'Reticulocitos', utilidad: 'Elevados en ambas categorías por la hemólisis crónica, aunque con frecuencia inapropiadamente bajos para el grado de anemia en la talasemia por el componente adicional de eritropoyesis ineficaz.' },
      { prueba: 'Estudio genético dirigido', utilidad: 'Confirma el genotipo específico (número de genes de globina alfa afectados, mutación específica de globina beta) cuando es necesario para consejo genético o clasificación precisa.' }
    ],
    no_invasivos: [
      { metodo: 'Doppler transcraneal (con calculadora)', interpretacion: 'Cribado estandarizado del riesgo de evento cerebrovascular en el niño con enfermedad de células falciformes.', cutoff: 'Categórico, ver Escalas' },
      { metodo: 'Estudio genético familiar/consejo genético', interpretacion: 'Ante una pareja portadora de la misma hemoglobinopatía o de hemoglobinopatías compatibles, para estimar el riesgo en la descendencia.', cutoff: 'N/A' },
      { metodo: 'Ecografía abdominal', interpretacion: 'Evaluación del tamaño esplénico (esplenomegalia en la talasemia, asplenia funcional/autoesplenectomía en la enfermedad de células falciformes del adulto) y cribado de colelitiasis (frecuente en ambas por la hemólisis crónica).', cutoff: 'N/A' }
    ],
    imagen: [
      { modalidad: 'Radiografía de huesos largos/cráneo', hallazgos: 'Expansión medular con adelgazamiento cortical ("cráneo en cepillo") en la talasemia mayor no tratada adecuadamente; puede orientar al diagnóstico en casos no caracterizados previamente.' },
      { modalidad: 'Resonancia magnética cerebral', hallazgos: 'Cribado o caracterización de infartos silentes o eventos cerebrovasculares clínicos en la enfermedad de células falciformes (ver Complicaciones).' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema es cuantitativa (talasemias, por déficit de producción de una cadena de globina) vs. cualitativa (enfermedad de células falciformes, por una cadena de globina estructuralmente anómala); dentro de cada categoría, la severidad varía según el genotipo específico, desde el portador asintomático hasta la forma homocigota grave.',
    escalas: [
      { nombre: 'Doppler transcraneal (TCD)', componentes: 'Velocidad media temporal máxima en la arteria cerebral media (cm/s). Calculadora disponible más abajo.', formula: 'Categórico según umbrales de velocidad.', interpretacion: 'Normal &lt;170 cm/s: cribado anual. Condicional 170-199 cm/s: repetir en 3-6 meses. Anormal ≥200 cm/s (confirmado): indica transfusiones crónicas profilácticas.' },
      { nombre: 'Clasificación de la talasemia alfa por número de genes afectados', componentes: 'Número de los 4 genes de globina alfa delecionados/mutados.', formula: 'Categórico.', interpretacion: '1 gen: portador silente, asintomático. 2 genes: rasgo talasémico, microcitosis leve asintomática. 3 genes: enfermedad de HbH, anemia hemolítica moderada. 4 genes: hidropesía fetal por HbBart, incompatible con la vida extrauterina sin tratamiento intrauterino.' },
      { nombre: 'Clasificación de la talasemia beta por gravedad', componentes: 'Genotipo de los 2 genes de globina beta, requerimiento transfusional.', formula: 'Categórico.', interpretacion: 'Rasgo (heterocigoto): asintomático. Talasemia intermedia: anemia moderada, transfusión ocasional. Talasemia mayor (homocigoto o heterocigoto compuesto grave): anemia grave, dependencia transfusional desde la infancia.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Talasemia Alfa',
      color: '#3d6b8c',
      definicion: 'Talasemia producida por la deleción (con menor frecuencia mutación puntual) de uno o más de los 4 genes de globina alfa; la gravedad clínica es directamente proporcional al número de genes afectados, desde el portador silente completamente asintomático hasta la hidropesía fetal incompatible con la vida sin intervención.',
      fisiopatologia: `Cada persona tiene 4 copias del gen de globina alfa (2 en cada cromosoma 16); la pérdida de 1 gen (portador silente) apenas reduce la producción de cadenas alfa sin consecuencia clínica; la pérdida de 2 genes (rasgo talasémico alfa) produce microcitosis leve asintomática; la pérdida de 3 genes produce un exceso relativo de cadenas beta, que forman tetrámeros anómalos (hemoglobina H, β4), inestables y con alta afinidad por el oxígeno, precipitando dentro del eritrocito y produciendo anemia hemolítica moderada (enfermedad de HbH); la pérdida de los 4 genes elimina por completo la producción de cadenas alfa, con formación de tetrámeros de cadena gamma (hemoglobina de Bart, γ4) que no transportan oxígeno de forma eficaz, resultando en hidropesía fetal generalmente incompatible con la vida extrauterina sin tratamiento intrauterino.${figBlock('Imagen 2', 'Espectro de gravedad de la talasemia alfa', espectroAlfaHtml)}`,
      epidemiologia: 'Particularmente frecuente en poblaciones del sudeste asiático, donde la deleción de múltiples genes (incluida la forma de HbH y la hidropesía por HbBart) es relativamente común; también presente con menor gravedad genotípica en poblaciones africanas y mediterráneas.',
      factores_riesgo: ['Ascendencia del sudeste asiático (mayor riesgo de deleciones múltiples graves)', 'Ambos progenitores portadores de deleciones de globina alfa', 'Antecedente familiar de enfermedad de HbH o de hidropesía fetal previa'],
      clinica: 'Portador silente (1 gen) y rasgo talasémico (2 genes): asintomáticos, hallazgo incidental de microcitosis. Enfermedad de HbH (3 genes): anemia hemolítica crónica moderada, esplenomegalia, exacerbaciones hemolíticas con infecciones o exposición a oxidantes. Hidropesía fetal por HbBart (4 genes): edema fetal generalizado grave, generalmente detectado en la ecografía prenatal, con muerte fetal o neonatal temprana sin tratamiento intrauterino especializado.',
      criterios_dx: 'Microcitosis desproporcionada al grado de anemia (o ausente en las formas leves), con electroforesis de hemoglobina que muestra hemoglobina H (en la enfermedad de HbH) o hemoglobina de Bart (en la hidropesía fetal); el portador silente y el rasgo requieren con frecuencia estudio genético dirigido para confirmación, dado que la electroforesis puede ser normal.',
      laboratorio: 'Biometría hemática con microcitosis (VCM bajo) proporcional al número de genes afectados; electroforesis de hemoglobina; estudio genético dirigido a la deleción/mutación específica de globina alfa cuando el diagnóstico no es evidente por electroforesis.',
      imagen: 'Ecografía prenatal para el cribado de hidropesía fetal en el embarazo de riesgo (ambos progenitores portadores); ecografía abdominal para evaluar esplenomegalia en la enfermedad de HbH.',
      complementarios: 'Consejo genético en parejas donde ambos son portadores conocidos, dado el riesgo de hidropesía fetal en la descendencia si ambos portan deleciones que juntas suman los 4 genes.',
      dx_diferencial: 'Anemia ferropénica (también produce microcitosis; el índice de Mentzer y la ferritina ayudan a distinguirlas, ver el tema de Anemia Ferropénica), talasemia beta (distinguible por el patrón de electroforesis).',
      tx_medico: 'El portador silente y el rasgo talasémico no requieren tratamiento. La enfermedad de HbH requiere manejo de soporte con ácido fólico, vigilancia de la esplenomegalia, y transfusión durante las exacerbaciones hemolíticas agudas.',
      tx_farmacologico: 'Ácido fólico como suplemento de soporte en la enfermedad de HbH, dado el recambio eritrocitario acelerado; quelación de hierro si el paciente requiere transfusiones repetidas.',
      tx_intervencionista: 'Esplenectomía considerada en la enfermedad de HbH con esplenomegalia sintomática marcada o requerimiento transfusional creciente; tratamiento intrauterino especializado (transfusión intrauterina) en centros de referencia para la hidropesía fetal por HbBart diagnosticada prenatalmente, con resultados variables.',
      criterios_uci: 'No aplica de forma directa al portador/rasgo; crisis hemolítica grave en la enfermedad de HbH según su gravedad.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante alogénico de células madre hematopoyéticas considerado en casos excepcionales de enfermedad de HbH con dependencia transfusional marcada.',
      seguimiento_hospitalario: 'Vigilancia de la anemia y de la hemólisis durante las exacerbaciones en la enfermedad de HbH.',
      seguimiento_ambulatorio: 'Consejo genético para portadores en edad reproductiva; vigilancia del tamaño esplénico y del requerimiento transfusional en la enfermedad de HbH.',
      pronostico: 'Excelente en el portador silente y el rasgo talasémico (sin impacto en la esperanza de vida); favorable con manejo de soporte en la enfermedad de HbH; grave en la hidropesía fetal por HbBart sin tratamiento intrauterino especializado.',
      algoritmo: ['Microcitosis leve o ausente, asintomática → considerar portador silente o rasgo talasémico alfa (1-2 genes)', 'Anemia hemolítica moderada + esplenomegalia → considerar enfermedad de HbH (3 genes), confirmar con electroforesis', 'Ambos progenitores portadores → consejo genético, ecografía prenatal de cribado', 'Hidropesía fetal detectada → referir a centro especializado para tratamiento intrauterino', 'Electroforesis dudosa en formas leves → estudio genético dirigido']
    },
    {
      nombre: 'Talasemia Beta',
      color: '#5c3d8c',
      definicion: 'Talasemia producida por una mutación puntual (con menor frecuencia deleción) de uno o ambos genes de globina beta; el espectro de gravedad va desde el rasgo heterocigoto asintomático hasta la talasemia mayor homocigota o heterocigota compuesta grave, dependiente de transfusión desde la infancia.',
      fisiopatologia: 'A diferencia de la globina alfa (4 genes), cada persona tiene solo 2 copias del gen de globina beta (1 en cada cromosoma 11); una mutación en 1 solo gen (rasgo, heterocigoto) reduce parcialmente la producción de cadenas beta, con un exceso relativo leve de cadenas alfa compensado adecuadamente, produciendo microcitosis con anemia mínima o ausente. Cuando ambos genes están afectados (homocigoto o heterocigoto compuesto grave), la producción de cadenas beta es marcadamente deficiente o ausente, con un exceso masivo de cadenas alfa libres que precipitan dentro de los precursores eritroides en la médula ósea, produciendo eritropoyesis ineficaz masiva (destrucción intramedular de la mayoría de los precursores antes de madurar) y hemólisis periférica del pequeño número de eritrocitos que sí logran salir a la circulación; la expansión medular compensadora masiva (intentando compensar la anemia) produce las deformidades óseas características cuando la enfermedad no se trata adecuadamente con transfusión regular.',
      epidemiologia: 'Particularmente frecuente en poblaciones mediterráneas (de ahí el nombre histórico "anemia mediterránea"), Medio Oriente, y sudeste asiático; la talasemia mayor no tratada adecuadamente es una causa importante de morbimortalidad en regiones sin acceso a transfusión y quelación de hierro regulares.',
      factores_riesgo: ['Ascendencia mediterránea, de Medio Oriente o del sudeste asiático', 'Ambos progenitores portadores del rasgo de talasemia beta', 'Antecedente familiar de talasemia mayor o intermedia'],
      clinica: 'Rasgo (heterocigoto): asintomático, microcitosis leve incidental. Talasemia intermedia: anemia moderada que no requiere transfusión regular en la mayoría de los casos, pero con esplenomegalia y expansión medular variable. Talasemia mayor: anemia grave sintomática desde los primeros meses de vida (tras la caída fisiológica de la hemoglobina fetal), retraso del crecimiento, deformidades óseas características (facies talasémica, con prominencia frontal y malar) si no se transfunde adecuadamente, hepatoesplenomegalia marcada por hematopoyesis extramedular.',
      criterios_dx: 'Electroforesis de hemoglobina con HbA2 elevada (dato clave del rasgo de talasemia beta) y, en las formas graves, HbF marcadamente elevada con HbA ausente o muy reducida; confirmación con estudio genético dirigido cuando es necesario.',
      laboratorio: 'Biometría hemática con microcitosis; electroforesis de hemoglobina (HbA2 elevada en el rasgo; HbF elevada con HbA reducida/ausente en las formas graves); ferritina y estudio de sobrecarga de hierro en el paciente politransfundido.',
      imagen: 'Radiografía de huesos largos/cráneo en la talasemia mayor no tratada adecuadamente (expansión medular, "cráneo en cepillo"); resonancia magnética cardiaca y hepática (T2*) para cuantificar la sobrecarga de hierro en el paciente politransfundido.',
      complementarios: 'Consejo genético en parejas donde ambos son portadores del rasgo; estudio genético dirigido para confirmar el genotipo específico y orientar el pronóstico.',
      dx_diferencial: 'Anemia ferropénica (el rasgo de talasemia beta puede confundirse con ferropenia leve; el índice de Mentzer y la ferritina ayudan a distinguirlos, ver el tema de Anemia Ferropénica), talasemia alfa (distinguible por el patrón de electroforesis, HbA2 normal en la talasemia alfa vs. elevada en el rasgo de talasemia beta).',
      tx_medico: 'El rasgo no requiere tratamiento. La talasemia intermedia requiere vigilancia y transfusión ocasional según necesidad clínica. La talasemia mayor requiere un programa de transfusión regular de por vida (para mantener la hemoglobina por encima de un umbral que suprime la eritropoyesis ineficaz y permite un crecimiento normal) junto con quelación de hierro sistemática para prevenir la sobrecarga de hierro transfusional.',
      tx_farmacologico: 'Quelantes de hierro (deferoxamina, deferasirox, deferiprona) como pilar fundamental del tratamiento a largo plazo en el paciente politransfundido, dado que la sobrecarga de hierro es la principal causa de morbimortalidad tardía (cardiopatía, cirrosis, endocrinopatías); ácido fólico como suplemento de soporte; luspatercept (agente madurador eritroide) considerado en la talasemia dependiente de transfusión para reducir el requerimiento transfusional.',
      tx_intervencionista: 'Esplenectomía considerada si el requerimiento transfusional aumenta marcadamente por hiperesplenismo; trasplante alogénico de células madre hematopoyéticas como la única opción curativa disponible, idealmente realizado tempranamente antes de que se acumule sobrecarga de hierro significativa.',
      criterios_uci: 'Complicaciones cardiacas graves por sobrecarga de hierro (insuficiencia cardiaca, arritmias) en el paciente con quelación inadecuada.',
      criterios_tips: 'No aplica de forma directa (salvo hipertensión portal por hepatopatía avanzada asociada a sobrecarga de hierro).',
      criterios_trasplante: 'Trasplante alogénico de células madre hematopoyéticas en la talasemia mayor, idealmente en la infancia con un donante compatible disponible, antes de que se acumule daño de órgano por sobrecarga de hierro.',
      seguimiento_hospitalario: 'Vigilancia de la respuesta a la transfusión y de reacciones transfusionales durante el programa de transfusión regular.',
      seguimiento_ambulatorio: 'Programa de transfusión regular con vigilancia estrecha de la ferritina y de la sobrecarga de hierro por resonancia magnética T2* (cardiaca y hepática); vigilancia endocrinológica (retraso puberal, diabetes, hipotiroidismo, todos relacionados con el depósito de hierro); consejo genético familiar.',
      pronostico: 'Excelente en el rasgo (sin impacto en la esperanza de vida); variable en la talasemia intermedia según el requerimiento transfusional; en la talasemia mayor, la esperanza de vida ha mejorado dramáticamente con la transfusión y quelación modernas, pero la sobrecarga de hierro no controlada sigue siendo la principal causa de mortalidad prematura.',
      algoritmo: ['Microcitosis con HbA2 elevada en electroforesis → rasgo de talasemia beta, asintomático', 'Anemia grave desde la infancia + HbF elevada/HbA ausente → talasemia mayor, iniciar programa de transfusión regular', 'Transfusión regular iniciada → quelación de hierro sistemática desde el inicio, vigilancia con RM T2*', 'Donante compatible disponible en la infancia → considerar trasplante alogénico como opción curativa', 'Ambos progenitores portadores del rasgo → consejo genético reproductivo']
    },
    {
      nombre: 'Enfermedad de Células Falciformes',
      color: '#7a1f3d',
      definicion: 'Homocigosis para la mutación de hemoglobina S (HbSS), la forma clásica y más grave de las hemoglobinopatías falciformes, producida por una sustitución puntual (ácido glutámico por valina) en la posición 6 de la cadena beta de globina, que confiere a la hemoglobina la propiedad de polimerizarse al desoxigenarse.',
      fisiopatologia: 'La hemoglobina S desoxigenada se polimeriza formando fibras rígidas dentro del eritrocito, distorsionando su forma hacia la característica "hoz" (drepanocito); estos eritrocitos falciformes son mecánicamente frágiles (produciendo hemólisis crónica) y se adhieren anormalmente al endotelio vascular activado, iniciando y perpetuando episodios de oclusión microvascular (crisis vaso-oclusivas) que producen isquemia tisular y dolor intenso; la polimerización es reversible con la reoxigenación en las etapas iniciales, pero episodios repetidos de falciformación producen daño irreversible de la membrana eritrocitaria ("falciformación irreversible") y, con el tiempo, disfunción endotelial crónica y daño progresivo de múltiples órganos.',
      epidemiologia: 'Particularmente frecuente en poblaciones de ascendencia africana, con prevalencia también significativa en poblaciones mediterráneas, de Medio Oriente e India; la mortalidad infantil temprana ha disminuido dramáticamente con el tamizaje neonatal universal, la profilaxis antibiótica, y la vacunación apropiada.',
      factores_riesgo: ['Ascendencia africana, mediterránea, de Medio Oriente o de India', 'Ambos progenitores portadores del rasgo falciforme (HbAS)', 'Deshidratación, hipoxia, infección, frío extremo, y estrés fisiológico como precipitantes de crisis en el paciente ya diagnosticado'],
      clinica: 'Crisis vaso-oclusivas dolorosas recurrentes desde la infancia (ver esa tarjeta en Complicaciones); anemia hemolítica crónica con ictericia leve; retraso del crecimiento; asplenia funcional progresiva desde la infancia temprana por infartos esplénicos repetidos, con el riesgo infeccioso asociado (ver esa tarjeta); daño progresivo de múltiples órganos a lo largo de la vida si no se maneja adecuadamente.',
      criterios_dx: 'Electroforesis de hemoglobina con predominio de HbS y ausencia de HbA (a diferencia del rasgo falciforme, que muestra ambas); confirmado universalmente por tamizaje neonatal en los sistemas de salud que lo incluyen.',
      laboratorio: 'Electroforesis de hemoglobina diagnóstica; biometría hemática con anemia normocítica y reticulocitosis marcada; frotis de sangre periférica con drepanocitos y cuerpos de Howell-Jolly (por asplenia funcional); deshidrogenasa láctica y bilirrubina indirecta elevadas por la hemólisis crónica.',
      imagen: 'Doppler transcraneal (con calculadora) como cribado sistemático del riesgo de evento cerebrovascular en el niño; ecografía abdominal para evaluar asplenia funcional y colelitiasis.',
      complementarios: 'Tamizaje neonatal universal (el estándar en la mayoría de los sistemas de salud desarrollados) para diagnóstico e inicio temprano de profilaxis antibiótica y vacunación apropiada.',
      dx_diferencial: 'Otros síndromes falciformes (HbSC, HbS-beta talasemia, generalmente de curso algo más leve, ver esa tarjeta), rasgo falciforme (heterocigoto, generalmente asintomático, ver esa tarjeta).',
      tx_medico: 'Profilaxis antibiótica con penicilina desde la infancia temprana hasta al menos los 5 años (dada la asplenia funcional y el riesgo de sepsis por organismos encapsulados); vacunación completa incluyendo neumocócica; hidratación adecuada y evitar los precipitantes conocidos de crisis (frío, deshidratación, hipoxia).',
      tx_farmacologico: 'Hidroxiurea como tratamiento modificador de la enfermedad de primera línea (aumenta la producción de hemoglobina fetal, que inhibe la polimerización de HbS, reduciendo la frecuencia de crisis vaso-oclusivas y del síndrome torácico agudo); ácido fólico como suplemento de soporte; L-glutamina, crizanlizumab, y voxelotor como terapias modificadoras adicionales aprobadas más recientes, según disponibilidad y perfil del paciente.',
      tx_intervencionista: 'Transfusiones crónicas profilácticas en el paciente con Doppler transcraneal anormal (ver la calculadora) o con antecedente de evento cerebrovascular; exanguinotransfusión en crisis graves específicas (síndrome torácico agudo grave, priapismo refractario, ACV agudo).',
      criterios_uci: 'Síndrome torácico agudo grave con insuficiencia respiratoria, evento cerebrovascular agudo, secuestro esplénico agudo con inestabilidad hemodinámica, crisis vaso-oclusiva refractaria al manejo estándar con compromiso multiorgánico.',
      criterios_tips: 'No aplica de forma directa.',
      criterios_trasplante: 'Trasplante alogénico de células madre hematopoyéticas como la única opción curativa disponible, considerado en casos graves seleccionados con un donante compatible, idealmente en la infancia antes de que se acumule daño de órgano significativo.',
      seguimiento_hospitalario: 'Manejo agudo de cada complicación según su tipo (ver las tarjetas correspondientes); analgesia adecuada y oportuna durante las crisis dolorosas, un aspecto históricamente subóptimo que requiere atención específica.',
      seguimiento_ambulatorio: 'Doppler transcraneal anual desde los 2 años de edad hasta la adolescencia; vigilancia del cumplimiento de hidroxiurea y de otras terapias modificadoras; vacunación al día; consejo genético reproductivo; vigilancia de complicaciones crónicas de órgano (ver esa tarjeta).',
      pronostico: 'Ha mejorado dramáticamente con el tamizaje neonatal, la profilaxis antibiótica temprana, la vacunación, y las terapias modificadoras de la enfermedad; sin embargo, sigue siendo una enfermedad con morbilidad significativa y esperanza de vida reducida respecto a la población general, particularmente en regiones con acceso limitado a estas intervenciones.',
      algoritmo: ['Tamizaje neonatal positivo para HbSS → confirmar con electroforesis, iniciar profilaxis antibiótica y vacunación desde la infancia temprana', 'Doppler transcraneal anual desde los 2 años → clasificar riesgo de ACV (calculadora)', 'Considerar hidroxiurea como terapia modificadora de primera línea en la mayoría de los pacientes', 'Manejo agudo específico de cada complicación cuando ocurre (ver Complicaciones)', 'Evaluar elegibilidad para trasplante alogénico en casos graves con donante disponible']
    },
    {
      nombre: 'Otros Síndromes Falciformes y Rasgo Falciforme',
      color: '#966b35',
      definicion: 'Grupo que incluye las formas heterocigotas compuestas de HbS con otra variante de hemoglobina anómala (HbSC, la más frecuente de este grupo; HbS-beta talasemia), de curso clínico generalmente más leve que la enfermedad de células falciformes homocigota pero con el mismo espectro de complicaciones potenciales; y el rasgo falciforme heterocigoto simple (HbAS), generalmente asintomático pero no completamente exento de riesgo en circunstancias extremas.',
      fisiopatologia: 'En la HbSC, la coexistencia de HbS con hemoglobina C (otra variante estructural, con una sustitución diferente en la misma posición de la cadena beta) produce un grado de falciformación intermedio, generalmente con menos hemólisis y crisis menos frecuentes que la HbSS, aunque con un riesgo particularmente elevado de ciertas complicaciones específicas como la necrosis avascular y la retinopatía proliferativa. En la HbS-beta talasemia, la gravedad depende de si la mutación de talasemia beta acompañante es "cero" (sin producción de globina beta normal, fenotipo similar a la HbSS) o "plus" (producción residual reducida de globina beta normal, fenotipo más leve). El rasgo falciforme (HbAS) tiene suficiente HbA normal para prevenir la polimerización significativa de HbS en la mayoría de las condiciones fisiológicas, por lo que es generalmente asintomático, aunque puede haber falciformación clínicamente relevante en condiciones de hipoxia extrema (grandes altitudes, deshidratación extrema, ejercicio físico extenuante).',
      epidemiologia: 'La HbSC es la segunda hemoglobinopatía falciforme más frecuente después de la HbSS en poblaciones de ascendencia africana; el rasgo falciforme (HbAS) es considerablemente más frecuente que cualquier forma homocigota o heterocigota compuesta sintomática, dado que representa el estado de portador simple.',
      factores_riesgo: ['Ascendencia africana, mediterránea o de Medio Oriente (para las formas heterocigotas compuestas)', 'Un progenitor con HbS y otro con hemoglobina C o con talasemia beta (para HbSC y HbS-beta talasemia respectivamente)', 'Ejercicio físico extenuante, deshidratación extrema, o gran altitud en el portador de rasgo falciforme (factores precipitantes infrecuentes pero descritos)'],
      clinica: 'HbSC y HbS-beta talasemia plus: crisis vaso-oclusivas presentes pero generalmente menos frecuentes y graves que en la HbSS; riesgo particularmente elevado de necrosis avascular (especialmente de cadera) y de retinopatía proliferativa en la HbSC. Rasgo falciforme: generalmente asintomático; rara vez, rabdomiólisis o muerte súbita durante ejercicio físico extremo bajo condiciones de calor y deshidratación intensos (relevante particularmente en el contexto de entrenamiento militar o deportivo de alta intensidad).',
      criterios_dx: 'Electroforesis de hemoglobina que muestra el patrón específico (HbS + HbC en la HbSC; HbS + HbA reducida en la HbS-beta talasemia plus, o HbS predominante sin HbA en la HbS-beta talasemia cero; HbS + HbA en proporción normal-mayor en el rasgo falciforme simple).',
      laboratorio: 'Electroforesis de hemoglobina diagnóstica; biometría hemática con anemia generalmente más leve que en la HbSS en las formas heterocigotas compuestas, y habitualmente normal en el rasgo falciforme simple.',
      imagen: 'Resonancia magnética de cadera si hay sospecha de necrosis avascular (particularmente relevante en la HbSC); examen oftalmológico dirigido para cribado de retinopatía proliferativa.',
      complementarios: 'Tamizaje neonatal (identifica también estas formas heterocigotas compuestas y el rasgo simple); consejo genético reproductivo, particularmente relevante para el portador de rasgo falciforme que desconoce con frecuencia su estado hasta el tamizaje.',
      dx_diferencial: 'Enfermedad de células falciformes homocigota (HbSS, generalmente de curso más grave, ver esa tarjeta), otras causas de anemia hemolítica crónica.',
      tx_medico: 'Manejo similar en principio al de la enfermedad de células falciformes homocigota mientras persista actividad de la enfermedad (profilaxis antibiótica según edad, vacunación, hidratación adecuada), aunque con frecuencia con menor intensidad de intervención dado el curso generalmente más leve; el rasgo falciforme simple no requiere tratamiento específico salvo precauciones ante ejercicio extremo.',
      tx_farmacologico: 'Hidroxiurea considerada en la HbSC y la HbS-beta talasemia con actividad de enfermedad clínicamente relevante (crisis frecuentes), aunque la evidencia de beneficio es más limitada que en la HbSS.',
      tx_intervencionista: 'Manejo de la necrosis avascular según su gravedad (desde manejo conservador hasta reemplazo articular en casos avanzados); fotocoagulación con láser para la retinopatía proliferativa cuando está indicada.',
      criterios_uci: 'Similar a la enfermedad de células falciformes homocigota si ocurre una complicación grave, aunque con menor frecuencia relativa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante alogénico considerado en casos seleccionados de curso clínico grave, con la misma lógica que en la HbSS.',
      seguimiento_hospitalario: 'Según la complicación aguda específica que motive la hospitalización.',
      seguimiento_ambulatorio: 'Cribado oftalmológico periódico (retinopatía) particularmente en la HbSC; vigilancia ortopédica si hay síntomas de cadera u otra articulación; consejo genético reproductivo, con énfasis en informar adecuadamente al portador de rasgo falciforme sobre su estado y sus implicaciones reproductivas.',
      pronostico: 'Generalmente más favorable que la enfermedad de células falciformes homocigota, aunque con riesgo propio y particular de ciertas complicaciones (necrosis avascular, retinopatía) que requieren vigilancia específica; el rasgo falciforme simple no reduce la esperanza de vida.',
      algoritmo: ['Electroforesis con HbS + otra variante (HbC) o HbS + HbA reducida → clasificar como HbSC o HbS-beta talasemia respectivamente', 'Establecer intensidad del manejo según la frecuencia/gravedad de crisis documentadas', 'Cribado oftalmológico y ortopédico dirigido, particularmente en la HbSC', 'Rasgo falciforme identificado (con frecuencia por tamizaje) → informar al paciente, consejo genético reproductivo', 'Precauciones específicas ante ejercicio físico extremo en el portador de rasgo falciforme']
    },
    {
      nombre: 'Crisis vaso-oclusiva dolorosa',
      color: '#8c3a34',
      definicion: 'La complicación aguda más frecuente de la enfermedad de células falciformes y el motivo de consulta más común en estos pacientes: episodios de dolor intenso, típicamente en huesos largos, espalda, tórax o abdomen, producidos por la oclusión microvascular de eritrocitos falciformes rígidos que interrumpe el flujo sanguíneo tisular.',
      fisiopatologia: 'Un precipitante identificable (deshidratación, hipoxia, infección, frío, estrés fisiológico) o, con frecuencia, ningún precipitante claro, desencadena la polimerización de HbS y la falciformación de un número crítico de eritrocitos, que se adhieren al endotelio vascular activado y ocluyen la microcirculación en el territorio afectado; la isquemia tisular resultante produce dolor intenso por liberación de mediadores inflamatorios y activación de nociceptores locales; episodios repetidos en el mismo territorio (particularmente huesos largos y columna) pueden producir daño estructural acumulativo.',
      epidemiologia: 'La complicación más frecuente de la enfermedad de células falciformes, con una frecuencia altamente variable entre pacientes (desde episódica ocasional hasta varias crisis al mes en el paciente con enfermedad grave); la frecuencia de crisis se correlaciona con la gravedad global de la enfermedad y con el riesgo de otras complicaciones.',
      factores_riesgo: ['Deshidratación', 'Hipoxia (incluida la altitud, infección respiratoria, apnea del sueño no tratada)', 'Frío extremo', 'Infección intercurrente', 'Estrés fisiológico o emocional agudo', 'Menstruación (en algunas pacientes)', 'Ausencia de tratamiento con hidroxiurea u otra terapia modificadora'],
      clinica: 'Dolor intenso de inicio agudo o subagudo, típicamente en huesos largos de las extremidades, espalda baja, tórax, o abdomen; puede acompañarse de fiebre leve, taquicardia, e hinchazón local (particularmente en el síndrome mano-pie del lactante/niño pequeño, una manifestación temprana característica); la intensidad del dolor con frecuencia es desproporcionada a los hallazgos objetivos, lo que históricamente ha llevado a un manejo analgésico subóptimo que debe evitarse activamente.',
      criterios_dx: 'Clínico, en un paciente con enfermedad de células falciformes conocida y el cuadro doloroso característico, tras excluir razonablemente otras causas de dolor agudo según la localización (por ejemplo, un abdomen quirúrgico genuino si el dolor es abdominal).',
      laboratorio: 'Biometría hemática (la reticulocitosis y el grado de anemia pueden variar durante la crisis); marcadores inflamatorios si hay sospecha de infección concomitante como precipitante; deshidrogenasa láctica y bilirrubina si se sospecha un componente hemolítico agudo sobreañadido.',
      imagen: 'No indicada de rutina para el diagnóstico de una crisis típica; radiografía o resonancia magnética dirigida si hay sospecha de una complicación específica sobreañadida (osteomielitis, necrosis avascular) o si el cuadro no es típico.',
      complementarios: 'Evaluación de precipitantes identificables (infección, deshidratación) para su manejo específico en paralelo al control del dolor.',
      dx_diferencial: 'Osteomielitis (particularmente por Salmonella, con mayor riesgo en la enfermedad de células falciformes; puede ser difícil de distinguir clínicamente de una crisis ósea sin estudio dirigido), síndrome torácico agudo si el dolor es torácico (ver esa tarjeta), abdomen quirúrgico genuino si el dolor es abdominal.',
      tx_medico: 'Hidratación adecuada (oral o intravenosa según la tolerancia), analgesia oportuna y en dosis adecuadas desde la presentación (la administración tardía o insuficiente de analgésicos es un problema reconocido y evitable en el manejo de estos pacientes), e identificación y manejo de cualquier precipitante identificable.',
      tx_farmacologico: 'Opioides como pilar del manejo analgésico en la crisis moderada-grave, con dosis individualizadas según la experiencia previa del paciente con crisis similares; antiinflamatorios no esteroideos como complemento en crisis leves-moderadas; oxígeno suplementario solo si hay hipoxemia documentada (no de forma rutinaria sin evidencia de hipoxemia).',
      tx_intervencionista: 'No aplica de forma directa a la crisis no complicada (ver la tarjeta de síndrome torácico agudo para el manejo de esa complicación específica si se desarrolla).',
      criterios_uci: 'Dolor refractario al manejo analgésico estándar con compromiso funcional grave, progresión a síndrome torácico agudo, o inestabilidad hemodinámica asociada.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a este episodio en sí (ver la tarjeta de enfermedad de células falciformes para el trasplante en enfermedad grave global).',
      seguimiento_hospitalario: 'Vigilancia de la respuesta analgésica, de la función respiratoria (por el riesgo de progresión a síndrome torácico agudo), y de la resolución del episodio.',
      seguimiento_ambulatorio: 'Revisión del cumplimiento de hidroxiurea u otra terapia modificadora si las crisis son frecuentes; plan de manejo del dolor individualizado para crisis futuras; identificación y manejo de precipitantes evitables.',
      pronostico: 'La mayoría de las crisis se resuelven con manejo de soporte adecuado en días; la frecuencia de crisis se correlaciona con el riesgo de otras complicaciones a largo plazo, de ahí la importancia de la terapia modificadora de la enfermedad para reducirlas.',
      algoritmo: ['Dolor agudo característico en un paciente con enfermedad de células falciformes conocida → crisis vaso-oclusiva, iniciar manejo sin demora', 'Hidratación + analgesia oportuna y adecuada desde la presentación (evitar retraso)', 'Identificar y manejar precipitantes identificables (infección, deshidratación)', 'Vigilar progresión a síndrome torácico agudo (síntomas respiratorios de nueva aparición)', 'Revisar cumplimiento de hidroxiurea si las crisis son frecuentes, ajustar terapia modificadora']
    },
    {
      nombre: 'Síndrome torácico agudo',
      color: '#5c3d5c',
      definicion: 'Complicación aguda potencialmente fatal de la enfermedad de células falciformes: nuevo infiltrado pulmonar en la radiografía de tórax acompañado de fiebre y/o síntomas respiratorios (dolor torácico, tos, taquipnea, hipoxemia), con múltiples causas posibles que con frecuencia coexisten (infección, embolia grasa por infarto de médula ósea, infarto pulmonar in situ, hipoventilación por dolor torácico/abdominal de una crisis vaso-oclusiva concomitante).',
      fisiopatologia: 'La fisiopatología es multifactorial y con frecuencia superpuesta: la infección respiratoria (bacteriana o viral) puede desencadenar directamente el cuadro o precipitar falciformación pulmonar secundaria por hipoxia local; el infarto de médula ósea durante una crisis vaso-oclusiva grave puede liberar émbolos grasos que ocluyen la microcirculación pulmonar; la falciformación intrapulmonar in situ produce infarto pulmonar directo; y la hipoventilación por dolor torácico o abdominal intenso de una crisis vaso-oclusiva concomitante produce atelectasia, que a su vez favorece más falciformación local por hipoxia regional, generando un círculo vicioso que puede progresar rápidamente a insuficiencia respiratoria si no se interrumpe.',
      epidemiologia: 'Una de las principales causas de muerte y de hospitalización en la enfermedad de células falciformes; el riesgo es particularmente elevado en el paciente que ya está hospitalizado por una crisis vaso-oclusiva dolorosa, de ahí la importancia de la vigilancia respiratoria activa durante esas hospitalizaciones.',
      factores_riesgo: ['Crisis vaso-oclusiva dolorosa concomitante (particularmente con dolor torácico o abdominal alto que limita la ventilación)', 'Infección respiratoria intercurrente', 'Uso inadecuado de opioides que suprime el esfuerzo respiratorio sin la analgesia incentivada apropiada', 'Antecedente de síndrome torácico agudo previo', 'Cirugía reciente bajo anestesia general'],
      clinica: 'Fiebre, dolor torácico, tos, taquipnea, e hipoxemia de instauración con frecuencia rápida (horas); puede progresar a insuficiencia respiratoria franca si no se reconoce y trata con prontitud; con frecuencia se superpone o sigue a una crisis vaso-oclusiva ya en curso.',
      criterios_dx: 'Nuevo infiltrado pulmonar en la radiografía de tórax, más fiebre y/o síntomas respiratorios, en un paciente con enfermedad de células falciformes; el diagnóstico es principalmente clínico-radiológico y no debe esperar la identificación de una causa específica (infecciosa vs. no infecciosa) para iniciar el manejo.',
      laboratorio: 'Gasometría arterial u oximetría de pulso para documentar el grado de hipoxemia; biometría hemática (la caída aguda de la hemoglobina y/o el conteo plaquetario puede acompañar a los casos graves); hemocultivos y cultivo de esputo si se sospecha causa infecciosa.',
      imagen: 'Radiografía de tórax, el estudio diagnóstico central (nuevo infiltrado); TC de tórax si el cuadro es grave o atípico y se necesita mayor caracterización.',
      complementarios: 'Vigilancia de la función respiratoria con oximetría continua en todo paciente hospitalizado por crisis vaso-oclusiva, dado que el síndrome torácico agudo puede desarrollarse durante la hospitalización.',
      dx_diferencial: 'Neumonía de otra causa sin relación con la enfermedad de células falciformes de base (aunque en la práctica se maneja de forma similar dado el solapamiento), embolia pulmonar (puede coexistir o ser difícil de distinguir clínicamente), edema pulmonar por sobrecarga de líquidos durante el manejo de una crisis vaso-oclusiva.',
      tx_medico: 'Hospitalización con vigilancia estrecha de la función respiratoria; oxígeno suplementario para mantener una saturación adecuada; hidratación cuidadosa (evitando la sobrecarga de líquidos, que puede empeorar la oxigenación); espirometría incentivada para prevenir la atelectasia que perpetúa el círculo vicioso, particularmente en el paciente con dolor torácico/abdominal que limita la ventilación espontánea.',
      tx_farmacologico: 'Antibiótico empírico de amplio espectro (cubriendo tanto organismos típicos como atípicos), dado que la causa infecciosa no puede excluirse de forma fiable al inicio; analgesia adecuada del dolor concomitante sin suprimir excesivamente el esfuerzo respiratorio; broncodilatadores si hay un componente broncoespástico asociado.',
      tx_intervencionista: 'Transfusión simple o exanguinotransfusión (según la gravedad y el grado de anemia/hipoxemia) para reducir agudamente la proporción de HbS circulante y mejorar la oxigenación; soporte ventilatorio (no invasivo o invasivo) si progresa a insuficiencia respiratoria franca.',
      criterios_uci: 'Hipoxemia progresiva pese al oxígeno suplementario, insuficiencia respiratoria franca, inestabilidad hemodinámica, o afectación multilobar extensa en la imagen.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica a este episodio en sí.',
      seguimiento_hospitalario: 'Oximetría continua, vigilancia de la frecuencia respiratoria y del trabajo respiratorio, espirometría incentivada activa, reevaluación radiológica según la evolución clínica.',
      seguimiento_ambulatorio: 'Revisión del cumplimiento de hidroxiurea (reduce la recurrencia); educación sobre espirometría incentivada durante futuras crisis vaso-oclusivas dolorosas para prevenir la recurrencia; consideración de transfusiones crónicas profilácticas en el paciente con episodios recurrentes graves.',
      pronostico: 'Complicación potencialmente fatal que requiere reconocimiento y tratamiento oportunos; el antecedente de un episodio previo aumenta el riesgo de recurrencia, de ahí la importancia de la prevención activa (espirometría incentivada durante las crisis, hidroxiurea).',
      algoritmo: ['Fiebre y/o síntomas respiratorios nuevos + nuevo infiltrado en radiografía de tórax en paciente con enfermedad de células falciformes → síndrome torácico agudo, hospitalizar', 'Oxígeno suplementario + antibiótico empírico de amplio espectro + hidratación cuidadosa (evitar sobrecarga)', 'Espirometría incentivada activa, particularmente si hay dolor torácico/abdominal concomitante que limita la ventilación', 'Transfusión simple o exanguinotransfusión según la gravedad de la hipoxemia/anemia', 'Progresión a insuficiencia respiratoria → soporte ventilatorio y manejo en UCI']
    },
    {
      nombre: 'ACV y complicaciones neurológicas',
      color: '#3d5a73',
      definicion: 'Riesgo marcadamente aumentado de evento cerebrovascular (isquémico en el niño, con mayor proporción de hemorrágico en el adulto) en la enfermedad de células falciformes, junto con el espectro de infartos silentes (sin síntomas clínicos francos pero con impacto cognitivo documentado) e infartos clínicamente evidentes; el cribado sistemático con Doppler transcraneal en la infancia ha transformado la prevención de esta complicación.',
      fisiopatologia: 'La falciformación crónica y la hemólisis producen disfunción endotelial y un estado de hipercoagulabilidad relativa, junto con estenosis progresiva de las grandes arterias intracraneales (particularmente la arteria carótida interna distal y la arteria cerebral media proximal) por hiperplasia de la íntima inducida por el flujo turbulento crónico y el daño endotelial repetido; esta estenosis progresiva es precisamente lo que detecta el Doppler transcraneal (mediante el aumento de la velocidad de flujo a través del segmento estenótico) antes de que ocurra un evento clínico. En el adulto, la fragilidad de los vasos colaterales desarrollados en respuesta a la estenosis crónica (patrón similar a la enfermedad de moyamoya) contribuye a un riesgo proporcionalmente mayor de hemorragia intracraneal comparado con el niño.',
      epidemiologia: 'El evento cerebrovascular isquémico es una de las complicaciones más temidas de la enfermedad de células falciformes en la infancia; los infartos silentes (detectados solo por resonancia magnética de cribado, sin síntomas clínicos evidentes) son considerablemente más frecuentes que los eventos clínicos manifiestos, pero se asocian igualmente a deterioro cognitivo medible.',
      factores_riesgo: ['Velocidad anormal en el Doppler transcraneal no tratada (ver la calculadora)', 'Antecedente de evento cerebrovascular previo (el factor de riesgo más fuerte de recurrencia sin profilaxis)', 'Hipertensión arterial sistémica concomitante', 'Episodios frecuentes de hipoxemia (síndrome torácico agudo recurrente, apnea del sueño no tratada)', 'Ausencia de cribado con Doppler transcraneal en la infancia'],
      clinica: 'Evento cerebrovascular clínico: déficit neurológico focal de instauración aguda (hemiparesia, afasia, alteración visual), convulsiones, o alteración del estado de conciencia. Infarto silente: sin síntomas neurológicos focales evidentes en la exploración estándar, pero asociado a dificultades de aprendizaje y deterioro cognitivo medible en evaluaciones neuropsicológicas dirigidas.',
      criterios_dx: 'Evento clínico: confirmado por resonancia magnética cerebral con hallazgos de isquemia aguda correspondientes al déficit clínico. Infarto silente: hallazgo incidental en resonancia magnética de cribado (o realizada por otro motivo) sin correlato clínico focal evidente al momento del hallazgo.',
      laboratorio: 'No hay un marcador de laboratorio específico para el diagnóstico del evento en sí; la biometría hemática y el perfil de hemólisis se mantienen como parte de la evaluación general del paciente.',
      imagen: 'Resonancia magnética cerebral con angiografía por resonancia como el estudio de elección para confirmar y caracterizar el evento agudo y evaluar la vasculopatía intracraneal subyacente; Doppler transcraneal (calculadora) como herramienta de cribado preventivo, no diagnóstica de un evento ya ocurrido.',
      complementarios: 'Evaluación neuropsicológica dirigida si hay sospecha de impacto cognitivo por infartos silentes o por eventos clínicos previos.',
      dx_diferencial: 'Otras causas de déficit neurológico focal agudo en el niño o adulto joven (mucho menos frecuentes en ausencia de enfermedad de células falciformes conocida, pero deben considerarse si el cuadro es atípico).',
      tx_medico: 'Manejo agudo del evento cerebrovascular según su tipo (isquémico vs. hemorrágico), en coordinación con neurología; exanguinotransfusión urgente para reducir agudamente la proporción de HbS circulante, una medida específica de la enfermedad de células falciformes en este contexto.',
      tx_farmacologico: 'Según el manejo estándar del tipo de evento cerebrovascular específico; hidroxiurea considerada en el paciente que no puede recibir transfusiones crónicas por otras razones, aunque las transfusiones siguen siendo la profilaxis de elección tras un evento establecido.',
      tx_intervencionista: 'Exanguinotransfusión aguda en el evento cerebrovascular agudo; transfusiones crónicas profilácticas de por vida tras un primer evento cerebrovascular clínico (para prevenir la recurrencia, dado el alto riesgo sin profilaxis) o tras confirmar un Doppler transcraneal anormal persistente (ver la calculadora).',
      criterios_uci: 'Evento cerebrovascular agudo con compromiso del estado de conciencia, convulsiones no controladas, o signos de hipertensión intracraneal.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante alogénico de células madre hematopoyéticas considerado en el paciente con enfermedad cerebrovascular establecida y donante compatible disponible, como alternativa a las transfusiones crónicas de por vida.',
      seguimiento_hospitalario: 'Vigilancia neurológica estrecha, control de la proporción de HbS mediante transfusión/exanguinotransfusión según protocolo.',
      seguimiento_ambulatorio: 'Doppler transcraneal anual sistemático desde los 2 años de edad como estrategia preventiva central; transfusiones crónicas de por vida tras un evento clínico o un Doppler anormal confirmado; rehabilitación neurológica y apoyo educativo si hay déficit cognitivo documentado por infartos silentes.',
      pronostico: 'El cribado sistemático con Doppler transcraneal y las transfusiones crónicas profilácticas han reducido dramáticamente la incidencia de un primer evento cerebrovascular clínico en el niño; sin profilaxis, el riesgo de recurrencia tras un primer evento es muy elevado.',
      algoritmo: ['Doppler transcraneal anual desde los 2 años (calculadora) → clasificar riesgo', 'Anormal (confirmado en 2 estudios) → iniciar transfusiones crónicas profilácticas', 'Déficit neurológico focal agudo → resonancia magnética urgente + exanguinotransfusión urgente', 'Evento clínico confirmado → transfusiones crónicas de por vida para prevenir recurrencia', 'Considerar trasplante alogénico si hay donante compatible disponible']
    },
    {
      nombre: 'Asplenia funcional, riesgo infeccioso y complicaciones crónicas',
      color: '#8a6a1f',
      definicion: 'Grupo de complicaciones crónicas de la enfermedad de células falciformes: la asplenia funcional progresiva (con el consiguiente riesgo elevado de infección por organismos encapsulados), el secuestro esplénico agudo en el niño pequeño (antes de que se complete la autoesplenectomía), y las complicaciones crónicas acumulativas de múltiples órganos por la vasculopatía y la hemólisis crónicas (nefropatía, necrosis avascular, priapismo, colelitiasis, úlceras en piernas, retinopatía).',
      fisiopatologia: 'Los infartos esplénicos repetidos por falciformación desde la infancia temprana producen una pérdida progresiva de la función esplénica ("autoesplenectomía" funcional, con frecuencia completa hacia los 5 años de edad en la HbSS), eliminando un componente clave de la defensa inmune contra organismos encapsulados (Streptococcus pneumoniae, Haemophilus influenzae), de ahí el riesgo marcadamente elevado de sepsis fulminante por estos organismos si no se administra profilaxis antibiótica y vacunación adecuadas. Antes de completarse la autoesplenectomía, el bazo aún congestionado puede secuestrar agudamente un gran volumen de sangre (secuestro esplénico agudo), produciendo una caída brusca y potencialmente fatal de la hemoglobina con esplenomegalia dolorosa aguda, una urgencia pediátrica reconocida. A largo plazo, la vasculopatía crónica y la hemólisis sostenida producen daño acumulativo en múltiples órganos: nefropatía falciforme (desde hiperfiltración temprana hasta enfermedad renal crónica), necrosis avascular (particularmente de cadera, por oclusión de la circulación terminal ósea), priapismo (por oclusión del drenaje venoso peneano), colelitiasis (por el exceso crónico de bilirrubina de la hemólisis), úlceras cutáneas de cicatrización lenta (típicamente en maléolos), y retinopatía proliferativa.',
      epidemiologia: 'La asplenia funcional es prácticamente universal en la HbSS no tratada hacia la edad escolar; el secuestro esplénico agudo es una causa importante de mortalidad temprana en el lactante/niño pequeño con enfermedad de células falciformes antes de que se implementen medidas preventivas; las complicaciones crónicas de órgano se acumulan progresivamente con la edad y son una causa importante de morbilidad en el adulto con la enfermedad.',
      factores_riesgo: ['Edad menor de 5 años sin autoesplenectomía completa (para el secuestro esplénico agudo)', 'Ausencia o incumplimiento de la profilaxis antibiótica y la vacunación apropiada (para el riesgo infeccioso)', 'Mayor edad y mayor duración de la enfermedad (para las complicaciones crónicas acumulativas)', 'HbSC (riesgo particularmente elevado de necrosis avascular y retinopatía, ver esa tarjeta)', 'Frecuencia de crisis vaso-oclusivas y grado de hemólisis crónica (correlacionan con el riesgo de complicaciones de órgano)'],
      clinica: 'Secuestro esplénico agudo: esplenomegalia dolorosa de instauración aguda con palidez marcada y signos de choque hipovolémico en el niño pequeño, una urgencia que requiere reconocimiento inmediato. Riesgo infeccioso: fiebre en el niño con enfermedad de células falciformes debe considerarse potencialmente grave hasta demostrar lo contrario, dado el riesgo de sepsis fulminante por organismos encapsulados. Complicaciones crónicas: dolor de cadera progresivo (necrosis avascular), erección dolorosa prolongada (priapismo, una urgencia urológica si es sostenida), dolor en hipocondrio derecho (colelitiasis), úlceras dolorosas de cicatrización lenta en maléolos, deterioro progresivo de la función renal.',
      criterios_dx: 'Secuestro esplénico agudo: caída aguda de la hemoglobina (con frecuencia ≥2 g/dL respecto al basal) con esplenomegalia palpable de nueva aparición o marcadamente aumentada. Complicaciones crónicas: según el órgano afectado, con estudio dirigido específico (resonancia de cadera para necrosis avascular, función renal seriada para nefropatía, examen oftalmológico para retinopatía).',
      laboratorio: 'Biometría hemática seriada (caída aguda de hemoglobina en el secuestro esplénico); hemocultivos ante fiebre, dado el riesgo de bacteriemia por organismos encapsulados; función renal seriada (creatinina, proteinuria) para vigilancia de nefropatía crónica; perfil hepático y de hierro en la vigilancia general.',
      imagen: 'Ecografía abdominal para confirmar el tamaño esplénico en el secuestro agudo y para cribado de colelitiasis; resonancia magnética de cadera para necrosis avascular; ecografía Doppler peneana en el priapismo prolongado si hay duda diagnóstica.',
      complementarios: 'Examen oftalmológico periódico (retinopatía); evaluación urológica urgente ante priapismo prolongado (&gt;4 horas, una urgencia que requiere manejo inmediato para prevenir daño tisular permanente).',
      dx_diferencial: 'Otras causas de esplenomegalia aguda dolorosa (menos probables en el contexto de enfermedad de células falciformes conocida), otras causas de fiebre en el niño inmunocomprometido por otra razón, otras causas de dolor articular/óseo (incluida osteomielitis, que puede coexistir).',
      tx_medico: 'Secuestro esplénico agudo: reanimación con líquidos/transfusión urgente y hospitalización; educación familiar sobre palpación esplénica en el domicilio para detección temprana de recurrencias en el lactante/niño pequeño en riesgo. Riesgo infeccioso: profilaxis antibiótica con penicilina desde la infancia (ver la tarjeta de enfermedad de células falciformes), evaluación urgente y hospitalización de todo niño febril con enfermedad de células falciformes hasta descartar razonablemente una infección grave. Priapismo: hidratación, analgesia, y evaluación urológica urgente si es prolongado.',
      tx_farmacologico: 'Antibiótico empírico de amplio espectro urgente ante fiebre en el niño con asplenia funcional, sin esperar la confirmación microbiológica; agonistas alfa-adrenérgicos (por ejemplo, pseudoefedrina o inyección intracavernosa de fenilefrina) en el manejo del priapismo agudo según protocolo urológico; manejo médico o quirúrgico de la colelitiasis sintomática según su presentación.',
      tx_intervencionista: 'Transfusión urgente en el secuestro esplénico agudo grave; esplenectomía considerada tras episodios recurrentes de secuestro esplénico; aspiración/derivación quirúrgica en el priapismo refractario al manejo médico inicial; colecistectomía en la colelitiasis sintomática recurrente; reemplazo articular en la necrosis avascular de cadera avanzada.',
      criterios_uci: 'Secuestro esplénico agudo con choque hipovolémico; sepsis grave por organismo encapsulado en el niño con asplenia funcional.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica de forma directa a estas complicaciones específicas (ver la tarjeta de enfermedad de células falciformes para el trasplante en enfermedad grave global); considerar en la nefropatía falciforme que progresa a enfermedad renal terminal (trasplante renal, con las consideraciones específicas de la enfermedad de base).',
      seguimiento_hospitalario: 'Según la complicación aguda específica que motive la hospitalización.',
      seguimiento_ambulatorio: 'Vigilancia de la función renal seriada; examen oftalmológico periódico; educación familiar sobre palpación esplénica en el lactante/niño pequeño en riesgo de secuestro; vigilancia del cumplimiento de profilaxis antibiótica y vacunación; cribado de colelitiasis y de necrosis avascular según los síntomas.',
      pronostico: 'El secuestro esplénico agudo y el riesgo infeccioso se han reducido dramáticamente con el reconocimiento temprano, la educación familiar, la profilaxis antibiótica y la vacunación apropiada; las complicaciones crónicas de órgano son acumulativas con la edad y requieren vigilancia activa y de por vida para detectarlas y manejarlas oportunamente.',
      algoritmo: ['Niño pequeño con enfermedad de células falciformes + esplenomegalia dolorosa aguda + caída de hemoglobina → secuestro esplénico agudo, reanimación/transfusión urgente', 'Fiebre en niño con enfermedad de células falciformes → hospitalizar y tratar como potencialmente grave hasta descartar infección, dada la asplenia funcional', 'Priapismo &gt;4 horas → urgencia urológica, evaluación y manejo inmediatos', 'Vigilancia crónica sistemática: función renal, examen oftalmológico, cribado de colelitiasis y necrosis avascular según síntomas', 'Educación familiar sobre palpación esplénica en el lactante/niño pequeño en riesgo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de las hemoglobinopatías se centra en el manejo de las crisis agudas de la enfermedad de células falciformes (vaso-oclusiva, síndrome torácico agudo, secuestro esplénico, evento cerebrovascular) y en la vigilancia transfusional del paciente con talasemia mayor.',
    parametros: ['Intensidad del dolor y respuesta analgésica', 'Saturación de oxígeno y frecuencia respiratoria (vigilancia de progresión a síndrome torácico agudo)', 'Hemoglobina seriada (vigilancia de caída aguda en secuestro esplénico o hemólisis)', 'Estado neurológico si hay sospecha de evento cerebrovascular'],
    criterios_uci_general: 'Síndrome torácico agudo grave con insuficiencia respiratoria, evento cerebrovascular agudo, secuestro esplénico agudo con choque hipovolémico, crisis vaso-oclusiva refractaria con compromiso multiorgánico, sepsis grave por organismo encapsulado en el niño con asplenia funcional.',
    criterios_tips_general: 'No aplica de forma directa a este tema.',
    criterios_trasplante_general: 'Trasplante alogénico de células madre hematopoyéticas como única opción curativa en la talasemia mayor y en la enfermedad de células falciformes grave, idealmente en la infancia con un donante compatible disponible; ver las tarjetas correspondientes para el desarrollo completo.',
    prevencion: 'Profilaxis antibiótica con penicilina y vacunación completa desde la infancia temprana en la enfermedad de células falciformes; hidroxiurea u otra terapia modificadora de la enfermedad para reducir la frecuencia de crisis; Doppler transcraneal anual desde los 2 años; quelación de hierro sistemática desde el inicio del programa transfusional en la talasemia mayor; consejo genético reproductivo en todas las formas hereditarias.'
  }
};

export const compCites = {
  'Talasemia Alfa': [1, 3],
  'Talasemia Beta': [1, 2, 12],
  'Enfermedad de Células Falciformes': [4, 7, 13, 15],
  'Otros Síndromes Falciformes y Rasgo Falciforme': [4, 14],
  'Crisis vaso-oclusiva dolorosa': [4, 7, 11],
  'Síndrome torácico agudo': [9, 7],
  'ACV y complicaciones neurológicas': [5, 6, 8],
  'Asplenia funcional, riesgo infeccioso y complicaciones crónicas': [10, 11]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  'Doppler transcraneal (TCD)': [5, 6],
  'Clasificación de la talasemia alfa por número de genes afectados': [3],
  'Clasificación de la talasemia beta por gravedad': [1, 2]
};
export const escalaCalc = { 'Doppler transcraneal (TCD)': 'tcd' };
export const compGroups = [
  { name: 'Hemoglobinopatías por entidad (enfermedades)', items: ['Talasemia Alfa', 'Talasemia Beta', 'Enfermedad de Células Falciformes', 'Otros Síndromes Falciformes y Rasgo Falciforme'] },
  { name: 'Complicaciones transversales (enfermedad de células falciformes)', items: ['Crisis vaso-oclusiva dolorosa', 'Síndrome torácico agudo', 'ACV y complicaciones neurológicas', 'Asplenia funcional, riesgo infeccioso y complicaciones crónicas'] }
];
export const complicacionesIntro = 'Las 4 primeras tarjetas cubren las entidades principales de este tema, tanto talasemias como formas falciformes; las siguientes 4 son complicaciones transversales específicas de la enfermedad de células falciformes (y, en menor grado, sus formas heterocigotas compuestas), desde la crisis dolorosa más frecuente hasta las complicaciones crónicas acumulativas.';
export const categories = [
  { id: 'definicion', label: 'Definición' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'clasificacion', label: 'Clasificación' },
  { id: 'complicaciones', label: 'Complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluación' },
  { id: 'bibliografia', label: 'Bibliografía' }
];
export const arbol = {
  root: { title: 'HEMOGLOBINOPATÍAS', color: '#7a1f3d', target: 'definicion' },
  branches: [
    { title: 'Por entidad (enfermedades)', sub: 'Cuantitativas y cualitativas', color: '#3d6b8c', target: 'diagnostico', leaves: [
      { title: 'Talasemia Alfa', sub: 'Defecto cuantitativo', color: '#3d6b8c', target: 'complicaciones' },
      { title: 'Talasemia Beta', sub: 'Defecto cuantitativo', color: '#5c6b8c', target: 'complicaciones' },
      { title: 'Enfermedad de Células Falciformes', sub: 'Defecto cualitativo', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Otros Síndromes Falciformes y Rasgo Falciforme', sub: 'HbSC, HbS-beta talasemia', color: '#8c3a34', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones transversales', sub: 'De la enfermedad de células falciformes', color: '#966b35', target: 'complicaciones', leaves: [
      { title: 'Crisis vaso-oclusiva dolorosa', sub: 'Más frecuente', color: '#966b35', target: 'complicaciones' },
      { title: 'Síndrome torácico agudo', sub: 'Urgencia', color: '#8c3a34', target: 'complicaciones' },
      { title: 'ACV y complicaciones neurológicas', sub: 'Prevención con Doppler', color: '#5c3d8c', target: 'complicaciones' },
      { title: 'Asplenia funcional y complicaciones crónicas', sub: 'Riesgo infeccioso', color: '#6b4a2e', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 4], no_invasivos: [5] };
export const clasificacionCite = [3, 1];
export const seguimientoCite = [5, 12];
