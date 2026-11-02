// topics/tuberculosis/content.js: Tuberculosis.
// Cubre el item "Tuberculosis" del cluster Infecciones respiratorias (bloque III, Neumologia)
// del temario, incluidas la infeccion latente, las formas extrapulmonares y la resistencia.
//
// Fuentes principales: guia ATS/CDC/IDSA de 2016 sobre tratamiento de la tuberculosis sensible
// (la que hay en Bibliografia/); guias consolidadas de la OMS, Modulo 4: Tratamiento de la
// tuberculosis resistente, actualizacion de 2022 (tambien en Bibliografia/); ensayo Study 31 /
// A5349 sobre la pauta de 4 meses con rifapentina y moxifloxacino; ensayos Nix-TB y ZeNix sobre
// bedaquilina, pretomanid y linezolid; y las recomendaciones de la NTCA y los CDC de 2020 sobre
// el tratamiento de la infeccion tuberculosa latente.
//
// IMPORTANTE (ver memoria del proyecto): solo `diagnostico`, `clasificacion`, `complicaciones` y
// `seguimiento_intrahospitalario` van ANIDADOS dentro de `export const content = {...}`. Todo lo
// demas es un `export const` de nivel superior, HERMANO de `content`. `factores_riesgo` y
// `algoritmo` de cada ficha son ARRAY de strings (ver [[feedback-factores-riesgo-array]]).
//
// 6 fichas, 4 calculadoras, 4 figuras. Sin em dash (ver [[feedback-no-em-dash]]). Texto sin acentos.

export const meta = {
  id: 'tuberculosis',
  titulo: 'Tuberculosis',
  subtitulo: 'Módulo 57 · Medicina Interna',
  accent: '#5a6b2e'
};

function figBlock(label, titulo, html) {
  return `<div class="modal-field modal-figure" style="margin:10px 0 4px;">
    <span class="flabel">${label} · ${titulo}</span>
    <div class="figure-body">${html}</div>
  </div>`;
}

const cascadaHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:grid;grid-template-columns:1fr 14px 1fr 14px 1fr;gap:3px;align-items:stretch;margin-bottom:6px;">
    <div style="border:1.5px solid #3d5a73;border-radius:8px;padding:6px 8px;background:#3d5a7308;">
      <div style="font-weight:700;color:#3d5a73;text-align:center;margin-bottom:3px;">EXPOSICIÓN</div>
      <div style="color:var(--ink-dim);line-height:1.55;">Contacto con un enfermo bacilifero. La mayoría de los expuestos <strong>NO se infecta</strong>: el sistema inmunitario elimina el bacilo.<br><span style="color:var(--ink);">Prueba de tuberculina o IGRA NEGATIVOS.</span></div>
    </div>
    <div style="display:flex;align-items:center;justify-content:center;color:var(--ink-dim);font-size:14px;">&rarr;</div>
    <div style="border:1.5px solid #8a6a1f;border-radius:8px;padding:6px 8px;background:#8a6a1f08;">
      <div style="font-weight:700;color:#8a6a1f;text-align:center;margin-bottom:3px;">INFECCIÓN LATENTE</div>
      <div style="color:var(--ink-dim);line-height:1.55;">El bacilo queda contenido en granulomas. El paciente esta <strong>ASINTOMÁTICO y NO contagia</strong>.<br><span style="color:var(--ink);">Tuberculina o IGRA POSITIVOS, radiografía normal, cultivos negativos.</span></div>
    </div>
    <div style="display:flex;align-items:center;justify-content:center;color:var(--ink-dim);font-size:14px;">&rarr;</div>
    <div style="border:1.5px solid #8c3a34;border-radius:8px;padding:6px 8px;background:#8c3a3408;">
      <div style="font-weight:700;color:#8c3a34;text-align:center;margin-bottom:3px;">ENFERMEDAD</div>
      <div style="color:var(--ink-dim);line-height:1.55;">El bacilo se multiplica y produce lesión. El paciente esta <strong>SINTOMÁTICO y puede contagiar</strong>.<br><span style="color:var(--ink);">Confirmación MICROBIOLÓGICA: molecular, cultivo o baciloscopia.</span></div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">El riesgo de pasar de latente a enfermedad.</strong> En el inmunocompetente es de alrededor del <strong>5 al 10% a lo largo de toda la vida</strong>, y la mitad de ese riesgo se concentra en los <strong>2 primeros años</strong> tras la infección. Por eso los contactos recientes son prioritarios. En el paciente con VIH sin tratamiento, ese mismo riesgo es del orden del <strong>5 al 10% AL AÑO</strong>.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Lo que hay que hacer SIEMPRE antes de tratar una latente.</strong> DESCARTAR la enfermedad activa: anamnesis de síntomas, exploración y <strong>radiografía de tórax</strong>, con estudio microbiológico si hay cualquier duda. Tratar como latente a un enfermo activo equivale a darle monoterapia, y la monoterapia es la forma más rápida de crear una resistencia.
    </div>
  </div>
</div>`;

const diagnosticoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:6px;">
    <div style="display:grid;grid-template-columns:118px 1fr 62px;gap:6px;align-items:stretch;">
      <div style="background:#5a6b2e22;border:1px solid #5a6b2e;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#5a6b2e;">PRUEBA MOLECULAR rápida</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Es hoy la prueba <strong style="color:var(--ink);">INICIAL</strong> ante la sospecha. Detecta ADN de <em>M. tuberculosis</em> y, a la vez, la <strong>resistencia a rifampicina</strong>, lo que permite empezar bien desde el primer dia. Más sensible que la baciloscopia.</div>
      <div style="display:flex;align-items:center;justify-content:center;font-weight:700;color:#5a6b2e;text-align:center;">horas</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr 62px;gap:6px;align-items:stretch;">
      <div style="background:#3d5a7322;border:1px solid #3d5a73;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#3d5a73;">BACILOSCOPIA</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Barata y disponible, y mide la <strong style="color:var(--ink);">CONTAGIOSIDAD</strong>, que es su papel principal hoy. Pero es POCO SENSIBLE (una negativa no descarta nada) y NO distingue <em>M. tuberculosis</em> de las micobacterias no tuberculosas.</div>
      <div style="display:flex;align-items:center;justify-content:center;font-weight:700;color:#3d5a73;text-align:center;">horas</div>
    </div>
    <div style="display:grid;grid-template-columns:118px 1fr 62px;gap:6px;align-items:stretch;">
      <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;color:#8c3a34;">CULTIVO</div>
      <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Sigue siendo la <strong style="color:var(--ink);">REFERENCIA</strong>: es lo más sensible, identifica la especie y permite el <strong>antibiograma completo</strong>. Se pide SIEMPRE, aunque la prueba molecular ya sea positiva, y es la que confirma la curación.</div>
      <div style="display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c3a34;text-align:center;">semanas</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #8a6a1f;border-radius:8px;padding:5px 8px;background:#8a6a1f10;color:var(--ink-dim);">
      <strong style="color:#8a6a1f;">La tuberculina y el IGRA NO diagnostican enfermedad.</strong> Miden respuesta inmunitaria frente al bacilo, es decir, que el paciente se ha encontrado con el: no distinguen infección latente de enfermedad activa. Un resultado negativo <strong>NO descarta</strong> una tuberculosis activa, y de hecho es frecuente que salgan negativos en la enfermedad grave y en el inmunodeprimido.
    </div>
    <div style="border:1px solid var(--line);border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:var(--ink);">Diferencias prácticas entre las dos.</strong> La <strong>tuberculina</strong> es barata pero da falsos positivos con la vacuna BCG y con micobacterias ambientales, y exige una segunda visita a las 48 a 72 horas. El <strong>IGRA</strong> no se afecta por la BCG y se resuelve con una sola extracción, pero es más caro. Ninguno de los dos sirve para seguir la respuesta al tratamiento.
    </div>
  </div>
</div>`;

const tratamientoHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #5a6b2e;border-radius:8px;padding:5px 9px;background:#5a6b2e12;margin-bottom:6px;">
    <strong style="color:#5a6b2e;">PAUTA ESTÁNDAR: 2 meses de HRZE y 4 meses de HR. Seis meses en total.</strong> <span style="color:var(--ink-dim);">La fase intensiva mata la carga bacilar y la de continuación elimina los bacilos persistentes, que es lo que evita la recaída. Acortar la segunda fase por cuenta propia es la causa evitable más frecuente de recaída y de resistencia.</span>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:6px;">
    <div style="border:1px solid #8c3a34;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#8c3a34;">H · Isoniazida.</strong> HEPATOTOXICIDAD y neuropatía periférica. Se previene la neuropatía con <strong>PIRIDOXINA</strong> en el paciente de riesgo: VIH, diabetes, alcoholismo, embarazo, insuficiencia renal y desnutrición.</div>
    <div style="border:1px solid #8c5a2e;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#8c5a2e;">R · Rifampicina.</strong> Hepatotoxicidad, tiñe de naranja orina y lágrimas (avisar, o el paciente lo abandona), y sobre todo es un potente <strong>INDUCTOR ENZIMÁTICO</strong>: antirretrovirales, anticoagulantes, anticonceptivos e inmunosupresores.</div>
    <div style="border:1px solid #8a6a1f;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#8a6a1f;">Z · Pirazinamida.</strong> El más hepatotóxico de los cuatro. Produce además <strong>HIPERURICEMIA</strong>, que casi nunca obliga a suspenderlo salvo que desencadene una crisis gotosa. Artralgias frecuentes.</div>
    <div style="border:1px solid #3d5a73;border-radius:7px;padding:5px 8px;color:var(--ink-dim);"><strong style="color:#3d5a73;">E · Etambutol.</strong> <strong>NEURITIS ÓPTICA</strong> dependiente de dosis: hay que comprobar agudeza visual y visión de los colores al inicio y preguntar por ellas en cada revisión. Es la toxicidad que más secuelas deja si se pasa por alto.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Cuando la pauta cambia.</strong> <strong>4 meses</strong> con rifapentina y moxifloxacino en pacientes seleccionados, según un ensayo de no inferioridad. <strong>9 meses</strong> si hay cavitación Y el cultivo del segundo mes sigue positivo, porque el riesgo de recaída se dispara. <strong>9 a 12 meses</strong> en la meningitis, y pautas prolongadas en la afectación osteoarticular.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Cuando se suspende por el hígado.</strong> Transaminasas por encima de <strong>3 veces</strong> el limite alto con SÍNTOMAS o ictericia, o por encima de <strong>5 veces</strong> sin síntomas. Se retiran los hepatotóxicos, se espera la normalización y se reintroducen de uno en uno. Elevaciones menores y asintomáticas son frecuentes y NO obligan a parar.
    </div>
  </div>
