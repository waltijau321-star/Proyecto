// topics/alteraciones-plaquetarias-cuantitativas/content.js: Alteraciones Plaquetarias
// Cuantitativas (Trombocitopenia y Púrpuras + Trombocitosis Reactiva).
// Segundo de 4 temas independientes que reemplazan el cluster "Hemostasia y trombosis" del
// temario (ver también topics/coagulacion-trombofilias/; los otros 2, Transfusión de
// Hemoderivados y Coagulación Intravascular Diseminada, se construirán por separado).
//
// Sigue el mismo patrón que topics/alteraciones-serie-blanca/ (leucocitosis + leucopenia
// combinadas): aquí se combinan trombocitopenia y trombocitosis reactiva bajo un mismo tema por
// ser ambas alteraciones cuantitativas (no cualitativas) de la misma línea celular.
//
// Nota de alcance: la PTT/SHU ya están cubiertas en topics/anemias-hemoliticas-adquiridas/ y la
// trombocitemia esencial en topics/sindromes-mieloproliferativos/ — no se duplican aquí, solo se
// referencian en el diagnóstico diferencial correspondiente.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demás debe ser un `export const` de nivel superior, HERMANO de `content`.
//
// IMPORTANTE (ver memoria del proyecto sobre study.js): construir cada pregunta con la respuesta
// correcta en options[0]/correct:0 primero, verificar el conteo, y solo entonces redistribuir
// mecánicamente con un script.