</div>`;

const latenteHtml = `
<div style="max-width:660px;margin:0 auto;font-size:9.5px;color:var(--ink);">
  <div style="text-align:center;border:1px solid #8a6a1f;border-radius:8px;padding:5px 9px;background:#8a6a1f12;margin-bottom:6px;">
    <strong style="color:#8a6a1f;">Solo se busca la infección latente en quien se va a tratar si sale positiva.</strong> <span style="color:var(--ink-dim);">Cribar a poblaciones sin riesgo genera falsos positivos, hepatotoxicidad evitable y ansiedad. La pregunta no es "puedo hacer la prueba" sino "que hare con el resultado".</span>
  </div>
  <div style="display:grid;grid-template-columns:52px 1fr;gap:5px;margin-bottom:4px;align-items:stretch;">
    <div style="background:#8c3a3422;border:1px solid #8c3a34;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8c3a34;">5 mm</div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Los más inmunodeprimidos y los más expuestos: <strong style="color:var(--ink);">VIH</strong>, contacto reciente de un caso bacilifero, lesiones fibróticas en la radiografía compatibles con tuberculosis antigua, trasplantados y pacientes con inmunosupresión (corticoides a dosis altas mantenidas, antagonistas del factor de necrosis tumoral).</div>
  </div>
  <div style="display:grid;grid-template-columns:52px 1fr;gap:5px;margin-bottom:4px;align-items:stretch;">
    <div style="background:#8a6a1f22;border:1px solid #8a6a1f;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8a6a1f;">10 mm</div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Riesgo intermedio: procedencia reciente de <strong>zona de alta incidencia</strong>, uso de drogas por via parenteral, personal y residentes de instituciones cerradas, personal de laboratorio de micobacterias, y enfermedades que aumentan el riesgo (<strong>SILICOSIS</strong>, diabetes, insuficiencia renal crónica, neoplasias hematológicas, gastrectomía, bajo peso).</div>
  </div>
  <div style="display:grid;grid-template-columns:52px 1fr;gap:5px;margin-bottom:6px;align-items:stretch;">
    <div style="background:#3f6b5222;border:1px solid #3f6b52;border-radius:7px;padding:4px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#3f6b52;">15 mm</div>
    <div style="border:1px solid var(--line);border-radius:7px;padding:5px 9px;color:var(--ink-dim);">Personas <strong>sin ningún factor de riesgo</strong>, en las que en principio no habría que haber hecho la prueba. Si aparece un resultado positivo aquí, conviene revisar por que se pidio antes de tratar.</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
    <div style="border:1px solid #3f6b52;border-radius:8px;padding:5px 8px;color:var(--ink-dim);">
      <strong style="color:#3f6b52;">Pautas disponibles.</strong> Las cortas <strong>con rifamicina</strong> se prefieren hoy por mejor cumplimiento y menor hepatotoxicidad: isoniazida más rifapentina semanal durante 3 meses, o rifampicina diaria durante 4 meses. La isoniazida sola durante 6 a 9 meses sigue siendo valida pero se cumple peor y es más hepatotoxica.
    </div>
    <div style="border:1px solid #8c3a34;border-radius:8px;padding:5px 8px;background:#8c3a3410;color:var(--ink-dim);">
      <strong style="color:#8c3a34;">Las dos trampas.</strong> Primera: tratar una latente sin haber DESCARTADO la enfermedad activa equivale a dar monoterapia y fabrica resistencias. Segunda: dar por descartada la infección con una prueba negativa en un inmunodeprimido, en quien tanto la tuberculina como el IGRA pierden sensibilidad y pueden ser indeterminados.
    </div>
  </div>
</div>`;

export const definicionText = `<p style="margin:0 0 14px;">La tuberculosis sigue siendo una de las principales causas infecciosas de muerte en el mundo y una enfermedad que en la práctica clínica se diagnostica tarde. Se transmite por via aérea a partir de un enfermo con afectación pulmonar o laringea, y su rasgo más característico es que la infección y la enfermedad son dos cosas distintas: la mayoría de los infectados nunca enfermara, y el trabajo clínico consiste en identificar tanto al que ya esta enfermo como al que tiene más riesgo de llegar a estarlo.</p>

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Primero: exposición, infección y enfermedad no son lo mismo.</strong></p>
<p style="margin:0 0 12px;">La secuencia ordena todo el tema. La mayoría de los expuestos no llega a infectarse. De los infectados, la mayoría queda en una <strong>infección latente</strong>: asintomática, no contagiosa y sin hallazgos radiológicos. Solo una minoría desarrolla <strong>enfermedad</strong>, y ese riesgo se concentra en los dos primeros años tras la infección y se multiplica en el inmunodeprimido. La regla que no se negocia es que antes de tratar una latente hay que haber DESCARTADO la enfermedad activa, porque tratar a un enfermo con una pauta de latente es darle monoterapia.</p>
${figBlock('Figura 1', 'De la exposición a la enfermedad, y donde esta el riesgo', cascadaHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Segundo: que prueba dice que cosa.</strong></p>
<p style="margin:0 0 12px;">La <strong>prueba molecular rápida</strong> es hoy la prueba inicial ante la sospecha: en horas confirma <em>M. tuberculosis</em> y detecta la resistencia a rifampicina, lo que permite empezar bien desde el primer dia. La <strong>baciloscopia</strong> ha quedado sobre todo como medida de contagiosidad. Y el <strong>cultivo</strong> se pide siempre porque es la referencia, identifica la especie, da el antibiograma completo y es lo que confirma la curación. La tuberculina y el IGRA quedan fuera de este circuito: miden respuesta inmunitaria, no enfermedad, y un resultado negativo no descarta una tuberculosis activa.</p>
${figBlock('Figura 2', 'Molecular, baciloscopia y cultivo: que aporta cada una y en cuanto tiempo', diagnosticoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Tercero: la pauta y sus efectos adversos.</strong></p>
<p style="margin:0 0 12px;">El esquema clásico son <strong>seis meses</strong>: dos de cuatro fármacos y cuatro de dos. En pacientes seleccionados existe una pauta de cuatro meses con rifapentina y moxifloxacino, y en otros hay que prolongarla. Conocer la toxicidad de cada fármaco es lo que permite distinguir el efecto adverso que obliga a parar del que se puede vigilar: la mayoría de las elevaciones leves de transaminasas no obligan a suspender nada, y en cambio la neuritis óptica por etambutol deja secuelas si se pasa por alto.</p>
${figBlock('Figura 3', 'La pauta estándar, sus cuatro fármacos y cuando cambia', tratamientoHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Cuarto: buscar la latente solo donde se va a actuar.</strong></p>
<p style="margin:0 0 12px;">El cribado de infección latente tiene sentido en quien tiene riesgo de progresar y en quien se va a tratar si sale positivo. El umbral de induración de la tuberculina depende del grupo de riesgo, no del tamaño por si solo, y hoy se prefieren las pautas cortas con rifamicina porque se cumplen mejor y son menos hepatotoxicas.</p>
${figBlock('Figura 4', 'Infección latente: umbrales por grupo de riesgo y pautas', latenteHtml)}

<p style="margin:18px 0 6px;"><strong style="color:var(--accent-fg);">Lo que no hay que hacer.</strong></p>
<p style="margin:0 0 12px;">No descartar una tuberculosis por una baciloscopia negativa. No descartarla por una tuberculina o un IGRA negativos, sobre todo en el inmunodeprimido. No dejar de pedir cultivo porque la prueba molecular ya sea positiva. No tratar una infección latente sin descartar antes la enfermedad activa. No añadir un solo fármaco a una pauta que esta fallando, porque eso es monoterapia encubierta. No olvidar la piridoxina en el paciente de riesgo de neuropatía. No pasar por alto las interacciones de la rifampicina, sobre todo con los antirretrovirales. No suspender el tratamiento por una elevación leve y asintomática de transaminasas. Y no retirar el aislamiento respiratorio por criterio de tiempo sin comprobar la respuesta clínica y las baciloscopias.</p>`;

export const bibliografia = [
  'Nahid P, Dorman SE, Alipanah N, et al. Official ATS/CDC/IDSA clinical practice guidelines: treatment of drug-susceptible tuberculosis. Clin Infect Dis. 2016;63(7):e147-e195.',
  'World Health Organization. WHO consolidated guidelines on tuberculosis. Module 4: treatment. Drug-resistant tuberculosis treatment, 2022 update. Geneva: WHO; 2022.',
  'Dorman SE, Nahid P, Kurbatova EV, et al. Four-month rifapentine regimens with or without moxifloxacin for tuberculosis. N Engl J Med. 2021;384(18):1705-1718.',
  'Sterling TR, Njie G, Zenner D, et al. Guidelines for the treatment of latent tuberculosis infection: recommendations from the National Tuberculosis Controllers Association and CDC, 2020. MMWR Recomm Rep. 2020;69(1):1-11.',
  'Sterling TR, Villarino ME, Borisov AS, et al. Three months of rifapentine and isoniazid for latent tuberculosis infection. N Engl J Med. 2011;365(23):2155-2166.',
  'Conradie F, Bagdasaryan TR, Borisov S, et al. Bedaquiline-pretomanid-linezolid regimens for drug-resistant tuberculosis. N Engl J Med. 2022;387(9):810-823.',
  'Nunn AJ, Phillips PPJ, Meredith SK, et al. A trial of a shorter regimen for rifampin-resistant tuberculosis. N Engl J Med. 2019;380(13):1201-1213.',
  'Thwaites GE, Nguyen DB, Nguyen HD, et al. Dexamethasone for the treatment of tuberculous meningitis in adolescents and adults. N Engl J Med. 2004;351(17):1741-1751.',
  'Mayosi BM, Ntsekhe M, Bosch J, et al. Prednisolone and Mycobacterium indicus pranii in tuberculous pericarditis. N Engl J Med. 2014;371(12):1121-1130.',
  'World Health Organization. WHO consolidated guidelines on tuberculosis. Module 2: screening. Systematic screening for tuberculosis disease. Geneva: WHO; 2021.',
  'Lewinsohn DM, Leonard MK, LoBue PA, et al. Official ATS/IDSA/CDC clinical practice guidelines: diagnosis of tuberculosis in adults and children. Clin Infect Dis. 2017;64(2):e1-e33.',
  'Abdool Karim SS, Naidoo K, Grobler A, et al. Integration of antiretroviral therapy with tuberculosis treatment. N Engl J Med. 2011;365(16):1492-1501.',
  'Torok ME, Yen NT, Chau TT, et al. Timing of initiation of antiretroviral therapy in human immunodeficiency virus-associated tuberculous meningitis. Clin Infect Dis. 2011;52(11):1374-1383.',
  'Getahun H, Matteelli A, Chaisson RE, Raviglione M. Latent Mycobacterium tuberculosis infection. N Engl J Med. 2015;372(22):2127-2135.',
  'Furin J, Cox H, Pai M. Tuberculosis. Lancet. 2019;393(10181):1642-1656.',
  'World Health Organization. Global tuberculosis report. Geneva: WHO; 2023.'
];

export const content = {
  diagnostico: {
    clinica: {
      tituloA: 'Tuberculosis pulmonar',
      tituloB: 'Signos de alarma y formas graves',
      compensada: 'TOS de más de 2 o 3 semanas, al principio seca y después productiva, que es el síntoma que debe disparar la sospecha en cualquier entorno. Se acompaña de febrícula de predominio vespertino, SUDORACIÓN NOCTURNA, pérdida de peso y astenia. La hemoptisis aparece en fases más avanzadas y no es necesaria para el diagnóstico. El cuadro es INSIDIOSO, de semanas o meses, y esa lentitud es justamente la que retrasa la consulta y el diagnóstico.',
      descompensada: 'Hemoptisis amenazante por erosión vascular o aneurisma de Rasmussen. Insuficiencia respiratoria por tuberculosis miliar o por síndrome de dificultad respiratoria aguda. Meningitis tuberculosa, que se instaura en semanas con cefalea, fiebre y alteración progresiva del nivel de conciencia y de los pares craneales, y cuyo pronóstico depende de forma directa de la precocidad del tratamiento. Pericarditis con taponamiento o evolución a constricción. Y en el paciente con VIH, presentaciones atípicas con radiografía normal o con adenopatías, y formas diseminadas.'
    },
    laboratorio: [
      { prueba: 'Prueba molecular rápida en esputo', utilidad: 'PRUEBA INICIAL ante la sospecha. En horas detecta ADN de M. tuberculosis y, a la vez, la resistencia a rifampicina, lo que permite iniciar la pauta correcta desde el primer dia. Es más sensible que la baciloscopia, aunque una prueba negativa no descarta la enfermedad si la sospecha es alta.' },
      { prueba: 'Baciloscopia (tinción de Ziehl-Neelsen o auramina)', utilidad: 'Su papel principal hoy es medir la CONTAGIOSIDAD y seguir la respuesta al tratamiento. Es poco sensible, de modo que una negativa no descarta nada, y no distingue M. tuberculosis de las micobacterias no tuberculosas. Se recogen tres muestras en días distintos, una de ellas matutina.' },
      { prueba: 'Cultivo de micobacterias', utilidad: 'REFERENCIA. Se pide SIEMPRE, aunque la prueba molecular ya sea positiva, porque es lo más sensible, identifica la especie y permite el antibiograma completo. El cultivo del segundo mes es además un dato pronóstico que puede obligar a prolongar la pauta. Tarda semanas.' },
      { prueba: 'Antibiograma (estudio de sensibilidad a fármacos)', utilidad: 'Obligado en todo aislamiento inicial. Detecta la resistencia a isoniazida y rifampicina, que define la multirresistencia, y a los fármacos de segunda línea. Se repite si el cultivo sigue positivo a los 3 meses de tratamiento correcto.' },
      { prueba: 'Prueba de la tuberculina o IGRA (calculadora disponible)', utilidad: 'Miden la respuesta inmunitaria frente al bacilo. Sirven para el diagnóstico de infección LATENTE, no de enfermedad activa: no distinguen una de otra y un resultado negativo NO descarta una tuberculosis activa, sobre todo en el inmunodeprimido y en la enfermedad grave.' },
      { prueba: 'Serología de VIH', utilidad: 'OBLIGADA en todo paciente con tuberculosis, sin excepción. Cambia el pronóstico, la presentación, el momento de iniciar el tratamiento antirretroviral y todo el manejo de las interacciones farmacológicas. Es una de las omisiones más frecuentes y menos justificables.' },
      { prueba: 'Perfil hepático, función renal, hemograma y ácido úrico basales', utilidad: 'Punto de partida antes de iniciar el tratamiento, imprescindible para poder interpretar después cualquier alteración. La hepatotoxicidad es el efecto adverso más relevante, y sin un basal no se puede saber si una cifra alterada es nueva.' },
      { prueba: 'Adenosina desaminasa en líquidos', utilidad: 'Muy útil en el derrame pleural, el líquido ascítico y el pericárdico, donde el rendimiento del cultivo es bajo. Un valor elevado en el contexto adecuado apoya con fuerza el diagnóstico, pero no lo sustituye: hay que seguir intentando la confirmación microbiológica.' }
    ],
    no_invasivos: [
      { metodo: 'Dosis de los fármacos de primera línea (calculadora disponible)', interpretacion: 'La isoniazida y la rifampicina se dosifican por peso con un tope; la pirazinamida y el etambutol, por franjas de peso. Los errores de dosificación, por defecto sobre todo, favorecen el fracaso y la resistencia.', cutoff: 'Isoniazida 5 mg/kg (máximo 300 mg); rifampicina 10 mg/kg (máximo 600 mg)' },
      { metodo: 'Interpretación de la tuberculina y del IGRA (calculadora disponible)', interpretacion: 'El umbral de induración depende del GRUPO DE RIESGO y no del tamaño por si solo. El IGRA no se afecta por la vacuna BCG.', cutoff: '5 mm en inmunodeprimidos y contactos recientes; 10 mm en riesgo intermedio; 15 mm sin factores de riesgo' },
      { metodo: 'Manejo de la hepatotoxicidad (calculadora disponible)', interpretacion: 'Distingue la elevación que obliga a suspender de la que solo se vigila. Las elevaciones leves y asintomáticas son frecuentes en las primeras semanas y suelen resolverse solas.', cutoff: 'Suspender si las transaminasas superan 3 veces el limite alto CON síntomas, o 5 veces sin ellos' },
      { metodo: 'Retirada del aislamiento respiratorio (calculadora disponible)', interpretacion: 'No basta con el criterio de tiempo: hacen falta tratamiento eficaz, mejoría clínica y baciloscopias negativas. Si hay resistencia demostrada o sospechada, los criterios son más estrictos.', cutoff: 'Al menos 2 semanas de tratamiento eficaz, mejoría clínica y 3 baciloscopias negativas de días distintos' },
      { metodo: 'Cultivo de esputo del segundo mes', interpretacion: 'Es el marcador pronóstico más útil del seguimiento. Un cultivo positivo al final de la fase intensiva identifica al paciente con más riesgo de recaída.', cutoff: 'Cultivo positivo a los 2 meses JUNTO CON cavitación: prolongar la fase de continuación a 7 meses (9 en total)' },
      { metodo: 'Valoración de la adherencia', interpretacion: 'El tratamiento directamente observado y las estrategias de apoyo son parte del tratamiento, no un extra administrativo. El abandono es la causa principal de fracaso y de resistencia adquirida.', cutoff: 'Sin umbral numérico; se valora en cada visita junto con la tolerancia y la toxicidad' },
      { metodo: 'Agudeza visual y visión de los colores', interpretacion: 'Basales al iniciar etambutol y preguntadas en cada revisión. La neuritis óptica es dependiente de dosis y de función renal, y es la toxicidad que más secuelas deja si se detecta tarde.', cutoff: 'Cualquier cambio referido por el paciente obliga a suspender el etambutol de inmediato' }
    ],
    imagen: [
      { modalidad: 'Radiografía de tórax', hallazgos: 'En la forma posprimaria del adulto, infiltrados y CAVITACIÓN en segmentos APICALES y POSTERIORES de los lóbulos superiores y en el segmento superior de los inferiores, donde la presión de oxígeno es mayor. En la primaria, adenopatías hiliares y consolidación en cualquier lóbulo. Patrón MILIAR con micronodulos difusos en la forma diseminada. Una radiografía normal NO descarta la enfermedad en el inmunodeprimido.' },
      { modalidad: 'Tomografía de tórax', hallazgos: 'Más sensible: detecta cavitaciones pequeñas, nódulos centrolobulillares con patrón en árbol en brote que indican diseminación broncogena activa, y adenopatías con centro necrótico. Útil cuando la radiografía es dudosa y para valorar secuelas y bronquiectasias residuales.' },
      { modalidad: 'Resonancia craneal con contraste', hallazgos: 'En la meningitis tuberculosa: realce meníngeo de predominio BASAL, hidrocefalia, infartos por vasculitis de las arterias perforantes y tuberculomas. Es más sensible que la tomografía y el hallazgo de realce basal en el contexto adecuado apoya con fuerza el diagnóstico.' },
      { modalidad: 'Ecografía y tomografía abdominal', hallazgos: 'Adenopatías con centro necrótico, engrosamiento de la región ileocecal y del peritoneo, ascitis con tabiques y afectación esplénica en la forma diseminada. La tuberculosis abdominal imita al linfoma y a la enfermedad de Crohn, y esa confusión retrasa el diagnóstico.' }
    ]
  },
  clasificacion: {
    compensada_descompensada: `La primera división, y la que más ordena, es entre <strong>infección latente</strong> (asintomática, no contagiosa, con prueba inmunitaria positiva y radiografía normal) y <strong>enfermedad activa</strong> (sintomática, con confirmación microbiológica y potencialmente contagiosa si es pulmonar o laringea). Dentro de la enfermedad, se clasifica por <strong>localización</strong> (pulmonar frente a extrapulmonar), por <strong>patrón de sensibilidad</strong> (sensible, monorresistente, multirresistente, preextensamente resistente y extensamente resistente) y por <strong>antecedente de tratamiento</strong> (caso nuevo o previamente tratado), que es lo que hace sospechar resistencia.`,
    escalas: [
      { nombre: 'Interpretación de la tuberculina y del IGRA (calculadora disponible)', componentes: 'Diámetro de la INDURACIÓN (no del eritema) a las 48 a 72 horas, o resultado del IGRA, junto con el grupo de riesgo del paciente.', formula: 'Tres umbrales: 5 mm en VIH, contacto reciente, lesiones fibróticas y inmunosupresión; 10 mm en riesgo intermedio; 15 mm sin factores de riesgo.', interpretacion: 'Diagnostican INFECCIÓN, no enfermedad. Un resultado negativo no descarta una tuberculosis activa. El IGRA no se afecta por la vacuna BCG ni por micobacterias ambientales y se resuelve con una sola visita, pero es más caro.' },
      { nombre: 'Dosificación de los fármacos de primera línea (calculadora disponible)', componentes: 'Peso del paciente y función renal.', formula: 'Isoniazida 5 mg/kg (máximo 300 mg) y rifampicina 10 mg/kg (máximo 600 mg); pirazinamida y etambutol por franjas de peso. En insuficiencia renal avanzada, pirazinamida y etambutol pasan a tres veces por semana.', interpretacion: 'La infradosificacion favorece el fracaso terapéutico y la aparición de resistencias. La isoniazida y la rifampicina NO requieren ajuste renal; la pirazinamida y el etambutol si.' },
      { nombre: 'Umbrales de hepatotoxicidad (calculadora disponible)', componentes: 'Transaminasas expresadas en multiplos del limite alto de la normalidad, presencia de síntomas y bilirrubina.', formula: 'Suspender los hepatotóxicos si las transaminasas superan 3 veces el limite alto CON síntomas o ictericia, o 5 veces sin síntomas.', interpretacion: 'Las elevaciones leves y asintomáticas son frecuentes en las primeras semanas y suelen normalizarse solas. Tras la normalización, los fármacos se reintroducen DE UNO EN UNO para identificar al responsable.' },
      { nombre: 'Criterios de retirada del aislamiento (calculadora disponible)', componentes: 'Duración del tratamiento eficaz, respuesta clínica, resultado de las baciloscopias seriadas y patrón de sensibilidad.', formula: 'Al menos 2 semanas de tratamiento eficaz, mejoría clínica y 3 baciloscopias de esputo negativas obtenidas en días distintos.', interpretacion: 'No basta el criterio de tiempo aislado. Si hay resistencia demostrada o sospechada, se exige negativizacion del CULTIVO y los criterios son más estrictos. La decisión se toma junto con medicina preventiva.' },
      { nombre: 'Clasificación por patrón de resistencia', componentes: 'Resultado del antibiograma frente a los fármacos de primera y segunda línea.', formula: 'MULTIRRESISTENTE: resistencia al menos a isoniazida Y rifampicina. PREEXTENSAMENTE RESISTENTE: multirresistente más resistencia a fluoroquinolonas. EXTENSAMENTE RESISTENTE: lo anterior más resistencia a bedaquilina o a linezolid.', interpretacion: 'Determina por completo el esquema terapéutico y la duración. Es el motivo por el que la prueba molecular inicial, que detecta la resistencia a rifampicina en horas, ha cambiado la práctica.' },
      { nombre: 'Escala de gravedad de la meningitis tuberculosa', componentes: 'Nivel de conciencia y presencia de focalidad neurológica.', formula: 'Grado I: consciente y sin focalidad. Grado II: alteración del nivel de conciencia o focalidad. Grado III: estupor o coma.', interpretacion: 'El grado al inicio del tratamiento predice el pronóstico mejor que cualquier otra variable, lo que convierte el retraso diagnóstico en el determinante principal del desenlace. El tratamiento se inicia ante la sospecha, sin esperar confirmación.' }
    ]
  },
  complicaciones: [
    {
      nombre: 'Tuberculosis pulmonar: sospecha y diagnóstico',
      color: '#5a6b2e',
      definicion: 'Enfermedad producida por <em>Mycobacterium tuberculosis</em> con afectación del parénquima pulmonar, que es la forma más frecuente y la única junto con la laringea que transmite la infección.',
      fisiopatologia: 'El bacilo llega en núcleos goticulares que quedan suspendidos en el aire durante horas y alcanzan el alveolo. Alli es fagocitado por los macrófagos, en cuyo interior sobrevive bloqueando la fusión del fagosoma con el lisosoma. La respuesta inmunitaria celular, mediada por linfocitos T y por interferón gamma, forma el granuloma que contiene la infección pero no la elimina. Si esa contencion falla, por inmunosupresión o por una carga bacilar alta, el granuloma se necrosa, se vacia hacia un bronquio y forma una CAVERNA, que es a la vez la lesión típica de la enfermedad y el mecanismo de su transmisión.',
      epidemiologia: 'Es una de las principales causas infecciosas de muerte en el mundo, con la mayor carga en Asia y África. La coinfección por VIH multiplica el riesgo de progresión, y la resistencia a fármacos es un problema creciente. En países de baja incidencia, la mayoría de los casos se concentran en poblaciones concretas: migrantes de zonas de alta incidencia, personas sin hogar, instituciones cerradas e inmunodeprimidos.',
      factores_riesgo: ['Infección por VIH, que es el factor de riesgo más potente', 'Contacto estrecho reciente con un caso bacilifero', 'Procedencia de zona de alta incidencia', 'SILICOSIS', 'Tratamiento con antagonistas del factor de necrosis tumoral', 'Corticoides a dosis altas de forma mantenida', 'Trasplante de órgano sólido o de progenitores hematopoyéticos', 'Diabetes mellitus', 'Insuficiencia renal crónica en diálisis', 'Neoplasias hematológicas', 'Desnutrición, alcoholismo y consumo de drogas', 'Instituciones cerradas: prisiones, albergues, residencias'],
      clinica: 'TOS de más de 2 o 3 semanas, febrícula vespertina, sudoración nocturna, pérdida de peso y astenia. Hemoptisis en fases avanzadas. El curso es insidioso, de semanas o meses, y esa lentitud retrasa la consulta. En el paciente con VIH y linfocitos CD4 bajos, la presentación puede ser atípica, con radiografía normal, adenopatías o formas diseminadas.',
      criterios_dx: 'Confirmación MICROBIOLÓGICA: prueba molecular rápida como estudio inicial, baciloscopia y CULTIVO, que se pide siempre. Ante alta sospecha con estudios negativos, se puede tratar de forma empírica manteniendo el esfuerzo diagnóstico. Ver las Figuras 1 y 2 de Definición.',
      laboratorio: 'Prueba molecular rápida, baciloscopias seriadas, cultivo con antibiograma. SEROLOGÍA DE VIH siempre. Perfil hepático, función renal, hemograma y ácido úrico basales antes de iniciar el tratamiento.',
      imagen: 'Radiografía de tórax con infiltrados y cavitación de predominio en segmentos apicales y posteriores. Tomografía si la radiografía es dudosa, que añade el patrón en árbol en brote como signo de diseminación broncogena activa.',
      complementarios: 'Si el paciente no expectora: esputo inducido con suero salino hipertónico o BRONCOSCOPIA con lavado broncoalveolar. El aspirado gástrico matutino es una alternativa cuando la broncoscopia no esta disponible o el paciente no la tolera.',
      dx_diferencial: 'Neumonía bacteriana de evolución torpida, absceso pulmonar, micosis endémicas, nocardiosis, actinomicosis, micobacteriosis no tuberculosas, cáncer de pulmón (que comparte la presentación con pérdida de peso y hemoptisis), linfoma, granulomatosis con poliangeítis y sarcoidosis.',
      tx_medico: 'AISLAMIENTO RESPIRATORIO desde la sospecha, en habitación con presión negativa si se dispone, con mascarilla de protección respiratoria para el personal y mascarilla quirúrgica para el paciente cuando salga de la habitación. Declaracion obligatoria y ESTUDIO DE CONTACTOS, que es una parte del tratamiento y no un trámite. Soporte nutricional.',
      tx_farmacologico: 'Se detalla en la ficha de tratamiento. La regla que ordena el inicio es no esperar al cultivo cuando la sospecha es alta y el paciente esta grave: se trata y se sigue estudiando.',
      tx_intervencionista: 'Broncoscopia diagnóstica. Embolización de arterias bronquiales en la hemoptisis amenazante. Cirugía en casos seleccionados de secuelas o de enfermedad localizada resistente.',
      criterios_uci: 'Insuficiencia respiratoria grave, tuberculosis miliar con síndrome de dificultad respiratoria aguda, hemoptisis amenazante y meningitis con deterioro del nivel de conciencia.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'La tuberculosis activa es contraindicación para el trasplante hasta completar un tratamiento adecuado.',
      seguimiento_hospitalario: 'Mantener el aislamiento hasta cumplir los criterios de retirada, que exigen mejoría clínica y baciloscopias negativas además del tiempo. Vigilar la tolerancia al tratamiento en las primeras semanas, que es cuando aparece la mayor parte de la toxicidad.',
      seguimiento_ambulatorio: 'Revisión mensual con valoración de adherencia, tolerancia y síntomas de toxicidad. Baciloscopia y cultivo de control, con especial atención al del SEGUNDO MES, que decide si hay que prolongar la pauta.',
      pronostico: 'Excelente con tratamiento completo y correcto en la enfermedad sensible. El pronóstico empeora con el retraso diagnóstico, la resistencia, la coinfección por VIH y el abandono del tratamiento.',
      algoritmo: ['Sospecharla ante tos de más de 2 o 3 semanas con síntomas generales', 'AISLAR desde la sospecha, sin esperar confirmación', 'Pedir prueba molecular rápida como estudio inicial', 'Pedir baciloscopias seriadas y CULTIVO con antibiograma', 'Hacer radiografía de tórax y tomografía si hay dudas', 'Pedir SEROLOGÍA DE VIH a todos', 'Obtener analítica basal antes de iniciar el tratamiento', 'Si no expectora, inducir el esputo o hacer broncoscopia', 'Declarar el caso e iniciar el estudio de contactos', 'Iniciar tratamiento sin esperar al cultivo si la sospecha es alta']
    },
    {
      nombre: 'Tratamiento de la tuberculosis sensible y su toxicidad',
      color: '#3f6b52',
      definicion: 'Esquema terapéutico de la tuberculosis causada por cepas sensibles a los fármacos de primera línea, basado en la combinación de varios fármacos durante un tiempo prolongado.',
      fisiopatologia: 'La combinación de fármacos no es una costumbre sino una necesidad matematica: en una población bacilar grande siempre existen mutantes resistentes espontáneos a cualquier fármaco aislado, y la probabilidad de que un mismo bacilo sea resistente a varios a la vez es mínima. De ahi que añadir un solo fármaco a una pauta que esta fallando sea monoterapia encubierta. La duración prolongada responde a otro problema: los bacilos persistentes, metabolicamente poco activos, sobreviven a la fase intensiva y solo se eliminan con la fase de continuación, que es la que evita la recaída.',
      epidemiologia: 'La pauta de seis meses cura a la gran mayoría de los pacientes con enfermedad sensible cuando se completa. El abandono y el cumplimiento irregular son las causas principales de fracaso y de resistencia adquirida, y por eso el apoyo a la adherencia forma parte del tratamiento.',
      factores_riesgo: ['Cumplimiento irregular o abandono del tratamiento', 'Cavitación extensa al diagnóstico', 'Cultivo positivo al final del segundo mes', 'Coinfección por VIH', 'Diabetes mal controlada', 'Bajo peso y desnutrición', 'Consumo de alcohol y de drogas', 'Hepatopatía previa para la toxicidad', 'Edad avanzada para la hepatotoxicidad', 'Interacciones farmacológicas no revisadas'],
      clinica: 'La respuesta esperable es desaparición de la fiebre en 1 a 2 semanas y mejoría progresiva de la tos, el apetito y el peso. La persistencia de fiebre más allá de 2 o 3 semanas obliga a revisar la adherencia, a pensar en resistencia, en una reacción paradójica o en un diagnóstico alternativo o coexistente.',
      criterios_dx: 'No aplica: es la fase terapéutica. Lo que hay que tener antes de empezar es el estudio de sensibilidad en marcha, la serología de VIH y la analítica basal. Ver la Figura 3 de Definición.',
      laboratorio: 'Perfil hepático basal y después según síntomas o riesgo. Ácido úrico si aparecen artralgias. Baciloscopia y cultivo mensuales hasta la negativizacion, y siempre el del segundo mes.',
      imagen: 'Radiografía de control al final del tratamiento como referencia para el futuro. La imagen mejora más despacio que la clínica y no sirve para decidir la duración, de modo que no hay que prolongar el tratamiento por una radiografía que aun no se ha normalizado.',
      complementarios: 'Agudeza visual y visión de los colores basales con etambutol. Valoración de la adherencia en cada visita, con tratamiento directamente observado en los pacientes de riesgo de abandono.',
      dx_diferencial: 'Ante falta de respuesta: mala adherencia (la causa más frecuente con diferencia), resistencia, malabsorción de los fármacos, diagnóstico alternativo, infección concomitante y reacción paradójica.',
      tx_medico: 'Apoyo a la adherencia con tratamiento directamente observado cuando procede, educación sobre los efectos adversos esperables (incluido que la rifampicina tiñe la orina de naranja, dato que si no se avisa provoca abandonos), soporte social y nutricional, y abstinencia de alcohol.',
      tx_farmacologico: 'PAUTA ESTÁNDAR: 2 meses de isoniazida, rifampicina, pirazinamida y etambutol, seguidos de 4 meses de isoniazida y rifampicina. PAUTA DE 4 MESES con rifapentina, moxifloxacino, isoniazida y pirazinamida en pacientes seleccionados. PIRIDOXINA para prevenir la neuropatía por isoniazida en pacientes de riesgo. Se prolonga a 9 meses si hay cavitación Y cultivo positivo al segundo mes.',
      tx_intervencionista: 'Rara vez necesaria en la enfermedad sensible. Cirugía en secuelas sintomáticas, aspergiloma sobre caverna residual o hemoptisis recurrente.',
      criterios_uci: 'Hepatitis fulminante por fármacos, que es excepcional pero grave, y las complicaciones de la enfermedad.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Trasplante hepático en la hepatitis fulminante por fármacos antituberculosos, situación rara y de manejo en centro especializado.',
      seguimiento_hospitalario: 'Vigilancia de la tolerancia en las primeras semanas. Ante elevación de transaminasas, aplicar los umbrales: suspender si superan 3 veces el limite alto con síntomas o 5 veces sin ellos, y reintroducir DE UNO EN UNO tras la normalización.',
      seguimiento_ambulatorio: 'Revisión mensual. Preguntar de forma dirigida por náuseas, dolor abdominal, ictericia, parestesias y cambios en la visión. Confirmar la curación con cultivos negativos al final del tratamiento.',
      pronostico: 'Curación en la gran mayoría si se completa la pauta. La recaída es poco frecuente y se concentra en los pacientes con cavitación y cultivo positivo al segundo mes, que son justamente los que necesitan pauta prolongada.',
      algoritmo: ['Comprobar analítica basal, serología de VIH y estudio de sensibilidad en marcha', 'Iniciar 2 meses de isoniazida, rifampicina, pirazinamida y etambutol', 'Dosificar por PESO y ajustar pirazinamida y etambutol si hay insuficiencia renal', 'Añadir PIRIDOXINA si hay riesgo de neuropatía', 'Revisar todas las INTERACCIONES de la rifampicina', 'Avisar de que la orina se tiñe de naranja', 'Comprobar el cultivo del SEGUNDO MES', 'Prolongar a 9 meses si hay cavitación y cultivo positivo', 'Continuar 4 meses con isoniazida y rifampicina', 'Confirmar la curación con cultivos negativos al terminar']
    },
    {
      nombre: 'Infección tuberculosa latente',
      color: '#8a6a1f',
      definicion: 'Estado de respuesta inmunitaria persistente frente a antígenos de <em>M. tuberculosis</em> sin evidencia clínica, radiológica ni microbiológica de enfermedad activa. El paciente esta asintomático y NO contagia.',
      fisiopatologia: 'El bacilo queda contenido dentro de granulomas en un estado de baja actividad metabólica, en equilibrio con la respuesta inmunitaria del huésped. Ese equilibrio puede romperse años después si la inmunidad celular se deteriora, y de ahi que las situaciones que la comprometen (VIH, antagonistas del factor de necrosis tumoral, corticoides, trasplante, diálisis) sean justamente las que definen a quien hay que buscar y tratar.',
      epidemiologia: 'Una fracción muy grande de la población mundial esta infectada. El riesgo de progresar a enfermedad es del 5 al 10% a lo largo de la vida en el inmunocompetente, y la mitad de ese riesgo se concentra en los dos primeros años tras la infección. En el paciente con VIH sin tratamiento, ese riesgo es del orden del 5 al 10% al año.',
      factores_riesgo: ['Infección por VIH', 'Contacto reciente con un caso bacilifero', 'Conversión reciente de la prueba', 'Lesiones fibróticas en la radiografía compatibles con tuberculosis antigua no tratada', 'Inicio previsto de antagonistas del factor de necrosis tumoral u otros biológicos', 'Trasplante de órgano sólido o de progenitores', 'Corticoides a dosis altas de forma mantenida', 'Silicosis', 'Insuficiencia renal crónica en diálisis', 'Diabetes mellitus', 'Neoplasias hematológicas y de cabeza y cuello', 'Bajo peso y gastrectomía'],
      clinica: 'ASINTOMÁTICA por definición. Cualquier síntoma (tos prolongada, fiebre, sudoración nocturna, pérdida de peso) obliga a descartar enfermedad activa antes de etiquetar el caso como latente y, sobre todo, antes de tratarlo como tal.',
      criterios_dx: 'Prueba de la tuberculina o IGRA positivos, con anamnesis, exploración y RADIOGRAFÍA DE TÓRAX que descarten enfermedad activa. Se hace estudio microbiológico ante cualquier duda. Ver la Figura 4 de Definición.',
      laboratorio: 'Tuberculina o IGRA según el contexto. Perfil hepático basal antes de iniciar el tratamiento, sobre todo en mayores, hepatopatas y consumidores de alcohol. Serología de VIH si no se conoce.',
      imagen: 'RADIOGRAFÍA DE TÓRAX obligada en todos antes de tratar. Las lesiones fibróticas apicales compatibles con tuberculosis antigua no tratada suben el riesgo y bajan el umbral de induración a 5 mm.',
      complementarios: 'Estudio microbiológico de esputo si hay cualquier síntoma o alteración radiológica. El cribado solo tiene sentido en quien se va a tratar si el resultado es positivo.',
      dx_diferencial: 'Falso positivo de la tuberculina por vacuna BCG o por micobacterias ambientales (no ocurre con el IGRA). Falso negativo por inmunosupresión, enfermedad grave, edad avanzada o infección muy reciente, ya que la prueba tarda semanas en positivizarse.',
      tx_medico: 'Información clara sobre el sentido del tratamiento: no se trata una enfermedad presente sino que se evita una futura. Esa explicación es determinante para el cumplimiento de una pauta larga en una persona que se encuentra bien.',
      tx_farmacologico: 'Se prefieren las pautas CORTAS CON RIFAMICINA por mejor cumplimiento y menor hepatotoxicidad: isoniazida más rifapentina semanal durante 3 meses, o rifampicina diaria durante 4 meses. La isoniazida sola durante 6 a 9 meses sigue siendo valida. Añadir piridoxina con las pautas que incluyan isoniazida en pacientes de riesgo.',
      tx_intervencionista: 'No aplica.',
      criterios_uci: 'No aplica.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'El cribado de infección latente es obligado ANTES de un trasplante y antes de iniciar biológicos, y el tratamiento debe iniciarse antes de la inmunosupresión siempre que sea posible.',
      seguimiento_hospitalario: 'No aplica salvo hepatotoxicidad.',
      seguimiento_ambulatorio: 'Control clínico mensual con pregunta dirigida sobre síntomas de hepatotoxicidad. Perfil hepático si hay factores de riesgo o síntomas. Insistir en completar la pauta, que es donde falla el tratamiento de la latente.',
      pronostico: 'El tratamiento reduce de forma sustancial el riesgo de progresar a enfermedad. El beneficio es mayor cuanto mayor es el riesgo basal del paciente, lo que refuerza que el cribado debe dirigirse y no hacerse de forma indiscriminada.',
      algoritmo: ['Decidir a quien se criba: solo a quien se tratara si sale positivo', 'Elegir tuberculina o IGRA según disponibilidad y antecedente de BCG', 'Aplicar el umbral de induración según el GRUPO DE RIESGO', 'DESCARTAR enfermedad activa: síntomas, exploración y radiografía', 'Ante cualquier duda, estudio microbiológico de esputo', 'Pedir perfil hepático basal en pacientes de riesgo', 'Elegir preferentemente una pauta corta con rifamicina', 'Revisar interacciones si se usa rifampicina o rifapentina', 'Añadir piridoxina si la pauta lleva isoniazida y hay riesgo', 'Seguimiento mensual y refuerzo del cumplimiento']
    },
    {
      nombre: 'Tuberculosis extrapulmonar',
      color: '#7a2f5c',
      definicion: 'Afectación por <em>M. tuberculosis</em> de órganos distintos del parénquima pulmonar, por diseminación linfática o hematógena desde el foco primario.',
      fisiopatologia: 'Durante la primoinfeccion se produce una bacteriemia silente que siembra bacilos en órganos con alta perfusión y alta presión de oxígeno: vértices pulmonares, corteza renal, epifisis de huesos largos, cuerpos vertebrales y meninges. Esos focos quedan latentes y pueden reactivarse años después. La forma MILIAR corresponde a una diseminación hematógena masiva, por progresión de la primoinfeccion o por rotura de un foco a un vaso.',
      epidemiologia: 'Representa una proporción importante de los casos y su frecuencia relativa aumenta mucho en el paciente con VIH y en otros inmunodeprimidos. La localización más frecuente es la ganglionar, seguida de la pleural. La meníngea y la miliar son las de peor pronóstico.',
      factores_riesgo: ['Infección por VIH con linfocitos CD4 bajos', 'Edad avanzada y edad infantil', 'Inmunosupresión farmacológica', 'Insuficiencia renal crónica', 'Diabetes mellitus', 'Desnutricion', 'Alcoholismo', 'Procedencia de zona de alta incidencia', 'Retraso diagnóstico de la forma pulmonar', 'Gastrectomía y síndromes de malabsorción'],
      clinica: 'Depende del órgano. GANGLIONAR: adenopatías cervicales indoloras que pueden fistulizar (escrofula). PLEURAL: derrame unilateral con dolor y fiebre. MENÍNGEA: cefalea, fiebre y alteración progresiva del nivel de conciencia y de pares craneales en semanas. OSTEOARTICULAR: espondilitis dorsolumbar con destrucción vertebral y absceso frío (mal de Pott). GENITOURINARIA: piuria estéril y hematuria. PERICÁRDICA: derrame con riesgo de taponamiento y de constricción. MILIAR: fiebre prolongada, deterioro general y patrón micronodular difuso.',
      criterios_dx: 'Confirmación microbiológica siempre que sea posible, con MUESTRA DEL ÓRGANO AFECTADO. El rendimiento del cultivo es bajo en los líquidos, de modo que hay que insistir en la BIOPSIA, cuyo estudio histológico y microbiológico rinde mucho más.',
      laboratorio: 'Prueba molecular y cultivo de la muestra obtenida. Adenosina desaminasa en líquido pleural, ascítico y pericárdico. En el líquido cefalorraquídeo: pleocitosis linfocitaria, proteínas MUY elevadas y glucosa baja, un patrón muy sugestivo en el contexto adecuado.',
      imagen: 'Resonancia craneal con realce meníngeo BASAL, hidrocefalia e infartos por vasculitis en la meningitis. Resonancia de columna en la espondilitis. Ecocardiograma en la pericarditis. Tomografía abdominal en la forma peritoneal e intestinal. Radiografía con patrón miliar en la forma diseminada.',
      complementarios: 'BIOPSIA de la lesión: ganglionar, pleural, peritoneal, sinovial, medular o hepática según el caso. El hallazgo de granulomas con necrosis caseosa apoya con fuerza el diagnóstico, aunque no es específico y hay que enviar siempre muestra para cultivo.',
      dx_diferencial: 'Linfoma y otras neoplasias, sarcoidosis, micosis, brucelosis, enfermedad de Crohn en la forma intestinal, carcinomatosis peritoneal, meningitis por criptococo o carcinomatosa, y espondilodiscitis bacteriana.',
      tx_medico: 'Además del tratamiento antimicrobiano, valoración por las especialidades implicadas. En la afectación pulmonar concomitante, aislamiento respiratorio. La tuberculosis extrapulmonar aislada NO es contagiosa por via aérea.',
      tx_farmacologico: 'La misma pauta de primera línea, con dos particularidades. Duración: 9 a 12 meses en la MENINGITIS y pautas prolongadas en la osteoarticular. CORTICOIDES: indicados en la meningitis, donde reducen la mortalidad, y en la pericarditis, donde reducen la evolución a constricción. En la meningitis el tratamiento se inicia ante la sospecha, sin esperar confirmación.',
      tx_intervencionista: 'Drenaje de abscesos, pericardiocentesis en el taponamiento, ventriculostomía o derivación en la hidrocefalia de la meningitis, y cirugía en la espondilitis con inestabilidad o compresión medular.',
      criterios_uci: 'Meningitis con deterioro del nivel de conciencia o hidrocefalia aguda, taponamiento cardiaco, forma miliar con insuficiencia respiratoria y sepsis tuberculosa.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Igual que en la forma pulmonar: la enfermedad activa contraindica el trasplante hasta completar un tratamiento adecuado.',
      seguimiento_hospitalario: 'En la meningitis, vigilancia neurológica estrecha, control de la hidrocefalia y pauta descendente de corticoides. La reacción paradójica, con empeoramiento durante un tratamiento correcto, es frecuente y NO indica fracaso.',
      seguimiento_ambulatorio: 'Prolongado, con valoración de secuelas: neurológicas en la meningitis, funcionales en la osteoarticular y constrictivas en la pericarditis.',
      pronostico: 'Muy variable según la localización. La ganglionar y la pleural tienen excelente pronóstico. La meníngea sigue teniendo mortalidad alta y secuelas frecuentes, y su desenlace depende sobre todo del grado neurológico al iniciar el tratamiento, es decir, de cuanto se tardo en sospecharla.',
      algoritmo: ['Sospecharla ante fiebre prolongada o afectación de órgano sin explicación', 'Buscar siempre afectación pulmonar concomitante', 'Obtener muestra DEL ÓRGANO afectado, con biopsia si hace falta', 'Enviar la muestra para histología Y para cultivo', 'Pedir adenosina desaminasa en líquido pleural, ascítico o pericárdico', 'En la meningitis, iniciar el tratamiento ante la SOSPECHA', 'Añadir CORTICOIDES en meningitis y pericarditis', 'Prolongar a 9 a 12 meses en la meningitis', 'Valorar drenaje o cirugía según la localización', 'Advertir de la reacción paradójica, que no significa fracaso']
    },
    {
      nombre: 'Tuberculosis resistente a fármacos',
      color: '#8c3a34',
      definicion: 'Enfermedad producida por cepas resistentes a uno o más fármacos antituberculosos. La forma que más cambia el manejo es la MULTIRRESISTENTE, con resistencia al menos a isoniazida y rifampicina.',
      fisiopatologia: 'La resistencia surge por mutaciones cromosómicas espontáneas que la presión selectiva de un tratamiento inadecuado amplifica. Las tres formas de generarla son la monoterapia, el cumplimiento irregular y la adicion de un solo fármaco a una pauta que ya esta fallando. La resistencia PRIMARIA, en cambio, es la que se transmite ya formada de un enfermo a otro, y en muchas zonas es hoy la via principal.',
      epidemiologia: 'Una parte importante de los casos multirresistentes ocurre en pacientes sin tratamiento previo, es decir, por transmisión directa. El tratamiento es más largo, más tóxico y menos eficaz, aunque las pautas totalmente orales de introducción reciente han mejorado de forma sustancial los resultados y han acortado la duración.',
      factores_riesgo: ['Tratamiento antituberculoso previo, sobre todo si fue incompleto', 'Contacto con un caso multirresistente conocido', 'Procedencia de zona con alta prevalencia de resistencia', 'Fracaso terapéutico o recaída', 'Cultivo que sigue positivo tras 2 a 3 meses de tratamiento correcto', 'Cumplimiento irregular', 'Infección por VIH en algunos contextos', 'Estancia en instituciones cerradas', 'Malabsorción de los fármacos', 'Uso previo de fluoroquinolonas por otros motivos'],
      clinica: 'Indistinguible de la tuberculosis sensible. La pista no es clínica sino evolutiva y epidemiológica: falta de respuesta al tratamiento, cultivo que no se negativiza, antecedente de tratamiento previo o contacto con un caso resistente.',
      criterios_dx: 'ANTIBIOGRAMA. La prueba molecular rápida inicial detecta la resistencia a rifampicina en horas y es lo que ha cambiado la práctica, porque permite reorientar el tratamiento desde el primer dia en lugar de esperar semanas.',
      laboratorio: 'Estudio de sensibilidad de primera y segunda línea, con pruebas moleculares de resistencia ampliadas. Monitorización estrecha de la toxicidad de los fármacos de segunda línea: hemograma, función renal, función tiroidea y electrolitos.',
      imagen: 'Igual que en la forma sensible, con mayor frecuencia de enfermedad extensa y cavitada por el retraso en alcanzar un tratamiento eficaz.',
      complementarios: 'Electrocardiograma seriado por el riesgo de PROLONGACIÓN DEL QT con bedaquilina, fluoroquinolonas y clofazimina. Audiometría si se usan aminoglucósidos. Valoración oftalmológica y neurológica periódica.',
      dx_diferencial: 'Antes de asumir resistencia hay que descartar mala adherencia, malabsorción de los fármacos, dosificación insuficiente, reacción paradójica y un diagnóstico alternativo o concomitante.',
      tx_medico: 'Manejo en centro con experiencia y con comite de expertos. Apoyo intensivo a la adherencia, soporte psicológico y social, y control estricto de la transmisión, que en este escenario es especialmente importante.',
      tx_farmacologico: 'Pautas TOTALMENTE ORALES basadas en BEDAQUILINA, con combinaciones que incluyen pretomanid, linezolid y una fluoroquinolona. La pauta de 6 meses con bedaquilina, pretomanid, linezolid y moxifloxacino ha desplazado a los esquemas largos con inyectables en la mayoría de los pacientes. Los aminoglucósidos han quedado relegados por su toxicidad. La composición exacta se decide según el antibiograma y en comite.',
      tx_intervencionista: 'Cirugía de resección en casos seleccionados con enfermedad localizada y respuesta insuficiente al tratamiento médico.',
      criterios_uci: 'Insuficiencia respiratoria, hemoptisis amenazante y toxicidad grave por los fármacos de segunda línea.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Contraindicado hasta control de la enfermedad.',
      seguimiento_hospitalario: 'Aislamiento MÁS ESTRICTO y prolongado que en la forma sensible: los criterios de retirada exigen negativizacion del cultivo y no solo de la baciloscopia. Monitorización del QT y de la toxicidad hematológica y neurológica del linezolid.',
      seguimiento_ambulatorio: 'Seguimiento mensual con cultivos, control de toxicidad y apoyo a la adherencia. Estudio y seguimiento de contactos, que en la multirresistencia requiere valoración especializada.',
      pronostico: 'Peor que en la enfermedad sensible, aunque ha mejorado mucho con las pautas orales de introducción reciente, que además son más cortas y mejor toleradas. El pronóstico empeora a medida que se añade resistencia a fluoroquinolonas y a los fármacos del nucleo del esquema.',
      algoritmo: ['Sospecharla ante tratamiento previo, contacto con caso resistente o falta de respuesta', 'Pedir prueba molecular rápida, que detecta la resistencia a rifampicina en horas', 'Obtener antibiograma completo de primera y segunda línea', 'NO añadir nunca un solo fármaco a una pauta que falla', 'Remitir a centro con experiencia y decidir la pauta en comite', 'Usar esquemas totalmente orales basados en bedaquilina', 'Monitorizar el QT con electrocardiogramas seriados', 'Vigilar la toxicidad hematológica y neurológica del linezolid', 'Mantener aislamiento hasta negativizar el CULTIVO', 'Estudiar los contactos con valoración especializada']
    },
    {
      nombre: 'Poblaciones especiales y control de la transmisión',
      color: '#3d5a73',
      definicion: 'Situaciones en las que el diagnóstico, el tratamiento o las interacciones cambian de forma sustancial: infección por VIH, embarazo, hepatopatía, insuficiencia renal, y todo lo relativo a evitar que la enfermedad se transmita.',
      fisiopatologia: 'En el paciente con VIH, el déficit de linfocitos CD4 impide formar granulomas bien organizados, lo que explica las presentaciones atípicas, la radiografía normal y la mayor frecuencia de formas diseminadas y extrapulmonares. Al recuperar la inmunidad con el tratamiento antirretroviral puede aparecer un SÍNDROME INFLAMATORIO DE RECONSTITUCIÓN INMUNITARIA: la respuesta inmunitaria recuperada ataca antígenos micobacterianos residuales y produce un empeoramiento clínico que NO significa fracaso del tratamiento.',
      epidemiologia: 'La tuberculosis es una de las principales causas de muerte en personas con VIH. En el embarazo, la enfermedad no tratada es mucho más peligrosa que los fármacos de primera línea, un balance que a veces se olvida y retrasa el tratamiento.',
      factores_riesgo: ['Infección por VIH con linfocitos CD4 bajos', 'Retraso en el inicio del tratamiento antirretroviral', 'Hepatopatía crónica para la toxicidad', 'Insuficiencia renal crónica en diálisis', 'Embarazo y posparto', 'Edad avanzada', 'Alcoholismo', 'Polifarmacia con inductores o sustratos del citocromo', 'Convivencia en espacios cerrados y mal ventilados', 'Retraso en el aislamiento del caso índice'],
      clinica: 'En el VIH avanzado la presentación es atípica: puede no haber cavitación, la radiografía puede ser normal y predominan adenopatías y formas diseminadas. La reacción paradójica o el síndrome de reconstitución inmunitaria se manifiestan como fiebre, crecimiento de adenopatías o empeoramiento radiológico semanas después de iniciar el tratamiento.',
      criterios_dx: 'Los mismos, con umbral de sospecha más bajo y más insistencia en obtener muestras. En el VIH avanzado hay que buscar la enfermedad de forma activa incluso con radiografía normal.',
      laboratorio: 'Recuento de linfocitos CD4 y carga viral. Perfil hepático más estrecho en la hepatopatía. Ajuste de dosis según función renal. Determinación de niveles de los fármacos si se sospecha malabsorción.',
      imagen: 'Umbral bajo para hacer tomografía en el paciente con VIH, cuya radiografía puede ser normal o inespecífica. Imagen dirigida según la sospecha de afectación extrapulmonar, que aquí es más frecuente.',
      complementarios: 'Revisión sistemática de INTERACCIONES: la rifampicina es un potente inductor enzimático y reduce las concentraciones de muchos antirretrovirales, anticoagulantes, anticonceptivos, inmunosupresores y antiepilépticos. En algunos esquemas se sustituye por rifabutina, que induce menos.',
      dx_diferencial: 'En el paciente con VIH, considerar micobacterias no tuberculosas, neumonía por <em>Pneumocystis</em>, criptococosis, histoplasmosis, linfoma y sarcoma de Kaposi, que pueden coexistir con la tuberculosis.',
      tx_medico: 'CONTROL DE LA TRANSMISIÓN: aislamiento respiratorio desde la sospecha, habitación con presión negativa si se dispone, mascarilla de protección respiratoria para el personal, mascarilla quirúrgica para el paciente al salir, declaracion obligatoria y estudio de contactos. Los criterios de retirada del aislamiento exigen respuesta clínica y baciloscopias negativas, no solo tiempo.',
      tx_farmacologico: 'VIH: tratamiento antituberculoso primero y antirretroviral PRECOZ, en las 2 primeras semanas si los linfocitos CD4 son muy bajos, con la excepción de la MENINGITIS tuberculosa, en la que el inicio muy precoz se asoció a más mortalidad y se retrasa. EMBARAZO: la pauta de primera línea se considera segura y el riesgo de no tratar es mucho mayor; los aminoglucósidos están contraindicados por ototoxicidad fetal. HEPATOPATÍA: pautas con menos hepatotóxicos y controles más estrechos. INSUFICIENCIA RENAL: isoniazida y rifampicina sin cambios; pirazinamida y etambutol tres veces por semana.',
      tx_intervencionista: 'Según la complicación. En el síndrome de reconstitución inmunitaria grave, corticoides, manteniendo tanto el tratamiento antituberculoso como el antirretroviral.',
      criterios_uci: 'Formas diseminadas con insuficiencia respiratoria, síndrome de reconstitución inmunitaria grave con afectación del sistema nervioso central, y toxicidad grave por fármacos.',
      criterios_tips: 'No aplica.',
      criterios_trasplante: 'Cribado obligatorio de infección latente antes de todo trasplante y antes de iniciar biológicos, con tratamiento previo a la inmunosupresión siempre que sea posible.',
      seguimiento_hospitalario: 'Coordinación con medicina preventiva para el aislamiento y el estudio de contactos. Revisión de interacciones en cada cambio de medicación. Ante empeoramiento tras iniciar el antirretroviral, pensar en reconstitución inmunitaria antes que en fracaso.',
      seguimiento_ambulatorio: 'Seguimiento conjunto con la unidad de VIH. Control de la adherencia a los dos tratamientos a la vez, que es una carga considerable para el paciente y donde más apoyo hace falta.',
      pronostico: 'Bueno con tratamiento completo y precoz, incluso en el paciente con VIH cuando se combina con antirretrovirales. El retraso diagnóstico y la falta de control de la transmisión son los determinantes que más pesan a escala poblacional.',
      algoritmo: ['AISLAR desde la sospecha, sin esperar confirmación', 'Declarar el caso e iniciar el estudio de contactos', 'Pedir serología de VIH a todos los pacientes', 'En el VIH, iniciar antituberculoso primero y antirretroviral precoz', 'RETRASAR el antirretroviral en la meningitis tuberculosa', 'Revisar todas las interacciones de la rifampicina', 'En el embarazo, tratar: el riesgo de no hacerlo es mayor', 'Ajustar pirazinamida y etambutol en la insuficiencia renal', 'Ante empeoramiento tras el antirretroviral, pensar en reconstitución inmunitaria', 'Retirar el aislamiento por criterios clínicos y microbiológicos, no solo por tiempo']
    }
  ],
  seguimiento_intrahospitalario: {
    intro: 'En tuberculosis los errores se repiten con una regularidad notable: se descarta por una prueba que no sirve para descartar, se trata sin haber excluido la enfermedad activa, se pierde el aislamiento o se abandona el seguimiento a mitad. Lo que sigue es la lista de comprobacion que evita esos fallos.',
    parametros: ['Aislar desde la SOSPECHA, sin esperar confirmación microbiológica', 'No descartar la enfermedad por una baciloscopia negativa', 'No descartarla por una tuberculina o un IGRA negativos', 'Pedir CULTIVO siempre, aunque la prueba molecular ya sea positiva', 'Pedir SEROLOGÍA DE VIH a todo paciente con tuberculosis', 'Obtener analítica basal antes de iniciar el tratamiento', 'DESCARTAR enfermedad activa antes de tratar una infección latente', 'No añadir nunca un solo fármaco a una pauta que esta fallando', 'Añadir piridoxina si hay riesgo de neuropatía por isoniazida', 'Revisar las interacciones de la rifampicina en cada cambio de medicación', 'Comprobar el cultivo del SEGUNDO MES: decide si hay que prolongar', 'Declarar el caso y hacer el estudio de contactos, que es parte del tratamiento'],
    criterios_uci_general: 'Insuficiencia respiratoria grave, tuberculosis miliar con síndrome de dificultad respiratoria aguda, hemoptisis amenazante, meningitis con deterioro del nivel de conciencia o hidrocefalia aguda, taponamiento pericárdico, hepatitis fulminante por fármacos y síndrome de reconstitución inmunitaria grave.',
    criterios_tips_general: 'No aplica a este tema.',
    criterios_trasplante_general: 'La tuberculosis activa contraindica el trasplante hasta completar un tratamiento adecuado. El cribado de infección latente es obligado antes de todo trasplante y antes de iniciar biológicos, y el tratamiento debe empezar antes de la inmunosupresión siempre que sea posible. El trasplante hepático se plantea de forma excepcional en la hepatitis fulminante por fármacos antituberculosos.',
    prevencion: 'Primaria: control de la transmisión con detección y tratamiento precoz de los casos contagiosos, aislamiento respiratorio, ventilación adecuada de los espacios y protección respiratoria del personal. La vacuna BCG protege sobre todo frente a las formas graves del niño (meningitis y miliar) y no evita la infección pulmonar del adulto. Secundaria: cribado dirigido y tratamiento de la infección latente en los grupos de riesgo, sobre todo contactos recientes, personas con VIH, candidatos a biológicos y a trasplante. Terciaria: adherencia al tratamiento con apoyo activo, tratamiento directamente observado en pacientes de riesgo de abandono, y seguimiento de las secuelas.'
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
  'Tuberculosis pulmonar: sospecha y diagnóstico': { definicion: [11, 15, 16], criterios_dx: [11, 15, 16], laboratorio: [11, 15, 16], tx_farmacologico: [11, 15, 16] },
  'Tratamiento de la tuberculosis sensible y su toxicidad': { definicion: [1, 3], criterios_dx: [1, 3], laboratorio: [1, 3], tx_farmacologico: [1, 3] },
  'Infección tuberculosa latente': { definicion: [4, 5, 14], criterios_dx: [4, 5, 14], laboratorio: [4, 5, 14], tx_farmacologico: [4, 5, 14] },
  'Tuberculosis extrapulmonar': { definicion: [8, 9], criterios_dx: [8, 9], laboratorio: [8, 9], tx_farmacologico: [8, 9] },
  'Tuberculosis resistente a fármacos': { definicion: [2, 6, 7], criterios_dx: [2, 6, 7], laboratorio: [2, 6, 7], tx_farmacologico: [2, 6, 7] },
  'Poblaciones especiales y control de la transmisión': { definicion: [10, 12, 13], criterios_dx: [10, 12, 13], laboratorio: [10, 12, 13], tx_farmacologico: [10, 12, 13] }
};
export const estigmasTitulo = 'Signos y pistas que orientan hacia una tuberculosis';
export const estigmas = [
  { s: 'Tos de más de 2 o 3 semanas', p: 'El síntoma que dispara la sospecha', photo: null, desc: 'Es el criterio de cribado clínico más usado en el mundo. Su valor no esta en la especificidad, que es baja, sino en que obliga a pensar en la enfermedad y a pedir el estudio microbiológico, que es lo que se pierde cuando no se piensa en ella.' },
  { s: 'Sudoración nocturna con febrícula vespertina', p: 'Muy característica', photo: null, desc: 'La combinación de sudoración que empapa la ropa de cama con febrícula al final del dia y pérdida de peso es el cuadro constitucional clásico. Comparte presentación con el linfoma y con otras infecciones crónicas.' },
  { s: 'Cavitación en el vertice pulmonar', p: 'La lesión típica', photo: null, desc: 'Los segmentos apicales y posteriores tienen la presión de oxígeno más alta del pulmón, y el bacilo es aerobio estricto. La caverna es a la vez la lesión característica y el mecanismo de contagio, porque se vacia hacia un bronquio.' },
  { s: 'Patrón miliar en la radiografía', p: 'Diseminación hematógena', photo: null, desc: 'Micronodulos de tamaño uniforme distribuidos por todo el pulmón, como granos de mijo. Indica siembra hematógena masiva y obliga a buscar afectación de otros órganos, sobre todo meníngea, y a tratar sin demora.' },
  { s: 'Adenopatía cervical que fistuliza', p: 'Escrofula', photo: null, desc: 'Adenitis tuberculosa cervical, indolora y de crecimiento lento, que puede reblandecerse y drenar al exterior. Es la forma extrapulmonar más frecuente y su diagnóstico exige biopsia con estudio histológico y cultivo.' },
  { s: 'Espondilitis dorsolumbar con absceso frío', p: 'Mal de Pott', photo: null, desc: 'Destrucción de cuerpos vertebrales contiguos con conservacion relativa del disco, y absceso paravertebral sin signos inflamatorios locales. Puede producir deformidad en giba y compresión medular, y se confunde con una espondilodiscitis bacteriana.' },
  { s: 'Líquido cefalorraquídeo con proteínas muy altas', p: 'Meningitis tuberculosa', photo: null, desc: 'Pleocitosis de predominio linfocitario, proteínas muy elevadas y glucosa baja. En el contexto adecuado el patrón es muy sugestivo, y en la meningitis el tratamiento se inicia ante la sospecha porque el pronóstico depende de la precocidad.' },
  { s: 'Realce meníngeo BASAL en la resonancia', p: 'Muy sugestivo', photo: null, desc: 'La afectación predomina en las cisternas de la base, lo que explica la hidrocefalia y la afectación de pares craneales. Se acompaña de infartos por vasculitis de las arterias perforantes, que son los que dejan secuelas.' },
  { s: 'Piuria estéril con hematuria', p: 'Tuberculosis genitourinaria', photo: null, desc: 'Leucocitos en orina con urocultivo convencional repetidamente negativo. Obliga a pedir cultivo específico de micobacterias en orina de varias micciones matutinas, que es una peticion que hay que hacer de forma explícita.' },
  { s: 'Derrame pleural con adenosina desaminasa alta', p: 'Apoya el diagnóstico', photo: null, desc: 'Exudado de predominio linfocitario con adenosina desaminasa elevada en un paciente joven de zona de alta incidencia. El cultivo del líquido rinde poco, de modo que la biopsia pleural aumenta mucho la rentabilidad.' },
  { s: 'Empeoramiento tras iniciar el antirretroviral', p: 'Reconstitución inmunitaria', photo: null, desc: 'Fiebre, crecimiento de adenopatías o empeoramiento radiológico semanas después de empezar el tratamiento antirretroviral. NO significa fracaso: se mantienen ambos tratamientos y se añaden corticoides en los casos graves.' },
  { s: 'Orina de color naranja', p: 'Rifampicina', photo: null, desc: 'Tiñe orina, lágrimas y sudor. Es inofensivo pero hay que avisarlo antes de empezar, porque si el paciente lo descubre sin explicación previa abandona el tratamiento. También mancha de forma permanente las lentes de contacto blandas.' }
];
export const biopsia = null;
export const escalaRefs = {
  'Interpretación de la tuberculina y del IGRA (calculadora disponible)': [4, 11],
  'Dosificación de los fármacos de primera línea (calculadora disponible)': [1],
  'Umbrales de hepatotoxicidad (calculadora disponible)': [1],
  'Criterios de retirada del aislamiento (calculadora disponible)': [1, 11],
  'Clasificación por patrón de resistencia': [2],
  'Escala de gravedad de la meningitis tuberculosa': [8]
};
export const escalaCalc = {
  'Interpretación de la tuberculina y del IGRA (calculadora disponible)': 'ppd-igra',
  'Dosificación de los fármacos de primera línea (calculadora disponible)': 'dosis-tb',
  'Umbrales de hepatotoxicidad (calculadora disponible)': 'hepatotoxicidad-tb',
  'Criterios de retirada del aislamiento (calculadora disponible)': 'aislamiento-tb'
};
export const compGroups = [
  { name: 'Enfermedad pulmonar', items: ['Tuberculosis pulmonar: sospecha y diagnóstico', 'Tratamiento de la tuberculosis sensible y su toxicidad'] },
  { name: 'Latente y extrapulmonar', items: ['Infección tuberculosa latente', 'Tuberculosis extrapulmonar'] },
  { name: 'Lo que complica el manejo', items: ['Tuberculosis resistente a fármacos', 'Poblaciones especiales y control de la transmisión'] }
];
export const complicacionesIntro = 'Las dos primeras fichas son la enfermedad pulmonar, separada en sospechar y diagnosticar por un lado y tratar por otro, porque el primer problema es de elección de prueba y el segundo, de duración y toxicidad. Las dos siguientes son las dos caras que no encajan en ese molde: la infección latente, que no es enfermedad y se trata para que no llegue a serlo, y la afectación de otros órganos, donde el diagnóstico depende de conseguir una muestra. Las dos últimas recogen lo que más complica el manejo: la resistencia y los pacientes en los que las reglas cambian.';
export const categories = [
  { id: 'definicion', label: 'Definicion' },
  { id: 'diagnostico', label: 'Diagnostico' },
  { id: 'clasificacion', label: 'Escalas' },
  { id: 'complicaciones', label: 'Formas y complicaciones' },
  { id: 'seguimiento', label: 'Seguimiento' },
  { id: 'autoevaluacion', label: 'Autoevaluacion' },
  { id: 'bibliografia', label: 'Bibliografia' }
];
export const arbol = {
  root: { title: 'TUBERCULOSIS', color: '#5a6b2e', target: 'definicion' },
  branches: [
    { title: 'INFECCIÓN O ENFERMEDAD', sub: 'No son lo mismo', color: '#8a6a1f', target: 'complicaciones', leaves: [
      { title: 'Latente', sub: 'Asintomática y no contagia', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Activa', sub: 'Confirmación microbiológica', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Descartar activa antes', sub: 'Tratar latente a un enfermo es monoterapia', color: '#8c3a34', target: 'complicaciones' },
      { title: 'Umbral por grupo de riesgo', sub: '5, 10 o 15 mm', color: '#3f6b52', target: 'clasificacion' }
    ] },
    { title: 'QUE PRUEBA', sub: 'Y que dice cada una', color: '#5a6b2e', target: 'diagnostico', leaves: [
      { title: 'Molecular rápida', sub: 'Inicial: especie y rifampicina', color: '#5a6b2e', target: 'diagnostico' },
      { title: 'Baciloscopia', sub: 'Mide contagiosidad', color: '#3d5a73', target: 'diagnostico' },
      { title: 'Cultivo', sub: 'Referencia y antibiograma', color: '#8c3a34', target: 'diagnostico' },
      { title: 'VIH a todos', sub: 'La omisión menos justificable', color: '#7a2f5c', target: 'diagnostico' }
    ] },
    { title: 'TRATAR', sub: 'Seis meses y cuatro fármacos', color: '#3f6b52', target: 'complicaciones', leaves: [
      { title: '2 HRZE + 4 HR', sub: 'La pauta estándar', color: '#3f6b52', target: 'complicaciones' },
      { title: 'Piridoxina', sub: 'Si hay riesgo de neuropatía', color: '#8a6a1f', target: 'complicaciones' },
      { title: 'Interacciones', sub: 'La rifampicina induce mucho', color: '#8c5a2e', target: 'complicaciones' },
      { title: 'Cultivo del 2.o mes', sub: 'Decide si se prolonga', color: '#3d5a73', target: 'clasificacion' }
    ] }
  ]
};
export const diagCites = { laboratorio: [1, 11], no_invasivos: [1, 4], imagen: [11, 15] };
export const clasificacionCite = [1, 2, 4, 8];
export const seguimientoCite = [1, 10, 11];