export const meta = {
  id: 'alteraciones-plaquetarias-cuantitativas',
  titulo: 'Alteraciones Plaquetarias Cuantitativas',
  subtitulo: 'Módulo 28 · Medicina Interna',
  accent: '#8a6a1f',
  accentDim: '#c4a35c'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const mecanismosHtml = `
<div style="display:flex;flex-direction:column;align-items:center;gap:8px;max-width:560px;margin:0 auto;font-size:10px;color:var(--ink);">
  <div style="display:flex;gap:10px;justify-content:center;width:100%;flex-wrap:wrap;">
    <div style="flex:1;min-width:170px;background:#7a1f3d33;border:1px solid #7a1f3d;border-radius:8px;padding:8px;text-align:center;">
      <strong>PTI</strong><br>Autoanticuerpos anti-plaqueta → destrucción esplénica<br>
      <span style="color:var(--ink-dim);">solo sangrado, nunca trombosis</span>
    </div>
    <div style="flex:1;min-width:170px;background:#3d5a7333;border:1px solid #3d5a73;border-radius:8px;padding:8px;text-align:center;">
      <strong>HIT</strong><br>Anticuerpo anti-heparina/PF4 → activa plaquetas<br>
      <span style="color:var(--ink-dim);">trombocitopenia CON trombosis paradójica</span>
    </div>
  </div>
  <div style="color:var(--ink-dim);">↓</div>
  <div style="background:#8c3a3433;border:1px solid #8c3a34;border-radius:8px;padding:7px 14px;text-align:center;max-width:460px;">
    Misma consecuencia de laboratorio (plaquetas bajas), mecanismos y riesgo clínico opuestos: la PTI casi nunca trombosa, la HIT trombosa pese al recuento bajo
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">Las alteraciones plaquetarias cuantitativas comprenden tanto la disminución (trombocitopenia) como el aumento (trombocitosis) del recuento plaquetario circulante, sin que exista necesariamente una alteración de la función plaquetaria en sí (a diferencia de los trastornos cualitativos de la coagulación, ver el tema de Trastornos de la Coagulación y Trombofilias). Se agrupan en un mismo tema porque comparten el mismo punto de partida diagnóstico (el recuento plaquetario en la biometría hemática) y porque el enfoque clínico ante un valor anómalo sigue una lógica paralela a la de las alteraciones de la serie blanca.</p>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Epidemiología.</strong> La púrpura trombocitopénica inmune es la causa más frecuente de trombocitopenia aislada (sin otra citopenia asociada) en el adulto sin otra enfermedad de base evidente; la trombocitopenia inducida por heparina, aunque considerablemente menos frecuente, es de reconocimiento crítico dado su riesgo trombótico paradójico. La trombocitosis reactiva es, con diferencia, la causa más frecuente de un recuento plaquetario elevado, considerablemente más frecuente que la trombocitemia esencial (ver el tema de Síndromes Mieloproliferativos).</p>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Etiología y clasificación.</strong>
  <ul style="margin:6px 0 0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li><strong>Púrpura Trombocitopénica Inmune (PTI)</strong>: destrucción plaquetaria mediada por autoanticuerpos, un diagnóstico de exclusión tras descartar otras causas.</li>
    <li><strong>Trombocitopenia inducida por fármacos y HIT</strong>: caída del recuento plaquetario asociada temporalmente a un fármaco, con la trombocitopenia inducida por heparina como la forma de mayor relevancia clínica por su riesgo trombótico paradójico.</li>
    <li><strong>Pseudotrombocitopenia y trombocitopenia gestacional</strong>: 2 trampas diagnósticas distintas agrupadas por su naturaleza benigna y su potencial de generar estudio o tratamiento innecesario si no se reconocen: un artefacto de laboratorio (agregación plaquetaria inducida por el anticoagulante EDTA del tubo) y una caída leve fisiológica del embarazo, respectivamente.</li>
    <li><strong>Trombocitosis reactiva/secundaria</strong>: elevación del recuento plaquetario en respuesta a un estímulo identificable (inflamación, infección, ferropenia, asplenia, neoplasia), la causa más frecuente de trombocitosis, distinta de la trombocitemia esencial (proliferación clonal autónoma, ver el tema de Síndromes Mieloproliferativos).</li>
  </ul>
</div>
<div style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Factores de riesgo.</strong>
  <ul style="margin:0;padding-left:20px;color:var(--ink);font-size:14.5px;line-height:1.7;">
    <li>Infección viral reciente o vacunación reciente (PTI, particularmente en niños)</li>
    <li>Exposición a heparina, especialmente heparina no fraccionada más que heparina de bajo peso molecular, y exposición quirúrgica/postoperatoria</li>
    <li>Embarazo (trombocitopenia gestacional benigna, la causa más frecuente de trombocitopenia leve en el embarazo)</li>
    <li>Estado inflamatorio/infeccioso agudo, ferropenia, asplenia (anatómica o funcional), o neoplasia activa (trombocitosis reactiva)</li>
    <li>Enfermedad autoinmune sistémica de base (lupus eritematoso sistémico asociado a PTI secundaria)</li>
  </ul>
</div>
<p style="margin:0 0 14px;"><strong style="color:var(--accent-fg);">Fisiopatología general.</strong> El recuento plaquetario circulante refleja el equilibrio entre la producción medular (megacariocitopoyesis), la destrucción o secuestro periférico, y la distribución entre el compartimento circulante y el esplénico; una trombocitopenia puede originarse por disminución de la producción, aumento de la destrucción/consumo, o secuestro esplénico excesivo, mientras que una trombocitosis puede originarse por sobreproducción reactiva (mediada por citocinas inflamatorias como la interleucina-6, que estimula la producción hepática de trombopoyetina) o por proliferación clonal autónoma.${figBlock('Imagen 1', 'PTI vs. HIT: mismo hallazgo de laboratorio, mecanismos y riesgos opuestos', mecanismosHtml)} La HIT ilustra el ejemplo más contraintuitivo de este tema: el anticuerpo formado contra el complejo heparina-factor plaquetario 4 no solo destruye plaquetas (produciendo trombocitopenia) sino que además las activa directamente a través de su receptor Fc, generando un estado protrombótico paradójico en el que el paciente trombosa pese a tener un recuento plaquetario bajo, el opuesto exacto de lo que la intuición clínica sugeriría. Analogía: en la mayoría de las trombocitopenias, un recuento bajo señala simplemente "hay menos guardias de seguridad disponibles" (mayor riesgo de sangrado); en la HIT, en cambio, es como si los pocos guardias que quedan hubieran sido secuestrados y forzados a atacar activamente la propia instalación que debían proteger, produciendo daño (trombosis) pese a que su número total haya disminuido.</p>
<p style="margin:0;"><strong style="color:var(--accent-fg);">Panorama clínico.</strong> Espectro desde el hallazgo incidental y asintomático de un recuento plaquetario levemente anómalo hasta el sangrado mucocutáneo significativo de la trombocitopenia grave o la trombosis venosa/arterial de la HIT o de la trombocitosis extrema; el enfoque diagnóstico completo, la clasificación por entidad, y las complicaciones específicas se desarrollan en Diagnóstico y Complicaciones.</p>`;

export const bibliografia = [
  'Neunert C, Terrell DR, Arnold DM, et al. American Society of Hematology 2019 guidelines for immune thrombocytopenia. Blood Adv. 2019;3(23):3829-3866.',
  'Cines DB, Bussel JB. How I treat idiopathic thrombocytopenic purpura (ITP). Blood. 2005;106(7):2244-2251.',
  'Lo GK, Juhl D, Warkentin TE, et al. Evaluation of pretest clinical score (4 T\'s) for the diagnosis of heparin-induced thrombocytopenia in two clinical settings. J Thromb Haemost. 2006;4(4):759-765.',
  'Cuker A, Arepally GM, Chong BH, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia. Blood Adv. 2018;2(22):3360-3392.',
  'Warkentin TE, Greinacher A. Heparin-induced thrombocytopenia: recognition, treatment, and prevention. Chest. 2004;126(3 Suppl):311S-337S.',
  'Bizzaro N. EDTA-dependent pseudothrombocytopenia: a clinical and epidemiological study of 112 cases, with 10-year follow-up. Am J Hematol. 1995;50(2):103-109.',
  'McCrae KR. Thrombocytopenia in pregnancy. Hematology Am Soc Hematol Educ Program. 2010;2010:397-402.',
  'Griesshammer M, Bangerter M, Sauer T, et al. Aetiology and clinical significance of thrombocytosis: analysis of 732 patients with an elevated platelet count. J Intern Med. 1999;245(3):295-300.',
  'Schafer AI. Thrombocytosis. N Engl J Med. 2004;350(12):1211-1219.',
  'Provan D, Arnold DM, Bussel JB, et al. Updated international consensus report on the investigation and management of primary immune thrombocytopenia. Blood Adv. 2019;3(22):3780-3817.',
  'Kelton JG, Arnold DM, Bates SM. Nonheparin anticoagulants for heparin-induced thrombocytopenia. N Engl J Med. 2013;368(8):737-744.',
  'Greinacher A. Heparin-Induced Thrombocytopenia. N Engl J Med. 2015;373(3):252-261.',
  'Sekhon SS, Roy V. Thrombocytopenia in adults: A practical approach to evaluation and management. South Med J. 2006;99(5):491-498; quiz 499-500, 533.',
  'Buckley MF, James JW, Brown DE, et al. Case-control study of platelet count and volume in normal and preeclamptic pregnancies. Am J Hematol. 2000;65(2):145-150.',
  'Rodeghiero F, Stasi R, Gernsheimer T, et al. Standardization of terminology, definitions and outcome criteria in immune thrombocytopenic purpura of adults and children: report from an international working group. Blood. 2009;113(11):2386-2393.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Alteración leve/asintomática',
      tituloB: 'Alteración grave/sintomática',
      compensada: 'Recuento plaquetario levemente anómalo (leve trombocitopenia o trombocitosis) sin sangrado ni trombosis, con frecuencia hallazgo incidental en una biometría hemática de rutina.',
      descompensada: 'Sangrado mucocutáneo significativo (petequias, equimosis extensas, sangrado de mucosas) en la trombocitopenia grave; trombosis venosa o arterial en la HIT o la trombocitosis extrema sintomática.'
    },
    laboratorio: [
      { prueba: 'Biometría hemática con frotis de sangre periférica', utilidad: 'Confirma el recuento plaquetario y descarta pseudotrombocitopenia (agregados plaquetarios en el frotis pese a un recuento automatizado bajo); evalúa morfología plaquetaria y de otras líneas celulares.' },
      { prueba: 'Repetir el recuento en un tubo con citrato (no EDTA)', utilidad: 'Confirma o descarta pseudotrombocitopenia cuando el frotis sugiere agregados plaquetarios inducidos por el anticoagulante del tubo estándar.' },
      { prueba: 'Anticuerpos anti-PF4/heparina y ensayo funcional (agregación inducida por heparina o liberación de serotonina)', utilidad: 'Confirma HIT tras una probabilidad pretest intermedia-alta por 4T Score (calculadora); el ensayo funcional tiene mayor especificidad que el inmunoensayo aislado.' },
      { prueba: 'Serologías virales (VIH, hepatitis C) y anticuerpos antinucleares', utilidad: 'Descartan causas secundarias de trombocitopenia inmune antes de confirmar PTI primaria (diagnóstico de exclusión).' }
    ],
    no_invasivos: [
      { metodo: '4T Score para HIT (con calculadora)', interpretacion: 'Estratifica la probabilidad pretest de HIT antes del estudio serológico confirmatorio.', cutoff: 'Categórico, ver Escalas' }
    ],
    imagen: [
      { modalidad: 'Ecografía Doppler venosa', hallazgos: 'Ante sospecha de trombosis asociada a HIT o a trombocitosis extrema sintomática; considerada de rutina en la HIT confirmada incluso sin síntomas evidentes, dado el alto riesgo trombótico asociado.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: 'La distinción central de este tema es la dirección de la alteración (trombocitopenia vs. trombocitosis) y, dentro de la trombocitopenia, si el mecanismo es inmune sin riesgo trombótico (PTI) o inmune con riesgo trombótico paradójico (HIT), una distinción crítica que cambia por completo el manejo.',
    escalas: [
      { nombre: '4T Score para HIT', componentes: 'Grado de trombocitopenia, momento de aparición, trombosis/secuelas, otras causas posibles. Calculadora disponible más abajo.', formula: 'Cada categoría puntúa 0-2; suma total 0-8.', interpretacion: '0-3: probabilidad baja (alto valor predictivo negativo). 4-5: probabilidad intermedia. 6-8: probabilidad alta, orienta suspender heparina y confirmar con estudio serológico.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Púrpura Trombocitopénica Inmune (PTI)',
      color: '#7a1f3d',
      definicion: 'Trombocitopenia mediada por autoanticuerpos dirigidos contra antígenos de la superficie plaquetaria (con mayor frecuencia glucoproteínas IIb/IIIa), que marcan a las plaquetas para su destrucción prematura por el sistema reticuloendotelial esplénico; un diagnóstico de exclusión tras descartar otras causas identificables de trombocitopenia.',
      fisiopatologia: 'Los autoanticuerpos (con frecuencia IgG) se unen a glucoproteínas de la superficie plaquetaria, y las plaquetas recubiertas de anticuerpo son reconocidas y fagocitadas por los macrófagos esplénicos a través de sus receptores Fc, de forma análoga al mecanismo de la anemia hemolítica autoinmune caliente (ver el tema de Anemias Hemolíticas Adquiridas); adicionalmente, los mismos autoanticuerpos pueden suprimir parcialmente la producción megacariocítica medular, contribuyendo a la trombocitopenia por un mecanismo de menor producción además del de mayor destrucción periférica.',
      epidemiologia: 'La causa más frecuente de trombocitopenia aislada en el adulto sin otra enfermedad de base evidente; en niños con frecuencia sigue a una infección viral reciente y tiene un curso predominantemente autolimitado, a diferencia del curso más frecuentemente crónico en el adulto.',
      factores_riesgo: ['Infección viral reciente (particularmente en la PTI pediátrica)', 'Enfermedad autoinmune sistémica de base (lupus eritematoso sistémico, síndrome antifosfolípido)', 'Infección por VIH o hepatitis C crónica (causas secundarias reconocidas de PTI)', 'Sexo femenino (mayor incidencia en el adulto)'],
      clinica: 'Petequias, púrpura, equimosis fáciles, sangrado mucoso (gingivorragia, epistaxis, menorragia) proporcional al grado de trombocitopenia; ausencia de esplenomegalia significativa ni de otras citopenias asociadas (su presencia obliga a reconsiderar el diagnóstico).',
      criterios_dx: 'Trombocitopenia aislada (sin anemia ni leucopenia asociadas inexplicadas) tras excluir otras causas identificables (fármacos, infecciones, enfermedad autoinmune de base, pseudotrombocitopenia); no existe una prueba confirmatoria positiva única, es un diagnóstico de exclusión.',
      laboratorio: 'Biometría hemática con frotis (morfología plaquetaria normal, ausencia de esquistocitos que sugerirían microangiopatía trombótica en su lugar); serologías virales y anticuerpos antinucleares para descartar causas secundarias.',
      imagen: 'No indicada de rutina para el diagnóstico en sí; considerada si hay esplenomegalia inesperada al examen físico, que obligaría a reconsiderar el diagnóstico.',
      complementarios: 'Aspirado de médula ósea reservado para casos atípicos (edad avanzada, otras citopenias asociadas, falta de respuesta al tratamiento esperado) para descartar un síndrome mielodisplásico u otra causa medular primaria.',
      dx_diferencial: 'Pseudotrombocitopenia (ver esa tarjeta, descartada con tubo de citrato), trombocitopenia inducida por fármacos (ver esa tarjeta, antecedente temporal de exposición), microangiopatía trombótica (esquistocitos presentes, ver el tema de Anemias Hemolíticas Adquiridas), síndrome mielodisplásico (otras citopenias o displasia en el frotis).',
      tx_medico: 'Observación sin tratamiento específico en la trombocitopenia leve-moderada asintomática (umbral de plaquetas variable según el contexto clínico y el riesgo de sangrado individual); tratamiento indicado ante sangrado activo significativo o trombocitopenia grave.',
      tx_farmacologico: 'Corticoides como primera línea (con frecuencia dexametasona en pulsos o prednisona); inmunoglobulina intravenosa para elevación rápida del recuento cuando se necesita una respuesta más urgente que la de los corticoides solos; agonistas del receptor de trombopoyetina (romiplostim, eltrombopag) o rituximab como segunda línea en la enfermedad crónica o refractaria.',
      tx_intervencionista: 'Esplenectomía considerada en la PTI crónica refractaria a múltiples líneas de tratamiento médico (ver Complicaciones).',
      criterios_uci: 'Hemorragia grave con compromiso hemodinámico, hemorragia intracraneal (infrecuente pero la complicación más temida, ver Complicaciones).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia del recuento plaquetario seriado durante el tratamiento agudo del sangrado o la trombocitopenia grave.',
      seguimiento_ambulatorio: 'Seguimiento hematológico continuado con vigilancia del recuento plaquetario; reevaluación periódica de la necesidad de tratamiento de mantenimiento en la enfermedad crónica.',
      pronostico: 'Favorable en la mayoría de los casos, particularmente en niños (con frecuencia autolimitada); el curso crónico en el adulto requiere con frecuencia manejo a largo plazo pero rara vez es fatal con el tratamiento apropiado disponible.',
      algoritmo: ['Trombocitopenia aislada sin otra citopenia → descartar pseudotrombocitopenia con tubo de citrato', 'Descartar causas secundarias (fármacos, VIH, hepatitis C, lupus) y microangiopatía trombótica (frotis sin esquistocitos)', 'PTI confirmada por exclusión → observación si es leve-moderada y asintomática', 'Sangrado activo o trombocitopenia grave → corticoides ± inmunoglobulina intravenosa', 'Enfermedad crónica/refractaria → agonistas de trombopoyetina, rituximab, o esplenectomía']
    },
    {
      nombre: 'Trombocitopenia inducida por fármacos y HIT',
      color: '#3d5a73',
      definicion: 'Caída del recuento plaquetario temporalmente asociada a la exposición a un fármaco, con la trombocitopenia inducida por heparina (HIT) como la forma de mayor relevancia clínica: una reacción inmune mediada por anticuerpos contra el complejo heparina-factor plaquetario 4 que, a diferencia de la mayoría de las trombocitopenias farmacológicas, produce un estado protrombótico paradójico en lugar de (o además de) un riesgo hemorrágico.',
      fisiopatologia: 'En la trombocitopenia farmacológica no-HIT, el fármaco (o un metabolito) actúa como hapteno que se une a la superficie plaquetaria, generando un neoantígeno reconocido por anticuerpos que producen destrucción plaquetaria por un mecanismo similar al de la PTI, sin activación plaquetaria adicional. En la HIT, el mecanismo es fundamentalmente distinto: la heparina se une al factor plaquetario 4 (una proteína liberada por los gránulos alfa plaquetarios), formando un complejo que se vuelve inmunogénico; el anticuerpo resultante (con frecuencia IgG) no solo se une a este complejo sobre la superficie plaquetaria (marcándola para destrucción, produciendo la trombocitopenia) sino que además se une simultáneamente al receptor Fc de la propia plaqueta, activándola directamente y generando la liberación de micropartículas procoagulantes que producen un estado de hipercoagulabilidad sistémica, explicando por qué la HIT se asocia paradójicamente a trombosis pese al recuento plaquetario bajo.',
      epidemiologia: 'La HIT es considerablemente más frecuente con heparina no fraccionada que con heparina de bajo peso molecular, y más frecuente en el contexto postoperatorio (particularmente cirugía cardiaca y ortopédica) que en el paciente médico; con frecuencia se presenta entre el día 5 y 10 de exposición en el paciente sin exposición previa reciente.',
      factores_riesgo: ['Exposición a heparina no fraccionada (mayor riesgo que heparina de bajo peso molecular)', 'Contexto postoperatorio, particularmente cirugía cardiaca u ortopédica mayor', 'Exposición previa a heparina en los últimos 30-100 días (riesgo de inicio más rápido, &lt;24 horas, en la reexposición)', 'Sexo femenino (mayor incidencia reportada en algunas series)'],
      clinica: 'Caída del recuento plaquetario característicamente entre el día 5 y 10 tras iniciar heparina (o más rápida, incluso horas, en el paciente con exposición previa reciente); trombosis venosa (más frecuente) o arterial de nueva aparición, necrosis cutánea en el sitio de inyección de heparina, o una reacción sistémica aguda (fiebre, escalofríos, disnea) tras un bolo intravenoso de heparina.',
      criterios_dx: '4T Score (calculadora) de probabilidad intermedia-alta, confirmado con inmunoensayo de anticuerpos anti-PF4/heparina y, cuando esté disponible, un ensayo funcional (agregación inducida por heparina o liberación de serotonina) de mayor especificidad.',
      laboratorio: 'Biometría hemática seriada con recuento plaquetario; anticuerpos anti-PF4/heparina; ensayo funcional confirmatorio si el inmunoensayo es positivo y la sospecha clínica (4T Score) es intermedia-alta.',
      imagen: 'Ecografía Doppler venosa de rutina en la HIT confirmada (incluso sin síntomas trombóticos evidentes), dado el alto riesgo trombótico asociado incluso en ausencia de manifestación clínica inicial.',
      complementarios: 'Suspensión inmediata de toda fuente de heparina (incluyendo lavados de catéter con heparina) ante sospecha razonable, sin esperar la confirmación serológica, dado el riesgo trombótico que aumenta con cada día de exposición continuada.',
      dx_diferencial: 'Otras causas de trombocitopenia en el paciente hospitalizado (sepsis, coagulación intravascular diseminada, otros fármacos), trombocitopenia farmacológica no-HIT (sin el patrón temporal característico ni el riesgo trombótico paradójico).',
      tx_medico: 'Suspensión inmediata de toda heparina ante sospecha razonable (4T Score intermedio-alto), sin esperar la confirmación serológica; inicio de un anticoagulante alternativo no heparínico dado el alto riesgo trombótico, incluso en ausencia de trombosis clínicamente evidente al momento del diagnóstico.',
      tx_farmacologico: 'Anticoagulantes no heparínicos (argatrobán, bivalirudina, o fondaparinux según disponibilidad y contexto clínico) en lugar de heparina; evitar específicamente la warfarina en la fase aguda antes de que el recuento plaquetario se haya recuperado sustancialmente, dado el riesgo de necrosis cutánea inducida por warfarina y de gangrena de extremidades en este contexto específico.',
      tx_intervencionista: 'No aplica de forma directa más allá del manejo estándar de una trombosis ya establecida según su localización.',
      criterios_uci: 'Trombosis extensa con compromiso hemodinámico o de órgano (embolia pulmonar masiva, isquemia de extremidad), necrosis cutánea extensa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia del recuento plaquetario seriado tras la suspensión de heparina y el inicio del anticoagulante alternativo; vigilancia de nuevos eventos trombóticos.',
      seguimiento_ambulatorio: 'Documentación explícita y permanente en el expediente de la alergia/reacción a heparina, dado el riesgo de recurrencia ante una reexposición futura; anticoagulación de mantenimiento con un agente no heparínico durante el periodo recomendado tras el evento.',
      pronostico: 'El reconocimiento y tratamiento oportunos (suspensión de heparina + anticoagulación alternativa inmediata) reducen sustancialmente el riesgo de complicaciones trombóticas mayores; el retraso diagnóstico se asocia a un riesgo trombótico acumulado considerablemente mayor.',
      algoritmo: ['Caída de plaquetas en paciente con exposición a heparina → calcular 4T Score (calculadora)', 'Score intermedio-alto → suspender toda heparina de inmediato, sin esperar confirmación serológica', 'Iniciar anticoagulante no heparínico (argatrobán, bivalirudina, o fondaparinux)', 'Confirmar con anticuerpos anti-PF4/heparina ± ensayo funcional', 'Ecografía Doppler venosa de rutina incluso sin síntomas trombóticos evidentes; evitar warfarina hasta recuperación plaquetaria sustancial']
    },
    {
      nombre: 'Pseudotrombocitopenia y trombocitopenia gestacional',
      color: '#8a6a1f',
      definicion: 'Dos trampas diagnósticas benignas agrupadas por su potencial de generar estudio o tratamiento innecesario si no se reconocen: la pseudotrombocitopenia, un artefacto de laboratorio por agregación plaquetaria inducida por el anticoagulante EDTA del tubo de recolección estándar, que produce un recuento automatizado falsamente bajo; y la trombocitopenia gestacional, una caída leve y fisiológica del recuento plaquetario que ocurre en una proporción considerable de los embarazos normales sin ninguna significancia patológica.',
      fisiopatologia: 'En la pseudotrombocitopenia, el EDTA del tubo de recolección estándar, en un subgrupo de pacientes con un autoanticuerpo específico dependiente de EDTA (con frecuencia dirigido contra un neoepítopo de la glucoproteína IIb/IIIa expuesto solo en presencia de EDTA), induce la agregación in vitro de las plaquetas tras la extracción; el contador automatizado no reconoce estos agregados como plaquetas individuales, reportando un recuento falsamente bajo pese a que el recuento plaquetario in vivo del paciente es completamente normal. En la trombocitopenia gestacional, la hemodilución fisiológica del embarazo (aumento del volumen plasmático desproporcionado al aumento de la masa eritrocitaria y plaquetaria) junto con un ligero aumento del recambio plaquetario placentario produce una caída leve y autolimitada del recuento, típicamente en el tercer trimestre, sin ningún mecanismo inmune ni patológico subyacente.',
      epidemiologia: 'La pseudotrombocitopenia es infrecuente en términos absolutos pero un hallazgo reconocido y con frecuencia subdiagnosticado en la práctica de laboratorio rutinaria; la trombocitopenia gestacional es la causa más frecuente de trombocitopenia leve durante el embarazo, presente en una proporción considerable de los embarazos normales hacia el tercer trimestre.',
      factores_riesgo: ['Ninguno específico identificado para la pseudotrombocitopenia más allá de la presencia del autoanticuerpo dependiente de EDTA', 'Embarazo en curso, particularmente en el tercer trimestre, para la trombocitopenia gestacional'],
      clinica: 'Ambas entidades son completamente asintomáticas por definición: la pseudotrombocitopenia no representa ninguna trombocitopenia real (el paciente no tiene ningún riesgo de sangrado), y la trombocitopenia gestacional es leve y no se asocia a manifestaciones hemorrágicas ni a ninguna otra anomalía materna o fetal.',
      criterios_dx: 'Pseudotrombocitopenia: recuento plaquetario que se normaliza al repetir la muestra en un tubo con citrato (o heparina) en lugar de EDTA, confirmando el artefacto. Trombocitopenia gestacional: recuento plaquetario habitualmente &gt;100,000/µL (con frecuencia 100,000-150,000/µL), sin proteinuria, sin hipertensión, sin otra citopenia, y sin antecedente de trombocitopenia previa al embarazo.',
      laboratorio: 'Repetir el recuento plaquetario en tubo con citrato ante sospecha de pseudotrombocitopenia (frotis con agregados plaquetarios visibles pese al recuento automatizado bajo); biometría hemática, pruebas de función hepática, y estudio de proteinuria para descartar preeclampsia/síndrome HELLP en la embarazada con trombocitopenia (ver el diagnóstico diferencial).',
      imagen: 'No indicada para ninguna de las 2 entidades.',
      complementarios: 'Revisión del frotis de sangre periférica, que muestra directamente los agregados plaquetarios característicos en la pseudotrombocitopenia, con frecuencia la pista inicial que motiva la sospecha.',
      dx_diferencial: 'Para la trombocitopenia gestacional: preeclampsia/síndrome HELLP (hipertensión, proteinuria, alteración de pruebas hepáticas, trombocitopenia con frecuencia más marcada), PTI de novo o preexistente en el embarazo (recuento con frecuencia más bajo, puede preceder al embarazo), microangiopatía trombótica del embarazo (esquistocitos presentes, cuadro más grave).',
      tx_medico: 'Ninguno específico para ninguna de las 2 entidades: la pseudotrombocitopenia no requiere ningún tratamiento una vez confirmado el artefacto (y debe documentarse claramente en el expediente para evitar estudios repetidos innecesarios en el futuro); la trombocitopenia gestacional se resuelve espontáneamente tras el parto y no requiere ninguna intervención específica durante el embarazo.',
      tx_farmacologico: 'No aplica a ninguna de las 2 entidades.',
      tx_intervencionista: 'No aplica a ninguna de las 2 entidades.',
      criterios_uci: 'No aplica a ninguna de las 2 entidades en sí.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'No aplica de rutina a ninguna de las 2 entidades.',
      seguimiento_ambulatorio: 'Documentación explícita en el expediente de la pseudotrombocitopenia confirmada para evitar repetir estudios innecesarios en el futuro; vigilancia obstétrica estándar del embarazo en curso con recuento plaquetario de control, sin necesidad de manejo especializado adicional si el cuadro permanece consistente con trombocitopenia gestacional benigna.',
      pronostico: 'Excelente para ambas entidades: la pseudotrombocitopenia no representa ningún riesgo real, y la trombocitopenia gestacional se resuelve espontáneamente tras el parto sin secuelas.',
      algoritmo: ['Trombocitopenia "sorpresa" sin ninguna manifestación clínica → sospechar pseudotrombocitopenia', 'Revisar frotis de sangre periférica en busca de agregados plaquetarios', 'Repetir el recuento en tubo con citrato para confirmar/descartar el artefacto', 'Trombocitopenia leve en el tercer trimestre sin hipertensión/proteinuria/otra citopenia → trombocitopenia gestacional benigna', 'Descartar activamente preeclampsia/HELLP y PTI antes de atribuir la trombocitopenia del embarazo a la forma gestacional benigna']
    },
    {
      nombre: 'Trombocitosis reactiva/secundaria',
      color: '#3f6b52',
      definicion: 'Elevación del recuento plaquetario en respuesta a un estímulo identificable (inflamación, infección, ferropenia, asplenia, neoplasia, o recuperación de una trombocitopenia previa), la causa más frecuente de trombocitosis en la práctica clínica, distinta de la trombocitemia esencial (proliferación clonal autónoma de un síndrome mieloproliferativo, ver ese tema) tanto en mecanismo como en riesgo trombótico asociado.',
      fisiopatologia: 'La mayoría de los estímulos que producen trombocitosis reactiva actúan a través del aumento de la producción hepática de trombopoyetina (mediada por citocinas inflamatorias, particularmente la interleucina-6, que se eleva en el contexto inflamatorio/infeccioso y estimula directamente la síntesis hepática de trombopoyetina) o, en el caso de la ferropenia, por un mecanismo menos completamente dilucidado pero consistentemente observado; a diferencia de la trombocitemia esencial, donde la proliferación megacariocítica es autónoma y clonal (independiente de la regulación fisiológica normal), en la trombocitosis reactiva la producción plaquetaria aumentada permanece bajo control regulatorio normal y se resuelve al tratar la causa subyacente.',
      epidemiologia: 'Considerablemente más frecuente que la trombocitemia esencial; se identifica una causa reactiva evidente en la gran mayoría de los pacientes adultos con trombocitosis incidental estudiados sistemáticamente.',
      factores_riesgo: ['Infección o inflamación aguda/crónica activa', 'Ferropenia (particularmente cuando la trombocitosis se identifica junto con anemia microcítica)', 'Asplenia anatómica (posesplenectomía) o funcional', 'Neoplasia activa de cualquier tipo', 'Recuperación de una trombocitopenia previa (efecto rebote) o de una hemorragia aguda reciente'],
      clinica: 'Habitualmente asintomática, con el recuento plaquetario elevado identificado incidentalmente en una biometría hemática solicitada por otro motivo (con frecuencia en el contexto de la enfermedad causal que motivó el estudio inicial: fiebre, síntomas de ferropenia, síntomas de la neoplasia de base).',
      criterios_dx: 'Recuento plaquetario elevado con identificación clínica o de laboratorio de una causa reactiva plausible (marcadores inflamatorios elevados, ferropenia documentada, asplenia conocida, neoplasia activa); la ausencia de cualquier causa identificable tras un estudio razonable orienta hacia la consideración de trombocitemia esencial.',
      laboratorio: 'Biometría hemática completa con frotis (morfología plaquetaria habitualmente normal, a diferencia de la frecuente anisocitosis plaquetaria de la trombocitemia esencial), marcadores inflamatorios (proteína C reactiva, velocidad de sedimentación globular), estudio de hierro si hay sospecha de ferropenia asociada.',
      imagen: 'Dirigida según la sospecha clínica de la causa subyacente (búsqueda de un foco infeccioso, una neoplasia, o confirmación de asplenia si no está ya documentada).',
      complementarios: 'Estudio molecular de mutaciones driver (JAK2, CALR, MPL) reservado para los casos donde no se identifica ninguna causa reactiva plausible tras un estudio razonable, para evaluar la posibilidad de trombocitemia esencial (ver el tema de Síndromes Mieloproliferativos para el desarrollo completo).',
      dx_diferencial: 'Trombocitemia esencial (proliferación clonal autónoma, ver el tema de Síndromes Mieloproliferativos, particularmente quirúrgica cuando no se identifica ninguna causa reactiva evidente), otras neoplasias mieloproliferativas con trombocitosis asociada.',
      tx_medico: 'Tratamiento dirigido a la causa reactiva subyacente como medida central (tratar la infección, corregir la ferropenia, manejar la neoplasia de base); la trombocitosis reactiva en sí no requiere tratamiento citorreductor ni antiagregante específico en la gran mayoría de los casos, dado que no comparte el riesgo trombótico intrínseco de la trombocitemia esencial.',
      tx_farmacologico: 'Ninguno dirigido a la trombocitosis en sí; el manejo se centra por completo en la causa reactiva identificada.',
      tx_intervencionista: 'No aplica de forma directa a la trombocitosis en sí.',
      criterios_uci: 'No aplica de forma directa a esta entidad en sí, salvo por la gravedad de la causa reactiva subyacente (por ejemplo, sepsis grave).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia del recuento plaquetario en paralelo con el tratamiento de la causa reactiva identificada; se espera normalización progresiva al resolverse la causa.',
      seguimiento_ambulatorio: 'Repetir la biometría hemática tras resolver la causa reactiva identificada para confirmar la normalización esperada del recuento plaquetario; si la trombocitosis persiste sin causa reactiva identificable, reconsiderar el estudio de trombocitemia esencial.',
      pronostico: 'Excelente una vez identificada y tratada la causa subyacente, con normalización esperada del recuento plaquetario; el riesgo trombótico de la trombocitosis reactiva en sí es considerablemente menor que el de la trombocitemia esencial, dado que no comparte su mecanismo clonal.',
      algoritmo: ['Trombocitosis incidental → buscar activamente una causa reactiva (infección, inflamación, ferropenia, asplenia, neoplasia)', 'Marcadores inflamatorios y estudio de hierro dirigidos', 'Causa reactiva identificada → tratarla y repetir biometría hemática tras su resolución', 'Trombocitosis persistente sin causa reactiva identificable tras estudio razonable → considerar estudio molecular (JAK2, CALR, MPL)', 'No indicar tratamiento citorreductor ni antiagregante específico a menos que se confirme trombocitemia esencial u otra indicación específica']
    },
    {
      nombre: 'Hemorragia grave por trombocitopenia',
      color: '#8c3a34',
      definicion: 'Espectro de complicaciones hemorrágicas asociadas a trombocitopenia grave, desde el sangrado mucocutáneo significativo hasta la hemorragia intracraneal espontánea, la complicación más temida aunque infrecuente, particularmente relevante en la PTI grave no tratada oportunamente.',
      fisiopatologia: 'Las plaquetas cumplen un papel central en la hemostasia primaria, formando el tapón plaquetario inicial que sella una lesión vascular antes de que se complete la cascada de coagulación; por debajo de un umbral crítico de recuento plaquetario (con frecuencia considerado alrededor de 10,000-20,000/µL para el riesgo de sangrado espontáneo grave, aunque el umbral exacto varía considerablemente entre individuos y contextos clínicos), este mecanismo de hemostasia primaria falla, permitiendo sangrado espontáneo incluso sin traumatismo identificable, particularmente en sitios de alta vascularización o presión mecánica (mucosas, sistema nervioso central).',
      epidemiologia: 'La hemorragia intracraneal espontánea es infrecuente incluso en la trombocitopenia grave, pero representa la causa más importante de mortalidad directamente atribuible a la PTI cuando ocurre, por lo que su prevención mediante tratamiento oportuno de la trombocitopenia grave sintomática es una prioridad clínica central.',
      factores_riesgo: ['Recuento plaquetario muy bajo (particularmente &lt;10,000-20,000/µL)', 'Sangrado mucoso ya presente como signo de alarma de progresión (particularmente sangrado húmedo: gingivorragia, epistaxis, hematuria, sangrado gastrointestinal, considerado de mayor riesgo que el sangrado cutáneo aislado)', 'Traumatismo craneal, incluso menor, en el paciente con trombocitopenia grave', 'Uso concomitante de antiagregantes o anticoagulantes', 'Edad avanzada'],
      clinica: `Petequias y púrpura extensas, sangrado mucoso húmedo (gingivorragia espontánea, epistaxis prolongada, hematuria, sangrado gastrointestinal), y en el peor de los casos, cefalea súbita intensa, alteración del estado de conciencia, o déficit neurológico focal sugestivos de hemorragia intracraneal.${figBlock('Imagen 2', 'Púrpura cutánea por trombocitopenia', '<img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Purpura.jpg" alt="Manchas purpúricas cutáneas, el hallazgo clínico característico de la trombocitopenia grave (sangrado espontáneo por falla de la hemostasia primaria)." style="width:100%;max-width:340px;display:block;margin:0 auto;border-radius:var(--radius);border:1px solid var(--line);">')}`,
      criterios_dx: 'Diagnóstico clínico del sangrado activo en un paciente con trombocitopenia grave documentada; TC cerebral urgente ante cualquier síntoma neurológico nuevo para confirmar o descartar hemorragia intracraneal.',
      laboratorio: 'Recuento plaquetario urgente para confirmar la gravedad; tipo y pruebas cruzadas de sangre ante la posibilidad de transfusión de hemoderivados.',
      imagen: 'TC cerebral simple urgente ante cualquier síntoma neurológico nuevo en el paciente con trombocitopenia grave, sin demora.',
      complementarios: 'Evaluación de "signos húmedos" (sangrado de mucosas) como marcador clínico de mayor riesgo de progresión a sangrado grave, útil para la estratificación clínica de la urgencia del tratamiento.',
      dx_diferencial: 'Otras causas de sangrado en el paciente con trombocitopenia (coagulopatía asociada concomitante, disfunción plaquetaria cualitativa sobreañadida por fármacos antiagregantes).',
      tx_medico: 'Elevación urgente del recuento plaquetario mediante el tratamiento específico de la causa de base (corticoides e inmunoglobulina intravenosa en la PTI) como medida central; transfusión de plaquetas en el sangrado grave con compromiso vital (particularmente hemorragia intracraneal), reconociendo que su eficacia puede ser limitada en la PTI dado que las plaquetas transfundidas también son blanco del autoanticuerpo circulante, aunque se transfunden de todas formas ante una urgencia vital.',
      tx_farmacologico: 'Corticoides en dosis altas e inmunoglobulina intravenosa de acción rápida ante sangrado grave por PTI; ácido tranexámico como adyuvante para el sangrado mucoso; transfusión de plaquetas ante sangrado con compromiso vital.',
      tx_intervencionista: 'Manejo neuroquirúrgico según indicación estándar si hay hemorragia intracraneal con criterios de evacuación.',
      criterios_uci: 'Hemorragia intracraneal, sangrado con compromiso hemodinámico de cualquier localización.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia neurológica y hemodinámica estrecha durante el manejo del sangrado agudo grave; recuento plaquetario seriado para documentar la respuesta al tratamiento.',
      seguimiento_ambulatorio: 'Educación del paciente sobre los signos de alarma (sangrado mucoso húmedo, cefalea súbita) que requieren atención médica urgente; seguimiento hematológico continuado del trastorno de base.',
      pronostico: 'La mayoría de los episodios de sangrado por trombocitopenia son leves-moderados y responden bien al tratamiento; la hemorragia intracraneal, aunque infrecuente, conlleva un pronóstico considerablemente más grave si no se reconoce y trata con prontitud.',
      algoritmo: ['Trombocitopenia grave + signos húmedos de sangrado mucoso → considerar de alto riesgo de progresión', 'Tratamiento urgente dirigido a elevar el recuento plaquetario (corticoides + inmunoglobulina intravenosa en PTI)', 'Cualquier síntoma neurológico nuevo → TC cerebral urgente sin demora', 'Sangrado con compromiso vital → transfusión de plaquetas pese a su eficacia potencialmente limitada en PTI', 'Educación sobre signos de alarma para consulta urgente futura']
    },
    {
      nombre: 'Trombosis paradójica en HIT',
      color: '#6b3d5c',
      definicion: 'La complicación central y definitoria de la trombocitopenia inducida por heparina: trombosis venosa (más frecuente) o arterial que ocurre pese al recuento plaquetario bajo, un fenómeno contraintuitivo que distingue fundamentalmente a la HIT de la mayoría de las demás causas de trombocitopenia (donde el riesgo predominante es hemorrágico, no trombótico).',
      fisiopatologia: 'El anticuerpo anti-PF4/heparina activa directamente a las plaquetas a través de su receptor Fc (además de marcarlas para destrucción, produciendo la trombocitopenia), generando la liberación de micropartículas procoagulantes ricas en fosfolípidos de superficie que aceleran la generación de trombina; simultáneamente, el mismo complejo inmune activa al endotelio vascular y a los monocitos circulantes, amplificando aún más el estado protrombótico sistémico; el resultado neto es una hipercoagulabilidad generalizada que explica por qué el riesgo trombótico en la HIT no confirmada y no tratada es considerablemente alto pese a (y en cierto sentido debido a) la trombocitopenia asociada.',
      epidemiologia: 'La trombosis ocurre en una proporción considerable de los pacientes con HIT confirmada no tratada, con una relación aproximada de 4 eventos trombóticos por cada caso de sangrado significativo, un patrón opuesto al de la mayoría de las otras causas de trombocitopenia de este tema.',
      factores_riesgo: ['HIT confirmada o fuertemente sospechada sin suspensión oportuna de heparina', 'Continuación de heparina pese a la caída del recuento plaquetario sin reconocer la causa', 'Ausencia de anticoagulación alternativa iniciada oportunamente tras suspender heparina'],
      clinica: 'Trombosis venosa profunda de miembros (la manifestación más frecuente), embolia pulmonar, trombosis arterial (isquemia de extremidad, evento cerebrovascular), necrosis cutánea en el sitio de inyección de heparina, y en casos graves, gangrena de extremidades (particularmente si se administra warfarina de forma inapropiada antes de la recuperación plaquetaria).',
      criterios_dx: 'Confirmación por imagen del evento trombótico (ecografía Doppler venosa, angio-TC, u otro estudio según el sitio sospechado) en un paciente con HIT confirmada o fuertemente sospechada por 4T Score.',
      laboratorio: 'Igual que el estudio diagnóstico de la HIT en sí (anticuerpos anti-PF4/heparina, ensayo funcional); dímero D como apoyo inespecífico ante sospecha de un nuevo evento trombótico.',
      imagen: 'Ecografía Doppler venosa de rutina en todo paciente con HIT confirmada, incluso sin síntomas evidentes, dado el riesgo trombótico subclínico reconocido; angio-TC pulmonar o estudio dirigido según el sitio sospechado ante síntomas específicos.',
      complementarios: 'Vigilancia clínica activa y sistemática de nuevos signos o síntomas trombóticos en todo paciente con HIT confirmada durante la fase aguda del tratamiento.',
      dx_diferencial: 'Otras causas de trombosis en el paciente hospitalizado (trombofilia de base, inmovilización prolongada, neoplasia activa, ver el tema de Trastornos de la Coagulación y Trombofilias), que pueden coexistir con la HIT.',
      tx_medico: 'Suspensión inmediata de toda heparina e inicio urgente de un anticoagulante no heparínico ante cualquier sospecha razonable de HIT, sin esperar la confirmación serológica, dado que cada día adicional de exposición a heparina aumenta el riesgo trombótico acumulado.',
      tx_farmacologico: 'Argatrobán, bivalirudina, o fondaparinux como anticoagulantes de elección en la fase aguda; evitar específicamente la warfarina hasta que el recuento plaquetario se haya recuperado sustancialmente (con frecuencia &gt;150,000/µL), dado el riesgo de necrosis cutánea y gangrena de extremidades asociado a su inicio prematuro en este contexto específico (por la caída transitoria adicional de proteína C que produce la warfarina al inicio de su efecto).',
      tx_intervencionista: 'Manejo intervencionista estándar de un evento trombótico mayor ya establecido según su localización (trombectomía, filtro de vena cava inferior en casos seleccionados con contraindicación a la anticoagulación).',
      criterios_uci: 'Embolia pulmonar masiva, isquemia arterial de extremidad con compromiso significativo, evento cerebrovascular con compromiso neurológico.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia clínica activa de nuevos eventos trombóticos durante toda la fase aguda; recuento plaquetario seriado para determinar el momento seguro de transición a warfarina.',
      seguimiento_ambulatorio: 'Anticoagulación de mantenimiento con un agente no heparínico (transicionando a warfarina solo tras recuperación plaquetaria sustancial) durante el periodo recomendado; documentación permanente de la alergia a heparina en el expediente.',
      pronostico: 'El reconocimiento oportuno con suspensión inmediata de heparina y anticoagulación alternativa temprana reduce sustancialmente el riesgo de trombosis mayor; la HIT no reconocida con continuación de heparina conlleva un riesgo trombótico acumulado considerablemente alto.',
      algoritmo: ['HIT confirmada o fuertemente sospechada (4T Score intermedio-alto) → suspender heparina de inmediato', 'Iniciar anticoagulante no heparínico urgente sin esperar confirmación serológica', 'Ecografía Doppler venosa de rutina incluso sin síntomas evidentes', 'Vigilancia clínica activa de nuevos eventos trombóticos durante toda la fase aguda', 'Evitar warfarina hasta recuperación plaquetaria sustancial (&gt;150,000/µL) para prevenir necrosis cutánea/gangrena']
    },
    {
      nombre: 'Esplenectomía en PTI refractaria',
      color: '#6b4a2e',
      definicion: 'Manejo definitivo considerado en la púrpura trombocitopénica inmune crónica refractaria a múltiples líneas de tratamiento médico: la esplenectomía elimina el sitio principal de destrucción plaquetaria mediada por anticuerpos, logrando remisión duradera en una proporción considerable de los pacientes seleccionados, aunque a costa del riesgo permanente de sepsis post-esplenectomía (ver el tema de Hiperesplenismo para el desarrollo completo de esa complicación).',
      fisiopatologia: 'El bazo cumple 2 papeles en la fisiopatología de la PTI: es el sitio principal donde los macrófagos esplénicos fagocitan las plaquetas recubiertas de autoanticuerpo (el mecanismo efector de la destrucción plaquetaria), y es además, en muchos casos, un sitio relevante de producción del autoanticuerpo en sí; por ambos motivos, su remoción quirúrgica elimina simultáneamente el sitio de destrucción y una fuente relevante de producción del anticuerpo patogénico, explicando por qué logra remisión duradera en una proporción considerable de los pacientes que no respondieron adecuadamente al tratamiento médico.',
      epidemiologia: 'Considerada en una minoría de los pacientes con PTI, específicamente aquellos con enfermedad crónica (definida convencionalmente como persistencia más allá de 12 meses) refractaria a corticoides, inmunoglobulina intravenosa, y con frecuencia también a agonistas de trombopoyetina o rituximab.',
      factores_riesgo: ['PTI crónica (&gt;12 meses de evolución) sin remisión sostenida', 'Falta de respuesta adecuada a al menos 2 líneas de tratamiento médico previo', 'Trombocitopenia sintomática recurrente que afecta significativamente la calidad de vida o el riesgo de sangrado'],
      clinica: 'No tiene una presentación clínica propia; es una decisión terapéutica electiva tomada en el contexto de la PTI crónica refractaria ya caracterizada, no una complicación aguda en sí misma.',
      criterios_dx: 'No aplica un criterio diagnóstico propio; la indicación se basa en el cumplimiento de los criterios de cronicidad y refractariedad de la PTI de base tras el fracaso documentado de las líneas de tratamiento médico previas.',
      laboratorio: 'Vigilancia del recuento plaquetario antes y después del procedimiento para documentar la respuesta.',
      imagen: 'Estudio de imagen abdominal preoperatorio estándar para la planeación quirúrgica; evaluación de bazo accesorio (una causa reconocida de recaída tras esplenectomía aparentemente exitosa si no se identifica y reseca en el mismo procedimiento).',
      complementarios: 'Vacunación completa contra organismos encapsulados idealmente 2 semanas antes del procedimiento electivo (ver el tema de Hiperesplenismo para el desarrollo completo de la profilaxis post-esplenectomía).',
      dx_diferencial: 'No aplica un diagnóstico diferencial propio a esta decisión terapéutica.',
      tx_medico: 'Preparación preoperatoria con elevación transitoria del recuento plaquetario (corticoides o inmunoglobulina intravenosa de acción rápida) antes del procedimiento quirúrgico para reducir el riesgo hemorrágico perioperatorio.',
      tx_farmacologico: 'Vacunación completa contra Streptococcus pneumoniae, Haemophilus influenzae tipo b, y Neisseria meningitidis antes del procedimiento; profilaxis antibiótica perioperatoria estándar.',
      tx_intervencionista: 'Esplenectomía, preferentemente por vía laparoscópica cuando sea técnicamente factible, con búsqueda activa e intraoperatoria de bazo accesorio.',
      criterios_uci: 'Complicaciones perioperatorias graves infrecuentes (sangrado mayor, complicaciones anestésicas).',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia perioperatoria estándar del recuento plaquetario y de posibles complicaciones quirúrgicas inmediatas.',
      seguimiento_ambulatorio: 'Vigilancia a largo plazo del riesgo de sepsis post-esplenectomía (ver el tema de Hiperesplenismo: profilaxis vacunal continuada, umbral bajo para antibióticos empíricos ante fiebre); vigilancia del recuento plaquetario para documentar la respuesta duradera o detectar recaída (incluyendo la posibilidad de bazo accesorio no resecado).',
      pronostico: 'Logra remisión duradera sin necesidad de tratamiento médico adicional en una proporción considerable de los pacientes seleccionados apropiadamente; el riesgo de sepsis post-esplenectomía persiste de por vida, por lo que la decisión requiere sopesar cuidadosamente este riesgo permanente contra el beneficio hematológico esperado.',
      algoritmo: ['PTI crónica (&gt;12 meses) refractaria a al menos 2 líneas de tratamiento médico → considerar esplenectomía', 'Vacunación completa contra organismos encapsulados, idealmente 2 semanas antes del procedimiento', 'Elevación transitoria preoperatoria del recuento plaquetario si es necesario para reducir el riesgo hemorrágico', 'Esplenectomía con búsqueda activa de bazo accesorio', 'Vigilancia a largo plazo del riesgo de sepsis post-esplenectomía de por vida']
    },
    {
      nombre: 'Complicaciones tromboembólicas de trombocitosis extrema',
      color: '#3d5a73',
      definicion: 'Espectro de complicaciones trombóticas (y, paradójicamente, en ocasiones también hemorrágicas por disfunción plaquetaria adquirida) asociadas a un recuento plaquetario extremadamente elevado, particularmente relevante en la trombocitosis reactiva grave o, con mayor frecuencia proporcional, en la trombocitemia esencial (ver el tema de Síndromes Mieloproliferativos), donde el riesgo trombótico es intrínseco al mecanismo clonal de la enfermedad.',
      fisiopatologia: 'Un recuento plaquetario muy elevado aumenta directamente la viscosidad sanguínea y la probabilidad de interacción plaqueta-plaqueta y plaqueta-endotelio, favoreciendo la formación de trombos tanto venosos como arteriales (ver el tema de Síndrome de Hiperviscosidad para el desarrollo completo del mecanismo de hiperviscosidad celular); paradójicamente, en la trombocitosis extrema (particularmente por encima de aproximadamente 1,000,000-1,500,000/µL) puede desarrollarse también un riesgo hemorrágico por un fenómeno de enfermedad de von Willebrand adquirida, en el que las plaquetas en exceso absorben y depuran de la circulación los multímeros de mayor peso molecular del factor de von Willebrand (los más hemostáticamente activos), produciendo una deficiencia funcional relativa pese al recuento plaquetario alto.',
      epidemiologia: 'El riesgo trombótico es proporcionalmente mayor en la trombocitosis de mecanismo clonal (trombocitemia esencial) que en la reactiva pura, aunque la trombocitosis reactiva extrema (particularmente en el contexto de un estado inflamatorio o neoplásico concomitante que ya de por sí aumenta el riesgo trombótico) no está exenta de este riesgo.',
      factores_riesgo: ['Recuento plaquetario extremadamente elevado, particularmente &gt;1,000,000/µL', 'Trombocitemia esencial de base (mecanismo clonal, mayor riesgo intrínseco que la trombocitosis reactiva)', 'Factores de riesgo cardiovascular concomitantes (edad avanzada, tabaquismo, hipertensión)', 'Antecedente trombótico previo'],
      clinica: 'Eventos trombóticos venosos o arteriales según el sitio afectado (similar en presentación a los descritos en el tema de Trastornos de la Coagulación y Trombofilias); en la trombocitosis extrema con enfermedad de von Willebrand adquirida asociada, sangrado mucocutáneo paradójico pese al recuento plaquetario elevado.',
      criterios_dx: 'Confirmación por imagen del evento trombótico en un paciente con trombocitosis extrema documentada; estudio del factor de von Willebrand (antígeno, actividad, y estudio de multímeros) si hay sangrado mucocutáneo inexplicado pese al recuento plaquetario alto.',
      laboratorio: 'Biometría hemática con recuento plaquetario; estudio del factor de von Willebrand (antígeno, actividad del cofactor de ristocetina, multímeros) si hay sospecha de la forma adquirida asociada a trombocitosis extrema.',
      imagen: 'Ecografía Doppler venosa o angio-TC según el sitio del evento trombótico sospechado.',
      complementarios: 'Estudio molecular de mutaciones driver (JAK2, CALR, MPL) si aún no se ha realizado, para distinguir el mecanismo reactivo del clonal, dado que orienta sustancialmente el manejo a largo plazo del riesgo trombótico.',
      dx_diferencial: 'Trombosis por otra causa concomitante (trombofilia de base, ver el tema de Trastornos de la Coagulación y Trombofilias), otras causas de sangrado mucocutáneo en el paciente con trombocitosis (descartar otras causas antes de atribuir el sangrado a la enfermedad de von Willebrand adquirida).',
      tx_medico: 'Citorreducción del recuento plaquetario ante trombocitosis extrema sintomática o con evento trombótico ya establecido, particularmente cuando el mecanismo es clonal (trombocitemia esencial); tratamiento de la causa reactiva subyacente cuando el mecanismo es reactivo.',
      tx_farmacologico: 'Hidroxiurea como citorreductor de primera línea en la trombocitemia esencial de alto riesgo con trombocitosis extrema; ácido acetilsalicílico en dosis bajas para reducción del riesgo trombótico, con precaución (o evitando) en el paciente con enfermedad de von Willebrand adquirida documentada, dado el riesgo hemorrágico adicional en ese contexto específico.',
      tx_intervencionista: 'Plaquetaféresis considerada en casos seleccionados de urgencia trombótica aguda con trombocitosis extrema, como medida temporal de reducción rápida mientras se inicia la citorreducción farmacológica de mantenimiento.',
      criterios_uci: 'Evento trombótico mayor con compromiso hemodinámico o de órgano, sangrado grave asociado a enfermedad de von Willebrand adquirida.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'No aplica.',
      seguimiento_hospitalario: 'Vigilancia del recuento plaquetario seriado durante la citorreducción aguda; vigilancia de nuevos eventos trombóticos o hemorrágicos.',
      seguimiento_ambulatorio: 'Vigilancia a largo plazo del recuento plaquetario y del riesgo trombótico, particularmente en la trombocitemia esencial de base (ver el tema de Síndromes Mieloproliferativos para el manejo continuado específico de esa enfermedad).',
      pronostico: 'Favorable con la citorreducción apropiada del recuento plaquetario extremo, particularmente cuando se reconoce y corrige la enfermedad de von Willebrand adquirida antes de que produzca un sangrado grave; el riesgo trombótico a largo plazo depende sustancialmente de si el mecanismo subyacente es reactivo (menor riesgo, se resuelve con la causa) o clonal (mayor riesgo, requiere manejo continuado).',
      algoritmo: ['Trombocitosis extrema (particularmente &gt;1,000,000/µL) → evaluar riesgo trombótico y hemorrágico simultáneamente', 'Distinguir mecanismo reactivo de clonal (estudio molecular JAK2/CALR/MPL si no está ya establecido)', 'Sangrado mucocutáneo inexplicado → estudiar enfermedad de von Willebrand adquirida (antígeno, actividad, multímeros)', 'Evento trombótico o trombocitosis extrema sintomática → citorreducción (hidroxiurea) ± plaquetaféresis urgente', 'Ácido acetilsalicílico con precaución si hay enfermedad de von Willebrand adquirida documentada']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'El seguimiento intrahospitalario de este tema se centra en el manejo urgente del sangrado grave por trombocitopenia o del evento trombótico agudo por HIT, y en la preparación perioperatoria del paciente que requiere esplenectomía.',
    parametros: ['Recuento plaquetario seriado', 'Signos de sangrado activo (particularmente signos húmedos de mucosas) o de progresión de un evento trombótico', '4T Score reevaluado si aparece un nuevo factor durante la hospitalización'],
    criterios_uci_general: 'Hemorragia intracraneal, sangrado con compromiso hemodinámico, trombosis extensa con compromiso hemodinámico o de órgano en HIT.',
    criterios_tips_general: 'No aplica de forma directa a este tema.',
    criterios_trasplante_general: 'No aplica de forma directa a este tema.',
    prevencion: 'Umbral bajo de sospecha de HIT (4T Score sistemático) en todo paciente con caída del recuento plaquetario durante la exposición a heparina; vacunación completa contra organismos encapsulados antes de una esplenectomía electiva en PTI refractaria; documentación permanente en el expediente tanto de la pseudotrombocitopenia confirmada como de la alergia a heparina, para evitar estudios repetidos innecesarios o reexposición futura.'
  }
};

export const compCites = {
  'Púrpura Trombocitopénica Inmune (PTI)': [1, 2, 10],
  'Trombocitopenia inducida por fármacos y HIT': [3, 4, 5],
  'Pseudotrombocitopenia y trombocitopenia gestacional': [6, 7],
  'Trombocitosis reactiva/secundaria': [8, 9],
  'Hemorragia grave por trombocitopenia': [1, 13],
  'Trombosis paradójica en HIT': [5, 11, 12],
  'Esplenectomía en PTI refractaria': [2, 10],
  'Complicaciones tromboembólicas de trombocitosis extrema': [8, 9]
};
export const estigmas = [];
export const biopsia = null;
export const escalaRefs = {
  '4T Score para HIT': [3, 4]
};
export const escalaCalc = { '4T Score para HIT': '4t-hit' };
export const compGroups = [
  { name: 'Alteraciones plaquetarias por entidad (enfermedades)', items: ['Púrpura Trombocitopénica Inmune (PTI)', 'Trombocitopenia inducida por fármacos y HIT', 'Pseudotrombocitopenia y trombocitopenia gestacional', 'Trombocitosis reactiva/secundaria'] },
  { name: 'Complicaciones transversales', items: ['Hemorragia grave por trombocitopenia', 'Trombosis paradójica en HIT', 'Esplenectomía en PTI refractaria', 'Complicaciones tromboembólicas de trombocitosis extrema'] }
];
export const complicacionesIntro = 'Las 4 primeras tarjetas cubren las alteraciones plaquetarias cuantitativas por entidad, tanto trombocitopenia (PTI, HIT, pseudotrombocitopenia/gestacional) como trombocitosis (reactiva); las siguientes 4 son complicaciones transversales específicas de sangrado, trombosis, y manejo definitivo refractario.';
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
  root: { title: 'ALTERACIONES PLAQUETARIAS CUANTITATIVAS', color: '#8a6a1f', target: 'definicion' },
  branches: [
    { title: 'Trombocitopenia', sub: 'Recuento bajo', color: '#7a1f3d', target: 'diagnostico', leaves: [
      { title: 'Púrpura Trombocitopénica Inmune', sub: 'Destrucción por autoanticuerpo', color: '#7a1f3d', target: 'complicaciones' },
      { title: 'Fármacos y HIT', sub: 'Trombosis paradójica en HIT', color: '#3d5a73', target: 'complicaciones' },
      { title: 'Pseudotrombocitopenia y gestacional', sub: 'Trampas diagnósticas benignas', color: '#8a6a1f', target: 'complicaciones' }
    ] },
    { title: 'Trombocitosis', sub: 'Recuento elevado', color: '#3f6b52', target: 'diagnostico', leaves: [
      { title: 'Trombocitosis reactiva/secundaria', sub: 'La causa más frecuente', color: '#3f6b52', target: 'complicaciones' }
    ] },
    { title: 'Complicaciones transversales', sub: 'Sangrado, trombosis, manejo refractario', color: '#6b4a2e', target: 'complicaciones', leaves: [
      { title: 'Hemorragia grave por trombocitopenia', sub: 'Incluye hemorragia intracraneal', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Trombosis paradójica en HIT', sub: 'Pese al recuento bajo', color: '#6b3d5c', target: 'complicaciones' },
      { title: 'Esplenectomía en PTI refractaria', sub: 'Manejo definitivo', color: '#6b4a2e', target: 'complicaciones' },
      { title: 'Trombocitosis extrema', sub: 'Trombosis y von Willebrand adquirida', color: '#3d5a73', target: 'complicaciones' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 6], no_invasivos: [3] };
export const clasificacionCite = [3, 4];
export const seguimientoCite = [4, 5];
